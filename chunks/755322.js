i.d(t, { D: () => bj });
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
    x = i(21973);
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
    S = (e) => {
        let t = (0, x.lX)(e),
            i = T.useConfig({ location: e });
        return t || i.copyChanges;
    };
var p = i(627968),
    f = i(64700),
    N = i(873298),
    _ = i(192308),
    C = i(365258);
let I = (0, o.Qx)(u.X.ACTIVITY_PRIVACY_PER_GUILD_DEFAULT_SETTING, {
        useTitle: () =>
            S("GuildActivitySharingDefaultSetting") ? g.intl.string(g.t.vpgck1) : g.intl.string(m.default["/LHVbt"]),
        useOptions: function () {
            let e = S("GuildActivitySharingDefaultSetting");
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
                !(0, x.W1)(t) && !T.getConfig({ location: t }).upsell)
            )
                return;
            let s = (0, C.g8)(n, e);
            if (null == s) return;
            let l = (0, C.Xc)(e);
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
        usePredicate: () => (0, x.lX)("ActivityPrivacyRelatedSettings"),
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
        x = (0, f.useRef)(null),
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
        S = T.find((e) => e.value === l)?.label ?? "";
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
                                    targetElementRef: x,
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
                                            innerRef: x,
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
var ee = i(366189);
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
    ea = i(208963);
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
    ex = i(554146),
    eT = i(131607),
    eS = i(843402),
    ep = i(589051),
    ef = i(592598),
    eN = i(933297),
    e_ = i(351906),
    eC = i(532624),
    eI = i(773371),
    eb = i(184809),
    ev = i(723702),
    ej = i(766075),
    ey = i(999834),
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
        text_notifications_mode: ef.A.isNotificationDisabled(eD.KS.TextChat) ? "DISABLED" : "ENABLED",
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
    eB = i(389128);
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
    e5 = i(964486),
    e7 = i(137177),
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
function tx(e) {
    let { children: t, className: i, onExpand: n, ...s } = e,
        [l, r] = f.useState(!1);
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
let tT = (0, o.E2)(u.X.OVERLAY_CURRENT_GAME, {
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
            { legacyEnabled: E, oopEnabled: x } = (0, O.cf)([tt.default], () => tt.default.getGlobalEnabledStatus()),
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
                        e6.A.setEnabled(t, x), (0, e9.Q3)(t, e9.OverlayToggledClientSettingType.LEGACY, e.id ?? null);
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
            N = !E && !x,
            _ = !a && !E && u && !A,
            C = !u && !x && a && !h,
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
                                    case !x:
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
                    case N:
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
        (0, e5.Ay)(() => {
            e3.Ay.getDetectableGames();
        });
        let [k, F] = f.useMemo(
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
            : (0, p.jsxs)(tx, {
                  onExpand: m,
                  className: c ? eB.tx : void 0,
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
                              ? (0, p.jsx)(e2.k, { size: "xxs", color: F })
                              : (0, p.jsx)("div", { className: eB.W4 }),
                          (0, p.jsx)(V.E, {
                              variant: "text-xs/semibold",
                              color: k,
                              children: g.intl.string(g.t.CDOx3w),
                          }),
                      ],
                  }),
                  icon: (0, p.jsx)(e7.A, { game: t, pid: e?.pid, size: e7.M.MEDIUM }),
                  "aria-label": g.intl.string(g.t["87O5GC"]),
                  action: (0, p.jsx)(M.D, {
                      onClick: (e) => ez(e),
                      children: (0, p.jsx)(L.d, {
                          checked: (a && x) || (u && E),
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
                                          e6.A.setEnabled(t, t), (n = !t && E), (s = !t && x);
                                          break;
                                      case "both":
                                          e6.A.setEnabled(t, t),
                                              e3.Ay.toggleOverlay(e, t, t),
                                              d(t),
                                              o(t),
                                              (n = (!t && E) || (!t && u)),
                                              (s = (!t && x) || (!t && a));
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
                  warning: (0, p.jsx)(td, { className: eB.Hh, game: e }),
                  children: [
                      (0, p.jsx)(eY, {
                          title: g.intl.string(g.t["7BlVIs"]),
                          description: g.intl.string(g.t.ndgADE),
                          hint: x ? void 0 : g.intl.string(g.t.cAFVsL),
                          "aria-label": g.intl.string(g.t["7BlVIs"]),
                          action: (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsx)(L.d, {
                                      checked: a && x,
                                      disabled: h,
                                      onChange: (e) => {
                                          e && !x
                                              ? T(e, e9.OverlayToggledClientSettingType.OOP)
                                              : T(e, e9.OverlayToggledClientSettingType.OOP_GAME);
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
                                              ? T(e, e9.OverlayToggledClientSettingType.LEGACY)
                                              : T(e, e9.OverlayToggledClientSettingType.LEGACY_GAME);
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
    tf = i(871633);
function tN(e) {
    let { game: t, gameApplication: i } = e,
        n = f.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        s = (0, O.bG)([eW.A], () => (null != i ? i : eW.A.getApplication(t?.id)), [i, t]);
    return (0, p.jsx)(e7.A, { game: s, pid: n, size: e7.M.SMALL });
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
                    (0, p.jsx)("div", { className: eB.Kz }),
                ],
            }),
        })
    );
}
let tC = (0, o.E2)(u.X.OVERLAY_LEGACY_SETTING, {
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
                      className: eB.dA,
                      action: (0, p.jsxs)(p.Fragment, {
                          children: [
                              (0, p.jsx)(L.d, { checked: i, disabled: r, onChange: (e) => a(e) }),
                              tp.O && (0, p.jsx)("div", { className: eB.Kz }),
                          ],
                      }),
                  })
                : (0, p.jsxs)(tx, {
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
                      className: eB.dA,
                      action: (0, p.jsxs)(p.Fragment, {
                          children: [
                              (0, p.jsx)(L.d, { checked: i, disabled: s, onChange: (e) => a(e) }),
                              tp.O && (0, p.jsx)("div", { className: eB.Kz }),
                          ],
                      }),
                  })
                : (0, p.jsxs)(tx, {
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
        buildLayout: () => [tT, tI, tC, eX],
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
                t = (0, O.bG)([ef.A], () => ef.A.isNotificationDisabledBySetting(tM.M.NOW_PLAYING));
            return !!e && !t;
        },
    },
];
function tk(e) {
    return (0, o.zD)(e.key, {
        useTitle: () => g.intl.string(e.title),
        useSubtitle: () => g.intl.string(e.description),
        useValue: () => !(0, O.bG)([ef.A], () => ef.A.getDisabledNotifications().has(e.disabledSetting)),
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
let t5 = (0, o.E2)(u.X.OVERLAY_VOICE_WIDGET_PREVIEW, {
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
    t7 = (0, o.zZ)(u.X.OVERLAY_VOICE_WIDGET_CATEGORY, {
        useTitle: () => g.intl.string(g.t.r1TZfh),
        buildLayout: () => [t5, tB, tz, tY, tq],
    });
var t8 = i(49999),
    t9 = i(9025);
function ie() {
    let [e, t] = (0, eT.kn)([ex.M.OVERLAY_OOP_SETTINGS_NUX], void 0, !0);
    return ((0, eg.Ay)(() => () => {
        t(t8.i.AUTO_DISMISS);
    }),
    e !== ex.M.OVERLAY_OOP_SETTINGS_NUX)
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
                ef.A.addChangeListener(eG),
                eb.default.addChangeListener(eG),
                eI.default.addChangeListener(eG),
                ev.isPlatformEmbedded && (0, eS.a2)(),
                () => {
                    eC.Ay.removeChangeListener(eG),
                        ef.A.removeChangeListener(eG),
                        eb.default.removeChangeListener(eG),
                        eI.default.removeChangeListener(eG),
                        ev.isPlatformEmbedded && (0, eS.e0)();
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
        buildLayout: () => [tb, tU, t7, tF],
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
    ix = i(150717),
    iT = i(653307);
let iS = (0, ev.isWindows)();
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
        [E, x] = f.useState(h ?? "???"),
        T = ew()(iT.tR, {
            [ix.LO]: !n,
            [ix.Rw]: n,
            [ix.FB]: null != o && n,
            [ix.xL]: r,
            [ix.fG]: null != l && l.length > 0,
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
    let N = null != c && (0, eQ.Es)(o) === (0, eQ.Es)(c),
        C = (null != a && a.id === c?.id) || N || (null != l && l.some((e) => e.id === c?.id));
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsxs)("div", {
                className: T,
                children: [
                    (0, p.jsxs)("div", {
                        className: ew()(ix.$K, iT.Vd),
                        children: [
                            o.verified && !s
                                ? (0, p.jsxs)("div", {
                                      className: ix.HS,
                                      children: [
                                          (0, p.jsx)("div", { className: ix.mO, children: h }),
                                          (0, p.jsx)(e0.m, {
                                              text: g.intl.string(g.t["4PJP5p"]),
                                              children: (0, p.jsx)(e8.A, {
                                                  className: ix.qf,
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
                                      className: ew()(ix.mO, ix.sr),
                                      type: "text",
                                      maxLength: 128,
                                      value: E,
                                      onBlur: function () {
                                          o.name !== E && e3.Ay.editName(o, E);
                                      },
                                      onKeyDown: function (e) {
                                          e.key === iE.dh.ENTER && (e.currentTarget.blur(), e.preventDefault());
                                      },
                                      onChange: (e) => x(e.target.value),
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
                                        className: ix.GN,
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
                              className: ew()(iT.tR, iT.oA, iT.LT, ix.E3),
                              children: (0, p.jsx)(e0.m, {
                                  text: g.intl.string(g.t["y0B+lo"]),
                                  children: (0, p.jsx)(M.D, {
                                      "aria-label": g.intl.string(g.t["y0B+lo"]),
                                      className: ix.ym,
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
                                          className: ix.Lj,
                                          colorClass: ix.GS,
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
                                          className: ix.Lj,
                                          colorClass: ix.GS,
                                      })
                                    : (0, p.jsx)(ig.G, {
                                          size: "md",
                                          color: "currentColor",
                                          className: u ? ix.$V : ix.zN,
                                          colorClass: ix.GS,
                                      });
                        return (0, p.jsx)("div", {
                            className: ew()(iT.tR, iT.oA, iT.LT, ix.E3),
                            children: (0, p.jsx)(e0.m, {
                                text: g.intl.string(g.t.QmitzM),
                                children: u
                                    ? (0, p.jsx)(M.D, {
                                          "aria-label": g.intl.string(g.t.QmitzM),
                                          className: ix.ym,
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
                                      className: ix.Lj,
                                      colorClass: ix.GS,
                                  })
                                : (0, p.jsx)(id.n, {
                                      size: "md",
                                      color: "currentColor",
                                      className: ix.$V,
                                      colorClass: ix.GS,
                                  }),
                            n = t
                                ? (0, p.jsx)(e0.m, {
                                      text: g.intl.string(g.t.Vfw2L5),
                                      children: (0, p.jsx)("i", { className: ix.kb }),
                                  })
                                : null;
                        return (0, p.jsxs)("div", {
                            className: ew()(iT.tR, iT.oA, iT.LT, ix.E3),
                            children: [
                                n,
                                (0, p.jsx)(e0.m, {
                                    text: g.intl.string(g.t["1+O+Tu"]),
                                    children: (0, p.jsx)(M.D, {
                                        "aria-label": g.intl.string(g.t["1+O+Tu"]),
                                        className: ix.ym,
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
                              className: ix.LS,
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
                    className: ix.AQ,
                    children: l.map((e, t) =>
                        (0, p.jsxs)(
                            f.Fragment,
                            {
                                children: [
                                    (0, p.jsx)(ip, { rawGame: e, isOverride: !1, isSubgame: !0, parentGame: o }),
                                    t !== l.length - 1 && (0, p.jsx)("div", { className: ix.PQ }),
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
    f.useEffect(() => ((0, eS.a2)(), eS.e0), []);
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
            (0, p.jsx)(eE.c, { className: ew()(iC.Ot, iC.QB) }),
            (0, p.jsxs)("div", {
                className: ew()(iL.o, iT.xM),
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
var iG = i(564206);
let iU = (0, o.E2)(u.X.REGISTERED_GAMES_ADD_GAME_SETTING, {
    useSearchTerms: () => [g.intl.string(g.t.GTCx0p)],
    Component: () => {
        let e = f.useRef(null);
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
        className: ew()(iT.tR, ix.eS, ix.Rw),
        children: (0, p.jsxs)("div", {
            className: ew()(ix.$K, iT.Vd),
            children: [
                (0, p.jsx)("div", { className: ix.mO, children: g.intl.string(g.t.H68X9x) }),
                (0, p.jsx)("div", { className: ix.GN, children: g.intl.string(g.t.T5Ilmw) }),
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
    i0 = i(382677);
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
var i6 = i(856488);
let i4 = (0, o.zD)(u.X.ENABLE_LEGACY_CHAT_INPUT, {
        useTitle: () => g.intl.string(g.t.TZ2hZH),
        useSubtitle: () => g.intl.string(g.t.Q7wgHc),
        useValue: () => c.D_.useSetting(),
        setValue: (e) => c.D_.updateSetting(e),
    }),
    i5 = (0, o.zD)(u.X.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS, {
        useTitle: () => g.intl.string(g.t.XYvMIX),
        useSubtitle: () => g.intl.string(g.t.T0rbtM),
        useValue: c._z.useSetting,
        setValue: c._z.updateSetting,
    });
var i7 = i(100767),
    i8 = i(106236),
    i9 = i(113494),
    ne = i(782134),
    nt = i(54570),
    ni = i(8880),
    nn = i(75804);
let ns = eR().debounce((e) => {
    (0, nt.zU)(e);
}, 250);
function nl() {
    let [e, t] = f.useState(!1);
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
                    (0, p.jsx)(i8.A, {
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
        usePredicate: () => i7.$j,
    }),
    na = (0, o.zZ)(u.X.AUDIO_AND_SCREEN_READER_CATEGORY, {
        useTitle: () => g.intl.string(g.t.XVR0Rb),
        buildLayout: () => [nr, i5, i4],
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
            { badgeType: eN.Xi.NEW, dismissibleContent: ex.M.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE },
        ],
    });
var nE = i(406360),
    nx = i(742023);
let nT = (0, o.Qx)(u.X.HIGH_DYNAMIC_RANGE, {
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
            return (0, nE.i)("HDRDynamicRangeSetting");
        },
        setValue: function (e) {
            (0, nd.FU)(e);
        },
        useValue: function () {
            return (0, O.bG)([nx.Ay], () => nx.Ay.hdrDynamicRange);
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
var nf = i(839214),
    nN = i(502229);
let n_ = (0, nf.D)(() => ({ syncEnabled: null, updateTimeout: null })),
    nC = (0, o.zD)(u.X.SYNC_FORCED_COLORS, {
        useTitle: () => g.intl.string(g.t.cguiec),
        useSubtitle: () => g.intl.format(g.t.GwEVE2, { learnMoreLink: ta.A.getArticleURL(q.MVz.FORCED_COLORS) }),
        useValue: () => {
            let e = (0, O.bG)([iW.A], () => iW.A.syncForcedColors);
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
    nI = (0, o.zZ)(u.X.COLOR_AND_CONTRAST_CATEGORY, {
        useTitle: () => g.intl.string(g.t.JqvyiY),
        buildLayout: () => [np, nc, nh, nm, nC, nT, nS, nA, nu],
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
            { name: g.intl.string(g.t["7iegX4"]), value: N.NS.COMPACT },
            { name: g.intl.string(g.t.bBvAEH), value: N.NS.DEFAULT },
            { name: g.intl.string(g.t["4cuYHx"]), value: N.NS.COZY },
        ],
        useValue: () => c.Xi.useSetting(),
        setValue: (e) => {
            e !== N.NS.UNSET_UI_DENSITY && c.Xi.updateSetting(e);
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
            type: eN.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                let e = c.hH.useSetting(),
                    t = c.jW.useSetting(),
                    i = f.useMemo(
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
    n5 = i(269880),
    n7 = i(55619),
    n8 = i(777666),
    n9 = i(574381),
    se = i(314116),
    st = i(19575),
    si = i(546385);
let sn = (0, o.E2)(u.X.HARDWARE_ACCELERATION, {
    usePredicate: () => n9.Av && !(0, n9.cX)(),
    useSearchTerms: () => [g.intl.string(g.t["/HIxyY"]), g.intl.string(g.t.B0hqpb)],
    Component: function () {
        let [e] = f.useState(() => st.Ay.getEnableHardwareAcceleration()),
            t = g.intl.string(g.t["/HIxyY"]),
            i = g.intl.string(g.t.B0hqpb);
        return (0, p.jsxs)(R.B, {
            children: [
                (0, p.jsx)(L.d, { label: t, description: i, checked: e, onChange: ss }),
                !e && (0, p.jsx)(si.A, { look: si.k.WARNING, children: g.intl.string(g.t.j7S6IX) }),
            ],
        });
    },
});
function ss(e) {
    let t = e ? g.intl.format(g.t.LYXRxL, {}) : g.intl.format(g.t.uDP3Kz, {});
    (0, se.A)({
        title: g.intl.string(g.t.aqpAvn),
        subtitle: t,
        confirmText: g.intl.string(g.t.vT7ckk),
        onConfirm: () => {
            st.Ay.setEnableHardwareAcceleration(e);
        },
    });
}
let sl = (0, o.zD)(u.X.SHOW_GAME_LIBRARY, {
        usePredicate: () => (0, O.bG)([tg.A], () => tg.A.hasLibraryApplication()),
        useTitle: () => g.intl.string(g.t.fi3UQN),
        useSubtitle: () => g.intl.string(g.t["8mYp37"]),
        useValue: () => !c.l_.useSetting(),
        setValue: (e) => c.l_.updateSetting(!e),
    }),
    sr = (0, o.zZ)(u.X.APPEARANCE_ADVANCED_CATEGORY, {
        useTitle: () => g.intl.string(g.t["8/udY0"]),
        buildLayout: () => [sn, sl],
    });
var sa = i(565645);
let so = (0, o.zD)(u.X.CHAT_EMOJI_CONVERT_EMOTICONS, {
        useTitle: () => g.intl.string(g.t["79qal8"]),
        useSubtitle: () =>
            g.intl.format(g.t.GejoQK, { emojiHook: (e, t) => (0, p.jsx)(sa.A, { emojiName: "\uD83D\uDE42" }, t) }),
        useValue: c.j7.useSetting,
        setValue: c.j7.updateSetting,
    }),
    su = (0, o.zD)(u.X.ENABLE_SEND_BUTTON, {
        useTitle: () => g.intl.string(g.t["I/5LyL"]),
        useValue: () => (0, O.bG)([iW.A], () => iW.A.isSubmitButtonEnabled),
        setValue: () => (0, nd.Xt)(),
    }),
    sd = (0, o.zD)(u.X.CHAT_TEXT_BOX_PREVIEWS, {
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
    sc = (0, o.zD)(u.X.CHAT_STICKERS_AUTOCOMPLETE, {
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
    sg = (0, o.zZ)(u.X.APPEARANCE_CHAT_BOX_CATEGORY, {
        useTitle: () => g.intl.string(g.t.Ob7VMB),
        useSearchTerms: () => [g.intl.string(g.t.onqU6o)],
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
let sN = (0, o.E2)(u.X.APPEARANCE_IN_APP_ICON, {
    useSearchTerms: () => [g.intl.string(g.t.gnwxvT)],
    Component: function () {
        let e = (0, sS.GV)(),
            { ref: t, ...i } = (0, sx._u)({ orientation: "horizontal", labelledBy: e }),
            n = (0, O.bG)([sm.A], () => sm.A.isUpsellPreview);
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
                    children: (0, p.jsx)(sT.m, { disabled: n, size: sp.N8.SIZE_48 }),
                }),
            })
        );
    },
});
function s_() {
    (0, sA.nf)(sA.HP.APP_ICON), (0, sE.default)();
}
function sC() {
    return (0, p.jsx)(sh.A, {
        subscriptionTier: sf.pe.TIER_2,
        defaultTextOverride: g.intl.string(g.t.mr4K7D),
        premiumModalAnalyticsLocation: { object: q.ZSU.BUTTON_CTA, objectType: q.AnalyticsObjectTypes.BUY },
        fullWidth: !0,
    });
}
let sI = (0, o.zZ)(u.X.APPEARANCE_IN_APP_ICON_CATEGORY, {
        useTitle: () => g.intl.string(g.t.RPh2ou),
        useSubtitle: () => g.intl.string(g.t.IgENJo),
        useHeaderDecoration: function () {
            let e = (0, O.bG)([sm.A], () => sm.A.isUpsellPreview);
            return f.useMemo(() => {
                let t = [];
                return (
                    t.push({
                        id: "preview-icon-button",
                        type: eN.UV.BUTTON,
                        text: g.intl.string(g.t["6acvnZ"]),
                        onClick: s_,
                    }),
                    e && t.push({ id: "upsell-button", type: eN.UV.STRONGLY_DISCOURAGED_CUSTOM, button: sC }),
                    { type: eN.WX.BUTTON_GROUP, buttons: t }
                );
            }, [e]);
        },
        buildLayout: () => [sN],
    }),
    sb = (0, o.AK)(u.X.APPEARANCE_CHAT_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => g.intl.string(g.t.UDr3Iy),
        useSearchTerms: () => [g.intl.string(g.t.UDr3Iy)],
        destinationKey: u.X.ACCESSIBILITY_PANEL,
    }),
    sv = (0, o.gN)(u.X.APPEARANCE_CHAT_RELATED_SETTINGS, { buildLayout: () => [sb] });
var sj = i(379587),
    sy = i(452027),
    sO = i(976860),
    sR = i(474090),
    sL = i(181079),
    sD = i(422258),
    sP = i(668267),
    sG = i(313281),
    sU = i(335993);
let sM = ta.A.getArticleURL(q.MVz.FAVORITES_GUILD);
function sV() {
    let { analyticsLocations: e } = (0, nU.Ay)(eM.A.USER_SETTINGS_FAVORITES),
        t = f.useCallback(() => {
            (0, sP.mv)("settings_page"), (0, sO.uh)(q.YYv), (0, sE.default)();
        }, []);
    return (0, p.jsx)(nU.f5, {
        value: e,
        children: (0, p.jsx)(sy.D, {
            label: g.intl.string(sU.default.OT1NK5),
            description: g.intl.format(sU.default.GR2KOG, { helpCenterLink: sM }),
            layout: "horizontal-responsive",
            badge: "beta",
            children: (0, p.jsxs)(R.B, {
                direction: "horizontal",
                gap: 8,
                fullWidth: !1,
                children: [
                    (0, p.jsx)(eh.$, { variant: "secondary", text: g.intl.string(sU.default["7WwLnr"]), onClick: t }),
                    (0, p.jsx)(sh.A, {
                        subscriptionTier: sf.pe.TIER_2,
                        defaultTextOverride: g.intl.string(sU.default["20sYUU"]),
                    }),
                ],
            }),
        }),
    });
}
let sk = (0, o.E2)(u.X.CHAT_FAVORITES_TOGGLE, {
        usePredicate: () => (0, sj.m)({ location: "FavoritesGuildToggle" }).enabled,
        useSearchTerms: () => [g.intl.string(sU.default.OT1NK5)],
        Component: function () {
            let e = (0, O.bG)([sL.A], () => sL.A.favoriteGuildEnabled),
                t = (0, O.bG)([t3.default], () => {
                    let e = t3.default.getCurrentUser();
                    return null != e && sR.Ay.isPremiumExactly(e, sf.PremiumTypes.TIER_2);
                }),
                i = (0, sG.DZ)(),
                n = f.useCallback(
                    (e) => {
                        (0, sD.tV)(e, "settings_page"), !e && i && (0, sO.pX)(q.BVt.ME);
                    },
                    [i],
                );
            return t
                ? (0, p.jsx)(L.d, {
                      checked: e,
                      description: g.intl.format(sU.default.GR2KOG, { helpCenterLink: sM }),
                      onChange: n,
                      label: g.intl.string(sU.default.OT1NK5),
                      badge: "beta",
                  })
                : (0, p.jsx)(sV, {});
        },
    }),
    sw = (0, o.zD)(u.X.CHAT_INLINE_MEDIA_LINKS, {
        useTitle: () => g.intl.string(g.t.U47N1p),
        useValue: c.hD.useSetting,
        setValue: c.hD.updateSetting,
    }),
    sF = (0, o.zD)(u.X.CHAT_INLINE_MEDIA_UPLOADS, {
        useTitle: () => g.intl.string(g.t.VP11No),
        useValue: c.X6.useSetting,
        setValue: c.X6.updateSetting,
    }),
    sB = (0, o.FW)(u.X.CHAT_INLINE_FIELD_SET, {
        useTitle: () => g.intl.string(g.t["9nyle0"]),
        buildLayout: () => [sw, sF],
    }),
    sz = (0, o.zD)(u.X.CHAT_EMBEDS_RENDER_EMBEDS, {
        useTitle: () => g.intl.string(g.t["5bK9vw"]),
        useValue: c.rs.useSetting,
        setValue: c.rs.updateSetting,
    }),
    sY = (0, o.zD)(u.X.CHAT_EMOJI_RENDER_REACTIONS, {
        useTitle: () => g.intl.string(g.t["zge/fP"]),
        useValue: c.jW.useSetting,
        setValue: c.jW.updateSetting,
    });
var sX = i(817281);
let sH = (0, o.zD)(u.X.APPEARANCE_DISPLAY_COMPACT_AVATARS, {
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
            let e = (0, O.bG)([nx.Ay], () => nx.Ay.displayCompactAvatars);
            return !c.hH.useSetting() || e;
        },
        setValue: (e) => {
            sX.Ay.updatedUnsyncedSettings({ displayCompactAvatars: e });
        },
    }),
    sK = (0, o.Hn)(u.X.CHAT_SPOILERS_SHOW_SPOILERS, {
        useTitle: () => g.intl.string(g.t.QgwmVz),
        useOptions: () => [
            { value: q.P6Q.ON_CLICK, id: q.P6Q.ON_CLICK, label: g.intl.string(g.t["KFH/me"]) },
            { value: q.P6Q.ALWAYS, id: q.P6Q.ALWAYS, label: g.intl.string(g.t.Pe1RbL) },
            { value: q.P6Q.IF_MODERATOR, id: q.P6Q.IF_MODERATOR, label: g.intl.string(g.t.K5VTBE) },
        ],
        useValue: c.gs.useSetting,
        setValue: c.gs.updateSetting,
    }),
    sW = (0, o.zD)(u.X.CHAT_THREADS_SPLIT_VIEW, {
        useTitle: () => g.intl.string(g.t.AInv5m),
        useValue: c.SY.useSetting,
        setValue: c.SY.updateSetting,
    }),
    sZ = (0, o.zZ)(u.X.APPEARANCE_MESSAGES_CATEGORY, {
        useTitle: () => g.intl.string(g.t.OIgYlQ),
        useSearchTerms: () => [g.intl.string(g.t["/VQax8"])],
        buildLayout: () => [sB, sz, sY, sK, sW, sH, sk, sv],
    });
var sq = i(753806),
    sQ = i(145331);
let sJ = (0, o.Qx)(u.X.MESSAGE_SEARCH_DEFAULT_DM_SEARCH_BEHAVIOR, {
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
            t ? sq.A.cleanUpPrivateChannelSearchState() : sq.A.cleanUpSearchState({ type: q.I4_.DMS }),
                (0, sQ._k)({
                    prevIsCrossDMSettingEnabled: c.Hu.getSetting(),
                    isCrossDMSettingEnabled: t,
                    location: sQ.vy.USER_SETTINGS,
                }),
                c.Hu.updateSetting(t);
        },
    }),
    s$ = (0, o.zZ)(u.X.APPEARANCE_SEARCH_CATEGORY, {
        useTitle: () => g.intl.string(g.t["5h0QOP"]),
        buildLayout: () => [sJ],
    }),
    s0 = (0, o.zD)(u.X.STREAMING_AUTO_STREAMER_MODE, {
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
            return n9.Av;
        },
    }),
    s1 = (0, o.zD)(u.X.STREAMING_STREAMER_MODE, {
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
var s2 = i(77729),
    s3 = i(349230);
let s6 = [],
    s4 = (0, o.Hn)(u.X.STREAMER_MODE_HIDE_OVERLAY_WIDGETS, {
        selectionMode: "multiple",
        useTitle: () => g.intl.string(g.t.VCDSLW),
        useSearchTerms: () => [g.intl.string(g.t.VCDSLW)],
        usePredicate: () => {
            let e = (0, ey.b_)(),
                t = (0, ep.Mn)("StreamerModeSettings");
            return e && t;
        },
        useOptions: function () {
            return f.useMemo(() => {
                let e = [];
                for (let [t, i] of Object.entries(s3.A))
                    null != i.streamerModeLabel &&
                        (null == i.predicate || i.predicate()) &&
                        e.push({ id: t, value: t, label: i.streamerModeLabel() });
                return e;
            }, []);
        },
        useValue: function () {
            return (0, O.bG)([e_.A], () => e_.A.getSettings().disabledOverlayWidgets ?? s6);
        },
        setValue: (e) => n7.A.update({ disabledOverlayWidgets: e }),
        closeOnSelect: !1,
        wrapTags: !0,
    }),
    s5 = (0, o.zD)(u.X.STREAMER_MODE_HIDE_PERSONAL_INFORMATION, {
        useTitle: () => g.intl.string(g.t.LSBUGR),
        useValue: () =>
            (0, O.bG)([e_.A], () => {
                let { hidePersonalInformation: e } = e_.A.getSettings();
                return e;
            }),
        setValue: (e) => n7.A.update({ hidePersonalInformation: e }),
    }),
    s7 = (0, o.zD)(u.X.STREAMER_MODE_HIDE_INVITE_LINKS, {
        useTitle: () => g.intl.string(g.t.uWBOri),
        useValue: () =>
            (0, O.bG)([e_.A], () => {
                let { hideInstantInvites: e } = e_.A.getSettings();
                return e;
            }),
        setValue: (e) => n7.A.update({ hideInstantInvites: e }),
    }),
    s8 = (0, o.zD)(u.X.STREAMER_MODE_DISABLE_SOUNDS, {
        useTitle: () => g.intl.string(g.t.OrqYDP),
        useValue: () =>
            (0, O.bG)([e_.A], () => {
                let { disableSounds: e } = e_.A.getSettings();
                return e;
            }),
        setValue: (e) => n7.A.update({ disableSounds: e }),
    }),
    s9 = (0, o.zD)(u.X.STREAMER_MODE_DISABLE_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.sUAbLd),
        useValue: () =>
            (0, O.bG)([e_.A], () => {
                let { disableNotifications: e } = e_.A.getSettings();
                return e;
            }),
        setValue: (e) => n7.A.update({ disableNotifications: e }),
    }),
    le = (0, o.zD)(u.X.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE, {
        useTitle: () => g.intl.string(g.t["iA81+a"]),
        useSubtitle: () => g.intl.string(g.t.P4vj0h),
        useValue: () =>
            (0, O.bG)([e_.A], () => {
                let { enableContentProtection: e } = e_.A.getSettings();
                return e;
            }),
        setValue: (e) => n7.A.update({ enableContentProtection: e }),
        usePredicate: () => s2.A?.window?.supportsContentProtection?.() ?? !1,
    }),
    lt = (0, o.FW)(u.X.STREAMER_MODE_OPTIONS_LIST, {
        variant: "compact",
        useTitle: () => g.intl.string(g.t.xYhOEh),
        buildLayout: () => [s5, s7, s8, s9, le, s4],
    }),
    li = (0, o.zZ)(u.X.STREAMER_MODE_CATEGORY, {
        useTitle: () => g.intl.string(g.t.S5GfOW),
        buildLayout: () => [s1, s0, lt],
    });
var ln = i(47671),
    ls = i(665267),
    ll = i(414133),
    lr = i(412848);
let la = (0, o.Hn)(u.X.APPEARANCE_GUILD_THEME_DEFAULT_PREFERENCE, {
        useTitle: () => g.intl.string(g.t.Q7mm4g),
        useSearchTerms: () => [g.intl.string(lr.default["/6NbRv"])],
        useOptions: () => [
            { id: "guild", label: g.intl.string(g.t["hrS/Pc"]), value: N.tI.GUILD },
            { id: "personal", label: g.intl.string(g.t.mlvXIq), value: N.tI.PERSONAL },
        ],
        useValue: () => c.zY.useSetting(),
        setValue: c.zY.updateSetting,
        usePredicate: () => (0, ll.OS)("GuildThemeDefaultPreferenceSetting"),
    }),
    lo = (0, o.zD)(u.X.SYNC_PROFILE_THEMES, {
        useTitle: () => g.intl.string(g.t.C00w4l),
        useValue: () => (0, O.bG)([iW.A], () => iW.A.syncProfileThemeWithUserTheme),
        setValue: () => (0, nd.M1)(),
    });
var lu = i(284016);
let ld = (0, o.zD)(u.X.APPEARANCE_SYNC_THEME, {
    useTitle: () => g.intl.string(g.t["/B+kEV"]),
    useSearchTerms: () => [g.intl.string(g.t.Ksh3ik)],
    useValue: function () {
        return (0, O.bG)([lu.A], () => !1 !== lu.A.shouldSync("appearance"));
    },
    setValue: function (e) {
        var t;
        let i = iu.A.theme,
            n = ln.A.gradientPreset?.id ?? null,
            s = c.eh.getSetting()?.customUserThemeSettings != null;
        (t = q.HAw.SYNC_ACROSS_CLIENTS_TOGGLED),
            n6.h.dispatch({
                type: "TRACK",
                event: t,
                properties: { is_sync_enabled: e, base_theme: i, client_theme: n, has_custom_theme: s },
            }),
            sX.Ay.setShouldSyncAppearanceSettings(e);
    },
});
var lc = i(98596);
let lg = (0, o.AK)(u.X.APPEARANCE_THEME_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => g.intl.string(g.t.nhVQDJ),
        useSearchTerms: () => [g.intl.string(g.t.nhVQDJ)],
        destinationKey: u.X.ACCESSIBILITY_PANEL,
    }),
    lm = (0, o.gN)(u.X.APPEARANCE_THEME_RELATED_SETTINGS, { buildLayout: () => [lg] }),
    lA = (0, o.zZ)(u.X.APPEARANCE_THEME_CATEGORY, {
        useTitle: () => g.intl.string(g.t.Ksh3ik),
        useInlineNotice: function () {
            return (0, O.bG)([iW.A], () => iW.A.useForcedColors)
                ? {
                      type: eN.lT.INLINE_NOTICE,
                      noticeType: "info",
                      useText: () =>
                          (0, nN.D)()
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
            return (0, O.bG)([ln.A, iW.A], () => iW.A.useForcedColors || ln.A.isPreview)
                ? null
                : {
                      type: eN.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "open-client-themes-button",
                              type: eN.UV.BUTTON,
                              text: g.intl.string(g.t["E+COuA"]),
                              onClick: ls.J3,
                          },
                      ],
                  };
        },
        buildLayout: () => [lc.k, ld, lo, la, lm],
    }),
    lh = (0, o.t_)(u.X.APPEARANCE_PANEL, {
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
        buildLayout: () => [lA, sI, sZ, sg, s$, li, sr],
    }),
    lE = [
        { badgeType: eN.Xi.NEW, dismissibleContent: ex.M.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE },
        {
            badgeType: eN.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: ex.M.FAVORITES_GUILD_NEW_BADGE,
            StronglyDiscouragedCustomComponent: function () {
                return (0, p.jsx)(n8.JI, { text: g.intl.string(g.t.y2b7CA) });
            },
        },
    ],
    lx = (0, o.i4)(u.X.APPEARANCE_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["iHH+ky"]),
        icon: n2.B,
        useMenu: function () {
            let e,
                t,
                i,
                n = (0, n5.A)(),
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
    lv = i(235058),
    lj = i(364094);
function ly(e) {
    let { game: t, application: i } = e;
    return null == t || null == i
        ? (0, p.jsx)("div", {
              className: lj.zc,
              children: (0, p.jsx)(lb.E, { size: "sm", color: w.A.colors.TEXT_FEEDBACK_WARNING }),
          })
        : (0, p.jsxs)("div", {
              className: lj.nt,
              children: [
                  (0, p.jsx)(e7.A, { game: i, pid: t.pid, size: e7.M.MEDIUM }),
                  (0, p.jsx)("div", {
                      className: lj.Am,
                      children: (0, p.jsx)(lb.E, { size: "sm", color: w.A.colors.TEXT_FEEDBACK_WARNING }),
                  }),
              ],
          });
}
function lO(e) {
    let t = (0, O.bG)([lv.Ay], () => lv.Ay.getMode()),
        { runningGame: i, runningGameApplication: n } = e$();
    null == i || i.elevated || ((i = void 0), (n = void 0));
    let s = (0, to.NP)(),
        l = s && null != i && t === q.TBI.PUSH_TO_TALK;
    return { canPrompt: "voice" === e ? l : s, runningGame: i, runningGameApplication: n };
}
function lR(e) {
    let { className: t, sourcePage: i } = e,
        { canPrompt: n, runningGame: s, runningGameApplication: l } = lO(i);
    return n
        ? (0, p.jsxs)("div", {
              className: ew()(lj.kL, t),
              children: [
                  (0, p.jsx)(ly, { game: s, application: l }),
                  (0, p.jsxs)("div", {
                      className: lj.FS,
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
    return (0, p.jsx)("div", {
        className: lz.i1,
        children: (0, p.jsx)(V.E, {
            variant: "text-md/medium",
            color: "text-muted",
            className: lz.GN,
            children: g.intl.string(g.t.zHjCd1),
        }),
    });
}
function lW(e) {
    let { keybind: t, className: i } = e,
        n = f.useRef(t);
    f.useEffect(() => {
        n.current = t;
    });
    let [s, l] = f.useState(t.params?.channelId ?? void 0),
        r = f.useCallback(() => {
            (0, _.openModalLazy)(
                async () => (e) =>
                    (0, p.jsx)(lZ, {
                        ...e,
                        onSelect: (e) => {
                            l(e), tO.A.setKeybind({ ...n.current, params: { channelId: e } });
                        },
                    }),
            );
        }, []);
    return (0, p.jsx)("div", {
        className: ew()(lz.a8, i),
        children: (0, p.jsx)(sy.D, {
            label: g.intl.string(g.t.q4JpM8),
            children: (0, p.jsxs)(lM.A, {
                align: lM.A.Align.STRETCH,
                children: [
                    (0, p.jsx)("div", { className: lz.$X, children: (0, p.jsx)(lq, { channelId: s }) }),
                    (0, p.jsx)(lM.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, p.jsx)(eh.$, { variant: "primary", text: g.intl.string(g.t.Dm8O4e), onClick: r }),
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
                [a, o] = f.useState(lU),
                u = f.useCallback((e, t) => {
                    "" === (t = t.trim()).trim() ? o(lU) : o(e);
                }, []);
            f.useEffect(
                () =>
                    lP.A.addRouteChangeListener(() => {
                        r("");
                    }),
                [],
            );
            let [d] = f.useState(() => new lG.A(u, i, void 0, n));
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
        })({ visible: !0, autocompleterResultTypes: lX, autocompleterBeforeCreateSearchContext: lH }),
        c =
            ((t = "" !== o),
            (i = (0, O.yK)([lw.Ay, lk.A, lF.A], () => {
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
        x =
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
                          let n = null != i.parent_id ? lk.A.getChannel(i.parent_id) : void 0,
                              r = H.A.getGuild(i.guild_id);
                          return (0, p.jsx)(
                              lV.c3,
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
                                      null != r ? (0, p.jsx)("div", { className: lz.J5, children: r.name }) : null,
                              },
                              i.id,
                          );
                      },
                      sectionHeight: 0,
                      rowHeight: 34,
                  }
                : { sections: [1], renderRow: () => (0, p.jsx)(lK, {}), sectionHeight: 0, rowHeight: 52 };
    return (0, p.jsx)(lL.Modal, {
        transitionState: n,
        onClose: s,
        title: g.intl.string(g.t.Dm8O4e),
        subtitle: g.intl.string(g.t.q4JpM8),
        actions: void 0,
        input: (0, p.jsx)(lD.k, {
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
        listProps: x,
    });
}
function lq(e) {
    let { channelId: t } = e,
        {
            channel: i,
            category: n,
            guild: s,
        } = (0, O.cf)([lk.A, H.A], () => {
            let e = null != t ? lk.A.getChannel(t) : void 0;
            return null != e
                ? {
                      channel: e,
                      category: null != e.parent_id ? lk.A.getChannel(e.parent_id) : void 0,
                      guild: null != e.guild_id ? H.A.getGuild(e.guild_id) : void 0,
                  }
                : { channel: void 0, category: void 0, guild: void 0 };
        });
    return null == i
        ? (0, p.jsx)(V.E, {
              variant: "text-md/medium",
              color: "text-muted",
              className: lz.GN,
              children: g.intl.string(g.t["/fYIK7"]),
          })
        : (0, p.jsx)(lV.c3, {
              channel: i,
              id: i.id,
              category: n,
              onClick: lY,
              onFocus: lY,
              onMouseEnter: lY,
              focused: !1,
              children: null != s ? (0, p.jsx)("div", { className: lz.J5, children: s.name }) : null,
          });
}
function lQ(e) {
    let { className: t, children: i } = e;
    return (0, p.jsx)("div", { className: t, children: (0, p.jsx)(R.B, { gap: 16, children: i }) });
}
var lJ = i(734066),
    l$ = i(880144),
    l0 = i(614455);
function l1() {
    let e = (0, O.bG)([eC.Ay], () => eC.Ay.getState()),
        t = (0, O.bG)([lv.Ay], () => (0, l$.A)(lv.Ay)),
        i = (0, O.bG)([l0.A], () => l0.A.isSupported),
        n = (0, lJ.sw)(),
        s = (0, lJ.BW)(),
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
                    ((0, ev.isWindows)() || lv.Ay.getUseSystemScreensharePicker()) &&
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
var l2 = i(581133);
function l3(e) {
    let { children: t } = e;
    return t([lI.Q_.MESSAGE, lI.Q_.NAVIGATION, lI.Q_.DND, lI.Q_.CHAT, lI.Q_.VOICE_AND_VIDEO, lI.Q_.MISCELLANEOUS]);
}
class l6 extends f.PureComponent {
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
                    className: l2.qD,
                    children: this.props.keybindDescriptions[e.action],
                });
    }
    render() {
        let { managed: e, enabled: t } = this.props.keybind;
        return (0, p.jsxs)("div", {
            className: l2.YI,
            children: [
                (0, p.jsxs)("div", {
                    className: l2.PO,
                    children: [
                        (0, p.jsx)("div", {
                            className: l2.AS,
                            children: (0, p.jsx)(lS.l, {
                                selectionMode: "single",
                                label: g.intl.string(g.t.UUpAD6),
                                value: this.props.keybind.action,
                                options: this.props.keybindActionTypes,
                                onSelectionChange: this.handleActionChanged,
                                disabled: e,
                            }),
                        }),
                        (0, p.jsx)("div", {
                            className: l2.AS,
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
                                className: l2.d9,
                                children: (0, p.jsx)(lp.K, {
                                    variant: "icon-only",
                                    onClick: this.handleDeleteKeybind,
                                    icon: lf.u,
                                    "aria-label": g.intl.string(g.t.qEHmmB),
                                }),
                            }),
                        (0, p.jsx)("div", {
                            className: l2.ZW,
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
        return e === q.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, p.jsx)(lW, { keybind: this.props.keybind }) : void 0;
    }
}
class l4 extends f.PureComponent {
    handleAddKeybind = () => {
        tO.A.addKeybind();
    };
    renderKeybinds(e, t, i) {
        return e.map((n, s) =>
            (0, p.jsxs)(
                f.Fragment,
                {
                    children: [
                        (0, p.jsx)(l6, { keybind: n, keybindDescriptions: t, keybindActionTypes: i }, n.id),
                        s !== e.length - 1 ? (0, p.jsx)(eE.c, {}) : null,
                    ],
                },
                n.id,
            ),
        );
    }
    renderKeybindWarning() {
        return (0, p.jsxs)("div", {
            className: l2.$e,
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
                (0, p.jsx)(lQ, {
                    className: iC.IE,
                    children: ev.isPlatformEmbedded
                        ? (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsxs)("div", {
                                      className: l2.OQ,
                                      children: [
                                          this.renderKeybindWarning(),
                                          (0, p.jsx)("div", {
                                              className: l2.c9,
                                              children: (0, p.jsx)(eh.$, {
                                                  size: "md",
                                                  onClick: this.handleAddKeybind,
                                                  text: g.intl.string(g.t.zk6Xbs),
                                                  variant: "primary",
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, p.jsx)(lR, { className: l2.Qo, sourcePage: "keybinds" }),
                                  e.length > 0 &&
                                      (0, p.jsxs)(p.Fragment, {
                                          children: [(0, p.jsx)(eE.c, {}), this.renderKeybinds(e, i, t)],
                                      }),
                                  (0, p.jsx)(eE.c, {}),
                              ],
                          })
                        : (0, p.jsx)(tr.p, {
                              messageType: tr.Y.INFO,
                              className: l2.Ly,
                              children: g.intl.format(g.t.mPi3F3, { downloadLink: q.X7G.DOWNLOAD }),
                          }),
                }),
                (0, p.jsx)(l5, {}),
            ],
        });
    }
}
function l5(e) {
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
                    className: l2.jh,
                    children: (0, p.jsxs)("div", {
                        className: l2.yZ,
                        children: [
                            (0, p.jsx)(V.E, { variant: "text-md/normal", children: g.intl.string(g.t.sMWLBj) }),
                            (0, p.jsx)("div", {
                                className: l2.DM,
                                children: (0, p.jsx)(l_.e, { shortcut: lC.z.binds["0"], className: l2.LE }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, p.jsx)(l3, {
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
                                        className: l2.jh,
                                        children: l.map((e, t) =>
                                            (0, p.jsxs)(
                                                f.Fragment,
                                                {
                                                    children: [
                                                        0 !== t && (0, p.jsx)(eE.c, {}),
                                                        (0, p.jsxs)("div", {
                                                            className: l2.yZ,
                                                            children: [
                                                                (0, p.jsx)(V.E, {
                                                                    variant: "text-md/normal",
                                                                    children: e.description,
                                                                }),
                                                                (0, p.jsx)("div", {
                                                                    className: l2.DM,
                                                                    children: e.binds.map((e) =>
                                                                        (0, p.jsx)(
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
let l7 = (0, o.E2)(u.X.KEYBINDS_SETTING, {
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
            let e = l1();
            return (0, p.jsx)(l4, { ...e });
        },
        useSearchTerms: () => [g.intl.string(g.t.T9DA2K)],
    }),
    l8 = (0, o.zZ)(u.X.KEYBINDS_CATEGORY, { buildLayout: () => [l7] }),
    l9 = (0, o.t_)(u.X.KEYBINDS_PANEL, { useTitle: () => g.intl.string(g.t.T9DA2K), buildLayout: () => [l8] }),
    re = (0, o.i4)(u.X.KEYBINDS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.T9DA2K),
        icon: lT.F,
        buildLayout: () => [l9],
    });
var rt = i(37646),
    ri = i(434404);
let rn = (0, o.t_)(u.X.LANGUAGE_AND_TIME_PANEL, {
        useTitle: () => g.intl.string(g.t.KyFVyi),
        buildLayout: () => [ri.F],
    }),
    rs = (0, o.i4)(u.X.LANGUAGE_AND_TIME_SIDEBAR_ITEM, {
        icon: rt.U,
        useTitle: () => g.intl.string(g.t.KyFVyi),
        buildLayout: () => [rn],
    }),
    rl = (0, nf.D)(() => ({ openOnStartup: !0, startMinimized: !1, minimizeToTray: !0 }));
async function rr() {
    let e = await st.Ay.getOpenOnStart(),
        t = await st.Ay.getSetting("START_MINIMIZED", !1),
        i = await st.Ay.getSetting("MINIMIZE_TO_TRAY", !0);
    rl.setState({ openOnStartup: e, startMinimized: t, minimizeToTray: i });
}
let ra = (0, o.zD)(u.X.OS_OPEN_ON_STARTUP, {
        useTitle: () => g.intl.string(g.t["3BeZti"]),
        usePredicate: () => n9.Av && !(0, n9.cX)(),
        useValue: () => rl.useState((e) => e.openOnStartup),
        setValue: function (e) {
            rl.setState({ openOnStartup: e }), st.Ay.send("TOGGLE_OPEN_ON_STARTUP", e);
        },
        initialize: () => {
            st.Ay.getOpenOnStart().then((e) => rl.setState({ openOnStartup: e }));
        },
    }),
    ro = (0, o.zD)(u.X.OS_MINIMIZE_TO_TRAY, {
        useTitle: () => g.intl.string(g.t.dJ5MUh),
        useSubtitle: () => g.intl.string(g.t.nQavHr),
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
let rc = new Set(["failure", "unknown"]),
    rg = (0, o.E2)(u.X.OS_SYSTEM_SERVICE, {
        useSearchTerms: () => [g.intl.string(g.t.roHq80)],
        Component: function () {
            let [e, t] = f.useState(!1),
                [i, n] = f.useState(() => (0, to.TC)()),
                s = (0, iz.ri)("SystemService"),
                l = (0, O.bG)([eQ.Ay], () => eQ.Ay.getSystemServiceStatus("input-service")),
                r = f.useCallback(async () => {
                    t(!0),
                        i ? await (0, to.z8)("windows-settings") : await (0, to.sL)("windows-settings"),
                        t(!1),
                        n((0, to.TC)());
                }, [i]),
                a = "running" === l.state;
            return (0, p.jsxs)("div", {
                className: ru.q,
                children: [
                    (0, p.jsxs)("div", {
                        className: ru.L,
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
                                                            : rc.has(l.state)
                                                              ? "text-feedback-critical"
                                                              : "text-feedback-warning",
                                                    children: rd(l),
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
                                        : g.intl.format(g.t["5Rlr0b"], { status: rd(l) }),
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
    rm = (0, o.zZ)(u.X.LINUX_CATEGORY, {
        buildLayout: () => [ra, ro, rg],
        initialize: () => {
            rr();
        },
    }),
    rA = (0, o.t_)(u.X.LINUX_PANEL, { useTitle: () => g.intl.string(g.t["7pPjTW"]), buildLayout: () => [rm] }),
    rh = (0, o.i4)(u.X.LINUX_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["7pPjTW"]),
        icon: e2.k,
        usePredicate: () => ev.isPlatformEmbedded && (0, ev.isLinux)(),
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
        A = m ? M.D : "div";
    return (0, p.jsxs)(A, {
        className: ew()(rL.kL, m && rL.b),
        onClick: () => {
            m && o();
        },
        children: [
            (0, p.jsx)("div", {
                className: rL.zc,
                children: (0, p.jsx)(rR.A, { achievementId: t, size: rR.A.Sizes.SIZE_40, unlocked: s }),
            }),
            (0, p.jsxs)("div", {
                className: rL.VW,
                children: [
                    null != i &&
                        (0, p.jsx)(V.E, {
                            variant: "text-xxs/semibold",
                            color: "text-muted",
                            className: rL.YR,
                            children: (0, rO.mk)(g),
                        }),
                    (0, p.jsx)(V.E, { variant: "text-md/medium", color: d, children: l() }),
                    (0, p.jsx)(V.E, { variant: "text-xs/normal", color: c, children: u ? "?????" : r() }),
                ],
            }),
        ],
    });
}
var rP = i(885959);
function rG(e) {
    let { onBackClick: t } = e,
        i = (0, O.bG)([rv.A], () => rv.A.getAllUnlockedAchievements()),
        n = f.useMemo(() => Object.values(i).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [i]),
        s = f.useMemo(
            () =>
                Object.values(rC.l0)
                    .filter(t6.Vq)
                    .filter((e) => null == i[e.id])
                    .sort((e, t) => e.rarity - t.rarity),
            [i],
        );
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsxs)(M.D, {
                onClick: t,
                className: rP.vv,
                children: [
                    (0, p.jsx)(rb.A, { direction: rb.A.Directions.LEFT, className: rP.Kk }),
                    (0, p.jsx)(V.E, {
                        variant: "text-lg/normal",
                        color: "text-default",
                        children: g.intl.string(g.t["13/7kX"]),
                    }),
                ],
            }),
            (0, p.jsxs)("div", {
                className: rP.N1,
                children: [
                    (0, p.jsxs)("div", {
                        className: rP.if,
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
                        className: rP.nr,
                        children: (0, p.jsx)(rx.O, {
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
                    className: rP.yF,
                    children: (0, p.jsx)("div", {
                        className: rP.Eh,
                        children: n.map((e) => {
                            let { achievementId: t, dateUnlocked: i } = e;
                            return (0, p.jsx)(rD, { achievementId: t, dateUnlocked: i }, t);
                        }),
                    }),
                }),
            s.length > 0 &&
                (0, p.jsxs)("div", {
                    className: rP.yF,
                    children: [
                        (0, p.jsx)("div", {
                            className: rP.if,
                            children: (0, p.jsx)(V.E, {
                                variant: "text-md/bold",
                                color: "text-default",
                                children: g.intl.string(g.t.GFyMg1),
                            }),
                        }),
                        (0, p.jsx)("div", {
                            className: rP.Eh,
                            children: s.map((e) => (0, p.jsx)(rD, { achievementId: e.id }, e.id)),
                        }),
                    ],
                }),
            (0, p.jsx)("div", { className: rP.yF, children: (0, p.jsx)("div", { className: rP.F3 }) }),
        ],
    });
}
var rU = i(224964),
    rM = i(31408),
    rV = i(739347);
let rk = { enabled: !0, combosEnabled: !0, screenshakeEnabled: !1, confettiEnabled: !1 },
    rw = (0, eO.range)(0, 11),
    rF = (0, eO.range)(0, 2.25, 0.25),
    rB = (0, eO.range)(1, 11),
    rz = (0, eO.range)(1, 26),
    rY = { 0: "poggermode_settings_panel", 1: "poggermode_achievements_panel" };
function rX(e) {
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
function rH(e) {
    let { children: t } = e;
    return (0, p.jsx)(V.E, { className: rV.iF, variant: "text-sm/normal", color: "text-default", children: t });
}
function rK(e) {
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
            e || (0, r_._)(rC.sn.DISABLE_POGGERMODE),
                e && (!i || s)
                    ? (0, se.A)({
                          title: s ? g.intl.string(g.t["FxT+p0"]) : g.intl.string(g.t.TAZ4F9),
                          subtitle: s ? g.intl.string(g.t.gmixrx) : g.intl.string(g.t.jN3t3K),
                          confirmText: g.intl.string(g.t.JFfins),
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
                        className: rV.KF,
                        children: g.intl.string(g.t.vd0D81),
                    }),
                    (0, p.jsx)(rH, { children: g.intl.string(g.t.a18Sug) }),
                    (0, p.jsx)(i8.A, {
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
                        className: rV.KF,
                        children: g.intl.string(g.t.sPO3ij),
                    }),
                    (0, p.jsx)(rH, { children: g.intl.string(g.t.xoldVn) }),
                    (0, p.jsx)(i8.A, {
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
            (0, p.jsx)(rX, {
                disabled: a,
                locations: [
                    {
                        location: rM.k.CHAT_INPUT,
                        title: g.intl.string(g.t.elTtyz),
                        description: g.intl.string(g.t.HtKfMi),
                    },
                    {
                        location: rM.k.REACTION,
                        title: g.intl.string(g.t.Ik4VIa),
                        description: g.intl.string(g.t.y4rqK0),
                    },
                    {
                        location: rM.k.MEMBER_USER,
                        title: g.intl.string(g.t.ZXBlAn),
                        description: g.intl.string(g.t["m9RD+c"]),
                    },
                    {
                        location: rM.k.CALL_TILE,
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
function rZ(e) {
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
                        className: rV.KF,
                        children: g.intl.string(g.t.L0oQuh),
                    }),
                    (0, p.jsx)(rH, { children: g.intl.string(g.t["/OOFpL"]) }),
                    (0, p.jsx)(i8.A, {
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
                        className: rV.KF,
                        children: g.intl.string(g.t.UxnnC4),
                    }),
                    (0, p.jsx)(rH, { children: g.intl.string(g.t.CEOEOb) }),
                    (0, p.jsx)(i8.A, {
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
                        onMarkerRender: (e) => (e === rF[rF.length - 1] ? g.intl.string(g.t["4rbMWc"]) : `${100 * e}%`),
                    }),
                ],
            }),
            (0, p.jsx)(rX, {
                disabled: a,
                locations: [
                    {
                        location: rM.uD.CHAT_INPUT,
                        title: g.intl.string(g.t.vUcvPP),
                        description: g.intl.string(g.t.y00OrF),
                    },
                    {
                        location: rM.uD.VOICE_USER,
                        title: g.intl.string(g.t.TcRO54),
                        description: g.intl.string(g.t.YJCxVY),
                    },
                    {
                        location: rM.uD.MENTION,
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
function rQ(e) {
    let { updateSettings: t } = e;
    return (0, p.jsx)(ia.n, {
        label: g.intl.string(g.t.EuXv2q),
        children: (0, p.jsxs)(R.B, {
            gap: 16,
            children: [
                (0, p.jsx)("div", { children: g.intl.string(g.t["1SLnki"]) }),
                (0, p.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: rV.hw,
                    children: (0, p.jsx)(eh.$, {
                        variant: "primary",
                        size: "sm",
                        text: g.intl.string(g.t.qz65yY),
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
    return (0, p.jsxs)(M.D, {
        onClick: () => t(1),
        className: rV.Tq,
        children: [
            (0, p.jsx)("div", {
                className: rV.w1,
                children: (0, p.jsx)(rx.O, { size: "md", color: w.A.unsafe_rawColors.ORANGE_345.css }),
            }),
            (0, p.jsxs)("div", {
                className: rV.qL,
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
            (0, p.jsx)(th._, { size: "custom", color: "currentColor", width: 16, className: rV.nT }),
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
        n = (0, O.cf)([rE.A], () => rE.A.getState()),
        [s, l] = f.useState({ x: 0, y: 0 }),
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
        f.useEffect(
            () => (window.addEventListener("mousemove", o), () => window.removeEventListener("mousemove", o)),
            [],
        ),
        (0, p.jsxs)(R.B, {
            gap: 24,
            children: [
                (0, p.jsx)(rK, { settings: n, updateSettings: a }),
                (0, p.jsx)(rJ, { onChangePage: t }),
                (0, p.jsx)(rZ, { settings: n, updateSettings: a }),
                (0, p.jsx)(rq, { settings: n, updateSettings: a }),
                (0, p.jsx)(rW, { settings: n, updateSettings: a }),
                (0, p.jsx)(rQ, { updateSettings: a }),
            ],
        })
    );
}
let r1 = (e) => (0 === e ? rS.f.LEFT : rS.f.RIGHT),
    r2 = (0, o.E2)(u.X.POGGERMODE_SETTING, {
        Component: function () {
            let [e, t] = f.useState(0),
                [i, n] = f.useState(r1(e)),
                [s, l] = f.useState(!1),
                r = (0, O.bG)([iW.A], () => iW.A.useReducedMotion),
                a = s && !r;
            return (
                f.useEffect(() => {
                    let t = setTimeout(() => {
                        n(r1(e));
                    }, 500);
                    return () => clearTimeout(t);
                }, [e]),
                f.useEffect(() => {
                    (0, rf._)(rY[e]);
                }, [e]),
                f.useEffect(() => {
                    Math.random() > 0.99 && (0, r_._)(rC.sn.VISITOR_100);
                }, []),
                (0, p.jsxs)(p.Fragment, {
                    children: [
                        (0, p.jsx)(rS.A, {
                            className: rV.l3,
                            step: e,
                            direction: i,
                            children: ((e, t, i) => {
                                let n = (e) => () => {
                                    t(e);
                                };
                                switch (e) {
                                    case 0:
                                        return (0, p.jsx)(r0, { onChangePage: n(1), setShowEnableAnimation: i });
                                    case 1:
                                        return (0, p.jsx)(rG, { onBackClick: n(0) });
                                    default:
                                        return null;
                                }
                            })(e, t, l),
                        }),
                        (0, p.jsx)("div", {
                            className: a ? rV.Sr : rV.IP,
                            children: (0, p.jsx)(rT.a, {
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
            g.intl.string(g.t.AtCukI),
            g.intl.string(g.t.mqxwJO),
            g.intl.string(g.t.wVS5Sd),
            g.intl.string(g.t.Xz0ole),
            g.intl.string(g.t["Ax+IoW"]),
            g.intl.string(g.t["6jI0hd"]),
            g.intl.string(g.t.s0KCgF),
        ],
    }),
    r3 = (0, o.zZ)(u.X.POGGERMODE_CATEGORY, { buildLayout: () => [r2] });
var r6 = i(736170);
let r4 = (0, o.t_)(u.X.POGGERMODE_PANEL, { useTitle: () => g.intl.string(g.t.AtCukI), buildLayout: () => [r3] }),
    r5 = (0, o.i4)(u.X.POGGERMODE_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.AtCukI),
        icon: () => (0, p.jsx)("img", { alt: "", src: i(724405), className: r6.$ }),
        usePredicate: () => (0, O.bG)([rE.A], () => rE.A.settingsVisible),
        buildLayout: () => [r4],
    });
var r7 = i(307301);
let r8 = (0, o.zD)(u.X.OS_START_MINIMIZED, {
    useTitle: () => g.intl.string(g.t.GfBL83),
    useSubtitle: () => g.intl.string(g.t.XGyhhc),
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
        i = eL.dI(t.shortcut);
    return nQ.A.hasBind(i)
        ? (0, p.jsx)(y.w, { type: "warning", children: g.intl.string(g.t["7lQlw3"]) })
        : iE.Yy.has(i)
          ? (0, p.jsx)(y.w, {
                type: "warning",
                children: g.intl.format(g.t.MOIaNd, {
                    keyboardNavArticle: ta.A.getArticleURL(q.MVz.KEYBOARD_NAVIGATION),
                }),
            })
          : void 0;
}
function ai(e) {
    let { keybind: t } = e;
    return t.action === q.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, p.jsx)(lW, { keybind: t, className: ae._M }) : null;
}
let an = f.memo(function (e) {
        let { keybind: t, keybindDescriptions: i, keybindActionTypes: n } = e,
            s = f.useCallback((e) => tO.A.setKeybind({ ...t, action: e }), [t]),
            l = f.useCallback((e) => tO.A.setKeybind({ ...t, shortcut: e }), [t]),
            r = f.useCallback(() => tO.A.setKeybind({ ...t, enabled: !t.enabled }), [t]),
            a = f.useCallback(() => tO.A.deleteKeybind(t.id), [t.id]),
            o = f.useId(),
            u = f.useMemo(() => n.find((e) => e.value === t.action)?.label ?? t.action, [t.action, n]);
        return (0, p.jsxs)(R.B, {
            gap: 12,
            direction: "vertical",
            children: [
                (0, p.jsx)(at, { keybind: t }),
                (0, p.jsxs)(R.B, {
                    gap: 40,
                    direction: "horizontal",
                    children: [
                        (0, p.jsxs)("div", {
                            className: ae.f_,
                            children: [
                                (0, p.jsxs)("div", {
                                    className: ae.XI,
                                    children: [
                                        (0, p.jsx)(lS.l, {
                                            selectionMode: "single",
                                            label: g.intl.string(g.t.XH5b12),
                                            value: t.action,
                                            options: n,
                                            onSelectionChange: s,
                                            disabled: t.managed,
                                        }),
                                        (0, p.jsx)(V.E, {
                                            variant: "text-xs/normal",
                                            color: "text-subtle",
                                            children: i[t.action],
                                        }),
                                    ],
                                }),
                                (0, p.jsx)("div", {
                                    className: ae.LE,
                                    children: (0, p.jsx)(sy.D, {
                                        label: g.intl.string(g.t["1La4tC"]),
                                        layout: "vertical",
                                        children: (0, p.jsx)(tR.A, { defaultValue: t.shortcut, onChange: l }),
                                    }),
                                }),
                            ],
                        }),
                        (0, p.jsxs)("div", {
                            className: ae.ne,
                            children: [
                                !t.managed &&
                                    (0, p.jsx)(lp.K, {
                                        variant: "icon-only",
                                        onClick: a,
                                        icon: lf.u,
                                        "aria-label": g.intl.string(g.t.qEHmmB),
                                    }),
                                (0, p.jsx)(e0.m, {
                                    text: g.intl.string(t.enabled ? g.t.pNYGbx : g.t["51DGkH"]),
                                    ariaHidden: !0,
                                    children: (0, p.jsxs)("div", {
                                        children: [
                                            (0, p.jsx)(B.A, {
                                                id: o,
                                                children: g.intl.format(t.enabled ? g.t["myr/Y0"] : g.t.lYhtPO, {
                                                    actionName: u,
                                                }),
                                            }),
                                            (0, p.jsx)(r9.I, { checked: t.enabled, onChange: r, labelledBy: o }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, p.jsx)(ai, { keybind: t }),
            ],
        });
    }),
    as = (0, o.E2)(u.X.CUSTOM_KEYBINDS_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t["069nVT"])],
        Component: function () {
            let { customizableKeybinds: e, keybindDescriptions: t, keybindActionTypes: i } = l1();
            return n9.Av
                ? e.map((n, s) =>
                      (0, p.jsxs)(
                          f.Fragment,
                          {
                              children: [
                                  (0, p.jsx)(an, { keybind: n, keybindDescriptions: t, keybindActionTypes: i }),
                                  s < e.length - 1 ? (0, p.jsx)(eE.c, { gap: 24 }) : null,
                              ],
                          },
                          n.id,
                      ),
                  )
                : null;
        },
    }),
    al = (0, o.E2)(u.X.DEFAULT_KEYBINDS_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t.Lz5KHI)],
        Component: () => (0, p.jsx)(l5, { showHeader: !1 }),
    }),
    ar = (0, o.zZ)(u.X.SYSTEM_GENERAL_CATEGORY, {
        useTitle: () => g.intl.string(g.t.cg6ltt),
        buildLayout: () => [ra, r8, ro],
        usePredicate: () => n9.Av && ((0, n9.uF)() || (0, n9.j9)()),
        initialize: () => {
            rr();
        },
    }),
    aa = (0, o.zZ)(u.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY, {
        useTitle: () => g.intl.string(g.t["069nVT"]),
        useSubtitle: () => g.intl.string(g.t.T4LZVL),
        buildLayout: () => [as],
        initialize: () => (tO.A.enableAll(!1), () => tO.A.enableAll(!0)),
        useInlineNotice: function () {
            return n9.Av
                ? { type: eN.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: () => (0, p.jsx)(lR, { sourcePage: "keybinds" }) }
                : {
                      type: eN.lT.INLINE_NOTICE,
                      noticeType: "info",
                      useText: () => g.intl.format(g.t.mPi3F3, { downloadLink: q.X7G.DOWNLOAD }),
                  };
        },
        useHeaderDecoration: () =>
            n9.Av
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
    ao = (0, o.zZ)(u.X.SYSTEM_DEFAULT_KEYBINDS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.Lz5KHI),
        buildLayout: () => [al],
    }),
    au = (0, o.zZ)(u.X.SYSTEM_HELPER_CATEGORY, {
        useTitle: () => g.intl.string(g.t["+XZgmA"]),
        usePredicate: () => n9.Av && ((0, n9.uF)() || (0, n9.j9)()),
        buildLayout: () => [rg],
    }),
    ad = (0, o.t_)(u.X.SYSTEM_PANEL, {
        useTitle: () => g.intl.string(g.t["VJ/qKo"]),
        buildLayout: () => [ar, aa, ao, au],
    }),
    ac = (0, o.i4)(u.X.SYSTEM_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["VJ/qKo"]),
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
let ap = (0, o.E2)(u.X.CAMERA_BACKGROUND_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t.lZTUPs)],
        usePredicate: aT.A,
        Component: function () {
            let e = (0, aA.p)(),
                t = f.useRef(!1),
                i = (0, O.bG)([lv.Ay], () => lv.Ay.getVideoDeviceId()),
                [n, s] = f.useState((0, ah.i)(t3.default.getCurrentUser())),
                l = f.useRef(n);
            return (
                f.useEffect(
                    () => () => {
                        t.current && (0, aE._C)(l.current);
                    },
                    [],
                ),
                (0, p.jsx)(aS.A, {
                    selectedBackgroundOption: n,
                    onSelectBackgroundOption: (i) => {
                        (t.current = !0), (l.current = i), s(i), (0, ax.gB)(i, { location: e.location }).catch(q.tEg);
                    },
                    currentDeviceId: i,
                })
            );
        },
    }),
    af = (0, o.zD)(u.X.CAMERA_PREVIEW_PREFERENCE, {
        useTitle: () => g.intl.string(g.t["3Ppr1h"]),
        useSubtitle: () => g.intl.string(g.t.WNbX4O),
        useValue: c.bm.useSetting,
        setValue: (e) => {
            c.bm.updateSetting(e), Y.default.track(q.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e });
        },
    });
var aN = i(625841),
    a_ = i(74848),
    aC = i(204050);
let aI = (0, nf.D)(() => ({ previewEnabled: !1 }));
var ab = i(731854);
let av = (0, o.E2)(u.X.CAMERA_SELECTION_SETTING, {
    useSearchTerms: () => [g.intl.string(g.t.FsQ3OR)],
    Component: function () {
        let e = (0, O.bG)([lv.Ay], () => lv.Ay.isVideoAvailable()),
            { id: t } = (0, a_.x5)(ab.oh.VIDEO_INPUT),
            { analyticsLocations: i } = (0, nU.Ay)();
        return (0, p.jsx)(aN.U, {
            label: g.intl.string(g.t.FsQ3OR),
            deviceType: ab.oh.VIDEO_INPUT,
            location: "UserSettingsCameraSelect",
            isDisabled: !e,
            helperText: (0, aC.p)()
                ? g.intl.format(g.t.aJYgRt, {
                      onCameraSettingsClick: () => {
                          aI.setState({ previewEnabled: !1 }),
                              window.open((0, aC.i)(t)),
                              Y.default.track(q.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: i });
                      },
                  })
                : void 0,
        });
    },
});
var aj = i(745317),
    ay = i(886964);
let aO = (0, o.E2)(u.X.CAMERA_VIDEO_PREVIEW, {
        useSearchTerms: () => [g.intl.string(g.t.JIf4v7)],
        Component: function () {
            let e = lv.Ay.getCameraComponent(),
                t = (0, O.bG)([lv.Ay], () => lv.Ay.getVideoDeviceId()),
                i = aI.useField("previewEnabled"),
                n = (0, O.bG)([lv.Ay], () => lv.Ay.isVideoAvailable());
            return ((0, e5.l0)(() => {
                aI.setState({ previewEnabled: !1 });
            }),
            i)
                ? (0, p.jsx)("div", {
                      className: ay.T,
                      children: (0, p.jsxs)("div", {
                          className: ay.U,
                          children: [
                              (0, p.jsx)(e, { deviceId: t, width: 387, height: 218, disabled: !i }),
                              (0, p.jsx)(aj.k, {}),
                          ],
                      }),
                  })
                : (0, p.jsx)("div", {
                      className: ay.T,
                      children: (0, p.jsx)(e0.m, {
                          text: n ? null : g.intl.string(g.t["8jSzSe"]),
                          children: (0, p.jsx)(eh.$, {
                              variant: "primary",
                              text: g.intl.string(g.t.JIf4v7),
                              onClick: () => aI.setState({ previewEnabled: !0 }),
                              disabled: !n,
                          }),
                      }),
                  });
        },
    }),
    aR = (0, o.zZ)(u.X.CAMERA_CATEGORY, {
        useTitle: () => g.intl.string(g.t.uje3P9),
        usePredicate: () => (0, O.bG)([lv.Ay], () => lv.Ay.supports(ab.O5.VIDEO)),
        buildLayout: () => [aO, af, av, ap],
    });
function aL() {
    n6.h.dispatch({ type: "DISCORD_STATS_POPOUT_WINDOW_OPEN" });
}
let aD = (0, o.Tf)(u.X.DISCORD_STATS_POPOUT, {
    useTitle: () => "Discord Stats",
    useSubtitle: () => "Open a floating panel showing live GPU, CPU, and memory usage.",
    useLabel: () => "Open",
    usePredicate: () => (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.isStaff() ?? !1),
    onClick: () => {
        aL();
    },
});
var aP = i(827343);
let aG = (0, o.zD)(u.X.VOICE_AND_VIDEO_OPENH264, {
        useTitle: () => g.intl.string(g.t.qFphsa),
        useSubtitle: () => g.intl.string(g.t.cQfwyY),
        usePredicate: function () {
            return (0, n9.j9)();
        },
        useValue: function () {
            return (0, O.bG)([lv.Ay], () => lv.Ay.getOpenH264Enabled());
        },
        setValue: function (e) {
            aP.A.setOpenH264Enabled(e),
                (0, se.A)({
                    title: g.intl.string(g.t["9jf31O"]),
                    subtitle: g.intl.string(g.t["J2wg+X"]),
                    confirmText: g.intl.string(g.t.BddRzS),
                    onConfirm: () => s2.A.app.relaunch(),
                });
        },
        useSearchTerms: () => ["open", "OpenH264", "H264", "codec"],
    }),
    aU = (0, o.zD)(u.X.VOICE_AND_VIDEO_AUDIO_RECORDING, {
        useTitle: () => g.intl.string(g.t["r6K+TL"]),
        useSubtitle: () => g.intl.string(g.t["xl9+I6"]),
        useValue: function () {
            return (0, O.bG)([lv.Ay], () => lv.Ay.getAecDump());
        },
        setValue: aP.A.setAecDump,
        usePredicate: function () {
            return (0, O.bG)([lv.Ay], () => lv.Ay.isAecDumpSupported());
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
        title: g.intl.string(g.t["7UXEF2"]),
        subtitle: g.intl.string(g.t.IYPrRl),
        confirmText: g.intl.string(g.t.BddRzS),
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
            await (0, aF.a)(q.Umv.RTC),
            (e = g.intl.string(g.t["fKBB8+"])),
            (t = g.intl.string(g.t.BvyxE7)),
            (0, aM.A)({ title: e, subtitle: t });
    } catch (l) {
        var n;
        let e, t, i, s;
        (n = l.displayMessage),
            (e = g.intl.string(g.t.QZg0J7)),
            (t = n ?? g.intl.string(g.t.VzHcSm)),
            (i = (0, aB.B1)(aB.iy.DEBUG_LOG_UPLOAD_FAILED)?.errorCode),
            (s = g.intl.formatToPlainString(g.t.ejOT95, { errorCode: i })),
            (0, _.openModal)((i) =>
                (0, p.jsx)(ak.a, {
                    header: e,
                    confirmButtonColor: aV.$n.Colors.BRAND,
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
async function aW() {
    await aK({
        onUploadStart: () => aY.setState({ isUploading: !0 }),
        onUploadFinish: () => aY.setState({ isUploading: !1, isDisabled: !0 }),
    });
}
let aZ = (0, o.E2)(u.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [g.intl.string(g.t["726JHL"]), g.intl.string(g.t.EbwFfR), g.intl.string(g.t.nuPtYi)],
    usePredicate: function () {
        let e = (0, O.bG)([lv.Ay], () => lv.Ay.supports(ab.O5.DEBUG_LOGGING));
        return n9.Av && e && null != s2.A.fileManager.readLogFiles;
    },
    Component: function () {
        let e = (0, O.bG)([lv.Ay], () => lv.Ay.getDebugLogging()),
            t = aY.useField("isUploading"),
            i = aY.useField("isDisabled"),
            n = f.useId();
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
                            onChange: aH,
                        }),
                        (0, p.jsx)("div", {
                            role: "group",
                            "aria-labelledby": n,
                            children: (0, p.jsxs)(aw.e, {
                                children: [
                                    (0, p.jsx)(eh.$, {
                                        variant: "secondary",
                                        text: g.intl.string(g.t.EbwFfR),
                                        onClick: aW,
                                        loading: t,
                                        disabled: i,
                                        "aria-label": g.intl.string(g.t.aY1OH2),
                                    }),
                                    (0, p.jsx)(eh.$, {
                                        variant: "secondary",
                                        text: g.intl.string(g.t.nuPtYi),
                                        onClick: aX,
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
var aq = i(233545),
    aQ = i(412780);
function aJ() {
    return (0, O.bG)([t3.default, lv.Ay], () => {
        let e = t3.default.getCurrentUser(),
            t = e?.isStaff() ?? !1,
            i = "canary" === st.Ay.releaseChannel || "development" === st.Ay.releaseChannel,
            n = lv.Ay.supports(ab.O5.CONNECTION_REPLAY);
        return t && i && n;
    });
}
let a$ = (0, o.zD)(u.X.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
        useTitle: () => g.intl.string(g.t.U4FgFK),
        useSubtitle: () => g.intl.string(g.t.Lm72RU),
        useValue: function () {
            return (0, O.bG)([aQ.Ay], () => aQ.Ay.shouldRecordNextConnection());
        },
        setValue: aq.Et,
        usePredicate: aJ,
    }),
    a0 = (0, o.Tf)(u.X.VOICE_AND_VIDEO_OPEN_CONNECTION_REPLAY, {
        useTitle: () => g.intl.string(g.t.nJnOHO),
        useLabel: () => g.intl.string(g.t["3xjX0U"]),
        onClick: aq.YW,
        usePredicate: aJ,
    });
var a1 = i(926919),
    a2 = i(111162),
    a3 = i(698723);
let a6 = (0, o.zD)(u.X.VOICE_AND_VIDEO_STREAM_INFO_OVERLAY, {
        useTitle: () => g.intl.string(g.t["0CEP6e"]),
        useSubtitle: () => g.intl.string(g.t["kBXuW+"]),
        useValue: function () {
            return (0, O.bG)([a2.default], () => a2.default.isStreamInfoOverlayEnabled);
        },
        setValue: function (e) {
            let t = a2.default.isStreamInfoOverlayEnabled;
            (0, a3.A)("stream_info_overlay_enabled", e, t), (0, a1.x)({ isStreamInfoOverlayEnabled: e });
        },
        usePredicate: function () {
            return c.Q_.useSetting();
        },
    }),
    a4 = (0, o.bd)(u.X.VOICE_AND_VIDEO_DIAGNOSTICS_ACCORDION, {
        useTitle: (e) => (e ? g.intl.string(g.t["/B4I8H"]) : g.intl.string(g.t.BTlsWH)),
        useCollapsedSubtitle: () => g.intl.string(g.t.la1Ys4),
        buildLayout: () => [a6, aU, a$, a0, aZ],
    });
function a5(e, t, i) {
    (0, se.A)({ title: e, subtitle: t, confirmText: g.intl.string(g.t.BddRzS), onConfirm: i });
}
let a7 = (0, o.Tf)(u.X.VOICE_AND_VIDEO_RESET_ALL_SETTINGS, {
        useTitle: () => g.intl.string(g.t.SXfv1v),
        useSubtitle: () => g.intl.string(g.t["buA5/q"]),
        useLabel: () => g.intl.string(g.t.yBZMsQ),
        onClick: function () {
            a5(g.intl.string(g.t["4iKQ/3"]), g.intl.string(g.t.sQ42iT), aP.A.reset);
        },
        useVariant: () => "critical-secondary",
    }),
    a8 = (0, o.zZ)(u.X.VOICE_AND_VIDEO_DIAGNOSTICS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.UDAU9K),
        buildLayout: () => [aG, a4, aD, a7],
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
    return () => (0, p.jsx)(os, { useTitle: t.useTitle, settingKey: t.key, formatter: i, index: n }, t.key);
}
function or(e) {
    return e.type === oi.Z6.LIST;
}
function oa(e, t) {
    let { limit: i = 2, formatter: n = on } = t ?? {};
    ty()(i > 0, "[useSettingCollapsibleSubtitle] Limit must be greater than 0");
    let { visibleDirectory: s, accessibleDirectory: l } = (0, ot._)(),
        r = s.get(e) ?? l.get(e);
    ty()(
        null != r && (r.type === oi.Z6.ACCORDION || or(r)),
        "[useSettingCollapsibleSubtitle] Node is not a collapsible settings node",
    );
    let a = or(r) ? (r.collapseAfter ?? 0) : 0,
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
                return g.intl.format(g.t["3H9tCW"], { settingOneHook: ol({ setting: t[0], formatter: n, index: 0 }) });
            else if (2 === t.length)
                return g.intl.format(g.t.MWryo6, {
                    settingOneHook: ol({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: ol({ setting: t[1], formatter: n, index: 1 }),
                });
            else
                return g.intl.format(g.t.a00b5G, {
                    settingOneHook: ol({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: ol({ setting: t[1], formatter: n, index: 1 }),
                    settingThreeHook: ol({ setting: t[2], formatter: n, index: 2 }),
                });
        return 1 === s
            ? g.intl.format(g.t.O8vNbS, { settingOneHook: ol({ setting: t[0], formatter: n, index: 0 }) })
            : 2 === s
              ? g.intl.format(g.t["acXG/W"], {
                    settingOneHook: ol({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: ol({ setting: t[1], formatter: n, index: 1 }),
                })
              : g.intl.format(g.t["5+ldWc"], {
                    settingOneHook: ol({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: ol({ setting: t[1], formatter: n, index: 1 }),
                    settingThreeHook: ol({ setting: t[2], formatter: n, index: 2 }),
                });
    }, [i, a, o, n]);
}
let oo = (0, o.zD)(u.X.VOICE_AUTOMATIC_GAIN_CONTROL_SETTING, {
        useTitle: () => g.intl.string(g.t.cUMdH0),
        useSubtitle: () => g.intl.string(g.t["6EjbvA"]),
        useValue: function () {
            return (0, O.bG)([lv.Ay], () => lv.Ay.getAutomaticGainControl());
        },
        setValue: function (e) {
            aP.A.setAutomaticGainControl(e, { page: q.liQ.USER_SETTINGS, section: q.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, O.bG)([lv.Ay, a9.A], () => {
                let e = lv.Ay.getInputDeviceId();
                return a9.A.hasAutomaticGainControl(e);
            });
        },
        usePredicate: function () {
            return (0, O.bG)([lv.Ay], () => lv.Ay.isAutomaticGainControlSupported() && lv.Ay.isInputProfileCustom());
        },
    }),
    ou = (0, o.sN)(u.X.VOICE_GLOBAL_ATTENUATION_SLIDER, {
        useTitle: () => g.intl.string(g.t.AlybXj),
        setValue: (e) =>
            aP.A.setAttenuation(e, lv.Ay.getAttenuateWhileSpeakingSelf(), lv.Ay.getAttenuateWhileSpeakingOthers()),
        minValue: 0,
        maxValue: 100,
        getInitialValue: () => lv.Ay.getAttenuation(),
    }),
    od = (0, o.zD)(u.X.VOICE_GLOBAL_ATTENUATION_FOR_SELF_SETTING, {
        useTitle: () => g.intl.string(g.t["9dHxRY"]),
        useValue: () => (0, O.bG)([lv.Ay], () => lv.Ay.getAttenuateWhileSpeakingSelf()),
        setValue: (e) => aP.A.setAttenuation(lv.Ay.getAttenuation(), e, lv.Ay.getAttenuateWhileSpeakingOthers()),
    }),
    oc = (0, o.zD)(u.X.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
        useTitle: () => g.intl.string(g.t.SMt0Gr),
        useValue: () => (0, O.bG)([lv.Ay], () => lv.Ay.getAttenuateWhileSpeakingOthers()),
        setValue: (e) => aP.A.setAttenuation(lv.Ay.getAttenuation(), lv.Ay.getAttenuateWhileSpeakingSelf(), e),
    }),
    og = (0, o.FW)(u.X.VOICE_GLOBAL_ATTENUATION_FIELD_SET, {
        variant: "compact",
        useTitle: () => g.intl.string(g.t.oSdBvW),
        useSubtitle: () => g.intl.string(g.t["0A/8Rt"]),
        usePredicate: () => (0, O.bG)([lv.Ay], () => lv.Ay.supports(ab.O5.ATTENUATION)),
        buildLayout: () => [ou, od, oc],
    });
var om = i(801644);
let oA = (0, o.zD)(u.X.VOICE_HARDWARE_MUTE_SILENCE_ALERT_SETTING, {
        useTitle: () => g.intl.string(g.t.pZ0vr4),
        useSubtitle: () => g.intl.string(g.t.tVbzoZ),
        useValue: function () {
            return (0, O.bG)([nx.Ay], () => !nx.Ay.disableHardwareMuteSilenceAlert);
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
    oh = (0, o.zD)(u.X.VOICE_BYPASS_SYSTEM_INPUT_PROCESSING_SETTING, {
        useTitle: () => g.intl.string(g.t.DFPXIG),
        useSubtitle: () => g.intl.string(g.t["UyRX+C"]),
        useValue: function () {
            return (0, O.bG)([lv.Ay], () => lv.Ay.getBypassSystemInputProcessing());
        },
        setValue: function (e) {
            aP.A.setBypassSystemInputProcessing(e);
        },
        usePredicate: function () {
            return (0, O.bG)([lv.Ay], () => lv.Ay.showBypassSystemInputProcessing() && lv.Ay.isInputProfileCustom());
        },
    }),
    oE = (0, o.zD)(u.X.VOICE_SWITCH_CHANNEL_ALERT_SETTING, {
        useTitle: () => g.intl.string(g.t.jrWHD3),
        useSubtitle: () => g.intl.string(g.t.YCCMkJ),
        useValue: function () {
            return (0, O.bG)([nx.Ay], () => !nx.Ay.disableVoiceChannelChangeAlert);
        },
        setValue: function (e) {
            (0, a3.A)("switch_channel_warning_enabled", e, !nx.Ay.disableVoiceChannelChangeAlert),
                sX.Ay.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !e });
        },
    }),
    ox = (0, o.zD)(u.X.ADVANCED_VOICE_ACTIVITY_PROCESSING_SETTING, {
        useTitle: () => g.intl.string(g.t.BbESsg),
        useSubtitle: () => g.intl.string(g.t.LoOB1F),
        useValue: function () {
            return (0, O.bG)([lv.Ay], () => {
                let { vadUseKrisp: e } = lv.Ay.getModeOptions();
                return e;
            });
        },
        setValue: function (e) {
            let t = lv.Ay.getMode();
            aP.A.setMode(t, { vadUseKrisp: e });
        },
        useDisabled: function () {
            return (0, O.bG)([lv.Ay], () => {
                let e = lv.Ay.getMode(),
                    t = lv.Ay.getModeOptions().autoThreshold;
                return e === q.TBI.VOICE_ACTIVITY && t;
            });
        },
        usePredicate: function () {
            return (0, O.bG)([lv.Ay], () => lv.Ay.isAdvancedVoiceActivitySupported() && lv.Ay.isInputProfileCustom());
        },
    }),
    oT = (0, o.Hn)(u.X.VOICE_AUDIO_SUBSYSTEM_SETTING, {
        useTitle: () => g.intl.string(g.t.wVBHr0),
        useValue: function () {
            return (0, O.bG)([lv.Ay], () => lv.Ay.getAudioSubsystem());
        },
        setValue: function (e) {
            a5(g.intl.string(g.t.uY7AcQ), g.intl.string(g.t.gBqik6), () => aP.A.setAudioSubsystem(e));
        },
        useOptions: function () {
            let {
                legacyAudioSubsystemSupported: e,
                experimentalAudioSubsystemSupported: t,
                automaticAudioSubsystemSupported: i,
            } = (0, O.cf)([lv.Ay], () => ({
                legacyAudioSubsystemSupported: lv.Ay.supports(ab.O5.LEGACY_AUDIO_SUBSYSTEM),
                experimentalAudioSubsystemSupported: lv.Ay.supports(ab.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM),
                automaticAudioSubsystemSupported: lv.Ay.supports(ab.O5.AUTOMATIC_AUDIO_SUBSYSTEM),
            }));
            return f.useMemo(() => {
                let n;
                return (
                    (n = [{ id: ab.rB.STANDARD, value: ab.rB.STANDARD, label: g.intl.string(g.t.dqb2JZ) }]),
                    e && n.push({ id: ab.rB.LEGACY, value: ab.rB.LEGACY, label: g.intl.string(g.t["TYfH+5"]) }),
                    t &&
                        n.push({ id: ab.rB.EXPERIMENTAL, value: ab.rB.EXPERIMENTAL, label: g.intl.string(g.t.liQmtr) }),
                    i && n.push({ id: ab.rB.AUTOMATIC, value: ab.rB.AUTOMATIC, label: g.intl.string(g.t.qNgtO1) }),
                    n
                );
            }, [i, t, e]);
        },
        usePredicate: function () {
            return (0, O.bG)([lv.Ay], () => lv.Ay.shouldOfferManualSubsystemSelection());
        },
    }),
    oS = (0, o.zD)(u.X.VOICE_QUALITY_OF_SERVICE_SETTING, {
        useTitle: () => g.intl.string(g.t.uancuJ),
        useSubtitle: () => g.intl.string(g.t.I1Eoqq),
        useValue: function () {
            return (0, O.bG)([lv.Ay], () => lv.Ay.getQoS());
        },
        setValue: function (e) {
            aP.A.setQoS(e);
        },
        usePredicate: function () {
            return (0, O.bG)([lv.Ay], () => lv.Ay.supports(ab.O5.QOS));
        },
    }),
    op = (0, o.zD)(u.X.VOICE_SILENCE_WARNING_SETTING, {
        useTitle: () => g.intl.string(g.t["4rsOPQ"]),
        useSubtitle: () => g.intl.string(g.t.jtiiCw),
        useValue: function () {
            return (0, O.bG)([lv.Ay], () => lv.Ay.getEnableSilenceWarning());
        },
        setValue: function (e) {
            aP.A.setSilenceWarning(e);
        },
        usePredicate: function () {
            return ev.isPlatformEmbedded;
        },
    }),
    of = (0, o.bd)(u.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? g.intl.string(g.t.KHsSWK) : g.intl.string(g.t.PPDo5V);
        },
        useCollapsedSubtitle: () =>
            oa(u.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
                limit: (0, O.bG)([lv.Ay], () => lv.Ay.isInputProfileCustom()) ? 3 : 2,
            }),
        buildLayout: () => [oo, ox, oh, op, oA, oE, og, oT, oS],
    }),
    oN = (0, o.zD)(u.X.VOICE_ECHO_CANCELLATION_SETTING, {
        useTitle: () => g.intl.string(g.t.iWTwu6),
        useValue: function () {
            return (0, O.bG)([lv.Ay], () => lv.Ay.getEchoCancellation());
        },
        setValue: function (e) {
            aP.A.setEchoCancellation(e, { page: q.liQ.USER_SETTINGS, section: q.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, O.bG)([lv.Ay, a9.A], () => {
                let e = lv.Ay.getInputDeviceId();
                return a9.A.hasEchoCancellation(e);
            });
        },
        usePredicate: function () {
            return (0, O.bG)([lv.Ay], () => lv.Ay.isInputProfileCustom());
        },
    });
var o_ = i(459838),
    oC = i(451988),
    oI = i(801102),
    ob = i(160671);
let ov = (0, sS.Ld)();
function oj(e) {
    let { isSpeaking: t, className: i, id: n, ariaDescribedBy: s, ariaLabelledBy: l, disabled: r } = e;
    return (0, p.jsx)("div", {
        role: "meter",
        className: ew()(oI.$I, i),
        id: n,
        "aria-describedby": s,
        "aria-labelledby": l,
        "aria-valuenow": t && !r ? 100 : 0,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuetext": t && !r ? g.intl.string(g.t.haLKZ0) : g.intl.string(g.t.X2hJL7),
        children: (0, p.jsx)("div", { className: ew()(oI.Jx, oI.NU, { [oI.zY]: t && !r, [oI.r9]: r }) }),
    });
}
function oy(e) {
    let { volume: t, id: i, ariaDescribedBy: n, ariaLabelledBy: s, disabled: l } = e,
        { threshold: r, autoThreshold: a } = (0, O.cf)([lv.Ay], () => ({
            threshold: lv.Ay.getModeOptions().threshold,
            autoThreshold: lv.Ay.getModeOptions().autoThreshold,
        })),
        o = (0, O.bG)([lv.Ay], () => lv.Ay.getMode());
    return (0, p.jsx)("section", {
        className: ew()(oI.Mo, oI.jW),
        id: i,
        "aria-describedby": n,
        "aria-labelledby": s,
        children: (0, p.jsx)(i8.A, {
            initialValue: r + 100,
            onValueRender: (e) => `${(-((100 - e) * 1)).toFixed(0)}dB`,
            onValueChange: (e) => {
                var t;
                return (t = -((100 - e) * 1)), void aP.A.setMode(o, { threshold: t, autoThreshold: a });
            },
            barStyles: { background: w.A.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: w.A.unsafe_rawColors.YELLOW_300.css },
            "aria-labelledby": ov,
            disabled: l,
            children: (0, p.jsxs)("div", {
                className: ew()(oI.NU, oI.TL, oI.Jx, ob.bar),
                children: [
                    (0, p.jsx)("div", { className: ew()(oI.GS, oI.SH), style: { width: l ? 0 : t + 100 + "%" } }),
                    (0, p.jsx)("div", { className: "grow" }),
                ],
            }),
        }),
    });
}
let oO = (0, o.E2)(u.X.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useSearchTerms: () => [g.intl.string(g.t["sqUm+k"]), g.intl.string(g.t.I1Zuq0), g.intl.string(g.t.nuFtHH)],
    usePredicate: () => (0, O.bG)([lv.Ay], () => lv.Ay.isInputProfileCustom()),
    Component: function () {
        let { autoThreshold: e, disabled: t } = (0, O.cf)([lv.Ay], () => ({
                autoThreshold: lv.Ay.getModeOptions().autoThreshold,
                disabled: lv.Ay.getMode() !== ab.TB.VOICE_ACTIVITY,
            })),
            i = f.useCallback((e) => {
                let t = lv.Ay.getMode(),
                    { threshold: i } = lv.Ay.getModeOptions();
                aP.A.setMode(t, { autoThreshold: e, threshold: i });
            }, []),
            n = (0, O.bG)([lv.Ay], () => lv.Ay.supports(ab.O5.AUTOMATIC_VAD)),
            { volume: s, isSpeaking: l } = (function () {
                let [e, t] = f.useState(-100),
                    [i, n] = f.useState(!1);
                function s(e, i) {
                    t(e), n((i & ab.ME.VOICE) === ab.ME.VOICE);
                }
                return (
                    f.useEffect(() => {
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
            r = (0, O.bG)([lv.Ay], () => lv.Ay.isEnabled()),
            a = f.useMemo(
                () =>
                    !r &&
                    (0, p.jsx)("div", {
                        className: oI.B4,
                        children: (0, p.jsx)(y.w, {
                            type: "warning",
                            children: g.intl.format(g.t["O13I+O"], { onEnableClick: () => aP.A.enable(!0) }),
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
                                  ? (0, p.jsx)(oj, {
                                        isSpeaking: l,
                                        className: oI.UJ,
                                        ariaDescribedBy: d,
                                        ariaLabelledBy: u,
                                        disabled: t,
                                    })
                                  : (0, p.jsx)(oy, { volume: s, ariaDescribedBy: d, ariaLabelledBy: u, disabled: t }),
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
                                        className: oI.UJ,
                                        id: i.controlId,
                                        ariaDescribedBy: i.describedById,
                                        ariaLabelledBy: i.labelId,
                                        disabled: t,
                                    })
                                  : (0, p.jsx)(oy, {
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
    oP = { page: q.liQ.USER_SETTINGS, section: q.JJy.SETTINGS_VOICE_AND_VIDEO };
function oG() {
    let e = (0, O.bG)([iu.A], () => (0, oR.q)(iu.A.theme));
    return (0, p.jsx)("img", { src: e ? oL : oD, width: 48, height: 32, alt: "" });
}
let oU = (0, o.E2)(u.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [g.intl.string(g.t.t8Qhib), g.intl.string(g.t.hmfkCi)],
    usePredicate: function () {
        return (0, O.bG)([lv.Ay], () => lv.Ay.isInputProfileCustom() && lv.Ay.isNoiseSuppressionSupported());
    },
    Component: function () {
        let e = f.useCallback((e) => {
                aP.A.setNoiseCancellation("KRISP" === e, oP), aP.A.setNoiseSuppression("STANDARD" === e, oP);
            }, []),
            {
                noiseCancellation: t,
                noiseSuppression: i,
                isNoiseSuppressionSupported: n,
                isNoiseCancellationSupported: s,
            } = (0, O.cf)([lv.Ay], () => ({
                noiseCancellation: lv.Ay.getNoiseCancellation(),
                noiseSuppression: lv.Ay.getNoiseSuppression(),
                isNoiseSuppressionSupported: lv.Ay.isNoiseSuppressionSupported(),
                isNoiseCancellationSupported: lv.Ay.isNoiseCancellationSupported(),
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
                (0, p.jsx)(lS.l, {
                    label: g.intl.string(g.t.t8Qhib),
                    description: r,
                    layout: "horizontal",
                    value: t ? "KRISP" : i ? "STANDARD" : "NONE",
                    onSelectionChange: e,
                    options: l,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                s && (0, p.jsx)(oG, {}),
            ],
        });
    },
});
var oM = i(934729),
    oV = i(509381);
let ok = !n9.Av;
function ow() {
    return (0, O.bG)([lv.Ay], () => lv.Ay.getMode() === ab.TB.PUSH_TO_TALK);
}
let oF = (0, o.zD)(u.X.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function () {
        return n9.Av ? g.intl.string(g.t.tG4Np5) : g.intl.string(g.t.JMyQin);
    },
    useSubtitle: function () {
        let e = (0, O.bG)([lv.Ay], () => lv.Ay.getMode());
        return f.useMemo(() => {
            if (!n9.Av && e === ab.TB.PUSH_TO_TALK)
                return g.intl.format(g.t["VHI4+Y"], { onDownloadClick: () => (0, oM._)("Help Text PTT") });
        }, [e]);
    },
    usePredicate: function () {
        return (0, O.bG)([lv.Ay], () => lv.Ay.getActiveInputProfile() !== oV.m.STUDIO);
    },
    useValue: function () {
        return (0, O.bG)([lv.Ay], () => lv.Ay.getMode() === ab.TB.PUSH_TO_TALK);
    },
    setValue: function (e) {
        var t, n;
        (t = e ? ab.TB.PUSH_TO_TALK : ab.TB.VOICE_ACTIVITY),
            (n = [eM.A.USER_SETTINGS_VOICE_AND_VIDEO]),
            t === ab.TB.PUSH_TO_TALK &&
                ok &&
                (0, _.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([i.e("31910"), i.e("10919")]).then(i.bind(i, 556506));
                    return (t) =>
                        (0, p.jsx)(e, {
                            title: g.intl.string(g.t.Kdt0Gb),
                            confirmText: g.intl.string(g.t["1WjMbC"]),
                            cancelText: g.intl.string(g.t.BddRzS),
                            onConfirm: () => (0, oM._)("PTT Limited Modal"),
                            body: g.intl.string(g.t.NIozvt),
                            ...t,
                        });
                }),
            aP.A.setMode(t, void 0, void 0, { analyticsLocations: n });
    },
    useSearchTerms: () => [g.intl.string(g.t["pS+K2L"]), g.intl.string(g.t.nuFtHH)],
});
var oB = i(371060);
let oz = (0, o.E2)(u.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t["pS+K2L"]), g.intl.string(g.t.nuFtHH)],
        usePredicate: ow,
        Component: function () {
            let e = (0, O.bG)([lv.Ay], () => {
                    let { shortcut: e } = lv.Ay.getModeOptions();
                    return e;
                }),
                t = g.intl.format(g.t.HVvn5T, { onClick: () => (0, ej.openUserSettings)(u.X.KEYBINDS_PANEL) });
            return (0, p.jsx)(sy.D, {
                label: g.intl.string(g.t["o+BJQR"]),
                description: t,
                layout: "horizontal-responsive",
                children: (0, p.jsx)("div", {
                    className: oB.e,
                    children: (0, p.jsx)(tR.A, {
                        defaultValue: e,
                        onChange: (e) => aP.A.setMode(q.TBI.PUSH_TO_TALK, { shortcut: e }),
                    }),
                }),
            });
        },
    }),
    oY = (0, o.sN)(u.X.VOICE_PUSH_TO_TALK_RELEASE_DELAY_SETTING, {
        useTitle: () => g.intl.string(g.t.GCNMM8),
        useSearchTerms: () => [g.intl.string(g.t["pS+K2L"]), g.intl.string(g.t.nuFtHH)],
        setValue: function (e) {
            aP.A.setMode(q.TBI.PUSH_TO_TALK, { delay: e });
        },
        minValue: 0,
        maxValue: q.IjB,
        getInitialValue: function () {
            let { delay: e } = lv.Ay.getModeOptions();
            return e;
        },
        onValueRender: function (e) {
            return e >= 1e3 ? ((e /= 1e3), `${e.toFixed(2)}s`) : `${e.toFixed(0)}\u00A0ms`;
        },
        usePredicate: ow,
    }),
    oX = (0, o.Qx)(u.X.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => g.intl.string(g.t.LM3U3k),
        usePredicate: function () {
            let { enabledInputProfiles: e } = (0, oe._)({ location: "SettingsRendererConfig" });
            return e.length > 0;
        },
        useSearchTerms: () => [g.intl.string(g.t.nuFtHH), g.intl.string(g.t.VZPR0R), g.intl.string(g.t.cjPbpT)],
        useValue: function () {
            return (0, O.bG)([lv.Ay], () => lv.Ay.getActiveInputProfile() ?? oV.m.CUSTOM);
        },
        setValue: function (e) {
            let t = [eM.A.USER_SETTINGS_VOICE_AND_VIDEO];
            aP.A.setActiveInputProfile(e, { analyticsLocations: t });
        },
        useOptions: function () {
            let { enabledInputProfiles: e } = (0, oe.d)({ location: "InputProfileCategory" });
            return [
                { value: oV.m.VOICE_ISOLATION, name: g.intl.string(g.t.cjPbpT), desc: g.intl.string(g.t.CzhvnE) },
                { value: oV.m.STUDIO, name: g.intl.string(g.t.VZPR0R), desc: g.intl.string(g.t.ZaJksS) },
                { value: oV.m.CUSTOM, name: g.intl.string(g.t["N/PQjv"]), desc: g.intl.string(g.t.SnBmuY) },
            ].filter((t) => {
                let { value: i } = t;
                return e.includes(i);
            });
        },
    }),
    oH = (0, o.zZ)(u.X.VOICE_INPUT_PROFILE_CATEGORY, {
        useInlineNotice: function () {
            let e = (0, O.bG)([a9.A, lv.Ay], () => {
                let e = lv.Ay.getInputDeviceId();
                return (
                    (a9.A.hasEchoCancellation(e) || a9.A.hasNoiseSuppression(e) || a9.A.hasAutomaticGainControl(e)) &&
                    lv.Ay.isInputProfileCustom()
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
    o5 = i(805945),
    o7 = i(902460);
function o8(e) {
    let { onSelect: t } = e,
        [i, n] = f.useState(!1),
        s = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
        l = o2.Ay.canUseCustomCallSounds(s),
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
                children: (0, p.jsx)(o4.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: a,
                    gridNotice: l ? null : (0, p.jsx)(o6.m, {}),
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
                children: (0, p.jsx)(o1.R, { size: "md", color: "currentColor", className: o7.Wo }),
            }),
    });
}
function o9(e) {
    let { sound: t } = e,
        { previewSound: i } = (0, o3.A)(t, null),
        n =
            0 === (0, o$.wH)()
                ? g.intl.string(g.t.OASXjt)
                : g.intl.formatToPlainString(g.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name });
    return (0, p.jsx)(o5.dT, {
        onClick: i,
        text: n,
        children: (0, p.jsx)(oW.H, { size: "md", color: "currentColor", className: o7.wg }),
    });
}
function ue(e) {
    let { sound: t, isGlobal: i, onSelect: n } = e,
        s = null != t,
        l = t?.emojiId,
        r = t?.emojiName,
        a = s && (null != r || null != l);
    return (0, p.jsxs)("div", {
        className: o7.D6,
        children: [
            (0, p.jsxs)("div", {
                className: o7.kL,
                children: [
                    a && (0, p.jsx)(sa.A, { emojiId: l, emojiName: r, className: o7.Zg }),
                    (0, p.jsx)(V.E, {
                        variant: "text-md/normal",
                        color: "text-strong",
                        className: o7.dj,
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
                        ? (0, p.jsx)(o9, { sound: t })
                        : (0, p.jsx)(oW.H, { size: "md", color: "currentColor", className: o7.Gk }),
                ],
            }),
            (0, p.jsxs)("div", {
                className: o7.kL,
                children: [
                    (0, p.jsx)(o8, { onSelect: n }),
                    s &&
                        !i &&
                        (0, p.jsx)(o5.dT, {
                            onClick: () => n(null),
                            text: g.intl.string(g.t.jmtcGA),
                            children: (0, p.jsx)(lf.u, {
                                size: "md",
                                color: w.A.unsafe_rawColors.RED_400.css,
                                className: o7.Wo,
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
    return (0, O.bG)([oJ.A], () => {
        if (null == e) return null;
        let { guildId: t, soundId: i } = e;
        return oJ.A.getSound("0" === t ? "0" : t, i);
    });
}
function us(e) {
    let { guildId: t } = e,
        i = (0, O.bG)([ut.A], () => ut.A.settings.guilds?.guilds?.[t]?.joinSound),
        n = un(i);
    if (null == i || null == n) return null;
    let { emojiId: s, emojiName: l } = n,
        r = null != s || null != l;
    return (0, p.jsxs)("div", {
        className: ui.Io,
        children: [
            r
                ? (0, p.jsx)(sa.A, { emojiId: s, emojiName: l, className: ui.nW })
                : (0, p.jsx)(oW.H, { size: "md", color: "currentColor", className: ui.nW }),
            (0, p.jsx)(V.E, { className: ui.dK, variant: "text-xs/medium", children: n.name }),
        ],
    });
}
let ul = (0, o.E2)(u.X.ENTRANCE_SOUNDS_SETTING, {
    useSearchTerms: () => [g.intl.string(g.t.nzUc3B)],
    Component: function () {
        let { analyticsLocations: e } = (0, nU.Ay)(),
            [t, i] = f.useState("0"),
            n = (0, o0.mz)(t),
            s = un(n),
            l = n?.type === o0.PP.GLOBAL,
            r = (0, O.bG)([oJ.A], () => oJ.A.hasFetchedAllSounds()) && null != n && null == s;
        f.useEffect(() => {
            r && (0, o$.ND)({ location: e });
        }, [r, e]),
            f.useEffect(() => {
                (0, oQ.E7)();
            }, []);
        let a = f.useCallback((e, t) => {
            let { inDropdown: i } = t;
            return null == e ? null : i ? (0, p.jsx)(us, { guildId: e.value }) : null;
        }, []);
        return (0, p.jsxs)(ia.n, {
            label: g.intl.string(g.t.nzUc3B),
            description: g.intl.format(g.t.u9RWmv, { helpdeskArticle: ta.A.getArticleURL(q.MVz.SOUNDBOARD) }),
            children: [
                (0, p.jsx)(oZ.A, {
                    guildId: t,
                    className: ui.Dt,
                    globalOption: { label: g.intl.string(g.t["CpEUP/"]), value: "0" },
                    onChange: (e) => {
                        i(null == e ? "0" : e.id);
                    },
                    renderOptionSuffix: a,
                    hideDivider: !0,
                }),
                (0, p.jsxs)(oq.A, {
                    title: g.intl.format(g.t.I2TsYN, {
                        nitroWheelHook: () => (0, p.jsx)(oK.t, { size: "md", color: "currentColor", className: ui.ax }),
                    }),
                    children: [
                        (0, p.jsx)(ue, {
                            sound: s,
                            isGlobal: l,
                            onSelect: (i) => {
                                null == i ? (0, o$.Dv)(t, e) : (0, o$.un)(t, i, e);
                            },
                        }),
                        r &&
                            (0, p.jsx)(tr.p, {
                                className: ui.lm,
                                messageType: tr.Y.WARNING,
                                children: g.intl.string(g.t.WkPsFR),
                            }),
                    ],
                }),
            ],
        });
    },
});
var ur = i(824744);
let ua = (0, o.sN)(u.X.SOUNDBOARD_VOLUME_SETTING, {
    useTitle: () => g.intl.string(g.t.kbFsAD),
    useSubtitle: () => g.intl.format(g.t.BPbGq7, { helpCenterArticle: ta.A.getArticleURL(q.MVz.SOUNDBOARD) }),
    setValue: function (e) {
        let t = [eM.A.USER_SETTINGS_VOICE_AND_VIDEO],
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
let uu = (0, o.sN)(u.X.SOUNDMOJI_VOLUME_SETTING, {
        useTitle: () => g.intl.string(g.t["2JbvKw"]),
        useSubtitle: () => g.intl.string(g.t.INenzY),
        setValue: function (e) {
            let t = (0, ur.w)(e);
            c.HO.updateSetting(t);
        },
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = c.HO.getSetting();
            return (0, ur.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        usePredicate: function () {
            return (0, uo.X)({ location: "SoundmojiVolumeSetting" });
        },
    }),
    ud = (0, o.zZ)(u.X.SOUNDBOARD_CATEGORY, {
        useTitle: () => g.intl.string(g.t.ABjMWI),
        buildLayout: () => [ua, uu, ul],
    });
var uc = i(803224),
    ug = i(552122);
let um = (0, o.E2)(u.X.SOUNDS_HOLIDAY_NOTICE, {
        useSearchTerms: () => [g.intl.string(g.t.fgSHf8)],
        usePredicate: () => null != ug.A.useHolidaySoundpack(),
        Component: () =>
            (0, p.jsx)(V.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: g.intl.format(g.t.Eup6Wv, {
                    onClick: () => (0, ej.openUserSettings)(u.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                }),
            }),
    }),
    uA = (0, o.AK)(u.X.VOICE_AND_VIDEO_TO_NOTIFICATION_SOUNDS_NAVIGATOR, {
        useSubtitle: () => g.intl.string(g.t.eyGEE4),
        useSearchTerms: () => [g.intl.string(g.t.eyGEE4)],
        destinationKey: u.X.NOTIFICATIONS_SOUNDS_CATEGORY,
    }),
    uh = (0, o.gN)(u.X.VOICE_AND_VIDEO_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [uA] });
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
    return (0, o.zD)(`${u.X.SOUNDS_LIST_ITEM_PREFIX}${e.sound}`, {
        useTitle: e.useTitle,
        useSubtitle: () => g.intl.format(g.t.OOiGCM, { onClick: () => uS(e.sound) }),
        useValue: () => {
            let t = (0, O.bG)([uc.A], () => uc.A.isSoundDisabled(e.sound)),
                i = e.useDisabled?.();
            return !t && !i;
        },
        setValue: (t) => {
            let i = uc.A.getDisabledSounds().filter((t) => t !== e.sound);
            t || i.push(e.sound), uE.default.setDisabledSounds(i);
        },
        useDisabled: () => {
            let t = e.useDisabled?.(),
                i = (0, O.bG)([uc.A], () => uc.A.getDisableAllSounds());
            return t || i;
        },
        useDisabledMessage: e.useDisabledMessage,
    });
}
let uf = [
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
    uN = (0, o.D1)(u.X.VOICE_AND_VIDEO_SOUNDS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (e, t) =>
            e
                ? g.intl.formatToPlainString(g.t["0JYT98"], { count: t })
                : g.intl.formatToPlainString(g.t.ji1uNt, { count: t }),
        useCollapsedSubtitle: () => oa(u.X.VOICE_AND_VIDEO_SOUNDS_LIST, { limit: 3 }),
        initialize: function () {
            return () => {
                uT();
            };
        },
        buildLayout: () => uf.map((e) => up(e)),
    }),
    u_ = (0, o.zZ)(u.X.SOUNDS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.MKWyKc),
        useInlineNotice: function () {
            let e = (0, O.bG)([uc.A], () => uc.A.getDisableAllSounds());
            return f.useMemo(() => {
                if (e)
                    return {
                        type: eN.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        useText: () =>
                            g.intl.format(g.t.fRvixS, {
                                onClick: () => (0, ej.openUserSettings)(u.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                            }),
                    };
            }, [e]);
        },
        buildLayout: () => [uN, um, uh],
    }),
    uC = (0, o.zD)(u.X.STREAMING_SHOW_STREAM_PREVIEWS, {
        useTitle: () => g.intl.string(g.t.e3Zz3F),
        useSubtitle: () => g.intl.string(g.t.RztTjP),
        useValue: function () {
            return !c.uh.useSetting();
        },
        setValue: function (e) {
            (0, a3.A)("stream_previews_disabled", !e, c.uh.getSetting(), [eM.A.USER_SETTINGS_VOICE_AND_VIDEO]),
                c.uh.updateSetting(!e);
        },
    }),
    uI = (0, o.zD)(u.X.STREAMING_ADVANCED_SCREENSHARE, {
        useTitle: () => g.intl.string(g.t.GmWk2E),
        useSearchTerms: () => [g.intl.string(g.t["Fj/xn1"])],
        useSubtitle: () => g.intl.string(g.t["Fj/xn1"]),
        useValue: function () {
            return (0, O.bG)([lv.Ay], () => lv.Ay.getVideoHook());
        },
        setValue: aP.A.setVideoHook,
        usePredicate: function () {
            return (0, O.bG)([lv.Ay], () => lv.Ay.supportsVideoHook());
        },
    }),
    ub = (0, o.zD)(u.X.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
        useTitle: () => g.intl.string(g.t["4I0qzZ"]),
        useValue: function () {
            return (0, O.bG)([lv.Ay], () => lv.Ay.getExperimentalSoundshare());
        },
        setValue: aP.A.setExperimentalSoundshare,
        usePredicate: function () {
            return (0, O.bG)([lv.Ay], () => {
                let e = lv.Ay.supportsExperimentalSoundshare(),
                    t = lv.Ay.supportsHookSoundshare();
                return e && t;
            });
        },
    }),
    uv = (0, o.zD)(u.X.STREAMING_STREAM_ATTENUATION, {
        useTitle: () => g.intl.string(g.t["/jwMtn"]),
        useSubtitle: () => g.intl.string(g.t.zlA23F),
        useValue: function () {
            return (0, O.bG)([lv.Ay], () => lv.Ay.getSidechainCompression());
        },
        setValue: function (e) {
            let t = [eM.A.USER_SETTINGS_VOICE_AND_VIDEO];
            aP.A.setSidechainCompression(e, { analyticsLocations: t });
        },
        usePredicate: function () {
            return lv.Ay.supports(ab.O5.SIDECHAIN_COMPRESSION);
        },
    }),
    uj = (0, o.sN)(u.X.STREAMING_STREAM_ATTENUATION_STRENGTH, {
        useTitle: () => g.intl.string(g.t.fhEzfj),
        setValue: function (e) {
            let t = [eM.A.USER_SETTINGS_VOICE_AND_VIDEO];
            aP.A.setSidechainCompressionStrength(e, { analyticsLocations: t });
        },
        minValue: 1,
        maxValue: 100,
        getInitialValue: lv.Ay.getSidechainCompressionStrength,
        usePredicate: function () {
            return lv.Ay.supports(ab.O5.SIDECHAIN_COMPRESSION);
        },
    }),
    uy = (0, o.zD)(u.X.STREAMING_OS_MENU_SCREEN_CAPTURE, {
        useTitle: () => g.intl.string(g.t.lt8rRx),
        useSubtitle: () => g.intl.string(g.t.ie1mgY),
        useValue: function () {
            return (0, O.bG)([lv.Ay], () => lv.Ay.getUseSystemScreensharePicker());
        },
        setValue: function (e) {
            (0, n9.cX)() && e
                ? (0, se.A)({
                      title: g.intl.string(g.t["9jf31O"]),
                      subtitle: g.intl.string(g.t.uBd6JW),
                      variant: "primary",
                      onConfirm: () => {
                          aP.A.setUseSystemScreensharePicker(e), s2.A.app.relaunch();
                      },
                      confirmText: g.intl.string(g.t.BddRzS),
                  })
                : aP.A.setUseSystemScreensharePicker(e);
        },
        usePredicate: function () {
            return (0, O.bG)([lv.Ay], () => lv.Ay.supportsSystemScreensharePicker() && (0, n9.cX)());
        },
    }),
    uO = (0, o.bd)(u.X.STREAMING_ADVANCED_ACCORDION, {
        useTitle: (e) => (e ? g.intl.string(g.t.qrMyvm) : g.intl.string(g.t.LEtTNl)),
        useCollapsedSubtitle: () => oa(u.X.STREAMING_ADVANCED_ACCORDION),
        buildLayout: () => [uv, uj, uy, ub, uI],
    }),
    uR = (0, o.zZ)(u.X.STREAMING_CATEGORY, { useTitle: () => g.intl.string(g.t.KDdjou), buildLayout: () => [uC, uO] }),
    uL = (0, o.E2)(u.X.VOICE_MICROPHONE_INPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            return (0, p.jsx)(aN.U, {
                label: g.intl.string(g.t.UTM8VP),
                deviceType: ab.oh.AUDIO_INPUT,
                location: "UserSettingsVoiceVideo",
                hideDeviceTypeIcon: !0,
            });
        },
    }),
    uD = (0, o.E2)(u.X.VOICE_SPEAKER_OUTPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            return (0, p.jsx)(aN.U, {
                label: g.intl.string(g.t.xuYQ0n),
                deviceType: ab.oh.AUDIO_OUTPUT,
                location: "UserSettingsDevices",
                hideDeviceTypeIcon: !0,
            });
        },
    }),
    uP = (0, o.zC)(u.X.VOICE_INPUT_OUTPUT_DEVICE_SPLIT, { buildLayout: () => [uL, uD] }),
    uG = (0, o.sN)(u.X.VOICE_INPUT_VOLUME_SETTING, {
        useTitle: () => g.intl.string(g.t.Rtsr6w),
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = lv.Ay.getInputVolume();
            return (0, ur.M)(e);
        },
        asValueChanges: function (e) {
            let t = [eM.A.USER_SETTINGS_VOICE_AND_VIDEO],
                i = (0, ur.w)(e);
            aP.A.setInputVolume(i, { analyticsLocations: t });
        },
    }),
    uU = (0, o.sN)(u.X.VOICE_OUTPUT_VOLUME_SETTING, {
        useTitle: () => g.intl.string(g.t.aUJ062),
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
            let t = [eM.A.USER_SETTINGS_VOICE_AND_VIDEO],
                i = (0, ur.w)(e);
            aP.A.setOutputVolume(i, { analyticsLocations: t });
        },
    }),
    uM = (0, o.zC)(u.X.VOICE_INPUT_OUTPUT_VOLUME_SPLIT, { buildLayout: () => [uG, uU] });
var uV = i(702841),
    uk = i(349288),
    uw = i(152567),
    uF = i(593290);
let uB = `${ta.A.getArticleURL(q.MVz.VOICE_VIDEO_TROUBLESHOOTING)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm`,
    uz = (0, o.E2)(u.X.VOICE_MICROPHONE_TEST_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t.nuFtHH)],
        usePredicate: function () {
            return (0, uV.bG)([lv.Ay], () => lv.Ay.supports(ab.O5.LOOPBACK));
        },
        Component: function () {
            return (0, uV.bG)([lv.Ay], () => lv.Ay.supports(ab.O5.LOOPBACK))
                ? (0, p.jsx)(uw.A, {
                      size: "md",
                      notchBackground: uw.V.GRAY,
                      captionVoice: g.intl.string(g.t.bp3JOV),
                      captionNoVoice: (0, p.jsxs)(p.Fragment, {
                          children: [
                              (0, p.jsx)(V.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-default",
                                  children: g.intl.string(g.t.bgn75v),
                              }),
                              g.intl.string(g.t["MA+OZh"]),
                              (0, p.jsx)(uk.Anchor, {
                                  className: uF.X,
                                  href: ta.A.getArticleURL(q.MVz.NO_INPUT_DETECTED),
                                  children: g.intl.string(g.t.RYKKox),
                              }),
                          ],
                      }),
                      helpText: g.intl.format(g.t["V+B3FH"], { guideURL: uB }),
                      buttonTest: g.intl.string(g.t.gyljWE),
                      buttonStop: g.intl.string(g.t.I6OnJ3),
                      buttonVariant: "primary",
                      location: { page: q.liQ.USER_SETTINGS, section: q.JJy.SETTINGS_VOICE_AND_VIDEO },
                  })
                : null;
        },
    }),
    uY = ev.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];
function uX(e) {
    let { inputAndOutputAreBluetooth: t, canPromptSystemServiceInstallForVoice: i } = e;
    return (0, p.jsxs)(R.B, {
        children: [
            i && (0, p.jsx)(lR, { sourcePage: "voice" }),
            t && (0, p.jsx)(si.A, { look: si.k.WARNING, children: g.intl.string(g.t.Ioz3gx) }),
        ],
    });
}
let uH = (0, o.zZ)(u.X.VOICE_CATEGORY, {
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
            let e = lO("voice"),
                t = (0, a_.x5)(ab.oh.AUDIO_INPUT),
                i = (0, a_.x5)(ab.oh.AUDIO_OUTPUT),
                n = f.useMemo(() => {
                    let e = uY.some((e) => t?.hardwareId?.startsWith(e)),
                        n = uY.some((e) => i?.hardwareId?.startsWith(e));
                    return e && n && t?.containerId != null && t.containerId === i?.containerId;
                }, [t, i]);
            return f.useMemo(
                () =>
                    e.canPrompt || n
                        ? {
                              type: eN.lT.STRONGLY_DISCOURAGED_CUSTOM,
                              notice: () =>
                                  (0, p.jsx)(uX, {
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
    uK = (0, o.t_)(u.X.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => g.intl.string(g.t.B1fFpf),
        buildLayout: () => [uH, oH, aR, uR, u_, ud, a8],
    }),
    uW = (0, o.i4)(u.X.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.B1fFpf),
        usePredicate: () => lv.Ay.isSupported(),
        icon: ag.c,
        useMenu: am.A,
        buildLayout: () => [uK],
    }),
    uZ = (0, o.zZ)(u.X.WINDOWS_CATEGORY, {
        buildLayout: () => [ra, r8, ro, rg],
        initialize: () => {
            rr();
        },
    }),
    uq = (0, o.t_)(u.X.WINDOWS_PANEL, { useTitle: () => g.intl.string(g.t.ZkDZov), buildLayout: () => [uZ] }),
    uQ = (0, o.i4)(u.X.WINDOWS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.ZkDZov),
        icon: e2.k,
        usePredicate: () => ev.isPlatformEmbedded && (0, ev.isWindows)(),
        buildLayout: () => [uq],
    }),
    uJ = (0, o.WI)(u.X.APP_SECTION, {
        useTitle: () => g.intl.string(g.t.gcyH1J),
        buildLayout: function () {
            let e = (0, iz.SB)("AppSection_buildLayout");
            return [uW, lx, n1, r5, e ? ac : re, rs, e ? null : uQ, e ? null : rh].filter(t6.Vq);
        },
    });
var u$ = i(360669),
    u0 = i(974544),
    u1 = i(546605),
    u2 = i(423764),
    u3 = i(289873),
    u6 = i(465323),
    u4 = i(194261),
    u5 = i(391048),
    u7 = i(753390),
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
class dg extends f.PureComponent {
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
        return (0, p.jsx)(lD.k, {
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
                        title: () => g.intl.string(g.t["CeBa/4"]),
                        autoComplete: "cc-exp",
                        placeholder: () => g.intl.string(g.t.xeEWQ6),
                        pattern: "\\d*",
                        getClassNameForLayout: () => dA.ep,
                        renderInput: (e) => (0, p.jsx)(dg, { ...e }),
                    },
                }.expirationDate,
            ],
        },
    ],
    dE = function (e) {
        let { onCardInfoChange: t, className: i, expirationDate: n, error: s } = e,
            [l, r] = f.useState(!1),
            [a, o] = f.useState(null),
            [u, d] = f.useState(n);
        return (
            f.useEffect(() => {
                t({ expirationDate: u }, null === a);
            }, [u, t, a]),
            (0, p.jsx)(dm.A, {
                className: i,
                form: dh,
                values: { expirationDate: u },
                errors: null != a ? { expirationDate: a } : {},
                formError: s,
                onFieldChange: (e) => {
                    l || "" === e || r(!0),
                        (l && "" === e) || !(0, du.So)(e) ? o(g.intl.string(g.t["9/zZdl"])) : o(null),
                        d(e);
                },
            })
        );
    };
var dx = i(219887),
    dT = i(276589);
let dS = "isDefault";
class dp extends f.PureComponent {
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
            (0, u7.ey)(), (0, u7.tc)();
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
                      className: dT.zc,
                      children: (0, p.jsx)(y.w, { type: "critical", children: t.message }),
                  })
                : null
            : (0, p.jsx)("div", {
                  className: dT.zc,
                  children: (0, p.jsx)(y.w, { type: "critical", children: e.message }),
              });
    }
    renderBillingAddressSection() {
        let { billingAddress: e } = this.state,
            { updateError: t, paymentSource: i } = this.props,
            n = (0, dr.g)(i);
        return (0, p.jsxs)("div", {
            className: dT.yV,
            children: [
                (0, p.jsx)(V.E, {
                    className: dT.bV,
                    variant: "text-sm/normal",
                    children: g.intl.string(g.t["50Auo2"]),
                }),
                (0, p.jsx)(da.Ay, {
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
        return (0, p.jsxs)("div", {
            className: dT.yV,
            children: [
                (0, p.jsx)(V.E, { className: dT.bV, variant: "text-sm/normal", children: g.intl.string(g.t.Fo2YP7) }),
                (0, p.jsx)(dE, {
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
            className: dT.AU,
            children: (0, p.jsxs)(R.B, {
                direction: "horizontal",
                justify: "space-between",
                children: [
                    (0, p.jsx)(aw.e, {
                        children: (0, p.jsxs)("div", {
                            className: dT.lH,
                            children: [
                                i
                                    ? (0, p.jsx)(e0.m, {
                                          text: g.intl.string(g.t["v6/z28"]),
                                          children: (0, p.jsx)("div", { "aria-hidden": !0, className: dT.dm }),
                                      })
                                    : null,
                                (0, p.jsx)(eh.$, {
                                    type: "button",
                                    disabled: i || e,
                                    loading: t,
                                    onClick: this.handleDelete,
                                    variant: "critical-secondary",
                                    size: ds.Fr ? "sm" : "md",
                                    text: ds.Fr ? g.intl.string(g.t.oyYWHE) : g.intl.string(g.t.yk5qfb),
                                }),
                            ],
                        }),
                    }),
                    (0, p.jsxs)(aw.e, {
                        children: [
                            (0, p.jsx)(eh.$, {
                                type: "button",
                                disabled: e || t,
                                onClick: this.handleCancel,
                                variant: "secondary",
                                size: ds.Fr ? "sm" : "md",
                                text: g.intl.string(g.t["ETE/oC"]),
                            }),
                            (0, p.jsx)(eh.$, {
                                loading: e,
                                disabled: !n || t || !s,
                                type: "submit",
                                variant: "active",
                                size: ds.Fr ? "sm" : "md",
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
            r = e instanceof u9.SJ;
        return (0, p.jsx)(er.Z, {
            editable: !0,
            className: ew()(dT.Nr, n),
            children: (0, p.jsxs)("form", {
                onSubmit: this.handleSubmit,
                noValidate: !0,
                children: [
                    this.renderError(),
                    (0, p.jsxs)("div", {
                        className: dT.__invalid_paymentSection,
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
                                ? (0, p.jsx)("div", { className: dT.Um, children: g.intl.string(g.t["3R0U0b"]) })
                                : null,
                            (0, p.jsx)("div", {
                                className: dT.Sv,
                                children: r
                                    ? g.intl.format(g.t.w9WkBl, { paypalURL: "https://www.paypal.com" })
                                    : g.intl.string(g.t.VXndyr),
                            }),
                        ],
                    }),
                    this.renderCardExpirationSection(),
                    this.renderBillingAddressSection(),
                    (0, p.jsx)("div", {
                        className: dT.D5,
                        children: (0, p.jsx)(dl.S, {
                            value: dS,
                            checked: l,
                            onChange: (e) => this.handleFieldChange(e, dS),
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
let df = O.Ay.connectStores([de.A], () => ({ updateError: de.A.editSourceError, removeError: de.A.removeSourceError }))(
    dp,
);
var dN = i(776409),
    d_ = i(95322);
class dC extends f.PureComponent {
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
            ? (0, p.jsx)(df, {
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
                      n ? null : (0, p.jsx)(eE.c, { className: d_.__invalid_sourceDivider }),
                      (0, p.jsxs)("div", {
                          className: d_.Yb,
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
let dI = f.memo(function (e) {
    let { paymentSource: t, hideDivider: i, isForSubscription: n, locale: s, onRedeemClick: l } = e,
        [r, a] = f.useState(null),
        o = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.storeCountry?.country ?? null),
        u = (0, O.bG)([de.A], () => de.A.ipCountryCode),
        d = f.useMemo(() => (0, u6.TW)(`-${o ?? u ?? "US"}`), [o, u]);
    return (
        f.useEffect(() => {
            void 0 === t
                ? a({ amount: 0, currency: d })
                : u7.YP(t.id).then((e) => {
                      a(e);
                  });
        }, [t, d]),
        (0, p.jsxs)(p.Fragment, {
            children: [
                i ? null : (0, p.jsx)(eE.c, { className: d_.__invalid_sourceDivider }),
                (0, p.jsxs)("div", {
                    className: d_.Yb,
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
                            : (0, p.jsx)(V.E, {
                                  variant: "text-sm/medium",
                                  children: g.intl.string(dN.default["/FQWfA"]),
                              }),
                        (0, p.jsxs)("div", {
                            className: d_.zy,
                            children: [
                                (0, p.jsx)("div", {
                                    className: d_.Tq,
                                    children:
                                        null == r
                                            ? (0, p.jsx)(u3.y, { type: u3.y.Type.SPINNING_CIRCLE })
                                            : (0, p.jsx)(V.E, {
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
                                (0, p.jsx)(eh.$, {
                                    variant: "secondary",
                                    onClick: l,
                                    size: "sm",
                                    text: g.intl.string(dN.default.iBFPMf),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
class db extends f.PureComponent {
    state = { editingPayment: null };
    handleEditClick = async (e) => {
        try {
            await u7.Gr(e), this.setState({ editingPayment: e });
        } catch (e) {}
    };
    handleCancel = () => {
        this.setState({ editingPayment: null });
    };
    handleDelete = async (e) => {
        try {
            await u7.JQ(e), this.setState({ editingPayment: null });
        } catch (e) {}
    };
    handleSubmit = async (e, t) => {
        if (null != e)
            try {
                await u7.Ps(e, t), this.setState({ editingPayment: null });
            } catch (e) {}
    };
    handlePaymentSourceAdded = async (e) => {
        await (0, di.c_)(e.id);
    };
    handleAddPaymentMethod = () => {
        (0, _.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(i.bind(i, 362111));
                return (t) => (0, p.jsx)(e, { ...t, onAddPaymentSource: this.handlePaymentSourceAdded });
            },
            {
                onCloseCallback: () => {
                    (0, u5.ET)();
                },
                onCloseRequest: q.tEg,
            },
        );
    };
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, p.jsxs)("div", {
            className: d_.qr,
            children: [
                0 === Object.keys(e).length
                    ? (0, p.jsxs)("div", {
                          className: d_.z8,
                          children: [
                              (0, p.jsx)(V.E, { variant: "text-sm/normal", children: g.intl.string(g.t.aRHpAB) }),
                              (0, p.jsx)(V.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  className: d_.Sv,
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
                .sort((e, t) => (e.id === i ? -1 : t.id === i ? 1 : dn.default.compare(e.id, t.id))),
            d = u.filter((e) => !(e instanceof u9.LQ)),
            c = u.filter((e) => e instanceof u9.LQ),
            m = this.state.editingPayment,
            A = d.findIndex((e) => e.id === m),
            h = d.map((e, t) =>
                (0, p.jsx)(
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
                    : (0, p.jsx)(dI, {
                          hideDivider: 0 === d.length || A === d.length - 1,
                          isForSubscription: !1,
                          locale: s,
                          onRedeemClick: () =>
                              (0, u8.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page" }),
                      })),
            (0, p.jsxs)(p.Fragment, {
                children: [
                    t
                        ? (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsxs)(eA.D, {
                                      variant: "heading-lg/semibold",
                                      children: [
                                          (0, p.jsx)(u4.X, { size: "sm", className: d_.hz }),
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
var dv = i(459357),
    dj = i(295405),
    dy = i(166403),
    dO = i(773669),
    dR = i(589764);
function dL() {
    let e = (0, u1.vg)("PaymentMethodsHeader"),
        t = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.storeCountry);
    return e && t?.country != null ? { country: t.country, countryName: (0, u2.Gw)(t.country) } : null;
}
let dD = (0, o.E2)(u.X.BILLING_PAYMENT_METHODS, {
        Component: function (e) {
            let { showHeader: t = !1 } = e,
                i = (0, O.bG)([de.A], () => de.A.isSyncing),
                n = (0, O.bG)([dj.A], () => dj.A.paymentSources),
                s = (0, O.bG)([dj.A], () => dj.A.defaultPaymentSourceId),
                l = (0, O.bG)([dO.default], () => dO.default.locale),
                r = (0, O.bG)([dy.A], () => dy.A.getPremiumTypeSubscription()),
                a = (0, O.bG)([de.A], () => de.A.isRemovingPaymentSource),
                o = (0, O.bG)([de.A], () => de.A.isUpdatingPaymentSource),
                { enabled: u } = (0, dv.c)({ location: "UserSettingsBilling" });
            return (f.useEffect(() => {
                u7.$o(), u7.hP();
            }, []),
            i && 0 === Object.keys(n).length)
                ? (0, p.jsx)("div", { className: dR.o, children: (0, p.jsx)(u3.y, {}) })
                : (0, p.jsx)(db, {
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
    dP = (0, o.zZ)(u.X.BILLING_PAYMENT_METHODS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.W26xGQ),
        useSubtitle: () => {
            let e = dL();
            return null != e ? g.intl.format(g.t.e2t1G5, { country: e.countryName }) : g.intl.string(g.t.h6V3uK);
        },
        useSubtitleDecoration: function () {
            return null == dL()
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
        buildLayout: () => [dD],
    });
var dG = i(549363),
    dU = i(545075);
let dM = (0, o.E2)(u.X.BILLING_TRANSACTION_HISTORY, {
        Component: function () {
            let e = (0, O.bG)([dO.default], () => dO.default.locale);
            return (0, p.jsxs)(p.Fragment, { children: [(0, p.jsx)(dU.kb, {}), (0, p.jsx)(dG.A, { locale: e })] });
        },
        useSearchTerms: () => [g.intl.string(g.t.obLrcK)],
    }),
    dV = (0, o.zZ)(u.X.BILLING_TRANSACTION_HISTORY_CATEGORY, {
        useTitle: () => g.intl.string(g.t.obLrcK),
        buildLayout: () => [dM],
    }),
    dk = (0, o.t_)(u.X.BILLING_PANEL, {
        useTitle: () => g.intl.string(g.t.oeUm2s),
        buildLayout: () => [dP, dV],
        useObscuredNotice: u0.L,
    }),
    dw = (0, o.i4)(u.X.BILLING_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.oeUm2s),
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
class dW extends f.Component {
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
            Y.default.track(q.HAw.OPEN_MODAL, {
                type: "gift_accept",
                location: {
                    ...this.analyticsLocation,
                    section: q.JJy.LIBRARY_INVENTORY_CODE_REDEMPTION,
                    object: q.ZSU.BUTTON_CTA,
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
        return (0, p.jsx)(ia.n, {
            label: g.intl.string(g.t["il+VCo"]),
            children: (0, p.jsx)("form", {
                onSubmit: this.handleSubmit,
                children: (0, p.jsxs)(dY.M, {
                    children: [
                        (0, p.jsx)(lD.k, {
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
let dZ = (0, o.E2)(u.X.GIFT_CODE_REDEMPTION_SETTING, {
    Component: function () {
        let { enabled: e } = (0, dv.c)({ location: "UserSettingsBilling" }),
            t = f.useContext(Y.AnalyticsContext),
            i = (0, O.bG)([e_.A], () => e_.A.enabled);
        return (0, p.jsx)(dW, { analyticsContext: t, obscureInput: i, acceptGiftCardRedemption: e });
    },
    usePredicate: () => !(0, dz.Hp)(),
    useSearchTerms: () => [g.intl.string(g.t["jcSP+g"]), g.intl.string(g.t["il+VCo"])],
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
function d5(e) {
    let { onClose: t, transitionState: i } = e;
    return (0, p.jsx)(lL.Modal, {
        title: "",
        size: "md",
        input: (0, p.jsx)("div", { className: d4.aR }),
        onClose: async () => await t(),
        actions: [{ text: g.intl.string(g.t.cpT0Cq), variant: "primary", onClick: t }],
        transitionState: i,
        children: (0, p.jsxs)("div", {
            className: d4.t4,
            children: [
                (0, p.jsx)(eA.D, { variant: "heading-xl/semibold", children: g.intl.string(g.t.iufib1) }),
                (0, p.jsx)(V.E, { variant: "text-md/normal", className: d4.G3, children: g.intl.string(g.t.eAn6z2) }),
            ],
        }),
    });
}
let d7 = function (e) {
    let { onClose: t, onClaim: i, code: n, outboundPromotion: s, transitionState: l } = e,
        [r, a] = f.useState(null),
        o = (0, sS.GV)(),
        { analyticsLocations: u } = (0, nU.Ay)(eM.A.USER_SETTINGS_GIFT_INVENTORY);
    return (f.useEffect(() => {
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
        ? (0, p.jsx)(d5, { onClose: t, transitionState: l })
        : null == n
          ? (0, p.jsx)(u3.y, { className: d4.Lq })
          : (0, p.jsx)(lL.Modal, {
                title: "",
                size: "md",
                onClose: async () => await t(),
                input: (0, p.jsxs)("div", {
                    className: d4.N1,
                    children: [
                        (0, p.jsx)("div", { className: d4.Qw }),
                        (0, p.jsx)(eA.D, { variant: "heading-xl/semibold", children: g.intl.string(g.t["23BfZh"]) }),
                        (0, p.jsx)(V.E, {
                            variant: "text-md/normal",
                            className: d4.G3,
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
                            let e = (0, d2.kc)(n, s);
                            window.open(e, "_blank");
                        },
                    },
                ],
                transitionState: l,
                "aria-label": o,
                children: (0, p.jsxs)("div", {
                    children: [
                        (0, p.jsx)(eE.c, { className: d4.M5 }),
                        (0, p.jsx)(sy.D, {
                            label: g.intl.string(g.t.s9LFQh),
                            helperText: g.intl.string(g.t["F+nFTZ"]),
                            children: (0, p.jsx)(d6.A, {
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
        return (0, p.jsxs)(lM.A, {
            className: ew()(ci.wx, i),
            align: lM.A.Align.CENTER,
            children: [
                (0, p.jsx)("div", { className: ci.Bn, style: null != n ? { backgroundImage: `url(${n})` } : void 0 }),
                t,
            ],
        });
    },
    cs = (e) => {
        let { children: t, className: i } = e;
        return (0, p.jsx)("div", { className: ew()(ci.rf, i), children: t });
    };
class cl extends f.PureComponent {
    static Header = cn;
    static Body = cs;
    render() {
        let { children: e, className: t, onMouseEnter: i, onMouseLeave: n } = this.props;
        return (0, p.jsx)("div", { className: ew()(ci.Nr, t), onMouseEnter: i, onMouseLeave: n, children: e });
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
class cx extends f.PureComponent {
    _copyModeTimeout = new oC.Ep();
    state = { copyMode: ct.q.DEFAULT };
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case ct.q.SUCCESS:
                return g.intl.string(g.t.XVvPjU);
            case ct.q.ERROR:
                return g.intl.string(g.t.i4GM3L);
            default:
                return g.intl.string(g.t.OpuAlK);
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
        return (0, p.jsxs)(lM.A, {
            direction: lM.A.Direction.VERTICAL,
            className: cE.Gj,
            children: [
                (0, p.jsx)(ct.e, {
                    className: cE.ph,
                    value: (0, dK.Zq)(t.code),
                    text: this.copyButtonText,
                    mode: i,
                    supportsCopy: cA.p5,
                    hideMessage: e ? g.intl.string(g.t["0RLn47"]) : null,
                    onCopy: this.handleCopy,
                    buttonColor: aV.XD.BRAND,
                    buttonLook: aV.pR.FILLED,
                }),
                (0, p.jsxs)("div", {
                    className: cE.KB,
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
class cT extends f.PureComponent {
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
            ? (0, p.jsx)(co.e, { shape: "square", sku: e, containerClassName: cE.ez })
            : null != t
              ? (0, p.jsx)(cr.A, { giftStyle: t, className: cE.ez, shouldAnimate: this.state.isHovered })
              : (0, p.jsx)(e7.A, { game: i, size: e7.M.MEDIUM, skuId: e.id });
    }
    renderSubtitle() {
        let { sku: e, entitlements: t, application: i } = this.props;
        return (0, ca.bF)(e)
            ? (0, p.jsxs)("div", {
                  className: ew()(cE.Oc, cE.ic),
                  children: [
                      (0, p.jsx)(e7.A, { game: i, size: e7.M.XSMALL, skuId: e.id, className: cE._u }),
                      g.intl.format(g.t["6plpZi"], { applicationName: i.name, copies: t.length }),
                  ],
              })
            : (0, p.jsx)("div", { className: cE.Oc, children: g.intl.format(g.t.zMcvcA, { copies: t.length }) });
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
            (0, p.jsx)("div", { className: cE.mO, children: e })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, p.jsxs)(lM.A, {
            justify: lM.A.Justify.BETWEEN,
            align: lM.A.Align.CENTER,
            className: cE.pe,
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
        return (0, p.jsxs)(cl, {
            className: n,
            children: [
                (0, p.jsx)(M.D, {
                    onClick: this.handleToggleOpen,
                    className: cE.Nr,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, p.jsx)(cl.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, p.jsxs)("div", {
                            className: cE.MY,
                            children: [
                                (0, p.jsxs)(lM.A, {
                                    align: lM.A.Align.CENTER,
                                    children: [
                                        this.renderGiftIcon(),
                                        (0, p.jsxs)("div", {
                                            className: cE.TK,
                                            children: [this.renderTitle(), this.renderSubtitle()],
                                        }),
                                    ],
                                }),
                                (0, p.jsx)(cm.A, {
                                    direction: a ? cm.A.Directions.UP : cm.A.Directions.DOWN,
                                    className: cE.eO,
                                }),
                            ],
                        }),
                    }),
                }),
                a
                    ? (0, p.jsx)(cl.Body, {
                          children: l
                              ? (0, p.jsx)(u3.y, { className: cE.u1 })
                              : (0, p.jsxs)(f.Fragment, {
                                    children: [
                                        i.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        i.map((e) => (0, p.jsx)(cx, { giftCode: e, sku: s, hideCode: r }, e.code)),
                                    ],
                                }),
                      })
                    : null,
            ],
        });
    }
}
let cS = O.Ay.connectStores([cg.A, e_.A, cd.A, eW.A, cc.A, cu.default], (e) => {
    let { skuId: t, subscriptionPlanId: i, giftStyle: n } = e,
        s = cg.A.get(t);
    if (null == s) throw Error("SKU was unavailable while rendering gift.");
    let l = cd.A.getForGifterSKUAndPlan(cu.default.getId(), t, i)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === n);
    return {
        sku: s,
        hideCodes: e_.A.enabled,
        isFetching: cd.A.getUserGiftCodesFetchingForSKUAndPlan(t, i),
        loadedAt: cd.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, i),
        application: eW.A.getApplication(s.applicationId),
        subscriptionPlan: null != i ? (0, ch.c9)(i) : null,
        giftCodes: l,
    };
})(cT);
var cp = i(928661);
function cf(e) {
    let t,
        { outboundPromotion: i, code: n, disabled: s } = e,
        [l, r] = f.useState(!1),
        [a, o] = f.useState(!1),
        u = () => r((e) => !e),
        d = (0, d$.Ay)(),
        c = (0, d2.WD)(i.id, d),
        m = null != n,
        A = f.useMemo(
            () =>
                (0, rO.i$)(
                    m
                        ? null != i.outboundRedemptionEndDate
                            ? ry()(i.outboundRedemptionEndDate)
                            : ry()(i.endDate).add(d1)
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
        { outboundTitle: x, outboundTermsAndConditions: T } = i;
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsxs)("div", {
                className: ew()(cp.uI, cp.AX),
                children: [
                    (0, p.jsxs)("div", {
                        className: cp.gE,
                        children: [
                            (0, p.jsxs)("div", {
                                className: cp.At,
                                children: [
                                    (0, p.jsx)("div", {
                                        className: cp.$G,
                                        children: (0, p.jsx)("img", { alt: "", src: c, className: cp.IJ }),
                                    }),
                                    (0, p.jsxs)("div", {
                                        children: [
                                            (0, p.jsx)(eA.D, { variant: "heading-md/semibold", children: x }),
                                            (0, p.jsx)(V.E, {
                                                variant: "text-sm/normal",
                                                color: "text-default",
                                                className: cp.__invalid_promotionText,
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
                            className: cp.GL,
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: d0.A.parse(T, !1, { allowLinks: !0 }),
                        }),
                ],
            }),
            a &&
                (0, p.jsx)(dq.aF, {
                    renderModal: (e) =>
                        (0, p.jsx)(d7, {
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
let cN = (0, o.E2)(u.X.GIFT_INVENTORY_LIST_SETTING, {
        Component: function () {
            let e = (0, O.yK)([ce.A], () => ce.A.getGiftable()),
                [t, i] = eR().partition(e, (e) => {
                    let { giftCodeBatchId: t } = e;
                    return null == t;
                }),
                n = (0, O.bG)([t3.default], () =>
                    o2.Ay.isPremiumExactly(t3.default.getCurrentUser(), sf.PremiumTypes.TIER_2),
                ),
                s = (0, O.bG)([t3.default], () => !o2.Ay.isPremium(t3.default.getCurrentUser())),
                l = eR().groupBy(t, (e) => (0, dK.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
                [r, a] = f.useState(!1);
            f.useEffect(() => {
                n6.h.wait(() => {
                    (0, dJ.XJ)().then(() => a(!0));
                });
            }, []);
            let {
                    promotionsLoaded: o,
                    activeOutboundPromotions: d,
                    claimedEndedOutboundPromotions: c,
                    claimedOutboundPromotionCodeMap: m,
                } = (0, dB.y7)(),
                A = d.length + c.length > 0,
                h = s && A;
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
                                      children: A ? g.intl.string(g.t.wFsj3B) : void 0,
                                  }),
                                  a = h
                                      ? (0, p.jsxs)("div", {
                                            className: cp.uo,
                                            children: [
                                                (0, p.jsx)(oK.t, {
                                                    size: "md",
                                                    color: w.A.colors
                                                        .REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                                                    className: cp.PC,
                                                }),
                                                (0, p.jsx)(V.E, {
                                                    variant: "text-md/normal",
                                                    className: cp.Qw,
                                                    children: g.intl.format(g.t.G4fwxK, {
                                                        onClick: () => {
                                                            (0, sE.default)(), (0, sO.pX)(q.BVt.APPLICATION_STORE);
                                                        },
                                                    }),
                                                }),
                                                (0, p.jsx)(d8.A, {
                                                    showGradient: !0,
                                                    className: cp.aA,
                                                    subscriptionTier: sf.pe.TIER_2,
                                                    textOptions: { textOverride: g.intl.string(g.t.mr4K7D) },
                                                }),
                                            ],
                                        })
                                      : null;
                              return (0, p.jsxs)("div", {
                                  children: [
                                      r,
                                      A ? (0, p.jsx)(eE.c, { className: cp.yF }) : null,
                                      (0, p.jsx)(d9.A, {
                                          className: cp.Yj,
                                          isShown: h,
                                          type: d9.i.PREMIUM,
                                          hasBackground: !0,
                                          children: (0, p.jsxs)("div", {
                                              className: ew()({ [cp.sW]: !h }),
                                              children: [
                                                  a,
                                                  c.map((e) => {
                                                      let { code: t, promotion: i } = e;
                                                      return (0, p.jsx)(
                                                          cf,
                                                          { outboundPromotion: i, code: t, disabled: !n },
                                                          i.id,
                                                      );
                                                  }),
                                                  d.map((e) =>
                                                      (0, p.jsx)(
                                                          cf,
                                                          { outboundPromotion: e, code: m[e.id], disabled: !n },
                                                          e.id,
                                                      ),
                                                  ),
                                                  null != e
                                                      ? (0, p.jsx)(
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
                                                      ? (0, p.jsx)(
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
                                                      ? (0, p.jsx)(
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
                          (0, p.jsx)("div", {
                              className: cp.sW,
                              children: (0, p.jsxs)(dQ.F, {
                                  component: (0, p.jsx)(eA.D, {
                                      variant: "heading-md/semibold",
                                      children: g.intl.string(g.t["9KeUbY"]),
                                  }),
                                  children: [
                                      (0, p.jsx)(eE.c, { className: cp.yF }),
                                      0 === Object.keys(l).length
                                          ? (0, p.jsxs)("div", {
                                                className: cp.p$,
                                                children: [
                                                    (0, p.jsx)("div", { className: cp.QT }),
                                                    (0, p.jsx)(dQ.H, {
                                                        className: cp.ks,
                                                        children: g.intl.string(g.t.B1qgZn),
                                                    }),
                                                    (0, p.jsx)("p", {
                                                        className: cp.WO,
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
                                                    } = (0, dK.X6)(e);
                                                    return (0, p.jsx)(
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
                : (0, p.jsx)(u3.y, { className: cp.Lq });
        },
        usePredicate: () => !(0, dz.Hp)(),
        useSearchTerms: () => [g.intl.string(g.t["jcSP+g"]), g.intl.string(g.t["9KeUbY"])],
    }),
    c_ = (0, o.E2)(u.X.GIFT_BLOCKED_PAYMENTS_SETTING, {
        Component: dU.uK,
        usePredicate: () => (0, dz.Hp)(),
        useSearchTerms: () => [g.intl.string(g.t.vwMEHS)],
    }),
    cC = (0, o.zZ)(u.X.GIFT_INVENTORY_CATEGORY, { buildLayout: () => [dZ, cN, c_] }),
    cI = (0, o.t_)(u.X.GIFT_PANEL, { useTitle: () => g.intl.string(g.t["jcSP+g"]), buildLayout: () => [cC] }),
    cb = (0, o.i4)(u.X.GIFT_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["jcSP+g"]),
        icon: dF.o,
        usePersistentBadge: function () {
            return f.useMemo(() => ({ badgeType: eN.Xi.COUNT, useCount: () => (0, dB.IO)().length }), []);
        },
        buildLayout: () => [cI],
    });
var cv = i(659758),
    cj = i(102581),
    cy = i(815846);
let cO = (0, o.E2)(u.X.NITRO_SETTING, {
        Component: function () {
            let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser());
            return (0, o2.YE)(e, sf.PremiumTypes.TIER_2) ? (0, p.jsx)(cy.A, {}) : (0, p.jsx)(cj.A, {});
        },
        useSearchTerms: () => [g.intl.string(g.t.Ipxkog)],
    }),
    cR = (0, o.zZ)(u.X.NITRO_CATEGORY, { buildLayout: () => [cO] }),
    cL = (0, o.t_)(u.X.NITRO_PANEL, {
        useTitle: () => g.intl.string(g.t.Ipxkog),
        useObscuredNotice: u0.L,
        buildLayout: () => [cR],
    }),
    cD = (0, o.i4)(u.X.NITRO_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.Ipxkog),
        icon: oK.t,
        usePersistentBadge: function (e) {
            return f.useMemo(
                () => ({ badgeType: eN.Xi.STRONGLY_DISCOURAGED_CUSTOM, useCustomBadge: () => (0, cv.e)(e) }),
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
    return (0, p.jsxs)("li", {
        className: ew()(cY.Nr, t),
        children: [
            (0, p.jsx)(i, { className: cY.Kk }),
            (0, p.jsx)(V.E, { className: cY.__invalid_description, variant: "text-sm/medium", children: n }),
        ],
    });
}
let cK = function (e) {
    let { cardClassName: t } = e;
    return (0, p.jsxs)("div", {
        className: cY.iE,
        children: [
            (0, p.jsxs)("div", {
                className: cY.Qs,
                children: [
                    (0, p.jsx)(eA.D, {
                        className: cY.R_,
                        color: "always-white",
                        variant: "heading-xxl/bold",
                        children: g.intl.string(g.t.IzKs3o),
                    }),
                    (0, p.jsxs)("ul", {
                        className: cY.kR,
                        children: [
                            (0, p.jsx)(cH, { className: t, icon: cF.v, children: g.intl.string(g.t.TZigSO) }),
                            (0, p.jsx)(cH, {
                                className: t,
                                icon: (e) =>
                                    (0, p.jsx)("img", { className: ew()(e.className, cY.Dp), src: cX, alt: "" }),
                                children: g.intl.string(g.t.hjQuV2),
                            }),
                            (0, p.jsx)(cH, { className: t, icon: cB.i, children: g.intl.string(g.t["2RUcaM"]) }),
                            (0, p.jsx)(cH, { className: t, icon: cz.C, children: g.intl.string(g.t.bJoZKV) }),
                        ],
                    }),
                ],
            }),
            (0, p.jsx)("div", { className: cY.JP }),
        ],
    });
};
var cW = i(834040),
    cZ = i(811227);
let cq = [
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
    cQ = function (e) {
        let { className: t } = e,
            [i, n] = f.useState(null);
        return (0, p.jsxs)("div", {
            className: ew()(cZ.iE, t),
            children: [
                (0, p.jsx)(eA.D, {
                    className: cZ.R_,
                    variant: "heading-xxl/bold",
                    children: g.intl.string(g.t.HPJ6Nj),
                }),
                (0, p.jsx)("ul", {
                    className: cZ.p_,
                    children: cq.map((e, t) => {
                        let s = i === t;
                        return (0, p.jsxs)(
                            "div",
                            {
                                className: cZ.Aw,
                                children: [
                                    (0, p.jsxs)(M.D, {
                                        className: ew()(cZ.k7, { [cZ.lo]: s }),
                                        onClick: () => n((e) => (e === t ? null : t)),
                                        tag: "li",
                                        children: [
                                            (0, p.jsx)(V.E, {
                                                className: cZ.b1,
                                                variant: "text-lg/normal",
                                                children: e.getQuestion(),
                                            }),
                                            s
                                                ? (0, p.jsx)(cW.Q, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: cZ.q4,
                                                  })
                                                : (0, p.jsx)(r7.j, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: cZ.q4,
                                                  }),
                                        ],
                                    }),
                                    s &&
                                        (0, p.jsx)(V.E, {
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
                resolution: (0, c1.eT)("GuildBoostingMarketingTierComparisonTable"),
                framerate: sf.TG[q.TVA.TIER_2].limits.screenShareQualityFramerate,
            }),
        getTier3Value: () =>
            g.intl.formatToPlainString(g.t.zZ6Rdi, {
                resolution: (0, c1.eT)("GuildBoostingMarketingTierComparisonTable"),
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
function c6(e) {
    let { children: t, className: i, tier: n } = e,
        s = n === q.TVA.NONE ? "text-muted" : "text-strong",
        l = n === q.TVA.NONE || null == n ? "heading-xl/normal" : "heading-xl/bold";
    return (0, p.jsxs)("th", {
        className: ew()(c2.PG, i),
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
function c4(e) {
    let t,
        { className: i, textVariant: n = "text-md/bold", value: s } = e;
    if ("boolean" == typeof s) {
        let e = ew()(c2.Jk, { [c2.I$]: s });
        t = s
            ? (0, p.jsx)(c$.A, { size: "md", color: "currentColor", className: e })
            : (0, p.jsx)(c0.P, { size: "md", color: "currentColor", className: e });
    } else t = (0, p.jsx)(V.E, { color: "interactive-text-active", variant: n, children: s });
    return (0, p.jsx)("td", { className: ew()(c2.xR, i), children: t });
}
function c5(e) {
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
              className: ew()(c2.ER, { [c2.GH]: i === q.TVA.TIER_2, [c2.z5]: i === q.TVA.TIER_3 }),
              children: (0, p.jsx)(V.E, {
                  className: c2.uQ,
                  color: "always-white",
                  variant: "text-xs/bold",
                  children: t === q.TVA.TIER_3 ? g.intl.string(g.t.d849Up) : g.intl.string(g.t.dZeX1z),
              }),
          });
}
function c7(e) {
    let { isFocused: t, handleFocus: i, handleRowBlur: n, theme: s, row: l, hideTier0: r } = e,
        a = f.useRef(null);
    return (0, p.jsxs)("tr", {
        className: c2.__invalid_tableRow,
        children: [
            (0, p.jsx)("th", {
                className: ew()(c2.xR, c2.uB),
                scope: "row",
                children: (0, p.jsx)(M.D, {
                    className: ew()(c2.VC, c2.xR, c2.Rk),
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
                                className: c2.Mz,
                                src: (0, cJ.M)(s) ? l.getPerkPreviewDarkTheme() : l.getPerkPreviewLightTheme(),
                                alt: "",
                            }),
                        shouldShow: t,
                        spacing: 16,
                        children: () =>
                            (0, p.jsx)(V.E, { variant: "text-md/normal", ref: a, children: l.getPerkHeading() }),
                    }),
                }),
            }),
            !r && (0, p.jsx)(c4, { textVariant: "text-md/normal", value: l.getTier0Value() }),
            (0, p.jsx)(c4, { value: l.getTier1Value() }),
            (0, p.jsx)(c4, { value: l.getTier2Value() }),
            (0, p.jsx)(c4, { value: l.getTier3Value() }),
        ],
    });
}
let c8 = function (e) {
    let t = (0, d$.Ay)(),
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
                    className: c2.R_,
                    variant: "heading-xxl/extrabold",
                    children: g.intl.string(g.t["9GGb9k"]),
                }),
            (0, p.jsxs)("div", {
                className: c2.wY,
                children: [
                    null != l && (0, p.jsx)(c5, { currentTier: l.premiumTier }),
                    (0, p.jsxs)("table", {
                        className: c2.tp,
                        cellPadding: 0,
                        cellSpacing: 0,
                        children: [
                            (0, p.jsx)("thead", {
                                children: (0, p.jsxs)("tr", {
                                    className: c2.__invalid_tableRow,
                                    children: [
                                        (0, p.jsx)(c6, { className: c2.VC, children: g.intl.string(g.t.F5MY0k) }),
                                        !a && (0, p.jsx)(c6, { tier: q.TVA.NONE, children: g.intl.string(g.t.mx8j2m) }),
                                        (0, p.jsx)(c6, { tier: q.TVA.TIER_1, children: g.intl.string(g.t.nzXtaS) }),
                                        (0, p.jsx)(c6, { tier: q.TVA.TIER_2, children: g.intl.string(g.t["h33/uW"]) }),
                                        (0, p.jsx)(c6, { tier: q.TVA.TIER_3, children: g.intl.string(g.t.BfF6ED) }),
                                    ],
                                }),
                            }),
                            (0, p.jsx)("tbody", {
                                className: c2.__invalid_tableBody,
                                children: c3.map((e, s) => {
                                    let l = i === s;
                                    return void 0 === e.predicate
                                        ? (0, p.jsx)(
                                              c7,
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
    let d = f.useMemo(
        () =>
            l.isPausedOrPausePending && a === sf.xc.NONE
                ? (0, p.jsx)(U.Dr, {
                      id: "manage-subscription",
                      label: g.intl.string(g.t.obRG6Y),
                      action: () => (0, ej.openUserSettings)(u.X.SUBSCRIPTIONS_PANEL),
                      iconLeft: gl.x,
                      leadingAccessory: { type: "icon", icon: gl.x },
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
            (0, gr.I5)(t)
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
var go = i(545934),
    gu = i(496431);
let gd = function (e) {
    let { className: t, cooldown: i } = e,
        n = (0, gu.A)(i);
    return (0, p.jsx)(V.E, {
        className: t,
        variant: "text-sm/medium",
        color: "text-muted",
        children: (0, rO.uN)(n, { days: g.t.WUTPDc, hours: g.t.c1qodV, minutes: g.t["2+A3dv"] }),
    });
};
var gc = i(482900);
let gg = function (e) {
    let { className: t, imageClassName: n, boostInCooldown: s, useReducedMotion: l } = e;
    return (0, p.jsx)("div", {
        className: ew()(gc.h4, t, { [gc.K2]: s }),
        children: (0, p.jsx)("img", {
            className: ew()(gc.Sl, n, { [gc.x8]: s }),
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
    return (0, p.jsxs)("div", {
        className: ew()(gm.sn, t),
        children: [
            s
                ? (0, p.jsx)("img", { className: ew()(gm.$J, gm.qX), src: i(728707), alt: "" })
                : (0, p.jsx)(gg, { className: gm.$J, boostInCooldown: n, useReducedMotion: l }),
            !s && n && (0, p.jsx)("img", { className: gm.De, src: i(438807), alt: "" }),
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
        s = (0, uV.bG)([H.A], () => H.A.getGuild(i), [i]),
        l = (0, gT.A)(s?.id).total;
    return null == s
        ? (0, p.jsx)("div", {
              className: ew()(t, gS.bo),
              children: (0, p.jsx)("div", {
                  className: gS.$g,
                  children: (0, p.jsx)(V.E, { variant: "text-lg/bold", children: g.intl.string(g.t["6Kwwuo"]) }),
              }),
          })
        : (0, p.jsxs)("div", {
              className: ew()(t, gS.bo),
              children: [
                  (0, p.jsx)(gh.Ay, { className: gS.__invalid_guildIcon, guild: s, size: gh.Ay.Sizes.LARGER }),
                  (0, p.jsxs)("div", {
                      className: gS.$g,
                      children: [
                          (0, p.jsx)(V.E, { variant: "text-lg/bold", children: s.name }),
                          (0, p.jsxs)("div", {
                              className: gS.TZ,
                              children: [
                                  (0, p.jsx)(cP._, {
                                      color: w.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                      className: gS.Me,
                                  }),
                                  (0, p.jsx)(V.E, {
                                      variant: "text-sm/bold",
                                      color: "text-muted",
                                      children: g.intl.format(g.t["pob/cL"], { subscriptions: l }),
                                  }),
                                  (0, p.jsx)("div", { className: gS.me }),
                                  (0, p.jsx)(V.E, {
                                      variant: "text-sm/bold",
                                      color: "text-muted",
                                      children: (0, gr.gb)(s.premiumTier, { useLevels: !1 }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  n
                      ? (0, p.jsx)(gx.A, {
                            guild: s,
                            analyticsLocation: {
                                page: q.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                section: q.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                object: q.ZSU.BUTTON_CTA,
                                objectType: q.AnalyticsObjectTypes.BUY,
                            },
                            pauseAnimation: !0,
                            size: aV.$n.Sizes.MEDIUM,
                            color: aV.$n.Colors.PRIMARY,
                            buttonText: g.intl.string(g.t.aBHecF),
                        })
                      : (0, p.jsx)(eh.$, {
                            variant: "secondary",
                            text: g.intl.string(g.t.KLOhbO),
                            onClick: () => {
                                (0, sE.default)(),
                                    (0, gE.K4)({
                                        guildId: s.id,
                                        location: { section: q.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA },
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
        a = f.useMemo(() => {
            if (s) {
                let e = l.currentPeriodEnd;
                return (
                    l.isPausedForFractionalPremium && (e = r.endsAt.toDate()), g.intl.format(g.t.Z4ULRD, { date: e })
                );
            }
            let e = null != i.premiumGuildSubscription ? dn.default.extractTimestamp(i.premiumGuildSubscription.id) : 0;
            return g.intl.formatToPlainString(g.t.lY2Bur, { date: new Date(e) });
        }, [i, s, l, r]),
        o = f.useMemo(
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
        u = (0, gn.p)(n, { from: { opacity: 0 }, enter: { opacity: 1 }, leave: { opacity: 0 } }, "animate-always");
    return s || t === q.TVA.NONE
        ? (0, p.jsx)("div", {
              className: gf.xm,
              children: (0, p.jsx)(V.E, { variant: "text-sm/medium", color: "text-muted", children: a }),
          })
        : u((e, t) =>
              (0, p.jsx)(gi.animated.div, {
                  style: e,
                  className: gf.xm,
                  children: (0, p.jsx)(V.E, { variant: "text-sm/medium", color: "text-muted", children: t ? o : a }),
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
        o = f.useMemo(() => (null != i.cooldownEndsAt ? new Date(i.cooldownEndsAt) : null), [i]),
        u = f.useMemo(() => null != o && o > new Date(), [o]),
        d = (0, gr.I5)(i),
        c = (0, cw.A)(),
        m = f.useRef(null);
    return (0, p.jsxs)("div", {
        className: gf.PW,
        children: [
            (0, p.jsxs)("div", {
                className: gf.$U,
                children: [
                    (0, p.jsx)(gA, { isCanceled: d, hasCooldown: u, useReducedMotion: a }),
                    (0, p.jsx)("div", {
                        className: gf.vh,
                        children:
                            null != o && u && !d
                                ? (0, p.jsx)(gd, { className: gf.xm, cooldown: o.getTime() })
                                : (0, p.jsx)(gN, {
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
                            return (0, p.jsx)(ga, {
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
                                className: gf.oU,
                                children: (0, p.jsx)(gs.F, { size: "md", color: "currentColor" }),
                            }),
                    }),
                ],
            }),
            !r && (0, p.jsx)("div", { className: gf.eX }),
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
        r = (0, uV.bG)([H.A], () => H.A.getGuild(t), [t]);
    return (0, p.jsxs)("div", {
        className: gf.ag,
        children: [
            (0, p.jsx)(gp, { guildId: t, boostingVariant: !1 }),
            i.map((e, t) =>
                (0, p.jsx)(
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
        s = (0, uV.bG)([H.A], () => H.A.getGuild(t), [t]),
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
    return (0, p.jsxs)("div", {
        className: gf.ag,
        children: [
            (0, p.jsx)(gp, { guildId: t, boostingVariant: !1 }),
            i.map((e, t) =>
                (0, p.jsx)(
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
              className: gf.iE,
              children: [
                  (0, p.jsx)("div", {
                      className: gf.kL,
                      children: dn.default
                          .keys(n)
                          .map((e) =>
                              (0, p.jsx)(gI, { guildId: e, premiumSubscription: i, appliedGuildBoosts: n[e] }, e),
                          ),
                  }),
                  (0, p.jsx)("div", { className: gf.vK }),
              ],
          });
}
function gv(e) {
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
    return (0, p.jsxs)("div", {
        className: gf.iE,
        children: [
            (0, p.jsx)("div", {
                className: gf.kL,
                children: dn.default
                    .keys(l)
                    .map((e) =>
                        (0, p.jsx)(
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
            (0, p.jsx)("div", { className: gf.vK }),
        ],
    });
}
var gj = i(520610);
let gy = function (e) {
    let { hasGuildBoostSlots: t, hasAppliedGuildBoosts: n, hasBoostPerk: s, canAddBoosts: l } = e;
    return (0, p.jsxs)("div", {
        className: gj.iE,
        children: [
            (0, p.jsx)("div", {
                className: gj.bj,
                children: (0, p.jsx)("img", { alt: "", className: gj.KV, src: i(742885) }),
            }),
            (0, p.jsxs)("div", {
                className: gj.D7,
                children: [
                    (0, p.jsx)(eA.D, {
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
                                        ? g.intl.format(g.t.s9zQyG, {})
                                        : g.intl.format(g.t.Rb8Jhs, {})
                                    : g.intl.string(g.t["2rh0by"])
                                : g.intl.format(g.t.Rb8Jhs, {});
                        })({ hasGuildBoostSlots: t, hasBoostPerk: s, hasAppliedGuildBoosts: n, canAddBoosts: l }),
                    }),
                    (0, p.jsx)("svg", {
                        viewBox: "0 0 660 210",
                        className: gj.Mz,
                        children: (0, p.jsx)("path", {
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
    return (0, p.jsxs)("div", {
        className: gO.iE,
        children: [
            (0, p.jsx)("img", { className: gO.Kk, alt: "", src: gR }),
            (0, p.jsxs)("div", {
                className: gO.pq,
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
                    (0, sO.pX)(q.BVt.GUILD_DISCOVERY), (0, sE.default)();
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
    let e = f.useRef(null),
        { analyticsLocations: t } = (0, nU.Ay)(),
        { fractionalState: n } = (0, cw.A)();
    function s(i) {
        null != e.current && (0, _.closeModal)(e.current),
            (0, gG.g)({
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
    let r = (0, gr.Nc)({ fractionalState: n });
    return (0, p.jsxs)("div", {
        className: gU.iE,
        children: [
            (0, p.jsx)(cP._, { color: w.A.unsafe_rawColors.GUILD_BOOSTING_PINK, className: gU.$J }),
            (0, p.jsx)(V.E, {
                className: gU.C,
                color: "text-default",
                variant: "text-sm/medium",
                children: g.intl.format(g.t.kqC5vq, {
                    boostAnyGuildHook: (e, t) => {
                        let i = null != r,
                            n = (0, gP.O)(e),
                            s = (0, p.jsx)("div", {
                                className: gU.lO,
                                children: (0, p.jsx)(
                                    F.Q,
                                    { variant: "primary", onClick: i ? void 0 : l, text: n, disabled: i },
                                    t,
                                ),
                            });
                        return i
                            ? (0, p.jsx)(
                                  gD.A,
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
var gV = i(279574);
let gk = function (e) {
    let { canAddBoosts: t, canApplyBoosts: i } = e,
        n = (0, O.bG)([ge.A], () => ge.A.affinities),
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
              className: gV.iE,
              children: [
                  t &&
                      (0, p.jsx)(eA.D, {
                          variant: "heading-lg/semibold",
                          className: gV.wx,
                          children: g.intl.string(g.t.r90Wgo),
                      }),
                  l.map((e) => (0, p.jsx)(gp, { className: gV.ZS, guildId: e, boostingVariant: !0 }, e)),
                  s.length > 3 && i && (0, p.jsx)(gM, {}),
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
                r = o2.Ay.getDefaultPrice(l.id, i),
                a = (0, dt.CE)((0, dt.$g)(r.amount, r.currency), l.interval, l.intervalCount);
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
        className: gw.i,
        children: [
            (0, p.jsx)(eA.D, { variant: "heading-lg/bold", className: gw.V, children: l }),
            null != r && (0, p.jsx)(V.E, { variant: "text-sm/normal", children: r }),
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
        o = f.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t]),
        u = (0, gr.I5)(t),
        d = l?.isPaused === !0 && a === sf.xc.NONE,
        c = g.intl.string(g.t.mOWsF1);
    return (0, p.jsxs)(
        "li",
        {
            className: gH.Hp,
            children: [
                (0, p.jsxs)("div", {
                    className: gH.YL,
                    children: [
                        (0, p.jsx)(gA, {
                            className: gH.W6,
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
                              ? (0, p.jsx)(gd, { cooldown: o.getTime() })
                              : (0, p.jsx)(V.E, {
                                    className: gH.__invalid_unappliedGuildBoostSlotDescription,
                                    color: "text-muted",
                                    variant: "text-sm/medium",
                                    children: g.intl.string(g.t["2mcafz"]),
                                }),
                    ],
                }),
                (0, p.jsxs)("div", {
                    className: gH.E7,
                    children: [
                        i &&
                            !u &&
                            (0, p.jsx)(gD.A, {
                                shouldShow: d,
                                text: c,
                                "aria-label": c.toString(),
                                children: (e) =>
                                    (0, p.jsx)("div", {
                                        className: gH.LB,
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
                            (0, p.jsx)(gD.A, {
                                shouldShow: d,
                                text: c,
                                "aria-label": c.toString(),
                                children: (e) =>
                                    (0, p.jsx)("div", {
                                        className: gH.LB,
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
function gW(e) {
    (0, _.openModalLazy)(async () => (t) => (0, p.jsx)(gz.default, { ...t, guildBoostSlot: e }));
}
function gZ(e) {
    (0, _.openModalLazy)(async () => (t) => (0, p.jsx)(gY.default, { ...t, guildBoostSlotId: e.id }));
}
let gq = function (e) {
    let t,
        i,
        n,
        { guildBoostSlots: s } = e,
        l = (0, O.bG)([dy.A], () => dy.A.getPremiumTypeSubscription()),
        r = l?.isPausedOrPausePending === !0,
        { fractionalState: a } = (0, cw.A)(),
        o = (0, O.bG)([iW.A], () => iW.A.useReducedMotion),
        u = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
        d = a === sf.xc.FP_SUB_PAUSED,
        c = r && !d,
        {
            appliedGuildBoostSlots: m,
            unappliedGuildBoostSlots: A,
            numActiveGuildBoostSlots: h,
            hasCooldownBoosts: E,
            allGuildBoostsAreOnCooldown: x,
        } = f.useMemo(() => {
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
        S = Math.max(0, T - m.length),
        N = h > T,
        C = T === s.length,
        I = C ? S : 1,
        b = f.useMemo(() => {
            let e = [];
            for (let t = 0; t < I; t++) e.push((0, p.jsx)(gg, { className: gH.YA, useReducedMotion: o }, t));
            return e;
        }, [I, o]),
        v = f.useMemo(() => A.find((e) => e.isAvailable()), [A]);
    if (0 === A.length) return null;
    let j = A.length;
    if (
        ((t = C
            ? g.intl.formatToPlainString(x ? g.t["3DW6Dc"] : g.t["/u15Qc"], { numUnappliedGuildBoostSlots: j })
            : g.intl.formatToPlainString(x ? g.t["3DW6Dc"] : g.t.BPadnO, { numUnappliedGuildBoostSlots: j })),
        o2.Ay.isPremium(u))
    ) {
        let e = (e, t) =>
            (0, p.jsx)(
                M.D,
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
            ? g.intl.format(g.t.omcpSE, { learnMoreHook: e })
            : g.intl.format(g.t["5mAkVi"], { numUnappliedGuildBoostSlots: j, learnMoreHook: e });
    } else
        i = x
            ? g.intl.string(g.t["8pcUZi"])
            : g.intl.formatToPlainString(g.t.Kaw82o, { numUnappliedGuildBoostSlots: j });
    return (
        (n = r && a === sf.xc.NONE ? g.intl.string(g.t.mOWsF1) : g.intl.string(g.t.xr4m5B)),
        (0, p.jsx)("div", {
            className: gH.iE,
            children: (0, p.jsxs)("div", {
                className: ew()(gH.Qs, [gH.Yq]),
                children: [
                    (0, p.jsxs)("div", {
                        className: gH.wx,
                        children: [
                            (0, p.jsxs)("div", {
                                className: gH.RW,
                                children: [
                                    (0, p.jsx)("div", { className: gH.PS, children: b }),
                                    (0, p.jsxs)("div", {
                                        className: gH.__invalid_headerCopy,
                                        children: [
                                            (0, p.jsx)(eA.D, {
                                                className: gH.gg,
                                                variant: "heading-lg/bold",
                                                children: t,
                                            }),
                                            (0, p.jsx)(V.E, {
                                                className: gH.__invalid_headerSubheading,
                                                color: "text-strong",
                                                variant: "text-sm/normal",
                                                children: i,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, p.jsx)("div", {
                                className: gH.di,
                                children: (0, p.jsx)(gD.A, {
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
                                                                  (0, p.jsx)(gB.default, {
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
                            className: gH.LU,
                            children: A.map((e) =>
                                (0, p.jsx)(
                                    gK,
                                    {
                                        guildBoostSlot: e,
                                        isCancellable: N,
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
        i = (0, O.bG)([gt.A], () => gt.A.boostSlots),
        n = f.useMemo(() => Object.values(i), [i]),
        s = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
        l = o2.Ay.isPremium(s, sf.PremiumTypes.TIER_2),
        r = (0, O.bG)([ge.A], () => ge.A.affinities),
        a = (0, O.bG)([K.Ay], () => K.Ay.getFlattenedGuildIds()),
        o = r.length > 0 || a.length > 0,
        u = n.length > 0,
        d = f.useMemo(() => n.filter((e) => null != e.premiumGuildSubscription), [n]),
        c = d.length > 0,
        g = n.length > d.length,
        m = (0, O.bG)([ck.A], () => ck.A.getCurrentUserAppliedBoosts()),
        { fractionalState: A } = (0, cw.A)({ forceFetch: !0 }),
        h = s?.isPremiumGroupMember(),
        E = t?.isPausedOrPausePending === !0 && A === sf.xc.NONE,
        x = t?.isPausedOrPausePending !== !0 && A === sf.xc.NONE && !h,
        T = l && A === sf.xc.FP_SUB_PAUSED,
        S = A === sf.xc.NONE && !h;
    return (0, p.jsxs)("div", {
        className: gQ.GO,
        children: [
            (0, p.jsx)(dU.kb, { className: gQ.ek }),
            (0, p.jsx)(gy, { hasGuildBoostSlots: u, hasAppliedGuildBoosts: c, hasBoostPerk: T, canAddBoosts: x }),
            S &&
                (0, p.jsx)(gF, {
                    hasAppliedGuildBoosts: c,
                    hasBoostPerk: T,
                    hasGuildAffinitiesOrInGuild: o,
                    subscriptionIsPausedOrPausePending: E,
                }),
            h && (0, p.jsx)(c9.A, {}),
            !o && (0, p.jsx)(gL, {}),
            t?.isPaused && A !== sf.xc.FP_SUB_PAUSED
                ? (0, p.jsx)(gb, { appliedGuildBoosts: m, premiumSubscription: t })
                : (0, p.jsx)(gv, { guildBoostSlots: i, premiumSubscription: t }),
            (0, p.jsx)(gq, { guildBoostSlots: n, fractionalPremiumState: A }),
            (0, p.jsx)(gk, { canAddBoosts: c && x, canApplyBoosts: g }),
            (0, p.jsx)(c8, { className: gQ.e4, hideHeading: !0, hideTier0: !0 }),
            (0, p.jsx)(cK, { cardClassName: gQ.KW }),
            (0, p.jsx)(cQ, { className: gQ.JL }),
        ],
    });
}
var g$ = i(527113),
    g0 = i(365199),
    g1 = i(162286);
function g2(e) {
    let { guild: t, className: i } = e,
        { total: n } = (0, gT.A)(t.id);
    return (0, p.jsxs)("div", {
        className: i ?? g1.OA,
        children: [
            (0, p.jsx)(gh.Ay, { className: g1.$f, guild: t, size: gh.Ay.Sizes.MEDIUM }),
            (0, p.jsxs)("div", {
                className: g1.gI,
                children: [
                    (0, p.jsx)(V.E, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        tag: "span",
                        children: t.name,
                    }),
                    (0, p.jsxs)("div", {
                        className: g1.ew,
                        children: [
                            (0, p.jsxs)("div", {
                                className: g1.QW,
                                children: [
                                    (0, p.jsx)(cP._, {
                                        className: g1.Wz,
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
                                        (0, p.jsx)("div", { className: g1.zk }),
                                        (0, p.jsx)(V.E, {
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
        i = (0, O.bG)([H.A], () => H.A.getGuild(t), [t]);
    return null == i
        ? null
        : (0, p.jsxs)("div", {
              className: g1.Nr,
              children: [
                  (0, p.jsx)(g2, { guild: i }),
                  (0, p.jsx)(eh.$, {
                      variant: "secondary",
                      size: "sm",
                      icon: cP._,
                      text: g.intl.string(g.t.aBHecF),
                      onClick: () => {
                          (0, gG.g)({
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
var g6 = i(225334);
let g4 =
    "https://cdn.discordapp.com/assets/content/272d3fa6496aedb9dee76f2d555913bfd56c9e9aacd6de3c18449644d9749657.png";
function g5(e) {
    let { slot: t, guildTier: i, premiumSubscription: n, hasCancelableSlots: s, isLast: l } = e,
        r = f.useRef(null),
        a = (0, gr.I5)(t),
        o = f.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t.cooldownEndsAt]),
        u = null != o && o > new Date(),
        d = (0, cw.A)(),
        c = f.useMemo(
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
        m = f.useMemo(() => {
            if ("" !== c) return c;
            let e = null != t.premiumGuildSubscription ? dn.default.extractTimestamp(t.premiumGuildSubscription.id) : 0;
            return g.intl.formatToPlainString(g.t.lY2Bur, { date: new Date(e) });
        }, [c, t.premiumGuildSubscription]),
        A = f.useMemo(
            () => (a ? (n.isPausedForFractionalPremium ? d.endsAt.toDate() : n.currentPeriodEnd) : null),
            [a, n, d],
        );
    return (0, p.jsxs)("div", {
        className: ew()(g6.iq, { [g6.Mt]: l }),
        children: [
            (0, p.jsxs)("div", {
                className: g6.kd,
                children: [
                    (0, p.jsx)("img", { alt: "", className: g6.bB, src: g4 }),
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
                                              (0, p.jsx)("div", { className: g6.zk }),
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
                                              (0, p.jsx)("div", { className: g6.zk }),
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
                    return (0, p.jsx)(ga, {
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
                        className: g6.Mj,
                        ...e,
                        children: (0, p.jsx)(g0.j, { size: "xs", color: w.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                    }),
            }),
        ],
    });
}
function g7(e) {
    let { guildId: t, slots: i, premiumSubscription: n, hasCancelableSlots: s } = e,
        l = (0, O.bG)([H.A], () => H.A.getGuild(t), [t]);
    return (0, p.jsxs)("div", {
        className: g6.Nr,
        children: [
            (0, p.jsx)("div", {
                className: g6.MY,
                children:
                    null != l
                        ? (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsx)(g2, { guild: l, className: g6.OA }),
                                  (0, p.jsx)(eh.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: g.intl.string(g.t.KLOhbO),
                                      onClick: () => {
                                          (0, sE.default)(),
                                              (0, gE.K4)({
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
                              className: g6.OA,
                              children: (0, p.jsx)(eA.D, {
                                  variant: "heading-md/semibold",
                                  color: "text-default",
                                  children: g.intl.string(g.t["6Kwwuo"]),
                              }),
                          }),
            }),
            i.map((e, t) =>
                (0, p.jsx)(
                    g5,
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
    return (0, p.jsx)("div", {
        className: g6.kR,
        children: dn.default
            .keys(l)
            .map((e) => (0, p.jsx)(g7, { guildId: e, slots: l[e], premiumSubscription: i, hasCancelableSlots: a }, e)),
    });
}
var g9 = i(68179);
function me(e) {
    let { guildBoostSlots: t, fractionalPremiumState: n } = e,
        s = (0, O.bG)([dy.A], () => dy.A.getPremiumTypeSubscription()),
        { unappliedSlots: l, numActiveSlots: r } = f.useMemo(() => {
            let e = [],
                i = 0;
            for (let n of t) !(0, gr.I5)(n) && i++, null == n.premiumGuildSubscription && e.push(n);
            return { unappliedSlots: e, numActiveSlots: i };
        }, [t]),
        a = r > (null != s ? o2.Ay.getNumIncludedPremiumGuildSubscriptionSlots(s.planId) : 0),
        o = s?.isPausedOrPausePending === !0 && n === sf.xc.NONE;
    return 0 === l.length
        ? null
        : (0, p.jsxs)("div", {
              className: g9.Nr,
              children: [
                  (0, p.jsxs)("div", {
                      className: g9.MY,
                      children: [
                          (0, p.jsxs)("div", {
                              className: g9._L,
                              children: [
                                  (0, p.jsxs)("div", {
                                      className: g9.MD,
                                      children: [
                                          (0, p.jsx)("img", { alt: "", className: g9.F8, src: g4 }),
                                          (0, p.jsx)("div", {
                                              className: ew()(g9.qS, "theme-dark"),
                                              children: (0, p.jsx)("span", { className: g9.Vv, children: l.length }),
                                          }),
                                      ],
                                  }),
                                  (0, p.jsxs)("div", {
                                      className: g9.Qp,
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
                          (0, p.jsx)(gD.A, {
                              shouldShow: o,
                              text: g.intl.string(g.t.mOWsF1),
                              "aria-label": g.intl.string(g.t.mOWsF1),
                              children: (e) =>
                                  (0, p.jsx)(eh.$, {
                                      ...e,
                                      variant: "primary",
                                      size: "sm",
                                      icon: cP._,
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
                                                              (0, gG.g)({
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
              ? (0, p.jsx)(gd, { cooldown: u.getTime() })
              : (0, p.jsx)(V.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: g.intl.string(g.t["2mcafz"]),
                });
    let d = s || l;
    return (0, p.jsxs)("div", {
        className: ew()(g9.iq, { [g9.Mt]: n }),
        children: [
            (0, p.jsxs)("div", {
                className: g9.kd,
                children: [(0, p.jsx)("img", { alt: "", className: g9.bB, src: g4 }), t],
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
                                                        (0, p.jsx)(gz.default, { ...e, guildBoostSlot: i }),
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
                                                        (0, p.jsx)(gY.default, { ...e, guildBoostSlotId: i.id }),
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
                            className: g9.Mj,
                            ...e,
                            children: (0, p.jsx)(g0.j, { size: "xs", color: w.A.colors.INTERACTIVE_TEXT_DEFAULT }),
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
        r = ta.A.getArticleURL(q.MVz.GUILD_BOOSTING_FAQ),
        a = n?.isPaused === !0 && l !== sf.xc.FP_SUB_PAUSED,
        o = t.some((e) => null == e.premiumGuildSubscription),
        u = a && s.length > 0,
        d = a ? u : t.some((e) => null != e.premiumGuildSubscription);
    return o || d
        ? (0, p.jsxs)("div", {
              className: mi.i,
              children: [
                  (0, p.jsxs)("div", {
                      className: mi.b,
                      children: [
                          (0, p.jsx)(eA.D, { variant: "heading-md/semibold", children: g.intl.string(g.t.W5rDjW) }),
                          (0, p.jsx)(V.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: g.intl.format(g.t.SpDz1x, { helpdeskArticle: r }),
                          }),
                      ],
                  }),
                  (0, p.jsx)(g8, {
                      guildBoostSlots: i,
                      premiumSubscription: n,
                      pausedAppliedGuildBoosts: s,
                      isPaused: a,
                  }),
                  (0, p.jsx)(me, { guildBoostSlots: t, fractionalPremiumState: l }),
              ],
          })
        : null;
}
var ms = i(917064),
    ml = i(438929);
function mr() {
    return (0, p.jsxs)("div", {
        className: ml.iE,
        children: [
            (0, p.jsx)(eA.D, { variant: "heading-xl/normal", children: g.intl.string(g.t.IzKs3o) }),
            (0, p.jsx)("div", {
                className: ml.kR,
                children: ms.s.map((e, t) => {
                    let i = e.icon;
                    return (0, p.jsxs)(
                        "div",
                        {
                            className: ml.Nr,
                            children: [
                                (0, p.jsx)(i, { className: ml.Kk }),
                                (0, p.jsx)(V.E, {
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
    let [e, t] = f.useState(null),
        [i, n] = f.useState(null);
    return (0, p.jsxs)("div", {
        className: mo.iE,
        children: [
            (0, p.jsx)(eA.D, { variant: "heading-xl/normal", children: g.intl.string(g.t.HPJ6Nj) }),
            (0, p.jsx)("ul", {
                className: mo.p_,
                children: ma.m.map((s, l) => {
                    let r = e === l,
                        a = i === l,
                        o = r || a ? "text-strong" : "text-muted";
                    return (0, p.jsxs)(
                        M.D,
                        {
                            tag: "li",
                            className: ew()(mo.Aw, { [mo.$K]: r }),
                            onClick: () => t((e) => (e === l ? null : l)),
                            onMouseEnter: () => n(l),
                            onMouseLeave: () => n(null),
                            children: [
                                (0, p.jsxs)("div", {
                                    className: mo.k7,
                                    children: [
                                        (0, p.jsx)(V.E, {
                                            className: mo.b1,
                                            color: o,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: s.getQuestion(),
                                        }),
                                        (0, p.jsx)(k.a, {
                                            size: "sm",
                                            color: w.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: mo.q4,
                                            style: { transform: r ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                r &&
                                    (0, p.jsx)(V.E, {
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
    let e = ta.A.getArticleURL(q.MVz.GUILD_SUBSCRIPTIONS);
    return (0, p.jsxs)("div", {
        className: mg.wx,
        children: [
            (0, p.jsxs)("div", {
                className: mg.Qs,
                children: [
                    (0, p.jsxs)("div", {
                        className: mg.B5,
                        children: [
                            (0, p.jsx)("img", { alt: "", className: mg.F8, src: "/assets/263e4cc9043cab70.svg" }),
                            (0, p.jsx)(eA.D, {
                                variant: "heading-xl/normal",
                                children: g.intl.string(mc.default.hjvcLO),
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
            (0, p.jsx)(md.A, {
                variant: "member",
                className: mg.iO,
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
var mA = i(315629),
    mh = i(780082);
function mE() {
    let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser());
    if (null == e || o2.Ay.hasFreeBoosts(e)) return null;
    let t = ta.A.getArticleURL(q.MVz.GUILD_BOOSTING_FAQ);
    return (0, p.jsxs)(mA.h, {
        color: "nitro-pink",
        className: mh.vK,
        children: [
            (0, p.jsxs)("div", {
                className: mh.nw,
                children: [
                    (0, p.jsx)("img", { alt: "", className: mh.q3, src: g4 }),
                    (0, p.jsxs)("div", {
                        className: mh.Tm,
                        children: [
                            (0, p.jsx)(V.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: g.intl.format(g.t.Idh1Vs, { count: sf.M4, boostCount: sf.M4 }),
                            }),
                            (0, p.jsxs)("div", {
                                className: mh.xv,
                                children: [
                                    (0, p.jsx)(oK.t, { className: mh.nE }),
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
                icon: oK.t,
                text: g.intl.string(g.t["8x0jKT"]),
                onClick: gX.e,
            }),
        ],
    });
}
var mx = i(894206);
function mT() {
    let e = (0, O.bG)([ge.A], () => ge.A.affinities),
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
              className: mx.i,
              children: [
                  (0, p.jsx)(eA.D, { variant: "heading-md/semibold", children: g.intl.string(g.t.r90Wgo) }),
                  (0, p.jsx)("div", { className: mx.k, children: i.map((e) => (0, p.jsx)(g3, { guildId: e }, e)) }),
              ],
          });
}
var mS = i(140909);
function mp(e) {
    let { count: t, disabledReason: n } = e,
        s = ta.A.getArticleURL(q.MVz.GUILD_BOOSTING_FAQ);
    return (0, p.jsxs)(mA.h, {
        color: "nitro-pink",
        className: mS.vK,
        children: [
            (0, p.jsxs)("div", {
                className: mS.nw,
                children: [
                    (0, p.jsxs)("div", {
                        className: mS.MD,
                        children: [
                            (0, p.jsx)("img", { alt: "", className: mS.F8, src: g4 }),
                            (0, p.jsx)("div", {
                                className: ew()(mS.qS, "theme-dark"),
                                children: (0, p.jsx)("span", { className: mS.Vv, children: t }),
                            }),
                        ],
                    }),
                    (0, p.jsxs)("div", {
                        className: mS.Tm,
                        children: [
                            (0, p.jsx)(V.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: g.intl.format(g.t.KewnLu, { count: t, boostCount: t }),
                            }),
                            (0, p.jsxs)("div", {
                                className: mS.xv,
                                children: [
                                    (0, p.jsx)(oK.t, { className: mS.nE }),
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
            (0, p.jsx)(gD.A, {
                shouldShow: null != n,
                text: n ?? "",
                "aria-label": n,
                children: (e) =>
                    (0, p.jsx)(eh.$, {
                        ...e,
                        variant: "primary",
                        size: "sm",
                        icon: cP._,
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
                                                (0, gG.g)({
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
function mf(e) {
    let { premiumSubscription: t } = e,
        i = (0, O.bG)([gt.A], () => gt.A.boostSlots),
        n = f.useMemo(() => Object.values(i), [i]),
        s = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
        l = (0, O.bG)([ge.A], () => ge.A.affinities),
        r = (0, O.bG)([K.Ay], () => K.Ay.getFlattenedGuildIds()),
        a = l.length > 0 || r.length > 0,
        o = f.useMemo(() => n.filter((e) => null != e.premiumGuildSubscription), [n]).length,
        u = (0, O.bG)([ck.A], () => ck.A.getCurrentUserAppliedBoosts()),
        { fractionalState: d } = (0, cw.A)({ forceFetch: !0 }),
        c = s?.isPremiumGroupMember(),
        m = t?.isPausedOrPausePending === !0 && d === sf.xc.NONE,
        A = f.useMemo(() => n.some((e) => null == e.premiumGuildSubscription && e.isAvailable()), [n]),
        h = m ? g.intl.string(g.t.mOWsF1) : A ? void 0 : g.intl.string(g.t.xr4m5B),
        E = f.useMemo(() => {
            if (null == t) return 0;
            let e = o2.Ay.getNumIncludedPremiumGuildSubscriptionSlots(t.planId);
            return 0 === e || e !== n.length ? 0 : Math.max(0, e - o);
        }, [t, n.length, o]);
    return (0, p.jsxs)("div", {
        className: gQ.GO,
        children: [
            (0, p.jsx)(dU.kb, { className: gQ.ek }),
            (0, p.jsx)(mm, {}),
            (0, p.jsx)(mE, {}),
            E > 0 && (0, p.jsx)(mp, { count: E, disabledReason: h }),
            c && (0, p.jsx)(c9.A, {}),
            !a && (0, p.jsx)(gL, {}),
            (0, p.jsxs)("div", {
                className: gQ.C_,
                children: [
                    (0, p.jsx)(mn, {
                        guildBoostSlots: n,
                        guildBoostSlotsByGuildId: i,
                        premiumSubscription: t,
                        pausedAppliedGuildBoosts: u,
                        fractionalPremiumState: d,
                    }),
                    (0, p.jsx)(mT, {}),
                    (0, p.jsx)(g$.A, { hideHeading: !0, hideTier0: !0 }),
                    (0, p.jsx)(mr, {}),
                    (0, p.jsx)(mu, {}),
                ],
            }),
        ],
    });
}
var mN = i(65188);
let m_ = (0, o.E2)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_SETTING, {
        Component: function () {
            let e = cV.useConfig({ location: "UserSettingsPremiumGuildSubscriptions" }).enabled;
            f.useEffect(() => {
                n6.h.wait(() => {
                    u7.hP(), u7.$o(), (0, cG.CD)(), (0, cU.zS)(null, null, q.tF5.DISCOVERY), (0, cG.tO)(!0);
                });
            }, []);
            let { hasFetchedSubscriptions: t, premiumSubscription: i } = (0, O.cf)([dy.A], () => ({
                    hasFetchedSubscriptions: dy.A.hasFetchedSubscriptions(),
                    premiumSubscription: dy.A.getPremiumTypeSubscription(),
                })),
                n = (0, cM.Y)(),
                s = (0, O.bG)([dj.A], () => dj.A.hasFetchedPaymentSources),
                l = (0, O.bG)([ck.A], () => ck.A.isFetchingCurrentUserAppliedBoosts),
                r = !t || !n || !s || l,
                [a, o] = f.useState(!1);
            return (r || a || o(!0), r && !a)
                ? (0, p.jsx)("div", { className: ew()(mN.kL, mN.Lq), children: (0, p.jsx)(u3.y, {}) })
                : (0, p.jsxs)("div", {
                      className: mN.kL,
                      children: [
                          (0, p.jsx)("div", { className: mN.Tp }),
                          (0, p.jsx)("div", {
                              className: mN.Qs,
                              children: e
                                  ? (0, p.jsx)(mf, { premiumSubscription: i })
                                  : (0, p.jsx)(gJ, { premiumSubscription: i }),
                          }),
                      ],
                  });
        },
        useSearchTerms: () => [g.intl.string(g.t["+CbP2v"]), g.intl.string(g.t.Nn1lJy)],
    }),
    mC = (0, o.zZ)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_CATEGORY, { buildLayout: () => [m_] }),
    mI = (0, o.t_)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        useTitle: () => g.intl.string(g.t["+CbP2v"]),
        buildLayout: () => [mC],
    }),
    mb = (0, o.i4)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["+CbP2v"]),
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
    return (0, p.jsxs)("div", {
        children: [
            (0, p.jsx)(eA.D, { variant: "heading-md/bold", children: g.intl.string(g.t["KzCF/6"]) }),
            (0, p.jsx)(mR.h, { size: 4 }),
            (0, p.jsx)(V.E, { variant: "text-md/normal", className: mL.yV, children: g.intl.string(g.t["3D7qCu"]) }),
            (0, p.jsx)(mR.h, { size: 24 }),
            (0, p.jsxs)("div", {
                className: mL.Nr,
                children: [
                    (0, p.jsx)("img", { src: "/assets/5a420feed295b595.svg", alt: "", className: mL.RI }),
                    (0, p.jsxs)("div", {
                        className: mL.FS,
                        children: [
                            (0, p.jsx)(eA.D, {
                                variant: "heading-xl/semibold",
                                className: mL.wx,
                                children: g.intl.string(g.t["KzCF/6"]),
                            }),
                            (0, p.jsx)(V.E, {
                                variant: "text-md/normal",
                                className: mL.h_,
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
    return (0, p.jsx)(M.D, {
        onClick: n ? void 0 : i,
        className: mF.x6,
        children: (0, p.jsxs)("div", {
            className: mF.hQ,
            children: [
                n
                    ? (0, p.jsx)(u3.y, { type: u3.y.Type.PULSING_ELLIPSIS, className: mF.__invalid_spinner })
                    : (0, p.jsx)(V.E, { variant: "text-md/medium", className: mF.Pf, children: t }),
                (0, p.jsx)(k.a, { size: "md", color: "currentColor", className: mF.UE }),
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
        { analyticsLocations: a } = (0, nU.Ay)(eM.A.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL),
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
                        return i(!0), await u7.M2(t, e), !0;
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
        m = n.role_benefits.benefits.filter((e) => e.ref_type === mV.bN.CHANNEL),
        A = n.role_benefits.benefits.filter((e) => e.ref_type === mV.bN.INTANGIBLE),
        h = ry()(s.currentPeriodEnd).format("MMMM Do, YYYY"),
        E = g.intl.formatToPlainString(g.t.KsMRP5, {
            numChannels: m.length,
            numAdditionalBenefits: A.length,
            subscriptionEndDate: h,
        });
    return (0, p.jsx)(lL.Modal, {
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
                (0, p.jsx)(mQ.x, { listingId: n.id, guildId: i.guild_id, className: mJ.P }),
            ],
        }),
    });
};
var m0 = i(319225),
    m1 = i(746080),
    m2 = i(47685);
let m3 = (e) => {
        let { label: t, value: i, showInfoIcon: n, infoIconTooltipText: s } = e;
        return (0, p.jsxs)("div", {
            className: m2.L0,
            children: [
                (0, p.jsxs)("div", {
                    className: m2.a5,
                    children: [
                        (0, p.jsx)(eA.D, { variant: "heading-deprecated-12/semibold", className: m2.HU, children: t }),
                        n &&
                            (0, p.jsx)(e0.m, {
                                text: s,
                                children: (0, p.jsx)(lN.m, { size: "xs", color: "currentColor", className: m2.Mo }),
                            }),
                    ],
                }),
                (0, p.jsx)(eA.D, { variant: "heading-xl/semibold", className: m2.sx, children: i }),
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
                analyticsLocation: eM.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
            }),
            s = (0, O.bG)([dj.A], () => dj.A.hasFetchedPaymentSources);
        return null != n && s
            ? (0, p.jsx)(mX.A, { subscription: t, currentInvoicePreview: n, dropdownClassName: m2.Nw })
            : (0, p.jsx)(u3.y, {});
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
            : (0, p.jsx)(sy.D, {
                  label: g.intl.string(g.t["4neDM+"]),
                  children: (0, p.jsx)("div", {
                      className: m2.__invalid_rowButtons,
                      children: i
                          ? (0, p.jsx)(eh.$, {
                                variant: "primary",
                                text: g.intl.string(g.t.y3mAE4),
                                onClick: r,
                                loading: n,
                            })
                          : (0, p.jsxs)(p.Fragment, {
                                children: [
                                    !t && !s && (0, p.jsx)(mB, { label: g.intl.string(g.t.FRbWR8), onClick: a }),
                                    (0, p.jsx)(mB, { label: g.intl.string(g.t.Dx0lF7), onClick: l }),
                                ],
                            }),
                  }),
              });
    },
    m5 = (e) => {
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
                    i = (0, O.bG)([mK.A], () => mK.A.getSubscriptionListingForPlan(t)),
                    n = (0, O.bG)([mK.A], () =>
                        null != i ? mK.A.getSubscriptionGroupListingForSubscriptionListing(i.id) : null,
                    ),
                    s = (0, O.bG)([H.A], () => H.A.getGuild(n?.guild_id)),
                    [l, r] = f.useState(!1),
                    { fetchSubscriptionsSettings: a } = (0, mU.XE)();
                f.useEffect(() => {
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
            c = (0, sS.GV)(),
            { analyticsLocations: m } = (0, nU.Ay)(),
            { shouldHideGuildPurchaseEntryPoints: A } = (0, mz.MH)(s?.id),
            h = t?.isPurchasedViaAppleGeneric;
        if (null == n || null == i || null == a) return null;
        let E = async () => {
                try {
                    d(!0),
                        await u7.QP(t, m),
                        (0, m0.E)({ title: g.intl.string(g.t.oPV2cy), body: g.intl.string(g.t.DdRizV) });
                } finally {
                    d(!1);
                }
            },
            {
                isCancelled: x,
                isPastDue: T,
                subscriptionPrice: S,
                memberSince: N,
                nextRenewalDate: C,
                nextRenewalLabel: I,
                isTrial: b,
            } = a,
            v = i.soft_deleted || null == s || h;
        return (0, p.jsxs)("div", {
            className: m2.kL,
            children: [
                (0, p.jsx)(mZ.A, {
                    onClick: r,
                    className: m2.N1,
                    children: (e) => {
                        let { areaRef: t, handleStopPropagation: n } = e;
                        return (0, p.jsxs)(p.Fragment, {
                            children: [
                                null != s && (0, p.jsx)(gh.Ay, { guild: s, active: !0, size: gh.Ay.Sizes.MEDIUM }),
                                (0, p.jsxs)("div", {
                                    className: m2.if,
                                    children: [
                                        (0, p.jsx)(V.E, {
                                            variant: "text-md/medium",
                                            className: m2.J5,
                                            children: null != s ? s.name : g.intl.string(g.t["He+cmd"]),
                                        }),
                                        (0, p.jsxs)("div", {
                                            className: m2.xp,
                                            children: [
                                                (0, p.jsx)(V.E, {
                                                    variant: "text-sm/normal",
                                                    className: m2.KR,
                                                    children: i.name,
                                                }),
                                                x
                                                    ? (0, p.jsx)(n8.Lp, { text: g.intl.string(g.t["7uFZGt"]) })
                                                    : b
                                                      ? (0, p.jsx)(n8.Lp, {
                                                            text: g.intl.string(g.t["6anton"]),
                                                            color: w.A.unsafe_rawColors.BRAND_500.css,
                                                        })
                                                      : T
                                                        ? (0, p.jsx)(e0.m, {
                                                              text: g.intl.string(g.t.eSuJE2),
                                                              children: (0, p.jsx)("div", {
                                                                  children: (0, p.jsx)(n8.Lp, {
                                                                      className: m2.qc,
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
                                                              children: (0, p.jsx)(n8.Lp, {
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
                                        className: ew()(m2.D6, { [m2.S7]: l }),
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
                              (0, p.jsx)("div", { className: m2.yF }),
                              (0, p.jsx)(mq.A, { groupListingId: n.id, subscription: t, className: m2.kE }),
                              (0, p.jsxs)("div", {
                                  className: m2.Zx,
                                  children: [
                                      (0, p.jsx)(m3, { label: I, value: C }),
                                      (0, p.jsx)(m3, {
                                          label: g.intl.string(g.t.dltUMH),
                                          value: S,
                                          showInfoIcon: b,
                                          infoIconTooltipText: b ? g.intl.string(g.t["/q6fpa"]) : void 0,
                                      }),
                                      (0, p.jsx)(m3, { label: g.intl.string(g.t.AOcwWB), value: N }),
                                  ],
                              }),
                              (0, p.jsx)(mR.h, { size: 16 }),
                              !x &&
                                  !h &&
                                  (0, p.jsx)(sy.D, {
                                      label: g.intl.string(g.t.wmMFvA),
                                      children: (0, p.jsx)(m6, { subscription: t }),
                                  }),
                              !v &&
                                  (0, p.jsx)(m4, {
                                      isTrial: b,
                                      isCancelled: x,
                                      isResubscribing: o,
                                      shouldHideRoleSubscriptionEntryPoints: A,
                                      onCancelSubscriptionClick: () => {
                                          if (null != s) {
                                              var e;
                                              (e = { groupListing: n, listing: i, subscription: t }),
                                                  (0, _.openModal)((t) => (0, p.jsx)(m$, { ...t, ...e }));
                                          }
                                      },
                                      onChangePlanClick: () => {
                                          null != s &&
                                              ((0, sO.pX)(q.BVt.CHANNEL(s.id, m1.VV.ROLE_SUBSCRIPTIONS)),
                                              (0, sE.default)(),
                                              mw.A.show(
                                                  q.kqX.BACK_TO_PREVIOUS_SCREEN,
                                                  void 0,
                                                  g.intl.string(g.t.DvbaM4),
                                                  () => {
                                                      mH.A.setState({ subsection: nv.nR }),
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
var m7 = i(170272);
let m8 = (e) => {
    let { onGoBack: t } = e,
        i = (function () {
            let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t =
                    (0, O.bG)([mM.A], () =>
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
                i = (0, O.bG)([dy.A], () => dy.A.getActiveGuildSubscriptions()),
                n = f.useRef(!1);
            return (
                f.useEffect(() => {
                    (function (e) {
                        let { ensureFresh: t, hasFetched: i, hasRoleSubscriptions: n } = e,
                            s = dy.A.getActiveGuildSubscriptions();
                        return (
                            ((s?.length ?? 0) === 0 && !!n) || (!!t && !i) || (!i && !dy.A.hasFetchedSubscriptions())
                        );
                    })({ ensureFresh: e, hasRoleSubscriptions: t, hasFetched: n.current }) &&
                        ((n.current = !0), u7.hP());
                }, [e, t]),
                i ?? mk
            );
        })(),
        { loading: n } = (0, mU.eb)(i);
    return ((0, mG.A)(ds.Fr ? "role-subscriptions-user-setting" : void 0), n)
        ? (0, p.jsx)(u3.y, {})
        : 0 === i.length
          ? null
          : (0, p.jsxs)("div", {
                children: [
                    (0, p.jsx)(eh.$, { text: g.intl.string(g.t.hqyhKQ), icon: mP.z, variant: "secondary", onClick: t }),
                    (0, p.jsx)(mR.h, { size: 10 }),
                    (0, p.jsx)(ia.n, {
                        label: g.intl.string(g.t["KzCF/6"]),
                        description: g.intl.string(g.t["Y+ucR7"]),
                        children: (0, p.jsx)("div", {
                            className: m7.A,
                            children: i.map((e) => (0, p.jsx)(m5, { subscription: e }, e.id)),
                        }),
                    }),
                ],
            });
};
var m9 = i(327479),
    Ae = i(334335);
function At(e) {
    let { onClickManageSubscription: t, count: i } = e;
    return (0, p.jsxs)("div", {
        children: [
            (0, p.jsx)(eA.D, { variant: "heading-md/bold", children: g.intl.string(g.t["48ywCu"]) }),
            (0, p.jsx)(mR.h, { size: 4 }),
            (0, p.jsx)(V.E, { variant: "text-md/normal", className: Ae.yV, children: g.intl.string(g.t.VWxmSo) }),
            (0, p.jsx)(mR.h, { size: 24 }),
            (0, p.jsxs)("div", {
                className: Ae.Nr,
                children: [
                    (0, p.jsx)("img", { src: "/assets/d6bcd13fb6c85425.svg", alt: "", className: Ae._e }),
                    (0, p.jsxs)("div", {
                        className: Ae.FS,
                        children: [
                            (0, p.jsx)(eA.D, {
                                variant: "heading-xl/semibold",
                                className: Ae.wx,
                                children: g.intl.string(g.t["48ywCu"]),
                            }),
                            (0, p.jsx)(V.E, {
                                variant: "text-md/normal",
                                className: Ae.h_,
                                children: g.intl.format(g.t["/esXLj"], { numSubscriptions: i }),
                            }),
                        ],
                    }),
                    (0, p.jsx)(m9.A, { onClick: t, text: g.intl.string(g.t["z5YcJ+"]) }),
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
        className: ew()(Ar.iE, t),
        children: [
            (0, p.jsx)("div", { className: ew()(Ar.wx, n), children: i }),
            l && (0, p.jsx)("div", { className: Ar.Qs, children: s }),
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
let AE = f.createContext({ isOpen: !1, toggleOpen: () => {} });
function Ax(e) {
    let { children: t } = e,
        [i, n] = f.useReducer((e) => !e, !1),
        s = f.useMemo(() => ({ isOpen: i, toggleOpen: n }), [i]);
    return (0, p.jsx)(AE.Provider, { value: s, children: t(i) });
}
Ax.Toggle = function (e) {
    let { className: t, text: i } = e,
        { isOpen: n, toggleOpen: s } = f.useContext(AE),
        l = n ? AA.t : k.a,
        r = null != i ? i : n ? g.intl.string(g.t.fgq1gs) : g.intl.string(g.t.XJuakA);
    return (0, p.jsxs)(M.D, {
        className: ew()(Ah.L, t),
        onClick: s,
        children: [
            (0, p.jsx)(V.E, { variant: "heading-sm/semibold", tag: "div", color: "currentColor", children: r }),
            (0, p.jsx)(l, { size: "sm", color: "currentColor" }),
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
            sku: m,
            isCancelled: A,
            isOrphanedGuildSubscription: h,
            renewalPlan: E,
        } = (0, O.cf)([cc.A, cg.A, Ap.A, H.A], () => {
            let e,
                i = cc.A.get(r),
                n = null != i ? cg.A.get(i.skuId) : void 0,
                a = n?.applicationId,
                o = null != i ? Ap.A.getForSKU(i.skuId) : null,
                u = null != o && (0, Af.PJ)(o.skuFlags),
                d = u && null != s ? H.A.getGuild(s) : void 0,
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
        T = f.useMemo(() => (null != x ? (0, Ag.A)(x, 100) : null), [x]),
        S = m?.deleted ?? !1,
        N = null != m && (0, Af.Se)(m),
        _ = t.status === q.Dmq.PAST_DUE,
        { analyticsLocations: C } = (0, nU.Ay)(),
        [I] = (0, mY.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: C,
            analyticsLocation: eM.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        b = A_(t.currentPeriodEnd),
        v = 0 === n;
    return (0, p.jsxs)(Aa, {
        headerClassName: AC.dL,
        header:
            !1 === v
                ? (0, p.jsxs)(p.Fragment, {
                      children: [
                          (0, p.jsxs)("div", {
                              className: AC.VW,
                              children: [
                                  null != T &&
                                      (0, p.jsx)(Au._, { src: T.href, imageClassName: AC.Z2, width: 40, height: 40 }),
                                  (0, p.jsxs)("div", {
                                      className: AC.aF,
                                      children: [
                                          (0, p.jsx)(eA.D, {
                                              variant: "heading-md/semibold",
                                              lineClamp: 1,
                                              children: x?.name ?? g.intl.string(g.t["7kqy7W"]),
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
                              className: AC.Pz,
                              children:
                                  null != x &&
                                  null != u &&
                                  null != m &&
                                  (0, p.jsx)(AR, {
                                      subscription: t,
                                      app: x,
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
                : (0, p.jsx)(u3.y, { type: u3.t.PULSING_ELLIPSIS }),
        children: [
            A &&
                (0, p.jsx)(AO, {
                    type: "warning",
                    title: N
                        ? g.intl.formatToPlainString(g.t.QOnM1y, { subscriptionPeriodEnd: b })
                        : g.intl.formatToPlainString(g.t.HOaZu8, { subscriptionPeriodEnd: b }),
                }),
            !A && h && (0, p.jsx)(AO, { type: "warning", title: g.intl.string(g.t.SmSP8Q) }),
            _ && (0, p.jsx)(AO, { type: "danger", title: g.intl.string(g.t.fvOqBo) }),
            (0, p.jsxs)("div", {
                className: AC.zH,
                children: [
                    (0, p.jsx)(Ay, {
                        title: g.intl.string(g.t["5D/KEH"]),
                        content: d
                            ? (0, p.jsxs)(p.Fragment, {
                                  children: [
                                      (0, p.jsxs)("span", {
                                          className: AC.yW,
                                          children: [(0, p.jsx)(Ad.R, { size: "xs" }), g.intl.string(g.t.QjL3vn)],
                                      }),
                                      null != c &&
                                          (0, p.jsxs)("span", {
                                              className: AC._t,
                                              children: [
                                                  (0, p.jsx)(V.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: g.intl.format(g.t["7ZD8p1"], { guildName: c.name }),
                                                  }),
                                                  (0, p.jsx)(gh.Ay, { guild: c, size: gh.Ay.Sizes.MINI }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, p.jsxs)("span", {
                                  className: AC.yW,
                                  children: [(0, p.jsx)(Ac.n, { size: "xs" }), g.intl.string(g.t["6anEVv"])],
                              }),
                    }),
                    (0, p.jsx)(Av, { invoicePreview: I, subscriptionPlan: o }),
                    (0, p.jsx)(Ay, {
                        title: g.intl.string(g.t.dnUzb6),
                        content: A_(t.createdAt ?? t.currentPeriodStart),
                    }),
                    (0, p.jsx)(Aj, { isCancelled: A, subscriptionPeriodEnd: b, renewalPlan: E }),
                ],
            }),
            (0, p.jsx)(AD, {
                subscription: t,
                currentInvoicePreview: I,
                loadingState: n,
                isDeleted: S,
                isCancelled: A,
            }),
            null != x &&
                u?.benefits != null &&
                u.benefits.length > 0 &&
                (0, p.jsx)(AL, { appId: x.id, listingBenefits: u.benefits }),
        ],
    });
}
function Av(e) {
    let { subscriptionPlan: t, invoicePreview: i } = e;
    if (null == t) return (0, p.jsx)(Ay, { title: g.intl.string(g.t.KI7ERx), content: "" });
    let n = (0, dt.CE)((0, dt.$g)(t.price, t.currency), t.interval, t.intervalCount),
        s = i?.findInvoiceItemByPlanId(t.id);
    if (null == s) return (0, p.jsx)(Ay, { title: g.intl.string(g.t.KI7ERx), content: n });
    let l = (0, dt.CE)((0, dt.$g)(s.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, p.jsx)(Ay, {
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
function Aj(e) {
    let { isCancelled: t, subscriptionPeriodEnd: i, renewalPlan: n } = e;
    if (null != n) {
        let e = (0, dt.CE)((0, dt.$g)(n.price, n.currency), n.interval, n.intervalCount);
        return (0, p.jsx)(Ay, {
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
    return (0, p.jsx)(Ay, { title: t ? g.intl.string(g.t.enxcAl) : g.intl.string(g.t["Ms+6Zq"]), content: i });
}
function Ay(e) {
    let { title: t, content: i } = e;
    return (0, p.jsxs)("div", {
        className: AC.nM,
        children: [
            (0, p.jsx)(V.E, { variant: "text-sm/medium", children: t }),
            (0, p.jsx)(V.E, { variant: "text-sm/medium", className: AC.u4, children: i }),
        ],
    });
}
function AO(e) {
    let { type: t, title: i } = e;
    return (0, p.jsx)(tr.p, {
        messageType: "warning" === t ? tr.Y.WARNING : tr.Y.ERROR,
        className: AC.Xm,
        children: (0, p.jsx)(V.E, { variant: "text-sm/normal", children: i }),
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
        { analyticsLocations: m } = (0, nU.Ay)(),
        [A, h] = f.useState(!1),
        E = (0, Am.C)(t.id),
        x = (0, O.bG)([cg.A], () => cg.A.getParentSKU(n.skuId), [n.skuId]),
        T = f.useMemo(() => {
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
        N = async () => {
            try {
                h(!0);
                let { subscription: e } = await (0, u7.QP)(l, m);
                if (null == e) return;
                (0, _.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([i.e("47869"), i.e("52396")]).then(i.bind(i, 115623));
                    return (i) => (0, p.jsx)(t, { ...i, storeListing: n, subscription: AS.A.createFromServer(e) });
                });
            } finally {
                h(!1);
            }
        };
    return (0, p.jsxs)("div", {
        className: AC.fw,
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
            S &&
                null != x &&
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
    return (0, p.jsx)(Ax, {
        children: (e) =>
            (0, p.jsxs)("div", {
                className: AC.PX,
                children: [
                    (0, p.jsxs)("div", {
                        className: AC.wV,
                        children: [
                            e && (0, p.jsx)(V.E, { variant: "text-sm/semibold", children: g.intl.string(g.t.mORL67) }),
                            (0, p.jsx)(Ax.Toggle, {
                                className: AC.Bh,
                                text: e ? g.intl.string(g.t.gsbFAw) : g.intl.string(g.t.IwjfxV),
                            }),
                        ],
                    }),
                    e
                        ? i.map((e) => {
                              let { id: i, name: n, description: s, icon: l } = e;
                              return (0, p.jsx)(Ao.FY, { header: n, icon: (0, AN.N)(t, l), description: s }, i);
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
          ? (0, p.jsx)("div", {
                className: AC.Ji,
                children: (0, p.jsx)(sy.D, {
                    label: g.intl.string(g.t.azZaZa),
                    children: (0, p.jsx)(u3.y, { type: u3.t.PULSING_ELLIPSIS }),
                }),
            })
          : 2 === n
            ? (0, p.jsx)("div", {
                  className: AC.Ji,
                  children: (0, p.jsxs)(An.$T, {
                      color: An.Hv.DANGER,
                      style: { borderRadius: 0 },
                      children: [
                          g.intl.format(g.t.IIHUUF, { subscriptionId: t.id }),
                          (0, p.jsx)("br", {}),
                          g.intl.format(g.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                      ],
                  }),
              })
            : (0, p.jsx)("div", {
                  className: AC.Ji,
                  children: (0, p.jsx)(sy.D, {
                      label: g.intl.string(g.t.azZaZa),
                      children: (0, p.jsx)(mX.A, { subscription: t, currentInvoicePreview: i, disabled: s || l }),
                  }),
              });
}
var AP = (((l = {}).HOME = "HOME"), (l.SWITCH_APP_PLANS = "SWITCH_APP_PLANS"), l);
i(938796);
var AG = i(38405);
let AU = (0, O.UT)(cc.A, {
    getQueryId: q.fic.SUBSCRIPTION_PLANS,
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
        [s, l] = f.useState(!1),
        [r, a] = f.useState(null),
        o =
            null != r &&
            (0, p.jsx)("button", {
                className: Ak.x6,
                onClick: () => l((e) => !e),
                children: (0, p.jsxs)(V.E, {
                    className: Ak.B0,
                    variant: "text-sm/medium",
                    color: "text-brand",
                    children: [
                        s ? g.intl.string(g.t["JQX/Pb"]) : g.intl.string(g.t.Fbrd8J),
                        s
                            ? (0, p.jsx)(AA.t, { color: w.A.colors.TEXT_BRAND, size: "xs" })
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
                    className: Ak.Qs,
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
var AF = i(827991);
function AB(e) {
    let { cta: t, storeListing: i, className: n } = e,
        { applicationId: s, benefits: l, description: r } = i,
        a = f.useMemo(() => (null == i.thumbnail ? null : (0, AV.t)(s, i.thumbnail, 256)), [s, i.thumbnail]),
        { data: o } = AU(i.skuId),
        u = f.useMemo(() => {
            if (null == o || 0 === o.length) return null;
            let e = o[0];
            return (0, dt._J)(e);
        }, [o]);
    return null == u
        ? null
        : (0, p.jsxs)(Aa, {
              className: ew()(AF.iE, n),
              header: (0, p.jsxs)(p.Fragment, {
                  children: [
                      (0, p.jsxs)("div", {
                          className: AF.qd,
                          children: [
                              null != a &&
                                  (0, p.jsx)(Au._, { src: a.href, imageClassName: AF.rW, width: 48, height: 48 }),
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
                  !(0, AM.uJ)(r) &&
                      (0, p.jsx)("div", {
                          className: AF.h_,
                          children: (0, p.jsx)(Aw, { variant: "text-sm/medium", children: r }),
                      }),
                  null != l &&
                      l.length > 0 &&
                      (0, p.jsx)("div", {
                          className: AF.PX,
                          children: l.map((e) => {
                              let { id: t, name: i, description: n, icon: l } = e;
                              return (0, p.jsx)(Ao.FY, { header: i, icon: (0, AN.N)(s, l), description: n }, t);
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
        c = u ? g.intl.string(g.t["46YF2D"]) : g.intl.string(g.t.fFyGiA),
        m = i.metadata?.application_subscription_guild_id,
        A = (0, O.bG)([H.A], () => (u && null != m ? H.A.getGuild(m) : void 0), [m, u]),
        h = (0, O.bG)([cg.A], () => {
            if (null != a) return cg.A.get(a);
        }, [a]),
        E = A_(i.currentPeriodEnd);
    return (0, p.jsxs)("div", {
        children: [
            (0, p.jsxs)("div", {
                className: AY.wx,
                children: [
                    null != o && (0, p.jsx)(Au._, { src: o.href, imageClassName: AY.Z2, width: 48, height: 48 }),
                    (0, p.jsxs)("div", {
                        children: [
                            (0, p.jsx)(eA.D, { variant: "heading-xl/semibold", children: t.name }),
                            (0, p.jsxs)("div", {
                                className: AY.p4,
                                children: [
                                    (0, p.jsxs)(eA.D, {
                                        variant: "heading-md/normal",
                                        className: AY.N4,
                                        children: [(0, p.jsx)(d, { size: "xs", color: "currentColor" }), " ", c],
                                    }),
                                    null != A &&
                                        (0, p.jsxs)(p.Fragment, {
                                            children: [
                                                (0, p.jsx)(V.E, { variant: "text-md/normal", children: "\u2022" }),
                                                (0, p.jsxs)("span", {
                                                    className: AY.vP,
                                                    children: [
                                                        (0, p.jsx)(gh.Ay, { guild: A, size: gh.Ay.Sizes.SMOL }),
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
            (0, p.jsx)(Ax, {
                children: (e) =>
                    (0, p.jsxs)("div", {
                        className: AY._B,
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
                            (0, p.jsx)(Ax.Toggle, {
                                text: e ? g.intl.string(g.t["1Rkq/E"]) : g.intl.string(g.t.WsTHkY),
                            }),
                        ],
                    }),
            }),
            (0, p.jsxs)("div", {
                className: AY.x0,
                children: [
                    (0, p.jsx)(AB, {
                        storeListing: n,
                        className: AY.o3,
                        cta: (0, p.jsxs)("div", {
                            className: AY.cJ,
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
                                  AB,
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
                            : (0, p.jsx)(AH, { storeListing: e, guildId: m, navigateToHome: l }, e.id),
                    ),
                ],
            }),
        ],
    });
}
function AH(e) {
    let { storeListing: t, guildId: i, navigateToHome: n } = e,
        { openModal: s } = (0, Az.A)({
            analyticsLocation: q.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: i,
            disableGuildSelector: !0,
            onComplete: n,
        });
    return (0, p.jsx)(AB, {
        storeListing: t,
        cta: (0, p.jsx)(eh.$, { variant: "primary", size: "sm", text: g.intl.string(g.t["+KwmBt"]), onClick: s }),
    });
}
class AK extends f.PureComponent {
    state = { hasError: !1 };
    static getDerivedStateFromError(e) {
        return { hasError: !0 };
    }
    render() {
        return this.state.hasError
            ? (0, p.jsxs)(An.$T, {
                  color: An.Hv.DANGER,
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
function AW(e) {
    let { subscriptions: t, updateHeader: i } = e,
        [n, s] = f.useState({ route: AP.HOME }),
        { route: l } = n,
        r = () => {
            s({ route: AP.HOME });
        },
        a = (e) => {
            s({ route: AP.SWITCH_APP_PLANS, ...e }), i(g.intl.string(g.t.VFqtkP), r);
        },
        [o, u] = f.useState({});
    f.useEffect(() => {
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
            return (0, p.jsx)(p.Fragment, {
                children: t.map((e) =>
                    (0, p.jsx)(
                        AK,
                        {
                            subscription: e,
                            children: (0, p.jsx)(Ab, {
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
            let { route: m, ...A } = n;
            return (0, p.jsx)(AX, { ...A, navigateToHome: r });
        default:
            (0, t6.xb)(l);
    }
}
var AZ = i(470464);
function Aq(e) {
    let { onGoBack: t } = e,
        i = (0, O.yK)(
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
        [n, s] = f.useState();
    return (
        null == n && (n = (0, p.jsx)(AQ, { onBack: t, title: g.intl.string(g.t["DB/m9a"]) })),
        (0, p.jsxs)("div", {
            children: [
                n,
                (0, p.jsx)("div", {
                    className: AZ.A,
                    children: (0, p.jsx)(AW, {
                        subscriptions: i,
                        updateHeader: (e, t) => {
                            s(
                                (0, p.jsx)(AQ, {
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
    return (0, p.jsxs)("div", {
        className: AZ.D,
        children: [
            (0, p.jsx)(lp.K, {
                "aria-label": g.intl.string(g.t["13/7kX"]),
                icon: () => (0, p.jsx)(Ai.Z, { size: "sm" }),
                onClick: t,
                variant: "icon-only",
            }),
            (0, p.jsx)(eA.D, { variant: "heading-lg/semibold", children: i }),
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
        ? ((t = g.intl.string(A0.default["/S02sx"])), (i = g.intl.string(A0.default.OPJNST)))
        : n
          ? ((t = g.intl.string(g.t["hT6i/0"])),
            (i = null != a ? g.intl.format(g.t["0Vwb/l"], { activateDate: a }) : null))
          : ((t = g.intl.string(g.t["3G0CTC"])),
            (i = r === sf.xc.FP_SUB_PAUSED ? g.intl.format(g.t.MMvaIG, { resumeDate: l.toDate() }) : null));
    let u = ew()({ [A1.Hs]: n, [A1.mT]: !n }),
        d = ew()({ [A1.CQ]: n, [A1.ZM]: !n }),
        c = ew()({ [A1.EM]: !n });
    return (0, p.jsxs)("div", {
        className: A1.r6,
        children: [
            (0, p.jsxs)("div", {
                className: A1.Nv,
                children: [
                    (0, p.jsx)(eA.D, { variant: "heading-md/semibold", className: c, children: t }),
                    null !== i && (0, p.jsx)(V.E, { variant: "text-sm/normal", children: i }),
                ],
            }),
            !o &&
                (0, p.jsx)("div", {
                    className: A1.ZS,
                    children: (0, p.jsx)("div", {
                        className: u,
                        children: (0, p.jsx)(V.E, { variant: "text-sm/semibold", className: d, children: s }),
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
    return (0, p.jsx)("div", {
        children: (0, p.jsxs)("div", {
            className: ew()(i, A1.f8),
            children: [
                (0, p.jsx)("div", {
                    className: A1.J_,
                    children: (0, p.jsxs)("div", {
                        className: A1.Bh,
                        children: [
                            (0, p.jsx)("div", {
                                className: A1.xt,
                                children: (0, p.jsx)(oK.t, { size: "md", color: "white", className: A1.T8 }),
                            }),
                            (0, p.jsx)("div", {
                                className: A1.pt,
                                children: (0, p.jsx)(eA.D, {
                                    variant: "heading-md/semibold",
                                    children: g.intl.string(g.t.DFMPWS),
                                }),
                            }),
                            (0, p.jsx)(V.E, {
                                className: A1.PJ,
                                variant: "text-md/semibold",
                                children: l.length > 0 ? l : g.intl.string(g.t["B66Z+f"]),
                            }),
                        ],
                    }),
                }),
                (0, p.jsx)(A2, {
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
        [o, u] = (0, O.yK)([cc.A], () => [cc.A.get(n), null != l ? cc.A.get(l.planId) : null]);
    if (null == o || o2.Ay.getInterval(n).intervalType !== sf.WT.MONTH) return null;
    let d = null != u ? u.skuId : null,
        c = o.skuId === d,
        m = o2.Ay.getDisplayName(n);
    if (a) t = g.intl.string(A0.default["5asczk"]);
    else if (c && null != l) {
        let e;
        e = new Date(l.status === q.Dmq.PAUSED && null != l.pauseEndsAt ? l.pauseEndsAt : l.currentPeriodEnd);
        let i = (0, o2._e)(e, r);
        t = g.intl.formatToPlainString(g.t["5CNRRA"], { date: i ?? 0 });
    } else t = g.intl.formatToPlainString(g.t.eNXZ5O, { planName: m });
    let A = i.hasFreePremium() || (null != l && l.isPurchasedExternally);
    return (0, p.jsxs)("div", {
        className: A1.Bh,
        children: [
            (0, p.jsx)("div", {
                className: ew()({
                    [A1.sr]: o.skuId === sf.pe.TIER_0,
                    [A1.lP]: o.skuId === sf.pe.TIER_1,
                    [A1.eb]: o.skuId === sf.pe.TIER_2,
                }),
                children: (0, p.jsx)(oK.t, { size: "md", color: "currentColor", className: A1.Kk }),
            }),
            (0, p.jsxs)("div", {
                className: A1.pt,
                children: [
                    (0, p.jsx)(eA.D, {
                        variant: "heading-md/semibold",
                        children: g.intl.format(g.t.LzobT9, { planName: m }),
                    }),
                    !A &&
                        (0, p.jsx)(eA.D, {
                            className: A1.gj,
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            children: t,
                        }),
                ],
            }),
            (0, p.jsx)(V.E, {
                className: A1.PJ,
                variant: "text-md/semibold",
                children: g.intl.format(g.t["ess/xl"], { count: s }),
            }),
        ],
    });
}
let A5 = function (e) {
    let { className: t, entitlements: i } = e,
        n = eR()(Array.from(i))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: i, consumed: n } = e;
                return null != t && null != i && !n;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        s = (0, O.yK)([ce.A], () => ce.A.getUnactivatedFractionalPremiumUnits()),
        l = (0, O.bG)([dy.A], () => dy.A.getPremiumSubscription()),
        r = (0, O.bG)([dy.A], () => null == dy.A.getPremiumTypeSubscription()),
        a = Object.keys(n).some((e) => e === sf.gD.PREMIUM_MONTH_TIER_1),
        o = (0, O.bG)([t3.default], () => t3.default.getCurrentUser());
    if (null == o) return null;
    let u = o.isPremiumWithPremiumGroup();
    return (0, p.jsxs)("div", {
        children: [
            (0, p.jsx)("div", {
                className: ew()(t, A1.xF, A1.J_),
                children: Object.keys(n).map((e) =>
                    (0, p.jsx)(
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
                (0, p.jsxs)("div", {
                    children: [
                        (0, p.jsx)(V.E, {
                            className: A1.eT,
                            variant: "text-md/normal",
                            children: g.intl.string(g.t["VNr4+O"]),
                        }),
                        (0, p.jsx)(A6.i, {}),
                    ],
                }),
        ],
    });
};
var A7 = i(50919);
function A8(e) {
    let t,
        { subscription: i, withOverheadSeparator: n } = e,
        { analyticsLocations: s } = (0, nU.Ay)(),
        [l] = (0, mY.YV)({
            subscriptionId: i.id,
            renewal: !0,
            analyticsLocations: s,
            analyticsLocation: eM.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT,
        });
    if (null == l) return null;
    let r = n ? A7.r : A7.a,
        a = l.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, o2.xq)(t);
        });
    if (null == a) return null;
    let o = a.subscriptionPlanId,
        u = cc.A.get(o);
    ty()(null != u, "Missing plan");
    let d = (0, dt.$g)(l.total, l.currency);
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
function A9(e) {
    let { subscription: t, withOverheadSeparator: i } = e;
    return t.status === q.Dmq.CANCELED || t.isPurchasedExternally
        ? null
        : (0, p.jsx)(A8, { subscription: t, withOverheadSeparator: i });
}
var he = i(735912),
    ht = i(558808);
let hi = { [nv.nR]: "role_subscriptions_panel", [nv.PZ]: "application_subscriptions_panel" };
function hn() {
    return (0, p.jsx)(er.Z, {
        className: ht.wb,
        type: er.Z.Types.CUSTOM,
        children: (0, p.jsxs)(lM.A, {
            align: lM.A.Align.CENTER,
            children: [
                (0, p.jsx)(e7.A, { game: null, size: e7.M.SMALL, className: ht.pV }),
                (0, p.jsx)("span", { className: ht.O, children: g.intl.string(g.t["jy/hyj"]) }),
            ],
        }),
    });
}
function hs(e, t) {
    return e === t || (null == e && null == t) || (null != e && null != t && (0, my._)(e, t));
}
function hl() {
    let e = (0, O.bG)([ce.A], () => ce.A.getForApplication(sf.tv), [], hs);
    return (
        f.useEffect(() => {
            (0, dJ.LM)(sf.tv);
        }, []),
        (0, p.jsx)(ia.n, {
            label: g.intl.string(g.t["2GKrvn"]),
            description: g.intl.string(g.t.kNEjGm),
            children:
                null != e && o2.Ay.hasAccountCredit(e)
                    ? (0, p.jsx)(A5, { className: ht.fX, entitlements: e })
                    : (0, p.jsx)(hn, {}),
        })
    );
}
function hr() {
    return (0, p.jsx)("hr", { className: ht.hr });
}
let ha = function () {
        var e;
        let t = (0, O.bG)([dy.A], () => dy.A.getPremiumTypeSubscription()),
            i = (0, mO.A)({ subscriptionFilter: (e) => he.Hy.has(e.status) }),
            n = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
            s = i.length > 1,
            l = (0, O.bG)(
                [dj.A],
                () => (null != t && null != t.paymentSourceId ? dj.A.getPaymentSource(t.paymentSourceId) : null),
                [t],
            ),
            r = (0, O.bG)([dy.A], () => dy.A.hasFetchedSubscriptions()),
            a = (0, O.bG)([de.A], () => de.A.isBusy),
            o = (0, cM.Y)(),
            d = mH.A.useField("subsection");
        f.useEffect(() => {
            (0, rf._)(null != d ? hi[d] : u.X.SUBSCRIPTIONS_PANEL);
        }, [d]);
        let c = (0, O.bG)([dy.A], () => dy.A.getActiveApplicationSubscriptions()?.length ?? 0),
            m = (0, O.bG)(
                [dy.A],
                () =>
                    Object.values(dy.A.getSubscriptions() ?? {})
                        .filter((e) => e.type === q.rzx.GUILD)
                        .filter((e) => e.status !== q.Dmq.ENDED).length,
            ),
            A = (0, cw.A)({ forceFetch: !0 }),
            h = (0, AJ.ds)(),
            E = null !== t ? t.currentPeriodEnd : void 0,
            x =
                !(h && !(A.unactivatedUnits.length > 0)) &&
                (A.fractionalState !== sf.xc.NONE || A.unactivatedUnits.length > 0);
        return (f.useEffect(
            () => (
                n6.h.wait(() => {
                    (0, cU.zS)(), u7.hP(), (0, cG.CD)(), u7.$o();
                }),
                function () {
                    mH.A.resetState();
                }
            ),
            [],
        ),
        e_.A.enabled)
            ? (0, p.jsx)(u0.A, {})
            : r && o
              ? d === nv.nR
                  ? (0, p.jsx)(m8, { onGoBack: () => mH.A.setState({ subsection: null }) })
                  : d === nv.PZ
                    ? (0, p.jsx)(Aq, { onGoBack: () => mH.A.setState({ subsection: null }) })
                    : (0, p.jsx)("div", {
                          className: ht.kL,
                          children: (0, p.jsxs)("div", {
                              className: ht.Qs,
                              children: [
                                  s ? (0, p.jsx)(he.Sb, {}) : null,
                                  null != t
                                      ? (0, p.jsx)(he.Ay, {
                                            subscription: t,
                                            paymentSource: l,
                                            busy: a,
                                            subscriptions: i,
                                        })
                                      : (0, p.jsx)(he.TC, {}),
                                  x &&
                                      ((e = !!n?.isPremiumWithPremiumGroup()),
                                      (0, p.jsxs)("section", {
                                          children: [
                                              (0, p.jsx)(eA.D, {
                                                  variant: "heading-md/bold",
                                                  className: ht.HL,
                                                  children: g.intl.string(g.t.Obre8v),
                                              }),
                                              (0, p.jsx)(V.E, {
                                                  variant: "text-md/normal",
                                                  className: ht.JU,
                                                  children: g.intl.format(g.t["7Zi06b"], {
                                                      helpCenterLink: ta.A.getArticleURL(
                                                          q.MVz.FRACTIONAL_PREMIUM_ABOUT,
                                                      ),
                                                  }),
                                              }),
                                              (0, p.jsx)(A3, {
                                                  className: ht.fX,
                                                  fractionalPremiumInfo: A,
                                                  activationDate: E,
                                                  hasPremiumGroup: e,
                                              }),
                                          ],
                                      })),
                                  (0, p.jsx)(hl, {}),
                                  m > 0 &&
                                      (0, p.jsxs)(p.Fragment, {
                                          children: [
                                              (0, p.jsx)(hr, {}),
                                              (0, p.jsx)(mD, {
                                                  count: m,
                                                  onClickManageSubscription: () => mH.A.setState({ subsection: nv.nR }),
                                              }),
                                          ],
                                      }),
                                  c > 0 &&
                                      (0, p.jsxs)(p.Fragment, {
                                          children: [
                                              (0, p.jsx)(hr, {}),
                                              (0, p.jsx)(At, {
                                                  count: c,
                                                  onClickManageSubscription: () => {
                                                      mH.A.setState({ subsection: nv.PZ }),
                                                          Y.default.track(
                                                              q.HAw.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED,
                                                          );
                                                  },
                                              }),
                                          ],
                                      }),
                                  (0, p.jsx)(hr, {}),
                                  null != t ? (0, p.jsx)(A9, { subscription: t, withOverheadSeparator: !1 }) : null,
                              ],
                          }),
                      })
              : (0, p.jsx)("div", { className: ew()(ht.kL, ht.Lq), children: (0, p.jsx)(u3.y, {}) });
    },
    ho = (0, o.E2)(u.X.SUBSCRIPTIONS_SETTINGS, {
        useSearchTerms: () => [g.intl.string(g.t.trSpHX), g.intl.string(g.t["2GKrvn"])],
        Component: () => (0, p.jsx)(ha, {}),
    }),
    hu = (0, o.zZ)(u.X.SUBSCRIPTIONS_CATEGORY, {
        useSearchTerms: () => [g.intl.string(g.t.trSpHX), g.intl.string(g.t["2GKrvn"])],
        buildLayout: () => [ho],
    }),
    hd = (0, o.t_)(u.X.SUBSCRIPTIONS_PANEL, { useTitle: () => g.intl.string(g.t.trSpHX), buildLayout: () => [hu] }),
    hc = (0, o.i4)(u.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.trSpHX),
        icon: mv.L,
        usePersistentBadge: function () {
            return f.useMemo(
                () => ({
                    badgeType: eN.Xi.STRONGLY_DISCOURAGED_CUSTOM,
                    useCustomBadge: () =>
                        (0, mj.l)() ? (0, p.jsx)(lb.E, { size: "xs", color: w.A.unsafe_rawColors.YELLOW_300 }) : null,
                }),
                [],
            );
        },
        buildLayout: () => [hd],
    }),
    hg = (0, o.WI)(u.X.BILLING_SECTION, {
        useTitle: () => g.intl.string(g.t.oeUm2s),
        buildLayout: () => [cD, mb, hc, cb, dw],
    });
var hm = i(540999),
    hA = i(306471),
    hh = i(964355),
    hE = i(172272);
let hx = (0, o.zD)(u.X.AXE_AUDITING, {
        useTitle: () => "Enable Accessibility Auditing",
        useSubtitle: () =>
            "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development.",
        usePredicate: () => !1,
        useValue: () => (0, O.bG)([a2.default], () => a2.default.isAxeEnabled),
        setValue: (e) => (0, a1.x)({ axeEnabled: e }),
    }),
    hT = (0, o.zD)(u.X.CSS_DEBUGGING, {
        useTitle: () => "Enable CSS Debugging",
        useSubtitle: () => "Display raw colors as pink. Toggling this will refresh the browser.",
        useValue: () => (0, O.bG)([a2.default], () => a2.default.cssDebuggingEnabled),
        setValue: (e) => {
            (0, a1.x)({ cssDebuggingEnabled: e }).then(() => {
                setTimeout(() => location.reload(), 500);
            });
        },
    });
var hS = i(276086),
    hp = i(354328);
let hf = (0, o.zD)(u.X.HIGHLIGHT_MANA_COMPONENTS, {
        useTitle: () => "Highlight Mana Components",
        useSubtitle: () => "Highlights all Mana design system components for easier debugging.",
        useValue: () => (0, hp.A)("highlight_mana_components"),
        setValue: (e) => {
            (0, hS.L)("highlight_mana_components", e);
        },
    }),
    hN = (0, o.zD)(u.X.HIGHLIGHT_VOID_COMPONENTS, {
        useTitle: () => "Highlight Deprecated Void Components",
        useSubtitle: () =>
            "Highlights deprecated toggleable components: VoidCheckbox (green), VoidRadioGroup (yellow), VoidSwitch (blue).",
        useValue: () => (0, hp.A)("highlight_void_toggleables"),
        setValue: (e) => {
            (0, hS.L)("highlight_void_toggleables", e);
        },
    }),
    h_ = (0, o.sN)(u.X.LAYOUT_DEBUGGING_HORIZONTAL_SPACING, {
        useTitle: () => "Horizontal Grid Spacing",
        useSubtitle: () =>
            "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
        usePredicate: () => (0, O.bG)([a2.default], () => a2.default.layoutDebuggingEnabled),
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
    hC = (0, o.zD)(u.X.LAYOUT_DEBUGGING, {
        useTitle: () => "Enable Layout Debugging",
        useSubtitle: () => "Renders a grid on top of the app to help debug layout alignment issues.",
        useValue: () => (0, O.bG)([a2.default], () => a2.default.layoutDebuggingEnabled),
        setValue: (e) => {
            (0, a1.x)({ layoutDebuggingEnabled: e });
        },
    }),
    hI = (0, o.sN)(u.X.LAYOUT_DEBUGGING_VERTICAL_SPACING, {
        useTitle: () => "Vertical Grid Spacing",
        useSubtitle: () => "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
        usePredicate: () => (0, O.bG)([a2.default], () => a2.default.layoutDebuggingEnabled),
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
    hb = (0, o.zZ)(u.X.DESIGN_TOOLS, {
        useTitle: () => "Design & A11y Tools",
        useSearchTerms: () => ["accessibility tools"],
        buildLayout: () => [hT, hC, h_, hI, hf, hN, hx],
    }),
    hv = (0, o.zD)(u.X.AD_OVERRIDE, {
        useTitle: () => "Always Deliver Ads",
        useSubtitle: () => "Makes the user targetable for all active ads.",
        useValue: () => c.HZ.useSetting(),
        setValue: (e) => {
            c.HZ.updateSetting(e);
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
class hV extends f.Component {
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
        return (0, p.jsxs)(lM.A, {
            direction: lM.A.Direction.VERTICAL,
            className: ew()(hD.oS, iC.SX, hP.N, hD.nM),
            children: [
                (0, p.jsx)(iA.A, {
                    className: ew()(hD.lL, { [hD.zi]: n }),
                    onClick: n ? void 0 : this.handleRemoveBuildOverride,
                }),
                (0, p.jsxs)(lM.A, {
                    className: iC.QB,
                    children: [
                        (0, p.jsx)(lM.A.Child, {
                            basis: "50%",
                            children: (0, p.jsx)(lS.l, {
                                selectionMode: "single",
                                label: "Override Type",
                                options: hU,
                                onSelectionChange: this.handleOverrideTypeChanged,
                                value: t,
                                disabled: n,
                            }),
                        }),
                        (0, p.jsx)(lM.A.Child, {
                            wrap: !0,
                            basis: "50%",
                            children: (0, p.jsx)(lD.k, {
                                label: "branch" === t ? "Branch Name" : "Commit SHA",
                                value: i,
                                onChange: this.handleOverrideIdChanged,
                                disabled: n,
                            }),
                        }),
                    ],
                }),
                (0, p.jsxs)(lM.A.Child, {
                    children: [
                        null != s &&
                            "" !== s &&
                            (0, p.jsx)(V.E, {
                                className: hD.AS,
                                color: "text-feedback-critical",
                                variant: "text-sm/normal",
                                children: s,
                            }),
                        (0, p.jsxs)(V.E, {
                            variant: "text-sm/normal",
                            className: hD.AS,
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
class hk extends f.Component {
    state = { loading: !0, buildOverrides: {}, loadedBuildOverrides: {}, errors: {}, saving: !1, didSave: !1 };
    async refreshBuildOverrides() {
        this.setState({ loading: !0 });
        let e = await (0, hR.bD)();
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
        return eR().without(hG, ...t);
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
        let t = await (0, hO.Zk)(e);
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
        (0, _.openModal)((t) => (0, p.jsx)(hw, { ...t, buildOverrides: e }));
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
            : (0, p.jsx)(eh.$, { variant: "secondary", text: "Reload App", onClick: () => location.reload() });
    }
    renderLinkButton() {
        let { buildOverrides: e } = this.state;
        return null == e || 0 === Object.keys(e).length
            ? null
            : (0, p.jsx)(e0.m, {
                  text: "Generate Public Link",
                  children: (0, p.jsx)(lp.K, {
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
            ? (0, p.jsx)(u3.y, { className: iC.QX })
            : null != n && 0 === Object.keys(n).length
              ? this.renderEmpty()
              : this.renderItems();
        let s = !i && !t && this.getAvailableProjects().length > 0,
            l =
                hM(n ?? {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL
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
                    (0, p.jsx)(lS.l, {
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
                    (0, p.jsxs)(aw.e, {
                        justify: "end",
                        children: [this.renderRefreshButton(), this.renderLinkButton(), this.renderSaveButton()],
                    }),
                ],
            }),
        });
    }
}
class hw extends f.Component {
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
        return (0, p.jsxs)(R.B, {
            gap: 20,
            children: [
                (0, p.jsx)(lS.l, {
                    selectionMode: "single",
                    label: "Expire After",
                    value: null != d ? d.value : void 0,
                    options: hL.fL,
                    onSelectionChange: this.handleExpirationChange,
                }),
                this.isMobile()
                    ? null
                    : (0, p.jsx)(lS.l, {
                          selectionMode: "single",
                          label: "Release Channel",
                          value: t,
                          options: hL.VP,
                          onSelectionChange: this.handleReleaseChannelChange,
                      }),
                this.isMobile()
                    ? (0, p.jsxs)(R.B, {
                          gap: 20,
                          children: [
                              (0, p.jsx)(lD.k, {
                                  label: "Add allowed app version (required)",
                                  autoFocus: !0,
                                  value: l,
                                  onKeyDown: this.handleAllowedVersionEnter,
                                  error: r,
                                  onChange: this.handleAllowedVersionEntry,
                                  placeholder: "Example: 34",
                                  trailing: { icon: r7.j, onClick: this.handleAddAllowedVersion, "aria-label": "Add" },
                              }),
                              (0, p.jsx)(lS.l, {
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
                    : (0, p.jsx)(hy.f, {
                          label: "Limit to User IDs (optional)",
                          helperText: "User IDs can be separated by whitespace or commas.",
                          value: i,
                          error: n,
                          onBlur: () => this.setUserEntryError(""),
                          onChange: this.handleUserIDEntry,
                      }),
                (0, p.jsx)(hy.f, {
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
        return (0, p.jsx)(lL.Modal, {
            title: "Generate Public Build Override Link",
            input: this.renderHelpMessage(),
            actionBarInput: (0, p.jsx)(d6.A, { value: i }),
            transitionState: t,
            "aria-label": "Generate Public Build Override Link",
            actions: [{ variant: "primary", text: "Generate Link", onClick: this.handleGenerateLink }],
            onClose: e,
            children: this.renderSettingsForm(),
        });
    }
}
let hF = (0, o.E2)(u.X.BUILD_OVERRIDES, { useSearchTerms: () => ["build overrides"], Component: hk });
var hB = i(256311),
    hz = i(883600);
let hY = (0, o.E2)(u.X.CHANGE_LOG_OVERRIDE, {
    useSearchTerms: () => ["changelog override", "change log override"],
    Component: function () {
        let e = (0, O.bG)([hz.A], () => hz.A.overrideId()),
            t = async (e) => {
                let t = hz.A.getChangelog(e, "en-US");
                return null != t ? t : ((await hB.A.fetchChangelog(e, "en-US", !1, !0)) ?? null);
            };
        return (0, p.jsx)(h4, {
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
    hK = (0, o.Tf)(u.X.CHANGE_LOG_CLEAR, {
        useTitle: () => "Clear Change Log",
        useSubtitle: () => "Resets the change log state so that it will show again on the next startup.",
        useLabel: () => "Clear",
        useDisabled: () => c.pK.useSetting() === dn.default.fromTimestamp(hH.getTime()),
        onClick: () => (hX.w.set("lastChangeLogDate", hH), c.pK.updateSetting(dn.default.fromTimestamp(hH.getTime()))),
    }),
    hW = (0, o.zD)(u.X.DISABLE_APP_COLLECTIONS_CACHE, {
        useTitle: () => "Disable Application Collections Cache",
        useSubtitle: () => "Forces application collection updates to be shown immediately.",
        useDisabled: () => (0, O.bG)([a2.default], () => a2.default.onlyShowPreviewAppCollections),
        useValue: () =>
            (0, O.bG)(
                [a2.default],
                () => a2.default.disableAppCollectionsCache || a2.default.onlyShowPreviewAppCollections,
            ),
        setValue: (e) => (0, a1.x)({ disableAppCollectionsCache: e }),
    }),
    hZ = (0, o.zD)(u.X.FORCE_CANARY_API, {
        useTitle: () => "Force Canary API",
        useSubtitle: () => "Routes all API requests to Canary instances.",
        useValue: () => (0, O.bG)([a2.default], () => a2.default.isForcedCanary),
        setValue: (e) => {
            (0, a1.x)({ canary: e });
        },
    }),
    hq = (0, o.zD)(u.X.LOAD_SOURCE_MAPS, {
        useTitle: () => "Load Source Maps",
        useSubtitle: () => "Downloads source maps on this client. Only enable on devices you trust.",
        useValue: () => (0, O.bG)([a2.default], () => a2.default.sourceMapsEnabled),
        setValue: (e) => (0, a1.x)({ sourceMapsEnabled: e }),
    }),
    hQ = (0, o.zD)(u.X.ONLY_SHOW_PREVIEW_APP_COLLECTIONS, {
        useTitle: () => "Only Show Preview App Collections",
        useSubtitle: () =>
            "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
        useValue: () => (0, O.bG)([a2.default], () => a2.default.onlyShowPreviewAppCollections),
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
    h1 = (0, o.Hn)(u.X.PREMIUM_TYPE_OVERRIDE, {
        useTitle: () => "Premium Type Override",
        useSearchTerms: () => ["nitro override"],
        useSubtitle: () => "Overrides the client's local premium type.",
        useOptions: () => h0,
        clearable: !0,
        useValue: () =>
            (0, O.bG)([h$.A], () => {
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
let h6 = (0, o.E2)(u.X.SURVEY_OVERRIDE, {
    useSearchTerms: () => ["survey override"],
    Component: function () {
        let e = (0, O.bG)([h3.Ay], () => h3.Ay.getSurveyOverride());
        return (0, p.jsx)(h4, {
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
            children: (0, p.jsx)(lD.k, {
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
let h5 = (0, o.zZ)(u.X.DEV_OVERRIDES, {
        useTitle: () => "Overrides",
        buildLayout: () => [h1, h6, hY, hK, hZ, hv, hQ, hW, hq, hF],
        useInlineNotice: () => ({
            type: eN.lT.INLINE_NOTICE,
            noticeType: "info",
            useText: () => g.intl.format(g.t.UeZJlg, { link: "https://i.dis.gd/dev-settings-changes" }),
        }),
    }),
    h7 = (0, o.zD)(u.X.ANALYTICS_LOGS, {
        useTitle: () => "Enable Logging of Analytics Events",
        useSubtitle: () => "Logs all analytics events to the developer console.",
        useValue: () => (0, O.bG)([a2.default], () => a2.default.isLoggingAnalyticsEvents),
        setValue: (e) => (0, a1.x)({ logAnalyticsEvents: e }),
    }),
    h8 = (0, o.zD)(u.X.GATEWAY_LOGS, {
        useTitle: () => "Log Gateway Events",
        useSubtitle: () => "Logs all gateway events to console, including content. Enable verbose logs to see them.",
        useValue: () => (0, O.bG)([a2.default], () => a2.default.isLoggingGatewayEvents),
        setValue: (e) => (0, a1.x)({ logGatewayEvents: e }),
    }),
    h9 = (0, o.zD)(u.X.KEEP_POPOUTS_OPEN, {
        useTitle: () => "Keep Popouts Open",
        useSubtitle: () =>
            "When enabled, popouts will not close automatically, allowing their console contents to be inspected after a crash.",
        useValue: () => (0, O.bG)([a2.default], () => a2.default.preventPopoutClose),
        setValue: (e) => (0, a1.x)({ preventPopoutClose: e }),
    }),
    Ee = (0, o.zD)(u.X.KEYBOARD_MISMATCHES, {
        useTitle: () => "Enable Logging of Keyboard Mismatches",
        useSubtitle: () => "Logs mismatches in detected keyboard codes to the console.",
        useValue: () => (0, O.bG)([a2.default], () => a2.default.logKeyboardMismatches),
        setValue: (e) => (0, a1.x)({ logKeyboardMismatches: e }),
    }),
    Et = (0, o.zD)(u.X.OVERLAY_RPC_LOGS, {
        useTitle: () => "Enable Logging of Overlay RPC Events & Commands",
        useSubtitle: () => "Logs all overlay related RPC events. Super noisy if an overlay is connected.",
        useValue: () => (0, O.bG)([a2.default], () => a2.default.isLoggingOverlayEvents),
        setValue: (e) => (0, a1.x)({ logOverlayEvents: e }),
    }),
    Ei = (0, o.zD)(u.X.QUEST_LOGGING, {
        useTitle: () => "Enable Quests Debug Logging",
        useSubtitle: () => "Logs quest lifecycle events to the developer console.",
        useValue: () => (0, O.bG)([a2.default], () => a2.default.isLoggingQuestEvents),
        setValue: (e) => (0, a1.x)({ logQuestEvents: e }),
    }),
    En = (0, o.zD)(u.X.REQUEST_TRACING, {
        useTitle: () => "Enable Tracing Requests",
        useSubtitle: () => "Force trace all client requests with APM.",
        useValue: () => (0, O.bG)([a2.default], () => a2.default.isTracingRequests),
        setValue: (e) => (0, a1.x)({ trace: e }),
    }),
    Es = (0, o.zZ)(u.X.LOGGING, { useTitle: () => "Logging", buildLayout: () => [h8, Et, En, h7, Ee, h9, Ei] }),
    El = (0, o.t_)(u.X.DEVELOPER_OPTIONS_PANEL, {
        useTitle: () => "Developer Options",
        buildLayout: () => [h5, Es, hb],
    }),
    Er = (0, o.i4)(u.X.DEVELOPER_OPTIONS_SIDEBAR_ITEM, {
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
                    onlyShowPreviewAppCollections: d,
                    disableAppCollectionsCache: g,
                    isStaff: m,
                } = (0, O.cf)([a2.default, hm.A, t3.default], () => ({
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
                    isStaff: t3.default.getCurrentUser()?.isStaff() ?? !1,
                })),
                { horizontalSpacing: A, verticalSpacing: h } = (0, hE.Or)(),
                { setHorizontalSpacing: E, setVerticalSpacing: x } = hE.Or.getState(),
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
                                              (0, a1.x)({ canary: !r });
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
                                              (0, a1.x)({ onlyShowPreviewAppCollections: !d });
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
                                              (0, a1.x)({ disableAppCollectionsCache: !g });
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
                                              (0, a1.x)({ logGatewayEvents: !i });
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
                                              (0, a1.x)({ logOverlayEvents: !n });
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
                                              (0, a1.x)({ logAnalyticsEvents: !s });
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
                                              (0, a1.x)({ trace: !l });
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
                                              (0, a1.x)({ preventPopoutClose: !o });
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
                                              (0, a1.x)({ axeEnabled: !a });
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
                                              (0, a1.x)({ layoutDebuggingEnabled: !e });
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
                                                          (0, p.jsx)(hh.i, {
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
                                              (0, p.jsx)(
                                                  U.aK,
                                                  {
                                                      id: "vertical-spacing",
                                                      label: "Vertical Spacing",
                                                      control: (e, t) =>
                                                          (0, p.jsx)(hh.i, {
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
                          ? (0, p.jsx)(
                                U.Dr,
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
        [l, r] = f.useState(s),
        [a, o] = f.useState(!1),
        u = f.useCallback(() => {
            r((e) => !e);
        }, []),
        d = (0, O.bG)([cu.default], () => cu.default.getId()),
        c = (0, O.bG)([cu.default], () => {
            let e = cu.default.getInstallationForTracking();
            return null == e ? null : (0, Eu.v)(e);
        }),
        g = "installation" === t.kind && null != c ? c : d,
        m = (0, ET.iN)(t, g),
        A = (0, ET.Fm)(t, g),
        h = (0, O.yK)([EE.A], () =>
            eR()
                .sortBy(EE.A.getRecentExposures(Ef.Vh.USER, i), (e) => {
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
        x = (0, p.jsx)(eF.s, {
            "aria-label": "Toggle visibility",
            onClick: u,
            children: (0, p.jsxs)(V.E, {
                variant: "text-md/medium",
                className: EN.DD,
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
                                    cA.p5 &&
                                        (0, p.jsx)(M.D, { onClick: E, children: (0, p.jsx)(hj.q, { size: "xs" }) }),
                                ],
                            }),
                            (0, p.jsx)(V.E, { color: "text-muted", variant: "text-sm/normal", children: i }),
                        ],
                    }),
                    (0, p.jsx)("span", {
                        className: EN.km,
                        children: "installation" === t.kind ? "Installation" : "User",
                    }),
                ],
            }),
        });
    if (!l) return (0, p.jsx)("div", { className: EN.Os, children: x });
    let T = "";
    return (
        (T =
            t.system === EA.l5.LEGACY
                ? `Currently assigned to bucket ${m ?? Ef.RE.NOT_ELIGIBLE}`
                : null != m
                  ? `Currently assigned to variant ${m}`
                  : "Currently unassigned"),
        (0, p.jsxs)("div", {
            className: EN.Os,
            children: [
                x,
                (0, p.jsx)("div", {
                    children: (0, p.jsx)(Eh.g, {
                        label: t.system === EA.l5.LEGACY ? "Bucket Override" : "Variant Override",
                        description: T,
                        experiment: t,
                        experimentId: i,
                        overrideInfo: n,
                    }),
                }),
                (0, p.jsx)("div", {
                    className: EN.h_,
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
                                  className: EN.id,
                                  children: "Server Descriptor",
                              }),
                              (0, p.jsx)(V.E, {
                                  variant: "code",
                                  className: EN.AS,
                                  children: null == A ? "None" : JSON.stringify(A, void 0, 2),
                              }),
                              (0, p.jsx)(V.E, {
                                  variant: "text-lg/medium",
                                  className: EN.id,
                                  children: "Override Descriptor",
                              }),
                              (0, p.jsx)(V.E, {
                                  variant: "code",
                                  className: EN.AS,
                                  children:
                                      n?.originalDescriptor == null
                                          ? "None"
                                          : JSON.stringify(n.originalDescriptor, void 0, 2),
                              }),
                              (0, p.jsx)(V.E, {
                                  variant: "text-lg/medium",
                                  className: EN.id,
                                  children: "Recent Exposures",
                              }),
                              (0, p.jsx)(V.E, {
                                  variant: "code",
                                  className: EN.AS,
                                  children: 0 === h.length ? "None" : h.join("\n"),
                              }),
                          ],
                      })
                    : (0, p.jsx)("div", {
                          className: EN.id,
                          children: (0, p.jsx)(F.Q, {
                              variant: "secondary",
                              text: "More Details \xbb",
                              onClick: () => o(!0),
                          }),
                      }),
                (0, p.jsx)(eE.c, { className: EN.yF }),
            ],
        })
    );
}
function EC(e) {
    let { experiment: t, experimentId: i, overrideInfo: n } = e,
        [s, l] = f.useState(null != n),
        [r, a] = f.useState(!1),
        o = f.useCallback(() => {
            l((e) => !e);
        }, []),
        u = (0, O.bG)([EE.A], () => EE.A.getLoadedGuildExperiment(i)),
        d = (0, O.yK)([EE.A], () =>
            eR()
                .sortBy(EE.A.getRecentExposures(Ef.Vh.GUILD, i), (e) => {
                    let [t, i] = e;
                    return -i;
                })
                .map((e) => {
                    let [t, i] = e;
                    return `${new Date(i).toLocaleString()} (${t})`;
                }),
        ),
        [c, g] = (0, O.yK)([H.A, EE.A], () => {
            let e = eR().sortBy(H.A.getGuildsArray(), (e) => e.name.toLowerCase()),
                t = {},
                n = [];
            for (let s of e) {
                let e = EE.A.getGuildExperimentDescriptor(i, s.id),
                    l = e?.bucket ?? Ef.RE.NOT_ELIGIBLE;
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
                className: EN.DD,
                children: [
                    (0, p.jsxs)("div", {
                        children: [
                            (0, p.jsx)("span", { children: t.title }),
                            (0, p.jsx)(V.E, { color: "text-muted", variant: "text-sm/normal", children: i }),
                        ],
                    }),
                    (0, p.jsx)("span", { className: EN.km, children: "Guild" }),
                ],
            }),
        });
    return s
        ? (0, p.jsxs)("div", {
              className: EN.Os,
              children: [
                  m,
                  (0, p.jsx)(Eh.g, {
                      label: "Bucket Override",
                      description: `Current Assignments: ${g}`,
                      experiment: t,
                      experimentId: i,
                      overrideInfo: n,
                  }),
                  (0, p.jsx)("div", {
                      className: EN.h_,
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
                                    className: EN.id,
                                    children: "Guild Assignments",
                                }),
                                (0, p.jsx)(V.E, { variant: "code", className: EN.AS, children: c }),
                                (0, p.jsx)(V.E, {
                                    variant: "text-lg/medium",
                                    className: EN.id,
                                    children: "Server Descriptor",
                                }),
                                (0, p.jsx)(V.E, {
                                    variant: "code",
                                    className: EN.AS,
                                    children: null == u ? "None" : JSON.stringify(u, void 0, 2),
                                }),
                                (0, p.jsx)(V.E, {
                                    variant: "text-lg/medium",
                                    className: EN.id,
                                    children: "Override Descriptor",
                                }),
                                (0, p.jsx)(V.E, {
                                    variant: "code",
                                    className: EN.AS,
                                    children:
                                        n?.originalDescriptor == null
                                            ? "None"
                                            : JSON.stringify(n.originalDescriptor, void 0, 2),
                                }),
                                (0, p.jsx)(V.E, {
                                    variant: "text-lg/medium",
                                    className: EN.id,
                                    children: "Recent Exposures",
                                }),
                                (0, p.jsx)(V.E, {
                                    variant: "code",
                                    className: EN.AS,
                                    children: 0 === d.length ? "None" : d.join("\n"),
                                }),
                            ],
                        })
                      : (0, p.jsx)("div", {
                            className: EN.id,
                            children: (0, p.jsx)(F.Q, {
                                variant: "secondary",
                                text: "More Details \xbb",
                                onClick: () => a(!0),
                            }),
                        }),
                  (0, p.jsx)(eE.c, { className: EN.yF }),
              ],
          })
        : (0, p.jsx)("div", { className: EN.Os, children: m });
}
let EI = (0, o.E2)(u.X.EXPERIMENTS_SETTING, {
        Component: function () {
            let { experiments: e, overridesInfo: t } = (0, Ex.op)(),
                { experiments: i, overridesInfo: n } = (0, ES.hI)(),
                s = f.useMemo(() => ({ ...i, ...e }), [i, e]),
                l = f.useMemo(() => ({ ...n, ...t }), [n, t]),
                r = (0, O.bG)([cu.default], () => {
                    let e = cu.default.getInstallationForTracking();
                    return null == e ? null : (0, Eu.v)(e);
                }),
                [a, o] = f.useState(""),
                u = (0, Ep.oC)((0, Ep.R3)((0, Ep.Fm)(s), l), a);
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
                                cA.p5 &&
                                    (0, p.jsx)(F.Q, {
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
                    (0, p.jsx)(D.I, { placeholder: "Search experiments", query: a, onChange: o, onClear: () => o("") }),
                    u.length > 0
                        ? u.map((e) => {
                              let t = "guild" === e.experiment.kind ? EC : E_;
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
                              className: EN.p$,
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
    Eb = (0, o.zZ)(u.X.EXPERIMENTS_CATEGORY, { buildLayout: () => [EI] }),
    Ev = (0, o.t_)(u.X.EXPERIMENTS_PANEL, { useTitle: () => "Experiments", buildLayout: () => [Eb] }),
    Ej = (0, o.i4)(u.X.EXPERIMENTS_SIDEBAR_ITEM, {
        useTitle: () => "Experiments",
        icon: Ea.c,
        useMenu: Eo.A,
        buildLayout: () => [Ev],
    }),
    Ey = (0, o.WI)(u.X.DEVELOPER_SECTION, {
        useTitle: () => g.intl.string(g.t["+gHUHA"]),
        usePredicate: () => hm.A.isDeveloper,
        buildLayout: () => [Ej, Er],
    });
var EO = i(631670),
    ER = i(619499),
    EL = i(836602),
    ED = i(591179),
    EP = i(854627),
    EG = i(975732),
    EU = i(761508),
    EM = i(83257),
    EV = i(159001),
    Ek = i(344346),
    Ew = i(919395),
    EF = i(233641);
function EB(e) {
    let { title: t, children: i } = e;
    return (0, p.jsxs)("div", {
        children: [(0, p.jsx)(eA.D, { variant: "text-md/medium", className: EF.Vf, children: t }), i],
    });
}
function Ez(e) {
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
        className: ew()(EF.UA, i),
        children: (0, p.jsxs)("div", {
            className: ew()(EF.yt, n),
            children: [
                (0, p.jsx)("div", {
                    className: ew()(EF.Fp, a && EF.Oz),
                    children: (0, p.jsxs)(p.Fragment, {
                        children: [
                            (0, p.jsx)(EB, { title: l ?? g.intl.string(g.t.Zb06yP), children: s }),
                            null != r ? (0, p.jsx)(EB, { title: g.intl.string(g.t.x5CoXR), children: r }) : null,
                        ],
                    }),
                }),
                (0, p.jsx)("div", { className: EF.oB, children: t }),
            ],
        }),
    });
}
var EY = i(986687),
    EX = i(101058),
    EH = i(841595),
    EK = i(696451),
    EW = i(10478);
function EZ() {
    return (0, p.jsxs)("div", {
        className: EW.p$,
        children: [
            (0, p.jsx)("img", { src: "/assets/b3b15f93f9f43174.svg", alt: "", className: EW.Sl }),
            (0, p.jsx)(eA.D, {
                className: EW.h8,
                variant: "heading-lg/extrabold",
                children: g.intl.string(g.t.Z1OZCV),
            }),
            (0, p.jsx)(V.E, { className: EW.h8, variant: "text-md/normal", children: g.intl.string(g.t.ZSt4Tt) }),
            (0, p.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: EW.h8,
                children: (0, p.jsx)(eh.$, {
                    variant: "primary",
                    text: g.intl.string(g.t.jQ3pqt),
                    onClick: () => {
                        (0, sO.pX)(q.BVt.GUILD_DISCOVERY), (0, sE.default)();
                    },
                }),
            }),
        ],
    });
}
var Eq = i(81400),
    EQ = i(757036),
    EJ = i(252732),
    E$ = i(355622),
    E0 = i(408018),
    E1 = i(201349),
    E2 = i(158983);
let E3 = (0, sS.Ld)(),
    E6 = (0, t0.createChannelRecord)({ id: "1", type: q.rbe.DM }),
    E4 = (0, sS.Ld)();
function E5(e) {
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
        [d, c] = f.useState((0, E0.x7)(o)),
        m = f.useRef(r),
        A = f.useRef(!1);
    return (
        f.useEffect(() => {
            if (m.current !== r) {
                let e = (0, E0.x7)(r);
                u(r), c(e);
            }
            m.current = r;
        }, [r]),
        f.useEffect(() => {
            void 0 !== s || o === r || A.current || (u(r), c((0, E0.x7)(r)));
        }, [s, r, o]),
        (0, p.jsxs)(oq.A, {
            title: t,
            titleId: E3,
            description: g.intl.string(g.t.Bbw6Ac),
            errors: i,
            disabled: a,
            children: [
                (0, p.jsx)(E1.Ay, {
                    "aria-describedby": E4,
                    "aria-labelledby": E3,
                    className: E2.i,
                    innerClassName: E2.Z,
                    maxCharacterCount: q.NA2,
                    onChange: function (e, t, i) {
                        t !== o && (u(t), c(i), n(t));
                    },
                    placeholder: l,
                    channel: E6,
                    textValue: o,
                    richValue: d,
                    emojiPickerCloseOnModalOuterClick: !0,
                    parentModalKey: ej.USER_SETTINGS_MODAL_KEY,
                    type: E$.oU.PROFILE_BIO_INPUT,
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
                (0, p.jsx)(B.A, { id: E4, children: g.intl.format(g.t["+DFxLc"], { maxLength: q.NA2 }) }),
            ],
        })
    );
}
var E7 = i(930861),
    E8 = i(821956),
    E9 = i(562819),
    xe = i(84540),
    xt = i(408919);
function xi(e) {
    let { user: t, guild: i, className: n, sectionTitle: s, forcedDivider: l = !1, withTutorial: r = !1 } = e,
        { analyticsLocations: a } = (0, nU.Ay)(),
        o = (0, Ew.a4)({ user: t, guildId: i?.id }),
        { pendingAvatarDecoration: u, errors: d } = (0, Ew.CP)(i?.id),
        c = r ? E7.wL : aV.$n;
    return (0, p.jsx)(oq.A, {
        className: n,
        forcedDivider: l,
        hasBackground: !0,
        title: s,
        errors: d,
        children: (0, p.jsxs)("div", {
            className: xt.NC,
            children: [
                (0, p.jsx)(c, {
                    size: aV.$n.Sizes.SMALL,
                    onClick: () => {
                        (0, E9.L)({ analyticsLocations: a, guild: i });
                    },
                    className: ew()({ [xt.yj]: r }),
                    children: g.intl.string(g.t.BVcYCx),
                }),
                (void 0 === u ? null != o : null != u) &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: xt.DT,
                        children: (0, p.jsx)(eh.$, {
                            variant: "secondary",
                            size: "sm",
                            text: (0, E8.uZ)(t, i) ? g.intl.string(g.t.CHf9iJ) : g.intl.string(g.t.OrokWm),
                            onClick: () => {
                                (0, xe.p)({ guildId: i?.id, avatarDecoration: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var xn = i(339984),
    xs = i(114077);
let xl = [{ name: "gif", extensions: ["gif"] }];
function xr(e) {
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
        A = c ? E7.wL : aV.$n,
        h = f.useCallback(() => {
            (0, EJ.XD)({
                uploadType: xn.HL.AVATAR,
                analyticsSource: m,
                filters: u ? xl : void 0,
                guildId: r,
                isTryItOut: u,
            });
        }, [r, m, u]);
    return (0, p.jsx)(oq.A, {
        className: a,
        title: s,
        errors: i,
        disabled: o,
        forcedDivider: d,
        children: (0, p.jsxs)("div", {
            className: xs.NC,
            children: [
                (0, p.jsx)(A, {
                    className: ew()({ [xs.yj]: c }),
                    size: aV.$n.Sizes.SMALL,
                    onClick: h,
                    children: l ?? g.intl.string(g.t["4OynCD"]),
                }),
                t &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: xs.DT,
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
var xa = i(152103);
function xo(e) {
    let { user: t, guildId: i, className: n } = e,
        s = o2.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: l } = (0, nU.Ay)(),
        {
            userDisplayNameStyles: r,
            guildDisplayNameStyles: a,
            pendingDisplayNameStyles: o,
            pendingErrors: u,
        } = (0, Ew.B0)(t, i),
        d = (0, f.useCallback)(() => {
            Y.default.track(q.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS), (0, nM.L)({ analyticsLocations: l, guildId: i });
        }, [l, i]),
        c = (0, f.useCallback)(() => {
            (0, xe.p)({ displayNameStyles: null }), Y.default.track(q.HAw.DISPLAY_NAME_STYLES_REMOVED);
        }, []),
        m = (0, f.useCallback)(() => {
            (0, xe.p)({ guildId: i, displayNameStyles: null });
        }, [i]),
        A = void 0 !== o || (null != i ? null != a : null != r);
    return (0, p.jsx)(oq.A, {
        title: g.intl.string(nV.default["86GtGH"]),
        className: n,
        showPremiumIcon: s,
        errors: u,
        children: (0, p.jsxs)("div", {
            className: xa.N,
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
var xu = i(637193),
    xd = i(727369);
function xc(e) {
    let { user: t, guild: i, titleIcon: n } = e,
        { analyticsLocations: s } = (0, nU.Ay)(),
        l = null != i,
        { userNameplate: r, guildNameplate: a, pendingNameplate: o, pendingErrors: u } = (0, Ew.rv)(t, i?.id),
        d = f.useCallback(() => {
            (0, xu.p)({ analyticsLocations: s, guildId: i?.id });
        }, [s, i?.id]),
        c = f.useCallback(() => {
            (0, xe.p)({ guildId: i?.id, nameplate: null });
        }, [i?.id]);
    return (0, p.jsx)(oq.A, {
        title: g.intl.string(g.t.x5CoXR),
        titleIcon: n,
        errors: u,
        children: (0, p.jsxs)("div", {
            className: xd.u,
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
var xg = i(33023);
function xm(e) {
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
        m = d ? E7.wL : aV.$n;
    return (0, p.jsx)(oq.A, {
        className: l,
        title: g.intl.string(g.t.Vgdusv),
        showPremiumIcon: a,
        errors: i,
        disabled: r,
        forcedDivider: u,
        children: (0, p.jsxs)("div", {
            className: xg.NC,
            children: [
                (0, p.jsx)(m, {
                    className: ew()({ [xg.yj]: d }),
                    size: aV.$n.Sizes.SMALL,
                    onClick: () =>
                        (0, EJ.XD)({ uploadType: xn.HL.BANNER, analyticsSource: c, guildId: s, isTryItOut: o }),
                    children: g.intl.string(g.t.N0bC3P),
                }),
                t &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: xg.DT,
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
var xA = i(617061),
    xh = i(872246);
function xE(e) {
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
        c = (0, Ew.N2)({ user: t, guildId: i?.id }),
        { pendingProfileEffect: m, errors: A } = (0, Ew.nZ)(i?.id);
    f.useEffect(() => {
        d &&
            Y.default.track(q.HAw.PREMIUM_UPSELL_VIEWED, {
                type: sf.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: u,
            });
    }, [d, u]);
    let h = a ? E7.wL : aV.$n;
    return (0, p.jsx)(oq.A, {
        forcedDivider: r,
        borderType: d9.i.PREMIUM,
        hasBackground: !0,
        title: l,
        showBorder: o,
        errors: A,
        className: s,
        children: (0, p.jsxs)("div", {
            className: xh.NC,
            children: [
                (0, p.jsx)(h, {
                    size: aV.$n.Sizes.SMALL,
                    onClick: () => {
                        (0, xA.W)({ analyticsLocations: u, guild: i, initialSelectedEffect: n });
                    },
                    className: ew()({ [xh.yj]: a }),
                    children: g.intl.string(g.t["/dRfCf"]),
                }),
                (void 0 === m ? null != c : null != m) &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: xh.DT,
                        children: (0, p.jsx)(eh.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != i ? g.intl.string(g.t.CHf9iJ) : g.intl.string(g.t.uMuafO),
                            onClick: () => {
                                (0, xe.p)({ guildId: i?.id, profileEffect: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var xx = i(13875),
    xT = i(515727),
    xS = i(238780);
function xp(e) {
    let { user: t, guild: i, sectionTitle: n } = e,
        { analyticsLocations: s } = (0, nU.Ay)(),
        l = (0, xx.sk)("ProfileFrameSection"),
        r = (0, Ew.Xf)({ user: t, guildId: i?.id }),
        { pendingProfileFrame: a, errors: o } = (0, Ew.Tu)(i?.id),
        [u, d] = (0, eT.kn)([ex.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE]),
        c = u === ex.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE;
    return l
        ? (0, p.jsx)(oq.A, {
              showBorder: c,
              borderType: c ? d9.i.NEW_UPSELL : d9.i.PREMIUM,
              hasBackground: c,
              title: n,
              titleBadge: c ? (0, p.jsx)(n8.Lp, { text: g.intl.string(g.t.y2b7CA), className: xS.Ad }) : void 0,
              description: c ? g.intl.string(g.t.yMoMAt) : void 0,
              errors: o,
              children: (0, p.jsxs)("div", {
                  className: xS.NC,
                  children: [
                      (0, p.jsx)(eh.$, {
                          variant: "primary",
                          size: "sm",
                          text: g.intl.string(g.t["9/hmle"]),
                          onClick: () => {
                              (0, xT.w)({ analyticsLocations: s, guild: i }), d(t8.i.TAKE_ACTION);
                          },
                      }),
                      (void 0 === a ? null != r : null != a) &&
                          (0, p.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: xS.DT,
                              children: (0, p.jsx)(eh.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: null != i ? g.intl.string(g.t.CHf9iJ) : g.intl.string(g.t.nQBruk),
                                  onClick: () => {
                                      (0, xe.p)({ guildId: i?.id, profileFrame: null });
                                  },
                              }),
                          }),
                  ],
              }),
          })
        : null;
}
var xf = i(33851),
    xN = i.n(xf),
    x_ = i(602853),
    xC = i(654107),
    xI = i(999291),
    xb = i(101928),
    xv = i(835245),
    xj = i(317097),
    xy = i(508274),
    xO = i(919796),
    xR = i(773431);
function xL(e) {
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
        c = (0, x_.r)(w.A.colors.BACKGROUND_BASE_LOW).hex(),
        m = w.A.colors.BACKGROUND_MOD_MUTED.css,
        A = (0, EJ.sN)(n),
        h = (0, xj.Hl)(n),
        E = h === c ? m : h,
        x = A ? w.A.unsafe_rawColors.WHITE.css : w.A.unsafe_rawColors.PRIMARY_530.css,
        T = (0, xO.A)(a),
        S = (0, xO.A)(o),
        [N, _] = f.useState((0, xv.A)());
    return (
        f.useEffect(() => {
            (T !== a || S !== o) && _((0, xv.A)());
        }, [o, a, S, T]),
        (0, p.jsx)(P.Y, {
            targetElementRef: d,
            positionKey: N,
            renderPopout: (e) =>
                (0, p.jsx)(xy.VN, {
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
                    className: ew()(xR.oP, { [xR.r9]: l }),
                    children: [
                        (0, p.jsx)(M.D, {
                            ...i,
                            tabIndex: l ? -1 : 0,
                            onClick: l ? q.tEg : t,
                            style: { backgroundColor: h, borderColor: E },
                            className: xR.nf,
                            "aria-label": g.intl.string(g.t.Qp04hK),
                            focusProps: { ringTarget: d },
                            children: (0, p.jsx)(o1.R, {
                                size: "custom",
                                className: xR.BW,
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
var xD = i(362656);
function xP(e) {
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
        c = (0, xI.Ay)(t.id, r),
        { primaryColor: m, secondaryColor: A } = (0, xb.A)({
            user: t,
            displayProfile: c,
            pendingThemeColors: n,
            isPreview: !0,
        }),
        h = o2.Ay.canUsePremiumProfileCustomization(t),
        E = null != i ? i : t.getAvatarURL(r, 80),
        x = (0, x_.r)(w.A.unsafe_rawColors.PRIMARY_530).hex(),
        T = (0, xC.rh)(E, x, !1);
    if (null == m || null == A) return null;
    let S = (e) => {
        s(xN()(e, c?.themeColors) ? void 0 : e);
    };
    return (0, p.jsx)(oq.A, {
        title: g.intl.string(g.t.DMeO2X),
        disabled: !h && !l,
        className: ew()(xD.__invalid_profileThemesSection, a),
        showPremiumIcon: o,
        forcedDivider: d,
        children: (0, p.jsxs)("div", {
            className: xD.hd,
            children: [
                (0, p.jsx)("div", {
                    className: xD.YX,
                    children: (0, p.jsx)(xL, {
                        onChange: (e) => S([e, A]),
                        color: m,
                        suggestedColors: T,
                        showEyeDropper: !0,
                        label: (0, p.jsx)(V.E, {
                            className: xD.yz,
                            color: "text-default",
                            variant: "text-xs/normal",
                            "aria-hidden": !0,
                            children: g.intl.string(g.t.C3KTQk),
                        }),
                    }),
                }),
                (0, p.jsx)("div", {
                    className: xD.YX,
                    children: (0, p.jsx)(xL, {
                        onChange: (e) => S([m, e]),
                        color: A,
                        suggestedColors: T,
                        showEyeDropper: !0,
                        label: (0, p.jsx)(V.E, {
                            className: xD.yz,
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
                        className: xD.WA,
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
function xG(e) {
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
    return (0, p.jsx)(oq.A, {
        title: t,
        titleId: o,
        errors: i,
        disabled: a,
        children: (0, p.jsx)(lD.k, {
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
var xU = i(427262),
    xM = i(576705),
    xV = i(376294);
function xk(e) {
    let { errors: t, pendingNick: i, currentNick: n, username: s, user: l, guild: r } = e,
        a = (0, O.bG)([xM.A], () => xM.A.can(q.xBc.CHANGE_NICKNAME, r) || xM.A.can(q.xBc.MANAGE_NICKNAMES, r)),
        o = (0, EQ.L)(sf.PremiumTypes.TIER_2);
    return (0, p.jsxs)(oq.A, {
        title: g.intl.string(g.t.me1lRk),
        errors: t,
        children: [
            (0, p.jsx)(lD.k, {
                value: i ?? n ?? "",
                placeholder: s,
                maxLength: q.d0r,
                onChange: function (e) {
                    (0, xe.p)({ guildId: r.id, nickname: e });
                },
                disabled: !a,
                helperText: a ? void 0 : g.intl.string(g.t.gzjxQi),
            }),
            o && (0, p.jsx)(xo, { user: l, guildId: r.id, className: xV.F }),
        ],
    });
}
var xw = i(574173);
let xF = "/assets/b25da78aa7949feb.png";
function xB(e) {
    let { user: t, showOverlay: i, children: n } = e,
        s = (0, d$.Ay)(),
        { analyticsLocations: l } = (0, nU.Ay)(eM.A.PREMIUM_UPSELL_OVERLAY);
    return (f.useEffect(() => {
        i &&
            Y.default.track(q.HAw.PREMIUM_UPSELL_VIEWED, {
                location_stack: l,
                type: sf.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE,
            });
    }, [i, l]),
    i)
        ? (0, p.jsxs)("div", {
              className: xw.ry,
              children: [
                  (0, p.jsx)("div", { children: n }),
                  (0, p.jsxs)("div", {
                      className: xw.Wc,
                      children: [
                          (0, p.jsx)("img", {
                              className: xw.Tn,
                              alt: g.intl.string(g.t.LHFZQy),
                              src: (function (e) {
                                  switch (e) {
                                      case q.NJ8.DARK:
                                      case q.NJ8.DARKER:
                                      case q.NJ8.MIDNIGHT:
                                          return xF;
                                      case q.NJ8.LIGHT:
                                          return "/assets/a98f1410707fafea.png";
                                      default:
                                          return xF;
                                  }
                              })(s),
                          }),
                          (0, p.jsxs)("div", {
                              className: xw._9,
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
                          (0, p.jsx)(d8.A, {
                              size: aV.$n.Sizes.LARGE,
                              color: aV.$n.Colors.GREEN,
                              textOptions: {
                                  textOverride: o2.Ay.isPremium(t)
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
var xz = i(887267);
function xY() {
    var e;
    let t = (0, O.bG)([t3.default], () => {
            let e = t3.default.getCurrentUser();
            return ty()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        i = (0, EQ.L)(sf.PremiumTypes.TIER_2),
        n = (0, O.bG)([EL.A, H.A], () => H.A.getGuild(EL.A.selectedGuildId));
    ty()(null != n, "guild should not be null");
    let {
            pendingAvatar: s,
            pendingNickname: l,
            pendingBanner: r,
            pendingBio: a,
            pendingPronouns: o,
            pendingThemeColors: u,
            errors: d,
        } = (0, O.cf)([EL.A], () => ({ ...EL.A.getPendingChanges(n.id), errors: EL.A.getErrors(n.id) })),
        c = (0, EX.V7)({ userId: t.id, image: s }),
        m = (0, Eq.EC)(n.id),
        A = (0, O.bG)([EK.Ay], () => (null == n.id ? null : EK.Ay.getMember(n.id, t.id))),
        h = (0, O.bG)([EH.A], () => EH.A.getGuildMemberProfile(t.id, n.id)),
        E = o2.Ay.canUsePremiumProfileCustomization(t),
        x = (0, Ew.z5)(s, A?.avatar),
        T = (0, Ew.Ac)(r, h?.banner),
        S = ((e = h?.themeColors), void 0 === u ? null != e : u?.[0] != null && u?.[1] != null),
        f = h?.bio ?? "",
        N = h?.pronouns ?? "";
    return (0, p.jsxs)("div", {
        className: xz.Q,
        children: [
            (0, p.jsx)(
                xk,
                {
                    errors: d?.nick ?? m?.nick,
                    username: xU.Ay.getName(t),
                    pendingNick: l,
                    currentNick: A?.nick,
                    user: t,
                    guild: n,
                },
                "nick",
            ),
            (0, p.jsx)(
                xG,
                {
                    sectionTitle: g.intl.string(g.t["+T3RI/"]),
                    errors: d?.pronouns,
                    onPronounsChange: (e) => (0, xe.p)({ guildId: n.id, pronouns: e }),
                    pendingPronouns: o,
                    currentPronouns: N,
                },
                "pronouns",
            ),
            (0, p.jsxs)(xB, {
                user: t,
                showOverlay: !E,
                children: [
                    (0, p.jsx)(
                        xr,
                        {
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [
                                    g.intl.string(g.t.lqaIxI),
                                    (0, p.jsx)(e0.m, {
                                        text: g.intl.string(g.t["5AFxuK"]),
                                        children: (0, p.jsx)(oK.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: xz.a,
                                        }),
                                    }),
                                ],
                            }),
                            showRemoveAvatarButton: x,
                            onAvatarChange: (e) =>
                                (0, EJ.rM)(e, A?.avatar, (e) => (0, xe.p)({ guildId: n.id, avatar: e })),
                            errors: d?.avatar,
                            guildId: n.id,
                            disabled: !E,
                        },
                        "avatar",
                    ),
                    (0, p.jsx)(
                        xi,
                        {
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [
                                    g.intl.string(g.t["7v0T9P"]),
                                    (0, p.jsx)(e0.m, {
                                        text: g.intl.string(g.t["5AFxuK"]),
                                        children: (0, p.jsx)(oK.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: xz.a,
                                        }),
                                    }),
                                ],
                            }),
                            user: t,
                            guild: n,
                        },
                        "decoration",
                    ),
                    !i && (0, p.jsx)(xo, { user: t, guildId: n.id }),
                    (0, p.jsx)(
                        xc,
                        {
                            user: t,
                            guild: n,
                            titleIcon: (0, p.jsx)(e0.m, {
                                text: g.intl.string(g.t["5AFxuK"]),
                                children: (0, p.jsx)(oK.t, { size: "md", color: "currentColor", className: xz.a }),
                            }),
                        },
                        "nameplate",
                    ),
                    (0, p.jsx)(
                        xE,
                        {
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [
                                    g.intl.string(g.t.wR5wOo),
                                    (0, p.jsx)(e0.m, {
                                        text: g.intl.string(g.t["5AFxuK"]),
                                        children: (0, p.jsx)(oK.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: xz.a,
                                        }),
                                    }),
                                ],
                            }),
                            user: t,
                            guild: n,
                        },
                        "effect",
                    ),
                    (0, p.jsx)(xp, { user: t, guild: n, sectionTitle: g.intl.string(g.t.GWrZOd) }, "frame"),
                    (0, p.jsx)(
                        xm,
                        {
                            showRemoveBannerButton: T,
                            errors: d?.banner,
                            onBannerChange: (e) =>
                                (0, EJ.rM)(e, h?.banner, (e) => (0, xe.p)({ guildId: n.id, banner: e })),
                            guildId: n.id,
                            disabled: !E,
                        },
                        "banner",
                    ),
                    (0, p.jsx)(xP, {
                        user: t,
                        pendingAvatarSrc: c,
                        pendingColors: u,
                        onThemeColorsChange: (e) => (0, xe.p)({ guildId: n.id, themeColors: e }),
                        guildId: n.id,
                        showResetThemeButton: S,
                    }),
                    (0, p.jsx)(
                        E5,
                        {
                            placeholder: g.intl.string(g.t["/7NKgv"]),
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [
                                    g.intl.string(g.t.ZzAR2Y),
                                    (0, p.jsx)(e0.m, {
                                        text: g.intl.string(g.t["5AFxuK"]),
                                        children: (0, p.jsx)(oK.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: xz.a,
                                        }),
                                    }),
                                ],
                            }),
                            onBioChange: (e) => (0, xe.p)({ guildId: n.id, bio: e }),
                            errors: d?.bio ?? m?.bio,
                            pendingBio: a,
                            currentBio: f,
                            disabled: !E,
                        },
                        "about",
                    ),
                ],
            }),
        ],
    });
}
var xX = i(405318);
function xH(e) {
    (0, _.openModalLazy)(async () => {
        let { default: t } = await Promise.all([i.e("2125"), i.e("66901"), i.e("61129")]).then(i.bind(i, 475312));
        return (i) => (0, p.jsx)(t, { source: { ...e, page: q.liQ.GUILD_MEMBER_PROFILE_SETTINGS }, ...i });
    });
}
function xK(e) {
    let { selectedGuild: t, onGuildChange: i } = e,
        { analyticsLocations: n } = (0, nU.Ay)(eM.A.USER_SETTINGS_GUILD_PROFILE),
        s = (0, O.bG)([t3.default], () => {
            let e = t3.default.getCurrentUser();
            return ty()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        l = (0, O.bG)([EK.Ay], () => (null != t ? EK.Ay.getMember(t.id, s.id) : null)),
        r = (0, O.bG)([EH.A], () => !EH.A.isFetchingProfile(s.id, t?.id)),
        a = (0, O.bG)([e_.A], () => e_.A.hidePersonalInformation),
        { pendingAvatar: o, pendingNameplate: u, ...d } = (0, O.cf)([EL.A], () => EL.A.getPendingChanges(t?.id)),
        c = (0, EX.V7)({ userId: s.id, image: o }),
        m = (0, Ew.lw)({
            pendingValue: u,
            userValue: s?.collectibles?.nameplate,
            guildValue: l?.collectibles?.nameplate,
            guildId: t?.id,
        }),
        { pendingDisplayNameStyles: A } = (0, Ew.B0)(s, t?.id);
    return (f.useEffect(() => () => n6.h.wait(EV.IM), []), a)
        ? (0, p.jsx)(u0.A, {})
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
                                  (0, p.jsx)(oZ.A, { guildId: t.id, onChange: i }),
                                  (0, p.jsx)(Ez, {
                                      profilePreviewTitle: (0, p.jsx)(eA.D, {
                                          variant: "heading-md/medium",
                                          className: xX.YV,
                                          children: g.intl.formatToPlainString(g.t.Tc0slG, { guildName: t?.name }),
                                      }),
                                      profilePreview: (0, p.jsx)(EY.A, {
                                          ...d,
                                          pendingAvatar: c,
                                          pendingDisplayNameStyles: A,
                                          user: s,
                                          guild: t,
                                          canUsePremiumCustomization: o2.Ay.canUsePremiumProfileCustomization(s),
                                          onUpsellClick: xH,
                                          containerClassName: xX.ti,
                                      }),
                                      nameplatePreview: (0, p.jsx)(Ek.A, {
                                          ...d,
                                          pendingDisplayNameStyles: A,
                                          user: s,
                                          guildId: t?.id,
                                          nameplate: m,
                                          className: null == m ? xX.tJ : void 0,
                                          isHighlighted: !0,
                                      }),
                                      children: (0, p.jsx)(xY, {}),
                                  }),
                              ],
                          })
                        : (0, p.jsx)(EZ, {}),
                ],
            })
          : (0, p.jsx)(u3.y, {});
}
var xW = i(903209),
    xZ = i(39409);
let xq = (e) => {
    let { children: t, notice: i } = e;
    return (0, p.jsxs)("div", { className: xZ.r, children: [i, (0, p.jsx)("div", { children: t })] });
};
var xQ = i(269115),
    xJ = i(823092),
    x$ = i(859040),
    x0 = i(379197),
    x1 = i(488430),
    x2 = i(457421),
    x3 = i(940622),
    x6 = i(559474),
    x4 = i(144030);
let x5 = () => {
    let e,
        t,
        i,
        n,
        { analyticsLocations: s } = (0, nU.Ay)(eM.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
        l = f.useRef(null),
        {
            asset: r,
            popoutAsset: a,
            title: o,
            body: u,
            version: d,
            revertTextColor: c,
        } = ((e = (0, x3.mb)(x6.RN.UPSELL_BANNER)),
        (t = (0, x3.mb)(x6.RN.UPSELL_BANNER_POPOUT)),
        (i = (0, O.bG)([x2.A], () => x2.A.getMarketingBySurface(x0.R.EDIT_PROFILE_SETTINGS))),
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
            () => ({ ...n, type: x1.G.BANNER, asset: e ?? n.asset, popoutAsset: t ?? n.popoutAsset }),
            [e, t, n],
        )),
        { navigateWithValidation: m } = (0, xJ.L_)();
    return (
        f.useEffect(() => {
            Y.default.track(q.HAw.PREMIUM_UPSELL_VIEWED, {
                type: sf.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                location_stack: s,
                version: d,
            });
        }, [s, d]),
        (0, p.jsxs)("div", {
            ref: l,
            className: x4.kL,
            style: { backgroundImage: `url(${r})` },
            children: [
                (0, p.jsx)("div", {
                    className: x4.JS,
                    "aria-hidden": !0,
                    role: "presentation",
                    children: (0, p.jsx)("img", { src: a, className: x4.Qw, alt: "" }),
                }),
                (0, p.jsxs)("div", {
                    className: x4.Em,
                    children: [
                        (0, p.jsx)(eA.D, {
                            variant: "heading-lg/extrabold",
                            color: c ? "text-overlay-dark" : "currentColor",
                            className: x4.DD,
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
                            (0, x$.Cz)({
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
var x7 = i(451909),
    x8 = i(202639),
    x9 = i(400669),
    Te = i(835071),
    Tt = i(422936),
    Ti = i(234419),
    Tn = i(590180),
    Ts = i(898461),
    Tl = i(207803),
    Tr = i(508425),
    Ta = i(559949);
let To = {
        above_the_clouds: {
            preset: "above_the_clouds",
            themeColors: [752280, 9215590],
            avatarDecorationSkuId: "1144059132517826601",
            displayNameStyles: { fontId: Ta.x.CHICLE, effectId: Tr.z.POP, colors: [959694] },
            getName: () => g.intl.string(g.t["TFc+iF"]),
            getHeaderSrc: () => i(702051).A,
            getBannerSrc: (e) => (e ? i(735161).A : i(887e3).A),
        },
        cyberpunk: {
            preset: "cyberpunk",
            themeColors: [1967991, 742532],
            avatarDecorationSkuId: null,
            displayNameStyles: { fontId: Ta.x.PIXELIFY, effectId: Tr.z.NEON, colors: [2949343] },
            getName: () => g.intl.string(g.t["4g+5bq"]),
            getHeaderSrc: () => i(272017).A,
            getBannerSrc: (e) => (e ? i(735271).A : i(208574).A),
        },
        shadow_realm: {
            preset: "shadow_realm",
            themeColors: [0, 4458504],
            avatarDecorationSkuId: "1144058522808614923",
            displayNameStyles: { fontId: Ta.x.NEO_CASTEL, effectId: Tr.z.TOON, colors: [0xff0000] },
            getName: () => g.intl.string(g.t.ycg1xj),
            getHeaderSrc: () => i(863653).A,
            getBannerSrc: (e) => (e ? i(538263).A : i(576974).A),
        },
        starlit_dream: {
            preset: "starlit_dream",
            themeColors: [5123751, 590625],
            avatarDecorationSkuId: "1144058844004233369",
            displayNameStyles: { fontId: Ta.x.CHERRY_BOMB, effectId: Tr.z.TOON, colors: [3343795] },
            getName: () => g.intl.string(g.t["9WLHvr"]),
            getHeaderSrc: () => i(434361).A,
            getBannerSrc: (e) => (e ? i(700309).A : i(135572).A),
        },
        neon_space: {
            preset: "neon_space",
            themeColors: [6094952, 1007678],
            avatarDecorationSkuId: null,
            displayNameStyles: { fontId: Ta.x.MUSEO_MODERNO, effectId: Tr.z.NEON, colors: [28737] },
            getName: () => g.intl.string(g.t.UdNuqi),
            getHeaderSrc: () => i(301928).A,
            getBannerSrc: (e) => (e ? i(285974).A : i(775627).A),
        },
    },
    Tu = (e) => To[e],
    Td = Object.keys(To),
    Tc = (e) => {
        let t = null == e ? Td : Td.filter((t) => t !== e);
        return t[Math.floor(Math.random() * t.length)];
    };
var Tg = i(371912),
    Tm = i(674253);
function TA(e) {
    let { preset: t, onShuffle: i } = e,
        n = (0, O.bG)([iW.A], () => iW.A.useReducedMotion),
        s = (0, Tg.Xf)({ useReducedMotion: n }),
        { name: l, header: r } = f.useMemo(() => {
            let e = Tu(t);
            return { name: e.getName(), header: e.getHeaderSrc() };
        }, [t]);
    return (0, p.jsxs)("div", {
        className: Tm.kL,
        children: [
            (0, p.jsx)(M.D, {
                onClick: () => {
                    i(), s.startAnimation(!1);
                },
                className: Tm.x6,
                "aria-label": g.intl.string(g.t["44yJxh"]),
                children: s.render(),
            }),
            (0, p.jsxs)(M.D, {
                onClick: () => {
                    i(), s.startAnimation(!1);
                },
                "aria-label": `${l}: ${g.intl.string(g.t["44yJxh"])}`,
                className: Tm.Lt,
                children: [
                    (0, p.jsx)("img", { alt: "", "aria-hidden": !0, src: r, className: Tm.L_ }),
                    (0, p.jsx)(V.E, { className: Tm._e, variant: "text-sm/bold", color: "always-white", children: l }),
                ],
            }),
        ],
    });
}
var Th = i(410516),
    TE = i(811611),
    Tx = i(515718),
    TT = i(507553);
function TS(e, t) {
    let i = TT.A.useField("scrollPosition"),
        n = (0, O.bG)([iW.A], () => iW.A.useReducedMotion);
    (0, f.useEffect)(() => {
        let s = e.current;
        if (null == s || i !== t) return;
        let l = requestAnimationFrame(() => {
            s.scrollIntoView({ behavior: n ? "auto" : "smooth" }), TT.A.setState({ scrollPosition: null });
        });
        return () => cancelAnimationFrame(l);
    }, [e, t, i, n]);
}
var Tp = i(844222),
    Tf = i(314649);
function TN(e) {
    let { user: t } = e,
        { reducedMotion: n } = f.useContext(Tp.C),
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
        } = (0, O.cf)([EL.A], () => {
            let e = EL.A.getPendingChanges(),
                t = EL.A.getTryItOutChanges();
            return { ...e, ...t };
        }),
        x = (0, EX.V7)({ userId: t.id, image: m ?? s });
    return (0, p.jsx)(EY.A, {
        user: t,
        pendingPronouns: d,
        pendingBio: c,
        pendingBanner: A ?? l ?? i(636763),
        pendingDisplayNameStyles: E ?? o,
        pendingAvatar: x,
        pendingThemeColors: g ?? u,
        pendingAvatarDecoration: void 0 !== h ? h : r,
        pendingProfileEffect: a,
        avatarClassName: null != m || null != s || n.enabled ? void 0 : Tf.WX,
        containerClassName: Tf.ti,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        hideExampleButton: !0,
    });
}
var T_ = i(461414);
function TC(e) {
    let { user: t, isVisible: i, shouldShow: n } = e,
        s = o2.Ay.isPremium(t),
        l = o2.Ay.canUseAnimatedAvatar(t),
        {
            pendingAvatar: r,
            pendingThemeColors: a,
            tryItOutThemeColors: o,
            tryItOutAvatar: u,
            tryItOutBanner: d,
        } = (0, O.cf)([EL.A], () => {
            let e = EL.A.getPendingChanges(),
                t = EL.A.getErrors(),
                i = EL.A.getTryItOutChanges();
            return { ...e, ...i, errors: t };
        }),
        { preset: c, onShuffle: m } = (function () {
            let e = (0, O.bG)([iW.A], () => iW.A.useReducedMotion),
                [t, i] = (0, f.useState)(Tc()),
                {
                    banner: n,
                    themeColors: s,
                    avatarDecorationSkuId: l,
                    displayNameStyles: r,
                } = (0, f.useMemo)(() => {
                    let i = Tu(t);
                    return {
                        banner: i.getBannerSrc(e),
                        themeColors: i.themeColors,
                        avatarDecorationSkuId: i.avatarDecorationSkuId,
                        displayNameStyles: i.displayNameStyles,
                    };
                }, [t, e]),
                a = (0, O.bG)([Tn.A], () => {
                    let e = Tn.A.getProduct(l);
                    return (0, Ts.T)(e?.items[0]) ? e.items[0] : null;
                });
            (0, f.useEffect)(() => {
                (0, Tl.w5)({ banner: n, themeColors: s, avatarDecoration: a, displayNameStyles: r });
            }, [n, s, a, r]);
            let o = (0, f.useCallback)(() => {
                let e = Tc(t);
                i(e), Y.default.track(q.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: e });
            }, [t]);
            return { preset: t, onShuffle: o };
        })(),
        A = f.useRef(null);
    TS(A, nv._F.TRY_IT_OUT);
    let { analyticsLocations: h, sourceAnalyticsLocations: E } = (0, nU.Ay)(eM.A.USER_SETTINGS_TRY_OUT_PREMIUM),
        x = (e) => {
            e &&
                (d?.startsWith("https:") === !0
                    ? fetch(d)
                          .then((e) => e.blob())
                          .then((e) => (0, Tx.We)(e))
                          .then((e) => {
                              (0, xe.p)({ avatar: u, themeColors: o, banner: e });
                          })
                          .catch(() => {
                              (0, xe.p)({ avatar: u, themeColors: o });
                          })
                    : null != d
                      ? (0, xe.p)({ avatar: u, themeColors: o, banner: d })
                      : (0, xe.p)({ avatar: u, themeColors: o }),
                Y.default.track(q.HAw.TRY_IT_OUT_PRESET_SELECTED, { preset: c }));
        };
    f.useEffect(() => {
        i &&
            Y.default.track(q.HAw.PREMIUM_UPSELL_VIEWED, {
                type: sf.e.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: q.liQ.USER_SETTINGS },
                location_stack: E,
            });
    }, [E, t, i]);
    let T = (0, Ti.V)()?.subscription_trial?.sku_id === sf.pe.TIER_2,
        S = (0, Tt.O)(),
        N = (0, Th.U9)(S, sf.pe.TIER_2);
    return n
        ? (0, p.jsx)(nU.f5, {
              value: h,
              children: (0, p.jsxs)(d9.A, {
                  ref: A,
                  className: T_.MT,
                  type: d9.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, p.jsx)(Ez, {
                          stickyPreview: !1,
                          layoutClassName: T_.th,
                          profilePreviewTitle: (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsx)(oK.t, { size: "md", color: "currentColor", className: T_.PC }),
                                  g.intl.string(g.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, p.jsxs)(p.Fragment, {
                              children: [(0, p.jsx)(TA, { preset: c, onShuffle: m }), (0, p.jsx)(TN, { user: t })],
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
                                              className: T_.h_,
                                              variant: "text-sm/normal",
                                              children: g.intl.string(g.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, p.jsx)(xP, {
                                      className: T_.fz,
                                      user: t,
                                      pendingAvatarSrc: (0, EX.V7)({ userId: t.id, image: u ?? r }),
                                      pendingColors: o ?? a,
                                      onThemeColorsChange: Tl.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, p.jsx)(xm, {
                                      className: T_.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != d,
                                      onBannerChange: Tl.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !l &&
                                      (0, p.jsx)(xr, {
                                          className: T_.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: Tl.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: g.intl.string(g.t["7z0D1c"]),
                                          sectionTitle: g.intl.string(g.t.vtFfPX),
                                      }),
                                  (0, p.jsx)(xo, { user: t, className: T_.fz }),
                                  !T &&
                                      (0, p.jsx)(V.E, {
                                          variant: "text-sm/normal",
                                          children: g.intl.string(g.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !T &&
                          (0, p.jsx)(x8.d, {
                              onSubscribeModalClose: x,
                              className: T_.Kv,
                              showUpsell: !0,
                              text: g.intl.format(g.t.TmfgI2, {
                                  onClick: () => {
                                      (0, Te.K)({ onSubscribeFinish: x });
                                  },
                              }),
                              button: s
                                  ? g.intl.string(g.t.AfRWI8)
                                  : N
                                    ? g.intl.formatToPlainString(g.t.bkQ4bH, { percent: S?.discount.amount })
                                    : g.intl.string(g.t.pj0XBN),
                              position: "inline",
                          }),
                      T &&
                          (0, p.jsxs)("div", {
                              children: [
                                  (0, p.jsx)("div", { className: T_.BU }),
                                  (0, p.jsx)(TE.Ay, {
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
var TI = i(814390),
    Tb = i(909536),
    Tv = i(843282),
    Tj = i(145497),
    Ty = i(685073),
    TO = i(534400),
    TR = i(581781),
    TL = i(743981),
    TD = i(51358);
let TP = (0, sS.Ld)(),
    TG = f.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: i, onChange: n } = e,
            s = f.useMemo(() => new Map(t.map((e) => [e.id, e])), [t]),
            l = (0, O.bG)([t3.default], () => (0, Ty.Zo)(t3.default.getCurrentUser()?.primaryGuild).guildId),
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
                        : (0, p.jsx)(TR.A, {
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
                        : (0, p.jsx)(Tj.j, {
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
                        : (0, p.jsx)(TO.o9, {
                              guildId: t.id,
                              guildTag: i,
                              guildBadge: t.profile?.badge ?? void 0,
                              badgeSize: TL.Sl.SIZE_16,
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
            x = f.useRef(null);
        return (
            TS(x, nv._F.GUILD_TAG),
            (0, p.jsxs)(oq.A, {
                title: g.intl.string(g.t.Pdd1nd),
                titleId: TP,
                ref: x,
                children: [
                    (0, p.jsx)(V.E, {
                        className: TD.VA,
                        variant: "text-sm/normal",
                        children: g.intl.string(g.t.mlZ6Jx),
                    }),
                    (0, p.jsx)(Tv.Pw, {
                        className: TD.Lt,
                        optionClassName: TD.S0,
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
var TU = i(556729);
let TM = (0, sS.Ld)();
function TV(e) {
    let t = (0, EQ.L)(sf.PremiumTypes.TIER_2);
    return (0, p.jsxs)(oq.A, {
        errors: e.errors,
        disabled: e.disabled,
        title: g.intl.string(g.t["9AjdkD"]),
        titleId: TM,
        children: [
            (0, p.jsx)("div", {
                children: (0, p.jsx)(lD.k, {
                    "aria-labelledby": TM,
                    placeholder: e.placeholder,
                    maxLength: q.zzC,
                    onChange: e.onGlobalNameChange,
                    value: e.pendingGlobalName ?? e.currentGlobalName ?? "",
                }),
            }),
            t && (0, p.jsx)(xo, { user: e.user, className: TU.F }),
        ],
    });
}
function Tk(e) {
    let { legacyUsername: t, pendingLegacyUsernameDisabled: i } = e,
        n = c.m$.useSetting(),
        s = void 0 !== i ? i : n;
    return (0, p.jsx)(L.d, {
        label: g.intl.string(g.t["3cWDuO"]),
        description: s ? null : g.intl.formatToPlainString(g.t.aYhclf, { username: t }),
        checked: !s,
        onChange: (e) => {
            !e === n ? (0, EO._e)() : (0, xe.p)({ legacyUsernameDisabled: !e });
        },
    });
}
function Tw(e) {
    let { user: t, savedUserColor: i, pendingColor: n, setPendingAccentColor: s } = e,
        l = t.getAvatarURL(null, 80),
        r = (0, x_.r)(w.A.unsafe_rawColors.PRIMARY_530).hex(),
        a = (0, xC.rh)(l, r, !1),
        o = (0, xj.LX)(a[0]);
    return (0, p.jsx)(oq.A, {
        title: g.intl.string(g.t["/X3fkf"]),
        children: (0, p.jsx)(xL, { onChange: (e) => s(e), color: n ?? i ?? o, suggestedColors: a, showEyeDropper: !0 }),
    });
}
var TF = i(518477);
let TB = () => {
    let e = (0, O.bG)([cu.default], () => cu.default.getId());
    return (0, p.jsx)(oq.A, {
        title: g.intl.string(g.t.Jzj9q4),
        children: (0, p.jsx)(eh.$, {
            text: g.intl.string(g.t.Geikwq),
            onClick: () => {
                (0, EG.openUserProfileModal)({
                    userId: e,
                    sourceAnalyticsLocations: [eM.A.USER_SETTINGS_USER_PROFILE],
                    hideRestrictedProfile: !0,
                    tabSection: TF.RP.WIDGETS,
                });
            },
            size: "sm",
        }),
    });
};
var Tz = i(594453);
function TY() {
    let e = (0, O.bG)([t3.default], () => {
            let e = t3.default.getCurrentUser();
            return ty()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e;
        }),
        t = (0, O.bG)([EH.A], () => EH.A.getUserProfile(e.id)),
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
        } = (0, O.cf)([EL.A], () => {
            let e = EL.A.getPendingChanges(),
                t = EL.A.getErrors();
            return { ...e, errors: t };
        }),
        m = (0, EX.V7)({ userId: e.id, image: i }),
        A = (0, Eq.EC)(),
        h = o2.Ay.canUsePremiumProfileCustomization(e),
        E = (0, Ew.z5)(i, e.avatar),
        x = (0, Ew.Ac)(s, t?.banner),
        T = (0, xI.Ay)(e.id),
        S = T?.getLegacyUsername(),
        f = (c.global_name?.length ?? 0) > 0 ? c.global_name : (A?.nick ?? []),
        N = (c.bio?.length ?? 0) > 0 ? c.bio : (A?.bio ?? []),
        _ = (0, O.yK)([H.A, EK.Ay], () =>
            H.A.getGuildsArray().filter(
                (e) => (0, Ty.Rg)(e) && EK.Ay.getSelfMember(e.id)?.joinedAt != null && e.profile?.tag != null,
            ),
        );
    return (0, p.jsxs)("div", {
        className: Tz.Q,
        children: [
            (0, p.jsx)(TV, {
                placeholder: e.username,
                errors: f,
                currentGlobalName: e.globalName,
                pendingGlobalName: n,
                onGlobalNameChange: (e) => (0, xe.p)({ globalName: e }),
                user: e,
            }),
            (0, p.jsx)(
                xG,
                {
                    sectionTitle: g.intl.string(g.t["+T3RI/"]),
                    errors: c.pronouns,
                    onPronounsChange: (e) => (0, xe.p)({ pronouns: e }),
                    pendingPronouns: r,
                    currentPronouns: t?.pronouns ?? "",
                },
                "pronouns",
            ),
            (0, p.jsx)(TB, {}),
            (0, p.jsx)(
                xr,
                {
                    onAvatarChange: (e) => {
                        (0, xe.p)({ avatar: e }), (0, Ew.WU)(null == e ? "remove" : "set");
                    },
                    showRemoveAvatarButton: E,
                    errors: c.avatar,
                    sectionTitle: g.intl.string(g.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, p.jsx)(xi, { user: e, sectionTitle: g.intl.string(g.t["7v0T9P"]) }, "decoration"),
            (0, p.jsx)(xc, { user: e }),
            (0, p.jsx)(xE, { user: e, sectionTitle: g.intl.string(g.t.wR5wOo) }, "effect"),
            (0, p.jsx)(xp, { user: e, sectionTitle: g.intl.string(g.t.GWrZOd) }, "frame"),
            h
                ? (0, p.jsxs)(p.Fragment, {
                      children: [
                          (0, p.jsx)(
                              xm,
                              {
                                  showRemoveBannerButton: x,
                                  errors: c.banner,
                                  onBannerChange: (e) => (0, xe.p)({ banner: e }),
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, p.jsx)(xP, {
                              user: e,
                              pendingAvatarSrc: m,
                              pendingColors: o,
                              onThemeColorsChange: (e) => (0, xe.p)({ themeColors: e }),
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, p.jsx)(
                      Tw,
                      {
                          user: e,
                          savedUserColor: t?.accentColor,
                          pendingColor: a,
                          setPendingAccentColor: (e) => (0, xe.p)({ accentColor: e }),
                      },
                      "color",
                  ),
            (0, p.jsx)(
                E5,
                {
                    sectionTitle: g.intl.string(g.t.ZzAR2Y),
                    errors: N,
                    onBioChange: (e) => (0, xe.p)({ bio: e }),
                    pendingBio: l,
                    currentBio: t?.bio ?? "",
                },
                "bio",
            ),
            _.length > 0 &&
                (0, p.jsx)(TG, {
                    availablePrimaryGuilds: _,
                    pendingPrimaryGuildId: d,
                    onChange: (e) => (0, xe.p)({ primaryGuildId: e }),
                }),
            null != S && (0, p.jsx)(Tk, { legacyUsername: S, pendingLegacyUsernameDisabled: u }, "legacy_username"),
        ],
    });
}
function TX() {
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
var TH = i(743539);
function TK() {
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
        } = (0, O.cf)([EL.A], () => ({ ...EL.A.getPendingChanges(), showNotice: EL.A.showNotice() })),
        a = (0, EX.V7)({ userId: e.id, image: n }),
        o = (0, Ew.lw)({ pendingValue: s, userValue: e?.collectibles?.nameplate }),
        u = (0, TI.A)() && null != i ? x7.Ay.parse(void 0, i).content : i,
        d = o2.Ay.canUsePremiumProfileCustomization(e),
        c = (0, Tb.St)("edit-profile-upsell"),
        { analyticsLocations: m } = (0, nU.Ay)(eM.A.USER_SETTINGS_USER_PROFILE);
    f.useEffect(() => () => n6.h.wait(EO.IM), []);
    let [A, h] = f.useState(!1),
        E = !d,
        x = f.useRef(null);
    return t
        ? (0, p.jsx)(u0.A, {})
        : (0, p.jsxs)(nU.f5, {
              value: m,
              children: [
                  (0, p.jsx)(x5, {}),
                  (0, p.jsx)(Ez, {
                      profilePreview: (0, p.jsx)(EY.A, {
                          user: e,
                          canUsePremiumCustomization: d,
                          onUpsellClick: TX,
                          pendingBio: u,
                          ...r,
                          pendingAvatar: a,
                          containerClassName: TH.ti,
                      }),
                      nameplatePreview: (0, p.jsx)(Ek.A, {
                          user: e,
                          nameplate: o,
                          ...r,
                          className: null == o ? TH.tJ : void 0,
                          isHighlighted: !0,
                      }),
                      children: (0, p.jsx)(TY, {}),
                  }),
                  (0, p.jsx)(xQ.L, {
                      innerRef: x,
                      onChange: (e) => h(e),
                      threshold: 0.25,
                      active: E,
                      children: (0, p.jsx)("div", {
                          ref: x,
                          children: (0, p.jsx)(TC, { user: e, shouldShow: E, isVisible: A }),
                      }),
                  }),
                  E &&
                      !l &&
                      (0, p.jsx)(x8.d, {
                          className: TH.EL,
                          showUpsell: !A,
                          text: g.intl.format(g.t.TmfgI2, { onClick: () => (0, Te.K)({}) }),
                          textVariant: "heading-md/medium",
                          useUpdatedStyling: !0,
                          leadingAction: c
                              ? (0, p.jsx)(x9.l, { size: "md", location: eM.A.PREMIUM_WISHLIST_EDIT_PROFILE_UPSELL })
                              : void 0,
                          button: (0, p.jsx)("div", {
                              className: TH.Xl,
                              children: (0, p.jsx)(eh.$, {
                                  variant: "overlay-primary",
                                  onClick: () => {
                                      Y.default.track(q.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                                          cta_variant: "floating_action_button",
                                      }),
                                          x?.current?.scrollIntoView({ behavior: "smooth" });
                                  },
                                  text: g.intl.string(g.t.uw9zI7),
                                  icon: oK.t,
                              }),
                          }),
                      }),
              ],
          });
}
var TW = i(625494),
    TZ = i(454078);
let Tq = { [nv.Eq.USER_PROFILE]: "main_profile_tab", [nv.Eq.GUILD]: "guild_profile_tab" },
    TQ = (0, o.E2)(u.X.PROFILE_SETTING, {
        Component: function () {
            let e = (0, O.bG)([lF.A, K.Ay, EL.A], () => {
                    let e = EL.A.selectedGuildId ?? lF.A.getGuildId();
                    return null == e || EL._.has(e) ? K.Ay.getFlattenedGuildIds().find((e) => !EL._.has(e)) : e;
                }),
                t = (0, O.bG)([H.A], () => H.A.getGuild(e)),
                i = (0, O.bG)([EL.A], () => EL.A.showNotice()),
                n = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
                s = TT.A.useField("subsection");
            return (
                f.useEffect(() => {
                    (0, rf._)(Tq[s]);
                }, [s]),
                f.useEffect(() => {
                    null != n && t?.id != null && (0, xW.A)(n.id, n.getAvatarURL(t?.id, 80), { guildId: t?.id });
                }, [t?.id, n]),
                (0, p.jsx)(xq, {
                    children: (0, p.jsxs)(dQ.F, {
                        component: (0, p.jsx)(B.A, {
                            children: (0, p.jsx)(eA.D, {
                                variant: "heading-xl/normal",
                                children: g.intl.string(g.t["vi7f+q"]),
                            }),
                        }),
                        children: [
                            (0, p.jsxs)(EU.V, {
                                className: TZ.$H,
                                type: "top",
                                look: "brand",
                                selectedItem: s,
                                onItemSelect: function (e) {
                                    if (s !== e) {
                                        if (i) {
                                            (0, rN.fO)({ duration: 300, intensity: EM.n3 }),
                                                TW._.dispatch(q.jej.EMPHASIZE_NOTICE);
                                            return;
                                        }
                                        e === nv.Eq.GUILD && null != t && (0, EV.V2)(t.id),
                                            TT.A.setState({ subsection: e });
                                    }
                                },
                                children: [
                                    (0, p.jsx)(
                                        EU.V.Item,
                                        {
                                            className: TZ.YU,
                                            id: nv.Eq.USER_PROFILE,
                                            children: g.intl.string(g.t["2p07FR"]),
                                        },
                                        nv.Eq.USER_PROFILE,
                                    ),
                                    (0, p.jsx)(
                                        EU.V.Item,
                                        {
                                            className: ew()(TZ.YU, TZ.HY),
                                            "aria-label": g.intl.string(g.t.kPHroX),
                                            id: nv.Eq.GUILD,
                                            children: g.intl.string(g.t.kPHroX),
                                        },
                                        nv.Eq.GUILD,
                                    ),
                                ],
                            }),
                            s === nv.Eq.GUILD
                                ? (0, p.jsx)(xK, {
                                      selectedGuild: t,
                                      onGuildChange: function (e) {
                                          if (i) {
                                              (0, rN.fO)({ duration: 300, intensity: EM.n3 }),
                                                  TW._.dispatch(q.jej.EMPHASIZE_NOTICE);
                                              return;
                                          }
                                          null != e && (0, EV.JJ)(e.id);
                                      },
                                  })
                                : (0, p.jsx)(TK, {}),
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
    TJ = (0, o.zZ)(u.X.PROFILE_CATEGORY, { buildLayout: () => [TQ] });
var T$ = i(294666);
let T0 = () => {
        let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
            { avatarSrc: t, avatarDecorationSrc: i } = (0, EP.A)({ userId: e?.id, size: iK._3.SIZE_48 });
        return null == e
            ? null
            : (0, p.jsxs)("div", {
                  className: T$.a5,
                  children: [
                      (0, p.jsx)(iH.eu, {
                          src: t,
                          avatarDecoration: i,
                          size: iK._3.SIZE_48,
                          "aria-label": g.intl.string(g.t.lqaIxI),
                      }),
                      (0, p.jsxs)("div", {
                          className: T$.FS,
                          children: [
                              (0, p.jsx)(V.E, {
                                  color: "text-strong",
                                  variant: "text-md/medium",
                                  lineClamp: 1,
                                  children: e.globalName ?? e.username,
                              }),
                              (0, p.jsxs)("div", {
                                  className: T$.Fk,
                                  children: [
                                      (0, p.jsx)(V.E, {
                                          variant: "text-sm/normal",
                                          color: "currentColor",
                                          lineClamp: 1,
                                          children: g.intl.string(g.t.Ip9nBS),
                                      }),
                                      (0, p.jsx)(o1.R, { size: "xxs", color: "currentColor" }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              });
    },
    T1 = (0, o.t_)(u.X.PROFILE_PANEL, {
        useTitle: () => g.intl.string(g.t["vi7f+q"]),
        notice: { stores: [EL.A], element: ER.A },
        initialize: () => () =>
            n6.h.wait(() => {
                (0, EO.F7)();
            }),
        buildLayout: () => [TJ],
    }),
    T2 = (0, o.i4)(u.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["vi7f+q"]),
        icon: T6,
        StronglyDiscouragedCustomComponent: T0,
        usePredicate: () => !(0, ED.X)("user_settings_sidebar"),
        buildLayout: () => [T1],
    }),
    T3 = (0, o.i4)(u.X.PROFILE_SIDEBAR_ITEM_WYSIWYG, {
        useTitle: () => g.intl.string(g.t["vi7f+q"]),
        icon: T6,
        StronglyDiscouragedCustomComponent: T0,
        usePredicate: () => (0, ED.X)("user_settings_sidebar"),
        onClick: () => {
            let e = cu.default.getId();
            (0, EG.openUserProfileModal)({ userId: e });
        },
        buildLayout: () => [],
    });
function T6() {
    let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: i } = (0, EP.A)({ userId: e?.id, size: iK._3.SIZE_48 });
    return (0, p.jsx)(iH.eu, { src: t, avatarDecoration: i, size: iK._3.SIZE_20, "aria-hidden": !0 });
}
let T4 = (0, o.WI)(u.X.PROFILE_SECTION, { hoisted: !0, buildLayout: () => [T2, T3] });
var T5 = i(98207);
function T7() {
    return (0, p.jsx)(tr.p, { icon: u4.X, messageType: tr.Y.POSITIVE, children: g.intl.string(g.t.FsmBy4) });
}
var T8 = i(670492),
    T9 = i(579872),
    Se = i(900686),
    St = i(518142),
    Si = i(662758),
    Sn = i(466034);
function Ss(e) {
    let { backupCodes: t, hasTOTPEnabled: i, currentUser: n } = e,
        s = f.useCallback((e) => {
            (0, _.openModal)((t) => (0, p.jsx)(St.default, { ...t, password: e }), { stackingBehavior: "stack" });
        }, []),
        l = f.useCallback(() => {
            (0, _.openModal)((e) =>
                (0, p.jsx)(Si.default, {
                    ...e,
                    handleSubmit: (e) =>
                        T5.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                            s(e);
                        }),
                    title: g.intl.string(g.t.PsQmzU),
                    actionText: g.intl.string(g.t.ajkYcF),
                }),
            );
        }, [s]),
        r = f.useCallback(() => {
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
        a = f.useMemo(
            () =>
                t.length > 0
                    ? (0, p.jsx)(Se.A, {
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
        o = f.useCallback(() => {
            T9.A.show({
                title: g.intl.string(g.t["D+aE7g"]),
                body: g.intl.string(g.t.EA4ZEk),
                cancelText: g.intl.string(g.t["ETE/oC"]),
                onConfirm: () => T5.A.disable(),
            });
        }, []);
    return (0, p.jsx)(sy.D, {
        label: g.intl.string(g.t.EPVq00),
        description: g.intl.string(g.t.bQwxib),
        children: (0, p.jsxs)(aw.e, {
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
                        onClick: Sn.Ay.enableMFA,
                    }),
            ],
        }),
    });
}
var Sl = i(464477);
function Sr() {
    return !Sl.K7;
}
let Sa = (0, o.E2)(u.X.ACCOUNT_TWO_FACTOR_CRYPTO_NOTICE, {
    useSearchTerms: () => [g.intl.string(g.t.m0FidJ)],
    usePredicate: Sr,
    Component: function () {
        return (0, p.jsx)(sy.D, {
            label: g.intl.string(g.t.EPVq00),
            children: (0, p.jsx)(tr.p, { messageType: tr.Y.INFO, children: g.intl.string(g.t.PhHhsj) }),
        });
    },
});
function So() {
    let e = Sr(),
        t = (0, O.bG)([t3.default], () => {
            let e = t3.default.getCurrentUser();
            return null != e && !e.verified;
        });
    return !e && t;
}
let Su = (0, o.E2)(u.X.ACCOUNT_UNVERIFIED_USER_NOTICE, {
    useSearchTerms: () => [g.intl.string(g.t.m0FidJ)],
    usePredicate: So,
    Component: function () {
        return (0, p.jsx)(sy.D, {
            label: g.intl.string(g.t.EPVq00),
            children: (0, p.jsx)(tr.p, { messageType: tr.Y.WARNING, children: g.intl.string(g.t.uggF7o) }),
        });
    },
});
function Sd() {
    return (0, O.bG)([t3.default], () => {
        let e = t3.default.getCurrentUser();
        return null != e && e.mfaEnabled;
    });
}
let Sc = (0, o.E2)(u.X.ACCOUNT_AUTHENTICATOR_APP_SETTING, {
    useSearchTerms: function () {
        let e = (0, O.bG)([cu.default], () => cu.default.hasTOTPEnabled()),
            t = [g.intl.string(g.t.m0FidJ), g.intl.string(g.t.xZEzbu)];
        return e ? t.push(g.intl.string(g.t["D+aE7g"])) : t.push(g.intl.string(g.t.cDgKte)), t;
    },
    usePredicate: function () {
        let e = Sr(),
            t = So(),
            i = Sd();
        return !e && !t && i;
    },
    Component: function () {
        let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
            t = (0, O.bG)([T8.A], () => T8.A.getBackupCodes()),
            i = (0, O.bG)([cu.default], () => cu.default.hasTOTPEnabled());
        return null == e ? null : (0, p.jsx)(Ss, { backupCodes: t, currentUser: e, hasTOTPEnabled: i });
    },
});
var Sg = i(658675),
    Sm = i(176571);
function SA(e) {
    let {
            code: { code: t, consumed: i },
        } = e,
        n = `${t.substr(0, 4)}-${t.substr(4)}`,
        s = f.useRef(null),
        l = f.useCallback(
            (e) => {
                "c" === e.key &&
                    e.metaKey &&
                    cA.p5 &&
                    (e.preventDefault(), e.stopPropagation(), (0, cA.C)(n), s?.current?.focus());
            },
            [n],
        );
    return (0, p.jsx)("li", {
        className: iC.SX,
        children: (0, p.jsxs)(M.D, {
            innerRef: s,
            className: Sm.Uc,
            onKeyDown: l,
            children: [(0, p.jsx)(Sg.P, { checked: i }), (0, p.jsx)("span", { className: Sm.aY, children: n })],
        }),
    });
}
function Sh(e) {
    let { backupCodes: t } = e,
        i = f.useCallback((e) => e.map((e) => (0, p.jsx)(SA, { code: e }, e.code)), []),
        n = f.useCallback(async () => {
            let e = T8.A.getVerificationKey();
            await T5.A.confirmViewBackupCodes(e, !0);
        }, []);
    return (0, p.jsxs)(sy.D, {
        label: g.intl.string(g.t.GfqHPn),
        description: g.intl.format(g.t.OhmvYt, {}),
        children: [
            (0, p.jsxs)(lM.A, {
                children: [
                    (0, p.jsx)(lM.A.Child, {
                        children: (0, p.jsx)("ul", { className: Sm.Pm, children: i(t.slice(0, t.length / 2)) }),
                    }),
                    (0, p.jsx)(lM.A.Child, {
                        children: (0, p.jsx)("ul", { className: Sm.Pm, children: i(t.slice(t.length / 2)) }),
                    }),
                ],
            }),
            (0, p.jsx)(F.Q, { textVariant: "text-sm/medium", onClick: n, text: g.intl.string(g.t.RIThUu) }),
        ],
    });
}
let SE = (0, o.E2)(u.X.ACCOUNT_BACKUP_CODES_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t.m0FidJ), g.intl.string(g.t.xZEzbu)],
        usePredicate: function () {
            let e = Sr(),
                t = So(),
                i = Sd(),
                n = (0, O.bG)([T8.A], () => T8.A.getBackupCodes().length > 0);
            return !e && !t && i && n;
        },
        Component: function () {
            let e = (0, O.bG)([T8.A], () => T8.A.getBackupCodes());
            return (0, p.jsx)(Sh, { backupCodes: e });
        },
    }),
    Sx = (0, o.E2)(u.X.ACCOUNT_ENABLE_MFA_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t.m0FidJ)],
        usePredicate: function () {
            let e = Sr(),
                t = So();
            return (0, O.bG)([t3.default], () => {
                let i = t3.default.getCurrentUser();
                return null != i && !i.mfaEnabled && !e && !t;
            });
        },
        Component: function () {
            return (0, p.jsx)(sy.D, {
                label: g.intl.string(g.t.EPVq00),
                description: g.intl.string(g.t["8aDa1t"]),
                children: (0, p.jsx)(eh.$, {
                    variant: "primary",
                    size: "sm",
                    text: g.intl.string(g.t.cDgKte),
                    onClick: Sn.Ay.enableMFA,
                }),
            });
        },
    });
var ST = i(398177);
let SS = (0, o.Tf)(u.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
        useTitle: () => g.intl.string(g.t["CIGa+7"]),
        useLabel: () => g.intl.string(g.t.bt75uw),
        useAriaLabel: () => g.intl.string(g.t["FRep5/"]),
        useVariant: () => "secondary",
        onClick: () => {
            (0, _.openModal)((e) => (0, p.jsx)(ST.default, { ...e, onSuccess: () => e.onClose() }));
        },
    }),
    Sp = (0, o.E2)(u.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t["FRep5/"])],
        Component: function () {
            return (0, p.jsx)(eh.$, {
                variant: "primary",
                size: "sm",
                text: g.intl.string(g.t["FRep5/"]),
                onClick: () => (0, _.openModal)((e) => (0, p.jsx)(ST.default, { ...e, onSuccess: e.onClose })),
            });
        },
    });
var Sf = i(557722),
    SN = i(615715);
function S_(e) {
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
var SC =
    (((r = {}).AVAILABLE = "available"),
    (r.UNAVAILABLE_NO_CRYPTO = "unavailable_no_crypto"),
    (r.UNAVAILABLE_UNVERIFIED = "unavailable_unverified"),
    r);
function SI() {
    let e = (0, uV.bG)([t3.default], () => t3.default.getCurrentUser()?.verified);
    return Sl.K7 ? (!1 === e ? "unavailable_unverified" : "available") : "unavailable_no_crypto";
}
function Sb() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (0, uV.bG)([H.A, xM.A, t3.default], () =>
        t3.default.getCurrentUser()?.hasAnyStaffLevel()
            ? e
                ? g.intl.string(g.t.hxf9fX)
                : g.intl.string(g.t["3iKih7"])
            : H.A.getGuildsArray().some(
                    (e) =>
                        e.features.has(q.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) &&
                        xM.A.can(q.xBc.ADMINISTRATOR, e),
                )
              ? e
                  ? g.intl.string(g.t.OYTCUh)
                  : g.intl.string(g.t.HC8uSZ)
              : null,
    );
}
var Sv = i(53516);
function Sj(e) {
    let t,
        i,
        { currentUser: n, togglingSMS: s } = e,
        [l, r] = f.useState(!1),
        a = f.useCallback(
            (e) => {
                e.preventDefault(), r(!l);
            },
            [l],
        ),
        o = f.useCallback(function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            (0, _.openModal)((t) => (0, p.jsx)(SN.default, { reason: Sf.d.USER_SETTINGS_UPDATE, ...t, ...e }), {
                modalKey: Sv.V,
            });
        }, []),
        u = f.useCallback(() => {
            o();
        }, [o]),
        d = f.useCallback(() => {
            null == n.phone ? o({ onAddedPhone: T5.A.enableSMS }) : T5.A.enableSMS();
        }, [n, o]),
        c = f.useCallback(() => {
            (0, _.openModal)((e) =>
                (0, p.jsx)(Si.default, {
                    ...e,
                    handleSubmit: T5.A.disableSMS,
                    title: g.intl.string(g.t.KLWnit),
                    children: g.intl.string(g.t["W0/Duf"]),
                }),
            );
        }, []),
        m = f.useCallback((e) => (null == e ? "" : `${"*".repeat(e.length - 4)}${e.slice(-4)}`), []),
        A = null != n.phone,
        h = n.hasFlag(q.nhx.MFA_SMS);
    if (A || h) {
        let e = l ? n.phone : m(n.phone);
        i = (0, p.jsxs)(V.E, {
            variant: "text-sm/normal",
            children: [
                g.intl.format(g.t.PXVoEO, { phoneNumber: e }),
                (0, p.jsx)(uk.Anchor, {
                    onClick: a,
                    className: Sm.vN,
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
        let e = S_(n);
        t = (0, p.jsxs)(aw.e, {
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
    return (0, p.jsxs)(sy.D, {
        label: g.intl.string(g.t.uHAJ5v),
        description: g.intl.string(g.t.fspJ4H),
        children: [i, t],
    });
}
let Sy = (0, o.E2)(u.X.ACCOUNT_SMS_BACKUP_AUTHENTICATION_SETTING, {
    useSearchTerms: () => [g.intl.string(g.t.uHAJ5v)],
    usePredicate: function () {
        let e = Sr(),
            t = So(),
            i = Sd(),
            n = (0, O.bG)([cu.default], () => cu.default.hasTOTPEnabled());
        return !e && !t && i && n;
    },
    Component: function () {
        let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
            t = (0, O.bG)([T8.A], () => T8.A.togglingSMS);
        return null == e ? null : (0, p.jsx)(Sj, { currentUser: e, togglingSMS: t });
    },
});
var SO = i(328009);
let SR = (0, o.E2)(u.X.ACCOUNT_SECURITY_KEYS_SETTING, {
    useSearchTerms: () => [g.intl.string(g.t.vrOCCk), g.intl.string(g.t.y7SXYX)],
    usePredicate: function () {
        let e = Sr(),
            t = So();
        return !e && !t;
    },
    Component: SO.A,
});
var SL = i(200921),
    SD = i(390310),
    SP = i(766928),
    SG = i(568385),
    SU = i(791606),
    SM = i(646270),
    SV = i(738678);
function Sk(e, t) {
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
                    return { text: e, icon: SM.u };
                case "horizon os":
                    return { text: e, icon: SV.G };
                default:
                    return { text: e, icon: e2.k };
            }
        })(e.client_info?.os);
    return { location: i, platform: n, os: s, Icon: l, lastActive: t ? null : (0, SD.Y)(e.approx_last_used_time) };
}
var Sw = i(563606);
function SF() {
    return (0, p.jsx)(V.E, { variant: "text-sm/normal", className: Sw.h_, children: g.intl.string(g.t.zZp618) });
}
function SB() {
    let { currentSession: e } = (0, SD.r)();
    return null == e
        ? (0, p.jsx)("div", { className: Sw.Lq, children: (0, p.jsx)(u3.y, {}) })
        : (0, p.jsx)(ia.n, { label: g.intl.string(g.t.LLS19o), children: (0, p.jsx)(SX, { session: e, current: !0 }) });
}
function Sz(e) {
    let { checked: t, otherSessions: i } = e;
    return (0, p.jsx)(sy.D, {
        label: t.size > 0 ? g.intl.string(g.t.mMEmRO) : g.intl.string(g.t.Vij32M),
        description: g.intl.string(g.t.OTXyaf),
        children: (0, p.jsx)("div", {
            "data-button-hoisted-classname-wrapper": !0,
            className: Sw.Cn,
            children: (0, p.jsx)(eh.$, {
                variant: "critical-secondary",
                size: "sm",
                text:
                    t.size > 0
                        ? g.intl.formatToPlainString(g.t["83CPLj"], { count: t.size })
                        : g.intl.string(g.t.cLmmeY),
                onClick: () => {
                    t.size > 0 ? (0, SL.U0)(Array.from(t)) : (0, SL.U0)(i.map((e) => e.id_hash));
                },
            }),
        }),
    });
}
function SY() {
    let { currentSession: e, otherSessions: t } = (0, SD.r)(),
        i = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
        [n, s] = f.useState(new Set());
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
                                    SX,
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
                            i?.mfaEnabled ? null : (0, p.jsx)(SH, {}),
                        ],
                    }),
                    t.length > 0 &&
                        (0, p.jsx)("div", {
                            className: Sw.wq,
                            children: (0, p.jsx)(Sz, { checked: n, otherSessions: t }),
                        }),
                ],
            })
          : null;
}
function SX(e) {
    let { session: t, current: i, setChecked: n, checked: s, useChecks: l } = e,
        { location: r, platform: a, os: o, Icon: u, lastActive: d } = Sk(t, i),
        c = [o, a].filter(t6.Vq),
        m = [r, d].filter(t6.Vq);
    return (0, p.jsxs)(
        "div",
        {
            className: ew()(Sw.dZ, { [Sw.gg]: i }),
            children: [
                (0, p.jsxs)("div", {
                    className: Sw.OC,
                    children: [
                        (0, p.jsx)("div", {
                            className: Sw.km,
                            children: (0, p.jsx)(u, { size: "md", color: "currentColor" }),
                        }),
                        (0, p.jsxs)("div", {
                            className: Sw.F3,
                            children: [
                                (0, p.jsxs)(V.E, {
                                    variant: "eyebrow",
                                    className: Sw.nT,
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
                                    className: Sw.nT,
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
                                    className: Sw.GR,
                                    children: (0, p.jsx)(SG.J, {
                                        onChange: (e) => {
                                            n?.(e);
                                        },
                                        checked: s,
                                    }),
                                })
                              : (0, p.jsx)(M.D, {
                                    className: Sw.ux,
                                    onClick: (e) => {
                                        e.shiftKey ? n?.(!0) : (0, SL.U0)(t.id_hash);
                                    },
                                    "aria-label": g.intl.string(g.t.E4MJNt),
                                    children: (0, p.jsx)(c0.P, { size: "md", color: "currentColor" }),
                                }),
                    ],
                }),
                !i && (0, p.jsx)(eE.c, { className: Sw.O9 }),
            ],
        },
        t.id_hash,
    );
}
function SH() {
    return (0, p.jsxs)("div", {
        className: ew()(Sw.dZ, Sw.EC),
        children: [
            (0, p.jsxs)("div", {
                className: Sw.OC,
                children: [
                    (0, p.jsx)("div", { className: Sw.km, children: (0, p.jsx)(SU.A, { width: "32", height: "32" }) }),
                    (0, p.jsxs)("div", {
                        className: Sw.F3,
                        children: [
                            (0, p.jsx)(V.E, {
                                variant: "eyebrow",
                                className: Sw.nT,
                                color: "text-muted",
                                children: (0, p.jsx)("span", { children: g.intl.string(g.t.iUa0sn) }),
                            }),
                            (0, p.jsx)(V.E, {
                                variant: "text-sm/medium",
                                className: Sw.nT,
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
            (0, p.jsx)("div", { className: Sw.O9 }),
        ],
    });
}
var SK = i(176524),
    SW = i(490173);
function SZ(e) {
    let { icon: t, label: i, subLabel: n, description: s, children: l, muted: r } = e;
    return (0, p.jsxs)(R.B, {
        direction: "horizontal",
        align: "center",
        gap: "sm",
        role: "listitem",
        children: [
            (0, p.jsx)(SK.A, { Icon: t, color: r ? w.A.colors.ICON_MUTED : "currentColor" }),
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
function Sq(e) {
    let { session: t, current: i } = e,
        { location: n, platform: s, os: l, Icon: r, lastActive: a } = Sk(t, i),
        o = [n, a].filter(t6.Vq);
    return (0, p.jsx)(SZ, {
        icon: r,
        label: l,
        subLabel: s,
        description: o.join(" \xb7 "),
        children:
            !i &&
            (0, p.jsx)(M.D, {
                className: SW.X,
                onClick: () => (0, SL.U0)(t.id_hash),
                "aria-label": g.intl.string(g.t.E4MJNt),
                children: (0, p.jsx)(c0.P, { size: "md", color: "currentColor" }),
            }),
    });
}
function SQ(e) {
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
function SJ() {
    let { currentSession: e } = (0, SD.r)();
    return null == e
        ? (0, p.jsx)(u3.y, {})
        : (0, p.jsx)(SQ, { title: g.intl.string(g.t.LLS19o), children: (0, p.jsx)(Sq, { session: e, current: !0 }) });
}
let S$ = (0, o.E2)(u.X.SESSIONS_CURRENT_SESSION_SETTING, {
        Component: function () {
            return (0, iz._A)("CurrentSessionSetting") ? (0, p.jsx)(SJ, {}) : (0, p.jsx)(SB, {});
        },
        useSearchTerms: () => [],
    }),
    S0 = (0, o.E2)(u.X.SESSIONS_LOGOUT_ALL_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = (0, SD.r)();
            return (0, p.jsx)(sy.D, {
                label: g.intl.string(g.t.Vij32M),
                description: g.intl.string(g.t.OTXyaf),
                children: (0, p.jsx)(eh.$, {
                    onClick: () => (0, SL.U0)(e.map((e) => e.id_hash)),
                    variant: "critical-primary",
                    size: "sm",
                    text: g.intl.string(g.t.cLmmeY),
                }),
            });
        },
        useSearchTerms: () => [g.intl.string(g.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = (0, SD.r)();
            return e.length > 0;
        },
    });
function S1() {
    return (0, p.jsx)(SZ, {
        icon: SP.W,
        label: g.intl.string(g.t.iUa0sn),
        description: g.intl.format(g.t["044+8i"], {
            onClick: () =>
                (0, ej.openUserSettings)(u.X.ACCOUNT_PANEL, { analyticsLocations: [eM.A.USER_SETTINGS_SESSIONS] }),
        }),
        muted: !0,
    });
}
function S2() {
    let { otherSessions: e } = (0, SD.r)(),
        t = (0, O.bG)([t3.default], () => t3.default.getCurrentUser());
    return (0, p.jsxs)(SQ, {
        title: g.intl.string(g.t.xx1MWc),
        children: [e.map((e) => (0, p.jsx)(Sq, { session: e }, e.id_hash)), t?.mfaEnabled ? null : (0, p.jsx)(S1, {})],
    });
}
let S3 = (0, o.E2)(u.X.SESSIONS_OTHER_SESSIONS_SETTING, {
        Component: function () {
            return (0, iz._A)("OtherSessionsSetting") ? (0, p.jsx)(S2, {}) : (0, p.jsx)(SY, {});
        },
        useSearchTerms: () => [g.intl.string(g.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = (0, SD.r)(),
                t = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.mfaEnabled);
            return e.length > 0 || !t;
        },
    }),
    S6 = (0, o.zZ)(u.X.SESSIONS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.mEndXM),
        useSubtitle: () => g.intl.string(g.t.b7ZpTM),
        initialize: () => {
            (0, SL.GY)();
        },
        buildLayout: () => [S$, S3, S0],
        useSearchTerms: () => [
            g.intl.string(g.t["+1h0k/"]),
            g.intl.string(g.t.LLS19o),
            g.intl.string(g.t.xx1MWc),
            g.intl.string(g.t.lSWsrd),
        ],
    }),
    S4 = (0, o.zZ)(u.X.SESSIONS_CATEGORY, {
        useSearchTerms: () => [
            g.intl.string(g.t["+1h0k/"]),
            g.intl.string(g.t.LLS19o),
            g.intl.string(g.t.xx1MWc),
            g.intl.string(g.t.Vij32M),
            g.intl.string(g.t.lSWsrd),
        ],
        buildLayout: () => [S$, S3],
        initialize: () => (
            (0, SL.GY)(),
            () => {
                (0, SL.ZQ)();
            }
        ),
        useInlineNotice: function () {
            return f.useMemo(() => ({ type: eN.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: SF }), []);
        },
    }),
    S5 = (0, o.t_)(u.X.SESSIONS_PANEL, {
        useTitle: () => ((0, iz._A)("SessionsPanel") ? g.intl.string(g.t.mEndXM) : g.intl.string(g.t["+1h0k/"])),
        useObscuredNotice: u0.L,
        buildLayout: () => ((0, iz.pC)("SessionsPanel") ? [S6] : [S4]),
    }),
    S7 = (0, o.i4)(u.X.SESSIONS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["+1h0k/"]),
        icon: SP.W,
        usePredicate: () => !(0, iz._A)("SessionsPanel"),
        buildLayout: () => [S5],
    }),
    S8 = (0, o.t0)(u.X.ACCOUNT_SESSIONS_NESTED_PANEL, {
        buildLayout: () => [S5],
        usePredicate: () => (0, iz._A)("AccountSessionsNestedPanel"),
        initialize: () => {
            (0, SL.GY)();
        },
        useTrailingDecoration: () => ({
            type: eN.xn.TEXT,
            useText: () => {
                let { currentSession: e, otherSessions: t } = (0, SD.r)(),
                    i = t.length + +(null != e);
                return i > 0 ? g.intl.formatToPlainString(g.t.G7zwOk, { count: i }) : g.intl.string(g.t.MKDeyL);
            },
        }),
    }),
    S9 = (0, o.zZ)(u.X.ACCOUNT_AUTHENTICATION_CATEGORY, {
        useTitle: () => g.intl.string(g.t.pKSjEj),
        useInlineNotice: function () {
            return (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.mfaEnabled ?? !1)
                ? { type: eN.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: T7 }
                : null;
        },
        buildLayout: () => [
            Sp,
            Sa,
            Su,
            Sx,
            Sc,
            SE,
            Sy,
            SR,
            ...((0, iz.pC)("AccountAuthenticationCategory") ? [S8] : []),
        ],
    });
i(204925);
var pe = i(818348);
let pt = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0;
    (0, _.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([i.e("40933"), i.e("19623"), i.e("21007")]).then(i.bind(i, 888363));
            return (i) => (0, p.jsx)(t, { claimRequired: e, ...i });
        },
        { onCloseRequest: e ? pe.tE : null, onCloseCallback: t },
    );
};
var pi = i(940856),
    pn = i(36149),
    ps = i(207560);
function pl(e) {
    let t = (0, ps.fk)(),
        i = (0, pn.b8)(),
        n = (0, pn.yM)(),
        s = (0, pn.Y2)();
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
var pr = i(516761);
function pa() {
    let e = g.intl.string(g.t.XxRj7f);
    return (0, p.jsxs)(V.E, {
        variant: "text-md/medium",
        children: [
            `${e} \u{2022} `,
            g.intl.format(pr.default.WM5adV, {
                handleOnHelpUrlHook: () => window.open(ta.A.getArticleURL(q.MVz.TIGGER_PAWTECT_LEARN_MORE), "_blank"),
            }),
        ],
    });
}
let po = (0, o.Tf)(u.X.ACCOUNT_INFO_AGE_GROUP_EDIT_SETTING, {
        usePredicate: () => pl("edit"),
        useTitle: () => g.intl.string(g.t["/52UYy"]),
        useVariant: () => "secondary",
        useTrailingContent: () => ({ type: eN._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: pa }),
        useLabel: () => g.intl.string(g.t.bt75uw),
        onClick: function () {
            (0, _.openModalLazy)(async () => {
                let { default: e } = await i.e("45361").then(i.bind(i, 151080));
                return (t) => (0, p.jsx)(e, { ...t });
            });
        },
    }),
    pu = (0, o.E2)(u.X.ACCOUNT_INFO_AGE_GROUP_INFO_SETTING, {
        usePredicate: () => pl("info"),
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
                                onClick: pe.tE,
                                text: g.intl.string(g.t.bt75uw),
                                "aria-hidden": !0,
                            }),
                        }),
                    ],
                }),
            });
        },
    });
var pd = i(139716),
    pc = i(847599);
function pg() {
    return (0, pn.yM)() ? g.intl.string(g.t.sK0dmH) : g.intl.string(g.t.lKDPGA);
}
let pm = (0, o.Tf)(u.X.ACCOUNT_INFO_AGE_GROUP_VERIFY_SETTING, {
        usePredicate: () => pl("verify"),
        useTitle: () => g.intl.string(g.t["/52UYy"]),
        useVariant: () => "secondary",
        useTrailingContent: () => ({ type: eN._1.TEXT, useText: pg }),
        useLabel: function () {
            return (0, pn.yM)() ? g.intl.string(g.t["9KiIz6"]) : g.intl.string(g.t.DVywUB);
        },
        onClick: () => pd.A.showAgeVerificationGetStartedModal({ entryPoint: pc.q1.ACCOUNT_AGE_GROUP }),
    }),
    pA = (0, o.Tf)(u.X.ACCOUNT_INFO_CLAIM_ACCOUNT_SETTING, {
        usePredicate: () => {
            let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser());
            return null != e && !e.isClaimed();
        },
        useTitle: () => g.intl.string(g.t.tlZllC),
        useVariant: () => "secondary",
        useTrailingContent: () => ({ type: eN._1.TEXT, useText: () => g.intl.string(g.t.qxk9zo) }),
        useLabel: () => g.intl.string(g.t.BleMPB),
        onClick: () => pt(),
    });
function ph(e) {
    return `${"*".repeat(e.length - 4)}${e.slice(-4)}`;
}
function pE(e) {
    let [t, i] = e.split("@");
    return `${"*".repeat(t.length)}@${i}`;
}
function px(e) {
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
function pT() {
    let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.email);
    return null == e
        ? (0, p.jsx)(V.E, { variant: "text-md/medium", children: g.intl.string(g.t["8SfTN/"]) })
        : (0, p.jsx)(px, {
              text: e,
              censor: pE,
              revealLabel: g.intl.string(g.t["Zvx+yV"]),
              hideLabel: g.intl.string(g.t.nqTD4d),
              redesign: !0,
          });
}
let pS = (0, o.Tf)(u.X.ACCOUNT_INFO_EMAIL_SETTING, {
    usePredicate: () => (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => g.intl.string(g.t.tlZllC),
    useVariant: () => "secondary",
    useTrailingContent: () => ({ type: eN._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: pT }),
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
function pp() {
    let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
        t = e?.phone ?? null;
    return null == e || null == t
        ? (0, p.jsx)(V.E, { variant: "text-md/medium", children: g.intl.string(g.t.I5kDqj) })
        : (0, p.jsx)(R.B, {
              direction: "horizontal",
              align: "center",
              justify: "end",
              gap: "md",
              children: (0, p.jsx)(px, {
                  text: t,
                  censor: ph,
                  revealLabel: g.intl.string(g.t.eY3xlT),
                  hideLabel: g.intl.string(g.t["jllbv+"]),
                  redesign: !0,
              }),
          });
}
let pf = (0, o.Tf)(u.X.ACCOUNT_INFO_PHONE_SETTING, {
    usePredicate: () => (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => g.intl.string(g.t.kerONq),
    useAriaLabel: function () {
        return null == (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.phone)
            ? g.intl.string(g.t["SfUuE+"])
            : g.intl.string(g.t.YDabSe);
    },
    useVariant: () => "secondary",
    useTrailingContent: () => ({ type: eN._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: pp }),
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
                      return (t) => (0, p.jsx)(e, { reason: Sf.d.USER_SETTINGS_UPDATE, ...t });
                  },
                  { modalKey: Sv.V },
              )
            : (0, _.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([i.e("25866"), i.e("63314")]).then(i.bind(i, 660740));
                  return (t) => (0, p.jsx)(e, { ...t });
              });
    },
});
function pN() {
    let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser());
    return null != e && !e.isClaimed();
}
function p_() {
    let e = (0, Eq.EC)(),
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
                    children: (0, p.jsx)(lb.E, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: w.A.colors.STATUS_WARNING.css,
                    }),
                }),
        ],
    });
}
let pC = (0, o.Tf)(u.X.ACCOUNT_INFO_USERNAME_SETTING, {
        useTitle: () => g.intl.string(g.t.qqhR3L),
        useTrailingContent: () => ({ type: eN._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: p_ }),
        useLabel: () => g.intl.string(g.t.bt75uw),
        useAriaLabel: () => g.intl.string(g.t.JECa91),
        useSubtitle: () => (pN() ? g.intl.string(g.t["7Ngnyr"]) : void 0),
        useVariant: () => "secondary",
        useDisabled: pN,
        onClick: function () {
            (0, _.openModalLazy)(async () => {
                let { default: e } = await Promise.all([i.e("38408"), i.e("20429"), i.e("43350")]).then(
                    i.bind(i, 667792),
                );
                return (t) => (0, p.jsx)(e, { ...t });
            });
        },
    }),
    pI = (0, o.zZ)(u.X.ACCOUNT_INFO_CATEGORY, {
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
                            button: { useText: () => g.intl.string(g.t.lm1UKt), onClick: () => (0, pi.S)(e) },
                        }
                  : {
                        type: eN.lT.INLINE_NOTICE,
                        noticeType: "critical",
                        useTitle: () => g.intl.string(g.t["/3qnL/"]),
                        useText: () => g.intl.string(g.t.qKs3vg),
                        button: { useText: () => g.intl.string(g.t["7psymi"]), onClick: () => pt() },
                    };
        },
        buildLayout: () => [pC, pA, pS, pf, pm, po, pu],
    }),
    pb = (0, o.Tf)(u.X.AUTHENTICATOR_APP_DISABLE_BUTTON, {
        useTitle: () => g.intl.string(g.t.lQsY7B),
        useSubtitle: () => Sb(!0),
        useDisabled: () => null !== Sb(!0),
        useLabel: () => g.intl.string(g.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => {
            let e = (0, O.bG)([cu.default], () => cu.default.hasTOTPEnabled()),
                t = SI() === SC.AVAILABLE;
            return e && t;
        },
        onClick: () =>
            void (0, se.A)({
                title: g.intl.string(g.t["D+aE7g"]),
                subtitle: g.intl.string(g.t.EA4ZEk),
                variant: "critical",
                confirmText: g.intl.string(g.t.N86XcP),
                onConfirm: () => T5.A.disable(),
            }),
    }),
    pv = (0, o.zZ)(u.X.AUTHENTICATOR_APP_CATEGORY, {
        useTitle: () => g.intl.string(g.t.RumMFo),
        useSubtitle: () => g.intl.string(g.t.iTbTo7),
        useHeaderDecoration: function () {
            let e = (0, O.bG)([cu.default], () => cu.default.hasTOTPEnabled()),
                t = SI() === SC.AVAILABLE;
            if (!e && t)
                return {
                    type: eN.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: eN.UV.BUTTON,
                            id: "mfa-setup-button",
                            text: g.intl.string(g.t.cTNUeD),
                            onClick: Sn.Ay.enableMFA,
                        },
                    ],
                };
        },
        useInlineNotice: function () {
            switch (SI()) {
                case SC.UNAVAILABLE_NO_CRYPTO:
                    return { type: eN.lT.INLINE_NOTICE, noticeType: "info", useText: () => g.intl.string(g.t.PhHhsj) };
                case SC.UNAVAILABLE_UNVERIFIED:
                    return {
                        type: eN.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        useText: () => g.intl.string(g.t.uggF7o),
                    };
                case SC.AVAILABLE:
                    return;
            }
        },
        collapseOnEmpty: !1,
        buildLayout: () => [pb],
    });
var pj = i(32880),
    py = i(663417);
function pO() {
    (0, _.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(i.bind(i, 662758));
        return (t) =>
            (0, p.jsx)(e, {
                ...t,
                handleSubmit: (e) =>
                    T5.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
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
var pR = i(203082);
function pL(e) {
    return `${e.slice(0, 4)}-${e.slice(4)}`;
}
async function pD() {
    let e = T8.A.getVerificationKey();
    try {
        await T5.A.confirmViewBackupCodes(e, !0);
    } catch (e) {
        (0, Ed.P0)({
            message: e.body?.message ?? g.intl.string(g.t.F8FvUy),
            type: Eg.Ck.FAILURE,
            id: "backup-code-regen-failed",
        });
    }
}
function pP(e) {
    let {
            code: { code: t, consumed: i },
        } = e,
        n = pL(t),
        s = f.useRef(null),
        l = (0, p.jsxs)(p.Fragment, {
            children: [(0, p.jsx)(Sg.P, { checked: i }), (0, p.jsx)(V.E, { variant: "text-md/normal", children: n })],
        });
    return cA.p5
        ? (0, p.jsx)(M.D, {
              tag: "li",
              className: ew()(pR.aY, pR.vk),
              innerRef: s,
              onKeyDown: (e) => {
                  "c" === e.key &&
                      (e.metaKey || e.ctrlKey) &&
                      (e.preventDefault(), e.stopPropagation(), (0, cA.C)(n), s?.current?.focus());
              },
              onClick: () => {
                  (0, cA.C)(n),
                      (0, Ed.P0)({ message: g.intl.string(g.t.mGZ66D), type: Eg.Ck.SUCCESS, id: "backup-code-copied" });
              },
              children: l,
          })
        : (0, p.jsx)("li", { className: pR.aY, children: l });
}
let pG = (0, o.zZ)(u.X.BACKUP_CODES_CATEGORY, {
        useTitle: () => g.intl.string(g.t.fC9qV0),
        useSubtitle: () =>
            (0, O.bG)([T8.A], () => T8.A.getBackupCodes().length > 0)
                ? g.intl.format(g.t.tp7zEK, {})
                : g.intl.string(g.t.LoOi4S),
        usePredicate: Sd,
        buildLayout: () => [pU],
    }),
    pU = (0, o.E2)(u.X.BACKUP_CODES_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t.fC9qV0)],
        Component: function () {
            let e = (0, O.bG)([T8.A], () => T8.A.getBackupCodes()),
                t = f.useMemo(
                    () =>
                        e
                            .map((e) => {
                                let { code: t, consumed: i } = e;
                                return `* ${pL(t)}` + (i ? ` (${g.intl.string(g.t["ycME+9"])})` : "");
                            })
                            .join("\r\n"),
                    [e],
                );
            return 0 === e.length
                ? (0, p.jsx)(eh.$, { text: g.intl.string(g.t.Jc2myK), size: "sm", variant: "secondary", onClick: pO })
                : (0, p.jsxs)(p.Fragment, {
                      children: [
                          (0, p.jsx)("ul", {
                              className: pR.E5,
                              children: e.map((e) => (0, p.jsx)(pP, { code: e }, e.code)),
                          }),
                          (0, p.jsxs)(aw.e, {
                              size: "sm",
                              children: [
                                  (0, p.jsx)(Se.A, {
                                      fileContents: t,
                                      contentType: "text/plain",
                                      fileName: "discord_backup_codes.txt",
                                      children: (0, p.jsx)(eh.$, {
                                          text: g.intl.string(g.t["OO+Nib"]),
                                          variant: "secondary",
                                          icon: pj.s,
                                      }),
                                  }),
                                  (0, p.jsx)(eh.$, {
                                      text: g.intl.string(g.t["3x962E"]),
                                      variant: "secondary",
                                      icon: py.f,
                                      onClick: pD,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
    }),
    pM = (0, o.Tf)(u.X.SMS_AUTH_DISABLE_BUTTON, {
        useTitle: () => g.intl.string(g.t.lQsY7B),
        useSubtitle: function () {
            let [e, t] = f.useState(!1),
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
                        handleSubmit: T5.A.disableSMS,
                        title: g.intl.string(g.t.KLWnit),
                        children: g.intl.string(g.t["W0/Duf"]),
                    });
            }),
    }),
    pV = (0, o.zZ)(u.X.SMS_AUTH_CATEGORY, {
        useTitle: () => g.intl.string(g.t.wuHuI5),
        useSubtitle: () => (0, O.bG)([t3.default], () => S_(t3.default.getCurrentUser(), !0)),
        useHeaderDecoration: () => {
            let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.hasFlag(q.nhx.MFA_SMS) ?? !1),
                t = (0, O.bG)([t3.default], () => null != S_(t3.default.getCurrentUser()));
            if (!e)
                return {
                    type: eN.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: eN.UV.BUTTON,
                            id: "sms-setup-button",
                            text: g.intl.string(g.t.Age7yU),
                            onClick: pk,
                            disabled: t,
                        },
                    ],
                };
        },
        collapseOnEmpty: !1,
        usePredicate: () => {
            let e = SI(),
                t = Sd(),
                i = (0, O.bG)([cu.default], () => cu.default.hasTOTPEnabled());
            return e === SC.AVAILABLE && t && i;
        },
        buildLayout: () => [pM],
    });
function pk() {
    let e = t3.default.getCurrentUser();
    if (null != e)
        if (null == e.phone) {
            var t;
            (t = { reason: Sf.d.USER_SETTINGS_UPDATE, onAddedPhone: T5.A.enableSMS }),
                (0, _.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.resolve().then(i.bind(i, 615715));
                        return (i) => (0, p.jsx)(e, { ...i, ...t });
                    },
                    { modalKey: Sv.V },
                );
        } else T5.A.enableSMS();
}
var pw = i(665671),
    pF = i(442433),
    pB = i(917136),
    pz = i(976910),
    pY = i(108666);
function pX(e) {
    let { credential: t } = e;
    return (0, p.jsxs)("li", {
        className: pY.e,
        children: [
            (0, p.jsxs)("div", {
                children: [
                    (0, p.jsx)(V.E, { variant: "text-md/normal", children: t.name }),
                    null != t.last_used &&
                        (0, p.jsx)(V.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: g.intl.format(g.t["7JgxF5"], { lastUsed: (0, SD.Y)(t.last_used) }),
                        }),
                ],
            }),
            (0, p.jsx)(lp.K, {
                icon: g0.j,
                variant: "icon-only",
                size: "sm",
                "aria-label": g.intl.string(g.t["+nrTbK"]),
                onClick: (e) => {
                    (0, pF.L3)(e, async () => {
                        let { default: e } = await i.e("32529").then(i.bind(i, 41e3));
                        return (i) => (0, p.jsx)(e, { credential: t, ...i });
                    });
                },
            }),
        ],
    });
}
let pH = (0, o.zZ)(u.X.SECURITY_KEYS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.IBq4Y3),
        useSubtitle: () => g.intl.string(g.t.yK9edS),
        useHeaderDecoration: function () {
            if (SI() === SC.AVAILABLE)
                return {
                    type: eN.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: eN.UV.BUTTON,
                            id: "add-security-key-button",
                            text: g.intl.string(g.t["Tzs/fw"]),
                            icon: r7.j,
                            onClick: pw.A,
                        },
                    ],
                };
        },
        useInlineNotice: () =>
            (function () {
                switch (SI()) {
                    case SC.UNAVAILABLE_NO_CRYPTO:
                        return {
                            type: eN.lT.INLINE_NOTICE,
                            noticeType: "info",
                            useText: () => g.intl.string(g.t.bWCGI9),
                        };
                    case SC.UNAVAILABLE_UNVERIFIED:
                        return {
                            type: eN.lT.INLINE_NOTICE,
                            noticeType: "warning",
                            useText: () => g.intl.string(g.t.uggF7o),
                        };
                    case SC.AVAILABLE:
                        return;
                }
            })(),
        buildLayout: () => [pK],
    }),
    pK = (0, o.E2)(u.X.SECURITY_KEYS_LIST, {
        useSearchTerms: () => [g.intl.string(g.t.y7SXYX)],
        Component: function () {
            let { credentials: e, hasFetchedCredentials: t } = (0, O.cf)([pz.A], () => ({
                hasFetchedCredentials: pz.A.hasFetchedCredentials(),
                credentials: pz.A.getCredentials(),
            }));
            return (f.useEffect(() => {
                t || pB.JQ();
            }, [t]),
            t)
                ? (0, p.jsx)(R.B, {
                      direction: "vertical",
                      gap: "sm",
                      as: "ul",
                      children: e.map((e) => (0, p.jsx)(pX, { credential: e }, e.id)),
                  })
                : (0, p.jsx)(u3.y, {});
        },
    }),
    pW = (0, o.t_)(u.X.MULTI_FACTOR_AUTHENTICATION, {
        useTitle: () => g.intl.string(g.t.m0FidJ),
        buildLayout: () => [pH, pv, pV, pG],
    }),
    pZ = (0, o.t0)(u.X.ACCOUNT_MFA_NESTED_PANEL, {
        useTrailingDecoration: () => ({
            type: eN.xn.TEXT,
            useText: () => (Sd() ? g.intl.string(g.t.lQsY7B) : g.intl.string(g.t.WsUuTt)),
        }),
        buildLayout: () => [pW],
    }),
    pq = (0, o.zZ)(u.X.ACCOUNT_PASSWORD_SECURITY_CATEGORY, {
        useTitle: () => g.intl.string(g.t["0iH2vc"]),
        buildLayout: () => [SS, pZ, S8],
    });
function pQ(e) {
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
                            className: Sm.PA,
                            children: g.intl.string(g.t.NAzplE),
                        }),
                        (0, p.jsx)(pi.A, { size: "sm", variant: "secondary" }),
                    ],
                })
        : (0, p.jsxs)(y.w, {
              type: "critical",
              children: [
                  (0, p.jsx)(eA.D, { variant: "heading-md/medium", children: g.intl.string(g.t["/3qnL/"]) }),
                  (0, p.jsx)(V.E, { variant: "text-sm/normal", className: Sm.PA, children: g.intl.string(g.t.qKs3vg) }),
                  (0, p.jsx)(eh.$, {
                      variant: "secondary",
                      size: "sm",
                      text: g.intl.string(g.t["7psymi"]),
                      onClick: () => pt(),
                  }),
              ],
          });
}
var pJ = i(297413),
    p$ = i(50268),
    p0 = i(922301),
    p1 = i(262),
    p2 = i(68085),
    p3 = i(915614),
    p6 = i(246839);
let p4 = st.Ay.getEnableHardwareAcceleration() ? iH.Js : iH.eu;
function p5(e) {
    let t = (0, ED.X)("UserSettingsAccountProfileCard");
    return f.useCallback(() => {
        t ? (0, EG.openUserProfileModal)({ userId: e }) : (0, ej.openUserSettings)(u.X.PROFILE_PANEL);
    }, [t, e]);
}
function p7(e) {
    let { className: t, user: n } = e,
        s = f.useRef(null),
        l = (0, Eq.EC)(),
        r = l?.nick?.[0] ?? null,
        [a, o] = f.useState(!1);
    f.useEffect(() => {
        o(null != s.current && s.current.scrollWidth > s.current.clientWidth);
    }, [n.username]);
    let u = !n.isClaimed(),
        d = u ? g.intl.string(g.t["7Ngnyr"]) : void 0;
    return (0, p.jsxs)("div", {
        className: ew()(p6.ZZ, t),
        children: [
            (0, p.jsx)("div", {
                className: p6.NQ,
                children: (0, p.jsxs)("div", {
                    className: p6.Fj,
                    children: [
                        (0, p.jsx)(V.E, {
                            variant: "text-md/medium",
                            className: p6.p9,
                            children: g.intl.string(g.t.qqhR3L),
                        }),
                        (0, p.jsxs)("div", {
                            className: p6.HR,
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
                    className: p6.a$,
                    children: (0, p.jsx)(e0.m, {
                        __unsupportedReactNodeAsText: r,
                        "aria-label": !1,
                        children: (0, p.jsx)(lb.E, {
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
                    className: p6.pr,
                    children: (0, p.jsx)(eh.$, {
                        variant: "secondary",
                        size: "sm",
                        text: a ? g.intl.string(g.t["16kTw/"]) : g.intl.string(g.t.bt75uw),
                        disabled: u,
                        "aria-label": g.intl.string(g.t.JECa91),
                        onClick: () =>
                            (0, _.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([i.e("38408"), i.e("20429"), i.e("43350")]).then(
                                    i.bind(i, 667792),
                                );
                                return (t) => (0, p.jsx)(e, { ...t });
                            }),
                    }),
                }),
            }),
        ],
    });
}
function p8(e) {
    let { user: t, className: i } = e,
        n = p5(t.id),
        s = (0, Eq.EC)(),
        l = s?.nick?.[0] ?? null,
        r = xU.Ay.getGlobalName(t),
        a = f.useRef(null),
        [o, u] = f.useState(!1);
    return (
        f.useEffect(() => {
            u(null != a.current && a.current.scrollWidth > a.current.clientWidth);
        }, [r]),
        (0, p.jsxs)("div", {
            className: ew()(p6.ZZ, i),
            children: [
                (0, p.jsx)("div", {
                    className: p6.NQ,
                    children: (0, p.jsxs)("div", {
                        className: p6.Fj,
                        children: [
                            (0, p.jsx)(V.E, {
                                variant: "text-md/medium",
                                className: p6.p9,
                                children: g.intl.string(g.t["9AjdkD"]),
                            }),
                            (0, p.jsx)("div", {
                                className: p6.HR,
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
                        className: p6.a$,
                        children: (0, p.jsx)(e0.m, {
                            __unsupportedReactNodeAsText: l,
                            "aria-label": !1,
                            children: (0, p.jsx)(lb.E, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                color: w.A.colors.STATUS_WARNING.css,
                            }),
                        }),
                    }),
                (0, p.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: p6.pr,
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
function p9(e) {
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
                        let { default: e } = await Promise.all([i.e("97570"), i.e("20577"), i.e("65861")]).then(
                            i.bind(i, 97060),
                        );
                        return (t) => (0, p.jsx)(e, { ...t });
                    }),
            };
        else {
            let { email: e } = s;
            t = {
                buttonText: g.intl.string(g.t.bt75uw),
                buttonAriaLabel: g.intl.string(g.t["8peUT0"]),
                valueMessage: (0, p.jsx)(px, {
                    text: e,
                    censor: pE,
                    revealLabel: g.intl.string(g.t["Zvx+yV"]),
                    hideLabel: g.intl.string(g.t.nqTD4d),
                }),
                handleClick: () =>
                    (0, _.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([i.e("97570"), i.e("20577"), i.e("65861")]).then(
                            i.bind(i, 97060),
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
            handleClick: () => pt(),
        };
    return (0, p.jsxs)("div", {
        className: ew()(p6.ZZ, n),
        children: [
            (0, p.jsx)("div", {
                className: p6.NQ,
                children: (0, p.jsxs)("div", {
                    children: [
                        (0, p.jsx)(V.E, {
                            variant: "text-md/medium",
                            className: p6.p9,
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
                className: p6.pr,
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
function fe(e) {
    let t,
        { className: n, user: s } = e;
    if (!s.isClaimed()) return null;
    let { phone: l, email: r } = s,
        a = null != l;
    return (
        (t = a
            ? (0, p.jsx)(px, {
                  text: l,
                  censor: ph,
                  revealLabel: g.intl.string(g.t.eY3xlT),
                  hideLabel: g.intl.string(g.t["jllbv+"]),
              })
            : g.intl.string(g.t.I5kDqj)),
        (0, p.jsxs)("div", {
            className: ew()(p6.ZZ, n),
            children: [
                (0, p.jsx)("div", {
                    className: p6.NQ,
                    children: (0, p.jsxs)("div", {
                        children: [
                            (0, p.jsx)(V.E, {
                                variant: "text-md/medium",
                                className: p6.p9,
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
                    className: p6.PU,
                    children: [
                        a && null != r
                            ? (0, p.jsx)("div", {
                                  className: ew()(p6.pr, p6.DT),
                                  children: (0, p.jsx)(F.Q, {
                                      textVariant: "text-sm/medium",
                                      variant: "secondary",
                                      text: g.intl.string(g.t.N86XcP),
                                      "aria-label": g.intl.string(g.t.Rpn4A3),
                                      onClick: function () {
                                          (0, _.openModal)((e) =>
                                              (0, p.jsx)(Si.default, {
                                                  ...e,
                                                  title: g.intl.string(g.t["3CTiKi"]),
                                                  children: s.hasFlag(q.nhx.MFA_SMS)
                                                      ? g.intl.string(g.t.jrhJyo)
                                                      : void 0,
                                                  actionText: g.intl.string(g.t.N86XcP),
                                                  handleSubmit: (e) => Sf.A.removePhone(e, Sf.d.USER_SETTINGS_UPDATE),
                                              }),
                                          );
                                      },
                                  }),
                              })
                            : null,
                        (0, p.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: p6.pr,
                            children: (0, p.jsx)(eh.$, {
                                variant: "secondary",
                                size: "sm",
                                text: a ? g.intl.string(g.t.bt75uw) : g.intl.string(g.t.OYkgVk),
                                "aria-label": a ? g.intl.string(g.t.YDabSe) : g.intl.string(g.t["SfUuE+"]),
                                onClick: function () {
                                    (0, _.openModalLazy)(
                                        async () => {
                                            let { default: e } = await Promise.resolve().then(i.bind(i, 615715));
                                            return (t) => (0, p.jsx)(e, { reason: Sf.d.USER_SETTINGS_UPDATE, ...t });
                                        },
                                        { modalKey: Sv.V },
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
function ft(e) {
    let { user: t } = e,
        i = (0, p$.A)({ id: t.id, label: g.intl.string(g.t["/AXYnE"]) }),
        n = c.Q_.useSetting(),
        s = f.useRef(null);
    return n && cA.p5
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
                      className: p6.SI,
                      "aria-label": g.intl.formatToPlainString(g.t.xZtncm, { username: t.username }),
                      children: (0, p.jsx)(g0.j, { size: "md", color: "currentColor", className: p6.D$ }),
                  }),
          })
        : null;
}
function fi(e) {
    let { className: t } = e,
        n = (0, pn.b8)(),
        s = (0, pn.yM)(),
        l = (0, pn.Y2)(),
        r = !n || s,
        a = g.intl.string(g.t["9KiIz6"]),
        o = g.intl.string(g.t.DVywUB),
        u = g.intl.string(g.t.lKDPGA),
        d = f.useCallback(() => {
            window.open(ta.A.getArticleURL(q.MVz.TIGGER_PAWTECT_LEARN_MORE), "_blank");
        }, []),
        c = f.useCallback(() => {
            (0, _.openModalLazy)(async () => {
                let { default: e } = await i.e("45361").then(i.bind(i, 151080));
                return (t) => (0, p.jsx)(e, { ...t });
            });
        }, []),
        m = f.useMemo(
            () =>
                n
                    ? s
                        ? g.intl.string(g.t.sK0dmH)
                        : l
                          ? g.intl.format(pr.default.WM5adV, { handleOnHelpUrlHook: d })
                          : g.intl.string(g.t.XxRj7f)
                    : u,
            [n, s, l, u, d],
        ),
        A = n && !s && l;
    return (0, p.jsxs)("div", {
        className: ew()(p6.ZZ, t),
        children: [
            (0, p.jsx)("div", {
                className: p6.NQ,
                children: (0, p.jsxs)("div", {
                    children: [
                        (0, p.jsx)(V.E, {
                            variant: "text-md/medium",
                            className: p6.p9,
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
                    className: p6.pr,
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
                    className: p6.pr,
                    children: (0, p.jsx)(eh.$, {
                        variant: "secondary",
                        size: "sm",
                        text: s ? a : o,
                        "aria-label": s ? a : o,
                        onClick: () => pd.A.showAgeVerificationGetStartedModal({ entryPoint: pc.q1.ACCOUNT_AGE_GROUP }),
                    }),
                }),
        ],
    });
}
function fn(e) {
    let { currentUser: t } = e,
        i = p5(t.id),
        n = (0, xI.Ay)(t.id),
        s = (0, p1.A)(n),
        l = c.jP.useSetting(),
        r = (0, O.bG)([EL.A], () => EL.A.getErrors()),
        a = r?.avatar?.[0],
        { avatarSrc: o, avatarDecorationSrc: u } = (0, EP.A)({ userId: t?.id, size: iK._3.SIZE_80 }),
        d = (0, ps.fk)();
    return (0, p.jsxs)("div", {
        className: p6.DM,
        children: [
            (0, p.jsx)(p3.o, {
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
                className: p6.eF,
                children: [
                    (0, p.jsx)(p4, {
                        className: p6.my,
                        src: o,
                        avatarDecoration: u,
                        status: l,
                        size: iK._3.SIZE_80,
                        "aria-label": t.username,
                    }),
                    (0, p.jsxs)("div", {
                        children: [
                            (0, p.jsxs)("div", {
                                className: p6.Ib,
                                children: [
                                    (0, p.jsx)(pJ.A, {
                                        user: t,
                                        className: p6.a1,
                                        discriminatorClass: p6.D2,
                                        displayNameStylesType: p0.G.STATIC,
                                    }),
                                    (0, p.jsx)(ft, { user: t }),
                                ],
                            }),
                            (0, p.jsx)(p2.A, { badges: s, className: p6.C_, badgeClassName: p6.qS }),
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
                className: p6.Tp,
                children: [
                    null != a
                        ? (0, p.jsx)(V.E, {
                              className: p6.mx,
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              children: a,
                          })
                        : null,
                    (0, p.jsxs)("div", {
                        className: p6.FL,
                        children: [
                            (0, p.jsx)(p8, { className: p6.mS, user: t }),
                            (0, p.jsx)(p7, { user: t }),
                            (0, p.jsx)(p9, { className: p6.Zr, user: t }),
                            (0, p.jsx)(fe, { className: p6.Zr, user: t }),
                            d && (0, p.jsx)(fi, { className: p6.Zr }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
let fs = (0, o.E2)(u.X.ACCOUNT_PROFILE_SETTING, {
        useSearchTerms: function () {
            let e = [
                    g.intl.string(g.t.LYju5J),
                    g.intl.string(g.t["9AjdkD"]),
                    g.intl.string(g.t["+JkHPw"]),
                    g.intl.string(g.t.oP5zGA),
                    g.intl.string(g.t.Ulqq6K),
                ],
                t = (0, ps.fk)(),
                i = (0, pn.Y2)();
            return (
                t &&
                    (e.push(g.intl.string(g.t["/52UYy"])),
                    e.push(g.intl.string(g.t.sK0dmH)),
                    e.push(g.intl.string(g.t.XxRj7f)),
                    e.push(g.intl.string(g.t.DVywUB)),
                    e.push(g.intl.string(g.t["9KiIz6"])),
                    i &&
                        (e.push(g.intl.string(pr.default.FTawSP)),
                        e.push(g.intl.string(pr.default["bD//cU"])),
                        e.push(g.intl.string(pr.default.SH6Tcv)))),
                e
            );
        },
        Component: function () {
            let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser());
            return (0, p.jsxs)(R.B, {
                gap: "md",
                children: [
                    null != e && (0, p.jsx)(pQ, { currentUser: e }),
                    null != e && (0, p.jsx)(fn, { currentUser: e }),
                ],
            });
        },
    }),
    fl = (0, o.zZ)(u.X.ACCOUNT_PROFILE_CATEGORY, { buildLayout: () => [fs] });
var fr = i(522369);
function fa(e) {
    let { currentUser: t, disabled: i, handleDisableAccount: n, handleDeleteAccount: s } = e,
        l = t.isClaimed();
    return (0, p.jsx)(sy.D, {
        label: g.intl.string(g.t.ZKsIks),
        description: l ? g.intl.string(g.t.TIh3Yj) : g.intl.string(g.t.czsGA8),
        children: (0, p.jsxs)(aw.e, {
            size: "sm",
            className: fr.U,
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
var fo = i(425587);
function fu(e) {
    if (e.body.code === q.t02.INVALID_PASSWORD) throw e;
    (0, aM.A)({ title: g.intl.string(g.t.LX0nT8), subtitle: e.body.message });
}
async function fd() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = t3.default.getCurrentUser();
    if (null == t) return;
    let i = [];
    try {
        i = (await fo.A.fetchTeams(!0)).body;
    } catch {}
    i.filter((e) => e.owner_user_id === t.id).length > 0
        ? (0, aM.A)({
              title: g.intl.string(g.t["Y++oNe"]),
              subtitle: g.intl.format(g.t.alpAUm, { devPortalLink: "https://discord.com/developers/teams" }),
          })
        : H.A.getGuildsArray().filter((e) => e.ownerId === t.id).length > 0
          ? (0, aM.A)({ title: g.intl.string(g.t.vJiTOL), subtitle: g.intl.string(g.t.UyVVan) })
          : t.isClaimed()
            ? (0, _.openModal)((t) =>
                  (0, p.jsx)(Si.default, {
                      ...t,
                      handleSubmit: (t) => (0, EO.U_)(t, e).then(q.tEg, fu),
                      title: e ? g.intl.string(g.t.xca2ts) : g.intl.string(g.t.goXv9g),
                      actionText: e ? g.intl.string(g.t["8lQ2rR"]) : g.intl.string(g.t.jf5GGb),
                      variant: "critical-primary",
                      children: e ? g.intl.string(g.t.FB4H1D) : g.intl.string(g.t.gk7h32),
                  }),
              )
            : (0, se.A)({
                  title: g.intl.string(g.t.xca2ts),
                  subtitle: g.intl.string(g.t.FB4H1D),
                  confirmText: g.intl.string(g.t["8lQ2rR"]),
                  onConfirm: () => (0, EO.U_)("", !0),
              });
}
let fc = (0, o.Tf)(u.X.ACCOUNT_DELETE_SETTING, {
        useTitle: () => g.intl.string(g.t["gIpzR+"]),
        useSubtitle: () => g.intl.string(g.t.Bd6dOf),
        useLabel: () => g.intl.string(g.t["8lQ2rR"]),
        useVariant: () => "critical-primary",
        onClick: () => fd(!0),
    }),
    fg = (0, o.Tf)(u.X.ACCOUNT_DISABLE_SETTING, {
        useTitle: () => g.intl.string(g.t["p/Tjtp"]),
        useSubtitle: () => g.intl.string(g.t.YvDmKb),
        useLabel: () => g.intl.string(g.t.jf5GGb),
        useVariant: () => "critical-secondary",
        onClick: () => fd(!1),
        usePredicate: () => {
            let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser());
            return e?.isClaimed() ?? !1;
        },
    }),
    fm = (0, o.zZ)(u.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [fg, fc] }),
    fA = (0, o.E2)(u.X.ACCOUNT_REMOVAL_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t.ZKsIks), g.intl.string(g.t.jf5GGb), g.intl.string(g.t["8lQ2rR"])],
        Component: function () {
            let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser());
            return null == e
                ? null
                : (0, p.jsx)(fa, {
                      currentUser: e,
                      handleDisableAccount: () => fd(!1),
                      handleDeleteAccount: () => fd(!0),
                  });
        },
    }),
    fh = (0, o.zZ)(u.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [fA] });
var fE = i(308645),
    fx = i(271995),
    fT = i(855267);
let fS = (0, o.E2)(u.X.ACCOUNT_STANDING_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t["16r9jm"])],
        Component: fT.A,
    }),
    fp = (0, o.zZ)(u.X.ACCOUNT_STANDING_NESTED_CATEGORY, { buildLayout: () => [fS] }),
    ff = (0, o.t_)(u.X.ACCOUNT_STANDING_PANEL, {
        useTitle: () => g.intl.string(g.t["16r9jm"]),
        buildLayout: () => [fp],
    }),
    fN = (0, o.t0)(u.X.ACCOUNT_STANDING_NESTED_PANEL, {
        useTitle: fx.$b,
        useSubtitle: fx.bh,
        useLeadingDecoration: function () {
            let { color: e, backgroundColor: t, Icon: i } = (0, fx._k)();
            return { type: eN.Xy.ICON, icon: i, color: e, backgroundColor: t };
        },
        initialize: () => {
            fE.Yn();
        },
        buildLayout: () => [ff],
    }),
    f_ = (0, o.zZ)(u.X.ACCOUNT_STANDING_CATEGORY, {
        useTitle: () => g.intl.string(g.t["16r9jm"]),
        buildLayout: () => [fN],
    }),
    fC = (0, o.zZ)(u.X.ACCOUNT_STANDING_CATEGORY, { buildLayout: () => [fS] });
var fI = i(834981),
    fb = i(840387),
    fv = i(177953),
    fj = i(986922),
    fy = i(602339);
let fO = (0, o.E2)(u.X.FAMILY_CENTER_SETTING, {
        Component: fj.p,
        useSearchTerms: () => [
            g.intl.string(fy.default.RZqaJn),
            g.intl.string(fy.default.bdBmqy),
            g.intl.string(fy.default["gVWG+6"]),
            g.intl.string(fy.default.ahKIJO),
            g.intl.string(fy.default["8SLtqb"]),
        ],
    }),
    fR = (0, o.zZ)(u.X.FAMILY_CENTER_CATEGORY, { buildLayout: () => [fO] });
function fL() {
    return f.useMemo(() => ({ badgeType: eN.Xi.COUNT, useCount: fI.VT }), []);
}
let fD = (0, o.t_)(u.X.FAMILY_CENTER_PANEL, {
        useTitle: () => g.intl.string(fy.default.RZqaJn),
        buildLayout: () => [fR],
    }),
    fP = (0, o.i4)(u.X.FAMILY_CENTER_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(fy.default.RZqaJn),
        icon: fv.n,
        usePersistentBadge: fL,
        buildLayout: () => [fD],
    }),
    fG = (0, o.zZ)(u.X.ACCOUNT_FAMILY_CENTER_CATEGORY, {
        useTitle: () => g.intl.string(fy.default.RZqaJn),
        usePersistentBadge: fL,
        buildLayout: () => [fU],
    }),
    fU = (0, o.t0)(u.X.ACCOUNT_FAMILY_CENTER_NESTED_PANEL, {
        useTitle: () => ((0, fI.Li)() ? g.intl.string(fy.default.IcMQUP) : g.intl.string(fy.default["n8wrn/"])),
        useSubtitle: () => {
            let e = (0, fb.Z)(),
                t = (0, fI.Li)();
            return e
                ? t
                    ? g.intl.string(fy.default.G8lHFU)
                    : g.intl.string(fy.default.uOLNEZ)
                : g.intl.string(fy.default.Z53oSM);
        },
        buildLayout: () => [fD],
    });
var fM = (((a = {}).SECURITY = "SECURITY"), (a.STANDING = "STANDING"), a);
let fV = (0, o.dT)(u.X.ACCOUNT_STANDING_TAB, {
        getTitle: () => g.intl.string(g.t["Vov/9o"]),
        onItemSelect: () => {
            Y.default.track(q.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, { target_tab_name: fM.STANDING });
        },
        buildLayout: () => [fC],
    }),
    fk = (0, o.dT)(u.X.ACCOUNT_SECURITY_TAB, {
        getTitle: () => g.intl.string(g.t.Am9YHi),
        onItemSelect: () => {
            Y.default.track(q.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, { target_tab_name: fM.SECURITY });
        },
        buildLayout: () => [fl, S9, fh],
    });
function fw() {
    let e = t3.default.getCurrentUser();
    return (
        null == e || (0, iz.pC)("Account") || (0, xW.A)(e.id, e.getAvatarURL(void 0, 80)),
        () => {
            T5.A.clearBackupCodes(), (0, EO.Uo)();
        }
    );
}
let fF = (0, o.t_)(u.X.ACCOUNT_PANEL, {
        useTitle: () => g.intl.string(g.t["JAIM/m"]),
        initialize: fw,
        useObscuredNotice: u0.L,
        buildLayout: () => [fk, fV],
    }),
    fB = (0, o.t_)(u.X.ACCOUNT_PANEL, {
        useTitle: () => g.intl.string(g.t["ldCE/p"]),
        initialize: fw,
        useObscuredNotice: u0.L,
        buildLayout: () => [pI, pq, f_, fG, fm],
    }),
    fz = (0, o.i4)(u.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => ((0, iz.pC)("Account") ? g.intl.string(g.t["ldCE/p"]) : g.intl.string(g.t["JAIM/m"])),
        icon: Ac.n,
        buildLayout: () => ((0, iz.pC)("Account") ? [fB] : [fF]),
    });
var fY = i(323384),
    fX = i(824552),
    fH = i(96076);
let fK = (0, o.E2)(u.X.AUTHORIZED_APPS_LIST_SETTING, {
        Component: fH.Ay,
        useSearchTerms: () => [g.intl.string(g.t["f6kk+r"])],
    }),
    fW = (0, o.zZ)(u.X.AUTHORIZED_APPS_CATEGORY, {
        buildLayout: () => [fK],
        initialize: () => (
            fX.A.fetch(),
            () => {
                fH.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    fZ = (0, o.t_)(u.X.AUTHORIZED_APPS_PANEL, {
        useTitle: () => g.intl.string(g.t["f6kk+r"]),
        useObscuredNotice: u0.L,
        buildLayout: () => [fW],
    }),
    fq = (0, o.i4)(u.X.AUTHORIZED_APPS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["f6kk+r"]),
        icon: fY.k,
        buildLayout: () => [fZ],
    });
var fQ = i(176781),
    fJ = i(611371);
let f$ = () =>
    (0, p.jsx)(e0.m, { asContainer: !0, text: g.intl.string(g.t["/fgfWh"]), children: (0, p.jsx)(fJ.A, {}) });
var f0 = i(274372),
    f1 = i(607814),
    f2 = i(696016);
let f3 = (() => {
        let e = [f2.wN];
        for (let t = 10; t <= f2.qh; t += 10) e.push(t);
        return e[e.length - 1] !== f2.qh && e.push(f2.qh), e;
    })(),
    f6 = (0, o.sN)(u.X.CLIPS_AUTO_CLIP_STORAGE_LIMIT, {
        useTitle: () => g.intl.string(g.t.yfsrDI),
        useSubtitle: () => g.intl.string(g.t.vlDHdC),
        minValue: f2.wN,
        maxValue: f2.qh,
        getInitialValue: () => f0.A.getSettings().maxAutoClips,
        onValueRender: (e) => `${Math.floor(e)}`,
        asValueChanges: (e) => f1.e6(Math.floor(e)),
        markers: f3,
        onMarkerRender: (e) => `${Math.floor(e)}`,
    }),
    f4 = (0, o.zD)(u.X.CLIPS_ENABLE_GAME_SIGNALS, {
        useTitle: () => g.intl.string(g.t.iV6KcI),
        useSubtitle: () => g.intl.string(g.t["dJ2tX+"]),
        useValue: () => (0, O.bG)([f0.A], () => f0.A.getSettings().clipSignals.enableGameSignals),
        setValue: (e) => {
            let t = f0.A.getSettings().clipSignals;
            f1.PW({ ...t, enableGameSignals: e });
        },
    }),
    f5 = (0, o.zD)(u.X.CLIPS_ENABLE_PHRASE_SIGNALS, {
        useTitle: () => g.intl.string(g.t.nHsilt),
        useSubtitle: () => g.intl.string(g.t["s6wq+m"]),
        useValue: () => (0, O.bG)([f0.A], () => f0.A.getSettings().clipSignals.enablePhraseSignals),
        setValue: (e) => {
            let t = f0.A.getSettings().clipSignals;
            f1.PW({ ...t, enablePhraseSignals: e });
        },
    }),
    f7 = (0, o.E2)(u.X.CLIPS_PHRASES, {
        useSearchTerms: () => [g.intl.string(g.t.JIze0o)],
        usePredicate: () => (0, O.bG)([f0.A], () => f0.A.getSettings().clipSignals).enablePhraseSignals,
        Component: function () {
            let e = (0, O.bG)([f0.A], () => f0.A.getSettings().autoClipPhrases),
                [t, i] = f.useState(""),
                n = f.useMemo(() => e.map((e) => ({ id: e, label: e })), [e]),
                s = f.useCallback((e) => {
                    i(e);
                }, []),
                l = f.useCallback(
                    (n) => {
                        if ("Enter" === n.key || "," === n.key) {
                            n.preventDefault();
                            let s = t.trim().toLowerCase();
                            s.length > 0 && !e.includes(s) && (f1.pM([...e, s]), i(""));
                        } else if ("Backspace" === n.key && "" === t && e.length > 0) {
                            let t = e.slice(0, -1);
                            f1.pM(t);
                        }
                    },
                    [t, e],
                ),
                r = f.useCallback(
                    (t) => {
                        let i = Array.from(t)[0],
                            n = e.filter((e) => e !== i);
                        f1.pM(n);
                    },
                    [e],
                );
            return (0, p.jsx)(lD.k, {
                value: t,
                onChange: s,
                onKeyDown: l,
                placeholder: g.intl.string(g.t.zYUZpt),
                leading: n.length > 0 ? { type: "tags", items: n, onRemove: r } : void 0,
            });
        },
    }),
    f8 = (0, o.zZ)(u.X.CLIPS_AUTOMATIC_CLIPPING_CATEGORY, {
        useTitle: () => g.intl.string(g.t.sA0WKL),
        usePredicate: () => {
            let { enableAdvancedSignals: e } = lJ.L_.useConfig({ location: "ClipsAutomaticClippingCategory" });
            return e;
        },
        buildLayout: () => [f6, f4, f5, f7],
    });
var f9 = i(150616),
    Ne = i(16590);
let Nt = (0, o.Tf)(u.X.CLIPS_CLEAR_REMINDER_SNOOZE, {
    useTitle: () => g.intl.string(Ne.default.S0H8in),
    useSubtitle: () =>
        (0, O.bG)([f0.A], () => {
            let { remindersDismissedUntil: e } = f0.A.getUserAgnosticState();
            if (null == e || Date.now() >= e) return g.intl.string(Ne.default.I8u5xw);
            let t = new Date(e).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
            return g.intl.formatToPlainString(Ne.default.iJ0azr, { time: t });
        }),
    useLabel: () => g.intl.string(Ne.default.QtW1Nc),
    useVariant: () => "secondary",
    usePredicate: () => f9.Z.useConfig({ location: "ClearReminderSnooze" }).enableReminderSidebar,
    useDisabled: () =>
        (0, O.bG)([f0.A], () => {
            let { remindersDismissedUntil: e } = f0.A.getUserAgnosticState();
            return null == e || Date.now() >= e;
        }),
    onClick: f1.Cr,
});
var Ni = i(753070);
let Nn = (0, o.Hn)(u.X.CLIPS_FRAME_RATE, {
    useTitle: () => g.intl.string(g.t["2wScL1"]),
    useSubtitle: () => g.intl.string(g.t["Rf9+fy"]),
    useValue: () => (0, O.bG)([f0.A], () => f0.A.getSettings().clipsQuality.frameRate),
    setValue: (e) => {
        let { clipsQuality: t } = f0.A.getSettings();
        f1.GS({ resolution: t.resolution, frameRate: e });
    },
    useOptions: () => [
        { id: "15", value: Ni.kn.FPS_15, label: g.intl.formatToPlainString(g.t.Qb44XH, { fps: Ni.kn.FPS_15 }) },
        { id: "30", value: Ni.kn.FPS_30, label: g.intl.formatToPlainString(g.t.Qb44XH, { fps: Ni.kn.FPS_30 }) },
        { id: "60", value: Ni.kn.FPS_60, label: g.intl.formatToPlainString(g.t.Qb44XH, { fps: Ni.kn.FPS_60 }) },
    ],
});
var Ns = i(372684);
let Nl = (0, o.E2)(u.X.CLIPS_HARDWARE_CLASSIFICATION_WARNING, {
    useSearchTerms: () => [g.intl.string(g.t.SIxrIF)],
    usePredicate: () => (0, O.bG)([f0.A], () => f0.A.getHardwareClassification()) === Ns.k9.BELOW_MINIMUM,
    Component: () => (0, p.jsx)(si.A, { look: si.k.WARNING, children: g.intl.string(g.t.SIxrIF) }),
});
var Nr = i(158278);
let Na = (0, o.E2)(u.X.CLIPS_KEYBIND, {
        useSearchTerms: () => [g.intl.string(g.t.pf54EU), g.intl.string(g.t["QyB/jK"])],
        Component: () => {
            let e = (0, O.bG)([eC.Ay], () => eC.Ay.getKeybindForAction(q.hCu.SAVE_CLIP, !0));
            ty()(null != e, "Save clip keybind unset");
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
                    className: Nr.g,
                    children: (0, p.jsx)(tR.A, { defaultValue: e.shortcut, onChange: t }),
                }),
            });
        },
    }),
    No = (0, o.Hn)(u.X.CLIPS_LENGTH, {
        useTitle: () => g.intl.string(g.t.OgfUio),
        useSubtitle: () => g.intl.string(g.t.H7j4tY),
        useValue: () => (0, O.bG)([f0.A], () => f0.A.getSettings().clipsLength),
        setValue: (e) => f1.h$(e),
        useOptions: () => [
            { id: "30s", value: f2.LX.SECONDS_30, label: g.intl.formatToPlainString(g.t["bTFv/3"], { count: 30 }) },
            { id: "1m", value: f2.LX.MINUTES_1, label: g.intl.formatToPlainString(g.t.ICo9Nk, { count: 1 }) },
            { id: "2m", value: f2.LX.MINUTES_2, label: g.intl.formatToPlainString(g.t.ICo9Nk, { count: 2 }) },
        ],
    }),
    Nu = (0, o.E2)(u.X.CLIPS_QUALITY_INFOBOX, {
        useSearchTerms: () => [g.intl.string(g.t["Z+MfqT"])],
        Component: () => (0, p.jsx)(si.A, { look: si.k.INFO, children: g.intl.string(g.t["Z+MfqT"]) }),
    }),
    Nd = (0, o.Hn)(u.X.CLIPS_RESOLUTION, {
        useTitle: () => g.intl.string(g.t.aFudZJ),
        useSubtitle: () => g.intl.string(g.t.nIrkW5),
        useValue: () => (0, O.bG)([f0.A], () => f0.A.getSettings().clipsQuality.resolution),
        setValue: (e) => {
            let { clipsQuality: t } = f0.A.getSettings();
            f1.GS({ resolution: e, frameRate: t.frameRate });
        },
        useOptions: () => [
            {
                id: "480p",
                value: Ni.on.RESOLUTION_480,
                label: g.intl.formatToPlainString(g.t.TEOC0I, { resolution: Ni.on.RESOLUTION_480 }),
            },
            {
                id: "720p",
                value: Ni.on.RESOLUTION_720,
                label: g.intl.formatToPlainString(g.t.TEOC0I, { resolution: Ni.on.RESOLUTION_720 }),
            },
            {
                id: "1080p",
                value: Ni.on.RESOLUTION_1080,
                label: g.intl.formatToPlainString(g.t.TEOC0I, { resolution: Ni.on.RESOLUTION_1080 }),
            },
            {
                id: "1440p",
                value: Ni.on.RESOLUTION_1440,
                label: g.intl.formatToPlainString(g.t.TEOC0I, { resolution: Ni.on.RESOLUTION_1440 }),
            },
            { id: "source", value: Ni.on.RESOLUTION_SOURCE, label: g.intl.string(g.t.XjXqzh) },
        ],
    }),
    Nc = (0, o.E2)(u.X.CLIPS_SCREENSHOT_KEYBIND, {
        useSearchTerms: () => [g.intl.string(g.t["0U/hj7"]), g.intl.string(g.t["5zxkdo"])],
        usePredicate: lJ.BW,
        Component: () => {
            let e = (0, O.bG)([eC.Ay], () => eC.Ay.getKeybindForAction(q.hCu.SAVE_CLIP, !0)),
                t = (0, O.bG)([eC.Ay], () => eC.Ay.getKeybindForAction(q.hCu.SAVE_SCREENSHOT, !0));
            ty()(null != e, "Save clip keybind unset"), ty()(null != t, "Save screenshot keybind unset");
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
                    className: Nr.g,
                    children: (0, p.jsx)(tR.A, { defaultValue: t.shortcut, onChange: i }),
                }),
            });
        },
    }),
    Ng = (0, o.E2)(u.X.CLIPS_STORAGE_LOCATION, {
        useSearchTerms: () => [g.intl.string(g.t.s4773E), g.intl.string(g.t.svjwGh)],
        Component: () => {
            let e = (0, O.bG)([f0.A], () => f0.A.getSettings().storageLocation),
                t = f.useRef(!1),
                i = async () => {
                    if (!t.current) {
                        t.current = !0;
                        try {
                            let e = await s2.A.fileManager.showOpenDialog({
                                properties: ["openDirectory", "createDirectory"],
                            });
                            e.length > 0 && f1.HU(e[0]);
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
                    children: (0, p.jsx)(lD.k, { tabIndex: -1, value: e, editable: !1, "aria-hidden": !0 }),
                }),
            });
        },
    });
var Nm = i(572164);
let NA = (0, o.zD)(u.X.CLIPS_ENABLE, {
    useTitle: () => g.intl.string(g.t.h8rgrK),
    useSubtitle: () => g.intl.string(g.t["4Qw3NO"]),
    useValue: () => (0, Nm.Et)(),
    setValue: (e) => f1.yO({ clipsEnabled: e, trackAnalytics: !0 }),
});
var Nh = i(915618);
let NE = (0, o.zD)(u.X.CLIPS_ENABLE_DECOUPLED_CLIPPING, {
        useTitle: () => g.intl.string(g.t.yXvykv),
        useSubtitle: () => g.intl.string(g.t.YP3ujk),
        useValue: Nm.XT,
        setValue: (e) => f1.fd({ enabled: e, trackAnalytics: !0 }),
        usePredicate: () => {
            let e = (0, ev.isWindows)(),
                t = (0, Nh.A)(lv.Ay);
            return e && t;
        },
    }),
    Nx = (0, o.zD)(u.X.CLIPS_ENABLE_REMINDERS, {
        useTitle: () => g.intl.string(g.t["3zwNf6"]),
        useSubtitle: () => g.intl.string(g.t.m4Cjj9),
        useValue: () => (0, O.bG)([f0.A], () => f0.A.getSettings().remindersEnabled),
        setValue: (e) => f1.Mt(e),
    }),
    NT = (0, o.zZ)(u.X.CLIPS_RECORDING_CATEGORY, {
        useTitle: () => g.intl.string(g.t.iIwmV5),
        buildLayout: () => [Nu, Nl, NA, NE, Nx, Nt, No, Nd, Nn, Na, Nc, Ng],
    }),
    NS = (0, o.t_)(u.X.CLIPS_PANEL, {
        useTitle: () => g.intl.string(g.t.z2jK6X),
        usePersistentBadge: () => ({
            badgeType: eN.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            useCustomBadge: () => (0, p.jsx)(f$, {}),
        }),
        usePredicate: lJ.sw,
        buildLayout: () => [NT, f8],
    }),
    Np = (0, o.i4)(u.X.CLIPS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.z2jK6X),
        icon: fQ.x,
        buildLayout: () => [NS],
    });
var Nf = i(187322),
    NN = i(77468),
    N_ = i(289498),
    NC = i(573648),
    NI = i(941314),
    Nb = i(874490),
    Nv = i(370480),
    Nj = i(968309);
let Ny = new Set([q.fg2.XBOX, q.fg2.PLAYSTATION, q.fg2.PLAYSTATION_STAGING, q.fg2.CRUNCHYROLL]);
var NO = i(169869),
    NR = i(968671),
    NL = i(30370),
    ND = i(674567),
    NP = i(237146),
    NG = i(594387),
    NU = i(34934);
function NM() {
    let e,
        t,
        n,
        s,
        { variant: l, showFooter: r } =
            ((e = (0, ND.V)()),
            (t = (0, NR.useIsCrepeEnabled)("connectedAccountsBannerFooter")),
            (s = null != (n = (0, O.bG)([NL.A], () => NL.A.getAccount(null, q.fg2.XBOX))) && !n.revoked),
            e === ND.s.NONE || e === ND.s.FREE_FRACTIONAL_NITRO || (e === ND.s.NON_NITRO && 0)
                ? { variant: ND.s.NONE, showFooter: !1 }
                : { variant: e, showFooter: t && e === ND.s.NON_NITRO && !s }),
        { analyticsLocations: a } = (0, nU.Ay)(eM.A.XBOX_CONNECTED_ACCOUNTS_BANNER);
    if (l === ND.s.NONE) return null;
    let o = "",
        u = null;
    return (
        l === ND.s.NITRO
            ? ((o = g.intl.string(NP.default["+QAvQz"])),
              (u = (0, p.jsx)(eh.$, {
                  variant: "secondary",
                  size: "sm",
                  text: g.intl.string(NP.default.CubeLC),
                  onClick: () => {
                      (0, _.openModalLazy)(async () => {
                          let { default: e } = await Promise.all([i.e("16848"), i.e("77632")]).then(i.bind(i, 836291));
                          return (t) => (0, p.jsx)(e, { ...t, sourceAnalyticsLocations: a });
                      });
                  },
              })))
            : (l === ND.s.NON_NITRO || l === ND.s.FREE_FRACTIONAL_NITRO) &&
              ((o = g.intl.string(NP.default.NwkRTZ)),
              (u = (0, p.jsx)(sh.A, {
                  fullWidth: !0,
                  defaultTextOverride: g.intl.string(NP.default["0vY+ie"]),
                  variantOverride: "overlay-primary",
                  size: "sm",
                  subscriptionTier: sf.pe.TIER_2,
              }))),
        (0, p.jsxs)(nU.f5, {
            value: a,
            children: [
                (0, p.jsxs)("div", {
                    className: NU.bV,
                    children: [
                        (0, p.jsx)(eA.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: g.intl.string(g.t.NG1e6l),
                        }),
                        (0, p.jsx)(oK.t, { size: "xs", color: "var(--icon-default)" }),
                    ],
                }),
                (0, p.jsx)(tQ.N, {
                    theme: "dark",
                    children: (e) =>
                        (0, p.jsx)("div", {
                            className: e,
                            children: (0, p.jsxs)("div", {
                                className: NU.Nr,
                                style: {
                                    backgroundImage:
                                        "url(https://cdn.discordapp.com/assets/content/6f39ba0aa00a9877bcb4bc67862335d29c21749762ec29fd0248ba734bc2c4b8.png)",
                                },
                                children: [
                                    (0, p.jsx)("div", { className: NU.$h }),
                                    (0, p.jsx)("div", { className: NU.Lw }),
                                    (0, p.jsxs)("div", {
                                        className: NU.Qs,
                                        children: [
                                            (0, p.jsx)("img", {
                                                className: NU.wm,
                                                src: "https://cdn.discordapp.com/assets/content/f3a967ffa662e944346571ea7f2b30b2e40745e2edca294519fbddf971e81fb1.png",
                                                alt: "Xbox Game Pass",
                                            }),
                                            (0, p.jsx)(V.E, {
                                                variant: "text-sm/semibold",
                                                color: "text-strong",
                                                className: NU.DD,
                                                children: o,
                                            }),
                                            (0, p.jsx)("div", { className: NU.lO, children: u }),
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
var NV = i(201718),
    Nk = i(321078),
    Nw = i(672130),
    NF = i(546183),
    NB = i(379848),
    Nz = i(96734);
let NY = (e) => {
        let { markAsDismissed: t } = e;
        return (
            f.useEffect(() => t(t8.i.UNKNOWN), [t]),
            (0, p.jsx)(n8.Lp, { className: Nz.Ad, text: g.intl.string(g.t.y2b7CA) })
        );
    },
    NX = (e) => {
        let { title: t, body: i, img: n, newIndicatorDismissibleContent: s, onClick: l } = e;
        return (0, p.jsxs)("div", {
            className: Nz.kL,
            children: [
                n,
                (0, p.jsxs)("div", {
                    className: Nz.FS,
                    children: [
                        (0, p.jsxs)("div", {
                            className: Nz.TK,
                            children: [
                                (0, p.jsx)(NB.Ay, {
                                    contentTypes: [s],
                                    children: (e) => {
                                        let { visibleContent: t, markAsDismissed: i } = e;
                                        return t === s ? (0, p.jsx)(NY, { markAsDismissed: i }) : null;
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
    NH = () => {
        let e = ta.A.getArticleURL(q.MVz.PS_CONNECTION);
        return (0, p.jsx)(NX, {
            title: g.intl.string(g.t.v20wwm),
            body: g.intl.format(g.t.lTZBit, { help_article: e }),
            img: (0, p.jsx)("img", { src: "/assets/88954903b6a5b9cc.svg", width: "82", height: "auto", alt: "" }),
            newIndicatorDismissibleContent: ex.M.PS_ONE_WAY_RECONNECT,
            onClick: () => (0, Nj.A)({ platformType: q.fg2.PLAYSTATION, location: "PS two way upsell" }),
        });
    },
    NK = "/assets/9df988a227916145.png",
    NW = () =>
        (0, p.jsx)(NX, {
            title: g.intl.string(NG.default["9cLtDI"]),
            body: g.intl.format(NG.default["D+kUbg"], { learnMoreLink: "" }),
            img: (0, p.jsx)("img", { src: NK, width: "auto", height: "45", alt: "" }),
            newIndicatorDismissibleContent: ex.M.XBOX_PERKS_RECONNECT_UPSELL,
            onClick: () => (0, Nj.A)({ platformType: q.fg2.XBOX, location: "Xbox perks reconnect upsell" }),
        }),
    NZ = () => {
        let e = ta.A.getArticleURL(q.MVz.XBOX_CONNECTION);
        return (0, p.jsx)(NX, {
            title: g.intl.string(g.t["2okkZV"]),
            body: g.intl.format(g.t.OnERSS, { help_article: e }),
            img: (0, p.jsx)("img", { src: NK, width: "auto", height: "45", alt: "" }),
            newIndicatorDismissibleContent: ex.M.XBOX_ONE_WAY_RECONNECT,
            onClick: () => (0, Nj.A)({ platformType: q.fg2.XBOX, location: "Xbox two way upsell" }),
        });
    };
var Nq = i(783419),
    NQ = i(534952),
    NJ = i(230451),
    N$ = i(781471);
let N0 = (e) => {
    let t,
        { integration: i } = e,
        {
            isJoining: n,
            joinErrorMessage: s,
            showJoinErrorMessage: l,
        } = (0, O.cf)(
            [NL.A],
            () => ({
                isJoining: NL.A.isJoining(i.id),
                joinErrorMessage:
                    "" === NL.A.joinErrorMessage(i.id) ? g.intl.string(g.t.j2d6Km) : NL.A.joinErrorMessage(i.id),
                showJoinErrorMessage: void 0 !== NL.A.joinErrorMessage(i.id),
            }),
            [i.id],
        );
    return (
        null != (0, O.bG)([H.A], () => H.A.getGuild(i.guild.id), [i.guild.id]) ||
            (t = (0, p.jsx)(eh.$, {
                size: "sm",
                onClick: function () {
                    NN.A.joinServer(i.id, () => {});
                },
                disabled: n,
                variant: "primary",
                text: n ? g.intl.string(g.t.RXvQQu) : g.intl.string(g.t.XpeFYr),
            })),
        (0, p.jsxs)("div", {
            className: N$.iA,
            children: [
                (0, p.jsxs)("div", {
                    className: N$.XX,
                    children: [
                        (0, p.jsx)(gh.Ay, { size: gh.Ay.Sizes.SMALL, guild: i.guild, className: N$.$f }),
                        (0, p.jsxs)("div", {
                            className: N$.Vn,
                            children: [
                                (0, p.jsx)(V.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: i.guild.name,
                                }),
                                (0, p.jsx)(uk.Anchor, {
                                    href: NC.A.get(i.type)?.getPlatformUserUrl?.(i.account),
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
                        className: N$.R,
                        children: s,
                    }),
            ],
        })
    );
};
function N1(e) {
    var t;
    let { account: i } = e,
        n = (0, NR.useIsCrepeEnabled)("connectionReconnectUpsell");
    return i.type === q.fg2.XBOX && ((t = i.id), !/^\d+$/.test(t)) && n
        ? (0, p.jsx)(NW, {})
        : i.twoWayLink
          ? null
          : i.type === q.fg2.XBOX
            ? (0, p.jsx)(NZ, {})
            : i.type === q.fg2.PLAYSTATION
              ? (0, p.jsx)(NH, {})
              : null;
}
function N2(e) {
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
        [x, T] = f.useState(u.metadataVisibility),
        [S, N] = f.useState(u.showActivity),
        [C, I] = f.useState(null),
        [b, v] = f.useState(null),
        [j, y] = f.useState(!1),
        [O, R] = f.useState([]),
        D = (0, Nb.ML)(u.type),
        P = NC.A.get(D),
        G = (0, NI.useIsRiotSocialSDKMigrationEnabled)({ location: "User Settings Connections" });
    f.useEffect(() => {
        A(u.friendSync), E(u.visibility), T(u.metadataVisibility), N(u.showActivity);
    }, [u]);
    let U = { inProgressVisibility: C, inProgressMetadataVisibility: b },
        k = f.useRef(U);
    return (
        f.useEffect(() => {
            k.current = U;
        }),
        f.useEffect(() => {
            if (!1 === u.verified) return;
            let { inProgressVisibility: e, inProgressMetadataVisibility: t } = k.current;
            null != e && (E(e), NN.A.setVisibility(u.type, u.id, e), I(null)),
                null != t && (T(t), NN.A.setMetadataVisibility(u.type, u.id, t), v(null));
        }, [u]),
        (0, p.jsxs)("div", {
            className: N$.FI,
            children: [
                ((t = NC.A.get(u.type)),
                (i = NC.A.get(D)),
                (n = "1" === (u.metadata ?? {})[Nq.pK.TWITTER_VERIFIED]),
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
                    className: N$.Il,
                    children: [
                        (0, p.jsx)("img", {
                            alt: i.name,
                            className: N$.gj,
                            src: (0, cJ.M)(d) ? i.icon.darkSVG : i.icon.lightSVG,
                        }),
                        (0, p.jsxs)("div", {
                            children: [
                                (0, p.jsxs)("div", {
                                    className: N$.$p,
                                    children: [
                                        (0, p.jsx)(V.E, {
                                            color: "text-strong",
                                            variant: "text-md/semibold",
                                            className: N$.RW,
                                            children: u.name,
                                        }),
                                        null != s && (0, p.jsx)("div", { className: N$.cG, children: s }),
                                    ],
                                }),
                                (0, p.jsx)(V.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: N$.Au,
                                    children:
                                        null != i.replacedBy && G
                                            ? g.intl.format(NJ.default.Glhokn, { platformName: i.name })
                                            : i.name,
                                }),
                            ],
                        }),
                        (0, p.jsx)(M.D, {
                            className: N$.uH,
                            onClick: function () {
                                let e = NC.A.get(u.type);
                                (0, _.openModal)((t) =>
                                    (0, p.jsx)(lL.Modal, {
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
                                            Ny.has(u.type) &&
                                            u.twoWayLink &&
                                            (0, p.jsx)(si.A, {
                                                children: g.intl.format(g.t.COW3Xn, { platformName: e.name }),
                                            }),
                                    }),
                                );
                            },
                            "aria-label": g.intl.string(g.t.ppppRJ),
                            focusProps: { offset: { top: -4, left: -4, right: -4 } },
                            children: (0, p.jsx)(c0.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                })),
                (0, p.jsx)(N1, { account: u }),
                (function (e) {
                    let t = e.metadata ?? {},
                        i = null,
                        n = (0, Nv.An)(t[Nq.pK.CREATED_AT], c);
                    switch (e.type) {
                        case q.fg2.REDDIT:
                            i = (0, NO.xE)(t, N$.Nz);
                            break;
                        case q.fg2.STEAM:
                            i = (0, NO.dy)(t, N$.Nz);
                            break;
                        case q.fg2.BLUESKY:
                        case q.fg2.TWITTER:
                        case q.fg2.MASTODON:
                            i = (0, NO.ED)(t, N$.Nz);
                            break;
                        case q.fg2.EBAY:
                            i = (0, NO.ub)(t, N$.Nz);
                            break;
                        case q.fg2.PAYPAL:
                            i = (0, NO.gZ)(t, N$.Nz);
                            break;
                        case q.fg2.TIKTOK:
                            i = (0, NO.HU)(t, N$.Nz);
                    }
                    null !== n &&
                        (null == i && (i = []),
                        i?.push(
                            (0, p.jsx)(
                                V.E,
                                {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    className: N$.M4,
                                    children: g.intl.format(g.t["9rfonh"], { date: n }),
                                },
                                "member-since",
                            ),
                        ));
                    let s = O.includes(e.id),
                        l = g.intl.string(g.t.wzzjk9);
                    if (null == i || 0 === i.length)
                        if (!0 !== NC.A.get(e.type).hasMetadata) return null;
                        else
                            (i = [
                                (0, p.jsx)(n8.Lp, { className: N$.Z3, text: g.intl.string(g.t.y2b7CA) }, "badge"),
                                (0, p.jsx)(
                                    V.E,
                                    {
                                        variant: "text-xs/normal",
                                        className: N$.vt,
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
                                    className: N$.jy,
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
                                                      NN.A.refresh(e.type, e.id).finally(() => {
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
                        (0, p.jsx)("div", { className: N$.tJ, children: i })
                    );
                })(u),
                (q.txh.has(u.type) &&
                    (l = (0, p.jsx)(L.d, {
                        label: g.intl.string(g.t["+KCMSi"]),
                        checked: m,
                        onChange: function (e) {
                            A(e), NN.A.setFriendSync(u.type, u.id, e);
                        },
                    })),
                q.ewM.has(u.type) &&
                    (r = (0, p.jsx)(L.d, {
                        label: g.intl.format(g.t["6u6J0q"], { platform: P.name }),
                        checked: S,
                        onChange: function (e) {
                            N(e), NN.A.setShowActivity(u.type, u.id, e);
                        },
                    })),
                NC.A.get(u.type)?.hasMetadata === !0 &&
                    (a = (0, p.jsx)(L.d, {
                        label: g.intl.string(g.t.FYKGsL),
                        checked: 1 === x,
                        onChange: function (e) {
                            let { verified: t } = u,
                                i = +!!e;
                            if (e && !t) {
                                v(i), (0, Nj.A)({ platformType: u.type, location: "User Settings" });
                                return;
                            }
                            T(i), NN.A.setMetadataVisibility(u.type, u.id, i);
                        },
                        disabled: 1 !== h || null == u.metadata,
                    })),
                (0, p.jsxs)("div", {
                    className: N$.HZ,
                    children: [
                        (0, p.jsx)(L.d, {
                            label: g.intl.string(g.t.f7yOAX),
                            checked: 1 === h,
                            onChange: function (e) {
                                let { verified: t } = u,
                                    i = +!!e;
                                if (e && !t) {
                                    I(i), (0, Nj.A)({ platformType: u.type, location: "User Settings" });
                                    return;
                                }
                                E(i), NN.A.setVisibility(u.type, u.id, i);
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
                                  (0, Nj.A)({ platformType: u.type, location: "User Settings" });
                              },
                          }),
                      })
                    : u.integrations.length > 0
                      ? (0, p.jsx)(sy.D, {
                            label: g.intl.string(g.t.fOe3fZ),
                            children: u.integrations.map((e) => (0, p.jsx)(N0, { integration: e }, e.id)),
                        })
                      : void 0,
                null,
            ],
        })
    );
}
function N3(e) {
    let { appIdentity: t, oauth2Token: i } = e;
    return null == i
        ? null
        : (0, p.jsxs)("div", {
              className: N$.FI,
              children: [
                  (function (e, t) {
                      let { application: i } = t,
                          n = i$.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
                      return (0, p.jsxs)("div", {
                          className: N$.Il,
                          children: [
                              (0, p.jsx)("img", { alt: i.name, className: ew()(N$.gj, N$.sN), src: n }),
                              (0, p.jsxs)("div", {
                                  children: [
                                      (0, p.jsx)("div", {
                                          className: N$.$p,
                                          children: (0, p.jsx)(V.E, {
                                              color: "text-strong",
                                              variant: "text-md/semibold",
                                              className: N$.RW,
                                              children: e.profile.username,
                                          }),
                                      }),
                                      (0, p.jsx)(V.E, {
                                          variant: "text-xs/normal",
                                          color: "text-strong",
                                          className: N$.Au,
                                          children: i.name,
                                      }),
                                  ],
                              }),
                              (0, p.jsx)(M.D, {
                                  className: N$.uH,
                                  onClick: () =>
                                      (0, fH.d1)(i, t.scopes, () => {
                                          fX.A.delete(t.id);
                                      }),
                                  "aria-label": g.intl.string(g.t.ppppRJ),
                                  focusProps: { offset: { top: -4, left: -4, right: -4 } },
                                  children: (0, p.jsx)(c0.P, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      });
                  })(t, i),
                  (0, p.jsx)("div", {
                      className: N$.HZ,
                      children: (0, p.jsx)(L.d, {
                          label: g.intl.string(g.t.f7yOAX),
                          checked: t.profile?.connection_visible ?? !1,
                          onChange: (e) => {
                              NV.A.updateApplicationIdentityConfig(i.application.id, t.provider_issued_user_id, {
                                  connection_visible: e,
                              });
                          },
                      }),
                  }),
              ],
          });
}
function N6(e) {
    let t = NC.A.get(e);
    (0, Nj.A)({ platformType: t.type }),
        Y.default.track(q.HAw.ACCOUNT_LINK_STEP, {
            previous_step: "desktop connections",
            current_step: "desktop oauth",
            platform_type: t.type,
        });
}
function N4() {
    let e = (0, Nb.gn)(),
        t = (0, NI.useIsRiotSocialSDKMigrationEnabled)({ location: "User Settings Connections" }),
        i = (0, eZ.A)(t ? NQ.tX : []);
    return (0, p.jsxs)("div", {
        className: N$.lA,
        children: [
            i.map(
                (e) =>
                    null != e &&
                    (0, p.jsx)(
                        Nw.A,
                        { application: e, className: N$.__invalid_accountButton, innerClassName: N$.U$ },
                        e.id,
                    ),
            ),
            e
                .slice(0, 10 - i.length)
                .map((e) =>
                    (0, p.jsx)(
                        N_.A,
                        { type: e.type, className: N$.__invalid_accountButton, innerClassName: N$.U$ },
                        e.type,
                    ),
                ),
            (0, p.jsx)(e0.m, {
                text: g.intl.string(g.t.QqTz8b),
                children: (0, p.jsx)("div", {
                    className: ew()(N$.ej, N$.__invalid_accountButton),
                    children: (0, p.jsx)(Nf.vN, {
                        children: (0, p.jsx)("button", {
                            className: ew()(N$.R8, N$.U$),
                            type: "button",
                            onClick: function () {
                                n6.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: N6 });
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
function N5(e) {
    let t,
        { fetching: i, accounts: n, appIdentities: s, authorizedApps: l, theme: r, locale: a } = e;
    return (
        (t = i
            ? (0, p.jsx)(u3.y, { type: u3.y.Type.SPINNING_CIRCLE })
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
                                N3,
                                { appIdentity: e, oauth2Token: l.find((t) => t.application.id === e.application_id) },
                                `app-${t}`,
                            ),
                        ),
                        n
                            .filter((e) => NC.A.isSupported(e.type))
                            .map((e, t) =>
                                (0, p.jsx)(
                                    N2,
                                    {
                                        theme: r,
                                        account: e,
                                        locale: a,
                                        onDisconnect: () =>
                                            (function (e) {
                                                let { type: t, id: i } = e;
                                                NN.A.disconnect(t, i);
                                            })(e),
                                    },
                                    `connection-${t}`,
                                ),
                            ),
                    ],
                })),
        (0, p.jsx)("div", { className: N$.V, children: t })
    );
}
let N7 = (0, o.E2)(u.X.CONNECTIONS_ADD_CONNECTIONS_SETTING, {
        Component: function () {
            return (0, p.jsx)(sy.D, {
                label: g.intl.string(g.t.ZeDrUf),
                description: g.intl.format(g.t["oYc+Gz"], { privacyPolicyUrl: q.X7G.PRIVACY }),
                children: (0, p.jsx)(N4, {}),
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
    N8 = (0, o.E2)(u.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING, {
        Component: function () {
            let e = (0, O.bG)([e_.A], () => e_.A.hidePersonalInformation),
                t = (0, O.bG)([NL.A], () => NL.A.isFetching()),
                i = (0, O.bG)([NL.A], () => NL.A.getAccounts()),
                { authorizedAppsFetchState: n, authorizedApps: s } = (0, O.cf)([NF.default], () => ({
                    authorizedAppsFetchState: NF.default.getFetchState(),
                    authorizedApps: NF.default.getNewestTokensForNonChildrenApplications(),
                })),
                { isLoading: l, filteredAppIdentities: r } = (0, Nk.A)(t3.default.getCurrentUser().id, {
                    includeHidden: !0,
                }),
                a = (0, d$.Ay)(),
                o = (0, O.bG)([dO.default], () => dO.default.locale);
            return (f.useEffect(() => {
                n === NF.FetchState.NOT_FETCHED && fX.A.fetch();
            }, [n]),
            e)
                ? null
                : (0, p.jsxs)(p.Fragment, {
                      children: [
                          (0, p.jsx)(NM, {}),
                          (0, p.jsx)(N5, {
                              fetching: t || l || (r.length > 0 && n !== NF.FetchState.FETCHED),
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
            NN.A.fetch();
        },
        useSearchTerms: () => [
            g.intl.string(g.t["+/hZM/"]),
            g.intl.string(g.t.bsbMVz),
            g.intl.string(g.t.f7yOAX),
            g.intl.string(g.t.FYKGsL),
            g.intl.string(g.t["+KCMSi"]),
        ],
    });
var N9 = i(46225);
let _e = [q.fg2.LEAGUE_OF_LEGENDS, q.fg2.RIOT_GAMES],
    _t = (0, o.zZ)(u.X.CONNECTIONS_ADD_CONNECTIONS_CATEGORY, {
        buildLayout: () => [N7],
        useInlineNotice: function () {
            let e = (0, O.bG)([NL.A], () => NL.A.getAccounts().find((e) => _e.includes(e.type))?.type),
                t = null != e ? NC.A.get(e) : null,
                i = (0, eZ.h)(t?.replacedBy),
                { canStartAuthorization: n, hasAlreadyLinked: s, fetched: l } = (0, N9.RD)(i),
                r = g.intl.string(NJ.default["1S6oAo"]),
                a = (0, NI.useIsRiotSocialSDKMigrationEnabled)({ location: "RiotDeprecationInlineNotice" });
            return f.useMemo(
                () =>
                    a && null != t && n && i?.connectionEntrypointUrl != null && !s && l
                        ? {
                              type: eN.lT.INLINE_NOTICE,
                              noticeType: "info",
                              useText: () =>
                                  g.intl.format(NJ.default.DeOsIl, {
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
    _i = (0, o.zZ)(u.X.CONNECTIONS_CONNECTED_ACCOUNTS_CATEGORY, { buildLayout: () => [N8] }),
    _n = (0, o.t_)(u.X.CONNECTIONS_PANEL, {
        useTitle: () => g.intl.string(g.t["3fe7U5"]),
        useObscuredNotice: u0.L,
        buildLayout: () => [_t, _i],
    }),
    _s = (0, o.i4)(u.X.CONNECTIONS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["3fe7U5"]),
        icon: hj.q,
        buildLayout: () => [_n],
    });
var _l = i(875444);
function _r(e, t) {
    let i = (0, O.bG)([NF.default], () => NF.default.getFetchState()),
        n = (0, O.bG)([NF.default], () =>
            e ? NF.default.getNewestTokensForNonChildrenApplications() : NF.default.getNewestTokens(),
        ),
        s = f.useMemo(
            () => (null == n ? [] : n.filter((e) => (0, _l.A)(e.application)).map((e) => e.application)),
            [n],
        );
    return (
        f.useEffect(() => {
            t || fX.A.fetch();
        }, [t]),
        { showLoadingIndicator: i !== NF.FetchState.FETCHED && (null == n || 0 === n.length), slayerSdkApplications: s }
    );
}
i(644151);
var _a = i(464946);
i(750994);
var _o = i(998382);
function _u(e) {
    let { applications: t } = e,
        i = f.useMemo(() => t.sort((e, t) => dn.default.compare(t.id, e.id)), [t]),
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
                    a = i$.Ay.getApplicationIconURL({ id: r, icon: s });
                e.push(
                    (0, p.jsx)(
                        e0.m,
                        {
                            __unsupportedReactNodeAsText: l,
                            children: (0, p.jsx)("img", { src: a, "aria-label": l, className: _o.Kk }),
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
                                className: _o.lK,
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
        className: _o.wx,
        children: [
            (0, p.jsxs)("div", {
                className: _o.kX,
                children: [
                    (0, p.jsx)(V.E, { variant: "text-md/normal", color: "text-strong", children: n }),
                    (0, p.jsxs)(M.D, {
                        onClick: () => {
                            (0, ej.openUserSettings)(u.X.AUTHORIZED_APPS_PANEL);
                        },
                        className: _o.bJ,
                        children: [
                            (0, p.jsx)(V.E, {
                                variant: "text-xs/normal",
                                color: "interactive-text-default",
                                children: g.intl.format(g.t.oYaYOe, {}),
                            }),
                            (0, p.jsx)(th._, {
                                size: "xxs",
                                color: w.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                className: _o.g7,
                            }),
                        ],
                    }),
                ],
            }),
            (0, p.jsx)("div", { className: _o.yF }),
            (0, p.jsx)("div", { className: _o.lJ, children: s }),
        ],
    });
}
function _d() {
    return (0, p.jsxs)("div", {
        className: _o.do,
        children: [
            (0, p.jsx)(V.E, {
                variant: "text-md/medium",
                color: "text-strong",
                className: _o.xV,
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
function _c(e) {
    let { applications: t } = e;
    return t.length > 0 ? (0, p.jsx)(_u, { applications: t }) : (0, p.jsx)(_d, {});
}
let _g = (0, o.E2)(u.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES, {
    useSearchTerms: () => [g.intl.string(g.t.YpCiMt)],
    Component: function () {
        let { showLoadingIndicator: e, slayerSdkApplications: t } = _r(!0);
        return e ? (0, p.jsx)(u3.y, {}) : (0, p.jsx)(_c, { applications: t });
    },
});
function _m() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = _r(!0, !0);
    return !e && t.length > 0;
}
let _A = (0, o.zD)(u.X.CONTENT_AND_SOCIAL_ALLOW_GAME_FRIEND_DMS_SETTING, {
        useTitle: () => g.intl.string(g.t.XpBObB),
        useSubtitle: () =>
            g.intl.format(g.t.oZsHTD, { helpdeskArticle: ta.A.getArticleURL(q.MVz.SLAYER_GAME_FRIENDS) }),
        useSearchTerms: () => [g.intl.string(g.t["Uv/eTx"])],
        useValue: () => c.Zk.useSetting(),
        setValue: (e) => c.Zk.updateSetting(e),
        usePredicate: _m,
    }),
    _h = (0, o.Qx)(u.X.CONTENT_AND_SOCIAL_IN_GAME_DMS_SETTING, {
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
        usePredicate: _m,
    }),
    _E = (0, o.zZ)(u.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_CATEGORY, {
        useSearchTerms: () => [g.intl.string(g.t.YpCiMt)],
        buildLayout: () => [_g, _A, _h],
    });
var _x = i(687123),
    _T = i(444802),
    _S = i(558001);
i(866945);
var _p = i(835002);
function _f() {
    let e = (0, _T.WX)();
    f.useEffect(() => {
        (0, _S.N)(_p.YA.AGE_CONFIRMATION_NOTICE, _p.YX.VIEWED);
    }, []);
    let t = f.useCallback(() => {
            window.open(ta.A.getArticleURL(e), "_blank"), (0, _S.N)(_p.YA.AGE_CONFIRMATION_NOTICE, _p.YX.LEARN_MORE);
        }, [e]),
        i = f.useCallback(() => {
            pd.A.showAgeVerificationGetStartedModal({ entryPoint: pc.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, _S.N)(_p.YA.AGE_CONFIRMATION_NOTICE, _p.YX.CONFIRM_AGE);
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
        children: g.intl.format(g.t.mFgsfg, { hook: (e, i) => (0, p.jsx)(uk.Anchor, { onClick: t, children: e }, i) }),
    });
}
function _N() {
    let e = (0, ps.aX)(_x.t.REACTIVE_CHECK),
        t = (0, pn.b8)();
    return f.useMemo(() => {
        if (e && !t) return { type: eN.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: _f };
    }, [e, t]);
}
var __ = i(308528),
    _C = i(171316);
function _I() {
    let e = (0, _C.uM)(),
        t = (0, fI.vx)(),
        i = f.useCallback(() => {
            (0, sE.default)(),
                __.A.openPrivateChannel({ recipientIds: t }),
                (0, _S.N)(_p.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, _p.YX.LEARN_MORE);
        }, [t]),
        n = f.useCallback(() => {
            (0, _S.N)(_p.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, _p.YX.VIEWED);
        }, []);
    return f.useMemo(() => {
        if (e)
            return {
                type: eN.lT.INLINE_NOTICE,
                noticeType: "info",
                trackView: n,
                useText: () =>
                    g.intl.format(fy.default.i284fU, {
                        hook: (e, t) => (0, p.jsx)(uk.Anchor, { onClick: i, children: e }, t),
                        count: t.length,
                    }),
            };
    }, [i, e, t.length, n]);
}
var _b = i(323073),
    _v = i(264249),
    _j = i(406274);
let _y = (0, o.zD)(u.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_DM_SETTING, {
        useTitle: () => g.intl.string(g.t.XahVjj),
        useSubtitle: () => g.intl.string(g.t.R9fXyS),
        useValue: _v.hT,
        useDisabled: () => {
            let e = (0, _j.A)() ?? !0,
                t = (0, _b.sP)(),
                i = (0, pn.yM)();
            return (!t || !!i) && !e;
        },
        setValue: (e) => {
            (0, _b.p5)() && e
                ? pd.A.showAgeVerificationGetStartedModal({ entryPoint: pc.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS })
                : c.Qe.updateSetting(e);
        },
    }),
    _O = (0, o.zD)(u.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_IOS_SETTING, {
        useTitle: () => g.intl.string(g.t["L+yTsa"]),
        useSubtitle: () => g.intl.string(g.t.hiM8pU),
        useValue: _v.tI,
        useDisabled: () => {
            let e = (0, _j.A)() ?? !0,
                t = (0, _b.sP)(),
                i = (0, pn.yM)();
            return f.useMemo(() => (!t || !!i) && !e, [t, e, i]);
        },
        setValue: (e) => {
            (0, _b.p5)() && e
                ? pd.A.showAgeVerificationGetStartedModal({ entryPoint: pc.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS })
                : c.Kg.updateSetting(e);
        },
    });
i(667532);
var _R = i(390248),
    _L = i(632119),
    _D = i(945276),
    _P = i(389737),
    _G = i(566769);
function _U() {
    let e,
        t = (0, _D.A)() ?? !0,
        i = (0, _C.uM)(),
        n = (0, _C.uM)(),
        {
            explicitContentGuilds: s,
            explicitContentFriendDm: l,
            explicitContentNonFriendDm: r,
        } = ((e = (0, uV.cf)([ut.A], () => ut.A.settings.textAndImages?.explicitContentSettings ?? (0, _L.C$)())),
        {
            explicitContentGuilds: (0, _L.Ys)({ setting: e?.explicitContentGuilds }),
            explicitContentNonFriendDm: (0, _L.Ys)({ setting: e?.explicitContentNonFriendDm, isDm: !0 }),
            explicitContentFriendDm: (0, _L.Ys)({ setting: e?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
        }),
        a = (e) => {
            let t = Object.values(e);
            (0, _R.hK)() && t.includes(N.TO.SHOW)
                ? pd.A.showAgeVerificationGetStartedModal({ entryPoint: pc.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
                : (0, _L.Jz)(e);
        },
        o = [
            { value: N.TO.BLUR, label: g.intl.string(g.t.S49Uad) },
            { value: N.TO.BLOCK, label: g.intl.string(g.t["D/157Y"]) },
        ],
        u = [{ value: N.TO.BLUR, label: g.intl.string(g.t.S49Uad) }],
        d = { value: N.TO.SHOW, label: g.intl.string(g.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: n, tooltipText: i ? g.intl.string(fy.default["6Af/cw"]) : void 0 };
    return (0, p.jsxs)(_P.E, {
        description: g.intl.string(g.t.Wnojv1),
        children: [
            (0, p.jsx)(_G.A, {
                title: g.intl.string(g.t["+uI23H"]),
                value: l,
                onChange: (e) => a({ explicitContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, p.jsx)(_G.A, {
                title: g.intl.string(g.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ explicitContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, p.jsx)(_G.A, {
                title: g.intl.string(g.t["FP+a42"]),
                value: s,
                onChange: (e) => a({ explicitContentGuilds: e }),
                isDisabled: !t || n,
                tooltipText: i ? g.intl.string(fy.default["6Af/cw"]) : void 0,
                options: u,
            }),
        ],
    });
}
function _M() {
    let e,
        t = (0, _D.A)() ?? !0,
        i = (0, _C.uM)(),
        n = (0, _C.uM)(),
        {
            goreContentGuilds: s,
            goreContentFriendDm: l,
            goreContentNonFriendDm: r,
        } = ((e = (0, uV.cf)([ut.A], () => ut.A.settings.textAndImages?.goreContentSettings ?? (0, _T.T4)())),
        {
            goreContentGuilds: (0, _T.gC)({ setting: e?.goreContentGuilds }),
            goreContentNonFriendDm: (0, _T.gC)({ setting: e?.goreContentNonFriendDm, isDm: !0 }),
            goreContentFriendDm: (0, _T.gC)({ setting: e?.goreContentFriendDm, isDm: !0, isFriend: !0 }),
        }),
        a = (e) => {
            let t = Object.values(e);
            (0, _R.hK)() && t.includes(N.TO.SHOW)
                ? pd.A.showAgeVerificationGetStartedModal({ entryPoint: pc.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
                : (0, _T.qY)(e);
        },
        o = [
            { value: N.TO.BLUR, label: g.intl.string(g.t.S49Uad) },
            { value: N.TO.BLOCK, label: g.intl.string(g.t["D/157Y"]) },
        ],
        u = [{ value: N.TO.BLUR, label: g.intl.string(g.t.S49Uad) }],
        d = { value: N.TO.SHOW, label: g.intl.string(g.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: n, tooltipText: i ? g.intl.string(fy.default["6Af/cw"]) : void 0 };
    return (0, p.jsxs)(_P.E, {
        description: g.intl.string(g.t.XgH9eh),
        children: [
            (0, p.jsx)(_G.A, {
                title: g.intl.string(g.t["+uI23H"]),
                value: l,
                onChange: (e) => a({ goreContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, p.jsx)(_G.A, {
                title: g.intl.string(g.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ goreContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, p.jsx)(_G.A, {
                title: g.intl.string(g.t["FP+a42"]),
                value: s,
                onChange: (e) => a({ goreContentGuilds: e }),
                isDisabled: !t || n,
                options: u,
                tooltipText: i ? g.intl.string(fy.default["6Af/cw"]) : void 0,
            }),
        ],
    });
}
var _V = i(875162),
    _k = i(334859);
let _w = (0, o.E2)(u.X.CONTENT_AND_SOCIAL_CONTENT_FILTERS_SETTING, {
    Component: function () {
        let e = (0, _T.WX)(),
            t = f.useMemo(
                () => [
                    {
                        id: "explicit-media-redaction",
                        title: g.intl.string(g.t.GYpoAq),
                        component: _U,
                        orientation: "vertical",
                    },
                    {
                        id: "gore-media-redaction",
                        title: g.intl.string(g.t["16/3Bi"]),
                        component: _M,
                        orientation: "vertical",
                    },
                ],
                [],
            );
        return (0, p.jsxs)(_a.h, {
            children: [
                (0, p.jsx)(_a._, {
                    header: g.intl.string(g.t["Hj/But"]),
                    description: g.intl.format(g.t.dliU4j, { learnMoreLink: ta.A.getArticleURL(e) }),
                }),
                (0, p.jsx)(_V.A, { tabs: t, orientation: "vertical", tabsClassName: _k.v }),
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
var _F = i(639555),
    _B = i(617641),
    _z = i(546140),
    _Y = i(406935),
    _X = i(594061);
let _H = (0, o.zD)(u.X.CONTENT_AND_SOCIAL_DM_SAFETY_ALERTS_SETTING, {
    useTitle: () => g.intl.string(g.t.qFsx5q),
    useSubtitle: () => g.intl.format(g.t.lunaRv, { learnMoreLink: ta.A.getArticleURL(q.MVz.SAFETY_ALERTS) }),
    useValue: _z.L,
    setValue: (e) =>
        _X.wc.updateAsync(
            "privacy",
            (t) => {
                t.inappropriateConversationWarnings = _Y._t.create({ value: e });
            },
            _X.Sb.INFREQUENT_USER_ACTION,
        ),
    usePredicate: function () {
        let e = (0, _B.Lc)({ location: "DMSafetyAlertsSetting" }),
            t = (0, _F.Rv)({ location: "DMSafetyAlertsSetting" }),
            i = (0, _D.A)() ?? !0;
        return e && !i && !t;
    },
});
var _K = i(809505),
    _W = i(923457),
    _Z = i(656402);
let _q = (0, o.Qx)(u.X.CONTENT_AND_SOCIAL_DM_SPAM_SETTING, {
        useTitle: () => g.intl.string(g.t.tiCXaH),
        useSubtitle: () => g.intl.format(g.t.RvjRRI, { appealLink: ta.A.getArticleURL(q.MVz.SAFE_DIRECT_MESSAGING) }),
        useValue: function () {
            let e = c.he.useSetting(),
                t = c.cj.useSetting(),
                i = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
                n = (0, ps.yv)(_W.p.SPAM_FILTERS);
            return e !== N.he.DEFAULT_UNSET
                ? e
                : i?.nsfwAllowed === !1 && n
                  ? N.he.FRIENDS_AND_NON_FRIENDS
                  : (_Z.xY.get(t) ?? N.he.NON_FRIENDS);
        },
        setValue: (e) => c.he.updateSetting(e),
        useOptions: function () {
            return f.useMemo(() => (0, _K.YS)(), []);
        },
        useSearchTerms: () => [g.intl.string(g.t.JzaP4h), g.intl.string(g.t.H9XOl3), g.intl.string(g.t.k4W40P)],
    }),
    _Q = (0, o.zZ)(u.X.CONTENT_AND_SOCIAL_CONTENT_CATEGORY, {
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
                u = _I(),
                d =
                    ((e = (0, fb.Z)()),
                    (t = (0, _T.WX)()),
                    (i = f.useCallback(() => {
                        window.open(ta.A.getArticleURL(t), "_blank"),
                            (0, _S.N)(_p.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _p.YX.LEARN_MORE);
                    }, [t])),
                    (n = f.useCallback(() => {
                        (0, _S.N)(_p.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _p.YX.VIEWED);
                    }, [])),
                    f.useMemo(() => {
                        if (e)
                            return {
                                type: eN.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: n,
                                useText: () =>
                                    g.intl.format(g.t.EUo0yj, {
                                        hook: (e, t) => (0, p.jsx)(uk.Anchor, { onClick: i, children: e }, t),
                                    }),
                            };
                    }, [i, e, n])),
                c =
                    ((s = (0, ps.SJ)()),
                    (l = (0, pn.b8)()),
                    (r = s && !l),
                    (a = f.useCallback(() => {
                        pd.A.showAgeVerificationGetStartedModal({ entryPoint: pc.q1.CONTENT_AND_SOCIAL_NOTICE }),
                            (0, _S.N)(_p.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, _p.YX.LEARN_MORE);
                    }, [])),
                    (o = f.useCallback(() => {
                        (0, _S.N)(_p.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, _p.YX.VIEWED);
                    }, [])),
                    f.useMemo(() => {
                        if (r)
                            return {
                                type: eN.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: o,
                                useText: () =>
                                    g.intl.format(g.t.OX4ybh, {
                                        hook: (e, t) => (0, p.jsx)(uk.Anchor, { onClick: a, children: e }, t),
                                    }),
                            };
                    }, [a, r, o])),
                m = _N();
            return u ?? m ?? c ?? d;
        },
        buildLayout: () => [_w, _q, _H, _y, _O],
    });
var _J = i(189883);
let _$ = (0, o.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_EVERYONE_SETTING, {
    useTitle: () => g.intl.string(g.t["7x9dyE"]),
    useValue: () => {
        let e = c.FA.useSetting();
        return f.useMemo(() => (0, rN.Lx)(e), [e]).all;
    },
    setValue: (e) => {
        c.FA.updateSetting(e ? q.yKI : q.yKI & ~q.dzt.NO_RELATION);
    },
    useDisabled: () => (0, _C.uM)(),
});
var _0 = i(665260);
let _1 = (0, o.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_FRIENDS_SETTING, {
        useTitle: () => g.intl.string(g.t.NfeuZ3),
        useValue: () => {
            let e = c.FA.useSetting(),
                t = f.useMemo(() => (0, rN.Lx)(e), [e]);
            return t.all || t.mutualFriends;
        },
        setValue: (e) => {
            let t = c.FA.getSetting();
            c.FA.updateSetting(e ? _0.UI(t, q.dzt.MUTUAL_FRIENDS) : _0.iE(t, q.dzt.MUTUAL_FRIENDS, q.dzt.NO_RELATION));
        },
        useDisabled: () => (0, _C.uM)(),
    }),
    _2 = (0, o.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_GUILDS_SETTING, {
        useTitle: () => g.intl.string(g.t.qsMfsH),
        useValue: () => {
            let e = c.FA.useSetting(),
                t = f.useMemo(() => (0, rN.Lx)(e), [e]);
            return t.all || t.mutualGuilds;
        },
        setValue: (e) => {
            let t = c.FA.getSetting();
            c.FA.updateSetting(e ? _0.UI(t, q.dzt.MUTUAL_GUILDS) : _0.iE(t, q.dzt.MUTUAL_GUILDS, q.dzt.NO_RELATION));
        },
        useDisabled: () => (0, _C.uM)(),
    }),
    _3 = (0, o.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_NOTES_SETTING, {
        useTitle: () => g.intl.string(g.t["jK+wdr"]),
        useSubtitle: () => g.intl.string(g.t["RYh/pW"]),
        useValue: () => !c.Zd.useSetting(),
        setValue: (e) => {
            c.Zd.updateSetting(!e);
        },
        usePredicate: () => _J.A.useConfig({ location: "Friend Request Setting" }).enabled,
        usePersistentBadge: () => ({ badgeType: eN.Xi.BETA }),
    }),
    _6 = (0, o.zZ)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.MNaVwq),
        useSubtitle: () => {
            let { enabled: e } = _J.A.useConfig({ location: "Friend Request Setting" });
            return e ? g.intl.string(g.t.QVbF3l) : void 0;
        },
        useInlineNotice: _I,
        buildLayout: () => [_$, _1, _2, _3],
    });
var _4 = i(994500),
    _5 = i(428678),
    _7 = i(717398),
    _8 = i(730134),
    _9 = i(753686);
function Ce(e) {
    let { listType: t, numberOfUsers: i } = e,
        n = "blocked" === t;
    return (0, p.jsxs)("div", {
        className: _9.wx,
        children: [
            (0, p.jsx)("div", { className: _9.zc, children: n ? (0, p.jsx)(_5.K, {}) : (0, p.jsx)(ig.G, {}) }),
            (0, p.jsxs)("div", {
                className: _9.Qq,
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
function Ct(e) {
    let { userId: t, last: i } = e,
        n = (0, O.bG)([_4.A], () => _4.A.isBlocked(t)),
        s = (0, O.bG)([t3.default], () => t3.default.getUser(t)),
        [l, r] = f.useState(!1),
        a = f.useCallback(() => {
            r(!0),
                n
                    ? _7.A.unblockUser(t).catch(() => {
                          r(!1);
                      })
                    : _7.A.unignoreUser(t, eM.A.USER_SETTINGS).catch(() => {
                          r(!1);
                      });
        }, [n, t]);
    return null == s
        ? null
        : (0, p.jsxs)("div", {
              className: ew()(_9.nM, { [_9.fW]: i }),
              children: [
                  (0, p.jsxs)("div", {
                      className: _9.eF,
                      children: [
                          (0, p.jsx)(_8.A, { user: s, size: iK._3.SIZE_40 }),
                          (0, p.jsxs)("div", {
                              className: _9.Qq,
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
function Ci(e) {
    let { userIds: t, listType: i } = e,
        [n, s] = f.useState(5);
    return (0, p.jsx)(_a.h, {
        children: (0, p.jsxs)("div", {
            className: _9.Nr,
            children: [
                (0, p.jsx)(Ce, { listType: i, numberOfUsers: t.length }),
                (0, p.jsx)("div", {
                    className: _9.jS,
                    children: t.slice(0, n).map((e, i) => (0, p.jsx)(Ct, { userId: e, last: i === t.length - 1 }, e)),
                }),
                n < t.length
                    ? (0, p.jsx)("div", {
                          className: _9.vM,
                          children: (0, p.jsx)(M.D, {
                              onClick: () => {
                                  s((e) => e + 5);
                              },
                              className: _9.Qf,
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
let Cn = (0, o.E2)(u.X.CONTENT_AND_SOCIAL_BLOCKED_USERS, {
        useSearchTerms: () => [g.intl.string(g.t.PFOUKW)],
        usePredicate: () => (0, O.bG)([_4.A], () => _4.A.getBlockedIDs().length > 0),
        Component: function () {
            let e = (0, O.yK)([_4.A], () => _4.A.getBlockedIDs());
            return (0, p.jsx)(Ci, { userIds: e, listType: "blocked" });
        },
    }),
    Cs = (0, o.E2)(u.X.CONTENT_AND_SOCIAL_IGNORED_USERS, {
        useSearchTerms: () => [g.intl.string(g.t["93ZDWE"])],
        usePredicate: () => (0, O.bG)([_4.A], () => _4.A.getIgnoredIDs().length > 0),
        Component: function () {
            let e = (0, O.yK)([_4.A], () => _4.A.getIgnoredIDs());
            return (0, p.jsx)(Ci, { userIds: e, listType: "ignored" });
        },
    }),
    Cl = (0, o.zZ)(u.X.CONTENT_AND_SOCIAL_RESTRICTED_USERS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.LVwR56),
        useSubtitle: () =>
            g.intl.format(g.t["0aNQo9"], { helpArticle: ta.A.getArticleURL(q.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE) }),
        buildLayout: () => [Cn, Cs],
        usePredicate: () => {
            let { hasBlockedUsers: e, hasIgnoredUsers: t } = (0, O.cf)([_4.A], () => ({
                hasBlockedUsers: _4.A.getBlockedIDs().length > 0,
                hasIgnoredUsers: _4.A.getIgnoredIDs().length > 0,
            }));
            return t || e;
        },
    });
var Cr = i(612025),
    Ca = i(112469),
    Co = i(111159),
    Cu = i(152056),
    Cd = i(219714);
let Cc = { label: () => g.intl.string(g.t["32u1Dx"]), value: Cr.YG };
var Cg = i(542457);
let Cm = () => (0, Ca.Tx)() !== Cr.YG;
function CA() {
    return g.intl.string(g.t["T+nevN"]);
}
let Ch = (0, o.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_JOIN_SETTING, {
        useTitle: CA,
        useSubtitle: () =>
            g.intl.format(g.t.jXKQCu, { helpdeskArticle: ta.A.getArticleURL(q.MVz.ACTIVITY_STATUS_SETTINGS) }),
        useValue: () => {
            let e = (0, Ca.Tx)();
            return !c.pE.useSetting().includes(e);
        },
        setValue: (e) => {
            let t = Cr.xk.getState().selectedGuildId,
                i = (0, rN.CN)();
            e ? i.delete(t) : i.add(t),
                c.pE.updateSetting([...i]),
                Y.default.track(q.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                    action: Cg.m.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
                    ingress: nv.bf.USER_SETTINGS_PRIVACY_SAFETY,
                    guild_id: t,
                });
        },
        usePredicate: Cm,
    }),
    CE = () => (0, Ca.Tx)() !== Cr.YG;
function Cx() {
    return g.intl.string(m.default.WhdCGP);
}
let CT = (0, o.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_SHARE_SETTING, {
    useTitle: Cx,
    useSubtitle: () => g.intl.string(m.default.UQ9RHJ),
    useValue: () => {
        let e = (0, Ca.Tx)();
        return !c.JG.useSetting().includes(e);
    },
    setValue: (e) => {
        let t = Cr.xk.getState().selectedGuildId,
            i = (0, rN.Kk)();
        e ? i.delete(t) : i.add(t),
            c.JG.updateSetting([...i]),
            Y.default.track(q.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                action: Cg.m.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
                ingress: nv.bf.USER_SETTINGS_PRIVACY_SAFETY,
                guild_id: t,
            });
    },
    usePredicate: CE,
});
var CS = i(762183),
    Cp = i(445176),
    Cf = i(972737);
let CN = () => ((0, Cp.e)() ? g.intl.string(g.t.PMsfcH) : g.intl.string(g.t.RAQUSN)),
    C_ = (e, t) => {
        Y.default.track(q.HAw.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t,
        });
    },
    CC = (0, o.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_DMS_SETTING, {
        useTitle: CN,
        useSubtitle: () => {
            let e = (0, Ca.Tx)(),
                t = (0, Ca.q9)(),
                i = (0, Cp.e)();
            return e === Cr.YG
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
            let e = (0, Ca.Tx)(),
                t = c.$s.useSetting().includes(e),
                i = (0, CS.K)();
            return e === Cr.YG ? !i : !t;
        },
        useDisabled: () => {
            let e = (0, _C.uM)();
            return (0, Ca.Tx)() === Cr.YG && e;
        },
        setValue: (e) => {
            let t = Cr.xk.getState().selectedGuildId;
            if (t === Cr.YG) {
                var i;
                (i = !e),
                    (0, Cf.O)({
                        header: g.intl.string(g.t["uUr+GR"]),
                        body: g.intl.string(g.t.hjGJBp),
                        confirmText: g.intl.string(g.t.gm1Vej),
                        cancelText: g.intl.string(g.t.p89ACt),
                        confirmButtonColor: aV.$n.Colors.BRAND,
                        onConfirm: () => {
                            c.n6.updateSetting(i), C_(i, !1);
                        },
                        onCancel: () => {
                            c.n6.updateSetting(i), c.$s.updateSetting(i ? H.A.getGuildIds() : []), C_(i, !0);
                        },
                    });
            } else {
                let i = (0, rN.Tb)();
                e ? i.delete(t) : i.add(t),
                    c.$s.updateSetting(Array.from(i)),
                    Y.default.track(q.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: Cg.m.DIRECT_MESSAGES_TOGGLE,
                        ingress: nv.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    });
            }
        },
    });
var CI = i(152076);
let Cb = (e, t) => {
    Y.default.track(q.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
        default_guilds_restricted: e,
        applied_to_existing_guilds: t,
    });
};
function Cv() {
    return g.intl.string(g.t["3o2ojh"]);
}
let Cj = (0, o.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: Cv,
        useSubtitle: () =>
            (0, Ca.q9)()
                ? g.intl.format(g.t.WpnWLc, { helpdeskArticle: ta.A.getArticleURL(q.MVz.MESSAGE_REQUESTS) })
                : g.intl.format(g.t.wkm9a3, { helpdeskArticle: ta.A.getArticleURL(q.MVz.MESSAGE_REQUESTS) }),
        useValue: () => {
            let e = (0, Ca.Tx)(),
                t = (0, CS.K)(),
                i = c.$s.useSetting().includes(e),
                n = c.YX.useSetting(),
                s = c.Zr.useSetting().includes(e);
            return e === Cr.YG ? !t && !n : !i && !s;
        },
        useDisabled: () => {
            let e = (0, Ca.Tx)(),
                t = (0, _C.uM)(),
                i = (0, CS.K)(),
                n = c.$s.useSetting().includes(e);
            return e === Cr.YG ? i || t : n;
        },
        setValue: (e) => {
            let t = Cr.xk.getState().selectedGuildId;
            if (!e && (0, CI.w)())
                return void pd.A.showAgeVerificationGetStartedModal({ entryPoint: pc.q1.MESSAGE_REQUESTS_SETTINGS });
            if (t === Cr.YG) {
                var i;
                (i = !e),
                    (0, Cf.O)({
                        header: g.intl.string(g.t.yAfu1p),
                        body: g.intl.string(g.t.Ry2z74),
                        confirmText: g.intl.string(g.t.gm1Vej),
                        cancelText: g.intl.string(g.t.p89ACt),
                        confirmButtonColor: aV.$n.Colors.BRAND,
                        onConfirm: () => {
                            c.YX.updateSetting(i), Cb(i, !1);
                        },
                        onCancel: () => {
                            c.YX.updateSetting(i), c.Zr.updateSetting(i ? H.A.getGuildIds() : []), Cb(i, !0);
                        },
                    });
            } else {
                let i = (0, rN.xo)();
                e ? i.delete(t) : i.add(t),
                    c.Zr.updateSetting(Array.from(i)),
                    Y.default.track(q.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: Cg.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: nv.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    });
            }
        },
    }),
    Cy = (0, o.E2)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_GUILD_SELECTOR, {
        useSearchTerms: function () {
            let e = [CN(), Cv()],
                t = Cx();
            CE() && e.push(t);
            let i = CA();
            return Cm() && e.push(i), e;
        },
        Component: function () {
            let { selectedGuildId: e, setSelectedGuildId: t } = (0, Cr.xk)(),
                i = (0, O.bG)([K.Ay], () => K.Ay.getFlattenedGuildIds()),
                n = (0, O.bG)([H.A], () => H.A.getGuilds()),
                s = i[0];
            f.useEffect(
                () =>
                    Cu.A.subscribe(
                        (e) => {
                            let { query: t } = e;
                            return t.trim();
                        },
                        (e, i) => {
                            let n = Cr.xk.getState().selectedGuildId;
                            "" === i && "" !== e && n === Cr.YG && null != s
                                ? t(s)
                                : "" === e && n !== Cr.YG && t(Cr.YG);
                        },
                        { equalityFn: (e, t) => e === t },
                    ),
                [s, t],
            );
            let l = f.useMemo(() => {
                let e = [];
                return (
                    e.push({
                        ...Cc,
                        id: Cc.value,
                        label: Cc.label(),
                        leading: (0, p.jsx)("div", {
                            className: Cd.KP,
                            children: (0, p.jsx)(Co.p, {
                                size: "sm",
                                color: "white",
                                "aria-hidden": !0,
                                className: Cd.cl,
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
                                leading: (0, p.jsx)(gh.Ay, {
                                    className: Cd.cl,
                                    guild: i,
                                    size: gh.Ay.Sizes.SMALLER,
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
    CO = (0, o.zZ)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.eYaT7L),
        useInlineNotice: function () {
            let e = _I(),
                t = _N();
            if ((0, Ca.Tx)() === Cr.YG) return e ?? t;
        },
        buildLayout: () => [Cy, CC, Cj, CT, Ch],
    }),
    CR = (0, o.dT)(u.X.CONTENT_AND_SOCIAL_MAIN_TAB, {
        getTitle: () => g.intl.string(g.t["/7xJCF"]),
        buildLayout: () => [_Q, CO, _6, Cl],
    }),
    CL = (0, o.dT)(u.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_TAB, {
        initialize: () => {
            fX.A.fetch();
        },
        getTitle: () => g.intl.string(g.t.YpCiMt),
        buildLayout: () => [_E],
    }),
    CD = (0, o.t_)(u.X.CONTENT_AND_SOCIAL_PANEL, {
        useTitle: () => g.intl.string(g.t["+o1pDZ"]),
        buildLayout: () => [CR, CL],
    }),
    CP = (0, o.i4)(u.X.CONTENT_AND_SOCIAL_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["+o1pDZ"]),
        icon: cB.i,
        buildLayout: () => [CD],
    });
var CG = i(254138);
function CU() {
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
function CM(e) {
    return (0, EO.$I)(e).then(
        (e) => (
            null != e && null != e.body && n6.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body }), e
        ),
    );
}
var CV = i(157559),
    Ck = i(331887);
function Cw() {
    let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
        t = (0, O.bG)([Ck.A], () => Ck.A.harvestType),
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
function CF(e) {
    let { onConfirm: t, ...n } = e;
    (0, _.openModalLazy)(async () => {
        let { default: e } = await i.e("92063").then(i.bind(i, 970018));
        return (i) => (0, p.jsx)(e, { modalProps: i, onConfirm: t });
    }, n);
}
var CB = i(160427);
let Cz = (0, o.E2)(u.X.DATA_HARVEST_REQUEST_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t.dmBSKo)],
        Component: function () {
            let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
                { currentHarvestType: t, awaitingInitialRequest: i } = (0, O.cf)([Ck.A], () => ({
                    currentHarvestType: Ck.A.harvestType,
                    awaitingInitialRequest: Ck.A.requestingHarvest,
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
            return (0, p.jsxs)(_a.h, {
                children: [
                    (0, p.jsx)(_a._, {
                        header: g.intl.string(g.t.XAHCgJ),
                        description: g.intl.format(g.t.P3kNfr, {
                            helpdeskArticle: ta.A.getArticleURL(q.MVz.GDPR_REQUEST_DATA),
                        }),
                    }),
                    a
                        ? (0, p.jsx)(er.Z, {
                              className: CB.N,
                              children: (0, p.jsx)(V.E, {
                                  variant: "text-md/normal",
                                  children: g.intl.format(g.t.RNDlV9, {
                                      date: ry()(t.created_at).add(q.n83, "days").format("MMMM Do YYYY"),
                                  }),
                              }),
                          })
                        : o
                          ? (0, p.jsx)(er.Z, {
                                className: CB.N,
                                children: (0, p.jsx)(V.E, {
                                    variant: "text-md/normal",
                                    children: g.intl.string(g.t.ZPQLH2),
                                }),
                            })
                          : (0, p.jsxs)(p.Fragment, {
                                children: [
                                    u
                                        ? (0, p.jsx)(er.Z, {
                                              className: CB.N,
                                              children: (0, p.jsx)(V.E, {
                                                  variant: "text-md/normal",
                                                  children: g.intl.string(g.t.c1f88z),
                                              }),
                                          })
                                        : null,
                                    (0, p.jsx)("div", {
                                        className: CB.x,
                                        children: (0, p.jsx)(eh.$, {
                                            variant: "primary",
                                            text: g.intl.string(g.t.dmBSKo),
                                            disabled: l,
                                            onClick: () => {
                                                CF({
                                                    onConfirm: (e) => {
                                                        s(!0),
                                                            CM(e)
                                                                .then(
                                                                    (e) => {
                                                                        null != e && null != e.body
                                                                            ? CV.A.show({
                                                                                  title: g.intl.string(g.t.i2iul5),
                                                                                  body: g.intl.string(g.t["6Nmv4i"]),
                                                                              })
                                                                            : CV.A.show({
                                                                                  title: g.intl.string(g.t.OjbtDm),
                                                                                  body: g.intl.string(g.t["0F5Jyt"]),
                                                                              });
                                                                    },
                                                                    (e) => {
                                                                        let t =
                                                                            e?.message ||
                                                                            e?.body?.message ||
                                                                            g.intl.string(g.t["0F5Jyt"]);
                                                                        CV.A.show({
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
    CY = (0, o.zZ)(u.X.DATA_REQUEST_CATEGORY, {
        useTitle: () => g.intl.string(g.t.VjDjpb),
        initialize: () => {
            CU();
        },
        buildLayout: () => [Cz],
    });
var CX = i(290595),
    CH = i(153488);
let CK = (0, o.zD)(u.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING, {
        useTitle: () => g.intl.string(g.t.AGDDkH),
        useSubtitle: () => g.intl.string(g.t["wW9/zQ"]),
        useValue: () => c.Q$.useSetting(),
        setValue: (e) => f1.eQ({ allowVoiceRecording: e }),
    }),
    CW = (0, o.Tf)(u.X.DATA_HARVEST_REQUEST_SETTING, {
        useTitle: () => g.intl.string(g.t.qfFFos),
        useSubtitle: function () {
            let e = Cw();
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
                let t = ry()(e.nextAllowed).format("MMMM Do YYYY");
                return g.intl.format(g.t["VLMG1+"], { date: t });
            }
        },
        initialize: () => {
            CU();
        },
        useDisabled: () => !Cw().allowed,
        useLoading: () => (0, O.bG)([Ck.A], () => Ck.A.requestingHarvest),
        useVariant: () => "secondary",
        useLabel: () => g.intl.string(g.t.dmBSKo),
        onClick: function () {
            return new Promise((e) => {
                let t = !0;
                CF({
                    onConfirm: (i) => {
                        (t = !1),
                            CM(i)
                                .then(
                                    (e) => {
                                        null != e && null != e.body
                                            ? CV.A.show({
                                                  title: g.intl.string(g.t.i2iul5),
                                                  body: g.intl.string(g.t["6Nmv4i"]),
                                              })
                                            : CV.A.show({
                                                  title: g.intl.string(g.t.OjbtDm),
                                                  body: g.intl.string(g.t["0F5Jyt"]),
                                              });
                                    },
                                    (e) => {
                                        let t = e?.message || e?.body?.message || g.intl.string(g.t["0F5Jyt"]);
                                        CV.A.show({ title: g.intl.string(g.t.OjbtDm), body: t });
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
    CZ = (0, o.v_)(u.X.DATA_USAGE_DISCLAIMER_SETTING, {
        useTitle: () => g.intl.string(g.t.D60Gfj),
        useSubtitle: () =>
            g.intl.format(g.t.R5N31P, {
                onClick: () =>
                    (0, ej.openUserSettings)(
                        (0, iz.pC)("DataUsageDisclaimer") ? u.X.ACCOUNT_REMOVAL_CATEGORY : u.X.ACCOUNT_REMOVAL_SETTING,
                    ),
            }),
    }),
    Cq = (0, o.zD)(u.X.DATA_USAGE_PERSONALIZATION_SETTING, {
        useTitle: () => g.intl.string(g.t.MNKzyg),
        useSubtitle: () =>
            g.intl.format(g.t["eQL/Mr"], { helpdeskArticle: ta.A.getArticleURL(q.MVz.DATA_USED_FOR_RECOMMENDED) }),
        useValue: function () {
            return (0, O.bG)([CH.A], () => CH.A.hasConsented(q.YAq.PERSONALIZATION));
        },
        setValue: function (e) {
            e
                ? (0, CX.U)([q.YAq.PERSONALIZATION], []).catch(Cf.i)
                : (0, Cf.O)({
                      header: g.intl.string(g.t["9SNpzv"]),
                      confirmText: g.intl.string(g.t["9g5UGw"]),
                      cancelText: g.intl.string(g.t["+ZLPw9"]),
                      onConfirm: () => {
                          (0, CX.U)([], [q.YAq.PERSONALIZATION]).catch(Cf.i);
                      },
                      body: g.intl.string(g.t.gJvDDh),
                  });
        },
        useDisabled: _C.uM,
    }),
    CQ = (0, o.zD)(u.X.DATA_USAGE_QUESTS_3P_SETTING, {
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
                t = (0, _C.uM)();
            return e || t;
        },
        useSearchTerms: () => [g.intl.string(g.t.CyLYKZ)],
    }),
    CJ = (0, o.zD)(u.X.DATA_USAGE_QUESTS_SETTING, {
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
        useDisabled: _C.uM,
    }),
    C$ = (0, o.AK)(u.X.DATA_USAGE_ACTIVITY_PRIVACY_NAVIGATOR, {
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
        useTrailingDecoration: () => ({ type: eN.wF.STACKED_ICONS, useIcons: C1 }),
        usePredicate: () =>
            (0, O.bG)([eQ.Ay], () => eQ.Ay.getGamesSeen(!1).some((e) => !(0, tf.n1)(e))) && (0, n9.xl)(),
    }),
    C0 = (0, o.gN)(u.X.DATA_USAGE_RELATED_SETTINGS, { buildLayout: () => [C$] });
function C1() {
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
        AT.Ay.fetchApplications([t, i].filter(t6.Vq));
    }, [t, i]);
    let [n, s] = (0, O.yK)([eW.A], () => [t, i].map(eW.A.getApplication), [t, i]);
    return null == t
        ? null
        : {
              frontIcon: { icon: (0, p.jsx)(e7.A, { game: n, size: e7.M.MEDIUM_LARGE }), shape: eN.NF.ROUNDED },
              backIcon:
                  null != i ? { icon: (0, p.jsx)(e7.A, { game: s, size: e7.M.MEDIUM }), shape: eN.NF.ROUNDED } : null,
          };
}
let C2 = (0, o.zD)(u.X.DATA_USAGE_STATISTICS_SETTING, {
        useTitle: () => g.intl.string(g.t.XuADY2),
        useSubtitle: () =>
            g.intl.format(g.t["igTSG/"], { helpdeskArticle: ta.A.getArticleURL(q.MVz.DATA_PRIVACY_CONTROLS) }),
        useValue: function () {
            return (0, O.bG)([CH.A], () => CH.A.hasConsented(q.YAq.USAGE_STATISTICS));
        },
        setValue: function (e) {
            e
                ? (0, CX.U)([q.YAq.USAGE_STATISTICS], []).catch(Cf.i)
                : (0, Cf.O)({
                      header: g.intl.string(g.t.OdPCbN),
                      body: g.intl.string(g.t.MGWabA),
                      confirmText: g.intl.string(g.t["D3+rU4"]),
                      cancelText: g.intl.string(g.t.kYpG0u),
                      onConfirm: () => (0, CX.U)([], [q.YAq.USAGE_STATISTICS]).catch(Cf.i),
                  });
        },
        useSearchTerms: () => [g.intl.string(g.t.XuADY2)],
        useDisabled: _C.uM,
    }),
    C3 = (0, o.zZ)(u.X.DATA_USAGE_CATEGORY, {
        useTitle: () => ((0, iz.ri)("DataUsageCategory") ? g.intl.string(g.t.QDAriI) : g.intl.string(g.t.bvw42E)),
        useInlineNotice: _I,
        initialize: () => {
            CH.A.fetchedConsents || (0, CX.Q)();
        },
        buildLayout: () =>
            (0, iz.SB)("DataUsageCategory") ? [CZ, C2, Cq, CJ, CQ, CK, CW, C0] : [C2, CJ, CQ, Cq, CK, CZ],
    });
function C6() {
    let e = c.JG.useSetting();
    return (0, O.yK)([K.Ay, H.A], () => {
        let t = new Set(e);
        return K.Ay.getFlattenedGuildIds().filter((e) => null != H.A.getGuild(e) && !t.has(e));
    }, [e]);
}
let C4 = {
        type: eN.wF.STACKED_ICONS,
        useIcons: function () {
            let e = C6(),
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
                        frontIcon: { icon: (0, p.jsx)(X.$, { guild: t[0], size: 48 }), shape: eN.NF.SQUIRCLE },
                        backIcon: { icon: (0, p.jsx)(X.$, { guild: t[1], size: 48 }), shape: eN.NF.SQUIRCLE },
                    }
                  : { frontIcon: { icon: (0, p.jsx)(X.$, { guild: t[0], size: 48 }), shape: eN.NF.SQUIRCLE } };
        },
    },
    C5 = (0, o.AK)(u.X.PROFILE_PRIVACY_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: function () {
            let e = C6();
            if (0 === e.length) return g.intl.format(g.t.QJIJ5p, {});
            let t = H.A.getGuild(e[0]),
                i = t?.name ?? "",
                n = e.length - 1;
            return 0 === n
                ? g.intl.format(g.t["T+8J4A"], { guildName: i })
                : g.intl.format(g.t["3JyODQ"], { guildName: i, count: n });
        },
        useTrailingDecoration: function () {
            return C4;
        },
        destinationKey: u.X.ACTIVITY_PRIVACY_PANEL,
    }),
    C7 = (0, o.gN)(u.X.PROFILE_PRIVACY_RELATED_SETTINGS, { buildLayout: () => [C5] }),
    C8 = (0, o.Qx)(u.X.PROFILE_PRIVACY_SETTING, {
        useTitle: () => g.intl.string(g.t.Qnf32C),
        useOptions: () => [
            { name: g.intl.string(g.t.Boxc8R), desc: g.intl.string(g.t["nLj+nc"]), value: N.KP.FRIENDS_AND_ALL_GUILDS },
            { name: g.intl.string(g.t.YOIKBt), desc: g.intl.string(g.t.y0JZ4s), value: N.KP.FRIENDS_AND_SMALL_GUILDS },
            { name: g.intl.string(g.t.u0nlJv), desc: g.intl.string(g.t["4jnKHu"]), value: N.KP.FRIENDS_ONLY },
        ],
        useValue: c.KP.useSetting,
        setValue: function (e) {
            let t = c.KP.getSetting();
            if ((c.KP.updateSetting(e), !(0, x.W1)("ProfilePrivacySetting"))) return;
            let n = (0, C.gS)(t, e);
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
    C9 = (0, o.zZ)(u.X.PROFILE_PRIVACY_CATEGORY, {
        usePredicate: () => (0, x.lX)("ProfilePrivacyCategory"),
        useTitle: () => g.intl.string(g.t.ul884f),
        useSubtitle: () => g.intl.string(g.t.J0SFL2),
        buildLayout: () => [C8, C7],
    });
var Ie = i(814278),
    It = i(936388),
    Ii = i(714763);
let In = (0, o.zD)(u.X.PERSISTENT_VERIFICATION_CODES_SETTING, {
    useTitle: () => g.intl.string(g.t["opi/XK"]),
    useSubtitle: () => g.intl.format(g.t["/T+ZlP"], { helpArticle: (0, Ie.Lu)() }),
    useValue: function () {
        return (0, O.bG)([Ii.A], () => Ii.A.getPersistentCodesEnabled());
    },
    setValue: function (e) {
        It.A.updatePersistentCodesEnabled(e);
    },
});
var Is = i(787392);
function Il() {
    return (0, O.yK)([Is.A], () => Is.A.getUserIds());
}
var Ir = i(803306),
    Ia = i(966327),
    Io = i(146003);
function Iu(e) {
    let { userId: t, count: i } = e,
        { analyticsLocations: n } = (0, nU.Ay)(),
        s = (0, O.bG)([t3.default], () => t3.default.getUser(t)),
        l = xU.Ay.getFormattedName(s),
        r = f.useCallback(() => {
            (0, Ie.kj)(t);
        }, [t]),
        a = f.useCallback(() => (0, EG.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: n }), [t, n]);
    return (
        f.useEffect(() => {
            (0, Ir.wz)(t);
        }, [t]),
        (0, p.jsxs)("div", {
            className: Io.uW,
            children: [
                null != s && (0, p.jsx)(Ia.A, { className: Io.my, user: s, size: iK._3.SIZE_40 }),
                (0, p.jsxs)("div", {
                    className: Io.Qq,
                    children: [
                        (0, p.jsx)(M.D, {
                            className: Io.Xh,
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
                (0, p.jsx)(M.D, { onClick: r, className: Io.Qz, children: (0, p.jsx)(lf.u, { size: "xs" }) }),
            ],
        })
    );
}
function Id(e) {
    let { className: t, userId: i, verification: n, index: s } = e,
        l = (0, Ie.tC)(n.timestamp),
        r = f.useCallback(() => {
            (0, Ie.W0)(i, n.verifiedKey);
        }, [n.verifiedKey, i]);
    return (0, p.jsxs)("div", {
        className: t,
        children: [
            (0, p.jsxs)("div", {
                className: Io.Qq,
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
                className: Io.Kk,
                onClick: r,
                children: (0, p.jsx)(c0.P, { size: "md", color: w.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function Ic(e) {
    let { userId: t } = e,
        i = (0, O.yK)([Is.A], () =>
            eR()(Is.A.getUserVerifiedKeys(t))
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
            (0, p.jsx)(Iu, { userId: t, count: i.length }),
            i.map((e, n) =>
                (0, p.jsxs)(
                    f.Fragment,
                    {
                        children: [
                            (0, p.jsx)(Id, { className: Io.nM, userId: t, index: n, verification: e }),
                            n !== i.length - 1 && (0, p.jsx)("div", { className: Io.yF }),
                        ],
                    },
                    `${n}-${e.timestamp}`,
                ),
            ),
        ],
    });
}
var Ig = i(623161);
let Im = (0, o.E2)(u.X.USERS_VERIFIED_KEYS_LIST_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t["5b3FNI"])],
        usePredicate: function () {
            let e = Il();
            return null != e && e.length > 0;
        },
        Component: function () {
            let e = Il();
            return (0, p.jsxs)(_a.h, {
                children: [
                    (0, p.jsx)(_a._, {
                        header: g.intl.string(g.t["5b3FNI"]),
                        description: g.intl.format(g.t.jrTSWU, { helpArticle: (0, Ie.dc)() }),
                    }),
                    e.map((e) => (0, p.jsx)("div", { className: Ig.A, children: (0, p.jsx)(Ic, { userId: e }) }, e)),
                ],
            });
        },
    }),
    IA = (0, o.zZ)(u.X.VOICE_SECURITY_CATEGORY, {
        useTitle: () => ((0, iz.ri)("VoiceSecurityCategory") ? g.intl.string(g.t.bTwjaz) : g.intl.string(g.t.xVk85F)),
        useInlineNotice: function () {
            let e = (0, iz.ri)("VoiceSecurityCategory");
            return f.useMemo(
                () =>
                    e
                        ? null
                        : {
                              type: eN.lT.INLINE_NOTICE,
                              noticeType: "info",
                              useText: () => g.intl.format(g.t["/6sFWa"], { helpArticle: (0, Ie.aW)() }),
                          },
                [e],
            );
        },
        usePredicate: () => (0, ev.isDesktop)(),
        buildLayout: () => [In, Im],
    }),
    Ih = (0, o.t_)(u.X.DATA_AND_PRIVACY_PANEL, {
        useTitle: () => g.intl.string(g.t.OAuOHD),
        buildLayout: () => ((0, iz.SB)("DataAndPrivacyPanel") ? [C3, C9, IA] : [C3, C9, CY, IA]),
    }),
    IE = (0, o.i4)(u.X.DATA_AND_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.OAuOHD),
        icon: CG.m,
        buildLayout: () => [Ih],
    });
var Ix = i(782603),
    IT = i(899847),
    IS = i(695515),
    Ip = i(936926);
let If = (0, o.Hn)(u.X.MOBILE_NOTIFICATION_DELAY, {
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
    IN = (0, o.zD)(u.X.TEXT_TO_SPEECH_COMMAND, {
        useTitle: () => g.intl.string(g.t["btbS+Z"]),
        useSubtitle: () =>
            g.intl.format(g.t.Q5crhR, { onClick: () => (0, ej.openUserSettings)(u.X.TTS_PLAYBACK_RATE) }),
        useValue: c.on.useSetting,
        setValue: c.on.updateSetting,
    }),
    I_ = (0, o.Qx)(u.X.TEXT_TO_SPEECH_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.JZxxGx),
        useSubtitle: () => g.intl.string(g.t.HDLtJl),
        useValue: () => (0, O.bG)([uc.A], () => uc.A.getTTSType()),
        setValue: (e) => uE.default.setTTSType(e),
        useOptions: () => [
            { name: g.intl.string(g.t.B1AGeJ), value: q.aVn.ALL_CHANNELS },
            { name: g.intl.string(g.t.uzZg9e), value: q.aVn.SELECTED_CHANNEL },
            { name: g.intl.string(g.t.DYO5Oi), value: q.aVn.NEVER },
        ],
        usePredicate: () => i7.$j,
    }),
    IC = u.X.NOTIFICATIONS_ADVANCED_ACCORDION,
    II = (0, o.bd)(IC, {
        useTitle: (e) => (e ? g.intl.string(g.t.RyimDk) : g.intl.string(g.t.CUICbO)),
        useCollapsedSubtitle: function () {
            return oa(IC, {
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
        buildLayout: () => [If, IN, I_],
    }),
    Ib = (0, o.zZ)(u.X.NOTIFICATIONS_ADVANCED_CATEGORY, {
        useTitle: () => g.intl.string(g.t["31DySj"]),
        buildLayout: () => [II],
    }),
    Iv = (0, o.zD)(u.X.ENABLE_UNREAD_MESSAGE_BADGE, {
        useTitle: () => g.intl.string(g.t.VH8AIJ),
        useSubtitle: () => g.intl.string(g.t["9K4qwX"]),
        useValue: () => (0, O.bG)([uc.A], () => !uc.A.getDisableUnreadBadge()),
        setValue: (e) => uE.default.setDisableUnreadBadge(!e),
    }),
    Ij = (0, o.zZ)(u.X.NOTIFICATIONS_BADGES_CATEGORY, {
        useTitle: () => g.intl.string(g.t.l6w3Vj),
        buildLayout: () => [Iv],
    });
var Iy = i(100406),
    IO = i(878460),
    IR = i(431144);
let IL = IR.px.map((e) =>
        (0, o.zD)(`${u.X.EMAIL_LIST_ITEM_PREFIX}${e.category}`, {
            useTitle: e.label,
            useSubtitle: e.subLabel,
            useValue: () =>
                ((e) => {
                    let { categories: t } = (0, O.cf)([IO.A], () => IO.A.getEmailSettings());
                    return !!t[e];
                })(e.category),
            setValue: (t) => (0, Iy.CA)(e.category, t),
        }),
    ),
    ID = (0, o.Tf)(u.X.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
        useTitle: () => g.intl.string(g.t.Ra9Pwk),
        useSubtitle: () => g.intl.string(g.t.iYjQ8X),
        useLabel: () => g.intl.string(g.t.KT1pBA),
        useDisabled: () => {
            let { categories: e } = (0, O.cf)([IO.A], () => IO.A.getEmailSettings());
            return IR.Zk.every((t) => !e[t]);
        },
        onClick: () => (0, Iy.NI)(),
        useVariant: () => "critical-secondary",
    }),
    IP = (0, o.zZ)(u.X.NOTIFICATIONS_EMAIL_CATEGORY, {
        useTitle: () => g.intl.string(g.t["w/qqKK"]),
        initialize: function () {
            let { initialized: e } = IO.A.getEmailSettings();
            e || (0, Iy.cR)();
        },
        buildLayout: () => [...IL, ID],
    }),
    IG = (0, o.zD)(u.X.DESKTOP_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t["/0WCll"]),
        useSubtitle: () => g.intl.string(g.t.wF9ih3),
        useValue: () => (0, O.bG)([uc.A], () => uc.A.getDesktopType()) !== q.nRU.NEVER,
        setValue: (e) => uE.default.setDesktopType(e ? q.nRU.ALL : q.nRU.NEVER),
    });
var IU = i(832712),
    IM = i(543465),
    IV = i(406535),
    Ik = i(790782);
let Iw = (0, o.zD)(u.X.EXPERIMENTAL_UNREADS, {
    useTitle: () => g.intl.string(g.t["k6m/si"]),
    useSubtitle: () => g.intl.string(g.t.LGynPs),
    useValue: () => (0, O.bG)([IM.Ay], () => IM.Ay.useNewNotifications),
    setValue: function (e) {
        IU.A.setAccountFlag(IV.i.USE_NEW_NOTIFICATIONS, e),
            e ||
                (hX.w.set("turnedOffNewNotifications", !0),
                Y.default.track(q.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: H.A.getGuildsArray().filter(
                        (e) => IM.Ay.resolveGuildUnreadSetting(e) === Ik.e.ONLY_MENTIONS,
                    ).length,
                }));
    },
    usePredicate: () =>
        (0, O.bG)(
            [t3.default, IM.Ay],
            () =>
                t3.default.getCurrentUser()?.isStaff() ||
                t3.default.getCurrentUser()?.isStaffPersonal() ||
                IM.Ay.useNewNotifications,
        ),
});
var IF = i(534654);
let IB = (0, o.zD)(u.X.SCREEN_DOWNTIME_REMINDER, {
    useTitle: () => g.intl.string(g.t.z9h8Ym),
    useSubtitle: () => g.intl.string(g.t.TummoQ),
    useValue: () => (0, O.bG)([uc.A], () => uc.A.screenDowntimeReminder),
    setValue: (e) => uE.default.setScreenDowntimeReminder(e),
    usePredicate: () => {
        let e = (0, Ip.Vh)({ location: "ScreenDowntimeReminderSetting" }),
            t = (0, IF.A)();
        return e && t;
    },
});
var Iz = i(70730);
let IY = (0, o.zD)(u.X.FRIEND_ANNIVERSARY_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.NjOMvh),
        usePersistentBadge: () => ({ badgeType: eN.Xi.BETA }),
        useValue: c.oz.useSetting,
        setValue: function (e) {
            c.oz.updateSetting(e),
                Y.default.track(q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: IV.Y.ACCOUNT,
                    friend_anniversary_notifications: e,
                });
        },
        useSearchTerms: () => [g.intl.string(g.t.hi4dSk)],
        usePredicate: () => {
            let { enabled: e, showDmPrompts: t } = Iz.u.getConfig({ location: "FriendAnniversaryNotifications" });
            return e && t;
        },
    }),
    IX = (0, E.mj)({
        kind: "user",
        name: "2026-03-friend-is-online-v3",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 } },
    }),
    IH = (0, o.zD)(u.X.FRIEND_ONLINE_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.sQQgFj),
        useValue: c.NR.useSetting,
        setValue: function (e) {
            c.NR.updateSetting(e),
                Y.default.track(q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: IV.Y.ACCOUNT,
                    friend_online_notifications: e,
                });
        },
        usePredicate: () => IX.useConfig({ location: "FriendOnlineNotifications" }).showSettingsToggle,
    }),
    IK = (0, E.mj)({
        name: "2026-03-game-update-notification",
        kind: "user",
        defaultConfig: { showToggle: !1 },
        variations: { 0: { showToggle: !1 }, 1: { showToggle: !0 } },
    });
var IW = i(275007);
let IZ = (0, o.zD)(u.X.GAME_UPDATE_NOTIFICATIONS, {
    useTitle: () => g.intl.string(IW.default["ZZIP+o"]),
    useValue: c.JV.useSetting,
    setValue: function (e) {
        c.JV.updateSetting(e),
            Y.default.track(q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                update_type: IV.Y.ACCOUNT,
                game_update_notifications: e,
            });
    },
    usePredicate: () => IK.useConfig({ location: "SettingsRendererConfig" }).showToggle,
});
var Iq = i(571524);
let IQ = (0, o.zD)(u.X.GDM_ALL_REACTION_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.nvkXtr),
        useValue: c.c3.useSetting,
        setValue: function (e) {
            c.c3.updateSetting(e),
                Y.default.track(q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: IV.Y.ACCOUNT,
                    gdm_all_reaction_notifications: e,
                });
        },
        usePredicate: function () {
            return (0, Iq.h)("GdmAllReactionNotification").showSettingsToggle;
        },
    }),
    IJ = (0, o.zD)(u.X.GO_LIVE_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.FSNIvs),
        useValue: c.Yh.useSetting,
        setValue: function (e) {
            c.Yh.updateSetting(e),
                Y.default.track(q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: IV.Y.ACCOUNT,
                    go_live_notifications: e,
                });
        },
    }),
    I$ = (0, E.mj)({
        kind: "user",
        name: "2026-01-profile-updates-notification",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 0: { showSettingsToggle: !1 }, 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 } },
    }),
    I0 = (0, o.zD)(u.X.PROFILE_UPDATES_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.xBLMhQ),
        useValue: c.T3.useSetting,
        setValue: function (e) {
            c.T3.updateSetting(e),
                Y.default.track(q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: IV.Y.ACCOUNT,
                    profile_updates_notifications: e,
                });
        },
        usePredicate: () => I$.useConfig({ location: "user_settings.ProfileUpdatesNotifications" }).showSettingsToggle,
    });
var I1 = i(815807);
let I2 = (0, o.Hn)(u.X.REACTION_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.Wxj9Hp),
        useOptions: () => [
            { id: "enabled", label: g.intl.string(g.t["9x/RtT"]), value: N.Tz.NOTIFICATIONS_ENABLED },
            { id: "only_dms", label: g.intl.string(g.t.fJAbQd), value: N.Tz.ONLY_DMS },
            { id: "disabled", label: g.intl.string(g.t["xu+UDU"]), value: N.Tz.NOTIFICATIONS_DISABLED },
        ],
        useValue: c.Zp.useSetting,
        setValue: (e) => (0, I1.n4)(e, c.Zp.getSetting()),
    }),
    I3 = (0, o.zD)(u.X.SERVER_TRENDING_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t["k51K1+"]),
        useValue: c.Qr.useSetting,
        setValue: function (e) {
            c.Qr.updateSetting(e),
                Y.default.track(q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: IV.Y.ACCOUNT,
                    server_trending_notifications: e,
                });
        },
        usePredicate: () => !1,
    }),
    I6 = (0, E.mj)({
        kind: "user",
        name: "2026-04-upcoming-server-event",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 }, 3: { showSettingsToggle: !0 } },
    }),
    I4 = (0, o.zD)(u.X.UPCOMING_SERVER_EVENT_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.G8NPz6),
        useValue: c.zS.useSetting,
        setValue: function (e) {
            c.zS.updateSetting(e),
                Y.default.track(q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: IV.Y.ACCOUNT,
                    upcoming_server_event_notifications: e,
                });
        },
        usePredicate: () => I6.useConfig({ location: "UpcomingServerEventNotifications" }).showSettingsToggle,
    }),
    I5 = (0, o.FW)(u.X.NOTIFICATION_SELECTION_FIELD_SET, {
        variant: "compact",
        useTitle: () => g.intl.string(g.t.FEVRDV),
        buildLayout: () => [IJ, IY, IH, I3, I4, IZ, I0, I2, IQ],
    }),
    I7 = (0, o.zD)(u.X.TASK_BAR_FLASHING, {
        useTitle: () => g.intl.string(g.t.xSmFQG),
        useSubtitle: () => g.intl.string(g.t.bd4j4x),
        useValue: () => (0, O.bG)([uc.A], () => uc.A.taskbarFlash),
        setValue: (e) => uE.default.setTaskbarFlash(e),
        usePredicate: () => (0, n9.uF)(),
    }),
    I8 = (0, o.zZ)(u.X.NOTIFICATIONS_OVERVIEW_CATEGORY, {
        useTitle: () => g.intl.string(g.t["/dp6yY"]),
        buildLayout: () => [IG, I7, I5, Iw, IB],
    });
var I9 = i(965957),
    be = i(312671),
    bt = i(235079);
let bi = (0, o.zD)(u.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let e = ug.A.useHolidaySoundpack();
        return null == e ? "" : g.intl.format(g.t["E/OyBr"], { soundpack: g.intl.string(e.soundpackLabel) });
    },
    useValue: function () {
        let e = (0, O.bG)([be.A], () => be.A.getSoundpack()),
            t = ug.A.useHolidaySoundpack();
        return e === t?.soundpack;
    },
    setValue: function (e) {
        let t = ug.A.getHolidaySoundpack();
        ty()(null != t, "predicate should fail if no soundpack is available"), (0, I9.p)(e ? t : bt.i.CLASSIC);
    },
    usePredicate: ug.A.useIsEligible,
});
var bn = i(970931);
let bs = {
        useTitle: () => g.intl.string(g.t.jD1qzM),
        sound: "message1",
        useDisabled: bn.kB,
        useDisabledMessage: () => ((0, bn.kB)() ? g.intl.string(g.t.cIRG0s) : void 0),
    },
    bl = { useTitle: () => g.intl.string(g.t.XBrJT6), sound: "call_ringing" },
    br = (0, o.zD)(u.X.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.TzjwV9),
        useSubtitle: () => g.intl.format(g.t.OOiGCM, { onClick: () => uS("message3") }),
        useValue: () =>
            (0, O.bG)([uc.A], () => uc.A.getNotifyMessagesInSelectedChannel() && !uc.A.getDisableAllSounds()),
        setValue: (e) => uE.default.setNotifyMessagesInSelectedChannel(e),
        useDisabled: () => (0, O.bG)([uc.A], () => uc.A.getDisableAllSounds()),
    }),
    ba = (0, o.zD)(u.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => g.intl.string(g.t["2ZhCOd"]),
        useSubtitle: () => g.intl.string(g.t.EAKdPr),
        useValue: () => (0, O.bG)([uc.A], () => uc.A.getDisableAllSounds()),
        setValue: (e) => uE.default.toggleDisableAllSounds(e),
    }),
    bo = (0, o.D1)(u.X.NOTIFICATION_SOUNDS_LIST, {
        initialize: function () {
            return () => {
                uT();
            };
        },
        buildLayout: () => [up(bs), br, up(bl), ba],
    }),
    bu = (0, o.AK)(u.X.NOTIFICATIONS_TO_VOICE_AND_VIDEO_SOUNDS_NAVIGATOR, {
        useSubtitle: () => g.intl.string(g.t["MMy+lm"]),
        useSearchTerms: () => [g.intl.string(g.t["MMy+lm"])],
        destinationKey: u.X.SOUNDS_CATEGORY,
    }),
    bd = (0, o.gN)(u.X.NOTIFICATIONS_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [bu] }),
    bc = (0, o.zZ)(u.X.NOTIFICATIONS_SOUNDS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.LweOYy),
        buildLayout: () => [bi, bo, bd],
    }),
    bg = (0, o.t_)(u.X.NOTIFICATIONS_PANEL, {
        useTitle: () => g.intl.string(g.t.HcoRu0),
        initialize: () => {
            !(0, Ip.Eq)({ location: "NotificationsPanel" }) ||
                null != IS.A.getAgeGroup() ||
                IS.A.isLoading() ||
                (IS.A.canRefetch() && IT.Ay.initialPageLoad());
        },
        buildLayout: () => [I8, bc, Ij, IP, Ib],
    }),
    bm = (0, o.i4)(u.X.NOTIFICATIONS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.HcoRu0),
        icon: Ix.X,
        buildLayout: () => [bg],
    }),
    bA = (0, o.WI)(u.X.USER_SECTION, {
        buildLayout: () => [
            fz,
            CP,
            IE,
            ...((0, iz.pC)("UserSection") ? [] : [fP]),
            fq,
            ...((0, iz.pC)("UserSection") ? [] : [S7]),
            _s,
            bm,
            Np,
        ],
    });
var bh = i(387758),
    bE = i(271866),
    bx = i(147964),
    bT = i(868511);
let bS = (0, o.zD)(u.X.APPLICATION_TEST_MODE, {
        useTitle: () => g.intl.string(g.t.erOqlh),
        useSubtitle: () => g.intl.string(g.t["52hMnD"]),
        usePredicate: c.Q_.useSetting,
        useValue: () => (0, O.bG)([bx.A], () => null != bx.A.testModeApplicationId),
        setValue: (e) => {
            e ? (0, _.openModal)((e) => (0, p.jsx)(bT.A, { ...e })) : bE.cL();
        },
    }),
    bp = (0, o.zD)(u.X.DEVELOPER_MODE, {
        useTitle: () => g.intl.string(g.t.ObIb1Q),
        useSubtitle: () => g.intl.format(g.t["CY6q/Q"], { apiDocsUrl: q.X7G.API_DOCS }),
        useValue: c.Q_.useSetting,
        setValue: c.Q_.updateSetting,
        usePredicate: () => cA.p5,
    }),
    bf = (0, o.zZ)(u.X.DEVELOPER_CATEGORY, { buildLayout: () => [bp, bS] }),
    bN = (0, o.t_)(u.X.DEVELOPER_PANEL, { useTitle: () => g.intl.string(g.t["0BRxRp"]), buildLayout: () => [bf] }),
    b_ = (0, o.i4)(u.X.DEVELOPER_SIDEBAR_ITEM, {
        icon: bh.G,
        useTitle: () => g.intl.string(g.t["0BRxRp"]),
        buildLayout: () => [bN],
    });
var bC = i(70688),
    bI = i(830215);
let bb = (0, o.i4)(u.X.LOGOUT_SIDEBAR_ITEM, {
        variant: "destructive",
        useTitle: () => g.intl.string(g.t["2jxGer"]),
        icon: bC.o,
        onClick: () => {
            (0, se.A)({
                title: g.intl.string(g.t["2jxGer"]),
                subtitle: g.intl.string(g.t.SUnWBB),
                confirmText: g.intl.string(g.t["2jxGer"]),
                onConfirm: () => {
                    bI.A.logout("settings");
                },
            });
        },
        buildLayout: () => [],
    }),
    bv = (0, o.WI)(u.X.UTILITY_SECTION, { buildLayout: () => [b_, bb] }),
    bj = (0, o.Hr)({ buildLayout: () => [T4, bA, hg, uJ, iB, Ey, bv], analyticsKey: "user_settings" });
