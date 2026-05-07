i.d(t, { D: () => bd });
var n,
    s,
    l,
    r,
    a,
    o = i(419954),
    u = i(780964),
    d = i(682348),
    c = i(885386),
    g = i(375708),
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
let x = (0, E.mj)({
        name: "2026-02-activity-privacy-matching",
        kind: "user",
        defaultConfig: { copyChanges: !1, upsell: !1 },
        variations: {
            0: { copyChanges: !1, upsell: !1 },
            1: { copyChanges: !0, upsell: !1 },
            2: { copyChanges: !0, upsell: !0 },
        },
    }),
    S = (e) => {
        let t = (0, T.lX)(e),
            i = x.useConfig({ location: e });
        return t || i.copyChanges;
    };
var p = i(627968),
    N = i(64700),
    f = i(873298),
    _ = i(192308),
    C = i(365258);
let I = (0, o.Qx)(u.X.ACTIVITY_PRIVACY_PER_GUILD_DEFAULT_SETTING, {
        useTitle: () =>
            S("GuildActivitySharingDefaultSetting") ? g.intl.string(g.t.vpgck1) : g.intl.string(m.default["/LHVbt"]),
        useOptions: function () {
            let e = S("GuildActivitySharingDefaultSetting");
            return N.useMemo(
                () =>
                    e
                        ? [
                              {
                                  value: f.Qd.ACTIVITY_STATUS_OFF,
                                  name: g.intl.string(g.t.FzgQna),
                                  desc: g.intl.string(g.t.SQxoyc),
                              },
                              {
                                  value: f.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
                                  name: g.intl.string(g.t["1hvuGH"]),
                                  desc: g.intl.string(g.t.odUCPE),
                              },
                              { value: f.Qd.ACTIVITY_STATUS_ON, name: g.intl.string(g.t.fQc5la) },
                          ]
                        : [
                              { value: f.Qd.ACTIVITY_STATUS_ON, name: g.intl.string(g.t.UzGMH9) },
                              {
                                  value: f.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
                                  name: g.intl.string(m.default["/sAeRY"]),
                              },
                              { value: f.Qd.ACTIVITY_STATUS_OFF, name: g.intl.string(m.default.m3oL7Q) },
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
                !(0, T.W1)(t) && !x.getConfig({ location: t }).upsell)
            )
                return;
            let s = (0, C.g8)(n, e);
            if (null == s) return;
            let l = (0, C.Xc)(e);
            (0, _.openModalLazy)(async () => {
                let { default: e } = await Promise.all([i.e("92164"), i.e("67683"), i.e("62041"), i.e("41996")]).then(
                    i.bind(i, 32167),
                );
                return (t) =>
                    (0, p.jsx)(e, {
                        ...t,
                        direction: s.direction,
                        affectedGuildIds: s.affectedGuildIds,
                        settingName: l,
                    });
            });
        },
    }),
    b = (0, o.zZ)(u.X.ACTIVITY_PRIVACY_PER_GUILD_CATEGORY, {
        useTitle: () =>
            S("GuildActivitySharingCategory") ? g.intl.string(g.t.VDcvrR) : g.intl.string(m.default["1PougL"]),
        useSubtitle: () =>
            S("GuildActivitySharingCategory") ? g.intl.string(g.t["/Go08F"]) : g.intl.string(m.default.OO17Lg),
        buildLayout: () => [I],
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
    P = i(922016),
    G = i(980707),
    U = i(477782),
    M = i(939249),
    V = i(834730),
    k = i(847374),
    w = i(661531),
    F = i(123292),
    B = i(140735),
    z = i(498642),
    Y = i(174459),
    X = i(743790),
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
var q = i(652215),
    Q = i(842449);
function J(e) {
    let { guild: t, isActivityRestricted: i, onToggleActivityRestrictedGuild: n } = e,
        s = (0, O.bG)([z.A], () => z.A.getMemberCount(t.id));
    return (0, p.jsxs)(R.B, {
        as: "li",
        direction: "horizontal",
        align: "center",
        gap: 16,
        children: [
            (0, p.jsx)("div", { className: Q.FO, children: (0, p.jsx)(X.K, { guild: t, size: 48 }) }),
            (0, p.jsx)("div", {
                className: Q.QH,
                children: (0, p.jsx)(L.d, {
                    label: t.name,
                    description: g.intl.format(g.t.zRl6XR, { count: s ?? 0 }),
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
            setSearchQuery: s,
            sortOrder: l,
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
                s = (0, O.bG)([K.Ay], () => K.Ay.getFlattenedGuildIds()),
                l = (0, O.bG)([H.A], () => H.A.getGuilds()),
                r = s.map((e) => l[e]).filter(Boolean),
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
                h = m.map((e) => l[e.id]).filter(Boolean);
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
                    g ? d([]) : d(s);
                },
                numTotalGuilds: s.length,
                numActivityRestrictedGuilds: o.length,
            };
        })(),
        E = (0, N.useId)(),
        T = (0, N.useRef)(null),
        x = (0, N.useMemo)(
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
        S = x.find((e) => e.value === l)?.label ?? "";
    return (0, p.jsxs)("div", {
        className: Q.iE,
        children: [
            t,
            (0, p.jsxs)("div", {
                className: Q.N1,
                children: [
                    (0, p.jsx)(D.I, {
                        query: n,
                        onChange: s,
                        onClear: () => {
                            Y.default.track(q.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_cleared",
                                sort_order: l,
                                activity_restricted_guild_count: A,
                                total_guild_count: h,
                            }),
                                s("");
                        },
                        onFocus: () =>
                            Y.default.track(q.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_focused",
                                sort_order: l,
                                activity_restricted_guild_count: A,
                                total_guild_count: h,
                            }),
                        onBlur: () =>
                            Y.default.track(q.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_blurred",
                                sort_order: l,
                                activity_restricted_guild_count: A,
                                total_guild_count: h,
                            }),
                        placeholder: g.intl.string(g.t["H+nRYw"]),
                        "aria-label": g.intl.string(g.t["5h0QOP"]),
                        inputProps: { "aria-controls": E, "aria-expanded": !0 },
                    }),
                    i.length > 0 &&
                        (0, p.jsxs)("div", {
                            className: Q.gO,
                            children: [
                                (0, p.jsx)(P.Y, {
                                    targetElementRef: T,
                                    position: "bottom",
                                    align: "left",
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, p.jsx)(G.W, {
                                            navId: "guild-sort-order-menu",
                                            onClose: t,
                                            "aria-label": g.intl.string(g.t.LxVjvJ),
                                            onSelect: t,
                                            children: (0, p.jsx)(U.rX, {
                                                children: x.map((e) => {
                                                    let { id: t, label: i, value: n } = e;
                                                    return (0, p.jsx)(
                                                        U.iD,
                                                        {
                                                            id: t,
                                                            group: "sort-order",
                                                            label: i,
                                                            checked: l === n,
                                                            action: () => {
                                                                Y.default.track(
                                                                    q.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED,
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
                                        (0, p.jsxs)(M.D, {
                                            ...e,
                                            innerRef: T,
                                            className: Q.Ku,
                                            children: [
                                                (0, p.jsx)(V.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-subtle",
                                                    children: S,
                                                }),
                                                (0, p.jsx)(k.a, { size: "xs", color: w.A.colors.TEXT_SUBTLE }),
                                            ],
                                        }),
                                }),
                                (0, p.jsx)(F.Q, {
                                    variant: "primary",
                                    textVariant: "text-sm/medium",
                                    onClick: o,
                                    text: a ? g.intl.string(g.t["7lxcLO"]) : g.intl.string(g.t.zh6UEs),
                                }),
                            ],
                        }),
                ],
            }),
            (0, p.jsx)(B.A, {
                "aria-live": "polite",
                role: "region",
                children: g.intl.format(m.default.EvzDff, { count: i.length }),
            }),
            (0, p.jsxs)("ul", {
                className: Q.X1,
                id: E,
                "aria-label": g.intl.string(g.t["7hB4kg"]),
                children: [
                    0 === i.length &&
                        (0, p.jsx)("div", {
                            className: Q.pb,
                            children: (0, p.jsx)(V.E, {
                                className: Q.R$,
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
        useSubtitle: () => (S("MyServersCategory") ? g.intl.string(m.default.OO17Lg) : null),
        buildLayout: () => [et, j],
    }),
    en = (0, o.zD)(u.X.ACTIVITY_PRIVACY_FRIENDS_JOIN_SETTING, {
        useTitle: () => g.intl.string(m.default.khuuzv),
        useSubtitle: () => g.intl.string(m.default["8EWsJ8"]),
        useValue: () => c.e.useSetting(),
        setValue: (e) => c.e.updateSetting(e),
    }),
    es = (0, o.zD)(u.X.ACTIVITY_PRIVACY_VOICE_JOIN_SETTING, {
        useTitle: () => g.intl.string(m.default.Uz5Ipi),
        useSubtitle: () => g.intl.string(m.default.CZI2Gb),
        useValue: () => c.UM.useSetting(),
        setValue: (e) => c.UM.updateSetting(e),
    }),
    el = (0, o.zZ)(u.X.ACTIVITY_PRIVACY_GAME_JOINING_CATEGORY, {
        useTitle: () => g.intl.string(m.default["89YBr5"]),
        buildLayout: () => [en, es],
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
                children: (0, p.jsx)(V.E, {
                    variant: "text-sm/normal",
                    children: g.intl.format(g.t.xvCsx4, { termsLink: q.X7G.TERMS, privacyLink: q.X7G.PRIVACY }),
                }),
            });
        },
    }),
    eu = (0, o.zZ)(u.X.ACTIVITY_PRIVACY_TERMS_CATEGORY, { buildLayout: () => [eo] }),
    ed = (0, o.t_)(u.X.ACTIVITY_PRIVACY_PANEL, {
        useTitle: () => g.intl.string(g.t.Cq98yL),
        buildLayout: () => [h, b, ei, el, eu],
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
    eE = i(404778),
    eT = i(554146),
    ex = i(131607),
    eS = i(843402),
    ep = i(589051),
    eN = i(592598),
    ef = i(933297),
    e_ = i(351906),
    eC = i(532624),
    eI = i(773371),
    eb = i(184809),
    ev = i(723702),
    ej = i(858897),
    ey = i(17460),
    eO = i(735438),
    eR = i.n(eO),
    eL = i(350535),
    eD = i(672396);
let eP = eU(null);
function eG() {
    var e;
    let t = eU(eP);
    (e = eP),
        eR().isEqual(eR().omit(t, "old_enabled"), eR().omit(e, "old_enabled")) ||
            (Y.default.track(q.HAw.OVERLAY_SETTINGS_UPDATED, { ...t }), (eP = t));
}
function eU(e) {
    let t = eb.default.getNotificationPositionMode(),
        i = t !== q.G6Q.DISABLED,
        n = eC.Ay.getOverlayKeybind(),
        s = eC.Ay.getOverlayChatKeybind();
    return {
        enabled: eI.default.enabled,
        notifications_enabled: i,
        notifications_position: i ? t : null,
        text_notifications_mode: eN.A.isNotificationDisabled(eD.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != n ? (0, eL.dI)(n.shortcut) : null,
        text_activation_hotkey: null != s ? (0, eL.dI)(s.shortcut) : null,
        text_opacity_slider: eb.default.getTextWidgetOpacity(),
        old_enabled: e?.enabled ?? eI.default.enabled,
    };
}
var eM = i(793574),
    eV = i(237984),
    ek = i(503698),
    ew = i.n(ek),
    eF = i(890856),
    eB = i(481384);
let ez = (e) => {
    e.preventDefault(), e.stopPropagation();
};
function eY(e) {
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
    return (0, p.jsxs)("div", {
        className: ew()(eB.HS, d),
        children: [
            (0, p.jsxs)(eF.s, {
                "aria-label": u,
                onClick: o,
                children: [
                    null != t && (0, p.jsx)("div", { className: eB.x_, children: t }),
                    (0, p.jsxs)("div", {
                        className: eB.rN,
                        children: [
                            null != i && (0, p.jsx)("div", { className: eB.$t, children: i }),
                            (0, p.jsxs)("div", {
                                className: eB.c8,
                                children: [
                                    (0, p.jsx)(V.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: eB.SZ,
                                        children: n,
                                    }),
                                    null != s &&
                                        (0, p.jsx)(V.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children: s,
                                        }),
                                    null != r &&
                                        (0, p.jsx)(V.E, {
                                            variant: "text-xxs/medium",
                                            color: "text-muted",
                                            children: r,
                                        }),
                                ],
                            }),
                            (0, p.jsx)("div", { className: eB.a$, children: l }),
                        ],
                    }),
                ],
            }),
            (0, p.jsx)("div", { className: eB.Om, children: a }),
        ],
    });
}
let eX = (0, o.E2)(u.X.OVERLAY_BUG_REPORTER_SETTING, {
    Component: function () {
        return (0, p.jsx)(eY, {
            title: g.intl.string(g.t["z4/l+V"]),
            description: g.intl.string(g.t["3aZq/0"]),
            action: (0, p.jsx)(eh.$, {
                variant: "primary",
                text: g.intl.string(g.t.s2nVhG),
                onClick: () => {
                    (0, eV.b)(eM.A.USER_SETTINGS, q.BRT.APP);
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
    eq = i(616356),
    eQ = i(952818);
function eJ(e, t) {
    return null != e && null != e.id ? e.id : null != t && null != t.id ? t.id : void 0;
}
function e$() {
    let e = (0, O.bG)([eq.A], () => eq.A.getStreamerActiveStreamMetadata()),
        t = (0, O.bG)(
            [eQ.Ay],
            () => {
                let e = eQ.Ay.getVisibleGame();
                return null != e ? eQ.Ay.getGameOrTransformedSubgameForPID(e.pid) : null;
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
    e6 = i(684013),
    e4 = i(56562),
    e7 = i(964486),
    e8 = i(137177),
    e5 = i(814925),
    e9 = i(810412),
    te = i(41984),
    tt = i(296027),
    ti = i(562519);
let tn = 5 * i(927813).A.Millis.DAY,
    ts = new ti.A("overlay_survey_timestamps");
function tl(e, t) {
    let n, s;
    (n = Date.now()),
        (null != (s = Array.from(ts.values()).reduce((e, t) => Math.max(e, t), 0)) && n - s < tn) ||
            Array.from(ts.values()).filter((e) => {
                let t = new Date(e);
                return t.getMonth() === new Date().getMonth() && t.getFullYear() === new Date().getFullYear();
            }).length >= 3 ||
            (0, _.openModalLazy)(async () => {
                let n,
                    { default: s } = await Promise.all([i.e("76982"), i.e("82318")]).then(i.bind(i, 387101));
                return (n = Date.now()), ts.add(n), (i) => (0, p.jsx)(s, { ...i, clientSettingType: e, gameId: t });
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
                  children: g.intl.format(g.t["LJzl+0"], { helpCenterLink: ta.A.getArticleURL(q.MVz.SYSTEM_SERVICE) }),
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
    let { children: t, className: i, onExpand: n, ...s } = e,
        [l, r] = N.useState(!1);
    return (0, p.jsx)(tA.N, {
        className: eB.uR,
        collapsibleContent: (0, p.jsx)("div", { className: eB.oV, children: t }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, p.jsx)(eY, {
                ...s,
                onClick: (e) => {
                    var i;
                    r((i = !l)), n?.(i), t?.(e);
                },
                className: ew()(eB.AC, i),
                action: (0, p.jsxs)("div", {
                    className: eB.rc,
                    children: [
                        s.action,
                        l
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
let tx = (0, o.E2)(u.X.OVERLAY_CURRENT_GAME, {
    Component: function () {
        let { runningGame: e, runningGameApplication: t } = e$(),
            i = e?.pid,
            n = (0, O.bG)(
                [tt.default],
                () => (null == e || null == i ? null : tt.default.getTrackedGameByPid(i)),
                [e, i],
                eK(),
            ),
            { enabledLegacy: s, enabledOOP: l } = (0, O.cf)(
                [tc.A, tg.A],
                () =>
                    null == e && null == n
                        ? { enabledLegacy: !1, enabledOOP: !1 }
                        : null == e
                          ? { enabledLegacy: n?.legacyEnabled ?? !1, enabledOOP: n?.oopEnabled ?? !1 }
                          : (0, eQ.hw)(e, !1, [tc.A, tg.A]),
                [e, n],
            ),
            r = (0, O.bG)([eQ.Ay, tc.A, tg.A], () => (null == e ? null : (0, eQ.xU)(e, eQ.Ay, tc.A, tg.A)), [e], eK()),
            [a, o] = N.useState(l),
            [u, d] = N.useState(s),
            [c, m] = N.useState(!1);
        N.useEffect(() => {
            o(l), d(s);
        }, [l, s]);
        let A = !(0, tm.supportsLegacy)(),
            h = !(0, tm.supportsOutOfProcess)(),
            { legacyEnabled: E, oopEnabled: T } = (0, O.cf)([tt.default], () => tt.default.getGlobalEnabledStatus()),
            x = (t, i) => {
                if (null == e) return;
                let n = !1,
                    s = !1;
                switch (i) {
                    case e9.OverlayToggledClientSettingType.LEGACY_GAME:
                        d(t), e3.Ay.toggleOverlay(e, t, a), (n = !t && u);
                        break;
                    case e9.OverlayToggledClientSettingType.OOP_GAME:
                        o(t), e3.Ay.toggleOverlay(e, u, t), (s = !t && a);
                        break;
                    case e9.OverlayToggledClientSettingType.LEGACY:
                        e6.A.setEnabled(t, T), (0, e9.Q3)(t, e9.OverlayToggledClientSettingType.LEGACY, e.id ?? null);
                        break;
                    case e9.OverlayToggledClientSettingType.OOP:
                        e6.A.setEnabled(E, t), (0, e9.Q3)(t, e9.OverlayToggledClientSettingType.OOP, e.id ?? null);
                }
                (n || s) &&
                    tl(
                        n
                            ? e9.OverlayToggledClientSettingType.LEGACY_GAME
                            : e9.OverlayToggledClientSettingType.OOP_GAME,
                        e.id ?? null,
                    );
            },
            S = A && h,
            f = !E && !T,
            _ = !a && !E && u && !A,
            C = !u && !T && a && !h,
            I = n?.overlayMethod === te.Ue.Disabled,
            b = n?.state === te.AR.OVERLAY_RENDERING && !I,
            v = n?.state != null && tE.has(n.state) && !I,
            j = n?.overlayMethod === te.Ue.OutOfProcess,
            y = n?.overlayMethod === te.Ue.OutOfProcessLimitedInteraction,
            R = n?.overlayMethod === te.Ue.Hook,
            D = n?.state === te.AR.OVERLAY_CRASHED || n?.state === te.AR.OVERLAY_CRASHED_DISABLED,
            P = !a && !u,
            [G, U] = (() => {
                switch (!0) {
                    case b && j:
                        return [
                            g.intl.format(g.t.hFVBIg, {
                                overlayMethod: g.intl.string(g.t.a3eXSw),
                                overlayMethodHook: function (e, t) {
                                    return (0, p.jsx)(
                                        V.E,
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
                            g.intl.format(g.t.hFVBIg, {
                                overlayMethod: g.intl.string(g.t["506Aba"]),
                                overlayMethodHook: function (e, t) {
                                    return (0, p.jsx)(
                                        V.E,
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
                    case b && R:
                        return [
                            g.intl.format(g.t.hFVBIg, {
                                overlayMethod: g.intl.string(g.t.bvlpDR),
                                overlayMethodHook: function (e, t) {
                                    return (0, p.jsx)(
                                        V.E,
                                        { tag: "span", variant: "text-sm/medium", color: "text-strong", children: e },
                                        t,
                                    );
                                },
                            }),
                            (function () {
                                switch (!0) {
                                    case n?.fullscreenType !== e4.aI.BORDERLESS_FULLSCREEN:
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
                    case S:
                        return [g.intl.string(g.t.m7X4az), null];
                    case f:
                        return [g.intl.string(g.t["9DUS5l"]), null];
                    case P:
                        return [g.intl.string(g.t.nQ9EdJ), null];
                    case _:
                    case C:
                        return [g.intl.string(g.t.VWUn0a), null];
                    case v:
                        if (j) return [g.intl.string(g.t["s8+CFq"]), null];
                        if (R) return [g.intl.string(g.t.JEEdqt), null];
                        if (y) return [g.intl.string(g.t.pzBMwY), null];
                        return [g.intl.string(g.t["2Xhy9k"]), null];
                    case null == n:
                        return [g.intl.string(g.t.vwHPRi), null];
                    case I: {
                        let e = n?.fullscreenType === e4.aI.FULLSCREEN ? g.intl.string(g.t.mJmbeC) : null;
                        return [g.intl.string(g.t.VPW4XY), e];
                    }
                    default:
                        return [g.intl.string(g.t.ONovP5), null];
                }
            })();
        (0, e7.Ay)(() => {
            e3.Ay.getDetectableGames();
        });
        let [k, F] = N.useMemo(
            () =>
                v
                    ? ["text-muted", w.A.colors.TEXT_MUTED.css]
                    : b && y
                      ? ["text-feedback-warning", w.A.colors.TEXT_FEEDBACK_WARNING.css]
                      : b && j
                        ? ["text-feedback-positive", w.A.colors.TEXT_FEEDBACK_POSITIVE.css]
                        : b && R
                          ? ["text-strong", w.A.colors.TEXT_STRONG.css]
                          : ["interactive-text-default", w.A.colors.INTERACTIVE_TEXT_DEFAULT.css],
            [v, b, y, j, R],
        );
        return null == e
            ? null
            : (0, p.jsxs)(tT, {
                  onExpand: m,
                  className: c ? eB.tx : void 0,
                  title: (0, p.jsxs)(p.Fragment, {
                      children: [
                          t?.name ?? r?.name ?? e?.gameName ?? "",
                          null != r && r.verified
                              ? (0, p.jsx)(e0.m, {
                                    text: g.intl.string(g.t["4PJP5p"]),
                                    children: (0, p.jsx)(e5.A, {
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
                  description: G,
                  hint: null != U ? U : void 0,
                  header: (0, p.jsxs)(p.Fragment, {
                      children: [
                          b || v
                              ? (0, p.jsx)(e2.k, { size: "xxs", color: F })
                              : (0, p.jsx)("div", { className: eB.W4 }),
                          (0, p.jsx)(V.E, {
                              variant: "text-xs/semibold",
                              color: k,
                              children: g.intl.string(g.t.CDOx3w),
                          }),
                      ],
                  }),
                  icon: (0, p.jsx)(e8.A, { game: t, pid: e?.pid, size: e8.M.MEDIUM }),
                  "aria-label": g.intl.string(g.t["87O5GC"]),
                  action: (0, p.jsx)(M.D, {
                      onClick: (e) => ez(e),
                      children: (0, p.jsx)(L.d, {
                          checked: (a && T) || (u && E),
                          disabled: S,
                          onChange: (t) => {
                              ((t, i) => {
                                  if (null == e) return;
                                  let n = !1,
                                      s = !1;
                                  switch (i) {
                                      case "game":
                                          e3.Ay.toggleOverlay(e, t, t), d(t), o(t), (n = !t && u), (s = !t && a);
                                          break;
                                      case "global":
                                          e6.A.setEnabled(t, t), (n = !t && E), (s = !t && T);
                                          break;
                                      case "both":
                                          e6.A.setEnabled(t, t),
                                              e3.Ay.toggleOverlay(e, t, t),
                                              d(t),
                                              o(t),
                                              (n = (!t && E) || (!t && u)),
                                              (s = (!t && T) || (!t && a));
                                  }
                                  let l = null;
                                  n
                                      ? (l =
                                            "game" === i
                                                ? e9.OverlayToggledClientSettingType.LEGACY_GAME
                                                : e9.OverlayToggledClientSettingType.LEGACY)
                                      : s &&
                                        (l =
                                            "game" === i
                                                ? e9.OverlayToggledClientSettingType.OOP_GAME
                                                : e9.OverlayToggledClientSettingType.OOP),
                                      null != l && tl(l, e.id ?? null);
                              })(
                                  t,
                                  ((e, t) => {
                                      let i = !t && e,
                                          n = !T && a,
                                          s = !E && u,
                                          l = !a && T,
                                          r = !u && E;
                                      switch (!0) {
                                          case i && (n || s) && (l || r):
                                              return "both";
                                          case i && (n || s):
                                              return "global";
                                          default:
                                              return "game";
                                      }
                                  })(t, (a && T) || (u && E)),
                              );
                          },
                      }),
                  }),
                  warning: (0, p.jsx)(td, { className: eB.Hh, game: e }),
                  children: [
                      (0, p.jsx)(eY, {
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
                                              ? x(e, e9.OverlayToggledClientSettingType.OOP)
                                              : x(e, e9.OverlayToggledClientSettingType.OOP_GAME);
                                      },
                                  }),
                                  (0, p.jsx)("div", { className: eB.Kz }),
                              ],
                          }),
                      }),
                      (0, p.jsx)(eY, {
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
                                              ? x(e, e9.OverlayToggledClientSettingType.LEGACY)
                                              : x(e, e9.OverlayToggledClientSettingType.LEGACY_GAME);
                                      },
                                  }),
                                  (0, p.jsx)("div", { className: eB.Kz }),
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
var tS = i(364522),
    tp = i(206885),
    tN = i(871633);
function tf(e) {
    let { game: t, gameApplication: i } = e,
        n = N.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        s = (0, O.bG)([eW.A], () => (null != i ? i : eW.A.getApplication(t?.id)), [i, t]);
    return (0, p.jsx)(e8.A, { game: s, pid: n, size: e8.M.SMALL });
}
function t_(e) {
    let {
            rawGame: t,
            gameApplication: i,
            supportDisabled: n,
            getEnabledFromStatus: s,
            onChange: l,
            clientSettingType: r,
            ariaLabel: a,
        } = e,
        o = (0, O.cf)([eQ.Ay, tc.A, tg.A], () => (0, eQ.xU)(t, eQ.Ay, tc.A, tg.A)),
        u = (0, O.cf)([tc.A, tg.A], () => (0, eQ.hw)(t, !1, [tc.A, tg.A]), [t]),
        d = s(u),
        [c, g] = N.useState(d);
    return (
        N.useEffect(() => {
            g(d);
        }, [d]),
        (0, p.jsx)(eY, {
            title: t.name,
            icon: (0, p.jsx)(tf, { game: o, gameApplication: i }),
            "aria-label": a,
            action: (0, p.jsxs)(p.Fragment, {
                children: [
                    (0, p.jsx)(L.d, {
                        checked: c,
                        disabled: n,
                        onChange: (e) => {
                            let i;
                            return (i = !e && c), void (g(e), l(e, o, u), i && tl(r, o.id ?? t?.id ?? null));
                        },
                    }),
                    (0, p.jsx)("div", { className: eB.Kz }),
                ],
            }),
        })
    );
}
let tC = (0, o.E2)(u.X.OVERLAY_LEGACY_SETTING, {
        Component: function () {
            let [e, t] = N.useState(!1),
                { legacyEnabled: i, oopEnabled: n } = (0, O.cf)([tt.default], () =>
                    tt.default.getGlobalEnabledStatus(),
                ),
                s = (0, O.yK)([eQ.Ay], () => eQ.Ay.getGamesSeen(!0)).filter((e) => !(0, tN.n1)(e)),
                l = (0, eZ.A)(s.map((e) => e.id)),
                r = !(0, tm.supportsLegacy)(),
                a = (e) => {
                    e6.A.setEnabled(e, n);
                    let t = eQ.Ay.getCurrentGameForAnalytics()?.id ?? null;
                    (0, e9.Q3)(e, e9.OverlayToggledClientSettingType.LEGACY, t),
                        !e && i && tl(e9.OverlayToggledClientSettingType.LEGACY, t);
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
            return 0 === s.length
                ? (0, p.jsx)(eY, {
                      title: g.intl.string(g.t.BfFpW1),
                      description: u,
                      "aria-label": g.intl.string(g.t.BfFpW1),
                      className: eB.dA,
                      action: (0, p.jsxs)(p.Fragment, {
                          children: [
                              (0, p.jsx)(L.d, { checked: i, disabled: r, onChange: (e) => a(e) }),
                              tp.O && (0, p.jsx)("div", { className: eB.Kz }),
                          ],
                      }),
                  })
                : (0, p.jsxs)(tT, {
                      onExpand: t,
                      className: e ? eB.tx : void 0,
                      title: g.intl.string(g.t.BfFpW1),
                      description: u,
                      "aria-label": g.intl.string(g.t.BfFpW1),
                      action: (0, p.jsx)(M.D, {
                          onClick: (e) => ez(e),
                          children: (0, p.jsx)(L.d, { checked: i, disabled: r, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, p.jsx)("div", {
                              className: eB.SC,
                              children: (0, p.jsx)(V.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: g.intl.string(g.t.FzoWRo),
                              }),
                          }),
                          (0, p.jsx)(tS.Ip, {
                              className: eB.XG,
                              children: s.map((e, t) =>
                                  (0, p.jsx)(
                                      t_,
                                      {
                                          rawGame: e,
                                          clientSettingType: e9.OverlayToggledClientSettingType.LEGACY_GAME,
                                          supportDisabled: r,
                                          gameApplication: l[t],
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
    tI = (0, o.E2)(u.X.OVERLAY_OOP_SETTING, {
        Component: function () {
            let [e, t] = N.useState(!1),
                { oopEnabled: i, legacyEnabled: n } = (0, O.cf)([tt.default], () =>
                    tt.default.getGlobalEnabledStatus(),
                ),
                s = !(0, tm.supportsOutOfProcess)(),
                l = (0, O.yK)([eQ.Ay], () => eQ.Ay.getGamesSeen(!0)).filter((e) => !(0, tN.n1)(e)),
                r = (0, eZ.A)(l.map((e) => e.id)),
                a = (e) => {
                    let t = !e && i;
                    e6.A.setEnabled(n, e);
                    let s = eQ.Ay.getCurrentGameForAnalytics()?.id ?? null;
                    (0, e9.Q3)(e, e9.OverlayToggledClientSettingType.OOP, s),
                        t && tl(e9.OverlayToggledClientSettingType.OOP, s);
                },
                o = (e, t, i) => {
                    let { enabledLegacy: n } = i;
                    e3.Ay.toggleOverlay(t, e, n);
                },
                u = N.useMemo(
                    () =>
                        tp.O ? (s ? g.intl.string(g.t.C7bLTQ) : g.intl.string(g.t.ndgADE)) : g.intl.string(g.t.m7X4az),
                    [s],
                );
            return 0 === l.length
                ? (0, p.jsx)(eY, {
                      title: g.intl.string(g.t["7BlVIs"]),
                      description: u,
                      "aria-label": g.intl.string(g.t["7BlVIs"]),
                      className: eB.dA,
                      action: (0, p.jsxs)(p.Fragment, {
                          children: [
                              (0, p.jsx)(L.d, { checked: i, disabled: s, onChange: (e) => a(e) }),
                              tp.O && (0, p.jsx)("div", { className: eB.Kz }),
                          ],
                      }),
                  })
                : (0, p.jsxs)(tT, {
                      onExpand: t,
                      className: e ? eB.tx : void 0,
                      title: g.intl.string(g.t["7BlVIs"]),
                      description: u,
                      "aria-label": g.intl.string(g.t["7BlVIs"]),
                      action: (0, p.jsx)(M.D, {
                          onClick: (e) => ez(e),
                          children: (0, p.jsx)(L.d, { checked: i, disabled: s, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, p.jsx)("div", {
                              className: eB.SC,
                              children: (0, p.jsx)(V.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: g.intl.string(g.t.FzoWRo),
                              }),
                          }),
                          (0, p.jsx)(tS.Ip, {
                              className: eB.XG,
                              children: l.map((e, t) =>
                                  (0, p.jsx)(
                                      t_,
                                      {
                                          rawGame: e,
                                          clientSettingType: e9.OverlayToggledClientSettingType.OOP_GAME,
                                          gameApplication: r[t],
                                          supportDisabled: s,
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
    tb = (0, o.zZ)(u.X.OVERLAY_ENABLE_CATEGORY, {
        useSubnavLabel: () => g.intl.string(g.t["/dp6yY"]),
        buildLayout: () => [tx, tI, tC, eX],
    }),
    tv = (0, o.zD)(u.X.OVERLAY_CLICKABLE_REGIONS_SETTING, {
        useValue: () => (0, O.bG)([eb.default], () => !eb.default.disableClickableRegions),
        setValue: (e) => {
            e6.A.setDisableClickableRegions(!e);
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
        let e = (0, O.bG)([eC.Ay], () => eC.Ay.getOverlayKeybind()),
            t = !(0, tm.supportsLegacy)(),
            i = !(0, tm.supportsOutOfProcess)(),
            [n, s] = (0, O.yK)([eQ.Ay], () => [eQ.Ay.canShowAdminWarning, eQ.Ay.getVisibleGame()], []),
            l = (0, to.NP)(),
            r = null != s && s.elevated && n && !l,
            a = !(0, eC.DV)(e?.shortcut ?? []);
        return (0, p.jsx)("div", {
            className: eB.hc,
            children: (0, p.jsxs)("div", {
                className: eB.eH,
                children: [
                    (0, p.jsxs)("div", {
                        className: eB.Bu,
                        children: [
                            (0, p.jsx)(V.E, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: g.intl.string(g.t.VsAZcC),
                            }),
                            r &&
                                (0, p.jsx)(V.E, {
                                    variant: "text-xs/normal",
                                    color: "text-feedback-warning",
                                    className: eB.y7,
                                    children: g.intl.string(g.t.NsowVa),
                                }),
                            a &&
                                (0, p.jsx)(V.E, {
                                    variant: "text-xs/normal",
                                    color: "text-feedback-warning",
                                    className: eB.y7,
                                    children: g.intl.string(g.t["UNoTw/"]),
                                }),
                        ],
                    }),
                    (0, p.jsx)("div", {
                        className: eB.IH,
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
    tP = i(682763);
let tG = (0, o.zD)(u.X.OVERLAY_LIMITED_INTERACTION_OVERRIDE_SETTING, {
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
                n = (0, O.bG)([eN.A], () => eN.A.isLimitedInteractionOverrideEnabled(i)),
                s = null != e && (0, tD.qJ)(e.pid);
            return n || s;
        },
        setValue: (e) => {
            let t,
                i,
                n,
                s,
                { runningGameApplication: l } =
                    ((t = eq.A.getStreamerActiveStreamMetadata()),
                    (s = eJ(
                        t,
                        (n =
                            null != (i = eQ.Ay.getVisibleGame())
                                ? eQ.Ay.getGameOrTransformedSubgameForPID(i.pid)
                                : null),
                    )),
                    { runningGame: n ?? void 0, runningGameApplication: eW.A.getApplication(s) ?? void 0 });
            null != l && (0, tP.x8)(l.id, e);
        },
        useTitle: () => g.intl.string(g.t.wgVQND),
        useSubtitle: () => g.intl.string(g.t["5SsyF5"]),
    }),
    tU = (0, o.zZ)(u.X.OVERLAY_GENERAL_CATEGORY, { buildLayout: () => [tL, tG, tv] });
var tM = i(93465);
let tV = [
    {
        title: g.t.eVE4LX,
        description: g.t["72WNqk"],
        disabledSetting: tM.M.TEXT_CHAT,
        key: u.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT,
    },
    {
        title: g.t.oifnSh,
        description: g.t.bgU5r0,
        disabledSetting: tM.M.WELCOME_GENERAL,
        key: u.X.OVERLAY_NOTIFICATIONS_WELCOME,
    },
    {
        title: g.t.hqsZJW,
        description: g.t.kHjdqc,
        disabledSetting: tM.M.GO_LIVE_NUDGE,
        key: u.X.OVERLAY_NOTIFICATIONS_GO_LIVE,
    },
    {
        title: g.t.sop3rn,
        description: g.t.pjgffc,
        disabledSetting: tM.M.GAME_ACTIVITY,
        key: u.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY,
    },
    {
        title: g.t["2QVhbb"],
        description: g.t.wQ4ilB,
        disabledSetting: tM.M.NOW_PLAYING,
        key: u.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING,
    },
    {
        title: g.t.giM9fA,
        description: g.t.EhAfWj,
        disabledSetting: tM.M.NOW_PLAYING_DIFFERENT_GAMES,
        key: u.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING_DIFFERENT_GAMES,
        usePredicate: () => {
            let { showNowPlayingForDifferentGames: e } = (0, ep.M8)(
                    "OverlayV3NowPlayingDifferentGamesNotificationSetting",
                ),
                t = (0, O.bG)([eN.A], () => eN.A.isNotificationDisabledBySetting(tM.M.NOW_PLAYING));
            return !!e && !t;
        },
    },
];
function tk(e) {
    return (0, o.zD)(e.key, {
        useTitle: () => g.intl.string(e.title),
        useSubtitle: () => g.intl.string(e.description),
        useValue: () => !(0, O.bG)([eN.A], () => eN.A.getDisabledNotifications().has(e.disabledSetting)),
        setValue: (t) => {
            e6.A.setNotificationDisabledSetting(e.disabledSetting, !t);
        },
        usePredicate: e.usePredicate,
    });
}
let tw = (0, o.FW)(u.X.OVERLAY_NOTIFICATIONS_LIST, {
        variant: "compact",
        useTitle: () => g.intl.string(g.t.gnKWdS),
        isTitleHiddenVisually: !0,
        buildLayout: () => tV.map(tk),
    }),
    tF = (0, o.zZ)(u.X.OVERLAY_NOTIFICATIONS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.xOE5bA),
        buildLayout: () => [tw],
    }),
    tB = (0, o.Hn)(u.X.OVERLAY_VOICE_WIDGET_AVATAR_SIZE, {
        useTitle: () => g.intl.string(g.t.dnvZSg),
        useValue: () => (0, O.bG)([eb.default], () => eb.default.getAvatarSizeMode()),
        setValue: (e) => {
            e6.A.setAvatarSizeMode(e);
        },
        useOptions: () => [
            { id: "large", label: g.intl.string(g.t.YcOxtr), value: q.OSZ.LARGE },
            { id: "small", label: g.intl.string(g.t.BKIKqx), value: q.OSZ.SMALL },
        ],
    }),
    tz = (0, o.Hn)(u.X.OVERLAY_VOICE_WIDGET_DISPLAY_NAMES, {
        useTitle: () => g.intl.string(g.t.J0dpcB),
        useValue: () => (0, O.bG)([eb.default], () => eb.default.getDisplayNameMode()),
        setValue: (e) => {
            e6.A.setDisplayNameMode(e);
        },
        useOptions: () => [
            { id: "always", label: g.intl.string(g.t.nBmDrT), value: q.pwA.ALWAYS },
            { id: "speaking", label: g.intl.string(g.t["2OvIZY"]), value: q.pwA.ONLY_WHILE_SPEAKING },
            { id: "never", label: g.intl.string(g.t.ekjlPL), value: q.pwA.NEVER },
        ],
    }),
    tY = (0, o.Hn)(u.X.OVERLAY_VOICE_WIDGET_DISPLAY_USERS, {
        useTitle: () => g.intl.string(g.t.swsWWC),
        useValue: () => (0, O.bG)([eb.default], () => eb.default.getDisplayUserMode()),
        setValue: (e) => {
            e6.A.setDisplayUserMode(e);
        },
        useOptions: () => [
            { id: "always", label: g.intl.string(g.t.nBmDrT), value: q.f5z.ALWAYS },
            { id: "speaking", label: g.intl.string(g.t["2OvIZY"]), value: q.f5z.ONLY_WHILE_SPEAKING },
        ],
    });
var tX = i(391973),
    tH = i(489277),
    tK = i(897720),
    tW = i(38502);
function tZ() {
    let e = tH.A.getWidgetByType(q.uss.VOICE_V3);
    if (null == e) return null;
    let t = tW.A.getWidget(e.id);
    return null != t && (0, tK.ZO)(t) ? t : null;
}
i(392164);
let tq = (0, o.sN)(u.X.OVERLAY_VOICE_WIDGET_MAX_USERS, {
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
                ? (0, tX.cC)(t.id, { voiceStatesMaxShown: -1 })
                : (0, tX.cC)(t.id, { voiceStatesMaxShown: Math.floor(e) }));
    },
});
var tQ = i(43990),
    tJ = i(450740),
    t$ = i(968898),
    t0 = i(95701),
    t1 = i(889227),
    t2 = i(288737),
    t3 = i(287809),
    t6 = i(403362);
function t4(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = "456" + Math.floor(1e6 * Math.random());
    return {
        voiceState: new t2.A({
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
        user: new t1.A({ id: s, username: e }),
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
let t7 = (0, o.E2)(u.X.OVERLAY_VOICE_WIDGET_PREVIEW, {
        Component: function () {
            let e,
                t = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
                {
                    avatarSizeMode: i,
                    displayNameMode: n,
                    displayUserMode: s,
                } = (0, O.cf)([eb.default], () => ({
                    avatarSizeMode: eb.default.getAvatarSizeMode(),
                    displayNameMode: eb.default.getDisplayNameMode(),
                    displayUserMode: eb.default.getDisplayUserMode(),
                })),
                [l] = N.useState(() => [
                    t4(g.intl.string(g.t.C0ZDvo), !0, !1),
                    t4(g.intl.string(g.t.iOtj8E), !1, !1, !0),
                    t4(g.intl.string(g.t["0oqNgL"]), !1, !0),
                ]),
                r = (0, O.bG)([tH.A, tW.A], () => {
                    let e = tH.A.getWidgetByType(q.uss.VOICE_V3);
                    if (null == e) return null;
                    let t = tW.A.getWidget(e.id);
                    return null != t && (0, tK.ZO)(t) ? t : null;
                }),
                a = r?.meta?.voiceStatesMaxShown ?? 8,
                o = [null != t ? (((e = t4(t.username)).user = t), e) : null, ...l].filter(t6.Vq),
                u = [new Map(o.map((e) => [e.user.id, e])), o.map((e) => e.user.id)],
                d = (0, p.jsx)(tQ.N, {
                    theme: q.NJ8.MIDNIGHT,
                    children: (e) =>
                        (0, p.jsxs)("div", {
                            className: ew()(eB.Y5, e),
                            children: [
                                (0, p.jsx)("div", {
                                    className: eB.kJ,
                                    children: (0, p.jsx)(tJ.DH, {
                                        id: "voice-widget",
                                        title: g.intl.string(g.t.KNJ6Vq),
                                        channel: (0, t0.createChannelRecord)({
                                            id: "123",
                                            name: "Test Channel",
                                            type: q.rbe.GUILD_VOICE,
                                            guild_id: "456",
                                        }),
                                        overlayVoiceStates: u,
                                        displayNameMode: n,
                                        displayUserMode: s,
                                        avatarSizeMode: i,
                                        widget: q.uss.VOICE,
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
                                    className: eB.R$,
                                    children: [
                                        (0, p.jsx)(t$.Pl, { children: g.intl.string(g.t.KNJ6Vq) }),
                                        (0, p.jsx)(t$.CS, {}),
                                        (0, p.jsx)(t$.O0, { id: r?.id ?? "voice-widget", pinned: r?.pinned ?? !1 }),
                                    ],
                                }),
                            ],
                        }),
                });
            return (0, p.jsx)("div", { className: eB.F9, children: d });
        },
        useSearchTerms: () => [],
    }),
    t8 = (0, o.zZ)(u.X.OVERLAY_VOICE_WIDGET_CATEGORY, {
        useTitle: () => g.intl.string(g.t.r1TZfh),
        buildLayout: () => [t7, tB, tz, tY, tq],
    });
var t5 = i(49999),
    t9 = i(192391);
function ie() {
    let [e, t] = (0, ex.kn)([eT.M.OVERLAY_OOP_SETTINGS_NUX], void 0, !0);
    return ((0, eg.Ay)(() => () => {
        t(t5.i.AUTO_DISMISS);
    }),
    e !== eT.M.OVERLAY_OOP_SETTINGS_NUX)
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
                                      (0, p.jsx)(V.E, {
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
                                  onClick: () => void t(t5.i.DISMISS),
                              }),
                          }),
                      ],
                  }),
                  (0, p.jsx)(eE.c, { className: t9.yF }),
              ],
          });
}
function it() {
    let e = (0, O.bG)([e_.A], () => e_.A.enabled),
        t = (0, ep.Mn)("OverlayStreamerModeNotice");
    return e && t
        ? (0, p.jsxs)(p.Fragment, {
              children: [
                  (0, p.jsx)(y.w, {
                      type: "warning",
                      children: g.intl.format(g.t.fuEX5B, {
                          onClick: () => (0, ej.openUserSettings)(u.X.STREAMER_MODE_CATEGORY),
                      }),
                  }),
                  (0, p.jsx)(eE.c, { className: t9.yF }),
              ],
          })
        : null;
}
let ii = (0, o.t_)(u.X.OVERLAY_PANEL, {
        initialize: function () {
            return (
                eG(),
                eC.Ay.addChangeListener(eG),
                eN.A.addChangeListener(eG),
                eb.default.addChangeListener(eG),
                eI.default.addChangeListener(eG),
                ev.isPlatformEmbedded && (0, eS.a2)(),
                () => {
                    eC.Ay.removeChangeListener(eG),
                        eN.A.removeChangeListener(eG),
                        eb.default.removeChangeListener(eG),
                        eI.default.removeChangeListener(eG),
                        ev.isPlatformEmbedded && (0, eS.e0)();
                }
            );
        },
        useTitle: () => g.intl.string(g.t["9cb1Uz"]),
        decoration: {
            type: ef.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                return (0, p.jsxs)(p.Fragment, { children: [(0, p.jsx)(ie, {}), (0, p.jsx)(it, {})] });
            },
        },
        buildLayout: () => [tb, tU, t8, tF],
    }),
    is = (0, o.i4)(u.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["9cb1Uz"]),
        icon: em.l,
        usePredicate: ey.b_,
        buildLayout: () => [ii],
    });
var il = i(687966),
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
    ix = i(653307);
let iS = (0, ev.isWindows)();
function ip(e) {
    let { rawGame: t, nowPlaying: n = !1, isOverride: s, subgames: l, isSubgame: r = !1, parentGame: a } = e,
        o = (0, O.cf)([eQ.Ay, tc.A, tg.A], () => (0, eQ.xU)(t, eQ.Ay, tc.A, tg.A)),
        { canToggleDetection: u, isCurrentGameDetectionEnabled: d } = (0, O.cf)([eQ.Ay], () => ({
            canToggleDetection: null == a || eQ.Ay.isDetectionEnabled(a),
            isCurrentGameDetectionEnabled: eQ.Ay.isDetectionEnabled(o),
        })),
        c = (0, O.bG)([eQ.Ay], () => eQ.Ay.getVisibleGame()),
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
        x = ew()(ix.tR, {
            [iT.LO]: !n,
            [iT.Rw]: n,
            [iT.FB]: null != o && n,
            [iT.xL]: r,
            [iT.fG]: null != l && l.length > 0,
        });
    function S() {
        null != l && l.length > 0 && d
            ? (0, _.openModalLazy)(async () => {
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
    let f = null != c && (0, eQ.Es)(o) === (0, eQ.Es)(c),
        C = (null != a && a.id === c?.id) || f || (null != l && l.some((e) => e.id === c?.id));
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsxs)("div", {
                className: x,
                children: [
                    (0, p.jsxs)("div", {
                        className: ew()(iT.$K, ix.Vd),
                        children: [
                            o.verified && !s
                                ? (0, p.jsxs)("div", {
                                      className: iT.HS,
                                      children: [
                                          (0, p.jsx)("div", { className: iT.mO, children: h }),
                                          (0, p.jsx)(e0.m, {
                                              text: g.intl.string(g.t["4PJP5p"]),
                                              children: (0, p.jsx)(e5.A, {
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
                                    { played: i, exePath: s } = o;
                                return (
                                    n || f
                                        ? (e = g.intl.string(g.t.VbV5dv))
                                        : null != i && "" !== i && (e = g.intl.format(g.t["gGeOE+"], { when: i })),
                                    (0, p.jsx)("div", {
                                        className: iT.GN,
                                        children: (0, p.jsx)(ih.A, {
                                            hoverText:
                                                null != s && "" !== s
                                                    ? ((t = s.replace(/^file:\/\//i, "")),
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
                    s || m
                        ? null
                        : (0, p.jsx)("div", {
                              className: ew()(ix.tR, ix.oA, ix.LT, iT.E3),
                              children: (0, p.jsx)(e0.m, {
                                  text: g.intl.string(g.t["y0B+lo"]),
                                  children: (0, p.jsx)(M.D, {
                                      "aria-label": g.intl.string(g.t["y0B+lo"]),
                                      className: iT.ym,
                                      onClick: function () {
                                          if (m) return;
                                          let e = null != o.id ? tc.A.getDetectableGame(o.id) : null;
                                          Y.default.track(q.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
                                              application_id: e?.id,
                                              game_name: (0, tN.n1)(o) ? o.gameName : o.name,
                                          }),
                                              A(!0),
                                              (0, _.openModalLazy)(async () => {
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
                                                              type: q.$pd.PLAYING,
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
                            className: ew()(ix.tR, ix.oA, ix.LT, iT.E3),
                            children: (0, p.jsx)(e0.m, {
                                text: g.intl.string(g.t.QmitzM),
                                children: u
                                    ? (0, p.jsx)(M.D, {
                                          "aria-label": g.intl.string(g.t.QmitzM),
                                          className: iT.ym,
                                          onClick: S,
                                          children: t,
                                      })
                                    : t,
                            }),
                        });
                    })(),
                    (function () {
                        if (!iS || null != a) return null;
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
                            className: ew()(ix.tR, ix.oA, ix.LT, iT.E3),
                            children: [
                                n,
                                (0, p.jsx)(e0.m, {
                                    text: g.intl.string(g.t["1+O+Tu"]),
                                    children: (0, p.jsx)(M.D, {
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
                    (n && !s) || C
                        ? null
                        : (0, p.jsx)(iA.A, {
                              className: iT.LS,
                              onClick: function () {
                                  e3.Ay.deleteEntry(o),
                                      l?.forEach((e) => {
                                          e3.Ay.deleteEntry(e);
                                      });
                              },
                          }),
                ],
            }),
            null != l &&
                l.length > 0 &&
                !n &&
                (0, p.jsx)("div", {
                    className: iT.AQ,
                    children: l.map((e, t) =>
                        (0, p.jsxs)(
                            N.Fragment,
                            {
                                children: [
                                    (0, p.jsx)(ip, { rawGame: e, isOverride: !1, isSubgame: !0, parentGame: o }),
                                    t !== l.length - 1 && (0, p.jsx)("div", { className: iT.PQ }),
                                ],
                            },
                            (0, eQ.Es)(e),
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
    let e = (0, O.yK)([eQ.Ay], () => eQ.Ay.getGamesSeen(!1)),
        t = (0, O.bG)([eQ.Ay], () => iN(...eQ.Ay.getOverrides()));
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
var iC = i(818050);
function iI() {
    let e = (0, O.bG)([iu.A], () => iu.A.theme);
    return (0, p.jsxs)(ir.pp, {
        theme: e,
        className: iC.eT,
        children: [
            (0, p.jsx)(ir.G8, { darkSrc: i(839628), lightSrc: i(446404), width: 430, height: 250 }),
            (0, p.jsx)(ir.SG, { children: g.intl.string(g.t["1yiJwn"]) }),
        ],
    });
}
function ib() {
    let { gameHistory: e, robloxSubgameHistory: t, overrideExePaths: i } = i_();
    return 0 === e.length
        ? (0, p.jsx)(iI, {})
        : (0, p.jsx)(ia.n, {
              children: (0, p.jsx)("div", {
                  children: e.map((e) =>
                      (0, p.jsx)(
                          ip,
                          { rawGame: e, isOverride: i.has(e.exePath), subgames: e.id === io.a7 ? t : void 0 },
                          (0, eQ.Es)(e),
                      ),
                  ),
              }),
          });
}
let iv = (0, o.E2)(u.X.REGISTERED_GAMES_ADDED_GAMES_SETTING, {
    useSearchTerms: () => [],
    Component: () => (0, p.jsx)(ib, {}),
});
var ij = i(424994);
let iy = (0, o.zZ)(u.X.REGISTERED_GAMES_ADDED_GAMES_CATEGORY, {
    buildLayout: () => [iv],
    useTitle: () => g.intl.string(g.t.jCOdvx),
    useSubtitle: () => g.intl.format(g.t.KPA3m9, { igdbLink: ij.s8 }),
});
var iO = i(305866),
    iR = i(783878),
    iL = i(133801),
    iD = i(604949);
function iP(e) {
    let { onClose: t } = e,
        i = (0, O.bG)([eQ.Ay], () => eQ.Ay.getCandidateGames()),
        [n, s] = N.useState(null),
        l = i.map((e) => ({ id: e.pid.toString(), value: e, label: null != e.name ? e.name : "" }));
    return (0, p.jsxs)(iO.l, {
        className: ew()(iL.H, iD.Y_),
        "aria-label": g.intl.string(g.t.GTCx0p),
        children: [
            (0, p.jsx)(iR.Z, {
                selectionMode: "single",
                placeholder: g.intl.string(g.t.XqMe3N),
                value: n,
                options: l,
                onSelectionChange: function (e) {
                    s(e);
                },
            }),
            (0, p.jsx)(eE.c, { className: ew()(iC.Ot, iC.QB) }),
            (0, p.jsxs)("div", {
                className: ew()(iL.o, ix.xM),
                children: [
                    (0, p.jsx)(F.Q, { variant: "secondary", text: g.intl.string(g.t["ETE/oC"]), onClick: t }),
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
var iG = i(290280);
let iU = (0, o.E2)(u.X.REGISTERED_GAMES_ADD_GAME_SETTING, {
    useSearchTerms: () => [g.intl.string(g.t.GTCx0p)],
    Component: () => {
        let e = N.useRef(null);
        return (0, p.jsxs)("div", {
            className: ew()(iG.a, iC.Gf),
            children: [
                (0, p.jsx)("span", { children: g.intl.string(g.t.xwhoqM) }),
                (0, p.jsx)(P.Y, {
                    targetElementRef: e,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, p.jsx)(iP, { onClose: t });
                    },
                    align: "center",
                    position: "bottom",
                    children: (t) =>
                        (0, p.jsx)(F.Q, {
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
        className: ew()(ix.tR, iT.eS, iT.Rw),
        children: (0, p.jsxs)("div", {
            className: ew()(iT.$K, ix.Vd),
            children: [
                (0, p.jsx)("div", { className: iT.mO, children: g.intl.string(g.t.H68X9x) }),
                (0, p.jsx)("div", { className: iT.GN, children: g.intl.string(g.t.T5Ilmw) }),
            ],
        }),
    });
}
let iV = (0, o.E2)(u.X.REGISTERED_GAMES_CURRENT_GAME_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t["MY9/Oe"])],
        Component: () => {
            let { robloxSubgameHistory: e, overrideExePaths: t } = i_(),
                i = (0, O.bG)([eQ.Ay], () => eQ.Ay.getVisibleGame());
            return null != i
                ? (0, p.jsx)(
                      ip,
                      {
                          rawGame: i,
                          isOverride: t.has(i.exePath),
                          nowPlaying: !0,
                          subgames: i.id === io.a7 ? e : void 0,
                      },
                      (0, eQ.Es)(i),
                  )
                : (0, p.jsx)(iM, {});
        },
    }),
    ik = (0, o.zZ)(u.X.REGISTERED_GAMES_CURRENT_GAME_CATEGORY, {
        useTitle: () => g.intl.string(g.t["MY9/Oe"]),
        buildLayout: () => [iV, iU],
    }),
    iw = (0, o.t_)(u.X.REGISTERED_GAMES_PANEL, {
        useTitle: () => g.intl.string(g.t.AVDyEj),
        buildLayout: () => [ik, iy],
    }),
    iF = (0, o.i4)(u.X.REGISTERED_GAMES_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.AVDyEj),
        icon: il._,
        usePredicate: ey.Pi,
        buildLayout: () => [iw],
    }),
    iB = (0, o.WI)(u.X.ACTIVITY_SECTION, {
        useTitle: () => g.intl.string(g.t.nVPpLM),
        buildLayout: () => [ec, iF, is],
    });
var iz = i(358776),
    iY = i(550640),
    iX = i(247928),
    iH = i(97808),
    iK = i(778712),
    iW = i(775602),
    iZ = i(320095),
    iq = i(963852),
    iQ = i(763754),
    iJ = i(20851),
    i$ = i(486020),
    i0 = i(585001);
let i1 = new t0.nA({ id: "1337", guild_id: "1337", type: q.rbe.GUILD_TEXT, name: "preview" }),
    i2 = [
        { status: q.clD.IDLE, discriminator: "2" },
        { status: q.clD.DND, discriminator: "3" },
        { status: q.clD.ONLINE, mobile: !0, discriminator: "4" },
    ];
function i3(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return (0, iZ.rh)({ ...(0, iq.Ay)({ channelId: i1.id, content: e }), state: q.cmJ.SENT, reactions: t });
}
var i6 = i(180807);
let i4 = (0, o.zD)(u.X.ENABLE_LEGACY_CHAT_INPUT, {
        useTitle: () => g.intl.string(g.t.TZ2hZH),
        useSubtitle: () => g.intl.string(g.t.Q7wgHc),
        useValue: () => c.D_.useSetting(),
        setValue: (e) => c.D_.updateSetting(e),
    }),
    i7 = (0, o.zD)(u.X.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS, {
        useTitle: () => g.intl.string(g.t.XYvMIX),
        useSubtitle: () => g.intl.string(g.t.T0rbtM),
        useValue: c._z.useSetting,
        setValue: c._z.updateSetting,
    });
var i8 = i(100767),
    i5 = i(106236),
    i9 = i(113494),
    ne = i(782134),
    nt = i(54570),
    ni = i(8880),
    nn = i(75804);
let ns = eR().debounce((e) => {
    (0, nt.zU)(e);
}, 250);
function nl() {
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
                    (0, p.jsx)(i5.A, {
                        label: g.intl.string(g.t.lsW5Ev),
                        description: g.intl.string(g.t.Ci4wMS),
                        markers: nn.P,
                        initialValue: e,
                        defaultValue: 1,
                        stickToMarkers: !0,
                        onValueChange: ns,
                        onValueRender: (e) => `x${e.toFixed(2)}`,
                        onMarkerRender: (e) =>
                            0 === e
                                ? (0, p.jsx)(V.E, {
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: g.intl.string(g.t["493lwX"]),
                                  })
                                : 10 === e
                                  ? (0, p.jsx)(V.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: g.intl.string(g.t.ZSZEdS),
                                    })
                                  : 1 === e
                                    ? (0, p.jsx)(V.E, {
                                          variant: "text-xs/medium",
                                          color: "text-feedback-positive",
                                          children: "x1.0",
                                      })
                                    : e % 1 == 0
                                      ? ""
                                      : void 0,
                    }),
                    (0, p.jsx)(nl, {}),
                ],
            });
        },
        usePredicate: () => i8.$j,
    }),
    na = (0, o.zZ)(u.X.AUDIO_AND_SCREEN_READER_CATEGORY, {
        useTitle: () => g.intl.string(g.t.XVR0Rb),
        buildLayout: () => [nr, i7, i4],
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
            { badgeType: ef.Xi.NEW, dismissibleContent: eT.M.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE },
        ],
    });
var nE = i(406360),
    nT = i(742023);
let nx = (0, o.Qx)(u.X.HIGH_DYNAMIC_RANGE, {
        useTitle: () => g.intl.string(g.t.nemtgW),
        useSubtitle: () => g.intl.string(g.t["O/Gjvn"]),
        usePersistentBadge: () => ({ badgeType: ef.Xi.BETA }),
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
    nS = (0, o.Hn)(u.X.ROLE_STYLE, {
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
    markers: q.hH7.SATURATION_INCREMENTS,
    onMarkerRender: (e) => ((100 * e) % 2 == 0 ? `${100 * e}%` : void 0),
    stickToMarkers: !0,
    minValue: 0,
    maxValue: 1,
    getInitialValue: () => iW.A.saturation,
    asValueChanges: (e) => (0, nd.HU)(e),
});
var nN = i(839214),
    nf = i(502229);
let n_ = (0, nN.D)(() => ({ syncEnabled: null, updateTimeout: null })),
    nC = (0, o.zD)(u.X.SYNC_FORCED_COLORS, {
        useTitle: () => g.intl.string(g.t.cguiec),
        useSubtitle: () => g.intl.format(g.t.GwEVE2, { learnMoreLink: ta.A.getArticleURL(q.MVz.FORCED_COLORS) }),
        useValue: () => {
            let e = (0, O.bG)([iW.A], () => iW.A.syncForcedColors);
            return (
                (0, e7.Ay)(() => {
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
        usePredicate: () => (0, nf.D)(),
    }),
    nI = (0, o.zZ)(u.X.COLOR_AND_CONTRAST_CATEGORY, {
        useTitle: () => g.intl.string(g.t.JqvyiY),
        buildLayout: () => [np, nc, nh, nm, nC, nx, nS, nA, nu],
    });
var nb = i(397438),
    nv = i(355097);
function nj(e) {
    return (0, O.bG)([nb.A], () =>
        (function (e) {
            switch (e) {
                case nv._A.REDUCED_MOTION:
                    return g.intl.format(g.t["1dT9V4"], {});
                case nv._A.REDUCED_MOTION_STICKERS:
                    return g.intl.string(g.t["2ExvRu"]);
                default:
                    return;
            }
        })(nb.A.getAppliedOverrideReasonKey(e)),
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
        useSubtitle: () => g.intl.format(g.t.XqvxJc, { helpdeskArticle: ta.A.getArticleURL(q.MVz.REDUCED_MOTION) }),
        useValue: () => (0, O.bG)([iW.A], () => iW.A.useReducedMotion),
        setValue: (e) => (0, nd.qz)(e ? "reduce" : "no-preference"),
    }),
    nP = (0, o.zD)(u.X.SYNC_REDUCED_MOTION, {
        useTitle: () => g.intl.string(g.t.oL55A6),
        useValue: () => (0, O.bG)([iW.A], () => "auto" === iW.A.rawPrefersReducedMotion),
        setValue: (e) => (0, nd.qz)(e ? "auto" : iW.A.systemPrefersReducedMotion),
    }),
    nG = (0, o.zZ)(u.X.MOTION_CATEGORY, {
        useTitle: () => g.intl.string(g.t.e3TR1b),
        buildLayout: () => [nD, nP, nO, ny, nL],
    });
var nU = i(688810),
    nM = i(259065),
    nV = i(864386);
let nk = (0, o.zD)(u.X.DISPLAY_NAME_STYLES, {
        useTitle: () => g.intl.string(nV.default["2gFUEw"]),
        useSubtitle: () => {
            let { analyticsLocations: e } = (0, nU.Ay)();
            return g.intl.format(nV.default.aEax6P, {
                onClickOpenModal() {
                    (0, nM.L)({ analyticsLocations: e });
                },
            });
        },
        useValue: () => (0, O.bG)([iW.A], () => iW.A.displayNameStylesEnabled),
        setValue: (e) => (0, nd.Dm)(e),
    }),
    nw = (e) => `${e.toFixed(0)}px`,
    nF = (0, o.sN)(u.X.APPEARANCE_FONT_SCALING, {
        useTitle: () => g.intl.string(g.t.rT3Pq5),
        useSubtitle: () => g.intl.string(g.t.LXUhen),
        markers: q.hH7.FONT_SIZES,
        stickToMarkers: !0,
        minValue: q.hH7.FONT_SIZES["0"],
        maxValue: q.hH7.FONT_SIZES[q.hH7.FONT_SIZES.length - 1],
        useDefaultValue: () => q.hH7.FONT_SIZE_DEFAULT,
        getInitialValue: () => iW.A.fontSize,
        onValueRender: nw,
        onMarkerRender: nw,
        asValueChanges: (e) => (0, nd.XS)(e),
    }),
    nB = (0, o.zD)(u.X.UNDERLINE_LINKS, {
        useTitle: () => g.intl.string(g.t.OLZFB8),
        useSubtitle: () => g.intl.string(g.t.DIX3ke),
        useValue: () => (0, O.bG)([iW.A], () => iW.A.alwaysShowLinkDecorations),
        setValue: (e) => (0, nd.kI)(e),
    }),
    nz = (0, o.zZ)(u.X.TEXT_READABILITY_CATEGORY, {
        useTitle: () => g.intl.string(g.t["bxh/R7"]),
        buildLayout: () => [nF, nB, nk],
    }),
    nY = (0, o.Qx)(u.X.APPEARANCE_UI_DENSITY, {
        useTitle: () => g.intl.string(g.t["C/5V0A"]),
        useSubtitle: () => g.intl.string(g.t.QLZhYk),
        useSearchTerms: () => ["List Spacing"],
        useOptions: () => [
            { name: g.intl.string(g.t["7iegX4"]), value: f.NS.COMPACT },
            { name: g.intl.string(g.t.bBvAEH), value: f.NS.DEFAULT },
            { name: g.intl.string(g.t["4cuYHx"]), value: f.NS.COZY },
        ],
        useValue: () => c.Xi.useSetting(),
        setValue: (e) => {
            e !== f.NS.UNSET_UI_DENSITY && c.Xi.updateSetting(e);
        },
    }),
    nX = "cozy",
    nH = "compact",
    nK = (0, o.Qx)(u.X.APPEARANCE_MESSAGE_DISPLAY_MODE, {
        useTitle: () => g.intl.string(g.t.nKRoPv),
        useSubtitle: () => g.intl.string(g.t.QntEEG),
        useSearchTerms: () => [g.intl.string(g.t.ZEoGMd)],
        useOptions: () => [
            { name: g.intl.string(g.t.Jqj4cZ), value: nX },
            { name: g.intl.string(g.t["1JNcPS"]), value: nH },
        ],
        useValue: () => (c.hH.useSetting() ? nH : nX),
        setValue: (e) => {
            c.hH.updateSetting(e === nH), (0, nd.AC)();
        },
    });
var nW = i(381941);
let nZ = (e) => `${e.toFixed(0)}px`,
    nq = (0, o.sN)(u.X.APPEARANCE_MESSAGE_GROUP_SPACING, {
        useTitle: () => g.intl.string(g.t.Q6lKkg),
        useSubtitle: () => g.intl.string(g.t.p7eUrb),
        markers: nW.qh,
        stickToMarkers: !0,
        minValue: nW.qh["0"],
        maxValue: nW.qh[nW.qh.length - 1],
        useDefaultValue: () => (c.hH.useSetting() ? nW.y5 : nW.ES),
        useExternalValue: () => (0, O.bG)([iW.A], () => iW.A.messageGroupSpacing),
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
let nJ = (0, o.sN)(u.X.APPEARANCE_ZOOM, {
        usePredicate: () => ev.isPlatformEmbedded,
        useTitle: () => g.intl.string(g.t.i19n5L),
        useSubtitle: () => g.intl.format(g.t["x9PK/3"], { modKey: nQ.A.modKey }),
        markers: q.hH7.ZOOM_SCALES,
        stickToMarkers: !0,
        minValue: q.hH7.ZOOM_SCALES["0"],
        maxValue: q.hH7.ZOOM_SCALES[q.hH7.ZOOM_SCALES.length - 1],
        useDefaultValue: () => q.hH7.ZOOM_DEFAULT,
        getInitialValue: () => iW.A.zoom,
        useExternalValue: () => (0, O.bG)([iW.A], () => iW.A.zoom),
        onValueRender: (e) => `${e.toFixed(0)}%`,
        setValue: (e) => (0, nd.Qp)(e),
        useSearchTerms: () => [g.intl.string(g.t.ip0uSf)],
    }),
    n$ = (0, o.zZ)(u.X.VISUAL_DENSITY_CATEGORY, {
        useTitle: () => g.intl.string(g.t.VKYWk8),
        buildLayout: () => [nY, nK, nq, nJ],
    }),
    n0 = (0, o.t_)(u.X.ACCESSIBILITY_PANEL, {
        useTitle: () => g.intl.string(g.t.G0neg7),
        buildLayout: () => [nz, n$, nI, nG, na],
        decoration: {
            type: ef.t9.STRONGLY_DISCOURAGED_CUSTOM,
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
                return (0, p.jsx)(iX.M, {
                    "aria-hidden": !0,
                    children: (0, p.jsxs)("section", {
                        children: [
                            (0, p.jsx)(eA.D, {
                                variant: "text-md/medium",
                                color: "text-muted",
                                className: i0.Vf,
                                children: g.intl.string(g.t.RC22qg),
                            }),
                            (0, p.jsxs)(tS.Ip, {
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
                                                        author: { ...(0, iQ.p_)(t), colorString: "#dd80f4" },
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
        icon: iY.c,
        useMenu: i6.A,
        buildLayout: () => [n0],
    });
var n2 = i(650809),
    n3 = i(636537),
    n6 = i(228366),
    n4 = i(74396),
    n7 = i(227542),
    n8 = i(55619),
    n5 = i(777666);
function n9() {
    return (0, p.jsx)(n5.JI, { text: g.intl.string(g.t.y2b7CA) });
}
var se = i(574381),
    st = i(314116),
    si = i(19575),
    sn = i(208039);
let ss = (0, o.E2)(u.X.HARDWARE_ACCELERATION, {
    usePredicate: () => se.Av && !(0, se.cX)(),
    useSearchTerms: () => [g.intl.string(g.t["/HIxyY"]), g.intl.string(g.t.B0hqpb)],
    Component: function () {
        let [e] = N.useState(() => si.Ay.getEnableHardwareAcceleration()),
            t = g.intl.string(g.t["/HIxyY"]),
            i = g.intl.string(g.t.B0hqpb);
        return (0, p.jsxs)(R.B, {
            children: [
                (0, p.jsx)(L.d, { label: t, description: i, checked: e, onChange: sl }),
                !e && (0, p.jsx)(sn.A, { look: sn.k.WARNING, children: g.intl.string(g.t.j7S6IX) }),
            ],
        });
    },
});
function sl(e) {
    let t = e ? g.intl.format(g.t.LYXRxL, {}) : g.intl.format(g.t.uDP3Kz, {});
    (0, st.A)({
        title: g.intl.string(g.t.aqpAvn),
        subtitle: t,
        confirmText: g.intl.string(g.t.vT7ckk),
        onConfirm: () => {
            si.Ay.setEnableHardwareAcceleration(e);
        },
    });
}
let sr = (0, o.zD)(u.X.SHOW_GAME_LIBRARY, {
        usePredicate: () => (0, O.bG)([tg.A], () => tg.A.hasLibraryApplication()),
        useTitle: () => g.intl.string(g.t.fi3UQN),
        useSubtitle: () => g.intl.string(g.t["8mYp37"]),
        useValue: () => !c.l_.useSetting(),
        setValue: (e) => c.l_.updateSetting(!e),
    }),
    sa = (0, o.zZ)(u.X.APPEARANCE_ADVANCED_CATEGORY, {
        useTitle: () => g.intl.string(g.t["8/udY0"]),
        buildLayout: () => [ss, sr],
    });
var so = i(565645);
let su = (0, o.zD)(u.X.CHAT_EMOJI_CONVERT_EMOTICONS, {
        useTitle: () => g.intl.string(g.t["79qal8"]),
        useSubtitle: () =>
            g.intl.format(g.t.GejoQK, { emojiHook: (e, t) => (0, p.jsx)(so.A, { emojiName: "\uD83D\uDE42" }, t) }),
        useValue: c.j7.useSetting,
        setValue: c.j7.updateSetting,
    }),
    sd = (0, o.zD)(u.X.ENABLE_SEND_BUTTON, {
        useTitle: () => g.intl.string(g.t["I/5LyL"]),
        useValue: () => (0, O.bG)([iW.A], () => iW.A.isSubmitButtonEnabled),
        setValue: () => (0, nd.Xt)(),
    }),
    sc = (0, o.zD)(u.X.CHAT_TEXT_BOX_PREVIEWS, {
        useTitle: () => g.intl.string(g.t.AqGrEI),
        useValue: c.SI.useSetting,
        setValue: (e) => {
            Y.default.track(q.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                enabled: e,
                location: { section: q.JJy.SETTINGS_TEXT_AND_IMAGES },
            }),
                c.SI.updateSetting(e);
        },
    }),
    sg = (0, o.zD)(u.X.CHAT_STICKERS_AUTOCOMPLETE, {
        useTitle: () => g.intl.string(g.t["d+It2U"]),
        useValue: c.ML.useSetting,
        setValue: (e) => {
            Y.default.track(q.HAw.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                enabled: e,
                location: { section: q.JJy.SETTINGS_TEXT_AND_IMAGES },
                location_stack: [eM.A.TEXT_AND_IMAGES],
            }),
                c.ML.updateSetting(e);
        },
    }),
    sm = (0, o.zZ)(u.X.APPEARANCE_CHAT_BOX_CATEGORY, {
        useTitle: () => g.intl.string(g.t.Ob7VMB),
        useSearchTerms: () => [g.intl.string(g.t.onqU6o)],
        buildLayout: () => [sc, su, sg, sd],
    });
var sA = i(526162),
    sh = i(793943),
    sE = i(792656),
    sT = i(2114),
    sx = i(785007),
    sS = i(806932),
    sp = i(915089),
    sN = i(174197),
    sf = i(788868);
let s_ = (0, o.E2)(u.X.APPEARANCE_IN_APP_ICON, {
    useSearchTerms: () => [g.intl.string(g.t.gnwxvT)],
    Component: function () {
        let e = (0, sp.GV)(),
            { ref: t, ...i } = (0, sx._u)({ orientation: "horizontal", labelledBy: e }),
            n = (0, O.bG)([sA.A], () => sA.A.isUpsellPreview);
        return (
            (0, eg.Ay)(() => {
                n &&
                    Y.default.track(q.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: sf.e.APP_ICON_UPSELL,
                        location_stack: [eM.A.USER_SETTINGS],
                    });
            }),
            (0, p.jsx)("div", {
                ...i,
                ref: t,
                children: (0, p.jsx)(R.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    children: (0, p.jsx)(sS.m, { disabled: n, size: sN.N8.SIZE_48 }),
                }),
            })
        );
    },
});
function sC() {
    (0, sh.nf)(sh.HP.APP_ICON), (0, sT.default)();
}
function sI() {
    return (0, p.jsx)(sE.A, {
        subscriptionTier: sf.pe.TIER_2,
        defaultTextOverride: g.intl.string(g.t.mr4K7D),
        premiumModalAnalyticsLocation: { object: q.ZSU.BUTTON_CTA, objectType: q.AnalyticsObjectTypes.BUY },
        fullWidth: !0,
    });
}
let sb = (0, o.zZ)(u.X.APPEARANCE_IN_APP_ICON_CATEGORY, {
        useTitle: () => g.intl.string(g.t.RPh2ou),
        useSubtitle: () => g.intl.string(g.t.IgENJo),
        useHeaderDecoration: function () {
            let e = (0, O.bG)([sA.A], () => sA.A.isUpsellPreview);
            return N.useMemo(() => {
                let t = [];
                return (
                    t.push({
                        id: "preview-icon-button",
                        type: ef.UV.BUTTON,
                        text: g.intl.string(g.t["6acvnZ"]),
                        onClick: sC,
                    }),
                    e && t.push({ id: "upsell-button", type: ef.UV.STRONGLY_DISCOURAGED_CUSTOM, button: sI }),
                    { type: ef.WX.BUTTON_GROUP, buttons: t }
                );
            }, [e]);
        },
        buildLayout: () => [s_],
    }),
    sv = (0, o.AK)(u.X.APPEARANCE_CHAT_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => g.intl.string(g.t.UDr3Iy),
        useSearchTerms: () => [g.intl.string(g.t.UDr3Iy)],
        destinationKey: u.X.ACCESSIBILITY_PANEL,
    }),
    sj = (0, o.gN)(u.X.APPEARANCE_CHAT_RELATED_SETTINGS, { buildLayout: () => [sv] });
var sy = i(379587),
    sO = i(452027),
    sR = i(976860),
    sL = i(474090),
    sD = i(181079),
    sP = i(422258),
    sG = i(668267),
    sU = i(313281),
    sM = i(335993);
let sV = ta.A.getArticleURL(q.MVz.FAVORITES_GUILD);
function sk() {
    let { analyticsLocations: e } = (0, nU.Ay)(eM.A.USER_SETTINGS_FAVORITES),
        t = N.useCallback(() => {
            (0, sG.mv)("settings_page"), (0, sR.uh)(q.YYv), (0, sT.default)();
        }, []);
    return (0, p.jsx)(nU.f5, {
        value: e,
        children: (0, p.jsx)(sO.D, {
            label: g.intl.string(sM.default.OT1NK5),
            description: g.intl.format(sM.default.GR2KOG, { helpCenterLink: sV }),
            layout: "horizontal-responsive",
            badge: "beta",
            children: (0, p.jsxs)(R.B, {
                direction: "horizontal",
                gap: 8,
                fullWidth: !1,
                children: [
                    (0, p.jsx)(eh.$, { variant: "secondary", text: g.intl.string(sM.default["7WwLnr"]), onClick: t }),
                    (0, p.jsx)(sE.A, {
                        subscriptionTier: sf.pe.TIER_2,
                        defaultTextOverride: g.intl.string(sM.default["20sYUU"]),
                    }),
                ],
            }),
        }),
    });
}
let sw = (0, o.E2)(u.X.CHAT_FAVORITES_TOGGLE, {
        usePredicate: () => (0, sy.m)({ location: "FavoritesGuildToggle" }).enabled,
        useSearchTerms: () => [g.intl.string(sM.default.OT1NK5)],
        Component: function () {
            let e = (0, O.bG)([sD.A], () => sD.A.favoriteGuildEnabled),
                t = (0, O.bG)([t3.default], () => {
                    let e = t3.default.getCurrentUser();
                    return null != e && sL.Ay.isPremiumExactly(e, sf.PremiumTypes.TIER_2);
                }),
                i = (0, sU.DZ)(),
                n = N.useCallback(
                    (e) => {
                        (0, sP.tV)(e, "settings_page"), !e && i && (0, sR.pX)(q.BVt.ME);
                    },
                    [i],
                );
            return t
                ? (0, p.jsx)(L.d, {
                      checked: e,
                      description: g.intl.format(sM.default.GR2KOG, { helpCenterLink: sV }),
                      onChange: n,
                      label: g.intl.string(sM.default.OT1NK5),
                      badge: "beta",
                  })
                : (0, p.jsx)(sk, {});
        },
    }),
    sF = (0, o.zD)(u.X.CHAT_INLINE_MEDIA_LINKS, {
        useTitle: () => g.intl.string(g.t.U47N1p),
        useValue: c.hD.useSetting,
        setValue: c.hD.updateSetting,
    }),
    sB = (0, o.zD)(u.X.CHAT_INLINE_MEDIA_UPLOADS, {
        useTitle: () => g.intl.string(g.t.VP11No),
        useValue: c.X6.useSetting,
        setValue: c.X6.updateSetting,
    }),
    sz = (0, o.FW)(u.X.CHAT_INLINE_FIELD_SET, {
        useTitle: () => g.intl.string(g.t["9nyle0"]),
        buildLayout: () => [sF, sB],
    }),
    sY = (0, o.zD)(u.X.CHAT_EMBEDS_RENDER_EMBEDS, {
        useTitle: () => g.intl.string(g.t["5bK9vw"]),
        useValue: c.rs.useSetting,
        setValue: c.rs.updateSetting,
    }),
    sX = (0, o.zD)(u.X.CHAT_EMOJI_RENDER_REACTIONS, {
        useTitle: () => g.intl.string(g.t["zge/fP"]),
        useValue: c.jW.useSetting,
        setValue: c.jW.updateSetting,
    });
var sH = i(817281);
let sK = (0, o.zD)(u.X.APPEARANCE_DISPLAY_COMPACT_AVATARS, {
        useTitle: () => g.intl.string(g.t.JgjNG3),
        useSubtitle: () => {
            if (!c.hH.useSetting())
                return g.intl.format(g.t["31PRaj"], {
                    a11yHook: (e, t) =>
                        (0, p.jsx)(
                            M.D,
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
            sH.Ay.updatedUnsyncedSettings({ displayCompactAvatars: e });
        },
    }),
    sW = (0, o.Hn)(u.X.CHAT_SPOILERS_SHOW_SPOILERS, {
        useTitle: () => g.intl.string(g.t.QgwmVz),
        useOptions: () => [
            { value: q.P6Q.ON_CLICK, id: q.P6Q.ON_CLICK, label: g.intl.string(g.t["KFH/me"]) },
            { value: q.P6Q.ALWAYS, id: q.P6Q.ALWAYS, label: g.intl.string(g.t.Pe1RbL) },
            { value: q.P6Q.IF_MODERATOR, id: q.P6Q.IF_MODERATOR, label: g.intl.string(g.t.K5VTBE) },
        ],
        useValue: c.gs.useSetting,
        setValue: c.gs.updateSetting,
    }),
    sZ = (0, o.zD)(u.X.CHAT_THREADS_SPLIT_VIEW, {
        useTitle: () => g.intl.string(g.t.AInv5m),
        useValue: c.SY.useSetting,
        setValue: c.SY.updateSetting,
    }),
    sq = (0, o.zZ)(u.X.APPEARANCE_MESSAGES_CATEGORY, {
        useTitle: () => g.intl.string(g.t.OIgYlQ),
        useSearchTerms: () => [g.intl.string(g.t["/VQax8"])],
        buildLayout: () => [sz, sY, sX, sW, sZ, sK, sw, sj],
    });
var sQ = i(753806),
    sJ = i(145331);
let s$ = (0, o.Qx)(u.X.MESSAGE_SEARCH_DEFAULT_DM_SEARCH_BEHAVIOR, {
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
            t ? sQ.A.cleanUpPrivateChannelSearchState() : sQ.A.cleanUpSearchState({ type: q.I4_.DMS }),
                (0, sJ._k)({
                    prevIsCrossDMSettingEnabled: c.Hu.getSetting(),
                    isCrossDMSettingEnabled: t,
                    location: sJ.vy.USER_SETTINGS,
                }),
                c.Hu.updateSetting(t);
        },
    }),
    s0 = (0, o.zZ)(u.X.APPEARANCE_SEARCH_CATEGORY, {
        useTitle: () => g.intl.string(g.t["5h0QOP"]),
        buildLayout: () => [s$],
    }),
    s1 = (0, o.zD)(u.X.STREAMING_AUTO_STREAMER_MODE, {
        useTitle: () => g.intl.string(g.t.IxjaoF),
        useValue: function () {
            return (0, O.bG)([e_.A], () => {
                let { autoToggle: e } = e_.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            n8.A.update({ autoToggle: e });
        },
        usePredicate: function () {
            return se.Av;
        },
    }),
    s2 = (0, o.zD)(u.X.STREAMING_STREAMER_MODE, {
        useTitle: () => g.intl.string(g.t.TGNg6T),
        useSubtitle: () => g.intl.string(g.t["4nXLnE"]),
        useValue: function () {
            return (0, O.bG)([e_.A], () => {
                let { enabled: e } = e_.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            n8.A.update({ enabled: e });
        },
    });
var s3 = i(77729),
    s6 = i(349230);
let s4 = [],
    s7 = (0, o.Hn)(u.X.STREAMER_MODE_HIDE_OVERLAY_WIDGETS, {
        selectionMode: "multiple",
        useTitle: () => g.intl.string(g.t.VCDSLW),
        useSearchTerms: () => [g.intl.string(g.t.VCDSLW)],
        usePredicate: () => {
            let e = (0, ey.b_)(),
                t = (0, ep.Mn)("StreamerModeSettings");
            return e && t;
        },
        useOptions: function () {
            return N.useMemo(() => {
                let e = [];
                for (let [t, i] of Object.entries(s6.A))
                    null != i.streamerModeLabel &&
                        (null == i.predicate || i.predicate()) &&
                        e.push({ id: t, value: t, label: i.streamerModeLabel() });
                return e;
            }, []);
        },
        useValue: function () {
            return (0, O.bG)([e_.A], () => e_.A.getSettings().disabledOverlayWidgets ?? s4);
        },
        setValue: (e) => n8.A.update({ disabledOverlayWidgets: e }),
        closeOnSelect: !1,
        wrapTags: !0,
    }),
    s8 = (0, o.zD)(u.X.STREAMER_MODE_HIDE_PERSONAL_INFORMATION, {
        useTitle: () => g.intl.string(g.t.LSBUGR),
        useValue: () =>
            (0, O.bG)([e_.A], () => {
                let { hidePersonalInformation: e } = e_.A.getSettings();
                return e;
            }),
        setValue: (e) => n8.A.update({ hidePersonalInformation: e }),
    }),
    s5 = (0, o.zD)(u.X.STREAMER_MODE_HIDE_INVITE_LINKS, {
        useTitle: () => g.intl.string(g.t.uWBOri),
        useValue: () =>
            (0, O.bG)([e_.A], () => {
                let { hideInstantInvites: e } = e_.A.getSettings();
                return e;
            }),
        setValue: (e) => n8.A.update({ hideInstantInvites: e }),
    }),
    s9 = (0, o.zD)(u.X.STREAMER_MODE_DISABLE_SOUNDS, {
        useTitle: () => g.intl.string(g.t.OrqYDP),
        useValue: () =>
            (0, O.bG)([e_.A], () => {
                let { disableSounds: e } = e_.A.getSettings();
                return e;
            }),
        setValue: (e) => n8.A.update({ disableSounds: e }),
    }),
    le = (0, o.zD)(u.X.STREAMER_MODE_DISABLE_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.sUAbLd),
        useValue: () =>
            (0, O.bG)([e_.A], () => {
                let { disableNotifications: e } = e_.A.getSettings();
                return e;
            }),
        setValue: (e) => n8.A.update({ disableNotifications: e }),
    }),
    lt = (0, o.zD)(u.X.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE, {
        useTitle: () => g.intl.string(g.t["iA81+a"]),
        useSubtitle: () => g.intl.string(g.t.P4vj0h),
        useValue: () =>
            (0, O.bG)([e_.A], () => {
                let { enableContentProtection: e } = e_.A.getSettings();
                return e;
            }),
        setValue: (e) => n8.A.update({ enableContentProtection: e }),
        usePredicate: () => s3.A?.window?.supportsContentProtection?.() ?? !1,
    }),
    li = (0, o.FW)(u.X.STREAMER_MODE_OPTIONS_LIST, {
        variant: "compact",
        useTitle: () => g.intl.string(g.t.xYhOEh),
        buildLayout: () => [s8, s5, s9, le, lt, s7],
    }),
    ln = (0, o.zZ)(u.X.STREAMER_MODE_CATEGORY, {
        useTitle: () => g.intl.string(g.t.S5GfOW),
        buildLayout: () => [s2, s1, li],
    });
var ls = i(47671),
    ll = i(884210);
let lr = (0, o.zD)(u.X.SYNC_PROFILE_THEMES, {
    useTitle: () => g.intl.string(g.t.C00w4l),
    useValue: () => (0, O.bG)([iW.A], () => iW.A.syncProfileThemeWithUserTheme),
    setValue: () => (0, nd.M1)(),
});
var la = i(284016);
let lo = (0, o.zD)(u.X.APPEARANCE_SYNC_THEME, {
    useTitle: () => g.intl.string(g.t["/B+kEV"]),
    useSearchTerms: () => [g.intl.string(g.t.Ksh3ik)],
    useValue: function () {
        return (0, O.bG)([la.A], () => !1 !== la.A.shouldSync("appearance"));
    },
    setValue: function (e) {
        var t;
        let i = iu.A.theme,
            n = ls.A.gradientPreset?.id ?? null,
            s = c.eh.getSetting()?.customUserThemeSettings != null;
        (t = q.HAw.SYNC_ACROSS_CLIENTS_TOGGLED),
            n6.h.dispatch({
                type: "TRACK",
                event: t,
                properties: { is_sync_enabled: e, base_theme: i, client_theme: n, has_custom_theme: s },
            }),
            sH.Ay.setShouldSyncAppearanceSettings(e);
    },
});
var lu = i(500158);
let ld = (0, o.AK)(u.X.APPEARANCE_THEME_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => g.intl.string(g.t.nhVQDJ),
        useSearchTerms: () => [g.intl.string(g.t.nhVQDJ)],
        destinationKey: u.X.ACCESSIBILITY_PANEL,
    }),
    lc = (0, o.gN)(u.X.APPEARANCE_THEME_RELATED_SETTINGS, { buildLayout: () => [ld] }),
    lg = (0, o.zZ)(u.X.APPEARANCE_THEME_CATEGORY, {
        useTitle: () => g.intl.string(g.t.Ksh3ik),
        useInlineNotice: function () {
            return (0, O.bG)([iW.A], () => iW.A.useForcedColors)
                ? {
                      type: ef.lT.INLINE_NOTICE,
                      noticeType: "info",
                      useText: () =>
                          (0, nf.D)()
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
            return (0, O.bG)([ls.A, iW.A], () => iW.A.useForcedColors || ls.A.isPreview)
                ? null
                : {
                      type: ef.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "open-client-themes-button",
                              type: ef.UV.BUTTON,
                              text: g.intl.string(g.t["E+COuA"]),
                              onClick: ll.J3,
                          },
                      ],
                  };
        },
        buildLayout: () => [lu.k, lo, lr, lc],
    }),
    lm = [
        {
            badgeType: ef.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: eT.M.CLIENT_THEMES_SETTINGS_BADGE,
            StronglyDiscouragedCustomComponent: n9,
        },
        {
            badgeType: ef.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: eT.M.DEKSTOP_CUSTOM_APP_ICON_BADGE,
            StronglyDiscouragedCustomComponent: n9,
        },
        { badgeType: ef.Xi.NEW, dismissibleContent: eT.M.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE },
    ],
    lA = (0, o.t_)(u.X.APPEARANCE_PANEL, {
        initialize: function () {
            n4.A.isFetching() ||
                (n6.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_START" }),
                n3.Bo.get({ url: q.Rsh.USERS_ME_CUSTOM_THEMES, oldFormErrors: !0, rejectWithError: !0 })
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
        useTitle: () => g.intl.string(g.t["iHH+ky"]),
        buildLayout: () => [lg, sb, sq, sm, s0, ln, sa],
    }),
    lh = [
        ...lm,
        {
            badgeType: ef.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: eT.M.FAVORITES_GUILD_NEW_BADGE,
            StronglyDiscouragedCustomComponent: n9,
        },
    ],
    lE = (0, o.i4)(u.X.APPEARANCE_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["iHH+ky"]),
        icon: n2.B,
        useMenu: function () {
            let e,
                t,
                i,
                n = (0, n7.A)(),
                s =
                    ((e = c.D_.useSetting()),
                    (t = c.SI.useSetting()),
                    e
                        ? null
                        : (0, p.jsx)(U.sL, {
                              id: "preview-markdown-toggle",
                              label: g.intl.string(g.t.sHJ9wZ),
                              action: () => {
                                  let e = !t;
                                  Y.default.track(q.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                                      enabled: e,
                                      location: { section: q.JJy.SETTINGS_CONTEXT_MENU },
                                  }),
                                      c.SI.updateSetting(e);
                              },
                              checked: t,
                          })),
                l =
                    ((i = (0, O.bG)([e_.A], () => e_.A.enabled, [])),
                    (0, p.jsx)(U.sL, {
                        id: "streamer-mode-toggle",
                        label: g.intl.string(g.t.p9ZAJZ),
                        action: () => {
                            n8.A.setEnabled(!i);
                        },
                        checked: i,
                    }));
            return N.useMemo(() => {
                let e = [...n];
                return (
                    null != s &&
                        e.push((0, p.jsx)(U.rX, { label: g.intl.string(g.t.Ob7VMB), children: s }, "text-and-images")),
                    null != l && e.push((0, p.jsx)(U.rX, { children: l }, "streamer-mode")),
                    e
                );
            }, [n, s, l]);
        },
        getDismissibleBadges: () => lh,
        buildLayout: () => [lA],
    });
var lT = i(410767),
    lx = i(691885),
    lS = i(408278),
    lp = i(241326),
    lN = i(885574),
    lf = i(475358),
    l_ = i(28647),
    lC = i(337371),
    lI = i(695366),
    lb = i(51760),
    lv = i(364094);
function lj(e) {
    let { game: t, application: i } = e;
    return null == t || null == i
        ? (0, p.jsx)("div", {
              className: lv.zc,
              children: (0, p.jsx)(lI.E, { size: "sm", color: w.A.colors.TEXT_FEEDBACK_WARNING }),
          })
        : (0, p.jsxs)("div", {
              className: lv.nt,
              children: [
                  (0, p.jsx)(e8.A, { game: i, pid: t.pid, size: e8.M.MEDIUM }),
                  (0, p.jsx)("div", {
                      className: lv.Am,
                      children: (0, p.jsx)(lI.E, { size: "sm", color: w.A.colors.TEXT_FEEDBACK_WARNING }),
                  }),
              ],
          });
}
function ly(e) {
    let t = (0, O.bG)([lb.Ay], () => lb.Ay.getMode()),
        { runningGame: i, runningGameApplication: n } = e$();
    null == i || i.elevated || ((i = void 0), (n = void 0));
    let s = (0, to.NP)(),
        l = s && null != i && t === q.TBI.PUSH_TO_TALK;
    return { canPrompt: "voice" === e ? l : s, runningGame: i, runningGameApplication: n };
}
function lO(e) {
    let { className: t, sourcePage: i } = e,
        { canPrompt: n, runningGame: s, runningGameApplication: l } = ly(i);
    return n
        ? (0, p.jsxs)("div", {
              className: ew()(lv.kL, t),
              children: [
                  (0, p.jsx)(lj, { game: s, application: l }),
                  (0, p.jsxs)("div", {
                      className: lv.FS,
                      children: [
                          (0, p.jsx)(V.E, {
                              variant: "text-sm/medium",
                              color: "text-strong",
                              children:
                                  "voice" === i
                                      ? g.intl.string(g.t.vxfv7v)
                                      : null != s
                                        ? g.intl.string(g.t.fAYU2G)
                                        : g.intl.string(g.t["9V4X/c"]),
                          }),
                          (0, p.jsx)(V.E, {
                              variant: "text-xs/medium",
                              color: "text-muted",
                              children: g.intl.format(g.t["/y6htt"], {
                                  helpCenterLink: ta.A.getArticleURL(q.MVz.SYSTEM_SERVICE),
                              }),
                          }),
                      ],
                  }),
                  (0, p.jsx)(eh.$, {
                      variant: "secondary",
                      size: "sm",
                      text: g.intl.string(g.t["1iI46O"]),
                      onClick: function () {
                          (0, to.sL)(i + (null != s ? "-with-game" : "-no-game"));
                      },
                  }),
              ],
          })
        : null;
}
var lR = i(189213),
    lL = i(292666),
    lD = i(320989),
    lP = i(978263);
let lG = [];
var lU = i(235986),
    lM = i(820785),
    lV = i(734057),
    lk = i(808728),
    lw = i(967198),
    lF = i(926140),
    lB = i(194152);
function lz() {}
let lY = [lF.rD.VOICE_CHANNEL];
function lX(e) {
    e.setOptions({ voiceChannelGuildFilter: null }), e.setLimit(1 / 0);
}
function lH() {
    return (0, p.jsx)("div", {
        className: lB.i1,
        children: (0, p.jsx)(V.E, {
            variant: "text-md/medium",
            color: "text-muted",
            className: lB.GN,
            children: g.intl.string(g.t.zHjCd1),
        }),
    });
}
function lK(e) {
    let { keybind: t } = e,
        i = N.useRef(t);
    N.useEffect(() => {
        i.current = t;
    });
    let [n, s] = N.useState(t.params?.channelId ?? void 0),
        l = N.useCallback(() => {
            (0, _.openModalLazy)(
                async () => (e) =>
                    (0, p.jsx)(lW, {
                        ...e,
                        onSelect: (e) => {
                            s(e), tO.A.setKeybind({ ...i.current, params: { channelId: e } });
                        },
                    }),
            );
        }, []);
    return (0, p.jsx)("div", {
        className: lB.a8,
        children: (0, p.jsx)(sO.D, {
            label: g.intl.string(g.t.q4JpM8),
            children: (0, p.jsxs)(lU.A, {
                align: lU.A.Align.STRETCH,
                children: [
                    (0, p.jsx)("div", { className: lB.$X, children: (0, p.jsx)(lZ, { channelId: n }) }),
                    (0, p.jsx)(lU.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, p.jsx)(eh.$, { variant: "primary", text: g.intl.string(g.t.Dm8O4e), onClick: l }),
                    }),
                ],
            }),
        }),
    });
}
function lW(e) {
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
                [a, o] = N.useState(lG),
                u = N.useCallback((e, t) => {
                    "" === (t = t.trim()).trim() ? o(lG) : o(e);
                }, []);
            N.useEffect(
                () =>
                    lD.A.addRouteChangeListener(() => {
                        r("");
                    }),
                [],
            );
            let [d] = N.useState(() => new lP.A(u, i, void 0, n));
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
        })({ visible: !0, autocompleterResultTypes: lY, autocompleterBeforeCreateSearchContext: lX }),
        c =
            ((t = "" !== o),
            (i = (0, O.yK)([lk.Ay, lV.A, lw.A], () => {
                let e = lw.A.getGuildId();
                if (t || null == e) return [];
                let i = [];
                for (let t of lk.Ay.getVocalChannelIds(e)) {
                    let e = lV.A.getChannel(t);
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
            if (e?.type === lF.rD.VOICE_CHANNEL) return e.record.id;
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
                                  if (e?.type === lF.rD.VOICE_CHANNEL) return e.record;
                              })();
                          if (null == i) return null;
                          let n = null != i.parent_id ? lV.A.getChannel(i.parent_id) : void 0,
                              r = H.A.getGuild(i.guild_id);
                          return (0, p.jsx)(
                              lM.c3,
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
                                      null != r ? (0, p.jsx)("div", { className: lB.J5, children: r.name }) : null,
                              },
                              i.id,
                          );
                      },
                      sectionHeight: 0,
                      rowHeight: 34,
                  }
                : { sections: [1], renderRow: () => (0, p.jsx)(lH, {}), sectionHeight: 0, rowHeight: 52 };
    return (0, p.jsx)(lR.Modal, {
        transitionState: n,
        onClose: s,
        title: g.intl.string(g.t.Dm8O4e),
        subtitle: g.intl.string(g.t.q4JpM8),
        actions: void 0,
        input: (0, p.jsx)(lL.k, {
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
                                if (e?.type === lF.rD.VOICE_CHANNEL) return e.record;
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
function lZ(e) {
    let { channelId: t } = e,
        {
            channel: i,
            category: n,
            guild: s,
        } = (0, O.cf)([lV.A, H.A], () => {
            let e = null != t ? lV.A.getChannel(t) : void 0;
            return null != e
                ? {
                      channel: e,
                      category: null != e.parent_id ? lV.A.getChannel(e.parent_id) : void 0,
                      guild: null != e.guild_id ? H.A.getGuild(e.guild_id) : void 0,
                  }
                : { channel: void 0, category: void 0, guild: void 0 };
        });
    return null == i
        ? (0, p.jsx)(V.E, {
              variant: "text-md/medium",
              color: "text-muted",
              className: lB.GN,
              children: g.intl.string(g.t["/fYIK7"]),
          })
        : (0, p.jsx)(lM.c3, {
              channel: i,
              id: i.id,
              category: n,
              onClick: lz,
              onFocus: lz,
              onMouseEnter: lz,
              focused: !1,
              children: null != s ? (0, p.jsx)("div", { className: lB.J5, children: s.name }) : null,
          });
}
function lq(e) {
    let { className: t, children: i } = e;
    return (0, p.jsx)("div", { className: t, children: (0, p.jsx)(R.B, { gap: 16, children: i }) });
}
var lQ = i(734066),
    lJ = i(880144),
    l$ = i(614455);
function l0() {
    let e = (0, O.bG)([eC.Ay], () => eC.Ay.getState()),
        t = (0, O.bG)([lb.Ay], () => (0, lJ.A)(lb.Ay)),
        i = (0, O.bG)([l$.A], () => l$.A.isSupported),
        n = (0, lQ.sw)(),
        s = (0, lQ.BW)(),
        l = (0, ev.isWindows)();
    return {
        customizableKeybinds: (function (e) {
            let { keybinds: t, enableClips: i, enableScreenshotKeybind: n, allowSoundboard: s } = e;
            return eR()(t)
                .reject(
                    (e) =>
                        e.managed &&
                        ![q.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, q.hCu.SAVE_CLIP, q.hCu.SAVE_SCREENSHOT].includes(
                            e.action,
                        ),
                )
                .reject((e) => !i && (e.action === q.hCu.SAVE_CLIP || e.action === q.hCu.SAVE_SCREENSHOT))
                .reject((e) => !n && e.action === q.hCu.SAVE_SCREENSHOT)
                .reject((e) => !s && (e.action === q.hCu.SOUNDBOARD || e.action === q.hCu.SOUNDBOARD_HOLD))
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
                    { id: "unassigned", value: q.hCu.UNASSIGNED, label: g.intl.string(g.t["0Uh579"]) },
                    { id: "push-to-talk", value: q.hCu.PUSH_TO_TALK, label: g.intl.string(g.t.Y5lgTP) },
                    {
                        id: "push-to-talk-priority",
                        value: q.hCu.PUSH_TO_TALK_PRIORITY,
                        label: g.intl.string(g.t.DkSwJ2),
                    },
                    { id: "push-to-mute", value: q.hCu.PUSH_TO_MUTE, label: g.intl.string(g.t.hSCRqd) },
                    { id: "vad-priority", value: q.hCu.VAD_PRIORITY, label: g.intl.string(g.t["49d6Nd"]) },
                    { id: "toggle-mute", value: q.hCu.TOGGLE_MUTE, label: g.intl.string(g.t.PlkYKD) },
                    { id: "toggle-deafen", value: q.hCu.TOGGLE_DEAFEN, label: g.intl.string(g.t.NvGq1K) },
                    { id: "toggle-voice-mode", value: q.hCu.TOGGLE_VOICE_MODE, label: g.intl.string(g.t.Wa5H9S) },
                    { id: "toggle-streamer-mode", value: q.hCu.TOGGLE_STREAMER_MODE, label: g.intl.string(g.t.BK0Ncc) },
                    { id: "toggle-camera", value: q.hCu.TOGGLE_CAMERA, label: g.intl.string(g.t.hf8JVT) },
                ];
            return (
                t &&
                    (r.push({
                        id: "toggle-overlay-input-lock",
                        value: q.hCu.TOGGLE_OVERLAY_INPUT_LOCK,
                        label: g.intl.string(g.t.VsAZcC),
                    }),
                    r.push({
                        id: "activate-overlay-region-text-widget",
                        value: q.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                        label: g.intl.string(g.t.hurHWo),
                    })),
                i &&
                    ((0, ev.isWindows)() || lb.Ay.getUseSystemScreensharePicker()) &&
                    r.push({
                        id: "toggle-go-live-streaming",
                        value: q.hCu.TOGGLE_GO_LIVE_STREAMING,
                        label: g.intl.string(g.t.ybdjJD),
                    }),
                (0, ev.isDesktop)() &&
                    (r.push(
                        { id: "navigate-back", value: q.hCu.NAVIGATE_BACK, label: g.intl.string(g.t.gRSaOa) },
                        { id: "navigate-forward", value: q.hCu.NAVIGATE_FORWARD, label: g.intl.string(g.t.zOXpjU) },
                        {
                            id: "switch-to-voice-channel",
                            value: q.hCu.SWITCH_TO_VOICE_CHANNEL,
                            label: g.intl.string(g.t.ty7Lxy),
                        },
                        {
                            id: "disconnect-from-voice-channel",
                            value: q.hCu.DISCONNECT_FROM_VOICE_CHANNEL,
                            label: g.intl.string(g.t.CV7mT7),
                        },
                    ),
                    n &&
                        r.push(
                            { id: "soundboard", value: q.hCu.SOUNDBOARD, label: g.intl.string(g.t.yPH4xm) },
                            {
                                id: "soundboard-hold",
                                value: q.hCu.SOUNDBOARD_HOLD,
                                label: g.intl.string(g.t["1xFbP/"]),
                            },
                        ),
                    s &&
                        (r.push({ id: "save-clip", value: q.hCu.SAVE_CLIP, label: g.intl.string(g.t.U4URzP) }),
                        l &&
                            r.push({
                                id: "save-screenshot",
                                value: q.hCu.SAVE_SCREENSHOT,
                                label: g.intl.string(g.t["+WloFH"]),
                            }))),
                r
            );
        })({ overlaySupported: i, canGoLive: t, allowSoundboard: l, enableClips: n, enableScreenshotKeybind: s }),
        keybindDescriptions: (function (e) {
            let { overlaySupported: t, canGoLive: i, enableClips: n, enableScreenshotKeybind: s } = e,
                l = {
                    [q.hCu.UNASSIGNED]: g.intl.string(g.t.rvlNLv),
                    [q.hCu.PUSH_TO_MUTE]: g.intl.string(g.t.xtESim),
                    [q.hCu.PUSH_TO_TALK]: g.intl.string(g.t.wTcBSy),
                    [q.hCu.PUSH_TO_TALK_PRIORITY]: g.intl.string(g.t.FhHvWH),
                    [q.hCu.TOGGLE_MUTE]: g.intl.string(g.t.X2fbUm),
                    [q.hCu.TOGGLE_DEAFEN]: g.intl.string(g.t.MjREZV),
                    [q.hCu.TOGGLE_VOICE_MODE]: g.intl.string(g.t.snm5YW),
                    [q.hCu.TOGGLE_STREAMER_MODE]: g.intl.string(g.t.YszLLx),
                    [q.hCu.VAD_PRIORITY]: g.intl.string(g.t.rSe8IZ),
                    [q.hCu.TOGGLE_CAMERA]: g.intl.string(g.t.v1JBtL),
                };
            return (
                t && (l[q.hCu.TOGGLE_OVERLAY_INPUT_LOCK] = g.intl.string(g.t.IoP5vc)),
                i && (0, ev.isWindows)() && (l[q.hCu.TOGGLE_GO_LIVE_STREAMING] = g.intl.string(g.t.s4C238)),
                (0, ev.isDesktop)() &&
                    ((l[q.hCu.NAVIGATE_BACK] = g.intl.string(g.t.nKDlEt)),
                    (l[q.hCu.NAVIGATE_FORWARD] = g.intl.string(g.t.DK0FFk)),
                    (l[q.hCu.SOUNDBOARD] = (0, ev.isWindows)()
                        ? g.intl.string(g.t["5wJefL"])
                        : g.intl.string(g.t.gzjsSP)),
                    (l[q.hCu.SOUNDBOARD_HOLD] = (0, ev.isWindows)()
                        ? g.intl.string(g.t.RRkZc9)
                        : g.intl.string(g.t.laNlTl)),
                    n &&
                        ((l[q.hCu.SAVE_CLIP] = g.intl.string(g.t.z3Wbam)),
                        s && (l[q.hCu.SAVE_SCREENSHOT] = g.intl.string(g.t.m0zd57)))),
                l
            );
        })({ overlaySupported: i, canGoLive: t, enableClips: n, enableScreenshotKeybind: s }),
    };
}
var l1 = i(802247);
function l2(e) {
    let { children: t } = e;
    return t([lC.Q_.MESSAGE, lC.Q_.NAVIGATION, lC.Q_.DND, lC.Q_.CHAT, lC.Q_.VOICE_AND_VIDEO, lC.Q_.MISCELLANEOUS]);
}
class l3 extends N.PureComponent {
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
        return nQ.A.hasBind(t)
            ? (0, p.jsx)(tr.p, { messageType: tr.Y.ERROR, children: g.intl.string(g.t["7lQlw3"]) })
            : iE.Yy.has(t)
              ? (0, p.jsx)(tr.p, {
                    messageType: tr.Y.ERROR,
                    children: g.intl.format(g.t.MOIaNd, {
                        keyboardNavArticle: ta.A.getArticleURL(q.MVz.KEYBOARD_NAVIGATION),
                    }),
                })
              : (0, p.jsx)(V.E, {
                    variant: "text-md/normal",
                    className: l1.qD,
                    children: this.props.keybindDescriptions[e.action],
                });
    }
    render() {
        let { managed: e, enabled: t } = this.props.keybind;
        return (0, p.jsxs)("div", {
            className: l1.YI,
            children: [
                (0, p.jsxs)("div", {
                    className: l1.PO,
                    children: [
                        (0, p.jsx)("div", {
                            className: l1.AS,
                            children: (0, p.jsx)(lx.l, {
                                selectionMode: "single",
                                label: g.intl.string(g.t.UUpAD6),
                                value: this.props.keybind.action,
                                options: this.props.keybindActionTypes,
                                onSelectionChange: this.handleActionChanged,
                                disabled: e,
                            }),
                        }),
                        (0, p.jsx)("div", {
                            className: l1.AS,
                            children: (0, p.jsx)(sO.D, {
                                label: g.intl.string(g.t["1La4tC"]),
                                children: (0, p.jsx)(tR.A, {
                                    defaultValue: this.props.keybind.shortcut,
                                    onChange: this.handleShortcutChange,
                                }),
                            }),
                        }),
                        !e &&
                            (0, p.jsx)("div", {
                                className: l1.d9,
                                children: (0, p.jsx)(lS.K, {
                                    variant: "icon-only",
                                    onClick: this.handleDeleteKeybind,
                                    icon: lp.u,
                                    "aria-label": g.intl.string(g.t.qEHmmB),
                                }),
                            }),
                        (0, p.jsx)("div", {
                            className: l1.ZW,
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
        return e === q.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, p.jsx)(lK, { keybind: this.props.keybind }) : void 0;
    }
}
class l6 extends N.PureComponent {
    handleAddKeybind = () => {
        tO.A.addKeybind();
    };
    renderKeybinds(e, t, i) {
        return e.map((n, s) =>
            (0, p.jsxs)(
                N.Fragment,
                {
                    children: [
                        (0, p.jsx)(l3, { keybind: n, keybindDescriptions: t, keybindActionTypes: i }, n.id),
                        s !== e.length - 1 ? (0, p.jsx)(eE.c, {}) : null,
                    ],
                },
                n.id,
            ),
        );
    }
    renderKeybindWarning() {
        return (0, p.jsxs)("div", {
            className: l1.$e,
            children: [
                (0, p.jsx)(lN.m, { size: "xs", color: w.A.colors.ICON_SUBTLE }),
                (0, p.jsx)(V.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: g.intl.string(g.t.NoKjWP),
                }),
            ],
        });
    }
    render() {
        let { customizableKeybinds: e, keybindActionTypes: t, keybindDescriptions: i } = this.props;
        return (0, p.jsxs)(p.Fragment, {
            children: [
                (0, p.jsx)(lq, {
                    className: iC.IE,
                    children: ev.isPlatformEmbedded
                        ? (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsxs)("div", {
                                      className: l1.OQ,
                                      children: [
                                          this.renderKeybindWarning(),
                                          (0, p.jsx)("div", {
                                              className: l1.c9,
                                              children: (0, p.jsx)(eh.$, {
                                                  size: "md",
                                                  onClick: this.handleAddKeybind,
                                                  text: g.intl.string(g.t.zk6Xbs),
                                                  variant: "primary",
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, p.jsx)(lO, { className: l1.Qo, sourcePage: "keybinds" }),
                                  e.length > 0 &&
                                      (0, p.jsxs)(p.Fragment, {
                                          children: [(0, p.jsx)(eE.c, {}), this.renderKeybinds(e, i, t)],
                                      }),
                                  (0, p.jsx)(eE.c, {}),
                              ],
                          })
                        : (0, p.jsx)(tr.p, {
                              messageType: tr.Y.INFO,
                              className: l1.Ly,
                              children: g.intl.format(g.t.mPi3F3, { downloadLink: q.X7G.DOWNLOAD }),
                          }),
                }),
                (0, p.jsx)(l4, {}),
            ],
        });
    }
}
function l4(e) {
    let { showHeader: t = !0 } = e,
        i = eR()((0, lC.Bx)())
            .filter((e) => e.description !== g.intl.string(g.t.HnNtEI))
            .groupBy((e) => e.group)
            .value();
    return (0, p.jsxs)(R.B, {
        gap: 48,
        children: [
            (0, p.jsx)(ia.n, {
                label: t ? g.intl.string(g.t.Lz5KHI) : void 0,
                children: (0, p.jsx)("div", {
                    className: l1.jh,
                    children: (0, p.jsxs)("div", {
                        className: l1.yZ,
                        children: [
                            (0, p.jsx)(V.E, { variant: "text-md/normal", children: g.intl.string(g.t.sMWLBj) }),
                            (0, p.jsx)("div", {
                                className: l1.DM,
                                children: (0, p.jsx)(lf.e, { shortcut: l_.z.binds["0"], className: l1.LE }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, p.jsx)(l2, {
                children: (e) =>
                    (0, p.jsx)(p.Fragment, {
                        children: e.map((e, t) => {
                            let n = (0, lC.Gm)(e),
                                s = (0, lC.zF)(e),
                                l = i[e];
                            return (0, p.jsx)(
                                ia.n,
                                {
                                    label: n,
                                    description: s,
                                    children: (0, p.jsx)("div", {
                                        className: l1.jh,
                                        children: l.map((e, t) =>
                                            (0, p.jsxs)(
                                                N.Fragment,
                                                {
                                                    children: [
                                                        0 !== t && (0, p.jsx)(eE.c, {}),
                                                        (0, p.jsxs)("div", {
                                                            className: l1.yZ,
                                                            children: [
                                                                (0, p.jsx)(V.E, {
                                                                    variant: "text-md/normal",
                                                                    children: e.description,
                                                                }),
                                                                (0, p.jsx)("div", {
                                                                    className: l1.DM,
                                                                    children: e.binds.map((e) =>
                                                                        (0, p.jsx)(
                                                                            lf.e,
                                                                            { shortcut: e, className: l1.LE },
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
let l7 = (0, o.E2)(u.X.KEYBINDS_SETTING, {
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
            let e = l0();
            return (0, p.jsx)(l6, { ...e });
        },
        useSearchTerms: () => [g.intl.string(g.t.T9DA2K)],
    }),
    l8 = (0, o.zZ)(u.X.KEYBINDS_CATEGORY, { buildLayout: () => [l7] }),
    l5 = (0, o.t_)(u.X.KEYBINDS_PANEL, { useTitle: () => g.intl.string(g.t.T9DA2K), buildLayout: () => [l8] }),
    l9 = (0, o.i4)(u.X.KEYBINDS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.T9DA2K),
        icon: lT.F,
        buildLayout: () => [l5],
    });
var re = i(37646),
    rt = i(76335);
let ri = (0, o.t_)(u.X.LANGUAGE_AND_TIME_PANEL, {
        useTitle: () => g.intl.string(g.t.KyFVyi),
        buildLayout: () => [rt.F],
    }),
    rn = (0, o.i4)(u.X.LANGUAGE_AND_TIME_SIDEBAR_ITEM, {
        icon: re.U,
        useTitle: () => g.intl.string(g.t.KyFVyi),
        buildLayout: () => [ri],
    }),
    rs = (0, nN.D)(() => ({ openOnStartup: !0, startMinimized: !1, minimizeToTray: !0 }));
async function rl() {
    let e = await si.Ay.getOpenOnStart(),
        t = await si.Ay.getSetting("START_MINIMIZED", !1),
        i = await si.Ay.getSetting("MINIMIZE_TO_TRAY", !0);
    rs.setState({ openOnStartup: e, startMinimized: t, minimizeToTray: i });
}
let rr = (0, o.zD)(u.X.OS_OPEN_ON_STARTUP, {
        useTitle: () => g.intl.string(g.t["3BeZti"]),
        usePredicate: () => se.Av && !(0, se.cX)(),
        useValue: () => rs.useState((e) => e.openOnStartup),
        setValue: function (e) {
            rs.setState({ openOnStartup: e }), si.Ay.send("TOGGLE_OPEN_ON_STARTUP", e);
        },
        initialize: () => {
            si.Ay.getOpenOnStart().then((e) => rs.setState({ openOnStartup: e }));
        },
    }),
    ra = (0, o.zD)(u.X.OS_MINIMIZE_TO_TRAY, {
        useTitle: () => g.intl.string(g.t.dJ5MUh),
        useSubtitle: () => g.intl.string(g.t.nQavHr),
        usePredicate: () => se.Av && !(0, se.cX)(),
        useValue: () => rs.useState((e) => e.minimizeToTray),
        setValue: function (e) {
            rs.setState({ minimizeToTray: e }), si.Ay.send("TOGGLE_MINIMIZE_TO_TRAY", e);
        },
        initialize: () => {
            si.Ay.getSetting("MINIMIZE_TO_TRAY", !0).then((e) => rs.setState({ minimizeToTray: e }));
        },
    });
var ro = i(572985);
function ru(e) {
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
            (0, t6.xb)(e.state);
    }
}
let rd = new Set(["failure", "unknown"]),
    rc = (0, o.E2)(u.X.OS_SYSTEM_SERVICE, {
        useSearchTerms: () => [g.intl.string(g.t.roHq80)],
        Component: function () {
            let [e, t] = N.useState(!1),
                [i, n] = N.useState(() => (0, to.TC)()),
                s = (0, iz.ri)("SystemService"),
                l = (0, O.bG)([eQ.Ay], () => eQ.Ay.getSystemServiceStatus("input-service")),
                r = N.useCallback(async () => {
                    t(!0),
                        i ? await (0, to.z8)("windows-settings") : await (0, to.sL)("windows-settings"),
                        t(!1),
                        n((0, to.TC)());
                }, [i]),
                a = "running" === l.state;
            return (0, p.jsxs)("div", {
                className: ro.q,
                children: [
                    (0, p.jsxs)("div", {
                        className: ro.L,
                        children: [
                            (0, p.jsxs)(R.B, {
                                direction: "horizontal",
                                children: [
                                    (0, p.jsx)(V.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        children: g.intl.string(g.t.roHq80),
                                    }),
                                    i &&
                                        s &&
                                        (0, p.jsxs)(p.Fragment, {
                                            children: [
                                                (0, p.jsx)(V.E, {
                                                    variant: "text-md/medium",
                                                    color: "text-strong",
                                                    "aria-hidden": !0,
                                                    children: "\u2022",
                                                }),
                                                (0, p.jsx)(V.E, {
                                                    variant: "text-md/medium",
                                                    color:
                                                        "running" === l.state
                                                            ? "text-feedback-positive"
                                                            : rd.has(l.state)
                                                              ? "text-feedback-critical"
                                                              : "text-feedback-warning",
                                                    children: ru(l),
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                            (0, p.jsx)(V.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: g.intl.format(g.t["8CAL+D"], {
                                    helpCenterLink: ta.A.getArticleURL(q.MVz.SYSTEM_SERVICE),
                                }),
                            }),
                            i &&
                                !s &&
                                (0, p.jsx)(V.E, {
                                    variant: "text-sm/normal",
                                    color: a ? "text-feedback-positive" : "text-feedback-warning",
                                    children: a
                                        ? g.intl.string(g.t.KHVMkW)
                                        : g.intl.format(g.t["5Rlr0b"], { status: ru(l) }),
                                }),
                        ],
                    }),
                    (0, p.jsx)(eh.$, {
                        variant: i ? "critical-secondary" : "primary",
                        loading: e,
                        onClick: r,
                        text: i ? g.intl.string(g.t.pAwbdL) : g.intl.string(g.t["1iI46O"]),
                    }),
                ],
            });
        },
        usePredicate: to.XQ,
    }),
    rg = (0, o.zZ)(u.X.LINUX_CATEGORY, {
        buildLayout: () => [rr, ra, rc],
        initialize: () => {
            rl();
        },
    }),
    rm = (0, o.t_)(u.X.LINUX_PANEL, { useTitle: () => g.intl.string(g.t["7pPjTW"]), buildLayout: () => [rg] }),
    rA = (0, o.i4)(u.X.LINUX_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["7pPjTW"]),
        icon: e2.k,
        usePredicate: () => ev.isPlatformEmbedded && (0, ev.isLinux)(),
        buildLayout: () => [rm],
    });
var rh = i(3137),
    rE = i(369606),
    rT = i(604121),
    rx = i(725951),
    rS = i(400492),
    rp = i(178241),
    rN = i(115063),
    rf = i(754692),
    r_ = i(927018),
    rC = i(512599),
    rI = i(532197),
    rb = i(874486),
    rv = i(989349),
    rj = i.n(rv),
    ry = i(58703),
    rO = i(906688),
    rR = i(523896);
function rL(e) {
    let { achievementId: t, dateUnlocked: i } = e,
        n = (0, r_.vM)(t);
    if (null == n) return null;
    let s = null != i,
        { name: l, description: r, hideDescriptionUntilUnlock: a, onAction: o } = n,
        u = a && !s,
        d = s ? "text-strong" : "text-muted",
        c = s ? "text-default" : "text-muted",
        g = rj()(i),
        m = null != o && s,
        A = m ? M.D : "div";
    return (0, p.jsxs)(A, {
        className: ew()(rR.kL, m && rR.b),
        onClick: () => {
            m && o();
        },
        children: [
            (0, p.jsx)("div", {
                className: rR.zc,
                children: (0, p.jsx)(rO.A, { achievementId: t, size: rO.A.Sizes.SIZE_40, unlocked: s }),
            }),
            (0, p.jsxs)("div", {
                className: rR.VW,
                children: [
                    null != i &&
                        (0, p.jsx)(V.E, {
                            variant: "text-xxs/semibold",
                            color: "text-muted",
                            className: rR.YR,
                            children: (0, ry.mk)(g),
                        }),
                    (0, p.jsx)(V.E, { variant: "text-md/medium", color: d, children: l() }),
                    (0, p.jsx)(V.E, { variant: "text-xs/normal", color: c, children: u ? "?????" : r() }),
                ],
            }),
        ],
    });
}
var rD = i(885959);
function rP(e) {
    let { onBackClick: t } = e,
        i = (0, O.bG)([rb.A], () => rb.A.getAllUnlockedAchievements()),
        n = N.useMemo(() => Object.values(i).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [i]),
        s = N.useMemo(
            () =>
                Object.values(r_.l0)
                    .filter(t6.Vq)
                    .filter((e) => null == i[e.id])
                    .sort((e, t) => e.rarity - t.rarity),
            [i],
        );
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsxs)(M.D, {
                onClick: t,
                className: rD.vv,
                children: [
                    (0, p.jsx)(rI.A, { direction: rI.A.Directions.LEFT, className: rD.Kk }),
                    (0, p.jsx)(V.E, {
                        variant: "text-lg/normal",
                        color: "text-default",
                        children: g.intl.string(g.t["13/7kX"]),
                    }),
                ],
            }),
            (0, p.jsxs)("div", {
                className: rD.N1,
                children: [
                    (0, p.jsxs)("div", {
                        className: rD.if,
                        children: [
                            (0, p.jsx)(eA.D, {
                                variant: "heading-lg/extrabold",
                                color: "text-strong",
                                children: g.intl.string(g.t["6jI0hd"]),
                            }),
                            (0, p.jsx)(V.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                children: g.intl.string(g.t.GuUItX),
                            }),
                        ],
                    }),
                    (0, p.jsx)("div", {
                        className: rD.nr,
                        children: (0, p.jsx)(rE.O, {
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
                    className: rD.yF,
                    children: (0, p.jsx)("div", {
                        className: rD.Eh,
                        children: n.map((e) => {
                            let { achievementId: t, dateUnlocked: i } = e;
                            return (0, p.jsx)(rL, { achievementId: t, dateUnlocked: i }, t);
                        }),
                    }),
                }),
            s.length > 0 &&
                (0, p.jsxs)("div", {
                    className: rD.yF,
                    children: [
                        (0, p.jsx)("div", {
                            className: rD.if,
                            children: (0, p.jsx)(V.E, {
                                variant: "text-md/bold",
                                color: "text-default",
                                children: g.intl.string(g.t.GFyMg1),
                            }),
                        }),
                        (0, p.jsx)("div", {
                            className: rD.Eh,
                            children: s.map((e) => (0, p.jsx)(rL, { achievementId: e.id }, e.id)),
                        }),
                    ],
                }),
            (0, p.jsx)("div", { className: rD.yF, children: (0, p.jsx)("div", { className: rD.F3 }) }),
        ],
    });
}
var rG = i(224964),
    rU = i(31408),
    rM = i(739347);
let rV = { enabled: !0, combosEnabled: !0, screenshakeEnabled: !1, confettiEnabled: !1 },
    rk = (0, eO.range)(0, 11),
    rw = (0, eO.range)(0, 2.25, 0.25),
    rF = (0, eO.range)(1, 11),
    rB = (0, eO.range)(1, 26),
    rz = { 0: "poggermode_settings_panel", 1: "poggermode_achievements_panel" };
function rY(e) {
    let { disabled: t, locations: i, settingsLocations: n, onChange: s } = e,
        l = i.map((e) =>
            (0, p.jsx)(
                L.d,
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
    return (0, p.jsx)(ia.n, { label: g.intl.string(g.t.bWVN1D), children: l });
}
function rX(e) {
    let { children: t } = e;
    return (0, p.jsx)(V.E, { className: rM.iF, variant: "text-sm/normal", color: "text-default", children: t });
}
function rH(e) {
    let {
            settings: { enabled: t, warningSeen: i },
            updateSettings: n,
        } = e,
        s = (0, O.bG)([iW.A], () => iW.A.useReducedMotion);
    return (0, p.jsx)(L.d, {
        label: g.intl.string(g.t.vuiXm9),
        description: g.intl.string(g.t.KuYbWN),
        checked: t,
        onChange: (e) => {
            e || (0, rf._)(r_.sn.DISABLE_POGGERMODE),
                e && (!i || s)
                    ? (0, st.A)({
                          title: s ? g.intl.string(g.t["FxT+p0"]) : g.intl.string(g.t.TAZ4F9),
                          subtitle: s ? g.intl.string(g.t.gmixrx) : g.intl.string(g.t.jN3t3K),
                          confirmText: g.intl.string(g.t.JFfins),
                          onConfirm: () => n(s ? rV : { enabled: !0, warningSeen: !0 }),
                      })
                    : n({ enabled: e });
        },
    });
}
function rK(e) {
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
                    (0, p.jsx)(V.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: rM.KF,
                        children: g.intl.string(g.t.vd0D81),
                    }),
                    (0, p.jsx)(rX, { children: g.intl.string(g.t.a18Sug) }),
                    (0, p.jsx)(i5.A, {
                        disabled: a,
                        markers: rF,
                        stickToMarkers: !0,
                        minValue: rF[0],
                        maxValue: rF[rF.length - 1],
                        initialValue: n,
                        onValueChange: (e) => r({ confettiCount: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, p.jsxs)("div", {
                children: [
                    (0, p.jsx)(V.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: rM.KF,
                        children: g.intl.string(g.t.sPO3ij),
                    }),
                    (0, p.jsx)(rX, { children: g.intl.string(g.t.xoldVn) }),
                    (0, p.jsx)(i5.A, {
                        disabled: a,
                        markers: rB,
                        stickToMarkers: !0,
                        minValue: rB[0],
                        maxValue: rB[rB.length - 1],
                        initialValue: s,
                        onValueChange: (e) => r({ confettiSize: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, p.jsx)(rY, {
                disabled: a,
                locations: [
                    {
                        location: rU.k.CHAT_INPUT,
                        title: g.intl.string(g.t.elTtyz),
                        description: g.intl.string(g.t.HtKfMi),
                    },
                    {
                        location: rU.k.REACTION,
                        title: g.intl.string(g.t.Ik4VIa),
                        description: g.intl.string(g.t.y4rqK0),
                    },
                    {
                        location: rU.k.MEMBER_USER,
                        title: g.intl.string(g.t.ZXBlAn),
                        description: g.intl.string(g.t["m9RD+c"]),
                    },
                    {
                        location: rU.k.CALL_TILE,
                        title: g.intl.string(g.t.V66giQ),
                        description: g.intl.string(g.t.fiHV7u),
                    },
                ],
                settingsLocations: l,
                onChange: (e) => r({ confettiEnabledLocations: e }, 0),
            }),
        ],
    });
}
function rW(e) {
    let {
            settings: { enabled: t, combosEnabled: i, comboSoundsEnabled: n, combosRequiredCount: s },
            updateSettings: l,
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
                onChange: (e) => l({ combosEnabled: e }),
            }),
            (0, p.jsx)(L.d, {
                label: g.intl.string(g.t["Ax+IoW"]),
                description: g.intl.string(g.t["9rgQEr"]),
                checked: n,
                disabled: !t,
                onChange: (e) => l({ comboSoundsEnabled: e }),
            }),
            (0, p.jsxs)("div", {
                children: [
                    (0, p.jsx)(V.E, {
                        variant: "text-md/semibold",
                        color: r ? "text-muted" : "text-strong",
                        className: rM.KF,
                        children: g.intl.string(g.t.L0oQuh),
                    }),
                    (0, p.jsx)(rX, { children: g.intl.string(g.t["/OOFpL"]) }),
                    (0, p.jsx)(i5.A, {
                        disabled: r,
                        markers: rk,
                        stickToMarkers: !0,
                        minValue: rk[0],
                        maxValue: rk[rk.length - 1],
                        initialValue: s,
                        onValueChange: (e) => l({ combosRequiredCount: e }),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
        ],
    });
}
function rZ(e) {
    let {
            settings: { enabled: t, screenshakeEnabled: i, shakeIntensity: n, screenshakeEnabledLocations: s },
            updateSettings: l,
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
                onChange: (e) => l({ screenshakeEnabled: e }, 1),
            }),
            (0, p.jsxs)("div", {
                children: [
                    (0, p.jsx)(V.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: rM.KF,
                        children: g.intl.string(g.t.UxnnC4),
                    }),
                    (0, p.jsx)(rX, { children: g.intl.string(g.t.CEOEOb) }),
                    (0, p.jsx)(i5.A, {
                        disabled: a,
                        markers: rw,
                        equidistant: !0,
                        stickToMarkers: !0,
                        minValue: rw[0],
                        maxValue: rw[rw.length - 1],
                        initialValue: n,
                        onValueChange: (e) => {
                            var t;
                            null != (t = { shakeIntensity: e }).shakeIntensity &&
                                t.shakeIntensity > n &&
                                (0, rf._)(r_.sn.MORE),
                                l(t, 1);
                        },
                        onMarkerRender: (e) => (e === rw[rw.length - 1] ? g.intl.string(g.t["4rbMWc"]) : `${100 * e}%`),
                    }),
                ],
            }),
            (0, p.jsx)(rY, {
                disabled: a,
                locations: [
                    {
                        location: rU.uD.CHAT_INPUT,
                        title: g.intl.string(g.t.vUcvPP),
                        description: g.intl.string(g.t.y00OrF),
                    },
                    {
                        location: rU.uD.VOICE_USER,
                        title: g.intl.string(g.t.TcRO54),
                        description: g.intl.string(g.t.YJCxVY),
                    },
                    {
                        location: rU.uD.MENTION,
                        title: g.intl.string(g.t.oW4shO),
                        description: g.intl.string(g.t["mqfw/H"]),
                    },
                ],
                settingsLocations: s,
                onChange: (e) => l({ screenshakeEnabledLocations: e }, 1),
            }),
        ],
    });
}
function rq(e) {
    let { updateSettings: t } = e;
    return (0, p.jsx)(ia.n, {
        label: g.intl.string(g.t.EuXv2q),
        children: (0, p.jsxs)(R.B, {
            gap: 16,
            children: [
                (0, p.jsx)("div", { children: g.intl.string(g.t["1SLnki"]) }),
                (0, p.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: rM.hw,
                    children: (0, p.jsx)(eh.$, {
                        variant: "primary",
                        size: "sm",
                        text: g.intl.string(g.t.qz65yY),
                        onClick: () => {
                            t({ enabled: !1, settingsVisible: !1 }), (0, sT.default)();
                        },
                    }),
                }),
            ],
        }),
    });
}
function rQ(e) {
    let { onChangePage: t } = e;
    return (0, p.jsxs)(M.D, {
        onClick: () => t(1),
        className: rM.Tq,
        children: [
            (0, p.jsx)("div", {
                className: rM.w1,
                children: (0, p.jsx)(rE.O, { size: "md", color: w.A.unsafe_rawColors.ORANGE_345.css }),
            }),
            (0, p.jsxs)("div", {
                className: rM.qL,
                children: [
                    (0, p.jsx)(eA.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: g.intl.string(g.t["6jI0hd"]),
                    }),
                    (0, p.jsx)(V.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: g.intl.string(g.t.GuUItX),
                    }),
                ],
            }),
            (0, p.jsx)(th._, { size: "custom", color: "currentColor", width: 16, className: rM.nT }),
        ],
    });
}
let rJ = () =>
    i
        .e("4660")
        .then(i.t.bind(i, 662336, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
function r$(e) {
    let { onChangePage: t, setShowEnableAnimation: i } = e,
        n = (0, O.cf)([rh.A], () => rh.A.getState()),
        [s, l] = N.useState({ x: 0, y: 0 }),
        r = (0, rG.A)(),
        a = (e, t) => {
            var l, a, o, u, d, c, g, m;
            if (
                (e.enabled &&
                    !1 === n.enabled &&
                    (i(!0),
                    (0, rS.Ak)("poggermode_enabled"),
                    (0, rN.fO)({ duration: 2e3, intensity: e.shakeIntensity ?? n.shakeIntensity })),
                (0, rC.O9)(e),
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
        (0, p.jsxs)(R.B, {
            gap: 24,
            children: [
                (0, p.jsx)(rH, { settings: n, updateSettings: a }),
                (0, p.jsx)(rQ, { onChangePage: t }),
                (0, p.jsx)(rW, { settings: n, updateSettings: a }),
                (0, p.jsx)(rZ, { settings: n, updateSettings: a }),
                (0, p.jsx)(rK, { settings: n, updateSettings: a }),
                (0, p.jsx)(rq, { updateSettings: a }),
            ],
        })
    );
}
let r0 = (e) => (0 === e ? rx.f.LEFT : rx.f.RIGHT),
    r1 = (0, o.E2)(u.X.POGGERMODE_SETTING, {
        Component: function () {
            let [e, t] = N.useState(0),
                [i, n] = N.useState(r0(e)),
                [s, l] = N.useState(!1),
                r = (0, O.bG)([iW.A], () => iW.A.useReducedMotion),
                a = s && !r;
            return (
                N.useEffect(() => {
                    let t = setTimeout(() => {
                        n(r0(e));
                    }, 500);
                    return () => clearTimeout(t);
                }, [e]),
                N.useEffect(() => {
                    (0, rp._)(rz[e]);
                }, [e]),
                N.useEffect(() => {
                    Math.random() > 0.99 && (0, rf._)(r_.sn.VISITOR_100);
                }, []),
                (0, p.jsxs)(p.Fragment, {
                    children: [
                        (0, p.jsx)(rx.A, {
                            className: rM.l3,
                            step: e,
                            direction: i,
                            children: ((e, t, i) => {
                                let n = (e) => () => {
                                    t(e);
                                };
                                switch (e) {
                                    case 0:
                                        return (0, p.jsx)(r$, { onChangePage: n(1), setShowEnableAnimation: i });
                                    case 1:
                                        return (0, p.jsx)(rP, { onBackClick: n(0) });
                                    default:
                                        return null;
                                }
                            })(e, t, l),
                        }),
                        (0, p.jsx)("div", {
                            className: a ? rM.Sr : rM.IP,
                            children: (0, p.jsx)(rT.a, {
                                className: rM.gT,
                                importData: rJ,
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
            g.intl.string(g.t.AtCukI),
            g.intl.string(g.t.mqxwJO),
            g.intl.string(g.t.wVS5Sd),
            g.intl.string(g.t.Xz0ole),
            g.intl.string(g.t["Ax+IoW"]),
            g.intl.string(g.t["6jI0hd"]),
            g.intl.string(g.t.s0KCgF),
        ],
    }),
    r2 = (0, o.zZ)(u.X.POGGERMODE_CATEGORY, { buildLayout: () => [r1] });
var r3 = i(502220);
let r6 = (0, o.t_)(u.X.POGGERMODE_PANEL, { useTitle: () => g.intl.string(g.t.AtCukI), buildLayout: () => [r2] }),
    r4 = (0, o.i4)(u.X.POGGERMODE_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.AtCukI),
        icon: () => (0, p.jsx)("img", { alt: "", src: i(724405), className: r3.$ }),
        usePredicate: () => (0, O.bG)([rh.A], () => rh.A.settingsVisible),
        buildLayout: () => [r6],
    }),
    r7 = (0, o.zD)(u.X.OS_START_MINIMIZED, {
        useTitle: () => g.intl.string(g.t.GfBL83),
        useSubtitle: () => g.intl.string(g.t.XGyhhc),
        usePredicate: () => (0, se.uF)(),
        useValue: () => rs.useState((e) => !!e.openOnStartup && e.startMinimized),
        setValue: function (e) {
            rs.setState({ startMinimized: e }), si.Ay.send("TOGGLE_START_MINIMIZED", e);
        },
        useDisabled: () => !rs.useState((e) => e.openOnStartup),
        initialize: () => {
            si.Ay.getSetting("START_MINIMIZED", !1).then((e) => rs.setState({ startMinimized: e }));
        },
    }),
    r8 = (0, o.E2)(u.X.CUSTOM_KEYBINDS_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t["069nVT"])],
        Component: function () {
            let { customizableKeybinds: e, keybindDescriptions: t, keybindActionTypes: i } = l0();
            return se.Av
                ? e.map((e) => (0, p.jsx)(l3, { keybind: e, keybindDescriptions: t, keybindActionTypes: i }, e.id))
                : (0, p.jsx)(y.w, {
                      type: "info",
                      children: g.intl.format(g.t.mPi3F3, { downloadLink: q.X7G.DOWNLOAD }),
                  });
        },
    }),
    r5 = (0, o.E2)(u.X.DEFAULT_KEYBINDS_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t.Lz5KHI)],
        Component: () => (0, p.jsx)(l4, { showHeader: !1 }),
    }),
    r9 = (0, o.zZ)(u.X.SYSTEM_GENERAL_CATEGORY, {
        useTitle: () => g.intl.string(g.t.cg6ltt),
        buildLayout: () => [rr, r7, ra],
        usePredicate: () => se.Av && ((0, se.uF)() || (0, se.j9)()),
        initialize: () => {
            rl();
        },
    }),
    ae = (0, o.zZ)(u.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY, {
        useTitle: () => g.intl.string(g.t["069nVT"]),
        useSubtitle: () => g.intl.string(g.t.T4LZVL),
        buildLayout: () => [r8],
        initialize: () => (tO.A.enableAll(!1), () => tO.A.enableAll(!0)),
        useInlineNotice: function () {
            return se.Av
                ? { type: ef.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: () => (0, p.jsx)(lO, { sourcePage: "keybinds" }) }
                : null;
        },
        useHeaderDecoration: () =>
            se.Av
                ? {
                      type: ef.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "add-keybind",
                              type: ef.UV.BUTTON,
                              text: g.intl.string(g.t.zk6Xbs),
                              variant: "primary",
                              onClick: () => tO.A.addKeybind(),
                          },
                      ],
                  }
                : null,
    }),
    at = (0, o.zZ)(u.X.SYSTEM_DEFAULT_KEYBINDS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.Lz5KHI),
        buildLayout: () => [r5],
    }),
    ai = (0, o.zZ)(u.X.SYSTEM_HELPER_CATEGORY, {
        useTitle: () => g.intl.string(g.t["+XZgmA"]),
        usePredicate: () => se.Av && ((0, se.uF)() || (0, se.j9)()),
        buildLayout: () => [rc],
    }),
    an = (0, o.t_)(u.X.SYSTEM_PANEL, {
        useTitle: () => g.intl.string(g.t["VJ/qKo"]),
        buildLayout: () => [r9, ae, at, ai],
    }),
    as = (0, o.i4)(u.X.SYSTEM_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["VJ/qKo"]),
        icon: lT.F,
        buildLayout: () => [an],
    });
var al = i(831544),
    ar = i(235661),
    aa = i(212245),
    ao = i(329551),
    au = i(285918),
    ad = i(413339),
    ac = i(952572),
    ag = i(382003);
let am = (0, o.E2)(u.X.CAMERA_BACKGROUND_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t.lZTUPs)],
        usePredicate: ac.A,
        Component: function () {
            let e = (0, aa.p)(),
                t = N.useRef(!1),
                i = (0, O.bG)([lb.Ay], () => lb.Ay.getVideoDeviceId()),
                [n, s] = N.useState((0, ao.i)(t3.default.getCurrentUser())),
                l = N.useRef(n);
            return (
                N.useEffect(
                    () => () => {
                        t.current && (0, au._C)(l.current);
                    },
                    [],
                ),
                (0, p.jsx)(ag.A, {
                    selectedBackgroundOption: n,
                    onSelectBackgroundOption: (i) => {
                        (t.current = !0), (l.current = i), s(i), (0, ad.gB)(i, { location: e.location }).catch(q.tEg);
                    },
                    currentDeviceId: i,
                })
            );
        },
    }),
    aA = (0, o.zD)(u.X.CAMERA_PREVIEW_PREFERENCE, {
        useTitle: () => g.intl.string(g.t["3Ppr1h"]),
        useSubtitle: () => g.intl.string(g.t.WNbX4O),
        useValue: c.bm.useSetting,
        setValue: (e) => {
            c.bm.updateSetting(e), Y.default.track(q.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e });
        },
    });
var ah = i(625841),
    aE = i(74848),
    aT = i(204050);
let ax = (0, nN.D)(() => ({ previewEnabled: !1 }));
var aS = i(731854);
let ap = (0, o.E2)(u.X.CAMERA_SELECTION_SETTING, {
    useSearchTerms: () => [g.intl.string(g.t.FsQ3OR)],
    Component: function () {
        let e = (0, O.bG)([lb.Ay], () => lb.Ay.isVideoAvailable()),
            { id: t } = (0, aE.x5)(aS.oh.VIDEO_INPUT),
            { analyticsLocations: i } = (0, nU.Ay)();
        return (0, p.jsx)(ah.U, {
            label: g.intl.string(g.t.FsQ3OR),
            deviceType: aS.oh.VIDEO_INPUT,
            location: "UserSettingsCameraSelect",
            isDisabled: !e,
            helperText: (0, aT.p)()
                ? g.intl.format(g.t.aJYgRt, {
                      onCameraSettingsClick: () => {
                          ax.setState({ previewEnabled: !1 }),
                              window.open((0, aT.i)(t)),
                              Y.default.track(q.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: i });
                      },
                  })
                : void 0,
        });
    },
});
var aN = i(745317),
    af = i(698292);
let a_ = (0, o.E2)(u.X.CAMERA_VIDEO_PREVIEW, {
        useSearchTerms: () => [g.intl.string(g.t.JIf4v7)],
        Component: function () {
            let e = lb.Ay.getCameraComponent(),
                t = (0, O.bG)([lb.Ay], () => lb.Ay.getVideoDeviceId()),
                i = ax.useField("previewEnabled"),
                n = (0, O.bG)([lb.Ay], () => lb.Ay.isVideoAvailable());
            return ((0, e7.l0)(() => {
                ax.setState({ previewEnabled: !1 });
            }),
            i)
                ? (0, p.jsx)("div", {
                      className: af.T,
                      children: (0, p.jsxs)("div", {
                          className: af.U,
                          children: [
                              (0, p.jsx)(e, { deviceId: t, width: 387, height: 218, disabled: !i }),
                              (0, p.jsx)(aN.k, {}),
                          ],
                      }),
                  })
                : (0, p.jsx)("div", {
                      className: af.T,
                      children: (0, p.jsx)(e0.m, {
                          text: n ? null : g.intl.string(g.t["8jSzSe"]),
                          children: (0, p.jsx)(eh.$, {
                              variant: "primary",
                              text: g.intl.string(g.t.JIf4v7),
                              onClick: () => ax.setState({ previewEnabled: !0 }),
                              disabled: !n,
                          }),
                      }),
                  });
        },
    }),
    aC = (0, o.zZ)(u.X.CAMERA_CATEGORY, {
        useTitle: () => g.intl.string(g.t.uje3P9),
        usePredicate: () => (0, O.bG)([lb.Ay], () => lb.Ay.supports(aS.O5.VIDEO)),
        buildLayout: () => [a_, aA, ap, am],
    });
var aI = i(827343);
let ab = (0, o.zD)(u.X.VOICE_AND_VIDEO_OPENH264, {
        useTitle: () => g.intl.string(g.t.qFphsa),
        useSubtitle: () => g.intl.string(g.t.cQfwyY),
        usePredicate: function () {
            return (0, se.j9)();
        },
        useValue: function () {
            return (0, O.bG)([lb.Ay], () => lb.Ay.getOpenH264Enabled());
        },
        setValue: function (e) {
            aI.A.setOpenH264Enabled(e),
                (0, st.A)({
                    title: g.intl.string(g.t["9jf31O"]),
                    subtitle: g.intl.string(g.t["J2wg+X"]),
                    confirmText: g.intl.string(g.t.BddRzS),
                    onConfirm: () => s3.A.app.relaunch(),
                });
        },
        useSearchTerms: () => ["open", "OpenH264", "H264", "codec"],
    }),
    av = (0, o.zD)(u.X.VOICE_AND_VIDEO_AUDIO_RECORDING, {
        useTitle: () => g.intl.string(g.t["r6K+TL"]),
        useSubtitle: () => g.intl.string(g.t["xl9+I6"]),
        useValue: function () {
            return (0, O.bG)([lb.Ay], () => lb.Ay.getAecDump());
        },
        setValue: aI.A.setAecDump,
        usePredicate: function () {
            return (0, O.bG)([lb.Ay], () => lb.Ay.isAecDumpSupported());
        },
    });
var aj = i(139033),
    ay = i(862482),
    aO = i(640238),
    aR = i(825484),
    aL = i(77138),
    aD = i(487329),
    aP = i(353835);
let aG = (0, nN.D)(() => ({ isUploading: !1, isDisabled: !1 }));
async function aU() {
    let e = await s3.A.fileManager.getLogPath();
    s3.A.fileManager.showItemInFolder(e);
}
function aM(e) {
    (0, st.A)({
        title: g.intl.string(g.t["7UXEF2"]),
        subtitle: g.intl.string(g.t.IYPrRl),
        confirmText: g.intl.string(g.t.BddRzS),
        onConfirm: () => aI.A.setDebugLogging(e),
    });
}
async function aV(e) {
    let { onUploadStart: t, onUploadFinish: i } = e;
    t?.();
    try {
        let e, t;
        await lb.Ay.getMediaEngine().writeAudioDebugState(),
            await aP.A.submitLiveCrashReport({ message: { message: "User Live Dump" } }),
            await (0, aL.a)(q.Umv.RTC),
            (e = g.intl.string(g.t["fKBB8+"])),
            (t = g.intl.string(g.t.BvyxE7)),
            (0, aj.A)({ title: e, subtitle: t });
    } catch (l) {
        var n;
        let e, t, i, s;
        (n = l.displayMessage),
            (e = g.intl.string(g.t.QZg0J7)),
            (t = n ?? g.intl.string(g.t.VzHcSm)),
            (i = (0, aD.B1)(aD.iy.DEBUG_LOG_UPLOAD_FAILED)?.errorCode),
            (s = g.intl.formatToPlainString(g.t.ejOT95, { errorCode: i })),
            (0, _.openModal)((i) =>
                (0, p.jsx)(aO.a, {
                    header: e,
                    confirmButtonColor: ay.$n.Colors.BRAND,
                    confirmText: g.intl.string(g.t.BddRzS),
                    ...i,
                    children: (0, p.jsxs)("div", {
                        style: { display: "flex", flexDirection: "column", height: "100%" },
                        children: [
                            (0, p.jsx)(V.E, { variant: "text-md/normal", children: t }),
                            (0, p.jsx)(V.E, {
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
async function ak() {
    await aV({
        onUploadStart: () => aG.setState({ isUploading: !0 }),
        onUploadFinish: () => aG.setState({ isUploading: !1, isDisabled: !0 }),
    });
}
let aw = (0, o.E2)(u.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [g.intl.string(g.t["726JHL"]), g.intl.string(g.t.EbwFfR), g.intl.string(g.t.nuPtYi)],
    usePredicate: function () {
        let e = (0, O.bG)([lb.Ay], () => lb.Ay.supports(aS.O5.DEBUG_LOGGING));
        return se.Av && e && null != s3.A.fileManager.readLogFiles;
    },
    Component: function () {
        let e = (0, O.bG)([lb.Ay], () => lb.Ay.getDebugLogging()),
            t = aG.useField("isUploading"),
            i = aG.useField("isDisabled"),
            n = N.useId();
        return (0, p.jsxs)("fieldset", {
            children: [
                (0, p.jsx)(B.A, { tag: "legend", id: n, children: g.intl.string(g.t["FjN+et"]) }),
                (0, p.jsxs)(R.B, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, p.jsx)(L.d, {
                            label: g.intl.string(g.t["726JHL"]),
                            description: g.intl.string(g.t["/7ak9Q"]),
                            checked: e,
                            onChange: aM,
                        }),
                        (0, p.jsx)("div", {
                            role: "group",
                            "aria-labelledby": n,
                            children: (0, p.jsxs)(aR.e, {
                                children: [
                                    (0, p.jsx)(eh.$, {
                                        variant: "secondary",
                                        text: g.intl.string(g.t.EbwFfR),
                                        onClick: ak,
                                        loading: t,
                                        disabled: i,
                                        "aria-label": g.intl.string(g.t.aY1OH2),
                                    }),
                                    (0, p.jsx)(eh.$, {
                                        variant: "secondary",
                                        text: g.intl.string(g.t.nuPtYi),
                                        onClick: aU,
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
var aF = i(233545),
    aB = i(412780);
function az() {
    return (0, O.bG)([t3.default, lb.Ay], () => {
        let e = t3.default.getCurrentUser(),
            t = e?.isStaff() ?? !1,
            i = "canary" === si.Ay.releaseChannel || "development" === si.Ay.releaseChannel,
            n = lb.Ay.supports(aS.O5.CONNECTION_REPLAY);
        return t && i && n;
    });
}
let aY = (0, o.zD)(u.X.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
        useTitle: () => g.intl.string(g.t.U4FgFK),
        useSubtitle: () => g.intl.string(g.t.Lm72RU),
        useValue: function () {
            return (0, O.bG)([aB.Ay], () => aB.Ay.shouldRecordNextConnection());
        },
        setValue: aF.Et,
        usePredicate: az,
    }),
    aX = (0, o.Tf)(u.X.VOICE_AND_VIDEO_OPEN_CONNECTION_REPLAY, {
        useTitle: () => g.intl.string(g.t.nJnOHO),
        useLabel: () => g.intl.string(g.t["3xjX0U"]),
        onClick: aF.YW,
        usePredicate: az,
    });
var aH = i(926919),
    aK = i(111162),
    aW = i(698723);
let aZ = (0, o.zD)(u.X.VOICE_AND_VIDEO_STREAM_INFO_OVERLAY, {
        useTitle: () => g.intl.string(g.t["0CEP6e"]),
        useSubtitle: () => g.intl.string(g.t["kBXuW+"]),
        useValue: function () {
            return (0, O.bG)([aK.default], () => aK.default.isStreamInfoOverlayEnabled);
        },
        setValue: function (e) {
            let t = aK.default.isStreamInfoOverlayEnabled;
            (0, aW.A)("stream_info_overlay_enabled", e, t), (0, aH.x)({ isStreamInfoOverlayEnabled: e });
        },
        usePredicate: function () {
            return c.Q_.useSetting();
        },
    }),
    aq = (0, o.bd)(u.X.VOICE_AND_VIDEO_DIAGNOSTICS_ACCORDION, {
        useTitle: (e) => (e ? g.intl.string(g.t["/B4I8H"]) : g.intl.string(g.t.BTlsWH)),
        useCollapsedSubtitle: () => g.intl.string(g.t.la1Ys4),
        buildLayout: () => [aZ, av, aY, aX, aw],
    });
function aQ(e, t, i) {
    (0, st.A)({ title: e, subtitle: t, confirmText: g.intl.string(g.t.BddRzS), onConfirm: i });
}
let aJ = (0, o.Tf)(u.X.VOICE_AND_VIDEO_RESET_ALL_SETTINGS, {
        useTitle: () => g.intl.string(g.t.SXfv1v),
        useSubtitle: () => g.intl.string(g.t["buA5/q"]),
        useLabel: () => g.intl.string(g.t.yBZMsQ),
        onClick: function () {
            aQ(g.intl.string(g.t["4iKQ/3"]), g.intl.string(g.t.sQ42iT), aI.A.reset);
        },
        useVariant: () => "critical-secondary",
    }),
    a$ = (0, o.zZ)(u.X.VOICE_AND_VIDEO_DIAGNOSTICS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.UDAU9K),
        buildLayout: () => [ab, aq, aJ],
    });
var a0 = i(347481),
    a1 = i(533488),
    a2 = i(199966),
    a3 = i(963935);
function a6(e) {
    let { title: t } = e;
    return t;
}
function a4(e) {
    let { useTitle: t, settingKey: i, formatter: n, index: s } = e,
        l = t();
    return "string" == typeof l ? n({ title: l, index: s, key: i }) : l;
}
function a7(e) {
    let { setting: t, formatter: i, index: n } = e;
    return () => (0, p.jsx)(a4, { useTitle: t.useTitle, settingKey: t.key, formatter: i, index: n }, t.key);
}
function a8(e) {
    return e.type === a3.Z6.LIST;
}
function a5(e, t) {
    let { limit: i = 2, formatter: n = a6 } = t ?? {};
    ty()(i > 0, "[useSettingCollapsibleSubtitle] Limit must be greater than 0");
    let { visibleDirectory: s, accessibleDirectory: l } = (0, a2._)(),
        r = s.get(e) ?? l.get(e);
    ty()(
        null != r && (r.type === a3.Z6.ACCORDION || a8(r)),
        "[useSettingCollapsibleSubtitle] Node is not a collapsible settings node",
    );
    let a = a8(r) ? (r.collapseAfter ?? 0) : 0,
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
                return g.intl.format(g.t["3H9tCW"], { settingOneHook: a7({ setting: t[0], formatter: n, index: 0 }) });
            else if (2 === t.length)
                return g.intl.format(g.t.MWryo6, {
                    settingOneHook: a7({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: a7({ setting: t[1], formatter: n, index: 1 }),
                });
            else
                return g.intl.format(g.t.a00b5G, {
                    settingOneHook: a7({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: a7({ setting: t[1], formatter: n, index: 1 }),
                    settingThreeHook: a7({ setting: t[2], formatter: n, index: 2 }),
                });
        return 1 === s
            ? g.intl.format(g.t.O8vNbS, { settingOneHook: a7({ setting: t[0], formatter: n, index: 0 }) })
            : 2 === s
              ? g.intl.format(g.t["acXG/W"], {
                    settingOneHook: a7({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: a7({ setting: t[1], formatter: n, index: 1 }),
                })
              : g.intl.format(g.t["5+ldWc"], {
                    settingOneHook: a7({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: a7({ setting: t[1], formatter: n, index: 1 }),
                    settingThreeHook: a7({ setting: t[2], formatter: n, index: 2 }),
                });
    }, [i, a, o, n]);
}
let a9 = (0, o.zD)(u.X.VOICE_AUTOMATIC_GAIN_CONTROL_SETTING, {
        useTitle: () => g.intl.string(g.t.cUMdH0),
        useSubtitle: () => g.intl.string(g.t["6EjbvA"]),
        useValue: function () {
            return (0, O.bG)([lb.Ay], () => lb.Ay.getAutomaticGainControl());
        },
        setValue: function (e) {
            aI.A.setAutomaticGainControl(e, { page: q.liQ.USER_SETTINGS, section: q.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, O.bG)([lb.Ay, a0.A], () => {
                let e = lb.Ay.getInputDeviceId();
                return a0.A.hasAutomaticGainControl(e);
            });
        },
        usePredicate: function () {
            return (0, O.bG)([lb.Ay], () => lb.Ay.isAutomaticGainControlSupported() && lb.Ay.isInputProfileCustom());
        },
    }),
    oe = (0, o.sN)(u.X.VOICE_GLOBAL_ATTENUATION_SLIDER, {
        useTitle: () => g.intl.string(g.t.AlybXj),
        setValue: (e) =>
            aI.A.setAttenuation(e, lb.Ay.getAttenuateWhileSpeakingSelf(), lb.Ay.getAttenuateWhileSpeakingOthers()),
        minValue: 0,
        maxValue: 100,
        getInitialValue: () => lb.Ay.getAttenuation(),
    }),
    ot = (0, o.zD)(u.X.VOICE_GLOBAL_ATTENUATION_FOR_SELF_SETTING, {
        useTitle: () => g.intl.string(g.t["9dHxRY"]),
        useValue: () => (0, O.bG)([lb.Ay], () => lb.Ay.getAttenuateWhileSpeakingSelf()),
        setValue: (e) => aI.A.setAttenuation(lb.Ay.getAttenuation(), e, lb.Ay.getAttenuateWhileSpeakingOthers()),
    }),
    oi = (0, o.zD)(u.X.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
        useTitle: () => g.intl.string(g.t.SMt0Gr),
        useValue: () => (0, O.bG)([lb.Ay], () => lb.Ay.getAttenuateWhileSpeakingOthers()),
        setValue: (e) => aI.A.setAttenuation(lb.Ay.getAttenuation(), lb.Ay.getAttenuateWhileSpeakingSelf(), e),
    }),
    on = (0, o.FW)(u.X.VOICE_GLOBAL_ATTENUATION_FIELD_SET, {
        variant: "compact",
        useTitle: () => g.intl.string(g.t.oSdBvW),
        useSubtitle: () => g.intl.string(g.t["0A/8Rt"]),
        usePredicate: () => (0, O.bG)([lb.Ay], () => lb.Ay.supports(aS.O5.ATTENUATION)),
        buildLayout: () => [oe, ot, oi],
    });
var os = i(801644);
let ol = (0, o.zD)(u.X.VOICE_HARDWARE_MUTE_SILENCE_ALERT_SETTING, {
        useTitle: () => g.intl.string(g.t.pZ0vr4),
        useSubtitle: () => g.intl.string(g.t.tVbzoZ),
        useValue: function () {
            return (0, O.bG)([nT.Ay], () => !nT.Ay.disableHardwareMuteSilenceAlert);
        },
        setValue: function (e) {
            (0, aW.A)("hardware_mute_silence_alert_enabled", e, !nT.Ay.disableHardwareMuteSilenceAlert),
                sH.Ay.updatedUnsyncedSettings({ disableHardwareMuteSilenceAlert: !e });
        },
        usePredicate: function () {
            let { enableHardwareSilenceWarning: e } = os.A.useConfig({ location: "HardwareMuteSilenceAlertSetting" });
            return e;
        },
    }),
    or = (0, o.zD)(u.X.VOICE_BYPASS_SYSTEM_INPUT_PROCESSING_SETTING, {
        useTitle: () => g.intl.string(g.t.DFPXIG),
        useSubtitle: () => g.intl.string(g.t["UyRX+C"]),
        useValue: function () {
            return (0, O.bG)([lb.Ay], () => lb.Ay.getBypassSystemInputProcessing());
        },
        setValue: function (e) {
            aI.A.setBypassSystemInputProcessing(e);
        },
        usePredicate: function () {
            return (0, O.bG)([lb.Ay], () => lb.Ay.showBypassSystemInputProcessing() && lb.Ay.isInputProfileCustom());
        },
    }),
    oa = (0, o.zD)(u.X.VOICE_SWITCH_CHANNEL_ALERT_SETTING, {
        useTitle: () => g.intl.string(g.t.jrWHD3),
        useSubtitle: () => g.intl.string(g.t.YCCMkJ),
        useValue: function () {
            return (0, O.bG)([nT.Ay], () => !nT.Ay.disableVoiceChannelChangeAlert);
        },
        setValue: function (e) {
            (0, aW.A)("switch_channel_warning_enabled", e, !nT.Ay.disableVoiceChannelChangeAlert),
                sH.Ay.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !e });
        },
    }),
    oo = (0, o.zD)(u.X.ADVANCED_VOICE_ACTIVITY_PROCESSING_SETTING, {
        useTitle: () => g.intl.string(g.t.BbESsg),
        useSubtitle: () => g.intl.string(g.t.LoOB1F),
        useValue: function () {
            return (0, O.bG)([lb.Ay], () => {
                let { vadUseKrisp: e } = lb.Ay.getModeOptions();
                return e;
            });
        },
        setValue: function (e) {
            let t = lb.Ay.getMode();
            aI.A.setMode(t, { vadUseKrisp: e });
        },
        useDisabled: function () {
            return (0, O.bG)([lb.Ay], () => {
                let e = lb.Ay.getMode(),
                    t = lb.Ay.getModeOptions().autoThreshold;
                return e === q.TBI.VOICE_ACTIVITY && t;
            });
        },
        usePredicate: function () {
            return (0, O.bG)([lb.Ay], () => lb.Ay.isAdvancedVoiceActivitySupported() && lb.Ay.isInputProfileCustom());
        },
    }),
    ou = (0, o.Hn)(u.X.VOICE_AUDIO_SUBSYSTEM_SETTING, {
        useTitle: () => g.intl.string(g.t.wVBHr0),
        useValue: function () {
            return (0, O.bG)([lb.Ay], () => lb.Ay.getAudioSubsystem());
        },
        setValue: function (e) {
            aQ(g.intl.string(g.t.uY7AcQ), g.intl.string(g.t.gBqik6), () => aI.A.setAudioSubsystem(e));
        },
        useOptions: function () {
            let {
                legacyAudioSubsystemSupported: e,
                experimentalAudioSubsystemSupported: t,
                automaticAudioSubsystemSupported: i,
            } = (0, O.cf)([lb.Ay], () => ({
                legacyAudioSubsystemSupported: lb.Ay.supports(aS.O5.LEGACY_AUDIO_SUBSYSTEM),
                experimentalAudioSubsystemSupported: lb.Ay.supports(aS.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM),
                automaticAudioSubsystemSupported: lb.Ay.supports(aS.O5.AUTOMATIC_AUDIO_SUBSYSTEM),
            }));
            return N.useMemo(() => {
                let n;
                return (
                    (n = [{ id: aS.rB.STANDARD, value: aS.rB.STANDARD, label: g.intl.string(g.t.dqb2JZ) }]),
                    e && n.push({ id: aS.rB.LEGACY, value: aS.rB.LEGACY, label: g.intl.string(g.t["TYfH+5"]) }),
                    t &&
                        n.push({ id: aS.rB.EXPERIMENTAL, value: aS.rB.EXPERIMENTAL, label: g.intl.string(g.t.liQmtr) }),
                    i && n.push({ id: aS.rB.AUTOMATIC, value: aS.rB.AUTOMATIC, label: g.intl.string(g.t.qNgtO1) }),
                    n
                );
            }, [i, t, e]);
        },
        usePredicate: function () {
            return (0, O.bG)([lb.Ay], () => lb.Ay.shouldOfferManualSubsystemSelection());
        },
    }),
    od = (0, o.zD)(u.X.VOICE_QUALITY_OF_SERVICE_SETTING, {
        useTitle: () => g.intl.string(g.t.uancuJ),
        useSubtitle: () => g.intl.string(g.t.I1Eoqq),
        useValue: function () {
            return (0, O.bG)([lb.Ay], () => lb.Ay.getQoS());
        },
        setValue: function (e) {
            aI.A.setQoS(e);
        },
        usePredicate: function () {
            return (0, O.bG)([lb.Ay], () => lb.Ay.supports(aS.O5.QOS));
        },
    }),
    oc = (0, o.zD)(u.X.VOICE_SILENCE_WARNING_SETTING, {
        useTitle: () => g.intl.string(g.t["4rsOPQ"]),
        useSubtitle: () => g.intl.string(g.t.jtiiCw),
        useValue: function () {
            return (0, O.bG)([lb.Ay], () => lb.Ay.getEnableSilenceWarning());
        },
        setValue: function (e) {
            aI.A.setSilenceWarning(e);
        },
        usePredicate: function () {
            return ev.isPlatformEmbedded;
        },
    }),
    og = (0, o.bd)(u.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? g.intl.string(g.t.KHsSWK) : g.intl.string(g.t.PPDo5V);
        },
        useCollapsedSubtitle: () =>
            a5(u.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
                limit: (0, O.bG)([lb.Ay], () => lb.Ay.isInputProfileCustom()) ? 3 : 2,
            }),
        buildLayout: () => [a9, oo, or, oc, ol, oa, on, ou, od],
    }),
    om = (0, o.zD)(u.X.VOICE_ECHO_CANCELLATION_SETTING, {
        useTitle: () => g.intl.string(g.t.iWTwu6),
        useValue: function () {
            return (0, O.bG)([lb.Ay], () => lb.Ay.getEchoCancellation());
        },
        setValue: function (e) {
            aI.A.setEchoCancellation(e, { page: q.liQ.USER_SETTINGS, section: q.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, O.bG)([lb.Ay, a0.A], () => {
                let e = lb.Ay.getInputDeviceId();
                return a0.A.hasEchoCancellation(e);
            });
        },
        usePredicate: function () {
            return (0, O.bG)([lb.Ay], () => lb.Ay.isInputProfileCustom());
        },
    });
var oA = i(459838),
    oh = i(451988),
    oE = i(640940),
    oT = i(160671);
let ox = (0, sp.Ld)();
function oS(e) {
    let { isSpeaking: t, className: i, id: n, ariaDescribedBy: s, ariaLabelledBy: l, disabled: r } = e;
    return (0, p.jsx)("div", {
        role: "meter",
        className: ew()(oE.$I, i),
        id: n,
        "aria-describedby": s,
        "aria-labelledby": l,
        "aria-valuenow": t && !r ? 100 : 0,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuetext": t && !r ? g.intl.string(g.t.haLKZ0) : g.intl.string(g.t.X2hJL7),
        children: (0, p.jsx)("div", { className: ew()(oE.Jx, oE.NU, { [oE.zY]: t && !r, [oE.r9]: r }) }),
    });
}
function op(e) {
    let { volume: t, id: i, ariaDescribedBy: n, ariaLabelledBy: s, disabled: l } = e,
        { threshold: r, autoThreshold: a } = (0, O.cf)([lb.Ay], () => ({
            threshold: lb.Ay.getModeOptions().threshold,
            autoThreshold: lb.Ay.getModeOptions().autoThreshold,
        })),
        o = (0, O.bG)([lb.Ay], () => lb.Ay.getMode());
    return (0, p.jsx)("section", {
        className: ew()(oE.Mo, oE.jW),
        id: i,
        "aria-describedby": n,
        "aria-labelledby": s,
        children: (0, p.jsx)(i5.A, {
            initialValue: r + 100,
            onValueRender: (e) => `${(-((100 - e) * 1)).toFixed(0)}dB`,
            onValueChange: (e) => {
                var t;
                return (t = -((100 - e) * 1)), void aI.A.setMode(o, { threshold: t, autoThreshold: a });
            },
            barStyles: { background: w.A.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: w.A.unsafe_rawColors.YELLOW_300.css },
            "aria-labelledby": ox,
            disabled: l,
            children: (0, p.jsxs)("div", {
                className: ew()(oE.NU, oE.TL, oE.Jx, oT.bar),
                children: [
                    (0, p.jsx)("div", { className: ew()(oE.GS, oE.SH), style: { width: l ? 0 : t + 100 + "%" } }),
                    (0, p.jsx)("div", { className: "grow" }),
                ],
            }),
        }),
    });
}
let oN = (0, o.E2)(u.X.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useSearchTerms: () => [g.intl.string(g.t["sqUm+k"]), g.intl.string(g.t.I1Zuq0), g.intl.string(g.t.nuFtHH)],
    usePredicate: () => (0, O.bG)([lb.Ay], () => lb.Ay.isInputProfileCustom()),
    Component: function () {
        let { autoThreshold: e, disabled: t } = (0, O.cf)([lb.Ay], () => ({
                autoThreshold: lb.Ay.getModeOptions().autoThreshold,
                disabled: lb.Ay.getMode() !== aS.TB.VOICE_ACTIVITY,
            })),
            i = N.useCallback((e) => {
                let t = lb.Ay.getMode(),
                    { threshold: i } = lb.Ay.getModeOptions();
                aI.A.setMode(t, { autoThreshold: e, threshold: i });
            }, []),
            n = (0, O.bG)([lb.Ay], () => lb.Ay.supports(aS.O5.AUTOMATIC_VAD)),
            { volume: s, isSpeaking: l } = (function () {
                let [e, t] = N.useState(-100),
                    [i, n] = N.useState(!1);
                function s(e, i) {
                    t(e), n((i & aS.ME.VOICE) === aS.ME.VOICE);
                }
                return (
                    N.useEffect(() => {
                        let e = new oh.Ep();
                        return (
                            e.start(1e3, () => {
                                lb.Ay.getMediaEngine().on(oA.bg.VoiceActivity, s), e.stop();
                            }),
                            () => {
                                lb.Ay.getMediaEngine().removeListener(oA.bg.VoiceActivity, s), e.stop();
                            }
                        );
                    }, []),
                    { volume: e, isSpeaking: i }
                );
            })(),
            r = (0, O.bG)([lb.Ay], () => lb.Ay.isEnabled()),
            a = N.useMemo(
                () =>
                    !r &&
                    (0, p.jsx)("div", {
                        className: oE.B4,
                        children: (0, p.jsx)(y.w, {
                            type: "warning",
                            children: g.intl.format(g.t["O13I+O"], { onEnableClick: () => aI.A.enable(!0) }),
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
                      (0, p.jsx)(B.A, { tag: "legend", id: u, children: g.intl.string(g.t.GByLar) }),
                      (0, p.jsx)(B.A, { id: d, children: o }),
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
                                  ? (0, p.jsx)(oS, {
                                        isSpeaking: l,
                                        className: oE.UJ,
                                        ariaDescribedBy: d,
                                        ariaLabelledBy: u,
                                        disabled: t,
                                    })
                                  : (0, p.jsx)(op, { volume: s, ariaDescribedBy: d, ariaLabelledBy: u, disabled: t }),
                              a,
                          ],
                      }),
                  ],
              })
            : (0, p.jsxs)(R.B, {
                  direction: "vertical",
                  gap: 8,
                  children: [
                      (0, p.jsx)(sO.D, {
                          label: g.intl.string(g.t["sqUm+k"]),
                          description: o,
                          layout: "vertical",
                          children: (i) =>
                              e
                                  ? (0, p.jsx)(oS, {
                                        isSpeaking: l,
                                        className: oE.UJ,
                                        id: i.controlId,
                                        ariaDescribedBy: i.describedById,
                                        ariaLabelledBy: i.labelId,
                                        disabled: t,
                                    })
                                  : (0, p.jsx)(op, {
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
var of = i(366010);
let o_ = i(993830),
    oC = i(413142),
    oI = { page: q.liQ.USER_SETTINGS, section: q.JJy.SETTINGS_VOICE_AND_VIDEO };
function ob() {
    let e = (0, O.bG)([iu.A], () => (0, of.q)(iu.A.theme));
    return (0, p.jsx)("img", { src: e ? o_ : oC, width: 48, height: 32, alt: "" });
}
let ov = (0, o.E2)(u.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [g.intl.string(g.t.t8Qhib), g.intl.string(g.t.hmfkCi)],
    usePredicate: function () {
        return (0, O.bG)([lb.Ay], () => lb.Ay.isInputProfileCustom() && lb.Ay.isNoiseSuppressionSupported());
    },
    Component: function () {
        let e = N.useCallback((e) => {
                aI.A.setNoiseCancellation("KRISP" === e, oI), aI.A.setNoiseSuppression("STANDARD" === e, oI);
            }, []),
            {
                noiseCancellation: t,
                noiseSuppression: i,
                isNoiseSuppressionSupported: n,
                isNoiseCancellationSupported: s,
            } = (0, O.cf)([lb.Ay], () => ({
                noiseCancellation: lb.Ay.getNoiseCancellation(),
                noiseSuppression: lb.Ay.getNoiseSuppression(),
                isNoiseSuppressionSupported: lb.Ay.isNoiseSuppressionSupported(),
                isNoiseCancellationSupported: lb.Ay.isNoiseCancellationSupported(),
            })),
            l = N.useMemo(() => {
                let e = [];
                return (
                    s && e.push({ id: "krisp", label: g.intl.string(g.t.rdoNzt), value: "KRISP" }),
                    n && e.push({ id: "standard", label: g.intl.string(g.t.qXeYHw), value: "STANDARD" }),
                    e.push({ id: "disabled", label: g.intl.string(g.t.wkYAlz), value: "NONE" }),
                    e
                );
            }, [s, n]),
            r = s
                ? g.intl.format(g.t["1q5aTp"], { helpArticle: ta.A.getArticleURL(q.MVz.NOISE_SUPPRESSION) })
                : g.intl.string(g.t.OWKjw5);
        return (0, p.jsxs)(R.B, {
            direction: "vertical",
            gap: 0,
            children: [
                (0, p.jsx)(lx.l, {
                    label: g.intl.string(g.t.t8Qhib),
                    description: r,
                    layout: "horizontal",
                    value: t ? "KRISP" : i ? "STANDARD" : "NONE",
                    onSelectionChange: e,
                    options: l,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                s && (0, p.jsx)(ob, {}),
            ],
        });
    },
});
var oj = i(944993),
    oy = i(509381);
let oO = !se.Av;
function oR() {
    return (0, O.bG)([lb.Ay], () => lb.Ay.getMode() === aS.TB.PUSH_TO_TALK);
}
let oL = (0, o.zD)(u.X.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function () {
        return se.Av ? g.intl.string(g.t.tG4Np5) : g.intl.string(g.t.JMyQin);
    },
    useSubtitle: function () {
        let e = (0, O.bG)([lb.Ay], () => lb.Ay.getMode());
        return N.useMemo(() => {
            if (!se.Av && e === aS.TB.PUSH_TO_TALK)
                return g.intl.format(g.t["VHI4+Y"], { onDownloadClick: () => (0, oj._)("Help Text PTT") });
        }, [e]);
    },
    usePredicate: function () {
        return (0, O.bG)([lb.Ay], () => lb.Ay.getActiveInputProfile() !== oy.m.STUDIO);
    },
    useValue: function () {
        return (0, O.bG)([lb.Ay], () => lb.Ay.getMode() === aS.TB.PUSH_TO_TALK);
    },
    setValue: function (e) {
        var t, n;
        (t = e ? aS.TB.PUSH_TO_TALK : aS.TB.VOICE_ACTIVITY),
            (n = [eM.A.USER_SETTINGS_VOICE_AND_VIDEO]),
            t === aS.TB.PUSH_TO_TALK &&
                oO &&
                (0, _.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([i.e("31910"), i.e("10919")]).then(i.bind(i, 556506));
                    return (t) =>
                        (0, p.jsx)(e, {
                            title: g.intl.string(g.t.Kdt0Gb),
                            confirmText: g.intl.string(g.t["1WjMbC"]),
                            cancelText: g.intl.string(g.t.BddRzS),
                            onConfirm: () => (0, oj._)("PTT Limited Modal"),
                            body: g.intl.string(g.t.NIozvt),
                            ...t,
                        });
                }),
            aI.A.setMode(t, void 0, void 0, { analyticsLocations: n });
    },
    useSearchTerms: () => [g.intl.string(g.t["pS+K2L"]), g.intl.string(g.t.nuFtHH)],
});
var oD = i(285802);
let oP = (0, o.E2)(u.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t["pS+K2L"]), g.intl.string(g.t.nuFtHH)],
        usePredicate: oR,
        Component: function () {
            let e = (0, O.bG)([lb.Ay], () => {
                    let { shortcut: e } = lb.Ay.getModeOptions();
                    return e;
                }),
                t = g.intl.format(g.t.HVvn5T, { onClick: () => (0, ej.openUserSettings)(u.X.KEYBINDS_PANEL) });
            return (0, p.jsx)(sO.D, {
                label: g.intl.string(g.t["o+BJQR"]),
                description: t,
                layout: "horizontal-responsive",
                children: (0, p.jsx)("div", {
                    className: oD.e,
                    children: (0, p.jsx)(tR.A, {
                        defaultValue: e,
                        onChange: (e) => aI.A.setMode(q.TBI.PUSH_TO_TALK, { shortcut: e }),
                    }),
                }),
            });
        },
    }),
    oG = (0, o.sN)(u.X.VOICE_PUSH_TO_TALK_RELEASE_DELAY_SETTING, {
        useTitle: () => g.intl.string(g.t.GCNMM8),
        useSearchTerms: () => [g.intl.string(g.t["pS+K2L"]), g.intl.string(g.t.nuFtHH)],
        setValue: function (e) {
            aI.A.setMode(q.TBI.PUSH_TO_TALK, { delay: e });
        },
        minValue: 0,
        maxValue: q.IjB,
        getInitialValue: function () {
            let { delay: e } = lb.Ay.getModeOptions();
            return e;
        },
        onValueRender: function (e) {
            return e >= 1e3 ? ((e /= 1e3), `${e.toFixed(2)}s`) : `${e.toFixed(0)}\u00A0ms`;
        },
        usePredicate: oR,
    }),
    oU = (0, o.Qx)(u.X.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => g.intl.string(g.t.LM3U3k),
        usePredicate: function () {
            let { enabledInputProfiles: e } = (0, a1._)({ location: "SettingsRendererConfig" });
            return e.length > 0;
        },
        useSearchTerms: () => [g.intl.string(g.t.nuFtHH), g.intl.string(g.t.VZPR0R), g.intl.string(g.t.cjPbpT)],
        useValue: function () {
            return (0, O.bG)([lb.Ay], () => lb.Ay.getActiveInputProfile() ?? oy.m.CUSTOM);
        },
        setValue: function (e) {
            let t = [eM.A.USER_SETTINGS_VOICE_AND_VIDEO];
            aI.A.setActiveInputProfile(e, { analyticsLocations: t });
        },
        useOptions: function () {
            let { enabledInputProfiles: e } = (0, a1.d)({ location: "InputProfileCategory" });
            return [
                { value: oy.m.VOICE_ISOLATION, name: g.intl.string(g.t.cjPbpT), desc: g.intl.string(g.t.CzhvnE) },
                { value: oy.m.STUDIO, name: g.intl.string(g.t.VZPR0R), desc: g.intl.string(g.t.ZaJksS) },
                { value: oy.m.CUSTOM, name: g.intl.string(g.t["N/PQjv"]), desc: g.intl.string(g.t.SnBmuY) },
            ].filter((t) => {
                let { value: i } = t;
                return e.includes(i);
            });
        },
    }),
    oM = (0, o.zZ)(u.X.VOICE_INPUT_PROFILE_CATEGORY, {
        useInlineNotice: function () {
            let e = (0, O.bG)([a0.A, lb.Ay], () => {
                let e = lb.Ay.getInputDeviceId();
                return (
                    (a0.A.hasEchoCancellation(e) || a0.A.hasNoiseSuppression(e) || a0.A.hasAutomaticGainControl(e)) &&
                    lb.Ay.isInputProfileCustom()
                );
            });
            return N.useMemo(() => {
                if (e)
                    return {
                        type: ef.lT.INLINE_NOTICE,
                        noticeType: "info",
                        useText: () => g.intl.string(g.t["/Whuzi"]),
                    };
            }, [e]);
        },
        buildLayout: () => [oU, oN, ov, om, oL, oP, oG, og],
    });
var oV = i(403581),
    ok = i(983851),
    ow = i(687021),
    oF = i(128450),
    oB = i(796774),
    oz = i(209932),
    oY = i(813564),
    oX = i(984813),
    oH = i(22231),
    oK = i(927578),
    oW = i(792348),
    oZ = i(674168),
    oq = i(334348),
    oQ = i(805945),
    oJ = i(902460);
function o$(e) {
    let { onSelect: t } = e,
        [i, n] = N.useState(!1),
        s = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
        l = oK.Ay.canUseCustomCallSounds(s),
        r = N.useRef(null);
    function a(e) {
        l && (n(!1), t?.(e));
    }
    return (0, p.jsx)(P.Y, {
        targetElementRef: r,
        shouldShow: i,
        position: "left",
        onRequestClose: () => n(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, p.jsx)(iO.l, {
                children: (0, p.jsx)(oq.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: a,
                    gridNotice: l ? null : (0, p.jsx)(oZ.m, {}),
                    analyticsSource: "call sounds edit setting",
                }),
            });
        },
        children: (e) =>
            (0, p.jsx)(oQ.dT, {
                ...e,
                ref: r,
                onClick: () => {
                    n(!i);
                },
                text: g.intl.string(g.t.uOe0Az),
                children: (0, p.jsx)(oH.R, { size: "md", color: "currentColor", className: oJ.Wo }),
            }),
    });
}
function o0(e) {
    let { sound: t } = e,
        { previewSound: i } = (0, oW.A)(t, null),
        n =
            0 === (0, oY.wH)()
                ? g.intl.string(g.t.OASXjt)
                : g.intl.formatToPlainString(g.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name });
    return (0, p.jsx)(oQ.dT, {
        onClick: i,
        text: n,
        children: (0, p.jsx)(ok.H, { size: "md", color: "currentColor", className: oJ.wg }),
    });
}
function o1(e) {
    let { sound: t, isGlobal: i, onSelect: n } = e,
        s = null != t,
        l = t?.emojiId,
        r = t?.emojiName,
        a = s && (null != r || null != l);
    return (0, p.jsxs)("div", {
        className: oJ.D6,
        children: [
            (0, p.jsxs)("div", {
                className: oJ.kL,
                children: [
                    a && (0, p.jsx)(so.A, { emojiId: l, emojiName: r, className: oJ.Zg }),
                    (0, p.jsx)(V.E, {
                        variant: "text-md/normal",
                        color: "text-strong",
                        className: oJ.dj,
                        children:
                            null == t
                                ? g.intl.string(g.t.PoWNfe)
                                : i
                                  ? g.intl.format(g.t.B6HU6O, {
                                        soundName: t.name,
                                        subtextHook: (e) =>
                                            (0, p.jsx)(V.E, {
                                                variant: "text-xs/medium",
                                                color: "text-default",
                                                tag: "span",
                                                children: e,
                                            }),
                                    })
                                  : t.name,
                    }),
                    s
                        ? (0, p.jsx)(o0, { sound: t })
                        : (0, p.jsx)(ok.H, { size: "md", color: "currentColor", className: oJ.Gk }),
                ],
            }),
            (0, p.jsxs)("div", {
                className: oJ.kL,
                children: [
                    (0, p.jsx)(o$, { onSelect: n }),
                    s &&
                        !i &&
                        (0, p.jsx)(oQ.dT, {
                            onClick: () => n(null),
                            text: g.intl.string(g.t.jmtcGA),
                            children: (0, p.jsx)(lp.u, {
                                size: "md",
                                color: w.A.unsafe_rawColors.RED_400.css,
                                className: oJ.Wo,
                            }),
                        }),
                ],
            }),
        ],
    });
}
var o2 = i(617617);
i(980504);
var o3 = i(811249);
function o6(e) {
    return (0, O.bG)([oz.A], () => {
        if (null == e) return null;
        let { guildId: t, soundId: i } = e;
        return oz.A.getSound("0" === t ? "0" : t, i);
    });
}
function o4(e) {
    let { guildId: t } = e,
        i = (0, O.bG)([o2.A], () => o2.A.settings.guilds?.guilds?.[t]?.joinSound),
        n = o6(i);
    if (null == i || null == n) return null;
    let { emojiId: s, emojiName: l } = n,
        r = null != s || null != l;
    return (0, p.jsxs)("div", {
        className: o3.Io,
        children: [
            r
                ? (0, p.jsx)(so.A, { emojiId: s, emojiName: l, className: o3.nW })
                : (0, p.jsx)(ok.H, { size: "md", color: "currentColor", className: o3.nW }),
            (0, p.jsx)(V.E, { className: o3.dK, variant: "text-xs/medium", children: n.name }),
        ],
    });
}
let o7 = (0, o.E2)(u.X.ENTRANCE_SOUNDS_SETTING, {
    useSearchTerms: () => [g.intl.string(g.t.nzUc3B)],
    Component: function () {
        let { analyticsLocations: e } = (0, nU.Ay)(),
            [t, i] = N.useState("0"),
            n = (0, oX.mz)(t),
            s = o6(n),
            l = n?.type === oX.PP.GLOBAL,
            r = (0, O.bG)([oz.A], () => oz.A.hasFetchedAllSounds()) && null != n && null == s;
        N.useEffect(() => {
            r && (0, oY.ND)({ location: e });
        }, [r, e]),
            N.useEffect(() => {
                (0, oB.E7)();
            }, []);
        let a = N.useCallback((e, t) => {
            let { inDropdown: i } = t;
            return null == e ? null : i ? (0, p.jsx)(o4, { guildId: e.value }) : null;
        }, []);
        return (0, p.jsxs)(ia.n, {
            label: g.intl.string(g.t.nzUc3B),
            description: g.intl.format(g.t.u9RWmv, { helpdeskArticle: ta.A.getArticleURL(q.MVz.SOUNDBOARD) }),
            children: [
                (0, p.jsx)(ow.A, {
                    guildId: t,
                    className: o3.Dt,
                    globalOption: { label: g.intl.string(g.t["CpEUP/"]), value: "0" },
                    onChange: (e) => {
                        i(null == e ? "0" : e.id);
                    },
                    renderOptionSuffix: a,
                    hideDivider: !0,
                }),
                (0, p.jsxs)(oF.A, {
                    title: g.intl.format(g.t.I2TsYN, {
                        nitroWheelHook: () => (0, p.jsx)(oV.t, { size: "md", color: "currentColor", className: o3.ax }),
                    }),
                    children: [
                        (0, p.jsx)(o1, {
                            sound: s,
                            isGlobal: l,
                            onSelect: (i) => {
                                null == i ? (0, oY.Dv)(t, e) : (0, oY.un)(t, i, e);
                            },
                        }),
                        r &&
                            (0, p.jsx)(tr.p, {
                                className: o3.lm,
                                messageType: tr.Y.WARNING,
                                children: g.intl.string(g.t.WkPsFR),
                            }),
                    ],
                }),
            ],
        });
    },
});
var o8 = i(824744);
let o5 = (0, o.sN)(u.X.SOUNDBOARD_VOLUME_SETTING, {
    useTitle: () => g.intl.string(g.t.kbFsAD),
    useSubtitle: () => g.intl.format(g.t.BPbGq7, { helpCenterArticle: ta.A.getArticleURL(q.MVz.SOUNDBOARD) }),
    setValue: function (e) {
        let t = [eM.A.USER_SETTINGS_VOICE_AND_VIDEO],
            i = (0, o8.w)(e);
        (0, oB.iy)(i, t);
    },
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let e = (0, oY.wH)();
        return (0, o8.M)(e);
    },
    onValueRender: function (e) {
        return `${e.toFixed(0)}%`;
    },
});
var o9 = i(864145);
let ue = (0, o.sN)(u.X.SOUNDMOJI_VOLUME_SETTING, {
        useTitle: () => g.intl.string(g.t["2JbvKw"]),
        useSubtitle: () => g.intl.string(g.t.INenzY),
        setValue: function (e) {
            let t = (0, o8.w)(e);
            c.HO.updateSetting(t);
        },
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = c.HO.getSetting();
            return (0, o8.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        usePredicate: function () {
            return (0, o9.X)({ location: "SoundmojiVolumeSetting" });
        },
    }),
    ut = (0, o.zZ)(u.X.SOUNDBOARD_CATEGORY, {
        useTitle: () => g.intl.string(g.t.ABjMWI),
        buildLayout: () => [o5, ue, o7],
    });
var ui = i(803224),
    un = i(552122);
let us = (0, o.E2)(u.X.SOUNDS_HOLIDAY_NOTICE, {
        useSearchTerms: () => [g.intl.string(g.t.fgSHf8)],
        usePredicate: () => null != un.A.useHolidaySoundpack(),
        Component: () =>
            (0, p.jsx)(V.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: g.intl.format(g.t.Eup6Wv, {
                    onClick: () => (0, ej.openUserSettings)(u.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                }),
            }),
    }),
    ul = (0, o.AK)(u.X.VOICE_AND_VIDEO_TO_NOTIFICATION_SOUNDS_NAVIGATOR, {
        useSubtitle: () => g.intl.string(g.t.eyGEE4),
        useSearchTerms: () => [g.intl.string(g.t.eyGEE4)],
        destinationKey: u.X.NOTIFICATIONS_SOUNDS_CATEGORY,
    }),
    ur = (0, o.gN)(u.X.VOICE_AND_VIDEO_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [ul] });
var ua = i(264686);
let uo = (0, nN.D)(() => ({ currentPlayingSound: null }));
function uu() {
    let e = uo.getField("currentPlayingSound");
    e?.stop(), uo.setState({ currentPlayingSound: null });
}
function ud(e) {
    let t = uo.getField("currentPlayingSound");
    t?.stop();
    let i = (0, rS.Ak)(e);
    uo.setState({ currentPlayingSound: i });
}
function uc(e) {
    return (0, o.zD)(`${u.X.SOUNDS_LIST_ITEM_PREFIX}${e.sound}`, {
        useTitle: e.useTitle,
        useSubtitle: () => g.intl.format(g.t.OOiGCM, { onClick: () => ud(e.sound) }),
        useValue: () => {
            let t = (0, O.bG)([ui.A], () => ui.A.isSoundDisabled(e.sound)),
                i = e.useDisabled?.();
            return !t && !i;
        },
        setValue: (t) => {
            let i = ui.A.getDisabledSounds().filter((t) => t !== e.sound);
            t || i.push(e.sound), ua.default.setDisabledSounds(i);
        },
        useDisabled: () => {
            let t = e.useDisabled?.(),
                i = (0, O.bG)([ui.A], () => ui.A.getDisableAllSounds());
            return t || i;
        },
        useDisabledMessage: e.useDisabledMessage,
    });
}
let ug = [
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
    um = (0, o.D1)(u.X.VOICE_AND_VIDEO_SOUNDS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (e, t) =>
            e
                ? g.intl.formatToPlainString(g.t["0JYT98"], { count: t })
                : g.intl.formatToPlainString(g.t.ji1uNt, { count: t }),
        useCollapsedSubtitle: () => a5(u.X.VOICE_AND_VIDEO_SOUNDS_LIST, { limit: 3 }),
        initialize: function () {
            return () => {
                uu();
            };
        },
        buildLayout: () => ug.map((e) => uc(e)),
    }),
    uA = (0, o.zZ)(u.X.SOUNDS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.MKWyKc),
        useInlineNotice: function () {
            let e = (0, O.bG)([ui.A], () => ui.A.getDisableAllSounds());
            return N.useMemo(() => {
                if (e)
                    return {
                        type: ef.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        useText: () =>
                            g.intl.format(g.t.fRvixS, {
                                onClick: () => (0, ej.openUserSettings)(u.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                            }),
                    };
            }, [e]);
        },
        buildLayout: () => [um, us, ur],
    }),
    uh = (0, o.zD)(u.X.STREAMING_SHOW_STREAM_PREVIEWS, {
        useTitle: () => g.intl.string(g.t.e3Zz3F),
        useSubtitle: () => g.intl.string(g.t.RztTjP),
        useValue: function () {
            return !c.uh.useSetting();
        },
        setValue: function (e) {
            (0, aW.A)("stream_previews_disabled", !e, c.uh.getSetting(), [eM.A.USER_SETTINGS_VOICE_AND_VIDEO]),
                c.uh.updateSetting(!e);
        },
    }),
    uE = (0, o.zD)(u.X.STREAMING_ADVANCED_SCREENSHARE, {
        useTitle: () => g.intl.string(g.t.GmWk2E),
        useSearchTerms: () => [g.intl.string(g.t["Fj/xn1"])],
        useSubtitle: () => g.intl.string(g.t["Fj/xn1"]),
        useValue: function () {
            return (0, O.bG)([lb.Ay], () => lb.Ay.getVideoHook());
        },
        setValue: aI.A.setVideoHook,
        usePredicate: function () {
            return (0, O.bG)([lb.Ay], () => lb.Ay.supportsVideoHook());
        },
    }),
    uT = (0, o.zD)(u.X.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
        useTitle: () => g.intl.string(g.t["4I0qzZ"]),
        useValue: function () {
            return (0, O.bG)([lb.Ay], () => lb.Ay.getExperimentalSoundshare());
        },
        setValue: aI.A.setExperimentalSoundshare,
        usePredicate: function () {
            return (0, O.bG)([lb.Ay], () => {
                let e = lb.Ay.supportsExperimentalSoundshare(),
                    t = lb.Ay.supportsHookSoundshare();
                return e && t;
            });
        },
    }),
    ux = (0, o.zD)(u.X.STREAMING_STREAM_ATTENUATION, {
        useTitle: () => g.intl.string(g.t["/jwMtn"]),
        useSubtitle: () => g.intl.string(g.t.zlA23F),
        useValue: function () {
            return (0, O.bG)([lb.Ay], () => lb.Ay.getSidechainCompression());
        },
        setValue: function (e) {
            let t = [eM.A.USER_SETTINGS_VOICE_AND_VIDEO];
            aI.A.setSidechainCompression(e, { analyticsLocations: t });
        },
        usePredicate: function () {
            return lb.Ay.supports(aS.O5.SIDECHAIN_COMPRESSION);
        },
    }),
    uS = (0, o.sN)(u.X.STREAMING_STREAM_ATTENUATION_STRENGTH, {
        useTitle: () => g.intl.string(g.t.fhEzfj),
        setValue: function (e) {
            let t = [eM.A.USER_SETTINGS_VOICE_AND_VIDEO];
            aI.A.setSidechainCompressionStrength(e, { analyticsLocations: t });
        },
        minValue: 1,
        maxValue: 100,
        getInitialValue: lb.Ay.getSidechainCompressionStrength,
        usePredicate: function () {
            return lb.Ay.supports(aS.O5.SIDECHAIN_COMPRESSION);
        },
    }),
    up = (0, o.zD)(u.X.STREAMING_OS_MENU_SCREEN_CAPTURE, {
        useTitle: () => g.intl.string(g.t.lt8rRx),
        useSubtitle: () => g.intl.string(g.t.ie1mgY),
        useValue: function () {
            return (0, O.bG)([lb.Ay], () => lb.Ay.getUseSystemScreensharePicker());
        },
        setValue: function (e) {
            (0, se.cX)() && e
                ? (0, st.A)({
                      title: g.intl.string(g.t["9jf31O"]),
                      subtitle: g.intl.string(g.t.uBd6JW),
                      variant: "primary",
                      onConfirm: () => {
                          aI.A.setUseSystemScreensharePicker(e), s3.A.app.relaunch();
                      },
                      confirmText: g.intl.string(g.t.BddRzS),
                  })
                : aI.A.setUseSystemScreensharePicker(e);
        },
        usePredicate: function () {
            return (0, O.bG)([lb.Ay], () => lb.Ay.supportsSystemScreensharePicker() && (0, se.cX)());
        },
    }),
    uN = (0, o.bd)(u.X.STREAMING_ADVANCED_ACCORDION, {
        useTitle: (e) => (e ? g.intl.string(g.t.qrMyvm) : g.intl.string(g.t.LEtTNl)),
        useCollapsedSubtitle: () => a5(u.X.STREAMING_ADVANCED_ACCORDION),
        buildLayout: () => [ux, uS, up, uT, uE],
    }),
    uf = (0, o.zZ)(u.X.STREAMING_CATEGORY, { useTitle: () => g.intl.string(g.t.KDdjou), buildLayout: () => [uh, uN] }),
    u_ = (0, o.E2)(u.X.VOICE_MICROPHONE_INPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            return (0, p.jsx)(ah.U, {
                label: g.intl.string(g.t.UTM8VP),
                deviceType: aS.oh.AUDIO_INPUT,
                location: "UserSettingsVoiceVideo",
                hideDeviceTypeIcon: !0,
            });
        },
    }),
    uC = (0, o.E2)(u.X.VOICE_SPEAKER_OUTPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            return (0, p.jsx)(ah.U, {
                label: g.intl.string(g.t.xuYQ0n),
                deviceType: aS.oh.AUDIO_OUTPUT,
                location: "UserSettingsDevices",
                hideDeviceTypeIcon: !0,
            });
        },
    }),
    uI = (0, o.zC)(u.X.VOICE_INPUT_OUTPUT_DEVICE_SPLIT, { buildLayout: () => [u_, uC] }),
    ub = (0, o.sN)(u.X.VOICE_INPUT_VOLUME_SETTING, {
        useTitle: () => g.intl.string(g.t.Rtsr6w),
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = lb.Ay.getInputVolume();
            return (0, o8.M)(e);
        },
        asValueChanges: function (e) {
            let t = [eM.A.USER_SETTINGS_VOICE_AND_VIDEO],
                i = (0, o8.w)(e);
            aI.A.setInputVolume(i, { analyticsLocations: t });
        },
    }),
    uv = (0, o.sN)(u.X.VOICE_OUTPUT_VOLUME_SETTING, {
        useTitle: () => g.intl.string(g.t.aUJ062),
        minValue: 0,
        maxValue: 200,
        getInitialValue: function () {
            let e = lb.Ay.getOutputVolume();
            return (0, o8.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        asValueChanges: function (e) {
            let t = [eM.A.USER_SETTINGS_VOICE_AND_VIDEO],
                i = (0, o8.w)(e);
            aI.A.setOutputVolume(i, { analyticsLocations: t });
        },
    }),
    uj = (0, o.zC)(u.X.VOICE_INPUT_OUTPUT_VOLUME_SPLIT, { buildLayout: () => [ub, uv] });
var uy = i(702841),
    uO = i(349288),
    uR = i(152567),
    uL = i(644426);
let uD = `${ta.A.getArticleURL(q.MVz.VOICE_VIDEO_TROUBLESHOOTING)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm`,
    uP = (0, o.E2)(u.X.VOICE_MICROPHONE_TEST_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t.nuFtHH)],
        usePredicate: function () {
            return (0, uy.bG)([lb.Ay], () => lb.Ay.supports(aS.O5.LOOPBACK));
        },
        Component: function () {
            return (0, uy.bG)([lb.Ay], () => lb.Ay.supports(aS.O5.LOOPBACK))
                ? (0, p.jsx)(uR.A, {
                      size: "md",
                      notchBackground: uR.V.GRAY,
                      captionVoice: g.intl.string(g.t.bp3JOV),
                      captionNoVoice: (0, p.jsxs)(p.Fragment, {
                          children: [
                              (0, p.jsx)(V.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-default",
                                  children: g.intl.string(g.t.bgn75v),
                              }),
                              g.intl.string(g.t["MA+OZh"]),
                              (0, p.jsx)(uO.Anchor, {
                                  className: uL.X,
                                  href: ta.A.getArticleURL(q.MVz.NO_INPUT_DETECTED),
                                  children: g.intl.string(g.t.RYKKox),
                              }),
                          ],
                      }),
                      helpText: g.intl.format(g.t["V+B3FH"], { guideURL: uD }),
                      buttonTest: g.intl.string(g.t.gyljWE),
                      buttonStop: g.intl.string(g.t.I6OnJ3),
                      buttonVariant: "primary",
                      location: { page: q.liQ.USER_SETTINGS, section: q.JJy.SETTINGS_VOICE_AND_VIDEO },
                  })
                : null;
        },
    }),
    uG = ev.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];
function uU(e) {
    let { inputAndOutputAreBluetooth: t, canPromptSystemServiceInstallForVoice: i } = e;
    return (0, p.jsxs)(R.B, {
        children: [
            i && (0, p.jsx)(lO, { sourcePage: "voice" }),
            t && (0, p.jsx)(sn.A, { look: sn.k.WARNING, children: g.intl.string(g.t.Ioz3gx) }),
        ],
    });
}
let uM = (0, o.zZ)(u.X.VOICE_CATEGORY, {
        useTitle: () => g.intl.string(g.t.K3lovD),
        useSearchTerms: () => [
            g.intl.string(g.t.hHMYbb),
            g.intl.string(g.t.nuFtHH),
            g.intl.string(g.t.dl18zb),
            g.intl.string(g.t["3182VD"]),
            g.intl.string(g.t["DGq/PR"]),
            g.intl.string(g.t.eATD2B),
            g.intl.string(g.t.Rtsr6w),
            g.intl.string(g.t.aUJ062),
        ],
        useInlineNotice: function () {
            let e = ly("voice"),
                t = (0, aE.x5)(aS.oh.AUDIO_INPUT),
                i = (0, aE.x5)(aS.oh.AUDIO_OUTPUT),
                n = N.useMemo(() => {
                    let e = uG.some((e) => t?.hardwareId?.startsWith(e)),
                        n = uG.some((e) => i?.hardwareId?.startsWith(e));
                    return e && n && t?.containerId != null && t.containerId === i?.containerId;
                }, [t, i]);
            return N.useMemo(
                () =>
                    e.canPrompt || n
                        ? {
                              type: ef.lT.STRONGLY_DISCOURAGED_CUSTOM,
                              notice: () =>
                                  (0, p.jsx)(uU, {
                                      inputAndOutputAreBluetooth: n,
                                      canPromptSystemServiceInstallForVoice: e.canPrompt,
                                  }),
                          }
                        : null,
                [e.canPrompt, n],
            );
        },
        buildLayout: () => [uI, uj, uP],
    }),
    uV = (0, o.t_)(u.X.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => g.intl.string(g.t.B1fFpf),
        buildLayout: () => [uM, oM, aC, uf, uA, ut, a$],
    }),
    uk = (0, o.i4)(u.X.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.B1fFpf),
        usePredicate: () => lb.Ay.isSupported(),
        icon: al.c,
        useMenu: ar.A,
        buildLayout: () => [uV],
    }),
    uw = (0, o.zZ)(u.X.WINDOWS_CATEGORY, {
        buildLayout: () => [rr, r7, ra, rc],
        initialize: () => {
            rl();
        },
    }),
    uF = (0, o.t_)(u.X.WINDOWS_PANEL, { useTitle: () => g.intl.string(g.t.ZkDZov), buildLayout: () => [uw] }),
    uB = (0, o.i4)(u.X.WINDOWS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.ZkDZov),
        icon: e2.k,
        usePredicate: () => ev.isPlatformEmbedded && (0, ev.isWindows)(),
        buildLayout: () => [uF],
    }),
    uz = (0, o.WI)(u.X.APP_SECTION, {
        useTitle: () => g.intl.string(g.t.gcyH1J),
        buildLayout: function () {
            let e = (0, iz.SB)("AppSection_buildLayout");
            return [uk, lE, n1, r4, e ? as : l9, rn, e ? null : uB, e ? null : rA].filter(t6.Vq);
        },
    });
var uY = i(360669),
    uX = i(974544),
    uH = i(194261),
    uK = i(289873),
    uW = i(465323),
    uZ = i(391048),
    uq = i(753390),
    uQ = i(99696),
    uJ = i(202613),
    u$ = i(615405),
    u0 = i(580630),
    u1 = i(83617),
    u2 = i(935208),
    u3 = i(607399),
    u6 = i(150934),
    u4 = i(256006),
    u7 = i(198970),
    u8 = i(71532);
let u5 = /[^0-9/]/g,
    u9 = /[^0-9]/g;
class de extends N.PureComponent {
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
                ((n = (i = e.replace(u5, "").split("/"))[0]),
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
            ? (u = u.replace(u9, ""))
            : u === r && e.includes("/") && !r.includes("/") && (u += "/"),
            u.length > e.length && (d += u.length - e.length),
            (this.selectionStart = d),
            null != a && a(u, t);
    };
    render() {
        return (0, p.jsx)(lL.k, {
            ...this.props,
            inputMode: "numeric",
            onChange: this.handleChange,
            inputRef: this.setRef,
        });
    }
}
var dt = i(832208),
    di = i(536439);
let dn = [
        {
            fields: [
                {
                    expirationDate: {
                        name: "expirationDate",
                        id: (0, sp.Ld)(),
                        title: () => g.intl.string(g.t["CeBa/4"]),
                        autoComplete: "cc-exp",
                        placeholder: () => g.intl.string(g.t.xeEWQ6),
                        pattern: "\\d*",
                        getClassNameForLayout: () => di.ep,
                        renderInput: (e) => (0, p.jsx)(de, { ...e }),
                    },
                }.expirationDate,
            ],
        },
    ],
    ds = function (e) {
        let { onCardInfoChange: t, className: i, expirationDate: n, error: s } = e,
            [l, r] = N.useState(!1),
            [a, o] = N.useState(null),
            [u, d] = N.useState(n);
        return (
            N.useEffect(() => {
                t({ expirationDate: u }, null === a);
            }, [u, t, a]),
            (0, p.jsx)(dt.A, {
                className: i,
                form: dn,
                values: { expirationDate: u },
                errors: null != a ? { expirationDate: a } : {},
                formError: s,
                onFieldChange: (e) => {
                    l || "" === e || r(!0),
                        (l && "" === e) || !(0, u8.So)(e) ? o(g.intl.string(g.t["9/zZdl"])) : o(null),
                        d(e);
                },
            })
        );
    };
var dl = i(219887),
    dr = i(276589);
let da = "isDefault";
class du extends N.PureComponent {
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
            expiresMonth: t instanceof uJ.YS ? t.expiresMonth : void 0,
            expiresYear: t instanceof uJ.YS ? t.expiresYear : void 0,
            billingAddressValid: !1,
            isDefault: i,
            expirationValid: !0,
            dirtyFields: {},
        };
    }
    componentWillUnmount() {
        n6.h.wait(() => {
            (0, uq.ey)(), (0, uq.tc)();
        });
    }
    handleSubmit = (e) => {
        if ((e.preventDefault(), e.stopPropagation(), 0 === Object.values(this.state.dirtyFields).filter(t6.Vq).length))
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
                ? (0, p.jsx)("div", {
                      className: dr.zc,
                      children: (0, p.jsx)(y.w, { type: "critical", children: t.message }),
                  })
                : null
            : (0, p.jsx)("div", {
                  className: dr.zc,
                  children: (0, p.jsx)(y.w, { type: "critical", children: e.message }),
              });
    }
    renderBillingAddressSection() {
        let { billingAddress: e } = this.state,
            { updateError: t, paymentSource: i } = this.props,
            n = (0, u4.g)(i);
        return (0, p.jsxs)("div", {
            className: dr.yV,
            children: [
                (0, p.jsx)(V.E, {
                    className: dr.bV,
                    variant: "text-sm/normal",
                    children: g.intl.string(g.t["50Auo2"]),
                }),
                (0, p.jsx)(u7.Ay, {
                    ...e,
                    mode: u7.Ay.Modes.EDIT,
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
            className: dr.yV,
            children: [
                (0, p.jsx)(V.E, { className: dr.bV, variant: "text-sm/normal", children: g.intl.string(g.t.Fo2YP7) }),
                (0, p.jsx)(ds, {
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
        return (0, p.jsx)("div", {
            className: dr.AU,
            children: (0, p.jsxs)(R.B, {
                direction: "horizontal",
                justify: "space-between",
                children: [
                    (0, p.jsx)(aR.e, {
                        children: (0, p.jsxs)("div", {
                            className: dr.lH,
                            children: [
                                i
                                    ? (0, p.jsx)(e0.m, {
                                          text: g.intl.string(g.t["v6/z28"]),
                                          children: (0, p.jsx)("div", { "aria-hidden": !0, className: dr.dm }),
                                      })
                                    : null,
                                (0, p.jsx)(eh.$, {
                                    type: "button",
                                    disabled: i || e,
                                    loading: t,
                                    onClick: this.handleDelete,
                                    variant: "critical-secondary",
                                    size: u3.Fr ? "sm" : "md",
                                    text: u3.Fr ? g.intl.string(g.t.oyYWHE) : g.intl.string(g.t.yk5qfb),
                                }),
                            ],
                        }),
                    }),
                    (0, p.jsxs)(aR.e, {
                        children: [
                            (0, p.jsx)(eh.$, {
                                type: "button",
                                disabled: e || t,
                                onClick: this.handleCancel,
                                variant: "secondary",
                                size: u3.Fr ? "sm" : "md",
                                text: g.intl.string(g.t["ETE/oC"]),
                            }),
                            (0, p.jsx)(eh.$, {
                                loading: e,
                                disabled: !n || t || !s,
                                type: "submit",
                                variant: "active",
                                size: u3.Fr ? "sm" : "md",
                                text: g.intl.string(g.t["R3BPH+"]),
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
            r = e instanceof uJ.SJ;
        return (0, p.jsx)(er.Z, {
            editable: !0,
            className: ew()(dr.Nr, n),
            children: (0, p.jsxs)("form", {
                onSubmit: this.handleSubmit,
                noValidate: !0,
                children: [
                    this.renderError(),
                    (0, p.jsxs)("div", {
                        className: dr.__invalid_paymentSection,
                        children: [
                            (0, p.jsx)(dl.A, {
                                paymentSource: e,
                                isDefault: t,
                                isForSubscription: s,
                                locale: i,
                                showLabels: !0,
                                showPaymentSourceIcon: !0,
                            }),
                            e.invalid
                                ? (0, p.jsx)("div", { className: dr.Um, children: g.intl.string(g.t["3R0U0b"]) })
                                : null,
                            (0, p.jsx)("div", {
                                className: dr.Sv,
                                children: r
                                    ? g.intl.format(g.t.w9WkBl, { paypalURL: "https://www.paypal.com" })
                                    : g.intl.string(g.t.VXndyr),
                            }),
                        ],
                    }),
                    this.renderCardExpirationSection(),
                    this.renderBillingAddressSection(),
                    (0, p.jsx)("div", {
                        className: dr.D5,
                        children: (0, p.jsx)(u6.S, {
                            value: da,
                            checked: l,
                            onChange: (e) => this.handleFieldChange(e, da),
                            label: g.intl.string(g.t.nag9Og),
                            labelType: "secondary",
                        }),
                    }),
                    (0, p.jsx)(eE.c, {}),
                    this.renderActions(),
                ],
            }),
        });
    }
}
let dd = O.Ay.connectStores([u$.A], () => ({ updateError: u$.A.editSourceError, removeError: u$.A.removeSourceError }))(
    du,
);
var dc = i(776409),
    dg = i(95322);
class dm extends N.PureComponent {
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
            ? (0, p.jsx)(dd, {
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
            : (0, p.jsxs)(p.Fragment, {
                  children: [
                      n ? null : (0, p.jsx)(eE.c, { className: dg.__invalid_sourceDivider }),
                      (0, p.jsxs)("div", {
                          className: dg.Yb,
                          children: [
                              (0, p.jsx)(dl.A, {
                                  paymentSource: e,
                                  isDefault: t,
                                  isForSubscription: s,
                                  locale: l,
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
let dA = N.memo(function (e) {
    let { paymentSource: t, hideDivider: i, isForSubscription: n, locale: s, onRedeemClick: l } = e,
        [r, a] = N.useState(null),
        o = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.storeCountry?.country ?? null),
        u = (0, O.bG)([u$.A], () => u$.A.ipCountryCode),
        d = N.useMemo(() => (0, uW.TW)(`-${o ?? u ?? "US"}`), [o, u]);
    return (
        N.useEffect(() => {
            void 0 === t
                ? a({ amount: 0, currency: d })
                : uq.YP(t.id).then((e) => {
                      a(e);
                  });
        }, [t, d]),
        (0, p.jsxs)(p.Fragment, {
            children: [
                i ? null : (0, p.jsx)(eE.c, { className: dg.__invalid_sourceDivider }),
                (0, p.jsxs)("div", {
                    className: dg.Yb,
                    children: [
                        void 0 !== t
                            ? (0, p.jsx)(dl.A, {
                                  paymentSource: t,
                                  isDefault: !1,
                                  isForSubscription: n,
                                  locale: s,
                                  showSubtext: !1,
                                  showLabels: !1,
                                  showPaymentSourceIcon: !0,
                              })
                            : (0, p.jsx)(V.E, {
                                  variant: "text-sm/medium",
                                  children: g.intl.string(dc.default["/FQWfA"]),
                              }),
                        (0, p.jsxs)("div", {
                            className: dg.zy,
                            children: [
                                (0, p.jsx)("div", {
                                    className: dg.Tq,
                                    children:
                                        null == r
                                            ? (0, p.jsx)(uK.y, { type: uK.y.Type.SPINNING_CIRCLE })
                                            : (0, p.jsx)(V.E, {
                                                  variant: "text-sm/medium",
                                                  children: (() => {
                                                      let { amount: e, currency: t } = r ?? {},
                                                          i = t ?? d,
                                                          n = String(i).toUpperCase(),
                                                          s = (0, u0.$g)(e ?? 0, i, {
                                                              currencyDisplay: "narrowSymbol",
                                                          });
                                                      return `${n} ${s}`;
                                                  })(),
                                              }),
                                }),
                                (0, p.jsx)(eh.$, {
                                    variant: "secondary",
                                    onClick: l,
                                    size: "sm",
                                    text: g.intl.string(dc.default.iBFPMf),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
class dh extends N.PureComponent {
    state = { editingPayment: null };
    handleEditClick = async (e) => {
        try {
            await uq.Gr(e), this.setState({ editingPayment: e });
        } catch (e) {}
    };
    handleCancel = () => {
        this.setState({ editingPayment: null });
    };
    handleDelete = async (e) => {
        try {
            await uq.JQ(e), this.setState({ editingPayment: null });
        } catch (e) {}
    };
    handleSubmit = async (e, t) => {
        if (null != e)
            try {
                await uq.Ps(e, t), this.setState({ editingPayment: null });
            } catch (e) {}
    };
    handlePaymentSourceAdded = async (e) => {
        await (0, u1.c_)(e.id);
    };
    handleAddPaymentMethod = () => {
        (0, _.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(i.bind(i, 362111));
                return (t) => (0, p.jsx)(e, { ...t, onAddPaymentSource: this.handlePaymentSourceAdded });
            },
            {
                onCloseCallback: () => {
                    (0, uZ.ET)();
                },
                onCloseRequest: q.tEg,
            },
        );
    };
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, p.jsxs)("div", {
            className: dg.qr,
            children: [
                0 === Object.keys(e).length
                    ? (0, p.jsxs)("div", {
                          className: dg.z8,
                          children: [
                              (0, p.jsx)(V.E, { variant: "text-sm/normal", children: g.intl.string(g.t.aRHpAB) }),
                              (0, p.jsx)("div", { className: dg.Sv, children: g.intl.string(g.t.o9bOIl) }),
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
                locale: s,
                removing: l,
                submitting: r,
                premiumSubscriptionPaymentSourceId: a,
                showGiftCards: o,
            } = this.props,
            u = eR()
                .values(n)
                .sort((e, t) => (e.id === i ? -1 : t.id === i ? 1 : u2.default.compare(e.id, t.id))),
            d = u.filter((e) => !(e instanceof uJ.LQ)),
            c = u.filter((e) => e instanceof uJ.LQ),
            m = this.state.editingPayment,
            A = d.findIndex((e) => e.id === m),
            h = d.map((e, t) =>
                (0, p.jsx)(
                    dm,
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
                              dA,
                              {
                                  paymentSource: e,
                                  hideDivider: 0 === d.length || A === d.length - 1,
                                  isForSubscription: e.id === a,
                                  locale: s,
                                  onRedeemClick: () =>
                                      (0, uQ.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page" }),
                              },
                              e.id,
                          ),
                      )
                    : (0, p.jsx)(dA, {
                          hideDivider: 0 === d.length || A === d.length - 1,
                          isForSubscription: !1,
                          locale: s,
                          onRedeemClick: () =>
                              (0, uQ.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page" }),
                      })),
            (0, p.jsxs)(p.Fragment, {
                children: [
                    t
                        ? (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsxs)(eA.D, {
                                      variant: "heading-lg/semibold",
                                      children: [
                                          (0, p.jsx)(uH.X, { size: "sm", className: dg.hz }),
                                          " ",
                                          g.intl.string(g.t.W26xGQ),
                                      ],
                                  }),
                                  (0, p.jsx)(V.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      children: g.intl.string(g.t.h6V3uK),
                                  }),
                              ],
                          })
                        : null,
                    h,
                    o && e,
                    A !== d.length - 1 || (o && c.length > 0) ? (0, p.jsx)(eE.c, {}) : null,
                    this.renderFooter(),
                ],
            })
        );
    }
}
var dE = i(459357),
    dT = i(295405),
    dx = i(166403),
    dS = i(773669),
    dp = i(243156);
let dN = (0, o.E2)(u.X.BILLING_PAYMENT_METHODS, {
        Component: function (e) {
            let { showHeader: t = !1 } = e,
                i = (0, O.bG)([u$.A], () => u$.A.isSyncing),
                n = (0, O.bG)([dT.A], () => dT.A.paymentSources),
                s = (0, O.bG)([dT.A], () => dT.A.defaultPaymentSourceId),
                l = (0, O.bG)([dS.default], () => dS.default.locale),
                r = (0, O.bG)([dx.A], () => dx.A.getPremiumTypeSubscription()),
                a = (0, O.bG)([u$.A], () => u$.A.isRemovingPaymentSource),
                o = (0, O.bG)([u$.A], () => u$.A.isUpdatingPaymentSource),
                { enabled: u } = (0, dE.c)({ location: "UserSettingsBilling" });
            return (N.useEffect(() => {
                uq.$o(), uq.hP();
            }, []),
            i && 0 === Object.keys(n).length)
                ? (0, p.jsx)("div", { className: dp.o, children: (0, p.jsx)(uK.y, {}) })
                : (0, p.jsx)(dh, {
                      showHeader: t,
                      paymentSources: n,
                      defaultPaymentSourceId: s,
                      premiumSubscriptionPaymentSourceId:
                          null != r && r.status !== q.Dmq.CANCELED ? r.paymentSourceId : null,
                      locale: l,
                      removing: a,
                      submitting: o,
                      showGiftCards: u,
                  });
        },
        useSearchTerms: () => [g.intl.string(g.t.W26xGQ)],
    }),
    df = (0, o.zZ)(u.X.BILLING_PAYMENT_METHODS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.W26xGQ),
        icon: uH.X,
        useSubtitle: () => g.intl.string(g.t.h6V3uK),
        buildLayout: () => [dN],
    });
var d_ = i(546605),
    dC = i(500380),
    dI = i(423764),
    db = i(223784);
function dv(e) {
    let { country: t, countryName: i, ...n } = e,
        { onClose: s } = n,
        l = N.useCallback(
            () => (null == t ? null : (0, p.jsx)("img", { alt: "", className: db.b, src: (0, dC.t)(t) })),
            [t],
        ),
        r = null != i && null != t ? { text: i, leadingIcon: l } : (i ?? void 0),
        a = N.useCallback(() => {
            window.open("https://support.discord.com/hc/articles/39799791912087", "_blank"), s();
        }, [s]);
    return (0, p.jsx)(lR.Modal, {
        ...n,
        title: g.intl.string(g.t.PuB1W7),
        subtitle: r,
        actions: [{ text: g.intl.string(g.t.PuB1W7), onClick: a, variant: "primary" }],
        children: (0, p.jsx)(V.E, {
            variant: "text-md/normal",
            color: "text-muted",
            children: g.intl.string(g.t["21skUa"]),
        }),
    });
}
var dj = i(949677);
let dy = (0, o.E2)(u.X.BILLING_STORE_COUNTRY, {
        Component: function () {
            let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.storeCountry),
                t = N.useCallback(() => {
                    var t;
                    let i;
                    (i = null != (t = e?.country ?? null) ? (0, dI.Gw)(t) : null),
                        (0, _.openModal)((e) => (0, p.jsx)(dv, { ...e, country: t, countryName: i }));
                }, [e?.country]);
            if (null == e) return null;
            let i = (0, dI.Gw)(e.country),
                n = null != e.setAt ? g.intl.format(g.t.ZkWzXG, { date: new Date(e.setAt) }) : null;
            return (0, p.jsxs)("div", {
                className: dj.OO,
                children: [
                    (0, p.jsxs)("div", {
                        className: dj.wI,
                        children: [
                            (0, p.jsx)("div", {
                                className: dj.Gh,
                                children: (0, p.jsx)("img", { alt: "", className: dj.MY, src: (0, dC.t)(e.country) }),
                            }),
                            (0, p.jsxs)("div", {
                                className: dj.d0,
                                children: [
                                    (0, p.jsx)(V.E, { variant: "text-md/semibold", children: i }),
                                    null != n
                                        ? (0, p.jsx)(V.E, {
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
    dO = (0, o.zZ)(u.X.BILLING_STORE_COUNTRY_CATEGORY, {
        usePredicate: () => {
            let e, t;
            return (
                (e = (0, d_.vg)("StoreCountrySetting")),
                (t = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.storeCountry != null)),
                e && t
            );
        },
        useTitle: () => g.intl.string(g.t["3pIjBH"]),
        buildLayout: () => [dy],
    });
var dR = i(549363),
    dL = i(545075);
let dD = (0, o.E2)(u.X.BILLING_TRANSACTION_HISTORY, {
        Component: function () {
            let e = (0, O.bG)([dS.default], () => dS.default.locale);
            return (0, p.jsxs)(p.Fragment, { children: [(0, p.jsx)(dL.kb, {}), (0, p.jsx)(dR.A, { locale: e })] });
        },
        useSearchTerms: () => [g.intl.string(g.t.obLrcK)],
    }),
    dP = (0, o.zZ)(u.X.BILLING_TRANSACTION_HISTORY_CATEGORY, {
        useTitle: () => g.intl.string(g.t.obLrcK),
        buildLayout: () => [dD],
    }),
    dG = (0, o.t_)(u.X.BILLING_PANEL, {
        useTitle: () => g.intl.string(g.t.oeUm2s),
        buildLayout: () => [df, dO, dP],
        useObscuredNotice: uX.L,
    }),
    dU = (0, o.i4)(u.X.BILLING_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.oeUm2s),
        icon: uY.B,
        buildLayout: () => [dG],
    });
var dM = i(597770),
    dV = i(35587),
    dk = i(86379),
    dw = i(532446),
    dF = i(869038),
    dB = i(499454),
    dz = i(45938);
class dY extends N.Component {
    state = { codeInput: "", submitting: !1, hasError: !1, isPromoCode: !1 };
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
        } = this.props;
        return { ...e, object: q.ZSU.BUTTON_CTA };
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
                    await (0, uQ.Qp)(i),
                        (0, uQ.HF)({ initialCode: i, withRedemptionSuccessModal: !0 }),
                        this.setState({ codeInput: "" });
                    return;
                } catch {}
            let e = (0, dz.Vd)(t);
            if (null == e) return void this.setState({ hasError: !0 });
            let n = await dF.A.resolveGiftCode(e);
            if (null != n && null != n.giftCode.promotion)
                throw (this.setState({ isPromoCode: !0 }), Error("Cannnot redeem promotion code as gift"));
            Y.default.track(q.HAw.OPEN_MODAL, {
                type: "gift_accept",
                location: {
                    ...this.analyticsLocation,
                    section: q.JJy.LIBRARY_INVENTORY_CODE_REDEMPTION,
                    object: q.ZSU.BUTTON_CTA,
                },
            }),
                (0, dB.h)({ processedCode: e }),
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
        return (0, p.jsx)(ia.n, {
            label: g.intl.string(g.t["il+VCo"]),
            children: (0, p.jsx)("form", {
                onSubmit: this.handleSubmit,
                children: (0, p.jsxs)(dw.M, {
                    children: [
                        (0, p.jsx)(lL.k, {
                            label: g.intl.string(g.t.SeKIoS),
                            type: e ? "password" : "text",
                            value: t,
                            onChange: this.handleChange,
                            placeholder: "WUMP-AAAAA-BBBBB-CCCCC",
                            error: !s && n ? g.intl.string(g.t.Y11a2u) : null,
                            helperText: s
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
let dX = (0, o.E2)(u.X.GIFT_CODE_REDEMPTION_SETTING, {
    Component: function () {
        let { enabled: e } = (0, dE.c)({ location: "UserSettingsBilling" }),
            t = N.useContext(Y.AnalyticsContext),
            i = (0, O.bG)([e_.A], () => e_.A.enabled);
        return (0, p.jsx)(dY, { analyticsContext: t, obscureInput: i, acceptGiftCardRedemption: e });
    },
    usePredicate: () => !(0, dk.Hp)(),
    useSearchTerms: () => [g.intl.string(g.t["jcSP+g"]), g.intl.string(g.t["il+VCo"])],
});
var dH = i(725570),
    dK = i(707554),
    dW = i(339048),
    dZ = i(736653),
    dq = i(46054);
let dQ = rj().duration(30, "days");
var dJ = i(264779),
    d$ = i(416052),
    d0 = i(961302);
function d1(e) {
    let { onClose: t, transitionState: i } = e;
    return (0, p.jsx)(lR.Modal, {
        title: "",
        size: "md",
        input: (0, p.jsx)("div", { className: d0.aR }),
        onClose: async () => await t(),
        actions: [{ text: g.intl.string(g.t.cpT0Cq), variant: "primary", onClick: t }],
        transitionState: i,
        children: (0, p.jsxs)("div", {
            className: d0.t4,
            children: [
                (0, p.jsx)(eA.D, { variant: "heading-xl/semibold", children: g.intl.string(g.t.iufib1) }),
                (0, p.jsx)(V.E, { variant: "text-md/normal", className: d0.G3, children: g.intl.string(g.t.eAn6z2) }),
            ],
        }),
    });
}
let d2 = function (e) {
    let { onClose: t, onClaim: i, code: n, outboundPromotion: s, transitionState: l } = e,
        [r, a] = N.useState(null),
        o = (0, sp.GV)(),
        { analyticsLocations: u } = (0, nU.Ay)(eM.A.USER_SETTINGS_GIFT_INVENTORY);
    return (N.useEffect(() => {
        null == n &&
            (0, dJ.kd)({
                promotionId: s.id,
                promotionTitle: s.outboundTitle,
                partnerId: s.partnerId,
                analyticsLocations: u,
            })
                .then((e) => i(e))
                .catch((e) => a(e?.body?.code));
    }, [n, s.id, s.outboundTitle, s.partnerId, i, u]),
    null != r)
        ? (0, p.jsx)(d1, { onClose: t, transitionState: l })
        : null == n
          ? (0, p.jsx)(uK.y, { className: d0.Lq })
          : (0, p.jsx)(lR.Modal, {
                title: "",
                size: "md",
                onClose: async () => await t(),
                input: (0, p.jsxs)("div", {
                    className: d0.N1,
                    children: [
                        (0, p.jsx)("div", { className: d0.Qw }),
                        (0, p.jsx)(eA.D, { variant: "heading-xl/semibold", children: g.intl.string(g.t["23BfZh"]) }),
                        (0, p.jsx)(V.E, {
                            variant: "text-md/normal",
                            className: d0.G3,
                            children: s.outboundRedemptionModalBody,
                        }),
                    ],
                }),
                actions: [
                    { text: g.intl.string(g.t.TulDPl), variant: "secondary", onClick: async () => await t() },
                    {
                        text: g.intl.string(g.t["+zx47d"]),
                        variant: "primary",
                        onClick: () => {
                            let e = (0, dJ.kc)(n, s);
                            window.open(e, "_blank");
                        },
                    },
                ],
                transitionState: l,
                "aria-label": o,
                children: (0, p.jsxs)("div", {
                    children: [
                        (0, p.jsx)(eE.c, { className: d0.M5 }),
                        (0, p.jsx)(sO.D, {
                            label: g.intl.string(g.t.s9LFQh),
                            helperText: g.intl.string(g.t["F+nFTZ"]),
                            children: (0, p.jsx)(d$.A, {
                                value: n,
                                buttonColor: ay.$n.Colors.BRAND,
                                buttonLook: ay.$n.Looks.FILLED,
                                delay: 1e3,
                            }),
                        }),
                    ],
                }),
            });
};
var d3 = i(725807),
    d6 = i(212168),
    d4 = i(469778),
    d7 = i(109802),
    d8 = i(503787);
let d5 = (e) => {
        let { children: t, className: i, splashArtURL: n } = e;
        return (0, p.jsxs)(lU.A, {
            className: ew()(d8.wx, i),
            align: lU.A.Align.CENTER,
            children: [
                (0, p.jsx)("div", { className: d8.Bn, style: null != n ? { backgroundImage: `url(${n})` } : void 0 }),
                t,
            ],
        });
    },
    d9 = (e) => {
        let { children: t, className: i } = e;
        return (0, p.jsx)("div", { className: ew()(d8.rf, i), children: t });
    };
class ce extends N.PureComponent {
    static Header = d5;
    static Body = d9;
    render() {
        let { children: e, className: t, onMouseEnter: i, onMouseLeave: n } = this.props;
        return (0, p.jsx)("div", { className: ew()(d8.Nr, t), onMouseEnter: i, onMouseLeave: n, children: e });
    }
}
var ct = i(75825),
    ci = i(871123),
    cn = i(366523),
    cs = i(495544),
    cl = i(30793),
    cr = i(97352),
    ca = i(67480),
    co = i(147925),
    cu = i(957565),
    cd = i(615396),
    cc = i(233385);
class cg extends N.PureComponent {
    _copyModeTimeout = new oh.Ep();
    state = { copyMode: d7.q.DEFAULT };
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case d7.q.SUCCESS:
                return g.intl.string(g.t.XVvPjU);
            case d7.q.ERROR:
                return g.intl.string(g.t.i4GM3L);
            default:
                return g.intl.string(g.t.OpuAlK);
        }
    }
    handleRevoke(e) {
        dF.A.revokeGiftCode(e);
    }
    handleCopy = (e) => {
        let { giftCode: t, sku: i } = this.props;
        (0, dz.AK)(t, i),
            (0, cu.C)(
                e,
                () => this.setState({ copyMode: d7.q.SUCCESS }),
                () => this.setState({ copyMode: d7.q.ERROR }),
            ),
            this._copyModeTimeout.start(1e3, () => {
                this.setState({ copyMode: d7.q.DEFAULT });
            });
    };
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: i } = this.state;
        return (0, p.jsxs)(lU.A, {
            direction: lU.A.Direction.VERTICAL,
            className: cc.Gj,
            children: [
                (0, p.jsx)(d7.e, {
                    className: cc.ph,
                    value: (0, dz.Zq)(t.code),
                    text: this.copyButtonText,
                    mode: i,
                    supportsCopy: cu.p5,
                    hideMessage: e ? g.intl.string(g.t["0RLn47"]) : null,
                    onCopy: this.handleCopy,
                    buttonColor: ay.XD.BRAND,
                    buttonLook: ay.pR.FILLED,
                }),
                (0, p.jsxs)("div", {
                    className: cc.KB,
                    children: [
                        null != t.expiresAt
                            ? (0, p.jsxs)(N.Fragment, {
                                  children: [
                                      g.intl.format(g.t.ltVZcJ, { hours: t.expiresAt.diff(rj()(), "h") }),
                                      " \u2014\xa0",
                                  ],
                              })
                            : null,
                        (0, p.jsx)(M.D, {
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
class cm extends N.PureComponent {
    _loadedAt = null;
    state = { isOpen: !1, isCreating: !1, isHovered: !1 };
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    handleGenerateGiftCode = async (e) => {
        e.stopPropagation();
        let { skuId: t, subscriptionPlanId: i, giftStyle: n } = this.props;
        this.setState({ isCreating: !0 }),
            await dF.A.createGiftCode(t, i, n),
            this.setState({ isCreating: !1, isOpen: !0 });
    };
    handleToggleOpen = () => {
        let { skuId: e, subscriptionPlanId: t, loadedAt: i } = this.props,
            n = !this.state.isOpen;
        (null == i || null == this._loadedAt || i < this._loadedAt) && n && dF.A.fetchUserGiftCodesForSKU(e, t),
            this.setState({ isOpen: !this.state.isOpen });
    };
    renderGiftIcon() {
        let { sku: e, giftStyle: t, application: i } = this.props;
        return (0, ci.bF)(e)
            ? (0, p.jsx)(cn.e, { shape: "square", sku: e, containerClassName: cc.ez })
            : null != t
              ? (0, p.jsx)(ct.A, { giftStyle: t, className: cc.ez, shouldAnimate: this.state.isHovered })
              : (0, p.jsx)(e8.A, { game: i, size: e8.M.MEDIUM, skuId: e.id });
    }
    renderSubtitle() {
        let { sku: e, entitlements: t, application: i } = this.props;
        return (0, ci.bF)(e)
            ? (0, p.jsxs)("div", {
                  className: ew()(cc.Oc, cc.ic),
                  children: [
                      (0, p.jsx)(e8.A, { game: i, size: e8.M.XSMALL, skuId: e.id, className: cc._u }),
                      g.intl.format(g.t["6plpZi"], { applicationName: i.name, copies: t.length }),
                  ],
              })
            : (0, p.jsx)("div", { className: cc.Oc, children: g.intl.format(g.t.zMcvcA, { copies: t.length }) });
    }
    renderTitle() {
        let e,
            { sku: t, subscriptionPlan: i, giftCodeBatchId: n } = this.props;
        return (
            (e =
                n === sf.FB
                    ? g.intl.string(g.t.odsU6W)
                    : n === sf.Bu && null != i
                      ? g.intl.formatToPlainString(i.interval === sf.WT.MONTH ? g.t.uZjpiJ : g.t.bJW1EA, {
                            skuName: t.name,
                            intervalCount: i.intervalCount,
                        })
                      : null == i
                        ? t.name
                        : g.intl.formatToPlainString(i.interval === sf.WT.MONTH ? g.t.rCJvqo : g.t.Vd3Iu8, {
                              skuName: t.name,
                              intervalCount: i.intervalCount,
                          })),
            (0, p.jsx)("div", { className: cc.mO, children: e })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, p.jsxs)(lU.A, {
            justify: lU.A.Justify.BETWEEN,
            align: lU.A.Align.CENTER,
            className: cc.pe,
            children: [
                (0, p.jsx)(V.E, { variant: "text-md/normal", children: g.intl.string(g.t.lELyPj) }),
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
                sku: s,
                isFetching: l,
                hideCodes: r,
            } = this.props,
            { isOpen: a } = this.state;
        return (0, p.jsxs)(ce, {
            className: n,
            children: [
                (0, p.jsx)(M.D, {
                    onClick: this.handleToggleOpen,
                    className: cc.Nr,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, p.jsx)(ce.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, p.jsxs)("div", {
                            className: cc.MY,
                            children: [
                                (0, p.jsxs)(lU.A, {
                                    align: lU.A.Align.CENTER,
                                    children: [
                                        this.renderGiftIcon(),
                                        (0, p.jsxs)("div", {
                                            className: cc.TK,
                                            children: [this.renderTitle(), this.renderSubtitle()],
                                        }),
                                    ],
                                }),
                                (0, p.jsx)(co.A, {
                                    direction: a ? co.A.Directions.UP : co.A.Directions.DOWN,
                                    className: cc.eO,
                                }),
                            ],
                        }),
                    }),
                }),
                a
                    ? (0, p.jsx)(ce.Body, {
                          children: l
                              ? (0, p.jsx)(uK.y, { className: cc.u1 })
                              : (0, p.jsxs)(N.Fragment, {
                                    children: [
                                        i.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        i.map((e) => (0, p.jsx)(cg, { giftCode: e, sku: s, hideCode: r }, e.code)),
                                    ],
                                }),
                      })
                    : null,
            ],
        });
    }
}
let cA = O.Ay.connectStores([ca.A, e_.A, cl.A, eW.A, cr.A, cs.default], (e) => {
    let { skuId: t, subscriptionPlanId: i, giftStyle: n } = e,
        s = ca.A.get(t);
    if (null == s) throw Error("SKU was unavailable while rendering gift.");
    let l = cl.A.getForGifterSKUAndPlan(cs.default.getId(), t, i)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === n);
    return {
        sku: s,
        hideCodes: e_.A.enabled,
        isFetching: cl.A.getUserGiftCodesFetchingForSKUAndPlan(t, i),
        loadedAt: cl.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, i),
        application: eW.A.getApplication(s.applicationId),
        subscriptionPlan: null != i ? (0, cd.c9)(i) : null,
        giftCodes: l,
    };
})(cm);
var ch = i(479913);
function cE(e) {
    let t,
        { outboundPromotion: i, code: n, addClaimedOutboundPromotionCode: s, disabled: l } = e,
        [r, a] = N.useState(!1),
        [o, u] = N.useState(!1),
        d = () => a((e) => !e),
        c = (0, dZ.Ay)(),
        m = (0, dJ.WD)(i.id, c),
        A = null != n,
        h = N.useMemo(
            () =>
                (0, ry.i$)(
                    A
                        ? null != i.outboundRedemptionEndDate
                            ? rj()(i.outboundRedemptionEndDate)
                            : rj()(i.endDate).add(dQ)
                        : rj()(i.endDate),
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
        { outboundTitle: x, outboundTermsAndConditions: S } = i;
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsxs)("div", {
                className: ew()(ch.uI, ch.AX),
                children: [
                    (0, p.jsxs)("div", {
                        className: ch.gE,
                        children: [
                            (0, p.jsxs)("div", {
                                className: ch.At,
                                children: [
                                    (0, p.jsx)("div", {
                                        className: ch.$G,
                                        children: (0, p.jsx)("img", { alt: "", src: m, className: ch.IJ }),
                                    }),
                                    (0, p.jsxs)("div", {
                                        children: [
                                            (0, p.jsx)(eA.D, { variant: "heading-md/semibold", children: x }),
                                            (0, p.jsx)(V.E, {
                                                variant: "text-sm/normal",
                                                color: "text-default",
                                                className: ch.__invalid_promotionText,
                                                children: t,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            !l && (0, p.jsx)(eh.$, { text: E, onClick: () => u(!0), disabled: l, size: "sm" }),
                        ],
                    }),
                    r &&
                        (0, p.jsx)(V.E, {
                            className: ch.GL,
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: dq.A.parse(S, !1, { allowLinks: !0 }),
                        }),
                ],
            }),
            o &&
                (0, p.jsx)(dH.aF, {
                    renderModal: (e) => (0, p.jsx)(d2, { ...e, onClose: T, onClaim: s, code: n, outboundPromotion: i }),
                    onCloseRequest: T,
                }),
        ],
    });
}
let cT = (0, o.E2)(u.X.GIFT_INVENTORY_LIST_SETTING, {
        Component: function () {
            let e = (0, O.yK)([d4.A], () => d4.A.getGiftable()),
                [t, i] = eR().partition(e, (e) => {
                    let { giftCodeBatchId: t } = e;
                    return null == t;
                }),
                n = (0, O.bG)([t3.default], () =>
                    oK.Ay.isPremiumExactly(t3.default.getCurrentUser(), sf.PremiumTypes.TIER_2),
                ),
                s = (0, O.bG)([t3.default], () => !oK.Ay.isPremium(t3.default.getCurrentUser())),
                l = eR().groupBy(t, (e) => (0, dz.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
                [r, a] = N.useState(!1);
            N.useEffect(() => {
                n6.h.wait(() => {
                    (0, dW.XJ)().then(() => a(!0));
                });
            }, []);
            let {
                    promotionsLoaded: o,
                    activeOutboundPromotions: d,
                    claimedEndedOutboundPromotions: c,
                    claimedOutboundPromotionCodeMap: m,
                    addClaimedOutboundPromotionCode: A,
                } = (0, dV.y7)(),
                h = d.length + c.length > 0,
                E = s && h;
            return r && o
                ? (0, p.jsxs)(p.Fragment, {
                      children: [
                          (function () {
                              let e = i.find((e) => e.giftCodeBatchId === sf.FB && !e.consumed),
                                  t = i.filter((e) => e.giftCodeBatchId === sf.Bu && !e.consumed) ?? [],
                                  [s, l] = eR().partition(t, (e) => {
                                      let { subscriptionPlanId: t } = e;
                                      return t === sf.gD.PREMIUM_YEAR_TIER_2;
                                  }),
                                  r = (0, p.jsx)(eA.D, {
                                      variant: "heading-md/semibold",
                                      children: h ? g.intl.string(g.t.wFsj3B) : void 0,
                                  }),
                                  a = E
                                      ? (0, p.jsxs)("div", {
                                            className: ch.uo,
                                            children: [
                                                (0, p.jsx)(oV.t, {
                                                    size: "md",
                                                    color: w.A.colors
                                                        .REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                                                    className: ch.PC,
                                                }),
                                                (0, p.jsx)(V.E, {
                                                    variant: "text-md/normal",
                                                    className: ch.Qw,
                                                    children: g.intl.format(g.t.G4fwxK, {
                                                        onClick: () => {
                                                            (0, sT.default)(), (0, sR.pX)(q.BVt.APPLICATION_STORE);
                                                        },
                                                    }),
                                                }),
                                                (0, p.jsx)(d3.A, {
                                                    showGradient: !0,
                                                    className: ch.aA,
                                                    subscriptionTier: sf.pe.TIER_2,
                                                    textOptions: { textOverride: g.intl.string(g.t.mr4K7D) },
                                                }),
                                            ],
                                        })
                                      : null;
                              return (0, p.jsxs)("div", {
                                  children: [
                                      r,
                                      h ? (0, p.jsx)(eE.c, { className: ch.yF }) : null,
                                      (0, p.jsx)(d6.A, {
                                          className: ch.Yj,
                                          isShown: E,
                                          type: d6.i.PREMIUM,
                                          hasBackground: !0,
                                          children: (0, p.jsxs)("div", {
                                              className: ew()({ [ch.sW]: !E }),
                                              children: [
                                                  a,
                                                  c.map((e) => {
                                                      let { code: t, promotion: i } = e;
                                                      return (0, p.jsx)(
                                                          cE,
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
                                                          cE,
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
                                                            cA,
                                                            {
                                                                className: ch.uI,
                                                                skuId: e.skuId,
                                                                subscriptionPlanId: e.subscriptionPlanId,
                                                                entitlements: [e],
                                                                giftCodeBatchId: sf.FB,
                                                            },
                                                            (0, dz.Kx)(e.skuId, e.subscriptionPlanId),
                                                        )
                                                      : null,
                                                  s.length > 0
                                                      ? (0, p.jsx)(
                                                            cA,
                                                            {
                                                                className: ch.uI,
                                                                skuId: s[0].skuId,
                                                                subscriptionPlanId: s[0].subscriptionPlanId,
                                                                entitlements: s,
                                                                giftCodeBatchId: sf.Bu,
                                                            },
                                                            (0, dz.Kx)(s[0].skuId, s[0].subscriptionPlanId),
                                                        )
                                                      : null,
                                                  l.length > 0
                                                      ? (0, p.jsx)(
                                                            cA,
                                                            {
                                                                className: ch.uI,
                                                                skuId: l[0].skuId,
                                                                subscriptionPlanId: l[0].subscriptionPlanId,
                                                                entitlements: l,
                                                                giftCodeBatchId: sf.Bu,
                                                            },
                                                            (0, dz.Kx)(l[0].skuId, l[0].subscriptionPlanId),
                                                        )
                                                      : null,
                                              ],
                                          }),
                                      }),
                                  ],
                              });
                          })(),
                          (0, p.jsx)("div", {
                              className: ch.sW,
                              children: (0, p.jsxs)(dK.F, {
                                  component: (0, p.jsx)(eA.D, {
                                      variant: "heading-md/semibold",
                                      children: g.intl.string(g.t["9KeUbY"]),
                                  }),
                                  children: [
                                      (0, p.jsx)(eE.c, { className: ch.yF }),
                                      0 === Object.keys(l).length
                                          ? (0, p.jsxs)("div", {
                                                className: ch.p$,
                                                children: [
                                                    (0, p.jsx)("div", { className: ch.QT }),
                                                    (0, p.jsx)(dK.H, {
                                                        className: ch.ks,
                                                        children: g.intl.string(g.t.B1qgZn),
                                                    }),
                                                    (0, p.jsx)("p", {
                                                        className: ch.WO,
                                                        children: g.intl.format(g.t.HezvJ8, {
                                                            onClick: function () {
                                                                (0, ej.openUserSettings)(u.X.NITRO_PANEL);
                                                            },
                                                        }),
                                                    }),
                                                ],
                                            })
                                          : eR()
                                                .keys(l)
                                                .map((e) => {
                                                    let {
                                                        skuId: t,
                                                        subscriptionPlanId: i,
                                                        giftStyle: n,
                                                    } = (0, dz.X6)(e);
                                                    return (0, p.jsx)(
                                                        cA,
                                                        {
                                                            className: ch.uI,
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
                : (0, p.jsx)(uK.y, { className: ch.Lq });
        },
        usePredicate: () => !(0, dk.Hp)(),
        useSearchTerms: () => [g.intl.string(g.t["jcSP+g"]), g.intl.string(g.t["9KeUbY"])],
    }),
    cx = (0, o.E2)(u.X.GIFT_BLOCKED_PAYMENTS_SETTING, {
        Component: dL.uK,
        usePredicate: () => (0, dk.Hp)(),
        useSearchTerms: () => [g.intl.string(g.t.vwMEHS)],
    }),
    cS = (0, o.zZ)(u.X.GIFT_INVENTORY_CATEGORY, { buildLayout: () => [dX, cT, cx] }),
    cp = (0, o.t_)(u.X.GIFT_PANEL, { useTitle: () => g.intl.string(g.t["jcSP+g"]), buildLayout: () => [cS] }),
    cN = (0, o.i4)(u.X.GIFT_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["jcSP+g"]),
        icon: dM.o,
        usePersistentBadge: function () {
            return N.useMemo(() => ({ badgeType: ef.Xi.COUNT, useCount: () => (0, dV.IO)().length }), []);
        },
        buildLayout: () => [cp],
    });
var cf = i(949302),
    c_ = i(786160),
    cC = i(815846);
let cI = (0, o.E2)(u.X.NITRO_SETTING, {
        Component: function () {
            let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser());
            return (0, oK.YE)(e, sf.PremiumTypes.TIER_2) ? (0, p.jsx)(cC.A, {}) : (0, p.jsx)(c_.A, {});
        },
        useSearchTerms: () => [g.intl.string(g.t.Ipxkog)],
    }),
    cb = (0, o.zZ)(u.X.NITRO_CATEGORY, { buildLayout: () => [cI] }),
    cv = (0, o.t_)(u.X.NITRO_PANEL, {
        useTitle: () => g.intl.string(g.t.Ipxkog),
        useObscuredNotice: uX.L,
        buildLayout: () => [cb],
    }),
    cj = (0, o.i4)(u.X.NITRO_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.Ipxkog),
        icon: oV.t,
        usePersistentBadge: function (e) {
            return N.useMemo(
                () => ({ badgeType: ef.Xi.STRONGLY_DISCOURAGED_CUSTOM, useCustomBadge: () => (0, cf.e)(e) }),
                [e],
            );
        },
        buildLayout: () => [cv],
    });
var cy = i(104510),
    cO = i(820739),
    cR = i(73825),
    cL = i(160946);
let cD = (0, i(240921).Ay)({
    name: "2026-03-boosting-settings-refresh",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var cP = i(859241),
    cG = i(531260),
    cU = i(369163),
    cM = i(957485),
    cV = i(926268),
    ck = i(106529),
    cw = i(93364);
function cF(e) {
    let { className: t, icon: i, children: n } = e;
    return (0, p.jsxs)("li", {
        className: ew()(ck.Nr, t),
        children: [
            (0, p.jsx)(i, { className: ck.Kk }),
            (0, p.jsx)(V.E, { className: ck.__invalid_description, variant: "text-sm/medium", children: n }),
        ],
    });
}
let cB = function (e) {
    let { cardClassName: t } = e;
    return (0, p.jsxs)("div", {
        className: ck.iE,
        children: [
            (0, p.jsxs)("div", {
                className: ck.Qs,
                children: [
                    (0, p.jsx)(eA.D, {
                        className: ck.R_,
                        color: "always-white",
                        variant: "heading-xxl/bold",
                        children: g.intl.string(g.t.IzKs3o),
                    }),
                    (0, p.jsxs)("ul", {
                        className: ck.kR,
                        children: [
                            (0, p.jsx)(cF, { className: t, icon: cU.v, children: g.intl.string(g.t.TZigSO) }),
                            (0, p.jsx)(cF, {
                                className: t,
                                icon: (e) =>
                                    (0, p.jsx)("img", { className: ew()(e.className, ck.Dp), src: cw, alt: "" }),
                                children: g.intl.string(g.t.hjQuV2),
                            }),
                            (0, p.jsx)(cF, { className: t, icon: cM.i, children: g.intl.string(g.t["2RUcaM"]) }),
                            (0, p.jsx)(cF, { className: t, icon: cV.C, children: g.intl.string(g.t.bJoZKV) }),
                        ],
                    }),
                ],
            }),
            (0, p.jsx)("div", { className: ck.JP }),
        ],
    });
};
var cz = i(834040),
    cY = i(307301),
    cX = i(811227);
let cH = [
        { getQuestion: () => g.intl.string(g.t.C4J8UB), getAnswer: () => g.intl.string(g.t.nhkk6k) },
        {
            getQuestion: () => g.intl.string(g.t.ai4ym2),
            getAnswer: () =>
                g.intl.format(g.t["8zlqlD"], { helpCenterUrl: ta.A.getArticleURL(q.MVz.GUILD_BOOSTING_FAQ) }),
        },
        { getQuestion: () => g.intl.string(g.t.kMVGsC), getAnswer: () => g.intl.string(g.t["Vz/SCQ"]) },
        { getQuestion: () => g.intl.string(g.t.kYmXWF), getAnswer: () => g.intl.string(g.t["+OURPp"]) },
        { getQuestion: () => g.intl.string(g.t["LsX/vb"]), getAnswer: () => g.intl.string(g.t["3TeauK"]) },
        { getQuestion: () => g.intl.string(g.t.fRlnXU), getAnswer: () => g.intl.string(g.t.bTRacj) },
        { getQuestion: () => g.intl.string(g.t["8Mu5Q9"]), getAnswer: () => g.intl.string(g.t["2T5iPo"]) },
        { getQuestion: () => g.intl.string(g.t["6EN+TZ"]), getAnswer: () => g.intl.string(g.t.NZax1u) },
        { getQuestion: () => g.intl.string(g.t.f5B4EW), getAnswer: () => g.intl.string(g.t.Aje8Pb) },
    ],
    cK = function (e) {
        let { className: t } = e,
            [i, n] = N.useState(null);
        return (0, p.jsxs)("div", {
            className: ew()(cX.iE, t),
            children: [
                (0, p.jsx)(eA.D, {
                    className: cX.R_,
                    variant: "heading-xxl/bold",
                    children: g.intl.string(g.t.HPJ6Nj),
                }),
                (0, p.jsx)("ul", {
                    className: cX.p_,
                    children: cH.map((e, t) => {
                        let s = i === t;
                        return (0, p.jsxs)(
                            "div",
                            {
                                className: cX.Aw,
                                children: [
                                    (0, p.jsxs)(M.D, {
                                        className: ew()(cX.k7, { [cX.lo]: s }),
                                        onClick: () => n((e) => (e === t ? null : t)),
                                        tag: "li",
                                        children: [
                                            (0, p.jsx)(V.E, {
                                                className: cX.b1,
                                                variant: "text-lg/normal",
                                                children: e.getQuestion(),
                                            }),
                                            s
                                                ? (0, p.jsx)(cz.Q, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: cX.q4,
                                                  })
                                                : (0, p.jsx)(cY.j, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: cX.q4,
                                                  }),
                                        ],
                                    }),
                                    s &&
                                        (0, p.jsx)(V.E, {
                                            className: cX.ZF,
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
var cW = i(462887),
    cZ = i(933832),
    cq = i(789645),
    cQ = i(116891),
    cJ = i(416676);
let c$ = [
    {
        getPerkHeading: () => g.intl.string(g.t.tIiwuj),
        getPerkPreviewLightTheme: () => i(604203),
        getPerkPreviewDarkTheme: () => i(878515),
        getTier0Value: () => sf.TG[q.TVA.NONE].limits.emoji,
        getTier1Value: () => sf.TG[q.TVA.TIER_1].limits.emoji,
        getTier2Value: () => sf.TG[q.TVA.TIER_2].limits.emoji,
        getTier3Value: () => sf.TG[q.TVA.TIER_3].limits.emoji,
    },
    {
        getPerkHeading: () => g.intl.string(g.t["3iccet"]),
        getPerkPreviewLightTheme: () => i(105732),
        getPerkPreviewDarkTheme: () => i(857020),
        getTier0Value: () => sf.TG[q.TVA.NONE].limits.stickers,
        getTier1Value: () => sf.TG[q.TVA.TIER_1].limits.stickers,
        getTier2Value: () => sf.TG[q.TVA.TIER_2].limits.stickers,
        getTier3Value: () => sf.TG[q.TVA.TIER_3].limits.stickers,
    },
    {
        getPerkHeading: () => g.intl.string(g.t["+smCv9"]),
        getPerkPreviewLightTheme: () => i(597890),
        getPerkPreviewDarkTheme: () => i(297642),
        getTier0Value: () => sf.TG[q.TVA.NONE].limits.soundboardSounds,
        getTier1Value: () => sf.TG[q.TVA.TIER_1].limits.soundboardSounds,
        getTier2Value: () => sf.TG[q.TVA.TIER_2].limits.soundboardSounds,
        getTier3Value: () => sf.TG[q.TVA.TIER_3].limits.soundboardSounds,
    },
    {
        getPerkHeading: () => g.intl.string(g.t.SMYauD),
        getPerkPreviewLightTheme: () => i(323091),
        getPerkPreviewDarkTheme: () => i(261835),
        getTier0Value: () =>
            g.intl.formatToPlainString(g.t.zZ6Rdi, {
                resolution: sf.TG[q.TVA.NONE].limits.screenShareQualityResolution,
                framerate: sf.TG[q.TVA.NONE].limits.screenShareQualityFramerate,
            }),
        getTier1Value: () =>
            g.intl.formatToPlainString(g.t.zZ6Rdi, {
                resolution: sf.TG[q.TVA.TIER_1].limits.screenShareQualityResolution,
                framerate: sf.TG[q.TVA.TIER_1].limits.screenShareQualityFramerate,
            }),
        getTier2Value: () =>
            g.intl.formatToPlainString(g.t.zZ6Rdi, {
                resolution: (0, cQ.eT)("GuildBoostingMarketingTierComparisonTable"),
                framerate: sf.TG[q.TVA.TIER_2].limits.screenShareQualityFramerate,
            }),
        getTier3Value: () =>
            g.intl.formatToPlainString(g.t.zZ6Rdi, {
                resolution: (0, cQ.eT)("GuildBoostingMarketingTierComparisonTable"),
                framerate: sf.TG[q.TVA.TIER_3].limits.screenShareQualityFramerate,
            }),
    },
    {
        getPerkHeading: () => g.intl.string(g.t["/79IDj"]),
        getPerkPreviewLightTheme: () => i(913997),
        getPerkPreviewDarkTheme: () => i(95781),
        getTier0Value: () =>
            g.intl.formatToPlainString(g.t.w1gmLt, { bitrate: sf.TG[q.TVA.NONE].limits.bitrate / 1e3 }),
        getTier1Value: () =>
            g.intl.formatToPlainString(g.t.w1gmLt, { bitrate: sf.TG[q.TVA.TIER_1].limits.bitrate / 1e3 }),
        getTier2Value: () =>
            g.intl.formatToPlainString(g.t.w1gmLt, { bitrate: sf.TG[q.TVA.TIER_2].limits.bitrate / 1e3 }),
        getTier3Value: () =>
            g.intl.formatToPlainString(g.t.w1gmLt, { bitrate: sf.TG[q.TVA.TIER_3].limits.bitrate / 1e3 }),
    },
    {
        getPerkHeading: () => g.intl.string(g.t.R1U2xC),
        getPerkPreviewLightTheme: () => i(389833),
        getPerkPreviewDarkTheme: () => i(754561),
        getTier0Value: () =>
            g.intl.formatToPlainString(g.t.pIn7Af, { size: sf.TG[q.TVA.NONE].limits.fileSize / 1048576 }),
        getTier1Value: () =>
            g.intl.formatToPlainString(g.t.pIn7Af, { size: sf.TG[q.TVA.TIER_1].limits.fileSize / 1048576 }),
        getTier2Value: () =>
            g.intl.formatToPlainString(g.t.pIn7Af, { size: sf.TG[q.TVA.TIER_2].limits.fileSize / 1048576 }),
        getTier3Value: () =>
            g.intl.formatToPlainString(g.t.pIn7Af, { size: sf.TG[q.TVA.TIER_3].limits.fileSize / 1048576 }),
    },
    {
        getPerkHeading: () => g.intl.string(g.t.f6vfso),
        getPerkPreviewLightTheme: () => i(735669),
        getPerkPreviewDarkTheme: () => i(283517),
        getTier0Value: () => sf.TG[q.TVA.NONE].limits.stageVideoUsers,
        getTier1Value: () => sf.TG[q.TVA.TIER_1].limits.stageVideoUsers,
        getTier2Value: () => sf.TG[q.TVA.TIER_2].limits.stageVideoUsers,
        getTier3Value: () => sf.TG[q.TVA.TIER_3].limits.stageVideoUsers,
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
        getPerkPreviewDarkTheme: () => i(481344),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => !1,
        getTier3Value: () => !0,
    },
];
function c0(e) {
    let { children: t, className: i, tier: n } = e,
        s = n === q.TVA.NONE ? "text-muted" : "text-strong",
        l = n === q.TVA.NONE || null == n ? "heading-xl/normal" : "heading-xl/bold";
    return (0, p.jsxs)("th", {
        className: ew()(cJ.PG, i),
        scope: "col",
        children: [
            (0, p.jsx)(eA.D, { color: s, variant: l, children: t }),
            null != n &&
                (0, p.jsx)(V.E, {
                    color: s,
                    variant: "text-md/normal",
                    children: g.intl.format(g.t["pob/cL"], { subscriptions: q.M2T[n] }),
                }),
        ],
    });
}
function c1(e) {
    let t,
        { className: i, textVariant: n = "text-md/bold", value: s } = e;
    if ("boolean" == typeof s) {
        let e = ew()(cJ.Jk, { [cJ.I$]: s });
        t = s
            ? (0, p.jsx)(cZ.A, { size: "md", color: "currentColor", className: e })
            : (0, p.jsx)(cq.P, { size: "md", color: "currentColor", className: e });
    } else t = (0, p.jsx)(V.E, { color: "interactive-text-active", variant: n, children: s });
    return (0, p.jsx)("td", { className: ew()(cJ.xR, i), children: t });
}
function c2(e) {
    let { currentTier: t } = e,
        i = (function (e) {
            switch (e) {
                case q.TVA.NONE:
                case q.TVA.TIER_1:
                    return q.TVA.TIER_2;
                case q.TVA.TIER_2:
                case q.TVA.TIER_3:
                    return q.TVA.TIER_3;
                default:
                    return null;
            }
        })(t);
    return null == i
        ? null
        : (0, p.jsx)("div", {
              className: ew()(cJ.ER, { [cJ.GH]: i === q.TVA.TIER_2, [cJ.z5]: i === q.TVA.TIER_3 }),
              children: (0, p.jsx)(V.E, {
                  className: cJ.uQ,
                  color: "always-white",
                  variant: "text-xs/bold",
                  children: t === q.TVA.TIER_3 ? g.intl.string(g.t.d849Up) : g.intl.string(g.t.dZeX1z),
              }),
          });
}
function c3(e) {
    let { isFocused: t, handleFocus: i, handleRowBlur: n, theme: s, row: l, hideTier0: r } = e,
        a = N.useRef(null);
    return (0, p.jsxs)("tr", {
        className: cJ.__invalid_tableRow,
        children: [
            (0, p.jsx)("th", {
                className: ew()(cJ.xR, cJ.uB),
                scope: "row",
                children: (0, p.jsx)(M.D, {
                    className: ew()(cJ.VC, cJ.xR, cJ.Rk),
                    onFocus: i,
                    onBlur: n,
                    onMouseEnter: i,
                    onMouseLeave: n,
                    children: (0, p.jsx)(P.Y, {
                        targetElementRef: a,
                        align: "center",
                        disablePointerEvents: !0,
                        nudgeAlignIntoViewport: !0,
                        position: "bottom",
                        renderPopout: () =>
                            (0, p.jsx)("img", {
                                className: cJ.Mz,
                                src: (0, cW.M)(s) ? l.getPerkPreviewDarkTheme() : l.getPerkPreviewLightTheme(),
                                alt: "",
                            }),
                        shouldShow: t,
                        spacing: 16,
                        children: () =>
                            (0, p.jsx)(V.E, { variant: "text-md/normal", ref: a, children: l.getPerkHeading() }),
                    }),
                }),
            }),
            !r && (0, p.jsx)(c1, { textVariant: "text-md/normal", value: l.getTier0Value() }),
            (0, p.jsx)(c1, { value: l.getTier1Value() }),
            (0, p.jsx)(c1, { value: l.getTier2Value() }),
            (0, p.jsx)(c1, { value: l.getTier3Value() }),
        ],
    });
}
let c6 = function (e) {
    let t = (0, dZ.Ay)(),
        [i, n] = N.useState(null),
        { className: s, guild: l, hideHeading: r, hideTier0: a } = e;
    function o() {
        n(null);
    }
    return (0, p.jsxs)("div", {
        className: s,
        children: [
            !r &&
                (0, p.jsx)(eA.D, {
                    className: cJ.R_,
                    variant: "heading-xxl/extrabold",
                    children: g.intl.string(g.t["9GGb9k"]),
                }),
            (0, p.jsxs)("div", {
                className: cJ.wY,
                children: [
                    null != l && (0, p.jsx)(c2, { currentTier: l.premiumTier }),
                    (0, p.jsxs)("table", {
                        className: cJ.tp,
                        cellPadding: 0,
                        cellSpacing: 0,
                        children: [
                            (0, p.jsx)("thead", {
                                children: (0, p.jsxs)("tr", {
                                    className: cJ.__invalid_tableRow,
                                    children: [
                                        (0, p.jsx)(c0, { className: cJ.VC, children: g.intl.string(g.t.F5MY0k) }),
                                        !a && (0, p.jsx)(c0, { tier: q.TVA.NONE, children: g.intl.string(g.t.mx8j2m) }),
                                        (0, p.jsx)(c0, { tier: q.TVA.TIER_1, children: g.intl.string(g.t.nzXtaS) }),
                                        (0, p.jsx)(c0, { tier: q.TVA.TIER_2, children: g.intl.string(g.t["h33/uW"]) }),
                                        (0, p.jsx)(c0, { tier: q.TVA.TIER_3, children: g.intl.string(g.t.BfF6ED) }),
                                    ],
                                }),
                            }),
                            (0, p.jsx)("tbody", {
                                className: cJ.__invalid_tableBody,
                                children: c$.map((e, s) => {
                                    let l = i === s;
                                    return void 0 === e.predicate
                                        ? (0, p.jsx)(
                                              c3,
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
var c4 = i(338548),
    c7 = i(776096),
    c8 = i(178368),
    c5 = i(873174),
    c9 = i(866323),
    ge = i(530005),
    gt = i(443865),
    gi = i(473145);
function gn(e) {
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
                label: null != t.premiumGuildSubscription ? g.intl.string(g.t["PR0n//"]) : g.intl.string(g.t["+fmEYG"]),
                subtext: t.isOnCooldown() ? g.intl.string(g.t.XnB8M0) : null,
                disabled: t.isOnCooldown(),
            },
            cancel: { label: g.intl.string(g.t.twFU3R), subtext: s ? null : g.intl.string(g.t.oQ9lOh), disabled: !s },
            uncancel: { label: g.intl.string(g.t["2glQNp"]), subtext: null, disabled: !1 },
        };
    switch (l.status) {
        case q.Dmq.PAST_DUE:
            (o.cancel.disabled = !0), (o.cancel.subtext = g.intl.string(g.t.WnL6DV)), (o.uncancel.disabled = !0);
            break;
        case q.Dmq.PAUSE_PENDING:
        case q.Dmq.PAUSED:
            a === sf.xc.NONE &&
                ((o.transfer.disabled = !0),
                (o.transfer.subtext = g.intl.string(g.t.LiLRRT)),
                (o.cancel.subtext = g.intl.string(g.t["1ywaWL"])),
                (o.cancel.disabled = !0),
                (o.uncancel.disabled = !0));
    }
    let d = N.useMemo(
        () =>
            l.isPausedOrPausePending && a === sf.xc.NONE
                ? (0, p.jsx)(U.Dr, {
                      id: "manage-subscription",
                      label: g.intl.string(g.t.obRG6Y),
                      action: () => (0, ej.openUserSettings)(u.X.SUBSCRIPTIONS_PANEL),
                      iconLeft: gt.x,
                      leadingAccessory: { type: "icon", icon: gt.x },
                  })
                : null,
        [a, l],
    );
    return (0, p.jsxs)(G.W, {
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
                    (0, _.openModalLazy)(async () => {
                        let { default: e } = await Promise.resolve().then(i.bind(i, 724624));
                        return (i) =>
                            (0, p.jsx)(e, { ...i, guildBoostSlots: [t], locationSection: q.JJy.SETTINGS_PREMIUM });
                    });
                },
                disabled: o.transfer.disabled,
            }),
            (0, gi.I5)(t)
                ? (0, p.jsx)(U.Dr, {
                      id: "uncancel",
                      label: o.uncancel.label,
                      subtext: o.uncancel.subtext,
                      action: function () {
                          (0, _.openModalLazy)(async () => {
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
                          (0, _.openModalLazy)(async () => {
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
var gs = i(545934),
    gl = i(496431);
let gr = function (e) {
    let { className: t, cooldown: i } = e,
        n = (0, gl.A)(i);
    return (0, p.jsx)(V.E, {
        className: t,
        variant: "text-sm/medium",
        color: "text-muted",
        children: (0, ry.uN)(n, { days: g.t.WUTPDc, hours: g.t.c1qodV, minutes: g.t["2+A3dv"] }),
    });
};
var ga = i(550070);
let go = function (e) {
    let { className: t, imageClassName: n, boostInCooldown: s, useReducedMotion: l } = e;
    return (0, p.jsx)("div", {
        className: ew()(ga.h4, t, { [ga.K2]: s }),
        children: (0, p.jsx)("img", {
            className: ew()(ga.Sl, n, { [ga.x8]: s }),
            src: s
                ? i(791128)
                : l
                  ? i(757871)
                  : "https://cdn.discordapp.com/assets/content/86fd98fc22283647a8be93d0c503646b53c84e3cb25ca6562a38cecb84327e58.gif",
            alt: "",
        }),
    });
};
var gu = i(280582);
let gd = function (e) {
    let { className: t, hasCooldown: n, isCanceled: s, useReducedMotion: l } = e;
    return (0, p.jsxs)("div", {
        className: ew()(gu.sn, t),
        children: [
            s
                ? (0, p.jsx)("img", { className: ew()(gu.$J, gu.qX), src: i(66469), alt: "" })
                : (0, p.jsx)(go, { className: gu.$J, boostInCooldown: n, useReducedMotion: l }),
            !s && n && (0, p.jsx)("img", { className: gu.De, src: i(994937), alt: "" }),
        ],
    });
};
var gc = i(548118),
    gg = i(509536),
    gm = i(944304),
    gA = i(864310),
    gh = i(44112);
let gE = function (e) {
    let { className: t, guildId: i, boostingVariant: n } = e,
        s = (0, uy.bG)([H.A], () => H.A.getGuild(i), [i]),
        l = (0, gA.A)(s?.id).total;
    return null == s
        ? (0, p.jsx)("div", {
              className: ew()(t, gh.bo),
              children: (0, p.jsx)("div", {
                  className: gh.$g,
                  children: (0, p.jsx)(V.E, { variant: "text-lg/bold", children: g.intl.string(g.t["6Kwwuo"]) }),
              }),
          })
        : (0, p.jsxs)("div", {
              className: ew()(t, gh.bo),
              children: [
                  (0, p.jsx)(gc.Ay, { className: gh.__invalid_guildIcon, guild: s, size: gc.Ay.Sizes.LARGER }),
                  (0, p.jsxs)("div", {
                      className: gh.$g,
                      children: [
                          (0, p.jsx)(V.E, { variant: "text-lg/bold", children: s.name }),
                          (0, p.jsxs)("div", {
                              className: gh.TZ,
                              children: [
                                  (0, p.jsx)(cy._, {
                                      color: w.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                      className: gh.Me,
                                  }),
                                  (0, p.jsx)(V.E, {
                                      variant: "text-sm/bold",
                                      color: "text-muted",
                                      children: g.intl.format(g.t["pob/cL"], { subscriptions: l }),
                                  }),
                                  (0, p.jsx)("div", { className: gh.me }),
                                  (0, p.jsx)(V.E, {
                                      variant: "text-sm/bold",
                                      color: "text-muted",
                                      children: (0, gi.gb)(s.premiumTier, { useLevels: !1 }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  n
                      ? (0, p.jsx)(gm.A, {
                            guild: s,
                            analyticsLocation: {
                                page: q.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                section: q.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                object: q.ZSU.BUTTON_CTA,
                                objectType: q.AnalyticsObjectTypes.BUY,
                            },
                            pauseAnimation: !0,
                            size: ay.$n.Sizes.MEDIUM,
                            color: ay.$n.Colors.PRIMARY,
                            buttonText: g.intl.string(g.t.aBHecF),
                        })
                      : (0, p.jsx)(eh.$, {
                            variant: "secondary",
                            text: g.intl.string(g.t.KLOhbO),
                            onClick: () => {
                                (0, sT.default)(),
                                    (0, gg.K4)({
                                        guildId: s.id,
                                        location: { section: q.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA },
                                    });
                            },
                        }),
              ],
          });
};
var gT = i(930988);
function gx(e) {
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
                    l.isPausedForFractionalPremium && (e = r.endsAt.toDate()), g.intl.format(g.t.Z4ULRD, { date: e })
                );
            }
            let e = null != i.premiumGuildSubscription ? u2.default.extractTimestamp(i.premiumGuildSubscription.id) : 0;
            return g.intl.formatToPlainString(g.t.lY2Bur, { date: new Date(e) });
        }, [i, s, l, r]),
        o = N.useMemo(
            () =>
                (function (e) {
                    if (null == e || e === q.TVA.NONE) return "";
                    let t = [
                        g.intl.formatToPlainString(g.t["dLlKX/"], { numEmojiSlots: sf.TG[e].limits.emoji }),
                        g.intl.formatToPlainString(g.t["+ANIfv"], { numStickerSlots: sf.TG[e].limits.stickers }),
                        g.intl.formatToPlainString(g.t["4gt60b"], {
                            numSoundboardSlots: sf.TG[e].limits.soundboardSounds,
                        }),
                        g.intl.formatToPlainString(g.t.XahSjZ, {
                            resolution: sf.TG[e].limits.screenShareQualityResolution,
                            framerate: sf.TG[e].limits.screenShareQualityFramerate,
                        }),
                        g.intl.formatToPlainString(g.t.NbNs7S, { bitrate: sf.TG[e].limits.bitrate / 1e3 }),
                        g.intl.formatToPlainString(g.t.VVKcpn, { filesize: sf.TG[e].limits.fileSize / 1024 / 1024 }),
                        g.intl.formatToPlainString(g.t.TbpCvv, { numVideoStageSeats: sf.TG[e].limits.stageVideoUsers }),
                        g.intl.string(g.t.LDyX3i),
                        g.intl.string(g.t.YtGlPW),
                    ];
                    e >= q.TVA.TIER_2 && (t.push(g.intl.string(g.t.SztbtN)), t.push(g.intl.string(g.t["3GK91n"]))),
                        e >= q.TVA.TIER_3 && t.push(g.intl.string(g.t["XUUJd+"]));
                    let i = t[Math.floor(Math.random() * t.length)];
                    return g.intl.format(g.t["/dOAmQ"], { perk: i });
                })(t),
            [t],
        ),
        u = (0, c9.p)(n, { from: { opacity: 0 }, enter: { opacity: 1 }, leave: { opacity: 0 } }, "animate-always");
    return s || t === q.TVA.NONE
        ? (0, p.jsx)("div", {
              className: gT.xm,
              children: (0, p.jsx)(V.E, { variant: "text-sm/medium", color: "text-muted", children: a }),
          })
        : u((e, t) =>
              (0, p.jsx)(c5.animated.div, {
                  style: e,
                  className: gT.xm,
                  children: (0, p.jsx)(V.E, { variant: "text-sm/medium", color: "text-muted", children: t ? o : a }),
              }),
          );
}
function gS(e) {
    let {
            guildTier: t,
            guildBoostSlot: i,
            premiumSubscription: n,
            hasCancelableGuildBoostSlot: s,
            showAltText: l,
            isLastGuildBoostSlot: r,
        } = e,
        a = (0, uy.bG)([iW.A], () => iW.A.useReducedMotion),
        o = N.useMemo(() => (null != i.cooldownEndsAt ? new Date(i.cooldownEndsAt) : null), [i]),
        u = N.useMemo(() => null != o && o > new Date(), [o]),
        d = (0, gi.I5)(i),
        c = (0, cG.A)(),
        m = N.useRef(null);
    return (0, p.jsxs)("div", {
        className: gT.PW,
        children: [
            (0, p.jsxs)("div", {
                className: gT.$U,
                children: [
                    (0, p.jsx)(gd, { isCanceled: d, hasCooldown: u, useReducedMotion: a }),
                    (0, p.jsx)("div", {
                        className: gT.vh,
                        children:
                            null != o && u && !d
                                ? (0, p.jsx)(gr, { className: gT.xm, cooldown: o.getTime() })
                                : (0, p.jsx)(gx, {
                                      guildTier: t,
                                      guildBoostSlot: i,
                                      showAltText: l,
                                      isCanceled: d,
                                      premiumSubscription: n,
                                      fractionalPremiumInfo: c,
                                  }),
                    }),
                    (0, p.jsx)(P.Y, {
                        targetElementRef: m,
                        renderPopout: function (e) {
                            let { closePopout: t } = e;
                            return (0, p.jsx)(gn, {
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
                            (0, p.jsx)(M.D, {
                                ...e,
                                innerRef: m,
                                "aria-label": g.intl.string(g.t.PdRCRg),
                                className: gT.oU,
                                children: (0, p.jsx)(ge.F, { size: "md", color: "currentColor" }),
                            }),
                    }),
                ],
            }),
            !r && (0, p.jsx)("div", { className: gT.eX }),
        ],
    });
}
function gp(e) {
    let {
            guildId: t,
            guildBoostSlotRecords: i,
            premiumSubscription: n,
            hasCancelableGuildBoostSlot: s,
            showAltText: l,
        } = e,
        r = (0, uy.bG)([H.A], () => H.A.getGuild(t), [t]);
    return (0, p.jsxs)("div", {
        className: gT.ag,
        children: [
            (0, p.jsx)(gE, { guildId: t, boostingVariant: !1 }),
            i.map((e, t) =>
                (0, p.jsx)(
                    gS,
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
function gN(e) {
    let { guildId: t, appliedGuildBoosts: i, premiumSubscription: n } = e,
        s = (0, uy.bG)([H.A], () => H.A.getGuild(t), [t]),
        l = u2.default.fromTimestamp(Date.now());
    if (
        (i.forEach((e) => {
            (null == l || 0 > u2.default.compare(e.id, l)) && (l = e.id);
        }),
        null == l)
    )
        return null;
    let r = gs.A.createFromServer(
        {
            id: u2.default.fromTimestamp(Date.now()),
            subscription_id: n.id,
            canceled: !1,
            premium_guild_subscription: { id: l, guild_id: t },
            cooldown_ends_at: null,
        },
        n,
    );
    return (0, p.jsxs)("div", {
        className: gT.ag,
        children: [
            (0, p.jsx)(gE, { guildId: t, boostingVariant: !1 }),
            i.map((e, t) =>
                (0, p.jsx)(
                    gS,
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
function gf(e) {
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
              className: gT.iE,
              children: [
                  (0, p.jsx)("div", {
                      className: gT.kL,
                      children: u2.default
                          .keys(n)
                          .map((e) =>
                              (0, p.jsx)(gN, { guildId: e, premiumSubscription: i, appliedGuildBoosts: n[e] }, e),
                          ),
                  }),
                  (0, p.jsx)("div", { className: gT.vK }),
              ],
          });
}
function g_(e) {
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
                if ((!(0, gi.I5)(s) && e++, null != s.premiumGuildSubscription)) {
                    let e = s.premiumGuildSubscription.guildId;
                    e in i || (i[e] = []), i[e].push(s);
                }
            }),
            { boostsByGuildId: i, numActiveGuildBoostSlots: e }
        );
    }, [t]);
    if (null == i || 0 === Object.keys(l).length) return null;
    let a = r > oK.Ay.getNumIncludedPremiumGuildSubscriptionSlots(i.planId);
    return (0, p.jsxs)("div", {
        className: gT.iE,
        children: [
            (0, p.jsx)("div", {
                className: gT.kL,
                children: u2.default
                    .keys(l)
                    .map((e) =>
                        (0, p.jsx)(
                            gp,
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
            (0, p.jsx)("div", { className: gT.vK }),
        ],
    });
}
var gC = i(581796);
let gI = function (e) {
    let { hasGuildBoostSlots: t, hasAppliedGuildBoosts: n, hasBoostPerk: s, canAddBoosts: l } = e;
    return (0, p.jsxs)("div", {
        className: gC.iE,
        children: [
            (0, p.jsx)("div", {
                className: gC.bj,
                children: (0, p.jsx)("img", { alt: "", className: gC.KV, src: i(757871) }),
            }),
            (0, p.jsxs)("div", {
                className: gC.D7,
                children: [
                    (0, p.jsx)(eA.D, {
                        variant: "display-md",
                        className: gC.R_,
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
                                        ? g.intl.format(g.t.s9zQyG, {})
                                        : g.intl.format(g.t.Rb8Jhs, {})
                                    : g.intl.string(g.t["2rh0by"])
                                : g.intl.format(g.t.Rb8Jhs, {});
                        })({ hasGuildBoostSlots: t, hasBoostPerk: s, hasAppliedGuildBoosts: n, canAddBoosts: l }),
                    }),
                    (0, p.jsx)("svg", {
                        viewBox: "0 0 660 210",
                        className: gC.Mz,
                        children: (0, p.jsx)("path", {
                            d: "M101.3,45.5C57.5,45.9,15.9,82.2,0,99.5V210h660V53.5c-164-137-265.2,32.4-385.8,33.6  C177.7,88.1,158.1,45,101.3,45.5z",
                        }),
                    }),
                ],
            }),
        ],
    });
};
var gb = i(757240),
    gv = i(168482);
function gj() {
    return (0, p.jsxs)("div", {
        className: gb.iE,
        children: [
            (0, p.jsx)("img", { className: gb.Kk, alt: "", src: gv }),
            (0, p.jsxs)("div", {
                className: gb.pq,
                children: [
                    (0, p.jsx)(V.E, { variant: "text-lg/bold", children: g.intl.string(g.t.ZHNSYf) }),
                    (0, p.jsx)(V.E, {
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
                    (0, sR.pX)(q.BVt.GUILD_DISCOVERY), (0, sT.default)();
                },
            }),
        ],
    });
}
var gy = i(502572),
    gO = i(614820),
    gR = i(987144),
    gL = i(43985);
let gD = function () {
    let e = N.useRef(null),
        { analyticsLocations: t } = (0, nU.Ay)(),
        { fractionalState: n } = (0, cG.A)();
    function s(i) {
        null != e.current && (0, _.closeModal)(e.current),
            (0, gR.g)({
                analyticsLocation: {
                    page: q.liQ.GUILD_BOOSTING_USER_SETTINGS,
                    section: q.JJy.GUILD_BOOSTING_BOOST_ANY_GUILD_CTA,
                    object: q.ZSU.BUTTON_CTA,
                    objectType: q.AnalyticsObjectTypes.BUY,
                },
                analyticsLocations: t,
                guild: i,
            });
    }
    async function l() {
        e.current = await (0, _.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(i.bind(i, 770101));
                return (t) => (0, p.jsx)(e, { ...t, onSelectGuild: s });
            },
            {
                onCloseRequest: () => {
                    null != e.current && (0, _.closeModal)(e.current);
                },
            },
        );
    }
    let r = (0, gi.Nc)({ fractionalState: n });
    return (0, p.jsxs)("div", {
        className: gL.iE,
        children: [
            (0, p.jsx)(cy._, { color: w.A.unsafe_rawColors.GUILD_BOOSTING_PINK, className: gL.$J }),
            (0, p.jsx)(V.E, {
                className: gL.C,
                color: "text-default",
                variant: "text-sm/medium",
                children: g.intl.format(g.t.kqC5vq, {
                    boostAnyGuildHook: (e, t) => {
                        let i = null != r,
                            n = (0, gO.O)(e),
                            s = (0, p.jsx)("div", {
                                className: gL.lO,
                                children: (0, p.jsx)(
                                    F.Q,
                                    { variant: "primary", onClick: i ? void 0 : l, text: n, disabled: i },
                                    t,
                                ),
                            });
                        return i
                            ? (0, p.jsx)(
                                  gy.A,
                                  {
                                      text: r,
                                      "aria-label": r.toString(),
                                      children: (e) => (0, p.jsx)("span", { ...e, children: s }),
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
var gP = i(212824);
let gG = function (e) {
    let { canAddBoosts: t, canApplyBoosts: i } = e,
        n = (0, O.bG)([c7.A], () => c7.A.affinities),
        s = (0, O.bG)([K.Ay], () => K.Ay.getFlattenedGuildIds()),
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
        : (0, p.jsxs)("div", {
              className: gP.iE,
              children: [
                  t &&
                      (0, p.jsx)(eA.D, {
                          variant: "heading-lg/semibold",
                          className: gP.wx,
                          children: g.intl.string(g.t.r90Wgo),
                      }),
                  l.map((e) => (0, p.jsx)(gE, { className: gP.ZS, guildId: e, boostingVariant: !0 }, e)),
                  s.length > 3 && i && (0, p.jsx)(gD, {}),
              ],
          });
};
var gU = i(342933);
let gM = function (e) {
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
                    flavor: g.intl.format(g.t.doslJu, {
                        onClick: () => (0, ej.openUserSettings)(u.X.SUBSCRIPTIONS_PANEL),
                    }),
                };
            if (!n) return { subtitle: g.intl.string(g.t.oiWYAc) };
            if (t)
                return {
                    subtitle: g.intl.string(g.t.W5rDjW),
                    flavor: g.intl.format(g.t.cUHcaQ, {
                        helpdeskArticle: ta.A.getArticleURL(q.MVz.GUILD_SUBSCRIPTIONS),
                    }),
                };
            let l = sf.hd[sf.gD.PREMIUM_MONTH_GUILD],
                r = oK.Ay.getDefaultPrice(l.id, i),
                a = (0, u0.CE)((0, u0.$g)(r.amount, r.currency), l.interval, l.intervalCount);
            return {
                subtitle: i ? g.intl.string(g.t.bhPzXR) : g.intl.string(g.t.Zs9h9Z),
                flavor: g.intl.formatToPlainString(g.t.PGgTdA, { monthlyGuildBoostPrice: a }),
            };
        })({
            hasAppliedGuildBoosts: t,
            hasBoostPerk: i,
            hasGuildAffinitiesOrInGuild: n,
            subscriptionIsPausedOrPausePending: s,
        });
    return (0, p.jsxs)("div", {
        className: gU.i,
        children: [
            (0, p.jsx)(eA.D, { variant: "heading-lg/bold", className: gU.V, children: l }),
            null != r && (0, p.jsx)(V.E, { variant: "text-sm/normal", children: r }),
        ],
    });
};
var gV = i(724624),
    gk = i(983511),
    gw = i(342744),
    gF = i(87719),
    gB = i(929570);
function gz(e) {
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
        u = (0, gi.I5)(t),
        d = l?.isPaused === !0 && a === sf.xc.NONE,
        c = g.intl.string(g.t.mOWsF1);
    return (0, p.jsxs)(
        "li",
        {
            className: gB.Hp,
            children: [
                (0, p.jsxs)("div", {
                    className: gB.YL,
                    children: [
                        (0, p.jsx)(gd, {
                            className: gB.W6,
                            hasCooldown: t.isOnCooldown(),
                            isCanceled: u,
                            useReducedMotion: r,
                        }),
                        u && null != l
                            ? (0, p.jsx)(V.E, {
                                  color: "text-muted",
                                  variant: "text-sm/medium",
                                  children: g.intl.format(g.t.Z4ULRD, { date: l.currentPeriodEnd }),
                              })
                            : t.isOnCooldown() && null != o
                              ? (0, p.jsx)(gr, { cooldown: o.getTime() })
                              : (0, p.jsx)(V.E, {
                                    className: gB.__invalid_unappliedGuildBoostSlotDescription,
                                    color: "text-muted",
                                    variant: "text-sm/medium",
                                    children: g.intl.string(g.t["2mcafz"]),
                                }),
                    ],
                }),
                (0, p.jsxs)("div", {
                    className: gB.E7,
                    children: [
                        i &&
                            !u &&
                            (0, p.jsx)(gy.A, {
                                shouldShow: d,
                                text: c,
                                "aria-label": c.toString(),
                                children: (e) =>
                                    (0, p.jsx)("div", {
                                        className: gB.LB,
                                        children: (0, p.jsx)(F.Q, {
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
                            (0, p.jsx)(gy.A, {
                                shouldShow: d,
                                text: c,
                                "aria-label": c.toString(),
                                children: (e) =>
                                    (0, p.jsx)("div", {
                                        className: gB.LB,
                                        children: (0, p.jsx)(F.Q, {
                                            ...e,
                                            variant: "primary",
                                            text: g.intl.string(g.t["2glQNp"]),
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
function gY(e) {
    (0, _.openModalLazy)(async () => (t) => (0, p.jsx)(gk.default, { ...t, guildBoostSlot: e }));
}
function gX(e) {
    (0, _.openModalLazy)(async () => (t) => (0, p.jsx)(gw.default, { ...t, guildBoostSlotId: e.id }));
}
let gH = function (e) {
    let t,
        i,
        n,
        { guildBoostSlots: s } = e,
        l = (0, O.bG)([dx.A], () => dx.A.getPremiumTypeSubscription()),
        r = l?.isPausedOrPausePending === !0,
        { fractionalState: a } = (0, cG.A)(),
        o = (0, O.bG)([iW.A], () => iW.A.useReducedMotion),
        u = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
        d = a === sf.xc.FP_SUB_PAUSED,
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
                l = !0;
            return (
                s.forEach((s) => {
                    !(0, gi.I5)(s) && i++,
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
        x = null != l ? oK.Ay.getNumIncludedPremiumGuildSubscriptionSlots(l.planId) : 0,
        S = Math.max(0, x - m.length),
        f = h > x,
        C = x === s.length,
        I = C ? S : 1,
        b = N.useMemo(() => {
            let e = [];
            for (let t = 0; t < I; t++) e.push((0, p.jsx)(go, { className: gB.YA, useReducedMotion: o }, t));
            return e;
        }, [I, o]),
        v = N.useMemo(() => A.find((e) => e.isAvailable()), [A]);
    if (0 === A.length) return null;
    let j = A.length;
    if (
        ((t = C
            ? g.intl.formatToPlainString(T ? g.t["3DW6Dc"] : g.t["/u15Qc"], { numUnappliedGuildBoostSlots: j })
            : g.intl.formatToPlainString(T ? g.t["3DW6Dc"] : g.t.BPadnO, { numUnappliedGuildBoostSlots: j })),
        oK.Ay.isPremium(u))
    ) {
        let e = (e, t) =>
            (0, p.jsx)(
                M.D,
                {
                    className: gB.nw,
                    tag: "span",
                    onClick: () => {
                        (0, gF.e)();
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
        (n = r && a === sf.xc.NONE ? g.intl.string(g.t.mOWsF1) : g.intl.string(g.t.xr4m5B)),
        (0, p.jsx)("div", {
            className: gB.iE,
            children: (0, p.jsxs)("div", {
                className: ew()(gB.Qs, [gB.Yq]),
                children: [
                    (0, p.jsxs)("div", {
                        className: gB.wx,
                        children: [
                            (0, p.jsxs)("div", {
                                className: gB.RW,
                                children: [
                                    (0, p.jsx)("div", { className: gB.PS, children: b }),
                                    (0, p.jsxs)("div", {
                                        className: gB.__invalid_headerCopy,
                                        children: [
                                            (0, p.jsx)(eA.D, {
                                                className: gB.gg,
                                                variant: "heading-lg/bold",
                                                children: t,
                                            }),
                                            (0, p.jsx)(V.E, {
                                                className: gB.__invalid_headerSubheading,
                                                color: "text-strong",
                                                variant: "text-sm/normal",
                                                children: i,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, p.jsx)("div", {
                                className: gB.di,
                                children: (0, p.jsx)(gy.A, {
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
                                                          (0, _.openModalLazy)(
                                                              async () => (e) =>
                                                                  (0, p.jsx)(gV.default, {
                                                                      ...e,
                                                                      guildBoostSlots: [v],
                                                                      locationSection: q.JJy.SETTINGS_PREMIUM,
                                                                  }),
                                                          );
                                                      }
                                                    : void 0,
                                        }),
                                }),
                            }),
                        ],
                    }),
                    (!C || E) &&
                        (0, p.jsx)("ul", {
                            className: gB.LU,
                            children: A.map((e) =>
                                (0, p.jsx)(
                                    gz,
                                    {
                                        guildBoostSlot: e,
                                        isCancellable: f,
                                        onCancel: gY,
                                        onUncancel: gX,
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
var gK = i(669561);
function gW(e) {
    let { premiumSubscription: t } = e,
        i = (0, O.bG)([c8.A], () => c8.A.boostSlots),
        n = N.useMemo(() => Object.values(i), [i]),
        s = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
        l = oK.Ay.isPremium(s, sf.PremiumTypes.TIER_2),
        r = (0, O.bG)([c7.A], () => c7.A.affinities),
        a = (0, O.bG)([K.Ay], () => K.Ay.getFlattenedGuildIds()),
        o = r.length > 0 || a.length > 0,
        u = n.length > 0,
        d = N.useMemo(() => n.filter((e) => null != e.premiumGuildSubscription), [n]),
        c = d.length > 0,
        g = n.length > d.length,
        m = (0, O.bG)([cP.A], () => cP.A.getCurrentUserAppliedBoosts()),
        { fractionalState: A } = (0, cG.A)({ forceFetch: !0 }),
        h = s?.isPremiumGroupMember(),
        E = t?.isPausedOrPausePending === !0 && A === sf.xc.NONE,
        T = t?.isPausedOrPausePending !== !0 && A === sf.xc.NONE && !h,
        x = l && A === sf.xc.FP_SUB_PAUSED,
        S = A === sf.xc.NONE && !h;
    return (0, p.jsxs)("div", {
        className: gK.GO,
        children: [
            (0, p.jsx)(dL.kb, { className: gK.ek }),
            (0, p.jsx)(gI, { hasGuildBoostSlots: u, hasAppliedGuildBoosts: c, hasBoostPerk: x, canAddBoosts: T }),
            S &&
                (0, p.jsx)(gM, {
                    hasAppliedGuildBoosts: c,
                    hasBoostPerk: x,
                    hasGuildAffinitiesOrInGuild: o,
                    subscriptionIsPausedOrPausePending: E,
                }),
            h && (0, p.jsx)(c4.A, {}),
            !o && (0, p.jsx)(gj, {}),
            t?.isPaused && A !== sf.xc.FP_SUB_PAUSED
                ? (0, p.jsx)(gf, { appliedGuildBoosts: m, premiumSubscription: t })
                : (0, p.jsx)(g_, { guildBoostSlots: i, premiumSubscription: t }),
            (0, p.jsx)(gH, { guildBoostSlots: n, fractionalPremiumState: A }),
            (0, p.jsx)(gG, { canAddBoosts: c && T, canApplyBoosts: g }),
            (0, p.jsx)(c6, { className: gK.e4, hideHeading: !0, hideTier0: !0 }),
            (0, p.jsx)(cB, { cardClassName: gK.KW }),
            (0, p.jsx)(cK, { className: gK.JL }),
        ],
    });
}
var gZ = i(527113),
    gq = i(365199),
    gQ = i(102320);
function gJ(e) {
    let { guild: t, className: i } = e,
        { total: n } = (0, gA.A)(t.id);
    return (0, p.jsxs)("div", {
        className: i ?? gQ.OA,
        children: [
            (0, p.jsx)(gc.Ay, { className: gQ.$f, guild: t, size: gc.Ay.Sizes.MEDIUM }),
            (0, p.jsxs)("div", {
                className: gQ.gI,
                children: [
                    (0, p.jsx)(V.E, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        tag: "span",
                        children: t.name,
                    }),
                    (0, p.jsxs)("div", {
                        className: gQ.ew,
                        children: [
                            (0, p.jsxs)("div", {
                                className: gQ.QW,
                                children: [
                                    (0, p.jsx)(cy._, {
                                        className: gQ.Wz,
                                        color: w.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH,
                                    }),
                                    (0, p.jsx)(V.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: g.intl.format(g.t["pob/cL"], { subscriptions: n }),
                                    }),
                                ],
                            }),
                            t.premiumTier !== q.TVA.NONE &&
                                (0, p.jsxs)(p.Fragment, {
                                    children: [
                                        (0, p.jsx)("div", { className: gQ.zk }),
                                        (0, p.jsx)(V.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-subtle",
                                            children: (0, gi.gb)(t.premiumTier, { useLevels: !1 }),
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
function g$(e) {
    let { guildId: t } = e,
        i = (0, O.bG)([H.A], () => H.A.getGuild(t), [t]);
    return null == i
        ? null
        : (0, p.jsxs)("div", {
              className: gQ.Nr,
              children: [
                  (0, p.jsx)(gJ, { guild: i }),
                  (0, p.jsx)(eh.$, {
                      variant: "secondary",
                      size: "sm",
                      icon: cy._,
                      text: g.intl.string(g.t.aBHecF),
                      onClick: () => {
                          (0, gR.g)({
                              analyticsLocations: [],
                              analyticsLocation: {
                                  page: q.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                  section: q.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                  object: q.ZSU.BUTTON_CTA,
                                  objectType: q.AnalyticsObjectTypes.BUY,
                              },
                              guild: i,
                          });
                      },
                  }),
              ],
          });
}
var g0 = i(538888);
let g1 =
    "https://cdn.discordapp.com/assets/content/272d3fa6496aedb9dee76f2d555913bfd56c9e9aacd6de3c18449644d9749657.png";
function g2(e) {
    let { slot: t, guildTier: i, premiumSubscription: n, hasCancelableSlots: s, isLast: l } = e,
        r = N.useRef(null),
        a = (0, gi.I5)(t),
        o = N.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t.cooldownEndsAt]),
        u = null != o && o > new Date(),
        d = (0, cG.A)(),
        c = N.useMemo(
            () =>
                (function (e, t) {
                    if (null == e || e === q.TVA.NONE) return "";
                    let i = [
                        g.intl.formatToPlainString(g.t["dLlKX/"], { numEmojiSlots: sf.TG[e].limits.emoji }),
                        g.intl.formatToPlainString(g.t["+ANIfv"], { numStickerSlots: sf.TG[e].limits.stickers }),
                        g.intl.formatToPlainString(g.t["4gt60b"], {
                            numSoundboardSlots: sf.TG[e].limits.soundboardSounds,
                        }),
                        g.intl.formatToPlainString(g.t.XahSjZ, {
                            resolution: sf.TG[e].limits.screenShareQualityResolution,
                            framerate: sf.TG[e].limits.screenShareQualityFramerate,
                        }),
                        g.intl.formatToPlainString(g.t.NbNs7S, { bitrate: sf.TG[e].limits.bitrate / 1e3 }),
                        g.intl.formatToPlainString(g.t.VVKcpn, { filesize: sf.TG[e].limits.fileSize / 1024 / 1024 }),
                        g.intl.formatToPlainString(g.t.TbpCvv, { numVideoStageSeats: sf.TG[e].limits.stageVideoUsers }),
                        g.intl.string(g.t.LDyX3i),
                        g.intl.string(g.t.YtGlPW),
                    ];
                    e >= q.TVA.TIER_2 && (i.push(g.intl.string(g.t.SztbtN)), i.push(g.intl.string(g.t["3GK91n"]))),
                        e >= q.TVA.TIER_3 && i.push(g.intl.string(g.t["XUUJd+"]));
                    let n = 0;
                    for (let e = 0; e < t.length; e++) n = (31 * n + t.charCodeAt(e)) | 0;
                    let s = i[Math.abs(n) % i.length];
                    return g.intl.formatToPlainString(g.t["/dOAmQ"], { perk: s });
                })(i, t.id),
            [i, t.id],
        ),
        m = N.useMemo(() => {
            if ("" !== c) return c;
            let e = null != t.premiumGuildSubscription ? u2.default.extractTimestamp(t.premiumGuildSubscription.id) : 0;
            return g.intl.formatToPlainString(g.t.lY2Bur, { date: new Date(e) });
        }, [c, t.premiumGuildSubscription]),
        A = N.useMemo(
            () => (a ? (n.isPausedForFractionalPremium ? d.endsAt.toDate() : n.currentPeriodEnd) : null),
            [a, n, d],
        );
    return (0, p.jsxs)("div", {
        className: ew()(g0.iq, { [g0.Mt]: l }),
        children: [
            (0, p.jsxs)("div", {
                className: g0.kd,
                children: [
                    (0, p.jsx)("img", { alt: "", className: g0.bB, src: g1 }),
                    a && null != A
                        ? (0, p.jsx)(V.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: g.intl.format(g.t.Z4ULRD, { date: A }),
                          })
                        : (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsx)(V.E, { variant: "text-sm/medium", color: "text-subtle", children: m }),
                                  u &&
                                      null != o &&
                                      (0, p.jsxs)(p.Fragment, {
                                          children: [
                                              (0, p.jsx)("div", { className: g0.zk }),
                                              (0, p.jsx)(V.E, {
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
                                              (0, p.jsx)("div", { className: g0.zk }),
                                              (0, p.jsx)(V.E, {
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
            (0, p.jsx)(P.Y, {
                targetElementRef: r,
                renderPopout: (e) => {
                    let { closePopout: i } = e;
                    return (0, p.jsx)(gn, {
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
                    (0, p.jsx)(M.D, {
                        innerRef: r,
                        "aria-label": g.intl.string(g.t.PdRCRg),
                        className: g0.Mj,
                        ...e,
                        children: (0, p.jsx)(gq.j, { size: "xs", color: w.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                    }),
            }),
        ],
    });
}
function g3(e) {
    let { guildId: t, slots: i, premiumSubscription: n, hasCancelableSlots: s } = e,
        l = (0, O.bG)([H.A], () => H.A.getGuild(t), [t]);
    return (0, p.jsxs)("div", {
        className: g0.Nr,
        children: [
            (0, p.jsx)("div", {
                className: g0.MY,
                children:
                    null != l
                        ? (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsx)(gJ, { guild: l, className: g0.OA }),
                                  (0, p.jsx)(eh.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: g.intl.string(g.t.KLOhbO),
                                      onClick: () => {
                                          (0, sT.default)(),
                                              (0, gg.K4)({
                                                  guildId: l.id,
                                                  location: {
                                                      section: q.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA,
                                                  },
                                              });
                                      },
                                  }),
                              ],
                          })
                        : (0, p.jsx)("div", {
                              className: g0.OA,
                              children: (0, p.jsx)(eA.D, {
                                  variant: "heading-md/semibold",
                                  color: "text-default",
                                  children: g.intl.string(g.t["6Kwwuo"]),
                              }),
                          }),
            }),
            i.map((e, t) =>
                (0, p.jsx)(
                    g2,
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
function g6(e) {
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
                                gs.A.createFromServer(
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
                if ((!(0, gi.I5)(n) && e++, null != n.premiumGuildSubscription)) {
                    let e = n.premiumGuildSubscription.guildId;
                    e in l || (l[e] = []), l[e].push(n);
                }
            }
            return { boostsByGuildId: l, numActiveSlots: e };
        }, [t, s, n, i]);
    if (null == i || 0 === Object.keys(l).length) return null;
    let a = r > oK.Ay.getNumIncludedPremiumGuildSubscriptionSlots(i.planId);
    return (0, p.jsx)("div", {
        className: g0.kR,
        children: u2.default
            .keys(l)
            .map((e) => (0, p.jsx)(g3, { guildId: e, slots: l[e], premiumSubscription: i, hasCancelableSlots: a }, e)),
    });
}
var g4 = i(100345);
function g7(e) {
    let { guildBoostSlots: t, fractionalPremiumState: n } = e,
        s = (0, O.bG)([dx.A], () => dx.A.getPremiumTypeSubscription()),
        { unappliedSlots: l, numActiveSlots: r } = N.useMemo(() => {
            let e = [],
                i = 0;
            for (let n of t) !(0, gi.I5)(n) && i++, null == n.premiumGuildSubscription && e.push(n);
            return { unappliedSlots: e, numActiveSlots: i };
        }, [t]),
        a = r > (null != s ? oK.Ay.getNumIncludedPremiumGuildSubscriptionSlots(s.planId) : 0),
        o = s?.isPausedOrPausePending === !0 && n === sf.xc.NONE;
    return 0 === l.length
        ? null
        : (0, p.jsxs)("div", {
              className: g4.Nr,
              children: [
                  (0, p.jsxs)("div", {
                      className: g4.MY,
                      children: [
                          (0, p.jsxs)("div", {
                              className: g4._L,
                              children: [
                                  (0, p.jsxs)("div", {
                                      className: g4.MD,
                                      children: [
                                          (0, p.jsx)("img", { alt: "", className: g4.F8, src: g1 }),
                                          (0, p.jsx)("div", {
                                              className: ew()(g4.qS, "theme-dark"),
                                              children: (0, p.jsx)("span", { className: g4.Vv, children: l.length }),
                                          }),
                                      ],
                                  }),
                                  (0, p.jsxs)("div", {
                                      className: g4.Qp,
                                      children: [
                                          (0, p.jsx)(V.E, {
                                              variant: "heading-md/semibold",
                                              color: "text-default",
                                              tag: "span",
                                              children: g.intl.format(g.t.BPadnO, {
                                                  numUnappliedGuildBoostSlots: l.length,
                                              }),
                                          }),
                                          (0, p.jsx)(V.E, {
                                              variant: "text-xs/semibold",
                                              color: "text-subtle",
                                              children: g.intl.format(g.t.Kaw82o, {
                                                  numUnappliedGuildBoostSlots: l.length,
                                              }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, p.jsx)(gy.A, {
                              shouldShow: o,
                              text: g.intl.string(g.t.mOWsF1),
                              "aria-label": g.intl.string(g.t.mOWsF1),
                              children: (e) =>
                                  (0, p.jsx)(eh.$, {
                                      ...e,
                                      variant: "primary",
                                      size: "sm",
                                      icon: cy._,
                                      text: g.intl.string(g.t.BMx1iy),
                                      disabled: o,
                                      onClick: () => {
                                          (0, _.openModalLazy)(async () => {
                                              let { default: e } = await Promise.resolve().then(i.bind(i, 770101));
                                              return (t) =>
                                                  (0, p.jsx)(e, {
                                                      ...t,
                                                      onSelectGuild: (e) => {
                                                          t.onClose(),
                                                              (0, gR.g)({
                                                                  analyticsLocations: [],
                                                                  analyticsLocation: {
                                                                      page: q.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                                                      section: q.JJy.SETTINGS_PREMIUM,
                                                                      object: q.ZSU.BUTTON_CTA,
                                                                      objectType: q.AnalyticsObjectTypes.BUY,
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
                      (0, p.jsx)(
                          g8,
                          {
                              slot: e,
                              isLast: t === l.length - 1,
                              isCancelable: a && !(0, gi.I5)(e),
                              isCanceled: (0, gi.I5)(e),
                              premiumSubscription: s,
                              modificationsDisabled: o,
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function g8(e) {
    let t,
        { slot: i, isLast: n, isCancelable: s, isCanceled: l, premiumSubscription: r, modificationsDisabled: a } = e,
        o = N.useRef(null),
        u = N.useMemo(() => (null != i.cooldownEndsAt ? new Date(i.cooldownEndsAt) : null), [i.cooldownEndsAt]);
    t =
        l && null != r
            ? (0, p.jsx)(V.E, {
                  variant: "text-sm/medium",
                  color: "text-subtle",
                  children: g.intl.format(g.t.Z4ULRD, { date: r.currentPeriodEnd }),
              })
            : i.isOnCooldown() && null != u
              ? (0, p.jsx)(gr, { cooldown: u.getTime() })
              : (0, p.jsx)(V.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: g.intl.string(g.t["2mcafz"]),
                });
    let d = s || l;
    return (0, p.jsxs)("div", {
        className: ew()(g4.iq, { [g4.Mt]: n }),
        children: [
            (0, p.jsxs)("div", {
                className: g4.kd,
                children: [(0, p.jsx)("img", { alt: "", className: g4.bB, src: g1 }), t],
            }),
            d &&
                (0, p.jsx)(P.Y, {
                    targetElementRef: o,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, p.jsxs)(G.W, {
                            navId: "unapplied-boost-actions",
                            "aria-label": g.intl.string(g.t.ogxXGq),
                            onSelect: void 0,
                            onClose: t,
                            children: [
                                s &&
                                    (0, p.jsx)(U.Dr, {
                                        id: "cancel-boost",
                                        label: g.intl.string(g.t.twFU3R),
                                        color: "danger",
                                        disabled: a,
                                        subtext: a ? g.intl.string(g.t.mOWsF1) : void 0,
                                        action: () => {
                                            t(),
                                                (0, _.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, p.jsx)(gk.default, { ...e, guildBoostSlot: i }),
                                                );
                                        },
                                    }),
                                l &&
                                    (0, p.jsx)(U.Dr, {
                                        id: "uncancel-boost",
                                        label: g.intl.string(g.t["2glQNp"]),
                                        disabled: a,
                                        subtext: a ? g.intl.string(g.t.mOWsF1) : void 0,
                                        action: () => {
                                            t(),
                                                (0, _.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, p.jsx)(gw.default, { ...e, guildBoostSlotId: i.id }),
                                                );
                                        },
                                    }),
                            ],
                        });
                    },
                    align: "right",
                    position: "bottom",
                    children: (e) =>
                        (0, p.jsx)(M.D, {
                            innerRef: o,
                            "aria-label": g.intl.string(g.t["UKOtz+"]),
                            className: g4.Mj,
                            ...e,
                            children: (0, p.jsx)(gq.j, { size: "xs", color: w.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                        }),
                }),
        ],
    });
}
var g5 = i(800955);
function g9(e) {
    let {
            guildBoostSlots: t,
            guildBoostSlotsByGuildId: i,
            premiumSubscription: n,
            pausedAppliedGuildBoosts: s,
            fractionalPremiumState: l,
        } = e,
        r = ta.A.getArticleURL(q.MVz.GUILD_BOOSTING_FAQ),
        a = n?.isPaused === !0 && l !== sf.xc.FP_SUB_PAUSED,
        o = t.some((e) => null == e.premiumGuildSubscription),
        u = a && s.length > 0,
        d = a ? u : t.some((e) => null != e.premiumGuildSubscription);
    return o || d
        ? (0, p.jsxs)("div", {
              className: g5.i,
              children: [
                  (0, p.jsxs)("div", {
                      className: g5.b,
                      children: [
                          (0, p.jsx)(eA.D, { variant: "heading-md/semibold", children: g.intl.string(g.t.W5rDjW) }),
                          (0, p.jsx)(V.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: g.intl.format(g.t.SpDz1x, { helpdeskArticle: r }),
                          }),
                      ],
                  }),
                  (0, p.jsx)(g6, {
                      guildBoostSlots: i,
                      premiumSubscription: n,
                      pausedAppliedGuildBoosts: s,
                      isPaused: a,
                  }),
                  (0, p.jsx)(g7, { guildBoostSlots: t, fractionalPremiumState: l }),
              ],
          })
        : null;
}
var me = i(917064),
    mt = i(598259);
function mi() {
    return (0, p.jsxs)("div", {
        className: mt.iE,
        children: [
            (0, p.jsx)(eA.D, { variant: "heading-xl/normal", children: g.intl.string(g.t.IzKs3o) }),
            (0, p.jsx)("div", {
                className: mt.kR,
                children: me.s.map((e, t) => {
                    let i = e.icon;
                    return (0, p.jsxs)(
                        "div",
                        {
                            className: mt.Nr,
                            children: [
                                (0, p.jsx)(i, { className: mt.Kk }),
                                (0, p.jsx)(V.E, {
                                    className: mt.h_,
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
var mn = i(232122),
    ms = i(420469);
function ml() {
    let [e, t] = N.useState(null),
        [i, n] = N.useState(null);
    return (0, p.jsxs)("div", {
        className: ms.iE,
        children: [
            (0, p.jsx)(eA.D, { variant: "heading-xl/normal", children: g.intl.string(g.t.HPJ6Nj) }),
            (0, p.jsx)("ul", {
                className: ms.p_,
                children: mn.m.map((s, l) => {
                    let r = e === l,
                        a = i === l,
                        o = r || a ? "text-strong" : "text-muted";
                    return (0, p.jsxs)(
                        M.D,
                        {
                            tag: "li",
                            className: ew()(ms.Aw, { [ms.$K]: r }),
                            onClick: () => t((e) => (e === l ? null : l)),
                            onMouseEnter: () => n(l),
                            onMouseLeave: () => n(null),
                            children: [
                                (0, p.jsxs)("div", {
                                    className: ms.k7,
                                    children: [
                                        (0, p.jsx)(V.E, {
                                            className: ms.b1,
                                            color: o,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: s.getQuestion(),
                                        }),
                                        (0, p.jsx)(k.a, {
                                            size: "sm",
                                            color: w.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: ms.q4,
                                            style: { transform: r ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                r &&
                                    (0, p.jsx)(V.E, {
                                        className: ms.ZF,
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
var mr = i(182859),
    ma = i(853513),
    mo = i(849744);
function mu() {
    let e = ta.A.getArticleURL(q.MVz.GUILD_SUBSCRIPTIONS);
    return (0, p.jsxs)("div", {
        className: mo.wx,
        children: [
            (0, p.jsxs)("div", {
                className: mo.Qs,
                children: [
                    (0, p.jsxs)("div", {
                        className: mo.B5,
                        children: [
                            (0, p.jsx)("img", { alt: "", className: mo.F8, src: "/assets/263e4cc9043cab70.svg" }),
                            (0, p.jsx)(eA.D, {
                                variant: "heading-xl/normal",
                                children: g.intl.string(ma.default.hjvcLO),
                            }),
                        ],
                    }),
                    (0, p.jsx)(V.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: g.intl.format(g.t.TUHyoA, { helpdeskArticle: e }),
                    }),
                ],
            }),
            (0, p.jsx)(mr.A, {
                variant: "member",
                className: mo.iO,
                analyticsLocation: {
                    page: q.liQ.GUILD_BOOSTING_USER_SETTINGS,
                    section: q.JJy.HERO,
                    object: q.ZSU.CARD,
                },
                videoPlacement: "settings_header",
            }),
        ],
    });
}
var md = i(315629),
    mc = i(397384);
function mg() {
    let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser());
    if (null == e || oK.Ay.hasFreeBoosts(e)) return null;
    let t = ta.A.getArticleURL(q.MVz.GUILD_BOOSTING_FAQ);
    return (0, p.jsxs)(md.h, {
        color: "nitro-pink",
        className: mc.vK,
        children: [
            (0, p.jsxs)("div", {
                className: mc.nw,
                children: [
                    (0, p.jsx)("img", { alt: "", className: mc.q3, src: g1 }),
                    (0, p.jsxs)("div", {
                        className: mc.Tm,
                        children: [
                            (0, p.jsx)(V.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: g.intl.format(g.t.Idh1Vs, { count: sf.M4, boostCount: sf.M4 }),
                            }),
                            (0, p.jsxs)("div", {
                                className: mc.xv,
                                children: [
                                    (0, p.jsx)(oV.t, { className: mc.nE }),
                                    (0, p.jsx)(V.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: g.intl.format(g.t["6UAu+f"], {
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
            (0, p.jsx)(eh.$, {
                variant: "expressive",
                size: "sm",
                icon: oV.t,
                text: g.intl.string(g.t["8x0jKT"]),
                onClick: gF.e,
            }),
        ],
    });
}
var mm = i(942300);
function mA() {
    let e = (0, O.bG)([c7.A], () => c7.A.affinities),
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
              className: mm.i,
              children: [
                  (0, p.jsx)(eA.D, { variant: "heading-md/semibold", children: g.intl.string(g.t.r90Wgo) }),
                  (0, p.jsx)("div", { className: mm.k, children: i.map((e) => (0, p.jsx)(g$, { guildId: e }, e)) }),
              ],
          });
}
var mh = i(901851);
function mE(e) {
    let { count: t, disabledReason: n } = e,
        s = ta.A.getArticleURL(q.MVz.GUILD_BOOSTING_FAQ);
    return (0, p.jsxs)(md.h, {
        color: "nitro-pink",
        className: mh.vK,
        children: [
            (0, p.jsxs)("div", {
                className: mh.nw,
                children: [
                    (0, p.jsxs)("div", {
                        className: mh.MD,
                        children: [
                            (0, p.jsx)("img", { alt: "", className: mh.F8, src: g1 }),
                            (0, p.jsx)("div", {
                                className: ew()(mh.qS, "theme-dark"),
                                children: (0, p.jsx)("span", { className: mh.Vv, children: t }),
                            }),
                        ],
                    }),
                    (0, p.jsxs)("div", {
                        className: mh.Tm,
                        children: [
                            (0, p.jsx)(V.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: g.intl.format(g.t.KewnLu, { count: t, boostCount: t }),
                            }),
                            (0, p.jsxs)("div", {
                                className: mh.xv,
                                children: [
                                    (0, p.jsx)(oV.t, { className: mh.nE }),
                                    (0, p.jsx)(V.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: g.intl.format(g.t["6UAu+f"], {
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
            (0, p.jsx)(gy.A, {
                shouldShow: null != n,
                text: n ?? "",
                "aria-label": n,
                children: (e) =>
                    (0, p.jsx)(eh.$, {
                        ...e,
                        variant: "primary",
                        size: "sm",
                        icon: cy._,
                        text: g.intl.string(g.t.BMx1iy),
                        disabled: null != n,
                        onClick: () => {
                            (0, _.openModalLazy)(async () => {
                                let { default: e } = await Promise.resolve().then(i.bind(i, 770101));
                                return (t) =>
                                    (0, p.jsx)(e, {
                                        ...t,
                                        onSelectGuild: (e) => {
                                            t.onClose(),
                                                (0, gR.g)({
                                                    analyticsLocations: [],
                                                    analyticsLocation: {
                                                        page: q.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                                        section: q.JJy.SETTINGS_PREMIUM,
                                                        object: q.ZSU.BUTTON_CTA,
                                                        objectType: q.AnalyticsObjectTypes.BUY,
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
function mT(e) {
    let { premiumSubscription: t } = e,
        i = (0, O.bG)([c8.A], () => c8.A.boostSlots),
        n = N.useMemo(() => Object.values(i), [i]),
        s = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
        l = (0, O.bG)([c7.A], () => c7.A.affinities),
        r = (0, O.bG)([K.Ay], () => K.Ay.getFlattenedGuildIds()),
        a = l.length > 0 || r.length > 0,
        o = N.useMemo(() => n.filter((e) => null != e.premiumGuildSubscription), [n]).length,
        u = (0, O.bG)([cP.A], () => cP.A.getCurrentUserAppliedBoosts()),
        { fractionalState: d } = (0, cG.A)({ forceFetch: !0 }),
        c = s?.isPremiumGroupMember(),
        m = t?.isPausedOrPausePending === !0 && d === sf.xc.NONE,
        A = N.useMemo(() => n.some((e) => null == e.premiumGuildSubscription && e.isAvailable()), [n]),
        h = m ? g.intl.string(g.t.mOWsF1) : A ? void 0 : g.intl.string(g.t.xr4m5B),
        E = N.useMemo(() => {
            if (null == t) return 0;
            let e = oK.Ay.getNumIncludedPremiumGuildSubscriptionSlots(t.planId);
            return 0 === e || e !== n.length ? 0 : Math.max(0, e - o);
        }, [t, n.length, o]);
    return (0, p.jsxs)("div", {
        className: gK.GO,
        children: [
            (0, p.jsx)(dL.kb, { className: gK.ek }),
            (0, p.jsx)(mu, {}),
            (0, p.jsx)(mg, {}),
            E > 0 && (0, p.jsx)(mE, { count: E, disabledReason: h }),
            c && (0, p.jsx)(c4.A, {}),
            !a && (0, p.jsx)(gj, {}),
            (0, p.jsxs)("div", {
                className: gK.C_,
                children: [
                    (0, p.jsx)(g9, {
                        guildBoostSlots: n,
                        guildBoostSlotsByGuildId: i,
                        premiumSubscription: t,
                        pausedAppliedGuildBoosts: u,
                        fractionalPremiumState: d,
                    }),
                    (0, p.jsx)(mA, {}),
                    (0, p.jsx)(gZ.A, { hideHeading: !0, hideTier0: !0 }),
                    (0, p.jsx)(mi, {}),
                    (0, p.jsx)(ml, {}),
                ],
            }),
        ],
    });
}
var mx = i(752606);
let mS = (0, o.E2)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_SETTING, {
        Component: function () {
            let e = cD.useConfig({ location: "UserSettingsPremiumGuildSubscriptions" }).enabled;
            N.useEffect(() => {
                n6.h.wait(() => {
                    uq.hP(), uq.$o(), (0, cO.CD)(), (0, cR.zS)(null, null, q.tF5.DISCOVERY), (0, cO.tO)(!0);
                });
            }, []);
            let { hasFetchedSubscriptions: t, premiumSubscription: i } = (0, O.cf)([dx.A], () => ({
                    hasFetchedSubscriptions: dx.A.hasFetchedSubscriptions(),
                    premiumSubscription: dx.A.getPremiumTypeSubscription(),
                })),
                n = (0, cL.Y)(),
                s = (0, O.bG)([dT.A], () => dT.A.hasFetchedPaymentSources),
                l = (0, O.bG)([cP.A], () => cP.A.isFetchingCurrentUserAppliedBoosts),
                r = !t || !n || !s || l,
                [a, o] = N.useState(!1);
            return (r || a || o(!0), r && !a)
                ? (0, p.jsx)("div", { className: ew()(mx.kL, mx.Lq), children: (0, p.jsx)(uK.y, {}) })
                : (0, p.jsxs)("div", {
                      className: mx.kL,
                      children: [
                          (0, p.jsx)("div", { className: mx.Tp }),
                          (0, p.jsx)("div", {
                              className: mx.Qs,
                              children: e
                                  ? (0, p.jsx)(mT, { premiumSubscription: i })
                                  : (0, p.jsx)(gW, { premiumSubscription: i }),
                          }),
                      ],
                  });
        },
        useSearchTerms: () => [g.intl.string(g.t["+CbP2v"]), g.intl.string(g.t.Nn1lJy)],
    }),
    mp = (0, o.zZ)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_CATEGORY, { buildLayout: () => [mS] }),
    mN = (0, o.t_)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        useTitle: () => g.intl.string(g.t["+CbP2v"]),
        buildLayout: () => [mp],
    }),
    mf = (0, o.i4)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["+CbP2v"]),
        icon: cy._,
        buildLayout: () => [mN],
    });
var m_ = i(153659),
    mC = i(155984),
    mI = i(262077),
    mb = i(696986),
    mv = i(819411);
function mj(e) {
    let { onClickManageSubscription: t, count: i } = e;
    return (0, p.jsxs)("div", {
        children: [
            (0, p.jsx)(eA.D, { variant: "heading-md/bold", children: g.intl.string(g.t["KzCF/6"]) }),
            (0, p.jsx)(mb.h, { size: 4 }),
            (0, p.jsx)(V.E, { variant: "text-md/normal", className: mv.yV, children: g.intl.string(g.t["3D7qCu"]) }),
            (0, p.jsx)(mb.h, { size: 24 }),
            (0, p.jsxs)("div", {
                className: mv.Nr,
                children: [
                    (0, p.jsx)("img", { src: "/assets/5a420feed295b595.svg", alt: "", className: mv.RI }),
                    (0, p.jsxs)("div", {
                        className: mv.FS,
                        children: [
                            (0, p.jsx)(eA.D, {
                                variant: "heading-xl/semibold",
                                className: mv.wx,
                                children: g.intl.string(g.t["KzCF/6"]),
                            }),
                            (0, p.jsx)(V.E, {
                                variant: "text-md/normal",
                                className: mv.h_,
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
var my = i(872351),
    mO = i(9113),
    mR = i(599941),
    mL = i(384684),
    mD = i(2242);
let mP = [];
var mG = i(912851),
    mU = i(146795);
let mM = (e) => {
    let { label: t, onClick: i, submitting: n } = e;
    return (0, p.jsx)(M.D, {
        onClick: n ? void 0 : i,
        className: mU.x6,
        children: (0, p.jsxs)("div", {
            className: mU.hQ,
            children: [
                n
                    ? (0, p.jsx)(uK.y, { type: uK.y.Type.PULSING_ELLIPSIS, className: mU.__invalid_spinner })
                    : (0, p.jsx)(V.E, { variant: "text-md/medium", className: mU.Pf, children: t }),
                (0, p.jsx)(k.a, { size: "md", color: "currentColor", className: mU.UE }),
            ],
        }),
    });
};
var mV = i(465932),
    mk = i(543767),
    mw = i(420139),
    mF = i(790284),
    mB = i(636194),
    mz = i(624456),
    mY = i(710144),
    mX = i(815332),
    mH = i(817649),
    mK = i(969389);
let mW = (e) => {
    let { transitionState: t, groupListing: i, listing: n, subscription: s, onClose: l } = e,
        r = (0, sp.GV)(),
        { analyticsLocations: a } = (0, nU.Ay)(eM.A.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL),
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
                        return i(!0), await uq.M2(t, e), !0;
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
        m = n.role_benefits.benefits.filter((e) => e.ref_type === mD.bN.CHANNEL),
        A = n.role_benefits.benefits.filter((e) => e.ref_type === mD.bN.INTANGIBLE),
        h = rj()(s.currentPeriodEnd).format("MMMM Do, YYYY"),
        E = g.intl.formatToPlainString(g.t.KsMRP5, {
            numChannels: m.length,
            numAdditionalBenefits: A.length,
            subscriptionEndDate: h,
        });
    return (0, p.jsx)(lR.Modal, {
        transitionState: t,
        "aria-labelledby": r,
        actions: [
            { text: g.intl.string(g.t.EP6EPb), variant: "secondary", onClick: l },
            { variant: "critical-primary", text: g.intl.string(g.t.F6lUDF), onClick: c, loading: d },
        ],
        title: g.intl.string(g.t.O6l5tM),
        subtitle: E,
        onClose: l,
        children: (0, p.jsxs)(R.B, {
            gap: 8,
            children: [
                null != u ? (0, p.jsx)(y.w, { type: "critical", children: u.message }) : null,
                (0, p.jsx)(mH.x, { listingId: n.id, guildId: i.guild_id, className: mK.P }),
            ],
        }),
    });
};
var mZ = i(319225),
    mq = i(746080),
    mQ = i(47685);
let mJ = (e) => {
        let { label: t, value: i, showInfoIcon: n, infoIconTooltipText: s } = e;
        return (0, p.jsxs)("div", {
            className: mQ.L0,
            children: [
                (0, p.jsxs)("div", {
                    className: mQ.a5,
                    children: [
                        (0, p.jsx)(eA.D, { variant: "heading-deprecated-12/semibold", className: mQ.HU, children: t }),
                        n &&
                            (0, p.jsx)(e0.m, {
                                text: s,
                                children: (0, p.jsx)(lN.m, { size: "xs", color: "currentColor", className: mQ.Mo }),
                            }),
                    ],
                }),
                (0, p.jsx)(eA.D, { variant: "heading-xl/semibold", className: mQ.sx, children: i }),
            ],
        });
    },
    m$ = (e) => {
        let { subscription: t } = e,
            { analyticsLocations: i } = (0, nU.Ay)(),
            [n] = (0, mk.YV)({
                subscriptionId: t.id,
                renewal: !0,
                analyticsLocations: i,
                analyticsLocation: eM.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
            }),
            s = (0, O.bG)([dT.A], () => dT.A.hasFetchedPaymentSources);
        return null != n && s
            ? (0, p.jsx)(mw.A, { subscription: t, currentInvoicePreview: n, dropdownClassName: mQ.Nw })
            : (0, p.jsx)(uK.y, {});
    },
    m0 = (e) => {
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
            : (0, p.jsx)(sO.D, {
                  label: g.intl.string(g.t["4neDM+"]),
                  children: (0, p.jsx)("div", {
                      className: mQ.__invalid_rowButtons,
                      children: i
                          ? (0, p.jsx)(eh.$, {
                                variant: "primary",
                                text: g.intl.string(g.t.y3mAE4),
                                onClick: r,
                                loading: n,
                            })
                          : (0, p.jsxs)(p.Fragment, {
                                children: [
                                    !t && !s && (0, p.jsx)(mM, { label: g.intl.string(g.t.FRbWR8), onClick: a }),
                                    (0, p.jsx)(mM, { label: g.intl.string(g.t.Dx0lF7), onClick: l }),
                                ],
                            }),
                  }),
              });
    },
    m1 = (e) => {
        let { subscription: t } = e,
            {
                listing: i,
                groupListing: n,
                guild: s,
                expanded: l,
                handleToggleExpanded: r,
                subscriptionInfo: a,
            } = (function (e) {
                let t = (0, mz.M)(e),
                    i = (0, O.bG)([mB.A], () => mB.A.getSubscriptionListingForPlan(t)),
                    n = (0, O.bG)([mB.A], () =>
                        null != i ? mB.A.getSubscriptionGroupListingForSubscriptionListing(i.id) : null,
                    ),
                    s = (0, O.bG)([H.A], () => H.A.getGuild(n?.guild_id)),
                    [l, r] = N.useState(!1),
                    { fetchSubscriptionsSettings: a } = (0, mR.XE)();
                N.useEffect(() => {
                    l && null != s && null == mB.A.getSubscriptionSettings(s.id) && a(s.id);
                }, [l, s, a]);
                let o =
                    null == i
                        ? void 0
                        : (function (e) {
                              let { subscription: t } = e,
                                  i = rj()(t.currentPeriodEnd).format("M/D/YY"),
                                  n = null != t.price ? (0, u0.$g)(t.price, t.currency) : "",
                                  s = rj()(t.createdAt).format("M/D/YY"),
                                  l = t.status === q.Dmq.CANCELED,
                                  r = t.status === q.Dmq.PAST_DUE,
                                  a = t.hasActiveTrial;
                              return {
                                  memberSince: s,
                                  nextRenewalDate: i,
                                  nextRenewalLabel: l ? g.intl.string(g.t.UAfot2) : g.intl.string(g.t.CVjLcM),
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
            [o, d] = N.useState(!1),
            c = (0, sp.GV)(),
            { analyticsLocations: m } = (0, nU.Ay)(),
            { shouldHideGuildPurchaseEntryPoints: A } = (0, mV.MH)(s?.id),
            h = t?.isPurchasedViaAppleGeneric;
        if (null == n || null == i || null == a) return null;
        let E = async () => {
                try {
                    d(!0),
                        await uq.QP(t, m),
                        (0, mZ.E)({ title: g.intl.string(g.t.oPV2cy), body: g.intl.string(g.t.DdRizV) });
                } finally {
                    d(!1);
                }
            },
            {
                isCancelled: T,
                isPastDue: x,
                subscriptionPrice: S,
                memberSince: f,
                nextRenewalDate: C,
                nextRenewalLabel: I,
                isTrial: b,
            } = a,
            v = i.soft_deleted || null == s || h;
        return (0, p.jsxs)("div", {
            className: mQ.kL,
            children: [
                (0, p.jsx)(mY.A, {
                    onClick: r,
                    className: mQ.N1,
                    children: (e) => {
                        let { areaRef: t, handleStopPropagation: n } = e;
                        return (0, p.jsxs)(p.Fragment, {
                            children: [
                                null != s && (0, p.jsx)(gc.Ay, { guild: s, active: !0, size: gc.Ay.Sizes.MEDIUM }),
                                (0, p.jsxs)("div", {
                                    className: mQ.if,
                                    children: [
                                        (0, p.jsx)(V.E, {
                                            variant: "text-md/medium",
                                            className: mQ.J5,
                                            children: null != s ? s.name : g.intl.string(g.t["He+cmd"]),
                                        }),
                                        (0, p.jsxs)("div", {
                                            className: mQ.xp,
                                            children: [
                                                (0, p.jsx)(V.E, {
                                                    variant: "text-sm/normal",
                                                    className: mQ.KR,
                                                    children: i.name,
                                                }),
                                                T
                                                    ? (0, p.jsx)(n5.Lp, { text: g.intl.string(g.t["7uFZGt"]) })
                                                    : b
                                                      ? (0, p.jsx)(n5.Lp, {
                                                            text: g.intl.string(g.t["6anton"]),
                                                            color: w.A.unsafe_rawColors.BRAND_500.css,
                                                        })
                                                      : x
                                                        ? (0, p.jsx)(e0.m, {
                                                              text: g.intl.string(g.t.eSuJE2),
                                                              children: (0, p.jsx)("div", {
                                                                  children: (0, p.jsx)(n5.Lp, {
                                                                      className: mQ.qc,
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
                                                              children: (0, p.jsx)(n5.Lp, {
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
                                (0, p.jsx)(M.D, {
                                    onClick: n(r),
                                    "aria-label": g.intl.string(g.t.e5eQOy),
                                    "aria-controls": c,
                                    "aria-expanded": l,
                                    focusProps: { ringTarget: t },
                                    children: (0, p.jsx)(k.a, {
                                        size: "md",
                                        color: "currentColor",
                                        className: ew()(mQ.D6, { [mQ.S7]: l }),
                                    }),
                                }),
                            ],
                        });
                    },
                }),
                l
                    ? (0, p.jsxs)("div", {
                          id: c,
                          children: [
                              (0, p.jsx)("div", { className: mQ.yF }),
                              (0, p.jsx)(mX.A, { groupListingId: n.id, subscription: t, className: mQ.kE }),
                              (0, p.jsxs)("div", {
                                  className: mQ.Zx,
                                  children: [
                                      (0, p.jsx)(mJ, { label: I, value: C }),
                                      (0, p.jsx)(mJ, {
                                          label: g.intl.string(g.t.dltUMH),
                                          value: S,
                                          showInfoIcon: b,
                                          infoIconTooltipText: b ? g.intl.string(g.t["/q6fpa"]) : void 0,
                                      }),
                                      (0, p.jsx)(mJ, { label: g.intl.string(g.t.AOcwWB), value: f }),
                                  ],
                              }),
                              (0, p.jsx)(mb.h, { size: 16 }),
                              !T &&
                                  !h &&
                                  (0, p.jsx)(sO.D, {
                                      label: g.intl.string(g.t.wmMFvA),
                                      children: (0, p.jsx)(m$, { subscription: t }),
                                  }),
                              !v &&
                                  (0, p.jsx)(m0, {
                                      isTrial: b,
                                      isCancelled: T,
                                      isResubscribing: o,
                                      shouldHideRoleSubscriptionEntryPoints: A,
                                      onCancelSubscriptionClick: () => {
                                          if (null != s) {
                                              var e;
                                              (e = { groupListing: n, listing: i, subscription: t }),
                                                  (0, _.openModal)((t) => (0, p.jsx)(mW, { ...t, ...e }));
                                          }
                                      },
                                      onChangePlanClick: () => {
                                          null != s &&
                                              ((0, sR.pX)(q.BVt.CHANNEL(s.id, mq.VV.ROLE_SUBSCRIPTIONS)),
                                              (0, sT.default)(),
                                              mG.A.show(
                                                  q.kqX.BACK_TO_PREVIOUS_SCREEN,
                                                  void 0,
                                                  g.intl.string(g.t.DvbaM4),
                                                  () => {
                                                      mF.A.setState({ subsection: nv.nR }),
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
var m2 = i(170272);
let m3 = (e) => {
    let { onGoBack: t } = e,
        i = (function () {
            let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t =
                    (0, O.bG)([mL.A], () =>
                        (function () {
                            let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [mL.A],
                                t = e.getGuildIdsWithPurchasableRoles(),
                                i = !1;
                            return (t.forEach((t) => {
                                e.getUserSubscriptionRoles(t).size > 0 && (i = !0);
                            }),
                            i)
                                ? mD.M_.SUBSCRIBED
                                : 0 === t.size
                                  ? mD.M_.NONE
                                  : mD.M_.IN_SUBSCRIPTION_SERVER;
                        })([mL.A]),
                    ) === mD.M_.SUBSCRIBED,
                i = (0, O.bG)([dx.A], () => dx.A.getActiveGuildSubscriptions()),
                n = N.useRef(!1);
            return (
                N.useEffect(() => {
                    (function (e) {
                        let { ensureFresh: t, hasFetched: i, hasRoleSubscriptions: n } = e,
                            s = dx.A.getActiveGuildSubscriptions();
                        return (
                            ((s?.length ?? 0) === 0 && !!n) || (!!t && !i) || (!i && !dx.A.hasFetchedSubscriptions())
                        );
                    })({ ensureFresh: e, hasRoleSubscriptions: t, hasFetched: n.current }) &&
                        ((n.current = !0), uq.hP());
                }, [e, t]),
                i ?? mP
            );
        })(),
        { loading: n } = (0, mR.eb)(i);
    return ((0, mO.A)(u3.Fr ? "role-subscriptions-user-setting" : void 0), n)
        ? (0, p.jsx)(uK.y, {})
        : 0 === i.length
          ? null
          : (0, p.jsxs)("div", {
                children: [
                    (0, p.jsx)(eh.$, { text: g.intl.string(g.t.hqyhKQ), icon: my.z, variant: "secondary", onClick: t }),
                    (0, p.jsx)(mb.h, { size: 10 }),
                    (0, p.jsx)(ia.n, {
                        label: g.intl.string(g.t["KzCF/6"]),
                        description: g.intl.string(g.t["Y+ucR7"]),
                        children: (0, p.jsx)("div", {
                            className: m2.A,
                            children: i.map((e) => (0, p.jsx)(m1, { subscription: e }, e.id)),
                        }),
                    }),
                ],
            });
};
var m6 = i(327479),
    m4 = i(334335);
function m7(e) {
    let { onClickManageSubscription: t, count: i } = e;
    return (0, p.jsxs)("div", {
        children: [
            (0, p.jsx)(eA.D, { variant: "heading-md/bold", children: g.intl.string(g.t["48ywCu"]) }),
            (0, p.jsx)(mb.h, { size: 4 }),
            (0, p.jsx)(V.E, { variant: "text-md/normal", className: m4.yV, children: g.intl.string(g.t.VWxmSo) }),
            (0, p.jsx)(mb.h, { size: 24 }),
            (0, p.jsxs)("div", {
                className: m4.Nr,
                children: [
                    (0, p.jsx)("img", { src: "/assets/d6bcd13fb6c85425.svg", alt: "", className: m4._e }),
                    (0, p.jsxs)("div", {
                        className: m4.FS,
                        children: [
                            (0, p.jsx)(eA.D, {
                                variant: "heading-xl/semibold",
                                className: m4.wx,
                                children: g.intl.string(g.t["48ywCu"]),
                            }),
                            (0, p.jsx)(V.E, {
                                variant: "text-md/normal",
                                className: m4.h_,
                                children: g.intl.format(g.t["/esXLj"], { numSubscriptions: i }),
                            }),
                        ],
                    }),
                    (0, p.jsx)(m6.A, { onClick: t, text: g.intl.string(g.t["z5YcJ+"]) }),
                ],
            }),
        ],
    });
}
var m8 = i(548411),
    m5 = i(417098),
    m9 = i(143582),
    Ae = i(915043),
    At = i(920087);
function Ai(e) {
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
    return (0, p.jsxs)("div", {
        className: ew()(At.iE, t),
        children: [
            (0, p.jsx)("div", { className: ew()(At.wx, n), children: i }),
            l && (0, p.jsx)("div", { className: At.Qs, children: s }),
        ],
    });
}
var An = i(885996),
    As = i(144165),
    Al = i(664121),
    Ar = i(950305),
    Aa = i(943775),
    Ao = i(123791),
    Au = i(900797),
    Ad = i(632510);
let Ac = N.createContext({ isOpen: !1, toggleOpen: () => {} });
function Ag(e) {
    let { children: t } = e,
        [i, n] = N.useReducer((e) => !e, !1),
        s = N.useMemo(() => ({ isOpen: i, toggleOpen: n }), [i]);
    return (0, p.jsx)(Ac.Provider, { value: s, children: t(i) });
}
Ag.Toggle = function (e) {
    let { className: t, text: i } = e,
        { isOpen: n, toggleOpen: s } = N.useContext(Ac),
        l = n ? Au.t : k.a,
        r = null != i ? i : n ? g.intl.string(g.t.fgq1gs) : g.intl.string(g.t.XJuakA);
    return (0, p.jsxs)(M.D, {
        className: ew()(Ad.L, t),
        onClick: s,
        children: [
            (0, p.jsx)(V.E, { variant: "heading-sm/semibold", tag: "div", color: "currentColor", children: r }),
            (0, p.jsx)(l, { size: "sm", color: "currentColor" }),
        ],
    });
};
var Am = i(627363),
    AA = i(243217),
    Ah = i(328968),
    AE = i(163437),
    AT = i(3432);
function Ax(e) {
    return e.toLocaleDateString(void 0, { dateStyle: "long" });
}
var AS = i(184451),
    Ap = (((s = {})[(s.LOADING = 0)] = "LOADING"), (s[(s.DONE = 1)] = "DONE"), (s[(s.ERROR = 2)] = "ERROR"), s);
function AN(e) {
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
            renewalPlan: E,
        } = (0, O.cf)([cr.A, ca.A, Ah.A, H.A], () => {
            let e,
                i = cr.A.get(r),
                n = null != i ? ca.A.get(i.skuId) : void 0,
                a = n?.applicationId,
                o = null != i ? Ah.A.getForSKU(i.skuId) : null,
                u = null != o && (0, AE.PJ)(o.skuFlags),
                d = u && null != s ? H.A.getGuild(s) : void 0,
                c = (0, AE.Uo)(t, n),
                g = u && null != s && null == d;
            if (!1 === c && null != l && l.items.length > 0) {
                let t = l.items[0];
                e = cr.A.get(t.planId) ?? void 0;
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
        { data: T } = (0, Am.YY)(a),
        x = N.useMemo(() => (null != T ? (0, Aa.A)(T, 100) : null), [T]),
        S = m?.deleted ?? !1,
        f = null != m && (0, AE.Se)(m),
        _ = t.status === q.Dmq.PAST_DUE,
        { analyticsLocations: C } = (0, nU.Ay)(),
        [I] = (0, mk.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: C,
            analyticsLocation: eM.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        b = Ax(t.currentPeriodEnd),
        v = 0 === n;
    return (0, p.jsxs)(Ai, {
        headerClassName: AS.dL,
        header:
            !1 === v
                ? (0, p.jsxs)(p.Fragment, {
                      children: [
                          (0, p.jsxs)("div", {
                              className: AS.VW,
                              children: [
                                  null != x &&
                                      (0, p.jsx)(As._, { src: x.href, imageClassName: AS.Z2, width: 40, height: 40 }),
                                  (0, p.jsxs)("div", {
                                      className: AS.aF,
                                      children: [
                                          (0, p.jsx)(eA.D, {
                                              variant: "heading-md/semibold",
                                              lineClamp: 1,
                                              children: T?.name ?? g.intl.string(g.t["7kqy7W"]),
                                          }),
                                          (0, p.jsx)(V.E, {
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
                              className: AS.Pz,
                              children:
                                  null != T &&
                                  null != u &&
                                  null != m &&
                                  (0, p.jsx)(Ab, {
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
                : (0, p.jsx)(uK.y, { type: uK.t.PULSING_ELLIPSIS }),
        children: [
            A &&
                (0, p.jsx)(AI, {
                    type: "warning",
                    title: f
                        ? g.intl.formatToPlainString(g.t.QOnM1y, { subscriptionPeriodEnd: b })
                        : g.intl.formatToPlainString(g.t.HOaZu8, { subscriptionPeriodEnd: b }),
                }),
            !A && h && (0, p.jsx)(AI, { type: "warning", title: g.intl.string(g.t.SmSP8Q) }),
            _ && (0, p.jsx)(AI, { type: "danger", title: g.intl.string(g.t.fvOqBo) }),
            (0, p.jsxs)("div", {
                className: AS.zH,
                children: [
                    (0, p.jsx)(AC, {
                        title: g.intl.string(g.t["5D/KEH"]),
                        content: d
                            ? (0, p.jsxs)(p.Fragment, {
                                  children: [
                                      (0, p.jsxs)("span", {
                                          className: AS.yW,
                                          children: [(0, p.jsx)(Al.R, { size: "xs" }), g.intl.string(g.t.QjL3vn)],
                                      }),
                                      null != c &&
                                          (0, p.jsxs)("span", {
                                              className: AS._t,
                                              children: [
                                                  (0, p.jsx)(V.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: g.intl.format(g.t["7ZD8p1"], { guildName: c.name }),
                                                  }),
                                                  (0, p.jsx)(gc.Ay, { guild: c, size: gc.Ay.Sizes.MINI }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, p.jsxs)("span", {
                                  className: AS.yW,
                                  children: [(0, p.jsx)(Ar.n, { size: "xs" }), g.intl.string(g.t["6anEVv"])],
                              }),
                    }),
                    (0, p.jsx)(Af, { invoicePreview: I, subscriptionPlan: o }),
                    (0, p.jsx)(AC, {
                        title: g.intl.string(g.t.dnUzb6),
                        content: Ax(t.createdAt ?? t.currentPeriodStart),
                    }),
                    (0, p.jsx)(A_, { isCancelled: A, subscriptionPeriodEnd: b, renewalPlan: E }),
                ],
            }),
            (0, p.jsx)(Aj, {
                subscription: t,
                currentInvoicePreview: I,
                loadingState: n,
                isDeleted: S,
                isCancelled: A,
            }),
            null != T &&
                u?.benefits != null &&
                u.benefits.length > 0 &&
                (0, p.jsx)(Av, { appId: T.id, listingBenefits: u.benefits }),
        ],
    });
}
function Af(e) {
    let { subscriptionPlan: t, invoicePreview: i } = e;
    if (null == t) return (0, p.jsx)(AC, { title: g.intl.string(g.t.KI7ERx), content: "" });
    let n = (0, u0.CE)((0, u0.$g)(t.price, t.currency), t.interval, t.intervalCount),
        s = i?.findInvoiceItemByPlanId(t.id);
    if (null == s) return (0, p.jsx)(AC, { title: g.intl.string(g.t.KI7ERx), content: n });
    let l = (0, u0.CE)((0, u0.$g)(s.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, p.jsx)(AC, {
        title: g.intl.string(g.t.KI7ERx),
        content: (0, p.jsxs)(p.Fragment, {
            children: [
                (0, p.jsx)(V.E, { variant: "text-sm/semibold", children: l }),
                l !== n &&
                    (0, p.jsx)(e0.m, {
                        text: g.intl.format(g.t["6DoE57"], { listPrice: n }),
                        position: "bottom",
                        children: (0, p.jsx)(V.E, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: (0, p.jsx)("s", { children: n }),
                        }),
                    }),
            ],
        }),
    });
}
function A_(e) {
    let { isCancelled: t, subscriptionPeriodEnd: i, renewalPlan: n } = e;
    if (null != n) {
        let e = (0, u0.CE)((0, u0.$g)(n.price, n.currency), n.interval, n.intervalCount);
        return (0, p.jsx)(AC, {
            title: g.intl.string(g.t.hIhAM3),
            content: (0, p.jsxs)(p.Fragment, {
                children: [
                    (0, p.jsx)(V.E, { variant: "text-sm/medium", children: i }),
                    (0, p.jsx)(V.E, {
                        variant: "text-sm/normal",
                        children: g.intl.format(g.t.MCLbvj, { planName: n.name, price: e }),
                    }),
                ],
            }),
        });
    }
    return (0, p.jsx)(AC, { title: t ? g.intl.string(g.t.enxcAl) : g.intl.string(g.t["Ms+6Zq"]), content: i });
}
function AC(e) {
    let { title: t, content: i } = e;
    return (0, p.jsxs)("div", {
        className: AS.nM,
        children: [
            (0, p.jsx)(V.E, { variant: "text-sm/medium", children: t }),
            (0, p.jsx)(V.E, { variant: "text-sm/medium", className: AS.u4, children: i }),
        ],
    });
}
function AI(e) {
    let { type: t, title: i } = e;
    return (0, p.jsx)(tr.p, {
        messageType: "warning" === t ? tr.Y.WARNING : tr.Y.ERROR,
        className: AS.Xm,
        children: (0, p.jsx)(V.E, { variant: "text-sm/normal", children: i }),
    });
}
function Ab(e) {
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
        c = (0, AE.Se)(s),
        { analyticsLocations: m } = (0, nU.Ay)(),
        [A, h] = N.useState(!1),
        E = (0, Ao.C)(t.id),
        T = (0, O.bG)([ca.A], () => ca.A.getParentSKU(n.skuId), [n.skuId]),
        x = N.useMemo(() => {
            var e, t;
            let i;
            return null == T
                ? []
                : ((e = n.id),
                  (t = E.subscriptions),
                  (i = new Set(T.bundledSkuIds)),
                  t.filter((t) => t.id !== e && i.has(t.skuId)));
        }, [n.id, E, T]),
        S = 0 !== x.length,
        f = async () => {
            try {
                h(!0);
                let { subscription: e } = await (0, uq.QP)(l, m);
                if (null == e) return;
                (0, _.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([i.e("47869"), i.e("52396")]).then(i.bind(i, 115623));
                    return (i) => (0, p.jsx)(t, { ...i, storeListing: n, subscription: AA.A.createFromServer(e) });
                });
            } finally {
                h(!1);
            }
        };
    return (0, p.jsxs)("div", {
        className: AS.fw,
        children: [
            c || (r && a)
                ? null
                : r
                  ? (0, p.jsx)(eh.$, {
                        variant: "secondary",
                        size: "sm",
                        text: g.intl.string(g.t.QtMnkW),
                        onClick: f,
                        loading: A,
                    })
                  : (0, p.jsx)(eh.$, {
                        variant: "secondary",
                        size: "sm",
                        text: g.intl.string(g.t["E8G/tr"]),
                        onClick: () => {
                            (0, _.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([i.e("1426"), i.e("22800")]).then(
                                    i.bind(i, 301139),
                                );
                                return (i) =>
                                    (0, p.jsx)(e, { ...i, application: t, storeListing: n, subscription: l, guild: o });
                            });
                        },
                    }),
            S &&
                null != T &&
                !1 === r &&
                !1 === a &&
                (0, p.jsx)(eh.$, {
                    variant: "primary",
                    size: "sm",
                    text: g.intl.string(g.t.R74ZBR),
                    onClick: () => {
                        d({
                            currentSubscription: l,
                            alternativeListings: x,
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
function Av(e) {
    let { appId: t, listingBenefits: i } = e;
    return (0, p.jsx)(Ag, {
        children: (e) =>
            (0, p.jsxs)("div", {
                className: AS.PX,
                children: [
                    (0, p.jsxs)("div", {
                        className: AS.wV,
                        children: [
                            e && (0, p.jsx)(V.E, { variant: "text-sm/semibold", children: g.intl.string(g.t.mORL67) }),
                            (0, p.jsx)(Ag.Toggle, {
                                className: AS.Bh,
                                text: e ? g.intl.string(g.t.gsbFAw) : g.intl.string(g.t.IwjfxV),
                            }),
                        ],
                    }),
                    e
                        ? i.map((e) => {
                              let { id: i, name: n, description: s, icon: l } = e;
                              return (0, p.jsx)(An.FY, { header: n, icon: (0, AT.N)(t, l), description: s }, i);
                          })
                        : null,
                ],
            }),
    });
}
function Aj(e) {
    let { subscription: t, currentInvoicePreview: i, loadingState: n, isDeleted: s, isCancelled: l } = e;
    return null == i
        ? null
        : 0 === n
          ? (0, p.jsx)("div", {
                className: AS.Ji,
                children: (0, p.jsx)(sO.D, {
                    label: g.intl.string(g.t.azZaZa),
                    children: (0, p.jsx)(uK.y, { type: uK.t.PULSING_ELLIPSIS }),
                }),
            })
          : 2 === n
            ? (0, p.jsx)("div", {
                  className: AS.Ji,
                  children: (0, p.jsxs)(m5.$T, {
                      color: m5.Hv.DANGER,
                      style: { borderRadius: 0 },
                      children: [
                          g.intl.format(g.t.IIHUUF, { subscriptionId: t.id }),
                          (0, p.jsx)("br", {}),
                          g.intl.format(g.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                      ],
                  }),
              })
            : (0, p.jsx)("div", {
                  className: AS.Ji,
                  children: (0, p.jsx)(sO.D, {
                      label: g.intl.string(g.t.azZaZa),
                      children: (0, p.jsx)(mw.A, { subscription: t, currentInvoicePreview: i, disabled: s || l }),
                  }),
              });
}
var Ay = (((l = {}).HOME = "HOME"), (l.SWITCH_APP_PLANS = "SWITCH_APP_PLANS"), l);
i(938796);
var AO = i(38405);
let AR = (0, O.UT)(cr.A, {
    getQueryId: q.fic.SUBSCRIPTION_PLANS,
    get: (e) => {
        if (null == e) return null;
        let t = cr.A.getForSKU(e);
        return 0 === t.length ? null : t;
    },
    load: (e) => (
        null == e && AO.A.addBreadcrumb({ message: "Error loading subscription plans: skuId is null" }),
        null != e ? (0, cR.ur)(e).then(() => {}) : Promise.reject()
    ),
});
var AL = i(240248),
    AD = i(237218),
    AP = i(988325);
function AG(e) {
    let { children: t, lineClamp: i = 2, ...n } = e,
        [s, l] = N.useState(!1),
        [r, a] = N.useState(null),
        o =
            null != r &&
            (0, p.jsx)("button", {
                className: AP.x6,
                onClick: () => l((e) => !e),
                children: (0, p.jsxs)(V.E, {
                    className: AP.B0,
                    variant: "text-sm/medium",
                    color: "text-brand",
                    children: [
                        s ? g.intl.string(g.t["JQX/Pb"]) : g.intl.string(g.t.Fbrd8J),
                        s
                            ? (0, p.jsx)(Au.t, { color: w.A.colors.TEXT_BRAND, size: "xs" })
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
        null != r && (m = s ? `${r.expandedHeight}px` : `${r.truncatedHeight}px`),
        (0, p.jsxs)("div", {
            children: [
                (0, p.jsx)(V.E, {
                    ...n,
                    className: AP.Qs,
                    lineClamp: s ? void 0 : i,
                    ref: d,
                    style: { height: m },
                    children: t,
                }),
                o,
            ],
        })
    );
}
var AU = i(827991);
function AM(e) {
    let { cta: t, storeListing: i, className: n } = e,
        { applicationId: s, benefits: l, description: r } = i,
        a = N.useMemo(() => (null == i.thumbnail ? null : (0, AD.t)(s, i.thumbnail, 256)), [s, i.thumbnail]),
        { data: o } = AR(i.skuId),
        u = N.useMemo(() => {
            if (null == o || 0 === o.length) return null;
            let e = o[0];
            return (0, u0._J)(e);
        }, [o]);
    return null == u
        ? null
        : (0, p.jsxs)(Ai, {
              className: ew()(AU.iE, n),
              header: (0, p.jsxs)(p.Fragment, {
                  children: [
                      (0, p.jsxs)("div", {
                          className: AU.qd,
                          children: [
                              null != a &&
                                  (0, p.jsx)(As._, { src: a.href, imageClassName: AU.rW, width: 48, height: 48 }),
                              (0, p.jsxs)("div", {
                                  children: [
                                      (0, p.jsx)(eA.D, { variant: "heading-md/bold", children: i.summary }),
                                      (0, p.jsx)(V.E, { variant: "text-md/medium", children: u }),
                                  ],
                              }),
                          ],
                      }),
                      t,
                  ],
              }),
              children: [
                  !(0, AL.uJ)(r) &&
                      (0, p.jsx)("div", {
                          className: AU.h_,
                          children: (0, p.jsx)(AG, { variant: "text-sm/medium", children: r }),
                      }),
                  null != l &&
                      l.length > 0 &&
                      (0, p.jsx)("div", {
                          className: AU.PX,
                          children: l.map((e) => {
                              let { id: t, name: i, description: n, icon: l } = e;
                              return (0, p.jsx)(An.FY, { header: i, icon: (0, AT.N)(s, l), description: n }, t);
                          }),
                      }),
              ],
          });
}
var AV = i(185438),
    Ak = i(386011);
function Aw(e) {
    let {
            app: t,
            currentSubscription: i,
            currentListing: n,
            alternativeListings: s,
            navigateToHome: l,
            subscriptionGroup: r,
            renewalSkuId: a,
        } = e,
        o = (0, Aa.A)(t, 100),
        u = (0, AE.PJ)(r.flags),
        d = u ? Al.R : Ar.n,
        c = u ? g.intl.string(g.t["46YF2D"]) : g.intl.string(g.t.fFyGiA),
        m = i.metadata?.application_subscription_guild_id,
        A = (0, O.bG)([H.A], () => (u && null != m ? H.A.getGuild(m) : void 0), [m, u]),
        h = (0, O.bG)([ca.A], () => {
            if (null != a) return ca.A.get(a);
        }, [a]),
        E = Ax(i.currentPeriodEnd);
    return (0, p.jsxs)("div", {
        children: [
            (0, p.jsxs)("div", {
                className: Ak.wx,
                children: [
                    null != o && (0, p.jsx)(As._, { src: o.href, imageClassName: Ak.Z2, width: 48, height: 48 }),
                    (0, p.jsxs)("div", {
                        children: [
                            (0, p.jsx)(eA.D, { variant: "heading-xl/semibold", children: t.name }),
                            (0, p.jsxs)("div", {
                                className: Ak.p4,
                                children: [
                                    (0, p.jsxs)(eA.D, {
                                        variant: "heading-md/normal",
                                        className: Ak.N4,
                                        children: [(0, p.jsx)(d, { size: "xs", color: "currentColor" }), " ", c],
                                    }),
                                    null != A &&
                                        (0, p.jsxs)(p.Fragment, {
                                            children: [
                                                (0, p.jsx)(V.E, { variant: "text-md/normal", children: "\u2022" }),
                                                (0, p.jsxs)("span", {
                                                    className: Ak.vP,
                                                    children: [
                                                        (0, p.jsx)(gc.Ay, { guild: A, size: gc.Ay.Sizes.SMOL }),
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
            (0, p.jsx)(Ag, {
                children: (e) =>
                    (0, p.jsxs)("div", {
                        className: Ak._B,
                        children: [
                            (0, p.jsx)(V.E, { variant: "text-md/normal", children: g.intl.string(g.t["goe+hk"]) }),
                            e &&
                                (0, p.jsxs)(p.Fragment, {
                                    children: [
                                        (0, p.jsx)(V.E, {
                                            variant: "text-md/normal",
                                            children: g.intl.format(g.t["Q8qJ+5"], {}),
                                        }),
                                        (0, p.jsx)(V.E, {
                                            variant: "text-md/normal",
                                            children: g.intl.format(g.t.sqowYz, {}),
                                        }),
                                    ],
                                }),
                            (0, p.jsx)(Ag.Toggle, {
                                text: e ? g.intl.string(g.t["1Rkq/E"]) : g.intl.string(g.t.WsTHkY),
                            }),
                        ],
                    }),
            }),
            (0, p.jsxs)("div", {
                className: Ak.x0,
                children: [
                    (0, p.jsx)(AM, {
                        storeListing: n,
                        className: Ak.o3,
                        cta: (0, p.jsxs)("div", {
                            className: Ak.cJ,
                            children: [
                                (0, p.jsx)(V.E, {
                                    variant: "eyebrow",
                                    color: "text-brand",
                                    children: g.intl.string(g.t.fHIpOY),
                                }),
                                null != h &&
                                    (0, p.jsx)(V.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: g.intl.format(g.t["OQk+jr"], { endDate: E }),
                                    }),
                            ],
                        }),
                    }),
                    s.map((e) =>
                        e.skuId === a
                            ? (0, p.jsx)(
                                  AM,
                                  {
                                      storeListing: e,
                                      cta: (0, p.jsx)(V.E, {
                                          variant: "text-sm/semibold",
                                          color: "text-subtle",
                                          children: g.intl.format(g.t.nn88hB, { startDate: E }),
                                      }),
                                  },
                                  e.id,
                              )
                            : (0, p.jsx)(AF, { storeListing: e, guildId: m, navigateToHome: l }, e.id),
                    ),
                ],
            }),
        ],
    });
}
function AF(e) {
    let { storeListing: t, guildId: i, navigateToHome: n } = e,
        { openModal: s } = (0, AV.A)({
            analyticsLocation: q.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: i,
            disableGuildSelector: !0,
            onComplete: n,
        });
    return (0, p.jsx)(AM, {
        storeListing: t,
        cta: (0, p.jsx)(eh.$, { variant: "primary", size: "sm", text: g.intl.string(g.t["+KwmBt"]), onClick: s }),
    });
}
class AB extends N.PureComponent {
    state = { hasError: !1 };
    static getDerivedStateFromError(e) {
        return { hasError: !0 };
    }
    render() {
        return this.state.hasError
            ? (0, p.jsxs)(m5.$T, {
                  color: m5.Hv.DANGER,
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
function Az(e) {
    let { subscriptions: t, updateHeader: i } = e,
        [n, s] = N.useState({ route: Ay.HOME }),
        { route: l } = n,
        r = () => {
            s({ route: Ay.HOME });
        },
        a = (e) => {
            s({ route: Ay.SWITCH_APP_PLANS, ...e }), i(g.intl.string(g.t.VFqtkP), r);
        },
        [o, u] = N.useState({});
    N.useEffect(() => {
        for (let e of t) {
            let t = e.items[0]?.planId;
            null != t &&
                (u((t) => ({ ...t, [e.id]: Ap.LOADING })),
                (0, m9._R)(t)
                    .then(() => {
                        u((t) => ({ ...t, [e.id]: Ap.DONE }));
                    })
                    .catch(() => {
                        u((t) => ({ ...t, [e.id]: Ap.ERROR }));
                    }));
        }
    }, [t]);
    let { loadState: d } = (0, Ae.E)(),
        c = d !== Ae.mJ.LOADED;
    switch (l) {
        case Ay.HOME:
            return (0, p.jsx)(p.Fragment, {
                children: t.map((e) =>
                    (0, p.jsx)(
                        AB,
                        {
                            subscription: e,
                            children: (0, p.jsx)(AN, {
                                subscription: e,
                                navigateToSwitchPlan: a,
                                loadingState: c ? Ap.LOADING : (o[e.id] ?? Ap.LOADING),
                            }),
                        },
                        e.id,
                    ),
                ),
            });
        case Ay.SWITCH_APP_PLANS:
            let { route: m, ...A } = n;
            return (0, p.jsx)(Aw, { ...A, navigateToHome: r });
        default:
            (0, t6.xb)(l);
    }
}
var AY = i(470464);
function AX(e) {
    let { onGoBack: t } = e,
        i = (0, O.yK)(
            [dx.A],
            () =>
                dx.A.getActiveApplicationSubscriptions()
                    ?.slice()
                    .sort(
                        (e, t) =>
                            (e.createdAt?.getTime() ?? e.currentPeriodStart.getTime()) -
                            (t.createdAt?.getTime() ?? t.currentPeriodStart.getTime()),
                    ) ?? [],
        ),
        [n, s] = N.useState();
    return (
        null == n && (n = (0, p.jsx)(AH, { onBack: t, title: g.intl.string(g.t["DB/m9a"]) })),
        (0, p.jsxs)("div", {
            children: [
                n,
                (0, p.jsx)("div", {
                    className: AY.A,
                    children: (0, p.jsx)(Az, {
                        subscriptions: i,
                        updateHeader: (e, t) => {
                            s(
                                (0, p.jsx)(AH, {
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
function AH(e) {
    let { onBack: t, title: i } = e;
    return (0, p.jsxs)("div", {
        className: AY.D,
        children: [
            (0, p.jsx)(lS.K, {
                "aria-label": g.intl.string(g.t["13/7kX"]),
                icon: () => (0, p.jsx)(m8.Z, { size: "sm" }),
                onClick: t,
                variant: "icon-only",
            }),
            (0, p.jsx)(eA.D, { variant: "heading-lg/semibold", children: i }),
        ],
    });
}
var AK = i(881489),
    AW = i(366999),
    AZ = i(466919),
    Aq = i(441924);
function AQ(e) {
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
        ? ((t = g.intl.string(AZ.default["/S02sx"])), (i = g.intl.string(AZ.default.OPJNST)))
        : n
          ? ((t = g.intl.string(g.t["hT6i/0"])),
            (i = null != a ? g.intl.format(g.t["0Vwb/l"], { activateDate: a }) : null))
          : ((t = g.intl.string(g.t["3G0CTC"])),
            (i = r === sf.xc.FP_SUB_PAUSED ? g.intl.format(g.t.MMvaIG, { resumeDate: l.toDate() }) : null));
    let u = ew()({ [Aq.Hs]: n, [Aq.mT]: !n }),
        d = ew()({ [Aq.CQ]: n, [Aq.ZM]: !n }),
        c = ew()({ [Aq.EM]: !n });
    return (0, p.jsxs)("div", {
        className: Aq.r6,
        children: [
            (0, p.jsxs)("div", {
                className: Aq.Nv,
                children: [
                    (0, p.jsx)(eA.D, { variant: "heading-md/semibold", className: c, children: t }),
                    null !== i && (0, p.jsx)(V.E, { variant: "text-sm/normal", children: i }),
                ],
            }),
            !o &&
                (0, p.jsx)("div", {
                    className: Aq.ZS,
                    children: (0, p.jsx)("div", {
                        className: u,
                        children: (0, p.jsx)(V.E, { variant: "text-sm/semibold", className: d, children: s }),
                    }),
                }),
        ],
    });
}
let AJ = function (e) {
    let { fractionalPremiumInfo: t, className: i, activationDate: n, hasPremiumGroup: s } = e,
        l = (0, oK.kX)(t),
        r = l.length > 0,
        a = (0, AW.Ay)(t.endsAt, AW.yE.SHORT_TIME),
        o = r ? l : a;
    return (0, p.jsx)("div", {
        children: (0, p.jsxs)("div", {
            className: ew()(i, Aq.f8),
            children: [
                (0, p.jsx)("div", {
                    className: Aq.J_,
                    children: (0, p.jsxs)("div", {
                        className: Aq.Bh,
                        children: [
                            (0, p.jsx)("div", {
                                className: Aq.xt,
                                children: (0, p.jsx)(oV.t, { size: "md", color: "white", className: Aq.T8 }),
                            }),
                            (0, p.jsx)("div", {
                                className: Aq.pt,
                                children: (0, p.jsx)(eA.D, {
                                    variant: "heading-md/semibold",
                                    children: g.intl.string(g.t.DFMPWS),
                                }),
                            }),
                            (0, p.jsx)(V.E, {
                                className: Aq.PJ,
                                variant: "text-md/semibold",
                                children: l.length > 0 ? l : g.intl.string(g.t["B66Z+f"]),
                            }),
                        ],
                    }),
                }),
                (0, p.jsx)(AQ, {
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
var A$ = i(868942);
function A0(e) {
    let t,
        {
            user: i,
            planId: n,
            count: s,
            userPremiumSubscription: l,
            unconsumedFractionalPremiumUnits: r = [],
            hasPremiumGroup: a,
        } = e,
        [o, u] = (0, O.yK)([cr.A], () => [cr.A.get(n), null != l ? cr.A.get(l.planId) : null]);
    if (null == o || oK.Ay.getInterval(n).intervalType !== sf.WT.MONTH) return null;
    let d = null != u ? u.skuId : null,
        c = o.skuId === d,
        m = oK.Ay.getDisplayName(n);
    if (a) t = g.intl.string(AZ.default["5asczk"]);
    else if (c && null != l) {
        let e;
        e = new Date(l.status === q.Dmq.PAUSED && null != l.pauseEndsAt ? l.pauseEndsAt : l.currentPeriodEnd);
        let i = (0, oK._e)(e, r);
        t = g.intl.formatToPlainString(g.t["5CNRRA"], { date: i ?? 0 });
    } else t = g.intl.formatToPlainString(g.t.eNXZ5O, { planName: m });
    let A = i.hasFreePremium() || (null != l && l.isPurchasedExternally);
    return (0, p.jsxs)("div", {
        className: Aq.Bh,
        children: [
            (0, p.jsx)("div", {
                className: ew()({
                    [Aq.sr]: o.skuId === sf.pe.TIER_0,
                    [Aq.lP]: o.skuId === sf.pe.TIER_1,
                    [Aq.eb]: o.skuId === sf.pe.TIER_2,
                }),
                children: (0, p.jsx)(oV.t, { size: "md", color: "currentColor", className: Aq.Kk }),
            }),
            (0, p.jsxs)("div", {
                className: Aq.pt,
                children: [
                    (0, p.jsx)(eA.D, {
                        variant: "heading-md/semibold",
                        children: g.intl.format(g.t.LzobT9, { planName: m }),
                    }),
                    !A &&
                        (0, p.jsx)(eA.D, {
                            className: Aq.gj,
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            children: t,
                        }),
                ],
            }),
            (0, p.jsx)(V.E, {
                className: Aq.PJ,
                variant: "text-md/semibold",
                children: g.intl.format(g.t["ess/xl"], { count: s }),
            }),
        ],
    });
}
let A1 = function (e) {
    let { className: t, entitlements: i } = e,
        n = eR()(Array.from(i))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: i, consumed: n } = e;
                return null != t && null != i && !n;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        s = (0, O.yK)([d4.A], () => d4.A.getUnactivatedFractionalPremiumUnits()),
        l = (0, O.bG)([dx.A], () => dx.A.getPremiumSubscription()),
        r = (0, O.bG)([dx.A], () => null == dx.A.getPremiumTypeSubscription()),
        a = Object.keys(n).some((e) => e === sf.gD.PREMIUM_MONTH_TIER_1),
        o = (0, O.bG)([t3.default], () => t3.default.getCurrentUser());
    if (null == o) return null;
    let u = o.isPremiumWithPremiumGroup();
    return (0, p.jsxs)("div", {
        children: [
            (0, p.jsx)("div", {
                className: ew()(t, Aq.xF, Aq.J_),
                children: Object.keys(n).map((e) =>
                    (0, p.jsx)(
                        A0,
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
                (0, p.jsxs)("div", {
                    children: [
                        (0, p.jsx)(V.E, {
                            className: Aq.eT,
                            variant: "text-md/normal",
                            children: g.intl.string(g.t["VNr4+O"]),
                        }),
                        (0, p.jsx)(A$.i, {}),
                    ],
                }),
        ],
    });
};
var A2 = i(50919);
function A3(e) {
    let t,
        { subscription: i, withOverheadSeparator: n } = e,
        { analyticsLocations: s } = (0, nU.Ay)(),
        [l] = (0, mk.YV)({
            subscriptionId: i.id,
            renewal: !0,
            analyticsLocations: s,
            analyticsLocation: eM.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT,
        });
    if (null == l) return null;
    let r = n ? A2.r : A2.a,
        a = l.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, oK.xq)(t);
        });
    if (null == a) return null;
    let o = a.subscriptionPlanId,
        u = cr.A.get(o);
    ty()(null != u, "Missing plan");
    let d = (0, u0.$g)(l.total, l.currency);
    return (
        u.interval === sf.WT.YEAR
            ? (t = g.intl.format(g.t["jPz/39"], {
                  price: d,
                  termsUrl: q.X7G.TERMS,
                  paidURL: q.X7G.PAID_TERMS,
                  privacyUrl: q.X7G.PRIVACY,
              }))
            : u.interval === sf.WT.MONTH &&
              (t =
                  1 === u.intervalCount
                      ? g.intl.format(g.t.m27GpI, {
                            price: d,
                            termsUrl: q.X7G.TERMS,
                            paidURL: q.X7G.PAID_TERMS,
                            privacyUrl: q.X7G.PRIVACY,
                        })
                      : g.intl.format(g.t["9xf5Vx"], {
                            price: d,
                            termsUrl: q.X7G.TERMS,
                            paidURL: q.X7G.PAID_TERMS,
                            privacyUrl: q.X7G.PRIVACY,
                            intervalCount: u.intervalCount,
                        })),
        (0, p.jsx)(V.E, { color: "text-muted", className: r, variant: "text-xs/normal", children: t })
    );
}
function A6(e) {
    let { subscription: t, withOverheadSeparator: i } = e;
    return t.status === q.Dmq.CANCELED || t.isPurchasedExternally
        ? null
        : (0, p.jsx)(A3, { subscription: t, withOverheadSeparator: i });
}
var A4 = i(306272),
    A7 = i(558808);
let A8 = { [nv.nR]: "role_subscriptions_panel", [nv.PZ]: "application_subscriptions_panel" };
function A5() {
    return (0, p.jsx)(er.Z, {
        className: A7.wb,
        type: er.Z.Types.CUSTOM,
        children: (0, p.jsxs)(lU.A, {
            align: lU.A.Align.CENTER,
            children: [
                (0, p.jsx)(e8.A, { game: null, size: e8.M.SMALL, className: A7.pV }),
                (0, p.jsx)("span", { className: A7.O, children: g.intl.string(g.t["jy/hyj"]) }),
            ],
        }),
    });
}
function A9() {
    let e = (0, O.bG)([d4.A], () => d4.A.getForApplication(sf.tv));
    return (
        N.useEffect(() => {
            (0, dW.LM)(sf.tv);
        }, []),
        (0, p.jsx)(ia.n, {
            label: g.intl.string(g.t["2GKrvn"]),
            description: g.intl.string(g.t.kNEjGm),
            children:
                null != e && oK.Ay.hasAccountCredit(e)
                    ? (0, p.jsx)(A1, { className: A7.fX, entitlements: e })
                    : (0, p.jsx)(A5, {}),
        })
    );
}
function he() {
    return (0, p.jsx)("hr", { className: A7.hr });
}
let ht = function () {
        var e;
        let t = (0, O.bG)([dx.A], () => dx.A.getPremiumTypeSubscription()),
            i = (0, mI.A)({ subscriptionFilter: (e) => A4.Hy.has(e.status) }),
            n = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
            s = i.length > 1,
            l = (0, O.bG)(
                [dT.A],
                () => (null != t && null != t.paymentSourceId ? dT.A.getPaymentSource(t.paymentSourceId) : null),
                [t],
            ),
            r = (0, O.bG)([dx.A], () => dx.A.hasFetchedSubscriptions()),
            a = (0, O.bG)([u$.A], () => u$.A.isBusy),
            o = (0, cL.Y)(),
            d = mF.A.useField("subsection");
        N.useEffect(() => {
            (0, rp._)(null != d ? A8[d] : u.X.SUBSCRIPTIONS_PANEL);
        }, [d]);
        let c = (0, O.bG)([dx.A], () => dx.A.getActiveApplicationSubscriptions()?.length ?? 0),
            m = (0, O.bG)(
                [dx.A],
                () =>
                    Object.values(dx.A.getSubscriptions() ?? {})
                        .filter((e) => e.type === q.rzx.GUILD)
                        .filter((e) => e.status !== q.Dmq.ENDED).length,
            ),
            A = (0, cG.A)({ forceFetch: !0 }),
            h = (0, AK.ds)(),
            E = null !== t ? t.currentPeriodEnd : void 0,
            T =
                !(h && !(A.unactivatedUnits.length > 0)) &&
                (A.fractionalState !== sf.xc.NONE || A.unactivatedUnits.length > 0);
        return (N.useEffect(
            () => (
                n6.h.wait(() => {
                    (0, cR.zS)(), uq.hP(), (0, cO.CD)(), uq.$o();
                }),
                function () {
                    mF.A.resetState();
                }
            ),
            [],
        ),
        e_.A.enabled)
            ? (0, p.jsx)(uX.A, {})
            : r && o
              ? d === nv.nR
                  ? (0, p.jsx)(m3, { onGoBack: () => mF.A.setState({ subsection: null }) })
                  : d === nv.PZ
                    ? (0, p.jsx)(AX, { onGoBack: () => mF.A.setState({ subsection: null }) })
                    : (0, p.jsx)("div", {
                          className: A7.kL,
                          children: (0, p.jsxs)("div", {
                              className: A7.Qs,
                              children: [
                                  s ? (0, p.jsx)(A4.Sb, {}) : null,
                                  null != t
                                      ? (0, p.jsx)(A4.Ay, {
                                            subscription: t,
                                            paymentSource: l,
                                            busy: a,
                                            subscriptions: i,
                                        })
                                      : (0, p.jsx)(A4.TC, {}),
                                  T &&
                                      ((e = !!n?.isPremiumWithPremiumGroup()),
                                      (0, p.jsxs)("section", {
                                          children: [
                                              (0, p.jsx)(eA.D, {
                                                  variant: "heading-md/bold",
                                                  className: A7.HL,
                                                  children: g.intl.string(g.t.Obre8v),
                                              }),
                                              (0, p.jsx)(V.E, {
                                                  variant: "text-md/normal",
                                                  className: A7.JU,
                                                  children: g.intl.format(g.t["7Zi06b"], {
                                                      helpCenterLink: ta.A.getArticleURL(
                                                          q.MVz.FRACTIONAL_PREMIUM_ABOUT,
                                                      ),
                                                  }),
                                              }),
                                              (0, p.jsx)(AJ, {
                                                  className: A7.fX,
                                                  fractionalPremiumInfo: A,
                                                  activationDate: E,
                                                  hasPremiumGroup: e,
                                              }),
                                          ],
                                      })),
                                  (0, p.jsx)(A9, {}),
                                  m > 0 &&
                                      (0, p.jsxs)(p.Fragment, {
                                          children: [
                                              (0, p.jsx)(he, {}),
                                              (0, p.jsx)(mj, {
                                                  count: m,
                                                  onClickManageSubscription: () => mF.A.setState({ subsection: nv.nR }),
                                              }),
                                          ],
                                      }),
                                  c > 0 &&
                                      (0, p.jsxs)(p.Fragment, {
                                          children: [
                                              (0, p.jsx)(he, {}),
                                              (0, p.jsx)(m7, {
                                                  count: c,
                                                  onClickManageSubscription: () => {
                                                      mF.A.setState({ subsection: nv.PZ }),
                                                          Y.default.track(
                                                              q.HAw.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED,
                                                          );
                                                  },
                                              }),
                                          ],
                                      }),
                                  (0, p.jsx)(he, {}),
                                  null != t ? (0, p.jsx)(A6, { subscription: t, withOverheadSeparator: !1 }) : null,
                              ],
                          }),
                      })
              : (0, p.jsx)("div", { className: ew()(A7.kL, A7.Lq), children: (0, p.jsx)(uK.y, {}) });
    },
    hi = (0, o.E2)(u.X.SUBSCRIPTIONS_SETTINGS, {
        useSearchTerms: () => [g.intl.string(g.t.trSpHX), g.intl.string(g.t["2GKrvn"])],
        Component: () => (0, p.jsx)(ht, {}),
    }),
    hn = (0, o.zZ)(u.X.SUBSCRIPTIONS_CATEGORY, {
        useSearchTerms: () => [g.intl.string(g.t.trSpHX), g.intl.string(g.t["2GKrvn"])],
        buildLayout: () => [hi],
    }),
    hs = (0, o.t_)(u.X.SUBSCRIPTIONS_PANEL, { useTitle: () => g.intl.string(g.t.trSpHX), buildLayout: () => [hn] }),
    hl = (0, o.i4)(u.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.trSpHX),
        icon: m_.L,
        usePersistentBadge: function () {
            return N.useMemo(
                () => ({
                    badgeType: ef.Xi.STRONGLY_DISCOURAGED_CUSTOM,
                    useCustomBadge: () =>
                        (0, mC.l)() ? (0, p.jsx)(lI.E, { size: "xs", color: w.A.unsafe_rawColors.YELLOW_300 }) : null,
                }),
                [],
            );
        },
        buildLayout: () => [hs],
    }),
    hr = (0, o.WI)(u.X.BILLING_SECTION, {
        useTitle: () => g.intl.string(g.t.oeUm2s),
        buildLayout: () => [cj, mf, hl, cN, dU],
    });
var ha = i(540999),
    ho = i(306471),
    hu = i(964355),
    hd = i(172272);
let hc = (0, o.zD)(u.X.AXE_AUDITING, {
        useTitle: () => "Enable Accessibility Auditing",
        useSubtitle: () =>
            "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development.",
        usePredicate: () => !1,
        useValue: () => (0, O.bG)([aK.default], () => aK.default.isAxeEnabled),
        setValue: (e) => (0, aH.x)({ axeEnabled: e }),
    }),
    hg = (0, o.zD)(u.X.CSS_DEBUGGING, {
        useTitle: () => "Enable CSS Debugging",
        useSubtitle: () => "Display raw colors as pink. Toggling this will refresh the browser.",
        useValue: () => (0, O.bG)([aK.default], () => aK.default.cssDebuggingEnabled),
        setValue: (e) => {
            (0, aH.x)({ cssDebuggingEnabled: e }).then(() => {
                setTimeout(() => location.reload(), 500);
            });
        },
    });
var hm = i(276086),
    hA = i(354328);
let hh = (0, o.zD)(u.X.HIGHLIGHT_MANA_COMPONENTS, {
        useTitle: () => "Highlight Mana Components",
        useSubtitle: () => "Highlights all Mana design system components for easier debugging.",
        useValue: () => (0, hA.A)("highlight_mana_components"),
        setValue: (e) => {
            (0, hm.L)("highlight_mana_components", e);
        },
    }),
    hE = (0, o.zD)(u.X.HIGHLIGHT_VOID_COMPONENTS, {
        useTitle: () => "Highlight Deprecated Void Components",
        useSubtitle: () =>
            "Highlights deprecated toggleable components: VoidCheckbox (green), VoidRadioGroup (yellow), VoidSwitch (blue).",
        useValue: () => (0, hA.A)("highlight_void_toggleables"),
        setValue: (e) => {
            (0, hm.L)("highlight_void_toggleables", e);
        },
    }),
    hT = (0, o.sN)(u.X.LAYOUT_DEBUGGING_HORIZONTAL_SPACING, {
        useTitle: () => "Horizontal Grid Spacing",
        useSubtitle: () =>
            "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
        usePredicate: () => (0, O.bG)([aK.default], () => aK.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: hd.YR,
        markers: Array.from({ length: hd.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => hd.Or.getState().horizontalSpacing,
        asValueChanges: (e) => {
            hd.Or.getState().setHorizontalSpacing(e);
        },
    }),
    hx = (0, o.zD)(u.X.LAYOUT_DEBUGGING, {
        useTitle: () => "Enable Layout Debugging",
        useSubtitle: () => "Renders a grid on top of the app to help debug layout alignment issues.",
        useValue: () => (0, O.bG)([aK.default], () => aK.default.layoutDebuggingEnabled),
        setValue: (e) => {
            (0, aH.x)({ layoutDebuggingEnabled: e });
        },
    }),
    hS = (0, o.sN)(u.X.LAYOUT_DEBUGGING_VERTICAL_SPACING, {
        useTitle: () => "Vertical Grid Spacing",
        useSubtitle: () => "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
        usePredicate: () => (0, O.bG)([aK.default], () => aK.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: hd.YR,
        markers: Array.from({ length: hd.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => hd.Or.getState().verticalSpacing,
        asValueChanges: (e) => {
            hd.Or.getState().setVerticalSpacing(e);
        },
    }),
    hp = (0, o.zZ)(u.X.DESIGN_TOOLS, {
        useTitle: () => "Design & A11y Tools",
        useSearchTerms: () => ["accessibility tools"],
        buildLayout: () => [hg, hx, hT, hS, hh, hE, hc],
    }),
    hN = (0, o.zD)(u.X.AD_OVERRIDE, {
        useTitle: () => "Always Deliver Ads",
        useSubtitle: () => "Makes the user targetable for all active ads.",
        useValue: () => c.HZ.useSetting(),
        setValue: (e) => {
            c.HZ.updateSetting(e);
        },
    });
var hf = i(173936),
    h_ = i(260598),
    hC = i(148810),
    hI = i(380610),
    hb = i(986238),
    hv = i(851645),
    hj = i(274446);
let hy = ["discord_web", "discord_marketing", "discord_developers", "discord_ios", "discord_android"],
    hO = [
        { id: "branch", value: "branch", label: "Branch Name" },
        { id: "id", value: "id", label: "Commit SHA" },
    ];
function hR(e) {
    return "discord_ios" in e || "discord_android" in e;
}
class hL extends N.Component {
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
        return (0, p.jsxs)(lU.A, {
            direction: lU.A.Direction.VERTICAL,
            className: ew()(hv.oS, iC.SX, hj.N, hv.nM),
            children: [
                (0, p.jsx)(iA.A, {
                    className: ew()(hv.lL, { [hv.zi]: n }),
                    onClick: n ? void 0 : this.handleRemoveBuildOverride,
                }),
                (0, p.jsxs)(lU.A, {
                    className: iC.QB,
                    children: [
                        (0, p.jsx)(lU.A.Child, {
                            basis: "50%",
                            children: (0, p.jsx)(lx.l, {
                                selectionMode: "single",
                                label: "Override Type",
                                options: hO,
                                onSelectionChange: this.handleOverrideTypeChanged,
                                value: t,
                                disabled: n,
                            }),
                        }),
                        (0, p.jsx)(lU.A.Child, {
                            wrap: !0,
                            basis: "50%",
                            children: (0, p.jsx)(lL.k, {
                                label: "branch" === t ? "Branch Name" : "Commit SHA",
                                value: i,
                                onChange: this.handleOverrideIdChanged,
                                disabled: n,
                            }),
                        }),
                    ],
                }),
                (0, p.jsxs)(lU.A.Child, {
                    children: [
                        null != s &&
                            "" !== s &&
                            (0, p.jsx)(V.E, {
                                className: hv.AS,
                                color: "text-feedback-critical",
                                variant: "text-sm/normal",
                                children: s,
                            }),
                        (0, p.jsxs)(V.E, {
                            variant: "text-sm/normal",
                            className: hv.AS,
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
class hD extends N.Component {
    state = { loading: !0, buildOverrides: {}, loadedBuildOverrides: {}, errors: {}, saving: !1, didSave: !1 };
    async refreshBuildOverrides() {
        this.setState({ loading: !0 });
        let e = await (0, hI.bD)();
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
        return eR().without(hy, ...t);
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
        this.setState({ buildOverrides: eR().cloneDeep(this.state.loadedBuildOverrides), errors: {}, didSave: !1 });
    };
    handleSaveChanges = async () => {
        let { buildOverrides: e } = this.state;
        if (null == e) return;
        this.setState({ saving: !0 });
        let t = await (0, hC.Zk)(e);
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
        (0, _.openModal)((t) => (0, p.jsx)(hP, { ...t, buildOverrides: e }));
    };
    renderEmpty() {
        return (0, p.jsx)(ir.pp, {
            theme: iu.A.theme,
            className: ew()(iC.eT, iC.SX),
            children: (0, p.jsx)(ir.SG, { children: "You have no build overrides configured." }),
        });
    }
    renderItems() {
        let { buildOverrides: e, saving: t, errors: i } = this.state;
        return null == e
            ? null
            : eR().map(e, (e, n) =>
                  (0, p.jsx)(
                      hL,
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
                  children: (0, p.jsx)(lS.K, {
                      variant: "secondary",
                      icon: hf.q,
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
                    disabled: hR(t ?? {}),
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
            ? (0, p.jsx)(uK.y, { className: iC.QX })
            : null != n && 0 === Object.keys(n).length
              ? this.renderEmpty()
              : this.renderItems();
        let s = !i && !t && this.getAvailableProjects().length > 0,
            l =
                hR(n ?? {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL
                    ? (0, p.jsx)(V.E, {
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
                    (0, p.jsx)(lx.l, {
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
                    (0, p.jsxs)(aR.e, {
                        justify: "end",
                        children: [this.renderRefreshButton(), this.renderLinkButton(), this.renderSaveButton()],
                    }),
                ],
            }),
        });
    }
}
class hP extends N.Component {
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
            t = await (0, hC.SB)(e);
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
        return hR(this.props.buildOverrides ?? {});
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
            d = hb.fL.find((t) => t.value === e),
            c = s.map((e) => ({ id: e, label: e, value: e }));
        return (0, p.jsxs)(R.B, {
            gap: 20,
            children: [
                (0, p.jsx)(lx.l, {
                    selectionMode: "single",
                    label: "Expire After",
                    value: null != d ? d.value : void 0,
                    options: hb.fL,
                    onSelectionChange: this.handleExpirationChange,
                }),
                this.isMobile()
                    ? null
                    : (0, p.jsx)(lx.l, {
                          selectionMode: "single",
                          label: "Release Channel",
                          value: t,
                          options: hb.VP,
                          onSelectionChange: this.handleReleaseChannelChange,
                      }),
                this.isMobile()
                    ? (0, p.jsxs)(R.B, {
                          gap: 20,
                          children: [
                              (0, p.jsx)(lL.k, {
                                  label: "Add allowed app version (required)",
                                  autoFocus: !0,
                                  value: l,
                                  onKeyDown: this.handleAllowedVersionEnter,
                                  error: r,
                                  onChange: this.handleAllowedVersionEntry,
                                  placeholder: "Example: 34",
                                  trailing: { icon: cY.j, onClick: this.handleAddAllowedVersion, "aria-label": "Add" },
                              }),
                              (0, p.jsx)(lx.l, {
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
                    : (0, p.jsx)(h_.f, {
                          label: "Limit to User IDs (optional)",
                          helperText: "User IDs can be separated by whitespace or commas.",
                          value: i,
                          error: n,
                          onBlur: () => this.setUserEntryError(""),
                          onChange: this.handleUserIDEntry,
                      }),
                (0, p.jsx)(h_.f, {
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
        return (0, p.jsx)(lR.Modal, {
            title: "Generate Public Build Override Link",
            input: this.renderHelpMessage(),
            actionBarInput: (0, p.jsx)(d$.A, { value: i }),
            transitionState: t,
            "aria-label": "Generate Public Build Override Link",
            actions: [{ variant: "primary", text: "Generate Link", onClick: this.handleGenerateLink }],
            onClose: e,
            children: this.renderSettingsForm(),
        });
    }
}
let hG = (0, o.E2)(u.X.BUILD_OVERRIDES, { useSearchTerms: () => ["build overrides"], Component: hD });
var hU = i(256311),
    hM = i(883600);
let hV = (0, o.E2)(u.X.CHANGE_LOG_OVERRIDE, {
    useSearchTerms: () => ["changelog override", "change log override"],
    Component: function () {
        let e = (0, O.bG)([hM.A], () => hM.A.overrideId()),
            t = async (e) => {
                let t = hM.A.getChangelog(e, "en-US");
                return null != t ? t : ((await hU.A.fetchChangelog(e, "en-US", !1, !0)) ?? null);
            };
        return (0, p.jsx)(h$, {
            label: "Change Log Override",
            description: "Provide a change log ID to override the change log shown to this user.",
            placeholder: "Enter Change Log ID...",
            overrideId: e ?? null,
            setOverride: (e) => hU.A.setChangelogOverride(e),
            fetchOverride: t,
        });
    },
});
var hk = i(506774);
let hw = new Date("2018-01-01"),
    hF = (0, o.Tf)(u.X.CHANGE_LOG_CLEAR, {
        useTitle: () => "Clear Change Log",
        useSubtitle: () => "Resets the change log state so that it will show again on the next startup.",
        useLabel: () => "Clear",
        useDisabled: () => c.pK.useSetting() === u2.default.fromTimestamp(hw.getTime()),
        onClick: () => (hk.w.set("lastChangeLogDate", hw), c.pK.updateSetting(u2.default.fromTimestamp(hw.getTime()))),
    }),
    hB = (0, o.zD)(u.X.DISABLE_APP_COLLECTIONS_CACHE, {
        useTitle: () => "Disable Application Collections Cache",
        useSubtitle: () => "Forces application collection updates to be shown immediately.",
        useDisabled: () => (0, O.bG)([aK.default], () => aK.default.onlyShowPreviewAppCollections),
        useValue: () =>
            (0, O.bG)(
                [aK.default],
                () => aK.default.disableAppCollectionsCache || aK.default.onlyShowPreviewAppCollections,
            ),
        setValue: (e) => (0, aH.x)({ disableAppCollectionsCache: e }),
    }),
    hz = (0, o.zD)(u.X.FORCE_CANARY_API, {
        useTitle: () => "Force Canary API",
        useSubtitle: () => "Routes all API requests to Canary instances.",
        useValue: () => (0, O.bG)([aK.default], () => aK.default.isForcedCanary),
        setValue: (e) => {
            (0, aH.x)({ canary: e });
        },
    }),
    hY = (0, o.zD)(u.X.LOAD_SOURCE_MAPS, {
        useTitle: () => "Load Source Maps",
        useSubtitle: () => "Downloads source maps on this client. Only enable on devices you trust.",
        useValue: () => (0, O.bG)([aK.default], () => aK.default.sourceMapsEnabled),
        setValue: (e) => (0, aH.x)({ sourceMapsEnabled: e }),
    }),
    hX = (0, o.zD)(u.X.ONLY_SHOW_PREVIEW_APP_COLLECTIONS, {
        useTitle: () => "Only Show Preview App Collections",
        useSubtitle: () =>
            "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
        useValue: () => (0, O.bG)([aK.default], () => aK.default.onlyShowPreviewAppCollections),
        setValue: (e) => (0, aH.x)({ onlyShowPreviewAppCollections: e }),
    });
var hH = i(10094),
    hK = i(683760);
let hW = [
        { id: "none", label: "Non-Nitro", value: 0 },
        { id: "tier_0", label: "Nitro Basic", value: sf.PremiumTypes.TIER_0 },
        { id: "tier_1", label: "Nitro Classic", value: sf.PremiumTypes.TIER_1 },
        { id: "tier_2", label: "Nitro Standard", value: sf.PremiumTypes.TIER_2 },
    ],
    hZ = (0, o.Hn)(u.X.PREMIUM_TYPE_OVERRIDE, {
        useTitle: () => "Premium Type Override",
        useSearchTerms: () => ["nitro override"],
        useSubtitle: () => "Overrides the client's local premium type.",
        useOptions: () => hW,
        clearable: !0,
        useValue: () =>
            (0, O.bG)([hK.A], () => {
                let e = hK.A.getPremiumTypeOverride();
                return null === e ? 0 : e;
            }),
        setValue: (e) => {
            0 === e
                ? (0, hH.O)(null, void 0)
                : null === e
                  ? (0, hH.O)(void 0, void 0)
                  : (0, hH.O)(0 === e ? null : e, void 0);
        },
    });
var hq = i(246605),
    hQ = i(274184);
let hJ = (0, o.E2)(u.X.SURVEY_OVERRIDE, {
    useSearchTerms: () => ["survey override"],
    Component: function () {
        let e = (0, O.bG)([hQ.Ay], () => hQ.Ay.getSurveyOverride());
        return (0, p.jsx)(h$, {
            label: "Survey Override",
            description: "Provide a survey ID to override the survey shown to this user.",
            placeholder: "Enter Survey ID...",
            overrideId: e ?? null,
            setOverride: (e) => hq.xr(e),
            fetchOverride: (e) => hq.BC(e, !0) ?? null,
        });
    },
});
function h$(e) {
    let { label: t, description: i, placeholder: n, overrideId: s, setOverride: l, fetchOverride: r } = e,
        [a, o] = N.useState(s ?? ""),
        u = N.useRef(null),
        [d, c] = N.useState(0),
        g = () => {
            null != u.current && (clearTimeout(u.current), (u.current = null));
        };
    return (
        N.useEffect(() => g, []),
        (0, p.jsx)(sO.D, {
            layout: "horizontal-responsive",
            label: t,
            description: i,
            children: (0, p.jsx)(lL.k, {
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
let h0 = (0, o.zZ)(u.X.DEV_OVERRIDES, {
        useTitle: () => "Overrides",
        buildLayout: () => [hZ, hJ, hV, hF, hz, hN, hX, hB, hY, hG],
        useInlineNotice: () => ({
            type: ef.lT.INLINE_NOTICE,
            noticeType: "info",
            useText: () => g.intl.format(g.t.UeZJlg, { link: "https://i.dis.gd/dev-settings-changes" }),
        }),
    }),
    h1 = (0, o.zD)(u.X.ANALYTICS_LOGS, {
        useTitle: () => "Enable Logging of Analytics Events",
        useSubtitle: () => "Logs all analytics events to the developer console.",
        useValue: () => (0, O.bG)([aK.default], () => aK.default.isLoggingAnalyticsEvents),
        setValue: (e) => (0, aH.x)({ logAnalyticsEvents: e }),
    }),
    h2 = (0, o.zD)(u.X.GATEWAY_LOGS, {
        useTitle: () => "Log Gateway Events",
        useSubtitle: () => "Logs all gateway events to console, including content. Enable verbose logs to see them.",
        useValue: () => (0, O.bG)([aK.default], () => aK.default.isLoggingGatewayEvents),
        setValue: (e) => (0, aH.x)({ logGatewayEvents: e }),
    }),
    h3 = (0, o.zD)(u.X.KEEP_POPOUTS_OPEN, {
        useTitle: () => "Keep Popouts Open",
        useSubtitle: () =>
            "When enabled, popouts will not close automatically, allowing their console contents to be inspected after a crash.",
        useValue: () => (0, O.bG)([aK.default], () => aK.default.preventPopoutClose),
        setValue: (e) => (0, aH.x)({ preventPopoutClose: e }),
    }),
    h6 = (0, o.zD)(u.X.KEYBOARD_MISMATCHES, {
        useTitle: () => "Enable Logging of Keyboard Mismatches",
        useSubtitle: () => "Logs mismatches in detected keyboard codes to the console.",
        useValue: () => (0, O.bG)([aK.default], () => aK.default.logKeyboardMismatches),
        setValue: (e) => (0, aH.x)({ logKeyboardMismatches: e }),
    }),
    h4 = (0, o.zD)(u.X.OVERLAY_RPC_LOGS, {
        useTitle: () => "Enable Logging of Overlay RPC Events & Commands",
        useSubtitle: () => "Logs all overlay related RPC events. Super noisy if an overlay is connected.",
        useValue: () => (0, O.bG)([aK.default], () => aK.default.isLoggingOverlayEvents),
        setValue: (e) => (0, aH.x)({ logOverlayEvents: e }),
    }),
    h7 = (0, o.zD)(u.X.QUEST_LOGGING, {
        useTitle: () => "Enable Quests Debug Logging",
        useSubtitle: () => "Logs quest lifecycle events to the developer console.",
        useValue: () => (0, O.bG)([aK.default], () => aK.default.isLoggingQuestEvents),
        setValue: (e) => (0, aH.x)({ logQuestEvents: e }),
    }),
    h8 = (0, o.zD)(u.X.REQUEST_TRACING, {
        useTitle: () => "Enable Tracing Requests",
        useSubtitle: () => "Force trace all client requests with APM.",
        useValue: () => (0, O.bG)([aK.default], () => aK.default.isTracingRequests),
        setValue: (e) => (0, aH.x)({ trace: e }),
    }),
    h5 = (0, o.zZ)(u.X.LOGGING, { useTitle: () => "Logging", buildLayout: () => [h2, h4, h8, h1, h6, h3, h7] }),
    h9 = (0, o.t_)(u.X.DEVELOPER_OPTIONS_PANEL, {
        useTitle: () => "Developer Options",
        buildLayout: () => [h0, h5, hp],
    }),
    Ee = (0, o.i4)(u.X.DEVELOPER_OPTIONS_SIDEBAR_ITEM, {
        useTitle: () => "Developer Options",
        icon: ho.V,
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
                    disableAppCollectionsCache: g,
                } = (0, O.cf)([aK.default, ha.A], () => ({
                    layoutDebuggingEnabled: aK.default.layoutDebuggingEnabled,
                    isDeveloper: ha.A.isDeveloper,
                    isLoggingGatewayEvents: aK.default.isLoggingGatewayEvents,
                    isLoggingOverlayEvents: aK.default.isLoggingOverlayEvents,
                    isLoggingAnalyticsEvents: aK.default.isLoggingAnalyticsEvents,
                    isTracingRequests: aK.default.isTracingRequests,
                    isForcedCanary: aK.default.isForcedCanary,
                    isSourceMapsEnabled: aK.default.sourceMapsEnabled,
                    isAxeEnabled: aK.default.isAxeEnabled,
                    preventPopoutClose: aK.default.preventPopoutClose,
                    onlyShowPreviewAppCollections: aK.default.onlyShowPreviewAppCollections,
                    disableAppCollectionsCache: aK.default.disableAppCollectionsCache,
                })),
                { horizontalSpacing: m, verticalSpacing: A } = (0, hd.Or)(),
                { setHorizontalSpacing: h, setVerticalSpacing: E } = hd.Or.getState(),
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
                                              (0, aH.x)({ canary: !r });
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
                                              (0, aH.x)({ onlyShowPreviewAppCollections: !d });
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
                                              (0, aH.x)({ disableAppCollectionsCache: !g });
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
                                              (0, aH.x)({ logGatewayEvents: !i });
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
                                              (0, aH.x)({ logOverlayEvents: !n });
                                          },
                                      },
                                      "overlay-events",
                                  ),
                                  (0, p.jsx)(
                                      U.sL,
                                      {
                                          id: "analytics-events",
                                          label: "Analytics Events",
                                          checked: s,
                                          action: () => {
                                              (0, aH.x)({ logAnalyticsEvents: !s });
                                          },
                                      },
                                      "analytics-events",
                                  ),
                                  (0, p.jsx)(
                                      U.sL,
                                      {
                                          id: "tracing-requests",
                                          label: "Tracing Requests",
                                          checked: l,
                                          action: () => {
                                              (0, aH.x)({ trace: !l });
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
                                              (0, aH.x)({ preventPopoutClose: !o });
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
                                              (0, aH.x)({ axeEnabled: !a });
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
                                              (0, aH.x)({ layoutDebuggingEnabled: !e });
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
                                                          (0, p.jsx)(hu.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: m,
                                                              minValue: 0,
                                                              maxValue: hd.YR,
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
                                                          (0, p.jsx)(hu.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: A,
                                                              minValue: 0,
                                                              maxValue: hd.YR,
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
        buildLayout: () => [h9],
    });
var Et = i(127062),
    Ei = i(84654),
    En = i(80703),
    Es = i(691540),
    El = i(857250),
    Er = i(97483),
    Ea = i(100392),
    Eo = i(102609),
    Eu = i(271478),
    Ed = i(736056),
    Ec = i(386976),
    Eg = i(257433),
    Em = i(32523),
    EA = i(222735),
    Eh = i(688151),
    EE = i(491210);
function ET(e) {
    let { experiment: t, experimentId: i, overrideInfo: n, defaultOpen: s } = e,
        [l, r] = N.useState(s),
        [a, o] = N.useState(!1),
        u = N.useCallback(() => {
            r((e) => !e);
        }, []),
        d = (0, O.bG)([cs.default], () => cs.default.getId()),
        c = (0, O.bG)([cs.default], () => {
            let e = cs.default.getInstallationForTracking();
            return null == e ? null : (0, En.v)(e);
        }),
        g = "installation" === t.kind && null != c ? c : d,
        m = (0, Eg.iN)(t, g),
        A = (0, Eg.Fm)(t, g),
        h = (0, O.yK)([Ed.A], () =>
            eR()
                .sortBy(Ed.A.getRecentExposures(Eh.Vh.USER, i), (e) => {
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
                (0, cu.C)((0, Ea.yA)(i), () => {
                    (0, Es.P0)({
                        id: "experiment-link-copied",
                        message: "Copied experiment link",
                        type: Er.Ck.SUCCESS,
                    }),
                        e.preventDefault(),
                        e.stopPropagation();
                });
            },
            [i],
        ),
        T = (0, p.jsx)(eF.s, {
            "aria-label": "Toggle visibility",
            onClick: u,
            children: (0, p.jsxs)(V.E, {
                variant: "text-md/medium",
                className: EE.DD,
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
                                    cu.p5 &&
                                        (0, p.jsx)(M.D, { onClick: E, children: (0, p.jsx)(hf.q, { size: "xs" }) }),
                                ],
                            }),
                            (0, p.jsx)(V.E, { color: "text-muted", variant: "text-sm/normal", children: i }),
                        ],
                    }),
                    (0, p.jsx)("span", {
                        className: EE.km,
                        children: "installation" === t.kind ? "Installation" : "User",
                    }),
                ],
            }),
        });
    if (!l) return (0, p.jsx)("div", { className: EE.Os, children: T });
    let x = "";
    return (
        (x =
            t.system === Eo.l5.LEGACY
                ? `Currently assigned to bucket ${m ?? Eh.RE.NOT_ELIGIBLE}`
                : null != m
                  ? `Currently assigned to variant ${m}`
                  : "Currently unassigned"),
        (0, p.jsxs)("div", {
            className: EE.Os,
            children: [
                T,
                (0, p.jsx)("div", {
                    children: (0, p.jsx)(Eu.g, {
                        label: t.system === Eo.l5.LEGACY ? "Bucket Override" : "Variant Override",
                        description: x,
                        experiment: t,
                        experimentId: i,
                        overrideInfo: n,
                    }),
                }),
                (0, p.jsx)("div", {
                    className: EE.h_,
                    children:
                        null == A
                            ? (0, p.jsx)(V.E, {
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
                              (0, p.jsx)(V.E, {
                                  variant: "text-lg/medium",
                                  className: EE.id,
                                  children: "Server Descriptor",
                              }),
                              (0, p.jsx)(V.E, {
                                  variant: "code",
                                  className: EE.AS,
                                  children: null == A ? "None" : JSON.stringify(A, void 0, 2),
                              }),
                              (0, p.jsx)(V.E, {
                                  variant: "text-lg/medium",
                                  className: EE.id,
                                  children: "Override Descriptor",
                              }),
                              (0, p.jsx)(V.E, {
                                  variant: "code",
                                  className: EE.AS,
                                  children:
                                      n?.originalDescriptor == null
                                          ? "None"
                                          : JSON.stringify(n.originalDescriptor, void 0, 2),
                              }),
                              (0, p.jsx)(V.E, {
                                  variant: "text-lg/medium",
                                  className: EE.id,
                                  children: "Recent Exposures",
                              }),
                              (0, p.jsx)(V.E, {
                                  variant: "code",
                                  className: EE.AS,
                                  children: 0 === h.length ? "None" : h.join("\n"),
                              }),
                          ],
                      })
                    : (0, p.jsx)("div", {
                          className: EE.id,
                          children: (0, p.jsx)(F.Q, {
                              variant: "secondary",
                              text: "More Details \xbb",
                              onClick: () => o(!0),
                          }),
                      }),
                (0, p.jsx)(eE.c, { className: EE.yF }),
            ],
        })
    );
}
function Ex(e) {
    let { experiment: t, experimentId: i, overrideInfo: n } = e,
        [s, l] = N.useState(null != n),
        [r, a] = N.useState(!1),
        o = N.useCallback(() => {
            l((e) => !e);
        }, []),
        u = (0, O.bG)([Ed.A], () => Ed.A.getLoadedGuildExperiment(i)),
        d = (0, O.yK)([Ed.A], () =>
            eR()
                .sortBy(Ed.A.getRecentExposures(Eh.Vh.GUILD, i), (e) => {
                    let [t, i] = e;
                    return -i;
                })
                .map((e) => {
                    let [t, i] = e;
                    return `${new Date(i).toLocaleString()} (${t})`;
                }),
        ),
        [c, g] = (0, O.yK)([H.A, Ed.A], () => {
            let e = eR().sortBy(H.A.getGuildsArray(), (e) => e.name.toLowerCase()),
                t = {},
                n = [];
            for (let s of e) {
                let e = Ed.A.getGuildExperimentDescriptor(i, s.id),
                    l = e?.bucket ?? Eh.RE.NOT_ELIGIBLE;
                l in t || (t[l] = 0), t[l]++, n.push(`${s.name}: ${l}`);
            }
            let s = eR()(t)
                .keys()
                .map(Number)
                .sort()
                .map((e) => `${t[e]} guilds in bucket ${e}`)
                .join(", ");
            return [n.join("\n"), s];
        }),
        m = (0, p.jsx)(M.D, {
            onClick: o,
            children: (0, p.jsxs)(V.E, {
                variant: "text-md/medium",
                className: EE.DD,
                children: [
                    (0, p.jsxs)("div", {
                        children: [
                            (0, p.jsx)("span", { children: t.title }),
                            (0, p.jsx)(V.E, { color: "text-muted", variant: "text-sm/normal", children: i }),
                        ],
                    }),
                    (0, p.jsx)("span", { className: EE.km, children: "Guild" }),
                ],
            }),
        });
    return s
        ? (0, p.jsxs)("div", {
              className: EE.Os,
              children: [
                  m,
                  (0, p.jsx)(Eu.g, {
                      label: "Bucket Override",
                      description: `Current Assignments: ${g}`,
                      experiment: t,
                      experimentId: i,
                      overrideInfo: n,
                  }),
                  (0, p.jsx)("div", {
                      className: EE.h_,
                      children:
                          null == u
                              ? (0, p.jsx)(V.E, {
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
                                (0, p.jsx)(V.E, {
                                    variant: "text-lg/medium",
                                    className: EE.id,
                                    children: "Guild Assignments",
                                }),
                                (0, p.jsx)(V.E, { variant: "code", className: EE.AS, children: c }),
                                (0, p.jsx)(V.E, {
                                    variant: "text-lg/medium",
                                    className: EE.id,
                                    children: "Server Descriptor",
                                }),
                                (0, p.jsx)(V.E, {
                                    variant: "code",
                                    className: EE.AS,
                                    children: null == u ? "None" : JSON.stringify(u, void 0, 2),
                                }),
                                (0, p.jsx)(V.E, {
                                    variant: "text-lg/medium",
                                    className: EE.id,
                                    children: "Override Descriptor",
                                }),
                                (0, p.jsx)(V.E, {
                                    variant: "code",
                                    className: EE.AS,
                                    children:
                                        n?.originalDescriptor == null
                                            ? "None"
                                            : JSON.stringify(n.originalDescriptor, void 0, 2),
                                }),
                                (0, p.jsx)(V.E, {
                                    variant: "text-lg/medium",
                                    className: EE.id,
                                    children: "Recent Exposures",
                                }),
                                (0, p.jsx)(V.E, {
                                    variant: "code",
                                    className: EE.AS,
                                    children: 0 === d.length ? "None" : d.join("\n"),
                                }),
                            ],
                        })
                      : (0, p.jsx)("div", {
                            className: EE.id,
                            children: (0, p.jsx)(F.Q, {
                                variant: "secondary",
                                text: "More Details \xbb",
                                onClick: () => a(!0),
                            }),
                        }),
                  (0, p.jsx)(eE.c, { className: EE.yF }),
              ],
          })
        : (0, p.jsx)("div", { className: EE.Os, children: m });
}
let ES = (0, o.E2)(u.X.EXPERIMENTS_SETTING, {
        Component: function () {
            let { experiments: e, overridesInfo: t } = (0, Ec.op)(),
                { experiments: i, overridesInfo: n } = (0, Em.hI)(),
                s = N.useMemo(() => ({ ...i, ...e }), [i, e]),
                l = N.useMemo(() => ({ ...n, ...t }), [n, t]),
                r = (0, O.bG)([cs.default], () => {
                    let e = cs.default.getInstallationForTracking();
                    return null == e ? null : (0, En.v)(e);
                }),
                [a, o] = N.useState(""),
                u = (0, EA.oC)((0, EA.R3)((0, EA.Fm)(s), l), a);
            return (0, p.jsxs)("div", {
                "data-mtctest-ignore": "true",
                children: [
                    null != r &&
                        (0, p.jsxs)(R.B, {
                            style: { gap: 8, marginBottom: 16 },
                            children: [
                                (0, p.jsxs)(V.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: ["Installation ID: ", r],
                                }),
                                cu.p5 &&
                                    (0, p.jsx)(F.Q, {
                                        size: "sm",
                                        onClick: () => {
                                            (0, cu.C)(r, () => {
                                                (0, Es.P0)((0, El.o)("Installation ID copied!", Er.Ck.SUCCESS));
                                            });
                                        },
                                        text: "Copy",
                                    }),
                            ],
                        }),
                    (0, p.jsx)(D.I, { placeholder: "Search experiments", query: a, onChange: o, onClear: () => o("") }),
                    u.length > 0
                        ? u.map((e) => {
                              let t = "guild" === e.experiment.kind ? Ex : ET;
                              return (0, p.jsx)(
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
                        : (0, p.jsx)("div", {
                              className: EE.p$,
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
    Ep = (0, o.zZ)(u.X.EXPERIMENTS_CATEGORY, { buildLayout: () => [ES] }),
    EN = (0, o.t_)(u.X.EXPERIMENTS_PANEL, { useTitle: () => "Experiments", buildLayout: () => [Ep] }),
    Ef = (0, o.i4)(u.X.EXPERIMENTS_SIDEBAR_ITEM, {
        useTitle: () => "Experiments",
        icon: Et.c,
        useMenu: Ei.A,
        buildLayout: () => [EN],
    }),
    E_ = (0, o.WI)(u.X.DEVELOPER_SECTION, {
        useTitle: () => g.intl.string(g.t["+gHUHA"]),
        usePredicate: () => ha.A.isDeveloper,
        buildLayout: () => [Ef, Ee],
    });
var EC = i(631670),
    EI = i(47360),
    Eb = i(836602),
    Ev = i(591179),
    Ej = i(854627),
    Ey = i(975732),
    EO = i(761508),
    ER = i(83257),
    EL = i(159001),
    ED = i(344346),
    EP = i(919395),
    EG = i(233641);
function EU(e) {
    let { title: t, children: i } = e;
    return (0, p.jsxs)("div", {
        children: [(0, p.jsx)(eA.D, { variant: "text-md/medium", className: EG.Vf, children: t }), i],
    });
}
function EM(e) {
    let {
        children: t,
        className: i,
        layoutClassName: n,
        profilePreview: s,
        profilePreviewTitle: l,
        nameplatePreview: r,
        stickyPreview: a = !0,
    } = e;
    return (0, p.jsx)("div", {
        className: ew()(EG.UA, i),
        children: (0, p.jsxs)("div", {
            className: ew()(EG.yt, n),
            children: [
                (0, p.jsx)("div", {
                    className: ew()(EG.Fp, a && EG.Oz),
                    children: (0, p.jsxs)(p.Fragment, {
                        children: [
                            (0, p.jsx)(EU, { title: l ?? g.intl.string(g.t.Zb06yP), children: s }),
                            null != r ? (0, p.jsx)(EU, { title: g.intl.string(g.t.x5CoXR), children: r }) : null,
                        ],
                    }),
                }),
                (0, p.jsx)("div", { className: EG.oB, children: t }),
            ],
        }),
    });
}
var EV = i(986687),
    Ek = i(101058),
    Ew = i(841595),
    EF = i(696451),
    EB = i(10478);
function Ez() {
    return (0, p.jsxs)("div", {
        className: EB.p$,
        children: [
            (0, p.jsx)("img", { src: "/assets/b3b15f93f9f43174.svg", alt: "", className: EB.Sl }),
            (0, p.jsx)(eA.D, {
                className: EB.h8,
                variant: "heading-lg/extrabold",
                children: g.intl.string(g.t.Z1OZCV),
            }),
            (0, p.jsx)(V.E, { className: EB.h8, variant: "text-md/normal", children: g.intl.string(g.t.ZSt4Tt) }),
            (0, p.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: EB.h8,
                children: (0, p.jsx)(eh.$, {
                    variant: "primary",
                    text: g.intl.string(g.t.jQ3pqt),
                    onClick: () => {
                        (0, sR.pX)(q.BVt.GUILD_DISCOVERY), (0, sT.default)();
                    },
                }),
            }),
        ],
    });
}
var EY = i(81400),
    EX = i(757036),
    EH = i(252732),
    EK = i(355622),
    EW = i(408018),
    EZ = i(201349),
    Eq = i(158983);
let EQ = (0, sp.Ld)(),
    EJ = (0, t0.createChannelRecord)({ id: "1", type: q.rbe.DM }),
    E$ = (0, sp.Ld)();
function E0(e) {
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
        [d, c] = N.useState((0, EW.x7)(o)),
        m = N.useRef(r),
        A = N.useRef(!1);
    return (
        N.useEffect(() => {
            if (m.current !== r) {
                let e = (0, EW.x7)(r);
                u(r), c(e);
            }
            m.current = r;
        }, [r]),
        N.useEffect(() => {
            void 0 !== s || o === r || A.current || (u(r), c((0, EW.x7)(r)));
        }, [s, r, o]),
        (0, p.jsxs)(oF.A, {
            title: t,
            titleId: EQ,
            description: g.intl.string(g.t.Bbw6Ac),
            errors: i,
            disabled: a,
            children: [
                (0, p.jsx)(EZ.Ay, {
                    "aria-describedby": E$,
                    "aria-labelledby": EQ,
                    className: Eq.i,
                    innerClassName: Eq.Z,
                    maxCharacterCount: q.NA2,
                    onChange: function (e, t, i) {
                        t !== o && (u(t), c(i), n(t));
                    },
                    placeholder: l,
                    channel: EJ,
                    textValue: o,
                    richValue: d,
                    emojiPickerCloseOnModalOuterClick: !0,
                    parentModalKey: ej.USER_SETTINGS_MODAL_KEY,
                    type: EK.oU.PROFILE_BIO_INPUT,
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
                (0, p.jsx)(B.A, { id: E$, children: g.intl.format(g.t["+DFxLc"], { maxLength: q.NA2 }) }),
            ],
        })
    );
}
var E1 = i(930861),
    E2 = i(821956),
    E3 = i(562819),
    E6 = i(84540),
    E4 = i(408919);
function E7(e) {
    let { user: t, guild: i, className: n, sectionTitle: s, forcedDivider: l = !1, withTutorial: r = !1 } = e,
        { analyticsLocations: a } = (0, nU.Ay)(),
        o = (0, EP.a4)({ user: t, guildId: i?.id }),
        { pendingAvatarDecoration: u, errors: d } = (0, EP.CP)(i?.id),
        c = r ? E1.wL : ay.$n;
    return (0, p.jsx)(oF.A, {
        className: n,
        forcedDivider: l,
        hasBackground: !0,
        title: s,
        errors: d,
        children: (0, p.jsxs)("div", {
            className: E4.NC,
            children: [
                (0, p.jsx)(c, {
                    size: ay.$n.Sizes.SMALL,
                    onClick: () => {
                        (0, E3.L)({ analyticsLocations: a, guild: i });
                    },
                    className: ew()({ [E4.yj]: r }),
                    children: g.intl.string(g.t.BVcYCx),
                }),
                (void 0 === u ? null != o : null != u) &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: E4.DT,
                        children: (0, p.jsx)(eh.$, {
                            variant: "secondary",
                            size: "sm",
                            text: (0, E2.uZ)(t, i) ? g.intl.string(g.t.CHf9iJ) : g.intl.string(g.t.OrokWm),
                            onClick: () => {
                                (0, E6.p)({ guildId: i?.id, avatarDecoration: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var E8 = i(339984),
    E5 = i(114077);
let E9 = [{ name: "gif", extensions: ["gif"] }];
function Te(e) {
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
        { newestAnalyticsLocation: m } = (0, nU.Ay)(),
        A = c ? E1.wL : ay.$n,
        h = N.useCallback(() => {
            (0, EH.XD)({
                uploadType: E8.HL.AVATAR,
                analyticsSource: m,
                filters: u ? E9 : void 0,
                guildId: r,
                isTryItOut: u,
            });
        }, [r, m, u]);
    return (0, p.jsx)(oF.A, {
        className: a,
        title: s,
        errors: i,
        disabled: o,
        forcedDivider: d,
        children: (0, p.jsxs)("div", {
            className: E5.NC,
            children: [
                (0, p.jsx)(A, {
                    className: ew()({ [E5.yj]: c }),
                    size: ay.$n.Sizes.SMALL,
                    onClick: h,
                    children: l ?? g.intl.string(g.t["4OynCD"]),
                }),
                t &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: E5.DT,
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
var Tt = i(152103);
function Ti(e) {
    let { user: t, guildId: i, className: n } = e,
        s = oK.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: l } = (0, nU.Ay)(),
        {
            userDisplayNameStyles: r,
            guildDisplayNameStyles: a,
            pendingDisplayNameStyles: o,
            pendingErrors: u,
        } = (0, EP.B0)(t, i),
        d = (0, N.useCallback)(() => {
            Y.default.track(q.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS), (0, nM.L)({ analyticsLocations: l, guildId: i });
        }, [l, i]),
        c = (0, N.useCallback)(() => {
            (0, E6.p)({ displayNameStyles: null }), Y.default.track(q.HAw.DISPLAY_NAME_STYLES_REMOVED);
        }, []),
        m = (0, N.useCallback)(() => {
            (0, E6.p)({ guildId: i, displayNameStyles: null });
        }, [i]),
        A = void 0 !== o || (null != i ? null != a : null != r);
    return (0, p.jsx)(oF.A, {
        title: g.intl.string(nV.default["86GtGH"]),
        className: n,
        showPremiumIcon: s,
        errors: u,
        children: (0, p.jsxs)("div", {
            className: Tt.N,
            children: [
                (0, p.jsx)(eh.$, {
                    variant: "primary",
                    size: "sm",
                    text: g.intl.string(nV.default.vJqrIg),
                    onClick: d,
                }),
                null == i &&
                    A &&
                    (0, p.jsx)(eh.$, {
                        variant: "secondary",
                        size: "sm",
                        text: g.intl.string(nV.default.ymq8WQ),
                        onClick: c,
                    }),
                null != i &&
                    null != (void 0 !== o ? o : a) &&
                    (0, p.jsx)(eh.$, {
                        variant: "secondary",
                        size: "sm",
                        text: g.intl.string(nV.default["j/KRxc"]),
                        onClick: m,
                    }),
            ],
        }),
    });
}
var Tn = i(637193),
    Ts = i(727369);
function Tl(e) {
    let { user: t, guild: i, titleIcon: n } = e,
        { analyticsLocations: s } = (0, nU.Ay)(),
        l = null != i,
        { userNameplate: r, guildNameplate: a, pendingNameplate: o, pendingErrors: u } = (0, EP.rv)(t, i?.id),
        d = N.useCallback(() => {
            (0, Tn.p)({ analyticsLocations: s, guildId: i?.id });
        }, [s, i?.id]),
        c = N.useCallback(() => {
            (0, E6.p)({ guildId: i?.id, nameplate: null });
        }, [i?.id]);
    return (0, p.jsx)(oF.A, {
        title: g.intl.string(g.t.x5CoXR),
        titleIcon: n,
        errors: u,
        children: (0, p.jsxs)("div", {
            className: Ts.u,
            children: [
                (0, p.jsx)(eh.$, { variant: "primary", size: "sm", text: g.intl.string(g.t.BwdeM1), onClick: d }),
                (void 0 === o ? (l ? a : r) != null : null != o) &&
                    (0, p.jsx)(eh.$, {
                        variant: "secondary",
                        size: "sm",
                        text: l ? g.intl.string(g.t.CHf9iJ) : g.intl.string(g.t["9zwziY"]),
                        onClick: c,
                    }),
            ],
        }),
    });
}
var Tr = i(33023);
function Ta(e) {
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
        m = d ? E1.wL : ay.$n;
    return (0, p.jsx)(oF.A, {
        className: l,
        title: g.intl.string(g.t.Vgdusv),
        showPremiumIcon: a,
        errors: i,
        disabled: r,
        forcedDivider: u,
        children: (0, p.jsxs)("div", {
            className: Tr.NC,
            children: [
                (0, p.jsx)(m, {
                    className: ew()({ [Tr.yj]: d }),
                    size: ay.$n.Sizes.SMALL,
                    onClick: () =>
                        (0, EH.XD)({ uploadType: E8.HL.BANNER, analyticsSource: c, guildId: s, isTryItOut: o }),
                    children: g.intl.string(g.t.N0bC3P),
                }),
                t &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: Tr.DT,
                        children: (0, p.jsx)(eh.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != s ? g.intl.string(g.t.jHlJNS) : g.intl.string(g.t.tT9n7D),
                            onClick: () => n(null),
                        }),
                    }),
            ],
        }),
    });
}
var To = i(617061),
    Tu = i(872246);
function Td(e) {
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
        d = oK.Ay.canUsePremiumProfileCustomization(t),
        c = (0, EP.N2)({ user: t, guildId: i?.id }),
        { pendingProfileEffect: m, errors: A } = (0, EP.nZ)(i?.id);
    N.useEffect(() => {
        d &&
            Y.default.track(q.HAw.PREMIUM_UPSELL_VIEWED, {
                type: sf.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: u,
            });
    }, [d, u]);
    let h = a ? E1.wL : ay.$n;
    return (0, p.jsx)(oF.A, {
        forcedDivider: r,
        borderType: d6.i.PREMIUM,
        hasBackground: !0,
        title: l,
        showBorder: o,
        errors: A,
        className: s,
        children: (0, p.jsxs)("div", {
            className: Tu.NC,
            children: [
                (0, p.jsx)(h, {
                    size: ay.$n.Sizes.SMALL,
                    onClick: () => {
                        (0, To.W)({ analyticsLocations: u, guild: i, initialSelectedEffect: n });
                    },
                    className: ew()({ [Tu.yj]: a }),
                    children: g.intl.string(g.t["/dRfCf"]),
                }),
                (void 0 === m ? null != c : null != m) &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: Tu.DT,
                        children: (0, p.jsx)(eh.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != i ? g.intl.string(g.t.CHf9iJ) : g.intl.string(g.t.uMuafO),
                            onClick: () => {
                                (0, E6.p)({ guildId: i?.id, profileEffect: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var Tc = i(13875),
    Tg = i(515727),
    Tm = i(238780);
function TA(e) {
    let { user: t, guild: i, sectionTitle: n } = e,
        { analyticsLocations: s } = (0, nU.Ay)(),
        l = (0, Tc.sk)("ProfileFrameSection"),
        r = (0, EP.Xf)({ user: t, guildId: i?.id }),
        { pendingProfileFrame: a, errors: o } = (0, EP.Tu)(i?.id),
        [u, d] = (0, ex.kn)([eT.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE]),
        c = u === eT.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE;
    return l
        ? (0, p.jsx)(oF.A, {
              showBorder: c,
              borderType: c ? d6.i.NEW_UPSELL : d6.i.PREMIUM,
              hasBackground: c,
              title: n,
              titleBadge: c ? (0, p.jsx)(n5.Lp, { text: g.intl.string(g.t.y2b7CA), className: Tm.Ad }) : void 0,
              description: c ? g.intl.string(g.t.yMoMAt) : void 0,
              errors: o,
              children: (0, p.jsxs)("div", {
                  className: Tm.NC,
                  children: [
                      (0, p.jsx)(eh.$, {
                          variant: "primary",
                          size: "sm",
                          text: g.intl.string(g.t["9/hmle"]),
                          onClick: () => {
                              (0, Tg.w)({ analyticsLocations: s, guild: i }), d(t5.i.TAKE_ACTION);
                          },
                      }),
                      (void 0 === a ? null != r : null != a) &&
                          (0, p.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: Tm.DT,
                              children: (0, p.jsx)(eh.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: null != i ? g.intl.string(g.t.CHf9iJ) : g.intl.string(g.t.nQBruk),
                                  onClick: () => {
                                      (0, E6.p)({ guildId: i?.id, profileFrame: null });
                                  },
                              }),
                          }),
                  ],
              }),
          })
        : null;
}
var Th = i(33851),
    TE = i.n(Th),
    TT = i(602853),
    Tx = i(654107),
    TS = i(999291),
    Tp = i(101928),
    TN = i(835245),
    Tf = i(317097),
    T_ = i(508274),
    TC = i(919796),
    TI = i(773431);
function Tb(e) {
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
        c = (0, TT.r)(w.A.colors.BACKGROUND_BASE_LOW).hex(),
        m = w.A.colors.BACKGROUND_MOD_MUTED.css,
        A = (0, EH.sN)(n),
        h = (0, Tf.Hl)(n),
        E = h === c ? m : h,
        T = A ? w.A.unsafe_rawColors.WHITE.css : w.A.unsafe_rawColors.PRIMARY_530.css,
        x = (0, TC.A)(a),
        S = (0, TC.A)(o),
        [f, _] = N.useState((0, TN.A)());
    return (
        N.useEffect(() => {
            (x !== a || S !== o) && _((0, TN.A)());
        }, [o, a, S, x]),
        (0, p.jsx)(P.Y, {
            targetElementRef: d,
            positionKey: f,
            renderPopout: (e) =>
                (0, p.jsx)(T_.VN, {
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
                return (0, p.jsxs)("div", {
                    ref: d,
                    className: ew()(TI.oP, { [TI.r9]: l }),
                    children: [
                        (0, p.jsx)(M.D, {
                            ...i,
                            tabIndex: l ? -1 : 0,
                            onClick: l ? q.tEg : t,
                            style: { backgroundColor: h, borderColor: E },
                            className: TI.nf,
                            "aria-label": g.intl.string(g.t.Qp04hK),
                            focusProps: { ringTarget: d },
                            children: (0, p.jsx)(oH.R, {
                                size: "custom",
                                className: TI.BW,
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
var Tv = i(362656);
function Tj(e) {
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
        c = (0, TS.Ay)(t.id, r),
        { primaryColor: m, secondaryColor: A } = (0, Tp.A)({
            user: t,
            displayProfile: c,
            pendingThemeColors: n,
            isPreview: !0,
        }),
        h = oK.Ay.canUsePremiumProfileCustomization(t),
        E = null != i ? i : t.getAvatarURL(r, 80),
        T = (0, TT.r)(w.A.unsafe_rawColors.PRIMARY_530).hex(),
        x = (0, Tx.rh)(E, T, !1);
    if (null == m || null == A) return null;
    let S = (e) => {
        s(TE()(e, c?.themeColors) ? void 0 : e);
    };
    return (0, p.jsx)(oF.A, {
        title: g.intl.string(g.t.DMeO2X),
        disabled: !h && !l,
        className: ew()(Tv.__invalid_profileThemesSection, a),
        showPremiumIcon: o,
        forcedDivider: d,
        children: (0, p.jsxs)("div", {
            className: Tv.hd,
            children: [
                (0, p.jsx)("div", {
                    className: Tv.YX,
                    children: (0, p.jsx)(Tb, {
                        onChange: (e) => S([e, A]),
                        color: m,
                        suggestedColors: x,
                        showEyeDropper: !0,
                        label: (0, p.jsx)(V.E, {
                            className: Tv.yz,
                            color: "text-default",
                            variant: "text-xs/normal",
                            "aria-hidden": !0,
                            children: g.intl.string(g.t.C3KTQk),
                        }),
                    }),
                }),
                (0, p.jsx)("div", {
                    className: Tv.YX,
                    children: (0, p.jsx)(Tb, {
                        onChange: (e) => S([m, e]),
                        color: A,
                        suggestedColors: x,
                        showEyeDropper: !0,
                        label: (0, p.jsx)(V.E, {
                            className: Tv.yz,
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
                        className: Tv.WA,
                        children: (0, p.jsx)(eh.$, {
                            variant: "secondary",
                            size: "sm",
                            text: g.intl.string(g.t["L+GmoR"]),
                            onClick: () => S([null, null]),
                        }),
                    }),
            ],
        }),
    });
}
function Ty(e) {
    let {
        sectionTitle: t,
        errors: i,
        onPronounsChange: n,
        pendingPronouns: s,
        placeholder: l,
        currentPronouns: r,
        disabled: a = !1,
    } = e;
    return (0, p.jsx)(oF.A, {
        title: t,
        errors: i,
        disabled: a,
        children: (0, p.jsx)(lL.k, {
            placeholder: l ?? g.intl.string(g.t.NPEUUu),
            maxLength: 40,
            value: s ?? r,
            onChange: function (e) {
                n(e === r ? void 0 : e);
            },
            disabled: a,
        }),
    });
}
var TO = i(427262),
    TR = i(576705),
    TL = i(376294);
function TD(e) {
    let { errors: t, pendingNick: i, currentNick: n, username: s, user: l, guild: r } = e,
        a = (0, O.bG)([TR.A], () => TR.A.can(q.xBc.CHANGE_NICKNAME, r) || TR.A.can(q.xBc.MANAGE_NICKNAMES, r)),
        o = (0, EX.L)(sf.PremiumTypes.TIER_2);
    return (0, p.jsxs)(oF.A, {
        title: g.intl.string(g.t.me1lRk),
        errors: t,
        children: [
            (0, p.jsx)(lL.k, {
                value: i ?? n ?? "",
                placeholder: s,
                maxLength: q.d0r,
                onChange: function (e) {
                    (0, E6.p)({ guildId: r.id, nickname: e });
                },
                disabled: !a,
                helperText: a ? void 0 : g.intl.string(g.t.gzjxQi),
            }),
            o && (0, p.jsx)(Ti, { user: l, guildId: r.id, className: TL.F }),
        ],
    });
}
var TP = i(574173);
let TG = "/assets/b25da78aa7949feb.png";
function TU(e) {
    let { user: t, showOverlay: i, children: n } = e,
        s = (0, dZ.Ay)(),
        { analyticsLocations: l } = (0, nU.Ay)(eM.A.PREMIUM_UPSELL_OVERLAY);
    return (N.useEffect(() => {
        i &&
            Y.default.track(q.HAw.PREMIUM_UPSELL_VIEWED, {
                location_stack: l,
                type: sf.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE,
            });
    }, [i, l]),
    i)
        ? (0, p.jsxs)("div", {
              className: TP.ry,
              children: [
                  (0, p.jsx)("div", { children: n }),
                  (0, p.jsxs)("div", {
                      className: TP.Wc,
                      children: [
                          (0, p.jsx)("img", {
                              className: TP.Tn,
                              alt: g.intl.string(g.t.LHFZQy),
                              src: (function (e) {
                                  switch (e) {
                                      case q.NJ8.DARK:
                                      case q.NJ8.DARKER:
                                      case q.NJ8.MIDNIGHT:
                                          return TG;
                                      case q.NJ8.LIGHT:
                                          return "/assets/a98f1410707fafea.png";
                                      default:
                                          return TG;
                                  }
                              })(s),
                          }),
                          (0, p.jsxs)("div", {
                              className: TP._9,
                              children: [
                                  (0, p.jsx)(V.E, {
                                      variant: "text-lg/semibold",
                                      color: "always-white",
                                      children: g.intl.string(g.t.dMaDFX),
                                  }),
                                  (0, p.jsx)(V.E, {
                                      variant: "text-sm/normal",
                                      color: "always-white",
                                      children: g.intl.string(g.t.F7sgFH),
                                  }),
                              ],
                          }),
                          (0, p.jsx)(d3.A, {
                              size: ay.$n.Sizes.LARGE,
                              color: ay.$n.Colors.GREEN,
                              textOptions: {
                                  textOverride: oK.Ay.isPremium(t)
                                      ? g.intl.string(g.t.AfRWI8)
                                      : g.intl.string(g.t.nkdUym),
                              },
                              subscriptionTier: sf.pe.TIER_2,
                          }),
                      ],
                  }),
              ],
          })
        : n;
}
var TM = i(887267);
function TV() {
    var e;
    let t = (0, O.bG)([t3.default], () => {
            let e = t3.default.getCurrentUser();
            return ty()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        i = (0, EX.L)(sf.PremiumTypes.TIER_2),
        n = (0, O.bG)([Eb.A, H.A], () => H.A.getGuild(Eb.A.selectedGuildId));
    ty()(null != n, "guild should not be null");
    let {
            pendingAvatar: s,
            pendingNickname: l,
            pendingBanner: r,
            pendingBio: a,
            pendingPronouns: o,
            pendingThemeColors: u,
            errors: d,
        } = (0, O.cf)([Eb.A], () => ({ ...Eb.A.getPendingChanges(n.id), errors: Eb.A.getErrors(n.id) })),
        c = (0, Ek.V7)({ userId: t.id, image: s }),
        m = (0, EY.EC)(n.id),
        A = (0, O.bG)([EF.Ay], () => (null == n.id ? null : EF.Ay.getMember(n.id, t.id))),
        h = (0, O.bG)([Ew.A], () => Ew.A.getGuildMemberProfile(t.id, n.id)),
        E = oK.Ay.canUsePremiumProfileCustomization(t),
        T = (0, EP.z5)(s, A?.avatar),
        x = (0, EP.Ac)(r, h?.banner),
        S = ((e = h?.themeColors), void 0 === u ? null != e : u?.[0] != null && u?.[1] != null),
        N = h?.bio ?? "",
        f = h?.pronouns ?? "";
    return (0, p.jsxs)("div", {
        className: TM.Q,
        children: [
            (0, p.jsx)(
                TD,
                {
                    errors: d?.nick ?? m?.nick,
                    username: TO.Ay.getName(t),
                    pendingNick: l,
                    currentNick: A?.nick,
                    user: t,
                    guild: n,
                },
                "nick",
            ),
            (0, p.jsx)(
                Ty,
                {
                    sectionTitle: g.intl.string(g.t["+T3RI/"]),
                    errors: d?.pronouns,
                    onPronounsChange: (e) => (0, E6.p)({ guildId: n.id, pronouns: e }),
                    pendingPronouns: o,
                    currentPronouns: f,
                },
                "pronouns",
            ),
            (0, p.jsxs)(TU, {
                user: t,
                showOverlay: !E,
                children: [
                    (0, p.jsx)(
                        Te,
                        {
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [
                                    g.intl.string(g.t.lqaIxI),
                                    (0, p.jsx)(e0.m, {
                                        text: g.intl.string(g.t["5AFxuK"]),
                                        children: (0, p.jsx)(oV.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: TM.a,
                                        }),
                                    }),
                                ],
                            }),
                            showRemoveAvatarButton: T,
                            onAvatarChange: (e) =>
                                (0, EH.rM)(e, A?.avatar, (e) => (0, E6.p)({ guildId: n.id, avatar: e })),
                            errors: d?.avatar,
                            guildId: n.id,
                            disabled: !E,
                        },
                        "avatar",
                    ),
                    (0, p.jsx)(
                        E7,
                        {
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [
                                    g.intl.string(g.t["7v0T9P"]),
                                    (0, p.jsx)(e0.m, {
                                        text: g.intl.string(g.t["5AFxuK"]),
                                        children: (0, p.jsx)(oV.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: TM.a,
                                        }),
                                    }),
                                ],
                            }),
                            user: t,
                            guild: n,
                        },
                        "decoration",
                    ),
                    !i && (0, p.jsx)(Ti, { user: t, guildId: n.id }),
                    (0, p.jsx)(
                        Tl,
                        {
                            user: t,
                            guild: n,
                            titleIcon: (0, p.jsx)(e0.m, {
                                text: g.intl.string(g.t["5AFxuK"]),
                                children: (0, p.jsx)(oV.t, { size: "md", color: "currentColor", className: TM.a }),
                            }),
                        },
                        "nameplate",
                    ),
                    (0, p.jsx)(
                        Td,
                        {
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [
                                    g.intl.string(g.t.wR5wOo),
                                    (0, p.jsx)(e0.m, {
                                        text: g.intl.string(g.t["5AFxuK"]),
                                        children: (0, p.jsx)(oV.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: TM.a,
                                        }),
                                    }),
                                ],
                            }),
                            user: t,
                            guild: n,
                        },
                        "effect",
                    ),
                    (0, p.jsx)(TA, { user: t, guild: n, sectionTitle: g.intl.string(g.t.GWrZOd) }, "frame"),
                    (0, p.jsx)(
                        Ta,
                        {
                            showRemoveBannerButton: x,
                            errors: d?.banner,
                            onBannerChange: (e) =>
                                (0, EH.rM)(e, h?.banner, (e) => (0, E6.p)({ guildId: n.id, banner: e })),
                            guildId: n.id,
                            disabled: !E,
                        },
                        "banner",
                    ),
                    (0, p.jsx)(Tj, {
                        user: t,
                        pendingAvatarSrc: c,
                        pendingColors: u,
                        onThemeColorsChange: (e) => (0, E6.p)({ guildId: n.id, themeColors: e }),
                        guildId: n.id,
                        showResetThemeButton: S,
                    }),
                    (0, p.jsx)(
                        E0,
                        {
                            placeholder: g.intl.string(g.t["/7NKgv"]),
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [
                                    g.intl.string(g.t.ZzAR2Y),
                                    (0, p.jsx)(e0.m, {
                                        text: g.intl.string(g.t["5AFxuK"]),
                                        children: (0, p.jsx)(oV.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: TM.a,
                                        }),
                                    }),
                                ],
                            }),
                            onBioChange: (e) => (0, E6.p)({ guildId: n.id, bio: e }),
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
var Tk = i(405318);
function Tw(e) {
    (0, _.openModalLazy)(async () => {
        let { default: t } = await Promise.all([i.e("2125"), i.e("66901"), i.e("61129")]).then(i.bind(i, 475312));
        return (i) => (0, p.jsx)(t, { source: { ...e, page: q.liQ.GUILD_MEMBER_PROFILE_SETTINGS }, ...i });
    });
}
function TF(e) {
    let { selectedGuild: t, onGuildChange: i } = e,
        { analyticsLocations: n } = (0, nU.Ay)(eM.A.USER_SETTINGS_GUILD_PROFILE),
        s = (0, O.bG)([t3.default], () => {
            let e = t3.default.getCurrentUser();
            return ty()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        l = (0, O.bG)([EF.Ay], () => (null != t ? EF.Ay.getMember(t.id, s.id) : null)),
        r = (0, O.bG)([Ew.A], () => !Ew.A.isFetchingProfile(s.id, t?.id)),
        a = (0, O.bG)([e_.A], () => e_.A.hidePersonalInformation),
        { pendingAvatar: o, pendingNameplate: u, ...d } = (0, O.cf)([Eb.A], () => Eb.A.getPendingChanges(t?.id)),
        c = (0, Ek.V7)({ userId: s.id, image: o }),
        m = (0, EP.lw)({
            pendingValue: u,
            userValue: s?.collectibles?.nameplate,
            guildValue: l?.collectibles?.nameplate,
            guildId: t?.id,
        }),
        { pendingDisplayNameStyles: A } = (0, EP.B0)(s, t?.id);
    return (N.useEffect(() => () => n6.h.wait(EL.IM), []), a)
        ? (0, p.jsx)(uX.A, {})
        : r
          ? (0, p.jsxs)(nU.f5, {
                value: n,
                children: [
                    (0, p.jsx)(V.E, {
                        variant: "text-sm/normal",
                        children: g.intl.format(g.t["/PTB2E"], {
                            helpCenterLink: ta.A.getArticleURL(q.MVz.GUILD_PROFILES),
                        }),
                    }),
                    null != t
                        ? (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsx)(ow.A, { guildId: t.id, onChange: i }),
                                  (0, p.jsx)(EM, {
                                      profilePreviewTitle: (0, p.jsx)(eA.D, {
                                          variant: "heading-md/medium",
                                          className: Tk.YV,
                                          children: g.intl.formatToPlainString(g.t.Tc0slG, { guildName: t?.name }),
                                      }),
                                      profilePreview: (0, p.jsx)(EV.A, {
                                          ...d,
                                          pendingAvatar: c,
                                          pendingDisplayNameStyles: A,
                                          user: s,
                                          guild: t,
                                          canUsePremiumCustomization: oK.Ay.canUsePremiumProfileCustomization(s),
                                          onUpsellClick: Tw,
                                          containerClassName: Tk.ti,
                                      }),
                                      nameplatePreview: (0, p.jsx)(ED.A, {
                                          ...d,
                                          pendingDisplayNameStyles: A,
                                          user: s,
                                          guildId: t?.id,
                                          nameplate: m,
                                          className: null == m ? Tk.tJ : void 0,
                                          isHighlighted: !0,
                                      }),
                                      children: (0, p.jsx)(TV, {}),
                                  }),
                              ],
                          })
                        : (0, p.jsx)(Ez, {}),
                ],
            })
          : (0, p.jsx)(uK.y, {});
}
var TB = i(903209),
    Tz = i(913403);
let TY = (e) => {
    let { children: t, notice: i } = e;
    return (0, p.jsxs)("div", { className: Tz.r, children: [i, (0, p.jsx)("div", { children: t })] });
};
var TX = i(269115),
    TH = i(823092),
    TK = i(859040),
    TW = i(379197),
    TZ = i(488430),
    Tq = i(457421),
    TQ = i(940622),
    TJ = i(559474),
    T$ = i(144030);
let T0 = () => {
    let e,
        t,
        i,
        n,
        { analyticsLocations: s } = (0, nU.Ay)(eM.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
        l = N.useRef(null),
        {
            asset: r,
            popoutAsset: a,
            title: o,
            body: u,
            version: d,
            revertTextColor: c,
        } = ((e = (0, TQ.mb)(TJ.RN.UPSELL_BANNER)),
        (t = (0, TQ.mb)(TJ.RN.UPSELL_BANNER_POPOUT)),
        (i = (0, O.bG)([Tq.A], () => Tq.A.getMarketingBySurface(TW.R.EDIT_PROFILE_SETTINGS))),
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
            () => ({ ...n, type: TZ.G.BANNER, asset: e ?? n.asset, popoutAsset: t ?? n.popoutAsset }),
            [e, t, n],
        )),
        { navigateWithValidation: m } = (0, TH.L_)();
    return (
        N.useEffect(() => {
            Y.default.track(q.HAw.PREMIUM_UPSELL_VIEWED, {
                type: sf.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                location_stack: s,
                version: d,
            });
        }, [s, d]),
        (0, p.jsxs)("div", {
            ref: l,
            className: T$.kL,
            style: { backgroundImage: `url(${r})` },
            children: [
                (0, p.jsx)("div", {
                    className: T$.JS,
                    "aria-hidden": !0,
                    role: "presentation",
                    children: (0, p.jsx)("img", { src: a, className: T$.Qw, alt: "" }),
                }),
                (0, p.jsxs)("div", {
                    className: T$.Em,
                    children: [
                        (0, p.jsx)(eA.D, {
                            variant: "heading-lg/extrabold",
                            color: c ? "text-overlay-dark" : "currentColor",
                            className: T$.DD,
                            children: o,
                        }),
                        (0, p.jsx)(V.E, {
                            variant: "text-sm/normal",
                            color: c ? "text-overlay-dark" : "currentColor",
                            children: u,
                        }),
                    ],
                }),
                (0, p.jsx)(eh.$, {
                    onClick: () => {
                        m(() =>
                            (0, TK.Cz)({
                                analyticsLocations: s,
                                analyticsSource: eM.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
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
var T1 = i(451909),
    T2 = i(959249),
    T3 = i(400669),
    T6 = i(835071),
    T4 = i(422936),
    T7 = i(234419),
    T8 = i(590180),
    T5 = i(898461),
    T9 = i(207803),
    xe = i(508425),
    xt = i(559949);
let xi = {
        above_the_clouds: {
            preset: "above_the_clouds",
            themeColors: [752280, 9215590],
            avatarDecorationSkuId: "1144059132517826601",
            displayNameStyles: { fontId: xt.x.CHICLE, effectId: xe.z.POP, colors: [959694] },
            getName: () => g.intl.string(g.t["TFc+iF"]),
            getHeaderSrc: () => i(702051).A,
            getBannerSrc: (e) => (e ? i(735161).A : i(887e3).A),
        },
        cyberpunk: {
            preset: "cyberpunk",
            themeColors: [1967991, 742532],
            avatarDecorationSkuId: null,
            displayNameStyles: { fontId: xt.x.PIXELIFY, effectId: xe.z.NEON, colors: [2949343] },
            getName: () => g.intl.string(g.t["4g+5bq"]),
            getHeaderSrc: () => i(272017).A,
            getBannerSrc: (e) => (e ? i(735271).A : i(208574).A),
        },
        shadow_realm: {
            preset: "shadow_realm",
            themeColors: [0, 4458504],
            avatarDecorationSkuId: "1144058522808614923",
            displayNameStyles: { fontId: xt.x.NEO_CASTEL, effectId: xe.z.TOON, colors: [0xff0000] },
            getName: () => g.intl.string(g.t.ycg1xj),
            getHeaderSrc: () => i(863653).A,
            getBannerSrc: (e) => (e ? i(538263).A : i(576974).A),
        },
        starlit_dream: {
            preset: "starlit_dream",
            themeColors: [5123751, 590625],
            avatarDecorationSkuId: "1144058844004233369",
            displayNameStyles: { fontId: xt.x.CHERRY_BOMB, effectId: xe.z.TOON, colors: [3343795] },
            getName: () => g.intl.string(g.t["9WLHvr"]),
            getHeaderSrc: () => i(434361).A,
            getBannerSrc: (e) => (e ? i(700309).A : i(135572).A),
        },
        neon_space: {
            preset: "neon_space",
            themeColors: [6094952, 1007678],
            avatarDecorationSkuId: null,
            displayNameStyles: { fontId: xt.x.MUSEO_MODERNO, effectId: xe.z.NEON, colors: [28737] },
            getName: () => g.intl.string(g.t.UdNuqi),
            getHeaderSrc: () => i(301928).A,
            getBannerSrc: (e) => (e ? i(285974).A : i(775627).A),
        },
    },
    xn = (e) => xi[e],
    xs = Object.keys(xi),
    xl = (e) => {
        let t = null == e ? xs : xs.filter((t) => t !== e);
        return t[Math.floor(Math.random() * t.length)];
    };
var xr = i(371912),
    xa = i(674253);
function xo(e) {
    let { preset: t, onShuffle: i } = e,
        n = (0, O.bG)([iW.A], () => iW.A.useReducedMotion),
        s = (0, xr.Xf)({ useReducedMotion: n }),
        { name: l, header: r } = N.useMemo(() => {
            let e = xn(t);
            return { name: e.getName(), header: e.getHeaderSrc() };
        }, [t]);
    return (0, p.jsxs)("div", {
        className: xa.kL,
        children: [
            (0, p.jsx)(M.D, {
                onClick: () => {
                    i(), s.startAnimation(!1);
                },
                className: xa.x6,
                "aria-label": g.intl.string(g.t["44yJxh"]),
                children: s.render(),
            }),
            (0, p.jsxs)(M.D, {
                onClick: () => {
                    i(), s.startAnimation(!1);
                },
                "aria-label": `${l}: ${g.intl.string(g.t["44yJxh"])}`,
                className: xa.Lt,
                children: [
                    (0, p.jsx)("img", { alt: "", "aria-hidden": !0, src: r, className: xa.L_ }),
                    (0, p.jsx)(V.E, { className: xa._e, variant: "text-sm/bold", color: "always-white", children: l }),
                ],
            }),
        ],
    });
}
var xu = i(511484),
    xd = i(811611),
    xc = i(515718),
    xg = i(507553);
function xm(e, t) {
    let i = xg.A.useField("scrollPosition"),
        n = (0, O.bG)([iW.A], () => iW.A.useReducedMotion);
    (0, N.useEffect)(() => {
        let s = e.current;
        if (null == s || i !== t) return;
        let l = requestAnimationFrame(() => {
            s.scrollIntoView({ behavior: n ? "auto" : "smooth" }), xg.A.setState({ scrollPosition: null });
        });
        return () => cancelAnimationFrame(l);
    }, [e, t, i, n]);
}
var xA = i(844222),
    xh = i(314649);
function xE(e) {
    let { user: t } = e,
        { reducedMotion: n } = N.useContext(xA.C),
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
        } = (0, O.cf)([Eb.A], () => {
            let e = Eb.A.getPendingChanges(),
                t = Eb.A.getTryItOutChanges();
            return { ...e, ...t };
        }),
        T = (0, Ek.V7)({ userId: t.id, image: m ?? s });
    return (0, p.jsx)(EV.A, {
        user: t,
        pendingPronouns: d,
        pendingBio: c,
        pendingBanner: A ?? l ?? i(636763),
        pendingDisplayNameStyles: E ?? o,
        pendingAvatar: T,
        pendingThemeColors: g ?? u,
        pendingAvatarDecoration: void 0 !== h ? h : r,
        pendingProfileEffect: a,
        avatarClassName: null != m || null != s || n.enabled ? void 0 : xh.WX,
        containerClassName: xh.ti,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        hideExampleButton: !0,
    });
}
var xT = i(461414);
function xx(e) {
    let { user: t, isVisible: i, shouldShow: n } = e,
        s = oK.Ay.isPremium(t),
        l = oK.Ay.canUseAnimatedAvatar(t),
        {
            pendingAvatar: r,
            pendingThemeColors: a,
            tryItOutThemeColors: o,
            tryItOutAvatar: u,
            tryItOutBanner: d,
        } = (0, O.cf)([Eb.A], () => {
            let e = Eb.A.getPendingChanges(),
                t = Eb.A.getErrors(),
                i = Eb.A.getTryItOutChanges();
            return { ...e, ...i, errors: t };
        }),
        { preset: c, onShuffle: m } = (function () {
            let e = (0, O.bG)([iW.A], () => iW.A.useReducedMotion),
                [t, i] = (0, N.useState)(xl()),
                {
                    banner: n,
                    themeColors: s,
                    avatarDecorationSkuId: l,
                    displayNameStyles: r,
                } = (0, N.useMemo)(() => {
                    let i = xn(t);
                    return {
                        banner: i.getBannerSrc(e),
                        themeColors: i.themeColors,
                        avatarDecorationSkuId: i.avatarDecorationSkuId,
                        displayNameStyles: i.displayNameStyles,
                    };
                }, [t, e]),
                a = (0, O.bG)([T8.A], () => {
                    let e = T8.A.getProduct(l);
                    return (0, T5.T)(e?.items[0]) ? e.items[0] : null;
                });
            (0, N.useEffect)(() => {
                (0, T9.w5)({ banner: n, themeColors: s, avatarDecoration: a, displayNameStyles: r });
            }, [n, s, a, r]);
            let o = (0, N.useCallback)(() => {
                let e = xl(t);
                i(e), Y.default.track(q.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: e });
            }, [t]);
            return { preset: t, onShuffle: o };
        })(),
        A = N.useRef(null);
    xm(A, nv._F.TRY_IT_OUT);
    let { analyticsLocations: h, sourceAnalyticsLocations: E } = (0, nU.Ay)(eM.A.USER_SETTINGS_TRY_OUT_PREMIUM),
        T = (e) => {
            e &&
                (d?.startsWith("https:") === !0
                    ? fetch(d)
                          .then((e) => e.blob())
                          .then((e) => (0, xc.We)(e))
                          .then((e) => {
                              (0, E6.p)({ avatar: u, themeColors: o, banner: e });
                          })
                          .catch(() => {
                              (0, E6.p)({ avatar: u, themeColors: o });
                          })
                    : null != d
                      ? (0, E6.p)({ avatar: u, themeColors: o, banner: d })
                      : (0, E6.p)({ avatar: u, themeColors: o }),
                Y.default.track(q.HAw.TRY_IT_OUT_PRESET_SELECTED, { preset: c }));
        };
    N.useEffect(() => {
        i &&
            Y.default.track(q.HAw.PREMIUM_UPSELL_VIEWED, {
                type: sf.e.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: q.liQ.USER_SETTINGS },
                location_stack: E,
            });
    }, [E, t, i]);
    let x = (0, T7.V)()?.subscription_trial?.sku_id === sf.pe.TIER_2,
        S = (0, T4.O)(),
        f = (0, xu.U9)(S, sf.pe.TIER_2);
    return n
        ? (0, p.jsx)(nU.f5, {
              value: h,
              children: (0, p.jsxs)(d6.A, {
                  ref: A,
                  className: xT.MT,
                  type: d6.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, p.jsx)(EM, {
                          stickyPreview: !1,
                          layoutClassName: xT.th,
                          profilePreviewTitle: (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsx)(oV.t, { size: "md", color: "currentColor", className: xT.PC }),
                                  g.intl.string(g.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, p.jsxs)(p.Fragment, {
                              children: [(0, p.jsx)(xo, { preset: c, onShuffle: m }), (0, p.jsx)(xE, { user: t })],
                          }),
                          children: (0, p.jsxs)("div", {
                              children: [
                                  (0, p.jsxs)("div", {
                                      children: [
                                          (0, p.jsx)(eA.D, {
                                              variant: "heading-xl/extrabold",
                                              children: g.intl.string(g.t["2zGdAW"]),
                                          }),
                                          (0, p.jsx)(V.E, {
                                              className: xT.h_,
                                              variant: "text-sm/normal",
                                              children: g.intl.string(g.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, p.jsx)(Tj, {
                                      className: xT.fz,
                                      user: t,
                                      pendingAvatarSrc: (0, Ek.V7)({ userId: t.id, image: u ?? r }),
                                      pendingColors: o ?? a,
                                      onThemeColorsChange: T9.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, p.jsx)(Ta, {
                                      className: xT.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != d,
                                      onBannerChange: T9.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !l &&
                                      (0, p.jsx)(Te, {
                                          className: xT.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: T9.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: g.intl.string(g.t["7z0D1c"]),
                                          sectionTitle: g.intl.string(g.t.vtFfPX),
                                      }),
                                  (0, p.jsx)(Ti, { user: t, className: xT.fz }),
                                  !x &&
                                      (0, p.jsx)(V.E, {
                                          variant: "text-sm/normal",
                                          children: g.intl.string(g.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !x &&
                          (0, p.jsx)(T2.d, {
                              onSubscribeModalClose: T,
                              className: xT.Kv,
                              showUpsell: !0,
                              text: g.intl.format(g.t.TmfgI2, {
                                  onClick: () => {
                                      (0, T6.K)({ onSubscribeFinish: T });
                                  },
                              }),
                              button: s
                                  ? g.intl.string(g.t.AfRWI8)
                                  : f
                                    ? g.intl.formatToPlainString(g.t.bkQ4bH, { percent: S?.discount.amount })
                                    : g.intl.string(g.t.pj0XBN),
                              position: "inline",
                          }),
                      x &&
                          (0, p.jsxs)("div", {
                              children: [
                                  (0, p.jsx)("div", { className: xT.BU }),
                                  (0, p.jsx)(xd.Ay, {
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
var xS = i(814390),
    xp = i(909536),
    xN = i(843282),
    xf = i(145497),
    x_ = i(685073),
    xC = i(534400),
    xI = i(581781),
    xb = i(743981),
    xv = i(51358);
let xj = (0, sp.Ld)(),
    xy = N.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: i, onChange: n } = e,
            s = N.useMemo(() => new Map(t.map((e) => [e.id, e])), [t]),
            l = (0, O.bG)([t3.default], () => (0, x_.Zo)(t3.default.getCurrentUser()?.primaryGuild).guildId),
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
                        : (0, p.jsx)(xI.A, {
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
                        : (0, p.jsx)(xf.j, {
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
                        : (0, p.jsx)(xC.o9, {
                              guildId: t.id,
                              guildTag: i,
                              guildBadge: t.profile?.badge ?? void 0,
                              badgeSize: xb.Sl.SIZE_16,
                              textColor: "interactive-text-default",
                              textVariant: "text-sm/semibold",
                          });
                },
                [s],
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
            xm(T, nv._F.GUILD_TAG),
            (0, p.jsxs)(oF.A, {
                title: g.intl.string(g.t.Pdd1nd),
                titleId: xj,
                ref: T,
                children: [
                    (0, p.jsx)(V.E, {
                        className: xv.VA,
                        variant: "text-sm/normal",
                        children: g.intl.string(g.t.mlZ6Jx),
                    }),
                    (0, p.jsx)(xN.Pw, {
                        className: xv.Lt,
                        optionClassName: xv.S0,
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
var xO = i(556729);
function xR(e) {
    let t = (0, EX.L)(sf.PremiumTypes.TIER_2);
    return (0, p.jsxs)(oF.A, {
        errors: e.errors,
        disabled: e.disabled,
        title: g.intl.string(g.t["9AjdkD"]),
        children: [
            (0, p.jsx)("div", {
                children: (0, p.jsx)(lL.k, {
                    placeholder: e.placeholder,
                    maxLength: q.zzC,
                    onChange: e.onGlobalNameChange,
                    value: e.pendingGlobalName ?? e.currentGlobalName ?? "",
                }),
            }),
            t && (0, p.jsx)(Ti, { user: e.user, className: xO.F }),
        ],
    });
}
function xL(e) {
    let { legacyUsername: t, pendingLegacyUsernameDisabled: i } = e,
        n = c.m$.useSetting(),
        s = void 0 !== i ? i : n;
    return (0, p.jsx)(L.d, {
        label: g.intl.string(g.t["3cWDuO"]),
        description: s ? null : g.intl.formatToPlainString(g.t.aYhclf, { username: t }),
        checked: !s,
        onChange: (e) => {
            !e === n ? (0, EC._e)() : (0, E6.p)({ legacyUsernameDisabled: !e });
        },
    });
}
function xD(e) {
    let { user: t, savedUserColor: i, pendingColor: n, setPendingAccentColor: s } = e,
        l = t.getAvatarURL(null, 80),
        r = (0, TT.r)(w.A.unsafe_rawColors.PRIMARY_530).hex(),
        a = (0, Tx.rh)(l, r, !1),
        o = (0, Tf.LX)(a[0]);
    return (0, p.jsx)(oF.A, {
        title: g.intl.string(g.t["/X3fkf"]),
        children: (0, p.jsx)(Tb, { onChange: (e) => s(e), color: n ?? i ?? o, suggestedColors: a, showEyeDropper: !0 }),
    });
}
var xP = i(518477);
let xG = () => {
    let e = (0, O.bG)([cs.default], () => cs.default.getId());
    return (0, p.jsx)(oF.A, {
        title: g.intl.string(g.t.Jzj9q4),
        children: (0, p.jsx)(eh.$, {
            text: g.intl.string(g.t.Geikwq),
            onClick: () => {
                (0, Ey.openUserProfileModal)({
                    userId: e,
                    sourceAnalyticsLocations: [eM.A.USER_SETTINGS_USER_PROFILE],
                    hideRestrictedProfile: !0,
                    tabSection: xP.RP.WIDGETS,
                });
            },
            size: "sm",
        }),
    });
};
var xU = i(289299);
function xM() {
    let e = (0, O.bG)([t3.default], () => {
            let e = t3.default.getCurrentUser();
            return ty()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e;
        }),
        t = (0, O.bG)([Ew.A], () => Ew.A.getUserProfile(e.id)),
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
        } = (0, O.cf)([Eb.A], () => {
            let e = Eb.A.getPendingChanges(),
                t = Eb.A.getErrors();
            return { ...e, errors: t };
        }),
        m = (0, Ek.V7)({ userId: e.id, image: i }),
        A = (0, EY.EC)(),
        h = oK.Ay.canUsePremiumProfileCustomization(e),
        E = (0, EP.z5)(i, e.avatar),
        T = (0, EP.Ac)(s, t?.banner),
        x = (0, TS.Ay)(e.id),
        S = x?.getLegacyUsername(),
        N = (c.global_name?.length ?? 0) > 0 ? c.global_name : (A?.nick ?? []),
        f = (c.bio?.length ?? 0) > 0 ? c.bio : (A?.bio ?? []),
        _ = (0, O.yK)([H.A, EF.Ay], () =>
            H.A.getGuildsArray().filter(
                (e) => (0, x_.Rg)(e) && EF.Ay.getSelfMember(e.id)?.joinedAt != null && e.profile?.tag != null,
            ),
        );
    return (0, p.jsxs)("div", {
        className: xU.Q,
        children: [
            (0, p.jsx)(xR, {
                placeholder: e.username,
                errors: N,
                currentGlobalName: e.globalName,
                pendingGlobalName: n,
                onGlobalNameChange: (e) => (0, E6.p)({ globalName: e }),
                user: e,
            }),
            (0, p.jsx)(
                Ty,
                {
                    sectionTitle: g.intl.string(g.t["+T3RI/"]),
                    errors: c.pronouns,
                    onPronounsChange: (e) => (0, E6.p)({ pronouns: e }),
                    pendingPronouns: r,
                    currentPronouns: t?.pronouns ?? "",
                },
                "pronouns",
            ),
            (0, p.jsx)(xG, {}),
            (0, p.jsx)(
                Te,
                {
                    onAvatarChange: (e) => {
                        (0, E6.p)({ avatar: e }), (0, EP.WU)(null == e ? "remove" : "set");
                    },
                    showRemoveAvatarButton: E,
                    errors: c.avatar,
                    sectionTitle: g.intl.string(g.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, p.jsx)(E7, { user: e, sectionTitle: g.intl.string(g.t["7v0T9P"]) }, "decoration"),
            (0, p.jsx)(Tl, { user: e }),
            (0, p.jsx)(Td, { user: e, sectionTitle: g.intl.string(g.t.wR5wOo) }, "effect"),
            (0, p.jsx)(TA, { user: e, sectionTitle: g.intl.string(g.t.GWrZOd) }, "frame"),
            h
                ? (0, p.jsxs)(p.Fragment, {
                      children: [
                          (0, p.jsx)(
                              Ta,
                              {
                                  showRemoveBannerButton: T,
                                  errors: c.banner,
                                  onBannerChange: (e) => (0, E6.p)({ banner: e }),
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, p.jsx)(Tj, {
                              user: e,
                              pendingAvatarSrc: m,
                              pendingColors: o,
                              onThemeColorsChange: (e) => (0, E6.p)({ themeColors: e }),
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, p.jsx)(
                      xD,
                      {
                          user: e,
                          savedUserColor: t?.accentColor,
                          pendingColor: a,
                          setPendingAccentColor: (e) => (0, E6.p)({ accentColor: e }),
                      },
                      "color",
                  ),
            (0, p.jsx)(
                E0,
                {
                    sectionTitle: g.intl.string(g.t.ZzAR2Y),
                    errors: f,
                    onBioChange: (e) => (0, E6.p)({ bio: e }),
                    pendingBio: l,
                    currentBio: t?.bio ?? "",
                },
                "bio",
            ),
            _.length > 0 &&
                (0, p.jsx)(xy, {
                    availablePrimaryGuilds: _,
                    pendingPrimaryGuildId: d,
                    onChange: (e) => (0, E6.p)({ primaryGuildId: e }),
                }),
            null != S && (0, p.jsx)(xL, { legacyUsername: S, pendingLegacyUsernameDisabled: u }, "legacy_username"),
        ],
    });
}
function xV() {
    (0, _.openModalLazy)(async () => {
        let { default: e } = await Promise.all([i.e("2125"), i.e("66901"), i.e("41704")]).then(i.bind(i, 562011));
        return (t) =>
            (0, p.jsx)(e, {
                ...t,
                source: {
                    page: q.liQ.USER_SETTINGS,
                    section: q.JJy.SETTINGS_CUSTOMIZE_PROFILE,
                    object: q.ZSU.BUTTON_CTA,
                    type: q.AnalyticsObjectTypes.BUY,
                },
            });
    });
}
var xk = i(482549);
function xw() {
    let e = (0, O.bG)([t3.default], () => {
            let e = t3.default.getCurrentUser();
            return ty()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e;
        }),
        t = (0, O.bG)([e_.A], () => e_.A.hidePersonalInformation),
        {
            pendingBio: i,
            pendingAvatar: n,
            pendingNameplate: s,
            showNotice: l,
            ...r
        } = (0, O.cf)([Eb.A], () => ({ ...Eb.A.getPendingChanges(), showNotice: Eb.A.showNotice() })),
        a = (0, Ek.V7)({ userId: e.id, image: n }),
        o = (0, EP.lw)({ pendingValue: s, userValue: e?.collectibles?.nameplate }),
        u = (0, xS.A)() && null != i ? T1.Ay.parse(void 0, i).content : i,
        d = oK.Ay.canUsePremiumProfileCustomization(e),
        c = (0, xp.St)("edit-profile-upsell"),
        { analyticsLocations: m } = (0, nU.Ay)(eM.A.USER_SETTINGS_USER_PROFILE);
    N.useEffect(() => () => n6.h.wait(EC.IM), []);
    let [A, h] = N.useState(!1),
        E = !d,
        T = N.useRef(null);
    return t
        ? (0, p.jsx)(uX.A, {})
        : (0, p.jsxs)(nU.f5, {
              value: m,
              children: [
                  (0, p.jsx)(T0, {}),
                  (0, p.jsx)(EM, {
                      profilePreview: (0, p.jsx)(EV.A, {
                          user: e,
                          canUsePremiumCustomization: d,
                          onUpsellClick: xV,
                          pendingBio: u,
                          ...r,
                          pendingAvatar: a,
                          containerClassName: xk.ti,
                      }),
                      nameplatePreview: (0, p.jsx)(ED.A, {
                          user: e,
                          nameplate: o,
                          ...r,
                          className: null == o ? xk.tJ : void 0,
                          isHighlighted: !0,
                      }),
                      children: (0, p.jsx)(xM, {}),
                  }),
                  (0, p.jsx)(TX.L, {
                      innerRef: T,
                      onChange: (e) => h(e),
                      threshold: 0.25,
                      active: E,
                      children: (0, p.jsx)("div", {
                          ref: T,
                          children: (0, p.jsx)(xx, { user: e, shouldShow: E, isVisible: A }),
                      }),
                  }),
                  E &&
                      !l &&
                      (0, p.jsx)(T2.d, {
                          className: xk.EL,
                          showUpsell: !A,
                          text: g.intl.format(g.t.TmfgI2, { onClick: () => (0, T6.K)({}) }),
                          textVariant: "heading-md/medium",
                          useUpdatedStyling: !0,
                          leadingAction: c
                              ? (0, p.jsx)(T3.l, { size: "md", location: eM.A.PREMIUM_WISHLIST_EDIT_PROFILE_UPSELL })
                              : void 0,
                          button: (0, p.jsx)("div", {
                              className: xk.Xl,
                              children: (0, p.jsx)(eh.$, {
                                  variant: "overlay-primary",
                                  onClick: () => {
                                      Y.default.track(q.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                                          cta_variant: "floating_action_button",
                                      }),
                                          T?.current?.scrollIntoView({ behavior: "smooth" });
                                  },
                                  text: g.intl.string(g.t.uw9zI7),
                                  icon: oV.t,
                              }),
                          }),
                      }),
              ],
          });
}
var xF = i(625494),
    xB = i(454078);
let xz = { [nv.Eq.USER_PROFILE]: "main_profile_tab", [nv.Eq.GUILD]: "guild_profile_tab" },
    xY = (0, o.E2)(u.X.PROFILE_SETTING, {
        Component: function () {
            let e = (0, O.bG)([lw.A, K.Ay, Eb.A], () => {
                    let e = Eb.A.selectedGuildId ?? lw.A.getGuildId();
                    return null == e || Eb._.has(e) ? K.Ay.getFlattenedGuildIds().find((e) => !Eb._.has(e)) : e;
                }),
                t = (0, O.bG)([H.A], () => H.A.getGuild(e)),
                i = (0, O.bG)([Eb.A], () => Eb.A.showNotice()),
                n = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
                s = xg.A.useField("subsection");
            return (
                N.useEffect(() => {
                    (0, rp._)(xz[s]);
                }, [s]),
                N.useEffect(() => {
                    null != n && t?.id != null && (0, TB.A)(n.id, n.getAvatarURL(t?.id, 80), { guildId: t?.id });
                }, [t?.id, n]),
                (0, p.jsxs)(TY, {
                    children: [
                        (0, p.jsxs)(EO.V, {
                            className: xB.$H,
                            type: "top",
                            look: "brand",
                            selectedItem: s,
                            onItemSelect: function (e) {
                                if (s !== e) {
                                    if (i) {
                                        (0, rN.fO)({ duration: 300, intensity: ER.n3 }),
                                            xF._.dispatch(q.jej.EMPHASIZE_NOTICE);
                                        return;
                                    }
                                    e === nv.Eq.GUILD && null != t && (0, EL.V2)(t.id),
                                        xg.A.setState({ subsection: e });
                                }
                            },
                            children: [
                                (0, p.jsx)(
                                    EO.V.Item,
                                    {
                                        className: xB.YU,
                                        id: nv.Eq.USER_PROFILE,
                                        children: g.intl.string(g.t["2p07FR"]),
                                    },
                                    nv.Eq.USER_PROFILE,
                                ),
                                (0, p.jsx)(
                                    EO.V.Item,
                                    {
                                        className: ew()(xB.YU, xB.HY),
                                        "aria-label": g.intl.string(g.t.kPHroX),
                                        id: nv.Eq.GUILD,
                                        children: g.intl.string(g.t.kPHroX),
                                    },
                                    nv.Eq.GUILD,
                                ),
                            ],
                        }),
                        s === nv.Eq.GUILD
                            ? (0, p.jsx)(TF, {
                                  selectedGuild: t,
                                  onGuildChange: function (e) {
                                      if (i) {
                                          (0, rN.fO)({ duration: 300, intensity: ER.n3 }),
                                              xF._.dispatch(q.jej.EMPHASIZE_NOTICE);
                                          return;
                                      }
                                      null != e && (0, EL.JJ)(e.id);
                                  },
                              })
                            : (0, p.jsx)(xw, {}),
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
    xX = (0, o.zZ)(u.X.PROFILE_CATEGORY, { buildLayout: () => [xY] });
var xH = i(881324);
let xK = () => {
        let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
            { avatarSrc: t, avatarDecorationSrc: i } = (0, Ej.A)({ userId: e?.id, size: iK._3.SIZE_48 });
        return null == e
            ? null
            : (0, p.jsxs)("div", {
                  className: xH.a5,
                  children: [
                      (0, p.jsx)(iH.eu, {
                          src: t,
                          avatarDecoration: i,
                          size: iK._3.SIZE_48,
                          "aria-label": g.intl.string(g.t.lqaIxI),
                      }),
                      (0, p.jsxs)("div", {
                          className: xH.FS,
                          children: [
                              (0, p.jsx)(V.E, {
                                  color: "text-strong",
                                  variant: "text-md/medium",
                                  lineClamp: 1,
                                  children: e.globalName ?? e.username,
                              }),
                              (0, p.jsxs)("div", {
                                  className: xH.Fk,
                                  children: [
                                      (0, p.jsx)(V.E, {
                                          variant: "text-sm/normal",
                                          color: "currentColor",
                                          lineClamp: 1,
                                          children: g.intl.string(g.t.Ip9nBS),
                                      }),
                                      (0, p.jsx)(oH.R, { size: "xxs", color: "currentColor" }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              });
    },
    xW = (0, o.t_)(u.X.PROFILE_PANEL, {
        useTitle: () => g.intl.string(g.t["vi7f+q"]),
        notice: { stores: [Eb.A], element: EI.A },
        initialize: () => () =>
            n6.h.wait(() => {
                (0, EC.F7)();
            }),
        buildLayout: () => [xX],
    }),
    xZ = (0, o.i4)(u.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["vi7f+q"]),
        icon: xQ,
        StronglyDiscouragedCustomComponent: xK,
        usePredicate: () => !(0, Ev.X)("user_settings_sidebar"),
        buildLayout: () => [xW],
    }),
    xq = (0, o.i4)(u.X.PROFILE_SIDEBAR_ITEM_WYSIWYG, {
        useTitle: () => g.intl.string(g.t["vi7f+q"]),
        icon: xQ,
        StronglyDiscouragedCustomComponent: xK,
        usePredicate: () => (0, Ev.X)("user_settings_sidebar"),
        onClick: () => {
            let e = cs.default.getId();
            (0, Ey.openUserProfileModal)({ userId: e });
        },
        buildLayout: () => [],
    });
function xQ() {
    let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: i } = (0, Ej.A)({ userId: e?.id, size: iK._3.SIZE_48 });
    return (0, p.jsx)(iH.eu, { src: t, avatarDecoration: i, size: iK._3.SIZE_20, "aria-hidden": !0 });
}
let xJ = (0, o.WI)(u.X.PROFILE_SECTION, { hoisted: !0, buildLayout: () => [xZ, xq] });
var x$ = i(98207);
function x0() {
    return (0, p.jsx)(tr.p, { icon: uH.X, messageType: tr.Y.POSITIVE, children: g.intl.string(g.t.FsmBy4) });
}
var x1 = i(670492),
    x2 = i(579872),
    x3 = i(900686),
    x6 = i(518142),
    x4 = i(662758),
    x7 = i(407186);
function x8(e) {
    let { backupCodes: t, hasTOTPEnabled: i, currentUser: n } = e,
        s = N.useCallback((e) => {
            (0, _.openModal)((t) => (0, p.jsx)(x6.default, { ...t, password: e }), { stackingBehavior: "stack" });
        }, []),
        l = N.useCallback(() => {
            (0, _.openModal)((e) =>
                (0, p.jsx)(x4.default, {
                    ...e,
                    handleSubmit: (e) =>
                        x$.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                            s(e);
                        }),
                    title: g.intl.string(g.t.PsQmzU),
                    actionText: g.intl.string(g.t.ajkYcF),
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
                i = g.intl.formatToPlainString(g.t["uYWwh/"], { email: n.email });
            return `${i}\r
\r
${e}`;
        }, [t, n.email]),
        a = N.useMemo(
            () =>
                t.length > 0
                    ? (0, p.jsx)(x3.A, {
                          fileContents: r,
                          contentType: "text/plain",
                          fileName: "discord_backup_codes.txt",
                          children: (0, p.jsx)(eh.$, {
                              variant: "primary",
                              size: "sm",
                              text: g.intl.string(g.t.qZZUy6),
                          }),
                      })
                    : (0, p.jsx)(eh.$, { variant: "primary", size: "sm", text: g.intl.string(g.t.xZEzbu), onClick: l }),
            [t.length, r, l],
        ),
        o = N.useCallback(() => {
            x2.A.show({
                title: g.intl.string(g.t["D+aE7g"]),
                body: g.intl.string(g.t.EA4ZEk),
                cancelText: g.intl.string(g.t["ETE/oC"]),
                onConfirm: () => x$.A.disable(),
            });
        }, []);
    return (0, p.jsx)(sO.D, {
        label: g.intl.string(g.t.EPVq00),
        description: g.intl.string(g.t.bQwxib),
        children: (0, p.jsxs)(aR.e, {
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
                        onClick: x7.Ay.enableMFA,
                    }),
            ],
        }),
    });
}
var x5 = i(464477);
function x9() {
    return !x5.K7;
}
let Se = (0, o.E2)(u.X.ACCOUNT_TWO_FACTOR_CRYPTO_NOTICE, {
    useSearchTerms: () => [g.intl.string(g.t.m0FidJ)],
    usePredicate: x9,
    Component: function () {
        return (0, p.jsx)(sO.D, {
            label: g.intl.string(g.t.EPVq00),
            children: (0, p.jsx)(tr.p, { messageType: tr.Y.INFO, children: g.intl.string(g.t.PhHhsj) }),
        });
    },
});
function St() {
    let e = x9(),
        t = (0, O.bG)([t3.default], () => {
            let e = t3.default.getCurrentUser();
            return null != e && !e.verified;
        });
    return !e && t;
}
let Si = (0, o.E2)(u.X.ACCOUNT_UNVERIFIED_USER_NOTICE, {
    useSearchTerms: () => [g.intl.string(g.t.m0FidJ)],
    usePredicate: St,
    Component: function () {
        return (0, p.jsx)(sO.D, {
            label: g.intl.string(g.t.EPVq00),
            children: (0, p.jsx)(tr.p, { messageType: tr.Y.WARNING, children: g.intl.string(g.t.uggF7o) }),
        });
    },
});
function Sn() {
    return (0, O.bG)([t3.default], () => {
        let e = t3.default.getCurrentUser();
        return null != e && e.mfaEnabled;
    });
}
let Ss = (0, o.E2)(u.X.ACCOUNT_AUTHENTICATOR_APP_SETTING, {
    useSearchTerms: function () {
        let e = (0, O.bG)([cs.default], () => cs.default.hasTOTPEnabled()),
            t = [g.intl.string(g.t.m0FidJ), g.intl.string(g.t.xZEzbu)];
        return e ? t.push(g.intl.string(g.t["D+aE7g"])) : t.push(g.intl.string(g.t.cDgKte)), t;
    },
    usePredicate: function () {
        let e = x9(),
            t = St(),
            i = Sn();
        return !e && !t && i;
    },
    Component: function () {
        let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
            t = (0, O.bG)([x1.A], () => x1.A.getBackupCodes()),
            i = (0, O.bG)([cs.default], () => cs.default.hasTOTPEnabled());
        return null == e ? null : (0, p.jsx)(x8, { backupCodes: t, currentUser: e, hasTOTPEnabled: i });
    },
});
var Sl = i(658675),
    Sr = i(103579);
function Sa(e) {
    let {
            code: { code: t, consumed: i },
        } = e,
        n = `${t.substr(0, 4)}-${t.substr(4)}`,
        s = N.useRef(null),
        l = N.useCallback(
            (e) => {
                "c" === e.key &&
                    e.metaKey &&
                    cu.p5 &&
                    (e.preventDefault(), e.stopPropagation(), (0, cu.C)(n), s?.current?.focus());
            },
            [n],
        );
    return (0, p.jsx)("li", {
        className: iC.SX,
        children: (0, p.jsxs)(M.D, {
            innerRef: s,
            className: Sr.Uc,
            onKeyDown: l,
            children: [(0, p.jsx)(Sl.P, { checked: i }), (0, p.jsx)("span", { className: Sr.aY, children: n })],
        }),
    });
}
function So(e) {
    let { backupCodes: t } = e,
        i = N.useCallback((e) => e.map((e) => (0, p.jsx)(Sa, { code: e }, e.code)), []),
        n = N.useCallback(async () => {
            let e = x1.A.getVerificationKey();
            await x$.A.confirmViewBackupCodes(e, !0);
        }, []);
    return (0, p.jsxs)(sO.D, {
        label: g.intl.string(g.t.GfqHPn),
        description: g.intl.format(g.t.OhmvYt, {}),
        children: [
            (0, p.jsxs)(lU.A, {
                children: [
                    (0, p.jsx)(lU.A.Child, {
                        children: (0, p.jsx)("ul", { className: Sr.Pm, children: i(t.slice(0, t.length / 2)) }),
                    }),
                    (0, p.jsx)(lU.A.Child, {
                        children: (0, p.jsx)("ul", { className: Sr.Pm, children: i(t.slice(t.length / 2)) }),
                    }),
                ],
            }),
            (0, p.jsx)(F.Q, { textVariant: "text-sm/medium", onClick: n, text: g.intl.string(g.t.RIThUu) }),
        ],
    });
}
let Su = (0, o.E2)(u.X.ACCOUNT_BACKUP_CODES_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t.m0FidJ), g.intl.string(g.t.xZEzbu)],
        usePredicate: function () {
            let e = x9(),
                t = St(),
                i = Sn(),
                n = (0, O.bG)([x1.A], () => x1.A.getBackupCodes().length > 0);
            return !e && !t && i && n;
        },
        Component: function () {
            let e = (0, O.bG)([x1.A], () => x1.A.getBackupCodes());
            return (0, p.jsx)(So, { backupCodes: e });
        },
    }),
    Sd = (0, o.E2)(u.X.ACCOUNT_ENABLE_MFA_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t.m0FidJ)],
        usePredicate: function () {
            let e = x9(),
                t = St();
            return (0, O.bG)([t3.default], () => {
                let i = t3.default.getCurrentUser();
                return null != i && !i.mfaEnabled && !e && !t;
            });
        },
        Component: function () {
            return (0, p.jsx)(sO.D, {
                label: g.intl.string(g.t.EPVq00),
                description: g.intl.string(g.t["8aDa1t"]),
                children: (0, p.jsx)(eh.$, {
                    variant: "primary",
                    size: "sm",
                    text: g.intl.string(g.t.cDgKte),
                    onClick: x7.Ay.enableMFA,
                }),
            });
        },
    });
var Sc = i(846017);
let Sg = (0, o.Tf)(u.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
        useTitle: () => g.intl.string(g.t["CIGa+7"]),
        useLabel: () => g.intl.string(g.t.bt75uw),
        useAriaLabel: () => g.intl.string(g.t["FRep5/"]),
        useVariant: () => "secondary",
        onClick: () => {
            (0, _.openModal)((e) => (0, p.jsx)(Sc.default, { ...e, onSuccess: () => e.onClose() }));
        },
    }),
    Sm = (0, o.E2)(u.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t["FRep5/"])],
        Component: function () {
            return (0, p.jsx)(eh.$, {
                variant: "primary",
                size: "sm",
                text: g.intl.string(g.t["FRep5/"]),
                onClick: () => (0, _.openModal)((e) => (0, p.jsx)(Sc.default, { ...e, onSuccess: e.onClose })),
            });
        },
    });
var SA = i(557722),
    Sh = i(615715);
function SE(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null == e
        ? null
        : e.hasAnyStaffLevel()
          ? t
              ? g.intl.string(g.t.YJGvuD)
              : g.intl.string(g.t["3iKih7"])
          : e.hasFlag(q.nhx.PARTNER)
            ? t
                ? g.intl.string(g.t["9UucjT"])
                : g.intl.string(g.t.Sq6Q1u)
            : null == e.email
              ? t
                  ? g.intl.string(g.t["9VWpT9"])
                  : g.intl.string(g.t.LfCBZG)
              : null;
}
var ST =
    (((r = {}).AVAILABLE = "available"),
    (r.UNAVAILABLE_NO_CRYPTO = "unavailable_no_crypto"),
    (r.UNAVAILABLE_UNVERIFIED = "unavailable_unverified"),
    r);
function Sx() {
    let e = (0, uy.bG)([t3.default], () => t3.default.getCurrentUser()?.verified);
    return x5.K7 ? (!1 === e ? "unavailable_unverified" : "available") : "unavailable_no_crypto";
}
function SS() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (0, uy.bG)([H.A, TR.A, t3.default], () =>
        t3.default.getCurrentUser()?.hasAnyStaffLevel()
            ? e
                ? g.intl.string(g.t.hxf9fX)
                : g.intl.string(g.t["3iKih7"])
            : H.A.getGuildsArray().some(
                    (e) =>
                        e.features.has(q.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) &&
                        TR.A.can(q.xBc.ADMINISTRATOR, e),
                )
              ? e
                  ? g.intl.string(g.t.OYTCUh)
                  : g.intl.string(g.t.HC8uSZ)
              : null,
    );
}
var Sp = i(53516);
function SN(e) {
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
            (0, _.openModal)((t) => (0, p.jsx)(Sh.default, { reason: SA.d.USER_SETTINGS_UPDATE, ...t, ...e }), {
                modalKey: Sp.V,
            });
        }, []),
        u = N.useCallback(() => {
            o();
        }, [o]),
        d = N.useCallback(() => {
            null == n.phone ? o({ onAddedPhone: x$.A.enableSMS }) : x$.A.enableSMS();
        }, [n, o]),
        c = N.useCallback(() => {
            (0, _.openModal)((e) =>
                (0, p.jsx)(x4.default, {
                    ...e,
                    handleSubmit: x$.A.disableSMS,
                    title: g.intl.string(g.t.KLWnit),
                    children: g.intl.string(g.t["W0/Duf"]),
                }),
            );
        }, []),
        m = N.useCallback((e) => (null == e ? "" : `${"*".repeat(e.length - 4)}${e.slice(-4)}`), []),
        A = null != n.phone,
        h = n.hasFlag(q.nhx.MFA_SMS);
    if (A || h) {
        let e = l ? n.phone : m(n.phone);
        i = (0, p.jsxs)(V.E, {
            variant: "text-sm/normal",
            children: [
                g.intl.format(g.t.PXVoEO, { phoneNumber: e }),
                (0, p.jsx)(uO.Anchor, {
                    onClick: a,
                    className: Sr.vN,
                    children: l ? g.intl.string(g.t.FfltIN) : g.intl.string(g.t.llArAg),
                }),
            ],
        });
    }
    if (h)
        t = (0, p.jsx)(eh.$, {
            variant: "critical-secondary",
            size: "sm",
            text: g.intl.string(g.t.KLWnit),
            loading: s,
            onClick: c,
        });
    else {
        let e = SE(n);
        t = (0, p.jsxs)(aR.e, {
            size: "sm",
            children: [
                (0, p.jsx)(eh.$, {
                    variant: "primary",
                    size: "sm",
                    text: e ?? g.intl.string(g.t.DZQe23),
                    onClick: d,
                    loading: s,
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
    return (0, p.jsxs)(sO.D, {
        label: g.intl.string(g.t.uHAJ5v),
        description: g.intl.string(g.t.fspJ4H),
        children: [i, t],
    });
}
let Sf = (0, o.E2)(u.X.ACCOUNT_SMS_BACKUP_AUTHENTICATION_SETTING, {
    useSearchTerms: () => [g.intl.string(g.t.uHAJ5v)],
    usePredicate: function () {
        let e = x9(),
            t = St(),
            i = Sn(),
            n = (0, O.bG)([cs.default], () => cs.default.hasTOTPEnabled());
        return !e && !t && i && n;
    },
    Component: function () {
        let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
            t = (0, O.bG)([x1.A], () => x1.A.togglingSMS);
        return null == e ? null : (0, p.jsx)(SN, { currentUser: e, togglingSMS: t });
    },
});
var S_ = i(328009);
let SC = (0, o.E2)(u.X.ACCOUNT_SECURITY_KEYS_SETTING, {
    useSearchTerms: () => [g.intl.string(g.t.vrOCCk), g.intl.string(g.t.y7SXYX)],
    usePredicate: function () {
        let e = x9(),
            t = St();
        return !e && !t;
    },
    Component: S_.A,
});
var SI = i(200921),
    Sb = i(390310),
    Sv = i(766928),
    Sj = i(568385),
    Sy = i(791606),
    SO = i(646270),
    SR = i(738678);
function SL(e, t) {
    let i = e.client_info?.location ?? e.client_info?.ip,
        n = e.client_info?.platform,
        { text: s, icon: l } = (function (e) {
            switch (e?.toLowerCase().trim()) {
                case null:
                case void 0:
                case "":
                    return { text: g.intl.string(g.t.cDHCNY), icon: e2.k };
                case "ios":
                case "android":
                    return { text: e, icon: SO.u };
                case "horizon os":
                    return { text: e, icon: SR.G };
                default:
                    return { text: e, icon: e2.k };
            }
        })(e.client_info?.os);
    return { location: i, platform: n, os: s, Icon: l, lastActive: t ? null : (0, Sb.Y)(e.approx_last_used_time) };
}
var SD = i(405814);
function SP() {
    return (0, p.jsx)(V.E, { variant: "text-sm/normal", className: SD.h_, children: g.intl.string(g.t.zZp618) });
}
function SG() {
    let { currentSession: e } = (0, Sb.r)();
    return null == e
        ? (0, p.jsx)("div", { className: SD.Lq, children: (0, p.jsx)(uK.y, {}) })
        : (0, p.jsx)(ia.n, { label: g.intl.string(g.t.LLS19o), children: (0, p.jsx)(SV, { session: e, current: !0 }) });
}
function SU(e) {
    let { checked: t, otherSessions: i } = e;
    return (0, p.jsx)(sO.D, {
        label: t.size > 0 ? g.intl.string(g.t.mMEmRO) : g.intl.string(g.t.Vij32M),
        description: g.intl.string(g.t.OTXyaf),
        children: (0, p.jsx)("div", {
            "data-button-hoisted-classname-wrapper": !0,
            className: SD.Cn,
            children: (0, p.jsx)(eh.$, {
                variant: "critical-secondary",
                size: "sm",
                text:
                    t.size > 0
                        ? g.intl.formatToPlainString(g.t["83CPLj"], { count: t.size })
                        : g.intl.string(g.t.cLmmeY),
                onClick: () => {
                    t.size > 0 ? (0, SI.U0)(Array.from(t)) : (0, SI.U0)(i.map((e) => e.id_hash));
                },
            }),
        }),
    });
}
function SM() {
    let { currentSession: e, otherSessions: t } = (0, Sb.r)(),
        i = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
        [n, s] = N.useState(new Set());
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
                                    SV,
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
                            i?.mfaEnabled ? null : (0, p.jsx)(Sk, {}),
                        ],
                    }),
                    t.length > 0 &&
                        (0, p.jsx)("div", {
                            className: SD.wq,
                            children: (0, p.jsx)(SU, { checked: n, otherSessions: t }),
                        }),
                ],
            })
          : null;
}
function SV(e) {
    let { session: t, current: i, setChecked: n, checked: s, useChecks: l } = e,
        { location: r, platform: a, os: o, Icon: u, lastActive: d } = SL(t, i),
        c = [o, a].filter(t6.Vq),
        m = [r, d].filter(t6.Vq);
    return (0, p.jsxs)(
        "div",
        {
            className: ew()(SD.dZ, { [SD.gg]: i }),
            children: [
                (0, p.jsxs)("div", {
                    className: SD.OC,
                    children: [
                        (0, p.jsx)("div", {
                            className: SD.km,
                            children: (0, p.jsx)(u, { size: "md", color: "currentColor" }),
                        }),
                        (0, p.jsxs)("div", {
                            className: SD.F3,
                            children: [
                                (0, p.jsxs)(V.E, {
                                    variant: "eyebrow",
                                    className: SD.nT,
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
                                (0, p.jsxs)(V.E, {
                                    variant: "text-sm/medium",
                                    className: SD.nT,
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
                            : l
                              ? (0, p.jsx)("div", {
                                    className: SD.GR,
                                    children: (0, p.jsx)(Sj.J, {
                                        onChange: (e) => {
                                            n?.(e);
                                        },
                                        checked: s,
                                    }),
                                })
                              : (0, p.jsx)(M.D, {
                                    className: SD.ux,
                                    onClick: (e) => {
                                        e.shiftKey ? n?.(!0) : (0, SI.U0)(t.id_hash);
                                    },
                                    "aria-label": g.intl.string(g.t.E4MJNt),
                                    children: (0, p.jsx)(cq.P, { size: "md", color: "currentColor" }),
                                }),
                    ],
                }),
                !i && (0, p.jsx)(eE.c, { className: SD.O9 }),
            ],
        },
        t.id_hash,
    );
}
function Sk() {
    return (0, p.jsxs)("div", {
        className: ew()(SD.dZ, SD.EC),
        children: [
            (0, p.jsxs)("div", {
                className: SD.OC,
                children: [
                    (0, p.jsx)("div", { className: SD.km, children: (0, p.jsx)(Sy.A, { width: "32", height: "32" }) }),
                    (0, p.jsxs)("div", {
                        className: SD.F3,
                        children: [
                            (0, p.jsx)(V.E, {
                                variant: "eyebrow",
                                className: SD.nT,
                                color: "text-muted",
                                children: (0, p.jsx)("span", { children: g.intl.string(g.t.iUa0sn) }),
                            }),
                            (0, p.jsx)(V.E, {
                                variant: "text-sm/medium",
                                className: SD.nT,
                                color: "text-muted",
                                children: (0, p.jsx)("span", {
                                    children: g.intl.format(g.t["044+8i"], {
                                        onClick: () =>
                                            (0, ej.openUserSettings)(u.X.ACCOUNT_PANEL, {
                                                analyticsLocations: [eM.A.USER_SETTINGS_SESSIONS],
                                            }),
                                    }),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, p.jsx)("div", { className: SD.O9 }),
        ],
    });
}
var Sw = i(176524),
    SF = i(583133);
function SB(e) {
    let { icon: t, label: i, subLabel: n, description: s, children: l, muted: r } = e;
    return (0, p.jsxs)(R.B, {
        direction: "horizontal",
        align: "center",
        gap: "sm",
        role: "listitem",
        children: [
            (0, p.jsx)(Sw.A, { Icon: t, color: r ? w.A.colors.ICON_MUTED : "currentColor" }),
            (0, p.jsxs)(R.B, {
                direction: "vertical",
                gap: "xxs",
                children: [
                    (0, p.jsxs)(R.B, {
                        direction: "horizontal",
                        gap: "xs",
                        children: [
                            (0, p.jsx)(V.E, { variant: "text-md/semibold", color: "text-strong", children: i }),
                            null != i &&
                                null != n &&
                                (0, p.jsx)(V.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    "aria-hidden": !0,
                                    children: "\u2022",
                                }),
                            null != n &&
                                (0, p.jsx)(V.E, { variant: "text-md/medium", color: "text-subtle", children: n }),
                        ],
                    }),
                    (0, p.jsx)(V.E, { variant: "text-sm/normal", color: "text-muted", children: s }),
                ],
            }),
            l,
        ],
    });
}
function Sz(e) {
    let { session: t, current: i } = e,
        { location: n, platform: s, os: l, Icon: r, lastActive: a } = SL(t, i),
        o = [n, a].filter(t6.Vq);
    return (0, p.jsx)(SB, {
        icon: r,
        label: l,
        subLabel: s,
        description: o.join(" \xb7 "),
        children:
            !i &&
            (0, p.jsx)(M.D, {
                className: SF.X,
                onClick: () => (0, SI.U0)(t.id_hash),
                "aria-label": g.intl.string(g.t.E4MJNt),
                children: (0, p.jsx)(cq.P, { size: "md", color: "currentColor" }),
            }),
    });
}
function SY(e) {
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
function SX() {
    let { currentSession: e } = (0, Sb.r)();
    return null == e
        ? (0, p.jsx)(uK.y, {})
        : (0, p.jsx)(SY, { title: g.intl.string(g.t.LLS19o), children: (0, p.jsx)(Sz, { session: e, current: !0 }) });
}
let SH = (0, o.E2)(u.X.SESSIONS_CURRENT_SESSION_SETTING, {
        Component: function () {
            return (0, iz._A)("CurrentSessionSetting") ? (0, p.jsx)(SX, {}) : (0, p.jsx)(SG, {});
        },
        useSearchTerms: () => [],
    }),
    SK = (0, o.E2)(u.X.SESSIONS_LOGOUT_ALL_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = (0, Sb.r)();
            return (0, p.jsx)(sO.D, {
                label: g.intl.string(g.t.Vij32M),
                description: g.intl.string(g.t.OTXyaf),
                children: (0, p.jsx)(eh.$, {
                    onClick: () => (0, SI.U0)(e.map((e) => e.id_hash)),
                    variant: "critical-primary",
                    size: "sm",
                    text: g.intl.string(g.t.cLmmeY),
                }),
            });
        },
        useSearchTerms: () => [g.intl.string(g.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = (0, Sb.r)();
            return e.length > 0;
        },
    });
function SW() {
    return (0, p.jsx)(SB, {
        icon: Sv.W,
        label: g.intl.string(g.t.iUa0sn),
        description: g.intl.format(g.t["044+8i"], {
            onClick: () =>
                (0, ej.openUserSettings)(u.X.ACCOUNT_PANEL, { analyticsLocations: [eM.A.USER_SETTINGS_SESSIONS] }),
        }),
        muted: !0,
    });
}
function SZ() {
    let { otherSessions: e } = (0, Sb.r)(),
        t = (0, O.bG)([t3.default], () => t3.default.getCurrentUser());
    return (0, p.jsxs)(SY, {
        title: g.intl.string(g.t.xx1MWc),
        children: [e.map((e) => (0, p.jsx)(Sz, { session: e }, e.id_hash)), t?.mfaEnabled ? null : (0, p.jsx)(SW, {})],
    });
}
let Sq = (0, o.E2)(u.X.SESSIONS_OTHER_SESSIONS_SETTING, {
        Component: function () {
            return (0, iz._A)("OtherSessionsSetting") ? (0, p.jsx)(SZ, {}) : (0, p.jsx)(SM, {});
        },
        useSearchTerms: () => [g.intl.string(g.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = (0, Sb.r)(),
                t = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.mfaEnabled);
            return e.length > 0 || !t;
        },
    }),
    SQ = (0, o.zZ)(u.X.SESSIONS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.mEndXM),
        useSubtitle: () => g.intl.string(g.t.b7ZpTM),
        initialize: () => {
            (0, SI.GY)();
        },
        buildLayout: () => [SH, Sq, SK],
        useSearchTerms: () => [
            g.intl.string(g.t["+1h0k/"]),
            g.intl.string(g.t.LLS19o),
            g.intl.string(g.t.xx1MWc),
            g.intl.string(g.t.lSWsrd),
        ],
    }),
    SJ = (0, o.zZ)(u.X.SESSIONS_CATEGORY, {
        useSearchTerms: () => [
            g.intl.string(g.t["+1h0k/"]),
            g.intl.string(g.t.LLS19o),
            g.intl.string(g.t.xx1MWc),
            g.intl.string(g.t.Vij32M),
            g.intl.string(g.t.lSWsrd),
        ],
        buildLayout: () => [SH, Sq],
        initialize: () => (
            (0, SI.GY)(),
            () => {
                (0, SI.ZQ)();
            }
        ),
        useInlineNotice: function () {
            return N.useMemo(() => ({ type: ef.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: SP }), []);
        },
    }),
    S$ = (0, o.t_)(u.X.SESSIONS_PANEL, {
        useTitle: () => ((0, iz._A)("SessionsPanel") ? g.intl.string(g.t.mEndXM) : g.intl.string(g.t["+1h0k/"])),
        useObscuredNotice: uX.L,
        buildLayout: () => ((0, iz.pC)("SessionsPanel") ? [SQ] : [SJ]),
    }),
    S0 = (0, o.i4)(u.X.SESSIONS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["+1h0k/"]),
        icon: Sv.W,
        usePredicate: () => !(0, iz._A)("SessionsPanel"),
        buildLayout: () => [S$],
    }),
    S1 = (0, o.t0)(u.X.ACCOUNT_SESSIONS_NESTED_PANEL, {
        buildLayout: () => [S$],
        usePredicate: () => (0, iz._A)("AccountSessionsNestedPanel"),
        initialize: () => {
            (0, SI.GY)();
        },
        useTrailingDecoration: () => ({
            type: ef.xn.TEXT,
            useText: () => {
                let { currentSession: e, otherSessions: t } = (0, Sb.r)(),
                    i = t.length + +(null != e);
                return i > 0 ? g.intl.formatToPlainString(g.t.G7zwOk, { count: i }) : g.intl.string(g.t.MKDeyL);
            },
        }),
    }),
    S2 = (0, o.zZ)(u.X.ACCOUNT_AUTHENTICATION_CATEGORY, {
        useTitle: () => g.intl.string(g.t.pKSjEj),
        useInlineNotice: function () {
            return (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.mfaEnabled ?? !1)
                ? { type: ef.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: x0 }
                : null;
        },
        buildLayout: () => [
            Sm,
            Se,
            Si,
            Sd,
            Ss,
            Su,
            Sf,
            SC,
            ...((0, iz.pC)("AccountAuthenticationCategory") ? [S1] : []),
        ],
    });
i(204925);
var S3 = i(818348);
let S6 = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0;
    (0, _.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([i.e("40933"), i.e("19623"), i.e("21007")]).then(i.bind(i, 888363));
            return (i) => (0, p.jsx)(t, { claimRequired: e, ...i });
        },
        { onCloseRequest: e ? S3.tE : null, onCloseCallback: t },
    );
};
var S4 = i(876696),
    S7 = i(36149),
    S8 = i(207560);
function S5(e) {
    let t = (0, S8.fk)(),
        i = (0, S7.b8)(),
        n = (0, S7.yM)(),
        s = (0, S7.Y2)();
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
var S9 = i(516761);
function pe() {
    let e = g.intl.string(g.t.XxRj7f);
    return (0, p.jsxs)(V.E, {
        variant: "text-md/medium",
        children: [
            `${e} \u{2022} `,
            g.intl.format(S9.default.WM5adV, {
                handleOnHelpUrlHook: () => window.open(ta.A.getArticleURL(q.MVz.TIGGER_PAWTECT_LEARN_MORE), "_blank"),
            }),
        ],
    });
}
let pt = (0, o.Tf)(u.X.ACCOUNT_INFO_AGE_GROUP_EDIT_SETTING, {
        usePredicate: () => S5("edit"),
        useTitle: () => g.intl.string(g.t["/52UYy"]),
        useVariant: () => "secondary",
        useTrailingContent: () => ({ type: ef._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: pe }),
        useLabel: () => g.intl.string(g.t.bt75uw),
        onClick: function () {
            (0, _.openModalLazy)(async () => {
                let { default: e } = await i.e("45361").then(i.bind(i, 151080));
                return (t) => (0, p.jsx)(e, { ...t });
            });
        },
    }),
    pi = (0, o.E2)(u.X.ACCOUNT_INFO_AGE_GROUP_INFO_SETTING, {
        usePredicate: () => S5("info"),
        useSearchTerms: () => [g.intl.string(g.t["/52UYy"])],
        Component: function () {
            return (0, p.jsx)(sO.D, {
                label: g.intl.string(g.t["/52UYy"]),
                layout: "horizontal",
                children: (0, p.jsxs)(R.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "end",
                    gap: "md",
                    children: [
                        (0, p.jsx)(V.E, { variant: "text-md/medium", children: g.intl.string(g.t.XxRj7f) }),
                        (0, p.jsx)("div", {
                            style: { visibility: "hidden" },
                            children: (0, p.jsx)(eh.$, {
                                onClick: S3.tE,
                                text: g.intl.string(g.t.bt75uw),
                                "aria-hidden": !0,
                            }),
                        }),
                    ],
                }),
            });
        },
    });
var pn = i(139716),
    ps = i(847599);
function pl() {
    return (0, S7.yM)() ? g.intl.string(g.t.sK0dmH) : g.intl.string(g.t.lKDPGA);
}
let pr = (0, o.Tf)(u.X.ACCOUNT_INFO_AGE_GROUP_VERIFY_SETTING, {
        usePredicate: () => S5("verify"),
        useTitle: () => g.intl.string(g.t["/52UYy"]),
        useVariant: () => "secondary",
        useTrailingContent: () => ({ type: ef._1.TEXT, useText: pl }),
        useLabel: function () {
            return (0, S7.yM)() ? g.intl.string(g.t["9KiIz6"]) : g.intl.string(g.t.DVywUB);
        },
        onClick: () => pn.A.showAgeVerificationGetStartedModal({ entryPoint: ps.q1.ACCOUNT_AGE_GROUP }),
    }),
    pa = (0, o.Tf)(u.X.ACCOUNT_INFO_CLAIM_ACCOUNT_SETTING, {
        usePredicate: () => {
            let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser());
            return null != e && !e.isClaimed();
        },
        useTitle: () => g.intl.string(g.t.tlZllC),
        useVariant: () => "secondary",
        useTrailingContent: () => ({ type: ef._1.TEXT, useText: () => g.intl.string(g.t.qxk9zo) }),
        useLabel: () => g.intl.string(g.t.BleMPB),
        onClick: () => S6(),
    });
function po(e) {
    return `${"*".repeat(e.length - 4)}${e.slice(-4)}`;
}
function pu(e) {
    let [t, i] = e.split("@");
    return `${"*".repeat(t.length)}@${i}`;
}
function pd(e) {
    let { text: t, censor: i, revealLabel: n, hideLabel: s, redesign: l = !1 } = e,
        [r, a] = N.useState(!1),
        o = r ? t : i(t);
    return (0, p.jsxs)(R.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        justify: l ? "end" : "start",
        children: [
            l ? (0, p.jsx)(V.E, { variant: "text-md/medium", children: o }) : o,
            (0, p.jsx)(F.Q, {
                variant: "primary",
                textVariant: l ? "text-md/medium" : "text-sm/medium",
                "aria-label": r ? s : n,
                onClick: () => a(!r),
                text: r ? g.intl.string(g.t.fgq1gs) : g.intl.string(g.t.dcztdU),
            }),
        ],
    });
}
function pc() {
    let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.email);
    return null == e
        ? (0, p.jsx)(V.E, { variant: "text-md/medium", children: g.intl.string(g.t["8SfTN/"]) })
        : (0, p.jsx)(pd, {
              text: e,
              censor: pu,
              revealLabel: g.intl.string(g.t["Zvx+yV"]),
              hideLabel: g.intl.string(g.t.nqTD4d),
              redesign: !0,
          });
}
let pg = (0, o.Tf)(u.X.ACCOUNT_INFO_EMAIL_SETTING, {
    usePredicate: () => (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => g.intl.string(g.t.tlZllC),
    useVariant: () => "secondary",
    useTrailingContent: () => ({ type: ef._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: pc }),
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
        (0, _.openModalLazy)(async () => {
            let { default: e } = await Promise.all([i.e("28450"), i.e("20577"), i.e("76660")]).then(i.bind(i, 121343));
            return (t) => (0, p.jsx)(e, { ...t });
        });
    },
});
function pm() {
    let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
        t = e?.phone ?? null;
    return null == e || null == t
        ? (0, p.jsx)(V.E, { variant: "text-md/medium", children: g.intl.string(g.t.I5kDqj) })
        : (0, p.jsx)(R.B, {
              direction: "horizontal",
              align: "center",
              justify: "end",
              gap: "md",
              children: (0, p.jsx)(pd, {
                  text: t,
                  censor: po,
                  revealLabel: g.intl.string(g.t.eY3xlT),
                  hideLabel: g.intl.string(g.t["jllbv+"]),
                  redesign: !0,
              }),
          });
}
let pA = (0, o.Tf)(u.X.ACCOUNT_INFO_PHONE_SETTING, {
    usePredicate: () => (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => g.intl.string(g.t.kerONq),
    useAriaLabel: function () {
        return null == (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.phone)
            ? g.intl.string(g.t["SfUuE+"])
            : g.intl.string(g.t.YDabSe);
    },
    useVariant: () => "secondary",
    useTrailingContent: () => ({ type: ef._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: pm }),
    useLabel: function () {
        return null == (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.phone)
            ? g.intl.string(g.t.OYkgVk)
            : g.intl.string(g.t.bt75uw);
    },
    onClick: function () {
        null == t3.default.getCurrentUser()?.phone
            ? (0, _.openModalLazy)(
                  async () => {
                      let { default: e } = await Promise.resolve().then(i.bind(i, 615715));
                      return (t) => (0, p.jsx)(e, { reason: SA.d.USER_SETTINGS_UPDATE, ...t });
                  },
                  { modalKey: Sp.V },
              )
            : (0, _.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([i.e("36874"), i.e("89061")]).then(i.bind(i, 359012));
                  return (t) => (0, p.jsx)(e, { ...t });
              });
    },
});
function ph() {
    let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser());
    return null != e && !e.isClaimed();
}
function pE() {
    let e = (0, EY.EC)(),
        t = e?.nick?.[0] ?? null,
        i = (0, O.bG)([t3.default], () => t3.default.getCurrentUser());
    if (null == i) return null;
    let n = i.hasUniqueUsername() ? i.username : `${i.username}#${i.discriminator}`;
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsx)(V.E, { variant: "text-md/medium", children: n }),
            null != t &&
                (0, p.jsx)(e0.m, {
                    __unsupportedReactNodeAsText: t,
                    "aria-label": !1,
                    children: (0, p.jsx)(lI.E, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: w.A.colors.STATUS_WARNING.css,
                    }),
                }),
        ],
    });
}
let pT = (0, o.Tf)(u.X.ACCOUNT_INFO_USERNAME_SETTING, {
        useTitle: () => g.intl.string(g.t.qqhR3L),
        useTrailingContent: () => ({ type: ef._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: pE }),
        useLabel: () => g.intl.string(g.t.bt75uw),
        useAriaLabel: () => g.intl.string(g.t.JECa91),
        useSubtitle: () => (ph() ? g.intl.string(g.t["7Ngnyr"]) : void 0),
        useVariant: () => "secondary",
        useDisabled: ph,
        onClick: function () {
            (0, _.openModalLazy)(async () => {
                let { default: e } = await Promise.all([i.e("2888"), i.e("20429"), i.e("13161")]).then(
                    i.bind(i, 331632),
                );
                return (t) => (0, p.jsx)(e, { ...t });
            });
        },
    }),
    px = (0, o.zZ)(u.X.ACCOUNT_INFO_CATEGORY, {
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
                            type: ef.lT.INLINE_NOTICE,
                            noticeType: "warning",
                            useTitle: () => g.intl.string(g.t.tuGzBT),
                            useText: () => g.intl.string(g.t.NAzplE),
                            button: { useText: () => g.intl.string(g.t.lm1UKt), onClick: () => (0, S4.S)(e) },
                        }
                  : {
                        type: ef.lT.INLINE_NOTICE,
                        noticeType: "critical",
                        useTitle: () => g.intl.string(g.t["/3qnL/"]),
                        useText: () => g.intl.string(g.t.qKs3vg),
                        button: { useText: () => g.intl.string(g.t["7psymi"]), onClick: () => S6() },
                    };
        },
        buildLayout: () => [pT, pa, pg, pA, pr, pt, pi],
    }),
    pS = (0, o.Tf)(u.X.AUTHENTICATOR_APP_DISABLE_BUTTON, {
        useTitle: () => g.intl.string(g.t.lQsY7B),
        useSubtitle: () => SS(!0),
        useDisabled: () => null !== SS(!0),
        useLabel: () => g.intl.string(g.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => {
            let e = (0, O.bG)([cs.default], () => cs.default.hasTOTPEnabled()),
                t = Sx() === ST.AVAILABLE;
            return e && t;
        },
        onClick: () =>
            void (0, st.A)({
                title: g.intl.string(g.t["D+aE7g"]),
                subtitle: g.intl.string(g.t.EA4ZEk),
                variant: "critical",
                confirmText: g.intl.string(g.t.N86XcP),
                onConfirm: () => x$.A.disable(),
            }),
    }),
    pp = (0, o.zZ)(u.X.AUTHENTICATOR_APP_CATEGORY, {
        useTitle: () => g.intl.string(g.t.RumMFo),
        useSubtitle: () => g.intl.string(g.t.iTbTo7),
        useHeaderDecoration: function () {
            let e = (0, O.bG)([cs.default], () => cs.default.hasTOTPEnabled()),
                t = Sx() === ST.AVAILABLE;
            if (!e && t)
                return {
                    type: ef.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: ef.UV.BUTTON,
                            id: "mfa-setup-button",
                            text: g.intl.string(g.t.cTNUeD),
                            onClick: x7.Ay.enableMFA,
                        },
                    ],
                };
        },
        useInlineNotice: function () {
            switch (Sx()) {
                case ST.UNAVAILABLE_NO_CRYPTO:
                    return { type: ef.lT.INLINE_NOTICE, noticeType: "info", useText: () => g.intl.string(g.t.PhHhsj) };
                case ST.UNAVAILABLE_UNVERIFIED:
                    return {
                        type: ef.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        useText: () => g.intl.string(g.t.uggF7o),
                    };
                case ST.AVAILABLE:
                    return;
            }
        },
        collapseOnEmpty: !1,
        buildLayout: () => [pS],
    });
var pN = i(32880),
    pf = i(663417);
function p_() {
    (0, _.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(i.bind(i, 662758));
        return (t) =>
            (0, p.jsx)(e, {
                ...t,
                handleSubmit: (e) =>
                    x$.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                        var t;
                        return (
                            (t = e),
                            void (0, _.openModalLazy)(
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
var pC = i(526122);
function pI(e) {
    return `${e.slice(0, 4)}-${e.slice(4)}`;
}
async function pb() {
    let e = x1.A.getVerificationKey();
    try {
        await x$.A.confirmViewBackupCodes(e, !0);
    } catch (e) {
        (0, Es.P0)({
            message: e.body?.message ?? g.intl.string(g.t.F8FvUy),
            type: Er.Ck.FAILURE,
            id: "backup-code-regen-failed",
        });
    }
}
function pv(e) {
    let {
            code: { code: t, consumed: i },
        } = e,
        n = pI(t),
        s = N.useRef(null),
        l = (0, p.jsxs)(p.Fragment, {
            children: [(0, p.jsx)(Sl.P, { checked: i }), (0, p.jsx)(V.E, { variant: "text-md/normal", children: n })],
        });
    return cu.p5
        ? (0, p.jsx)(M.D, {
              tag: "li",
              className: ew()(pC.aY, pC.vk),
              innerRef: s,
              onKeyDown: (e) => {
                  "c" === e.key &&
                      (e.metaKey || e.ctrlKey) &&
                      (e.preventDefault(), e.stopPropagation(), (0, cu.C)(n), s?.current?.focus());
              },
              onClick: () => {
                  (0, cu.C)(n),
                      (0, Es.P0)({ message: g.intl.string(g.t.mGZ66D), type: Er.Ck.SUCCESS, id: "backup-code-copied" });
              },
              children: l,
          })
        : (0, p.jsx)("li", { className: pC.aY, children: l });
}
let pj = (0, o.zZ)(u.X.BACKUP_CODES_CATEGORY, {
        useTitle: () => g.intl.string(g.t.fC9qV0),
        useSubtitle: () =>
            (0, O.bG)([x1.A], () => x1.A.getBackupCodes().length > 0)
                ? g.intl.format(g.t.tp7zEK, {})
                : g.intl.string(g.t.LoOi4S),
        usePredicate: Sn,
        buildLayout: () => [py],
    }),
    py = (0, o.E2)(u.X.BACKUP_CODES_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t.fC9qV0)],
        Component: function () {
            let e = (0, O.bG)([x1.A], () => x1.A.getBackupCodes()),
                t = N.useMemo(
                    () =>
                        e
                            .map((e) => {
                                let { code: t, consumed: i } = e;
                                return `* ${pI(t)}` + (i ? ` (${g.intl.string(g.t["ycME+9"])})` : "");
                            })
                            .join("\r\n"),
                    [e],
                );
            return 0 === e.length
                ? (0, p.jsx)(eh.$, { text: g.intl.string(g.t.Jc2myK), size: "sm", variant: "secondary", onClick: p_ })
                : (0, p.jsxs)(p.Fragment, {
                      children: [
                          (0, p.jsx)("ul", {
                              className: pC.E5,
                              children: e.map((e) => (0, p.jsx)(pv, { code: e }, e.code)),
                          }),
                          (0, p.jsxs)(aR.e, {
                              size: "sm",
                              children: [
                                  (0, p.jsx)(x3.A, {
                                      fileContents: t,
                                      contentType: "text/plain",
                                      fileName: "discord_backup_codes.txt",
                                      children: (0, p.jsx)(eh.$, {
                                          text: g.intl.string(g.t["OO+Nib"]),
                                          variant: "secondary",
                                          icon: pN.s,
                                      }),
                                  }),
                                  (0, p.jsx)(eh.$, {
                                      text: g.intl.string(g.t["3x962E"]),
                                      variant: "secondary",
                                      icon: pf.f,
                                      onClick: pb,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
    }),
    pO = (0, o.Tf)(u.X.SMS_AUTH_DISABLE_BUTTON, {
        useTitle: () => g.intl.string(g.t.lQsY7B),
        useSubtitle: function () {
            let [e, t] = N.useState(!1),
                i = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.phone);
            return null == i
                ? null
                : g.intl.format(e ? g.t["xDBk/I"] : g.t.bnKdnl, {
                      phone: e ? i : i.slice(-4),
                      toggleButton: () =>
                          (0, p.jsx)(F.Q, {
                              text: e ? g.intl.string(g.t.fgq1gs) : g.intl.string(g.t.dcztdU),
                              onClick: () => t(!e),
                          }),
                  });
        },
        useLabel: () => g.intl.string(g.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.hasFlag(q.nhx.MFA_SMS) ?? !1),
        onClick: () =>
            void (0, _.openModalLazy)(async () => {
                let { default: e } = await Promise.resolve().then(i.bind(i, 662758));
                return (t) =>
                    (0, p.jsx)(e, {
                        ...t,
                        handleSubmit: x$.A.disableSMS,
                        title: g.intl.string(g.t.KLWnit),
                        children: g.intl.string(g.t["W0/Duf"]),
                    });
            }),
    }),
    pR = (0, o.zZ)(u.X.SMS_AUTH_CATEGORY, {
        useTitle: () => g.intl.string(g.t.wuHuI5),
        useSubtitle: () => (0, O.bG)([t3.default], () => SE(t3.default.getCurrentUser(), !0)),
        useHeaderDecoration: () => {
            let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.hasFlag(q.nhx.MFA_SMS) ?? !1),
                t = (0, O.bG)([t3.default], () => null != SE(t3.default.getCurrentUser()));
            if (!e)
                return {
                    type: ef.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: ef.UV.BUTTON,
                            id: "sms-setup-button",
                            text: g.intl.string(g.t.Age7yU),
                            onClick: pL,
                            disabled: t,
                        },
                    ],
                };
        },
        collapseOnEmpty: !1,
        usePredicate: () => {
            let e = Sx(),
                t = Sn(),
                i = (0, O.bG)([cs.default], () => cs.default.hasTOTPEnabled());
            return e === ST.AVAILABLE && t && i;
        },
        buildLayout: () => [pO],
    });
function pL() {
    let e = t3.default.getCurrentUser();
    if (null != e)
        if (null == e.phone) {
            var t;
            (t = { reason: SA.d.USER_SETTINGS_UPDATE, onAddedPhone: x$.A.enableSMS }),
                (0, _.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.resolve().then(i.bind(i, 615715));
                        return (i) => (0, p.jsx)(e, { ...i, ...t });
                    },
                    { modalKey: Sp.V },
                );
        } else x$.A.enableSMS();
}
var pD = i(665671),
    pP = i(442433),
    pG = i(917136),
    pU = i(976910),
    pM = i(551386);
function pV(e) {
    let { credential: t } = e;
    return (0, p.jsxs)("li", {
        className: pM.e,
        children: [
            (0, p.jsxs)("div", {
                children: [
                    (0, p.jsx)(V.E, { variant: "text-md/normal", children: t.name }),
                    null != t.last_used &&
                        (0, p.jsx)(V.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: g.intl.format(g.t["7JgxF5"], { lastUsed: (0, Sb.Y)(t.last_used) }),
                        }),
                ],
            }),
            (0, p.jsx)(lS.K, {
                icon: gq.j,
                variant: "icon-only",
                size: "sm",
                "aria-label": g.intl.string(g.t["+nrTbK"]),
                onClick: (e) => {
                    (0, pP.L3)(e, async () => {
                        let { default: e } = await i.e("32529").then(i.bind(i, 41e3));
                        return (i) => (0, p.jsx)(e, { credential: t, ...i });
                    });
                },
            }),
        ],
    });
}
let pk = (0, o.zZ)(u.X.SECURITY_KEYS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.IBq4Y3),
        useSubtitle: () => g.intl.string(g.t.yK9edS),
        useHeaderDecoration: function () {
            if (Sx() === ST.AVAILABLE)
                return {
                    type: ef.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: ef.UV.BUTTON,
                            id: "add-security-key-button",
                            text: g.intl.string(g.t["Tzs/fw"]),
                            icon: cY.j,
                            onClick: pD.A,
                        },
                    ],
                };
        },
        useInlineNotice: () =>
            (function () {
                switch (Sx()) {
                    case ST.UNAVAILABLE_NO_CRYPTO:
                        return {
                            type: ef.lT.INLINE_NOTICE,
                            noticeType: "info",
                            useText: () => g.intl.string(g.t.bWCGI9),
                        };
                    case ST.UNAVAILABLE_UNVERIFIED:
                        return {
                            type: ef.lT.INLINE_NOTICE,
                            noticeType: "warning",
                            useText: () => g.intl.string(g.t.uggF7o),
                        };
                    case ST.AVAILABLE:
                        return;
                }
            })(),
        buildLayout: () => [pw],
    }),
    pw = (0, o.E2)(u.X.SECURITY_KEYS_LIST, {
        useSearchTerms: () => [g.intl.string(g.t.y7SXYX)],
        Component: function () {
            let { credentials: e, hasFetchedCredentials: t } = (0, O.cf)([pU.A], () => ({
                hasFetchedCredentials: pU.A.hasFetchedCredentials(),
                credentials: pU.A.getCredentials(),
            }));
            return (N.useEffect(() => {
                t || pG.JQ();
            }, [t]),
            t)
                ? (0, p.jsx)(R.B, {
                      direction: "vertical",
                      gap: "sm",
                      as: "ul",
                      children: e.map((e) => (0, p.jsx)(pV, { credential: e }, e.id)),
                  })
                : (0, p.jsx)(uK.y, {});
        },
    }),
    pF = (0, o.t_)(u.X.MULTI_FACTOR_AUTHENTICATION, {
        useTitle: () => g.intl.string(g.t.m0FidJ),
        buildLayout: () => [pk, pp, pR, pj],
    }),
    pB = (0, o.t0)(u.X.ACCOUNT_MFA_NESTED_PANEL, {
        useTrailingDecoration: () => ({
            type: ef.xn.TEXT,
            useText: () => (Sn() ? g.intl.string(g.t.lQsY7B) : g.intl.string(g.t.WsUuTt)),
        }),
        buildLayout: () => [pF],
    }),
    pz = (0, o.zZ)(u.X.ACCOUNT_PASSWORD_SECURITY_CATEGORY, {
        useTitle: () => g.intl.string(g.t["0iH2vc"]),
        buildLayout: () => [Sg, pB, S1],
    });
function pY(e) {
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
                        (0, p.jsx)(V.E, {
                            variant: "text-sm/normal",
                            className: Sr.PA,
                            children: g.intl.string(g.t.NAzplE),
                        }),
                        (0, p.jsx)(S4.A, { size: "sm", variant: "secondary" }),
                    ],
                })
        : (0, p.jsxs)(y.w, {
              type: "critical",
              children: [
                  (0, p.jsx)(eA.D, { variant: "heading-md/medium", children: g.intl.string(g.t["/3qnL/"]) }),
                  (0, p.jsx)(V.E, { variant: "text-sm/normal", className: Sr.PA, children: g.intl.string(g.t.qKs3vg) }),
                  (0, p.jsx)(eh.$, {
                      variant: "secondary",
                      size: "sm",
                      text: g.intl.string(g.t["7psymi"]),
                      onClick: () => S6(),
                  }),
              ],
          });
}
var pX = i(297413),
    pH = i(50268),
    pK = i(922301),
    pW = i(262),
    pZ = i(68085),
    pq = i(915614),
    pQ = i(475543);
let pJ = si.Ay.getEnableHardwareAcceleration() ? iH.Js : iH.eu;
function p$(e) {
    let t = (0, Ev.X)("UserSettingsAccountProfileCard");
    return N.useCallback(() => {
        t ? (0, Ey.openUserProfileModal)({ userId: e }) : (0, ej.openUserSettings)(u.X.PROFILE_PANEL);
    }, [t, e]);
}
function p0(e) {
    let { className: t, user: n } = e,
        s = N.useRef(null),
        l = (0, EY.EC)(),
        r = l?.nick?.[0] ?? null,
        [a, o] = N.useState(!1);
    N.useEffect(() => {
        o(null != s.current && s.current.scrollWidth > s.current.clientWidth);
    }, [n.username]);
    let u = !n.isClaimed(),
        d = u ? g.intl.string(g.t["7Ngnyr"]) : void 0;
    return (0, p.jsxs)("div", {
        className: ew()(pQ.ZZ, t),
        children: [
            (0, p.jsx)("div", {
                className: pQ.NQ,
                children: (0, p.jsxs)("div", {
                    className: pQ.Fj,
                    children: [
                        (0, p.jsx)(V.E, {
                            variant: "text-md/medium",
                            className: pQ.p9,
                            children: g.intl.string(g.t.qqhR3L),
                        }),
                        (0, p.jsxs)("div", {
                            className: pQ.HR,
                            ref: s,
                            children: [
                                (0, p.jsx)(V.E, {
                                    tag: "span",
                                    color: "text-strong",
                                    variant: "text-md/normal",
                                    children: n.username,
                                }),
                                !n.hasUniqueUsername() &&
                                    (0, p.jsxs)(V.E, {
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
                    className: pQ.a$,
                    children: (0, p.jsx)(e0.m, {
                        __unsupportedReactNodeAsText: r,
                        "aria-label": !1,
                        children: (0, p.jsx)(lI.E, {
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
                    className: pQ.pr,
                    children: (0, p.jsx)(eh.$, {
                        variant: "secondary",
                        size: "sm",
                        text: a ? g.intl.string(g.t["16kTw/"]) : g.intl.string(g.t.bt75uw),
                        disabled: u,
                        "aria-label": g.intl.string(g.t.JECa91),
                        onClick: () =>
                            (0, _.openModalLazy)(async () => {
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
function p1(e) {
    let { user: t, className: i } = e,
        n = p$(t.id),
        s = (0, EY.EC)(),
        l = s?.nick?.[0] ?? null,
        r = TO.Ay.getGlobalName(t),
        a = N.useRef(null),
        [o, u] = N.useState(!1);
    return (
        N.useEffect(() => {
            u(null != a.current && a.current.scrollWidth > a.current.clientWidth);
        }, [r]),
        (0, p.jsxs)("div", {
            className: ew()(pQ.ZZ, i),
            children: [
                (0, p.jsx)("div", {
                    className: pQ.NQ,
                    children: (0, p.jsxs)("div", {
                        className: pQ.Fj,
                        children: [
                            (0, p.jsx)(V.E, {
                                variant: "text-md/medium",
                                className: pQ.p9,
                                children: g.intl.string(g.t["9AjdkD"]),
                            }),
                            (0, p.jsx)("div", {
                                className: pQ.HR,
                                ref: a,
                                children: (0, p.jsx)(V.E, {
                                    tag: "span",
                                    color: "text-strong",
                                    variant: "text-md/normal",
                                    children: null == r ? g.intl.string(g.t.ep5kjK) : r,
                                }),
                            }),
                        ],
                    }),
                }),
                null != l &&
                    (0, p.jsx)("div", {
                        className: pQ.a$,
                        children: (0, p.jsx)(e0.m, {
                            __unsupportedReactNodeAsText: l,
                            "aria-label": !1,
                            children: (0, p.jsx)(lI.E, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                color: w.A.colors.STATUS_WARNING.css,
                            }),
                        }),
                    }),
                (0, p.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: pQ.pr,
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
function p2(e) {
    let t,
        { className: n, user: s } = e;
    if (s.isClaimed())
        if (null == s.email)
            t = {
                buttonText: g.intl.string(g.t.OYkgVk),
                buttonAriaLabel: g.intl.string(g.t["pvBD+W"]),
                valueMessage: g.intl.string(g.t["8SfTN/"]),
                handleClick: () =>
                    (0, _.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([i.e("28450"), i.e("20577"), i.e("76660")]).then(
                            i.bind(i, 121343),
                        );
                        return (t) => (0, p.jsx)(e, { ...t });
                    }),
            };
        else {
            let { email: e } = s;
            t = {
                buttonText: g.intl.string(g.t.bt75uw),
                buttonAriaLabel: g.intl.string(g.t["8peUT0"]),
                valueMessage: (0, p.jsx)(pd, {
                    text: e,
                    censor: pu,
                    revealLabel: g.intl.string(g.t["Zvx+yV"]),
                    hideLabel: g.intl.string(g.t.nqTD4d),
                }),
                handleClick: () =>
                    (0, _.openModalLazy)(async () => {
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
            handleClick: () => S6(),
        };
    return (0, p.jsxs)("div", {
        className: ew()(pQ.ZZ, n),
        children: [
            (0, p.jsx)("div", {
                className: pQ.NQ,
                children: (0, p.jsxs)("div", {
                    children: [
                        (0, p.jsx)(V.E, {
                            variant: "text-md/medium",
                            className: pQ.p9,
                            children: g.intl.string(g.t.tlZllC),
                        }),
                        (0, p.jsx)("div", {
                            children: (0, p.jsx)(V.E, {
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
                className: pQ.pr,
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
function p3(e) {
    let t,
        { className: n, user: s } = e;
    if (!s.isClaimed()) return null;
    let { phone: l, email: r } = s,
        a = null != l;
    return (
        (t = a
            ? (0, p.jsx)(pd, {
                  text: l,
                  censor: po,
                  revealLabel: g.intl.string(g.t.eY3xlT),
                  hideLabel: g.intl.string(g.t["jllbv+"]),
              })
            : g.intl.string(g.t.I5kDqj)),
        (0, p.jsxs)("div", {
            className: ew()(pQ.ZZ, n),
            children: [
                (0, p.jsx)("div", {
                    className: pQ.NQ,
                    children: (0, p.jsxs)("div", {
                        children: [
                            (0, p.jsx)(V.E, {
                                variant: "text-md/medium",
                                className: pQ.p9,
                                children: g.intl.string(g.t.kerONq),
                            }),
                            (0, p.jsx)("div", {
                                children: (0, p.jsx)(V.E, {
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
                    className: pQ.PU,
                    children: [
                        a && null != r
                            ? (0, p.jsx)("div", {
                                  className: ew()(pQ.pr, pQ.DT),
                                  children: (0, p.jsx)(F.Q, {
                                      textVariant: "text-sm/medium",
                                      variant: "secondary",
                                      text: g.intl.string(g.t.N86XcP),
                                      "aria-label": g.intl.string(g.t.Rpn4A3),
                                      onClick: function () {
                                          (0, _.openModal)((e) =>
                                              (0, p.jsx)(x4.default, {
                                                  ...e,
                                                  title: g.intl.string(g.t["3CTiKi"]),
                                                  children: s.hasFlag(q.nhx.MFA_SMS)
                                                      ? g.intl.string(g.t.jrhJyo)
                                                      : void 0,
                                                  actionText: g.intl.string(g.t.N86XcP),
                                                  handleSubmit: (e) => SA.A.removePhone(e, SA.d.USER_SETTINGS_UPDATE),
                                              }),
                                          );
                                      },
                                  }),
                              })
                            : null,
                        (0, p.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: pQ.pr,
                            children: (0, p.jsx)(eh.$, {
                                variant: "secondary",
                                size: "sm",
                                text: a ? g.intl.string(g.t.bt75uw) : g.intl.string(g.t.OYkgVk),
                                "aria-label": a ? g.intl.string(g.t.YDabSe) : g.intl.string(g.t["SfUuE+"]),
                                onClick: function () {
                                    (0, _.openModalLazy)(
                                        async () => {
                                            let { default: e } = await Promise.resolve().then(i.bind(i, 615715));
                                            return (t) => (0, p.jsx)(e, { reason: SA.d.USER_SETTINGS_UPDATE, ...t });
                                        },
                                        { modalKey: Sp.V },
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
function p6(e) {
    let { user: t } = e,
        i = (0, pH.A)({ id: t.id, label: g.intl.string(g.t["/AXYnE"]) }),
        n = c.Q_.useSetting(),
        s = N.useRef(null);
    return n && cu.p5
        ? (0, p.jsx)(P.Y, {
              targetElementRef: s,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, p.jsx)(G.W, {
                      "data-menu-migrated": !0,
                      onClose: t,
                      onSelect: void 0,
                      navId: "copy-id",
                      "aria-label": g.intl.string(g.t.RANhlE),
                      children: i,
                  });
              },
              children: (e) =>
                  (0, p.jsx)(M.D, {
                      ...e,
                      innerRef: s,
                      className: pQ.SI,
                      "aria-label": g.intl.string(g.t.DEoVWZ),
                      children: (0, p.jsx)(gq.j, { size: "md", color: "currentColor", className: pQ.D$ }),
                  }),
          })
        : null;
}
function p4(e) {
    let { className: t } = e,
        n = (0, S7.b8)(),
        s = (0, S7.yM)(),
        l = (0, S7.Y2)(),
        r = !n || s,
        a = g.intl.string(g.t["9KiIz6"]),
        o = g.intl.string(g.t.DVywUB),
        u = g.intl.string(g.t.lKDPGA),
        d = N.useCallback(() => {
            window.open(ta.A.getArticleURL(q.MVz.TIGGER_PAWTECT_LEARN_MORE), "_blank");
        }, []),
        c = N.useCallback(() => {
            (0, _.openModalLazy)(async () => {
                let { default: e } = await i.e("45361").then(i.bind(i, 151080));
                return (t) => (0, p.jsx)(e, { ...t });
            });
        }, []),
        m = N.useMemo(
            () =>
                n
                    ? s
                        ? g.intl.string(g.t.sK0dmH)
                        : l
                          ? g.intl.format(S9.default.WM5adV, { handleOnHelpUrlHook: d })
                          : g.intl.string(g.t.XxRj7f)
                    : u,
            [n, s, l, u, d],
        ),
        A = n && !s && l;
    return (0, p.jsxs)("div", {
        className: ew()(pQ.ZZ, t),
        children: [
            (0, p.jsx)("div", {
                className: pQ.NQ,
                children: (0, p.jsxs)("div", {
                    children: [
                        (0, p.jsx)(V.E, {
                            variant: "text-md/medium",
                            className: pQ.p9,
                            children: g.intl.string(g.t["/52UYy"]),
                        }),
                        (0, p.jsx)("div", {
                            children: (0, p.jsxs)(V.E, {
                                tag: "span",
                                color: "text-strong",
                                variant: "text-md/normal",
                                children: [l && n && !s ? `${g.intl.string(g.t.XxRj7f)} \u{2022} ` : null, m],
                            }),
                        }),
                    ],
                }),
            }),
            A &&
                (0, p.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: pQ.pr,
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
                    className: pQ.pr,
                    children: (0, p.jsx)(eh.$, {
                        variant: "secondary",
                        size: "sm",
                        text: s ? a : o,
                        "aria-label": s ? a : o,
                        onClick: () => pn.A.showAgeVerificationGetStartedModal({ entryPoint: ps.q1.ACCOUNT_AGE_GROUP }),
                    }),
                }),
        ],
    });
}
function p7(e) {
    let { currentUser: t } = e,
        i = p$(t.id),
        n = (0, TS.Ay)(t.id),
        s = (0, pW.A)(n),
        l = c.jP.useSetting(),
        r = (0, O.bG)([Eb.A], () => Eb.A.getErrors()),
        a = r?.avatar?.[0],
        { avatarSrc: o, avatarDecorationSrc: u } = (0, Ej.A)({ userId: t?.id, size: iK._3.SIZE_80 }),
        d = (0, S8.fk)();
    return (0, p.jsxs)("div", {
        className: pQ.DM,
        children: [
            (0, p.jsx)(pq.o, {
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
                className: pQ.eF,
                children: [
                    (0, p.jsx)(pJ, {
                        className: pQ.my,
                        src: o,
                        avatarDecoration: u,
                        status: l,
                        size: iK._3.SIZE_80,
                        "aria-label": t.username,
                    }),
                    (0, p.jsxs)("div", {
                        children: [
                            (0, p.jsxs)("div", {
                                className: pQ.Ib,
                                children: [
                                    (0, p.jsx)(pX.A, {
                                        user: t,
                                        className: pQ.a1,
                                        discriminatorClass: pQ.D2,
                                        displayNameStylesType: pK.G.STATIC,
                                    }),
                                    (0, p.jsx)(p6, { user: t }),
                                ],
                            }),
                            (0, p.jsx)(pZ.A, { badges: s, className: pQ.C_, badgeClassName: pQ.qS }),
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
                className: pQ.Tp,
                children: [
                    null != a
                        ? (0, p.jsx)(V.E, {
                              className: pQ.mx,
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              children: a,
                          })
                        : null,
                    (0, p.jsxs)("div", {
                        className: pQ.FL,
                        children: [
                            (0, p.jsx)(p1, { className: pQ.mS, user: t }),
                            (0, p.jsx)(p0, { user: t }),
                            (0, p.jsx)(p2, { className: pQ.Zr, user: t }),
                            (0, p.jsx)(p3, { className: pQ.Zr, user: t }),
                            d && (0, p.jsx)(p4, { className: pQ.Zr }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
let p8 = (0, o.E2)(u.X.ACCOUNT_PROFILE_SETTING, {
        useSearchTerms: function () {
            let e = [
                    g.intl.string(g.t.LYju5J),
                    g.intl.string(g.t["9AjdkD"]),
                    g.intl.string(g.t["+JkHPw"]),
                    g.intl.string(g.t.oP5zGA),
                    g.intl.string(g.t.Ulqq6K),
                ],
                t = (0, S8.fk)(),
                i = (0, S7.Y2)();
            return (
                t &&
                    (e.push(g.intl.string(g.t["/52UYy"])),
                    e.push(g.intl.string(g.t.sK0dmH)),
                    e.push(g.intl.string(g.t.XxRj7f)),
                    e.push(g.intl.string(g.t.DVywUB)),
                    e.push(g.intl.string(g.t["9KiIz6"])),
                    i &&
                        (e.push(g.intl.string(S9.default.FTawSP)),
                        e.push(g.intl.string(S9.default["bD//cU"])),
                        e.push(g.intl.string(S9.default.SH6Tcv)))),
                e
            );
        },
        Component: function () {
            let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser());
            return (0, p.jsxs)(R.B, {
                gap: "md",
                children: [
                    null != e && (0, p.jsx)(pY, { currentUser: e }),
                    null != e && (0, p.jsx)(p7, { currentUser: e }),
                ],
            });
        },
    }),
    p5 = (0, o.zZ)(u.X.ACCOUNT_PROFILE_CATEGORY, { buildLayout: () => [p8] });
var p9 = i(656161);
function Ne(e) {
    let { currentUser: t, disabled: i, handleDisableAccount: n, handleDeleteAccount: s } = e,
        l = t.isClaimed();
    return (0, p.jsx)(sO.D, {
        label: g.intl.string(g.t.ZKsIks),
        description: l ? g.intl.string(g.t.TIh3Yj) : g.intl.string(g.t.czsGA8),
        children: (0, p.jsxs)(aR.e, {
            size: "sm",
            className: p9.U,
            children: [
                l
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
                    onClick: s,
                }),
            ],
        }),
    });
}
var Nt = i(425587);
function Ni(e) {
    if (e.body.code === q.t02.INVALID_PASSWORD) throw e;
    (0, aj.A)({ title: g.intl.string(g.t.LX0nT8), subtitle: e.body.message });
}
async function Nn() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = t3.default.getCurrentUser();
    if (null == t) return;
    let i = [];
    try {
        i = (await Nt.A.fetchTeams(!0)).body;
    } catch {}
    i.filter((e) => e.owner_user_id === t.id).length > 0
        ? (0, aj.A)({
              title: g.intl.string(g.t["Y++oNe"]),
              subtitle: g.intl.format(g.t.alpAUm, { devPortalLink: "https://discord.com/developers/teams" }),
          })
        : H.A.getGuildsArray().filter((e) => e.ownerId === t.id).length > 0
          ? (0, aj.A)({ title: g.intl.string(g.t.vJiTOL), subtitle: g.intl.string(g.t.UyVVan) })
          : t.isClaimed()
            ? (0, _.openModal)((t) =>
                  (0, p.jsx)(x4.default, {
                      ...t,
                      handleSubmit: (t) => (0, EC.U_)(t, e).then(q.tEg, Ni),
                      title: e ? g.intl.string(g.t.xca2ts) : g.intl.string(g.t.goXv9g),
                      actionText: e ? g.intl.string(g.t["8lQ2rR"]) : g.intl.string(g.t.jf5GGb),
                      variant: "critical-primary",
                      children: e ? g.intl.string(g.t.FB4H1D) : g.intl.string(g.t.gk7h32),
                  }),
              )
            : (0, st.A)({
                  title: g.intl.string(g.t.xca2ts),
                  subtitle: g.intl.string(g.t.FB4H1D),
                  confirmText: g.intl.string(g.t["8lQ2rR"]),
                  onConfirm: () => (0, EC.U_)("", !0),
              });
}
let Ns = (0, o.Tf)(u.X.ACCOUNT_DELETE_SETTING, {
        useTitle: () => g.intl.string(g.t["gIpzR+"]),
        useSubtitle: () => g.intl.string(g.t.Bd6dOf),
        useLabel: () => g.intl.string(g.t["8lQ2rR"]),
        useVariant: () => "critical-primary",
        onClick: () => Nn(!0),
    }),
    Nl = (0, o.Tf)(u.X.ACCOUNT_DISABLE_SETTING, {
        useTitle: () => g.intl.string(g.t["p/Tjtp"]),
        useSubtitle: () => g.intl.string(g.t.YvDmKb),
        useLabel: () => g.intl.string(g.t.jf5GGb),
        useVariant: () => "critical-secondary",
        onClick: () => Nn(!1),
        usePredicate: () => {
            let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser());
            return e?.isClaimed() ?? !1;
        },
    }),
    Nr = (0, o.zZ)(u.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [Nl, Ns] }),
    Na = (0, o.E2)(u.X.ACCOUNT_REMOVAL_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t.ZKsIks), g.intl.string(g.t.jf5GGb), g.intl.string(g.t["8lQ2rR"])],
        Component: function () {
            let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser());
            return null == e
                ? null
                : (0, p.jsx)(Ne, {
                      currentUser: e,
                      handleDisableAccount: () => Nn(!1),
                      handleDeleteAccount: () => Nn(!0),
                  });
        },
    }),
    No = (0, o.zZ)(u.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [Na] });
var Nu = i(308645),
    Nd = i(271995),
    Nc = i(855267);
let Ng = (0, o.E2)(u.X.ACCOUNT_STANDING_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t["16r9jm"])],
        Component: Nc.A,
    }),
    Nm = (0, o.zZ)(u.X.ACCOUNT_STANDING_NESTED_CATEGORY, { buildLayout: () => [Ng] }),
    NA = (0, o.t_)(u.X.ACCOUNT_STANDING_PANEL, {
        useTitle: () => g.intl.string(g.t["16r9jm"]),
        buildLayout: () => [Nm],
    }),
    Nh = (0, o.t0)(u.X.ACCOUNT_STANDING_NESTED_PANEL, {
        useTitle: Nd.$b,
        useSubtitle: Nd.bh,
        useLeadingDecoration: function () {
            let { color: e, backgroundColor: t, Icon: i } = (0, Nd._k)();
            return { type: ef.Xy.ICON, icon: i, color: e, backgroundColor: t };
        },
        initialize: () => {
            Nu.Yn();
        },
        buildLayout: () => [NA],
    }),
    NE = (0, o.zZ)(u.X.ACCOUNT_STANDING_CATEGORY, {
        useTitle: () => g.intl.string(g.t["16r9jm"]),
        buildLayout: () => [Nh],
    }),
    NT = (0, o.zZ)(u.X.ACCOUNT_STANDING_CATEGORY, { buildLayout: () => [Ng] });
var Nx = i(834981),
    NS = i(840387),
    Np = i(177953),
    NN = i(986922),
    Nf = i(602339);
let N_ = (0, o.E2)(u.X.FAMILY_CENTER_SETTING, {
        Component: NN.p,
        useSearchTerms: () => [
            g.intl.string(Nf.default.RZqaJn),
            g.intl.string(Nf.default.bdBmqy),
            g.intl.string(Nf.default["gVWG+6"]),
            g.intl.string(Nf.default.ahKIJO),
            g.intl.string(Nf.default["8SLtqb"]),
        ],
    }),
    NC = (0, o.zZ)(u.X.FAMILY_CENTER_CATEGORY, { buildLayout: () => [N_] }),
    NI = (0, o.t_)(u.X.FAMILY_CENTER_PANEL, {
        useTitle: () => g.intl.string(Nf.default.RZqaJn),
        buildLayout: () => [NC],
    }),
    Nb = (0, o.i4)(u.X.FAMILY_CENTER_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(Nf.default.RZqaJn),
        icon: Np.n,
        usePersistentBadge: function () {
            return N.useMemo(() => ({ badgeType: ef.Xi.COUNT, useCount: Nx.VT }), []);
        },
        getDismissibleBadges: function () {
            return [{ badgeType: ef.Xi.NEW, dismissibleContent: eT.M.FAMILY_CENTER_NEW_BADGE }];
        },
        buildLayout: () => [NI],
    }),
    Nv = (0, o.zZ)(u.X.ACCOUNT_FAMILY_CENTER_CATEGORY, {
        useTitle: () => g.intl.string(Nf.default.RZqaJn),
        buildLayout: () => [Nj],
    }),
    Nj = (0, o.t0)(u.X.ACCOUNT_FAMILY_CENTER_NESTED_PANEL, {
        useTitle: () => ((0, Nx.Li)() ? g.intl.string(Nf.default.IcMQUP) : g.intl.string(Nf.default["n8wrn/"])),
        useSubtitle: () => {
            let e = (0, NS.Z)(),
                t = (0, Nx.Li)();
            return e
                ? t
                    ? g.intl.string(Nf.default.G8lHFU)
                    : g.intl.string(Nf.default.uOLNEZ)
                : g.intl.string(Nf.default.Z53oSM);
        },
        buildLayout: () => [NI],
    });
var Ny = (((a = {}).SECURITY = "SECURITY"), (a.STANDING = "STANDING"), a);
let NO = (0, o.dT)(u.X.ACCOUNT_STANDING_TAB, {
        getTitle: () => g.intl.string(g.t["Vov/9o"]),
        onItemSelect: () => {
            Y.default.track(q.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, { target_tab_name: Ny.STANDING });
        },
        buildLayout: () => [NT],
    }),
    NR = (0, o.dT)(u.X.ACCOUNT_SECURITY_TAB, {
        getTitle: () => g.intl.string(g.t.Am9YHi),
        onItemSelect: () => {
            Y.default.track(q.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, { target_tab_name: Ny.SECURITY });
        },
        buildLayout: () => [p5, S2, No],
    });
function NL() {
    let e = t3.default.getCurrentUser();
    return (
        null == e || (0, iz.pC)("Account") || (0, TB.A)(e.id, e.getAvatarURL(void 0, 80)),
        () => {
            x$.A.clearBackupCodes(), (0, EC.Uo)();
        }
    );
}
let ND = (0, o.t_)(u.X.ACCOUNT_PANEL, {
        useTitle: () => g.intl.string(g.t["JAIM/m"]),
        initialize: NL,
        useObscuredNotice: uX.L,
        buildLayout: () => [NR, NO],
    }),
    NP = (0, o.t_)(u.X.ACCOUNT_PANEL, {
        useTitle: () => g.intl.string(g.t["ldCE/p"]),
        initialize: NL,
        useObscuredNotice: uX.L,
        buildLayout: () => [px, pz, NE, Nv, Nr],
    }),
    NG = (0, o.i4)(u.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => ((0, iz.pC)("Account") ? g.intl.string(g.t["ldCE/p"]) : g.intl.string(g.t["JAIM/m"])),
        icon: Ar.n,
        buildLayout: () => ((0, iz.pC)("Account") ? [NP] : [ND]),
    });
var NU = i(323384),
    NM = i(824552),
    NV = i(161236);
let Nk = (0, o.E2)(u.X.AUTHORIZED_APPS_LIST_SETTING, {
        Component: NV.Ay,
        useSearchTerms: () => [g.intl.string(g.t["f6kk+r"])],
    }),
    Nw = (0, o.zZ)(u.X.AUTHORIZED_APPS_CATEGORY, {
        buildLayout: () => [Nk],
        initialize: () => (
            NM.A.fetch(),
            () => {
                NV.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    NF = (0, o.t_)(u.X.AUTHORIZED_APPS_PANEL, {
        useTitle: () => g.intl.string(g.t["f6kk+r"]),
        useObscuredNotice: uX.L,
        buildLayout: () => [Nw],
    }),
    NB = (0, o.i4)(u.X.AUTHORIZED_APPS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["f6kk+r"]),
        icon: NU.k,
        buildLayout: () => [NF],
    });
var Nz = i(176781),
    NY = i(611371);
let NX = () =>
    (0, p.jsx)(e0.m, { asContainer: !0, text: g.intl.string(g.t["/fgfWh"]), children: (0, p.jsx)(NY.A, {}) });
var NH = i(274372),
    NK = i(948138),
    NW = i(696016);
let NZ = (() => {
        let e = [NW.wN];
        for (let t = 10; t <= NW.qh; t += 10) e.push(t);
        return e[e.length - 1] !== NW.qh && e.push(NW.qh), e;
    })(),
    Nq = (0, o.sN)(u.X.CLIPS_AUTO_CLIP_STORAGE_LIMIT, {
        useTitle: () => g.intl.string(g.t.yfsrDI),
        useSubtitle: () => g.intl.string(g.t.vlDHdC),
        minValue: NW.wN,
        maxValue: NW.qh,
        getInitialValue: () => NH.A.getSettings().maxAutoClips,
        onValueRender: (e) => `${Math.floor(e)}`,
        asValueChanges: (e) => NK.e6(Math.floor(e)),
        markers: NZ,
        onMarkerRender: (e) => `${Math.floor(e)}`,
    }),
    NQ = (0, o.zD)(u.X.CLIPS_ENABLE_GAME_SIGNALS, {
        useTitle: () => g.intl.string(g.t.iV6KcI),
        useSubtitle: () => g.intl.string(g.t["dJ2tX+"]),
        useValue: () => (0, O.bG)([NH.A], () => NH.A.getSettings().clipSignals.enableGameSignals),
        setValue: (e) => {
            let t = NH.A.getSettings().clipSignals;
            NK.PW({ ...t, enableGameSignals: e });
        },
    }),
    NJ = (0, o.zD)(u.X.CLIPS_ENABLE_PHRASE_SIGNALS, {
        useTitle: () => g.intl.string(g.t.nHsilt),
        useSubtitle: () => g.intl.string(g.t["s6wq+m"]),
        useValue: () => (0, O.bG)([NH.A], () => NH.A.getSettings().clipSignals.enablePhraseSignals),
        setValue: (e) => {
            let t = NH.A.getSettings().clipSignals;
            NK.PW({ ...t, enablePhraseSignals: e });
        },
    }),
    N$ = (0, o.E2)(u.X.CLIPS_PHRASES, {
        useSearchTerms: () => [g.intl.string(g.t.JIze0o)],
        usePredicate: () => (0, O.bG)([NH.A], () => NH.A.getSettings().clipSignals).enablePhraseSignals,
        Component: function () {
            let e = (0, O.bG)([NH.A], () => NH.A.getSettings().autoClipPhrases),
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
                            s.length > 0 && !e.includes(s) && (NK.pM([...e, s]), i(""));
                        } else if ("Backspace" === n.key && "" === t && e.length > 0) {
                            let t = e.slice(0, -1);
                            NK.pM(t);
                        }
                    },
                    [t, e],
                ),
                r = N.useCallback(
                    (t) => {
                        let i = Array.from(t)[0],
                            n = e.filter((e) => e !== i);
                        NK.pM(n);
                    },
                    [e],
                );
            return (0, p.jsx)(lL.k, {
                value: t,
                onChange: s,
                onKeyDown: l,
                placeholder: g.intl.string(g.t.zYUZpt),
                leading: n.length > 0 ? { type: "tags", items: n, onRemove: r } : void 0,
            });
        },
    }),
    N0 = (0, o.zZ)(u.X.CLIPS_AUTOMATIC_CLIPPING_CATEGORY, {
        useTitle: () => g.intl.string(g.t.sA0WKL),
        usePredicate: () => {
            let { enableAdvancedSignals: e } = lQ.L_.useConfig({ location: "ClipsAutomaticClippingCategory" });
            return e;
        },
        buildLayout: () => [Nq, NQ, NJ, N$],
    });
var N1 = i(150616),
    N2 = i(16590);
let N3 = (0, o.Tf)(u.X.CLIPS_CLEAR_REMINDER_SNOOZE, {
    useTitle: () => g.intl.string(N2.default.S0H8in),
    useSubtitle: () =>
        (0, O.bG)([NH.A], () => {
            let { remindersDismissedUntil: e } = NH.A.getUserAgnosticState();
            if (null == e || Date.now() >= e) return g.intl.string(N2.default.I8u5xw);
            let t = new Date(e).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
            return g.intl.formatToPlainString(N2.default.iJ0azr, { time: t });
        }),
    useLabel: () => g.intl.string(N2.default.QtW1Nc),
    useVariant: () => "secondary",
    usePredicate: () => N1.Z.useConfig({ location: "ClearReminderSnooze" }).enableReminderSidebar,
    useDisabled: () =>
        (0, O.bG)([NH.A], () => {
            let { remindersDismissedUntil: e } = NH.A.getUserAgnosticState();
            return null == e || Date.now() >= e;
        }),
    onClick: NK.Cr,
});
var N6 = i(753070);
let N4 = (0, o.Hn)(u.X.CLIPS_FRAME_RATE, {
    useTitle: () => g.intl.string(g.t["2wScL1"]),
    useSubtitle: () => g.intl.string(g.t["Rf9+fy"]),
    useValue: () => (0, O.bG)([NH.A], () => NH.A.getSettings().clipsQuality.frameRate),
    setValue: (e) => {
        let { clipsQuality: t } = NH.A.getSettings();
        NK.GS({ resolution: t.resolution, frameRate: e });
    },
    useOptions: () => [
        { id: "15", value: N6.kn.FPS_15, label: g.intl.formatToPlainString(g.t.Qb44XH, { fps: N6.kn.FPS_15 }) },
        { id: "30", value: N6.kn.FPS_30, label: g.intl.formatToPlainString(g.t.Qb44XH, { fps: N6.kn.FPS_30 }) },
        { id: "60", value: N6.kn.FPS_60, label: g.intl.formatToPlainString(g.t.Qb44XH, { fps: N6.kn.FPS_60 }) },
    ],
});
var N7 = i(372684);
let N8 = (0, o.E2)(u.X.CLIPS_HARDWARE_CLASSIFICATION_WARNING, {
    useSearchTerms: () => [g.intl.string(g.t.SIxrIF)],
    usePredicate: () => (0, O.bG)([NH.A], () => NH.A.getHardwareClassification()) === N7.k9.BELOW_MINIMUM,
    Component: () => (0, p.jsx)(sn.A, { look: sn.k.WARNING, children: g.intl.string(g.t.SIxrIF) }),
});
var N5 = i(239892);
let N9 = (0, o.E2)(u.X.CLIPS_KEYBIND, {
        useSearchTerms: () => [g.intl.string(g.t.pf54EU), g.intl.string(g.t["QyB/jK"])],
        Component: () => {
            let e = (0, O.bG)([eC.Ay], () => eC.Ay.getKeybindForAction(q.hCu.SAVE_CLIP, !0));
            ty()(null != e, "Save clip keybind unset");
            let t = N.useCallback(
                (t) => {
                    tO.A.setKeybind({ ...e, shortcut: t });
                },
                [e],
            );
            return (0, p.jsx)(sO.D, {
                label: g.intl.string(g.t.pf54EU),
                description: g.intl.string(g.t["QyB/jK"]),
                layout: "horizontal",
                children: (0, p.jsx)("div", {
                    className: N5.g,
                    children: (0, p.jsx)(tR.A, { defaultValue: e.shortcut, onChange: t }),
                }),
            });
        },
    }),
    fe = (0, o.Hn)(u.X.CLIPS_LENGTH, {
        useTitle: () => g.intl.string(g.t.OgfUio),
        useSubtitle: () => g.intl.string(g.t.H7j4tY),
        useValue: () => (0, O.bG)([NH.A], () => NH.A.getSettings().clipsLength),
        setValue: (e) => NK.h$(e),
        useOptions: () => [
            { id: "30s", value: NW.LX.SECONDS_30, label: g.intl.formatToPlainString(g.t["bTFv/3"], { count: 30 }) },
            { id: "1m", value: NW.LX.MINUTES_1, label: g.intl.formatToPlainString(g.t.ICo9Nk, { count: 1 }) },
            { id: "2m", value: NW.LX.MINUTES_2, label: g.intl.formatToPlainString(g.t.ICo9Nk, { count: 2 }) },
        ],
    }),
    ft = (0, o.E2)(u.X.CLIPS_QUALITY_INFOBOX, {
        useSearchTerms: () => [g.intl.string(g.t["Z+MfqT"])],
        Component: () => (0, p.jsx)(sn.A, { look: sn.k.INFO, children: g.intl.string(g.t["Z+MfqT"]) }),
    }),
    fi = (0, o.Hn)(u.X.CLIPS_RESOLUTION, {
        useTitle: () => g.intl.string(g.t.aFudZJ),
        useSubtitle: () => g.intl.string(g.t.nIrkW5),
        useValue: () => (0, O.bG)([NH.A], () => NH.A.getSettings().clipsQuality.resolution),
        setValue: (e) => {
            let { clipsQuality: t } = NH.A.getSettings();
            NK.GS({ resolution: e, frameRate: t.frameRate });
        },
        useOptions: () => [
            {
                id: "480p",
                value: N6.on.RESOLUTION_480,
                label: g.intl.formatToPlainString(g.t.TEOC0I, { resolution: N6.on.RESOLUTION_480 }),
            },
            {
                id: "720p",
                value: N6.on.RESOLUTION_720,
                label: g.intl.formatToPlainString(g.t.TEOC0I, { resolution: N6.on.RESOLUTION_720 }),
            },
            {
                id: "1080p",
                value: N6.on.RESOLUTION_1080,
                label: g.intl.formatToPlainString(g.t.TEOC0I, { resolution: N6.on.RESOLUTION_1080 }),
            },
            {
                id: "1440p",
                value: N6.on.RESOLUTION_1440,
                label: g.intl.formatToPlainString(g.t.TEOC0I, { resolution: N6.on.RESOLUTION_1440 }),
            },
            { id: "source", value: N6.on.RESOLUTION_SOURCE, label: g.intl.string(g.t.XjXqzh) },
        ],
    }),
    fn = (0, o.E2)(u.X.CLIPS_SCREENSHOT_KEYBIND, {
        useSearchTerms: () => [g.intl.string(g.t["0U/hj7"]), g.intl.string(g.t["5zxkdo"])],
        usePredicate: lQ.BW,
        Component: () => {
            let e = (0, O.bG)([eC.Ay], () => eC.Ay.getKeybindForAction(q.hCu.SAVE_CLIP, !0)),
                t = (0, O.bG)([eC.Ay], () => eC.Ay.getKeybindForAction(q.hCu.SAVE_SCREENSHOT, !0));
            ty()(null != e, "Save clip keybind unset"), ty()(null != t, "Save screenshot keybind unset");
            let i = N.useCallback(
                (e) => {
                    tO.A.setKeybind({ ...t, shortcut: e });
                },
                [t],
            );
            return (0, p.jsx)(sO.D, {
                label: g.intl.string(g.t["0U/hj7"]),
                description: g.intl.string(g.t["5zxkdo"]),
                layout: "horizontal",
                children: (0, p.jsx)("div", {
                    className: N5.g,
                    children: (0, p.jsx)(tR.A, { defaultValue: t.shortcut, onChange: i }),
                }),
            });
        },
    }),
    fs = (0, o.E2)(u.X.CLIPS_STORAGE_LOCATION, {
        useSearchTerms: () => [g.intl.string(g.t.s4773E), g.intl.string(g.t.svjwGh)],
        Component: () => {
            let e = (0, O.bG)([NH.A], () => NH.A.getSettings().storageLocation),
                t = N.useRef(!1),
                i = async () => {
                    if (!t.current) {
                        t.current = !0;
                        try {
                            let e = await s3.A.fileManager.showOpenDialog({
                                properties: ["openDirectory", "createDirectory"],
                            });
                            e.length > 0 && NK.HU(e[0]);
                        } finally {
                            t.current = !1;
                        }
                    }
                };
            return (0, p.jsx)(sO.D, {
                label: g.intl.string(g.t.s4773E),
                description: g.intl.string(g.t.svjwGh),
                layout: "horizontal",
                children: (0, p.jsx)(M.D, {
                    "aria-label": g.intl.formatToPlainString(g.t.iMONTj, { storageLocation: e }),
                    onClick: i,
                    children: (0, p.jsx)(lL.k, { tabIndex: -1, value: e, editable: !1, "aria-hidden": !0 }),
                }),
            });
        },
    });
var fl = i(572164);
let fr = (0, o.zD)(u.X.CLIPS_ENABLE, {
    useTitle: () => g.intl.string(g.t.h8rgrK),
    useSubtitle: () => g.intl.string(g.t["4Qw3NO"]),
    useValue: () => (0, fl.Et)(),
    setValue: (e) => NK.yO({ clipsEnabled: e, trackAnalytics: !0 }),
});
var fa = i(915618);
let fo = (0, o.zD)(u.X.CLIPS_ENABLE_DECOUPLED_CLIPPING, {
        useTitle: () => g.intl.string(g.t.yXvykv),
        useSubtitle: () => g.intl.string(g.t.YP3ujk),
        useValue: fl.XT,
        setValue: (e) => NK.fd({ enabled: e, trackAnalytics: !0 }),
        usePredicate: () => {
            let e = (0, ev.isWindows)(),
                t = (0, fa.A)(lb.Ay);
            return e && t;
        },
    }),
    fu = (0, o.zD)(u.X.CLIPS_ENABLE_REMINDERS, {
        useTitle: () => g.intl.string(g.t["3zwNf6"]),
        useSubtitle: () => g.intl.string(g.t.m4Cjj9),
        useValue: () => (0, O.bG)([NH.A], () => NH.A.getSettings().remindersEnabled),
        setValue: (e) => NK.Mt(e),
    }),
    fd = (0, o.zZ)(u.X.CLIPS_RECORDING_CATEGORY, {
        useTitle: () => g.intl.string(g.t.iIwmV5),
        buildLayout: () => [ft, N8, fr, fo, fu, N3, fe, fi, N4, N9, fn, fs],
    }),
    fc = (0, o.t_)(u.X.CLIPS_PANEL, {
        useTitle: () => g.intl.string(g.t.z2jK6X),
        usePersistentBadge: () => ({
            badgeType: ef.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            useCustomBadge: () => (0, p.jsx)(NX, {}),
        }),
        usePredicate: lQ.sw,
        buildLayout: () => [fd, N0],
    }),
    fg = (0, o.i4)(u.X.CLIPS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.z2jK6X),
        icon: Nz.x,
        buildLayout: () => [fc],
    });
var fm = i(187322),
    fA = i(77468),
    fh = i(289498),
    fE = i(573648),
    fT = i(941314),
    fx = i(874490),
    fS = i(370480),
    fp = i(773952);
let fN = new Set([q.fg2.XBOX, q.fg2.PLAYSTATION, q.fg2.PLAYSTATION_STAGING, q.fg2.CRUNCHYROLL]);
var ff = i(169869),
    f_ = i(30370);
let fC = (0, E.mj)({
    name: "2026-03-crepe",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var fI = i(674567),
    fb = i(237146);
i(594387);
var fv = i(34934);
function fj() {
    let e,
        t,
        n,
        s,
        { variant: l, showFooter: r } =
            ((e = (0, fI.V)()),
            (t = (function (e) {
                let { enabled: t } = fC.useConfig({ location: e });
                return t;
            })("connectedAccountsBannerFooter")),
            (s = null != (n = (0, O.bG)([f_.A], () => f_.A.getAccount(null, q.fg2.XBOX))) && !n.revoked),
            e === fI.s.NONE || e === fI.s.FREE_FRACTIONAL_NITRO || (e === fI.s.NON_NITRO && 0)
                ? { variant: fI.s.NONE, showFooter: !1 }
                : { variant: e, showFooter: t && e === fI.s.NON_NITRO && !s }),
        { analyticsLocations: a } = (0, nU.Ay)(eM.A.XBOX_CONNECTED_ACCOUNTS_BANNER);
    if (l === fI.s.NONE) return null;
    let o = "",
        u = null;
    return (
        l === fI.s.NITRO
            ? ((o = g.intl.string(fb.default["+QAvQz"])),
              (u = (0, p.jsx)(eh.$, {
                  variant: "secondary",
                  size: "sm",
                  text: g.intl.string(fb.default.CubeLC),
                  onClick: () => {
                      (0, _.openModalLazy)(async () => {
                          let { default: e } = await Promise.all([i.e("16848"), i.e("77632")]).then(i.bind(i, 836291));
                          return (t) => (0, p.jsx)(e, { ...t, sourceAnalyticsLocations: a });
                      });
                  },
              })))
            : (l === fI.s.NON_NITRO || l === fI.s.FREE_FRACTIONAL_NITRO) &&
              ((o = g.intl.string(fb.default.NwkRTZ)),
              (u = (0, p.jsx)(sE.A, {
                  fullWidth: !0,
                  defaultTextOverride: g.intl.string(fb.default["0vY+ie"]),
                  variantOverride: "overlay-primary",
                  size: "sm",
                  subscriptionTier: sf.pe.TIER_2,
              }))),
        (0, p.jsxs)(nU.f5, {
            value: a,
            children: [
                (0, p.jsxs)("div", {
                    className: fv.bV,
                    children: [
                        (0, p.jsx)(eA.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: g.intl.string(g.t.NG1e6l),
                        }),
                        (0, p.jsx)(oV.t, { size: "xs", color: "var(--icon-default)" }),
                    ],
                }),
                (0, p.jsx)(tQ.N, {
                    theme: "dark",
                    children: (e) =>
                        (0, p.jsx)("div", {
                            className: e,
                            children: (0, p.jsxs)("div", {
                                className: fv.Nr,
                                style: {
                                    backgroundImage:
                                        "url(https://cdn.discordapp.com/assets/content/6f39ba0aa00a9877bcb4bc67862335d29c21749762ec29fd0248ba734bc2c4b8.png)",
                                },
                                children: [
                                    (0, p.jsx)("div", { className: fv.$h }),
                                    (0, p.jsx)("div", { className: fv.Lw }),
                                    (0, p.jsxs)("div", {
                                        className: fv.Qs,
                                        children: [
                                            (0, p.jsx)("img", {
                                                className: fv.wm,
                                                src: "https://cdn.discordapp.com/assets/content/f3a967ffa662e944346571ea7f2b30b2e40745e2edca294519fbddf971e81fb1.png",
                                                alt: "Xbox Game Pass",
                                            }),
                                            (0, p.jsx)(V.E, {
                                                variant: "text-sm/semibold",
                                                color: "text-strong",
                                                className: fv.DD,
                                                children: o,
                                            }),
                                            (0, p.jsx)("div", { className: fv.lO, children: u }),
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
var fy = i(201718),
    fO = i(321078),
    fR = i(672130),
    fL = i(546183),
    fD = i(379848),
    fP = i(950018);
let fG = (e) => {
        let { markAsDismissed: t } = e;
        return (
            N.useEffect(() => t(t5.i.UNKNOWN), [t]),
            (0, p.jsx)(n5.Lp, { className: fP.Ad, text: g.intl.string(g.t.y2b7CA) })
        );
    },
    fU = (e) => {
        let { title: t, body: i, img: n, newIndicatorDismissibleContent: s, onClick: l } = e;
        return (0, p.jsxs)("div", {
            className: fP.kL,
            children: [
                n,
                (0, p.jsxs)("div", {
                    className: fP.FS,
                    children: [
                        (0, p.jsxs)("div", {
                            className: fP.TK,
                            children: [
                                (0, p.jsx)(fD.Ay, {
                                    contentTypes: [s],
                                    children: (e) => {
                                        let { visibleContent: t, markAsDismissed: i } = e;
                                        return t === s ? (0, p.jsx)(fG, { markAsDismissed: i }) : null;
                                    },
                                }),
                                (0, p.jsx)(V.E, { variant: "text-md/semibold", children: t }),
                            ],
                        }),
                        (0, p.jsx)(V.E, { variant: "text-xs/normal", children: i }),
                    ],
                }),
                (0, p.jsx)(eh.$, { text: g.intl.string(g.t.vD60Pv), onClick: l }),
            ],
        });
    },
    fM = () => {
        let e = ta.A.getArticleURL(q.MVz.PS_CONNECTION);
        return (0, p.jsx)(fU, {
            title: g.intl.string(g.t.v20wwm),
            body: g.intl.format(g.t.lTZBit, { help_article: e }),
            img: (0, p.jsx)("img", { src: "/assets/88954903b6a5b9cc.svg", width: "82", height: "auto", alt: "" }),
            newIndicatorDismissibleContent: eT.M.PS_ONE_WAY_RECONNECT,
            onClick: () => (0, fp.A)({ platformType: q.fg2.PLAYSTATION, location: "PS two way upsell" }),
        });
    },
    fV = () => {
        let e = ta.A.getArticleURL(q.MVz.XBOX_CONNECTION);
        return (0, p.jsx)(fU, {
            title: g.intl.string(g.t["2okkZV"]),
            body: g.intl.format(g.t.OnERSS, { help_article: e }),
            img: (0, p.jsx)("img", { src: "/assets/9df988a227916145.png", width: "auto", height: "45", alt: "" }),
            newIndicatorDismissibleContent: eT.M.XBOX_ONE_WAY_RECONNECT,
            onClick: () => (0, fp.A)({ platformType: q.fg2.XBOX, location: "Xbox two way upsell" }),
        });
    };
var fk = i(783419),
    fw = i(534952),
    fF = i(838251);
let fB = (e) => {
    let t,
        { integration: i } = e,
        {
            isJoining: n,
            joinErrorMessage: s,
            showJoinErrorMessage: l,
        } = (0, O.cf)(
            [f_.A],
            () => ({
                isJoining: f_.A.isJoining(i.id),
                joinErrorMessage:
                    "" === f_.A.joinErrorMessage(i.id) ? g.intl.string(g.t.j2d6Km) : f_.A.joinErrorMessage(i.id),
                showJoinErrorMessage: void 0 !== f_.A.joinErrorMessage(i.id),
            }),
            [i.id],
        );
    return (
        null != (0, O.bG)([H.A], () => H.A.getGuild(i.guild.id), [i.guild.id]) ||
            (t = (0, p.jsx)(eh.$, {
                size: "sm",
                onClick: function () {
                    fA.A.joinServer(i.id, () => {});
                },
                disabled: n,
                variant: "primary",
                text: n ? g.intl.string(g.t.RXvQQu) : g.intl.string(g.t.XpeFYr),
            })),
        (0, p.jsxs)("div", {
            className: fF.iA,
            children: [
                (0, p.jsxs)("div", {
                    className: fF.XX,
                    children: [
                        (0, p.jsx)(gc.Ay, { size: gc.Ay.Sizes.SMALL, guild: i.guild, className: fF.$f }),
                        (0, p.jsxs)("div", {
                            className: fF.Vn,
                            children: [
                                (0, p.jsx)(V.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: i.guild.name,
                                }),
                                (0, p.jsx)(uO.Anchor, {
                                    href: fE.A.get(i.type)?.getPlatformUserUrl?.(i.account),
                                    children: (0, p.jsx)(V.E, {
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
                    (0, p.jsx)(V.E, {
                        variant: "text-xs/normal",
                        color: "text-feedback-critical",
                        className: fF.R,
                        children: s,
                    }),
            ],
        })
    );
};
function fz(e) {
    let t,
        i,
        n,
        s,
        l,
        r,
        a,
        { onDisconnect: o, account: u, theme: d, locale: c } = e,
        [m, A] = N.useState(u.friendSync),
        [h, E] = N.useState(u.visibility),
        [T, x] = N.useState(u.metadataVisibility),
        [S, f] = N.useState(u.showActivity),
        [C, I] = N.useState(null),
        [b, v] = N.useState(null),
        [j, y] = N.useState(!1),
        [O, R] = N.useState([]),
        D = (0, fx.ML)(u.type),
        P = fE.A.get(D);
    N.useEffect(() => {
        A(u.friendSync), E(u.visibility), x(u.metadataVisibility), f(u.showActivity);
    }, [u]);
    let G = { inProgressVisibility: C, inProgressMetadataVisibility: b },
        U = N.useRef(G);
    return (
        N.useEffect(() => {
            U.current = G;
        }),
        N.useEffect(() => {
            if (!1 === u.verified) return;
            let { inProgressVisibility: e, inProgressMetadataVisibility: t } = U.current;
            null != e && (E(e), fA.A.setVisibility(u.type, u.id, e), I(null)),
                null != t && (x(t), fA.A.setMetadataVisibility(u.type, u.id, t), v(null));
        }, [u]),
        (0, p.jsxs)("div", {
            className: fF.FI,
            children: [
                ((t = fE.A.get(u.type)),
                (i = fE.A.get(D)),
                (n = "1" === (u.metadata ?? {})[fk.pK.TWITTER_VERIFIED]),
                (s = null),
                t.type === q.fg2.TWITTER &&
                    n &&
                    (s = (0, p.jsx)(e0.m, {
                        text: g.intl.string(g.t.Jebrww),
                        children: (0, p.jsx)(e5.A, {
                            color: w.A.unsafe_rawColors.PLATFORM_TWITTER.css,
                            children: (0, p.jsx)(e1.U, { size: "xs", color: w.A.unsafe_rawColors.WHITE.css }),
                        }),
                    })),
                (0, p.jsxs)("div", {
                    className: fF.Il,
                    children: [
                        (0, p.jsx)("img", {
                            alt: i.name,
                            className: fF.gj,
                            src: (0, cW.M)(d) ? i.icon.darkSVG : i.icon.lightSVG,
                        }),
                        (0, p.jsxs)("div", {
                            children: [
                                (0, p.jsxs)("div", {
                                    className: fF.$p,
                                    children: [
                                        (0, p.jsx)(V.E, {
                                            color: "text-strong",
                                            variant: "text-md/semibold",
                                            className: fF.RW,
                                            children: u.name,
                                        }),
                                        null != s && (0, p.jsx)("div", { className: fF.cG, children: s }),
                                    ],
                                }),
                                (0, p.jsx)(V.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: fF.Au,
                                    children: i.name,
                                }),
                            ],
                        }),
                        (0, p.jsx)(M.D, {
                            className: fF.uH,
                            onClick: function () {
                                let e = fE.A.get(u.type);
                                (0, _.openModal)((t) =>
                                    (0, p.jsx)(lR.Modal, {
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
                                            fN.has(u.type) &&
                                            u.twoWayLink &&
                                            (0, p.jsx)(sn.A, {
                                                children: g.intl.format(g.t.COW3Xn, { platformName: e.name }),
                                            }),
                                    }),
                                );
                            },
                            "aria-label": g.intl.string(g.t.ppppRJ),
                            focusProps: { offset: { top: -4, left: -4, right: -4 } },
                            children: (0, p.jsx)(cq.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                })),
                u.twoWayLink
                    ? null
                    : u.type === q.fg2.XBOX
                      ? (0, p.jsx)(fV, {})
                      : u.type === q.fg2.PLAYSTATION
                        ? (0, p.jsx)(fM, {})
                        : null,
                (function (e) {
                    let t = e.metadata ?? {},
                        i = null,
                        n = (0, fS.An)(t[fk.pK.CREATED_AT], c);
                    switch (e.type) {
                        case q.fg2.REDDIT:
                            i = (0, ff.xE)(t, fF.Nz);
                            break;
                        case q.fg2.STEAM:
                            i = (0, ff.dy)(t, fF.Nz);
                            break;
                        case q.fg2.BLUESKY:
                        case q.fg2.TWITTER:
                        case q.fg2.MASTODON:
                            i = (0, ff.ED)(t, fF.Nz);
                            break;
                        case q.fg2.EBAY:
                            i = (0, ff.ub)(t, fF.Nz);
                            break;
                        case q.fg2.PAYPAL:
                            i = (0, ff.gZ)(t, fF.Nz);
                            break;
                        case q.fg2.TIKTOK:
                            i = (0, ff.HU)(t, fF.Nz);
                    }
                    null !== n &&
                        (null == i && (i = []),
                        i?.push(
                            (0, p.jsx)(
                                V.E,
                                {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    className: fF.M4,
                                    children: g.intl.format(g.t["9rfonh"], { date: n }),
                                },
                                "member-since",
                            ),
                        ));
                    let s = O.includes(e.id),
                        l = g.intl.string(g.t.wzzjk9);
                    if (null == i || 0 === i.length)
                        if (!0 !== fE.A.get(e.type).hasMetadata) return null;
                        else
                            (i = [
                                (0, p.jsx)(n5.Lp, { className: fF.Z3, text: g.intl.string(g.t.y2b7CA) }, "badge"),
                                (0, p.jsx)(
                                    V.E,
                                    {
                                        variant: "text-xs/normal",
                                        className: fF.vt,
                                        children: g.intl.format(g.t.Up2ni7, {
                                            helpdeskUrl: ta.A.getArticleURL(q.MVz.CONNECTION_DETAILS),
                                        }),
                                    },
                                    "label",
                                ),
                            ]),
                                (l = g.intl.string(g.t["LVh3/5"]));
                    return (
                        s && (l = g.intl.string(g.t.i4jeWR)),
                        i.push(
                            (0, p.jsx)(
                                "div",
                                {
                                    className: fF.jy,
                                    children: (0, p.jsx)(eh.$, {
                                        text: l,
                                        variant: "secondary",
                                        size: "sm",
                                        loading: j,
                                        disabled: s,
                                        "aria-label": g.intl.string(g.t.sCkLYH),
                                        onClick: s
                                            ? void 0
                                            : () => {
                                                  y(!0),
                                                      fA.A.refresh(e.type, e.id).finally(() => {
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
                        (0, p.jsx)("div", { className: fF.tJ, children: i })
                    );
                })(u),
                (q.txh.has(u.type) &&
                    (l = (0, p.jsx)(L.d, {
                        label: g.intl.string(g.t["+KCMSi"]),
                        checked: m,
                        onChange: function (e) {
                            A(e), fA.A.setFriendSync(u.type, u.id, e);
                        },
                    })),
                q.ewM.has(u.type) &&
                    (r = (0, p.jsx)(L.d, {
                        label: g.intl.format(g.t["6u6J0q"], { platform: P.name }),
                        checked: S,
                        onChange: function (e) {
                            f(e), fA.A.setShowActivity(u.type, u.id, e);
                        },
                    })),
                fE.A.get(u.type)?.hasMetadata === !0 &&
                    (a = (0, p.jsx)(L.d, {
                        label: g.intl.string(g.t.FYKGsL),
                        checked: 1 === T,
                        onChange: function (e) {
                            let { verified: t } = u,
                                i = +!!e;
                            if (e && !t) {
                                v(i), (0, fp.A)({ platformType: u.type, location: "User Settings" });
                                return;
                            }
                            x(i), fA.A.setMetadataVisibility(u.type, u.id, i);
                        },
                        disabled: 1 !== h || null == u.metadata,
                    })),
                (0, p.jsxs)("div", {
                    className: fF.HZ,
                    children: [
                        (0, p.jsx)(L.d, {
                            label: g.intl.string(g.t.f7yOAX),
                            checked: 1 === h,
                            onChange: function (e) {
                                let { verified: t } = u,
                                    i = +!!e;
                                if (e && !t) {
                                    I(i), (0, fp.A)({ platformType: u.type, location: "User Settings" });
                                    return;
                                }
                                E(i), fA.A.setVisibility(u.type, u.id, i);
                            },
                        }),
                        a,
                        r,
                        l,
                    ],
                })),
                (function () {
                    if (u.revoked || u.integrations.length > 0) return (0, p.jsx)(eE.c, {});
                })(),
                u.revoked
                    ? (0, p.jsx)(tr.p, {
                          messageType: tr.Y.INFO,
                          children: g.intl.format(g.t["6C4lgA"], {
                              onReconnect: function () {
                                  (0, fp.A)({ platformType: u.type, location: "User Settings" });
                              },
                          }),
                      })
                    : u.integrations.length > 0
                      ? (0, p.jsx)(sO.D, {
                            label: g.intl.string(g.t.fOe3fZ),
                            children: u.integrations.map((e) => (0, p.jsx)(fB, { integration: e }, e.id)),
                        })
                      : void 0,
                null,
            ],
        })
    );
}
function fY(e) {
    let { appIdentity: t, oauth2Token: i } = e;
    return null == i
        ? null
        : (0, p.jsxs)("div", {
              className: fF.FI,
              children: [
                  (function (e, t) {
                      let { application: i } = t,
                          n = i$.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
                      return (0, p.jsxs)("div", {
                          className: fF.Il,
                          children: [
                              (0, p.jsx)("img", { alt: i.name, className: ew()(fF.gj, fF.sN), src: n }),
                              (0, p.jsxs)("div", {
                                  children: [
                                      (0, p.jsx)("div", {
                                          className: fF.$p,
                                          children: (0, p.jsx)(V.E, {
                                              color: "text-strong",
                                              variant: "text-md/semibold",
                                              className: fF.RW,
                                              children: e.profile.username,
                                          }),
                                      }),
                                      (0, p.jsx)(V.E, {
                                          variant: "text-xs/normal",
                                          color: "text-strong",
                                          className: fF.Au,
                                          children: i.name,
                                      }),
                                  ],
                              }),
                              (0, p.jsx)(M.D, {
                                  className: fF.uH,
                                  onClick: () =>
                                      (0, NV.d1)(i, () => {
                                          NM.A.delete(t.id);
                                      }),
                                  "aria-label": g.intl.string(g.t.ppppRJ),
                                  focusProps: { offset: { top: -4, left: -4, right: -4 } },
                                  children: (0, p.jsx)(cq.P, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      });
                  })(t, i),
                  (0, p.jsx)("div", {
                      className: fF.HZ,
                      children: (0, p.jsx)(L.d, {
                          label: g.intl.string(g.t.f7yOAX),
                          checked: t.profile?.connection_visible ?? !1,
                          onChange: (e) => {
                              fy.A.updateApplicationIdentityConfig(i.application.id, t.provider_issued_user_id, {
                                  connection_visible: e,
                              });
                          },
                      }),
                  }),
              ],
          });
}
function fX(e) {
    let t = fE.A.get(e);
    (0, fp.A)({ platformType: t.type }),
        Y.default.track(q.HAw.ACCOUNT_LINK_STEP, {
            previous_step: "desktop connections",
            current_step: "desktop oauth",
            platform_type: t.type,
        });
}
function fH() {
    let e = (0, fx.gn)(),
        t = fT.A.useConfig({ location: "User Settings Connections" }),
        i = (0, eZ.A)(t.enabled ? fw.tX : []);
    return (0, p.jsxs)("div", {
        className: fF.lA,
        children: [
            i.map(
                (e) =>
                    null != e &&
                    (0, p.jsx)(
                        fR.A,
                        { application: e, className: fF.__invalid_accountButton, innerClassName: fF.U$ },
                        e.id,
                    ),
            ),
            e
                .slice(0, 10 - i.length)
                .map((e) =>
                    (0, p.jsx)(
                        fh.A,
                        { type: e.type, className: fF.__invalid_accountButton, innerClassName: fF.U$ },
                        e.type,
                    ),
                ),
            (0, p.jsx)(e0.m, {
                text: g.intl.string(g.t.QqTz8b),
                children: (0, p.jsx)("div", {
                    className: ew()(fF.ej, fF.__invalid_accountButton),
                    children: (0, p.jsx)(fm.vN, {
                        children: (0, p.jsx)("button", {
                            className: ew()(fF.R8, fF.U$),
                            type: "button",
                            onClick: function () {
                                n6.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: fX });
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
function fK(e) {
    let t,
        { fetching: i, accounts: n, appIdentities: s, authorizedApps: l, theme: r, locale: a } = e;
    return (
        (t = i
            ? (0, p.jsx)(uK.y, { type: uK.y.Type.SPINNING_CIRCLE })
            : 0 === n.length && 0 === s.length
              ? (0, p.jsx)(ir.pp, {
                    theme: r,
                    children: (0, p.jsx)(ir.SG, {
                        note: g.intl.string(g.t.WenGZ2),
                        children: g.intl.string(g.t.aoLS84),
                    }),
                })
              : (0, p.jsxs)(p.Fragment, {
                    children: [
                        s.map((e, t) =>
                            (0, p.jsx)(
                                fY,
                                { appIdentity: e, oauth2Token: l.find((t) => t.application.id === e.application_id) },
                                `app-${t}`,
                            ),
                        ),
                        n
                            .filter((e) => fE.A.isSupported(e.type))
                            .map((e, t) =>
                                (0, p.jsx)(
                                    fz,
                                    {
                                        theme: r,
                                        account: e,
                                        locale: a,
                                        onDisconnect: () =>
                                            (function (e) {
                                                let { type: t, id: i } = e;
                                                fA.A.disconnect(t, i);
                                            })(e),
                                    },
                                    `connection-${t}`,
                                ),
                            ),
                    ],
                })),
        (0, p.jsx)("div", { className: fF.V, children: t })
    );
}
let fW = (0, o.E2)(u.X.CONNECTIONS_ADD_CONNECTIONS_SETTING, {
        Component: function () {
            return (0, p.jsx)(sO.D, {
                label: g.intl.string(g.t.ZeDrUf),
                description: g.intl.format(g.t["oYc+Gz"], { privacyPolicyUrl: q.X7G.PRIVACY }),
                children: (0, p.jsx)(fH, {}),
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
    fZ = (0, o.E2)(u.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING, {
        Component: function () {
            let e = (0, O.bG)([e_.A], () => e_.A.hidePersonalInformation),
                t = (0, O.bG)([f_.A], () => f_.A.isFetching()),
                i = (0, O.bG)([f_.A], () => f_.A.getAccounts()),
                { authorizedAppsFetchState: n, authorizedApps: s } = (0, O.cf)([fL.default], () => ({
                    authorizedAppsFetchState: fL.default.getFetchState(),
                    authorizedApps: fL.default.getNewestTokensForNonChildrenApplications(),
                })),
                { isLoading: l, filteredAppIdentities: r } = (0, fO.A)(t3.default.getCurrentUser().id, {
                    includeHidden: !0,
                }),
                a = (0, dZ.Ay)(),
                o = (0, O.bG)([dS.default], () => dS.default.locale);
            return (N.useEffect(() => {
                n === fL.FetchState.NOT_FETCHED && NM.A.fetch();
            }, [n]),
            e)
                ? null
                : (0, p.jsxs)(p.Fragment, {
                      children: [
                          (0, p.jsx)(fj, {}),
                          (0, p.jsx)(fK, {
                              fetching: t || l || (r.length > 0 && n !== fL.FetchState.FETCHED),
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
            fA.A.fetch();
        },
        useSearchTerms: () => [
            g.intl.string(g.t["+/hZM/"]),
            g.intl.string(g.t.bsbMVz),
            g.intl.string(g.t.f7yOAX),
            g.intl.string(g.t.FYKGsL),
            g.intl.string(g.t["+KCMSi"]),
        ],
    });
var fq = i(46225),
    fQ = i(230451);
let fJ = [q.fg2.LEAGUE_OF_LEGENDS, q.fg2.RIOT_GAMES],
    f$ = [{ badgeType: ef.Xi.NEW, dismissibleContent: eT.M.NEW_CRUNCHYROLL_CONNECTION }],
    f0 = (0, o.zZ)(u.X.CONNECTIONS_ADD_CONNECTIONS_CATEGORY, {
        buildLayout: () => [fW],
        useInlineNotice: function () {
            let e = (0, O.bG)([f_.A], () => f_.A.getAccounts().find((e) => fJ.includes(e.type))?.type),
                t = null != e ? fE.A.get(e) : null,
                i = (0, eZ.h)(t?.replacedBy),
                { canStartAuthorization: n, hasAlreadyLinked: s, fetched: l } = (0, fq.RD)(i),
                r = g.intl.string(fQ.default["1S6oAo"]),
                a = fT.A.useConfig({ location: "RiotDeprecationInlineNotice" }).enabled;
            return N.useMemo(
                () =>
                    a && null != t && n && i?.connectionEntrypointUrl != null && !s && l
                        ? {
                              type: ef.lT.INLINE_NOTICE,
                              noticeType: "info",
                              useText: () =>
                                  g.intl.format(fQ.default.DeOsIl, {
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
    f1 = (0, o.zZ)(u.X.CONNECTIONS_CONNECTED_ACCOUNTS_CATEGORY, { buildLayout: () => [fZ] }),
    f2 = (0, o.t_)(u.X.CONNECTIONS_PANEL, {
        useTitle: () => g.intl.string(g.t["3fe7U5"]),
        useObscuredNotice: uX.L,
        buildLayout: () => [f0, f1],
    }),
    f3 = (0, o.i4)(u.X.CONNECTIONS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["3fe7U5"]),
        icon: hf.q,
        getDismissibleBadges: () => f$,
        buildLayout: () => [f2],
    });
var f6 = i(875444);
function f4(e, t) {
    let i = (0, O.bG)([fL.default], () => fL.default.getFetchState()),
        n = (0, O.bG)([fL.default], () =>
            e ? fL.default.getNewestTokensForNonChildrenApplications() : fL.default.getNewestTokens(),
        ),
        s = N.useMemo(
            () => (null == n ? [] : n.filter((e) => (0, f6.A)(e.application)).map((e) => e.application)),
            [n],
        );
    return (
        N.useEffect(() => {
            t || NM.A.fetch();
        }, [t]),
        { showLoadingIndicator: i !== fL.FetchState.FETCHED && (null == n || 0 === n.length), slayerSdkApplications: s }
    );
}
i(505653);
var f7 = i(106148);
i(650832);
var f8 = i(628736);
function f5(e) {
    let { applications: t } = e,
        i = N.useMemo(() => t.sort((e, t) => u2.default.compare(t.id, e.id)), [t]),
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
                              V.E,
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
        s = N.useMemo(() => {
            let e = [];
            for (let t = 0; t < 3; t++) {
                let n = i[t];
                if (null == n) break;
                let { icon: s, name: l, id: r } = n,
                    a = i$.Ay.getApplicationIconURL({ id: r, icon: s });
                e.push(
                    (0, p.jsx)(
                        e0.m,
                        {
                            __unsupportedReactNodeAsText: l,
                            children: (0, p.jsx)("img", { src: a, "aria-label": l, className: f8.Kk }),
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
                                className: f8.lK,
                                children: (0, p.jsx)(V.E, {
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
        className: f8.wx,
        children: [
            (0, p.jsxs)("div", {
                className: f8.kX,
                children: [
                    (0, p.jsx)(V.E, { variant: "text-md/normal", color: "text-strong", children: n }),
                    (0, p.jsxs)(M.D, {
                        onClick: () => {
                            (0, ej.openUserSettings)(u.X.AUTHORIZED_APPS_PANEL);
                        },
                        className: f8.bJ,
                        children: [
                            (0, p.jsx)(V.E, {
                                variant: "text-xs/normal",
                                color: "interactive-text-default",
                                children: g.intl.format(g.t.oYaYOe, {}),
                            }),
                            (0, p.jsx)(th._, {
                                size: "xxs",
                                color: w.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                className: f8.g7,
                            }),
                        ],
                    }),
                ],
            }),
            (0, p.jsx)("div", { className: f8.yF }),
            (0, p.jsx)("div", { className: f8.lJ, children: s }),
        ],
    });
}
function f9() {
    return (0, p.jsxs)("div", {
        className: f8.do,
        children: [
            (0, p.jsx)(V.E, {
                variant: "text-md/medium",
                color: "text-strong",
                className: f8.xV,
                children: g.intl.string(g.t["+0U77d"]),
            }),
            (0, p.jsx)(V.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: g.intl.format(g.t.V8wClM, {
                    helpdeskArticle: ta.A.getArticleURL(q.MVz.SOCIAL_LAYER_CONNECTIONS),
                }),
            }),
        ],
    });
}
function _e(e) {
    let { applications: t } = e;
    return t.length > 0 ? (0, p.jsx)(f5, { applications: t }) : (0, p.jsx)(f9, {});
}
let _t = (0, o.E2)(u.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES, {
    useSearchTerms: () => [g.intl.string(g.t.YpCiMt)],
    Component: function () {
        let { showLoadingIndicator: e, slayerSdkApplications: t } = f4(!0);
        return e ? (0, p.jsx)(uK.y, {}) : (0, p.jsx)(_e, { applications: t });
    },
});
function _i() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = f4(!0, !0);
    return !e && t.length > 0;
}
let _n = (0, o.zD)(u.X.CONTENT_AND_SOCIAL_ALLOW_GAME_FRIEND_DMS_SETTING, {
        useTitle: () => g.intl.string(g.t.XpBObB),
        useSubtitle: () =>
            g.intl.format(g.t.oZsHTD, { helpdeskArticle: ta.A.getArticleURL(q.MVz.SLAYER_GAME_FRIENDS) }),
        useSearchTerms: () => [g.intl.string(g.t["Uv/eTx"])],
        useValue: () => c.Zk.useSetting(),
        setValue: (e) => c.Zk.updateSetting(e),
        usePredicate: _i,
    }),
    _s = (0, o.Qx)(u.X.CONTENT_AND_SOCIAL_IN_GAME_DMS_SETTING, {
        useTitle: () => g.intl.string(g.t["ms+Tme"]),
        useSubtitle: () => g.intl.string(g.t["4NN4+/"]),
        useOptions: () => [
            { name: g.intl.string(g.t.JIFnN9), value: f.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL },
            { name: g.intl.string(g.t.rRdsk1), value: f.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME },
            { name: g.intl.string(g.t.AolKwN), value: f.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE },
        ],
        useValue: () => {
            let e = c.TA.useSetting();
            return e === f.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET ? f.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL : e;
        },
        setValue: (e) => c.TA.updateSetting(e),
        usePredicate: _i,
    }),
    _l = (0, o.zZ)(u.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_CATEGORY, {
        useSearchTerms: () => [g.intl.string(g.t.YpCiMt)],
        buildLayout: () => [_t, _n, _s],
    });
var _r = i(687123),
    _a = i(444802),
    _o = i(558001);
i(866945);
var _u = i(835002);
function _d() {
    let e = (0, _a.WX)();
    N.useEffect(() => {
        (0, _o.N)(_u.YA.AGE_CONFIRMATION_NOTICE, _u.YX.VIEWED);
    }, []);
    let t = N.useCallback(() => {
            window.open(ta.A.getArticleURL(e), "_blank"), (0, _o.N)(_u.YA.AGE_CONFIRMATION_NOTICE, _u.YX.LEARN_MORE);
        }, [e]),
        i = N.useCallback(() => {
            pn.A.showAgeVerificationGetStartedModal({ entryPoint: ps.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, _o.N)(_u.YA.AGE_CONFIRMATION_NOTICE, _u.YX.CONFIRM_AGE);
        }, []);
    return (0, p.jsx)(tr.p, {
        messageType: tr.Y.INFO,
        action: (0, p.jsx)(F.Q, {
            variant: "secondary",
            size: "sm",
            textVariant: "text-sm/medium",
            text: g.intl.string(g.t.FDSSia),
            onClick: i,
        }),
        children: g.intl.format(g.t.mFgsfg, { hook: (e, i) => (0, p.jsx)(uO.Anchor, { onClick: t, children: e }, i) }),
    });
}
function _c() {
    let e = (0, S8.aX)(_r.t.REACTIVE_CHECK),
        t = (0, S7.b8)();
    return N.useMemo(() => {
        if (e && !t) return { type: ef.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: _d };
    }, [e, t]);
}
var _g = i(308528),
    _m = i(171316);
function _A() {
    let e = (0, _m.uM)(),
        t = (0, Nx.vx)(),
        i = N.useCallback(() => {
            (0, sT.default)(),
                _g.A.openPrivateChannel({ recipientIds: t }),
                (0, _o.N)(_u.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, _u.YX.LEARN_MORE);
        }, [t]),
        n = N.useCallback(() => {
            (0, _o.N)(_u.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, _u.YX.VIEWED);
        }, []);
    return N.useMemo(() => {
        if (e)
            return {
                type: ef.lT.INLINE_NOTICE,
                noticeType: "info",
                trackView: n,
                useText: () =>
                    g.intl.format(Nf.default.i284fU, {
                        hook: (e, t) => (0, p.jsx)(uO.Anchor, { onClick: i, children: e }, t),
                        count: t.length,
                    }),
            };
    }, [i, e, t.length, n]);
}
var _h = i(323073),
    _E = i(264249),
    _T = i(406274);
let _x = (0, o.zD)(u.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_DM_SETTING, {
        useTitle: () => g.intl.string(g.t.XahVjj),
        useSubtitle: () => g.intl.string(g.t.R9fXyS),
        useValue: _E.hT,
        useDisabled: () => {
            let e = (0, _T.A)() ?? !0,
                t = (0, _h.sP)(),
                i = (0, S7.yM)();
            return (!t || !!i) && !e;
        },
        setValue: (e) => {
            (0, _h.p5)() && e
                ? pn.A.showAgeVerificationGetStartedModal({ entryPoint: ps.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS })
                : c.Qe.updateSetting(e);
        },
    }),
    _S = (0, o.zD)(u.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_IOS_SETTING, {
        useTitle: () => g.intl.string(g.t["L+yTsa"]),
        useSubtitle: () => g.intl.string(g.t.hiM8pU),
        useValue: _E.tI,
        useDisabled: () => {
            let e = (0, _T.A)() ?? !0,
                t = (0, _h.sP)(),
                i = (0, S7.yM)();
            return N.useMemo(() => (!t || !!i) && !e, [t, e, i]);
        },
        setValue: (e) => {
            (0, _h.p5)() && e
                ? pn.A.showAgeVerificationGetStartedModal({ entryPoint: ps.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS })
                : c.Kg.updateSetting(e);
        },
    });
i(667532);
var _p = i(390248),
    _N = i(632119),
    _f = i(945276),
    __ = i(562783),
    _C = i(533517);
function _I() {
    let e,
        t = (0, _f.A)() ?? !0,
        i = (0, _m.uM)(),
        n = (0, _m.uM)(),
        {
            explicitContentGuilds: s,
            explicitContentFriendDm: l,
            explicitContentNonFriendDm: r,
        } = ((e = (0, uy.cf)([o2.A], () => o2.A.settings.textAndImages?.explicitContentSettings ?? (0, _N.C$)())),
        {
            explicitContentGuilds: (0, _N.Ys)({ setting: e?.explicitContentGuilds }),
            explicitContentNonFriendDm: (0, _N.Ys)({ setting: e?.explicitContentNonFriendDm, isDm: !0 }),
            explicitContentFriendDm: (0, _N.Ys)({ setting: e?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
        }),
        a = (e) => {
            let t = Object.values(e);
            (0, _p.hK)() && t.includes(f.TO.SHOW)
                ? pn.A.showAgeVerificationGetStartedModal({ entryPoint: ps.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
                : (0, _N.Jz)(e);
        },
        o = [
            { value: f.TO.BLUR, label: g.intl.string(g.t.S49Uad) },
            { value: f.TO.BLOCK, label: g.intl.string(g.t["D/157Y"]) },
        ],
        u = [{ value: f.TO.BLUR, label: g.intl.string(g.t.S49Uad) }],
        d = { value: f.TO.SHOW, label: g.intl.string(g.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: n, tooltipText: i ? g.intl.string(Nf.default["6Af/cw"]) : void 0 };
    return (0, p.jsxs)(__.E, {
        description: g.intl.string(g.t.Wnojv1),
        children: [
            (0, p.jsx)(_C.A, {
                title: g.intl.string(g.t["+uI23H"]),
                value: l,
                onChange: (e) => a({ explicitContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, p.jsx)(_C.A, {
                title: g.intl.string(g.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ explicitContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, p.jsx)(_C.A, {
                title: g.intl.string(g.t["FP+a42"]),
                value: s,
                onChange: (e) => a({ explicitContentGuilds: e }),
                isDisabled: !t || n,
                tooltipText: i ? g.intl.string(Nf.default["6Af/cw"]) : void 0,
                options: u,
            }),
        ],
    });
}
function _b() {
    let e,
        t = (0, _f.A)() ?? !0,
        i = (0, _m.uM)(),
        n = (0, _m.uM)(),
        {
            goreContentGuilds: s,
            goreContentFriendDm: l,
            goreContentNonFriendDm: r,
        } = ((e = (0, uy.cf)([o2.A], () => o2.A.settings.textAndImages?.goreContentSettings ?? (0, _a.T4)())),
        {
            goreContentGuilds: (0, _a.gC)({ setting: e?.goreContentGuilds }),
            goreContentNonFriendDm: (0, _a.gC)({ setting: e?.goreContentNonFriendDm, isDm: !0 }),
            goreContentFriendDm: (0, _a.gC)({ setting: e?.goreContentFriendDm, isDm: !0, isFriend: !0 }),
        }),
        a = (e) => {
            let t = Object.values(e);
            (0, _p.hK)() && t.includes(f.TO.SHOW)
                ? pn.A.showAgeVerificationGetStartedModal({ entryPoint: ps.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
                : (0, _a.qY)(e);
        },
        o = [
            { value: f.TO.BLUR, label: g.intl.string(g.t.S49Uad) },
            { value: f.TO.BLOCK, label: g.intl.string(g.t["D/157Y"]) },
        ],
        u = [{ value: f.TO.BLUR, label: g.intl.string(g.t.S49Uad) }],
        d = { value: f.TO.SHOW, label: g.intl.string(g.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: n, tooltipText: i ? g.intl.string(Nf.default["6Af/cw"]) : void 0 };
    return (0, p.jsxs)(__.E, {
        description: g.intl.string(g.t.XgH9eh),
        children: [
            (0, p.jsx)(_C.A, {
                title: g.intl.string(g.t["+uI23H"]),
                value: l,
                onChange: (e) => a({ goreContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, p.jsx)(_C.A, {
                title: g.intl.string(g.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ goreContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, p.jsx)(_C.A, {
                title: g.intl.string(g.t["FP+a42"]),
                value: s,
                onChange: (e) => a({ goreContentGuilds: e }),
                isDisabled: !t || n,
                options: u,
                tooltipText: i ? g.intl.string(Nf.default["6Af/cw"]) : void 0,
            }),
        ],
    });
}
var _v = i(397620),
    _j = i(759049);
let _y = (0, o.E2)(u.X.CONTENT_AND_SOCIAL_CONTENT_FILTERS_SETTING, {
    Component: function () {
        let e = (0, _a.WX)(),
            t = N.useMemo(
                () => [
                    {
                        id: "explicit-media-redaction",
                        title: g.intl.string(g.t.GYpoAq),
                        component: _I,
                        orientation: "vertical",
                    },
                    {
                        id: "gore-media-redaction",
                        title: g.intl.string(g.t["16/3Bi"]),
                        component: _b,
                        orientation: "vertical",
                    },
                ],
                [],
            );
        return (0, p.jsxs)(f7.h, {
            children: [
                (0, p.jsx)(f7._, {
                    header: g.intl.string(g.t["Hj/But"]),
                    description: g.intl.format(g.t.dliU4j, { learnMoreLink: ta.A.getArticleURL(e) }),
                }),
                (0, p.jsx)(_v.A, { tabs: t, orientation: "vertical", tabsClassName: _j.v }),
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
var _O = i(639555),
    _R = i(617641),
    _L = i(546140),
    _D = i(406935),
    _P = i(594061);
let _G = (0, o.zD)(u.X.CONTENT_AND_SOCIAL_DM_SAFETY_ALERTS_SETTING, {
    useTitle: () => g.intl.string(g.t.qFsx5q),
    useSubtitle: () => g.intl.format(g.t.lunaRv, { learnMoreLink: ta.A.getArticleURL(q.MVz.SAFETY_ALERTS) }),
    useValue: _L.L,
    setValue: (e) =>
        _P.wc.updateAsync(
            "privacy",
            (t) => {
                t.inappropriateConversationWarnings = _D._t.create({ value: e });
            },
            _P.Sb.INFREQUENT_USER_ACTION,
        ),
    usePredicate: function () {
        let e = (0, _R.Lc)({ location: "DMSafetyAlertsSetting" }),
            t = (0, _O.Rv)({ location: "DMSafetyAlertsSetting" }),
            i = (0, _f.A)() ?? !0;
        return e && !i && !t;
    },
});
var _U = i(809505),
    _M = i(923457),
    _V = i(656402);
let _k = (0, o.Qx)(u.X.CONTENT_AND_SOCIAL_DM_SPAM_SETTING, {
        useTitle: () => g.intl.string(g.t.tiCXaH),
        useSubtitle: () => g.intl.format(g.t.RvjRRI, { appealLink: ta.A.getArticleURL(q.MVz.SAFE_DIRECT_MESSAGING) }),
        useValue: function () {
            let e = c.he.useSetting(),
                t = c.cj.useSetting(),
                i = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
                n = (0, S8.yv)(_M.p.SPAM_FILTERS);
            return e !== f.he.DEFAULT_UNSET
                ? e
                : i?.nsfwAllowed === !1 && n
                  ? f.he.FRIENDS_AND_NON_FRIENDS
                  : (_V.xY.get(t) ?? f.he.NON_FRIENDS);
        },
        setValue: (e) => c.he.updateSetting(e),
        useOptions: function () {
            return N.useMemo(() => (0, _U.YS)(), []);
        },
        useSearchTerms: () => [g.intl.string(g.t.JzaP4h), g.intl.string(g.t.H9XOl3), g.intl.string(g.t.k4W40P)],
    }),
    _w = (0, o.zZ)(u.X.CONTENT_AND_SOCIAL_CONTENT_CATEGORY, {
        useTitle: () => g.intl.string(g.t.xVRG4P),
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
                u = _A(),
                d =
                    ((e = (0, NS.Z)()),
                    (t = (0, _a.WX)()),
                    (i = N.useCallback(() => {
                        window.open(ta.A.getArticleURL(t), "_blank"),
                            (0, _o.N)(_u.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _u.YX.LEARN_MORE);
                    }, [t])),
                    (n = N.useCallback(() => {
                        (0, _o.N)(_u.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _u.YX.VIEWED);
                    }, [])),
                    N.useMemo(() => {
                        if (e)
                            return {
                                type: ef.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: n,
                                useText: () =>
                                    g.intl.format(g.t.EUo0yj, {
                                        hook: (e, t) => (0, p.jsx)(uO.Anchor, { onClick: i, children: e }, t),
                                    }),
                            };
                    }, [i, e, n])),
                c =
                    ((s = (0, S8.SJ)()),
                    (l = (0, S7.b8)()),
                    (r = s && !l),
                    (a = N.useCallback(() => {
                        pn.A.showAgeVerificationGetStartedModal({ entryPoint: ps.q1.CONTENT_AND_SOCIAL_NOTICE }),
                            (0, _o.N)(_u.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, _u.YX.LEARN_MORE);
                    }, [])),
                    (o = N.useCallback(() => {
                        (0, _o.N)(_u.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, _u.YX.VIEWED);
                    }, [])),
                    N.useMemo(() => {
                        if (r)
                            return {
                                type: ef.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: o,
                                useText: () =>
                                    g.intl.format(g.t.OX4ybh, {
                                        hook: (e, t) => (0, p.jsx)(uO.Anchor, { onClick: a, children: e }, t),
                                    }),
                            };
                    }, [a, r, o])),
                m = _c();
            return u ?? m ?? c ?? d;
        },
        buildLayout: () => [_y, _k, _G, _x, _S],
    }),
    _F = (0, o.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_EVERYONE_SETTING, {
        useTitle: () => g.intl.string(g.t["7x9dyE"]),
        useValue: () => {
            let e = c.FA.useSetting();
            return N.useMemo(() => (0, rN.Lx)(e), [e]).all;
        },
        setValue: (e) => {
            c.FA.updateSetting(e ? q.yKI : q.yKI & ~q.dzt.NO_RELATION);
        },
        useDisabled: () => (0, _m.uM)(),
    });
var _B = i(665260);
let _z = (0, o.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_FRIENDS_SETTING, {
        useTitle: () => g.intl.string(g.t.NfeuZ3),
        useValue: () => {
            let e = c.FA.useSetting(),
                t = N.useMemo(() => (0, rN.Lx)(e), [e]);
            return t.all || t.mutualFriends;
        },
        setValue: (e) => {
            let t = c.FA.getSetting();
            c.FA.updateSetting(e ? _B.UI(t, q.dzt.MUTUAL_FRIENDS) : _B.iE(t, q.dzt.MUTUAL_FRIENDS, q.dzt.NO_RELATION));
        },
        useDisabled: () => (0, _m.uM)(),
    }),
    _Y = (0, o.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_GUILDS_SETTING, {
        useTitle: () => g.intl.string(g.t.qsMfsH),
        useValue: () => {
            let e = c.FA.useSetting(),
                t = N.useMemo(() => (0, rN.Lx)(e), [e]);
            return t.all || t.mutualGuilds;
        },
        setValue: (e) => {
            let t = c.FA.getSetting();
            c.FA.updateSetting(e ? _B.UI(t, q.dzt.MUTUAL_GUILDS) : _B.iE(t, q.dzt.MUTUAL_GUILDS, q.dzt.NO_RELATION));
        },
        useDisabled: () => (0, _m.uM)(),
    }),
    _X = (0, o.zZ)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.MNaVwq),
        useInlineNotice: _A,
        buildLayout: () => [_F, _z, _Y],
    });
var _H = i(994500),
    _K = i(428678),
    _W = i(717398),
    _Z = i(730134),
    _q = i(741304);
function _Q(e) {
    let { listType: t, numberOfUsers: i } = e,
        n = "blocked" === t;
    return (0, p.jsxs)("div", {
        className: _q.wx,
        children: [
            (0, p.jsx)("div", { className: _q.zc, children: n ? (0, p.jsx)(_K.K, {}) : (0, p.jsx)(ig.G, {}) }),
            (0, p.jsxs)("div", {
                className: _q.Qq,
                children: [
                    (0, p.jsx)(V.E, {
                        variant: "text-md/semibold",
                        color: "interactive-text-active",
                        children: g.intl.string(n ? g.t.PFOUKW : g.t["93ZDWE"]),
                    }),
                    (0, p.jsx)(V.E, {
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
function _J(e) {
    let { userId: t, last: i } = e,
        n = (0, O.bG)([_H.A], () => _H.A.isBlocked(t)),
        s = (0, O.bG)([t3.default], () => t3.default.getUser(t)),
        [l, r] = N.useState(!1),
        a = N.useCallback(() => {
            r(!0),
                n
                    ? _W.A.unblockUser(t).catch(() => {
                          r(!1);
                      })
                    : _W.A.unignoreUser(t, eM.A.USER_SETTINGS).catch(() => {
                          r(!1);
                      });
        }, [n, t]);
    return null == s
        ? null
        : (0, p.jsxs)("div", {
              className: ew()(_q.nM, { [_q.fW]: i }),
              children: [
                  (0, p.jsxs)("div", {
                      className: _q.eF,
                      children: [
                          (0, p.jsx)(_Z.A, { user: s, size: iK._3.SIZE_40 }),
                          (0, p.jsxs)("div", {
                              className: _q.Qq,
                              children: [
                                  (0, p.jsx)(V.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: s.globalName ?? s.username,
                                  }),
                                  (0, p.jsx)(V.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: null != s.globalName ? s.username : null,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, p.jsx)(eh.$, {
                      variant: "secondary",
                      text: g.intl.string(n ? g.t.XyHpKH : g.t["8wXU9B"]),
                      onClick: a,
                      loading: l,
                  }),
              ],
          });
}
function _$(e) {
    let { userIds: t, listType: i } = e,
        [n, s] = N.useState(5);
    return (0, p.jsx)(f7.h, {
        children: (0, p.jsxs)("div", {
            className: _q.Nr,
            children: [
                (0, p.jsx)(_Q, { listType: i, numberOfUsers: t.length }),
                (0, p.jsx)("div", {
                    className: _q.jS,
                    children: t.slice(0, n).map((e, i) => (0, p.jsx)(_J, { userId: e, last: i === t.length - 1 }, e)),
                }),
                n < t.length
                    ? (0, p.jsx)("div", {
                          className: _q.vM,
                          children: (0, p.jsx)(M.D, {
                              onClick: () => {
                                  s((e) => e + 5);
                              },
                              className: _q.Qf,
                              children: (0, p.jsx)(V.E, {
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
let _0 = (0, o.E2)(u.X.CONTENT_AND_SOCIAL_BLOCKED_USERS, {
        useSearchTerms: () => [g.intl.string(g.t.PFOUKW)],
        usePredicate: () => (0, O.bG)([_H.A], () => _H.A.getBlockedIDs().length > 0),
        Component: function () {
            let e = (0, O.yK)([_H.A], () => _H.A.getBlockedIDs());
            return (0, p.jsx)(_$, { userIds: e, listType: "blocked" });
        },
    }),
    _1 = (0, o.E2)(u.X.CONTENT_AND_SOCIAL_IGNORED_USERS, {
        useSearchTerms: () => [g.intl.string(g.t["93ZDWE"])],
        usePredicate: () => (0, O.bG)([_H.A], () => _H.A.getIgnoredIDs().length > 0),
        Component: function () {
            let e = (0, O.yK)([_H.A], () => _H.A.getIgnoredIDs());
            return (0, p.jsx)(_$, { userIds: e, listType: "ignored" });
        },
    }),
    _2 = (0, o.zZ)(u.X.CONTENT_AND_SOCIAL_RESTRICTED_USERS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.LVwR56),
        useSubtitle: () =>
            g.intl.format(g.t["0aNQo9"], { helpArticle: ta.A.getArticleURL(q.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE) }),
        buildLayout: () => [_0, _1],
        usePredicate: () => {
            let { hasBlockedUsers: e, hasIgnoredUsers: t } = (0, O.cf)([_H.A], () => ({
                hasBlockedUsers: _H.A.getBlockedIDs().length > 0,
                hasIgnoredUsers: _H.A.getIgnoredIDs().length > 0,
            }));
            return t || e;
        },
    });
var _3 = i(612025),
    _6 = i(112469),
    _4 = i(111159),
    _7 = i(152056),
    _8 = i(321880);
let _5 = { label: () => g.intl.string(g.t["32u1Dx"]), value: _3.YG };
var _9 = i(542457);
let Ce = () => (0, _6.Tx)() !== _3.YG;
function Ct() {
    return g.intl.string(g.t["T+nevN"]);
}
let Ci = (0, o.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_JOIN_SETTING, {
        useTitle: Ct,
        useSubtitle: () =>
            g.intl.format(g.t.jXKQCu, { helpdeskArticle: ta.A.getArticleURL(q.MVz.ACTIVITY_STATUS_SETTINGS) }),
        useValue: () => {
            let e = (0, _6.Tx)();
            return !c.pE.useSetting().includes(e);
        },
        setValue: (e) => {
            let t = _3.xk.getState().selectedGuildId,
                i = (0, rN.CN)();
            e ? i.delete(t) : i.add(t),
                c.pE.updateSetting([...i]),
                Y.default.track(q.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                    action: _9.m.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
                    ingress: nv.bf.USER_SETTINGS_PRIVACY_SAFETY,
                    guild_id: t,
                });
        },
        usePredicate: Ce,
    }),
    Cn = () => (0, _6.Tx)() !== _3.YG;
function Cs() {
    return g.intl.string(m.default.WhdCGP);
}
let Cl = (0, o.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_SHARE_SETTING, {
    useTitle: Cs,
    useSubtitle: () => g.intl.string(m.default.UQ9RHJ),
    useValue: () => {
        let e = (0, _6.Tx)();
        return !c.JG.useSetting().includes(e);
    },
    setValue: (e) => {
        let t = _3.xk.getState().selectedGuildId,
            i = (0, rN.Kk)();
        e ? i.delete(t) : i.add(t),
            c.JG.updateSetting([...i]),
            Y.default.track(q.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                action: _9.m.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
                ingress: nv.bf.USER_SETTINGS_PRIVACY_SAFETY,
                guild_id: t,
            });
    },
    usePredicate: Cn,
});
var Cr = i(762183),
    Ca = i(445176),
    Co = i(137675);
let Cu = () => ((0, Ca.e)() ? g.intl.string(g.t.PMsfcH) : g.intl.string(g.t.RAQUSN)),
    Cd = (e, t) => {
        Y.default.track(q.HAw.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t,
        });
    },
    Cc = (0, o.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_DMS_SETTING, {
        useTitle: Cu,
        useSubtitle: () => {
            let e = (0, _6.Tx)(),
                t = (0, _6.q9)(),
                i = (0, Ca.e)();
            return e === _3.YG
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
            let e = (0, _6.Tx)(),
                t = c.$s.useSetting().includes(e),
                i = (0, Cr.K)();
            return e === _3.YG ? !i : !t;
        },
        useDisabled: () => {
            let e = (0, _m.uM)();
            return (0, _6.Tx)() === _3.YG && e;
        },
        setValue: (e) => {
            let t = _3.xk.getState().selectedGuildId;
            if (t === _3.YG) {
                var i;
                (i = !e),
                    (0, Co.O)({
                        header: g.intl.string(g.t["uUr+GR"]),
                        body: g.intl.string(g.t.hjGJBp),
                        confirmText: g.intl.string(g.t.gm1Vej),
                        cancelText: g.intl.string(g.t.p89ACt),
                        confirmButtonColor: ay.$n.Colors.BRAND,
                        onConfirm: () => {
                            c.n6.updateSetting(i), Cd(i, !1);
                        },
                        onCancel: () => {
                            c.n6.updateSetting(i), c.$s.updateSetting(i ? H.A.getGuildIds() : []), Cd(i, !0);
                        },
                    });
            } else {
                let i = (0, rN.Tb)();
                e ? i.delete(t) : i.add(t),
                    c.$s.updateSetting(Array.from(i)),
                    Y.default.track(q.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: _9.m.DIRECT_MESSAGES_TOGGLE,
                        ingress: nv.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    });
            }
        },
    });
var Cg = i(152076);
let Cm = (e, t) => {
    Y.default.track(q.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
        default_guilds_restricted: e,
        applied_to_existing_guilds: t,
    });
};
function CA() {
    return g.intl.string(g.t["3o2ojh"]);
}
let Ch = (0, o.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: CA,
        useSubtitle: () =>
            (0, _6.q9)()
                ? g.intl.format(g.t.WpnWLc, { helpdeskArticle: ta.A.getArticleURL(q.MVz.MESSAGE_REQUESTS) })
                : g.intl.format(g.t.wkm9a3, { helpdeskArticle: ta.A.getArticleURL(q.MVz.MESSAGE_REQUESTS) }),
        useValue: () => {
            let e = (0, _6.Tx)(),
                t = (0, Cr.K)(),
                i = c.$s.useSetting().includes(e),
                n = c.YX.useSetting(),
                s = c.Zr.useSetting().includes(e);
            return e === _3.YG ? !t && !n : !i && !s;
        },
        useDisabled: () => {
            let e = (0, _6.Tx)(),
                t = (0, _m.uM)(),
                i = (0, Cr.K)(),
                n = c.$s.useSetting().includes(e);
            return e === _3.YG ? i || t : n;
        },
        setValue: (e) => {
            let t = _3.xk.getState().selectedGuildId;
            if (!e && (0, Cg.w)())
                return void pn.A.showAgeVerificationGetStartedModal({ entryPoint: ps.q1.MESSAGE_REQUESTS_SETTINGS });
            if (t === _3.YG) {
                var i;
                (i = !e),
                    (0, Co.O)({
                        header: g.intl.string(g.t.yAfu1p),
                        body: g.intl.string(g.t.Ry2z74),
                        confirmText: g.intl.string(g.t.gm1Vej),
                        cancelText: g.intl.string(g.t.p89ACt),
                        confirmButtonColor: ay.$n.Colors.BRAND,
                        onConfirm: () => {
                            c.YX.updateSetting(i), Cm(i, !1);
                        },
                        onCancel: () => {
                            c.YX.updateSetting(i), c.Zr.updateSetting(i ? H.A.getGuildIds() : []), Cm(i, !0);
                        },
                    });
            } else {
                let i = (0, rN.xo)();
                e ? i.delete(t) : i.add(t),
                    c.Zr.updateSetting(Array.from(i)),
                    Y.default.track(q.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: _9.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: nv.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    });
            }
        },
    }),
    CE = (0, o.E2)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_GUILD_SELECTOR, {
        useSearchTerms: function () {
            let e = [Cu(), CA()],
                t = Cs();
            Cn() && e.push(t);
            let i = Ct();
            return Ce() && e.push(i), e;
        },
        Component: function () {
            let { selectedGuildId: e, setSelectedGuildId: t } = (0, _3.xk)(),
                i = (0, O.bG)([K.Ay], () => K.Ay.getFlattenedGuildIds()),
                n = (0, O.bG)([H.A], () => H.A.getGuilds()),
                s = i[0];
            N.useEffect(
                () =>
                    _7.A.subscribe(
                        (e) => {
                            let { query: t } = e;
                            return t.trim();
                        },
                        (e, i) => {
                            let n = _3.xk.getState().selectedGuildId;
                            "" === i && "" !== e && n === _3.YG && null != s
                                ? t(s)
                                : "" === e && n !== _3.YG && t(_3.YG);
                        },
                        { equalityFn: (e, t) => e === t },
                    ),
                [s, t],
            );
            let l = N.useMemo(() => {
                let e = [];
                return (
                    e.push({
                        ..._5,
                        id: _5.value,
                        label: _5.label(),
                        leading: (0, p.jsx)("div", {
                            className: _8.KP,
                            children: (0, p.jsx)(_4.p, {
                                size: "sm",
                                color: "white",
                                "aria-hidden": !0,
                                className: _8.cl,
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
                                leading: (0, p.jsx)(gc.Ay, {
                                    className: _8.cl,
                                    guild: i,
                                    size: gc.Ay.Sizes.SMALLER,
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
                options: l,
            });
        },
    }),
    CT = (0, o.zZ)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.eYaT7L),
        useInlineNotice: function () {
            let e = _A(),
                t = _c();
            if ((0, _6.Tx)() === _3.YG) return e ?? t;
        },
        buildLayout: () => [CE, Cc, Ch, Cl, Ci],
    }),
    Cx = (0, o.dT)(u.X.CONTENT_AND_SOCIAL_MAIN_TAB, {
        getTitle: () => g.intl.string(g.t["/7xJCF"]),
        buildLayout: () => [_w, CT, _X, _2],
    }),
    CS = (0, o.dT)(u.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_TAB, {
        initialize: () => {
            NM.A.fetch();
        },
        getTitle: () => g.intl.string(g.t.YpCiMt),
        buildLayout: () => [_l],
    }),
    Cp = (0, o.t_)(u.X.CONTENT_AND_SOCIAL_PANEL, {
        useTitle: () => g.intl.string(g.t["+o1pDZ"]),
        buildLayout: () => [Cx, CS],
    }),
    CN = (0, o.i4)(u.X.CONTENT_AND_SOCIAL_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["+o1pDZ"]),
        icon: cM.i,
        buildLayout: () => [Cp],
    });
var Cf = i(254138);
function C_() {
    return (
        n6.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_START" }),
        n3.Bo.get({ url: q.Rsh.USER_HARVEST, oldFormErrors: !0, rejectWithError: !1 })
            .then((e) => {
                n6.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body });
            })
            .catch((e) => {
                n6.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_FAILURE", error: e });
            })
    );
}
function CC(e) {
    return (0, EC.$I)(e).then(
        (e) => (
            null != e && null != e.body && n6.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body }), e
        ),
    );
}
var CI = i(157559),
    Cb = i(331887);
function Cv() {
    let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
        t = (0, O.bG)([Cb.A], () => Cb.A.harvestType),
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
function Cj(e) {
    let { onConfirm: t, ...n } = e;
    (0, _.openModalLazy)(async () => {
        let { default: e } = await i.e("92063").then(i.bind(i, 970018));
        return (i) => (0, p.jsx)(e, { modalProps: i, onConfirm: t });
    }, n);
}
var Cy = i(837245);
let CO = (0, o.E2)(u.X.DATA_HARVEST_REQUEST_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t.dmBSKo)],
        Component: function () {
            let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
                { currentHarvestType: t, awaitingInitialRequest: i } = (0, O.cf)([Cb.A], () => ({
                    currentHarvestType: Cb.A.harvestType,
                    awaitingInitialRequest: Cb.A.requestingHarvest,
                })),
                [n, s] = N.useState(!1);
            if (null == e) return null;
            let l =
                    !!(!e.verified || e.isStaff()) ||
                    (null != t && 2592e6 > Date.now() - new Date(t.created_at).getTime()) ||
                    i,
                r = null != t && rj()().diff(rj()(t.created_at), "days") < q.n83,
                a = l && r,
                o = e.isStaff(),
                u = !e.verified;
            return (0, p.jsxs)(f7.h, {
                children: [
                    (0, p.jsx)(f7._, {
                        header: g.intl.string(g.t.XAHCgJ),
                        description: g.intl.format(g.t.P3kNfr, {
                            helpdeskArticle: ta.A.getArticleURL(q.MVz.GDPR_REQUEST_DATA),
                        }),
                    }),
                    a
                        ? (0, p.jsx)(er.Z, {
                              className: Cy.N,
                              children: (0, p.jsx)(V.E, {
                                  variant: "text-md/normal",
                                  children: g.intl.format(g.t.RNDlV9, {
                                      date: rj()(t.created_at).add(q.n83, "days").format("MMMM Do YYYY"),
                                  }),
                              }),
                          })
                        : o
                          ? (0, p.jsx)(er.Z, {
                                className: Cy.N,
                                children: (0, p.jsx)(V.E, {
                                    variant: "text-md/normal",
                                    children: g.intl.string(g.t.ZPQLH2),
                                }),
                            })
                          : (0, p.jsxs)(p.Fragment, {
                                children: [
                                    u
                                        ? (0, p.jsx)(er.Z, {
                                              className: Cy.N,
                                              children: (0, p.jsx)(V.E, {
                                                  variant: "text-md/normal",
                                                  children: g.intl.string(g.t.c1f88z),
                                              }),
                                          })
                                        : null,
                                    (0, p.jsx)("div", {
                                        className: Cy.x,
                                        children: (0, p.jsx)(eh.$, {
                                            variant: "primary",
                                            text: g.intl.string(g.t.dmBSKo),
                                            disabled: l,
                                            onClick: () => {
                                                Cj({
                                                    onConfirm: (e) => {
                                                        s(!0),
                                                            CC(e)
                                                                .then(
                                                                    (e) => {
                                                                        null != e && null != e.body
                                                                            ? CI.A.show({
                                                                                  title: g.intl.string(g.t.i2iul5),
                                                                                  body: g.intl.string(g.t["6Nmv4i"]),
                                                                              })
                                                                            : CI.A.show({
                                                                                  title: g.intl.string(g.t.OjbtDm),
                                                                                  body: g.intl.string(g.t["0F5Jyt"]),
                                                                              });
                                                                    },
                                                                    (e) => {
                                                                        let t =
                                                                            e?.message ||
                                                                            e?.body?.message ||
                                                                            g.intl.string(g.t["0F5Jyt"]);
                                                                        CI.A.show({
                                                                            title: g.intl.string(g.t.OjbtDm),
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
    CR = (0, o.zZ)(u.X.DATA_REQUEST_CATEGORY, {
        useTitle: () => g.intl.string(g.t.VjDjpb),
        initialize: () => {
            C_();
        },
        buildLayout: () => [CO],
    });
var CL = i(290595),
    CD = i(153488);
let CP = (0, o.zD)(u.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING, {
        useTitle: () => g.intl.string(g.t.AGDDkH),
        useSubtitle: () => g.intl.string(g.t["wW9/zQ"]),
        useValue: () => c.Q$.useSetting(),
        setValue: (e) => NK.eQ({ allowVoiceRecording: e }),
    }),
    CG = (0, o.Tf)(u.X.DATA_HARVEST_REQUEST_SETTING, {
        useTitle: () => g.intl.string(g.t.qfFFos),
        useSubtitle: function () {
            let e = Cv();
            if (e.allowed) return g.intl.format(g.t.NRI6vt, { article: ta.A.getArticleURL(q.MVz.GDPR_REQUEST_DATA) });
            if ("staff" === e.reason) return g.intl.string(g.t.hIbRso);
            if ("not_verified" === e.reason)
                return g.intl.format(g.t.rBqJDq, {
                    settingsLink: (e, t) =>
                        (0, p.jsx)(
                            M.D,
                            {
                                tag: "a",
                                onClick: () => (0, ej.openUserSettings)(u.X.ACCOUNT_INFO_EMAIL_SETTING),
                                children: e,
                            },
                            t,
                        ),
                });
            if ("rate_limited" === e.reason) {
                let t = rj()(e.nextAllowed).format("MMMM Do YYYY");
                return g.intl.format(g.t["VLMG1+"], { date: t });
            }
        },
        initialize: () => {
            C_();
        },
        useDisabled: () => !Cv().allowed,
        useLoading: () => (0, O.bG)([Cb.A], () => Cb.A.requestingHarvest),
        useVariant: () => "secondary",
        useLabel: () => g.intl.string(g.t.dmBSKo),
        onClick: function () {
            return new Promise((e) => {
                let t = !0;
                Cj({
                    onConfirm: (i) => {
                        (t = !1),
                            CC(i)
                                .then(
                                    (e) => {
                                        null != e && null != e.body
                                            ? CI.A.show({
                                                  title: g.intl.string(g.t.i2iul5),
                                                  body: g.intl.string(g.t["6Nmv4i"]),
                                              })
                                            : CI.A.show({
                                                  title: g.intl.string(g.t.OjbtDm),
                                                  body: g.intl.string(g.t["0F5Jyt"]),
                                              });
                                    },
                                    (e) => {
                                        let t = e?.message || e?.body?.message || g.intl.string(g.t["0F5Jyt"]);
                                        CI.A.show({ title: g.intl.string(g.t.OjbtDm), body: t });
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
    CU = (0, o.v_)(u.X.DATA_USAGE_DISCLAIMER_SETTING, {
        useTitle: () => g.intl.string(g.t.D60Gfj),
        useSubtitle: () =>
            g.intl.format(g.t.R5N31P, {
                onClick: () =>
                    (0, ej.openUserSettings)(
                        (0, iz.pC)("DataUsageDisclaimer") ? u.X.ACCOUNT_REMOVAL_CATEGORY : u.X.ACCOUNT_REMOVAL_SETTING,
                    ),
            }),
    }),
    CM = (0, o.zD)(u.X.DATA_USAGE_PERSONALIZATION_SETTING, {
        useTitle: () => g.intl.string(g.t.MNKzyg),
        useSubtitle: () =>
            g.intl.format(g.t["eQL/Mr"], { helpdeskArticle: ta.A.getArticleURL(q.MVz.DATA_USED_FOR_RECOMMENDED) }),
        useValue: function () {
            return (0, O.bG)([CD.A], () => CD.A.hasConsented(q.YAq.PERSONALIZATION));
        },
        setValue: function (e) {
            e
                ? (0, CL.U)([q.YAq.PERSONALIZATION], []).catch(Co.i)
                : (0, Co.O)({
                      header: g.intl.string(g.t["9SNpzv"]),
                      confirmText: g.intl.string(g.t["9g5UGw"]),
                      cancelText: g.intl.string(g.t["+ZLPw9"]),
                      onConfirm: () => {
                          (0, CL.U)([], [q.YAq.PERSONALIZATION]).catch(Co.i);
                      },
                      body: g.intl.string(g.t.gJvDDh),
                  });
        },
        useDisabled: _m.uM,
    }),
    CV = (0, o.zD)(u.X.DATA_USAGE_QUESTS_3P_SETTING, {
        useTitle: () => g.intl.string(g.t.CyLYKZ),
        useSubtitle: () =>
            g.intl.format(g.t["2QFDU/"], { helpdeskArticle: ta.A.getArticleURL(q.MVz.QUESTS_PRIVACY_CONTROLS) }),
        useValue: function () {
            return !c.vf.useSetting();
        },
        setValue: function (e) {
            c.vf.updateSetting(!e);
        },
        useDisabled: function () {
            let e = c.H1.useSetting(),
                t = (0, _m.uM)();
            return e || t;
        },
        useSearchTerms: () => [g.intl.string(g.t.CyLYKZ)],
    }),
    Ck = (0, o.zD)(u.X.DATA_USAGE_QUESTS_SETTING, {
        useTitle: () => g.intl.string(g.t.sJYh5t),
        useSubtitle: () =>
            g.intl.format(g.t.cf9mvV, { helpdeskArticle: ta.A.getArticleURL(q.MVz.QUESTS_PRIVACY_CONTROLS) }),
        useValue: function () {
            return !c.H1.useSetting();
        },
        setValue: function (e) {
            c.H1.updateSetting(!e);
        },
        useSearchTerms: () => [g.intl.string(g.t.VkS7Yd)],
        useDisabled: _m.uM,
    }),
    Cw = (0, o.AK)(u.X.DATA_USAGE_ACTIVITY_PRIVACY_NAVIGATOR, {
        destinationKey: u.X.REGISTERED_GAMES_PANEL,
        useSubtitle: function () {
            let { gameHistory: e } = i_(),
                t = e
                    .values()
                    .filter((e) => null != e.id && null != e.name)
                    .map((e) => e.name)
                    .toArray();
            return g.intl.format(g.t.GaTAYM, { count: e.length, nameCount: t.length, game1: t[0], game2: t[1] });
        },
        useTrailingDecoration: () => ({ type: ef.wF.STACKED_ICONS, useIcons: CB }),
        usePredicate: () =>
            (0, O.bG)([eQ.Ay], () => eQ.Ay.getGamesSeen(!1).some((e) => !(0, tN.n1)(e))) && (0, se.xl)(),
    }),
    CF = (0, o.gN)(u.X.DATA_USAGE_RELATED_SETTINGS, { buildLayout: () => [Cw] });
function CB() {
    let { gameHistory: e } = i_(),
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
        Am.Ay.fetchApplications([t, i].filter(t6.Vq));
    }, [t, i]);
    let [n, s] = (0, O.yK)([eW.A], () => [t, i].map(eW.A.getApplication), [t, i]);
    return null == t
        ? null
        : {
              frontIcon: { icon: (0, p.jsx)(e8.A, { game: n, size: e8.M.MEDIUM_LARGE }), shape: ef.NF.ROUNDED },
              backIcon:
                  null != i ? { icon: (0, p.jsx)(e8.A, { game: s, size: e8.M.MEDIUM }), shape: ef.NF.ROUNDED } : null,
          };
}
let Cz = (0, o.zD)(u.X.DATA_USAGE_STATISTICS_SETTING, {
        useTitle: () => g.intl.string(g.t.XuADY2),
        useSubtitle: () =>
            g.intl.format(g.t["igTSG/"], { helpdeskArticle: ta.A.getArticleURL(q.MVz.DATA_PRIVACY_CONTROLS) }),
        useValue: function () {
            return (0, O.bG)([CD.A], () => CD.A.hasConsented(q.YAq.USAGE_STATISTICS));
        },
        setValue: function (e) {
            e
                ? (0, CL.U)([q.YAq.USAGE_STATISTICS], []).catch(Co.i)
                : (0, Co.O)({
                      header: g.intl.string(g.t.OdPCbN),
                      body: g.intl.string(g.t.MGWabA),
                      confirmText: g.intl.string(g.t["D3+rU4"]),
                      cancelText: g.intl.string(g.t.kYpG0u),
                      onConfirm: () => (0, CL.U)([], [q.YAq.USAGE_STATISTICS]).catch(Co.i),
                  });
        },
        useSearchTerms: () => [g.intl.string(g.t.XuADY2)],
        useDisabled: _m.uM,
    }),
    CY = (0, o.zZ)(u.X.DATA_USAGE_CATEGORY, {
        useTitle: () => ((0, iz.ri)("DataUsageCategory") ? g.intl.string(g.t.QDAriI) : g.intl.string(g.t.bvw42E)),
        useInlineNotice: _A,
        initialize: () => {
            CD.A.fetchedConsents || (0, CL.Q)();
        },
        buildLayout: () =>
            (0, iz.SB)("DataUsageCategory") ? [CU, Cz, CM, Ck, CV, CP, CG, CF] : [Cz, Ck, CV, CM, CP, CU],
    });
function CX() {
    let e = c.JG.useSetting();
    return (0, O.bG)([K.Ay, H.A], () => {
        let t = new Set(e);
        return K.Ay.getFlattenedGuildIds().filter((e) => null != H.A.getGuild(e) && !t.has(e));
    }, [e]);
}
let CH = {
        type: ef.wF.STACKED_ICONS,
        useIcons: function () {
            let e = CX(),
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
                        frontIcon: { icon: (0, p.jsx)(X.$, { guild: t[0], size: 48 }), shape: ef.NF.SQUIRCLE },
                        backIcon: { icon: (0, p.jsx)(X.$, { guild: t[1], size: 48 }), shape: ef.NF.SQUIRCLE },
                    }
                  : { frontIcon: { icon: (0, p.jsx)(X.$, { guild: t[0], size: 48 }), shape: ef.NF.SQUIRCLE } };
        },
    },
    CK = (0, o.AK)(u.X.PROFILE_PRIVACY_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: function () {
            let e = CX();
            if (0 === e.length) return g.intl.format(g.t.QJIJ5p, {});
            let t = H.A.getGuild(e[0]),
                i = t?.name ?? "",
                n = e.length - 1;
            return 0 === n
                ? g.intl.format(g.t["T+8J4A"], { guildName: i })
                : g.intl.format(g.t["3JyODQ"], { guildName: i, count: n });
        },
        useTrailingDecoration: function () {
            return CH;
        },
        destinationKey: u.X.ACTIVITY_PRIVACY_PANEL,
    }),
    CW = (0, o.gN)(u.X.PROFILE_PRIVACY_RELATED_SETTINGS, { buildLayout: () => [CK] }),
    CZ = (0, o.Qx)(u.X.PROFILE_PRIVACY_SETTING, {
        useTitle: () => g.intl.string(g.t.Qnf32C),
        useOptions: () => [
            { name: g.intl.string(g.t.Boxc8R), desc: g.intl.string(g.t["nLj+nc"]), value: f.KP.FRIENDS_AND_ALL_GUILDS },
            { name: g.intl.string(g.t.YOIKBt), desc: g.intl.string(g.t.y0JZ4s), value: f.KP.FRIENDS_AND_SMALL_GUILDS },
            { name: g.intl.string(g.t.u0nlJv), desc: g.intl.string(g.t["4jnKHu"]), value: f.KP.FRIENDS_ONLY },
        ],
        useValue: c.KP.useSetting,
        setValue: function (e) {
            let t = c.KP.getSetting();
            if ((c.KP.updateSetting(e), !(0, T.W1)("ProfilePrivacySetting"))) return;
            let n = (0, C.gS)(t, e);
            null != n &&
                (0, _.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        i.e("92164"),
                        i.e("67683"),
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
    Cq = (0, o.zZ)(u.X.PROFILE_PRIVACY_CATEGORY, {
        usePredicate: () => (0, T.lX)("ProfilePrivacyCategory"),
        useTitle: () => g.intl.string(g.t.ul884f),
        useSubtitle: () => g.intl.string(g.t.J0SFL2),
        buildLayout: () => [CZ, CW],
    });
var CQ = i(814278),
    CJ = i(936388),
    C$ = i(714763);
let C0 = (0, o.zD)(u.X.PERSISTENT_VERIFICATION_CODES_SETTING, {
    useTitle: () => g.intl.string(g.t["opi/XK"]),
    useSubtitle: () => g.intl.format(g.t["/T+ZlP"], { helpArticle: (0, CQ.Lu)() }),
    useValue: function () {
        return (0, O.bG)([C$.A], () => C$.A.getPersistentCodesEnabled());
    },
    setValue: function (e) {
        CJ.A.updatePersistentCodesEnabled(e);
    },
});
var C1 = i(787392);
function C2() {
    return (0, O.yK)([C1.A], () => C1.A.getUserIds());
}
var C3 = i(803306),
    C6 = i(966327),
    C4 = i(882129);
function C7(e) {
    let { userId: t, count: i } = e,
        { analyticsLocations: n } = (0, nU.Ay)(),
        s = (0, O.bG)([t3.default], () => t3.default.getUser(t)),
        l = TO.Ay.getFormattedName(s),
        r = N.useCallback(() => {
            (0, CQ.kj)(t);
        }, [t]),
        a = N.useCallback(() => (0, Ey.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: n }), [t, n]);
    return (
        N.useEffect(() => {
            (0, C3.wz)(t);
        }, [t]),
        (0, p.jsxs)("div", {
            className: C4.uW,
            children: [
                null != s && (0, p.jsx)(C6.A, { className: C4.my, user: s, size: iK._3.SIZE_40 }),
                (0, p.jsxs)("div", {
                    className: C4.Qq,
                    children: [
                        (0, p.jsx)(M.D, {
                            className: C4.Xh,
                            onClick: a,
                            children: (0, p.jsx)(V.E, {
                                variant: "text-md/semibold",
                                color: "interactive-text-active",
                                children: l,
                            }),
                        }),
                        (0, p.jsx)(V.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            children: g.intl.format(g.t["/MBjYF"], { count: i }),
                        }),
                    ],
                }),
                (0, p.jsx)(M.D, { onClick: r, className: C4.Qz, children: (0, p.jsx)(lp.u, { size: "xs" }) }),
            ],
        })
    );
}
function C8(e) {
    let { className: t, userId: i, verification: n, index: s } = e,
        l = (0, CQ.tC)(n.timestamp),
        r = N.useCallback(() => {
            (0, CQ.W0)(i, n.verifiedKey);
        }, [n.verifiedKey, i]);
    return (0, p.jsxs)("div", {
        className: t,
        children: [
            (0, p.jsxs)("div", {
                className: C4.Qq,
                children: [
                    (0, p.jsx)(V.E, {
                        variant: "text-sm/semibold",
                        color: "interactive-text-active",
                        children: g.intl.format(g.t.N4qBBO, { index: s + 1 }),
                    }),
                    (0, p.jsx)(V.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                ],
            }),
            (0, p.jsx)(M.D, {
                className: C4.Kk,
                onClick: r,
                children: (0, p.jsx)(cq.P, { size: "md", color: w.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function C5(e) {
    let { userId: t } = e,
        i = (0, O.yK)([C1.A], () =>
            eR()(C1.A.getUserVerifiedKeys(t))
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
            (0, p.jsx)(C7, { userId: t, count: i.length }),
            i.map((e, n) =>
                (0, p.jsxs)(
                    N.Fragment,
                    {
                        children: [
                            (0, p.jsx)(C8, { className: C4.nM, userId: t, index: n, verification: e }),
                            n !== i.length - 1 && (0, p.jsx)("div", { className: C4.yF }),
                        ],
                    },
                    `${n}-${e.timestamp}`,
                ),
            ),
        ],
    });
}
var C9 = i(691263);
let Ie = (0, o.E2)(u.X.USERS_VERIFIED_KEYS_LIST_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t["5b3FNI"])],
        usePredicate: function () {
            let e = C2();
            return null != e && e.length > 0;
        },
        Component: function () {
            let e = C2();
            return (0, p.jsxs)(f7.h, {
                children: [
                    (0, p.jsx)(f7._, {
                        header: g.intl.string(g.t["5b3FNI"]),
                        description: g.intl.format(g.t.jrTSWU, { helpArticle: (0, CQ.dc)() }),
                    }),
                    e.map((e) => (0, p.jsx)("div", { className: C9.A, children: (0, p.jsx)(C5, { userId: e }) }, e)),
                ],
            });
        },
    }),
    It = (0, o.zZ)(u.X.VOICE_SECURITY_CATEGORY, {
        useTitle: () => ((0, iz.ri)("VoiceSecurityCategory") ? g.intl.string(g.t.bTwjaz) : g.intl.string(g.t.xVk85F)),
        useInlineNotice: function () {
            let e = (0, iz.ri)("VoiceSecurityCategory");
            return N.useMemo(
                () =>
                    e
                        ? null
                        : {
                              type: ef.lT.INLINE_NOTICE,
                              noticeType: "info",
                              useText: () => g.intl.format(g.t["/6sFWa"], { helpArticle: (0, CQ.aW)() }),
                          },
                [e],
            );
        },
        usePredicate: () => (0, ev.isDesktop)(),
        buildLayout: () => [C0, Ie],
    }),
    Ii = (0, o.t_)(u.X.DATA_AND_PRIVACY_PANEL, {
        useTitle: () => g.intl.string(g.t.OAuOHD),
        buildLayout: () => ((0, iz.SB)("DataAndPrivacyPanel") ? [CY, Cq, It] : [CY, Cq, CR, It]),
    }),
    In = (0, o.i4)(u.X.DATA_AND_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.OAuOHD),
        icon: Cf.m,
        buildLayout: () => [Ii],
    });
var Is = i(782603);
let Il = (0, o.Hn)(u.X.MOBILE_NOTIFICATION_DELAY, {
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
    Ir = (0, o.zD)(u.X.TEXT_TO_SPEECH_COMMAND, {
        useTitle: () => g.intl.string(g.t["btbS+Z"]),
        useSubtitle: () =>
            g.intl.format(g.t.Q5crhR, { onClick: () => (0, ej.openUserSettings)(u.X.TTS_PLAYBACK_RATE) }),
        useValue: c.on.useSetting,
        setValue: c.on.updateSetting,
    }),
    Ia = (0, o.Qx)(u.X.TEXT_TO_SPEECH_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.JZxxGx),
        useSubtitle: () => g.intl.string(g.t.HDLtJl),
        useValue: () => (0, O.bG)([ui.A], () => ui.A.getTTSType()),
        setValue: (e) => ua.default.setTTSType(e),
        useOptions: () => [
            { name: g.intl.string(g.t.B1AGeJ), value: q.aVn.ALL_CHANNELS },
            { name: g.intl.string(g.t.uzZg9e), value: q.aVn.SELECTED_CHANNEL },
            { name: g.intl.string(g.t.DYO5Oi), value: q.aVn.NEVER },
        ],
        usePredicate: () => i8.$j,
    }),
    Io = u.X.NOTIFICATIONS_ADVANCED_ACCORDION,
    Iu = (0, o.bd)(Io, {
        useTitle: (e) => (e ? g.intl.string(g.t.RyimDk) : g.intl.string(g.t.CUICbO)),
        useCollapsedSubtitle: function () {
            return a5(Io, {
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
        buildLayout: () => [Il, Ir, Ia],
    }),
    Id = (0, o.zZ)(u.X.NOTIFICATIONS_ADVANCED_CATEGORY, {
        useTitle: () => g.intl.string(g.t["31DySj"]),
        buildLayout: () => [Iu],
    }),
    Ic = (0, o.zD)(u.X.ENABLE_UNREAD_MESSAGE_BADGE, {
        useTitle: () => g.intl.string(g.t.VH8AIJ),
        useSubtitle: () => g.intl.string(g.t["9K4qwX"]),
        useValue: () => (0, O.bG)([ui.A], () => !ui.A.getDisableUnreadBadge()),
        setValue: (e) => ua.default.setDisableUnreadBadge(!e),
    }),
    Ig = (0, o.zZ)(u.X.NOTIFICATIONS_BADGES_CATEGORY, {
        useTitle: () => g.intl.string(g.t.l6w3Vj),
        buildLayout: () => [Ic],
    });
var Im = i(100406),
    IA = i(878460),
    Ih = i(431144);
let IE = Ih.px.map((e) =>
        (0, o.zD)(`${u.X.EMAIL_LIST_ITEM_PREFIX}${e.category}`, {
            useTitle: e.label,
            useSubtitle: e.subLabel,
            useValue: () =>
                ((e) => {
                    let { categories: t } = (0, O.cf)([IA.A], () => IA.A.getEmailSettings());
                    return !!t[e];
                })(e.category),
            setValue: (t) => (0, Im.CA)(e.category, t),
        }),
    ),
    IT = (0, o.Tf)(u.X.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
        useTitle: () => g.intl.string(g.t.Ra9Pwk),
        useSubtitle: () => g.intl.string(g.t.iYjQ8X),
        useLabel: () => g.intl.string(g.t.KT1pBA),
        useDisabled: () => {
            let { categories: e } = (0, O.cf)([IA.A], () => IA.A.getEmailSettings());
            return Ih.Zk.every((t) => !e[t]);
        },
        onClick: () => (0, Im.NI)(),
        useVariant: () => "critical-secondary",
    }),
    Ix = (0, o.zZ)(u.X.NOTIFICATIONS_EMAIL_CATEGORY, {
        useTitle: () => g.intl.string(g.t["w/qqKK"]),
        initialize: function () {
            let { initialized: e } = IA.A.getEmailSettings();
            e || (0, Im.cR)();
        },
        buildLayout: () => [...IE, IT],
    }),
    IS = (0, o.zD)(u.X.DESKTOP_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t["/0WCll"]),
        useSubtitle: () => g.intl.string(g.t.wF9ih3),
        useValue: () => (0, O.bG)([ui.A], () => ui.A.getDesktopType()) !== q.nRU.NEVER,
        setValue: (e) => ua.default.setDesktopType(e ? q.nRU.ALL : q.nRU.NEVER),
    });
var Ip = i(832712),
    IN = i(543465),
    If = i(406535),
    I_ = i(790782);
let IC = (0, o.zD)(u.X.EXPERIMENTAL_UNREADS, {
    useTitle: () => g.intl.string(g.t["k6m/si"]),
    useSubtitle: () => g.intl.string(g.t.LGynPs),
    useValue: () => (0, O.bG)([IN.Ay], () => IN.Ay.useNewNotifications),
    setValue: function (e) {
        Ip.A.setAccountFlag(If.i.USE_NEW_NOTIFICATIONS, e),
            e ||
                (hk.w.set("turnedOffNewNotifications", !0),
                Y.default.track(q.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: H.A.getGuildsArray().filter(
                        (e) => IN.Ay.resolveGuildUnreadSetting(e) === I_.e.ONLY_MENTIONS,
                    ).length,
                }));
    },
    usePredicate: () =>
        (0, O.bG)(
            [t3.default, IN.Ay],
            () =>
                t3.default.getCurrentUser()?.isStaff() ||
                t3.default.getCurrentUser()?.isStaffPersonal() ||
                IN.Ay.useNewNotifications,
        ),
});
var II = i(70730);
let Ib = (0, o.zD)(u.X.FRIEND_ANNIVERSARY_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.NjOMvh),
        usePersistentBadge: () => ({ badgeType: ef.Xi.BETA }),
        useValue: c.oz.useSetting,
        setValue: function (e) {
            c.oz.updateSetting(e),
                Y.default.track(q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: If.Y.ACCOUNT,
                    friend_anniversary_notifications: e,
                });
        },
        useSearchTerms: () => [g.intl.string(g.t.hi4dSk)],
        usePredicate: () => {
            let { enabled: e, showDmPrompts: t } = II.u.getConfig({ location: "FriendAnniversaryNotifications" });
            return e && t;
        },
    }),
    Iv = (0, E.mj)({
        kind: "user",
        name: "2026-03-friend-is-online-v3",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 } },
    }),
    Ij = (0, o.zD)(u.X.FRIEND_ONLINE_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.sQQgFj),
        useValue: c.NR.useSetting,
        setValue: function (e) {
            c.NR.updateSetting(e),
                Y.default.track(q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: If.Y.ACCOUNT,
                    friend_online_notifications: e,
                });
        },
        usePredicate: () => Iv.useConfig({ location: "FriendOnlineNotifications" }).showSettingsToggle,
    }),
    Iy = (0, E.mj)({
        name: "2026-03-game-update-notification",
        kind: "user",
        defaultConfig: { showToggle: !1 },
        variations: { 0: { showToggle: !1 }, 1: { showToggle: !0 } },
    });
var IO = i(275007);
let IR = (0, o.zD)(u.X.GAME_UPDATE_NOTIFICATIONS, {
    useTitle: () => g.intl.string(IO.default["ZZIP+o"]),
    useValue: c.JV.useSetting,
    setValue: function (e) {
        c.JV.updateSetting(e),
            Y.default.track(q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                update_type: If.Y.ACCOUNT,
                game_update_notifications: e,
            });
    },
    usePredicate: () => Iy.useConfig({ location: "SettingsRendererConfig" }).showToggle,
});
var IL = i(571524);
let ID = (0, o.zD)(u.X.GDM_ALL_REACTION_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.nvkXtr),
        useValue: c.c3.useSetting,
        setValue: function (e) {
            c.c3.updateSetting(e),
                Y.default.track(q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: If.Y.ACCOUNT,
                    gdm_all_reaction_notifications: e,
                });
        },
        usePredicate: function () {
            return (0, IL.h)("GdmAllReactionNotification").showSettingsToggle;
        },
    }),
    IP = (0, o.zD)(u.X.GO_LIVE_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.FSNIvs),
        useValue: c.Yh.useSetting,
        setValue: function (e) {
            c.Yh.updateSetting(e),
                Y.default.track(q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: If.Y.ACCOUNT,
                    go_live_notifications: e,
                });
        },
    }),
    IG = (0, E.mj)({
        kind: "user",
        name: "2026-01-profile-updates-notification",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 0: { showSettingsToggle: !1 }, 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 } },
    }),
    IU = (0, o.zD)(u.X.PROFILE_UPDATES_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.xBLMhQ),
        useValue: c.T3.useSetting,
        setValue: function (e) {
            c.T3.updateSetting(e),
                Y.default.track(q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: If.Y.ACCOUNT,
                    profile_updates_notifications: e,
                });
        },
        usePredicate: () => IG.useConfig({ location: "user_settings.ProfileUpdatesNotifications" }).showSettingsToggle,
    });
var IM = i(815807);
let IV = (0, o.Hn)(u.X.REACTION_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.Wxj9Hp),
        useOptions: () => [
            { id: "enabled", label: g.intl.string(g.t["9x/RtT"]), value: f.Tz.NOTIFICATIONS_ENABLED },
            { id: "only_dms", label: g.intl.string(g.t.fJAbQd), value: f.Tz.ONLY_DMS },
            { id: "disabled", label: g.intl.string(g.t["xu+UDU"]), value: f.Tz.NOTIFICATIONS_DISABLED },
        ],
        useValue: c.Zp.useSetting,
        setValue: (e) => (0, IM.n4)(e, c.Zp.getSetting()),
    }),
    Ik = (0, o.zD)(u.X.SERVER_TRENDING_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t["k51K1+"]),
        useValue: c.Qr.useSetting,
        setValue: function (e) {
            c.Qr.updateSetting(e),
                Y.default.track(q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: If.Y.ACCOUNT,
                    server_trending_notifications: e,
                });
        },
        usePredicate: () => !1,
    }),
    Iw = (0, E.mj)({
        kind: "user",
        name: "2026-04-upcoming-server-event",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 }, 3: { showSettingsToggle: !0 } },
    }),
    IF = (0, o.zD)(u.X.UPCOMING_SERVER_EVENT_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.G8NPz6),
        useValue: c.zS.useSetting,
        setValue: function (e) {
            c.zS.updateSetting(e),
                Y.default.track(q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: If.Y.ACCOUNT,
                    upcoming_server_event_notifications: e,
                });
        },
        usePredicate: () => Iw.useConfig({ location: "UpcomingServerEventNotifications" }).showSettingsToggle,
    }),
    IB = (0, o.FW)(u.X.NOTIFICATION_SELECTION_FIELD_SET, {
        variant: "compact",
        useTitle: () => g.intl.string(g.t.FEVRDV),
        buildLayout: () => [IP, Ib, Ij, Ik, IF, IR, IU, IV, ID],
    }),
    Iz = (0, o.zD)(u.X.TASK_BAR_FLASHING, {
        useTitle: () => g.intl.string(g.t.xSmFQG),
        useSubtitle: () => g.intl.string(g.t.bd4j4x),
        useValue: () => (0, O.bG)([ui.A], () => ui.A.taskbarFlash),
        setValue: (e) => ua.default.setTaskbarFlash(e),
        usePredicate: () => (0, se.uF)(),
    }),
    IY = (0, o.zZ)(u.X.NOTIFICATIONS_OVERVIEW_CATEGORY, {
        useTitle: () => g.intl.string(g.t["/dp6yY"]),
        buildLayout: () => [IS, Iz, IB, IC],
    });
var IX = i(965957),
    IH = i(312671),
    IK = i(235079);
let IW = (0, o.zD)(u.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let e = un.A.useHolidaySoundpack();
        return null == e ? "" : g.intl.format(g.t["E/OyBr"], { soundpack: g.intl.string(e.soundpackLabel) });
    },
    useValue: function () {
        let e = (0, O.bG)([IH.A], () => IH.A.getSoundpack()),
            t = un.A.useHolidaySoundpack();
        return e === t?.soundpack;
    },
    setValue: function (e) {
        let t = un.A.getHolidaySoundpack();
        ty()(null != t, "predicate should fail if no soundpack is available"), (0, IX.p)(e ? t : IK.i.CLASSIC);
    },
    usePredicate: un.A.useIsEligible,
});
var IZ = i(970931);
let Iq = {
        useTitle: () => g.intl.string(g.t.jD1qzM),
        sound: "message1",
        useDisabled: IZ.kB,
        useDisabledMessage: () => ((0, IZ.kB)() ? g.intl.string(g.t.cIRG0s) : void 0),
    },
    IQ = { useTitle: () => g.intl.string(g.t.XBrJT6), sound: "call_ringing" },
    IJ = (0, o.zD)(u.X.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.TzjwV9),
        useSubtitle: () => g.intl.format(g.t.OOiGCM, { onClick: () => ud("message3") }),
        useValue: () =>
            (0, O.bG)([ui.A], () => ui.A.getNotifyMessagesInSelectedChannel() && !ui.A.getDisableAllSounds()),
        setValue: (e) => ua.default.setNotifyMessagesInSelectedChannel(e),
        useDisabled: () => (0, O.bG)([ui.A], () => ui.A.getDisableAllSounds()),
    }),
    I$ = (0, o.zD)(u.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => g.intl.string(g.t["2ZhCOd"]),
        useSubtitle: () => g.intl.string(g.t.EAKdPr),
        useValue: () => (0, O.bG)([ui.A], () => ui.A.getDisableAllSounds()),
        setValue: (e) => ua.default.toggleDisableAllSounds(e),
    }),
    I0 = (0, o.D1)(u.X.NOTIFICATION_SOUNDS_LIST, {
        initialize: function () {
            return () => {
                uu();
            };
        },
        buildLayout: () => [uc(Iq), IJ, uc(IQ), I$],
    }),
    I1 = (0, o.AK)(u.X.NOTIFICATIONS_TO_VOICE_AND_VIDEO_SOUNDS_NAVIGATOR, {
        useSubtitle: () => g.intl.string(g.t["MMy+lm"]),
        useSearchTerms: () => [g.intl.string(g.t["MMy+lm"])],
        destinationKey: u.X.SOUNDS_CATEGORY,
    }),
    I2 = (0, o.gN)(u.X.NOTIFICATIONS_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [I1] }),
    I3 = (0, o.zZ)(u.X.NOTIFICATIONS_SOUNDS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.LweOYy),
        buildLayout: () => [IW, I0, I2],
    }),
    I6 = (0, o.t_)(u.X.NOTIFICATIONS_PANEL, {
        useTitle: () => g.intl.string(g.t.HcoRu0),
        buildLayout: () => [IY, I3, Ig, Ix, Id],
    }),
    I4 = (0, o.i4)(u.X.NOTIFICATIONS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.HcoRu0),
        icon: Is.X,
        buildLayout: () => [I6],
    }),
    I7 = (0, o.WI)(u.X.USER_SECTION, {
        buildLayout: () => [
            NG,
            CN,
            In,
            ...((0, iz.pC)("UserSection") ? [] : [Nb]),
            NB,
            ...((0, iz.pC)("UserSection") ? [] : [S0]),
            f3,
            I4,
            fg,
        ],
    });
var I8 = i(387758),
    I5 = i(271866),
    I9 = i(147964),
    be = i(867099);
let bt = (0, o.zD)(u.X.APPLICATION_TEST_MODE, {
        useTitle: () => g.intl.string(g.t.erOqlh),
        useSubtitle: () => g.intl.string(g.t["52hMnD"]),
        usePredicate: c.Q_.useSetting,
        useValue: () => (0, O.bG)([I9.A], () => null != I9.A.testModeApplicationId),
        setValue: (e) => {
            e ? (0, _.openModal)((e) => (0, p.jsx)(be.A, { ...e })) : I5.cL();
        },
    }),
    bi = (0, o.zD)(u.X.DEVELOPER_MODE, {
        useTitle: () => g.intl.string(g.t.ObIb1Q),
        useSubtitle: () => g.intl.format(g.t["CY6q/Q"], { apiDocsUrl: q.X7G.API_DOCS }),
        useValue: c.Q_.useSetting,
        setValue: c.Q_.updateSetting,
        usePredicate: () => cu.p5,
    }),
    bn = (0, o.zZ)(u.X.DEVELOPER_CATEGORY, { buildLayout: () => [bi, bt] }),
    bs = (0, o.t_)(u.X.DEVELOPER_PANEL, { useTitle: () => g.intl.string(g.t["0BRxRp"]), buildLayout: () => [bn] }),
    bl = (0, o.i4)(u.X.DEVELOPER_SIDEBAR_ITEM, {
        icon: I8.G,
        useTitle: () => g.intl.string(g.t["0BRxRp"]),
        buildLayout: () => [bs],
    });
var br = i(70688),
    ba = i(830215);
let bo = (0, o.i4)(u.X.LOGOUT_SIDEBAR_ITEM, {
        variant: "destructive",
        useTitle: () => g.intl.string(g.t["2jxGer"]),
        icon: br.o,
        onClick: () => {
            (0, st.A)({
                title: g.intl.string(g.t["2jxGer"]),
                subtitle: g.intl.string(g.t.SUnWBB),
                confirmText: g.intl.string(g.t["2jxGer"]),
                onConfirm: () => {
                    ba.A.logout("settings");
                },
            });
        },
        buildLayout: () => [],
    }),
    bu = (0, o.WI)(u.X.UTILITY_SECTION, { buildLayout: () => [bl, bo] }),
    bd = (0, o.Hr)({ buildLayout: () => [xJ, I7, hr, uz, iB, E_, bu], analyticsKey: "user_settings" });
