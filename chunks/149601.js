i.d(t, { D: () => C5 });
var n,
    s,
    l,
    r,
    a = i(419954),
    o = i(358776),
    u = i(780964),
    d = i(682348),
    c = i(885386),
    g = i(375708),
    m = i(395277);
let A = (0, a.zD)(u.X.ACTIVITY_PRIVACY_SETTING, {
        useTitle: () => g.intl.string(m.default.WhdCGP),
        useSubtitle: () => g.intl.string(m.default.UQ9RHJ),
        useValue: c.tz.useSetting,
        setValue: c.tz.updateSetting,
    }),
    h = (0, a.zZ)(u.X.ACTIVITY_PRIVACY_SHARING_CATEGORY, {
        useTitle: () => g.intl.string(g.t["6x5uWQ"]),
        useSearchTerms: () => [g.intl.string(g.t["8ka8li"])],
        buildLayout: () => [A],
    });
var E = i(945810),
    S = i(21973);
let T = (0, E.mj)({
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
        let t = (0, S.lX)(e),
            i = T.useConfig({ location: e });
        return t || i.copyChanges;
    };
var p = i(627968),
    f = i(64700),
    N = i(873298),
    _ = i(192308),
    I = i(365258);
let C = (0, a.Qx)(u.X.ACTIVITY_PRIVACY_PER_GUILD_DEFAULT_SETTING, {
        useTitle: () =>
            x("GuildActivitySharingDefaultSetting") ? g.intl.string(g.t.vpgck1) : g.intl.string(m.default["/LHVbt"]),
        useOptions: function () {
            let e = x("GuildActivitySharingDefaultSetting");
            return f.useMemo(
                () =>
                    e
                        ? [
                              {
                                  value: N.Qd.ACTIVITY_STATUS_OFF,
                                  name: g.intl.string(g.t.FzgQna),
                                  desc: g.intl.string(g.t.SQxoyc),
                              },
                              {
                                  value: N.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
                                  name: g.intl.string(g.t["1hvuGH"]),
                                  desc: g.intl.string(g.t.odUCPE),
                              },
                              { value: N.Qd.ACTIVITY_STATUS_ON, name: g.intl.string(g.t.fQc5la) },
                          ]
                        : [
                              { value: N.Qd.ACTIVITY_STATUS_ON, name: g.intl.string(g.t.UzGMH9) },
                              {
                                  value: N.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
                                  name: g.intl.string(m.default["/sAeRY"]),
                              },
                              { value: N.Qd.ACTIVITY_STATUS_OFF, name: g.intl.string(m.default.m3oL7Q) },
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
                !(0, S.W1)(t) && !T.getConfig({ location: t }).upsell)
            )
                return;
            let s = (0, I.g8)(n, e);
            if (null == s) return;
            let l = (0, I.Xc)(e);
            (0, _.openModalLazy)(async () => {
                let { default: e } = await Promise.all([i.e("92164"), i.e("36281"), i.e("62041"), i.e("41996")]).then(
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
    b = (0, a.zZ)(u.X.ACTIVITY_PRIVACY_PER_GUILD_CATEGORY, {
        useTitle: () =>
            x("GuildActivitySharingCategory") ? g.intl.string(g.t.VDcvrR) : g.intl.string(m.default["1PougL"]),
        useSubtitle: () =>
            x("GuildActivitySharingCategory") ? g.intl.string(g.t["/Go08F"]) : g.intl.string(m.default.OO17Lg),
        buildLayout: () => [C],
    }),
    v = (0, a.AK)(u.X.ACTIVITY_PRIVACY_TO_PROFILE_PRIVACY_NAVIGATOR, {
        useSubtitle: () => g.intl.string(g.t.J0SFL2),
        destinationKey: u.X.DATA_AND_PRIVACY_PANEL,
    }),
    y = (0, a.gN)(u.X.ACTIVITY_PRIVACY_RELATED_SETTINGS, {
        usePredicate: () => (0, S.lX)("ActivityPrivacyRelatedSettings"),
        buildLayout: () => [v],
    });
var j = i(683071),
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
    B = i(123292),
    F = i(140735),
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
            let [e, t] = (0, f.useState)(""),
                [i, n] = (0, f.useState)("server-order"),
                s = (0, O.bG)([K.Ay], () => K.Ay.getFlattenedGuildIds()),
                l = (0, O.bG)([H.A], () => H.A.getGuilds()),
                r = s.map((e) => l[e]).filter(Boolean),
                a = c.Pw.useSetting(),
                [o, u] = (0, f.useState)(a);
            (0, f.useEffect)(() => {
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
                [m, A] = (0, f.useState)(() => Z[i](r, a)),
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
        E = (0, f.useId)(),
        S = (0, f.useRef)(null),
        T = (0, f.useMemo)(
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
        x = T.find((e) => e.value === l)?.label ?? "";
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
                                    targetElementRef: S,
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
                                                children: T.map((e) => {
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
                                            innerRef: S,
                                            className: Q.Ku,
                                            children: [
                                                (0, p.jsx)(V.E, {
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
var ee = i(366189);
let et = (0, a.E2)(u.X.ACTIVITY_PRIVACY_PER_GUILD_SETTING, {
        useSearchTerms: () => [g.intl.string(m.default["/LHVbt"])],
        Component: function () {
            let e = c.tz.useSetting()
                ? null
                : (0, p.jsx)("div", {
                      className: ee.l,
                      children: (0, p.jsx)(j.w, { type: "warning", children: g.intl.string(m.default["xxI0/W"]) }),
                  });
            return (0, p.jsx)($, { notice: e });
        },
    }),
    ei = (0, a.zZ)(u.X.ACTIVITY_PRIVACY_MY_SERVERS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.TqdOvC),
        useSubtitle: () => (x("MyServersCategory") ? g.intl.string(m.default.OO17Lg) : null),
        buildLayout: () => [et, y],
    }),
    en = (0, a.zD)(u.X.ACTIVITY_PRIVACY_FRIENDS_JOIN_SETTING, {
        useTitle: () => g.intl.string(m.default.khuuzv),
        useSubtitle: () => g.intl.string(m.default["8EWsJ8"]),
        useValue: () => c.e.useSetting(),
        setValue: (e) => c.e.updateSetting(e),
    }),
    es = (0, a.zD)(u.X.ACTIVITY_PRIVACY_VOICE_JOIN_SETTING, {
        useTitle: () => g.intl.string(m.default.Uz5Ipi),
        useSubtitle: () => g.intl.string(m.default.CZI2Gb),
        useValue: () => c.UM.useSetting(),
        setValue: (e) => c.UM.updateSetting(e),
    }),
    el = (0, a.zZ)(u.X.ACTIVITY_PRIVACY_GAME_JOINING_CATEGORY, {
        useTitle: () => g.intl.string(m.default["89YBr5"]),
        buildLayout: () => [en, es],
        useSearchTerms: () => [g.intl.string(g.t.VOszPA)],
    });
var er = i(359778),
    ea = i(208963);
let eo = (0, a.E2)(u.X.ACTIVITY_PRIVACY_TERMS, {
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
    eu = (0, a.zZ)(u.X.ACTIVITY_PRIVACY_TERMS_CATEGORY, { buildLayout: () => [eo] }),
    ed = (0, a.t_)(u.X.ACTIVITY_PRIVACY_PANEL, {
        useTitle: () => g.intl.string(g.t.Cq98yL),
        buildLayout: () => [h, b, ei, el, eu],
    }),
    ec = (0, a.i4)(u.X.ACTIVITY_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.Cq98yL),
        icon: d._,
        buildLayout: () => [ed],
    });
var eg = i(935399),
    em = i(625657),
    eA = i(534514),
    eh = i(821609),
    eE = i(404778),
    eS = i(554146),
    eT = i(131607),
    ex = i(843402),
    ep = i(589051),
    ef = i(592598),
    eN = i(933297),
    e_ = i(351906),
    eI = i(532624),
    eC = i(773371),
    eb = i(184809),
    ev = i(723702),
    ey = i(766075),
    ej = i(999834),
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
        n = eI.Ay.getOverlayKeybind(),
        s = eI.Ay.getOverlayChatKeybind();
    return {
        enabled: eC.default.enabled,
        notifications_enabled: i,
        notifications_position: i ? t : null,
        text_notifications_mode: ef.A.isNotificationDisabled(eD.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != n ? (0, eL.dI)(n.shortcut) : null,
        text_activation_hotkey: null != s ? (0, eL.dI)(s.shortcut) : null,
        text_opacity_slider: eb.default.getTextWidgetOpacity(),
        old_enabled: e?.enabled ?? eC.default.enabled,
    };
}
var eM = i(793574),
    eV = i(237984),
    ek = i(503698),
    ew = i.n(ek),
    eB = i(890856),
    eF = i(389128);
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
                                    (0, p.jsx)(V.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: eF.SZ,
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
                            (0, p.jsx)("div", { className: eF.a$, children: l }),
                        ],
                    }),
                ],
            }),
            (0, p.jsx)("div", { className: eF.Om, children: a }),
        ],
    });
}
let eX = (0, a.E2)(u.X.OVERLAY_BUG_REPORTER_SETTING, {
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
    e5 = i(137177),
    e8 = i(814925),
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
function tS(e) {
    let { children: t, className: i, onExpand: n, ...s } = e,
        [l, r] = f.useState(!1);
    return (0, p.jsx)(tA.N, {
        className: eF.uR,
        collapsibleContent: (0, p.jsx)("div", { className: eF.oV, children: t }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, p.jsx)(eY, {
                ...s,
                onClick: (e) => {
                    var i;
                    r((i = !l)), n?.(i), t?.(e);
                },
                className: ew()(eF.AC, i),
                action: (0, p.jsxs)("div", {
                    className: eF.rc,
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
let tT = (0, a.E2)(u.X.OVERLAY_CURRENT_GAME, {
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
            [a, o] = f.useState(l),
            [u, d] = f.useState(s),
            [c, m] = f.useState(!1);
        f.useEffect(() => {
            o(l), d(s);
        }, [l, s]);
        let A = !(0, tm.supportsLegacy)(),
            h = !(0, tm.supportsOutOfProcess)(),
            { legacyEnabled: E, oopEnabled: S } = (0, O.cf)([tt.default], () => tt.default.getGlobalEnabledStatus()),
            T = (t, i) => {
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
                        e6.A.setEnabled(t, S), (0, e9.Q3)(t, e9.OverlayToggledClientSettingType.LEGACY, e.id ?? null);
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
            x = A && h,
            N = !E && !S,
            _ = !a && !E && u && !A,
            I = !u && !S && a && !h,
            C = n?.overlayMethod === te.Ue.Disabled,
            b = n?.state === te.AR.OVERLAY_RENDERING && !C,
            v = n?.state != null && tE.has(n.state) && !C,
            y = n?.overlayMethod === te.Ue.OutOfProcess,
            j = n?.overlayMethod === te.Ue.OutOfProcessLimitedInteraction,
            R = n?.overlayMethod === te.Ue.Hook,
            D = n?.state === te.AR.OVERLAY_CRASHED || n?.state === te.AR.OVERLAY_CRASHED_DISABLED,
            P = !a && !u,
            [G, U] = (() => {
                switch (!0) {
                    case b && y:
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
                    case b && j:
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
                                    case !S:
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
                    case N:
                        return [g.intl.string(g.t["9DUS5l"]), null];
                    case P:
                        return [g.intl.string(g.t.nQ9EdJ), null];
                    case _:
                    case I:
                        return [g.intl.string(g.t.VWUn0a), null];
                    case v:
                        if (y) return [g.intl.string(g.t["s8+CFq"]), null];
                        if (R) return [g.intl.string(g.t.JEEdqt), null];
                        if (j) return [g.intl.string(g.t.pzBMwY), null];
                        return [g.intl.string(g.t["2Xhy9k"]), null];
                    case null == n:
                        return [g.intl.string(g.t.vwHPRi), null];
                    case C: {
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
        let [k, B] = f.useMemo(
            () =>
                v
                    ? ["text-muted", w.A.colors.TEXT_MUTED.css]
                    : b && j
                      ? ["text-feedback-warning", w.A.colors.TEXT_FEEDBACK_WARNING.css]
                      : b && y
                        ? ["text-feedback-positive", w.A.colors.TEXT_FEEDBACK_POSITIVE.css]
                        : b && R
                          ? ["text-strong", w.A.colors.TEXT_STRONG.css]
                          : ["interactive-text-default", w.A.colors.INTERACTIVE_TEXT_DEFAULT.css],
            [v, b, j, y, R],
        );
        return null == e
            ? null
            : (0, p.jsxs)(tS, {
                  onExpand: m,
                  className: c ? eF.tx : void 0,
                  title: (0, p.jsxs)(p.Fragment, {
                      children: [
                          t?.name ?? r?.name ?? e?.gameName ?? "",
                          null != r && r.verified
                              ? (0, p.jsx)(e0.m, {
                                    text: g.intl.string(g.t["4PJP5p"]),
                                    children: (0, p.jsx)(e8.A, {
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
                              ? (0, p.jsx)(e2.k, { size: "xxs", color: B })
                              : (0, p.jsx)("div", { className: eF.W4 }),
                          (0, p.jsx)(V.E, {
                              variant: "text-xs/semibold",
                              color: k,
                              children: g.intl.string(g.t.CDOx3w),
                          }),
                      ],
                  }),
                  icon: (0, p.jsx)(e5.A, { game: t, pid: e?.pid, size: e5.M.MEDIUM }),
                  "aria-label": g.intl.string(g.t["87O5GC"]),
                  action: (0, p.jsx)(M.D, {
                      onClick: (e) => ez(e),
                      children: (0, p.jsx)(L.d, {
                          checked: (a && S) || (u && E),
                          disabled: x,
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
                                          e6.A.setEnabled(t, t), (n = !t && E), (s = !t && S);
                                          break;
                                      case "both":
                                          e6.A.setEnabled(t, t),
                                              e3.Ay.toggleOverlay(e, t, t),
                                              d(t),
                                              o(t),
                                              (n = (!t && E) || (!t && u)),
                                              (s = (!t && S) || (!t && a));
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
                                          n = !S && a,
                                          s = !E && u,
                                          l = !a && S,
                                          r = !u && E;
                                      switch (!0) {
                                          case i && (n || s) && (l || r):
                                              return "both";
                                          case i && (n || s):
                                              return "global";
                                          default:
                                              return "game";
                                      }
                                  })(t, (a && S) || (u && E)),
                              );
                          },
                      }),
                  }),
                  warning: (0, p.jsx)(td, { className: eF.Hh, game: e }),
                  children: [
                      (0, p.jsx)(eY, {
                          title: g.intl.string(g.t["7BlVIs"]),
                          description: g.intl.string(g.t.ndgADE),
                          hint: S ? void 0 : g.intl.string(g.t.cAFVsL),
                          "aria-label": g.intl.string(g.t["7BlVIs"]),
                          action: (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsx)(L.d, {
                                      checked: a && S,
                                      disabled: h,
                                      onChange: (e) => {
                                          e && !S
                                              ? T(e, e9.OverlayToggledClientSettingType.OOP)
                                              : T(e, e9.OverlayToggledClientSettingType.OOP_GAME);
                                      },
                                  }),
                                  (0, p.jsx)("div", { className: eF.Kz }),
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
                                              ? T(e, e9.OverlayToggledClientSettingType.LEGACY)
                                              : T(e, e9.OverlayToggledClientSettingType.LEGACY_GAME);
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
    tf = i(871633);
function tN(e) {
    let { game: t, gameApplication: i } = e,
        n = f.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        s = (0, O.bG)([eW.A], () => (null != i ? i : eW.A.getApplication(t?.id)), [i, t]);
    return (0, p.jsx)(e5.A, { game: s, pid: n, size: e5.M.SMALL });
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
        [c, g] = f.useState(d);
    return (
        f.useEffect(() => {
            g(d);
        }, [d]),
        (0, p.jsx)(eY, {
            title: t.name,
            icon: (0, p.jsx)(tN, { game: o, gameApplication: i }),
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
                    (0, p.jsx)("div", { className: eF.Kz }),
                ],
            }),
        })
    );
}
let tI = (0, a.E2)(u.X.OVERLAY_LEGACY_SETTING, {
        Component: function () {
            let [e, t] = f.useState(!1),
                { legacyEnabled: i, oopEnabled: n } = (0, O.cf)([tt.default], () =>
                    tt.default.getGlobalEnabledStatus(),
                ),
                s = (0, O.yK)([eQ.Ay], () => eQ.Ay.getGamesSeen(!0)).filter((e) => !(0, tf.n1)(e)),
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
                u = f.useMemo(
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
                      className: eF.dA,
                      action: (0, p.jsxs)(p.Fragment, {
                          children: [
                              (0, p.jsx)(L.d, { checked: i, disabled: r, onChange: (e) => a(e) }),
                              tp.O && (0, p.jsx)("div", { className: eF.Kz }),
                          ],
                      }),
                  })
                : (0, p.jsxs)(tS, {
                      onExpand: t,
                      className: e ? eF.tx : void 0,
                      title: g.intl.string(g.t.BfFpW1),
                      description: u,
                      "aria-label": g.intl.string(g.t.BfFpW1),
                      action: (0, p.jsx)(M.D, {
                          onClick: (e) => ez(e),
                          children: (0, p.jsx)(L.d, { checked: i, disabled: r, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, p.jsx)("div", {
                              className: eF.SC,
                              children: (0, p.jsx)(V.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: g.intl.string(g.t.FzoWRo),
                              }),
                          }),
                          (0, p.jsx)(tx.Ip, {
                              className: eF.XG,
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
    tC = (0, a.E2)(u.X.OVERLAY_OOP_SETTING, {
        Component: function () {
            let [e, t] = f.useState(!1),
                { oopEnabled: i, legacyEnabled: n } = (0, O.cf)([tt.default], () =>
                    tt.default.getGlobalEnabledStatus(),
                ),
                s = !(0, tm.supportsOutOfProcess)(),
                l = (0, O.yK)([eQ.Ay], () => eQ.Ay.getGamesSeen(!0)).filter((e) => !(0, tf.n1)(e)),
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
                u = f.useMemo(
                    () =>
                        tp.O ? (s ? g.intl.string(g.t.C7bLTQ) : g.intl.string(g.t.ndgADE)) : g.intl.string(g.t.m7X4az),
                    [s],
                );
            return 0 === l.length
                ? (0, p.jsx)(eY, {
                      title: g.intl.string(g.t["7BlVIs"]),
                      description: u,
                      "aria-label": g.intl.string(g.t["7BlVIs"]),
                      className: eF.dA,
                      action: (0, p.jsxs)(p.Fragment, {
                          children: [
                              (0, p.jsx)(L.d, { checked: i, disabled: s, onChange: (e) => a(e) }),
                              tp.O && (0, p.jsx)("div", { className: eF.Kz }),
                          ],
                      }),
                  })
                : (0, p.jsxs)(tS, {
                      onExpand: t,
                      className: e ? eF.tx : void 0,
                      title: g.intl.string(g.t["7BlVIs"]),
                      description: u,
                      "aria-label": g.intl.string(g.t["7BlVIs"]),
                      action: (0, p.jsx)(M.D, {
                          onClick: (e) => ez(e),
                          children: (0, p.jsx)(L.d, { checked: i, disabled: s, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, p.jsx)("div", {
                              className: eF.SC,
                              children: (0, p.jsx)(V.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: g.intl.string(g.t.FzoWRo),
                              }),
                          }),
                          (0, p.jsx)(tx.Ip, {
                              className: eF.XG,
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
    tb = (0, a.zZ)(u.X.OVERLAY_ENABLE_CATEGORY, {
        useSubnavLabel: () => g.intl.string(g.t["/dp6yY"]),
        buildLayout: () => [tT, tC, tI, eX],
    }),
    tv = (0, a.zD)(u.X.OVERLAY_CLICKABLE_REGIONS_SETTING, {
        useValue: () => (0, O.bG)([eb.default], () => !eb.default.disableClickableRegions),
        setValue: (e) => {
            e6.A.setDisableClickableRegions(!e);
        },
        useTitle: () => g.intl.string(g.t["+eFXxq"]),
        useSubtitle: () => g.intl.string(g.t.kivMAp),
    });
var ty = i(284009),
    tj = i.n(ty),
    tO = i(97260),
    tR = i(635242);
let tL = (0, a.E2)(u.X.OVERLAY_KEYBIND_SETTING, {
    Component: function () {
        let e = (0, O.bG)([eI.Ay], () => eI.Ay.getOverlayKeybind()),
            t = !(0, tm.supportsLegacy)(),
            i = !(0, tm.supportsOutOfProcess)(),
            [n, s] = (0, O.yK)([eQ.Ay], () => [eQ.Ay.canShowAdminWarning, eQ.Ay.getVisibleGame()], []),
            l = (0, to.NP)(),
            r = null != s && s.elevated && n && !l,
            a = !(0, eI.DV)(e?.shortcut ?? []);
        return (0, p.jsx)("div", {
            className: eF.hc,
            children: (0, p.jsxs)("div", {
                className: eF.eH,
                children: [
                    (0, p.jsxs)("div", {
                        className: eF.Bu,
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
                                    className: eF.y7,
                                    children: g.intl.string(g.t.NsowVa),
                                }),
                            a &&
                                (0, p.jsx)(V.E, {
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
                                tj()(null != e, "Keybind should never be undefined"),
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
let tG = (0, a.zD)(u.X.OVERLAY_LIMITED_INTERACTION_OVERRIDE_SETTING, {
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
                n = (0, O.bG)([ef.A], () => ef.A.isLimitedInteractionOverrideEnabled(i)),
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
    tU = (0, a.zZ)(u.X.OVERLAY_GENERAL_CATEGORY, { buildLayout: () => [tL, tG, tv] });
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
                t = (0, O.bG)([ef.A], () => ef.A.isNotificationDisabledBySetting(tM.M.NOW_PLAYING));
            return !!e && !t;
        },
    },
];
function tk(e) {
    return (0, a.zD)(e.key, {
        useTitle: () => g.intl.string(e.title),
        useSubtitle: () => g.intl.string(e.description),
        useValue: () => !(0, O.bG)([ef.A], () => ef.A.getDisabledNotifications().has(e.disabledSetting)),
        setValue: (t) => {
            e6.A.setNotificationDisabledSetting(e.disabledSetting, !t);
        },
        usePredicate: e.usePredicate,
    });
}
let tw = (0, a.FW)(u.X.OVERLAY_NOTIFICATIONS_LIST, {
        variant: "compact",
        useTitle: () => g.intl.string(g.t.gnKWdS),
        isTitleHiddenVisually: !0,
        buildLayout: () => tV.map(tk),
    }),
    tB = (0, a.zZ)(u.X.OVERLAY_NOTIFICATIONS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.xOE5bA),
        buildLayout: () => [tw],
    }),
    tF = (0, a.Hn)(u.X.OVERLAY_VOICE_WIDGET_AVATAR_SIZE, {
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
    tz = (0, a.Hn)(u.X.OVERLAY_VOICE_WIDGET_DISPLAY_NAMES, {
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
    tY = (0, a.Hn)(u.X.OVERLAY_VOICE_WIDGET_DISPLAY_USERS, {
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
let tq = (0, a.sN)(u.X.OVERLAY_VOICE_WIDGET_MAX_USERS, {
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
let t7 = (0, a.E2)(u.X.OVERLAY_VOICE_WIDGET_PREVIEW, {
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
                [l] = f.useState(() => [
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
    t5 = (0, a.zZ)(u.X.OVERLAY_VOICE_WIDGET_CATEGORY, {
        useTitle: () => g.intl.string(g.t.r1TZfh),
        buildLayout: () => [t7, tF, tz, tY, tq],
    });
var t8 = i(49999),
    t9 = i(9025);
function ie() {
    let [e, t] = (0, eT.kn)([eS.M.OVERLAY_OOP_SETTINGS_NUX], void 0, !0);
    return ((0, eg.Ay)(() => () => {
        t(t8.i.AUTO_DISMISS);
    }),
    e !== eS.M.OVERLAY_OOP_SETTINGS_NUX)
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
                                  onClick: () => void t(t8.i.DISMISS),
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
                  (0, p.jsx)(j.w, {
                      type: "warning",
                      children: g.intl.format(g.t.fuEX5B, {
                          onClick: () => (0, ey.openUserSettings)(u.X.STREAMER_MODE_CATEGORY),
                      }),
                  }),
                  (0, p.jsx)(eE.c, { className: t9.yF }),
              ],
          })
        : null;
}
let ii = (0, a.t_)(u.X.OVERLAY_PANEL, {
        initialize: function () {
            return (
                eG(),
                eI.Ay.addChangeListener(eG),
                ef.A.addChangeListener(eG),
                eb.default.addChangeListener(eG),
                eC.default.addChangeListener(eG),
                ev.isPlatformEmbedded && (0, ex.a2)(),
                () => {
                    eI.Ay.removeChangeListener(eG),
                        ef.A.removeChangeListener(eG),
                        eb.default.removeChangeListener(eG),
                        eC.default.removeChangeListener(eG),
                        ev.isPlatformEmbedded && (0, ex.e0)();
                }
            );
        },
        useTitle: () => g.intl.string(g.t["9cb1Uz"]),
        decoration: {
            type: eN.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                return (0, p.jsxs)(p.Fragment, { children: [(0, p.jsx)(ie, {}), (0, p.jsx)(it, {})] });
            },
        },
        buildLayout: () => [tb, tU, t5, tB],
    }),
    is = (0, a.i4)(u.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["9cb1Uz"]),
        icon: em.l,
        usePredicate: ej.b_,
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
    iS = i(150717),
    iT = i(653307);
let ix = (0, ev.isWindows)();
function ip(e) {
    let { rawGame: t, nowPlaying: n = !1, isOverride: s, subgames: l, isSubgame: r = !1, parentGame: a } = e,
        o = (0, O.cf)([eQ.Ay, tc.A, tg.A], () => (0, eQ.xU)(t, eQ.Ay, tc.A, tg.A)),
        { canToggleDetection: u, isCurrentGameDetectionEnabled: d } = (0, O.cf)([eQ.Ay], () => ({
            canToggleDetection: null == a || eQ.Ay.isDetectionEnabled(a),
            isCurrentGameDetectionEnabled: eQ.Ay.isDetectionEnabled(o),
        })),
        c = (0, O.bG)([eQ.Ay], () => eQ.Ay.getVisibleGame()),
        [m, A] = f.useState(!1),
        h = f.useMemo(
            () =>
                (0, tf.n1)(o)
                    ? r
                        ? o.gameName
                        : g.intl.formatToPlainString(g.t.G6BGdx, { subgameName: o.gameName })
                    : o.name,
            [o, r],
        ),
        [E, S] = f.useState(h ?? "???"),
        T = ew()(iT.tR, {
            [iS.LO]: !n,
            [iS.Rw]: n,
            [iS.FB]: null != o && n,
            [iS.xL]: r,
            [iS.fG]: null != l && l.length > 0,
        });
    function x() {
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
    let N = null != c && (0, eQ.Es)(o) === (0, eQ.Es)(c),
        I = (null != a && a.id === c?.id) || N || (null != l && l.some((e) => e.id === c?.id));
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsxs)("div", {
                className: T,
                children: [
                    (0, p.jsxs)("div", {
                        className: ew()(iS.$K, iT.Vd),
                        children: [
                            o.verified && !s
                                ? (0, p.jsxs)("div", {
                                      className: iS.HS,
                                      children: [
                                          (0, p.jsx)("div", { className: iS.mO, children: h }),
                                          (0, p.jsx)(e0.m, {
                                              text: g.intl.string(g.t["4PJP5p"]),
                                              children: (0, p.jsx)(e8.A, {
                                                  className: iS.qf,
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
                                      className: ew()(iS.mO, iS.sr),
                                      type: "text",
                                      maxLength: 128,
                                      value: E,
                                      onBlur: function () {
                                          o.name !== E && e3.Ay.editName(o, E);
                                      },
                                      onKeyDown: function (e) {
                                          e.key === iE.dh.ENTER && (e.currentTarget.blur(), e.preventDefault());
                                      },
                                      onChange: (e) => S(e.target.value),
                                  }),
                            (function () {
                                let e,
                                    t,
                                    { played: i, exePath: s } = o;
                                return (
                                    n || N
                                        ? (e = g.intl.string(g.t.VbV5dv))
                                        : null != i && "" !== i && (e = g.intl.format(g.t["gGeOE+"], { when: i })),
                                    (0, p.jsx)("div", {
                                        className: iS.GN,
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
                              className: ew()(iT.tR, iT.oA, iT.LT, iS.E3),
                              children: (0, p.jsx)(e0.m, {
                                  text: g.intl.string(g.t["y0B+lo"]),
                                  children: (0, p.jsx)(M.D, {
                                      "aria-label": g.intl.string(g.t["y0B+lo"]),
                                      className: iS.ym,
                                      onClick: function () {
                                          if (m) return;
                                          let e = null != o.id ? tc.A.getDetectableGame(o.id) : null;
                                          Y.default.track(q.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
                                              application_id: e?.id,
                                              game_name: (0, tf.n1)(o) ? o.gameName : o.name,
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
                                          className: iS.Lj,
                                          colorClass: iS.GS,
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
                                          className: iS.Lj,
                                          colorClass: iS.GS,
                                      })
                                    : (0, p.jsx)(ig.G, {
                                          size: "md",
                                          color: "currentColor",
                                          className: u ? iS.$V : iS.zN,
                                          colorClass: iS.GS,
                                      });
                        return (0, p.jsx)("div", {
                            className: ew()(iT.tR, iT.oA, iT.LT, iS.E3),
                            children: (0, p.jsx)(e0.m, {
                                text: g.intl.string(g.t.QmitzM),
                                children: u
                                    ? (0, p.jsx)(M.D, {
                                          "aria-label": g.intl.string(g.t.QmitzM),
                                          className: iS.ym,
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
                                      className: iS.Lj,
                                      colorClass: iS.GS,
                                  })
                                : (0, p.jsx)(id.n, {
                                      size: "md",
                                      color: "currentColor",
                                      className: iS.$V,
                                      colorClass: iS.GS,
                                  }),
                            n = t
                                ? (0, p.jsx)(e0.m, {
                                      text: g.intl.string(g.t.Vfw2L5),
                                      children: (0, p.jsx)("i", { className: iS.kb }),
                                  })
                                : null;
                        return (0, p.jsxs)("div", {
                            className: ew()(iT.tR, iT.oA, iT.LT, iS.E3),
                            children: [
                                n,
                                (0, p.jsx)(e0.m, {
                                    text: g.intl.string(g.t["1+O+Tu"]),
                                    children: (0, p.jsx)(M.D, {
                                        "aria-label": g.intl.string(g.t["1+O+Tu"]),
                                        className: iS.ym,
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
                    (n && !s) || I
                        ? null
                        : (0, p.jsx)(iA.A, {
                              className: iS.LS,
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
                    className: iS.AQ,
                    children: l.map((e, t) =>
                        (0, p.jsxs)(
                            f.Fragment,
                            {
                                children: [
                                    (0, p.jsx)(ip, { rawGame: e, isOverride: !1, isSubgame: !0, parentGame: o }),
                                    t !== l.length - 1 && (0, p.jsx)("div", { className: iS.PQ }),
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
    f.useEffect(() => ((0, ex.a2)(), ex.e0), []);
    let { gameHistory: i, robloxSubgameHistory: n } = f.useMemo(
        () =>
            e.reduce((e, t) => ((0, tf.n1)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
                gameHistory: [],
                robloxSubgameHistory: [],
            }),
        [e],
    );
    return { gameHistory: i, robloxSubgameHistory: n, overrideExePaths: t };
}
var iI = i(818050);
function iC() {
    let e = (0, O.bG)([iu.A], () => iu.A.theme);
    return (0, p.jsxs)(ir.pp, {
        theme: e,
        className: iI.eT,
        children: [
            (0, p.jsx)(ir.G8, { darkSrc: i(839628), lightSrc: i(446404), width: 430, height: 250 }),
            (0, p.jsx)(ir.SG, { children: g.intl.string(g.t["1yiJwn"]) }),
        ],
    });
}
function ib() {
    let { gameHistory: e, robloxSubgameHistory: t, overrideExePaths: i } = i_();
    return 0 === e.length
        ? (0, p.jsx)(iC, {})
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
let iv = (0, a.E2)(u.X.REGISTERED_GAMES_ADDED_GAMES_SETTING, {
    useSearchTerms: () => [],
    Component: () => (0, p.jsx)(ib, {}),
});
var iy = i(424994);
let ij = (0, a.zZ)(u.X.REGISTERED_GAMES_ADDED_GAMES_CATEGORY, {
    buildLayout: () => [iv],
    useTitle: () => g.intl.string(g.t.jCOdvx),
    useSubtitle: () => g.intl.format(g.t.KPA3m9, { igdbLink: iy.s8 }),
});
var iO = i(305866),
    iR = i(783878),
    iL = i(197287),
    iD = i(604949);
function iP(e) {
    let { onClose: t } = e,
        i = (0, O.bG)([eQ.Ay], () => eQ.Ay.getCandidateGames()),
        [n, s] = f.useState(null),
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
            (0, p.jsx)(eE.c, { className: ew()(iI.Ot, iI.QB) }),
            (0, p.jsxs)("div", {
                className: ew()(iL.o, iT.xM),
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
var iG = i(564206);
let iU = (0, a.E2)(u.X.REGISTERED_GAMES_ADD_GAME_SETTING, {
    useSearchTerms: () => [g.intl.string(g.t.GTCx0p)],
    Component: () => {
        let e = f.useRef(null);
        return (0, p.jsxs)("div", {
            className: ew()(iG.a, iI.Gf),
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
        className: ew()(iT.tR, iS.eS, iS.Rw),
        children: (0, p.jsxs)("div", {
            className: ew()(iS.$K, iT.Vd),
            children: [
                (0, p.jsx)("div", { className: iS.mO, children: g.intl.string(g.t.H68X9x) }),
                (0, p.jsx)("div", { className: iS.GN, children: g.intl.string(g.t.T5Ilmw) }),
            ],
        }),
    });
}
let iV = (0, a.E2)(u.X.REGISTERED_GAMES_CURRENT_GAME_SETTING, {
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
    ik = (0, a.zZ)(u.X.REGISTERED_GAMES_CURRENT_GAME_CATEGORY, {
        useTitle: () => g.intl.string(g.t["MY9/Oe"]),
        buildLayout: () => [iV, iU],
    }),
    iw = (0, a.t_)(u.X.REGISTERED_GAMES_PANEL, {
        useTitle: () => g.intl.string(g.t.AVDyEj),
        buildLayout: () => [ik, ij],
    }),
    iB = (0, a.i4)(u.X.REGISTERED_GAMES_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.AVDyEj),
        icon: il._,
        usePredicate: ej.Pi,
        buildLayout: () => [iw],
    }),
    iF = (0, a.WI)(u.X.ACTIVITY_SECTION, {
        useTitle: () => g.intl.string(g.t.nVPpLM),
        buildLayout: () => [ec, iB, is],
    });
var iz = i(550640),
    iY = i(247928),
    iX = i(97808),
    iH = i(778712),
    iK = i(775602),
    iW = i(320095),
    iZ = i(963852),
    iq = i(763754),
    iQ = i(20851),
    iJ = i(486020),
    i$ = i(382677);
let i0 = new t0.nA({ id: "1337", guild_id: "1337", type: q.rbe.GUILD_TEXT, name: "preview" }),
    i1 = [
        { status: q.clD.IDLE, discriminator: "2" },
        { status: q.clD.DND, discriminator: "3" },
        { status: q.clD.ONLINE, mobile: !0, discriminator: "4" },
    ];
function i2(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return (0, iW.rh)({ ...(0, iZ.Ay)({ channelId: i0.id, content: e }), state: q.cmJ.SENT, reactions: t });
}
var i3 = i(856488);
let i6 = (0, a.zD)(u.X.ENABLE_LEGACY_CHAT_INPUT, {
        useTitle: () => g.intl.string(g.t.TZ2hZH),
        useSubtitle: () => g.intl.string(g.t.Q7wgHc),
        useValue: () => c.D_.useSetting(),
        setValue: (e) => c.D_.updateSetting(e),
    }),
    i4 = (0, a.zD)(u.X.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS, {
        useTitle: () => g.intl.string(g.t.XYvMIX),
        useSubtitle: () => g.intl.string(g.t.T0rbtM),
        useValue: c._z.useSetting,
        setValue: c._z.updateSetting,
    });
var i7 = i(100767),
    i5 = i(106236),
    i8 = i(113494),
    i9 = i(782134),
    ne = i(54570),
    nt = i(8880),
    ni = i(75804);
let nn = eR().debounce((e) => {
    (0, ne.zU)(e);
}, 250);
function ns() {
    let [e, t] = f.useState(!1);
    return (
        (0, eg.l0)(() => (0, ne.pr)()),
        (0, p.jsx)(eh.$, {
            text: g.intl.string(g.t.SKNnqq),
            icon: e ? i8.E : i9.u,
            size: "sm",
            onClick: () => {
                if (e) {
                    (0, ne.pr)(), t(!1);
                    return;
                }
                (0, ne.AU)(
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
let nl = (0, a.E2)(u.X.TTS_PLAYBACK_RATE, {
        useSearchTerms: () => [g.intl.string(g.t.lsW5Ev)],
        Component: function () {
            let e = (0, O.bG)([nt.A], () => nt.A.speechRate);
            return (0, p.jsxs)(R.B, {
                gap: 16,
                children: [
                    (0, p.jsx)(i5.A, {
                        label: g.intl.string(g.t.lsW5Ev),
                        description: g.intl.string(g.t.Ci4wMS),
                        markers: ni.P,
                        initialValue: e,
                        defaultValue: 1,
                        stickToMarkers: !0,
                        onValueChange: nn,
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
                    (0, p.jsx)(ns, {}),
                ],
            });
        },
        usePredicate: () => i7.$j,
    }),
    nr = (0, a.zZ)(u.X.AUDIO_AND_SCREEN_READER_CATEGORY, {
        useTitle: () => g.intl.string(g.t.XVR0Rb),
        buildLayout: () => [nl, i4, i6],
    }),
    na = (0, a.AK)(u.X.ACCESSIBILITY_TO_DISPLAY_NAVIGATOR, {
        useSubtitle: () => g.intl.string(g.t.aTfeGK),
        destinationKey: u.X.APPEARANCE_PANEL,
    }),
    no = (0, a.gN)(u.X.COLOR_AND_CONTRAST_RELATED_SETTINGS, { buildLayout: () => [na] });
var nu = i(955572);
let nd = (0, a.zD)(u.X.DESATURATE_CUSTOM_COLORS, {
    useTitle: () => g.intl.string(g.t.OCJg5f),
    useSubtitle: () => g.intl.string(g.t.HEO0s3),
    useValue: () => (0, O.bG)([iK.A], () => iK.A.desaturateUserColors),
    setValue: () => (0, nu.YV)(),
});
var nc = i(652525);
let ng = (0, a.zD)(u.X.ENABLE_CUSTOM_CURSOR, {
        useTitle: () => g.intl.string(g.t["+Isihb"]),
        useSubtitle: () => g.intl.string(g.t.nNZ1Tz),
        useValue: () => (0, O.bG)([iK.A], () => iK.A.enableCustomCursor),
        setValue: (e) => (0, nu.ts)(e),
        usePredicate: () => (0, nc.t)("EnableCustomCursorSetting"),
    }),
    nm = (0, a.zD)(u.X.ENABLE_SWITCH_ICONS, {
        useTitle: () => g.intl.string(g.t["S3z+pV"]),
        useSubtitle: () => g.intl.string(g.t["3QuI9+"]),
        useValue: () => (0, O.bG)([iK.A], () => iK.A.isSwitchIconsEnabled),
        setValue: (e) => (0, nu.Gm)(e),
        hasIcon: !0,
    }),
    nA = (0, a.zD)(u.X.HIGH_CONTRAST_MODE, {
        useTitle: () => g.intl.string(g.t.aZlePv),
        useSubtitle: () => g.intl.string(g.t["v2qF8+"]),
        useValue: () => (0, O.bG)([iK.A], () => iK.A.isHighContrastModeEnabled),
        setValue: (e) => (0, nu.uh)(e ? iK._.HIGH : iK._.DEFAULT),
        getDismissibleBadges: () => [
            { badgeType: eN.Xi.NEW, dismissibleContent: eS.M.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE },
        ],
    });
var nh = i(406360),
    nE = i(742023);
let nS = (0, a.Qx)(u.X.HIGH_DYNAMIC_RANGE, {
        useTitle: () => g.intl.string(g.t.nemtgW),
        useSubtitle: () => g.intl.string(g.t["O/Gjvn"]),
        usePersistentBadge: () => ({ badgeType: eN.Xi.BETA }),
        useOptions: function () {
            return f.useMemo(
                () => [
                    { name: g.intl.string(g.t.D5Fma9), desc: g.intl.string(g.t.Qj75ck), value: "no-limit" },
                    { name: g.intl.string(g.t.ldcGIH), desc: g.intl.string(g.t["+V/bDk"]), value: "standard" },
                ],
                [],
            );
        },
        usePredicate: function () {
            return (0, nh.i)("HDRDynamicRangeSetting");
        },
        setValue: function (e) {
            (0, nu.FU)(e);
        },
        useValue: function () {
            return (0, O.bG)([nE.Ay], () => nE.Ay.hdrDynamicRange);
        },
        useSearchTerms: () => ["HDR", g.intl.string(g.t["O/Gjvn"])],
    }),
    nT = (0, a.Hn)(u.X.ROLE_STYLE, {
        useTitle: () => g.intl.string(g.t.uSOPWm),
        useSubtitle: () => g.intl.string(g.t.u7fFKS),
        useOptions: () => [
            { id: "username", label: g.intl.string(g.t.eDdMzJ), value: "username" },
            { id: "dot", label: g.intl.string(g.t.rdmJp0), value: "dot" },
            { id: "hidden", label: g.intl.string(g.t.Ji2EVJ), value: "hidden" },
        ],
        useValue: () => (0, O.bG)([iK.A], () => iK.A.roleStyle),
        setValue: (e) => (0, nu.IX)(e),
    });
(0, a.Qx)(u.X.ROLE_STYLE, {
    useTitle: () => g.intl.string(g.t.uSOPWm),
    useSubtitle: () => g.intl.string(g.t["86hjzQ"]),
    useOptions: () => [
        { name: g.intl.string(g.t.YEOEi6), value: "username" },
        { name: g.intl.string(g.t.mQaro3), value: "dot" },
        { name: g.intl.string(g.t.Ji2EVJ), value: "hidden" },
    ],
    useValue: () => (0, O.bG)([iK.A], () => iK.A.roleStyle),
    setValue: (e) => (0, nu.IX)(e),
});
let nx = (0, a.sN)(u.X.SATURATION, {
    useTitle: () => g.intl.string(g.t["5PWWCY"]),
    useSubtitle: () => g.intl.string(g.t.xf5S6P),
    markers: q.hH7.SATURATION_INCREMENTS,
    onMarkerRender: (e) => ((100 * e) % 2 == 0 ? `${100 * e}%` : void 0),
    stickToMarkers: !0,
    minValue: 0,
    maxValue: 1,
    getInitialValue: () => iK.A.saturation,
    asValueChanges: (e) => (0, nu.HU)(e),
});
var np = i(839214),
    nf = i(502229);
let nN = (0, np.D)(() => ({ syncEnabled: null, updateTimeout: null })),
    n_ = (0, a.zD)(u.X.SYNC_FORCED_COLORS, {
        useTitle: () => g.intl.string(g.t.cguiec),
        useSubtitle: () => g.intl.format(g.t.GwEVE2, { learnMoreLink: ta.A.getArticleURL(q.MVz.FORCED_COLORS) }),
        useValue: () => {
            let e = (0, O.bG)([iK.A], () => iK.A.syncForcedColors);
            return (
                (0, e7.Ay)(() => {
                    nN.setState({ syncEnabled: iK.A.syncForcedColors });
                }),
                nN.useState((e) => e.syncEnabled) ?? e
            );
        },
        setValue: (e) => {
            let { updateTimeout: t } = nN.getState();
            if (null != t) {
                clearTimeout(t), nN.setState({ syncEnabled: e, updateTimeout: null });
                return;
            }
            if (e === iK.A.syncForcedColors) return void nN.setState({ syncEnabled: e });
            let i = setTimeout(() => {
                (0, nu.D3)(e), nN.setState({ updateTimeout: null });
            }, 150);
            nN.setState({ syncEnabled: e, updateTimeout: i });
        },
        usePredicate: () => (0, nf.D)(),
    }),
    nI = (0, a.zZ)(u.X.COLOR_AND_CONTRAST_CATEGORY, {
        useTitle: () => g.intl.string(g.t.JqvyiY),
        buildLayout: () => [nx, nd, nA, ng, n_, nS, nT, nm, no],
    });
var nC = i(397438),
    nb = i(355097);
function nv(e) {
    return (0, O.bG)([nC.A], () =>
        (function (e) {
            switch (e) {
                case nb._A.REDUCED_MOTION:
                    return g.intl.format(g.t["1dT9V4"], {});
                case nb._A.REDUCED_MOTION_STICKERS:
                    return g.intl.string(g.t["2ExvRu"]);
                default:
                    return;
            }
        })(nC.A.getAppliedOverrideReasonKey(e)),
    );
}
let ny = (0, a.zD)(u.X.ANIMATE_EMOJIS, {
        useTitle: () => g.intl.string(g.t.iIaOlc),
        useSubtitle: () => nv("animateEmoji"),
        useValue: () => c.Sf.useSetting(),
        setValue: (e) => c.Sf.updateSetting(e),
    }),
    nj = (0, a.zD)(u.X.ANIMATE_GIFS, {
        useTitle: () => g.intl.string(g.t.wqsK7q),
        useSubtitle: () => nv("gifAutoPlay"),
        useValue: () => c.kt.useSetting(),
        setValue: (e) => c.kt.updateSetting(e),
    });
var nO = i(823894);
let nR = (0, a.Qx)(u.X.ANIMATE_STICKERS, {
        useTitle: () => g.intl.string(g.t.sBHIh0),
        useSubtitle: () => nv("animateStickers"),
        useOptions: () => [
            { name: g.intl.string(g.t["Xp+X2U"]), value: nO.BJ.ALWAYS_ANIMATE },
            { name: g.intl.string(g.t.IlLT7e), desc: g.intl.string(g.t.bIW9Tl), value: nO.BJ.ANIMATE_ON_INTERACTION },
            { name: g.intl.string(g.t.IGu8x3), value: nO.BJ.NEVER_ANIMATE },
        ],
        useValue: () => c.S0.useSetting(),
        setValue: (e) => c.S0.updateSetting(e),
    }),
    nL = (0, a.zD)(u.X.REDUCED_MOTION, {
        useTitle: () => g.intl.string(g.t.b3XBzg),
        useSubtitle: () => g.intl.format(g.t.XqvxJc, { helpdeskArticle: ta.A.getArticleURL(q.MVz.REDUCED_MOTION) }),
        useValue: () => (0, O.bG)([iK.A], () => iK.A.useReducedMotion),
        setValue: (e) => (0, nu.qz)(e ? "reduce" : "no-preference"),
    }),
    nD = (0, a.zD)(u.X.SYNC_REDUCED_MOTION, {
        useTitle: () => g.intl.string(g.t.oL55A6),
        useValue: () => (0, O.bG)([iK.A], () => "auto" === iK.A.rawPrefersReducedMotion),
        setValue: (e) => (0, nu.qz)(e ? "auto" : iK.A.systemPrefersReducedMotion),
    }),
    nP = (0, a.zZ)(u.X.MOTION_CATEGORY, {
        useTitle: () => g.intl.string(g.t.e3TR1b),
        buildLayout: () => [nL, nD, nj, ny, nR],
    });
var nG = i(688810),
    nU = i(259065),
    nM = i(864386);
let nV = (0, a.zD)(u.X.DISPLAY_NAME_STYLES, {
        useTitle: () => g.intl.string(nM.default["2gFUEw"]),
        useSubtitle: () => {
            let { analyticsLocations: e } = (0, nG.Ay)();
            return g.intl.format(nM.default.aEax6P, {
                onClickOpenModal() {
                    (0, nU.L)({ analyticsLocations: e });
                },
            });
        },
        useValue: () => (0, O.bG)([iK.A], () => iK.A.displayNameStylesEnabled),
        setValue: (e) => (0, nu.Dm)(e),
    }),
    nk = (e) => `${e.toFixed(0)}px`,
    nw = (0, a.sN)(u.X.APPEARANCE_FONT_SCALING, {
        useTitle: () => g.intl.string(g.t.rT3Pq5),
        useSubtitle: () => g.intl.string(g.t.LXUhen),
        markers: q.hH7.FONT_SIZES,
        stickToMarkers: !0,
        minValue: q.hH7.FONT_SIZES["0"],
        maxValue: q.hH7.FONT_SIZES[q.hH7.FONT_SIZES.length - 1],
        useDefaultValue: () => q.hH7.FONT_SIZE_DEFAULT,
        getInitialValue: () => iK.A.fontSize,
        onValueRender: nk,
        onMarkerRender: nk,
        asValueChanges: (e) => (0, nu.XS)(e),
    }),
    nB = (0, a.zD)(u.X.UNDERLINE_LINKS, {
        useTitle: () => g.intl.string(g.t.OLZFB8),
        useSubtitle: () => g.intl.string(g.t.DIX3ke),
        useValue: () => (0, O.bG)([iK.A], () => iK.A.alwaysShowLinkDecorations),
        setValue: (e) => (0, nu.kI)(e),
    }),
    nF = (0, a.zZ)(u.X.TEXT_READABILITY_CATEGORY, {
        useTitle: () => g.intl.string(g.t["bxh/R7"]),
        buildLayout: () => [nw, nB, nV],
    }),
    nz = (0, a.Qx)(u.X.APPEARANCE_UI_DENSITY, {
        useTitle: () => g.intl.string(g.t["C/5V0A"]),
        useSubtitle: () => g.intl.string(g.t.QLZhYk),
        useSearchTerms: () => ["List Spacing"],
        useOptions: () => [
            { name: g.intl.string(g.t["7iegX4"]), value: N.NS.COMPACT },
            { name: g.intl.string(g.t.bBvAEH), value: N.NS.DEFAULT },
            { name: g.intl.string(g.t["4cuYHx"]), value: N.NS.COZY },
        ],
        useValue: () => c.Xi.useSetting(),
        setValue: (e) => {
            e !== N.NS.UNSET_UI_DENSITY && c.Xi.updateSetting(e);
        },
    }),
    nY = "cozy",
    nX = "compact",
    nH = (0, a.Qx)(u.X.APPEARANCE_MESSAGE_DISPLAY_MODE, {
        useTitle: () => g.intl.string(g.t.nKRoPv),
        useSubtitle: () => g.intl.string(g.t.QntEEG),
        useSearchTerms: () => [g.intl.string(g.t.ZEoGMd)],
        useOptions: () => [
            { name: g.intl.string(g.t.Jqj4cZ), value: nY },
            { name: g.intl.string(g.t["1JNcPS"]), value: nX },
        ],
        useValue: () => (c.hH.useSetting() ? nX : nY),
        setValue: (e) => {
            c.hH.updateSetting(e === nX), (0, nu.AC)();
        },
    });
var nK = i(381941);
let nW = (e) => `${e.toFixed(0)}px`,
    nZ = (0, a.sN)(u.X.APPEARANCE_MESSAGE_GROUP_SPACING, {
        useTitle: () => g.intl.string(g.t.Q6lKkg),
        useSubtitle: () => g.intl.string(g.t.p7eUrb),
        markers: nK.qh,
        stickToMarkers: !0,
        minValue: nK.qh["0"],
        maxValue: nK.qh[nK.qh.length - 1],
        useDefaultValue: () => (c.hH.useSetting() ? nK.y5 : nK.ES),
        useExternalValue: () => (0, O.bG)([iK.A], () => iK.A.messageGroupSpacing),
        getInitialValue: () => iK.A.messageGroupSpacing,
        onValueRender: nW,
        onMarkerRender: nW,
        asValueChanges: (e) => {
            switch (e) {
                case 0:
                case 4:
                case 8:
                case 16:
                case 24:
                    (0, nu.AC)(e);
            }
        },
    });
var nq = i(775121);
let nQ = (0, a.sN)(u.X.APPEARANCE_ZOOM, {
        usePredicate: () => ev.isPlatformEmbedded,
        useTitle: () => g.intl.string(g.t.i19n5L),
        useSubtitle: () => g.intl.format(g.t["x9PK/3"], { modKey: nq.A.modKey }),
        markers: q.hH7.ZOOM_SCALES,
        stickToMarkers: !0,
        minValue: q.hH7.ZOOM_SCALES["0"],
        maxValue: q.hH7.ZOOM_SCALES[q.hH7.ZOOM_SCALES.length - 1],
        useDefaultValue: () => q.hH7.ZOOM_DEFAULT,
        getInitialValue: () => iK.A.zoom,
        useExternalValue: () => (0, O.bG)([iK.A], () => iK.A.zoom),
        onValueRender: (e) => `${e.toFixed(0)}%`,
        setValue: (e) => (0, nu.Qp)(e),
        useSearchTerms: () => [g.intl.string(g.t.ip0uSf)],
    }),
    nJ = (0, a.zZ)(u.X.VISUAL_DENSITY_CATEGORY, {
        useTitle: () => g.intl.string(g.t.VKYWk8),
        buildLayout: () => [nz, nH, nZ, nQ],
    }),
    n$ = (0, a.t_)(u.X.ACCESSIBILITY_PANEL, {
        useTitle: () => g.intl.string(g.t.G0neg7),
        buildLayout: () => [nF, nJ, nI, nP, nr],
        decoration: {
            type: eN.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                let e = c.hH.useSetting(),
                    t = c.jW.useSetting(),
                    i = f.useMemo(
                        () => [
                            i2(
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
                            i2(
                                g.intl.formatToPlainString(g.t["4rDfgM"], {
                                    link: "https://discord.com/accessibility",
                                }),
                            ),
                        ],
                        [t],
                    ),
                    n = (0, O.bG)([iK.A], () => iK.A.messageGroupSpacing);
                return (0, p.jsx)(iY.M, {
                    "aria-hidden": !0,
                    children: (0, p.jsxs)("section", {
                        children: [
                            (0, p.jsx)(eA.D, {
                                variant: "text-md/medium",
                                color: "text-muted",
                                className: i$.Vf,
                                children: g.intl.string(g.t.RC22qg),
                            }),
                            (0, p.jsxs)(tx.Ip, {
                                className: i$.VH,
                                children: [
                                    (0, p.jsx)("ol", {
                                        className: i$.DZ,
                                        style: { gap: n },
                                        "aria-label": g.intl.string(g.t.xfjsEV),
                                        children: i.map((t) =>
                                            (0, p.jsx)(
                                                "li",
                                                {
                                                    children: (0, p.jsx)(iQ.A, {
                                                        message: t,
                                                        channel: i0,
                                                        compact: e,
                                                        author: { ...(0, iq.p_)(t), colorString: "#dd80f4" },
                                                    }),
                                                },
                                                t.id,
                                            ),
                                        ),
                                    }),
                                    (0, p.jsxs)("div", {
                                        className: i$.Jb,
                                        children: [
                                            (0, p.jsx)("div", {
                                                className: i$.HD,
                                                children: i1.map((e) => {
                                                    let { status: t, discriminator: i, mobile: n = !1 } = e;
                                                    return (0, p.jsx)(
                                                        iX.eu,
                                                        {
                                                            status: t,
                                                            isMobile: n,
                                                            size: iH._3.SIZE_32,
                                                            src: iJ.Ay.getDefaultAvatarURL(void 0, i),
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
    n0 = (0, a.i4)(u.X.ACCESSIBILITY_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.G0neg7),
        icon: iz.c,
        useMenu: i3.A,
        buildLayout: () => [n$],
    });
var n1 = i(650809),
    n2 = i(636537),
    n3 = i(228366),
    n6 = i(74396),
    n4 = i(269880),
    n7 = i(55619),
    n5 = i(777666),
    n8 = i(574381),
    n9 = i(314116),
    se = i(19575),
    st = i(546385);
let si = (0, a.E2)(u.X.HARDWARE_ACCELERATION, {
    usePredicate: () => n8.Av && !(0, n8.cX)(),
    useSearchTerms: () => [g.intl.string(g.t["/HIxyY"]), g.intl.string(g.t.B0hqpb)],
    Component: function () {
        let [e] = f.useState(() => se.Ay.getEnableHardwareAcceleration()),
            t = g.intl.string(g.t["/HIxyY"]),
            i = g.intl.string(g.t.B0hqpb);
        return (0, p.jsxs)(R.B, {
            children: [
                (0, p.jsx)(L.d, { label: t, description: i, checked: e, onChange: sn }),
                !e && (0, p.jsx)(st.A, { look: st.k.WARNING, children: g.intl.string(g.t.j7S6IX) }),
            ],
        });
    },
});
function sn(e) {
    let t = e ? g.intl.format(g.t.LYXRxL, {}) : g.intl.format(g.t.uDP3Kz, {});
    (0, n9.A)({
        title: g.intl.string(g.t.aqpAvn),
        subtitle: t,
        confirmText: g.intl.string(g.t.vT7ckk),
        onConfirm: () => {
            se.Ay.setEnableHardwareAcceleration(e);
        },
    });
}
let ss = (0, a.zD)(u.X.SHOW_GAME_LIBRARY, {
        usePredicate: () => (0, O.bG)([tg.A], () => tg.A.hasLibraryApplication()),
        useTitle: () => g.intl.string(g.t.fi3UQN),
        useSubtitle: () => g.intl.string(g.t["8mYp37"]),
        useValue: () => !c.l_.useSetting(),
        setValue: (e) => c.l_.updateSetting(!e),
    }),
    sl = (0, a.zZ)(u.X.APPEARANCE_ADVANCED_CATEGORY, {
        useTitle: () => g.intl.string(g.t["8/udY0"]),
        buildLayout: () => [si, ss],
    });
var sr = i(565645);
let sa = (0, a.zD)(u.X.CHAT_EMOJI_CONVERT_EMOTICONS, {
        useTitle: () => g.intl.string(g.t["79qal8"]),
        useSubtitle: () =>
            g.intl.format(g.t.GejoQK, { emojiHook: (e, t) => (0, p.jsx)(sr.A, { emojiName: "\uD83D\uDE42" }, t) }),
        useValue: c.j7.useSetting,
        setValue: c.j7.updateSetting,
    }),
    so = (0, a.zD)(u.X.ENABLE_SEND_BUTTON, {
        useTitle: () => g.intl.string(g.t["I/5LyL"]),
        useValue: () => (0, O.bG)([iK.A], () => iK.A.isSubmitButtonEnabled),
        setValue: () => (0, nu.Xt)(),
    }),
    su = (0, a.zD)(u.X.CHAT_TEXT_BOX_PREVIEWS, {
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
    sd = (0, a.zD)(u.X.CHAT_STICKERS_AUTOCOMPLETE, {
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
    sc = (0, a.zZ)(u.X.APPEARANCE_CHAT_BOX_CATEGORY, {
        useTitle: () => g.intl.string(g.t.Ob7VMB),
        useSearchTerms: () => [g.intl.string(g.t.onqU6o)],
        buildLayout: () => [su, sa, sd, so],
    });
var sg = i(526162),
    sm = i(793943),
    sA = i(792656),
    sh = i(830543),
    sE = i(785007),
    sS = i(806932),
    sT = i(915089),
    sx = i(174197),
    sp = i(788868);
let sf = (0, a.E2)(u.X.APPEARANCE_IN_APP_ICON, {
    useSearchTerms: () => [g.intl.string(g.t.gnwxvT)],
    Component: function () {
        let e = (0, sT.GV)(),
            { ref: t, ...i } = (0, sE._u)({ orientation: "horizontal", labelledBy: e }),
            n = (0, O.bG)([sg.A], () => sg.A.isUpsellPreview);
        return (
            (0, eg.Ay)(() => {
                n &&
                    Y.default.track(q.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: sp.e.APP_ICON_UPSELL,
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
                    children: (0, p.jsx)(sS.m, { disabled: n, size: sx.N8.SIZE_48 }),
                }),
            })
        );
    },
});
function sN() {
    (0, sm.nf)(sm.HP.APP_ICON), (0, sh.default)();
}
function s_() {
    return (0, p.jsx)(sA.A, {
        subscriptionTier: sp.pe.TIER_2,
        defaultTextOverride: g.intl.string(g.t.mr4K7D),
        premiumModalAnalyticsLocation: { object: q.ZSU.BUTTON_CTA, objectType: q.AnalyticsObjectTypes.BUY },
        fullWidth: !0,
    });
}
let sI = (0, a.zZ)(u.X.APPEARANCE_IN_APP_ICON_CATEGORY, {
        useTitle: () => g.intl.string(g.t.RPh2ou),
        useSubtitle: () => g.intl.string(g.t.IgENJo),
        useHeaderDecoration: function () {
            let e = (0, O.bG)([sg.A], () => sg.A.isUpsellPreview);
            return f.useMemo(() => {
                let t = [];
                return (
                    t.push({
                        id: "preview-icon-button",
                        type: eN.UV.BUTTON,
                        text: g.intl.string(g.t["6acvnZ"]),
                        onClick: sN,
                    }),
                    e && t.push({ id: "upsell-button", type: eN.UV.STRONGLY_DISCOURAGED_CUSTOM, button: s_ }),
                    { type: eN.WX.BUTTON_GROUP, buttons: t }
                );
            }, [e]);
        },
        buildLayout: () => [sf],
    }),
    sC = (0, a.AK)(u.X.APPEARANCE_CHAT_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => g.intl.string(g.t.UDr3Iy),
        useSearchTerms: () => [g.intl.string(g.t.UDr3Iy)],
        destinationKey: u.X.ACCESSIBILITY_PANEL,
    }),
    sb = (0, a.gN)(u.X.APPEARANCE_CHAT_RELATED_SETTINGS, { buildLayout: () => [sC] });
var sv = i(379587),
    sy = i(452027),
    sj = i(976860),
    sO = i(474090),
    sR = i(181079),
    sL = i(422258),
    sD = i(668267),
    sP = i(313281),
    sG = i(335993);
let sU = ta.A.getArticleURL(q.MVz.FAVORITES_GUILD);
function sM() {
    let { analyticsLocations: e } = (0, nG.Ay)(eM.A.USER_SETTINGS_FAVORITES),
        t = f.useCallback(() => {
            (0, sD.mv)("settings_page"), (0, sj.uh)(q.YYv), (0, sh.default)();
        }, []);
    return (0, p.jsx)(nG.f5, {
        value: e,
        children: (0, p.jsx)(sy.D, {
            label: g.intl.string(sG.default.OT1NK5),
            description: g.intl.format(sG.default.GR2KOG, { helpCenterLink: sU }),
            layout: "horizontal-responsive",
            badge: "beta",
            children: (0, p.jsxs)(R.B, {
                direction: "horizontal",
                gap: 8,
                fullWidth: !1,
                children: [
                    (0, p.jsx)(eh.$, { variant: "secondary", text: g.intl.string(sG.default["7WwLnr"]), onClick: t }),
                    (0, p.jsx)(sA.A, {
                        subscriptionTier: sp.pe.TIER_2,
                        defaultTextOverride: g.intl.string(sG.default["20sYUU"]),
                    }),
                ],
            }),
        }),
    });
}
let sV = (0, a.E2)(u.X.CHAT_FAVORITES_TOGGLE, {
        usePredicate: () => (0, sv.m)({ location: "FavoritesGuildToggle" }).enabled,
        useSearchTerms: () => [g.intl.string(sG.default.OT1NK5)],
        Component: function () {
            let e = (0, O.bG)([sR.A], () => sR.A.favoriteGuildEnabled),
                t = (0, O.bG)([t3.default], () => {
                    let e = t3.default.getCurrentUser();
                    return null != e && sO.Ay.isPremiumExactly(e, sp.PremiumTypes.TIER_2);
                }),
                i = (0, sP.DZ)(),
                n = f.useCallback(
                    (e) => {
                        (0, sL.tV)(e, "settings_page"), !e && i && (0, sj.pX)(q.BVt.ME);
                    },
                    [i],
                );
            return t
                ? (0, p.jsx)(L.d, {
                      checked: e,
                      description: g.intl.format(sG.default.GR2KOG, { helpCenterLink: sU }),
                      onChange: n,
                      label: g.intl.string(sG.default.OT1NK5),
                      badge: "beta",
                  })
                : (0, p.jsx)(sM, {});
        },
    }),
    sk = (0, a.zD)(u.X.CHAT_INLINE_MEDIA_LINKS, {
        useTitle: () => g.intl.string(g.t.U47N1p),
        useValue: c.hD.useSetting,
        setValue: c.hD.updateSetting,
    }),
    sw = (0, a.zD)(u.X.CHAT_INLINE_MEDIA_UPLOADS, {
        useTitle: () => g.intl.string(g.t.VP11No),
        useValue: c.X6.useSetting,
        setValue: c.X6.updateSetting,
    }),
    sB = (0, a.FW)(u.X.CHAT_INLINE_FIELD_SET, {
        useTitle: () => g.intl.string(g.t["9nyle0"]),
        buildLayout: () => [sk, sw],
    }),
    sF = (0, a.zD)(u.X.CHAT_EMBEDS_RENDER_EMBEDS, {
        useTitle: () => g.intl.string(g.t["5bK9vw"]),
        useValue: c.rs.useSetting,
        setValue: c.rs.updateSetting,
    }),
    sz = (0, a.zD)(u.X.CHAT_EMOJI_RENDER_REACTIONS, {
        useTitle: () => g.intl.string(g.t["zge/fP"]),
        useValue: c.jW.useSetting,
        setValue: c.jW.updateSetting,
    });
var sY = i(817281);
let sX = (0, a.zD)(u.X.APPEARANCE_DISPLAY_COMPACT_AVATARS, {
        useTitle: () => g.intl.string(g.t.JgjNG3),
        useSubtitle: () => {
            if (!c.hH.useSetting())
                return g.intl.format(g.t["31PRaj"], {
                    a11yHook: (e, t) =>
                        (0, p.jsx)(
                            M.D,
                            {
                                tag: "a",
                                onClick: () => (0, ey.openUserSettings)(u.X.APPEARANCE_MESSAGE_DISPLAY_MODE),
                                children: e,
                            },
                            t,
                        ),
                });
        },
        useDisabled: () => !c.hH.useSetting(),
        useValue: () => {
            let e = (0, O.bG)([nE.Ay], () => nE.Ay.displayCompactAvatars);
            return !c.hH.useSetting() || e;
        },
        setValue: (e) => {
            sY.Ay.updatedUnsyncedSettings({ displayCompactAvatars: e });
        },
    }),
    sH = (0, a.Hn)(u.X.CHAT_SPOILERS_SHOW_SPOILERS, {
        useTitle: () => g.intl.string(g.t.QgwmVz),
        useOptions: () => [
            { value: q.P6Q.ON_CLICK, id: q.P6Q.ON_CLICK, label: g.intl.string(g.t["KFH/me"]) },
            { value: q.P6Q.ALWAYS, id: q.P6Q.ALWAYS, label: g.intl.string(g.t.Pe1RbL) },
            { value: q.P6Q.IF_MODERATOR, id: q.P6Q.IF_MODERATOR, label: g.intl.string(g.t.K5VTBE) },
        ],
        useValue: c.gs.useSetting,
        setValue: c.gs.updateSetting,
    }),
    sK = (0, a.zD)(u.X.CHAT_THREADS_SPLIT_VIEW, {
        useTitle: () => g.intl.string(g.t.AInv5m),
        useValue: c.SY.useSetting,
        setValue: c.SY.updateSetting,
    }),
    sW = (0, a.zZ)(u.X.APPEARANCE_MESSAGES_CATEGORY, {
        useTitle: () => g.intl.string(g.t.OIgYlQ),
        useSearchTerms: () => [g.intl.string(g.t["/VQax8"])],
        buildLayout: () => [sB, sF, sz, sH, sK, sX, sV, sb],
    });
var sZ = i(753806),
    sq = i(145331);
let sQ = (0, a.Qx)(u.X.MESSAGE_SEARCH_DEFAULT_DM_SEARCH_BEHAVIOR, {
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
            t ? sZ.A.cleanUpPrivateChannelSearchState() : sZ.A.cleanUpSearchState({ type: q.I4_.DMS }),
                (0, sq._k)({
                    prevIsCrossDMSettingEnabled: c.Hu.getSetting(),
                    isCrossDMSettingEnabled: t,
                    location: sq.vy.USER_SETTINGS,
                }),
                c.Hu.updateSetting(t);
        },
    }),
    sJ = (0, a.zZ)(u.X.APPEARANCE_SEARCH_CATEGORY, {
        useTitle: () => g.intl.string(g.t["5h0QOP"]),
        buildLayout: () => [sQ],
    }),
    s$ = (0, a.zD)(u.X.STREAMING_AUTO_STREAMER_MODE, {
        useTitle: () => g.intl.string(g.t.IxjaoF),
        useValue: function () {
            return (0, O.bG)([e_.A], () => {
                let { autoToggle: e } = e_.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            n7.A.update({ autoToggle: e });
        },
        usePredicate: function () {
            return n8.Av;
        },
    }),
    s0 = (0, a.zD)(u.X.STREAMING_STREAMER_MODE, {
        useTitle: () => g.intl.string(g.t.TGNg6T),
        useSubtitle: () => g.intl.string(g.t["4nXLnE"]),
        useValue: function () {
            return (0, O.bG)([e_.A], () => {
                let { enabled: e } = e_.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            n7.A.update({ enabled: e });
        },
    });
var s1 = i(77729),
    s2 = i(349230);
let s3 = [],
    s6 = (0, a.Hn)(u.X.STREAMER_MODE_HIDE_OVERLAY_WIDGETS, {
        selectionMode: "multiple",
        useTitle: () => g.intl.string(g.t.VCDSLW),
        useSearchTerms: () => [g.intl.string(g.t.VCDSLW)],
        usePredicate: () => {
            let e = (0, ej.b_)(),
                t = (0, ep.Mn)("StreamerModeSettings");
            return e && t;
        },
        useOptions: function () {
            return f.useMemo(() => {
                let e = [];
                for (let [t, i] of Object.entries(s2.A))
                    null != i.streamerModeLabel &&
                        (null == i.predicate || i.predicate()) &&
                        e.push({ id: t, value: t, label: i.streamerModeLabel() });
                return e;
            }, []);
        },
        useValue: function () {
            return (0, O.bG)([e_.A], () => e_.A.getSettings().disabledOverlayWidgets ?? s3);
        },
        setValue: (e) => n7.A.update({ disabledOverlayWidgets: e }),
        closeOnSelect: !1,
        wrapTags: !0,
    }),
    s4 = (0, a.zD)(u.X.STREAMER_MODE_HIDE_PERSONAL_INFORMATION, {
        useTitle: () => g.intl.string(g.t.LSBUGR),
        useValue: () =>
            (0, O.bG)([e_.A], () => {
                let { hidePersonalInformation: e } = e_.A.getSettings();
                return e;
            }),
        setValue: (e) => n7.A.update({ hidePersonalInformation: e }),
    }),
    s7 = (0, a.zD)(u.X.STREAMER_MODE_HIDE_INVITE_LINKS, {
        useTitle: () => g.intl.string(g.t.uWBOri),
        useValue: () =>
            (0, O.bG)([e_.A], () => {
                let { hideInstantInvites: e } = e_.A.getSettings();
                return e;
            }),
        setValue: (e) => n7.A.update({ hideInstantInvites: e }),
    }),
    s5 = (0, a.zD)(u.X.STREAMER_MODE_DISABLE_SOUNDS, {
        useTitle: () => g.intl.string(g.t.OrqYDP),
        useValue: () =>
            (0, O.bG)([e_.A], () => {
                let { disableSounds: e } = e_.A.getSettings();
                return e;
            }),
        setValue: (e) => n7.A.update({ disableSounds: e }),
    }),
    s8 = (0, a.zD)(u.X.STREAMER_MODE_DISABLE_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.sUAbLd),
        useValue: () =>
            (0, O.bG)([e_.A], () => {
                let { disableNotifications: e } = e_.A.getSettings();
                return e;
            }),
        setValue: (e) => n7.A.update({ disableNotifications: e }),
    }),
    s9 = (0, a.zD)(u.X.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE, {
        useTitle: () => g.intl.string(g.t["iA81+a"]),
        useSubtitle: () => g.intl.string(g.t.P4vj0h),
        useValue: () =>
            (0, O.bG)([e_.A], () => {
                let { enableContentProtection: e } = e_.A.getSettings();
                return e;
            }),
        setValue: (e) => n7.A.update({ enableContentProtection: e }),
        usePredicate: () => s1.A?.window?.supportsContentProtection?.() ?? !1,
    }),
    le = (0, a.FW)(u.X.STREAMER_MODE_OPTIONS_LIST, {
        variant: "compact",
        useTitle: () => g.intl.string(g.t.xYhOEh),
        buildLayout: () => [s4, s7, s5, s8, s9, s6],
    }),
    lt = (0, a.zZ)(u.X.STREAMER_MODE_CATEGORY, {
        useTitle: () => g.intl.string(g.t.S5GfOW),
        buildLayout: () => [s0, s$, le],
    });
var li = i(47671),
    ln = i(665267),
    ls = i(414133),
    ll = i(412848);
let lr = (0, a.Hn)(u.X.APPEARANCE_GUILD_THEME_DEFAULT_PREFERENCE, {
        useTitle: () => g.intl.string(g.t.Q7mm4g),
        useSearchTerms: () => [g.intl.string(ll.default["/6NbRv"])],
        useOptions: () => [
            { id: "guild", label: g.intl.string(g.t["hrS/Pc"]), value: N.tI.GUILD },
            { id: "personal", label: g.intl.string(g.t.mlvXIq), value: N.tI.PERSONAL },
        ],
        useValue: () => c.zY.useSetting(),
        setValue: c.zY.updateSetting,
        usePredicate: () => (0, ls.OS)("GuildThemeDefaultPreferenceSetting"),
    }),
    la = (0, a.zD)(u.X.SYNC_PROFILE_THEMES, {
        useTitle: () => g.intl.string(g.t.C00w4l),
        useValue: () => (0, O.bG)([iK.A], () => iK.A.syncProfileThemeWithUserTheme),
        setValue: () => (0, nu.M1)(),
    });
var lo = i(284016);
let lu = (0, a.zD)(u.X.APPEARANCE_SYNC_THEME, {
    useTitle: () => g.intl.string(g.t["/B+kEV"]),
    useSearchTerms: () => [g.intl.string(g.t.Ksh3ik)],
    useValue: function () {
        return (0, O.bG)([lo.A], () => !1 !== lo.A.shouldSync("appearance"));
    },
    setValue: function (e) {
        var t;
        let i = iu.A.theme,
            n = li.A.gradientPreset?.id ?? null,
            s = c.eh.getSetting()?.customUserThemeSettings != null;
        (t = q.HAw.SYNC_ACROSS_CLIENTS_TOGGLED),
            n3.h.dispatch({
                type: "TRACK",
                event: t,
                properties: { is_sync_enabled: e, base_theme: i, client_theme: n, has_custom_theme: s },
            }),
            sY.Ay.setShouldSyncAppearanceSettings(e);
    },
});
var ld = i(98596);
let lc = (0, a.AK)(u.X.APPEARANCE_THEME_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => g.intl.string(g.t.nhVQDJ),
        useSearchTerms: () => [g.intl.string(g.t.nhVQDJ)],
        destinationKey: u.X.ACCESSIBILITY_PANEL,
    }),
    lg = (0, a.gN)(u.X.APPEARANCE_THEME_RELATED_SETTINGS, { buildLayout: () => [lc] }),
    lm = (0, a.zZ)(u.X.APPEARANCE_THEME_CATEGORY, {
        useTitle: () => g.intl.string(g.t.Ksh3ik),
        useInlineNotice: function () {
            return (0, O.bG)([iK.A], () => iK.A.useForcedColors)
                ? {
                      type: eN.lT.INLINE_NOTICE,
                      noticeType: "info",
                      useText: () =>
                          (0, nf.D)()
                              ? g.intl.format(g.t.Jae48E, {
                                    onClick: () => {
                                        (0, ey.openUserSettings)(u.X.SYNC_FORCED_COLORS);
                                    },
                                })
                              : g.intl.string(g.t.AUMSZP),
                  }
                : null;
        },
        useHeaderDecoration: function () {
            return (0, O.bG)([li.A, iK.A], () => iK.A.useForcedColors || li.A.isPreview)
                ? null
                : {
                      type: eN.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "open-client-themes-button",
                              type: eN.UV.BUTTON,
                              text: g.intl.string(g.t["E+COuA"]),
                              onClick: ln.J3,
                          },
                      ],
                  };
        },
        buildLayout: () => [ld.k, lu, la, lr, lg],
    }),
    lA = (0, a.t_)(u.X.APPEARANCE_PANEL, {
        initialize: function () {
            n6.A.isFetching() ||
                (n3.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_START" }),
                n2.Bo.get({ url: q.Rsh.USERS_ME_CUSTOM_THEMES, oldFormErrors: !0, rejectWithError: !0 })
                    .then((e) => {
                        n3.h.dispatch({
                            type: "SAVED_CUSTOM_THEMES_FETCH_SUCCESS",
                            themes: e.body?.custom_themes ?? [],
                        });
                    })
                    .catch((e) => {
                        n3.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_FAILURE", error: e });
                    }));
        },
        useTitle: () => g.intl.string(g.t["iHH+ky"]),
        buildLayout: () => [lm, sI, sW, sc, sJ, lt, sl],
    }),
    lh = [
        { badgeType: eN.Xi.NEW, dismissibleContent: eS.M.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE },
        {
            badgeType: eN.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: eS.M.FAVORITES_GUILD_NEW_BADGE,
            StronglyDiscouragedCustomComponent: function () {
                return (0, p.jsx)(n5.JI, { text: g.intl.string(g.t.y2b7CA) });
            },
        },
    ],
    lE = (0, a.i4)(u.X.APPEARANCE_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["iHH+ky"]),
        icon: n1.B,
        useMenu: function () {
            let e,
                t,
                i,
                n = (0, n4.A)(),
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
                            n7.A.setEnabled(!i);
                        },
                        checked: i,
                    }));
            return f.useMemo(() => {
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
var lS = i(410767),
    lT = i(691885),
    lx = i(408278),
    lp = i(241326),
    lf = i(885574),
    lN = i(475358),
    l_ = i(28647),
    lI = i(337371),
    lC = i(695366),
    lb = i(761853),
    lv = i(364094);
function ly(e) {
    let { game: t, application: i } = e;
    return null == t || null == i
        ? (0, p.jsx)("div", {
              className: lv.zc,
              children: (0, p.jsx)(lC.E, { size: "sm", color: w.A.colors.TEXT_FEEDBACK_WARNING }),
          })
        : (0, p.jsxs)("div", {
              className: lv.nt,
              children: [
                  (0, p.jsx)(e5.A, { game: i, pid: t.pid, size: e5.M.MEDIUM }),
                  (0, p.jsx)("div", {
                      className: lv.Am,
                      children: (0, p.jsx)(lC.E, { size: "sm", color: w.A.colors.TEXT_FEEDBACK_WARNING }),
                  }),
              ],
          });
}
function lj(e) {
    let t = (0, O.bG)([lb.Ay], () => lb.Ay.getMode()),
        { runningGame: i, runningGameApplication: n } = e$();
    null == i || i.elevated || ((i = void 0), (n = void 0));
    let s = (0, to.NP)(),
        l = s && null != i && t === q.TBI.PUSH_TO_TALK;
    return { canPrompt: "voice" === e ? l : s, runningGame: i, runningGameApplication: n };
}
function lO(e) {
    let { className: t, sourcePage: i } = e,
        { canPrompt: n, runningGame: s, runningGameApplication: l } = lj(i);
    return n
        ? (0, p.jsxs)("div", {
              className: ew()(lv.kL, t),
              children: [
                  (0, p.jsx)(ly, { game: s, application: l }),
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
    lB = i(926140),
    lF = i(746642);
function lz() {}
let lY = [lB.rD.VOICE_CHANNEL];
function lX(e) {
    e.setOptions({ voiceChannelGuildFilter: null }), e.setLimit(1 / 0);
}
function lH() {
    return (0, p.jsx)("div", {
        className: lF.i1,
        children: (0, p.jsx)(V.E, {
            variant: "text-md/medium",
            color: "text-muted",
            className: lF.GN,
            children: g.intl.string(g.t.zHjCd1),
        }),
    });
}
function lK(e) {
    let { keybind: t, className: i } = e,
        n = f.useRef(t);
    f.useEffect(() => {
        n.current = t;
    });
    let [s, l] = f.useState(t.params?.channelId ?? void 0),
        r = f.useCallback(() => {
            (0, _.openModalLazy)(
                async () => (e) =>
                    (0, p.jsx)(lW, {
                        ...e,
                        onSelect: (e) => {
                            l(e), tO.A.setKeybind({ ...n.current, params: { channelId: e } });
                        },
                    }),
            );
        }, []);
    return (0, p.jsx)("div", {
        className: ew()(lF.a8, i),
        children: (0, p.jsx)(sy.D, {
            label: g.intl.string(g.t.q4JpM8),
            children: (0, p.jsxs)(lU.A, {
                align: lU.A.Align.STRETCH,
                children: [
                    (0, p.jsx)("div", { className: lF.$X, children: (0, p.jsx)(lZ, { channelId: s }) }),
                    (0, p.jsx)(lU.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, p.jsx)(eh.$, { variant: "primary", text: g.intl.string(g.t.Dm8O4e), onClick: r }),
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
        r = f.useId(),
        a = f.useRef(null),
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
                [l, r] = f.useState(""),
                [a, o] = f.useState(lG),
                u = f.useCallback((e, t) => {
                    "" === (t = t.trim()).trim() ? o(lG) : o(e);
                }, []);
            f.useEffect(
                () =>
                    lD.A.addRouteChangeListener(() => {
                        r("");
                    }),
                [],
            );
            let [d] = f.useState(() => new lP.A(u, i, void 0, n));
            return (
                f.useEffect(() => {
                    t ? (s?.(d), d.createSearchContext()) : (d.clean(), r(""));
                }, [t, d, s]),
                {
                    queryResults: a,
                    query: l,
                    updateQuery: f.useCallback(
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
            let [t, i] = f.useState(0),
                n = f.useRef(e);
            return (
                e !== n.current && 0 !== t && i(0),
                f.useEffect(() => {
                    n.current = e;
                }),
                { focusedIndex: t, setFocusedIndex: i }
            );
        })(o);
    f.useEffect(() => {
        let { current: e } = a;
        null == e || e.isItemVisible(0, m, !0) || e.scrollToIndex({ section: 0, row: m });
    }, [m]);
    let h = null != c ? c.length : d.length,
        E = (() => {
            if (null != c) return c[m]?.id;
            let e = d[m];
            if (e?.type === lB.rD.VOICE_CHANNEL) return e.record.id;
        })(),
        S =
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
                                  if (e?.type === lB.rD.VOICE_CHANNEL) return e.record;
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
                                      null != r ? (0, p.jsx)("div", { className: lF.J5, children: r.name }) : null,
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
                                if (e?.type === lB.rD.VOICE_CHANNEL) return e.record;
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
        listProps: S,
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
              className: lF.GN,
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
              children: null != s ? (0, p.jsx)("div", { className: lF.J5, children: s.name }) : null,
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
    let e = (0, O.bG)([eI.Ay], () => eI.Ay.getState()),
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
var l1 = i(581133);
function l2(e) {
    let { children: t } = e;
    return t([lI.Q_.MESSAGE, lI.Q_.NAVIGATION, lI.Q_.DND, lI.Q_.CHAT, lI.Q_.VOICE_AND_VIDEO, lI.Q_.MISCELLANEOUS]);
}
class l3 extends f.PureComponent {
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
                            children: (0, p.jsx)(lT.l, {
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
                            children: (0, p.jsx)(sy.D, {
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
                                children: (0, p.jsx)(lx.K, {
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
class l6 extends f.PureComponent {
    handleAddKeybind = () => {
        tO.A.addKeybind();
    };
    renderKeybinds(e, t, i) {
        return e.map((n, s) =>
            (0, p.jsxs)(
                f.Fragment,
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
                (0, p.jsx)(lf.m, { size: "xs", color: w.A.colors.ICON_SUBTLE }),
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
                    className: iI.IE,
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
        i = eR()((0, lI.Bx)())
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
                                children: (0, p.jsx)(lN.e, { shortcut: l_.z.binds["0"], className: l1.LE }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, p.jsx)(l2, {
                children: (e) =>
                    (0, p.jsx)(p.Fragment, {
                        children: e.map((e, t) => {
                            let n = (0, lI.Gm)(e),
                                s = (0, lI.zF)(e),
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
                                                f.Fragment,
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
                                                                            lN.e,
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
let l7 = (0, a.E2)(u.X.KEYBINDS_SETTING, {
        Component: function () {
            f.useEffect(
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
    l5 = (0, a.zZ)(u.X.KEYBINDS_CATEGORY, { buildLayout: () => [l7] }),
    l8 = (0, a.t_)(u.X.KEYBINDS_PANEL, { useTitle: () => g.intl.string(g.t.T9DA2K), buildLayout: () => [l5] }),
    l9 = (0, a.i4)(u.X.KEYBINDS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.T9DA2K),
        icon: lS.F,
        buildLayout: () => [l8],
    });
var re = i(37646),
    rt = i(434404);
let ri = (0, a.t_)(u.X.LANGUAGE_AND_TIME_PANEL, {
        useTitle: () => g.intl.string(g.t.KyFVyi),
        buildLayout: () => [rt.F],
    }),
    rn = (0, a.i4)(u.X.LANGUAGE_AND_TIME_SIDEBAR_ITEM, {
        icon: re.U,
        useTitle: () => g.intl.string(g.t.KyFVyi),
        buildLayout: () => [ri],
    }),
    rs = (0, np.D)(() => ({ openOnStartup: !0, startMinimized: !1, minimizeToTray: !0 }));
async function rl() {
    let e = await se.Ay.getOpenOnStart(),
        t = await se.Ay.getSetting("START_MINIMIZED", !1),
        i = await se.Ay.getSetting("MINIMIZE_TO_TRAY", !0);
    rs.setState({ openOnStartup: e, startMinimized: t, minimizeToTray: i });
}
let rr = (0, a.zD)(u.X.OS_OPEN_ON_STARTUP, {
        useTitle: () => g.intl.string(g.t["3BeZti"]),
        usePredicate: () => n8.Av && !(0, n8.cX)(),
        useValue: () => rs.useState((e) => e.openOnStartup),
        setValue: function (e) {
            rs.setState({ openOnStartup: e }), se.Ay.send("TOGGLE_OPEN_ON_STARTUP", e);
        },
        initialize: () => {
            se.Ay.getOpenOnStart().then((e) => rs.setState({ openOnStartup: e }));
        },
    }),
    ra = (0, a.zD)(u.X.OS_MINIMIZE_TO_TRAY, {
        useTitle: () => g.intl.string(g.t.dJ5MUh),
        useSubtitle: () => g.intl.string(g.t.nQavHr),
        usePredicate: () => n8.Av && !(0, n8.cX)(),
        useValue: () => rs.useState((e) => e.minimizeToTray),
        setValue: function (e) {
            rs.setState({ minimizeToTray: e }), se.Ay.send("TOGGLE_MINIMIZE_TO_TRAY", e);
        },
        initialize: () => {
            se.Ay.getSetting("MINIMIZE_TO_TRAY", !0).then((e) => rs.setState({ minimizeToTray: e }));
        },
    });
var ro = i(117695);
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
    rc = (0, a.E2)(u.X.OS_SYSTEM_SERVICE, {
        useSearchTerms: () => [g.intl.string(g.t.roHq80)],
        Component: function () {
            let [e, t] = f.useState(!1),
                [i, n] = f.useState(() => (0, to.TC)()),
                s = (0, o.ri)("SystemService"),
                l = (0, O.bG)([eQ.Ay], () => eQ.Ay.getSystemServiceStatus("input-service")),
                r = f.useCallback(async () => {
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
    rg = (0, a.zZ)(u.X.LINUX_CATEGORY, {
        buildLayout: () => [rr, ra, rc],
        initialize: () => {
            rl();
        },
    }),
    rm = (0, a.t_)(u.X.LINUX_PANEL, { useTitle: () => g.intl.string(g.t["7pPjTW"]), buildLayout: () => [rg] }),
    rA = (0, a.i4)(u.X.LINUX_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["7pPjTW"]),
        icon: e2.k,
        usePredicate: () => ev.isPlatformEmbedded && (0, ev.isLinux)(),
        buildLayout: () => [rm],
    });
var rh = i(3137),
    rE = i(369606),
    rS = i(604121),
    rT = i(725951),
    rx = i(400492),
    rp = i(669067),
    rf = i(115063),
    rN = i(754692),
    r_ = i(927018),
    rI = i(512599),
    rC = i(532197),
    rb = i(874486),
    rv = i(989349),
    ry = i.n(rv),
    rj = i(58703),
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
        g = ry()(i),
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
                            children: (0, rj.mk)(g),
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
        n = f.useMemo(() => Object.values(i).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [i]),
        s = f.useMemo(
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
                    (0, p.jsx)(rC.A, { direction: rC.A.Directions.LEFT, className: rD.Kk }),
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
    rB = (0, eO.range)(1, 11),
    rF = (0, eO.range)(1, 26),
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
        s = (0, O.bG)([iK.A], () => iK.A.useReducedMotion);
    return (0, p.jsx)(L.d, {
        label: g.intl.string(g.t.vuiXm9),
        description: g.intl.string(g.t.KuYbWN),
        checked: t,
        onChange: (e) => {
            e || (0, rN._)(r_.sn.DISABLE_POGGERMODE),
                e && (!i || s)
                    ? (0, n9.A)({
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
                        markers: rF,
                        stickToMarkers: !0,
                        minValue: rF[0],
                        maxValue: rF[rF.length - 1],
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
        r = (0, O.bG)([iK.A], () => iK.A.useReducedMotion),
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
                                (0, rN._)(r_.sn.MORE),
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
                            t({ enabled: !1, settingsVisible: !1 }), (0, sh.default)();
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
        [s, l] = f.useState({ x: 0, y: 0 }),
        r = (0, rG.A)(),
        a = (e, t) => {
            var l, a, o, u, d, c, g, m;
            if (
                (e.enabled &&
                    !1 === n.enabled &&
                    (i(!0),
                    (0, rx.Ak)("poggermode_enabled"),
                    (0, rf.fO)({ duration: 2e3, intensity: e.shakeIntensity ?? n.shakeIntensity })),
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
            1 === t && h && (0, rf.fO)({ duration: 1e3, intensity: e.shakeIntensity ?? n.shakeIntensity });
        },
        o = (e) => {
            l({ x: e.clientX, y: e.clientY });
        };
    return (
        f.useEffect(
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
let r0 = (e) => (0 === e ? rT.f.LEFT : rT.f.RIGHT),
    r1 = (0, a.E2)(u.X.POGGERMODE_SETTING, {
        Component: function () {
            let [e, t] = f.useState(0),
                [i, n] = f.useState(r0(e)),
                [s, l] = f.useState(!1),
                r = (0, O.bG)([iK.A], () => iK.A.useReducedMotion),
                a = s && !r;
            return (
                f.useEffect(() => {
                    let t = setTimeout(() => {
                        n(r0(e));
                    }, 500);
                    return () => clearTimeout(t);
                }, [e]),
                f.useEffect(() => {
                    (0, rp._)(rz[e]);
                }, [e]),
                f.useEffect(() => {
                    Math.random() > 0.99 && (0, rN._)(r_.sn.VISITOR_100);
                }, []),
                (0, p.jsxs)(p.Fragment, {
                    children: [
                        (0, p.jsx)(rT.A, {
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
                            children: (0, p.jsx)(rS.a, {
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
    r2 = (0, a.zZ)(u.X.POGGERMODE_CATEGORY, { buildLayout: () => [r1] });
var r3 = i(736170);
let r6 = (0, a.t_)(u.X.POGGERMODE_PANEL, { useTitle: () => g.intl.string(g.t.AtCukI), buildLayout: () => [r2] }),
    r4 = (0, a.i4)(u.X.POGGERMODE_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.AtCukI),
        icon: () => (0, p.jsx)("img", { alt: "", src: i(724405), className: r3.$ }),
        usePredicate: () => (0, O.bG)([rh.A], () => rh.A.settingsVisible),
        buildLayout: () => [r6],
    });
var r7 = i(307301);
let r5 = (0, a.zD)(u.X.OS_START_MINIMIZED, {
    useTitle: () => g.intl.string(g.t.GfBL83),
    useSubtitle: () => g.intl.string(g.t.XGyhhc),
    usePredicate: () => (0, n8.uF)(),
    useValue: () => rs.useState((e) => !!e.openOnStartup && e.startMinimized),
    setValue: function (e) {
        rs.setState({ startMinimized: e }), se.Ay.send("TOGGLE_START_MINIMIZED", e);
    },
    useDisabled: () => !rs.useState((e) => e.openOnStartup),
    initialize: () => {
        se.Ay.getSetting("START_MINIMIZED", !1).then((e) => rs.setState({ startMinimized: e }));
    },
});
var r8 = i(839610),
    r9 = i(145339);
function ae(e) {
    let { keybind: t } = e,
        i = eL.dI(t.shortcut);
    return nq.A.hasBind(i)
        ? (0, p.jsx)("div", {
              className: r9.$e,
              children: (0, p.jsx)(j.w, { type: "warning", children: g.intl.string(g.t["7lQlw3"]) }),
          })
        : iE.Yy.has(i)
          ? (0, p.jsx)("div", {
                className: r9.$e,
                children: (0, p.jsx)(j.w, {
                    type: "warning",
                    children: g.intl.format(g.t.MOIaNd, {
                        keyboardNavArticle: ta.A.getArticleURL(q.MVz.KEYBOARD_NAVIGATION),
                    }),
                }),
            })
          : void 0;
}
function at(e) {
    let { keybind: t } = e;
    return t.action === q.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, p.jsx)(lK, { keybind: t, className: r9._M }) : null;
}
let ai = f.memo(function (e) {
    let { keybind: t, keybindDescriptions: i, keybindActionTypes: n } = e,
        s = f.useCallback((e) => tO.A.setKeybind({ ...t, action: e }), [t]),
        l = f.useCallback((e) => tO.A.setKeybind({ ...t, shortcut: e }), [t]),
        r = f.useCallback(() => tO.A.setKeybind({ ...t, enabled: !t.enabled }), [t]),
        a = f.useCallback(() => tO.A.deleteKeybind(t.id), [t.id]),
        o = f.useId(),
        u = f.useMemo(() => n.find((e) => e.value === t.action)?.label ?? t.action, [t.action, n]);
    return (0, p.jsxs)("div", {
        className: r9.f_,
        children: [
            (0, p.jsx)(ae, { keybind: t }),
            (0, p.jsx)("div", {
                className: r9.XI,
                children: (0, p.jsx)(lT.l, {
                    selectionMode: "single",
                    label: g.intl.string(g.t.XH5b12),
                    value: t.action,
                    options: n,
                    onSelectionChange: s,
                    disabled: t.managed,
                }),
            }),
            (0, p.jsx)("div", {
                className: r9.LE,
                children: (0, p.jsx)(sy.D, {
                    label: g.intl.string(g.t["1La4tC"]),
                    layout: "vertical",
                    children: (0, p.jsx)(tR.A, { defaultValue: t.shortcut, onChange: l }),
                }),
            }),
            (0, p.jsxs)("div", {
                className: r9.ne,
                children: [
                    !t.managed &&
                        (0, p.jsx)(lx.K, {
                            variant: "icon-only",
                            onClick: a,
                            icon: lp.u,
                            "aria-label": g.intl.string(g.t.qEHmmB),
                        }),
                    (0, p.jsx)(e0.m, {
                        text: g.intl.string(t.enabled ? g.t.pNYGbx : g.t["51DGkH"]),
                        ariaHidden: !0,
                        children: (0, p.jsxs)("div", {
                            children: [
                                (0, p.jsx)(F.A, {
                                    id: o,
                                    children: g.intl.format(t.enabled ? g.t["myr/Y0"] : g.t.lYhtPO, { actionName: u }),
                                }),
                                (0, p.jsx)(r8.I, { checked: t.enabled, onChange: r, labelledBy: o }),
                            ],
                        }),
                    }),
                ],
            }),
            (0, p.jsx)(V.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                className: r9.h_,
                children: i[t.action],
            }),
            (0, p.jsx)(at, { keybind: t }),
        ],
    });
});
var an = i(354594);
let as = function () {
        let { customizableKeybinds: e, keybindDescriptions: t, keybindActionTypes: i } = l0();
        return 0 === e.length
            ? (0, p.jsx)(V.E, { variant: "text-sm/normal", color: "text-subtle", children: g.intl.string(g.t.vyYgWp) })
            : (0, p.jsx)("div", {
                  className: an.A,
                  children: e.map((n, s) =>
                      (0, p.jsxs)(
                          f.Fragment,
                          {
                              children: [
                                  (0, p.jsx)(ai, { keybind: n, keybindDescriptions: t, keybindActionTypes: i }),
                                  s < e.length - 1 ? (0, p.jsx)(eE.c, { className: an.y, gap: 24 }) : null,
                              ],
                          },
                          n.id,
                      ),
                  ),
              });
    },
    al = (0, a.E2)(u.X.CUSTOM_KEYBINDS_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t["069nVT"])],
        Component: function () {
            return n8.Av
                ? (0, p.jsx)(as, {})
                : (0, p.jsx)(j.w, {
                      type: "info",
                      children: g.intl.format(g.t.mPi3F3, { downloadLink: q.X7G.DOWNLOAD }),
                  });
        },
    }),
    ar = (0, a.E2)(u.X.DEFAULT_KEYBINDS_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t.Lz5KHI)],
        Component: () => (0, p.jsx)(l4, { showHeader: !1 }),
    }),
    aa = (0, a.zZ)(u.X.SYSTEM_GENERAL_CATEGORY, {
        useTitle: () => g.intl.string(g.t.cg6ltt),
        buildLayout: () => [rr, r5, ra],
        usePredicate: () => n8.Av && ((0, n8.uF)() || (0, n8.j9)()),
        initialize: () => {
            rl();
        },
    }),
    ao = (0, a.zZ)(u.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY, {
        useTitle: () => g.intl.string(g.t["069nVT"]),
        useSubtitle: () => g.intl.string(g.t.T4LZVL),
        buildLayout: () => [al],
        initialize: () => (tO.A.enableAll(!1), () => tO.A.enableAll(!0)),
        useInlineNotice: function () {
            return n8.Av
                ? {
                      type: eN.lT.STRONGLY_DISCOURAGED_CUSTOM,
                      notice: () =>
                          (0, p.jsxs)(R.B, {
                              direction: "vertical",
                              gap: "md",
                              children: [
                                  (0, p.jsx)(j.w, { type: "info", children: g.intl.string(g.t["5pkmHa"]) }),
                                  (0, p.jsx)(lO, { sourcePage: "keybinds" }),
                              ],
                          }),
                  }
                : null;
        },
        useHeaderDecoration: () =>
            n8.Av
                ? {
                      type: eN.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "add-keybind",
                              type: eN.UV.BUTTON,
                              text: g.intl.string(g.t.zk6Xbs),
                              variant: "secondary",
                              icon: r7.j,
                              onClick: () => tO.A.addKeybind(),
                          },
                      ],
                  }
                : null,
    }),
    au = (0, a.zZ)(u.X.SYSTEM_DEFAULT_KEYBINDS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.Lz5KHI),
        buildLayout: () => [ar],
    }),
    ad = (0, a.zZ)(u.X.SYSTEM_HELPER_CATEGORY, {
        useTitle: () => g.intl.string(g.t["+XZgmA"]),
        usePredicate: () => n8.Av && ((0, n8.uF)() || (0, n8.j9)()),
        buildLayout: () => [rc],
    }),
    ac = (0, a.t_)(u.X.SYSTEM_PANEL, {
        useTitle: () => g.intl.string(g.t["VJ/qKo"]),
        buildLayout: () => [aa, ao, au, ad],
    }),
    ag = (0, a.i4)(u.X.SYSTEM_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["VJ/qKo"]),
        icon: lS.F,
        buildLayout: () => [ac],
    });
var am = i(831544),
    aA = i(922795),
    ah = i(212245),
    aE = i(329551),
    aS = i(285918),
    aT = i(413339),
    ax = i(952572),
    ap = i(382003);
let af = (0, a.E2)(u.X.CAMERA_BACKGROUND_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t.lZTUPs)],
        usePredicate: ax.A,
        Component: function () {
            let e = (0, ah.p)(),
                t = f.useRef(!1),
                i = (0, O.bG)([lb.Ay], () => lb.Ay.getVideoDeviceId()),
                [n, s] = f.useState((0, aE.i)(t3.default.getCurrentUser())),
                l = f.useRef(n);
            return (
                f.useEffect(
                    () => () => {
                        t.current && (0, aS._C)(l.current);
                    },
                    [],
                ),
                (0, p.jsx)(ap.A, {
                    selectedBackgroundOption: n,
                    onSelectBackgroundOption: (i) => {
                        (t.current = !0), (l.current = i), s(i), (0, aT.gB)(i, { location: e.location }).catch(q.tEg);
                    },
                    currentDeviceId: i,
                })
            );
        },
    }),
    aN = (0, a.zD)(u.X.CAMERA_PREVIEW_PREFERENCE, {
        useTitle: () => g.intl.string(g.t["3Ppr1h"]),
        useSubtitle: () => g.intl.string(g.t.WNbX4O),
        useValue: c.bm.useSetting,
        setValue: (e) => {
            c.bm.updateSetting(e), Y.default.track(q.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e });
        },
    });
var a_ = i(625841),
    aI = i(74848),
    aC = i(204050);
let ab = (0, np.D)(() => ({ previewEnabled: !1 }));
var av = i(731854);
let ay = (0, a.E2)(u.X.CAMERA_SELECTION_SETTING, {
    useSearchTerms: () => [g.intl.string(g.t.FsQ3OR)],
    Component: function () {
        let e = (0, O.bG)([lb.Ay], () => lb.Ay.isVideoAvailable()),
            { id: t } = (0, aI.x5)(av.oh.VIDEO_INPUT),
            { analyticsLocations: i } = (0, nG.Ay)();
        return (0, p.jsx)(a_.U, {
            label: g.intl.string(g.t.FsQ3OR),
            deviceType: av.oh.VIDEO_INPUT,
            location: "UserSettingsCameraSelect",
            isDisabled: !e,
            helperText: (0, aC.p)()
                ? g.intl.format(g.t.aJYgRt, {
                      onCameraSettingsClick: () => {
                          ab.setState({ previewEnabled: !1 }),
                              window.open((0, aC.i)(t)),
                              Y.default.track(q.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: i });
                      },
                  })
                : void 0,
        });
    },
});
var aj = i(745317),
    aO = i(886964);
let aR = (0, a.E2)(u.X.CAMERA_VIDEO_PREVIEW, {
        useSearchTerms: () => [g.intl.string(g.t.JIf4v7)],
        Component: function () {
            let e = lb.Ay.getCameraComponent(),
                t = (0, O.bG)([lb.Ay], () => lb.Ay.getVideoDeviceId()),
                i = ab.useField("previewEnabled"),
                n = (0, O.bG)([lb.Ay], () => lb.Ay.isVideoAvailable());
            return ((0, e7.l0)(() => {
                ab.setState({ previewEnabled: !1 });
            }),
            i)
                ? (0, p.jsx)("div", {
                      className: aO.T,
                      children: (0, p.jsxs)("div", {
                          className: aO.U,
                          children: [
                              (0, p.jsx)(e, { deviceId: t, width: 387, height: 218, disabled: !i }),
                              (0, p.jsx)(aj.k, {}),
                          ],
                      }),
                  })
                : (0, p.jsx)("div", {
                      className: aO.T,
                      children: (0, p.jsx)(e0.m, {
                          text: n ? null : g.intl.string(g.t["8jSzSe"]),
                          children: (0, p.jsx)(eh.$, {
                              variant: "primary",
                              text: g.intl.string(g.t.JIf4v7),
                              onClick: () => ab.setState({ previewEnabled: !0 }),
                              disabled: !n,
                          }),
                      }),
                  });
        },
    }),
    aL = (0, a.zZ)(u.X.CAMERA_CATEGORY, {
        useTitle: () => g.intl.string(g.t.uje3P9),
        usePredicate: () => (0, O.bG)([lb.Ay], () => lb.Ay.supports(av.O5.VIDEO)),
        buildLayout: () => [aR, aN, ay, af],
    });
function aD() {
    n3.h.dispatch({ type: "DISCORD_STATS_POPOUT_WINDOW_OPEN" });
}
let aP = (0, a.Tf)(u.X.DISCORD_STATS_POPOUT, {
    useTitle: () => "Discord Stats",
    useSubtitle: () => "Open a floating panel showing live GPU, CPU, and memory usage.",
    useLabel: () => "Open",
    usePredicate: () => (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.isStaff() ?? !1),
    onClick: () => {
        aD();
    },
});
var aG = i(827343);
let aU = (0, a.zD)(u.X.VOICE_AND_VIDEO_OPENH264, {
        useTitle: () => g.intl.string(g.t.qFphsa),
        useSubtitle: () => g.intl.string(g.t.cQfwyY),
        usePredicate: function () {
            return (0, n8.j9)();
        },
        useValue: function () {
            return (0, O.bG)([lb.Ay], () => lb.Ay.getOpenH264Enabled());
        },
        setValue: function (e) {
            aG.A.setOpenH264Enabled(e),
                (0, n9.A)({
                    title: g.intl.string(g.t["9jf31O"]),
                    subtitle: g.intl.string(g.t["J2wg+X"]),
                    confirmText: g.intl.string(g.t.BddRzS),
                    onConfirm: () => s1.A.app.relaunch(),
                });
        },
        useSearchTerms: () => ["open", "OpenH264", "H264", "codec"],
    }),
    aM = (0, a.zD)(u.X.VOICE_AND_VIDEO_AUDIO_RECORDING, {
        useTitle: () => g.intl.string(g.t["r6K+TL"]),
        useSubtitle: () => g.intl.string(g.t["xl9+I6"]),
        useValue: function () {
            return (0, O.bG)([lb.Ay], () => lb.Ay.getAecDump());
        },
        setValue: aG.A.setAecDump,
        usePredicate: function () {
            return (0, O.bG)([lb.Ay], () => lb.Ay.isAecDumpSupported());
        },
    });
var aV = i(139033),
    ak = i(862482),
    aw = i(640238),
    aB = i(825484),
    aF = i(77138),
    az = i(487329),
    aY = i(353835);
let aX = (0, np.D)(() => ({ isUploading: !1, isDisabled: !1 }));
async function aH() {
    let e = await s1.A.fileManager.getLogPath();
    s1.A.fileManager.showItemInFolder(e);
}
function aK(e) {
    (0, n9.A)({
        title: g.intl.string(g.t["7UXEF2"]),
        subtitle: g.intl.string(g.t.IYPrRl),
        confirmText: g.intl.string(g.t.BddRzS),
        onConfirm: () => aG.A.setDebugLogging(e),
    });
}
async function aW(e) {
    let { onUploadStart: t, onUploadFinish: i } = e;
    t?.();
    try {
        let e, t;
        await lb.Ay.getMediaEngine().writeAudioDebugState(),
            await aY.A.submitLiveCrashReport({ message: { message: "User Live Dump" } }),
            await (0, aF.a)(q.Umv.RTC),
            (e = g.intl.string(g.t["fKBB8+"])),
            (t = g.intl.string(g.t.BvyxE7)),
            (0, aV.A)({ title: e, subtitle: t });
    } catch (l) {
        var n;
        let e, t, i, s;
        (n = l.displayMessage),
            (e = g.intl.string(g.t.QZg0J7)),
            (t = n ?? g.intl.string(g.t.VzHcSm)),
            (i = (0, az.B1)(az.iy.DEBUG_LOG_UPLOAD_FAILED)?.errorCode),
            (s = g.intl.formatToPlainString(g.t.ejOT95, { errorCode: i })),
            (0, _.openModal)((i) =>
                (0, p.jsx)(aw.a, {
                    header: e,
                    confirmButtonColor: ak.$n.Colors.BRAND,
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
async function aZ() {
    await aW({
        onUploadStart: () => aX.setState({ isUploading: !0 }),
        onUploadFinish: () => aX.setState({ isUploading: !1, isDisabled: !0 }),
    });
}
let aq = (0, a.E2)(u.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [g.intl.string(g.t["726JHL"]), g.intl.string(g.t.EbwFfR), g.intl.string(g.t.nuPtYi)],
    usePredicate: function () {
        let e = (0, O.bG)([lb.Ay], () => lb.Ay.supports(av.O5.DEBUG_LOGGING));
        return n8.Av && e && null != s1.A.fileManager.readLogFiles;
    },
    Component: function () {
        let e = (0, O.bG)([lb.Ay], () => lb.Ay.getDebugLogging()),
            t = aX.useField("isUploading"),
            i = aX.useField("isDisabled"),
            n = f.useId();
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
                            onChange: aK,
                        }),
                        (0, p.jsx)("div", {
                            role: "group",
                            "aria-labelledby": n,
                            children: (0, p.jsxs)(aB.e, {
                                children: [
                                    (0, p.jsx)(eh.$, {
                                        variant: "secondary",
                                        text: g.intl.string(g.t.EbwFfR),
                                        onClick: aZ,
                                        loading: t,
                                        disabled: i,
                                        "aria-label": g.intl.string(g.t.aY1OH2),
                                    }),
                                    (0, p.jsx)(eh.$, {
                                        variant: "secondary",
                                        text: g.intl.string(g.t.nuPtYi),
                                        onClick: aH,
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
var aQ = i(233545),
    aJ = i(412780);
function a$() {
    return (0, O.bG)([t3.default, lb.Ay], () => {
        let e = t3.default.getCurrentUser(),
            t = e?.isStaff() ?? !1,
            i = "canary" === se.Ay.releaseChannel || "development" === se.Ay.releaseChannel,
            n = lb.Ay.supports(av.O5.CONNECTION_REPLAY);
        return t && i && n;
    });
}
let a0 = (0, a.zD)(u.X.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
        useTitle: () => g.intl.string(g.t.U4FgFK),
        useSubtitle: () => g.intl.string(g.t.Lm72RU),
        useValue: function () {
            return (0, O.bG)([aJ.Ay], () => aJ.Ay.shouldRecordNextConnection());
        },
        setValue: aQ.Et,
        usePredicate: a$,
    }),
    a1 = (0, a.Tf)(u.X.VOICE_AND_VIDEO_OPEN_CONNECTION_REPLAY, {
        useTitle: () => g.intl.string(g.t.nJnOHO),
        useLabel: () => g.intl.string(g.t["3xjX0U"]),
        onClick: aQ.YW,
        usePredicate: a$,
    });
var a2 = i(926919),
    a3 = i(111162),
    a6 = i(855302);
let a4 = (0, a.zD)(u.X.VOICE_AND_VIDEO_STREAM_INFO_OVERLAY, {
        useTitle: () => g.intl.string(g.t["0CEP6e"]),
        useSubtitle: () => g.intl.string(g.t["kBXuW+"]),
        useValue: function () {
            return (0, O.bG)([a3.default], () => a3.default.isStreamInfoOverlayEnabled);
        },
        setValue: function (e) {
            let t = a3.default.isStreamInfoOverlayEnabled;
            (0, a6.A)("stream_info_overlay_enabled", e, t), (0, a2.x)({ isStreamInfoOverlayEnabled: e });
        },
        usePredicate: function () {
            return c.Q_.useSetting();
        },
    }),
    a7 = (0, a.bd)(u.X.VOICE_AND_VIDEO_DIAGNOSTICS_ACCORDION, {
        useTitle: (e) => (e ? g.intl.string(g.t["/B4I8H"]) : g.intl.string(g.t.BTlsWH)),
        useCollapsedSubtitle: () => g.intl.string(g.t.la1Ys4),
        buildLayout: () => [a4, aM, a0, a1, aq],
    });
function a5(e, t, i) {
    (0, n9.A)({ title: e, subtitle: t, confirmText: g.intl.string(g.t.BddRzS), onConfirm: i });
}
let a8 = (0, a.Tf)(u.X.VOICE_AND_VIDEO_RESET_ALL_SETTINGS, {
        useTitle: () => g.intl.string(g.t.SXfv1v),
        useSubtitle: () => g.intl.string(g.t["buA5/q"]),
        useLabel: () => g.intl.string(g.t.yBZMsQ),
        onClick: function () {
            a5(g.intl.string(g.t["4iKQ/3"]), g.intl.string(g.t.sQ42iT), aG.A.reset);
        },
        useVariant: () => "critical-secondary",
    }),
    a9 = (0, a.zZ)(u.X.VOICE_AND_VIDEO_DIAGNOSTICS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.UDAU9K),
        buildLayout: () => [aU, a7, aP, a8],
    });
var oe = i(347481),
    ot = i(852712),
    oi = i(199966),
    on = i(963935);
function os(e) {
    let { title: t } = e;
    return t;
}
function ol(e) {
    let { useTitle: t, settingKey: i, formatter: n, index: s } = e,
        l = t();
    return "string" == typeof l ? n({ title: l, index: s, key: i }) : l;
}
function or(e) {
    let { setting: t, formatter: i, index: n } = e;
    return () => (0, p.jsx)(ol, { useTitle: t.useTitle, settingKey: t.key, formatter: i, index: n }, t.key);
}
function oa(e) {
    return e.type === on.Z6.LIST;
}
function oo(e, t) {
    let { limit: i = 2, formatter: n = os } = t ?? {};
    tj()(i > 0, "[useSettingCollapsibleSubtitle] Limit must be greater than 0");
    let { visibleDirectory: s, accessibleDirectory: l } = (0, oi._)(),
        r = s.get(e) ?? l.get(e);
    tj()(
        null != r && (r.type === on.Z6.ACCORDION || oa(r)),
        "[useSettingCollapsibleSubtitle] Node is not a collapsible settings node",
    );
    let a = oa(r) ? (r.collapseAfter ?? 0) : 0,
        o = r.layout;
    return f.useMemo(() => {
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
                return g.intl.format(g.t["3H9tCW"], { settingOneHook: or({ setting: t[0], formatter: n, index: 0 }) });
            else if (2 === t.length)
                return g.intl.format(g.t.MWryo6, {
                    settingOneHook: or({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: or({ setting: t[1], formatter: n, index: 1 }),
                });
            else
                return g.intl.format(g.t.a00b5G, {
                    settingOneHook: or({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: or({ setting: t[1], formatter: n, index: 1 }),
                    settingThreeHook: or({ setting: t[2], formatter: n, index: 2 }),
                });
        return 1 === s
            ? g.intl.format(g.t.O8vNbS, { settingOneHook: or({ setting: t[0], formatter: n, index: 0 }) })
            : 2 === s
              ? g.intl.format(g.t["acXG/W"], {
                    settingOneHook: or({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: or({ setting: t[1], formatter: n, index: 1 }),
                })
              : g.intl.format(g.t["5+ldWc"], {
                    settingOneHook: or({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: or({ setting: t[1], formatter: n, index: 1 }),
                    settingThreeHook: or({ setting: t[2], formatter: n, index: 2 }),
                });
    }, [i, a, o, n]);
}
let ou = (0, a.zD)(u.X.VOICE_AUTOMATIC_GAIN_CONTROL_SETTING, {
        useTitle: () => g.intl.string(g.t.cUMdH0),
        useSubtitle: () => g.intl.string(g.t["6EjbvA"]),
        useValue: function () {
            return (0, O.bG)([lb.Ay], () => lb.Ay.getAutomaticGainControl());
        },
        setValue: function (e) {
            aG.A.setAutomaticGainControl(e, { page: q.liQ.USER_SETTINGS, section: q.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, O.bG)([lb.Ay, oe.A], () => {
                let e = lb.Ay.getInputDeviceId();
                return oe.A.hasAutomaticGainControl(e);
            });
        },
        usePredicate: function () {
            return (0, O.bG)([lb.Ay], () => lb.Ay.isAutomaticGainControlSupported() && lb.Ay.isInputProfileCustom());
        },
    }),
    od = (0, a.sN)(u.X.VOICE_GLOBAL_ATTENUATION_SLIDER, {
        useTitle: () => g.intl.string(g.t.AlybXj),
        setValue: (e) =>
            aG.A.setAttenuation(e, lb.Ay.getAttenuateWhileSpeakingSelf(), lb.Ay.getAttenuateWhileSpeakingOthers()),
        minValue: 0,
        maxValue: 100,
        getInitialValue: () => lb.Ay.getAttenuation(),
    }),
    oc = (0, a.zD)(u.X.VOICE_GLOBAL_ATTENUATION_FOR_SELF_SETTING, {
        useTitle: () => g.intl.string(g.t["9dHxRY"]),
        useValue: () => (0, O.bG)([lb.Ay], () => lb.Ay.getAttenuateWhileSpeakingSelf()),
        setValue: (e) => aG.A.setAttenuation(lb.Ay.getAttenuation(), e, lb.Ay.getAttenuateWhileSpeakingOthers()),
    }),
    og = (0, a.zD)(u.X.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
        useTitle: () => g.intl.string(g.t.SMt0Gr),
        useValue: () => (0, O.bG)([lb.Ay], () => lb.Ay.getAttenuateWhileSpeakingOthers()),
        setValue: (e) => aG.A.setAttenuation(lb.Ay.getAttenuation(), lb.Ay.getAttenuateWhileSpeakingSelf(), e),
    }),
    om = (0, a.FW)(u.X.VOICE_GLOBAL_ATTENUATION_FIELD_SET, {
        variant: "compact",
        useTitle: () => g.intl.string(g.t.oSdBvW),
        useSubtitle: () => g.intl.string(g.t["0A/8Rt"]),
        usePredicate: () => (0, O.bG)([lb.Ay], () => lb.Ay.supports(av.O5.ATTENUATION)),
        buildLayout: () => [od, oc, og],
    });
var oA = i(801644);
let oh = (0, a.zD)(u.X.VOICE_HARDWARE_MUTE_SILENCE_ALERT_SETTING, {
        useTitle: () => g.intl.string(g.t.pZ0vr4),
        useSubtitle: () => g.intl.string(g.t.tVbzoZ),
        useValue: function () {
            return (0, O.bG)([nE.Ay], () => !nE.Ay.disableHardwareMuteSilenceAlert);
        },
        setValue: function (e) {
            (0, a6.A)("hardware_mute_silence_alert_enabled", e, !nE.Ay.disableHardwareMuteSilenceAlert),
                sY.Ay.updatedUnsyncedSettings({ disableHardwareMuteSilenceAlert: !e });
        },
        usePredicate: function () {
            let { enableHardwareSilenceWarning: e } = oA.A.useConfig({ location: "HardwareMuteSilenceAlertSetting" });
            return e;
        },
    }),
    oE = (0, a.zD)(u.X.VOICE_BYPASS_SYSTEM_INPUT_PROCESSING_SETTING, {
        useTitle: () => g.intl.string(g.t.DFPXIG),
        useSubtitle: () => g.intl.string(g.t["UyRX+C"]),
        useValue: function () {
            return (0, O.bG)([lb.Ay], () => lb.Ay.getBypassSystemInputProcessing());
        },
        setValue: function (e) {
            aG.A.setBypassSystemInputProcessing(e);
        },
        usePredicate: function () {
            return (0, O.bG)([lb.Ay], () => lb.Ay.showBypassSystemInputProcessing() && lb.Ay.isInputProfileCustom());
        },
    }),
    oS = (0, a.zD)(u.X.VOICE_SWITCH_CHANNEL_ALERT_SETTING, {
        useTitle: () => g.intl.string(g.t.jrWHD3),
        useSubtitle: () => g.intl.string(g.t.YCCMkJ),
        useValue: function () {
            return (0, O.bG)([nE.Ay], () => !nE.Ay.disableVoiceChannelChangeAlert);
        },
        setValue: function (e) {
            (0, a6.A)("switch_channel_warning_enabled", e, !nE.Ay.disableVoiceChannelChangeAlert),
                sY.Ay.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !e });
        },
    }),
    oT = (0, a.zD)(u.X.ADVANCED_VOICE_ACTIVITY_PROCESSING_SETTING, {
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
            aG.A.setMode(t, { vadUseKrisp: e });
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
    ox = (0, a.Hn)(u.X.VOICE_AUDIO_SUBSYSTEM_SETTING, {
        useTitle: () => g.intl.string(g.t.wVBHr0),
        useValue: function () {
            return (0, O.bG)([lb.Ay], () => lb.Ay.getAudioSubsystem());
        },
        setValue: function (e) {
            a5(g.intl.string(g.t.uY7AcQ), g.intl.string(g.t.gBqik6), () => aG.A.setAudioSubsystem(e));
        },
        useOptions: function () {
            let {
                legacyAudioSubsystemSupported: e,
                experimentalAudioSubsystemSupported: t,
                automaticAudioSubsystemSupported: i,
            } = (0, O.cf)([lb.Ay], () => ({
                legacyAudioSubsystemSupported: lb.Ay.supports(av.O5.LEGACY_AUDIO_SUBSYSTEM),
                experimentalAudioSubsystemSupported: lb.Ay.supports(av.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM),
                automaticAudioSubsystemSupported: lb.Ay.supports(av.O5.AUTOMATIC_AUDIO_SUBSYSTEM),
            }));
            return f.useMemo(() => {
                let n;
                return (
                    (n = [{ id: av.rB.STANDARD, value: av.rB.STANDARD, label: g.intl.string(g.t.dqb2JZ) }]),
                    e && n.push({ id: av.rB.LEGACY, value: av.rB.LEGACY, label: g.intl.string(g.t["TYfH+5"]) }),
                    t &&
                        n.push({ id: av.rB.EXPERIMENTAL, value: av.rB.EXPERIMENTAL, label: g.intl.string(g.t.liQmtr) }),
                    i && n.push({ id: av.rB.AUTOMATIC, value: av.rB.AUTOMATIC, label: g.intl.string(g.t.qNgtO1) }),
                    n
                );
            }, [i, t, e]);
        },
        usePredicate: function () {
            return (0, O.bG)([lb.Ay], () => lb.Ay.shouldOfferManualSubsystemSelection());
        },
    }),
    op = (0, a.zD)(u.X.VOICE_QUALITY_OF_SERVICE_SETTING, {
        useTitle: () => g.intl.string(g.t.uancuJ),
        useSubtitle: () => g.intl.string(g.t.I1Eoqq),
        useValue: function () {
            return (0, O.bG)([lb.Ay], () => lb.Ay.getQoS());
        },
        setValue: function (e) {
            aG.A.setQoS(e);
        },
        usePredicate: function () {
            return (0, O.bG)([lb.Ay], () => lb.Ay.supports(av.O5.QOS));
        },
    }),
    of = (0, a.zD)(u.X.VOICE_SILENCE_WARNING_SETTING, {
        useTitle: () => g.intl.string(g.t["4rsOPQ"]),
        useSubtitle: () => g.intl.string(g.t.jtiiCw),
        useValue: function () {
            return (0, O.bG)([lb.Ay], () => lb.Ay.getEnableSilenceWarning());
        },
        setValue: function (e) {
            aG.A.setSilenceWarning(e);
        },
        usePredicate: function () {
            return ev.isPlatformEmbedded;
        },
    }),
    oN = (0, a.bd)(u.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? g.intl.string(g.t.KHsSWK) : g.intl.string(g.t.PPDo5V);
        },
        useCollapsedSubtitle: () =>
            oo(u.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
                limit: (0, O.bG)([lb.Ay], () => lb.Ay.isInputProfileCustom()) ? 3 : 2,
            }),
        buildLayout: () => [ou, oT, oE, of, oh, oS, om, ox, op],
    }),
    o_ = (0, a.zD)(u.X.VOICE_ECHO_CANCELLATION_SETTING, {
        useTitle: () => g.intl.string(g.t.iWTwu6),
        useValue: function () {
            return (0, O.bG)([lb.Ay], () => lb.Ay.getEchoCancellation());
        },
        setValue: function (e) {
            aG.A.setEchoCancellation(e, { page: q.liQ.USER_SETTINGS, section: q.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, O.bG)([lb.Ay, oe.A], () => {
                let e = lb.Ay.getInputDeviceId();
                return oe.A.hasEchoCancellation(e);
            });
        },
        usePredicate: function () {
            return (0, O.bG)([lb.Ay], () => lb.Ay.isInputProfileCustom());
        },
    });
var oI = i(459838),
    oC = i(451988),
    ob = i(801102),
    ov = i(160671);
let oy = (0, sT.Ld)();
function oj(e) {
    let { isSpeaking: t, className: i, id: n, ariaDescribedBy: s, ariaLabelledBy: l, disabled: r } = e;
    return (0, p.jsx)("div", {
        role: "meter",
        className: ew()(ob.$I, i),
        id: n,
        "aria-describedby": s,
        "aria-labelledby": l,
        "aria-valuenow": t && !r ? 100 : 0,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuetext": t && !r ? g.intl.string(g.t.haLKZ0) : g.intl.string(g.t.X2hJL7),
        children: (0, p.jsx)("div", { className: ew()(ob.Jx, ob.NU, { [ob.zY]: t && !r, [ob.r9]: r }) }),
    });
}
function oO(e) {
    let { volume: t, id: i, ariaDescribedBy: n, ariaLabelledBy: s, disabled: l } = e,
        { threshold: r, autoThreshold: a } = (0, O.cf)([lb.Ay], () => ({
            threshold: lb.Ay.getModeOptions().threshold,
            autoThreshold: lb.Ay.getModeOptions().autoThreshold,
        })),
        o = (0, O.bG)([lb.Ay], () => lb.Ay.getMode());
    return (0, p.jsx)("section", {
        className: ew()(ob.Mo, ob.jW),
        id: i,
        "aria-describedby": n,
        "aria-labelledby": s,
        children: (0, p.jsx)(i5.A, {
            initialValue: r + 100,
            onValueRender: (e) => `${(-((100 - e) * 1)).toFixed(0)}dB`,
            onValueChange: (e) => {
                var t;
                return (t = -((100 - e) * 1)), void aG.A.setMode(o, { threshold: t, autoThreshold: a });
            },
            barStyles: { background: w.A.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: w.A.unsafe_rawColors.YELLOW_300.css },
            "aria-labelledby": oy,
            disabled: l,
            children: (0, p.jsxs)("div", {
                className: ew()(ob.NU, ob.TL, ob.Jx, ov.bar),
                children: [
                    (0, p.jsx)("div", { className: ew()(ob.GS, ob.SH), style: { width: l ? 0 : t + 100 + "%" } }),
                    (0, p.jsx)("div", { className: "grow" }),
                ],
            }),
        }),
    });
}
let oR = (0, a.E2)(u.X.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useSearchTerms: () => [g.intl.string(g.t["sqUm+k"]), g.intl.string(g.t.I1Zuq0), g.intl.string(g.t.nuFtHH)],
    usePredicate: () => (0, O.bG)([lb.Ay], () => lb.Ay.isInputProfileCustom()),
    Component: function () {
        let { autoThreshold: e, disabled: t } = (0, O.cf)([lb.Ay], () => ({
                autoThreshold: lb.Ay.getModeOptions().autoThreshold,
                disabled: lb.Ay.getMode() !== av.TB.VOICE_ACTIVITY,
            })),
            i = f.useCallback((e) => {
                let t = lb.Ay.getMode(),
                    { threshold: i } = lb.Ay.getModeOptions();
                aG.A.setMode(t, { autoThreshold: e, threshold: i });
            }, []),
            n = (0, O.bG)([lb.Ay], () => lb.Ay.supports(av.O5.AUTOMATIC_VAD)),
            { volume: s, isSpeaking: l } = (function () {
                let [e, t] = f.useState(-100),
                    [i, n] = f.useState(!1);
                function s(e, i) {
                    t(e), n((i & av.ME.VOICE) === av.ME.VOICE);
                }
                return (
                    f.useEffect(() => {
                        let e = new oC.Ep();
                        return (
                            e.start(1e3, () => {
                                lb.Ay.getMediaEngine().on(oI.bg.VoiceActivity, s), e.stop();
                            }),
                            () => {
                                lb.Ay.getMediaEngine().removeListener(oI.bg.VoiceActivity, s), e.stop();
                            }
                        );
                    }, []),
                    { volume: e, isSpeaking: i }
                );
            })(),
            r = (0, O.bG)([lb.Ay], () => lb.Ay.isEnabled()),
            a = f.useMemo(
                () =>
                    !r &&
                    (0, p.jsx)("div", {
                        className: ob.B4,
                        children: (0, p.jsx)(j.w, {
                            type: "warning",
                            children: g.intl.format(g.t["O13I+O"], { onEnableClick: () => aG.A.enable(!0) }),
                        }),
                    }),
                [r],
            ),
            o = f.useMemo(() => (e ? g.intl.string(g.t.JsbzjA) : g.intl.string(g.t.MLmyMY)), [e]),
            u = f.useId(),
            d = f.useId();
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
                                  ? (0, p.jsx)(oj, {
                                        isSpeaking: l,
                                        className: ob.UJ,
                                        ariaDescribedBy: d,
                                        ariaLabelledBy: u,
                                        disabled: t,
                                    })
                                  : (0, p.jsx)(oO, { volume: s, ariaDescribedBy: d, ariaLabelledBy: u, disabled: t }),
                              a,
                          ],
                      }),
                  ],
              })
            : (0, p.jsxs)(R.B, {
                  direction: "vertical",
                  gap: 8,
                  children: [
                      (0, p.jsx)(sy.D, {
                          label: g.intl.string(g.t["sqUm+k"]),
                          description: o,
                          layout: "vertical",
                          children: (i) =>
                              e
                                  ? (0, p.jsx)(oj, {
                                        isSpeaking: l,
                                        className: ob.UJ,
                                        id: i.controlId,
                                        ariaDescribedBy: i.describedById,
                                        ariaLabelledBy: i.labelId,
                                        disabled: t,
                                    })
                                  : (0, p.jsx)(oO, {
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
var oL = i(366010);
let oD = i(993830),
    oP = i(413142),
    oG = { page: q.liQ.USER_SETTINGS, section: q.JJy.SETTINGS_VOICE_AND_VIDEO };
function oU() {
    let e = (0, O.bG)([iu.A], () => (0, oL.q)(iu.A.theme));
    return (0, p.jsx)("img", { src: e ? oD : oP, width: 48, height: 32, alt: "" });
}
let oM = (0, a.E2)(u.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [g.intl.string(g.t.t8Qhib), g.intl.string(g.t.hmfkCi)],
    usePredicate: function () {
        return (0, O.bG)([lb.Ay], () => lb.Ay.isInputProfileCustom() && lb.Ay.isNoiseSuppressionSupported());
    },
    Component: function () {
        let e = f.useCallback((e) => {
                aG.A.setNoiseCancellation("KRISP" === e, oG), aG.A.setNoiseSuppression("STANDARD" === e, oG);
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
            l = f.useMemo(() => {
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
                (0, p.jsx)(lT.l, {
                    label: g.intl.string(g.t.t8Qhib),
                    description: r,
                    layout: "horizontal",
                    value: t ? "KRISP" : i ? "STANDARD" : "NONE",
                    onSelectionChange: e,
                    options: l,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                s && (0, p.jsx)(oU, {}),
            ],
        });
    },
});
var oV = i(934729),
    ok = i(621380);
let ow = !n8.Av;
function oB() {
    return (0, O.bG)([lb.Ay], () => lb.Ay.getMode() === av.TB.PUSH_TO_TALK);
}
let oF = (0, a.zD)(u.X.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function () {
        return n8.Av ? g.intl.string(g.t.tG4Np5) : g.intl.string(g.t.JMyQin);
    },
    useSubtitle: function () {
        let e = (0, O.bG)([lb.Ay], () => lb.Ay.getMode());
        return f.useMemo(() => {
            if (!n8.Av && e === av.TB.PUSH_TO_TALK)
                return g.intl.format(g.t["VHI4+Y"], { onDownloadClick: () => (0, oV._)("Help Text PTT") });
        }, [e]);
    },
    usePredicate: function () {
        return (0, O.bG)([lb.Ay], () => lb.Ay.getActiveInputProfile() !== ok.m.STUDIO);
    },
    useValue: function () {
        return (0, O.bG)([lb.Ay], () => lb.Ay.getMode() === av.TB.PUSH_TO_TALK);
    },
    setValue: function (e) {
        var t, n;
        (t = e ? av.TB.PUSH_TO_TALK : av.TB.VOICE_ACTIVITY),
            (n = [eM.A.USER_SETTINGS_VOICE_AND_VIDEO]),
            t === av.TB.PUSH_TO_TALK &&
                ow &&
                (0, _.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([i.e("31910"), i.e("10919")]).then(i.bind(i, 556506));
                    return (t) =>
                        (0, p.jsx)(e, {
                            title: g.intl.string(g.t.Kdt0Gb),
                            confirmText: g.intl.string(g.t["1WjMbC"]),
                            cancelText: g.intl.string(g.t.BddRzS),
                            onConfirm: () => (0, oV._)("PTT Limited Modal"),
                            body: g.intl.string(g.t.NIozvt),
                            ...t,
                        });
                }),
            aG.A.setMode(t, void 0, void 0, { analyticsLocations: n });
    },
    useSearchTerms: () => [g.intl.string(g.t["pS+K2L"]), g.intl.string(g.t.nuFtHH)],
});
var oz = i(371060);
let oY = (0, a.E2)(u.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t["pS+K2L"]), g.intl.string(g.t.nuFtHH)],
        usePredicate: oB,
        Component: function () {
            let e = (0, O.bG)([lb.Ay], () => {
                    let { shortcut: e } = lb.Ay.getModeOptions();
                    return e;
                }),
                t = g.intl.format(g.t.HVvn5T, { onClick: () => (0, ey.openUserSettings)(u.X.KEYBINDS_PANEL) });
            return (0, p.jsx)(sy.D, {
                label: g.intl.string(g.t["o+BJQR"]),
                description: t,
                layout: "horizontal-responsive",
                children: (0, p.jsx)("div", {
                    className: oz.e,
                    children: (0, p.jsx)(tR.A, {
                        defaultValue: e,
                        onChange: (e) => aG.A.setMode(q.TBI.PUSH_TO_TALK, { shortcut: e }),
                    }),
                }),
            });
        },
    }),
    oX = (0, a.sN)(u.X.VOICE_PUSH_TO_TALK_RELEASE_DELAY_SETTING, {
        useTitle: () => g.intl.string(g.t.GCNMM8),
        useSearchTerms: () => [g.intl.string(g.t["pS+K2L"]), g.intl.string(g.t.nuFtHH)],
        setValue: function (e) {
            aG.A.setMode(q.TBI.PUSH_TO_TALK, { delay: e });
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
        usePredicate: oB,
    }),
    oH = (0, a.Qx)(u.X.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => g.intl.string(g.t.LM3U3k),
        usePredicate: function () {
            let { enabledInputProfiles: e } = (0, ot._)({ location: "SettingsRendererConfig" });
            return e.length > 0;
        },
        useSearchTerms: () => [g.intl.string(g.t.nuFtHH), g.intl.string(g.t.VZPR0R), g.intl.string(g.t.cjPbpT)],
        useValue: function () {
            return (0, O.bG)([lb.Ay], () => lb.Ay.getActiveInputProfile() ?? ok.m.CUSTOM);
        },
        setValue: function (e) {
            let t = [eM.A.USER_SETTINGS_VOICE_AND_VIDEO];
            aG.A.setActiveInputProfile(e, { analyticsLocations: t });
        },
        useOptions: function () {
            let { enabledInputProfiles: e } = (0, ot.d)({ location: "InputProfileCategory" });
            return [
                { value: ok.m.VOICE_ISOLATION, name: g.intl.string(g.t.cjPbpT), desc: g.intl.string(g.t.CzhvnE) },
                { value: ok.m.STUDIO, name: g.intl.string(g.t.VZPR0R), desc: g.intl.string(g.t.ZaJksS) },
                { value: ok.m.CUSTOM, name: g.intl.string(g.t["N/PQjv"]), desc: g.intl.string(g.t.SnBmuY) },
            ].filter((t) => {
                let { value: i } = t;
                return e.includes(i);
            });
        },
    }),
    oK = (0, a.zZ)(u.X.VOICE_INPUT_PROFILE_CATEGORY, {
        useInlineNotice: function () {
            let e = (0, O.bG)([oe.A, lb.Ay], () => {
                let e = lb.Ay.getInputDeviceId();
                return (
                    (oe.A.hasEchoCancellation(e) || oe.A.hasNoiseSuppression(e) || oe.A.hasAutomaticGainControl(e)) &&
                    lb.Ay.isInputProfileCustom()
                );
            });
            return f.useMemo(() => {
                if (e)
                    return {
                        type: eN.lT.INLINE_NOTICE,
                        noticeType: "info",
                        useText: () => g.intl.string(g.t["/Whuzi"]),
                    };
            }, [e]);
        },
        buildLayout: () => [oH, oR, oM, o_, oF, oY, oX, oN],
    });
var oW = i(403581),
    oZ = i(983851),
    oq = i(687021),
    oQ = i(128450),
    oJ = i(796774),
    o$ = i(209932),
    o0 = i(813564),
    o1 = i(984813),
    o2 = i(22231),
    o3 = i(428262),
    o6 = i(792348),
    o4 = i(674168),
    o7 = i(277192),
    o5 = i(805945),
    o8 = i(902460);
function o9(e) {
    let { onSelect: t } = e,
        [i, n] = f.useState(!1),
        s = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
        l = o3.Ay.canUseCustomCallSounds(s),
        r = f.useRef(null);
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
                children: (0, p.jsx)(o7.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: a,
                    gridNotice: l ? null : (0, p.jsx)(o4.m, {}),
                    analyticsSource: "call sounds edit setting",
                }),
            });
        },
        children: (e) =>
            (0, p.jsx)(o5.dT, {
                ...e,
                ref: r,
                onClick: () => {
                    n(!i);
                },
                text: g.intl.string(g.t.uOe0Az),
                children: (0, p.jsx)(o2.R, { size: "md", color: "currentColor", className: o8.Wo }),
            }),
    });
}
function ue(e) {
    let { sound: t } = e,
        { previewSound: i } = (0, o6.A)(t, null),
        n =
            0 === (0, o0.wH)()
                ? g.intl.string(g.t.OASXjt)
                : g.intl.formatToPlainString(g.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name });
    return (0, p.jsx)(o5.dT, {
        onClick: i,
        text: n,
        children: (0, p.jsx)(oZ.H, { size: "md", color: "currentColor", className: o8.wg }),
    });
}
function ut(e) {
    let { sound: t, isGlobal: i, onSelect: n } = e,
        s = null != t,
        l = t?.emojiId,
        r = t?.emojiName,
        a = s && (null != r || null != l);
    return (0, p.jsxs)("div", {
        className: o8.D6,
        children: [
            (0, p.jsxs)("div", {
                className: o8.kL,
                children: [
                    a && (0, p.jsx)(sr.A, { emojiId: l, emojiName: r, className: o8.Zg }),
                    (0, p.jsx)(V.E, {
                        variant: "text-md/normal",
                        color: "text-strong",
                        className: o8.dj,
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
                        ? (0, p.jsx)(ue, { sound: t })
                        : (0, p.jsx)(oZ.H, { size: "md", color: "currentColor", className: o8.Gk }),
                ],
            }),
            (0, p.jsxs)("div", {
                className: o8.kL,
                children: [
                    (0, p.jsx)(o9, { onSelect: n }),
                    s &&
                        !i &&
                        (0, p.jsx)(o5.dT, {
                            onClick: () => n(null),
                            text: g.intl.string(g.t.jmtcGA),
                            children: (0, p.jsx)(lp.u, {
                                size: "md",
                                color: w.A.unsafe_rawColors.RED_400.css,
                                className: o8.Wo,
                            }),
                        }),
                ],
            }),
        ],
    });
}
var ui = i(617617);
i(980504);
var un = i(384863);
function us(e) {
    return (0, O.bG)([o$.A], () => {
        if (null == e) return null;
        let { guildId: t, soundId: i } = e;
        return o$.A.getSound("0" === t ? "0" : t, i);
    });
}
function ul(e) {
    let { guildId: t } = e,
        i = (0, O.bG)([ui.A], () => ui.A.settings.guilds?.guilds?.[t]?.joinSound),
        n = us(i);
    if (null == i || null == n) return null;
    let { emojiId: s, emojiName: l } = n,
        r = null != s || null != l;
    return (0, p.jsxs)("div", {
        className: un.Io,
        children: [
            r
                ? (0, p.jsx)(sr.A, { emojiId: s, emojiName: l, className: un.nW })
                : (0, p.jsx)(oZ.H, { size: "md", color: "currentColor", className: un.nW }),
            (0, p.jsx)(V.E, { className: un.dK, variant: "text-xs/medium", children: n.name }),
        ],
    });
}
let ur = (0, a.E2)(u.X.ENTRANCE_SOUNDS_SETTING, {
    useSearchTerms: () => [g.intl.string(g.t.nzUc3B)],
    Component: function () {
        let { analyticsLocations: e } = (0, nG.Ay)(),
            [t, i] = f.useState("0"),
            n = (0, o1.mz)(t),
            s = us(n),
            l = n?.type === o1.PP.GLOBAL,
            r = (0, O.bG)([o$.A], () => o$.A.hasFetchedAllSounds()) && null != n && null == s;
        f.useEffect(() => {
            r && (0, o0.ND)({ location: e });
        }, [r, e]),
            f.useEffect(() => {
                (0, oJ.E7)();
            }, []);
        let a = f.useCallback((e, t) => {
            let { inDropdown: i } = t;
            return null == e ? null : i ? (0, p.jsx)(ul, { guildId: e.value }) : null;
        }, []);
        return (0, p.jsxs)(ia.n, {
            label: g.intl.string(g.t.nzUc3B),
            description: g.intl.format(g.t.u9RWmv, { helpdeskArticle: ta.A.getArticleURL(q.MVz.SOUNDBOARD) }),
            children: [
                (0, p.jsx)(oq.A, {
                    guildId: t,
                    className: un.Dt,
                    globalOption: { label: g.intl.string(g.t["CpEUP/"]), value: "0" },
                    onChange: (e) => {
                        i(null == e ? "0" : e.id);
                    },
                    renderOptionSuffix: a,
                    hideDivider: !0,
                }),
                (0, p.jsxs)(oQ.A, {
                    title: g.intl.format(g.t.I2TsYN, {
                        nitroWheelHook: () => (0, p.jsx)(oW.t, { size: "md", color: "currentColor", className: un.ax }),
                    }),
                    children: [
                        (0, p.jsx)(ut, {
                            sound: s,
                            isGlobal: l,
                            onSelect: (i) => {
                                null == i ? (0, o0.Dv)(t, e) : (0, o0.un)(t, i, e);
                            },
                        }),
                        r &&
                            (0, p.jsx)(tr.p, {
                                className: un.lm,
                                messageType: tr.Y.WARNING,
                                children: g.intl.string(g.t.WkPsFR),
                            }),
                    ],
                }),
            ],
        });
    },
});
var ua = i(824744);
let uo = (0, a.sN)(u.X.SOUNDBOARD_VOLUME_SETTING, {
    useTitle: () => g.intl.string(g.t.kbFsAD),
    useSubtitle: () => g.intl.format(g.t.BPbGq7, { helpCenterArticle: ta.A.getArticleURL(q.MVz.SOUNDBOARD) }),
    setValue: function (e) {
        let t = [eM.A.USER_SETTINGS_VOICE_AND_VIDEO],
            i = (0, ua.w)(e);
        (0, oJ.iy)(i, t);
    },
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let e = (0, o0.wH)();
        return (0, ua.M)(e);
    },
    onValueRender: function (e) {
        return `${e.toFixed(0)}%`;
    },
});
var uu = i(864145);
let ud = (0, a.sN)(u.X.SOUNDMOJI_VOLUME_SETTING, {
        useTitle: () => g.intl.string(g.t["2JbvKw"]),
        useSubtitle: () => g.intl.string(g.t.INenzY),
        setValue: function (e) {
            let t = (0, ua.w)(e);
            c.HO.updateSetting(t);
        },
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = c.HO.getSetting();
            return (0, ua.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        usePredicate: function () {
            return (0, uu.X)({ location: "SoundmojiVolumeSetting" });
        },
    }),
    uc = (0, a.zZ)(u.X.SOUNDBOARD_CATEGORY, {
        useTitle: () => g.intl.string(g.t.ABjMWI),
        buildLayout: () => [uo, ud, ur],
    });
var ug = i(803224),
    um = i(552122);
let uA = (0, a.E2)(u.X.SOUNDS_HOLIDAY_NOTICE, {
        useSearchTerms: () => [g.intl.string(g.t.fgSHf8)],
        usePredicate: () => null != um.A.useHolidaySoundpack(),
        Component: () =>
            (0, p.jsx)(V.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: g.intl.format(g.t.Eup6Wv, {
                    onClick: () => (0, ey.openUserSettings)(u.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                }),
            }),
    }),
    uh = (0, a.AK)(u.X.VOICE_AND_VIDEO_TO_NOTIFICATION_SOUNDS_NAVIGATOR, {
        useSubtitle: () => g.intl.string(g.t.eyGEE4),
        useSearchTerms: () => [g.intl.string(g.t.eyGEE4)],
        destinationKey: u.X.NOTIFICATIONS_SOUNDS_CATEGORY,
    }),
    uE = (0, a.gN)(u.X.VOICE_AND_VIDEO_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [uh] });
var uS = i(264686);
let uT = (0, np.D)(() => ({ currentPlayingSound: null }));
function ux() {
    let e = uT.getField("currentPlayingSound");
    e?.stop(), uT.setState({ currentPlayingSound: null });
}
function up(e) {
    let t = uT.getField("currentPlayingSound");
    t?.stop();
    let i = (0, rx.Ak)(e);
    uT.setState({ currentPlayingSound: i });
}
function uf(e) {
    return (0, a.zD)(`${u.X.SOUNDS_LIST_ITEM_PREFIX}${e.sound}`, {
        useTitle: e.useTitle,
        useSubtitle: () => g.intl.format(g.t.OOiGCM, { onClick: () => up(e.sound) }),
        useValue: () => {
            let t = (0, O.bG)([ug.A], () => ug.A.isSoundDisabled(e.sound)),
                i = e.useDisabled?.();
            return !t && !i;
        },
        setValue: (t) => {
            let i = ug.A.getDisabledSounds().filter((t) => t !== e.sound);
            t || i.push(e.sound), uS.default.setDisabledSounds(i);
        },
        useDisabled: () => {
            let t = e.useDisabled?.(),
                i = (0, O.bG)([ug.A], () => ug.A.getDisableAllSounds());
            return t || i;
        },
        useDisabledMessage: e.useDisabledMessage,
    });
}
let uN = [
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
    u_ = (0, a.D1)(u.X.VOICE_AND_VIDEO_SOUNDS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (e, t) =>
            e
                ? g.intl.formatToPlainString(g.t["0JYT98"], { count: t })
                : g.intl.formatToPlainString(g.t.ji1uNt, { count: t }),
        useCollapsedSubtitle: () => oo(u.X.VOICE_AND_VIDEO_SOUNDS_LIST, { limit: 3 }),
        initialize: function () {
            return () => {
                ux();
            };
        },
        buildLayout: () => uN.map((e) => uf(e)),
    }),
    uI = (0, a.zZ)(u.X.SOUNDS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.MKWyKc),
        useInlineNotice: function () {
            let e = (0, O.bG)([ug.A], () => ug.A.getDisableAllSounds());
            return f.useMemo(() => {
                if (e)
                    return {
                        type: eN.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        useText: () =>
                            g.intl.format(g.t.fRvixS, {
                                onClick: () => (0, ey.openUserSettings)(u.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                            }),
                    };
            }, [e]);
        },
        buildLayout: () => [u_, uA, uE],
    }),
    uC = (0, a.zD)(u.X.STREAMING_SHOW_STREAM_PREVIEWS, {
        useTitle: () => g.intl.string(g.t.e3Zz3F),
        useSubtitle: () => g.intl.string(g.t.RztTjP),
        useValue: function () {
            return !c.uh.useSetting();
        },
        setValue: function (e) {
            (0, a6.A)("stream_previews_disabled", !e, c.uh.getSetting(), [eM.A.USER_SETTINGS_VOICE_AND_VIDEO]),
                c.uh.updateSetting(!e);
        },
    }),
    ub = (0, a.zD)(u.X.STREAMING_ADVANCED_SCREENSHARE, {
        useTitle: () => g.intl.string(g.t.GmWk2E),
        useSearchTerms: () => [g.intl.string(g.t["Fj/xn1"])],
        useSubtitle: () => g.intl.string(g.t["Fj/xn1"]),
        useValue: function () {
            return (0, O.bG)([lb.Ay], () => lb.Ay.getVideoHook());
        },
        setValue: aG.A.setVideoHook,
        usePredicate: function () {
            return (0, O.bG)([lb.Ay], () => lb.Ay.supportsVideoHook());
        },
    }),
    uv = (0, a.zD)(u.X.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
        useTitle: () => g.intl.string(g.t["4I0qzZ"]),
        useValue: function () {
            return (0, O.bG)([lb.Ay], () => lb.Ay.getExperimentalSoundshare());
        },
        setValue: aG.A.setExperimentalSoundshare,
        usePredicate: function () {
            return (0, O.bG)([lb.Ay], () => {
                let e = lb.Ay.supportsExperimentalSoundshare(),
                    t = lb.Ay.supportsHookSoundshare();
                return e && t;
            });
        },
    }),
    uy = (0, a.zD)(u.X.STREAMING_STREAM_ATTENUATION, {
        useTitle: () => g.intl.string(g.t["/jwMtn"]),
        useSubtitle: () => g.intl.string(g.t.zlA23F),
        useValue: function () {
            return (0, O.bG)([lb.Ay], () => lb.Ay.getSidechainCompression());
        },
        setValue: function (e) {
            let t = [eM.A.USER_SETTINGS_VOICE_AND_VIDEO];
            aG.A.setSidechainCompression(e, { analyticsLocations: t });
        },
        usePredicate: function () {
            return lb.Ay.supports(av.O5.SIDECHAIN_COMPRESSION);
        },
    }),
    uj = (0, a.sN)(u.X.STREAMING_STREAM_ATTENUATION_STRENGTH, {
        useTitle: () => g.intl.string(g.t.fhEzfj),
        setValue: function (e) {
            let t = [eM.A.USER_SETTINGS_VOICE_AND_VIDEO];
            aG.A.setSidechainCompressionStrength(e, { analyticsLocations: t });
        },
        minValue: 1,
        maxValue: 100,
        getInitialValue: lb.Ay.getSidechainCompressionStrength,
        usePredicate: function () {
            return lb.Ay.supports(av.O5.SIDECHAIN_COMPRESSION);
        },
    }),
    uO = (0, a.zD)(u.X.STREAMING_OS_MENU_SCREEN_CAPTURE, {
        useTitle: () => g.intl.string(g.t.lt8rRx),
        useSubtitle: () => g.intl.string(g.t.ie1mgY),
        useValue: function () {
            return (0, O.bG)([lb.Ay], () => lb.Ay.getUseSystemScreensharePicker());
        },
        setValue: function (e) {
            (0, n8.cX)() && e
                ? (0, n9.A)({
                      title: g.intl.string(g.t["9jf31O"]),
                      subtitle: g.intl.string(g.t.uBd6JW),
                      variant: "primary",
                      onConfirm: () => {
                          aG.A.setUseSystemScreensharePicker(e), s1.A.app.relaunch();
                      },
                      confirmText: g.intl.string(g.t.BddRzS),
                  })
                : aG.A.setUseSystemScreensharePicker(e);
        },
        usePredicate: function () {
            return (0, O.bG)([lb.Ay], () => lb.Ay.supportsSystemScreensharePicker() && (0, n8.cX)());
        },
    }),
    uR = (0, a.bd)(u.X.STREAMING_ADVANCED_ACCORDION, {
        useTitle: (e) => (e ? g.intl.string(g.t.qrMyvm) : g.intl.string(g.t.LEtTNl)),
        useCollapsedSubtitle: () => oo(u.X.STREAMING_ADVANCED_ACCORDION),
        buildLayout: () => [uy, uj, uO, uv, ub],
    }),
    uL = (0, a.zZ)(u.X.STREAMING_CATEGORY, { useTitle: () => g.intl.string(g.t.KDdjou), buildLayout: () => [uC, uR] }),
    uD = (0, a.E2)(u.X.VOICE_MICROPHONE_INPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            return (0, p.jsx)(a_.U, {
                label: g.intl.string(g.t.UTM8VP),
                deviceType: av.oh.AUDIO_INPUT,
                location: "UserSettingsVoiceVideo",
                hideDeviceTypeIcon: !0,
            });
        },
    }),
    uP = (0, a.E2)(u.X.VOICE_SPEAKER_OUTPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            return (0, p.jsx)(a_.U, {
                label: g.intl.string(g.t.xuYQ0n),
                deviceType: av.oh.AUDIO_OUTPUT,
                location: "UserSettingsDevices",
                hideDeviceTypeIcon: !0,
            });
        },
    }),
    uG = (0, a.zC)(u.X.VOICE_INPUT_OUTPUT_DEVICE_SPLIT, { buildLayout: () => [uD, uP] }),
    uU = (0, a.sN)(u.X.VOICE_INPUT_VOLUME_SETTING, {
        useTitle: () => g.intl.string(g.t.Rtsr6w),
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = lb.Ay.getInputVolume();
            return (0, ua.M)(e);
        },
        asValueChanges: function (e) {
            let t = [eM.A.USER_SETTINGS_VOICE_AND_VIDEO],
                i = (0, ua.w)(e);
            aG.A.setInputVolume(i, { analyticsLocations: t });
        },
    }),
    uM = (0, a.sN)(u.X.VOICE_OUTPUT_VOLUME_SETTING, {
        useTitle: () => g.intl.string(g.t.aUJ062),
        minValue: 0,
        maxValue: 200,
        getInitialValue: function () {
            let e = lb.Ay.getOutputVolume();
            return (0, ua.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        asValueChanges: function (e) {
            let t = [eM.A.USER_SETTINGS_VOICE_AND_VIDEO],
                i = (0, ua.w)(e);
            aG.A.setOutputVolume(i, { analyticsLocations: t });
        },
    }),
    uV = (0, a.zC)(u.X.VOICE_INPUT_OUTPUT_VOLUME_SPLIT, { buildLayout: () => [uU, uM] });
var uk = i(702841),
    uw = i(349288),
    uB = i(152567),
    uF = i(593290);
let uz = `${ta.A.getArticleURL(q.MVz.VOICE_VIDEO_TROUBLESHOOTING)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm`,
    uY = (0, a.E2)(u.X.VOICE_MICROPHONE_TEST_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t.nuFtHH)],
        usePredicate: function () {
            return (0, uk.bG)([lb.Ay], () => lb.Ay.supports(av.O5.LOOPBACK));
        },
        Component: function () {
            return (0, uk.bG)([lb.Ay], () => lb.Ay.supports(av.O5.LOOPBACK))
                ? (0, p.jsx)(uB.A, {
                      size: "md",
                      notchBackground: uB.V.GRAY,
                      captionVoice: g.intl.string(g.t.bp3JOV),
                      captionNoVoice: (0, p.jsxs)(p.Fragment, {
                          children: [
                              (0, p.jsx)(V.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-default",
                                  children: g.intl.string(g.t.bgn75v),
                              }),
                              g.intl.string(g.t["MA+OZh"]),
                              (0, p.jsx)(uw.Anchor, {
                                  className: uF.X,
                                  href: ta.A.getArticleURL(q.MVz.NO_INPUT_DETECTED),
                                  children: g.intl.string(g.t.RYKKox),
                              }),
                          ],
                      }),
                      helpText: g.intl.format(g.t["V+B3FH"], { guideURL: uz }),
                      buttonTest: g.intl.string(g.t.gyljWE),
                      buttonStop: g.intl.string(g.t.I6OnJ3),
                      buttonVariant: "primary",
                      location: { page: q.liQ.USER_SETTINGS, section: q.JJy.SETTINGS_VOICE_AND_VIDEO },
                  })
                : null;
        },
    }),
    uX = ev.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];
function uH(e) {
    let { inputAndOutputAreBluetooth: t, canPromptSystemServiceInstallForVoice: i } = e;
    return (0, p.jsxs)(R.B, {
        children: [
            i && (0, p.jsx)(lO, { sourcePage: "voice" }),
            t && (0, p.jsx)(st.A, { look: st.k.WARNING, children: g.intl.string(g.t.Ioz3gx) }),
        ],
    });
}
let uK = (0, a.zZ)(u.X.VOICE_CATEGORY, {
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
            let e = lj("voice"),
                t = (0, aI.x5)(av.oh.AUDIO_INPUT),
                i = (0, aI.x5)(av.oh.AUDIO_OUTPUT),
                n = f.useMemo(() => {
                    let e = uX.some((e) => t?.hardwareId?.startsWith(e)),
                        n = uX.some((e) => i?.hardwareId?.startsWith(e));
                    return e && n && t?.containerId != null && t.containerId === i?.containerId;
                }, [t, i]);
            return f.useMemo(
                () =>
                    e.canPrompt || n
                        ? {
                              type: eN.lT.STRONGLY_DISCOURAGED_CUSTOM,
                              notice: () =>
                                  (0, p.jsx)(uH, {
                                      inputAndOutputAreBluetooth: n,
                                      canPromptSystemServiceInstallForVoice: e.canPrompt,
                                  }),
                          }
                        : null,
                [e.canPrompt, n],
            );
        },
        buildLayout: () => [uG, uV, uY],
    }),
    uW = (0, a.t_)(u.X.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => g.intl.string(g.t.B1fFpf),
        buildLayout: () => [uK, oK, aL, uL, uI, uc, a9],
    }),
    uZ = (0, a.i4)(u.X.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.B1fFpf),
        usePredicate: () => lb.Ay.isSupported(),
        icon: am.c,
        useMenu: aA.A,
        buildLayout: () => [uW],
    }),
    uq = (0, a.zZ)(u.X.WINDOWS_CATEGORY, {
        buildLayout: () => [rr, r5, ra, rc],
        initialize: () => {
            rl();
        },
    }),
    uQ = (0, a.t_)(u.X.WINDOWS_PANEL, { useTitle: () => g.intl.string(g.t.ZkDZov), buildLayout: () => [uq] }),
    uJ = (0, a.i4)(u.X.WINDOWS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.ZkDZov),
        icon: e2.k,
        usePredicate: () => ev.isPlatformEmbedded && (0, ev.isWindows)(),
        buildLayout: () => [uQ],
    }),
    u$ = (0, a.WI)(u.X.APP_SECTION, {
        useTitle: () => g.intl.string(g.t.gcyH1J),
        buildLayout: function () {
            let e = (0, o.SB)("AppSection_buildLayout");
            return [uZ, lE, n0, r4, e ? ag : l9, rn, e ? null : uJ, e ? null : rA].filter(t6.Vq);
        },
    });
var u0 = i(360669),
    u1 = i(974544),
    u2 = i(546605),
    u3 = i(423764),
    u6 = i(289873),
    u4 = i(465323),
    u7 = i(37766),
    u5 = i(194261),
    u8 = i(391048),
    u9 = i(753390),
    de = i(99696),
    dt = i(202613),
    di = i(615405),
    dn = i(580630),
    ds = i(83617),
    dl = i(935208),
    dr = i(607399),
    da = i(150934),
    du = i(256006),
    dd = i(198970),
    dc = i(71532);
let dg = /[^0-9/]/g,
    dm = /[^0-9]/g;
class dA extends f.PureComponent {
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
                ((n = (i = e.replace(dg, "").split("/"))[0]),
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
            ? (u = u.replace(dm, ""))
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
var dh = i(832208),
    dE = i(536439);
let dS = [
        {
            fields: [
                {
                    expirationDate: {
                        name: "expirationDate",
                        id: (0, sT.Ld)(),
                        title: () => g.intl.string(g.t["CeBa/4"]),
                        autoComplete: "cc-exp",
                        placeholder: () => g.intl.string(g.t.xeEWQ6),
                        pattern: "\\d*",
                        getClassNameForLayout: () => dE.ep,
                        renderInput: (e) => (0, p.jsx)(dA, { ...e }),
                    },
                }.expirationDate,
            ],
        },
    ],
    dT = function (e) {
        let { onCardInfoChange: t, className: i, expirationDate: n, error: s } = e,
            [l, r] = f.useState(!1),
            [a, o] = f.useState(null),
            [u, d] = f.useState(n);
        return (
            f.useEffect(() => {
                t({ expirationDate: u }, null === a);
            }, [u, t, a]),
            (0, p.jsx)(dh.A, {
                className: i,
                form: dS,
                values: { expirationDate: u },
                errors: null != a ? { expirationDate: a } : {},
                formError: s,
                onFieldChange: (e) => {
                    l || "" === e || r(!0),
                        (l && "" === e) || !(0, dc.So)(e) ? o(g.intl.string(g.t["9/zZdl"])) : o(null),
                        d(e);
                },
            })
        );
    };
var dx = i(219887),
    dp = i(276589);
let df = "isDefault";
class dN extends f.PureComponent {
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
            expiresMonth: t instanceof dt.YS ? t.expiresMonth : void 0,
            expiresYear: t instanceof dt.YS ? t.expiresYear : void 0,
            billingAddressValid: !1,
            isDefault: i,
            expirationValid: !0,
            dirtyFields: {},
        };
    }
    componentWillUnmount() {
        n3.h.wait(() => {
            (0, u9.ey)(), (0, u9.tc)();
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
                      className: dp.zc,
                      children: (0, p.jsx)(j.w, { type: "critical", children: t.message }),
                  })
                : null
            : (0, p.jsx)("div", {
                  className: dp.zc,
                  children: (0, p.jsx)(j.w, { type: "critical", children: e.message }),
              });
    }
    renderBillingAddressSection() {
        let { billingAddress: e } = this.state,
            { updateError: t, paymentSource: i } = this.props,
            n = (0, du.g)(i);
        return (0, p.jsxs)("div", {
            className: dp.yV,
            children: [
                (0, p.jsx)(V.E, {
                    className: dp.bV,
                    variant: "text-sm/normal",
                    children: g.intl.string(g.t["50Auo2"]),
                }),
                (0, p.jsx)(dd.Ay, {
                    ...e,
                    mode: dd.Ay.Modes.EDIT,
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
            className: dp.yV,
            children: [
                (0, p.jsx)(V.E, { className: dp.bV, variant: "text-sm/normal", children: g.intl.string(g.t.Fo2YP7) }),
                (0, p.jsx)(dT, {
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
            className: dp.AU,
            children: (0, p.jsxs)(R.B, {
                direction: "horizontal",
                justify: "space-between",
                children: [
                    (0, p.jsx)(aB.e, {
                        children: (0, p.jsxs)("div", {
                            className: dp.lH,
                            children: [
                                i
                                    ? (0, p.jsx)(e0.m, {
                                          text: g.intl.string(g.t["v6/z28"]),
                                          children: (0, p.jsx)("div", { "aria-hidden": !0, className: dp.dm }),
                                      })
                                    : null,
                                (0, p.jsx)(eh.$, {
                                    type: "button",
                                    disabled: i || e,
                                    loading: t,
                                    onClick: this.handleDelete,
                                    variant: "critical-secondary",
                                    size: dr.Fr ? "sm" : "md",
                                    text: dr.Fr ? g.intl.string(g.t.oyYWHE) : g.intl.string(g.t.yk5qfb),
                                }),
                            ],
                        }),
                    }),
                    (0, p.jsxs)(aB.e, {
                        children: [
                            (0, p.jsx)(eh.$, {
                                type: "button",
                                disabled: e || t,
                                onClick: this.handleCancel,
                                variant: "secondary",
                                size: dr.Fr ? "sm" : "md",
                                text: g.intl.string(g.t["ETE/oC"]),
                            }),
                            (0, p.jsx)(eh.$, {
                                loading: e,
                                disabled: !n || t || !s,
                                type: "submit",
                                variant: "active",
                                size: dr.Fr ? "sm" : "md",
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
            r = e instanceof dt.SJ;
        return (0, p.jsx)(er.Z, {
            editable: !0,
            className: ew()(dp.Nr, n),
            children: (0, p.jsxs)("form", {
                onSubmit: this.handleSubmit,
                noValidate: !0,
                children: [
                    this.renderError(),
                    (0, p.jsxs)("div", {
                        className: dp.__invalid_paymentSection,
                        children: [
                            (0, p.jsx)(dx.A, {
                                paymentSource: e,
                                isDefault: t,
                                isForSubscription: s,
                                locale: i,
                                showLabels: !0,
                                showPaymentSourceIcon: !0,
                            }),
                            e.invalid
                                ? (0, p.jsx)("div", { className: dp.Um, children: g.intl.string(g.t["3R0U0b"]) })
                                : null,
                            (0, p.jsx)("div", {
                                className: dp.Sv,
                                children: r
                                    ? g.intl.format(g.t.w9WkBl, { paypalURL: "https://www.paypal.com" })
                                    : g.intl.string(g.t.VXndyr),
                            }),
                        ],
                    }),
                    this.renderCardExpirationSection(),
                    this.renderBillingAddressSection(),
                    (0, p.jsx)("div", {
                        className: dp.D5,
                        children: (0, p.jsx)(da.S, {
                            value: df,
                            checked: l,
                            onChange: (e) => this.handleFieldChange(e, df),
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
let d_ = O.Ay.connectStores([di.A], () => ({ updateError: di.A.editSourceError, removeError: di.A.removeSourceError }))(
    dN,
);
var dI = i(776409),
    dC = i(447774),
    db = i(95322);
class dv extends f.PureComponent {
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
            ? (0, p.jsx)(d_, {
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
                      n ? null : (0, p.jsx)(eE.c, { className: db.__invalid_sourceDivider }),
                      (0, p.jsxs)("div", {
                          className: db.Yb,
                          children: [
                              (0, p.jsx)(dx.A, {
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
let dy = f.memo(function (e) {
    let { paymentSource: t, hideDivider: i, isForSubscription: n, locale: s, onRedeemClick: l } = e,
        [r, a] = f.useState(null),
        o = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.storeCountry?.country ?? null),
        u = (0, O.bG)([di.A], () => di.A.ipCountryCode),
        d = f.useMemo(() => (0, u4.TW)(`-${o ?? u ?? "US"}`), [o, u]);
    return (
        f.useEffect(() => {
            void 0 === t
                ? a({ amount: 0, currency: d })
                : u9.YP(t.id).then((e) => {
                      a(e);
                  });
        }, [t, d]),
        (0, p.jsxs)(p.Fragment, {
            children: [
                i ? null : (0, p.jsx)(eE.c, { className: db.__invalid_sourceDivider }),
                (0, p.jsxs)("div", {
                    className: db.Yb,
                    children: [
                        void 0 !== t
                            ? (0, p.jsx)(dx.A, {
                                  paymentSource: t,
                                  isDefault: !1,
                                  isForSubscription: n,
                                  locale: s,
                                  showSubtext: !1,
                                  showLabels: !1,
                                  showPaymentSourceIcon: !0,
                              })
                            : (0, p.jsxs)(lU.A, {
                                  align: lU.A.Align.CENTER,
                                  children: [
                                      (0, p.jsx)(u7._, { size: "lg" }),
                                      (0, p.jsx)(V.E, {
                                          variant: "text-sm/medium",
                                          className: dC.Wi,
                                          children: g.intl.string(dI.default["/FQWfA"]),
                                      }),
                                  ],
                              }),
                        (0, p.jsxs)("div", {
                            className: db.zy,
                            children: [
                                (0, p.jsx)("div", {
                                    className: db.Tq,
                                    children:
                                        null == r
                                            ? (0, p.jsx)(u6.y, { type: u6.y.Type.SPINNING_CIRCLE })
                                            : (0, p.jsx)(V.E, {
                                                  variant: "text-sm/medium",
                                                  children: (() => {
                                                      let { amount: e, currency: t } = r ?? {},
                                                          i = t ?? d,
                                                          n = String(i).toUpperCase(),
                                                          s = (0, dn.$g)(e ?? 0, i, {
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
                                    text: g.intl.string(dI.default.iBFPMf),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
class dj extends f.PureComponent {
    state = { editingPayment: null };
    handleEditClick = async (e) => {
        try {
            await u9.Gr(e), this.setState({ editingPayment: e });
        } catch (e) {}
    };
    handleCancel = () => {
        this.setState({ editingPayment: null });
    };
    handleDelete = async (e) => {
        try {
            await u9.JQ(e), this.setState({ editingPayment: null });
        } catch (e) {}
    };
    handleSubmit = async (e, t) => {
        if (null != e)
            try {
                await u9.Ps(e, t), this.setState({ editingPayment: null });
            } catch (e) {}
    };
    handlePaymentSourceAdded = async (e) => {
        await (0, ds.c_)(e.id);
    };
    handleAddPaymentMethod = () => {
        (0, _.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(i.bind(i, 362111));
                return (t) => (0, p.jsx)(e, { ...t, onAddPaymentSource: this.handlePaymentSourceAdded });
            },
            {
                onCloseCallback: () => {
                    (0, u8.ET)();
                },
                onCloseRequest: q.tEg,
            },
        );
    };
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, p.jsxs)("div", {
            className: db.qr,
            children: [
                0 === Object.keys(e).length
                    ? (0, p.jsxs)("div", {
                          className: db.z8,
                          children: [
                              (0, p.jsx)(V.E, { variant: "text-sm/normal", children: g.intl.string(g.t.aRHpAB) }),
                              (0, p.jsx)(V.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  className: db.Sv,
                                  children: g.intl.string(g.t.o9bOIl),
                              }),
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
                .sort((e, t) => (e.id === i ? -1 : t.id === i ? 1 : dl.default.compare(e.id, t.id))),
            d = u.filter((e) => !(e instanceof dt.LQ)),
            c = u.filter((e) => e instanceof dt.LQ),
            m = this.state.editingPayment,
            A = d.findIndex((e) => e.id === m),
            h = d.map((e, t) =>
                (0, p.jsx)(
                    dv,
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
                              dy,
                              {
                                  paymentSource: e,
                                  hideDivider: 0 === d.length || A === d.length - 1,
                                  isForSubscription: e.id === a,
                                  locale: s,
                                  onRedeemClick: () =>
                                      (0, de.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page" }),
                              },
                              e.id,
                          ),
                      )
                    : (0, p.jsx)(dy, {
                          hideDivider: 0 === d.length || A === d.length - 1,
                          isForSubscription: !1,
                          locale: s,
                          onRedeemClick: () =>
                              (0, de.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page" }),
                      })),
            (0, p.jsxs)(p.Fragment, {
                children: [
                    t
                        ? (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsxs)(eA.D, {
                                      variant: "heading-lg/semibold",
                                      children: [
                                          (0, p.jsx)(u5.X, { size: "sm", className: db.hz }),
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
var dO = i(459357),
    dR = i(295405),
    dL = i(166403),
    dD = i(773669),
    dP = i(589764);
function dG() {
    let e = (0, u2.vg)("PaymentMethodsHeader"),
        t = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.storeCountry);
    return e && t?.country != null ? { country: t.country, countryName: (0, u3.Gw)(t.country) } : null;
}
let dU = (0, a.E2)(u.X.BILLING_PAYMENT_METHODS, {
        Component: function (e) {
            let { showHeader: t = !1 } = e,
                i = (0, O.bG)([di.A], () => di.A.isSyncing),
                n = (0, O.bG)([dR.A], () => dR.A.paymentSources),
                s = (0, O.bG)([dR.A], () => dR.A.defaultPaymentSourceId),
                l = (0, O.bG)([dD.default], () => dD.default.locale),
                r = (0, O.bG)([dL.A], () => dL.A.getPremiumTypeSubscription()),
                a = (0, O.bG)([di.A], () => di.A.isRemovingPaymentSource),
                o = (0, O.bG)([di.A], () => di.A.isUpdatingPaymentSource),
                { enabled: u } = (0, dO.c)({ location: "UserSettingsBilling" });
            return (f.useEffect(() => {
                u9.$o(), u9.hP();
            }, []),
            i && 0 === Object.keys(n).length)
                ? (0, p.jsx)("div", { className: dP.o, children: (0, p.jsx)(u6.y, {}) })
                : (0, p.jsx)(dj, {
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
        useSearchTerms: () => [g.intl.string(g.t.W26xGQ), g.intl.string(g.t["3pIjBH"])],
    }),
    dM = (0, a.zZ)(u.X.BILLING_PAYMENT_METHODS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.W26xGQ),
        useSubtitle: () => {
            let e = dG();
            return null != e ? g.intl.format(g.t.e2t1G5, { country: e.countryName }) : g.intl.string(g.t.h6V3uK);
        },
        useSubtitleDecoration: function () {
            return null == dG()
                ? null
                : {
                      type: eN.p3.INFO_POPOVER,
                      ariaLabel: g.intl.string(g.t.PuB1W7),
                      popoverProps: {
                          title: "",
                          body: g.intl.string(g.t["21skUa"]),
                          size: "sm",
                          position: "top",
                          getActions: (e) => [
                              {
                                  text: g.intl.string(g.t.PuB1W7),
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
        buildLayout: () => [dU],
    });
var dV = i(549363),
    dk = i(545075);
let dw = (0, a.E2)(u.X.BILLING_TRANSACTION_HISTORY, {
        Component: function () {
            let e = (0, O.bG)([dD.default], () => dD.default.locale);
            return (0, p.jsxs)(p.Fragment, { children: [(0, p.jsx)(dk.kb, {}), (0, p.jsx)(dV.A, { locale: e })] });
        },
        useSearchTerms: () => [g.intl.string(g.t.obLrcK)],
    }),
    dB = (0, a.zZ)(u.X.BILLING_TRANSACTION_HISTORY_CATEGORY, {
        useTitle: () => g.intl.string(g.t.obLrcK),
        buildLayout: () => [dw],
    }),
    dF = (0, a.t_)(u.X.BILLING_PANEL, {
        useTitle: () => g.intl.string(g.t.oeUm2s),
        buildLayout: () => [dM, dB],
        useObscuredNotice: u1.L,
    }),
    dz = (0, a.i4)(u.X.BILLING_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.oeUm2s),
        icon: u0.B,
        buildLayout: () => [dF],
    });
var dY = i(597770),
    dX = i(962644),
    dH = i(35587),
    dK = i(86379);
let dW = (0, a.E2)(u.X.GIFT_BLOCKED_PAYMENTS_SETTING, {
        Component: dk.uK,
        usePredicate: () => (0, dK.Hp)(),
        useSearchTerms: () => [g.intl.string(g.t.vwMEHS)],
    }),
    dZ = (0, a.zZ)(u.X.GIFT_BLOCKED_PAYMENTS_CATEGORY, { buildLayout: () => [dW] });
var dq = i(532446),
    dQ = i(869038),
    dJ = i(499454),
    d$ = i(45938);
class d0 extends f.Component {
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
                    await (0, de.Qp)(i),
                        (0, de.HF)({ initialCode: i, withRedemptionSuccessModal: !0 }),
                        this.setState({ codeInput: "" });
                    return;
                } catch {}
            let e = (0, d$.Vd)(t);
            if (null == e) return void this.setState({ hasError: !0 });
            let n = await dQ.A.resolveGiftCode(e);
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
                (0, dJ.h)({ processedCode: e }),
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
            r = e ? g.intl.string(g.t["hVEn/j"]) : g.intl.string(g.t.SeKIoS),
            a = e ? g.intl.string(g.t.epHMtp) : void 0;
        return (0, p.jsx)(ia.n, {
            label: e ? void 0 : g.intl.string(g.t["il+VCo"]),
            children: (0, p.jsx)("form", {
                onSubmit: this.handleSubmit,
                children: (0, p.jsxs)(dq.M, {
                    children: [
                        (0, p.jsx)(lL.k, {
                            label: r,
                            description: a,
                            type: t ? "password" : "text",
                            value: i,
                            onChange: this.handleChange,
                            placeholder: "WUMP-AAAAA-BBBBB-CCCCC",
                            error: !l && s ? g.intl.string(g.t.Y11a2u) : null,
                            helperText: l
                                ? g.intl.format(g.t.gPt3PE, {
                                      promoLink: () => {
                                          window.open(`https://discord.com/billing/promotions/${i}`);
                                      },
                                  })
                                : null,
                            fullWidth: !0,
                        }),
                        (0, p.jsx)(eh.$, {
                            variant: "primary",
                            text: g.intl.string(g.t.KIpp7M),
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
function d1(e) {
    let { redesign: t = !1 } = e,
        { enabled: i } = (0, dO.c)({ location: "UserSettingsBilling" }),
        n = f.useContext(Y.AnalyticsContext),
        s = (0, O.bG)([e_.A], () => e_.A.enabled);
    return (0, p.jsx)(d0, { analyticsContext: n, obscureInput: s, acceptGiftCardRedemption: i, redesign: t });
}
let d2 = (0, a.E2)(u.X.GIFT_CODE_REDEMPTION_SETTING, {
    Component: d1,
    usePredicate: () => !(0, dK.Hp)(),
    useSearchTerms: () => [g.intl.string(g.t["jcSP+g"]), g.intl.string(g.t["il+VCo"])],
});
var d3 = i(725570),
    d6 = i(707554),
    d4 = i(736653),
    d7 = i(46054);
let d5 = ry().duration(30, "days");
var d8 = i(264779),
    d9 = i(416052),
    ce = i(961302);
function ct(e) {
    let { onClose: t, transitionState: i } = e;
    return (0, p.jsx)(lR.Modal, {
        title: "",
        size: "md",
        input: (0, p.jsx)("div", { className: ce.aR }),
        onClose: async () => await t(),
        actions: [{ text: g.intl.string(g.t.cpT0Cq), variant: "primary", onClick: t }],
        transitionState: i,
        children: (0, p.jsxs)("div", {
            className: ce.t4,
            children: [
                (0, p.jsx)(eA.D, { variant: "heading-xl/semibold", children: g.intl.string(g.t.iufib1) }),
                (0, p.jsx)(V.E, { variant: "text-md/normal", className: ce.G3, children: g.intl.string(g.t.eAn6z2) }),
            ],
        }),
    });
}
let ci = function (e) {
    let { onClose: t, onClaim: i, code: n, outboundPromotion: s, transitionState: l } = e,
        [r, a] = f.useState(null),
        o = (0, sT.GV)(),
        { analyticsLocations: u } = (0, nG.Ay)(eM.A.USER_SETTINGS_GIFT_INVENTORY);
    return (f.useEffect(() => {
        null == n &&
            (0, d8.kd)({
                promotionId: s.id,
                promotionTitle: s.outboundTitle,
                partnerId: s.partnerId,
                analyticsLocations: u,
            })
                .then((e) => i(e))
                .catch((e) => a(e?.body?.code));
    }, [n, s.id, s.outboundTitle, s.partnerId, i, u]),
    null != r)
        ? (0, p.jsx)(ct, { onClose: t, transitionState: l })
        : null == n
          ? (0, p.jsx)(u6.y, { className: ce.Lq })
          : (0, p.jsx)(lR.Modal, {
                title: "",
                size: "md",
                onClose: async () => await t(),
                input: (0, p.jsxs)("div", {
                    className: ce.N1,
                    children: [
                        (0, p.jsx)("div", { className: ce.Qw }),
                        (0, p.jsx)(eA.D, { variant: "heading-xl/semibold", children: g.intl.string(g.t["23BfZh"]) }),
                        (0, p.jsx)(V.E, {
                            variant: "text-md/normal",
                            className: ce.G3,
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
                            let e = (0, d8.kc)(n, s);
                            window.open(e, "_blank");
                        },
                    },
                ],
                transitionState: l,
                "aria-label": o,
                children: (0, p.jsxs)("div", {
                    children: [
                        (0, p.jsx)(eE.c, { className: ce.M5 }),
                        (0, p.jsx)(sy.D, {
                            label: g.intl.string(g.t.s9LFQh),
                            helperText: g.intl.string(g.t["F+nFTZ"]),
                            children: (0, p.jsx)(d9.A, {
                                value: n,
                                buttonColor: ak.$n.Colors.BRAND,
                                buttonLook: ak.$n.Looks.FILLED,
                                delay: 1e3,
                            }),
                        }),
                    ],
                }),
            });
};
var cn = i(725807),
    cs = i(212168),
    cl = i(469778),
    cr = i(109802),
    ca = i(503787);
let co = (e) => {
        let { children: t, className: i, splashArtURL: n } = e;
        return (0, p.jsxs)(lU.A, {
            className: ew()(ca.wx, i),
            align: lU.A.Align.CENTER,
            children: [
                (0, p.jsx)("div", { className: ca.Bn, style: null != n ? { backgroundImage: `url(${n})` } : void 0 }),
                t,
            ],
        });
    },
    cu = (e) => {
        let { children: t, className: i } = e;
        return (0, p.jsx)("div", { className: ew()(ca.rf, i), children: t });
    };
class cd extends f.PureComponent {
    static Header = co;
    static Body = cu;
    render() {
        let { children: e, className: t, onMouseEnter: i, onMouseLeave: n } = this.props;
        return (0, p.jsx)("div", { className: ew()(ca.Nr, t), onMouseEnter: i, onMouseLeave: n, children: e });
    }
}
var cc = i(75825),
    cg = i(871123),
    cm = i(366523),
    cA = i(495544),
    ch = i(30793),
    cE = i(97352),
    cS = i(67480),
    cT = i(147925),
    cx = i(957565),
    cp = i(615396),
    cf = i(86629);
class cN extends f.PureComponent {
    _copyModeTimeout = new oC.Ep();
    state = { copyMode: cr.q.DEFAULT };
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case cr.q.SUCCESS:
                return g.intl.string(g.t.XVvPjU);
            case cr.q.ERROR:
                return g.intl.string(g.t.i4GM3L);
            default:
                return g.intl.string(g.t.OpuAlK);
        }
    }
    handleRevoke(e) {
        dQ.A.revokeGiftCode(e);
    }
    handleCopy = (e) => {
        let { giftCode: t, sku: i } = this.props;
        (0, d$.AK)(t, i),
            (0, cx.C)(
                e,
                () => this.setState({ copyMode: cr.q.SUCCESS }),
                () => this.setState({ copyMode: cr.q.ERROR }),
            ),
            this._copyModeTimeout.start(1e3, () => {
                this.setState({ copyMode: cr.q.DEFAULT });
            });
    };
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: i } = this.state;
        return (0, p.jsxs)(lU.A, {
            direction: lU.A.Direction.VERTICAL,
            className: cf.Gj,
            children: [
                (0, p.jsx)(cr.e, {
                    className: cf.ph,
                    value: (0, d$.Zq)(t.code),
                    text: this.copyButtonText,
                    mode: i,
                    supportsCopy: cx.p5,
                    hideMessage: e ? g.intl.string(g.t["0RLn47"]) : null,
                    onCopy: this.handleCopy,
                    buttonColor: ak.XD.BRAND,
                    buttonLook: ak.pR.FILLED,
                }),
                (0, p.jsxs)("div", {
                    className: cf.KB,
                    children: [
                        null != t.expiresAt
                            ? (0, p.jsxs)(f.Fragment, {
                                  children: [
                                      g.intl.format(g.t.ltVZcJ, { hours: t.expiresAt.diff(ry()(), "h") }),
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
class c_ extends f.PureComponent {
    _loadedAt = null;
    state = { isOpen: !1, isCreating: !1, isHovered: !1 };
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    handleGenerateGiftCode = async (e) => {
        e.stopPropagation();
        let { skuId: t, subscriptionPlanId: i, giftStyle: n } = this.props;
        this.setState({ isCreating: !0 }),
            await dQ.A.createGiftCode(t, i, n),
            this.setState({ isCreating: !1, isOpen: !0 });
    };
    handleToggleOpen = () => {
        let { skuId: e, subscriptionPlanId: t, loadedAt: i } = this.props,
            n = !this.state.isOpen;
        (null == i || null == this._loadedAt || i < this._loadedAt) && n && dQ.A.fetchUserGiftCodesForSKU(e, t),
            this.setState({ isOpen: !this.state.isOpen });
    };
    renderGiftIcon() {
        let { sku: e, giftStyle: t, application: i } = this.props;
        return (0, cg.bF)(e)
            ? (0, p.jsx)(cm.e, { shape: "square", sku: e, containerClassName: cf.ez })
            : null != t
              ? (0, p.jsx)(cc.A, { giftStyle: t, className: cf.ez, shouldAnimate: this.state.isHovered })
              : (0, p.jsx)(e5.A, { game: i, size: e5.M.MEDIUM, skuId: e.id });
    }
    renderSubtitle() {
        let { sku: e, entitlements: t, application: i } = this.props;
        return (0, cg.bF)(e)
            ? (0, p.jsxs)("div", {
                  className: ew()(cf.Oc, cf.ic),
                  children: [
                      (0, p.jsx)(e5.A, { game: i, size: e5.M.XSMALL, skuId: e.id, className: cf._u }),
                      g.intl.format(g.t["6plpZi"], { applicationName: i.name, copies: t.length }),
                  ],
              })
            : (0, p.jsx)("div", { className: cf.Oc, children: g.intl.format(g.t.zMcvcA, { copies: t.length }) });
    }
    renderTitle() {
        let e,
            { sku: t, subscriptionPlan: i, giftCodeBatchId: n } = this.props;
        return (
            (e =
                n === sp.FB
                    ? g.intl.string(g.t.odsU6W)
                    : n === sp.Bu && null != i
                      ? g.intl.formatToPlainString(i.interval === sp.WT.MONTH ? g.t.uZjpiJ : g.t.bJW1EA, {
                            skuName: t.name,
                            intervalCount: i.intervalCount,
                        })
                      : null == i
                        ? t.name
                        : g.intl.formatToPlainString(i.interval === sp.WT.MONTH ? g.t.rCJvqo : g.t.Vd3Iu8, {
                              skuName: t.name,
                              intervalCount: i.intervalCount,
                          })),
            (0, p.jsx)("div", { className: cf.mO, children: e })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, p.jsxs)(lU.A, {
            justify: lU.A.Justify.BETWEEN,
            align: lU.A.Align.CENTER,
            className: cf.pe,
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
        return (0, p.jsxs)(cd, {
            className: n,
            children: [
                (0, p.jsx)(M.D, {
                    onClick: this.handleToggleOpen,
                    className: cf.Nr,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, p.jsx)(cd.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, p.jsxs)("div", {
                            className: cf.MY,
                            children: [
                                (0, p.jsxs)(lU.A, {
                                    align: lU.A.Align.CENTER,
                                    children: [
                                        this.renderGiftIcon(),
                                        (0, p.jsxs)("div", {
                                            className: cf.TK,
                                            children: [this.renderTitle(), this.renderSubtitle()],
                                        }),
                                    ],
                                }),
                                (0, p.jsx)(cT.A, {
                                    direction: a ? cT.A.Directions.UP : cT.A.Directions.DOWN,
                                    className: cf.eO,
                                }),
                            ],
                        }),
                    }),
                }),
                a
                    ? (0, p.jsx)(cd.Body, {
                          children: l
                              ? (0, p.jsx)(u6.y, { className: cf.u1 })
                              : (0, p.jsxs)(f.Fragment, {
                                    children: [
                                        i.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        i.map((e) => (0, p.jsx)(cN, { giftCode: e, sku: s, hideCode: r }, e.code)),
                                    ],
                                }),
                      })
                    : null,
            ],
        });
    }
}
let cI = O.Ay.connectStores([cS.A, e_.A, ch.A, eW.A, cE.A, cA.default], (e) => {
    let { skuId: t, subscriptionPlanId: i, giftStyle: n } = e,
        s = cS.A.get(t);
    if (null == s) throw Error("SKU was unavailable while rendering gift.");
    let l = ch.A.getForGifterSKUAndPlan(cA.default.getId(), t, i)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === n);
    return {
        sku: s,
        hideCodes: e_.A.enabled,
        isFetching: ch.A.getUserGiftCodesFetchingForSKUAndPlan(t, i),
        loadedAt: ch.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, i),
        application: eW.A.getApplication(s.applicationId),
        subscriptionPlan: null != i ? (0, cp.c9)(i) : null,
        giftCodes: l,
    };
})(c_);
var cC = i(928661);
function cb(e) {
    let { redesign: t = !1 } = e,
        i = (0, O.yK)([cl.A], () => cl.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null != t;
        }),
        n = (0, O.bG)([t3.default], () => o3.Ay.isPremiumExactly(t3.default.getCurrentUser(), sp.PremiumTypes.TIER_2)),
        s = (0, O.bG)([t3.default], () => !o3.Ay.isPremium(t3.default.getCurrentUser())),
        {
            activeOutboundPromotions: l,
            claimedEndedOutboundPromotions: r,
            claimedOutboundPromotionCodeMap: a,
        } = (0, dH.y7)(),
        o = i.find((e) => e.giftCodeBatchId === sp.FB && !e.consumed),
        u = i.filter((e) => e.giftCodeBatchId === sp.Bu && !e.consumed) ?? [],
        [d, c] = eR().partition(u, (e) => {
            let { subscriptionPlanId: t } = e;
            return t === sp.gD.PREMIUM_YEAR_TIER_2;
        }),
        m = l.length + r.length > 0,
        A =
            t || !m
                ? null
                : (0, p.jsxs)("div", {
                      className: cC.N1,
                      children: [
                          (0, p.jsx)(eA.D, { variant: "heading-md/semibold", children: g.intl.string(g.t.wFsj3B) }),
                          (0, p.jsx)(eE.c, { className: cC.yF }),
                      ],
                  }),
        h =
            s && m
                ? (0, p.jsxs)("div", {
                      className: cC.uo,
                      children: [
                          (0, p.jsx)(oW.t, {
                              size: "md",
                              color: w.A.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                              className: cC.PC,
                          }),
                          (0, p.jsx)(V.E, {
                              variant: "text-md/normal",
                              className: cC.Qw,
                              children: g.intl.format(g.t.G4fwxK, {
                                  onClick: () => {
                                      (0, sh.default)(), (0, sj.pX)(q.BVt.APPLICATION_STORE);
                                  },
                              }),
                          }),
                          (0, p.jsx)(cn.A, {
                              showGradient: !0,
                              className: cC.aA,
                              subscriptionTier: sp.pe.TIER_2,
                              textOptions: { textOverride: g.intl.string(g.t.mr4K7D) },
                          }),
                      ],
                  })
                : null;
    return (0, p.jsxs)("div", {
        children: [
            A,
            (0, p.jsx)(cs.A, {
                className: cC.Yj,
                isShown: s && m,
                type: cs.i.PREMIUM,
                hasBackground: !0,
                children: (0, p.jsxs)("div", {
                    className: cC.DE,
                    children: [
                        h,
                        r.map((e) => {
                            let { code: t, promotion: i } = e;
                            return (0, p.jsx)(cj, { outboundPromotion: i, code: t, disabled: !n }, i.id);
                        }),
                        l.map((e) => (0, p.jsx)(cj, { outboundPromotion: e, code: a[e.id], disabled: !n }, e.id)),
                        null != o
                            ? (0, p.jsx)(
                                  cI,
                                  {
                                      skuId: o.skuId,
                                      subscriptionPlanId: o.subscriptionPlanId,
                                      entitlements: [o],
                                      giftCodeBatchId: sp.FB,
                                  },
                                  (0, d$.Kx)(o.skuId, o.subscriptionPlanId),
                              )
                            : null,
                        d.length > 0
                            ? (0, p.jsx)(
                                  cI,
                                  {
                                      skuId: d[0].skuId,
                                      subscriptionPlanId: d[0].subscriptionPlanId,
                                      entitlements: d,
                                      giftCodeBatchId: sp.Bu,
                                  },
                                  (0, d$.Kx)(d[0].skuId, d[0].subscriptionPlanId),
                              )
                            : null,
                        c.length > 0
                            ? (0, p.jsx)(
                                  cI,
                                  {
                                      skuId: c[0].skuId,
                                      subscriptionPlanId: c[0].subscriptionPlanId,
                                      entitlements: c,
                                      giftCodeBatchId: sp.Bu,
                                  },
                                  (0, d$.Kx)(c[0].skuId, c[0].subscriptionPlanId),
                              )
                            : null,
                    ],
                }),
            }),
        ],
    });
}
var cv = i(339048);
function cy() {
    let e = (0, O.yK)([cl.A], () => cl.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null == t;
        }),
        t = eR().groupBy(e, (e) => (0, d$.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [i, n] = f.useState(!1);
    if (
        (f.useEffect(() => {
            n3.h.wait(() => {
                (0, cv.XJ)().then(() => n(!0));
            });
        }, []),
        !i)
    )
        return (0, p.jsx)(u6.y, { className: cC.Lq });
    if (0 === Object.keys(t).length)
        return (0, p.jsxs)("div", {
            className: cC.p$,
            children: [
                (0, p.jsx)("div", { className: cC.QT }),
                (0, p.jsx)(d6.H, { className: cC.ks, children: g.intl.string(g.t.B1qgZn) }),
                (0, p.jsx)("p", {
                    className: cC.WO,
                    children: g.intl.format(g.t.HezvJ8, {
                        onClick: function () {
                            (0, ey.openUserSettings)(u.X.NITRO_PANEL);
                        },
                    }),
                }),
            ],
        });
    let s = eR()
        .keys(t)
        .map((e) => {
            let { skuId: i, subscriptionPlanId: n, giftStyle: s } = (0, d$.X6)(e);
            return (0, p.jsx)(cI, { skuId: i, subscriptionPlanId: n, entitlements: t[e], giftStyle: s }, e);
        });
    return (0, p.jsx)(R.B, { gap: "lg", children: s });
}
function cj(e) {
    let t,
        { outboundPromotion: i, code: n, disabled: s } = e,
        [l, r] = f.useState(!1),
        [a, o] = f.useState(!1),
        u = () => r((e) => !e),
        d = (0, d4.Ay)(),
        c = (0, d8.WD)(i.id, d),
        m = null != n,
        A = f.useMemo(
            () =>
                (0, rj.i$)(
                    m
                        ? null != i.outboundRedemptionEndDate
                            ? ry()(i.outboundRedemptionEndDate)
                            : ry()(i.endDate).add(d5)
                        : ry()(i.endDate),
                    "LL",
                ),
            [i, m],
        );
    m && l
        ? (t = g.intl.format(g.t.pkxVx6, { endDate: A, onClickDetails: u }))
        : m && !l
          ? (t = g.intl.format(g.t["4sFeob"], { endDate: A, onClickDetails: u }))
          : !m && l
            ? (t = g.intl.format(g.t["RBnE+l"], { endDate: A, onClickDetails: u }))
            : m || l || (t = g.intl.format(g.t["57+7Qn"], { endDate: A, onClickDetails: u }));
    let h = m ? g.intl.string(g.t["2cHUti"]) : g.intl.string(g.t.O13yhz),
        E = f.useCallback(() => o(!1), []),
        { outboundTitle: S, outboundTermsAndConditions: T } = i;
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsxs)("div", {
                className: cC.AX,
                children: [
                    (0, p.jsxs)("div", {
                        className: cC.gE,
                        children: [
                            (0, p.jsxs)("div", {
                                className: cC.At,
                                children: [
                                    (0, p.jsx)("div", {
                                        className: cC.$G,
                                        children: (0, p.jsx)("img", { alt: "", src: c, className: cC.IJ }),
                                    }),
                                    (0, p.jsxs)("div", {
                                        children: [
                                            (0, p.jsx)(eA.D, { variant: "heading-md/semibold", children: S }),
                                            (0, p.jsx)(V.E, {
                                                variant: "text-sm/normal",
                                                color: "text-default",
                                                children: t,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            !s && (0, p.jsx)(eh.$, { text: h, onClick: () => o(!0), disabled: s, size: "sm" }),
                        ],
                    }),
                    l &&
                        (0, p.jsx)(V.E, {
                            className: cC.GL,
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: d7.A.parse(T, !1, { allowLinks: !0 }),
                        }),
                ],
            }),
            a &&
                (0, p.jsx)(d3.aF, {
                    renderModal: (e) =>
                        (0, p.jsx)(ci, {
                            ...e,
                            onClose: E,
                            onClaim: dX.Ay.addClaimedOutboundPromotionCode,
                            code: n,
                            outboundPromotion: i,
                        }),
                    onCloseRequest: E,
                }),
        ],
    });
}
let cO = (0, a.E2)(u.X.GIFT_INVENTORY_LIST_SETTING, {
    Component: function () {
        return (0, p.jsxs)(R.B, {
            gap: "md",
            children: [
                (0, p.jsx)(cb, {}),
                (0, p.jsx)("div", {
                    className: cC.N1,
                    children: (0, p.jsxs)(d6.F, {
                        component: (0, p.jsx)(eA.D, {
                            variant: "heading-md/semibold",
                            children: g.intl.string(g.t["9KeUbY"]),
                        }),
                        children: [(0, p.jsx)(eE.c, { className: cC.yF }), (0, p.jsx)(cy, {})],
                    }),
                }),
            ],
        });
    },
    usePredicate: () => !(0, dK.Hp)(),
    useSearchTerms: () => [g.intl.string(g.t["jcSP+g"]), g.intl.string(g.t["9KeUbY"])],
});
var cR = i(89366),
    cL = i(881489),
    cD = i(374200),
    cP = i(354670);
let cG = (0, a.zZ)(u.X.MY_GIFTS_CATEGORY, {
        useTitle: cM,
        buildLayout: () => [cU],
        usePredicate: () => {
            let e = (0, cR.QQ)(),
                t = (0, O.bG)([cP.A], () => cP.A.hasAnyUnexpiredOffer()),
                i = (0, cL.ds)(),
                { claimedOutboundPromotionCodes: n, claimedOutboundPromotionCodesLoaded: s } = (0, O.cf)(
                    [cD.A],
                    () => ({
                        claimedOutboundPromotionCodes: cD.A.claimedOutboundPromotionCodes,
                        claimedOutboundPromotionCodesLoaded: cD.A.claimedOutboundPromotionCodesLoaded,
                    }),
                ),
                l = (0, d8.eN)(n),
                r = (0, dH.T1)(e, t, i, l),
                a = (0, d8.Wl)(n, r).length;
            return s && r.length + a > 0;
        },
    }),
    cU = (0, a.E2)(u.X.MY_GIFTS_CONTENT, {
        useSearchTerms: () => [cM()],
        Component: () => (0, p.jsx)(cb, { redesign: !0 }),
    });
function cM() {
    return (0, o.ri)("MyGifts") ? g.intl.string(g.t.YzjdWJ) : g.intl.string(g.t.wFsj3B);
}
let cV = (0, a.zZ)(u.X.PURCHASED_GIFTS_CATEGORY, { useTitle: cw, buildLayout: () => [ck] }),
    ck = (0, a.E2)(u.X.PURCHASED_GIFTS_CONTENT, { useSearchTerms: () => [cw()], Component: () => (0, p.jsx)(cy, {}) });
function cw() {
    return (0, o.ri)("PurchasedGifts") ? g.intl.string(g.t.FWe6CP) : g.intl.string(g.t["9KeUbY"]);
}
let cB = (0, a.zZ)(u.X.REDEEM_GIFT_CATEGORY, {
        useTitle: () => g.intl.string(g.t["il+VCo"]),
        buildLayout: () => [cF],
        usePredicate: () => !(0, dK.Hp)(),
    }),
    cF = (0, a.E2)(u.X.REDEEM_CODE_INPUT, {
        Component: () => (0, p.jsx)(d1, { redesign: !0 }),
        useSearchTerms: () => [g.intl.string(g.t["jcSP+g"]), g.intl.string(g.t["il+VCo"])],
    }),
    cz = (0, a.zZ)(u.X.GIFT_INVENTORY_LEGACY_CATEGORY, { buildLayout: () => [d2, cO, dW] }),
    cY = (0, a.t_)(u.X.GIFT_PANEL, {
        useTitle: cH,
        buildLayout: () => ((0, o.SB)("GiftPanel") ? [cB, cG, cV, dZ] : [cz]),
        initialize: () => {
            (0, o.SB)("GiftPanel") && dX.Ay.fetchClaimedOutboundPromotionCodes();
        },
    }),
    cX = (0, a.i4)(u.X.GIFT_SIDEBAR_ITEM, {
        useTitle: cH,
        icon: dY.o,
        usePersistentBadge: function () {
            return f.useMemo(() => ({ badgeType: eN.Xi.COUNT, useCount: () => (0, dH.IO)().length }), []);
        },
        buildLayout: () => [cY],
    });
function cH() {
    return (0, o.ri)("GiftPanel") ? g.intl.string(g.t.QvIFi0) : g.intl.string(g.t["jcSP+g"]);
}
var cK = i(659758),
    cW = i(102581),
    cZ = i(815846);
let cq = (0, a.E2)(u.X.NITRO_SETTING, {
        Component: function () {
            let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser());
            return (0, o3.YE)(e, sp.PremiumTypes.TIER_2) ? (0, p.jsx)(cZ.A, {}) : (0, p.jsx)(cW.A, {});
        },
        useSearchTerms: () => [g.intl.string(g.t.Ipxkog)],
    }),
    cQ = (0, a.zZ)(u.X.NITRO_CATEGORY, { buildLayout: () => [cq] }),
    cJ = (0, a.t_)(u.X.NITRO_PANEL, {
        useTitle: () => g.intl.string(g.t.Ipxkog),
        useObscuredNotice: u1.L,
        buildLayout: () => [cQ],
    }),
    c$ = (0, a.i4)(u.X.NITRO_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.Ipxkog),
        icon: oW.t,
        usePersistentBadge: function (e) {
            return f.useMemo(
                () => ({ badgeType: eN.Xi.STRONGLY_DISCOURAGED_CUSTOM, useCustomBadge: () => (0, cK.e)(e) }),
                [e],
            );
        },
        buildLayout: () => [cJ],
    });
var c0 = i(104510),
    c1 = i(820739),
    c2 = i(73825),
    c3 = i(160946);
let c6 = (0, i(240921).Ay)({
    name: "2026-03-boosting-settings-refresh",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var c4 = i(859241),
    c7 = i(531260),
    c5 = i(369163),
    c8 = i(957485),
    c9 = i(926268),
    ge = i(106529),
    gt = i(93364);
function gi(e) {
    let { className: t, icon: i, children: n } = e;
    return (0, p.jsxs)("li", {
        className: ew()(ge.Nr, t),
        children: [
            (0, p.jsx)(i, { className: ge.Kk }),
            (0, p.jsx)(V.E, { className: ge.__invalid_description, variant: "text-sm/medium", children: n }),
        ],
    });
}
let gn = function (e) {
    let { cardClassName: t } = e;
    return (0, p.jsxs)("div", {
        className: ge.iE,
        children: [
            (0, p.jsxs)("div", {
                className: ge.Qs,
                children: [
                    (0, p.jsx)(eA.D, {
                        className: ge.R_,
                        color: "always-white",
                        variant: "heading-xxl/bold",
                        children: g.intl.string(g.t.IzKs3o),
                    }),
                    (0, p.jsxs)("ul", {
                        className: ge.kR,
                        children: [
                            (0, p.jsx)(gi, { className: t, icon: c5.v, children: g.intl.string(g.t.TZigSO) }),
                            (0, p.jsx)(gi, {
                                className: t,
                                icon: (e) =>
                                    (0, p.jsx)("img", { className: ew()(e.className, ge.Dp), src: gt, alt: "" }),
                                children: g.intl.string(g.t.hjQuV2),
                            }),
                            (0, p.jsx)(gi, { className: t, icon: c8.i, children: g.intl.string(g.t["2RUcaM"]) }),
                            (0, p.jsx)(gi, { className: t, icon: c9.C, children: g.intl.string(g.t.bJoZKV) }),
                        ],
                    }),
                ],
            }),
            (0, p.jsx)("div", { className: ge.JP }),
        ],
    });
};
var gs = i(834040),
    gl = i(811227);
let gr = [
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
    ga = function (e) {
        let { className: t } = e,
            [i, n] = f.useState(null);
        return (0, p.jsxs)("div", {
            className: ew()(gl.iE, t),
            children: [
                (0, p.jsx)(eA.D, {
                    className: gl.R_,
                    variant: "heading-xxl/bold",
                    children: g.intl.string(g.t.HPJ6Nj),
                }),
                (0, p.jsx)("ul", {
                    className: gl.p_,
                    children: gr.map((e, t) => {
                        let s = i === t;
                        return (0, p.jsxs)(
                            "div",
                            {
                                className: gl.Aw,
                                children: [
                                    (0, p.jsxs)(M.D, {
                                        className: ew()(gl.k7, { [gl.lo]: s }),
                                        onClick: () => n((e) => (e === t ? null : t)),
                                        tag: "li",
                                        children: [
                                            (0, p.jsx)(V.E, {
                                                className: gl.b1,
                                                variant: "text-lg/normal",
                                                children: e.getQuestion(),
                                            }),
                                            s
                                                ? (0, p.jsx)(gs.Q, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: gl.q4,
                                                  })
                                                : (0, p.jsx)(r7.j, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: gl.q4,
                                                  }),
                                        ],
                                    }),
                                    s &&
                                        (0, p.jsx)(V.E, {
                                            className: gl.ZF,
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
var go = i(462887),
    gu = i(933832),
    gd = i(789645),
    gc = i(116891),
    gg = i(416676);
let gm = [
    {
        getPerkHeading: () => g.intl.string(g.t.tIiwuj),
        getPerkPreviewLightTheme: () => i(604203),
        getPerkPreviewDarkTheme: () => i(878515),
        getTier0Value: () => sp.TG[q.TVA.NONE].limits.emoji,
        getTier1Value: () => sp.TG[q.TVA.TIER_1].limits.emoji,
        getTier2Value: () => sp.TG[q.TVA.TIER_2].limits.emoji,
        getTier3Value: () => sp.TG[q.TVA.TIER_3].limits.emoji,
    },
    {
        getPerkHeading: () => g.intl.string(g.t["3iccet"]),
        getPerkPreviewLightTheme: () => i(105732),
        getPerkPreviewDarkTheme: () => i(857020),
        getTier0Value: () => sp.TG[q.TVA.NONE].limits.stickers,
        getTier1Value: () => sp.TG[q.TVA.TIER_1].limits.stickers,
        getTier2Value: () => sp.TG[q.TVA.TIER_2].limits.stickers,
        getTier3Value: () => sp.TG[q.TVA.TIER_3].limits.stickers,
    },
    {
        getPerkHeading: () => g.intl.string(g.t["+smCv9"]),
        getPerkPreviewLightTheme: () => i(597890),
        getPerkPreviewDarkTheme: () => i(297642),
        getTier0Value: () => sp.TG[q.TVA.NONE].limits.soundboardSounds,
        getTier1Value: () => sp.TG[q.TVA.TIER_1].limits.soundboardSounds,
        getTier2Value: () => sp.TG[q.TVA.TIER_2].limits.soundboardSounds,
        getTier3Value: () => sp.TG[q.TVA.TIER_3].limits.soundboardSounds,
    },
    {
        getPerkHeading: () => g.intl.string(g.t.SMYauD),
        getPerkPreviewLightTheme: () => i(323091),
        getPerkPreviewDarkTheme: () => i(261835),
        getTier0Value: () =>
            g.intl.formatToPlainString(g.t.zZ6Rdi, {
                resolution: sp.TG[q.TVA.NONE].limits.screenShareQualityResolution,
                framerate: sp.TG[q.TVA.NONE].limits.screenShareQualityFramerate,
            }),
        getTier1Value: () =>
            g.intl.formatToPlainString(g.t.zZ6Rdi, {
                resolution: sp.TG[q.TVA.TIER_1].limits.screenShareQualityResolution,
                framerate: sp.TG[q.TVA.TIER_1].limits.screenShareQualityFramerate,
            }),
        getTier2Value: () =>
            g.intl.formatToPlainString(g.t.zZ6Rdi, {
                resolution: (0, gc.eT)("GuildBoostingMarketingTierComparisonTable"),
                framerate: sp.TG[q.TVA.TIER_2].limits.screenShareQualityFramerate,
            }),
        getTier3Value: () =>
            g.intl.formatToPlainString(g.t.zZ6Rdi, {
                resolution: (0, gc.eT)("GuildBoostingMarketingTierComparisonTable"),
                framerate: sp.TG[q.TVA.TIER_3].limits.screenShareQualityFramerate,
            }),
    },
    {
        getPerkHeading: () => g.intl.string(g.t["/79IDj"]),
        getPerkPreviewLightTheme: () => i(913997),
        getPerkPreviewDarkTheme: () => i(95781),
        getTier0Value: () =>
            g.intl.formatToPlainString(g.t.w1gmLt, { bitrate: sp.TG[q.TVA.NONE].limits.bitrate / 1e3 }),
        getTier1Value: () =>
            g.intl.formatToPlainString(g.t.w1gmLt, { bitrate: sp.TG[q.TVA.TIER_1].limits.bitrate / 1e3 }),
        getTier2Value: () =>
            g.intl.formatToPlainString(g.t.w1gmLt, { bitrate: sp.TG[q.TVA.TIER_2].limits.bitrate / 1e3 }),
        getTier3Value: () =>
            g.intl.formatToPlainString(g.t.w1gmLt, { bitrate: sp.TG[q.TVA.TIER_3].limits.bitrate / 1e3 }),
    },
    {
        getPerkHeading: () => g.intl.string(g.t.R1U2xC),
        getPerkPreviewLightTheme: () => i(389833),
        getPerkPreviewDarkTheme: () => i(754561),
        getTier0Value: () =>
            g.intl.formatToPlainString(g.t.pIn7Af, { size: sp.TG[q.TVA.NONE].limits.fileSize / 1048576 }),
        getTier1Value: () =>
            g.intl.formatToPlainString(g.t.pIn7Af, { size: sp.TG[q.TVA.TIER_1].limits.fileSize / 1048576 }),
        getTier2Value: () =>
            g.intl.formatToPlainString(g.t.pIn7Af, { size: sp.TG[q.TVA.TIER_2].limits.fileSize / 1048576 }),
        getTier3Value: () =>
            g.intl.formatToPlainString(g.t.pIn7Af, { size: sp.TG[q.TVA.TIER_3].limits.fileSize / 1048576 }),
    },
    {
        getPerkHeading: () => g.intl.string(g.t.f6vfso),
        getPerkPreviewLightTheme: () => i(735669),
        getPerkPreviewDarkTheme: () => i(283517),
        getTier0Value: () => sp.TG[q.TVA.NONE].limits.stageVideoUsers,
        getTier1Value: () => sp.TG[q.TVA.TIER_1].limits.stageVideoUsers,
        getTier2Value: () => sp.TG[q.TVA.TIER_2].limits.stageVideoUsers,
        getTier3Value: () => sp.TG[q.TVA.TIER_3].limits.stageVideoUsers,
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
function gA(e) {
    let { children: t, className: i, tier: n } = e,
        s = n === q.TVA.NONE ? "text-muted" : "text-strong",
        l = n === q.TVA.NONE || null == n ? "heading-xl/normal" : "heading-xl/bold";
    return (0, p.jsxs)("th", {
        className: ew()(gg.PG, i),
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
function gh(e) {
    let t,
        { className: i, textVariant: n = "text-md/bold", value: s } = e;
    if ("boolean" == typeof s) {
        let e = ew()(gg.Jk, { [gg.I$]: s });
        t = s
            ? (0, p.jsx)(gu.A, { size: "md", color: "currentColor", className: e })
            : (0, p.jsx)(gd.P, { size: "md", color: "currentColor", className: e });
    } else t = (0, p.jsx)(V.E, { color: "interactive-text-active", variant: n, children: s });
    return (0, p.jsx)("td", { className: ew()(gg.xR, i), children: t });
}
function gE(e) {
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
              className: ew()(gg.ER, { [gg.GH]: i === q.TVA.TIER_2, [gg.z5]: i === q.TVA.TIER_3 }),
              children: (0, p.jsx)(V.E, {
                  className: gg.uQ,
                  color: "always-white",
                  variant: "text-xs/bold",
                  children: t === q.TVA.TIER_3 ? g.intl.string(g.t.d849Up) : g.intl.string(g.t.dZeX1z),
              }),
          });
}
function gS(e) {
    let { isFocused: t, handleFocus: i, handleRowBlur: n, theme: s, row: l, hideTier0: r } = e,
        a = f.useRef(null);
    return (0, p.jsxs)("tr", {
        className: gg.__invalid_tableRow,
        children: [
            (0, p.jsx)("th", {
                className: ew()(gg.xR, gg.uB),
                scope: "row",
                children: (0, p.jsx)(M.D, {
                    className: ew()(gg.VC, gg.xR, gg.Rk),
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
                                className: gg.Mz,
                                src: (0, go.M)(s) ? l.getPerkPreviewDarkTheme() : l.getPerkPreviewLightTheme(),
                                alt: "",
                            }),
                        shouldShow: t,
                        spacing: 16,
                        children: () =>
                            (0, p.jsx)(V.E, { variant: "text-md/normal", ref: a, children: l.getPerkHeading() }),
                    }),
                }),
            }),
            !r && (0, p.jsx)(gh, { textVariant: "text-md/normal", value: l.getTier0Value() }),
            (0, p.jsx)(gh, { value: l.getTier1Value() }),
            (0, p.jsx)(gh, { value: l.getTier2Value() }),
            (0, p.jsx)(gh, { value: l.getTier3Value() }),
        ],
    });
}
let gT = function (e) {
    let t = (0, d4.Ay)(),
        [i, n] = f.useState(null),
        { className: s, guild: l, hideHeading: r, hideTier0: a } = e;
    function o() {
        n(null);
    }
    return (0, p.jsxs)("div", {
        className: s,
        children: [
            !r &&
                (0, p.jsx)(eA.D, {
                    className: gg.R_,
                    variant: "heading-xxl/extrabold",
                    children: g.intl.string(g.t["9GGb9k"]),
                }),
            (0, p.jsxs)("div", {
                className: gg.wY,
                children: [
                    null != l && (0, p.jsx)(gE, { currentTier: l.premiumTier }),
                    (0, p.jsxs)("table", {
                        className: gg.tp,
                        cellPadding: 0,
                        cellSpacing: 0,
                        children: [
                            (0, p.jsx)("thead", {
                                children: (0, p.jsxs)("tr", {
                                    className: gg.__invalid_tableRow,
                                    children: [
                                        (0, p.jsx)(gA, { className: gg.VC, children: g.intl.string(g.t.F5MY0k) }),
                                        !a && (0, p.jsx)(gA, { tier: q.TVA.NONE, children: g.intl.string(g.t.mx8j2m) }),
                                        (0, p.jsx)(gA, { tier: q.TVA.TIER_1, children: g.intl.string(g.t.nzXtaS) }),
                                        (0, p.jsx)(gA, { tier: q.TVA.TIER_2, children: g.intl.string(g.t["h33/uW"]) }),
                                        (0, p.jsx)(gA, { tier: q.TVA.TIER_3, children: g.intl.string(g.t.BfF6ED) }),
                                    ],
                                }),
                            }),
                            (0, p.jsx)("tbody", {
                                className: gg.__invalid_tableBody,
                                children: gm.map((e, s) => {
                                    let l = i === s;
                                    return void 0 === e.predicate
                                        ? (0, p.jsx)(
                                              gS,
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
var gx = i(338548),
    gp = i(776096),
    gf = i(178368),
    gN = i(873174),
    g_ = i(866323),
    gI = i(530005),
    gC = i(443865),
    gb = i(473145);
function gv(e) {
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
            a === sp.xc.NONE &&
                ((o.transfer.disabled = !0),
                (o.transfer.subtext = g.intl.string(g.t.LiLRRT)),
                (o.cancel.subtext = g.intl.string(g.t["1ywaWL"])),
                (o.cancel.disabled = !0),
                (o.uncancel.disabled = !0));
    }
    let d = f.useMemo(
        () =>
            l.isPausedOrPausePending && a === sp.xc.NONE
                ? (0, p.jsx)(U.Dr, {
                      id: "manage-subscription",
                      label: g.intl.string(g.t.obRG6Y),
                      action: () => (0, ey.openUserSettings)(u.X.SUBSCRIPTIONS_PANEL),
                      iconLeft: gC.x,
                      leadingAccessory: { type: "icon", icon: gC.x },
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
            (0, gb.I5)(t)
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
var gy = i(545934),
    gj = i(496431);
let gO = function (e) {
    let { className: t, cooldown: i } = e,
        n = (0, gj.A)(i);
    return (0, p.jsx)(V.E, {
        className: t,
        variant: "text-sm/medium",
        color: "text-muted",
        children: (0, rj.uN)(n, { days: g.t.WUTPDc, hours: g.t.c1qodV, minutes: g.t["2+A3dv"] }),
    });
};
var gR = i(482900);
let gL = function (e) {
    let { className: t, imageClassName: n, boostInCooldown: s, useReducedMotion: l } = e;
    return (0, p.jsx)("div", {
        className: ew()(gR.h4, t, { [gR.K2]: s }),
        children: (0, p.jsx)("img", {
            className: ew()(gR.Sl, n, { [gR.x8]: s }),
            src: s
                ? i(650442)
                : l
                  ? i(742885)
                  : "https://cdn.discordapp.com/assets/content/86fd98fc22283647a8be93d0c503646b53c84e3cb25ca6562a38cecb84327e58.gif",
            alt: "",
        }),
    });
};
var gD = i(583032);
let gP = function (e) {
    let { className: t, hasCooldown: n, isCanceled: s, useReducedMotion: l } = e;
    return (0, p.jsxs)("div", {
        className: ew()(gD.sn, t),
        children: [
            s
                ? (0, p.jsx)("img", { className: ew()(gD.$J, gD.qX), src: i(728707), alt: "" })
                : (0, p.jsx)(gL, { className: gD.$J, boostInCooldown: n, useReducedMotion: l }),
            !s && n && (0, p.jsx)("img", { className: gD.De, src: i(438807), alt: "" }),
        ],
    });
};
var gG = i(548118),
    gU = i(509536),
    gM = i(944304),
    gV = i(864310),
    gk = i(245390);
let gw = function (e) {
    let { className: t, guildId: i, boostingVariant: n } = e,
        s = (0, uk.bG)([H.A], () => H.A.getGuild(i), [i]),
        l = (0, gV.A)(s?.id).total;
    return null == s
        ? (0, p.jsx)("div", {
              className: ew()(t, gk.bo),
              children: (0, p.jsx)("div", {
                  className: gk.$g,
                  children: (0, p.jsx)(V.E, { variant: "text-lg/bold", children: g.intl.string(g.t["6Kwwuo"]) }),
              }),
          })
        : (0, p.jsxs)("div", {
              className: ew()(t, gk.bo),
              children: [
                  (0, p.jsx)(gG.Ay, { className: gk.__invalid_guildIcon, guild: s, size: gG.Ay.Sizes.LARGER }),
                  (0, p.jsxs)("div", {
                      className: gk.$g,
                      children: [
                          (0, p.jsx)(V.E, { variant: "text-lg/bold", children: s.name }),
                          (0, p.jsxs)("div", {
                              className: gk.TZ,
                              children: [
                                  (0, p.jsx)(c0._, {
                                      color: w.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                      className: gk.Me,
                                  }),
                                  (0, p.jsx)(V.E, {
                                      variant: "text-sm/bold",
                                      color: "text-muted",
                                      children: g.intl.format(g.t["pob/cL"], { subscriptions: l }),
                                  }),
                                  (0, p.jsx)("div", { className: gk.me }),
                                  (0, p.jsx)(V.E, {
                                      variant: "text-sm/bold",
                                      color: "text-muted",
                                      children: (0, gb.gb)(s.premiumTier, { useLevels: !1 }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  n
                      ? (0, p.jsx)(gM.A, {
                            guild: s,
                            analyticsLocation: {
                                page: q.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                section: q.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                object: q.ZSU.BUTTON_CTA,
                                objectType: q.AnalyticsObjectTypes.BUY,
                            },
                            pauseAnimation: !0,
                            size: ak.$n.Sizes.MEDIUM,
                            color: ak.$n.Colors.PRIMARY,
                            buttonText: g.intl.string(g.t.aBHecF),
                        })
                      : (0, p.jsx)(eh.$, {
                            variant: "secondary",
                            text: g.intl.string(g.t.KLOhbO),
                            onClick: () => {
                                (0, sh.default)(),
                                    (0, gU.K4)({
                                        guildId: s.id,
                                        location: { section: q.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA },
                                    });
                            },
                        }),
              ],
          });
};
var gB = i(85566);
function gF(e) {
    let {
            guildTier: t,
            guildBoostSlot: i,
            showAltText: n,
            isCanceled: s,
            premiumSubscription: l,
            fractionalPremiumInfo: r,
        } = e,
        a = f.useMemo(() => {
            if (s) {
                let e = l.currentPeriodEnd;
                return (
                    l.isPausedForFractionalPremium && (e = r.endsAt.toDate()), g.intl.format(g.t.Z4ULRD, { date: e })
                );
            }
            let e = null != i.premiumGuildSubscription ? dl.default.extractTimestamp(i.premiumGuildSubscription.id) : 0;
            return g.intl.formatToPlainString(g.t.lY2Bur, { date: new Date(e) });
        }, [i, s, l, r]),
        o = f.useMemo(
            () =>
                (function (e) {
                    if (null == e || e === q.TVA.NONE) return "";
                    let t = [
                        g.intl.formatToPlainString(g.t["dLlKX/"], { numEmojiSlots: sp.TG[e].limits.emoji }),
                        g.intl.formatToPlainString(g.t["+ANIfv"], { numStickerSlots: sp.TG[e].limits.stickers }),
                        g.intl.formatToPlainString(g.t["4gt60b"], {
                            numSoundboardSlots: sp.TG[e].limits.soundboardSounds,
                        }),
                        g.intl.formatToPlainString(g.t.XahSjZ, {
                            resolution: sp.TG[e].limits.screenShareQualityResolution,
                            framerate: sp.TG[e].limits.screenShareQualityFramerate,
                        }),
                        g.intl.formatToPlainString(g.t.NbNs7S, { bitrate: sp.TG[e].limits.bitrate / 1e3 }),
                        g.intl.formatToPlainString(g.t.VVKcpn, { filesize: sp.TG[e].limits.fileSize / 1024 / 1024 }),
                        g.intl.formatToPlainString(g.t.TbpCvv, { numVideoStageSeats: sp.TG[e].limits.stageVideoUsers }),
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
        u = (0, g_.p)(n, { from: { opacity: 0 }, enter: { opacity: 1 }, leave: { opacity: 0 } }, "animate-always");
    return s || t === q.TVA.NONE
        ? (0, p.jsx)("div", {
              className: gB.xm,
              children: (0, p.jsx)(V.E, { variant: "text-sm/medium", color: "text-muted", children: a }),
          })
        : u((e, t) =>
              (0, p.jsx)(gN.animated.div, {
                  style: e,
                  className: gB.xm,
                  children: (0, p.jsx)(V.E, { variant: "text-sm/medium", color: "text-muted", children: t ? o : a }),
              }),
          );
}
function gz(e) {
    let {
            guildTier: t,
            guildBoostSlot: i,
            premiumSubscription: n,
            hasCancelableGuildBoostSlot: s,
            showAltText: l,
            isLastGuildBoostSlot: r,
        } = e,
        a = (0, uk.bG)([iK.A], () => iK.A.useReducedMotion),
        o = f.useMemo(() => (null != i.cooldownEndsAt ? new Date(i.cooldownEndsAt) : null), [i]),
        u = f.useMemo(() => null != o && o > new Date(), [o]),
        d = (0, gb.I5)(i),
        c = (0, c7.A)(),
        m = f.useRef(null);
    return (0, p.jsxs)("div", {
        className: gB.PW,
        children: [
            (0, p.jsxs)("div", {
                className: gB.$U,
                children: [
                    (0, p.jsx)(gP, { isCanceled: d, hasCooldown: u, useReducedMotion: a }),
                    (0, p.jsx)("div", {
                        className: gB.vh,
                        children:
                            null != o && u && !d
                                ? (0, p.jsx)(gO, { className: gB.xm, cooldown: o.getTime() })
                                : (0, p.jsx)(gF, {
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
                            return (0, p.jsx)(gv, {
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
                                className: gB.oU,
                                children: (0, p.jsx)(gI.F, { size: "md", color: "currentColor" }),
                            }),
                    }),
                ],
            }),
            !r && (0, p.jsx)("div", { className: gB.eX }),
        ],
    });
}
function gY(e) {
    let {
            guildId: t,
            guildBoostSlotRecords: i,
            premiumSubscription: n,
            hasCancelableGuildBoostSlot: s,
            showAltText: l,
        } = e,
        r = (0, uk.bG)([H.A], () => H.A.getGuild(t), [t]);
    return (0, p.jsxs)("div", {
        className: gB.ag,
        children: [
            (0, p.jsx)(gw, { guildId: t, boostingVariant: !1 }),
            i.map((e, t) =>
                (0, p.jsx)(
                    gz,
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
function gX(e) {
    let { guildId: t, appliedGuildBoosts: i, premiumSubscription: n } = e,
        s = (0, uk.bG)([H.A], () => H.A.getGuild(t), [t]),
        l = dl.default.fromTimestamp(Date.now());
    if (
        (i.forEach((e) => {
            (null == l || 0 > dl.default.compare(e.id, l)) && (l = e.id);
        }),
        null == l)
    )
        return null;
    let r = gy.A.createFromServer(
        {
            id: dl.default.fromTimestamp(Date.now()),
            subscription_id: n.id,
            canceled: !1,
            premium_guild_subscription: { id: l, guild_id: t },
            cooldown_ends_at: null,
        },
        n,
    );
    return (0, p.jsxs)("div", {
        className: gB.ag,
        children: [
            (0, p.jsx)(gw, { guildId: t, boostingVariant: !1 }),
            i.map((e, t) =>
                (0, p.jsx)(
                    gz,
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
function gH(e) {
    let { appliedGuildBoosts: t, premiumSubscription: i } = e,
        n = f.useMemo(() => {
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
              className: gB.iE,
              children: [
                  (0, p.jsx)("div", {
                      className: gB.kL,
                      children: dl.default
                          .keys(n)
                          .map((e) =>
                              (0, p.jsx)(gX, { guildId: e, premiumSubscription: i, appliedGuildBoosts: n[e] }, e),
                          ),
                  }),
                  (0, p.jsx)("div", { className: gB.vK }),
              ],
          });
}
function gK(e) {
    let { guildBoostSlots: t, premiumSubscription: i } = e,
        [n, s] = f.useState(!1);
    f.useEffect(() => {
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
    let { boostsByGuildId: l, numActiveGuildBoostSlots: r } = f.useMemo(() => {
        let e = 0,
            i = {};
        return (
            Object.keys(t).forEach((n) => {
                let s = t[n];
                if ((!(0, gb.I5)(s) && e++, null != s.premiumGuildSubscription)) {
                    let e = s.premiumGuildSubscription.guildId;
                    e in i || (i[e] = []), i[e].push(s);
                }
            }),
            { boostsByGuildId: i, numActiveGuildBoostSlots: e }
        );
    }, [t]);
    if (null == i || 0 === Object.keys(l).length) return null;
    let a = r > o3.Ay.getNumIncludedPremiumGuildSubscriptionSlots(i.planId);
    return (0, p.jsxs)("div", {
        className: gB.iE,
        children: [
            (0, p.jsx)("div", {
                className: gB.kL,
                children: dl.default
                    .keys(l)
                    .map((e) =>
                        (0, p.jsx)(
                            gY,
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
            (0, p.jsx)("div", { className: gB.vK }),
        ],
    });
}
var gW = i(520610);
let gZ = function (e) {
    let { hasGuildBoostSlots: t, hasAppliedGuildBoosts: n, hasBoostPerk: s, canAddBoosts: l } = e;
    return (0, p.jsxs)("div", {
        className: gW.iE,
        children: [
            (0, p.jsx)("div", {
                className: gW.bj,
                children: (0, p.jsx)("img", { alt: "", className: gW.KV, src: i(742885) }),
            }),
            (0, p.jsxs)("div", {
                className: gW.D7,
                children: [
                    (0, p.jsx)(eA.D, {
                        variant: "display-md",
                        className: gW.R_,
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
                        className: gW.Mz,
                        children: (0, p.jsx)("path", {
                            d: "M101.3,45.5C57.5,45.9,15.9,82.2,0,99.5V210h660V53.5c-164-137-265.2,32.4-385.8,33.6  C177.7,88.1,158.1,45,101.3,45.5z",
                        }),
                    }),
                ],
            }),
        ],
    });
};
var gq = i(20218),
    gQ = i(168482);
function gJ() {
    return (0, p.jsxs)("div", {
        className: gq.iE,
        children: [
            (0, p.jsx)("img", { className: gq.Kk, alt: "", src: gQ }),
            (0, p.jsxs)("div", {
                className: gq.pq,
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
                    (0, sj.pX)(q.BVt.GUILD_DISCOVERY), (0, sh.default)();
                },
            }),
        ],
    });
}
var g$ = i(502572),
    g0 = i(614820),
    g1 = i(987144),
    g2 = i(805319);
let g3 = function () {
    let e = f.useRef(null),
        { analyticsLocations: t } = (0, nG.Ay)(),
        { fractionalState: n } = (0, c7.A)();
    function s(i) {
        null != e.current && (0, _.closeModal)(e.current),
            (0, g1.g)({
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
    let r = (0, gb.Nc)({ fractionalState: n });
    return (0, p.jsxs)("div", {
        className: g2.iE,
        children: [
            (0, p.jsx)(c0._, { color: w.A.unsafe_rawColors.GUILD_BOOSTING_PINK, className: g2.$J }),
            (0, p.jsx)(V.E, {
                className: g2.C,
                color: "text-default",
                variant: "text-sm/medium",
                children: g.intl.format(g.t.kqC5vq, {
                    boostAnyGuildHook: (e, t) => {
                        let i = null != r,
                            n = (0, g0.O)(e),
                            s = (0, p.jsx)("div", {
                                className: g2.lO,
                                children: (0, p.jsx)(
                                    B.Q,
                                    { variant: "primary", onClick: i ? void 0 : l, text: n, disabled: i },
                                    t,
                                ),
                            });
                        return i
                            ? (0, p.jsx)(
                                  g$.A,
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
var g6 = i(279574);
let g4 = function (e) {
    let { canAddBoosts: t, canApplyBoosts: i } = e,
        n = (0, O.bG)([gp.A], () => gp.A.affinities),
        s = (0, O.bG)([K.Ay], () => K.Ay.getFlattenedGuildIds()),
        l = f.useMemo(() => {
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
              className: g6.iE,
              children: [
                  t &&
                      (0, p.jsx)(eA.D, {
                          variant: "heading-lg/semibold",
                          className: g6.wx,
                          children: g.intl.string(g.t.r90Wgo),
                      }),
                  l.map((e) => (0, p.jsx)(gw, { className: g6.ZS, guildId: e, boostingVariant: !0 }, e)),
                  s.length > 3 && i && (0, p.jsx)(g3, {}),
              ],
          });
};
var g7 = i(649327);
let g5 = function (e) {
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
                        onClick: () => (0, ey.openUserSettings)(u.X.SUBSCRIPTIONS_PANEL),
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
            let l = sp.hd[sp.gD.PREMIUM_MONTH_GUILD],
                r = o3.Ay.getDefaultPrice(l.id, i),
                a = (0, dn.CE)((0, dn.$g)(r.amount, r.currency), l.interval, l.intervalCount);
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
        className: g7.i,
        children: [
            (0, p.jsx)(eA.D, { variant: "heading-lg/bold", className: g7.V, children: l }),
            null != r && (0, p.jsx)(V.E, { variant: "text-sm/normal", children: r }),
        ],
    });
};
var g8 = i(724624),
    g9 = i(983511),
    me = i(342744),
    mt = i(87719),
    mi = i(354888);
function mn(e) {
    let {
            guildBoostSlot: t,
            isCancellable: i,
            onCancel: n,
            onUncancel: s,
            premiumSubscription: l,
            useReducedMotion: r,
            fractionalState: a,
        } = e,
        o = f.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t]),
        u = (0, gb.I5)(t),
        d = l?.isPaused === !0 && a === sp.xc.NONE,
        c = g.intl.string(g.t.mOWsF1);
    return (0, p.jsxs)(
        "li",
        {
            className: mi.Hp,
            children: [
                (0, p.jsxs)("div", {
                    className: mi.YL,
                    children: [
                        (0, p.jsx)(gP, {
                            className: mi.W6,
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
                              ? (0, p.jsx)(gO, { cooldown: o.getTime() })
                              : (0, p.jsx)(V.E, {
                                    className: mi.__invalid_unappliedGuildBoostSlotDescription,
                                    color: "text-muted",
                                    variant: "text-sm/medium",
                                    children: g.intl.string(g.t["2mcafz"]),
                                }),
                    ],
                }),
                (0, p.jsxs)("div", {
                    className: mi.E7,
                    children: [
                        i &&
                            !u &&
                            (0, p.jsx)(g$.A, {
                                shouldShow: d,
                                text: c,
                                "aria-label": c.toString(),
                                children: (e) =>
                                    (0, p.jsx)("div", {
                                        className: mi.LB,
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
                            (0, p.jsx)(g$.A, {
                                shouldShow: d,
                                text: c,
                                "aria-label": c.toString(),
                                children: (e) =>
                                    (0, p.jsx)("div", {
                                        className: mi.LB,
                                        children: (0, p.jsx)(B.Q, {
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
function ms(e) {
    (0, _.openModalLazy)(async () => (t) => (0, p.jsx)(g9.default, { ...t, guildBoostSlot: e }));
}
function ml(e) {
    (0, _.openModalLazy)(async () => (t) => (0, p.jsx)(me.default, { ...t, guildBoostSlotId: e.id }));
}
let mr = function (e) {
    let t,
        i,
        n,
        { guildBoostSlots: s } = e,
        l = (0, O.bG)([dL.A], () => dL.A.getPremiumTypeSubscription()),
        r = l?.isPausedOrPausePending === !0,
        { fractionalState: a } = (0, c7.A)(),
        o = (0, O.bG)([iK.A], () => iK.A.useReducedMotion),
        u = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
        d = a === sp.xc.FP_SUB_PAUSED,
        c = r && !d,
        {
            appliedGuildBoostSlots: m,
            unappliedGuildBoostSlots: A,
            numActiveGuildBoostSlots: h,
            hasCooldownBoosts: E,
            allGuildBoostsAreOnCooldown: S,
        } = f.useMemo(() => {
            let e = [],
                t = [],
                i = 0,
                n = !1,
                l = !0;
            return (
                s.forEach((s) => {
                    !(0, gb.I5)(s) && i++,
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
        T = null != l ? o3.Ay.getNumIncludedPremiumGuildSubscriptionSlots(l.planId) : 0,
        x = Math.max(0, T - m.length),
        N = h > T,
        I = T === s.length,
        C = I ? x : 1,
        b = f.useMemo(() => {
            let e = [];
            for (let t = 0; t < C; t++) e.push((0, p.jsx)(gL, { className: mi.YA, useReducedMotion: o }, t));
            return e;
        }, [C, o]),
        v = f.useMemo(() => A.find((e) => e.isAvailable()), [A]);
    if (0 === A.length) return null;
    let y = A.length;
    if (
        ((t = I
            ? g.intl.formatToPlainString(S ? g.t["3DW6Dc"] : g.t["/u15Qc"], { numUnappliedGuildBoostSlots: y })
            : g.intl.formatToPlainString(S ? g.t["3DW6Dc"] : g.t.BPadnO, { numUnappliedGuildBoostSlots: y })),
        o3.Ay.isPremium(u))
    ) {
        let e = (e, t) =>
            (0, p.jsx)(
                M.D,
                {
                    className: mi.nw,
                    tag: "span",
                    onClick: () => {
                        (0, mt.e)();
                    },
                    children: e,
                },
                t,
            );
        i = S
            ? g.intl.format(g.t.omcpSE, { learnMoreHook: e })
            : g.intl.format(g.t["5mAkVi"], { numUnappliedGuildBoostSlots: y, learnMoreHook: e });
    } else
        i = S
            ? g.intl.string(g.t["8pcUZi"])
            : g.intl.formatToPlainString(g.t.Kaw82o, { numUnappliedGuildBoostSlots: y });
    return (
        (n = r && a === sp.xc.NONE ? g.intl.string(g.t.mOWsF1) : g.intl.string(g.t.xr4m5B)),
        (0, p.jsx)("div", {
            className: mi.iE,
            children: (0, p.jsxs)("div", {
                className: ew()(mi.Qs, [mi.Yq]),
                children: [
                    (0, p.jsxs)("div", {
                        className: mi.wx,
                        children: [
                            (0, p.jsxs)("div", {
                                className: mi.RW,
                                children: [
                                    (0, p.jsx)("div", { className: mi.PS, children: b }),
                                    (0, p.jsxs)("div", {
                                        className: mi.__invalid_headerCopy,
                                        children: [
                                            (0, p.jsx)(eA.D, {
                                                className: mi.gg,
                                                variant: "heading-lg/bold",
                                                children: t,
                                            }),
                                            (0, p.jsx)(V.E, {
                                                className: mi.__invalid_headerSubheading,
                                                color: "text-strong",
                                                variant: "text-sm/normal",
                                                children: i,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, p.jsx)("div", {
                                className: mi.di,
                                children: (0, p.jsx)(g$.A, {
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
                                                                  (0, p.jsx)(g8.default, {
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
                    (!I || E) &&
                        (0, p.jsx)("ul", {
                            className: mi.LU,
                            children: A.map((e) =>
                                (0, p.jsx)(
                                    mn,
                                    {
                                        guildBoostSlot: e,
                                        isCancellable: N,
                                        onCancel: ms,
                                        onUncancel: ml,
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
var ma = i(616659);
function mo(e) {
    let { premiumSubscription: t } = e,
        i = (0, O.bG)([gf.A], () => gf.A.boostSlots),
        n = f.useMemo(() => Object.values(i), [i]),
        s = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
        l = o3.Ay.isPremium(s, sp.PremiumTypes.TIER_2),
        r = (0, O.bG)([gp.A], () => gp.A.affinities),
        a = (0, O.bG)([K.Ay], () => K.Ay.getFlattenedGuildIds()),
        o = r.length > 0 || a.length > 0,
        u = n.length > 0,
        d = f.useMemo(() => n.filter((e) => null != e.premiumGuildSubscription), [n]),
        c = d.length > 0,
        g = n.length > d.length,
        m = (0, O.bG)([c4.A], () => c4.A.getCurrentUserAppliedBoosts()),
        { fractionalState: A } = (0, c7.A)({ forceFetch: !0 }),
        h = s?.isPremiumGroupMember(),
        E = t?.isPausedOrPausePending === !0 && A === sp.xc.NONE,
        S = t?.isPausedOrPausePending !== !0 && A === sp.xc.NONE && !h,
        T = l && A === sp.xc.FP_SUB_PAUSED,
        x = A === sp.xc.NONE && !h;
    return (0, p.jsxs)("div", {
        className: ma.GO,
        children: [
            (0, p.jsx)(dk.kb, { className: ma.ek }),
            (0, p.jsx)(gZ, { hasGuildBoostSlots: u, hasAppliedGuildBoosts: c, hasBoostPerk: T, canAddBoosts: S }),
            x &&
                (0, p.jsx)(g5, {
                    hasAppliedGuildBoosts: c,
                    hasBoostPerk: T,
                    hasGuildAffinitiesOrInGuild: o,
                    subscriptionIsPausedOrPausePending: E,
                }),
            h && (0, p.jsx)(gx.A, {}),
            !o && (0, p.jsx)(gJ, {}),
            t?.isPaused && A !== sp.xc.FP_SUB_PAUSED
                ? (0, p.jsx)(gH, { appliedGuildBoosts: m, premiumSubscription: t })
                : (0, p.jsx)(gK, { guildBoostSlots: i, premiumSubscription: t }),
            (0, p.jsx)(mr, { guildBoostSlots: n, fractionalPremiumState: A }),
            (0, p.jsx)(g4, { canAddBoosts: c && S, canApplyBoosts: g }),
            (0, p.jsx)(gT, { className: ma.e4, hideHeading: !0, hideTier0: !0 }),
            (0, p.jsx)(gn, { cardClassName: ma.KW }),
            (0, p.jsx)(ga, { className: ma.JL }),
        ],
    });
}
var mu = i(527113),
    md = i(365199),
    mc = i(162286);
function mg(e) {
    let { guild: t, className: i } = e,
        { total: n } = (0, gV.A)(t.id);
    return (0, p.jsxs)("div", {
        className: i ?? mc.OA,
        children: [
            (0, p.jsx)(gG.Ay, { className: mc.$f, guild: t, size: gG.Ay.Sizes.MEDIUM }),
            (0, p.jsxs)("div", {
                className: mc.gI,
                children: [
                    (0, p.jsx)(V.E, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        tag: "span",
                        children: t.name,
                    }),
                    (0, p.jsxs)("div", {
                        className: mc.ew,
                        children: [
                            (0, p.jsxs)("div", {
                                className: mc.QW,
                                children: [
                                    (0, p.jsx)(c0._, {
                                        className: mc.Wz,
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
                                        (0, p.jsx)("div", { className: mc.zk }),
                                        (0, p.jsx)(V.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-subtle",
                                            children: (0, gb.gb)(t.premiumTier, { useLevels: !1 }),
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
function mm(e) {
    let { guildId: t } = e,
        i = (0, O.bG)([H.A], () => H.A.getGuild(t), [t]);
    return null == i
        ? null
        : (0, p.jsxs)("div", {
              className: mc.Nr,
              children: [
                  (0, p.jsx)(mg, { guild: i }),
                  (0, p.jsx)(eh.$, {
                      variant: "secondary",
                      size: "sm",
                      icon: c0._,
                      text: g.intl.string(g.t.aBHecF),
                      onClick: () => {
                          (0, g1.g)({
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
var mA = i(225334);
let mh =
    "https://cdn.discordapp.com/assets/content/272d3fa6496aedb9dee76f2d555913bfd56c9e9aacd6de3c18449644d9749657.png";
function mE(e) {
    let { slot: t, guildTier: i, premiumSubscription: n, hasCancelableSlots: s, isLast: l } = e,
        r = f.useRef(null),
        a = (0, gb.I5)(t),
        o = f.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t.cooldownEndsAt]),
        u = null != o && o > new Date(),
        d = (0, c7.A)(),
        c = f.useMemo(
            () =>
                (function (e, t) {
                    if (null == e || e === q.TVA.NONE) return "";
                    let i = [
                        g.intl.formatToPlainString(g.t["dLlKX/"], { numEmojiSlots: sp.TG[e].limits.emoji }),
                        g.intl.formatToPlainString(g.t["+ANIfv"], { numStickerSlots: sp.TG[e].limits.stickers }),
                        g.intl.formatToPlainString(g.t["4gt60b"], {
                            numSoundboardSlots: sp.TG[e].limits.soundboardSounds,
                        }),
                        g.intl.formatToPlainString(g.t.XahSjZ, {
                            resolution: sp.TG[e].limits.screenShareQualityResolution,
                            framerate: sp.TG[e].limits.screenShareQualityFramerate,
                        }),
                        g.intl.formatToPlainString(g.t.NbNs7S, { bitrate: sp.TG[e].limits.bitrate / 1e3 }),
                        g.intl.formatToPlainString(g.t.VVKcpn, { filesize: sp.TG[e].limits.fileSize / 1024 / 1024 }),
                        g.intl.formatToPlainString(g.t.TbpCvv, { numVideoStageSeats: sp.TG[e].limits.stageVideoUsers }),
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
        m = f.useMemo(() => {
            if ("" !== c) return c;
            let e = null != t.premiumGuildSubscription ? dl.default.extractTimestamp(t.premiumGuildSubscription.id) : 0;
            return g.intl.formatToPlainString(g.t.lY2Bur, { date: new Date(e) });
        }, [c, t.premiumGuildSubscription]),
        A = f.useMemo(
            () => (a ? (n.isPausedForFractionalPremium ? d.endsAt.toDate() : n.currentPeriodEnd) : null),
            [a, n, d],
        );
    return (0, p.jsxs)("div", {
        className: ew()(mA.iq, { [mA.Mt]: l }),
        children: [
            (0, p.jsxs)("div", {
                className: mA.kd,
                children: [
                    (0, p.jsx)("img", { alt: "", className: mA.bB, src: mh }),
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
                                              (0, p.jsx)("div", { className: mA.zk }),
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
                                              (0, p.jsx)("div", { className: mA.zk }),
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
                    return (0, p.jsx)(gv, {
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
                        className: mA.Mj,
                        ...e,
                        children: (0, p.jsx)(md.j, { size: "xs", color: w.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                    }),
            }),
        ],
    });
}
function mS(e) {
    let { guildId: t, slots: i, premiumSubscription: n, hasCancelableSlots: s } = e,
        l = (0, O.bG)([H.A], () => H.A.getGuild(t), [t]);
    return (0, p.jsxs)("div", {
        className: mA.Nr,
        children: [
            (0, p.jsx)("div", {
                className: mA.MY,
                children:
                    null != l
                        ? (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsx)(mg, { guild: l, className: mA.OA }),
                                  (0, p.jsx)(eh.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: g.intl.string(g.t.KLOhbO),
                                      onClick: () => {
                                          (0, sh.default)(),
                                              (0, gU.K4)({
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
                              className: mA.OA,
                              children: (0, p.jsx)(eA.D, {
                                  variant: "heading-md/semibold",
                                  color: "text-default",
                                  children: g.intl.string(g.t["6Kwwuo"]),
                              }),
                          }),
            }),
            i.map((e, t) =>
                (0, p.jsx)(
                    mE,
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
function mT(e) {
    let { guildBoostSlots: t, premiumSubscription: i, pausedAppliedGuildBoosts: n, isPaused: s } = e,
        { boostsByGuildId: l, numActiveSlots: r } = f.useMemo(() => {
            if (s && null != i)
                return {
                    boostsByGuildId: (function (e, t) {
                        let i = {};
                        for (let t of e) t.guildId in i || (i[t.guildId] = []), i[t.guildId].push(t);
                        let n = {};
                        for (let e of Object.keys(i)) {
                            let s = i[e];
                            n[e] = s.map((i) =>
                                gy.A.createFromServer(
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
                if ((!(0, gb.I5)(n) && e++, null != n.premiumGuildSubscription)) {
                    let e = n.premiumGuildSubscription.guildId;
                    e in l || (l[e] = []), l[e].push(n);
                }
            }
            return { boostsByGuildId: l, numActiveSlots: e };
        }, [t, s, n, i]);
    if (null == i || 0 === Object.keys(l).length) return null;
    let a = r > o3.Ay.getNumIncludedPremiumGuildSubscriptionSlots(i.planId);
    return (0, p.jsx)("div", {
        className: mA.kR,
        children: dl.default
            .keys(l)
            .map((e) => (0, p.jsx)(mS, { guildId: e, slots: l[e], premiumSubscription: i, hasCancelableSlots: a }, e)),
    });
}
var mx = i(68179);
function mp(e) {
    let { guildBoostSlots: t, fractionalPremiumState: n } = e,
        s = (0, O.bG)([dL.A], () => dL.A.getPremiumTypeSubscription()),
        { unappliedSlots: l, numActiveSlots: r } = f.useMemo(() => {
            let e = [],
                i = 0;
            for (let n of t) !(0, gb.I5)(n) && i++, null == n.premiumGuildSubscription && e.push(n);
            return { unappliedSlots: e, numActiveSlots: i };
        }, [t]),
        a = r > (null != s ? o3.Ay.getNumIncludedPremiumGuildSubscriptionSlots(s.planId) : 0),
        o = s?.isPausedOrPausePending === !0 && n === sp.xc.NONE;
    return 0 === l.length
        ? null
        : (0, p.jsxs)("div", {
              className: mx.Nr,
              children: [
                  (0, p.jsxs)("div", {
                      className: mx.MY,
                      children: [
                          (0, p.jsxs)("div", {
                              className: mx._L,
                              children: [
                                  (0, p.jsxs)("div", {
                                      className: mx.MD,
                                      children: [
                                          (0, p.jsx)("img", { alt: "", className: mx.F8, src: mh }),
                                          (0, p.jsx)("div", {
                                              className: ew()(mx.qS, "theme-dark"),
                                              children: (0, p.jsx)("span", { className: mx.Vv, children: l.length }),
                                          }),
                                      ],
                                  }),
                                  (0, p.jsxs)("div", {
                                      className: mx.Qp,
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
                          (0, p.jsx)(g$.A, {
                              shouldShow: o,
                              text: g.intl.string(g.t.mOWsF1),
                              "aria-label": g.intl.string(g.t.mOWsF1),
                              children: (e) =>
                                  (0, p.jsx)(eh.$, {
                                      ...e,
                                      variant: "primary",
                                      size: "sm",
                                      icon: c0._,
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
                                                              (0, g1.g)({
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
                          mf,
                          {
                              slot: e,
                              isLast: t === l.length - 1,
                              isCancelable: a && !(0, gb.I5)(e),
                              isCanceled: (0, gb.I5)(e),
                              premiumSubscription: s,
                              modificationsDisabled: o,
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function mf(e) {
    let t,
        { slot: i, isLast: n, isCancelable: s, isCanceled: l, premiumSubscription: r, modificationsDisabled: a } = e,
        o = f.useRef(null),
        u = f.useMemo(() => (null != i.cooldownEndsAt ? new Date(i.cooldownEndsAt) : null), [i.cooldownEndsAt]);
    t =
        l && null != r
            ? (0, p.jsx)(V.E, {
                  variant: "text-sm/medium",
                  color: "text-subtle",
                  children: g.intl.format(g.t.Z4ULRD, { date: r.currentPeriodEnd }),
              })
            : i.isOnCooldown() && null != u
              ? (0, p.jsx)(gO, { cooldown: u.getTime() })
              : (0, p.jsx)(V.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: g.intl.string(g.t["2mcafz"]),
                });
    let d = s || l;
    return (0, p.jsxs)("div", {
        className: ew()(mx.iq, { [mx.Mt]: n }),
        children: [
            (0, p.jsxs)("div", {
                className: mx.kd,
                children: [(0, p.jsx)("img", { alt: "", className: mx.bB, src: mh }), t],
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
                                                        (0, p.jsx)(g9.default, { ...e, guildBoostSlot: i }),
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
                                                        (0, p.jsx)(me.default, { ...e, guildBoostSlotId: i.id }),
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
                            className: mx.Mj,
                            ...e,
                            children: (0, p.jsx)(md.j, { size: "xs", color: w.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                        }),
                }),
        ],
    });
}
var mN = i(185949);
function m_(e) {
    let {
            guildBoostSlots: t,
            guildBoostSlotsByGuildId: i,
            premiumSubscription: n,
            pausedAppliedGuildBoosts: s,
            fractionalPremiumState: l,
        } = e,
        r = ta.A.getArticleURL(q.MVz.GUILD_BOOSTING_FAQ),
        a = n?.isPaused === !0 && l !== sp.xc.FP_SUB_PAUSED,
        o = t.some((e) => null == e.premiumGuildSubscription),
        u = a && s.length > 0,
        d = a ? u : t.some((e) => null != e.premiumGuildSubscription);
    return o || d
        ? (0, p.jsxs)("div", {
              className: mN.i,
              children: [
                  (0, p.jsxs)("div", {
                      className: mN.b,
                      children: [
                          (0, p.jsx)(eA.D, { variant: "heading-md/semibold", children: g.intl.string(g.t.W5rDjW) }),
                          (0, p.jsx)(V.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: g.intl.format(g.t.SpDz1x, { helpdeskArticle: r }),
                          }),
                      ],
                  }),
                  (0, p.jsx)(mT, {
                      guildBoostSlots: i,
                      premiumSubscription: n,
                      pausedAppliedGuildBoosts: s,
                      isPaused: a,
                  }),
                  (0, p.jsx)(mp, { guildBoostSlots: t, fractionalPremiumState: l }),
              ],
          })
        : null;
}
var mI = i(917064),
    mC = i(438929);
function mb() {
    return (0, p.jsxs)("div", {
        className: mC.iE,
        children: [
            (0, p.jsx)(eA.D, { variant: "heading-xl/normal", children: g.intl.string(g.t.IzKs3o) }),
            (0, p.jsx)("div", {
                className: mC.kR,
                children: mI.s.map((e, t) => {
                    let i = e.icon;
                    return (0, p.jsxs)(
                        "div",
                        {
                            className: mC.Nr,
                            children: [
                                (0, p.jsx)(i, { className: mC.Kk }),
                                (0, p.jsx)(V.E, {
                                    className: mC.h_,
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
var mv = i(232122),
    my = i(539915);
function mj() {
    let [e, t] = f.useState(null),
        [i, n] = f.useState(null);
    return (0, p.jsxs)("div", {
        className: my.iE,
        children: [
            (0, p.jsx)(eA.D, { variant: "heading-xl/normal", children: g.intl.string(g.t.HPJ6Nj) }),
            (0, p.jsx)("ul", {
                className: my.p_,
                children: mv.m.map((s, l) => {
                    let r = e === l,
                        a = i === l,
                        o = r || a ? "text-strong" : "text-muted";
                    return (0, p.jsxs)(
                        M.D,
                        {
                            tag: "li",
                            className: ew()(my.Aw, { [my.$K]: r }),
                            onClick: () => t((e) => (e === l ? null : l)),
                            onMouseEnter: () => n(l),
                            onMouseLeave: () => n(null),
                            children: [
                                (0, p.jsxs)("div", {
                                    className: my.k7,
                                    children: [
                                        (0, p.jsx)(V.E, {
                                            className: my.b1,
                                            color: o,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: s.getQuestion(),
                                        }),
                                        (0, p.jsx)(k.a, {
                                            size: "sm",
                                            color: w.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: my.q4,
                                            style: { transform: r ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                r &&
                                    (0, p.jsx)(V.E, {
                                        className: my.ZF,
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
var mO = i(182859),
    mR = i(853513),
    mL = i(560378);
function mD() {
    let e = ta.A.getArticleURL(q.MVz.GUILD_SUBSCRIPTIONS);
    return (0, p.jsxs)("div", {
        className: mL.wx,
        children: [
            (0, p.jsxs)("div", {
                className: mL.Qs,
                children: [
                    (0, p.jsxs)("div", {
                        className: mL.B5,
                        children: [
                            (0, p.jsx)("img", { alt: "", className: mL.F8, src: "/assets/263e4cc9043cab70.svg" }),
                            (0, p.jsx)(eA.D, {
                                variant: "heading-xl/normal",
                                children: g.intl.string(mR.default.hjvcLO),
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
            (0, p.jsx)(mO.A, {
                variant: "member",
                className: mL.iO,
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
var mP = i(315629),
    mG = i(780082);
function mU() {
    let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser());
    if (null == e || o3.Ay.hasFreeBoosts(e)) return null;
    let t = ta.A.getArticleURL(q.MVz.GUILD_BOOSTING_FAQ);
    return (0, p.jsxs)(mP.h, {
        color: "nitro-pink",
        className: mG.vK,
        children: [
            (0, p.jsxs)("div", {
                className: mG.nw,
                children: [
                    (0, p.jsx)("img", { alt: "", className: mG.q3, src: mh }),
                    (0, p.jsxs)("div", {
                        className: mG.Tm,
                        children: [
                            (0, p.jsx)(V.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: g.intl.format(g.t.Idh1Vs, { count: sp.M4, boostCount: sp.M4 }),
                            }),
                            (0, p.jsxs)("div", {
                                className: mG.xv,
                                children: [
                                    (0, p.jsx)(oW.t, { className: mG.nE }),
                                    (0, p.jsx)(V.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: g.intl.format(g.t["6UAu+f"], {
                                            count: sp.M4,
                                            boostCount: sp.M4,
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
                icon: oW.t,
                text: g.intl.string(g.t["8x0jKT"]),
                onClick: mt.e,
            }),
        ],
    });
}
var mM = i(894206);
function mV() {
    let e = (0, O.bG)([gp.A], () => gp.A.affinities),
        t = (0, O.bG)([K.Ay], () => K.Ay.getFlattenedGuildIds()),
        i = f.useMemo(() => {
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
              className: mM.i,
              children: [
                  (0, p.jsx)(eA.D, { variant: "heading-md/semibold", children: g.intl.string(g.t.r90Wgo) }),
                  (0, p.jsx)("div", { className: mM.k, children: i.map((e) => (0, p.jsx)(mm, { guildId: e }, e)) }),
              ],
          });
}
var mk = i(140909);
function mw(e) {
    let { count: t, disabledReason: n } = e,
        s = ta.A.getArticleURL(q.MVz.GUILD_BOOSTING_FAQ);
    return (0, p.jsxs)(mP.h, {
        color: "nitro-pink",
        className: mk.vK,
        children: [
            (0, p.jsxs)("div", {
                className: mk.nw,
                children: [
                    (0, p.jsxs)("div", {
                        className: mk.MD,
                        children: [
                            (0, p.jsx)("img", { alt: "", className: mk.F8, src: mh }),
                            (0, p.jsx)("div", {
                                className: ew()(mk.qS, "theme-dark"),
                                children: (0, p.jsx)("span", { className: mk.Vv, children: t }),
                            }),
                        ],
                    }),
                    (0, p.jsxs)("div", {
                        className: mk.Tm,
                        children: [
                            (0, p.jsx)(V.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: g.intl.format(g.t.KewnLu, { count: t, boostCount: t }),
                            }),
                            (0, p.jsxs)("div", {
                                className: mk.xv,
                                children: [
                                    (0, p.jsx)(oW.t, { className: mk.nE }),
                                    (0, p.jsx)(V.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: g.intl.format(g.t["6UAu+f"], {
                                            count: sp.M4,
                                            boostCount: sp.M4,
                                            helpdeskArticle: s,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, p.jsx)(g$.A, {
                shouldShow: null != n,
                text: n ?? "",
                "aria-label": n,
                children: (e) =>
                    (0, p.jsx)(eh.$, {
                        ...e,
                        variant: "primary",
                        size: "sm",
                        icon: c0._,
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
                                                (0, g1.g)({
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
function mB(e) {
    let { premiumSubscription: t } = e,
        i = (0, O.bG)([gf.A], () => gf.A.boostSlots),
        n = f.useMemo(() => Object.values(i), [i]),
        s = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
        l = (0, O.bG)([gp.A], () => gp.A.affinities),
        r = (0, O.bG)([K.Ay], () => K.Ay.getFlattenedGuildIds()),
        a = l.length > 0 || r.length > 0,
        o = f.useMemo(() => n.filter((e) => null != e.premiumGuildSubscription), [n]).length,
        u = (0, O.bG)([c4.A], () => c4.A.getCurrentUserAppliedBoosts()),
        { fractionalState: d } = (0, c7.A)({ forceFetch: !0 }),
        c = s?.isPremiumGroupMember(),
        m = t?.isPausedOrPausePending === !0 && d === sp.xc.NONE,
        A = f.useMemo(() => n.some((e) => null == e.premiumGuildSubscription && e.isAvailable()), [n]),
        h = m ? g.intl.string(g.t.mOWsF1) : A ? void 0 : g.intl.string(g.t.xr4m5B),
        E = f.useMemo(() => {
            if (null == t) return 0;
            let e = o3.Ay.getNumIncludedPremiumGuildSubscriptionSlots(t.planId);
            return 0 === e || e !== n.length ? 0 : Math.max(0, e - o);
        }, [t, n.length, o]);
    return (0, p.jsxs)("div", {
        className: ma.GO,
        children: [
            (0, p.jsx)(dk.kb, { className: ma.ek }),
            (0, p.jsx)(mD, {}),
            (0, p.jsx)(mU, {}),
            E > 0 && (0, p.jsx)(mw, { count: E, disabledReason: h }),
            c && (0, p.jsx)(gx.A, {}),
            !a && (0, p.jsx)(gJ, {}),
            (0, p.jsxs)("div", {
                className: ma.C_,
                children: [
                    (0, p.jsx)(m_, {
                        guildBoostSlots: n,
                        guildBoostSlotsByGuildId: i,
                        premiumSubscription: t,
                        pausedAppliedGuildBoosts: u,
                        fractionalPremiumState: d,
                    }),
                    (0, p.jsx)(mV, {}),
                    (0, p.jsx)(mu.A, { hideHeading: !0, hideTier0: !0 }),
                    (0, p.jsx)(mb, {}),
                    (0, p.jsx)(mj, {}),
                ],
            }),
        ],
    });
}
var mF = i(65188);
let mz = (0, a.E2)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_SETTING, {
        Component: function () {
            let e = c6.useConfig({ location: "UserSettingsPremiumGuildSubscriptions" }).enabled;
            f.useEffect(() => {
                n3.h.wait(() => {
                    u9.hP(), u9.$o(), (0, c1.CD)(), (0, c2.zS)(null, null, q.tF5.DISCOVERY), (0, c1.tO)(!0);
                });
            }, []);
            let { hasFetchedSubscriptions: t, premiumSubscription: i } = (0, O.cf)([dL.A], () => ({
                    hasFetchedSubscriptions: dL.A.hasFetchedSubscriptions(),
                    premiumSubscription: dL.A.getPremiumTypeSubscription(),
                })),
                n = (0, c3.Y)(),
                s = (0, O.bG)([dR.A], () => dR.A.hasFetchedPaymentSources),
                l = (0, O.bG)([c4.A], () => c4.A.isFetchingCurrentUserAppliedBoosts),
                r = !t || !n || !s || l,
                [a, o] = f.useState(!1);
            return (r || a || o(!0), r && !a)
                ? (0, p.jsx)("div", { className: ew()(mF.kL, mF.Lq), children: (0, p.jsx)(u6.y, {}) })
                : (0, p.jsxs)("div", {
                      className: mF.kL,
                      children: [
                          (0, p.jsx)("div", { className: mF.Tp }),
                          (0, p.jsx)("div", {
                              className: mF.Qs,
                              children: e
                                  ? (0, p.jsx)(mB, { premiumSubscription: i })
                                  : (0, p.jsx)(mo, { premiumSubscription: i }),
                          }),
                      ],
                  });
        },
        useSearchTerms: () => [g.intl.string(g.t["+CbP2v"]), g.intl.string(g.t.Nn1lJy)],
    }),
    mY = (0, a.zZ)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_CATEGORY, { buildLayout: () => [mz] }),
    mX = (0, a.t_)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        useTitle: () => g.intl.string(g.t["+CbP2v"]),
        buildLayout: () => [mY],
    }),
    mH = (0, a.i4)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["+CbP2v"]),
        icon: c0._,
        buildLayout: () => [mX],
    });
var mK = i(153659),
    mW = i(155984),
    mZ = i(357758),
    mq = i(262077),
    mQ = i(696986),
    mJ = i(819411);
function m$(e) {
    let { onClickManageSubscription: t, count: i } = e;
    return (0, p.jsxs)("div", {
        children: [
            (0, p.jsx)(eA.D, { variant: "heading-md/bold", children: g.intl.string(g.t["KzCF/6"]) }),
            (0, p.jsx)(mQ.h, { size: 4 }),
            (0, p.jsx)(V.E, { variant: "text-md/normal", className: mJ.yV, children: g.intl.string(g.t["3D7qCu"]) }),
            (0, p.jsx)(mQ.h, { size: 24 }),
            (0, p.jsxs)("div", {
                className: mJ.Nr,
                children: [
                    (0, p.jsx)("img", { src: "/assets/5a420feed295b595.svg", alt: "", className: mJ.RI }),
                    (0, p.jsxs)("div", {
                        className: mJ.FS,
                        children: [
                            (0, p.jsx)(eA.D, {
                                variant: "heading-xl/semibold",
                                className: mJ.wx,
                                children: g.intl.string(g.t["KzCF/6"]),
                            }),
                            (0, p.jsx)(V.E, {
                                variant: "text-md/normal",
                                className: mJ.h_,
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
var m0 = i(872351),
    m1 = i(9113),
    m2 = i(599941),
    m3 = i(384684),
    m6 = i(2242);
let m4 = [];
var m7 = i(912851),
    m5 = i(146795);
let m8 = (e) => {
    let { label: t, onClick: i, submitting: n } = e;
    return (0, p.jsx)(M.D, {
        onClick: n ? void 0 : i,
        className: m5.x6,
        children: (0, p.jsxs)("div", {
            className: m5.hQ,
            children: [
                n
                    ? (0, p.jsx)(u6.y, { type: u6.y.Type.PULSING_ELLIPSIS, className: m5.__invalid_spinner })
                    : (0, p.jsx)(V.E, { variant: "text-md/medium", className: m5.Pf, children: t }),
                (0, p.jsx)(k.a, { size: "md", color: "currentColor", className: m5.UE }),
            ],
        }),
    });
};
var m9 = i(465932),
    Ae = i(543767),
    At = i(420139),
    Ai = i(790284),
    An = i(636194),
    As = i(624456),
    Al = i(710144),
    Ar = i(815332),
    Aa = i(817649),
    Ao = i(969389);
let Au = (e) => {
    let { transitionState: t, groupListing: i, listing: n, subscription: s, onClose: l } = e,
        r = (0, sT.GV)(),
        { analyticsLocations: a } = (0, nG.Ay)(eM.A.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL),
        {
            cancelSubscription: o,
            error: u,
            submitting: d,
        } = ((e) => {
            let [t, i] = f.useState(!1),
                [n, s] = f.useState(null);
            return {
                cancelSubscription: async (t) => {
                    try {
                        return i(!0), await u9.M2(t, e), !0;
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
        m = n.role_benefits.benefits.filter((e) => e.ref_type === m6.bN.CHANNEL),
        A = n.role_benefits.benefits.filter((e) => e.ref_type === m6.bN.INTANGIBLE),
        h = ry()(s.currentPeriodEnd).format("MMMM Do, YYYY"),
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
                null != u ? (0, p.jsx)(j.w, { type: "critical", children: u.message }) : null,
                (0, p.jsx)(Aa.x, { listingId: n.id, guildId: i.guild_id, className: Ao.P }),
            ],
        }),
    });
};
var Ad = i(319225),
    Ac = i(746080),
    Ag = i(47685);
let Am = (e) => {
        let { label: t, value: i, showInfoIcon: n, infoIconTooltipText: s } = e;
        return (0, p.jsxs)("div", {
            className: Ag.L0,
            children: [
                (0, p.jsxs)("div", {
                    className: Ag.a5,
                    children: [
                        (0, p.jsx)(eA.D, { variant: "heading-deprecated-12/semibold", className: Ag.HU, children: t }),
                        n &&
                            (0, p.jsx)(e0.m, {
                                text: s,
                                children: (0, p.jsx)(lf.m, { size: "xs", color: "currentColor", className: Ag.Mo }),
                            }),
                    ],
                }),
                (0, p.jsx)(eA.D, { variant: "heading-xl/semibold", className: Ag.sx, children: i }),
            ],
        });
    },
    AA = (e) => {
        let { subscription: t } = e,
            { analyticsLocations: i } = (0, nG.Ay)(),
            [n] = (0, Ae.YV)({
                subscriptionId: t.id,
                renewal: !0,
                analyticsLocations: i,
                analyticsLocation: eM.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
            }),
            s = (0, O.bG)([dR.A], () => dR.A.hasFetchedPaymentSources);
        return null != n && s
            ? (0, p.jsx)(At.A, { subscription: t, currentInvoicePreview: n, dropdownClassName: Ag.Nw })
            : (0, p.jsx)(u6.y, {});
    },
    Ah = (e) => {
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
            : (0, p.jsx)(sy.D, {
                  label: g.intl.string(g.t["4neDM+"]),
                  children: (0, p.jsx)("div", {
                      className: Ag.__invalid_rowButtons,
                      children: i
                          ? (0, p.jsx)(eh.$, {
                                variant: "primary",
                                text: g.intl.string(g.t.y3mAE4),
                                onClick: r,
                                loading: n,
                            })
                          : (0, p.jsxs)(p.Fragment, {
                                children: [
                                    !t && !s && (0, p.jsx)(m8, { label: g.intl.string(g.t.FRbWR8), onClick: a }),
                                    (0, p.jsx)(m8, { label: g.intl.string(g.t.Dx0lF7), onClick: l }),
                                ],
                            }),
                  }),
              });
    },
    AE = (e) => {
        let { subscription: t } = e,
            {
                listing: i,
                groupListing: n,
                guild: s,
                expanded: l,
                handleToggleExpanded: r,
                subscriptionInfo: a,
            } = (function (e) {
                let t = (0, As.M)(e),
                    i = (0, O.bG)([An.A], () => An.A.getSubscriptionListingForPlan(t)),
                    n = (0, O.bG)([An.A], () =>
                        null != i ? An.A.getSubscriptionGroupListingForSubscriptionListing(i.id) : null,
                    ),
                    s = (0, O.bG)([H.A], () => H.A.getGuild(n?.guild_id)),
                    [l, r] = f.useState(!1),
                    { fetchSubscriptionsSettings: a } = (0, m2.XE)();
                f.useEffect(() => {
                    l && null != s && null == An.A.getSubscriptionSettings(s.id) && a(s.id);
                }, [l, s, a]);
                let o =
                    null == i
                        ? void 0
                        : (function (e) {
                              let { subscription: t } = e,
                                  i = ry()(t.currentPeriodEnd).format("M/D/YY"),
                                  n = null != t.price ? (0, dn.$g)(t.price, t.currency) : "",
                                  s = ry()(t.createdAt).format("M/D/YY"),
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
            [o, d] = f.useState(!1),
            c = (0, sT.GV)(),
            { analyticsLocations: m } = (0, nG.Ay)(),
            { shouldHideGuildPurchaseEntryPoints: A } = (0, m9.MH)(s?.id),
            h = t?.isPurchasedViaAppleGeneric;
        if (null == n || null == i || null == a) return null;
        let E = async () => {
                try {
                    d(!0),
                        await u9.QP(t, m),
                        (0, Ad.E)({ title: g.intl.string(g.t.oPV2cy), body: g.intl.string(g.t.DdRizV) });
                } finally {
                    d(!1);
                }
            },
            {
                isCancelled: S,
                isPastDue: T,
                subscriptionPrice: x,
                memberSince: N,
                nextRenewalDate: I,
                nextRenewalLabel: C,
                isTrial: b,
            } = a,
            v = i.soft_deleted || null == s || h;
        return (0, p.jsxs)("div", {
            className: Ag.kL,
            children: [
                (0, p.jsx)(Al.A, {
                    onClick: r,
                    className: Ag.N1,
                    children: (e) => {
                        let { areaRef: t, handleStopPropagation: n } = e;
                        return (0, p.jsxs)(p.Fragment, {
                            children: [
                                null != s && (0, p.jsx)(gG.Ay, { guild: s, active: !0, size: gG.Ay.Sizes.MEDIUM }),
                                (0, p.jsxs)("div", {
                                    className: Ag.if,
                                    children: [
                                        (0, p.jsx)(V.E, {
                                            variant: "text-md/medium",
                                            className: Ag.J5,
                                            children: null != s ? s.name : g.intl.string(g.t["He+cmd"]),
                                        }),
                                        (0, p.jsxs)("div", {
                                            className: Ag.xp,
                                            children: [
                                                (0, p.jsx)(V.E, {
                                                    variant: "text-sm/normal",
                                                    className: Ag.KR,
                                                    children: i.name,
                                                }),
                                                S
                                                    ? (0, p.jsx)(n5.Lp, { text: g.intl.string(g.t["7uFZGt"]) })
                                                    : b
                                                      ? (0, p.jsx)(n5.Lp, {
                                                            text: g.intl.string(g.t["6anton"]),
                                                            color: w.A.unsafe_rawColors.BRAND_500.css,
                                                        })
                                                      : T
                                                        ? (0, p.jsx)(e0.m, {
                                                              text: g.intl.string(g.t.eSuJE2),
                                                              children: (0, p.jsx)("div", {
                                                                  children: (0, p.jsx)(n5.Lp, {
                                                                      className: Ag.qc,
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
                                        className: ew()(Ag.D6, { [Ag.S7]: l }),
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
                              (0, p.jsx)("div", { className: Ag.yF }),
                              (0, p.jsx)(Ar.A, { groupListingId: n.id, subscription: t, className: Ag.kE }),
                              (0, p.jsxs)("div", {
                                  className: Ag.Zx,
                                  children: [
                                      (0, p.jsx)(Am, { label: C, value: I }),
                                      (0, p.jsx)(Am, {
                                          label: g.intl.string(g.t.dltUMH),
                                          value: x,
                                          showInfoIcon: b,
                                          infoIconTooltipText: b ? g.intl.string(g.t["/q6fpa"]) : void 0,
                                      }),
                                      (0, p.jsx)(Am, { label: g.intl.string(g.t.AOcwWB), value: N }),
                                  ],
                              }),
                              (0, p.jsx)(mQ.h, { size: 16 }),
                              !S &&
                                  !h &&
                                  (0, p.jsx)(sy.D, {
                                      label: g.intl.string(g.t.wmMFvA),
                                      children: (0, p.jsx)(AA, { subscription: t }),
                                  }),
                              !v &&
                                  (0, p.jsx)(Ah, {
                                      isTrial: b,
                                      isCancelled: S,
                                      isResubscribing: o,
                                      shouldHideRoleSubscriptionEntryPoints: A,
                                      onCancelSubscriptionClick: () => {
                                          if (null != s) {
                                              var e;
                                              (e = { groupListing: n, listing: i, subscription: t }),
                                                  (0, _.openModal)((t) => (0, p.jsx)(Au, { ...t, ...e }));
                                          }
                                      },
                                      onChangePlanClick: () => {
                                          null != s &&
                                              ((0, sj.pX)(q.BVt.CHANNEL(s.id, Ac.VV.ROLE_SUBSCRIPTIONS)),
                                              (0, sh.default)(),
                                              m7.A.show(
                                                  q.kqX.BACK_TO_PREVIOUS_SCREEN,
                                                  void 0,
                                                  g.intl.string(g.t.DvbaM4),
                                                  () => {
                                                      Ai.A.setState({ subsection: nb.nR }),
                                                          (0, ey.openUserSettings)(u.X.SUBSCRIPTIONS_PANEL);
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
var AS = i(170272);
let AT = (e) => {
    let { onGoBack: t } = e,
        i = (function () {
            let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t =
                    (0, O.bG)([m3.A], () =>
                        (function () {
                            let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [m3.A],
                                t = e.getGuildIdsWithPurchasableRoles(),
                                i = !1;
                            return (t.forEach((t) => {
                                e.getUserSubscriptionRoles(t).size > 0 && (i = !0);
                            }),
                            i)
                                ? m6.M_.SUBSCRIBED
                                : 0 === t.size
                                  ? m6.M_.NONE
                                  : m6.M_.IN_SUBSCRIPTION_SERVER;
                        })([m3.A]),
                    ) === m6.M_.SUBSCRIBED,
                i = (0, O.bG)([dL.A], () => dL.A.getActiveGuildSubscriptions()),
                n = f.useRef(!1);
            return (
                f.useEffect(() => {
                    (function (e) {
                        let { ensureFresh: t, hasFetched: i, hasRoleSubscriptions: n } = e,
                            s = dL.A.getActiveGuildSubscriptions();
                        return (
                            ((s?.length ?? 0) === 0 && !!n) || (!!t && !i) || (!i && !dL.A.hasFetchedSubscriptions())
                        );
                    })({ ensureFresh: e, hasRoleSubscriptions: t, hasFetched: n.current }) &&
                        ((n.current = !0), u9.hP());
                }, [e, t]),
                i ?? m4
            );
        })(),
        { loading: n } = (0, m2.eb)(i);
    return ((0, m1.A)(dr.Fr ? "role-subscriptions-user-setting" : void 0), n)
        ? (0, p.jsx)(u6.y, {})
        : 0 === i.length
          ? null
          : (0, p.jsxs)("div", {
                children: [
                    (0, p.jsx)(eh.$, { text: g.intl.string(g.t.hqyhKQ), icon: m0.z, variant: "secondary", onClick: t }),
                    (0, p.jsx)(mQ.h, { size: 10 }),
                    (0, p.jsx)(ia.n, {
                        label: g.intl.string(g.t["KzCF/6"]),
                        description: g.intl.string(g.t["Y+ucR7"]),
                        children: (0, p.jsx)("div", {
                            className: AS.A,
                            children: i.map((e) => (0, p.jsx)(AE, { subscription: e }, e.id)),
                        }),
                    }),
                ],
            });
};
var Ax = i(327479),
    Ap = i(334335);
function Af(e) {
    let { onClickManageSubscription: t, count: i } = e;
    return (0, p.jsxs)("div", {
        children: [
            (0, p.jsx)(eA.D, { variant: "heading-md/bold", children: g.intl.string(g.t["48ywCu"]) }),
            (0, p.jsx)(mQ.h, { size: 4 }),
            (0, p.jsx)(V.E, { variant: "text-md/normal", className: Ap.yV, children: g.intl.string(g.t.VWxmSo) }),
            (0, p.jsx)(mQ.h, { size: 24 }),
            (0, p.jsxs)("div", {
                className: Ap.Nr,
                children: [
                    (0, p.jsx)("img", { src: "/assets/d6bcd13fb6c85425.svg", alt: "", className: Ap._e }),
                    (0, p.jsxs)("div", {
                        className: Ap.FS,
                        children: [
                            (0, p.jsx)(eA.D, {
                                variant: "heading-xl/semibold",
                                className: Ap.wx,
                                children: g.intl.string(g.t["48ywCu"]),
                            }),
                            (0, p.jsx)(V.E, {
                                variant: "text-md/normal",
                                className: Ap.h_,
                                children: g.intl.format(g.t["/esXLj"], { numSubscriptions: i }),
                            }),
                        ],
                    }),
                    (0, p.jsx)(Ax.A, { onClick: t, text: g.intl.string(g.t["z5YcJ+"]) }),
                ],
            }),
        ],
    });
}
var AN = i(548411),
    A_ = i(417098),
    AI = i(143582),
    AC = i(915043),
    Ab = i(920087);
function Av(e) {
    let { className: t, header: i, headerClassName: n, children: s } = e,
        l = f.useMemo(() => {
            let e = !1;
            return (
                f.Children.forEach(s, (t) => {
                    null != t && (e = !0);
                }),
                e
            );
        }, [s]);
    return (0, p.jsxs)("div", {
        className: ew()(Ab.iE, t),
        children: [
            (0, p.jsx)("div", { className: ew()(Ab.wx, n), children: i }),
            l && (0, p.jsx)("div", { className: Ab.Qs, children: s }),
        ],
    });
}
var Ay = i(885996),
    Aj = i(144165),
    AO = i(664121),
    AR = i(950305),
    AL = i(943775),
    AD = i(123791),
    AP = i(900797),
    AG = i(632510);
let AU = f.createContext({ isOpen: !1, toggleOpen: () => {} });
function AM(e) {
    let { children: t } = e,
        [i, n] = f.useReducer((e) => !e, !1),
        s = f.useMemo(() => ({ isOpen: i, toggleOpen: n }), [i]);
    return (0, p.jsx)(AU.Provider, { value: s, children: t(i) });
}
AM.Toggle = function (e) {
    let { className: t, text: i } = e,
        { isOpen: n, toggleOpen: s } = f.useContext(AU),
        l = n ? AP.t : k.a,
        r = null != i ? i : n ? g.intl.string(g.t.fgq1gs) : g.intl.string(g.t.XJuakA);
    return (0, p.jsxs)(M.D, {
        className: ew()(AG.L, t),
        onClick: s,
        children: [
            (0, p.jsx)(V.E, { variant: "heading-sm/semibold", tag: "div", color: "currentColor", children: r }),
            (0, p.jsx)(l, { size: "sm", color: "currentColor" }),
        ],
    });
};
var AV = i(627363),
    Ak = i(243217),
    Aw = i(328968),
    AB = i(163437),
    AF = i(3432);
function Az(e) {
    return e.toLocaleDateString(void 0, { dateStyle: "long" });
}
var AY = i(184451),
    AX = (((s = {})[(s.LOADING = 0)] = "LOADING"), (s[(s.DONE = 1)] = "DONE"), (s[(s.ERROR = 2)] = "ERROR"), s);
function AH(e) {
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
        } = (0, O.cf)([cE.A, cS.A, Aw.A, H.A], () => {
            let e,
                i = cE.A.get(r),
                n = null != i ? cS.A.get(i.skuId) : void 0,
                a = n?.applicationId,
                o = null != i ? Aw.A.getForSKU(i.skuId) : null,
                u = null != o && (0, AB.PJ)(o.skuFlags),
                d = u && null != s ? H.A.getGuild(s) : void 0,
                c = (0, AB.Uo)(t, n),
                g = u && null != s && null == d;
            if (!1 === c && null != l && l.items.length > 0) {
                let t = l.items[0];
                e = cE.A.get(t.planId) ?? void 0;
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
        { data: S } = (0, AV.YY)(a),
        T = f.useMemo(() => (null != S ? (0, AL.A)(S, 100) : null), [S]),
        x = m?.deleted ?? !1,
        N = null != m && (0, AB.Se)(m),
        _ = t.status === q.Dmq.PAST_DUE,
        { analyticsLocations: I } = (0, nG.Ay)(),
        [C] = (0, Ae.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: I,
            analyticsLocation: eM.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        b = Az(t.currentPeriodEnd),
        v = 0 === n;
    return (0, p.jsxs)(Av, {
        headerClassName: AY.dL,
        header:
            !1 === v
                ? (0, p.jsxs)(p.Fragment, {
                      children: [
                          (0, p.jsxs)("div", {
                              className: AY.VW,
                              children: [
                                  null != T &&
                                      (0, p.jsx)(Aj._, { src: T.href, imageClassName: AY.Z2, width: 40, height: 40 }),
                                  (0, p.jsxs)("div", {
                                      className: AY.aF,
                                      children: [
                                          (0, p.jsx)(eA.D, {
                                              variant: "heading-md/semibold",
                                              lineClamp: 1,
                                              children: S?.name ?? g.intl.string(g.t["7kqy7W"]),
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
                              className: AY.Pz,
                              children:
                                  null != S &&
                                  null != u &&
                                  null != m &&
                                  (0, p.jsx)(AQ, {
                                      subscription: t,
                                      app: S,
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
                : (0, p.jsx)(u6.y, { type: u6.t.PULSING_ELLIPSIS }),
        children: [
            A &&
                (0, p.jsx)(Aq, {
                    type: "warning",
                    title: N
                        ? g.intl.formatToPlainString(g.t.QOnM1y, { subscriptionPeriodEnd: b })
                        : g.intl.formatToPlainString(g.t.HOaZu8, { subscriptionPeriodEnd: b }),
                }),
            !A && h && (0, p.jsx)(Aq, { type: "warning", title: g.intl.string(g.t.SmSP8Q) }),
            _ && (0, p.jsx)(Aq, { type: "danger", title: g.intl.string(g.t.fvOqBo) }),
            (0, p.jsxs)("div", {
                className: AY.zH,
                children: [
                    (0, p.jsx)(AZ, {
                        title: g.intl.string(g.t["5D/KEH"]),
                        content: d
                            ? (0, p.jsxs)(p.Fragment, {
                                  children: [
                                      (0, p.jsxs)("span", {
                                          className: AY.yW,
                                          children: [(0, p.jsx)(AO.R, { size: "xs" }), g.intl.string(g.t.QjL3vn)],
                                      }),
                                      null != c &&
                                          (0, p.jsxs)("span", {
                                              className: AY._t,
                                              children: [
                                                  (0, p.jsx)(V.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: g.intl.format(g.t["7ZD8p1"], { guildName: c.name }),
                                                  }),
                                                  (0, p.jsx)(gG.Ay, { guild: c, size: gG.Ay.Sizes.MINI }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, p.jsxs)("span", {
                                  className: AY.yW,
                                  children: [(0, p.jsx)(AR.n, { size: "xs" }), g.intl.string(g.t["6anEVv"])],
                              }),
                    }),
                    (0, p.jsx)(AK, { invoicePreview: C, subscriptionPlan: o }),
                    (0, p.jsx)(AZ, {
                        title: g.intl.string(g.t.dnUzb6),
                        content: Az(t.createdAt ?? t.currentPeriodStart),
                    }),
                    (0, p.jsx)(AW, { isCancelled: A, subscriptionPeriodEnd: b, renewalPlan: E }),
                ],
            }),
            (0, p.jsx)(A$, {
                subscription: t,
                currentInvoicePreview: C,
                loadingState: n,
                isDeleted: x,
                isCancelled: A,
            }),
            null != S &&
                u?.benefits != null &&
                u.benefits.length > 0 &&
                (0, p.jsx)(AJ, { appId: S.id, listingBenefits: u.benefits }),
        ],
    });
}
function AK(e) {
    let { subscriptionPlan: t, invoicePreview: i } = e;
    if (null == t) return (0, p.jsx)(AZ, { title: g.intl.string(g.t.KI7ERx), content: "" });
    let n = (0, dn.CE)((0, dn.$g)(t.price, t.currency), t.interval, t.intervalCount),
        s = i?.findInvoiceItemByPlanId(t.id);
    if (null == s) return (0, p.jsx)(AZ, { title: g.intl.string(g.t.KI7ERx), content: n });
    let l = (0, dn.CE)((0, dn.$g)(s.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, p.jsx)(AZ, {
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
function AW(e) {
    let { isCancelled: t, subscriptionPeriodEnd: i, renewalPlan: n } = e;
    if (null != n) {
        let e = (0, dn.CE)((0, dn.$g)(n.price, n.currency), n.interval, n.intervalCount);
        return (0, p.jsx)(AZ, {
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
    return (0, p.jsx)(AZ, { title: t ? g.intl.string(g.t.enxcAl) : g.intl.string(g.t["Ms+6Zq"]), content: i });
}
function AZ(e) {
    let { title: t, content: i } = e;
    return (0, p.jsxs)("div", {
        className: AY.nM,
        children: [
            (0, p.jsx)(V.E, { variant: "text-sm/medium", children: t }),
            (0, p.jsx)(V.E, { variant: "text-sm/medium", className: AY.u4, children: i }),
        ],
    });
}
function Aq(e) {
    let { type: t, title: i } = e;
    return (0, p.jsx)(tr.p, {
        messageType: "warning" === t ? tr.Y.WARNING : tr.Y.ERROR,
        className: AY.Xm,
        children: (0, p.jsx)(V.E, { variant: "text-sm/normal", children: i }),
    });
}
function AQ(e) {
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
        c = (0, AB.Se)(s),
        { analyticsLocations: m } = (0, nG.Ay)(),
        [A, h] = f.useState(!1),
        E = (0, AD.C)(t.id),
        S = (0, O.bG)([cS.A], () => cS.A.getParentSKU(n.skuId), [n.skuId]),
        T = f.useMemo(() => {
            var e, t;
            let i;
            return null == S
                ? []
                : ((e = n.id),
                  (t = E.subscriptions),
                  (i = new Set(S.bundledSkuIds)),
                  t.filter((t) => t.id !== e && i.has(t.skuId)));
        }, [n.id, E, S]),
        x = 0 !== T.length,
        N = async () => {
            try {
                h(!0);
                let { subscription: e } = await (0, u9.QP)(l, m);
                if (null == e) return;
                (0, _.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([i.e("47869"), i.e("52396")]).then(i.bind(i, 115623));
                    return (i) => (0, p.jsx)(t, { ...i, storeListing: n, subscription: Ak.A.createFromServer(e) });
                });
            } finally {
                h(!1);
            }
        };
    return (0, p.jsxs)("div", {
        className: AY.fw,
        children: [
            c || (r && a)
                ? null
                : r
                  ? (0, p.jsx)(eh.$, {
                        variant: "secondary",
                        size: "sm",
                        text: g.intl.string(g.t.QtMnkW),
                        onClick: N,
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
            x &&
                null != S &&
                !1 === r &&
                !1 === a &&
                (0, p.jsx)(eh.$, {
                    variant: "primary",
                    size: "sm",
                    text: g.intl.string(g.t.R74ZBR),
                    onClick: () => {
                        d({
                            currentSubscription: l,
                            alternativeListings: T,
                            app: t,
                            subscriptionGroup: S,
                            currentListing: n,
                            renewalSkuId: u,
                        });
                    },
                }),
        ],
    });
}
function AJ(e) {
    let { appId: t, listingBenefits: i } = e;
    return (0, p.jsx)(AM, {
        children: (e) =>
            (0, p.jsxs)("div", {
                className: AY.PX,
                children: [
                    (0, p.jsxs)("div", {
                        className: AY.wV,
                        children: [
                            e && (0, p.jsx)(V.E, { variant: "text-sm/semibold", children: g.intl.string(g.t.mORL67) }),
                            (0, p.jsx)(AM.Toggle, {
                                className: AY.Bh,
                                text: e ? g.intl.string(g.t.gsbFAw) : g.intl.string(g.t.IwjfxV),
                            }),
                        ],
                    }),
                    e
                        ? i.map((e) => {
                              let { id: i, name: n, description: s, icon: l } = e;
                              return (0, p.jsx)(Ay.FY, { header: n, icon: (0, AF.N)(t, l), description: s }, i);
                          })
                        : null,
                ],
            }),
    });
}
function A$(e) {
    let { subscription: t, currentInvoicePreview: i, loadingState: n, isDeleted: s, isCancelled: l } = e;
    return null == i
        ? null
        : 0 === n
          ? (0, p.jsx)("div", {
                className: AY.Ji,
                children: (0, p.jsx)(sy.D, {
                    label: g.intl.string(g.t.azZaZa),
                    children: (0, p.jsx)(u6.y, { type: u6.t.PULSING_ELLIPSIS }),
                }),
            })
          : 2 === n
            ? (0, p.jsx)("div", {
                  className: AY.Ji,
                  children: (0, p.jsxs)(A_.$T, {
                      color: A_.Hv.DANGER,
                      style: { borderRadius: 0 },
                      children: [
                          g.intl.format(g.t.IIHUUF, { subscriptionId: t.id }),
                          (0, p.jsx)("br", {}),
                          g.intl.format(g.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                      ],
                  }),
              })
            : (0, p.jsx)("div", {
                  className: AY.Ji,
                  children: (0, p.jsx)(sy.D, {
                      label: g.intl.string(g.t.azZaZa),
                      children: (0, p.jsx)(At.A, { subscription: t, currentInvoicePreview: i, disabled: s || l }),
                  }),
              });
}
var A0 = (((l = {}).HOME = "HOME"), (l.SWITCH_APP_PLANS = "SWITCH_APP_PLANS"), l);
i(938796);
var A1 = i(38405);
let A2 = (0, O.UT)(cE.A, {
    getQueryId: q.fic.SUBSCRIPTION_PLANS,
    get: (e) => {
        if (null == e) return null;
        let t = cE.A.getForSKU(e);
        return 0 === t.length ? null : t;
    },
    load: (e) => (
        null == e && A1.A.addBreadcrumb({ message: "Error loading subscription plans: skuId is null" }),
        null != e ? (0, c2.ur)(e).then(() => {}) : Promise.reject()
    ),
});
var A3 = i(240248),
    A6 = i(237218),
    A4 = i(988325);
function A7(e) {
    let { children: t, lineClamp: i = 2, ...n } = e,
        [s, l] = f.useState(!1),
        [r, a] = f.useState(null),
        o =
            null != r &&
            (0, p.jsx)("button", {
                className: A4.x6,
                onClick: () => l((e) => !e),
                children: (0, p.jsxs)(V.E, {
                    className: A4.B0,
                    variant: "text-sm/medium",
                    color: "text-brand",
                    children: [
                        s ? g.intl.string(g.t["JQX/Pb"]) : g.intl.string(g.t.Fbrd8J),
                        s
                            ? (0, p.jsx)(AP.t, { color: w.A.colors.TEXT_BRAND, size: "xs" })
                            : (0, p.jsx)(k.a, { color: w.A.colors.TEXT_BRAND, size: "xs" }),
                    ],
                }),
            }),
        [u, d] = f.useState(null),
        c = f.useCallback(() => {
            if (null == u) return;
            let { scrollHeight: e, clientHeight: t } = u;
            e > t && a({ truncatedHeight: t, expandedHeight: e });
        }, [u]);
    f.useEffect(() => {
        requestAnimationFrame(c);
    }, [c, t, i]);
    let m = "auto";
    return (
        null != r && (m = s ? `${r.expandedHeight}px` : `${r.truncatedHeight}px`),
        (0, p.jsxs)("div", {
            children: [
                (0, p.jsx)(V.E, {
                    ...n,
                    className: A4.Qs,
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
var A5 = i(827991);
function A8(e) {
    let { cta: t, storeListing: i, className: n } = e,
        { applicationId: s, benefits: l, description: r } = i,
        a = f.useMemo(() => (null == i.thumbnail ? null : (0, A6.t)(s, i.thumbnail, 256)), [s, i.thumbnail]),
        { data: o } = A2(i.skuId),
        u = f.useMemo(() => {
            if (null == o || 0 === o.length) return null;
            let e = o[0];
            return (0, dn._J)(e);
        }, [o]);
    return null == u
        ? null
        : (0, p.jsxs)(Av, {
              className: ew()(A5.iE, n),
              header: (0, p.jsxs)(p.Fragment, {
                  children: [
                      (0, p.jsxs)("div", {
                          className: A5.qd,
                          children: [
                              null != a &&
                                  (0, p.jsx)(Aj._, { src: a.href, imageClassName: A5.rW, width: 48, height: 48 }),
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
                  !(0, A3.uJ)(r) &&
                      (0, p.jsx)("div", {
                          className: A5.h_,
                          children: (0, p.jsx)(A7, { variant: "text-sm/medium", children: r }),
                      }),
                  null != l &&
                      l.length > 0 &&
                      (0, p.jsx)("div", {
                          className: A5.PX,
                          children: l.map((e) => {
                              let { id: t, name: i, description: n, icon: l } = e;
                              return (0, p.jsx)(Ay.FY, { header: i, icon: (0, AF.N)(s, l), description: n }, t);
                          }),
                      }),
              ],
          });
}
var A9 = i(185438),
    he = i(386011);
function ht(e) {
    let {
            app: t,
            currentSubscription: i,
            currentListing: n,
            alternativeListings: s,
            navigateToHome: l,
            subscriptionGroup: r,
            renewalSkuId: a,
        } = e,
        o = (0, AL.A)(t, 100),
        u = (0, AB.PJ)(r.flags),
        d = u ? AO.R : AR.n,
        c = u ? g.intl.string(g.t["46YF2D"]) : g.intl.string(g.t.fFyGiA),
        m = i.metadata?.application_subscription_guild_id,
        A = (0, O.bG)([H.A], () => (u && null != m ? H.A.getGuild(m) : void 0), [m, u]),
        h = (0, O.bG)([cS.A], () => {
            if (null != a) return cS.A.get(a);
        }, [a]),
        E = Az(i.currentPeriodEnd);
    return (0, p.jsxs)("div", {
        children: [
            (0, p.jsxs)("div", {
                className: he.wx,
                children: [
                    null != o && (0, p.jsx)(Aj._, { src: o.href, imageClassName: he.Z2, width: 48, height: 48 }),
                    (0, p.jsxs)("div", {
                        children: [
                            (0, p.jsx)(eA.D, { variant: "heading-xl/semibold", children: t.name }),
                            (0, p.jsxs)("div", {
                                className: he.p4,
                                children: [
                                    (0, p.jsxs)(eA.D, {
                                        variant: "heading-md/normal",
                                        className: he.N4,
                                        children: [(0, p.jsx)(d, { size: "xs", color: "currentColor" }), " ", c],
                                    }),
                                    null != A &&
                                        (0, p.jsxs)(p.Fragment, {
                                            children: [
                                                (0, p.jsx)(V.E, { variant: "text-md/normal", children: "\u2022" }),
                                                (0, p.jsxs)("span", {
                                                    className: he.vP,
                                                    children: [
                                                        (0, p.jsx)(gG.Ay, { guild: A, size: gG.Ay.Sizes.SMOL }),
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
            (0, p.jsx)(AM, {
                children: (e) =>
                    (0, p.jsxs)("div", {
                        className: he._B,
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
                            (0, p.jsx)(AM.Toggle, {
                                text: e ? g.intl.string(g.t["1Rkq/E"]) : g.intl.string(g.t.WsTHkY),
                            }),
                        ],
                    }),
            }),
            (0, p.jsxs)("div", {
                className: he.x0,
                children: [
                    (0, p.jsx)(A8, {
                        storeListing: n,
                        className: he.o3,
                        cta: (0, p.jsxs)("div", {
                            className: he.cJ,
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
                                  A8,
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
                            : (0, p.jsx)(hi, { storeListing: e, guildId: m, navigateToHome: l }, e.id),
                    ),
                ],
            }),
        ],
    });
}
function hi(e) {
    let { storeListing: t, guildId: i, navigateToHome: n } = e,
        { openModal: s } = (0, A9.A)({
            analyticsLocation: q.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: i,
            disableGuildSelector: !0,
            onComplete: n,
        });
    return (0, p.jsx)(A8, {
        storeListing: t,
        cta: (0, p.jsx)(eh.$, { variant: "primary", size: "sm", text: g.intl.string(g.t["+KwmBt"]), onClick: s }),
    });
}
class hn extends f.PureComponent {
    state = { hasError: !1 };
    static getDerivedStateFromError(e) {
        return { hasError: !0 };
    }
    render() {
        return this.state.hasError
            ? (0, p.jsxs)(A_.$T, {
                  color: A_.Hv.DANGER,
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
function hs(e) {
    let { subscriptions: t, updateHeader: i } = e,
        [n, s] = f.useState({ route: A0.HOME }),
        { route: l } = n,
        r = () => {
            s({ route: A0.HOME });
        },
        a = (e) => {
            s({ route: A0.SWITCH_APP_PLANS, ...e }), i(g.intl.string(g.t.VFqtkP), r);
        },
        [o, u] = f.useState({});
    f.useEffect(() => {
        for (let e of t) {
            let t = e.items[0]?.planId;
            null != t &&
                (u((t) => ({ ...t, [e.id]: AX.LOADING })),
                (0, AI._R)(t)
                    .then(() => {
                        u((t) => ({ ...t, [e.id]: AX.DONE }));
                    })
                    .catch(() => {
                        u((t) => ({ ...t, [e.id]: AX.ERROR }));
                    }));
        }
    }, [t]);
    let { loadState: d } = (0, AC.E)(),
        c = d !== AC.mJ.LOADED;
    switch (l) {
        case A0.HOME:
            return (0, p.jsx)(p.Fragment, {
                children: t.map((e) =>
                    (0, p.jsx)(
                        hn,
                        {
                            subscription: e,
                            children: (0, p.jsx)(AH, {
                                subscription: e,
                                navigateToSwitchPlan: a,
                                loadingState: c ? AX.LOADING : (o[e.id] ?? AX.LOADING),
                            }),
                        },
                        e.id,
                    ),
                ),
            });
        case A0.SWITCH_APP_PLANS:
            let { route: m, ...A } = n;
            return (0, p.jsx)(ht, { ...A, navigateToHome: r });
        default:
            (0, t6.xb)(l);
    }
}
var hl = i(470464);
function hr(e) {
    let { onGoBack: t } = e,
        i = (0, O.yK)(
            [dL.A],
            () =>
                dL.A.getActiveApplicationSubscriptions()
                    ?.slice()
                    .sort(
                        (e, t) =>
                            (e.createdAt?.getTime() ?? e.currentPeriodStart.getTime()) -
                            (t.createdAt?.getTime() ?? t.currentPeriodStart.getTime()),
                    ) ?? [],
        ),
        [n, s] = f.useState();
    return (
        null == n && (n = (0, p.jsx)(ha, { onBack: t, title: g.intl.string(g.t["DB/m9a"]) })),
        (0, p.jsxs)("div", {
            children: [
                n,
                (0, p.jsx)("div", {
                    className: hl.A,
                    children: (0, p.jsx)(hs, {
                        subscriptions: i,
                        updateHeader: (e, t) => {
                            s(
                                (0, p.jsx)(ha, {
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
function ha(e) {
    let { onBack: t, title: i } = e;
    return (0, p.jsxs)("div", {
        className: hl.D,
        children: [
            (0, p.jsx)(lx.K, {
                "aria-label": g.intl.string(g.t["13/7kX"]),
                icon: () => (0, p.jsx)(AN.Z, { size: "sm" }),
                onClick: t,
                variant: "icon-only",
            }),
            (0, p.jsx)(eA.D, { variant: "heading-lg/semibold", children: i }),
        ],
    });
}
var ho = i(366999),
    hu = i(466919),
    hd = i(441924);
function hc(e) {
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
        ? ((t = g.intl.string(hu.default["/S02sx"])), (i = g.intl.string(hu.default.OPJNST)))
        : n
          ? ((t = g.intl.string(g.t["hT6i/0"])),
            (i = null != a ? g.intl.format(g.t["0Vwb/l"], { activateDate: a }) : null))
          : ((t = g.intl.string(g.t["3G0CTC"])),
            (i = r === sp.xc.FP_SUB_PAUSED ? g.intl.format(g.t.MMvaIG, { resumeDate: l.toDate() }) : null));
    let u = ew()({ [hd.Hs]: n, [hd.mT]: !n }),
        d = ew()({ [hd.CQ]: n, [hd.ZM]: !n }),
        c = ew()({ [hd.EM]: !n });
    return (0, p.jsxs)("div", {
        className: hd.r6,
        children: [
            (0, p.jsxs)("div", {
                className: hd.Nv,
                children: [
                    (0, p.jsx)(eA.D, { variant: "heading-md/semibold", className: c, children: t }),
                    null !== i && (0, p.jsx)(V.E, { variant: "text-sm/normal", children: i }),
                ],
            }),
            !o &&
                (0, p.jsx)("div", {
                    className: hd.ZS,
                    children: (0, p.jsx)("div", {
                        className: u,
                        children: (0, p.jsx)(V.E, { variant: "text-sm/semibold", className: d, children: s }),
                    }),
                }),
        ],
    });
}
let hg = function (e) {
    let { fractionalPremiumInfo: t, className: i, activationDate: n, hasPremiumGroup: s } = e,
        l = (0, o3.kX)(t),
        r = l.length > 0,
        a = (0, ho.Ay)(t.endsAt, ho.yE.SHORT_TIME),
        o = r ? l : a;
    return (0, p.jsx)("div", {
        children: (0, p.jsxs)("div", {
            className: ew()(i, hd.f8),
            children: [
                (0, p.jsx)("div", {
                    className: hd.J_,
                    children: (0, p.jsxs)("div", {
                        className: hd.Bh,
                        children: [
                            (0, p.jsx)("div", {
                                className: hd.xt,
                                children: (0, p.jsx)(oW.t, { size: "md", color: "white", className: hd.T8 }),
                            }),
                            (0, p.jsx)("div", {
                                className: hd.pt,
                                children: (0, p.jsx)(eA.D, {
                                    variant: "heading-md/semibold",
                                    children: g.intl.string(g.t.DFMPWS),
                                }),
                            }),
                            (0, p.jsx)(V.E, {
                                className: hd.PJ,
                                variant: "text-md/semibold",
                                children: l.length > 0 ? l : g.intl.string(g.t["B66Z+f"]),
                            }),
                        ],
                    }),
                }),
                (0, p.jsx)(hc, {
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
var hm = i(868942);
function hA(e) {
    let t,
        {
            user: i,
            planId: n,
            count: s,
            userPremiumSubscription: l,
            unconsumedFractionalPremiumUnits: r = [],
            hasPremiumGroup: a,
        } = e,
        [o, u] = (0, O.yK)([cE.A], () => [cE.A.get(n), null != l ? cE.A.get(l.planId) : null]);
    if (null == o || o3.Ay.getInterval(n).intervalType !== sp.WT.MONTH) return null;
    let d = null != u ? u.skuId : null,
        c = o.skuId === d,
        m = o3.Ay.getDisplayName(n);
    if (a) t = g.intl.string(hu.default["5asczk"]);
    else if (c && null != l) {
        let e;
        e = new Date(l.status === q.Dmq.PAUSED && null != l.pauseEndsAt ? l.pauseEndsAt : l.currentPeriodEnd);
        let i = (0, o3._e)(e, r);
        t = g.intl.formatToPlainString(g.t["5CNRRA"], { date: i ?? 0 });
    } else t = g.intl.formatToPlainString(g.t.eNXZ5O, { planName: m });
    let A = i.hasFreePremium() || (null != l && l.isPurchasedExternally);
    return (0, p.jsxs)("div", {
        className: hd.Bh,
        children: [
            (0, p.jsx)("div", {
                className: ew()({
                    [hd.sr]: o.skuId === sp.pe.TIER_0,
                    [hd.lP]: o.skuId === sp.pe.TIER_1,
                    [hd.eb]: o.skuId === sp.pe.TIER_2,
                }),
                children: (0, p.jsx)(oW.t, { size: "md", color: "currentColor", className: hd.Kk }),
            }),
            (0, p.jsxs)("div", {
                className: hd.pt,
                children: [
                    (0, p.jsx)(eA.D, {
                        variant: "heading-md/semibold",
                        children: g.intl.format(g.t.LzobT9, { planName: m }),
                    }),
                    !A &&
                        (0, p.jsx)(eA.D, {
                            className: hd.gj,
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            children: t,
                        }),
                ],
            }),
            (0, p.jsx)(V.E, {
                className: hd.PJ,
                variant: "text-md/semibold",
                children: g.intl.format(g.t["ess/xl"], { count: s }),
            }),
        ],
    });
}
let hh = function (e) {
    let { className: t, entitlements: i } = e,
        n = eR()(Array.from(i))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: i, consumed: n } = e;
                return null != t && null != i && !n;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        s = (0, O.yK)([cl.A], () => cl.A.getUnactivatedFractionalPremiumUnits()),
        l = (0, O.bG)([dL.A], () => dL.A.getPremiumSubscription()),
        r = (0, O.bG)([dL.A], () => null == dL.A.getPremiumTypeSubscription()),
        a = Object.keys(n).some((e) => e === sp.gD.PREMIUM_MONTH_TIER_1),
        o = (0, O.bG)([t3.default], () => t3.default.getCurrentUser());
    if (null == o) return null;
    let u = o.isPremiumWithPremiumGroup();
    return (0, p.jsxs)("div", {
        children: [
            (0, p.jsx)("div", {
                className: ew()(t, hd.xF, hd.J_),
                children: Object.keys(n).map((e) =>
                    (0, p.jsx)(
                        hA,
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
                            className: hd.eT,
                            variant: "text-md/normal",
                            children: g.intl.string(g.t["VNr4+O"]),
                        }),
                        (0, p.jsx)(hm.i, {}),
                    ],
                }),
        ],
    });
};
var hE = i(50919);
function hS(e) {
    let t,
        { subscription: i, withOverheadSeparator: n } = e,
        { analyticsLocations: s } = (0, nG.Ay)(),
        [l] = (0, Ae.YV)({
            subscriptionId: i.id,
            renewal: !0,
            analyticsLocations: s,
            analyticsLocation: eM.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT,
        });
    if (null == l) return null;
    let r = n ? hE.r : hE.a,
        a = l.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, o3.xq)(t);
        });
    if (null == a) return null;
    let o = a.subscriptionPlanId,
        u = cE.A.get(o);
    tj()(null != u, "Missing plan");
    let d = (0, dn.$g)(l.total, l.currency);
    return (
        u.interval === sp.WT.YEAR
            ? (t = g.intl.format(g.t["jPz/39"], {
                  price: d,
                  termsUrl: q.X7G.TERMS,
                  paidURL: q.X7G.PAID_TERMS,
                  privacyUrl: q.X7G.PRIVACY,
              }))
            : u.interval === sp.WT.MONTH &&
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
function hT(e) {
    let { subscription: t, withOverheadSeparator: i } = e;
    return t.status === q.Dmq.CANCELED || t.isPurchasedExternally
        ? null
        : (0, p.jsx)(hS, { subscription: t, withOverheadSeparator: i });
}
var hx = i(735912),
    hp = i(558808);
let hf = { [nb.nR]: "role_subscriptions_panel", [nb.PZ]: "application_subscriptions_panel" };
function hN() {
    return (0, p.jsx)(er.Z, {
        className: hp.wb,
        type: er.Z.Types.CUSTOM,
        children: (0, p.jsxs)(lU.A, {
            align: lU.A.Align.CENTER,
            children: [
                (0, p.jsx)(e5.A, { game: null, size: e5.M.SMALL, className: hp.pV }),
                (0, p.jsx)("span", { className: hp.O, children: g.intl.string(g.t["jy/hyj"]) }),
            ],
        }),
    });
}
function h_(e, t) {
    return e === t || (null == e && null == t) || (null != e && null != t && (0, mZ._)(e, t));
}
function hI() {
    let e = (0, O.bG)([cl.A], () => cl.A.getForApplication(sp.tv), [], h_);
    return (
        f.useEffect(() => {
            (0, cv.LM)(sp.tv);
        }, []),
        (0, p.jsx)(ia.n, {
            label: g.intl.string(g.t["2GKrvn"]),
            description: g.intl.string(g.t.kNEjGm),
            children:
                null != e && o3.Ay.hasAccountCredit(e)
                    ? (0, p.jsx)(hh, { className: hp.fX, entitlements: e })
                    : (0, p.jsx)(hN, {}),
        })
    );
}
function hC() {
    return (0, p.jsx)("hr", { className: hp.hr });
}
let hb = function () {
        var e;
        let t = (0, O.bG)([dL.A], () => dL.A.getPremiumTypeSubscription()),
            i = (0, mq.A)({ subscriptionFilter: (e) => hx.Hy.has(e.status) }),
            n = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
            s = i.length > 1,
            l = (0, O.bG)(
                [dR.A],
                () => (null != t && null != t.paymentSourceId ? dR.A.getPaymentSource(t.paymentSourceId) : null),
                [t],
            ),
            r = (0, O.bG)([dL.A], () => dL.A.hasFetchedSubscriptions()),
            a = (0, O.bG)([di.A], () => di.A.isBusy),
            o = (0, c3.Y)(),
            d = Ai.A.useField("subsection");
        f.useEffect(() => {
            (0, rp._)(null != d ? hf[d] : u.X.SUBSCRIPTIONS_PANEL);
        }, [d]);
        let c = (0, O.bG)([dL.A], () => dL.A.getActiveApplicationSubscriptions()?.length ?? 0),
            m = (0, O.bG)(
                [dL.A],
                () =>
                    Object.values(dL.A.getSubscriptions() ?? {})
                        .filter((e) => e.type === q.rzx.GUILD)
                        .filter((e) => e.status !== q.Dmq.ENDED).length,
            ),
            A = (0, c7.A)({ forceFetch: !0 }),
            h = (0, cL.ds)(),
            E = null !== t ? t.currentPeriodEnd : void 0,
            S =
                !(h && !(A.unactivatedUnits.length > 0)) &&
                (A.fractionalState !== sp.xc.NONE || A.unactivatedUnits.length > 0);
        return (f.useEffect(
            () => (
                n3.h.wait(() => {
                    (0, c2.zS)(), u9.hP(), (0, c1.CD)(), u9.$o();
                }),
                function () {
                    Ai.A.resetState();
                }
            ),
            [],
        ),
        e_.A.enabled)
            ? (0, p.jsx)(u1.A, {})
            : r && o
              ? d === nb.nR
                  ? (0, p.jsx)(AT, { onGoBack: () => Ai.A.setState({ subsection: null }) })
                  : d === nb.PZ
                    ? (0, p.jsx)(hr, { onGoBack: () => Ai.A.setState({ subsection: null }) })
                    : (0, p.jsx)("div", {
                          className: hp.kL,
                          children: (0, p.jsxs)("div", {
                              className: hp.Qs,
                              children: [
                                  s ? (0, p.jsx)(hx.Sb, {}) : null,
                                  null != t
                                      ? (0, p.jsx)(hx.Ay, {
                                            subscription: t,
                                            paymentSource: l,
                                            busy: a,
                                            subscriptions: i,
                                        })
                                      : (0, p.jsx)(hx.TC, {}),
                                  S &&
                                      ((e = !!n?.isPremiumWithPremiumGroup()),
                                      (0, p.jsxs)("section", {
                                          children: [
                                              (0, p.jsx)(eA.D, {
                                                  variant: "heading-md/bold",
                                                  className: hp.HL,
                                                  children: g.intl.string(g.t.Obre8v),
                                              }),
                                              (0, p.jsx)(V.E, {
                                                  variant: "text-md/normal",
                                                  className: hp.JU,
                                                  children: g.intl.format(g.t["7Zi06b"], {
                                                      helpCenterLink: ta.A.getArticleURL(
                                                          q.MVz.FRACTIONAL_PREMIUM_ABOUT,
                                                      ),
                                                  }),
                                              }),
                                              (0, p.jsx)(hg, {
                                                  className: hp.fX,
                                                  fractionalPremiumInfo: A,
                                                  activationDate: E,
                                                  hasPremiumGroup: e,
                                              }),
                                          ],
                                      })),
                                  (0, p.jsx)(hI, {}),
                                  m > 0 &&
                                      (0, p.jsxs)(p.Fragment, {
                                          children: [
                                              (0, p.jsx)(hC, {}),
                                              (0, p.jsx)(m$, {
                                                  count: m,
                                                  onClickManageSubscription: () => Ai.A.setState({ subsection: nb.nR }),
                                              }),
                                          ],
                                      }),
                                  c > 0 &&
                                      (0, p.jsxs)(p.Fragment, {
                                          children: [
                                              (0, p.jsx)(hC, {}),
                                              (0, p.jsx)(Af, {
                                                  count: c,
                                                  onClickManageSubscription: () => {
                                                      Ai.A.setState({ subsection: nb.PZ }),
                                                          Y.default.track(
                                                              q.HAw.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED,
                                                          );
                                                  },
                                              }),
                                          ],
                                      }),
                                  (0, p.jsx)(hC, {}),
                                  null != t ? (0, p.jsx)(hT, { subscription: t, withOverheadSeparator: !1 }) : null,
                              ],
                          }),
                      })
              : (0, p.jsx)("div", { className: ew()(hp.kL, hp.Lq), children: (0, p.jsx)(u6.y, {}) });
    },
    hv = (0, a.E2)(u.X.SUBSCRIPTIONS_SETTINGS, {
        useSearchTerms: () => [g.intl.string(g.t.trSpHX), g.intl.string(g.t["2GKrvn"])],
        Component: () => (0, p.jsx)(hb, {}),
    }),
    hy = (0, a.zZ)(u.X.SUBSCRIPTIONS_CATEGORY, {
        useSearchTerms: () => [g.intl.string(g.t.trSpHX), g.intl.string(g.t["2GKrvn"])],
        buildLayout: () => [hv],
    }),
    hj = (0, a.t_)(u.X.SUBSCRIPTIONS_PANEL, { useTitle: () => g.intl.string(g.t.trSpHX), buildLayout: () => [hy] }),
    hO = (0, a.i4)(u.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.trSpHX),
        icon: mK.L,
        usePersistentBadge: function () {
            return f.useMemo(
                () => ({
                    badgeType: eN.Xi.STRONGLY_DISCOURAGED_CUSTOM,
                    useCustomBadge: () =>
                        (0, mW.l)() ? (0, p.jsx)(lC.E, { size: "xs", color: w.A.unsafe_rawColors.YELLOW_300 }) : null,
                }),
                [],
            );
        },
        buildLayout: () => [hj],
    }),
    hR = (0, a.WI)(u.X.BILLING_SECTION, {
        useTitle: () => g.intl.string(g.t.oeUm2s),
        buildLayout: () => [c$, mH, hO, cX, dz],
    });
var hL = i(540999),
    hD = i(306471),
    hP = i(964355),
    hG = i(172272);
let hU = (0, a.zD)(u.X.AXE_AUDITING, {
        useTitle: () => "Enable Accessibility Auditing",
        useSubtitle: () =>
            "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development.",
        usePredicate: () => !1,
        useValue: () => (0, O.bG)([a3.default], () => a3.default.isAxeEnabled),
        setValue: (e) => (0, a2.x)({ axeEnabled: e }),
    }),
    hM = (0, a.zD)(u.X.CSS_DEBUGGING, {
        useTitle: () => "Enable CSS Debugging",
        useSubtitle: () => "Display raw colors as pink. Toggling this will refresh the browser.",
        useValue: () => (0, O.bG)([a3.default], () => a3.default.cssDebuggingEnabled),
        setValue: (e) => {
            (0, a2.x)({ cssDebuggingEnabled: e }).then(() => {
                setTimeout(() => location.reload(), 500);
            });
        },
    });
var hV = i(276086),
    hk = i(354328);
let hw = (0, a.zD)(u.X.HIGHLIGHT_MANA_COMPONENTS, {
        useTitle: () => "Highlight Mana Components",
        useSubtitle: () => "Highlights all Mana design system components for easier debugging.",
        useValue: () => (0, hk.A)("highlight_mana_components"),
        setValue: (e) => {
            (0, hV.L)("highlight_mana_components", e);
        },
    }),
    hB = (0, a.zD)(u.X.HIGHLIGHT_VOID_COMPONENTS, {
        useTitle: () => "Highlight Deprecated Void Components",
        useSubtitle: () =>
            "Highlights deprecated toggleable components: VoidCheckbox (green), VoidRadioGroup (yellow), VoidSwitch (blue).",
        useValue: () => (0, hk.A)("highlight_void_toggleables"),
        setValue: (e) => {
            (0, hV.L)("highlight_void_toggleables", e);
        },
    }),
    hF = (0, a.sN)(u.X.LAYOUT_DEBUGGING_HORIZONTAL_SPACING, {
        useTitle: () => "Horizontal Grid Spacing",
        useSubtitle: () =>
            "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
        usePredicate: () => (0, O.bG)([a3.default], () => a3.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: hG.YR,
        markers: Array.from({ length: hG.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => hG.Or.getState().horizontalSpacing,
        asValueChanges: (e) => {
            hG.Or.getState().setHorizontalSpacing(e);
        },
    }),
    hz = (0, a.zD)(u.X.LAYOUT_DEBUGGING, {
        useTitle: () => "Enable Layout Debugging",
        useSubtitle: () => "Renders a grid on top of the app to help debug layout alignment issues.",
        useValue: () => (0, O.bG)([a3.default], () => a3.default.layoutDebuggingEnabled),
        setValue: (e) => {
            (0, a2.x)({ layoutDebuggingEnabled: e });
        },
    }),
    hY = (0, a.sN)(u.X.LAYOUT_DEBUGGING_VERTICAL_SPACING, {
        useTitle: () => "Vertical Grid Spacing",
        useSubtitle: () => "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
        usePredicate: () => (0, O.bG)([a3.default], () => a3.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: hG.YR,
        markers: Array.from({ length: hG.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => hG.Or.getState().verticalSpacing,
        asValueChanges: (e) => {
            hG.Or.getState().setVerticalSpacing(e);
        },
    }),
    hX = (0, a.zZ)(u.X.DESIGN_TOOLS, {
        useTitle: () => "Design & A11y Tools",
        useSearchTerms: () => ["accessibility tools"],
        buildLayout: () => [hM, hz, hF, hY, hw, hB, hU],
    }),
    hH = (0, a.zD)(u.X.AD_OVERRIDE, {
        useTitle: () => "Always Deliver Ads",
        useSubtitle: () => "Makes the user targetable for all active ads.",
        useValue: () => c.HZ.useSetting(),
        setValue: (e) => {
            c.HZ.updateSetting(e);
        },
    });
var hK = i(173936),
    hW = i(260598),
    hZ = i(148810),
    hq = i(380610),
    hQ = i(986238),
    hJ = i(727201),
    h$ = i(274446);
let h0 = ["discord_web", "discord_marketing", "discord_developers", "discord_ios", "discord_android"],
    h1 = [
        { id: "branch", value: "branch", label: "Branch Name" },
        { id: "id", value: "id", label: "Commit SHA" },
    ];
function h2(e) {
    return "discord_ios" in e || "discord_android" in e;
}
class h3 extends f.Component {
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
            className: ew()(hJ.oS, iI.SX, h$.N, hJ.nM),
            children: [
                (0, p.jsx)(iA.A, {
                    className: ew()(hJ.lL, { [hJ.zi]: n }),
                    onClick: n ? void 0 : this.handleRemoveBuildOverride,
                }),
                (0, p.jsxs)(lU.A, {
                    className: iI.QB,
                    children: [
                        (0, p.jsx)(lU.A.Child, {
                            basis: "50%",
                            children: (0, p.jsx)(lT.l, {
                                selectionMode: "single",
                                label: "Override Type",
                                options: h1,
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
                                className: hJ.AS,
                                color: "text-feedback-critical",
                                variant: "text-sm/normal",
                                children: s,
                            }),
                        (0, p.jsxs)(V.E, {
                            variant: "text-sm/normal",
                            className: hJ.AS,
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
class h6 extends f.Component {
    state = { loading: !0, buildOverrides: {}, loadedBuildOverrides: {}, errors: {}, saving: !1, didSave: !1 };
    async refreshBuildOverrides() {
        this.setState({ loading: !0 });
        let e = await (0, hq.bD)();
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
        return eR().without(h0, ...t);
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
        let t = await (0, hZ.Zk)(e);
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
        (0, _.openModal)((t) => (0, p.jsx)(h4, { ...t, buildOverrides: e }));
    };
    renderEmpty() {
        return (0, p.jsx)(ir.pp, {
            theme: iu.A.theme,
            className: ew()(iI.eT, iI.SX),
            children: (0, p.jsx)(ir.SG, { children: "You have no build overrides configured." }),
        });
    }
    renderItems() {
        let { buildOverrides: e, saving: t, errors: i } = this.state;
        return null == e
            ? null
            : eR().map(e, (e, n) =>
                  (0, p.jsx)(
                      h3,
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
                  children: (0, p.jsx)(lx.K, {
                      variant: "secondary",
                      icon: hK.q,
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
                    disabled: h2(t ?? {}),
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
            ? (0, p.jsx)(u6.y, { className: iI.QX })
            : null != n && 0 === Object.keys(n).length
              ? this.renderEmpty()
              : this.renderItems();
        let s = !i && !t && this.getAvailableProjects().length > 0,
            l =
                h2(n ?? {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL
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
                    (0, p.jsx)(lT.l, {
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
                    (0, p.jsxs)(aB.e, {
                        justify: "end",
                        children: [this.renderRefreshButton(), this.renderLinkButton(), this.renderSaveButton()],
                    }),
                ],
            }),
        });
    }
}
class h4 extends f.Component {
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
            t = await (0, hZ.SB)(e);
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
        return h2(this.props.buildOverrides ?? {});
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
            d = hQ.fL.find((t) => t.value === e),
            c = s.map((e) => ({ id: e, label: e, value: e }));
        return (0, p.jsxs)(R.B, {
            gap: 20,
            children: [
                (0, p.jsx)(lT.l, {
                    selectionMode: "single",
                    label: "Expire After",
                    value: null != d ? d.value : void 0,
                    options: hQ.fL,
                    onSelectionChange: this.handleExpirationChange,
                }),
                this.isMobile()
                    ? null
                    : (0, p.jsx)(lT.l, {
                          selectionMode: "single",
                          label: "Release Channel",
                          value: t,
                          options: hQ.VP,
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
                                  trailing: { icon: r7.j, onClick: this.handleAddAllowedVersion, "aria-label": "Add" },
                              }),
                              (0, p.jsx)(lT.l, {
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
                    : (0, p.jsx)(hW.f, {
                          label: "Limit to User IDs (optional)",
                          helperText: "User IDs can be separated by whitespace or commas.",
                          value: i,
                          error: n,
                          onBlur: () => this.setUserEntryError(""),
                          onChange: this.handleUserIDEntry,
                      }),
                (0, p.jsx)(hW.f, {
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
            actionBarInput: (0, p.jsx)(d9.A, { value: i }),
            transitionState: t,
            "aria-label": "Generate Public Build Override Link",
            actions: [{ variant: "primary", text: "Generate Link", onClick: this.handleGenerateLink }],
            onClose: e,
            children: this.renderSettingsForm(),
        });
    }
}
let h7 = (0, a.E2)(u.X.BUILD_OVERRIDES, { useSearchTerms: () => ["build overrides"], Component: h6 });
var h5 = i(256311),
    h8 = i(883600);
let h9 = (0, a.E2)(u.X.CHANGE_LOG_OVERRIDE, {
    useSearchTerms: () => ["changelog override", "change log override"],
    Component: function () {
        let e = (0, O.bG)([h8.A], () => h8.A.overrideId()),
            t = async (e) => {
                let t = h8.A.getChangelog(e, "en-US");
                return null != t ? t : ((await h5.A.fetchChangelog(e, "en-US", !1, !0)) ?? null);
            };
        return (0, p.jsx)(EA, {
            label: "Change Log Override",
            description: "Provide a change log ID to override the change log shown to this user.",
            placeholder: "Enter Change Log ID...",
            overrideId: e ?? null,
            setOverride: (e) => h5.A.setChangelogOverride(e),
            fetchOverride: t,
        });
    },
});
var Ee = i(506774);
let Et = new Date("2018-01-01"),
    Ei = (0, a.Tf)(u.X.CHANGE_LOG_CLEAR, {
        useTitle: () => "Clear Change Log",
        useSubtitle: () => "Resets the change log state so that it will show again on the next startup.",
        useLabel: () => "Clear",
        useDisabled: () => c.pK.useSetting() === dl.default.fromTimestamp(Et.getTime()),
        onClick: () => (Ee.w.set("lastChangeLogDate", Et), c.pK.updateSetting(dl.default.fromTimestamp(Et.getTime()))),
    }),
    En = (0, a.zD)(u.X.DISABLE_APP_COLLECTIONS_CACHE, {
        useTitle: () => "Disable Application Collections Cache",
        useSubtitle: () => "Forces application collection updates to be shown immediately.",
        useDisabled: () => (0, O.bG)([a3.default], () => a3.default.onlyShowPreviewAppCollections),
        useValue: () =>
            (0, O.bG)(
                [a3.default],
                () => a3.default.disableAppCollectionsCache || a3.default.onlyShowPreviewAppCollections,
            ),
        setValue: (e) => (0, a2.x)({ disableAppCollectionsCache: e }),
    }),
    Es = (0, a.zD)(u.X.FORCE_CANARY_API, {
        useTitle: () => "Force Canary API",
        useSubtitle: () => "Routes all API requests to Canary instances.",
        useValue: () => (0, O.bG)([a3.default], () => a3.default.isForcedCanary),
        setValue: (e) => {
            (0, a2.x)({ canary: e });
        },
    }),
    El = (0, a.zD)(u.X.LOAD_SOURCE_MAPS, {
        useTitle: () => "Load Source Maps",
        useSubtitle: () => "Downloads source maps on this client. Only enable on devices you trust.",
        useValue: () => (0, O.bG)([a3.default], () => a3.default.sourceMapsEnabled),
        setValue: (e) => (0, a2.x)({ sourceMapsEnabled: e }),
    }),
    Er = (0, a.zD)(u.X.ONLY_SHOW_PREVIEW_APP_COLLECTIONS, {
        useTitle: () => "Only Show Preview App Collections",
        useSubtitle: () =>
            "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
        useValue: () => (0, O.bG)([a3.default], () => a3.default.onlyShowPreviewAppCollections),
        setValue: (e) => (0, a2.x)({ onlyShowPreviewAppCollections: e }),
    });
var Ea = i(10094),
    Eo = i(683760);
let Eu = [
        { id: "none", label: "Non-Nitro", value: 0 },
        { id: "tier_0", label: "Nitro Basic", value: sp.PremiumTypes.TIER_0 },
        { id: "tier_1", label: "Nitro Classic", value: sp.PremiumTypes.TIER_1 },
        { id: "tier_2", label: "Nitro Standard", value: sp.PremiumTypes.TIER_2 },
    ],
    Ed = (0, a.Hn)(u.X.PREMIUM_TYPE_OVERRIDE, {
        useTitle: () => "Premium Type Override",
        useSearchTerms: () => ["nitro override"],
        useSubtitle: () => "Overrides the client's local premium type.",
        useOptions: () => Eu,
        clearable: !0,
        useValue: () =>
            (0, O.bG)([Eo.A], () => {
                let e = Eo.A.getPremiumTypeOverride();
                return null === e ? 0 : e;
            }),
        setValue: (e) => {
            0 === e
                ? (0, Ea.O)(null, void 0)
                : null === e
                  ? (0, Ea.O)(void 0, void 0)
                  : (0, Ea.O)(0 === e ? null : e, void 0);
        },
    });
var Ec = i(246605),
    Eg = i(274184);
let Em = (0, a.E2)(u.X.SURVEY_OVERRIDE, {
    useSearchTerms: () => ["survey override"],
    Component: function () {
        let e = (0, O.bG)([Eg.Ay], () => Eg.Ay.getSurveyOverride());
        return (0, p.jsx)(EA, {
            label: "Survey Override",
            description: "Provide a survey ID to override the survey shown to this user.",
            placeholder: "Enter Survey ID...",
            overrideId: e ?? null,
            setOverride: (e) => Ec.xr(e),
            fetchOverride: (e) => Ec.BC(e, !0) ?? null,
        });
    },
});
function EA(e) {
    let { label: t, description: i, placeholder: n, overrideId: s, setOverride: l, fetchOverride: r } = e,
        [a, o] = f.useState(s ?? ""),
        u = f.useRef(null),
        [d, c] = f.useState(0),
        g = () => {
            null != u.current && (clearTimeout(u.current), (u.current = null));
        };
    return (
        f.useEffect(() => g, []),
        (0, p.jsx)(sy.D, {
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
let Eh = (0, a.zZ)(u.X.DEV_OVERRIDES, {
        useTitle: () => "Overrides",
        buildLayout: () => [Ed, Em, h9, Ei, Es, hH, Er, En, El, h7],
        useInlineNotice: () => ({
            type: eN.lT.INLINE_NOTICE,
            noticeType: "info",
            useText: () => g.intl.format(g.t.UeZJlg, { link: "https://i.dis.gd/dev-settings-changes" }),
        }),
    }),
    EE = (0, a.zD)(u.X.ANALYTICS_LOGS, {
        useTitle: () => "Enable Logging of Analytics Events",
        useSubtitle: () => "Logs all analytics events to the developer console.",
        useValue: () => (0, O.bG)([a3.default], () => a3.default.isLoggingAnalyticsEvents),
        setValue: (e) => (0, a2.x)({ logAnalyticsEvents: e }),
    }),
    ES = (0, a.zD)(u.X.GATEWAY_LOGS, {
        useTitle: () => "Log Gateway Events",
        useSubtitle: () => "Logs all gateway events to console, including content. Enable verbose logs to see them.",
        useValue: () => (0, O.bG)([a3.default], () => a3.default.isLoggingGatewayEvents),
        setValue: (e) => (0, a2.x)({ logGatewayEvents: e }),
    }),
    ET = (0, a.zD)(u.X.KEEP_POPOUTS_OPEN, {
        useTitle: () => "Keep Popouts Open",
        useSubtitle: () =>
            "When enabled, popouts will not close automatically, allowing their console contents to be inspected after a crash.",
        useValue: () => (0, O.bG)([a3.default], () => a3.default.preventPopoutClose),
        setValue: (e) => (0, a2.x)({ preventPopoutClose: e }),
    }),
    Ex = (0, a.zD)(u.X.KEYBOARD_MISMATCHES, {
        useTitle: () => "Enable Logging of Keyboard Mismatches",
        useSubtitle: () => "Logs mismatches in detected keyboard codes to the console.",
        useValue: () => (0, O.bG)([a3.default], () => a3.default.logKeyboardMismatches),
        setValue: (e) => (0, a2.x)({ logKeyboardMismatches: e }),
    }),
    Ep = (0, a.zD)(u.X.OVERLAY_RPC_LOGS, {
        useTitle: () => "Enable Logging of Overlay RPC Events & Commands",
        useSubtitle: () => "Logs all overlay related RPC events. Super noisy if an overlay is connected.",
        useValue: () => (0, O.bG)([a3.default], () => a3.default.isLoggingOverlayEvents),
        setValue: (e) => (0, a2.x)({ logOverlayEvents: e }),
    }),
    Ef = (0, a.zD)(u.X.QUEST_LOGGING, {
        useTitle: () => "Enable Quests Debug Logging",
        useSubtitle: () => "Logs quest lifecycle events to the developer console.",
        useValue: () => (0, O.bG)([a3.default], () => a3.default.isLoggingQuestEvents),
        setValue: (e) => (0, a2.x)({ logQuestEvents: e }),
    }),
    EN = (0, a.zD)(u.X.REQUEST_TRACING, {
        useTitle: () => "Enable Tracing Requests",
        useSubtitle: () => "Force trace all client requests with APM.",
        useValue: () => (0, O.bG)([a3.default], () => a3.default.isTracingRequests),
        setValue: (e) => (0, a2.x)({ trace: e }),
    }),
    E_ = (0, a.zZ)(u.X.LOGGING, { useTitle: () => "Logging", buildLayout: () => [ES, Ep, EN, EE, Ex, ET, Ef] }),
    EI = (0, a.t_)(u.X.DEVELOPER_OPTIONS_PANEL, {
        useTitle: () => "Developer Options",
        buildLayout: () => [Eh, E_, hX],
    }),
    EC = (0, a.i4)(u.X.DEVELOPER_OPTIONS_SIDEBAR_ITEM, {
        useTitle: () => "Developer Options",
        icon: hD.V,
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
                    isStaff: m,
                } = (0, O.cf)([a3.default, hL.A, t3.default], () => ({
                    layoutDebuggingEnabled: a3.default.layoutDebuggingEnabled,
                    isDeveloper: hL.A.isDeveloper,
                    isLoggingGatewayEvents: a3.default.isLoggingGatewayEvents,
                    isLoggingOverlayEvents: a3.default.isLoggingOverlayEvents,
                    isLoggingAnalyticsEvents: a3.default.isLoggingAnalyticsEvents,
                    isTracingRequests: a3.default.isTracingRequests,
                    isForcedCanary: a3.default.isForcedCanary,
                    isSourceMapsEnabled: a3.default.sourceMapsEnabled,
                    isAxeEnabled: a3.default.isAxeEnabled,
                    preventPopoutClose: a3.default.preventPopoutClose,
                    onlyShowPreviewAppCollections: a3.default.onlyShowPreviewAppCollections,
                    disableAppCollectionsCache: a3.default.disableAppCollectionsCache,
                    isStaff: t3.default.getCurrentUser()?.isStaff() ?? !1,
                })),
                { horizontalSpacing: A, verticalSpacing: h } = (0, hG.Or)(),
                { setHorizontalSpacing: E, setVerticalSpacing: S } = hG.Or.getState(),
                T = c.HZ.useSetting();
            return t
                ? [
                      (0, p.jsxs)(
                          U.Dr,
                          {
                              id: "overrides",
                              label: "Overrides",
                              action: () => {
                                  (0, ey.openUserSettings)(u.X.DEV_OVERRIDES);
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
                                              (0, a2.x)({ canary: !r });
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
                                              (0, a2.x)({ onlyShowPreviewAppCollections: !d });
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
                                              (0, a2.x)({ disableAppCollectionsCache: !g });
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
                                  (0, ey.openUserSettings)(u.X.LOGGING);
                              },
                              children: [
                                  (0, p.jsx)(
                                      U.sL,
                                      {
                                          id: "gateway-events",
                                          label: "Gateway Events",
                                          checked: i,
                                          action: () => {
                                              (0, a2.x)({ logGatewayEvents: !i });
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
                                              (0, a2.x)({ logOverlayEvents: !n });
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
                                              (0, a2.x)({ logAnalyticsEvents: !s });
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
                                              (0, a2.x)({ trace: !l });
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
                                              (0, a2.x)({ preventPopoutClose: !o });
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
                                  (0, ey.openUserSettings)(u.X.DESIGN_TOOLS);
                              },
                              children: [
                                  (0, p.jsx)(
                                      U.sL,
                                      {
                                          id: "accessibility-auditing",
                                          label: "Accessibility Auditing",
                                          checked: a,
                                          action: () => {
                                              (0, a2.x)({ axeEnabled: !a });
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
                                              (0, a2.x)({ layoutDebuggingEnabled: !e });
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
                                                          (0, p.jsx)(hP.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: A,
                                                              minValue: 0,
                                                              maxValue: hG.YR,
                                                              onChange: (e) => E(e),
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
                                                          (0, p.jsx)(hP.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: h,
                                                              minValue: 0,
                                                              maxValue: hG.YR,
                                                              onChange: (e) => S(e),
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
                          ? (0, p.jsx)(
                                U.Dr,
                                { id: "discord-stats", label: "Discord Stats", action: () => aD() },
                                "discord-stats",
                            )
                          : null,
                  ]
                : null;
        },
        buildLayout: () => [EI],
    });
var Eb = i(127062),
    Ev = i(25044),
    Ey = i(80703),
    Ej = i(691540),
    EO = i(857250),
    ER = i(97483),
    EL = i(100392),
    ED = i(102609),
    EP = i(271478),
    EG = i(736056),
    EU = i(386976),
    EM = i(257433),
    EV = i(32523),
    Ek = i(96919),
    Ew = i(688151),
    EB = i(636566);
function EF(e) {
    let { experiment: t, experimentId: i, overrideInfo: n, defaultOpen: s } = e,
        [l, r] = f.useState(s),
        [a, o] = f.useState(!1),
        u = f.useCallback(() => {
            r((e) => !e);
        }, []),
        d = (0, O.bG)([cA.default], () => cA.default.getId()),
        c = (0, O.bG)([cA.default], () => {
            let e = cA.default.getInstallationForTracking();
            return null == e ? null : (0, Ey.v)(e);
        }),
        g = "installation" === t.kind && null != c ? c : d,
        m = (0, EM.iN)(t, g),
        A = (0, EM.Fm)(t, g),
        h = (0, O.yK)([EG.A], () =>
            eR()
                .sortBy(EG.A.getRecentExposures(Ew.Vh.USER, i), (e) => {
                    let [t, i] = e;
                    return -i;
                })
                .map((e) => {
                    let [t, i] = e;
                    return `${new Date(i).toLocaleString()} (${t})`;
                }),
        ),
        E = f.useCallback(
            (e) => {
                (0, cx.C)((0, EL.yA)(i), () => {
                    (0, Ej.P0)({
                        id: "experiment-link-copied",
                        message: "Copied experiment link",
                        type: ER.Ck.SUCCESS,
                    }),
                        e.preventDefault(),
                        e.stopPropagation();
                });
            },
            [i],
        ),
        S = (0, p.jsx)(eB.s, {
            "aria-label": "Toggle visibility",
            onClick: u,
            children: (0, p.jsxs)(V.E, {
                variant: "text-md/medium",
                className: EB.DD,
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
                                    cx.p5 &&
                                        (0, p.jsx)(M.D, { onClick: E, children: (0, p.jsx)(hK.q, { size: "xs" }) }),
                                ],
                            }),
                            (0, p.jsx)(V.E, { color: "text-muted", variant: "text-sm/normal", children: i }),
                        ],
                    }),
                    (0, p.jsx)("span", {
                        className: EB.km,
                        children: "installation" === t.kind ? "Installation" : "User",
                    }),
                ],
            }),
        });
    if (!l) return (0, p.jsx)("div", { className: EB.Os, children: S });
    let T = "";
    return (
        (T =
            t.system === ED.l5.LEGACY
                ? `Currently assigned to bucket ${m ?? Ew.RE.NOT_ELIGIBLE}`
                : null != m
                  ? `Currently assigned to variant ${m}`
                  : "Currently unassigned"),
        (0, p.jsxs)("div", {
            className: EB.Os,
            children: [
                S,
                (0, p.jsx)("div", {
                    children: (0, p.jsx)(EP.g, {
                        label: t.system === ED.l5.LEGACY ? "Bucket Override" : "Variant Override",
                        description: T,
                        experiment: t,
                        experimentId: i,
                        overrideInfo: n,
                    }),
                }),
                (0, p.jsx)("div", {
                    className: EB.h_,
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
                                  className: EB.id,
                                  children: "Server Descriptor",
                              }),
                              (0, p.jsx)(V.E, {
                                  variant: "code",
                                  className: EB.AS,
                                  children: null == A ? "None" : JSON.stringify(A, void 0, 2),
                              }),
                              (0, p.jsx)(V.E, {
                                  variant: "text-lg/medium",
                                  className: EB.id,
                                  children: "Override Descriptor",
                              }),
                              (0, p.jsx)(V.E, {
                                  variant: "code",
                                  className: EB.AS,
                                  children:
                                      n?.originalDescriptor == null
                                          ? "None"
                                          : JSON.stringify(n.originalDescriptor, void 0, 2),
                              }),
                              (0, p.jsx)(V.E, {
                                  variant: "text-lg/medium",
                                  className: EB.id,
                                  children: "Recent Exposures",
                              }),
                              (0, p.jsx)(V.E, {
                                  variant: "code",
                                  className: EB.AS,
                                  children: 0 === h.length ? "None" : h.join("\n"),
                              }),
                          ],
                      })
                    : (0, p.jsx)("div", {
                          className: EB.id,
                          children: (0, p.jsx)(B.Q, {
                              variant: "secondary",
                              text: "More Details \xbb",
                              onClick: () => o(!0),
                          }),
                      }),
                (0, p.jsx)(eE.c, { className: EB.yF }),
            ],
        })
    );
}
function Ez(e) {
    let { experiment: t, experimentId: i, overrideInfo: n } = e,
        [s, l] = f.useState(null != n),
        [r, a] = f.useState(!1),
        o = f.useCallback(() => {
            l((e) => !e);
        }, []),
        u = (0, O.bG)([EG.A], () => EG.A.getLoadedGuildExperiment(i)),
        d = (0, O.yK)([EG.A], () =>
            eR()
                .sortBy(EG.A.getRecentExposures(Ew.Vh.GUILD, i), (e) => {
                    let [t, i] = e;
                    return -i;
                })
                .map((e) => {
                    let [t, i] = e;
                    return `${new Date(i).toLocaleString()} (${t})`;
                }),
        ),
        [c, g] = (0, O.yK)([H.A, EG.A], () => {
            let e = eR().sortBy(H.A.getGuildsArray(), (e) => e.name.toLowerCase()),
                t = {},
                n = [];
            for (let s of e) {
                let e = EG.A.getGuildExperimentDescriptor(i, s.id),
                    l = e?.bucket ?? Ew.RE.NOT_ELIGIBLE;
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
                className: EB.DD,
                children: [
                    (0, p.jsxs)("div", {
                        children: [
                            (0, p.jsx)("span", { children: t.title }),
                            (0, p.jsx)(V.E, { color: "text-muted", variant: "text-sm/normal", children: i }),
                        ],
                    }),
                    (0, p.jsx)("span", { className: EB.km, children: "Guild" }),
                ],
            }),
        });
    return s
        ? (0, p.jsxs)("div", {
              className: EB.Os,
              children: [
                  m,
                  (0, p.jsx)(EP.g, {
                      label: "Bucket Override",
                      description: `Current Assignments: ${g}`,
                      experiment: t,
                      experimentId: i,
                      overrideInfo: n,
                  }),
                  (0, p.jsx)("div", {
                      className: EB.h_,
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
                                    className: EB.id,
                                    children: "Guild Assignments",
                                }),
                                (0, p.jsx)(V.E, { variant: "code", className: EB.AS, children: c }),
                                (0, p.jsx)(V.E, {
                                    variant: "text-lg/medium",
                                    className: EB.id,
                                    children: "Server Descriptor",
                                }),
                                (0, p.jsx)(V.E, {
                                    variant: "code",
                                    className: EB.AS,
                                    children: null == u ? "None" : JSON.stringify(u, void 0, 2),
                                }),
                                (0, p.jsx)(V.E, {
                                    variant: "text-lg/medium",
                                    className: EB.id,
                                    children: "Override Descriptor",
                                }),
                                (0, p.jsx)(V.E, {
                                    variant: "code",
                                    className: EB.AS,
                                    children:
                                        n?.originalDescriptor == null
                                            ? "None"
                                            : JSON.stringify(n.originalDescriptor, void 0, 2),
                                }),
                                (0, p.jsx)(V.E, {
                                    variant: "text-lg/medium",
                                    className: EB.id,
                                    children: "Recent Exposures",
                                }),
                                (0, p.jsx)(V.E, {
                                    variant: "code",
                                    className: EB.AS,
                                    children: 0 === d.length ? "None" : d.join("\n"),
                                }),
                            ],
                        })
                      : (0, p.jsx)("div", {
                            className: EB.id,
                            children: (0, p.jsx)(B.Q, {
                                variant: "secondary",
                                text: "More Details \xbb",
                                onClick: () => a(!0),
                            }),
                        }),
                  (0, p.jsx)(eE.c, { className: EB.yF }),
              ],
          })
        : (0, p.jsx)("div", { className: EB.Os, children: m });
}
let EY = (0, a.E2)(u.X.EXPERIMENTS_SETTING, {
        Component: function () {
            let { experiments: e, overridesInfo: t } = (0, EU.op)(),
                { experiments: i, overridesInfo: n } = (0, EV.hI)(),
                s = f.useMemo(() => ({ ...i, ...e }), [i, e]),
                l = f.useMemo(() => ({ ...n, ...t }), [n, t]),
                r = (0, O.bG)([cA.default], () => {
                    let e = cA.default.getInstallationForTracking();
                    return null == e ? null : (0, Ey.v)(e);
                }),
                [a, o] = f.useState(""),
                u = (0, Ek.oC)((0, Ek.R3)((0, Ek.Fm)(s), l), a);
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
                                cx.p5 &&
                                    (0, p.jsx)(B.Q, {
                                        size: "sm",
                                        onClick: () => {
                                            (0, cx.C)(r, () => {
                                                (0, Ej.P0)((0, EO.o)("Installation ID copied!", ER.Ck.SUCCESS));
                                            });
                                        },
                                        text: "Copy",
                                    }),
                            ],
                        }),
                    (0, p.jsx)(D.I, { placeholder: "Search experiments", query: a, onChange: o, onClear: () => o("") }),
                    u.length > 0
                        ? u.map((e) => {
                              let t = "guild" === e.experiment.kind ? Ez : EF;
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
                              className: EB.p$,
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
    EX = (0, a.zZ)(u.X.EXPERIMENTS_CATEGORY, { buildLayout: () => [EY] }),
    EH = (0, a.t_)(u.X.EXPERIMENTS_PANEL, { useTitle: () => "Experiments", buildLayout: () => [EX] }),
    EK = (0, a.i4)(u.X.EXPERIMENTS_SIDEBAR_ITEM, {
        useTitle: () => "Experiments",
        icon: Eb.c,
        useMenu: Ev.A,
        buildLayout: () => [EH],
    }),
    EW = (0, a.WI)(u.X.DEVELOPER_SECTION, {
        useTitle: () => g.intl.string(g.t["+gHUHA"]),
        usePredicate: () => hL.A.isDeveloper,
        buildLayout: () => [EK, EC],
    });
var EZ = i(824552),
    Eq = i(370997);
let EQ = (0, a.E2)(u.X.AUTHORIZED_APPS_LIST_SETTING, {
    Component: Eq.Ay,
    useSearchTerms: () => [g.intl.string(g.t["f6kk+r"])],
});
var EJ = i(187322),
    E$ = i(77468),
    E0 = i(289498),
    E1 = i(573648),
    E2 = i(941314),
    E3 = i(874490),
    E6 = i(370480),
    E4 = i(968309);
let E7 = new Set([q.fg2.XBOX, q.fg2.PLAYSTATION, q.fg2.PLAYSTATION_STAGING, q.fg2.CRUNCHYROLL]);
var E5 = i(169869),
    E8 = i(235693),
    E9 = i(757036),
    Se = i(555837),
    St = i(241524),
    Si = i(346017),
    Sn = i(212739),
    Ss = i(30370),
    Sl = i(968671),
    Sr = i(674567),
    Sa = i(237146),
    So = i(594387),
    Su = i(34934);
function Sd() {
    let e,
        t,
        n,
        s,
        l,
        { variant: r, showFooter: a } =
            ((e = (0, Sr.V)()),
            (t = (0, Sl.GM)("connectedAccountsBannerFooter")),
            (n = (0, Sn.O)()),
            (l = null != (s = (0, O.bG)([Ss.A], () => Ss.A.getAccount(null, q.fg2.XBOX))) && !s.revoked),
            e === Sr.s.NONE || e === Sr.s.FREE_FRACTIONAL_NITRO || (e === Sr.s.NON_NITRO && n)
                ? { variant: Sr.s.NONE, showFooter: !1 }
                : { variant: e, showFooter: t && e === Sr.s.NON_NITRO && !l }),
        { analyticsLocations: o } = (0, nG.Ay)(eM.A.XBOX_CONNECTED_ACCOUNTS_BANNER),
        u = (0, Si.yW)(o),
        d = (0, St.A)("(max-width: 485px)");
    if (r === Sr.s.NONE) return null;
    let c = d ? "md" : "sm",
        m = "",
        A = null;
    switch (r) {
        case Sr.s.NITRO:
            (m = g.intl.string(Sa.default["+QAvQz"])),
                (A = (0, p.jsx)(eh.$, {
                    variant: "overlay-primary",
                    size: c,
                    fullWidth: d,
                    text: g.intl.string(Sa.default.CubeLC),
                    onClick: () => {
                        (0, _.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([i.e("16848"), i.e("77632")]).then(
                                i.bind(i, 836291),
                            );
                            return (t) => (0, p.jsx)(e, { ...t, sourceAnalyticsLocations: o });
                        });
                    },
                }));
            break;
        case Sr.s.NON_NITRO:
        case Sr.s.FREE_FRACTIONAL_NITRO:
            (m = g.intl.string(Sa.default.NwkRTZ)),
                (A = (0, p.jsx)(sA.A, {
                    defaultTextOverride: g.intl.string(Sa.default["0vY+ie"]),
                    variantOverride: "overlay-primary",
                    size: c,
                    fullWidth: d,
                    subscriptionTier: sp.pe.TIER_2,
                }));
            break;
        default:
            (0, t6.xb)(r);
    }
    return (0, p.jsxs)(nG.f5, {
        value: o,
        children: [
            (0, p.jsxs)("div", {
                className: Su.bV,
                children: [
                    (0, p.jsx)(eA.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: g.intl.string(g.t.NG1e6l),
                    }),
                    (0, p.jsx)(oW.t, { size: "xs", color: "var(--icon-default)" }),
                ],
            }),
            (0, p.jsx)(tQ.N, {
                theme: "dark",
                children: (e) =>
                    (0, p.jsx)("div", {
                        className: e,
                        children: (0, p.jsxs)("div", {
                            className: Su.Nr,
                            children: [
                                (0, p.jsxs)("div", {
                                    className: Su.Tp,
                                    children: [
                                        (0, p.jsx)("div", {
                                            className: Su.Qw,
                                            style: {
                                                backgroundImage: `url(${a ? "https://cdn.discordapp.com/assets/content/1858990b1e56c7d51e887008753104d4663d06c0e0e296d8fe0ea85c7e3e8341.png" : "https://cdn.discordapp.com/assets/content/7308e937fbd3074b9de0ebba1fa3571fa7b10a2b88f384b382f711bae99f40e6.png"})`,
                                            },
                                        }),
                                        (0, p.jsx)("div", { className: Su.$h }),
                                        (0, p.jsx)("div", { className: Su.Rv }),
                                        (0, p.jsx)("div", { className: Su.Lw }),
                                    ],
                                }),
                                (0, p.jsxs)("div", {
                                    className: Su.Mn,
                                    children: [
                                        (0, p.jsxs)("div", {
                                            className: Su.mY,
                                            children: [
                                                (0, p.jsx)("img", {
                                                    className: Su.wm,
                                                    src: "https://cdn.discordapp.com/assets/content/c5fab2b5d1155c4c9bc088b07f8563b6db8d2d08666357486efc5aea6e97fbea.png",
                                                    alt: "Xbox Game Pass",
                                                }),
                                                (0, p.jsx)(V.E, {
                                                    variant: "text-lg/semibold",
                                                    color: "text-strong",
                                                    className: Su.DD,
                                                    children: m,
                                                }),
                                            ],
                                        }),
                                        (0, p.jsx)("div", { className: Su.lO, children: A }),
                                    ],
                                }),
                                a &&
                                    (0, p.jsxs)(p.Fragment, {
                                        children: [
                                            (0, p.jsx)("div", { className: Su.yF }),
                                            (0, p.jsxs)("div", {
                                                className: Su.sQ,
                                                children: [
                                                    (0, p.jsx)(dY.o, {
                                                        size: d ? "md" : "sm",
                                                        color: w.A.colors.ICON_STRONG,
                                                    }),
                                                    (0, p.jsx)(V.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-default",
                                                        children: g.intl.format(So.default.mXY4Rb, {
                                                            onConnect: () => {
                                                                u(Si.Hx.CONNECT),
                                                                    (0, E4.A)({
                                                                        platformType: q.fg2.XBOX,
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
var Sc = i(201718),
    Sg = i(321078),
    Sm = i(672130),
    SA = i(546183),
    Sh = i(379848),
    SE = i(96734);
let SS = (e) => {
        let { markAsDismissed: t } = e;
        return (
            f.useEffect(() => t(t8.i.UNKNOWN), [t]),
            (0, p.jsx)(n5.Lp, { className: SE.Ad, text: g.intl.string(g.t.y2b7CA) })
        );
    },
    ST = (e) => {
        let { title: t, body: i, img: n, newIndicatorDismissibleContent: s, onClick: l } = e;
        return (0, p.jsxs)("div", {
            className: SE.kL,
            children: [
                n,
                (0, p.jsxs)("div", {
                    className: SE.FS,
                    children: [
                        (0, p.jsxs)("div", {
                            className: SE.TK,
                            children: [
                                (0, p.jsx)(Sh.Ay, {
                                    contentTypes: [s],
                                    children: (e) => {
                                        let { visibleContent: t, markAsDismissed: i } = e;
                                        return t === s ? (0, p.jsx)(SS, { markAsDismissed: i }) : null;
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
    Sx = () => {
        let e = ta.A.getArticleURL(q.MVz.PS_CONNECTION);
        return (0, p.jsx)(ST, {
            title: g.intl.string(g.t.v20wwm),
            body: g.intl.format(g.t.lTZBit, { help_article: e }),
            img: (0, p.jsx)("img", { src: "/assets/88954903b6a5b9cc.svg", width: "82", height: "auto", alt: "" }),
            newIndicatorDismissibleContent: eS.M.PS_ONE_WAY_RECONNECT,
            onClick: () => (0, E4.A)({ platformType: q.fg2.PLAYSTATION, location: "PS two way upsell" }),
        });
    },
    Sp = "/assets/9df988a227916145.png",
    Sf = () =>
        (0, p.jsx)(ST, {
            title: g.intl.string(So.default["9cLtDI"]),
            body: g.intl.format(So.default["D+kUbg"], {
                learnMoreLink: ta.A.getArticleURL(q.MVz.XBOX_GAME_PASS_PERKS),
            }),
            img: (0, p.jsx)("img", { src: Sp, width: "auto", height: "45", alt: "" }),
            newIndicatorDismissibleContent: eS.M.XBOX_PERKS_RECONNECT_UPSELL,
            onClick: () => (0, E4.A)({ platformType: q.fg2.XBOX, location: "Xbox perks reconnect upsell" }),
        }),
    SN = () => {
        let e = ta.A.getArticleURL(q.MVz.XBOX_CONNECTION);
        return (0, p.jsx)(ST, {
            title: g.intl.string(g.t["2okkZV"]),
            body: g.intl.format(g.t.OnERSS, { help_article: e }),
            img: (0, p.jsx)("img", { src: Sp, width: "auto", height: "45", alt: "" }),
            newIndicatorDismissibleContent: eS.M.XBOX_ONE_WAY_RECONNECT,
            onClick: () => (0, E4.A)({ platformType: q.fg2.XBOX, location: "Xbox two way upsell" }),
        });
    };
var S_ = i(783419),
    SI = i(534952),
    SC = i(230451),
    Sb = i(781471);
let Sv = (e) => {
    let t,
        { integration: i } = e,
        {
            isJoining: n,
            joinErrorMessage: s,
            showJoinErrorMessage: l,
        } = (0, O.cf)(
            [Ss.A],
            () => ({
                isJoining: Ss.A.isJoining(i.id),
                joinErrorMessage:
                    "" === Ss.A.joinErrorMessage(i.id) ? g.intl.string(g.t.j2d6Km) : Ss.A.joinErrorMessage(i.id),
                showJoinErrorMessage: void 0 !== Ss.A.joinErrorMessage(i.id),
            }),
            [i.id],
        );
    return (
        null != (0, O.bG)([H.A], () => H.A.getGuild(i.guild.id), [i.guild.id]) ||
            (t = (0, p.jsx)(eh.$, {
                size: "sm",
                onClick: function () {
                    E$.A.joinServer(i.id, () => {});
                },
                disabled: n,
                variant: "primary",
                text: n ? g.intl.string(g.t.RXvQQu) : g.intl.string(g.t.XpeFYr),
            })),
        (0, p.jsxs)("div", {
            className: Sb.iA,
            children: [
                (0, p.jsxs)("div", {
                    className: Sb.XX,
                    children: [
                        (0, p.jsx)(gG.Ay, { size: gG.Ay.Sizes.SMALL, guild: i.guild, className: Sb.$f }),
                        (0, p.jsxs)("div", {
                            className: Sb.Vn,
                            children: [
                                (0, p.jsx)(V.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: i.guild.name,
                                }),
                                (0, p.jsx)(uw.Anchor, {
                                    href: E1.A.get(i.type)?.getPlatformUserUrl?.(i.account),
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
                        className: Sb.R,
                        children: s,
                    }),
            ],
        })
    );
};
function Sy(e) {
    var t;
    let i,
        n,
        { account: s } = e,
        l =
            ((t = s.id),
            (i = (0, Se.G)({ location: "useShouldShowXboxPerksReconnectUpsell" })),
            (n = (0, E9.L)(sp.PremiumTypes.TIER_2)),
            !i && !n && !/^\d+$/.test(t));
    return s.type === q.fg2.XBOX && l
        ? (0, p.jsx)(Sf, {})
        : s.twoWayLink
          ? null
          : s.type === q.fg2.XBOX
            ? (0, p.jsx)(SN, {})
            : s.type === q.fg2.PLAYSTATION
              ? (0, p.jsx)(Sx, {})
              : null;
}
function Sj(e) {
    let t,
        i,
        n,
        s,
        l,
        r,
        a,
        { onDisconnect: o, account: u, theme: d, locale: c } = e,
        [m, A] = f.useState(u.friendSync),
        [h, E] = f.useState(u.visibility),
        [S, T] = f.useState(u.metadataVisibility),
        [x, N] = f.useState(u.showActivity),
        [I, C] = f.useState(null),
        [b, v] = f.useState(null),
        [y, j] = f.useState(!1),
        [O, R] = f.useState([]),
        D = (0, E3.ML)(u.type),
        P = E1.A.get(D),
        G = (0, E2.useIsRiotSocialSDKMigrationEnabled)({ location: "User Settings Connections" });
    f.useEffect(() => {
        A(u.friendSync), E(u.visibility), T(u.metadataVisibility), N(u.showActivity);
    }, [u]);
    let U = { inProgressVisibility: I, inProgressMetadataVisibility: b },
        k = f.useRef(U);
    return (
        f.useEffect(() => {
            k.current = U;
        }),
        f.useEffect(() => {
            if (!1 === u.verified) return;
            let { inProgressVisibility: e, inProgressMetadataVisibility: t } = k.current;
            null != e && (E(e), E$.A.setVisibility(u.type, u.id, e), C(null)),
                null != t && (T(t), E$.A.setMetadataVisibility(u.type, u.id, t), v(null));
        }, [u]),
        (0, p.jsxs)("div", {
            className: Sb.FI,
            children: [
                ((t = E1.A.get(u.type)),
                (i = E1.A.get(D)),
                (n = "1" === (u.metadata ?? {})[S_.pK.TWITTER_VERIFIED]),
                (s = null),
                t.type === q.fg2.TWITTER &&
                    n &&
                    (s = (0, p.jsx)(e0.m, {
                        text: g.intl.string(g.t.Jebrww),
                        children: (0, p.jsx)(e8.A, {
                            color: w.A.unsafe_rawColors.PLATFORM_TWITTER.css,
                            children: (0, p.jsx)(e1.U, { size: "xs", color: w.A.unsafe_rawColors.WHITE.css }),
                        }),
                    })),
                (0, p.jsxs)("div", {
                    className: Sb.Il,
                    children: [
                        (0, p.jsx)("img", {
                            alt: i.name,
                            className: Sb.gj,
                            src: (0, go.M)(d) ? i.icon.darkSVG : i.icon.lightSVG,
                        }),
                        (0, p.jsxs)("div", {
                            children: [
                                (0, p.jsxs)("div", {
                                    className: Sb.$p,
                                    children: [
                                        (0, p.jsx)(V.E, {
                                            color: "text-strong",
                                            variant: "text-md/semibold",
                                            className: Sb.RW,
                                            children: u.name,
                                        }),
                                        null != s && (0, p.jsx)("div", { className: Sb.cG, children: s }),
                                    ],
                                }),
                                (0, p.jsx)(V.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: Sb.Au,
                                    children:
                                        null != i.replacedBy && G
                                            ? g.intl.format(SC.default.Glhokn, { platformName: i.name })
                                            : i.name,
                                }),
                            ],
                        }),
                        (0, p.jsx)(M.D, {
                            className: Sb.uH,
                            onClick: function () {
                                let e = E1.A.get(u.type);
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
                                            E7.has(u.type) &&
                                            u.twoWayLink &&
                                            (0, p.jsx)(st.A, {
                                                children: g.intl.format(g.t.COW3Xn, { platformName: e.name }),
                                            }),
                                    }),
                                );
                            },
                            "aria-label": g.intl.string(g.t.ppppRJ),
                            focusProps: { offset: { top: -4, left: -4, right: -4 } },
                            children: (0, p.jsx)(gd.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                })),
                (0, p.jsx)(Sy, { account: u }),
                (function (e) {
                    let t = e.metadata ?? {},
                        i = null,
                        n = (0, E6.An)(t[S_.pK.CREATED_AT], c);
                    switch (e.type) {
                        case q.fg2.REDDIT:
                            i = (0, E5.xE)(t, Sb.Nz);
                            break;
                        case q.fg2.STEAM:
                            i = (0, E5.dy)(t, Sb.Nz);
                            break;
                        case q.fg2.BLUESKY:
                        case q.fg2.TWITTER:
                        case q.fg2.MASTODON:
                            i = (0, E5.ED)(t, Sb.Nz);
                            break;
                        case q.fg2.EBAY:
                            i = (0, E5.ub)(t, Sb.Nz);
                            break;
                        case q.fg2.PAYPAL:
                            i = (0, E5.gZ)(t, Sb.Nz);
                            break;
                        case q.fg2.TIKTOK:
                            i = (0, E5.HU)(t, Sb.Nz);
                    }
                    null !== n &&
                        (null == i && (i = []),
                        i?.push(
                            (0, p.jsx)(
                                V.E,
                                {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    className: Sb.M4,
                                    children: g.intl.format(g.t["9rfonh"], { date: n }),
                                },
                                "member-since",
                            ),
                        ));
                    let s = O.includes(e.id),
                        l = g.intl.string(g.t.wzzjk9);
                    if (null == i || 0 === i.length)
                        if (!0 !== E1.A.get(e.type).hasMetadata) return null;
                        else
                            (i = [
                                (0, p.jsx)(n5.Lp, { className: Sb.Z3, text: g.intl.string(g.t.y2b7CA) }, "badge"),
                                (0, p.jsx)(
                                    V.E,
                                    {
                                        variant: "text-xs/normal",
                                        className: Sb.vt,
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
                                    className: Sb.jy,
                                    children: (0, p.jsx)(eh.$, {
                                        text: l,
                                        variant: "secondary",
                                        size: "sm",
                                        loading: y,
                                        disabled: s,
                                        "aria-label": g.intl.string(g.t.sCkLYH),
                                        onClick: s
                                            ? void 0
                                            : () => {
                                                  j(!0),
                                                      E$.A.refresh(e.type, e.id).finally(() => {
                                                          setTimeout(() => {
                                                              O.push(e.id), R(O), j(!1);
                                                          }, 2e3);
                                                      });
                                              },
                                    }),
                                },
                                "refresh-button",
                            ),
                        ),
                        (0, p.jsx)("div", { className: Sb.tJ, children: i })
                    );
                })(u),
                (q.txh.has(u.type) &&
                    (l = (0, p.jsx)(L.d, {
                        label: g.intl.string(g.t["+KCMSi"]),
                        checked: m,
                        onChange: function (e) {
                            A(e), E$.A.setFriendSync(u.type, u.id, e);
                        },
                    })),
                q.ewM.has(u.type) &&
                    (r = (0, p.jsx)(L.d, {
                        label: g.intl.format(g.t["6u6J0q"], { platform: P.name }),
                        checked: x,
                        onChange: function (e) {
                            N(e), E$.A.setShowActivity(u.type, u.id, e);
                        },
                    })),
                E1.A.get(u.type)?.hasMetadata === !0 &&
                    (a = (0, p.jsx)(L.d, {
                        label: g.intl.string(g.t.FYKGsL),
                        checked: 1 === S,
                        onChange: function (e) {
                            let { verified: t } = u,
                                i = +!!e;
                            if (e && !t) {
                                v(i), (0, E4.A)({ platformType: u.type, location: "User Settings" });
                                return;
                            }
                            T(i), E$.A.setMetadataVisibility(u.type, u.id, i);
                        },
                        disabled: 1 !== h || null == u.metadata,
                    })),
                (0, p.jsxs)("div", {
                    className: Sb.HZ,
                    children: [
                        (0, p.jsx)(L.d, {
                            label: g.intl.string(g.t.f7yOAX),
                            checked: 1 === h,
                            onChange: function (e) {
                                let { verified: t } = u,
                                    i = +!!e;
                                if (e && !t) {
                                    C(i), (0, E4.A)({ platformType: u.type, location: "User Settings" });
                                    return;
                                }
                                E(i), E$.A.setVisibility(u.type, u.id, i);
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
                                  (0, E4.A)({ platformType: u.type, location: "User Settings" });
                              },
                          }),
                      })
                    : u.integrations.length > 0
                      ? (0, p.jsx)(sy.D, {
                            label: g.intl.string(g.t.fOe3fZ),
                            children: u.integrations.map((e) => (0, p.jsx)(Sv, { integration: e }, e.id)),
                        })
                      : void 0,
                (0, p.jsx)(E8.A, { partner: u.type }),
            ],
        })
    );
}
function SO(e) {
    let { appIdentity: t, oauth2Token: i } = e;
    return null == i
        ? null
        : (0, p.jsxs)("div", {
              className: Sb.FI,
              children: [
                  (function (e, t) {
                      let { application: i } = t,
                          n = iJ.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
                      return (0, p.jsxs)("div", {
                          className: Sb.Il,
                          children: [
                              (0, p.jsx)("img", { alt: i.name, className: ew()(Sb.gj, Sb.sN), src: n }),
                              (0, p.jsxs)("div", {
                                  children: [
                                      (0, p.jsx)("div", {
                                          className: Sb.$p,
                                          children: (0, p.jsx)(V.E, {
                                              color: "text-strong",
                                              variant: "text-md/semibold",
                                              className: Sb.RW,
                                              children: e.profile.username,
                                          }),
                                      }),
                                      (0, p.jsx)(V.E, {
                                          variant: "text-xs/normal",
                                          color: "text-strong",
                                          className: Sb.Au,
                                          children: i.name,
                                      }),
                                  ],
                              }),
                              (0, p.jsx)(M.D, {
                                  className: Sb.uH,
                                  onClick: () =>
                                      (0, Eq.d1)(i, t.scopes, () => {
                                          EZ.A.delete(t.id);
                                      }),
                                  "aria-label": g.intl.string(g.t.ppppRJ),
                                  focusProps: { offset: { top: -4, left: -4, right: -4 } },
                                  children: (0, p.jsx)(gd.P, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      });
                  })(t, i),
                  (0, p.jsx)("div", {
                      className: Sb.HZ,
                      children: (0, p.jsx)(L.d, {
                          label: g.intl.string(g.t.f7yOAX),
                          checked: t.profile?.connection_visible ?? !1,
                          onChange: (e) => {
                              Sc.A.updateApplicationIdentityConfig(i.application.id, t.provider_issued_user_id, {
                                  connection_visible: e,
                              });
                          },
                      }),
                  }),
              ],
          });
}
function SR(e) {
    let t = E1.A.get(e);
    (0, E4.A)({ platformType: t.type }),
        Y.default.track(q.HAw.ACCOUNT_LINK_STEP, {
            previous_step: "desktop connections",
            current_step: "desktop oauth",
            platform_type: t.type,
        });
}
function SL() {
    let e = (0, E3.gn)(),
        t = (0, E2.useIsRiotSocialSDKMigrationEnabled)({ location: "User Settings Connections" }),
        i = (0, eZ.A)(t ? SI.tX : []);
    return (0, p.jsxs)("div", {
        className: Sb.lA,
        children: [
            i.map(
                (e) =>
                    null != e &&
                    (0, p.jsx)(
                        Sm.A,
                        { application: e, className: Sb.__invalid_accountButton, innerClassName: Sb.U$ },
                        e.id,
                    ),
            ),
            e
                .slice(0, 10 - i.length)
                .map((e) =>
                    (0, p.jsx)(
                        E0.A,
                        { type: e.type, className: Sb.__invalid_accountButton, innerClassName: Sb.U$ },
                        e.type,
                    ),
                ),
            (0, p.jsx)(e0.m, {
                text: g.intl.string(g.t.QqTz8b),
                children: (0, p.jsx)("div", {
                    className: ew()(Sb.ej, Sb.__invalid_accountButton),
                    children: (0, p.jsx)(EJ.vN, {
                        children: (0, p.jsx)("button", {
                            className: ew()(Sb.R8, Sb.U$),
                            type: "button",
                            onClick: function () {
                                n3.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: SR });
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
function SD(e) {
    let t,
        { fetching: i, accounts: n, appIdentities: s, authorizedApps: l, theme: r, locale: a } = e,
        u = (0, o.SV)("ConnectionsList"),
        d = f.useMemo(() => n.filter((e) => E1.A.isSupported(e.type)), [n]);
    return (
        (t = i
            ? (0, p.jsx)(u6.y, { type: u6.y.Type.SPINNING_CIRCLE })
            : 0 === d.length && 0 === s.length
              ? (0, p.jsx)(ir.pp, {
                    theme: r,
                    className: u ? Sb.p$ : void 0,
                    children: (0, p.jsx)(ir.SG, {
                        note: g.intl.string(g.t.WenGZ2),
                        children: g.intl.string(g.t.aoLS84),
                    }),
                })
              : (0, p.jsxs)(p.Fragment, {
                    children: [
                        u &&
                            (0, p.jsx)(eA.D, {
                                variant: "heading-md/semibold",
                                color: "text-strong",
                                children: g.intl.format(g.t.AioIGb, { count: s.length + d.length }),
                            }),
                        s.map((e, t) =>
                            (0, p.jsx)(
                                SO,
                                { appIdentity: e, oauth2Token: l.find((t) => t.application.id === e.application_id) },
                                `app-${t}`,
                            ),
                        ),
                        d.map((e, t) =>
                            (0, p.jsx)(
                                Sj,
                                {
                                    theme: r,
                                    account: e,
                                    locale: a,
                                    onDisconnect: () =>
                                        (function (e) {
                                            let { type: t, id: i } = e;
                                            E$.A.disconnect(t, i);
                                        })(e),
                                },
                                `connection-${t}`,
                            ),
                        ),
                    ],
                })),
        (0, p.jsx)("div", { className: Sb.V, children: t })
    );
}
let SP = (0, a.E2)(u.X.CONNECTIONS_ADD_CONNECTIONS_SETTING, {
        Component: function () {
            let e = (0, o.SV)("NewConnectSection");
            return (0, p.jsx)(sy.D, {
                label: g.intl.string(e ? g.t["t+aGse"] : g.t.ZeDrUf),
                description: e ? void 0 : g.intl.format(g.t["oYc+Gz"], { privacyPolicyUrl: q.X7G.PRIVACY }),
                children: (0, p.jsx)(SL, {}),
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
    SG = (0, a.E2)(u.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING, {
        Component: function () {
            let e = (0, O.bG)([e_.A], () => e_.A.hidePersonalInformation),
                t = (0, O.bG)([Ss.A], () => Ss.A.isFetching()),
                i = (0, O.bG)([Ss.A], () => Ss.A.getAccounts()),
                { authorizedAppsFetchState: n, authorizedApps: s } = (0, O.cf)([SA.default], () => ({
                    authorizedAppsFetchState: SA.default.getFetchState(),
                    authorizedApps: SA.default.getNewestTokensForNonChildrenApplications(),
                })),
                { isLoading: l, filteredAppIdentities: r } = (0, Sg.A)(t3.default.getCurrentUser().id, {
                    includeHidden: !0,
                }),
                a = (0, d4.Ay)(),
                o = (0, O.bG)([dD.default], () => dD.default.locale);
            return (f.useEffect(() => {
                n === SA.FetchState.NOT_FETCHED && EZ.A.fetch();
            }, [n]),
            e)
                ? null
                : (0, p.jsxs)(p.Fragment, {
                      children: [
                          (0, p.jsx)(Sd, {}),
                          (0, p.jsx)(SD, {
                              fetching: t || l || (r.length > 0 && n !== SA.FetchState.FETCHED),
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
            E$.A.fetch();
        },
        useSearchTerms: () => [
            g.intl.string(g.t["+/hZM/"]),
            g.intl.string(g.t.bsbMVz),
            g.intl.string(g.t.f7yOAX),
            g.intl.string(g.t.FYKGsL),
            g.intl.string(g.t["+KCMSi"]),
        ],
    });
var SU = i(46225);
let SM = [q.fg2.LEAGUE_OF_LEGENDS, q.fg2.RIOT_GAMES];
function SV() {
    let e = (0, O.bG)([Ss.A], () => Ss.A.getAccounts().find((e) => SM.includes(e.type))?.type),
        t = null != e ? E1.A.get(e) : null,
        i = (0, eZ.h)(t?.replacedBy),
        { canStartAuthorization: n, hasAlreadyLinked: s, fetched: l } = (0, SU.RD)(i),
        r = g.intl.string(SC.default["1S6oAo"]),
        a = (0, E2.useIsRiotSocialSDKMigrationEnabled)({ location: "RiotDeprecationInlineNotice" });
    return f.useMemo(
        () =>
            a && null != t && n && i?.connectionEntrypointUrl != null && !s && l
                ? {
                      type: eN.lT.INLINE_NOTICE,
                      noticeType: "info",
                      useText: () =>
                          g.intl.format(SC.default.DeOsIl, {
                              connectionName: t.name,
                              applicationName: r,
                              connectionEntrypointUrl: i.connectionEntrypointUrl,
                          }),
                  }
                : null,
        [t, r, i, n, a, s, l],
    );
}
let Sk = (0, a.zZ)(u.X.CONNECTIONS_CATEGORY, {
        useTitle: () => g.intl.string(g.t["3fe7U5"]),
        useSubtitle: () => g.intl.string(g.t.U22vw6),
        useInlineNotice: SV,
        buildLayout: () => [SP, SG],
    }),
    Sw = (0, a.zZ)(u.X.AUTHORIZED_APPS_CATEGORY, {
        useTitle: () => g.intl.string(g.t["f6kk+r"]),
        useSubtitle: () => g.intl.string(g.t.G9JfLg),
        buildLayout: () => [EQ],
        initialize: () => (
            EZ.A.fetch(),
            () => {
                Eq.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    SB = (0, a.t_)(u.X.CONNECTED_APPS_PANEL, {
        useTitle: () => g.intl.string(g.t.lrVuZO),
        useObscuredNotice: u1.L,
        buildLayout: () => [Sk, Sw],
    }),
    SF = (0, a.i4)(u.X.CONNECTED_APPS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.lrVuZO),
        icon: hK.q,
        buildLayout: () => [SB],
    }),
    Sz = (0, a.WI)(u.X.GAMES_AND_APPS_SECTION, {
        useTitle: () => g.intl.string(g.t.BA9200),
        buildLayout: () => [iB, ec, is, SF],
    });
var SY = i(631670),
    SX = i(619499),
    SH = i(836602),
    SK = i(591179),
    SW = i(854627),
    SZ = i(975732),
    Sq = i(761508),
    SQ = i(83257),
    SJ = i(159001),
    S$ = i(344346),
    S0 = i(919395),
    S1 = i(233641);
function S2(e) {
    let { title: t, children: i } = e;
    return (0, p.jsxs)("div", {
        children: [(0, p.jsx)(eA.D, { variant: "text-md/medium", className: S1.Vf, children: t }), i],
    });
}
function S3(e) {
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
        className: ew()(S1.UA, i),
        children: (0, p.jsxs)("div", {
            className: ew()(S1.yt, n),
            children: [
                (0, p.jsx)("div", {
                    className: ew()(S1.Fp, a && S1.Oz),
                    children: (0, p.jsxs)(p.Fragment, {
                        children: [
                            (0, p.jsx)(S2, { title: l ?? g.intl.string(g.t.Zb06yP), children: s }),
                            null != r ? (0, p.jsx)(S2, { title: g.intl.string(g.t.x5CoXR), children: r }) : null,
                        ],
                    }),
                }),
                (0, p.jsx)("div", { className: S1.oB, children: t }),
            ],
        }),
    });
}
var S6 = i(986687),
    S4 = i(101058),
    S7 = i(841595),
    S5 = i(696451),
    S8 = i(10478);
function S9() {
    return (0, p.jsxs)("div", {
        className: S8.p$,
        children: [
            (0, p.jsx)("img", { src: "/assets/b3b15f93f9f43174.svg", alt: "", className: S8.Sl }),
            (0, p.jsx)(eA.D, {
                className: S8.h8,
                variant: "heading-lg/extrabold",
                children: g.intl.string(g.t.Z1OZCV),
            }),
            (0, p.jsx)(V.E, { className: S8.h8, variant: "text-md/normal", children: g.intl.string(g.t.ZSt4Tt) }),
            (0, p.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: S8.h8,
                children: (0, p.jsx)(eh.$, {
                    variant: "primary",
                    text: g.intl.string(g.t.jQ3pqt),
                    onClick: () => {
                        (0, sj.pX)(q.BVt.GUILD_DISCOVERY), (0, sh.default)();
                    },
                }),
            }),
        ],
    });
}
var Te = i(81400),
    Tt = i(252732),
    Ti = i(355622),
    Tn = i(408018),
    Ts = i(201349),
    Tl = i(158983);
let Tr = (0, sT.Ld)(),
    Ta = (0, t0.createChannelRecord)({ id: "1", type: q.rbe.DM }),
    To = (0, sT.Ld)();
function Tu(e) {
    let {
            sectionTitle: t,
            errors: i,
            onBioChange: n,
            pendingBio: s,
            placeholder: l,
            currentBio: r,
            disabled: a = !1,
        } = e,
        [o, u] = f.useState(s ?? r),
        [d, c] = f.useState((0, Tn.x7)(o)),
        m = f.useRef(r),
        A = f.useRef(!1);
    return (
        f.useEffect(() => {
            if (m.current !== r) {
                let e = (0, Tn.x7)(r);
                u(r), c(e);
            }
            m.current = r;
        }, [r]),
        f.useEffect(() => {
            void 0 !== s || o === r || A.current || (u(r), c((0, Tn.x7)(r)));
        }, [s, r, o]),
        (0, p.jsxs)(oQ.A, {
            title: t,
            titleId: Tr,
            description: g.intl.string(g.t.Bbw6Ac),
            errors: i,
            disabled: a,
            children: [
                (0, p.jsx)(Ts.Ay, {
                    "aria-describedby": To,
                    "aria-labelledby": Tr,
                    className: Tl.i,
                    innerClassName: Tl.Z,
                    maxCharacterCount: q.NA2,
                    onChange: function (e, t, i) {
                        t !== o && (u(t), c(i), n(t));
                    },
                    placeholder: l,
                    channel: Ta,
                    textValue: o,
                    richValue: d,
                    emojiPickerCloseOnModalOuterClick: !0,
                    parentModalKey: ey.USER_SETTINGS_MODAL_KEY,
                    type: Ti.oU.PROFILE_BIO_INPUT,
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
                (0, p.jsx)(F.A, { id: To, children: g.intl.format(g.t["+DFxLc"], { maxLength: q.NA2 }) }),
            ],
        })
    );
}
var Td = i(930861),
    Tc = i(821956),
    Tg = i(562819),
    Tm = i(84540),
    TA = i(408919);
function Th(e) {
    let { user: t, guild: i, className: n, sectionTitle: s, forcedDivider: l = !1, withTutorial: r = !1 } = e,
        { analyticsLocations: a } = (0, nG.Ay)(),
        o = (0, S0.a4)({ user: t, guildId: i?.id }),
        { pendingAvatarDecoration: u, errors: d } = (0, S0.CP)(i?.id),
        c = r ? Td.wL : ak.$n;
    return (0, p.jsx)(oQ.A, {
        className: n,
        forcedDivider: l,
        hasBackground: !0,
        title: s,
        errors: d,
        children: (0, p.jsxs)("div", {
            className: TA.NC,
            children: [
                (0, p.jsx)(c, {
                    size: ak.$n.Sizes.SMALL,
                    onClick: () => {
                        (0, Tg.L)({ analyticsLocations: a, guild: i });
                    },
                    className: ew()({ [TA.yj]: r }),
                    children: g.intl.string(g.t.BVcYCx),
                }),
                (void 0 === u ? null != o : null != u) &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TA.DT,
                        children: (0, p.jsx)(eh.$, {
                            variant: "secondary",
                            size: "sm",
                            text: (0, Tc.uZ)(t, i) ? g.intl.string(g.t.CHf9iJ) : g.intl.string(g.t.OrokWm),
                            onClick: () => {
                                (0, Tm.p)({ guildId: i?.id, avatarDecoration: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var TE = i(339984),
    TS = i(114077);
let TT = [{ name: "gif", extensions: ["gif"] }];
function Tx(e) {
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
        { newestAnalyticsLocation: m } = (0, nG.Ay)(),
        A = c ? Td.wL : ak.$n,
        h = f.useCallback(() => {
            (0, Tt.XD)({
                uploadType: TE.HL.AVATAR,
                analyticsSource: m,
                filters: u ? TT : void 0,
                guildId: r,
                isTryItOut: u,
            });
        }, [r, m, u]);
    return (0, p.jsx)(oQ.A, {
        className: a,
        title: s,
        errors: i,
        disabled: o,
        forcedDivider: d,
        children: (0, p.jsxs)("div", {
            className: TS.NC,
            children: [
                (0, p.jsx)(A, {
                    className: ew()({ [TS.yj]: c }),
                    size: ak.$n.Sizes.SMALL,
                    onClick: h,
                    children: l ?? g.intl.string(g.t["4OynCD"]),
                }),
                t &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TS.DT,
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
var Tp = i(152103);
function Tf(e) {
    let { user: t, guildId: i, className: n } = e,
        s = o3.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: l } = (0, nG.Ay)(),
        {
            userDisplayNameStyles: r,
            guildDisplayNameStyles: a,
            pendingDisplayNameStyles: o,
            pendingErrors: u,
        } = (0, S0.B0)(t, i),
        d = (0, f.useCallback)(() => {
            Y.default.track(q.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS), (0, nU.L)({ analyticsLocations: l, guildId: i });
        }, [l, i]),
        c = (0, f.useCallback)(() => {
            (0, Tm.p)({ displayNameStyles: null }), Y.default.track(q.HAw.DISPLAY_NAME_STYLES_REMOVED);
        }, []),
        m = (0, f.useCallback)(() => {
            (0, Tm.p)({ guildId: i, displayNameStyles: null });
        }, [i]),
        A = void 0 !== o ? o : null != i ? a : r;
    return (0, p.jsx)(oQ.A, {
        title: g.intl.string(nM.default["86GtGH"]),
        className: n,
        showPremiumIcon: s,
        errors: u,
        children: (0, p.jsxs)("div", {
            className: Tp.N,
            children: [
                (0, p.jsx)(eh.$, {
                    variant: "primary",
                    size: "sm",
                    text: g.intl.string(nM.default.vJqrIg),
                    onClick: d,
                }),
                null == i &&
                    null != A &&
                    (0, p.jsx)(eh.$, {
                        variant: "secondary",
                        size: "sm",
                        text: g.intl.string(nM.default.ymq8WQ),
                        onClick: c,
                    }),
                null != i &&
                    null != A &&
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
var TN = i(637193),
    T_ = i(727369);
function TI(e) {
    let { user: t, guild: i, titleIcon: n } = e,
        { analyticsLocations: s } = (0, nG.Ay)(),
        l = null != i,
        { userNameplate: r, guildNameplate: a, pendingNameplate: o, pendingErrors: u } = (0, S0.rv)(t, i?.id),
        d = f.useCallback(() => {
            (0, TN.p)({ analyticsLocations: s, guildId: i?.id });
        }, [s, i?.id]),
        c = f.useCallback(() => {
            (0, Tm.p)({ guildId: i?.id, nameplate: null });
        }, [i?.id]);
    return (0, p.jsx)(oQ.A, {
        title: g.intl.string(g.t.x5CoXR),
        titleIcon: n,
        errors: u,
        children: (0, p.jsxs)("div", {
            className: T_.u,
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
var TC = i(33023);
function Tb(e) {
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
        { newestAnalyticsLocation: c } = (0, nG.Ay)(),
        m = d ? Td.wL : ak.$n;
    return (0, p.jsx)(oQ.A, {
        className: l,
        title: g.intl.string(g.t.Vgdusv),
        showPremiumIcon: a,
        errors: i,
        disabled: r,
        forcedDivider: u,
        children: (0, p.jsxs)("div", {
            className: TC.NC,
            children: [
                (0, p.jsx)(m, {
                    className: ew()({ [TC.yj]: d }),
                    size: ak.$n.Sizes.SMALL,
                    onClick: () =>
                        (0, Tt.XD)({ uploadType: TE.HL.BANNER, analyticsSource: c, guildId: s, isTryItOut: o }),
                    children: g.intl.string(g.t.N0bC3P),
                }),
                t &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TC.DT,
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
var Tv = i(617061),
    Ty = i(872246);
function Tj(e) {
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
        { analyticsLocations: u } = (0, nG.Ay)(),
        d = o3.Ay.canUsePremiumProfileCustomization(t),
        c = (0, S0.N2)({ user: t, guildId: i?.id }),
        { pendingProfileEffect: m, errors: A } = (0, S0.nZ)(i?.id);
    f.useEffect(() => {
        d &&
            Y.default.track(q.HAw.PREMIUM_UPSELL_VIEWED, {
                type: sp.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: u,
            });
    }, [d, u]);
    let h = a ? Td.wL : ak.$n;
    return (0, p.jsx)(oQ.A, {
        forcedDivider: r,
        borderType: cs.i.PREMIUM,
        hasBackground: !0,
        title: l,
        showBorder: o,
        errors: A,
        className: s,
        children: (0, p.jsxs)("div", {
            className: Ty.NC,
            children: [
                (0, p.jsx)(h, {
                    size: ak.$n.Sizes.SMALL,
                    onClick: () => {
                        (0, Tv.W)({ analyticsLocations: u, guild: i, initialSelectedEffect: n });
                    },
                    className: ew()({ [Ty.yj]: a }),
                    children: g.intl.string(g.t["/dRfCf"]),
                }),
                (void 0 === m ? null != c : null != m) &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: Ty.DT,
                        children: (0, p.jsx)(eh.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != i ? g.intl.string(g.t.CHf9iJ) : g.intl.string(g.t.uMuafO),
                            onClick: () => {
                                (0, Tm.p)({ guildId: i?.id, profileEffect: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var TO = i(13875),
    TR = i(515727),
    TL = i(238780);
function TD(e) {
    let { user: t, guild: i, sectionTitle: n } = e,
        { analyticsLocations: s } = (0, nG.Ay)(),
        l = (0, TO.sk)("ProfileFrameSection"),
        r = (0, S0.Xf)({ user: t, guildId: i?.id }),
        { pendingProfileFrame: a, errors: o } = (0, S0.Tu)(i?.id),
        [u, d] = (0, eT.kn)([eS.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE]),
        c = u === eS.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE;
    return l
        ? (0, p.jsx)(oQ.A, {
              showBorder: c,
              borderType: c ? cs.i.NEW_UPSELL : cs.i.PREMIUM,
              hasBackground: c,
              title: n,
              titleBadge: c ? (0, p.jsx)(n5.Lp, { text: g.intl.string(g.t.y2b7CA), className: TL.Ad }) : void 0,
              description: c ? g.intl.string(g.t.yMoMAt) : void 0,
              errors: o,
              children: (0, p.jsxs)("div", {
                  className: TL.NC,
                  children: [
                      (0, p.jsx)(eh.$, {
                          variant: "primary",
                          size: "sm",
                          text: g.intl.string(g.t["9/hmle"]),
                          onClick: () => {
                              (0, TR.w)({ analyticsLocations: s, guild: i }), d(t8.i.TAKE_ACTION);
                          },
                      }),
                      (void 0 === a ? null != r : null != a) &&
                          (0, p.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: TL.DT,
                              children: (0, p.jsx)(eh.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: null != i ? g.intl.string(g.t.CHf9iJ) : g.intl.string(g.t.nQBruk),
                                  onClick: () => {
                                      (0, Tm.p)({ guildId: i?.id, profileFrame: null });
                                  },
                              }),
                          }),
                  ],
              }),
          })
        : null;
}
var TP = i(33851),
    TG = i.n(TP),
    TU = i(602853),
    TM = i(654107),
    TV = i(999291),
    Tk = i(101928),
    Tw = i(835245),
    TB = i(317097),
    TF = i(508274),
    Tz = i(919796),
    TY = i(773431);
function TX(e) {
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
        d = f.useRef(null),
        c = (0, TU.r)(w.A.colors.BACKGROUND_BASE_LOW).hex(),
        m = w.A.colors.BACKGROUND_MOD_MUTED.css,
        A = (0, Tt.sN)(n),
        h = (0, TB.Hl)(n),
        E = h === c ? m : h,
        S = A ? w.A.unsafe_rawColors.WHITE.css : w.A.unsafe_rawColors.PRIMARY_530.css,
        T = (0, Tz.A)(a),
        x = (0, Tz.A)(o),
        [N, _] = f.useState((0, Tw.A)());
    return (
        f.useEffect(() => {
            (T !== a || x !== o) && _((0, Tw.A)());
        }, [o, a, x, T]),
        (0, p.jsx)(P.Y, {
            targetElementRef: d,
            positionKey: N,
            renderPopout: (e) =>
                (0, p.jsx)(TF.VN, {
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
                    className: ew()(TY.oP, { [TY.r9]: l }),
                    children: [
                        (0, p.jsx)(M.D, {
                            ...i,
                            tabIndex: l ? -1 : 0,
                            onClick: l ? q.tEg : t,
                            style: { backgroundColor: h, borderColor: E },
                            className: TY.nf,
                            "aria-label": g.intl.string(g.t.Qp04hK),
                            focusProps: { ringTarget: d },
                            children: (0, p.jsx)(o2.R, {
                                size: "custom",
                                className: TY.BW,
                                width: 14,
                                height: 14,
                                color: S,
                            }),
                        }),
                        r,
                    ],
                });
            },
        })
    );
}
var TH = i(362656);
function TK(e) {
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
        c = (0, TV.Ay)(t.id, r),
        { primaryColor: m, secondaryColor: A } = (0, Tk.A)({
            user: t,
            displayProfile: c,
            pendingThemeColors: n,
            isPreview: !0,
        }),
        h = o3.Ay.canUsePremiumProfileCustomization(t),
        E = null != i ? i : t.getAvatarURL(r, 80),
        S = (0, TU.r)(w.A.unsafe_rawColors.PRIMARY_530).hex(),
        T = (0, TM.rh)(E, S, !1);
    if (null == m || null == A) return null;
    let x = (e) => {
        s(TG()(e, c?.themeColors) ? void 0 : e);
    };
    return (0, p.jsx)(oQ.A, {
        title: g.intl.string(g.t.DMeO2X),
        disabled: !h && !l,
        className: ew()(TH.__invalid_profileThemesSection, a),
        showPremiumIcon: o,
        forcedDivider: d,
        children: (0, p.jsxs)("div", {
            className: TH.hd,
            children: [
                (0, p.jsx)("div", {
                    className: TH.YX,
                    children: (0, p.jsx)(TX, {
                        onChange: (e) => x([e, A]),
                        color: m,
                        suggestedColors: T,
                        showEyeDropper: !0,
                        label: (0, p.jsx)(V.E, {
                            className: TH.yz,
                            color: "text-default",
                            variant: "text-xs/normal",
                            "aria-hidden": !0,
                            children: g.intl.string(g.t.C3KTQk),
                        }),
                    }),
                }),
                (0, p.jsx)("div", {
                    className: TH.YX,
                    children: (0, p.jsx)(TX, {
                        onChange: (e) => x([m, e]),
                        color: A,
                        suggestedColors: T,
                        showEyeDropper: !0,
                        label: (0, p.jsx)(V.E, {
                            className: TH.yz,
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
                        className: TH.WA,
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
function TW(e) {
    let {
            sectionTitle: t,
            errors: i,
            onPronounsChange: n,
            pendingPronouns: s,
            placeholder: l,
            currentPronouns: r,
            disabled: a = !1,
        } = e,
        o = (0, sT.GV)();
    return (0, p.jsx)(oQ.A, {
        title: t,
        titleId: o,
        errors: i,
        disabled: a,
        children: (0, p.jsx)(lL.k, {
            "aria-labelledby": o,
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
var TZ = i(427262),
    Tq = i(684732),
    TQ = i(576705),
    TJ = i(376294);
function T$(e) {
    let { errors: t, pendingNick: i, currentNick: n, username: s, user: l, guild: r } = e,
        a = (0, O.bG)([TQ.A], () => TQ.A.can(q.xBc.CHANGE_NICKNAME, r) || TQ.A.can(q.xBc.MANAGE_NICKNAMES, r)),
        o = (0, E9.L)(sp.PremiumTypes.TIER_2);
    return (0, p.jsxs)(oQ.A, {
        title: g.intl.string(g.t.me1lRk),
        errors: t,
        children: [
            (0, p.jsx)(lL.k, {
                value: i ?? n ?? "",
                placeholder: s,
                maxLength: q.d0r,
                onChange: function (e) {
                    (0, Tm.p)({ guildId: r.id, nickname: e });
                },
                disabled: !a,
                helperText: a ? void 0 : g.intl.string(g.t.gzjxQi),
            }),
            o && (0, p.jsx)(Tf, { user: l, guildId: r.id, className: TJ.F }),
        ],
    });
}
var T0 = i(574173);
let T1 = "/assets/b25da78aa7949feb.png";
function T2(e) {
    let { user: t, showOverlay: i, children: n } = e,
        s = (0, d4.Ay)(),
        { analyticsLocations: l } = (0, nG.Ay)(eM.A.PREMIUM_UPSELL_OVERLAY);
    return (f.useEffect(() => {
        i &&
            Y.default.track(q.HAw.PREMIUM_UPSELL_VIEWED, {
                location_stack: l,
                type: sp.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE,
            });
    }, [i, l]),
    i)
        ? (0, p.jsxs)("div", {
              className: T0.ry,
              children: [
                  (0, p.jsx)("div", { children: n }),
                  (0, p.jsxs)("div", {
                      className: T0.Wc,
                      children: [
                          (0, p.jsx)("img", {
                              className: T0.Tn,
                              alt: g.intl.string(g.t.LHFZQy),
                              src: (function (e) {
                                  switch (e) {
                                      case q.NJ8.DARK:
                                      case q.NJ8.DARKER:
                                      case q.NJ8.MIDNIGHT:
                                          return T1;
                                      case q.NJ8.LIGHT:
                                          return "/assets/a98f1410707fafea.png";
                                      default:
                                          return T1;
                                  }
                              })(s),
                          }),
                          (0, p.jsxs)("div", {
                              className: T0._9,
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
                          (0, p.jsx)(cn.A, {
                              size: ak.$n.Sizes.LARGE,
                              color: ak.$n.Colors.GREEN,
                              textOptions: {
                                  textOverride: o3.Ay.isPremium(t)
                                      ? g.intl.string(g.t.AfRWI8)
                                      : g.intl.string(g.t.nkdUym),
                              },
                              subscriptionTier: sp.pe.TIER_2,
                          }),
                      ],
                  }),
              ],
          })
        : n;
}
var T3 = i(887267);
function T6() {
    let e = (0, O.bG)([t3.default], () => {
            let e = t3.default.getCurrentUser();
            return tj()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        t = (0, E9.L)(sp.PremiumTypes.TIER_2),
        i = (0, O.bG)([SH.A, H.A], () => H.A.getGuild(SH.A.selectedGuildId));
    tj()(null != i, "guild should not be null");
    let {
            pendingAvatar: n,
            pendingNickname: s,
            pendingBanner: l,
            pendingBio: r,
            pendingPronouns: a,
            pendingThemeColors: o,
            errors: u,
        } = (0, O.cf)([SH.A], () => ({ ...SH.A.getPendingChanges(i.id), errors: SH.A.getErrors(i.id) })),
        d = (0, S4.V7)({ userId: e.id, image: n }),
        c = (0, Te.EC)(i.id),
        m = (0, O.bG)([S5.Ay], () => (null == i.id ? null : S5.Ay.getMember(i.id, e.id))),
        A = (0, O.bG)([S7.A], () => S7.A.getGuildMemberProfile(e.id, i.id)),
        h = o3.Ay.canUsePremiumProfileCustomization(e),
        E = (0, S0.z5)(n, m?.avatar),
        S = (0, S0.Ac)(l, A?.banner),
        T = (0, Tq.l)(o, A?.themeColors),
        x = A?.bio ?? "",
        f = A?.pronouns ?? "";
    return (0, p.jsxs)("div", {
        className: T3.Q,
        children: [
            (0, p.jsx)(
                T$,
                {
                    errors: u?.nick ?? c?.nick,
                    username: TZ.Ay.getName(e),
                    pendingNick: s,
                    currentNick: m?.nick,
                    user: e,
                    guild: i,
                },
                "nick",
            ),
            (0, p.jsx)(
                TW,
                {
                    sectionTitle: g.intl.string(g.t["+T3RI/"]),
                    errors: u?.pronouns,
                    onPronounsChange: (e) => (0, Tm.p)({ guildId: i.id, pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: f,
                },
                "pronouns",
            ),
            (0, p.jsxs)(T2, {
                user: e,
                showOverlay: !h,
                children: [
                    (0, p.jsx)(
                        Tx,
                        {
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [
                                    g.intl.string(g.t.lqaIxI),
                                    (0, p.jsx)(e0.m, {
                                        text: g.intl.string(g.t["5AFxuK"]),
                                        children: (0, p.jsx)(oW.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: T3.a,
                                        }),
                                    }),
                                ],
                            }),
                            showRemoveAvatarButton: E,
                            onAvatarChange: (e) =>
                                (0, Tt.rM)(e, m?.avatar, (e) => (0, Tm.p)({ guildId: i.id, avatar: e })),
                            errors: u?.avatar,
                            guildId: i.id,
                            disabled: !h,
                        },
                        "avatar",
                    ),
                    (0, p.jsx)(
                        Th,
                        {
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [
                                    g.intl.string(g.t["7v0T9P"]),
                                    (0, p.jsx)(e0.m, {
                                        text: g.intl.string(g.t["5AFxuK"]),
                                        children: (0, p.jsx)(oW.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: T3.a,
                                        }),
                                    }),
                                ],
                            }),
                            user: e,
                            guild: i,
                        },
                        "decoration",
                    ),
                    !t && (0, p.jsx)(Tf, { user: e, guildId: i.id }),
                    (0, p.jsx)(
                        TI,
                        {
                            user: e,
                            guild: i,
                            titleIcon: (0, p.jsx)(e0.m, {
                                text: g.intl.string(g.t["5AFxuK"]),
                                children: (0, p.jsx)(oW.t, { size: "md", color: "currentColor", className: T3.a }),
                            }),
                        },
                        "nameplate",
                    ),
                    (0, p.jsx)(
                        Tj,
                        {
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [
                                    g.intl.string(g.t.wR5wOo),
                                    (0, p.jsx)(e0.m, {
                                        text: g.intl.string(g.t["5AFxuK"]),
                                        children: (0, p.jsx)(oW.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: T3.a,
                                        }),
                                    }),
                                ],
                            }),
                            user: e,
                            guild: i,
                        },
                        "effect",
                    ),
                    (0, p.jsx)(TD, { user: e, guild: i, sectionTitle: g.intl.string(g.t.GWrZOd) }, "frame"),
                    (0, p.jsx)(
                        Tb,
                        {
                            showRemoveBannerButton: S,
                            errors: u?.banner,
                            onBannerChange: (e) =>
                                (0, Tt.rM)(e, A?.banner, (e) => (0, Tm.p)({ guildId: i.id, banner: e })),
                            guildId: i.id,
                            disabled: !h,
                        },
                        "banner",
                    ),
                    (0, p.jsx)(TK, {
                        user: e,
                        pendingAvatarSrc: d,
                        pendingColors: o,
                        onThemeColorsChange: (e) => (0, Tm.p)({ guildId: i.id, themeColors: e }),
                        guildId: i.id,
                        showResetThemeButton: T,
                    }),
                    (0, p.jsx)(
                        Tu,
                        {
                            placeholder: g.intl.string(g.t["/7NKgv"]),
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [
                                    g.intl.string(g.t.ZzAR2Y),
                                    (0, p.jsx)(e0.m, {
                                        text: g.intl.string(g.t["5AFxuK"]),
                                        children: (0, p.jsx)(oW.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: T3.a,
                                        }),
                                    }),
                                ],
                            }),
                            onBioChange: (e) => (0, Tm.p)({ guildId: i.id, bio: e }),
                            errors: u?.bio ?? c?.bio,
                            pendingBio: r,
                            currentBio: x,
                            disabled: !h,
                        },
                        "about",
                    ),
                ],
            }),
        ],
    });
}
var T4 = i(405318);
function T7(e) {
    (0, _.openModalLazy)(async () => {
        let { default: t } = await Promise.all([i.e("2125"), i.e("66901"), i.e("61129")]).then(i.bind(i, 475312));
        return (i) => (0, p.jsx)(t, { source: { ...e, page: q.liQ.GUILD_MEMBER_PROFILE_SETTINGS }, ...i });
    });
}
function T5(e) {
    let { selectedGuild: t, onGuildChange: i } = e,
        { analyticsLocations: n } = (0, nG.Ay)(eM.A.USER_SETTINGS_GUILD_PROFILE),
        s = (0, O.bG)([t3.default], () => {
            let e = t3.default.getCurrentUser();
            return tj()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        l = (0, O.bG)([S5.Ay], () => (null != t ? S5.Ay.getMember(t.id, s.id) : null)),
        r = (0, O.bG)([S7.A], () => !S7.A.isFetchingProfile(s.id, t?.id)),
        a = (0, O.bG)([e_.A], () => e_.A.hidePersonalInformation),
        { pendingAvatar: o, pendingNameplate: u, ...d } = (0, O.cf)([SH.A], () => SH.A.getPendingChanges(t?.id)),
        c = (0, S4.V7)({ userId: s.id, image: o }),
        m = (0, S0.lw)({
            pendingValue: u,
            userValue: s?.collectibles?.nameplate,
            guildValue: l?.collectibles?.nameplate,
            guildId: t?.id,
        }),
        { pendingDisplayNameStyles: A } = (0, S0.B0)(s, t?.id);
    return (f.useEffect(() => () => n3.h.wait(SJ.IM), []), a)
        ? (0, p.jsx)(u1.A, {})
        : r
          ? (0, p.jsxs)(nG.f5, {
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
                                  (0, p.jsx)(oq.A, { guildId: t.id, onChange: i }),
                                  (0, p.jsx)(S3, {
                                      profilePreviewTitle: (0, p.jsx)(eA.D, {
                                          variant: "heading-md/medium",
                                          className: T4.YV,
                                          children: g.intl.formatToPlainString(g.t.Tc0slG, { guildName: t?.name }),
                                      }),
                                      profilePreview: (0, p.jsx)(S6.A, {
                                          ...d,
                                          pendingAvatar: c,
                                          pendingDisplayNameStyles: A,
                                          user: s,
                                          guild: t,
                                          canUsePremiumCustomization: o3.Ay.canUsePremiumProfileCustomization(s),
                                          onUpsellClick: T7,
                                          containerClassName: T4.ti,
                                      }),
                                      nameplatePreview: (0, p.jsx)(S$.A, {
                                          ...d,
                                          pendingDisplayNameStyles: A,
                                          user: s,
                                          guildId: t?.id,
                                          nameplate: m,
                                          className: null == m ? T4.tJ : void 0,
                                          isHighlighted: !0,
                                      }),
                                      children: (0, p.jsx)(T6, {}),
                                  }),
                              ],
                          })
                        : (0, p.jsx)(S9, {}),
                ],
            })
          : (0, p.jsx)(u6.y, {});
}
var T8 = i(903209),
    T9 = i(39409);
let xe = (e) => {
    let { children: t, notice: i } = e;
    return (0, p.jsxs)("div", { className: T9.r, children: [i, (0, p.jsx)("div", { children: t })] });
};
var xt = i(269115),
    xi = i(823092),
    xn = i(859040),
    xs = i(379197),
    xl = i(488430),
    xr = i(457421),
    xa = i(940622),
    xo = i(559474),
    xu = i(144030);
let xd = () => {
    let e,
        t,
        i,
        n,
        { analyticsLocations: s } = (0, nG.Ay)(eM.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
        l = f.useRef(null),
        {
            asset: r,
            popoutAsset: a,
            title: o,
            body: u,
            version: d,
            revertTextColor: c,
        } = ((e = (0, xa.mb)(xo.RN.UPSELL_BANNER)),
        (t = (0, xa.mb)(xo.RN.UPSELL_BANNER_POPOUT)),
        (i = (0, O.bG)([xr.A], () => xr.A.getMarketingBySurface(xs.R.EDIT_PROFILE_SETTINGS))),
        (n = f.useMemo(
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
        f.useMemo(
            () => ({ ...n, type: xl.G.BANNER, asset: e ?? n.asset, popoutAsset: t ?? n.popoutAsset }),
            [e, t, n],
        )),
        { navigateWithValidation: m } = (0, xi.L_)();
    return (
        f.useEffect(() => {
            Y.default.track(q.HAw.PREMIUM_UPSELL_VIEWED, {
                type: sp.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                location_stack: s,
                version: d,
            });
        }, [s, d]),
        (0, p.jsxs)("div", {
            ref: l,
            className: xu.kL,
            style: { backgroundImage: `url(${r})` },
            children: [
                (0, p.jsx)("div", {
                    className: xu.JS,
                    "aria-hidden": !0,
                    role: "presentation",
                    children: (0, p.jsx)("img", { src: a, className: xu.Qw, alt: "" }),
                }),
                (0, p.jsxs)("div", {
                    className: xu.Em,
                    children: [
                        (0, p.jsx)(eA.D, {
                            variant: "heading-lg/extrabold",
                            color: c ? "text-overlay-dark" : "currentColor",
                            className: xu.DD,
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
                            (0, xn.Cz)({
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
var xc = i(451909),
    xg = i(202639),
    xm = i(400669),
    xA = i(835071),
    xh = i(422936),
    xE = i(234419),
    xS = i(590180),
    xT = i(898461),
    xx = i(207803),
    xp = i(508425),
    xf = i(559949);
let xN = {
        above_the_clouds: {
            preset: "above_the_clouds",
            themeColors: [752280, 9215590],
            avatarDecorationSkuId: "1144059132517826601",
            displayNameStyles: { fontId: xf.x.CHICLE, effectId: xp.z.POP, colors: [959694] },
            getName: () => g.intl.string(g.t["TFc+iF"]),
            getHeaderSrc: () => i(702051).A,
            getBannerSrc: (e) => (e ? i(735161).A : i(887e3).A),
        },
        cyberpunk: {
            preset: "cyberpunk",
            themeColors: [1967991, 742532],
            avatarDecorationSkuId: null,
            displayNameStyles: { fontId: xf.x.PIXELIFY, effectId: xp.z.NEON, colors: [2949343] },
            getName: () => g.intl.string(g.t["4g+5bq"]),
            getHeaderSrc: () => i(272017).A,
            getBannerSrc: (e) => (e ? i(735271).A : i(208574).A),
        },
        shadow_realm: {
            preset: "shadow_realm",
            themeColors: [0, 4458504],
            avatarDecorationSkuId: "1144058522808614923",
            displayNameStyles: { fontId: xf.x.NEO_CASTEL, effectId: xp.z.TOON, colors: [0xff0000] },
            getName: () => g.intl.string(g.t.ycg1xj),
            getHeaderSrc: () => i(863653).A,
            getBannerSrc: (e) => (e ? i(538263).A : i(576974).A),
        },
        starlit_dream: {
            preset: "starlit_dream",
            themeColors: [5123751, 590625],
            avatarDecorationSkuId: "1144058844004233369",
            displayNameStyles: { fontId: xf.x.CHERRY_BOMB, effectId: xp.z.TOON, colors: [3343795] },
            getName: () => g.intl.string(g.t["9WLHvr"]),
            getHeaderSrc: () => i(434361).A,
            getBannerSrc: (e) => (e ? i(700309).A : i(135572).A),
        },
        neon_space: {
            preset: "neon_space",
            themeColors: [6094952, 1007678],
            avatarDecorationSkuId: null,
            displayNameStyles: { fontId: xf.x.MUSEO_MODERNO, effectId: xp.z.NEON, colors: [28737] },
            getName: () => g.intl.string(g.t.UdNuqi),
            getHeaderSrc: () => i(301928).A,
            getBannerSrc: (e) => (e ? i(285974).A : i(775627).A),
        },
    },
    x_ = (e) => xN[e],
    xI = Object.keys(xN),
    xC = (e) => {
        let t = null == e ? xI : xI.filter((t) => t !== e);
        return t[Math.floor(Math.random() * t.length)];
    };
var xb = i(371912),
    xv = i(674253);
function xy(e) {
    let { preset: t, onShuffle: i } = e,
        n = (0, O.bG)([iK.A], () => iK.A.useReducedMotion),
        s = (0, xb.Xf)({ useReducedMotion: n }),
        { name: l, header: r } = f.useMemo(() => {
            let e = x_(t);
            return { name: e.getName(), header: e.getHeaderSrc() };
        }, [t]);
    return (0, p.jsxs)("div", {
        className: xv.kL,
        children: [
            (0, p.jsx)(M.D, {
                onClick: () => {
                    i(), s.startAnimation(!1);
                },
                className: xv.x6,
                "aria-label": g.intl.string(g.t["44yJxh"]),
                children: s.render(),
            }),
            (0, p.jsxs)(M.D, {
                onClick: () => {
                    i(), s.startAnimation(!1);
                },
                "aria-label": `${l}: ${g.intl.string(g.t["44yJxh"])}`,
                className: xv.Lt,
                children: [
                    (0, p.jsx)("img", { alt: "", "aria-hidden": !0, src: r, className: xv.L_ }),
                    (0, p.jsx)(V.E, { className: xv._e, variant: "text-sm/bold", color: "always-white", children: l }),
                ],
            }),
        ],
    });
}
var xj = i(410516),
    xO = i(811611),
    xR = i(515718),
    xL = i(507553);
function xD(e, t) {
    let i = xL.A.useField("scrollPosition"),
        n = (0, O.bG)([iK.A], () => iK.A.useReducedMotion);
    (0, f.useEffect)(() => {
        let s = e.current;
        if (null == s || i !== t) return;
        let l = requestAnimationFrame(() => {
            s.scrollIntoView({ behavior: n ? "auto" : "smooth" }), xL.A.setState({ scrollPosition: null });
        });
        return () => cancelAnimationFrame(l);
    }, [e, t, i, n]);
}
var xP = i(844222),
    xG = i(314649);
function xU(e) {
    let { user: t } = e,
        { reducedMotion: n } = f.useContext(xP.C),
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
        } = (0, O.cf)([SH.A], () => {
            let e = SH.A.getPendingChanges(),
                t = SH.A.getTryItOutChanges();
            return { ...e, ...t };
        }),
        S = (0, S4.V7)({ userId: t.id, image: m ?? s });
    return (0, p.jsx)(S6.A, {
        user: t,
        pendingPronouns: d,
        pendingBio: c,
        pendingBanner: A ?? l ?? i(636763),
        pendingDisplayNameStyles: E ?? o,
        pendingAvatar: S,
        pendingThemeColors: g ?? u,
        pendingAvatarDecoration: void 0 !== h ? h : r,
        pendingProfileEffect: a,
        avatarClassName: null != m || null != s || n.enabled ? void 0 : xG.WX,
        containerClassName: xG.ti,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        hideExampleButton: !0,
    });
}
var xM = i(461414);
function xV(e) {
    let { user: t, isVisible: i, shouldShow: n } = e,
        s = o3.Ay.isPremium(t),
        l = o3.Ay.canUseAnimatedAvatar(t),
        {
            pendingAvatar: r,
            pendingThemeColors: a,
            tryItOutThemeColors: o,
            tryItOutAvatar: u,
            tryItOutBanner: d,
        } = (0, O.cf)([SH.A], () => {
            let e = SH.A.getPendingChanges(),
                t = SH.A.getErrors(),
                i = SH.A.getTryItOutChanges();
            return { ...e, ...i, errors: t };
        }),
        { preset: c, onShuffle: m } = (function () {
            let e = (0, O.bG)([iK.A], () => iK.A.useReducedMotion),
                [t, i] = (0, f.useState)(xC()),
                {
                    banner: n,
                    themeColors: s,
                    avatarDecorationSkuId: l,
                    displayNameStyles: r,
                } = (0, f.useMemo)(() => {
                    let i = x_(t);
                    return {
                        banner: i.getBannerSrc(e),
                        themeColors: i.themeColors,
                        avatarDecorationSkuId: i.avatarDecorationSkuId,
                        displayNameStyles: i.displayNameStyles,
                    };
                }, [t, e]),
                a = (0, O.bG)([xS.A], () => {
                    let e = xS.A.getProduct(l);
                    return (0, xT.T)(e?.items[0]) ? e.items[0] : null;
                });
            (0, f.useEffect)(() => {
                (0, xx.w5)({ banner: n, themeColors: s, avatarDecoration: a, displayNameStyles: r });
            }, [n, s, a, r]);
            let o = (0, f.useCallback)(() => {
                let e = xC(t);
                i(e), Y.default.track(q.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: e });
            }, [t]);
            return { preset: t, onShuffle: o };
        })(),
        A = f.useRef(null);
    xD(A, nb._F.TRY_IT_OUT);
    let { analyticsLocations: h, sourceAnalyticsLocations: E } = (0, nG.Ay)(eM.A.USER_SETTINGS_TRY_OUT_PREMIUM),
        S = (e) => {
            e &&
                (d?.startsWith("https:") === !0
                    ? fetch(d)
                          .then((e) => e.blob())
                          .then((e) => (0, xR.We)(e))
                          .then((e) => {
                              (0, Tm.p)({ avatar: u, themeColors: o, banner: e });
                          })
                          .catch(() => {
                              (0, Tm.p)({ avatar: u, themeColors: o });
                          })
                    : null != d
                      ? (0, Tm.p)({ avatar: u, themeColors: o, banner: d })
                      : (0, Tm.p)({ avatar: u, themeColors: o }),
                Y.default.track(q.HAw.TRY_IT_OUT_PRESET_SELECTED, { preset: c }));
        };
    f.useEffect(() => {
        i &&
            Y.default.track(q.HAw.PREMIUM_UPSELL_VIEWED, {
                type: sp.e.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: q.liQ.USER_SETTINGS },
                location_stack: E,
            });
    }, [E, t, i]);
    let T = (0, xE.V)()?.subscription_trial?.sku_id === sp.pe.TIER_2,
        x = (0, xh.O)(),
        N = (0, xj.U9)(x, sp.pe.TIER_2);
    return n
        ? (0, p.jsx)(nG.f5, {
              value: h,
              children: (0, p.jsxs)(cs.A, {
                  ref: A,
                  className: xM.MT,
                  type: cs.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, p.jsx)(S3, {
                          stickyPreview: !1,
                          layoutClassName: xM.th,
                          profilePreviewTitle: (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsx)(oW.t, { size: "md", color: "currentColor", className: xM.PC }),
                                  g.intl.string(g.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, p.jsxs)(p.Fragment, {
                              children: [(0, p.jsx)(xy, { preset: c, onShuffle: m }), (0, p.jsx)(xU, { user: t })],
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
                                              className: xM.h_,
                                              variant: "text-sm/normal",
                                              children: g.intl.string(g.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, p.jsx)(TK, {
                                      className: xM.fz,
                                      user: t,
                                      pendingAvatarSrc: (0, S4.V7)({ userId: t.id, image: u ?? r }),
                                      pendingColors: o ?? a,
                                      onThemeColorsChange: xx.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, p.jsx)(Tb, {
                                      className: xM.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != d,
                                      onBannerChange: xx.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !l &&
                                      (0, p.jsx)(Tx, {
                                          className: xM.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: xx.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: g.intl.string(g.t["7z0D1c"]),
                                          sectionTitle: g.intl.string(g.t.vtFfPX),
                                      }),
                                  (0, p.jsx)(Tf, { user: t, className: xM.fz }),
                                  !T &&
                                      (0, p.jsx)(V.E, {
                                          variant: "text-sm/normal",
                                          children: g.intl.string(g.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !T &&
                          (0, p.jsx)(xg.d, {
                              onSubscribeModalClose: S,
                              className: xM.Kv,
                              showUpsell: !0,
                              text: g.intl.format(g.t.TmfgI2, {
                                  onClick: () => {
                                      (0, xA.K)({ onSubscribeFinish: S });
                                  },
                              }),
                              button: s
                                  ? g.intl.string(g.t.AfRWI8)
                                  : N
                                    ? g.intl.formatToPlainString(g.t.bkQ4bH, { percent: x?.discount.amount })
                                    : g.intl.string(g.t.pj0XBN),
                              position: "inline",
                          }),
                      T &&
                          (0, p.jsxs)("div", {
                              children: [
                                  (0, p.jsx)("div", { className: xM.BU }),
                                  (0, p.jsx)(xO.Ay, {
                                      type: sp.e.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                      subscriptionTier: sp.pe.TIER_2,
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : null;
}
var xk = i(814390),
    xw = i(909536),
    xB = i(843282),
    xF = i(145497),
    xz = i(685073),
    xY = i(534400),
    xX = i(581781),
    xH = i(743981),
    xK = i(51358);
let xW = (0, sT.Ld)(),
    xZ = f.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: i, onChange: n } = e,
            s = f.useMemo(() => new Map(t.map((e) => [e.id, e])), [t]),
            l = (0, O.bG)([t3.default], () => (0, xz.Zo)(t3.default.getCurrentUser()?.primaryGuild).guildId),
            r = void 0 !== i ? i : l,
            a = f.useMemo(
                () => t.reduce((e, t) => (t.profile?.tag != null && e.push({ label: t.name, value: t.id }), e), []),
                [t],
            ),
            o = f.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = s.get(e.value);
                    if (null == t) return null;
                    let i = t.profile?.tag;
                    return null == i
                        ? null
                        : (0, p.jsx)(xX.A, {
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
            u = f.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = s.get(e.value);
                    return null == t || null == t.profile?.tag
                        ? null
                        : (0, p.jsx)(xF.j, {
                              guildId: t.id,
                              guildName: t.name,
                              guildIcon: t.icon,
                              iconSize: 32,
                              animate: !1,
                          });
                },
                [s],
            ),
            d = f.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = s.get(e.value);
                    if (null == t) return null;
                    let i = t.profile?.tag;
                    return null == i
                        ? null
                        : (0, p.jsx)(xY.o9, {
                              guildId: t.id,
                              guildTag: i,
                              guildBadge: t.profile?.badge ?? void 0,
                              badgeSize: xH.Sl.SIZE_16,
                              textColor: "interactive-text-default",
                              textVariant: "text-sm/semibold",
                          });
                },
                [s],
            ),
            c = f.useCallback(
                (e) => {
                    let t = e[0];
                    return null == t ? null : (0, p.jsx)(p.Fragment, { children: o(t) });
                },
                [o],
            ),
            m = f.useCallback(
                (e) => {
                    n?.(e);
                },
                [n],
            ),
            A = f.useCallback((e) => e === r, [r]),
            h = f.useCallback((e) => e, []),
            E = f.useCallback(() => {
                n?.(null);
            }, [n]),
            S = f.useRef(null);
        return (
            xD(S, nb._F.GUILD_TAG),
            (0, p.jsxs)(oQ.A, {
                title: g.intl.string(g.t.Pdd1nd),
                titleId: xW,
                ref: S,
                children: [
                    (0, p.jsx)(V.E, {
                        className: xK.VA,
                        variant: "text-sm/normal",
                        children: g.intl.string(g.t.mlZ6Jx),
                    }),
                    (0, p.jsx)(xB.Pw, {
                        className: xK.Lt,
                        optionClassName: xK.S0,
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
var xq = i(318785),
    xQ = i(556729);
let xJ = (0, sT.Ld)();
function x$(e) {
    let t = (0, E9.L)(sp.PremiumTypes.TIER_2);
    return (0, p.jsxs)(oQ.A, {
        errors: e.errors,
        disabled: e.disabled,
        title: g.intl.string(g.t["9AjdkD"]),
        titleId: xJ,
        children: [
            (0, p.jsx)("div", {
                children: (0, p.jsx)(lL.k, {
                    "aria-labelledby": xJ,
                    placeholder: e.placeholder,
                    maxLength: q.zzC,
                    onChange: e.onGlobalNameChange,
                    value: e.pendingGlobalName ?? e.currentGlobalName ?? "",
                }),
            }),
            t && (0, p.jsx)(Tf, { user: e.user, className: xQ.F }),
        ],
    });
}
function x0(e) {
    let { legacyUsername: t, pendingLegacyUsernameDisabled: i } = e,
        n = c.m$.useSetting(),
        s = void 0 !== i ? i : n;
    return (0, p.jsx)(L.d, {
        label: g.intl.string(g.t["3cWDuO"]),
        description: s ? null : g.intl.formatToPlainString(g.t.aYhclf, { username: t }),
        checked: !s,
        onChange: (e) => {
            !e === n ? (0, SY._e)() : (0, Tm.p)({ legacyUsernameDisabled: !e });
        },
    });
}
function x1(e) {
    let { user: t, savedUserColor: i, pendingColor: n, setPendingAccentColor: s } = e,
        l = t.getAvatarURL(null, 80),
        r = (0, TU.r)(w.A.unsafe_rawColors.PRIMARY_530).hex(),
        a = (0, TM.rh)(l, r, !1),
        o = (0, TB.LX)(a[0]);
    return (0, p.jsx)(oQ.A, {
        title: g.intl.string(g.t["/X3fkf"]),
        children: (0, p.jsx)(TX, { onChange: (e) => s(e), color: n ?? i ?? o, suggestedColors: a, showEyeDropper: !0 }),
    });
}
var x2 = i(518477);
let x3 = () => {
    let e = (0, O.bG)([cA.default], () => cA.default.getId());
    return (0, p.jsx)(oQ.A, {
        title: g.intl.string(g.t.Jzj9q4),
        children: (0, p.jsx)(eh.$, {
            text: g.intl.string(g.t.Geikwq),
            onClick: () => {
                (0, SZ.openUserProfileModal)({
                    userId: e,
                    sourceAnalyticsLocations: [eM.A.USER_SETTINGS_USER_PROFILE],
                    hideRestrictedProfile: !0,
                    tabSection: x2.RP.WIDGETS,
                });
            },
            size: "sm",
        }),
    });
};
var x6 = i(594453);
function x4() {
    let e = (0, O.bG)([t3.default], () => {
            let e = t3.default.getCurrentUser();
            return tj()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e;
        }),
        t = (0, O.bG)([S7.A], () => S7.A.getUserProfile(e.id)),
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
        } = (0, O.cf)([SH.A], () => {
            let e = SH.A.getPendingChanges(),
                t = SH.A.getErrors();
            return { ...e, errors: t };
        }),
        m = (0, S4.V7)({ userId: e.id, image: i }),
        A = (0, Te.EC)(),
        h = o3.Ay.canUsePremiumProfileCustomization(e),
        E = (0, S0.z5)(i, e.avatar),
        S = (0, S0.Ac)(s, t?.banner),
        T = (0, TV.Ay)(e.id),
        x = T?.getLegacyUsername(),
        f = (c.global_name?.length ?? 0) > 0 ? c.global_name : (A?.nick ?? []),
        N = (c.bio?.length ?? 0) > 0 ? c.bio : (A?.bio ?? []),
        _ = (0, xq.b)();
    return (0, p.jsxs)("div", {
        className: x6.Q,
        children: [
            (0, p.jsx)(x$, {
                placeholder: e.username,
                errors: f,
                currentGlobalName: e.globalName,
                pendingGlobalName: n,
                onGlobalNameChange: (e) => (0, Tm.p)({ globalName: e }),
                user: e,
            }),
            (0, p.jsx)(
                TW,
                {
                    sectionTitle: g.intl.string(g.t["+T3RI/"]),
                    errors: c.pronouns,
                    onPronounsChange: (e) => (0, Tm.p)({ pronouns: e }),
                    pendingPronouns: r,
                    currentPronouns: t?.pronouns ?? "",
                },
                "pronouns",
            ),
            (0, p.jsx)(x3, {}),
            (0, p.jsx)(
                Tx,
                {
                    onAvatarChange: (e) => {
                        (0, Tm.p)({ avatar: e }), (0, S0.WU)(null == e ? "remove" : "set");
                    },
                    showRemoveAvatarButton: E,
                    errors: c.avatar,
                    sectionTitle: g.intl.string(g.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, p.jsx)(Th, { user: e, sectionTitle: g.intl.string(g.t["7v0T9P"]) }, "decoration"),
            (0, p.jsx)(TI, { user: e }),
            (0, p.jsx)(Tj, { user: e, sectionTitle: g.intl.string(g.t.wR5wOo) }, "effect"),
            (0, p.jsx)(TD, { user: e, sectionTitle: g.intl.string(g.t.GWrZOd) }, "frame"),
            h
                ? (0, p.jsxs)(p.Fragment, {
                      children: [
                          (0, p.jsx)(
                              Tb,
                              {
                                  showRemoveBannerButton: S,
                                  errors: c.banner,
                                  onBannerChange: (e) => (0, Tm.p)({ banner: e }),
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, p.jsx)(TK, {
                              user: e,
                              pendingAvatarSrc: m,
                              pendingColors: o,
                              onThemeColorsChange: (e) => (0, Tm.p)({ themeColors: e }),
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, p.jsx)(
                      x1,
                      {
                          user: e,
                          savedUserColor: t?.accentColor,
                          pendingColor: a,
                          setPendingAccentColor: (e) => (0, Tm.p)({ accentColor: e }),
                      },
                      "color",
                  ),
            (0, p.jsx)(
                Tu,
                {
                    sectionTitle: g.intl.string(g.t.ZzAR2Y),
                    errors: N,
                    onBioChange: (e) => (0, Tm.p)({ bio: e }),
                    pendingBio: l,
                    currentBio: t?.bio ?? "",
                },
                "bio",
            ),
            _.length > 0 &&
                (0, p.jsx)(xZ, {
                    availablePrimaryGuilds: _,
                    pendingPrimaryGuildId: d,
                    onChange: (e) => (0, Tm.p)({ primaryGuildId: e }),
                }),
            null != x && (0, p.jsx)(x0, { legacyUsername: x, pendingLegacyUsernameDisabled: u }, "legacy_username"),
        ],
    });
}
function x7() {
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
var x5 = i(743539);
function x8() {
    let e = (0, O.bG)([t3.default], () => {
            let e = t3.default.getCurrentUser();
            return tj()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e;
        }),
        t = (0, O.bG)([e_.A], () => e_.A.hidePersonalInformation),
        {
            pendingBio: i,
            pendingAvatar: n,
            pendingNameplate: s,
            showNotice: l,
            ...r
        } = (0, O.cf)([SH.A], () => ({ ...SH.A.getPendingChanges(), showNotice: SH.A.showNotice() })),
        a = (0, S4.V7)({ userId: e.id, image: n }),
        o = (0, S0.lw)({ pendingValue: s, userValue: e?.collectibles?.nameplate }),
        u = (0, xk.A)() && null != i ? xc.Ay.parse(void 0, i).content : i,
        d = o3.Ay.canUsePremiumProfileCustomization(e),
        c = (0, xw.St)("edit-profile-upsell"),
        { analyticsLocations: m } = (0, nG.Ay)(eM.A.USER_SETTINGS_USER_PROFILE);
    f.useEffect(() => () => n3.h.wait(SY.IM), []);
    let [A, h] = f.useState(!1),
        E = !d,
        S = f.useRef(null);
    return t
        ? (0, p.jsx)(u1.A, {})
        : (0, p.jsxs)(nG.f5, {
              value: m,
              children: [
                  (0, p.jsx)(xd, {}),
                  (0, p.jsx)(S3, {
                      profilePreview: (0, p.jsx)(S6.A, {
                          user: e,
                          canUsePremiumCustomization: d,
                          onUpsellClick: x7,
                          pendingBio: u,
                          ...r,
                          pendingAvatar: a,
                          containerClassName: x5.ti,
                      }),
                      nameplatePreview: (0, p.jsx)(S$.A, {
                          user: e,
                          nameplate: o,
                          ...r,
                          className: null == o ? x5.tJ : void 0,
                          isHighlighted: !0,
                      }),
                      children: (0, p.jsx)(x4, {}),
                  }),
                  (0, p.jsx)(xt.L, {
                      innerRef: S,
                      onChange: (e) => h(e),
                      threshold: 0.25,
                      active: E,
                      children: (0, p.jsx)("div", {
                          ref: S,
                          children: (0, p.jsx)(xV, { user: e, shouldShow: E, isVisible: A }),
                      }),
                  }),
                  E &&
                      !l &&
                      (0, p.jsx)(xg.d, {
                          className: x5.EL,
                          showUpsell: !A,
                          text: g.intl.format(g.t.TmfgI2, { onClick: () => (0, xA.K)({}) }),
                          textVariant: "heading-md/medium",
                          useUpdatedStyling: !0,
                          leadingAction: c
                              ? (0, p.jsx)(xm.l, { size: "md", location: eM.A.PREMIUM_WISHLIST_EDIT_PROFILE_UPSELL })
                              : void 0,
                          button: (0, p.jsx)("div", {
                              className: x5.Xl,
                              children: (0, p.jsx)(eh.$, {
                                  variant: "overlay-primary",
                                  onClick: () => {
                                      Y.default.track(q.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                                          cta_variant: "floating_action_button",
                                      }),
                                          S?.current?.scrollIntoView({ behavior: "smooth" });
                                  },
                                  text: g.intl.string(g.t.uw9zI7),
                                  icon: oW.t,
                              }),
                          }),
                      }),
              ],
          });
}
var x9 = i(625494),
    pe = i(454078);
let pt = { [nb.Eq.USER_PROFILE]: "main_profile_tab", [nb.Eq.GUILD]: "guild_profile_tab" },
    pi = (0, a.E2)(u.X.PROFILE_SETTING, {
        Component: function () {
            let e = (0, O.bG)([lw.A, K.Ay, SH.A], () => {
                    let e = SH.A.selectedGuildId ?? lw.A.getGuildId();
                    return null == e || SH._.has(e) ? K.Ay.getFlattenedGuildIds().find((e) => !SH._.has(e)) : e;
                }),
                t = (0, O.bG)([H.A], () => H.A.getGuild(e)),
                i = (0, O.bG)([SH.A], () => SH.A.showNotice()),
                n = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
                s = xL.A.useField("subsection");
            return (
                f.useEffect(() => {
                    (0, rp._)(pt[s]);
                }, [s]),
                f.useEffect(() => {
                    null != n && t?.id != null && (0, T8.A)(n.id, n.getAvatarURL(t?.id, 80), { guildId: t?.id });
                }, [t?.id, n]),
                (0, p.jsx)(xe, {
                    children: (0, p.jsxs)(d6.F, {
                        component: (0, p.jsx)(F.A, {
                            children: (0, p.jsx)(eA.D, {
                                variant: "heading-xl/normal",
                                children: g.intl.string(g.t["vi7f+q"]),
                            }),
                        }),
                        children: [
                            (0, p.jsxs)(Sq.V, {
                                className: pe.$H,
                                type: "top",
                                look: "brand",
                                selectedItem: s,
                                onItemSelect: function (e) {
                                    if (s !== e) {
                                        if (i) {
                                            (0, rf.fO)({ duration: 300, intensity: SQ.n3 }),
                                                x9._.dispatch(q.jej.EMPHASIZE_NOTICE);
                                            return;
                                        }
                                        e === nb.Eq.GUILD && null != t && (0, SJ.V2)(t.id),
                                            xL.A.setState({ subsection: e });
                                    }
                                },
                                children: [
                                    (0, p.jsx)(
                                        Sq.V.Item,
                                        {
                                            className: pe.YU,
                                            id: nb.Eq.USER_PROFILE,
                                            children: g.intl.string(g.t["2p07FR"]),
                                        },
                                        nb.Eq.USER_PROFILE,
                                    ),
                                    (0, p.jsx)(
                                        Sq.V.Item,
                                        {
                                            className: ew()(pe.YU, pe.HY),
                                            "aria-label": g.intl.string(g.t.kPHroX),
                                            id: nb.Eq.GUILD,
                                            children: g.intl.string(g.t.kPHroX),
                                        },
                                        nb.Eq.GUILD,
                                    ),
                                ],
                            }),
                            s === nb.Eq.GUILD
                                ? (0, p.jsx)(T5, {
                                      selectedGuild: t,
                                      onGuildChange: function (e) {
                                          if (i) {
                                              (0, rf.fO)({ duration: 300, intensity: SQ.n3 }),
                                                  x9._.dispatch(q.jej.EMPHASIZE_NOTICE);
                                              return;
                                          }
                                          null != e && (0, SJ.JJ)(e.id);
                                      },
                                  })
                                : (0, p.jsx)(x8, {}),
                        ],
                    }),
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
    pn = (0, a.zZ)(u.X.PROFILE_CATEGORY, { buildLayout: () => [pi] });
var ps = i(294666);
let pl = () => {
        let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
            { avatarSrc: t, avatarDecorationSrc: i } = (0, SW.A)({ userId: e?.id, size: iH._3.SIZE_48 });
        return null == e
            ? null
            : (0, p.jsxs)("div", {
                  className: ps.a5,
                  children: [
                      (0, p.jsx)(iX.eu, {
                          src: t,
                          avatarDecoration: i,
                          size: iH._3.SIZE_48,
                          "aria-label": g.intl.string(g.t.lqaIxI),
                      }),
                      (0, p.jsxs)("div", {
                          className: ps.FS,
                          children: [
                              (0, p.jsx)(V.E, {
                                  color: "text-strong",
                                  variant: "text-md/medium",
                                  lineClamp: 1,
                                  children: e.globalName ?? e.username,
                              }),
                              (0, p.jsxs)("div", {
                                  className: ps.Fk,
                                  children: [
                                      (0, p.jsx)(V.E, {
                                          variant: "text-sm/normal",
                                          color: "currentColor",
                                          lineClamp: 1,
                                          children: g.intl.string(g.t.Ip9nBS),
                                      }),
                                      (0, p.jsx)(o2.R, { size: "xxs", color: "currentColor" }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              });
    },
    pr = (0, a.t_)(u.X.PROFILE_PANEL, {
        useTitle: () => g.intl.string(g.t["vi7f+q"]),
        notice: { stores: [SH.A], element: SX.A },
        initialize: () => () =>
            n3.h.wait(() => {
                (0, SY.F7)();
            }),
        buildLayout: () => [pn],
    }),
    pa = (0, a.i4)(u.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["vi7f+q"]),
        icon: pu,
        StronglyDiscouragedCustomComponent: pl,
        usePredicate: () => !(0, SK.X)("user_settings_sidebar"),
        buildLayout: () => [pr],
    }),
    po = (0, a.i4)(u.X.PROFILE_SIDEBAR_ITEM_WYSIWYG, {
        useTitle: () => g.intl.string(g.t["vi7f+q"]),
        icon: pu,
        StronglyDiscouragedCustomComponent: pl,
        usePredicate: () => (0, SK.X)("user_settings_sidebar"),
        onClick: () => {
            let e = cA.default.getId();
            (0, SZ.openUserProfileModal)({ userId: e });
        },
        buildLayout: () => [],
    });
function pu() {
    let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: i } = (0, SW.A)({ userId: e?.id, size: iH._3.SIZE_48 });
    return (0, p.jsx)(iX.eu, { src: t, avatarDecoration: i, size: iH._3.SIZE_20, "aria-hidden": !0 });
}
let pd = (0, a.WI)(u.X.PROFILE_SECTION, { hoisted: !0, buildLayout: () => [pa, po] });
var pc = i(98207),
    pg = (i(204925), i(818348));
let pm = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0;
    (0, _.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([i.e("40933"), i.e("19623"), i.e("21007")]).then(i.bind(i, 888363));
            return (i) => (0, p.jsx)(t, { claimRequired: e, ...i });
        },
        { onCloseRequest: e ? pg.tE : null, onCloseCallback: t },
    );
};
var pA = i(940856),
    ph = i(36149),
    pE = i(207560);
function pS(e) {
    let t = (0, pE.fk)(),
        i = (0, ph.b8)(),
        n = (0, ph.yM)(),
        s = (0, ph.Y2)();
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
var pT = i(516761);
function px() {
    let e = g.intl.string(g.t.XxRj7f);
    return (0, p.jsxs)(V.E, {
        variant: "text-md/medium",
        children: [
            `${e} \u{2022} `,
            g.intl.format(pT.default.WM5adV, {
                handleOnHelpUrlHook: () => window.open(ta.A.getArticleURL(q.MVz.TIGGER_PAWTECT_LEARN_MORE), "_blank"),
            }),
        ],
    });
}
let pp = (0, a.Tf)(u.X.ACCOUNT_INFO_AGE_GROUP_EDIT_SETTING, {
        usePredicate: () => pS("edit"),
        useTitle: () => g.intl.string(g.t["/52UYy"]),
        useVariant: () => "secondary",
        useTrailingContent: () => ({ type: eN._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: px }),
        useLabel: () => g.intl.string(g.t.bt75uw),
        onClick: function () {
            (0, _.openModalLazy)(async () => {
                let { default: e } = await i.e("45361").then(i.bind(i, 151080));
                return (t) => (0, p.jsx)(e, { ...t });
            });
        },
    }),
    pf = (0, a.E2)(u.X.ACCOUNT_INFO_AGE_GROUP_INFO_SETTING, {
        usePredicate: () => pS("info"),
        useSearchTerms: () => [g.intl.string(g.t["/52UYy"])],
        Component: function () {
            return (0, p.jsx)(sy.D, {
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
                                onClick: pg.tE,
                                text: g.intl.string(g.t.bt75uw),
                                "aria-hidden": !0,
                            }),
                        }),
                    ],
                }),
            });
        },
    });
var pN = i(139716),
    p_ = i(847599);
function pI() {
    return (0, ph.yM)() ? g.intl.string(g.t.sK0dmH) : g.intl.string(g.t.lKDPGA);
}
let pC = (0, a.Tf)(u.X.ACCOUNT_INFO_AGE_GROUP_VERIFY_SETTING, {
        usePredicate: () => pS("verify"),
        useTitle: () => g.intl.string(g.t["/52UYy"]),
        useVariant: () => "secondary",
        useTrailingContent: () => ({ type: eN._1.TEXT, useText: pI }),
        useLabel: function () {
            return (0, ph.yM)() ? g.intl.string(g.t["9KiIz6"]) : g.intl.string(g.t.DVywUB);
        },
        onClick: () => pN.A.showAgeVerificationGetStartedModal({ entryPoint: p_.q1.ACCOUNT_AGE_GROUP }),
    }),
    pb = (0, a.Tf)(u.X.ACCOUNT_INFO_CLAIM_ACCOUNT_SETTING, {
        usePredicate: () => {
            let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser());
            return null != e && !e.isClaimed();
        },
        useTitle: () => g.intl.string(g.t.tlZllC),
        useVariant: () => "secondary",
        useTrailingContent: () => ({ type: eN._1.TEXT, useText: () => g.intl.string(g.t.qxk9zo) }),
        useLabel: () => g.intl.string(g.t.BleMPB),
        onClick: () => pm(),
    });
function pv(e) {
    return `${"*".repeat(e.length - 4)}${e.slice(-4)}`;
}
function py(e) {
    let [t, i] = e.split("@");
    return `${"*".repeat(t.length)}@${i}`;
}
function pj(e) {
    let { text: t, censor: i, revealLabel: n, hideLabel: s, redesign: l = !1 } = e,
        [r, a] = f.useState(!1),
        o = r ? t : i(t);
    return (0, p.jsxs)(R.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        justify: l ? "end" : "start",
        children: [
            l ? (0, p.jsx)(V.E, { variant: "text-md/medium", children: o }) : o,
            (0, p.jsx)(B.Q, {
                variant: "primary",
                textVariant: l ? "text-md/medium" : "text-sm/medium",
                "aria-label": r ? s : n,
                onClick: () => a(!r),
                text: r ? g.intl.string(g.t.fgq1gs) : g.intl.string(g.t.dcztdU),
            }),
        ],
    });
}
function pO() {
    let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.email);
    return null == e
        ? (0, p.jsx)(V.E, { variant: "text-md/medium", children: g.intl.string(g.t["8SfTN/"]) })
        : (0, p.jsx)(pj, {
              text: e,
              censor: py,
              revealLabel: g.intl.string(g.t["Zvx+yV"]),
              hideLabel: g.intl.string(g.t.nqTD4d),
              redesign: !0,
          });
}
let pR = (0, a.Tf)(u.X.ACCOUNT_INFO_EMAIL_SETTING, {
    usePredicate: () => (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => g.intl.string(g.t.tlZllC),
    useVariant: () => "secondary",
    useTrailingContent: () => ({ type: eN._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: pO }),
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
            let { default: e } = await Promise.all([i.e("97570"), i.e("20577"), i.e("65861")]).then(i.bind(i, 97060));
            return (t) => (0, p.jsx)(e, { ...t });
        });
    },
});
var pL = i(557722),
    pD = i(53516);
function pP() {
    let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
        t = e?.phone ?? null;
    return null == e || null == t
        ? (0, p.jsx)(V.E, { variant: "text-md/medium", children: g.intl.string(g.t.I5kDqj) })
        : (0, p.jsx)(R.B, {
              direction: "horizontal",
              align: "center",
              justify: "end",
              gap: "md",
              children: (0, p.jsx)(pj, {
                  text: t,
                  censor: pv,
                  revealLabel: g.intl.string(g.t.eY3xlT),
                  hideLabel: g.intl.string(g.t["jllbv+"]),
                  redesign: !0,
              }),
          });
}
let pG = (0, a.Tf)(u.X.ACCOUNT_INFO_PHONE_SETTING, {
    usePredicate: () => (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => g.intl.string(g.t.kerONq),
    useAriaLabel: function () {
        return null == (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.phone)
            ? g.intl.string(g.t["SfUuE+"])
            : g.intl.string(g.t.YDabSe);
    },
    useVariant: () => "secondary",
    useTrailingContent: () => ({ type: eN._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: pP }),
    useLabel: function () {
        return null == (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.phone)
            ? g.intl.string(g.t.OYkgVk)
            : g.intl.string(g.t.bt75uw);
    },
    onClick: function () {
        null == t3.default.getCurrentUser()?.phone
            ? (0, _.openModalLazy)(
                  async () => {
                      let { default: e } = await Promise.all([
                          i.e("96768"),
                          i.e("4782"),
                          i.e("89545"),
                          i.e("11493"),
                          i.e("84704"),
                          i.e("86197"),
                      ]).then(i.bind(i, 615715));
                      return (t) => (0, p.jsx)(e, { reason: pL.d.USER_SETTINGS_UPDATE, ...t });
                  },
                  { modalKey: pD.V },
              )
            : (0, _.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([i.e("25866"), i.e("63314")]).then(i.bind(i, 660740));
                  return (t) => (0, p.jsx)(e, { ...t });
              });
    },
});
function pU() {
    let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser());
    return null != e && !e.isClaimed();
}
function pM() {
    let e = (0, Te.EC)(),
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
                    children: (0, p.jsx)(lC.E, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: w.A.colors.STATUS_WARNING.css,
                    }),
                }),
        ],
    });
}
let pV = (0, a.Tf)(u.X.ACCOUNT_INFO_USERNAME_SETTING, {
        useTitle: () => g.intl.string(g.t.qqhR3L),
        useTrailingContent: () => ({ type: eN._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: pM }),
        useLabel: () => g.intl.string(g.t.bt75uw),
        useAriaLabel: () => g.intl.string(g.t.JECa91),
        useSubtitle: () => (pU() ? g.intl.string(g.t["7Ngnyr"]) : void 0),
        useVariant: () => "secondary",
        useDisabled: pU,
        onClick: function () {
            (0, _.openModalLazy)(async () => {
                let { default: e } = await Promise.all([i.e("38408"), i.e("20429"), i.e("20969")]).then(
                    i.bind(i, 667792),
                );
                return (t) => (0, p.jsx)(e, { ...t });
            });
        },
    }),
    pk = (0, a.zZ)(u.X.ACCOUNT_INFO_CATEGORY, {
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
                            type: eN.lT.INLINE_NOTICE,
                            noticeType: "warning",
                            useTitle: () => g.intl.string(g.t.tuGzBT),
                            useText: () => g.intl.string(g.t.NAzplE),
                            button: { useText: () => g.intl.string(g.t.lm1UKt), onClick: () => (0, pA.S)(e) },
                        }
                  : {
                        type: eN.lT.INLINE_NOTICE,
                        noticeType: "critical",
                        useTitle: () => g.intl.string(g.t["/3qnL/"]),
                        useText: () => g.intl.string(g.t.qKs3vg),
                        button: { useText: () => g.intl.string(g.t["7psymi"]), onClick: () => pm() },
                    };
        },
        buildLayout: () => [pV, pb, pR, pG, pC, pp, pf],
    });
var pw = i(398177);
let pB = (0, a.Tf)(u.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
    useTitle: () => g.intl.string(g.t["CIGa+7"]),
    useLabel: () => g.intl.string(g.t.bt75uw),
    useAriaLabel: () => g.intl.string(g.t["FRep5/"]),
    useVariant: () => "secondary",
    onClick: () => {
        (0, _.openModal)((e) => (0, p.jsx)(pw.default, { ...e, onSuccess: () => e.onClose() }));
    },
});
var pF = i(200921);
let pz = [];
function pY() {
    pz = [];
}
class pX extends O.Ay.Store {
    static displayName = "AuthSessionsStore";
    getSessions() {
        return pz;
    }
}
let pH = new pX(n3.h, {
    LOGOUT: pY,
    LOGIN_SUCCESS: pY,
    FETCH_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessions: t } = e;
        pz = t.map((e) => ({ ...e, approx_last_used_time: new Date(e.approx_last_used_time) }));
    },
    LOGOUT_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessionIdHashes: t } = e,
            i = [...pz],
            n = !1;
        for (let e of t) {
            let t = i.findIndex((t) => t.id_hash === e);
            t >= 0 && (i.splice(t, 1), (n = !0));
        }
        if (!n) return !1;
        pz = i;
    },
});
function pK() {
    let e = (0, O.cf)([pH], () => pH.getSessions());
    return f.useMemo(() => {
        let t = [...e],
            i = null,
            n = cA.default.getAuthSessionIdHash();
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
function pW(e) {
    return (Date.now() - e.valueOf()) / 1e3 / 60 / 60 < 1 ? g.intl.string(g.t.TXCmfL) : ry()(e).fromNow();
}
var pZ = i(176524),
    pq = i(646270),
    pQ = i(738678),
    pJ = i(490173);
function p$(e) {
    let { icon: t, label: i, subLabel: n, description: s, children: l, muted: r } = e;
    return (0, p.jsxs)(R.B, {
        direction: "horizontal",
        align: "center",
        gap: "sm",
        role: "listitem",
        children: [
            (0, p.jsx)(pZ.A, { Icon: t, color: r ? w.A.colors.ICON_MUTED : "currentColor" }),
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
function p0(e) {
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
                            return { text: g.intl.string(g.t.cDHCNY), icon: e2.k };
                        case "ios":
                        case "android":
                            return { text: e, icon: pq.u };
                        case "horizon os":
                            return { text: e, icon: pQ.G };
                        default:
                            return { text: e, icon: e2.k };
                    }
                })(e.client_info?.os);
            return { location: i, platform: n, os: s, Icon: l, lastActive: t ? null : pW(e.approx_last_used_time) };
        })(t, i),
        o = [n, a].filter(t6.Vq);
    return (0, p.jsx)(p$, {
        icon: r,
        label: l,
        subLabel: s,
        description: o.join(" \xb7 "),
        children:
            !i &&
            (0, p.jsx)(M.D, {
                className: pJ.X,
                onClick: () => (0, pF.U0)(t.id_hash),
                "aria-label": g.intl.string(g.t.E4MJNt),
                children: (0, p.jsx)(gd.P, { size: "md", color: "currentColor" }),
            }),
    });
}
function p1(e) {
    let { title: t, children: i } = e,
        n = f.useId();
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
let p2 = (0, a.E2)(u.X.SESSIONS_CURRENT_SESSION_SETTING, {
        Component: function () {
            let { currentSession: e } = pK();
            return null == e
                ? (0, p.jsx)(u6.y, {})
                : (0, p.jsx)(p1, {
                      title: g.intl.string(g.t.LLS19o),
                      children: (0, p.jsx)(p0, { session: e, current: !0 }),
                  });
        },
        useSearchTerms: () => [],
    }),
    p3 = (0, a.E2)(u.X.SESSIONS_LOGOUT_ALL_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = pK();
            return (0, p.jsx)(sy.D, {
                label: g.intl.string(g.t.Vij32M),
                description: g.intl.string(g.t.OTXyaf),
                children: (0, p.jsx)(eh.$, {
                    onClick: () => (0, pF.U0)(e.map((e) => e.id_hash)),
                    variant: "critical-primary",
                    size: "sm",
                    text: g.intl.string(g.t.cLmmeY),
                }),
            });
        },
        useSearchTerms: () => [g.intl.string(g.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = pK();
            return e.length > 0;
        },
    });
var p6 = i(766928);
function p4() {
    return (0, p.jsx)(p$, {
        icon: p6.W,
        label: g.intl.string(g.t.iUa0sn),
        description: g.intl.format(g.t["044+8i"], {
            onClick: () =>
                (0, ey.openUserSettings)(u.X.ACCOUNT_PANEL, { analyticsLocations: [eM.A.USER_SETTINGS_SESSIONS] }),
        }),
        muted: !0,
    });
}
let p7 = (0, a.E2)(u.X.SESSIONS_OTHER_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = pK(),
                t = (0, O.bG)([t3.default], () => t3.default.getCurrentUser());
            return (0, p.jsxs)(p1, {
                title: g.intl.string(g.t.xx1MWc),
                children: [
                    e.map((e) => (0, p.jsx)(p0, { session: e }, e.id_hash)),
                    t?.mfaEnabled ? null : (0, p.jsx)(p4, {}),
                ],
            });
        },
        useSearchTerms: () => [g.intl.string(g.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = pK(),
                t = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.mfaEnabled);
            return e.length > 0 || !t;
        },
    }),
    p5 = (0, a.zZ)(u.X.SESSIONS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.mEndXM),
        useSubtitle: () => g.intl.string(g.t.b7ZpTM),
        initialize: () => {
            (0, pF.GY)();
        },
        buildLayout: () => [p2, p7, p3],
        useSearchTerms: () => [
            g.intl.string(g.t["+1h0k/"]),
            g.intl.string(g.t.LLS19o),
            g.intl.string(g.t.xx1MWc),
            g.intl.string(g.t.lSWsrd),
        ],
    }),
    p8 = (0, a.t_)(u.X.SESSIONS_PANEL, {
        useTitle: () => g.intl.string(g.t.mEndXM),
        useObscuredNotice: u1.L,
        buildLayout: () => [p5],
    }),
    p9 = (0, a.t0)(u.X.ACCOUNT_SESSIONS_NESTED_PANEL, {
        buildLayout: () => [p8],
        initialize: () => {
            (0, pF.GY)();
        },
        useTrailingDecoration: () => ({
            type: eN.xn.TEXT,
            useText: () => {
                let { currentSession: e, otherSessions: t } = pK(),
                    i = t.length + +(null != e);
                return i > 0 ? g.intl.formatToPlainString(g.t.G7zwOk, { count: i }) : g.intl.string(g.t.MKDeyL);
            },
        }),
    });
var fe = i(464477);
function ft(e) {
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
function fi() {
    return (0, uk.bG)([t3.default], () => {
        let e = t3.default.getCurrentUser();
        return null != e && e.mfaEnabled;
    });
}
var fn =
    (((r = {}).AVAILABLE = "available"),
    (r.UNAVAILABLE_NO_CRYPTO = "unavailable_no_crypto"),
    (r.UNAVAILABLE_UNVERIFIED = "unavailable_unverified"),
    r);
function fs() {
    let e = (0, uk.bG)([t3.default], () => t3.default.getCurrentUser()?.verified);
    return fe.K7 ? (!1 === e ? "unavailable_unverified" : "available") : "unavailable_no_crypto";
}
function fl() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (0, uk.bG)([H.A, TQ.A, t3.default], () =>
        t3.default.getCurrentUser()?.hasAnyStaffLevel()
            ? e
                ? g.intl.string(g.t.hxf9fX)
                : g.intl.string(g.t["3iKih7"])
            : H.A.getGuildsArray().some(
                    (e) =>
                        e.features.has(q.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) &&
                        TQ.A.can(q.xBc.ADMINISTRATOR, e),
                )
              ? e
                  ? g.intl.string(g.t.OYTCUh)
                  : g.intl.string(g.t.HC8uSZ)
              : null,
    );
}
var fr = i(466034);
let fa = (0, a.Tf)(u.X.AUTHENTICATOR_APP_DISABLE_BUTTON, {
        useTitle: () => g.intl.string(g.t.lQsY7B),
        useSubtitle: () => fl(!0),
        useDisabled: () => null !== fl(!0),
        useLabel: () => g.intl.string(g.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => {
            let e = (0, O.bG)([cA.default], () => cA.default.hasTOTPEnabled()),
                t = fs() === fn.AVAILABLE;
            return e && t;
        },
        onClick: () =>
            void (0, n9.A)({
                title: g.intl.string(g.t["D+aE7g"]),
                subtitle: g.intl.string(g.t.EA4ZEk),
                variant: "critical",
                confirmText: g.intl.string(g.t.N86XcP),
                onConfirm: () => pc.A.disable(),
            }),
    }),
    fo = (0, a.zZ)(u.X.AUTHENTICATOR_APP_CATEGORY, {
        useTitle: () => g.intl.string(g.t.RumMFo),
        useSubtitle: () => g.intl.string(g.t.iTbTo7),
        useHeaderDecoration: function () {
            let e = (0, O.bG)([cA.default], () => cA.default.hasTOTPEnabled()),
                t = fs() === fn.AVAILABLE;
            if (!e && t)
                return {
                    type: eN.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: eN.UV.BUTTON,
                            id: "mfa-setup-button",
                            text: g.intl.string(g.t.cTNUeD),
                            onClick: fr.Ay.enableMFA,
                        },
                    ],
                };
        },
        useInlineNotice: function () {
            switch (fs()) {
                case fn.UNAVAILABLE_NO_CRYPTO:
                    return { type: eN.lT.INLINE_NOTICE, noticeType: "info", useText: () => g.intl.string(g.t.PhHhsj) };
                case fn.UNAVAILABLE_UNVERIFIED:
                    return {
                        type: eN.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        useText: () => g.intl.string(g.t.uggF7o),
                    };
                case fn.AVAILABLE:
                    return;
            }
        },
        collapseOnEmpty: !1,
        buildLayout: () => [fa],
    });
var fu = i(670492),
    fd = i(32880),
    fc = i(663417),
    fg = i(658675),
    fm = i(900686);
function fA() {
    (0, _.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(i.bind(i, 662758));
        return (t) =>
            (0, p.jsx)(e, {
                ...t,
                handleSubmit: (e) =>
                    pc.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                        var t;
                        return (
                            (t = e),
                            void (0, _.openModalLazy)(
                                async () => {
                                    let { default: e } = await Promise.all([i.e("30464"), i.e("96179")]).then(
                                        i.bind(i, 518142),
                                    );
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
var fh = i(203082);
function fE(e) {
    return `${e.slice(0, 4)}-${e.slice(4)}`;
}
async function fS() {
    let e = fu.A.getVerificationKey();
    try {
        await pc.A.confirmViewBackupCodes(e, !0);
    } catch (e) {
        (0, Ej.P0)({
            message: e.body?.message ?? g.intl.string(g.t.F8FvUy),
            type: ER.Ck.FAILURE,
            id: "backup-code-regen-failed",
        });
    }
}
function fT(e) {
    let {
            code: { code: t, consumed: i },
        } = e,
        n = fE(t),
        s = f.useRef(null),
        l = (0, p.jsxs)(p.Fragment, {
            children: [(0, p.jsx)(fg.P, { checked: i }), (0, p.jsx)(V.E, { variant: "text-md/normal", children: n })],
        });
    return cx.p5
        ? (0, p.jsx)(M.D, {
              tag: "li",
              className: ew()(fh.aY, fh.vk),
              innerRef: s,
              onKeyDown: (e) => {
                  "c" === e.key &&
                      (e.metaKey || e.ctrlKey) &&
                      (e.preventDefault(), e.stopPropagation(), (0, cx.C)(n), s?.current?.focus());
              },
              onClick: () => {
                  (0, cx.C)(n),
                      (0, Ej.P0)({ message: g.intl.string(g.t.mGZ66D), type: ER.Ck.SUCCESS, id: "backup-code-copied" });
              },
              children: l,
          })
        : (0, p.jsx)("li", { className: fh.aY, children: l });
}
let fx = (0, a.zZ)(u.X.BACKUP_CODES_CATEGORY, {
        useTitle: () => g.intl.string(g.t.fC9qV0),
        useSubtitle: () =>
            (0, O.bG)([fu.A], () => fu.A.getBackupCodes().length > 0)
                ? g.intl.format(g.t.tp7zEK, {})
                : g.intl.string(g.t.LoOi4S),
        usePredicate: fi,
        buildLayout: () => [fp],
    }),
    fp = (0, a.E2)(u.X.BACKUP_CODES_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t.fC9qV0)],
        Component: function () {
            let e = (0, O.bG)([fu.A], () => fu.A.getBackupCodes()),
                t = f.useMemo(
                    () =>
                        e
                            .map((e) => {
                                let { code: t, consumed: i } = e;
                                return `* ${fE(t)}` + (i ? ` (${g.intl.string(g.t["ycME+9"])})` : "");
                            })
                            .join("\r\n"),
                    [e],
                );
            return 0 === e.length
                ? (0, p.jsx)(eh.$, { text: g.intl.string(g.t.Jc2myK), size: "sm", variant: "secondary", onClick: fA })
                : (0, p.jsxs)(p.Fragment, {
                      children: [
                          (0, p.jsx)("ul", {
                              className: fh.E5,
                              children: e.map((e) => (0, p.jsx)(fT, { code: e }, e.code)),
                          }),
                          (0, p.jsxs)(aB.e, {
                              size: "sm",
                              children: [
                                  (0, p.jsx)(fm.A, {
                                      fileContents: t,
                                      contentType: "text/plain",
                                      fileName: "discord_backup_codes.txt",
                                      children: (0, p.jsx)(eh.$, {
                                          text: g.intl.string(g.t["OO+Nib"]),
                                          variant: "secondary",
                                          icon: fd.s,
                                      }),
                                  }),
                                  (0, p.jsx)(eh.$, {
                                      text: g.intl.string(g.t["3x962E"]),
                                      variant: "secondary",
                                      icon: fc.f,
                                      onClick: fS,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
    }),
    ff = (0, a.Tf)(u.X.SMS_AUTH_DISABLE_BUTTON, {
        useTitle: () => g.intl.string(g.t.lQsY7B),
        useSubtitle: function () {
            let [e, t] = f.useState(!1),
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
        usePredicate: () => (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.hasFlag(q.nhx.MFA_SMS) ?? !1),
        onClick: () =>
            void (0, _.openModalLazy)(async () => {
                let { default: e } = await Promise.resolve().then(i.bind(i, 662758));
                return (t) =>
                    (0, p.jsx)(e, {
                        ...t,
                        handleSubmit: pc.A.disableSMS,
                        title: g.intl.string(g.t.KLWnit),
                        children: g.intl.string(g.t["W0/Duf"]),
                    });
            }),
    }),
    fN = (0, a.zZ)(u.X.SMS_AUTH_CATEGORY, {
        useTitle: () => g.intl.string(g.t.wuHuI5),
        useSubtitle: () => (0, O.bG)([t3.default], () => ft(t3.default.getCurrentUser(), !0)),
        useHeaderDecoration: () => {
            let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.hasFlag(q.nhx.MFA_SMS) ?? !1),
                t = (0, O.bG)([t3.default], () => null != ft(t3.default.getCurrentUser()));
            if (!e)
                return {
                    type: eN.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: eN.UV.BUTTON,
                            id: "sms-setup-button",
                            text: g.intl.string(g.t.Age7yU),
                            onClick: f_,
                            disabled: t,
                        },
                    ],
                };
        },
        collapseOnEmpty: !1,
        usePredicate: () => {
            let e = fs(),
                t = fi(),
                i = (0, O.bG)([cA.default], () => cA.default.hasTOTPEnabled());
            return e === fn.AVAILABLE && t && i;
        },
        buildLayout: () => [ff],
    });
function f_() {
    let e = t3.default.getCurrentUser();
    if (null != e)
        if (null == e.phone) {
            var t;
            (t = { reason: pL.d.USER_SETTINGS_UPDATE, onAddedPhone: pc.A.enableSMS }),
                (0, _.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            i.e("96768"),
                            i.e("4782"),
                            i.e("89545"),
                            i.e("11493"),
                            i.e("84704"),
                            i.e("86197"),
                        ]).then(i.bind(i, 615715));
                        return (i) => (0, p.jsx)(e, { ...i, ...t });
                    },
                    { modalKey: pD.V },
                );
        } else pc.A.enableSMS();
}
var fI = i(665671),
    fC = i(442433),
    fb = i(917136),
    fv = i(976910),
    fy = i(108666);
function fj(e) {
    let { credential: t } = e;
    return (0, p.jsxs)("li", {
        className: fy.e,
        children: [
            (0, p.jsxs)("div", {
                children: [
                    (0, p.jsx)(V.E, { variant: "text-md/normal", children: t.name }),
                    null != t.last_used &&
                        (0, p.jsx)(V.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: g.intl.format(g.t["7JgxF5"], { lastUsed: pW(t.last_used) }),
                        }),
                ],
            }),
            (0, p.jsx)(lx.K, {
                icon: md.j,
                variant: "icon-only",
                size: "sm",
                "aria-label": g.intl.string(g.t["+nrTbK"]),
                onClick: (e) => {
                    (0, fC.L3)(e, async () => {
                        let { default: e } = await i.e("32529").then(i.bind(i, 41e3));
                        return (i) => (0, p.jsx)(e, { credential: t, ...i });
                    });
                },
            }),
        ],
    });
}
let fO = (0, a.zZ)(u.X.SECURITY_KEYS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.IBq4Y3),
        useSubtitle: () => g.intl.string(g.t.yK9edS),
        useHeaderDecoration: function () {
            if (fs() === fn.AVAILABLE)
                return {
                    type: eN.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: eN.UV.BUTTON,
                            id: "add-security-key-button",
                            text: g.intl.string(g.t["Tzs/fw"]),
                            icon: r7.j,
                            onClick: fI.A,
                        },
                    ],
                };
        },
        useInlineNotice: () =>
            (function () {
                switch (fs()) {
                    case fn.UNAVAILABLE_NO_CRYPTO:
                        return {
                            type: eN.lT.INLINE_NOTICE,
                            noticeType: "info",
                            useText: () => g.intl.string(g.t.bWCGI9),
                        };
                    case fn.UNAVAILABLE_UNVERIFIED:
                        return {
                            type: eN.lT.INLINE_NOTICE,
                            noticeType: "warning",
                            useText: () => g.intl.string(g.t.uggF7o),
                        };
                    case fn.AVAILABLE:
                        return;
                }
            })(),
        buildLayout: () => [fR],
    }),
    fR = (0, a.E2)(u.X.SECURITY_KEYS_LIST, {
        useSearchTerms: () => [g.intl.string(g.t.y7SXYX)],
        Component: function () {
            let { credentials: e, hasFetchedCredentials: t } = (0, O.cf)([fv.A], () => ({
                hasFetchedCredentials: fv.A.hasFetchedCredentials(),
                credentials: fv.A.getCredentials(),
            }));
            return (f.useEffect(() => {
                t || fb.JQ();
            }, [t]),
            t)
                ? (0, p.jsx)(R.B, {
                      direction: "vertical",
                      gap: "sm",
                      as: "ul",
                      children: e.map((e) => (0, p.jsx)(fj, { credential: e }, e.id)),
                  })
                : (0, p.jsx)(u6.y, {});
        },
    }),
    fL = (0, a.t_)(u.X.MULTI_FACTOR_AUTHENTICATION, {
        useTitle: () => g.intl.string(g.t.m0FidJ),
        buildLayout: () => [fO, fo, fN, fx],
    }),
    fD = (0, a.t0)(u.X.ACCOUNT_MFA_NESTED_PANEL, {
        useTrailingDecoration: () => ({
            type: eN.xn.TEXT,
            useText: () => (fi() ? g.intl.string(g.t.lQsY7B) : g.intl.string(g.t.WsUuTt)),
        }),
        buildLayout: () => [fL],
    }),
    fP = (0, a.zZ)(u.X.ACCOUNT_PASSWORD_SECURITY_CATEGORY, {
        useTitle: () => g.intl.string(g.t["0iH2vc"]),
        buildLayout: () => [pB, fD, p9],
    });
var fG = i(308645),
    fU = i(271995),
    fM = i(855267);
let fV = (0, a.E2)(u.X.ACCOUNT_STANDING_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t["16r9jm"])],
        Component: fM.A,
    }),
    fk = (0, a.zZ)(u.X.ACCOUNT_STANDING_NESTED_CATEGORY, { buildLayout: () => [fV] }),
    fw = (0, a.t_)(u.X.ACCOUNT_STANDING_PANEL, {
        useTitle: () => g.intl.string(g.t["16r9jm"]),
        buildLayout: () => [fk],
    }),
    fB = (0, a.zZ)(u.X.ACCOUNT_STANDING_CATEGORY, {
        useTitle: () => g.intl.string(g.t["16r9jm"]),
        buildLayout: () => [fF],
    }),
    fF = (0, a.t0)(u.X.ACCOUNT_STANDING_NESTED_PANEL, {
        useTitle: fU.$b,
        useSubtitle: fU.bh,
        useLeadingDecoration: function () {
            let { color: e, backgroundColor: t, Icon: i } = (0, fU._k)();
            return { type: eN.Xy.ICON, icon: i, color: e, backgroundColor: t };
        },
        initialize: () => {
            fG.Yn();
        },
        buildLayout: () => [fw],
    });
var fz = i(834981),
    fY = i(840387),
    fX = i(986922),
    fH = i(602339);
let fK = (0, a.E2)(u.X.FAMILY_CENTER_SETTING, {
        Component: fX.p,
        useSearchTerms: () => [
            g.intl.string(fH.default.RZqaJn),
            g.intl.string(fH.default.bdBmqy),
            g.intl.string(fH.default["gVWG+6"]),
            g.intl.string(fH.default.ahKIJO),
            g.intl.string(fH.default["8SLtqb"]),
        ],
    }),
    fW = (0, a.zZ)(u.X.FAMILY_CENTER_CATEGORY, { buildLayout: () => [fK] }),
    fZ = (0, a.t_)(u.X.FAMILY_CENTER_PANEL, {
        useTitle: () => g.intl.string(fH.default.RZqaJn),
        buildLayout: () => [fW],
    }),
    fq = (0, a.zZ)(u.X.ACCOUNT_FAMILY_CENTER_CATEGORY, {
        useTitle: () => g.intl.string(fH.default.RZqaJn),
        usePersistentBadge: function () {
            return f.useMemo(() => ({ badgeType: eN.Xi.COUNT, useCount: fz.VT }), []);
        },
        buildLayout: () => [fQ],
    }),
    fQ = (0, a.t0)(u.X.ACCOUNT_FAMILY_CENTER_NESTED_PANEL, {
        useTitle: () => ((0, fz.Li)() ? g.intl.string(fH.default.IcMQUP) : g.intl.string(fH.default["n8wrn/"])),
        useSubtitle: () => {
            let e = (0, fY.Z)(),
                t = (0, fz.Li)();
            return e
                ? t
                    ? g.intl.string(fH.default.G8lHFU)
                    : g.intl.string(fH.default.uOLNEZ)
                : g.intl.string(fH.default.Z53oSM);
        },
        buildLayout: () => [fZ],
    });
var fJ = i(425587),
    f$ = i(662758);
function f0(e) {
    if (e.body.code === q.t02.INVALID_PASSWORD) throw e;
    (0, aV.A)({ title: g.intl.string(g.t.LX0nT8), subtitle: e.body.message });
}
async function f1() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = t3.default.getCurrentUser();
    if (null == t) return;
    let i = [];
    try {
        i = (await fJ.A.fetchTeams(!0)).body;
    } catch {}
    i.filter((e) => e.owner_user_id === t.id).length > 0
        ? (0, aV.A)({
              title: g.intl.string(g.t["Y++oNe"]),
              subtitle: g.intl.format(g.t.alpAUm, { devPortalLink: "https://discord.com/developers/teams" }),
          })
        : H.A.getGuildsArray().filter((e) => e.ownerId === t.id).length > 0
          ? (0, aV.A)({ title: g.intl.string(g.t.vJiTOL), subtitle: g.intl.string(g.t.UyVVan) })
          : t.isClaimed()
            ? (0, _.openModal)((t) =>
                  (0, p.jsx)(f$.default, {
                      ...t,
                      handleSubmit: (t) => (0, SY.U_)(t, e).then(q.tEg, f0),
                      title: e ? g.intl.string(g.t.xca2ts) : g.intl.string(g.t.goXv9g),
                      actionText: e ? g.intl.string(g.t["8lQ2rR"]) : g.intl.string(g.t.jf5GGb),
                      variant: "critical-primary",
                      children: e ? g.intl.string(g.t.FB4H1D) : g.intl.string(g.t.gk7h32),
                  }),
              )
            : (0, n9.A)({
                  title: g.intl.string(g.t.xca2ts),
                  subtitle: g.intl.string(g.t.FB4H1D),
                  confirmText: g.intl.string(g.t["8lQ2rR"]),
                  onConfirm: () => (0, SY.U_)("", !0),
              });
}
let f2 = (0, a.Tf)(u.X.ACCOUNT_DELETE_SETTING, {
        useTitle: () => g.intl.string(g.t["gIpzR+"]),
        useSubtitle: () => g.intl.string(g.t.Bd6dOf),
        useLabel: () => g.intl.string(g.t["8lQ2rR"]),
        useVariant: () => "critical-primary",
        onClick: () => f1(!0),
    }),
    f3 = (0, a.Tf)(u.X.ACCOUNT_DISABLE_SETTING, {
        useTitle: () => g.intl.string(g.t["p/Tjtp"]),
        useSubtitle: () => g.intl.string(g.t.YvDmKb),
        useLabel: () => g.intl.string(g.t.jf5GGb),
        useVariant: () => "critical-secondary",
        onClick: () => f1(!1),
        usePredicate: () => {
            let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser());
            return e?.isClaimed() ?? !1;
        },
    }),
    f6 = (0, a.zZ)(u.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [f3, f2] }),
    f4 = (0, a.t_)(u.X.ACCOUNT_PANEL, {
        useTitle: () => g.intl.string(g.t["ldCE/p"]),
        initialize: function () {
            return () => {
                pc.A.clearBackupCodes(), (0, SY.Uo)();
            };
        },
        useObscuredNotice: u1.L,
        buildLayout: () => [pk, fP, fB, fq, f6],
    }),
    f7 = (0, a.i4)(u.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["ldCE/p"]),
        icon: AR.n,
        buildLayout: () => [f4],
    });
var f5 = i(323384);
let f8 = (0, a.zZ)(u.X.AUTHORIZED_APPS_CATEGORY, {
        buildLayout: () => [EQ],
        initialize: () => (
            EZ.A.fetch(),
            () => {
                Eq.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    f9 = (0, a.t_)(u.X.AUTHORIZED_APPS_PANEL, {
        useTitle: () => g.intl.string(g.t["f6kk+r"]),
        useObscuredNotice: u1.L,
        buildLayout: () => [f8],
    }),
    Ne = (0, a.i4)(u.X.AUTHORIZED_APPS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["f6kk+r"]),
        icon: f5.k,
        buildLayout: () => [f9],
    });
var Nt = i(176781),
    Ni = i(611371);
let Nn = () =>
    (0, p.jsx)(e0.m, { asContainer: !0, text: g.intl.string(g.t["/fgfWh"]), children: (0, p.jsx)(Ni.A, {}) });
var Ns = i(274372),
    Nl = i(607814),
    Nr = i(696016);
let Na = (() => {
        let e = [Nr.wN];
        for (let t = 10; t <= Nr.qh; t += 10) e.push(t);
        return e[e.length - 1] !== Nr.qh && e.push(Nr.qh), e;
    })(),
    No = (0, a.sN)(u.X.CLIPS_AUTO_CLIP_STORAGE_LIMIT, {
        useTitle: () => g.intl.string(g.t.yfsrDI),
        useSubtitle: () => g.intl.string(g.t.vlDHdC),
        minValue: Nr.wN,
        maxValue: Nr.qh,
        getInitialValue: () => Ns.A.getSettings().maxAutoClips,
        onValueRender: (e) => `${Math.floor(e)}`,
        asValueChanges: (e) => Nl.e6(Math.floor(e)),
        markers: Na,
        onMarkerRender: (e) => `${Math.floor(e)}`,
    }),
    Nu = (0, a.zD)(u.X.CLIPS_ENABLE_GAME_SIGNALS, {
        useTitle: () => g.intl.string(g.t.iV6KcI),
        useSubtitle: () => g.intl.string(g.t["dJ2tX+"]),
        useValue: () => (0, O.bG)([Ns.A], () => Ns.A.getSettings().clipSignals.enableGameSignals),
        setValue: (e) => {
            let t = Ns.A.getSettings().clipSignals;
            Nl.PW({ ...t, enableGameSignals: e });
        },
    }),
    Nd = (0, a.zZ)(u.X.CLIPS_AUTOMATIC_CLIPPING_CATEGORY, {
        useTitle: () => g.intl.string(g.t.sA0WKL),
        usePredicate: () => {
            let { enableAdvancedSignals: e } = lQ.L_.useConfig({ location: "ClipsAutomaticClippingCategory" });
            return e;
        },
        buildLayout: () => [No, Nu],
    }),
    Nc = (0, a.zD)(u.X.CLIPS_DEBUG_TOOLTIPS, {
        useTitle: () => "Show clips debug tooltips",
        useSubtitle: () =>
            "Show overlay tooltips for the clips engine starting, enabled features, auto-clip signals, and save errors. Intended for development and testing.",
        useValue: () => (0, O.bG)([Ns.A], () => Ns.A.getSettings().debugTooltipsEnabled),
        setValue: (e) => Nl.YP(e),
    }),
    Ng = (0, a.zZ)(u.X.CLIPS_DEVELOPER_CATEGORY, {
        useTitle: () => "Developer",
        usePredicate: () =>
            (0, O.bG)([t3.default], () => {
                let e = t3.default.getCurrentUser();
                return e?.isStaff() === !0 || e?.isStaffPersonal() === !0;
            }),
        buildLayout: () => [Nc],
    });
var Nm = i(753070);
let NA = (0, a.Hn)(u.X.CLIPS_FRAME_RATE, {
    useTitle: () => g.intl.string(g.t["2wScL1"]),
    useSubtitle: () => g.intl.string(g.t["Rf9+fy"]),
    useValue: () => (0, O.bG)([Ns.A], () => Ns.A.getSettings().clipsQuality.frameRate),
    setValue: (e) => {
        let { clipsQuality: t } = Ns.A.getSettings();
        Nl.GS({ resolution: t.resolution, frameRate: e });
    },
    useOptions: () => [
        { id: "15", value: Nm.kn.FPS_15, label: g.intl.formatToPlainString(g.t.Qb44XH, { fps: Nm.kn.FPS_15 }) },
        { id: "30", value: Nm.kn.FPS_30, label: g.intl.formatToPlainString(g.t.Qb44XH, { fps: Nm.kn.FPS_30 }) },
        { id: "60", value: Nm.kn.FPS_60, label: g.intl.formatToPlainString(g.t.Qb44XH, { fps: Nm.kn.FPS_60 }) },
    ],
});
var Nh = i(372684);
let NE = (0, a.E2)(u.X.CLIPS_HARDWARE_CLASSIFICATION_WARNING, {
    useSearchTerms: () => [g.intl.string(g.t.SIxrIF)],
    usePredicate: () => (0, O.bG)([Ns.A], () => Ns.A.getHardwareClassification()) === Nh.k9.BELOW_MINIMUM,
    Component: () => (0, p.jsx)(st.A, { look: st.k.WARNING, children: g.intl.string(g.t.SIxrIF) }),
});
var NS = i(158278);
let NT = (0, a.E2)(u.X.CLIPS_KEYBIND, {
        useSearchTerms: () => [g.intl.string(g.t.pf54EU), g.intl.string(g.t["QyB/jK"])],
        Component: () => {
            let e = (0, O.bG)([eI.Ay], () => eI.Ay.getKeybindForAction(q.hCu.SAVE_CLIP, !0));
            tj()(null != e, "Save clip keybind unset");
            let t = f.useCallback(
                (t) => {
                    tO.A.setKeybind({ ...e, shortcut: t });
                },
                [e],
            );
            return (0, p.jsx)(sy.D, {
                label: g.intl.string(g.t.pf54EU),
                description: g.intl.string(g.t["QyB/jK"]),
                layout: "horizontal",
                children: (0, p.jsx)("div", {
                    className: NS.g,
                    children: (0, p.jsx)(tR.A, { defaultValue: e.shortcut, onChange: t }),
                }),
            });
        },
    }),
    Nx = (0, a.Hn)(u.X.CLIPS_LENGTH, {
        useTitle: () => g.intl.string(g.t.OgfUio),
        useSubtitle: () => g.intl.string(g.t.H7j4tY),
        useValue: () => (0, O.bG)([Ns.A], () => Ns.A.getSettings().clipsLength),
        setValue: (e) => Nl.h$(e),
        useOptions: () => [
            { id: "30s", value: Nr.LX.SECONDS_30, label: g.intl.formatToPlainString(g.t["bTFv/3"], { count: 30 }) },
            { id: "1m", value: Nr.LX.MINUTES_1, label: g.intl.formatToPlainString(g.t.ICo9Nk, { count: 1 }) },
            { id: "2m", value: Nr.LX.MINUTES_2, label: g.intl.formatToPlainString(g.t.ICo9Nk, { count: 2 }) },
        ],
    }),
    Np = (0, a.E2)(u.X.CLIPS_QUALITY_INFOBOX, {
        useSearchTerms: () => [g.intl.string(g.t["Z+MfqT"])],
        Component: () => (0, p.jsx)(st.A, { look: st.k.INFO, children: g.intl.string(g.t["Z+MfqT"]) }),
    }),
    Nf = (0, a.Hn)(u.X.CLIPS_RESOLUTION, {
        useTitle: () => g.intl.string(g.t.aFudZJ),
        useSubtitle: () => g.intl.string(g.t.nIrkW5),
        useValue: () => (0, O.bG)([Ns.A], () => Ns.A.getSettings().clipsQuality.resolution),
        setValue: (e) => {
            let { clipsQuality: t } = Ns.A.getSettings();
            Nl.GS({ resolution: e, frameRate: t.frameRate });
        },
        useOptions: () => [
            {
                id: "480p",
                value: Nm.on.RESOLUTION_480,
                label: g.intl.formatToPlainString(g.t.TEOC0I, { resolution: Nm.on.RESOLUTION_480 }),
            },
            {
                id: "720p",
                value: Nm.on.RESOLUTION_720,
                label: g.intl.formatToPlainString(g.t.TEOC0I, { resolution: Nm.on.RESOLUTION_720 }),
            },
            {
                id: "1080p",
                value: Nm.on.RESOLUTION_1080,
                label: g.intl.formatToPlainString(g.t.TEOC0I, { resolution: Nm.on.RESOLUTION_1080 }),
            },
            {
                id: "1440p",
                value: Nm.on.RESOLUTION_1440,
                label: g.intl.formatToPlainString(g.t.TEOC0I, { resolution: Nm.on.RESOLUTION_1440 }),
            },
            { id: "source", value: Nm.on.RESOLUTION_SOURCE, label: g.intl.string(g.t.XjXqzh) },
        ],
    }),
    NN = (0, a.E2)(u.X.CLIPS_SCREENSHOT_KEYBIND, {
        useSearchTerms: () => [g.intl.string(g.t["0U/hj7"]), g.intl.string(g.t["5zxkdo"])],
        usePredicate: lQ.BW,
        Component: () => {
            let e = (0, O.bG)([eI.Ay], () => eI.Ay.getKeybindForAction(q.hCu.SAVE_CLIP, !0)),
                t = (0, O.bG)([eI.Ay], () => eI.Ay.getKeybindForAction(q.hCu.SAVE_SCREENSHOT, !0));
            tj()(null != e, "Save clip keybind unset"), tj()(null != t, "Save screenshot keybind unset");
            let i = f.useCallback(
                (e) => {
                    tO.A.setKeybind({ ...t, shortcut: e });
                },
                [t],
            );
            return (0, p.jsx)(sy.D, {
                label: g.intl.string(g.t["0U/hj7"]),
                description: g.intl.string(g.t["5zxkdo"]),
                layout: "horizontal",
                children: (0, p.jsx)("div", {
                    className: NS.g,
                    children: (0, p.jsx)(tR.A, { defaultValue: t.shortcut, onChange: i }),
                }),
            });
        },
    }),
    N_ = (0, a.E2)(u.X.CLIPS_STORAGE_LOCATION, {
        useSearchTerms: () => [g.intl.string(g.t.s4773E), g.intl.string(g.t.svjwGh)],
        Component: () => {
            let e = (0, O.bG)([Ns.A], () => Ns.A.getSettings().storageLocation),
                t = f.useRef(!1),
                i = async () => {
                    if (!t.current) {
                        t.current = !0;
                        try {
                            let e = await s1.A.fileManager.showOpenDialog({
                                properties: ["openDirectory", "createDirectory"],
                            });
                            e.length > 0 && Nl.HU(e[0]);
                        } finally {
                            t.current = !1;
                        }
                    }
                };
            return (0, p.jsx)(sy.D, {
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
var NI = i(572164);
let NC = (0, a.zD)(u.X.CLIPS_ENABLE, {
    useTitle: () => g.intl.string(g.t.h8rgrK),
    useSubtitle: () => g.intl.string(g.t["4Qw3NO"]),
    useValue: () => (0, NI.Et)(),
    setValue: (e) => Nl.yO({ clipsEnabled: e, trackAnalytics: !0 }),
});
var Nb = i(915618);
let Nv = (0, a.zD)(u.X.CLIPS_ENABLE_DECOUPLED_CLIPPING, {
        useTitle: () => g.intl.string(g.t.yXvykv),
        useSubtitle: () => g.intl.string(g.t.YP3ujk),
        useValue: NI.XT,
        setValue: (e) => Nl.fd({ enabled: e, trackAnalytics: !0 }),
        usePredicate: () => {
            let e = (0, ev.isWindows)(),
                t = (0, Nb.A)(lb.Ay);
            return e && t;
        },
    }),
    Ny = (0, a.zD)(u.X.CLIPS_ENABLE_REMINDERS, {
        useTitle: () => g.intl.string(g.t["3zwNf6"]),
        useSubtitle: () => g.intl.string(g.t.m4Cjj9),
        useValue: () => (0, O.bG)([Ns.A], () => Ns.A.getSettings().remindersEnabled),
        setValue: (e) => Nl.Mt(e),
    }),
    Nj = (0, a.zZ)(u.X.CLIPS_RECORDING_CATEGORY, {
        useTitle: () => g.intl.string(g.t.iIwmV5),
        buildLayout: () => [Np, NE, NC, Nv, Ny, Nx, Nf, NA, NT, NN, N_],
    }),
    NO = (0, a.t_)(u.X.CLIPS_PANEL, {
        useTitle: () => g.intl.string(g.t.z2jK6X),
        usePersistentBadge: () => ({
            badgeType: eN.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            useCustomBadge: () => (0, p.jsx)(Nn, {}),
        }),
        usePredicate: lQ.sw,
        buildLayout: () => [Nj, Nd, Ng],
    }),
    NR = (0, a.i4)(u.X.CLIPS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.z2jK6X),
        icon: Nt.x,
        buildLayout: () => [NO],
    }),
    NL = (0, a.zZ)(u.X.CONNECTIONS_ADD_CONNECTIONS_CATEGORY, { buildLayout: () => [SP], useInlineNotice: SV }),
    ND = (0, a.zZ)(u.X.CONNECTIONS_CONNECTED_ACCOUNTS_CATEGORY, { buildLayout: () => [SG] }),
    NP = (0, a.t_)(u.X.CONNECTIONS_PANEL, {
        useTitle: () => g.intl.string(g.t["3fe7U5"]),
        useObscuredNotice: u1.L,
        buildLayout: () => [NL, ND],
    }),
    NG = (0, a.i4)(u.X.CONNECTIONS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["3fe7U5"]),
        icon: hK.q,
        buildLayout: () => [NP],
    });
var NU = i(875444);
function NM(e, t) {
    let i = (0, O.bG)([SA.default], () => SA.default.getFetchState()),
        n = (0, O.bG)([SA.default], () =>
            e ? SA.default.getNewestTokensForNonChildrenApplications() : SA.default.getNewestTokens(),
        ),
        s = f.useMemo(
            () => (null == n ? [] : n.filter((e) => (0, NU.A)(e.application)).map((e) => e.application)),
            [n],
        );
    return (
        f.useEffect(() => {
            t || EZ.A.fetch();
        }, [t]),
        { showLoadingIndicator: i !== SA.FetchState.FETCHED && (null == n || 0 === n.length), slayerSdkApplications: s }
    );
}
i(644151);
var NV = i(464946);
i(750994);
var Nk = i(998382);
function Nw(e) {
    let { applications: t } = e,
        i = f.useMemo(() => t.sort((e, t) => dl.default.compare(t.id, e.id)), [t]),
        n = f.useMemo(() => {
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
        s = f.useMemo(() => {
            let e = [];
            for (let t = 0; t < 3; t++) {
                let n = i[t];
                if (null == n) break;
                let { icon: s, name: l, id: r } = n,
                    a = iJ.Ay.getApplicationIconURL({ id: r, icon: s });
                e.push(
                    (0, p.jsx)(
                        e0.m,
                        {
                            __unsupportedReactNodeAsText: l,
                            children: (0, p.jsx)("img", { src: a, "aria-label": l, className: Nk.Kk }),
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
                                className: Nk.lK,
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
        className: Nk.wx,
        children: [
            (0, p.jsxs)("div", {
                className: Nk.kX,
                children: [
                    (0, p.jsx)(V.E, { variant: "text-md/normal", color: "text-strong", children: n }),
                    (0, p.jsxs)(M.D, {
                        onClick: () => {
                            (0, ey.openUserSettings)(u.X.AUTHORIZED_APPS_PANEL);
                        },
                        className: Nk.bJ,
                        children: [
                            (0, p.jsx)(V.E, {
                                variant: "text-xs/normal",
                                color: "interactive-text-default",
                                children: g.intl.format(g.t.oYaYOe, {}),
                            }),
                            (0, p.jsx)(th._, {
                                size: "xxs",
                                color: w.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                className: Nk.g7,
                            }),
                        ],
                    }),
                ],
            }),
            (0, p.jsx)("div", { className: Nk.yF }),
            (0, p.jsx)("div", { className: Nk.lJ, children: s }),
        ],
    });
}
function NB() {
    return (0, p.jsxs)("div", {
        className: Nk.do,
        children: [
            (0, p.jsx)(V.E, {
                variant: "text-md/medium",
                color: "text-strong",
                className: Nk.xV,
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
function NF(e) {
    let { applications: t } = e;
    return t.length > 0 ? (0, p.jsx)(Nw, { applications: t }) : (0, p.jsx)(NB, {});
}
let Nz = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES, {
    useSearchTerms: () => [g.intl.string(g.t.YpCiMt)],
    Component: function () {
        let { showLoadingIndicator: e, slayerSdkApplications: t } = NM(!0);
        return e ? (0, p.jsx)(u6.y, {}) : (0, p.jsx)(NF, { applications: t });
    },
});
function NY() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = NM(!0, !0);
    return !e && t.length > 0;
}
let NX = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_ALLOW_GAME_FRIEND_DMS_SETTING, {
        useTitle: () => g.intl.string(g.t.XpBObB),
        useSubtitle: () =>
            g.intl.format(g.t.oZsHTD, { helpdeskArticle: ta.A.getArticleURL(q.MVz.SLAYER_GAME_FRIENDS) }),
        useSearchTerms: () => [g.intl.string(g.t["Uv/eTx"])],
        useValue: () => c.Zk.useSetting(),
        setValue: (e) => c.Zk.updateSetting(e),
        usePredicate: NY,
    }),
    NH = (0, a.Qx)(u.X.CONTENT_AND_SOCIAL_IN_GAME_DMS_SETTING, {
        useTitle: () => g.intl.string(g.t["ms+Tme"]),
        useSubtitle: () => g.intl.string(g.t["4NN4+/"]),
        useOptions: () => [
            { name: g.intl.string(g.t.JIFnN9), value: N.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL },
            { name: g.intl.string(g.t.rRdsk1), value: N.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME },
            { name: g.intl.string(g.t.AolKwN), value: N.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE },
        ],
        useValue: () => {
            let e = c.TA.useSetting();
            return e === N.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET ? N.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL : e;
        },
        setValue: (e) => c.TA.updateSetting(e),
        usePredicate: NY,
    }),
    NK = (0, a.zZ)(u.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_CATEGORY, {
        useSearchTerms: () => [g.intl.string(g.t.YpCiMt)],
        buildLayout: () => [Nz, NX, NH],
    });
var NW = i(687123),
    NZ = i(444802),
    Nq = i(558001);
i(866945);
var NQ = i(835002);
function NJ() {
    let e = (0, NZ.WX)();
    f.useEffect(() => {
        (0, Nq.N)(NQ.YA.AGE_CONFIRMATION_NOTICE, NQ.YX.VIEWED);
    }, []);
    let t = f.useCallback(() => {
            window.open(ta.A.getArticleURL(e), "_blank"), (0, Nq.N)(NQ.YA.AGE_CONFIRMATION_NOTICE, NQ.YX.LEARN_MORE);
        }, [e]),
        i = f.useCallback(() => {
            pN.A.showAgeVerificationGetStartedModal({ entryPoint: p_.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, Nq.N)(NQ.YA.AGE_CONFIRMATION_NOTICE, NQ.YX.CONFIRM_AGE);
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
        children: g.intl.format(g.t.mFgsfg, { hook: (e, i) => (0, p.jsx)(uw.Anchor, { onClick: t, children: e }, i) }),
    });
}
function N$() {
    let e = (0, pE.aX)(NW.t.REACTIVE_CHECK),
        t = (0, ph.b8)();
    return f.useMemo(() => {
        if (e && !t) return { type: eN.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: NJ };
    }, [e, t]);
}
var N0 = i(308528),
    N1 = i(171316);
function N2() {
    let e = (0, N1.uM)(),
        t = (0, fz.vx)(),
        i = f.useCallback(() => {
            (0, sh.default)(),
                N0.A.openPrivateChannel({ recipientIds: t }),
                (0, Nq.N)(NQ.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, NQ.YX.LEARN_MORE);
        }, [t]),
        n = f.useCallback(() => {
            (0, Nq.N)(NQ.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, NQ.YX.VIEWED);
        }, []);
    return f.useMemo(() => {
        if (e)
            return {
                type: eN.lT.INLINE_NOTICE,
                noticeType: "info",
                trackView: n,
                useText: () =>
                    g.intl.format(fH.default.i284fU, {
                        hook: (e, t) => (0, p.jsx)(uw.Anchor, { onClick: i, children: e }, t),
                        count: t.length,
                    }),
            };
    }, [i, e, t.length, n]);
}
var N3 = i(323073),
    N6 = i(386171),
    N4 = i(96607);
let N7 = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_DM_SETTING, {
        useTitle: () => g.intl.string(g.t.XahVjj),
        useSubtitle: () => g.intl.string(g.t.R9fXyS),
        useValue: N6.hT,
        useDisabled: () => {
            let e = (0, N4.A)() ?? !0,
                t = (0, N3.sP)(),
                i = (0, ph.yM)();
            return (!t || !!i) && !e;
        },
        setValue: (e) => {
            (0, N3.p5)() && e
                ? pN.A.showAgeVerificationGetStartedModal({ entryPoint: p_.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS })
                : c.Qe.updateSetting(e);
        },
    }),
    N5 = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_IOS_SETTING, {
        useTitle: () => g.intl.string(g.t["L+yTsa"]),
        useSubtitle: () => g.intl.string(g.t.hiM8pU),
        useValue: N6.tI,
        useDisabled: () => {
            let e = (0, N4.A)() ?? !0,
                t = (0, N3.sP)(),
                i = (0, ph.yM)();
            return f.useMemo(() => (!t || !!i) && !e, [t, e, i]);
        },
        setValue: (e) => {
            (0, N3.p5)() && e
                ? pN.A.showAgeVerificationGetStartedModal({ entryPoint: p_.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS })
                : c.Kg.updateSetting(e);
        },
    });
i(667532);
var N8 = i(390248),
    N9 = i(632119),
    _e = i(945276),
    _t = i(389737),
    _i = i(566769);
function _n() {
    let e,
        t = (0, _e.A)() ?? !0,
        i = (0, N1.uM)(),
        n = (0, N1.uM)(),
        {
            explicitContentGuilds: s,
            explicitContentFriendDm: l,
            explicitContentNonFriendDm: r,
        } = ((e = (0, uk.cf)([ui.A], () => ui.A.settings.textAndImages?.explicitContentSettings ?? (0, N9.C$)())),
        {
            explicitContentGuilds: (0, N9.Ys)({ setting: e?.explicitContentGuilds }),
            explicitContentNonFriendDm: (0, N9.Ys)({ setting: e?.explicitContentNonFriendDm, isDm: !0 }),
            explicitContentFriendDm: (0, N9.Ys)({ setting: e?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
        }),
        a = (e) => {
            let t = Object.values(e);
            (0, N8.hK)() && t.includes(N.TO.SHOW)
                ? pN.A.showAgeVerificationGetStartedModal({ entryPoint: p_.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
                : (0, N9.Jz)(e);
        },
        o = [
            { value: N.TO.BLUR, label: g.intl.string(g.t.S49Uad) },
            { value: N.TO.BLOCK, label: g.intl.string(g.t["D/157Y"]) },
        ],
        u = [{ value: N.TO.BLUR, label: g.intl.string(g.t.S49Uad) }],
        d = { value: N.TO.SHOW, label: g.intl.string(g.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: n, tooltipText: i ? g.intl.string(fH.default["6Af/cw"]) : void 0 };
    return (0, p.jsxs)(_t.E, {
        description: g.intl.string(g.t.Wnojv1),
        children: [
            (0, p.jsx)(_i.A, {
                title: g.intl.string(g.t["+uI23H"]),
                value: l,
                onChange: (e) => a({ explicitContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, p.jsx)(_i.A, {
                title: g.intl.string(g.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ explicitContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, p.jsx)(_i.A, {
                title: g.intl.string(g.t["FP+a42"]),
                value: s,
                onChange: (e) => a({ explicitContentGuilds: e }),
                isDisabled: !t || n,
                tooltipText: i ? g.intl.string(fH.default["6Af/cw"]) : void 0,
                options: u,
            }),
        ],
    });
}
function _s() {
    let e,
        t = (0, _e.A)() ?? !0,
        i = (0, N1.uM)(),
        n = (0, N1.uM)(),
        {
            goreContentGuilds: s,
            goreContentFriendDm: l,
            goreContentNonFriendDm: r,
        } = ((e = (0, uk.cf)([ui.A], () => ui.A.settings.textAndImages?.goreContentSettings ?? (0, NZ.T4)())),
        {
            goreContentGuilds: (0, NZ.gC)({ setting: e?.goreContentGuilds }),
            goreContentNonFriendDm: (0, NZ.gC)({ setting: e?.goreContentNonFriendDm, isDm: !0 }),
            goreContentFriendDm: (0, NZ.gC)({ setting: e?.goreContentFriendDm, isDm: !0, isFriend: !0 }),
        }),
        a = (e) => {
            let t = Object.values(e);
            (0, N8.hK)() && t.includes(N.TO.SHOW)
                ? pN.A.showAgeVerificationGetStartedModal({ entryPoint: p_.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
                : (0, NZ.qY)(e);
        },
        o = [
            { value: N.TO.BLUR, label: g.intl.string(g.t.S49Uad) },
            { value: N.TO.BLOCK, label: g.intl.string(g.t["D/157Y"]) },
        ],
        u = [{ value: N.TO.BLUR, label: g.intl.string(g.t.S49Uad) }],
        d = { value: N.TO.SHOW, label: g.intl.string(g.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: n, tooltipText: i ? g.intl.string(fH.default["6Af/cw"]) : void 0 };
    return (0, p.jsxs)(_t.E, {
        description: g.intl.string(g.t.XgH9eh),
        children: [
            (0, p.jsx)(_i.A, {
                title: g.intl.string(g.t["+uI23H"]),
                value: l,
                onChange: (e) => a({ goreContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, p.jsx)(_i.A, {
                title: g.intl.string(g.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ goreContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, p.jsx)(_i.A, {
                title: g.intl.string(g.t["FP+a42"]),
                value: s,
                onChange: (e) => a({ goreContentGuilds: e }),
                isDisabled: !t || n,
                options: u,
                tooltipText: i ? g.intl.string(fH.default["6Af/cw"]) : void 0,
            }),
        ],
    });
}
var _l = i(875162),
    _r = i(334859);
let _a = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_CONTENT_FILTERS_SETTING, {
    Component: function () {
        let e = (0, NZ.WX)(),
            t = f.useMemo(
                () => [
                    {
                        id: "explicit-media-redaction",
                        title: g.intl.string(g.t.GYpoAq),
                        component: _n,
                        orientation: "vertical",
                    },
                    {
                        id: "gore-media-redaction",
                        title: g.intl.string(g.t["16/3Bi"]),
                        component: _s,
                        orientation: "vertical",
                    },
                ],
                [],
            );
        return (0, p.jsxs)(NV.h, {
            children: [
                (0, p.jsx)(NV._, {
                    header: g.intl.string(g.t["Hj/But"]),
                    description: g.intl.format(g.t.dliU4j, { learnMoreLink: ta.A.getArticleURL(e) }),
                }),
                (0, p.jsx)(_l.A, { tabs: t, orientation: "vertical", tabsClassName: _r.v }),
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
var _o = i(639555),
    _u = i(617641),
    _d = i(546140),
    _c = i(406935),
    _g = i(594061);
let _m = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_DM_SAFETY_ALERTS_SETTING, {
    useTitle: () => g.intl.string(g.t.qFsx5q),
    useSubtitle: () => g.intl.format(g.t.lunaRv, { learnMoreLink: ta.A.getArticleURL(q.MVz.SAFETY_ALERTS) }),
    useValue: _d.L,
    setValue: (e) =>
        _g.wc.updateAsync(
            "privacy",
            (t) => {
                t.inappropriateConversationWarnings = _c._t.create({ value: e });
            },
            _g.Sb.INFREQUENT_USER_ACTION,
        ),
    usePredicate: function () {
        let e = (0, _u.Lc)({ location: "DMSafetyAlertsSetting" }),
            t = (0, _o.Rv)({ location: "DMSafetyAlertsSetting" }),
            i = (0, _e.A)() ?? !0;
        return e && !i && !t;
    },
});
var _A = i(809505),
    _h = i(923457),
    _E = i(750714);
let _S = (0, a.Qx)(u.X.CONTENT_AND_SOCIAL_DM_SPAM_SETTING, {
        useTitle: () => g.intl.string(g.t.tiCXaH),
        useSubtitle: () => g.intl.format(g.t.RvjRRI, { appealLink: ta.A.getArticleURL(q.MVz.SAFE_DIRECT_MESSAGING) }),
        useValue: function () {
            let e = c.he.useSetting(),
                t = c.cj.useSetting(),
                i = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
                n = (0, pE.yv)(_h.p.SPAM_FILTERS);
            return e !== N.he.DEFAULT_UNSET
                ? e
                : i?.nsfwAllowed === !1 && n
                  ? N.he.FRIENDS_AND_NON_FRIENDS
                  : (_E.xY.get(t) ?? N.he.NON_FRIENDS);
        },
        setValue: (e) => c.he.updateSetting(e),
        useOptions: function () {
            return f.useMemo(() => (0, _A.YS)(), []);
        },
        useSearchTerms: () => [g.intl.string(g.t.JzaP4h), g.intl.string(g.t.H9XOl3), g.intl.string(g.t.k4W40P)],
    }),
    _T = (0, a.zZ)(u.X.CONTENT_AND_SOCIAL_CONTENT_CATEGORY, {
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
                u = N2(),
                d =
                    ((e = (0, fY.Z)()),
                    (t = (0, NZ.WX)()),
                    (i = f.useCallback(() => {
                        window.open(ta.A.getArticleURL(t), "_blank"),
                            (0, Nq.N)(NQ.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, NQ.YX.LEARN_MORE);
                    }, [t])),
                    (n = f.useCallback(() => {
                        (0, Nq.N)(NQ.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, NQ.YX.VIEWED);
                    }, [])),
                    f.useMemo(() => {
                        if (e)
                            return {
                                type: eN.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: n,
                                useText: () =>
                                    g.intl.format(g.t.EUo0yj, {
                                        hook: (e, t) => (0, p.jsx)(uw.Anchor, { onClick: i, children: e }, t),
                                    }),
                            };
                    }, [i, e, n])),
                c =
                    ((s = (0, pE.SJ)()),
                    (l = (0, ph.b8)()),
                    (r = s && !l),
                    (a = f.useCallback(() => {
                        pN.A.showAgeVerificationGetStartedModal({ entryPoint: p_.q1.CONTENT_AND_SOCIAL_NOTICE }),
                            (0, Nq.N)(NQ.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, NQ.YX.LEARN_MORE);
                    }, [])),
                    (o = f.useCallback(() => {
                        (0, Nq.N)(NQ.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, NQ.YX.VIEWED);
                    }, [])),
                    f.useMemo(() => {
                        if (r)
                            return {
                                type: eN.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: o,
                                useText: () =>
                                    g.intl.format(g.t.OX4ybh, {
                                        hook: (e, t) => (0, p.jsx)(uw.Anchor, { onClick: a, children: e }, t),
                                    }),
                            };
                    }, [a, r, o])),
                m = N$();
            return u ?? m ?? c ?? d;
        },
        buildLayout: () => [_a, _S, _m, N7, N5],
    });
var _x = i(189883);
let _p = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_EVERYONE_SETTING, {
    useTitle: () => g.intl.string(g.t["7x9dyE"]),
    useValue: () => {
        let e = c.FA.useSetting();
        return f.useMemo(() => (0, rf.Lx)(e), [e]).all;
    },
    setValue: (e) => {
        c.FA.updateSetting(e ? q.yKI : q.yKI & ~q.dzt.NO_RELATION);
    },
    useDisabled: () => (0, N1.uM)(),
});
var _f = i(665260);
let _N = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_FRIENDS_SETTING, {
        useTitle: () => g.intl.string(g.t.NfeuZ3),
        useValue: () => {
            let e = c.FA.useSetting(),
                t = f.useMemo(() => (0, rf.Lx)(e), [e]);
            return t.all || t.mutualFriends;
        },
        setValue: (e) => {
            let t = c.FA.getSetting();
            c.FA.updateSetting(e ? _f.UI(t, q.dzt.MUTUAL_FRIENDS) : _f.iE(t, q.dzt.MUTUAL_FRIENDS, q.dzt.NO_RELATION));
        },
        useDisabled: () => (0, N1.uM)(),
    }),
    __ = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_GUILDS_SETTING, {
        useTitle: () => g.intl.string(g.t.qsMfsH),
        useValue: () => {
            let e = c.FA.useSetting(),
                t = f.useMemo(() => (0, rf.Lx)(e), [e]);
            return t.all || t.mutualGuilds;
        },
        setValue: (e) => {
            let t = c.FA.getSetting();
            c.FA.updateSetting(e ? _f.UI(t, q.dzt.MUTUAL_GUILDS) : _f.iE(t, q.dzt.MUTUAL_GUILDS, q.dzt.NO_RELATION));
        },
        useDisabled: () => (0, N1.uM)(),
    }),
    _I = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_NOTES_SETTING, {
        useTitle: () => g.intl.string(g.t["jK+wdr"]),
        useSubtitle: () => g.intl.string(g.t["RYh/pW"]),
        useValue: () => !c.Zd.useSetting(),
        setValue: (e) => {
            c.Zd.updateSetting(!e);
        },
        usePredicate: () => _x.A.useConfig({ location: "Friend Request Setting" }).enabled,
        usePersistentBadge: () => ({ badgeType: eN.Xi.BETA }),
    }),
    _C = (0, a.zZ)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.MNaVwq),
        useSubtitle: () => {
            let { enabled: e } = _x.A.useConfig({ location: "Friend Request Setting" });
            return e ? g.intl.string(g.t.QVbF3l) : void 0;
        },
        useInlineNotice: N2,
        buildLayout: () => [_p, _N, __, _I],
    });
var _b = i(994500),
    _v = i(428678),
    _y = i(717398),
    _j = i(730134),
    _O = i(753686);
function _R(e) {
    let { listType: t, numberOfUsers: i } = e,
        n = "blocked" === t;
    return (0, p.jsxs)("div", {
        className: _O.wx,
        children: [
            (0, p.jsx)("div", { className: _O.zc, children: n ? (0, p.jsx)(_v.K, {}) : (0, p.jsx)(ig.G, {}) }),
            (0, p.jsxs)("div", {
                className: _O.Qq,
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
function _L(e) {
    let { userId: t, last: i } = e,
        n = (0, O.bG)([_b.A], () => _b.A.isBlocked(t)),
        s = (0, O.bG)([t3.default], () => t3.default.getUser(t)),
        [l, r] = f.useState(!1),
        a = f.useCallback(() => {
            r(!0),
                n
                    ? _y.A.unblockUser(t).catch(() => {
                          r(!1);
                      })
                    : _y.A.unignoreUser(t, eM.A.USER_SETTINGS).catch(() => {
                          r(!1);
                      });
        }, [n, t]);
    return null == s
        ? null
        : (0, p.jsxs)("div", {
              className: ew()(_O.nM, { [_O.fW]: i }),
              children: [
                  (0, p.jsxs)("div", {
                      className: _O.eF,
                      children: [
                          (0, p.jsx)(_j.A, { user: s, size: iH._3.SIZE_40 }),
                          (0, p.jsxs)("div", {
                              className: _O.Qq,
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
function _D(e) {
    let { userIds: t, listType: i } = e,
        [n, s] = f.useState(5);
    return (0, p.jsx)(NV.h, {
        children: (0, p.jsxs)("div", {
            className: _O.Nr,
            children: [
                (0, p.jsx)(_R, { listType: i, numberOfUsers: t.length }),
                (0, p.jsx)("div", {
                    className: _O.jS,
                    children: t.slice(0, n).map((e, i) => (0, p.jsx)(_L, { userId: e, last: i === t.length - 1 }, e)),
                }),
                n < t.length
                    ? (0, p.jsx)("div", {
                          className: _O.vM,
                          children: (0, p.jsx)(M.D, {
                              onClick: () => {
                                  s((e) => e + 5);
                              },
                              className: _O.Qf,
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
let _P = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_BLOCKED_USERS, {
        useSearchTerms: () => [g.intl.string(g.t.PFOUKW)],
        usePredicate: () => (0, O.bG)([_b.A], () => _b.A.getBlockedIDs().length > 0),
        Component: function () {
            let e = (0, O.yK)([_b.A], () => _b.A.getBlockedIDs());
            return (0, p.jsx)(_D, { userIds: e, listType: "blocked" });
        },
    }),
    _G = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_IGNORED_USERS, {
        useSearchTerms: () => [g.intl.string(g.t["93ZDWE"])],
        usePredicate: () => (0, O.bG)([_b.A], () => _b.A.getIgnoredIDs().length > 0),
        Component: function () {
            let e = (0, O.yK)([_b.A], () => _b.A.getIgnoredIDs());
            return (0, p.jsx)(_D, { userIds: e, listType: "ignored" });
        },
    }),
    _U = (0, a.zZ)(u.X.CONTENT_AND_SOCIAL_RESTRICTED_USERS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.LVwR56),
        useSubtitle: () =>
            g.intl.format(g.t["0aNQo9"], { helpArticle: ta.A.getArticleURL(q.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE) }),
        buildLayout: () => [_P, _G],
        usePredicate: () => {
            let { hasBlockedUsers: e, hasIgnoredUsers: t } = (0, O.cf)([_b.A], () => ({
                hasBlockedUsers: _b.A.getBlockedIDs().length > 0,
                hasIgnoredUsers: _b.A.getIgnoredIDs().length > 0,
            }));
            return t || e;
        },
    });
var _M = i(22385),
    _V = i(556534),
    _k = i(111159),
    _w = i(152056),
    _B = i(219714);
let _F = { label: () => g.intl.string(g.t["32u1Dx"]), value: _M.YG };
var _z = i(954225);
let _Y = () => (0, _V.Tx)() !== _M.YG;
function _X() {
    return g.intl.string(g.t["T+nevN"]);
}
let _H = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_JOIN_SETTING, {
        useTitle: _X,
        useSubtitle: () =>
            g.intl.format(g.t.jXKQCu, { helpdeskArticle: ta.A.getArticleURL(q.MVz.ACTIVITY_STATUS_SETTINGS) }),
        useValue: () => {
            let e = (0, _V.Tx)();
            return !c.pE.useSetting().includes(e);
        },
        setValue: (e) => {
            let t = _M.xk.getState().selectedGuildId,
                i = (0, rf.CN)();
            e ? i.delete(t) : i.add(t),
                c.pE.updateSetting([...i]),
                Y.default.track(q.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                    action: _z.m.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
                    ingress: nb.bf.USER_SETTINGS_PRIVACY_SAFETY,
                    guild_id: t,
                });
        },
        usePredicate: _Y,
    }),
    _K = () => (0, _V.Tx)() !== _M.YG;
function _W() {
    return g.intl.string(m.default.WhdCGP);
}
let _Z = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_SHARE_SETTING, {
    useTitle: _W,
    useSubtitle: () => g.intl.string(m.default.UQ9RHJ),
    useValue: () => {
        let e = (0, _V.Tx)();
        return !c.JG.useSetting().includes(e);
    },
    setValue: (e) => {
        let t = _M.xk.getState().selectedGuildId,
            i = (0, rf.Kk)();
        e ? i.delete(t) : i.add(t),
            c.JG.updateSetting([...i]),
            Y.default.track(q.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                action: _z.m.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
                ingress: nb.bf.USER_SETTINGS_PRIVACY_SAFETY,
                guild_id: t,
            });
    },
    usePredicate: _K,
});
var _q = i(307863),
    _Q = i(428031),
    _J = i(972737);
let _$ = () => ((0, _q.e)() ? g.intl.string(g.t.PMsfcH) : g.intl.string(g.t.RAQUSN)),
    _0 = (e, t) => {
        Y.default.track(q.HAw.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t,
        });
    },
    _1 = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_DMS_SETTING, {
        useTitle: _$,
        useSubtitle: () => {
            let e = (0, _V.Tx)(),
                t = (0, _V.q9)(),
                i = (0, _q.e)();
            return e === _M.YG
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
            let e = (0, _V.Tx)(),
                t = c.$s.useSetting().includes(e),
                i = (0, _Q.K)();
            return e === _M.YG ? !i : !t;
        },
        useDisabled: () => {
            let e = (0, N1.uM)();
            return (0, _V.Tx)() === _M.YG && e;
        },
        setValue: (e) => {
            let t = _M.xk.getState().selectedGuildId;
            if (t === _M.YG) {
                var i;
                (i = !e),
                    (0, _J.O)({
                        header: g.intl.string(g.t["uUr+GR"]),
                        body: g.intl.string(g.t.hjGJBp),
                        confirmText: g.intl.string(g.t.gm1Vej),
                        cancelText: g.intl.string(g.t.p89ACt),
                        confirmButtonColor: ak.$n.Colors.BRAND,
                        onConfirm: () => {
                            c.n6.updateSetting(i), _0(i, !1);
                        },
                        onCancel: () => {
                            c.n6.updateSetting(i), c.$s.updateSetting(i ? H.A.getGuildIds() : []), _0(i, !0);
                        },
                    });
            } else {
                let i = (0, rf.Tb)();
                e ? i.delete(t) : i.add(t),
                    c.$s.updateSetting(Array.from(i)),
                    Y.default.track(q.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: _z.m.DIRECT_MESSAGES_TOGGLE,
                        ingress: nb.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    });
            }
        },
    });
var _2 = i(953298);
let _3 = (e, t) => {
    Y.default.track(q.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
        default_guilds_restricted: e,
        applied_to_existing_guilds: t,
    });
};
function _6() {
    return g.intl.string(g.t["3o2ojh"]);
}
let _4 = (0, a.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: _6,
        useSubtitle: () =>
            (0, _V.q9)()
                ? g.intl.format(g.t.WpnWLc, { helpdeskArticle: ta.A.getArticleURL(q.MVz.MESSAGE_REQUESTS) })
                : g.intl.format(g.t.wkm9a3, { helpdeskArticle: ta.A.getArticleURL(q.MVz.MESSAGE_REQUESTS) }),
        useValue: () => {
            let e = (0, _V.Tx)(),
                t = (0, _Q.K)(),
                i = c.$s.useSetting().includes(e),
                n = c.YX.useSetting(),
                s = c.Zr.useSetting().includes(e);
            return e === _M.YG ? !t && !n : !i && !s;
        },
        useDisabled: () => {
            let e = (0, _V.Tx)(),
                t = (0, N1.uM)(),
                i = (0, _Q.K)(),
                n = c.$s.useSetting().includes(e);
            return e === _M.YG ? i || t : n;
        },
        setValue: (e) => {
            let t = _M.xk.getState().selectedGuildId;
            if (!e && (0, _2.w)())
                return void pN.A.showAgeVerificationGetStartedModal({ entryPoint: p_.q1.MESSAGE_REQUESTS_SETTINGS });
            if (t === _M.YG) {
                var i;
                (i = !e),
                    (0, _J.O)({
                        header: g.intl.string(g.t.yAfu1p),
                        body: g.intl.string(g.t.Ry2z74),
                        confirmText: g.intl.string(g.t.gm1Vej),
                        cancelText: g.intl.string(g.t.p89ACt),
                        confirmButtonColor: ak.$n.Colors.BRAND,
                        onConfirm: () => {
                            c.YX.updateSetting(i), _3(i, !1);
                        },
                        onCancel: () => {
                            c.YX.updateSetting(i), c.Zr.updateSetting(i ? H.A.getGuildIds() : []), _3(i, !0);
                        },
                    });
            } else {
                let i = (0, rf.xo)();
                e ? i.delete(t) : i.add(t),
                    c.Zr.updateSetting(Array.from(i)),
                    Y.default.track(q.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: _z.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: nb.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    });
            }
        },
    }),
    _7 = (0, a.E2)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_GUILD_SELECTOR, {
        useSearchTerms: function () {
            let e = [_$(), _6()],
                t = _W();
            _K() && e.push(t);
            let i = _X();
            return _Y() && e.push(i), e;
        },
        Component: function () {
            let { selectedGuildId: e, setSelectedGuildId: t } = (0, _M.xk)(),
                i = (0, O.bG)([K.Ay], () => K.Ay.getFlattenedGuildIds()),
                n = (0, O.bG)([H.A], () => H.A.getGuilds()),
                s = i[0];
            f.useEffect(
                () =>
                    _w.A.subscribe(
                        (e) => {
                            let { query: t } = e;
                            return t.trim();
                        },
                        (e, i) => {
                            let n = _M.xk.getState().selectedGuildId;
                            "" === i && "" !== e && n === _M.YG && null != s
                                ? t(s)
                                : "" === e && n !== _M.YG && t(_M.YG);
                        },
                        { equalityFn: (e, t) => e === t },
                    ),
                [s, t],
            );
            let l = f.useMemo(() => {
                let e = [];
                return (
                    e.push({
                        ..._F,
                        id: _F.value,
                        label: _F.label(),
                        leading: (0, p.jsx)("div", {
                            className: _B.KP,
                            children: (0, p.jsx)(_k.p, {
                                size: "sm",
                                color: "white",
                                "aria-hidden": !0,
                                className: _B.cl,
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
                                leading: (0, p.jsx)(gG.Ay, {
                                    className: _B.cl,
                                    guild: i,
                                    size: gG.Ay.Sizes.SMALLER,
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
    _5 = (0, a.zZ)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.eYaT7L),
        useInlineNotice: function () {
            let e = N2(),
                t = N$();
            if ((0, _V.Tx)() === _M.YG) return e ?? t;
        },
        buildLayout: () => [_7, _1, _4, _Z, _H],
    }),
    _8 = (0, a.dT)(u.X.CONTENT_AND_SOCIAL_MAIN_TAB, {
        getTitle: () => g.intl.string(g.t["/7xJCF"]),
        buildLayout: () => [_T, _5, _C, _U],
    }),
    _9 = (0, a.dT)(u.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_TAB, {
        initialize: () => {
            EZ.A.fetch();
        },
        getTitle: () => g.intl.string(g.t.YpCiMt),
        buildLayout: () => [NK],
    }),
    Ie = (0, a.t_)(u.X.CONTENT_AND_SOCIAL_PANEL, {
        useTitle: () => g.intl.string(g.t["+o1pDZ"]),
        buildLayout: () => [_8, _9],
    }),
    It = (0, a.i4)(u.X.CONTENT_AND_SOCIAL_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["+o1pDZ"]),
        icon: c8.i,
        buildLayout: () => [Ie],
    });
var Ii = i(254138);
function In() {
    return (
        n3.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_START" }),
        n2.Bo.get({ url: q.Rsh.USER_HARVEST, oldFormErrors: !0, rejectWithError: !1 })
            .then((e) => {
                n3.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body });
            })
            .catch((e) => {
                n3.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_FAILURE", error: e });
            })
    );
}
function Is(e) {
    return (0, SY.$I)(e).then(
        (e) => (
            null != e && null != e.body && n3.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body }), e
        ),
    );
}
var Il = i(157559),
    Ir = i(331887);
function Ia() {
    let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
        t = (0, O.bG)([Ir.A], () => Ir.A.harvestType),
        [i, n] = f.useState(() => Date.now()),
        s = null == t ? i : new Date(t.created_at).getTime() + 2592e6,
        l = f.useRef(null);
    return (f.useEffect(() => {
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
function Io(e) {
    let { onConfirm: t, ...n } = e;
    (0, _.openModalLazy)(async () => {
        let { default: e } = await i.e("92063").then(i.bind(i, 970018));
        return (i) => (0, p.jsx)(e, { modalProps: i, onConfirm: t });
    }, n);
}
var Iu = i(160427);
let Id = (0, a.E2)(u.X.DATA_HARVEST_REQUEST_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t.dmBSKo)],
        Component: function () {
            let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
                { currentHarvestType: t, awaitingInitialRequest: i } = (0, O.cf)([Ir.A], () => ({
                    currentHarvestType: Ir.A.harvestType,
                    awaitingInitialRequest: Ir.A.requestingHarvest,
                })),
                [n, s] = f.useState(!1);
            if (null == e) return null;
            let l =
                    !!(!e.verified || e.isStaff()) ||
                    (null != t && 2592e6 > Date.now() - new Date(t.created_at).getTime()) ||
                    i,
                r = null != t && ry()().diff(ry()(t.created_at), "days") < q.n83,
                a = l && r,
                o = e.isStaff(),
                u = !e.verified;
            return (0, p.jsxs)(NV.h, {
                children: [
                    (0, p.jsx)(NV._, {
                        header: g.intl.string(g.t.XAHCgJ),
                        description: g.intl.format(g.t.P3kNfr, {
                            helpdeskArticle: ta.A.getArticleURL(q.MVz.GDPR_REQUEST_DATA),
                        }),
                    }),
                    a
                        ? (0, p.jsx)(er.Z, {
                              className: Iu.N,
                              children: (0, p.jsx)(V.E, {
                                  variant: "text-md/normal",
                                  children: g.intl.format(g.t.RNDlV9, {
                                      date: ry()(t.created_at).add(q.n83, "days").format("MMMM Do YYYY"),
                                  }),
                              }),
                          })
                        : o
                          ? (0, p.jsx)(er.Z, {
                                className: Iu.N,
                                children: (0, p.jsx)(V.E, {
                                    variant: "text-md/normal",
                                    children: g.intl.string(g.t.ZPQLH2),
                                }),
                            })
                          : (0, p.jsxs)(p.Fragment, {
                                children: [
                                    u
                                        ? (0, p.jsx)(er.Z, {
                                              className: Iu.N,
                                              children: (0, p.jsx)(V.E, {
                                                  variant: "text-md/normal",
                                                  children: g.intl.string(g.t.c1f88z),
                                              }),
                                          })
                                        : null,
                                    (0, p.jsx)("div", {
                                        className: Iu.x,
                                        children: (0, p.jsx)(eh.$, {
                                            variant: "primary",
                                            text: g.intl.string(g.t.dmBSKo),
                                            disabled: l,
                                            onClick: () => {
                                                Io({
                                                    onConfirm: (e) => {
                                                        s(!0),
                                                            Is(e)
                                                                .then(
                                                                    (e) => {
                                                                        null != e && null != e.body
                                                                            ? Il.A.show({
                                                                                  title: g.intl.string(g.t.i2iul5),
                                                                                  body: g.intl.string(g.t["6Nmv4i"]),
                                                                              })
                                                                            : Il.A.show({
                                                                                  title: g.intl.string(g.t.OjbtDm),
                                                                                  body: g.intl.string(g.t["0F5Jyt"]),
                                                                              });
                                                                    },
                                                                    (e) => {
                                                                        let t =
                                                                            e?.message ||
                                                                            e?.body?.message ||
                                                                            g.intl.string(g.t["0F5Jyt"]);
                                                                        Il.A.show({
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
    Ic = (0, a.zZ)(u.X.DATA_REQUEST_CATEGORY, {
        useTitle: () => g.intl.string(g.t.VjDjpb),
        initialize: () => {
            In();
        },
        buildLayout: () => [Id],
    });
var Ig = i(290595),
    Im = i(153488);
let IA = (0, a.zD)(u.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING, {
        useTitle: () => g.intl.string(g.t.AGDDkH),
        useSubtitle: () =>
            (0, o.ri)("ClipsAllowVoiceRecording") ? g.intl.string(g.t.kyo3dJ) : g.intl.string(g.t["wW9/zQ"]),
        useValue: () => c.Q$.useSetting(),
        setValue: (e) => Nl.eQ({ allowVoiceRecording: e }),
    }),
    Ih = (0, a.Tf)(u.X.DATA_HARVEST_REQUEST_SETTING, {
        useTitle: () => g.intl.string(g.t.qfFFos),
        useSubtitle: function () {
            let e = Ia();
            if (e.allowed) return g.intl.format(g.t.NRI6vt, { article: ta.A.getArticleURL(q.MVz.GDPR_REQUEST_DATA) });
            if ("staff" === e.reason) return g.intl.string(g.t.hIbRso);
            if ("not_verified" === e.reason)
                return g.intl.format(g.t.rBqJDq, {
                    settingsLink: (e, t) =>
                        (0, p.jsx)(
                            M.D,
                            {
                                tag: "a",
                                onClick: () => (0, ey.openUserSettings)(u.X.ACCOUNT_INFO_EMAIL_SETTING),
                                children: e,
                            },
                            t,
                        ),
                });
            if ("rate_limited" === e.reason) {
                let t = ry()(e.nextAllowed).format("MMMM Do YYYY");
                return g.intl.format(g.t["VLMG1+"], { date: t });
            }
        },
        initialize: () => {
            In();
        },
        useDisabled: () => !Ia().allowed,
        useLoading: () => (0, O.bG)([Ir.A], () => Ir.A.requestingHarvest),
        useVariant: () => "secondary",
        useLabel: () => g.intl.string(g.t.dmBSKo),
        onClick: function () {
            return new Promise((e) => {
                let t = !0;
                Io({
                    onConfirm: (i) => {
                        (t = !1),
                            Is(i)
                                .then(
                                    (e) => {
                                        null != e && null != e.body
                                            ? Il.A.show({
                                                  title: g.intl.string(g.t.i2iul5),
                                                  body: g.intl.string(g.t["6Nmv4i"]),
                                              })
                                            : Il.A.show({
                                                  title: g.intl.string(g.t.OjbtDm),
                                                  body: g.intl.string(g.t["0F5Jyt"]),
                                              });
                                    },
                                    (e) => {
                                        let t = e?.message || e?.body?.message || g.intl.string(g.t["0F5Jyt"]);
                                        Il.A.show({ title: g.intl.string(g.t.OjbtDm), body: t });
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
    IE = (0, a.v_)(u.X.DATA_USAGE_DISCLAIMER_SETTING, {
        useTitle: () => g.intl.string(g.t.D60Gfj),
        useSubtitle: () =>
            (0, o.ri)("DataUsageDisclaimer")
                ? g.intl.format(g.t.dszICC, {
                      onClickDisable: () => (0, ey.openUserSettings)(u.X.ACCOUNT_DISABLE_SETTING),
                      onClickDelete: () => (0, ey.openUserSettings)(u.X.ACCOUNT_DELETE_SETTING),
                  })
                : g.intl.format(g.t.R5N31P, { onClick: () => (0, ey.openUserSettings)(u.X.ACCOUNT_REMOVAL_CATEGORY) }),
    }),
    IS = (0, a.zD)(u.X.DATA_USAGE_PERSONALIZATION_SETTING, {
        useTitle: () => g.intl.string(g.t.MNKzyg),
        useSubtitle: () => {
            let e = (0, o.ri)("DataUsagePersonalization");
            return g.intl.format(e ? g.t["2SiYln"] : g.t["eQL/Mr"], {
                helpdeskArticle: ta.A.getArticleURL(q.MVz.DATA_USED_FOR_RECOMMENDED),
            });
        },
        useValue: function () {
            return (0, O.bG)([Im.A], () => Im.A.hasConsented(q.YAq.PERSONALIZATION));
        },
        setValue: function (e) {
            e
                ? (0, Ig.U)([q.YAq.PERSONALIZATION], []).catch(_J.i)
                : (0, _J.O)({
                      header: g.intl.string(g.t["9SNpzv"]),
                      confirmText: g.intl.string(g.t["9g5UGw"]),
                      cancelText: g.intl.string(g.t["+ZLPw9"]),
                      onConfirm: () => {
                          (0, Ig.U)([], [q.YAq.PERSONALIZATION]).catch(_J.i);
                      },
                      body: g.intl.string(g.t.gJvDDh),
                  });
        },
        useDisabled: N1.uM,
    }),
    IT = (0, a.zD)(u.X.DATA_USAGE_QUESTS_3P_SETTING, {
        useTitle: () => g.intl.string(g.t.CyLYKZ),
        useSubtitle: () => {
            let e = (0, o.ri)("DataUsageQuests3P");
            return g.intl.format(e ? g.t["md5l4/"] : g.t["2QFDU/"], {
                helpdeskArticle: ta.A.getArticleURL(q.MVz.QUESTS_PRIVACY_CONTROLS),
            });
        },
        useValue: function () {
            return !c.vf.useSetting();
        },
        setValue: function (e) {
            c.vf.updateSetting(!e);
        },
        useDisabled: function () {
            let e = c.H1.useSetting(),
                t = (0, N1.uM)();
            return e || t;
        },
        useSearchTerms: () => [g.intl.string(g.t.CyLYKZ)],
    }),
    Ix = (0, a.zD)(u.X.DATA_USAGE_QUESTS_SETTING, {
        useTitle: () => g.intl.string(g.t.sJYh5t),
        useSubtitle: () =>
            (0, o.ri)("DataUsageQuests")
                ? g.intl.string(g.t.w4fvxe)
                : g.intl.format(g.t.cf9mvV, { helpdeskArticle: ta.A.getArticleURL(q.MVz.QUESTS_PRIVACY_CONTROLS) }),
        useValue: function () {
            return !c.H1.useSetting();
        },
        setValue: function (e) {
            c.H1.updateSetting(!e);
        },
        useSearchTerms: () => [g.intl.string(g.t.VkS7Yd)],
        useDisabled: N1.uM,
    });
var Ip = i(751075);
let If = (0, a.AK)(u.X.DATA_USAGE_ACTIVITY_PRIVACY_NAVIGATOR, {
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
        useTrailingDecoration: () => ({ type: eN.wF.STACKED_ICONS, useIcons: I_ }),
        usePredicate: () =>
            (0, O.bG)([eQ.Ay], () => eQ.Ay.getGamesSeen(!1).some((e) => !(0, tf.n1)(e))) && (0, n8.xl)(),
    }),
    IN = (0, a.gN)(u.X.DATA_USAGE_RELATED_SETTINGS, { buildLayout: () => [If] });
function I_() {
    let { gameHistory: e } = i_(),
        [t, i] = f.useMemo(
            () =>
                e
                    .values()
                    .map((e) => e.id)
                    .filter((e) => null != e)
                    .take(2)
                    .toArray(),
            [e],
        );
    f.useEffect(() => {
        AV.Ay.fetchApplications([t, i].filter(t6.Vq));
    }, [t, i]);
    let [n, s] = (0, O.yK)([eW.A], () => [t, i].map(eW.A.getApplication), [t, i]);
    return null == t
        ? null
        : {
              frontIcon: { icon: (0, p.jsx)(e5.A, { game: n, size: e5.M.MEDIUM_LARGE }), shape: Ip.e0.ROUNDED },
              backIcon:
                  null != i ? { icon: (0, p.jsx)(e5.A, { game: s, size: e5.M.MEDIUM }), shape: Ip.e0.ROUNDED } : null,
          };
}
let II = (0, a.zD)(u.X.DATA_USAGE_STATISTICS_SETTING, {
        useTitle: () => g.intl.string(g.t.XuADY2),
        useSubtitle: () => {
            let e = (0, o.ri)("DataUsageStatistics");
            return g.intl.format(e ? g.t.FNqmmX : g.t["igTSG/"], {
                helpdeskArticle: ta.A.getArticleURL(q.MVz.DATA_PRIVACY_CONTROLS),
            });
        },
        useValue: function () {
            return (0, O.bG)([Im.A], () => Im.A.hasConsented(q.YAq.USAGE_STATISTICS));
        },
        setValue: function (e) {
            e
                ? (0, Ig.U)([q.YAq.USAGE_STATISTICS], []).catch(_J.i)
                : (0, _J.O)({
                      header: g.intl.string(g.t.OdPCbN),
                      body: g.intl.string(g.t.MGWabA),
                      confirmText: g.intl.string(g.t["D3+rU4"]),
                      cancelText: g.intl.string(g.t.kYpG0u),
                      onConfirm: () => (0, Ig.U)([], [q.YAq.USAGE_STATISTICS]).catch(_J.i),
                  });
        },
        useSearchTerms: () => [g.intl.string(g.t.XuADY2)],
        useDisabled: N1.uM,
    }),
    IC = (0, a.zZ)(u.X.DATA_USAGE_CATEGORY, {
        useTitle: () => ((0, o.ri)("DataUsageCategory") ? g.intl.string(g.t.QDAriI) : g.intl.string(g.t.bvw42E)),
        useInlineNotice: N2,
        initialize: () => {
            Im.A.fetchedConsents || (0, Ig.Q)();
        },
        buildLayout: () =>
            (0, o.SB)("DataUsageCategory") ? [IE, II, IS, Ix, IT, IA, Ih, IN] : [II, Ix, IT, IS, IA, IE],
    });
function Ib() {
    let e = c.JG.useSetting();
    return (0, O.yK)([K.Ay, H.A], () => {
        let t = new Set(e);
        return K.Ay.getFlattenedGuildIds().filter((e) => null != H.A.getGuild(e) && !t.has(e));
    }, [e]);
}
let Iv = {
        type: eN.wF.STACKED_ICONS,
        useIcons: function () {
            let e = Ib(),
                t = (0, O.yK)(
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
                        frontIcon: { icon: (0, p.jsx)(X.$, { guild: t[0], size: Ip.CD }), shape: Ip.e0.SQUIRCLE },
                        backIcon: { icon: (0, p.jsx)(X.$, { guild: t[1], size: Ip.CD }), shape: Ip.e0.SQUIRCLE },
                    }
                  : { frontIcon: { icon: (0, p.jsx)(X.$, { guild: t[0], size: Ip.CD }), shape: Ip.e0.SQUIRCLE } };
        },
    },
    Iy = (0, a.AK)(u.X.PROFILE_PRIVACY_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: function () {
            let e = Ib();
            if (0 === e.length) return g.intl.format(g.t.QJIJ5p, {});
            let t = H.A.getGuild(e[0]),
                i = t?.name ?? "",
                n = e.length - 1;
            return 0 === n
                ? g.intl.format(g.t["T+8J4A"], { guildName: i })
                : g.intl.format(g.t["3JyODQ"], { guildName: i, count: n });
        },
        useTrailingDecoration: function () {
            return Iv;
        },
        destinationKey: u.X.ACTIVITY_PRIVACY_PANEL,
    }),
    Ij = (0, a.gN)(u.X.PROFILE_PRIVACY_RELATED_SETTINGS, { buildLayout: () => [Iy] }),
    IO = (0, a.Qx)(u.X.PROFILE_PRIVACY_SETTING, {
        useTitle: () => g.intl.string(g.t.Qnf32C),
        useOptions: () => [
            { name: g.intl.string(g.t.Boxc8R), desc: g.intl.string(g.t["nLj+nc"]), value: N.KP.FRIENDS_AND_ALL_GUILDS },
            { name: g.intl.string(g.t.YOIKBt), desc: g.intl.string(g.t.y0JZ4s), value: N.KP.FRIENDS_AND_SMALL_GUILDS },
            { name: g.intl.string(g.t.u0nlJv), desc: g.intl.string(g.t["4jnKHu"]), value: N.KP.FRIENDS_ONLY },
        ],
        useValue: c.KP.useSetting,
        setValue: function (e) {
            let t = c.KP.getSetting();
            if ((c.KP.updateSetting(e), !(0, S.W1)("ProfilePrivacySetting"))) return;
            let n = (0, I.gS)(t, e);
            null != n &&
                (0, _.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        i.e("92164"),
                        i.e("36281"),
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
    IR = (0, a.zZ)(u.X.PROFILE_PRIVACY_CATEGORY, {
        usePredicate: () => (0, S.lX)("ProfilePrivacyCategory"),
        useTitle: () => g.intl.string(g.t.ul884f),
        useSubtitle: () => g.intl.string(g.t.J0SFL2),
        buildLayout: () => [IO, Ij],
    });
var IL = i(814278),
    ID = i(936388),
    IP = i(714763);
let IG = (0, a.zD)(u.X.PERSISTENT_VERIFICATION_CODES_SETTING, {
    useTitle: () => g.intl.string(g.t["opi/XK"]),
    useSubtitle: () => g.intl.format(g.t["/T+ZlP"], { helpArticle: (0, IL.Lu)() }),
    useValue: function () {
        return (0, O.bG)([IP.A], () => IP.A.getPersistentCodesEnabled());
    },
    setValue: function (e) {
        ID.A.updatePersistentCodesEnabled(e);
    },
});
var IU = i(787392);
function IM() {
    return (0, O.yK)([IU.A], () => IU.A.getUserIds());
}
var IV = i(803306),
    Ik = i(966327),
    Iw = i(146003);
function IB(e) {
    let { userId: t, count: i } = e,
        { analyticsLocations: n } = (0, nG.Ay)(),
        s = (0, O.bG)([t3.default], () => t3.default.getUser(t)),
        l = TZ.Ay.getFormattedName(s),
        r = f.useCallback(() => {
            (0, IL.kj)(t);
        }, [t]),
        a = f.useCallback(() => (0, SZ.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: n }), [t, n]);
    return (
        f.useEffect(() => {
            (0, IV.wz)(t);
        }, [t]),
        (0, p.jsxs)("div", {
            className: Iw.uW,
            children: [
                null != s && (0, p.jsx)(Ik.A, { className: Iw.my, user: s, size: iH._3.SIZE_40 }),
                (0, p.jsxs)("div", {
                    className: Iw.Qq,
                    children: [
                        (0, p.jsx)(M.D, {
                            className: Iw.Xh,
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
                (0, p.jsx)(M.D, { onClick: r, className: Iw.Qz, children: (0, p.jsx)(lp.u, { size: "xs" }) }),
            ],
        })
    );
}
function IF(e) {
    let { className: t, userId: i, verification: n, index: s } = e,
        l = (0, IL.tC)(n.timestamp),
        r = f.useCallback(() => {
            (0, IL.W0)(i, n.verifiedKey);
        }, [n.verifiedKey, i]);
    return (0, p.jsxs)("div", {
        className: t,
        children: [
            (0, p.jsxs)("div", {
                className: Iw.Qq,
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
                className: Iw.Kk,
                onClick: r,
                children: (0, p.jsx)(gd.P, { size: "md", color: w.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function Iz(e) {
    let { userId: t } = e,
        i = (0, O.yK)([IU.A], () =>
            eR()(IU.A.getUserVerifiedKeys(t))
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
            (0, p.jsx)(IB, { userId: t, count: i.length }),
            i.map((e, n) =>
                (0, p.jsxs)(
                    f.Fragment,
                    {
                        children: [
                            (0, p.jsx)(IF, { className: Iw.nM, userId: t, index: n, verification: e }),
                            n !== i.length - 1 && (0, p.jsx)("div", { className: Iw.yF }),
                        ],
                    },
                    `${n}-${e.timestamp}`,
                ),
            ),
        ],
    });
}
var IY = i(623161);
let IX = (0, a.E2)(u.X.USERS_VERIFIED_KEYS_LIST_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t["5b3FNI"])],
        usePredicate: function () {
            let e = IM();
            return null != e && e.length > 0;
        },
        Component: function () {
            let e = IM();
            return (0, p.jsxs)(NV.h, {
                children: [
                    (0, p.jsx)(NV._, {
                        header: g.intl.string(g.t["5b3FNI"]),
                        description: g.intl.format(g.t.jrTSWU, { helpArticle: (0, IL.dc)() }),
                    }),
                    e.map((e) => (0, p.jsx)("div", { className: IY.A, children: (0, p.jsx)(Iz, { userId: e }) }, e)),
                ],
            });
        },
    }),
    IH = (0, a.zZ)(u.X.VOICE_SECURITY_CATEGORY, {
        useTitle: () => ((0, o.ri)("VoiceSecurityCategory") ? g.intl.string(g.t.bTwjaz) : g.intl.string(g.t.xVk85F)),
        useInlineNotice: function () {
            let e = (0, o.ri)("VoiceSecurityCategory");
            return f.useMemo(
                () =>
                    e
                        ? null
                        : {
                              type: eN.lT.INLINE_NOTICE,
                              noticeType: "info",
                              useText: () => g.intl.format(g.t["/6sFWa"], { helpArticle: (0, IL.aW)() }),
                          },
                [e],
            );
        },
        usePredicate: () => (0, ev.isDesktop)(),
        buildLayout: () => [IG, IX],
    }),
    IK = (0, a.t_)(u.X.DATA_AND_PRIVACY_PANEL, {
        useTitle: () => g.intl.string(g.t.OAuOHD),
        buildLayout: () => ((0, o.SB)("DataAndPrivacyPanel") ? [IC, IR, IH] : [IC, IR, Ic, IH]),
    }),
    IW = (0, a.i4)(u.X.DATA_AND_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.OAuOHD),
        icon: Ii.m,
        buildLayout: () => [IK],
    });
var IZ = i(782603),
    Iq = i(899847),
    IQ = i(695515),
    IJ = i(936926);
let I$ = (0, a.Hn)(u.X.MOBILE_NOTIFICATION_DELAY, {
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
    I0 = (0, a.zD)(u.X.TEXT_TO_SPEECH_COMMAND, {
        useTitle: () => g.intl.string(g.t["btbS+Z"]),
        useSubtitle: () =>
            g.intl.format(g.t.Q5crhR, { onClick: () => (0, ey.openUserSettings)(u.X.TTS_PLAYBACK_RATE) }),
        useValue: c.on.useSetting,
        setValue: c.on.updateSetting,
    }),
    I1 = (0, a.Qx)(u.X.TEXT_TO_SPEECH_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.JZxxGx),
        useSubtitle: () => g.intl.string(g.t.HDLtJl),
        useValue: () => (0, O.bG)([ug.A], () => ug.A.getTTSType()),
        setValue: (e) => uS.default.setTTSType(e),
        useOptions: () => [
            { name: g.intl.string(g.t.B1AGeJ), value: q.aVn.ALL_CHANNELS },
            { name: g.intl.string(g.t.uzZg9e), value: q.aVn.SELECTED_CHANNEL },
            { name: g.intl.string(g.t.DYO5Oi), value: q.aVn.NEVER },
        ],
        usePredicate: () => i7.$j,
    }),
    I2 = u.X.NOTIFICATIONS_ADVANCED_ACCORDION,
    I3 = (0, a.bd)(I2, {
        useTitle: (e) => (e ? g.intl.string(g.t.RyimDk) : g.intl.string(g.t.CUICbO)),
        useCollapsedSubtitle: function () {
            return oo(I2, {
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
        buildLayout: () => [I$, I0, I1],
    }),
    I6 = (0, a.zZ)(u.X.NOTIFICATIONS_ADVANCED_CATEGORY, {
        useTitle: () => g.intl.string(g.t["31DySj"]),
        buildLayout: () => [I3],
    }),
    I4 = (0, a.zD)(u.X.ENABLE_UNREAD_MESSAGE_BADGE, {
        useTitle: () => g.intl.string(g.t.VH8AIJ),
        useSubtitle: () => g.intl.string(g.t["9K4qwX"]),
        useValue: () => (0, O.bG)([ug.A], () => !ug.A.getDisableUnreadBadge()),
        setValue: (e) => uS.default.setDisableUnreadBadge(!e),
    }),
    I7 = (0, a.zZ)(u.X.NOTIFICATIONS_BADGES_CATEGORY, {
        useTitle: () => g.intl.string(g.t.l6w3Vj),
        buildLayout: () => [I4],
    });
var I5 = i(840559),
    I8 = i(997187),
    I9 = i(723923);
let Ce = I9.px.map((e) =>
        (0, a.zD)(`${u.X.EMAIL_LIST_ITEM_PREFIX}${e.category}`, {
            useTitle: e.label,
            useSubtitle: e.subLabel,
            useValue: () =>
                ((e) => {
                    let { categories: t } = (0, O.cf)([I8.A], () => I8.A.getEmailSettings());
                    return !!t[e];
                })(e.category),
            setValue: (t) => (0, I5.CA)(e.category, t),
        }),
    ),
    Ct = (0, a.Tf)(u.X.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
        useTitle: () => g.intl.string(g.t.Ra9Pwk),
        useSubtitle: () => g.intl.string(g.t.iYjQ8X),
        useLabel: () => g.intl.string(g.t.KT1pBA),
        useDisabled: () => {
            let { categories: e } = (0, O.cf)([I8.A], () => I8.A.getEmailSettings());
            return I9.Zk.every((t) => !e[t]);
        },
        onClick: () => (0, I5.NI)(),
        useVariant: () => "critical-secondary",
    }),
    Ci = (0, a.zZ)(u.X.NOTIFICATIONS_EMAIL_CATEGORY, {
        useTitle: () => g.intl.string(g.t["w/qqKK"]),
        initialize: function () {
            let { initialized: e } = I8.A.getEmailSettings();
            e || (0, I5.cR)();
        },
        buildLayout: () => [...Ce, Ct],
    }),
    Cn = (0, a.zD)(u.X.DESKTOP_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t["/0WCll"]),
        useSubtitle: () => g.intl.string(g.t.wF9ih3),
        useValue: () => (0, O.bG)([ug.A], () => ug.A.getDesktopType()) !== q.nRU.NEVER,
        setValue: (e) => uS.default.setDesktopType(e ? q.nRU.ALL : q.nRU.NEVER),
    });
var Cs = i(832712),
    Cl = i(543465),
    Cr = i(406535),
    Ca = i(790782);
let Co = (0, a.zD)(u.X.EXPERIMENTAL_UNREADS, {
    useTitle: () => g.intl.string(g.t["k6m/si"]),
    useSubtitle: () => g.intl.string(g.t.LGynPs),
    useValue: () => (0, O.bG)([Cl.Ay], () => Cl.Ay.useNewNotifications),
    setValue: function (e) {
        Cs.A.setAccountFlag(Cr.i.USE_NEW_NOTIFICATIONS, e),
            e ||
                (Ee.w.set("turnedOffNewNotifications", !0),
                Y.default.track(q.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: H.A.getGuildsArray().filter(
                        (e) => Cl.Ay.resolveGuildUnreadSetting(e) === Ca.e.ONLY_MENTIONS,
                    ).length,
                }));
    },
    usePredicate: () =>
        (0, O.bG)(
            [t3.default, Cl.Ay],
            () =>
                t3.default.getCurrentUser()?.isStaff() ||
                t3.default.getCurrentUser()?.isStaffPersonal() ||
                Cl.Ay.useNewNotifications,
        ),
});
var Cu = i(534654);
let Cd = (0, a.zD)(u.X.SCREEN_DOWNTIME_REMINDER, {
        useTitle: () => g.intl.string(g.t.z9h8Ym),
        useSubtitle: () => g.intl.string(g.t.TummoQ),
        useValue: () => (0, O.bG)([ug.A], () => ug.A.screenDowntimeReminder),
        setValue: (e) => uS.default.setScreenDowntimeReminder(e),
        usePredicate: () => {
            let e = (0, IJ.Vh)({ location: "ScreenDowntimeReminderSetting" }),
                t = (0, Cu.A)(),
                i = (0, fz.Du)();
            return e && t && i;
        },
    }),
    Cc = (0, a.zD)(u.X.SCREEN_DOWNTIME_SCHEDULE, {
        useTitle: () => g.intl.string(g.t.onrAy7),
        useSubtitle: () => g.intl.string(g.t["/071J7"]),
        useValue: c.gY.useSetting,
        setValue: (e) => c.gY.updateSetting(e),
        usePredicate: () => {
            let e = (0, IJ.Vh)({ location: "ScreenDowntimeScheduleSetting" }),
                t = (0, Cu.A)(),
                i = (0, fz.Du)();
            return e && t && i;
        },
    });
var Cg = i(70730);
let Cm = (0, a.zD)(u.X.FRIEND_ANNIVERSARY_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.NjOMvh),
        usePersistentBadge: () => ({ badgeType: eN.Xi.BETA }),
        useValue: c.oz.useSetting,
        setValue: function (e) {
            c.oz.updateSetting(e),
                Y.default.track(q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Cr.Y.ACCOUNT,
                    friend_anniversary_notifications: e,
                });
        },
        useSearchTerms: () => [g.intl.string(g.t.hi4dSk)],
        usePredicate: () => {
            let { enabled: e, showDmPrompts: t } = Cg.u.getConfig({ location: "FriendAnniversaryNotifications" });
            return e && t;
        },
    }),
    CA = (0, E.mj)({
        kind: "user",
        name: "2026-03-friend-is-online-v3",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 } },
    }),
    Ch = (0, a.zD)(u.X.FRIEND_ONLINE_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.sQQgFj),
        useValue: c.NR.useSetting,
        setValue: function (e) {
            c.NR.updateSetting(e),
                Y.default.track(q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Cr.Y.ACCOUNT,
                    friend_online_notifications: e,
                });
        },
        usePredicate: () => CA.useConfig({ location: "FriendOnlineNotifications" }).showSettingsToggle,
    }),
    CE = (0, E.mj)({
        name: "2026-03-game-update-notification",
        kind: "user",
        defaultConfig: { showToggle: !1 },
        variations: { 0: { showToggle: !1 }, 1: { showToggle: !0 } },
    });
var CS = i(275007);
let CT = (0, a.zD)(u.X.GAME_UPDATE_NOTIFICATIONS, {
    useTitle: () => g.intl.string(CS.default["ZZIP+o"]),
    useValue: c.JV.useSetting,
    setValue: function (e) {
        c.JV.updateSetting(e),
            Y.default.track(q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                update_type: Cr.Y.ACCOUNT,
                game_update_notifications: e,
            });
    },
    usePredicate: () => CE.useConfig({ location: "SettingsRendererConfig" }).showToggle,
});
var Cx = i(571524);
let Cp = (0, a.zD)(u.X.GDM_ALL_REACTION_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.nvkXtr),
        useValue: c.c3.useSetting,
        setValue: function (e) {
            c.c3.updateSetting(e),
                Y.default.track(q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Cr.Y.ACCOUNT,
                    gdm_all_reaction_notifications: e,
                });
        },
        usePredicate: function () {
            return (0, Cx.h)("GdmAllReactionNotification").showSettingsToggle;
        },
    }),
    Cf = (0, a.zD)(u.X.GO_LIVE_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.FSNIvs),
        useValue: c.Yh.useSetting,
        setValue: function (e) {
            c.Yh.updateSetting(e),
                Y.default.track(q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Cr.Y.ACCOUNT,
                    go_live_notifications: e,
                });
        },
    }),
    CN = (0, E.mj)({
        kind: "user",
        name: "2026-01-profile-updates-notification",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 0: { showSettingsToggle: !1 }, 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 } },
    }),
    C_ = (0, a.zD)(u.X.PROFILE_UPDATES_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.xBLMhQ),
        useValue: c.T3.useSetting,
        setValue: function (e) {
            c.T3.updateSetting(e),
                Y.default.track(q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Cr.Y.ACCOUNT,
                    profile_updates_notifications: e,
                });
        },
        usePredicate: () => CN.useConfig({ location: "user_settings.ProfileUpdatesNotifications" }).showSettingsToggle,
    });
var CI = i(815807);
let CC = (0, a.Hn)(u.X.REACTION_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.Wxj9Hp),
        useOptions: () => [
            { id: "enabled", label: g.intl.string(g.t["9x/RtT"]), value: N.Tz.NOTIFICATIONS_ENABLED },
            { id: "only_dms", label: g.intl.string(g.t.fJAbQd), value: N.Tz.ONLY_DMS },
            { id: "disabled", label: g.intl.string(g.t["xu+UDU"]), value: N.Tz.NOTIFICATIONS_DISABLED },
        ],
        useValue: c.Zp.useSetting,
        setValue: (e) => (0, CI.n4)(e, c.Zp.getSetting()),
    }),
    Cb = (0, a.zD)(u.X.SERVER_TRENDING_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t["k51K1+"]),
        useValue: c.Qr.useSetting,
        setValue: function (e) {
            c.Qr.updateSetting(e),
                Y.default.track(q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Cr.Y.ACCOUNT,
                    server_trending_notifications: e,
                });
        },
        usePredicate: () => !1,
    }),
    Cv = (0, E.mj)({
        kind: "user",
        name: "2026-04-upcoming-server-event",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 }, 3: { showSettingsToggle: !0 } },
    }),
    Cy = (0, a.zD)(u.X.UPCOMING_SERVER_EVENT_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.G8NPz6),
        useValue: c.zS.useSetting,
        setValue: function (e) {
            c.zS.updateSetting(e),
                Y.default.track(q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Cr.Y.ACCOUNT,
                    upcoming_server_event_notifications: e,
                });
        },
        usePredicate: () => Cv.useConfig({ location: "UpcomingServerEventNotifications" }).showSettingsToggle,
    }),
    Cj = (0, a.FW)(u.X.NOTIFICATION_SELECTION_FIELD_SET, {
        variant: "compact",
        useTitle: () => g.intl.string(g.t.FEVRDV),
        buildLayout: () => [Cf, Cm, Ch, Cb, Cy, CT, C_, CC, Cp],
    }),
    CO = (0, a.zD)(u.X.TASK_BAR_FLASHING, {
        useTitle: () => g.intl.string(g.t.xSmFQG),
        useSubtitle: () => g.intl.string(g.t.bd4j4x),
        useValue: () => (0, O.bG)([ug.A], () => ug.A.taskbarFlash),
        setValue: (e) => uS.default.setTaskbarFlash(e),
        usePredicate: () => (0, n8.uF)(),
    }),
    CR = (0, a.zZ)(u.X.NOTIFICATIONS_OVERVIEW_CATEGORY, {
        useTitle: () => g.intl.string(g.t["/dp6yY"]),
        buildLayout: () => [Cn, CO, Cj, Co, Cc, Cd],
    });
var CL = i(965957),
    CD = i(312671),
    CP = i(235079);
let CG = (0, a.zD)(u.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let e = um.A.useHolidaySoundpack();
        return null == e ? "" : g.intl.format(g.t["E/OyBr"], { soundpack: g.intl.string(e.soundpackLabel) });
    },
    useValue: function () {
        let e = (0, O.bG)([CD.A], () => CD.A.getSoundpack()),
            t = um.A.useHolidaySoundpack();
        return e === t?.soundpack;
    },
    setValue: function (e) {
        let t = um.A.getHolidaySoundpack();
        tj()(null != t, "predicate should fail if no soundpack is available"), (0, CL.p)(e ? t : CP.i.CLASSIC);
    },
    usePredicate: um.A.useIsEligible,
});
var CU = i(970931);
let CM = {
        useTitle: () => g.intl.string(g.t.jD1qzM),
        sound: "message1",
        useDisabled: CU.kB,
        useDisabledMessage: () => ((0, CU.kB)() ? g.intl.string(g.t.cIRG0s) : void 0),
    },
    CV = { useTitle: () => g.intl.string(g.t.XBrJT6), sound: "call_ringing" },
    Ck = (0, a.zD)(u.X.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.TzjwV9),
        useSubtitle: () => g.intl.format(g.t.OOiGCM, { onClick: () => up("message3") }),
        useValue: () =>
            (0, O.bG)([ug.A], () => ug.A.getNotifyMessagesInSelectedChannel() && !ug.A.getDisableAllSounds()),
        setValue: (e) => uS.default.setNotifyMessagesInSelectedChannel(e),
        useDisabled: () => (0, O.bG)([ug.A], () => ug.A.getDisableAllSounds()),
    }),
    Cw = (0, a.zD)(u.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => g.intl.string(g.t["2ZhCOd"]),
        useSubtitle: () => g.intl.string(g.t.EAKdPr),
        useValue: () => (0, O.bG)([ug.A], () => ug.A.getDisableAllSounds()),
        setValue: (e) => uS.default.toggleDisableAllSounds(e),
    }),
    CB = (0, a.D1)(u.X.NOTIFICATION_SOUNDS_LIST, {
        initialize: function () {
            return () => {
                ux();
            };
        },
        buildLayout: () => [uf(CM), Ck, uf(CV), Cw],
    }),
    CF = (0, a.AK)(u.X.NOTIFICATIONS_TO_VOICE_AND_VIDEO_SOUNDS_NAVIGATOR, {
        useSubtitle: () => g.intl.string(g.t["MMy+lm"]),
        useSearchTerms: () => [g.intl.string(g.t["MMy+lm"])],
        destinationKey: u.X.SOUNDS_CATEGORY,
    }),
    Cz = (0, a.gN)(u.X.NOTIFICATIONS_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [CF] }),
    CY = (0, a.zZ)(u.X.NOTIFICATIONS_SOUNDS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.LweOYy),
        buildLayout: () => [CG, CB, Cz],
    }),
    CX = (0, a.t_)(u.X.NOTIFICATIONS_PANEL, {
        useTitle: () => g.intl.string(g.t.HcoRu0),
        initialize: () => {
            !(0, IJ.Eq)({ location: "NotificationsPanel" }) ||
                null != IQ.A.getAgeGroup() ||
                IQ.A.isLoading() ||
                (IQ.A.canRefetch() && Iq.Ay.initialPageLoad());
        },
        buildLayout: () => [CR, CY, I7, Ci, I6],
    }),
    CH = (0, a.i4)(u.X.NOTIFICATIONS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.HcoRu0),
        icon: IZ.X,
        buildLayout: () => [CX],
    }),
    CK = (0, a.WI)(u.X.USER_SECTION, {
        buildLayout: () => {
            let e = (0, o.Bv)("UserSection");
            return [f7, It, IW, ...(e ? [] : [Ne]), ...(e ? [] : [NG]), CH, NR];
        },
    });
var CW = i(387758),
    CZ = i(271866),
    Cq = i(147964),
    CQ = i(868511);
let CJ = (0, a.zD)(u.X.APPLICATION_TEST_MODE, {
        useTitle: () => g.intl.string(g.t.erOqlh),
        useSubtitle: () => g.intl.string(g.t["52hMnD"]),
        usePredicate: c.Q_.useSetting,
        useValue: () => (0, O.bG)([Cq.A], () => null != Cq.A.testModeApplicationId),
        setValue: (e) => {
            e ? (0, _.openModal)((e) => (0, p.jsx)(CQ.A, { ...e })) : CZ.cL();
        },
    }),
    C$ = (0, a.zD)(u.X.DEVELOPER_MODE, {
        useTitle: () => g.intl.string(g.t.ObIb1Q),
        useSubtitle: () => g.intl.format(g.t["CY6q/Q"], { apiDocsUrl: q.X7G.API_DOCS }),
        useValue: c.Q_.useSetting,
        setValue: c.Q_.updateSetting,
        usePredicate: () => cx.p5,
    }),
    C0 = (0, a.zZ)(u.X.DEVELOPER_CATEGORY, { buildLayout: () => [C$, CJ] }),
    C1 = (0, a.t_)(u.X.DEVELOPER_PANEL, { useTitle: () => g.intl.string(g.t["0BRxRp"]), buildLayout: () => [C0] }),
    C2 = (0, a.i4)(u.X.DEVELOPER_SIDEBAR_ITEM, {
        icon: CW.G,
        useTitle: () => g.intl.string(g.t["0BRxRp"]),
        buildLayout: () => [C1],
    });
var C3 = i(70688),
    C6 = i(830215);
let C4 = (0, a.i4)(u.X.LOGOUT_SIDEBAR_ITEM, {
        variant: "destructive",
        useTitle: () => g.intl.string(g.t["2jxGer"]),
        icon: C3.o,
        onClick: () => {
            (0, n9.A)({
                title: g.intl.string(g.t["2jxGer"]),
                subtitle: g.intl.string(g.t.SUnWBB),
                confirmText: g.intl.string(g.t["2jxGer"]),
                onConfirm: () => {
                    C6.A.logout("settings");
                },
            });
        },
        buildLayout: () => [],
    }),
    C7 = (0, a.WI)(u.X.UTILITY_SECTION, { buildLayout: () => [C2, C4] }),
    C5 = (0, a.Hr)({
        buildLayout: function () {
            return [pd, CK, hR, u$, (0, o.Bv)("UserSettingsRoot_buildLayout") ? Sz : iF, EW, C7];
        },
        analyticsKey: "user_settings",
    });
