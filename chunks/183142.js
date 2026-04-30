i.d(t, { D: () => IQ });
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
let h = (0, o.zD)(u.X.ACTIVITY_PRIVACY_SETTING, {
        useTitle: () => g.intl.string(m.default.WhdCGP),
        useSubtitle: () => g.intl.string(m.default.UQ9RHJ),
        useValue: c.tz.useSetting,
        setValue: c.tz.updateSetting,
    }),
    A = (0, o.zZ)(u.X.ACTIVITY_PRIVACY_SHARING_CATEGORY, {
        useTitle: () => g.intl.string(g.t["6x5uWQ"]),
        useSearchTerms: () => [g.intl.string(g.t["8ka8li"])],
        buildLayout: () => [h],
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
    N = i(64700),
    f = i(873298),
    C = i(192308),
    _ = i(365258);
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
                !(0, x.W1)(t) && !T.getConfig({ location: t }).upsell)
            )
                return;
            let s = (0, _.g8)(n, e);
            if (null == s) return;
            let l = (0, _.Xc)(e);
            (0, C.openModalLazy)(async () => {
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
            numActivityRestrictedGuilds: h,
            numTotalGuilds: A,
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
                [m, h] = (0, N.useState)(() => Z[i](r, a)),
                A = m.map((e) => l[e.id]).filter(Boolean);
            return {
                guilds: "" === e ? A : A.filter((t) => t.name.toLowerCase().includes(e.toLowerCase())),
                sortOrder: i,
                searchQuery: e,
                setSortOrder: (e) => {
                    h(Z[e](r, a)), n(e);
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
        x = (0, N.useRef)(null),
        T = (0, N.useMemo)(
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
                                activity_restricted_guild_count: h,
                                total_guild_count: A,
                            }),
                                s("");
                        },
                        onFocus: () =>
                            Y.default.track(q.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_focused",
                                sort_order: l,
                                activity_restricted_guild_count: h,
                                total_guild_count: A,
                            }),
                        onBlur: () =>
                            Y.default.track(q.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_blurred",
                                sort_order: l,
                                activity_restricted_guild_count: h,
                                total_guild_count: A,
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
                                                                        activity_restricted_guild_count: h,
                                                                        total_guild_count: A,
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
        buildLayout: () => [A, b, ei, el, eu],
    }),
    ec = (0, o.i4)(u.X.ACTIVITY_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.Cq98yL),
        icon: d._,
        buildLayout: () => [ed],
    });
var eg = i(935399),
    em = i(625657),
    eh = i(534514),
    eA = i(821609),
    eE = i(404778),
    ex = i(554146),
    eT = i(131607),
    eS = i(843402),
    ep = i(589051),
    eN = i(592598),
    ef = i(933297),
    eC = i(351906),
    e_ = i(532624),
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
        n = e_.Ay.getOverlayKeybind(),
        s = e_.Ay.getOverlayChatKeybind();
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
    eB = i(890856),
    eF = i(481384);
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
let eX = (0, o.E2)(u.X.OVERLAY_BUG_REPORTER_SETTING, {
    Component: function () {
        return (0, p.jsx)(eY, {
            title: g.intl.string(g.t["z4/l+V"]),
            description: g.intl.string(g.t["3aZq/0"]),
            action: (0, p.jsx)(eA.$, {
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
    eQ = i(328153);
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
    e8 = i(137177),
    e7 = i(814925),
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
            (0, C.openModalLazy)(async () => {
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
                  action: (0, p.jsx)(eA.$, {
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
    th = i(311678),
    tA = i(320448);
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
        [l, r] = N.useState(!1);
    return (0, p.jsx)(th.N, {
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
                            : (0, p.jsx)(tA._, {
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
            [a, o] = N.useState(l),
            [u, d] = N.useState(s),
            [c, m] = N.useState(!1);
        N.useEffect(() => {
            o(l), d(s);
        }, [l, s]);
        let h = !(0, tm.supportsLegacy)(),
            A = !(0, tm.supportsOutOfProcess)(),
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
            S = h && A,
            f = !E && !x,
            C = !a && !E && u && !h,
            _ = !u && !x && a && !A,
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
                                    case A:
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
                    case f:
                        return [g.intl.string(g.t["9DUS5l"]), null];
                    case P:
                        return [g.intl.string(g.t.nQ9EdJ), null];
                    case C:
                    case _:
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
        let [k, B] = N.useMemo(
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
                  icon: (0, p.jsx)(e8.A, { game: t, pid: e?.pid, size: e8.M.MEDIUM }),
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
                  warning: (0, p.jsx)(td, { className: eF.Hh, game: e }),
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
                                      disabled: A,
                                      onChange: (e) => {
                                          e && !x
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
                                      disabled: h,
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
var tS = i(364522),
    tp = i(206885),
    tN = i(871633);
function tf(e) {
    let { game: t, gameApplication: i } = e,
        n = N.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        s = (0, O.bG)([eW.A], () => (null != i ? i : eW.A.getApplication(t?.id)), [i, t]);
    return (0, p.jsx)(e8.A, { game: s, pid: n, size: e8.M.SMALL });
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
                    (0, p.jsx)("div", { className: eF.Kz }),
                ],
            }),
        })
    );
}
let t_ = (0, o.E2)(u.X.OVERLAY_LEGACY_SETTING, {
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
                      className: eF.dA,
                      action: (0, p.jsxs)(p.Fragment, {
                          children: [
                              (0, p.jsx)(L.d, { checked: i, disabled: r, onChange: (e) => a(e) }),
                              tp.O && (0, p.jsx)("div", { className: eF.Kz }),
                          ],
                      }),
                  })
                : (0, p.jsxs)(tx, {
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
                          (0, p.jsx)(tS.Ip, {
                              className: eF.XG,
                              children: s.map((e, t) =>
                                  (0, p.jsx)(
                                      tC,
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
                      className: eF.dA,
                      action: (0, p.jsxs)(p.Fragment, {
                          children: [
                              (0, p.jsx)(L.d, { checked: i, disabled: s, onChange: (e) => a(e) }),
                              tp.O && (0, p.jsx)("div", { className: eF.Kz }),
                          ],
                      }),
                  })
                : (0, p.jsxs)(tx, {
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
                          (0, p.jsx)(tS.Ip, {
                              className: eF.XG,
                              children: l.map((e, t) =>
                                  (0, p.jsx)(
                                      tC,
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
        buildLayout: () => [tT, tI, t_, eX],
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
        let e = (0, O.bG)([e_.Ay], () => e_.Ay.getOverlayKeybind()),
            t = !(0, tm.supportsLegacy)(),
            i = !(0, tm.supportsOutOfProcess)(),
            [n, s] = (0, O.yK)([eQ.Ay], () => [eQ.Ay.canShowAdminWarning, eQ.Ay.getVisibleGame()], []),
            l = (0, to.NP)(),
            r = null != s && s.elevated && n && !l,
            a = !(0, e_.DV)(e?.shortcut ?? []);
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
    tB = (0, o.zZ)(u.X.OVERLAY_NOTIFICATIONS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.xOE5bA),
        buildLayout: () => [tw],
    }),
    tF = (0, o.Hn)(u.X.OVERLAY_VOICE_WIDGET_AVATAR_SIZE, {
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
    t8 = (0, o.zZ)(u.X.OVERLAY_VOICE_WIDGET_CATEGORY, {
        useTitle: () => g.intl.string(g.t.r1TZfh),
        buildLayout: () => [t5, tF, tz, tY, tq],
    });
var t7 = i(49999),
    t9 = i(192391);
function ie() {
    let [e, t] = (0, eT.kn)([ex.M.OVERLAY_OOP_SETTINGS_NUX], void 0, !0);
    return ((0, eg.Ay)(() => () => {
        t(t7.i.AUTO_DISMISS);
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
                                      (0, p.jsx)(eh.D, {
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
                              children: (0, p.jsx)(eA.$, {
                                  variant: "primary",
                                  text: g.intl.string(g.t.Q26diF),
                                  onClick: () => void t(t7.i.DISMISS),
                              }),
                          }),
                      ],
                  }),
                  (0, p.jsx)(eE.c, { className: t9.yF }),
              ],
          });
}
function it() {
    let e = (0, O.bG)([eC.A], () => eC.A.enabled),
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
                e_.Ay.addChangeListener(eG),
                eN.A.addChangeListener(eG),
                eb.default.addChangeListener(eG),
                eI.default.addChangeListener(eG),
                ev.isPlatformEmbedded && (0, eS.a2)(),
                () => {
                    e_.Ay.removeChangeListener(eG),
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
        buildLayout: () => [tb, tU, t8, tB],
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
    ih = i(414079),
    iA = i(29160),
    iE = i(650583),
    ix = i(402627),
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
        [m, h] = N.useState(!1),
        A = N.useMemo(
            () =>
                (0, tN.n1)(o)
                    ? r
                        ? o.gameName
                        : g.intl.formatToPlainString(g.t.G6BGdx, { subgameName: o.gameName })
                    : o.name,
            [o, r],
        ),
        [E, x] = N.useState(A ?? "???"),
        T = ew()(iT.tR, {
            [ix.LO]: !n,
            [ix.Rw]: n,
            [ix.FB]: null != o && n,
            [ix.xL]: r,
            [ix.fG]: null != l && l.length > 0,
        });
    function S() {
        null != l && l.length > 0 && d
            ? (0, C.openModalLazy)(async () => {
                  let { Modal: e } = await i.e("4823").then(i.bind(i, 158954));
                  return (t) =>
                      (0, p.jsx)(e, {
                          ...t,
                          title: g.intl.formatToPlainString(g.t.PZ4fKc, { platform: A }),
                          subtitle: g.intl.formatToPlainString(g.t.ZIQbfb, { platform: A }),
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
        _ = (null != a && a.id === c?.id) || f || (null != l && l.some((e) => e.id === c?.id));
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
                                          (0, p.jsx)("div", { className: ix.mO, children: A }),
                                          (0, p.jsx)(e0.m, {
                                              text: g.intl.string(g.t["4PJP5p"]),
                                              children: (0, p.jsx)(e7.A, {
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
                                    n || f
                                        ? (e = g.intl.string(g.t.VbV5dv))
                                        : null != i && "" !== i && (e = g.intl.format(g.t["gGeOE+"], { when: i })),
                                    (0, p.jsx)("div", {
                                        className: ix.GN,
                                        children: (0, p.jsx)(iA.A, {
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
                                              game_name: (0, tN.n1)(o) ? o.gameName : o.name,
                                          }),
                                              h(!0),
                                              (0, C.openModalLazy)(async () => {
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
                    (n && !s) || _
                        ? null
                        : (0, p.jsx)(ih.A, {
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
                            N.Fragment,
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
function iC() {
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
var i_ = i(818050);
function iI() {
    let e = (0, O.bG)([iu.A], () => iu.A.theme);
    return (0, p.jsxs)(ir.pp, {
        theme: e,
        className: i_.eT,
        children: [
            (0, p.jsx)(ir.G8, { darkSrc: i(839628), lightSrc: i(446404), width: 430, height: 250 }),
            (0, p.jsx)(ir.SG, { children: g.intl.string(g.t["1yiJwn"]) }),
        ],
    });
}
function ib() {
    let { gameHistory: e, robloxSubgameHistory: t, overrideExePaths: i } = iC();
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
            (0, p.jsx)(eE.c, { className: ew()(i_.Ot, i_.QB) }),
            (0, p.jsxs)("div", {
                className: ew()(iL.o, iT.xM),
                children: [
                    (0, p.jsx)(B.Q, { variant: "secondary", text: g.intl.string(g.t["ETE/oC"]), onClick: t }),
                    (0, p.jsx)(eA.$, {
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
            className: ew()(iG.a, i_.Gf),
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
            let { robloxSubgameHistory: e, overrideExePaths: t } = iC(),
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
    iB = (0, o.i4)(u.X.REGISTERED_GAMES_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.AVDyEj),
        icon: il._,
        usePredicate: ey.Pi,
        buildLayout: () => [iw],
    }),
    iF = (0, o.WI)(u.X.ACTIVITY_SECTION, {
        useTitle: () => g.intl.string(g.t.SmHCFf),
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
    i$ = i(585001);
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
var i3 = i(180807);
let i6 = (0, o.zD)(u.X.ENABLE_LEGACY_CHAT_INPUT, {
        useTitle: () => g.intl.string(g.t.TZ2hZH),
        useSubtitle: () => g.intl.string(g.t.Q7wgHc),
        useValue: () => c.D_.useSetting(),
        setValue: (e) => c.D_.updateSetting(e),
    }),
    i4 = (0, o.zD)(u.X.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS, {
        useTitle: () => g.intl.string(g.t.XYvMIX),
        useSubtitle: () => g.intl.string(g.t.T0rbtM),
        useValue: c._z.useSetting,
        setValue: c._z.updateSetting,
    });
var i5 = i(100767),
    i8 = i(106236),
    i7 = i(113494),
    i9 = i(782134),
    ne = i(54570),
    nt = i(8880),
    ni = i(75804);
let nn = eR().debounce((e) => {
    (0, ne.zU)(e);
}, 250);
function ns() {
    let [e, t] = N.useState(!1);
    return (
        (0, eg.l0)(() => (0, ne.pr)()),
        (0, p.jsx)(eA.$, {
            text: g.intl.string(g.t.SKNnqq),
            icon: e ? i7.E : i9.u,
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
let nl = (0, o.E2)(u.X.TTS_PLAYBACK_RATE, {
        useSearchTerms: () => [g.intl.string(g.t.lsW5Ev)],
        Component: function () {
            let e = (0, O.bG)([nt.A], () => nt.A.speechRate);
            return (0, p.jsxs)(R.B, {
                gap: 16,
                children: [
                    (0, p.jsx)(i8.A, {
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
        usePredicate: () => i5.$j,
    }),
    nr = (0, o.zZ)(u.X.AUDIO_AND_SCREEN_READER_CATEGORY, {
        useTitle: () => g.intl.string(g.t.XVR0Rb),
        buildLayout: () => [nl, i4, i6],
    }),
    na = (0, o.AK)(u.X.ACCESSIBILITY_TO_DISPLAY_NAVIGATOR, {
        useSubtitle: () => g.intl.string(g.t.aTfeGK),
        destinationKey: u.X.APPEARANCE_PANEL,
    }),
    no = (0, o.gN)(u.X.COLOR_AND_CONTRAST_RELATED_SETTINGS, { buildLayout: () => [na] });
var nu = i(955572);
let nd = (0, o.zD)(u.X.DESATURATE_CUSTOM_COLORS, {
    useTitle: () => g.intl.string(g.t.OCJg5f),
    useSubtitle: () => g.intl.string(g.t.HEO0s3),
    useValue: () => (0, O.bG)([iK.A], () => iK.A.desaturateUserColors),
    setValue: () => (0, nu.YV)(),
});
var nc = i(652525);
let ng = (0, o.zD)(u.X.ENABLE_CUSTOM_CURSOR, {
        useTitle: () => g.intl.string(g.t["+Isihb"]),
        useSubtitle: () => g.intl.string(g.t.nNZ1Tz),
        useValue: () => (0, O.bG)([iK.A], () => iK.A.enableCustomCursor),
        setValue: (e) => (0, nu.ts)(e),
        usePredicate: () => (0, nc.t)("EnableCustomCursorSetting"),
    }),
    nm = (0, o.zD)(u.X.ENABLE_SWITCH_ICONS, {
        useTitle: () => g.intl.string(g.t["S3z+pV"]),
        useSubtitle: () => g.intl.string(g.t["3QuI9+"]),
        useValue: () => (0, O.bG)([iK.A], () => iK.A.isSwitchIconsEnabled),
        setValue: (e) => (0, nu.Gm)(e),
        hasIcon: !0,
    }),
    nh = (0, o.zD)(u.X.HIGH_CONTRAST_MODE, {
        useTitle: () => g.intl.string(g.t.aZlePv),
        useSubtitle: () => g.intl.string(g.t["v2qF8+"]),
        useValue: () => (0, O.bG)([iK.A], () => iK.A.isHighContrastModeEnabled),
        setValue: (e) => (0, nu.uh)(e ? iK._.HIGH : iK._.DEFAULT),
        getDismissibleBadges: () => [
            { badgeType: ef.Xi.NEW, dismissibleContent: ex.M.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE },
        ],
    });
var nA = i(406360),
    nE = i(964404);
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
            return (0, nA.i)("HDRDynamicRangeSetting");
        },
        setValue: function (e) {
            (0, nu.FU)(e);
        },
        useValue: function () {
            return (0, O.bG)([nE.Ay], () => nE.Ay.hdrDynamicRange);
        },
        useSearchTerms: () => ["HDR", g.intl.string(g.t["O/Gjvn"])],
    }),
    nT = (0, o.Hn)(u.X.ROLE_STYLE, {
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
(0, o.Qx)(u.X.ROLE_STYLE, {
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
let nS = (0, o.sN)(u.X.SATURATION, {
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
    nN = i(502229);
let nf = (0, np.D)(() => ({ syncEnabled: null, updateTimeout: null })),
    nC = (0, o.zD)(u.X.SYNC_FORCED_COLORS, {
        useTitle: () => g.intl.string(g.t.cguiec),
        useSubtitle: () => g.intl.format(g.t.GwEVE2, { learnMoreLink: ta.A.getArticleURL(q.MVz.FORCED_COLORS) }),
        useValue: () => {
            let e = (0, O.bG)([iK.A], () => iK.A.syncForcedColors);
            return (
                (0, e5.Ay)(() => {
                    nf.setState({ syncEnabled: iK.A.syncForcedColors });
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
            if (e === iK.A.syncForcedColors) return void nf.setState({ syncEnabled: e });
            let i = setTimeout(() => {
                (0, nu.D3)(e), nf.setState({ updateTimeout: null });
            }, 150);
            nf.setState({ syncEnabled: e, updateTimeout: i });
        },
        usePredicate: () => (0, nN.D)(),
    }),
    n_ = (0, o.zZ)(u.X.COLOR_AND_CONTRAST_CATEGORY, {
        useTitle: () => g.intl.string(g.t.JqvyiY),
        buildLayout: () => [nS, nd, nh, ng, nC, nx, nT, nm, no],
    });
var nI = i(397438),
    nb = i(355097);
function nv(e) {
    return (0, O.bG)([nI.A], () =>
        (function (e) {
            switch (e) {
                case nb._A.REDUCED_MOTION:
                    return g.intl.format(g.t["1dT9V4"], {});
                case nb._A.REDUCED_MOTION_STICKERS:
                    return g.intl.string(g.t["2ExvRu"]);
                default:
                    return;
            }
        })(nI.A.getAppliedOverrideReasonKey(e)),
    );
}
let nj = (0, o.zD)(u.X.ANIMATE_EMOJIS, {
        useTitle: () => g.intl.string(g.t.iIaOlc),
        useSubtitle: () => nv("animateEmoji"),
        useValue: () => c.Sf.useSetting(),
        setValue: (e) => c.Sf.updateSetting(e),
    }),
    ny = (0, o.zD)(u.X.ANIMATE_GIFS, {
        useTitle: () => g.intl.string(g.t.wqsK7q),
        useSubtitle: () => nv("gifAutoPlay"),
        useValue: () => c.kt.useSetting(),
        setValue: (e) => c.kt.updateSetting(e),
    });
var nO = i(823894);
let nR = (0, o.Qx)(u.X.ANIMATE_STICKERS, {
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
    nL = (0, o.zD)(u.X.REDUCED_MOTION, {
        useTitle: () => g.intl.string(g.t.b3XBzg),
        useSubtitle: () => g.intl.format(g.t.XqvxJc, { helpdeskArticle: ta.A.getArticleURL(q.MVz.REDUCED_MOTION) }),
        useValue: () => (0, O.bG)([iK.A], () => iK.A.useReducedMotion),
        setValue: (e) => (0, nu.qz)(e ? "reduce" : "no-preference"),
    }),
    nD = (0, o.zD)(u.X.SYNC_REDUCED_MOTION, {
        useTitle: () => g.intl.string(g.t.oL55A6),
        useValue: () => (0, O.bG)([iK.A], () => "auto" === iK.A.rawPrefersReducedMotion),
        setValue: (e) => (0, nu.qz)(e ? "auto" : iK.A.systemPrefersReducedMotion),
    }),
    nP = (0, o.zZ)(u.X.MOTION_CATEGORY, {
        useTitle: () => g.intl.string(g.t.e3TR1b),
        buildLayout: () => [nL, nD, ny, nj, nR],
    });
var nG = i(688810),
    nU = i(259065),
    nM = i(864386);
let nV = (0, o.zD)(u.X.DISPLAY_NAME_STYLES, {
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
    nw = (0, o.sN)(u.X.APPEARANCE_FONT_SCALING, {
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
    nB = (0, o.zD)(u.X.UNDERLINE_LINKS, {
        useTitle: () => g.intl.string(g.t.OLZFB8),
        useSubtitle: () => g.intl.string(g.t.DIX3ke),
        useValue: () => (0, O.bG)([iK.A], () => iK.A.alwaysShowLinkDecorations),
        setValue: (e) => (0, nu.kI)(e),
    }),
    nF = (0, o.zZ)(u.X.TEXT_READABILITY_CATEGORY, {
        useTitle: () => g.intl.string(g.t["bxh/R7"]),
        buildLayout: () => [nw, nB, nV],
    }),
    nz = (0, o.Qx)(u.X.APPEARANCE_UI_DENSITY, {
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
    nY = "cozy",
    nX = "compact",
    nH = (0, o.Qx)(u.X.APPEARANCE_MESSAGE_DISPLAY_MODE, {
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
    nZ = (0, o.sN)(u.X.APPEARANCE_MESSAGE_GROUP_SPACING, {
        useTitle: () => g.intl.string(g.t.Q6lKkg),
        useSubtitle: () => g.intl.string(g.t.p7eUrb),
        markers: nK.qh,
        stickToMarkers: !0,
        minValue: nK.qh["0"],
        maxValue: nK.qh[nK.qh.length - 1],
        useDefaultValue: () => (c.hH.useSetting() ? nK.y5 : nK.ES),
        getInitialValue: () => {
            let e = iK.A.messageGroupSpacing,
                t = c.hH.getSetting();
            return null != e ? e : t ? nK.y5 : nK.ES;
        },
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
let nQ = (0, o.sN)(u.X.APPEARANCE_ZOOM, {
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
    nJ = (0, o.zZ)(u.X.VISUAL_DENSITY_CATEGORY, {
        useTitle: () => g.intl.string(g.t.VKYWk8),
        buildLayout: () => [nz, nH, nZ, nQ],
    }),
    n$ = (0, o.t_)(u.X.ACCESSIBILITY_PANEL, {
        useTitle: () => g.intl.string(g.t.G0neg7),
        buildLayout: () => [nF, nJ, n_, nP, nr],
        decoration: {
            type: ef.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                let e = c.hH.useSetting(),
                    t = c.jW.useSetting(),
                    i = N.useMemo(
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
                            (0, p.jsx)(eh.D, {
                                variant: "text-md/medium",
                                color: "text-muted",
                                className: i$.Vf,
                                children: g.intl.string(g.t.RC22qg),
                            }),
                            (0, p.jsxs)(tS.Ip, {
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
                                            (0, p.jsx)(eA.$, {
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
    n0 = (0, o.i4)(u.X.ACCESSIBILITY_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.G0neg7),
        icon: iz.c,
        useMenu: i3.A,
        buildLayout: () => [n$],
    });
var n1 = i(650809),
    n2 = i(636537),
    n3 = i(228366),
    n6 = i(74396),
    n4 = i(227542),
    n5 = i(55619),
    n8 = i(777666);
function n7() {
    return (0, p.jsx)(n8.JI, { text: g.intl.string(g.t.y2b7CA) });
}
var n9 = i(574381),
    se = i(314116),
    st = i(19575),
    si = i(208039);
let sn = (0, o.E2)(u.X.HARDWARE_ACCELERATION, {
    usePredicate: () => n9.Av && !(0, n9.cX)(),
    useSearchTerms: () => [g.intl.string(g.t["/HIxyY"]), g.intl.string(g.t.B0hqpb)],
    Component: function () {
        let [e] = N.useState(() => st.Ay.getEnableHardwareAcceleration()),
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
        useValue: () => (0, O.bG)([iK.A], () => iK.A.isSubmitButtonEnabled),
        setValue: () => (0, nu.Xt)(),
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
    sh = i(793943),
    sA = i(792656),
    sE = i(779733),
    sx = i(785007),
    sT = i(806932),
    sS = i(915089),
    sp = i(174197),
    sN = i(788868);
let sf = (0, o.E2)(u.X.APPEARANCE_IN_APP_ICON, {
    useSearchTerms: () => [g.intl.string(g.t.gnwxvT)],
    Component: function () {
        let e = (0, sS.GV)(),
            { ref: t, ...i } = (0, sx._u)({ orientation: "horizontal", labelledBy: e }),
            n = (0, O.bG)([sm.A], () => sm.A.isUpsellPreview);
        return (
            (0, eg.Ay)(() => {
                n &&
                    Y.default.track(q.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: sN.e.APP_ICON_UPSELL,
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
function sC() {
    (0, sh.nf)(sh.HP.APP_ICON), (0, sE.default)();
}
function s_() {
    return (0, p.jsx)(sA.A, {
        subscriptionTier: sN.pe.TIER_2,
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
            return N.useMemo(() => {
                let t = [];
                return (
                    t.push({
                        id: "preview-icon-button",
                        type: ef.UV.BUTTON,
                        text: g.intl.string(g.t["6acvnZ"]),
                        onClick: sC,
                    }),
                    e && t.push({ id: "upsell-button", type: ef.UV.STRONGLY_DISCOURAGED_CUSTOM, button: s_ }),
                    { type: ef.WX.BUTTON_GROUP, buttons: t }
                );
            }, [e]);
        },
        buildLayout: () => [sf],
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
    let { analyticsLocations: e } = (0, nG.Ay)(eM.A.USER_SETTINGS_FAVORITES),
        t = N.useCallback(() => {
            (0, sP.mv)("settings_page"), (0, sO.uh)(q.YYv), (0, sE.default)();
        }, []);
    return (0, p.jsx)(nG.f5, {
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
                    (0, p.jsx)(eA.$, { variant: "secondary", text: g.intl.string(sU.default["7WwLnr"]), onClick: t }),
                    (0, p.jsx)(sA.A, {
                        subscriptionTier: sN.pe.TIER_2,
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
                    return null != e && sR.Ay.isPremiumExactly(e, sN.PremiumTypes.TIER_2);
                }),
                i = (0, sG.DZ)(),
                n = N.useCallback(
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
    sB = (0, o.zD)(u.X.CHAT_INLINE_MEDIA_UPLOADS, {
        useTitle: () => g.intl.string(g.t.VP11No),
        useValue: c.X6.useSetting,
        setValue: c.X6.updateSetting,
    }),
    sF = (0, o.FW)(u.X.CHAT_INLINE_FIELD_SET, {
        useTitle: () => g.intl.string(g.t["9nyle0"]),
        buildLayout: () => [sw, sB],
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
            let e = (0, O.bG)([nE.Ay], () => nE.Ay.displayCompactAvatars);
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
        buildLayout: () => [sF, sz, sY, sK, sW, sH, sk, sv],
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
            return (0, O.bG)([eC.A], () => {
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
    s1 = (0, o.zD)(u.X.STREAMING_STREAMER_MODE, {
        useTitle: () => g.intl.string(g.t.TGNg6T),
        useSubtitle: () => g.intl.string(g.t["4nXLnE"]),
        useValue: function () {
            return (0, O.bG)([eC.A], () => {
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
            return (0, O.bG)([eC.A], () => eC.A.getSettings().disabledOverlayWidgets ?? s6);
        },
        setValue: (e) => n5.A.update({ disabledOverlayWidgets: e }),
        closeOnSelect: !1,
        wrapTags: !0,
    }),
    s5 = (0, o.zD)(u.X.STREAMER_MODE_HIDE_PERSONAL_INFORMATION, {
        useTitle: () => g.intl.string(g.t.LSBUGR),
        useValue: () =>
            (0, O.bG)([eC.A], () => {
                let { hidePersonalInformation: e } = eC.A.getSettings();
                return e;
            }),
        setValue: (e) => n5.A.update({ hidePersonalInformation: e }),
    }),
    s8 = (0, o.zD)(u.X.STREAMER_MODE_HIDE_INVITE_LINKS, {
        useTitle: () => g.intl.string(g.t.uWBOri),
        useValue: () =>
            (0, O.bG)([eC.A], () => {
                let { hideInstantInvites: e } = eC.A.getSettings();
                return e;
            }),
        setValue: (e) => n5.A.update({ hideInstantInvites: e }),
    }),
    s7 = (0, o.zD)(u.X.STREAMER_MODE_DISABLE_SOUNDS, {
        useTitle: () => g.intl.string(g.t.OrqYDP),
        useValue: () =>
            (0, O.bG)([eC.A], () => {
                let { disableSounds: e } = eC.A.getSettings();
                return e;
            }),
        setValue: (e) => n5.A.update({ disableSounds: e }),
    }),
    s9 = (0, o.zD)(u.X.STREAMER_MODE_DISABLE_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.sUAbLd),
        useValue: () =>
            (0, O.bG)([eC.A], () => {
                let { disableNotifications: e } = eC.A.getSettings();
                return e;
            }),
        setValue: (e) => n5.A.update({ disableNotifications: e }),
    }),
    le = (0, o.zD)(u.X.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE, {
        useTitle: () => g.intl.string(g.t["iA81+a"]),
        useSubtitle: () => g.intl.string(g.t.P4vj0h),
        useValue: () =>
            (0, O.bG)([eC.A], () => {
                let { enableContentProtection: e } = eC.A.getSettings();
                return e;
            }),
        setValue: (e) => n5.A.update({ enableContentProtection: e }),
        usePredicate: () => s2.A?.window?.supportsContentProtection?.() ?? !1,
    }),
    lt = (0, o.FW)(u.X.STREAMER_MODE_OPTIONS_LIST, {
        variant: "compact",
        useTitle: () => g.intl.string(g.t.xYhOEh),
        buildLayout: () => [s5, s8, s7, s9, le, s4],
    }),
    li = (0, o.zZ)(u.X.STREAMER_MODE_CATEGORY, {
        useTitle: () => g.intl.string(g.t.S5GfOW),
        buildLayout: () => [s1, s0, lt],
    });
var ln = i(47671),
    ls = i(884210);
let ll = (0, o.zD)(u.X.SYNC_PROFILE_THEMES, {
    useTitle: () => g.intl.string(g.t.C00w4l),
    useValue: () => (0, O.bG)([iK.A], () => iK.A.syncProfileThemeWithUserTheme),
    setValue: () => (0, nu.M1)(),
});
var lr = i(284016);
let la = (0, o.zD)(u.X.APPEARANCE_SYNC_THEME, {
    useTitle: () => g.intl.string(g.t["/B+kEV"]),
    useSearchTerms: () => [g.intl.string(g.t.Ksh3ik)],
    useValue: function () {
        return (0, O.bG)([lr.A], () => !1 !== lr.A.shouldSync("appearance"));
    },
    setValue: function (e) {
        var t;
        let i = iu.A.theme,
            n = ln.A.gradientPreset?.id ?? null,
            s = c.eh.getSetting()?.customUserThemeSettings != null;
        (t = q.HAw.SYNC_ACROSS_CLIENTS_TOGGLED),
            n3.h.dispatch({
                type: "TRACK",
                event: t,
                properties: { is_sync_enabled: e, base_theme: i, client_theme: n, has_custom_theme: s },
            }),
            sX.Ay.setShouldSyncAppearanceSettings(e);
    },
});
var lo = i(500158);
let lu = (0, o.AK)(u.X.APPEARANCE_THEME_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => g.intl.string(g.t.nhVQDJ),
        useSearchTerms: () => [g.intl.string(g.t.nhVQDJ)],
        destinationKey: u.X.ACCESSIBILITY_PANEL,
    }),
    ld = (0, o.gN)(u.X.APPEARANCE_THEME_RELATED_SETTINGS, { buildLayout: () => [lu] }),
    lc = (0, o.zZ)(u.X.APPEARANCE_THEME_CATEGORY, {
        useTitle: () => g.intl.string(g.t.Ksh3ik),
        useInlineNotice: function () {
            return (0, O.bG)([iK.A], () => iK.A.useForcedColors)
                ? {
                      type: ef.lT.INLINE_NOTICE,
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
            return (0, O.bG)([ln.A, iK.A], () => iK.A.useForcedColors || ln.A.isPreview)
                ? null
                : {
                      type: ef.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "open-client-themes-button",
                              type: ef.UV.BUTTON,
                              text: g.intl.string(g.t["E+COuA"]),
                              onClick: ls.J3,
                          },
                      ],
                  };
        },
        buildLayout: () => [lo.k, la, ll, ld],
    }),
    lg = [
        {
            badgeType: ef.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: ex.M.CLIENT_THEMES_SETTINGS_BADGE,
            StronglyDiscouragedCustomComponent: n7,
        },
        {
            badgeType: ef.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: ex.M.DEKSTOP_CUSTOM_APP_ICON_BADGE,
            StronglyDiscouragedCustomComponent: n7,
        },
        { badgeType: ef.Xi.NEW, dismissibleContent: ex.M.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE },
    ],
    lm = (0, o.t_)(u.X.APPEARANCE_PANEL, {
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
        buildLayout: () => [lc, sI, sZ, sg, s$, li, sr],
    }),
    lh = [
        ...lg,
        {
            badgeType: ef.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: ex.M.FAVORITES_GUILD_NEW_BADGE,
            StronglyDiscouragedCustomComponent: n7,
        },
    ],
    lA = (0, o.i4)(u.X.APPEARANCE_SIDEBAR_ITEM, {
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
                    ((i = (0, O.bG)([eC.A], () => eC.A.enabled, [])),
                    (0, p.jsx)(U.sL, {
                        id: "streamer-mode-toggle",
                        label: g.intl.string(g.t.p9ZAJZ),
                        action: () => {
                            n5.A.setEnabled(!i);
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
        buildLayout: () => [lm],
    });
var lE = i(410767),
    lx = i(691885),
    lT = i(408278),
    lS = i(241326),
    lp = i(885574),
    lN = i(475358),
    lf = i(28647),
    lC = i(337371),
    l_ = i(734066),
    lI = i(880144),
    lb = i(614455),
    lv = i(695366),
    lj = i(51760),
    ly = i(364094);
function lO(e) {
    let { game: t, application: i } = e;
    return null == t || null == i
        ? (0, p.jsx)("div", {
              className: ly.zc,
              children: (0, p.jsx)(lv.E, { size: "sm", color: w.A.colors.TEXT_FEEDBACK_WARNING }),
          })
        : (0, p.jsxs)("div", {
              className: ly.nt,
              children: [
                  (0, p.jsx)(e8.A, { game: i, pid: t.pid, size: e8.M.MEDIUM }),
                  (0, p.jsx)("div", {
                      className: ly.Am,
                      children: (0, p.jsx)(lv.E, { size: "sm", color: w.A.colors.TEXT_FEEDBACK_WARNING }),
                  }),
              ],
          });
}
function lR(e) {
    let t = (0, O.bG)([lj.Ay], () => lj.Ay.getMode()),
        { runningGame: i, runningGameApplication: n } = e$();
    null == i || i.elevated || ((i = void 0), (n = void 0));
    let s = (0, to.NP)(),
        l = s && null != i && t === q.TBI.PUSH_TO_TALK;
    return { canPrompt: "voice" === e ? l : s, runningGame: i, runningGameApplication: n };
}
function lL(e) {
    let { className: t, sourcePage: i } = e,
        { canPrompt: n, runningGame: s, runningGameApplication: l } = lR(i);
    return n
        ? (0, p.jsxs)("div", {
              className: ew()(ly.kL, t),
              children: [
                  (0, p.jsx)(lO, { game: s, application: l }),
                  (0, p.jsxs)("div", {
                      className: ly.FS,
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
                  (0, p.jsx)(eA.$, {
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
var lD = i(189213),
    lP = i(292666),
    lG = i(320989),
    lU = i(978263);
let lM = [];
var lV = i(235986),
    lk = i(820785),
    lw = i(734057),
    lB = i(808728),
    lF = i(967198),
    lz = i(926140),
    lY = i(194152);
function lX() {}
let lH = [lz.rD.VOICE_CHANNEL];
function lK(e) {
    e.setOptions({ voiceChannelGuildFilter: null }), e.setLimit(1 / 0);
}
function lW() {
    return (0, p.jsx)("div", {
        className: lY.i1,
        children: (0, p.jsx)(V.E, {
            variant: "text-md/medium",
            color: "text-muted",
            className: lY.GN,
            children: g.intl.string(g.t.zHjCd1),
        }),
    });
}
function lZ(e) {
    let { keybind: t } = e,
        i = N.useRef(t);
    N.useEffect(() => {
        i.current = t;
    });
    let [n, s] = N.useState(t.params?.channelId ?? void 0),
        l = N.useCallback(() => {
            (0, C.openModalLazy)(
                async () => (e) =>
                    (0, p.jsx)(lq, {
                        ...e,
                        onSelect: (e) => {
                            s(e), tO.A.setKeybind({ ...i.current, params: { channelId: e } });
                        },
                    }),
            );
        }, []);
    return (0, p.jsx)("div", {
        className: lY.a8,
        children: (0, p.jsx)(sy.D, {
            label: g.intl.string(g.t.q4JpM8),
            children: (0, p.jsxs)(lV.A, {
                align: lV.A.Align.STRETCH,
                children: [
                    (0, p.jsx)("div", { className: lY.$X, children: (0, p.jsx)(lQ, { channelId: n }) }),
                    (0, p.jsx)(lV.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, p.jsx)(eA.$, { variant: "primary", text: g.intl.string(g.t.Dm8O4e), onClick: l }),
                    }),
                ],
            }),
        }),
    });
}
function lq(e) {
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
                [a, o] = N.useState(lM),
                u = N.useCallback((e, t) => {
                    "" === (t = t.trim()).trim() ? o(lM) : o(e);
                }, []);
            N.useEffect(
                () =>
                    lG.A.addRouteChangeListener(() => {
                        r("");
                    }),
                [],
            );
            let [d] = N.useState(() => new lU.A(u, i, void 0, n));
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
        })({ visible: !0, autocompleterResultTypes: lH, autocompleterBeforeCreateSearchContext: lK }),
        c =
            ((t = "" !== o),
            (i = (0, O.yK)([lB.Ay, lw.A, lF.A], () => {
                let e = lF.A.getGuildId();
                if (t || null == e) return [];
                let i = [];
                for (let t of lB.Ay.getVocalChannelIds(e)) {
                    let e = lw.A.getChannel(t);
                    null != e && i.push(e);
                }
                return i;
            }, [t])),
            t ? null : i),
        { focusedIndex: m, setFocusedIndex: h } = (function (e) {
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
    let A = null != c ? c.length : d.length,
        E = (() => {
            if (null != c) return c[m]?.id;
            let e = d[m];
            if (e?.type === lz.rD.VOICE_CHANNEL) return e.record.id;
        })(),
        x =
            A > 0 || "" === o
                ? {
                      innerId: r,
                      innerRole: "listbox",
                      innerAriaLabel: g.intl.string(g.t["+N3fW7"]),
                      ref: a,
                      sections: [A],
                      renderRow: function (e) {
                          let { row: t } = e,
                              i = (() => {
                                  if (null != c) return c[t];
                                  let e = d[t];
                                  if (e?.type === lz.rD.VOICE_CHANNEL) return e.record;
                              })();
                          if (null == i) return null;
                          let n = null != i.parent_id ? lw.A.getChannel(i.parent_id) : void 0,
                              r = H.A.getGuild(i.guild_id);
                          return (0, p.jsx)(
                              lk.c3,
                              {
                                  id: i.id,
                                  channel: i,
                                  category: n,
                                  focused: m === t,
                                  onMouseEnter: () => h(t),
                                  onClick: () => {
                                      l(i.id), s();
                                  },
                                  onFocus: () => h(t),
                                  children:
                                      null != r ? (0, p.jsx)("div", { className: lY.J5, children: r.name }) : null,
                              },
                              i.id,
                          );
                      },
                      sectionHeight: 0,
                      rowHeight: 34,
                  }
                : { sections: [1], renderRow: () => (0, p.jsx)(lW, {}), sectionHeight: 0, rowHeight: 52 };
    return (0, p.jsx)(lD.Modal, {
        transitionState: n,
        onClose: s,
        title: g.intl.string(g.t.Dm8O4e),
        subtitle: g.intl.string(g.t.q4JpM8),
        actions: void 0,
        input: (0, p.jsx)(lP.k, {
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
                                if (e?.type === lz.rD.VOICE_CHANNEL) return e.record;
                            })();
                            null == e ? l(void 0) : l(e.id), s();
                            break;
                        }
                        case "arrowup":
                            0 === m ? h(A - 1) : h(m - 1);
                            break;
                        case "arrowdown":
                            m >= A - 1 ? h(0) : h(m + 1);
                    }
            },
            placeholder: g.intl.string(g.t.tG0r7g),
            role: "combobox",
            "aria-controls": r,
            "aria-expanded": A > 0,
            "aria-activedescendant": A > 0 && null != E ? E : void 0,
            "aria-autocomplete": "list",
            spellCheck: !1,
            autoFocus: !0,
        }),
        listProps: x,
    });
}
function lQ(e) {
    let { channelId: t } = e,
        {
            channel: i,
            category: n,
            guild: s,
        } = (0, O.cf)([lw.A, H.A], () => {
            let e = null != t ? lw.A.getChannel(t) : void 0;
            return null != e
                ? {
                      channel: e,
                      category: null != e.parent_id ? lw.A.getChannel(e.parent_id) : void 0,
                      guild: null != e.guild_id ? H.A.getGuild(e.guild_id) : void 0,
                  }
                : { channel: void 0, category: void 0, guild: void 0 };
        });
    return null == i
        ? (0, p.jsx)(V.E, {
              variant: "text-md/medium",
              color: "text-muted",
              className: lY.GN,
              children: g.intl.string(g.t["/fYIK7"]),
          })
        : (0, p.jsx)(lk.c3, {
              channel: i,
              id: i.id,
              category: n,
              onClick: lX,
              onFocus: lX,
              onMouseEnter: lX,
              focused: !1,
              children: null != s ? (0, p.jsx)("div", { className: lY.J5, children: s.name }) : null,
          });
}
function lJ(e) {
    let { className: t, children: i } = e;
    return (0, p.jsx)("div", { className: t, children: (0, p.jsx)(R.B, { gap: 16, children: i }) });
}
var l$ = i(802247);
function l0(e) {
    let { children: t } = e;
    return t([lC.Q_.MESSAGE, lC.Q_.NAVIGATION, lC.Q_.DND, lC.Q_.CHAT, lC.Q_.VOICE_AND_VIDEO, lC.Q_.MISCELLANEOUS]);
}
class l1 extends N.PureComponent {
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
                    className: l$.qD,
                    children: this.props.keybindDescriptions[e.action],
                });
    }
    render() {
        let { managed: e, enabled: t } = this.props.keybind;
        return (0, p.jsxs)("div", {
            className: l$.YI,
            children: [
                (0, p.jsxs)("div", {
                    className: l$.PO,
                    children: [
                        (0, p.jsx)("div", {
                            className: l$.AS,
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
                            className: l$.AS,
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
                                className: l$.d9,
                                children: (0, p.jsx)(lT.K, {
                                    variant: "icon-only",
                                    onClick: this.handleDeleteKeybind,
                                    icon: lS.u,
                                    "aria-label": g.intl.string(g.t.qEHmmB),
                                }),
                            }),
                        (0, p.jsx)("div", {
                            className: l$.ZW,
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
        return e === q.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, p.jsx)(lZ, { keybind: this.props.keybind }) : void 0;
    }
}
class l2 extends N.PureComponent {
    get keybindActionTypes() {
        let {
                overlaySupported: e,
                canGoLive: t,
                allowSoundboard: i,
                enableClips: n,
                enableScreenshotKeybind: s,
            } = this.props,
            l = [
                { id: "unassigned", value: q.hCu.UNASSIGNED, label: g.intl.string(g.t["0Uh579"]) },
                { id: "push-to-talk", value: q.hCu.PUSH_TO_TALK, label: g.intl.string(g.t.Y5lgTP) },
                { id: "push-to-talk-priority", value: q.hCu.PUSH_TO_TALK_PRIORITY, label: g.intl.string(g.t.DkSwJ2) },
                { id: "push-to-mute", value: q.hCu.PUSH_TO_MUTE, label: g.intl.string(g.t.hSCRqd) },
                { id: "vad-priority", value: q.hCu.VAD_PRIORITY, label: g.intl.string(g.t["49d6Nd"]) },
                { id: "toggle-mute", value: q.hCu.TOGGLE_MUTE, label: g.intl.string(g.t.PlkYKD) },
                { id: "toggle-deafen", value: q.hCu.TOGGLE_DEAFEN, label: g.intl.string(g.t.NvGq1K) },
                { id: "toggle-voice-mode", value: q.hCu.TOGGLE_VOICE_MODE, label: g.intl.string(g.t.Wa5H9S) },
                { id: "toggle-streamer-mode", value: q.hCu.TOGGLE_STREAMER_MODE, label: g.intl.string(g.t.BK0Ncc) },
                { id: "toggle-camera", value: q.hCu.TOGGLE_CAMERA, label: g.intl.string(g.t.hf8JVT) },
            ];
        return (
            e &&
                (l.push({
                    id: "toggle-overlay-input-lock",
                    value: q.hCu.TOGGLE_OVERLAY_INPUT_LOCK,
                    label: g.intl.string(g.t.VsAZcC),
                }),
                l.push({
                    id: "activate-overlay-region-text-widget",
                    value: q.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                    label: g.intl.string(g.t.hurHWo),
                })),
            t &&
                ((0, ev.isWindows)() || lj.Ay.getUseSystemScreensharePicker()) &&
                l.push({
                    id: "toggle-go-live-streaming",
                    value: q.hCu.TOGGLE_GO_LIVE_STREAMING,
                    label: g.intl.string(g.t.ybdjJD),
                }),
            (0, ev.isDesktop)() &&
                (l.push(
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
                i &&
                    l.push(
                        { id: "soundboard", value: q.hCu.SOUNDBOARD, label: g.intl.string(g.t.yPH4xm) },
                        { id: "soundboard-hold", value: q.hCu.SOUNDBOARD_HOLD, label: g.intl.string(g.t["1xFbP/"]) },
                    ),
                n &&
                    (l.push({ id: "save-clip", value: q.hCu.SAVE_CLIP, label: g.intl.string(g.t.U4URzP) }),
                    s &&
                        l.push({
                            id: "save-screenshot",
                            value: q.hCu.SAVE_SCREENSHOT,
                            label: g.intl.string(g.t["+WloFH"]),
                        }))),
            l
        );
    }
    get keybindDescriptions() {
        let { overlaySupported: e, canGoLive: t, enableClips: i, enableScreenshotKeybind: n } = this.props,
            s = {
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
            e && (s[q.hCu.TOGGLE_OVERLAY_INPUT_LOCK] = g.intl.string(g.t.IoP5vc)),
            t && (0, ev.isWindows)() && (s[q.hCu.TOGGLE_GO_LIVE_STREAMING] = g.intl.string(g.t.s4C238)),
            (0, ev.isDesktop)() &&
                ((s[q.hCu.NAVIGATE_BACK] = g.intl.string(g.t.nKDlEt)),
                (s[q.hCu.NAVIGATE_FORWARD] = g.intl.string(g.t.DK0FFk)),
                (s[q.hCu.SOUNDBOARD] = (0, ev.isWindows)() ? g.intl.string(g.t["5wJefL"]) : g.intl.string(g.t.gzjsSP)),
                (s[q.hCu.SOUNDBOARD_HOLD] = (0, ev.isWindows)()
                    ? g.intl.string(g.t.RRkZc9)
                    : g.intl.string(g.t.laNlTl)),
                i &&
                    ((s[q.hCu.SAVE_CLIP] = g.intl.string(g.t.z3Wbam)),
                    n && (s[q.hCu.SAVE_SCREENSHOT] = g.intl.string(g.t.m0zd57)))),
            s
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
                            l1,
                            {
                                keybind: t,
                                keybindDescriptions: this.keybindDescriptions,
                                keybindActionTypes: this.keybindActionTypes,
                            },
                            t.id,
                        ),
                        i !== e.length - 1 ? (0, p.jsx)(eE.c, {}) : null,
                    ],
                },
                t.id,
            ),
        );
    }
    renderKeybindWarning() {
        return (0, p.jsxs)("div", {
            className: l$.$e,
            children: [
                (0, p.jsx)(lp.m, { size: "xs", color: w.A.colors.ICON_SUBTLE }),
                (0, p.jsx)(V.E, {
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
                        ![q.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, q.hCu.SAVE_CLIP, q.hCu.SAVE_SCREENSHOT].includes(
                            e.action,
                        ),
                )
                .reject((t) => !e && (t.action === q.hCu.SAVE_CLIP || t.action === q.hCu.SAVE_SCREENSHOT))
                .reject((e) => !t && e.action === q.hCu.SAVE_SCREENSHOT)
                .reject(
                    (e) =>
                        !this.props.allowSoundboard &&
                        (e.action === q.hCu.SOUNDBOARD || e.action === q.hCu.SOUNDBOARD_HOLD),
                )
                .sortBy((e) => e.id)
                .sortBy((e) => (!0 === e.managed ? -1 : 0))
                .value(),
            n = eR()((0, lC.Bx)())
                .filter((e) => e.description !== g.intl.string(g.t.HnNtEI))
                .groupBy((e) => e.group)
                .value();
        return (0, p.jsxs)(p.Fragment, {
            children: [
                (0, p.jsx)(lJ, {
                    className: i_.IE,
                    children: ev.isPlatformEmbedded
                        ? (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsxs)("div", {
                                      className: l$.OQ,
                                      children: [
                                          this.renderKeybindWarning(),
                                          (0, p.jsx)("div", {
                                              className: l$.c9,
                                              children: (0, p.jsx)(eA.$, {
                                                  size: "md",
                                                  onClick: this.handleAddKeybind,
                                                  text: g.intl.string(g.t.zk6Xbs),
                                                  variant: "primary",
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, p.jsx)(lL, { className: l$.Qo, sourcePage: "keybinds" }),
                                  i.length > 0 &&
                                      (0, p.jsxs)(p.Fragment, {
                                          children: [(0, p.jsx)(eE.c, {}), this.renderKeybinds(i)],
                                      }),
                                  (0, p.jsx)(eE.c, {}),
                              ],
                          })
                        : (0, p.jsx)(tr.p, {
                              messageType: tr.Y.INFO,
                              className: l$.Ly,
                              children: g.intl.format(g.t.mPi3F3, { downloadLink: q.X7G.DOWNLOAD }),
                          }),
                }),
                (0, p.jsxs)(R.B, {
                    gap: 48,
                    children: [
                        (0, p.jsx)(ia.n, {
                            label: g.intl.string(g.t.Lz5KHI),
                            children: (0, p.jsx)("div", {
                                className: l$.jh,
                                children: (0, p.jsxs)("div", {
                                    className: l$.yZ,
                                    children: [
                                        (0, p.jsx)(V.E, {
                                            variant: "text-md/normal",
                                            children: g.intl.string(g.t.sMWLBj),
                                        }),
                                        (0, p.jsx)("div", {
                                            className: l$.DM,
                                            children: (0, p.jsx)(lN.e, { shortcut: lf.z.binds["0"], className: l$.LE }),
                                        }),
                                    ],
                                }),
                            }),
                        }),
                        (0, p.jsx)(l0, {
                            children: (e) =>
                                (0, p.jsx)(p.Fragment, {
                                    children: e.map((e, t) => {
                                        let i = (0, lC.Gm)(e),
                                            s = (0, lC.zF)(e),
                                            l = n[e];
                                        return (0, p.jsx)(
                                            ia.n,
                                            {
                                                label: i,
                                                description: s,
                                                children: (0, p.jsx)("div", {
                                                    className: l$.jh,
                                                    children: l.map((e, t) =>
                                                        (0, p.jsxs)(
                                                            N.Fragment,
                                                            {
                                                                children: [
                                                                    0 !== t && (0, p.jsx)(eE.c, {}),
                                                                    (0, p.jsxs)("div", {
                                                                        className: l$.yZ,
                                                                        children: [
                                                                            (0, p.jsx)(V.E, {
                                                                                variant: "text-md/normal",
                                                                                children: e.description,
                                                                            }),
                                                                            (0, p.jsx)("div", {
                                                                                className: l$.DM,
                                                                                children: e.binds.map((e) =>
                                                                                    (0, p.jsx)(
                                                                                        lN.e,
                                                                                        {
                                                                                            shortcut: e,
                                                                                            className: l$.LE,
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
let l3 = (0, o.E2)(u.X.KEYBINDS_SETTING, {
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
            let e = (0, O.bG)([e_.Ay], () => e_.Ay.getState()),
                t = (0, O.bG)([lj.Ay], () => (0, lI.A)(lj.Ay)),
                i = (0, O.bG)([lb.A], () => lb.A.isSupported),
                n = (0, l_.sw)(),
                s = (0, l_.BW)();
            return (0, p.jsx)(l2, {
                keybinds: e,
                canGoLive: t,
                overlaySupported: i,
                allowSoundboard: (0, ev.isWindows)(),
                enableClips: n,
                enableScreenshotKeybind: s,
            });
        },
        useSearchTerms: () => [g.intl.string(g.t.T9DA2K)],
    }),
    l6 = (0, o.zZ)(u.X.KEYBINDS_CATEGORY, { buildLayout: () => [l3] }),
    l4 = (0, o.t_)(u.X.KEYBINDS_PANEL, { useTitle: () => g.intl.string(g.t.T9DA2K), buildLayout: () => [l6] }),
    l5 = (0, o.i4)(u.X.KEYBINDS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.T9DA2K),
        icon: lE.F,
        buildLayout: () => [l4],
    });
var l8 = i(37646),
    l7 = i(76335);
let l9 = (0, o.t_)(u.X.LANGUAGE_AND_TIME_PANEL, {
        useTitle: () => g.intl.string(g.t.KyFVyi),
        buildLayout: () => [l7.F],
    }),
    re = (0, o.i4)(u.X.LANGUAGE_AND_TIME_SIDEBAR_ITEM, {
        icon: l8.U,
        useTitle: () => g.intl.string(g.t.KyFVyi),
        buildLayout: () => [l9],
    }),
    rt = (0, np.D)(() => ({ openOnStartup: !0, startMinimized: !1, minimizeToTray: !0 }));
async function ri() {
    let e = await st.Ay.getOpenOnStart(),
        t = await st.Ay.getSetting("START_MINIMIZED", !1),
        i = await st.Ay.getSetting("MINIMIZE_TO_TRAY", !0);
    rt.setState({ openOnStartup: e, startMinimized: t, minimizeToTray: i });
}
let rn = (0, o.zD)(u.X.OS_OPEN_ON_STARTUP, {
        useTitle: () => g.intl.string(g.t["3BeZti"]),
        usePredicate: () => n9.Av && !(0, n9.cX)(),
        useValue: () => rt.useState((e) => e.openOnStartup),
        setValue: function (e) {
            rt.setState({ openOnStartup: e }), st.Ay.send("TOGGLE_OPEN_ON_STARTUP", e);
        },
        initialize: () => {
            st.Ay.getOpenOnStart().then((e) => rt.setState({ openOnStartup: e }));
        },
    }),
    rs = (0, o.zD)(u.X.OS_MINIMIZE_TO_TRAY, {
        useTitle: () => g.intl.string(g.t.dJ5MUh),
        useSubtitle: () => g.intl.string(g.t.nQavHr),
        usePredicate: () => n9.Av && !(0, n9.cX)(),
        useValue: () => rt.useState((e) => e.minimizeToTray),
        setValue: function (e) {
            rt.setState({ minimizeToTray: e }), st.Ay.send("TOGGLE_MINIMIZE_TO_TRAY", e);
        },
        initialize: () => {
            st.Ay.getSetting("MINIMIZE_TO_TRAY", !0).then((e) => rt.setState({ minimizeToTray: e }));
        },
    });
var rl = i(572985);
let rr = (0, o.E2)(u.X.OS_SYSTEM_SERVICE, {
        useSearchTerms: () => [g.intl.string(g.t.roHq80)],
        Component: function () {
            let [e, t] = N.useState(!1),
                [i, n] = N.useState(() => (0, to.TC)()),
                s = (0, O.bG)([eQ.Ay], () => eQ.Ay.getSystemServiceStatus("input-service")),
                l = N.useCallback(async () => {
                    t(!0),
                        i ? await (0, to.z8)("windows-settings") : await (0, to.sL)("windows-settings"),
                        t(!1),
                        n((0, to.TC)());
                }, [i]),
                r = "running" === s.state;
            return (0, p.jsxs)("div", {
                className: rl.q,
                children: [
                    (0, p.jsxs)("div", {
                        className: rl.L,
                        children: [
                            (0, p.jsx)(V.E, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: g.intl.string(g.t.roHq80),
                            }),
                            (0, p.jsx)(V.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: g.intl.format(g.t["8CAL+D"], {
                                    helpCenterLink: ta.A.getArticleURL(q.MVz.SYSTEM_SERVICE),
                                }),
                            }),
                            i
                                ? (0, p.jsx)(V.E, {
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
                                                            (0, t6.xb)(e.state);
                                                    }
                                                })(s),
                                            }),
                                  })
                                : null,
                        ],
                    }),
                    (0, p.jsx)(eA.$, {
                        variant: i ? "critical-secondary" : "primary",
                        loading: e,
                        onClick: l,
                        text: i ? g.intl.string(g.t.pAwbdL) : g.intl.string(g.t["1iI46O"]),
                    }),
                ],
            });
        },
        usePredicate: () => (0, to.XQ)(),
    }),
    ra = (0, o.zZ)(u.X.LINUX_CATEGORY, {
        buildLayout: () => [rn, rs, rr],
        initialize: () => {
            ri();
        },
    }),
    ro = (0, o.t_)(u.X.LINUX_PANEL, { useTitle: () => g.intl.string(g.t["7pPjTW"]), buildLayout: () => [ra] }),
    ru = (0, o.i4)(u.X.LINUX_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["7pPjTW"]),
        icon: e2.k,
        usePredicate: () => ev.isPlatformEmbedded && (0, ev.isLinux)(),
        buildLayout: () => [ro],
    });
var rd = i(3137),
    rc = i(369606),
    rg = i(604121),
    rm = i(725951),
    rh = i(400492),
    rA = i(178241),
    rE = i(115063),
    rx = i(754692),
    rT = i(927018),
    rS = i(512599),
    rp = i(532197),
    rN = i(874486),
    rf = i(989349),
    rC = i.n(rf),
    r_ = i(58703),
    rI = i(906688),
    rb = i(523896);
function rv(e) {
    let { achievementId: t, dateUnlocked: i } = e,
        n = (0, rT.vM)(t);
    if (null == n) return null;
    let s = null != i,
        { name: l, description: r, hideDescriptionUntilUnlock: a, onAction: o } = n,
        u = a && !s,
        d = s ? "text-strong" : "text-muted",
        c = s ? "text-default" : "text-muted",
        g = rC()(i),
        m = null != o && s,
        h = m ? M.D : "div";
    return (0, p.jsxs)(h, {
        className: ew()(rb.kL, m && rb.b),
        onClick: () => {
            m && o();
        },
        children: [
            (0, p.jsx)("div", {
                className: rb.zc,
                children: (0, p.jsx)(rI.A, { achievementId: t, size: rI.A.Sizes.SIZE_40, unlocked: s }),
            }),
            (0, p.jsxs)("div", {
                className: rb.VW,
                children: [
                    null != i &&
                        (0, p.jsx)(V.E, {
                            variant: "text-xxs/semibold",
                            color: "text-muted",
                            className: rb.YR,
                            children: (0, r_.mk)(g),
                        }),
                    (0, p.jsx)(V.E, { variant: "text-md/medium", color: d, children: l() }),
                    (0, p.jsx)(V.E, { variant: "text-xs/normal", color: c, children: u ? "?????" : r() }),
                ],
            }),
        ],
    });
}
var rj = i(885959);
function ry(e) {
    let { onBackClick: t } = e,
        i = (0, O.bG)([rN.A], () => rN.A.getAllUnlockedAchievements()),
        n = N.useMemo(() => Object.values(i).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [i]),
        s = N.useMemo(
            () =>
                Object.values(rT.l0)
                    .filter(t6.Vq)
                    .filter((e) => null == i[e.id])
                    .sort((e, t) => e.rarity - t.rarity),
            [i],
        );
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsxs)(M.D, {
                onClick: t,
                className: rj.vv,
                children: [
                    (0, p.jsx)(rp.A, { direction: rp.A.Directions.LEFT, className: rj.Kk }),
                    (0, p.jsx)(V.E, {
                        variant: "text-lg/normal",
                        color: "text-default",
                        children: g.intl.string(g.t["13/7kX"]),
                    }),
                ],
            }),
            (0, p.jsxs)("div", {
                className: rj.N1,
                children: [
                    (0, p.jsxs)("div", {
                        className: rj.if,
                        children: [
                            (0, p.jsx)(eh.D, {
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
                        className: rj.nr,
                        children: (0, p.jsx)(rc.O, {
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
                    className: rj.yF,
                    children: (0, p.jsx)("div", {
                        className: rj.Eh,
                        children: n.map((e) => {
                            let { achievementId: t, dateUnlocked: i } = e;
                            return (0, p.jsx)(rv, { achievementId: t, dateUnlocked: i }, t);
                        }),
                    }),
                }),
            s.length > 0 &&
                (0, p.jsxs)("div", {
                    className: rj.yF,
                    children: [
                        (0, p.jsx)("div", {
                            className: rj.if,
                            children: (0, p.jsx)(V.E, {
                                variant: "text-md/bold",
                                color: "text-default",
                                children: g.intl.string(g.t.GFyMg1),
                            }),
                        }),
                        (0, p.jsx)("div", {
                            className: rj.Eh,
                            children: s.map((e) => (0, p.jsx)(rv, { achievementId: e.id }, e.id)),
                        }),
                    ],
                }),
            (0, p.jsx)("div", { className: rj.yF, children: (0, p.jsx)("div", { className: rj.F3 }) }),
        ],
    });
}
var rO = i(224964),
    rR = i(31408),
    rL = i(739347);
let rD = { enabled: !0, combosEnabled: !0, screenshakeEnabled: !1, confettiEnabled: !1 },
    rP = (0, eO.range)(0, 11),
    rG = (0, eO.range)(0, 2.25, 0.25),
    rU = (0, eO.range)(1, 11),
    rM = (0, eO.range)(1, 26),
    rV = { 0: "poggermode_settings_panel", 1: "poggermode_achievements_panel" };
function rk(e) {
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
function rw(e) {
    let { children: t } = e;
    return (0, p.jsx)(V.E, { className: rL.iF, variant: "text-sm/normal", color: "text-default", children: t });
}
function rB(e) {
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
            e || (0, rx._)(rT.sn.DISABLE_POGGERMODE),
                e && (!i || s)
                    ? (0, se.A)({
                          title: s ? g.intl.string(g.t["FxT+p0"]) : g.intl.string(g.t.TAZ4F9),
                          subtitle: s ? g.intl.string(g.t.gmixrx) : g.intl.string(g.t.jN3t3K),
                          confirmText: g.intl.string(g.t.JFfins),
                          onConfirm: () => n(s ? rD : { enabled: !0, warningSeen: !0 }),
                      })
                    : n({ enabled: e });
        },
    });
}
function rF(e) {
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
                        className: rL.KF,
                        children: g.intl.string(g.t.vd0D81),
                    }),
                    (0, p.jsx)(rw, { children: g.intl.string(g.t.a18Sug) }),
                    (0, p.jsx)(i8.A, {
                        disabled: a,
                        markers: rU,
                        stickToMarkers: !0,
                        minValue: rU[0],
                        maxValue: rU[rU.length - 1],
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
                        className: rL.KF,
                        children: g.intl.string(g.t.sPO3ij),
                    }),
                    (0, p.jsx)(rw, { children: g.intl.string(g.t.xoldVn) }),
                    (0, p.jsx)(i8.A, {
                        disabled: a,
                        markers: rM,
                        stickToMarkers: !0,
                        minValue: rM[0],
                        maxValue: rM[rM.length - 1],
                        initialValue: s,
                        onValueChange: (e) => r({ confettiSize: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, p.jsx)(rk, {
                disabled: a,
                locations: [
                    {
                        location: rR.k.CHAT_INPUT,
                        title: g.intl.string(g.t.elTtyz),
                        description: g.intl.string(g.t.HtKfMi),
                    },
                    {
                        location: rR.k.REACTION,
                        title: g.intl.string(g.t.Ik4VIa),
                        description: g.intl.string(g.t.y4rqK0),
                    },
                    {
                        location: rR.k.MEMBER_USER,
                        title: g.intl.string(g.t.ZXBlAn),
                        description: g.intl.string(g.t["m9RD+c"]),
                    },
                    {
                        location: rR.k.CALL_TILE,
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
function rz(e) {
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
                        className: rL.KF,
                        children: g.intl.string(g.t.L0oQuh),
                    }),
                    (0, p.jsx)(rw, { children: g.intl.string(g.t["/OOFpL"]) }),
                    (0, p.jsx)(i8.A, {
                        disabled: r,
                        markers: rP,
                        stickToMarkers: !0,
                        minValue: rP[0],
                        maxValue: rP[rP.length - 1],
                        initialValue: s,
                        onValueChange: (e) => l({ combosRequiredCount: e }),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
        ],
    });
}
function rY(e) {
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
                        className: rL.KF,
                        children: g.intl.string(g.t.UxnnC4),
                    }),
                    (0, p.jsx)(rw, { children: g.intl.string(g.t.CEOEOb) }),
                    (0, p.jsx)(i8.A, {
                        disabled: a,
                        markers: rG,
                        equidistant: !0,
                        stickToMarkers: !0,
                        minValue: rG[0],
                        maxValue: rG[rG.length - 1],
                        initialValue: n,
                        onValueChange: (e) => {
                            var t;
                            null != (t = { shakeIntensity: e }).shakeIntensity &&
                                t.shakeIntensity > n &&
                                (0, rx._)(rT.sn.MORE),
                                l(t, 1);
                        },
                        onMarkerRender: (e) => (e === rG[rG.length - 1] ? g.intl.string(g.t["4rbMWc"]) : `${100 * e}%`),
                    }),
                ],
            }),
            (0, p.jsx)(rk, {
                disabled: a,
                locations: [
                    {
                        location: rR.uD.CHAT_INPUT,
                        title: g.intl.string(g.t.vUcvPP),
                        description: g.intl.string(g.t.y00OrF),
                    },
                    {
                        location: rR.uD.VOICE_USER,
                        title: g.intl.string(g.t.TcRO54),
                        description: g.intl.string(g.t.YJCxVY),
                    },
                    {
                        location: rR.uD.MENTION,
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
function rX(e) {
    let { updateSettings: t } = e;
    return (0, p.jsx)(ia.n, {
        label: g.intl.string(g.t.EuXv2q),
        children: (0, p.jsxs)(R.B, {
            gap: 16,
            children: [
                (0, p.jsx)("div", { children: g.intl.string(g.t["1SLnki"]) }),
                (0, p.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: rL.hw,
                    children: (0, p.jsx)(eA.$, {
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
function rH(e) {
    let { onChangePage: t } = e;
    return (0, p.jsxs)(M.D, {
        onClick: () => t(1),
        className: rL.Tq,
        children: [
            (0, p.jsx)("div", {
                className: rL.w1,
                children: (0, p.jsx)(rc.O, { size: "md", color: w.A.unsafe_rawColors.ORANGE_345.css }),
            }),
            (0, p.jsxs)("div", {
                className: rL.qL,
                children: [
                    (0, p.jsx)(eh.D, {
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
            (0, p.jsx)(tA._, { size: "custom", color: "currentColor", width: 16, className: rL.nT }),
        ],
    });
}
let rK = () =>
    i
        .e("4660")
        .then(i.t.bind(i, 662336, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
function rW(e) {
    let { onChangePage: t, setShowEnableAnimation: i } = e,
        n = (0, O.cf)([rd.A], () => rd.A.getState()),
        [s, l] = N.useState({ x: 0, y: 0 }),
        r = (0, rO.A)(),
        a = (e, t) => {
            var l, a, o, u, d, c, g, m;
            if (
                (e.enabled &&
                    !1 === n.enabled &&
                    (i(!0),
                    (0, rh.Ak)("poggermode_enabled"),
                    (0, rE.fO)({ duration: 2e3, intensity: e.shakeIntensity ?? n.shakeIntensity })),
                (0, rS.O9)(e),
                null == t)
            )
                return;
            let h =
                ((l = n.confettiEnabled),
                (a = e.confettiEnabled),
                (o = n.enabled),
                (u = e.enabled),
                (a ?? l) && (u ?? o));
            0 === t && h && r.fire(s.x, s.y, { settings: e });
            let A =
                ((d = n.screenshakeEnabled),
                (c = e.screenshakeEnabled),
                (g = n.enabled),
                (m = e.enabled),
                (c ?? d) && (m ?? g));
            1 === t && A && (0, rE.fO)({ duration: 1e3, intensity: e.shakeIntensity ?? n.shakeIntensity });
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
                (0, p.jsx)(rB, { settings: n, updateSettings: a }),
                (0, p.jsx)(rH, { onChangePage: t }),
                (0, p.jsx)(rz, { settings: n, updateSettings: a }),
                (0, p.jsx)(rY, { settings: n, updateSettings: a }),
                (0, p.jsx)(rF, { settings: n, updateSettings: a }),
                (0, p.jsx)(rX, { updateSettings: a }),
            ],
        })
    );
}
let rZ = (e) => (0 === e ? rm.f.LEFT : rm.f.RIGHT),
    rq = (0, o.E2)(u.X.POGGERMODE_SETTING, {
        Component: function () {
            let [e, t] = N.useState(0),
                [i, n] = N.useState(rZ(e)),
                [s, l] = N.useState(!1),
                r = (0, O.bG)([iK.A], () => iK.A.useReducedMotion),
                a = s && !r;
            return (
                N.useEffect(() => {
                    let t = setTimeout(() => {
                        n(rZ(e));
                    }, 500);
                    return () => clearTimeout(t);
                }, [e]),
                N.useEffect(() => {
                    (0, rA._)(rV[e]);
                }, [e]),
                N.useEffect(() => {
                    Math.random() > 0.99 && (0, rx._)(rT.sn.VISITOR_100);
                }, []),
                (0, p.jsxs)(p.Fragment, {
                    children: [
                        (0, p.jsx)(rm.A, {
                            className: rL.l3,
                            step: e,
                            direction: i,
                            children: ((e, t, i) => {
                                let n = (e) => () => {
                                    t(e);
                                };
                                switch (e) {
                                    case 0:
                                        return (0, p.jsx)(rW, { onChangePage: n(1), setShowEnableAnimation: i });
                                    case 1:
                                        return (0, p.jsx)(ry, { onBackClick: n(0) });
                                    default:
                                        return null;
                                }
                            })(e, t, l),
                        }),
                        (0, p.jsx)("div", {
                            className: a ? rL.Sr : rL.IP,
                            children: (0, p.jsx)(rg.a, {
                                className: rL.gT,
                                importData: rK,
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
    rQ = (0, o.zZ)(u.X.POGGERMODE_CATEGORY, { buildLayout: () => [rq] });
var rJ = i(502220);
let r$ = (0, o.t_)(u.X.POGGERMODE_PANEL, { useTitle: () => g.intl.string(g.t.AtCukI), buildLayout: () => [rQ] }),
    r0 = (0, o.i4)(u.X.POGGERMODE_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.AtCukI),
        icon: () => (0, p.jsx)("img", { alt: "", src: i(724405), className: rJ.$ }),
        usePredicate: () => (0, O.bG)([rd.A], () => rd.A.settingsVisible),
        buildLayout: () => [r$],
    });
var r1 = i(831544),
    r2 = i(235661),
    r3 = i(212245),
    r6 = i(329551),
    r4 = i(285918),
    r5 = i(413339),
    r8 = i(952572),
    r7 = i(382003);
let r9 = (0, o.E2)(u.X.CAMERA_BACKGROUND_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t.lZTUPs)],
        usePredicate: r8.A,
        Component: function () {
            let e = (0, r3.p)(),
                t = N.useRef(!1),
                i = (0, O.bG)([lj.Ay], () => lj.Ay.getVideoDeviceId()),
                [n, s] = N.useState((0, r6.i)(t3.default.getCurrentUser())),
                l = N.useRef(n);
            return (
                N.useEffect(
                    () => () => {
                        t.current && (0, r4._C)(l.current);
                    },
                    [],
                ),
                (0, p.jsx)(r7.A, {
                    selectedBackgroundOption: n,
                    onSelectBackgroundOption: (i) => {
                        (t.current = !0), (l.current = i), s(i), (0, r5.gB)(i, { location: e.location }).catch(q.tEg);
                    },
                    currentDeviceId: i,
                })
            );
        },
    }),
    ae = (0, o.zD)(u.X.CAMERA_PREVIEW_PREFERENCE, {
        useTitle: () => g.intl.string(g.t["3Ppr1h"]),
        useSubtitle: () => g.intl.string(g.t.WNbX4O),
        useValue: c.bm.useSetting,
        setValue: (e) => {
            c.bm.updateSetting(e), Y.default.track(q.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e });
        },
    });
var at = i(625841),
    ai = i(74848),
    an = i(204050);
let as = (0, np.D)(() => ({ previewEnabled: !1 }));
var al = i(731854);
let ar = (0, o.E2)(u.X.CAMERA_SELECTION_SETTING, {
    useSearchTerms: () => [g.intl.string(g.t.FsQ3OR)],
    Component: function () {
        let e = (0, O.bG)([lj.Ay], () => lj.Ay.isVideoAvailable()),
            { id: t } = (0, ai.x5)(al.oh.VIDEO_INPUT),
            { analyticsLocations: i } = (0, nG.Ay)();
        return (0, p.jsx)(at.U, {
            label: g.intl.string(g.t.FsQ3OR),
            deviceType: al.oh.VIDEO_INPUT,
            location: "UserSettingsCameraSelect",
            isDisabled: !e,
            helperText: (0, an.p)()
                ? g.intl.format(g.t.aJYgRt, {
                      onCameraSettingsClick: () => {
                          as.setState({ previewEnabled: !1 }),
                              window.open((0, an.i)(t)),
                              Y.default.track(q.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: i });
                      },
                  })
                : void 0,
        });
    },
});
var aa = i(745317),
    ao = i(698292);
let au = (0, o.E2)(u.X.CAMERA_VIDEO_PREVIEW, {
        useSearchTerms: () => [g.intl.string(g.t.JIf4v7)],
        Component: function () {
            let e = lj.Ay.getCameraComponent(),
                t = (0, O.bG)([lj.Ay], () => lj.Ay.getVideoDeviceId()),
                i = as.useField("previewEnabled"),
                n = (0, O.bG)([lj.Ay], () => lj.Ay.isVideoAvailable());
            return ((0, e5.l0)(() => {
                as.setState({ previewEnabled: !1 });
            }),
            i)
                ? (0, p.jsx)("div", {
                      className: ao.T,
                      children: (0, p.jsxs)("div", {
                          className: ao.U,
                          children: [
                              (0, p.jsx)(e, { deviceId: t, width: 387, height: 218, disabled: !i }),
                              (0, p.jsx)(aa.k, {}),
                          ],
                      }),
                  })
                : (0, p.jsx)("div", {
                      className: ao.T,
                      children: (0, p.jsx)(e0.m, {
                          text: n ? null : g.intl.string(g.t["8jSzSe"]),
                          children: (0, p.jsx)(eA.$, {
                              variant: "primary",
                              text: g.intl.string(g.t.JIf4v7),
                              onClick: () => as.setState({ previewEnabled: !0 }),
                              disabled: !n,
                          }),
                      }),
                  });
        },
    }),
    ad = (0, o.zZ)(u.X.CAMERA_CATEGORY, {
        useTitle: () => g.intl.string(g.t.uje3P9),
        usePredicate: () => (0, O.bG)([lj.Ay], () => lj.Ay.supports(al.O5.VIDEO)),
        buildLayout: () => [au, ae, ar, r9],
    });
var ac = i(827343);
let ag = (0, o.zD)(u.X.VOICE_AND_VIDEO_OPENH264, {
        useTitle: () => g.intl.string(g.t.qFphsa),
        useSubtitle: () => g.intl.string(g.t.cQfwyY),
        usePredicate: function () {
            return (0, n9.j9)();
        },
        useValue: function () {
            return (0, O.bG)([lj.Ay], () => lj.Ay.getOpenH264Enabled());
        },
        setValue: function (e) {
            ac.A.setOpenH264Enabled(e),
                (0, se.A)({
                    title: g.intl.string(g.t["9jf31O"]),
                    subtitle: g.intl.string(g.t["J2wg+X"]),
                    confirmText: g.intl.string(g.t.BddRzS),
                    onConfirm: () => s2.A.app.relaunch(),
                });
        },
        useSearchTerms: () => ["open", "OpenH264", "H264", "codec"],
    }),
    am = (0, o.zD)(u.X.VOICE_AND_VIDEO_AUDIO_RECORDING, {
        useTitle: () => g.intl.string(g.t["r6K+TL"]),
        useSubtitle: () => g.intl.string(g.t["xl9+I6"]),
        useValue: function () {
            return (0, O.bG)([lj.Ay], () => lj.Ay.getAecDump());
        },
        setValue: ac.A.setAecDump,
        usePredicate: function () {
            return (0, O.bG)([lj.Ay], () => lj.Ay.isAecDumpSupported());
        },
    });
var ah = i(139033),
    aA = i(862482),
    aE = i(640238),
    ax = i(825484),
    aT = i(77138),
    aS = i(487329),
    ap = i(353835);
let aN = (0, np.D)(() => ({ isUploading: !1, isDisabled: !1 }));
async function af() {
    let e = await s2.A.fileManager.getLogPath();
    s2.A.fileManager.showItemInFolder(e);
}
function aC(e) {
    (0, se.A)({
        title: g.intl.string(g.t["7UXEF2"]),
        subtitle: g.intl.string(g.t.IYPrRl),
        confirmText: g.intl.string(g.t.BddRzS),
        onConfirm: () => ac.A.setDebugLogging(e),
    });
}
async function a_(e) {
    let { onUploadStart: t, onUploadFinish: i } = e;
    t?.();
    try {
        let e, t;
        await lj.Ay.getMediaEngine().writeAudioDebugState(),
            await ap.A.submitLiveCrashReport({ message: { message: "User Live Dump" } }),
            await (0, aT.a)(q.Umv.RTC),
            (e = g.intl.string(g.t["fKBB8+"])),
            (t = g.intl.string(g.t.BvyxE7)),
            (0, ah.A)({ title: e, subtitle: t });
    } catch (l) {
        var n;
        let e, t, i, s;
        (n = l.displayMessage),
            (e = g.intl.string(g.t.QZg0J7)),
            (t = n ?? g.intl.string(g.t.VzHcSm)),
            (i = (0, aS.B1)(aS.iy.DEBUG_LOG_UPLOAD_FAILED)?.errorCode),
            (s = g.intl.formatToPlainString(g.t.ejOT95, { errorCode: i })),
            (0, C.openModal)((i) =>
                (0, p.jsx)(aE.a, {
                    header: e,
                    confirmButtonColor: aA.$n.Colors.BRAND,
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
async function aI() {
    await a_({
        onUploadStart: () => aN.setState({ isUploading: !0 }),
        onUploadFinish: () => aN.setState({ isUploading: !1, isDisabled: !0 }),
    });
}
let ab = (0, o.E2)(u.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [g.intl.string(g.t["726JHL"]), g.intl.string(g.t.EbwFfR), g.intl.string(g.t.nuPtYi)],
    usePredicate: function () {
        let e = (0, O.bG)([lj.Ay], () => lj.Ay.supports(al.O5.DEBUG_LOGGING));
        return n9.Av && e && null != s2.A.fileManager.readLogFiles;
    },
    Component: function () {
        let e = (0, O.bG)([lj.Ay], () => lj.Ay.getDebugLogging()),
            t = aN.useField("isUploading"),
            i = aN.useField("isDisabled"),
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
                            onChange: aC,
                        }),
                        (0, p.jsx)("div", {
                            role: "group",
                            "aria-labelledby": n,
                            children: (0, p.jsxs)(ax.e, {
                                children: [
                                    (0, p.jsx)(eA.$, {
                                        variant: "secondary",
                                        text: g.intl.string(g.t.EbwFfR),
                                        onClick: aI,
                                        loading: t,
                                        disabled: i,
                                        "aria-label": g.intl.string(g.t.aY1OH2),
                                    }),
                                    (0, p.jsx)(eA.$, {
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
var av = i(233545),
    aj = i(412780);
function ay() {
    return (0, O.bG)([t3.default, lj.Ay], () => {
        let e = t3.default.getCurrentUser(),
            t = e?.isStaff() ?? !1,
            i = "canary" === st.Ay.releaseChannel || "development" === st.Ay.releaseChannel,
            n = lj.Ay.supports(al.O5.CONNECTION_REPLAY);
        return t && i && n;
    });
}
let aO = (0, o.zD)(u.X.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
        useTitle: () => g.intl.string(g.t.U4FgFK),
        useSubtitle: () => g.intl.string(g.t.Lm72RU),
        useValue: function () {
            return (0, O.bG)([aj.Ay], () => aj.Ay.shouldRecordNextConnection());
        },
        setValue: av.Et,
        usePredicate: ay,
    }),
    aR = (0, o.Tf)(u.X.VOICE_AND_VIDEO_OPEN_CONNECTION_REPLAY, {
        useTitle: () => g.intl.string(g.t.nJnOHO),
        useLabel: () => g.intl.string(g.t["3xjX0U"]),
        onClick: av.YW,
        usePredicate: ay,
    });
var aL = i(926919),
    aD = i(111162),
    aP = i(698723);
let aG = (0, o.zD)(u.X.VOICE_AND_VIDEO_STREAM_INFO_OVERLAY, {
        useTitle: () => g.intl.string(g.t["0CEP6e"]),
        useSubtitle: () => g.intl.string(g.t["kBXuW+"]),
        useValue: function () {
            return (0, O.bG)([aD.default], () => aD.default.isStreamInfoOverlayEnabled);
        },
        setValue: function (e) {
            let t = aD.default.isStreamInfoOverlayEnabled;
            (0, aP.A)("stream_info_overlay_enabled", e, t), (0, aL.x)({ isStreamInfoOverlayEnabled: e });
        },
        usePredicate: function () {
            return c.Q_.useSetting();
        },
    }),
    aU = (0, o.bd)(u.X.VOICE_AND_VIDEO_DIAGNOSTICS_ACCORDION, {
        useTitle: (e) => (e ? g.intl.string(g.t["/B4I8H"]) : g.intl.string(g.t.BTlsWH)),
        useCollapsedSubtitle: () => g.intl.string(g.t.la1Ys4),
        buildLayout: () => [aG, am, aO, aR, ab],
    });
function aM(e, t, i) {
    (0, se.A)({ title: e, subtitle: t, confirmText: g.intl.string(g.t.BddRzS), onConfirm: i });
}
let aV = (0, o.Tf)(u.X.VOICE_AND_VIDEO_RESET_ALL_SETTINGS, {
        useTitle: () => g.intl.string(g.t.SXfv1v),
        useSubtitle: () => g.intl.string(g.t["buA5/q"]),
        useLabel: () => g.intl.string(g.t.yBZMsQ),
        onClick: function () {
            aM(g.intl.string(g.t["4iKQ/3"]), g.intl.string(g.t.sQ42iT), ac.A.reset);
        },
        useVariant: () => "critical-secondary",
    }),
    ak = (0, o.zZ)(u.X.VOICE_AND_VIDEO_DIAGNOSTICS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.UDAU9K),
        buildLayout: () => [ag, aU, aV],
    });
var aw = i(347481),
    aB = i(533488),
    aF = i(199966),
    az = i(963935);
function aY(e) {
    let { title: t } = e;
    return t;
}
function aX(e) {
    let { useTitle: t, settingKey: i, formatter: n, index: s } = e,
        l = t();
    return "string" == typeof l ? n({ title: l, index: s, key: i }) : l;
}
function aH(e) {
    let { setting: t, formatter: i, index: n } = e;
    return () => (0, p.jsx)(aX, { useTitle: t.useTitle, settingKey: t.key, formatter: i, index: n }, t.key);
}
function aK(e) {
    return e.type === az.Z6.LIST;
}
function aW(e, t) {
    let { limit: i = 2, formatter: n = aY } = t ?? {};
    ty()(i > 0, "[useSettingCollapsibleSubtitle] Limit must be greater than 0");
    let { visibleDirectory: s, accessibleDirectory: l } = (0, aF._)(),
        r = s.get(e) ?? l.get(e);
    ty()(
        null != r && (r.type === az.Z6.ACCORDION || aK(r)),
        "[useSettingCollapsibleSubtitle] Node is not a collapsible settings node",
    );
    let a = aK(r) ? (r.collapseAfter ?? 0) : 0,
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
                return g.intl.format(g.t["3H9tCW"], { settingOneHook: aH({ setting: t[0], formatter: n, index: 0 }) });
            else if (2 === t.length)
                return g.intl.format(g.t.MWryo6, {
                    settingOneHook: aH({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: aH({ setting: t[1], formatter: n, index: 1 }),
                });
            else
                return g.intl.format(g.t.a00b5G, {
                    settingOneHook: aH({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: aH({ setting: t[1], formatter: n, index: 1 }),
                    settingThreeHook: aH({ setting: t[2], formatter: n, index: 2 }),
                });
        return 1 === s
            ? g.intl.format(g.t.O8vNbS, { settingOneHook: aH({ setting: t[0], formatter: n, index: 0 }) })
            : 2 === s
              ? g.intl.format(g.t["acXG/W"], {
                    settingOneHook: aH({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: aH({ setting: t[1], formatter: n, index: 1 }),
                })
              : g.intl.format(g.t["5+ldWc"], {
                    settingOneHook: aH({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: aH({ setting: t[1], formatter: n, index: 1 }),
                    settingThreeHook: aH({ setting: t[2], formatter: n, index: 2 }),
                });
    }, [i, a, o, n]);
}
let aZ = (0, o.zD)(u.X.VOICE_AUTOMATIC_GAIN_CONTROL_SETTING, {
        useTitle: () => g.intl.string(g.t.cUMdH0),
        useSubtitle: () => g.intl.string(g.t["6EjbvA"]),
        useValue: function () {
            return (0, O.bG)([lj.Ay], () => lj.Ay.getAutomaticGainControl());
        },
        setValue: function (e) {
            ac.A.setAutomaticGainControl(e, { page: q.liQ.USER_SETTINGS, section: q.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, O.bG)([lj.Ay, aw.A], () => {
                let e = lj.Ay.getInputDeviceId();
                return aw.A.hasAutomaticGainControl(e);
            });
        },
        usePredicate: function () {
            return (0, O.bG)([lj.Ay], () => lj.Ay.isAutomaticGainControlSupported() && lj.Ay.isInputProfileCustom());
        },
    }),
    aq = (0, o.sN)(u.X.VOICE_GLOBAL_ATTENUATION_SLIDER, {
        useTitle: () => g.intl.string(g.t.AlybXj),
        setValue: (e) =>
            ac.A.setAttenuation(e, lj.Ay.getAttenuateWhileSpeakingSelf(), lj.Ay.getAttenuateWhileSpeakingOthers()),
        minValue: 0,
        maxValue: 100,
        getInitialValue: () => lj.Ay.getAttenuation(),
    }),
    aQ = (0, o.zD)(u.X.VOICE_GLOBAL_ATTENUATION_FOR_SELF_SETTING, {
        useTitle: () => g.intl.string(g.t["9dHxRY"]),
        useValue: () => (0, O.bG)([lj.Ay], () => lj.Ay.getAttenuateWhileSpeakingSelf()),
        setValue: (e) => ac.A.setAttenuation(lj.Ay.getAttenuation(), e, lj.Ay.getAttenuateWhileSpeakingOthers()),
    }),
    aJ = (0, o.zD)(u.X.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
        useTitle: () => g.intl.string(g.t.SMt0Gr),
        useValue: () => (0, O.bG)([lj.Ay], () => lj.Ay.getAttenuateWhileSpeakingOthers()),
        setValue: (e) => ac.A.setAttenuation(lj.Ay.getAttenuation(), lj.Ay.getAttenuateWhileSpeakingSelf(), e),
    }),
    a$ = (0, o.FW)(u.X.VOICE_GLOBAL_ATTENUATION_FIELD_SET, {
        variant: "compact",
        useTitle: () => g.intl.string(g.t.oSdBvW),
        useSubtitle: () => g.intl.string(g.t["0A/8Rt"]),
        usePredicate: () => (0, O.bG)([lj.Ay], () => lj.Ay.supports(al.O5.ATTENUATION)),
        buildLayout: () => [aq, aQ, aJ],
    });
var a0 = i(801644);
let a1 = (0, o.zD)(u.X.VOICE_HARDWARE_MUTE_SILENCE_ALERT_SETTING, {
        useTitle: () => g.intl.string(g.t.pZ0vr4),
        useSubtitle: () => g.intl.string(g.t.tVbzoZ),
        useValue: function () {
            return (0, O.bG)([nE.Ay], () => !nE.Ay.disableHardwareMuteSilenceAlert);
        },
        setValue: function (e) {
            (0, aP.A)("hardware_mute_silence_alert_enabled", e, !nE.Ay.disableHardwareMuteSilenceAlert),
                sX.Ay.updatedUnsyncedSettings({ disableHardwareMuteSilenceAlert: !e });
        },
        usePredicate: function () {
            let { enableHardwareSilenceWarning: e } = a0.A.useConfig({ location: "HardwareMuteSilenceAlertSetting" });
            return e;
        },
    }),
    a2 = (0, o.zD)(u.X.VOICE_BYPASS_SYSTEM_INPUT_PROCESSING_SETTING, {
        useTitle: () => g.intl.string(g.t.DFPXIG),
        useSubtitle: () => g.intl.string(g.t["UyRX+C"]),
        useValue: function () {
            return (0, O.bG)([lj.Ay], () => lj.Ay.getBypassSystemInputProcessing());
        },
        setValue: function (e) {
            ac.A.setBypassSystemInputProcessing(e);
        },
        usePredicate: function () {
            return (0, O.bG)([lj.Ay], () => lj.Ay.showBypassSystemInputProcessing() && lj.Ay.isInputProfileCustom());
        },
    }),
    a3 = (0, o.zD)(u.X.VOICE_SWITCH_CHANNEL_ALERT_SETTING, {
        useTitle: () => g.intl.string(g.t.jrWHD3),
        useSubtitle: () => g.intl.string(g.t.YCCMkJ),
        useValue: function () {
            return (0, O.bG)([nE.Ay], () => !nE.Ay.disableVoiceChannelChangeAlert);
        },
        setValue: function (e) {
            (0, aP.A)("switch_channel_warning_enabled", e, !nE.Ay.disableVoiceChannelChangeAlert),
                sX.Ay.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !e });
        },
    }),
    a6 = (0, o.zD)(u.X.ADVANCED_VOICE_ACTIVITY_PROCESSING_SETTING, {
        useTitle: () => g.intl.string(g.t.BbESsg),
        useSubtitle: () => g.intl.string(g.t.LoOB1F),
        useValue: function () {
            return (0, O.bG)([lj.Ay], () => {
                let { vadUseKrisp: e } = lj.Ay.getModeOptions();
                return e;
            });
        },
        setValue: function (e) {
            let t = lj.Ay.getMode();
            ac.A.setMode(t, { vadUseKrisp: e });
        },
        useDisabled: function () {
            return (0, O.bG)([lj.Ay], () => {
                let e = lj.Ay.getMode(),
                    t = lj.Ay.getModeOptions().autoThreshold;
                return e === q.TBI.VOICE_ACTIVITY && t;
            });
        },
        usePredicate: function () {
            return (0, O.bG)([lj.Ay], () => lj.Ay.isAdvancedVoiceActivitySupported() && lj.Ay.isInputProfileCustom());
        },
    }),
    a4 = (0, o.Hn)(u.X.VOICE_AUDIO_SUBSYSTEM_SETTING, {
        useTitle: () => g.intl.string(g.t.wVBHr0),
        useValue: function () {
            return (0, O.bG)([lj.Ay], () => lj.Ay.getAudioSubsystem());
        },
        setValue: function (e) {
            aM(g.intl.string(g.t.uY7AcQ), g.intl.string(g.t.gBqik6), () => ac.A.setAudioSubsystem(e));
        },
        useOptions: function () {
            let {
                legacyAudioSubsystemSupported: e,
                experimentalAudioSubsystemSupported: t,
                automaticAudioSubsystemSupported: i,
            } = (0, O.cf)([lj.Ay], () => ({
                legacyAudioSubsystemSupported: lj.Ay.supports(al.O5.LEGACY_AUDIO_SUBSYSTEM),
                experimentalAudioSubsystemSupported: lj.Ay.supports(al.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM),
                automaticAudioSubsystemSupported: lj.Ay.supports(al.O5.AUTOMATIC_AUDIO_SUBSYSTEM),
            }));
            return N.useMemo(() => {
                let n;
                return (
                    (n = [{ id: al.rB.STANDARD, value: al.rB.STANDARD, label: g.intl.string(g.t.dqb2JZ) }]),
                    e && n.push({ id: al.rB.LEGACY, value: al.rB.LEGACY, label: g.intl.string(g.t["TYfH+5"]) }),
                    t &&
                        n.push({ id: al.rB.EXPERIMENTAL, value: al.rB.EXPERIMENTAL, label: g.intl.string(g.t.liQmtr) }),
                    i && n.push({ id: al.rB.AUTOMATIC, value: al.rB.AUTOMATIC, label: g.intl.string(g.t.qNgtO1) }),
                    n
                );
            }, [i, t, e]);
        },
        usePredicate: function () {
            return (0, O.bG)([lj.Ay], () => lj.Ay.shouldOfferManualSubsystemSelection());
        },
    }),
    a5 = (0, o.zD)(u.X.VOICE_QUALITY_OF_SERVICE_SETTING, {
        useTitle: () => g.intl.string(g.t.uancuJ),
        useSubtitle: () => g.intl.string(g.t.I1Eoqq),
        useValue: function () {
            return (0, O.bG)([lj.Ay], () => lj.Ay.getQoS());
        },
        setValue: function (e) {
            ac.A.setQoS(e);
        },
        usePredicate: function () {
            return (0, O.bG)([lj.Ay], () => lj.Ay.supports(al.O5.QOS));
        },
    }),
    a8 = (0, o.zD)(u.X.VOICE_SILENCE_WARNING_SETTING, {
        useTitle: () => g.intl.string(g.t["4rsOPQ"]),
        useSubtitle: () => g.intl.string(g.t.jtiiCw),
        useValue: function () {
            return (0, O.bG)([lj.Ay], () => lj.Ay.getEnableSilenceWarning());
        },
        setValue: function (e) {
            ac.A.setSilenceWarning(e);
        },
        usePredicate: function () {
            return ev.isPlatformEmbedded;
        },
    }),
    a7 = (0, o.bd)(u.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? g.intl.string(g.t.KHsSWK) : g.intl.string(g.t.PPDo5V);
        },
        useCollapsedSubtitle: () =>
            aW(u.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
                limit: (0, O.bG)([lj.Ay], () => lj.Ay.isInputProfileCustom()) ? 3 : 2,
            }),
        buildLayout: () => [aZ, a6, a2, a8, a1, a3, a$, a4, a5],
    }),
    a9 = (0, o.zD)(u.X.VOICE_ECHO_CANCELLATION_SETTING, {
        useTitle: () => g.intl.string(g.t.iWTwu6),
        useValue: function () {
            return (0, O.bG)([lj.Ay], () => lj.Ay.getEchoCancellation());
        },
        setValue: function (e) {
            ac.A.setEchoCancellation(e, { page: q.liQ.USER_SETTINGS, section: q.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, O.bG)([lj.Ay, aw.A], () => {
                let e = lj.Ay.getInputDeviceId();
                return aw.A.hasEchoCancellation(e);
            });
        },
        usePredicate: function () {
            return (0, O.bG)([lj.Ay], () => lj.Ay.isInputProfileCustom());
        },
    });
var oe = i(459838),
    ot = i(451988),
    oi = i(640940),
    on = i(160671);
let os = (0, sS.Ld)();
function ol(e) {
    let { isSpeaking: t, className: i, id: n, ariaDescribedBy: s, ariaLabelledBy: l, disabled: r } = e;
    return (0, p.jsx)("div", {
        role: "meter",
        className: ew()(oi.$I, i),
        id: n,
        "aria-describedby": s,
        "aria-labelledby": l,
        "aria-valuenow": t && !r ? 100 : 0,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuetext": t && !r ? g.intl.string(g.t.haLKZ0) : g.intl.string(g.t.X2hJL7),
        children: (0, p.jsx)("div", { className: ew()(oi.Jx, oi.NU, { [oi.zY]: t && !r, [oi.r9]: r }) }),
    });
}
function or(e) {
    let { volume: t, id: i, ariaDescribedBy: n, ariaLabelledBy: s, disabled: l } = e,
        { threshold: r, autoThreshold: a } = (0, O.cf)([lj.Ay], () => ({
            threshold: lj.Ay.getModeOptions().threshold,
            autoThreshold: lj.Ay.getModeOptions().autoThreshold,
        })),
        o = (0, O.bG)([lj.Ay], () => lj.Ay.getMode());
    return (0, p.jsx)("section", {
        className: ew()(oi.Mo, oi.jW),
        id: i,
        "aria-describedby": n,
        "aria-labelledby": s,
        children: (0, p.jsx)(i8.A, {
            initialValue: r + 100,
            onValueRender: (e) => `${(-((100 - e) * 1)).toFixed(0)}dB`,
            onValueChange: (e) => {
                var t;
                return (t = -((100 - e) * 1)), void ac.A.setMode(o, { threshold: t, autoThreshold: a });
            },
            barStyles: { background: w.A.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: w.A.unsafe_rawColors.YELLOW_300.css },
            "aria-labelledby": os,
            disabled: l,
            children: (0, p.jsxs)("div", {
                className: ew()(oi.NU, oi.TL, oi.Jx, on.bar),
                children: [
                    (0, p.jsx)("div", { className: ew()(oi.GS, oi.SH), style: { width: l ? 0 : t + 100 + "%" } }),
                    (0, p.jsx)("div", { className: "grow" }),
                ],
            }),
        }),
    });
}
let oa = (0, o.E2)(u.X.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useSearchTerms: () => [g.intl.string(g.t["sqUm+k"]), g.intl.string(g.t.I1Zuq0), g.intl.string(g.t.nuFtHH)],
    usePredicate: () => (0, O.bG)([lj.Ay], () => lj.Ay.isInputProfileCustom()),
    Component: function () {
        let { autoThreshold: e, disabled: t } = (0, O.cf)([lj.Ay], () => ({
                autoThreshold: lj.Ay.getModeOptions().autoThreshold,
                disabled: lj.Ay.getMode() !== al.TB.VOICE_ACTIVITY,
            })),
            i = N.useCallback((e) => {
                let t = lj.Ay.getMode(),
                    { threshold: i } = lj.Ay.getModeOptions();
                ac.A.setMode(t, { autoThreshold: e, threshold: i });
            }, []),
            n = (0, O.bG)([lj.Ay], () => lj.Ay.supports(al.O5.AUTOMATIC_VAD)),
            { volume: s, isSpeaking: l } = (function () {
                let [e, t] = N.useState(-100),
                    [i, n] = N.useState(!1);
                function s(e, i) {
                    t(e), n((i & al.ME.VOICE) === al.ME.VOICE);
                }
                return (
                    N.useEffect(() => {
                        let e = new ot.Ep();
                        return (
                            e.start(1e3, () => {
                                lj.Ay.getMediaEngine().on(oe.bg.VoiceActivity, s), e.stop();
                            }),
                            () => {
                                lj.Ay.getMediaEngine().removeListener(oe.bg.VoiceActivity, s), e.stop();
                            }
                        );
                    }, []),
                    { volume: e, isSpeaking: i }
                );
            })(),
            r = (0, O.bG)([lj.Ay], () => lj.Ay.isEnabled()),
            a = N.useMemo(
                () =>
                    !r &&
                    (0, p.jsx)("div", {
                        className: oi.B4,
                        children: (0, p.jsx)(y.w, {
                            type: "warning",
                            children: g.intl.format(g.t["O13I+O"], { onEnableClick: () => ac.A.enable(!0) }),
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
                                  ? (0, p.jsx)(ol, {
                                        isSpeaking: l,
                                        className: oi.UJ,
                                        ariaDescribedBy: d,
                                        ariaLabelledBy: u,
                                        disabled: t,
                                    })
                                  : (0, p.jsx)(or, { volume: s, ariaDescribedBy: d, ariaLabelledBy: u, disabled: t }),
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
                                  ? (0, p.jsx)(ol, {
                                        isSpeaking: l,
                                        className: oi.UJ,
                                        id: i.controlId,
                                        ariaDescribedBy: i.describedById,
                                        ariaLabelledBy: i.labelId,
                                        disabled: t,
                                    })
                                  : (0, p.jsx)(or, {
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
var oo = i(366010);
let ou = i(993830),
    od = i(413142),
    oc = { page: q.liQ.USER_SETTINGS, section: q.JJy.SETTINGS_VOICE_AND_VIDEO };
function og() {
    let e = (0, O.bG)([iu.A], () => (0, oo.q)(iu.A.theme));
    return (0, p.jsx)("img", { src: e ? ou : od, width: 48, height: 32, alt: "" });
}
let om = (0, o.E2)(u.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [g.intl.string(g.t.t8Qhib), g.intl.string(g.t.hmfkCi)],
    usePredicate: function () {
        return (0, O.bG)([lj.Ay], () => lj.Ay.isInputProfileCustom() && lj.Ay.isNoiseSuppressionSupported());
    },
    Component: function () {
        let e = N.useCallback((e) => {
                ac.A.setNoiseCancellation("KRISP" === e, oc), ac.A.setNoiseSuppression("STANDARD" === e, oc);
            }, []),
            {
                noiseCancellation: t,
                noiseSuppression: i,
                isNoiseSuppressionSupported: n,
                isNoiseCancellationSupported: s,
            } = (0, O.cf)([lj.Ay], () => ({
                noiseCancellation: lj.Ay.getNoiseCancellation(),
                noiseSuppression: lj.Ay.getNoiseSuppression(),
                isNoiseSuppressionSupported: lj.Ay.isNoiseSuppressionSupported(),
                isNoiseCancellationSupported: lj.Ay.isNoiseCancellationSupported(),
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
                s && (0, p.jsx)(og, {}),
            ],
        });
    },
});
var oh = i(944993),
    oA = i(509381);
let oE = !n9.Av;
function ox() {
    return (0, O.bG)([lj.Ay], () => lj.Ay.getMode() === al.TB.PUSH_TO_TALK);
}
let oT = (0, o.zD)(u.X.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function () {
        return n9.Av ? g.intl.string(g.t.tG4Np5) : g.intl.string(g.t.JMyQin);
    },
    useSubtitle: function () {
        let e = (0, O.bG)([lj.Ay], () => lj.Ay.getMode());
        return N.useMemo(() => {
            if (!n9.Av && e === al.TB.PUSH_TO_TALK)
                return g.intl.format(g.t["VHI4+Y"], { onDownloadClick: () => (0, oh._)("Help Text PTT") });
        }, [e]);
    },
    usePredicate: function () {
        return (0, O.bG)([lj.Ay], () => lj.Ay.getActiveInputProfile() !== oA.m.STUDIO);
    },
    useValue: function () {
        return (0, O.bG)([lj.Ay], () => lj.Ay.getMode() === al.TB.PUSH_TO_TALK);
    },
    setValue: function (e) {
        var t, n;
        (t = e ? al.TB.PUSH_TO_TALK : al.TB.VOICE_ACTIVITY),
            (n = [eM.A.USER_SETTINGS_VOICE_AND_VIDEO]),
            t === al.TB.PUSH_TO_TALK &&
                oE &&
                (0, C.openModalLazy)(async () => {
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
            ac.A.setMode(t, void 0, void 0, { analyticsLocations: n });
    },
    useSearchTerms: () => [g.intl.string(g.t["pS+K2L"]), g.intl.string(g.t.nuFtHH)],
});
var oS = i(285802);
let op = (0, o.E2)(u.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t["pS+K2L"]), g.intl.string(g.t.nuFtHH)],
        usePredicate: ox,
        Component: function () {
            let e = (0, O.bG)([lj.Ay], () => {
                    let { shortcut: e } = lj.Ay.getModeOptions();
                    return e;
                }),
                t = g.intl.format(g.t.HVvn5T, { onClick: () => (0, ej.openUserSettings)(u.X.KEYBINDS_PANEL) });
            return (0, p.jsx)(sy.D, {
                label: g.intl.string(g.t["o+BJQR"]),
                description: t,
                layout: "horizontal-responsive",
                children: (0, p.jsx)("div", {
                    className: oS.e,
                    children: (0, p.jsx)(tR.A, {
                        defaultValue: e,
                        onChange: (e) => ac.A.setMode(q.TBI.PUSH_TO_TALK, { shortcut: e }),
                    }),
                }),
            });
        },
    }),
    oN = (0, o.sN)(u.X.VOICE_PUSH_TO_TALK_RELEASE_DELAY_SETTING, {
        useTitle: () => g.intl.string(g.t.GCNMM8),
        useSearchTerms: () => [g.intl.string(g.t["pS+K2L"]), g.intl.string(g.t.nuFtHH)],
        setValue: function (e) {
            ac.A.setMode(q.TBI.PUSH_TO_TALK, { delay: e });
        },
        minValue: 0,
        maxValue: q.IjB,
        getInitialValue: function () {
            let { delay: e } = lj.Ay.getModeOptions();
            return e;
        },
        onValueRender: function (e) {
            return e >= 1e3 ? ((e /= 1e3), `${e.toFixed(2)}s`) : `${e.toFixed(0)}\u00A0ms`;
        },
        usePredicate: ox,
    }),
    of = (0, o.Qx)(u.X.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => g.intl.string(g.t.LM3U3k),
        usePredicate: function () {
            let { enabledInputProfiles: e } = (0, aB._)({ location: "SettingsRendererConfig" });
            return e.length > 0;
        },
        useSearchTerms: () => [g.intl.string(g.t.nuFtHH), g.intl.string(g.t.VZPR0R), g.intl.string(g.t.cjPbpT)],
        useValue: function () {
            return (0, O.bG)([lj.Ay], () => lj.Ay.getActiveInputProfile() ?? oA.m.CUSTOM);
        },
        setValue: function (e) {
            let t = [eM.A.USER_SETTINGS_VOICE_AND_VIDEO];
            ac.A.setActiveInputProfile(e, { analyticsLocations: t });
        },
        useOptions: function () {
            let { enabledInputProfiles: e } = (0, aB.d)({ location: "InputProfileCategory" });
            return [
                { value: oA.m.VOICE_ISOLATION, name: g.intl.string(g.t.cjPbpT), desc: g.intl.string(g.t.CzhvnE) },
                { value: oA.m.STUDIO, name: g.intl.string(g.t.VZPR0R), desc: g.intl.string(g.t.ZaJksS) },
                { value: oA.m.CUSTOM, name: g.intl.string(g.t["N/PQjv"]), desc: g.intl.string(g.t.SnBmuY) },
            ].filter((t) => {
                let { value: i } = t;
                return e.includes(i);
            });
        },
    }),
    oC = (0, o.zZ)(u.X.VOICE_INPUT_PROFILE_CATEGORY, {
        useInlineNotice: function () {
            let e = (0, O.bG)([aw.A, lj.Ay], () => {
                let e = lj.Ay.getInputDeviceId();
                return (
                    (aw.A.hasEchoCancellation(e) || aw.A.hasNoiseSuppression(e) || aw.A.hasAutomaticGainControl(e)) &&
                    lj.Ay.isInputProfileCustom()
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
        buildLayout: () => [of, oa, om, a9, oT, op, oN, a7],
    });
var o_ = i(403581),
    oI = i(983851),
    ob = i(687021),
    ov = i(128450),
    oj = i(796774),
    oy = i(209932),
    oO = i(813564),
    oR = i(984813),
    oL = i(22231),
    oD = i(927578),
    oP = i(792348),
    oG = i(674168),
    oU = i(334348),
    oM = i(805945),
    oV = i(902460);
function ok(e) {
    let { onSelect: t } = e,
        [i, n] = N.useState(!1),
        s = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
        l = oD.Ay.canUseCustomCallSounds(s),
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
                children: (0, p.jsx)(oU.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: a,
                    gridNotice: l ? null : (0, p.jsx)(oG.m, {}),
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
                children: (0, p.jsx)(oL.R, { size: "md", color: "currentColor", className: oV.Wo }),
            }),
    });
}
function ow(e) {
    let { sound: t } = e,
        { previewSound: i } = (0, oP.A)(t, null),
        n =
            0 === (0, oO.wH)()
                ? g.intl.string(g.t.OASXjt)
                : g.intl.formatToPlainString(g.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name });
    return (0, p.jsx)(oM.dT, {
        onClick: i,
        text: n,
        children: (0, p.jsx)(oI.H, { size: "md", color: "currentColor", className: oV.wg }),
    });
}
function oB(e) {
    let { sound: t, isGlobal: i, onSelect: n } = e,
        s = null != t,
        l = t?.emojiId,
        r = t?.emojiName,
        a = s && (null != r || null != l);
    return (0, p.jsxs)("div", {
        className: oV.D6,
        children: [
            (0, p.jsxs)("div", {
                className: oV.kL,
                children: [
                    a && (0, p.jsx)(sa.A, { emojiId: l, emojiName: r, className: oV.Zg }),
                    (0, p.jsx)(V.E, {
                        variant: "text-md/normal",
                        color: "text-strong",
                        className: oV.dj,
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
                        ? (0, p.jsx)(ow, { sound: t })
                        : (0, p.jsx)(oI.H, { size: "md", color: "currentColor", className: oV.Gk }),
                ],
            }),
            (0, p.jsxs)("div", {
                className: oV.kL,
                children: [
                    (0, p.jsx)(ok, { onSelect: n }),
                    s &&
                        !i &&
                        (0, p.jsx)(oM.dT, {
                            onClick: () => n(null),
                            text: g.intl.string(g.t.jmtcGA),
                            children: (0, p.jsx)(lS.u, {
                                size: "md",
                                color: w.A.unsafe_rawColors.RED_400.css,
                                className: oV.Wo,
                            }),
                        }),
                ],
            }),
        ],
    });
}
var oF = i(617617);
i(980504);
var oz = i(811249);
function oY(e) {
    return (0, O.bG)([oy.A], () => {
        if (null == e) return null;
        let { guildId: t, soundId: i } = e;
        return oy.A.getSound("0" === t ? "0" : t, i);
    });
}
function oX(e) {
    let { guildId: t } = e,
        i = (0, O.bG)([oF.A], () => oF.A.settings.guilds?.guilds?.[t]?.joinSound),
        n = oY(i);
    if (null == i || null == n) return null;
    let { emojiId: s, emojiName: l } = n,
        r = null != s || null != l;
    return (0, p.jsxs)("div", {
        className: oz.Io,
        children: [
            r
                ? (0, p.jsx)(sa.A, { emojiId: s, emojiName: l, className: oz.nW })
                : (0, p.jsx)(oI.H, { size: "md", color: "currentColor", className: oz.nW }),
            (0, p.jsx)(V.E, { className: oz.dK, variant: "text-xs/medium", children: n.name }),
        ],
    });
}
let oH = (0, o.E2)(u.X.ENTRANCE_SOUNDS_SETTING, {
    useSearchTerms: () => [g.intl.string(g.t.nzUc3B)],
    Component: function () {
        let { analyticsLocations: e } = (0, nG.Ay)(),
            [t, i] = N.useState("0"),
            n = (0, oR.mz)(t),
            s = oY(n),
            l = n?.type === oR.PP.GLOBAL,
            r = (0, O.bG)([oy.A], () => oy.A.hasFetchedAllSounds()) && null != n && null == s;
        N.useEffect(() => {
            r && (0, oO.ND)({ location: e });
        }, [r, e]),
            N.useEffect(() => {
                (0, oj.E7)();
            }, []);
        let a = N.useCallback((e, t) => {
            let { inDropdown: i } = t;
            return null == e ? null : i ? (0, p.jsx)(oX, { guildId: e.value }) : null;
        }, []);
        return (0, p.jsxs)(ia.n, {
            label: g.intl.string(g.t.nzUc3B),
            description: g.intl.format(g.t.u9RWmv, { helpdeskArticle: ta.A.getArticleURL(q.MVz.SOUNDBOARD) }),
            children: [
                (0, p.jsx)(ob.A, {
                    guildId: t,
                    className: oz.Dt,
                    globalOption: { label: g.intl.string(g.t["CpEUP/"]), value: "0" },
                    onChange: (e) => {
                        i(null == e ? "0" : e.id);
                    },
                    renderOptionSuffix: a,
                    hideDivider: !0,
                }),
                (0, p.jsxs)(ov.A, {
                    title: g.intl.format(g.t.I2TsYN, {
                        nitroWheelHook: () => (0, p.jsx)(o_.t, { size: "md", color: "currentColor", className: oz.ax }),
                    }),
                    children: [
                        (0, p.jsx)(oB, {
                            sound: s,
                            isGlobal: l,
                            onSelect: (i) => {
                                null == i ? (0, oO.Dv)(t, e) : (0, oO.un)(t, i, e);
                            },
                        }),
                        r &&
                            (0, p.jsx)(tr.p, {
                                className: oz.lm,
                                messageType: tr.Y.WARNING,
                                children: g.intl.string(g.t.WkPsFR),
                            }),
                    ],
                }),
            ],
        });
    },
});
var oK = i(824744);
let oW = (0, o.sN)(u.X.SOUNDBOARD_VOLUME_SETTING, {
    useTitle: () => g.intl.string(g.t.kbFsAD),
    useSubtitle: () => g.intl.format(g.t.BPbGq7, { helpCenterArticle: ta.A.getArticleURL(q.MVz.SOUNDBOARD) }),
    setValue: function (e) {
        let t = [eM.A.USER_SETTINGS_VOICE_AND_VIDEO],
            i = (0, oK.w)(e);
        (0, oj.iy)(i, t);
    },
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let e = (0, oO.wH)();
        return (0, oK.M)(e);
    },
    onValueRender: function (e) {
        return `${e.toFixed(0)}%`;
    },
});
var oZ = i(864145);
let oq = (0, o.sN)(u.X.SOUNDMOJI_VOLUME_SETTING, {
        useTitle: () => g.intl.string(g.t["2JbvKw"]),
        useSubtitle: () => g.intl.string(g.t.INenzY),
        setValue: function (e) {
            let t = (0, oK.w)(e);
            c.HO.updateSetting(t);
        },
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = c.HO.getSetting();
            return (0, oK.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        usePredicate: function () {
            return (0, oZ.X)({ location: "SoundmojiVolumeSetting" });
        },
    }),
    oQ = (0, o.zZ)(u.X.SOUNDBOARD_CATEGORY, {
        useTitle: () => g.intl.string(g.t.ABjMWI),
        buildLayout: () => [oW, oq, oH],
    });
var oJ = i(803224),
    o$ = i(552122);
let o0 = (0, o.E2)(u.X.SOUNDS_HOLIDAY_NOTICE, {
        useSearchTerms: () => [g.intl.string(g.t.fgSHf8)],
        usePredicate: () => null != o$.A.useHolidaySoundpack(),
        Component: () =>
            (0, p.jsx)(V.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: g.intl.format(g.t.Eup6Wv, {
                    onClick: () => (0, ej.openUserSettings)(u.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                }),
            }),
    }),
    o1 = (0, o.AK)(u.X.VOICE_AND_VIDEO_TO_NOTIFICATION_SOUNDS_NAVIGATOR, {
        useSubtitle: () => g.intl.string(g.t.eyGEE4),
        useSearchTerms: () => [g.intl.string(g.t.eyGEE4)],
        destinationKey: u.X.NOTIFICATIONS_SOUNDS_CATEGORY,
    }),
    o2 = (0, o.gN)(u.X.VOICE_AND_VIDEO_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [o1] });
var o3 = i(264686);
let o6 = (0, np.D)(() => ({ currentPlayingSound: null }));
function o4() {
    let e = o6.getField("currentPlayingSound");
    e?.stop(), o6.setState({ currentPlayingSound: null });
}
function o5(e) {
    let t = o6.getField("currentPlayingSound");
    t?.stop();
    let i = (0, rh.Ak)(e);
    o6.setState({ currentPlayingSound: i });
}
function o8(e) {
    return (0, o.zD)(`${u.X.SOUNDS_LIST_ITEM_PREFIX}${e.sound}`, {
        useTitle: e.useTitle,
        useSubtitle: () => g.intl.format(g.t.OOiGCM, { onClick: () => o5(e.sound) }),
        useValue: () => {
            let t = (0, O.bG)([oJ.A], () => oJ.A.isSoundDisabled(e.sound)),
                i = e.useDisabled?.();
            return !t && !i;
        },
        setValue: (t) => {
            let i = oJ.A.getDisabledSounds().filter((t) => t !== e.sound);
            t || i.push(e.sound), o3.default.setDisabledSounds(i);
        },
        useDisabled: () => {
            let t = e.useDisabled?.(),
                i = (0, O.bG)([oJ.A], () => oJ.A.getDisableAllSounds());
            return t || i;
        },
        useDisabledMessage: e.useDisabledMessage,
    });
}
let o7 = [
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
    o9 = (0, o.D1)(u.X.VOICE_AND_VIDEO_SOUNDS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (e, t) =>
            e
                ? g.intl.formatToPlainString(g.t["0JYT98"], { count: t })
                : g.intl.formatToPlainString(g.t.ji1uNt, { count: t }),
        useCollapsedSubtitle: () => aW(u.X.VOICE_AND_VIDEO_SOUNDS_LIST, { limit: 3 }),
        initialize: function () {
            return () => {
                o4();
            };
        },
        buildLayout: () => o7.map((e) => o8(e)),
    }),
    ue = (0, o.zZ)(u.X.SOUNDS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.MKWyKc),
        useInlineNotice: function () {
            let e = (0, O.bG)([oJ.A], () => oJ.A.getDisableAllSounds());
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
        buildLayout: () => [o9, o0, o2],
    }),
    ut = (0, o.zD)(u.X.STREAMING_SHOW_STREAM_PREVIEWS, {
        useTitle: () => g.intl.string(g.t.e3Zz3F),
        useSubtitle: () => g.intl.string(g.t.RztTjP),
        useValue: function () {
            return !c.uh.useSetting();
        },
        setValue: function (e) {
            (0, aP.A)("stream_previews_disabled", !e, c.uh.getSetting(), [eM.A.USER_SETTINGS_VOICE_AND_VIDEO]),
                c.uh.updateSetting(!e);
        },
    }),
    ui = (0, o.zD)(u.X.STREAMING_ADVANCED_SCREENSHARE, {
        useTitle: () => g.intl.string(g.t.GmWk2E),
        useSearchTerms: () => [g.intl.string(g.t["Fj/xn1"])],
        useSubtitle: () => g.intl.string(g.t["Fj/xn1"]),
        useValue: function () {
            return (0, O.bG)([lj.Ay], () => lj.Ay.getVideoHook());
        },
        setValue: ac.A.setVideoHook,
        usePredicate: function () {
            return (0, O.bG)([lj.Ay], () => lj.Ay.supportsVideoHook());
        },
    }),
    un = (0, o.zD)(u.X.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
        useTitle: () => g.intl.string(g.t["4I0qzZ"]),
        useValue: function () {
            return (0, O.bG)([lj.Ay], () => lj.Ay.getExperimentalSoundshare());
        },
        setValue: ac.A.setExperimentalSoundshare,
        usePredicate: function () {
            return (0, O.bG)([lj.Ay], () => {
                let e = lj.Ay.supportsExperimentalSoundshare(),
                    t = lj.Ay.supportsHookSoundshare();
                return e && t;
            });
        },
    }),
    us = (0, o.zD)(u.X.STREAMING_STREAM_ATTENUATION, {
        useTitle: () => g.intl.string(g.t["/jwMtn"]),
        useSubtitle: () => g.intl.string(g.t.zlA23F),
        useValue: function () {
            return (0, O.bG)([lj.Ay], () => lj.Ay.getSidechainCompression());
        },
        setValue: function (e) {
            let t = [eM.A.USER_SETTINGS_VOICE_AND_VIDEO];
            ac.A.setSidechainCompression(e, { analyticsLocations: t });
        },
        usePredicate: function () {
            return lj.Ay.supports(al.O5.SIDECHAIN_COMPRESSION);
        },
    }),
    ul = (0, o.sN)(u.X.STREAMING_STREAM_ATTENUATION_STRENGTH, {
        useTitle: () => g.intl.string(g.t.fhEzfj),
        setValue: function (e) {
            let t = [eM.A.USER_SETTINGS_VOICE_AND_VIDEO];
            ac.A.setSidechainCompressionStrength(e, { analyticsLocations: t });
        },
        minValue: 1,
        maxValue: 100,
        getInitialValue: lj.Ay.getSidechainCompressionStrength,
        usePredicate: function () {
            return lj.Ay.supports(al.O5.SIDECHAIN_COMPRESSION);
        },
    }),
    ur = (0, o.zD)(u.X.STREAMING_OS_MENU_SCREEN_CAPTURE, {
        useTitle: () => g.intl.string(g.t.lt8rRx),
        useSubtitle: () => g.intl.string(g.t.ie1mgY),
        useValue: function () {
            return (0, O.bG)([lj.Ay], () => lj.Ay.getUseSystemScreensharePicker());
        },
        setValue: function (e) {
            (0, n9.cX)() && e
                ? (0, se.A)({
                      title: g.intl.string(g.t["9jf31O"]),
                      subtitle: g.intl.string(g.t.uBd6JW),
                      variant: "primary",
                      onConfirm: () => {
                          ac.A.setUseSystemScreensharePicker(e), s2.A.app.relaunch();
                      },
                      confirmText: g.intl.string(g.t.BddRzS),
                  })
                : ac.A.setUseSystemScreensharePicker(e);
        },
        usePredicate: function () {
            return (0, O.bG)([lj.Ay], () => lj.Ay.supportsSystemScreensharePicker() && (0, n9.cX)());
        },
    }),
    ua = (0, o.bd)(u.X.STREAMING_ADVANCED_ACCORDION, {
        useTitle: (e) => (e ? g.intl.string(g.t.qrMyvm) : g.intl.string(g.t.LEtTNl)),
        useCollapsedSubtitle: () => aW(u.X.STREAMING_ADVANCED_ACCORDION),
        buildLayout: () => [us, ul, ur, un, ui],
    }),
    uo = (0, o.zZ)(u.X.STREAMING_CATEGORY, { useTitle: () => g.intl.string(g.t.KDdjou), buildLayout: () => [ut, ua] }),
    uu = (0, o.E2)(u.X.VOICE_MICROPHONE_INPUT_SELECT, {
        useSearchTerms: () => [g.intl.string(g.t.hHMYbb), g.intl.string(g.t.nuFtHH)],
        Component: function () {
            return (0, p.jsx)(at.U, {
                label: g.intl.string(g.t.UTM8VP),
                deviceType: al.oh.AUDIO_INPUT,
                location: "UserSettingsVoiceVideo",
                hideDeviceTypeIcon: !0,
            });
        },
    }),
    ud = (0, o.E2)(u.X.VOICE_SPEAKER_OUTPUT_SELECT, {
        useSearchTerms: () => [g.intl.string(g.t.dl18zb), g.intl.string(g.t["3182VD"]), g.intl.string(g.t["DGq/PR"])],
        Component: function () {
            return (0, p.jsx)(at.U, {
                label: g.intl.string(g.t.xuYQ0n),
                deviceType: al.oh.AUDIO_OUTPUT,
                location: "UserSettingsDevices",
                hideDeviceTypeIcon: !0,
            });
        },
    }),
    uc = (0, o.zC)(u.X.VOICE_INPUT_OUTPUT_DEVICE_SPLIT, { buildLayout: () => [uu, ud] }),
    ug = (0, o.sN)(u.X.VOICE_INPUT_VOLUME_SETTING, {
        useTitle: () => g.intl.string(g.t.Rtsr6w),
        useSearchTerms: () => [g.intl.string(g.t.eATD2B), g.intl.string(g.t["3182VD"]), g.intl.string(g.t["DGq/PR"])],
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = lj.Ay.getInputVolume();
            return (0, oK.M)(e);
        },
        asValueChanges: function (e) {
            let t = [eM.A.USER_SETTINGS_VOICE_AND_VIDEO],
                i = (0, oK.w)(e);
            ac.A.setInputVolume(i, { analyticsLocations: t });
        },
    }),
    um = (0, o.sN)(u.X.VOICE_OUTPUT_VOLUME_SETTING, {
        useTitle: () => g.intl.string(g.t.aUJ062),
        useSearchTerms: () => [g.intl.string(g.t.eATD2B), g.intl.string(g.t["3182VD"]), g.intl.string(g.t["DGq/PR"])],
        minValue: 0,
        maxValue: 200,
        getInitialValue: function () {
            let e = lj.Ay.getOutputVolume();
            return (0, oK.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        asValueChanges: function (e) {
            let t = [eM.A.USER_SETTINGS_VOICE_AND_VIDEO],
                i = (0, oK.w)(e);
            ac.A.setOutputVolume(i, { analyticsLocations: t });
        },
    }),
    uh = (0, o.zC)(u.X.VOICE_INPUT_OUTPUT_VOLUME_SPLIT, { buildLayout: () => [ug, um] });
var uA = i(702841),
    uE = i(349288),
    ux = i(152567),
    uT = i(644426);
let uS = `${ta.A.getArticleURL(q.MVz.VOICE_VIDEO_TROUBLESHOOTING)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm`,
    up = (0, o.E2)(u.X.VOICE_MICROPHONE_TEST_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t.nuFtHH)],
        usePredicate: function () {
            return (0, uA.bG)([lj.Ay], () => lj.Ay.supports(al.O5.LOOPBACK));
        },
        Component: function () {
            return (0, uA.bG)([lj.Ay], () => lj.Ay.supports(al.O5.LOOPBACK))
                ? (0, p.jsx)(ux.A, {
                      size: "md",
                      notchBackground: ux.V.GRAY,
                      captionVoice: g.intl.string(g.t.bp3JOV),
                      captionNoVoice: (0, p.jsxs)(p.Fragment, {
                          children: [
                              (0, p.jsx)(V.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-default",
                                  children: g.intl.string(g.t.bgn75v),
                              }),
                              g.intl.string(g.t["MA+OZh"]),
                              (0, p.jsx)(uE.Anchor, {
                                  className: uT.X,
                                  href: ta.A.getArticleURL(q.MVz.NO_INPUT_DETECTED),
                                  children: g.intl.string(g.t.RYKKox),
                              }),
                          ],
                      }),
                      helpText: g.intl.format(g.t["V+B3FH"], { guideURL: uS }),
                      buttonTest: g.intl.string(g.t.gyljWE),
                      buttonStop: g.intl.string(g.t.I6OnJ3),
                      buttonVariant: "primary",
                      location: { page: q.liQ.USER_SETTINGS, section: q.JJy.SETTINGS_VOICE_AND_VIDEO },
                  })
                : null;
        },
    }),
    uN = ev.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];
function uf(e) {
    let { inputAndOutputAreBluetooth: t, canPromptSystemServiceInstallForVoice: i } = e;
    return (0, p.jsxs)(R.B, {
        children: [
            i && (0, p.jsx)(lL, { sourcePage: "voice" }),
            t && (0, p.jsx)(si.A, { look: si.k.WARNING, children: g.intl.string(g.t.Ioz3gx) }),
        ],
    });
}
let uC = (0, o.zZ)(u.X.VOICE_CATEGORY, {
        useTitle: () => g.intl.string(g.t.K3lovD),
        useInlineNotice: function () {
            let e = lR("voice"),
                t = (0, ai.x5)(al.oh.AUDIO_INPUT),
                i = (0, ai.x5)(al.oh.AUDIO_OUTPUT),
                n = N.useMemo(() => {
                    let e = uN.some((e) => t?.hardwareId?.startsWith(e)),
                        n = uN.some((e) => i?.hardwareId?.startsWith(e));
                    return e && n && t?.containerId != null && t.containerId === i?.containerId;
                }, [t, i]);
            return N.useMemo(
                () =>
                    e.canPrompt || n
                        ? {
                              type: ef.lT.STRONGLY_DISCOURAGED_CUSTOM,
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
        buildLayout: () => [uc, uh, up],
    }),
    u_ = (0, o.t_)(u.X.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => g.intl.string(g.t.B1fFpf),
        buildLayout: () => [uC, oC, ad, uo, ue, oQ, ak],
    }),
    uI = (0, o.i4)(u.X.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.B1fFpf),
        usePredicate: () => lj.Ay.isSupported(),
        icon: r1.c,
        useMenu: r2.A,
        buildLayout: () => [u_],
    }),
    ub = (0, o.zD)(u.X.OS_START_MINIMIZED, {
        useTitle: () => g.intl.string(g.t.GfBL83),
        useSubtitle: () => g.intl.string(g.t.XGyhhc),
        usePredicate: () => (0, n9.uF)(),
        useValue: () => rt.useState((e) => !!e.openOnStartup && e.startMinimized),
        setValue: function (e) {
            rt.setState({ startMinimized: e }), st.Ay.send("TOGGLE_START_MINIMIZED", e);
        },
        useDisabled: () => !rt.useState((e) => e.openOnStartup),
        initialize: () => {
            st.Ay.getSetting("START_MINIMIZED", !1).then((e) => rt.setState({ startMinimized: e }));
        },
    }),
    uv = (0, o.zZ)(u.X.WINDOWS_CATEGORY, {
        buildLayout: () => [rn, ub, rs, rr],
        initialize: () => {
            ri();
        },
    }),
    uj = (0, o.t_)(u.X.WINDOWS_PANEL, { useTitle: () => g.intl.string(g.t.ZkDZov), buildLayout: () => [uv] }),
    uy = (0, o.i4)(u.X.WINDOWS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.ZkDZov),
        icon: e2.k,
        usePredicate: () => ev.isPlatformEmbedded && (0, ev.isWindows)(),
        buildLayout: () => [uj],
    }),
    uO = (0, o.WI)(u.X.APP_SECTION, {
        useTitle: () => g.intl.string(g.t.f2n1TP),
        buildLayout: function () {
            return [uI, lA, n0, r0, l5, re, uy, ru].filter(t6.Vq);
        },
    });
var uR = i(360669),
    uL = i(974544),
    uD = i(194261),
    uP = i(289873),
    uG = i(465323),
    uU = i(391048),
    uM = i(753390),
    uV = i(99696),
    uk = i(202613),
    uw = i(580630),
    uB = i(83617),
    uF = i(935208),
    uz = i(607399),
    uY = i(150934),
    uX = i(256006),
    uH = i(615405),
    uK = i(198970),
    uW = i(71532);
let uZ = /[^0-9/]/g,
    uq = /[^0-9]/g;
class uQ extends N.PureComponent {
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
                ((n = (i = e.replace(uZ, "").split("/"))[0]),
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
            ? (u = u.replace(uq, ""))
            : u === r && e.includes("/") && !r.includes("/") && (u += "/"),
            u.length > e.length && (d += u.length - e.length),
            (this.selectionStart = d),
            null != a && a(u, t);
    };
    render() {
        return (0, p.jsx)(lP.k, {
            ...this.props,
            inputMode: "numeric",
            onChange: this.handleChange,
            inputRef: this.setRef,
        });
    }
}
var uJ = i(832208),
    u$ = i(536439);
let u0 = [
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
                        getClassNameForLayout: () => u$.ep,
                        renderInput: (e) => (0, p.jsx)(uQ, { ...e }),
                    },
                }.expirationDate,
            ],
        },
    ],
    u1 = function (e) {
        let { onCardInfoChange: t, className: i, expirationDate: n, error: s } = e,
            [l, r] = N.useState(!1),
            [a, o] = N.useState(null),
            [u, d] = N.useState(n);
        return (
            N.useEffect(() => {
                t({ expirationDate: u }, null === a);
            }, [u, t, a]),
            (0, p.jsx)(uJ.A, {
                className: i,
                form: u0,
                values: { expirationDate: u },
                errors: null != a ? { expirationDate: a } : {},
                formError: s,
                onFieldChange: (e) => {
                    l || "" === e || r(!0),
                        (l && "" === e) || !(0, uW.So)(e) ? o(g.intl.string(g.t["9/zZdl"])) : o(null),
                        d(e);
                },
            })
        );
    };
var u2 = i(219887),
    u3 = i(276589);
let u6 = "isDefault";
class u4 extends N.PureComponent {
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
            expiresMonth: t instanceof uk.YS ? t.expiresMonth : void 0,
            expiresYear: t instanceof uk.YS ? t.expiresYear : void 0,
            billingAddressValid: !1,
            isDefault: i,
            expirationValid: !0,
            dirtyFields: {},
        };
    }
    componentWillUnmount() {
        n3.h.wait(() => {
            (0, uM.ey)(), (0, uM.tc)();
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
                      className: u3.zc,
                      children: (0, p.jsx)(y.w, { type: "critical", children: t.message }),
                  })
                : null
            : (0, p.jsx)("div", {
                  className: u3.zc,
                  children: (0, p.jsx)(y.w, { type: "critical", children: e.message }),
              });
    }
    renderBillingAddressSection() {
        let { billingAddress: e } = this.state,
            { updateError: t, paymentSource: i } = this.props,
            n = (0, uX.g)(i);
        return (0, p.jsxs)("div", {
            className: u3.yV,
            children: [
                (0, p.jsx)(V.E, {
                    className: u3.bV,
                    variant: "text-sm/normal",
                    children: g.intl.string(g.t["50Auo2"]),
                }),
                (0, p.jsx)(uK.Ay, {
                    ...e,
                    mode: uK.Ay.Modes.EDIT,
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
            className: u3.yV,
            children: [
                (0, p.jsx)(V.E, { className: u3.bV, variant: "text-sm/normal", children: g.intl.string(g.t.Fo2YP7) }),
                (0, p.jsx)(u1, {
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
            className: u3.AU,
            children: (0, p.jsxs)(R.B, {
                direction: "horizontal",
                justify: "space-between",
                children: [
                    (0, p.jsx)(ax.e, {
                        children: (0, p.jsxs)("div", {
                            className: u3.lH,
                            children: [
                                i
                                    ? (0, p.jsx)(e0.m, {
                                          text: g.intl.string(g.t["v6/z28"]),
                                          children: (0, p.jsx)("div", { "aria-hidden": !0, className: u3.dm }),
                                      })
                                    : null,
                                (0, p.jsx)(eA.$, {
                                    type: "button",
                                    disabled: i || e,
                                    loading: t,
                                    onClick: this.handleDelete,
                                    variant: "critical-secondary",
                                    size: uz.Fr ? "sm" : "md",
                                    text: uz.Fr ? g.intl.string(g.t.oyYWHE) : g.intl.string(g.t.yk5qfb),
                                }),
                            ],
                        }),
                    }),
                    (0, p.jsxs)(ax.e, {
                        children: [
                            (0, p.jsx)(eA.$, {
                                type: "button",
                                disabled: e || t,
                                onClick: this.handleCancel,
                                variant: "secondary",
                                size: uz.Fr ? "sm" : "md",
                                text: g.intl.string(g.t["ETE/oC"]),
                            }),
                            (0, p.jsx)(eA.$, {
                                loading: e,
                                disabled: !n || t || !s,
                                type: "submit",
                                variant: "active",
                                size: uz.Fr ? "sm" : "md",
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
            r = e instanceof uk.SJ;
        return (0, p.jsx)(er.Z, {
            editable: !0,
            className: ew()(u3.Nr, n),
            children: (0, p.jsxs)("form", {
                onSubmit: this.handleSubmit,
                noValidate: !0,
                children: [
                    this.renderError(),
                    (0, p.jsxs)("div", {
                        className: u3.__invalid_paymentSection,
                        children: [
                            (0, p.jsx)(u2.A, {
                                paymentSource: e,
                                isDefault: t,
                                isForSubscription: s,
                                locale: i,
                                showLabels: !0,
                                showPaymentSourceIcon: !0,
                            }),
                            e.invalid
                                ? (0, p.jsx)("div", { className: u3.Um, children: g.intl.string(g.t["3R0U0b"]) })
                                : null,
                            (0, p.jsx)("div", {
                                className: u3.Sv,
                                children: r
                                    ? g.intl.format(g.t.w9WkBl, { paypalURL: "https://www.paypal.com" })
                                    : g.intl.string(g.t.VXndyr),
                            }),
                        ],
                    }),
                    this.renderCardExpirationSection(),
                    this.renderBillingAddressSection(),
                    (0, p.jsx)("div", {
                        className: u3.D5,
                        children: (0, p.jsx)(uY.S, {
                            value: u6,
                            checked: l,
                            onChange: (e) => this.handleFieldChange(e, u6),
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
let u5 = O.Ay.connectStores([uH.A], () => ({ updateError: uH.A.editSourceError, removeError: uH.A.removeSourceError }))(
    u4,
);
var u8 = i(95322);
class u7 extends N.PureComponent {
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
            ? (0, p.jsx)(u5, {
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
                      n ? null : (0, p.jsx)(eE.c, { className: u8.__invalid_sourceDivider }),
                      (0, p.jsxs)("div", {
                          className: u8.Yb,
                          children: [
                              (0, p.jsx)(u2.A, {
                                  paymentSource: e,
                                  isDefault: t,
                                  isForSubscription: s,
                                  locale: l,
                                  showSubtext: !0,
                                  showLabels: !0,
                                  showPaymentSourceIcon: !0,
                              }),
                              (0, p.jsx)(eA.$, {
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
let u9 = N.memo(function (e) {
    let { paymentSource: t, hideDivider: i, isForSubscription: n, locale: s, onRedeemClick: l } = e,
        [r, a] = N.useState(null),
        o = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.storeCountry?.country ?? null);
    return (
        N.useEffect(() => {
            void 0 === t
                ? a({ amount: 0, currency: null != o ? (0, uG.TW)(`-${o}`) : (0, oD.Rr)() })
                : uM.YP(t.id).then((e) => {
                      a(e);
                  });
        }, [t, o]),
        (0, p.jsxs)(p.Fragment, {
            children: [
                i ? null : (0, p.jsx)(eE.c, { className: u8.__invalid_sourceDivider }),
                (0, p.jsxs)("div", {
                    className: u8.Yb,
                    children: [
                        void 0 !== t
                            ? (0, p.jsx)(u2.A, {
                                  paymentSource: t,
                                  isDefault: !1,
                                  isForSubscription: n,
                                  locale: s,
                                  showSubtext: !1,
                                  showLabels: !1,
                                  showPaymentSourceIcon: !0,
                              })
                            : (0, p.jsx)(V.E, { variant: "text-sm/medium", children: g.intl.string(g.t.wkFAZf) }),
                        (0, p.jsxs)("div", {
                            className: u8.zy,
                            children: [
                                (0, p.jsx)("div", {
                                    className: u8.Tq,
                                    children:
                                        null == r
                                            ? (0, p.jsx)(uP.y, { type: uP.y.Type.SPINNING_CIRCLE })
                                            : (0, p.jsx)(V.E, {
                                                  variant: "text-sm/medium",
                                                  children: (() => {
                                                      let { amount: e, currency: t } = r ?? {},
                                                          i = t ?? (0, oD.Rr)(),
                                                          n = String(i).toUpperCase(),
                                                          s = (0, uw.$g)(e ?? 0, i);
                                                      return `${n} ${s}`;
                                                  })(),
                                              }),
                                }),
                                (0, p.jsx)(eA.$, {
                                    variant: "secondary",
                                    onClick: l,
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
class de extends N.PureComponent {
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
        await (0, uB.c_)(e.id);
    };
    handleAddPaymentMethod = () => {
        (0, C.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(i.bind(i, 362111));
                return (t) => (0, p.jsx)(e, { ...t, onAddPaymentSource: this.handlePaymentSourceAdded });
            },
            {
                onCloseCallback: () => {
                    (0, uU.ET)();
                },
                onCloseRequest: q.tEg,
            },
        );
    };
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, p.jsxs)("div", {
            className: u8.qr,
            children: [
                0 === Object.keys(e).length
                    ? (0, p.jsxs)("div", {
                          className: u8.z8,
                          children: [
                              (0, p.jsx)(V.E, { variant: "text-sm/normal", children: g.intl.string(g.t.aRHpAB) }),
                              (0, p.jsx)("div", { className: u8.Sv, children: g.intl.string(g.t.o9bOIl) }),
                          ],
                      })
                    : null,
                (0, p.jsx)(eA.$, { onClick: this.handleAddPaymentMethod, text: g.intl.string(g.t.CpOiEO) }),
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
                .sort((e, t) => (e.id === i ? -1 : t.id === i ? 1 : uF.default.compare(e.id, t.id))),
            d = u.filter((e) => !(e instanceof uk.LQ)),
            c = u.filter((e) => e instanceof uk.LQ),
            m = this.state.editingPayment,
            h = d.findIndex((e) => e.id === m),
            A = d.map((e, t) =>
                (0, p.jsx)(
                    u7,
                    {
                        locale: s,
                        paymentSource: e,
                        isDefault: i === e.id,
                        onCancel: this.handleCancel,
                        onDelete: this.handleDelete,
                        isForSubscription: e.id === a,
                        hideDivider: 0 === t || h === t - 1,
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
                              u9,
                              {
                                  paymentSource: e,
                                  hideDivider: 0 === d.length || h === d.length - 1,
                                  isForSubscription: e.id === a,
                                  locale: s,
                                  onRedeemClick: () =>
                                      (0, uV.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page" }),
                              },
                              e.id,
                          ),
                      )
                    : (0, p.jsx)(u9, {
                          hideDivider: 0 === d.length || h === d.length - 1,
                          isForSubscription: !1,
                          locale: s,
                          onRedeemClick: () =>
                              (0, uV.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page" }),
                      })),
            (0, p.jsxs)(p.Fragment, {
                children: [
                    t
                        ? (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsxs)(eh.D, {
                                      variant: "heading-lg/semibold",
                                      children: [
                                          (0, p.jsx)(uD.X, { size: "sm", className: u8.hz }),
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
                    A,
                    o && e,
                    h !== d.length - 1 || (o && c.length > 0) ? (0, p.jsx)(eE.c, {}) : null,
                    this.renderFooter(),
                ],
            })
        );
    }
}
var dt = i(459357),
    di = i(295405),
    dn = i(166403),
    ds = i(773669),
    dl = i(243156);
let dr = (0, o.E2)(u.X.BILLING_PAYMENT_METHODS, {
        Component: function (e) {
            let { showHeader: t = !1 } = e,
                i = (0, O.bG)([uH.A], () => uH.A.isSyncing),
                n = (0, O.bG)([di.A], () => di.A.paymentSources),
                s = (0, O.bG)([di.A], () => di.A.defaultPaymentSourceId),
                l = (0, O.bG)([ds.default], () => ds.default.locale),
                r = (0, O.bG)([dn.A], () => dn.A.getPremiumTypeSubscription()),
                a = (0, O.bG)([uH.A], () => uH.A.isRemovingPaymentSource),
                o = (0, O.bG)([uH.A], () => uH.A.isUpdatingPaymentSource),
                { enabled: u } = (0, dt.c)({ location: "UserSettingsBilling" });
            return (N.useEffect(() => {
                uM.$o(), uM.hP();
            }, []),
            i && 0 === Object.keys(n).length)
                ? (0, p.jsx)("div", { className: dl.o, children: (0, p.jsx)(uP.y, {}) })
                : (0, p.jsx)(de, {
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
    da = (0, o.zZ)(u.X.BILLING_PAYMENT_METHODS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.W26xGQ),
        icon: uD.X,
        useSubtitle: () => g.intl.string(g.t.h6V3uK),
        buildLayout: () => [dr],
    });
var du = i(546605),
    dd = i(500380),
    dc = i(423764),
    dg = i(223784);
function dm(e) {
    let { country: t, countryName: i, ...n } = e,
        { onClose: s } = n,
        l = N.useCallback(
            () => (null == t ? null : (0, p.jsx)("img", { alt: "", className: dg.b, src: (0, dd.t)(t) })),
            [t],
        ),
        r = null != i && null != t ? { text: i, leadingIcon: l } : (i ?? void 0),
        a = N.useCallback(() => {
            window.open("https://support.discord.com/hc/articles/39799791912087", "_blank"), s();
        }, [s]);
    return (0, p.jsx)(lD.Modal, {
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
var dh = i(949677);
let dA = (0, o.E2)(u.X.BILLING_STORE_COUNTRY, {
        Component: function () {
            let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.storeCountry),
                t = N.useCallback(() => {
                    var t;
                    let i;
                    (i = null != (t = e?.country ?? null) ? (0, dc.Gw)(t) : null),
                        (0, C.openModal)((e) => (0, p.jsx)(dm, { ...e, country: t, countryName: i }));
                }, [e?.country]);
            if (null == e) return null;
            let i = (0, dc.Gw)(e.country),
                n = null != e.setAt ? g.intl.format(g.t.ZkWzXG, { date: new Date(e.setAt) }) : null;
            return (0, p.jsxs)("div", {
                className: dh.OO,
                children: [
                    (0, p.jsxs)("div", {
                        className: dh.wI,
                        children: [
                            (0, p.jsx)("div", {
                                className: dh.Gh,
                                children: (0, p.jsx)("img", { alt: "", className: dh.MY, src: (0, dd.t)(e.country) }),
                            }),
                            (0, p.jsxs)("div", {
                                className: dh.d0,
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
                    (0, p.jsx)(eA.$, { variant: "secondary", size: "sm", text: g.intl.string(g.t.PuB1W7), onClick: t }),
                ],
            });
        },
        useSearchTerms: () => [g.intl.string(g.t["3pIjBH"])],
    }),
    dE = (0, o.zZ)(u.X.BILLING_STORE_COUNTRY_CATEGORY, {
        usePredicate: () => {
            let e, t;
            return (
                (e = (0, du.vg)("StoreCountrySetting")),
                (t = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.storeCountry != null)),
                e && t
            );
        },
        useTitle: () => g.intl.string(g.t["3pIjBH"]),
        buildLayout: () => [dA],
    });
var dx = i(549363),
    dT = i(545075);
let dS = (0, o.E2)(u.X.BILLING_TRANSACTION_HISTORY, {
        Component: function () {
            let e = (0, O.bG)([ds.default], () => ds.default.locale);
            return (0, p.jsxs)(p.Fragment, { children: [(0, p.jsx)(dT.kb, {}), (0, p.jsx)(dx.A, { locale: e })] });
        },
        useSearchTerms: () => [g.intl.string(g.t.obLrcK)],
    }),
    dp = (0, o.zZ)(u.X.BILLING_TRANSACTION_HISTORY_CATEGORY, {
        useTitle: () => g.intl.string(g.t.obLrcK),
        buildLayout: () => [dS],
    }),
    dN = (0, o.t_)(u.X.BILLING_PANEL, {
        useTitle: () => g.intl.string(g.t.oeUm2s),
        buildLayout: () => [da, dE, dp],
        useObscuredNotice: uL.L,
    }),
    df = (0, o.i4)(u.X.BILLING_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.oeUm2s),
        icon: uR.B,
        buildLayout: () => [dN],
    });
var dC = i(597770),
    d_ = i(35587),
    dI = i(86379),
    db = i(532446),
    dv = i(869038),
    dj = i(499454),
    dy = i(45938);
class dO extends N.Component {
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
                    await (0, uV.Qp)(i),
                        (0, uV.HF)({ initialCode: i, withRedemptionSuccessModal: !0 }),
                        this.setState({ codeInput: "" });
                    return;
                } catch {}
            let e = (0, dy.Vd)(t);
            if (null == e) return void this.setState({ hasError: !0 });
            let n = await dv.A.resolveGiftCode(e);
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
                (0, dj.h)({ processedCode: e }),
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
                children: (0, p.jsxs)(db.M, {
                    children: [
                        (0, p.jsx)(lP.k, {
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
                        (0, p.jsx)(eA.$, {
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
let dR = (0, o.E2)(u.X.GIFT_CODE_REDEMPTION_SETTING, {
    Component: function () {
        let { enabled: e } = (0, dt.c)({ location: "UserSettingsBilling" }),
            t = N.useContext(Y.AnalyticsContext),
            i = (0, O.bG)([eC.A], () => eC.A.enabled);
        return (0, p.jsx)(dO, { analyticsContext: t, obscureInput: i, acceptGiftCardRedemption: e });
    },
    usePredicate: () => !(0, dI.Hp)(),
    useSearchTerms: () => [g.intl.string(g.t["jcSP+g"]), g.intl.string(g.t["il+VCo"])],
});
var dL = i(725570),
    dD = i(707554),
    dP = i(339048),
    dG = i(736653),
    dU = i(46054);
let dM = rC().duration(30, "days");
var dV = i(264779),
    dk = i(416052),
    dw = i(961302);
function dB(e) {
    let { onClose: t, transitionState: i } = e;
    return (0, p.jsx)(lD.Modal, {
        title: "",
        size: "md",
        input: (0, p.jsx)("div", { className: dw.aR }),
        onClose: async () => await t(),
        actions: [{ text: g.intl.string(g.t.cpT0Cq), variant: "primary", onClick: t }],
        transitionState: i,
        children: (0, p.jsxs)("div", {
            className: dw.t4,
            children: [
                (0, p.jsx)(eh.D, { variant: "heading-xl/semibold", children: g.intl.string(g.t.iufib1) }),
                (0, p.jsx)(V.E, { variant: "text-md/normal", className: dw.G3, children: g.intl.string(g.t.eAn6z2) }),
            ],
        }),
    });
}
let dF = function (e) {
    let { onClose: t, onClaim: i, code: n, outboundPromotion: s, transitionState: l } = e,
        [r, a] = N.useState(null),
        o = (0, sS.GV)(),
        { analyticsLocations: u } = (0, nG.Ay)(eM.A.USER_SETTINGS_GIFT_INVENTORY);
    return (N.useEffect(() => {
        null == n &&
            (0, dV.kd)({ promotionId: s.id, analyticsLocations: u })
                .then((e) => i(e))
                .catch((e) => a(e?.body?.code));
    }, [n, s.id, i, u]),
    null != r)
        ? (0, p.jsx)(dB, { onClose: t, transitionState: l })
        : null == n
          ? (0, p.jsx)(uP.y, { className: dw.Lq })
          : (0, p.jsx)(lD.Modal, {
                title: "",
                size: "md",
                onClose: async () => await t(),
                input: (0, p.jsxs)("div", {
                    className: dw.N1,
                    children: [
                        (0, p.jsx)("div", { className: dw.Qw }),
                        (0, p.jsx)(eh.D, { variant: "heading-xl/semibold", children: g.intl.string(g.t["23BfZh"]) }),
                        (0, p.jsx)(V.E, {
                            variant: "text-md/normal",
                            className: dw.G3,
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
                            let e = (0, dV.kc)(n, s);
                            window.open(e, "_blank");
                        },
                    },
                ],
                transitionState: l,
                "aria-label": o,
                children: (0, p.jsxs)("div", {
                    children: [
                        (0, p.jsx)(eE.c, { className: dw.M5 }),
                        (0, p.jsx)(sy.D, {
                            label: g.intl.string(g.t.s9LFQh),
                            helperText: g.intl.string(g.t["F+nFTZ"]),
                            children: (0, p.jsx)(dk.A, {
                                value: n,
                                buttonColor: aA.$n.Colors.BRAND,
                                buttonLook: aA.$n.Looks.FILLED,
                                delay: 1e3,
                            }),
                        }),
                    ],
                }),
            });
};
var dz = i(725807),
    dY = i(212168),
    dX = i(469778),
    dH = i(109802),
    dK = i(503787);
let dW = (e) => {
        let { children: t, className: i, splashArtURL: n } = e;
        return (0, p.jsxs)(lV.A, {
            className: ew()(dK.wx, i),
            align: lV.A.Align.CENTER,
            children: [
                (0, p.jsx)("div", { className: dK.Bn, style: null != n ? { backgroundImage: `url(${n})` } : void 0 }),
                t,
            ],
        });
    },
    dZ = (e) => {
        let { children: t, className: i } = e;
        return (0, p.jsx)("div", { className: ew()(dK.rf, i), children: t });
    };
class dq extends N.PureComponent {
    static Header = dW;
    static Body = dZ;
    render() {
        let { children: e, className: t, onMouseEnter: i, onMouseLeave: n } = this.props;
        return (0, p.jsx)("div", { className: ew()(dK.Nr, t), onMouseEnter: i, onMouseLeave: n, children: e });
    }
}
var dQ = i(75825),
    dJ = i(871123),
    d$ = i(366523),
    d0 = i(495544),
    d1 = i(30793),
    d2 = i(97352),
    d3 = i(67480),
    d6 = i(147925),
    d4 = i(957565),
    d5 = i(615396),
    d8 = i(233385);
class d7 extends N.PureComponent {
    _copyModeTimeout = new ot.Ep();
    state = { copyMode: dH.q.DEFAULT };
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case dH.q.SUCCESS:
                return g.intl.string(g.t.XVvPjU);
            case dH.q.ERROR:
                return g.intl.string(g.t.i4GM3L);
            default:
                return g.intl.string(g.t.OpuAlK);
        }
    }
    handleRevoke(e) {
        dv.A.revokeGiftCode(e);
    }
    handleCopy = (e) => {
        let { giftCode: t, sku: i } = this.props;
        (0, dy.AK)(t, i),
            (0, d4.C)(
                e,
                () => this.setState({ copyMode: dH.q.SUCCESS }),
                () => this.setState({ copyMode: dH.q.ERROR }),
            ),
            this._copyModeTimeout.start(1e3, () => {
                this.setState({ copyMode: dH.q.DEFAULT });
            });
    };
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: i } = this.state;
        return (0, p.jsxs)(lV.A, {
            direction: lV.A.Direction.VERTICAL,
            className: d8.Gj,
            children: [
                (0, p.jsx)(dH.e, {
                    className: d8.ph,
                    value: (0, dy.Zq)(t.code),
                    text: this.copyButtonText,
                    mode: i,
                    supportsCopy: d4.p5,
                    hideMessage: e ? g.intl.string(g.t["0RLn47"]) : null,
                    onCopy: this.handleCopy,
                    buttonColor: aA.XD.BRAND,
                    buttonLook: aA.pR.FILLED,
                }),
                (0, p.jsxs)("div", {
                    className: d8.KB,
                    children: [
                        null != t.expiresAt
                            ? (0, p.jsxs)(N.Fragment, {
                                  children: [
                                      g.intl.format(g.t.ltVZcJ, { hours: t.expiresAt.diff(rC()(), "h") }),
                                      " —\xa0",
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
class d9 extends N.PureComponent {
    _loadedAt = null;
    state = { isOpen: !1, isCreating: !1, isHovered: !1 };
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    handleGenerateGiftCode = async (e) => {
        e.stopPropagation();
        let { skuId: t, subscriptionPlanId: i, giftStyle: n } = this.props;
        this.setState({ isCreating: !0 }),
            await dv.A.createGiftCode(t, i, n),
            this.setState({ isCreating: !1, isOpen: !0 });
    };
    handleToggleOpen = () => {
        let { skuId: e, subscriptionPlanId: t, loadedAt: i } = this.props,
            n = !this.state.isOpen;
        (null == i || null == this._loadedAt || i < this._loadedAt) && n && dv.A.fetchUserGiftCodesForSKU(e, t),
            this.setState({ isOpen: !this.state.isOpen });
    };
    renderGiftIcon() {
        let { sku: e, giftStyle: t, application: i } = this.props;
        return (0, dJ.bF)(e)
            ? (0, p.jsx)(d$.e, { shape: "square", sku: e, containerClassName: d8.ez })
            : null != t
              ? (0, p.jsx)(dQ.A, { giftStyle: t, className: d8.ez, shouldAnimate: this.state.isHovered })
              : (0, p.jsx)(e8.A, { game: i, size: e8.M.MEDIUM, skuId: e.id });
    }
    renderSubtitle() {
        let { sku: e, entitlements: t, application: i } = this.props;
        return (0, dJ.bF)(e)
            ? (0, p.jsxs)("div", {
                  className: ew()(d8.Oc, d8.ic),
                  children: [
                      (0, p.jsx)(e8.A, { game: i, size: e8.M.XSMALL, skuId: e.id, className: d8._u }),
                      g.intl.format(g.t["6plpZi"], { applicationName: i.name, copies: t.length }),
                  ],
              })
            : (0, p.jsx)("div", { className: d8.Oc, children: g.intl.format(g.t.zMcvcA, { copies: t.length }) });
    }
    renderTitle() {
        let e,
            { sku: t, subscriptionPlan: i, giftCodeBatchId: n } = this.props;
        return (
            (e =
                n === sN.FB
                    ? g.intl.string(g.t.odsU6W)
                    : n === sN.Bu && null != i
                      ? g.intl.formatToPlainString(i.interval === sN.WT.MONTH ? g.t.uZjpiJ : g.t.bJW1EA, {
                            skuName: t.name,
                            intervalCount: i.intervalCount,
                        })
                      : null == i
                        ? t.name
                        : g.intl.formatToPlainString(i.interval === sN.WT.MONTH ? g.t.rCJvqo : g.t.Vd3Iu8, {
                              skuName: t.name,
                              intervalCount: i.intervalCount,
                          })),
            (0, p.jsx)("div", { className: d8.mO, children: e })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, p.jsxs)(lV.A, {
            justify: lV.A.Justify.BETWEEN,
            align: lV.A.Align.CENTER,
            className: d8.pe,
            children: [
                (0, p.jsx)(V.E, { variant: "text-md/normal", children: g.intl.string(g.t.lELyPj) }),
                (0, p.jsx)(eA.$, {
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
        return (0, p.jsxs)(dq, {
            className: n,
            children: [
                (0, p.jsx)(M.D, {
                    onClick: this.handleToggleOpen,
                    className: d8.Nr,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, p.jsx)(dq.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, p.jsxs)("div", {
                            className: d8.MY,
                            children: [
                                (0, p.jsxs)(lV.A, {
                                    align: lV.A.Align.CENTER,
                                    children: [
                                        this.renderGiftIcon(),
                                        (0, p.jsxs)("div", {
                                            className: d8.TK,
                                            children: [this.renderTitle(), this.renderSubtitle()],
                                        }),
                                    ],
                                }),
                                (0, p.jsx)(d6.A, {
                                    direction: a ? d6.A.Directions.UP : d6.A.Directions.DOWN,
                                    className: d8.eO,
                                }),
                            ],
                        }),
                    }),
                }),
                a
                    ? (0, p.jsx)(dq.Body, {
                          children: l
                              ? (0, p.jsx)(uP.y, { className: d8.u1 })
                              : (0, p.jsxs)(N.Fragment, {
                                    children: [
                                        i.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        i.map((e) => (0, p.jsx)(d7, { giftCode: e, sku: s, hideCode: r }, e.code)),
                                    ],
                                }),
                      })
                    : null,
            ],
        });
    }
}
let ce = O.Ay.connectStores([d3.A, eC.A, d1.A, eW.A, d2.A, d0.default], (e) => {
    let { skuId: t, subscriptionPlanId: i, giftStyle: n } = e,
        s = d3.A.get(t);
    if (null == s) throw Error("SKU was unavailable while rendering gift.");
    let l = d1.A.getForGifterSKUAndPlan(d0.default.getId(), t, i)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === n);
    return {
        sku: s,
        hideCodes: eC.A.enabled,
        isFetching: d1.A.getUserGiftCodesFetchingForSKUAndPlan(t, i),
        loadedAt: d1.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, i),
        application: eW.A.getApplication(s.applicationId),
        subscriptionPlan: null != i ? (0, d5.c9)(i) : null,
        giftCodes: l,
    };
})(d9);
var ct = i(479913);
function ci(e) {
    let t,
        { outboundPromotion: i, code: n, addClaimedOutboundPromotionCode: s, disabled: l } = e,
        [r, a] = N.useState(!1),
        [o, u] = N.useState(!1),
        d = () => a((e) => !e),
        c = (0, dG.Ay)(),
        m = (0, dV.WD)(i.id, c),
        h = null != n,
        A = N.useMemo(
            () =>
                (0, r_.i$)(
                    h
                        ? null != i.outboundRedemptionEndDate
                            ? rC()(i.outboundRedemptionEndDate)
                            : rC()(i.endDate).add(dM)
                        : rC()(i.endDate),
                    "LL",
                ),
            [i, h],
        );
    h && r
        ? (t = g.intl.format(g.t.pkxVx6, { endDate: A, onClickDetails: d }))
        : h && !r
          ? (t = g.intl.format(g.t["4sFeob"], { endDate: A, onClickDetails: d }))
          : !h && r
            ? (t = g.intl.format(g.t["RBnE+l"], { endDate: A, onClickDetails: d }))
            : h || r || (t = g.intl.format(g.t["57+7Qn"], { endDate: A, onClickDetails: d }));
    let E = h ? g.intl.string(g.t["2cHUti"]) : g.intl.string(g.t.O13yhz),
        x = N.useCallback(() => u(!1), []),
        { outboundTitle: T, outboundTermsAndConditions: S } = i;
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsxs)("div", {
                className: ew()(ct.uI, ct.AX),
                children: [
                    (0, p.jsxs)("div", {
                        className: ct.gE,
                        children: [
                            (0, p.jsxs)("div", {
                                className: ct.At,
                                children: [
                                    (0, p.jsx)("div", {
                                        className: ct.$G,
                                        children: (0, p.jsx)("img", { alt: "", src: m, className: ct.IJ }),
                                    }),
                                    (0, p.jsxs)("div", {
                                        children: [
                                            (0, p.jsx)(eh.D, { variant: "heading-md/semibold", children: T }),
                                            (0, p.jsx)(V.E, {
                                                variant: "text-sm/normal",
                                                color: "text-default",
                                                className: ct.__invalid_promotionText,
                                                children: t,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            !l && (0, p.jsx)(eA.$, { text: E, onClick: () => u(!0), disabled: l, size: "sm" }),
                        ],
                    }),
                    r &&
                        (0, p.jsx)(V.E, {
                            className: ct.GL,
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: dU.A.parse(S, !1, { allowLinks: !0 }),
                        }),
                ],
            }),
            o &&
                (0, p.jsx)(dL.aF, {
                    renderModal: (e) => (0, p.jsx)(dF, { ...e, onClose: x, onClaim: s, code: n, outboundPromotion: i }),
                    onCloseRequest: x,
                }),
        ],
    });
}
let cn = (0, o.E2)(u.X.GIFT_INVENTORY_LIST_SETTING, {
        Component: function () {
            let e = (0, O.yK)([dX.A], () => dX.A.getGiftable()),
                [t, i] = eR().partition(e, (e) => {
                    let { giftCodeBatchId: t } = e;
                    return null == t;
                }),
                n = (0, O.bG)([t3.default], () =>
                    oD.Ay.isPremiumExactly(t3.default.getCurrentUser(), sN.PremiumTypes.TIER_2),
                ),
                s = (0, O.bG)([t3.default], () => !oD.Ay.isPremium(t3.default.getCurrentUser())),
                l = eR().groupBy(t, (e) => (0, dy.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
                [r, a] = N.useState(!1);
            N.useEffect(() => {
                n3.h.wait(() => {
                    (0, dP.XJ)().then(() => a(!0));
                });
            }, []);
            let {
                    promotionsLoaded: o,
                    activeOutboundPromotions: d,
                    claimedEndedOutboundPromotions: c,
                    claimedOutboundPromotionCodeMap: m,
                    addClaimedOutboundPromotionCode: h,
                } = (0, d_.y7)(),
                A = d.length + c.length > 0,
                E = s && A;
            return r && o
                ? (0, p.jsxs)(p.Fragment, {
                      children: [
                          (function () {
                              let e = i.find((e) => e.giftCodeBatchId === sN.FB && !e.consumed),
                                  t = i.filter((e) => e.giftCodeBatchId === sN.Bu && !e.consumed) ?? [],
                                  [s, l] = eR().partition(t, (e) => {
                                      let { subscriptionPlanId: t } = e;
                                      return t === sN.gD.PREMIUM_YEAR_TIER_2;
                                  }),
                                  r = (0, p.jsx)(eh.D, {
                                      variant: "heading-md/semibold",
                                      children: A ? g.intl.string(g.t.wFsj3B) : void 0,
                                  }),
                                  a = E
                                      ? (0, p.jsxs)("div", {
                                            className: ct.uo,
                                            children: [
                                                (0, p.jsx)(o_.t, {
                                                    size: "md",
                                                    color: w.A.colors
                                                        .REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                                                    className: ct.PC,
                                                }),
                                                (0, p.jsx)(V.E, {
                                                    variant: "text-md/normal",
                                                    className: ct.Qw,
                                                    children: g.intl.format(g.t.G4fwxK, {
                                                        onClick: () => {
                                                            (0, sE.default)(), (0, sO.pX)(q.BVt.APPLICATION_STORE);
                                                        },
                                                    }),
                                                }),
                                                (0, p.jsx)(dz.A, {
                                                    showGradient: !0,
                                                    className: ct.aA,
                                                    subscriptionTier: sN.pe.TIER_2,
                                                    textOptions: { textOverride: g.intl.string(g.t.mr4K7D) },
                                                }),
                                            ],
                                        })
                                      : null;
                              return (0, p.jsxs)("div", {
                                  children: [
                                      r,
                                      A ? (0, p.jsx)(eE.c, { className: ct.yF }) : null,
                                      (0, p.jsx)(dY.A, {
                                          className: ct.Yj,
                                          isShown: E,
                                          type: dY.i.PREMIUM,
                                          hasBackground: !0,
                                          children: (0, p.jsxs)("div", {
                                              className: ew()({ [ct.sW]: !E }),
                                              children: [
                                                  a,
                                                  c.map((e) => {
                                                      let { code: t, promotion: i } = e;
                                                      return (0, p.jsx)(
                                                          ci,
                                                          {
                                                              outboundPromotion: i,
                                                              code: t,
                                                              addClaimedOutboundPromotionCode: h,
                                                              disabled: !n,
                                                          },
                                                          i.id,
                                                      );
                                                  }),
                                                  d.map((e) =>
                                                      (0, p.jsx)(
                                                          ci,
                                                          {
                                                              outboundPromotion: e,
                                                              code: m[e.id],
                                                              addClaimedOutboundPromotionCode: h,
                                                              disabled: !n,
                                                          },
                                                          e.id,
                                                      ),
                                                  ),
                                                  null != e
                                                      ? (0, p.jsx)(
                                                            ce,
                                                            {
                                                                className: ct.uI,
                                                                skuId: e.skuId,
                                                                subscriptionPlanId: e.subscriptionPlanId,
                                                                entitlements: [e],
                                                                giftCodeBatchId: sN.FB,
                                                            },
                                                            (0, dy.Kx)(e.skuId, e.subscriptionPlanId),
                                                        )
                                                      : null,
                                                  s.length > 0
                                                      ? (0, p.jsx)(
                                                            ce,
                                                            {
                                                                className: ct.uI,
                                                                skuId: s[0].skuId,
                                                                subscriptionPlanId: s[0].subscriptionPlanId,
                                                                entitlements: s,
                                                                giftCodeBatchId: sN.Bu,
                                                            },
                                                            (0, dy.Kx)(s[0].skuId, s[0].subscriptionPlanId),
                                                        )
                                                      : null,
                                                  l.length > 0
                                                      ? (0, p.jsx)(
                                                            ce,
                                                            {
                                                                className: ct.uI,
                                                                skuId: l[0].skuId,
                                                                subscriptionPlanId: l[0].subscriptionPlanId,
                                                                entitlements: l,
                                                                giftCodeBatchId: sN.Bu,
                                                            },
                                                            (0, dy.Kx)(l[0].skuId, l[0].subscriptionPlanId),
                                                        )
                                                      : null,
                                              ],
                                          }),
                                      }),
                                  ],
                              });
                          })(),
                          (0, p.jsx)("div", {
                              className: ct.sW,
                              children: (0, p.jsxs)(dD.F, {
                                  component: (0, p.jsx)(eh.D, {
                                      variant: "heading-md/semibold",
                                      children: g.intl.string(g.t["9KeUbY"]),
                                  }),
                                  children: [
                                      (0, p.jsx)(eE.c, { className: ct.yF }),
                                      0 === Object.keys(l).length
                                          ? (0, p.jsxs)("div", {
                                                className: ct.p$,
                                                children: [
                                                    (0, p.jsx)("div", { className: ct.QT }),
                                                    (0, p.jsx)(dD.H, {
                                                        className: ct.ks,
                                                        children: g.intl.string(g.t.B1qgZn),
                                                    }),
                                                    (0, p.jsx)("p", {
                                                        className: ct.WO,
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
                                                    } = (0, dy.X6)(e);
                                                    return (0, p.jsx)(
                                                        ce,
                                                        {
                                                            className: ct.uI,
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
                : (0, p.jsx)(uP.y, { className: ct.Lq });
        },
        usePredicate: () => !(0, dI.Hp)(),
        useSearchTerms: () => [g.intl.string(g.t["jcSP+g"]), g.intl.string(g.t["9KeUbY"])],
    }),
    cs = (0, o.E2)(u.X.GIFT_BLOCKED_PAYMENTS_SETTING, {
        Component: dT.uK,
        usePredicate: () => (0, dI.Hp)(),
        useSearchTerms: () => [g.intl.string(g.t.vwMEHS)],
    }),
    cl = (0, o.zZ)(u.X.GIFT_INVENTORY_CATEGORY, { buildLayout: () => [dR, cn, cs] }),
    cr = (0, o.t_)(u.X.GIFT_PANEL, { useTitle: () => g.intl.string(g.t["jcSP+g"]), buildLayout: () => [cl] }),
    ca = (0, o.i4)(u.X.GIFT_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["jcSP+g"]),
        icon: dC.o,
        usePersistentBadge: function () {
            return N.useMemo(() => ({ badgeType: ef.Xi.COUNT, useCount: () => (0, d_.IO)().length }), []);
        },
        buildLayout: () => [cr],
    });
var co = i(949302),
    cu = i(332434),
    cd = i(422253);
let cc = (0, o.E2)(u.X.NITRO_SETTING, {
        Component: function () {
            let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser());
            return (0, oD.YE)(e, sN.PremiumTypes.TIER_2) ? (0, p.jsx)(cd.A, {}) : (0, p.jsx)(cu.A, {});
        },
        useSearchTerms: () => [g.intl.string(g.t.Ipxkog)],
    }),
    cg = (0, o.zZ)(u.X.NITRO_CATEGORY, { buildLayout: () => [cc] }),
    cm = (0, o.t_)(u.X.NITRO_PANEL, {
        useTitle: () => g.intl.string(g.t.Ipxkog),
        useObscuredNotice: uL.L,
        buildLayout: () => [cg],
    }),
    ch = (0, o.i4)(u.X.NITRO_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.Ipxkog),
        icon: o_.t,
        usePersistentBadge: function (e) {
            return N.useMemo(
                () => ({ badgeType: ef.Xi.STRONGLY_DISCOURAGED_CUSTOM, useCustomBadge: () => (0, co.e)(e) }),
                [e],
            );
        },
        buildLayout: () => [cm],
    });
var cA = i(104510),
    cE = i(820739),
    cx = i(73825),
    cT = i(160946);
let cS = (0, i(240921).Ay)({
    name: "2026-03-boosting-settings-refresh",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var cp = i(859241),
    cN = i(531260),
    cf = i(369163),
    cC = i(179866),
    c_ = i(926268),
    cI = i(106529),
    cb = i(93364);
function cv(e) {
    let { className: t, icon: i, children: n } = e;
    return (0, p.jsxs)("li", {
        className: ew()(cI.Nr, t),
        children: [
            (0, p.jsx)(i, { className: cI.Kk }),
            (0, p.jsx)(V.E, { className: cI.__invalid_description, variant: "text-sm/medium", children: n }),
        ],
    });
}
let cj = function (e) {
    let { cardClassName: t } = e;
    return (0, p.jsxs)("div", {
        className: cI.iE,
        children: [
            (0, p.jsxs)("div", {
                className: cI.Qs,
                children: [
                    (0, p.jsx)(eh.D, {
                        className: cI.R_,
                        color: "always-white",
                        variant: "heading-xxl/bold",
                        children: g.intl.string(g.t.IzKs3o),
                    }),
                    (0, p.jsxs)("ul", {
                        className: cI.kR,
                        children: [
                            (0, p.jsx)(cv, { className: t, icon: cf.v, children: g.intl.string(g.t.TZigSO) }),
                            (0, p.jsx)(cv, {
                                className: t,
                                icon: (e) =>
                                    (0, p.jsx)("img", { className: ew()(e.className, cI.Dp), src: cb, alt: "" }),
                                children: g.intl.string(g.t.hjQuV2),
                            }),
                            (0, p.jsx)(cv, { className: t, icon: cC.i, children: g.intl.string(g.t["2RUcaM"]) }),
                            (0, p.jsx)(cv, { className: t, icon: c_.C, children: g.intl.string(g.t.bJoZKV) }),
                        ],
                    }),
                ],
            }),
            (0, p.jsx)("div", { className: cI.JP }),
        ],
    });
};
var cy = i(834040),
    cO = i(307301),
    cR = i(811227);
let cL = [
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
    cD = function (e) {
        let { className: t } = e,
            [i, n] = N.useState(null);
        return (0, p.jsxs)("div", {
            className: ew()(cR.iE, t),
            children: [
                (0, p.jsx)(eh.D, {
                    className: cR.R_,
                    variant: "heading-xxl/bold",
                    children: g.intl.string(g.t.HPJ6Nj),
                }),
                (0, p.jsx)("ul", {
                    className: cR.p_,
                    children: cL.map((e, t) => {
                        let s = i === t;
                        return (0, p.jsxs)(
                            "div",
                            {
                                className: cR.Aw,
                                children: [
                                    (0, p.jsxs)(M.D, {
                                        className: ew()(cR.k7, { [cR.lo]: s }),
                                        onClick: () => n((e) => (e === t ? null : t)),
                                        tag: "li",
                                        children: [
                                            (0, p.jsx)(V.E, {
                                                className: cR.b1,
                                                variant: "text-lg/normal",
                                                children: e.getQuestion(),
                                            }),
                                            s
                                                ? (0, p.jsx)(cy.Q, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: cR.q4,
                                                  })
                                                : (0, p.jsx)(cO.j, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: cR.q4,
                                                  }),
                                        ],
                                    }),
                                    s &&
                                        (0, p.jsx)(V.E, {
                                            className: cR.ZF,
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
    cG = i(933832),
    cU = i(789645),
    cM = i(116891),
    cV = i(416676);
let ck = [
    {
        getPerkHeading: () => g.intl.string(g.t.tIiwuj),
        getPerkPreviewLightTheme: () => i(604203),
        getPerkPreviewDarkTheme: () => i(878515),
        getTier0Value: () => sN.TG[q.TVA.NONE].limits.emoji,
        getTier1Value: () => sN.TG[q.TVA.TIER_1].limits.emoji,
        getTier2Value: () => sN.TG[q.TVA.TIER_2].limits.emoji,
        getTier3Value: () => sN.TG[q.TVA.TIER_3].limits.emoji,
    },
    {
        getPerkHeading: () => g.intl.string(g.t["3iccet"]),
        getPerkPreviewLightTheme: () => i(105732),
        getPerkPreviewDarkTheme: () => i(857020),
        getTier0Value: () => sN.TG[q.TVA.NONE].limits.stickers,
        getTier1Value: () => sN.TG[q.TVA.TIER_1].limits.stickers,
        getTier2Value: () => sN.TG[q.TVA.TIER_2].limits.stickers,
        getTier3Value: () => sN.TG[q.TVA.TIER_3].limits.stickers,
    },
    {
        getPerkHeading: () => g.intl.string(g.t["+smCv9"]),
        getPerkPreviewLightTheme: () => i(597890),
        getPerkPreviewDarkTheme: () => i(297642),
        getTier0Value: () => sN.TG[q.TVA.NONE].limits.soundboardSounds,
        getTier1Value: () => sN.TG[q.TVA.TIER_1].limits.soundboardSounds,
        getTier2Value: () => sN.TG[q.TVA.TIER_2].limits.soundboardSounds,
        getTier3Value: () => sN.TG[q.TVA.TIER_3].limits.soundboardSounds,
    },
    {
        getPerkHeading: () => g.intl.string(g.t.SMYauD),
        getPerkPreviewLightTheme: () => i(323091),
        getPerkPreviewDarkTheme: () => i(261835),
        getTier0Value: () =>
            g.intl.formatToPlainString(g.t.zZ6Rdi, {
                resolution: sN.TG[q.TVA.NONE].limits.screenShareQualityResolution,
                framerate: sN.TG[q.TVA.NONE].limits.screenShareQualityFramerate,
            }),
        getTier1Value: () =>
            g.intl.formatToPlainString(g.t.zZ6Rdi, {
                resolution: sN.TG[q.TVA.TIER_1].limits.screenShareQualityResolution,
                framerate: sN.TG[q.TVA.TIER_1].limits.screenShareQualityFramerate,
            }),
        getTier2Value: () =>
            g.intl.formatToPlainString(g.t.zZ6Rdi, {
                resolution: (0, cM.eT)("GuildBoostingMarketingTierComparisonTable"),
                framerate: sN.TG[q.TVA.TIER_2].limits.screenShareQualityFramerate,
            }),
        getTier3Value: () =>
            g.intl.formatToPlainString(g.t.zZ6Rdi, {
                resolution: (0, cM.eT)("GuildBoostingMarketingTierComparisonTable"),
                framerate: sN.TG[q.TVA.TIER_3].limits.screenShareQualityFramerate,
            }),
    },
    {
        getPerkHeading: () => g.intl.string(g.t["/79IDj"]),
        getPerkPreviewLightTheme: () => i(913997),
        getPerkPreviewDarkTheme: () => i(95781),
        getTier0Value: () =>
            g.intl.formatToPlainString(g.t.w1gmLt, { bitrate: sN.TG[q.TVA.NONE].limits.bitrate / 1e3 }),
        getTier1Value: () =>
            g.intl.formatToPlainString(g.t.w1gmLt, { bitrate: sN.TG[q.TVA.TIER_1].limits.bitrate / 1e3 }),
        getTier2Value: () =>
            g.intl.formatToPlainString(g.t.w1gmLt, { bitrate: sN.TG[q.TVA.TIER_2].limits.bitrate / 1e3 }),
        getTier3Value: () =>
            g.intl.formatToPlainString(g.t.w1gmLt, { bitrate: sN.TG[q.TVA.TIER_3].limits.bitrate / 1e3 }),
    },
    {
        getPerkHeading: () => g.intl.string(g.t.R1U2xC),
        getPerkPreviewLightTheme: () => i(389833),
        getPerkPreviewDarkTheme: () => i(754561),
        getTier0Value: () =>
            g.intl.formatToPlainString(g.t.pIn7Af, { size: sN.TG[q.TVA.NONE].limits.fileSize / 1048576 }),
        getTier1Value: () =>
            g.intl.formatToPlainString(g.t.pIn7Af, { size: sN.TG[q.TVA.TIER_1].limits.fileSize / 1048576 }),
        getTier2Value: () =>
            g.intl.formatToPlainString(g.t.pIn7Af, { size: sN.TG[q.TVA.TIER_2].limits.fileSize / 1048576 }),
        getTier3Value: () =>
            g.intl.formatToPlainString(g.t.pIn7Af, { size: sN.TG[q.TVA.TIER_3].limits.fileSize / 1048576 }),
    },
    {
        getPerkHeading: () => g.intl.string(g.t.f6vfso),
        getPerkPreviewLightTheme: () => i(735669),
        getPerkPreviewDarkTheme: () => i(283517),
        getTier0Value: () => sN.TG[q.TVA.NONE].limits.stageVideoUsers,
        getTier1Value: () => sN.TG[q.TVA.TIER_1].limits.stageVideoUsers,
        getTier2Value: () => sN.TG[q.TVA.TIER_2].limits.stageVideoUsers,
        getTier3Value: () => sN.TG[q.TVA.TIER_3].limits.stageVideoUsers,
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
function cw(e) {
    let { children: t, className: i, tier: n } = e,
        s = n === q.TVA.NONE ? "text-muted" : "text-strong",
        l = n === q.TVA.NONE || null == n ? "heading-xl/normal" : "heading-xl/bold";
    return (0, p.jsxs)("th", {
        className: ew()(cV.PG, i),
        scope: "col",
        children: [
            (0, p.jsx)(eh.D, { color: s, variant: l, children: t }),
            null != n &&
                (0, p.jsx)(V.E, {
                    color: s,
                    variant: "text-md/normal",
                    children: g.intl.format(g.t["pob/cL"], { subscriptions: q.M2T[n] }),
                }),
        ],
    });
}
function cB(e) {
    let t,
        { className: i, textVariant: n = "text-md/bold", value: s } = e;
    if ("boolean" == typeof s) {
        let e = ew()(cV.Jk, { [cV.I$]: s });
        t = s
            ? (0, p.jsx)(cG.A, { size: "md", color: "currentColor", className: e })
            : (0, p.jsx)(cU.P, { size: "md", color: "currentColor", className: e });
    } else t = (0, p.jsx)(V.E, { color: "interactive-text-active", variant: n, children: s });
    return (0, p.jsx)("td", { className: ew()(cV.xR, i), children: t });
}
function cF(e) {
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
              className: ew()(cV.ER, { [cV.GH]: i === q.TVA.TIER_2, [cV.z5]: i === q.TVA.TIER_3 }),
              children: (0, p.jsx)(V.E, {
                  className: cV.uQ,
                  color: "always-white",
                  variant: "text-xs/bold",
                  children: t === q.TVA.TIER_3 ? g.intl.string(g.t.d849Up) : g.intl.string(g.t.dZeX1z),
              }),
          });
}
function cz(e) {
    let { isFocused: t, handleFocus: i, handleRowBlur: n, theme: s, row: l, hideTier0: r } = e,
        a = N.useRef(null);
    return (0, p.jsxs)("tr", {
        className: cV.__invalid_tableRow,
        children: [
            (0, p.jsx)("th", {
                className: ew()(cV.xR, cV.uB),
                scope: "row",
                children: (0, p.jsx)(M.D, {
                    className: ew()(cV.VC, cV.xR, cV.Rk),
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
                                className: cV.Mz,
                                src: (0, cP.M)(s) ? l.getPerkPreviewDarkTheme() : l.getPerkPreviewLightTheme(),
                                alt: "",
                            }),
                        shouldShow: t,
                        spacing: 16,
                        children: () =>
                            (0, p.jsx)(V.E, { variant: "text-md/normal", ref: a, children: l.getPerkHeading() }),
                    }),
                }),
            }),
            !r && (0, p.jsx)(cB, { textVariant: "text-md/normal", value: l.getTier0Value() }),
            (0, p.jsx)(cB, { value: l.getTier1Value() }),
            (0, p.jsx)(cB, { value: l.getTier2Value() }),
            (0, p.jsx)(cB, { value: l.getTier3Value() }),
        ],
    });
}
let cY = function (e) {
    let t = (0, dG.Ay)(),
        [i, n] = N.useState(null),
        { className: s, guild: l, hideHeading: r, hideTier0: a } = e;
    function o() {
        n(null);
    }
    return (0, p.jsxs)("div", {
        className: s,
        children: [
            !r &&
                (0, p.jsx)(eh.D, {
                    className: cV.R_,
                    variant: "heading-xxl/extrabold",
                    children: g.intl.string(g.t["9GGb9k"]),
                }),
            (0, p.jsxs)("div", {
                className: cV.wY,
                children: [
                    null != l && (0, p.jsx)(cF, { currentTier: l.premiumTier }),
                    (0, p.jsxs)("table", {
                        className: cV.tp,
                        cellPadding: 0,
                        cellSpacing: 0,
                        children: [
                            (0, p.jsx)("thead", {
                                children: (0, p.jsxs)("tr", {
                                    className: cV.__invalid_tableRow,
                                    children: [
                                        (0, p.jsx)(cw, { className: cV.VC, children: g.intl.string(g.t.F5MY0k) }),
                                        !a && (0, p.jsx)(cw, { tier: q.TVA.NONE, children: g.intl.string(g.t.mx8j2m) }),
                                        (0, p.jsx)(cw, { tier: q.TVA.TIER_1, children: g.intl.string(g.t.nzXtaS) }),
                                        (0, p.jsx)(cw, { tier: q.TVA.TIER_2, children: g.intl.string(g.t["h33/uW"]) }),
                                        (0, p.jsx)(cw, { tier: q.TVA.TIER_3, children: g.intl.string(g.t.BfF6ED) }),
                                    ],
                                }),
                            }),
                            (0, p.jsx)("tbody", {
                                className: cV.__invalid_tableBody,
                                children: ck.map((e, s) => {
                                    let l = i === s;
                                    return void 0 === e.predicate
                                        ? (0, p.jsx)(
                                              cz,
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
var cX = i(338548),
    cH = i(776096),
    cK = i(178368),
    cW = i(785651),
    cZ = i(866323),
    cq = i(530005),
    cQ = i(443865),
    cJ = i(473145);
function c$(e) {
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
            a === sN.xc.NONE &&
                ((o.transfer.disabled = !0),
                (o.transfer.subtext = g.intl.string(g.t.LiLRRT)),
                (o.cancel.subtext = g.intl.string(g.t["1ywaWL"])),
                (o.cancel.disabled = !0),
                (o.uncancel.disabled = !0));
    }
    let d = N.useMemo(
        () =>
            l.isPausedOrPausePending && a === sN.xc.NONE
                ? (0, p.jsx)(U.Dr, {
                      id: "manage-subscription",
                      label: g.intl.string(g.t.obRG6Y),
                      action: () => (0, ej.openUserSettings)(u.X.SUBSCRIPTIONS_PANEL),
                      iconLeft: cQ.x,
                      leadingAccessory: { type: "icon", icon: cQ.x },
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
                    (0, C.openModalLazy)(async () => {
                        let { default: e } = await Promise.resolve().then(i.bind(i, 724624));
                        return (i) =>
                            (0, p.jsx)(e, { ...i, guildBoostSlots: [t], locationSection: q.JJy.SETTINGS_PREMIUM });
                    });
                },
                disabled: o.transfer.disabled,
            }),
            (0, cJ.I5)(t)
                ? (0, p.jsx)(U.Dr, {
                      id: "uncancel",
                      label: o.uncancel.label,
                      subtext: o.uncancel.subtext,
                      action: function () {
                          (0, C.openModalLazy)(async () => {
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
                          (0, C.openModalLazy)(async () => {
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
var c0 = i(545934),
    c1 = i(496431);
let c2 = function (e) {
    let { className: t, cooldown: i } = e,
        n = (0, c1.A)(i);
    return (0, p.jsx)(V.E, {
        className: t,
        variant: "text-sm/medium",
        color: "text-muted",
        children: (0, r_.uN)(n, { days: g.t.WUTPDc, hours: g.t.c1qodV, minutes: g.t["2+A3dv"] }),
    });
};
var c3 = i(550070);
let c6 = function (e) {
    let { className: t, imageClassName: n, boostInCooldown: s, useReducedMotion: l } = e;
    return (0, p.jsx)("div", {
        className: ew()(c3.h4, t, { [c3.K2]: s }),
        children: (0, p.jsx)("img", {
            className: ew()(c3.Sl, n, { [c3.x8]: s }),
            src: s
                ? i(791128)
                : l
                  ? i(757871)
                  : "https://cdn.discordapp.com/assets/content/86fd98fc22283647a8be93d0c503646b53c84e3cb25ca6562a38cecb84327e58.gif",
            alt: "",
        }),
    });
};
var c4 = i(280582);
let c5 = function (e) {
    let { className: t, hasCooldown: n, isCanceled: s, useReducedMotion: l } = e;
    return (0, p.jsxs)("div", {
        className: ew()(c4.sn, t),
        children: [
            s
                ? (0, p.jsx)("img", { className: ew()(c4.$J, c4.qX), src: i(66469), alt: "" })
                : (0, p.jsx)(c6, { className: c4.$J, boostInCooldown: n, useReducedMotion: l }),
            !s && n && (0, p.jsx)("img", { className: c4.De, src: i(994937), alt: "" }),
        ],
    });
};
var c8 = i(548118),
    c7 = i(509536),
    c9 = i(721923),
    ge = i(864310),
    gt = i(44112);
let gi = function (e) {
    let { className: t, guildId: i, boostingVariant: n } = e,
        s = (0, uA.bG)([H.A], () => H.A.getGuild(i), [i]),
        l = (0, ge.A)(s?.id).total;
    return null == s
        ? (0, p.jsx)("div", {
              className: ew()(t, gt.bo),
              children: (0, p.jsx)("div", {
                  className: gt.$g,
                  children: (0, p.jsx)(V.E, { variant: "text-lg/bold", children: g.intl.string(g.t["6Kwwuo"]) }),
              }),
          })
        : (0, p.jsxs)("div", {
              className: ew()(t, gt.bo),
              children: [
                  (0, p.jsx)(c8.Ay, { className: gt.__invalid_guildIcon, guild: s, size: c8.Ay.Sizes.LARGER }),
                  (0, p.jsxs)("div", {
                      className: gt.$g,
                      children: [
                          (0, p.jsx)(V.E, { variant: "text-lg/bold", children: s.name }),
                          (0, p.jsxs)("div", {
                              className: gt.TZ,
                              children: [
                                  (0, p.jsx)(cA._, {
                                      color: w.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                      className: gt.Me,
                                  }),
                                  (0, p.jsx)(V.E, {
                                      variant: "text-sm/bold",
                                      color: "text-muted",
                                      children: g.intl.format(g.t["pob/cL"], { subscriptions: l }),
                                  }),
                                  (0, p.jsx)("div", { className: gt.me }),
                                  (0, p.jsx)(V.E, {
                                      variant: "text-sm/bold",
                                      color: "text-muted",
                                      children: (0, cJ.gb)(s.premiumTier, { useLevels: !1 }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  n
                      ? (0, p.jsx)(c9.A, {
                            guild: s,
                            analyticsLocation: {
                                page: q.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                section: q.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                object: q.ZSU.BUTTON_CTA,
                                objectType: q.AnalyticsObjectTypes.BUY,
                            },
                            pauseAnimation: !0,
                            size: aA.$n.Sizes.MEDIUM,
                            color: aA.$n.Colors.PRIMARY,
                            buttonText: g.intl.string(g.t.aBHecF),
                        })
                      : (0, p.jsx)(eA.$, {
                            variant: "secondary",
                            text: g.intl.string(g.t.KLOhbO),
                            onClick: () => {
                                (0, sE.default)(),
                                    (0, c7.K4)({
                                        guildId: s.id,
                                        location: { section: q.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA },
                                    });
                            },
                        }),
              ],
          });
};
var gn = i(930988);
function gs(e) {
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
            let e = null != i.premiumGuildSubscription ? uF.default.extractTimestamp(i.premiumGuildSubscription.id) : 0;
            return g.intl.formatToPlainString(g.t.lY2Bur, { date: new Date(e) });
        }, [i, s, l, r]),
        o = N.useMemo(
            () =>
                (function (e) {
                    if (null == e || e === q.TVA.NONE) return "";
                    let t = [
                        g.intl.formatToPlainString(g.t["dLlKX/"], { numEmojiSlots: sN.TG[e].limits.emoji }),
                        g.intl.formatToPlainString(g.t["+ANIfv"], { numStickerSlots: sN.TG[e].limits.stickers }),
                        g.intl.formatToPlainString(g.t["4gt60b"], {
                            numSoundboardSlots: sN.TG[e].limits.soundboardSounds,
                        }),
                        g.intl.formatToPlainString(g.t.XahSjZ, {
                            resolution: sN.TG[e].limits.screenShareQualityResolution,
                            framerate: sN.TG[e].limits.screenShareQualityFramerate,
                        }),
                        g.intl.formatToPlainString(g.t.NbNs7S, { bitrate: sN.TG[e].limits.bitrate / 1e3 }),
                        g.intl.formatToPlainString(g.t.VVKcpn, { filesize: sN.TG[e].limits.fileSize / 1024 / 1024 }),
                        g.intl.formatToPlainString(g.t.TbpCvv, { numVideoStageSeats: sN.TG[e].limits.stageVideoUsers }),
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
        u = (0, cZ.p)(n, { from: { opacity: 0 }, enter: { opacity: 1 }, leave: { opacity: 0 } }, "animate-always");
    return s || t === q.TVA.NONE
        ? (0, p.jsx)("div", {
              className: gn.xm,
              children: (0, p.jsx)(V.E, { variant: "text-sm/medium", color: "text-muted", children: a }),
          })
        : u((e, t) =>
              (0, p.jsx)(cW.animated.div, {
                  style: e,
                  className: gn.xm,
                  children: (0, p.jsx)(V.E, { variant: "text-sm/medium", color: "text-muted", children: t ? o : a }),
              }),
          );
}
function gl(e) {
    let {
            guildTier: t,
            guildBoostSlot: i,
            premiumSubscription: n,
            hasCancelableGuildBoostSlot: s,
            showAltText: l,
            isLastGuildBoostSlot: r,
        } = e,
        a = (0, uA.bG)([iK.A], () => iK.A.useReducedMotion),
        o = N.useMemo(() => (null != i.cooldownEndsAt ? new Date(i.cooldownEndsAt) : null), [i]),
        u = N.useMemo(() => null != o && o > new Date(), [o]),
        d = (0, cJ.I5)(i),
        c = (0, cN.A)(),
        m = N.useRef(null);
    return (0, p.jsxs)("div", {
        className: gn.PW,
        children: [
            (0, p.jsxs)("div", {
                className: gn.$U,
                children: [
                    (0, p.jsx)(c5, { isCanceled: d, hasCooldown: u, useReducedMotion: a }),
                    (0, p.jsx)("div", {
                        className: gn.vh,
                        children:
                            null != o && u && !d
                                ? (0, p.jsx)(c2, { className: gn.xm, cooldown: o.getTime() })
                                : (0, p.jsx)(gs, {
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
                            return (0, p.jsx)(c$, {
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
                                className: gn.oU,
                                children: (0, p.jsx)(cq.F, { size: "md", color: "currentColor" }),
                            }),
                    }),
                ],
            }),
            !r && (0, p.jsx)("div", { className: gn.eX }),
        ],
    });
}
function gr(e) {
    let {
            guildId: t,
            guildBoostSlotRecords: i,
            premiumSubscription: n,
            hasCancelableGuildBoostSlot: s,
            showAltText: l,
        } = e,
        r = (0, uA.bG)([H.A], () => H.A.getGuild(t), [t]);
    return (0, p.jsxs)("div", {
        className: gn.ag,
        children: [
            (0, p.jsx)(gi, { guildId: t, boostingVariant: !1 }),
            i.map((e, t) =>
                (0, p.jsx)(
                    gl,
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
function ga(e) {
    let { guildId: t, appliedGuildBoosts: i, premiumSubscription: n } = e,
        s = (0, uA.bG)([H.A], () => H.A.getGuild(t), [t]),
        l = uF.default.fromTimestamp(Date.now());
    if (
        (i.forEach((e) => {
            (null == l || 0 > uF.default.compare(e.id, l)) && (l = e.id);
        }),
        null == l)
    )
        return null;
    let r = c0.A.createFromServer(
        {
            id: uF.default.fromTimestamp(Date.now()),
            subscription_id: n.id,
            canceled: !1,
            premium_guild_subscription: { id: l, guild_id: t },
            cooldown_ends_at: null,
        },
        n,
    );
    return (0, p.jsxs)("div", {
        className: gn.ag,
        children: [
            (0, p.jsx)(gi, { guildId: t, boostingVariant: !1 }),
            i.map((e, t) =>
                (0, p.jsx)(
                    gl,
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
function go(e) {
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
              className: gn.iE,
              children: [
                  (0, p.jsx)("div", {
                      className: gn.kL,
                      children: uF.default
                          .keys(n)
                          .map((e) =>
                              (0, p.jsx)(ga, { guildId: e, premiumSubscription: i, appliedGuildBoosts: n[e] }, e),
                          ),
                  }),
                  (0, p.jsx)("div", { className: gn.vK }),
              ],
          });
}
function gu(e) {
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
                if ((!(0, cJ.I5)(s) && e++, null != s.premiumGuildSubscription)) {
                    let e = s.premiumGuildSubscription.guildId;
                    e in i || (i[e] = []), i[e].push(s);
                }
            }),
            { boostsByGuildId: i, numActiveGuildBoostSlots: e }
        );
    }, [t]);
    if (null == i || 0 === Object.keys(l).length) return null;
    let a = r > oD.Ay.getNumIncludedPremiumGuildSubscriptionSlots(i.planId);
    return (0, p.jsxs)("div", {
        className: gn.iE,
        children: [
            (0, p.jsx)("div", {
                className: gn.kL,
                children: uF.default
                    .keys(l)
                    .map((e) =>
                        (0, p.jsx)(
                            gr,
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
            (0, p.jsx)("div", { className: gn.vK }),
        ],
    });
}
var gd = i(581796);
let gc = function (e) {
    let { hasGuildBoostSlots: t, hasAppliedGuildBoosts: n, hasBoostPerk: s, canAddBoosts: l } = e;
    return (0, p.jsxs)("div", {
        className: gd.iE,
        children: [
            (0, p.jsx)("div", {
                className: gd.bj,
                children: (0, p.jsx)("img", { alt: "", className: gd.KV, src: i(757871) }),
            }),
            (0, p.jsxs)("div", {
                className: gd.D7,
                children: [
                    (0, p.jsx)(eh.D, {
                        variant: "display-md",
                        className: gd.R_,
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
                        className: gd.Mz,
                        children: (0, p.jsx)("path", {
                            d: "M101.3,45.5C57.5,45.9,15.9,82.2,0,99.5V210h660V53.5c-164-137-265.2,32.4-385.8,33.6  C177.7,88.1,158.1,45,101.3,45.5z",
                        }),
                    }),
                ],
            }),
        ],
    });
};
var gg = i(757240),
    gm = i(168482);
function gh() {
    return (0, p.jsxs)("div", {
        className: gg.iE,
        children: [
            (0, p.jsx)("img", { className: gg.Kk, alt: "", src: gm }),
            (0, p.jsxs)("div", {
                className: gg.pq,
                children: [
                    (0, p.jsx)(V.E, { variant: "text-lg/bold", children: g.intl.string(g.t.ZHNSYf) }),
                    (0, p.jsx)(V.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: g.intl.string(g.t.kCj5ps),
                    }),
                ],
            }),
            (0, p.jsx)(eA.$, {
                variant: "secondary",
                text: g.intl.string(g.t.JFlifp),
                onClick: () => {
                    (0, sO.pX)(q.BVt.GUILD_DISCOVERY), (0, sE.default)();
                },
            }),
        ],
    });
}
var gA = i(502572),
    gE = i(614820),
    gx = i(987144),
    gT = i(43985);
let gS = function () {
    let e = N.useRef(null),
        { analyticsLocations: t } = (0, nG.Ay)(),
        { fractionalState: n } = (0, cN.A)();
    function s(i) {
        null != e.current && (0, C.closeModal)(e.current),
            (0, gx.g)({
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
        e.current = await (0, C.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(i.bind(i, 770101));
                return (t) => (0, p.jsx)(e, { ...t, onSelectGuild: s });
            },
            {
                onCloseRequest: () => {
                    null != e.current && (0, C.closeModal)(e.current);
                },
            },
        );
    }
    let r = (0, cJ.Nc)({ fractionalState: n });
    return (0, p.jsxs)("div", {
        className: gT.iE,
        children: [
            (0, p.jsx)(cA._, { color: w.A.unsafe_rawColors.GUILD_BOOSTING_PINK, className: gT.$J }),
            (0, p.jsx)(V.E, {
                className: gT.C,
                color: "text-default",
                variant: "text-sm/medium",
                children: g.intl.format(g.t.kqC5vq, {
                    boostAnyGuildHook: (e, t) => {
                        let i = null != r,
                            n = (0, gE.O)(e),
                            s = (0, p.jsx)("div", {
                                className: gT.lO,
                                children: (0, p.jsx)(
                                    B.Q,
                                    { variant: "primary", onClick: i ? void 0 : l, text: n, disabled: i },
                                    t,
                                ),
                            });
                        return i
                            ? (0, p.jsx)(
                                  gA.A,
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
var gp = i(212824);
let gN = function (e) {
    let { canAddBoosts: t, canApplyBoosts: i } = e,
        n = (0, O.bG)([cH.A], () => cH.A.affinities),
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
              className: gp.iE,
              children: [
                  t &&
                      (0, p.jsx)(eh.D, {
                          variant: "heading-lg/semibold",
                          className: gp.wx,
                          children: g.intl.string(g.t.r90Wgo),
                      }),
                  l.map((e) => (0, p.jsx)(gi, { className: gp.ZS, guildId: e, boostingVariant: !0 }, e)),
                  s.length > 3 && i && (0, p.jsx)(gS, {}),
              ],
          });
};
var gf = i(342933);
let gC = function (e) {
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
            let l = sN.hd[sN.gD.PREMIUM_MONTH_GUILD],
                r = oD.Ay.getDefaultPrice(l.id, i),
                a = (0, uw.CE)((0, uw.$g)(r.amount, r.currency), l.interval, l.intervalCount);
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
        className: gf.i,
        children: [
            (0, p.jsx)(eh.D, { variant: "heading-lg/bold", className: gf.V, children: l }),
            null != r && (0, p.jsx)(V.E, { variant: "text-sm/normal", children: r }),
        ],
    });
};
var g_ = i(724624),
    gI = i(983511),
    gb = i(342744),
    gv = i(87719),
    gj = i(929570);
function gy(e) {
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
        u = (0, cJ.I5)(t),
        d = l?.isPaused === !0 && a === sN.xc.NONE,
        c = g.intl.string(g.t.mOWsF1);
    return (0, p.jsxs)(
        "li",
        {
            className: gj.Hp,
            children: [
                (0, p.jsxs)("div", {
                    className: gj.YL,
                    children: [
                        (0, p.jsx)(c5, {
                            className: gj.W6,
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
                              ? (0, p.jsx)(c2, { cooldown: o.getTime() })
                              : (0, p.jsx)(V.E, {
                                    className: gj.__invalid_unappliedGuildBoostSlotDescription,
                                    color: "text-muted",
                                    variant: "text-sm/medium",
                                    children: g.intl.string(g.t["2mcafz"]),
                                }),
                    ],
                }),
                (0, p.jsxs)("div", {
                    className: gj.E7,
                    children: [
                        i &&
                            !u &&
                            (0, p.jsx)(gA.A, {
                                shouldShow: d,
                                text: c,
                                "aria-label": c.toString(),
                                children: (e) =>
                                    (0, p.jsx)("div", {
                                        className: gj.LB,
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
                            (0, p.jsx)(gA.A, {
                                shouldShow: d,
                                text: c,
                                "aria-label": c.toString(),
                                children: (e) =>
                                    (0, p.jsx)("div", {
                                        className: gj.LB,
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
function gO(e) {
    (0, C.openModalLazy)(async () => (t) => (0, p.jsx)(gI.default, { ...t, guildBoostSlot: e }));
}
function gR(e) {
    (0, C.openModalLazy)(async () => (t) => (0, p.jsx)(gb.default, { ...t, guildBoostSlotId: e.id }));
}
let gL = function (e) {
    let t,
        i,
        n,
        { guildBoostSlots: s } = e,
        l = (0, O.bG)([dn.A], () => dn.A.getPremiumTypeSubscription()),
        r = l?.isPausedOrPausePending === !0,
        { fractionalState: a } = (0, cN.A)(),
        o = (0, O.bG)([iK.A], () => iK.A.useReducedMotion),
        u = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
        d = a === sN.xc.FP_SUB_PAUSED,
        c = r && !d,
        {
            appliedGuildBoostSlots: m,
            unappliedGuildBoostSlots: h,
            numActiveGuildBoostSlots: A,
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
                    !(0, cJ.I5)(s) && i++,
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
        T = null != l ? oD.Ay.getNumIncludedPremiumGuildSubscriptionSlots(l.planId) : 0,
        S = Math.max(0, T - m.length),
        f = A > T,
        _ = T === s.length,
        I = _ ? S : 1,
        b = N.useMemo(() => {
            let e = [];
            for (let t = 0; t < I; t++) e.push((0, p.jsx)(c6, { className: gj.YA, useReducedMotion: o }, t));
            return e;
        }, [I, o]),
        v = N.useMemo(() => h.find((e) => e.isAvailable()), [h]);
    if (0 === h.length) return null;
    let j = h.length;
    if (
        ((t = _
            ? g.intl.formatToPlainString(x ? g.t["3DW6Dc"] : g.t["/u15Qc"], { numUnappliedGuildBoostSlots: j })
            : g.intl.formatToPlainString(x ? g.t["3DW6Dc"] : g.t.BPadnO, { numUnappliedGuildBoostSlots: j })),
        oD.Ay.isPremium(u))
    ) {
        let e = (e, t) =>
            (0, p.jsx)(
                M.D,
                {
                    className: gj.nw,
                    tag: "span",
                    onClick: () => {
                        (0, gv.e)();
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
        (n = r && a === sN.xc.NONE ? g.intl.string(g.t.mOWsF1) : g.intl.string(g.t.xr4m5B)),
        (0, p.jsx)("div", {
            className: gj.iE,
            children: (0, p.jsxs)("div", {
                className: ew()(gj.Qs, [gj.Yq]),
                children: [
                    (0, p.jsxs)("div", {
                        className: gj.wx,
                        children: [
                            (0, p.jsxs)("div", {
                                className: gj.RW,
                                children: [
                                    (0, p.jsx)("div", { className: gj.PS, children: b }),
                                    (0, p.jsxs)("div", {
                                        className: gj.__invalid_headerCopy,
                                        children: [
                                            (0, p.jsx)(eh.D, {
                                                className: gj.gg,
                                                variant: "heading-lg/bold",
                                                children: t,
                                            }),
                                            (0, p.jsx)(V.E, {
                                                className: gj.__invalid_headerSubheading,
                                                color: "text-strong",
                                                variant: "text-sm/normal",
                                                children: i,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, p.jsx)("div", {
                                className: gj.di,
                                children: (0, p.jsx)(gA.A, {
                                    shouldShow: null == v || c,
                                    text: n,
                                    "aria-label": n.toString(),
                                    children: (e) =>
                                        (0, p.jsx)(eA.$, {
                                            variant: "primary",
                                            text: g.intl.string(g.t.BMx1iy),
                                            ...e,
                                            disabled: null == v || c,
                                            onClick:
                                                null != v
                                                    ? () => {
                                                          (0, C.openModalLazy)(
                                                              async () => (e) =>
                                                                  (0, p.jsx)(g_.default, {
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
                    (!_ || E) &&
                        (0, p.jsx)("ul", {
                            className: gj.LU,
                            children: h.map((e) =>
                                (0, p.jsx)(
                                    gy,
                                    {
                                        guildBoostSlot: e,
                                        isCancellable: f,
                                        onCancel: gO,
                                        onUncancel: gR,
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
var gD = i(669561);
function gP(e) {
    let { premiumSubscription: t } = e,
        i = (0, O.bG)([cK.A], () => cK.A.boostSlots),
        n = N.useMemo(() => Object.values(i), [i]),
        s = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
        l = oD.Ay.isPremium(s, sN.PremiumTypes.TIER_2),
        r = (0, O.bG)([cH.A], () => cH.A.affinities),
        a = (0, O.bG)([K.Ay], () => K.Ay.getFlattenedGuildIds()),
        o = r.length > 0 || a.length > 0,
        u = n.length > 0,
        d = N.useMemo(() => n.filter((e) => null != e.premiumGuildSubscription), [n]),
        c = d.length > 0,
        g = n.length > d.length,
        m = (0, O.bG)([cp.A], () => cp.A.getCurrentUserAppliedBoosts()),
        { fractionalState: h } = (0, cN.A)({ forceFetch: !0 }),
        A = s?.isPremiumGroupMember(),
        E = t?.isPausedOrPausePending === !0 && h === sN.xc.NONE,
        x = t?.isPausedOrPausePending !== !0 && h === sN.xc.NONE && !A,
        T = l && h === sN.xc.FP_SUB_PAUSED,
        S = h === sN.xc.NONE && !A;
    return (0, p.jsxs)("div", {
        className: gD.GO,
        children: [
            (0, p.jsx)(dT.kb, { className: gD.ek }),
            (0, p.jsx)(gc, { hasGuildBoostSlots: u, hasAppliedGuildBoosts: c, hasBoostPerk: T, canAddBoosts: x }),
            S &&
                (0, p.jsx)(gC, {
                    hasAppliedGuildBoosts: c,
                    hasBoostPerk: T,
                    hasGuildAffinitiesOrInGuild: o,
                    subscriptionIsPausedOrPausePending: E,
                }),
            A && (0, p.jsx)(cX.A, {}),
            !o && (0, p.jsx)(gh, {}),
            t?.isPaused && h !== sN.xc.FP_SUB_PAUSED
                ? (0, p.jsx)(go, { appliedGuildBoosts: m, premiumSubscription: t })
                : (0, p.jsx)(gu, { guildBoostSlots: i, premiumSubscription: t }),
            (0, p.jsx)(gL, { guildBoostSlots: n, fractionalPremiumState: h }),
            (0, p.jsx)(gN, { canAddBoosts: c && x, canApplyBoosts: g }),
            (0, p.jsx)(cY, { className: gD.e4, hideHeading: !0, hideTier0: !0 }),
            (0, p.jsx)(cj, { cardClassName: gD.KW }),
            (0, p.jsx)(cD, { className: gD.JL }),
        ],
    });
}
var gG = i(527113),
    gU = i(365199),
    gM = i(102320);
function gV(e) {
    let { guild: t, className: i } = e,
        { total: n } = (0, ge.A)(t.id);
    return (0, p.jsxs)("div", {
        className: i ?? gM.OA,
        children: [
            (0, p.jsx)(c8.Ay, { className: gM.$f, guild: t, size: c8.Ay.Sizes.MEDIUM }),
            (0, p.jsxs)("div", {
                className: gM.gI,
                children: [
                    (0, p.jsx)(V.E, {
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
                                    (0, p.jsx)(cA._, {
                                        className: gM.Wz,
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
                                        (0, p.jsx)("div", { className: gM.zk }),
                                        (0, p.jsx)(V.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-subtle",
                                            children: (0, cJ.gb)(t.premiumTier, { useLevels: !1 }),
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
function gk(e) {
    let { guildId: t } = e,
        i = (0, O.bG)([H.A], () => H.A.getGuild(t), [t]);
    return null == i
        ? null
        : (0, p.jsxs)("div", {
              className: gM.Nr,
              children: [
                  (0, p.jsx)(gV, { guild: i }),
                  (0, p.jsx)(eA.$, {
                      variant: "secondary",
                      size: "sm",
                      icon: cA._,
                      text: g.intl.string(g.t.aBHecF),
                      onClick: () => {
                          (0, gx.g)({
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
var gw = i(538888);
let gB =
    "https://cdn.discordapp.com/assets/content/272d3fa6496aedb9dee76f2d555913bfd56c9e9aacd6de3c18449644d9749657.png";
function gF(e) {
    let { slot: t, guildTier: i, premiumSubscription: n, hasCancelableSlots: s, isLast: l } = e,
        r = N.useRef(null),
        a = (0, cJ.I5)(t),
        o = N.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t.cooldownEndsAt]),
        u = null != o && o > new Date(),
        d = (0, cN.A)(),
        c = N.useMemo(
            () =>
                (function (e, t) {
                    if (null == e || e === q.TVA.NONE) return "";
                    let i = [
                        g.intl.formatToPlainString(g.t["dLlKX/"], { numEmojiSlots: sN.TG[e].limits.emoji }),
                        g.intl.formatToPlainString(g.t["+ANIfv"], { numStickerSlots: sN.TG[e].limits.stickers }),
                        g.intl.formatToPlainString(g.t["4gt60b"], {
                            numSoundboardSlots: sN.TG[e].limits.soundboardSounds,
                        }),
                        g.intl.formatToPlainString(g.t.XahSjZ, {
                            resolution: sN.TG[e].limits.screenShareQualityResolution,
                            framerate: sN.TG[e].limits.screenShareQualityFramerate,
                        }),
                        g.intl.formatToPlainString(g.t.NbNs7S, { bitrate: sN.TG[e].limits.bitrate / 1e3 }),
                        g.intl.formatToPlainString(g.t.VVKcpn, { filesize: sN.TG[e].limits.fileSize / 1024 / 1024 }),
                        g.intl.formatToPlainString(g.t.TbpCvv, { numVideoStageSeats: sN.TG[e].limits.stageVideoUsers }),
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
            let e = null != t.premiumGuildSubscription ? uF.default.extractTimestamp(t.premiumGuildSubscription.id) : 0;
            return g.intl.formatToPlainString(g.t.lY2Bur, { date: new Date(e) });
        }, [c, t.premiumGuildSubscription]),
        h = N.useMemo(
            () => (a ? (n.isPausedForFractionalPremium ? d.endsAt.toDate() : n.currentPeriodEnd) : null),
            [a, n, d],
        );
    return (0, p.jsxs)("div", {
        className: ew()(gw.iq, { [gw.Mt]: l }),
        children: [
            (0, p.jsxs)("div", {
                className: gw.kd,
                children: [
                    (0, p.jsx)("img", { alt: "", className: gw.bB, src: gB }),
                    a && null != h
                        ? (0, p.jsx)(V.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: g.intl.format(g.t.Z4ULRD, { date: h }),
                          })
                        : (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsx)(V.E, { variant: "text-sm/medium", color: "text-subtle", children: m }),
                                  u &&
                                      null != o &&
                                      (0, p.jsxs)(p.Fragment, {
                                          children: [
                                              (0, p.jsx)("div", { className: gw.zk }),
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
                                              (0, p.jsx)("div", { className: gw.zk }),
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
                    return (0, p.jsx)(c$, {
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
                        className: gw.Mj,
                        ...e,
                        children: (0, p.jsx)(gU.j, { size: "xs", color: w.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                    }),
            }),
        ],
    });
}
function gz(e) {
    let { guildId: t, slots: i, premiumSubscription: n, hasCancelableSlots: s } = e,
        l = (0, O.bG)([H.A], () => H.A.getGuild(t), [t]);
    return (0, p.jsxs)("div", {
        className: gw.Nr,
        children: [
            (0, p.jsx)("div", {
                className: gw.MY,
                children:
                    null != l
                        ? (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsx)(gV, { guild: l, className: gw.OA }),
                                  (0, p.jsx)(eA.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: g.intl.string(g.t.KLOhbO),
                                      onClick: () => {
                                          (0, sE.default)(),
                                              (0, c7.K4)({
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
                              className: gw.OA,
                              children: (0, p.jsx)(eh.D, {
                                  variant: "heading-md/semibold",
                                  color: "text-default",
                                  children: g.intl.string(g.t["6Kwwuo"]),
                              }),
                          }),
            }),
            i.map((e, t) =>
                (0, p.jsx)(
                    gF,
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
function gY(e) {
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
                                c0.A.createFromServer(
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
                if ((!(0, cJ.I5)(n) && e++, null != n.premiumGuildSubscription)) {
                    let e = n.premiumGuildSubscription.guildId;
                    e in l || (l[e] = []), l[e].push(n);
                }
            }
            return { boostsByGuildId: l, numActiveSlots: e };
        }, [t, s, n, i]);
    if (null == i || 0 === Object.keys(l).length) return null;
    let a = r > oD.Ay.getNumIncludedPremiumGuildSubscriptionSlots(i.planId);
    return (0, p.jsx)("div", {
        className: gw.kR,
        children: uF.default
            .keys(l)
            .map((e) => (0, p.jsx)(gz, { guildId: e, slots: l[e], premiumSubscription: i, hasCancelableSlots: a }, e)),
    });
}
var gX = i(100345);
function gH(e) {
    let { guildBoostSlots: t, fractionalPremiumState: n } = e,
        s = (0, O.bG)([dn.A], () => dn.A.getPremiumTypeSubscription()),
        { unappliedSlots: l, numActiveSlots: r } = N.useMemo(() => {
            let e = [],
                i = 0;
            for (let n of t) !(0, cJ.I5)(n) && i++, null == n.premiumGuildSubscription && e.push(n);
            return { unappliedSlots: e, numActiveSlots: i };
        }, [t]),
        a = r > (null != s ? oD.Ay.getNumIncludedPremiumGuildSubscriptionSlots(s.planId) : 0),
        o = s?.isPausedOrPausePending === !0 && n === sN.xc.NONE;
    return 0 === l.length
        ? null
        : (0, p.jsxs)("div", {
              className: gX.Nr,
              children: [
                  (0, p.jsxs)("div", {
                      className: gX.MY,
                      children: [
                          (0, p.jsxs)("div", {
                              className: gX._L,
                              children: [
                                  (0, p.jsxs)("div", {
                                      className: gX.MD,
                                      children: [
                                          (0, p.jsx)("img", { alt: "", className: gX.F8, src: gB }),
                                          (0, p.jsx)("div", {
                                              className: ew()(gX.qS, "theme-dark"),
                                              children: (0, p.jsx)("span", { className: gX.Vv, children: l.length }),
                                          }),
                                      ],
                                  }),
                                  (0, p.jsxs)("div", {
                                      className: gX.Qp,
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
                          (0, p.jsx)(gA.A, {
                              shouldShow: o,
                              text: g.intl.string(g.t.mOWsF1),
                              "aria-label": g.intl.string(g.t.mOWsF1),
                              children: (e) =>
                                  (0, p.jsx)(eA.$, {
                                      ...e,
                                      variant: "primary",
                                      size: "sm",
                                      icon: cA._,
                                      text: g.intl.string(g.t.BMx1iy),
                                      disabled: o,
                                      onClick: () => {
                                          (0, C.openModalLazy)(async () => {
                                              let { default: e } = await Promise.resolve().then(i.bind(i, 770101));
                                              return (t) =>
                                                  (0, p.jsx)(e, {
                                                      ...t,
                                                      onSelectGuild: (e) => {
                                                          t.onClose(),
                                                              (0, gx.g)({
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
                          gK,
                          {
                              slot: e,
                              isLast: t === l.length - 1,
                              isCancelable: a && !(0, cJ.I5)(e),
                              isCanceled: (0, cJ.I5)(e),
                              premiumSubscription: s,
                              modificationsDisabled: o,
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function gK(e) {
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
              ? (0, p.jsx)(c2, { cooldown: u.getTime() })
              : (0, p.jsx)(V.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: g.intl.string(g.t["2mcafz"]),
                });
    let d = s || l;
    return (0, p.jsxs)("div", {
        className: ew()(gX.iq, { [gX.Mt]: n }),
        children: [
            (0, p.jsxs)("div", {
                className: gX.kd,
                children: [(0, p.jsx)("img", { alt: "", className: gX.bB, src: gB }), t],
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
                                                (0, C.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, p.jsx)(gI.default, { ...e, guildBoostSlot: i }),
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
                                                (0, C.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, p.jsx)(gb.default, { ...e, guildBoostSlotId: i.id }),
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
                            className: gX.Mj,
                            ...e,
                            children: (0, p.jsx)(gU.j, { size: "xs", color: w.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                        }),
                }),
        ],
    });
}
var gW = i(800955);
function gZ(e) {
    let {
            guildBoostSlots: t,
            guildBoostSlotsByGuildId: i,
            premiumSubscription: n,
            pausedAppliedGuildBoosts: s,
            fractionalPremiumState: l,
        } = e,
        r = ta.A.getArticleURL(q.MVz.GUILD_BOOSTING_FAQ),
        a = n?.isPaused === !0 && l !== sN.xc.FP_SUB_PAUSED,
        o = t.some((e) => null == e.premiumGuildSubscription),
        u = a && s.length > 0,
        d = a ? u : t.some((e) => null != e.premiumGuildSubscription);
    return o || d
        ? (0, p.jsxs)("div", {
              className: gW.i,
              children: [
                  (0, p.jsxs)("div", {
                      className: gW.b,
                      children: [
                          (0, p.jsx)(eh.D, { variant: "heading-md/semibold", children: g.intl.string(g.t.W5rDjW) }),
                          (0, p.jsx)(V.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: g.intl.format(g.t.SpDz1x, { helpdeskArticle: r }),
                          }),
                      ],
                  }),
                  (0, p.jsx)(gY, {
                      guildBoostSlots: i,
                      premiumSubscription: n,
                      pausedAppliedGuildBoosts: s,
                      isPaused: a,
                  }),
                  (0, p.jsx)(gH, { guildBoostSlots: t, fractionalPremiumState: l }),
              ],
          })
        : null;
}
var gq = i(917064),
    gQ = i(598259);
function gJ() {
    return (0, p.jsxs)("div", {
        className: gQ.iE,
        children: [
            (0, p.jsx)(eh.D, { variant: "heading-xl/normal", children: g.intl.string(g.t.IzKs3o) }),
            (0, p.jsx)("div", {
                className: gQ.kR,
                children: gq.s.map((e, t) => {
                    let i = e.icon;
                    return (0, p.jsxs)(
                        "div",
                        {
                            className: gQ.Nr,
                            children: [
                                (0, p.jsx)(i, { className: gQ.Kk }),
                                (0, p.jsx)(V.E, {
                                    className: gQ.h_,
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
var g$ = i(232122),
    g0 = i(420469);
function g1() {
    let [e, t] = N.useState(null),
        [i, n] = N.useState(null);
    return (0, p.jsxs)("div", {
        className: g0.iE,
        children: [
            (0, p.jsx)(eh.D, { variant: "heading-xl/normal", children: g.intl.string(g.t.HPJ6Nj) }),
            (0, p.jsx)("ul", {
                className: g0.p_,
                children: g$.m.map((s, l) => {
                    let r = e === l,
                        a = i === l,
                        o = r || a ? "text-strong" : "text-muted";
                    return (0, p.jsxs)(
                        M.D,
                        {
                            tag: "li",
                            className: ew()(g0.Aw, { [g0.$K]: r }),
                            onClick: () => t((e) => (e === l ? null : l)),
                            onMouseEnter: () => n(l),
                            onMouseLeave: () => n(null),
                            children: [
                                (0, p.jsxs)("div", {
                                    className: g0.k7,
                                    children: [
                                        (0, p.jsx)(V.E, {
                                            className: g0.b1,
                                            color: o,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: s.getQuestion(),
                                        }),
                                        (0, p.jsx)(k.a, {
                                            size: "sm",
                                            color: w.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: g0.q4,
                                            style: { transform: r ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                r &&
                                    (0, p.jsx)(V.E, {
                                        className: g0.ZF,
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
var g2 = i(182859),
    g3 = i(853513),
    g6 = i(849744);
function g4() {
    let e = ta.A.getArticleURL(q.MVz.GUILD_SUBSCRIPTIONS);
    return (0, p.jsxs)("div", {
        className: g6.wx,
        children: [
            (0, p.jsxs)("div", {
                className: g6.Qs,
                children: [
                    (0, p.jsxs)("div", {
                        className: g6.B5,
                        children: [
                            (0, p.jsx)("img", { alt: "", className: g6.F8, src: "/assets/263e4cc9043cab70.svg" }),
                            (0, p.jsx)(eh.D, {
                                variant: "heading-xl/normal",
                                children: g.intl.string(g3.default.hjvcLO),
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
            (0, p.jsx)(g2.A, {
                variant: "member",
                className: g6.iO,
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
var g5 = i(315629),
    g8 = i(397384);
function g7() {
    let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser());
    if (null == e || oD.Ay.hasFreeBoosts(e)) return null;
    let t = ta.A.getArticleURL(q.MVz.GUILD_BOOSTING_FAQ);
    return (0, p.jsxs)(g5.h, {
        color: "nitro-pink",
        className: g8.vK,
        children: [
            (0, p.jsxs)("div", {
                className: g8.nw,
                children: [
                    (0, p.jsx)("img", { alt: "", className: g8.q3, src: gB }),
                    (0, p.jsxs)("div", {
                        className: g8.Tm,
                        children: [
                            (0, p.jsx)(V.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: g.intl.format(g.t.Idh1Vs, { count: sN.M4, boostCount: sN.M4 }),
                            }),
                            (0, p.jsxs)("div", {
                                className: g8.xv,
                                children: [
                                    (0, p.jsx)(o_.t, { className: g8.nE }),
                                    (0, p.jsx)(V.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: g.intl.format(g.t["6UAu+f"], {
                                            count: sN.M4,
                                            boostCount: sN.M4,
                                            helpdeskArticle: t,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, p.jsx)(eA.$, {
                variant: "expressive",
                size: "sm",
                icon: o_.t,
                text: g.intl.string(g.t["8x0jKT"]),
                onClick: gv.e,
            }),
        ],
    });
}
var g9 = i(942300);
function me() {
    let e = (0, O.bG)([cH.A], () => cH.A.affinities),
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
              className: g9.i,
              children: [
                  (0, p.jsx)(eh.D, { variant: "heading-md/semibold", children: g.intl.string(g.t.r90Wgo) }),
                  (0, p.jsx)("div", { className: g9.k, children: i.map((e) => (0, p.jsx)(gk, { guildId: e }, e)) }),
              ],
          });
}
var mt = i(901851);
function mi(e) {
    let { count: t, disabledReason: n } = e,
        s = ta.A.getArticleURL(q.MVz.GUILD_BOOSTING_FAQ);
    return (0, p.jsxs)(g5.h, {
        color: "nitro-pink",
        className: mt.vK,
        children: [
            (0, p.jsxs)("div", {
                className: mt.nw,
                children: [
                    (0, p.jsxs)("div", {
                        className: mt.MD,
                        children: [
                            (0, p.jsx)("img", { alt: "", className: mt.F8, src: gB }),
                            (0, p.jsx)("div", {
                                className: ew()(mt.qS, "theme-dark"),
                                children: (0, p.jsx)("span", { className: mt.Vv, children: t }),
                            }),
                        ],
                    }),
                    (0, p.jsxs)("div", {
                        className: mt.Tm,
                        children: [
                            (0, p.jsx)(V.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: g.intl.format(g.t.KewnLu, { count: t, boostCount: t }),
                            }),
                            (0, p.jsxs)("div", {
                                className: mt.xv,
                                children: [
                                    (0, p.jsx)(o_.t, { className: mt.nE }),
                                    (0, p.jsx)(V.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: g.intl.format(g.t["6UAu+f"], {
                                            count: sN.M4,
                                            boostCount: sN.M4,
                                            helpdeskArticle: s,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, p.jsx)(gA.A, {
                shouldShow: null != n,
                text: n ?? "",
                "aria-label": n,
                children: (e) =>
                    (0, p.jsx)(eA.$, {
                        ...e,
                        variant: "primary",
                        size: "sm",
                        icon: cA._,
                        text: g.intl.string(g.t.BMx1iy),
                        disabled: null != n,
                        onClick: () => {
                            (0, C.openModalLazy)(async () => {
                                let { default: e } = await Promise.resolve().then(i.bind(i, 770101));
                                return (t) =>
                                    (0, p.jsx)(e, {
                                        ...t,
                                        onSelectGuild: (e) => {
                                            t.onClose(),
                                                (0, gx.g)({
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
function mn(e) {
    let { premiumSubscription: t } = e,
        i = (0, O.bG)([cK.A], () => cK.A.boostSlots),
        n = N.useMemo(() => Object.values(i), [i]),
        s = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
        l = (0, O.bG)([cH.A], () => cH.A.affinities),
        r = (0, O.bG)([K.Ay], () => K.Ay.getFlattenedGuildIds()),
        a = l.length > 0 || r.length > 0,
        o = N.useMemo(() => n.filter((e) => null != e.premiumGuildSubscription), [n]).length,
        u = (0, O.bG)([cp.A], () => cp.A.getCurrentUserAppliedBoosts()),
        { fractionalState: d } = (0, cN.A)({ forceFetch: !0 }),
        c = s?.isPremiumGroupMember(),
        m = t?.isPausedOrPausePending === !0 && d === sN.xc.NONE,
        h = N.useMemo(() => n.some((e) => null == e.premiumGuildSubscription && e.isAvailable()), [n]),
        A = m ? g.intl.string(g.t.mOWsF1) : h ? void 0 : g.intl.string(g.t.xr4m5B),
        E = N.useMemo(() => {
            if (null == t) return 0;
            let e = oD.Ay.getNumIncludedPremiumGuildSubscriptionSlots(t.planId);
            return 0 === e || e !== n.length ? 0 : Math.max(0, e - o);
        }, [t, n.length, o]);
    return (0, p.jsxs)("div", {
        className: gD.GO,
        children: [
            (0, p.jsx)(dT.kb, { className: gD.ek }),
            (0, p.jsx)(g4, {}),
            (0, p.jsx)(g7, {}),
            E > 0 && (0, p.jsx)(mi, { count: E, disabledReason: A }),
            c && (0, p.jsx)(cX.A, {}),
            !a && (0, p.jsx)(gh, {}),
            (0, p.jsxs)("div", {
                className: gD.C_,
                children: [
                    (0, p.jsx)(gZ, {
                        guildBoostSlots: n,
                        guildBoostSlotsByGuildId: i,
                        premiumSubscription: t,
                        pausedAppliedGuildBoosts: u,
                        fractionalPremiumState: d,
                    }),
                    (0, p.jsx)(me, {}),
                    (0, p.jsx)(gG.A, { hideHeading: !0, hideTier0: !0 }),
                    (0, p.jsx)(gJ, {}),
                    (0, p.jsx)(g1, {}),
                ],
            }),
        ],
    });
}
var ms = i(752606);
let ml = (0, o.E2)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_SETTING, {
        Component: function () {
            let e = cS.useConfig({ location: "UserSettingsPremiumGuildSubscriptions" }).enabled;
            N.useEffect(() => {
                n3.h.wait(() => {
                    uM.hP(), uM.$o(), (0, cE.CD)(), (0, cx.zS)(null, null, q.tF5.DISCOVERY), (0, cE.tO)(!0);
                });
            }, []);
            let { hasFetchedSubscriptions: t, premiumSubscription: i } = (0, O.cf)([dn.A], () => ({
                    hasFetchedSubscriptions: dn.A.hasFetchedSubscriptions(),
                    premiumSubscription: dn.A.getPremiumTypeSubscription(),
                })),
                n = (0, cT.Y)(),
                s = (0, O.bG)([di.A], () => di.A.hasFetchedPaymentSources),
                l = (0, O.bG)([cp.A], () => cp.A.isFetchingCurrentUserAppliedBoosts),
                r = !t || !n || !s || l,
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
                                  ? (0, p.jsx)(mn, { premiumSubscription: i })
                                  : (0, p.jsx)(gP, { premiumSubscription: i }),
                          }),
                      ],
                  });
        },
        useSearchTerms: () => [g.intl.string(g.t["+CbP2v"]), g.intl.string(g.t.Nn1lJy)],
    }),
    mr = (0, o.zZ)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_CATEGORY, { buildLayout: () => [ml] }),
    ma = (0, o.t_)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        useTitle: () => g.intl.string(g.t["+CbP2v"]),
        buildLayout: () => [mr],
    }),
    mo = (0, o.i4)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["+CbP2v"]),
        icon: cA._,
        buildLayout: () => [ma],
    });
var mu = i(153659),
    md = i(155984),
    mc = i(262077),
    mg = i(696986),
    mm = i(819411);
function mh(e) {
    let { onClickManageSubscription: t, count: i } = e;
    return (0, p.jsxs)("div", {
        children: [
            (0, p.jsx)(eh.D, { variant: "heading-md/bold", children: g.intl.string(g.t["KzCF/6"]) }),
            (0, p.jsx)(mg.h, { size: 4 }),
            (0, p.jsx)(V.E, { variant: "text-md/normal", className: mm.yV, children: g.intl.string(g.t["3D7qCu"]) }),
            (0, p.jsx)(mg.h, { size: 24 }),
            (0, p.jsxs)("div", {
                className: mm.Nr,
                children: [
                    (0, p.jsx)("img", { src: "/assets/5a420feed295b595.svg", alt: "", className: mm.RI }),
                    (0, p.jsxs)("div", {
                        className: mm.FS,
                        children: [
                            (0, p.jsx)(eh.D, {
                                variant: "heading-xl/semibold",
                                className: mm.wx,
                                children: g.intl.string(g.t["KzCF/6"]),
                            }),
                            (0, p.jsx)(V.E, {
                                variant: "text-md/normal",
                                className: mm.h_,
                                children: g.intl.format(g.t["m+pcOO"], { numSubscriptions: i }),
                            }),
                        ],
                    }),
                    (0, p.jsx)(eA.$, {
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
var mA = i(872351),
    mE = i(9113),
    mx = i(599941),
    mT = i(384684),
    mS = i(2242);
let mp = [];
var mN = i(912851),
    mf = i(369176);
let mC = (e) => {
    let { label: t, onClick: i, submitting: n } = e;
    return (0, p.jsx)(M.D, {
        onClick: n ? void 0 : i,
        className: mf.x6,
        children: (0, p.jsxs)("div", {
            className: mf.hQ,
            children: [
                n
                    ? (0, p.jsx)(uP.y, { type: uP.y.Type.PULSING_ELLIPSIS, className: mf.__invalid_spinner })
                    : (0, p.jsx)(V.E, { variant: "text-md/medium", className: mf.Pf, children: t }),
                (0, p.jsx)(k.a, { size: "md", color: "currentColor", className: mf.UE }),
            ],
        }),
    });
};
var m_ = i(465932),
    mI = i(543767),
    mb = i(420139),
    mv = i(790284),
    mj = i(636194),
    my = i(624456),
    mO = i(710144),
    mR = i(815332),
    mL = i(817649),
    mD = i(969389);
let mP = (e) => {
    let { transitionState: t, groupListing: i, listing: n, subscription: s, onClose: l } = e,
        r = (0, sS.GV)(),
        { analyticsLocations: a } = (0, nG.Ay)(eM.A.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL),
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
                        return i(!0), await uM.M2(t, e), !0;
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
        m = n.role_benefits.benefits.filter((e) => e.ref_type === mS.bN.CHANNEL),
        h = n.role_benefits.benefits.filter((e) => e.ref_type === mS.bN.INTANGIBLE),
        A = rC()(s.currentPeriodEnd).format("MMMM Do, YYYY"),
        E = g.intl.formatToPlainString(g.t.KsMRP5, {
            numChannels: m.length,
            numAdditionalBenefits: h.length,
            subscriptionEndDate: A,
        });
    return (0, p.jsx)(lD.Modal, {
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
                (0, p.jsx)(mL.x, { listingId: n.id, guildId: i.guild_id, className: mD.P }),
            ],
        }),
    });
};
var mG = i(319225),
    mU = i(746080),
    mM = i(47685);
let mV = (e) => {
        let { label: t, value: i, showInfoIcon: n, infoIconTooltipText: s } = e;
        return (0, p.jsxs)("div", {
            className: mM.L0,
            children: [
                (0, p.jsxs)("div", {
                    className: mM.a5,
                    children: [
                        (0, p.jsx)(eh.D, { variant: "heading-deprecated-12/semibold", className: mM.HU, children: t }),
                        n &&
                            (0, p.jsx)(e0.m, {
                                text: s,
                                children: (0, p.jsx)(lp.m, { size: "xs", color: "currentColor", className: mM.Mo }),
                            }),
                    ],
                }),
                (0, p.jsx)(eh.D, { variant: "heading-xl/semibold", className: mM.sx, children: i }),
            ],
        });
    },
    mk = (e) => {
        let { subscription: t } = e,
            { analyticsLocations: i } = (0, nG.Ay)(),
            [n] = (0, mI.Kq)({
                subscriptionId: t.id,
                renewal: !0,
                analyticsLocations: i,
                analyticsLocation: eM.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
            }),
            s = (0, O.bG)([di.A], () => di.A.hasFetchedPaymentSources);
        return null != n && s
            ? (0, p.jsx)(mb.A, { subscription: t, currentInvoicePreview: n, dropdownClassName: mM.Nw })
            : (0, p.jsx)(uP.y, {});
    },
    mw = (e) => {
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
                      className: mM.__invalid_rowButtons,
                      children: i
                          ? (0, p.jsx)(eA.$, {
                                variant: "primary",
                                text: g.intl.string(g.t.y3mAE4),
                                onClick: r,
                                loading: n,
                            })
                          : (0, p.jsxs)(p.Fragment, {
                                children: [
                                    !t && !s && (0, p.jsx)(mC, { label: g.intl.string(g.t.FRbWR8), onClick: a }),
                                    (0, p.jsx)(mC, { label: g.intl.string(g.t.Dx0lF7), onClick: l }),
                                ],
                            }),
                  }),
              });
    },
    mB = (e) => {
        let { subscription: t } = e,
            {
                listing: i,
                groupListing: n,
                guild: s,
                expanded: l,
                handleToggleExpanded: r,
                subscriptionInfo: a,
            } = (function (e) {
                let t = (0, my.M)(e),
                    i = (0, O.bG)([mj.A], () => mj.A.getSubscriptionListingForPlan(t)),
                    n = (0, O.bG)([mj.A], () =>
                        null != i ? mj.A.getSubscriptionGroupListingForSubscriptionListing(i.id) : null,
                    ),
                    s = (0, O.bG)([H.A], () => H.A.getGuild(n?.guild_id)),
                    [l, r] = N.useState(!1),
                    { fetchSubscriptionsSettings: a } = (0, mx.XE)();
                N.useEffect(() => {
                    l && null != s && null == mj.A.getSubscriptionSettings(s.id) && a(s.id);
                }, [l, s, a]);
                let o =
                    null == i
                        ? void 0
                        : (function (e) {
                              let { subscription: t } = e,
                                  i = rC()(t.currentPeriodEnd).format("M/D/YY"),
                                  n = null != t.price ? (0, uw.$g)(t.price, t.currency) : "",
                                  s = rC()(t.createdAt).format("M/D/YY"),
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
            c = (0, sS.GV)(),
            { analyticsLocations: m } = (0, nG.Ay)(),
            { shouldHideGuildPurchaseEntryPoints: h } = (0, m_.MH)(s?.id),
            A = t?.isPurchasedViaAppleGeneric;
        if (null == n || null == i || null == a) return null;
        let E = async () => {
                try {
                    d(!0),
                        await uM.QP(t, m),
                        (0, mG.E)({ title: g.intl.string(g.t.oPV2cy), body: g.intl.string(g.t.DdRizV) });
                } finally {
                    d(!1);
                }
            },
            {
                isCancelled: x,
                isPastDue: T,
                subscriptionPrice: S,
                memberSince: f,
                nextRenewalDate: _,
                nextRenewalLabel: I,
                isTrial: b,
            } = a,
            v = i.soft_deleted || null == s || A;
        return (0, p.jsxs)("div", {
            className: mM.kL,
            children: [
                (0, p.jsx)(mO.A, {
                    onClick: r,
                    className: mM.N1,
                    children: (e) => {
                        let { areaRef: t, handleStopPropagation: n } = e;
                        return (0, p.jsxs)(p.Fragment, {
                            children: [
                                null != s && (0, p.jsx)(c8.Ay, { guild: s, active: !0, size: c8.Ay.Sizes.MEDIUM }),
                                (0, p.jsxs)("div", {
                                    className: mM.if,
                                    children: [
                                        (0, p.jsx)(V.E, {
                                            variant: "text-md/medium",
                                            className: mM.J5,
                                            children: null != s ? s.name : g.intl.string(g.t["He+cmd"]),
                                        }),
                                        (0, p.jsxs)("div", {
                                            className: mM.xp,
                                            children: [
                                                (0, p.jsx)(V.E, {
                                                    variant: "text-sm/normal",
                                                    className: mM.KR,
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
                                                                      className: mM.qc,
                                                                      text: g.intl.string(g.t.NrRwIl),
                                                                      color: w.A.unsafe_rawColors.YELLOW_300.css,
                                                                  }),
                                                              }),
                                                          })
                                                        : null,
                                                A
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
                                        className: ew()(mM.D6, { [mM.S7]: l }),
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
                              (0, p.jsx)("div", { className: mM.yF }),
                              (0, p.jsx)(mR.A, { groupListingId: n.id, subscription: t, className: mM.kE }),
                              (0, p.jsxs)("div", {
                                  className: mM.Zx,
                                  children: [
                                      (0, p.jsx)(mV, { label: I, value: _ }),
                                      (0, p.jsx)(mV, {
                                          label: g.intl.string(g.t.dltUMH),
                                          value: S,
                                          showInfoIcon: b,
                                          infoIconTooltipText: b ? g.intl.string(g.t["/q6fpa"]) : void 0,
                                      }),
                                      (0, p.jsx)(mV, { label: g.intl.string(g.t.AOcwWB), value: f }),
                                  ],
                              }),
                              (0, p.jsx)(mg.h, { size: 16 }),
                              !x &&
                                  !A &&
                                  (0, p.jsx)(sy.D, {
                                      label: g.intl.string(g.t.wmMFvA),
                                      children: (0, p.jsx)(mk, { subscription: t }),
                                  }),
                              !v &&
                                  (0, p.jsx)(mw, {
                                      isTrial: b,
                                      isCancelled: x,
                                      isResubscribing: o,
                                      shouldHideRoleSubscriptionEntryPoints: h,
                                      onCancelSubscriptionClick: () => {
                                          if (null != s) {
                                              var e;
                                              (e = { groupListing: n, listing: i, subscription: t }),
                                                  (0, C.openModal)((t) => (0, p.jsx)(mP, { ...t, ...e }));
                                          }
                                      },
                                      onChangePlanClick: () => {
                                          null != s &&
                                              ((0, sO.pX)(q.BVt.CHANNEL(s.id, mU.VV.ROLE_SUBSCRIPTIONS)),
                                              (0, sE.default)(),
                                              mN.A.show(
                                                  q.kqX.BACK_TO_PREVIOUS_SCREEN,
                                                  void 0,
                                                  g.intl.string(g.t.DvbaM4),
                                                  () => {
                                                      mv.A.setState({ subsection: nb.nR }),
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
var mF = i(170272);
let mz = (e) => {
    let { onGoBack: t } = e,
        i = (function () {
            let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t =
                    (0, O.bG)([mT.A], () =>
                        (function () {
                            let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [mT.A],
                                t = e.getGuildIdsWithPurchasableRoles(),
                                i = !1;
                            return (t.forEach((t) => {
                                e.getUserSubscriptionRoles(t).size > 0 && (i = !0);
                            }),
                            i)
                                ? mS.M_.SUBSCRIBED
                                : 0 === t.size
                                  ? mS.M_.NONE
                                  : mS.M_.IN_SUBSCRIPTION_SERVER;
                        })([mT.A]),
                    ) === mS.M_.SUBSCRIBED,
                i = (0, O.bG)([dn.A], () => dn.A.getActiveGuildSubscriptions()),
                n = N.useRef(!1);
            return (
                N.useEffect(() => {
                    (function (e) {
                        let { ensureFresh: t, hasFetched: i, hasRoleSubscriptions: n } = e,
                            s = dn.A.getActiveGuildSubscriptions();
                        return (
                            ((s?.length ?? 0) === 0 && !!n) || (!!t && !i) || (!i && !dn.A.hasFetchedSubscriptions())
                        );
                    })({ ensureFresh: e, hasRoleSubscriptions: t, hasFetched: n.current }) &&
                        ((n.current = !0), uM.hP());
                }, [e, t]),
                i ?? mp
            );
        })(),
        { loading: n } = (0, mx.eb)(i);
    return ((0, mE.A)(uz.Fr ? "role-subscriptions-user-setting" : void 0), n)
        ? (0, p.jsx)(uP.y, {})
        : 0 === i.length
          ? null
          : (0, p.jsxs)("div", {
                children: [
                    (0, p.jsx)(eA.$, { text: g.intl.string(g.t.hqyhKQ), icon: mA.z, variant: "secondary", onClick: t }),
                    (0, p.jsx)(mg.h, { size: 10 }),
                    (0, p.jsx)(ia.n, {
                        label: g.intl.string(g.t["KzCF/6"]),
                        description: g.intl.string(g.t["Y+ucR7"]),
                        children: (0, p.jsx)("div", {
                            className: mF.A,
                            children: i.map((e) => (0, p.jsx)(mB, { subscription: e }, e.id)),
                        }),
                    }),
                ],
            });
};
var mY = i(327479),
    mX = i(334335);
function mH(e) {
    let { onClickManageSubscription: t, count: i } = e;
    return (0, p.jsxs)("div", {
        children: [
            (0, p.jsx)(eh.D, { variant: "heading-md/bold", children: g.intl.string(g.t["48ywCu"]) }),
            (0, p.jsx)(mg.h, { size: 4 }),
            (0, p.jsx)(V.E, { variant: "text-md/normal", className: mX.yV, children: g.intl.string(g.t.VWxmSo) }),
            (0, p.jsx)(mg.h, { size: 24 }),
            (0, p.jsxs)("div", {
                className: mX.Nr,
                children: [
                    (0, p.jsx)("img", { src: "/assets/d6bcd13fb6c85425.svg", alt: "", className: mX._e }),
                    (0, p.jsxs)("div", {
                        className: mX.FS,
                        children: [
                            (0, p.jsx)(eh.D, {
                                variant: "heading-xl/semibold",
                                className: mX.wx,
                                children: g.intl.string(g.t["48ywCu"]),
                            }),
                            (0, p.jsx)(V.E, {
                                variant: "text-md/normal",
                                className: mX.h_,
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
var mK = i(548411),
    mW = i(417098),
    mZ = i(143582),
    mq = i(915043),
    mQ = i(920087);
function mJ(e) {
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
        className: ew()(mQ.iE, t),
        children: [
            (0, p.jsx)("div", { className: ew()(mQ.wx, n), children: i }),
            l && (0, p.jsx)("div", { className: mQ.Qs, children: s }),
        ],
    });
}
var m$ = i(885996),
    m0 = i(144165),
    m1 = i(664121),
    m2 = i(950305),
    m3 = i(943775),
    m6 = i(123791),
    m4 = i(900797),
    m5 = i(632510);
let m8 = N.createContext({ isOpen: !1, toggleOpen: () => {} });
function m7(e) {
    let { children: t } = e,
        [i, n] = N.useReducer((e) => !e, !1),
        s = N.useMemo(() => ({ isOpen: i, toggleOpen: n }), [i]);
    return (0, p.jsx)(m8.Provider, { value: s, children: t(i) });
}
m7.Toggle = function (e) {
    let { className: t, text: i } = e,
        { isOpen: n, toggleOpen: s } = N.useContext(m8),
        l = n ? m4.t : k.a,
        r = null != i ? i : n ? g.intl.string(g.t.fgq1gs) : g.intl.string(g.t.XJuakA);
    return (0, p.jsxs)(M.D, {
        className: ew()(m5.L, t),
        onClick: s,
        children: [
            (0, p.jsx)(V.E, { variant: "heading-sm/semibold", tag: "div", color: "currentColor", children: r }),
            (0, p.jsx)(l, { size: "sm", color: "currentColor" }),
        ],
    });
};
var m9 = i(627363),
    he = i(243217),
    ht = i(328968),
    hi = i(163437),
    hn = i(3432);
function hs(e) {
    return e.toLocaleDateString(void 0, { dateStyle: "long" });
}
var hl = i(184451),
    hr = (((s = {})[(s.LOADING = 0)] = "LOADING"), (s[(s.DONE = 1)] = "DONE"), (s[(s.ERROR = 2)] = "ERROR"), s);
function ha(e) {
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
            isCancelled: h,
            isOrphanedGuildSubscription: A,
            renewalPlan: E,
        } = (0, O.cf)([d2.A, d3.A, ht.A, H.A], () => {
            let e,
                i = d2.A.get(r),
                n = null != i ? d3.A.get(i.skuId) : void 0,
                a = n?.applicationId,
                o = null != i ? ht.A.getForSKU(i.skuId) : null,
                u = null != o && (0, hi.PJ)(o.skuFlags),
                d = u && null != s ? H.A.getGuild(s) : void 0,
                c = (0, hi.Uo)(t, n),
                g = u && null != s && null == d;
            if (!1 === c && null != l && l.items.length > 0) {
                let t = l.items[0];
                e = d2.A.get(t.planId) ?? void 0;
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
        { data: x } = (0, m9.YY)(a),
        T = N.useMemo(() => (null != x ? (0, m3.A)(x, 100) : null), [x]),
        S = m?.deleted ?? !1,
        f = null != m && (0, hi.Se)(m),
        C = t.status === q.Dmq.PAST_DUE,
        { analyticsLocations: _ } = (0, nG.Ay)(),
        [I] = (0, mI.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: _,
            analyticsLocation: eM.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        b = hs(t.currentPeriodEnd),
        v = 0 === n;
    return (0, p.jsxs)(mJ, {
        headerClassName: hl.dL,
        header:
            !1 === v
                ? (0, p.jsxs)(p.Fragment, {
                      children: [
                          (0, p.jsxs)("div", {
                              className: hl.VW,
                              children: [
                                  null != T &&
                                      (0, p.jsx)(m0._, { src: T.href, imageClassName: hl.Z2, width: 40, height: 40 }),
                                  (0, p.jsxs)("div", {
                                      className: hl.aF,
                                      children: [
                                          (0, p.jsx)(eh.D, {
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
                              className: hl.Pz,
                              children:
                                  null != x &&
                                  null != u &&
                                  null != m &&
                                  (0, p.jsx)(hg, {
                                      subscription: t,
                                      app: x,
                                      guild: c,
                                      sku: m,
                                      storeListing: u,
                                      isCancelled: h,
                                      isOrphanedGuildSubscription: A,
                                      navigateToSwitchPlan: i,
                                      renewalSkuId: E?.skuId,
                                  }),
                          }),
                      ],
                  })
                : (0, p.jsx)(uP.y, { type: uP.t.PULSING_ELLIPSIS }),
        children: [
            h &&
                (0, p.jsx)(hc, {
                    type: "warning",
                    title: f
                        ? g.intl.formatToPlainString(g.t.QOnM1y, { subscriptionPeriodEnd: b })
                        : g.intl.formatToPlainString(g.t.HOaZu8, { subscriptionPeriodEnd: b }),
                }),
            !h && A && (0, p.jsx)(hc, { type: "warning", title: g.intl.string(g.t.SmSP8Q) }),
            C && (0, p.jsx)(hc, { type: "danger", title: g.intl.string(g.t.fvOqBo) }),
            (0, p.jsxs)("div", {
                className: hl.zH,
                children: [
                    (0, p.jsx)(hd, {
                        title: g.intl.string(g.t["5D/KEH"]),
                        content: d
                            ? (0, p.jsxs)(p.Fragment, {
                                  children: [
                                      (0, p.jsxs)("span", {
                                          className: hl.yW,
                                          children: [(0, p.jsx)(m1.R, { size: "xs" }), g.intl.string(g.t.QjL3vn)],
                                      }),
                                      null != c &&
                                          (0, p.jsxs)("span", {
                                              className: hl._t,
                                              children: [
                                                  (0, p.jsx)(V.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: g.intl.format(g.t["7ZD8p1"], { guildName: c.name }),
                                                  }),
                                                  (0, p.jsx)(c8.Ay, { guild: c, size: c8.Ay.Sizes.MINI }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, p.jsxs)("span", {
                                  className: hl.yW,
                                  children: [(0, p.jsx)(m2.n, { size: "xs" }), g.intl.string(g.t["6anEVv"])],
                              }),
                    }),
                    (0, p.jsx)(ho, { invoicePreview: I, subscriptionPlan: o }),
                    (0, p.jsx)(hd, {
                        title: g.intl.string(g.t.dnUzb6),
                        content: hs(t.createdAt ?? t.currentPeriodStart),
                    }),
                    (0, p.jsx)(hu, { isCancelled: h, subscriptionPeriodEnd: b, renewalPlan: E }),
                ],
            }),
            (0, p.jsx)(hh, {
                subscription: t,
                currentInvoicePreview: I,
                loadingState: n,
                isDeleted: S,
                isCancelled: h,
            }),
            null != x &&
                u?.benefits != null &&
                u.benefits.length > 0 &&
                (0, p.jsx)(hm, { appId: x.id, listingBenefits: u.benefits }),
        ],
    });
}
function ho(e) {
    let { subscriptionPlan: t, invoicePreview: i } = e;
    if (null == t) return (0, p.jsx)(hd, { title: g.intl.string(g.t.KI7ERx), content: "" });
    let n = (0, uw.CE)((0, uw.$g)(t.price, t.currency), t.interval, t.intervalCount),
        s = i?.findInvoiceItemByPlanId(t.id);
    if (null == s) return (0, p.jsx)(hd, { title: g.intl.string(g.t.KI7ERx), content: n });
    let l = (0, uw.CE)((0, uw.$g)(s.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, p.jsx)(hd, {
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
function hu(e) {
    let { isCancelled: t, subscriptionPeriodEnd: i, renewalPlan: n } = e;
    if (null != n) {
        let e = (0, uw.CE)((0, uw.$g)(n.price, n.currency), n.interval, n.intervalCount);
        return (0, p.jsx)(hd, {
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
    return (0, p.jsx)(hd, { title: t ? g.intl.string(g.t.enxcAl) : g.intl.string(g.t["Ms+6Zq"]), content: i });
}
function hd(e) {
    let { title: t, content: i } = e;
    return (0, p.jsxs)("div", {
        className: hl.nM,
        children: [
            (0, p.jsx)(V.E, { variant: "text-sm/medium", children: t }),
            (0, p.jsx)(V.E, { variant: "text-sm/medium", className: hl.u4, children: i }),
        ],
    });
}
function hc(e) {
    let { type: t, title: i } = e;
    return (0, p.jsx)(tr.p, {
        messageType: "warning" === t ? tr.Y.WARNING : tr.Y.ERROR,
        className: hl.Xm,
        children: (0, p.jsx)(V.E, { variant: "text-sm/normal", children: i }),
    });
}
function hg(e) {
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
        c = (0, hi.Se)(s),
        { analyticsLocations: m } = (0, nG.Ay)(),
        [h, A] = N.useState(!1),
        E = (0, m6.C)(t.id),
        x = (0, O.bG)([d3.A], () => d3.A.getParentSKU(n.skuId), [n.skuId]),
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
        f = async () => {
            try {
                A(!0);
                let { subscription: e } = await (0, uM.QP)(l, m);
                if (null == e) return;
                (0, C.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([i.e("47869"), i.e("52396")]).then(i.bind(i, 115623));
                    return (i) => (0, p.jsx)(t, { ...i, storeListing: n, subscription: he.A.createFromServer(e) });
                });
            } finally {
                A(!1);
            }
        };
    return (0, p.jsxs)("div", {
        className: hl.fw,
        children: [
            c || (r && a)
                ? null
                : r
                  ? (0, p.jsx)(eA.$, {
                        variant: "secondary",
                        size: "sm",
                        text: g.intl.string(g.t.QtMnkW),
                        onClick: f,
                        loading: h,
                    })
                  : (0, p.jsx)(eA.$, {
                        variant: "secondary",
                        size: "sm",
                        text: g.intl.string(g.t["E8G/tr"]),
                        onClick: () => {
                            (0, C.openModalLazy)(async () => {
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
                (0, p.jsx)(eA.$, {
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
function hm(e) {
    let { appId: t, listingBenefits: i } = e;
    return (0, p.jsx)(m7, {
        children: (e) =>
            (0, p.jsxs)("div", {
                className: hl.PX,
                children: [
                    (0, p.jsxs)("div", {
                        className: hl.wV,
                        children: [
                            e && (0, p.jsx)(V.E, { variant: "text-sm/semibold", children: g.intl.string(g.t.mORL67) }),
                            (0, p.jsx)(m7.Toggle, {
                                className: hl.Bh,
                                text: e ? g.intl.string(g.t.gsbFAw) : g.intl.string(g.t.IwjfxV),
                            }),
                        ],
                    }),
                    e
                        ? i.map((e) => {
                              let { id: i, name: n, description: s, icon: l } = e;
                              return (0, p.jsx)(m$.FY, { header: n, icon: (0, hn.N)(t, l), description: s }, i);
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
          ? (0, p.jsx)("div", {
                className: hl.Ji,
                children: (0, p.jsx)(sy.D, {
                    label: g.intl.string(g.t.azZaZa),
                    children: (0, p.jsx)(uP.y, { type: uP.t.PULSING_ELLIPSIS }),
                }),
            })
          : 2 === n
            ? (0, p.jsx)("div", {
                  className: hl.Ji,
                  children: (0, p.jsxs)(mW.$T, {
                      color: mW.Hv.DANGER,
                      style: { borderRadius: 0 },
                      children: [
                          g.intl.format(g.t.IIHUUF, { subscriptionId: t.id }),
                          (0, p.jsx)("br", {}),
                          g.intl.format(g.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                      ],
                  }),
              })
            : (0, p.jsx)("div", {
                  className: hl.Ji,
                  children: (0, p.jsx)(sy.D, {
                      label: g.intl.string(g.t.azZaZa),
                      children: (0, p.jsx)(mb.A, { subscription: t, currentInvoicePreview: i, disabled: s || l }),
                  }),
              });
}
var hA = (((l = {}).HOME = "HOME"), (l.SWITCH_APP_PLANS = "SWITCH_APP_PLANS"), l);
i(938796);
var hE = i(38405);
let hx = (0, O.UT)(d2.A, {
    getQueryId: q.fic.SUBSCRIPTION_PLANS,
    get: (e) => {
        if (null == e) return null;
        let t = d2.A.getForSKU(e);
        return 0 === t.length ? null : t;
    },
    load: (e) => (
        null == e && hE.A.addBreadcrumb({ message: "Error loading subscription plans: skuId is null" }),
        null != e ? (0, cx.ur)(e).then(() => {}) : Promise.reject()
    ),
});
var hT = i(240248),
    hS = i(237218),
    hp = i(988325);
function hN(e) {
    let { children: t, lineClamp: i = 2, ...n } = e,
        [s, l] = N.useState(!1),
        [r, a] = N.useState(null),
        o =
            null != r &&
            (0, p.jsx)("button", {
                className: hp.x6,
                onClick: () => l((e) => !e),
                children: (0, p.jsxs)(V.E, {
                    className: hp.B0,
                    variant: "text-sm/medium",
                    color: "text-brand",
                    children: [
                        s ? g.intl.string(g.t["JQX/Pb"]) : g.intl.string(g.t.Fbrd8J),
                        s
                            ? (0, p.jsx)(m4.t, { color: w.A.colors.TEXT_BRAND, size: "xs" })
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
                    className: hp.Qs,
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
var hf = i(827991);
function hC(e) {
    let { cta: t, storeListing: i, className: n } = e,
        { applicationId: s, benefits: l, description: r } = i,
        a = N.useMemo(() => (null == i.thumbnail ? null : (0, hS.t)(s, i.thumbnail, 256)), [s, i.thumbnail]),
        { data: o } = hx(i.skuId),
        u = N.useMemo(() => {
            if (null == o || 0 === o.length) return null;
            let e = o[0];
            return (0, uw._J)(e);
        }, [o]);
    return null == u
        ? null
        : (0, p.jsxs)(mJ, {
              className: ew()(hf.iE, n),
              header: (0, p.jsxs)(p.Fragment, {
                  children: [
                      (0, p.jsxs)("div", {
                          className: hf.qd,
                          children: [
                              null != a &&
                                  (0, p.jsx)(m0._, { src: a.href, imageClassName: hf.rW, width: 48, height: 48 }),
                              (0, p.jsxs)("div", {
                                  children: [
                                      (0, p.jsx)(eh.D, { variant: "heading-md/bold", children: i.summary }),
                                      (0, p.jsx)(V.E, { variant: "text-md/medium", children: u }),
                                  ],
                              }),
                          ],
                      }),
                      t,
                  ],
              }),
              children: [
                  !(0, hT.uJ)(r) &&
                      (0, p.jsx)("div", {
                          className: hf.h_,
                          children: (0, p.jsx)(hN, { variant: "text-sm/medium", children: r }),
                      }),
                  null != l &&
                      l.length > 0 &&
                      (0, p.jsx)("div", {
                          className: hf.PX,
                          children: l.map((e) => {
                              let { id: t, name: i, description: n, icon: l } = e;
                              return (0, p.jsx)(m$.FY, { header: i, icon: (0, hn.N)(s, l), description: n }, t);
                          }),
                      }),
              ],
          });
}
var h_ = i(185438),
    hI = i(386011);
function hb(e) {
    let {
            app: t,
            currentSubscription: i,
            currentListing: n,
            alternativeListings: s,
            navigateToHome: l,
            subscriptionGroup: r,
            renewalSkuId: a,
        } = e,
        o = (0, m3.A)(t, 100),
        u = (0, hi.PJ)(r.flags),
        d = u ? m1.R : m2.n,
        c = u ? g.intl.string(g.t["46YF2D"]) : g.intl.string(g.t.fFyGiA),
        m = i.metadata?.application_subscription_guild_id,
        h = (0, O.bG)([H.A], () => (u && null != m ? H.A.getGuild(m) : void 0), [m, u]),
        A = (0, O.bG)([d3.A], () => {
            if (null != a) return d3.A.get(a);
        }, [a]),
        E = hs(i.currentPeriodEnd);
    return (0, p.jsxs)("div", {
        children: [
            (0, p.jsxs)("div", {
                className: hI.wx,
                children: [
                    null != o && (0, p.jsx)(m0._, { src: o.href, imageClassName: hI.Z2, width: 48, height: 48 }),
                    (0, p.jsxs)("div", {
                        children: [
                            (0, p.jsx)(eh.D, { variant: "heading-xl/semibold", children: t.name }),
                            (0, p.jsxs)("div", {
                                className: hI.p4,
                                children: [
                                    (0, p.jsxs)(eh.D, {
                                        variant: "heading-md/normal",
                                        className: hI.N4,
                                        children: [(0, p.jsx)(d, { size: "xs", color: "currentColor" }), " ", c],
                                    }),
                                    null != h &&
                                        (0, p.jsxs)(p.Fragment, {
                                            children: [
                                                (0, p.jsx)(V.E, { variant: "text-md/normal", children: "•" }),
                                                (0, p.jsxs)("span", {
                                                    className: hI.vP,
                                                    children: [
                                                        (0, p.jsx)(c8.Ay, { guild: h, size: c8.Ay.Sizes.SMOL }),
                                                        (0, p.jsx)(eh.D, {
                                                            variant: "heading-md/semibold",
                                                            color: "text-muted",
                                                            children: g.intl.format(g.t["7ZD8p1"], {
                                                                guildName: h.name,
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
            (0, p.jsx)(m7, {
                children: (e) =>
                    (0, p.jsxs)("div", {
                        className: hI._B,
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
                            (0, p.jsx)(m7.Toggle, {
                                text: e ? g.intl.string(g.t["1Rkq/E"]) : g.intl.string(g.t.WsTHkY),
                            }),
                        ],
                    }),
            }),
            (0, p.jsxs)("div", {
                className: hI.x0,
                children: [
                    (0, p.jsx)(hC, {
                        storeListing: n,
                        className: hI.o3,
                        cta: (0, p.jsxs)("div", {
                            className: hI.cJ,
                            children: [
                                (0, p.jsx)(V.E, {
                                    variant: "eyebrow",
                                    color: "text-brand",
                                    children: g.intl.string(g.t.fHIpOY),
                                }),
                                null != A &&
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
                                  hC,
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
                            : (0, p.jsx)(hv, { storeListing: e, guildId: m, navigateToHome: l }, e.id),
                    ),
                ],
            }),
        ],
    });
}
function hv(e) {
    let { storeListing: t, guildId: i, navigateToHome: n } = e,
        { openModal: s } = (0, h_.A)({
            analyticsLocation: q.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: i,
            disableGuildSelector: !0,
            onComplete: n,
        });
    return (0, p.jsx)(hC, {
        storeListing: t,
        cta: (0, p.jsx)(eA.$, { variant: "primary", size: "sm", text: g.intl.string(g.t["+KwmBt"]), onClick: s }),
    });
}
class hj extends N.PureComponent {
    state = { hasError: !1 };
    static getDerivedStateFromError(e) {
        return { hasError: !0 };
    }
    render() {
        return this.state.hasError
            ? (0, p.jsxs)(mW.$T, {
                  color: mW.Hv.DANGER,
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
function hy(e) {
    let { subscriptions: t, updateHeader: i } = e,
        [n, s] = N.useState({ route: hA.HOME }),
        { route: l } = n,
        r = () => {
            s({ route: hA.HOME });
        },
        a = (e) => {
            s({ route: hA.SWITCH_APP_PLANS, ...e }), i(g.intl.string(g.t.VFqtkP), r);
        },
        [o, u] = N.useState({});
    N.useEffect(() => {
        for (let e of t) {
            let t = e.items[0]?.planId;
            null != t &&
                (u((t) => ({ ...t, [e.id]: hr.LOADING })),
                (0, mZ._R)(t)
                    .then(() => {
                        u((t) => ({ ...t, [e.id]: hr.DONE }));
                    })
                    .catch(() => {
                        u((t) => ({ ...t, [e.id]: hr.ERROR }));
                    }));
        }
    }, [t]);
    let { loadState: d } = (0, mq.E)(),
        c = d !== mq.mJ.LOADED;
    switch (l) {
        case hA.HOME:
            return (0, p.jsx)(p.Fragment, {
                children: t.map((e) =>
                    (0, p.jsx)(
                        hj,
                        {
                            subscription: e,
                            children: (0, p.jsx)(ha, {
                                subscription: e,
                                navigateToSwitchPlan: a,
                                loadingState: c ? hr.LOADING : (o[e.id] ?? hr.LOADING),
                            }),
                        },
                        e.id,
                    ),
                ),
            });
        case hA.SWITCH_APP_PLANS:
            let { route: m, ...h } = n;
            return (0, p.jsx)(hb, { ...h, navigateToHome: r });
        default:
            (0, t6.xb)(l);
    }
}
var hO = i(470464);
function hR(e) {
    let { onGoBack: t } = e,
        i = (0, O.yK)(
            [dn.A],
            () =>
                dn.A.getActiveApplicationSubscriptions()
                    ?.slice()
                    .sort(
                        (e, t) =>
                            (e.createdAt?.getTime() ?? e.currentPeriodStart.getTime()) -
                            (t.createdAt?.getTime() ?? t.currentPeriodStart.getTime()),
                    ) ?? [],
        ),
        [n, s] = N.useState();
    return (
        null == n && (n = (0, p.jsx)(hL, { onBack: t, title: g.intl.string(g.t["DB/m9a"]) })),
        (0, p.jsxs)("div", {
            children: [
                n,
                (0, p.jsx)("div", {
                    className: hO.A,
                    children: (0, p.jsx)(hy, {
                        subscriptions: i,
                        updateHeader: (e, t) => {
                            s(
                                (0, p.jsx)(hL, {
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
    return (0, p.jsxs)("div", {
        className: hO.D,
        children: [
            (0, p.jsx)(lT.K, {
                "aria-label": g.intl.string(g.t["13/7kX"]),
                icon: () => (0, p.jsx)(mK.Z, { size: "sm" }),
                onClick: t,
                variant: "icon-only",
            }),
            (0, p.jsx)(eh.D, { variant: "heading-lg/semibold", children: i }),
        ],
    });
}
var hD = i(881489),
    hP = i(366999),
    hG = i(466919),
    hU = i(441924);
function hM(e) {
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
        ? ((t = g.intl.string(hG.default["/S02sx"])), (i = g.intl.string(hG.default.OPJNST)))
        : n
          ? ((t = g.intl.string(g.t["hT6i/0"])),
            (i = null != a ? g.intl.format(g.t["0Vwb/l"], { activateDate: a }) : null))
          : ((t = g.intl.string(g.t["3G0CTC"])),
            (i = r === sN.xc.FP_SUB_PAUSED ? g.intl.format(g.t.MMvaIG, { resumeDate: l.toDate() }) : null));
    let u = ew()({ [hU.Hs]: n, [hU.mT]: !n }),
        d = ew()({ [hU.CQ]: n, [hU.ZM]: !n }),
        c = ew()({ [hU.EM]: !n });
    return (0, p.jsxs)("div", {
        className: hU.r6,
        children: [
            (0, p.jsxs)("div", {
                className: hU.Nv,
                children: [
                    (0, p.jsx)(eh.D, { variant: "heading-md/semibold", className: c, children: t }),
                    null !== i && (0, p.jsx)(V.E, { variant: "text-sm/normal", children: i }),
                ],
            }),
            !o &&
                (0, p.jsx)("div", {
                    className: hU.ZS,
                    children: (0, p.jsx)("div", {
                        className: u,
                        children: (0, p.jsx)(V.E, { variant: "text-sm/semibold", className: d, children: s }),
                    }),
                }),
        ],
    });
}
let hV = function (e) {
    let { fractionalPremiumInfo: t, className: i, activationDate: n, hasPremiumGroup: s } = e,
        l = (0, oD.kX)(t),
        r = l.length > 0,
        a = (0, hP.Ay)(t.endsAt, hP.yE.SHORT_TIME),
        o = r ? l : a;
    return (0, p.jsx)("div", {
        children: (0, p.jsxs)("div", {
            className: ew()(i, hU.f8),
            children: [
                (0, p.jsx)("div", {
                    className: hU.J_,
                    children: (0, p.jsxs)("div", {
                        className: hU.Bh,
                        children: [
                            (0, p.jsx)("div", {
                                className: hU.xt,
                                children: (0, p.jsx)(o_.t, { size: "md", color: "white", className: hU.T8 }),
                            }),
                            (0, p.jsx)("div", {
                                className: hU.pt,
                                children: (0, p.jsx)(eh.D, {
                                    variant: "heading-md/semibold",
                                    children: g.intl.string(g.t.DFMPWS),
                                }),
                            }),
                            (0, p.jsx)(V.E, {
                                className: hU.PJ,
                                variant: "text-md/semibold",
                                children: l.length > 0 ? l : g.intl.string(g.t["B66Z+f"]),
                            }),
                        ],
                    }),
                }),
                (0, p.jsx)(hM, {
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
        [o, u] = (0, O.yK)([d2.A], () => [d2.A.get(n), null != l ? d2.A.get(l.planId) : null]);
    if (null == o || oD.Ay.getInterval(n).intervalType !== sN.WT.MONTH) return null;
    let d = null != u ? u.skuId : null,
        c = o.skuId === d,
        m = oD.Ay.getDisplayName(n);
    if (a) t = g.intl.string(hG.default["5asczk"]);
    else if (c && null != l) {
        let e;
        e = new Date(l.status === q.Dmq.PAUSED && null != l.pauseEndsAt ? l.pauseEndsAt : l.currentPeriodEnd);
        let i = (0, oD._e)(e, r);
        t = g.intl.formatToPlainString(g.t["5CNRRA"], { date: i ?? 0 });
    } else t = g.intl.formatToPlainString(g.t.eNXZ5O, { planName: m });
    let h = i.hasFreePremium() || (null != l && l.isPurchasedExternally);
    return (0, p.jsxs)("div", {
        className: hU.Bh,
        children: [
            (0, p.jsx)("div", {
                className: ew()({
                    [hU.sr]: o.skuId === sN.pe.TIER_0,
                    [hU.lP]: o.skuId === sN.pe.TIER_1,
                    [hU.eb]: o.skuId === sN.pe.TIER_2,
                }),
                children: (0, p.jsx)(o_.t, { size: "md", color: "currentColor", className: hU.Kk }),
            }),
            (0, p.jsxs)("div", {
                className: hU.pt,
                children: [
                    (0, p.jsx)(eh.D, {
                        variant: "heading-md/semibold",
                        children: g.intl.format(g.t.LzobT9, { planName: m }),
                    }),
                    !h &&
                        (0, p.jsx)(eh.D, {
                            className: hU.gj,
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            children: t,
                        }),
                ],
            }),
            (0, p.jsx)(V.E, {
                className: hU.PJ,
                variant: "text-md/semibold",
                children: g.intl.format(g.t["ess/xl"], { count: s }),
            }),
        ],
    });
}
let hB = function (e) {
    let { className: t, entitlements: i } = e,
        n = eR()(Array.from(i))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: i, consumed: n } = e;
                return null != t && null != i && !n;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        s = (0, O.yK)([dX.A], () => dX.A.getUnactivatedFractionalPremiumUnits()),
        l = (0, O.bG)([dn.A], () => dn.A.getPremiumSubscription()),
        r = (0, O.bG)([dn.A], () => null == dn.A.getPremiumTypeSubscription()),
        a = Object.keys(n).some((e) => e === sN.gD.PREMIUM_MONTH_TIER_1),
        o = (0, O.bG)([t3.default], () => t3.default.getCurrentUser());
    if (null == o) return null;
    let u = o.isPremiumWithPremiumGroup();
    return (0, p.jsxs)("div", {
        children: [
            (0, p.jsx)("div", {
                className: ew()(t, hU.xF, hU.J_),
                children: Object.keys(n).map((e) =>
                    (0, p.jsx)(
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
                (0, p.jsxs)("div", {
                    children: [
                        (0, p.jsx)(V.E, {
                            className: hU.eT,
                            variant: "text-md/normal",
                            children: g.intl.string(g.t["VNr4+O"]),
                        }),
                        (0, p.jsx)(hk.i, {}),
                    ],
                }),
        ],
    });
};
var hF = i(50919);
function hz(e) {
    let t,
        { subscription: i, withOverheadSeparator: n } = e,
        { analyticsLocations: s } = (0, nG.Ay)(),
        [l] = (0, mI.Kq)({
            subscriptionId: i.id,
            renewal: !0,
            analyticsLocations: s,
            analyticsLocation: eM.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT,
        });
    if (null == l) return null;
    let r = n ? hF.r : hF.a,
        a = l.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, oD.xq)(t);
        });
    if (null == a) return null;
    let o = a.subscriptionPlanId,
        u = d2.A.get(o);
    ty()(null != u, "Missing plan");
    let d = (0, uw.$g)(l.total, l.currency);
    return (
        u.interval === sN.WT.YEAR
            ? (t = g.intl.format(g.t["jPz/39"], {
                  price: d,
                  termsUrl: q.X7G.TERMS,
                  paidURL: q.X7G.PAID_TERMS,
                  privacyUrl: q.X7G.PRIVACY,
              }))
            : u.interval === sN.WT.MONTH &&
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
function hY(e) {
    let { subscription: t, withOverheadSeparator: i } = e;
    return t.status === q.Dmq.CANCELED || t.isPurchasedExternally
        ? null
        : (0, p.jsx)(hz, { subscription: t, withOverheadSeparator: i });
}
var hX = i(536008),
    hH = i(558808);
let hK = { [nb.nR]: "role_subscriptions_panel", [nb.PZ]: "application_subscriptions_panel" };
function hW() {
    return (0, p.jsx)(er.Z, {
        className: hH.wb,
        type: er.Z.Types.CUSTOM,
        children: (0, p.jsxs)(lV.A, {
            align: lV.A.Align.CENTER,
            children: [
                (0, p.jsx)(e8.A, { game: null, size: e8.M.SMALL, className: hH.pV }),
                (0, p.jsx)("span", { className: hH.O, children: g.intl.string(g.t["jy/hyj"]) }),
            ],
        }),
    });
}
function hZ() {
    let e = (0, O.bG)([dX.A], () => dX.A.getForApplication(sN.tv));
    return (
        N.useEffect(() => {
            (0, dP.LM)(sN.tv);
        }, []),
        (0, p.jsx)(ia.n, {
            label: g.intl.string(g.t["2GKrvn"]),
            description: g.intl.string(g.t.kNEjGm),
            children:
                null != e && oD.Ay.hasAccountCredit(e)
                    ? (0, p.jsx)(hB, { className: hH.fX, entitlements: e })
                    : (0, p.jsx)(hW, {}),
        })
    );
}
function hq() {
    return (0, p.jsx)("hr", { className: hH.hr });
}
let hQ = function () {
        var e;
        let t = (0, O.bG)([dn.A], () => dn.A.getPremiumTypeSubscription()),
            i = (0, mc.A)({ subscriptionFilter: (e) => hX.Hy.has(e.status) }),
            n = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
            s = i.length > 1,
            l = (0, O.bG)(
                [di.A],
                () => (null != t && null != t.paymentSourceId ? di.A.getPaymentSource(t.paymentSourceId) : null),
                [t],
            ),
            r = (0, O.bG)([dn.A], () => dn.A.hasFetchedSubscriptions()),
            a = (0, O.bG)([uH.A], () => uH.A.isBusy),
            o = (0, cT.Y)(),
            d = mv.A.useField("subsection");
        N.useEffect(() => {
            (0, rA._)(null != d ? hK[d] : u.X.SUBSCRIPTIONS_PANEL);
        }, [d]);
        let c = (0, O.bG)([dn.A], () => dn.A.getActiveApplicationSubscriptions()?.length ?? 0),
            m = (0, O.bG)(
                [dn.A],
                () =>
                    Object.values(dn.A.getSubscriptions() ?? {})
                        .filter((e) => e.type === q.rzx.GUILD)
                        .filter((e) => e.status !== q.Dmq.ENDED).length,
            ),
            h = (0, cN.A)({ forceFetch: !0 }),
            A = (0, hD.ds)(),
            E = null !== t ? t.currentPeriodEnd : void 0,
            x =
                !(A && !(h.unactivatedUnits.length > 0)) &&
                (h.fractionalState !== sN.xc.NONE || h.unactivatedUnits.length > 0);
        return (N.useEffect(
            () => (
                n3.h.wait(() => {
                    (0, cx.zS)(), uM.hP(), (0, cE.CD)(), uM.$o();
                }),
                function () {
                    mv.A.resetState();
                }
            ),
            [],
        ),
        eC.A.enabled)
            ? (0, p.jsx)(uL.A, {})
            : r && o
              ? d === nb.nR
                  ? (0, p.jsx)(mz, { onGoBack: () => mv.A.setState({ subsection: null }) })
                  : d === nb.PZ
                    ? (0, p.jsx)(hR, { onGoBack: () => mv.A.setState({ subsection: null }) })
                    : (0, p.jsx)("div", {
                          className: hH.kL,
                          children: (0, p.jsxs)("div", {
                              className: hH.Qs,
                              children: [
                                  s ? (0, p.jsx)(hX.Sb, {}) : null,
                                  null != t
                                      ? (0, p.jsx)(hX.Ay, {
                                            subscription: t,
                                            paymentSource: l,
                                            busy: a,
                                            subscriptions: i,
                                        })
                                      : (0, p.jsx)(hX.TC, {}),
                                  x &&
                                      ((e = !!n?.isPremiumWithPremiumGroup()),
                                      (0, p.jsxs)("section", {
                                          children: [
                                              (0, p.jsx)(eh.D, {
                                                  variant: "heading-md/bold",
                                                  className: hH.HL,
                                                  children: g.intl.string(g.t.Obre8v),
                                              }),
                                              (0, p.jsx)(V.E, {
                                                  variant: "text-md/normal",
                                                  className: hH.JU,
                                                  children: g.intl.format(g.t["7Zi06b"], {
                                                      helpCenterLink: ta.A.getArticleURL(
                                                          q.MVz.FRACTIONAL_PREMIUM_ABOUT,
                                                      ),
                                                  }),
                                              }),
                                              (0, p.jsx)(hV, {
                                                  className: hH.fX,
                                                  fractionalPremiumInfo: h,
                                                  activationDate: E,
                                                  hasPremiumGroup: e,
                                              }),
                                          ],
                                      })),
                                  (0, p.jsx)(hZ, {}),
                                  m > 0 &&
                                      (0, p.jsxs)(p.Fragment, {
                                          children: [
                                              (0, p.jsx)(hq, {}),
                                              (0, p.jsx)(mh, {
                                                  count: m,
                                                  onClickManageSubscription: () => mv.A.setState({ subsection: nb.nR }),
                                              }),
                                          ],
                                      }),
                                  c > 0 &&
                                      (0, p.jsxs)(p.Fragment, {
                                          children: [
                                              (0, p.jsx)(hq, {}),
                                              (0, p.jsx)(mH, {
                                                  count: c,
                                                  onClickManageSubscription: () => {
                                                      mv.A.setState({ subsection: nb.PZ }),
                                                          Y.default.track(
                                                              q.HAw.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED,
                                                          );
                                                  },
                                              }),
                                          ],
                                      }),
                                  (0, p.jsx)(hq, {}),
                                  null != t ? (0, p.jsx)(hY, { subscription: t, withOverheadSeparator: !1 }) : null,
                              ],
                          }),
                      })
              : (0, p.jsx)("div", { className: ew()(hH.kL, hH.Lq), children: (0, p.jsx)(uP.y, {}) });
    },
    hJ = (0, o.E2)(u.X.SUBSCRIPTIONS_SETTINGS, {
        useSearchTerms: () => [g.intl.string(g.t.trSpHX), g.intl.string(g.t["2GKrvn"])],
        Component: () => (0, p.jsx)(hQ, {}),
    }),
    h$ = (0, o.zZ)(u.X.SUBSCRIPTIONS_CATEGORY, {
        useSearchTerms: () => [g.intl.string(g.t.trSpHX), g.intl.string(g.t["2GKrvn"])],
        buildLayout: () => [hJ],
    }),
    h0 = (0, o.t_)(u.X.SUBSCRIPTIONS_PANEL, { useTitle: () => g.intl.string(g.t.trSpHX), buildLayout: () => [h$] }),
    h1 = (0, o.i4)(u.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.trSpHX),
        icon: mu.L,
        usePersistentBadge: function () {
            return N.useMemo(
                () => ({
                    badgeType: ef.Xi.STRONGLY_DISCOURAGED_CUSTOM,
                    useCustomBadge: () =>
                        (0, md.l)() ? (0, p.jsx)(lv.E, { size: "xs", color: w.A.unsafe_rawColors.YELLOW_300 }) : null,
                }),
                [],
            );
        },
        buildLayout: () => [h0],
    }),
    h2 = (0, o.WI)(u.X.BILLING_SECTION, {
        useTitle: () => g.intl.string(g.t["4uOdGr"]),
        buildLayout: () => [ch, mo, h1, ca, df],
    });
var h3 = i(540999),
    h6 = i(306471),
    h4 = i(964355),
    h5 = i(172272);
let h8 = (0, o.zD)(u.X.AXE_AUDITING, {
        useTitle: () => "Enable Accessibility Auditing",
        useSubtitle: () =>
            "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development.",
        usePredicate: () => !1,
        useValue: () => (0, O.bG)([aD.default], () => aD.default.isAxeEnabled),
        setValue: (e) => (0, aL.x)({ axeEnabled: e }),
    }),
    h7 = (0, o.zD)(u.X.CSS_DEBUGGING, {
        useTitle: () => "Enable CSS Debugging",
        useSubtitle: () => "Display raw colors as pink. Toggling this will refresh the browser.",
        useValue: () => (0, O.bG)([aD.default], () => aD.default.cssDebuggingEnabled),
        setValue: (e) => {
            (0, aL.x)({ cssDebuggingEnabled: e }).then(() => {
                setTimeout(() => location.reload(), 500);
            });
        },
    });
var h9 = i(53705),
    Ae = i(354328);
let At = (0, o.zD)(u.X.HIGHLIGHT_MANA_COMPONENTS, {
        useTitle: () => "Highlight Mana Components",
        useSubtitle: () => "Highlights all Mana design system components for easier debugging.",
        useValue: () => (0, Ae.A)("highlight_mana_components"),
        setValue: (e) => {
            (0, h9.L)("highlight_mana_components", e);
        },
    }),
    Ai = (0, o.zD)(u.X.HIGHLIGHT_VOID_COMPONENTS, {
        useTitle: () => "Highlight Deprecated Void Components",
        useSubtitle: () =>
            "Highlights deprecated toggleable components: VoidCheckbox (green), VoidRadioGroup (yellow), VoidSwitch (blue).",
        useValue: () => (0, Ae.A)("highlight_void_toggleables"),
        setValue: (e) => {
            (0, h9.L)("highlight_void_toggleables", e);
        },
    }),
    An = (0, o.sN)(u.X.LAYOUT_DEBUGGING_HORIZONTAL_SPACING, {
        useTitle: () => "Horizontal Grid Spacing",
        useSubtitle: () =>
            "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
        usePredicate: () => (0, O.bG)([aD.default], () => aD.default.layoutDebuggingEnabled),
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
    As = (0, o.zD)(u.X.LAYOUT_DEBUGGING, {
        useTitle: () => "Enable Layout Debugging",
        useSubtitle: () => "Renders a grid on top of the app to help debug layout alignment issues.",
        useValue: () => (0, O.bG)([aD.default], () => aD.default.layoutDebuggingEnabled),
        setValue: (e) => {
            (0, aL.x)({ layoutDebuggingEnabled: e });
        },
    }),
    Al = (0, o.sN)(u.X.LAYOUT_DEBUGGING_VERTICAL_SPACING, {
        useTitle: () => "Vertical Grid Spacing",
        useSubtitle: () => "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
        usePredicate: () => (0, O.bG)([aD.default], () => aD.default.layoutDebuggingEnabled),
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
    Ar = (0, o.zZ)(u.X.DESIGN_TOOLS, {
        useTitle: () => "Design & A11y Tools",
        useSearchTerms: () => ["accessibility tools"],
        buildLayout: () => [h7, As, An, Al, At, Ai, h8],
    }),
    Aa = (0, o.zD)(u.X.AD_OVERRIDE, {
        useTitle: () => "Always Deliver Ads",
        useSubtitle: () => "Makes the user targetable for all active ads.",
        useValue: () => c.HZ.useSetting(),
        setValue: (e) => {
            c.HZ.updateSetting(e);
        },
    });
var Ao = i(173936),
    Au = i(260598),
    Ad = i(148810),
    Ac = i(380610),
    Ag = i(986238),
    Am = i(851645),
    Ah = i(274446);
let AA = ["discord_web", "discord_marketing", "discord_developers", "discord_ios", "discord_android"],
    AE = [
        { id: "branch", value: "branch", label: "Branch Name" },
        { id: "id", value: "id", label: "Commit SHA" },
    ];
function Ax(e) {
    return "discord_ios" in e || "discord_android" in e;
}
class AT extends N.Component {
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
        return (0, p.jsxs)(lV.A, {
            direction: lV.A.Direction.VERTICAL,
            className: ew()(Am.oS, i_.SX, Ah.N, Am.nM),
            children: [
                (0, p.jsx)(ih.A, {
                    className: ew()(Am.lL, { [Am.zi]: n }),
                    onClick: n ? void 0 : this.handleRemoveBuildOverride,
                }),
                (0, p.jsxs)(lV.A, {
                    className: i_.QB,
                    children: [
                        (0, p.jsx)(lV.A.Child, {
                            basis: "50%",
                            children: (0, p.jsx)(lx.l, {
                                selectionMode: "single",
                                label: "Override Type",
                                options: AE,
                                onSelectionChange: this.handleOverrideTypeChanged,
                                value: t,
                                disabled: n,
                            }),
                        }),
                        (0, p.jsx)(lV.A.Child, {
                            wrap: !0,
                            basis: "50%",
                            children: (0, p.jsx)(lP.k, {
                                label: "branch" === t ? "Branch Name" : "Commit SHA",
                                value: i,
                                onChange: this.handleOverrideIdChanged,
                                disabled: n,
                            }),
                        }),
                    ],
                }),
                (0, p.jsxs)(lV.A.Child, {
                    children: [
                        null != s &&
                            "" !== s &&
                            (0, p.jsx)(V.E, {
                                className: Am.AS,
                                color: "text-feedback-critical",
                                variant: "text-sm/normal",
                                children: s,
                            }),
                        (0, p.jsxs)(V.E, {
                            variant: "text-sm/normal",
                            className: Am.AS,
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
class AS extends N.Component {
    state = { loading: !0, buildOverrides: {}, loadedBuildOverrides: {}, errors: {}, saving: !1, didSave: !1 };
    async refreshBuildOverrides() {
        this.setState({ loading: !0 });
        let e = await (0, Ac.bD)();
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
        return eR().without(AA, ...t);
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
        let t = await (0, Ad.Zk)(e);
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
        (0, C.openModal)((t) => (0, p.jsx)(Ap, { ...t, buildOverrides: e }));
    };
    renderEmpty() {
        return (0, p.jsx)(ir.pp, {
            theme: iu.A.theme,
            className: ew()(i_.eT, i_.SX),
            children: (0, p.jsx)(ir.SG, { children: "You have no build overrides configured." }),
        });
    }
    renderItems() {
        let { buildOverrides: e, saving: t, errors: i } = this.state;
        return null == e
            ? null
            : eR().map(e, (e, n) =>
                  (0, p.jsx)(
                      AT,
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
            : (0, p.jsx)(eA.$, { variant: "secondary", text: "Reload App", onClick: () => location.reload() });
    }
    renderLinkButton() {
        let { buildOverrides: e } = this.state;
        return null == e || 0 === Object.keys(e).length
            ? null
            : (0, p.jsx)(e0.m, {
                  text: "Generate Public Link",
                  children: (0, p.jsx)(lT.K, {
                      variant: "secondary",
                      icon: Ao.q,
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
                (0, p.jsx)(eA.$, {
                    variant: "critical-primary",
                    text: "Discard Changes",
                    onClick: this.handleDiscardChanges,
                    disabled: e,
                }),
                (0, p.jsx)(eA.$, {
                    variant: "primary",
                    text: "Save Build Overrides",
                    disabled: Ax(t ?? {}),
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
            ? (0, p.jsx)(uP.y, { className: i_.QX })
            : null != n && 0 === Object.keys(n).length
              ? this.renderEmpty()
              : this.renderItems();
        let s = !i && !t && this.getAvailableProjects().length > 0,
            l =
                Ax(n ?? {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL
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
                    (0, p.jsxs)(ax.e, {
                        justify: "end",
                        children: [this.renderRefreshButton(), this.renderLinkButton(), this.renderSaveButton()],
                    }),
                ],
            }),
        });
    }
}
class Ap extends N.Component {
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
            t = await (0, Ad.SB)(e);
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
        return Ax(this.props.buildOverrides ?? {});
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
            d = Ag.fL.find((t) => t.value === e),
            c = s.map((e) => ({ id: e, label: e, value: e }));
        return (0, p.jsxs)(R.B, {
            gap: 20,
            children: [
                (0, p.jsx)(lx.l, {
                    selectionMode: "single",
                    label: "Expire After",
                    value: null != d ? d.value : void 0,
                    options: Ag.fL,
                    onSelectionChange: this.handleExpirationChange,
                }),
                this.isMobile()
                    ? null
                    : (0, p.jsx)(lx.l, {
                          selectionMode: "single",
                          label: "Release Channel",
                          value: t,
                          options: Ag.VP,
                          onSelectionChange: this.handleReleaseChannelChange,
                      }),
                this.isMobile()
                    ? (0, p.jsxs)(R.B, {
                          gap: 20,
                          children: [
                              (0, p.jsx)(lP.k, {
                                  label: "Add allowed app version (required)",
                                  autoFocus: !0,
                                  value: l,
                                  onKeyDown: this.handleAllowedVersionEnter,
                                  error: r,
                                  onChange: this.handleAllowedVersionEntry,
                                  placeholder: "Example: 34",
                                  trailing: { icon: cO.j, onClick: this.handleAddAllowedVersion, "aria-label": "Add" },
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
                    : (0, p.jsx)(Au.f, {
                          label: "Limit to User IDs (optional)",
                          helperText: "User IDs can be separated by whitespace or commas.",
                          value: i,
                          error: n,
                          onBlur: () => this.setUserEntryError(""),
                          onChange: this.handleUserIDEntry,
                      }),
                (0, p.jsx)(Au.f, {
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
        return (0, p.jsx)(lD.Modal, {
            title: "Generate Public Build Override Link",
            input: this.renderHelpMessage(),
            actionBarInput: (0, p.jsx)(dk.A, { value: i }),
            transitionState: t,
            "aria-label": "Generate Public Build Override Link",
            actions: [{ variant: "primary", text: "Generate Link", onClick: this.handleGenerateLink }],
            onClose: e,
            children: this.renderSettingsForm(),
        });
    }
}
let AN = (0, o.E2)(u.X.BUILD_OVERRIDES, { useSearchTerms: () => ["build overrides"], Component: AS });
var Af = i(256311),
    AC = i(883600);
let A_ = (0, o.E2)(u.X.CHANGE_LOG_OVERRIDE, {
    useSearchTerms: () => ["changelog override", "change log override"],
    Component: function () {
        let e = (0, O.bG)([AC.A], () => AC.A.overrideId()),
            t = async (e) => {
                let t = AC.A.getChangelog(e, "en-US");
                return null != t ? t : ((await Af.A.fetchChangelog(e, "en-US", !1, !0)) ?? null);
            };
        return (0, p.jsx)(Ak, {
            label: "Change Log Override",
            description: "Provide a change log ID to override the change log shown to this user.",
            placeholder: "Enter Change Log ID...",
            overrideId: e ?? null,
            setOverride: (e) => Af.A.setChangelogOverride(e),
            fetchOverride: t,
        });
    },
});
var AI = i(506774);
let Ab = new Date("2018-01-01"),
    Av = (0, o.Tf)(u.X.CHANGE_LOG_CLEAR, {
        useTitle: () => "Clear Change Log",
        useSubtitle: () => "Resets the change log state so that it will show again on the next startup.",
        useLabel: () => "Clear",
        useDisabled: () => c.pK.useSetting() === uF.default.fromTimestamp(Ab.getTime()),
        onClick: () => (AI.w.set("lastChangeLogDate", Ab), c.pK.updateSetting(uF.default.fromTimestamp(Ab.getTime()))),
    }),
    Aj = (0, o.zD)(u.X.DISABLE_APP_COLLECTIONS_CACHE, {
        useTitle: () => "Disable Application Collections Cache",
        useSubtitle: () => "Forces application collection updates to be shown immediately.",
        useDisabled: () => (0, O.bG)([aD.default], () => aD.default.onlyShowPreviewAppCollections),
        useValue: () =>
            (0, O.bG)(
                [aD.default],
                () => aD.default.disableAppCollectionsCache || aD.default.onlyShowPreviewAppCollections,
            ),
        setValue: (e) => (0, aL.x)({ disableAppCollectionsCache: e }),
    }),
    Ay = (0, o.zD)(u.X.FORCE_CANARY_API, {
        useTitle: () => "Force Canary API",
        useSubtitle: () => "Routes all API requests to Canary instances.",
        useValue: () => (0, O.bG)([aD.default], () => aD.default.isForcedCanary),
        setValue: (e) => {
            (0, aL.x)({ canary: e });
        },
    }),
    AO = (0, o.zD)(u.X.LOAD_SOURCE_MAPS, {
        useTitle: () => "Load Source Maps",
        useSubtitle: () => "Downloads source maps on this client. Only enable on devices you trust.",
        useValue: () => (0, O.bG)([aD.default], () => aD.default.sourceMapsEnabled),
        setValue: (e) => (0, aL.x)({ sourceMapsEnabled: e }),
    }),
    AR = (0, o.zD)(u.X.ONLY_SHOW_PREVIEW_APP_COLLECTIONS, {
        useTitle: () => "Only Show Preview App Collections",
        useSubtitle: () =>
            "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
        useValue: () => (0, O.bG)([aD.default], () => aD.default.onlyShowPreviewAppCollections),
        setValue: (e) => (0, aL.x)({ onlyShowPreviewAppCollections: e }),
    });
var AL = i(10094),
    AD = i(683760);
let AP = [
        { id: "none", label: "Non-Nitro", value: 0 },
        { id: "tier_0", label: "Nitro Basic", value: sN.PremiumTypes.TIER_0 },
        { id: "tier_1", label: "Nitro Classic", value: sN.PremiumTypes.TIER_1 },
        { id: "tier_2", label: "Nitro Standard", value: sN.PremiumTypes.TIER_2 },
    ],
    AG = (0, o.Hn)(u.X.PREMIUM_TYPE_OVERRIDE, {
        useTitle: () => "Premium Type Override",
        useSearchTerms: () => ["nitro override"],
        useSubtitle: () => "Overrides the client's local premium type.",
        useOptions: () => AP,
        clearable: !0,
        useValue: () =>
            (0, O.bG)([AD.A], () => {
                let e = AD.A.getPremiumTypeOverride();
                return null === e ? 0 : e;
            }),
        setValue: (e) => {
            0 === e
                ? (0, AL.O)(null, void 0)
                : null === e
                  ? (0, AL.O)(void 0, void 0)
                  : (0, AL.O)(0 === e ? null : e, void 0);
        },
    });
var AU = i(246605),
    AM = i(274184);
let AV = (0, o.E2)(u.X.SURVEY_OVERRIDE, {
    useSearchTerms: () => ["survey override"],
    Component: function () {
        let e = (0, O.bG)([AM.Ay], () => AM.Ay.getSurveyOverride());
        return (0, p.jsx)(Ak, {
            label: "Survey Override",
            description: "Provide a survey ID to override the survey shown to this user.",
            placeholder: "Enter Survey ID...",
            overrideId: e ?? null,
            setOverride: (e) => AU.xr(e),
            fetchOverride: (e) => AU.BC(e, !0) ?? null,
        });
    },
});
function Ak(e) {
    let { label: t, description: i, placeholder: n, overrideId: s, setOverride: l, fetchOverride: r } = e,
        [a, o] = N.useState(s ?? ""),
        u = N.useRef(null),
        [d, c] = N.useState(0),
        g = () => {
            null != u.current && (clearTimeout(u.current), (u.current = null));
        };
    return (
        N.useEffect(() => g, []),
        (0, p.jsx)(sy.D, {
            layout: "horizontal-responsive",
            label: t,
            description: i,
            children: (0, p.jsx)(lP.k, {
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
let Aw = (0, o.zZ)(u.X.DEV_OVERRIDES, {
        useTitle: () => "Overrides",
        buildLayout: () => [AG, AV, A_, Av, Ay, Aa, AR, Aj, AO, AN],
        useInlineNotice: () => ({
            type: ef.lT.INLINE_NOTICE,
            noticeType: "info",
            useText: () => g.intl.format(g.t.UeZJlg, { link: "https://i.dis.gd/dev-settings-changes" }),
        }),
    }),
    AB = (0, o.zD)(u.X.ANALYTICS_LOGS, {
        useTitle: () => "Enable Logging of Analytics Events",
        useSubtitle: () => "Logs all analytics events to the developer console.",
        useValue: () => (0, O.bG)([aD.default], () => aD.default.isLoggingAnalyticsEvents),
        setValue: (e) => (0, aL.x)({ logAnalyticsEvents: e }),
    }),
    AF = (0, o.zD)(u.X.GATEWAY_LOGS, {
        useTitle: () => "Log Gateway Events",
        useSubtitle: () => "Logs all gateway events to console, including content. Enable verbose logs to see them.",
        useValue: () => (0, O.bG)([aD.default], () => aD.default.isLoggingGatewayEvents),
        setValue: (e) => (0, aL.x)({ logGatewayEvents: e }),
    }),
    Az = (0, o.zD)(u.X.KEEP_POPOUTS_OPEN, {
        useTitle: () => "Keep Popouts Open",
        useSubtitle: () =>
            "When enabled, popouts will not close automatically, allowing their console contents to be inspected after a crash.",
        useValue: () => (0, O.bG)([aD.default], () => aD.default.preventPopoutClose),
        setValue: (e) => (0, aL.x)({ preventPopoutClose: e }),
    }),
    AY = (0, o.zD)(u.X.KEYBOARD_MISMATCHES, {
        useTitle: () => "Enable Logging of Keyboard Mismatches",
        useSubtitle: () => "Logs mismatches in detected keyboard codes to the console.",
        useValue: () => (0, O.bG)([aD.default], () => aD.default.logKeyboardMismatches),
        setValue: (e) => (0, aL.x)({ logKeyboardMismatches: e }),
    }),
    AX = (0, o.zD)(u.X.OVERLAY_RPC_LOGS, {
        useTitle: () => "Enable Logging of Overlay RPC Events & Commands",
        useSubtitle: () => "Logs all overlay related RPC events. Super noisy if an overlay is connected.",
        useValue: () => (0, O.bG)([aD.default], () => aD.default.isLoggingOverlayEvents),
        setValue: (e) => (0, aL.x)({ logOverlayEvents: e }),
    }),
    AH = (0, o.zD)(u.X.QUEST_LOGGING, {
        useTitle: () => "Enable Quests Debug Logging",
        useSubtitle: () => "Logs quest lifecycle events to the developer console.",
        useValue: () => (0, O.bG)([aD.default], () => aD.default.isLoggingQuestEvents),
        setValue: (e) => (0, aL.x)({ logQuestEvents: e }),
    }),
    AK = (0, o.zD)(u.X.REQUEST_TRACING, {
        useTitle: () => "Enable Tracing Requests",
        useSubtitle: () => "Force trace all client requests with APM.",
        useValue: () => (0, O.bG)([aD.default], () => aD.default.isTracingRequests),
        setValue: (e) => (0, aL.x)({ trace: e }),
    }),
    AW = (0, o.zZ)(u.X.LOGGING, { useTitle: () => "Logging", buildLayout: () => [AF, AX, AK, AB, AY, Az, AH] }),
    AZ = (0, o.t_)(u.X.DEVELOPER_OPTIONS_PANEL, {
        useTitle: () => "Developer Options",
        buildLayout: () => [Aw, AW, Ar],
    }),
    Aq = (0, o.i4)(u.X.DEVELOPER_OPTIONS_SIDEBAR_ITEM, {
        useTitle: () => "Developer Options",
        icon: h6.V,
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
                } = (0, O.cf)([aD.default, h3.A], () => ({
                    layoutDebuggingEnabled: aD.default.layoutDebuggingEnabled,
                    isDeveloper: h3.A.isDeveloper,
                    isLoggingGatewayEvents: aD.default.isLoggingGatewayEvents,
                    isLoggingOverlayEvents: aD.default.isLoggingOverlayEvents,
                    isLoggingAnalyticsEvents: aD.default.isLoggingAnalyticsEvents,
                    isTracingRequests: aD.default.isTracingRequests,
                    isForcedCanary: aD.default.isForcedCanary,
                    isSourceMapsEnabled: aD.default.sourceMapsEnabled,
                    isAxeEnabled: aD.default.isAxeEnabled,
                    preventPopoutClose: aD.default.preventPopoutClose,
                    onlyShowPreviewAppCollections: aD.default.onlyShowPreviewAppCollections,
                    disableAppCollectionsCache: aD.default.disableAppCollectionsCache,
                })),
                { horizontalSpacing: m, verticalSpacing: h } = (0, h5.Or)(),
                { setHorizontalSpacing: A, setVerticalSpacing: E } = h5.Or.getState(),
                x = c.HZ.useSetting();
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
                                          checked: x,
                                          action: () => {
                                              c.HZ.updateSetting(!x);
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
                                              (0, aL.x)({ canary: !r });
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
                                              (0, aL.x)({ onlyShowPreviewAppCollections: !d });
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
                                              (0, aL.x)({ disableAppCollectionsCache: !g });
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
                                              (0, aL.x)({ logGatewayEvents: !i });
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
                                              (0, aL.x)({ logOverlayEvents: !n });
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
                                              (0, aL.x)({ logAnalyticsEvents: !s });
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
                                              (0, aL.x)({ trace: !l });
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
                                              (0, aL.x)({ preventPopoutClose: !o });
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
                                              (0, aL.x)({ axeEnabled: !a });
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
                                              (0, aL.x)({ layoutDebuggingEnabled: !e });
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
                                                          (0, p.jsx)(h4.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: m,
                                                              minValue: 0,
                                                              maxValue: h5.YR,
                                                              onChange: (e) => A(e),
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
                                                          (0, p.jsx)(h4.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: h,
                                                              minValue: 0,
                                                              maxValue: h5.YR,
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
        buildLayout: () => [AZ],
    });
var AQ = i(127062),
    AJ = i(84654),
    A$ = i(80703),
    A0 = i(691540),
    A1 = i(857250),
    A2 = i(97483),
    A3 = i(100392),
    A6 = i(102609),
    A4 = i(271478),
    A5 = i(736056),
    A8 = i(386976),
    A7 = i(257433),
    A9 = i(32523),
    Ee = i(222735),
    Et = i(688151),
    Ei = i(491210);
function En(e) {
    let { experiment: t, experimentId: i, overrideInfo: n, defaultOpen: s } = e,
        [l, r] = N.useState(s),
        [a, o] = N.useState(!1),
        u = N.useCallback(() => {
            r((e) => !e);
        }, []),
        d = (0, O.bG)([d0.default], () => d0.default.getId()),
        c = (0, O.bG)([d0.default], () => {
            let e = d0.default.getInstallationForTracking();
            return null == e ? null : (0, A$.v)(e);
        }),
        g = "installation" === t.kind && null != c ? c : d,
        m = (0, A7.iN)(t, g),
        h = (0, A7.Fm)(t, g),
        A = (0, O.yK)([A5.A], () =>
            eR()
                .sortBy(A5.A.getRecentExposures(Et.Vh.USER, i), (e) => {
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
                (0, d4.C)((0, A3.yA)(i), () => {
                    (0, A0.P0)({
                        id: "experiment-link-copied",
                        message: "Copied experiment link",
                        type: A2.Ck.SUCCESS,
                    }),
                        e.preventDefault(),
                        e.stopPropagation();
                });
            },
            [i],
        ),
        x = (0, p.jsx)(eB.s, {
            "aria-label": "Toggle visibility",
            onClick: u,
            children: (0, p.jsxs)(V.E, {
                variant: "text-md/medium",
                className: Ei.DD,
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
                                    d4.p5 &&
                                        (0, p.jsx)(M.D, { onClick: E, children: (0, p.jsx)(Ao.q, { size: "xs" }) }),
                                ],
                            }),
                            (0, p.jsx)(V.E, { color: "text-muted", variant: "text-sm/normal", children: i }),
                        ],
                    }),
                    (0, p.jsx)("span", {
                        className: Ei.km,
                        children: "installation" === t.kind ? "Installation" : "User",
                    }),
                ],
            }),
        });
    if (!l) return (0, p.jsx)("div", { className: Ei.Os, children: x });
    let T = "";
    return (
        (T =
            t.system === A6.l5.LEGACY
                ? `Currently assigned to bucket ${m ?? Et.RE.NOT_ELIGIBLE}`
                : null != m
                  ? `Currently assigned to variant ${m}`
                  : "Currently unassigned"),
        (0, p.jsxs)("div", {
            className: Ei.Os,
            children: [
                x,
                (0, p.jsx)("div", {
                    children: (0, p.jsx)(A4.g, {
                        label: t.system === A6.l5.LEGACY ? "Bucket Override" : "Variant Override",
                        description: T,
                        experiment: t,
                        experimentId: i,
                        overrideInfo: n,
                    }),
                }),
                (0, p.jsx)("div", {
                    className: Ei.h_,
                    children:
                        null == h
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
                                  className: Ei.id,
                                  children: "Server Descriptor",
                              }),
                              (0, p.jsx)(V.E, {
                                  variant: "code",
                                  className: Ei.AS,
                                  children: null == h ? "None" : JSON.stringify(h, void 0, 2),
                              }),
                              (0, p.jsx)(V.E, {
                                  variant: "text-lg/medium",
                                  className: Ei.id,
                                  children: "Override Descriptor",
                              }),
                              (0, p.jsx)(V.E, {
                                  variant: "code",
                                  className: Ei.AS,
                                  children:
                                      n?.originalDescriptor == null
                                          ? "None"
                                          : JSON.stringify(n.originalDescriptor, void 0, 2),
                              }),
                              (0, p.jsx)(V.E, {
                                  variant: "text-lg/medium",
                                  className: Ei.id,
                                  children: "Recent Exposures",
                              }),
                              (0, p.jsx)(V.E, {
                                  variant: "code",
                                  className: Ei.AS,
                                  children: 0 === A.length ? "None" : A.join("\n"),
                              }),
                          ],
                      })
                    : (0, p.jsx)("div", {
                          className: Ei.id,
                          children: (0, p.jsx)(B.Q, {
                              variant: "secondary",
                              text: "More Details \xbb",
                              onClick: () => o(!0),
                          }),
                      }),
                (0, p.jsx)(eE.c, { className: Ei.yF }),
            ],
        })
    );
}
function Es(e) {
    let { experiment: t, experimentId: i, overrideInfo: n } = e,
        [s, l] = N.useState(null != n),
        [r, a] = N.useState(!1),
        o = N.useCallback(() => {
            l((e) => !e);
        }, []),
        u = (0, O.bG)([A5.A], () => A5.A.getLoadedGuildExperiment(i)),
        d = (0, O.yK)([A5.A], () =>
            eR()
                .sortBy(A5.A.getRecentExposures(Et.Vh.GUILD, i), (e) => {
                    let [t, i] = e;
                    return -i;
                })
                .map((e) => {
                    let [t, i] = e;
                    return `${new Date(i).toLocaleString()} (${t})`;
                }),
        ),
        [c, g] = (0, O.yK)([H.A, A5.A], () => {
            let e = eR().sortBy(H.A.getGuildsArray(), (e) => e.name.toLowerCase()),
                t = {},
                n = [];
            for (let s of e) {
                let e = A5.A.getGuildExperimentDescriptor(i, s.id),
                    l = e?.bucket ?? Et.RE.NOT_ELIGIBLE;
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
                className: Ei.DD,
                children: [
                    (0, p.jsxs)("div", {
                        children: [
                            (0, p.jsx)("span", { children: t.title }),
                            (0, p.jsx)(V.E, { color: "text-muted", variant: "text-sm/normal", children: i }),
                        ],
                    }),
                    (0, p.jsx)("span", { className: Ei.km, children: "Guild" }),
                ],
            }),
        });
    return s
        ? (0, p.jsxs)("div", {
              className: Ei.Os,
              children: [
                  m,
                  (0, p.jsx)(A4.g, {
                      label: "Bucket Override",
                      description: `Current Assignments: ${g}`,
                      experiment: t,
                      experimentId: i,
                      overrideInfo: n,
                  }),
                  (0, p.jsx)("div", {
                      className: Ei.h_,
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
                                    className: Ei.id,
                                    children: "Guild Assignments",
                                }),
                                (0, p.jsx)(V.E, { variant: "code", className: Ei.AS, children: c }),
                                (0, p.jsx)(V.E, {
                                    variant: "text-lg/medium",
                                    className: Ei.id,
                                    children: "Server Descriptor",
                                }),
                                (0, p.jsx)(V.E, {
                                    variant: "code",
                                    className: Ei.AS,
                                    children: null == u ? "None" : JSON.stringify(u, void 0, 2),
                                }),
                                (0, p.jsx)(V.E, {
                                    variant: "text-lg/medium",
                                    className: Ei.id,
                                    children: "Override Descriptor",
                                }),
                                (0, p.jsx)(V.E, {
                                    variant: "code",
                                    className: Ei.AS,
                                    children:
                                        n?.originalDescriptor == null
                                            ? "None"
                                            : JSON.stringify(n.originalDescriptor, void 0, 2),
                                }),
                                (0, p.jsx)(V.E, {
                                    variant: "text-lg/medium",
                                    className: Ei.id,
                                    children: "Recent Exposures",
                                }),
                                (0, p.jsx)(V.E, {
                                    variant: "code",
                                    className: Ei.AS,
                                    children: 0 === d.length ? "None" : d.join("\n"),
                                }),
                            ],
                        })
                      : (0, p.jsx)("div", {
                            className: Ei.id,
                            children: (0, p.jsx)(B.Q, {
                                variant: "secondary",
                                text: "More Details \xbb",
                                onClick: () => a(!0),
                            }),
                        }),
                  (0, p.jsx)(eE.c, { className: Ei.yF }),
              ],
          })
        : (0, p.jsx)("div", { className: Ei.Os, children: m });
}
let El = (0, o.E2)(u.X.EXPERIMENTS_SETTING, {
        Component: function () {
            let { experiments: e, overridesInfo: t } = (0, A8.op)(),
                { experiments: i, overridesInfo: n } = (0, A9.hI)(),
                s = N.useMemo(() => ({ ...i, ...e }), [i, e]),
                l = N.useMemo(() => ({ ...n, ...t }), [n, t]),
                r = (0, O.bG)([d0.default], () => {
                    let e = d0.default.getInstallationForTracking();
                    return null == e ? null : (0, A$.v)(e);
                }),
                [a, o] = N.useState(""),
                u = (0, Ee.oC)((0, Ee.R3)((0, Ee.Fm)(s), l), a);
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
                                d4.p5 &&
                                    (0, p.jsx)(B.Q, {
                                        size: "sm",
                                        onClick: () => {
                                            (0, d4.C)(r, () => {
                                                (0, A0.P0)((0, A1.o)("Installation ID copied!", A2.Ck.SUCCESS));
                                            });
                                        },
                                        text: "Copy",
                                    }),
                            ],
                        }),
                    (0, p.jsx)(D.I, { placeholder: "Search experiments", query: a, onChange: o, onClear: () => o("") }),
                    u.length > 0
                        ? u.map((e) => {
                              let t = "guild" === e.experiment.kind ? Es : En;
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
                              className: Ei.p$,
                              children: (0, p.jsx)(eh.D, {
                                  variant: "heading-md/semibold",
                                  children: "No Experiments Found",
                              }),
                          }),
                ],
            });
        },
        useSearchTerms: () => ["Experiments", "Bucket Override", "Variant Override"],
    }),
    Er = (0, o.zZ)(u.X.EXPERIMENTS_CATEGORY, { buildLayout: () => [El] }),
    Ea = (0, o.t_)(u.X.EXPERIMENTS_PANEL, { useTitle: () => "Experiments", buildLayout: () => [Er] }),
    Eo = (0, o.i4)(u.X.EXPERIMENTS_SIDEBAR_ITEM, {
        useTitle: () => "Experiments",
        icon: AQ.c,
        useMenu: AJ.A,
        buildLayout: () => [Ea],
    }),
    Eu = (0, o.WI)(u.X.DEVELOPER_SECTION, {
        useTitle: () => g.intl.string(g.t.CbItOL),
        usePredicate: () => h3.A.isDeveloper,
        buildLayout: () => [Eo, Aq],
    });
var Ed = i(631670),
    Ec = i(252452),
    Eg = i(47360),
    Em = i(836602),
    Eh = i(591179),
    EA = i(854627),
    EE = i(975732),
    Ex = i(761508),
    ET = i(83257),
    ES = i(159001),
    Ep = i(344346),
    EN = i(919395),
    Ef = i(233641);
function EC(e) {
    let { title: t, children: i } = e;
    return (0, p.jsxs)("div", {
        children: [(0, p.jsx)(eh.D, { variant: "text-md/medium", className: Ef.Vf, children: t }), i],
    });
}
function E_(e) {
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
        className: ew()(Ef.UA, i),
        children: (0, p.jsxs)("div", {
            className: ew()(Ef.yt, n),
            children: [
                (0, p.jsx)("div", {
                    className: ew()(Ef.Fp, a && Ef.Oz),
                    children: (0, p.jsxs)(p.Fragment, {
                        children: [
                            (0, p.jsx)(EC, { title: l ?? g.intl.string(g.t.Zb06yP), children: s }),
                            null != r ? (0, p.jsx)(EC, { title: g.intl.string(g.t.x5CoXR), children: r }) : null,
                        ],
                    }),
                }),
                (0, p.jsx)("div", { className: Ef.oB, children: t }),
            ],
        }),
    });
}
var EI = i(986687),
    Eb = i(101058),
    Ev = i(841595),
    Ej = i(696451),
    Ey = i(10478);
function EO() {
    return (0, p.jsxs)("div", {
        className: Ey.p$,
        children: [
            (0, p.jsx)("img", { src: "/assets/b3b15f93f9f43174.svg", alt: "", className: Ey.Sl }),
            (0, p.jsx)(eh.D, {
                className: Ey.h8,
                variant: "heading-lg/extrabold",
                children: g.intl.string(g.t.Z1OZCV),
            }),
            (0, p.jsx)(V.E, { className: Ey.h8, variant: "text-md/normal", children: g.intl.string(g.t.ZSt4Tt) }),
            (0, p.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: Ey.h8,
                children: (0, p.jsx)(eA.$, {
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
var ER = i(81400),
    EL = i(757036),
    ED = i(252732),
    EP = i(355622),
    EG = i(408018),
    EU = i(201349),
    EM = i(158983);
let EV = (0, sS.Ld)(),
    Ek = (0, t0.createChannelRecord)({ id: "1", type: q.rbe.DM }),
    Ew = (0, sS.Ld)();
function EB(e) {
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
        [d, c] = N.useState((0, EG.x7)(o)),
        m = N.useRef(r),
        h = N.useRef(!1);
    return (
        N.useEffect(() => {
            if (m.current !== r) {
                let e = (0, EG.x7)(r);
                u(r), c(e);
            }
            m.current = r;
        }, [r]),
        N.useEffect(() => {
            void 0 !== s || o === r || h.current || (u(r), c((0, EG.x7)(r)));
        }, [s, r, o]),
        (0, p.jsxs)(ov.A, {
            title: t,
            titleId: EV,
            description: g.intl.string(g.t.Bbw6Ac),
            errors: i,
            disabled: a,
            children: [
                (0, p.jsx)(EU.Ay, {
                    "aria-describedby": Ew,
                    "aria-labelledby": EV,
                    className: EM.i,
                    innerClassName: EM.Z,
                    maxCharacterCount: q.NA2,
                    onChange: function (e, t, i) {
                        t !== o && (u(t), c(i), n(t));
                    },
                    placeholder: l,
                    channel: Ek,
                    textValue: o,
                    richValue: d,
                    emojiPickerCloseOnModalOuterClick: !0,
                    parentModalKey: ej.USER_SETTINGS_MODAL_KEY,
                    type: EP.oU.PROFILE_BIO_INPUT,
                    onBlur: () => {
                        h.current = !1;
                    },
                    onFocus: () => {
                        h.current = !0;
                    },
                    focused: h.current,
                    onSubmit: function () {
                        return new Promise((e) => {
                            e({ shouldClear: !1, shouldRefocus: !0 });
                        });
                    },
                }),
                (0, p.jsx)(F.A, { id: Ew, children: g.intl.format(g.t["+DFxLc"], { maxLength: q.NA2 }) }),
            ],
        })
    );
}
var EF = i(930861),
    Ez = i(821956),
    EY = i(562819),
    EX = i(84540),
    EH = i(408919);
function EK(e) {
    let { user: t, guild: i, className: n, sectionTitle: s, forcedDivider: l = !1, withTutorial: r = !1 } = e,
        { analyticsLocations: a } = (0, nG.Ay)(),
        o = (0, EN.a4)({ user: t, guildId: i?.id }),
        { pendingAvatarDecoration: u, errors: d } = (0, EN.CP)(i?.id),
        c = r ? EF.wL : aA.$n;
    return (0, p.jsx)(ov.A, {
        className: n,
        forcedDivider: l,
        hasBackground: !0,
        title: s,
        errors: d,
        children: (0, p.jsxs)("div", {
            className: EH.NC,
            children: [
                (0, p.jsx)(c, {
                    size: aA.$n.Sizes.SMALL,
                    onClick: () => {
                        (0, EY.L)({ analyticsLocations: a, guild: i });
                    },
                    className: ew()({ [EH.yj]: r }),
                    children: g.intl.string(g.t.BVcYCx),
                }),
                (void 0 === u ? null != o : null != u) &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: EH.DT,
                        children: (0, p.jsx)(eA.$, {
                            variant: "secondary",
                            size: "sm",
                            text: (0, Ez.uZ)(t, i) ? g.intl.string(g.t.CHf9iJ) : g.intl.string(g.t.OrokWm),
                            onClick: () => {
                                (0, EX.p)({ guildId: i?.id, avatarDecoration: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var EW = i(339984),
    EZ = i(114077);
let Eq = [{ name: "gif", extensions: ["gif"] }];
function EQ(e) {
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
        h = c ? EF.wL : aA.$n,
        A = N.useCallback(() => {
            (0, ED.XD)({
                uploadType: EW.HL.AVATAR,
                analyticsSource: m,
                filters: u ? Eq : void 0,
                guildId: r,
                isTryItOut: u,
            });
        }, [r, m, u]);
    return (0, p.jsx)(ov.A, {
        className: a,
        title: s,
        errors: i,
        disabled: o,
        forcedDivider: d,
        children: (0, p.jsxs)("div", {
            className: EZ.NC,
            children: [
                (0, p.jsx)(h, {
                    className: ew()({ [EZ.yj]: c }),
                    size: aA.$n.Sizes.SMALL,
                    onClick: A,
                    children: l ?? g.intl.string(g.t["4OynCD"]),
                }),
                t &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: EZ.DT,
                        children: (0, p.jsx)(eA.$, {
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
var EJ = i(152103);
function E$(e) {
    let { user: t, guildId: i, className: n } = e,
        s = oD.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: l } = (0, nG.Ay)(),
        {
            userDisplayNameStyles: r,
            guildDisplayNameStyles: a,
            pendingDisplayNameStyles: o,
            pendingErrors: u,
        } = (0, EN.B0)(t, i),
        d = (0, N.useCallback)(() => {
            Y.default.track(q.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS), (0, nU.L)({ analyticsLocations: l, guildId: i });
        }, [l, i]),
        c = (0, N.useCallback)(() => {
            (0, EX.p)({ displayNameStyles: null }), Y.default.track(q.HAw.DISPLAY_NAME_STYLES_REMOVED);
        }, []),
        m = (0, N.useCallback)(() => {
            (0, EX.p)({ guildId: i, displayNameStyles: null });
        }, [i]),
        h = void 0 !== o || (null != i ? null != a : null != r);
    return (0, p.jsx)(ov.A, {
        title: g.intl.string(nM.default["86GtGH"]),
        className: n,
        showPremiumIcon: s,
        errors: u,
        children: (0, p.jsxs)("div", {
            className: EJ.N,
            children: [
                (0, p.jsx)(eA.$, {
                    variant: "primary",
                    size: "sm",
                    text: g.intl.string(nM.default.vJqrIg),
                    onClick: d,
                }),
                null == i &&
                    h &&
                    (0, p.jsx)(eA.$, {
                        variant: "secondary",
                        size: "sm",
                        text: g.intl.string(nM.default.ymq8WQ),
                        onClick: c,
                    }),
                null != i &&
                    null != (void 0 !== o ? o : a) &&
                    (0, p.jsx)(eA.$, {
                        variant: "secondary",
                        size: "sm",
                        text: g.intl.string(nM.default["j/KRxc"]),
                        onClick: m,
                    }),
            ],
        }),
    });
}
var E0 = i(637193),
    E1 = i(727369);
function E2(e) {
    let { user: t, guild: i, titleIcon: n } = e,
        { analyticsLocations: s } = (0, nG.Ay)(),
        l = null != i,
        { userNameplate: r, guildNameplate: a, pendingNameplate: o, pendingErrors: u } = (0, EN.rv)(t, i?.id),
        d = N.useCallback(() => {
            (0, E0.p)({ analyticsLocations: s, guildId: i?.id });
        }, [s, i?.id]),
        c = N.useCallback(() => {
            (0, EX.p)({ guildId: i?.id, nameplate: null });
        }, [i?.id]);
    return (0, p.jsx)(ov.A, {
        title: g.intl.string(g.t.x5CoXR),
        titleIcon: n,
        errors: u,
        children: (0, p.jsxs)("div", {
            className: E1.u,
            children: [
                (0, p.jsx)(eA.$, { variant: "primary", size: "sm", text: g.intl.string(g.t.BwdeM1), onClick: d }),
                (void 0 === o ? (l ? a : r) != null : null != o) &&
                    (0, p.jsx)(eA.$, {
                        variant: "secondary",
                        size: "sm",
                        text: l ? g.intl.string(g.t.CHf9iJ) : g.intl.string(g.t["9zwziY"]),
                        onClick: c,
                    }),
            ],
        }),
    });
}
var E3 = i(33023);
function E6(e) {
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
        m = d ? EF.wL : aA.$n;
    return (0, p.jsx)(ov.A, {
        className: l,
        title: g.intl.string(g.t.Vgdusv),
        showPremiumIcon: a,
        errors: i,
        disabled: r,
        forcedDivider: u,
        children: (0, p.jsxs)("div", {
            className: E3.NC,
            children: [
                (0, p.jsx)(m, {
                    className: ew()({ [E3.yj]: d }),
                    size: aA.$n.Sizes.SMALL,
                    onClick: () =>
                        (0, ED.XD)({ uploadType: EW.HL.BANNER, analyticsSource: c, guildId: s, isTryItOut: o }),
                    children: g.intl.string(g.t.N0bC3P),
                }),
                t &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: E3.DT,
                        children: (0, p.jsx)(eA.$, {
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
var E4 = i(617061),
    E5 = i(872246);
function E8(e) {
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
        d = oD.Ay.canUsePremiumProfileCustomization(t),
        c = (0, EN.N2)({ user: t, guildId: i?.id }),
        { pendingProfileEffect: m, errors: h } = (0, EN.nZ)(i?.id);
    N.useEffect(() => {
        d &&
            Y.default.track(q.HAw.PREMIUM_UPSELL_VIEWED, {
                type: sN.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: u,
            });
    }, [d, u]);
    let A = a ? EF.wL : aA.$n;
    return (0, p.jsx)(ov.A, {
        forcedDivider: r,
        borderType: dY.i.PREMIUM,
        hasBackground: !0,
        title: l,
        showBorder: o,
        errors: h,
        className: s,
        children: (0, p.jsxs)("div", {
            className: E5.NC,
            children: [
                (0, p.jsx)(A, {
                    size: aA.$n.Sizes.SMALL,
                    onClick: () => {
                        (0, E4.W)({ analyticsLocations: u, guild: i, initialSelectedEffect: n });
                    },
                    className: ew()({ [E5.yj]: a }),
                    children: g.intl.string(g.t["/dRfCf"]),
                }),
                (void 0 === m ? null != c : null != m) &&
                    (0, p.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: E5.DT,
                        children: (0, p.jsx)(eA.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != i ? g.intl.string(g.t.CHf9iJ) : g.intl.string(g.t.uMuafO),
                            onClick: () => {
                                (0, EX.p)({ guildId: i?.id, profileEffect: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var E7 = i(13875),
    E9 = i(515727),
    xe = i(238780);
function xt(e) {
    let { user: t, guild: i, sectionTitle: n } = e,
        { analyticsLocations: s } = (0, nG.Ay)(),
        l = (0, E7.sk)("ProfileFrameSection"),
        r = (0, EN.Xf)({ user: t, guildId: i?.id }),
        { pendingProfileFrame: a, errors: o } = (0, EN.Tu)(i?.id),
        [u, d] = (0, eT.kn)([ex.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE]),
        c = u === ex.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE;
    return l
        ? (0, p.jsx)(ov.A, {
              showBorder: c,
              borderType: c ? dY.i.NEW_UPSELL : dY.i.PREMIUM,
              hasBackground: c,
              title: n,
              titleBadge: c ? (0, p.jsx)(n8.Lp, { text: g.intl.string(g.t.y2b7CA), className: xe.Ad }) : void 0,
              description: c ? g.intl.string(g.t.yMoMAt) : void 0,
              errors: o,
              children: (0, p.jsxs)("div", {
                  className: xe.NC,
                  children: [
                      (0, p.jsx)(eA.$, {
                          variant: "primary",
                          size: "sm",
                          text: g.intl.string(g.t["9/hmle"]),
                          onClick: () => {
                              (0, E9.w)({ analyticsLocations: s, guild: i }), d(t7.i.TAKE_ACTION);
                          },
                      }),
                      (void 0 === a ? null != r : null != a) &&
                          (0, p.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: xe.DT,
                              children: (0, p.jsx)(eA.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: null != i ? g.intl.string(g.t.CHf9iJ) : g.intl.string(g.t.nQBruk),
                                  onClick: () => {
                                      (0, EX.p)({ guildId: i?.id, profileFrame: null });
                                  },
                              }),
                          }),
                  ],
              }),
          })
        : null;
}
var xi = i(33851),
    xn = i.n(xi),
    xs = i(602853),
    xl = i(654107),
    xr = i(999291),
    xa = i(101928),
    xo = i(835245),
    xu = i(317097),
    xd = i(508274),
    xc = i(919796),
    xg = i(773431);
function xm(e) {
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
        c = (0, xs.r)(w.A.colors.BACKGROUND_BASE_LOW).hex(),
        m = w.A.colors.BACKGROUND_MOD_MUTED.css,
        h = (0, ED.sN)(n),
        A = (0, xu.Hl)(n),
        E = A === c ? m : A,
        x = h ? w.A.unsafe_rawColors.WHITE.css : w.A.unsafe_rawColors.PRIMARY_530.css,
        T = (0, xc.A)(a),
        S = (0, xc.A)(o),
        [f, C] = N.useState((0, xo.A)());
    return (
        N.useEffect(() => {
            (T !== a || S !== o) && C((0, xo.A)());
        }, [o, a, S, T]),
        (0, p.jsx)(P.Y, {
            targetElementRef: d,
            positionKey: f,
            renderPopout: (e) =>
                (0, p.jsx)(xd.VN, {
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
                    className: ew()(xg.oP, { [xg.r9]: l }),
                    children: [
                        (0, p.jsx)(M.D, {
                            ...i,
                            tabIndex: l ? -1 : 0,
                            onClick: l ? q.tEg : t,
                            style: { backgroundColor: A, borderColor: E },
                            className: xg.nf,
                            "aria-label": g.intl.string(g.t.Qp04hK),
                            focusProps: { ringTarget: d },
                            children: (0, p.jsx)(oL.R, {
                                size: "custom",
                                className: xg.BW,
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
var xh = i(362656);
function xA(e) {
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
        c = (0, xr.Ay)(t.id, r),
        { primaryColor: m, secondaryColor: h } = (0, xa.A)({
            user: t,
            displayProfile: c,
            pendingThemeColors: n,
            isPreview: !0,
        }),
        A = oD.Ay.canUsePremiumProfileCustomization(t),
        E = null != i ? i : t.getAvatarURL(r, 80),
        x = (0, xs.r)(w.A.unsafe_rawColors.PRIMARY_530).hex(),
        T = (0, xl.rh)(E, x, !1);
    if (null == m || null == h) return null;
    let S = (e) => {
        s(xn()(e, c?.themeColors) ? void 0 : e);
    };
    return (0, p.jsx)(ov.A, {
        title: g.intl.string(g.t.DMeO2X),
        disabled: !A && !l,
        className: ew()(xh.__invalid_profileThemesSection, a),
        showPremiumIcon: o,
        forcedDivider: d,
        children: (0, p.jsxs)("div", {
            className: xh.hd,
            children: [
                (0, p.jsx)("div", {
                    className: xh.YX,
                    children: (0, p.jsx)(xm, {
                        onChange: (e) => S([e, h]),
                        color: m,
                        suggestedColors: T,
                        showEyeDropper: !0,
                        label: (0, p.jsx)(V.E, {
                            className: xh.yz,
                            color: "text-default",
                            variant: "text-xs/normal",
                            "aria-hidden": !0,
                            children: g.intl.string(g.t.C3KTQk),
                        }),
                    }),
                }),
                (0, p.jsx)("div", {
                    className: xh.YX,
                    children: (0, p.jsx)(xm, {
                        onChange: (e) => S([m, e]),
                        color: h,
                        suggestedColors: T,
                        showEyeDropper: !0,
                        label: (0, p.jsx)(V.E, {
                            className: xh.yz,
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
                        className: xh.WA,
                        children: (0, p.jsx)(eA.$, {
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
function xE(e) {
    let {
        sectionTitle: t,
        errors: i,
        onPronounsChange: n,
        pendingPronouns: s,
        placeholder: l,
        currentPronouns: r,
        disabled: a = !1,
    } = e;
    return (0, p.jsx)(ov.A, {
        title: t,
        errors: i,
        disabled: a,
        children: (0, p.jsx)(lP.k, {
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
var xx = i(427262),
    xT = i(576705),
    xS = i(376294);
function xp(e) {
    let { errors: t, pendingNick: i, currentNick: n, username: s, user: l, guild: r } = e,
        a = (0, O.bG)([xT.A], () => xT.A.can(q.xBc.CHANGE_NICKNAME, r) || xT.A.can(q.xBc.MANAGE_NICKNAMES, r)),
        o = (0, EL.L)(sN.PremiumTypes.TIER_2);
    return (0, p.jsxs)(ov.A, {
        title: g.intl.string(g.t.me1lRk),
        errors: t,
        children: [
            (0, p.jsx)(lP.k, {
                value: i ?? n ?? "",
                placeholder: s,
                maxLength: q.d0r,
                onChange: function (e) {
                    (0, EX.p)({ guildId: r.id, nickname: e });
                },
                disabled: !a,
                helperText: a ? void 0 : g.intl.string(g.t.gzjxQi),
            }),
            o && (0, p.jsx)(E$, { user: l, guildId: r.id, className: xS.F }),
        ],
    });
}
var xN = i(574173);
let xf = "/assets/b25da78aa7949feb.png";
function xC(e) {
    let { user: t, showOverlay: i, children: n } = e,
        s = (0, dG.Ay)(),
        { analyticsLocations: l } = (0, nG.Ay)(eM.A.PREMIUM_UPSELL_OVERLAY);
    return (N.useEffect(() => {
        i &&
            Y.default.track(q.HAw.PREMIUM_UPSELL_VIEWED, {
                location_stack: l,
                type: sN.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE,
            });
    }, [i, l]),
    i)
        ? (0, p.jsxs)("div", {
              className: xN.ry,
              children: [
                  (0, p.jsx)("div", { children: n }),
                  (0, p.jsxs)("div", {
                      className: xN.Wc,
                      children: [
                          (0, p.jsx)("img", {
                              className: xN.Tn,
                              alt: g.intl.string(g.t.LHFZQy),
                              src: (function (e) {
                                  switch (e) {
                                      case q.NJ8.DARK:
                                      case q.NJ8.DARKER:
                                      case q.NJ8.MIDNIGHT:
                                          return xf;
                                      case q.NJ8.LIGHT:
                                          return "/assets/a98f1410707fafea.png";
                                      default:
                                          return xf;
                                  }
                              })(s),
                          }),
                          (0, p.jsxs)("div", {
                              className: xN._9,
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
                          (0, p.jsx)(dz.A, {
                              size: aA.$n.Sizes.LARGE,
                              color: aA.$n.Colors.GREEN,
                              textOptions: {
                                  textOverride: oD.Ay.isPremium(t)
                                      ? g.intl.string(g.t.AfRWI8)
                                      : g.intl.string(g.t.nkdUym),
                              },
                              subscriptionTier: sN.pe.TIER_2,
                          }),
                      ],
                  }),
              ],
          })
        : n;
}
var x_ = i(887267);
function xI() {
    var e;
    let t = (0, O.bG)([t3.default], () => {
            let e = t3.default.getCurrentUser();
            return ty()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        i = (0, EL.L)(sN.PremiumTypes.TIER_2),
        n = (0, O.bG)([Em.A, H.A], () => H.A.getGuild(Em.A.selectedGuildId));
    ty()(null != n, "guild should not be null");
    let {
            pendingAvatar: s,
            pendingNickname: l,
            pendingBanner: r,
            pendingBio: a,
            pendingPronouns: o,
            pendingThemeColors: u,
            errors: d,
        } = (0, O.cf)([Em.A], () => ({ ...Em.A.getPendingChanges(n.id), errors: Em.A.getErrors(n.id) })),
        c = (0, Eb.V7)({ userId: t.id, image: s }),
        m = (0, ER.EC)(n.id),
        h = (0, O.bG)([Ej.Ay], () => (null == n.id ? null : Ej.Ay.getMember(n.id, t.id))),
        A = (0, O.bG)([Ev.A], () => Ev.A.getGuildMemberProfile(t.id, n.id)),
        E = oD.Ay.canUsePremiumProfileCustomization(t),
        x = (0, EN.z5)(s, h?.avatar),
        T = (0, EN.Ac)(r, A?.banner),
        S = ((e = A?.themeColors), void 0 === u ? null != e : u?.[0] != null && u?.[1] != null),
        N = A?.bio ?? "",
        f = A?.pronouns ?? "";
    return (0, p.jsxs)("div", {
        className: x_.Q,
        children: [
            (0, p.jsx)(
                xp,
                {
                    errors: d?.nick ?? m?.nick,
                    username: xx.Ay.getName(t),
                    pendingNick: l,
                    currentNick: h?.nick,
                    user: t,
                    guild: n,
                },
                "nick",
            ),
            (0, p.jsx)(
                xE,
                {
                    sectionTitle: g.intl.string(g.t["+T3RI/"]),
                    errors: d?.pronouns,
                    onPronounsChange: (e) => (0, EX.p)({ guildId: n.id, pronouns: e }),
                    pendingPronouns: o,
                    currentPronouns: f,
                },
                "pronouns",
            ),
            (0, p.jsxs)(xC, {
                user: t,
                showOverlay: !E,
                children: [
                    (0, p.jsx)(
                        EQ,
                        {
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [
                                    g.intl.string(g.t.lqaIxI),
                                    (0, p.jsx)(e0.m, {
                                        text: g.intl.string(g.t["5AFxuK"]),
                                        children: (0, p.jsx)(o_.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: x_.a,
                                        }),
                                    }),
                                ],
                            }),
                            showRemoveAvatarButton: x,
                            onAvatarChange: (e) =>
                                (0, ED.rM)(e, h?.avatar, (e) => (0, EX.p)({ guildId: n.id, avatar: e })),
                            errors: d?.avatar,
                            guildId: n.id,
                            disabled: !E,
                        },
                        "avatar",
                    ),
                    (0, p.jsx)(
                        EK,
                        {
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [
                                    g.intl.string(g.t["7v0T9P"]),
                                    (0, p.jsx)(e0.m, {
                                        text: g.intl.string(g.t["5AFxuK"]),
                                        children: (0, p.jsx)(o_.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: x_.a,
                                        }),
                                    }),
                                ],
                            }),
                            user: t,
                            guild: n,
                        },
                        "decoration",
                    ),
                    !i && (0, p.jsx)(E$, { user: t, guildId: n.id }),
                    (0, p.jsx)(
                        E2,
                        {
                            user: t,
                            guild: n,
                            titleIcon: (0, p.jsx)(e0.m, {
                                text: g.intl.string(g.t["5AFxuK"]),
                                children: (0, p.jsx)(o_.t, { size: "md", color: "currentColor", className: x_.a }),
                            }),
                        },
                        "nameplate",
                    ),
                    (0, p.jsx)(
                        E8,
                        {
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [
                                    g.intl.string(g.t.wR5wOo),
                                    (0, p.jsx)(e0.m, {
                                        text: g.intl.string(g.t["5AFxuK"]),
                                        children: (0, p.jsx)(o_.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: x_.a,
                                        }),
                                    }),
                                ],
                            }),
                            user: t,
                            guild: n,
                        },
                        "effect",
                    ),
                    (0, p.jsx)(xt, { user: t, guild: n, sectionTitle: g.intl.string(g.t.GWrZOd) }, "frame"),
                    (0, p.jsx)(
                        E6,
                        {
                            showRemoveBannerButton: T,
                            errors: d?.banner,
                            onBannerChange: (e) =>
                                (0, ED.rM)(e, A?.banner, (e) => (0, EX.p)({ guildId: n.id, banner: e })),
                            guildId: n.id,
                            disabled: !E,
                        },
                        "banner",
                    ),
                    (0, p.jsx)(xA, {
                        user: t,
                        pendingAvatarSrc: c,
                        pendingColors: u,
                        onThemeColorsChange: (e) => (0, EX.p)({ guildId: n.id, themeColors: e }),
                        guildId: n.id,
                        showResetThemeButton: S,
                    }),
                    (0, p.jsx)(
                        EB,
                        {
                            placeholder: g.intl.string(g.t["/7NKgv"]),
                            sectionTitle: (0, p.jsxs)(p.Fragment, {
                                children: [
                                    g.intl.string(g.t.ZzAR2Y),
                                    (0, p.jsx)(e0.m, {
                                        text: g.intl.string(g.t["5AFxuK"]),
                                        children: (0, p.jsx)(o_.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: x_.a,
                                        }),
                                    }),
                                ],
                            }),
                            onBioChange: (e) => (0, EX.p)({ guildId: n.id, bio: e }),
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
var xb = i(405318);
function xv(e) {
    (0, C.openModalLazy)(async () => {
        let { default: t } = await Promise.all([i.e("2125"), i.e("66901"), i.e("61129")]).then(i.bind(i, 475312));
        return (i) => (0, p.jsx)(t, { source: { ...e, page: q.liQ.GUILD_MEMBER_PROFILE_SETTINGS }, ...i });
    });
}
function xj(e) {
    let { selectedGuild: t, onGuildChange: i } = e,
        { analyticsLocations: n } = (0, nG.Ay)(eM.A.USER_SETTINGS_GUILD_PROFILE),
        s = (0, O.bG)([t3.default], () => {
            let e = t3.default.getCurrentUser();
            return ty()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        l = (0, O.bG)([Ej.Ay], () => (null != t ? Ej.Ay.getMember(t.id, s.id) : null)),
        r = (0, O.bG)([Ev.A], () => !Ev.A.isFetchingProfile(s.id, t?.id)),
        a = (0, O.bG)([eC.A], () => eC.A.hidePersonalInformation),
        { pendingAvatar: o, pendingNameplate: u, ...d } = (0, O.cf)([Em.A], () => Em.A.getPendingChanges(t?.id)),
        c = (0, Eb.V7)({ userId: s.id, image: o }),
        m = (0, EN.lw)({
            pendingValue: u,
            userValue: s?.collectibles?.nameplate,
            guildValue: l?.collectibles?.nameplate,
            guildId: t?.id,
        }),
        { pendingDisplayNameStyles: h } = (0, EN.B0)(s, t?.id);
    return (N.useEffect(() => () => n3.h.wait(ES.IM), []), a)
        ? (0, p.jsx)(uL.A, {})
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
                                  (0, p.jsx)(ob.A, { guildId: t.id, onChange: i }),
                                  (0, p.jsx)(E_, {
                                      profilePreviewTitle: (0, p.jsx)(eh.D, {
                                          variant: "heading-md/medium",
                                          className: xb.YV,
                                          children: g.intl.formatToPlainString(g.t.Tc0slG, { guildName: t?.name }),
                                      }),
                                      profilePreview: (0, p.jsx)(EI.A, {
                                          ...d,
                                          pendingAvatar: c,
                                          pendingDisplayNameStyles: h,
                                          user: s,
                                          guild: t,
                                          canUsePremiumCustomization: oD.Ay.canUsePremiumProfileCustomization(s),
                                          onUpsellClick: xv,
                                          containerClassName: xb.ti,
                                      }),
                                      nameplatePreview: (0, p.jsx)(Ep.A, {
                                          ...d,
                                          pendingDisplayNameStyles: h,
                                          user: s,
                                          guildId: t?.id,
                                          nameplate: m,
                                          className: null == m ? xb.tJ : void 0,
                                          isHighlighted: !0,
                                      }),
                                      children: (0, p.jsx)(xI, {}),
                                  }),
                              ],
                          })
                        : (0, p.jsx)(EO, {}),
                ],
            })
          : (0, p.jsx)(uP.y, {});
}
var xy = i(903209),
    xO = i(913403);
let xR = (e) => {
    let { children: t, notice: i } = e;
    return (0, p.jsxs)("div", { className: xO.r, children: [i, (0, p.jsx)("div", { children: t })] });
};
var xL = i(269115),
    xD = i(823092),
    xP = i(859040),
    xG = i(379197),
    xU = i(488430),
    xM = i(457421),
    xV = i(940622),
    xk = i(559474),
    xw = i(144030);
let xB = () => {
    let e,
        t,
        i,
        n,
        { analyticsLocations: s } = (0, nG.Ay)(eM.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
        l = N.useRef(null),
        {
            asset: r,
            popoutAsset: a,
            title: o,
            body: u,
            version: d,
            revertTextColor: c,
        } = ((e = (0, xV.mb)(xk.RN.UPSELL_BANNER)),
        (t = (0, xV.mb)(xk.RN.UPSELL_BANNER_POPOUT)),
        (i = (0, O.bG)([xM.A], () => xM.A.getMarketingBySurface(xG.R.EDIT_PROFILE_SETTINGS))),
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
            () => ({ ...n, type: xU.G.BANNER, asset: e ?? n.asset, popoutAsset: t ?? n.popoutAsset }),
            [e, t, n],
        )),
        { navigateWithValidation: m } = (0, xD.L_)();
    return (
        N.useEffect(() => {
            Y.default.track(q.HAw.PREMIUM_UPSELL_VIEWED, {
                type: sN.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                location_stack: s,
                version: d,
            });
        }, [s, d]),
        (0, p.jsxs)("div", {
            ref: l,
            className: xw.kL,
            style: { backgroundImage: `url(${r})` },
            children: [
                (0, p.jsx)("div", {
                    className: xw.JS,
                    "aria-hidden": !0,
                    role: "presentation",
                    children: (0, p.jsx)("img", { src: a, className: xw.Qw, alt: "" }),
                }),
                (0, p.jsxs)("div", {
                    className: xw.Em,
                    children: [
                        (0, p.jsx)(eh.D, {
                            variant: "heading-lg/extrabold",
                            color: c ? "text-overlay-dark" : "currentColor",
                            className: xw.DD,
                            children: o,
                        }),
                        (0, p.jsx)(V.E, {
                            variant: "text-sm/normal",
                            color: c ? "text-overlay-dark" : "currentColor",
                            children: u,
                        }),
                    ],
                }),
                (0, p.jsx)(eA.$, {
                    onClick: () => {
                        m(() =>
                            (0, xP.Cz)({
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
var xF = i(451909),
    xz = i(959249),
    xY = i(400669),
    xX = i(835071),
    xH = i(422936),
    xK = i(234419),
    xW = i(590180),
    xZ = i(898461),
    xq = i(207803),
    xQ = i(508425),
    xJ = i(559949);
let x$ = {
        above_the_clouds: {
            preset: "above_the_clouds",
            themeColors: [752280, 9215590],
            avatarDecorationSkuId: "1144059132517826601",
            displayNameStyles: { fontId: xJ.x.CHICLE, effectId: xQ.z.POP, colors: [959694] },
            getName: () => g.intl.string(g.t["TFc+iF"]),
            getHeaderSrc: () => i(702051).A,
            getBannerSrc: (e) => (e ? i(735161).A : i(887e3).A),
        },
        cyberpunk: {
            preset: "cyberpunk",
            themeColors: [1967991, 742532],
            avatarDecorationSkuId: null,
            displayNameStyles: { fontId: xJ.x.PIXELIFY, effectId: xQ.z.NEON, colors: [2949343] },
            getName: () => g.intl.string(g.t["4g+5bq"]),
            getHeaderSrc: () => i(272017).A,
            getBannerSrc: (e) => (e ? i(735271).A : i(208574).A),
        },
        shadow_realm: {
            preset: "shadow_realm",
            themeColors: [0, 4458504],
            avatarDecorationSkuId: "1144058522808614923",
            displayNameStyles: { fontId: xJ.x.NEO_CASTEL, effectId: xQ.z.TOON, colors: [0xff0000] },
            getName: () => g.intl.string(g.t.ycg1xj),
            getHeaderSrc: () => i(863653).A,
            getBannerSrc: (e) => (e ? i(538263).A : i(576974).A),
        },
        starlit_dream: {
            preset: "starlit_dream",
            themeColors: [5123751, 590625],
            avatarDecorationSkuId: "1144058844004233369",
            displayNameStyles: { fontId: xJ.x.CHERRY_BOMB, effectId: xQ.z.TOON, colors: [3343795] },
            getName: () => g.intl.string(g.t["9WLHvr"]),
            getHeaderSrc: () => i(434361).A,
            getBannerSrc: (e) => (e ? i(700309).A : i(135572).A),
        },
        neon_space: {
            preset: "neon_space",
            themeColors: [6094952, 1007678],
            avatarDecorationSkuId: null,
            displayNameStyles: { fontId: xJ.x.MUSEO_MODERNO, effectId: xQ.z.NEON, colors: [28737] },
            getName: () => g.intl.string(g.t.UdNuqi),
            getHeaderSrc: () => i(301928).A,
            getBannerSrc: (e) => (e ? i(285974).A : i(775627).A),
        },
    },
    x0 = (e) => x$[e],
    x1 = Object.keys(x$),
    x2 = (e) => {
        let t = null == e ? x1 : x1.filter((t) => t !== e);
        return t[Math.floor(Math.random() * t.length)];
    };
var x3 = i(371912),
    x6 = i(674253);
function x4(e) {
    let { preset: t, onShuffle: i } = e,
        n = (0, O.bG)([iK.A], () => iK.A.useReducedMotion),
        s = (0, x3.Xf)({ useReducedMotion: n }),
        { name: l, header: r } = N.useMemo(() => {
            let e = x0(t);
            return { name: e.getName(), header: e.getHeaderSrc() };
        }, [t]);
    return (0, p.jsxs)("div", {
        className: x6.kL,
        children: [
            (0, p.jsx)(M.D, {
                onClick: () => {
                    i(), s.startAnimation(!1);
                },
                className: x6.x6,
                "aria-label": g.intl.string(g.t["44yJxh"]),
                children: s.render(),
            }),
            (0, p.jsxs)(M.D, {
                onClick: () => {
                    i(), s.startAnimation(!1);
                },
                "aria-label": `${l}: ${g.intl.string(g.t["44yJxh"])}`,
                className: x6.Lt,
                children: [
                    (0, p.jsx)("img", { alt: "", "aria-hidden": !0, src: r, className: x6.L_ }),
                    (0, p.jsx)(V.E, { className: x6._e, variant: "text-sm/bold", color: "always-white", children: l }),
                ],
            }),
        ],
    });
}
var x5 = i(511484),
    x8 = i(811611),
    x7 = i(515718),
    x9 = i(507553);
function Te(e, t) {
    let i = x9.A.useField("scrollPosition"),
        n = (0, O.bG)([iK.A], () => iK.A.useReducedMotion);
    (0, N.useEffect)(() => {
        let s = e.current;
        if (null == s || i !== t) return;
        let l = requestAnimationFrame(() => {
            s.scrollIntoView({ behavior: n ? "auto" : "smooth" }), x9.A.setState({ scrollPosition: null });
        });
        return () => cancelAnimationFrame(l);
    }, [e, t, i, n]);
}
var Tt = i(844222),
    Ti = i(314649);
function Tn(e) {
    let { user: t } = e,
        { reducedMotion: n } = N.useContext(Tt.C),
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
            tryItOutBanner: h,
            tryItOutAvatarDecoration: A,
            tryItOutDisplayNameStyles: E,
        } = (0, O.cf)([Em.A], () => {
            let e = Em.A.getPendingChanges(),
                t = Em.A.getTryItOutChanges();
            return { ...e, ...t };
        }),
        x = (0, Eb.V7)({ userId: t.id, image: m ?? s });
    return (0, p.jsx)(EI.A, {
        user: t,
        pendingPronouns: d,
        pendingBio: c,
        pendingBanner: h ?? l ?? i(636763),
        pendingDisplayNameStyles: E ?? o,
        pendingAvatar: x,
        pendingThemeColors: g ?? u,
        pendingAvatarDecoration: void 0 !== A ? A : r,
        pendingProfileEffect: a,
        avatarClassName: null != m || null != s || n.enabled ? void 0 : Ti.WX,
        containerClassName: Ti.ti,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        hideExampleButton: !0,
    });
}
var Ts = i(461414);
function Tl(e) {
    let { user: t, isVisible: i, shouldShow: n } = e,
        s = oD.Ay.isPremium(t),
        l = oD.Ay.canUseAnimatedAvatar(t),
        {
            pendingAvatar: r,
            pendingThemeColors: a,
            tryItOutThemeColors: o,
            tryItOutAvatar: u,
            tryItOutBanner: d,
        } = (0, O.cf)([Em.A], () => {
            let e = Em.A.getPendingChanges(),
                t = Em.A.getErrors(),
                i = Em.A.getTryItOutChanges();
            return { ...e, ...i, errors: t };
        }),
        { preset: c, onShuffle: m } = (function () {
            let e = (0, O.bG)([iK.A], () => iK.A.useReducedMotion),
                [t, i] = (0, N.useState)(x2()),
                {
                    banner: n,
                    themeColors: s,
                    avatarDecorationSkuId: l,
                    displayNameStyles: r,
                } = (0, N.useMemo)(() => {
                    let i = x0(t);
                    return {
                        banner: i.getBannerSrc(e),
                        themeColors: i.themeColors,
                        avatarDecorationSkuId: i.avatarDecorationSkuId,
                        displayNameStyles: i.displayNameStyles,
                    };
                }, [t, e]),
                a = (0, O.bG)([xW.A], () => {
                    let e = xW.A.getProduct(l);
                    return (0, xZ.T)(e?.items[0]) ? e.items[0] : null;
                });
            (0, N.useEffect)(() => {
                (0, xq.w5)({ banner: n, themeColors: s, avatarDecoration: a, displayNameStyles: r });
            }, [n, s, a, r]);
            let o = (0, N.useCallback)(() => {
                let e = x2(t);
                i(e), Y.default.track(q.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: e });
            }, [t]);
            return { preset: t, onShuffle: o };
        })(),
        h = N.useRef(null);
    Te(h, nb._F.TRY_IT_OUT);
    let { analyticsLocations: A, sourceAnalyticsLocations: E } = (0, nG.Ay)(eM.A.USER_SETTINGS_TRY_OUT_PREMIUM),
        x = (e) => {
            e &&
                (d?.startsWith("https:") === !0
                    ? fetch(d)
                          .then((e) => e.blob())
                          .then((e) => (0, x7.We)(e))
                          .then((e) => {
                              (0, EX.p)({ avatar: u, themeColors: o, banner: e });
                          })
                          .catch(() => {
                              (0, EX.p)({ avatar: u, themeColors: o });
                          })
                    : null != d
                      ? (0, EX.p)({ avatar: u, themeColors: o, banner: d })
                      : (0, EX.p)({ avatar: u, themeColors: o }),
                Y.default.track(q.HAw.TRY_IT_OUT_PRESET_SELECTED, { preset: c }));
        };
    N.useEffect(() => {
        i &&
            Y.default.track(q.HAw.PREMIUM_UPSELL_VIEWED, {
                type: sN.e.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: q.liQ.USER_SETTINGS },
                location_stack: E,
            });
    }, [E, t, i]);
    let T = (0, xK.V)()?.subscription_trial?.sku_id === sN.pe.TIER_2,
        S = (0, xH.O)(),
        f = (0, x5.U9)(S, sN.pe.TIER_2);
    return n
        ? (0, p.jsx)(nG.f5, {
              value: A,
              children: (0, p.jsxs)(dY.A, {
                  ref: h,
                  className: Ts.MT,
                  type: dY.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, p.jsx)(E_, {
                          stickyPreview: !1,
                          layoutClassName: Ts.th,
                          profilePreviewTitle: (0, p.jsxs)(p.Fragment, {
                              children: [
                                  (0, p.jsx)(o_.t, { size: "md", color: "currentColor", className: Ts.PC }),
                                  g.intl.string(g.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, p.jsxs)(p.Fragment, {
                              children: [(0, p.jsx)(x4, { preset: c, onShuffle: m }), (0, p.jsx)(Tn, { user: t })],
                          }),
                          children: (0, p.jsxs)("div", {
                              children: [
                                  (0, p.jsxs)("div", {
                                      children: [
                                          (0, p.jsx)(eh.D, {
                                              variant: "heading-xl/extrabold",
                                              children: g.intl.string(g.t["2zGdAW"]),
                                          }),
                                          (0, p.jsx)(V.E, {
                                              className: Ts.h_,
                                              variant: "text-sm/normal",
                                              children: g.intl.string(g.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, p.jsx)(xA, {
                                      className: Ts.fz,
                                      user: t,
                                      pendingAvatarSrc: (0, Eb.V7)({ userId: t.id, image: u ?? r }),
                                      pendingColors: o ?? a,
                                      onThemeColorsChange: xq.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, p.jsx)(E6, {
                                      className: Ts.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != d,
                                      onBannerChange: xq.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !l &&
                                      (0, p.jsx)(EQ, {
                                          className: Ts.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: xq.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: g.intl.string(g.t["7z0D1c"]),
                                          sectionTitle: g.intl.string(g.t.vtFfPX),
                                      }),
                                  (0, p.jsx)(E$, { user: t, className: Ts.fz }),
                                  !T &&
                                      (0, p.jsx)(V.E, {
                                          variant: "text-sm/normal",
                                          children: g.intl.string(g.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !T &&
                          (0, p.jsx)(xz.d, {
                              onSubscribeModalClose: x,
                              className: Ts.Kv,
                              showUpsell: !0,
                              text: g.intl.format(g.t.TmfgI2, {
                                  onClick: () => {
                                      (0, xX.K)({ onSubscribeFinish: x });
                                  },
                              }),
                              button: s
                                  ? g.intl.string(g.t.AfRWI8)
                                  : f
                                    ? g.intl.formatToPlainString(g.t.bkQ4bH, { percent: S?.discount.amount })
                                    : g.intl.string(g.t.pj0XBN),
                              position: "inline",
                          }),
                      T &&
                          (0, p.jsxs)("div", {
                              children: [
                                  (0, p.jsx)("div", { className: Ts.BU }),
                                  (0, p.jsx)(x8.Ay, {
                                      type: sN.e.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                      subscriptionTier: sN.pe.TIER_2,
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : null;
}
var Tr = i(814390),
    Ta = i(909536),
    To = i(843282),
    Tu = i(145497),
    Td = i(685073),
    Tc = i(534400),
    Tg = i(581781),
    Tm = i(743981),
    Th = i(51358);
let TA = (0, sS.Ld)(),
    TE = N.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: i, onChange: n } = e,
            s = N.useMemo(() => new Map(t.map((e) => [e.id, e])), [t]),
            l = (0, O.bG)([t3.default], () => (0, Td.Zo)(t3.default.getCurrentUser()?.primaryGuild).guildId),
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
                        : (0, p.jsx)(Tg.A, {
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
                        : (0, p.jsx)(Tu.j, {
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
                        : (0, p.jsx)(Tc.o9, {
                              guildId: t.id,
                              guildTag: i,
                              guildBadge: t.profile?.badge ?? void 0,
                              badgeSize: Tm.Sl.SIZE_16,
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
            h = N.useCallback((e) => e === r, [r]),
            A = N.useCallback((e) => e, []),
            E = N.useCallback(() => {
                n?.(null);
            }, [n]),
            x = N.useRef(null);
        return (
            Te(x, nb._F.GUILD_TAG),
            (0, p.jsxs)(ov.A, {
                title: g.intl.string(g.t.Pdd1nd),
                titleId: TA,
                ref: x,
                children: [
                    (0, p.jsx)(V.E, {
                        className: Th.VA,
                        variant: "text-sm/normal",
                        children: g.intl.string(g.t.mlZ6Jx),
                    }),
                    (0, p.jsx)(To.Pw, {
                        className: Th.Lt,
                        optionClassName: Th.S0,
                        isSelected: h,
                        options: a,
                        select: m,
                        renderLeading: u,
                        renderTrailing: d,
                        renderOptionValue: c,
                        serialize: A,
                        clear: E,
                        clearable: null != r,
                        maxVisibleItems: 8,
                        "data-migration-pending": !0,
                    }),
                ],
            })
        );
    });
var Tx = i(556729);
function TT(e) {
    let t = (0, EL.L)(sN.PremiumTypes.TIER_2);
    return (0, p.jsxs)(ov.A, {
        errors: e.errors,
        disabled: e.disabled,
        title: g.intl.string(g.t["9AjdkD"]),
        children: [
            (0, p.jsx)("div", {
                children: (0, p.jsx)(lP.k, {
                    placeholder: e.placeholder,
                    maxLength: q.zzC,
                    onChange: e.onGlobalNameChange,
                    value: e.pendingGlobalName ?? e.currentGlobalName ?? "",
                }),
            }),
            t && (0, p.jsx)(E$, { user: e.user, className: Tx.F }),
        ],
    });
}
function TS(e) {
    let { legacyUsername: t, pendingLegacyUsernameDisabled: i } = e,
        n = c.m$.useSetting(),
        s = void 0 !== i ? i : n;
    return (0, p.jsx)(L.d, {
        label: g.intl.string(g.t["3cWDuO"]),
        description: s ? null : g.intl.formatToPlainString(g.t.aYhclf, { username: t }),
        checked: !s,
        onChange: (e) => {
            !e === n ? (0, Ed._e)() : (0, EX.p)({ legacyUsernameDisabled: !e });
        },
    });
}
function Tp(e) {
    let { user: t, savedUserColor: i, pendingColor: n, setPendingAccentColor: s } = e,
        l = t.getAvatarURL(null, 80),
        r = (0, xs.r)(w.A.unsafe_rawColors.PRIMARY_530).hex(),
        a = (0, xl.rh)(l, r, !1),
        o = (0, xu.LX)(a[0]);
    return (0, p.jsx)(ov.A, {
        title: g.intl.string(g.t["/X3fkf"]),
        children: (0, p.jsx)(xm, { onChange: (e) => s(e), color: n ?? i ?? o, suggestedColors: a, showEyeDropper: !0 }),
    });
}
var TN = i(518477);
let Tf = () => {
    let e = (0, O.bG)([d0.default], () => d0.default.getId());
    return (0, p.jsx)(ov.A, {
        title: g.intl.string(g.t.Jzj9q4),
        children: (0, p.jsx)(eA.$, {
            text: g.intl.string(g.t.Geikwq),
            onClick: () => {
                (0, EE.openUserProfileModal)({
                    userId: e,
                    sourceAnalyticsLocations: [eM.A.USER_SETTINGS_USER_PROFILE],
                    hideRestrictedProfile: !0,
                    tabSection: TN.RP.WIDGETS,
                });
            },
            size: "sm",
        }),
    });
};
var TC = i(289299);
function T_() {
    let e = (0, O.bG)([t3.default], () => {
            let e = t3.default.getCurrentUser();
            return ty()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e;
        }),
        t = (0, O.bG)([Ev.A], () => Ev.A.getUserProfile(e.id)),
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
        } = (0, O.cf)([Em.A], () => {
            let e = Em.A.getPendingChanges(),
                t = Em.A.getErrors();
            return { ...e, errors: t };
        }),
        m = (0, Eb.V7)({ userId: e.id, image: i }),
        h = (0, ER.EC)(),
        A = oD.Ay.canUsePremiumProfileCustomization(e),
        E = (0, EN.z5)(i, e.avatar),
        x = (0, EN.Ac)(s, t?.banner),
        T = (0, xr.Ay)(e.id),
        S = T?.getLegacyUsername(),
        N = (c.global_name?.length ?? 0) > 0 ? c.global_name : (h?.nick ?? []),
        f = (c.bio?.length ?? 0) > 0 ? c.bio : (h?.bio ?? []),
        C = (0, O.yK)([H.A, Ej.Ay], () =>
            H.A.getGuildsArray().filter(
                (e) => (0, Td.Rg)(e) && Ej.Ay.getSelfMember(e.id)?.joinedAt != null && e.profile?.tag != null,
            ),
        );
    return (0, p.jsxs)("div", {
        className: TC.Q,
        children: [
            (0, p.jsx)(TT, {
                placeholder: e.username,
                errors: N,
                currentGlobalName: e.globalName,
                pendingGlobalName: n,
                onGlobalNameChange: (e) => (0, EX.p)({ globalName: e }),
                user: e,
            }),
            (0, p.jsx)(
                xE,
                {
                    sectionTitle: g.intl.string(g.t["+T3RI/"]),
                    errors: c.pronouns,
                    onPronounsChange: (e) => (0, EX.p)({ pronouns: e }),
                    pendingPronouns: r,
                    currentPronouns: t?.pronouns ?? "",
                },
                "pronouns",
            ),
            (0, p.jsx)(Tf, {}),
            (0, p.jsx)(
                EQ,
                {
                    onAvatarChange: (e) => {
                        (0, EX.p)({ avatar: e }), (0, EN.WU)(null == e ? "remove" : "set");
                    },
                    showRemoveAvatarButton: E,
                    errors: c.avatar,
                    sectionTitle: g.intl.string(g.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, p.jsx)(EK, { user: e, sectionTitle: g.intl.string(g.t["7v0T9P"]) }, "decoration"),
            (0, p.jsx)(E2, { user: e }),
            (0, p.jsx)(E8, { user: e, sectionTitle: g.intl.string(g.t.wR5wOo) }, "effect"),
            (0, p.jsx)(xt, { user: e, sectionTitle: g.intl.string(g.t.GWrZOd) }, "frame"),
            A
                ? (0, p.jsxs)(p.Fragment, {
                      children: [
                          (0, p.jsx)(
                              E6,
                              {
                                  showRemoveBannerButton: x,
                                  errors: c.banner,
                                  onBannerChange: (e) => (0, EX.p)({ banner: e }),
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, p.jsx)(xA, {
                              user: e,
                              pendingAvatarSrc: m,
                              pendingColors: o,
                              onThemeColorsChange: (e) => (0, EX.p)({ themeColors: e }),
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, p.jsx)(
                      Tp,
                      {
                          user: e,
                          savedUserColor: t?.accentColor,
                          pendingColor: a,
                          setPendingAccentColor: (e) => (0, EX.p)({ accentColor: e }),
                      },
                      "color",
                  ),
            (0, p.jsx)(
                EB,
                {
                    sectionTitle: g.intl.string(g.t.ZzAR2Y),
                    errors: f,
                    onBioChange: (e) => (0, EX.p)({ bio: e }),
                    pendingBio: l,
                    currentBio: t?.bio ?? "",
                },
                "bio",
            ),
            C.length > 0 &&
                (0, p.jsx)(TE, {
                    availablePrimaryGuilds: C,
                    pendingPrimaryGuildId: d,
                    onChange: (e) => (0, EX.p)({ primaryGuildId: e }),
                }),
            null != S && (0, p.jsx)(TS, { legacyUsername: S, pendingLegacyUsernameDisabled: u }, "legacy_username"),
        ],
    });
}
function TI() {
    (0, C.openModalLazy)(async () => {
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
var Tb = i(482549);
function Tv() {
    let e = (0, O.bG)([t3.default], () => {
            let e = t3.default.getCurrentUser();
            return ty()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e;
        }),
        t = (0, O.bG)([eC.A], () => eC.A.hidePersonalInformation),
        {
            pendingBio: i,
            pendingAvatar: n,
            pendingNameplate: s,
            showNotice: l,
            ...r
        } = (0, O.cf)([Em.A], () => ({ ...Em.A.getPendingChanges(), showNotice: Em.A.showNotice() })),
        a = (0, Eb.V7)({ userId: e.id, image: n }),
        o = (0, EN.lw)({ pendingValue: s, userValue: e?.collectibles?.nameplate }),
        u = (0, Tr.A)() && null != i ? xF.Ay.parse(void 0, i).content : i,
        d = oD.Ay.canUsePremiumProfileCustomization(e),
        c = (0, Ta.St)("edit-profile-upsell"),
        { analyticsLocations: m } = (0, nG.Ay)(eM.A.USER_SETTINGS_USER_PROFILE);
    N.useEffect(() => () => n3.h.wait(Ed.IM), []);
    let [h, A] = N.useState(!1),
        E = !d,
        x = N.useRef(null);
    return t
        ? (0, p.jsx)(uL.A, {})
        : (0, p.jsxs)(nG.f5, {
              value: m,
              children: [
                  (0, p.jsx)(xB, {}),
                  (0, p.jsx)(E_, {
                      profilePreview: (0, p.jsx)(EI.A, {
                          user: e,
                          canUsePremiumCustomization: d,
                          onUpsellClick: TI,
                          pendingBio: u,
                          ...r,
                          pendingAvatar: a,
                          containerClassName: Tb.ti,
                      }),
                      nameplatePreview: (0, p.jsx)(Ep.A, {
                          user: e,
                          nameplate: o,
                          ...r,
                          className: null == o ? Tb.tJ : void 0,
                          isHighlighted: !0,
                      }),
                      children: (0, p.jsx)(T_, {}),
                  }),
                  (0, p.jsx)(xL.L, {
                      innerRef: x,
                      onChange: (e) => A(e),
                      threshold: 0.25,
                      active: E,
                      children: (0, p.jsx)("div", {
                          ref: x,
                          children: (0, p.jsx)(Tl, { user: e, shouldShow: E, isVisible: h }),
                      }),
                  }),
                  E &&
                      !l &&
                      (0, p.jsx)(xz.d, {
                          className: Tb.EL,
                          showUpsell: !h,
                          text: g.intl.format(g.t.TmfgI2, { onClick: () => (0, xX.K)({}) }),
                          textVariant: "heading-md/medium",
                          useUpdatedStyling: !0,
                          leadingAction: c
                              ? (0, p.jsx)(xY.l, { size: "md", location: eM.A.PREMIUM_WISHLIST_EDIT_PROFILE_UPSELL })
                              : void 0,
                          button: (0, p.jsx)("div", {
                              className: Tb.Xl,
                              children: (0, p.jsx)(eA.$, {
                                  variant: "overlay-primary",
                                  onClick: () => {
                                      Y.default.track(q.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                                          cta_variant: "floating_action_button",
                                      }),
                                          x?.current?.scrollIntoView({ behavior: "smooth" });
                                  },
                                  text: g.intl.string(g.t.uw9zI7),
                                  icon: o_.t,
                              }),
                          }),
                      }),
              ],
          });
}
var Tj = i(625494),
    Ty = i(454078);
let TO = { [nb.Eq.USER_PROFILE]: "main_profile_tab", [nb.Eq.GUILD]: "guild_profile_tab" },
    TR = (0, o.E2)(u.X.PROFILE_SETTING, {
        Component: function () {
            let e = (0, O.bG)([lF.A, K.Ay, Em.A], () => {
                    let e = Em.A.selectedGuildId ?? lF.A.getGuildId();
                    return null == e || Em._.has(e) ? K.Ay.getFlattenedGuildIds().find((e) => !Em._.has(e)) : e;
                }),
                t = (0, O.bG)([H.A], () => H.A.getGuild(e)),
                i = (0, O.bG)([Em.A], () => Em.A.showNotice()),
                n = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
                s = x9.A.useField("subsection");
            return (
                N.useEffect(() => {
                    (0, rA._)(TO[s]);
                }, [s]),
                N.useEffect(() => {
                    null != n && t?.id != null && (0, xy.A)(n.id, n.getAvatarURL(t?.id, 80), { guildId: t?.id });
                }, [t?.id, n]),
                (0, p.jsxs)(xR, {
                    children: [
                        (0, p.jsxs)(Ex.V, {
                            className: Ty.$H,
                            type: "top",
                            look: "brand",
                            selectedItem: s,
                            onItemSelect: function (e) {
                                if (s !== e) {
                                    if (i) {
                                        (0, rE.fO)({ duration: 300, intensity: ET.n3 }),
                                            Tj._.dispatch(q.jej.EMPHASIZE_NOTICE);
                                        return;
                                    }
                                    e === nb.Eq.GUILD && null != t && (0, ES.V2)(t.id),
                                        x9.A.setState({ subsection: e });
                                }
                            },
                            children: [
                                (0, p.jsx)(
                                    Ex.V.Item,
                                    {
                                        className: Ty.YU,
                                        id: nb.Eq.USER_PROFILE,
                                        children: g.intl.string(g.t["2p07FR"]),
                                    },
                                    nb.Eq.USER_PROFILE,
                                ),
                                (0, p.jsx)(
                                    Ex.V.Item,
                                    {
                                        className: ew()(Ty.YU, Ty.HY),
                                        "aria-label": g.intl.string(g.t.kPHroX),
                                        id: nb.Eq.GUILD,
                                        children: g.intl.string(g.t.kPHroX),
                                    },
                                    nb.Eq.GUILD,
                                ),
                            ],
                        }),
                        s === nb.Eq.GUILD
                            ? (0, p.jsx)(xj, {
                                  selectedGuild: t,
                                  onGuildChange: function (e) {
                                      if (i) {
                                          (0, rE.fO)({ duration: 300, intensity: ET.n3 }),
                                              Tj._.dispatch(q.jej.EMPHASIZE_NOTICE);
                                          return;
                                      }
                                      null != e && (0, ES.JJ)(e.id);
                                  },
                              })
                            : (0, p.jsx)(Tv, {}),
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
    TL = (0, o.zZ)(u.X.PROFILE_CATEGORY, { buildLayout: () => [TR] });
var TD = i(881324);
let TP = () => {
        let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
            { avatarSrc: t, avatarDecorationSrc: i } = (0, EA.A)({ userId: e?.id, size: iH._3.SIZE_48 });
        return null == e
            ? null
            : (0, p.jsxs)("div", {
                  className: TD.a5,
                  children: [
                      (0, p.jsx)(iX.eu, {
                          src: t,
                          avatarDecoration: i,
                          size: iH._3.SIZE_48,
                          "aria-label": g.intl.string(g.t.lqaIxI),
                      }),
                      (0, p.jsxs)("div", {
                          className: TD.FS,
                          children: [
                              (0, p.jsx)(V.E, {
                                  color: "text-strong",
                                  variant: "text-md/medium",
                                  lineClamp: 1,
                                  children: e.globalName ?? e.username,
                              }),
                              (0, p.jsxs)("div", {
                                  className: TD.Fk,
                                  children: [
                                      (0, p.jsx)(V.E, {
                                          variant: "text-sm/normal",
                                          color: "currentColor",
                                          lineClamp: 1,
                                          children: g.intl.string(g.t.Ip9nBS),
                                      }),
                                      (0, p.jsx)(oL.R, { size: "xxs", color: "currentColor" }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              });
    },
    TG = (0, o.t_)(u.X.PROFILE_PANEL, {
        useTitle: () => g.intl.string(g.t["vi7f+q"]),
        notice: { stores: [Em.A], element: Eg.A },
        initialize: () => () =>
            n3.h.wait(() => {
                (0, Ed.F7)(), Ec.A.clearSubsection(q.nc_.PROFILE_CUSTOMIZATION);
            }),
        buildLayout: () => [TL],
    }),
    TU = (0, o.i4)(u.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["vi7f+q"]),
        icon: TV,
        StronglyDiscouragedCustomComponent: TP,
        usePredicate: () => !(0, Eh.X)("user_settings_sidebar"),
        buildLayout: () => [TG],
    }),
    TM = (0, o.i4)(u.X.PROFILE_SIDEBAR_ITEM_WYSIWYG, {
        useTitle: () => g.intl.string(g.t["vi7f+q"]),
        icon: TV,
        StronglyDiscouragedCustomComponent: TP,
        usePredicate: () => (0, Eh.X)("user_settings_sidebar"),
        onClick: () => {
            let e = d0.default.getId();
            (0, EE.openUserProfileModal)({ userId: e });
        },
        buildLayout: () => [],
    });
function TV() {
    let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: i } = (0, EA.A)({ userId: e?.id, size: iH._3.SIZE_48 });
    return (0, p.jsx)(iX.eu, { src: t, avatarDecoration: i, size: iH._3.SIZE_20, "aria-hidden": !0 });
}
let Tk = (0, o.WI)(u.X.PROFILE_SECTION, { hoisted: !0, buildLayout: () => [TU, TM] });
var Tw = i(358776),
    TB = i(98207);
function TF() {
    return (0, p.jsx)(tr.p, { icon: uD.X, messageType: tr.Y.POSITIVE, children: g.intl.string(g.t.FsmBy4) });
}
var Tz = i(670492),
    TY = i(579872),
    TX = i(900686),
    TH = i(518142),
    TK = i(662758),
    TW = i(407186);
function TZ(e) {
    let { backupCodes: t, hasTOTPEnabled: i, currentUser: n } = e,
        s = N.useCallback((e) => {
            (0, C.openModal)((t) => (0, p.jsx)(TH.default, { ...t, password: e }), { stackingBehavior: "stack" });
        }, []),
        l = N.useCallback(() => {
            (0, C.openModal)((e) =>
                (0, p.jsx)(TK.default, {
                    ...e,
                    handleSubmit: (e) =>
                        TB.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
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
                    ? (0, p.jsx)(TX.A, {
                          fileContents: r,
                          contentType: "text/plain",
                          fileName: "discord_backup_codes.txt",
                          children: (0, p.jsx)(eA.$, {
                              variant: "primary",
                              size: "sm",
                              text: g.intl.string(g.t.qZZUy6),
                          }),
                      })
                    : (0, p.jsx)(eA.$, { variant: "primary", size: "sm", text: g.intl.string(g.t.xZEzbu), onClick: l }),
            [t.length, r, l],
        ),
        o = N.useCallback(() => {
            TY.A.show({
                title: g.intl.string(g.t["D+aE7g"]),
                body: g.intl.string(g.t.EA4ZEk),
                cancelText: g.intl.string(g.t["ETE/oC"]),
                onConfirm: () => TB.A.disable(),
            });
        }, []);
    return (0, p.jsx)(sy.D, {
        label: g.intl.string(g.t.EPVq00),
        description: g.intl.string(g.t.bQwxib),
        children: (0, p.jsxs)(ax.e, {
            size: "sm",
            children: [
                a,
                i &&
                    (0, p.jsx)(eA.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        text: g.intl.string(g.t["D+aE7g"]),
                        onClick: o,
                    }),
                !i &&
                    (0, p.jsx)(eA.$, {
                        variant: "primary",
                        size: "sm",
                        text: g.intl.string(g.t.cDgKte),
                        onClick: TW.Ay.enableMFA,
                    }),
            ],
        }),
    });
}
var Tq = i(464477);
function TQ() {
    return !Tq.K7;
}
let TJ = (0, o.E2)(u.X.ACCOUNT_TWO_FACTOR_CRYPTO_NOTICE, {
    useSearchTerms: () => [g.intl.string(g.t.m0FidJ)],
    usePredicate: TQ,
    Component: function () {
        return (0, p.jsx)(sy.D, {
            label: g.intl.string(g.t.EPVq00),
            children: (0, p.jsx)(tr.p, { messageType: tr.Y.INFO, children: g.intl.string(g.t.PhHhsj) }),
        });
    },
});
function T$() {
    let e = TQ(),
        t = (0, O.bG)([t3.default], () => {
            let e = t3.default.getCurrentUser();
            return null != e && !e.verified;
        });
    return !e && t;
}
let T0 = (0, o.E2)(u.X.ACCOUNT_UNVERIFIED_USER_NOTICE, {
    useSearchTerms: () => [g.intl.string(g.t.m0FidJ)],
    usePredicate: T$,
    Component: function () {
        return (0, p.jsx)(sy.D, {
            label: g.intl.string(g.t.EPVq00),
            children: (0, p.jsx)(tr.p, { messageType: tr.Y.WARNING, children: g.intl.string(g.t.uggF7o) }),
        });
    },
});
function T1() {
    return (0, O.bG)([t3.default], () => {
        let e = t3.default.getCurrentUser();
        return null != e && e.mfaEnabled;
    });
}
let T2 = (0, o.E2)(u.X.ACCOUNT_AUTHENTICATOR_APP_SETTING, {
    useSearchTerms: function () {
        let e = (0, O.bG)([d0.default], () => d0.default.hasTOTPEnabled()),
            t = [g.intl.string(g.t.m0FidJ), g.intl.string(g.t.xZEzbu)];
        return e ? t.push(g.intl.string(g.t["D+aE7g"])) : t.push(g.intl.string(g.t.cDgKte)), t;
    },
    usePredicate: function () {
        let e = TQ(),
            t = T$(),
            i = T1();
        return !e && !t && i;
    },
    Component: function () {
        let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
            t = (0, O.bG)([Tz.A], () => Tz.A.getBackupCodes()),
            i = (0, O.bG)([d0.default], () => d0.default.hasTOTPEnabled());
        return null == e ? null : (0, p.jsx)(TZ, { backupCodes: t, currentUser: e, hasTOTPEnabled: i });
    },
});
var T3 = i(658675),
    T6 = i(103579);
function T4(e) {
    let {
            code: { code: t, consumed: i },
        } = e,
        n = `${t.substr(0, 4)}-${t.substr(4)}`,
        s = N.useRef(null),
        l = N.useCallback(
            (e) => {
                "c" === e.key &&
                    e.metaKey &&
                    d4.p5 &&
                    (e.preventDefault(), e.stopPropagation(), (0, d4.C)(n), s?.current?.focus());
            },
            [n],
        );
    return (0, p.jsx)("li", {
        className: i_.SX,
        children: (0, p.jsxs)(M.D, {
            innerRef: s,
            className: T6.Uc,
            onKeyDown: l,
            children: [(0, p.jsx)(T3.P, { checked: i }), (0, p.jsx)("span", { className: T6.aY, children: n })],
        }),
    });
}
function T5(e) {
    let { backupCodes: t } = e,
        i = N.useCallback((e) => e.map((e) => (0, p.jsx)(T4, { code: e }, e.code)), []),
        n = N.useCallback(async () => {
            let e = Tz.A.getVerificationKey();
            await TB.A.confirmViewBackupCodes(e, !0);
        }, []);
    return (0, p.jsxs)(sy.D, {
        label: g.intl.string(g.t.GfqHPn),
        description: g.intl.format(g.t.OhmvYt, {}),
        children: [
            (0, p.jsxs)(lV.A, {
                children: [
                    (0, p.jsx)(lV.A.Child, {
                        children: (0, p.jsx)("ul", { className: T6.Pm, children: i(t.slice(0, t.length / 2)) }),
                    }),
                    (0, p.jsx)(lV.A.Child, {
                        children: (0, p.jsx)("ul", { className: T6.Pm, children: i(t.slice(t.length / 2)) }),
                    }),
                ],
            }),
            (0, p.jsx)(B.Q, { textVariant: "text-sm/medium", onClick: n, text: g.intl.string(g.t.RIThUu) }),
        ],
    });
}
let T8 = (0, o.E2)(u.X.ACCOUNT_BACKUP_CODES_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t.m0FidJ), g.intl.string(g.t.xZEzbu)],
        usePredicate: function () {
            let e = TQ(),
                t = T$(),
                i = T1(),
                n = (0, O.bG)([Tz.A], () => Tz.A.getBackupCodes().length > 0);
            return !e && !t && i && n;
        },
        Component: function () {
            let e = (0, O.bG)([Tz.A], () => Tz.A.getBackupCodes());
            return (0, p.jsx)(T5, { backupCodes: e });
        },
    }),
    T7 = (0, o.E2)(u.X.ACCOUNT_ENABLE_MFA_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t.m0FidJ)],
        usePredicate: function () {
            let e = TQ(),
                t = T$();
            return (0, O.bG)([t3.default], () => {
                let i = t3.default.getCurrentUser();
                return null != i && !i.mfaEnabled && !e && !t;
            });
        },
        Component: function () {
            return (0, p.jsx)(sy.D, {
                label: g.intl.string(g.t.EPVq00),
                description: g.intl.string(g.t["8aDa1t"]),
                children: (0, p.jsx)(eA.$, {
                    variant: "primary",
                    size: "sm",
                    text: g.intl.string(g.t.cDgKte),
                    onClick: TW.Ay.enableMFA,
                }),
            });
        },
    });
var T9 = i(846017);
let Se = (0, o.Tf)(u.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
        useTitle: () => g.intl.string(g.t["CIGa+7"]),
        useLabel: () => g.intl.string(g.t.bt75uw),
        useAriaLabel: () => g.intl.string(g.t["FRep5/"]),
        useVariant: () => "secondary",
        onClick: () => {
            (0, C.openModal)((e) => (0, p.jsx)(T9.default, { ...e, onSuccess: () => e.onClose() }));
        },
    }),
    St = (0, o.E2)(u.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t["FRep5/"])],
        Component: function () {
            return (0, p.jsx)(eA.$, {
                variant: "primary",
                size: "sm",
                text: g.intl.string(g.t["FRep5/"]),
                onClick: () => (0, C.openModal)((e) => (0, p.jsx)(T9.default, { ...e, onSuccess: e.onClose })),
            });
        },
    });
var Si = i(557722),
    Sn = i(615715);
function Ss(e) {
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
var Sl =
    (((r = {}).AVAILABLE = "available"),
    (r.UNAVAILABLE_NO_CRYPTO = "unavailable_no_crypto"),
    (r.UNAVAILABLE_UNVERIFIED = "unavailable_unverified"),
    r);
function Sr() {
    let e = (0, uA.bG)([t3.default], () => t3.default.getCurrentUser()?.verified);
    return Tq.K7 ? (!1 === e ? "unavailable_unverified" : "available") : "unavailable_no_crypto";
}
function Sa() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (0, uA.bG)([H.A, xT.A, t3.default], () =>
        t3.default.getCurrentUser()?.hasAnyStaffLevel()
            ? e
                ? g.intl.string(g.t.hxf9fX)
                : g.intl.string(g.t["3iKih7"])
            : H.A.getGuildsArray().some(
                    (e) =>
                        e.features.has(q.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) &&
                        xT.A.can(q.xBc.ADMINISTRATOR, e),
                )
              ? e
                  ? g.intl.string(g.t.OYTCUh)
                  : g.intl.string(g.t.HC8uSZ)
              : null,
    );
}
var So = i(53516);
function Su(e) {
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
            (0, C.openModal)((t) => (0, p.jsx)(Sn.default, { reason: Si.d.USER_SETTINGS_UPDATE, ...t, ...e }), {
                modalKey: So.V,
            });
        }, []),
        u = N.useCallback(() => {
            o();
        }, [o]),
        d = N.useCallback(() => {
            null == n.phone ? o({ onAddedPhone: TB.A.enableSMS }) : TB.A.enableSMS();
        }, [n, o]),
        c = N.useCallback(() => {
            (0, C.openModal)((e) =>
                (0, p.jsx)(TK.default, {
                    ...e,
                    handleSubmit: TB.A.disableSMS,
                    title: g.intl.string(g.t.KLWnit),
                    children: g.intl.string(g.t["W0/Duf"]),
                }),
            );
        }, []),
        m = N.useCallback((e) => (null == e ? "" : `${"*".repeat(e.length - 4)}${e.slice(-4)}`), []),
        h = null != n.phone,
        A = n.hasFlag(q.nhx.MFA_SMS);
    if (h || A) {
        let e = l ? n.phone : m(n.phone);
        i = (0, p.jsxs)(V.E, {
            variant: "text-sm/normal",
            children: [
                g.intl.format(g.t.PXVoEO, { phoneNumber: e }),
                (0, p.jsx)(uE.Anchor, {
                    onClick: a,
                    className: T6.vN,
                    children: l ? g.intl.string(g.t.FfltIN) : g.intl.string(g.t.llArAg),
                }),
            ],
        });
    }
    if (A)
        t = (0, p.jsx)(eA.$, {
            variant: "critical-secondary",
            size: "sm",
            text: g.intl.string(g.t.KLWnit),
            loading: s,
            onClick: c,
        });
    else {
        let e = Ss(n);
        t = (0, p.jsxs)(ax.e, {
            size: "sm",
            children: [
                (0, p.jsx)(eA.$, {
                    variant: "primary",
                    size: "sm",
                    text: e ?? g.intl.string(g.t.DZQe23),
                    onClick: d,
                    loading: s,
                    disabled: null != e,
                }),
                h
                    ? (0, p.jsx)(eA.$, {
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
let Sd = (0, o.E2)(u.X.ACCOUNT_SMS_BACKUP_AUTHENTICATION_SETTING, {
    useSearchTerms: () => [g.intl.string(g.t.uHAJ5v)],
    usePredicate: function () {
        let e = TQ(),
            t = T$(),
            i = T1(),
            n = (0, O.bG)([d0.default], () => d0.default.hasTOTPEnabled());
        return !e && !t && i && n;
    },
    Component: function () {
        let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
            t = (0, O.bG)([Tz.A], () => Tz.A.togglingSMS);
        return null == e ? null : (0, p.jsx)(Su, { currentUser: e, togglingSMS: t });
    },
});
var Sc = i(328009);
let Sg = (0, o.E2)(u.X.ACCOUNT_SECURITY_KEYS_SETTING, {
    useSearchTerms: () => [g.intl.string(g.t.vrOCCk), g.intl.string(g.t.y7SXYX)],
    usePredicate: function () {
        let e = TQ(),
            t = T$();
        return !e && !t;
    },
    Component: Sc.A,
});
var Sm = i(200921),
    Sh = i(390310),
    SA = i(766928),
    SE = i(568385),
    Sx = i(791606),
    ST = i(646270),
    SS = i(738678);
function Sp(e, t) {
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
                    return { text: e, icon: ST.u };
                case "horizon os":
                    return { text: e, icon: SS.G };
                default:
                    return { text: e, icon: e2.k };
            }
        })(e.client_info?.os);
    return { location: i, platform: n, os: s, Icon: l, lastActive: t ? null : (0, Sh.Y)(e.approx_last_used_time) };
}
var SN = i(405814);
function Sf() {
    return (0, p.jsx)(V.E, { variant: "text-sm/normal", className: SN.h_, children: g.intl.string(g.t.zZp618) });
}
function SC() {
    let { currentSession: e } = (0, Sh.r)();
    return null == e
        ? (0, p.jsx)("div", { className: SN.Lq, children: (0, p.jsx)(uP.y, {}) })
        : (0, p.jsx)(ia.n, { label: g.intl.string(g.t.LLS19o), children: (0, p.jsx)(Sb, { session: e, current: !0 }) });
}
function S_(e) {
    let { checked: t, otherSessions: i } = e;
    return (0, p.jsx)(sy.D, {
        label: t.size > 0 ? g.intl.string(g.t.mMEmRO) : g.intl.string(g.t.Vij32M),
        description: g.intl.string(g.t.OTXyaf),
        children: (0, p.jsx)("div", {
            "data-button-hoisted-classname-wrapper": !0,
            className: SN.Cn,
            children: (0, p.jsx)(eA.$, {
                variant: "critical-secondary",
                size: "sm",
                text:
                    t.size > 0
                        ? g.intl.formatToPlainString(g.t["83CPLj"], { count: t.size })
                        : g.intl.string(g.t.cLmmeY),
                onClick: () => {
                    t.size > 0 ? (0, Sm.U0)(Array.from(t)) : (0, Sm.U0)(i.map((e) => e.id_hash));
                },
            }),
        }),
    });
}
function SI() {
    let { currentSession: e, otherSessions: t } = (0, Sh.r)(),
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
                                    Sb,
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
                            i?.mfaEnabled ? null : (0, p.jsx)(Sv, {}),
                        ],
                    }),
                    t.length > 0 &&
                        (0, p.jsx)("div", {
                            className: SN.wq,
                            children: (0, p.jsx)(S_, { checked: n, otherSessions: t }),
                        }),
                ],
            })
          : null;
}
function Sb(e) {
    let { session: t, current: i, setChecked: n, checked: s, useChecks: l } = e,
        { location: r, platform: a, os: o, Icon: u, lastActive: d } = Sp(t, i),
        c = [o, a].filter(t6.Vq),
        m = [r, d].filter(t6.Vq);
    return (0, p.jsxs)(
        "div",
        {
            className: ew()(SN.dZ, { [SN.gg]: i }),
            children: [
                (0, p.jsxs)("div", {
                    className: SN.OC,
                    children: [
                        (0, p.jsx)("div", {
                            className: SN.km,
                            children: (0, p.jsx)(u, { size: "md", color: "currentColor" }),
                        }),
                        (0, p.jsxs)("div", {
                            className: SN.F3,
                            children: [
                                (0, p.jsxs)(V.E, {
                                    variant: "eyebrow",
                                    className: SN.nT,
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
                                    className: SN.nT,
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
                                    className: SN.GR,
                                    children: (0, p.jsx)(SE.J, {
                                        onChange: (e) => {
                                            n?.(e);
                                        },
                                        checked: s,
                                    }),
                                })
                              : (0, p.jsx)(M.D, {
                                    className: SN.ux,
                                    onClick: (e) => {
                                        e.shiftKey ? n?.(!0) : (0, Sm.U0)(t.id_hash);
                                    },
                                    "aria-label": g.intl.string(g.t.E4MJNt),
                                    children: (0, p.jsx)(cU.P, { size: "md", color: "currentColor" }),
                                }),
                    ],
                }),
                !i && (0, p.jsx)(eE.c, { className: SN.O9 }),
            ],
        },
        t.id_hash,
    );
}
function Sv() {
    return (0, p.jsxs)("div", {
        className: ew()(SN.dZ, SN.EC),
        children: [
            (0, p.jsxs)("div", {
                className: SN.OC,
                children: [
                    (0, p.jsx)("div", { className: SN.km, children: (0, p.jsx)(Sx.A, { width: "32", height: "32" }) }),
                    (0, p.jsxs)("div", {
                        className: SN.F3,
                        children: [
                            (0, p.jsx)(V.E, {
                                variant: "eyebrow",
                                className: SN.nT,
                                color: "text-muted",
                                children: (0, p.jsx)("span", { children: g.intl.string(g.t.iUa0sn) }),
                            }),
                            (0, p.jsx)(V.E, {
                                variant: "text-sm/medium",
                                className: SN.nT,
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
            (0, p.jsx)("div", { className: SN.O9 }),
        ],
    });
}
var Sj = i(176524),
    Sy = i(583133);
function SO(e) {
    let { icon: t, label: i, subLabel: n, description: s, children: l, muted: r } = e;
    return (0, p.jsxs)(R.B, {
        direction: "horizontal",
        align: "center",
        gap: "sm",
        role: "listitem",
        children: [
            (0, p.jsx)(Sj.A, { Icon: t, color: r ? w.A.colors.ICON_MUTED : "currentColor" }),
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
                                    children: "•",
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
function SR(e) {
    let { session: t, current: i } = e,
        { location: n, platform: s, os: l, Icon: r, lastActive: a } = Sp(t, i),
        o = [n, a].filter(t6.Vq);
    return (0, p.jsx)(SO, {
        icon: r,
        label: l,
        subLabel: s,
        description: o.join(" \xb7 "),
        children:
            !i &&
            (0, p.jsx)(M.D, {
                className: Sy.X,
                onClick: () => (0, Sm.U0)(t.id_hash),
                "aria-label": g.intl.string(g.t.E4MJNt),
                children: (0, p.jsx)(cU.P, { size: "md", color: "currentColor" }),
            }),
    });
}
function SL(e) {
    let { title: t, children: i } = e,
        n = N.useId();
    return (0, p.jsxs)(R.B, {
        role: "group",
        "aria-labelledby": n,
        gap: "xl",
        padding: { top: 8, bottom: 8 },
        children: [
            (0, p.jsx)(eh.D, { id: n, variant: "heading-md/semibold", color: "text-muted", children: t }),
            (0, p.jsx)(R.B, { role: "list", gap: "xl", children: i }),
        ],
    });
}
function SD() {
    let { currentSession: e } = (0, Sh.r)();
    return null == e
        ? (0, p.jsx)(uP.y, {})
        : (0, p.jsx)(SL, { title: g.intl.string(g.t.LLS19o), children: (0, p.jsx)(SR, { session: e, current: !0 }) });
}
let SP = (0, o.E2)(u.X.SESSIONS_CURRENT_SESSION_SETTING, {
        Component: function () {
            return (0, Tw._A)("CurrentSessionSetting") ? (0, p.jsx)(SD, {}) : (0, p.jsx)(SC, {});
        },
        useSearchTerms: () => [],
    }),
    SG = (0, o.E2)(u.X.SESSIONS_LOGOUT_ALL_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = (0, Sh.r)();
            return (0, p.jsx)(sy.D, {
                label: g.intl.string(g.t.Vij32M),
                description: g.intl.string(g.t.OTXyaf),
                children: (0, p.jsx)(eA.$, {
                    onClick: () => (0, Sm.U0)(e.map((e) => e.id_hash)),
                    variant: "critical-primary",
                    size: "sm",
                    text: g.intl.string(g.t.cLmmeY),
                }),
            });
        },
        useSearchTerms: () => [g.intl.string(g.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = (0, Sh.r)();
            return e.length > 0;
        },
    });
function SU() {
    return (0, p.jsx)(SO, {
        icon: SA.W,
        label: g.intl.string(g.t.iUa0sn),
        description: g.intl.format(g.t["044+8i"], {
            onClick: () =>
                (0, ej.openUserSettings)(u.X.ACCOUNT_PANEL, { analyticsLocations: [eM.A.USER_SETTINGS_SESSIONS] }),
        }),
        muted: !0,
    });
}
function SM() {
    let { otherSessions: e } = (0, Sh.r)(),
        t = (0, O.bG)([t3.default], () => t3.default.getCurrentUser());
    return (0, p.jsxs)(SL, {
        title: g.intl.string(g.t.xx1MWc),
        children: [e.map((e) => (0, p.jsx)(SR, { session: e }, e.id_hash)), t?.mfaEnabled ? null : (0, p.jsx)(SU, {})],
    });
}
let SV = (0, o.E2)(u.X.SESSIONS_OTHER_SESSIONS_SETTING, {
        Component: function () {
            return (0, Tw._A)("OtherSessionsSetting") ? (0, p.jsx)(SM, {}) : (0, p.jsx)(SI, {});
        },
        useSearchTerms: () => [g.intl.string(g.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = (0, Sh.r)(),
                t = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.mfaEnabled);
            return e.length > 0 || !t;
        },
    }),
    Sk = (0, o.zZ)(u.X.SESSIONS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.mEndXM),
        useSubtitle: () => g.intl.string(g.t.b7ZpTM),
        initialize: () => {
            (0, Sm.GY)();
        },
        buildLayout: () => [SP, SV, SG],
        useSearchTerms: () => [
            g.intl.string(g.t["+1h0k/"]),
            g.intl.string(g.t.LLS19o),
            g.intl.string(g.t.xx1MWc),
            g.intl.string(g.t.lSWsrd),
        ],
    }),
    Sw = (0, o.zZ)(u.X.SESSIONS_CATEGORY, {
        useSearchTerms: () => [
            g.intl.string(g.t["+1h0k/"]),
            g.intl.string(g.t.LLS19o),
            g.intl.string(g.t.xx1MWc),
            g.intl.string(g.t.Vij32M),
            g.intl.string(g.t.lSWsrd),
        ],
        buildLayout: () => [SP, SV],
        initialize: () => (
            (0, Sm.GY)(),
            () => {
                (0, Sm.ZQ)();
            }
        ),
        useInlineNotice: function () {
            return N.useMemo(() => ({ type: ef.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: Sf }), []);
        },
    }),
    SB = (0, o.t_)(u.X.SESSIONS_PANEL, {
        useTitle: () => ((0, Tw._A)("SessionsPanel") ? g.intl.string(g.t.mEndXM) : g.intl.string(g.t["+1h0k/"])),
        useObscuredNotice: uL.L,
        buildLayout: () => ((0, Tw.pC)("SessionsPanel") ? [Sk] : [Sw]),
    }),
    SF = (0, o.i4)(u.X.SESSIONS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["+1h0k/"]),
        icon: SA.W,
        usePredicate: () => !(0, Tw._A)("SessionsPanel"),
        buildLayout: () => [SB],
    }),
    Sz = (0, o.t0)(u.X.ACCOUNT_SESSIONS_NESTED_PANEL, {
        buildLayout: () => [SB],
        usePredicate: () => (0, Tw._A)("AccountSessionsNestedPanel"),
        initialize: () => {
            (0, Sm.GY)();
        },
        useTrailingDecoration: () => ({
            type: ef.xn.TEXT,
            useText: () => {
                let { currentSession: e, otherSessions: t } = (0, Sh.r)(),
                    i = t.length + +(null != e);
                return i > 0 ? g.intl.formatToPlainString(g.t.G7zwOk, { count: i }) : g.intl.string(g.t.MKDeyL);
            },
        }),
    }),
    SY = (0, o.zZ)(u.X.ACCOUNT_AUTHENTICATION_CATEGORY, {
        useTitle: () => g.intl.string(g.t.pKSjEj),
        useInlineNotice: function () {
            return (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.mfaEnabled ?? !1)
                ? { type: ef.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: TF }
                : null;
        },
        buildLayout: () => [
            St,
            TJ,
            T0,
            T7,
            T2,
            T8,
            Sd,
            Sg,
            ...((0, Tw.pC)("AccountAuthenticationCategory") ? [Sz] : []),
        ],
    });
i(204925);
var SX = i(818348);
let SH = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0;
    (0, C.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([i.e("40933"), i.e("19623"), i.e("21007")]).then(i.bind(i, 888363));
            return (i) => (0, p.jsx)(t, { claimRequired: e, ...i });
        },
        { onCloseRequest: e ? SX.tE : null, onCloseCallback: t },
    );
};
var SK = i(876696),
    SW = i(36149),
    SZ = i(207560);
function Sq(e) {
    let t = (0, SZ.fk)(),
        i = (0, SW.b8)(),
        n = (0, SW.yM)(),
        s = (0, SW.Y2)();
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
var SQ = i(516761);
function SJ() {
    let e = g.intl.string(g.t.XxRj7f);
    return (0, p.jsxs)(V.E, {
        variant: "text-md/medium",
        children: [
            `${e} • `,
            g.intl.format(SQ.default.WM5adV, {
                handleOnHelpUrlHook: () => window.open(ta.A.getArticleURL(q.MVz.TIGGER_PAWTECT_LEARN_MORE), "_blank"),
            }),
        ],
    });
}
let S$ = (0, o.Tf)(u.X.ACCOUNT_INFO_AGE_GROUP_EDIT_SETTING, {
        usePredicate: () => Sq("edit"),
        useTitle: () => g.intl.string(g.t["/52UYy"]),
        useVariant: () => "secondary",
        useTrailingContent: () => ({ type: ef._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: SJ }),
        useLabel: () => g.intl.string(g.t.bt75uw),
        onClick: function () {
            (0, C.openModalLazy)(async () => {
                let { default: e } = await i.e("45361").then(i.bind(i, 151080));
                return (t) => (0, p.jsx)(e, { ...t });
            });
        },
    }),
    S0 = (0, o.E2)(u.X.ACCOUNT_INFO_AGE_GROUP_INFO_SETTING, {
        usePredicate: () => Sq("info"),
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
                            children: (0, p.jsx)(eA.$, {
                                onClick: SX.tE,
                                text: g.intl.string(g.t.bt75uw),
                                "aria-hidden": !0,
                            }),
                        }),
                    ],
                }),
            });
        },
    });
var S1 = i(139716),
    S2 = i(847599);
function S3() {
    return (0, SW.yM)() ? g.intl.string(g.t.sK0dmH) : g.intl.string(g.t.lKDPGA);
}
let S6 = (0, o.Tf)(u.X.ACCOUNT_INFO_AGE_GROUP_VERIFY_SETTING, {
        usePredicate: () => Sq("verify"),
        useTitle: () => g.intl.string(g.t["/52UYy"]),
        useVariant: () => "secondary",
        useTrailingContent: () => ({ type: ef._1.TEXT, useText: S3 }),
        useLabel: function () {
            return (0, SW.yM)() ? g.intl.string(g.t["9KiIz6"]) : g.intl.string(g.t.DVywUB);
        },
        onClick: () => S1.A.showAgeVerificationGetStartedModal({ entryPoint: S2.q1.ACCOUNT_AGE_GROUP }),
    }),
    S4 = (0, o.Tf)(u.X.ACCOUNT_INFO_CLAIM_ACCOUNT_SETTING, {
        usePredicate: () => {
            let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser());
            return null != e && !e.isClaimed();
        },
        useTitle: () => g.intl.string(g.t.tlZllC),
        useVariant: () => "secondary",
        useTrailingContent: () => ({ type: ef._1.TEXT, useText: () => g.intl.string(g.t.qxk9zo) }),
        useLabel: () => g.intl.string(g.t.BleMPB),
        onClick: () => SH(),
    });
function S5(e) {
    return `${"*".repeat(e.length - 4)}${e.slice(-4)}`;
}
function S8(e) {
    let [t, i] = e.split("@");
    return `${"*".repeat(t.length)}@${i}`;
}
function S7(e) {
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
function S9() {
    let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.email);
    return null == e
        ? (0, p.jsx)(V.E, { variant: "text-md/medium", children: g.intl.string(g.t["8SfTN/"]) })
        : (0, p.jsx)(S7, {
              text: e,
              censor: S8,
              revealLabel: g.intl.string(g.t["Zvx+yV"]),
              hideLabel: g.intl.string(g.t.nqTD4d),
              redesign: !0,
          });
}
let pe = (0, o.Tf)(u.X.ACCOUNT_INFO_EMAIL_SETTING, {
    usePredicate: () => (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => g.intl.string(g.t.tlZllC),
    useVariant: () => "secondary",
    useTrailingContent: () => ({ type: ef._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: S9 }),
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
        (0, C.openModalLazy)(async () => {
            let { default: e } = await Promise.all([i.e("28450"), i.e("20577"), i.e("76660")]).then(i.bind(i, 121343));
            return (t) => (0, p.jsx)(e, { ...t });
        });
    },
});
function pt() {
    let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
        t = e?.phone ?? null;
    return null == e || null == t
        ? (0, p.jsx)(V.E, { variant: "text-md/medium", children: g.intl.string(g.t.I5kDqj) })
        : (0, p.jsx)(R.B, {
              direction: "horizontal",
              align: "center",
              justify: "end",
              gap: "md",
              children: (0, p.jsx)(S7, {
                  text: t,
                  censor: S5,
                  revealLabel: g.intl.string(g.t.eY3xlT),
                  hideLabel: g.intl.string(g.t["jllbv+"]),
                  redesign: !0,
              }),
          });
}
let pi = (0, o.Tf)(u.X.ACCOUNT_INFO_PHONE_SETTING, {
    usePredicate: () => (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => g.intl.string(g.t.kerONq),
    useAriaLabel: function () {
        return null == (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.phone)
            ? g.intl.string(g.t["SfUuE+"])
            : g.intl.string(g.t.YDabSe);
    },
    useVariant: () => "secondary",
    useTrailingContent: () => ({ type: ef._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: pt }),
    useLabel: function () {
        return null == (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.phone)
            ? g.intl.string(g.t.OYkgVk)
            : g.intl.string(g.t.bt75uw);
    },
    onClick: function () {
        null == t3.default.getCurrentUser()?.phone
            ? (0, C.openModalLazy)(
                  async () => {
                      let { default: e } = await Promise.resolve().then(i.bind(i, 615715));
                      return (t) => (0, p.jsx)(e, { reason: Si.d.USER_SETTINGS_UPDATE, ...t });
                  },
                  { modalKey: So.V },
              )
            : (0, C.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([i.e("36874"), i.e("89061")]).then(i.bind(i, 359012));
                  return (t) => (0, p.jsx)(e, { ...t });
              });
    },
});
function pn() {
    let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser());
    return null != e && !e.isClaimed();
}
function ps() {
    let e = (0, ER.EC)(),
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
                    children: (0, p.jsx)(lv.E, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: w.A.colors.STATUS_WARNING.css,
                    }),
                }),
        ],
    });
}
let pl = (0, o.Tf)(u.X.ACCOUNT_INFO_USERNAME_SETTING, {
        useTitle: () => g.intl.string(g.t.qqhR3L),
        useTrailingContent: () => ({ type: ef._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: ps }),
        useLabel: () => g.intl.string(g.t.bt75uw),
        useAriaLabel: () => g.intl.string(g.t.JECa91),
        useSubtitle: () => (pn() ? g.intl.string(g.t["7Ngnyr"]) : void 0),
        useVariant: () => "secondary",
        useDisabled: pn,
        onClick: function () {
            (0, C.openModalLazy)(async () => {
                let { default: e } = await Promise.all([i.e("2888"), i.e("20429"), i.e("13161")]).then(
                    i.bind(i, 331632),
                );
                return (t) => (0, p.jsx)(e, { ...t });
            });
        },
    }),
    pr = (0, o.zZ)(u.X.ACCOUNT_INFO_CATEGORY, {
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
                            button: { useText: () => g.intl.string(g.t.lm1UKt), onClick: () => (0, SK.S)(e) },
                        }
                  : {
                        type: ef.lT.INLINE_NOTICE,
                        noticeType: "critical",
                        useTitle: () => g.intl.string(g.t["/3qnL/"]),
                        useText: () => g.intl.string(g.t.qKs3vg),
                        button: { useText: () => g.intl.string(g.t["7psymi"]), onClick: () => SH() },
                    };
        },
        buildLayout: () => [pl, S4, pe, pi, S6, S$, S0],
    }),
    pa = (0, o.Tf)(u.X.AUTHENTICATOR_APP_DISABLE_BUTTON, {
        useTitle: () => g.intl.string(g.t.lQsY7B),
        useSubtitle: () => Sa(!0),
        useDisabled: () => null !== Sa(!0),
        useLabel: () => g.intl.string(g.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => {
            let e = (0, O.bG)([d0.default], () => d0.default.hasTOTPEnabled()),
                t = Sr() === Sl.AVAILABLE;
            return e && t;
        },
        onClick: () =>
            void (0, se.A)({
                title: g.intl.string(g.t["D+aE7g"]),
                subtitle: g.intl.string(g.t.EA4ZEk),
                variant: "critical",
                confirmText: g.intl.string(g.t.N86XcP),
                onConfirm: () => TB.A.disable(),
            }),
    }),
    po = (0, o.zZ)(u.X.AUTHENTICATOR_APP_CATEGORY, {
        useTitle: () => g.intl.string(g.t.RumMFo),
        useSubtitle: () => g.intl.string(g.t.iTbTo7),
        useHeaderDecoration: function () {
            let e = (0, O.bG)([d0.default], () => d0.default.hasTOTPEnabled()),
                t = Sr() === Sl.AVAILABLE;
            if (!e && t)
                return {
                    type: ef.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: ef.UV.BUTTON,
                            id: "mfa-setup-button",
                            text: g.intl.string(g.t.cTNUeD),
                            onClick: TW.Ay.enableMFA,
                        },
                    ],
                };
        },
        useInlineNotice: function () {
            switch (Sr()) {
                case Sl.UNAVAILABLE_NO_CRYPTO:
                    return { type: ef.lT.INLINE_NOTICE, noticeType: "info", useText: () => g.intl.string(g.t.PhHhsj) };
                case Sl.UNAVAILABLE_UNVERIFIED:
                    return {
                        type: ef.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        useText: () => g.intl.string(g.t.uggF7o),
                    };
                case Sl.AVAILABLE:
                    return;
            }
        },
        collapseOnEmpty: !1,
        buildLayout: () => [pa],
    });
var pu = i(32880),
    pd = i(663417);
function pc() {
    (0, C.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(i.bind(i, 662758));
        return (t) =>
            (0, p.jsx)(e, {
                ...t,
                handleSubmit: (e) =>
                    TB.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                        var t;
                        return (
                            (t = e),
                            void (0, C.openModalLazy)(
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
var pg = i(526122);
function pm(e) {
    return `${e.slice(0, 4)}-${e.slice(4)}`;
}
async function ph() {
    let e = Tz.A.getVerificationKey();
    try {
        await TB.A.confirmViewBackupCodes(e, !0);
    } catch (e) {
        (0, A0.P0)({
            message: e.body?.message ?? g.intl.string(g.t.F8FvUy),
            type: A2.Ck.FAILURE,
            id: "backup-code-regen-failed",
        });
    }
}
function pA(e) {
    let {
            code: { code: t, consumed: i },
        } = e,
        n = pm(t),
        s = N.useRef(null),
        l = (0, p.jsxs)(p.Fragment, {
            children: [(0, p.jsx)(T3.P, { checked: i }), (0, p.jsx)(V.E, { variant: "text-md/normal", children: n })],
        });
    return d4.p5
        ? (0, p.jsx)(M.D, {
              tag: "li",
              className: ew()(pg.aY, pg.vk),
              innerRef: s,
              onKeyDown: (e) => {
                  "c" === e.key &&
                      (e.metaKey || e.ctrlKey) &&
                      (e.preventDefault(), e.stopPropagation(), (0, d4.C)(n), s?.current?.focus());
              },
              onClick: () => {
                  (0, d4.C)(n),
                      (0, A0.P0)({ message: g.intl.string(g.t.mGZ66D), type: A2.Ck.SUCCESS, id: "backup-code-copied" });
              },
              children: l,
          })
        : (0, p.jsx)("li", { className: pg.aY, children: l });
}
let pE = (0, o.zZ)(u.X.BACKUP_CODES_CATEGORY, {
        useTitle: () => g.intl.string(g.t.fC9qV0),
        useSubtitle: () =>
            (0, O.bG)([Tz.A], () => Tz.A.getBackupCodes().length > 0)
                ? g.intl.format(g.t.tp7zEK, {})
                : g.intl.string(g.t.LoOi4S),
        usePredicate: T1,
        buildLayout: () => [px],
    }),
    px = (0, o.E2)(u.X.BACKUP_CODES_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t.fC9qV0)],
        Component: function () {
            let e = (0, O.bG)([Tz.A], () => Tz.A.getBackupCodes()),
                t = N.useMemo(
                    () =>
                        e
                            .map((e) => {
                                let { code: t, consumed: i } = e;
                                return `* ${pm(t)}` + (i ? ` (${g.intl.string(g.t["ycME+9"])})` : "");
                            })
                            .join("\r\n"),
                    [e],
                );
            return 0 === e.length
                ? (0, p.jsx)(eA.$, { text: g.intl.string(g.t.Jc2myK), size: "sm", variant: "secondary", onClick: pc })
                : (0, p.jsxs)(p.Fragment, {
                      children: [
                          (0, p.jsx)("ul", {
                              className: pg.E5,
                              children: e.map((e) => (0, p.jsx)(pA, { code: e }, e.code)),
                          }),
                          (0, p.jsxs)(ax.e, {
                              size: "sm",
                              children: [
                                  (0, p.jsx)(TX.A, {
                                      fileContents: t,
                                      contentType: "text/plain",
                                      fileName: "discord_backup_codes.txt",
                                      children: (0, p.jsx)(eA.$, {
                                          text: g.intl.string(g.t["OO+Nib"]),
                                          variant: "secondary",
                                          icon: pu.s,
                                      }),
                                  }),
                                  (0, p.jsx)(eA.$, {
                                      text: g.intl.string(g.t["3x962E"]),
                                      variant: "secondary",
                                      icon: pd.f,
                                      onClick: ph,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
    }),
    pT = (0, o.Tf)(u.X.SMS_AUTH_DISABLE_BUTTON, {
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
        usePredicate: () => (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.hasFlag(q.nhx.MFA_SMS) ?? !1),
        onClick: () =>
            void (0, C.openModalLazy)(async () => {
                let { default: e } = await Promise.resolve().then(i.bind(i, 662758));
                return (t) =>
                    (0, p.jsx)(e, {
                        ...t,
                        handleSubmit: TB.A.disableSMS,
                        title: g.intl.string(g.t.KLWnit),
                        children: g.intl.string(g.t["W0/Duf"]),
                    });
            }),
    }),
    pS = (0, o.zZ)(u.X.SMS_AUTH_CATEGORY, {
        useTitle: () => g.intl.string(g.t.wuHuI5),
        useSubtitle: () => (0, O.bG)([t3.default], () => Ss(t3.default.getCurrentUser(), !0)),
        useHeaderDecoration: () => {
            let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()?.hasFlag(q.nhx.MFA_SMS) ?? !1),
                t = (0, O.bG)([t3.default], () => null != Ss(t3.default.getCurrentUser()));
            if (!e)
                return {
                    type: ef.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: ef.UV.BUTTON,
                            id: "sms-setup-button",
                            text: g.intl.string(g.t.Age7yU),
                            onClick: pp,
                            disabled: t,
                        },
                    ],
                };
        },
        collapseOnEmpty: !1,
        usePredicate: () => {
            let e = Sr(),
                t = T1(),
                i = (0, O.bG)([d0.default], () => d0.default.hasTOTPEnabled());
            return e === Sl.AVAILABLE && t && i;
        },
        buildLayout: () => [pT],
    });
function pp() {
    let e = t3.default.getCurrentUser();
    if (null != e)
        if (null == e.phone) {
            var t;
            (t = { reason: Si.d.USER_SETTINGS_UPDATE, onAddedPhone: TB.A.enableSMS }),
                (0, C.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.resolve().then(i.bind(i, 615715));
                        return (i) => (0, p.jsx)(e, { ...i, ...t });
                    },
                    { modalKey: So.V },
                );
        } else TB.A.enableSMS();
}
var pN = i(665671),
    pf = i(442433),
    pC = i(917136),
    p_ = i(976910),
    pI = i(551386);
function pb(e) {
    let { credential: t } = e;
    return (0, p.jsxs)("li", {
        className: pI.e,
        children: [
            (0, p.jsxs)("div", {
                children: [
                    (0, p.jsx)(V.E, { variant: "text-md/normal", children: t.name }),
                    null != t.last_used &&
                        (0, p.jsx)(V.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: g.intl.format(g.t["7JgxF5"], { lastUsed: (0, Sh.Y)(t.last_used) }),
                        }),
                ],
            }),
            (0, p.jsx)(lT.K, {
                icon: gU.j,
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
let pv = (0, o.zZ)(u.X.SECURITY_KEYS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.IBq4Y3),
        useSubtitle: () => g.intl.string(g.t.yK9edS),
        useHeaderDecoration: function () {
            if (Sr() === Sl.AVAILABLE)
                return {
                    type: ef.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: ef.UV.BUTTON,
                            id: "add-security-key-button",
                            text: g.intl.string(g.t["Tzs/fw"]),
                            icon: cO.j,
                            onClick: pN.A,
                        },
                    ],
                };
        },
        useInlineNotice: () =>
            (function () {
                switch (Sr()) {
                    case Sl.UNAVAILABLE_NO_CRYPTO:
                        return {
                            type: ef.lT.INLINE_NOTICE,
                            noticeType: "info",
                            useText: () => g.intl.string(g.t.bWCGI9),
                        };
                    case Sl.UNAVAILABLE_UNVERIFIED:
                        return {
                            type: ef.lT.INLINE_NOTICE,
                            noticeType: "warning",
                            useText: () => g.intl.string(g.t.uggF7o),
                        };
                    case Sl.AVAILABLE:
                        return;
                }
            })(),
        buildLayout: () => [pj],
    }),
    pj = (0, o.E2)(u.X.SECURITY_KEYS_LIST, {
        useSearchTerms: () => [g.intl.string(g.t.y7SXYX)],
        Component: function () {
            let { credentials: e, hasFetchedCredentials: t } = (0, O.cf)([p_.A], () => ({
                hasFetchedCredentials: p_.A.hasFetchedCredentials(),
                credentials: p_.A.getCredentials(),
            }));
            return (N.useEffect(() => {
                t || pC.JQ();
            }, [t]),
            t)
                ? (0, p.jsx)(R.B, {
                      direction: "vertical",
                      gap: "sm",
                      as: "ul",
                      children: e.map((e) => (0, p.jsx)(pb, { credential: e }, e.id)),
                  })
                : (0, p.jsx)(uP.y, {});
        },
    }),
    py = (0, o.t_)(u.X.MULTI_FACTOR_AUTHENTICATION, {
        useTitle: () => g.intl.string(g.t.m0FidJ),
        buildLayout: () => [pv, po, pS, pE],
    }),
    pO = (0, o.t0)(u.X.ACCOUNT_MFA_NESTED_PANEL, {
        useTrailingDecoration: () => ({
            type: ef.xn.TEXT,
            useText: () => (T1() ? g.intl.string(g.t.lQsY7B) : g.intl.string(g.t.WsUuTt)),
        }),
        buildLayout: () => [py],
    }),
    pR = (0, o.zZ)(u.X.ACCOUNT_PASSWORD_SECURITY_CATEGORY, {
        useTitle: () => g.intl.string(g.t["0iH2vc"]),
        buildLayout: () => [Se, pO, Sz],
    });
function pL(e) {
    let { currentUser: t } = e;
    return t.isClaimed()
        ? null == t.email
            ? null
            : t.verified
              ? void 0
              : (0, p.jsxs)(y.w, {
                    type: "warning",
                    children: [
                        (0, p.jsx)(eh.D, { variant: "heading-md/medium", children: g.intl.string(g.t.tuGzBT) }),
                        (0, p.jsx)(V.E, {
                            variant: "text-sm/normal",
                            className: T6.PA,
                            children: g.intl.string(g.t.NAzplE),
                        }),
                        (0, p.jsx)(SK.A, { size: "sm", variant: "secondary" }),
                    ],
                })
        : (0, p.jsxs)(y.w, {
              type: "critical",
              children: [
                  (0, p.jsx)(eh.D, { variant: "heading-md/medium", children: g.intl.string(g.t["/3qnL/"]) }),
                  (0, p.jsx)(V.E, { variant: "text-sm/normal", className: T6.PA, children: g.intl.string(g.t.qKs3vg) }),
                  (0, p.jsx)(eA.$, {
                      variant: "secondary",
                      size: "sm",
                      text: g.intl.string(g.t["7psymi"]),
                      onClick: () => SH(),
                  }),
              ],
          });
}
var pD = i(297413),
    pP = i(50268),
    pG = i(922301),
    pU = i(262),
    pM = i(68085),
    pV = i(915614),
    pk = i(475543);
let pw = st.Ay.getEnableHardwareAcceleration() ? iX.Js : iX.eu;
function pB(e) {
    let t = (0, Eh.X)("UserSettingsAccountProfileCard");
    return N.useCallback(() => {
        t ? (0, EE.openUserProfileModal)({ userId: e }) : (0, ej.openUserSettings)(u.X.PROFILE_PANEL);
    }, [t, e]);
}
function pF(e) {
    let { className: t, user: n } = e,
        s = N.useRef(null),
        l = (0, ER.EC)(),
        r = l?.nick?.[0] ?? null,
        [a, o] = N.useState(!1);
    N.useEffect(() => {
        o(null != s.current && s.current.scrollWidth > s.current.clientWidth);
    }, [n.username]);
    let u = !n.isClaimed(),
        d = u ? g.intl.string(g.t["7Ngnyr"]) : void 0;
    return (0, p.jsxs)("div", {
        className: ew()(pk.ZZ, t),
        children: [
            (0, p.jsx)("div", {
                className: pk.NQ,
                children: (0, p.jsxs)("div", {
                    className: pk.Fj,
                    children: [
                        (0, p.jsx)(V.E, {
                            variant: "text-md/medium",
                            className: pk.p9,
                            children: g.intl.string(g.t.qqhR3L),
                        }),
                        (0, p.jsxs)("div", {
                            className: pk.HR,
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
                    className: pk.a$,
                    children: (0, p.jsx)(e0.m, {
                        __unsupportedReactNodeAsText: r,
                        "aria-label": !1,
                        children: (0, p.jsx)(lv.E, {
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
                    className: pk.pr,
                    children: (0, p.jsx)(eA.$, {
                        variant: "secondary",
                        size: "sm",
                        text: a ? g.intl.string(g.t["16kTw/"]) : g.intl.string(g.t.bt75uw),
                        disabled: u,
                        "aria-label": g.intl.string(g.t.JECa91),
                        onClick: () =>
                            (0, C.openModalLazy)(async () => {
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
function pz(e) {
    let { user: t, className: i } = e,
        n = pB(t.id),
        s = (0, ER.EC)(),
        l = s?.nick?.[0] ?? null,
        r = xx.Ay.getGlobalName(t),
        a = N.useRef(null),
        [o, u] = N.useState(!1);
    return (
        N.useEffect(() => {
            u(null != a.current && a.current.scrollWidth > a.current.clientWidth);
        }, [r]),
        (0, p.jsxs)("div", {
            className: ew()(pk.ZZ, i),
            children: [
                (0, p.jsx)("div", {
                    className: pk.NQ,
                    children: (0, p.jsxs)("div", {
                        className: pk.Fj,
                        children: [
                            (0, p.jsx)(V.E, {
                                variant: "text-md/medium",
                                className: pk.p9,
                                children: g.intl.string(g.t["9AjdkD"]),
                            }),
                            (0, p.jsx)("div", {
                                className: pk.HR,
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
                        className: pk.a$,
                        children: (0, p.jsx)(e0.m, {
                            __unsupportedReactNodeAsText: l,
                            "aria-label": !1,
                            children: (0, p.jsx)(lv.E, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                color: w.A.colors.STATUS_WARNING.css,
                            }),
                        }),
                    }),
                (0, p.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: pk.pr,
                    children: (0, p.jsx)(eA.$, {
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
        { className: n, user: s } = e;
    if (s.isClaimed())
        if (null == s.email)
            t = {
                buttonText: g.intl.string(g.t.OYkgVk),
                buttonAriaLabel: g.intl.string(g.t["pvBD+W"]),
                valueMessage: g.intl.string(g.t["8SfTN/"]),
                handleClick: () =>
                    (0, C.openModalLazy)(async () => {
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
                valueMessage: (0, p.jsx)(S7, {
                    text: e,
                    censor: S8,
                    revealLabel: g.intl.string(g.t["Zvx+yV"]),
                    hideLabel: g.intl.string(g.t.nqTD4d),
                }),
                handleClick: () =>
                    (0, C.openModalLazy)(async () => {
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
            handleClick: () => SH(),
        };
    return (0, p.jsxs)("div", {
        className: ew()(pk.ZZ, n),
        children: [
            (0, p.jsx)("div", {
                className: pk.NQ,
                children: (0, p.jsxs)("div", {
                    children: [
                        (0, p.jsx)(V.E, {
                            variant: "text-md/medium",
                            className: pk.p9,
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
                className: pk.pr,
                children: (0, p.jsx)(eA.$, {
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
function pX(e) {
    let t,
        { className: n, user: s } = e;
    if (!s.isClaimed()) return null;
    let { phone: l, email: r } = s,
        a = null != l;
    return (
        (t = a
            ? (0, p.jsx)(S7, {
                  text: l,
                  censor: S5,
                  revealLabel: g.intl.string(g.t.eY3xlT),
                  hideLabel: g.intl.string(g.t["jllbv+"]),
              })
            : g.intl.string(g.t.I5kDqj)),
        (0, p.jsxs)("div", {
            className: ew()(pk.ZZ, n),
            children: [
                (0, p.jsx)("div", {
                    className: pk.NQ,
                    children: (0, p.jsxs)("div", {
                        children: [
                            (0, p.jsx)(V.E, {
                                variant: "text-md/medium",
                                className: pk.p9,
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
                    className: pk.PU,
                    children: [
                        a && null != r
                            ? (0, p.jsx)("div", {
                                  className: ew()(pk.pr, pk.DT),
                                  children: (0, p.jsx)(B.Q, {
                                      textVariant: "text-sm/medium",
                                      variant: "secondary",
                                      text: g.intl.string(g.t.N86XcP),
                                      "aria-label": g.intl.string(g.t.Rpn4A3),
                                      onClick: function () {
                                          (0, C.openModal)((e) =>
                                              (0, p.jsx)(TK.default, {
                                                  ...e,
                                                  title: g.intl.string(g.t["3CTiKi"]),
                                                  children: s.hasFlag(q.nhx.MFA_SMS)
                                                      ? g.intl.string(g.t.jrhJyo)
                                                      : void 0,
                                                  actionText: g.intl.string(g.t.N86XcP),
                                                  handleSubmit: (e) => Si.A.removePhone(e, Si.d.USER_SETTINGS_UPDATE),
                                              }),
                                          );
                                      },
                                  }),
                              })
                            : null,
                        (0, p.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: pk.pr,
                            children: (0, p.jsx)(eA.$, {
                                variant: "secondary",
                                size: "sm",
                                text: a ? g.intl.string(g.t.bt75uw) : g.intl.string(g.t.OYkgVk),
                                "aria-label": a ? g.intl.string(g.t.YDabSe) : g.intl.string(g.t["SfUuE+"]),
                                onClick: function () {
                                    (0, C.openModalLazy)(
                                        async () => {
                                            let { default: e } = await Promise.resolve().then(i.bind(i, 615715));
                                            return (t) => (0, p.jsx)(e, { reason: Si.d.USER_SETTINGS_UPDATE, ...t });
                                        },
                                        { modalKey: So.V },
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
function pH(e) {
    let { user: t } = e,
        i = (0, pP.A)({ id: t.id, label: g.intl.string(g.t["/AXYnE"]) }),
        n = c.Q_.useSetting(),
        s = N.useRef(null);
    return n && d4.p5
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
                      className: pk.SI,
                      "aria-label": g.intl.string(g.t.DEoVWZ),
                      children: (0, p.jsx)(gU.j, { size: "md", color: "currentColor", className: pk.D$ }),
                  }),
          })
        : null;
}
function pK(e) {
    let { className: t } = e,
        n = (0, SW.b8)(),
        s = (0, SW.yM)(),
        l = (0, SW.Y2)(),
        r = !n || s,
        a = g.intl.string(g.t["9KiIz6"]),
        o = g.intl.string(g.t.DVywUB),
        u = g.intl.string(g.t.lKDPGA),
        d = N.useCallback(() => {
            window.open(ta.A.getArticleURL(q.MVz.TIGGER_PAWTECT_LEARN_MORE), "_blank");
        }, []),
        c = N.useCallback(() => {
            (0, C.openModalLazy)(async () => {
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
                          ? g.intl.format(SQ.default.WM5adV, { handleOnHelpUrlHook: d })
                          : g.intl.string(g.t.XxRj7f)
                    : u,
            [n, s, l, u, d],
        ),
        h = n && !s && l;
    return (0, p.jsxs)("div", {
        className: ew()(pk.ZZ, t),
        children: [
            (0, p.jsx)("div", {
                className: pk.NQ,
                children: (0, p.jsxs)("div", {
                    children: [
                        (0, p.jsx)(V.E, {
                            variant: "text-md/medium",
                            className: pk.p9,
                            children: g.intl.string(g.t["/52UYy"]),
                        }),
                        (0, p.jsx)("div", {
                            children: (0, p.jsxs)(V.E, {
                                tag: "span",
                                color: "text-strong",
                                variant: "text-md/normal",
                                children: [l && n && !s ? `${g.intl.string(g.t.XxRj7f)} • ` : null, m],
                            }),
                        }),
                    ],
                }),
            }),
            h &&
                (0, p.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: pk.pr,
                    children: (0, p.jsx)(eA.$, {
                        variant: "secondary",
                        size: "sm",
                        text: g.intl.string(g.t.bt75uw),
                        "aria-label": g.intl.string(g.t.bt75uw),
                        onClick: c,
                    }),
                }),
            r &&
                !h &&
                (0, p.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: pk.pr,
                    children: (0, p.jsx)(eA.$, {
                        variant: "secondary",
                        size: "sm",
                        text: s ? a : o,
                        "aria-label": s ? a : o,
                        onClick: () => S1.A.showAgeVerificationGetStartedModal({ entryPoint: S2.q1.ACCOUNT_AGE_GROUP }),
                    }),
                }),
        ],
    });
}
function pW(e) {
    let { currentUser: t } = e,
        i = pB(t.id),
        n = (0, xr.Ay)(t.id),
        s = (0, pU.A)(n),
        l = c.jP.useSetting(),
        r = (0, O.bG)([Em.A], () => Em.A.getErrors()),
        a = r?.avatar?.[0],
        { avatarSrc: o, avatarDecorationSrc: u } = (0, EA.A)({ userId: t?.id, size: iH._3.SIZE_80 }),
        d = (0, SZ.fk)();
    return (0, p.jsxs)("div", {
        className: pk.DM,
        children: [
            (0, p.jsx)(pV.o, {
                user: t,
                displayProfile: n,
                avatarSize: iH._3.SIZE_80,
                avatarOffsetX: 16,
                avatarOffsetY: -22,
                bannerWidth: 696,
                bannerHeight: 100,
                themePadding: 0,
            }),
            (0, p.jsxs)("div", {
                className: pk.eF,
                children: [
                    (0, p.jsx)(pw, {
                        className: pk.my,
                        src: o,
                        avatarDecoration: u,
                        status: l,
                        size: iH._3.SIZE_80,
                        "aria-label": t.username,
                    }),
                    (0, p.jsxs)("div", {
                        children: [
                            (0, p.jsxs)("div", {
                                className: pk.Ib,
                                children: [
                                    (0, p.jsx)(pD.A, {
                                        user: t,
                                        className: pk.a1,
                                        discriminatorClass: pk.D2,
                                        displayNameStylesType: pG.G.STATIC,
                                    }),
                                    (0, p.jsx)(pH, { user: t }),
                                ],
                            }),
                            (0, p.jsx)(pM.A, { badges: s, className: pk.C_, badgeClassName: pk.qS }),
                        ],
                    }),
                    (0, p.jsx)(eA.$, {
                        variant: "primary",
                        size: "sm",
                        text: g.intl.string(g.t["2p2aYz"]),
                        onClick: i,
                    }),
                ],
            }),
            (0, p.jsxs)("div", {
                className: pk.Tp,
                children: [
                    null != a
                        ? (0, p.jsx)(V.E, {
                              className: pk.mx,
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              children: a,
                          })
                        : null,
                    (0, p.jsxs)("div", {
                        className: pk.FL,
                        children: [
                            (0, p.jsx)(pz, { className: pk.mS, user: t }),
                            (0, p.jsx)(pF, { user: t }),
                            (0, p.jsx)(pY, { className: pk.Zr, user: t }),
                            (0, p.jsx)(pX, { className: pk.Zr, user: t }),
                            d && (0, p.jsx)(pK, { className: pk.Zr }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
let pZ = (0, o.E2)(u.X.ACCOUNT_PROFILE_SETTING, {
        useSearchTerms: function () {
            let e = [
                    g.intl.string(g.t.LYju5J),
                    g.intl.string(g.t["9AjdkD"]),
                    g.intl.string(g.t["+JkHPw"]),
                    g.intl.string(g.t.oP5zGA),
                    g.intl.string(g.t.Ulqq6K),
                ],
                t = (0, SZ.fk)(),
                i = (0, SW.Y2)();
            return (
                t &&
                    (e.push(g.intl.string(g.t["/52UYy"])),
                    e.push(g.intl.string(g.t.sK0dmH)),
                    e.push(g.intl.string(g.t.XxRj7f)),
                    e.push(g.intl.string(g.t.DVywUB)),
                    e.push(g.intl.string(g.t["9KiIz6"])),
                    i &&
                        (e.push(g.intl.string(SQ.default.FTawSP)),
                        e.push(g.intl.string(SQ.default["bD//cU"])),
                        e.push(g.intl.string(SQ.default.SH6Tcv)))),
                e
            );
        },
        Component: function () {
            let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser());
            return (0, p.jsxs)(R.B, {
                gap: "md",
                children: [
                    null != e && (0, p.jsx)(pL, { currentUser: e }),
                    null != e && (0, p.jsx)(pW, { currentUser: e }),
                ],
            });
        },
    }),
    pq = (0, o.zZ)(u.X.ACCOUNT_PROFILE_CATEGORY, { buildLayout: () => [pZ] });
var pQ = i(656161);
function pJ(e) {
    let { currentUser: t, disabled: i, handleDisableAccount: n, handleDeleteAccount: s } = e,
        l = t.isClaimed();
    return (0, p.jsx)(sy.D, {
        label: g.intl.string(g.t.ZKsIks),
        description: l ? g.intl.string(g.t.TIh3Yj) : g.intl.string(g.t.czsGA8),
        children: (0, p.jsxs)(ax.e, {
            size: "sm",
            className: pQ.U,
            children: [
                l
                    ? (0, p.jsx)(eA.$, {
                          variant: "critical-primary",
                          size: "sm",
                          text: g.intl.string(g.t.jf5GGb),
                          disabled: i,
                          onClick: n,
                      })
                    : null,
                (0, p.jsx)(eA.$, {
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
var p$ = i(425587);
function p0(e) {
    if (e.body.code === q.t02.INVALID_PASSWORD) throw e;
    (0, ah.A)({ title: g.intl.string(g.t.LX0nT8), subtitle: e.body.message });
}
async function p1() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = t3.default.getCurrentUser();
    if (null == t) return;
    let i = [];
    try {
        i = (await p$.A.fetchTeams(!0)).body;
    } catch {}
    i.filter((e) => e.owner_user_id === t.id).length > 0
        ? (0, ah.A)({
              title: g.intl.string(g.t.UNGZDI),
              subtitle: g.intl.format(g.t.alpAUm, { devPortalLink: "https://discord.com/developers/teams" }),
          })
        : H.A.getGuildsArray().filter((e) => e.ownerId === t.id).length > 0
          ? (0, ah.A)({ title: g.intl.string(g.t.I5UrbV), subtitle: g.intl.string(g.t.UyVVan) })
          : t.isClaimed()
            ? (0, C.openModal)((t) =>
                  (0, p.jsx)(TK.default, {
                      ...t,
                      handleSubmit: (t) => (0, Ed.U_)(t, e).then(q.tEg, p0),
                      title: e ? g.intl.string(g.t["8lQ2rR"]) : g.intl.string(g.t.jf5GGb),
                      actionText: e ? g.intl.string(g.t["8lQ2rR"]) : g.intl.string(g.t.jf5GGb),
                      variant: "critical-primary",
                      children: e ? g.intl.string(g.t.FB4H1D) : g.intl.string(g.t.gk7h32),
                  }),
              )
            : (0, se.A)({
                  title: g.intl.string(g.t["8lQ2rR"]),
                  subtitle: g.intl.string(g.t.FB4H1D),
                  confirmText: g.intl.string(g.t["8lQ2rR"]),
                  onConfirm: () => (0, Ed.U_)("", !0),
              });
}
let p2 = (0, o.Tf)(u.X.ACCOUNT_DELETE_SETTING, {
        useTitle: () => g.intl.string(g.t["gIpzR+"]),
        useSubtitle: () => g.intl.string(g.t.Bd6dOf),
        useLabel: () => g.intl.string(g.t["8lQ2rR"]),
        useVariant: () => "critical-primary",
        onClick: () => p1(!0),
    }),
    p3 = (0, o.Tf)(u.X.ACCOUNT_DISABLE_SETTING, {
        useTitle: () => g.intl.string(g.t["p/Tjtp"]),
        useSubtitle: () => g.intl.string(g.t.YvDmKb),
        useLabel: () => g.intl.string(g.t.jf5GGb),
        useVariant: () => "critical-secondary",
        onClick: () => p1(!1),
        usePredicate: () => {
            let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser());
            return e?.isClaimed() ?? !1;
        },
    }),
    p6 = (0, o.zZ)(u.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [p3, p2] }),
    p4 = (0, o.E2)(u.X.ACCOUNT_REMOVAL_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t.ZKsIks), g.intl.string(g.t.jf5GGb), g.intl.string(g.t["8lQ2rR"])],
        Component: function () {
            let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser());
            return null == e
                ? null
                : (0, p.jsx)(pJ, {
                      currentUser: e,
                      handleDisableAccount: () => p1(!1),
                      handleDeleteAccount: () => p1(!0),
                  });
        },
    }),
    p5 = (0, o.zZ)(u.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [p4] });
var p8 = i(308645),
    p7 = i(271995),
    p9 = i(855267);
let Ne = (0, o.E2)(u.X.ACCOUNT_STANDING_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t["16r9jm"])],
        Component: p9.A,
    }),
    Nt = (0, o.zZ)(u.X.ACCOUNT_STANDING_NESTED_CATEGORY, { buildLayout: () => [Ne] }),
    Ni = (0, o.t_)(u.X.ACCOUNT_STANDING_PANEL, {
        useTitle: () => g.intl.string(g.t["16r9jm"]),
        buildLayout: () => [Nt],
    }),
    Nn = (0, o.t0)(u.X.ACCOUNT_STANDING_NESTED_PANEL, {
        useTitle: p7.$b,
        useSubtitle: p7.bh,
        useLeadingDecoration: function () {
            let { color: e, backgroundColor: t, Icon: i } = (0, p7._k)();
            return { type: ef.Xy.ICON, icon: i, color: e, backgroundColor: t };
        },
        initialize: () => {
            p8.Yn();
        },
        buildLayout: () => [Ni],
    }),
    Ns = (0, o.zZ)(u.X.ACCOUNT_STANDING_CATEGORY, {
        useTitle: () => g.intl.string(g.t["16r9jm"]),
        buildLayout: () => [Nn],
    }),
    Nl = (0, o.zZ)(u.X.ACCOUNT_STANDING_CATEGORY, { buildLayout: () => [Ne] });
var Nr = i(834981),
    Na = i(840387),
    No = i(177953),
    Nu = i(986922),
    Nd = i(602339);
let Nc = (0, o.E2)(u.X.FAMILY_CENTER_SETTING, {
        Component: Nu.p,
        useSearchTerms: () => [
            g.intl.string(Nd.default.RZqaJn),
            g.intl.string(Nd.default.bdBmqy),
            g.intl.string(Nd.default["gVWG+6"]),
            g.intl.string(Nd.default.ahKIJO),
            g.intl.string(Nd.default["8SLtqb"]),
        ],
    }),
    Ng = (0, o.zZ)(u.X.FAMILY_CENTER_CATEGORY, { buildLayout: () => [Nc] }),
    Nm = (0, o.t_)(u.X.FAMILY_CENTER_PANEL, {
        useTitle: () => g.intl.string(Nd.default.RZqaJn),
        buildLayout: () => [Ng],
    }),
    Nh = (0, o.i4)(u.X.FAMILY_CENTER_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(Nd.default.RZqaJn),
        icon: No.n,
        usePersistentBadge: function () {
            return N.useMemo(() => ({ badgeType: ef.Xi.COUNT, useCount: Nr.VT }), []);
        },
        getDismissibleBadges: function () {
            return [{ badgeType: ef.Xi.NEW, dismissibleContent: ex.M.FAMILY_CENTER_NEW_BADGE }];
        },
        buildLayout: () => [Nm],
    }),
    NA = (0, o.zZ)(u.X.ACCOUNT_FAMILY_CENTER_CATEGORY, {
        useTitle: () => g.intl.string(Nd.default.RZqaJn),
        buildLayout: () => [NE],
    }),
    NE = (0, o.t0)(u.X.ACCOUNT_FAMILY_CENTER_NESTED_PANEL, {
        useTitle: () => ((0, Nr.Li)() ? g.intl.string(Nd.default.IcMQUP) : g.intl.string(Nd.default["n8wrn/"])),
        useSubtitle: () => {
            let e = (0, Na.Z)(),
                t = (0, Nr.Li)();
            return e
                ? t
                    ? g.intl.string(Nd.default.G8lHFU)
                    : g.intl.string(Nd.default.uOLNEZ)
                : g.intl.string(Nd.default.Z53oSM);
        },
        buildLayout: () => [Nm],
    });
var Nx = (((a = {}).SECURITY = "SECURITY"), (a.STANDING = "STANDING"), a);
let NT = (0, o.dT)(u.X.ACCOUNT_STANDING_TAB, {
        getTitle: () => g.intl.string(g.t["Vov/9o"]),
        onItemSelect: () => {
            Y.default.track(q.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, { target_tab_name: Nx.STANDING });
        },
        buildLayout: () => [Nl],
    }),
    NS = (0, o.dT)(u.X.ACCOUNT_SECURITY_TAB, {
        getTitle: () => g.intl.string(g.t.Am9YHi),
        onItemSelect: () => {
            Y.default.track(q.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, { target_tab_name: Nx.SECURITY });
        },
        buildLayout: () => [pq, SY, p5],
    });
function Np() {
    let e = t3.default.getCurrentUser();
    return (
        null == e || (0, Tw.pC)("Account") || (0, xy.A)(e.id, e.getAvatarURL(void 0, 80)),
        () => {
            TB.A.clearBackupCodes(), (0, Ed.Uo)();
        }
    );
}
let NN = (0, o.t_)(u.X.ACCOUNT_PANEL, {
        useTitle: () => g.intl.string(g.t["JAIM/m"]),
        initialize: Np,
        useObscuredNotice: uL.L,
        buildLayout: () => [NS, NT],
    }),
    Nf = (0, o.t_)(u.X.ACCOUNT_PANEL, {
        useTitle: () => g.intl.string(g.t["ldCE/p"]),
        initialize: Np,
        useObscuredNotice: uL.L,
        buildLayout: () => [pr, pR, Ns, NA, p6],
    }),
    NC = (0, o.i4)(u.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => ((0, Tw.pC)("Account") ? g.intl.string(g.t["ldCE/p"]) : g.intl.string(g.t["JAIM/m"])),
        icon: m2.n,
        buildLayout: () => ((0, Tw.pC)("Account") ? [Nf] : [NN]),
    });
var N_ = i(323384),
    NI = i(824552),
    Nb = i(161236);
let Nv = (0, o.E2)(u.X.AUTHORIZED_APPS_LIST_SETTING, {
        Component: Nb.Ay,
        useSearchTerms: () => [g.intl.string(g.t["f6kk+r"])],
    }),
    Nj = (0, o.zZ)(u.X.AUTHORIZED_APPS_CATEGORY, {
        buildLayout: () => [Nv],
        initialize: () => (
            NI.A.fetch(),
            () => {
                Nb.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    Ny = (0, o.t_)(u.X.AUTHORIZED_APPS_PANEL, {
        useTitle: () => g.intl.string(g.t["f6kk+r"]),
        useObscuredNotice: uL.L,
        buildLayout: () => [Nj],
    }),
    NO = (0, o.i4)(u.X.AUTHORIZED_APPS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["f6kk+r"]),
        icon: N_.k,
        buildLayout: () => [Ny],
    });
var NR = i(176781),
    NL = i(611371);
let ND = () =>
    (0, p.jsx)(e0.m, { asContainer: !0, text: g.intl.string(g.t["/fgfWh"]), children: (0, p.jsx)(NL.A, {}) });
var NP = i(274372),
    NG = i(948138),
    NU = i(696016);
let NM = (() => {
        let e = [NU.wN];
        for (let t = 10; t <= NU.qh; t += 10) e.push(t);
        return e[e.length - 1] !== NU.qh && e.push(NU.qh), e;
    })(),
    NV = (0, o.sN)(u.X.CLIPS_AUTO_CLIP_STORAGE_LIMIT, {
        useTitle: () => g.intl.string(g.t.yfsrDI),
        useSubtitle: () => g.intl.string(g.t.vlDHdC),
        minValue: NU.wN,
        maxValue: NU.qh,
        getInitialValue: () => NP.A.getSettings().maxAutoClips,
        onValueRender: (e) => `${Math.floor(e)}`,
        asValueChanges: (e) => NG.e6(Math.floor(e)),
        markers: NM,
        onMarkerRender: (e) => `${Math.floor(e)}`,
    }),
    Nk = (0, o.zD)(u.X.CLIPS_ENABLE_GAME_SIGNALS, {
        useTitle: () => g.intl.string(g.t.iV6KcI),
        useSubtitle: () => g.intl.string(g.t["dJ2tX+"]),
        useValue: () => (0, O.bG)([NP.A], () => NP.A.getSettings().clipSignals.enableGameSignals),
        setValue: (e) => {
            let t = NP.A.getSettings().clipSignals;
            NG.PW({ ...t, enableGameSignals: e });
        },
    }),
    Nw = (0, o.zD)(u.X.CLIPS_ENABLE_PHRASE_SIGNALS, {
        useTitle: () => g.intl.string(g.t.nHsilt),
        useSubtitle: () => g.intl.string(g.t["s6wq+m"]),
        useValue: () => (0, O.bG)([NP.A], () => NP.A.getSettings().clipSignals.enablePhraseSignals),
        setValue: (e) => {
            let t = NP.A.getSettings().clipSignals;
            NG.PW({ ...t, enablePhraseSignals: e });
        },
    }),
    NB = (0, o.E2)(u.X.CLIPS_PHRASES, {
        useSearchTerms: () => [g.intl.string(g.t.JIze0o)],
        usePredicate: () => (0, O.bG)([NP.A], () => NP.A.getSettings().clipSignals).enablePhraseSignals,
        Component: function () {
            let e = (0, O.bG)([NP.A], () => NP.A.getSettings().autoClipPhrases),
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
                            s.length > 0 && !e.includes(s) && (NG.pM([...e, s]), i(""));
                        } else if ("Backspace" === n.key && "" === t && e.length > 0) {
                            let t = e.slice(0, -1);
                            NG.pM(t);
                        }
                    },
                    [t, e],
                ),
                r = N.useCallback(
                    (t) => {
                        let i = Array.from(t)[0],
                            n = e.filter((e) => e !== i);
                        NG.pM(n);
                    },
                    [e],
                );
            return (0, p.jsx)(lP.k, {
                value: t,
                onChange: s,
                onKeyDown: l,
                placeholder: g.intl.string(g.t.zYUZpt),
                leading: n.length > 0 ? { type: "tags", items: n, onRemove: r } : void 0,
            });
        },
    }),
    NF = (0, o.zZ)(u.X.CLIPS_AUTOMATIC_CLIPPING_CATEGORY, {
        useTitle: () => g.intl.string(g.t.sA0WKL),
        usePredicate: () => {
            let { enableAdvancedSignals: e } = l_.L_.useConfig({ location: "ClipsAutomaticClippingCategory" });
            return e;
        },
        buildLayout: () => [NV, Nk, Nw, NB],
    });
var Nz = i(753070);
let NY = (0, o.Hn)(u.X.CLIPS_FRAME_RATE, {
    useTitle: () => g.intl.string(g.t["2wScL1"]),
    useSubtitle: () => g.intl.string(g.t["Rf9+fy"]),
    useValue: () => (0, O.bG)([NP.A], () => NP.A.getSettings().clipsQuality.frameRate),
    setValue: (e) => {
        let { clipsQuality: t } = NP.A.getSettings();
        NG.GS({ resolution: t.resolution, frameRate: e });
    },
    useOptions: () => [
        { id: "15", value: Nz.kn.FPS_15, label: g.intl.formatToPlainString(g.t.Qb44XH, { fps: Nz.kn.FPS_15 }) },
        { id: "30", value: Nz.kn.FPS_30, label: g.intl.formatToPlainString(g.t.Qb44XH, { fps: Nz.kn.FPS_30 }) },
        { id: "60", value: Nz.kn.FPS_60, label: g.intl.formatToPlainString(g.t.Qb44XH, { fps: Nz.kn.FPS_60 }) },
    ],
});
var NX = i(372684);
let NH = (0, o.E2)(u.X.CLIPS_HARDWARE_CLASSIFICATION_WARNING, {
    useSearchTerms: () => [g.intl.string(g.t.SIxrIF)],
    usePredicate: () => (0, O.bG)([NP.A], () => NP.A.getHardwareClassification()) === NX.k9.BELOW_MINIMUM,
    Component: () => (0, p.jsx)(si.A, { look: si.k.WARNING, children: g.intl.string(g.t.SIxrIF) }),
});
var NK = i(239892);
let NW = (0, o.E2)(u.X.CLIPS_KEYBIND, {
        useSearchTerms: () => [g.intl.string(g.t.pf54EU), g.intl.string(g.t["QyB/jK"])],
        Component: () => {
            let e = (0, O.bG)([e_.Ay], () => e_.Ay.getKeybindForAction(q.hCu.SAVE_CLIP, !0));
            ty()(null != e, "Save clip keybind unset");
            let t = N.useCallback(
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
                    className: NK.g,
                    children: (0, p.jsx)(tR.A, { defaultValue: e.shortcut, onChange: t }),
                }),
            });
        },
    }),
    NZ = (0, o.Hn)(u.X.CLIPS_LENGTH, {
        useTitle: () => g.intl.string(g.t.OgfUio),
        useSubtitle: () => g.intl.string(g.t.H7j4tY),
        useValue: () => (0, O.bG)([NP.A], () => NP.A.getSettings().clipsLength),
        setValue: (e) => NG.h$(e),
        useOptions: () => [
            { id: "30s", value: NU.LX.SECONDS_30, label: g.intl.formatToPlainString(g.t["bTFv/3"], { count: 30 }) },
            { id: "1m", value: NU.LX.MINUTES_1, label: g.intl.formatToPlainString(g.t.ICo9Nk, { count: 1 }) },
            { id: "2m", value: NU.LX.MINUTES_2, label: g.intl.formatToPlainString(g.t.ICo9Nk, { count: 2 }) },
        ],
    }),
    Nq = (0, o.E2)(u.X.CLIPS_QUALITY_INFOBOX, {
        useSearchTerms: () => [g.intl.string(g.t["Z+MfqT"])],
        Component: () => (0, p.jsx)(si.A, { look: si.k.INFO, children: g.intl.string(g.t["Z+MfqT"]) }),
    }),
    NQ = (0, o.Hn)(u.X.CLIPS_RESOLUTION, {
        useTitle: () => g.intl.string(g.t.aFudZJ),
        useSubtitle: () => g.intl.string(g.t.nIrkW5),
        useValue: () => (0, O.bG)([NP.A], () => NP.A.getSettings().clipsQuality.resolution),
        setValue: (e) => {
            let { clipsQuality: t } = NP.A.getSettings();
            NG.GS({ resolution: e, frameRate: t.frameRate });
        },
        useOptions: () => [
            {
                id: "480p",
                value: Nz.on.RESOLUTION_480,
                label: g.intl.formatToPlainString(g.t.TEOC0I, { resolution: Nz.on.RESOLUTION_480 }),
            },
            {
                id: "720p",
                value: Nz.on.RESOLUTION_720,
                label: g.intl.formatToPlainString(g.t.TEOC0I, { resolution: Nz.on.RESOLUTION_720 }),
            },
            {
                id: "1080p",
                value: Nz.on.RESOLUTION_1080,
                label: g.intl.formatToPlainString(g.t.TEOC0I, { resolution: Nz.on.RESOLUTION_1080 }),
            },
            {
                id: "1440p",
                value: Nz.on.RESOLUTION_1440,
                label: g.intl.formatToPlainString(g.t.TEOC0I, { resolution: Nz.on.RESOLUTION_1440 }),
            },
            { id: "source", value: Nz.on.RESOLUTION_SOURCE, label: g.intl.string(g.t.XjXqzh) },
        ],
    }),
    NJ = (0, o.E2)(u.X.CLIPS_SCREENSHOT_KEYBIND, {
        useSearchTerms: () => [g.intl.string(g.t["0U/hj7"]), g.intl.string(g.t["5zxkdo"])],
        usePredicate: l_.BW,
        Component: () => {
            let e = (0, O.bG)([e_.Ay], () => e_.Ay.getKeybindForAction(q.hCu.SAVE_CLIP, !0)),
                t = (0, O.bG)([e_.Ay], () => e_.Ay.getKeybindForAction(q.hCu.SAVE_SCREENSHOT, !0));
            ty()(null != e, "Save clip keybind unset"), ty()(null != t, "Save screenshot keybind unset");
            let i = N.useCallback(
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
                    className: NK.g,
                    children: (0, p.jsx)(tR.A, { defaultValue: t.shortcut, onChange: i }),
                }),
            });
        },
    }),
    N$ = (0, o.E2)(u.X.CLIPS_STORAGE_LOCATION, {
        useSearchTerms: () => [g.intl.string(g.t.s4773E), g.intl.string(g.t.svjwGh)],
        Component: () => {
            let e = (0, O.bG)([NP.A], () => NP.A.getSettings().storageLocation),
                t = N.useRef(!1),
                i = async () => {
                    if (!t.current) {
                        t.current = !0;
                        try {
                            let e = await s2.A.fileManager.showOpenDialog({
                                properties: ["openDirectory", "createDirectory"],
                            });
                            e.length > 0 && NG.HU(e[0]);
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
                    children: (0, p.jsx)(lP.k, { tabIndex: -1, value: e, editable: !1, "aria-hidden": !0 }),
                }),
            });
        },
    });
var N0 = i(572164);
let N1 = (0, o.zD)(u.X.CLIPS_ENABLE, {
    useTitle: () => g.intl.string(g.t.h8rgrK),
    useSubtitle: () => g.intl.string(g.t["4Qw3NO"]),
    useValue: () => (0, N0.Et)(),
    setValue: (e) => NG.yO({ clipsEnabled: e, trackAnalytics: !0 }),
});
var N2 = i(915618);
let N3 = (0, o.zD)(u.X.CLIPS_ENABLE_DECOUPLED_CLIPPING, {
        useTitle: () => g.intl.string(g.t.yXvykv),
        useSubtitle: () => g.intl.string(g.t.YP3ujk),
        useValue: N0.XT,
        setValue: (e) => NG.fd({ enabled: e, trackAnalytics: !0 }),
        usePredicate: () => {
            let e = (0, ev.isWindows)(),
                t = (0, N2.A)(lj.Ay);
            return e && t;
        },
    }),
    N6 = (0, o.zD)(u.X.CLIPS_ENABLE_REMINDERS, {
        useTitle: () => g.intl.string(g.t["3zwNf6"]),
        useSubtitle: () => g.intl.string(g.t.m4Cjj9),
        useValue: () => (0, O.bG)([NP.A], () => NP.A.getSettings().remindersEnabled),
        setValue: (e) => NG.Mt(e),
    }),
    N4 = (0, o.zZ)(u.X.CLIPS_RECORDING_CATEGORY, {
        useTitle: () => g.intl.string(g.t.iIwmV5),
        buildLayout: () => [Nq, NH, N1, N3, N6, NZ, NQ, NY, NW, NJ, N$],
    }),
    N5 = (0, o.t_)(u.X.CLIPS_PANEL, {
        useTitle: () => g.intl.string(g.t.z2jK6X),
        usePersistentBadge: () => ({
            badgeType: ef.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            useCustomBadge: () => (0, p.jsx)(ND, {}),
        }),
        usePredicate: l_.sw,
        buildLayout: () => [N4, NF],
    }),
    N8 = (0, o.i4)(u.X.CLIPS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.z2jK6X),
        icon: NR.x,
        buildLayout: () => [N5],
    });
var N7 = i(187322),
    N9 = i(77468),
    fe = i(289498),
    ft = i(573648),
    fi = i(941314),
    fn = i(874490),
    fs = i(370480),
    fl = i(773952);
let fr = new Set([q.fg2.XBOX, q.fg2.PLAYSTATION, q.fg2.PLAYSTATION_STAGING, q.fg2.CRUNCHYROLL]);
var fa = i(169869),
    fo = i(30370);
let fu = (0, E.mj)({
    name: "2026-03-crepe",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var fd = i(674567),
    fc = i(237146);
i(594387);
var fg = i(34934);
function fm() {
    let e,
        t,
        n,
        s,
        { variant: l, showFooter: r } =
            ((e = (0, fd.V)()),
            (t = (function (e) {
                let { enabled: t } = fu.useConfig({ location: e });
                return t;
            })("connectedAccountsBannerFooter")),
            (s = null != (n = (0, O.bG)([fo.A], () => fo.A.getAccount(null, q.fg2.XBOX))) && !n.revoked),
            e === fd.s.NONE || e === fd.s.FREE_FRACTIONAL_NITRO || (e === fd.s.NON_NITRO && 0)
                ? { variant: fd.s.NONE, showFooter: !1 }
                : { variant: e, showFooter: t && e === fd.s.NON_NITRO && !s }),
        { analyticsLocations: a } = (0, nG.Ay)(eM.A.XBOX_CONNECTED_ACCOUNTS_BANNER);
    if (l === fd.s.NONE) return null;
    let o = "",
        u = null;
    return (
        l === fd.s.NITRO
            ? ((o = g.intl.string(fc.default["+QAvQz"])),
              (u = (0, p.jsx)(eA.$, {
                  variant: "secondary",
                  size: "sm",
                  text: g.intl.string(fc.default.CubeLC),
                  onClick: () => {
                      (0, C.openModalLazy)(async () => {
                          let { default: e } = await Promise.all([i.e("16848"), i.e("77632")]).then(i.bind(i, 836291));
                          return (t) => (0, p.jsx)(e, { ...t });
                      });
                  },
              })))
            : l === fd.s.NON_NITRO &&
              ((o = g.intl.string(fc.default.NwkRTZ)),
              (u = (0, p.jsx)(sA.A, {
                  fullWidth: !0,
                  defaultTextOverride: g.intl.string(fc.default["0vY+ie"]),
                  variantOverride: "overlay-primary",
                  size: "sm",
                  subscriptionTier: sN.pe.TIER_2,
              }))),
        (0, p.jsxs)(nG.f5, {
            value: a,
            children: [
                (0, p.jsxs)("div", {
                    className: fg.bV,
                    children: [
                        (0, p.jsx)(eh.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: g.intl.string(g.t.NG1e6l),
                        }),
                        (0, p.jsx)(o_.t, { size: "xs", color: "var(--icon-default)" }),
                    ],
                }),
                (0, p.jsx)(tQ.N, {
                    theme: "dark",
                    children: (e) =>
                        (0, p.jsx)("div", {
                            className: e,
                            children: (0, p.jsxs)("div", {
                                className: fg.Nr,
                                style: {
                                    backgroundImage:
                                        "url(https://cdn.discordapp.com/assets/content/6f39ba0aa00a9877bcb4bc67862335d29c21749762ec29fd0248ba734bc2c4b8.png)",
                                },
                                children: [
                                    (0, p.jsx)("div", { className: fg.$h }),
                                    (0, p.jsx)("div", { className: fg.Lw }),
                                    (0, p.jsxs)("div", {
                                        className: fg.Qs,
                                        children: [
                                            (0, p.jsx)("img", {
                                                className: fg.wm,
                                                src: "https://cdn.discordapp.com/assets/content/f3a967ffa662e944346571ea7f2b30b2e40745e2edca294519fbddf971e81fb1.png",
                                                alt: "Xbox Game Pass",
                                            }),
                                            (0, p.jsx)(V.E, {
                                                variant: "text-sm/semibold",
                                                color: "text-strong",
                                                className: fg.DD,
                                                children: o,
                                            }),
                                            (0, p.jsx)("div", { className: fg.lO, children: u }),
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
var fh = i(201718),
    fA = i(321078),
    fE = i(672130),
    fx = i(546183),
    fT = i(379848),
    fS = i(950018);
let fp = (e) => {
        let { markAsDismissed: t } = e;
        return (
            N.useEffect(() => t(t7.i.UNKNOWN), [t]),
            (0, p.jsx)(n8.Lp, { className: fS.Ad, text: g.intl.string(g.t.y2b7CA) })
        );
    },
    fN = (e) => {
        let { title: t, body: i, img: n, newIndicatorDismissibleContent: s, onClick: l } = e;
        return (0, p.jsxs)("div", {
            className: fS.kL,
            children: [
                n,
                (0, p.jsxs)("div", {
                    className: fS.FS,
                    children: [
                        (0, p.jsxs)("div", {
                            className: fS.TK,
                            children: [
                                (0, p.jsx)(fT.Ay, {
                                    contentTypes: [s],
                                    children: (e) => {
                                        let { visibleContent: t, markAsDismissed: i } = e;
                                        return t === s ? (0, p.jsx)(fp, { markAsDismissed: i }) : null;
                                    },
                                }),
                                (0, p.jsx)(V.E, { variant: "text-md/semibold", children: t }),
                            ],
                        }),
                        (0, p.jsx)(V.E, { variant: "text-xs/normal", children: i }),
                    ],
                }),
                (0, p.jsx)(eA.$, { text: g.intl.string(g.t.vD60Pv), onClick: l }),
            ],
        });
    },
    ff = () => {
        let e = ta.A.getArticleURL(q.MVz.PS_CONNECTION);
        return (0, p.jsx)(fN, {
            title: g.intl.string(g.t.v20wwm),
            body: g.intl.format(g.t.lTZBit, { help_article: e }),
            img: (0, p.jsx)("img", { src: "/assets/88954903b6a5b9cc.svg", width: "82", height: "auto", alt: "" }),
            newIndicatorDismissibleContent: ex.M.PS_ONE_WAY_RECONNECT,
            onClick: () => (0, fl.A)({ platformType: q.fg2.PLAYSTATION, location: "PS two way upsell" }),
        });
    },
    fC = () => {
        let e = ta.A.getArticleURL(q.MVz.XBOX_CONNECTION);
        return (0, p.jsx)(fN, {
            title: g.intl.string(g.t["2okkZV"]),
            body: g.intl.format(g.t.OnERSS, { help_article: e }),
            img: (0, p.jsx)("img", { src: "/assets/9df988a227916145.png", width: "auto", height: "45", alt: "" }),
            newIndicatorDismissibleContent: ex.M.XBOX_ONE_WAY_RECONNECT,
            onClick: () => (0, fl.A)({ platformType: q.fg2.XBOX, location: "Xbox two way upsell" }),
        });
    };
var f_ = i(783419),
    fI = i(534952),
    fb = i(838251);
let fv = (e) => {
    let t,
        { integration: i } = e,
        {
            isJoining: n,
            joinErrorMessage: s,
            showJoinErrorMessage: l,
        } = (0, O.cf)(
            [fo.A],
            () => ({
                isJoining: fo.A.isJoining(i.id),
                joinErrorMessage:
                    "" === fo.A.joinErrorMessage(i.id) ? g.intl.string(g.t.j2d6Km) : fo.A.joinErrorMessage(i.id),
                showJoinErrorMessage: void 0 !== fo.A.joinErrorMessage(i.id),
            }),
            [i.id],
        );
    return (
        null != (0, O.bG)([H.A], () => H.A.getGuild(i.guild.id), [i.guild.id]) ||
            (t = (0, p.jsx)(eA.$, {
                size: "sm",
                onClick: function () {
                    N9.A.joinServer(i.id, () => {});
                },
                disabled: n,
                variant: "primary",
                text: n ? g.intl.string(g.t.RXvQQu) : g.intl.string(g.t.XpeFYr),
            })),
        (0, p.jsxs)("div", {
            className: fb.iA,
            children: [
                (0, p.jsxs)("div", {
                    className: fb.XX,
                    children: [
                        (0, p.jsx)(c8.Ay, { size: c8.Ay.Sizes.SMALL, guild: i.guild, className: fb.$f }),
                        (0, p.jsxs)("div", {
                            className: fb.Vn,
                            children: [
                                (0, p.jsx)(V.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: i.guild.name,
                                }),
                                (0, p.jsx)(uE.Anchor, {
                                    href: ft.A.get(i.type)?.getPlatformUserUrl?.(i.account),
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
                        className: fb.R,
                        children: s,
                    }),
            ],
        })
    );
};
function fj(e) {
    let t,
        i,
        n,
        s,
        l,
        r,
        a,
        { onDisconnect: o, account: u, theme: d, locale: c } = e,
        [m, h] = N.useState(u.friendSync),
        [A, E] = N.useState(u.visibility),
        [x, T] = N.useState(u.metadataVisibility),
        [S, f] = N.useState(u.showActivity),
        [_, I] = N.useState(null),
        [b, v] = N.useState(null),
        [j, y] = N.useState(!1),
        [O, R] = N.useState([]),
        D = (0, fn.ML)(u.type),
        P = ft.A.get(D);
    N.useEffect(() => {
        h(u.friendSync), E(u.visibility), T(u.metadataVisibility), f(u.showActivity);
    }, [u]);
    let G = { inProgressVisibility: _, inProgressMetadataVisibility: b },
        U = N.useRef(G);
    return (
        N.useEffect(() => {
            U.current = G;
        }),
        N.useEffect(() => {
            if (!1 === u.verified) return;
            let { inProgressVisibility: e, inProgressMetadataVisibility: t } = U.current;
            null != e && (E(e), N9.A.setVisibility(u.type, u.id, e), I(null)),
                null != t && (T(t), N9.A.setMetadataVisibility(u.type, u.id, t), v(null));
        }, [u]),
        (0, p.jsxs)("div", {
            className: fb.FI,
            children: [
                ((t = ft.A.get(u.type)),
                (i = ft.A.get(D)),
                (n = "1" === (u.metadata ?? {})[f_.pK.TWITTER_VERIFIED]),
                (s = null),
                t.type === q.fg2.TWITTER &&
                    n &&
                    (s = (0, p.jsx)(e0.m, {
                        text: g.intl.string(g.t.Jebrww),
                        children: (0, p.jsx)(e7.A, {
                            color: w.A.unsafe_rawColors.PLATFORM_TWITTER.css,
                            children: (0, p.jsx)(e1.U, { size: "xs", color: w.A.unsafe_rawColors.WHITE.css }),
                        }),
                    })),
                (0, p.jsxs)("div", {
                    className: fb.Il,
                    children: [
                        (0, p.jsx)("img", {
                            alt: i.name,
                            className: fb.gj,
                            src: (0, cP.M)(d) ? i.icon.darkSVG : i.icon.lightSVG,
                        }),
                        (0, p.jsxs)("div", {
                            children: [
                                (0, p.jsxs)("div", {
                                    className: fb.$p,
                                    children: [
                                        (0, p.jsx)(V.E, {
                                            color: "text-strong",
                                            variant: "text-md/semibold",
                                            className: fb.RW,
                                            children: u.name,
                                        }),
                                        null != s && (0, p.jsx)("div", { className: fb.cG, children: s }),
                                    ],
                                }),
                                (0, p.jsx)(V.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: fb.Au,
                                    children: i.name,
                                }),
                            ],
                        }),
                        (0, p.jsx)(M.D, {
                            className: fb.uH,
                            onClick: function () {
                                let e = ft.A.get(u.type);
                                (0, C.openModal)((t) =>
                                    (0, p.jsx)(lD.Modal, {
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
                                            fr.has(u.type) &&
                                            u.twoWayLink &&
                                            (0, p.jsx)(si.A, {
                                                children: g.intl.format(g.t.COW3Xn, { platformName: e.name }),
                                            }),
                                    }),
                                );
                            },
                            "aria-label": g.intl.string(g.t.ppppRJ),
                            focusProps: { offset: { top: -4, left: -4, right: -4 } },
                            children: (0, p.jsx)(cU.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                })),
                u.twoWayLink
                    ? null
                    : u.type === q.fg2.XBOX
                      ? (0, p.jsx)(fC, {})
                      : u.type === q.fg2.PLAYSTATION
                        ? (0, p.jsx)(ff, {})
                        : null,
                (function (e) {
                    let t = e.metadata ?? {},
                        i = null,
                        n = (0, fs.An)(t[f_.pK.CREATED_AT], c);
                    switch (e.type) {
                        case q.fg2.REDDIT:
                            i = (0, fa.xE)(t, fb.Nz);
                            break;
                        case q.fg2.STEAM:
                            i = (0, fa.dy)(t, fb.Nz);
                            break;
                        case q.fg2.BLUESKY:
                        case q.fg2.TWITTER:
                        case q.fg2.MASTODON:
                            i = (0, fa.ED)(t, fb.Nz);
                            break;
                        case q.fg2.EBAY:
                            i = (0, fa.ub)(t, fb.Nz);
                            break;
                        case q.fg2.PAYPAL:
                            i = (0, fa.gZ)(t, fb.Nz);
                            break;
                        case q.fg2.TIKTOK:
                            i = (0, fa.HU)(t, fb.Nz);
                    }
                    null !== n &&
                        (null == i && (i = []),
                        i?.push(
                            (0, p.jsx)(
                                V.E,
                                {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    className: fb.M4,
                                    children: g.intl.format(g.t["9rfonh"], { date: n }),
                                },
                                "member-since",
                            ),
                        ));
                    let s = O.includes(e.id),
                        l = g.intl.string(g.t.wzzjk9);
                    if (null == i || 0 === i.length)
                        if (!0 !== ft.A.get(e.type).hasMetadata) return null;
                        else
                            (i = [
                                (0, p.jsx)(n8.Lp, { className: fb.Z3, text: g.intl.string(g.t.y2b7CA) }, "badge"),
                                (0, p.jsx)(
                                    V.E,
                                    {
                                        variant: "text-xs/normal",
                                        className: fb.vt,
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
                                    className: fb.jy,
                                    children: (0, p.jsx)(eA.$, {
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
                                                      N9.A.refresh(e.type, e.id).finally(() => {
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
                        (0, p.jsx)("div", { className: fb.tJ, children: i })
                    );
                })(u),
                (q.txh.has(u.type) &&
                    (l = (0, p.jsx)(L.d, {
                        label: g.intl.string(g.t["+KCMSi"]),
                        checked: m,
                        onChange: function (e) {
                            h(e), N9.A.setFriendSync(u.type, u.id, e);
                        },
                    })),
                q.ewM.has(u.type) &&
                    (r = (0, p.jsx)(L.d, {
                        label: g.intl.format(g.t["6u6J0q"], { platform: P.name }),
                        checked: S,
                        onChange: function (e) {
                            f(e), N9.A.setShowActivity(u.type, u.id, e);
                        },
                    })),
                ft.A.get(u.type)?.hasMetadata === !0 &&
                    (a = (0, p.jsx)(L.d, {
                        label: g.intl.string(g.t.FYKGsL),
                        checked: 1 === x,
                        onChange: function (e) {
                            let { verified: t } = u,
                                i = +!!e;
                            if (e && !t) {
                                v(i), (0, fl.A)({ platformType: u.type, location: "User Settings" });
                                return;
                            }
                            T(i), N9.A.setMetadataVisibility(u.type, u.id, i);
                        },
                        disabled: 1 !== A || null == u.metadata,
                    })),
                (0, p.jsxs)("div", {
                    className: fb.HZ,
                    children: [
                        (0, p.jsx)(L.d, {
                            label: g.intl.string(g.t.f7yOAX),
                            checked: 1 === A,
                            onChange: function (e) {
                                let { verified: t } = u,
                                    i = +!!e;
                                if (e && !t) {
                                    I(i), (0, fl.A)({ platformType: u.type, location: "User Settings" });
                                    return;
                                }
                                E(i), N9.A.setVisibility(u.type, u.id, i);
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
                                  (0, fl.A)({ platformType: u.type, location: "User Settings" });
                              },
                          }),
                      })
                    : u.integrations.length > 0
                      ? (0, p.jsx)(sy.D, {
                            label: g.intl.string(g.t.fOe3fZ),
                            children: u.integrations.map((e) => (0, p.jsx)(fv, { integration: e }, e.id)),
                        })
                      : void 0,
                null,
            ],
        })
    );
}
function fy(e) {
    let { appIdentity: t, oauth2Token: i } = e;
    return null == i
        ? null
        : (0, p.jsxs)("div", {
              className: fb.FI,
              children: [
                  (function (e, t) {
                      let { application: i } = t,
                          n = iJ.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
                      return (0, p.jsxs)("div", {
                          className: fb.Il,
                          children: [
                              (0, p.jsx)("img", { alt: i.name, className: ew()(fb.gj, fb.sN), src: n }),
                              (0, p.jsxs)("div", {
                                  children: [
                                      (0, p.jsx)("div", {
                                          className: fb.$p,
                                          children: (0, p.jsx)(V.E, {
                                              color: "text-strong",
                                              variant: "text-md/semibold",
                                              className: fb.RW,
                                              children: e.profile.username,
                                          }),
                                      }),
                                      (0, p.jsx)(V.E, {
                                          variant: "text-xs/normal",
                                          color: "text-strong",
                                          className: fb.Au,
                                          children: i.name,
                                      }),
                                  ],
                              }),
                              (0, p.jsx)(M.D, {
                                  className: fb.uH,
                                  onClick: () =>
                                      (0, Nb.d1)(i, () => {
                                          NI.A.delete(t.id);
                                      }),
                                  "aria-label": g.intl.string(g.t.ppppRJ),
                                  focusProps: { offset: { top: -4, left: -4, right: -4 } },
                                  children: (0, p.jsx)(cU.P, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      });
                  })(t, i),
                  (0, p.jsx)("div", {
                      className: fb.HZ,
                      children: (0, p.jsx)(L.d, {
                          label: g.intl.string(g.t.f7yOAX),
                          checked: t.profile?.connection_visible ?? !1,
                          onChange: (e) => {
                              fh.A.updateApplicationIdentityConfig(i.application.id, t.provider_issued_user_id, {
                                  connection_visible: e,
                              });
                          },
                      }),
                  }),
              ],
          });
}
function fO(e) {
    let t = ft.A.get(e);
    (0, fl.A)({ platformType: t.type }),
        Y.default.track(q.HAw.ACCOUNT_LINK_STEP, {
            previous_step: "desktop connections",
            current_step: "desktop oauth",
            platform_type: t.type,
        });
}
function fR() {
    let e = (0, fn.gn)(),
        t = fi.A.useConfig({ location: "User Settings Connections" }),
        i = (0, eZ.A)(t.enabled ? fI.tX : []);
    return (0, p.jsxs)("div", {
        className: fb.lA,
        children: [
            i.map(
                (e) =>
                    null != e &&
                    (0, p.jsx)(
                        fE.A,
                        { application: e, className: fb.__invalid_accountButton, innerClassName: fb.U$ },
                        e.id,
                    ),
            ),
            e
                .slice(0, 10 - i.length)
                .map((e) =>
                    (0, p.jsx)(
                        fe.A,
                        { type: e.type, className: fb.__invalid_accountButton, innerClassName: fb.U$ },
                        e.type,
                    ),
                ),
            (0, p.jsx)(e0.m, {
                text: g.intl.string(g.t.QqTz8b),
                children: (0, p.jsx)("div", {
                    className: ew()(fb.ej, fb.__invalid_accountButton),
                    children: (0, p.jsx)(N7.vN, {
                        children: (0, p.jsx)("button", {
                            className: ew()(fb.R8, fb.U$),
                            type: "button",
                            onClick: function () {
                                n3.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: fO });
                            },
                            "aria-label": g.intl.string(g.t.Zhcj9X),
                            children: (0, p.jsx)(tA._, {
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
function fL(e) {
    let t,
        { fetching: i, accounts: n, appIdentities: s, authorizedApps: l, theme: r, locale: a } = e;
    return (
        (t = i
            ? (0, p.jsx)(uP.y, { type: uP.y.Type.SPINNING_CIRCLE })
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
                                fy,
                                { appIdentity: e, oauth2Token: l.find((t) => t.application.id === e.application_id) },
                                `app-${t}`,
                            ),
                        ),
                        n
                            .filter((e) => ft.A.isSupported(e.type))
                            .map((e, t) =>
                                (0, p.jsx)(
                                    fj,
                                    {
                                        theme: r,
                                        account: e,
                                        locale: a,
                                        onDisconnect: () =>
                                            (function (e) {
                                                let { type: t, id: i } = e;
                                                N9.A.disconnect(t, i);
                                            })(e),
                                    },
                                    `connection-${t}`,
                                ),
                            ),
                    ],
                })),
        (0, p.jsx)("div", { className: fb.V, children: t })
    );
}
let fD = (0, o.E2)(u.X.CONNECTIONS_ADD_CONNECTIONS_SETTING, {
        Component: function () {
            return (0, p.jsx)(sy.D, {
                label: g.intl.string(g.t.ZeDrUf),
                description: g.intl.format(g.t["oYc+Gz"], { privacyPolicyUrl: q.X7G.PRIVACY }),
                children: (0, p.jsx)(fR, {}),
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
    fP = (0, o.E2)(u.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING, {
        Component: function () {
            let e = (0, O.bG)([eC.A], () => eC.A.hidePersonalInformation),
                t = (0, O.bG)([fo.A], () => fo.A.isFetching()),
                i = (0, O.bG)([fo.A], () => fo.A.getAccounts()),
                { authorizedAppsFetchState: n, authorizedApps: s } = (0, O.cf)([fx.default], () => ({
                    authorizedAppsFetchState: fx.default.getFetchState(),
                    authorizedApps: fx.default.getNewestTokensForNonChildrenApplications(),
                })),
                { isLoading: l, filteredAppIdentities: r } = (0, fA.A)(t3.default.getCurrentUser().id, {
                    includeHidden: !0,
                }),
                a = (0, dG.Ay)(),
                o = (0, O.bG)([ds.default], () => ds.default.locale);
            return (N.useEffect(() => {
                n === fx.FetchState.NOT_FETCHED && NI.A.fetch();
            }, [n]),
            e)
                ? null
                : (0, p.jsxs)(p.Fragment, {
                      children: [
                          (0, p.jsx)(fm, {}),
                          (0, p.jsx)(fL, {
                              fetching: t || l || (r.length > 0 && n !== fx.FetchState.FETCHED),
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
            N9.A.fetch();
        },
        useSearchTerms: () => [
            g.intl.string(g.t["+/hZM/"]),
            g.intl.string(g.t.bsbMVz),
            g.intl.string(g.t.f7yOAX),
            g.intl.string(g.t.FYKGsL),
            g.intl.string(g.t["+KCMSi"]),
        ],
    });
var fG = i(46225),
    fU = i(452832);
let fM = [q.fg2.LEAGUE_OF_LEGENDS, q.fg2.RIOT_GAMES],
    fV = [{ badgeType: ef.Xi.NEW, dismissibleContent: ex.M.NEW_CRUNCHYROLL_CONNECTION }],
    fk = (0, o.zZ)(u.X.CONNECTIONS_ADD_CONNECTIONS_CATEGORY, {
        buildLayout: () => [fD],
        useInlineNotice: function () {
            let e = (0, O.bG)([fo.A], () => fo.A.getAccounts().find((e) => fM.includes(e.type))?.type),
                t = null != e ? ft.A.get(e) : null,
                i = (0, eZ.h)(t?.replacedBy),
                { canStartAuthorization: n, hasAlreadyLinked: s, fetched: l } = (0, fG.RD)(i),
                r = g.intl.string(fU.default["1S6oAo"]),
                a = fi.A.useConfig({ location: "RiotDeprecationInlineNotice" }).enabled;
            return N.useMemo(
                () =>
                    a && null != t && n && i?.connectionEntrypointUrl != null && !s && l
                        ? {
                              type: ef.lT.INLINE_NOTICE,
                              noticeType: "info",
                              useText: () =>
                                  g.intl.format(fU.default.DeOsIl, {
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
    fw = (0, o.zZ)(u.X.CONNECTIONS_CONNECTED_ACCOUNTS_CATEGORY, { buildLayout: () => [fP] }),
    fB = (0, o.t_)(u.X.CONNECTIONS_PANEL, {
        useTitle: () => g.intl.string(g.t["3fe7U5"]),
        useObscuredNotice: uL.L,
        buildLayout: () => [fk, fw],
    }),
    fF = (0, o.i4)(u.X.CONNECTIONS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["3fe7U5"]),
        icon: Ao.q,
        getDismissibleBadges: () => fV,
        buildLayout: () => [fB],
    });
var fz = i(875444);
function fY(e, t) {
    let i = (0, O.bG)([fx.default], () => fx.default.getFetchState()),
        n = (0, O.bG)([fx.default], () =>
            e ? fx.default.getNewestTokensForNonChildrenApplications() : fx.default.getNewestTokens(),
        ),
        s = N.useMemo(
            () => (null == n ? [] : n.filter((e) => (0, fz.A)(e.application)).map((e) => e.application)),
            [n],
        );
    return (
        N.useEffect(() => {
            t || NI.A.fetch();
        }, [t]),
        { showLoadingIndicator: i !== fx.FetchState.FETCHED && (null == n || 0 === n.length), slayerSdkApplications: s }
    );
}
i(505653);
var fX = i(106148);
i(650832);
var fH = i(628736);
function fK(e) {
    let { applications: t } = e,
        i = N.useMemo(() => t.sort((e, t) => uF.default.compare(t.id, e.id)), [t]),
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
                    a = iJ.Ay.getApplicationIconURL({ id: r, icon: s });
                e.push(
                    (0, p.jsx)(
                        e0.m,
                        {
                            __unsupportedReactNodeAsText: l,
                            children: (0, p.jsx)("img", { src: a, "aria-label": l, className: fH.Kk }),
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
                                className: fH.lK,
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
        className: fH.wx,
        children: [
            (0, p.jsxs)("div", {
                className: fH.kX,
                children: [
                    (0, p.jsx)(V.E, { variant: "text-md/normal", color: "text-strong", children: n }),
                    (0, p.jsxs)(M.D, {
                        onClick: () => {
                            (0, ej.openUserSettings)(u.X.AUTHORIZED_APPS_PANEL);
                        },
                        className: fH.bJ,
                        children: [
                            (0, p.jsx)(V.E, {
                                variant: "text-xs/normal",
                                color: "interactive-text-default",
                                children: g.intl.format(g.t.oYaYOe, {}),
                            }),
                            (0, p.jsx)(tA._, {
                                size: "xxs",
                                color: w.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                className: fH.g7,
                            }),
                        ],
                    }),
                ],
            }),
            (0, p.jsx)("div", { className: fH.yF }),
            (0, p.jsx)("div", { className: fH.lJ, children: s }),
        ],
    });
}
function fW() {
    return (0, p.jsxs)("div", {
        className: fH.do,
        children: [
            (0, p.jsx)(V.E, {
                variant: "text-md/medium",
                color: "text-strong",
                className: fH.xV,
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
function fZ(e) {
    let { applications: t } = e;
    return t.length > 0 ? (0, p.jsx)(fK, { applications: t }) : (0, p.jsx)(fW, {});
}
let fq = (0, o.E2)(u.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES, {
    useSearchTerms: () => [g.intl.string(g.t.YpCiMt)],
    Component: function () {
        let { showLoadingIndicator: e, slayerSdkApplications: t } = fY(!0);
        return e ? (0, p.jsx)(uP.y, {}) : (0, p.jsx)(fZ, { applications: t });
    },
});
function fQ() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = fY(!0, !0);
    return !e && t.length > 0;
}
let fJ = (0, o.zD)(u.X.CONTENT_AND_SOCIAL_ALLOW_GAME_FRIEND_DMS_SETTING, {
        useTitle: () => g.intl.string(g.t.XpBObB),
        useSubtitle: () =>
            g.intl.format(g.t.oZsHTD, { helpdeskArticle: ta.A.getArticleURL(q.MVz.SLAYER_GAME_FRIENDS) }),
        useSearchTerms: () => [g.intl.string(g.t["Uv/eTx"])],
        useValue: () => c.Zk.useSetting(),
        setValue: (e) => c.Zk.updateSetting(e),
        usePredicate: fQ,
    }),
    f$ = (0, o.Qx)(u.X.CONTENT_AND_SOCIAL_IN_GAME_DMS_SETTING, {
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
        usePredicate: fQ,
    }),
    f0 = (0, o.zZ)(u.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_CATEGORY, {
        useSearchTerms: () => [g.intl.string(g.t.YpCiMt)],
        buildLayout: () => [fq, fJ, f$],
    });
var f1 = i(687123),
    f2 = i(444802),
    f3 = i(558001);
i(866945);
var f6 = i(835002);
function f4() {
    let e = (0, f2.WX)();
    N.useEffect(() => {
        (0, f3.N)(f6.YA.AGE_CONFIRMATION_NOTICE, f6.YX.VIEWED);
    }, []);
    let t = N.useCallback(() => {
            window.open(ta.A.getArticleURL(e), "_blank"), (0, f3.N)(f6.YA.AGE_CONFIRMATION_NOTICE, f6.YX.LEARN_MORE);
        }, [e]),
        i = N.useCallback(() => {
            S1.A.showAgeVerificationGetStartedModal({ entryPoint: S2.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, f3.N)(f6.YA.AGE_CONFIRMATION_NOTICE, f6.YX.CONFIRM_AGE);
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
        children: g.intl.format(g.t.mFgsfg, { hook: (e, i) => (0, p.jsx)(uE.Anchor, { onClick: t, children: e }, i) }),
    });
}
function f5() {
    let e = (0, SZ.aX)(f1.t.REACTIVE_CHECK),
        t = (0, SW.b8)();
    return N.useMemo(() => {
        if (e && !t) return { type: ef.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: f4 };
    }, [e, t]);
}
var f8 = i(308528),
    f7 = i(171316);
function f9() {
    let e = (0, f7.uM)(),
        t = (0, Nr.vx)(),
        i = N.useCallback(() => {
            (0, sE.default)(),
                f8.A.openPrivateChannel({ recipientIds: t }),
                (0, f3.N)(f6.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, f6.YX.LEARN_MORE);
        }, [t]),
        n = N.useCallback(() => {
            (0, f3.N)(f6.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, f6.YX.VIEWED);
        }, []);
    return N.useMemo(() => {
        if (e)
            return {
                type: ef.lT.INLINE_NOTICE,
                noticeType: "info",
                trackView: n,
                useText: () =>
                    g.intl.format(Nd.default.i284fU, {
                        hook: (e, t) => (0, p.jsx)(uE.Anchor, { onClick: i, children: e }, t),
                        count: t.length,
                    }),
            };
    }, [i, e, t.length, n]);
}
var Ce = i(323073),
    Ct = i(264249),
    Ci = i(406274);
let Cn = (0, o.zD)(u.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_DM_SETTING, {
        useTitle: () => g.intl.string(g.t.XahVjj),
        useSubtitle: () => g.intl.string(g.t.R9fXyS),
        useValue: Ct.hT,
        useDisabled: () => {
            let e = (0, Ci.A)() ?? !0,
                t = (0, Ce.sP)(),
                i = (0, SW.yM)();
            return (!t || !!i) && !e;
        },
        setValue: (e) => {
            (0, Ce.p5)() && e
                ? S1.A.showAgeVerificationGetStartedModal({ entryPoint: S2.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS })
                : c.Qe.updateSetting(e);
        },
    }),
    Cs = (0, o.zD)(u.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_IOS_SETTING, {
        useTitle: () => g.intl.string(g.t["L+yTsa"]),
        useSubtitle: () => g.intl.string(g.t.hiM8pU),
        useValue: Ct.tI,
        useDisabled: () => {
            let e = (0, Ci.A)() ?? !0,
                t = (0, Ce.sP)(),
                i = (0, SW.yM)();
            return N.useMemo(() => (!t || !!i) && !e, [t, e, i]);
        },
        setValue: (e) => {
            (0, Ce.p5)() && e
                ? S1.A.showAgeVerificationGetStartedModal({ entryPoint: S2.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS })
                : c.Kg.updateSetting(e);
        },
    });
i(667532);
var Cl = i(390248),
    Cr = i(632119),
    Ca = i(945276),
    Co = i(562783),
    Cu = i(533517);
function Cd() {
    let e,
        t = (0, Ca.A)() ?? !0,
        i = (0, f7.uM)(),
        n = (0, f7.uM)(),
        {
            explicitContentGuilds: s,
            explicitContentFriendDm: l,
            explicitContentNonFriendDm: r,
        } = ((e = (0, uA.cf)([oF.A], () => oF.A.settings.textAndImages?.explicitContentSettings ?? (0, Cr.C$)())),
        {
            explicitContentGuilds: (0, Cr.Ys)({ setting: e?.explicitContentGuilds }),
            explicitContentNonFriendDm: (0, Cr.Ys)({ setting: e?.explicitContentNonFriendDm, isDm: !0 }),
            explicitContentFriendDm: (0, Cr.Ys)({ setting: e?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
        }),
        a = (e) => {
            let t = Object.values(e);
            (0, Cl.hK)() && t.includes(f.TO.SHOW)
                ? S1.A.showAgeVerificationGetStartedModal({ entryPoint: S2.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
                : (0, Cr.Jz)(e);
        },
        o = [
            { value: f.TO.BLUR, label: g.intl.string(g.t.S49Uad) },
            { value: f.TO.BLOCK, label: g.intl.string(g.t["D/157Y"]) },
        ],
        u = [{ value: f.TO.BLUR, label: g.intl.string(g.t.S49Uad) }],
        d = { value: f.TO.SHOW, label: g.intl.string(g.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: n, tooltipText: i ? g.intl.string(Nd.default["6Af/cw"]) : void 0 };
    return (0, p.jsxs)(Co.E, {
        description: g.intl.string(g.t.Wnojv1),
        children: [
            (0, p.jsx)(Cu.A, {
                title: g.intl.string(g.t["+uI23H"]),
                value: l,
                onChange: (e) => a({ explicitContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, p.jsx)(Cu.A, {
                title: g.intl.string(g.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ explicitContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, p.jsx)(Cu.A, {
                title: g.intl.string(g.t["FP+a42"]),
                value: s,
                onChange: (e) => a({ explicitContentGuilds: e }),
                isDisabled: !t || n,
                tooltipText: i ? g.intl.string(Nd.default["6Af/cw"]) : void 0,
                options: u,
            }),
        ],
    });
}
function Cc() {
    let e,
        t = (0, Ca.A)() ?? !0,
        i = (0, f7.uM)(),
        n = (0, f7.uM)(),
        {
            goreContentGuilds: s,
            goreContentFriendDm: l,
            goreContentNonFriendDm: r,
        } = ((e = (0, uA.cf)([oF.A], () => oF.A.settings.textAndImages?.goreContentSettings ?? (0, f2.T4)())),
        {
            goreContentGuilds: (0, f2.gC)({ setting: e?.goreContentGuilds }),
            goreContentNonFriendDm: (0, f2.gC)({ setting: e?.goreContentNonFriendDm, isDm: !0 }),
            goreContentFriendDm: (0, f2.gC)({ setting: e?.goreContentFriendDm, isDm: !0, isFriend: !0 }),
        }),
        a = (e) => {
            let t = Object.values(e);
            (0, Cl.hK)() && t.includes(f.TO.SHOW)
                ? S1.A.showAgeVerificationGetStartedModal({ entryPoint: S2.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
                : (0, f2.qY)(e);
        },
        o = [
            { value: f.TO.BLUR, label: g.intl.string(g.t.S49Uad) },
            { value: f.TO.BLOCK, label: g.intl.string(g.t["D/157Y"]) },
        ],
        u = [{ value: f.TO.BLUR, label: g.intl.string(g.t.S49Uad) }],
        d = { value: f.TO.SHOW, label: g.intl.string(g.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: n, tooltipText: i ? g.intl.string(Nd.default["6Af/cw"]) : void 0 };
    return (0, p.jsxs)(Co.E, {
        description: g.intl.string(g.t.XgH9eh),
        children: [
            (0, p.jsx)(Cu.A, {
                title: g.intl.string(g.t["+uI23H"]),
                value: l,
                onChange: (e) => a({ goreContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, p.jsx)(Cu.A, {
                title: g.intl.string(g.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ goreContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, p.jsx)(Cu.A, {
                title: g.intl.string(g.t["FP+a42"]),
                value: s,
                onChange: (e) => a({ goreContentGuilds: e }),
                isDisabled: !t || n,
                options: u,
                tooltipText: i ? g.intl.string(Nd.default["6Af/cw"]) : void 0,
            }),
        ],
    });
}
var Cg = i(397620),
    Cm = i(759049);
let Ch = (0, o.E2)(u.X.CONTENT_AND_SOCIAL_CONTENT_FILTERS_SETTING, {
    Component: function () {
        let e = (0, f2.WX)(),
            t = N.useMemo(
                () => [
                    {
                        id: "explicit-media-redaction",
                        title: g.intl.string(g.t.GYpoAq),
                        component: Cd,
                        orientation: "vertical",
                    },
                    {
                        id: "gore-media-redaction",
                        title: g.intl.string(g.t["16/3Bi"]),
                        component: Cc,
                        orientation: "vertical",
                    },
                ],
                [],
            ),
            i = N.useCallback((e) => {
                Ec.A.setSection(q.nc_.CONTENT_AND_SOCIAL, e);
            }, []);
        return (0, p.jsxs)(fX.h, {
            children: [
                (0, p.jsx)(fX._, {
                    header: g.intl.string(g.t["Hj/But"]),
                    description: g.intl.format(g.t.dliU4j, { learnMoreLink: ta.A.getArticleURL(e) }),
                }),
                (0, p.jsx)(Cg.A, { tabs: t, onTabChange: i, orientation: "vertical", tabsClassName: Cm.v }),
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
var CA = i(639555),
    CE = i(617641),
    Cx = i(546140),
    CT = i(406935),
    CS = i(594061);
let Cp = (0, o.zD)(u.X.CONTENT_AND_SOCIAL_DM_SAFETY_ALERTS_SETTING, {
    useTitle: () => g.intl.string(g.t.qFsx5q),
    useSubtitle: () => g.intl.format(g.t.lunaRv, { learnMoreLink: ta.A.getArticleURL(q.MVz.SAFETY_ALERTS) }),
    useValue: Cx.L,
    setValue: (e) =>
        CS.wc.updateAsync(
            "privacy",
            (t) => {
                t.inappropriateConversationWarnings = CT._t.create({ value: e });
            },
            CS.Sb.INFREQUENT_USER_ACTION,
        ),
    usePredicate: function () {
        let e = (0, CE.Lc)({ location: "DMSafetyAlertsSetting" }),
            t = (0, CA.Rv)({ location: "DMSafetyAlertsSetting" }),
            i = (0, Ca.A)() ?? !0;
        return e && !i && !t;
    },
});
var CN = i(809505),
    Cf = i(923457),
    CC = i(656402);
let C_ = (0, o.Qx)(u.X.CONTENT_AND_SOCIAL_DM_SPAM_SETTING, {
        useTitle: () => g.intl.string(g.t.tiCXaH),
        useSubtitle: () => g.intl.format(g.t.RvjRRI, { appealLink: ta.A.getArticleURL(q.MVz.SAFE_DIRECT_MESSAGING) }),
        useValue: function () {
            let e = c.he.useSetting(),
                t = c.cj.useSetting(),
                i = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
                n = (0, SZ.yv)(Cf.p.SPAM_FILTERS);
            return e !== f.he.DEFAULT_UNSET
                ? e
                : i?.nsfwAllowed === !1 && n
                  ? f.he.FRIENDS_AND_NON_FRIENDS
                  : (CC.xY.get(t) ?? f.he.NON_FRIENDS);
        },
        setValue: (e) => c.he.updateSetting(e),
        useOptions: function () {
            return N.useMemo(() => (0, CN.YS)(), []);
        },
        useSearchTerms: () => [g.intl.string(g.t.JzaP4h), g.intl.string(g.t.H9XOl3), g.intl.string(g.t.k4W40P)],
    }),
    CI = (0, o.zZ)(u.X.CONTENT_AND_SOCIAL_CONTENT_CATEGORY, {
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
                u = f9(),
                d =
                    ((e = (0, Na.Z)()),
                    (t = (0, f2.WX)()),
                    (i = N.useCallback(() => {
                        window.open(ta.A.getArticleURL(t), "_blank"),
                            (0, f3.N)(f6.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, f6.YX.LEARN_MORE);
                    }, [t])),
                    (n = N.useCallback(() => {
                        (0, f3.N)(f6.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, f6.YX.VIEWED);
                    }, [])),
                    N.useMemo(() => {
                        if (e)
                            return {
                                type: ef.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: n,
                                useText: () =>
                                    g.intl.format(g.t.EUo0yj, {
                                        hook: (e, t) => (0, p.jsx)(uE.Anchor, { onClick: i, children: e }, t),
                                    }),
                            };
                    }, [i, e, n])),
                c =
                    ((s = (0, SZ.SJ)()),
                    (l = (0, SW.b8)()),
                    (r = s && !l),
                    (a = N.useCallback(() => {
                        S1.A.showAgeVerificationGetStartedModal({ entryPoint: S2.q1.CONTENT_AND_SOCIAL_NOTICE }),
                            (0, f3.N)(f6.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, f6.YX.LEARN_MORE);
                    }, [])),
                    (o = N.useCallback(() => {
                        (0, f3.N)(f6.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, f6.YX.VIEWED);
                    }, [])),
                    N.useMemo(() => {
                        if (r)
                            return {
                                type: ef.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: o,
                                useText: () =>
                                    g.intl.format(g.t.OX4ybh, {
                                        hook: (e, t) => (0, p.jsx)(uE.Anchor, { onClick: a, children: e }, t),
                                    }),
                            };
                    }, [a, r, o])),
                m = f5();
            return u ?? m ?? c ?? d;
        },
        buildLayout: () => [Ch, C_, Cp, Cn, Cs],
    }),
    Cb = (0, o.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_EVERYONE_SETTING, {
        useTitle: () => g.intl.string(g.t["7x9dyE"]),
        useValue: () => {
            let e = c.FA.useSetting();
            return N.useMemo(() => (0, rE.Lx)(e), [e]).all;
        },
        setValue: (e) => {
            c.FA.updateSetting(e ? q.yKI : q.yKI & ~q.dzt.NO_RELATION);
        },
        useDisabled: () => (0, f7.uM)(),
    });
var Cv = i(665260);
let Cj = (0, o.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_FRIENDS_SETTING, {
        useTitle: () => g.intl.string(g.t.NfeuZ3),
        useValue: () => {
            let e = c.FA.useSetting(),
                t = N.useMemo(() => (0, rE.Lx)(e), [e]);
            return t.all || t.mutualFriends;
        },
        setValue: (e) => {
            let t = c.FA.getSetting();
            c.FA.updateSetting(e ? Cv.UI(t, q.dzt.MUTUAL_FRIENDS) : Cv.iE(t, q.dzt.MUTUAL_FRIENDS, q.dzt.NO_RELATION));
        },
        useDisabled: () => (0, f7.uM)(),
    }),
    Cy = (0, o.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_GUILDS_SETTING, {
        useTitle: () => g.intl.string(g.t.qsMfsH),
        useValue: () => {
            let e = c.FA.useSetting(),
                t = N.useMemo(() => (0, rE.Lx)(e), [e]);
            return t.all || t.mutualGuilds;
        },
        setValue: (e) => {
            let t = c.FA.getSetting();
            c.FA.updateSetting(e ? Cv.UI(t, q.dzt.MUTUAL_GUILDS) : Cv.iE(t, q.dzt.MUTUAL_GUILDS, q.dzt.NO_RELATION));
        },
        useDisabled: () => (0, f7.uM)(),
    }),
    CO = (0, o.zZ)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.MNaVwq),
        useInlineNotice: f9,
        buildLayout: () => [Cb, Cj, Cy],
    });
var CR = i(994500),
    CL = i(428678),
    CD = i(717398),
    CP = i(730134),
    CG = i(741304);
function CU(e) {
    let { listType: t, numberOfUsers: i } = e,
        n = "blocked" === t;
    return (0, p.jsxs)("div", {
        className: CG.wx,
        children: [
            (0, p.jsx)("div", { className: CG.zc, children: n ? (0, p.jsx)(CL.K, {}) : (0, p.jsx)(ig.G, {}) }),
            (0, p.jsxs)("div", {
                className: CG.Qq,
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
function CM(e) {
    let { userId: t, last: i } = e,
        n = (0, O.bG)([CR.A], () => CR.A.isBlocked(t)),
        s = (0, O.bG)([t3.default], () => t3.default.getUser(t)),
        [l, r] = N.useState(!1),
        a = N.useCallback(() => {
            r(!0),
                n
                    ? CD.A.unblockUser(t).catch(() => {
                          r(!1);
                      })
                    : CD.A.unignoreUser(t, eM.A.USER_SETTINGS).catch(() => {
                          r(!1);
                      });
        }, [n, t]);
    return null == s
        ? null
        : (0, p.jsxs)("div", {
              className: ew()(CG.nM, { [CG.fW]: i }),
              children: [
                  (0, p.jsxs)("div", {
                      className: CG.eF,
                      children: [
                          (0, p.jsx)(CP.A, { user: s, size: iH._3.SIZE_40 }),
                          (0, p.jsxs)("div", {
                              className: CG.Qq,
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
                  (0, p.jsx)(eA.$, {
                      variant: "secondary",
                      text: g.intl.string(n ? g.t.XyHpKH : g.t["8wXU9B"]),
                      onClick: a,
                      loading: l,
                  }),
              ],
          });
}
function CV(e) {
    let { userIds: t, listType: i } = e,
        [n, s] = N.useState(5);
    return (0, p.jsx)(fX.h, {
        children: (0, p.jsxs)("div", {
            className: CG.Nr,
            children: [
                (0, p.jsx)(CU, { listType: i, numberOfUsers: t.length }),
                (0, p.jsx)("div", {
                    className: CG.jS,
                    children: t.slice(0, n).map((e, i) => (0, p.jsx)(CM, { userId: e, last: i === t.length - 1 }, e)),
                }),
                n < t.length
                    ? (0, p.jsx)("div", {
                          className: CG.vM,
                          children: (0, p.jsx)(M.D, {
                              onClick: () => {
                                  s((e) => e + 5);
                              },
                              className: CG.Qf,
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
let Ck = (0, o.E2)(u.X.CONTENT_AND_SOCIAL_BLOCKED_USERS, {
        useSearchTerms: () => [g.intl.string(g.t.PFOUKW)],
        usePredicate: () => (0, O.bG)([CR.A], () => CR.A.getBlockedIDs().length > 0),
        Component: function () {
            let e = (0, O.yK)([CR.A], () => CR.A.getBlockedIDs());
            return (0, p.jsx)(CV, { userIds: e, listType: "blocked" });
        },
    }),
    Cw = (0, o.E2)(u.X.CONTENT_AND_SOCIAL_IGNORED_USERS, {
        useSearchTerms: () => [g.intl.string(g.t["93ZDWE"])],
        usePredicate: () => (0, O.bG)([CR.A], () => CR.A.getIgnoredIDs().length > 0),
        Component: function () {
            let e = (0, O.yK)([CR.A], () => CR.A.getIgnoredIDs());
            return (0, p.jsx)(CV, { userIds: e, listType: "ignored" });
        },
    }),
    CB = (0, o.zZ)(u.X.CONTENT_AND_SOCIAL_RESTRICTED_USERS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.LVwR56),
        useSubtitle: () =>
            g.intl.format(g.t["0aNQo9"], { helpArticle: ta.A.getArticleURL(q.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE) }),
        buildLayout: () => [Ck, Cw],
        usePredicate: () => {
            let { hasBlockedUsers: e, hasIgnoredUsers: t } = (0, O.cf)([CR.A], () => ({
                hasBlockedUsers: CR.A.getBlockedIDs().length > 0,
                hasIgnoredUsers: CR.A.getIgnoredIDs().length > 0,
            }));
            return t || e;
        },
    });
var CF = i(612025),
    Cz = i(112469),
    CY = i(111159),
    CX = i(152056),
    CH = i(321880);
let CK = { label: () => g.intl.string(g.t["32u1Dx"]), value: CF.YG };
var CW = i(542457);
let CZ = () => (0, Cz.Tx)() !== CF.YG;
function Cq() {
    return g.intl.string(g.t["T+nevN"]);
}
let CQ = (0, o.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_JOIN_SETTING, {
        useTitle: Cq,
        useSubtitle: () =>
            g.intl.format(g.t.jXKQCu, { helpdeskArticle: ta.A.getArticleURL(q.MVz.ACTIVITY_STATUS_SETTINGS) }),
        useValue: () => {
            let e = (0, Cz.Tx)();
            return !c.pE.useSetting().includes(e);
        },
        setValue: (e) => {
            let t = CF.xk.getState().selectedGuildId,
                i = (0, rE.CN)();
            e ? i.delete(t) : i.add(t),
                c.pE.updateSetting([...i]),
                Y.default.track(q.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                    action: CW.m.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
                    ingress: nb.bf.USER_SETTINGS_PRIVACY_SAFETY,
                    guild_id: t,
                });
        },
        usePredicate: CZ,
    }),
    CJ = () => (0, Cz.Tx)() !== CF.YG;
function C$() {
    return g.intl.string(m.default.WhdCGP);
}
let C0 = (0, o.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_SHARE_SETTING, {
    useTitle: C$,
    useSubtitle: () => g.intl.string(m.default.UQ9RHJ),
    useValue: () => {
        let e = (0, Cz.Tx)();
        return !c.JG.useSetting().includes(e);
    },
    setValue: (e) => {
        let t = CF.xk.getState().selectedGuildId,
            i = (0, rE.Kk)();
        e ? i.delete(t) : i.add(t),
            c.JG.updateSetting([...i]),
            Y.default.track(q.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                action: CW.m.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
                ingress: nb.bf.USER_SETTINGS_PRIVACY_SAFETY,
                guild_id: t,
            });
    },
    usePredicate: CJ,
});
var C1 = i(762183),
    C2 = i(445176),
    C3 = i(137675);
let C6 = () => ((0, C2.e)() ? g.intl.string(g.t.PMsfcH) : g.intl.string(g.t.RAQUSN)),
    C4 = (e, t) => {
        Y.default.track(q.HAw.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t,
        });
    },
    C5 = (0, o.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_DMS_SETTING, {
        useTitle: C6,
        useSubtitle: () => {
            let e = (0, Cz.Tx)(),
                t = (0, Cz.q9)(),
                i = (0, C2.e)();
            return e === CF.YG
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
            let e = (0, Cz.Tx)(),
                t = c.$s.useSetting().includes(e),
                i = (0, C1.K)();
            return e === CF.YG ? !i : !t;
        },
        useDisabled: () => {
            let e = (0, f7.uM)();
            return (0, Cz.Tx)() === CF.YG && e;
        },
        setValue: (e) => {
            let t = CF.xk.getState().selectedGuildId;
            if (t === CF.YG) {
                var i;
                (i = !e),
                    (0, C3.O)({
                        header: g.intl.string(g.t["uUr+GR"]),
                        body: g.intl.string(g.t.hjGJBp),
                        confirmText: g.intl.string(g.t.gm1Vej),
                        cancelText: g.intl.string(g.t.p89ACt),
                        confirmButtonColor: aA.$n.Colors.BRAND,
                        onConfirm: () => {
                            c.n6.updateSetting(i), C4(i, !1);
                        },
                        onCancel: () => {
                            c.n6.updateSetting(i), c.$s.updateSetting(i ? H.A.getGuildIds() : []), C4(i, !0);
                        },
                    });
            } else {
                let i = (0, rE.Tb)();
                e ? i.delete(t) : i.add(t),
                    c.$s.updateSetting(Array.from(i)),
                    Y.default.track(q.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: CW.m.DIRECT_MESSAGES_TOGGLE,
                        ingress: nb.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    });
            }
        },
    });
var C8 = i(152076);
let C7 = (e, t) => {
    Y.default.track(q.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
        default_guilds_restricted: e,
        applied_to_existing_guilds: t,
    });
};
function C9() {
    return g.intl.string(g.t["3o2ojh"]);
}
let _e = (0, o.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: C9,
        useSubtitle: () =>
            (0, Cz.q9)()
                ? g.intl.format(g.t.WpnWLc, { helpdeskArticle: ta.A.getArticleURL(q.MVz.MESSAGE_REQUESTS) })
                : g.intl.format(g.t.wkm9a3, { helpdeskArticle: ta.A.getArticleURL(q.MVz.MESSAGE_REQUESTS) }),
        useValue: () => {
            let e = (0, Cz.Tx)(),
                t = (0, C1.K)(),
                i = c.$s.useSetting().includes(e),
                n = c.YX.useSetting(),
                s = c.Zr.useSetting().includes(e);
            return e === CF.YG ? !t && !n : !i && !s;
        },
        useDisabled: () => {
            let e = (0, Cz.Tx)(),
                t = (0, f7.uM)(),
                i = (0, C1.K)(),
                n = c.$s.useSetting().includes(e);
            return e === CF.YG ? i || t : n;
        },
        setValue: (e) => {
            let t = CF.xk.getState().selectedGuildId;
            if (!e && (0, C8.w)())
                return void S1.A.showAgeVerificationGetStartedModal({ entryPoint: S2.q1.MESSAGE_REQUESTS_SETTINGS });
            if (t === CF.YG) {
                var i;
                (i = !e),
                    (0, C3.O)({
                        header: g.intl.string(g.t.yAfu1p),
                        body: g.intl.string(g.t.Ry2z74),
                        confirmText: g.intl.string(g.t.gm1Vej),
                        cancelText: g.intl.string(g.t.p89ACt),
                        confirmButtonColor: aA.$n.Colors.BRAND,
                        onConfirm: () => {
                            c.YX.updateSetting(i), C7(i, !1);
                        },
                        onCancel: () => {
                            c.YX.updateSetting(i), c.Zr.updateSetting(i ? H.A.getGuildIds() : []), C7(i, !0);
                        },
                    });
            } else {
                let i = (0, rE.xo)();
                e ? i.delete(t) : i.add(t),
                    c.Zr.updateSetting(Array.from(i)),
                    Y.default.track(q.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: CW.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: nb.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    });
            }
        },
    }),
    _t = (0, o.E2)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_GUILD_SELECTOR, {
        useSearchTerms: function () {
            let e = [C6(), C9()],
                t = C$();
            CJ() && e.push(t);
            let i = Cq();
            return CZ() && e.push(i), e;
        },
        Component: function () {
            let { selectedGuildId: e, setSelectedGuildId: t } = (0, CF.xk)(),
                i = (0, O.bG)([K.Ay], () => K.Ay.getFlattenedGuildIds()),
                n = (0, O.bG)([H.A], () => H.A.getGuilds()),
                s = i[0];
            N.useEffect(
                () =>
                    CX.A.subscribe(
                        (e) => {
                            let { query: t } = e;
                            return t.trim();
                        },
                        (e, i) => {
                            let n = CF.xk.getState().selectedGuildId;
                            "" === i && "" !== e && n === CF.YG && null != s
                                ? t(s)
                                : "" === e && n !== CF.YG && t(CF.YG);
                        },
                        { equalityFn: (e, t) => e === t },
                    ),
                [s, t],
            );
            let l = N.useMemo(() => {
                let e = [];
                return (
                    e.push({
                        ...CK,
                        id: CK.value,
                        label: CK.label(),
                        leading: (0, p.jsx)("div", {
                            className: CH.KP,
                            children: (0, p.jsx)(CY.p, {
                                size: "sm",
                                color: "white",
                                "aria-hidden": !0,
                                className: CH.cl,
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
                                leading: (0, p.jsx)(c8.Ay, {
                                    className: CH.cl,
                                    guild: i,
                                    size: c8.Ay.Sizes.SMALLER,
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
    _i = (0, o.zZ)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.eYaT7L),
        useInlineNotice: function () {
            let e = f9(),
                t = f5();
            if ((0, Cz.Tx)() === CF.YG) return e ?? t;
        },
        buildLayout: () => [_t, C5, _e, C0, CQ],
    }),
    _n = (0, o.dT)(u.X.CONTENT_AND_SOCIAL_MAIN_TAB, {
        getTitle: () => g.intl.string(g.t["/7xJCF"]),
        buildLayout: () => [CI, _i, CO, CB],
    }),
    _s = (0, o.dT)(u.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_TAB, {
        initialize: () => {
            NI.A.fetch();
        },
        getTitle: () => g.intl.string(g.t.YpCiMt),
        buildLayout: () => [f0],
    }),
    _l = (0, o.t_)(u.X.CONTENT_AND_SOCIAL_PANEL, {
        useTitle: () => g.intl.string(g.t["+o1pDZ"]),
        buildLayout: () => [_n, _s],
    }),
    _r = (0, o.i4)(u.X.CONTENT_AND_SOCIAL_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["+o1pDZ"]),
        icon: cC.i,
        buildLayout: () => [_l],
    });
var _a = i(254138),
    _o = i(157559),
    _u = i(975648),
    _d = i(837245);
let _c = (0, o.E2)(u.X.DATA_HARVEST_REQUEST_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t.dmBSKo)],
        Component: function () {
            let e = (0, O.bG)([t3.default], () => t3.default.getCurrentUser()),
                { currentHarvestType: t, awaitingInitialRequest: n } = (0, O.cf)([_u.A], () => ({
                    currentHarvestType: _u.A.harvestType,
                    awaitingInitialRequest: _u.A.requestingHarvest,
                })),
                [s, l] = N.useState(!1);
            if (null == e) return null;
            let r = (0, rE.Oj)(t, e) || n,
                a = null != t && rC()().diff(rC()(t.created_at), "days") < q.n83,
                o = r && a,
                u = e.isStaff(),
                d = !e.verified;
            return (0, p.jsxs)(fX.h, {
                children: [
                    (0, p.jsx)(fX._, {
                        header: g.intl.string(g.t.XAHCgJ),
                        description: g.intl.format(g.t.P3kNfr, {
                            helpdeskArticle: ta.A.getArticleURL(q.MVz.GDPR_REQUEST_DATA),
                        }),
                    }),
                    o
                        ? (0, p.jsx)(er.Z, {
                              className: _d.N,
                              children: (0, p.jsx)(V.E, {
                                  variant: "text-md/normal",
                                  children: g.intl.format(g.t.RNDlV9, {
                                      date: rC()(t.created_at).add(q.n83, "days").format("MMMM Do YYYY"),
                                  }),
                              }),
                          })
                        : u
                          ? (0, p.jsx)(er.Z, {
                                className: _d.N,
                                children: (0, p.jsx)(V.E, {
                                    variant: "text-md/normal",
                                    children: g.intl.string(g.t.ZPQLH2),
                                }),
                            })
                          : (0, p.jsxs)(p.Fragment, {
                                children: [
                                    d
                                        ? (0, p.jsx)(er.Z, {
                                              className: _d.N,
                                              children: (0, p.jsx)(V.E, {
                                                  variant: "text-md/normal",
                                                  children: g.intl.string(g.t.c1f88z),
                                              }),
                                          })
                                        : null,
                                    (0, p.jsx)("div", {
                                        className: _d.x,
                                        children: (0, p.jsx)(eA.$, {
                                            variant: "primary",
                                            text: g.intl.string(g.t.dmBSKo),
                                            disabled: r,
                                            onClick: () => {
                                                ((e) => {
                                                    let { onConfirm: t } = e;
                                                    (0, C.openModalLazy)(async () => {
                                                        let { default: e } = await i.e("81153").then(i.bind(i, 890904));
                                                        return (i) => (0, p.jsx)(e, { modalProps: i, onConfirm: t });
                                                    });
                                                })({
                                                    onConfirm: (e) => {
                                                        l(!0),
                                                            (0, Ed.$I)(e)
                                                                .then(
                                                                    (e) => (
                                                                        null != e &&
                                                                            null != e.body &&
                                                                            n3.h.dispatch({
                                                                                type: "UPDATE_DATA_HARVEST_TYPE",
                                                                                harvestType: e.body,
                                                                            }),
                                                                        e
                                                                    ),
                                                                )
                                                                .then(
                                                                    (e) => {
                                                                        null != e && null != e.body
                                                                            ? _o.A.show({
                                                                                  title: g.intl.string(g.t.i2iul5),
                                                                                  body: g.intl.string(g.t["6Nmv4i"]),
                                                                              })
                                                                            : _o.A.show({
                                                                                  title: g.intl.string(g.t.OjbtDm),
                                                                                  body: g.intl.string(g.t["0F5Jyt"]),
                                                                              });
                                                                    },
                                                                    (e) => {
                                                                        let t =
                                                                            e?.message ||
                                                                            e?.body?.message ||
                                                                            g.intl.string(g.t["0F5Jyt"]);
                                                                        _o.A.show({
                                                                            title: g.intl.string(g.t.OjbtDm),
                                                                            body: t,
                                                                        });
                                                                    },
                                                                )
                                                                .finally(() => l(!1));
                                                    },
                                                });
                                            },
                                            loading: s || n,
                                        }),
                                    }),
                                ],
                            }),
                ],
            });
        },
    }),
    _g = (0, o.zZ)(u.X.DATA_REQUEST_CATEGORY, {
        useTitle: () => g.intl.string(g.t.VjDjpb),
        initialize: () => {
            n3.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_START" }),
                n2.Bo.get({ url: q.Rsh.USER_HARVEST, oldFormErrors: !0, rejectWithError: !1 })
                    .then((e) => {
                        n3.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body });
                    })
                    .catch((e) => {
                        n3.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_FAILURE", error: e });
                    });
        },
        buildLayout: () => [_c],
    });
var _m = i(290595),
    _h = i(153488);
let _A = (0, o.zD)(u.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING, {
        useTitle: () => g.intl.string(g.t.AGDDkH),
        useSubtitle: () => g.intl.string(g.t["wW9/zQ"]),
        useValue: () => c.Q$.useSetting(),
        setValue: (e) => NG.eQ({ allowVoiceRecording: e }),
    }),
    _E = (0, o.v_)(u.X.DATA_USAGE_DISCLAIMER_SETTING, {
        useTitle: () => g.intl.string(g.t.D60Gfj),
        useSubtitle: () =>
            g.intl.format(g.t.R5N31P, {
                onClick: () =>
                    (0, ej.openUserSettings)(
                        (0, Tw.pC)("DataUsageDisclaimer") ? u.X.ACCOUNT_REMOVAL_CATEGORY : u.X.ACCOUNT_REMOVAL_SETTING,
                    ),
            }),
    }),
    _x = (0, o.zD)(u.X.DATA_USAGE_PERSONALIZATION_SETTING, {
        useTitle: () => g.intl.string(g.t.MNKzyg),
        useSubtitle: () =>
            g.intl.format(g.t["eQL/Mr"], { helpdeskArticle: ta.A.getArticleURL(q.MVz.DATA_USED_FOR_RECOMMENDED) }),
        useValue: function () {
            return (0, O.bG)([_h.A], () => _h.A.hasConsented(q.YAq.PERSONALIZATION));
        },
        setValue: function (e) {
            e
                ? (0, _m.U)([q.YAq.PERSONALIZATION], []).catch(C3.i)
                : (0, C3.O)({
                      header: g.intl.string(g.t["9SNpzv"]),
                      confirmText: g.intl.string(g.t["9g5UGw"]),
                      cancelText: g.intl.string(g.t["+ZLPw9"]),
                      onConfirm: () => {
                          (0, _m.U)([], [q.YAq.PERSONALIZATION]).catch(C3.i);
                      },
                      body: g.intl.string(g.t.gJvDDh),
                  });
        },
        useDisabled: f7.uM,
    }),
    _T = (0, o.zD)(u.X.DATA_USAGE_QUESTS_3P_SETTING, {
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
                t = (0, f7.uM)();
            return e || t;
        },
        useSearchTerms: () => [g.intl.string(g.t.CyLYKZ)],
    }),
    _S = (0, o.zD)(u.X.DATA_USAGE_QUESTS_SETTING, {
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
        useDisabled: f7.uM,
    }),
    _p = (0, o.zD)(u.X.DATA_USAGE_STATISTICS_SETTING, {
        useTitle: () => g.intl.string(g.t.XuADY2),
        useSubtitle: () =>
            g.intl.format(g.t["igTSG/"], { helpdeskArticle: ta.A.getArticleURL(q.MVz.DATA_PRIVACY_CONTROLS) }),
        useValue: function () {
            return (0, O.bG)([_h.A], () => _h.A.hasConsented(q.YAq.USAGE_STATISTICS));
        },
        setValue: function (e) {
            e
                ? (0, _m.U)([q.YAq.USAGE_STATISTICS], []).catch(C3.i)
                : (0, C3.O)({
                      header: g.intl.string(g.t.OdPCbN),
                      body: g.intl.string(g.t.MGWabA),
                      confirmText: g.intl.string(g.t["D3+rU4"]),
                      cancelText: g.intl.string(g.t.kYpG0u),
                      onConfirm: () => (0, _m.U)([], [q.YAq.USAGE_STATISTICS]).catch(C3.i),
                  });
        },
        useSearchTerms: () => [g.intl.string(g.t.XuADY2)],
        useDisabled: f7.uM,
    }),
    _N = (0, o.zZ)(u.X.DATA_USAGE_CATEGORY, {
        useTitle: () => g.intl.string(g.t.bvw42E),
        useInlineNotice: f9,
        initialize: () => {
            _h.A.fetchedConsents || (0, _m.Q)();
        },
        buildLayout: () => [_p, _S, _T, _x, _A, _E],
    });
function _f() {
    let e = c.JG.useSetting();
    return (0, O.bG)([K.Ay, H.A], () => {
        let t = new Set(e);
        return K.Ay.getFlattenedGuildIds().filter((e) => null != H.A.getGuild(e) && !t.has(e));
    }, [e]);
}
let _C = {
        type: ef.wF.STACKED_ICONS,
        useIcons: function () {
            let e = _f(),
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
    __ = (0, o.AK)(u.X.PROFILE_PRIVACY_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: function () {
            let e = _f();
            if (0 === e.length) return g.intl.format(g.t.QJIJ5p, {});
            let t = H.A.getGuild(e[0]),
                i = t?.name ?? "",
                n = e.length - 1;
            return 0 === n
                ? g.intl.format(g.t["T+8J4A"], { guildName: i })
                : g.intl.format(g.t["3JyODQ"], { guildName: i, count: n });
        },
        useTrailingDecoration: function () {
            return _C;
        },
        destinationKey: u.X.ACTIVITY_PRIVACY_PANEL,
    }),
    _I = (0, o.gN)(u.X.PROFILE_PRIVACY_RELATED_SETTINGS, { buildLayout: () => [__] }),
    _b = (0, o.Qx)(u.X.PROFILE_PRIVACY_SETTING, {
        useTitle: () => g.intl.string(g.t.Qnf32C),
        useOptions: () => [
            { name: g.intl.string(g.t.Boxc8R), desc: g.intl.string(g.t["nLj+nc"]), value: f.KP.FRIENDS_AND_ALL_GUILDS },
            { name: g.intl.string(g.t.YOIKBt), desc: g.intl.string(g.t.y0JZ4s), value: f.KP.FRIENDS_AND_SMALL_GUILDS },
            { name: g.intl.string(g.t.u0nlJv), desc: g.intl.string(g.t["4jnKHu"]), value: f.KP.FRIENDS_ONLY },
        ],
        useValue: c.KP.useSetting,
        setValue: function (e) {
            let t = c.KP.getSetting();
            if ((c.KP.updateSetting(e), !(0, x.W1)("ProfilePrivacySetting"))) return;
            let n = (0, _.gS)(t, e);
            null != n &&
                (0, C.openModalLazy)(async () => {
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
    _v = (0, o.zZ)(u.X.PROFILE_PRIVACY_CATEGORY, {
        usePredicate: () => (0, x.lX)("ProfilePrivacyCategory"),
        useTitle: () => g.intl.string(g.t.ul884f),
        useSubtitle: () => g.intl.string(g.t.J0SFL2),
        buildLayout: () => [_b, _I],
    });
var _j = i(814278),
    _y = i(936388),
    _O = i(714763);
let _R = (0, o.zD)(u.X.PERSISTENT_VERIFICATION_CODES_SETTING, {
    useTitle: () => g.intl.string(g.t["opi/XK"]),
    useSubtitle: () => g.intl.format(g.t["/T+ZlP"], { helpArticle: (0, _j.Lu)() }),
    useValue: function () {
        return (0, O.bG)([_O.A], () => _O.A.getPersistentCodesEnabled());
    },
    setValue: function (e) {
        _y.A.updatePersistentCodesEnabled(e);
    },
});
var _L = i(787392);
function _D() {
    return (0, O.yK)([_L.A], () => _L.A.getUserIds());
}
var _P = i(803306),
    _G = i(966327),
    _U = i(882129);
function _M(e) {
    let { userId: t, count: i } = e,
        { analyticsLocations: n } = (0, nG.Ay)(),
        s = (0, O.bG)([t3.default], () => t3.default.getUser(t)),
        l = xx.Ay.getFormattedName(s),
        r = N.useCallback(() => {
            (0, _j.kj)(t);
        }, [t]),
        a = N.useCallback(() => (0, EE.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: n }), [t, n]);
    return (
        N.useEffect(() => {
            (0, _P.wz)(t);
        }, [t]),
        (0, p.jsxs)("div", {
            className: _U.uW,
            children: [
                null != s && (0, p.jsx)(_G.A, { className: _U.my, user: s, size: iH._3.SIZE_40 }),
                (0, p.jsxs)("div", {
                    className: _U.Qq,
                    children: [
                        (0, p.jsx)(M.D, {
                            className: _U.Xh,
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
                (0, p.jsx)(M.D, { onClick: r, className: _U.Qz, children: (0, p.jsx)(lS.u, { size: "xs" }) }),
            ],
        })
    );
}
function _V(e) {
    let { className: t, userId: i, verification: n, index: s } = e,
        l = (0, _j.tC)(n.timestamp),
        r = N.useCallback(() => {
            (0, _j.W0)(i, n.verifiedKey);
        }, [n.verifiedKey, i]);
    return (0, p.jsxs)("div", {
        className: t,
        children: [
            (0, p.jsxs)("div", {
                className: _U.Qq,
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
                className: _U.Kk,
                onClick: r,
                children: (0, p.jsx)(cU.P, { size: "md", color: w.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function _k(e) {
    let { userId: t } = e,
        i = (0, O.yK)([_L.A], () =>
            eR()(_L.A.getUserVerifiedKeys(t))
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
            (0, p.jsx)(_M, { userId: t, count: i.length }),
            i.map((e, n) =>
                (0, p.jsxs)(
                    N.Fragment,
                    {
                        children: [
                            (0, p.jsx)(_V, { className: _U.nM, userId: t, index: n, verification: e }),
                            n !== i.length - 1 && (0, p.jsx)("div", { className: _U.yF }),
                        ],
                    },
                    `${n}-${e.timestamp}`,
                ),
            ),
        ],
    });
}
var _w = i(691263);
let _B = (0, o.E2)(u.X.USERS_VERIFIED_KEYS_LIST_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t["5b3FNI"])],
        usePredicate: function () {
            let e = _D();
            return null != e && e.length > 0;
        },
        Component: function () {
            let e = _D();
            return (0, p.jsxs)(fX.h, {
                children: [
                    (0, p.jsx)(fX._, {
                        header: g.intl.string(g.t["5b3FNI"]),
                        description: g.intl.format(g.t.jrTSWU, { helpArticle: (0, _j.dc)() }),
                    }),
                    e.map((e) => (0, p.jsx)("div", { className: _w.A, children: (0, p.jsx)(_k, { userId: e }) }, e)),
                ],
            });
        },
    }),
    _F = (0, o.zZ)(u.X.VOICE_SECURITY_CATEGORY, {
        useTitle: () => g.intl.string(g.t.xVk85F),
        useInlineNotice: function () {
            return N.useMemo(
                () => ({
                    type: ef.lT.INLINE_NOTICE,
                    noticeType: "info",
                    useText: () => g.intl.format(g.t["/6sFWa"], { helpArticle: (0, _j.aW)() }),
                }),
                [],
            );
        },
        usePredicate: () => (0, ev.isDesktop)(),
        buildLayout: () => [_R, _B],
    }),
    _z = (0, o.t_)(u.X.DATA_AND_PRIVACY_PANEL, {
        useTitle: () => g.intl.string(g.t.OAuOHD),
        buildLayout: () => [_N, _v, _g, _F],
    }),
    _Y = (0, o.i4)(u.X.DATA_AND_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.OAuOHD),
        icon: _a.m,
        buildLayout: () => [_z],
    });
var _X = i(782603);
let _H = (0, o.Hn)(u.X.MOBILE_NOTIFICATION_DELAY, {
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
    _K = (0, o.zD)(u.X.TEXT_TO_SPEECH_COMMAND, {
        useTitle: () => g.intl.string(g.t["btbS+Z"]),
        useSubtitle: () =>
            g.intl.format(g.t.Q5crhR, { onClick: () => (0, ej.openUserSettings)(u.X.TTS_PLAYBACK_RATE) }),
        useValue: c.on.useSetting,
        setValue: c.on.updateSetting,
    }),
    _W = (0, o.Qx)(u.X.TEXT_TO_SPEECH_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.JZxxGx),
        useSubtitle: () => g.intl.string(g.t.HDLtJl),
        useValue: () => (0, O.bG)([oJ.A], () => oJ.A.getTTSType()),
        setValue: (e) => o3.default.setTTSType(e),
        useOptions: () => [
            { name: g.intl.string(g.t.B1AGeJ), value: q.aVn.ALL_CHANNELS },
            { name: g.intl.string(g.t.uzZg9e), value: q.aVn.SELECTED_CHANNEL },
            { name: g.intl.string(g.t.DYO5Oi), value: q.aVn.NEVER },
        ],
        usePredicate: () => i5.$j,
    }),
    _Z = u.X.NOTIFICATIONS_ADVANCED_ACCORDION,
    _q = (0, o.bd)(_Z, {
        useTitle: (e) => (e ? g.intl.string(g.t.RyimDk) : g.intl.string(g.t.CUICbO)),
        useCollapsedSubtitle: function () {
            return aW(_Z, {
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
        buildLayout: () => [_H, _K, _W],
    }),
    _Q = (0, o.zZ)(u.X.NOTIFICATIONS_ADVANCED_CATEGORY, {
        useTitle: () => g.intl.string(g.t["31DySj"]),
        buildLayout: () => [_q],
    }),
    _J = (0, o.zD)(u.X.ENABLE_UNREAD_MESSAGE_BADGE, {
        useTitle: () => g.intl.string(g.t.VH8AIJ),
        useSubtitle: () => g.intl.string(g.t["9K4qwX"]),
        useValue: () => (0, O.bG)([oJ.A], () => !oJ.A.getDisableUnreadBadge()),
        setValue: (e) => o3.default.setDisableUnreadBadge(!e),
    }),
    _$ = (0, o.zZ)(u.X.NOTIFICATIONS_BADGES_CATEGORY, {
        useTitle: () => g.intl.string(g.t.l6w3Vj),
        buildLayout: () => [_J],
    });
var _0 = i(100406),
    _1 = i(878460),
    _2 = i(431144);
let _3 = _2.px.map((e) =>
        (0, o.zD)(`${u.X.EMAIL_LIST_ITEM_PREFIX}${e.category}`, {
            useTitle: e.label,
            useSubtitle: e.subLabel,
            useValue: () =>
                ((e) => {
                    let { categories: t } = (0, O.cf)([_1.A], () => _1.A.getEmailSettings());
                    return !!t[e];
                })(e.category),
            setValue: (t) => (0, _0.CA)(e.category, t),
        }),
    ),
    _6 = (0, o.Tf)(u.X.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
        useTitle: () => g.intl.string(g.t.Ra9Pwk),
        useSubtitle: () => g.intl.string(g.t.iYjQ8X),
        useLabel: () => g.intl.string(g.t.KT1pBA),
        useDisabled: () => {
            let { categories: e } = (0, O.cf)([_1.A], () => _1.A.getEmailSettings());
            return _2.Zk.every((t) => !e[t]);
        },
        onClick: () => (0, _0.NI)(),
        useVariant: () => "critical-secondary",
    }),
    _4 = (0, o.zZ)(u.X.NOTIFICATIONS_EMAIL_CATEGORY, {
        useTitle: () => g.intl.string(g.t["w/qqKK"]),
        initialize: function () {
            let { initialized: e } = _1.A.getEmailSettings();
            e || (0, _0.cR)();
        },
        buildLayout: () => [..._3, _6],
    }),
    _5 = (0, o.zD)(u.X.DESKTOP_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t["/0WCll"]),
        useSubtitle: () => g.intl.string(g.t.wF9ih3),
        useValue: () => (0, O.bG)([oJ.A], () => oJ.A.getDesktopType()) !== q.nRU.NEVER,
        setValue: (e) => o3.default.setDesktopType(e ? q.nRU.ALL : q.nRU.NEVER),
    });
var _8 = i(832712),
    _7 = i(543465),
    _9 = i(406535),
    Ie = i(790782);
let It = (0, o.zD)(u.X.EXPERIMENTAL_UNREADS, {
    useTitle: () => g.intl.string(g.t["k6m/si"]),
    useSubtitle: () => g.intl.string(g.t.LGynPs),
    useValue: () => (0, O.bG)([_7.Ay], () => _7.Ay.useNewNotifications),
    setValue: function (e) {
        _8.A.setAccountFlag(_9.i.USE_NEW_NOTIFICATIONS, e),
            e ||
                (AI.w.set("turnedOffNewNotifications", !0),
                Y.default.track(q.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: H.A.getGuildsArray().filter(
                        (e) => _7.Ay.resolveGuildUnreadSetting(e) === Ie.e.ONLY_MENTIONS,
                    ).length,
                }));
    },
    usePredicate: () =>
        (0, O.bG)(
            [t3.default, _7.Ay],
            () =>
                t3.default.getCurrentUser()?.isStaff() ||
                t3.default.getCurrentUser()?.isStaffPersonal() ||
                _7.Ay.useNewNotifications,
        ),
});
var Ii = i(70730);
let In = (0, o.zD)(u.X.FRIEND_ANNIVERSARY_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.NjOMvh),
        usePersistentBadge: () => ({ badgeType: ef.Xi.BETA }),
        useValue: c.oz.useSetting,
        setValue: function (e) {
            c.oz.updateSetting(e),
                Y.default.track(q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: _9.Y.ACCOUNT,
                    friend_anniversary_notifications: e,
                });
        },
        useSearchTerms: () => [g.intl.string(g.t.hi4dSk)],
        usePredicate: () => {
            let { enabled: e, showDmPrompts: t } = Ii.u.getConfig({ location: "FriendAnniversaryNotifications" });
            return e && t;
        },
    }),
    Is = (0, E.mj)({
        kind: "user",
        name: "2026-03-friend-is-online-v3",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 } },
    }),
    Il = (0, o.zD)(u.X.FRIEND_ONLINE_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.sQQgFj),
        useValue: c.NR.useSetting,
        setValue: function (e) {
            c.NR.updateSetting(e),
                Y.default.track(q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: _9.Y.ACCOUNT,
                    friend_online_notifications: e,
                });
        },
        usePredicate: () => Is.useConfig({ location: "FriendOnlineNotifications" }).showSettingsToggle,
    }),
    Ir = (0, E.mj)({
        name: "2026-03-game-update-notification",
        kind: "user",
        defaultConfig: { showToggle: !1 },
        variations: { 0: { showToggle: !1 }, 1: { showToggle: !0 } },
    });
var Ia = i(275007);
let Io = (0, o.zD)(u.X.GAME_UPDATE_NOTIFICATIONS, {
    useTitle: () => g.intl.string(Ia.default["ZZIP+o"]),
    useValue: c.JV.useSetting,
    setValue: function (e) {
        c.JV.updateSetting(e),
            Y.default.track(q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                update_type: _9.Y.ACCOUNT,
                game_update_notifications: e,
            });
    },
    usePredicate: () => Ir.useConfig({ location: "SettingsRendererConfig" }).showToggle,
});
var Iu = i(571524);
let Id = (0, o.zD)(u.X.GDM_ALL_REACTION_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.nvkXtr),
        useValue: c.c3.useSetting,
        setValue: function (e) {
            c.c3.updateSetting(e),
                Y.default.track(q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: _9.Y.ACCOUNT,
                    gdm_all_reaction_notifications: e,
                });
        },
        usePredicate: function () {
            return (0, Iu.h)("GdmAllReactionNotification").showSettingsToggle;
        },
    }),
    Ic = (0, o.zD)(u.X.GO_LIVE_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.FSNIvs),
        useValue: c.Yh.useSetting,
        setValue: function (e) {
            c.Yh.updateSetting(e),
                Y.default.track(q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: _9.Y.ACCOUNT,
                    go_live_notifications: e,
                });
        },
    }),
    Ig = (0, E.mj)({
        kind: "user",
        name: "2026-01-profile-updates-notification",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 0: { showSettingsToggle: !1 }, 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 } },
    }),
    Im = (0, o.zD)(u.X.PROFILE_UPDATES_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.xBLMhQ),
        useValue: c.T3.useSetting,
        setValue: function (e) {
            c.T3.updateSetting(e),
                Y.default.track(q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: _9.Y.ACCOUNT,
                    profile_updates_notifications: e,
                });
        },
        usePredicate: () => Ig.useConfig({ location: "user_settings.ProfileUpdatesNotifications" }).showSettingsToggle,
    });
var Ih = i(815807);
let IA = (0, o.Hn)(u.X.REACTION_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.Wxj9Hp),
        useOptions: () => [
            { id: "enabled", label: g.intl.string(g.t["9x/RtT"]), value: f.Tz.NOTIFICATIONS_ENABLED },
            { id: "only_dms", label: g.intl.string(g.t.fJAbQd), value: f.Tz.ONLY_DMS },
            { id: "disabled", label: g.intl.string(g.t["xu+UDU"]), value: f.Tz.NOTIFICATIONS_DISABLED },
        ],
        useValue: c.Zp.useSetting,
        setValue: (e) => (0, Ih.n4)(e, c.Zp.getSetting()),
    }),
    IE = (0, o.zD)(u.X.SERVER_TRENDING_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t["k51K1+"]),
        useValue: c.Qr.useSetting,
        setValue: function (e) {
            c.Qr.updateSetting(e),
                Y.default.track(q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: _9.Y.ACCOUNT,
                    server_trending_notifications: e,
                });
        },
        usePredicate: () => !1,
    }),
    Ix = (0, E.mj)({
        kind: "user",
        name: "2026-04-upcoming-server-event",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 }, 3: { showSettingsToggle: !0 } },
    }),
    IT = (0, o.zD)(u.X.UPCOMING_SERVER_EVENT_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.G8NPz6),
        useValue: c.zS.useSetting,
        setValue: function (e) {
            c.zS.updateSetting(e),
                Y.default.track(q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: _9.Y.ACCOUNT,
                    upcoming_server_event_notifications: e,
                });
        },
        usePredicate: () => Ix.useConfig({ location: "UpcomingServerEventNotifications" }).showSettingsToggle,
    }),
    IS = (0, o.FW)(u.X.NOTIFICATION_SELECTION_FIELD_SET, {
        variant: "compact",
        useTitle: () => g.intl.string(g.t.FEVRDV),
        buildLayout: () => [Ic, In, Il, IE, IT, Io, Im, IA, Id],
    }),
    Ip = (0, o.zD)(u.X.TASK_BAR_FLASHING, {
        useTitle: () => g.intl.string(g.t.xSmFQG),
        useSubtitle: () => g.intl.string(g.t.bd4j4x),
        useValue: () => (0, O.bG)([oJ.A], () => oJ.A.taskbarFlash),
        setValue: (e) => o3.default.setTaskbarFlash(e),
        usePredicate: () => (0, n9.uF)(),
    }),
    IN = (0, o.zZ)(u.X.NOTIFICATIONS_OVERVIEW_CATEGORY, {
        useTitle: () => g.intl.string(g.t["/dp6yY"]),
        buildLayout: () => [_5, Ip, IS, It],
    });
var If = i(965957),
    IC = i(312671),
    I_ = i(235079);
let II = (0, o.zD)(u.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let e = o$.A.useHolidaySoundpack();
        return null == e ? "" : g.intl.format(g.t["E/OyBr"], { soundpack: g.intl.string(e.soundpackLabel) });
    },
    useValue: function () {
        let e = (0, O.bG)([IC.A], () => IC.A.getSoundpack()),
            t = o$.A.useHolidaySoundpack();
        return e === t?.soundpack;
    },
    setValue: function (e) {
        let t = o$.A.getHolidaySoundpack();
        ty()(null != t, "predicate should fail if no soundpack is available"), (0, If.p)(e ? t : I_.i.CLASSIC);
    },
    usePredicate: o$.A.useIsEligible,
});
var Ib = i(970931);
let Iv = {
        useTitle: () => g.intl.string(g.t.jD1qzM),
        sound: "message1",
        useDisabled: Ib.kB,
        useDisabledMessage: () => ((0, Ib.kB)() ? g.intl.string(g.t.cIRG0s) : void 0),
    },
    Ij = { useTitle: () => g.intl.string(g.t.XBrJT6), sound: "call_ringing" },
    Iy = (0, o.zD)(u.X.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.TzjwV9),
        useSubtitle: () => g.intl.format(g.t.OOiGCM, { onClick: () => o5("message3") }),
        useValue: () =>
            (0, O.bG)([oJ.A], () => oJ.A.getNotifyMessagesInSelectedChannel() && !oJ.A.getDisableAllSounds()),
        setValue: (e) => o3.default.setNotifyMessagesInSelectedChannel(e),
        useDisabled: () => (0, O.bG)([oJ.A], () => oJ.A.getDisableAllSounds()),
    }),
    IO = (0, o.zD)(u.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => g.intl.string(g.t["2ZhCOd"]),
        useSubtitle: () => g.intl.string(g.t.EAKdPr),
        useValue: () => (0, O.bG)([oJ.A], () => oJ.A.getDisableAllSounds()),
        setValue: (e) => o3.default.toggleDisableAllSounds(e),
    }),
    IR = (0, o.D1)(u.X.NOTIFICATION_SOUNDS_LIST, {
        initialize: function () {
            return () => {
                o4();
            };
        },
        buildLayout: () => [o8(Iv), Iy, o8(Ij), IO],
    }),
    IL = (0, o.AK)(u.X.NOTIFICATIONS_TO_VOICE_AND_VIDEO_SOUNDS_NAVIGATOR, {
        useSubtitle: () => g.intl.string(g.t["MMy+lm"]),
        useSearchTerms: () => [g.intl.string(g.t["MMy+lm"])],
        destinationKey: u.X.SOUNDS_CATEGORY,
    }),
    ID = (0, o.gN)(u.X.NOTIFICATIONS_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [IL] }),
    IP = (0, o.zZ)(u.X.NOTIFICATIONS_SOUNDS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.LweOYy),
        buildLayout: () => [II, IR, ID],
    }),
    IG = (0, o.t_)(u.X.NOTIFICATIONS_PANEL, {
        useTitle: () => g.intl.string(g.t.HcoRu0),
        buildLayout: () => [IN, IP, _$, _4, _Q],
    }),
    IU = (0, o.i4)(u.X.NOTIFICATIONS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.HcoRu0),
        icon: _X.X,
        buildLayout: () => [IG],
    }),
    IM = (0, o.WI)(u.X.USER_SECTION, {
        useTitle: () => g.intl.string(g.t.cduTBL),
        buildLayout: () => [
            NC,
            _r,
            _Y,
            ...((0, Tw.pC)("UserSection") ? [] : [Nh]),
            NO,
            ...((0, Tw.pC)("UserSection") ? [] : [SF]),
            fF,
            IU,
            N8,
        ],
    });
var IV = i(387758),
    Ik = i(271866),
    Iw = i(147964),
    IB = i(867099);
let IF = (0, o.zD)(u.X.APPLICATION_TEST_MODE, {
        useTitle: () => g.intl.string(g.t.erOqlh),
        useSubtitle: () => g.intl.string(g.t["52hMnD"]),
        usePredicate: c.Q_.useSetting,
        useValue: () => (0, O.bG)([Iw.A], () => null != Iw.A.testModeApplicationId),
        setValue: (e) => {
            e ? (0, C.openModal)((e) => (0, p.jsx)(IB.A, { ...e })) : Ik.cL();
        },
    }),
    Iz = (0, o.zD)(u.X.DEVELOPER_MODE, {
        useTitle: () => g.intl.string(g.t.ObIb1Q),
        useSubtitle: () => g.intl.format(g.t["CY6q/Q"], { apiDocsUrl: q.X7G.API_DOCS }),
        useValue: c.Q_.useSetting,
        setValue: c.Q_.updateSetting,
        usePredicate: () => d4.p5,
    }),
    IY = (0, o.zZ)(u.X.DEVELOPER_CATEGORY, { buildLayout: () => [Iz, IF] }),
    IX = (0, o.t_)(u.X.DEVELOPER_PANEL, { useTitle: () => g.intl.string(g.t["0BRxRp"]), buildLayout: () => [IY] }),
    IH = (0, o.i4)(u.X.DEVELOPER_SIDEBAR_ITEM, {
        icon: IV.G,
        useTitle: () => g.intl.string(g.t["0BRxRp"]),
        buildLayout: () => [IX],
    });
var IK = i(70688),
    IW = i(830215);
let IZ = (0, o.i4)(u.X.LOGOUT_SIDEBAR_ITEM, {
        variant: "destructive",
        useTitle: () => g.intl.string(g.t["2jxGer"]),
        icon: IK.o,
        onClick: () => {
            (0, se.A)({
                title: g.intl.string(g.t["2jxGer"]),
                subtitle: g.intl.string(g.t.SUnWBB),
                confirmText: g.intl.string(g.t["2jxGer"]),
                onConfirm: () => {
                    IW.A.logout("settings");
                },
            });
        },
        buildLayout: () => [],
    }),
    Iq = (0, o.WI)(u.X.UTILITY_SECTION, { buildLayout: () => [IH, IZ].filter(t6.Vq) }),
    IQ = (0, o.Hr)({ buildLayout: () => [Tk, IM, h2, uO, iF, Eu, Iq], analyticsKey: "user_settings" });
