n.d(t, { D: () => C$ });
var i,
    l,
    s,
    a,
    r,
    o = n(419954),
    d = n(780964),
    u = n(682348),
    c = n(253932),
    g = n(985018),
    _ = n(395277);
let m = (0, o.zD)(d.X.ACTIVITY_PRIVACY_SETTING, {
        useTitle: () => g.intl.string(_.default.WhdCGP),
        useSubtitle: () => g.intl.string(_.default.UQ9RHJ),
        useValue: c.tz.useSetting,
        setValue: c.tz.updateSetting,
    }),
    h = (0, o.zZ)(d.X.ACTIVITY_PRIVACY_SHARING_CATEGORY, {
        useTitle: () => g.intl.string(g.t["6x5uWQ"]),
        useSearchTerms: () => [g.intl.string(g.t["8ka8li"])],
        buildLayout: () => [m],
    });
var A = n(945810),
    p = n(21973);
let T = (0, A.mj)({
        name: "2026-02-activity-privacy-matching",
        kind: "user",
        defaultConfig: { copyChanges: !1, upsell: !1 },
        variations: {
            0: { copyChanges: !1, upsell: !1 },
            1: { copyChanges: !0, upsell: !1 },
            2: { copyChanges: !0, upsell: !0 },
        },
    }),
    E = (e) => {
        let t = (0, p.lX)(e),
            n = T.useConfig({ location: e });
        return t || n.copyChanges;
    };
var S = n(627968),
    x = n(64700),
    f = n(873298),
    b = n(192308),
    N = n(365258);
let C = (0, o.Qx)(d.X.ACTIVITY_PRIVACY_PER_GUILD_DEFAULT_SETTING, {
        useTitle: () =>
            E("GuildActivitySharingDefaultSetting") ? g.intl.string(g.t.vpgck1) : g.intl.string(_.default["/LHVbt"]),
        useOptions: function () {
            let e = E("GuildActivitySharingDefaultSetting");
            return x.useMemo(
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
                                  name: g.intl.string(_.default["/sAeRY"]),
                              },
                              { value: f.Qd.ACTIVITY_STATUS_OFF, name: g.intl.string(_.default.m3oL7Q) },
                          ],
                [e],
            );
        },
        useValue: c._Z.useSetting,
        setValue: function (e) {
            let t,
                i = c._Z.getSetting();
            if (
                (c._Z.updateSetting(e),
                (t = "GuildActivitySharingDefaultSetting"),
                !(0, p.W1)(t) && !T.getConfig({ location: t }).upsell)
            )
                return;
            let l = (0, N.g8)(i, e);
            if (null == l) return;
            let s = (0, N.Xc)(e);
            (0, b.openModalLazy)(async () => {
                let { default: e } = await n.e("41996").then(n.bind(n, 32167));
                return (t) =>
                    (0, S.jsx)(e, {
                        ...t,
                        direction: l.direction,
                        affectedGuildIds: l.affectedGuildIds,
                        settingName: s,
                    });
            });
        },
    }),
    I = (0, o.zZ)(d.X.ACTIVITY_PRIVACY_PER_GUILD_CATEGORY, {
        useTitle: () =>
            E("GuildActivitySharingCategory") ? g.intl.string(g.t.VDcvrR) : g.intl.string(_.default["1PougL"]),
        useSubtitle: () =>
            E("GuildActivitySharingCategory") ? g.intl.string(g.t["/Go08F"]) : g.intl.string(_.default.OO17Lg),
        buildLayout: () => [C],
    }),
    v = (0, o.AK)(d.X.ACTIVITY_PRIVACY_TO_PROFILE_PRIVACY_NAVIGATOR, {
        useSubtitle: () => g.intl.string(g.t.J0SFL2),
        destinationKey: d.X.DATA_AND_PRIVACY_PANEL,
    }),
    y = (0, o.gN)(d.X.ACTIVITY_PRIVACY_RELATED_SETTINGS, {
        usePredicate: () => (0, p.lX)("ActivityPrivacyRelatedSettings"),
        buildLayout: () => [v],
    });
var j = n(683071),
    O = n(17928),
    R = n(331322),
    L = n(243721),
    D = n(892547),
    G = n(922016),
    P = n(550079),
    M = n(477782),
    U = n(939249),
    k = n(834730),
    V = n(847374),
    w = n(661531),
    B = n(123292),
    F = n(140735),
    z = n(498642),
    X = n(954571),
    Y = n(743790),
    H = n(71393),
    K = n(711014),
    W =
        (((i = {}).SERVER_ORDER = "server-order"),
        (i.RECENTLY_JOINED = "recently-joined"),
        (i.ACTIVITY_SHARING_ON = "activity-sharing-on"),
        (i.ACTIVITY_SHARING_OFF = "activity-sharing-off"),
        i);
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
        e.concat().sort((e, n) => {
            let i = t.includes(e.id),
                l = t.includes(n.id);
            return !i && l ? -1 : i && !l ? 1 : 0;
        }),
    "activity-sharing-off": (e, t) =>
        e.concat().sort((e, n) => {
            let i = t.includes(e.id),
                l = t.includes(n.id);
            return i && !l ? -1 : !i && l ? 1 : 0;
        }),
    "server-order": (e) => e,
};
var q = n(652215),
    Q = n(842449);
function J(e) {
    let { guild: t, isActivityRestricted: n, onToggleActivityRestrictedGuild: i } = e,
        l = (0, O.bG)([z.A], () => z.A.getMemberCount(t.id));
    return (0, S.jsxs)(R.B, {
        as: "li",
        direction: "horizontal",
        align: "center",
        gap: 16,
        children: [
            (0, S.jsx)("div", { className: Q.FO, children: (0, S.jsx)(Y.K, { guild: t, size: 48 }) }),
            (0, S.jsx)("div", {
                className: Q.QH,
                children: (0, S.jsx)(L.d, {
                    label: t.name,
                    description: g.intl.format(g.t.zRl6XR, { count: l ?? 0 }),
                    checked: !n,
                    onChange: (e) => i({ checked: e, guildId: t.id }),
                }),
            }),
        ],
    });
}
let $ = function (e) {
    let { notice: t } = e,
        {
            guilds: n,
            searchQuery: i,
            setSearchQuery: l,
            sortOrder: s,
            setSortOrder: a,
            hasActivityRestrictedGuilds: r,
            onToggleAllActivityRestrictedGuilds: o,
            onToggleActivityRestrictedGuild: d,
            isActivityRestricted: u,
            numActivityRestrictedGuilds: m,
            numTotalGuilds: h,
        } = (function () {
            let [e, t] = (0, x.useState)(""),
                [n, i] = (0, x.useState)("server-order"),
                l = (0, O.bG)([K.Ay], () => K.Ay.getFlattenedGuildIds()),
                s = (0, O.bG)([H.A], () => H.A.getGuilds()),
                a = l.map((e) => s[e]),
                r = c.Pw.useSetting(),
                [o, d] = (0, x.useState)(r);
            (0, x.useEffect)(() => {
                d(r);
            }, [r]);
            let u = async (e) => {
                    d(e);
                    try {
                        await c.Pw.updateSetting(e);
                    } catch (e) {
                        d(r);
                    }
                },
                g = 0 !== o.length,
                [_, m] = (0, x.useState)(() => Z[n](a, r)),
                h = _.map((e) => s[e.id]).filter(Boolean);
            return {
                guilds: "" === e ? h : h.filter((t) => t.name.toLowerCase().includes(e.toLowerCase())),
                sortOrder: n,
                searchQuery: e,
                setSortOrder: (e) => {
                    m(Z[e](a, r)), i(e);
                },
                setSearchQuery: t,
                onToggleActivityRestrictedGuild: (e) => {
                    let { checked: t, guildId: n } = e,
                        i = new Set(o);
                    t ? i.delete(n) : i.add(n), u([...i]);
                },
                isActivityRestricted: (e) => o.includes(e),
                hasActivityRestrictedGuilds: g,
                onToggleAllActivityRestrictedGuilds: () => {
                    g ? u([]) : u(l);
                },
                numTotalGuilds: l.length,
                numActivityRestrictedGuilds: o.length,
            };
        })(),
        A = (0, x.useId)(),
        p = (0, x.useRef)(null),
        T = (0, x.useMemo)(
            () => [
                { id: W.SERVER_ORDER, label: g.intl.string(g.t.STMPJ2), value: W.SERVER_ORDER },
                { id: W.RECENTLY_JOINED, label: g.intl.string(g.t.CbaapP), value: W.RECENTLY_JOINED },
                { id: W.ACTIVITY_SHARING_ON, label: g.intl.string(_.default.ZI51JZ), value: W.ACTIVITY_SHARING_ON },
                {
                    id: W.ACTIVITY_SHARING_OFF,
                    label: g.intl.string(_.default["+kxafn"]),
                    value: W.ACTIVITY_SHARING_OFF,
                },
            ],
            [],
        ),
        E = T.find((e) => e.value === s)?.label ?? "";
    return (0, S.jsxs)("div", {
        className: Q.iE,
        children: [
            t,
            (0, S.jsxs)("div", {
                className: Q.N1,
                children: [
                    (0, S.jsx)(D.I, {
                        query: i,
                        onChange: l,
                        onClear: () => {
                            X.default.track(q.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_cleared",
                                sort_order: s,
                                activity_restricted_guild_count: m,
                                total_guild_count: h,
                            }),
                                l("");
                        },
                        onFocus: () =>
                            X.default.track(q.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_focused",
                                sort_order: s,
                                activity_restricted_guild_count: m,
                                total_guild_count: h,
                            }),
                        onBlur: () =>
                            X.default.track(q.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_blurred",
                                sort_order: s,
                                activity_restricted_guild_count: m,
                                total_guild_count: h,
                            }),
                        placeholder: g.intl.string(g.t["H+nRYw"]),
                        "aria-label": g.intl.string(g.t["5h0QOP"]),
                        inputProps: { "aria-controls": A, "aria-expanded": !0 },
                    }),
                    n.length > 0 &&
                        (0, S.jsxs)("div", {
                            className: Q.gO,
                            children: [
                                (0, S.jsx)(G.Y, {
                                    targetElementRef: p,
                                    position: "bottom",
                                    align: "left",
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, S.jsx)(P.W, {
                                            navId: "guild-sort-order-menu",
                                            onClose: t,
                                            "aria-label": g.intl.string(g.t.LxVjvJ),
                                            onSelect: t,
                                            children: (0, S.jsx)(M.rX, {
                                                children: T.map((e) => {
                                                    let { id: t, label: n, value: i } = e;
                                                    return (0, S.jsx)(
                                                        M.iD,
                                                        {
                                                            id: t,
                                                            group: "sort-order",
                                                            label: n,
                                                            checked: s === i,
                                                            action: () => {
                                                                X.default.track(
                                                                    q.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED,
                                                                    {
                                                                        interaction: "sort_order_changed",
                                                                        sort_order: i,
                                                                        activity_restricted_guild_count: m,
                                                                        total_guild_count: h,
                                                                    },
                                                                ),
                                                                    a(i);
                                                            },
                                                        },
                                                        t,
                                                    );
                                                }),
                                            }),
                                        });
                                    },
                                    children: (e) =>
                                        (0, S.jsxs)(U.D, {
                                            ...e,
                                            innerRef: p,
                                            className: Q.Ku,
                                            children: [
                                                (0, S.jsx)(k.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-subtle",
                                                    children: E,
                                                }),
                                                (0, S.jsx)(V.a, { size: "xs", color: w.A.colors.TEXT_SUBTLE }),
                                            ],
                                        }),
                                }),
                                (0, S.jsx)(B.Q, {
                                    variant: "primary",
                                    textVariant: "text-sm/medium",
                                    onClick: o,
                                    text: r ? g.intl.string(g.t["7lxcLO"]) : g.intl.string(g.t.zh6UEs),
                                }),
                            ],
                        }),
                ],
            }),
            (0, S.jsx)(F.A, {
                "aria-live": "polite",
                role: "region",
                children: g.intl.format(_.default.EvzDff, { count: n.length }),
            }),
            (0, S.jsxs)("ul", {
                className: Q.X1,
                id: A,
                "aria-label": g.intl.string(g.t["7hB4kg"]),
                children: [
                    0 === n.length &&
                        (0, S.jsx)("div", {
                            className: Q.pb,
                            children: (0, S.jsx)(k.E, {
                                className: Q.R$,
                                variant: "text-lg/medium",
                                children: g.intl.string(g.t["Xe+fJM"]),
                            }),
                        }),
                    n.map((e) =>
                        (0, S.jsx)(
                            J,
                            { guild: e, isActivityRestricted: u(e.id), onToggleActivityRestrictedGuild: d },
                            e.id,
                        ),
                    ),
                ],
            }),
        ],
    });
};
var ee = n(780479);
let et = (0, o.E2)(d.X.ACTIVITY_PRIVACY_PER_GUILD_SETTING, {
        useSearchTerms: () => [g.intl.string(_.default["/LHVbt"])],
        Component: function () {
            let e = c.tz.useSetting()
                ? null
                : (0, S.jsx)("div", {
                      className: ee.l,
                      children: (0, S.jsx)(j.w, { type: "warning", children: g.intl.string(_.default["xxI0/W"]) }),
                  });
            return (0, S.jsx)($, { notice: e });
        },
    }),
    en = (0, o.zZ)(d.X.ACTIVITY_PRIVACY_MY_SERVERS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.TqdOvC),
        useSubtitle: () => (E("MyServersCategory") ? g.intl.string(_.default.OO17Lg) : null),
        buildLayout: () => [et, y],
    }),
    ei = (0, o.zD)(d.X.ACTIVITY_PRIVACY_FRIENDS_JOIN_SETTING, {
        useTitle: () => g.intl.string(_.default.khuuzv),
        useSubtitle: () => g.intl.string(_.default["8EWsJ8"]),
        useValue: () => c.e.useSetting(),
        setValue: (e) => c.e.updateSetting(e),
    }),
    el = (0, o.zD)(d.X.ACTIVITY_PRIVACY_VOICE_JOIN_SETTING, {
        useTitle: () => g.intl.string(_.default.Uz5Ipi),
        useSubtitle: () => g.intl.string(_.default.CZI2Gb),
        useValue: () => c.UM.useSetting(),
        setValue: (e) => c.UM.updateSetting(e),
    }),
    es = (0, o.zZ)(d.X.ACTIVITY_PRIVACY_GAME_JOINING_CATEGORY, {
        useTitle: () => g.intl.string(_.default["89YBr5"]),
        buildLayout: () => [ei, el],
        useSearchTerms: () => [g.intl.string(g.t.VOszPA)],
    });
var ea = n(359778),
    er = n(22917);
let eo = (0, o.E2)(d.X.ACTIVITY_PRIVACY_TERMS, {
        useSearchTerms: () => [],
        Component: function () {
            return (0, S.jsx)(ea.Z, {
                type: ea.Z.Types.PRIMARY,
                className: er.A,
                children: (0, S.jsx)(k.E, {
                    variant: "text-sm/normal",
                    children: g.intl.format(g.t.xvCsx4, { termsLink: q.X7G.TERMS, privacyLink: q.X7G.PRIVACY }),
                }),
            });
        },
    }),
    ed = (0, o.zZ)(d.X.ACTIVITY_PRIVACY_TERMS_CATEGORY, { buildLayout: () => [eo] }),
    eu = (0, o.t_)(d.X.ACTIVITY_PRIVACY_PANEL, {
        useTitle: () => g.intl.string(g.t.Cq98yL),
        buildLayout: () => [h, I, en, es, ed],
    }),
    ec = (0, o.i4)(d.X.ACTIVITY_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.Cq98yL),
        icon: u._,
        buildLayout: () => [eu],
    });
var eg = n(935399),
    e_ = n(625657),
    em = n(534514),
    eh = n(821609),
    eA = n(554146),
    ep = n(932001),
    eT = n(843402),
    eE = n(589051),
    eS = n(592598),
    ex = n(46373),
    ef = n(933297),
    eb = n(351906),
    eN = n(532624),
    eC = n(773371),
    eI = n(256415),
    ev = n(723702),
    ey = n(858897),
    ej = n(17460),
    eO = n(735438),
    eR = n.n(eO),
    eL = n(350535),
    eD = n(672396);
let eG = eM(null);
function eP() {
    var e;
    let t = eM(eG);
    (e = eG),
        eR().isEqual(eR().omit(t, "old_enabled"), eR().omit(e, "old_enabled")) ||
            (X.default.track(q.HAw.OVERLAY_SETTINGS_UPDATED, { ...t }), (eG = t));
}
function eM(e) {
    let t = eI.default.getNotificationPositionMode(),
        n = t !== q.G6Q.DISABLED,
        i = eN.Ay.getOverlayKeybind(),
        l = eN.Ay.getOverlayChatKeybind();
    return {
        enabled: eC.default.enabled,
        notifications_enabled: n,
        notifications_position: n ? t : null,
        text_notifications_mode: eS.A.isNotificationDisabled(eD.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != i ? (0, eL.dI)(i.shortcut) : null,
        text_activation_hotkey: null != l ? (0, eL.dI)(l.shortcut) : null,
        text_opacity_slider: eI.default.getTextWidgetOpacity(),
        old_enabled: e?.enabled ?? eC.default.enabled,
    };
}
var eU = n(793574),
    ek = n(237984),
    eV = n(503698),
    ew = n.n(eV),
    eB = n(890856),
    eF = n(481384);
let ez = (e) => {
    e.preventDefault(), e.stopPropagation();
};
function eX(e) {
    let {
        header: t,
        icon: n,
        title: i,
        description: l,
        action: s,
        hint: a,
        warning: r,
        onClick: o,
        "aria-label": d,
        className: u,
    } = e;
    return (0, S.jsxs)("div", {
        className: ew()(eF.HS, u),
        children: [
            (0, S.jsxs)(eB.s, {
                "aria-label": d,
                onClick: o,
                children: [
                    null != t && (0, S.jsx)("div", { className: eF.x_, children: t }),
                    (0, S.jsxs)("div", {
                        className: eF.rN,
                        children: [
                            null != n && (0, S.jsx)("div", { className: eF.$t, children: n }),
                            (0, S.jsxs)("div", {
                                className: eF.c8,
                                children: [
                                    (0, S.jsx)(k.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: eF.SZ,
                                        children: i,
                                    }),
                                    null != l &&
                                        (0, S.jsx)(k.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children: l,
                                        }),
                                    null != a &&
                                        (0, S.jsx)(k.E, {
                                            variant: "text-xxs/medium",
                                            color: "text-muted",
                                            children: a,
                                        }),
                                ],
                            }),
                            (0, S.jsx)("div", { className: eF.a$, children: s }),
                        ],
                    }),
                ],
            }),
            (0, S.jsx)("div", { className: eF.Om, children: r }),
        ],
    });
}
let eY = (0, o.E2)(d.X.OVERLAY_BUG_REPORTER_SETTING, {
    Component: function () {
        return (0, S.jsx)(eX, {
            title: g.intl.string(g.t["z4/l+V"]),
            description: g.intl.string(g.t["3aZq/0"]),
            action: (0, S.jsx)(eh.$, {
                variant: "primary",
                text: g.intl.string(g.t.s2nVhG),
                onClick: () => {
                    (0, ek.b)(eU.A.USER_SETTINGS, q.BRT.APP);
                },
            }),
            "aria-label": g.intl.string(g.t["z4/l+V"]),
        });
    },
    useSearchTerms: () => [g.intl.string(g.t["z4/l+V"])],
});
var eH = n(812729),
    eK = n.n(eH),
    eW = n(587895),
    eZ = n(429913),
    eq = n(616356),
    eQ = n(328153);
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
        [n] = (0, eZ.A)([eJ(e, t)]);
    return { runningGame: t ?? void 0, runningGameApplication: n ?? void 0 };
}
var e0 = n(990078),
    e1 = n(478016),
    e2 = n(31300),
    e5 = n(780907),
    e3 = n(684013),
    e8 = n(56562),
    e4 = n(964486),
    e9 = n(137177),
    e7 = n(496885),
    e6 = n(810412),
    te = n(41984),
    tt = n(833551),
    tn = n(562519);
let ti = 5 * n(927813).A.Millis.DAY,
    tl = new tn.A("overlay_survey_timestamps");
function ts(e, t) {
    let i, l;
    (i = Date.now()),
        (null != (l = Array.from(tl.values()).reduce((e, t) => Math.max(e, t), 0)) && i - l < ti) ||
            Array.from(tl.values()).filter((e) => {
                let t = new Date(e);
                return t.getMonth() === new Date().getMonth() && t.getFullYear() === new Date().getFullYear();
            }).length >= 3 ||
            (0, b.openModalLazy)(async () => {
                let i,
                    { default: l } = await n.e("82318").then(n.bind(n, 387101));
                return (i = Date.now()), tl.add(i), (n) => (0, S.jsx)(l, { ...n, clientSettingType: e, gameId: t });
            });
}
var ta = n(512950),
    tr = n(975571),
    to = n(935671);
function td() {
    (0, to.sL)("overlay-settings");
}
function tu(e) {
    let { className: t, game: n } = e;
    return (0, to.NP)() && null != n && n.elevated
        ? (0, S.jsx)("div", {
              className: t,
              children: (0, S.jsx)(ta.p, {
                  messageType: ta.Y.WARNING,
                  action: (0, S.jsx)(eh.$, {
                      variant: "secondary",
                      size: "sm",
                      text: g.intl.string(g.t["1iI46O"]),
                      onClick: td,
                  }),
                  children: g.intl.format(g.t["LJzl+0"], { helpCenterLink: tr.A.getArticleURL(q.MVz.SYSTEM_SERVICE) }),
              }),
          })
        : null;
}
var tc = n(760751),
    tg = n(189081),
    t_ = n(9302),
    tm = n(311678),
    th = n(320448);
let tA = new Set([
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
function tp(e) {
    let { children: t, className: n, onExpand: i, ...l } = e,
        [s, a] = x.useState(!1);
    return (0, S.jsx)(tm.N, {
        className: eF.uR,
        collapsibleContent: (0, S.jsx)("div", { className: eF.oV, children: t }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, S.jsx)(eX, {
                ...l,
                onClick: (e) => {
                    var n;
                    a((n = !s)), i?.(n), t?.(e);
                },
                className: ew()(eF.AC, n),
                action: (0, S.jsxs)("div", {
                    className: eF.rc,
                    children: [
                        l.action,
                        s
                            ? (0, S.jsx)(V.a, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--interactive-text-active)",
                              })
                            : (0, S.jsx)(th._, {
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
let tT = (0, o.E2)(d.X.OVERLAY_CURRENT_GAME, {
    Component: function () {
        let { runningGame: e, runningGameApplication: t } = e$(),
            n = e?.pid,
            i = (0, O.bG)(
                [tt.default],
                () => (null == e || null == n ? null : tt.default.getTrackedGameByPid(n)),
                [e, n],
                eK(),
            ),
            { enabledLegacy: l, enabledOOP: s } = (0, O.cf)(
                [tc.A, tg.A],
                () =>
                    null == e && null == i
                        ? { enabledLegacy: !1, enabledOOP: !1 }
                        : null == e
                          ? { enabledLegacy: i?.legacyEnabled ?? !1, enabledOOP: i?.oopEnabled ?? !1 }
                          : (0, eQ.hw)(e, !1, [tc.A, tg.A]),
                [e, i],
            ),
            a = (0, O.bG)([eQ.Ay, tc.A, tg.A], () => (null == e ? null : (0, eQ.xU)(e, eQ.Ay, tc.A, tg.A)), [e], eK()),
            [r, o] = x.useState(s),
            [d, u] = x.useState(l),
            [c, _] = x.useState(!1);
        x.useEffect(() => {
            o(s), u(l);
        }, [s, l]);
        let m = !(0, t_.supportsLegacy)(),
            h = !(0, t_.supportsOutOfProcess)(),
            { legacyEnabled: A, oopEnabled: p } = (0, O.cf)([tt.default], () => tt.default.getGlobalEnabledStatus()),
            T = (t, n) => {
                if (null == e) return;
                let i = !1,
                    l = !1;
                switch (n) {
                    case e6.OverlayToggledClientSettingType.LEGACY_GAME:
                        u(t), e5.Ay.toggleOverlay(e, t, r), (i = !t && d);
                        break;
                    case e6.OverlayToggledClientSettingType.OOP_GAME:
                        o(t), e5.Ay.toggleOverlay(e, d, t), (l = !t && r);
                        break;
                    case e6.OverlayToggledClientSettingType.LEGACY:
                        e3.A.setEnabled(t, p), (0, e6.Q3)(t, e6.OverlayToggledClientSettingType.LEGACY, e.id ?? null);
                        break;
                    case e6.OverlayToggledClientSettingType.OOP:
                        e3.A.setEnabled(A, t), (0, e6.Q3)(t, e6.OverlayToggledClientSettingType.OOP, e.id ?? null);
                }
                (i || l) &&
                    ts(
                        i
                            ? e6.OverlayToggledClientSettingType.LEGACY_GAME
                            : e6.OverlayToggledClientSettingType.OOP_GAME,
                        e.id ?? null,
                    );
            },
            E = m && h,
            f = !A && !p,
            b = !r && !A && d && !m,
            N = !d && !p && r && !h,
            C = i?.overlayMethod === te.Ue.Disabled,
            I = i?.state === te.AR.OVERLAY_RENDERING && !C,
            v = i?.state != null && tA.has(i.state) && !C,
            y = i?.overlayMethod === te.Ue.OutOfProcess,
            j = i?.overlayMethod === te.Ue.OutOfProcessLimitedInteraction,
            R = i?.overlayMethod === te.Ue.Hook,
            D = i?.state === te.AR.OVERLAY_CRASHED || i?.state === te.AR.OVERLAY_CRASHED_DISABLED,
            G = !r && !d,
            [P, M] = (() => {
                switch (!0) {
                    case I && y:
                        return [
                            g.intl.format(g.t.hFVBIg, {
                                overlayMethod: g.intl.string(g.t.a3eXSw),
                                overlayMethodHook: function (e, t) {
                                    return (0, S.jsx)(
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
                    case I && j:
                        return [
                            g.intl.format(g.t.hFVBIg, {
                                overlayMethod: g.intl.string(g.t["506Aba"]),
                                overlayMethodHook: function (e, t) {
                                    return (0, S.jsx)(
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
                    case I && R:
                        return [
                            g.intl.format(g.t.hFVBIg, {
                                overlayMethod: g.intl.string(g.t.bvlpDR),
                                overlayMethodHook: function (e, t) {
                                    return (0, S.jsx)(
                                        k.E,
                                        { tag: "span", variant: "text-sm/medium", color: "text-strong", children: e },
                                        t,
                                    );
                                },
                            }),
                            (function () {
                                switch (!0) {
                                    case i?.fullscreenType !== e8.aI.BORDERLESS_FULLSCREEN:
                                        return g.intl.string(g.t.mJmbeC);
                                    case h:
                                        return g.intl.string(g.t.C7bLTQ);
                                    case !i?.oopEnabled:
                                        return g.intl.string(g.t.WiY24u);
                                    case !p:
                                        return g.intl.string(g.t.cAFVsL);
                                    case !i?.supportsOutOfProcess:
                                        return g.intl.string(g.t.XcGEcs);
                                    default:
                                        return g.intl.string(g.t.bJXH2v);
                                }
                            })(),
                        ];
                    case D:
                        return [g.intl.string(g.t.OFC2aw), null];
                    case E:
                        return [g.intl.string(g.t.m7X4az), null];
                    case f:
                        return [g.intl.string(g.t["9DUS5l"]), null];
                    case G:
                        return [g.intl.string(g.t.nQ9EdJ), null];
                    case b:
                    case N:
                        return [g.intl.string(g.t.VWUn0a), null];
                    case v:
                        if (y) return [g.intl.string(g.t["s8+CFq"]), null];
                        if (R) return [g.intl.string(g.t.JEEdqt), null];
                        if (j) return [g.intl.string(g.t.pzBMwY), null];
                        return [g.intl.string(g.t["2Xhy9k"]), null];
                    case null == i:
                        return [g.intl.string(g.t.vwHPRi), null];
                    case C: {
                        let e = i?.fullscreenType === e8.aI.FULLSCREEN ? g.intl.string(g.t.mJmbeC) : null;
                        return [g.intl.string(g.t.VPW4XY), e];
                    }
                    default:
                        return [g.intl.string(g.t.ONovP5), null];
                }
            })();
        (0, e4.Ay)(() => {
            e5.Ay.getDetectableGames();
        });
        let [V, B] = x.useMemo(
            () =>
                v
                    ? ["text-muted", w.A.colors.TEXT_MUTED.css]
                    : I && j
                      ? ["text-feedback-warning", w.A.colors.TEXT_FEEDBACK_WARNING.css]
                      : I && y
                        ? ["text-feedback-positive", w.A.colors.TEXT_FEEDBACK_POSITIVE.css]
                        : I && R
                          ? ["text-strong", w.A.colors.TEXT_STRONG.css]
                          : ["interactive-text-default", w.A.colors.INTERACTIVE_TEXT_DEFAULT.css],
            [v, I, j, y, R],
        );
        return null == e
            ? null
            : (0, S.jsxs)(tp, {
                  onExpand: _,
                  className: c ? eF.tx : void 0,
                  title: (0, S.jsxs)(S.Fragment, {
                      children: [
                          t?.name ?? a?.name ?? e?.gameName ?? "",
                          null != a && a.verified
                              ? (0, S.jsx)(e0.m, {
                                    text: g.intl.string(g.t["4PJP5p"]),
                                    children: (0, S.jsx)(e7.A, {
                                        size: 16,
                                        color: w.A.colors.BACKGROUND_BRAND.css,
                                        children: (0, S.jsx)(e1.U, {
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
                  hint: null != M ? M : void 0,
                  header: (0, S.jsxs)(S.Fragment, {
                      children: [
                          I || v
                              ? (0, S.jsx)(e2.k, { size: "xxs", color: B })
                              : (0, S.jsx)("div", { className: eF.W4 }),
                          (0, S.jsx)(k.E, {
                              variant: "text-xs/semibold",
                              color: V,
                              children: g.intl.string(g.t.CDOx3w),
                          }),
                      ],
                  }),
                  icon: (0, S.jsx)(e9.A, { game: t, pid: e?.pid, size: e9.M.MEDIUM }),
                  "aria-label": g.intl.string(g.t["87O5GC"]),
                  action: (0, S.jsx)(U.D, {
                      onClick: (e) => ez(e),
                      children: (0, S.jsx)(L.d, {
                          checked: (r && p) || (d && A),
                          disabled: E,
                          onChange: (t) => {
                              ((t, n) => {
                                  if (null == e) return;
                                  let i = !1,
                                      l = !1;
                                  switch (n) {
                                      case "game":
                                          e5.Ay.toggleOverlay(e, t, t), u(t), o(t), (i = !t && d), (l = !t && r);
                                          break;
                                      case "global":
                                          e3.A.setEnabled(t, t), (i = !t && A), (l = !t && p);
                                          break;
                                      case "both":
                                          e3.A.setEnabled(t, t),
                                              e5.Ay.toggleOverlay(e, t, t),
                                              u(t),
                                              o(t),
                                              (i = (!t && A) || (!t && d)),
                                              (l = (!t && p) || (!t && r));
                                  }
                                  let s = null;
                                  i
                                      ? (s =
                                            "game" === n
                                                ? e6.OverlayToggledClientSettingType.LEGACY_GAME
                                                : e6.OverlayToggledClientSettingType.LEGACY)
                                      : l &&
                                        (s =
                                            "game" === n
                                                ? e6.OverlayToggledClientSettingType.OOP_GAME
                                                : e6.OverlayToggledClientSettingType.OOP),
                                      null != s && ts(s, e.id ?? null);
                              })(
                                  t,
                                  ((e, t) => {
                                      let n = !t && e,
                                          i = !p && r,
                                          l = !A && d,
                                          s = !r && p,
                                          a = !d && A;
                                      switch (!0) {
                                          case n && (i || l) && (s || a):
                                              return "both";
                                          case n && (i || l):
                                              return "global";
                                          default:
                                              return "game";
                                      }
                                  })(t, (r && p) || (d && A)),
                              );
                          },
                      }),
                  }),
                  warning: (0, S.jsx)(tu, { className: eF.Hh, game: e }),
                  children: [
                      (0, S.jsx)(eX, {
                          title: g.intl.string(g.t["7BlVIs"]),
                          description: g.intl.string(g.t.ndgADE),
                          hint: p ? void 0 : g.intl.string(g.t.cAFVsL),
                          "aria-label": g.intl.string(g.t["7BlVIs"]),
                          action: (0, S.jsxs)(S.Fragment, {
                              children: [
                                  (0, S.jsx)(L.d, {
                                      checked: r && p,
                                      disabled: h,
                                      onChange: (e) => {
                                          e && !p
                                              ? T(e, e6.OverlayToggledClientSettingType.OOP)
                                              : T(e, e6.OverlayToggledClientSettingType.OOP_GAME);
                                      },
                                  }),
                                  (0, S.jsx)("div", { className: eF.Kz }),
                              ],
                          }),
                      }),
                      (0, S.jsx)(eX, {
                          title: g.intl.string(g.t.BfFpW1),
                          description: g.intl.string(g.t.OzInYk),
                          hint: A ? void 0 : g.intl.string(g.t["3sYHXm"]),
                          "aria-label": g.intl.string(g.t.BfFpW1),
                          action: (0, S.jsxs)(S.Fragment, {
                              children: [
                                  (0, S.jsx)(L.d, {
                                      checked: d && A,
                                      disabled: m,
                                      onChange: (e) => {
                                          e && !A
                                              ? T(e, e6.OverlayToggledClientSettingType.LEGACY)
                                              : T(e, e6.OverlayToggledClientSettingType.LEGACY_GAME);
                                      },
                                  }),
                                  (0, S.jsx)("div", { className: eF.Kz }),
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
var tE = n(364522),
    tS = n(206885),
    tx = n(871633);
function tf(e) {
    let { game: t, gameApplication: n } = e,
        i = x.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        l = (0, O.bG)([eW.A], () => (null != n ? n : eW.A.getApplication(t?.id)), [n, t]);
    return (0, S.jsx)(e9.A, { game: l, pid: i, size: e9.M.SMALL });
}
function tb(e) {
    let {
            rawGame: t,
            gameApplication: n,
            supportDisabled: i,
            getEnabledFromStatus: l,
            onChange: s,
            clientSettingType: a,
            ariaLabel: r,
        } = e,
        o = (0, O.cf)([eQ.Ay, tc.A, tg.A], () => (0, eQ.xU)(t, eQ.Ay, tc.A, tg.A)),
        d = (0, O.cf)([tc.A, tg.A], () => (0, eQ.hw)(t, !1, [tc.A, tg.A]), [t]),
        u = l(d),
        [c, g] = x.useState(u);
    return (
        x.useEffect(() => {
            g(u);
        }, [u]),
        (0, S.jsx)(eX, {
            title: t.name,
            icon: (0, S.jsx)(tf, { game: o, gameApplication: n }),
            "aria-label": r,
            action: (0, S.jsxs)(S.Fragment, {
                children: [
                    (0, S.jsx)(L.d, {
                        checked: c,
                        disabled: i,
                        onChange: (e) => {
                            let n;
                            return (n = !e && c), void (g(e), s(e, o, d), n && ts(a, o.id ?? t?.id ?? null));
                        },
                    }),
                    (0, S.jsx)("div", { className: eF.Kz }),
                ],
            }),
        })
    );
}
let tN = (0, o.E2)(d.X.OVERLAY_LEGACY_SETTING, {
        Component: function () {
            let [e, t] = x.useState(!1),
                { legacyEnabled: n, oopEnabled: i } = (0, O.cf)([tt.default], () =>
                    tt.default.getGlobalEnabledStatus(),
                ),
                l = (0, O.yK)([eQ.Ay], () => eQ.Ay.getGamesSeen(!0)).filter((e) => !(0, tx.n1)(e)),
                s = (0, eZ.A)(l.map((e) => e.id)),
                a = !(0, t_.supportsLegacy)(),
                r = (e) => {
                    e3.A.setEnabled(e, i);
                    let t = eQ.Ay.getCurrentGameForAnalytics()?.id ?? null;
                    (0, e6.Q3)(e, e6.OverlayToggledClientSettingType.LEGACY, t),
                        !e && n && ts(e6.OverlayToggledClientSettingType.LEGACY, t);
                },
                o = (e, t, n) => {
                    let { enabledOOP: i } = n;
                    e5.Ay.toggleOverlay(t, e, i);
                },
                d = x.useMemo(
                    () =>
                        (0, t_.supportsLegacy)()
                            ? a
                                ? g.intl.string(g.t.r9jEVw)
                                : g.intl.string(g.t.OzInYk)
                            : g.intl.string(g.t["8Ox6/E"]),
                    [a],
                );
            return 0 === l.length
                ? (0, S.jsx)(eX, {
                      title: g.intl.string(g.t.BfFpW1),
                      description: d,
                      "aria-label": g.intl.string(g.t.BfFpW1),
                      className: eF.dA,
                      action: (0, S.jsxs)(S.Fragment, {
                          children: [
                              (0, S.jsx)(L.d, { checked: n, disabled: a, onChange: (e) => r(e) }),
                              tS.O && (0, S.jsx)("div", { className: eF.Kz }),
                          ],
                      }),
                  })
                : (0, S.jsxs)(tp, {
                      onExpand: t,
                      className: e ? eF.tx : void 0,
                      title: g.intl.string(g.t.BfFpW1),
                      description: d,
                      "aria-label": g.intl.string(g.t.BfFpW1),
                      action: (0, S.jsx)(U.D, {
                          onClick: (e) => ez(e),
                          children: (0, S.jsx)(L.d, { checked: n, disabled: a, onChange: (e) => r(e) }),
                      }),
                      children: [
                          (0, S.jsx)("div", {
                              className: eF.SC,
                              children: (0, S.jsx)(k.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: g.intl.string(g.t.FzoWRo),
                              }),
                          }),
                          (0, S.jsx)(tE.Ip, {
                              className: eF.XG,
                              children: l.map((e, t) =>
                                  (0, S.jsx)(
                                      tb,
                                      {
                                          rawGame: e,
                                          clientSettingType: e6.OverlayToggledClientSettingType.LEGACY_GAME,
                                          supportDisabled: a,
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
    tC = (0, o.E2)(d.X.OVERLAY_OOP_SETTING, {
        Component: function () {
            let [e, t] = x.useState(!1),
                { oopEnabled: n, legacyEnabled: i } = (0, O.cf)([tt.default], () =>
                    tt.default.getGlobalEnabledStatus(),
                ),
                l = !(0, t_.supportsOutOfProcess)(),
                s = (0, O.yK)([eQ.Ay], () => eQ.Ay.getGamesSeen(!0)).filter((e) => !(0, tx.n1)(e)),
                a = (0, eZ.A)(s.map((e) => e.id)),
                r = (e) => {
                    let t = !e && n;
                    e3.A.setEnabled(i, e);
                    let l = eQ.Ay.getCurrentGameForAnalytics()?.id ?? null;
                    (0, e6.Q3)(e, e6.OverlayToggledClientSettingType.OOP, l),
                        t && ts(e6.OverlayToggledClientSettingType.OOP, l);
                },
                o = (e, t, n) => {
                    let { enabledLegacy: i } = n;
                    e5.Ay.toggleOverlay(t, e, i);
                },
                d = x.useMemo(
                    () =>
                        tS.O ? (l ? g.intl.string(g.t.C7bLTQ) : g.intl.string(g.t.ndgADE)) : g.intl.string(g.t.m7X4az),
                    [l],
                );
            return 0 === s.length
                ? (0, S.jsx)(eX, {
                      title: g.intl.string(g.t["7BlVIs"]),
                      description: d,
                      "aria-label": g.intl.string(g.t["7BlVIs"]),
                      className: eF.dA,
                      action: (0, S.jsxs)(S.Fragment, {
                          children: [
                              (0, S.jsx)(L.d, { checked: n, disabled: l, onChange: (e) => r(e) }),
                              tS.O && (0, S.jsx)("div", { className: eF.Kz }),
                          ],
                      }),
                  })
                : (0, S.jsxs)(tp, {
                      onExpand: t,
                      className: e ? eF.tx : void 0,
                      title: g.intl.string(g.t["7BlVIs"]),
                      description: d,
                      "aria-label": g.intl.string(g.t["7BlVIs"]),
                      action: (0, S.jsx)(U.D, {
                          onClick: (e) => ez(e),
                          children: (0, S.jsx)(L.d, { checked: n, disabled: l, onChange: (e) => r(e) }),
                      }),
                      children: [
                          (0, S.jsx)("div", {
                              className: eF.SC,
                              children: (0, S.jsx)(k.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: g.intl.string(g.t.FzoWRo),
                              }),
                          }),
                          (0, S.jsx)(tE.Ip, {
                              className: eF.XG,
                              children: s.map((e, t) =>
                                  (0, S.jsx)(
                                      tb,
                                      {
                                          rawGame: e,
                                          clientSettingType: e6.OverlayToggledClientSettingType.OOP_GAME,
                                          gameApplication: a[t],
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
    tI = (0, o.zZ)(d.X.OVERLAY_ENABLE_CATEGORY, {
        useSubnavLabel: () => g.intl.string(g.t["/dp6yY"]),
        buildLayout: () => [tT, tC, tN, eY],
    }),
    tv = (0, o.zD)(d.X.OVERLAY_CLICKABLE_REGIONS_SETTING, {
        useValue: () => (0, O.bG)([eI.default], () => !eI.default.disableClickableRegions),
        setValue: (e) => {
            e3.A.setDisableClickableRegions(!e);
        },
        useTitle: () => g.intl.string(g.t["+eFXxq"]),
        useSubtitle: () => g.intl.string(g.t.kivMAp),
    });
var ty = n(284009),
    tj = n.n(ty),
    tO = n(97260),
    tR = n(635242);
let tL = (0, o.E2)(d.X.OVERLAY_KEYBIND_SETTING, {
    Component: function () {
        let e = (0, O.bG)([eN.Ay], () => eN.Ay.getOverlayKeybind()),
            t = !(0, t_.supportsLegacy)(),
            n = !(0, t_.supportsOutOfProcess)(),
            [i, l] = (0, O.yK)([eQ.Ay], () => [eQ.Ay.canShowAdminWarning, eQ.Ay.getVisibleGame()], []),
            s = (0, to.NP)(),
            a = null != l && l.elevated && i && !s,
            r = !(0, eN.DV)(e?.shortcut ?? []);
        return (0, S.jsx)("div", {
            className: eF.hc,
            children: (0, S.jsxs)("div", {
                className: eF.eH,
                children: [
                    (0, S.jsxs)("div", {
                        className: eF.Bu,
                        children: [
                            (0, S.jsx)(k.E, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: g.intl.string(g.t.VsAZcC),
                            }),
                            a &&
                                (0, S.jsx)(k.E, {
                                    variant: "text-xs/normal",
                                    color: "text-feedback-warning",
                                    className: eF.y7,
                                    children: g.intl.string(g.t.NsowVa),
                                }),
                            r &&
                                (0, S.jsx)(k.E, {
                                    variant: "text-xs/normal",
                                    color: "text-feedback-warning",
                                    className: eF.y7,
                                    children: g.intl.string(g.t["UNoTw/"]),
                                }),
                        ],
                    }),
                    (0, S.jsx)("div", {
                        className: eF.IH,
                        children: (0, S.jsx)(tR.A, {
                            disabled: t && n,
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
var tD = n(515183),
    tG = n(682763);
let tP = (0, o.zD)(d.X.OVERLAY_LIMITED_INTERACTION_OVERRIDE_SETTING, {
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
                n = t?.id,
                i = (0, O.bG)([eS.A], () => eS.A.isLimitedInteractionOverrideEnabled(n)),
                l = null != e && (0, tD.qJ)(e.pid);
            return i || l;
        },
        setValue: (e) => {
            let t,
                n,
                i,
                l,
                { runningGameApplication: s } =
                    ((t = eq.A.getStreamerActiveStreamMetadata()),
                    (l = eJ(
                        t,
                        (i =
                            null != (n = eQ.Ay.getVisibleGame())
                                ? eQ.Ay.getGameOrTransformedSubgameForPID(n.pid)
                                : null),
                    )),
                    { runningGame: i ?? void 0, runningGameApplication: eW.A.getApplication(l) ?? void 0 });
            null != s && (0, tG.x8)(s.id, e);
        },
        useTitle: () => g.intl.string(g.t.wgVQND),
        useSubtitle: () => g.intl.string(g.t["5SsyF5"]),
    }),
    tM = (0, o.zZ)(d.X.OVERLAY_GENERAL_CATEGORY, { buildLayout: () => [tL, tP, tv] });
var tU = n(93465);
let tk = [
    {
        title: g.t.eVE4LX,
        description: g.t["72WNqk"],
        disabledSetting: tU.M.TEXT_CHAT,
        key: d.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT,
    },
    {
        title: g.t.oifnSh,
        description: g.t.bgU5r0,
        disabledSetting: tU.M.WELCOME_GENERAL,
        key: d.X.OVERLAY_NOTIFICATIONS_WELCOME,
    },
    {
        title: g.t.hqsZJW,
        description: g.t.kHjdqc,
        disabledSetting: tU.M.GO_LIVE_NUDGE,
        key: d.X.OVERLAY_NOTIFICATIONS_GO_LIVE,
    },
    {
        title: g.t.sop3rn,
        description: g.t.pjgffc,
        disabledSetting: tU.M.GAME_ACTIVITY,
        key: d.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY,
    },
    {
        title: g.t["2QVhbb"],
        description: g.t.wQ4ilB,
        disabledSetting: tU.M.NOW_PLAYING,
        key: d.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING,
    },
    {
        title: g.t.giM9fA,
        description: g.t.EhAfWj,
        disabledSetting: tU.M.NOW_PLAYING_DIFFERENT_GAMES,
        key: d.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING_DIFFERENT_GAMES,
        usePredicate: () => {
            let { showNowPlayingForDifferentGames: e } = (0, eE.M8)(
                    "OverlayV3NowPlayingDifferentGamesNotificationSetting",
                ),
                t = (0, O.bG)([eS.A], () => eS.A.isNotificationDisabledBySetting(tU.M.NOW_PLAYING));
            return !!e && !t;
        },
    },
];
function tV(e) {
    return (0, o.zD)(e.key, {
        useTitle: () => g.intl.string(e.title),
        useSubtitle: () => g.intl.string(e.description),
        useValue: () => !(0, O.bG)([eS.A], () => eS.A.getDisabledNotifications().has(e.disabledSetting)),
        setValue: (t) => {
            e3.A.setNotificationDisabledSetting(e.disabledSetting, !t);
        },
        usePredicate: e.usePredicate,
    });
}
let tw = (0, o.FW)(d.X.OVERLAY_NOTIFICATIONS_LIST, {
        variant: "compact",
        useTitle: () => g.intl.string(g.t.gnKWdS),
        isTitleHiddenVisually: !0,
        buildLayout: () => tk.map(tV),
    }),
    tB = (0, o.zZ)(d.X.OVERLAY_NOTIFICATIONS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.xOE5bA),
        buildLayout: () => [tw],
    }),
    tF = (0, o.Hn)(d.X.OVERLAY_VOICE_WIDGET_AVATAR_SIZE, {
        useTitle: () => g.intl.string(g.t.dnvZSg),
        useValue: () => (0, O.bG)([eI.default], () => eI.default.getAvatarSizeMode()),
        setValue: (e) => {
            e3.A.setAvatarSizeMode(e);
        },
        useOptions: () => [
            { id: "large", label: g.intl.string(g.t.YcOxtr), value: q.OSZ.LARGE },
            { id: "small", label: g.intl.string(g.t.BKIKqx), value: q.OSZ.SMALL },
        ],
    }),
    tz = (0, o.Hn)(d.X.OVERLAY_VOICE_WIDGET_DISPLAY_NAMES, {
        useTitle: () => g.intl.string(g.t.J0dpcB),
        useValue: () => (0, O.bG)([eI.default], () => eI.default.getDisplayNameMode()),
        setValue: (e) => {
            e3.A.setDisplayNameMode(e);
        },
        useOptions: () => [
            { id: "always", label: g.intl.string(g.t.nBmDrT), value: q.pwA.ALWAYS },
            { id: "speaking", label: g.intl.string(g.t["2OvIZY"]), value: q.pwA.ONLY_WHILE_SPEAKING },
            { id: "never", label: g.intl.string(g.t.ekjlPL), value: q.pwA.NEVER },
        ],
    }),
    tX = (0, o.Hn)(d.X.OVERLAY_VOICE_WIDGET_DISPLAY_USERS, {
        useTitle: () => g.intl.string(g.t.swsWWC),
        useValue: () => (0, O.bG)([eI.default], () => eI.default.getDisplayUserMode()),
        setValue: (e) => {
            e3.A.setDisplayUserMode(e);
        },
        useOptions: () => [
            { id: "always", label: g.intl.string(g.t.nBmDrT), value: q.f5z.ALWAYS },
            { id: "speaking", label: g.intl.string(g.t["2OvIZY"]), value: q.f5z.ONLY_WHILE_SPEAKING },
        ],
    });
var tY = n(391973),
    tH = n(489277),
    tK = n(897720),
    tW = n(38502);
function tZ() {
    let e = tH.A.getWidgetByType(q.uss.VOICE_V3);
    if (null == e) return null;
    let t = tW.A.getWidget(e.id);
    return null != t && (0, tK.ZO)(t) ? t : null;
}
n(392164);
let tq = (0, o.sN)(d.X.OVERLAY_VOICE_WIDGET_MAX_USERS, {
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
var tQ = n(43990),
    tJ = n(450740),
    t$ = n(968898),
    t0 = n(95701),
    t1 = n(889227),
    t2 = n(288737),
    t5 = n(287809),
    t3 = n(403362);
function t8(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = "456" + Math.floor(1e6 * Math.random());
    return {
        voiceState: new t2.A({
            channelId: "123",
            userId: l,
            sessionId: "789",
            mute: t,
            deaf: n,
            selfMute: !1,
            selfDeaf: !1,
            selfVideo: !1,
            selfStream: !1,
            discoverable: i,
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
let t4 = (0, o.E2)(d.X.OVERLAY_VOICE_WIDGET_PREVIEW, {
        Component: function () {
            let e,
                t = (0, O.bG)([t5.default], () => t5.default.getCurrentUser()),
                {
                    avatarSizeMode: n,
                    displayNameMode: i,
                    displayUserMode: l,
                } = (0, O.cf)([eI.default], () => ({
                    avatarSizeMode: eI.default.getAvatarSizeMode(),
                    displayNameMode: eI.default.getDisplayNameMode(),
                    displayUserMode: eI.default.getDisplayUserMode(),
                })),
                [s] = x.useState(() => [
                    t8(g.intl.string(g.t.C0ZDvo), !0, !1),
                    t8(g.intl.string(g.t.iOtj8E), !1, !1, !0),
                    t8(g.intl.string(g.t["0oqNgL"]), !1, !0),
                ]),
                a = (0, O.bG)([tH.A, tW.A], () => {
                    let e = tH.A.getWidgetByType(q.uss.VOICE_V3);
                    if (null == e) return null;
                    let t = tW.A.getWidget(e.id);
                    return null != t && (0, tK.ZO)(t) ? t : null;
                }),
                r = a?.meta?.voiceStatesMaxShown ?? 8,
                o = [null != t ? (((e = t8(t.username)).user = t), e) : null, ...s].filter(t3.Vq),
                d = [new Map(o.map((e) => [e.user.id, e])), o.map((e) => e.user.id)],
                u = (0, S.jsx)(tQ.N, {
                    theme: q.NJ8.MIDNIGHT,
                    children: (e) =>
                        (0, S.jsxs)("div", {
                            className: ew()(eF.Y5, e),
                            children: [
                                (0, S.jsx)("div", {
                                    className: eF.kJ,
                                    children: (0, S.jsx)(tJ.DH, {
                                        id: "voice-widget",
                                        title: g.intl.string(g.t.KNJ6Vq),
                                        channel: (0, t0.createChannelRecord)({
                                            id: "123",
                                            name: "Test Channel",
                                            type: q.rbe.GUILD_VOICE,
                                            guild_id: "456",
                                        }),
                                        overlayVoiceStates: d,
                                        displayNameMode: i,
                                        displayUserMode: l,
                                        avatarSizeMode: n,
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
                                        maxDisplayedVoiceStates: r,
                                    }),
                                }),
                                (0, S.jsxs)("div", {
                                    className: eF.R$,
                                    children: [
                                        (0, S.jsx)(t$.Pl, { children: g.intl.string(g.t.KNJ6Vq) }),
                                        (0, S.jsx)(t$.CS, {}),
                                        (0, S.jsx)(t$.O0, { id: a?.id ?? "voice-widget", pinned: a?.pinned ?? !1 }),
                                    ],
                                }),
                            ],
                        }),
                });
            return (0, S.jsx)("div", { className: eF.F9, children: u });
        },
        useSearchTerms: () => [],
    }),
    t9 = (0, o.zZ)(d.X.OVERLAY_VOICE_WIDGET_CATEGORY, {
        useTitle: () => g.intl.string(g.t.r1TZfh),
        buildLayout: () => [t4, tF, tz, tX, tq],
    });
var t7 = n(49999),
    t6 = n(192391);
function ne() {
    let [e, t] = (0, ep.kn)([eA.M.OVERLAY_OOP_SETTINGS_NUX], void 0, !0);
    return ((0, eg.Ay)(() => () => {
        t(t7.i.AUTO_DISMISS);
    }),
    e !== eA.M.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, S.jsxs)(S.Fragment, {
              children: [
                  (0, S.jsxs)("div", {
                      className: t6.xC,
                      children: [
                          (0, S.jsx)("div", {
                              children: (0, S.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/10b8ab47f3371360233219f4b20fa86155553ddb810ceb8688654738bf7e15d0.png",
                                  alt: g.intl.string(g.t.mdXZh1),
                                  className: t6.tl,
                              }),
                          }),
                          (0, S.jsx)("div", {
                              children: (0, S.jsxs)("div", {
                                  className: t6.vJ,
                                  children: [
                                      (0, S.jsx)(em.D, {
                                          variant: "heading-xl/medium",
                                          color: "text-strong",
                                          children: g.intl.string(g.t.jzjJQg),
                                      }),
                                      (0, S.jsx)(k.E, {
                                          variant: "text-md/normal",
                                          color: "text-muted",
                                          children: g.intl.string(g.t["5dOfxb"]),
                                      }),
                                  ],
                              }),
                          }),
                          (0, S.jsx)("div", {
                              children: (0, S.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/2aa57f16c71171fc8e0edb8cca60735f1192195344d17fa667de6d3ca8163ba0.png",
                                  alt: g.intl.string(g.t.mdXZh1),
                                  className: t6.lh,
                              }),
                          }),
                          (0, S.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: t6.VV,
                              children: (0, S.jsx)(eh.$, {
                                  variant: "primary",
                                  text: g.intl.string(g.t.Q26diF),
                                  onClick: () => void t(t7.i.DISMISS),
                              }),
                          }),
                      ],
                  }),
                  (0, S.jsx)(ex.A, { className: t6.yF }),
              ],
          });
}
function nt() {
    let e = (0, O.bG)([eb.A], () => eb.A.enabled),
        t = (0, eE.Mn)("OverlayStreamerModeNotice");
    return e && t
        ? (0, S.jsxs)(S.Fragment, {
              children: [
                  (0, S.jsx)(j.w, {
                      type: "warning",
                      children: g.intl.format(g.t.fuEX5B, {
                          onClick: () => (0, ey.openUserSettings)(d.X.STREAMER_MODE_CATEGORY),
                      }),
                  }),
                  (0, S.jsx)(ex.A, { className: t6.yF }),
              ],
          })
        : null;
}
let nn = (0, o.t_)(d.X.OVERLAY_PANEL, {
        initialize: function () {
            return (
                eP(),
                eN.Ay.addChangeListener(eP),
                eS.A.addChangeListener(eP),
                eI.default.addChangeListener(eP),
                eC.default.addChangeListener(eP),
                ev.isPlatformEmbedded && (0, eT.a2)(),
                () => {
                    eN.Ay.removeChangeListener(eP),
                        eS.A.removeChangeListener(eP),
                        eI.default.removeChangeListener(eP),
                        eC.default.removeChangeListener(eP),
                        ev.isPlatformEmbedded && (0, eT.e0)();
                }
            );
        },
        useTitle: () => g.intl.string(g.t["9cb1Uz"]),
        decoration: {
            type: ef.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                return (0, S.jsxs)(S.Fragment, { children: [(0, S.jsx)(ne, {}), (0, S.jsx)(nt, {})] });
            },
        },
        buildLayout: () => [tI, tM, t9, tB],
    }),
    ni = (0, o.i4)(d.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["9cb1Uz"]),
        icon: e_.l,
        usePredicate: ej.b_,
        buildLayout: () => [nn],
    });
var nl = n(687966),
    ns = n(396478),
    na = n(270003),
    nr = n(227309),
    no = n(363195),
    nd = n(1215),
    nu = n(39623),
    nc = n(952270),
    ng = n(138134),
    n_ = n(414079),
    nm = n(29160),
    nh = n(650583),
    nA = n(402627),
    np = n(653307);
let nT = (0, ev.isWindows)();
function nE(e) {
    let { rawGame: t, nowPlaying: i = !1, isOverride: l, subgames: s, isSubgame: a = !1, parentGame: r } = e,
        o = (0, O.cf)([eQ.Ay, tc.A, tg.A], () => (0, eQ.xU)(t, eQ.Ay, tc.A, tg.A)),
        { canToggleDetection: d, isCurrentGameDetectionEnabled: u } = (0, O.cf)([eQ.Ay], () => ({
            canToggleDetection: null == r || eQ.Ay.isDetectionEnabled(r),
            isCurrentGameDetectionEnabled: eQ.Ay.isDetectionEnabled(o),
        })),
        c = (0, O.bG)([eQ.Ay], () => eQ.Ay.getVisibleGame()),
        [_, m] = x.useState(!1),
        h = x.useMemo(
            () =>
                (0, tx.n1)(o)
                    ? a
                        ? o.gameName
                        : g.intl.formatToPlainString(g.t.G6BGdx, { subgameName: o.gameName })
                    : o.name,
            [o, a],
        ),
        [A, p] = x.useState(h ?? "???"),
        T = ew()(np.tR, {
            [nA.LO]: !i,
            [nA.Rw]: i,
            [nA.FB]: null != o && i,
            [nA.xL]: a,
            [nA.fG]: null != s && s.length > 0,
        });
    function E() {
        null != s && s.length > 0 && u
            ? (0, b.openModalLazy)(async () => {
                  let { Modal: e } = await n.e("4823").then(n.bind(n, 158954));
                  return (t) =>
                      (0, S.jsx)(e, {
                          ...t,
                          title: g.intl.formatToPlainString(g.t.PZ4fKc, { platform: h }),
                          subtitle: g.intl.formatToPlainString(g.t.ZIQbfb, { platform: h }),
                          actions: [
                              { text: g.intl.string(g.t["ETE/oC"]), onClick: () => t.onClose(), variant: "secondary" },
                              {
                                  text: g.intl.string(g.t.Fmjztz),
                                  onClick: () => {
                                      e5.Ay.toggleDetection(o), t.onClose();
                                  },
                                  variant: "primary",
                              },
                          ],
                      });
              })
            : e5.Ay.toggleDetection(o);
    }
    let f = null != c && (0, eQ.Es)(o) === (0, eQ.Es)(c),
        N = (null != r && r.id === c?.id) || f || (null != s && s.some((e) => e.id === c?.id));
    return (0, S.jsxs)(S.Fragment, {
        children: [
            (0, S.jsxs)("div", {
                className: T,
                children: [
                    (0, S.jsxs)("div", {
                        className: ew()(nA.$K, np.Vd),
                        children: [
                            o.verified && !l
                                ? (0, S.jsxs)("div", {
                                      className: nA.HS,
                                      children: [
                                          (0, S.jsx)("div", { className: nA.mO, children: h }),
                                          (0, S.jsx)(e0.m, {
                                              text: g.intl.string(g.t["4PJP5p"]),
                                              children: (0, S.jsx)(e7.A, {
                                                  className: nA.qf,
                                                  size: 18,
                                                  color: w.A.unsafe_rawColors.BRAND_500.css,
                                                  children: (0, S.jsx)(e1.U, {
                                                      size: "custom",
                                                      width: 18,
                                                      height: 18,
                                                      color: w.A.unsafe_rawColors.WHITE.css,
                                                  }),
                                              }),
                                          }),
                                      ],
                                  })
                                : (0, S.jsx)("input", {
                                      className: ew()(nA.mO, nA.sr),
                                      type: "text",
                                      maxLength: 128,
                                      value: A,
                                      onBlur: function () {
                                          o.name !== A && e5.Ay.editName(o, A);
                                      },
                                      onKeyDown: function (e) {
                                          e.key === nh.dh.ENTER && (e.currentTarget.blur(), e.preventDefault());
                                      },
                                      onChange: (e) => p(e.target.value),
                                  }),
                            (function () {
                                let e,
                                    t,
                                    { played: n, exePath: l } = o;
                                return (
                                    i || f
                                        ? (e = g.intl.string(g.t.VbV5dv))
                                        : null != n && "" !== n && (e = g.intl.format(g.t["gGeOE+"], { when: n })),
                                    (0, S.jsx)("div", {
                                        className: nA.GN,
                                        children: (0, S.jsx)(nm.A, {
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
                    l || _
                        ? null
                        : (0, S.jsx)("div", {
                              className: ew()(np.tR, np.oA, np.LT, nA.E3),
                              children: (0, S.jsx)(e0.m, {
                                  text: g.intl.string(g.t["y0B+lo"]),
                                  children: (0, S.jsx)(U.D, {
                                      "aria-label": g.intl.string(g.t["y0B+lo"]),
                                      className: nA.ym,
                                      onClick: function () {
                                          if (_) return;
                                          let e = null != o.id ? tc.A.getDetectableGame(o.id) : null;
                                          X.default.track(q.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
                                              application_id: e?.id,
                                              game_name: (0, tx.n1)(o) ? o.gameName : o.name,
                                          }),
                                              m(!0),
                                              (0, b.openModalLazy)(async () => {
                                                  let { default: t } = await n.e("27495").then(n.bind(n, 651930));
                                                  return (n) =>
                                                      (0, S.jsx)(t, {
                                                          ...n,
                                                          detectedActivity: {
                                                              name: o.name ?? "",
                                                              application_id: e?.id ?? o.id ?? void 0,
                                                              type: q.$pd.PLAYING,
                                                          },
                                                          onSubmitted: () => {},
                                                      });
                                              });
                                      },
                                      children: (0, S.jsx)(ng.i, {
                                          size: "md",
                                          color: "currentColor",
                                          className: nA.Lj,
                                          colorClass: nA.GS,
                                      }),
                                  }),
                              }),
                          }),
                    (function () {
                        let { detectable: e } = o,
                            t =
                                e && d
                                    ? (0, S.jsx)(nu.b, {
                                          size: "md",
                                          color: "currentColor",
                                          className: nA.Lj,
                                          colorClass: nA.GS,
                                      })
                                    : (0, S.jsx)(nc.G, {
                                          size: "md",
                                          color: "currentColor",
                                          className: d ? nA.$V : nA.zN,
                                          colorClass: nA.GS,
                                      });
                        return (0, S.jsx)("div", {
                            className: ew()(np.tR, np.oA, np.LT, nA.E3),
                            children: (0, S.jsx)(e0.m, {
                                text: g.intl.string(g.t.QmitzM),
                                children: d
                                    ? (0, S.jsx)(U.D, {
                                          "aria-label": g.intl.string(g.t.QmitzM),
                                          className: nA.ym,
                                          onClick: E,
                                          children: t,
                                      })
                                    : t,
                            }),
                        });
                    })(),
                    (function () {
                        if (!nT || null != r) return null;
                        let { overlay: e, overlayWarn: t } = o,
                            n = e
                                ? (0, S.jsx)(e2.k, {
                                      size: "md",
                                      color: "currentColor",
                                      className: nA.Lj,
                                      colorClass: nA.GS,
                                  })
                                : (0, S.jsx)(nd.n, {
                                      size: "md",
                                      color: "currentColor",
                                      className: nA.$V,
                                      colorClass: nA.GS,
                                  }),
                            i = t
                                ? (0, S.jsx)(e0.m, {
                                      text: g.intl.string(g.t.Vfw2L5),
                                      children: (0, S.jsx)("i", { className: nA.kb }),
                                  })
                                : null;
                        return (0, S.jsxs)("div", {
                            className: ew()(np.tR, np.oA, np.LT, nA.E3),
                            children: [
                                i,
                                (0, S.jsx)(e0.m, {
                                    text: g.intl.string(g.t["1+O+Tu"]),
                                    children: (0, S.jsx)(U.D, {
                                        "aria-label": g.intl.string(g.t["1+O+Tu"]),
                                        className: nA.ym,
                                        onClick: () => {
                                            var t;
                                            return (t = !e), void e5.Ay.toggleOverlay(o, t, t);
                                        },
                                        children: n,
                                    }),
                                }),
                            ],
                        });
                    })(),
                    (i && !l) || N
                        ? null
                        : (0, S.jsx)(n_.A, {
                              className: nA.LS,
                              onClick: function () {
                                  e5.Ay.deleteEntry(o),
                                      s?.forEach((e) => {
                                          e5.Ay.deleteEntry(e);
                                      });
                              },
                          }),
                ],
            }),
            null != s &&
                s.length > 0 &&
                !i &&
                (0, S.jsx)("div", {
                    className: nA.AQ,
                    children: s.map((e, t) =>
                        (0, S.jsxs)(
                            x.Fragment,
                            {
                                children: [
                                    (0, S.jsx)(nE, { rawGame: e, isOverride: !1, isSubgame: !0, parentGame: o }),
                                    t !== s.length - 1 && (0, S.jsx)("div", { className: nA.PQ }),
                                ],
                            },
                            (0, eQ.Es)(e),
                        ),
                    ),
                }),
        ],
    });
}
n(321073);
let nS = (0, n(583613).L_)(function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return new Set(t.map((e) => e.exePath));
});
function nx() {
    let e = (0, O.yK)([eQ.Ay], () => eQ.Ay.getGamesSeen(!1)),
        t = (0, O.bG)([eQ.Ay], () => nS(...eQ.Ay.getOverrides()));
    x.useEffect(() => ((0, eT.a2)(), eT.e0), []);
    let { gameHistory: n, robloxSubgameHistory: i } = x.useMemo(
        () =>
            e.reduce((e, t) => ((0, tx.n1)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
                gameHistory: [],
                robloxSubgameHistory: [],
            }),
        [e],
    );
    return { gameHistory: n, robloxSubgameHistory: i, overrideExePaths: t };
}
var nf = n(818050);
function nb() {
    let e = (0, O.bG)([no.A], () => no.A.theme);
    return (0, S.jsxs)(ns.pp, {
        theme: e,
        className: nf.eT,
        children: [
            (0, S.jsx)(ns.G8, { darkSrc: n(839628), lightSrc: n(446404), width: 430, height: 250 }),
            (0, S.jsx)(ns.SG, { children: g.intl.string(g.t["1yiJwn"]) }),
        ],
    });
}
function nN() {
    let { gameHistory: e, robloxSubgameHistory: t, overrideExePaths: n } = nx();
    return 0 === e.length
        ? (0, S.jsx)(nb, {})
        : (0, S.jsx)(na.n, {
              children: (0, S.jsx)("div", {
                  children: e.map((e) =>
                      (0, S.jsx)(
                          nE,
                          { rawGame: e, isOverride: n.has(e.exePath), subgames: e.id === nr.a7 ? t : void 0 },
                          (0, eQ.Es)(e),
                      ),
                  ),
              }),
          });
}
let nC = (0, o.E2)(d.X.REGISTERED_GAMES_ADDED_GAMES_SETTING, {
    useSearchTerms: () => [],
    Component: () => (0, S.jsx)(nN, {}),
});
var nI = n(424994);
let nv = (0, o.zZ)(d.X.REGISTERED_GAMES_ADDED_GAMES_CATEGORY, {
    buildLayout: () => [nC],
    useTitle: () => g.intl.string(g.t.jCOdvx),
    useSubtitle: () => g.intl.format(g.t.KPA3m9, { igdbLink: nI.s8 }),
});
var ny = n(305866),
    nj = n(783878),
    nO = n(404778),
    nR = n(133801),
    nL = n(604949);
function nD(e) {
    let { onClose: t } = e,
        n = (0, O.bG)([eQ.Ay], () => eQ.Ay.getCandidateGames()),
        [i, l] = x.useState(null),
        s = n.map((e) => ({ id: e.pid.toString(), value: e, label: null != e.name ? e.name : "" }));
    return (0, S.jsxs)(ny.l, {
        className: ew()(nR.H, nL.Y_),
        "aria-label": g.intl.string(g.t.GTCx0p),
        children: [
            (0, S.jsx)(nj.Z, {
                selectionMode: "single",
                placeholder: g.intl.string(g.t.XqMe3N),
                value: i,
                options: s,
                onSelectionChange: function (e) {
                    l(e);
                },
            }),
            (0, S.jsx)(nO.c, { className: ew()(nf.Ot, nf.QB) }),
            (0, S.jsxs)("div", {
                className: ew()(nR.o, np.xM),
                children: [
                    (0, S.jsx)(B.Q, { variant: "secondary", text: g.intl.string(g.t["ETE/oC"]), onClick: t }),
                    (0, S.jsx)(eh.$, {
                        variant: "primary",
                        text: g.intl.string(g.t.GTCx0p),
                        disabled: null == i,
                        onClick: function () {
                            null != i && (e5.Ay.addGame(i.pid, i.name), t());
                        },
                    }),
                ],
            }),
        ],
    });
}
var nG = n(290280);
let nP = (0, o.E2)(d.X.REGISTERED_GAMES_ADD_GAME_SETTING, {
    useSearchTerms: () => [g.intl.string(g.t.GTCx0p)],
    Component: () => {
        let e = x.useRef(null);
        return (0, S.jsxs)("div", {
            className: ew()(nG.a, nf.Gf),
            children: [
                (0, S.jsx)("span", { children: g.intl.string(g.t.xwhoqM) }),
                (0, S.jsx)(G.Y, {
                    targetElementRef: e,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, S.jsx)(nD, { onClose: t });
                    },
                    align: "center",
                    position: "bottom",
                    children: (t) =>
                        (0, S.jsx)(B.Q, {
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
function nM() {
    return (0, S.jsx)("div", {
        className: ew()(np.tR, nA.eS, nA.Rw),
        children: (0, S.jsxs)("div", {
            className: ew()(nA.$K, np.Vd),
            children: [
                (0, S.jsx)("div", { className: nA.mO, children: g.intl.string(g.t.H68X9x) }),
                (0, S.jsx)("div", { className: nA.GN, children: g.intl.string(g.t.T5Ilmw) }),
            ],
        }),
    });
}
let nU = (0, o.E2)(d.X.REGISTERED_GAMES_CURRENT_GAME_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t["MY9/Oe"])],
        Component: () => {
            let { robloxSubgameHistory: e, overrideExePaths: t } = nx(),
                n = (0, O.bG)([eQ.Ay], () => eQ.Ay.getVisibleGame());
            return null != n
                ? (0, S.jsx)(
                      nE,
                      {
                          rawGame: n,
                          isOverride: t.has(n.exePath),
                          nowPlaying: !0,
                          subgames: n.id === nr.a7 ? e : void 0,
                      },
                      (0, eQ.Es)(n),
                  )
                : (0, S.jsx)(nM, {});
        },
    }),
    nk = (0, o.zZ)(d.X.REGISTERED_GAMES_CURRENT_GAME_CATEGORY, {
        useTitle: () => g.intl.string(g.t["MY9/Oe"]),
        buildLayout: () => [nU, nP],
    }),
    nV = (0, o.t_)(d.X.REGISTERED_GAMES_PANEL, {
        useTitle: () => g.intl.string(g.t.AVDyEj),
        buildLayout: () => [nk, nv],
    }),
    nw = (0, o.i4)(d.X.REGISTERED_GAMES_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.AVDyEj),
        icon: nl._,
        usePredicate: ej.Pi,
        buildLayout: () => [nV],
    }),
    nB = (0, o.WI)(d.X.ACTIVITY_SECTION, {
        useTitle: () => g.intl.string(g.t.SmHCFf),
        buildLayout: () => [ec, nw, ni],
    });
var nF = n(550640),
    nz = n(247928),
    nX = n(97808),
    nY = n(778712),
    nH = n(775602),
    nK = n(320095),
    nW = n(963852),
    nZ = n(763754),
    nq = n(20851),
    nQ = n(486020),
    nJ = n(585001);
let n$ = new t0.nA({ id: "1337", guild_id: "1337", type: q.rbe.GUILD_TEXT, name: "preview" }),
    n0 = [
        { status: q.clD.IDLE, discriminator: "2" },
        { status: q.clD.DND, discriminator: "3" },
        { status: q.clD.ONLINE, mobile: !0, discriminator: "4" },
    ];
function n1(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return (0, nK.rh)({ ...(0, nW.Ay)({ channelId: n$.id, content: e }), state: q.cmJ.SENT, reactions: t });
}
var n2 = n(180807);
let n5 = (0, o.zD)(d.X.ENABLE_LEGACY_CHAT_INPUT, {
        useTitle: () => g.intl.string(g.t.TZ2hZH),
        useSubtitle: () => g.intl.string(g.t.Q7wgHc),
        useValue: () => c.D_.useSetting(),
        setValue: (e) => c.D_.updateSetting(e),
    }),
    n3 = (0, o.zD)(d.X.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS, {
        useTitle: () => g.intl.string(g.t.XYvMIX),
        useSubtitle: () => g.intl.string(g.t.T0rbtM),
        useValue: c._z.useSetting,
        setValue: c._z.updateSetting,
    });
var n8 = n(100767),
    n4 = n(106236),
    n9 = n(113494),
    n7 = n(782134),
    n6 = n(54570),
    ie = n(8880),
    it = n(75804);
let ii = eR().debounce((e) => {
    (0, n6.zU)(e);
}, 250);
function il() {
    let [e, t] = x.useState(!1);
    return (
        (0, eg.l0)(() => (0, n6.pr)()),
        (0, S.jsx)(eh.$, {
            text: g.intl.string(g.t.SKNnqq),
            icon: e ? n9.E : n7.u,
            size: "sm",
            onClick: () => {
                if (e) {
                    (0, n6.pr)(), t(!1);
                    return;
                }
                (0, n6.AU)(
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
let is = (0, o.E2)(d.X.TTS_PLAYBACK_RATE, {
        useSearchTerms: () => [g.intl.string(g.t.lsW5Ev)],
        Component: function () {
            let e = (0, O.bG)([ie.A], () => ie.A.speechRate);
            return (0, S.jsxs)(R.B, {
                gap: 16,
                children: [
                    (0, S.jsx)(n4.A, {
                        label: g.intl.string(g.t.lsW5Ev),
                        description: g.intl.string(g.t.Ci4wMS),
                        markers: it.P,
                        initialValue: e,
                        defaultValue: 1,
                        stickToMarkers: !0,
                        onValueChange: ii,
                        onValueRender: (e) => `x${e.toFixed(2)}`,
                        onMarkerRender: (e) =>
                            0 === e
                                ? (0, S.jsx)(k.E, {
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: g.intl.string(g.t["493lwX"]),
                                  })
                                : 10 === e
                                  ? (0, S.jsx)(k.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: g.intl.string(g.t.ZSZEdS),
                                    })
                                  : 1 === e
                                    ? (0, S.jsx)(k.E, {
                                          variant: "text-xs/medium",
                                          color: "text-feedback-positive",
                                          children: "x1.0",
                                      })
                                    : e % 1 == 0
                                      ? ""
                                      : void 0,
                    }),
                    (0, S.jsx)(il, {}),
                ],
            });
        },
        usePredicate: () => n8.$j,
    }),
    ia = (0, o.zZ)(d.X.AUDIO_AND_SCREEN_READER_CATEGORY, {
        useTitle: () => g.intl.string(g.t.XVR0Rb),
        buildLayout: () => [is, n3, n5],
    }),
    ir = (0, o.AK)(d.X.ACCESSIBILITY_TO_DISPLAY_NAVIGATOR, {
        useSubtitle: () => g.intl.string(g.t.aTfeGK),
        destinationKey: d.X.APPEARANCE_PANEL,
    }),
    io = (0, o.gN)(d.X.COLOR_AND_CONTRAST_RELATED_SETTINGS, { buildLayout: () => [ir] });
var id = n(955572);
let iu = (0, o.zD)(d.X.DESATURATE_CUSTOM_COLORS, {
    useTitle: () => g.intl.string(g.t.OCJg5f),
    useSubtitle: () => g.intl.string(g.t.HEO0s3),
    useValue: () => (0, O.bG)([nH.A], () => nH.A.desaturateUserColors),
    setValue: () => (0, id.YV)(),
});
var ic = n(652525);
let ig = (0, o.zD)(d.X.ENABLE_CUSTOM_CURSOR, {
        useTitle: () => g.intl.string(g.t["+Isihb"]),
        useSubtitle: () => g.intl.string(g.t.nNZ1Tz),
        useValue: () => (0, O.bG)([nH.A], () => nH.A.enableCustomCursor),
        setValue: (e) => (0, id.ts)(e),
        usePredicate: () => (0, ic.t)("EnableCustomCursorSetting"),
    }),
    i_ = (0, o.zD)(d.X.ENABLE_SWITCH_ICONS, {
        useTitle: () => g.intl.string(g.t["S3z+pV"]),
        useSubtitle: () => g.intl.string(g.t["3QuI9+"]),
        useValue: () => (0, O.bG)([nH.A], () => nH.A.isSwitchIconsEnabled),
        setValue: (e) => (0, id.Gm)(e),
        hasIcon: !0,
    }),
    im = (0, o.zD)(d.X.HIGH_CONTRAST_MODE, {
        useTitle: () => g.intl.string(g.t.aZlePv),
        useSubtitle: () => g.intl.string(g.t["v2qF8+"]),
        useValue: () => (0, O.bG)([nH.A], () => nH.A.isHighContrastModeEnabled),
        setValue: (e) => (0, id.uh)(e ? nH._.HIGH : nH._.DEFAULT),
        getDismissibleBadges: () => [
            { badgeType: ef.Xi.NEW, dismissibleContent: eA.M.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE },
        ],
    });
var ih = n(406360),
    iA = n(964404);
let ip = (0, o.Qx)(d.X.HIGH_DYNAMIC_RANGE, {
        useTitle: () => g.intl.string(g.t.nemtgW),
        useSubtitle: () => g.intl.string(g.t["O/Gjvn"]),
        usePersistentBadge: () => ({ badgeType: ef.Xi.BETA }),
        useOptions: function () {
            return x.useMemo(
                () => [
                    { name: g.intl.string(g.t.D5Fma9), desc: g.intl.string(g.t.Qj75ck), value: "no-limit" },
                    { name: g.intl.string(g.t.ldcGIH), desc: g.intl.string(g.t["+V/bDk"]), value: "standard" },
                ],
                [],
            );
        },
        usePredicate: function () {
            return (0, ih.i)("HDRDynamicRangeSetting");
        },
        setValue: function (e) {
            (0, id.FU)(e);
        },
        useValue: function () {
            return (0, O.bG)([iA.Ay], () => iA.Ay.hdrDynamicRange);
        },
        useSearchTerms: () => ["HDR", g.intl.string(g.t["O/Gjvn"])],
    }),
    iT = (0, o.Hn)(d.X.ROLE_STYLE, {
        useTitle: () => g.intl.string(g.t.uSOPWm),
        useSubtitle: () => g.intl.string(g.t.u7fFKS),
        useOptions: () => [
            { id: "username", label: g.intl.string(g.t.eDdMzJ), value: "username" },
            { id: "dot", label: g.intl.string(g.t.rdmJp0), value: "dot" },
            { id: "hidden", label: g.intl.string(g.t.Ji2EVJ), value: "hidden" },
        ],
        useValue: () => (0, O.bG)([nH.A], () => nH.A.roleStyle),
        setValue: (e) => (0, id.IX)(e),
    });
(0, o.Qx)(d.X.ROLE_STYLE, {
    useTitle: () => g.intl.string(g.t.uSOPWm),
    useSubtitle: () => g.intl.string(g.t["86hjzQ"]),
    useOptions: () => [
        { name: g.intl.string(g.t.YEOEi6), value: "username" },
        { name: g.intl.string(g.t.mQaro3), value: "dot" },
        { name: g.intl.string(g.t.Ji2EVJ), value: "hidden" },
    ],
    useValue: () => (0, O.bG)([nH.A], () => nH.A.roleStyle),
    setValue: (e) => (0, id.IX)(e),
});
let iE = (0, o.sN)(d.X.SATURATION, {
    useTitle: () => g.intl.string(g.t["5PWWCY"]),
    useSubtitle: () => g.intl.string(g.t.xf5S6P),
    markers: q.hH7.SATURATION_INCREMENTS,
    onMarkerRender: (e) => ((100 * e) % 2 == 0 ? `${100 * e}%` : void 0),
    stickToMarkers: !0,
    minValue: 0,
    maxValue: 1,
    getInitialValue: () => nH.A.saturation,
    asValueChanges: (e) => (0, id.HU)(e),
});
var iS = n(839214),
    ix = n(502229);
let ib = (0, iS.D)(() => ({ syncEnabled: null, updateTimeout: null })),
    iN = (0, o.zD)(d.X.SYNC_FORCED_COLORS, {
        useTitle: () => g.intl.string(g.t.cguiec),
        useSubtitle: () => g.intl.format(g.t.GwEVE2, { learnMoreLink: tr.A.getArticleURL(q.MVz.FORCED_COLORS) }),
        useValue: () => {
            let e = (0, O.bG)([nH.A], () => nH.A.syncForcedColors);
            return (
                (0, e4.Ay)(() => {
                    ib.setState({ syncEnabled: nH.A.syncForcedColors });
                }),
                ib.useState((e) => e.syncEnabled) ?? e
            );
        },
        setValue: (e) => {
            let { updateTimeout: t } = ib.getState();
            if (null != t) {
                clearTimeout(t), ib.setState({ syncEnabled: e, updateTimeout: null });
                return;
            }
            if (e === nH.A.syncForcedColors) return void ib.setState({ syncEnabled: e });
            let n = setTimeout(() => {
                (0, id.D3)(e), ib.setState({ updateTimeout: null });
            }, 150);
            ib.setState({ syncEnabled: e, updateTimeout: n });
        },
        usePredicate: () => (0, ix.D)(),
    }),
    iC = (0, o.zZ)(d.X.COLOR_AND_CONTRAST_CATEGORY, {
        useTitle: () => g.intl.string(g.t.JqvyiY),
        buildLayout: () => [iE, iu, im, ig, iN, ip, iT, i_, io],
    });
var iI = n(397438),
    iv = n(355097);
function iy(e) {
    return (0, O.bG)([iI.A], () =>
        (function (e) {
            switch (e) {
                case iv._A.REDUCED_MOTION:
                    return g.intl.format(g.t["1dT9V4"], {});
                case iv._A.REDUCED_MOTION_STICKERS:
                    return g.intl.string(g.t["2ExvRu"]);
                default:
                    return;
            }
        })(iI.A.getAppliedOverrideReasonKey(e)),
    );
}
let ij = (0, o.zD)(d.X.ANIMATE_EMOJIS, {
        useTitle: () => g.intl.string(g.t.iIaOlc),
        useSubtitle: () => iy("animateEmoji"),
        useValue: () => c.Sf.useSetting(),
        setValue: (e) => c.Sf.updateSetting(e),
    }),
    iO = (0, o.zD)(d.X.ANIMATE_GIFS, {
        useTitle: () => g.intl.string(g.t.wqsK7q),
        useSubtitle: () => iy("gifAutoPlay"),
        useValue: () => c.kt.useSetting(),
        setValue: (e) => c.kt.updateSetting(e),
    });
var iR = n(823894);
let iL = (0, o.Qx)(d.X.ANIMATE_STICKERS, {
        useTitle: () => g.intl.string(g.t.sBHIh0),
        useSubtitle: () => iy("animateStickers"),
        useOptions: () => [
            { name: g.intl.string(g.t["Xp+X2U"]), value: iR.BJ.ALWAYS_ANIMATE },
            { name: g.intl.string(g.t.IlLT7e), desc: g.intl.string(g.t.bIW9Tl), value: iR.BJ.ANIMATE_ON_INTERACTION },
            { name: g.intl.string(g.t.IGu8x3), value: iR.BJ.NEVER_ANIMATE },
        ],
        useValue: () => c.S0.useSetting(),
        setValue: (e) => c.S0.updateSetting(e),
    }),
    iD = (0, o.zD)(d.X.REDUCED_MOTION, {
        useTitle: () => g.intl.string(g.t.b3XBzg),
        useSubtitle: () => g.intl.format(g.t.XqvxJc, { helpdeskArticle: tr.A.getArticleURL(q.MVz.REDUCED_MOTION) }),
        useValue: () => (0, O.bG)([nH.A], () => nH.A.useReducedMotion),
        setValue: (e) => (0, id.qz)(e ? "reduce" : "no-preference"),
    }),
    iG = (0, o.zD)(d.X.SYNC_REDUCED_MOTION, {
        useTitle: () => g.intl.string(g.t.oL55A6),
        useValue: () => (0, O.bG)([nH.A], () => "auto" === nH.A.rawPrefersReducedMotion),
        setValue: (e) => (0, id.qz)(e ? "auto" : nH.A.systemPrefersReducedMotion),
    }),
    iP = (0, o.zZ)(d.X.MOTION_CATEGORY, {
        useTitle: () => g.intl.string(g.t.e3TR1b),
        buildLayout: () => [iD, iG, iO, ij, iL],
    });
var iM = n(688810),
    iU = n(259065),
    ik = n(864386);
let iV = (0, o.zD)(d.X.DISPLAY_NAME_STYLES, {
        useTitle: () => g.intl.string(ik.default["2gFUEw"]),
        useSubtitle: () => {
            let { analyticsLocations: e } = (0, iM.Ay)();
            return g.intl.format(ik.default.aEax6P, {
                onClickOpenModal() {
                    (0, iU.L)({ analyticsLocations: e });
                },
            });
        },
        useValue: () => (0, O.bG)([nH.A], () => nH.A.displayNameStylesEnabled),
        setValue: (e) => (0, id.Dm)(e),
    }),
    iw = (e) => `${e.toFixed(0)}px`,
    iB = (0, o.sN)(d.X.APPEARANCE_FONT_SCALING, {
        useTitle: () => g.intl.string(g.t.rT3Pq5),
        useSubtitle: () => g.intl.string(g.t.LXUhen),
        markers: q.hH7.FONT_SIZES,
        stickToMarkers: !0,
        minValue: q.hH7.FONT_SIZES["0"],
        maxValue: q.hH7.FONT_SIZES[q.hH7.FONT_SIZES.length - 1],
        useDefaultValue: () => q.hH7.FONT_SIZE_DEFAULT,
        getInitialValue: () => nH.A.fontSize,
        onValueRender: iw,
        onMarkerRender: iw,
        asValueChanges: (e) => (0, id.XS)(e),
    }),
    iF = (0, o.zD)(d.X.UNDERLINE_LINKS, {
        useTitle: () => g.intl.string(g.t.OLZFB8),
        useSubtitle: () => g.intl.string(g.t.DIX3ke),
        useValue: () => (0, O.bG)([nH.A], () => nH.A.alwaysShowLinkDecorations),
        setValue: (e) => (0, id.kI)(e),
    }),
    iz = (0, o.zZ)(d.X.TEXT_READABILITY_CATEGORY, {
        useTitle: () => g.intl.string(g.t["bxh/R7"]),
        buildLayout: () => [iB, iF, iV],
    }),
    iX = (0, o.Qx)(d.X.APPEARANCE_UI_DENSITY, {
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
    iY = "cozy",
    iH = "compact",
    iK = (0, o.Qx)(d.X.APPEARANCE_MESSAGE_DISPLAY_MODE, {
        useTitle: () => g.intl.string(g.t.nKRoPv),
        useSubtitle: () => g.intl.string(g.t.QntEEG),
        useSearchTerms: () => [g.intl.string(g.t.ZEoGMd)],
        useOptions: () => [
            { name: g.intl.string(g.t.Jqj4cZ), value: iY },
            { name: g.intl.string(g.t["1JNcPS"]), value: iH },
        ],
        useValue: () => (c.hH.useSetting() ? iH : iY),
        setValue: (e) => {
            c.hH.updateSetting(e === iH), (0, id.AC)();
        },
    });
var iW = n(381941);
let iZ = (e) => `${e.toFixed(0)}px`,
    iq = (0, o.sN)(d.X.APPEARANCE_MESSAGE_GROUP_SPACING, {
        useTitle: () => g.intl.string(g.t.Q6lKkg),
        useSubtitle: () => g.intl.string(g.t.p7eUrb),
        markers: iW.qh,
        stickToMarkers: !0,
        minValue: iW.qh["0"],
        maxValue: iW.qh[iW.qh.length - 1],
        useDefaultValue: () => (c.hH.useSetting() ? iW.y5 : iW.ES),
        getInitialValue: () => {
            let e = nH.A.messageGroupSpacing,
                t = c.hH.getSetting();
            return null != e ? e : t ? iW.y5 : iW.ES;
        },
        onValueRender: iZ,
        onMarkerRender: iZ,
        asValueChanges: (e) => {
            switch (e) {
                case 0:
                case 4:
                case 8:
                case 16:
                case 24:
                    (0, id.AC)(e);
            }
        },
    });
var iQ = n(775121);
let iJ = (0, o.sN)(d.X.APPEARANCE_ZOOM, {
        usePredicate: () => ev.isPlatformEmbedded,
        useTitle: () => g.intl.string(g.t.i19n5L),
        useSubtitle: () => g.intl.format(g.t["x9PK/3"], { modKey: iQ.A.modKey }),
        markers: q.hH7.ZOOM_SCALES,
        stickToMarkers: !0,
        minValue: q.hH7.ZOOM_SCALES["0"],
        maxValue: q.hH7.ZOOM_SCALES[q.hH7.ZOOM_SCALES.length - 1],
        useDefaultValue: () => q.hH7.ZOOM_DEFAULT,
        getInitialValue: () => nH.A.zoom,
        useExternalValue: () => (0, O.bG)([nH.A], () => nH.A.zoom),
        onValueRender: (e) => `${e.toFixed(0)}%`,
        setValue: (e) => (0, id.Qp)(e),
        useSearchTerms: () => [g.intl.string(g.t.ip0uSf)],
    }),
    i$ = (0, o.zZ)(d.X.VISUAL_DENSITY_CATEGORY, {
        useTitle: () => g.intl.string(g.t.VKYWk8),
        buildLayout: () => [iX, iK, iq, iJ],
    }),
    i0 = (0, o.t_)(d.X.ACCESSIBILITY_PANEL, {
        useTitle: () => g.intl.string(g.t.G0neg7),
        buildLayout: () => [iz, i$, iC, iP, ia],
        decoration: {
            type: ef.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                let e = c.hH.useSetting(),
                    t = c.jW.useSetting(),
                    n = x.useMemo(
                        () => [
                            n1(
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
                            n1(
                                g.intl.formatToPlainString(g.t["4rDfgM"], {
                                    link: "https://discord.com/accessibility",
                                }),
                            ),
                        ],
                        [t],
                    ),
                    i = (0, O.bG)([nH.A], () => nH.A.messageGroupSpacing);
                return (0, S.jsx)(nz.M, {
                    "aria-hidden": !0,
                    children: (0, S.jsxs)("section", {
                        children: [
                            (0, S.jsx)(em.D, {
                                variant: "text-md/medium",
                                color: "text-muted",
                                className: nJ.Vf,
                                children: g.intl.string(g.t.RC22qg),
                            }),
                            (0, S.jsxs)(tE.Ip, {
                                className: nJ.VH,
                                children: [
                                    (0, S.jsx)("ol", {
                                        className: nJ.DZ,
                                        style: { gap: i },
                                        "aria-label": g.intl.string(g.t.xfjsEV),
                                        children: n.map((t) =>
                                            (0, S.jsx)(
                                                "li",
                                                {
                                                    children: (0, S.jsx)(nq.A, {
                                                        message: t,
                                                        channel: n$,
                                                        compact: e,
                                                        author: { ...(0, nZ.p_)(t), colorString: "#dd80f4" },
                                                    }),
                                                },
                                                t.id,
                                            ),
                                        ),
                                    }),
                                    (0, S.jsxs)("div", {
                                        className: nJ.Jb,
                                        children: [
                                            (0, S.jsx)("div", {
                                                className: nJ.HD,
                                                children: n0.map((e) => {
                                                    let { status: t, discriminator: n, mobile: i = !1 } = e;
                                                    return (0, S.jsx)(
                                                        nX.eu,
                                                        {
                                                            status: t,
                                                            isMobile: i,
                                                            size: nY._3.SIZE_32,
                                                            src: nQ.Ay.getDefaultAvatarURL(void 0, n),
                                                            "aria-label": g.intl.string(g.t.VKE5TK),
                                                        },
                                                        t,
                                                    );
                                                }),
                                            }),
                                            (0, S.jsx)(eh.$, {
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
    i1 = (0, o.i4)(d.X.ACCESSIBILITY_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.G0neg7),
        icon: nF.c,
        useMenu: n2.A,
        buildLayout: () => [i0],
    });
var i2 = n(650809),
    i5 = n(636537),
    i3 = n(228366),
    i8 = n(74396),
    i4 = n(227542),
    i9 = n(55619),
    i7 = n(777666);
function i6() {
    return (0, S.jsx)(i7.JI, { text: g.intl.string(g.t.y2b7CA) });
}
var le = n(574381),
    lt = n(314116),
    ln = n(19575),
    li = n(208039);
let ll = (0, o.E2)(d.X.HARDWARE_ACCELERATION, {
    usePredicate: () => le.Av && !(0, le.cX)(),
    useSearchTerms: () => [g.intl.string(g.t["/HIxyY"]), g.intl.string(g.t.B0hqpb)],
    Component: function () {
        let [e] = x.useState(() => ln.Ay.getEnableHardwareAcceleration()),
            t = g.intl.string(g.t["/HIxyY"]),
            n = g.intl.string(g.t.B0hqpb);
        return (0, S.jsxs)(R.B, {
            children: [
                (0, S.jsx)(L.d, { label: t, description: n, checked: e, onChange: ls }),
                !e && (0, S.jsx)(li.A, { look: li.k.WARNING, children: g.intl.string(g.t.j7S6IX) }),
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
            ln.Ay.setEnableHardwareAcceleration(e);
        },
    });
}
let la = (0, o.zD)(d.X.SHOW_GAME_LIBRARY, {
        usePredicate: () => (0, O.bG)([tg.A], () => tg.A.hasLibraryApplication()),
        useTitle: () => g.intl.string(g.t.fi3UQN),
        useSubtitle: () => g.intl.string(g.t["8mYp37"]),
        useValue: () => !c.l_.useSetting(),
        setValue: (e) => c.l_.updateSetting(!e),
    }),
    lr = (0, o.zZ)(d.X.APPEARANCE_ADVANCED_CATEGORY, {
        useTitle: () => g.intl.string(g.t["8/udY0"]),
        buildLayout: () => [ll, la],
    });
var lo = n(565645);
let ld = (0, o.zD)(d.X.CHAT_EMOJI_CONVERT_EMOTICONS, {
        useTitle: () => g.intl.string(g.t["79qal8"]),
        useSubtitle: () =>
            g.intl.format(g.t.GejoQK, { emojiHook: (e, t) => (0, S.jsx)(lo.A, { emojiName: "\uD83D\uDE42" }, t) }),
        useValue: c.j7.useSetting,
        setValue: c.j7.updateSetting,
    }),
    lu = (0, o.zD)(d.X.ENABLE_SEND_BUTTON, {
        useTitle: () => g.intl.string(g.t["I/5LyL"]),
        useValue: () => (0, O.bG)([nH.A], () => nH.A.isSubmitButtonEnabled),
        setValue: () => (0, id.Xt)(),
    }),
    lc = (0, o.zD)(d.X.CHAT_TEXT_BOX_PREVIEWS, {
        useTitle: () => g.intl.string(g.t.AqGrEI),
        useValue: c.SI.useSetting,
        setValue: (e) => {
            X.default.track(q.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                enabled: e,
                location: { section: q.JJy.SETTINGS_TEXT_AND_IMAGES },
            }),
                c.SI.updateSetting(e);
        },
    }),
    lg = (0, o.zD)(d.X.CHAT_STICKERS_AUTOCOMPLETE, {
        useTitle: () => g.intl.string(g.t["d+It2U"]),
        useValue: c.ML.useSetting,
        setValue: (e) => {
            X.default.track(q.HAw.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                enabled: e,
                location: { section: q.JJy.SETTINGS_TEXT_AND_IMAGES },
                location_stack: [eU.A.TEXT_AND_IMAGES],
            }),
                c.ML.updateSetting(e);
        },
    }),
    l_ = (0, o.zZ)(d.X.APPEARANCE_CHAT_BOX_CATEGORY, {
        useTitle: () => g.intl.string(g.t.Ob7VMB),
        useSearchTerms: () => [g.intl.string(g.t.onqU6o)],
        buildLayout: () => [lc, ld, lg, lu],
    });
var lm = n(526162),
    lh = n(793943),
    lA = n(792656),
    lp = n(779733),
    lT = n(785007),
    lE = n(806932),
    lS = n(915089),
    lx = n(635917),
    lf = n(788868);
let lb = (0, o.E2)(d.X.APPEARANCE_IN_APP_ICON, {
    useSearchTerms: () => [g.intl.string(g.t.gnwxvT)],
    Component: function () {
        let e = (0, lS.GV)(),
            { ref: t, ...n } = (0, lT._u)({ orientation: "horizontal", labelledBy: e }),
            i = (0, O.bG)([lm.A], () => lm.A.isUpsellPreview);
        return (
            (0, eg.Ay)(() => {
                i &&
                    X.default.track(q.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: lf.e.APP_ICON_UPSELL,
                        location_stack: [eU.A.USER_SETTINGS],
                    });
            }),
            (0, S.jsx)("div", {
                ...n,
                ref: t,
                children: (0, S.jsx)(R.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    children: (0, S.jsx)(lE.m, { disabled: i, size: lx.N8.SIZE_48 }),
                }),
            })
        );
    },
});
function lN() {
    (0, lh.nf)(lh.HP.APP_ICON), (0, lp.default)();
}
function lC() {
    return (0, S.jsx)(lA.A, {
        subscriptionTier: lf.pe.TIER_2,
        defaultTextOverride: g.intl.string(g.t.mr4K7D),
        premiumModalAnalyticsLocation: { object: q.ZSU.BUTTON_CTA, objectType: q.AnalyticsObjectTypes.BUY },
        fullWidth: !0,
    });
}
let lI = (0, o.zZ)(d.X.APPEARANCE_IN_APP_ICON_CATEGORY, {
        useTitle: () => g.intl.string(g.t.RPh2ou),
        useSubtitle: () => g.intl.string(g.t.IgENJo),
        useHeaderDecoration: function () {
            let e = (0, O.bG)([lm.A], () => lm.A.isUpsellPreview);
            return x.useMemo(() => {
                let t = [];
                return (
                    t.push({
                        id: "preview-icon-button",
                        type: ef.UV.BUTTON,
                        text: g.intl.string(g.t["6acvnZ"]),
                        onClick: lN,
                    }),
                    e && t.push({ id: "upsell-button", type: ef.UV.STRONGLY_DISCOURAGED_CUSTOM, button: lC }),
                    { type: ef.WX.BUTTON_GROUP, buttons: t }
                );
            }, [e]);
        },
        buildLayout: () => [lb],
    }),
    lv = (0, o.AK)(d.X.APPEARANCE_CHAT_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => g.intl.string(g.t.UDr3Iy),
        useSearchTerms: () => [g.intl.string(g.t.UDr3Iy)],
        destinationKey: d.X.ACCESSIBILITY_PANEL,
    }),
    ly = (0, o.gN)(d.X.APPEARANCE_CHAT_RELATED_SETTINGS, { buildLayout: () => [lv] });
var lj = n(379587),
    lO = n(452027),
    lR = n(976860),
    lL = n(474090),
    lD = n(181079),
    lG = n(422258),
    lP = n(668267),
    lM = n(313281),
    lU = n(335993);
let lk = tr.A.getArticleURL(q.MVz.FAVORITES_GUILD);
function lV() {
    let { analyticsLocations: e } = (0, iM.Ay)(eU.A.USER_SETTINGS_FAVORITES),
        t = x.useCallback(() => {
            (0, lP.mv)("settings_page"), (0, lR.uh)(q.YYv), (0, lp.default)();
        }, []);
    return (0, S.jsx)(iM.f5, {
        value: e,
        children: (0, S.jsx)(lO.D, {
            label: g.intl.string(lU.default.OT1NK5),
            description: g.intl.format(lU.default.GR2KOG, { helpCenterLink: lk }),
            layout: "horizontal-responsive",
            badge: "beta",
            children: (0, S.jsxs)(R.B, {
                direction: "horizontal",
                gap: 8,
                fullWidth: !1,
                children: [
                    (0, S.jsx)(eh.$, { variant: "secondary", text: g.intl.string(lU.default["7WwLnr"]), onClick: t }),
                    (0, S.jsx)(lA.A, {
                        subscriptionTier: lf.pe.TIER_2,
                        defaultTextOverride: g.intl.string(lU.default["20sYUU"]),
                    }),
                ],
            }),
        }),
    });
}
let lw = (0, o.E2)(d.X.CHAT_FAVORITES_TOGGLE, {
        usePredicate: () => (0, lj.m)({ location: "FavoritesGuildToggle" }).enabled,
        useSearchTerms: () => [g.intl.string(lU.default.OT1NK5)],
        Component: function () {
            let e = (0, O.bG)([lD.A], () => lD.A.favoriteGuildEnabled),
                t = (0, O.bG)([t5.default], () => {
                    let e = t5.default.getCurrentUser();
                    return null != e && lL.Ay.isPremiumExactly(e, lf.PremiumTypes.TIER_2);
                }),
                n = (0, lM.DZ)(),
                i = x.useCallback(
                    (e) => {
                        (0, lG.tV)(e, "settings_page"), !e && n && (0, lR.pX)(q.BVt.ME);
                    },
                    [n],
                );
            return t
                ? (0, S.jsx)(L.d, {
                      checked: e,
                      description: g.intl.format(lU.default.GR2KOG, { helpCenterLink: lk }),
                      onChange: i,
                      label: g.intl.string(lU.default.OT1NK5),
                      badge: "beta",
                  })
                : (0, S.jsx)(lV, {});
        },
    }),
    lB = (0, o.zD)(d.X.CHAT_INLINE_MEDIA_LINKS, {
        useTitle: () => g.intl.string(g.t.U47N1p),
        useValue: c.hD.useSetting,
        setValue: c.hD.updateSetting,
    }),
    lF = (0, o.zD)(d.X.CHAT_INLINE_MEDIA_UPLOADS, {
        useTitle: () => g.intl.string(g.t.VP11No),
        useValue: c.X6.useSetting,
        setValue: c.X6.updateSetting,
    }),
    lz = (0, o.FW)(d.X.CHAT_INLINE_FIELD_SET, {
        useTitle: () => g.intl.string(g.t["9nyle0"]),
        buildLayout: () => [lB, lF],
    }),
    lX = (0, o.zD)(d.X.CHAT_EMBEDS_RENDER_EMBEDS, {
        useTitle: () => g.intl.string(g.t["5bK9vw"]),
        useValue: c.rs.useSetting,
        setValue: c.rs.updateSetting,
    }),
    lY = (0, o.zD)(d.X.CHAT_EMOJI_RENDER_REACTIONS, {
        useTitle: () => g.intl.string(g.t["zge/fP"]),
        useValue: c.jW.useSetting,
        setValue: c.jW.updateSetting,
    });
var lH = n(817281);
let lK = (0, o.zD)(d.X.APPEARANCE_DISPLAY_COMPACT_AVATARS, {
        useTitle: () => g.intl.string(g.t.JgjNG3),
        useSubtitle: () => {
            if (!c.hH.useSetting())
                return g.intl.format(g.t["31PRaj"], {
                    a11yHook: (e, t) =>
                        (0, S.jsx)(
                            U.D,
                            {
                                tag: "a",
                                onClick: () => (0, ey.openUserSettings)(d.X.APPEARANCE_MESSAGE_DISPLAY_MODE),
                                children: e,
                            },
                            t,
                        ),
                });
        },
        useDisabled: () => !c.hH.useSetting(),
        useValue: () => {
            let e = (0, O.bG)([iA.Ay], () => iA.Ay.displayCompactAvatars);
            return !c.hH.useSetting() || e;
        },
        setValue: (e) => {
            lH.Ay.updatedUnsyncedSettings({ displayCompactAvatars: e });
        },
    }),
    lW = (0, o.Hn)(d.X.CHAT_SPOILERS_SHOW_SPOILERS, {
        useTitle: () => g.intl.string(g.t.QgwmVz),
        useOptions: () => [
            { value: q.P6Q.ON_CLICK, id: q.P6Q.ON_CLICK, label: g.intl.string(g.t["KFH/me"]) },
            { value: q.P6Q.ALWAYS, id: q.P6Q.ALWAYS, label: g.intl.string(g.t.Pe1RbL) },
            { value: q.P6Q.IF_MODERATOR, id: q.P6Q.IF_MODERATOR, label: g.intl.string(g.t.K5VTBE) },
        ],
        useValue: c.gs.useSetting,
        setValue: c.gs.updateSetting,
    }),
    lZ = (0, o.zD)(d.X.CHAT_THREADS_SPLIT_VIEW, {
        useTitle: () => g.intl.string(g.t.AInv5m),
        useValue: c.SY.useSetting,
        setValue: c.SY.updateSetting,
    }),
    lq = (0, o.zZ)(d.X.APPEARANCE_MESSAGES_CATEGORY, {
        useTitle: () => g.intl.string(g.t.OIgYlQ),
        useSearchTerms: () => [g.intl.string(g.t["/VQax8"])],
        buildLayout: () => [lz, lX, lY, lW, lZ, lK, lw, ly],
    });
var lQ = n(753806),
    lJ = n(145331);
let l$ = (0, o.Qx)(d.X.MESSAGE_SEARCH_DEFAULT_DM_SEARCH_BEHAVIOR, {
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
            t ? lQ.A.cleanUpPrivateChannelSearchState() : lQ.A.cleanUpSearchState({ type: q.I4_.DMS }),
                (0, lJ._k)({
                    prevIsCrossDMSettingEnabled: c.Hu.getSetting(),
                    isCrossDMSettingEnabled: t,
                    location: lJ.vy.USER_SETTINGS,
                }),
                c.Hu.updateSetting(t);
        },
    }),
    l0 = (0, o.zZ)(d.X.APPEARANCE_SEARCH_CATEGORY, {
        useTitle: () => g.intl.string(g.t["5h0QOP"]),
        buildLayout: () => [l$],
    }),
    l1 = (0, o.zD)(d.X.STREAMING_AUTO_STREAMER_MODE, {
        useTitle: () => g.intl.string(g.t.IxjaoF),
        useValue: function () {
            return (0, O.bG)([eb.A], () => {
                let { autoToggle: e } = eb.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            i9.A.update({ autoToggle: e });
        },
        usePredicate: function () {
            return le.Av;
        },
    }),
    l2 = (0, o.zD)(d.X.STREAMING_STREAMER_MODE, {
        useTitle: () => g.intl.string(g.t.TGNg6T),
        useSubtitle: () => g.intl.string(g.t["4nXLnE"]),
        useValue: function () {
            return (0, O.bG)([eb.A], () => {
                let { enabled: e } = eb.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            i9.A.update({ enabled: e });
        },
    });
var l5 = n(77729),
    l3 = n(349230);
let l8 = [],
    l4 = (0, o.Hn)(d.X.STREAMER_MODE_HIDE_OVERLAY_WIDGETS, {
        selectionMode: "multiple",
        useTitle: () => g.intl.string(g.t.VCDSLW),
        useSearchTerms: () => [g.intl.string(g.t.VCDSLW)],
        usePredicate: () => {
            let e = (0, ej.b_)(),
                t = (0, eE.Mn)("StreamerModeSettings");
            return e && t;
        },
        useOptions: function () {
            return x.useMemo(() => {
                let e = [];
                for (let [t, n] of Object.entries(l3.A))
                    null != n.streamerModeLabel &&
                        (null == n.predicate || n.predicate()) &&
                        e.push({ id: t, value: t, label: n.streamerModeLabel() });
                return e;
            }, []);
        },
        useValue: function () {
            return (0, O.bG)([eb.A], () => eb.A.getSettings().disabledOverlayWidgets ?? l8);
        },
        setValue: (e) => i9.A.update({ disabledOverlayWidgets: e }),
        closeOnSelect: !1,
        wrapTags: !0,
    }),
    l9 = (0, o.zD)(d.X.STREAMER_MODE_HIDE_PERSONAL_INFORMATION, {
        useTitle: () => g.intl.string(g.t.LSBUGR),
        useValue: () =>
            (0, O.bG)([eb.A], () => {
                let { hidePersonalInformation: e } = eb.A.getSettings();
                return e;
            }),
        setValue: (e) => i9.A.update({ hidePersonalInformation: e }),
    }),
    l7 = (0, o.zD)(d.X.STREAMER_MODE_HIDE_INVITE_LINKS, {
        useTitle: () => g.intl.string(g.t.uWBOri),
        useValue: () =>
            (0, O.bG)([eb.A], () => {
                let { hideInstantInvites: e } = eb.A.getSettings();
                return e;
            }),
        setValue: (e) => i9.A.update({ hideInstantInvites: e }),
    }),
    l6 = (0, o.zD)(d.X.STREAMER_MODE_DISABLE_SOUNDS, {
        useTitle: () => g.intl.string(g.t.OrqYDP),
        useValue: () =>
            (0, O.bG)([eb.A], () => {
                let { disableSounds: e } = eb.A.getSettings();
                return e;
            }),
        setValue: (e) => i9.A.update({ disableSounds: e }),
    }),
    se = (0, o.zD)(d.X.STREAMER_MODE_DISABLE_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.sUAbLd),
        useValue: () =>
            (0, O.bG)([eb.A], () => {
                let { disableNotifications: e } = eb.A.getSettings();
                return e;
            }),
        setValue: (e) => i9.A.update({ disableNotifications: e }),
    }),
    st = (0, o.zD)(d.X.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE, {
        useTitle: () => g.intl.string(g.t["iA81+a"]),
        useSubtitle: () => g.intl.string(g.t.P4vj0h),
        useValue: () =>
            (0, O.bG)([eb.A], () => {
                let { enableContentProtection: e } = eb.A.getSettings();
                return e;
            }),
        setValue: (e) => i9.A.update({ enableContentProtection: e }),
        usePredicate: () => l5.A?.window?.supportsContentProtection?.() ?? !1,
    }),
    sn = (0, o.FW)(d.X.STREAMER_MODE_OPTIONS_LIST, {
        variant: "compact",
        useTitle: () => g.intl.string(g.t.xYhOEh),
        buildLayout: () => [l9, l7, l6, se, st, l4],
    }),
    si = (0, o.zZ)(d.X.STREAMER_MODE_CATEGORY, {
        useTitle: () => g.intl.string(g.t.S5GfOW),
        buildLayout: () => [l2, l1, sn],
    });
var sl = n(47671),
    ss = n(884210);
let sa = (0, o.zD)(d.X.SYNC_PROFILE_THEMES, {
    useTitle: () => g.intl.string(g.t.C00w4l),
    useValue: () => (0, O.bG)([nH.A], () => nH.A.syncProfileThemeWithUserTheme),
    setValue: () => (0, id.M1)(),
});
var sr = n(284016);
let so = (0, o.zD)(d.X.APPEARANCE_SYNC_THEME, {
    useTitle: () => g.intl.string(g.t["/B+kEV"]),
    useSearchTerms: () => [g.intl.string(g.t.Ksh3ik)],
    useValue: function () {
        return (0, O.bG)([sr.A], () => !1 !== sr.A.shouldSync("appearance"));
    },
    setValue: function (e) {
        var t;
        let n = no.A.theme,
            i = sl.A.gradientPreset?.id ?? null,
            l = c.eh.getSetting()?.customUserThemeSettings != null;
        (t = q.HAw.SYNC_ACROSS_CLIENTS_TOGGLED),
            i3.h.dispatch({
                type: "TRACK",
                event: t,
                properties: { is_sync_enabled: e, base_theme: n, client_theme: i, has_custom_theme: l },
            }),
            lH.Ay.setShouldSyncAppearanceSettings(e);
    },
});
var sd = n(500158);
let su = (0, o.AK)(d.X.APPEARANCE_THEME_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => g.intl.string(g.t.nhVQDJ),
        useSearchTerms: () => [g.intl.string(g.t.nhVQDJ)],
        destinationKey: d.X.ACCESSIBILITY_PANEL,
    }),
    sc = (0, o.gN)(d.X.APPEARANCE_THEME_RELATED_SETTINGS, { buildLayout: () => [su] }),
    sg = (0, o.zZ)(d.X.APPEARANCE_THEME_CATEGORY, {
        useTitle: () => g.intl.string(g.t.Ksh3ik),
        useInlineNotice: function () {
            return (0, O.bG)([nH.A], () => nH.A.useForcedColors)
                ? {
                      type: ef.lT.INLINE_NOTICE,
                      noticeType: "info",
                      useText: () =>
                          (0, ix.D)()
                              ? g.intl.format(g.t.Jae48E, {
                                    onClick: () => {
                                        (0, ey.openUserSettings)(d.X.SYNC_FORCED_COLORS);
                                    },
                                })
                              : g.intl.string(g.t.AUMSZP),
                  }
                : null;
        },
        useHeaderDecoration: function () {
            return (0, O.bG)([sl.A, nH.A], () => nH.A.useForcedColors || sl.A.isPreview)
                ? null
                : {
                      type: ef.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "open-client-themes-button",
                              type: ef.UV.BUTTON,
                              text: g.intl.string(g.t["E+COuA"]),
                              onClick: ss.J3,
                          },
                      ],
                  };
        },
        buildLayout: () => [sd.k, so, sa, sc],
    }),
    s_ = [
        {
            badgeType: ef.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: eA.M.CLIENT_THEMES_SETTINGS_BADGE,
            StronglyDiscouragedCustomComponent: i6,
        },
        {
            badgeType: ef.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: eA.M.DEKSTOP_CUSTOM_APP_ICON_BADGE,
            StronglyDiscouragedCustomComponent: i6,
        },
        { badgeType: ef.Xi.NEW, dismissibleContent: eA.M.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE },
    ],
    sm = (0, o.t_)(d.X.APPEARANCE_PANEL, {
        initialize: function () {
            i8.A.isFetching() ||
                (i3.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_START" }),
                i5.Bo.get({ url: q.Rsh.USERS_ME_CUSTOM_THEMES, oldFormErrors: !0, rejectWithError: !0 })
                    .then((e) => {
                        i3.h.dispatch({
                            type: "SAVED_CUSTOM_THEMES_FETCH_SUCCESS",
                            themes: e.body?.custom_themes ?? [],
                        });
                    })
                    .catch((e) => {
                        i3.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_FAILURE", error: e });
                    }));
        },
        useTitle: () => g.intl.string(g.t["iHH+ky"]),
        buildLayout: () => [sg, lI, lq, l_, l0, si, lr],
    }),
    sh = [
        ...s_,
        {
            badgeType: ef.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: eA.M.FAVORITES_GUILD_NEW_BADGE,
            StronglyDiscouragedCustomComponent: i6,
        },
    ],
    sA = (0, o.i4)(d.X.APPEARANCE_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["iHH+ky"]),
        icon: i2.B,
        useMenu: function () {
            let e,
                t,
                n,
                i = (0, i4.A)(),
                l =
                    ((e = c.D_.useSetting()),
                    (t = c.SI.useSetting()),
                    e
                        ? null
                        : (0, S.jsx)(M.sL, {
                              id: "preview-markdown-toggle",
                              label: g.intl.string(g.t.sHJ9wZ),
                              action: () => {
                                  let e = !t;
                                  X.default.track(q.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                                      enabled: e,
                                      location: { section: q.JJy.SETTINGS_CONTEXT_MENU },
                                  }),
                                      c.SI.updateSetting(e);
                              },
                              checked: t,
                          })),
                s =
                    ((n = (0, O.bG)([eb.A], () => eb.A.enabled, [])),
                    (0, S.jsx)(M.sL, {
                        id: "streamer-mode-toggle",
                        label: g.intl.string(g.t.p9ZAJZ),
                        action: () => {
                            i9.A.setEnabled(!n);
                        },
                        checked: n,
                    }));
            return x.useMemo(() => {
                let e = [...i];
                return (
                    null != l &&
                        e.push((0, S.jsx)(M.rX, { label: g.intl.string(g.t.Ob7VMB), children: l }, "text-and-images")),
                    null != s && e.push((0, S.jsx)(M.rX, { children: s }, "streamer-mode")),
                    e
                );
            }, [i, l, s]);
        },
        getDismissibleBadges: () => sh,
        buildLayout: () => [sm],
    });
var sp = n(410767),
    sT = n(691885),
    sE = n(408278),
    sS = n(241326),
    sx = n(885574),
    sf = n(475358),
    sb = n(28647),
    sN = n(337371),
    sC = n(734066),
    sI = n(880144),
    sv = n(680243),
    sy = n(695366),
    sj = n(969341),
    sO = n(364094);
function sR(e) {
    let { game: t, application: n } = e;
    return null == t || null == n
        ? (0, S.jsx)("div", {
              className: sO.zc,
              children: (0, S.jsx)(sy.E, { size: "sm", color: w.A.colors.TEXT_FEEDBACK_WARNING }),
          })
        : (0, S.jsxs)("div", {
              className: sO.nt,
              children: [
                  (0, S.jsx)(e9.A, { game: n, pid: t.pid, size: e9.M.MEDIUM }),
                  (0, S.jsx)("div", {
                      className: sO.Am,
                      children: (0, S.jsx)(sy.E, { size: "sm", color: w.A.colors.TEXT_FEEDBACK_WARNING }),
                  }),
              ],
          });
}
function sL(e) {
    let t = (0, O.bG)([sj.Ay], () => sj.Ay.getMode()),
        { runningGame: n, runningGameApplication: i } = e$();
    null == n || n.elevated || ((n = void 0), (i = void 0));
    let l = (0, to.NP)(),
        s = l && null != n && t === q.TBI.PUSH_TO_TALK;
    return { canPrompt: "voice" === e ? s : l, runningGame: n, runningGameApplication: i };
}
function sD(e) {
    let { className: t, sourcePage: n } = e,
        { canPrompt: i, runningGame: l, runningGameApplication: s } = sL(n);
    return i
        ? (0, S.jsxs)("div", {
              className: ew()(sO.kL, t),
              children: [
                  (0, S.jsx)(sR, { game: l, application: s }),
                  (0, S.jsxs)("div", {
                      className: sO.FS,
                      children: [
                          (0, S.jsx)(k.E, {
                              variant: "text-sm/medium",
                              color: "text-strong",
                              children:
                                  "voice" === n
                                      ? g.intl.string(g.t.vxfv7v)
                                      : null != l
                                        ? g.intl.string(g.t.fAYU2G)
                                        : g.intl.string(g.t["9V4X/c"]),
                          }),
                          (0, S.jsx)(k.E, {
                              variant: "text-xs/medium",
                              color: "text-muted",
                              children: g.intl.format(g.t["/y6htt"], {
                                  helpCenterLink: tr.A.getArticleURL(q.MVz.SYSTEM_SERVICE),
                              }),
                          }),
                      ],
                  }),
                  (0, S.jsx)(eh.$, {
                      variant: "secondary",
                      size: "sm",
                      text: g.intl.string(g.t["1iI46O"]),
                      onClick: function () {
                          (0, to.sL)(n + (null != l ? "-with-game" : "-no-game"));
                      },
                  }),
              ],
          })
        : null;
}
var sG = n(189213),
    sP = n(292666),
    sM = n(320989),
    sU = n(978263);
let sk = [];
var sV = n(235986),
    sw = n(820785),
    sB = n(734057),
    sF = n(808728),
    sz = n(967198),
    sX = n(926140),
    sY = n(194152);
function sH() {}
let sK = [sX.rD.VOICE_CHANNEL];
function sW(e) {
    e.setOptions({ voiceChannelGuildFilter: null }), e.setLimit(1 / 0);
}
function sZ() {
    return (0, S.jsx)("div", {
        className: sY.i1,
        children: (0, S.jsx)(k.E, {
            variant: "text-md/medium",
            color: "text-muted",
            className: sY.GN,
            children: g.intl.string(g.t.zHjCd1),
        }),
    });
}
function sq(e) {
    let { keybind: t } = e,
        n = x.useRef(t);
    x.useEffect(() => {
        n.current = t;
    });
    let [i, l] = x.useState(t.params?.channelId ?? void 0),
        s = x.useCallback(() => {
            (0, b.openModalLazy)(
                async () => (e) =>
                    (0, S.jsx)(sQ, {
                        ...e,
                        onSelect: (e) => {
                            l(e), tO.A.setKeybind({ ...n.current, params: { channelId: e } });
                        },
                    }),
            );
        }, []);
    return (0, S.jsx)("div", {
        className: sY.a8,
        children: (0, S.jsx)(lO.D, {
            label: g.intl.string(g.t.q4JpM8),
            children: (0, S.jsxs)(sV.A, {
                align: sV.A.Align.STRETCH,
                children: [
                    (0, S.jsx)("div", { className: sY.$X, children: (0, S.jsx)(sJ, { channelId: i }) }),
                    (0, S.jsx)(sV.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, S.jsx)(eh.$, { variant: "primary", text: g.intl.string(g.t.Dm8O4e), onClick: s }),
                    }),
                ],
            }),
        }),
    });
}
function sQ(e) {
    let t,
        n,
        { transitionState: i, onClose: l, onSelect: s } = e,
        a = x.useId(),
        r = x.useRef(null),
        {
            query: o,
            updateQuery: d,
            queryResults: u,
        } = (function (e) {
            let {
                    visible: t,
                    autocompleterResultTypes: n,
                    autocompleterOptions: i,
                    autocompleterBeforeCreateSearchContext: l,
                } = e,
                [s, a] = x.useState(""),
                [r, o] = x.useState(sk),
                d = x.useCallback((e, t) => {
                    "" === (t = t.trim()).trim() ? o(sk) : o(e);
                }, []);
            x.useEffect(
                () =>
                    sM.A.addRouteChangeListener(() => {
                        a("");
                    }),
                [],
            );
            let [u] = x.useState(() => new sU.A(d, n, void 0, i));
            return (
                x.useEffect(() => {
                    t ? (l?.(u), u.createSearchContext()) : (u.clean(), a(""));
                }, [t, u, l]),
                {
                    queryResults: r,
                    query: s,
                    updateQuery: x.useCallback(
                        (e) => {
                            a(e), u.search(e);
                        },
                        [u],
                    ),
                }
            );
        })({ visible: !0, autocompleterResultTypes: sK, autocompleterBeforeCreateSearchContext: sW }),
        c =
            ((t = "" !== o),
            (n = (0, O.yK)([sF.Ay, sB.A, sz.A], () => {
                let e = sz.A.getGuildId();
                if (t || null == e) return [];
                let n = [];
                for (let t of sF.Ay.getVocalChannelIds(e)) {
                    let e = sB.A.getChannel(t);
                    null != e && n.push(e);
                }
                return n;
            }, [t])),
            t ? null : n),
        { focusedIndex: _, setFocusedIndex: m } = (function (e) {
            let [t, n] = x.useState(0),
                i = x.useRef(e);
            return (
                e !== i.current && 0 !== t && n(0),
                x.useEffect(() => {
                    i.current = e;
                }),
                { focusedIndex: t, setFocusedIndex: n }
            );
        })(o);
    x.useEffect(() => {
        let { current: e } = r;
        null == e || e.isItemVisible(0, _, !0) || e.scrollToIndex({ section: 0, row: _ });
    }, [_]);
    let h = null != c ? c.length : u.length,
        A = (() => {
            if (null != c) return c[_]?.id;
            let e = u[_];
            if (e?.type === sX.rD.VOICE_CHANNEL) return e.record.id;
        })(),
        p =
            h > 0 || "" === o
                ? {
                      innerId: a,
                      innerRole: "listbox",
                      innerAriaLabel: g.intl.string(g.t["+N3fW7"]),
                      ref: r,
                      sections: [h],
                      renderRow: function (e) {
                          let { row: t } = e,
                              n = (() => {
                                  if (null != c) return c[t];
                                  let e = u[t];
                                  if (e?.type === sX.rD.VOICE_CHANNEL) return e.record;
                              })();
                          if (null == n) return null;
                          let i = null != n.parent_id ? sB.A.getChannel(n.parent_id) : void 0,
                              a = H.A.getGuild(n.guild_id);
                          return (0, S.jsx)(
                              sw.c3,
                              {
                                  id: n.id,
                                  channel: n,
                                  category: i,
                                  focused: _ === t,
                                  onMouseEnter: () => m(t),
                                  onClick: () => {
                                      s(n.id), l();
                                  },
                                  onFocus: () => m(t),
                                  children:
                                      null != a ? (0, S.jsx)("div", { className: sY.J5, children: a.name }) : null,
                              },
                              n.id,
                          );
                      },
                      sectionHeight: 0,
                      rowHeight: 34,
                  }
                : { sections: [1], renderRow: () => (0, S.jsx)(sZ, {}), sectionHeight: 0, rowHeight: 52 };
    return (0, S.jsx)(sG.Modal, {
        transitionState: i,
        onClose: l,
        title: g.intl.string(g.t.Dm8O4e),
        subtitle: g.intl.string(g.t.q4JpM8),
        actions: void 0,
        input: (0, S.jsx)(sP.k, {
            value: o,
            onChange: d,
            onKeyDown: function (e) {
                let t = e.key.toLowerCase();
                if ("arrowdown" === t || "arrowup" === t || "enter" === t || "escape" === t)
                    switch ((e.preventDefault(), t)) {
                        case "escape":
                            l();
                            break;
                        case "enter": {
                            let e = (() => {
                                if (null != c) return c[_];
                                let e = u[_];
                                if (e?.type === sX.rD.VOICE_CHANNEL) return e.record;
                            })();
                            null == e ? s(void 0) : s(e.id), l();
                            break;
                        }
                        case "arrowup":
                            0 === _ ? m(h - 1) : m(_ - 1);
                            break;
                        case "arrowdown":
                            _ >= h - 1 ? m(0) : m(_ + 1);
                    }
            },
            placeholder: g.intl.string(g.t.tG0r7g),
            role: "combobox",
            "aria-controls": a,
            "aria-expanded": h > 0,
            "aria-activedescendant": h > 0 && null != A ? A : void 0,
            "aria-autocomplete": "list",
            spellCheck: !1,
            autoFocus: !0,
        }),
        listProps: p,
    });
}
function sJ(e) {
    let { channelId: t } = e,
        {
            channel: n,
            category: i,
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
    return null == n
        ? (0, S.jsx)(k.E, {
              variant: "text-md/medium",
              color: "text-muted",
              className: sY.GN,
              children: g.intl.string(g.t["/fYIK7"]),
          })
        : (0, S.jsx)(sw.c3, {
              channel: n,
              id: n.id,
              category: i,
              onClick: sH,
              onFocus: sH,
              onMouseEnter: sH,
              focused: !1,
              children: null != l ? (0, S.jsx)("div", { className: sY.J5, children: l.name }) : null,
          });
}
function s$(e) {
    let { className: t, children: n } = e;
    return (0, S.jsx)("div", { className: t, children: (0, S.jsx)(R.B, { gap: 16, children: n }) });
}
var s0 = n(802247);
function s1(e) {
    let { children: t } = e;
    return t([sN.Q_.MESSAGE, sN.Q_.NAVIGATION, sN.Q_.DND, sN.Q_.CHAT, sN.Q_.VOICE_AND_VIDEO, sN.Q_.MISCELLANEOUS]);
}
class s2 extends x.PureComponent {
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
        return iQ.A.hasBind(t)
            ? (0, S.jsx)(ta.p, { messageType: ta.Y.ERROR, children: g.intl.string(g.t["7lQlw3"]) })
            : nh.Yy.has(t)
              ? (0, S.jsx)(ta.p, {
                    messageType: ta.Y.ERROR,
                    children: g.intl.format(g.t.MOIaNd, {
                        keyboardNavArticle: tr.A.getArticleURL(q.MVz.KEYBOARD_NAVIGATION),
                    }),
                })
              : (0, S.jsx)(k.E, {
                    variant: "text-md/normal",
                    className: s0.qD,
                    children: this.props.keybindDescriptions[e.action],
                });
    }
    render() {
        let { managed: e, enabled: t } = this.props.keybind;
        return (0, S.jsxs)("div", {
            className: s0.YI,
            children: [
                (0, S.jsxs)("div", {
                    className: s0.PO,
                    children: [
                        (0, S.jsx)("div", {
                            className: s0.AS,
                            children: (0, S.jsx)(sT.l, {
                                selectionMode: "single",
                                label: g.intl.string(g.t.UUpAD6),
                                value: this.props.keybind.action,
                                options: this.props.keybindActionTypes,
                                onSelectionChange: this.handleActionChanged,
                                disabled: e,
                            }),
                        }),
                        (0, S.jsx)("div", {
                            className: s0.AS,
                            children: (0, S.jsx)(lO.D, {
                                label: g.intl.string(g.t["1La4tC"]),
                                children: (0, S.jsx)(tR.A, {
                                    defaultValue: this.props.keybind.shortcut,
                                    onChange: this.handleShortcutChange,
                                }),
                            }),
                        }),
                        !e &&
                            (0, S.jsx)("div", {
                                className: s0.d9,
                                children: (0, S.jsx)(sE.K, {
                                    variant: "icon-only",
                                    onClick: this.handleDeleteKeybind,
                                    icon: sS.u,
                                    "aria-label": g.intl.string(g.t.qEHmmB),
                                }),
                            }),
                        (0, S.jsx)("div", {
                            className: s0.ZW,
                            children: (0, S.jsx)(e0.m, {
                                text: g.intl.string(g.t.uCD7qK),
                                children: (0, S.jsx)("div", {
                                    children: (0, S.jsx)(L.d, { checked: t, onChange: this.handleEnableDisable }),
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
        return e === q.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, S.jsx)(sq, { keybind: this.props.keybind }) : void 0;
    }
}
class s5 extends x.PureComponent {
    get keybindActionTypes() {
        let {
                overlaySupported: e,
                canGoLive: t,
                allowSoundboard: n,
                enableClips: i,
                enableScreenshotKeybind: l,
            } = this.props,
            s = [
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
                (s.push({
                    id: "toggle-overlay-input-lock",
                    value: q.hCu.TOGGLE_OVERLAY_INPUT_LOCK,
                    label: g.intl.string(g.t.VsAZcC),
                }),
                s.push({
                    id: "activate-overlay-region-text-widget",
                    value: q.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                    label: g.intl.string(g.t.hurHWo),
                })),
            t &&
                ((0, ev.isWindows)() || sj.Ay.getUseSystemScreensharePicker()) &&
                s.push({
                    id: "toggle-go-live-streaming",
                    value: q.hCu.TOGGLE_GO_LIVE_STREAMING,
                    label: g.intl.string(g.t.ybdjJD),
                }),
            (0, ev.isDesktop)() &&
                (s.push(
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
                    s.push(
                        { id: "soundboard", value: q.hCu.SOUNDBOARD, label: g.intl.string(g.t.yPH4xm) },
                        { id: "soundboard-hold", value: q.hCu.SOUNDBOARD_HOLD, label: g.intl.string(g.t["1xFbP/"]) },
                    ),
                i &&
                    (s.push({ id: "save-clip", value: q.hCu.SAVE_CLIP, label: g.intl.string(g.t.U4URzP) }),
                    l &&
                        s.push({
                            id: "save-screenshot",
                            value: q.hCu.SAVE_SCREENSHOT,
                            label: g.intl.string(g.t["+WloFH"]),
                        }))),
            s
        );
    }
    get keybindDescriptions() {
        let { overlaySupported: e, canGoLive: t, enableClips: n, enableScreenshotKeybind: i } = this.props,
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
            e && (l[q.hCu.TOGGLE_OVERLAY_INPUT_LOCK] = g.intl.string(g.t.IoP5vc)),
            t && (0, ev.isWindows)() && (l[q.hCu.TOGGLE_GO_LIVE_STREAMING] = g.intl.string(g.t.s4C238)),
            (0, ev.isDesktop)() &&
                ((l[q.hCu.NAVIGATE_BACK] = g.intl.string(g.t.nKDlEt)),
                (l[q.hCu.NAVIGATE_FORWARD] = g.intl.string(g.t.DK0FFk)),
                (l[q.hCu.SOUNDBOARD] = (0, ev.isWindows)() ? g.intl.string(g.t["5wJefL"]) : g.intl.string(g.t.gzjsSP)),
                (l[q.hCu.SOUNDBOARD_HOLD] = (0, ev.isWindows)()
                    ? g.intl.string(g.t.RRkZc9)
                    : g.intl.string(g.t.laNlTl)),
                n &&
                    ((l[q.hCu.SAVE_CLIP] = g.intl.string(g.t.z3Wbam)),
                    i && (l[q.hCu.SAVE_SCREENSHOT] = g.intl.string(g.t.m0zd57)))),
            l
        );
    }
    handleAddKeybind = () => {
        tO.A.addKeybind();
    };
    renderKeybinds(e) {
        return e.map((t, n) =>
            (0, S.jsxs)(
                x.Fragment,
                {
                    children: [
                        (0, S.jsx)(
                            s2,
                            {
                                keybind: t,
                                keybindDescriptions: this.keybindDescriptions,
                                keybindActionTypes: this.keybindActionTypes,
                            },
                            t.id,
                        ),
                        n !== e.length - 1 ? (0, S.jsx)(nO.c, {}) : null,
                    ],
                },
                t.id,
            ),
        );
    }
    renderKeybindWarning() {
        return (0, S.jsxs)("div", {
            className: s0.$e,
            children: [
                (0, S.jsx)(sx.m, { size: "xs", color: w.A.colors.ICON_SUBTLE }),
                (0, S.jsx)(k.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: g.intl.string(g.t.NoKjWP),
                }),
            ],
        });
    }
    render() {
        let { enableClips: e, enableScreenshotKeybind: t } = this.props,
            n = eR()(this.props.keybinds)
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
            i = eR()((0, sN.Bx)())
                .filter((e) => e.description !== g.intl.string(g.t.HnNtEI))
                .groupBy((e) => e.group)
                .value();
        return (0, S.jsxs)(S.Fragment, {
            children: [
                (0, S.jsx)(s$, {
                    className: nf.IE,
                    children: ev.isPlatformEmbedded
                        ? (0, S.jsxs)(S.Fragment, {
                              children: [
                                  (0, S.jsxs)("div", {
                                      className: s0.OQ,
                                      children: [
                                          this.renderKeybindWarning(),
                                          (0, S.jsx)("div", {
                                              className: s0.c9,
                                              children: (0, S.jsx)(eh.$, {
                                                  size: "md",
                                                  onClick: this.handleAddKeybind,
                                                  text: g.intl.string(g.t.zk6Xbs),
                                                  variant: "primary",
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, S.jsx)(sD, { className: s0.Qo, sourcePage: "keybinds" }),
                                  n.length > 0 &&
                                      (0, S.jsxs)(S.Fragment, {
                                          children: [(0, S.jsx)(nO.c, {}), this.renderKeybinds(n)],
                                      }),
                                  (0, S.jsx)(nO.c, {}),
                              ],
                          })
                        : (0, S.jsx)(ta.p, {
                              messageType: ta.Y.INFO,
                              className: s0.Ly,
                              children: g.intl.format(g.t.mPi3F3, { downloadLink: q.X7G.DOWNLOAD }),
                          }),
                }),
                (0, S.jsxs)(R.B, {
                    gap: 48,
                    children: [
                        (0, S.jsx)(na.n, {
                            label: g.intl.string(g.t.Lz5KHI),
                            children: (0, S.jsx)("div", {
                                className: s0.jh,
                                children: (0, S.jsxs)("div", {
                                    className: s0.yZ,
                                    children: [
                                        (0, S.jsx)(k.E, {
                                            variant: "text-md/normal",
                                            children: g.intl.string(g.t.sMWLBj),
                                        }),
                                        (0, S.jsx)("div", {
                                            className: s0.DM,
                                            children: (0, S.jsx)(sf.e, { shortcut: sb.z.binds["0"], className: s0.LE }),
                                        }),
                                    ],
                                }),
                            }),
                        }),
                        (0, S.jsx)(s1, {
                            children: (e) =>
                                (0, S.jsx)(S.Fragment, {
                                    children: e.map((e, t) => {
                                        let n = (0, sN.Gm)(e),
                                            l = (0, sN.zF)(e),
                                            s = i[e];
                                        return (0, S.jsx)(
                                            na.n,
                                            {
                                                label: n,
                                                description: l,
                                                children: (0, S.jsx)("div", {
                                                    className: s0.jh,
                                                    children: s.map((e, t) =>
                                                        (0, S.jsxs)(
                                                            x.Fragment,
                                                            {
                                                                children: [
                                                                    0 !== t && (0, S.jsx)(nO.c, {}),
                                                                    (0, S.jsxs)("div", {
                                                                        className: s0.yZ,
                                                                        children: [
                                                                            (0, S.jsx)(k.E, {
                                                                                variant: "text-md/normal",
                                                                                children: e.description,
                                                                            }),
                                                                            (0, S.jsx)("div", {
                                                                                className: s0.DM,
                                                                                children: e.binds.map((e) =>
                                                                                    (0, S.jsx)(
                                                                                        sf.e,
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
let s3 = (0, o.E2)(d.X.KEYBINDS_SETTING, {
        Component: function () {
            x.useEffect(
                () => (
                    tO.A.enableAll(!1),
                    () => {
                        tO.A.enableAll(!0);
                    }
                ),
                [],
            );
            let e = (0, O.bG)([eN.Ay], () => eN.Ay.getState()),
                t = (0, O.bG)([sj.Ay], () => (0, sI.A)(sj.Ay)),
                n = (0, O.bG)([sv.A], () => sv.A.isSupported),
                i = (0, sC.sw)(),
                l = (0, sC.BW)();
            return (0, S.jsx)(s5, {
                keybinds: e,
                canGoLive: t,
                overlaySupported: n,
                allowSoundboard: (0, ev.isWindows)(),
                enableClips: i,
                enableScreenshotKeybind: l,
            });
        },
        useSearchTerms: () => [g.intl.string(g.t.T9DA2K)],
    }),
    s8 = (0, o.zZ)(d.X.KEYBINDS_CATEGORY, { buildLayout: () => [s3] }),
    s4 = (0, o.t_)(d.X.KEYBINDS_PANEL, { useTitle: () => g.intl.string(g.t.T9DA2K), buildLayout: () => [s8] }),
    s9 = (0, o.i4)(d.X.KEYBINDS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.T9DA2K),
        icon: sp.F,
        buildLayout: () => [s4],
    });
var s7 = n(37646),
    s6 = n(76335);
let ae = (0, o.t_)(d.X.LANGUAGE_AND_TIME_PANEL, {
        useTitle: () => g.intl.string(g.t.KyFVyi),
        buildLayout: () => [s6.F],
    }),
    at = (0, o.i4)(d.X.LANGUAGE_AND_TIME_SIDEBAR_ITEM, {
        icon: s7.U,
        useTitle: () => g.intl.string(g.t.KyFVyi),
        buildLayout: () => [ae],
    }),
    an = (0, iS.D)(() => ({ openOnStartup: !0, startMinimized: !1, minimizeToTray: !0 }));
async function ai() {
    let e = await ln.Ay.getOpenOnStart(),
        t = await ln.Ay.getSetting("START_MINIMIZED", !1),
        n = await ln.Ay.getSetting("MINIMIZE_TO_TRAY", !0);
    an.setState({ openOnStartup: e, startMinimized: t, minimizeToTray: n });
}
let al = (0, o.zD)(d.X.OS_OPEN_ON_STARTUP, {
        useTitle: () => g.intl.string(g.t["3BeZti"]),
        usePredicate: () => le.Av && !(0, le.cX)(),
        useValue: () => an.useState((e) => e.openOnStartup),
        setValue: function (e) {
            an.setState({ openOnStartup: e }), ln.Ay.send("TOGGLE_OPEN_ON_STARTUP", e);
        },
        initialize: () => {
            ln.Ay.getOpenOnStart().then((e) => an.setState({ openOnStartup: e }));
        },
    }),
    as = (0, o.zD)(d.X.OS_MINIMIZE_TO_TRAY, {
        useTitle: () => g.intl.string(g.t.dJ5MUh),
        useSubtitle: () => g.intl.string(g.t.nQavHr),
        usePredicate: () => le.Av && !(0, le.cX)(),
        useValue: () => an.useState((e) => e.minimizeToTray),
        setValue: function (e) {
            an.setState({ minimizeToTray: e }), ln.Ay.send("TOGGLE_MINIMIZE_TO_TRAY", e);
        },
        initialize: () => {
            ln.Ay.getSetting("MINIMIZE_TO_TRAY", !0).then((e) => an.setState({ minimizeToTray: e }));
        },
    });
var aa = n(572985);
let ar = (0, o.E2)(d.X.OS_SYSTEM_SERVICE, {
        useSearchTerms: () => [g.intl.string(g.t.roHq80)],
        Component: function () {
            let [e, t] = x.useState(!1),
                [n, i] = x.useState(() => (0, to.TC)()),
                l = (0, O.bG)([eQ.Ay], () => eQ.Ay.getSystemServiceStatus("input-service")),
                s = x.useCallback(async () => {
                    t(!0),
                        n ? await (0, to.z8)("windows-settings") : await (0, to.sL)("windows-settings"),
                        t(!1),
                        i((0, to.TC)());
                }, [n]),
                a = "running" === l.state;
            return (0, S.jsxs)("div", {
                className: aa.q,
                children: [
                    (0, S.jsxs)("div", {
                        className: aa.L,
                        children: [
                            (0, S.jsx)(k.E, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: g.intl.string(g.t.roHq80),
                            }),
                            (0, S.jsx)(k.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: g.intl.format(g.t["8CAL+D"], {
                                    helpCenterLink: tr.A.getArticleURL(q.MVz.SYSTEM_SERVICE),
                                }),
                            }),
                            n
                                ? (0, S.jsx)(k.E, {
                                      variant: "text-sm/normal",
                                      color: a ? "text-feedback-positive" : "text-feedback-warning",
                                      children: a
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
                                                            (0, t3.xb)(e.state);
                                                    }
                                                })(l),
                                            }),
                                  })
                                : null,
                        ],
                    }),
                    (0, S.jsx)(eh.$, {
                        variant: n ? "critical-secondary" : "primary",
                        loading: e,
                        onClick: s,
                        text: n ? g.intl.string(g.t.pAwbdL) : g.intl.string(g.t["1iI46O"]),
                    }),
                ],
            });
        },
        usePredicate: () => (0, to.XQ)(),
    }),
    ao = (0, o.zZ)(d.X.LINUX_CATEGORY, {
        buildLayout: () => [al, as, ar],
        initialize: () => {
            ai();
        },
    }),
    ad = (0, o.t_)(d.X.LINUX_PANEL, { useTitle: () => g.intl.string(g.t["7pPjTW"]), buildLayout: () => [ao] }),
    au = (0, o.i4)(d.X.LINUX_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["7pPjTW"]),
        icon: e2.k,
        usePredicate: () => ev.isPlatformEmbedded && (0, ev.isLinux)(),
        buildLayout: () => [ad],
    });
var ac = n(3137),
    ag = n(369606),
    a_ = n(604121),
    am = n(725951),
    ah = n(400492),
    aA = n(178241),
    ap = n(115063),
    aT = n(414736),
    aE = n(927018),
    aS = n(512599),
    ax = n(532197),
    af = n(874486),
    ab = n(989349),
    aN = n.n(ab),
    aC = n(58703),
    aI = n(906688),
    av = n(523896);
function ay(e) {
    let { achievementId: t, dateUnlocked: n } = e,
        i = (0, aE.vM)(t);
    if (null == i) return null;
    let l = null != n,
        { name: s, description: a, hideDescriptionUntilUnlock: r, onAction: o } = i,
        d = r && !l,
        u = l ? "text-strong" : "text-muted",
        c = l ? "text-default" : "text-muted",
        g = aN()(n),
        _ = null != o && l,
        m = _ ? U.D : "div";
    return (0, S.jsxs)(m, {
        className: ew()(av.kL, _ && av.b),
        onClick: () => {
            _ && o();
        },
        children: [
            (0, S.jsx)("div", {
                className: av.zc,
                children: (0, S.jsx)(aI.A, { achievementId: t, size: aI.A.Sizes.SIZE_40, unlocked: l }),
            }),
            (0, S.jsxs)("div", {
                className: av.VW,
                children: [
                    null != n &&
                        (0, S.jsx)(k.E, {
                            variant: "text-xxs/semibold",
                            color: "text-muted",
                            className: av.YR,
                            children: (0, aC.mk)(g),
                        }),
                    (0, S.jsx)(k.E, { variant: "text-md/medium", color: u, children: s() }),
                    (0, S.jsx)(k.E, { variant: "text-xs/normal", color: c, children: d ? "?????" : a() }),
                ],
            }),
        ],
    });
}
var aj = n(885959);
function aO(e) {
    let { onBackClick: t } = e,
        n = (0, O.bG)([af.A], () => af.A.getAllUnlockedAchievements()),
        i = x.useMemo(() => Object.values(n).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [n]),
        l = x.useMemo(
            () =>
                Object.values(aE.l0)
                    .filter(t3.Vq)
                    .filter((e) => null == n[e.id])
                    .sort((e, t) => e.rarity - t.rarity),
            [n],
        );
    return (0, S.jsxs)(S.Fragment, {
        children: [
            (0, S.jsxs)(U.D, {
                onClick: t,
                className: aj.vv,
                children: [
                    (0, S.jsx)(ax.A, { direction: ax.A.Directions.LEFT, className: aj.Kk }),
                    (0, S.jsx)(k.E, {
                        variant: "text-lg/normal",
                        color: "text-default",
                        children: g.intl.string(g.t["13/7kX"]),
                    }),
                ],
            }),
            (0, S.jsxs)("div", {
                className: aj.N1,
                children: [
                    (0, S.jsxs)("div", {
                        className: aj.if,
                        children: [
                            (0, S.jsx)(em.D, {
                                variant: "heading-lg/extrabold",
                                color: "text-strong",
                                children: g.intl.string(g.t["6jI0hd"]),
                            }),
                            (0, S.jsx)(k.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                children: g.intl.string(g.t.GuUItX),
                            }),
                        ],
                    }),
                    (0, S.jsx)("div", {
                        className: aj.nr,
                        children: (0, S.jsx)(ag.O, {
                            size: "custom",
                            color: w.A.unsafe_rawColors.ORANGE_345.css,
                            width: 40,
                            height: 40,
                        }),
                    }),
                ],
            }),
            i.length > 0 &&
                (0, S.jsx)("div", {
                    className: aj.yF,
                    children: (0, S.jsx)("div", {
                        className: aj.Eh,
                        children: i.map((e) => {
                            let { achievementId: t, dateUnlocked: n } = e;
                            return (0, S.jsx)(ay, { achievementId: t, dateUnlocked: n }, t);
                        }),
                    }),
                }),
            l.length > 0 &&
                (0, S.jsxs)("div", {
                    className: aj.yF,
                    children: [
                        (0, S.jsx)("div", {
                            className: aj.if,
                            children: (0, S.jsx)(k.E, {
                                variant: "text-md/bold",
                                color: "text-default",
                                children: g.intl.string(g.t.GFyMg1),
                            }),
                        }),
                        (0, S.jsx)("div", {
                            className: aj.Eh,
                            children: l.map((e) => (0, S.jsx)(ay, { achievementId: e.id }, e.id)),
                        }),
                    ],
                }),
            (0, S.jsx)("div", { className: aj.yF, children: (0, S.jsx)("div", { className: aj.F3 }) }),
        ],
    });
}
var aR = n(224964),
    aL = n(31408),
    aD = n(739347);
let aG = { enabled: !0, combosEnabled: !0, screenshakeEnabled: !1, confettiEnabled: !1 },
    aP = (0, eO.range)(0, 11),
    aM = (0, eO.range)(0, 2.25, 0.25),
    aU = (0, eO.range)(1, 11),
    ak = (0, eO.range)(1, 26),
    aV = { 0: "poggermode_settings_panel", 1: "poggermode_achievements_panel" };
function aw(e) {
    let { disabled: t, locations: n, settingsLocations: i, onChange: l } = e,
        s = n.map((e) =>
            (0, S.jsx)(
                L.d,
                {
                    label: e.title,
                    description: e.description,
                    checked: i[e.location],
                    disabled: t,
                    onChange: (t) => l({ ...i, [e.location]: t }),
                },
                e.location,
            ),
        );
    return (0, S.jsx)(na.n, { label: g.intl.string(g.t.bWVN1D), children: s });
}
function aB(e) {
    let { children: t } = e;
    return (0, S.jsx)(k.E, { className: aD.iF, variant: "text-sm/normal", color: "text-default", children: t });
}
function aF(e) {
    let {
            settings: { enabled: t, warningSeen: n },
            updateSettings: i,
        } = e,
        l = (0, O.bG)([nH.A], () => nH.A.useReducedMotion);
    return (0, S.jsx)(L.d, {
        label: g.intl.string(g.t.vuiXm9),
        description: g.intl.string(g.t.KuYbWN),
        checked: t,
        onChange: (e) => {
            e || (0, aT._)(aE.sn.DISABLE_POGGERMODE),
                e && (!n || l)
                    ? (0, lt.A)({
                          title: l ? g.intl.string(g.t["FxT+p0"]) : g.intl.string(g.t.TAZ4F9),
                          subtitle: l ? g.intl.string(g.t.gmixrx) : g.intl.string(g.t.jN3t3K),
                          confirmText: g.intl.string(g.t.JFfins),
                          onConfirm: () => i(l ? aG : { enabled: !0, warningSeen: !0 }),
                      })
                    : i({ enabled: e });
        },
    });
}
function az(e) {
    let {
            settings: {
                enabled: t,
                confettiEnabled: n,
                confettiCount: i,
                confettiSize: l,
                confettiEnabledLocations: s,
            },
            updateSettings: a,
        } = e,
        r = !t || !n;
    return (0, S.jsxs)(na.n, {
        label: g.intl.string(g.t.mqxwJO),
        children: [
            (0, S.jsx)(L.d, {
                label: g.intl.string(g.t.s0KCgF),
                description: g.intl.string(g.t.O1Vflg),
                checked: n,
                disabled: !t,
                onChange: (e) => a({ confettiEnabled: e }, 0),
            }),
            (0, S.jsxs)("div", {
                children: [
                    (0, S.jsx)(k.E, {
                        variant: "text-md/semibold",
                        color: r ? "text-muted" : "text-strong",
                        className: aD.KF,
                        children: g.intl.string(g.t.vd0D81),
                    }),
                    (0, S.jsx)(aB, { children: g.intl.string(g.t.a18Sug) }),
                    (0, S.jsx)(n4.A, {
                        disabled: r,
                        markers: aU,
                        stickToMarkers: !0,
                        minValue: aU[0],
                        maxValue: aU[aU.length - 1],
                        initialValue: i,
                        onValueChange: (e) => a({ confettiCount: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, S.jsxs)("div", {
                children: [
                    (0, S.jsx)(k.E, {
                        variant: "text-md/semibold",
                        color: r ? "text-muted" : "text-strong",
                        className: aD.KF,
                        children: g.intl.string(g.t.sPO3ij),
                    }),
                    (0, S.jsx)(aB, { children: g.intl.string(g.t.xoldVn) }),
                    (0, S.jsx)(n4.A, {
                        disabled: r,
                        markers: ak,
                        stickToMarkers: !0,
                        minValue: ak[0],
                        maxValue: ak[ak.length - 1],
                        initialValue: l,
                        onValueChange: (e) => a({ confettiSize: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, S.jsx)(aw, {
                disabled: r,
                locations: [
                    {
                        location: aL.k.CHAT_INPUT,
                        title: g.intl.string(g.t.elTtyz),
                        description: g.intl.string(g.t.HtKfMi),
                    },
                    {
                        location: aL.k.REACTION,
                        title: g.intl.string(g.t.Ik4VIa),
                        description: g.intl.string(g.t.y4rqK0),
                    },
                    {
                        location: aL.k.MEMBER_USER,
                        title: g.intl.string(g.t.ZXBlAn),
                        description: g.intl.string(g.t["m9RD+c"]),
                    },
                    {
                        location: aL.k.CALL_TILE,
                        title: g.intl.string(g.t.V66giQ),
                        description: g.intl.string(g.t.fiHV7u),
                    },
                ],
                settingsLocations: s,
                onChange: (e) => a({ confettiEnabledLocations: e }, 0),
            }),
        ],
    });
}
function aX(e) {
    let {
            settings: { enabled: t, combosEnabled: n, comboSoundsEnabled: i, combosRequiredCount: l },
            updateSettings: s,
        } = e,
        a = !t || !n;
    return (0, S.jsxs)(na.n, {
        label: g.intl.string(g.t.Xz0ole),
        children: [
            (0, S.jsx)(L.d, {
                label: g.intl.string(g.t.o3iV7B),
                description: g.intl.string(g.t["31Z8Ee"]),
                checked: n,
                disabled: !t,
                onChange: (e) => s({ combosEnabled: e }),
            }),
            (0, S.jsx)(L.d, {
                label: g.intl.string(g.t["Ax+IoW"]),
                description: g.intl.string(g.t["9rgQEr"]),
                checked: i,
                disabled: !t,
                onChange: (e) => s({ comboSoundsEnabled: e }),
            }),
            (0, S.jsxs)("div", {
                children: [
                    (0, S.jsx)(k.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: aD.KF,
                        children: g.intl.string(g.t.L0oQuh),
                    }),
                    (0, S.jsx)(aB, { children: g.intl.string(g.t["/OOFpL"]) }),
                    (0, S.jsx)(n4.A, {
                        disabled: a,
                        markers: aP,
                        stickToMarkers: !0,
                        minValue: aP[0],
                        maxValue: aP[aP.length - 1],
                        initialValue: l,
                        onValueChange: (e) => s({ combosRequiredCount: e }),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
        ],
    });
}
function aY(e) {
    let {
            settings: { enabled: t, screenshakeEnabled: n, shakeIntensity: i, screenshakeEnabledLocations: l },
            updateSettings: s,
        } = e,
        a = (0, O.bG)([nH.A], () => nH.A.useReducedMotion),
        r = !t || !n || a;
    return (0, S.jsxs)(na.n, {
        label: g.intl.string(g.t.wVS5Sd),
        children: [
            (0, S.jsx)(L.d, {
                label: g.intl.string(g.t.N004zO),
                description: a ? g.intl.string(g.t.GckHGw) : g.intl.string(g.t.Qq5W3v),
                checked: n && !a,
                disabled: !t || a,
                onChange: (e) => s({ screenshakeEnabled: e }, 1),
            }),
            (0, S.jsxs)("div", {
                children: [
                    (0, S.jsx)(k.E, {
                        variant: "text-md/semibold",
                        color: r ? "text-muted" : "text-strong",
                        className: aD.KF,
                        children: g.intl.string(g.t.UxnnC4),
                    }),
                    (0, S.jsx)(aB, { children: g.intl.string(g.t.CEOEOb) }),
                    (0, S.jsx)(n4.A, {
                        disabled: r,
                        markers: aM,
                        equidistant: !0,
                        stickToMarkers: !0,
                        minValue: aM[0],
                        maxValue: aM[aM.length - 1],
                        initialValue: i,
                        onValueChange: (e) => {
                            var t;
                            null != (t = { shakeIntensity: e }).shakeIntensity &&
                                t.shakeIntensity > i &&
                                (0, aT._)(aE.sn.MORE),
                                s(t, 1);
                        },
                        onMarkerRender: (e) => (e === aM[aM.length - 1] ? g.intl.string(g.t["4rbMWc"]) : `${100 * e}%`),
                    }),
                ],
            }),
            (0, S.jsx)(aw, {
                disabled: r,
                locations: [
                    {
                        location: aL.uD.CHAT_INPUT,
                        title: g.intl.string(g.t.vUcvPP),
                        description: g.intl.string(g.t.y00OrF),
                    },
                    {
                        location: aL.uD.VOICE_USER,
                        title: g.intl.string(g.t.TcRO54),
                        description: g.intl.string(g.t.YJCxVY),
                    },
                    {
                        location: aL.uD.MENTION,
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
function aH(e) {
    let { updateSettings: t } = e;
    return (0, S.jsx)(na.n, {
        label: g.intl.string(g.t.EuXv2q),
        children: (0, S.jsxs)(R.B, {
            gap: 16,
            children: [
                (0, S.jsx)("div", { children: g.intl.string(g.t["1SLnki"]) }),
                (0, S.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: aD.hw,
                    children: (0, S.jsx)(eh.$, {
                        variant: "primary",
                        size: "sm",
                        text: g.intl.string(g.t.qz65yY),
                        onClick: () => {
                            t({ enabled: !1, settingsVisible: !1 }), (0, lp.default)();
                        },
                    }),
                }),
            ],
        }),
    });
}
function aK(e) {
    let { onChangePage: t } = e;
    return (0, S.jsxs)(U.D, {
        onClick: () => t(1),
        className: aD.Tq,
        children: [
            (0, S.jsx)("div", {
                className: aD.w1,
                children: (0, S.jsx)(ag.O, { size: "md", color: w.A.unsafe_rawColors.ORANGE_345.css }),
            }),
            (0, S.jsxs)("div", {
                className: aD.qL,
                children: [
                    (0, S.jsx)(em.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: g.intl.string(g.t["6jI0hd"]),
                    }),
                    (0, S.jsx)(k.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: g.intl.string(g.t.GuUItX),
                    }),
                ],
            }),
            (0, S.jsx)(th._, { size: "custom", color: "currentColor", width: 16, className: aD.nT }),
        ],
    });
}
let aW = () =>
    n
        .e("4660")
        .then(n.t.bind(n, 662336, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
function aZ(e) {
    let { onChangePage: t, setShowEnableAnimation: n } = e,
        i = (0, O.cf)([ac.A], () => ac.A.getState()),
        [l, s] = x.useState({ x: 0, y: 0 }),
        a = (0, aR.A)(),
        r = (e, t) => {
            var s, r, o, d, u, c, g, _;
            if (
                (e.enabled &&
                    !1 === i.enabled &&
                    (n(!0),
                    (0, ah.Ak)("poggermode_enabled"),
                    (0, ap.fO)({ duration: 2e3, intensity: e.shakeIntensity ?? i.shakeIntensity })),
                (0, aS.O9)(e),
                null == t)
            )
                return;
            let m =
                ((s = i.confettiEnabled),
                (r = e.confettiEnabled),
                (o = i.enabled),
                (d = e.enabled),
                (r ?? s) && (d ?? o));
            0 === t && m && a.fire(l.x, l.y, { settings: e });
            let h =
                ((u = i.screenshakeEnabled),
                (c = e.screenshakeEnabled),
                (g = i.enabled),
                (_ = e.enabled),
                (c ?? u) && (_ ?? g));
            1 === t && h && (0, ap.fO)({ duration: 1e3, intensity: e.shakeIntensity ?? i.shakeIntensity });
        },
        o = (e) => {
            s({ x: e.clientX, y: e.clientY });
        };
    return (
        x.useEffect(
            () => (window.addEventListener("mousemove", o), () => window.removeEventListener("mousemove", o)),
            [],
        ),
        (0, S.jsxs)(R.B, {
            gap: 24,
            children: [
                (0, S.jsx)(aF, { settings: i, updateSettings: r }),
                (0, S.jsx)(aK, { onChangePage: t }),
                (0, S.jsx)(aX, { settings: i, updateSettings: r }),
                (0, S.jsx)(aY, { settings: i, updateSettings: r }),
                (0, S.jsx)(az, { settings: i, updateSettings: r }),
                (0, S.jsx)(aH, { updateSettings: r }),
            ],
        })
    );
}
let aq = (e) => (0 === e ? am.f.LEFT : am.f.RIGHT),
    aQ = (0, o.E2)(d.X.POGGERMODE_SETTING, {
        Component: function () {
            let [e, t] = x.useState(0),
                [n, i] = x.useState(aq(e)),
                [l, s] = x.useState(!1),
                a = (0, O.bG)([nH.A], () => nH.A.useReducedMotion),
                r = l && !a;
            return (
                x.useEffect(() => {
                    let t = setTimeout(() => {
                        i(aq(e));
                    }, 500);
                    return () => clearTimeout(t);
                }, [e]),
                x.useEffect(() => {
                    (0, aA._)(aV[e]);
                }, [e]),
                x.useEffect(() => {
                    Math.random() > 0.99 && (0, aT._)(aE.sn.VISITOR_100);
                }, []),
                (0, S.jsxs)(S.Fragment, {
                    children: [
                        (0, S.jsx)(am.A, {
                            className: aD.l3,
                            step: e,
                            direction: n,
                            children: ((e, t, n) => {
                                let i = (e) => () => {
                                    t(e);
                                };
                                switch (e) {
                                    case 0:
                                        return (0, S.jsx)(aZ, { onChangePage: i(1), setShowEnableAnimation: n });
                                    case 1:
                                        return (0, S.jsx)(aO, { onBackClick: i(0) });
                                    default:
                                        return null;
                                }
                            })(e, t, s),
                        }),
                        (0, S.jsx)("div", {
                            className: r ? aD.Sr : aD.IP,
                            children: (0, S.jsx)(a_.a, {
                                className: aD.gT,
                                importData: aW,
                                shouldAnimate: r,
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
    aJ = (0, o.zZ)(d.X.POGGERMODE_CATEGORY, { buildLayout: () => [aQ] });
var a$ = n(502220);
let a0 = (0, o.t_)(d.X.POGGERMODE_PANEL, { useTitle: () => g.intl.string(g.t.AtCukI), buildLayout: () => [aJ] }),
    a1 = (0, o.i4)(d.X.POGGERMODE_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.AtCukI),
        icon: () => (0, S.jsx)("img", { alt: "", src: n(724405), className: a$.$ }),
        usePredicate: () => (0, O.bG)([ac.A], () => ac.A.settingsVisible),
        buildLayout: () => [a0],
    });
var a2 = n(831544),
    a5 = n(235661),
    a3 = n(212245),
    a8 = n(329551),
    a4 = n(285918),
    a9 = n(413339),
    a7 = n(952572),
    a6 = n(382003);
let re = (0, o.E2)(d.X.CAMERA_BACKGROUND_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t.lZTUPs)],
        usePredicate: a7.A,
        Component: function () {
            let e = (0, a3.p)(),
                t = x.useRef(!1),
                n = (0, O.bG)([sj.Ay], () => sj.Ay.getVideoDeviceId()),
                [i, l] = x.useState((0, a8.i)(t5.default.getCurrentUser())),
                s = x.useRef(i);
            return (
                x.useEffect(
                    () => () => {
                        t.current && (0, a4._C)(s.current);
                    },
                    [],
                ),
                (0, S.jsx)(a6.A, {
                    selectedBackgroundOption: i,
                    onSelectBackgroundOption: (n) => {
                        (t.current = !0), (s.current = n), l(n), (0, a9.gB)(n, { location: e.location }).catch(q.tEg);
                    },
                    currentDeviceId: n,
                })
            );
        },
    }),
    rt = (0, o.zD)(d.X.CAMERA_PREVIEW_PREFERENCE, {
        useTitle: () => g.intl.string(g.t["3Ppr1h"]),
        useSubtitle: () => g.intl.string(g.t.WNbX4O),
        useValue: c.bm.useSetting,
        setValue: (e) => {
            c.bm.updateSetting(e), X.default.track(q.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e });
        },
    });
var rn = n(625841),
    ri = n(74848),
    rl = n(204050);
let rs = (0, iS.D)(() => ({ previewEnabled: !1 }));
var ra = n(731854);
let rr = (0, o.E2)(d.X.CAMERA_SELECTION_SETTING, {
    useSearchTerms: () => [g.intl.string(g.t.FsQ3OR)],
    Component: function () {
        let e = (0, O.bG)([sj.Ay], () => sj.Ay.isVideoAvailable()),
            { id: t } = (0, ri.x5)(ra.oh.VIDEO_INPUT),
            { analyticsLocations: n } = (0, iM.Ay)();
        return (0, S.jsx)(rn.U, {
            label: g.intl.string(g.t.FsQ3OR),
            deviceType: ra.oh.VIDEO_INPUT,
            location: "UserSettingsCameraSelect",
            isDisabled: !e,
            helperText: (0, rl.p)()
                ? g.intl.format(g.t.aJYgRt, {
                      onCameraSettingsClick: () => {
                          rs.setState({ previewEnabled: !1 }),
                              window.open((0, rl.i)(t)),
                              X.default.track(q.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: n });
                      },
                  })
                : void 0,
        });
    },
});
var ro = n(745317),
    rd = n(698292);
let ru = (0, o.E2)(d.X.CAMERA_VIDEO_PREVIEW, {
        useSearchTerms: () => [g.intl.string(g.t.JIf4v7)],
        Component: function () {
            let e = sj.Ay.getCameraComponent(),
                t = (0, O.bG)([sj.Ay], () => sj.Ay.getVideoDeviceId()),
                n = rs.useField("previewEnabled"),
                i = (0, O.bG)([sj.Ay], () => sj.Ay.isVideoAvailable());
            return ((0, e4.l0)(() => {
                rs.setState({ previewEnabled: !1 });
            }),
            n)
                ? (0, S.jsx)("div", {
                      className: rd.T,
                      children: (0, S.jsxs)("div", {
                          className: rd.U,
                          children: [
                              (0, S.jsx)(e, { deviceId: t, width: 387, height: 218, disabled: !n }),
                              (0, S.jsx)(ro.k, {}),
                          ],
                      }),
                  })
                : (0, S.jsx)("div", {
                      className: rd.T,
                      children: (0, S.jsx)(e0.m, {
                          text: i ? null : g.intl.string(g.t["8jSzSe"]),
                          children: (0, S.jsx)(eh.$, {
                              variant: "primary",
                              text: g.intl.string(g.t.JIf4v7),
                              onClick: () => rs.setState({ previewEnabled: !0 }),
                              disabled: !i,
                          }),
                      }),
                  });
        },
    }),
    rc = (0, o.zZ)(d.X.CAMERA_CATEGORY, {
        useTitle: () => g.intl.string(g.t.uje3P9),
        usePredicate: () => (0, O.bG)([sj.Ay], () => sj.Ay.supports(ra.O5.VIDEO)),
        buildLayout: () => [ru, rt, rr, re],
    });
var rg = n(827343);
let r_ = (0, o.zD)(d.X.VOICE_AND_VIDEO_OPENH264, {
        useTitle: () => g.intl.string(g.t.qFphsa),
        useSubtitle: () => g.intl.string(g.t.cQfwyY),
        usePredicate: function () {
            return (0, le.j9)();
        },
        useValue: function () {
            return (0, O.bG)([sj.Ay], () => sj.Ay.getOpenH264Enabled());
        },
        setValue: function (e) {
            rg.A.setOpenH264Enabled(e),
                (0, lt.A)({
                    title: g.intl.string(g.t["9jf31O"]),
                    subtitle: g.intl.string(g.t["J2wg+X"]),
                    confirmText: g.intl.string(g.t.BddRzS),
                    onConfirm: () => l5.A.app.relaunch(),
                });
        },
        useSearchTerms: () => ["open", "OpenH264", "H264", "codec"],
    }),
    rm = (0, o.zD)(d.X.VOICE_AND_VIDEO_AUDIO_RECORDING, {
        useTitle: () => g.intl.string(g.t["r6K+TL"]),
        useSubtitle: () => g.intl.string(g.t["xl9+I6"]),
        useValue: function () {
            return (0, O.bG)([sj.Ay], () => sj.Ay.getAecDump());
        },
        setValue: rg.A.setAecDump,
        usePredicate: function () {
            return (0, O.bG)([sj.Ay], () => sj.Ay.isAecDumpSupported());
        },
    });
var rh = n(139033),
    rA = n(862482),
    rp = n(640238),
    rT = n(825484),
    rE = n(77138),
    rS = n(487329),
    rx = n(353835);
let rf = (0, iS.D)(() => ({ isUploading: !1, isDisabled: !1 }));
async function rb() {
    let e = await l5.A.fileManager.getLogPath();
    l5.A.fileManager.showItemInFolder(e);
}
function rN(e) {
    (0, lt.A)({
        title: g.intl.string(g.t["7UXEF2"]),
        subtitle: g.intl.string(g.t.IYPrRl),
        confirmText: g.intl.string(g.t.BddRzS),
        onConfirm: () => rg.A.setDebugLogging(e),
    });
}
async function rC(e) {
    let { onUploadStart: t, onUploadFinish: n } = e;
    t?.();
    try {
        let e, t;
        await sj.Ay.getMediaEngine().writeAudioDebugState(),
            await rx.A.submitLiveCrashReport({ message: { message: "User Live Dump" } }),
            await (0, rE.a)(q.Umv.RTC),
            (e = g.intl.string(g.t["fKBB8+"])),
            (t = g.intl.string(g.t.BvyxE7)),
            (0, rh.A)({ title: e, subtitle: t });
    } catch (s) {
        var i;
        let e, t, n, l;
        (i = s.displayMessage),
            (e = g.intl.string(g.t.QZg0J7)),
            (t = i ?? g.intl.string(g.t.VzHcSm)),
            (n = (0, rS.B1)(rS.iy.DEBUG_LOG_UPLOAD_FAILED)?.errorCode),
            (l = g.intl.formatToPlainString(g.t.ejOT95, { errorCode: n })),
            (0, b.openModal)((n) =>
                (0, S.jsx)(rp.a, {
                    header: e,
                    confirmButtonColor: rA.$n.Colors.BRAND,
                    confirmText: g.intl.string(g.t.BddRzS),
                    ...n,
                    children: (0, S.jsxs)("div", {
                        style: { display: "flex", flexDirection: "column", height: "100%" },
                        children: [
                            (0, S.jsx)(k.E, { variant: "text-md/normal", children: t }),
                            (0, S.jsx)(k.E, {
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
        n?.();
    }
}
async function rI() {
    await rC({
        onUploadStart: () => rf.setState({ isUploading: !0 }),
        onUploadFinish: () => rf.setState({ isUploading: !1, isDisabled: !0 }),
    });
}
let rv = (0, o.E2)(d.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [g.intl.string(g.t["726JHL"]), g.intl.string(g.t.EbwFfR), g.intl.string(g.t.nuPtYi)],
    usePredicate: function () {
        let e = (0, O.bG)([sj.Ay], () => sj.Ay.supports(ra.O5.DEBUG_LOGGING));
        return le.Av && e && null != l5.A.fileManager.readLogFiles;
    },
    Component: function () {
        let e = (0, O.bG)([sj.Ay], () => sj.Ay.getDebugLogging()),
            t = rf.useField("isUploading"),
            n = rf.useField("isDisabled"),
            i = x.useId();
        return (0, S.jsxs)("fieldset", {
            children: [
                (0, S.jsx)(F.A, { tag: "legend", id: i, children: g.intl.string(g.t["FjN+et"]) }),
                (0, S.jsxs)(R.B, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, S.jsx)(L.d, {
                            label: g.intl.string(g.t["726JHL"]),
                            description: g.intl.string(g.t["/7ak9Q"]),
                            checked: e,
                            onChange: rN,
                        }),
                        (0, S.jsx)("div", {
                            role: "group",
                            "aria-labelledby": i,
                            children: (0, S.jsxs)(rT.e, {
                                children: [
                                    (0, S.jsx)(eh.$, {
                                        variant: "secondary",
                                        text: g.intl.string(g.t.EbwFfR),
                                        onClick: rI,
                                        loading: t,
                                        disabled: n,
                                        "aria-label": g.intl.string(g.t.aY1OH2),
                                    }),
                                    (0, S.jsx)(eh.$, {
                                        variant: "secondary",
                                        text: g.intl.string(g.t.nuPtYi),
                                        onClick: rb,
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
var ry = n(233545),
    rj = n(412780);
function rO() {
    return (0, O.bG)([t5.default, sj.Ay], () => {
        let e = t5.default.getCurrentUser(),
            t = e?.isStaff() ?? !1,
            n = "canary" === ln.Ay.releaseChannel || "development" === ln.Ay.releaseChannel,
            i = sj.Ay.supports(ra.O5.CONNECTION_REPLAY);
        return t && n && i;
    });
}
let rR = (0, o.zD)(d.X.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
        useTitle: () => g.intl.string(g.t.U4FgFK),
        useSubtitle: () => g.intl.string(g.t.Lm72RU),
        useValue: function () {
            return (0, O.bG)([rj.Ay], () => rj.Ay.shouldRecordNextConnection());
        },
        setValue: ry.Et,
        usePredicate: rO,
    }),
    rL = (0, o.Tf)(d.X.VOICE_AND_VIDEO_OPEN_CONNECTION_REPLAY, {
        useTitle: () => g.intl.string(g.t.nJnOHO),
        useLabel: () => g.intl.string(g.t["3xjX0U"]),
        onClick: ry.YW,
        usePredicate: rO,
    });
var rD = n(926919),
    rG = n(111162),
    rP = n(698723);
let rM = (0, o.zD)(d.X.VOICE_AND_VIDEO_STREAM_INFO_OVERLAY, {
        useTitle: () => g.intl.string(g.t["0CEP6e"]),
        useSubtitle: () => g.intl.string(g.t["kBXuW+"]),
        useValue: function () {
            return (0, O.bG)([rG.default], () => rG.default.isStreamInfoOverlayEnabled);
        },
        setValue: function (e) {
            let t = rG.default.isStreamInfoOverlayEnabled;
            (0, rP.A)("stream_info_overlay_enabled", e, t), (0, rD.x)({ isStreamInfoOverlayEnabled: e });
        },
        usePredicate: function () {
            return c.Q_.useSetting();
        },
    }),
    rU = (0, o.bd)(d.X.VOICE_AND_VIDEO_DIAGNOSTICS_ACCORDION, {
        useTitle: (e) => (e ? g.intl.string(g.t["/B4I8H"]) : g.intl.string(g.t.BTlsWH)),
        useCollapsedSubtitle: () => g.intl.string(g.t.la1Ys4),
        buildLayout: () => [rM, rm, rR, rL, rv],
    });
function rk(e, t, n) {
    (0, lt.A)({ title: e, subtitle: t, confirmText: g.intl.string(g.t.BddRzS), onConfirm: n });
}
let rV = (0, o.Tf)(d.X.VOICE_AND_VIDEO_RESET_ALL_SETTINGS, {
        useTitle: () => g.intl.string(g.t.SXfv1v),
        useSubtitle: () => g.intl.string(g.t["buA5/q"]),
        useLabel: () => g.intl.string(g.t.yBZMsQ),
        onClick: function () {
            rk(g.intl.string(g.t["4iKQ/3"]), g.intl.string(g.t.sQ42iT), rg.A.reset);
        },
        useVariant: () => "critical-secondary",
    }),
    rw = (0, o.zZ)(d.X.VOICE_AND_VIDEO_DIAGNOSTICS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.UDAU9K),
        buildLayout: () => [r_, rU, rV],
    });
var rB = n(347481),
    rF = n(533488),
    rz = n(199966),
    rX = n(963935);
function rY(e) {
    let { title: t } = e;
    return t;
}
function rH(e) {
    let { useTitle: t, settingKey: n, formatter: i, index: l } = e,
        s = t();
    return "string" == typeof s ? i({ title: s, index: l, key: n }) : s;
}
function rK(e) {
    let { setting: t, formatter: n, index: i } = e;
    return () => (0, S.jsx)(rH, { useTitle: t.useTitle, settingKey: t.key, formatter: n, index: i }, t.key);
}
function rW(e) {
    return e.type === rX.Z6.LIST;
}
function rZ(e, t) {
    let { limit: n = 2, formatter: i = rY } = t ?? {};
    tj()(n > 0, "[useSettingCollapsibleSubtitle] Limit must be greater than 0");
    let { visibleDirectory: l, accessibleDirectory: s } = (0, rz._)(),
        a = l.get(e) ?? s.get(e);
    tj()(
        null != a && (a.type === rX.Z6.ACCORDION || rW(a)),
        "[useSettingCollapsibleSubtitle] Node is not a collapsible settings node",
    );
    let r = rW(a) ? (a.collapseAfter ?? 0) : 0,
        o = a.layout;
    return x.useMemo(() => {
        let e = r,
            t = [];
        for (let n of o)
            if ("useTitle" in n && null != n.useTitle) {
                if (e > 0) {
                    e--;
                    continue;
                }
                t.push({ key: n.key, useTitle: n.useTitle });
            }
        if (0 === t.length) return "";
        let l = Math.min(n, 3);
        if (t.length <= l)
            if (1 === t.length)
                return g.intl.format(g.t["3H9tCW"], { settingOneHook: rK({ setting: t[0], formatter: i, index: 0 }) });
            else if (2 === t.length)
                return g.intl.format(g.t.MWryo6, {
                    settingOneHook: rK({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: rK({ setting: t[1], formatter: i, index: 1 }),
                });
            else
                return g.intl.format(g.t.a00b5G, {
                    settingOneHook: rK({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: rK({ setting: t[1], formatter: i, index: 1 }),
                    settingThreeHook: rK({ setting: t[2], formatter: i, index: 2 }),
                });
        return 1 === l
            ? g.intl.format(g.t.O8vNbS, { settingOneHook: rK({ setting: t[0], formatter: i, index: 0 }) })
            : 2 === l
              ? g.intl.format(g.t["acXG/W"], {
                    settingOneHook: rK({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: rK({ setting: t[1], formatter: i, index: 1 }),
                })
              : g.intl.format(g.t["5+ldWc"], {
                    settingOneHook: rK({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: rK({ setting: t[1], formatter: i, index: 1 }),
                    settingThreeHook: rK({ setting: t[2], formatter: i, index: 2 }),
                });
    }, [n, r, o, i]);
}
let rq = (0, o.zD)(d.X.VOICE_AUTOMATIC_GAIN_CONTROL_SETTING, {
        useTitle: () => g.intl.string(g.t.cUMdH0),
        useSubtitle: () => g.intl.string(g.t["6EjbvA"]),
        useValue: function () {
            return (0, O.bG)([sj.Ay], () => sj.Ay.getAutomaticGainControl());
        },
        setValue: function (e) {
            rg.A.setAutomaticGainControl(e, { page: q.liQ.USER_SETTINGS, section: q.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, O.bG)([sj.Ay, rB.A], () => {
                let e = sj.Ay.getInputDeviceId();
                return rB.A.hasAutomaticGainControl(e);
            });
        },
        usePredicate: function () {
            return (0, O.bG)([sj.Ay], () => sj.Ay.isAutomaticGainControlSupported() && sj.Ay.isInputProfileCustom());
        },
    }),
    rQ = (0, o.sN)(d.X.VOICE_GLOBAL_ATTENUATION_SLIDER, {
        useTitle: () => g.intl.string(g.t.AlybXj),
        setValue: (e) =>
            rg.A.setAttenuation(e, sj.Ay.getAttenuateWhileSpeakingSelf(), sj.Ay.getAttenuateWhileSpeakingOthers()),
        minValue: 0,
        maxValue: 100,
        getInitialValue: () => sj.Ay.getAttenuation(),
    }),
    rJ = (0, o.zD)(d.X.VOICE_GLOBAL_ATTENUATION_FOR_SELF_SETTING, {
        useTitle: () => g.intl.string(g.t["9dHxRY"]),
        useValue: () => (0, O.bG)([sj.Ay], () => sj.Ay.getAttenuateWhileSpeakingSelf()),
        setValue: (e) => rg.A.setAttenuation(sj.Ay.getAttenuation(), e, sj.Ay.getAttenuateWhileSpeakingOthers()),
    }),
    r$ = (0, o.zD)(d.X.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
        useTitle: () => g.intl.string(g.t.SMt0Gr),
        useValue: () => (0, O.bG)([sj.Ay], () => sj.Ay.getAttenuateWhileSpeakingOthers()),
        setValue: (e) => rg.A.setAttenuation(sj.Ay.getAttenuation(), sj.Ay.getAttenuateWhileSpeakingSelf(), e),
    }),
    r0 = (0, o.FW)(d.X.VOICE_GLOBAL_ATTENUATION_FIELD_SET, {
        variant: "compact",
        useTitle: () => g.intl.string(g.t.oSdBvW),
        useSubtitle: () => g.intl.string(g.t["0A/8Rt"]),
        usePredicate: () => (0, O.bG)([sj.Ay], () => sj.Ay.supports(ra.O5.ATTENUATION)),
        buildLayout: () => [rQ, rJ, r$],
    });
var r1 = n(801644);
let r2 = (0, o.zD)(d.X.VOICE_HARDWARE_MUTE_SILENCE_ALERT_SETTING, {
        useTitle: () => g.intl.string(g.t.pZ0vr4),
        useSubtitle: () => g.intl.string(g.t.tVbzoZ),
        useValue: function () {
            return (0, O.bG)([iA.Ay], () => !iA.Ay.disableHardwareMuteSilenceAlert);
        },
        setValue: function (e) {
            (0, rP.A)("hardware_mute_silence_alert_enabled", e, !iA.Ay.disableHardwareMuteSilenceAlert),
                lH.Ay.updatedUnsyncedSettings({ disableHardwareMuteSilenceAlert: !e });
        },
        usePredicate: function () {
            let { enableHardwareSilenceWarning: e } = r1.A.useConfig({ location: "HardwareMuteSilenceAlertSetting" });
            return e;
        },
    }),
    r5 = (0, o.zD)(d.X.VOICE_BYPASS_SYSTEM_INPUT_PROCESSING_SETTING, {
        useTitle: () => g.intl.string(g.t.DFPXIG),
        useSubtitle: () => g.intl.string(g.t["UyRX+C"]),
        useValue: function () {
            return (0, O.bG)([sj.Ay], () => sj.Ay.getBypassSystemInputProcessing());
        },
        setValue: function (e) {
            rg.A.setBypassSystemInputProcessing(e);
        },
        usePredicate: function () {
            return (0, O.bG)([sj.Ay], () => sj.Ay.showBypassSystemInputProcessing() && sj.Ay.isInputProfileCustom());
        },
    }),
    r3 = (0, o.zD)(d.X.VOICE_SWITCH_CHANNEL_ALERT_SETTING, {
        useTitle: () => g.intl.string(g.t.jrWHD3),
        useSubtitle: () => g.intl.string(g.t.YCCMkJ),
        useValue: function () {
            return (0, O.bG)([iA.Ay], () => !iA.Ay.disableVoiceChannelChangeAlert);
        },
        setValue: function (e) {
            (0, rP.A)("switch_channel_warning_enabled", e, !iA.Ay.disableVoiceChannelChangeAlert),
                lH.Ay.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !e });
        },
    }),
    r8 = (0, o.zD)(d.X.ADVANCED_VOICE_ACTIVITY_PROCESSING_SETTING, {
        useTitle: () => g.intl.string(g.t.BbESsg),
        useSubtitle: () => g.intl.string(g.t.LoOB1F),
        useValue: function () {
            return (0, O.bG)([sj.Ay], () => {
                let { vadUseKrisp: e } = sj.Ay.getModeOptions();
                return e;
            });
        },
        setValue: function (e) {
            let t = sj.Ay.getMode();
            rg.A.setMode(t, { vadUseKrisp: e });
        },
        useDisabled: function () {
            return (0, O.bG)([sj.Ay], () => {
                let e = sj.Ay.getMode(),
                    t = sj.Ay.getModeOptions().autoThreshold;
                return e === q.TBI.VOICE_ACTIVITY && t;
            });
        },
        usePredicate: function () {
            return (0, O.bG)([sj.Ay], () => sj.Ay.isAdvancedVoiceActivitySupported() && sj.Ay.isInputProfileCustom());
        },
    }),
    r4 = (0, o.Hn)(d.X.VOICE_AUDIO_SUBSYSTEM_SETTING, {
        useTitle: () => g.intl.string(g.t.wVBHr0),
        useValue: function () {
            return (0, O.bG)([sj.Ay], () => sj.Ay.getAudioSubsystem());
        },
        setValue: function (e) {
            rk(g.intl.string(g.t.uY7AcQ), g.intl.string(g.t.gBqik6), () => rg.A.setAudioSubsystem(e));
        },
        useOptions: function () {
            let {
                legacyAudioSubsystemSupported: e,
                experimentalAudioSubsystemSupported: t,
                automaticAudioSubsystemSupported: n,
            } = (0, O.cf)([sj.Ay], () => ({
                legacyAudioSubsystemSupported: sj.Ay.supports(ra.O5.LEGACY_AUDIO_SUBSYSTEM),
                experimentalAudioSubsystemSupported: sj.Ay.supports(ra.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM),
                automaticAudioSubsystemSupported: sj.Ay.supports(ra.O5.AUTOMATIC_AUDIO_SUBSYSTEM),
            }));
            return x.useMemo(() => {
                let i;
                return (
                    (i = [{ id: ra.rB.STANDARD, value: ra.rB.STANDARD, label: g.intl.string(g.t.dqb2JZ) }]),
                    e && i.push({ id: ra.rB.LEGACY, value: ra.rB.LEGACY, label: g.intl.string(g.t["TYfH+5"]) }),
                    t &&
                        i.push({ id: ra.rB.EXPERIMENTAL, value: ra.rB.EXPERIMENTAL, label: g.intl.string(g.t.liQmtr) }),
                    n && i.push({ id: ra.rB.AUTOMATIC, value: ra.rB.AUTOMATIC, label: g.intl.string(g.t.qNgtO1) }),
                    i
                );
            }, [n, t, e]);
        },
        usePredicate: function () {
            return (0, O.bG)([sj.Ay], () => sj.Ay.shouldOfferManualSubsystemSelection());
        },
    }),
    r9 = (0, o.zD)(d.X.VOICE_QUALITY_OF_SERVICE_SETTING, {
        useTitle: () => g.intl.string(g.t.uancuJ),
        useSubtitle: () => g.intl.string(g.t.I1Eoqq),
        useValue: function () {
            return (0, O.bG)([sj.Ay], () => sj.Ay.getQoS());
        },
        setValue: function (e) {
            rg.A.setQoS(e);
        },
        usePredicate: function () {
            return (0, O.bG)([sj.Ay], () => sj.Ay.supports(ra.O5.QOS));
        },
    }),
    r7 = (0, o.zD)(d.X.VOICE_SILENCE_WARNING_SETTING, {
        useTitle: () => g.intl.string(g.t["4rsOPQ"]),
        useSubtitle: () => g.intl.string(g.t.jtiiCw),
        useValue: function () {
            return (0, O.bG)([sj.Ay], () => sj.Ay.getEnableSilenceWarning());
        },
        setValue: function (e) {
            rg.A.setSilenceWarning(e);
        },
        usePredicate: function () {
            return ev.isPlatformEmbedded;
        },
    }),
    r6 = (0, o.bd)(d.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? g.intl.string(g.t.KHsSWK) : g.intl.string(g.t.PPDo5V);
        },
        useCollapsedSubtitle: () =>
            rZ(d.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
                limit: (0, O.bG)([sj.Ay], () => sj.Ay.isInputProfileCustom()) ? 3 : 2,
            }),
        buildLayout: () => [rq, r8, r5, r7, r2, r3, r0, r4, r9],
    }),
    oe = (0, o.zD)(d.X.VOICE_ECHO_CANCELLATION_SETTING, {
        useTitle: () => g.intl.string(g.t.iWTwu6),
        useValue: function () {
            return (0, O.bG)([sj.Ay], () => sj.Ay.getEchoCancellation());
        },
        setValue: function (e) {
            rg.A.setEchoCancellation(e, { page: q.liQ.USER_SETTINGS, section: q.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, O.bG)([sj.Ay, rB.A], () => {
                let e = sj.Ay.getInputDeviceId();
                return rB.A.hasEchoCancellation(e);
            });
        },
        usePredicate: function () {
            return (0, O.bG)([sj.Ay], () => sj.Ay.isInputProfileCustom());
        },
    });
var ot = n(205693),
    on = n(451988),
    oi = n(640940),
    ol = n(160671);
let os = (0, lS.Ld)();
function oa(e) {
    let { isSpeaking: t, className: n, id: i, ariaDescribedBy: l, ariaLabelledBy: s, disabled: a } = e;
    return (0, S.jsx)("div", {
        role: "meter",
        className: ew()(oi.$I, n),
        id: i,
        "aria-describedby": l,
        "aria-labelledby": s,
        "aria-valuenow": t && !a ? 100 : 0,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuetext": t && !a ? g.intl.string(g.t.haLKZ0) : g.intl.string(g.t.X2hJL7),
        children: (0, S.jsx)("div", { className: ew()(oi.Jx, oi.NU, { [oi.zY]: t && !a, [oi.r9]: a }) }),
    });
}
function or(e) {
    let { volume: t, id: n, ariaDescribedBy: i, ariaLabelledBy: l, disabled: s } = e,
        { threshold: a, autoThreshold: r } = (0, O.cf)([sj.Ay], () => ({
            threshold: sj.Ay.getModeOptions().threshold,
            autoThreshold: sj.Ay.getModeOptions().autoThreshold,
        })),
        o = (0, O.bG)([sj.Ay], () => sj.Ay.getMode());
    return (0, S.jsx)("section", {
        className: ew()(oi.Mo, oi.jW),
        id: n,
        "aria-describedby": i,
        "aria-labelledby": l,
        children: (0, S.jsx)(n4.A, {
            initialValue: a + 100,
            onValueRender: (e) => `${(-((100 - e) * 1)).toFixed(0)}dB`,
            onValueChange: (e) => {
                var t;
                return (t = -((100 - e) * 1)), void rg.A.setMode(o, { threshold: t, autoThreshold: r });
            },
            barStyles: { background: w.A.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: w.A.unsafe_rawColors.YELLOW_300.css },
            "aria-labelledby": os,
            disabled: s,
            children: (0, S.jsxs)("div", {
                className: ew()(oi.NU, oi.TL, oi.Jx, ol.bar),
                children: [
                    (0, S.jsx)("div", { className: ew()(oi.GS, oi.SH), style: { width: s ? 0 : t + 100 + "%" } }),
                    (0, S.jsx)("div", { className: "grow" }),
                ],
            }),
        }),
    });
}
let oo = (0, o.E2)(d.X.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useSearchTerms: () => [g.intl.string(g.t["sqUm+k"]), g.intl.string(g.t.I1Zuq0), g.intl.string(g.t.nuFtHH)],
    usePredicate: () => (0, O.bG)([sj.Ay], () => sj.Ay.isInputProfileCustom()),
    Component: function () {
        let { autoThreshold: e, disabled: t } = (0, O.cf)([sj.Ay], () => ({
                autoThreshold: sj.Ay.getModeOptions().autoThreshold,
                disabled: sj.Ay.getMode() !== ra.TB.VOICE_ACTIVITY,
            })),
            n = x.useCallback((e) => {
                let t = sj.Ay.getMode(),
                    { threshold: n } = sj.Ay.getModeOptions();
                rg.A.setMode(t, { autoThreshold: e, threshold: n });
            }, []),
            i = (0, O.bG)([sj.Ay], () => sj.Ay.supports(ra.O5.AUTOMATIC_VAD)),
            { volume: l, isSpeaking: s } = (function () {
                let [e, t] = x.useState(-100),
                    [n, i] = x.useState(!1);
                function l(e, n) {
                    t(e), i((n & ra.ME.VOICE) === ra.ME.VOICE);
                }
                return (
                    x.useEffect(() => {
                        let e = new on.Ep();
                        return (
                            e.start(1e3, () => {
                                sj.Ay.getMediaEngine().on(ot.bg.VoiceActivity, l), e.stop();
                            }),
                            () => {
                                sj.Ay.getMediaEngine().removeListener(ot.bg.VoiceActivity, l), e.stop();
                            }
                        );
                    }, []),
                    { volume: e, isSpeaking: n }
                );
            })(),
            a = (0, O.bG)([sj.Ay], () => sj.Ay.isEnabled()),
            r = x.useMemo(
                () =>
                    !a &&
                    (0, S.jsx)("div", {
                        className: oi.B4,
                        children: (0, S.jsx)(j.w, {
                            type: "warning",
                            children: g.intl.format(g.t["O13I+O"], { onEnableClick: () => rg.A.enable(!0) }),
                        }),
                    }),
                [a],
            ),
            o = x.useMemo(() => (e ? g.intl.string(g.t.JsbzjA) : g.intl.string(g.t.MLmyMY)), [e]),
            d = x.useId(),
            u = x.useId();
        return i
            ? (0, S.jsxs)("fieldset", {
                  "aria-describedby": u,
                  children: [
                      (0, S.jsx)(F.A, { tag: "legend", id: d, children: g.intl.string(g.t.GByLar) }),
                      (0, S.jsx)(F.A, { id: u, children: o }),
                      (0, S.jsxs)(R.B, {
                          direction: "vertical",
                          gap: 8,
                          children: [
                              (0, S.jsx)(L.d, {
                                  disabled: t,
                                  label: g.intl.string(g.t.lY6j47),
                                  description: o,
                                  checked: e,
                                  onChange: n,
                              }),
                              e
                                  ? (0, S.jsx)(oa, {
                                        isSpeaking: s,
                                        className: oi.UJ,
                                        ariaDescribedBy: u,
                                        ariaLabelledBy: d,
                                        disabled: t,
                                    })
                                  : (0, S.jsx)(or, { volume: l, ariaDescribedBy: u, ariaLabelledBy: d, disabled: t }),
                              r,
                          ],
                      }),
                  ],
              })
            : (0, S.jsxs)(R.B, {
                  direction: "vertical",
                  gap: 8,
                  children: [
                      (0, S.jsx)(lO.D, {
                          label: g.intl.string(g.t["sqUm+k"]),
                          description: o,
                          layout: "vertical",
                          children: (n) =>
                              e
                                  ? (0, S.jsx)(oa, {
                                        isSpeaking: s,
                                        className: oi.UJ,
                                        id: n.controlId,
                                        ariaDescribedBy: n.describedById,
                                        ariaLabelledBy: n.labelId,
                                        disabled: t,
                                    })
                                  : (0, S.jsx)(or, {
                                        volume: l,
                                        id: n.controlId,
                                        ariaDescribedBy: n.describedById,
                                        ariaLabelledBy: n.labelId,
                                        disabled: t,
                                    }),
                      }),
                      r,
                  ],
              });
    },
});
var od = n(366010);
let ou = n(993830),
    oc = n(413142),
    og = { page: q.liQ.USER_SETTINGS, section: q.JJy.SETTINGS_VOICE_AND_VIDEO };
function o_() {
    let e = (0, O.bG)([no.A], () => (0, od.q)(no.A.theme));
    return (0, S.jsx)("img", { src: e ? ou : oc, width: 48, height: 32, alt: "" });
}
let om = (0, o.E2)(d.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [g.intl.string(g.t.t8Qhib), g.intl.string(g.t.hmfkCi)],
    usePredicate: function () {
        return (0, O.bG)([sj.Ay], () => sj.Ay.isInputProfileCustom() && sj.Ay.isNoiseSuppressionSupported());
    },
    Component: function () {
        let e = x.useCallback((e) => {
                rg.A.setNoiseCancellation("KRISP" === e, og), rg.A.setNoiseSuppression("STANDARD" === e, og);
            }, []),
            {
                noiseCancellation: t,
                noiseSuppression: n,
                isNoiseSuppressionSupported: i,
                isNoiseCancellationSupported: l,
            } = (0, O.cf)([sj.Ay], () => ({
                noiseCancellation: sj.Ay.getNoiseCancellation(),
                noiseSuppression: sj.Ay.getNoiseSuppression(),
                isNoiseSuppressionSupported: sj.Ay.isNoiseSuppressionSupported(),
                isNoiseCancellationSupported: sj.Ay.isNoiseCancellationSupported(),
            })),
            s = x.useMemo(() => {
                let e = [];
                return (
                    l && e.push({ id: "krisp", label: g.intl.string(g.t.rdoNzt), value: "KRISP" }),
                    i && e.push({ id: "standard", label: g.intl.string(g.t.qXeYHw), value: "STANDARD" }),
                    e.push({ id: "disabled", label: g.intl.string(g.t.wkYAlz), value: "NONE" }),
                    e
                );
            }, [l, i]),
            a = l
                ? g.intl.format(g.t["1q5aTp"], { helpArticle: tr.A.getArticleURL(q.MVz.NOISE_SUPPRESSION) })
                : g.intl.string(g.t.OWKjw5);
        return (0, S.jsxs)(R.B, {
            direction: "vertical",
            gap: 0,
            children: [
                (0, S.jsx)(sT.l, {
                    label: g.intl.string(g.t.t8Qhib),
                    description: a,
                    layout: "horizontal",
                    value: t ? "KRISP" : n ? "STANDARD" : "NONE",
                    onSelectionChange: e,
                    options: s,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                l && (0, S.jsx)(o_, {}),
            ],
        });
    },
});
var oh = n(944993),
    oA = n(509381);
let op = !le.Av;
function oT() {
    return (0, O.bG)([sj.Ay], () => sj.Ay.getMode() === ra.TB.PUSH_TO_TALK);
}
let oE = (0, o.zD)(d.X.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function () {
        return le.Av ? g.intl.string(g.t.tG4Np5) : g.intl.string(g.t.JMyQin);
    },
    useSubtitle: function () {
        let e = (0, O.bG)([sj.Ay], () => sj.Ay.getMode());
        return x.useMemo(() => {
            if (!le.Av && e === ra.TB.PUSH_TO_TALK)
                return g.intl.format(g.t["VHI4+Y"], { onDownloadClick: () => (0, oh._)("Help Text PTT") });
        }, [e]);
    },
    usePredicate: function () {
        return (0, O.bG)([sj.Ay], () => sj.Ay.getActiveInputProfile() !== oA.m.STUDIO);
    },
    useValue: function () {
        return (0, O.bG)([sj.Ay], () => sj.Ay.getMode() === ra.TB.PUSH_TO_TALK);
    },
    setValue: function (e) {
        var t, i;
        (t = e ? ra.TB.PUSH_TO_TALK : ra.TB.VOICE_ACTIVITY),
            (i = [eU.A.USER_SETTINGS_VOICE_AND_VIDEO]),
            t === ra.TB.PUSH_TO_TALK &&
                op &&
                (0, b.openModalLazy)(async () => {
                    let { default: e } = await n.e("10919").then(n.bind(n, 556506));
                    return (t) =>
                        (0, S.jsx)(e, {
                            title: g.intl.string(g.t.Kdt0Gb),
                            confirmText: g.intl.string(g.t["1WjMbC"]),
                            cancelText: g.intl.string(g.t.BddRzS),
                            onConfirm: () => (0, oh._)("PTT Limited Modal"),
                            body: g.intl.string(g.t.NIozvt),
                            ...t,
                        });
                }),
            rg.A.setMode(t, void 0, void 0, { analyticsLocations: i });
    },
    useSearchTerms: () => [g.intl.string(g.t["pS+K2L"]), g.intl.string(g.t.nuFtHH)],
});
var oS = n(285802);
let ox = (0, o.E2)(d.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t["pS+K2L"]), g.intl.string(g.t.nuFtHH)],
        usePredicate: oT,
        Component: function () {
            let e = (0, O.bG)([sj.Ay], () => {
                    let { shortcut: e } = sj.Ay.getModeOptions();
                    return e;
                }),
                t = g.intl.format(g.t.HVvn5T, { onClick: () => (0, ey.openUserSettings)(d.X.KEYBINDS_PANEL) });
            return (0, S.jsx)(lO.D, {
                label: g.intl.string(g.t["o+BJQR"]),
                description: t,
                layout: "horizontal-responsive",
                children: (0, S.jsx)("div", {
                    className: oS.e,
                    children: (0, S.jsx)(tR.A, {
                        defaultValue: e,
                        onChange: (e) => rg.A.setMode(q.TBI.PUSH_TO_TALK, { shortcut: e }),
                    }),
                }),
            });
        },
    }),
    of = (0, o.sN)(d.X.VOICE_PUSH_TO_TALK_RELEASE_DELAY_SETTING, {
        useTitle: () => g.intl.string(g.t.GCNMM8),
        useSearchTerms: () => [g.intl.string(g.t["pS+K2L"]), g.intl.string(g.t.nuFtHH)],
        setValue: function (e) {
            rg.A.setMode(q.TBI.PUSH_TO_TALK, { delay: e });
        },
        minValue: 0,
        maxValue: q.IjB,
        getInitialValue: function () {
            let { delay: e } = sj.Ay.getModeOptions();
            return e;
        },
        onValueRender: function (e) {
            return e >= 1e3 ? ((e /= 1e3), `${e.toFixed(2)}s`) : `${e.toFixed(0)}\u00A0ms`;
        },
        usePredicate: oT,
    }),
    ob = (0, o.Qx)(d.X.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => g.intl.string(g.t.LM3U3k),
        usePredicate: function () {
            let { enabledInputProfiles: e } = (0, rF._)({ location: "SettingsRendererConfig" });
            return e.length > 0;
        },
        useSearchTerms: () => [g.intl.string(g.t.nuFtHH), g.intl.string(g.t.VZPR0R), g.intl.string(g.t.cjPbpT)],
        useValue: function () {
            return (0, O.bG)([sj.Ay], () => sj.Ay.getActiveInputProfile() ?? oA.m.CUSTOM);
        },
        setValue: function (e) {
            let t = [eU.A.USER_SETTINGS_VOICE_AND_VIDEO];
            rg.A.setActiveInputProfile(e, { analyticsLocations: t });
        },
        useOptions: function () {
            let { enabledInputProfiles: e } = (0, rF.d)({ location: "InputProfileCategory" });
            return [
                { value: oA.m.VOICE_ISOLATION, name: g.intl.string(g.t.cjPbpT), desc: g.intl.string(g.t.CzhvnE) },
                { value: oA.m.STUDIO, name: g.intl.string(g.t.VZPR0R), desc: g.intl.string(g.t.ZaJksS) },
                { value: oA.m.CUSTOM, name: g.intl.string(g.t["N/PQjv"]), desc: g.intl.string(g.t.SnBmuY) },
            ].filter((t) => {
                let { value: n } = t;
                return e.includes(n);
            });
        },
    }),
    oN = (0, o.zZ)(d.X.VOICE_INPUT_PROFILE_CATEGORY, {
        useInlineNotice: function () {
            let e = (0, O.bG)([rB.A, sj.Ay], () => {
                let e = sj.Ay.getInputDeviceId();
                return (
                    (rB.A.hasEchoCancellation(e) || rB.A.hasNoiseSuppression(e) || rB.A.hasAutomaticGainControl(e)) &&
                    sj.Ay.isInputProfileCustom()
                );
            });
            return x.useMemo(() => {
                if (e)
                    return {
                        type: ef.lT.INLINE_NOTICE,
                        noticeType: "info",
                        useText: () => g.intl.string(g.t["/Whuzi"]),
                    };
            }, [e]);
        },
        buildLayout: () => [ob, oo, om, oe, oE, ox, of, r6],
    });
var oC = n(403581),
    oI = n(983851),
    ov = n(687021),
    oy = n(128450),
    oj = n(796774),
    oO = n(209932),
    oR = n(536432),
    oL = n(984813),
    oD = n(22231),
    oG = n(927578),
    oP = n(792348),
    oM = n(674168),
    oU = n(126970),
    ok = n(805945),
    oV = n(902460);
function ow(e) {
    let { onSelect: t } = e,
        [n, i] = x.useState(!1),
        l = (0, O.bG)([t5.default], () => t5.default.getCurrentUser()),
        s = oG.Ay.canUseCustomCallSounds(l),
        a = x.useRef(null);
    function r(e) {
        s && (i(!1), t?.(e));
    }
    return (0, S.jsx)(G.Y, {
        targetElementRef: a,
        shouldShow: n,
        position: "left",
        onRequestClose: () => i(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, S.jsx)(ny.l, {
                children: (0, S.jsx)(oU.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: r,
                    gridNotice: s ? null : (0, S.jsx)(oM.m, {}),
                    analyticsSource: "call sounds edit setting",
                }),
            });
        },
        children: (e) =>
            (0, S.jsx)(ok.dT, {
                ...e,
                ref: a,
                onClick: () => {
                    i(!n);
                },
                text: g.intl.string(g.t.uOe0Az),
                children: (0, S.jsx)(oD.R, { size: "md", color: "currentColor", className: oV.Wo }),
            }),
    });
}
function oB(e) {
    let { sound: t } = e,
        { previewSound: n } = (0, oP.A)(t, null),
        i =
            0 === (0, oR.wH)()
                ? g.intl.string(g.t.OASXjt)
                : g.intl.formatToPlainString(g.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name });
    return (0, S.jsx)(ok.dT, {
        onClick: n,
        text: i,
        children: (0, S.jsx)(oI.H, { size: "md", color: "currentColor", className: oV.wg }),
    });
}
function oF(e) {
    let { sound: t, isGlobal: n, onSelect: i } = e,
        l = null != t,
        s = t?.emojiId,
        a = t?.emojiName,
        r = l && (null != a || null != s);
    return (0, S.jsxs)("div", {
        className: oV.D6,
        children: [
            (0, S.jsxs)("div", {
                className: oV.kL,
                children: [
                    r && (0, S.jsx)(lo.A, { emojiId: s, emojiName: a, className: oV.Zg }),
                    (0, S.jsx)(k.E, {
                        variant: "text-md/normal",
                        color: "text-strong",
                        className: oV.dj,
                        children:
                            null == t
                                ? g.intl.string(g.t.PoWNfe)
                                : n
                                  ? g.intl.format(g.t.B6HU6O, {
                                        soundName: t.name,
                                        subtextHook: (e) =>
                                            (0, S.jsx)(k.E, {
                                                variant: "text-xs/medium",
                                                color: "text-default",
                                                tag: "span",
                                                children: e,
                                            }),
                                    })
                                  : t.name,
                    }),
                    l
                        ? (0, S.jsx)(oB, { sound: t })
                        : (0, S.jsx)(oI.H, { size: "md", color: "currentColor", className: oV.Gk }),
                ],
            }),
            (0, S.jsxs)("div", {
                className: oV.kL,
                children: [
                    (0, S.jsx)(ow, { onSelect: i }),
                    l &&
                        !n &&
                        (0, S.jsx)(ok.dT, {
                            onClick: () => i(null),
                            text: g.intl.string(g.t.jmtcGA),
                            children: (0, S.jsx)(sS.u, {
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
var oz = n(617617);
n(980504);
var oX = n(811249);
function oY(e) {
    return (0, O.bG)([oO.A], () => {
        if (null == e) return null;
        let { guildId: t, soundId: n } = e;
        return oO.A.getSound("0" === t ? "0" : t, n);
    });
}
function oH(e) {
    let { guildId: t } = e,
        n = (0, O.bG)([oz.A], () => oz.A.settings.guilds?.guilds?.[t]?.joinSound),
        i = oY(n);
    if (null == n || null == i) return null;
    let { emojiId: l, emojiName: s } = i,
        a = null != l || null != s;
    return (0, S.jsxs)("div", {
        className: oX.Io,
        children: [
            a
                ? (0, S.jsx)(lo.A, { emojiId: l, emojiName: s, className: oX.nW })
                : (0, S.jsx)(oI.H, { size: "md", color: "currentColor", className: oX.nW }),
            (0, S.jsx)(k.E, { className: oX.dK, variant: "text-xs/medium", children: i.name }),
        ],
    });
}
let oK = (0, o.E2)(d.X.ENTRANCE_SOUNDS_SETTING, {
    useSearchTerms: () => [g.intl.string(g.t.nzUc3B)],
    Component: function () {
        let { analyticsLocations: e } = (0, iM.Ay)(),
            [t, n] = x.useState("0"),
            i = (0, oL.mz)(t),
            l = oY(i),
            s = i?.type === oL.PP.GLOBAL,
            a = (0, O.bG)([oO.A], () => oO.A.hasFetchedAllSounds()) && null != i && null == l;
        x.useEffect(() => {
            a && (0, oR.ND)({ location: e });
        }, [a, e]),
            x.useEffect(() => {
                (0, oj.E7)();
            }, []);
        let r = x.useCallback((e, t) => {
            let { inDropdown: n } = t;
            return null == e ? null : n ? (0, S.jsx)(oH, { guildId: e.value }) : null;
        }, []);
        return (0, S.jsxs)(na.n, {
            label: g.intl.string(g.t.nzUc3B),
            description: g.intl.format(g.t.u9RWmv, { helpdeskArticle: tr.A.getArticleURL(q.MVz.SOUNDBOARD) }),
            children: [
                (0, S.jsx)(ov.A, {
                    guildId: t,
                    className: oX.Dt,
                    globalOption: { label: g.intl.string(g.t["CpEUP/"]), value: "0" },
                    onChange: (e) => {
                        n(null == e ? "0" : e.id);
                    },
                    renderOptionSuffix: r,
                    hideDivider: !0,
                }),
                (0, S.jsxs)(oy.A, {
                    title: g.intl.format(g.t.I2TsYN, {
                        nitroWheelHook: () => (0, S.jsx)(oC.t, { size: "md", color: "currentColor", className: oX.ax }),
                    }),
                    children: [
                        (0, S.jsx)(oF, {
                            sound: l,
                            isGlobal: s,
                            onSelect: (n) => {
                                null == n ? (0, oR.Dv)(t, e) : (0, oR.un)(t, n, e);
                            },
                        }),
                        a &&
                            (0, S.jsx)(ta.p, {
                                className: oX.lm,
                                messageType: ta.Y.WARNING,
                                children: g.intl.string(g.t.WkPsFR),
                            }),
                    ],
                }),
            ],
        });
    },
});
var oW = n(824744);
let oZ = (0, o.sN)(d.X.SOUNDBOARD_VOLUME_SETTING, {
    useTitle: () => g.intl.string(g.t.kbFsAD),
    useSubtitle: () => g.intl.format(g.t.BPbGq7, { helpCenterArticle: tr.A.getArticleURL(q.MVz.SOUNDBOARD) }),
    setValue: function (e) {
        let t = [eU.A.USER_SETTINGS_VOICE_AND_VIDEO],
            n = (0, oW.w)(e);
        (0, oj.iy)(n, t);
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
var oq = n(864145);
let oQ = (0, o.sN)(d.X.SOUNDMOJI_VOLUME_SETTING, {
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
            return (0, oq.X)({ location: "SoundmojiVolumeSetting" });
        },
    }),
    oJ = (0, o.zZ)(d.X.SOUNDBOARD_CATEGORY, {
        useTitle: () => g.intl.string(g.t.ABjMWI),
        buildLayout: () => [oZ, oQ, oK],
    });
var o$ = n(803224),
    o0 = n(552122);
let o1 = (0, o.E2)(d.X.SOUNDS_HOLIDAY_NOTICE, {
        useSearchTerms: () => [g.intl.string(g.t.fgSHf8)],
        usePredicate: () => null != o0.A.useHolidaySoundpack(),
        Component: () =>
            (0, S.jsx)(k.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: g.intl.format(g.t.Eup6Wv, {
                    onClick: () => (0, ey.openUserSettings)(d.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                }),
            }),
    }),
    o2 = (0, o.AK)(d.X.VOICE_AND_VIDEO_TO_NOTIFICATION_SOUNDS_NAVIGATOR, {
        useSubtitle: () => g.intl.string(g.t.eyGEE4),
        useSearchTerms: () => [g.intl.string(g.t.eyGEE4)],
        destinationKey: d.X.NOTIFICATIONS_SOUNDS_CATEGORY,
    }),
    o5 = (0, o.gN)(d.X.VOICE_AND_VIDEO_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [o2] });
var o3 = n(264686);
let o8 = (0, iS.D)(() => ({ currentPlayingSound: null }));
function o4() {
    let e = o8.getField("currentPlayingSound");
    e?.stop(), o8.setState({ currentPlayingSound: null });
}
function o9(e) {
    let t = o8.getField("currentPlayingSound");
    t?.stop();
    let n = (0, ah.Ak)(e);
    o8.setState({ currentPlayingSound: n });
}
function o7(e) {
    return (0, o.zD)(`${d.X.SOUNDS_LIST_ITEM_PREFIX}${e.sound}`, {
        useTitle: e.useTitle,
        useSubtitle: () => g.intl.format(g.t.OOiGCM, { onClick: () => o9(e.sound) }),
        useValue: () => {
            let t = (0, O.bG)([o$.A], () => o$.A.isSoundDisabled(e.sound)),
                n = e.useDisabled?.();
            return !t && !n;
        },
        setValue: (t) => {
            let n = o$.A.getDisabledSounds().filter((t) => t !== e.sound);
            t || n.push(e.sound), o3.default.setDisabledSounds(n);
        },
        useDisabled: () => {
            let t = e.useDisabled?.(),
                n = (0, O.bG)([o$.A], () => o$.A.getDisableAllSounds());
            return t || n;
        },
        useDisabledMessage: e.useDisabledMessage,
    });
}
let o6 = [
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
    de = (0, o.D1)(d.X.VOICE_AND_VIDEO_SOUNDS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (e, t) =>
            e
                ? g.intl.formatToPlainString(g.t["0JYT98"], { count: t })
                : g.intl.formatToPlainString(g.t.ji1uNt, { count: t }),
        useCollapsedSubtitle: () => rZ(d.X.VOICE_AND_VIDEO_SOUNDS_LIST, { limit: 3 }),
        initialize: function () {
            return () => {
                o4();
            };
        },
        buildLayout: () => o6.map((e) => o7(e)),
    }),
    dt = (0, o.zZ)(d.X.SOUNDS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.MKWyKc),
        useInlineNotice: function () {
            let e = (0, O.bG)([o$.A], () => o$.A.getDisableAllSounds());
            return x.useMemo(() => {
                if (e)
                    return {
                        type: ef.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        useText: () =>
                            g.intl.format(g.t.fRvixS, {
                                onClick: () => (0, ey.openUserSettings)(d.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                            }),
                    };
            }, [e]);
        },
        buildLayout: () => [de, o1, o5],
    }),
    dn = (0, o.zD)(d.X.STREAMING_SHOW_STREAM_PREVIEWS, {
        useTitle: () => g.intl.string(g.t.e3Zz3F),
        useSubtitle: () => g.intl.string(g.t.RztTjP),
        useValue: function () {
            return !c.uh.useSetting();
        },
        setValue: function (e) {
            (0, rP.A)("stream_previews_disabled", !e, c.uh.getSetting(), [eU.A.USER_SETTINGS_VOICE_AND_VIDEO]),
                c.uh.updateSetting(!e);
        },
    }),
    di = (0, o.zD)(d.X.STREAMING_ADVANCED_SCREENSHARE, {
        useTitle: () => g.intl.string(g.t.GmWk2E),
        useSearchTerms: () => [g.intl.string(g.t["Fj/xn1"])],
        useSubtitle: () => g.intl.string(g.t["Fj/xn1"]),
        useValue: function () {
            return (0, O.bG)([sj.Ay], () => sj.Ay.getVideoHook());
        },
        setValue: rg.A.setVideoHook,
        usePredicate: function () {
            return (0, O.bG)([sj.Ay], () => sj.Ay.supportsVideoHook());
        },
    }),
    dl = (0, o.zD)(d.X.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
        useTitle: () => g.intl.string(g.t["4I0qzZ"]),
        useValue: function () {
            return (0, O.bG)([sj.Ay], () => sj.Ay.getExperimentalSoundshare());
        },
        setValue: rg.A.setExperimentalSoundshare,
        usePredicate: function () {
            return (0, O.bG)([sj.Ay], () => {
                let e = sj.Ay.supportsExperimentalSoundshare(),
                    t = sj.Ay.supportsHookSoundshare();
                return e && t;
            });
        },
    }),
    ds = (0, o.zD)(d.X.STREAMING_STREAM_ATTENUATION, {
        useTitle: () => g.intl.string(g.t["/jwMtn"]),
        useSubtitle: () => g.intl.string(g.t.zlA23F),
        useValue: function () {
            return (0, O.bG)([sj.Ay], () => sj.Ay.getSidechainCompression());
        },
        setValue: function (e) {
            let t = [eU.A.USER_SETTINGS_VOICE_AND_VIDEO];
            rg.A.setSidechainCompression(e, { analyticsLocations: t });
        },
        usePredicate: function () {
            return sj.Ay.supports(ra.O5.SIDECHAIN_COMPRESSION);
        },
    }),
    da = (0, o.sN)(d.X.STREAMING_STREAM_ATTENUATION_STRENGTH, {
        useTitle: () => g.intl.string(g.t.fhEzfj),
        setValue: function (e) {
            let t = [eU.A.USER_SETTINGS_VOICE_AND_VIDEO];
            rg.A.setSidechainCompressionStrength(e, { analyticsLocations: t });
        },
        minValue: 1,
        maxValue: 100,
        getInitialValue: sj.Ay.getSidechainCompressionStrength,
        usePredicate: function () {
            return sj.Ay.supports(ra.O5.SIDECHAIN_COMPRESSION);
        },
    }),
    dr = (0, o.zD)(d.X.STREAMING_OS_MENU_SCREEN_CAPTURE, {
        useTitle: () => g.intl.string(g.t.lt8rRx),
        useSubtitle: () => g.intl.string(g.t.ie1mgY),
        useValue: function () {
            return (0, O.bG)([sj.Ay], () => sj.Ay.getUseSystemScreensharePicker());
        },
        setValue: function (e) {
            (0, le.cX)() && e
                ? (0, lt.A)({
                      title: g.intl.string(g.t["9jf31O"]),
                      subtitle: g.intl.string(g.t.uBd6JW),
                      variant: "primary",
                      onConfirm: () => {
                          rg.A.setUseSystemScreensharePicker(e), l5.A.app.relaunch();
                      },
                      confirmText: g.intl.string(g.t.BddRzS),
                  })
                : rg.A.setUseSystemScreensharePicker(e);
        },
        usePredicate: function () {
            return (0, O.bG)([sj.Ay], () => sj.Ay.supportsSystemScreensharePicker() && (0, le.cX)());
        },
    }),
    dd = (0, o.bd)(d.X.STREAMING_ADVANCED_ACCORDION, {
        useTitle: (e) => (e ? g.intl.string(g.t.qrMyvm) : g.intl.string(g.t.LEtTNl)),
        useCollapsedSubtitle: () => rZ(d.X.STREAMING_ADVANCED_ACCORDION),
        buildLayout: () => [ds, da, dr, dl, di],
    }),
    du = (0, o.zZ)(d.X.STREAMING_CATEGORY, { useTitle: () => g.intl.string(g.t.KDdjou), buildLayout: () => [dn, dd] }),
    dc = (0, o.E2)(d.X.VOICE_MICROPHONE_INPUT_SELECT, {
        useSearchTerms: () => [g.intl.string(g.t.hHMYbb), g.intl.string(g.t.nuFtHH)],
        Component: function () {
            return (0, S.jsx)(rn.U, {
                label: g.intl.string(g.t.UTM8VP),
                deviceType: ra.oh.AUDIO_INPUT,
                location: "UserSettingsVoiceVideo",
                hideDeviceTypeIcon: !0,
            });
        },
    }),
    dg = (0, o.E2)(d.X.VOICE_SPEAKER_OUTPUT_SELECT, {
        useSearchTerms: () => [g.intl.string(g.t.dl18zb), g.intl.string(g.t["3182VD"]), g.intl.string(g.t["DGq/PR"])],
        Component: function () {
            return (0, S.jsx)(rn.U, {
                label: g.intl.string(g.t.xuYQ0n),
                deviceType: ra.oh.AUDIO_OUTPUT,
                location: "UserSettingsDevices",
                hideDeviceTypeIcon: !0,
            });
        },
    }),
    d_ = (0, o.zC)(d.X.VOICE_INPUT_OUTPUT_DEVICE_SPLIT, { buildLayout: () => [dc, dg] }),
    dm = (0, o.sN)(d.X.VOICE_INPUT_VOLUME_SETTING, {
        useTitle: () => g.intl.string(g.t.Rtsr6w),
        useSearchTerms: () => [g.intl.string(g.t.eATD2B), g.intl.string(g.t["3182VD"]), g.intl.string(g.t["DGq/PR"])],
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = sj.Ay.getInputVolume();
            return (0, oW.M)(e);
        },
        asValueChanges: function (e) {
            let t = [eU.A.USER_SETTINGS_VOICE_AND_VIDEO],
                n = (0, oW.w)(e);
            rg.A.setInputVolume(n, { analyticsLocations: t });
        },
    }),
    dh = (0, o.sN)(d.X.VOICE_OUTPUT_VOLUME_SETTING, {
        useTitle: () => g.intl.string(g.t.aUJ062),
        useSearchTerms: () => [g.intl.string(g.t.eATD2B), g.intl.string(g.t["3182VD"]), g.intl.string(g.t["DGq/PR"])],
        minValue: 0,
        maxValue: 200,
        getInitialValue: function () {
            let e = sj.Ay.getOutputVolume();
            return (0, oW.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        asValueChanges: function (e) {
            let t = [eU.A.USER_SETTINGS_VOICE_AND_VIDEO],
                n = (0, oW.w)(e);
            rg.A.setOutputVolume(n, { analyticsLocations: t });
        },
    }),
    dA = (0, o.zC)(d.X.VOICE_INPUT_OUTPUT_VOLUME_SPLIT, { buildLayout: () => [dm, dh] });
var dp = n(702841),
    dT = n(349288),
    dE = n(152567),
    dS = n(644426);
let dx = `${tr.A.getArticleURL(q.MVz.VOICE_VIDEO_TROUBLESHOOTING)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm`,
    df = (0, o.E2)(d.X.VOICE_MICROPHONE_TEST_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t.nuFtHH)],
        usePredicate: function () {
            return (0, dp.bG)([sj.Ay], () => sj.Ay.supports(ra.O5.LOOPBACK));
        },
        Component: function () {
            return (0, dp.bG)([sj.Ay], () => sj.Ay.supports(ra.O5.LOOPBACK))
                ? (0, S.jsx)(dE.A, {
                      size: "md",
                      notchBackground: dE.V.GRAY,
                      captionVoice: g.intl.string(g.t.bp3JOV),
                      captionNoVoice: (0, S.jsxs)(S.Fragment, {
                          children: [
                              (0, S.jsx)(k.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-default",
                                  children: g.intl.string(g.t.bgn75v),
                              }),
                              g.intl.string(g.t["MA+OZh"]),
                              (0, S.jsx)(dT.Anchor, {
                                  className: dS.X,
                                  href: tr.A.getArticleURL(q.MVz.NO_INPUT_DETECTED),
                                  children: g.intl.string(g.t.RYKKox),
                              }),
                          ],
                      }),
                      helpText: g.intl.format(g.t["V+B3FH"], { guideURL: dx }),
                      buttonTest: g.intl.string(g.t.gyljWE),
                      buttonStop: g.intl.string(g.t.I6OnJ3),
                      buttonVariant: "primary",
                      location: { page: q.liQ.USER_SETTINGS, section: q.JJy.SETTINGS_VOICE_AND_VIDEO },
                  })
                : null;
        },
    }),
    db = ev.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];
function dN(e) {
    let { inputAndOutputAreBluetooth: t, canPromptSystemServiceInstallForVoice: n } = e;
    return (0, S.jsxs)(R.B, {
        children: [
            n && (0, S.jsx)(sD, { sourcePage: "voice" }),
            t && (0, S.jsx)(li.A, { look: li.k.WARNING, children: g.intl.string(g.t.Ioz3gx) }),
        ],
    });
}
let dC = (0, o.zZ)(d.X.VOICE_CATEGORY, {
        useTitle: () => g.intl.string(g.t.K3lovD),
        useInlineNotice: function () {
            let e = sL("voice"),
                t = (0, ri.x5)(ra.oh.AUDIO_INPUT),
                n = (0, ri.x5)(ra.oh.AUDIO_OUTPUT),
                i = x.useMemo(() => {
                    let e = db.some((e) => t?.hardwareId?.startsWith(e)),
                        i = db.some((e) => n?.hardwareId?.startsWith(e));
                    return e && i && t?.containerId != null && t.containerId === n?.containerId;
                }, [t, n]);
            return x.useMemo(
                () =>
                    e.canPrompt || i
                        ? {
                              type: ef.lT.STRONGLY_DISCOURAGED_CUSTOM,
                              notice: () =>
                                  (0, S.jsx)(dN, {
                                      inputAndOutputAreBluetooth: i,
                                      canPromptSystemServiceInstallForVoice: e.canPrompt,
                                  }),
                          }
                        : null,
                [e.canPrompt, i],
            );
        },
        buildLayout: () => [d_, dA, df],
    }),
    dI = (0, o.t_)(d.X.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => g.intl.string(g.t.B1fFpf),
        buildLayout: () => [dC, oN, rc, du, dt, oJ, rw],
    }),
    dv = (0, o.i4)(d.X.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.B1fFpf),
        usePredicate: () => sj.Ay.isSupported(),
        icon: a2.c,
        useMenu: a5.A,
        buildLayout: () => [dI],
    }),
    dy = (0, o.zD)(d.X.OS_START_MINIMIZED, {
        useTitle: () => g.intl.string(g.t.GfBL83),
        useSubtitle: () => g.intl.string(g.t.XGyhhc),
        usePredicate: () => (0, le.uF)(),
        useValue: () => an.useState((e) => !!e.openOnStartup && e.startMinimized),
        setValue: function (e) {
            an.setState({ startMinimized: e }), ln.Ay.send("TOGGLE_START_MINIMIZED", e);
        },
        useDisabled: () => !an.useState((e) => e.openOnStartup),
        initialize: () => {
            ln.Ay.getSetting("START_MINIMIZED", !1).then((e) => an.setState({ startMinimized: e }));
        },
    }),
    dj = (0, o.zZ)(d.X.WINDOWS_CATEGORY, {
        buildLayout: () => [al, dy, as, ar],
        initialize: () => {
            ai();
        },
    }),
    dO = (0, o.t_)(d.X.WINDOWS_PANEL, { useTitle: () => g.intl.string(g.t.ZkDZov), buildLayout: () => [dj] }),
    dR = (0, o.i4)(d.X.WINDOWS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.ZkDZov),
        icon: e2.k,
        usePredicate: () => ev.isPlatformEmbedded && (0, ev.isWindows)(),
        buildLayout: () => [dO],
    }),
    dL = (0, o.WI)(d.X.APP_SECTION, {
        useTitle: () => g.intl.string(g.t.f2n1TP),
        buildLayout: function () {
            return [dv, sA, i1, a1, s9, at, dR, au].filter(t3.Vq);
        },
    });
var dD = n(360669),
    dG = n(974544),
    dP = n(194261),
    dM = n(289873),
    dU = n(465323),
    dk = n(391048),
    dV = n(323082),
    dw = n(99696),
    dB = n(202613),
    dF = n(580630),
    dz = n(83617),
    dX = n(935208),
    dY = n(607399),
    dH = n(150934),
    dK = n(256006),
    dW = n(615405),
    dZ = n(198970),
    dq = n(71532);
let dQ = /[^0-9/]/g,
    dJ = /[^0-9]/g;
class d$ extends x.PureComponent {
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
        let n,
            i,
            l,
            s,
            { value: a, onChange: r } = this.props,
            o = this._inputRef;
        if (e === a || null == o || null == a) return;
        let d =
                ((i = (n = e.replace(dQ, "").split("/"))[0]),
                (l = n[1]),
                (s = []),
                parseInt(i, 10) > 12 && (i = i.substring(0, 1)),
                s.push(i),
                (parseInt(i, 10) > 1 || 2 === i.length || (null != l && "" !== l)) && s.push("/"),
                null != l && "" !== l && parseInt(l, 10) > 99 && (l = (l + "").substring(0, 2)),
                s.push(l),
                s.join("")),
            u = o.selectionStart;
        d === a && d.length <= 3 && a.includes("/") && !e.includes("/")
            ? (d = d.replace(dJ, ""))
            : d === a && e.includes("/") && !a.includes("/") && (d += "/"),
            d.length > e.length && (u += d.length - e.length),
            (this.selectionStart = u),
            null != r && r(d, t);
    };
    render() {
        return (0, S.jsx)(sP.k, {
            ...this.props,
            inputMode: "numeric",
            onChange: this.handleChange,
            inputRef: this.setRef,
        });
    }
}
var d0 = n(832208),
    d1 = n(536439);
let d2 = [
        {
            fields: [
                {
                    expirationDate: {
                        name: "expirationDate",
                        id: (0, lS.Ld)(),
                        title: () => g.intl.string(g.t["CeBa/4"]),
                        autoComplete: "cc-exp",
                        placeholder: () => g.intl.string(g.t.xeEWQ6),
                        pattern: "\\d*",
                        getClassNameForLayout: () => d1.ep,
                        renderInput: (e) => (0, S.jsx)(d$, { ...e }),
                    },
                }.expirationDate,
            ],
        },
    ],
    d5 = function (e) {
        let { onCardInfoChange: t, className: n, expirationDate: i, error: l } = e,
            [s, a] = x.useState(!1),
            [r, o] = x.useState(null),
            [d, u] = x.useState(i);
        return (
            x.useEffect(() => {
                t({ expirationDate: d }, null === r);
            }, [d, t, r]),
            (0, S.jsx)(d0.A, {
                className: n,
                form: d2,
                values: { expirationDate: d },
                errors: null != r ? { expirationDate: r } : {},
                formError: l,
                onFieldChange: (e) => {
                    s || "" === e || a(!0),
                        (s && "" === e) || !(0, dq.So)(e) ? o(g.intl.string(g.t["9/zZdl"])) : o(null),
                        u(e);
                },
            })
        );
    };
var d3 = n(219887),
    d8 = n(276589);
let d4 = "isDefault";
class d9 extends x.PureComponent {
    static defaultProps = { onDelete: () => {}, onSubmit: () => {}, onCancel: () => {} };
    constructor(e) {
        super(e);
        const { paymentSource: t, isDefault: n } = e,
            i = t.billingAddress;
        this.state = {
            billingAddress: {
                name: i.name ?? "",
                line1: i.line1 ?? "",
                line2: i.line2 ?? "",
                country: i.country ?? "",
                state: i.state ?? "",
                city: i.city ?? "",
                postalCode: i.postalCode ?? "",
            },
            expiresMonth: t instanceof dB.YS ? t.expiresMonth : void 0,
            expiresYear: t instanceof dB.YS ? t.expiresYear : void 0,
            billingAddressValid: !1,
            isDefault: n,
            expirationValid: !0,
            dirtyFields: {},
        };
    }
    componentWillUnmount() {
        i3.h.wait(() => {
            (0, dV.ey)(), (0, dV.tc)();
        });
    }
    handleSubmit = (e) => {
        if ((e.preventDefault(), e.stopPropagation(), 0 === Object.values(this.state.dirtyFields).filter(t3.Vq).length))
            this.props.onCancel();
        else {
            let { billingAddress: e, isDefault: t, expiresMonth: n, expiresYear: i } = this.state;
            this.props.onSubmit(this.props.paymentSource.id, {
                billingAddress: e,
                expiresMonth: n,
                expiresYear: i,
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
    handleAddressUpdate = (e, t, n) => {
        this.setState({
            billingAddress: e,
            billingAddressValid: t,
            dirtyFields: { ...this.state.dirtyFields, billingAddress: n },
        });
    };
    handleExpirationDateUpdate = (e, t) => {
        let { expirationDate: n } = e;
        if ((this.setState({ expirationValid: t }), null == n || "" === n)) return;
        let [i, l] = n.split("/");
        this.handleFieldChange(Number(i), "expiresMonth"),
            this.handleFieldChange(Number(`${new Date().getFullYear().toString().slice(0, 2)}${l}`), "expiresYear");
    };
    handleFieldChange = (e, t) => {
        null != t && this.setState({ [t]: e, dirtyFields: { ...this.state.dirtyFields, [t]: !0 } });
    };
    renderError() {
        let { updateError: e, removeError: t } = this.props;
        return null == e || e.hasCardError() || e.hasAddressError()
            ? null != t
                ? (0, S.jsx)("div", {
                      className: d8.zc,
                      children: (0, S.jsx)(j.w, { type: "critical", children: t.message }),
                  })
                : null
            : (0, S.jsx)("div", {
                  className: d8.zc,
                  children: (0, S.jsx)(j.w, { type: "critical", children: e.message }),
              });
    }
    renderBillingAddressSection() {
        let { billingAddress: e } = this.state,
            { updateError: t, paymentSource: n } = this.props,
            i = (0, dK.g)(n);
        return (0, S.jsxs)("div", {
            className: d8.yV,
            children: [
                (0, S.jsx)(k.E, {
                    className: d8.bV,
                    variant: "text-sm/normal",
                    children: g.intl.string(g.t["50Auo2"]),
                }),
                (0, S.jsx)(dZ.Ay, {
                    ...e,
                    mode: dZ.Ay.Modes.EDIT,
                    layout: i,
                    onBillingAddressChange: this.handleAddressUpdate,
                    error: t,
                }),
            ],
        });
    }
    renderCardExpirationSection() {
        let { expiresMonth: e, expiresYear: t } = this.state;
        if (null == e || null == t) return null;
        let n = `${e.toString().padStart(2, "0")}/${t.toString().padStart(2, "0").slice(-2)}`;
        return (0, S.jsxs)("div", {
            className: d8.yV,
            children: [
                (0, S.jsx)(k.E, { className: d8.bV, variant: "text-sm/normal", children: g.intl.string(g.t.Fo2YP7) }),
                (0, S.jsx)(d5, {
                    expirationDate: n,
                    onCardInfoChange: this.handleExpirationDateUpdate,
                    error: this.props.updateError,
                }),
            ],
        });
    }
    renderActions() {
        let { submitting: e, removing: t, isForSubscription: n } = this.props,
            { billingAddressValid: i, expirationValid: l } = this.state;
        return (0, S.jsx)("div", {
            className: d8.AU,
            children: (0, S.jsxs)(R.B, {
                direction: "horizontal",
                justify: "space-between",
                children: [
                    (0, S.jsx)(rT.e, {
                        children: (0, S.jsxs)("div", {
                            className: d8.lH,
                            children: [
                                n
                                    ? (0, S.jsx)(e0.m, {
                                          text: g.intl.string(g.t["v6/z28"]),
                                          children: (0, S.jsx)("div", { "aria-hidden": !0, className: d8.dm }),
                                      })
                                    : null,
                                (0, S.jsx)(eh.$, {
                                    type: "button",
                                    disabled: n || e,
                                    loading: t,
                                    onClick: this.handleDelete,
                                    variant: "critical-secondary",
                                    size: dY.Fr ? "sm" : "md",
                                    text: dY.Fr ? g.intl.string(g.t.oyYWHE) : g.intl.string(g.t.yk5qfb),
                                }),
                            ],
                        }),
                    }),
                    (0, S.jsxs)(rT.e, {
                        children: [
                            (0, S.jsx)(eh.$, {
                                type: "button",
                                disabled: e || t,
                                onClick: this.handleCancel,
                                variant: "secondary",
                                size: dY.Fr ? "sm" : "md",
                                text: g.intl.string(g.t["ETE/oC"]),
                            }),
                            (0, S.jsx)(eh.$, {
                                loading: e,
                                disabled: !i || t || !l,
                                type: "submit",
                                variant: "active",
                                size: dY.Fr ? "sm" : "md",
                                text: g.intl.string(g.t["R3BPH+"]),
                            }),
                        ],
                    }),
                ],
            }),
        });
    }
    render() {
        let { paymentSource: e, isDefault: t, locale: n, className: i, isForSubscription: l } = this.props,
            { isDefault: s } = this.state,
            a = e instanceof dB.SJ;
        return (0, S.jsx)(ea.Z, {
            editable: !0,
            className: ew()(d8.Nr, i),
            children: (0, S.jsxs)("form", {
                onSubmit: this.handleSubmit,
                noValidate: !0,
                children: [
                    this.renderError(),
                    (0, S.jsxs)("div", {
                        className: d8.__invalid_paymentSection,
                        children: [
                            (0, S.jsx)(d3.A, {
                                paymentSource: e,
                                isDefault: t,
                                isForSubscription: l,
                                locale: n,
                                showLabels: !0,
                                showPaymentSourceIcon: !0,
                            }),
                            e.invalid
                                ? (0, S.jsx)("div", { className: d8.Um, children: g.intl.string(g.t["3R0U0b"]) })
                                : null,
                            (0, S.jsx)("div", {
                                className: d8.Sv,
                                children: a
                                    ? g.intl.format(g.t.w9WkBl, { paypalURL: "https://www.paypal.com" })
                                    : g.intl.string(g.t.VXndyr),
                            }),
                        ],
                    }),
                    this.renderCardExpirationSection(),
                    this.renderBillingAddressSection(),
                    (0, S.jsx)("div", {
                        className: d8.D5,
                        children: (0, S.jsx)(dH.S, {
                            value: d4,
                            checked: s,
                            onChange: (e) => this.handleFieldChange(e, d4),
                            label: g.intl.string(g.t.nag9Og),
                            labelType: "secondary",
                        }),
                    }),
                    (0, S.jsx)(nO.c, {}),
                    this.renderActions(),
                ],
            }),
        });
    }
}
let d7 = O.Ay.connectStores([dW.A], () => ({ updateError: dW.A.editSourceError, removeError: dW.A.removeSourceError }))(
    d9,
);
var d6 = n(95322);
class ue extends x.PureComponent {
    static defaultProps = { isEditing: !1, hideDivider: !1, onEditClick: () => {} };
    handleEditClick = () => {
        this.props.onEditClick(this.props.paymentSource.id);
    };
    render() {
        let {
            paymentSource: e,
            isDefault: t,
            isEditing: n,
            hideDivider: i,
            isForSubscription: l,
            locale: s,
            removing: a,
            submitting: r,
            onSubmit: o,
            onCancel: d,
            onDelete: u,
        } = this.props;
        return n
            ? (0, S.jsx)(d7, {
                  paymentSource: e,
                  isDefault: t,
                  removing: a,
                  submitting: r,
                  locale: s,
                  isForSubscription: l,
                  onSubmit: o,
                  onCancel: d,
                  onDelete: u,
              })
            : (0, S.jsxs)(S.Fragment, {
                  children: [
                      i ? null : (0, S.jsx)(nO.c, { className: d6.__invalid_sourceDivider }),
                      (0, S.jsxs)("div", {
                          className: d6.Yb,
                          children: [
                              (0, S.jsx)(d3.A, {
                                  paymentSource: e,
                                  isDefault: t,
                                  isForSubscription: l,
                                  locale: s,
                                  showSubtext: !0,
                                  showLabels: !0,
                                  showPaymentSourceIcon: !0,
                              }),
                              (0, S.jsx)(eh.$, {
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
let ut = x.memo(function (e) {
    let { paymentSource: t, hideDivider: n, isForSubscription: i, locale: l, onRedeemClick: s } = e,
        [a, r] = x.useState(null),
        o = (0, O.bG)([t5.default], () => t5.default.getCurrentUser()?.storeCountry?.country ?? null);
    return (
        x.useEffect(() => {
            void 0 === t
                ? r({ amount: 0, currency: null != o ? (0, dU.TW)(`-${o}`) : (0, oG.Rr)() })
                : dV.YP(t.id).then((e) => {
                      r(e);
                  });
        }, [t, o]),
        (0, S.jsxs)(S.Fragment, {
            children: [
                n ? null : (0, S.jsx)(nO.c, { className: d6.__invalid_sourceDivider }),
                (0, S.jsxs)("div", {
                    className: d6.Yb,
                    children: [
                        void 0 !== t
                            ? (0, S.jsx)(d3.A, {
                                  paymentSource: t,
                                  isDefault: !1,
                                  isForSubscription: i,
                                  locale: l,
                                  showSubtext: !1,
                                  showLabels: !1,
                                  showPaymentSourceIcon: !0,
                              })
                            : (0, S.jsx)(k.E, { variant: "text-sm/medium", children: g.intl.string(g.t.wkFAZf) }),
                        (0, S.jsxs)("div", {
                            className: d6.zy,
                            children: [
                                (0, S.jsx)("div", {
                                    className: d6.Tq,
                                    children:
                                        null == a
                                            ? (0, S.jsx)(dM.y, { type: dM.y.Type.SPINNING_CIRCLE })
                                            : (0, S.jsx)(k.E, {
                                                  variant: "text-sm/medium",
                                                  children: (() => {
                                                      let { amount: e, currency: t } = a ?? {},
                                                          n = t ?? (0, oG.Rr)(),
                                                          i = String(n).toUpperCase(),
                                                          l = (0, dF.$g)(e ?? 0, n);
                                                      return `${i} ${l}`;
                                                  })(),
                                              }),
                                }),
                                (0, S.jsx)(eh.$, {
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
class un extends x.PureComponent {
    state = { editingPayment: null };
    handleEditClick = async (e) => {
        try {
            await dV.Gr(e), this.setState({ editingPayment: e });
        } catch (e) {}
    };
    handleCancel = () => {
        this.setState({ editingPayment: null });
    };
    handleDelete = async (e) => {
        try {
            await dV.JQ(e), this.setState({ editingPayment: null });
        } catch (e) {}
    };
    handleSubmit = async (e, t) => {
        if (null != e)
            try {
                await dV.Ps(e, t), this.setState({ editingPayment: null });
            } catch (e) {}
    };
    handlePaymentSourceAdded = async (e) => {
        await (0, dz.c_)(e.id);
    };
    handleAddPaymentMethod = () => {
        (0, b.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 362111));
                return (t) => (0, S.jsx)(e, { ...t, onAddPaymentSource: this.handlePaymentSourceAdded });
            },
            {
                onCloseCallback: () => {
                    (0, dk.ET)();
                },
                onCloseRequest: q.tEg,
            },
        );
    };
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, S.jsxs)("div", {
            className: d6.qr,
            children: [
                0 === Object.keys(e).length
                    ? (0, S.jsxs)("div", {
                          className: d6.z8,
                          children: [
                              (0, S.jsx)(k.E, { variant: "text-sm/normal", children: g.intl.string(g.t.aRHpAB) }),
                              (0, S.jsx)("div", { className: d6.Sv, children: g.intl.string(g.t.o9bOIl) }),
                          ],
                      })
                    : null,
                (0, S.jsx)(eh.$, { onClick: this.handleAddPaymentMethod, text: g.intl.string(g.t.CpOiEO) }),
            ],
        });
    }
    render() {
        let e,
            {
                showHeader: t,
                defaultPaymentSourceId: n,
                paymentSources: i,
                locale: l,
                removing: s,
                submitting: a,
                premiumSubscriptionPaymentSourceId: r,
                showGiftCards: o,
            } = this.props,
            d = eR()
                .values(i)
                .sort((e, t) => (e.id === n ? -1 : t.id === n ? 1 : dX.default.compare(e.id, t.id))),
            u = d.filter((e) => !(e instanceof dB.LQ)),
            c = d.filter((e) => e instanceof dB.LQ),
            _ = this.state.editingPayment,
            m = u.findIndex((e) => e.id === _),
            h = u.map((e, t) =>
                (0, S.jsx)(
                    ue,
                    {
                        locale: l,
                        paymentSource: e,
                        isDefault: n === e.id,
                        onCancel: this.handleCancel,
                        onDelete: this.handleDelete,
                        isForSubscription: e.id === r,
                        hideDivider: 0 === t || m === t - 1,
                        onSubmit: this.handleSubmit,
                        submitting: a,
                        removing: s,
                        isEditing: _ === e.id,
                        onEditClick: this.handleEditClick,
                    },
                    e.id,
                ),
            );
        return (
            (e =
                c.length > 0
                    ? c.map((e, t) =>
                          (0, S.jsx)(
                              ut,
                              {
                                  paymentSource: e,
                                  hideDivider: 0 === u.length || m === u.length - 1,
                                  isForSubscription: e.id === r,
                                  locale: l,
                                  onRedeemClick: () =>
                                      (0, dw.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page" }),
                              },
                              e.id,
                          ),
                      )
                    : (0, S.jsx)(ut, {
                          hideDivider: 0 === u.length || m === u.length - 1,
                          isForSubscription: !1,
                          locale: l,
                          onRedeemClick: () =>
                              (0, dw.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page" }),
                      })),
            (0, S.jsxs)(S.Fragment, {
                children: [
                    t
                        ? (0, S.jsxs)(S.Fragment, {
                              children: [
                                  (0, S.jsxs)(em.D, {
                                      variant: "heading-lg/semibold",
                                      children: [
                                          (0, S.jsx)(dP.X, { size: "sm", className: d6.hz }),
                                          " ",
                                          g.intl.string(g.t.W26xGQ),
                                      ],
                                  }),
                                  (0, S.jsx)(k.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      children: g.intl.string(g.t.h6V3uK),
                                  }),
                              ],
                          })
                        : null,
                    h,
                    o && e,
                    m !== u.length - 1 || (o && c.length > 0) ? (0, S.jsx)(nO.c, {}) : null,
                    this.renderFooter(),
                ],
            })
        );
    }
}
var ui = n(459357),
    ul = n(295405),
    us = n(166403),
    ua = n(773669),
    ur = n(243156);
let uo = (0, o.E2)(d.X.BILLING_PAYMENT_METHODS, {
        Component: function (e) {
            let { showHeader: t = !1 } = e,
                n = (0, O.bG)([dW.A], () => dW.A.isSyncing),
                i = (0, O.bG)([ul.A], () => ul.A.paymentSources),
                l = (0, O.bG)([ul.A], () => ul.A.defaultPaymentSourceId),
                s = (0, O.bG)([ua.default], () => ua.default.locale),
                a = (0, O.bG)([us.A], () => us.A.getPremiumTypeSubscription()),
                r = (0, O.bG)([dW.A], () => dW.A.isRemovingPaymentSource),
                o = (0, O.bG)([dW.A], () => dW.A.isUpdatingPaymentSource),
                { enabled: d } = (0, ui.c)({ location: "UserSettingsBilling" });
            return (x.useEffect(() => {
                dV.$o(), dV.hP();
            }, []),
            n && 0 === Object.keys(i).length)
                ? (0, S.jsx)("div", { className: ur.o, children: (0, S.jsx)(dM.y, {}) })
                : (0, S.jsx)(un, {
                      showHeader: t,
                      paymentSources: i,
                      defaultPaymentSourceId: l,
                      premiumSubscriptionPaymentSourceId:
                          null != a && a.status !== q.Dmq.CANCELED ? a.paymentSourceId : null,
                      locale: s,
                      removing: r,
                      submitting: o,
                      showGiftCards: d,
                  });
        },
        useSearchTerms: () => [g.intl.string(g.t.W26xGQ)],
    }),
    ud = (0, o.zZ)(d.X.BILLING_PAYMENT_METHODS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.W26xGQ),
        icon: dP.X,
        useSubtitle: () => g.intl.string(g.t.h6V3uK),
        buildLayout: () => [uo],
    });
var uu = n(546605),
    uc = n(500380),
    ug = n(518977),
    u_ = n(223784);
function um(e) {
    let { country: t, countryName: n, ...i } = e,
        { onClose: l } = i,
        s = x.useCallback(
            () => (null == t ? null : (0, S.jsx)("img", { alt: "", className: u_.b, src: (0, uc.t)(t) })),
            [t],
        ),
        a = null != n && null != t ? { text: n, leadingIcon: s } : (n ?? void 0),
        r = x.useCallback(() => {
            window.open("https://support.discord.com/hc/articles/39799791912087", "_blank"), l();
        }, [l]);
    return (0, S.jsx)(sG.Modal, {
        ...i,
        title: g.intl.string(g.t.PuB1W7),
        subtitle: a,
        actions: [{ text: g.intl.string(g.t.PuB1W7), onClick: r, variant: "primary" }],
        children: (0, S.jsx)(k.E, {
            variant: "text-md/normal",
            color: "text-muted",
            children: g.intl.string(g.t["21skUa"]),
        }),
    });
}
var uh = n(949677);
let uA = (0, o.E2)(d.X.BILLING_STORE_COUNTRY, {
        Component: function () {
            let e = (0, O.bG)([t5.default], () => t5.default.getCurrentUser()?.storeCountry),
                t = x.useCallback(() => {
                    var t;
                    let n;
                    (n = null != (t = e?.country ?? null) ? (0, ug.Gw)(t) : null),
                        (0, b.openModal)((e) => (0, S.jsx)(um, { ...e, country: t, countryName: n }));
                }, [e?.country]);
            if (null == e) return null;
            let n = (0, ug.Gw)(e.country),
                i = null != e.setAt ? g.intl.format(g.t.ZkWzXG, { date: new Date(e.setAt) }) : null;
            return (0, S.jsxs)("div", {
                className: uh.OO,
                children: [
                    (0, S.jsxs)("div", {
                        className: uh.wI,
                        children: [
                            (0, S.jsx)("div", {
                                className: uh.Gh,
                                children: (0, S.jsx)("img", { alt: "", className: uh.MY, src: (0, uc.t)(e.country) }),
                            }),
                            (0, S.jsxs)("div", {
                                className: uh.d0,
                                children: [
                                    (0, S.jsx)(k.E, { variant: "text-md/semibold", children: n }),
                                    null != i
                                        ? (0, S.jsx)(k.E, {
                                              variant: "text-sm/normal",
                                              color: "text-subtle",
                                              children: i,
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                    (0, S.jsx)(eh.$, { variant: "secondary", size: "sm", text: g.intl.string(g.t.PuB1W7), onClick: t }),
                ],
            });
        },
        useSearchTerms: () => [g.intl.string(g.t["3pIjBH"])],
    }),
    up = (0, o.zZ)(d.X.BILLING_STORE_COUNTRY_CATEGORY, {
        usePredicate: () => {
            let e, t;
            return (
                (e = (0, uu.vg)("StoreCountrySetting")),
                (t = (0, O.bG)([t5.default], () => t5.default.getCurrentUser()?.storeCountry != null)),
                e && t
            );
        },
        useTitle: () => g.intl.string(g.t["3pIjBH"]),
        buildLayout: () => [uA],
    });
var uT = n(549363),
    uE = n(545075);
let uS = (0, o.E2)(d.X.BILLING_TRANSACTION_HISTORY, {
        Component: function () {
            let e = (0, O.bG)([ua.default], () => ua.default.locale);
            return (0, S.jsxs)(S.Fragment, { children: [(0, S.jsx)(uE.kb, {}), (0, S.jsx)(uT.A, { locale: e })] });
        },
        useSearchTerms: () => [g.intl.string(g.t.obLrcK)],
    }),
    ux = (0, o.zZ)(d.X.BILLING_TRANSACTION_HISTORY_CATEGORY, {
        useTitle: () => g.intl.string(g.t.obLrcK),
        buildLayout: () => [uS],
    }),
    uf = (0, o.t_)(d.X.BILLING_PANEL, {
        useTitle: () => g.intl.string(g.t.oeUm2s),
        buildLayout: () => [ud, up, ux],
        useObscuredNotice: dG.L,
    }),
    ub = (0, o.i4)(d.X.BILLING_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.oeUm2s),
        icon: dD.B,
        buildLayout: () => [uf],
    });
var uN = n(597770),
    uC = n(35587),
    uI = n(86379),
    uv = n(532446),
    uy = n(869038),
    uj = n(499454),
    uO = n(45938);
class uR extends x.Component {
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
        let n = t.trim();
        this.setState({ submitting: !0 });
        try {
            if (this.props.acceptGiftCardRedemption)
                try {
                    await (0, dw.Qp)(n),
                        (0, dw.HF)({ initialCode: n, withRedemptionSuccessModal: !0 }),
                        this.setState({ codeInput: "" });
                    return;
                } catch {}
            let e = (0, uO.Vd)(t);
            if (null == e) return void this.setState({ hasError: !0 });
            let i = await uy.A.resolveGiftCode(e);
            if (null != i && null != i.giftCode.promotion)
                throw (this.setState({ isPromoCode: !0 }), Error("Cannnot redeem promotion code as gift"));
            X.default.track(q.HAw.OPEN_MODAL, {
                type: "gift_accept",
                location: {
                    ...this.analyticsLocation,
                    section: q.JJy.LIBRARY_INVENTORY_CODE_REDEMPTION,
                    object: q.ZSU.BUTTON_CTA,
                },
            }),
                (0, uj.h)({ processedCode: e }),
                this.setState({ codeInput: "" });
        } catch (e) {
            this.setState({ hasError: !0 });
        } finally {
            this.setState({ submitting: !1 });
        }
    };
    render() {
        let { obscureInput: e } = this.props,
            { codeInput: t, submitting: n, hasError: i, isPromoCode: l } = this.state;
        return (0, S.jsx)(na.n, {
            label: g.intl.string(g.t["il+VCo"]),
            children: (0, S.jsx)("form", {
                onSubmit: this.handleSubmit,
                children: (0, S.jsxs)(uv.M, {
                    children: [
                        (0, S.jsx)(sP.k, {
                            label: g.intl.string(g.t.SeKIoS),
                            type: e ? "password" : "text",
                            value: t,
                            onChange: this.handleChange,
                            placeholder: "WUMP-AAAAA-BBBBB-CCCCC",
                            error: !l && i ? g.intl.string(g.t.Y11a2u) : null,
                            helperText: l
                                ? g.intl.format(g.t.gPt3PE, {
                                      promoLink: () => {
                                          window.open(`https://discord.com/billing/promotions/${t}`);
                                      },
                                  })
                                : null,
                            fullWidth: !0,
                        }),
                        (0, S.jsx)(eh.$, {
                            variant: "primary",
                            text: g.intl.string(g.t.KIpp7M),
                            type: "submit",
                            loading: n,
                        }),
                    ],
                }),
            }),
        });
    }
}
let uL = (0, o.E2)(d.X.GIFT_CODE_REDEMPTION_SETTING, {
    Component: function () {
        let { enabled: e } = (0, ui.c)({ location: "UserSettingsBilling" }),
            t = x.useContext(X.AnalyticsContext),
            n = (0, O.bG)([eb.A], () => eb.A.enabled);
        return (0, S.jsx)(uR, { analyticsContext: t, obscureInput: n, acceptGiftCardRedemption: e });
    },
    usePredicate: () => !(0, uI.Hp)(),
    useSearchTerms: () => [g.intl.string(g.t["jcSP+g"]), g.intl.string(g.t["il+VCo"])],
});
var uD = n(725570),
    uG = n(707554),
    uP = n(339048),
    uM = n(736653),
    uU = n(46054);
let uk = aN().duration(30, "days");
var uV = n(264779),
    uw = n(416052),
    uB = n(961302);
function uF(e) {
    let { onClose: t, transitionState: n } = e;
    return (0, S.jsx)(sG.Modal, {
        title: "",
        size: "md",
        input: (0, S.jsx)("div", { className: uB.aR }),
        onClose: async () => await t(),
        actions: [{ text: g.intl.string(g.t.cpT0Cq), variant: "primary", onClick: t }],
        transitionState: n,
        children: (0, S.jsxs)("div", {
            className: uB.t4,
            children: [
                (0, S.jsx)(em.D, { variant: "heading-xl/semibold", children: g.intl.string(g.t.iufib1) }),
                (0, S.jsx)(k.E, { variant: "text-md/normal", className: uB.G3, children: g.intl.string(g.t.eAn6z2) }),
            ],
        }),
    });
}
let uz = function (e) {
    let { onClose: t, onClaim: n, code: i, outboundPromotion: l, transitionState: s } = e,
        [a, r] = x.useState(null),
        o = (0, lS.GV)(),
        { analyticsLocations: d } = (0, iM.Ay)(eU.A.USER_SETTINGS_GIFT_INVENTORY);
    return (x.useEffect(() => {
        null == i &&
            (0, uV.kd)({ promotionId: l.id, analyticsLocations: d })
                .then((e) => n(e))
                .catch((e) => r(e?.body?.code));
    }, [i, l.id, n, d]),
    null != a)
        ? (0, S.jsx)(uF, { onClose: t, transitionState: s })
        : null == i
          ? (0, S.jsx)(dM.y, { className: uB.Lq })
          : (0, S.jsx)(sG.Modal, {
                title: "",
                size: "md",
                onClose: async () => await t(),
                input: (0, S.jsxs)("div", {
                    className: uB.N1,
                    children: [
                        (0, S.jsx)("div", { className: uB.Qw }),
                        (0, S.jsx)(em.D, { variant: "heading-xl/semibold", children: g.intl.string(g.t["23BfZh"]) }),
                        (0, S.jsx)(k.E, {
                            variant: "text-md/normal",
                            className: uB.G3,
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
                            let e = (0, uV.kc)(i, l);
                            window.open(e, "_blank");
                        },
                    },
                ],
                transitionState: s,
                "aria-label": o,
                children: (0, S.jsxs)("div", {
                    children: [
                        (0, S.jsx)(nO.c, { className: uB.M5 }),
                        (0, S.jsx)(lO.D, {
                            label: g.intl.string(g.t.s9LFQh),
                            helperText: g.intl.string(g.t["F+nFTZ"]),
                            children: (0, S.jsx)(uw.A, {
                                value: i,
                                buttonColor: rA.$n.Colors.BRAND,
                                buttonLook: rA.$n.Looks.FILLED,
                                delay: 1e3,
                            }),
                        }),
                    ],
                }),
            });
};
var uX = n(725807),
    uY = n(212168),
    uH = n(469778),
    uK = n(109802),
    uW = n(503787);
let uZ = (e) => {
        let { children: t, className: n, splashArtURL: i } = e;
        return (0, S.jsxs)(sV.A, {
            className: ew()(uW.wx, n),
            align: sV.A.Align.CENTER,
            children: [
                (0, S.jsx)("div", { className: uW.Bn, style: null != i ? { backgroundImage: `url(${i})` } : void 0 }),
                t,
            ],
        });
    },
    uq = (e) => {
        let { children: t, className: n } = e;
        return (0, S.jsx)("div", { className: ew()(uW.rf, n), children: t });
    };
class uQ extends x.PureComponent {
    static Header = uZ;
    static Body = uq;
    render() {
        let { children: e, className: t, onMouseEnter: n, onMouseLeave: i } = this.props;
        return (0, S.jsx)("div", { className: ew()(uW.Nr, t), onMouseEnter: n, onMouseLeave: i, children: e });
    }
}
var uJ = n(165191),
    u$ = n(871123),
    u0 = n(366523),
    u1 = n(495544),
    u2 = n(30793),
    u5 = n(97352),
    u3 = n(67480),
    u8 = n(147925),
    u4 = n(957565),
    u9 = n(615396),
    u7 = n(233385);
class u6 extends x.PureComponent {
    _copyModeTimeout = new on.Ep();
    state = { copyMode: uK.q.DEFAULT };
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case uK.q.SUCCESS:
                return g.intl.string(g.t.XVvPjU);
            case uK.q.ERROR:
                return g.intl.string(g.t.i4GM3L);
            default:
                return g.intl.string(g.t.OpuAlK);
        }
    }
    handleRevoke(e) {
        uy.A.revokeGiftCode(e);
    }
    handleCopy = (e) => {
        let { giftCode: t, sku: n } = this.props;
        (0, uO.AK)(t, n),
            (0, u4.C)(
                e,
                () => this.setState({ copyMode: uK.q.SUCCESS }),
                () => this.setState({ copyMode: uK.q.ERROR }),
            ),
            this._copyModeTimeout.start(1e3, () => {
                this.setState({ copyMode: uK.q.DEFAULT });
            });
    };
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: n } = this.state;
        return (0, S.jsxs)(sV.A, {
            direction: sV.A.Direction.VERTICAL,
            className: u7.Gj,
            children: [
                (0, S.jsx)(uK.e, {
                    className: u7.ph,
                    value: (0, uO.Zq)(t.code),
                    text: this.copyButtonText,
                    mode: n,
                    supportsCopy: u4.p5,
                    hideMessage: e ? g.intl.string(g.t["0RLn47"]) : null,
                    onCopy: this.handleCopy,
                    buttonColor: rA.XD.BRAND,
                    buttonLook: rA.pR.FILLED,
                }),
                (0, S.jsxs)("div", {
                    className: u7.KB,
                    children: [
                        null != t.expiresAt
                            ? (0, S.jsxs)(x.Fragment, {
                                  children: [
                                      g.intl.format(g.t.ltVZcJ, { hours: t.expiresAt.diff(aN()(), "h") }),
                                      " —\xa0",
                                  ],
                              })
                            : null,
                        (0, S.jsx)(U.D, {
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
class ce extends x.PureComponent {
    _loadedAt = null;
    state = { isOpen: !1, isCreating: !1, isHovered: !1 };
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    handleGenerateGiftCode = async (e) => {
        e.stopPropagation();
        let { skuId: t, subscriptionPlanId: n, giftStyle: i } = this.props;
        this.setState({ isCreating: !0 }),
            await uy.A.createGiftCode(t, n, i),
            this.setState({ isCreating: !1, isOpen: !0 });
    };
    handleToggleOpen = () => {
        let { skuId: e, subscriptionPlanId: t, loadedAt: n } = this.props,
            i = !this.state.isOpen;
        (null == n || null == this._loadedAt || n < this._loadedAt) && i && uy.A.fetchUserGiftCodesForSKU(e, t),
            this.setState({ isOpen: !this.state.isOpen });
    };
    renderGiftIcon() {
        let { sku: e, giftStyle: t, application: n } = this.props;
        return (0, u$.bF)(e)
            ? (0, S.jsx)(u0.e, { shape: "square", sku: e, containerClassName: u7.ez })
            : null != t
              ? (0, S.jsx)(uJ.A, { giftStyle: t, className: u7.ez, shouldAnimate: this.state.isHovered })
              : (0, S.jsx)(e9.A, { game: n, size: e9.M.MEDIUM, skuId: e.id });
    }
    renderSubtitle() {
        let { sku: e, entitlements: t, application: n } = this.props;
        return (0, u$.bF)(e)
            ? (0, S.jsxs)("div", {
                  className: ew()(u7.Oc, u7.ic),
                  children: [
                      (0, S.jsx)(e9.A, { game: n, size: e9.M.XSMALL, skuId: e.id, className: u7._u }),
                      g.intl.format(g.t["6plpZi"], { applicationName: n.name, copies: t.length }),
                  ],
              })
            : (0, S.jsx)("div", { className: u7.Oc, children: g.intl.format(g.t.zMcvcA, { copies: t.length }) });
    }
    renderTitle() {
        let e,
            { sku: t, subscriptionPlan: n, giftCodeBatchId: i } = this.props;
        return (
            (e =
                i === lf.FB
                    ? g.intl.string(g.t.odsU6W)
                    : i === lf.Bu && null != n
                      ? g.intl.formatToPlainString(n.interval === lf.WT.MONTH ? g.t.uZjpiJ : g.t.bJW1EA, {
                            skuName: t.name,
                            intervalCount: n.intervalCount,
                        })
                      : null == n
                        ? t.name
                        : g.intl.formatToPlainString(n.interval === lf.WT.MONTH ? g.t.rCJvqo : g.t.Vd3Iu8, {
                              skuName: t.name,
                              intervalCount: n.intervalCount,
                          })),
            (0, S.jsx)("div", { className: u7.mO, children: e })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, S.jsxs)(sV.A, {
            justify: sV.A.Justify.BETWEEN,
            align: sV.A.Align.CENTER,
            className: u7.pe,
            children: [
                (0, S.jsx)(k.E, { variant: "text-md/normal", children: g.intl.string(g.t.lELyPj) }),
                (0, S.jsx)(eh.$, {
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
                giftCodes: n,
                className: i,
                sku: l,
                isFetching: s,
                hideCodes: a,
            } = this.props,
            { isOpen: r } = this.state;
        return (0, S.jsxs)(uQ, {
            className: i,
            children: [
                (0, S.jsx)(U.D, {
                    onClick: this.handleToggleOpen,
                    className: u7.Nr,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, S.jsx)(uQ.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, S.jsxs)("div", {
                            className: u7.MY,
                            children: [
                                (0, S.jsxs)(sV.A, {
                                    align: sV.A.Align.CENTER,
                                    children: [
                                        this.renderGiftIcon(),
                                        (0, S.jsxs)("div", {
                                            className: u7.TK,
                                            children: [this.renderTitle(), this.renderSubtitle()],
                                        }),
                                    ],
                                }),
                                (0, S.jsx)(u8.A, {
                                    direction: r ? u8.A.Directions.UP : u8.A.Directions.DOWN,
                                    className: u7.eO,
                                }),
                            ],
                        }),
                    }),
                }),
                r
                    ? (0, S.jsx)(uQ.Body, {
                          children: s
                              ? (0, S.jsx)(dM.y, { className: u7.u1 })
                              : (0, S.jsxs)(x.Fragment, {
                                    children: [
                                        n.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        n.map((e) => (0, S.jsx)(u6, { giftCode: e, sku: l, hideCode: a }, e.code)),
                                    ],
                                }),
                      })
                    : null,
            ],
        });
    }
}
let ct = O.Ay.connectStores([u3.A, eb.A, u2.A, eW.A, u5.A, u1.default], (e) => {
    let { skuId: t, subscriptionPlanId: n, giftStyle: i } = e,
        l = u3.A.get(t);
    if (null == l) throw Error("SKU was unavailable while rendering gift.");
    let s = u2.A.getForGifterSKUAndPlan(u1.default.getId(), t, n)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === i);
    return {
        sku: l,
        hideCodes: eb.A.enabled,
        isFetching: u2.A.getUserGiftCodesFetchingForSKUAndPlan(t, n),
        loadedAt: u2.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, n),
        application: eW.A.getApplication(l.applicationId),
        subscriptionPlan: null != n ? (0, u9.c9)(n) : null,
        giftCodes: s,
    };
})(ce);
var cn = n(479913);
function ci(e) {
    let t,
        { outboundPromotion: n, code: i, addClaimedOutboundPromotionCode: l, disabled: s } = e,
        [a, r] = x.useState(!1),
        [o, d] = x.useState(!1),
        u = () => r((e) => !e),
        c = (0, uM.Ay)(),
        _ = (0, uV.WD)(n.id, c),
        m = null != i,
        h = x.useMemo(
            () =>
                (0, aC.i$)(
                    m
                        ? null != n.outboundRedemptionEndDate
                            ? aN()(n.outboundRedemptionEndDate)
                            : aN()(n.endDate).add(uk)
                        : aN()(n.endDate),
                    "LL",
                ),
            [n, m],
        );
    m && a
        ? (t = g.intl.format(g.t.pkxVx6, { endDate: h, onClickDetails: u }))
        : m && !a
          ? (t = g.intl.format(g.t["4sFeob"], { endDate: h, onClickDetails: u }))
          : !m && a
            ? (t = g.intl.format(g.t["RBnE+l"], { endDate: h, onClickDetails: u }))
            : m || a || (t = g.intl.format(g.t["57+7Qn"], { endDate: h, onClickDetails: u }));
    let A = m ? g.intl.string(g.t["2cHUti"]) : g.intl.string(g.t.O13yhz),
        p = x.useCallback(() => d(!1), []),
        { outboundTitle: T, outboundTermsAndConditions: E } = n;
    return (0, S.jsxs)(S.Fragment, {
        children: [
            (0, S.jsxs)("div", {
                className: ew()(cn.uI, cn.AX),
                children: [
                    (0, S.jsxs)("div", {
                        className: cn.gE,
                        children: [
                            (0, S.jsxs)("div", {
                                className: cn.At,
                                children: [
                                    (0, S.jsx)("div", {
                                        className: cn.$G,
                                        children: (0, S.jsx)("img", { alt: "", src: _, className: cn.IJ }),
                                    }),
                                    (0, S.jsxs)("div", {
                                        children: [
                                            (0, S.jsx)(em.D, { variant: "heading-md/semibold", children: T }),
                                            (0, S.jsx)(k.E, {
                                                variant: "text-sm/normal",
                                                color: "text-default",
                                                className: cn.__invalid_promotionText,
                                                children: t,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            !s && (0, S.jsx)(eh.$, { text: A, onClick: () => d(!0), disabled: s, size: "sm" }),
                        ],
                    }),
                    a &&
                        (0, S.jsx)(k.E, {
                            className: cn.GL,
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: uU.A.parse(E, !1, { allowLinks: !0 }),
                        }),
                ],
            }),
            o &&
                (0, S.jsx)(uD.aF, {
                    renderModal: (e) => (0, S.jsx)(uz, { ...e, onClose: p, onClaim: l, code: i, outboundPromotion: n }),
                    onCloseRequest: p,
                }),
        ],
    });
}
let cl = (0, o.E2)(d.X.GIFT_INVENTORY_LIST_SETTING, {
        Component: function () {
            let e = (0, O.yK)([uH.A], () => uH.A.getGiftable()),
                [t, n] = eR().partition(e, (e) => {
                    let { giftCodeBatchId: t } = e;
                    return null == t;
                }),
                i = (0, O.bG)([t5.default], () =>
                    oG.Ay.isPremiumExactly(t5.default.getCurrentUser(), lf.PremiumTypes.TIER_2),
                ),
                l = (0, O.bG)([t5.default], () => !oG.Ay.isPremium(t5.default.getCurrentUser())),
                s = eR().groupBy(t, (e) => (0, uO.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
                [a, r] = x.useState(!1);
            x.useEffect(() => {
                i3.h.wait(() => {
                    (0, uP.XJ)().then(() => r(!0));
                });
            }, []);
            let {
                    promotionsLoaded: o,
                    activeOutboundPromotions: u,
                    claimedEndedOutboundPromotions: c,
                    claimedOutboundPromotionCodeMap: _,
                    addClaimedOutboundPromotionCode: m,
                } = (0, uC.y7)(),
                h = u.length + c.length > 0,
                A = l && h;
            return a && o
                ? (0, S.jsxs)(S.Fragment, {
                      children: [
                          (function () {
                              let e = n.find((e) => e.giftCodeBatchId === lf.FB && !e.consumed),
                                  t = n.filter((e) => e.giftCodeBatchId === lf.Bu && !e.consumed) ?? [],
                                  [l, s] = eR().partition(t, (e) => {
                                      let { subscriptionPlanId: t } = e;
                                      return t === lf.gD.PREMIUM_YEAR_TIER_2;
                                  }),
                                  a = (0, S.jsx)(em.D, {
                                      variant: "heading-md/semibold",
                                      children: h ? g.intl.string(g.t.wFsj3B) : void 0,
                                  }),
                                  r = A
                                      ? (0, S.jsxs)("div", {
                                            className: cn.uo,
                                            children: [
                                                (0, S.jsx)(oC.t, {
                                                    size: "md",
                                                    color: w.A.colors
                                                        .REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                                                    className: cn.PC,
                                                }),
                                                (0, S.jsx)(k.E, {
                                                    variant: "text-md/normal",
                                                    className: cn.Qw,
                                                    children: g.intl.format(g.t.G4fwxK, {
                                                        onClick: () => {
                                                            (0, lp.default)(), (0, lR.pX)(q.BVt.APPLICATION_STORE);
                                                        },
                                                    }),
                                                }),
                                                (0, S.jsx)(uX.A, {
                                                    showGradient: !0,
                                                    className: cn.aA,
                                                    subscriptionTier: lf.pe.TIER_2,
                                                    textOptions: { textOverride: g.intl.string(g.t.mr4K7D) },
                                                }),
                                            ],
                                        })
                                      : null;
                              return (0, S.jsxs)("div", {
                                  children: [
                                      a,
                                      h ? (0, S.jsx)(nO.c, { className: cn.yF }) : null,
                                      (0, S.jsx)(uY.A, {
                                          className: cn.Yj,
                                          isShown: A,
                                          type: uY.i.PREMIUM,
                                          hasBackground: !0,
                                          children: (0, S.jsxs)("div", {
                                              className: ew()({ [cn.sW]: !A }),
                                              children: [
                                                  r,
                                                  c.map((e) => {
                                                      let { code: t, promotion: n } = e;
                                                      return (0, S.jsx)(
                                                          ci,
                                                          {
                                                              outboundPromotion: n,
                                                              code: t,
                                                              addClaimedOutboundPromotionCode: m,
                                                              disabled: !i,
                                                          },
                                                          n.id,
                                                      );
                                                  }),
                                                  u.map((e) =>
                                                      (0, S.jsx)(
                                                          ci,
                                                          {
                                                              outboundPromotion: e,
                                                              code: _[e.id],
                                                              addClaimedOutboundPromotionCode: m,
                                                              disabled: !i,
                                                          },
                                                          e.id,
                                                      ),
                                                  ),
                                                  null != e
                                                      ? (0, S.jsx)(
                                                            ct,
                                                            {
                                                                className: cn.uI,
                                                                skuId: e.skuId,
                                                                subscriptionPlanId: e.subscriptionPlanId,
                                                                entitlements: [e],
                                                                giftCodeBatchId: lf.FB,
                                                            },
                                                            (0, uO.Kx)(e.skuId, e.subscriptionPlanId),
                                                        )
                                                      : null,
                                                  l.length > 0
                                                      ? (0, S.jsx)(
                                                            ct,
                                                            {
                                                                className: cn.uI,
                                                                skuId: l[0].skuId,
                                                                subscriptionPlanId: l[0].subscriptionPlanId,
                                                                entitlements: l,
                                                                giftCodeBatchId: lf.Bu,
                                                            },
                                                            (0, uO.Kx)(l[0].skuId, l[0].subscriptionPlanId),
                                                        )
                                                      : null,
                                                  s.length > 0
                                                      ? (0, S.jsx)(
                                                            ct,
                                                            {
                                                                className: cn.uI,
                                                                skuId: s[0].skuId,
                                                                subscriptionPlanId: s[0].subscriptionPlanId,
                                                                entitlements: s,
                                                                giftCodeBatchId: lf.Bu,
                                                            },
                                                            (0, uO.Kx)(s[0].skuId, s[0].subscriptionPlanId),
                                                        )
                                                      : null,
                                              ],
                                          }),
                                      }),
                                  ],
                              });
                          })(),
                          (0, S.jsx)("div", {
                              className: cn.sW,
                              children: (0, S.jsxs)(uG.F, {
                                  component: (0, S.jsx)(em.D, {
                                      variant: "heading-md/semibold",
                                      children: g.intl.string(g.t["9KeUbY"]),
                                  }),
                                  children: [
                                      (0, S.jsx)(nO.c, { className: cn.yF }),
                                      0 === Object.keys(s).length
                                          ? (0, S.jsxs)("div", {
                                                className: cn.p$,
                                                children: [
                                                    (0, S.jsx)("div", { className: cn.QT }),
                                                    (0, S.jsx)(uG.H, {
                                                        className: cn.ks,
                                                        children: g.intl.string(g.t.B1qgZn),
                                                    }),
                                                    (0, S.jsx)("p", {
                                                        className: cn.WO,
                                                        children: g.intl.format(g.t.HezvJ8, {
                                                            onClick: function () {
                                                                (0, ey.openUserSettings)(d.X.NITRO_PANEL);
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
                                                        subscriptionPlanId: n,
                                                        giftStyle: i,
                                                    } = (0, uO.X6)(e);
                                                    return (0, S.jsx)(
                                                        ct,
                                                        {
                                                            className: cn.uI,
                                                            skuId: t,
                                                            subscriptionPlanId: n,
                                                            entitlements: s[e],
                                                            giftStyle: i,
                                                        },
                                                        e,
                                                    );
                                                }),
                                  ],
                              }),
                          }),
                      ],
                  })
                : (0, S.jsx)(dM.y, { className: cn.Lq });
        },
        usePredicate: () => !(0, uI.Hp)(),
        useSearchTerms: () => [g.intl.string(g.t["jcSP+g"]), g.intl.string(g.t["9KeUbY"])],
    }),
    cs = (0, o.E2)(d.X.GIFT_BLOCKED_PAYMENTS_SETTING, {
        Component: uE.uK,
        usePredicate: () => (0, uI.Hp)(),
        useSearchTerms: () => [g.intl.string(g.t.vwMEHS)],
    }),
    ca = (0, o.zZ)(d.X.GIFT_INVENTORY_CATEGORY, { buildLayout: () => [uL, cl, cs] }),
    cr = (0, o.t_)(d.X.GIFT_PANEL, { useTitle: () => g.intl.string(g.t["jcSP+g"]), buildLayout: () => [ca] }),
    co = (0, o.i4)(d.X.GIFT_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["jcSP+g"]),
        icon: uN.o,
        usePersistentBadge: function () {
            return x.useMemo(() => ({ badgeType: ef.Xi.COUNT, useCount: () => (0, uC.IO)().length }), []);
        },
        buildLayout: () => [cr],
    });
var cd = n(949302),
    cu = n(332434),
    cc = n(422253);
let cg = (0, o.E2)(d.X.NITRO_SETTING, {
        Component: function () {
            let e = (0, O.bG)([t5.default], () => t5.default.getCurrentUser());
            return (0, oG.YE)(e, lf.PremiumTypes.TIER_2) ? (0, S.jsx)(cc.A, {}) : (0, S.jsx)(cu.A, {});
        },
        useSearchTerms: () => [g.intl.string(g.t.Ipxkog)],
    }),
    c_ = (0, o.zZ)(d.X.NITRO_CATEGORY, { buildLayout: () => [cg] }),
    cm = (0, o.t_)(d.X.NITRO_PANEL, {
        useTitle: () => g.intl.string(g.t.Ipxkog),
        useObscuredNotice: dG.L,
        buildLayout: () => [c_],
    }),
    ch = (0, o.i4)(d.X.NITRO_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.Ipxkog),
        icon: oC.t,
        usePersistentBadge: function (e) {
            return x.useMemo(
                () => ({ badgeType: ef.Xi.STRONGLY_DISCOURAGED_CUSTOM, useCustomBadge: () => (0, cd.e)(e) }),
                [e],
            );
        },
        buildLayout: () => [cm],
    });
var cA = n(104510),
    cp = n(820739),
    cT = n(73825),
    cE = n(160946);
let cS = (0, n(250105).Ay)({
    name: "2026-03-boosting-settings-refresh",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var cx = n(859241),
    cf = n(531260),
    cb = n(369163),
    cN = n(179866),
    cC = n(926268),
    cI = n(106529),
    cv = n(93364);
function cy(e) {
    let { className: t, icon: n, children: i } = e;
    return (0, S.jsxs)("li", {
        className: ew()(cI.Nr, t),
        children: [
            (0, S.jsx)(n, { className: cI.Kk }),
            (0, S.jsx)(k.E, { className: cI.__invalid_description, variant: "text-sm/medium", children: i }),
        ],
    });
}
let cj = function (e) {
    let { cardClassName: t } = e;
    return (0, S.jsxs)("div", {
        className: cI.iE,
        children: [
            (0, S.jsxs)("div", {
                className: cI.Qs,
                children: [
                    (0, S.jsx)(em.D, {
                        className: cI.R_,
                        color: "always-white",
                        variant: "heading-xxl/bold",
                        children: g.intl.string(g.t.IzKs3o),
                    }),
                    (0, S.jsxs)("ul", {
                        className: cI.kR,
                        children: [
                            (0, S.jsx)(cy, { className: t, icon: cb.v, children: g.intl.string(g.t.TZigSO) }),
                            (0, S.jsx)(cy, {
                                className: t,
                                icon: (e) =>
                                    (0, S.jsx)("img", { className: ew()(e.className, cI.Dp), src: cv, alt: "" }),
                                children: g.intl.string(g.t.hjQuV2),
                            }),
                            (0, S.jsx)(cy, { className: t, icon: cN.i, children: g.intl.string(g.t["2RUcaM"]) }),
                            (0, S.jsx)(cy, { className: t, icon: cC.C, children: g.intl.string(g.t.bJoZKV) }),
                        ],
                    }),
                ],
            }),
            (0, S.jsx)("div", { className: cI.JP }),
        ],
    });
};
var cO = n(834040),
    cR = n(307301),
    cL = n(811227);
let cD = [
        { getQuestion: () => g.intl.string(g.t.C4J8UB), getAnswer: () => g.intl.string(g.t.nhkk6k) },
        {
            getQuestion: () => g.intl.string(g.t.ai4ym2),
            getAnswer: () =>
                g.intl.format(g.t["8zlqlD"], { helpCenterUrl: tr.A.getArticleURL(q.MVz.GUILD_BOOSTING_FAQ) }),
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
            [n, i] = x.useState(null);
        return (0, S.jsxs)("div", {
            className: ew()(cL.iE, t),
            children: [
                (0, S.jsx)(em.D, {
                    className: cL.R_,
                    variant: "heading-xxl/bold",
                    children: g.intl.string(g.t.HPJ6Nj),
                }),
                (0, S.jsx)("ul", {
                    className: cL.p_,
                    children: cD.map((e, t) => {
                        let l = n === t;
                        return (0, S.jsxs)(
                            "div",
                            {
                                className: cL.Aw,
                                children: [
                                    (0, S.jsxs)(U.D, {
                                        className: ew()(cL.k7, { [cL.lo]: l }),
                                        onClick: () => i((e) => (e === t ? null : t)),
                                        tag: "li",
                                        children: [
                                            (0, S.jsx)(k.E, {
                                                className: cL.b1,
                                                variant: "text-lg/normal",
                                                children: e.getQuestion(),
                                            }),
                                            l
                                                ? (0, S.jsx)(cO.Q, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: cL.q4,
                                                  })
                                                : (0, S.jsx)(cR.j, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: cL.q4,
                                                  }),
                                        ],
                                    }),
                                    l &&
                                        (0, S.jsx)(k.E, {
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
var cP = n(462887),
    cM = n(933832),
    cU = n(789645),
    ck = n(116891),
    cV = n(416676);
let cw = [
    {
        getPerkHeading: () => g.intl.string(g.t.tIiwuj),
        getPerkPreviewLightTheme: () => n(604203),
        getPerkPreviewDarkTheme: () => n(878515),
        getTier0Value: () => lf.TG[q.TVA.NONE].limits.emoji,
        getTier1Value: () => lf.TG[q.TVA.TIER_1].limits.emoji,
        getTier2Value: () => lf.TG[q.TVA.TIER_2].limits.emoji,
        getTier3Value: () => lf.TG[q.TVA.TIER_3].limits.emoji,
    },
    {
        getPerkHeading: () => g.intl.string(g.t["3iccet"]),
        getPerkPreviewLightTheme: () => n(105732),
        getPerkPreviewDarkTheme: () => n(857020),
        getTier0Value: () => lf.TG[q.TVA.NONE].limits.stickers,
        getTier1Value: () => lf.TG[q.TVA.TIER_1].limits.stickers,
        getTier2Value: () => lf.TG[q.TVA.TIER_2].limits.stickers,
        getTier3Value: () => lf.TG[q.TVA.TIER_3].limits.stickers,
    },
    {
        getPerkHeading: () => g.intl.string(g.t["+smCv9"]),
        getPerkPreviewLightTheme: () => n(597890),
        getPerkPreviewDarkTheme: () => n(297642),
        getTier0Value: () => lf.TG[q.TVA.NONE].limits.soundboardSounds,
        getTier1Value: () => lf.TG[q.TVA.TIER_1].limits.soundboardSounds,
        getTier2Value: () => lf.TG[q.TVA.TIER_2].limits.soundboardSounds,
        getTier3Value: () => lf.TG[q.TVA.TIER_3].limits.soundboardSounds,
    },
    {
        getPerkHeading: () => g.intl.string(g.t.SMYauD),
        getPerkPreviewLightTheme: () => n(323091),
        getPerkPreviewDarkTheme: () => n(261835),
        getTier0Value: () =>
            g.intl.formatToPlainString(g.t.zZ6Rdi, {
                resolution: lf.TG[q.TVA.NONE].limits.screenShareQualityResolution,
                framerate: lf.TG[q.TVA.NONE].limits.screenShareQualityFramerate,
            }),
        getTier1Value: () =>
            g.intl.formatToPlainString(g.t.zZ6Rdi, {
                resolution: lf.TG[q.TVA.TIER_1].limits.screenShareQualityResolution,
                framerate: lf.TG[q.TVA.TIER_1].limits.screenShareQualityFramerate,
            }),
        getTier2Value: () =>
            g.intl.formatToPlainString(g.t.zZ6Rdi, {
                resolution: (0, ck.eT)("GuildBoostingMarketingTierComparisonTable"),
                framerate: lf.TG[q.TVA.TIER_2].limits.screenShareQualityFramerate,
            }),
        getTier3Value: () =>
            g.intl.formatToPlainString(g.t.zZ6Rdi, {
                resolution: (0, ck.eT)("GuildBoostingMarketingTierComparisonTable"),
                framerate: lf.TG[q.TVA.TIER_3].limits.screenShareQualityFramerate,
            }),
    },
    {
        getPerkHeading: () => g.intl.string(g.t["/79IDj"]),
        getPerkPreviewLightTheme: () => n(913997),
        getPerkPreviewDarkTheme: () => n(95781),
        getTier0Value: () =>
            g.intl.formatToPlainString(g.t.w1gmLt, { bitrate: lf.TG[q.TVA.NONE].limits.bitrate / 1e3 }),
        getTier1Value: () =>
            g.intl.formatToPlainString(g.t.w1gmLt, { bitrate: lf.TG[q.TVA.TIER_1].limits.bitrate / 1e3 }),
        getTier2Value: () =>
            g.intl.formatToPlainString(g.t.w1gmLt, { bitrate: lf.TG[q.TVA.TIER_2].limits.bitrate / 1e3 }),
        getTier3Value: () =>
            g.intl.formatToPlainString(g.t.w1gmLt, { bitrate: lf.TG[q.TVA.TIER_3].limits.bitrate / 1e3 }),
    },
    {
        getPerkHeading: () => g.intl.string(g.t.R1U2xC),
        getPerkPreviewLightTheme: () => n(389833),
        getPerkPreviewDarkTheme: () => n(754561),
        getTier0Value: () =>
            g.intl.formatToPlainString(g.t.pIn7Af, { size: lf.TG[q.TVA.NONE].limits.fileSize / 1048576 }),
        getTier1Value: () =>
            g.intl.formatToPlainString(g.t.pIn7Af, { size: lf.TG[q.TVA.TIER_1].limits.fileSize / 1048576 }),
        getTier2Value: () =>
            g.intl.formatToPlainString(g.t.pIn7Af, { size: lf.TG[q.TVA.TIER_2].limits.fileSize / 1048576 }),
        getTier3Value: () =>
            g.intl.formatToPlainString(g.t.pIn7Af, { size: lf.TG[q.TVA.TIER_3].limits.fileSize / 1048576 }),
    },
    {
        getPerkHeading: () => g.intl.string(g.t.f6vfso),
        getPerkPreviewLightTheme: () => n(735669),
        getPerkPreviewDarkTheme: () => n(283517),
        getTier0Value: () => lf.TG[q.TVA.NONE].limits.stageVideoUsers,
        getTier1Value: () => lf.TG[q.TVA.TIER_1].limits.stageVideoUsers,
        getTier2Value: () => lf.TG[q.TVA.TIER_2].limits.stageVideoUsers,
        getTier3Value: () => lf.TG[q.TVA.TIER_3].limits.stageVideoUsers,
    },
    {
        getPerkHeading: () => g.intl.string(g.t.qDqUME),
        getPerkPreviewLightTheme: () => n(970770),
        getPerkPreviewDarkTheme: () => n(416378),
        getTier0Value: () => !1,
        getTier1Value: () => !0,
        getTier2Value: () => !0,
        getTier3Value: () => !0,
    },
    {
        getPerkHeading: () => g.intl.string(g.t.uwqgbu),
        getPerkPreviewLightTheme: () => n(243580),
        getPerkPreviewDarkTheme: () => n(975940),
        getTier0Value: () => !1,
        getTier1Value: () => !0,
        getTier2Value: () => !0,
        getTier3Value: () => !0,
    },
    {
        getPerkHeading: () => g.intl.string(g.t.zxsDxc),
        getPerkPreviewLightTheme: () => n(435748),
        getPerkPreviewDarkTheme: () => n(978380),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => g.intl.string(g.t["2TNS3n"]),
        getTier3Value: () => g.intl.string(g.t["l+S46U"]),
    },
    {
        getPerkHeading: () => g.intl.string(g.t["bHa+Ee"]),
        getPerkPreviewLightTheme: () => n(329312),
        getPerkPreviewDarkTheme: () => n(800120),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => !0,
        getTier3Value: () => !0,
    },
    {
        getPerkHeading: () => g.intl.string(g.t.QV6MZQ),
        getPerkPreviewLightTheme: () => n(463384),
        getPerkPreviewDarkTheme: () => n(258963),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => !1,
        getTier3Value: () => !0,
    },
];
function cB(e) {
    let { children: t, className: n, tier: i } = e,
        l = i === q.TVA.NONE ? "text-muted" : "text-strong",
        s = i === q.TVA.NONE || null == i ? "heading-xl/normal" : "heading-xl/bold";
    return (0, S.jsxs)("th", {
        className: ew()(cV.PG, n),
        scope: "col",
        children: [
            (0, S.jsx)(em.D, { color: l, variant: s, children: t }),
            null != i &&
                (0, S.jsx)(k.E, {
                    color: l,
                    variant: "text-md/normal",
                    children: g.intl.format(g.t["pob/cL"], { subscriptions: q.M2T[i] }),
                }),
        ],
    });
}
function cF(e) {
    let t,
        { className: n, textVariant: i = "text-md/bold", value: l } = e;
    if ("boolean" == typeof l) {
        let e = ew()(cV.Jk, { [cV.I$]: l });
        t = l
            ? (0, S.jsx)(cM.A, { size: "md", color: "currentColor", className: e })
            : (0, S.jsx)(cU.P, { size: "md", color: "currentColor", className: e });
    } else t = (0, S.jsx)(k.E, { color: "interactive-text-active", variant: i, children: l });
    return (0, S.jsx)("td", { className: ew()(cV.xR, n), children: t });
}
function cz(e) {
    let { currentTier: t } = e,
        n = (function (e) {
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
    return null == n
        ? null
        : (0, S.jsx)("div", {
              className: ew()(cV.ER, { [cV.GH]: n === q.TVA.TIER_2, [cV.z5]: n === q.TVA.TIER_3 }),
              children: (0, S.jsx)(k.E, {
                  className: cV.uQ,
                  color: "always-white",
                  variant: "text-xs/bold",
                  children: t === q.TVA.TIER_3 ? g.intl.string(g.t.d849Up) : g.intl.string(g.t.dZeX1z),
              }),
          });
}
function cX(e) {
    let { isFocused: t, handleFocus: n, handleRowBlur: i, theme: l, row: s, hideTier0: a } = e,
        r = x.useRef(null);
    return (0, S.jsxs)("tr", {
        className: cV.__invalid_tableRow,
        children: [
            (0, S.jsx)("th", {
                className: ew()(cV.xR, cV.uB),
                scope: "row",
                children: (0, S.jsx)(U.D, {
                    className: ew()(cV.VC, cV.xR, cV.Rk),
                    onFocus: n,
                    onBlur: i,
                    onMouseEnter: n,
                    onMouseLeave: i,
                    children: (0, S.jsx)(G.Y, {
                        targetElementRef: r,
                        align: "center",
                        disablePointerEvents: !0,
                        nudgeAlignIntoViewport: !0,
                        position: "bottom",
                        renderPopout: () =>
                            (0, S.jsx)("img", {
                                className: cV.Mz,
                                src: (0, cP.M)(l) ? s.getPerkPreviewDarkTheme() : s.getPerkPreviewLightTheme(),
                                alt: "",
                            }),
                        shouldShow: t,
                        spacing: 16,
                        children: () =>
                            (0, S.jsx)(k.E, { variant: "text-md/normal", ref: r, children: s.getPerkHeading() }),
                    }),
                }),
            }),
            !a && (0, S.jsx)(cF, { textVariant: "text-md/normal", value: s.getTier0Value() }),
            (0, S.jsx)(cF, { value: s.getTier1Value() }),
            (0, S.jsx)(cF, { value: s.getTier2Value() }),
            (0, S.jsx)(cF, { value: s.getTier3Value() }),
        ],
    });
}
let cY = function (e) {
    let t = (0, uM.Ay)(),
        [n, i] = x.useState(null),
        { className: l, guild: s, hideHeading: a, hideTier0: r } = e;
    function o() {
        i(null);
    }
    return (0, S.jsxs)("div", {
        className: l,
        children: [
            !a &&
                (0, S.jsx)(em.D, {
                    className: cV.R_,
                    variant: "heading-xxl/extrabold",
                    children: g.intl.string(g.t["9GGb9k"]),
                }),
            (0, S.jsxs)("div", {
                className: cV.wY,
                children: [
                    null != s && (0, S.jsx)(cz, { currentTier: s.premiumTier }),
                    (0, S.jsxs)("table", {
                        className: cV.tp,
                        cellPadding: 0,
                        cellSpacing: 0,
                        children: [
                            (0, S.jsx)("thead", {
                                children: (0, S.jsxs)("tr", {
                                    className: cV.__invalid_tableRow,
                                    children: [
                                        (0, S.jsx)(cB, { className: cV.VC, children: g.intl.string(g.t.F5MY0k) }),
                                        !r && (0, S.jsx)(cB, { tier: q.TVA.NONE, children: g.intl.string(g.t.mx8j2m) }),
                                        (0, S.jsx)(cB, { tier: q.TVA.TIER_1, children: g.intl.string(g.t.nzXtaS) }),
                                        (0, S.jsx)(cB, { tier: q.TVA.TIER_2, children: g.intl.string(g.t["h33/uW"]) }),
                                        (0, S.jsx)(cB, { tier: q.TVA.TIER_3, children: g.intl.string(g.t.BfF6ED) }),
                                    ],
                                }),
                            }),
                            (0, S.jsx)("tbody", {
                                className: cV.__invalid_tableBody,
                                children: cw.map((e, l) => {
                                    let s = n === l;
                                    return void 0 === e.predicate
                                        ? (0, S.jsx)(
                                              cX,
                                              {
                                                  isFocused: s,
                                                  handleFocus: function () {
                                                      i(l);
                                                  },
                                                  handleRowBlur: o,
                                                  theme: t,
                                                  row: e,
                                                  hideTier0: r,
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
var cH = n(338548),
    cK = n(776096),
    cW = n(178368),
    cZ = n(487514),
    cq = n(866323),
    cQ = n(530005),
    cJ = n(443865),
    c$ = n(473145);
function c0(e) {
    let {
            guildBoostSlot: t,
            onClose: i,
            hasCancelableGuildBoostSlot: l,
            premiumSubscription: s,
            onSelect: a,
            fractionalState: r,
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
        case q.Dmq.PAST_DUE:
            (o.cancel.disabled = !0), (o.cancel.subtext = g.intl.string(g.t.WnL6DV)), (o.uncancel.disabled = !0);
            break;
        case q.Dmq.PAUSE_PENDING:
        case q.Dmq.PAUSED:
            r === lf.xc.NONE &&
                ((o.transfer.disabled = !0),
                (o.transfer.subtext = g.intl.string(g.t.LiLRRT)),
                (o.cancel.subtext = g.intl.string(g.t["1ywaWL"])),
                (o.cancel.disabled = !0),
                (o.uncancel.disabled = !0));
    }
    let u = x.useMemo(
        () =>
            s.isPausedOrPausePending && r === lf.xc.NONE
                ? (0, S.jsx)(M.Dr, {
                      id: "manage-subscription",
                      label: g.intl.string(g.t.obRG6Y),
                      action: () => (0, ey.openUserSettings)(d.X.SUBSCRIPTIONS_PANEL),
                      iconLeft: cJ.x,
                      leadingAccessory: { type: "icon", icon: cJ.x },
                  })
                : null,
        [r, s],
    );
    return (0, S.jsxs)(P.W, {
        "data-menu-migrated-auto": !0,
        onSelect: a,
        navId: "subscription-context",
        variant: "fixed",
        "aria-label": g.intl.string(g.t.ogxXGq),
        onClose: i,
        children: [
            (0, S.jsx)(M.Dr, {
                id: "apply",
                label: o.transfer.label,
                subtext: o.transfer.subtext,
                action: function () {
                    (0, b.openModalLazy)(async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 724624));
                        return (n) =>
                            (0, S.jsx)(e, { ...n, guildBoostSlots: [t], locationSection: q.JJy.SETTINGS_PREMIUM });
                    });
                },
                disabled: o.transfer.disabled,
            }),
            (0, c$.I5)(t)
                ? (0, S.jsx)(M.Dr, {
                      id: "uncancel",
                      label: o.uncancel.label,
                      subtext: o.uncancel.subtext,
                      action: function () {
                          (0, b.openModalLazy)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 342744));
                              return (n) => (0, S.jsx)(e, { ...n, guildBoostSlotId: t.id });
                          });
                      },
                      disabled: o.uncancel.disabled,
                  })
                : (0, S.jsx)(M.Dr, {
                      id: "cancel",
                      label: o.cancel.label,
                      subtext: o.cancel.subtext,
                      action: function () {
                          (0, b.openModalLazy)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 983511));
                              return (n) => (0, S.jsx)(e, { ...n, guildBoostSlot: t });
                          });
                      },
                      disabled: o.cancel.disabled,
                      color: "danger",
                  }),
            u,
        ],
    });
}
var c1 = n(545934),
    c2 = n(496431);
let c5 = function (e) {
    let { className: t, cooldown: n } = e,
        i = (0, c2.A)(n);
    return (0, S.jsx)(k.E, {
        className: t,
        variant: "text-sm/medium",
        color: "text-muted",
        children: (0, aC.uN)(i, { days: g.t.WUTPDc, hours: g.t.c1qodV, minutes: g.t["2+A3dv"] }),
    });
};
var c3 = n(550070);
let c8 = function (e) {
    let { className: t, imageClassName: i, boostInCooldown: l, useReducedMotion: s } = e;
    return (0, S.jsx)("div", {
        className: ew()(c3.h4, t, { [c3.K2]: l }),
        children: (0, S.jsx)("img", {
            className: ew()(c3.Sl, i, { [c3.x8]: l }),
            src: l
                ? n(791128)
                : s
                  ? n(757871)
                  : "https://cdn.discordapp.com/assets/content/86fd98fc22283647a8be93d0c503646b53c84e3cb25ca6562a38cecb84327e58.gif",
            alt: "",
        }),
    });
};
var c4 = n(280582);
let c9 = function (e) {
    let { className: t, hasCooldown: i, isCanceled: l, useReducedMotion: s } = e;
    return (0, S.jsxs)("div", {
        className: ew()(c4.sn, t),
        children: [
            l
                ? (0, S.jsx)("img", { className: ew()(c4.$J, c4.qX), src: n(66469), alt: "" })
                : (0, S.jsx)(c8, { className: c4.$J, boostInCooldown: i, useReducedMotion: s }),
            !l && i && (0, S.jsx)("img", { className: c4.De, src: n(994937), alt: "" }),
        ],
    });
};
var c7 = n(548118),
    c6 = n(509536),
    ge = n(721923),
    gt = n(864310),
    gn = n(44112);
let gi = function (e) {
    let { className: t, guildId: n, boostingVariant: i } = e,
        l = (0, dp.bG)([H.A], () => H.A.getGuild(n), [n]),
        s = (0, gt.A)(l?.id).total;
    return null == l
        ? (0, S.jsx)("div", {
              className: ew()(t, gn.bo),
              children: (0, S.jsx)("div", {
                  className: gn.$g,
                  children: (0, S.jsx)(k.E, { variant: "text-lg/bold", children: g.intl.string(g.t["6Kwwuo"]) }),
              }),
          })
        : (0, S.jsxs)("div", {
              className: ew()(t, gn.bo),
              children: [
                  (0, S.jsx)(c7.Ay, { className: gn.__invalid_guildIcon, guild: l, size: c7.Ay.Sizes.LARGER }),
                  (0, S.jsxs)("div", {
                      className: gn.$g,
                      children: [
                          (0, S.jsx)(k.E, { variant: "text-lg/bold", children: l.name }),
                          (0, S.jsxs)("div", {
                              className: gn.TZ,
                              children: [
                                  (0, S.jsx)(cA._, {
                                      color: w.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                      className: gn.Me,
                                  }),
                                  (0, S.jsx)(k.E, {
                                      variant: "text-sm/bold",
                                      color: "text-muted",
                                      children: g.intl.format(g.t["pob/cL"], { subscriptions: s }),
                                  }),
                                  (0, S.jsx)("div", { className: gn.me }),
                                  (0, S.jsx)(k.E, {
                                      variant: "text-sm/bold",
                                      color: "text-muted",
                                      children: (0, c$.gb)(l.premiumTier, { useLevels: !1 }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  i
                      ? (0, S.jsx)(ge.A, {
                            guild: l,
                            analyticsLocation: {
                                page: q.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                section: q.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                object: q.ZSU.BUTTON_CTA,
                                objectType: q.AnalyticsObjectTypes.BUY,
                            },
                            pauseAnimation: !0,
                            size: rA.$n.Sizes.MEDIUM,
                            color: rA.$n.Colors.PRIMARY,
                            buttonText: g.intl.string(g.t.aBHecF),
                        })
                      : (0, S.jsx)(eh.$, {
                            variant: "secondary",
                            text: g.intl.string(g.t.KLOhbO),
                            onClick: () => {
                                (0, lp.default)(),
                                    (0, c6.K4)({
                                        guildId: l.id,
                                        location: { section: q.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA },
                                    });
                            },
                        }),
              ],
          });
};
var gl = n(930988);
function gs(e) {
    let {
            guildTier: t,
            guildBoostSlot: n,
            showAltText: i,
            isCanceled: l,
            premiumSubscription: s,
            fractionalPremiumInfo: a,
        } = e,
        r = x.useMemo(() => {
            if (l) {
                let e = s.currentPeriodEnd;
                return (
                    s.isPausedForFractionalPremium && (e = a.endsAt.toDate()), g.intl.format(g.t.Z4ULRD, { date: e })
                );
            }
            let e = null != n.premiumGuildSubscription ? dX.default.extractTimestamp(n.premiumGuildSubscription.id) : 0;
            return g.intl.formatToPlainString(g.t.lY2Bur, { date: new Date(e) });
        }, [n, l, s, a]),
        o = x.useMemo(
            () =>
                (function (e) {
                    if (null == e || e === q.TVA.NONE) return "";
                    let t = [
                        g.intl.formatToPlainString(g.t["dLlKX/"], { numEmojiSlots: lf.TG[e].limits.emoji }),
                        g.intl.formatToPlainString(g.t["+ANIfv"], { numStickerSlots: lf.TG[e].limits.stickers }),
                        g.intl.formatToPlainString(g.t["4gt60b"], {
                            numSoundboardSlots: lf.TG[e].limits.soundboardSounds,
                        }),
                        g.intl.formatToPlainString(g.t.XahSjZ, {
                            resolution: lf.TG[e].limits.screenShareQualityResolution,
                            framerate: lf.TG[e].limits.screenShareQualityFramerate,
                        }),
                        g.intl.formatToPlainString(g.t.NbNs7S, { bitrate: lf.TG[e].limits.bitrate / 1e3 }),
                        g.intl.formatToPlainString(g.t.VVKcpn, { filesize: lf.TG[e].limits.fileSize / 1024 / 1024 }),
                        g.intl.formatToPlainString(g.t.TbpCvv, { numVideoStageSeats: lf.TG[e].limits.stageVideoUsers }),
                        g.intl.string(g.t.LDyX3i),
                        g.intl.string(g.t.YtGlPW),
                    ];
                    e >= q.TVA.TIER_2 && (t.push(g.intl.string(g.t.SztbtN)), t.push(g.intl.string(g.t["3GK91n"]))),
                        e >= q.TVA.TIER_3 && t.push(g.intl.string(g.t["XUUJd+"]));
                    let n = t[Math.floor(Math.random() * t.length)];
                    return g.intl.format(g.t["/dOAmQ"], { perk: n });
                })(t),
            [t],
        ),
        d = (0, cq.p)(i, { from: { opacity: 0 }, enter: { opacity: 1 }, leave: { opacity: 0 } }, "animate-always");
    return l || t === q.TVA.NONE
        ? (0, S.jsx)("div", {
              className: gl.xm,
              children: (0, S.jsx)(k.E, { variant: "text-sm/medium", color: "text-muted", children: r }),
          })
        : d((e, t) =>
              (0, S.jsx)(cZ.animated.div, {
                  style: e,
                  className: gl.xm,
                  children: (0, S.jsx)(k.E, { variant: "text-sm/medium", color: "text-muted", children: t ? o : r }),
              }),
          );
}
function ga(e) {
    let {
            guildTier: t,
            guildBoostSlot: n,
            premiumSubscription: i,
            hasCancelableGuildBoostSlot: l,
            showAltText: s,
            isLastGuildBoostSlot: a,
        } = e,
        r = (0, dp.bG)([nH.A], () => nH.A.useReducedMotion),
        o = x.useMemo(() => (null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null), [n]),
        d = x.useMemo(() => null != o && o > new Date(), [o]),
        u = (0, c$.I5)(n),
        c = (0, cf.A)(),
        _ = x.useRef(null);
    return (0, S.jsxs)("div", {
        className: gl.PW,
        children: [
            (0, S.jsxs)("div", {
                className: gl.$U,
                children: [
                    (0, S.jsx)(c9, { isCanceled: u, hasCooldown: d, useReducedMotion: r }),
                    (0, S.jsx)("div", {
                        className: gl.vh,
                        children:
                            null != o && d && !u
                                ? (0, S.jsx)(c5, { className: gl.xm, cooldown: o.getTime() })
                                : (0, S.jsx)(gs, {
                                      guildTier: t,
                                      guildBoostSlot: n,
                                      showAltText: s,
                                      isCanceled: u,
                                      premiumSubscription: i,
                                      fractionalPremiumInfo: c,
                                  }),
                    }),
                    (0, S.jsx)(G.Y, {
                        targetElementRef: _,
                        renderPopout: function (e) {
                            let { closePopout: t } = e;
                            return (0, S.jsx)(c0, {
                                onClose: t,
                                guildBoostSlot: n,
                                premiumSubscription: i,
                                hasCancelableGuildBoostSlot: l,
                                fractionalState: c.fractionalState,
                            });
                        },
                        position: "right",
                        align: "center",
                        children: (e) =>
                            (0, S.jsx)(U.D, {
                                ...e,
                                innerRef: _,
                                "aria-label": g.intl.string(g.t.PdRCRg),
                                className: gl.oU,
                                children: (0, S.jsx)(cQ.F, { size: "md", color: "currentColor" }),
                            }),
                    }),
                ],
            }),
            !a && (0, S.jsx)("div", { className: gl.eX }),
        ],
    });
}
function gr(e) {
    let {
            guildId: t,
            guildBoostSlotRecords: n,
            premiumSubscription: i,
            hasCancelableGuildBoostSlot: l,
            showAltText: s,
        } = e,
        a = (0, dp.bG)([H.A], () => H.A.getGuild(t), [t]);
    return (0, S.jsxs)("div", {
        className: gl.ag,
        children: [
            (0, S.jsx)(gi, { guildId: t, boostingVariant: !1 }),
            n.map((e, t) =>
                (0, S.jsx)(
                    ga,
                    {
                        guildTier: a?.premiumTier,
                        guildBoostSlot: e,
                        premiumSubscription: i,
                        hasCancelableGuildBoostSlot: l,
                        showAltText: s,
                        isLastGuildBoostSlot: t === n.length - 1,
                    },
                    e.id,
                ),
            ),
        ],
    });
}
function go(e) {
    let { guildId: t, appliedGuildBoosts: n, premiumSubscription: i } = e,
        l = (0, dp.bG)([H.A], () => H.A.getGuild(t), [t]),
        s = dX.default.fromTimestamp(Date.now());
    if (
        (n.forEach((e) => {
            (null == s || 0 > dX.default.compare(e.id, s)) && (s = e.id);
        }),
        null == s)
    )
        return null;
    let a = c1.A.createFromServer(
        {
            id: dX.default.fromTimestamp(Date.now()),
            subscription_id: i.id,
            canceled: !1,
            premium_guild_subscription: { id: s, guild_id: t },
            cooldown_ends_at: null,
        },
        i,
    );
    return (0, S.jsxs)("div", {
        className: gl.ag,
        children: [
            (0, S.jsx)(gi, { guildId: t, boostingVariant: !1 }),
            n.map((e, t) =>
                (0, S.jsx)(
                    ga,
                    {
                        guildTier: l?.premiumTier,
                        guildBoostSlot: a,
                        premiumSubscription: i,
                        hasCancelableGuildBoostSlot: !1,
                        showAltText: !1,
                        isLastGuildBoostSlot: t === n.length - 1,
                    },
                    t,
                ),
            ),
        ],
    });
}
function gd(e) {
    let { appliedGuildBoosts: t, premiumSubscription: n } = e,
        i = x.useMemo(() => {
            let e = {};
            return (
                t.forEach((t) => {
                    let n = t.guildId;
                    n in e || (e[n] = []), e[n].push(t);
                }),
                e
            );
        }, [t]);
    return null == n || 0 === t.length
        ? null
        : (0, S.jsxs)("div", {
              className: gl.iE,
              children: [
                  (0, S.jsx)("div", {
                      className: gl.kL,
                      children: dX.default
                          .keys(i)
                          .map((e) =>
                              (0, S.jsx)(go, { guildId: e, premiumSubscription: n, appliedGuildBoosts: i[e] }, e),
                          ),
                  }),
                  (0, S.jsx)("div", { className: gl.vK }),
              ],
          });
}
function gu(e) {
    let { guildBoostSlots: t, premiumSubscription: n } = e,
        [i, l] = x.useState(!1);
    x.useEffect(() => {
        let e = -1;
        return (
            null != n &&
                (e = setInterval(() => {
                    l((e) => !e);
                }, 3e3)),
            () => {
                clearInterval(e);
            }
        );
    }, [n]);
    let { boostsByGuildId: s, numActiveGuildBoostSlots: a } = x.useMemo(() => {
        let e = 0,
            n = {};
        return (
            Object.keys(t).forEach((i) => {
                let l = t[i];
                if ((!(0, c$.I5)(l) && e++, null != l.premiumGuildSubscription)) {
                    let e = l.premiumGuildSubscription.guildId;
                    e in n || (n[e] = []), n[e].push(l);
                }
            }),
            { boostsByGuildId: n, numActiveGuildBoostSlots: e }
        );
    }, [t]);
    if (null == n || 0 === Object.keys(s).length) return null;
    let r = a > oG.Ay.getNumIncludedPremiumGuildSubscriptionSlots(n.planId);
    return (0, S.jsxs)("div", {
        className: gl.iE,
        children: [
            (0, S.jsx)("div", {
                className: gl.kL,
                children: dX.default
                    .keys(s)
                    .map((e) =>
                        (0, S.jsx)(
                            gr,
                            {
                                guildId: e,
                                guildBoostSlotRecords: s[e],
                                premiumSubscription: n,
                                hasCancelableGuildBoostSlot: r,
                                showAltText: i,
                            },
                            e,
                        ),
                    ),
            }),
            (0, S.jsx)("div", { className: gl.vK }),
        ],
    });
}
var gc = n(581796);
let gg = function (e) {
    let { hasGuildBoostSlots: t, hasAppliedGuildBoosts: i, hasBoostPerk: l, canAddBoosts: s } = e;
    return (0, S.jsxs)("div", {
        className: gc.iE,
        children: [
            (0, S.jsx)("div", {
                className: gc.bj,
                children: (0, S.jsx)("img", { alt: "", className: gc.KV, src: n(757871) }),
            }),
            (0, S.jsxs)("div", {
                className: gc.D7,
                children: [
                    (0, S.jsx)(em.D, {
                        variant: "display-md",
                        className: gc.R_,
                        children: (function (e) {
                            let {
                                hasGuildBoostSlots: t,
                                hasAppliedGuildBoosts: n,
                                hasBoostPerk: i,
                                canAddBoosts: l,
                            } = e;
                            return l
                                ? t
                                    ? i && !n
                                        ? g.intl.format(g.t.s9zQyG, {})
                                        : g.intl.format(g.t.Rb8Jhs, {})
                                    : g.intl.string(g.t["2rh0by"])
                                : g.intl.format(g.t.Rb8Jhs, {});
                        })({ hasGuildBoostSlots: t, hasBoostPerk: l, hasAppliedGuildBoosts: i, canAddBoosts: s }),
                    }),
                    (0, S.jsx)("svg", {
                        viewBox: "0 0 660 210",
                        className: gc.Mz,
                        children: (0, S.jsx)("path", {
                            d: "M101.3,45.5C57.5,45.9,15.9,82.2,0,99.5V210h660V53.5c-164-137-265.2,32.4-385.8,33.6  C177.7,88.1,158.1,45,101.3,45.5z",
                        }),
                    }),
                ],
            }),
        ],
    });
};
var g_ = n(757240),
    gm = n(168482);
function gh() {
    return (0, S.jsxs)("div", {
        className: g_.iE,
        children: [
            (0, S.jsx)("img", { className: g_.Kk, alt: "", src: gm }),
            (0, S.jsxs)("div", {
                className: g_.pq,
                children: [
                    (0, S.jsx)(k.E, { variant: "text-lg/bold", children: g.intl.string(g.t.ZHNSYf) }),
                    (0, S.jsx)(k.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: g.intl.string(g.t.kCj5ps),
                    }),
                ],
            }),
            (0, S.jsx)(eh.$, {
                variant: "secondary",
                text: g.intl.string(g.t.JFlifp),
                onClick: () => {
                    (0, lR.pX)(q.BVt.GUILD_DISCOVERY), (0, lp.default)();
                },
            }),
        ],
    });
}
var gA = n(502572),
    gp = n(614820),
    gT = n(987144),
    gE = n(43985);
let gS = function () {
    let e = x.useRef(null),
        { analyticsLocations: t } = (0, iM.Ay)(),
        { fractionalState: i } = (0, cf.A)();
    function l(n) {
        null != e.current && (0, b.closeModal)(e.current),
            (0, gT.g)({
                analyticsLocation: {
                    page: q.liQ.GUILD_BOOSTING_USER_SETTINGS,
                    section: q.JJy.GUILD_BOOSTING_BOOST_ANY_GUILD_CTA,
                    object: q.ZSU.BUTTON_CTA,
                    objectType: q.AnalyticsObjectTypes.BUY,
                },
                analyticsLocations: t,
                guild: n,
            });
    }
    async function s() {
        e.current = await (0, b.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 770101));
                return (t) => (0, S.jsx)(e, { ...t, onSelectGuild: l });
            },
            {
                onCloseRequest: () => {
                    null != e.current && (0, b.closeModal)(e.current);
                },
            },
        );
    }
    let a = (0, c$.Nc)({ fractionalState: i });
    return (0, S.jsxs)("div", {
        className: gE.iE,
        children: [
            (0, S.jsx)(cA._, { color: w.A.unsafe_rawColors.GUILD_BOOSTING_PINK, className: gE.$J }),
            (0, S.jsx)(k.E, {
                className: gE.C,
                color: "text-default",
                variant: "text-sm/medium",
                children: g.intl.format(g.t.kqC5vq, {
                    boostAnyGuildHook: (e, t) => {
                        let n = null != a,
                            i = (0, gp.O)(e),
                            l = (0, S.jsx)("div", {
                                className: gE.lO,
                                children: (0, S.jsx)(
                                    B.Q,
                                    { variant: "primary", onClick: n ? void 0 : s, text: i, disabled: n },
                                    t,
                                ),
                            });
                        return n
                            ? (0, S.jsx)(
                                  gA.A,
                                  {
                                      text: a,
                                      "aria-label": a.toString(),
                                      children: (e) => (0, S.jsx)("span", { ...e, children: l }),
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
var gx = n(212824);
let gf = function (e) {
    let { canAddBoosts: t, canApplyBoosts: n } = e,
        i = (0, O.bG)([cK.A], () => cK.A.affinities),
        l = (0, O.bG)([K.Ay], () => K.Ay.getFlattenedGuildIds()),
        s = x.useMemo(() => {
            let e = i.slice(0, 3).map((e) => e.guildId);
            for (let t = 0; t < l.length && !(e.length >= 3); t++) {
                let n = l[t];
                e.includes(n) || e.push(n);
            }
            return e;
        }, [i, l]);
    return 0 === s.length
        ? null
        : (0, S.jsxs)("div", {
              className: gx.iE,
              children: [
                  t &&
                      (0, S.jsx)(em.D, {
                          variant: "heading-lg/semibold",
                          className: gx.wx,
                          children: g.intl.string(g.t.r90Wgo),
                      }),
                  s.map((e) => (0, S.jsx)(gi, { className: gx.ZS, guildId: e, boostingVariant: !0 }, e)),
                  l.length > 3 && n && (0, S.jsx)(gS, {}),
              ],
          });
};
var gb = n(342933);
let gN = function (e) {
    let {
            hasAppliedGuildBoosts: t,
            hasBoostPerk: n,
            hasGuildAffinitiesOrInGuild: i,
            subscriptionIsPausedOrPausePending: l,
        } = e,
        { subtitle: s, flavor: a } = (function (e) {
            let {
                hasAppliedGuildBoosts: t,
                hasBoostPerk: n,
                hasGuildAffinitiesOrInGuild: i,
                subscriptionIsPausedOrPausePending: l,
            } = e;
            if (l)
                return {
                    flavor: g.intl.format(g.t.doslJu, {
                        onClick: () => (0, ey.openUserSettings)(d.X.SUBSCRIPTIONS_PANEL),
                    }),
                };
            if (!i) return { subtitle: g.intl.string(g.t.oiWYAc) };
            if (t)
                return {
                    subtitle: g.intl.string(g.t.W5rDjW),
                    flavor: g.intl.format(g.t.cUHcaQ, {
                        helpdeskArticle: tr.A.getArticleURL(q.MVz.GUILD_SUBSCRIPTIONS),
                    }),
                };
            let s = lf.hd[lf.gD.PREMIUM_MONTH_GUILD],
                a = oG.Ay.getDefaultPrice(s.id, n),
                r = (0, dF.CE)((0, dF.$g)(a.amount, a.currency), s.interval, s.intervalCount);
            return {
                subtitle: n ? g.intl.string(g.t.bhPzXR) : g.intl.string(g.t.Zs9h9Z),
                flavor: g.intl.formatToPlainString(g.t.PGgTdA, { monthlyGuildBoostPrice: r }),
            };
        })({
            hasAppliedGuildBoosts: t,
            hasBoostPerk: n,
            hasGuildAffinitiesOrInGuild: i,
            subscriptionIsPausedOrPausePending: l,
        });
    return (0, S.jsxs)("div", {
        className: gb.i,
        children: [
            (0, S.jsx)(em.D, { variant: "heading-lg/bold", className: gb.V, children: s }),
            null != a && (0, S.jsx)(k.E, { variant: "text-sm/normal", children: a }),
        ],
    });
};
var gC = n(724624),
    gI = n(983511),
    gv = n(342744),
    gy = n(87719),
    gj = n(929570);
function gO(e) {
    let {
            guildBoostSlot: t,
            isCancellable: n,
            onCancel: i,
            onUncancel: l,
            premiumSubscription: s,
            useReducedMotion: a,
            fractionalState: r,
        } = e,
        o = x.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t]),
        d = (0, c$.I5)(t),
        u = s?.isPaused === !0 && r === lf.xc.NONE,
        c = g.intl.string(g.t.mOWsF1);
    return (0, S.jsxs)(
        "li",
        {
            className: gj.Hp,
            children: [
                (0, S.jsxs)("div", {
                    className: gj.YL,
                    children: [
                        (0, S.jsx)(c9, {
                            className: gj.W6,
                            hasCooldown: t.isOnCooldown(),
                            isCanceled: d,
                            useReducedMotion: a,
                        }),
                        d && null != s
                            ? (0, S.jsx)(k.E, {
                                  color: "text-muted",
                                  variant: "text-sm/medium",
                                  children: g.intl.format(g.t.Z4ULRD, { date: s.currentPeriodEnd }),
                              })
                            : t.isOnCooldown() && null != o
                              ? (0, S.jsx)(c5, { cooldown: o.getTime() })
                              : (0, S.jsx)(k.E, {
                                    className: gj.__invalid_unappliedGuildBoostSlotDescription,
                                    color: "text-muted",
                                    variant: "text-sm/medium",
                                    children: g.intl.string(g.t["2mcafz"]),
                                }),
                    ],
                }),
                (0, S.jsxs)("div", {
                    className: gj.E7,
                    children: [
                        n &&
                            !d &&
                            (0, S.jsx)(gA.A, {
                                shouldShow: u,
                                text: c,
                                "aria-label": c.toString(),
                                children: (e) =>
                                    (0, S.jsx)("div", {
                                        className: gj.LB,
                                        children: (0, S.jsx)(B.Q, {
                                            ...e,
                                            variant: "primary",
                                            text: g.intl.string(g.t.twFU3R),
                                            onClick: () => i(t),
                                            disabled: u,
                                            size: "sm",
                                        }),
                                    }),
                            }),
                        d &&
                            (0, S.jsx)(gA.A, {
                                shouldShow: u,
                                text: c,
                                "aria-label": c.toString(),
                                children: (e) =>
                                    (0, S.jsx)("div", {
                                        className: gj.LB,
                                        children: (0, S.jsx)(B.Q, {
                                            ...e,
                                            variant: "primary",
                                            text: g.intl.string(g.t["2glQNp"]),
                                            onClick: () => l(t),
                                            disabled: u,
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
    (0, b.openModalLazy)(async () => (t) => (0, S.jsx)(gI.default, { ...t, guildBoostSlot: e }));
}
function gL(e) {
    (0, b.openModalLazy)(async () => (t) => (0, S.jsx)(gv.default, { ...t, guildBoostSlotId: e.id }));
}
let gD = function (e) {
    let t,
        n,
        i,
        { guildBoostSlots: l } = e,
        s = (0, O.bG)([us.A], () => us.A.getPremiumTypeSubscription()),
        a = s?.isPausedOrPausePending === !0,
        { fractionalState: r } = (0, cf.A)(),
        o = (0, O.bG)([nH.A], () => nH.A.useReducedMotion),
        d = (0, O.bG)([t5.default], () => t5.default.getCurrentUser()),
        u = r === lf.xc.FP_SUB_PAUSED,
        c = a && !u,
        {
            appliedGuildBoostSlots: _,
            unappliedGuildBoostSlots: m,
            numActiveGuildBoostSlots: h,
            hasCooldownBoosts: A,
            allGuildBoostsAreOnCooldown: p,
        } = x.useMemo(() => {
            let e = [],
                t = [],
                n = 0,
                i = !1,
                s = !0;
            return (
                l.forEach((l) => {
                    !(0, c$.I5)(l) && n++,
                        l.isOnCooldown() ? (i = !0) : (s = !1),
                        null != l.premiumGuildSubscription ? e.push(l) : t.push(l);
                }),
                {
                    appliedGuildBoostSlots: e,
                    unappliedGuildBoostSlots: t,
                    numActiveGuildBoostSlots: n,
                    hasCooldownBoosts: i,
                    allGuildBoostsAreOnCooldown: s,
                }
            );
        }, [l]),
        T = null != s ? oG.Ay.getNumIncludedPremiumGuildSubscriptionSlots(s.planId) : 0,
        E = Math.max(0, T - _.length),
        f = h > T,
        N = T === l.length,
        C = N ? E : 1,
        I = x.useMemo(() => {
            let e = [];
            for (let t = 0; t < C; t++) e.push((0, S.jsx)(c8, { className: gj.YA, useReducedMotion: o }, t));
            return e;
        }, [C, o]),
        v = x.useMemo(() => m.find((e) => e.isAvailable()), [m]);
    if (0 === m.length) return null;
    let y = m.length;
    if (
        ((t = N
            ? g.intl.formatToPlainString(p ? g.t["3DW6Dc"] : g.t["/u15Qc"], { numUnappliedGuildBoostSlots: y })
            : g.intl.formatToPlainString(p ? g.t["3DW6Dc"] : g.t.BPadnO, { numUnappliedGuildBoostSlots: y })),
        oG.Ay.isPremium(d))
    ) {
        let e = (e, t) =>
            (0, S.jsx)(
                U.D,
                {
                    className: gj.nw,
                    tag: "span",
                    onClick: () => {
                        (0, gy.e)();
                    },
                    children: e,
                },
                t,
            );
        n = p
            ? g.intl.format(g.t.omcpSE, { learnMoreHook: e })
            : g.intl.format(g.t["5mAkVi"], { numUnappliedGuildBoostSlots: y, learnMoreHook: e });
    } else
        n = p
            ? g.intl.string(g.t["8pcUZi"])
            : g.intl.formatToPlainString(g.t.Kaw82o, { numUnappliedGuildBoostSlots: y });
    return (
        (i = a && r === lf.xc.NONE ? g.intl.string(g.t.mOWsF1) : g.intl.string(g.t.xr4m5B)),
        (0, S.jsx)("div", {
            className: gj.iE,
            children: (0, S.jsxs)("div", {
                className: ew()(gj.Qs, [gj.Yq]),
                children: [
                    (0, S.jsxs)("div", {
                        className: gj.wx,
                        children: [
                            (0, S.jsxs)("div", {
                                className: gj.RW,
                                children: [
                                    (0, S.jsx)("div", { className: gj.PS, children: I }),
                                    (0, S.jsxs)("div", {
                                        className: gj.__invalid_headerCopy,
                                        children: [
                                            (0, S.jsx)(em.D, {
                                                className: gj.gg,
                                                variant: "heading-lg/bold",
                                                children: t,
                                            }),
                                            (0, S.jsx)(k.E, {
                                                className: gj.__invalid_headerSubheading,
                                                color: "text-strong",
                                                variant: "text-sm/normal",
                                                children: n,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, S.jsx)("div", {
                                className: gj.di,
                                children: (0, S.jsx)(gA.A, {
                                    shouldShow: null == v || c,
                                    text: i,
                                    "aria-label": i.toString(),
                                    children: (e) =>
                                        (0, S.jsx)(eh.$, {
                                            variant: "primary",
                                            text: g.intl.string(g.t.BMx1iy),
                                            ...e,
                                            disabled: null == v || c,
                                            onClick:
                                                null != v
                                                    ? () => {
                                                          (0, b.openModalLazy)(
                                                              async () => (e) =>
                                                                  (0, S.jsx)(gC.default, {
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
                    (!N || A) &&
                        (0, S.jsx)("ul", {
                            className: gj.LU,
                            children: m.map((e) =>
                                (0, S.jsx)(
                                    gO,
                                    {
                                        guildBoostSlot: e,
                                        isCancellable: f,
                                        onCancel: gR,
                                        onUncancel: gL,
                                        premiumSubscription: s,
                                        useReducedMotion: o,
                                        fractionalState: r,
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
var gG = n(669561);
function gP(e) {
    let { premiumSubscription: t } = e,
        n = (0, O.bG)([cW.A], () => cW.A.boostSlots),
        i = x.useMemo(() => Object.values(n), [n]),
        l = (0, O.bG)([t5.default], () => t5.default.getCurrentUser()),
        s = oG.Ay.isPremium(l, lf.PremiumTypes.TIER_2),
        a = (0, O.bG)([cK.A], () => cK.A.affinities),
        r = (0, O.bG)([K.Ay], () => K.Ay.getFlattenedGuildIds()),
        o = a.length > 0 || r.length > 0,
        d = i.length > 0,
        u = x.useMemo(() => i.filter((e) => null != e.premiumGuildSubscription), [i]),
        c = u.length > 0,
        g = i.length > u.length,
        _ = (0, O.bG)([cx.A], () => cx.A.getCurrentUserAppliedBoosts()),
        { fractionalState: m } = (0, cf.A)({ forceFetch: !0 }),
        h = l?.isPremiumGroupMember(),
        A = t?.isPausedOrPausePending === !0 && m === lf.xc.NONE,
        p = t?.isPausedOrPausePending !== !0 && m === lf.xc.NONE && !h,
        T = s && m === lf.xc.FP_SUB_PAUSED,
        E = m === lf.xc.NONE && !h;
    return (0, S.jsxs)("div", {
        className: gG.GO,
        children: [
            (0, S.jsx)(uE.kb, { className: gG.ek }),
            (0, S.jsx)(gg, { hasGuildBoostSlots: d, hasAppliedGuildBoosts: c, hasBoostPerk: T, canAddBoosts: p }),
            E &&
                (0, S.jsx)(gN, {
                    hasAppliedGuildBoosts: c,
                    hasBoostPerk: T,
                    hasGuildAffinitiesOrInGuild: o,
                    subscriptionIsPausedOrPausePending: A,
                }),
            h && (0, S.jsx)(cH.A, {}),
            !o && (0, S.jsx)(gh, {}),
            t?.isPaused && m !== lf.xc.FP_SUB_PAUSED
                ? (0, S.jsx)(gd, { appliedGuildBoosts: _, premiumSubscription: t })
                : (0, S.jsx)(gu, { guildBoostSlots: n, premiumSubscription: t }),
            (0, S.jsx)(gD, { guildBoostSlots: i, fractionalPremiumState: m }),
            (0, S.jsx)(gf, { canAddBoosts: c && p, canApplyBoosts: g }),
            (0, S.jsx)(cY, { className: gG.e4, hideHeading: !0, hideTier0: !0 }),
            (0, S.jsx)(cj, { cardClassName: gG.KW }),
            (0, S.jsx)(cG, { className: gG.JL }),
        ],
    });
}
var gM = n(527113),
    gU = n(365199),
    gk = n(102320);
function gV(e) {
    let { guild: t, className: n } = e,
        { total: i } = (0, gt.A)(t.id);
    return (0, S.jsxs)("div", {
        className: n ?? gk.OA,
        children: [
            (0, S.jsx)(c7.Ay, { className: gk.$f, guild: t, size: c7.Ay.Sizes.MEDIUM }),
            (0, S.jsxs)("div", {
                className: gk.gI,
                children: [
                    (0, S.jsx)(k.E, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        tag: "span",
                        children: t.name,
                    }),
                    (0, S.jsxs)("div", {
                        className: gk.ew,
                        children: [
                            (0, S.jsxs)("div", {
                                className: gk.QW,
                                children: [
                                    (0, S.jsx)(cA._, {
                                        className: gk.Wz,
                                        color: w.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH,
                                    }),
                                    (0, S.jsx)(k.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: g.intl.format(g.t["pob/cL"], { subscriptions: i }),
                                    }),
                                ],
                            }),
                            t.premiumTier !== q.TVA.NONE &&
                                (0, S.jsxs)(S.Fragment, {
                                    children: [
                                        (0, S.jsx)("div", { className: gk.zk }),
                                        (0, S.jsx)(k.E, {
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
        n = (0, O.bG)([H.A], () => H.A.getGuild(t), [t]);
    return null == n
        ? null
        : (0, S.jsxs)("div", {
              className: gk.Nr,
              children: [
                  (0, S.jsx)(gV, { guild: n }),
                  (0, S.jsx)(eh.$, {
                      variant: "secondary",
                      size: "sm",
                      icon: cA._,
                      text: g.intl.string(g.t.aBHecF),
                      onClick: () => {
                          (0, gT.g)({
                              analyticsLocations: [],
                              analyticsLocation: {
                                  page: q.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                  section: q.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                  object: q.ZSU.BUTTON_CTA,
                                  objectType: q.AnalyticsObjectTypes.BUY,
                              },
                              guild: n,
                          });
                      },
                  }),
              ],
          });
}
var gB = n(538888);
let gF =
    "https://cdn.discordapp.com/assets/content/272d3fa6496aedb9dee76f2d555913bfd56c9e9aacd6de3c18449644d9749657.png";
function gz(e) {
    let { slot: t, guildTier: n, premiumSubscription: i, hasCancelableSlots: l, isLast: s } = e,
        a = x.useRef(null),
        r = (0, c$.I5)(t),
        o = x.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t.cooldownEndsAt]),
        d = null != o && o > new Date(),
        u = (0, cf.A)(),
        c = x.useMemo(
            () =>
                (function (e, t) {
                    if (null == e || e === q.TVA.NONE) return "";
                    let n = [
                        g.intl.formatToPlainString(g.t["dLlKX/"], { numEmojiSlots: lf.TG[e].limits.emoji }),
                        g.intl.formatToPlainString(g.t["+ANIfv"], { numStickerSlots: lf.TG[e].limits.stickers }),
                        g.intl.formatToPlainString(g.t["4gt60b"], {
                            numSoundboardSlots: lf.TG[e].limits.soundboardSounds,
                        }),
                        g.intl.formatToPlainString(g.t.XahSjZ, {
                            resolution: lf.TG[e].limits.screenShareQualityResolution,
                            framerate: lf.TG[e].limits.screenShareQualityFramerate,
                        }),
                        g.intl.formatToPlainString(g.t.NbNs7S, { bitrate: lf.TG[e].limits.bitrate / 1e3 }),
                        g.intl.formatToPlainString(g.t.VVKcpn, { filesize: lf.TG[e].limits.fileSize / 1024 / 1024 }),
                        g.intl.formatToPlainString(g.t.TbpCvv, { numVideoStageSeats: lf.TG[e].limits.stageVideoUsers }),
                        g.intl.string(g.t.LDyX3i),
                        g.intl.string(g.t.YtGlPW),
                    ];
                    e >= q.TVA.TIER_2 && (n.push(g.intl.string(g.t.SztbtN)), n.push(g.intl.string(g.t["3GK91n"]))),
                        e >= q.TVA.TIER_3 && n.push(g.intl.string(g.t["XUUJd+"]));
                    let i = 0;
                    for (let e = 0; e < t.length; e++) i = (31 * i + t.charCodeAt(e)) | 0;
                    let l = n[Math.abs(i) % n.length];
                    return g.intl.formatToPlainString(g.t["/dOAmQ"], { perk: l });
                })(n, t.id),
            [n, t.id],
        ),
        _ = x.useMemo(() => {
            if ("" !== c) return c;
            let e = null != t.premiumGuildSubscription ? dX.default.extractTimestamp(t.premiumGuildSubscription.id) : 0;
            return g.intl.formatToPlainString(g.t.lY2Bur, { date: new Date(e) });
        }, [c, t.premiumGuildSubscription]),
        m = x.useMemo(
            () => (r ? (i.isPausedForFractionalPremium ? u.endsAt.toDate() : i.currentPeriodEnd) : null),
            [r, i, u],
        );
    return (0, S.jsxs)("div", {
        className: ew()(gB.iq, { [gB.Mt]: s }),
        children: [
            (0, S.jsxs)("div", {
                className: gB.kd,
                children: [
                    (0, S.jsx)("img", { alt: "", className: gB.bB, src: gF }),
                    r && null != m
                        ? (0, S.jsx)(k.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: g.intl.format(g.t.Z4ULRD, { date: m }),
                          })
                        : (0, S.jsxs)(S.Fragment, {
                              children: [
                                  (0, S.jsx)(k.E, { variant: "text-sm/medium", color: "text-subtle", children: _ }),
                                  d &&
                                      null != o &&
                                      (0, S.jsxs)(S.Fragment, {
                                          children: [
                                              (0, S.jsx)("div", { className: gB.zk }),
                                              (0, S.jsx)(k.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-feedback-info",
                                                  children: g.intl.formatToPlainString(g.t.YJlswH, {
                                                      date: o.toLocaleDateString(),
                                                  }),
                                              }),
                                          ],
                                      }),
                                  !d &&
                                      null != i.trialEndsAt &&
                                      (0, S.jsxs)(S.Fragment, {
                                          children: [
                                              (0, S.jsx)("div", { className: gB.zk }),
                                              (0, S.jsx)(k.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-feedback-warning",
                                                  children: g.intl.formatToPlainString(g.t.OdPSpk, {
                                                      date: new Date(i.trialEndsAt).toLocaleDateString(),
                                                  }),
                                              }),
                                          ],
                                      }),
                              ],
                          }),
                ],
            }),
            (0, S.jsx)(G.Y, {
                targetElementRef: a,
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, S.jsx)(c0, {
                        onClose: n,
                        guildBoostSlot: t,
                        premiumSubscription: i,
                        hasCancelableGuildBoostSlot: l,
                        fractionalState: u.fractionalState,
                    });
                },
                position: "right",
                align: "center",
                children: (e) =>
                    (0, S.jsx)(U.D, {
                        innerRef: a,
                        "aria-label": g.intl.string(g.t.PdRCRg),
                        className: gB.Mj,
                        ...e,
                        children: (0, S.jsx)(gU.j, { size: "xs", color: w.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                    }),
            }),
        ],
    });
}
function gX(e) {
    let { guildId: t, slots: n, premiumSubscription: i, hasCancelableSlots: l } = e,
        s = (0, O.bG)([H.A], () => H.A.getGuild(t), [t]);
    return (0, S.jsxs)("div", {
        className: gB.Nr,
        children: [
            (0, S.jsx)("div", {
                className: gB.MY,
                children:
                    null != s
                        ? (0, S.jsxs)(S.Fragment, {
                              children: [
                                  (0, S.jsx)(gV, { guild: s, className: gB.OA }),
                                  (0, S.jsx)(eh.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: g.intl.string(g.t.KLOhbO),
                                      onClick: () => {
                                          (0, lp.default)(),
                                              (0, c6.K4)({
                                                  guildId: s.id,
                                                  location: {
                                                      section: q.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA,
                                                  },
                                              });
                                      },
                                  }),
                              ],
                          })
                        : (0, S.jsx)("div", {
                              className: gB.OA,
                              children: (0, S.jsx)(em.D, {
                                  variant: "heading-md/semibold",
                                  color: "text-default",
                                  children: g.intl.string(g.t["6Kwwuo"]),
                              }),
                          }),
            }),
            n.map((e, t) =>
                (0, S.jsx)(
                    gz,
                    {
                        slot: e,
                        guildTier: s?.premiumTier,
                        premiumSubscription: i,
                        hasCancelableSlots: l,
                        isLast: t === n.length - 1,
                    },
                    e.id,
                ),
            ),
        ],
    });
}
function gY(e) {
    let { guildBoostSlots: t, premiumSubscription: n, pausedAppliedGuildBoosts: i, isPaused: l } = e,
        { boostsByGuildId: s, numActiveSlots: a } = x.useMemo(() => {
            if (l && null != n)
                return {
                    boostsByGuildId: (function (e, t) {
                        let n = {};
                        for (let t of e) t.guildId in n || (n[t.guildId] = []), n[t.guildId].push(t);
                        let i = {};
                        for (let e of Object.keys(n)) {
                            let l = n[e];
                            i[e] = l.map((n) =>
                                c1.A.createFromServer(
                                    {
                                        id: n.id,
                                        subscription_id: t.id,
                                        canceled: !1,
                                        premium_guild_subscription: { id: n.id, guild_id: e },
                                        cooldown_ends_at: null,
                                    },
                                    t,
                                ),
                            );
                        }
                        return i;
                    })(i, n),
                    numActiveSlots: 0,
                };
            let e = 0,
                s = {};
            for (let n of Object.keys(t)) {
                let i = t[n];
                if ((!(0, c$.I5)(i) && e++, null != i.premiumGuildSubscription)) {
                    let e = i.premiumGuildSubscription.guildId;
                    e in s || (s[e] = []), s[e].push(i);
                }
            }
            return { boostsByGuildId: s, numActiveSlots: e };
        }, [t, l, i, n]);
    if (null == n || 0 === Object.keys(s).length) return null;
    let r = a > oG.Ay.getNumIncludedPremiumGuildSubscriptionSlots(n.planId);
    return (0, S.jsx)("div", {
        className: gB.kR,
        children: dX.default
            .keys(s)
            .map((e) => (0, S.jsx)(gX, { guildId: e, slots: s[e], premiumSubscription: n, hasCancelableSlots: r }, e)),
    });
}
var gH = n(100345);
function gK(e) {
    let { guildBoostSlots: t, fractionalPremiumState: i } = e,
        l = (0, O.bG)([us.A], () => us.A.getPremiumTypeSubscription()),
        { unappliedSlots: s, numActiveSlots: a } = x.useMemo(() => {
            let e = [],
                n = 0;
            for (let i of t) !(0, c$.I5)(i) && n++, null == i.premiumGuildSubscription && e.push(i);
            return { unappliedSlots: e, numActiveSlots: n };
        }, [t]),
        r = a > (null != l ? oG.Ay.getNumIncludedPremiumGuildSubscriptionSlots(l.planId) : 0),
        o = l?.isPausedOrPausePending === !0 && i === lf.xc.NONE;
    return 0 === s.length
        ? null
        : (0, S.jsxs)("div", {
              className: gH.Nr,
              children: [
                  (0, S.jsxs)("div", {
                      className: gH.MY,
                      children: [
                          (0, S.jsxs)("div", {
                              className: gH._L,
                              children: [
                                  (0, S.jsxs)("div", {
                                      className: gH.MD,
                                      children: [
                                          (0, S.jsx)("img", { alt: "", className: gH.F8, src: gF }),
                                          (0, S.jsx)("div", {
                                              className: ew()(gH.qS, "theme-dark"),
                                              children: (0, S.jsx)("span", { className: gH.Vv, children: s.length }),
                                          }),
                                      ],
                                  }),
                                  (0, S.jsxs)("div", {
                                      className: gH.Qp,
                                      children: [
                                          (0, S.jsx)(k.E, {
                                              variant: "heading-md/semibold",
                                              color: "text-default",
                                              tag: "span",
                                              children: g.intl.format(g.t.BPadnO, {
                                                  numUnappliedGuildBoostSlots: s.length,
                                              }),
                                          }),
                                          (0, S.jsx)(k.E, {
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
                          (0, S.jsx)(gA.A, {
                              shouldShow: o,
                              text: g.intl.string(g.t.mOWsF1),
                              "aria-label": g.intl.string(g.t.mOWsF1),
                              children: (e) =>
                                  (0, S.jsx)(eh.$, {
                                      ...e,
                                      variant: "primary",
                                      size: "sm",
                                      icon: cA._,
                                      text: g.intl.string(g.t.BMx1iy),
                                      disabled: o,
                                      onClick: () => {
                                          (0, b.openModalLazy)(async () => {
                                              let { default: e } = await Promise.resolve().then(n.bind(n, 770101));
                                              return (t) =>
                                                  (0, S.jsx)(e, {
                                                      ...t,
                                                      onSelectGuild: (e) => {
                                                          t.onClose(),
                                                              (0, gT.g)({
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
                  s.map((e, t) =>
                      (0, S.jsx)(
                          gW,
                          {
                              slot: e,
                              isLast: t === s.length - 1,
                              isCancelable: r && !(0, c$.I5)(e),
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
        { slot: n, isLast: i, isCancelable: l, isCanceled: s, premiumSubscription: a, modificationsDisabled: r } = e,
        o = x.useRef(null),
        d = x.useMemo(() => (null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null), [n.cooldownEndsAt]);
    t =
        s && null != a
            ? (0, S.jsx)(k.E, {
                  variant: "text-sm/medium",
                  color: "text-subtle",
                  children: g.intl.format(g.t.Z4ULRD, { date: a.currentPeriodEnd }),
              })
            : n.isOnCooldown() && null != d
              ? (0, S.jsx)(c5, { cooldown: d.getTime() })
              : (0, S.jsx)(k.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: g.intl.string(g.t["2mcafz"]),
                });
    let u = l || s;
    return (0, S.jsxs)("div", {
        className: ew()(gH.iq, { [gH.Mt]: i }),
        children: [
            (0, S.jsxs)("div", {
                className: gH.kd,
                children: [(0, S.jsx)("img", { alt: "", className: gH.bB, src: gF }), t],
            }),
            u &&
                (0, S.jsx)(G.Y, {
                    targetElementRef: o,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, S.jsxs)(P.W, {
                            navId: "unapplied-boost-actions",
                            "aria-label": g.intl.string(g.t.ogxXGq),
                            onSelect: void 0,
                            onClose: t,
                            children: [
                                l &&
                                    (0, S.jsx)(M.Dr, {
                                        id: "cancel-boost",
                                        label: g.intl.string(g.t.twFU3R),
                                        color: "danger",
                                        disabled: r,
                                        subtext: r ? g.intl.string(g.t.mOWsF1) : void 0,
                                        action: () => {
                                            t(),
                                                (0, b.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, S.jsx)(gI.default, { ...e, guildBoostSlot: n }),
                                                );
                                        },
                                    }),
                                s &&
                                    (0, S.jsx)(M.Dr, {
                                        id: "uncancel-boost",
                                        label: g.intl.string(g.t["2glQNp"]),
                                        disabled: r,
                                        subtext: r ? g.intl.string(g.t.mOWsF1) : void 0,
                                        action: () => {
                                            t(),
                                                (0, b.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, S.jsx)(gv.default, { ...e, guildBoostSlotId: n.id }),
                                                );
                                        },
                                    }),
                            ],
                        });
                    },
                    align: "right",
                    position: "bottom",
                    children: (e) =>
                        (0, S.jsx)(U.D, {
                            innerRef: o,
                            "aria-label": g.intl.string(g.t["UKOtz+"]),
                            className: gH.Mj,
                            ...e,
                            children: (0, S.jsx)(gU.j, { size: "xs", color: w.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                        }),
                }),
        ],
    });
}
var gZ = n(800955);
function gq(e) {
    let {
            guildBoostSlots: t,
            guildBoostSlotsByGuildId: n,
            premiumSubscription: i,
            pausedAppliedGuildBoosts: l,
            fractionalPremiumState: s,
        } = e,
        a = tr.A.getArticleURL(q.MVz.GUILD_BOOSTING_FAQ),
        r = i?.isPaused === !0 && s !== lf.xc.FP_SUB_PAUSED,
        o = t.some((e) => null == e.premiumGuildSubscription),
        d = r && l.length > 0,
        u = r ? d : t.some((e) => null != e.premiumGuildSubscription);
    return o || u
        ? (0, S.jsxs)("div", {
              className: gZ.i,
              children: [
                  (0, S.jsxs)("div", {
                      className: gZ.b,
                      children: [
                          (0, S.jsx)(em.D, { variant: "heading-md/semibold", children: g.intl.string(g.t.W5rDjW) }),
                          (0, S.jsx)(k.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: g.intl.format(g.t.SpDz1x, { helpdeskArticle: a }),
                          }),
                      ],
                  }),
                  (0, S.jsx)(gY, {
                      guildBoostSlots: n,
                      premiumSubscription: i,
                      pausedAppliedGuildBoosts: l,
                      isPaused: r,
                  }),
                  (0, S.jsx)(gK, { guildBoostSlots: t, fractionalPremiumState: s }),
              ],
          })
        : null;
}
var gQ = n(917064),
    gJ = n(598259);
function g$() {
    return (0, S.jsxs)("div", {
        className: gJ.iE,
        children: [
            (0, S.jsx)(em.D, { variant: "heading-xl/normal", children: g.intl.string(g.t.IzKs3o) }),
            (0, S.jsx)("div", {
                className: gJ.kR,
                children: gQ.s.map((e, t) => {
                    let n = e.icon;
                    return (0, S.jsxs)(
                        "div",
                        {
                            className: gJ.Nr,
                            children: [
                                (0, S.jsx)(n, { className: gJ.Kk }),
                                (0, S.jsx)(k.E, {
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
var g0 = n(232122),
    g1 = n(420469);
function g2() {
    let [e, t] = x.useState(null),
        [n, i] = x.useState(null);
    return (0, S.jsxs)("div", {
        className: g1.iE,
        children: [
            (0, S.jsx)(em.D, { variant: "heading-xl/normal", children: g.intl.string(g.t.HPJ6Nj) }),
            (0, S.jsx)("ul", {
                className: g1.p_,
                children: g0.m.map((l, s) => {
                    let a = e === s,
                        r = n === s,
                        o = a || r ? "text-strong" : "text-muted";
                    return (0, S.jsxs)(
                        U.D,
                        {
                            tag: "li",
                            className: ew()(g1.Aw, { [g1.$K]: a }),
                            onClick: () => t((e) => (e === s ? null : s)),
                            onMouseEnter: () => i(s),
                            onMouseLeave: () => i(null),
                            children: [
                                (0, S.jsxs)("div", {
                                    className: g1.k7,
                                    children: [
                                        (0, S.jsx)(k.E, {
                                            className: g1.b1,
                                            color: o,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: l.getQuestion(),
                                        }),
                                        (0, S.jsx)(V.a, {
                                            size: "sm",
                                            color: w.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: g1.q4,
                                            style: { transform: a ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                a &&
                                    (0, S.jsx)(k.E, {
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
var g5 = n(182859),
    g3 = n(853513),
    g8 = n(849744);
function g4() {
    let e = tr.A.getArticleURL(q.MVz.GUILD_SUBSCRIPTIONS);
    return (0, S.jsxs)("div", {
        className: g8.wx,
        children: [
            (0, S.jsxs)("div", {
                className: g8.Qs,
                children: [
                    (0, S.jsxs)("div", {
                        className: g8.B5,
                        children: [
                            (0, S.jsx)("img", { alt: "", className: g8.F8, src: "/assets/263e4cc9043cab70.svg" }),
                            (0, S.jsx)(em.D, {
                                variant: "heading-xl/normal",
                                children: g.intl.string(g3.default.hjvcLO),
                            }),
                        ],
                    }),
                    (0, S.jsx)(k.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: g.intl.format(g.t.TUHyoA, { helpdeskArticle: e }),
                    }),
                ],
            }),
            (0, S.jsx)(g5.A, {
                variant: "member",
                className: g8.iO,
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
var g9 = n(315629),
    g7 = n(397384);
function g6() {
    let e = (0, O.bG)([t5.default], () => t5.default.getCurrentUser());
    if (null == e || oG.Ay.hasFreeBoosts(e)) return null;
    let t = tr.A.getArticleURL(q.MVz.GUILD_BOOSTING_FAQ);
    return (0, S.jsxs)(g9.h, {
        color: "nitro-pink",
        className: g7.vK,
        children: [
            (0, S.jsxs)("div", {
                className: g7.nw,
                children: [
                    (0, S.jsx)("img", { alt: "", className: g7.q3, src: gF }),
                    (0, S.jsxs)("div", {
                        className: g7.Tm,
                        children: [
                            (0, S.jsx)(k.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: g.intl.format(g.t.Idh1Vs, { count: lf.M4, boostCount: lf.M4 }),
                            }),
                            (0, S.jsxs)("div", {
                                className: g7.xv,
                                children: [
                                    (0, S.jsx)(oC.t, { className: g7.nE }),
                                    (0, S.jsx)(k.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: g.intl.format(g.t["6UAu+f"], {
                                            count: lf.M4,
                                            boostCount: lf.M4,
                                            helpdeskArticle: t,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, S.jsx)(eh.$, {
                variant: "expressive",
                size: "sm",
                icon: oC.t,
                text: g.intl.string(g.t["8x0jKT"]),
                onClick: gy.e,
            }),
        ],
    });
}
var _e = n(942300);
function _t() {
    let e = (0, O.bG)([cK.A], () => cK.A.affinities),
        t = (0, O.bG)([K.Ay], () => K.Ay.getFlattenedGuildIds()),
        n = x.useMemo(() => {
            let n = e.slice(0, 3).map((e) => e.guildId);
            for (let e = 0; e < t.length && n.length < 3; e++) {
                let i = t[e];
                n.includes(i) || n.push(i);
            }
            return n;
        }, [e, t]);
    return 0 === n.length
        ? null
        : (0, S.jsxs)("div", {
              className: _e.i,
              children: [
                  (0, S.jsx)(em.D, { variant: "heading-md/semibold", children: g.intl.string(g.t.r90Wgo) }),
                  (0, S.jsx)("div", { className: _e.k, children: n.map((e) => (0, S.jsx)(gw, { guildId: e }, e)) }),
              ],
          });
}
var _n = n(901851);
function _i(e) {
    let { count: t, disabledReason: i } = e,
        l = tr.A.getArticleURL(q.MVz.GUILD_BOOSTING_FAQ);
    return (0, S.jsxs)(g9.h, {
        color: "nitro-pink",
        className: _n.vK,
        children: [
            (0, S.jsxs)("div", {
                className: _n.nw,
                children: [
                    (0, S.jsxs)("div", {
                        className: _n.MD,
                        children: [
                            (0, S.jsx)("img", { alt: "", className: _n.F8, src: gF }),
                            (0, S.jsx)("div", {
                                className: ew()(_n.qS, "theme-dark"),
                                children: (0, S.jsx)("span", { className: _n.Vv, children: t }),
                            }),
                        ],
                    }),
                    (0, S.jsxs)("div", {
                        className: _n.Tm,
                        children: [
                            (0, S.jsx)(k.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: g.intl.format(g.t.KewnLu, { count: t, boostCount: t }),
                            }),
                            (0, S.jsxs)("div", {
                                className: _n.xv,
                                children: [
                                    (0, S.jsx)(oC.t, { className: _n.nE }),
                                    (0, S.jsx)(k.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: g.intl.format(g.t["6UAu+f"], {
                                            count: lf.M4,
                                            boostCount: lf.M4,
                                            helpdeskArticle: l,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, S.jsx)(gA.A, {
                shouldShow: null != i,
                text: i ?? "",
                "aria-label": i,
                children: (e) =>
                    (0, S.jsx)(eh.$, {
                        ...e,
                        variant: "primary",
                        size: "sm",
                        icon: cA._,
                        text: g.intl.string(g.t.BMx1iy),
                        disabled: null != i,
                        onClick: () => {
                            (0, b.openModalLazy)(async () => {
                                let { default: e } = await Promise.resolve().then(n.bind(n, 770101));
                                return (t) =>
                                    (0, S.jsx)(e, {
                                        ...t,
                                        onSelectGuild: (e) => {
                                            t.onClose(),
                                                (0, gT.g)({
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
function _l(e) {
    let { premiumSubscription: t } = e,
        n = (0, O.bG)([cW.A], () => cW.A.boostSlots),
        i = x.useMemo(() => Object.values(n), [n]),
        l = (0, O.bG)([t5.default], () => t5.default.getCurrentUser()),
        s = (0, O.bG)([cK.A], () => cK.A.affinities),
        a = (0, O.bG)([K.Ay], () => K.Ay.getFlattenedGuildIds()),
        r = s.length > 0 || a.length > 0,
        o = x.useMemo(() => i.filter((e) => null != e.premiumGuildSubscription), [i]).length,
        d = (0, O.bG)([cx.A], () => cx.A.getCurrentUserAppliedBoosts()),
        { fractionalState: u } = (0, cf.A)({ forceFetch: !0 }),
        c = l?.isPremiumGroupMember(),
        _ = t?.isPausedOrPausePending === !0 && u === lf.xc.NONE,
        m = x.useMemo(() => i.some((e) => null == e.premiumGuildSubscription && e.isAvailable()), [i]),
        h = _ ? g.intl.string(g.t.mOWsF1) : m ? void 0 : g.intl.string(g.t.xr4m5B),
        A = x.useMemo(() => {
            if (null == t) return 0;
            let e = oG.Ay.getNumIncludedPremiumGuildSubscriptionSlots(t.planId);
            return 0 === e || e !== i.length ? 0 : Math.max(0, e - o);
        }, [t, i.length, o]);
    return (0, S.jsxs)("div", {
        className: gG.GO,
        children: [
            (0, S.jsx)(uE.kb, { className: gG.ek }),
            (0, S.jsx)(g4, {}),
            (0, S.jsx)(g6, {}),
            A > 0 && (0, S.jsx)(_i, { count: A, disabledReason: h }),
            c && (0, S.jsx)(cH.A, {}),
            !r && (0, S.jsx)(gh, {}),
            (0, S.jsxs)("div", {
                className: gG.C_,
                children: [
                    (0, S.jsx)(gq, {
                        guildBoostSlots: i,
                        guildBoostSlotsByGuildId: n,
                        premiumSubscription: t,
                        pausedAppliedGuildBoosts: d,
                        fractionalPremiumState: u,
                    }),
                    (0, S.jsx)(_t, {}),
                    (0, S.jsx)(gM.A, { hideHeading: !0, hideTier0: !0 }),
                    (0, S.jsx)(g$, {}),
                    (0, S.jsx)(g2, {}),
                ],
            }),
        ],
    });
}
var _s = n(752606);
let _a = (0, o.E2)(d.X.PREMIUM_GUILD_SUBSCRIPTIONS_SETTING, {
        Component: function () {
            let e = cS.useConfig({ location: "UserSettingsPremiumGuildSubscriptions" }).enabled;
            x.useEffect(() => {
                i3.h.wait(() => {
                    dV.hP(), dV.$o(), (0, cp.CD)(), (0, cT.zS)(null, null, q.tF5.DISCOVERY), (0, cp.tO)(!0);
                });
            }, []);
            let { hasFetchedSubscriptions: t, premiumSubscription: n } = (0, O.cf)([us.A], () => ({
                    hasFetchedSubscriptions: us.A.hasFetchedSubscriptions(),
                    premiumSubscription: us.A.getPremiumTypeSubscription(),
                })),
                i = (0, cE.Y)(),
                l = (0, O.bG)([ul.A], () => ul.A.hasFetchedPaymentSources),
                s = (0, O.bG)([cx.A], () => cx.A.isFetchingCurrentUserAppliedBoosts),
                a = !t || !i || !l || s,
                [r, o] = x.useState(!1);
            return (a || r || o(!0), a && !r)
                ? (0, S.jsx)("div", { className: ew()(_s.kL, _s.Lq), children: (0, S.jsx)(dM.y, {}) })
                : (0, S.jsxs)("div", {
                      className: _s.kL,
                      children: [
                          (0, S.jsx)("div", { className: _s.Tp }),
                          (0, S.jsx)("div", {
                              className: _s.Qs,
                              children: e
                                  ? (0, S.jsx)(_l, { premiumSubscription: n })
                                  : (0, S.jsx)(gP, { premiumSubscription: n }),
                          }),
                      ],
                  });
        },
        useSearchTerms: () => [g.intl.string(g.t["+CbP2v"]), g.intl.string(g.t.Nn1lJy)],
    }),
    _r = (0, o.zZ)(d.X.PREMIUM_GUILD_SUBSCRIPTIONS_CATEGORY, { buildLayout: () => [_a] }),
    _o = (0, o.t_)(d.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        useTitle: () => g.intl.string(g.t["+CbP2v"]),
        buildLayout: () => [_r],
    }),
    _d = (0, o.i4)(d.X.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["+CbP2v"]),
        icon: cA._,
        buildLayout: () => [_o],
    });
var _u = n(153659),
    _c = n(155984),
    _g = n(262077),
    __ = n(696986),
    _m = n(819411);
function _h(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, S.jsxs)("div", {
        children: [
            (0, S.jsx)(em.D, { variant: "heading-md/bold", children: g.intl.string(g.t["KzCF/6"]) }),
            (0, S.jsx)(__.h, { size: 4 }),
            (0, S.jsx)(k.E, { variant: "text-md/normal", className: _m.yV, children: g.intl.string(g.t["3D7qCu"]) }),
            (0, S.jsx)(__.h, { size: 24 }),
            (0, S.jsxs)("div", {
                className: _m.Nr,
                children: [
                    (0, S.jsx)("img", { src: "/assets/5a420feed295b595.svg", alt: "", className: _m.RI }),
                    (0, S.jsxs)("div", {
                        className: _m.FS,
                        children: [
                            (0, S.jsx)(em.D, {
                                variant: "heading-xl/semibold",
                                className: _m.wx,
                                children: g.intl.string(g.t["KzCF/6"]),
                            }),
                            (0, S.jsx)(k.E, {
                                variant: "text-md/normal",
                                className: _m.h_,
                                children: g.intl.format(g.t["m+pcOO"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, S.jsx)(eh.$, {
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
var _A = n(872351),
    _p = n(9113),
    _T = n(599941),
    _E = n(384684),
    _S = n(2242);
let _x = [];
var _f = n(912851),
    _b = n(369176);
let _N = (e) => {
    let { label: t, onClick: n, submitting: i } = e;
    return (0, S.jsx)(U.D, {
        onClick: i ? void 0 : n,
        className: _b.x6,
        children: (0, S.jsxs)("div", {
            className: _b.hQ,
            children: [
                i
                    ? (0, S.jsx)(dM.y, { type: dM.y.Type.PULSING_ELLIPSIS, className: _b.__invalid_spinner })
                    : (0, S.jsx)(k.E, { variant: "text-md/medium", className: _b.Pf, children: t }),
                (0, S.jsx)(V.a, { size: "md", color: "currentColor", className: _b.UE }),
            ],
        }),
    });
};
var _C = n(465932),
    _I = n(543767),
    _v = n(420139),
    _y = n(790284),
    _j = n(636194),
    _O = n(624456),
    _R = n(710144),
    _L = n(815332),
    _D = n(817649),
    _G = n(969389);
let _P = (e) => {
    let { transitionState: t, groupListing: n, listing: i, subscription: l, onClose: s } = e,
        a = (0, lS.GV)(),
        { analyticsLocations: r } = (0, iM.Ay)(eU.A.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL),
        {
            cancelSubscription: o,
            error: d,
            submitting: u,
        } = ((e) => {
            let [t, n] = x.useState(!1),
                [i, l] = x.useState(null);
            return {
                cancelSubscription: async (t) => {
                    try {
                        return n(!0), await dV.M2(t, e), !0;
                    } catch (e) {
                        l(e);
                    } finally {
                        n(!1);
                    }
                },
                error: i,
                submitting: t,
            };
        })(r),
        c = async () => {
            (await o(l.id)) && s();
        },
        _ = i.role_benefits.benefits.filter((e) => e.ref_type === _S.bN.CHANNEL),
        m = i.role_benefits.benefits.filter((e) => e.ref_type === _S.bN.INTANGIBLE),
        h = aN()(l.currentPeriodEnd).format("MMMM Do, YYYY"),
        A = g.intl.formatToPlainString(g.t.KsMRP5, {
            numChannels: _.length,
            numAdditionalBenefits: m.length,
            subscriptionEndDate: h,
        });
    return (0, S.jsx)(sG.Modal, {
        transitionState: t,
        "aria-labelledby": a,
        actions: [
            { text: g.intl.string(g.t.EP6EPb), variant: "secondary", onClick: s },
            { variant: "critical-primary", text: g.intl.string(g.t.F6lUDF), onClick: c, loading: u },
        ],
        title: g.intl.string(g.t.O6l5tM),
        subtitle: A,
        onClose: s,
        children: (0, S.jsxs)(R.B, {
            gap: 8,
            children: [
                null != d ? (0, S.jsx)(j.w, { type: "critical", children: d.message }) : null,
                (0, S.jsx)(_D.x, { listingId: i.id, guildId: n.guild_id, className: _G.P }),
            ],
        }),
    });
};
var _M = n(319225),
    _U = n(746080),
    _k = n(47685);
let _V = (e) => {
        let { label: t, value: n, showInfoIcon: i, infoIconTooltipText: l } = e;
        return (0, S.jsxs)("div", {
            className: _k.L0,
            children: [
                (0, S.jsxs)("div", {
                    className: _k.a5,
                    children: [
                        (0, S.jsx)(em.D, { variant: "heading-deprecated-12/semibold", className: _k.HU, children: t }),
                        i &&
                            (0, S.jsx)(e0.m, {
                                text: l,
                                children: (0, S.jsx)(sx.m, { size: "xs", color: "currentColor", className: _k.Mo }),
                            }),
                    ],
                }),
                (0, S.jsx)(em.D, { variant: "heading-xl/semibold", className: _k.sx, children: n }),
            ],
        });
    },
    _w = (e) => {
        let { subscription: t } = e,
            { analyticsLocations: n } = (0, iM.Ay)(),
            [i] = (0, _I.Kq)({
                subscriptionId: t.id,
                renewal: !0,
                analyticsLocations: n,
                analyticsLocation: eU.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
            }),
            l = (0, O.bG)([ul.A], () => ul.A.hasFetchedPaymentSources);
        return null != i && l
            ? (0, S.jsx)(_v.A, { subscription: t, currentInvoicePreview: i, dropdownClassName: _k.Nw })
            : (0, S.jsx)(dM.y, {});
    },
    _B = (e) => {
        let {
            isTrial: t,
            isCancelled: n,
            isResubscribing: i,
            shouldHideRoleSubscriptionEntryPoints: l,
            onCancelSubscriptionClick: s,
            onResubscribeClick: a,
            onChangePlanClick: r,
        } = e;
        return n && (t || l)
            ? null
            : (0, S.jsx)(lO.D, {
                  label: g.intl.string(g.t["4neDM+"]),
                  children: (0, S.jsx)("div", {
                      className: _k.__invalid_rowButtons,
                      children: n
                          ? (0, S.jsx)(eh.$, {
                                variant: "primary",
                                text: g.intl.string(g.t.y3mAE4),
                                onClick: a,
                                loading: i,
                            })
                          : (0, S.jsxs)(S.Fragment, {
                                children: [
                                    !t && !l && (0, S.jsx)(_N, { label: g.intl.string(g.t.FRbWR8), onClick: r }),
                                    (0, S.jsx)(_N, { label: g.intl.string(g.t.Dx0lF7), onClick: s }),
                                ],
                            }),
                  }),
              });
    },
    _F = (e) => {
        let { subscription: t } = e,
            {
                listing: n,
                groupListing: i,
                guild: l,
                expanded: s,
                handleToggleExpanded: a,
                subscriptionInfo: r,
            } = (function (e) {
                let t = (0, _O.M)(e),
                    n = (0, O.bG)([_j.A], () => _j.A.getSubscriptionListingForPlan(t)),
                    i = (0, O.bG)([_j.A], () =>
                        null != n ? _j.A.getSubscriptionGroupListingForSubscriptionListing(n.id) : null,
                    ),
                    l = (0, O.bG)([H.A], () => H.A.getGuild(i?.guild_id)),
                    [s, a] = x.useState(!1),
                    { fetchSubscriptionsSettings: r } = (0, _T.XE)();
                x.useEffect(() => {
                    s && null != l && null == _j.A.getSubscriptionSettings(l.id) && r(l.id);
                }, [s, l, r]);
                let o =
                    null == n
                        ? void 0
                        : (function (e) {
                              let { subscription: t } = e,
                                  n = aN()(t.currentPeriodEnd).format("M/D/YY"),
                                  i = null != t.price ? (0, dF.$g)(t.price, t.currency) : "",
                                  l = aN()(t.createdAt).format("M/D/YY"),
                                  s = t.status === q.Dmq.CANCELED,
                                  a = t.status === q.Dmq.PAST_DUE,
                                  r = t.hasActiveTrial;
                              return {
                                  memberSince: l,
                                  nextRenewalDate: n,
                                  nextRenewalLabel: s ? g.intl.string(g.t.UAfot2) : g.intl.string(g.t.CVjLcM),
                                  subscriptionPrice: i,
                                  isCancelled: s,
                                  isPastDue: a,
                                  isTrial: r,
                              };
                          })({ subscription: e });
                return {
                    guild: l,
                    expanded: s,
                    handleToggleExpanded: () => a((e) => !e),
                    listing: n,
                    groupListing: i,
                    subscriptionInfo: o,
                };
            })(t),
            [o, u] = x.useState(!1),
            c = (0, lS.GV)(),
            { analyticsLocations: _ } = (0, iM.Ay)(),
            { shouldHideGuildPurchaseEntryPoints: m } = (0, _C.MH)(l?.id),
            h = t?.isPurchasedViaAppleGeneric;
        if (null == i || null == n || null == r) return null;
        let A = async () => {
                try {
                    u(!0),
                        await dV.QP(t, _),
                        (0, _M.E)({ title: g.intl.string(g.t.oPV2cy), body: g.intl.string(g.t.DdRizV) });
                } finally {
                    u(!1);
                }
            },
            {
                isCancelled: p,
                isPastDue: T,
                subscriptionPrice: E,
                memberSince: f,
                nextRenewalDate: N,
                nextRenewalLabel: C,
                isTrial: I,
            } = r,
            v = n.soft_deleted || null == l || h;
        return (0, S.jsxs)("div", {
            className: _k.kL,
            children: [
                (0, S.jsx)(_R.A, {
                    onClick: a,
                    className: _k.N1,
                    children: (e) => {
                        let { areaRef: t, handleStopPropagation: i } = e;
                        return (0, S.jsxs)(S.Fragment, {
                            children: [
                                null != l && (0, S.jsx)(c7.Ay, { guild: l, active: !0, size: c7.Ay.Sizes.MEDIUM }),
                                (0, S.jsxs)("div", {
                                    className: _k.if,
                                    children: [
                                        (0, S.jsx)(k.E, {
                                            variant: "text-md/medium",
                                            className: _k.J5,
                                            children: null != l ? l.name : g.intl.string(g.t["He+cmd"]),
                                        }),
                                        (0, S.jsxs)("div", {
                                            className: _k.xp,
                                            children: [
                                                (0, S.jsx)(k.E, {
                                                    variant: "text-sm/normal",
                                                    className: _k.KR,
                                                    children: n.name,
                                                }),
                                                p
                                                    ? (0, S.jsx)(i7.Lp, { text: g.intl.string(g.t["7uFZGt"]) })
                                                    : I
                                                      ? (0, S.jsx)(i7.Lp, {
                                                            text: g.intl.string(g.t["6anton"]),
                                                            color: w.A.unsafe_rawColors.BRAND_500.css,
                                                        })
                                                      : T
                                                        ? (0, S.jsx)(e0.m, {
                                                              text: g.intl.string(g.t.eSuJE2),
                                                              children: (0, S.jsx)("div", {
                                                                  children: (0, S.jsx)(i7.Lp, {
                                                                      className: _k.qc,
                                                                      text: g.intl.string(g.t.NrRwIl),
                                                                      color: w.A.unsafe_rawColors.YELLOW_300.css,
                                                                  }),
                                                              }),
                                                          })
                                                        : null,
                                                h
                                                    ? (0, S.jsx)(e0.m, {
                                                          text: g.intl.string(g.t.nv1IqK),
                                                          children: (0, S.jsx)("div", {
                                                              children: (0, S.jsx)(i7.Lp, {
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
                                (0, S.jsx)(U.D, {
                                    onClick: i(a),
                                    "aria-label": g.intl.string(g.t.e5eQOy),
                                    "aria-controls": c,
                                    "aria-expanded": s,
                                    focusProps: { ringTarget: t },
                                    children: (0, S.jsx)(V.a, {
                                        size: "md",
                                        color: "currentColor",
                                        className: ew()(_k.D6, { [_k.S7]: s }),
                                    }),
                                }),
                            ],
                        });
                    },
                }),
                s
                    ? (0, S.jsxs)("div", {
                          id: c,
                          children: [
                              (0, S.jsx)("div", { className: _k.yF }),
                              (0, S.jsx)(_L.A, { groupListingId: i.id, subscription: t, className: _k.kE }),
                              (0, S.jsxs)("div", {
                                  className: _k.Zx,
                                  children: [
                                      (0, S.jsx)(_V, { label: C, value: N }),
                                      (0, S.jsx)(_V, {
                                          label: g.intl.string(g.t.dltUMH),
                                          value: E,
                                          showInfoIcon: I,
                                          infoIconTooltipText: I ? g.intl.string(g.t["/q6fpa"]) : void 0,
                                      }),
                                      (0, S.jsx)(_V, { label: g.intl.string(g.t.AOcwWB), value: f }),
                                  ],
                              }),
                              (0, S.jsx)(__.h, { size: 16 }),
                              !p &&
                                  !h &&
                                  (0, S.jsx)(lO.D, {
                                      label: g.intl.string(g.t.wmMFvA),
                                      children: (0, S.jsx)(_w, { subscription: t }),
                                  }),
                              !v &&
                                  (0, S.jsx)(_B, {
                                      isTrial: I,
                                      isCancelled: p,
                                      isResubscribing: o,
                                      shouldHideRoleSubscriptionEntryPoints: m,
                                      onCancelSubscriptionClick: () => {
                                          if (null != l) {
                                              var e;
                                              (e = { groupListing: i, listing: n, subscription: t }),
                                                  (0, b.openModal)((t) => (0, S.jsx)(_P, { ...t, ...e }));
                                          }
                                      },
                                      onChangePlanClick: () => {
                                          null != l &&
                                              ((0, lR.pX)(q.BVt.CHANNEL(l.id, _U.VV.ROLE_SUBSCRIPTIONS)),
                                              (0, lp.default)(),
                                              _f.A.show(
                                                  q.kqX.BACK_TO_PREVIOUS_SCREEN,
                                                  void 0,
                                                  g.intl.string(g.t.DvbaM4),
                                                  () => {
                                                      _y.A.setState({ subsection: iv.nR }),
                                                          (0, ey.openUserSettings)(d.X.SUBSCRIPTIONS_PANEL);
                                                  },
                                              ));
                                      },
                                      onResubscribeClick: A,
                                  }),
                          ],
                      })
                    : null,
            ],
        });
    };
var _z = n(170272);
let _X = (e) => {
    let { onGoBack: t } = e,
        n = (function () {
            let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t =
                    (0, O.bG)([_E.A], () =>
                        (function () {
                            let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [_E.A],
                                t = e.getGuildIdsWithPurchasableRoles(),
                                n = !1;
                            return (t.forEach((t) => {
                                e.getUserSubscriptionRoles(t).size > 0 && (n = !0);
                            }),
                            n)
                                ? _S.M_.SUBSCRIBED
                                : 0 === t.size
                                  ? _S.M_.NONE
                                  : _S.M_.IN_SUBSCRIPTION_SERVER;
                        })([_E.A]),
                    ) === _S.M_.SUBSCRIBED,
                n = (0, O.bG)([us.A], () => us.A.getActiveGuildSubscriptions()),
                i = x.useRef(!1);
            return (
                x.useEffect(() => {
                    (function (e) {
                        let { ensureFresh: t, hasFetched: n, hasRoleSubscriptions: i } = e,
                            l = us.A.getActiveGuildSubscriptions();
                        return (
                            ((l?.length ?? 0) === 0 && !!i) || (!!t && !n) || (!n && !us.A.hasFetchedSubscriptions())
                        );
                    })({ ensureFresh: e, hasRoleSubscriptions: t, hasFetched: i.current }) &&
                        ((i.current = !0), dV.hP());
                }, [e, t]),
                n ?? _x
            );
        })(),
        { loading: i } = (0, _T.eb)(n);
    return ((0, _p.A)(dY.Fr ? "role-subscriptions-user-setting" : void 0), i)
        ? (0, S.jsx)(dM.y, {})
        : 0 === n.length
          ? null
          : (0, S.jsxs)("div", {
                children: [
                    (0, S.jsx)(eh.$, { text: g.intl.string(g.t.hqyhKQ), icon: _A.z, variant: "secondary", onClick: t }),
                    (0, S.jsx)(__.h, { size: 10 }),
                    (0, S.jsx)(na.n, {
                        label: g.intl.string(g.t["KzCF/6"]),
                        description: g.intl.string(g.t["Y+ucR7"]),
                        children: (0, S.jsx)("div", {
                            className: _z.A,
                            children: n.map((e) => (0, S.jsx)(_F, { subscription: e }, e.id)),
                        }),
                    }),
                ],
            });
};
var _Y = n(327479),
    _H = n(334335);
function _K(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, S.jsxs)("div", {
        children: [
            (0, S.jsx)(em.D, { variant: "heading-md/bold", children: g.intl.string(g.t["48ywCu"]) }),
            (0, S.jsx)(__.h, { size: 4 }),
            (0, S.jsx)(k.E, { variant: "text-md/normal", className: _H.yV, children: g.intl.string(g.t.VWxmSo) }),
            (0, S.jsx)(__.h, { size: 24 }),
            (0, S.jsxs)("div", {
                className: _H.Nr,
                children: [
                    (0, S.jsx)("img", { src: "/assets/d6bcd13fb6c85425.svg", alt: "", className: _H._e }),
                    (0, S.jsxs)("div", {
                        className: _H.FS,
                        children: [
                            (0, S.jsx)(em.D, {
                                variant: "heading-xl/semibold",
                                className: _H.wx,
                                children: g.intl.string(g.t["48ywCu"]),
                            }),
                            (0, S.jsx)(k.E, {
                                variant: "text-md/normal",
                                className: _H.h_,
                                children: g.intl.format(g.t["/esXLj"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, S.jsx)(_Y.A, { onClick: t, text: g.intl.string(g.t["z5YcJ+"]) }),
                ],
            }),
        ],
    });
}
var _W = n(548411),
    _Z = n(417098),
    _q = n(143582),
    _Q = n(169820),
    _J = n(920087);
function _$(e) {
    let { className: t, header: n, headerClassName: i, children: l } = e,
        s = x.useMemo(() => {
            let e = !1;
            return (
                x.Children.forEach(l, (t) => {
                    null != t && (e = !0);
                }),
                e
            );
        }, [l]);
    return (0, S.jsxs)("div", {
        className: ew()(_J.iE, t),
        children: [
            (0, S.jsx)("div", { className: ew()(_J.wx, i), children: n }),
            s && (0, S.jsx)("div", { className: _J.Qs, children: l }),
        ],
    });
}
var _0 = n(885996),
    _1 = n(144165),
    _2 = n(664121),
    _5 = n(950305),
    _3 = n(943775),
    _8 = n(123791),
    _4 = n(900797),
    _9 = n(632510);
let _7 = x.createContext({ isOpen: !1, toggleOpen: () => {} });
function _6(e) {
    let { children: t } = e,
        [n, i] = x.useReducer((e) => !e, !1),
        l = x.useMemo(() => ({ isOpen: n, toggleOpen: i }), [n]);
    return (0, S.jsx)(_7.Provider, { value: l, children: t(n) });
}
_6.Toggle = function (e) {
    let { className: t, text: n } = e,
        { isOpen: i, toggleOpen: l } = x.useContext(_7),
        s = i ? _4.t : V.a,
        a = null != n ? n : i ? g.intl.string(g.t.fgq1gs) : g.intl.string(g.t.XJuakA);
    return (0, S.jsxs)(U.D, {
        className: ew()(_9.L, t),
        onClick: l,
        children: [
            (0, S.jsx)(k.E, { variant: "heading-sm/semibold", tag: "div", color: "currentColor", children: a }),
            (0, S.jsx)(s, { size: "sm", color: "currentColor" }),
        ],
    });
};
var me = n(627363),
    mt = n(243217),
    mn = n(328968),
    mi = n(163437),
    ml = n(3432);
function ms(e) {
    return e.toLocaleDateString(void 0, { dateStyle: "long" });
}
var ma = n(184451),
    mr = (((l = {})[(l.LOADING = 0)] = "LOADING"), (l[(l.DONE = 1)] = "DONE"), (l[(l.ERROR = 2)] = "ERROR"), l);
function mo(e) {
    let { subscription: t, navigateToSwitchPlan: n, loadingState: i } = e,
        l = t.metadata?.application_subscription_guild_id,
        { renewalMutations: s, planId: a } = t,
        {
            appId: r,
            plan: o,
            storeListing: d,
            isGuildSubscription: u,
            subscriptionForGuild: c,
            sku: _,
            isCancelled: m,
            isOrphanedGuildSubscription: h,
            renewalPlan: A,
        } = (0, O.cf)([u5.A, u3.A, mn.A, H.A], () => {
            let e,
                n = u5.A.get(a),
                i = null != n ? u3.A.get(n.skuId) : void 0,
                r = i?.applicationId,
                o = null != n ? mn.A.getForSKU(n.skuId) : null,
                d = null != o && (0, mi.PJ)(o.skuFlags),
                u = d && null != l ? H.A.getGuild(l) : void 0,
                c = (0, mi.Uo)(t, i),
                g = d && null != l && null == u;
            if (!1 === c && null != s && s.items.length > 0) {
                let t = s.items[0];
                e = u5.A.get(t.planId) ?? void 0;
            }
            return {
                appId: r,
                isGuildSubscription: d,
                isOrphanedGuildSubscription: g,
                plan: n,
                sku: i,
                storeListing: o,
                subscriptionForGuild: u,
                isCancelled: c,
                renewalPlan: e,
            };
        }, [l, a, s, t]),
        { data: p } = (0, me.YY)(r),
        T = x.useMemo(() => (null != p ? (0, _3.A)(p, 100) : null), [p]),
        E = _?.deleted ?? !1,
        f = null != _ && (0, mi.Se)(_),
        b = t.status === q.Dmq.PAST_DUE,
        { analyticsLocations: N } = (0, iM.Ay)(),
        [C] = (0, _I.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: N,
            analyticsLocation: eU.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        I = ms(t.currentPeriodEnd),
        v = 0 === i;
    return (0, S.jsxs)(_$, {
        headerClassName: ma.dL,
        header:
            !1 === v
                ? (0, S.jsxs)(S.Fragment, {
                      children: [
                          (0, S.jsxs)("div", {
                              className: ma.VW,
                              children: [
                                  null != T &&
                                      (0, S.jsx)(_1._, { src: T.href, imageClassName: ma.Z2, width: 40, height: 40 }),
                                  (0, S.jsxs)("div", {
                                      className: ma.aF,
                                      children: [
                                          (0, S.jsx)(em.D, {
                                              variant: "heading-md/semibold",
                                              lineClamp: 1,
                                              children: p?.name ?? g.intl.string(g.t["7kqy7W"]),
                                          }),
                                          (0, S.jsx)(k.E, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              lineClamp: 1,
                                              children: o?.name ?? g.intl.string(g.t.sqkbMK),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, S.jsx)("div", {
                              className: ma.Pz,
                              children:
                                  null != p &&
                                  null != d &&
                                  null != _ &&
                                  (0, S.jsx)(m_, {
                                      subscription: t,
                                      app: p,
                                      guild: c,
                                      sku: _,
                                      storeListing: d,
                                      isCancelled: m,
                                      isOrphanedGuildSubscription: h,
                                      navigateToSwitchPlan: n,
                                      renewalSkuId: A?.skuId,
                                  }),
                          }),
                      ],
                  })
                : (0, S.jsx)(dM.y, { type: dM.t.PULSING_ELLIPSIS }),
        children: [
            m &&
                (0, S.jsx)(mg, {
                    type: "warning",
                    title: f
                        ? g.intl.formatToPlainString(g.t.QOnM1y, { subscriptionPeriodEnd: I })
                        : g.intl.formatToPlainString(g.t.HOaZu8, { subscriptionPeriodEnd: I }),
                }),
            !m && h && (0, S.jsx)(mg, { type: "warning", title: g.intl.string(g.t.SmSP8Q) }),
            b && (0, S.jsx)(mg, { type: "danger", title: g.intl.string(g.t.fvOqBo) }),
            (0, S.jsxs)("div", {
                className: ma.zH,
                children: [
                    (0, S.jsx)(mc, {
                        title: g.intl.string(g.t["5D/KEH"]),
                        content: u
                            ? (0, S.jsxs)(S.Fragment, {
                                  children: [
                                      (0, S.jsxs)("span", {
                                          className: ma.yW,
                                          children: [(0, S.jsx)(_2.R, { size: "xs" }), g.intl.string(g.t.QjL3vn)],
                                      }),
                                      null != c &&
                                          (0, S.jsxs)("span", {
                                              className: ma._t,
                                              children: [
                                                  (0, S.jsx)(k.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: g.intl.format(g.t["7ZD8p1"], { guildName: c.name }),
                                                  }),
                                                  (0, S.jsx)(c7.Ay, { guild: c, size: c7.Ay.Sizes.MINI }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, S.jsxs)("span", {
                                  className: ma.yW,
                                  children: [(0, S.jsx)(_5.n, { size: "xs" }), g.intl.string(g.t["6anEVv"])],
                              }),
                    }),
                    (0, S.jsx)(md, { invoicePreview: C, subscriptionPlan: o }),
                    (0, S.jsx)(mc, {
                        title: g.intl.string(g.t.dnUzb6),
                        content: ms(t.createdAt ?? t.currentPeriodStart),
                    }),
                    (0, S.jsx)(mu, { isCancelled: m, subscriptionPeriodEnd: I, renewalPlan: A }),
                ],
            }),
            (0, S.jsx)(mh, {
                subscription: t,
                currentInvoicePreview: C,
                loadingState: i,
                isDeleted: E,
                isCancelled: m,
            }),
            null != p &&
                d?.benefits != null &&
                d.benefits.length > 0 &&
                (0, S.jsx)(mm, { appId: p.id, listingBenefits: d.benefits }),
        ],
    });
}
function md(e) {
    let { subscriptionPlan: t, invoicePreview: n } = e;
    if (null == t) return (0, S.jsx)(mc, { title: g.intl.string(g.t.KI7ERx), content: "" });
    let i = (0, dF.CE)((0, dF.$g)(t.price, t.currency), t.interval, t.intervalCount),
        l = n?.findInvoiceItemByPlanId(t.id);
    if (null == l) return (0, S.jsx)(mc, { title: g.intl.string(g.t.KI7ERx), content: i });
    let s = (0, dF.CE)((0, dF.$g)(l.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, S.jsx)(mc, {
        title: g.intl.string(g.t.KI7ERx),
        content: (0, S.jsxs)(S.Fragment, {
            children: [
                (0, S.jsx)(k.E, { variant: "text-sm/semibold", children: s }),
                s !== i &&
                    (0, S.jsx)(e0.m, {
                        text: g.intl.format(g.t["6DoE57"], { listPrice: i }),
                        position: "bottom",
                        children: (0, S.jsx)(k.E, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: (0, S.jsx)("s", { children: i }),
                        }),
                    }),
            ],
        }),
    });
}
function mu(e) {
    let { isCancelled: t, subscriptionPeriodEnd: n, renewalPlan: i } = e;
    if (null != i) {
        let e = (0, dF.CE)((0, dF.$g)(i.price, i.currency), i.interval, i.intervalCount);
        return (0, S.jsx)(mc, {
            title: g.intl.string(g.t.hIhAM3),
            content: (0, S.jsxs)(S.Fragment, {
                children: [
                    (0, S.jsx)(k.E, { variant: "text-sm/medium", children: n }),
                    (0, S.jsx)(k.E, {
                        variant: "text-sm/normal",
                        children: g.intl.format(g.t.MCLbvj, { planName: i.name, price: e }),
                    }),
                ],
            }),
        });
    }
    return (0, S.jsx)(mc, { title: t ? g.intl.string(g.t.enxcAl) : g.intl.string(g.t["Ms+6Zq"]), content: n });
}
function mc(e) {
    let { title: t, content: n } = e;
    return (0, S.jsxs)("div", {
        className: ma.nM,
        children: [
            (0, S.jsx)(k.E, { variant: "text-sm/medium", children: t }),
            (0, S.jsx)(k.E, { variant: "text-sm/medium", className: ma.u4, children: n }),
        ],
    });
}
function mg(e) {
    let { type: t, title: n } = e;
    return (0, S.jsx)(ta.p, {
        messageType: "warning" === t ? ta.Y.WARNING : ta.Y.ERROR,
        className: ma.Xm,
        children: (0, S.jsx)(k.E, { variant: "text-sm/normal", children: n }),
    });
}
function m_(e) {
    let {
            app: t,
            storeListing: i,
            sku: l,
            subscription: s,
            isCancelled: a,
            isOrphanedGuildSubscription: r,
            guild: o,
            renewalSkuId: d,
            navigateToSwitchPlan: u,
        } = e,
        c = (0, mi.Se)(l),
        { analyticsLocations: _ } = (0, iM.Ay)(),
        [m, h] = x.useState(!1),
        A = (0, _8.C)(t.id),
        p = (0, O.bG)([u3.A], () => u3.A.getParentSKU(i.skuId), [i.skuId]),
        T = x.useMemo(() => {
            var e, t;
            let n;
            return null == p
                ? []
                : ((e = i.id),
                  (t = A.subscriptions),
                  (n = new Set(p.bundledSkuIds)),
                  t.filter((t) => t.id !== e && n.has(t.skuId)));
        }, [i.id, A, p]),
        E = 0 !== T.length,
        f = async () => {
            try {
                h(!0);
                let { subscription: e } = await (0, dV.QP)(s, _);
                if (null == e) return;
                (0, b.openModalLazy)(async () => {
                    let { default: t } = await n.e("52396").then(n.bind(n, 115623));
                    return (n) => (0, S.jsx)(t, { ...n, storeListing: i, subscription: mt.A.createFromServer(e) });
                });
            } finally {
                h(!1);
            }
        };
    return (0, S.jsxs)("div", {
        className: ma.fw,
        children: [
            c || (a && r)
                ? null
                : a
                  ? (0, S.jsx)(eh.$, {
                        variant: "secondary",
                        size: "sm",
                        text: g.intl.string(g.t.QtMnkW),
                        onClick: f,
                        loading: m,
                    })
                  : (0, S.jsx)(eh.$, {
                        variant: "secondary",
                        size: "sm",
                        text: g.intl.string(g.t["E8G/tr"]),
                        onClick: () => {
                            (0, b.openModalLazy)(async () => {
                                let { default: e } = await n.e("22800").then(n.bind(n, 301139));
                                return (n) =>
                                    (0, S.jsx)(e, { ...n, application: t, storeListing: i, subscription: s, guild: o });
                            });
                        },
                    }),
            E &&
                null != p &&
                !1 === a &&
                !1 === r &&
                (0, S.jsx)(eh.$, {
                    variant: "primary",
                    size: "sm",
                    text: g.intl.string(g.t.R74ZBR),
                    onClick: () => {
                        u({
                            currentSubscription: s,
                            alternativeListings: T,
                            app: t,
                            subscriptionGroup: p,
                            currentListing: i,
                            renewalSkuId: d,
                        });
                    },
                }),
        ],
    });
}
function mm(e) {
    let { appId: t, listingBenefits: n } = e;
    return (0, S.jsx)(_6, {
        children: (e) =>
            (0, S.jsxs)("div", {
                className: ma.PX,
                children: [
                    (0, S.jsxs)("div", {
                        className: ma.wV,
                        children: [
                            e && (0, S.jsx)(k.E, { variant: "text-sm/semibold", children: g.intl.string(g.t.mORL67) }),
                            (0, S.jsx)(_6.Toggle, {
                                className: ma.Bh,
                                text: e ? g.intl.string(g.t.gsbFAw) : g.intl.string(g.t.IwjfxV),
                            }),
                        ],
                    }),
                    e
                        ? n.map((e) => {
                              let { id: n, name: i, description: l, icon: s } = e;
                              return (0, S.jsx)(_0.FY, { header: i, icon: (0, ml.N)(t, s), description: l }, n);
                          })
                        : null,
                ],
            }),
    });
}
function mh(e) {
    let { subscription: t, currentInvoicePreview: n, loadingState: i, isDeleted: l, isCancelled: s } = e;
    return null == n
        ? null
        : 0 === i
          ? (0, S.jsx)("div", {
                className: ma.Ji,
                children: (0, S.jsx)(lO.D, {
                    label: g.intl.string(g.t.azZaZa),
                    children: (0, S.jsx)(dM.y, { type: dM.t.PULSING_ELLIPSIS }),
                }),
            })
          : 2 === i
            ? (0, S.jsx)("div", {
                  className: ma.Ji,
                  children: (0, S.jsxs)(_Z.$T, {
                      color: _Z.Hv.DANGER,
                      style: { borderRadius: 0 },
                      children: [
                          g.intl.format(g.t.IIHUUF, { subscriptionId: t.id }),
                          (0, S.jsx)("br", {}),
                          g.intl.format(g.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                      ],
                  }),
              })
            : (0, S.jsx)("div", {
                  className: ma.Ji,
                  children: (0, S.jsx)(lO.D, {
                      label: g.intl.string(g.t.azZaZa),
                      children: (0, S.jsx)(_v.A, { subscription: t, currentInvoicePreview: n, disabled: l || s }),
                  }),
              });
}
var mA = (((s = {}).HOME = "HOME"), (s.SWITCH_APP_PLANS = "SWITCH_APP_PLANS"), s);
n(938796);
var mp = n(38405);
let mT = (0, O.UT)(u5.A, {
    getQueryId: q.fic.SUBSCRIPTION_PLANS,
    get: (e) => {
        if (null == e) return null;
        let t = u5.A.getForSKU(e);
        return 0 === t.length ? null : t;
    },
    load: (e) => (
        null == e && mp.A.addBreadcrumb({ message: "Error loading subscription plans: skuId is null" }),
        null != e ? (0, cT.ur)(e).then(() => {}) : Promise.reject()
    ),
});
var mE = n(240248),
    mS = n(237218),
    mx = n(988325);
function mf(e) {
    let { children: t, lineClamp: n = 2, ...i } = e,
        [l, s] = x.useState(!1),
        [a, r] = x.useState(null),
        o =
            null != a &&
            (0, S.jsx)("button", {
                className: mx.x6,
                onClick: () => s((e) => !e),
                children: (0, S.jsxs)(k.E, {
                    className: mx.B0,
                    variant: "text-sm/medium",
                    color: "text-brand",
                    children: [
                        l ? g.intl.string(g.t["JQX/Pb"]) : g.intl.string(g.t.Fbrd8J),
                        l
                            ? (0, S.jsx)(_4.t, { color: w.A.colors.TEXT_BRAND, size: "xs" })
                            : (0, S.jsx)(V.a, { color: w.A.colors.TEXT_BRAND, size: "xs" }),
                    ],
                }),
            }),
        [d, u] = x.useState(null),
        c = x.useCallback(() => {
            if (null == d) return;
            let { scrollHeight: e, clientHeight: t } = d;
            e > t && r({ truncatedHeight: t, expandedHeight: e });
        }, [d]);
    x.useEffect(() => {
        requestAnimationFrame(c);
    }, [c, t, n]);
    let _ = "auto";
    return (
        null != a && (_ = l ? `${a.expandedHeight}px` : `${a.truncatedHeight}px`),
        (0, S.jsxs)("div", {
            children: [
                (0, S.jsx)(k.E, {
                    ...i,
                    className: mx.Qs,
                    lineClamp: l ? void 0 : n,
                    ref: u,
                    style: { height: _ },
                    children: t,
                }),
                o,
            ],
        })
    );
}
var mb = n(827991);
function mN(e) {
    let { cta: t, storeListing: n, className: i } = e,
        { applicationId: l, benefits: s, description: a } = n,
        r = x.useMemo(() => (null == n.thumbnail ? null : (0, mS.t)(l, n.thumbnail, 256)), [l, n.thumbnail]),
        { data: o } = mT(n.skuId),
        d = x.useMemo(() => {
            if (null == o || 0 === o.length) return null;
            let e = o[0];
            return (0, dF._J)(e);
        }, [o]);
    return null == d
        ? null
        : (0, S.jsxs)(_$, {
              className: ew()(mb.iE, i),
              header: (0, S.jsxs)(S.Fragment, {
                  children: [
                      (0, S.jsxs)("div", {
                          className: mb.qd,
                          children: [
                              null != r &&
                                  (0, S.jsx)(_1._, { src: r.href, imageClassName: mb.rW, width: 48, height: 48 }),
                              (0, S.jsxs)("div", {
                                  children: [
                                      (0, S.jsx)(em.D, { variant: "heading-md/bold", children: n.summary }),
                                      (0, S.jsx)(k.E, { variant: "text-md/medium", children: d }),
                                  ],
                              }),
                          ],
                      }),
                      t,
                  ],
              }),
              children: [
                  !(0, mE.uJ)(a) &&
                      (0, S.jsx)("div", {
                          className: mb.h_,
                          children: (0, S.jsx)(mf, { variant: "text-sm/medium", children: a }),
                      }),
                  null != s &&
                      s.length > 0 &&
                      (0, S.jsx)("div", {
                          className: mb.PX,
                          children: s.map((e) => {
                              let { id: t, name: n, description: i, icon: s } = e;
                              return (0, S.jsx)(_0.FY, { header: n, icon: (0, ml.N)(l, s), description: i }, t);
                          }),
                      }),
              ],
          });
}
var mC = n(185438),
    mI = n(386011);
function mv(e) {
    let {
            app: t,
            currentSubscription: n,
            currentListing: i,
            alternativeListings: l,
            navigateToHome: s,
            subscriptionGroup: a,
            renewalSkuId: r,
        } = e,
        o = (0, _3.A)(t, 100),
        d = (0, mi.PJ)(a.flags),
        u = d ? _2.R : _5.n,
        c = d ? g.intl.string(g.t["46YF2D"]) : g.intl.string(g.t.fFyGiA),
        _ = n.metadata?.application_subscription_guild_id,
        m = (0, O.bG)([H.A], () => (d && null != _ ? H.A.getGuild(_) : void 0), [_, d]),
        h = (0, O.bG)([u3.A], () => {
            if (null != r) return u3.A.get(r);
        }, [r]),
        A = ms(n.currentPeriodEnd);
    return (0, S.jsxs)("div", {
        children: [
            (0, S.jsxs)("div", {
                className: mI.wx,
                children: [
                    null != o && (0, S.jsx)(_1._, { src: o.href, imageClassName: mI.Z2, width: 48, height: 48 }),
                    (0, S.jsxs)("div", {
                        children: [
                            (0, S.jsx)(em.D, { variant: "heading-xl/semibold", children: t.name }),
                            (0, S.jsxs)("div", {
                                className: mI.p4,
                                children: [
                                    (0, S.jsxs)(em.D, {
                                        variant: "heading-md/normal",
                                        className: mI.N4,
                                        children: [(0, S.jsx)(u, { size: "xs", color: "currentColor" }), " ", c],
                                    }),
                                    null != m &&
                                        (0, S.jsxs)(S.Fragment, {
                                            children: [
                                                (0, S.jsx)(k.E, { variant: "text-md/normal", children: "•" }),
                                                (0, S.jsxs)("span", {
                                                    className: mI.vP,
                                                    children: [
                                                        (0, S.jsx)(c7.Ay, { guild: m, size: c7.Ay.Sizes.SMOL }),
                                                        (0, S.jsx)(em.D, {
                                                            variant: "heading-md/semibold",
                                                            color: "text-muted",
                                                            children: g.intl.format(g.t["7ZD8p1"], {
                                                                guildName: m.name,
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
            (0, S.jsx)(_6, {
                children: (e) =>
                    (0, S.jsxs)("div", {
                        className: mI._B,
                        children: [
                            (0, S.jsx)(k.E, { variant: "text-md/normal", children: g.intl.string(g.t["goe+hk"]) }),
                            e &&
                                (0, S.jsxs)(S.Fragment, {
                                    children: [
                                        (0, S.jsx)(k.E, {
                                            variant: "text-md/normal",
                                            children: g.intl.format(g.t["Q8qJ+5"], {}),
                                        }),
                                        (0, S.jsx)(k.E, {
                                            variant: "text-md/normal",
                                            children: g.intl.format(g.t.sqowYz, {}),
                                        }),
                                    ],
                                }),
                            (0, S.jsx)(_6.Toggle, {
                                text: e ? g.intl.string(g.t["1Rkq/E"]) : g.intl.string(g.t.WsTHkY),
                            }),
                        ],
                    }),
            }),
            (0, S.jsxs)("div", {
                className: mI.x0,
                children: [
                    (0, S.jsx)(mN, {
                        storeListing: i,
                        className: mI.o3,
                        cta: (0, S.jsxs)("div", {
                            className: mI.cJ,
                            children: [
                                (0, S.jsx)(k.E, {
                                    variant: "eyebrow",
                                    color: "text-brand",
                                    children: g.intl.string(g.t.fHIpOY),
                                }),
                                null != h &&
                                    (0, S.jsx)(k.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: g.intl.format(g.t["OQk+jr"], { endDate: A }),
                                    }),
                            ],
                        }),
                    }),
                    l.map((e) =>
                        e.skuId === r
                            ? (0, S.jsx)(
                                  mN,
                                  {
                                      storeListing: e,
                                      cta: (0, S.jsx)(k.E, {
                                          variant: "text-sm/semibold",
                                          color: "text-subtle",
                                          children: g.intl.format(g.t.nn88hB, { startDate: A }),
                                      }),
                                  },
                                  e.id,
                              )
                            : (0, S.jsx)(my, { storeListing: e, guildId: _, navigateToHome: s }, e.id),
                    ),
                ],
            }),
        ],
    });
}
function my(e) {
    let { storeListing: t, guildId: n, navigateToHome: i } = e,
        { openModal: l } = (0, mC.A)({
            analyticsLocation: q.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: n,
            disableGuildSelector: !0,
            onComplete: i,
        });
    return (0, S.jsx)(mN, {
        storeListing: t,
        cta: (0, S.jsx)(eh.$, { variant: "primary", size: "sm", text: g.intl.string(g.t["+KwmBt"]), onClick: l }),
    });
}
class mj extends x.PureComponent {
    state = { hasError: !1 };
    static getDerivedStateFromError(e) {
        return { hasError: !0 };
    }
    render() {
        return this.state.hasError
            ? (0, S.jsxs)(_Z.$T, {
                  color: _Z.Hv.DANGER,
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
function mO(e) {
    let { subscriptions: t, updateHeader: n } = e,
        [i, l] = x.useState({ route: mA.HOME }),
        { route: s } = i,
        a = () => {
            l({ route: mA.HOME });
        },
        r = (e) => {
            l({ route: mA.SWITCH_APP_PLANS, ...e }), n(g.intl.string(g.t.VFqtkP), a);
        },
        [o, d] = x.useState({});
    x.useEffect(() => {
        for (let e of t) {
            let t = e.items[0]?.planId;
            null != t &&
                (d((t) => ({ ...t, [e.id]: mr.LOADING })),
                (0, _q._R)(t)
                    .then(() => {
                        d((t) => ({ ...t, [e.id]: mr.DONE }));
                    })
                    .catch(() => {
                        d((t) => ({ ...t, [e.id]: mr.ERROR }));
                    }));
        }
    }, [t]);
    let { loadState: u } = (0, _Q.E)(),
        c = u !== _Q.mJ.LOADED;
    switch (s) {
        case mA.HOME:
            return (0, S.jsx)(S.Fragment, {
                children: t.map((e) =>
                    (0, S.jsx)(
                        mj,
                        {
                            subscription: e,
                            children: (0, S.jsx)(mo, {
                                subscription: e,
                                navigateToSwitchPlan: r,
                                loadingState: c ? mr.LOADING : (o[e.id] ?? mr.LOADING),
                            }),
                        },
                        e.id,
                    ),
                ),
            });
        case mA.SWITCH_APP_PLANS:
            let { route: _, ...m } = i;
            return (0, S.jsx)(mv, { ...m, navigateToHome: a });
        default:
            (0, t3.xb)(s);
    }
}
var mR = n(470464);
function mL(e) {
    let { onGoBack: t } = e,
        n = (0, O.yK)(
            [us.A],
            () =>
                us.A.getActiveApplicationSubscriptions()
                    ?.slice()
                    .sort(
                        (e, t) =>
                            (e.createdAt?.getTime() ?? e.currentPeriodStart.getTime()) -
                            (t.createdAt?.getTime() ?? t.currentPeriodStart.getTime()),
                    ) ?? [],
        ),
        [i, l] = x.useState();
    return (
        null == i && (i = (0, S.jsx)(mD, { onBack: t, title: g.intl.string(g.t["DB/m9a"]) })),
        (0, S.jsxs)("div", {
            children: [
                i,
                (0, S.jsx)("div", {
                    className: mR.A,
                    children: (0, S.jsx)(mO, {
                        subscriptions: n,
                        updateHeader: (e, t) => {
                            l(
                                (0, S.jsx)(mD, {
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
function mD(e) {
    let { onBack: t, title: n } = e;
    return (0, S.jsxs)("div", {
        className: mR.D,
        children: [
            (0, S.jsx)(sE.K, {
                "aria-label": g.intl.string(g.t["13/7kX"]),
                icon: () => (0, S.jsx)(_W.Z, { size: "sm" }),
                onClick: t,
                variant: "icon-only",
            }),
            (0, S.jsx)(em.D, { variant: "heading-lg/semibold", children: n }),
        ],
    });
}
var mG = n(881489),
    mP = n(366999),
    mM = n(466919),
    mU = n(441924);
function mk(e) {
    let t,
        n,
        {
            showChargingUpState: i,
            rowValueText: l,
            endsAt: s,
            fractionalState: a,
            activationDate: r,
            hasPremiumGroup: o,
        } = e;
    o
        ? ((t = g.intl.string(mM.default["/S02sx"])), (n = g.intl.string(mM.default.OPJNST)))
        : i
          ? ((t = g.intl.string(g.t["hT6i/0"])),
            (n = null != r ? g.intl.format(g.t["0Vwb/l"], { activateDate: r }) : null))
          : ((t = g.intl.string(g.t["3G0CTC"])),
            (n = a === lf.xc.FP_SUB_PAUSED ? g.intl.format(g.t.MMvaIG, { resumeDate: s.toDate() }) : null));
    let d = ew()({ [mU.Hs]: i, [mU.mT]: !i }),
        u = ew()({ [mU.CQ]: i, [mU.ZM]: !i }),
        c = ew()({ [mU.EM]: !i });
    return (0, S.jsxs)("div", {
        className: mU.r6,
        children: [
            (0, S.jsxs)("div", {
                className: mU.Nv,
                children: [
                    (0, S.jsx)(em.D, { variant: "heading-md/semibold", className: c, children: t }),
                    null !== n && (0, S.jsx)(k.E, { variant: "text-sm/normal", children: n }),
                ],
            }),
            !o &&
                (0, S.jsx)("div", {
                    className: mU.ZS,
                    children: (0, S.jsx)("div", {
                        className: d,
                        children: (0, S.jsx)(k.E, { variant: "text-sm/semibold", className: u, children: l }),
                    }),
                }),
        ],
    });
}
let mV = function (e) {
    let { fractionalPremiumInfo: t, className: n, activationDate: i, hasPremiumGroup: l } = e,
        s = (0, oG.kX)(t),
        a = s.length > 0,
        r = (0, mP.Ay)(t.endsAt, mP.yE.SHORT_TIME),
        o = a ? s : r;
    return (0, S.jsx)("div", {
        children: (0, S.jsxs)("div", {
            className: ew()(n, mU.f8),
            children: [
                (0, S.jsx)("div", {
                    className: mU.J_,
                    children: (0, S.jsxs)("div", {
                        className: mU.Bh,
                        children: [
                            (0, S.jsx)("div", {
                                className: mU.xt,
                                children: (0, S.jsx)(oC.t, { size: "md", color: "white", className: mU.T8 }),
                            }),
                            (0, S.jsx)("div", {
                                className: mU.pt,
                                children: (0, S.jsx)(em.D, {
                                    variant: "heading-md/semibold",
                                    children: g.intl.string(g.t.DFMPWS),
                                }),
                            }),
                            (0, S.jsx)(k.E, {
                                className: mU.PJ,
                                variant: "text-md/semibold",
                                children: s.length > 0 ? s : g.intl.string(g.t["B66Z+f"]),
                            }),
                        ],
                    }),
                }),
                (0, S.jsx)(mk, {
                    showChargingUpState: a,
                    rowValueText: o,
                    endsAt: t.endsAt,
                    fractionalState: t.fractionalState,
                    activationDate: i,
                    hasPremiumGroup: l,
                }),
            ],
        }),
    });
};
var mw = n(868942);
function mB(e) {
    let t,
        {
            user: n,
            planId: i,
            count: l,
            userPremiumSubscription: s,
            unconsumedFractionalPremiumUnits: a = [],
            hasPremiumGroup: r,
        } = e,
        [o, d] = (0, O.yK)([u5.A], () => [u5.A.get(i), null != s ? u5.A.get(s.planId) : null]);
    if (null == o || oG.Ay.getInterval(i).intervalType !== lf.WT.MONTH) return null;
    let u = null != d ? d.skuId : null,
        c = o.skuId === u,
        _ = oG.Ay.getDisplayName(i);
    if (r) t = g.intl.string(mM.default["5asczk"]);
    else if (c && null != s) {
        let e;
        e = new Date(s.status === q.Dmq.PAUSED && null != s.pauseEndsAt ? s.pauseEndsAt : s.currentPeriodEnd);
        let n = (0, oG._e)(e, a);
        t = g.intl.formatToPlainString(g.t["5CNRRA"], { date: n ?? 0 });
    } else t = g.intl.formatToPlainString(g.t.eNXZ5O, { planName: _ });
    let m = n.hasFreePremium() || (null != s && s.isPurchasedExternally);
    return (0, S.jsxs)("div", {
        className: mU.Bh,
        children: [
            (0, S.jsx)("div", {
                className: ew()({
                    [mU.sr]: o.skuId === lf.pe.TIER_0,
                    [mU.lP]: o.skuId === lf.pe.TIER_1,
                    [mU.eb]: o.skuId === lf.pe.TIER_2,
                }),
                children: (0, S.jsx)(oC.t, { size: "md", color: "currentColor", className: mU.Kk }),
            }),
            (0, S.jsxs)("div", {
                className: mU.pt,
                children: [
                    (0, S.jsx)(em.D, {
                        variant: "heading-md/semibold",
                        children: g.intl.format(g.t.LzobT9, { planName: _ }),
                    }),
                    !m &&
                        (0, S.jsx)(em.D, {
                            className: mU.gj,
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            children: t,
                        }),
                ],
            }),
            (0, S.jsx)(k.E, {
                className: mU.PJ,
                variant: "text-md/semibold",
                children: g.intl.format(g.t["ess/xl"], { count: l }),
            }),
        ],
    });
}
let mF = function (e) {
    let { className: t, entitlements: n } = e,
        i = eR()(Array.from(n))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: n, consumed: i } = e;
                return null != t && null != n && !i;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        l = (0, O.yK)([uH.A], () => uH.A.getUnactivatedFractionalPremiumUnits()),
        s = (0, O.bG)([us.A], () => us.A.getPremiumSubscription()),
        a = (0, O.bG)([us.A], () => null == us.A.getPremiumTypeSubscription()),
        r = Object.keys(i).some((e) => e === lf.gD.PREMIUM_MONTH_TIER_1),
        o = (0, O.bG)([t5.default], () => t5.default.getCurrentUser());
    if (null == o) return null;
    let d = o.isPremiumWithPremiumGroup();
    return (0, S.jsxs)("div", {
        children: [
            (0, S.jsx)("div", {
                className: ew()(t, mU.xF, mU.J_),
                children: Object.keys(i).map((e) =>
                    (0, S.jsx)(
                        mB,
                        {
                            planId: e,
                            count: i[e].length,
                            userPremiumSubscription: s,
                            user: o,
                            unconsumedFractionalPremiumUnits: l,
                            hasPremiumGroup: d,
                        },
                        e,
                    ),
                ),
            }),
            r &&
                a &&
                (0, S.jsxs)("div", {
                    children: [
                        (0, S.jsx)(k.E, {
                            className: mU.eT,
                            variant: "text-md/normal",
                            children: g.intl.string(g.t["VNr4+O"]),
                        }),
                        (0, S.jsx)(mw.i, {}),
                    ],
                }),
        ],
    });
};
var mz = n(50919);
function mX(e) {
    let t,
        { subscription: n, withOverheadSeparator: i } = e,
        { analyticsLocations: l } = (0, iM.Ay)(),
        [s] = (0, _I.Kq)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: l,
            analyticsLocation: eU.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT,
        });
    if (null == s) return null;
    let a = i ? mz.r : mz.a,
        r = s.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, oG.xq)(t);
        });
    if (null == r) return null;
    let o = r.subscriptionPlanId,
        d = u5.A.get(o);
    tj()(null != d, "Missing plan");
    let u = (0, dF.$g)(s.total, s.currency);
    return (
        d.interval === lf.WT.YEAR
            ? (t = g.intl.format(g.t["jPz/39"], {
                  price: u,
                  termsUrl: q.X7G.TERMS,
                  paidURL: q.X7G.PAID_TERMS,
                  privacyUrl: q.X7G.PRIVACY,
              }))
            : d.interval === lf.WT.MONTH &&
              (t =
                  1 === d.intervalCount
                      ? g.intl.format(g.t.m27GpI, {
                            price: u,
                            termsUrl: q.X7G.TERMS,
                            paidURL: q.X7G.PAID_TERMS,
                            privacyUrl: q.X7G.PRIVACY,
                        })
                      : g.intl.format(g.t["9xf5Vx"], {
                            price: u,
                            termsUrl: q.X7G.TERMS,
                            paidURL: q.X7G.PAID_TERMS,
                            privacyUrl: q.X7G.PRIVACY,
                            intervalCount: d.intervalCount,
                        })),
        (0, S.jsx)(k.E, { color: "text-muted", className: a, variant: "text-xs/normal", children: t })
    );
}
function mY(e) {
    let { subscription: t, withOverheadSeparator: n } = e;
    return t.status === q.Dmq.CANCELED || t.isPurchasedExternally
        ? null
        : (0, S.jsx)(mX, { subscription: t, withOverheadSeparator: n });
}
var mH = n(536008),
    mK = n(558808);
let mW = { [iv.nR]: "role_subscriptions_panel", [iv.PZ]: "application_subscriptions_panel" };
function mZ() {
    return (0, S.jsx)(ea.Z, {
        className: mK.wb,
        type: ea.Z.Types.CUSTOM,
        children: (0, S.jsxs)(sV.A, {
            align: sV.A.Align.CENTER,
            children: [
                (0, S.jsx)(e9.A, { game: null, size: e9.M.SMALL, className: mK.pV }),
                (0, S.jsx)("span", { className: mK.O, children: g.intl.string(g.t["jy/hyj"]) }),
            ],
        }),
    });
}
function mq() {
    let e = (0, O.bG)([uH.A], () => uH.A.getForApplication(lf.tv));
    return (
        x.useEffect(() => {
            (0, uP.LM)(lf.tv);
        }, []),
        (0, S.jsx)(na.n, {
            label: g.intl.string(g.t["2GKrvn"]),
            description: g.intl.string(g.t.kNEjGm),
            children:
                null != e && oG.Ay.hasAccountCredit(e)
                    ? (0, S.jsx)(mF, { className: mK.fX, entitlements: e })
                    : (0, S.jsx)(mZ, {}),
        })
    );
}
function mQ() {
    return (0, S.jsx)("hr", { className: mK.hr });
}
let mJ = function () {
        var e;
        let t = (0, O.bG)([us.A], () => us.A.getPremiumTypeSubscription()),
            n = (0, _g.A)({ subscriptionFilter: (e) => mH.Hy.has(e.status) }),
            i = (0, O.bG)([t5.default], () => t5.default.getCurrentUser()),
            l = n.length > 1,
            s = (0, O.bG)(
                [ul.A],
                () => (null != t && null != t.paymentSourceId ? ul.A.getPaymentSource(t.paymentSourceId) : null),
                [t],
            ),
            a = (0, O.bG)([us.A], () => us.A.hasFetchedSubscriptions()),
            r = (0, O.bG)([dW.A], () => dW.A.isBusy),
            o = (0, cE.Y)(),
            u = _y.A.useField("subsection");
        x.useEffect(() => {
            (0, aA._)(null != u ? mW[u] : d.X.SUBSCRIPTIONS_PANEL);
        }, [u]);
        let c = (0, O.bG)([us.A], () => us.A.getActiveApplicationSubscriptions()?.length ?? 0),
            _ = (0, O.bG)(
                [us.A],
                () =>
                    Object.values(us.A.getSubscriptions() ?? {})
                        .filter((e) => e.type === q.rzx.GUILD)
                        .filter((e) => e.status !== q.Dmq.ENDED).length,
            ),
            m = (0, cf.A)({ forceFetch: !0 }),
            h = (0, mG.ds)(),
            A = null !== t ? t.currentPeriodEnd : void 0,
            p =
                !(h && !(m.unactivatedUnits.length > 0)) &&
                (m.fractionalState !== lf.xc.NONE || m.unactivatedUnits.length > 0);
        return (x.useEffect(
            () => (
                i3.h.wait(() => {
                    (0, cT.zS)(), dV.hP(), (0, cp.CD)(), dV.$o();
                }),
                function () {
                    _y.A.resetState();
                }
            ),
            [],
        ),
        eb.A.enabled)
            ? (0, S.jsx)(dG.A, {})
            : a && o
              ? u === iv.nR
                  ? (0, S.jsx)(_X, { onGoBack: () => _y.A.setState({ subsection: null }) })
                  : u === iv.PZ
                    ? (0, S.jsx)(mL, { onGoBack: () => _y.A.setState({ subsection: null }) })
                    : (0, S.jsx)("div", {
                          className: mK.kL,
                          children: (0, S.jsxs)("div", {
                              className: mK.Qs,
                              children: [
                                  l ? (0, S.jsx)(mH.Sb, {}) : null,
                                  null != t
                                      ? (0, S.jsx)(mH.Ay, {
                                            subscription: t,
                                            paymentSource: s,
                                            busy: r,
                                            subscriptions: n,
                                        })
                                      : (0, S.jsx)(mH.TC, {}),
                                  p &&
                                      ((e = !!i?.isPremiumWithPremiumGroup()),
                                      (0, S.jsxs)("section", {
                                          children: [
                                              (0, S.jsx)(em.D, {
                                                  variant: "heading-md/bold",
                                                  className: mK.HL,
                                                  children: g.intl.string(g.t.Obre8v),
                                              }),
                                              (0, S.jsx)(k.E, {
                                                  variant: "text-md/normal",
                                                  className: mK.JU,
                                                  children: g.intl.format(g.t["7Zi06b"], {
                                                      helpCenterLink: tr.A.getArticleURL(
                                                          q.MVz.FRACTIONAL_PREMIUM_ABOUT,
                                                      ),
                                                  }),
                                              }),
                                              (0, S.jsx)(mV, {
                                                  className: mK.fX,
                                                  fractionalPremiumInfo: m,
                                                  activationDate: A,
                                                  hasPremiumGroup: e,
                                              }),
                                          ],
                                      })),
                                  (0, S.jsx)(mq, {}),
                                  _ > 0 &&
                                      (0, S.jsxs)(S.Fragment, {
                                          children: [
                                              (0, S.jsx)(mQ, {}),
                                              (0, S.jsx)(_h, {
                                                  count: _,
                                                  onClickManageSubscription: () => _y.A.setState({ subsection: iv.nR }),
                                              }),
                                          ],
                                      }),
                                  c > 0 &&
                                      (0, S.jsxs)(S.Fragment, {
                                          children: [
                                              (0, S.jsx)(mQ, {}),
                                              (0, S.jsx)(_K, {
                                                  count: c,
                                                  onClickManageSubscription: () => {
                                                      _y.A.setState({ subsection: iv.PZ }),
                                                          X.default.track(
                                                              q.HAw.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED,
                                                          );
                                                  },
                                              }),
                                          ],
                                      }),
                                  (0, S.jsx)(mQ, {}),
                                  null != t ? (0, S.jsx)(mY, { subscription: t, withOverheadSeparator: !1 }) : null,
                              ],
                          }),
                      })
              : (0, S.jsx)("div", { className: ew()(mK.kL, mK.Lq), children: (0, S.jsx)(dM.y, {}) });
    },
    m$ = (0, o.E2)(d.X.SUBSCRIPTIONS_SETTINGS, {
        useSearchTerms: () => [g.intl.string(g.t.trSpHX), g.intl.string(g.t["2GKrvn"])],
        Component: () => (0, S.jsx)(mJ, {}),
    }),
    m0 = (0, o.zZ)(d.X.SUBSCRIPTIONS_CATEGORY, {
        useSearchTerms: () => [g.intl.string(g.t.trSpHX), g.intl.string(g.t["2GKrvn"])],
        buildLayout: () => [m$],
    }),
    m1 = (0, o.t_)(d.X.SUBSCRIPTIONS_PANEL, { useTitle: () => g.intl.string(g.t.trSpHX), buildLayout: () => [m0] }),
    m2 = (0, o.i4)(d.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.trSpHX),
        icon: _u.L,
        usePersistentBadge: function () {
            return x.useMemo(
                () => ({
                    badgeType: ef.Xi.STRONGLY_DISCOURAGED_CUSTOM,
                    useCustomBadge: () =>
                        (0, _c.l)() ? (0, S.jsx)(sy.E, { size: "xs", color: w.A.unsafe_rawColors.YELLOW_300 }) : null,
                }),
                [],
            );
        },
        buildLayout: () => [m1],
    }),
    m5 = (0, o.WI)(d.X.BILLING_SECTION, {
        useTitle: () => g.intl.string(g.t["4uOdGr"]),
        buildLayout: () => [ch, _d, m2, co, ub],
    });
var m3 = n(540999),
    m8 = n(306471),
    m4 = n(964355),
    m9 = n(172272);
let m7 = (0, o.zD)(d.X.AXE_AUDITING, {
        useTitle: () => "Enable Accessibility Auditing",
        useSubtitle: () =>
            "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development.",
        usePredicate: () => !1,
        useValue: () => (0, O.bG)([rG.default], () => rG.default.isAxeEnabled),
        setValue: (e) => (0, rD.x)({ axeEnabled: e }),
    }),
    m6 = (0, o.zD)(d.X.CSS_DEBUGGING, {
        useTitle: () => "Enable CSS Debugging",
        useSubtitle: () => "Display raw colors as pink. Toggling this will refresh the browser.",
        useValue: () => (0, O.bG)([rG.default], () => rG.default.cssDebuggingEnabled),
        setValue: (e) => {
            (0, rD.x)({ cssDebuggingEnabled: e }).then(() => {
                setTimeout(() => location.reload(), 500);
            });
        },
    });
var he = n(53705),
    ht = n(354328);
let hn = (0, o.zD)(d.X.HIGHLIGHT_MANA_COMPONENTS, {
        useTitle: () => "Highlight Mana Components",
        useSubtitle: () => "Highlights all Mana design system components for easier debugging.",
        useValue: () => (0, ht.A)("highlight_mana_components"),
        setValue: (e) => {
            (0, he.L)("highlight_mana_components", e);
        },
    }),
    hi = (0, o.zD)(d.X.HIGHLIGHT_VOID_COMPONENTS, {
        useTitle: () => "Highlight Deprecated Void Components",
        useSubtitle: () =>
            "Highlights deprecated toggleable components: VoidCheckbox (green), VoidRadioGroup (yellow), VoidSwitch (blue).",
        useValue: () => (0, ht.A)("highlight_void_toggleables"),
        setValue: (e) => {
            (0, he.L)("highlight_void_toggleables", e);
        },
    }),
    hl = (0, o.sN)(d.X.LAYOUT_DEBUGGING_HORIZONTAL_SPACING, {
        useTitle: () => "Horizontal Grid Spacing",
        useSubtitle: () =>
            "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
        usePredicate: () => (0, O.bG)([rG.default], () => rG.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: m9.YR,
        markers: Array.from({ length: m9.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => m9.Or.getState().horizontalSpacing,
        asValueChanges: (e) => {
            m9.Or.getState().setHorizontalSpacing(e);
        },
    }),
    hs = (0, o.zD)(d.X.LAYOUT_DEBUGGING, {
        useTitle: () => "Enable Layout Debugging",
        useSubtitle: () => "Renders a grid on top of the app to help debug layout alignment issues.",
        useValue: () => (0, O.bG)([rG.default], () => rG.default.layoutDebuggingEnabled),
        setValue: (e) => {
            (0, rD.x)({ layoutDebuggingEnabled: e });
        },
    }),
    ha = (0, o.sN)(d.X.LAYOUT_DEBUGGING_VERTICAL_SPACING, {
        useTitle: () => "Vertical Grid Spacing",
        useSubtitle: () => "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
        usePredicate: () => (0, O.bG)([rG.default], () => rG.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: m9.YR,
        markers: Array.from({ length: m9.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => m9.Or.getState().verticalSpacing,
        asValueChanges: (e) => {
            m9.Or.getState().setVerticalSpacing(e);
        },
    }),
    hr = (0, o.zZ)(d.X.DESIGN_TOOLS, {
        useTitle: () => "Design & A11y Tools",
        useSearchTerms: () => ["accessibility tools"],
        buildLayout: () => [m6, hs, hl, ha, hn, hi, m7],
    }),
    ho = (0, o.zD)(d.X.AD_OVERRIDE, {
        useTitle: () => "Always Deliver Ads",
        useSubtitle: () => "Makes the user targetable for all active ads.",
        useValue: () => c.HZ.useSetting(),
        setValue: (e) => {
            c.HZ.updateSetting(e);
        },
    });
var hd = n(173936),
    hu = n(260598),
    hc = n(148810),
    hg = n(380610),
    h_ = n(986238),
    hm = n(851645),
    hh = n(274446);
let hA = ["discord_web", "discord_marketing", "discord_developers", "discord_ios", "discord_android"],
    hp = [
        { id: "branch", value: "branch", label: "Branch Name" },
        { id: "id", value: "id", label: "Commit SHA" },
    ];
function hT(e) {
    return "discord_ios" in e || "discord_android" in e;
}
class hE extends x.Component {
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
        let { project: e, overrideType: t, overrideId: n, disabled: i, error: l } = this.props;
        return (0, S.jsxs)(sV.A, {
            direction: sV.A.Direction.VERTICAL,
            className: ew()(hm.oS, nf.SX, hh.N, hm.nM),
            children: [
                (0, S.jsx)(n_.A, {
                    className: ew()(hm.lL, { [hm.zi]: i }),
                    onClick: i ? void 0 : this.handleRemoveBuildOverride,
                }),
                (0, S.jsxs)(sV.A, {
                    className: nf.QB,
                    children: [
                        (0, S.jsx)(sV.A.Child, {
                            basis: "50%",
                            children: (0, S.jsx)(sT.l, {
                                selectionMode: "single",
                                label: "Override Type",
                                options: hp,
                                onSelectionChange: this.handleOverrideTypeChanged,
                                value: t,
                                disabled: i,
                            }),
                        }),
                        (0, S.jsx)(sV.A.Child, {
                            wrap: !0,
                            basis: "50%",
                            children: (0, S.jsx)(sP.k, {
                                label: "branch" === t ? "Branch Name" : "Commit SHA",
                                value: n,
                                onChange: this.handleOverrideIdChanged,
                                disabled: i,
                            }),
                        }),
                    ],
                }),
                (0, S.jsxs)(sV.A.Child, {
                    children: [
                        null != l &&
                            "" !== l &&
                            (0, S.jsx)(k.E, {
                                className: hm.AS,
                                color: "text-feedback-critical",
                                variant: "text-sm/normal",
                                children: l,
                            }),
                        (0, S.jsxs)(k.E, {
                            variant: "text-sm/normal",
                            className: hm.AS,
                            children: [
                                "This controls the build that will be served for the ",
                                (0, S.jsx)("code", { children: e }),
                                " project.",
                            ],
                        }),
                    ],
                }),
            ],
        });
    }
}
class hS extends x.Component {
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
        return eR().without(hA, ...t);
    }
    handleAddBuildOverride = (e) => {
        if (null == e) return;
        let t = { ...this.state.buildOverrides, [e]: { type: "branch", id: "" } };
        this.setState({ buildOverrides: t });
    };
    handleBuildOverrideUpdated = (e, t) => {
        let { buildOverrides: n } = this.state,
            i = { ...(null != n ? n[e] : {}), ...t },
            l = { ...this.state.buildOverrides, [e]: i };
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
        (0, b.openModal)((t) => (0, S.jsx)(hx, { ...t, buildOverrides: e }));
    };
    renderEmpty() {
        return (0, S.jsx)(ns.pp, {
            theme: no.A.theme,
            className: ew()(nf.eT, nf.SX),
            children: (0, S.jsx)(ns.SG, { children: "You have no build overrides configured." }),
        });
    }
    renderItems() {
        let { buildOverrides: e, saving: t, errors: n } = this.state;
        return null == e
            ? null
            : eR().map(e, (e, i) =>
                  (0, S.jsx)(
                      hE,
                      {
                          project: i,
                          overrideType: e.type,
                          overrideId: e.id,
                          disabled: t,
                          error: n[i],
                          onBuildOverrideUpdated: this.handleBuildOverrideUpdated,
                          onBuildOverrideRemoved: this.handleBuildOverrideRemoved,
                      },
                      i,
                  ),
              );
    }
    renderRefreshButton() {
        return !this.state.didSave || this.isDirty()
            ? null
            : (0, S.jsx)(eh.$, { variant: "secondary", text: "Reload App", onClick: () => location.reload() });
    }
    renderLinkButton() {
        let { buildOverrides: e } = this.state;
        return null == e || 0 === Object.keys(e).length
            ? null
            : (0, S.jsx)(e0.m, {
                  text: "Generate Public Link",
                  children: (0, S.jsx)(sE.K, {
                      variant: "secondary",
                      icon: hd.q,
                      "aria-label": "Generate Public Link",
                      onClick: this.handleLinkGeneration,
                  }),
              });
    }
    renderSaveButton() {
        if (!this.isDirty()) return null;
        let { saving: e, buildOverrides: t } = this.state;
        return (0, S.jsxs)(S.Fragment, {
            children: [
                (0, S.jsx)(eh.$, {
                    variant: "critical-primary",
                    text: "Discard Changes",
                    onClick: this.handleDiscardChanges,
                    disabled: e,
                }),
                (0, S.jsx)(eh.$, {
                    variant: "primary",
                    text: "Save Build Overrides",
                    disabled: hT(t ?? {}),
                    onClick: this.handleSaveChanges,
                    loading: e,
                }),
            ],
        });
    }
    render() {
        let e,
            { loading: t, saving: n, buildOverrides: i } = this.state;
        e = t
            ? (0, S.jsx)(dM.y, { className: nf.QX })
            : null != i && 0 === Object.keys(i).length
              ? this.renderEmpty()
              : this.renderItems();
        let l = !n && !t && this.getAvailableProjects().length > 0,
            s =
                hT(i ?? {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL
                    ? (0, S.jsx)(k.E, {
                          color: "text-feedback-critical",
                          variant: "text-md/normal",
                          children:
                              "Mobile build overrides must be generated using the desktop/web stable client for now!",
                      })
                    : null;
        return (0, S.jsx)(na.n, {
            children: (0, S.jsxs)(R.B, {
                gap: 16,
                children: [
                    (0, S.jsx)(sT.l, {
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
                    (0, S.jsxs)(rT.e, {
                        justify: "end",
                        children: [this.renderRefreshButton(), this.renderLinkButton(), this.renderSaveButton()],
                    }),
                ],
            }),
        });
    }
}
class hx extends x.Component {
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
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            e.setState({ statusText: t, status: n });
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
        e.key === nh.dh.ENTER && this.handleAddAllowedVersion();
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
        return hT(this.props.buildOverrides ?? {});
    }
    renderSettingsForm() {
        let {
                ttlSeconds: e,
                releaseChannel: t,
                userIdEntry: n,
                userIdEntryError: i,
                allowedVersions: l,
                allowedVersionEntry: s,
                allowedVersionEntryError: a,
                allowLoggedOut: r,
                experiments: o,
                experimentsError: d,
            } = this.state,
            u = h_.fL.find((t) => t.value === e),
            c = l.map((e) => ({ id: e, label: e, value: e }));
        return (0, S.jsxs)(R.B, {
            gap: 20,
            children: [
                (0, S.jsx)(sT.l, {
                    selectionMode: "single",
                    label: "Expire After",
                    value: null != u ? u.value : void 0,
                    options: h_.fL,
                    onSelectionChange: this.handleExpirationChange,
                }),
                this.isMobile()
                    ? null
                    : (0, S.jsx)(sT.l, {
                          selectionMode: "single",
                          label: "Release Channel",
                          value: t,
                          options: h_.VP,
                          onSelectionChange: this.handleReleaseChannelChange,
                      }),
                this.isMobile()
                    ? (0, S.jsxs)(R.B, {
                          gap: 20,
                          children: [
                              (0, S.jsx)(sP.k, {
                                  label: "Add allowed app version (required)",
                                  autoFocus: !0,
                                  value: s,
                                  onKeyDown: this.handleAllowedVersionEnter,
                                  error: a,
                                  onChange: this.handleAllowedVersionEntry,
                                  placeholder: "Example: 34",
                                  trailing: { icon: cR.j, onClick: this.handleAddAllowedVersion, "aria-label": "Add" },
                              }),
                              (0, S.jsx)(sT.l, {
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
                    : (0, S.jsx)(hu.f, {
                          label: "Limit to User IDs (optional)",
                          helperText: "User IDs can be separated by whitespace or commas.",
                          value: n,
                          error: i,
                          onBlur: () => this.setUserEntryError(""),
                          onChange: this.handleUserIDEntry,
                      }),
                (0, S.jsx)(hu.f, {
                    label: "Client Experiment Override",
                    description:
                        "Locally override the given experiments to the given bucket. This ONLY applies locally and WILL NOT affect the server. When the user clears build override, the experiment override is removed as well.",
                    value: o,
                    error: d,
                    onChange: this.handleExperiments,
                    placeholder: '{"2022-01_threads":1}',
                }),
                (0, S.jsx)(L.d, { label: "Allow logged out users", checked: r, onChange: this.handleAllowLoggedOut }),
            ],
        });
    }
    renderHelpMessage() {
        let { statusText: e, status: t } = this.state;
        if (null == e) return (0, S.jsx)("div", {});
        let n = ta.Y.INFO;
        switch (t) {
            case 0:
                n = ta.Y.ERROR;
                break;
            case 1:
                n = ta.Y.WARNING;
        }
        return (0, S.jsx)(ta.p, { messageType: n, children: e });
    }
    render() {
        let { onClose: e, transitionState: t } = this.props,
            { publicLink: n } = this.state;
        return (0, S.jsx)(sG.Modal, {
            title: "Generate Public Build Override Link",
            input: this.renderHelpMessage(),
            actionBarInput: (0, S.jsx)(uw.A, { value: n }),
            transitionState: t,
            "aria-label": "Generate Public Build Override Link",
            actions: [{ variant: "primary", text: "Generate Link", onClick: this.handleGenerateLink }],
            onClose: e,
            children: this.renderSettingsForm(),
        });
    }
}
let hf = (0, o.E2)(d.X.BUILD_OVERRIDES, { useSearchTerms: () => ["build overrides"], Component: hS });
var hb = n(256311),
    hN = n(883600);
let hC = (0, o.E2)(d.X.CHANGE_LOG_OVERRIDE, {
    useSearchTerms: () => ["changelog override", "change log override"],
    Component: function () {
        let e = (0, O.bG)([hN.A], () => hN.A.overrideId()),
            t = async (e) => {
                let t = hN.A.getChangelog(e, "en-US");
                return null != t ? t : ((await hb.A.fetchChangelog(e, "en-US", !1, !0)) ?? null);
            };
        return (0, S.jsx)(hw, {
            label: "Change Log Override",
            description: "Provide a change log ID to override the change log shown to this user.",
            placeholder: "Enter Change Log ID...",
            overrideId: e ?? null,
            setOverride: (e) => hb.A.setChangelogOverride(e),
            fetchOverride: t,
        });
    },
});
var hI = n(506774);
let hv = new Date("2018-01-01"),
    hy = (0, o.Tf)(d.X.CHANGE_LOG_CLEAR, {
        useTitle: () => "Clear Change Log",
        useSubtitle: () => "Resets the change log state so that it will show again on the next startup.",
        useLabel: () => "Clear",
        useDisabled: () => c.pK.useSetting() === dX.default.fromTimestamp(hv.getTime()),
        onClick: () => (hI.w.set("lastChangeLogDate", hv), c.pK.updateSetting(dX.default.fromTimestamp(hv.getTime()))),
    }),
    hj = (0, o.zD)(d.X.DISABLE_APP_COLLECTIONS_CACHE, {
        useTitle: () => "Disable Application Collections Cache",
        useSubtitle: () => "Forces application collection updates to be shown immediately.",
        useDisabled: () => (0, O.bG)([rG.default], () => rG.default.onlyShowPreviewAppCollections),
        useValue: () =>
            (0, O.bG)(
                [rG.default],
                () => rG.default.disableAppCollectionsCache || rG.default.onlyShowPreviewAppCollections,
            ),
        setValue: (e) => (0, rD.x)({ disableAppCollectionsCache: e }),
    }),
    hO = (0, o.zD)(d.X.FORCE_CANARY_API, {
        useTitle: () => "Force Canary API",
        useSubtitle: () => "Routes all API requests to Canary instances.",
        useValue: () => (0, O.bG)([rG.default], () => rG.default.isForcedCanary),
        setValue: (e) => {
            (0, rD.x)({ canary: e });
        },
    }),
    hR = (0, o.zD)(d.X.LOAD_SOURCE_MAPS, {
        useTitle: () => "Load Source Maps",
        useSubtitle: () => "Downloads source maps on this client. Only enable on devices you trust.",
        useValue: () => (0, O.bG)([rG.default], () => rG.default.sourceMapsEnabled),
        setValue: (e) => (0, rD.x)({ sourceMapsEnabled: e }),
    }),
    hL = (0, o.zD)(d.X.ONLY_SHOW_PREVIEW_APP_COLLECTIONS, {
        useTitle: () => "Only Show Preview App Collections",
        useSubtitle: () =>
            "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
        useValue: () => (0, O.bG)([rG.default], () => rG.default.onlyShowPreviewAppCollections),
        setValue: (e) => (0, rD.x)({ onlyShowPreviewAppCollections: e }),
    });
var hD = n(10094),
    hG = n(683760);
let hP = [
        { id: "none", label: "Non-Nitro", value: 0 },
        { id: "tier_0", label: "Nitro Basic", value: lf.PremiumTypes.TIER_0 },
        { id: "tier_1", label: "Nitro Classic", value: lf.PremiumTypes.TIER_1 },
        { id: "tier_2", label: "Nitro Standard", value: lf.PremiumTypes.TIER_2 },
    ],
    hM = (0, o.Hn)(d.X.PREMIUM_TYPE_OVERRIDE, {
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
var hU = n(246605),
    hk = n(274184);
let hV = (0, o.E2)(d.X.SURVEY_OVERRIDE, {
    useSearchTerms: () => ["survey override"],
    Component: function () {
        let e = (0, O.bG)([hk.Ay], () => hk.Ay.getSurveyOverride());
        return (0, S.jsx)(hw, {
            label: "Survey Override",
            description: "Provide a survey ID to override the survey shown to this user.",
            placeholder: "Enter Survey ID...",
            overrideId: e ?? null,
            setOverride: (e) => hU.xr(e),
            fetchOverride: (e) => hU.BC(e, !0) ?? null,
        });
    },
});
function hw(e) {
    let { label: t, description: n, placeholder: i, overrideId: l, setOverride: s, fetchOverride: a } = e,
        [r, o] = x.useState(l ?? ""),
        d = x.useRef(null),
        [u, c] = x.useState(0),
        g = () => {
            null != d.current && (clearTimeout(d.current), (d.current = null));
        };
    return (
        x.useEffect(() => g, []),
        (0, S.jsx)(lO.D, {
            layout: "horizontal-responsive",
            label: t,
            description: n,
            children: (0, S.jsx)(sP.k, {
                placeholder: i,
                error: 2 === u ? "Failed to fetch override" : void 0,
                successMessage: 3 === u ? "Override applied" : void 0,
                value: r,
                onChange: (e) => {
                    if (!(e.length > 0) || /^[0-9]+$/.test(e)) {
                        if ((o(e), g(), 0 === e.length)) {
                            c(0), s(null);
                            return;
                        }
                        d.current = setTimeout(() => {
                            c(1),
                                a(e).then((t) => {
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
let hB = (0, o.zZ)(d.X.DEV_OVERRIDES, {
        useTitle: () => "Overrides",
        buildLayout: () => [hM, hV, hC, hy, hO, ho, hL, hj, hR, hf],
        useInlineNotice: () => ({
            type: ef.lT.INLINE_NOTICE,
            noticeType: "info",
            useText: () => g.intl.format(g.t.UeZJlg, { link: "https://i.dis.gd/dev-settings-changes" }),
        }),
    }),
    hF = (0, o.zD)(d.X.ANALYTICS_LOGS, {
        useTitle: () => "Enable Logging of Analytics Events",
        useSubtitle: () => "Logs all analytics events to the developer console.",
        useValue: () => (0, O.bG)([rG.default], () => rG.default.isLoggingAnalyticsEvents),
        setValue: (e) => (0, rD.x)({ logAnalyticsEvents: e }),
    }),
    hz = (0, o.zD)(d.X.GATEWAY_LOGS, {
        useTitle: () => "Log Gateway Events",
        useSubtitle: () => "Logs all gateway events to console, including content. Enable verbose logs to see them.",
        useValue: () => (0, O.bG)([rG.default], () => rG.default.isLoggingGatewayEvents),
        setValue: (e) => (0, rD.x)({ logGatewayEvents: e }),
    }),
    hX = (0, o.zD)(d.X.KEEP_POPOUTS_OPEN, {
        useTitle: () => "Keep Popouts Open",
        useSubtitle: () =>
            "When enabled, popouts will not close automatically, allowing their console contents to be inspected after a crash.",
        useValue: () => (0, O.bG)([rG.default], () => rG.default.preventPopoutClose),
        setValue: (e) => (0, rD.x)({ preventPopoutClose: e }),
    }),
    hY = (0, o.zD)(d.X.KEYBOARD_MISMATCHES, {
        useTitle: () => "Enable Logging of Keyboard Mismatches",
        useSubtitle: () => "Logs mismatches in detected keyboard codes to the console.",
        useValue: () => (0, O.bG)([rG.default], () => rG.default.logKeyboardMismatches),
        setValue: (e) => (0, rD.x)({ logKeyboardMismatches: e }),
    }),
    hH = (0, o.zD)(d.X.OVERLAY_RPC_LOGS, {
        useTitle: () => "Enable Logging of Overlay RPC Events & Commands",
        useSubtitle: () => "Logs all overlay related RPC events. Super noisy if an overlay is connected.",
        useValue: () => (0, O.bG)([rG.default], () => rG.default.isLoggingOverlayEvents),
        setValue: (e) => (0, rD.x)({ logOverlayEvents: e }),
    }),
    hK = (0, o.zD)(d.X.QUEST_LOGGING, {
        useTitle: () => "Enable Quests Debug Logging",
        useSubtitle: () => "Logs quest lifecycle events to the developer console.",
        useValue: () => (0, O.bG)([rG.default], () => rG.default.isLoggingQuestEvents),
        setValue: (e) => (0, rD.x)({ logQuestEvents: e }),
    }),
    hW = (0, o.zD)(d.X.REQUEST_TRACING, {
        useTitle: () => "Enable Tracing Requests",
        useSubtitle: () => "Force trace all client requests with APM.",
        useValue: () => (0, O.bG)([rG.default], () => rG.default.isTracingRequests),
        setValue: (e) => (0, rD.x)({ trace: e }),
    }),
    hZ = (0, o.zZ)(d.X.LOGGING, { useTitle: () => "Logging", buildLayout: () => [hz, hH, hW, hF, hY, hX, hK] }),
    hq = (0, o.t_)(d.X.DEVELOPER_OPTIONS_PANEL, {
        useTitle: () => "Developer Options",
        buildLayout: () => [hB, hZ, hr],
    }),
    hQ = (0, o.i4)(d.X.DEVELOPER_OPTIONS_SIDEBAR_ITEM, {
        useTitle: () => "Developer Options",
        icon: m8.V,
        useMenu: function () {
            let {
                    layoutDebuggingEnabled: e,
                    isDeveloper: t,
                    isLoggingGatewayEvents: n,
                    isLoggingOverlayEvents: i,
                    isLoggingAnalyticsEvents: l,
                    isTracingRequests: s,
                    isForcedCanary: a,
                    isAxeEnabled: r,
                    preventPopoutClose: o,
                    onlyShowPreviewAppCollections: u,
                    disableAppCollectionsCache: g,
                } = (0, O.cf)([rG.default, m3.A], () => ({
                    layoutDebuggingEnabled: rG.default.layoutDebuggingEnabled,
                    isDeveloper: m3.A.isDeveloper,
                    isLoggingGatewayEvents: rG.default.isLoggingGatewayEvents,
                    isLoggingOverlayEvents: rG.default.isLoggingOverlayEvents,
                    isLoggingAnalyticsEvents: rG.default.isLoggingAnalyticsEvents,
                    isTracingRequests: rG.default.isTracingRequests,
                    isForcedCanary: rG.default.isForcedCanary,
                    isSourceMapsEnabled: rG.default.sourceMapsEnabled,
                    isAxeEnabled: rG.default.isAxeEnabled,
                    preventPopoutClose: rG.default.preventPopoutClose,
                    onlyShowPreviewAppCollections: rG.default.onlyShowPreviewAppCollections,
                    disableAppCollectionsCache: rG.default.disableAppCollectionsCache,
                })),
                { horizontalSpacing: _, verticalSpacing: m } = (0, m9.Or)(),
                { setHorizontalSpacing: h, setVerticalSpacing: A } = m9.Or.getState(),
                p = c.HZ.useSetting();
            return t
                ? [
                      (0, S.jsxs)(
                          M.Dr,
                          {
                              id: "overrides",
                              label: "Overrides",
                              action: () => {
                                  (0, ey.openUserSettings)(d.X.DEV_OVERRIDES);
                              },
                              children: [
                                  (0, S.jsx)(
                                      M.sL,
                                      {
                                          id: "always-deliver",
                                          label: "Always Deliver Ads",
                                          checked: p,
                                          action: () => {
                                              c.HZ.updateSetting(!p);
                                          },
                                      },
                                      "always-deliver",
                                  ),
                                  (0, S.jsx)(
                                      M.sL,
                                      {
                                          id: "forced-canary",
                                          label: "Forced Canary",
                                          checked: a,
                                          action: () => {
                                              (0, rD.x)({ canary: !a });
                                          },
                                      },
                                      "forced-canary",
                                  ),
                                  (0, S.jsx)(
                                      M.sL,
                                      {
                                          id: "preview-collections",
                                          label: "Preview Unpublished Collections",
                                          checked: u,
                                          action: () => {
                                              (0, rD.x)({ onlyShowPreviewAppCollections: !u });
                                          },
                                      },
                                      "preview-collections",
                                  ),
                                  (0, S.jsx)(
                                      M.sL,
                                      {
                                          id: "disable-collections-cache",
                                          label: "Disable Collections Cache",
                                          checked: g,
                                          action: () => {
                                              (0, rD.x)({ disableAppCollectionsCache: !g });
                                          },
                                      },
                                      "disable-collections-cache",
                                  ),
                              ],
                          },
                          "overrides",
                      ),
                      (0, S.jsxs)(
                          M.Dr,
                          {
                              id: "logging",
                              label: "Logging",
                              action: () => {
                                  (0, ey.openUserSettings)(d.X.LOGGING);
                              },
                              children: [
                                  (0, S.jsx)(
                                      M.sL,
                                      {
                                          id: "gateway-events",
                                          label: "Gateway Events",
                                          checked: n,
                                          action: () => {
                                              (0, rD.x)({ logGatewayEvents: !n });
                                          },
                                      },
                                      "gateway-events",
                                  ),
                                  (0, S.jsx)(
                                      M.sL,
                                      {
                                          id: "overlay-events",
                                          label: "Overlay RPC Events",
                                          checked: i,
                                          action: () => {
                                              (0, rD.x)({ logOverlayEvents: !i });
                                          },
                                      },
                                      "overlay-events",
                                  ),
                                  (0, S.jsx)(
                                      M.sL,
                                      {
                                          id: "analytics-events",
                                          label: "Analytics Events",
                                          checked: l,
                                          action: () => {
                                              (0, rD.x)({ logAnalyticsEvents: !l });
                                          },
                                      },
                                      "analytics-events",
                                  ),
                                  (0, S.jsx)(
                                      M.sL,
                                      {
                                          id: "tracing-requests",
                                          label: "Tracing Requests",
                                          checked: s,
                                          action: () => {
                                              (0, rD.x)({ trace: !s });
                                          },
                                      },
                                      "tracing-requests",
                                  ),
                                  (0, S.jsx)(
                                      M.sL,
                                      {
                                          id: "prevent-popout-close",
                                          label: "Prevent Popouts From Closing",
                                          checked: o,
                                          action: () => {
                                              (0, rD.x)({ preventPopoutClose: !o });
                                          },
                                      },
                                      "prevent-popout-close",
                                  ),
                              ],
                          },
                          "logging",
                      ),
                      (0, S.jsxs)(
                          M.Dr,
                          {
                              id: "design-tools",
                              label: "Design/A11y Tools",
                              action: () => {
                                  (0, ey.openUserSettings)(d.X.DESIGN_TOOLS);
                              },
                              children: [
                                  (0, S.jsx)(
                                      M.sL,
                                      {
                                          id: "accessibility-auditing",
                                          label: "Accessibility Auditing",
                                          checked: r,
                                          action: () => {
                                              (0, rD.x)({ axeEnabled: !r });
                                          },
                                      },
                                      "accessibility-auditing",
                                  ),
                                  (0, S.jsx)(
                                      M.sL,
                                      {
                                          id: "layout-debugging",
                                          label: "Enable Layout Debugging",
                                          checked: e,
                                          action: () => {
                                              (0, rD.x)({ layoutDebuggingEnabled: !e });
                                          },
                                      },
                                      "layout-debugging",
                                  ),
                                  e &&
                                      (0, S.jsxs)(S.Fragment, {
                                          children: [
                                              (0, S.jsx)(
                                                  M.aK,
                                                  {
                                                      id: "horizontal-spacing",
                                                      label: "Horizontal Spacing",
                                                      control: (e, t) =>
                                                          (0, S.jsx)(m4.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: _,
                                                              minValue: 0,
                                                              maxValue: m9.YR,
                                                              onChange: (e) => h(e),
                                                              renderValue: (e) => `${Math.round(e)}px`,
                                                              "aria-label": "Horizontal Spacing",
                                                          }),
                                                  },
                                                  "horizontal-spacing",
                                              ),
                                              (0, S.jsx)(
                                                  M.aK,
                                                  {
                                                      id: "vertical-spacing",
                                                      label: "Vertical Spacing",
                                                      control: (e, t) =>
                                                          (0, S.jsx)(m4.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: m,
                                                              minValue: 0,
                                                              maxValue: m9.YR,
                                                              onChange: (e) => A(e),
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
        buildLayout: () => [hq],
    });
var hJ = n(127062),
    h$ = n(84654),
    h0 = n(80703),
    h1 = n(691540),
    h2 = n(857250),
    h5 = n(97483),
    h3 = n(100392),
    h8 = n(102609),
    h4 = n(271478),
    h9 = n(736056),
    h7 = n(386976),
    h6 = n(257433),
    Ae = n(32523),
    At = n(222735),
    An = n(688151),
    Ai = n(491210);
function Al(e) {
    let { experiment: t, experimentId: n, overrideInfo: i, defaultOpen: l } = e,
        [s, a] = x.useState(l),
        [r, o] = x.useState(!1),
        d = x.useCallback(() => {
            a((e) => !e);
        }, []),
        u = (0, O.bG)([u1.default], () => u1.default.getId()),
        c = (0, O.bG)([u1.default], () => {
            let e = u1.default.getInstallationForTracking();
            return null == e ? null : (0, h0.v)(e);
        }),
        g = "installation" === t.kind && null != c ? c : u,
        _ = (0, h6.iN)(t, g),
        m = (0, h6.Fm)(t, g),
        h = (0, O.yK)([h9.A], () =>
            eR()
                .sortBy(h9.A.getRecentExposures(An.Vh.USER, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return `${new Date(n).toLocaleString()} (${t})`;
                }),
        ),
        A = x.useCallback(
            (e) => {
                (0, u4.C)((0, h3.yA)(n), () => {
                    (0, h1.P0)({
                        id: "experiment-link-copied",
                        message: "Copied experiment link",
                        type: h5.Ck.SUCCESS,
                    }),
                        e.preventDefault(),
                        e.stopPropagation();
                });
            },
            [n],
        ),
        p = (0, S.jsx)(eB.s, {
            "aria-label": "Toggle visibility",
            onClick: d,
            children: (0, S.jsxs)(k.E, {
                variant: "text-md/medium",
                className: Ai.DD,
                children: [
                    (0, S.jsxs)("div", {
                        children: [
                            (0, S.jsxs)(R.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                children: [
                                    t.title,
                                    " ",
                                    u4.p5 &&
                                        (0, S.jsx)(U.D, { onClick: A, children: (0, S.jsx)(hd.q, { size: "xs" }) }),
                                ],
                            }),
                            (0, S.jsx)(k.E, { color: "text-muted", variant: "text-sm/normal", children: n }),
                        ],
                    }),
                    (0, S.jsx)("span", {
                        className: Ai.km,
                        children: "installation" === t.kind ? "Installation" : "User",
                    }),
                ],
            }),
        });
    if (!s) return (0, S.jsx)("div", { className: Ai.Os, children: p });
    let T = "";
    return (
        (T =
            t.system === h8.l5.LEGACY
                ? `Currently assigned to bucket ${_ ?? An.RE.NOT_ELIGIBLE}`
                : null != _
                  ? `Currently assigned to variant ${_}`
                  : "Currently unassigned"),
        (0, S.jsxs)("div", {
            className: Ai.Os,
            children: [
                p,
                (0, S.jsx)("div", {
                    children: (0, S.jsx)(h4.g, {
                        label: t.system === h8.l5.LEGACY ? "Bucket Override" : "Variant Override",
                        description: T,
                        experiment: t,
                        experimentId: n,
                        overrideInfo: i,
                    }),
                }),
                (0, S.jsx)("div", {
                    className: Ai.h_,
                    children:
                        null == m
                            ? (0, S.jsx)(k.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  children:
                                      'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.',
                              })
                            : null,
                }),
                r
                    ? (0, S.jsxs)("div", {
                          children: [
                              (0, S.jsx)(k.E, {
                                  variant: "text-lg/medium",
                                  className: Ai.id,
                                  children: "Server Descriptor",
                              }),
                              (0, S.jsx)(k.E, {
                                  variant: "code",
                                  className: Ai.AS,
                                  children: null == m ? "None" : JSON.stringify(m, void 0, 2),
                              }),
                              (0, S.jsx)(k.E, {
                                  variant: "text-lg/medium",
                                  className: Ai.id,
                                  children: "Override Descriptor",
                              }),
                              (0, S.jsx)(k.E, {
                                  variant: "code",
                                  className: Ai.AS,
                                  children:
                                      i?.originalDescriptor == null
                                          ? "None"
                                          : JSON.stringify(i.originalDescriptor, void 0, 2),
                              }),
                              (0, S.jsx)(k.E, {
                                  variant: "text-lg/medium",
                                  className: Ai.id,
                                  children: "Recent Exposures",
                              }),
                              (0, S.jsx)(k.E, {
                                  variant: "code",
                                  className: Ai.AS,
                                  children: 0 === h.length ? "None" : h.join("\n"),
                              }),
                          ],
                      })
                    : (0, S.jsx)("div", {
                          className: Ai.id,
                          children: (0, S.jsx)(B.Q, {
                              variant: "secondary",
                              text: "More Details \xbb",
                              onClick: () => o(!0),
                          }),
                      }),
                (0, S.jsx)(nO.c, { className: Ai.yF }),
            ],
        })
    );
}
function As(e) {
    let { experiment: t, experimentId: n, overrideInfo: i } = e,
        [l, s] = x.useState(null != i),
        [a, r] = x.useState(!1),
        o = x.useCallback(() => {
            s((e) => !e);
        }, []),
        d = (0, O.bG)([h9.A], () => h9.A.getLoadedGuildExperiment(n)),
        u = (0, O.yK)([h9.A], () =>
            eR()
                .sortBy(h9.A.getRecentExposures(An.Vh.GUILD, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return `${new Date(n).toLocaleString()} (${t})`;
                }),
        ),
        [c, g] = (0, O.yK)([H.A, h9.A], () => {
            let e = eR().sortBy(H.A.getGuildsArray(), (e) => e.name.toLowerCase()),
                t = {},
                i = [];
            for (let l of e) {
                let e = h9.A.getGuildExperimentDescriptor(n, l.id),
                    s = e?.bucket ?? An.RE.NOT_ELIGIBLE;
                s in t || (t[s] = 0), t[s]++, i.push(`${l.name}: ${s}`);
            }
            let l = eR()(t)
                .keys()
                .map(Number)
                .sort()
                .map((e) => `${t[e]} guilds in bucket ${e}`)
                .join(", ");
            return [i.join("\n"), l];
        }),
        _ = (0, S.jsx)(U.D, {
            onClick: o,
            children: (0, S.jsxs)(k.E, {
                variant: "text-md/medium",
                className: Ai.DD,
                children: [
                    (0, S.jsxs)("div", {
                        children: [
                            (0, S.jsx)("span", { children: t.title }),
                            (0, S.jsx)(k.E, { color: "text-muted", variant: "text-sm/normal", children: n }),
                        ],
                    }),
                    (0, S.jsx)("span", { className: Ai.km, children: "Guild" }),
                ],
            }),
        });
    return l
        ? (0, S.jsxs)("div", {
              className: Ai.Os,
              children: [
                  _,
                  (0, S.jsx)(h4.g, {
                      label: "Bucket Override",
                      description: `Current Assignments: ${g}`,
                      experiment: t,
                      experimentId: n,
                      overrideInfo: i,
                  }),
                  (0, S.jsx)("div", {
                      className: Ai.h_,
                      children:
                          null == d
                              ? (0, S.jsx)(k.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children:
                                        'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.',
                                })
                              : null,
                  }),
                  a
                      ? (0, S.jsxs)("div", {
                            children: [
                                (0, S.jsx)(k.E, {
                                    variant: "text-lg/medium",
                                    className: Ai.id,
                                    children: "Guild Assignments",
                                }),
                                (0, S.jsx)(k.E, { variant: "code", className: Ai.AS, children: c }),
                                (0, S.jsx)(k.E, {
                                    variant: "text-lg/medium",
                                    className: Ai.id,
                                    children: "Server Descriptor",
                                }),
                                (0, S.jsx)(k.E, {
                                    variant: "code",
                                    className: Ai.AS,
                                    children: null == d ? "None" : JSON.stringify(d, void 0, 2),
                                }),
                                (0, S.jsx)(k.E, {
                                    variant: "text-lg/medium",
                                    className: Ai.id,
                                    children: "Override Descriptor",
                                }),
                                (0, S.jsx)(k.E, {
                                    variant: "code",
                                    className: Ai.AS,
                                    children:
                                        i?.originalDescriptor == null
                                            ? "None"
                                            : JSON.stringify(i.originalDescriptor, void 0, 2),
                                }),
                                (0, S.jsx)(k.E, {
                                    variant: "text-lg/medium",
                                    className: Ai.id,
                                    children: "Recent Exposures",
                                }),
                                (0, S.jsx)(k.E, {
                                    variant: "code",
                                    className: Ai.AS,
                                    children: 0 === u.length ? "None" : u.join("\n"),
                                }),
                            ],
                        })
                      : (0, S.jsx)("div", {
                            className: Ai.id,
                            children: (0, S.jsx)(B.Q, {
                                variant: "secondary",
                                text: "More Details \xbb",
                                onClick: () => r(!0),
                            }),
                        }),
                  (0, S.jsx)(nO.c, { className: Ai.yF }),
              ],
          })
        : (0, S.jsx)("div", { className: Ai.Os, children: _ });
}
let Aa = (0, o.E2)(d.X.EXPERIMENTS_SETTING, {
        Component: function () {
            let { experiments: e, overridesInfo: t } = (0, h7.op)(),
                { experiments: n, overridesInfo: i } = (0, Ae.hI)(),
                l = x.useMemo(() => ({ ...n, ...e }), [n, e]),
                s = x.useMemo(() => ({ ...i, ...t }), [i, t]),
                a = (0, O.bG)([u1.default], () => {
                    let e = u1.default.getInstallationForTracking();
                    return null == e ? null : (0, h0.v)(e);
                }),
                [r, o] = x.useState(""),
                d = (0, At.oC)((0, At.R3)((0, At.Fm)(l), s), r);
            return (0, S.jsxs)("div", {
                "data-mtctest-ignore": "true",
                children: [
                    null != a &&
                        (0, S.jsxs)(R.B, {
                            style: { gap: 8, marginBottom: 16 },
                            children: [
                                (0, S.jsxs)(k.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: ["Installation ID: ", a],
                                }),
                                u4.p5 &&
                                    (0, S.jsx)(B.Q, {
                                        size: "sm",
                                        onClick: () => {
                                            (0, u4.C)(a, () => {
                                                (0, h1.P0)((0, h2.o)("Installation ID copied!", h5.Ck.SUCCESS));
                                            });
                                        },
                                        text: "Copy",
                                    }),
                            ],
                        }),
                    (0, S.jsx)(D.I, { placeholder: "Search experiments", query: r, onChange: o, onClear: () => o("") }),
                    d.length > 0
                        ? d.map((e) => {
                              let t = "guild" === e.experiment.kind ? As : Al;
                              return (0, S.jsx)(
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
                        : (0, S.jsx)("div", {
                              className: Ai.p$,
                              children: (0, S.jsx)(em.D, {
                                  variant: "heading-md/semibold",
                                  children: "No Experiments Found",
                              }),
                          }),
                ],
            });
        },
        useSearchTerms: () => ["Experiments", "Bucket Override", "Variant Override"],
    }),
    Ar = (0, o.zZ)(d.X.EXPERIMENTS_CATEGORY, { buildLayout: () => [Aa] }),
    Ao = (0, o.t_)(d.X.EXPERIMENTS_PANEL, { useTitle: () => "Experiments", buildLayout: () => [Ar] }),
    Ad = (0, o.i4)(d.X.EXPERIMENTS_SIDEBAR_ITEM, {
        useTitle: () => "Experiments",
        icon: hJ.c,
        useMenu: h$.A,
        buildLayout: () => [Ao],
    }),
    Au = (0, o.WI)(d.X.DEVELOPER_SECTION, {
        useTitle: () => g.intl.string(g.t.CbItOL),
        usePredicate: () => m3.A.isDeveloper,
        buildLayout: () => [Ad, hQ],
    });
var Ac = n(631670),
    Ag = n(252452),
    A_ = n(47360),
    Am = n(836602),
    Ah = n(591179),
    AA = n(854627),
    Ap = n(975732),
    AT = n(761508),
    AE = n(83257),
    AS = n(159001),
    Ax = n(344346),
    Af = n(919395),
    Ab = n(233641);
function AN(e) {
    let { title: t, children: n } = e;
    return (0, S.jsxs)("div", {
        children: [(0, S.jsx)(em.D, { variant: "text-md/medium", className: Ab.Vf, children: t }), n],
    });
}
function AC(e) {
    let {
        children: t,
        className: n,
        layoutClassName: i,
        profilePreview: l,
        profilePreviewTitle: s,
        nameplatePreview: a,
        stickyPreview: r = !0,
    } = e;
    return (0, S.jsx)("div", {
        className: ew()(Ab.UA, n),
        children: (0, S.jsxs)("div", {
            className: ew()(Ab.yt, i),
            children: [
                (0, S.jsx)("div", {
                    className: ew()(Ab.Fp, r && Ab.Oz),
                    children: (0, S.jsxs)(S.Fragment, {
                        children: [
                            (0, S.jsx)(AN, { title: s ?? g.intl.string(g.t.Zb06yP), children: l }),
                            null != a ? (0, S.jsx)(AN, { title: g.intl.string(g.t.x5CoXR), children: a }) : null,
                        ],
                    }),
                }),
                (0, S.jsx)("div", { className: Ab.oB, children: t }),
            ],
        }),
    });
}
var AI = n(986687),
    Av = n(101058),
    Ay = n(841595),
    Aj = n(696451),
    AO = n(10478);
function AR() {
    return (0, S.jsxs)("div", {
        className: AO.p$,
        children: [
            (0, S.jsx)("img", { src: "/assets/b3b15f93f9f43174.svg", alt: "", className: AO.Sl }),
            (0, S.jsx)(em.D, {
                className: AO.h8,
                variant: "heading-lg/extrabold",
                children: g.intl.string(g.t.Z1OZCV),
            }),
            (0, S.jsx)(k.E, { className: AO.h8, variant: "text-md/normal", children: g.intl.string(g.t.ZSt4Tt) }),
            (0, S.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: AO.h8,
                children: (0, S.jsx)(eh.$, {
                    variant: "primary",
                    text: g.intl.string(g.t.jQ3pqt),
                    onClick: () => {
                        (0, lR.pX)(q.BVt.GUILD_DISCOVERY), (0, lp.default)();
                    },
                }),
            }),
        ],
    });
}
var AL = n(81400),
    AD = n(757036),
    AG = n(252732),
    AP = n(355622),
    AM = n(408018),
    AU = n(201349),
    Ak = n(158983);
let AV = (0, lS.Ld)(),
    Aw = (0, t0.createChannelRecord)({ id: "1", type: q.rbe.DM }),
    AB = (0, lS.Ld)();
function AF(e) {
    let {
            sectionTitle: t,
            errors: n,
            onBioChange: i,
            pendingBio: l,
            placeholder: s,
            currentBio: a,
            disabled: r = !1,
        } = e,
        [o, d] = x.useState(l ?? a),
        [u, c] = x.useState((0, AM.x7)(o)),
        _ = x.useRef(a),
        m = x.useRef(!1);
    return (
        x.useEffect(() => {
            if (_.current !== a) {
                let e = (0, AM.x7)(a);
                d(a), c(e);
            }
            _.current = a;
        }, [a]),
        x.useEffect(() => {
            void 0 !== l || o === a || m.current || (d(a), c((0, AM.x7)(a)));
        }, [l, a, o]),
        (0, S.jsxs)(oy.A, {
            title: t,
            titleId: AV,
            description: g.intl.string(g.t.Bbw6Ac),
            errors: n,
            disabled: r,
            children: [
                (0, S.jsx)(AU.Ay, {
                    "aria-describedby": AB,
                    "aria-labelledby": AV,
                    className: Ak.i,
                    innerClassName: Ak.Z,
                    maxCharacterCount: q.NA2,
                    onChange: function (e, t, n) {
                        t !== o && (d(t), c(n), i(t));
                    },
                    placeholder: s,
                    channel: Aw,
                    textValue: o,
                    richValue: u,
                    emojiPickerCloseOnModalOuterClick: !0,
                    parentModalKey: ey.USER_SETTINGS_MODAL_KEY,
                    type: AP.oU.PROFILE_BIO_INPUT,
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
                (0, S.jsx)(F.A, { id: AB, children: g.intl.format(g.t["+DFxLc"], { maxLength: q.NA2 }) }),
            ],
        })
    );
}
var Az = n(930861),
    AX = n(821956),
    AY = n(562819),
    AH = n(84540),
    AK = n(408919);
function AW(e) {
    let { user: t, guild: n, className: i, sectionTitle: l, forcedDivider: s = !1, withTutorial: a = !1 } = e,
        { analyticsLocations: r } = (0, iM.Ay)(),
        o = (0, Af.a4)({ user: t, guildId: n?.id }),
        { pendingAvatarDecoration: d, errors: u } = (0, Af.CP)(n?.id),
        c = a ? Az.wL : rA.$n;
    return (0, S.jsx)(oy.A, {
        className: i,
        forcedDivider: s,
        hasBackground: !0,
        title: l,
        errors: u,
        children: (0, S.jsxs)("div", {
            className: AK.NC,
            children: [
                (0, S.jsx)(c, {
                    size: rA.$n.Sizes.SMALL,
                    onClick: () => {
                        (0, AY.L)({ analyticsLocations: r, guild: n });
                    },
                    className: ew()({ [AK.yj]: a }),
                    children: g.intl.string(g.t.BVcYCx),
                }),
                (void 0 === d ? null != o : null != d) &&
                    (0, S.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: AK.DT,
                        children: (0, S.jsx)(eh.$, {
                            variant: "secondary",
                            size: "sm",
                            text: (0, AX.uZ)(t, n) ? g.intl.string(g.t.CHf9iJ) : g.intl.string(g.t.OrokWm),
                            onClick: () => {
                                (0, AH.p)({ guildId: n?.id, avatarDecoration: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var AZ = n(339984),
    Aq = n(114077);
let AQ = [{ name: "gif", extensions: ["gif"] }];
function AJ(e) {
    let {
            showRemoveAvatarButton: t,
            errors: n,
            onAvatarChange: i,
            sectionTitle: l,
            changeAvatarButtonText: s,
            guildId: a,
            className: r,
            disabled: o = !1,
            isTryItOut: d = !1,
            forcedDivider: u,
            withHighlight: c = !1,
        } = e,
        { newestAnalyticsLocation: _ } = (0, iM.Ay)(),
        m = c ? Az.wL : rA.$n,
        h = x.useCallback(() => {
            (0, AG.XD)({
                uploadType: AZ.HL.AVATAR,
                analyticsSource: _,
                filters: d ? AQ : void 0,
                guildId: a,
                isTryItOut: d,
            });
        }, [a, _, d]);
    return (0, S.jsx)(oy.A, {
        className: r,
        title: l,
        errors: n,
        disabled: o,
        forcedDivider: u,
        children: (0, S.jsxs)("div", {
            className: Aq.NC,
            children: [
                (0, S.jsx)(m, {
                    className: ew()({ [Aq.yj]: c }),
                    size: rA.$n.Sizes.SMALL,
                    onClick: h,
                    children: s ?? g.intl.string(g.t["4OynCD"]),
                }),
                t &&
                    (0, S.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: Aq.DT,
                        children: (0, S.jsx)(eh.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != a ? g.intl.string(g.t.TDjKDm) : g.intl.string(g.t.twB3fz),
                            onClick: () => i(null),
                        }),
                    }),
            ],
        }),
    });
}
var A$ = n(152103);
function A0(e) {
    let { user: t, guildId: n, className: i } = e,
        l = oG.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: s } = (0, iM.Ay)(),
        {
            userDisplayNameStyles: a,
            guildDisplayNameStyles: r,
            pendingDisplayNameStyles: o,
            pendingErrors: d,
        } = (0, Af.B0)(t, n),
        u = (0, x.useCallback)(() => {
            X.default.track(q.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS), (0, iU.L)({ analyticsLocations: s, guildId: n });
        }, [s, n]),
        c = (0, x.useCallback)(() => {
            (0, AH.p)({ displayNameStyles: null }), X.default.track(q.HAw.DISPLAY_NAME_STYLES_REMOVED);
        }, []),
        _ = (0, x.useCallback)(() => {
            (0, AH.p)({ guildId: n, displayNameStyles: null });
        }, [n]),
        m = void 0 !== o || (null != n ? null != r : null != a);
    return (0, S.jsx)(oy.A, {
        title: g.intl.string(ik.default["86GtGH"]),
        className: i,
        showPremiumIcon: l,
        errors: d,
        children: (0, S.jsxs)("div", {
            className: A$.N,
            children: [
                (0, S.jsx)(eh.$, {
                    variant: "primary",
                    size: "sm",
                    text: g.intl.string(ik.default.vJqrIg),
                    onClick: u,
                }),
                null == n &&
                    m &&
                    (0, S.jsx)(eh.$, {
                        variant: "secondary",
                        size: "sm",
                        text: g.intl.string(ik.default.ymq8WQ),
                        onClick: c,
                    }),
                null != n &&
                    null != (void 0 !== o ? o : r) &&
                    (0, S.jsx)(eh.$, {
                        variant: "secondary",
                        size: "sm",
                        text: g.intl.string(ik.default["j/KRxc"]),
                        onClick: _,
                    }),
            ],
        }),
    });
}
var A1 = n(637193),
    A2 = n(727369);
function A5(e) {
    let { user: t, guild: n, titleIcon: i } = e,
        { analyticsLocations: l } = (0, iM.Ay)(),
        s = null != n,
        { userNameplate: a, guildNameplate: r, pendingNameplate: o, pendingErrors: d } = (0, Af.rv)(t, n?.id),
        u = x.useCallback(() => {
            (0, A1.p)({ analyticsLocations: l, guildId: n?.id });
        }, [l, n?.id]),
        c = x.useCallback(() => {
            (0, AH.p)({ guildId: n?.id, nameplate: null });
        }, [n?.id]);
    return (0, S.jsx)(oy.A, {
        title: g.intl.string(g.t.x5CoXR),
        titleIcon: i,
        errors: d,
        children: (0, S.jsxs)("div", {
            className: A2.u,
            children: [
                (0, S.jsx)(eh.$, { variant: "primary", size: "sm", text: g.intl.string(g.t.BwdeM1), onClick: u }),
                (void 0 === o ? (s ? r : a) != null : null != o) &&
                    (0, S.jsx)(eh.$, {
                        variant: "secondary",
                        size: "sm",
                        text: s ? g.intl.string(g.t.CHf9iJ) : g.intl.string(g.t["9zwziY"]),
                        onClick: c,
                    }),
            ],
        }),
    });
}
var A3 = n(33023);
function A8(e) {
    let {
            showRemoveBannerButton: t,
            errors: n,
            onBannerChange: i,
            guildId: l,
            className: s,
            disabled: a = !1,
            showPremiumIcon: r = !0,
            isTryItOut: o = !1,
            forcedDivider: d,
            withHighlight: u = !1,
        } = e,
        { newestAnalyticsLocation: c } = (0, iM.Ay)(),
        _ = u ? Az.wL : rA.$n;
    return (0, S.jsx)(oy.A, {
        className: s,
        title: g.intl.string(g.t.Vgdusv),
        showPremiumIcon: r,
        errors: n,
        disabled: a,
        forcedDivider: d,
        children: (0, S.jsxs)("div", {
            className: A3.NC,
            children: [
                (0, S.jsx)(_, {
                    className: ew()({ [A3.yj]: u }),
                    size: rA.$n.Sizes.SMALL,
                    onClick: () =>
                        (0, AG.XD)({ uploadType: AZ.HL.BANNER, analyticsSource: c, guildId: l, isTryItOut: o }),
                    children: g.intl.string(g.t.N0bC3P),
                }),
                t &&
                    (0, S.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: A3.DT,
                        children: (0, S.jsx)(eh.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != l ? g.intl.string(g.t.jHlJNS) : g.intl.string(g.t.tT9n7D),
                            onClick: () => i(null),
                        }),
                    }),
            ],
        }),
    });
}
var A4 = n(617061),
    A9 = n(872246);
function A7(e) {
    let {
            user: t,
            guild: n,
            initialSelectedEffect: i,
            className: l,
            sectionTitle: s,
            forcedDivider: a = !1,
            withTutorial: r = !1,
            showBorder: o = !1,
        } = e,
        { analyticsLocations: d } = (0, iM.Ay)(),
        u = oG.Ay.canUsePremiumProfileCustomization(t),
        c = (0, Af.N2)({ user: t, guildId: n?.id }),
        { pendingProfileEffect: _, errors: m } = (0, Af.nZ)(n?.id);
    x.useEffect(() => {
        u &&
            X.default.track(q.HAw.PREMIUM_UPSELL_VIEWED, {
                type: lf.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: d,
            });
    }, [u, d]);
    let h = r ? Az.wL : rA.$n;
    return (0, S.jsx)(oy.A, {
        forcedDivider: a,
        borderType: uY.i.PREMIUM,
        hasBackground: !0,
        title: s,
        showBorder: o,
        errors: m,
        className: l,
        children: (0, S.jsxs)("div", {
            className: A9.NC,
            children: [
                (0, S.jsx)(h, {
                    size: rA.$n.Sizes.SMALL,
                    onClick: () => {
                        (0, A4.W)({ analyticsLocations: d, guild: n, initialSelectedEffect: i });
                    },
                    className: ew()({ [A9.yj]: r }),
                    children: g.intl.string(g.t["/dRfCf"]),
                }),
                (void 0 === _ ? null != c : null != _) &&
                    (0, S.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: A9.DT,
                        children: (0, S.jsx)(eh.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? g.intl.string(g.t.CHf9iJ) : g.intl.string(g.t.uMuafO),
                            onClick: () => {
                                (0, AH.p)({ guildId: n?.id, profileEffect: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var A6 = n(13875),
    pe = n(515727),
    pt = n(238780);
function pn(e) {
    let { user: t, guild: n, sectionTitle: i } = e,
        { analyticsLocations: l } = (0, iM.Ay)(),
        s = (0, A6.sk)("ProfileFrameSection"),
        a = (0, Af.Xf)({ user: t, guildId: n?.id }),
        { pendingProfileFrame: r, errors: o } = (0, Af.Tu)(n?.id);
    return s
        ? (0, S.jsx)(oy.A, {
              borderType: uY.i.PREMIUM,
              hasBackground: !0,
              title: i,
              errors: o,
              children: (0, S.jsxs)("div", {
                  className: pt.N,
                  children: [
                      (0, S.jsx)(eh.$, {
                          variant: "primary",
                          size: "sm",
                          text: g.intl.string(g.t["9/hmle"]),
                          onClick: () => {
                              (0, pe.w)({ analyticsLocations: l, guild: n });
                          },
                      }),
                      (void 0 === r ? null != a : null != r) &&
                          (0, S.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: pt.D,
                              children: (0, S.jsx)(eh.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: null != n ? g.intl.string(g.t.CHf9iJ) : g.intl.string(g.t.nQBruk),
                                  onClick: () => {
                                      (0, AH.p)({ guildId: n?.id, profileFrame: null });
                                  },
                              }),
                          }),
                  ],
              }),
          })
        : null;
}
var pi = n(33851),
    pl = n.n(pi),
    ps = n(602853),
    pa = n(654107),
    pr = n(999291),
    po = n(101928),
    pd = n(132500),
    pu = n(317097),
    pc = n(508274),
    pg = n(919796),
    p_ = n(773431);
function pm(e) {
    let {
            onChange: t,
            onClose: n,
            color: i,
            suggestedColors: l,
            disabled: s,
            label: a,
            colorPickerMiddle: r,
            colorPickerFooter: o,
            showEyeDropper: d,
        } = e,
        u = x.useRef(null),
        c = (0, ps.r)(w.A.colors.BACKGROUND_BASE_LOW).hex(),
        _ = w.A.colors.BACKGROUND_MOD_MUTED.css,
        m = (0, AG.sN)(i),
        h = (0, pu.Hl)(i),
        A = h === c ? _ : h,
        p = m ? w.A.unsafe_rawColors.WHITE.css : w.A.unsafe_rawColors.PRIMARY_530.css,
        T = (0, pg.A)(r),
        E = (0, pg.A)(o),
        [f, b] = x.useState((0, pd.A)());
    return (
        x.useEffect(() => {
            (T !== r || E !== o) && b((0, pd.A)());
        }, [o, r, E, T]),
        (0, S.jsx)(G.Y, {
            targetElementRef: u,
            positionKey: f,
            renderPopout: (e) =>
                (0, S.jsx)(pc.VN, {
                    ...e,
                    value: i,
                    onChange: t,
                    suggestedColors: l,
                    middle: r,
                    footer: o,
                    showEyeDropper: d,
                }),
            onRequestClose: n,
            children: (e) => {
                let { onClick: t, ...n } = e;
                return (0, S.jsxs)("div", {
                    ref: u,
                    className: ew()(p_.oP, { [p_.r9]: s }),
                    children: [
                        (0, S.jsx)(U.D, {
                            ...n,
                            tabIndex: s ? -1 : 0,
                            onClick: s ? q.tEg : t,
                            style: { backgroundColor: h, borderColor: A },
                            className: p_.nf,
                            "aria-label": g.intl.string(g.t.Qp04hK),
                            focusProps: { ringTarget: u },
                            children: (0, S.jsx)(oD.R, {
                                size: "custom",
                                className: p_.BW,
                                width: 14,
                                height: 14,
                                color: p,
                            }),
                        }),
                        a,
                    ],
                });
            },
        })
    );
}
var ph = n(362656);
function pA(e) {
    let {
            user: t,
            pendingAvatarSrc: n,
            pendingColors: i,
            onThemeColorsChange: l,
            preventDisabled: s,
            guildId: a,
            className: r,
            showPremiumIcon: o = !0,
            showResetThemeButton: d = !1,
            forcedDivider: u,
        } = e,
        c = (0, pr.Ay)(t.id, a),
        { primaryColor: _, secondaryColor: m } = (0, po.A)({
            user: t,
            displayProfile: c,
            pendingThemeColors: i,
            isPreview: !0,
        }),
        h = oG.Ay.canUsePremiumProfileCustomization(t),
        A = null != n ? n : t.getAvatarURL(a, 80),
        p = (0, ps.r)(w.A.unsafe_rawColors.PRIMARY_530).hex(),
        T = (0, pa.rh)(A, p, !1);
    if (null == _ || null == m) return null;
    let E = (e) => {
        l(pl()(e, c?.themeColors) ? void 0 : e);
    };
    return (0, S.jsx)(oy.A, {
        title: g.intl.string(g.t.DMeO2X),
        disabled: !h && !s,
        className: ew()(ph.__invalid_profileThemesSection, r),
        showPremiumIcon: o,
        forcedDivider: u,
        children: (0, S.jsxs)("div", {
            className: ph.hd,
            children: [
                (0, S.jsx)("div", {
                    className: ph.YX,
                    children: (0, S.jsx)(pm, {
                        onChange: (e) => E([e, m]),
                        color: _,
                        suggestedColors: T,
                        showEyeDropper: !0,
                        label: (0, S.jsx)(k.E, {
                            className: ph.yz,
                            color: "text-default",
                            variant: "text-xs/normal",
                            "aria-hidden": !0,
                            children: g.intl.string(g.t.C3KTQk),
                        }),
                    }),
                }),
                (0, S.jsx)("div", {
                    className: ph.YX,
                    children: (0, S.jsx)(pm, {
                        onChange: (e) => E([_, e]),
                        color: m,
                        suggestedColors: T,
                        showEyeDropper: !0,
                        label: (0, S.jsx)(k.E, {
                            className: ph.yz,
                            color: "text-default",
                            variant: "text-xs/normal",
                            "aria-hidden": !0,
                            children: g.intl.string(g.t["8elvy6"]),
                        }),
                    }),
                }),
                d &&
                    null != a &&
                    (0, S.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: ph.WA,
                        children: (0, S.jsx)(eh.$, {
                            variant: "secondary",
                            size: "sm",
                            text: g.intl.string(g.t["L+GmoR"]),
                            onClick: () => E([null, null]),
                        }),
                    }),
            ],
        }),
    });
}
function pp(e) {
    let {
        sectionTitle: t,
        errors: n,
        onPronounsChange: i,
        pendingPronouns: l,
        placeholder: s,
        currentPronouns: a,
        disabled: r = !1,
    } = e;
    return (0, S.jsx)(oy.A, {
        title: t,
        errors: n,
        disabled: r,
        children: (0, S.jsx)(sP.k, {
            placeholder: s ?? g.intl.string(g.t.NPEUUu),
            maxLength: 40,
            value: l ?? a,
            onChange: function (e) {
                i(e === a ? void 0 : e);
            },
            disabled: r,
        }),
    });
}
var pT = n(427262),
    pE = n(576705),
    pS = n(376294);
function px(e) {
    let { errors: t, pendingNick: n, currentNick: i, username: l, user: s, guild: a } = e,
        r = (0, O.bG)([pE.A], () => pE.A.can(q.xBc.CHANGE_NICKNAME, a) || pE.A.can(q.xBc.MANAGE_NICKNAMES, a)),
        o = (0, AD.L)(lf.PremiumTypes.TIER_2);
    return (0, S.jsxs)(oy.A, {
        title: g.intl.string(g.t.me1lRk),
        errors: t,
        children: [
            (0, S.jsx)(sP.k, {
                value: n ?? i ?? "",
                placeholder: l,
                maxLength: q.d0r,
                onChange: function (e) {
                    (0, AH.p)({ guildId: a.id, nickname: e });
                },
                disabled: !r,
                helperText: r ? void 0 : g.intl.string(g.t.gzjxQi),
            }),
            o && (0, S.jsx)(A0, { user: s, guildId: a.id, className: pS.F }),
        ],
    });
}
var pf = n(574173);
let pb = "/assets/b25da78aa7949feb.png";
function pN(e) {
    let { user: t, showOverlay: n, children: i } = e,
        l = (0, uM.Ay)(),
        { analyticsLocations: s } = (0, iM.Ay)(eU.A.PREMIUM_UPSELL_OVERLAY);
    return (x.useEffect(() => {
        n &&
            X.default.track(q.HAw.PREMIUM_UPSELL_VIEWED, {
                location_stack: s,
                type: lf.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE,
            });
    }, [n, s]),
    n)
        ? (0, S.jsxs)("div", {
              className: pf.ry,
              children: [
                  (0, S.jsx)("div", { children: i }),
                  (0, S.jsxs)("div", {
                      className: pf.Wc,
                      children: [
                          (0, S.jsx)("img", {
                              className: pf.Tn,
                              alt: g.intl.string(g.t.LHFZQy),
                              src: (function (e) {
                                  switch (e) {
                                      case q.NJ8.DARK:
                                      case q.NJ8.DARKER:
                                      case q.NJ8.MIDNIGHT:
                                          return pb;
                                      case q.NJ8.LIGHT:
                                          return "/assets/a98f1410707fafea.png";
                                      default:
                                          return pb;
                                  }
                              })(l),
                          }),
                          (0, S.jsxs)("div", {
                              className: pf._9,
                              children: [
                                  (0, S.jsx)(k.E, {
                                      variant: "text-lg/semibold",
                                      color: "always-white",
                                      children: g.intl.string(g.t.dMaDFX),
                                  }),
                                  (0, S.jsx)(k.E, {
                                      variant: "text-sm/normal",
                                      color: "always-white",
                                      children: g.intl.string(g.t.F7sgFH),
                                  }),
                              ],
                          }),
                          (0, S.jsx)(uX.A, {
                              size: rA.$n.Sizes.LARGE,
                              color: rA.$n.Colors.GREEN,
                              textOptions: {
                                  textOverride: oG.Ay.isPremium(t)
                                      ? g.intl.string(g.t.AfRWI8)
                                      : g.intl.string(g.t.nkdUym),
                              },
                              subscriptionTier: lf.pe.TIER_2,
                          }),
                      ],
                  }),
              ],
          })
        : i;
}
var pC = n(887267);
function pI() {
    var e;
    let t = (0, O.bG)([t5.default], () => {
            let e = t5.default.getCurrentUser();
            return tj()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        n = (0, AD.L)(lf.PremiumTypes.TIER_2),
        i = (0, O.bG)([Am.A, H.A], () => H.A.getGuild(Am.A.selectedGuildId));
    tj()(null != i, "guild should not be null");
    let {
            pendingAvatar: l,
            pendingNickname: s,
            pendingBanner: a,
            pendingBio: r,
            pendingPronouns: o,
            pendingThemeColors: d,
            errors: u,
        } = (0, O.cf)([Am.A], () => ({ ...Am.A.getPendingChanges(i.id), errors: Am.A.getErrors(i.id) })),
        c = (0, Av.V7)({ userId: t.id, image: l }),
        _ = (0, AL.EC)(i.id),
        m = (0, O.bG)([Aj.Ay], () => (null == i.id ? null : Aj.Ay.getMember(i.id, t.id))),
        h = (0, O.bG)([Ay.A], () => Ay.A.getGuildMemberProfile(t.id, i.id)),
        A = oG.Ay.canUsePremiumProfileCustomization(t),
        p = (0, Af.z5)(l, m?.avatar),
        T = (0, Af.Ac)(a, h?.banner),
        E = ((e = h?.themeColors), void 0 === d ? null != e : d?.[0] != null && d?.[1] != null),
        x = h?.bio ?? "",
        f = h?.pronouns ?? "";
    return (0, S.jsxs)("div", {
        className: pC.Q,
        children: [
            (0, S.jsx)(
                px,
                {
                    errors: u?.nick ?? _?.nick,
                    username: pT.Ay.getName(t),
                    pendingNick: s,
                    currentNick: m?.nick,
                    user: t,
                    guild: i,
                },
                "nick",
            ),
            (0, S.jsx)(
                pp,
                {
                    sectionTitle: g.intl.string(g.t["+T3RI/"]),
                    errors: u?.pronouns,
                    onPronounsChange: (e) => (0, AH.p)({ guildId: i.id, pronouns: e }),
                    pendingPronouns: o,
                    currentPronouns: f,
                },
                "pronouns",
            ),
            (0, S.jsxs)(pN, {
                user: t,
                showOverlay: !A,
                children: [
                    (0, S.jsx)(
                        AJ,
                        {
                            sectionTitle: (0, S.jsxs)(S.Fragment, {
                                children: [
                                    g.intl.string(g.t.lqaIxI),
                                    (0, S.jsx)(e0.m, {
                                        text: g.intl.string(g.t["5AFxuK"]),
                                        children: (0, S.jsx)(oC.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: pC.a,
                                        }),
                                    }),
                                ],
                            }),
                            showRemoveAvatarButton: p,
                            onAvatarChange: (e) =>
                                (0, AG.rM)(e, m?.avatar, (e) => (0, AH.p)({ guildId: i.id, avatar: e })),
                            errors: u?.avatar,
                            guildId: i.id,
                            disabled: !A,
                        },
                        "avatar",
                    ),
                    (0, S.jsx)(
                        AW,
                        {
                            sectionTitle: (0, S.jsxs)(S.Fragment, {
                                children: [
                                    g.intl.string(g.t["7v0T9P"]),
                                    (0, S.jsx)(e0.m, {
                                        text: g.intl.string(g.t["5AFxuK"]),
                                        children: (0, S.jsx)(oC.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: pC.a,
                                        }),
                                    }),
                                ],
                            }),
                            user: t,
                            guild: i,
                        },
                        "decoration",
                    ),
                    !n && (0, S.jsx)(A0, { user: t, guildId: i.id }),
                    (0, S.jsx)(
                        A5,
                        {
                            user: t,
                            guild: i,
                            titleIcon: (0, S.jsx)(e0.m, {
                                text: g.intl.string(g.t["5AFxuK"]),
                                children: (0, S.jsx)(oC.t, { size: "md", color: "currentColor", className: pC.a }),
                            }),
                        },
                        "nameplate",
                    ),
                    (0, S.jsx)(
                        A7,
                        {
                            sectionTitle: (0, S.jsxs)(S.Fragment, {
                                children: [
                                    g.intl.string(g.t.wR5wOo),
                                    (0, S.jsx)(e0.m, {
                                        text: g.intl.string(g.t["5AFxuK"]),
                                        children: (0, S.jsx)(oC.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: pC.a,
                                        }),
                                    }),
                                ],
                            }),
                            user: t,
                            guild: i,
                        },
                        "effect",
                    ),
                    (0, S.jsx)(pn, { user: t, guild: i, sectionTitle: g.intl.string(g.t.GWrZOd) }, "frame"),
                    (0, S.jsx)(
                        A8,
                        {
                            showRemoveBannerButton: T,
                            errors: u?.banner,
                            onBannerChange: (e) =>
                                (0, AG.rM)(e, h?.banner, (e) => (0, AH.p)({ guildId: i.id, banner: e })),
                            guildId: i.id,
                            disabled: !A,
                        },
                        "banner",
                    ),
                    (0, S.jsx)(pA, {
                        user: t,
                        pendingAvatarSrc: c,
                        pendingColors: d,
                        onThemeColorsChange: (e) => (0, AH.p)({ guildId: i.id, themeColors: e }),
                        guildId: i.id,
                        showResetThemeButton: E,
                    }),
                    (0, S.jsx)(
                        AF,
                        {
                            placeholder: g.intl.string(g.t["/7NKgv"]),
                            sectionTitle: (0, S.jsxs)(S.Fragment, {
                                children: [
                                    g.intl.string(g.t.ZzAR2Y),
                                    (0, S.jsx)(e0.m, {
                                        text: g.intl.string(g.t["5AFxuK"]),
                                        children: (0, S.jsx)(oC.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: pC.a,
                                        }),
                                    }),
                                ],
                            }),
                            onBioChange: (e) => (0, AH.p)({ guildId: i.id, bio: e }),
                            errors: u?.bio ?? _?.bio,
                            pendingBio: r,
                            currentBio: x,
                            disabled: !A,
                        },
                        "about",
                    ),
                ],
            }),
        ],
    });
}
var pv = n(405318);
function py(e) {
    (0, b.openModalLazy)(async () => {
        let { default: t } = await n.e("97925").then(n.bind(n, 475312));
        return (n) => (0, S.jsx)(t, { source: { ...e, page: q.liQ.GUILD_MEMBER_PROFILE_SETTINGS }, ...n });
    });
}
function pj(e) {
    let { selectedGuild: t, onGuildChange: n } = e,
        { analyticsLocations: i } = (0, iM.Ay)(eU.A.USER_SETTINGS_GUILD_PROFILE),
        l = (0, O.bG)([t5.default], () => {
            let e = t5.default.getCurrentUser();
            return tj()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        s = (0, O.bG)([Aj.Ay], () => (null != t ? Aj.Ay.getMember(t.id, l.id) : null)),
        a = (0, O.bG)([Ay.A], () => !Ay.A.isFetchingProfile(l.id, t?.id)),
        r = (0, O.bG)([eb.A], () => eb.A.hidePersonalInformation),
        { pendingAvatar: o, pendingNameplate: d, ...u } = (0, O.cf)([Am.A], () => Am.A.getPendingChanges(t?.id)),
        c = (0, Av.V7)({ userId: l.id, image: o }),
        _ = (0, Af.lw)({
            pendingValue: d,
            userValue: l?.collectibles?.nameplate,
            guildValue: s?.collectibles?.nameplate,
            guildId: t?.id,
        }),
        { pendingDisplayNameStyles: m } = (0, Af.B0)(l, t?.id);
    return (x.useEffect(() => () => i3.h.wait(AS.IM), []), r)
        ? (0, S.jsx)(dG.A, {})
        : a
          ? (0, S.jsxs)(iM.f5, {
                value: i,
                children: [
                    (0, S.jsx)(k.E, {
                        variant: "text-sm/normal",
                        children: g.intl.format(g.t["/PTB2E"], {
                            helpCenterLink: tr.A.getArticleURL(q.MVz.GUILD_PROFILES),
                        }),
                    }),
                    null != t
                        ? (0, S.jsxs)(S.Fragment, {
                              children: [
                                  (0, S.jsx)(ov.A, { guildId: t.id, onChange: n }),
                                  (0, S.jsx)(AC, {
                                      profilePreviewTitle: (0, S.jsx)(em.D, {
                                          variant: "heading-md/medium",
                                          className: pv.Y,
                                          children: g.intl.formatToPlainString(g.t.Tc0slG, { guildName: t?.name }),
                                      }),
                                      profilePreview: (0, S.jsx)(AI.A, {
                                          ...u,
                                          pendingAvatar: c,
                                          pendingDisplayNameStyles: m,
                                          user: l,
                                          guild: t,
                                          canUsePremiumCustomization: oG.Ay.canUsePremiumProfileCustomization(l),
                                          onUpsellClick: py,
                                      }),
                                      nameplatePreview: (0, S.jsx)(Ax.A, {
                                          ...u,
                                          pendingDisplayNameStyles: m,
                                          user: l,
                                          guildId: t?.id,
                                          nameplate: _,
                                          className: null == _ ? pv.t : void 0,
                                          isHighlighted: !0,
                                      }),
                                      children: (0, S.jsx)(pI, {}),
                                  }),
                              ],
                          })
                        : (0, S.jsx)(AR, {}),
                ],
            })
          : (0, S.jsx)(dM.y, {});
}
var pO = n(576622),
    pR = n(913403);
let pL = (e) => {
    let { children: t, notice: n } = e;
    return (0, S.jsxs)("div", { className: pR.r, children: [n, (0, S.jsx)("div", { children: t })] });
};
var pD = n(230109),
    pG = n(823092),
    pP = n(693477),
    pM = n(379197),
    pU = n(488430),
    pk = n(457421),
    pV = n(940622),
    pw = n(559474),
    pB = n(144030);
let pF = () => {
    let e,
        t,
        n,
        i,
        { analyticsLocations: l } = (0, iM.Ay)(eU.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
        s = x.useRef(null),
        {
            asset: a,
            popoutAsset: r,
            title: o,
            body: d,
            version: u,
            revertTextColor: c,
        } = ((e = (0, pV.mb)(pw.RN.UPSELL_BANNER)),
        (t = (0, pV.mb)(pw.RN.UPSELL_BANNER_POPOUT)),
        (n = (0, O.bG)([pk.A], () => pk.A.getMarketingBySurface(pM.R.EDIT_PROFILE_SETTINGS))),
        (i = x.useMemo(
            () =>
                null != n
                    ? n
                    : {
                          asset: "/assets/30e2c68819facd98.png",
                          popoutAsset: "/assets/c6d55507d7473057.png",
                          title: g.intl.string(g.t.QZVVBh),
                          body: g.intl.string(g.t.sajmAq),
                          version: 0,
                          revertTextColor: !1,
                      },
            [n],
        )),
        x.useMemo(
            () => ({ ...i, type: pU.G.BANNER, asset: e ?? i.asset, popoutAsset: t ?? i.popoutAsset }),
            [e, t, i],
        )),
        { navigateWithValidation: _ } = (0, pG.L_)();
    return (
        x.useEffect(() => {
            X.default.track(q.HAw.PREMIUM_UPSELL_VIEWED, {
                type: lf.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                location_stack: l,
                version: u,
            });
        }, [l, u]),
        (0, S.jsxs)("div", {
            ref: s,
            className: pB.kL,
            style: { backgroundImage: `url(${a})` },
            children: [
                (0, S.jsx)("div", {
                    className: pB.JS,
                    "aria-hidden": !0,
                    role: "presentation",
                    children: (0, S.jsx)("img", { src: r, className: pB.Qw, alt: "" }),
                }),
                (0, S.jsxs)("div", {
                    className: pB.Em,
                    children: [
                        (0, S.jsx)(em.D, {
                            variant: "heading-lg/extrabold",
                            color: c ? "text-overlay-dark" : "currentColor",
                            className: pB.DD,
                            children: o,
                        }),
                        (0, S.jsx)(k.E, {
                            variant: "text-sm/normal",
                            color: c ? "text-overlay-dark" : "currentColor",
                            children: d,
                        }),
                    ],
                }),
                (0, S.jsx)(eh.$, {
                    onClick: () => {
                        _(() =>
                            (0, pP.Cz)({
                                analyticsLocations: l,
                                analyticsSource: eU.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
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
var pz = n(451909),
    pX = n(959249),
    pY = n(400669),
    pH = n(835071),
    pK = n(422936),
    pW = n(234419),
    pZ = n(590180),
    pq = n(898461),
    pQ = n(207803),
    pJ = n(508425),
    p$ = n(559949);
let p0 = {
        above_the_clouds: {
            preset: "above_the_clouds",
            themeColors: [752280, 9215590],
            avatarDecorationSkuId: "1144059132517826601",
            displayNameStyles: { fontId: p$.x.CHICLE, effectId: pJ.z.POP, colors: [959694] },
            getName: () => g.intl.string(g.t["TFc+iF"]),
            getHeaderSrc: () => n(702051).A,
            getBannerSrc: (e) => (e ? n(735161).A : n(887e3).A),
        },
        cyberpunk: {
            preset: "cyberpunk",
            themeColors: [1967991, 742532],
            avatarDecorationSkuId: null,
            displayNameStyles: { fontId: p$.x.PIXELIFY, effectId: pJ.z.NEON, colors: [2949343] },
            getName: () => g.intl.string(g.t["4g+5bq"]),
            getHeaderSrc: () => n(272017).A,
            getBannerSrc: (e) => (e ? n(735271).A : n(208574).A),
        },
        shadow_realm: {
            preset: "shadow_realm",
            themeColors: [0, 4458504],
            avatarDecorationSkuId: "1144058522808614923",
            displayNameStyles: { fontId: p$.x.NEO_CASTEL, effectId: pJ.z.TOON, colors: [0xff0000] },
            getName: () => g.intl.string(g.t.ycg1xj),
            getHeaderSrc: () => n(863653).A,
            getBannerSrc: (e) => (e ? n(538263).A : n(576974).A),
        },
        starlit_dream: {
            preset: "starlit_dream",
            themeColors: [5123751, 590625],
            avatarDecorationSkuId: "1144058844004233369",
            displayNameStyles: { fontId: p$.x.CHERRY_BOMB, effectId: pJ.z.TOON, colors: [3343795] },
            getName: () => g.intl.string(g.t["9WLHvr"]),
            getHeaderSrc: () => n(434361).A,
            getBannerSrc: (e) => (e ? n(700309).A : n(135572).A),
        },
        neon_space: {
            preset: "neon_space",
            themeColors: [6094952, 1007678],
            avatarDecorationSkuId: null,
            displayNameStyles: { fontId: p$.x.MUSEO_MODERNO, effectId: pJ.z.NEON, colors: [28737] },
            getName: () => g.intl.string(g.t.UdNuqi),
            getHeaderSrc: () => n(301928).A,
            getBannerSrc: (e) => (e ? n(285974).A : n(775627).A),
        },
    },
    p1 = (e) => p0[e],
    p2 = Object.keys(p0),
    p5 = (e) => {
        let t = null == e ? p2 : p2.filter((t) => t !== e);
        return t[Math.floor(Math.random() * t.length)];
    };
var p3 = n(201805),
    p8 = n(674253);
function p4(e) {
    let { preset: t, onShuffle: n } = e,
        i = (0, O.bG)([nH.A], () => nH.A.useReducedMotion),
        l = (0, p3.Xf)({ useReducedMotion: i }),
        { name: s, header: a } = x.useMemo(() => {
            let e = p1(t);
            return { name: e.getName(), header: e.getHeaderSrc() };
        }, [t]);
    return (0, S.jsxs)("div", {
        className: p8.kL,
        children: [
            (0, S.jsx)(U.D, {
                onClick: () => {
                    n(), l.startAnimation(!1);
                },
                className: p8.x6,
                "aria-label": g.intl.string(g.t["44yJxh"]),
                children: l.render(),
            }),
            (0, S.jsxs)(U.D, {
                onClick: () => {
                    n(), l.startAnimation(!1);
                },
                "aria-label": `${s}: ${g.intl.string(g.t["44yJxh"])}`,
                className: p8.Lt,
                children: [
                    (0, S.jsx)("img", { alt: "", "aria-hidden": !0, src: a, className: p8.L_ }),
                    (0, S.jsx)(k.E, { className: p8._e, variant: "text-sm/bold", color: "always-white", children: s }),
                ],
            }),
        ],
    });
}
var p9 = n(511484),
    p7 = n(811611),
    p6 = n(515718),
    Te = n(507553);
function Tt(e, t) {
    let n = Te.A.useField("scrollPosition"),
        i = (0, O.bG)([nH.A], () => nH.A.useReducedMotion);
    (0, x.useEffect)(() => {
        let l = e.current;
        if (null == l || n !== t) return;
        let s = requestAnimationFrame(() => {
            l.scrollIntoView({ behavior: i ? "auto" : "smooth" }), Te.A.setState({ scrollPosition: null });
        });
        return () => cancelAnimationFrame(s);
    }, [e, t, n, i]);
}
var Tn = n(844222),
    Ti = n(314649);
function Tl(e) {
    let { user: t, disabledInputs: i, containerClassName: l } = e,
        { reducedMotion: s } = x.useContext(Tn.C),
        {
            pendingAvatar: a,
            pendingBanner: r,
            pendingAvatarDecoration: o,
            pendingProfileEffect: d,
            pendingDisplayNameStyles: u,
            pendingThemeColors: c,
            pendingPronouns: g,
            pendingBio: _,
            tryItOutThemeColors: m,
            tryItOutAvatar: h,
            tryItOutBanner: A,
            tryItOutAvatarDecoration: p,
            tryItOutDisplayNameStyles: T,
        } = (0, O.cf)([Am.A], () => {
            let e = Am.A.getPendingChanges(),
                t = Am.A.getTryItOutChanges();
            return { ...e, ...t };
        }),
        E = (0, Av.V7)({ userId: t.id, image: h ?? a });
    return (0, S.jsx)(AI.A, {
        containerClassName: l,
        user: t,
        pendingPronouns: g,
        pendingBio: _,
        pendingBanner: A ?? r ?? n(636763),
        pendingDisplayNameStyles: T ?? u,
        pendingAvatar: E,
        pendingThemeColors: m ?? c,
        pendingAvatarDecoration: void 0 !== p ? p : o,
        pendingProfileEffect: d,
        avatarClassName: null != h || null != a || s.enabled ? void 0 : Ti.W,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        disabledInputs: i,
        hideExampleButton: !0,
    });
}
var Ts = n(461414);
function Ta(e) {
    let { user: t, isVisible: n, shouldShow: i } = e,
        l = oG.Ay.isPremium(t),
        s = oG.Ay.canUseAnimatedAvatar(t),
        {
            pendingAvatar: a,
            pendingThemeColors: r,
            tryItOutThemeColors: o,
            tryItOutAvatar: d,
            tryItOutBanner: u,
        } = (0, O.cf)([Am.A], () => {
            let e = Am.A.getPendingChanges(),
                t = Am.A.getErrors(),
                n = Am.A.getTryItOutChanges();
            return { ...e, ...n, errors: t };
        }),
        { preset: c, onShuffle: _ } = (function () {
            let e = (0, O.bG)([nH.A], () => nH.A.useReducedMotion),
                [t, n] = (0, x.useState)(p5()),
                {
                    banner: i,
                    themeColors: l,
                    avatarDecorationSkuId: s,
                    displayNameStyles: a,
                } = (0, x.useMemo)(() => {
                    let n = p1(t);
                    return {
                        banner: n.getBannerSrc(e),
                        themeColors: n.themeColors,
                        avatarDecorationSkuId: n.avatarDecorationSkuId,
                        displayNameStyles: n.displayNameStyles,
                    };
                }, [t, e]),
                r = (0, O.bG)([pZ.A], () => {
                    let e = pZ.A.getProduct(s);
                    return (0, pq.T)(e?.items[0]) ? e.items[0] : null;
                });
            (0, x.useEffect)(() => {
                (0, pQ.w5)({ banner: i, themeColors: l, avatarDecoration: r, displayNameStyles: a });
            }, [i, l, r, a]);
            let o = (0, x.useCallback)(() => {
                let e = p5(t);
                n(e), X.default.track(q.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: e });
            }, [t]);
            return { preset: t, onShuffle: o };
        })(),
        m = x.useRef(null);
    Tt(m, iv._F.TRY_IT_OUT);
    let { analyticsLocations: h, sourceAnalyticsLocations: A } = (0, iM.Ay)(eU.A.USER_SETTINGS_TRY_OUT_PREMIUM),
        p = (e) => {
            e &&
                (u?.startsWith("https:") === !0
                    ? fetch(u)
                          .then((e) => e.blob())
                          .then((e) => (0, p6.We)(e))
                          .then((e) => {
                              (0, AH.p)({ avatar: d, themeColors: o, banner: e });
                          })
                          .catch(() => {
                              (0, AH.p)({ avatar: d, themeColors: o });
                          })
                    : null != u
                      ? (0, AH.p)({ avatar: d, themeColors: o, banner: u })
                      : (0, AH.p)({ avatar: d, themeColors: o }),
                X.default.track(q.HAw.TRY_IT_OUT_PRESET_SELECTED, { preset: c }));
        };
    x.useEffect(() => {
        n &&
            X.default.track(q.HAw.PREMIUM_UPSELL_VIEWED, {
                type: lf.e.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: q.liQ.USER_SETTINGS },
                location_stack: A,
            });
    }, [A, t, n]);
    let T = (0, pW.V)()?.subscription_trial?.sku_id === lf.pe.TIER_2,
        E = (0, pK.O)(),
        f = (0, p9.U9)(E, lf.pe.TIER_2);
    return i
        ? (0, S.jsx)(iM.f5, {
              value: h,
              children: (0, S.jsxs)(uY.A, {
                  ref: m,
                  className: Ts.MT,
                  type: uY.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, S.jsx)(AC, {
                          stickyPreview: !1,
                          layoutClassName: Ts.th,
                          profilePreviewTitle: (0, S.jsxs)(S.Fragment, {
                              children: [
                                  (0, S.jsx)(oC.t, { size: "md", color: "currentColor", className: Ts.PC }),
                                  g.intl.string(g.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, S.jsxs)(S.Fragment, {
                              children: [(0, S.jsx)(p4, { preset: c, onShuffle: _ }), (0, S.jsx)(Tl, { user: t })],
                          }),
                          children: (0, S.jsxs)("div", {
                              className: Ts.EN,
                              children: [
                                  (0, S.jsxs)("div", {
                                      children: [
                                          (0, S.jsx)(em.D, {
                                              variant: "heading-xl/extrabold",
                                              children: g.intl.string(g.t["2zGdAW"]),
                                          }),
                                          (0, S.jsx)(k.E, {
                                              className: Ts.h_,
                                              variant: "text-sm/normal",
                                              children: g.intl.string(g.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, S.jsx)(pA, {
                                      className: Ts.fz,
                                      user: t,
                                      pendingAvatarSrc: (0, Av.V7)({ userId: t.id, image: d ?? a }),
                                      pendingColors: o ?? r,
                                      onThemeColorsChange: pQ.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, S.jsx)(A8, {
                                      className: Ts.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != u,
                                      onBannerChange: pQ.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !s &&
                                      (0, S.jsx)(AJ, {
                                          className: Ts.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: pQ.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: g.intl.string(g.t["7z0D1c"]),
                                          sectionTitle: g.intl.string(g.t.vtFfPX),
                                      }),
                                  (0, S.jsx)(A0, { user: t, className: Ts.fz }),
                                  !T &&
                                      (0, S.jsx)(k.E, {
                                          variant: "text-sm/normal",
                                          children: g.intl.string(g.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !T &&
                          (0, S.jsx)(pX.d, {
                              onSubscribeModalClose: p,
                              className: Ts.Kv,
                              showUpsell: !0,
                              text: g.intl.format(g.t.TmfgI2, {
                                  onClick: () => {
                                      (0, pH.K)({ onSubscribeFinish: p });
                                  },
                              }),
                              button: l
                                  ? g.intl.string(g.t.AfRWI8)
                                  : f
                                    ? g.intl.formatToPlainString(g.t.bkQ4bH, { percent: E?.discount.amount })
                                    : g.intl.string(g.t.pj0XBN),
                              position: "inline",
                          }),
                      T &&
                          (0, S.jsxs)("div", {
                              children: [
                                  (0, S.jsx)("div", { className: Ts.BU }),
                                  (0, S.jsx)(p7.Ay, {
                                      type: lf.e.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                      subscriptionTier: lf.pe.TIER_2,
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : null;
}
var Tr = n(814390),
    To = n(909536),
    Td = n(843282),
    Tu = n(145497),
    Tc = n(685073),
    Tg = n(534400),
    T_ = n(581781),
    Tm = n(743981),
    Th = n(51358);
let TA = (0, lS.Ld)(),
    Tp = x.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: n, onChange: i } = e,
            l = x.useMemo(() => new Map(t.map((e) => [e.id, e])), [t]),
            s = (0, O.bG)([t5.default], () => (0, Tc.Zo)(t5.default.getCurrentUser()?.primaryGuild).guildId),
            a = void 0 !== n ? n : s,
            r = x.useMemo(
                () => t.reduce((e, t) => (t.profile?.tag != null && e.push({ label: t.name, value: t.id }), e), []),
                [t],
            ),
            o = x.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = l.get(e.value);
                    if (null == t) return null;
                    let n = t.profile?.tag;
                    return null == n
                        ? null
                        : (0, S.jsx)(T_.A, {
                              guildTag: n,
                              guildBadge: t.profile?.badge ?? void 0,
                              guildId: t.id,
                              guildName: e.label,
                              guildIcon: t.icon,
                              guildIconSize: 32,
                          });
                },
                [l],
            ),
            d = x.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = l.get(e.value);
                    return null == t || null == t.profile?.tag
                        ? null
                        : (0, S.jsx)(Tu.j, {
                              guildId: t.id,
                              guildName: t.name,
                              guildIcon: t.icon,
                              iconSize: 32,
                              animate: !1,
                          });
                },
                [l],
            ),
            u = x.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = l.get(e.value);
                    if (null == t) return null;
                    let n = t.profile?.tag;
                    return null == n
                        ? null
                        : (0, S.jsx)(Tg.o9, {
                              guildId: t.id,
                              guildTag: n,
                              guildBadge: t.profile?.badge ?? void 0,
                              badgeSize: Tm.Sl.SIZE_16,
                              textColor: "interactive-text-default",
                              textVariant: "text-sm/semibold",
                          });
                },
                [l],
            ),
            c = x.useCallback(
                (e) => {
                    let t = e[0];
                    return null == t ? null : (0, S.jsx)(S.Fragment, { children: o(t) });
                },
                [o],
            ),
            _ = x.useCallback(
                (e) => {
                    i?.(e);
                },
                [i],
            ),
            m = x.useCallback((e) => e === a, [a]),
            h = x.useCallback((e) => e, []),
            A = x.useCallback(() => {
                i?.(null);
            }, [i]),
            p = x.useRef(null);
        return (
            Tt(p, iv._F.GUILD_TAG),
            (0, S.jsxs)(oy.A, {
                title: g.intl.string(g.t.Pdd1nd),
                titleId: TA,
                ref: p,
                children: [
                    (0, S.jsx)(k.E, {
                        className: Th.VA,
                        variant: "text-sm/normal",
                        children: g.intl.string(g.t.mlZ6Jx),
                    }),
                    (0, S.jsx)(Td.Pw, {
                        className: Th.Lt,
                        optionClassName: Th.S0,
                        isSelected: m,
                        options: r,
                        select: _,
                        renderLeading: d,
                        renderTrailing: u,
                        renderOptionValue: c,
                        serialize: h,
                        clear: A,
                        clearable: null != a,
                        maxVisibleItems: 8,
                        "data-migration-pending": !0,
                    }),
                ],
            })
        );
    });
var TT = n(556729);
function TE(e) {
    let t = (0, AD.L)(lf.PremiumTypes.TIER_2);
    return (0, S.jsxs)(oy.A, {
        errors: e.errors,
        disabled: e.disabled,
        title: g.intl.string(g.t["9AjdkD"]),
        children: [
            (0, S.jsx)("div", {
                children: (0, S.jsx)(sP.k, {
                    placeholder: e.placeholder,
                    maxLength: q.zzC,
                    onChange: e.onGlobalNameChange,
                    value: e.pendingGlobalName ?? e.currentGlobalName ?? "",
                }),
            }),
            t && (0, S.jsx)(A0, { user: e.user, className: TT.F }),
        ],
    });
}
function TS(e) {
    let { legacyUsername: t, pendingLegacyUsernameDisabled: n } = e,
        i = c.m$.useSetting(),
        l = void 0 !== n ? n : i;
    return (0, S.jsx)(L.d, {
        label: g.intl.string(g.t["3cWDuO"]),
        description: l ? null : g.intl.formatToPlainString(g.t.aYhclf, { username: t }),
        checked: !l,
        onChange: (e) => {
            !e === i ? (0, Ac._e)() : (0, AH.p)({ legacyUsernameDisabled: !e });
        },
    });
}
function Tx(e) {
    let { user: t, savedUserColor: n, pendingColor: i, setPendingAccentColor: l } = e,
        s = t.getAvatarURL(null, 80),
        a = (0, ps.r)(w.A.unsafe_rawColors.PRIMARY_530).hex(),
        r = (0, pa.rh)(s, a, !1),
        o = (0, pu.LX)(r[0]);
    return (0, S.jsx)(oy.A, {
        title: g.intl.string(g.t["/X3fkf"]),
        children: (0, S.jsx)(pm, { onChange: (e) => l(e), color: i ?? n ?? o, suggestedColors: r, showEyeDropper: !0 }),
    });
}
var Tf = n(518477);
let Tb = () => {
    let e = (0, O.bG)([u1.default], () => u1.default.getId());
    return (0, S.jsx)(oy.A, {
        title: g.intl.string(g.t.Jzj9q4),
        children: (0, S.jsx)(eh.$, {
            text: g.intl.string(g.t.Geikwq),
            onClick: () => {
                (0, Ap.openUserProfileModal)({
                    userId: e,
                    sourceAnalyticsLocations: [eU.A.USER_SETTINGS_USER_PROFILE],
                    hideRestrictedProfile: !0,
                    tabSection: Tf.RP.WIDGETS,
                });
            },
            size: "sm",
        }),
    });
};
var TN = n(289299);
function TC() {
    let e = (0, O.bG)([t5.default], () => {
            let e = t5.default.getCurrentUser();
            return tj()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e;
        }),
        t = (0, O.bG)([Ay.A], () => Ay.A.getUserProfile(e.id)),
        {
            pendingAvatar: n,
            pendingGlobalName: i,
            pendingBanner: l,
            pendingBio: s,
            pendingPronouns: a,
            pendingAccentColor: r,
            pendingThemeColors: o,
            pendingLegacyUsernameDisabled: d,
            pendingPrimaryGuildId: u,
            errors: c,
        } = (0, O.cf)([Am.A], () => {
            let e = Am.A.getPendingChanges(),
                t = Am.A.getErrors();
            return { ...e, errors: t };
        }),
        _ = (0, Av.V7)({ userId: e.id, image: n }),
        m = (0, AL.EC)(),
        h = oG.Ay.canUsePremiumProfileCustomization(e),
        A = (0, Af.z5)(n, e.avatar),
        p = (0, Af.Ac)(l, t?.banner),
        T = (0, pr.Ay)(e.id),
        E = T?.getLegacyUsername(),
        x = (c.global_name?.length ?? 0) > 0 ? c.global_name : (m?.nick ?? []),
        f = (c.bio?.length ?? 0) > 0 ? c.bio : (m?.bio ?? []),
        b = (0, O.yK)([H.A, Aj.Ay], () =>
            H.A.getGuildsArray().filter(
                (e) => (0, Tc.Rg)(e) && Aj.Ay.getSelfMember(e.id)?.joinedAt != null && e.profile?.tag != null,
            ),
        );
    return (0, S.jsxs)("div", {
        className: TN.Q,
        children: [
            (0, S.jsx)(TE, {
                placeholder: e.username,
                errors: x,
                currentGlobalName: e.globalName,
                pendingGlobalName: i,
                onGlobalNameChange: (e) => (0, AH.p)({ globalName: e }),
                user: e,
            }),
            (0, S.jsx)(
                pp,
                {
                    sectionTitle: g.intl.string(g.t["+T3RI/"]),
                    errors: c.pronouns,
                    onPronounsChange: (e) => (0, AH.p)({ pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: t?.pronouns ?? "",
                },
                "pronouns",
            ),
            (0, S.jsx)(Tb, {}),
            (0, S.jsx)(
                AJ,
                {
                    onAvatarChange: (e) => {
                        (0, AH.p)({ avatar: e }), (0, Af.WU)(null == e ? "remove" : "set");
                    },
                    showRemoveAvatarButton: A,
                    errors: c.avatar,
                    sectionTitle: g.intl.string(g.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, S.jsx)(AW, { user: e, sectionTitle: g.intl.string(g.t["7v0T9P"]) }, "decoration"),
            (0, S.jsx)(A5, { user: e }),
            (0, S.jsx)(A7, { user: e, sectionTitle: g.intl.string(g.t.wR5wOo) }, "effect"),
            (0, S.jsx)(pn, { user: e, sectionTitle: g.intl.string(g.t.GWrZOd) }, "frame"),
            h
                ? (0, S.jsxs)(S.Fragment, {
                      children: [
                          (0, S.jsx)(
                              A8,
                              {
                                  showRemoveBannerButton: p,
                                  errors: c.banner,
                                  onBannerChange: (e) => (0, AH.p)({ banner: e }),
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, S.jsx)(pA, {
                              user: e,
                              pendingAvatarSrc: _,
                              pendingColors: o,
                              onThemeColorsChange: (e) => (0, AH.p)({ themeColors: e }),
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, S.jsx)(
                      Tx,
                      {
                          user: e,
                          savedUserColor: t?.accentColor,
                          pendingColor: r,
                          setPendingAccentColor: (e) => (0, AH.p)({ accentColor: e }),
                      },
                      "color",
                  ),
            (0, S.jsx)(
                AF,
                {
                    sectionTitle: g.intl.string(g.t.ZzAR2Y),
                    errors: f,
                    onBioChange: (e) => (0, AH.p)({ bio: e }),
                    pendingBio: s,
                    currentBio: t?.bio ?? "",
                },
                "bio",
            ),
            b.length > 0 &&
                (0, S.jsx)(Tp, {
                    availablePrimaryGuilds: b,
                    pendingPrimaryGuildId: u,
                    onChange: (e) => (0, AH.p)({ primaryGuildId: e }),
                }),
            null != E && (0, S.jsx)(TS, { legacyUsername: E, pendingLegacyUsernameDisabled: d }, "legacy_username"),
        ],
    });
}
var TI = n(780207),
    Tv = n(482549);
function Ty() {
    let e = (0, O.bG)([t5.default], () => {
            let e = t5.default.getCurrentUser();
            return tj()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e;
        }),
        t = (0, O.bG)([eb.A], () => eb.A.hidePersonalInformation),
        {
            pendingBio: n,
            pendingAvatar: i,
            pendingNameplate: l,
            showNotice: s,
            ...a
        } = (0, O.cf)([Am.A], () => ({ ...Am.A.getPendingChanges(), showNotice: Am.A.showNotice() })),
        r = (0, Av.V7)({ userId: e.id, image: i }),
        o = (0, Af.lw)({ pendingValue: l, userValue: e?.collectibles?.nameplate }),
        d = (0, Tr.A)() && null != n ? pz.Ay.parse(void 0, n).content : n,
        u = oG.Ay.canUsePremiumProfileCustomization(e),
        c = (0, To.St)("edit-profile-upsell"),
        { analyticsLocations: _ } = (0, iM.Ay)(eU.A.USER_SETTINGS_USER_PROFILE);
    x.useEffect(() => () => i3.h.wait(Ac.IM), []);
    let [m, h] = x.useState(!1),
        A = !u,
        p = x.useRef(null);
    return t
        ? (0, S.jsx)(dG.A, {})
        : (0, S.jsxs)(iM.f5, {
              value: _,
              children: [
                  (0, S.jsx)(pF, {}),
                  (0, S.jsx)(AC, {
                      profilePreview: (0, S.jsx)(AI.A, {
                          user: e,
                          canUsePremiumCustomization: u,
                          onUpsellClick: TI.A,
                          pendingBio: d,
                          ...a,
                          pendingAvatar: r,
                      }),
                      nameplatePreview: (0, S.jsx)(Ax.A, {
                          user: e,
                          nameplate: o,
                          ...a,
                          className: null == o ? Tv.tJ : void 0,
                          isHighlighted: !0,
                      }),
                      children: (0, S.jsx)(TC, {}),
                  }),
                  (0, S.jsx)(pD.L, {
                      innerRef: p,
                      onChange: (e) => h(e),
                      threshold: 0.25,
                      active: A,
                      children: (0, S.jsx)("div", {
                          ref: p,
                          children: (0, S.jsx)(Ta, { user: e, shouldShow: A, isVisible: m }),
                      }),
                  }),
                  A &&
                      !s &&
                      (0, S.jsx)(pX.d, {
                          className: Tv.EL,
                          showUpsell: !m,
                          text: g.intl.format(g.t.TmfgI2, { onClick: () => (0, pH.K)({}) }),
                          textVariant: "heading-md/medium",
                          useUpdatedStyling: !0,
                          leadingAction: c
                              ? (0, S.jsx)(pY.l, { size: "md", location: eU.A.PREMIUM_WISHLIST_EDIT_PROFILE_UPSELL })
                              : void 0,
                          button: (0, S.jsx)("div", {
                              className: Tv.Xl,
                              children: (0, S.jsx)(eh.$, {
                                  variant: "overlay-primary",
                                  onClick: () => {
                                      X.default.track(q.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                                          cta_variant: "floating_action_button",
                                      }),
                                          p?.current?.scrollIntoView({ behavior: "smooth" });
                                  },
                                  text: g.intl.string(g.t.uw9zI7),
                                  icon: oC.t,
                              }),
                          }),
                      }),
              ],
          });
}
var Tj = n(625494),
    TO = n(454078);
let TR = { [iv.Eq.USER_PROFILE]: "main_profile_tab", [iv.Eq.GUILD]: "guild_profile_tab" },
    TL = (0, o.E2)(d.X.PROFILE_SETTING, {
        Component: function () {
            let e = (0, O.bG)([sz.A, K.Ay, Am.A], () => {
                    let e = Am.A.selectedGuildId ?? sz.A.getGuildId();
                    return null == e || Am._.has(e) ? K.Ay.getFlattenedGuildIds().find((e) => !Am._.has(e)) : e;
                }),
                t = (0, O.bG)([H.A], () => H.A.getGuild(e)),
                n = (0, O.bG)([Am.A], () => Am.A.showNotice()),
                i = (0, O.bG)([t5.default], () => t5.default.getCurrentUser()),
                l = Te.A.useField("subsection");
            return (
                x.useEffect(() => {
                    (0, aA._)(TR[l]);
                }, [l]),
                x.useEffect(() => {
                    null != i && t?.id != null && (0, pO.A)(i.id, i.getAvatarURL(t?.id, 80), { guildId: t?.id });
                }, [t?.id, i]),
                (0, S.jsxs)(pL, {
                    children: [
                        (0, S.jsxs)(AT.V, {
                            className: TO.$H,
                            type: "top",
                            look: "brand",
                            selectedItem: l,
                            onItemSelect: function (e) {
                                if (l !== e) {
                                    if (n) {
                                        (0, ap.fO)({ duration: 300, intensity: AE.n3 }),
                                            Tj._.dispatch(q.jej.EMPHASIZE_NOTICE);
                                        return;
                                    }
                                    e === iv.Eq.GUILD && null != t && (0, AS.V2)(t.id),
                                        Te.A.setState({ subsection: e });
                                }
                            },
                            children: [
                                (0, S.jsx)(
                                    AT.V.Item,
                                    {
                                        className: TO.YU,
                                        id: iv.Eq.USER_PROFILE,
                                        children: g.intl.string(g.t["2p07FR"]),
                                    },
                                    iv.Eq.USER_PROFILE,
                                ),
                                (0, S.jsx)(
                                    AT.V.Item,
                                    {
                                        className: ew()(TO.YU, TO.HY),
                                        "aria-label": g.intl.string(g.t.kPHroX),
                                        id: iv.Eq.GUILD,
                                        children: g.intl.string(g.t.kPHroX),
                                    },
                                    iv.Eq.GUILD,
                                ),
                            ],
                        }),
                        l === iv.Eq.GUILD
                            ? (0, S.jsx)(pj, {
                                  selectedGuild: t,
                                  onGuildChange: function (e) {
                                      if (n) {
                                          (0, ap.fO)({ duration: 300, intensity: AE.n3 }),
                                              Tj._.dispatch(q.jej.EMPHASIZE_NOTICE);
                                          return;
                                      }
                                      null != e && (0, AS.JJ)(e.id);
                                  },
                              })
                            : (0, S.jsx)(Ty, {}),
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
    TD = (0, o.zZ)(d.X.PROFILE_CATEGORY, { buildLayout: () => [TL] });
var TG = n(881324);
let TP = () => {
        let e = (0, O.bG)([t5.default], () => t5.default.getCurrentUser()),
            { avatarSrc: t, avatarDecorationSrc: n } = (0, AA.A)({ userId: e?.id, size: nY._3.SIZE_48 });
        return null == e
            ? null
            : (0, S.jsxs)("div", {
                  className: TG.a5,
                  children: [
                      (0, S.jsx)(nX.eu, {
                          src: t,
                          avatarDecoration: n,
                          size: nY._3.SIZE_48,
                          "aria-label": g.intl.string(g.t.lqaIxI),
                      }),
                      (0, S.jsxs)("div", {
                          className: TG.FS,
                          children: [
                              (0, S.jsx)(k.E, {
                                  color: "text-strong",
                                  variant: "text-md/medium",
                                  lineClamp: 1,
                                  children: e.globalName ?? e.username,
                              }),
                              (0, S.jsxs)("div", {
                                  className: TG.Fk,
                                  children: [
                                      (0, S.jsx)(k.E, {
                                          variant: "text-sm/normal",
                                          color: "currentColor",
                                          lineClamp: 1,
                                          children: g.intl.string(g.t.Ip9nBS),
                                      }),
                                      (0, S.jsx)(oD.R, { size: "xxs", color: "currentColor" }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              });
    },
    TM = (0, o.t_)(d.X.PROFILE_PANEL, {
        useTitle: () => g.intl.string(g.t["vi7f+q"]),
        notice: { stores: [Am.A], element: A_.A },
        initialize: () => () =>
            i3.h.wait(() => {
                (0, Ac.F7)(), Ag.A.clearSubsection(q.nc_.PROFILE_CUSTOMIZATION);
            }),
        buildLayout: () => [TD],
    }),
    TU = (0, o.i4)(d.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["vi7f+q"]),
        icon: TV,
        StronglyDiscouragedCustomComponent: TP,
        usePredicate: () => !(0, Ah.X)("user_settings_sidebar"),
        buildLayout: () => [TM],
    }),
    Tk = (0, o.i4)(d.X.PROFILE_SIDEBAR_ITEM_WYSIWYG, {
        useTitle: () => g.intl.string(g.t["vi7f+q"]),
        icon: TV,
        StronglyDiscouragedCustomComponent: TP,
        usePredicate: () => (0, Ah.X)("user_settings_sidebar"),
        onClick: () => {
            let e = u1.default.getId();
            (0, Ap.openUserProfileModal)({ userId: e });
        },
        buildLayout: () => [],
    });
function TV() {
    let e = (0, O.bG)([t5.default], () => t5.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, AA.A)({ userId: e?.id, size: nY._3.SIZE_48 });
    return (0, S.jsx)(nX.eu, { src: t, avatarDecoration: n, size: nY._3.SIZE_20, "aria-hidden": !0 });
}
let Tw = (0, o.WI)(d.X.PROFILE_SECTION, { hoisted: !0, buildLayout: () => [TU, Tk] });
var TB = n(358776),
    TF = n(98207);
function Tz() {
    return (0, S.jsx)(ta.p, { icon: dP.X, messageType: ta.Y.POSITIVE, children: g.intl.string(g.t.FsmBy4) });
}
var TX = n(670492),
    TY = n(579872),
    TH = n(900686),
    TK = n(518142),
    TW = n(662758),
    TZ = n(407186);
function Tq(e) {
    let { backupCodes: t, hasTOTPEnabled: n, currentUser: i } = e,
        l = x.useCallback((e) => {
            (0, b.openModal)((t) => (0, S.jsx)(TK.default, { ...t, password: e }), { stackingBehavior: "stack" });
        }, []),
        s = x.useCallback(() => {
            (0, b.openModal)((e) =>
                (0, S.jsx)(TW.default, {
                    ...e,
                    handleSubmit: (e) =>
                        TF.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                            l(e);
                        }),
                    title: g.intl.string(g.t.PsQmzU),
                    actionText: g.intl.string(g.t.ajkYcF),
                }),
            );
        }, [l]),
        a = x.useCallback(() => {
            let e = t
                    .map((e) => {
                        let { consumed: t, code: n } = e;
                        return `* ${n.substr(0, 4)}-${n.substr(4)} ${t ? "(used)" : ""}`;
                    })
                    .join("\r\n"),
                n = g.intl.formatToPlainString(g.t["uYWwh/"], { email: i.email });
            return `${n}\r
\r
${e}`;
        }, [t, i.email]),
        r = x.useMemo(
            () =>
                t.length > 0
                    ? (0, S.jsx)(TH.A, {
                          fileContents: a,
                          contentType: "text/plain",
                          fileName: "discord_backup_codes.txt",
                          children: (0, S.jsx)(eh.$, {
                              variant: "primary",
                              size: "sm",
                              text: g.intl.string(g.t.qZZUy6),
                          }),
                      })
                    : (0, S.jsx)(eh.$, { variant: "primary", size: "sm", text: g.intl.string(g.t.xZEzbu), onClick: s }),
            [t.length, a, s],
        ),
        o = x.useCallback(() => {
            TY.A.show({
                title: g.intl.string(g.t["D+aE7g"]),
                body: g.intl.string(g.t.EA4ZEk),
                cancelText: g.intl.string(g.t["ETE/oC"]),
                onConfirm: () => TF.A.disable(),
            });
        }, []);
    return (0, S.jsx)(lO.D, {
        label: g.intl.string(g.t.EPVq00),
        description: g.intl.string(g.t.bQwxib),
        children: (0, S.jsxs)(rT.e, {
            size: "sm",
            children: [
                r,
                n &&
                    (0, S.jsx)(eh.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        text: g.intl.string(g.t["D+aE7g"]),
                        onClick: o,
                    }),
                !n &&
                    (0, S.jsx)(eh.$, {
                        variant: "primary",
                        size: "sm",
                        text: g.intl.string(g.t.cDgKte),
                        onClick: TZ.Ay.enableMFA,
                    }),
            ],
        }),
    });
}
var TQ = n(464477);
function TJ() {
    return !TQ.K7;
}
let T$ = (0, o.E2)(d.X.ACCOUNT_TWO_FACTOR_CRYPTO_NOTICE, {
    useSearchTerms: () => [g.intl.string(g.t.m0FidJ)],
    usePredicate: TJ,
    Component: function () {
        return (0, S.jsx)(lO.D, {
            label: g.intl.string(g.t.EPVq00),
            children: (0, S.jsx)(ta.p, { messageType: ta.Y.INFO, children: g.intl.string(g.t.PhHhsj) }),
        });
    },
});
function T0() {
    let e = TJ(),
        t = (0, O.bG)([t5.default], () => {
            let e = t5.default.getCurrentUser();
            return null != e && !e.verified;
        });
    return !e && t;
}
let T1 = (0, o.E2)(d.X.ACCOUNT_UNVERIFIED_USER_NOTICE, {
    useSearchTerms: () => [g.intl.string(g.t.m0FidJ)],
    usePredicate: T0,
    Component: function () {
        return (0, S.jsx)(lO.D, {
            label: g.intl.string(g.t.EPVq00),
            children: (0, S.jsx)(ta.p, { messageType: ta.Y.WARNING, children: g.intl.string(g.t.uggF7o) }),
        });
    },
});
function T2() {
    return (0, O.bG)([t5.default], () => {
        let e = t5.default.getCurrentUser();
        return null != e && e.mfaEnabled;
    });
}
let T5 = (0, o.E2)(d.X.ACCOUNT_AUTHENTICATOR_APP_SETTING, {
    useSearchTerms: function () {
        let e = (0, O.bG)([u1.default], () => u1.default.hasTOTPEnabled()),
            t = [g.intl.string(g.t.m0FidJ), g.intl.string(g.t.xZEzbu)];
        return e ? t.push(g.intl.string(g.t["D+aE7g"])) : t.push(g.intl.string(g.t.cDgKte)), t;
    },
    usePredicate: function () {
        let e = TJ(),
            t = T0(),
            n = T2();
        return !e && !t && n;
    },
    Component: function () {
        let e = (0, O.bG)([t5.default], () => t5.default.getCurrentUser()),
            t = (0, O.bG)([TX.A], () => TX.A.getBackupCodes()),
            n = (0, O.bG)([u1.default], () => u1.default.hasTOTPEnabled());
        return null == e ? null : (0, S.jsx)(Tq, { backupCodes: t, currentUser: e, hasTOTPEnabled: n });
    },
});
var T3 = n(658675),
    T8 = n(103579);
function T4(e) {
    let {
            code: { code: t, consumed: n },
        } = e,
        i = `${t.substr(0, 4)}-${t.substr(4)}`,
        l = x.useRef(null),
        s = x.useCallback(
            (e) => {
                "c" === e.key &&
                    e.metaKey &&
                    u4.p5 &&
                    (e.preventDefault(), e.stopPropagation(), (0, u4.C)(i), l?.current?.focus());
            },
            [i],
        );
    return (0, S.jsx)("li", {
        className: nf.SX,
        children: (0, S.jsxs)(U.D, {
            innerRef: l,
            className: T8.Uc,
            onKeyDown: s,
            children: [(0, S.jsx)(T3.P, { checked: n }), (0, S.jsx)("span", { className: T8.aY, children: i })],
        }),
    });
}
function T9(e) {
    let { backupCodes: t } = e,
        n = x.useCallback((e) => e.map((e) => (0, S.jsx)(T4, { code: e }, e.code)), []),
        i = x.useCallback(async () => {
            let e = TX.A.getVerificationKey();
            await TF.A.confirmViewBackupCodes(e, !0);
        }, []);
    return (0, S.jsxs)(lO.D, {
        label: g.intl.string(g.t.GfqHPn),
        description: g.intl.format(g.t.OhmvYt, {}),
        children: [
            (0, S.jsxs)(sV.A, {
                children: [
                    (0, S.jsx)(sV.A.Child, {
                        children: (0, S.jsx)("ul", { className: T8.Pm, children: n(t.slice(0, t.length / 2)) }),
                    }),
                    (0, S.jsx)(sV.A.Child, {
                        children: (0, S.jsx)("ul", { className: T8.Pm, children: n(t.slice(t.length / 2)) }),
                    }),
                ],
            }),
            (0, S.jsx)(B.Q, { textVariant: "text-sm/medium", onClick: i, text: g.intl.string(g.t.RIThUu) }),
        ],
    });
}
let T7 = (0, o.E2)(d.X.ACCOUNT_BACKUP_CODES_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t.m0FidJ), g.intl.string(g.t.xZEzbu)],
        usePredicate: function () {
            let e = TJ(),
                t = T0(),
                n = T2(),
                i = (0, O.bG)([TX.A], () => TX.A.getBackupCodes().length > 0);
            return !e && !t && n && i;
        },
        Component: function () {
            let e = (0, O.bG)([TX.A], () => TX.A.getBackupCodes());
            return (0, S.jsx)(T9, { backupCodes: e });
        },
    }),
    T6 = (0, o.E2)(d.X.ACCOUNT_ENABLE_MFA_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t.m0FidJ)],
        usePredicate: function () {
            let e = TJ(),
                t = T0();
            return (0, O.bG)([t5.default], () => {
                let n = t5.default.getCurrentUser();
                return null != n && !n.mfaEnabled && !e && !t;
            });
        },
        Component: function () {
            return (0, S.jsx)(lO.D, {
                label: g.intl.string(g.t.EPVq00),
                description: g.intl.string(g.t["8aDa1t"]),
                children: (0, S.jsx)(eh.$, {
                    variant: "primary",
                    size: "sm",
                    text: g.intl.string(g.t.cDgKte),
                    onClick: TZ.Ay.enableMFA,
                }),
            });
        },
    });
var Ee = n(846017);
let Et = (0, o.Tf)(d.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
        useTitle: () => g.intl.string(g.t["CIGa+7"]),
        useLabel: () => g.intl.string(g.t.bt75uw),
        useAriaLabel: () => g.intl.string(g.t["FRep5/"]),
        useVariant: () => "secondary",
        onClick: () => {
            (0, b.openModal)((e) => (0, S.jsx)(Ee.default, { ...e, onSuccess: () => e.onClose() }));
        },
    }),
    En = (0, o.E2)(d.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t["FRep5/"])],
        Component: function () {
            return (0, S.jsx)(eh.$, {
                variant: "primary",
                size: "sm",
                text: g.intl.string(g.t["FRep5/"]),
                onClick: () => (0, b.openModal)((e) => (0, S.jsx)(Ee.default, { ...e, onSuccess: e.onClose })),
            });
        },
    });
var Ei = n(557722),
    El = n(615715);
function Es(e) {
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
var Ea =
    (((a = {}).AVAILABLE = "available"),
    (a.UNAVAILABLE_NO_CRYPTO = "unavailable_no_crypto"),
    (a.UNAVAILABLE_UNVERIFIED = "unavailable_unverified"),
    a);
function Er() {
    let e = (0, dp.bG)([t5.default], () => t5.default.getCurrentUser()?.verified);
    return TQ.K7 ? (!1 === e ? "unavailable_unverified" : "available") : "unavailable_no_crypto";
}
function Eo() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (0, dp.bG)([H.A, pE.A, t5.default], () =>
        t5.default.getCurrentUser()?.hasAnyStaffLevel()
            ? e
                ? g.intl.string(g.t.hxf9fX)
                : g.intl.string(g.t["3iKih7"])
            : H.A.getGuildsArray().some(
                    (e) =>
                        e.features.has(q.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) &&
                        pE.A.can(q.xBc.ADMINISTRATOR, e),
                )
              ? e
                  ? g.intl.string(g.t.OYTCUh)
                  : g.intl.string(g.t.HC8uSZ)
              : null,
    );
}
var Ed = n(53516);
function Eu(e) {
    let t,
        n,
        { currentUser: i, togglingSMS: l } = e,
        [s, a] = x.useState(!1),
        r = x.useCallback(
            (e) => {
                e.preventDefault(), a(!s);
            },
            [s],
        ),
        o = x.useCallback(function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            (0, b.openModal)((t) => (0, S.jsx)(El.default, { reason: Ei.d.USER_SETTINGS_UPDATE, ...t, ...e }), {
                modalKey: Ed.V,
            });
        }, []),
        d = x.useCallback(() => {
            o();
        }, [o]),
        u = x.useCallback(() => {
            null == i.phone ? o({ onAddedPhone: TF.A.enableSMS }) : TF.A.enableSMS();
        }, [i, o]),
        c = x.useCallback(() => {
            (0, b.openModal)((e) =>
                (0, S.jsx)(TW.default, {
                    ...e,
                    handleSubmit: TF.A.disableSMS,
                    title: g.intl.string(g.t.KLWnit),
                    children: g.intl.string(g.t["W0/Duf"]),
                }),
            );
        }, []),
        _ = x.useCallback((e) => (null == e ? "" : `${"*".repeat(e.length - 4)}${e.slice(-4)}`), []),
        m = null != i.phone,
        h = i.hasFlag(q.nhx.MFA_SMS);
    if (m || h) {
        let e = s ? i.phone : _(i.phone);
        n = (0, S.jsxs)(k.E, {
            variant: "text-sm/normal",
            children: [
                g.intl.format(g.t.PXVoEO, { phoneNumber: e }),
                (0, S.jsx)(dT.Anchor, {
                    onClick: r,
                    className: T8.vN,
                    children: s ? g.intl.string(g.t.FfltIN) : g.intl.string(g.t.llArAg),
                }),
            ],
        });
    }
    if (h)
        t = (0, S.jsx)(eh.$, {
            variant: "critical-secondary",
            size: "sm",
            text: g.intl.string(g.t.KLWnit),
            loading: l,
            onClick: c,
        });
    else {
        let e = Es(i);
        t = (0, S.jsxs)(rT.e, {
            size: "sm",
            children: [
                (0, S.jsx)(eh.$, {
                    variant: "primary",
                    size: "sm",
                    text: e ?? g.intl.string(g.t.DZQe23),
                    onClick: u,
                    loading: l,
                    disabled: null != e,
                }),
                m
                    ? (0, S.jsx)(eh.$, {
                          variant: "secondary",
                          size: "sm",
                          text: g.intl.string(g.t.Ulqq6K),
                          onClick: d,
                      })
                    : null,
            ],
        });
    }
    return (0, S.jsxs)(lO.D, {
        label: g.intl.string(g.t.uHAJ5v),
        description: g.intl.string(g.t.fspJ4H),
        children: [n, t],
    });
}
let Ec = (0, o.E2)(d.X.ACCOUNT_SMS_BACKUP_AUTHENTICATION_SETTING, {
    useSearchTerms: () => [g.intl.string(g.t.uHAJ5v)],
    usePredicate: function () {
        let e = TJ(),
            t = T0(),
            n = T2(),
            i = (0, O.bG)([u1.default], () => u1.default.hasTOTPEnabled());
        return !e && !t && n && i;
    },
    Component: function () {
        let e = (0, O.bG)([t5.default], () => t5.default.getCurrentUser()),
            t = (0, O.bG)([TX.A], () => TX.A.togglingSMS);
        return null == e ? null : (0, S.jsx)(Eu, { currentUser: e, togglingSMS: t });
    },
});
var Eg = n(328009);
let E_ = (0, o.E2)(d.X.ACCOUNT_SECURITY_KEYS_SETTING, {
    useSearchTerms: () => [g.intl.string(g.t.vrOCCk), g.intl.string(g.t.y7SXYX)],
    usePredicate: function () {
        let e = TJ(),
            t = T0();
        return !e && !t;
    },
    Component: Eg.A,
});
var Em = n(200921),
    Eh = n(390310),
    EA = n(766928),
    Ep = n(568385),
    ET = n(791606),
    EE = n(646270),
    ES = n(738678);
function Ex(e, t) {
    let n = e.client_info?.location ?? e.client_info?.ip,
        i = e.client_info?.platform,
        { text: l, icon: s } = (function (e) {
            switch (e?.toLowerCase().trim()) {
                case null:
                case void 0:
                case "":
                    return { text: g.intl.string(g.t.cDHCNY), icon: e2.k };
                case "ios":
                case "android":
                    return { text: e, icon: EE.u };
                case "horizon os":
                    return { text: e, icon: ES.G };
                default:
                    return { text: e, icon: e2.k };
            }
        })(e.client_info?.os);
    return { location: n, platform: i, os: l, Icon: s, lastActive: t ? null : (0, Eh.Y)(e.approx_last_used_time) };
}
var Ef = n(405814);
function Eb() {
    return (0, S.jsx)(k.E, { variant: "text-sm/normal", className: Ef.h_, children: g.intl.string(g.t.zZp618) });
}
function EN() {
    let { currentSession: e } = (0, Eh.r)();
    return null == e
        ? (0, S.jsx)("div", { className: Ef.Lq, children: (0, S.jsx)(dM.y, {}) })
        : (0, S.jsx)(na.n, { label: g.intl.string(g.t.LLS19o), children: (0, S.jsx)(Ev, { session: e, current: !0 }) });
}
function EC(e) {
    let { checked: t, otherSessions: n } = e;
    return (0, S.jsx)(lO.D, {
        label: t.size > 0 ? g.intl.string(g.t.mMEmRO) : g.intl.string(g.t.Vij32M),
        description: g.intl.string(g.t.OTXyaf),
        children: (0, S.jsx)("div", {
            "data-button-hoisted-classname-wrapper": !0,
            className: Ef.Cn,
            children: (0, S.jsx)(eh.$, {
                variant: "critical-secondary",
                size: "sm",
                text:
                    t.size > 0
                        ? g.intl.formatToPlainString(g.t["83CPLj"], { count: t.size })
                        : g.intl.string(g.t.cLmmeY),
                onClick: () => {
                    t.size > 0 ? (0, Em.U0)(Array.from(t)) : (0, Em.U0)(n.map((e) => e.id_hash));
                },
            }),
        }),
    });
}
function EI() {
    let { currentSession: e, otherSessions: t } = (0, Eh.r)(),
        n = (0, O.bG)([t5.default], () => t5.default.getCurrentUser()),
        [i, l] = x.useState(new Set());
    return (null == e && 0 === t.length) || (0 === t.length && n?.mfaEnabled)
        ? null
        : t.length > 0 || !n?.mfaEnabled
          ? (0, S.jsxs)(S.Fragment, {
                children: [
                    (0, S.jsxs)(na.n, {
                        label: g.intl.string(g.t.xx1MWc),
                        children: [
                            t.map((e) =>
                                (0, S.jsx)(
                                    Ev,
                                    {
                                        session: e,
                                        useChecks: i.size > 0,
                                        checked: i.has(e.id_hash),
                                        setChecked: (t) => {
                                            let n = new Set(i);
                                            t ? n.add(e.id_hash) : n.delete(e.id_hash), l(n);
                                        },
                                    },
                                    e.id_hash,
                                ),
                            ),
                            n?.mfaEnabled ? null : (0, S.jsx)(Ey, {}),
                        ],
                    }),
                    t.length > 0 &&
                        (0, S.jsx)("div", {
                            className: Ef.wq,
                            children: (0, S.jsx)(EC, { checked: i, otherSessions: t }),
                        }),
                ],
            })
          : null;
}
function Ev(e) {
    let { session: t, current: n, setChecked: i, checked: l, useChecks: s } = e,
        { location: a, platform: r, os: o, Icon: d, lastActive: u } = Ex(t, n),
        c = [o, r].filter(t3.Vq),
        _ = [a, u].filter(t3.Vq);
    return (0, S.jsxs)(
        "div",
        {
            className: ew()(Ef.dZ, { [Ef.gg]: n }),
            children: [
                (0, S.jsxs)("div", {
                    className: Ef.OC,
                    children: [
                        (0, S.jsx)("div", {
                            className: Ef.km,
                            children: (0, S.jsx)(d, { size: "md", color: "currentColor" }),
                        }),
                        (0, S.jsxs)("div", {
                            className: Ef.F3,
                            children: [
                                (0, S.jsxs)(k.E, {
                                    variant: "eyebrow",
                                    className: Ef.nT,
                                    children: [
                                        (0, S.jsx)("span", { children: c[0] }),
                                        c.length > 1 &&
                                            (0, S.jsxs)(S.Fragment, {
                                                children: [
                                                    (0, S.jsx)("span", { children: "\xb7" }),
                                                    (0, S.jsx)("span", { children: c[1] }),
                                                ],
                                            }),
                                    ],
                                }),
                                (0, S.jsxs)(k.E, {
                                    variant: "text-sm/medium",
                                    className: Ef.nT,
                                    children: [
                                        (0, S.jsx)("span", { children: _[0] }),
                                        _.length > 1 &&
                                            (0, S.jsxs)(S.Fragment, {
                                                children: [
                                                    (0, S.jsx)("span", { children: "\xb7" }),
                                                    (0, S.jsx)("span", { children: _[1] }),
                                                ],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        n
                            ? null
                            : s
                              ? (0, S.jsx)("div", {
                                    className: Ef.GR,
                                    children: (0, S.jsx)(Ep.J, {
                                        onChange: (e) => {
                                            i?.(e);
                                        },
                                        checked: l,
                                    }),
                                })
                              : (0, S.jsx)(U.D, {
                                    className: Ef.ux,
                                    onClick: (e) => {
                                        e.shiftKey ? i?.(!0) : (0, Em.U0)(t.id_hash);
                                    },
                                    "aria-label": g.intl.string(g.t.E4MJNt),
                                    children: (0, S.jsx)(cU.P, { size: "md", color: "currentColor" }),
                                }),
                    ],
                }),
                !n && (0, S.jsx)(nO.c, { className: Ef.O9 }),
            ],
        },
        t.id_hash,
    );
}
function Ey() {
    return (0, S.jsxs)("div", {
        className: ew()(Ef.dZ, Ef.EC),
        children: [
            (0, S.jsxs)("div", {
                className: Ef.OC,
                children: [
                    (0, S.jsx)("div", { className: Ef.km, children: (0, S.jsx)(ET.A, { width: "32", height: "32" }) }),
                    (0, S.jsxs)("div", {
                        className: Ef.F3,
                        children: [
                            (0, S.jsx)(k.E, {
                                variant: "eyebrow",
                                className: Ef.nT,
                                color: "text-muted",
                                children: (0, S.jsx)("span", { children: g.intl.string(g.t.iUa0sn) }),
                            }),
                            (0, S.jsx)(k.E, {
                                variant: "text-sm/medium",
                                className: Ef.nT,
                                color: "text-muted",
                                children: (0, S.jsx)("span", {
                                    children: g.intl.format(g.t["044+8i"], {
                                        onClick: () =>
                                            (0, ey.openUserSettings)(d.X.ACCOUNT_PANEL, {
                                                analyticsLocations: [eU.A.USER_SETTINGS_SESSIONS],
                                            }),
                                    }),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, S.jsx)("div", { className: Ef.O9 }),
        ],
    });
}
var Ej = n(176524),
    EO = n(583133);
function ER(e) {
    let { icon: t, label: n, subLabel: i, description: l, children: s, muted: a } = e;
    return (0, S.jsxs)(R.B, {
        direction: "horizontal",
        align: "center",
        gap: "sm",
        role: "listitem",
        children: [
            (0, S.jsx)(Ej.A, { Icon: t, color: a ? w.A.colors.ICON_MUTED : "currentColor" }),
            (0, S.jsxs)(R.B, {
                direction: "vertical",
                gap: "xxs",
                children: [
                    (0, S.jsxs)(R.B, {
                        direction: "horizontal",
                        gap: "xs",
                        children: [
                            (0, S.jsx)(k.E, { variant: "text-md/semibold", color: "text-strong", children: n }),
                            null != n &&
                                null != i &&
                                (0, S.jsx)(k.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    "aria-hidden": !0,
                                    children: "•",
                                }),
                            null != i &&
                                (0, S.jsx)(k.E, { variant: "text-md/medium", color: "text-subtle", children: i }),
                        ],
                    }),
                    (0, S.jsx)(k.E, { variant: "text-sm/normal", color: "text-muted", children: l }),
                ],
            }),
            s,
        ],
    });
}
function EL(e) {
    let { session: t, current: n } = e,
        { location: i, platform: l, os: s, Icon: a, lastActive: r } = Ex(t, n),
        o = [i, r].filter(t3.Vq);
    return (0, S.jsx)(ER, {
        icon: a,
        label: s,
        subLabel: l,
        description: o.join(" \xb7 "),
        children:
            !n &&
            (0, S.jsx)(U.D, {
                className: EO.X,
                onClick: () => (0, Em.U0)(t.id_hash),
                "aria-label": g.intl.string(g.t.E4MJNt),
                children: (0, S.jsx)(cU.P, { size: "md", color: "currentColor" }),
            }),
    });
}
function ED(e) {
    let { title: t, children: n } = e,
        i = x.useId();
    return (0, S.jsxs)(R.B, {
        role: "group",
        "aria-labelledby": i,
        gap: "xl",
        padding: { top: 8, bottom: 8 },
        children: [
            (0, S.jsx)(em.D, { id: i, variant: "heading-md/semibold", color: "text-muted", children: t }),
            (0, S.jsx)(R.B, { role: "list", gap: "xl", children: n }),
        ],
    });
}
function EG() {
    let { currentSession: e } = (0, Eh.r)();
    return null == e
        ? (0, S.jsx)(dM.y, {})
        : (0, S.jsx)(ED, { title: g.intl.string(g.t.LLS19o), children: (0, S.jsx)(EL, { session: e, current: !0 }) });
}
let EP = (0, o.E2)(d.X.SESSIONS_CURRENT_SESSION_SETTING, {
        Component: function () {
            return (0, TB._A)("CurrentSessionSetting") ? (0, S.jsx)(EG, {}) : (0, S.jsx)(EN, {});
        },
        useSearchTerms: () => [],
    }),
    EM = (0, o.E2)(d.X.SESSIONS_LOGOUT_ALL_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = (0, Eh.r)();
            return (0, S.jsx)(lO.D, {
                label: g.intl.string(g.t.Vij32M),
                description: g.intl.string(g.t.OTXyaf),
                children: (0, S.jsx)(eh.$, {
                    onClick: () => (0, Em.U0)(e.map((e) => e.id_hash)),
                    variant: "critical-primary",
                    size: "sm",
                    text: g.intl.string(g.t.cLmmeY),
                }),
            });
        },
        useSearchTerms: () => [g.intl.string(g.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = (0, Eh.r)();
            return e.length > 0;
        },
    });
function EU() {
    return (0, S.jsx)(ER, {
        icon: EA.W,
        label: g.intl.string(g.t.iUa0sn),
        description: g.intl.format(g.t["044+8i"], {
            onClick: () =>
                (0, ey.openUserSettings)(d.X.ACCOUNT_PANEL, { analyticsLocations: [eU.A.USER_SETTINGS_SESSIONS] }),
        }),
        muted: !0,
    });
}
function Ek() {
    let { otherSessions: e } = (0, Eh.r)(),
        t = (0, O.bG)([t5.default], () => t5.default.getCurrentUser());
    return (0, S.jsxs)(ED, {
        title: g.intl.string(g.t.xx1MWc),
        children: [e.map((e) => (0, S.jsx)(EL, { session: e }, e.id_hash)), t?.mfaEnabled ? null : (0, S.jsx)(EU, {})],
    });
}
let EV = (0, o.E2)(d.X.SESSIONS_OTHER_SESSIONS_SETTING, {
        Component: function () {
            return (0, TB._A)("OtherSessionsSetting") ? (0, S.jsx)(Ek, {}) : (0, S.jsx)(EI, {});
        },
        useSearchTerms: () => [g.intl.string(g.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = (0, Eh.r)(),
                t = (0, O.bG)([t5.default], () => t5.default.getCurrentUser()?.mfaEnabled);
            return e.length > 0 || !t;
        },
    }),
    Ew = (0, o.zZ)(d.X.SESSIONS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.mEndXM),
        useSubtitle: () => g.intl.string(g.t.b7ZpTM),
        initialize: () => {
            (0, Em.GY)();
        },
        buildLayout: () => [EP, EV, EM],
        useSearchTerms: () => [
            g.intl.string(g.t["+1h0k/"]),
            g.intl.string(g.t.LLS19o),
            g.intl.string(g.t.xx1MWc),
            g.intl.string(g.t.lSWsrd),
        ],
    }),
    EB = (0, o.zZ)(d.X.SESSIONS_CATEGORY, {
        useSearchTerms: () => [
            g.intl.string(g.t["+1h0k/"]),
            g.intl.string(g.t.LLS19o),
            g.intl.string(g.t.xx1MWc),
            g.intl.string(g.t.Vij32M),
            g.intl.string(g.t.lSWsrd),
        ],
        buildLayout: () => [EP, EV],
        initialize: () => (
            (0, Em.GY)(),
            () => {
                (0, Em.ZQ)();
            }
        ),
        useInlineNotice: function () {
            return x.useMemo(() => ({ type: ef.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: Eb }), []);
        },
    }),
    EF = (0, o.t_)(d.X.SESSIONS_PANEL, {
        useTitle: () => ((0, TB._A)("SessionsPanel") ? g.intl.string(g.t.mEndXM) : g.intl.string(g.t["+1h0k/"])),
        useObscuredNotice: dG.L,
        buildLayout: () => ((0, TB.pC)("SessionsPanel") ? [Ew] : [EB]),
    }),
    Ez = (0, o.i4)(d.X.SESSIONS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["+1h0k/"]),
        icon: EA.W,
        usePredicate: () => !(0, TB._A)("SessionsPanel"),
        buildLayout: () => [EF],
    }),
    EX = (0, o.t0)(d.X.ACCOUNT_SESSIONS_NESTED_PANEL, {
        buildLayout: () => [EF],
        usePredicate: () => (0, TB._A)("AccountSessionsNestedPanel"),
        initialize: () => {
            (0, Em.GY)();
        },
        useTrailingDecoration: () => ({
            type: ef.xn.TEXT,
            useText: () => {
                let { currentSession: e, otherSessions: t } = (0, Eh.r)(),
                    n = t.length + +(null != e);
                return n > 0 ? g.intl.formatToPlainString(g.t.G7zwOk, { count: n }) : g.intl.string(g.t.MKDeyL);
            },
        }),
    }),
    EY = (0, o.zZ)(d.X.ACCOUNT_AUTHENTICATION_CATEGORY, {
        useTitle: () => g.intl.string(g.t.pKSjEj),
        useInlineNotice: function () {
            return (0, O.bG)([t5.default], () => t5.default.getCurrentUser()?.mfaEnabled ?? !1)
                ? { type: ef.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: Tz }
                : null;
        },
        buildLayout: () => [
            En,
            T$,
            T1,
            T6,
            T5,
            T7,
            Ec,
            E_,
            ...((0, TB.pC)("AccountAuthenticationCategory") ? [EX] : []),
        ],
    });
n(204925);
var EH = n(818348);
let EK = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0;
    (0, b.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("78925"), n.e("5291")]).then(n.bind(n, 888363));
            return (n) => (0, S.jsx)(t, { claimRequired: e, ...n });
        },
        { onCloseRequest: e ? EH.tE : null, onCloseCallback: t },
    );
};
var EW = n(876696),
    EZ = n(36149),
    Eq = n(207560);
function EQ(e) {
    let t = (0, Eq.fk)(),
        n = (0, EZ.b8)(),
        i = (0, EZ.yM)(),
        l = (0, EZ.Y2)();
    if (!t) return !1;
    let s = !n || i;
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
var EJ = n(516761);
function E$() {
    let e = g.intl.string(g.t.XxRj7f);
    return (0, S.jsxs)(k.E, {
        variant: "text-md/medium",
        children: [
            `${e} • `,
            g.intl.format(EJ.default.WM5adV, {
                handleOnHelpUrlHook: () => window.open(tr.A.getArticleURL(q.MVz.TIGGER_PAWTECT_LEARN_MORE), "_blank"),
            }),
        ],
    });
}
let E0 = (0, o.Tf)(d.X.ACCOUNT_INFO_AGE_GROUP_EDIT_SETTING, {
        usePredicate: () => EQ("edit"),
        useTitle: () => g.intl.string(g.t["/52UYy"]),
        useVariant: () => "secondary",
        useTrailingContent: () => ({ type: ef._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: E$ }),
        useLabel: () => g.intl.string(g.t.bt75uw),
        onClick: function () {
            (0, b.openModalLazy)(async () => {
                let { default: e } = await n.e("45361").then(n.bind(n, 151080));
                return (t) => (0, S.jsx)(e, { ...t });
            });
        },
    }),
    E1 = (0, o.E2)(d.X.ACCOUNT_INFO_AGE_GROUP_INFO_SETTING, {
        usePredicate: () => EQ("info"),
        useSearchTerms: () => [g.intl.string(g.t["/52UYy"])],
        Component: function () {
            return (0, S.jsx)(lO.D, {
                label: g.intl.string(g.t["/52UYy"]),
                layout: "horizontal",
                children: (0, S.jsxs)(R.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "end",
                    gap: "md",
                    children: [
                        (0, S.jsx)(k.E, { variant: "text-md/medium", children: g.intl.string(g.t.XxRj7f) }),
                        (0, S.jsx)("div", {
                            style: { visibility: "hidden" },
                            children: (0, S.jsx)(eh.$, {
                                onClick: EH.tE,
                                text: g.intl.string(g.t.bt75uw),
                                "aria-hidden": !0,
                            }),
                        }),
                    ],
                }),
            });
        },
    });
var E2 = n(139716),
    E5 = n(847599);
function E3() {
    return (0, EZ.yM)() ? g.intl.string(g.t.sK0dmH) : g.intl.string(g.t.lKDPGA);
}
let E8 = (0, o.Tf)(d.X.ACCOUNT_INFO_AGE_GROUP_VERIFY_SETTING, {
        usePredicate: () => EQ("verify"),
        useTitle: () => g.intl.string(g.t["/52UYy"]),
        useVariant: () => "secondary",
        useTrailingContent: () => ({ type: ef._1.TEXT, useText: E3 }),
        useLabel: function () {
            return (0, EZ.yM)() ? g.intl.string(g.t["9KiIz6"]) : g.intl.string(g.t.DVywUB);
        },
        onClick: () => E2.A.showAgeVerificationGetStartedModal({ entryPoint: E5.q1.ACCOUNT_AGE_GROUP }),
    }),
    E4 = (0, o.Tf)(d.X.ACCOUNT_INFO_CLAIM_ACCOUNT_SETTING, {
        usePredicate: () => {
            let e = (0, O.bG)([t5.default], () => t5.default.getCurrentUser());
            return null != e && !e.isClaimed();
        },
        useTitle: () => g.intl.string(g.t.tlZllC),
        useVariant: () => "secondary",
        useTrailingContent: () => ({ type: ef._1.TEXT, useText: () => g.intl.string(g.t.qxk9zo) }),
        useLabel: () => g.intl.string(g.t.BleMPB),
        onClick: () => EK(),
    });
function E9(e) {
    return `${"*".repeat(e.length - 4)}${e.slice(-4)}`;
}
function E7(e) {
    let [t, n] = e.split("@");
    return `${"*".repeat(t.length)}@${n}`;
}
function E6(e) {
    let { text: t, censor: n, revealLabel: i, hideLabel: l, redesign: s = !1 } = e,
        [a, r] = x.useState(!1),
        o = a ? t : n(t);
    return (0, S.jsxs)(R.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        justify: s ? "end" : "start",
        children: [
            s ? (0, S.jsx)(k.E, { variant: "text-md/medium", children: o }) : o,
            (0, S.jsx)(B.Q, {
                variant: "primary",
                textVariant: s ? "text-md/medium" : "text-sm/medium",
                "aria-label": a ? l : i,
                onClick: () => r(!a),
                text: a ? g.intl.string(g.t.fgq1gs) : g.intl.string(g.t.dcztdU),
            }),
        ],
    });
}
function Se() {
    let e = (0, O.bG)([t5.default], () => t5.default.getCurrentUser()?.email);
    return null == e
        ? (0, S.jsx)(k.E, { variant: "text-md/medium", children: g.intl.string(g.t["8SfTN/"]) })
        : (0, S.jsx)(E6, {
              text: e,
              censor: E7,
              revealLabel: g.intl.string(g.t["Zvx+yV"]),
              hideLabel: g.intl.string(g.t.nqTD4d),
              redesign: !0,
          });
}
let St = (0, o.Tf)(d.X.ACCOUNT_INFO_EMAIL_SETTING, {
    usePredicate: () => (0, O.bG)([t5.default], () => t5.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => g.intl.string(g.t.tlZllC),
    useVariant: () => "secondary",
    useTrailingContent: () => ({ type: ef._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: Se }),
    useLabel: function () {
        return null == (0, O.bG)([t5.default], () => t5.default.getCurrentUser()?.email)
            ? g.intl.string(g.t.OYkgVk)
            : g.intl.string(g.t.bt75uw);
    },
    useAriaLabel: function () {
        return null == (0, O.bG)([t5.default], () => t5.default.getCurrentUser()?.email)
            ? g.intl.string(g.t["pvBD+W"])
            : g.intl.string(g.t["8peUT0"]);
    },
    onClick: function () {
        (0, b.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("76660"), n.e("28450")]).then(n.bind(n, 121343));
            return (t) => (0, S.jsx)(e, { ...t });
        });
    },
});
function Sn() {
    let e = (0, O.bG)([t5.default], () => t5.default.getCurrentUser()),
        t = e?.phone ?? null;
    return null == e || null == t
        ? (0, S.jsx)(k.E, { variant: "text-md/medium", children: g.intl.string(g.t.I5kDqj) })
        : (0, S.jsx)(R.B, {
              direction: "horizontal",
              align: "center",
              justify: "end",
              gap: "md",
              children: (0, S.jsx)(E6, {
                  text: t,
                  censor: E9,
                  revealLabel: g.intl.string(g.t.eY3xlT),
                  hideLabel: g.intl.string(g.t["jllbv+"]),
                  redesign: !0,
              }),
          });
}
let Si = (0, o.Tf)(d.X.ACCOUNT_INFO_PHONE_SETTING, {
    usePredicate: () => (0, O.bG)([t5.default], () => t5.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => g.intl.string(g.t.kerONq),
    useAriaLabel: function () {
        return null == (0, O.bG)([t5.default], () => t5.default.getCurrentUser()?.phone)
            ? g.intl.string(g.t["SfUuE+"])
            : g.intl.string(g.t.YDabSe);
    },
    useVariant: () => "secondary",
    useTrailingContent: () => ({ type: ef._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: Sn }),
    useLabel: function () {
        return null == (0, O.bG)([t5.default], () => t5.default.getCurrentUser()?.phone)
            ? g.intl.string(g.t.OYkgVk)
            : g.intl.string(g.t.bt75uw);
    },
    onClick: function () {
        null == t5.default.getCurrentUser()?.phone
            ? (0, b.openModalLazy)(
                  async () => {
                      let { default: e } = await Promise.resolve().then(n.bind(n, 615715));
                      return (t) => (0, S.jsx)(e, { reason: Ei.d.USER_SETTINGS_UPDATE, ...t });
                  },
                  { modalKey: Ed.V },
              )
            : (0, b.openModalLazy)(async () => {
                  let { default: e } = await n.e("89061").then(n.bind(n, 359012));
                  return (t) => (0, S.jsx)(e, { ...t });
              });
    },
});
function Sl() {
    let e = (0, O.bG)([t5.default], () => t5.default.getCurrentUser());
    return null != e && !e.isClaimed();
}
function Ss() {
    let e = (0, AL.EC)(),
        t = e?.nick?.[0] ?? null,
        n = (0, O.bG)([t5.default], () => t5.default.getCurrentUser());
    if (null == n) return null;
    let i = n.hasUniqueUsername() ? n.username : `${n.username}#${n.discriminator}`;
    return (0, S.jsxs)(S.Fragment, {
        children: [
            (0, S.jsx)(k.E, { variant: "text-md/medium", children: i }),
            null != t &&
                (0, S.jsx)(e0.m, {
                    __unsupportedReactNodeAsText: t,
                    "aria-label": !1,
                    children: (0, S.jsx)(sy.E, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: w.A.colors.STATUS_WARNING.css,
                    }),
                }),
        ],
    });
}
let Sa = (0, o.Tf)(d.X.ACCOUNT_INFO_USERNAME_SETTING, {
        useTitle: () => g.intl.string(g.t.qqhR3L),
        useTrailingContent: () => ({ type: ef._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: Ss }),
        useLabel: () => g.intl.string(g.t.bt75uw),
        useAriaLabel: () => g.intl.string(g.t.JECa91),
        useSubtitle: () => (Sl() ? g.intl.string(g.t["7Ngnyr"]) : void 0),
        useVariant: () => "secondary",
        useDisabled: Sl,
        onClick: function () {
            (0, b.openModalLazy)(async () => {
                let { default: e } = await n.e("13161").then(n.bind(n, 331632));
                return (t) => (0, S.jsx)(e, { ...t });
            });
        },
    }),
    Sr = (0, o.zZ)(d.X.ACCOUNT_INFO_CATEGORY, {
        usePredicate: () => (0, O.bG)([t5.default], () => null != t5.default.getCurrentUser()),
        useTitle: () => g.intl.string(g.t.apNo4l),
        useInlineNotice: function () {
            let e = (0, O.bG)([t5.default], () => t5.default.getCurrentUser());
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
                            button: { useText: () => g.intl.string(g.t.lm1UKt), onClick: () => (0, EW.S)(e) },
                        }
                  : {
                        type: ef.lT.INLINE_NOTICE,
                        noticeType: "critical",
                        useTitle: () => g.intl.string(g.t["/3qnL/"]),
                        useText: () => g.intl.string(g.t.qKs3vg),
                        button: { useText: () => g.intl.string(g.t["7psymi"]), onClick: () => EK() },
                    };
        },
        buildLayout: () => [Sa, E4, St, Si, E8, E0, E1],
    }),
    So = (0, o.Tf)(d.X.AUTHENTICATOR_APP_DISABLE_BUTTON, {
        useTitle: () => g.intl.string(g.t.lQsY7B),
        useSubtitle: () => Eo(!0),
        useDisabled: () => null !== Eo(!0),
        useLabel: () => g.intl.string(g.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => {
            let e = (0, O.bG)([u1.default], () => u1.default.hasTOTPEnabled()),
                t = Er() === Ea.AVAILABLE;
            return e && t;
        },
        onClick: () =>
            void (0, lt.A)({
                title: g.intl.string(g.t["D+aE7g"]),
                subtitle: g.intl.string(g.t.EA4ZEk),
                variant: "critical",
                confirmText: g.intl.string(g.t.N86XcP),
                onConfirm: () => TF.A.disable(),
            }),
    }),
    Sd = (0, o.zZ)(d.X.AUTHENTICATOR_APP_CATEGORY, {
        useTitle: () => g.intl.string(g.t.RumMFo),
        useSubtitle: () => g.intl.string(g.t.iTbTo7),
        useHeaderDecoration: function () {
            let e = (0, O.bG)([u1.default], () => u1.default.hasTOTPEnabled()),
                t = Er() === Ea.AVAILABLE;
            if (!e && t)
                return {
                    type: ef.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: ef.UV.BUTTON,
                            id: "mfa-setup-button",
                            text: g.intl.string(g.t.cTNUeD),
                            onClick: TZ.Ay.enableMFA,
                        },
                    ],
                };
        },
        useInlineNotice: function () {
            switch (Er()) {
                case Ea.UNAVAILABLE_NO_CRYPTO:
                    return { type: ef.lT.INLINE_NOTICE, noticeType: "info", useText: () => g.intl.string(g.t.PhHhsj) };
                case Ea.UNAVAILABLE_UNVERIFIED:
                    return {
                        type: ef.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        useText: () => g.intl.string(g.t.uggF7o),
                    };
                case Ea.AVAILABLE:
                    return;
            }
        },
        collapseOnEmpty: !1,
        buildLayout: () => [So],
    });
var Su = n(32880),
    Sc = n(663417);
function Sg() {
    (0, b.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
        return (t) =>
            (0, S.jsx)(e, {
                ...t,
                handleSubmit: (e) =>
                    TF.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                        var t;
                        return (
                            (t = e),
                            void (0, b.openModalLazy)(
                                async () => {
                                    let { default: e } = await Promise.resolve().then(n.bind(n, 518142));
                                    return (n) => (0, S.jsx)(e, { ...n, password: t });
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
var S_ = n(526122);
function Sm(e) {
    return `${e.slice(0, 4)}-${e.slice(4)}`;
}
async function Sh() {
    let e = TX.A.getVerificationKey();
    try {
        await TF.A.confirmViewBackupCodes(e, !0);
    } catch (e) {
        (0, h1.P0)({
            message: e.body?.message ?? g.intl.string(g.t.F8FvUy),
            type: h5.Ck.FAILURE,
            id: "backup-code-regen-failed",
        });
    }
}
function SA(e) {
    let {
            code: { code: t, consumed: n },
        } = e,
        i = Sm(t),
        l = x.useRef(null),
        s = (0, S.jsxs)(S.Fragment, {
            children: [(0, S.jsx)(T3.P, { checked: n }), (0, S.jsx)(k.E, { variant: "text-md/normal", children: i })],
        });
    return u4.p5
        ? (0, S.jsx)(U.D, {
              tag: "li",
              className: ew()(S_.aY, S_.vk),
              innerRef: l,
              onKeyDown: (e) => {
                  "c" === e.key &&
                      (e.metaKey || e.ctrlKey) &&
                      (e.preventDefault(), e.stopPropagation(), (0, u4.C)(i), l?.current?.focus());
              },
              onClick: () => {
                  (0, u4.C)(i),
                      (0, h1.P0)({ message: g.intl.string(g.t.mGZ66D), type: h5.Ck.SUCCESS, id: "backup-code-copied" });
              },
              children: s,
          })
        : (0, S.jsx)("li", { className: S_.aY, children: s });
}
let Sp = (0, o.zZ)(d.X.BACKUP_CODES_CATEGORY, {
        useTitle: () => g.intl.string(g.t.fC9qV0),
        useSubtitle: () =>
            (0, O.bG)([TX.A], () => TX.A.getBackupCodes().length > 0)
                ? g.intl.format(g.t.tp7zEK, {})
                : g.intl.string(g.t.LoOi4S),
        usePredicate: T2,
        buildLayout: () => [ST],
    }),
    ST = (0, o.E2)(d.X.BACKUP_CODES_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t.fC9qV0)],
        Component: function () {
            let e = (0, O.bG)([TX.A], () => TX.A.getBackupCodes()),
                t = x.useMemo(
                    () =>
                        e
                            .map((e) => {
                                let { code: t, consumed: n } = e;
                                return `* ${Sm(t)}` + (n ? ` (${g.intl.string(g.t["ycME+9"])})` : "");
                            })
                            .join("\r\n"),
                    [e],
                );
            return 0 === e.length
                ? (0, S.jsx)(eh.$, { text: g.intl.string(g.t.Jc2myK), size: "sm", variant: "secondary", onClick: Sg })
                : (0, S.jsxs)(S.Fragment, {
                      children: [
                          (0, S.jsx)("ul", {
                              className: S_.E5,
                              children: e.map((e) => (0, S.jsx)(SA, { code: e }, e.code)),
                          }),
                          (0, S.jsxs)(rT.e, {
                              size: "sm",
                              children: [
                                  (0, S.jsx)(TH.A, {
                                      fileContents: t,
                                      contentType: "text/plain",
                                      fileName: "discord_backup_codes.txt",
                                      children: (0, S.jsx)(eh.$, {
                                          text: g.intl.string(g.t["OO+Nib"]),
                                          variant: "secondary",
                                          icon: Su.s,
                                      }),
                                  }),
                                  (0, S.jsx)(eh.$, {
                                      text: g.intl.string(g.t["3x962E"]),
                                      variant: "secondary",
                                      icon: Sc.f,
                                      onClick: Sh,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
    }),
    SE = (0, o.Tf)(d.X.SMS_AUTH_DISABLE_BUTTON, {
        useTitle: () => g.intl.string(g.t.lQsY7B),
        useSubtitle: function () {
            let [e, t] = x.useState(!1),
                n = (0, O.bG)([t5.default], () => t5.default.getCurrentUser()?.phone);
            return null == n
                ? null
                : g.intl.format(e ? g.t["xDBk/I"] : g.t.bnKdnl, {
                      phone: e ? n : n.slice(-4),
                      toggleButton: () =>
                          (0, S.jsx)(B.Q, {
                              text: e ? g.intl.string(g.t.fgq1gs) : g.intl.string(g.t.dcztdU),
                              onClick: () => t(!e),
                          }),
                  });
        },
        useLabel: () => g.intl.string(g.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => (0, O.bG)([t5.default], () => t5.default.getCurrentUser()?.hasFlag(q.nhx.MFA_SMS) ?? !1),
        onClick: () =>
            void (0, b.openModalLazy)(async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
                return (t) =>
                    (0, S.jsx)(e, {
                        ...t,
                        handleSubmit: TF.A.disableSMS,
                        title: g.intl.string(g.t.KLWnit),
                        children: g.intl.string(g.t["W0/Duf"]),
                    });
            }),
    }),
    SS = (0, o.zZ)(d.X.SMS_AUTH_CATEGORY, {
        useTitle: () => g.intl.string(g.t.wuHuI5),
        useSubtitle: () => (0, O.bG)([t5.default], () => Es(t5.default.getCurrentUser(), !0)),
        useHeaderDecoration: () => {
            let e = (0, O.bG)([t5.default], () => t5.default.getCurrentUser()?.hasFlag(q.nhx.MFA_SMS) ?? !1),
                t = (0, O.bG)([t5.default], () => null != Es(t5.default.getCurrentUser()));
            if (!e)
                return {
                    type: ef.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: ef.UV.BUTTON,
                            id: "sms-setup-button",
                            text: g.intl.string(g.t.Age7yU),
                            onClick: Sx,
                            disabled: t,
                        },
                    ],
                };
        },
        collapseOnEmpty: !1,
        usePredicate: () => {
            let e = Er(),
                t = T2(),
                n = (0, O.bG)([u1.default], () => u1.default.hasTOTPEnabled());
            return e === Ea.AVAILABLE && t && n;
        },
        buildLayout: () => [SE],
    });
function Sx() {
    let e = t5.default.getCurrentUser();
    if (null != e)
        if (null == e.phone) {
            var t;
            (t = { reason: Ei.d.USER_SETTINGS_UPDATE, onAddedPhone: TF.A.enableSMS }),
                (0, b.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 615715));
                        return (n) => (0, S.jsx)(e, { ...n, ...t });
                    },
                    { modalKey: Ed.V },
                );
        } else TF.A.enableSMS();
}
var Sf = n(665671),
    Sb = n(442433),
    SN = n(917136),
    SC = n(976910),
    SI = n(551386);
function Sv(e) {
    let { credential: t } = e;
    return (0, S.jsxs)("li", {
        className: SI.e,
        children: [
            (0, S.jsxs)("div", {
                children: [
                    (0, S.jsx)(k.E, { variant: "text-md/normal", children: t.name }),
                    null != t.last_used &&
                        (0, S.jsx)(k.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: g.intl.format(g.t["7JgxF5"], { lastUsed: (0, Eh.Y)(t.last_used) }),
                        }),
                ],
            }),
            (0, S.jsx)(sE.K, {
                icon: gU.j,
                variant: "icon-only",
                size: "sm",
                "aria-label": g.intl.string(g.t["+nrTbK"]),
                onClick: (e) => {
                    (0, Sb.L3)(e, async () => {
                        let { default: e } = await n.e("32529").then(n.bind(n, 41e3));
                        return (n) => (0, S.jsx)(e, { credential: t, ...n });
                    });
                },
            }),
        ],
    });
}
let Sy = (0, o.zZ)(d.X.SECURITY_KEYS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.IBq4Y3),
        useSubtitle: () => g.intl.string(g.t.yK9edS),
        useHeaderDecoration: function () {
            if (Er() === Ea.AVAILABLE)
                return {
                    type: ef.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: ef.UV.BUTTON,
                            id: "add-security-key-button",
                            text: g.intl.string(g.t["Tzs/fw"]),
                            icon: cR.j,
                            onClick: Sf.A,
                        },
                    ],
                };
        },
        useInlineNotice: () =>
            (function () {
                switch (Er()) {
                    case Ea.UNAVAILABLE_NO_CRYPTO:
                        return {
                            type: ef.lT.INLINE_NOTICE,
                            noticeType: "info",
                            useText: () => g.intl.string(g.t.bWCGI9),
                        };
                    case Ea.UNAVAILABLE_UNVERIFIED:
                        return {
                            type: ef.lT.INLINE_NOTICE,
                            noticeType: "warning",
                            useText: () => g.intl.string(g.t.uggF7o),
                        };
                    case Ea.AVAILABLE:
                        return;
                }
            })(),
        buildLayout: () => [Sj],
    }),
    Sj = (0, o.E2)(d.X.SECURITY_KEYS_LIST, {
        useSearchTerms: () => [g.intl.string(g.t.y7SXYX)],
        Component: function () {
            let { credentials: e, hasFetchedCredentials: t } = (0, O.cf)([SC.A], () => ({
                hasFetchedCredentials: SC.A.hasFetchedCredentials(),
                credentials: SC.A.getCredentials(),
            }));
            return (x.useEffect(() => {
                t || SN.JQ();
            }, [t]),
            t)
                ? (0, S.jsx)(R.B, {
                      direction: "vertical",
                      gap: "sm",
                      as: "ul",
                      children: e.map((e) => (0, S.jsx)(Sv, { credential: e }, e.id)),
                  })
                : (0, S.jsx)(dM.y, {});
        },
    }),
    SO = (0, o.t_)(d.X.MULTI_FACTOR_AUTHENTICATION, {
        useTitle: () => g.intl.string(g.t.m0FidJ),
        buildLayout: () => [Sy, Sd, SS, Sp],
    }),
    SR = (0, o.t0)(d.X.ACCOUNT_MFA_NESTED_PANEL, {
        useTrailingDecoration: () => ({
            type: ef.xn.TEXT,
            useText: () => (T2() ? g.intl.string(g.t.lQsY7B) : g.intl.string(g.t.WsUuTt)),
        }),
        buildLayout: () => [SO],
    }),
    SL = (0, o.zZ)(d.X.ACCOUNT_PASSWORD_SECURITY_CATEGORY, {
        useTitle: () => g.intl.string(g.t["0iH2vc"]),
        buildLayout: () => [Et, SR, EX],
    });
function SD(e) {
    let { currentUser: t } = e;
    return t.isClaimed()
        ? null == t.email
            ? null
            : t.verified
              ? void 0
              : (0, S.jsxs)(j.w, {
                    type: "warning",
                    children: [
                        (0, S.jsx)(em.D, { variant: "heading-md/medium", children: g.intl.string(g.t.tuGzBT) }),
                        (0, S.jsx)(k.E, {
                            variant: "text-sm/normal",
                            className: T8.PA,
                            children: g.intl.string(g.t.NAzplE),
                        }),
                        (0, S.jsx)(EW.A, { size: "sm", variant: "secondary" }),
                    ],
                })
        : (0, S.jsxs)(j.w, {
              type: "critical",
              children: [
                  (0, S.jsx)(em.D, { variant: "heading-md/medium", children: g.intl.string(g.t["/3qnL/"]) }),
                  (0, S.jsx)(k.E, { variant: "text-sm/normal", className: T8.PA, children: g.intl.string(g.t.qKs3vg) }),
                  (0, S.jsx)(eh.$, {
                      variant: "secondary",
                      size: "sm",
                      text: g.intl.string(g.t["7psymi"]),
                      onClick: () => EK(),
                  }),
              ],
          });
}
var SG = n(297413),
    SP = n(50268),
    SM = n(922301),
    SU = n(262),
    Sk = n(68085),
    SV = n(915614),
    Sw = n(475543);
let SB = ln.Ay.getEnableHardwareAcceleration() ? nX.Js : nX.eu;
function SF(e) {
    let t = (0, Ah.X)("UserSettingsAccountProfileCard");
    return x.useCallback(() => {
        t ? (0, Ap.openUserProfileModal)({ userId: e }) : (0, ey.openUserSettings)(d.X.PROFILE_PANEL);
    }, [t, e]);
}
function Sz(e) {
    let { className: t, user: i } = e,
        l = x.useRef(null),
        s = (0, AL.EC)(),
        a = s?.nick?.[0] ?? null,
        [r, o] = x.useState(!1);
    x.useEffect(() => {
        o(null != l.current && l.current.scrollWidth > l.current.clientWidth);
    }, [i.username]);
    let d = !i.isClaimed(),
        u = d ? g.intl.string(g.t["7Ngnyr"]) : void 0;
    return (0, S.jsxs)("div", {
        className: ew()(Sw.ZZ, t),
        children: [
            (0, S.jsx)("div", {
                className: Sw.NQ,
                children: (0, S.jsxs)("div", {
                    className: Sw.Fj,
                    children: [
                        (0, S.jsx)(k.E, {
                            variant: "text-md/medium",
                            className: Sw.p9,
                            children: g.intl.string(g.t.qqhR3L),
                        }),
                        (0, S.jsxs)("div", {
                            className: Sw.HR,
                            ref: l,
                            children: [
                                (0, S.jsx)(k.E, {
                                    tag: "span",
                                    color: "text-strong",
                                    variant: "text-md/normal",
                                    children: i.username,
                                }),
                                !i.hasUniqueUsername() &&
                                    (0, S.jsxs)(k.E, {
                                        tag: "span",
                                        color: "text-default",
                                        variant: "text-md/normal",
                                        children: ["#", i.discriminator],
                                    }),
                            ],
                        }),
                    ],
                }),
            }),
            null != a &&
                (0, S.jsx)("div", {
                    className: Sw.a$,
                    children: (0, S.jsx)(e0.m, {
                        __unsupportedReactNodeAsText: a,
                        "aria-label": !1,
                        children: (0, S.jsx)(sy.E, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: w.A.colors.STATUS_WARNING.css,
                        }),
                    }),
                }),
            (0, S.jsx)(e0.m, {
                text: u,
                children: (0, S.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: Sw.pr,
                    children: (0, S.jsx)(eh.$, {
                        variant: "secondary",
                        size: "sm",
                        text: r ? g.intl.string(g.t["16kTw/"]) : g.intl.string(g.t.bt75uw),
                        disabled: d,
                        "aria-label": g.intl.string(g.t.JECa91),
                        onClick: () =>
                            (0, b.openModalLazy)(async () => {
                                let { default: e } = await n.e("13161").then(n.bind(n, 331632));
                                return (t) => (0, S.jsx)(e, { ...t });
                            }),
                    }),
                }),
            }),
        ],
    });
}
function SX(e) {
    let { user: t, className: n } = e,
        i = SF(t.id),
        l = (0, AL.EC)(),
        s = l?.nick?.[0] ?? null,
        a = pT.Ay.getGlobalName(t),
        r = x.useRef(null),
        [o, d] = x.useState(!1);
    return (
        x.useEffect(() => {
            d(null != r.current && r.current.scrollWidth > r.current.clientWidth);
        }, [a]),
        (0, S.jsxs)("div", {
            className: ew()(Sw.ZZ, n),
            children: [
                (0, S.jsx)("div", {
                    className: Sw.NQ,
                    children: (0, S.jsxs)("div", {
                        className: Sw.Fj,
                        children: [
                            (0, S.jsx)(k.E, {
                                variant: "text-md/medium",
                                className: Sw.p9,
                                children: g.intl.string(g.t["9AjdkD"]),
                            }),
                            (0, S.jsx)("div", {
                                className: Sw.HR,
                                ref: r,
                                children: (0, S.jsx)(k.E, {
                                    tag: "span",
                                    color: "text-strong",
                                    variant: "text-md/normal",
                                    children: null == a ? g.intl.string(g.t.ep5kjK) : a,
                                }),
                            }),
                        ],
                    }),
                }),
                null != s &&
                    (0, S.jsx)("div", {
                        className: Sw.a$,
                        children: (0, S.jsx)(e0.m, {
                            __unsupportedReactNodeAsText: s,
                            "aria-label": !1,
                            children: (0, S.jsx)(sy.E, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                color: w.A.colors.STATUS_WARNING.css,
                            }),
                        }),
                    }),
                (0, S.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: Sw.pr,
                    children: (0, S.jsx)(eh.$, {
                        variant: "secondary",
                        size: "sm",
                        text: o ? g.intl.string(g.t["16kTw/"]) : g.intl.string(g.t.bt75uw),
                        "aria-label": g.intl.string(g.t.YXeWYM),
                        onClick: i,
                    }),
                }),
            ],
        })
    );
}
function SY(e) {
    let t,
        { className: i, user: l } = e;
    if (l.isClaimed())
        if (null == l.email)
            t = {
                buttonText: g.intl.string(g.t.OYkgVk),
                buttonAriaLabel: g.intl.string(g.t["pvBD+W"]),
                valueMessage: g.intl.string(g.t["8SfTN/"]),
                handleClick: () =>
                    (0, b.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("76660"), n.e("28450")]).then(n.bind(n, 121343));
                        return (t) => (0, S.jsx)(e, { ...t });
                    }),
            };
        else {
            let { email: e } = l;
            t = {
                buttonText: g.intl.string(g.t.bt75uw),
                buttonAriaLabel: g.intl.string(g.t["8peUT0"]),
                valueMessage: (0, S.jsx)(E6, {
                    text: e,
                    censor: E7,
                    revealLabel: g.intl.string(g.t["Zvx+yV"]),
                    hideLabel: g.intl.string(g.t.nqTD4d),
                }),
                handleClick: () =>
                    (0, b.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("76660"), n.e("28450")]).then(n.bind(n, 121343));
                        return (t) => (0, S.jsx)(e, { ...t });
                    }),
            };
        }
    else
        t = {
            buttonText: g.intl.string(g.t.BleMPB),
            buttonAriaLabel: g.intl.string(g.t.BleMPB),
            valueMessage: g.intl.string(g.t.qxk9zo),
            handleClick: () => EK(),
        };
    return (0, S.jsxs)("div", {
        className: ew()(Sw.ZZ, i),
        children: [
            (0, S.jsx)("div", {
                className: Sw.NQ,
                children: (0, S.jsxs)("div", {
                    children: [
                        (0, S.jsx)(k.E, {
                            variant: "text-md/medium",
                            className: Sw.p9,
                            children: g.intl.string(g.t.tlZllC),
                        }),
                        (0, S.jsx)("div", {
                            children: (0, S.jsx)(k.E, {
                                tag: "span",
                                color: "text-strong",
                                variant: "text-md/normal",
                                children: t.valueMessage,
                            }),
                        }),
                    ],
                }),
            }),
            (0, S.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: Sw.pr,
                children: (0, S.jsx)(eh.$, {
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
function SH(e) {
    let t,
        { className: i, user: l } = e;
    if (!l.isClaimed()) return null;
    let { phone: s, email: a } = l,
        r = null != s;
    return (
        (t = r
            ? (0, S.jsx)(E6, {
                  text: s,
                  censor: E9,
                  revealLabel: g.intl.string(g.t.eY3xlT),
                  hideLabel: g.intl.string(g.t["jllbv+"]),
              })
            : g.intl.string(g.t.I5kDqj)),
        (0, S.jsxs)("div", {
            className: ew()(Sw.ZZ, i),
            children: [
                (0, S.jsx)("div", {
                    className: Sw.NQ,
                    children: (0, S.jsxs)("div", {
                        children: [
                            (0, S.jsx)(k.E, {
                                variant: "text-md/medium",
                                className: Sw.p9,
                                children: g.intl.string(g.t.kerONq),
                            }),
                            (0, S.jsx)("div", {
                                children: (0, S.jsx)(k.E, {
                                    tag: "span",
                                    color: "text-strong",
                                    variant: "text-md/normal",
                                    children: t,
                                }),
                            }),
                        ],
                    }),
                }),
                (0, S.jsxs)("div", {
                    className: Sw.PU,
                    children: [
                        r && null != a
                            ? (0, S.jsx)("div", {
                                  className: ew()(Sw.pr, Sw.DT),
                                  children: (0, S.jsx)(B.Q, {
                                      textVariant: "text-sm/medium",
                                      variant: "secondary",
                                      text: g.intl.string(g.t.N86XcP),
                                      "aria-label": g.intl.string(g.t.Rpn4A3),
                                      onClick: function () {
                                          (0, b.openModal)((e) =>
                                              (0, S.jsx)(TW.default, {
                                                  ...e,
                                                  title: g.intl.string(g.t["3CTiKi"]),
                                                  children: l.hasFlag(q.nhx.MFA_SMS)
                                                      ? g.intl.string(g.t.jrhJyo)
                                                      : void 0,
                                                  actionText: g.intl.string(g.t.N86XcP),
                                                  handleSubmit: (e) => Ei.A.removePhone(e, Ei.d.USER_SETTINGS_UPDATE),
                                              }),
                                          );
                                      },
                                  }),
                              })
                            : null,
                        (0, S.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: Sw.pr,
                            children: (0, S.jsx)(eh.$, {
                                variant: "secondary",
                                size: "sm",
                                text: r ? g.intl.string(g.t.bt75uw) : g.intl.string(g.t.OYkgVk),
                                "aria-label": r ? g.intl.string(g.t.YDabSe) : g.intl.string(g.t["SfUuE+"]),
                                onClick: function () {
                                    (0, b.openModalLazy)(
                                        async () => {
                                            let { default: e } = await Promise.resolve().then(n.bind(n, 615715));
                                            return (t) => (0, S.jsx)(e, { reason: Ei.d.USER_SETTINGS_UPDATE, ...t });
                                        },
                                        { modalKey: Ed.V },
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
function SK(e) {
    let { user: t } = e,
        n = (0, SP.A)({ id: t.id, label: g.intl.string(g.t["/AXYnE"]) }),
        i = c.Q_.useSetting(),
        l = x.useRef(null);
    return i && u4.p5
        ? (0, S.jsx)(G.Y, {
              targetElementRef: l,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, S.jsx)(P.W, {
                      "data-menu-migrated": !0,
                      onClose: t,
                      onSelect: void 0,
                      navId: "copy-id",
                      "aria-label": g.intl.string(g.t.RANhlE),
                      children: n,
                  });
              },
              children: (e) =>
                  (0, S.jsx)(U.D, {
                      ...e,
                      innerRef: l,
                      className: Sw.SI,
                      "aria-label": g.intl.string(g.t.DEoVWZ),
                      children: (0, S.jsx)(gU.j, { size: "md", color: "currentColor", className: Sw.D$ }),
                  }),
          })
        : null;
}
function SW(e) {
    let { className: t } = e,
        i = (0, EZ.b8)(),
        l = (0, EZ.yM)(),
        s = (0, EZ.Y2)(),
        a = !i || l,
        r = g.intl.string(g.t["9KiIz6"]),
        o = g.intl.string(g.t.DVywUB),
        d = g.intl.string(g.t.lKDPGA),
        u = x.useCallback(() => {
            window.open(tr.A.getArticleURL(q.MVz.TIGGER_PAWTECT_LEARN_MORE), "_blank");
        }, []),
        c = x.useCallback(() => {
            (0, b.openModalLazy)(async () => {
                let { default: e } = await n.e("45361").then(n.bind(n, 151080));
                return (t) => (0, S.jsx)(e, { ...t });
            });
        }, []),
        _ = x.useMemo(
            () =>
                i
                    ? l
                        ? g.intl.string(g.t.sK0dmH)
                        : s
                          ? g.intl.format(EJ.default.WM5adV, { handleOnHelpUrlHook: u })
                          : g.intl.string(g.t.XxRj7f)
                    : d,
            [i, l, s, d, u],
        ),
        m = i && !l && s;
    return (0, S.jsxs)("div", {
        className: ew()(Sw.ZZ, t),
        children: [
            (0, S.jsx)("div", {
                className: Sw.NQ,
                children: (0, S.jsxs)("div", {
                    children: [
                        (0, S.jsx)(k.E, {
                            variant: "text-md/medium",
                            className: Sw.p9,
                            children: g.intl.string(g.t["/52UYy"]),
                        }),
                        (0, S.jsx)("div", {
                            children: (0, S.jsxs)(k.E, {
                                tag: "span",
                                color: "text-strong",
                                variant: "text-md/normal",
                                children: [s && i && !l ? `${g.intl.string(g.t.XxRj7f)} • ` : null, _],
                            }),
                        }),
                    ],
                }),
            }),
            m &&
                (0, S.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: Sw.pr,
                    children: (0, S.jsx)(eh.$, {
                        variant: "secondary",
                        size: "sm",
                        text: g.intl.string(g.t.bt75uw),
                        "aria-label": g.intl.string(g.t.bt75uw),
                        onClick: c,
                    }),
                }),
            a &&
                !m &&
                (0, S.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: Sw.pr,
                    children: (0, S.jsx)(eh.$, {
                        variant: "secondary",
                        size: "sm",
                        text: l ? r : o,
                        "aria-label": l ? r : o,
                        onClick: () => E2.A.showAgeVerificationGetStartedModal({ entryPoint: E5.q1.ACCOUNT_AGE_GROUP }),
                    }),
                }),
        ],
    });
}
function SZ(e) {
    let { currentUser: t } = e,
        n = SF(t.id),
        i = (0, pr.Ay)(t.id),
        l = (0, SU.A)(i),
        s = c.jP.useSetting(),
        a = (0, O.bG)([Am.A], () => Am.A.getErrors()),
        r = a?.avatar?.[0],
        { avatarSrc: o, avatarDecorationSrc: d } = (0, AA.A)({ userId: t?.id, size: nY._3.SIZE_80 }),
        u = (0, Eq.fk)();
    return (0, S.jsxs)("div", {
        className: Sw.DM,
        children: [
            (0, S.jsx)(SV.o, {
                user: t,
                displayProfile: i,
                avatarSize: nY._3.SIZE_80,
                avatarOffsetX: 16,
                avatarOffsetY: -22,
                bannerWidth: 696,
                bannerHeight: 100,
                themePadding: 0,
            }),
            (0, S.jsxs)("div", {
                className: Sw.eF,
                children: [
                    (0, S.jsx)(SB, {
                        className: Sw.my,
                        src: o,
                        avatarDecoration: d,
                        status: s,
                        size: nY._3.SIZE_80,
                        "aria-label": t.username,
                    }),
                    (0, S.jsxs)("div", {
                        children: [
                            (0, S.jsxs)("div", {
                                className: Sw.Ib,
                                children: [
                                    (0, S.jsx)(SG.A, {
                                        user: t,
                                        className: Sw.a1,
                                        discriminatorClass: Sw.D2,
                                        displayNameStylesType: SM.G.STATIC,
                                    }),
                                    (0, S.jsx)(SK, { user: t }),
                                ],
                            }),
                            (0, S.jsx)(Sk.A, { badges: l, className: Sw.C_, badgeClassName: Sw.qS }),
                        ],
                    }),
                    (0, S.jsx)(eh.$, {
                        variant: "primary",
                        size: "sm",
                        text: g.intl.string(g.t["2p2aYz"]),
                        onClick: n,
                    }),
                ],
            }),
            (0, S.jsxs)("div", {
                className: Sw.Tp,
                children: [
                    null != r
                        ? (0, S.jsx)(k.E, {
                              className: Sw.mx,
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              children: r,
                          })
                        : null,
                    (0, S.jsxs)("div", {
                        className: Sw.FL,
                        children: [
                            (0, S.jsx)(SX, { className: Sw.mS, user: t }),
                            (0, S.jsx)(Sz, { user: t }),
                            (0, S.jsx)(SY, { className: Sw.Zr, user: t }),
                            (0, S.jsx)(SH, { className: Sw.Zr, user: t }),
                            u && (0, S.jsx)(SW, { className: Sw.Zr }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
let Sq = (0, o.E2)(d.X.ACCOUNT_PROFILE_SETTING, {
        useSearchTerms: function () {
            let e = [
                    g.intl.string(g.t.LYju5J),
                    g.intl.string(g.t["9AjdkD"]),
                    g.intl.string(g.t["+JkHPw"]),
                    g.intl.string(g.t.oP5zGA),
                    g.intl.string(g.t.Ulqq6K),
                ],
                t = (0, Eq.fk)(),
                n = (0, EZ.Y2)();
            return (
                t &&
                    (e.push(g.intl.string(g.t["/52UYy"])),
                    e.push(g.intl.string(g.t.sK0dmH)),
                    e.push(g.intl.string(g.t.XxRj7f)),
                    e.push(g.intl.string(g.t.DVywUB)),
                    e.push(g.intl.string(g.t["9KiIz6"])),
                    n &&
                        (e.push(g.intl.string(EJ.default.FTawSP)),
                        e.push(g.intl.string(EJ.default["bD//cU"])),
                        e.push(g.intl.string(EJ.default.SH6Tcv)))),
                e
            );
        },
        Component: function () {
            let e = (0, O.bG)([t5.default], () => t5.default.getCurrentUser());
            return (0, S.jsxs)(R.B, {
                gap: "md",
                children: [
                    null != e && (0, S.jsx)(SD, { currentUser: e }),
                    null != e && (0, S.jsx)(SZ, { currentUser: e }),
                ],
            });
        },
    }),
    SQ = (0, o.zZ)(d.X.ACCOUNT_PROFILE_CATEGORY, { buildLayout: () => [Sq] });
var SJ = n(656161);
function S$(e) {
    let { currentUser: t, disabled: n, handleDisableAccount: i, handleDeleteAccount: l } = e,
        s = t.isClaimed();
    return (0, S.jsx)(lO.D, {
        label: g.intl.string(g.t.ZKsIks),
        description: s ? g.intl.string(g.t.TIh3Yj) : g.intl.string(g.t.czsGA8),
        children: (0, S.jsxs)(rT.e, {
            size: "sm",
            className: SJ.U,
            children: [
                s
                    ? (0, S.jsx)(eh.$, {
                          variant: "critical-primary",
                          size: "sm",
                          text: g.intl.string(g.t.jf5GGb),
                          disabled: n,
                          onClick: i,
                      })
                    : null,
                (0, S.jsx)(eh.$, {
                    variant: "critical-secondary",
                    size: "sm",
                    text: g.intl.string(g.t["8lQ2rR"]),
                    disabled: n,
                    onClick: l,
                }),
            ],
        }),
    });
}
var S0 = n(425587);
function S1(e) {
    if (e.body.code === q.t02.INVALID_PASSWORD) throw e;
    (0, rh.A)({ title: g.intl.string(g.t.LX0nT8), subtitle: e.body.message });
}
async function S2() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = t5.default.getCurrentUser();
    if (null == t) return;
    let n = [];
    try {
        n = (await S0.A.fetchTeams(!0)).body;
    } catch {}
    n.filter((e) => e.owner_user_id === t.id).length > 0
        ? (0, rh.A)({
              title: g.intl.string(g.t.UNGZDI),
              subtitle: g.intl.format(g.t.alpAUm, { devPortalLink: "https://discord.com/developers/teams" }),
          })
        : H.A.getGuildsArray().filter((e) => e.ownerId === t.id).length > 0
          ? (0, rh.A)({ title: g.intl.string(g.t.I5UrbV), subtitle: g.intl.string(g.t.UyVVan) })
          : t.isClaimed()
            ? (0, b.openModal)((t) =>
                  (0, S.jsx)(TW.default, {
                      ...t,
                      handleSubmit: (t) => (0, Ac.U_)(t, e).then(q.tEg, S1),
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
                  onConfirm: () => (0, Ac.U_)("", !0),
              });
}
let S5 = (0, o.Tf)(d.X.ACCOUNT_DELETE_SETTING, {
        useTitle: () => g.intl.string(g.t["gIpzR+"]),
        useSubtitle: () => g.intl.string(g.t.Bd6dOf),
        useLabel: () => g.intl.string(g.t["8lQ2rR"]),
        useVariant: () => "critical-primary",
        onClick: () => S2(!0),
    }),
    S3 = (0, o.Tf)(d.X.ACCOUNT_DISABLE_SETTING, {
        useTitle: () => g.intl.string(g.t["p/Tjtp"]),
        useSubtitle: () => g.intl.string(g.t.YvDmKb),
        useLabel: () => g.intl.string(g.t.jf5GGb),
        useVariant: () => "critical-secondary",
        onClick: () => S2(!1),
        usePredicate: () => {
            let e = (0, O.bG)([t5.default], () => t5.default.getCurrentUser());
            return e?.isClaimed() ?? !1;
        },
    }),
    S8 = (0, o.zZ)(d.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [S3, S5] }),
    S4 = (0, o.E2)(d.X.ACCOUNT_REMOVAL_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t.ZKsIks), g.intl.string(g.t.jf5GGb), g.intl.string(g.t["8lQ2rR"])],
        Component: function () {
            let e = (0, O.bG)([t5.default], () => t5.default.getCurrentUser());
            return null == e
                ? null
                : (0, S.jsx)(S$, {
                      currentUser: e,
                      handleDisableAccount: () => S2(!1),
                      handleDeleteAccount: () => S2(!0),
                  });
        },
    }),
    S9 = (0, o.zZ)(d.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [S4] });
var S7 = n(308645),
    S6 = n(271995),
    xe = n(855267);
let xt = (0, o.E2)(d.X.ACCOUNT_STANDING_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t["16r9jm"])],
        Component: xe.A,
    }),
    xn = (0, o.zZ)(d.X.ACCOUNT_STANDING_NESTED_CATEGORY, { buildLayout: () => [xt] }),
    xi = (0, o.t_)(d.X.ACCOUNT_STANDING_PANEL, {
        useTitle: () => g.intl.string(g.t["16r9jm"]),
        buildLayout: () => [xn],
    }),
    xl = (0, o.t0)(d.X.ACCOUNT_STANDING_NESTED_PANEL, {
        useTitle: S6.$b,
        useSubtitle: S6.bh,
        useLeadingDecoration: function () {
            let { color: e, backgroundColor: t, Icon: n } = (0, S6._k)();
            return { type: ef.Xy.ICON, icon: n, color: e, backgroundColor: t };
        },
        initialize: () => {
            S7.Yn();
        },
        buildLayout: () => [xi],
    }),
    xs = (0, o.zZ)(d.X.ACCOUNT_STANDING_CATEGORY, {
        useTitle: () => g.intl.string(g.t["16r9jm"]),
        buildLayout: () => [xl],
    }),
    xa = (0, o.zZ)(d.X.ACCOUNT_STANDING_CATEGORY, { buildLayout: () => [xt] });
var xr = n(834981),
    xo = n(840387),
    xd = n(177953),
    xu = n(986922),
    xc = n(602339);
let xg = (0, o.E2)(d.X.FAMILY_CENTER_SETTING, {
        Component: xu.p,
        useSearchTerms: () => [
            g.intl.string(xc.default.RZqaJn),
            g.intl.string(xc.default.bdBmqy),
            g.intl.string(xc.default["gVWG+6"]),
            g.intl.string(xc.default.ahKIJO),
            g.intl.string(xc.default["8SLtqb"]),
        ],
    }),
    x_ = (0, o.zZ)(d.X.FAMILY_CENTER_CATEGORY, { buildLayout: () => [xg] }),
    xm = (0, o.t_)(d.X.FAMILY_CENTER_PANEL, {
        useTitle: () => g.intl.string(xc.default.RZqaJn),
        buildLayout: () => [x_],
    }),
    xh = (0, o.i4)(d.X.FAMILY_CENTER_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(xc.default.RZqaJn),
        icon: xd.n,
        usePersistentBadge: function () {
            return x.useMemo(() => ({ badgeType: ef.Xi.COUNT, useCount: xr.VT }), []);
        },
        getDismissibleBadges: function () {
            return [{ badgeType: ef.Xi.NEW, dismissibleContent: eA.M.FAMILY_CENTER_NEW_BADGE }];
        },
        buildLayout: () => [xm],
    }),
    xA = (0, o.zZ)(d.X.ACCOUNT_FAMILY_CENTER_CATEGORY, {
        useTitle: () => g.intl.string(xc.default.RZqaJn),
        buildLayout: () => [xp],
    }),
    xp = (0, o.t0)(d.X.ACCOUNT_FAMILY_CENTER_NESTED_PANEL, {
        useTitle: () => ((0, xr.Li)() ? g.intl.string(xc.default.IcMQUP) : g.intl.string(xc.default["n8wrn/"])),
        useSubtitle: () => {
            let e = (0, xo.Z)(),
                t = (0, xr.Li)();
            return e
                ? t
                    ? g.intl.string(xc.default.G8lHFU)
                    : g.intl.string(xc.default.uOLNEZ)
                : g.intl.string(xc.default.Z53oSM);
        },
        buildLayout: () => [xm],
    });
var xT = (((r = {}).SECURITY = "SECURITY"), (r.STANDING = "STANDING"), r);
let xE = (0, o.dT)(d.X.ACCOUNT_STANDING_TAB, {
        getTitle: () => g.intl.string(g.t["Vov/9o"]),
        onItemSelect: () => {
            X.default.track(q.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, { target_tab_name: xT.STANDING });
        },
        buildLayout: () => [xa],
    }),
    xS = (0, o.dT)(d.X.ACCOUNT_SECURITY_TAB, {
        getTitle: () => g.intl.string(g.t.Am9YHi),
        onItemSelect: () => {
            X.default.track(q.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, { target_tab_name: xT.SECURITY });
        },
        buildLayout: () => [SQ, EY, S9],
    });
function xx() {
    let e = t5.default.getCurrentUser();
    return (
        null == e || (0, TB.pC)("Account") || (0, pO.A)(e.id, e.getAvatarURL(void 0, 80)),
        () => {
            TF.A.clearBackupCodes(), (0, Ac.Uo)();
        }
    );
}
let xf = (0, o.t_)(d.X.ACCOUNT_PANEL, {
        useTitle: () => g.intl.string(g.t["JAIM/m"]),
        initialize: xx,
        useObscuredNotice: dG.L,
        buildLayout: () => [xS, xE],
    }),
    xb = (0, o.t_)(d.X.ACCOUNT_PANEL, {
        useTitle: () => g.intl.string(g.t["ldCE/p"]),
        initialize: xx,
        useObscuredNotice: dG.L,
        buildLayout: () => [Sr, SL, xs, xA, S8],
    }),
    xN = (0, o.i4)(d.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => ((0, TB.pC)("Account") ? g.intl.string(g.t["ldCE/p"]) : g.intl.string(g.t["JAIM/m"])),
        icon: _5.n,
        buildLayout: () => ((0, TB.pC)("Account") ? [xb] : [xf]),
    });
var xC = n(323384),
    xI = n(824552),
    xv = n(161236);
let xy = (0, o.E2)(d.X.AUTHORIZED_APPS_LIST_SETTING, {
        Component: xv.Ay,
        useSearchTerms: () => [g.intl.string(g.t["f6kk+r"])],
    }),
    xj = (0, o.zZ)(d.X.AUTHORIZED_APPS_CATEGORY, {
        buildLayout: () => [xy],
        initialize: () => (
            xI.A.fetch(),
            () => {
                xv.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    xO = (0, o.t_)(d.X.AUTHORIZED_APPS_PANEL, {
        useTitle: () => g.intl.string(g.t["f6kk+r"]),
        useObscuredNotice: dG.L,
        buildLayout: () => [xj],
    }),
    xR = (0, o.i4)(d.X.AUTHORIZED_APPS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["f6kk+r"]),
        icon: xC.k,
        buildLayout: () => [xO],
    });
var xL = n(176781),
    xD = n(611371);
let xG = () =>
    (0, S.jsx)(e0.m, { asContainer: !0, text: g.intl.string(g.t["/fgfWh"]), children: (0, S.jsx)(xD.A, {}) });
var xP = n(274372),
    xM = n(399925),
    xU = n(696016);
let xk = (() => {
        let e = [xU.wN];
        for (let t = 10; t <= xU.qh; t += 10) e.push(t);
        return e[e.length - 1] !== xU.qh && e.push(xU.qh), e;
    })(),
    xV = (0, o.sN)(d.X.CLIPS_AUTO_CLIP_STORAGE_LIMIT, {
        useTitle: () => g.intl.string(g.t.yfsrDI),
        useSubtitle: () => g.intl.string(g.t.vlDHdC),
        minValue: xU.wN,
        maxValue: xU.qh,
        getInitialValue: () => xP.A.getSettings().maxAutoClips,
        onValueRender: (e) => `${Math.floor(e)}`,
        asValueChanges: (e) => xM.e6(Math.floor(e)),
        markers: xk,
        onMarkerRender: (e) => `${Math.floor(e)}`,
    }),
    xw = (0, o.zD)(d.X.CLIPS_ENABLE_GAME_SIGNALS, {
        useTitle: () => g.intl.string(g.t.iV6KcI),
        useSubtitle: () => g.intl.string(g.t["dJ2tX+"]),
        useValue: () => (0, O.bG)([xP.A], () => xP.A.getSettings().clipSignals.enableGameSignals),
        setValue: (e) => {
            let t = xP.A.getSettings().clipSignals;
            xM.PW({ ...t, enableGameSignals: e });
        },
    }),
    xB = (0, o.zD)(d.X.CLIPS_ENABLE_PHRASE_SIGNALS, {
        useTitle: () => g.intl.string(g.t.nHsilt),
        useSubtitle: () => g.intl.string(g.t["s6wq+m"]),
        useValue: () => (0, O.bG)([xP.A], () => xP.A.getSettings().clipSignals.enablePhraseSignals),
        setValue: (e) => {
            let t = xP.A.getSettings().clipSignals;
            xM.PW({ ...t, enablePhraseSignals: e });
        },
    }),
    xF = (0, o.E2)(d.X.CLIPS_PHRASES, {
        useSearchTerms: () => [g.intl.string(g.t.JIze0o)],
        usePredicate: () => (0, O.bG)([xP.A], () => xP.A.getSettings().clipSignals).enablePhraseSignals,
        Component: function () {
            let e = (0, O.bG)([xP.A], () => xP.A.getSettings().autoClipPhrases),
                [t, n] = x.useState(""),
                i = x.useMemo(() => e.map((e) => ({ id: e, label: e })), [e]),
                l = x.useCallback((e) => {
                    n(e);
                }, []),
                s = x.useCallback(
                    (i) => {
                        if ("Enter" === i.key || "," === i.key) {
                            i.preventDefault();
                            let l = t.trim().toLowerCase();
                            l.length > 0 && !e.includes(l) && (xM.pM([...e, l]), n(""));
                        } else if ("Backspace" === i.key && "" === t && e.length > 0) {
                            let t = e.slice(0, -1);
                            xM.pM(t);
                        }
                    },
                    [t, e],
                ),
                a = x.useCallback(
                    (t) => {
                        let n = Array.from(t)[0],
                            i = e.filter((e) => e !== n);
                        xM.pM(i);
                    },
                    [e],
                );
            return (0, S.jsx)(sP.k, {
                value: t,
                onChange: l,
                onKeyDown: s,
                placeholder: g.intl.string(g.t.zYUZpt),
                leading: i.length > 0 ? { type: "tags", items: i, onRemove: a } : void 0,
            });
        },
    }),
    xz = (0, o.zZ)(d.X.CLIPS_AUTOMATIC_CLIPPING_CATEGORY, {
        useTitle: () => g.intl.string(g.t.sA0WKL),
        usePredicate: () => {
            let { enableAdvancedSignals: e } = sC.L_.useConfig({ location: "ClipsAutomaticClippingCategory" });
            return e;
        },
        buildLayout: () => [xV, xw, xB, xF],
    });
var xX = n(753070);
let xY = (0, o.Hn)(d.X.CLIPS_FRAME_RATE, {
    useTitle: () => g.intl.string(g.t["2wScL1"]),
    useSubtitle: () => g.intl.string(g.t["Rf9+fy"]),
    useValue: () => (0, O.bG)([xP.A], () => xP.A.getSettings().clipsQuality.frameRate),
    setValue: (e) => {
        let { clipsQuality: t } = xP.A.getSettings();
        xM.GS({ resolution: t.resolution, frameRate: e });
    },
    useOptions: () => [
        { id: "15", value: xX.kn.FPS_15, label: g.intl.formatToPlainString(g.t.Qb44XH, { fps: xX.kn.FPS_15 }) },
        { id: "30", value: xX.kn.FPS_30, label: g.intl.formatToPlainString(g.t.Qb44XH, { fps: xX.kn.FPS_30 }) },
        { id: "60", value: xX.kn.FPS_60, label: g.intl.formatToPlainString(g.t.Qb44XH, { fps: xX.kn.FPS_60 }) },
    ],
});
var xH = n(372684);
let xK = (0, o.E2)(d.X.CLIPS_HARDWARE_CLASSIFICATION_WARNING, {
    useSearchTerms: () => [g.intl.string(g.t.SIxrIF)],
    usePredicate: () => (0, O.bG)([xP.A], () => xP.A.getHardwareClassification()) === xH.k9.BELOW_MINIMUM,
    Component: () => (0, S.jsx)(li.A, { look: li.k.WARNING, children: g.intl.string(g.t.SIxrIF) }),
});
var xW = n(239892);
let xZ = (0, o.E2)(d.X.CLIPS_KEYBIND, {
        useSearchTerms: () => [g.intl.string(g.t.pf54EU), g.intl.string(g.t["QyB/jK"])],
        Component: () => {
            let e = (0, O.bG)([eN.Ay], () => eN.Ay.getKeybindForAction(q.hCu.SAVE_CLIP, !0));
            tj()(null != e, "Save clip keybind unset");
            let t = x.useCallback(
                (t) => {
                    tO.A.setKeybind({ ...e, shortcut: t });
                },
                [e],
            );
            return (0, S.jsx)(lO.D, {
                label: g.intl.string(g.t.pf54EU),
                description: g.intl.string(g.t["QyB/jK"]),
                layout: "horizontal",
                children: (0, S.jsx)("div", {
                    className: xW.g,
                    children: (0, S.jsx)(tR.A, { defaultValue: e.shortcut, onChange: t }),
                }),
            });
        },
    }),
    xq = (0, o.Hn)(d.X.CLIPS_LENGTH, {
        useTitle: () => g.intl.string(g.t.OgfUio),
        useSubtitle: () => g.intl.string(g.t.H7j4tY),
        useValue: () => (0, O.bG)([xP.A], () => xP.A.getSettings().clipsLength),
        setValue: (e) => xM.h$(e),
        useOptions: () => [
            { id: "30s", value: xU.LX.SECONDS_30, label: g.intl.formatToPlainString(g.t["bTFv/3"], { count: 30 }) },
            { id: "1m", value: xU.LX.MINUTES_1, label: g.intl.formatToPlainString(g.t.ICo9Nk, { count: 1 }) },
            { id: "2m", value: xU.LX.MINUTES_2, label: g.intl.formatToPlainString(g.t.ICo9Nk, { count: 2 }) },
        ],
    }),
    xQ = (0, o.E2)(d.X.CLIPS_QUALITY_INFOBOX, {
        useSearchTerms: () => [g.intl.string(g.t["Z+MfqT"])],
        Component: () => (0, S.jsx)(li.A, { look: li.k.INFO, children: g.intl.string(g.t["Z+MfqT"]) }),
    }),
    xJ = (0, o.Hn)(d.X.CLIPS_RESOLUTION, {
        useTitle: () => g.intl.string(g.t.aFudZJ),
        useSubtitle: () => g.intl.string(g.t.nIrkW5),
        useValue: () => (0, O.bG)([xP.A], () => xP.A.getSettings().clipsQuality.resolution),
        setValue: (e) => {
            let { clipsQuality: t } = xP.A.getSettings();
            xM.GS({ resolution: e, frameRate: t.frameRate });
        },
        useOptions: () => [
            {
                id: "480p",
                value: xX.on.RESOLUTION_480,
                label: g.intl.formatToPlainString(g.t.TEOC0I, { resolution: xX.on.RESOLUTION_480 }),
            },
            {
                id: "720p",
                value: xX.on.RESOLUTION_720,
                label: g.intl.formatToPlainString(g.t.TEOC0I, { resolution: xX.on.RESOLUTION_720 }),
            },
            {
                id: "1080p",
                value: xX.on.RESOLUTION_1080,
                label: g.intl.formatToPlainString(g.t.TEOC0I, { resolution: xX.on.RESOLUTION_1080 }),
            },
            {
                id: "1440p",
                value: xX.on.RESOLUTION_1440,
                label: g.intl.formatToPlainString(g.t.TEOC0I, { resolution: xX.on.RESOLUTION_1440 }),
            },
            { id: "source", value: xX.on.RESOLUTION_SOURCE, label: g.intl.string(g.t.XjXqzh) },
        ],
    }),
    x$ = (0, o.E2)(d.X.CLIPS_SCREENSHOT_KEYBIND, {
        useSearchTerms: () => [g.intl.string(g.t["0U/hj7"]), g.intl.string(g.t["5zxkdo"])],
        usePredicate: sC.BW,
        Component: () => {
            let e = (0, O.bG)([eN.Ay], () => eN.Ay.getKeybindForAction(q.hCu.SAVE_CLIP, !0)),
                t = (0, O.bG)([eN.Ay], () => eN.Ay.getKeybindForAction(q.hCu.SAVE_SCREENSHOT, !0));
            tj()(null != e, "Save clip keybind unset"), tj()(null != t, "Save screenshot keybind unset");
            let n = x.useCallback(
                (e) => {
                    tO.A.setKeybind({ ...t, shortcut: e });
                },
                [t],
            );
            return (0, S.jsx)(lO.D, {
                label: g.intl.string(g.t["0U/hj7"]),
                description: g.intl.string(g.t["5zxkdo"]),
                layout: "horizontal",
                children: (0, S.jsx)("div", {
                    className: xW.g,
                    children: (0, S.jsx)(tR.A, { defaultValue: t.shortcut, onChange: n }),
                }),
            });
        },
    }),
    x0 = (0, o.E2)(d.X.CLIPS_STORAGE_LOCATION, {
        useSearchTerms: () => [g.intl.string(g.t.s4773E), g.intl.string(g.t.svjwGh)],
        Component: () => {
            let e = (0, O.bG)([xP.A], () => xP.A.getSettings().storageLocation),
                t = x.useRef(!1),
                n = async () => {
                    if (!t.current) {
                        t.current = !0;
                        try {
                            let e = await l5.A.fileManager.showOpenDialog({
                                properties: ["openDirectory", "createDirectory"],
                            });
                            e.length > 0 && xM.HU(e[0]);
                        } finally {
                            t.current = !1;
                        }
                    }
                };
            return (0, S.jsx)(lO.D, {
                label: g.intl.string(g.t.s4773E),
                description: g.intl.string(g.t.svjwGh),
                layout: "horizontal",
                children: (0, S.jsx)(U.D, {
                    "aria-label": g.intl.formatToPlainString(g.t.iMONTj, { storageLocation: e }),
                    onClick: n,
                    children: (0, S.jsx)(sP.k, { tabIndex: -1, value: e, editable: !1, "aria-hidden": !0 }),
                }),
            });
        },
    });
var x1 = n(572164);
let x2 = (0, o.zD)(d.X.CLIPS_ENABLE, {
    useTitle: () => g.intl.string(g.t.h8rgrK),
    useSubtitle: () => g.intl.string(g.t["4Qw3NO"]),
    useValue: () => (0, x1.Et)(),
    setValue: (e) => xM.yO({ clipsEnabled: e, trackAnalytics: !0 }),
});
var x5 = n(915618);
let x3 = (0, o.zD)(d.X.CLIPS_ENABLE_DECOUPLED_CLIPPING, {
        useTitle: () => g.intl.string(g.t.yXvykv),
        useSubtitle: () => g.intl.string(g.t.YP3ujk),
        useValue: x1.XT,
        setValue: (e) => xM.fd({ enabled: e, trackAnalytics: !0 }),
        usePredicate: () => {
            let e = (0, ev.isWindows)(),
                t = (0, x5.A)(sj.Ay);
            return e && t;
        },
    }),
    x8 = (0, o.zD)(d.X.CLIPS_ENABLE_REMINDERS, {
        useTitle: () => g.intl.string(g.t["3zwNf6"]),
        useSubtitle: () => g.intl.string(g.t.m4Cjj9),
        useValue: () => (0, O.bG)([xP.A], () => xP.A.getSettings().remindersEnabled),
        setValue: (e) => xM.Mt(e),
    }),
    x4 = (0, o.zZ)(d.X.CLIPS_RECORDING_CATEGORY, {
        useTitle: () => g.intl.string(g.t.iIwmV5),
        buildLayout: () => [xQ, xK, x2, x3, x8, xq, xJ, xY, xZ, x$, x0],
    }),
    x9 = (0, o.t_)(d.X.CLIPS_PANEL, {
        useTitle: () => g.intl.string(g.t.z2jK6X),
        usePersistentBadge: () => ({
            badgeType: ef.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            useCustomBadge: () => (0, S.jsx)(xG, {}),
        }),
        usePredicate: sC.sw,
        buildLayout: () => [x4, xz],
    }),
    x7 = (0, o.i4)(d.X.CLIPS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.z2jK6X),
        icon: xL.x,
        buildLayout: () => [x9],
    });
var x6 = n(187322),
    fe = n(77468),
    ft = n(289498),
    fn = n(573648),
    fi = n(941314),
    fl = n(681819),
    fs = n(370480),
    fa = n(773952);
let fr = new Set([q.fg2.XBOX, q.fg2.PLAYSTATION, q.fg2.PLAYSTATION_STAGING, q.fg2.CRUNCHYROLL]);
var fo = n(169869),
    fd = n(30370);
let fu = (0, A.mj)({
    name: "2026-03-crepe",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var fc = n(674567),
    fg = n(237146),
    f_ = n(594387),
    fm = n(34934);
function fh() {
    let e,
        t,
        i,
        l,
        { variant: s, showFooter: a } =
            ((e = (0, fc.V)()),
            (t = (function (e) {
                let { enabled: t } = fu.useConfig({ location: e });
                return t;
            })("connectedAccountsBannerFooter")),
            (l = null != (i = (0, O.bG)([fd.A], () => fd.A.getAccount(null, q.fg2.XBOX))) && !i.revoked),
            e === fc.s.NONE || (e === fc.s.NON_NITRO && 0)
                ? { variant: fc.s.NONE, showFooter: !1 }
                : { variant: e, showFooter: t && e === fc.s.NON_NITRO && !l }),
        { analyticsLocations: r } = (0, iM.Ay)(eU.A.XBOX_CONNECTED_ACCOUNTS_BANNER);
    if (s === fc.s.NONE) return null;
    let o = "",
        d = null;
    return (
        s === fc.s.NITRO
            ? ((o = g.intl.string(fg.default["+QAvQz"])),
              (d = (0, S.jsx)(eh.$, {
                  variant: "secondary",
                  size: "sm",
                  text: g.intl.string(fg.default.CubeLC),
                  onClick: () => {
                      (0, b.openModalLazy)(async () => {
                          let { default: e } = await n.e("55251").then(n.bind(n, 836291));
                          return (t) => (0, S.jsx)(e, { ...t });
                      });
                  },
              })))
            : s === fc.s.NON_NITRO &&
              ((o = g.intl.string(fg.default.NwkRTZ)),
              (d = (0, S.jsx)(lA.A, {
                  fullWidth: !0,
                  defaultTextOverride: g.intl.string(fg.default["0vY+ie"]),
                  variantOverride: "overlay-primary",
                  size: "sm",
                  subscriptionTier: lf.pe.TIER_2,
              }))),
        (0, S.jsxs)(iM.f5, {
            value: r,
            children: [
                (0, S.jsxs)("div", {
                    className: fm.bV,
                    children: [
                        (0, S.jsx)(em.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: g.intl.string(g.t.NG1e6l),
                        }),
                        (0, S.jsx)(oC.t, { size: "xs", color: "var(--icon-default)" }),
                    ],
                }),
                (0, S.jsx)(tQ.N, {
                    theme: "dark",
                    children: (e) =>
                        (0, S.jsx)("div", {
                            className: e,
                            children: (0, S.jsxs)("div", {
                                className: fm.Nr,
                                style: {
                                    backgroundImage:
                                        "url(https://cdn.discordapp.com/assets/content/6f39ba0aa00a9877bcb4bc67862335d29c21749762ec29fd0248ba734bc2c4b8.png)",
                                },
                                children: [
                                    (0, S.jsx)("div", { className: fm.$h }),
                                    (0, S.jsx)("div", { className: fm.Lw }),
                                    (0, S.jsxs)("div", {
                                        className: fm.Qs,
                                        children: [
                                            (0, S.jsx)("img", {
                                                className: fm.wm,
                                                src: "https://cdn.discordapp.com/assets/content/f3a967ffa662e944346571ea7f2b30b2e40745e2edca294519fbddf971e81fb1.png",
                                                alt: "Xbox Game Pass",
                                            }),
                                            (0, S.jsx)(k.E, {
                                                variant: "text-sm/semibold",
                                                color: "text-strong",
                                                className: fm.DD,
                                                children: o,
                                            }),
                                            (0, S.jsx)("div", { className: fm.lO, children: d }),
                                        ],
                                    }),
                                    a &&
                                        (0, S.jsxs)("div", {
                                            className: fm.qr,
                                            children: [
                                                (0, S.jsx)("div", { className: fm.yF }),
                                                (0, S.jsxs)("div", {
                                                    className: fm.F4,
                                                    children: [
                                                        (0, S.jsx)(uN.o, { size: "lg", color: w.A.colors.ICON_STRONG }),
                                                        (0, S.jsx)(k.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-default",
                                                            children: g.intl.format(f_.default.mXY4Rb, {
                                                                onConnect: () => {
                                                                    (0, fa.A)({
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
        })
    );
}
var fA = n(201718),
    fp = n(321078),
    fT = n(672130),
    fE = n(546183),
    fS = n(379848),
    fx = n(950018);
let ff = (e) => {
        let { markAsDismissed: t } = e;
        return (
            x.useEffect(() => t(t7.i.UNKNOWN), [t]),
            (0, S.jsx)(i7.Lp, { className: fx.Ad, text: g.intl.string(g.t.y2b7CA) })
        );
    },
    fb = (e) => {
        let { title: t, body: n, img: i, newIndicatorDismissibleContent: l, onClick: s } = e;
        return (0, S.jsxs)("div", {
            className: fx.kL,
            children: [
                i,
                (0, S.jsxs)("div", {
                    className: fx.FS,
                    children: [
                        (0, S.jsxs)("div", {
                            className: fx.TK,
                            children: [
                                (0, S.jsx)(fS.Ay, {
                                    contentTypes: [l],
                                    children: (e) => {
                                        let { visibleContent: t, markAsDismissed: n } = e;
                                        return t === l ? (0, S.jsx)(ff, { markAsDismissed: n }) : null;
                                    },
                                }),
                                (0, S.jsx)(k.E, { variant: "text-md/semibold", children: t }),
                            ],
                        }),
                        (0, S.jsx)(k.E, { variant: "text-xs/normal", children: n }),
                    ],
                }),
                (0, S.jsx)(eh.$, { text: g.intl.string(g.t.vD60Pv), onClick: s }),
            ],
        });
    },
    fN = () => {
        let e = tr.A.getArticleURL(q.MVz.PS_CONNECTION);
        return (0, S.jsx)(fb, {
            title: g.intl.string(g.t.v20wwm),
            body: g.intl.format(g.t.lTZBit, { help_article: e }),
            img: (0, S.jsx)("img", { src: "/assets/88954903b6a5b9cc.svg", width: "82", height: "auto", alt: "" }),
            newIndicatorDismissibleContent: eA.M.PS_ONE_WAY_RECONNECT,
            onClick: () => (0, fa.A)({ platformType: q.fg2.PLAYSTATION, location: "PS two way upsell" }),
        });
    },
    fC = () => {
        let e = tr.A.getArticleURL(q.MVz.XBOX_CONNECTION);
        return (0, S.jsx)(fb, {
            title: g.intl.string(g.t["2okkZV"]),
            body: g.intl.format(g.t.OnERSS, { help_article: e }),
            img: (0, S.jsx)("img", { src: "/assets/9df988a227916145.png", width: "auto", height: "45", alt: "" }),
            newIndicatorDismissibleContent: eA.M.XBOX_ONE_WAY_RECONNECT,
            onClick: () => (0, fa.A)({ platformType: q.fg2.XBOX, location: "Xbox two way upsell" }),
        });
    };
var fI = n(783419),
    fv = n(534952),
    fy = n(838251);
let fj = (e) => {
    let t,
        { integration: n } = e,
        {
            isJoining: i,
            joinErrorMessage: l,
            showJoinErrorMessage: s,
        } = (0, O.cf)(
            [fd.A],
            () => ({
                isJoining: fd.A.isJoining(n.id),
                joinErrorMessage:
                    "" === fd.A.joinErrorMessage(n.id) ? g.intl.string(g.t.j2d6Km) : fd.A.joinErrorMessage(n.id),
                showJoinErrorMessage: void 0 !== fd.A.joinErrorMessage(n.id),
            }),
            [n.id],
        );
    return (
        null != (0, O.bG)([H.A], () => H.A.getGuild(n.guild.id), [n.guild.id]) ||
            (t = (0, S.jsx)(eh.$, {
                size: "sm",
                onClick: function () {
                    fe.A.joinServer(n.id, () => {});
                },
                disabled: i,
                variant: "primary",
                text: i ? g.intl.string(g.t.RXvQQu) : g.intl.string(g.t.XpeFYr),
            })),
        (0, S.jsxs)("div", {
            className: fy.iA,
            children: [
                (0, S.jsxs)("div", {
                    className: fy.XX,
                    children: [
                        (0, S.jsx)(c7.Ay, { size: c7.Ay.Sizes.SMALL, guild: n.guild, className: fy.$f }),
                        (0, S.jsxs)("div", {
                            className: fy.Vn,
                            children: [
                                (0, S.jsx)(k.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: n.guild.name,
                                }),
                                (0, S.jsx)(dT.Anchor, {
                                    href: fn.A.get(n.type)?.getPlatformUserUrl?.(n.account),
                                    children: (0, S.jsx)(k.E, {
                                        variant: "text-xs/normal",
                                        color: "text-default",
                                        children: n.account.name,
                                    }),
                                }),
                            ],
                        }),
                        t,
                    ],
                }),
                s &&
                    (0, S.jsx)(k.E, {
                        variant: "text-xs/normal",
                        color: "text-feedback-critical",
                        className: fy.R,
                        children: l,
                    }),
            ],
        })
    );
};
function fO(e) {
    let t,
        n,
        i,
        l,
        s,
        a,
        r,
        { onDisconnect: o, account: d, theme: u, locale: c } = e,
        [_, m] = x.useState(d.friendSync),
        [h, A] = x.useState(d.visibility),
        [p, T] = x.useState(d.metadataVisibility),
        [E, f] = x.useState(d.showActivity),
        [N, C] = x.useState(null),
        [I, v] = x.useState(null),
        [y, j] = x.useState(!1),
        [O, R] = x.useState([]),
        D = (0, fl.ML)(d.type),
        G = fn.A.get(D);
    x.useEffect(() => {
        m(d.friendSync), A(d.visibility), T(d.metadataVisibility), f(d.showActivity);
    }, [d]);
    let P = { inProgressVisibility: N, inProgressMetadataVisibility: I },
        M = x.useRef(P);
    return (
        x.useEffect(() => {
            M.current = P;
        }),
        x.useEffect(() => {
            if (!1 === d.verified) return;
            let { inProgressVisibility: e, inProgressMetadataVisibility: t } = M.current;
            null != e && (A(e), fe.A.setVisibility(d.type, d.id, e), C(null)),
                null != t && (T(t), fe.A.setMetadataVisibility(d.type, d.id, t), v(null));
        }, [d]),
        (0, S.jsxs)("div", {
            className: fy.FI,
            children: [
                ((t = fn.A.get(d.type)),
                (n = fn.A.get(D)),
                (i = "1" === (d.metadata ?? {})[fI.pK.TWITTER_VERIFIED]),
                (l = null),
                t.type === q.fg2.TWITTER &&
                    i &&
                    (l = (0, S.jsx)(e0.m, {
                        text: g.intl.string(g.t.Jebrww),
                        children: (0, S.jsx)(e7.A, {
                            color: w.A.unsafe_rawColors.PLATFORM_TWITTER.css,
                            children: (0, S.jsx)(e1.U, { size: "xs", color: w.A.unsafe_rawColors.WHITE.css }),
                        }),
                    })),
                (0, S.jsxs)("div", {
                    className: fy.Il,
                    children: [
                        (0, S.jsx)("img", {
                            alt: n.name,
                            className: fy.gj,
                            src: (0, cP.M)(u) ? n.icon.darkSVG : n.icon.lightSVG,
                        }),
                        (0, S.jsxs)("div", {
                            children: [
                                (0, S.jsxs)("div", {
                                    className: fy.$p,
                                    children: [
                                        (0, S.jsx)(k.E, {
                                            color: "text-strong",
                                            variant: "text-md/semibold",
                                            className: fy.RW,
                                            children: d.name,
                                        }),
                                        null != l && (0, S.jsx)("div", { className: fy.cG, children: l }),
                                    ],
                                }),
                                (0, S.jsx)(k.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: fy.Au,
                                    children: n.name,
                                }),
                            ],
                        }),
                        (0, S.jsx)(U.D, {
                            className: fy.uH,
                            onClick: function () {
                                let e = fn.A.get(d.type);
                                (0, b.openModal)((t) =>
                                    (0, S.jsx)(sG.Modal, {
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
                                            fr.has(d.type) &&
                                            d.twoWayLink &&
                                            (0, S.jsx)(li.A, {
                                                children: g.intl.format(g.t.COW3Xn, { platformName: e.name }),
                                            }),
                                    }),
                                );
                            },
                            "aria-label": g.intl.string(g.t.ppppRJ),
                            focusProps: { offset: { top: -4, left: -4, right: -4 } },
                            children: (0, S.jsx)(cU.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                })),
                d.twoWayLink
                    ? null
                    : d.type === q.fg2.XBOX
                      ? (0, S.jsx)(fC, {})
                      : d.type === q.fg2.PLAYSTATION
                        ? (0, S.jsx)(fN, {})
                        : null,
                (function (e) {
                    let t = e.metadata ?? {},
                        n = null,
                        i = (0, fs.An)(t[fI.pK.CREATED_AT], c);
                    switch (e.type) {
                        case q.fg2.REDDIT:
                            n = (0, fo.xE)(t, fy.Nz);
                            break;
                        case q.fg2.STEAM:
                            n = (0, fo.dy)(t, fy.Nz);
                            break;
                        case q.fg2.BLUESKY:
                        case q.fg2.TWITTER:
                        case q.fg2.MASTODON:
                            n = (0, fo.ED)(t, fy.Nz);
                            break;
                        case q.fg2.EBAY:
                            n = (0, fo.ub)(t, fy.Nz);
                            break;
                        case q.fg2.PAYPAL:
                            n = (0, fo.gZ)(t, fy.Nz);
                            break;
                        case q.fg2.TIKTOK:
                            n = (0, fo.HU)(t, fy.Nz);
                    }
                    null !== i &&
                        (null == n && (n = []),
                        n?.push(
                            (0, S.jsx)(
                                k.E,
                                {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    className: fy.M4,
                                    children: g.intl.format(g.t["9rfonh"], { date: i }),
                                },
                                "member-since",
                            ),
                        ));
                    let l = O.includes(e.id),
                        s = g.intl.string(g.t.wzzjk9);
                    if (null == n || 0 === n.length)
                        if (!0 !== fn.A.get(e.type).hasMetadata) return null;
                        else
                            (n = [
                                (0, S.jsx)(i7.Lp, { className: fy.Z3, text: g.intl.string(g.t.y2b7CA) }, "badge"),
                                (0, S.jsx)(
                                    k.E,
                                    {
                                        variant: "text-xs/normal",
                                        className: fy.vt,
                                        children: g.intl.format(g.t.Up2ni7, {
                                            helpdeskUrl: tr.A.getArticleURL(q.MVz.CONNECTION_DETAILS),
                                        }),
                                    },
                                    "label",
                                ),
                            ]),
                                (s = g.intl.string(g.t["LVh3/5"]));
                    return (
                        l && (s = g.intl.string(g.t.i4jeWR)),
                        n.push(
                            (0, S.jsx)(
                                "div",
                                {
                                    className: fy.jy,
                                    children: (0, S.jsx)(eh.$, {
                                        text: s,
                                        variant: "secondary",
                                        size: "sm",
                                        loading: y,
                                        disabled: l,
                                        "aria-label": g.intl.string(g.t.sCkLYH),
                                        onClick: l
                                            ? void 0
                                            : () => {
                                                  j(!0),
                                                      fe.A.refresh(e.type, e.id).finally(() => {
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
                        (0, S.jsx)("div", { className: fy.tJ, children: n })
                    );
                })(d),
                (q.txh.has(d.type) &&
                    (s = (0, S.jsx)(L.d, {
                        label: g.intl.string(g.t["+KCMSi"]),
                        checked: _,
                        onChange: function (e) {
                            m(e), fe.A.setFriendSync(d.type, d.id, e);
                        },
                    })),
                q.ewM.has(d.type) &&
                    (a = (0, S.jsx)(L.d, {
                        label: g.intl.format(g.t["6u6J0q"], { platform: G.name }),
                        checked: E,
                        onChange: function (e) {
                            f(e), fe.A.setShowActivity(d.type, d.id, e);
                        },
                    })),
                fn.A.get(d.type)?.hasMetadata === !0 &&
                    (r = (0, S.jsx)(L.d, {
                        label: g.intl.string(g.t.FYKGsL),
                        checked: 1 === p,
                        onChange: function (e) {
                            let { verified: t } = d,
                                n = +!!e;
                            if (e && !t) {
                                v(n), (0, fa.A)({ platformType: d.type, location: "User Settings" });
                                return;
                            }
                            T(n), fe.A.setMetadataVisibility(d.type, d.id, n);
                        },
                        disabled: 1 !== h || null == d.metadata,
                    })),
                (0, S.jsxs)("div", {
                    className: fy.HZ,
                    children: [
                        (0, S.jsx)(L.d, {
                            label: g.intl.string(g.t.f7yOAX),
                            checked: 1 === h,
                            onChange: function (e) {
                                let { verified: t } = d,
                                    n = +!!e;
                                if (e && !t) {
                                    C(n), (0, fa.A)({ platformType: d.type, location: "User Settings" });
                                    return;
                                }
                                A(n), fe.A.setVisibility(d.type, d.id, n);
                            },
                        }),
                        r,
                        a,
                        s,
                    ],
                })),
                (function () {
                    if (d.revoked || d.integrations.length > 0) return (0, S.jsx)(nO.c, {});
                })(),
                d.revoked
                    ? (0, S.jsx)(ta.p, {
                          messageType: ta.Y.INFO,
                          children: g.intl.format(g.t["6C4lgA"], {
                              onReconnect: function () {
                                  (0, fa.A)({ platformType: d.type, location: "User Settings" });
                              },
                          }),
                      })
                    : d.integrations.length > 0
                      ? (0, S.jsx)(lO.D, {
                            label: g.intl.string(g.t.fOe3fZ),
                            children: d.integrations.map((e) => (0, S.jsx)(fj, { integration: e }, e.id)),
                        })
                      : void 0,
                null,
            ],
        })
    );
}
function fR(e) {
    let { appIdentity: t, oauth2Token: n } = e;
    return null == n
        ? null
        : (0, S.jsxs)("div", {
              className: fy.FI,
              children: [
                  (function (e, t) {
                      let { application: n } = t,
                          i = nQ.Ay.getApplicationIconURL({ id: n.id, icon: n.icon });
                      return (0, S.jsxs)("div", {
                          className: fy.Il,
                          children: [
                              (0, S.jsx)("img", { alt: n.name, className: ew()(fy.gj, fy.sN), src: i }),
                              (0, S.jsxs)("div", {
                                  children: [
                                      (0, S.jsx)("div", {
                                          className: fy.$p,
                                          children: (0, S.jsx)(k.E, {
                                              color: "text-strong",
                                              variant: "text-md/semibold",
                                              className: fy.RW,
                                              children: e.profile.username,
                                          }),
                                      }),
                                      (0, S.jsx)(k.E, {
                                          variant: "text-xs/normal",
                                          color: "text-strong",
                                          className: fy.Au,
                                          children: n.name,
                                      }),
                                  ],
                              }),
                              (0, S.jsx)(U.D, {
                                  className: fy.uH,
                                  onClick: () =>
                                      (0, xv.d1)(n, () => {
                                          xI.A.delete(t.id);
                                      }),
                                  "aria-label": g.intl.string(g.t.ppppRJ),
                                  focusProps: { offset: { top: -4, left: -4, right: -4 } },
                                  children: (0, S.jsx)(cU.P, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      });
                  })(t, n),
                  (0, S.jsx)("div", {
                      className: fy.HZ,
                      children: (0, S.jsx)(L.d, {
                          label: g.intl.string(g.t.f7yOAX),
                          checked: t.profile?.connection_visible ?? !1,
                          onChange: (e) => {
                              fA.A.updateApplicationIdentityConfig(n.application.id, t.provider_issued_user_id, {
                                  connection_visible: e,
                              });
                          },
                      }),
                  }),
              ],
          });
}
function fL(e) {
    let t = fn.A.get(e);
    (0, fa.A)({ platformType: t.type }),
        X.default.track(q.HAw.ACCOUNT_LINK_STEP, {
            previous_step: "desktop connections",
            current_step: "desktop oauth",
            platform_type: t.type,
        });
}
function fD() {
    let e = (0, fl.gn)(),
        t = fi.A.useConfig({ location: "User Settings Connections" }),
        n = (0, eZ.A)(t.enabled ? fv.tX : []);
    return (0, S.jsxs)("div", {
        className: fy.lA,
        children: [
            n.map(
                (e) =>
                    null != e &&
                    (0, S.jsx)(
                        fT.A,
                        { application: e, className: fy.__invalid_accountButton, innerClassName: fy.U$ },
                        e.id,
                    ),
            ),
            e
                .slice(0, 10 - n.length)
                .map((e) =>
                    (0, S.jsx)(
                        ft.A,
                        { type: e.type, className: fy.__invalid_accountButton, innerClassName: fy.U$ },
                        e.type,
                    ),
                ),
            (0, S.jsx)(e0.m, {
                text: g.intl.string(g.t.QqTz8b),
                children: (0, S.jsx)("div", {
                    className: ew()(fy.ej, fy.__invalid_accountButton),
                    children: (0, S.jsx)(x6.vN, {
                        children: (0, S.jsx)("button", {
                            className: ew()(fy.R8, fy.U$),
                            type: "button",
                            onClick: function () {
                                i3.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: fL });
                            },
                            "aria-label": g.intl.string(g.t.Zhcj9X),
                            children: (0, S.jsx)(th._, {
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
function fG(e) {
    let t,
        { fetching: n, accounts: i, appIdentities: l, authorizedApps: s, theme: a, locale: r } = e;
    return (
        (t = n
            ? (0, S.jsx)(dM.y, { type: dM.y.Type.SPINNING_CIRCLE })
            : 0 === i.length && 0 === l.length
              ? (0, S.jsx)(ns.pp, {
                    theme: a,
                    children: (0, S.jsx)(ns.SG, {
                        note: g.intl.string(g.t.WenGZ2),
                        children: g.intl.string(g.t.aoLS84),
                    }),
                })
              : (0, S.jsxs)(S.Fragment, {
                    children: [
                        l.map((e, t) =>
                            (0, S.jsx)(
                                fR,
                                { appIdentity: e, oauth2Token: s.find((t) => t.application.id === e.application_id) },
                                `app-${t}`,
                            ),
                        ),
                        i
                            .filter((e) => fn.A.isSupported(e.type))
                            .map((e, t) =>
                                (0, S.jsx)(
                                    fO,
                                    {
                                        theme: a,
                                        account: e,
                                        locale: r,
                                        onDisconnect: () =>
                                            (function (e) {
                                                let { type: t, id: n } = e;
                                                fe.A.disconnect(t, n);
                                            })(e),
                                    },
                                    `connection-${t}`,
                                ),
                            ),
                    ],
                })),
        (0, S.jsx)("div", { className: fy.V, children: t })
    );
}
let fP = (0, o.E2)(d.X.CONNECTIONS_ADD_CONNECTIONS_SETTING, {
        Component: function () {
            return (0, S.jsx)(lO.D, {
                label: g.intl.string(g.t.ZeDrUf),
                description: g.intl.format(g.t["oYc+Gz"], { privacyPolicyUrl: q.X7G.PRIVACY }),
                children: (0, S.jsx)(fD, {}),
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
    fM = (0, o.E2)(d.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING, {
        Component: function () {
            let e = (0, O.bG)([eb.A], () => eb.A.hidePersonalInformation),
                t = (0, O.bG)([fd.A], () => fd.A.isFetching()),
                n = (0, O.bG)([fd.A], () => fd.A.getAccounts()),
                { authorizedAppsFetchState: i, authorizedApps: l } = (0, O.cf)([fE.default], () => ({
                    authorizedAppsFetchState: fE.default.getFetchState(),
                    authorizedApps: fE.default.getNewestTokensForNonChildrenApplications(),
                })),
                { isLoading: s, filteredAppIdentities: a } = (0, fp.A)(t5.default.getCurrentUser().id, {
                    includeHidden: !0,
                }),
                r = (0, uM.Ay)(),
                o = (0, O.bG)([ua.default], () => ua.default.locale);
            return (x.useEffect(() => {
                i === fE.FetchState.NOT_FETCHED && xI.A.fetch();
            }, [i]),
            e)
                ? null
                : (0, S.jsxs)(S.Fragment, {
                      children: [
                          (0, S.jsx)(fh, {}),
                          (0, S.jsx)(fG, {
                              fetching: t || s || (a.length > 0 && i !== fE.FetchState.FETCHED),
                              accounts: n,
                              appIdentities: a,
                              authorizedApps: l,
                              theme: r,
                              locale: o,
                          }),
                      ],
                  });
        },
        initialize: () => {
            fe.A.fetch();
        },
        useSearchTerms: () => [
            g.intl.string(g.t["+/hZM/"]),
            g.intl.string(g.t.bsbMVz),
            g.intl.string(g.t.f7yOAX),
            g.intl.string(g.t.FYKGsL),
            g.intl.string(g.t["+KCMSi"]),
        ],
    });
var fU = n(46225),
    fk = n(452832);
let fV = [q.fg2.LEAGUE_OF_LEGENDS, q.fg2.RIOT_GAMES],
    fw = [{ badgeType: ef.Xi.NEW, dismissibleContent: eA.M.NEW_CRUNCHYROLL_CONNECTION }],
    fB = (0, o.zZ)(d.X.CONNECTIONS_ADD_CONNECTIONS_CATEGORY, {
        buildLayout: () => [fP],
        useInlineNotice: function () {
            let e = (0, O.bG)([fd.A], () => fd.A.getAccounts().find((e) => fV.includes(e.type))?.type),
                t = null != e ? fn.A.get(e) : null,
                n = (0, eZ.h)(t?.replacedBy),
                { canStartAuthorization: i, hasAlreadyLinked: l, fetched: s } = (0, fU.RD)(n),
                a = g.intl.string(fk.default["1S6oAo"]),
                r = fi.A.useConfig({ location: "RiotDeprecationInlineNotice" }).enabled;
            return x.useMemo(
                () =>
                    r && null != t && i && n?.connectionEntrypointUrl != null && !l && s
                        ? {
                              type: ef.lT.INLINE_NOTICE,
                              noticeType: "info",
                              useText: () =>
                                  g.intl.format(fk.default.DeOsIl, {
                                      connectionName: t.name,
                                      applicationName: a,
                                      connectionEntrypointUrl: n.connectionEntrypointUrl,
                                  }),
                          }
                        : null,
                [t, a, n, i, r, l, s],
            );
        },
    }),
    fF = (0, o.zZ)(d.X.CONNECTIONS_CONNECTED_ACCOUNTS_CATEGORY, { buildLayout: () => [fM] }),
    fz = (0, o.t_)(d.X.CONNECTIONS_PANEL, {
        useTitle: () => g.intl.string(g.t["3fe7U5"]),
        useObscuredNotice: dG.L,
        buildLayout: () => [fB, fF],
    }),
    fX = (0, o.i4)(d.X.CONNECTIONS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["3fe7U5"]),
        icon: hd.q,
        getDismissibleBadges: () => fw,
        buildLayout: () => [fz],
    });
var fY = n(875444);
function fH(e, t) {
    let n = (0, O.bG)([fE.default], () => fE.default.getFetchState()),
        i = (0, O.bG)([fE.default], () =>
            e ? fE.default.getNewestTokensForNonChildrenApplications() : fE.default.getNewestTokens(),
        ),
        l = x.useMemo(
            () => (null == i ? [] : i.filter((e) => (0, fY.A)(e.application)).map((e) => e.application)),
            [i],
        );
    return (
        x.useEffect(() => {
            t || xI.A.fetch();
        }, [t]),
        { showLoadingIndicator: n !== fE.FetchState.FETCHED && (null == i || 0 === i.length), slayerSdkApplications: l }
    );
}
n(505653);
var fK = n(106148);
n(650832);
var fW = n(628736);
function fZ(e) {
    let { applications: t } = e,
        n = x.useMemo(() => t.sort((e, t) => dX.default.compare(t.id, e.id)), [t]),
        i = x.useMemo(() => {
            let e = [];
            for (let t = 0; t < 3; t++) {
                let i = n[t];
                if (null == i) break;
                e.push(i.name);
            }
            let t = e.join(", "),
                i = n.length - 3;
            return i > 0
                ? g.intl.format(g.t.sHFdTg, {
                      gameList: t,
                      plusMoreHook: (e, t) =>
                          (0, S.jsx)(
                              k.E,
                              {
                                  tag: "span",
                                  variant: "text-sm/medium",
                                  color: "text-muted",
                                  children: g.intl.format(g.t["EADv+4"], { count: i }),
                              },
                              t,
                          ),
                  })
                : e.join(", ");
        }, [n]),
        l = x.useMemo(() => {
            let e = [];
            for (let t = 0; t < 3; t++) {
                let i = n[t];
                if (null == i) break;
                let { icon: l, name: s, id: a } = i,
                    r = nQ.Ay.getApplicationIconURL({ id: a, icon: l });
                e.push(
                    (0, S.jsx)(
                        e0.m,
                        {
                            __unsupportedReactNodeAsText: s,
                            children: (0, S.jsx)("img", { src: r, "aria-label": s, className: fW.Kk }),
                        },
                        a,
                    ),
                );
            }
            let t = n.length - 3;
            return (
                t > 0 &&
                    e.push(
                        (0, S.jsx)(
                            "div",
                            {
                                className: fW.lK,
                                children: (0, S.jsx)(k.E, {
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
        }, [n]);
    return (0, S.jsxs)("div", {
        className: fW.wx,
        children: [
            (0, S.jsxs)("div", {
                className: fW.kX,
                children: [
                    (0, S.jsx)(k.E, { variant: "text-md/normal", color: "text-strong", children: i }),
                    (0, S.jsxs)(U.D, {
                        onClick: () => {
                            (0, ey.openUserSettings)(d.X.AUTHORIZED_APPS_PANEL);
                        },
                        className: fW.bJ,
                        children: [
                            (0, S.jsx)(k.E, {
                                variant: "text-xs/normal",
                                color: "interactive-text-default",
                                children: g.intl.format(g.t.oYaYOe, {}),
                            }),
                            (0, S.jsx)(th._, {
                                size: "xxs",
                                color: w.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                className: fW.g7,
                            }),
                        ],
                    }),
                ],
            }),
            (0, S.jsx)("div", { className: fW.yF }),
            (0, S.jsx)("div", { className: fW.lJ, children: l }),
        ],
    });
}
function fq() {
    return (0, S.jsxs)("div", {
        className: fW.do,
        children: [
            (0, S.jsx)(k.E, {
                variant: "text-md/medium",
                color: "text-strong",
                className: fW.xV,
                children: g.intl.string(g.t["+0U77d"]),
            }),
            (0, S.jsx)(k.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: g.intl.format(g.t.V8wClM, {
                    helpdeskArticle: tr.A.getArticleURL(q.MVz.SOCIAL_LAYER_CONNECTIONS),
                }),
            }),
        ],
    });
}
function fQ(e) {
    let { applications: t } = e;
    return t.length > 0 ? (0, S.jsx)(fZ, { applications: t }) : (0, S.jsx)(fq, {});
}
let fJ = (0, o.E2)(d.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES, {
    useSearchTerms: () => [g.intl.string(g.t.YpCiMt)],
    Component: function () {
        let { showLoadingIndicator: e, slayerSdkApplications: t } = fH(!0);
        return e ? (0, S.jsx)(dM.y, {}) : (0, S.jsx)(fQ, { applications: t });
    },
});
function f$() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = fH(!0, !0);
    return !e && t.length > 0;
}
let f0 = (0, o.zD)(d.X.CONTENT_AND_SOCIAL_ALLOW_GAME_FRIEND_DMS_SETTING, {
        useTitle: () => g.intl.string(g.t.XpBObB),
        useSubtitle: () =>
            g.intl.format(g.t.oZsHTD, { helpdeskArticle: tr.A.getArticleURL(q.MVz.SLAYER_GAME_FRIENDS) }),
        useSearchTerms: () => [g.intl.string(g.t["Uv/eTx"])],
        useValue: () => c.Zk.useSetting(),
        setValue: (e) => c.Zk.updateSetting(e),
        usePredicate: f$,
    }),
    f1 = (0, o.Qx)(d.X.CONTENT_AND_SOCIAL_IN_GAME_DMS_SETTING, {
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
        usePredicate: f$,
    }),
    f2 = (0, o.zZ)(d.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_CATEGORY, {
        useSearchTerms: () => [g.intl.string(g.t.YpCiMt)],
        buildLayout: () => [fJ, f0, f1],
    });
var f5 = n(687123),
    f3 = n(444802),
    f8 = n(558001);
n(866945);
var f4 = n(835002);
function f9() {
    let e = (0, f3.WX)();
    x.useEffect(() => {
        (0, f8.N)(f4.YA.AGE_CONFIRMATION_NOTICE, f4.YX.VIEWED);
    }, []);
    let t = x.useCallback(() => {
            window.open(tr.A.getArticleURL(e), "_blank"), (0, f8.N)(f4.YA.AGE_CONFIRMATION_NOTICE, f4.YX.LEARN_MORE);
        }, [e]),
        n = x.useCallback(() => {
            E2.A.showAgeVerificationGetStartedModal({ entryPoint: E5.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, f8.N)(f4.YA.AGE_CONFIRMATION_NOTICE, f4.YX.CONFIRM_AGE);
        }, []);
    return (0, S.jsx)(ta.p, {
        messageType: ta.Y.INFO,
        action: (0, S.jsx)(B.Q, {
            variant: "secondary",
            size: "sm",
            textVariant: "text-sm/medium",
            text: g.intl.string(g.t.FDSSia),
            onClick: n,
        }),
        children: g.intl.format(g.t.mFgsfg, { hook: (e, n) => (0, S.jsx)(dT.Anchor, { onClick: t, children: e }, n) }),
    });
}
function f7() {
    let e = (0, Eq.aX)(f5.t.REACTIVE_CHECK),
        t = (0, EZ.b8)();
    return x.useMemo(() => {
        if (e && !t) return { type: ef.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: f9 };
    }, [e, t]);
}
var f6 = n(308528),
    be = n(171316);
function bt() {
    let e = (0, be.uM)(),
        t = (0, xr.vx)(),
        n = x.useCallback(() => {
            (0, lp.default)(),
                f6.A.openPrivateChannel({ recipientIds: t }),
                (0, f8.N)(f4.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, f4.YX.LEARN_MORE);
        }, [t]),
        i = x.useCallback(() => {
            (0, f8.N)(f4.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, f4.YX.VIEWED);
        }, []);
    return x.useMemo(() => {
        if (e)
            return {
                type: ef.lT.INLINE_NOTICE,
                noticeType: "info",
                trackView: i,
                useText: () =>
                    g.intl.format(xc.default.i284fU, {
                        hook: (e, t) => (0, S.jsx)(dT.Anchor, { onClick: n, children: e }, t),
                        count: t.length,
                    }),
            };
    }, [n, e, t.length, i]);
}
var bn = n(323073),
    bi = n(264249),
    bl = n(406274);
let bs = (0, o.zD)(d.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_DM_SETTING, {
        useTitle: () => g.intl.string(g.t.XahVjj),
        useSubtitle: () => g.intl.string(g.t.R9fXyS),
        useValue: bi.hT,
        useDisabled: () => {
            let e = (0, bl.A)() ?? !0,
                t = (0, bn.sP)(),
                n = (0, EZ.yM)();
            return (!t || !!n) && !e;
        },
        setValue: (e) => {
            (0, bn.p5)() && e
                ? E2.A.showAgeVerificationGetStartedModal({ entryPoint: E5.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS })
                : c.Qe.updateSetting(e);
        },
    }),
    ba = (0, o.zD)(d.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_IOS_SETTING, {
        useTitle: () => g.intl.string(g.t["L+yTsa"]),
        useSubtitle: () => g.intl.string(g.t.hiM8pU),
        useValue: bi.tI,
        useDisabled: () => {
            let e = (0, bl.A)() ?? !0,
                t = (0, bn.sP)(),
                n = (0, EZ.yM)();
            return x.useMemo(() => (!t || !!n) && !e, [t, e, n]);
        },
        setValue: (e) => {
            (0, bn.p5)() && e
                ? E2.A.showAgeVerificationGetStartedModal({ entryPoint: E5.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS })
                : c.Kg.updateSetting(e);
        },
    });
n(667532);
var br = n(390248),
    bo = n(632119),
    bd = n(945276),
    bu = n(562783),
    bc = n(533517);
function bg() {
    let e,
        t = (0, bd.A)() ?? !0,
        n = (0, be.uM)(),
        i = (0, be.uM)(),
        {
            explicitContentGuilds: l,
            explicitContentFriendDm: s,
            explicitContentNonFriendDm: a,
        } = ((e = (0, dp.cf)([oz.A], () => oz.A.settings.textAndImages?.explicitContentSettings ?? (0, bo.C$)())),
        {
            explicitContentGuilds: (0, bo.Ys)({ setting: e?.explicitContentGuilds }),
            explicitContentNonFriendDm: (0, bo.Ys)({ setting: e?.explicitContentNonFriendDm, isDm: !0 }),
            explicitContentFriendDm: (0, bo.Ys)({ setting: e?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
        }),
        r = (e) => {
            let t = Object.values(e);
            (0, br.hK)() && t.includes(f.TO.SHOW)
                ? E2.A.showAgeVerificationGetStartedModal({ entryPoint: E5.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
                : (0, bo.Jz)(e);
        },
        o = [
            { value: f.TO.BLUR, label: g.intl.string(g.t.S49Uad) },
            { value: f.TO.BLOCK, label: g.intl.string(g.t["D/157Y"]) },
        ],
        d = [{ value: f.TO.BLUR, label: g.intl.string(g.t.S49Uad) }],
        u = { value: f.TO.SHOW, label: g.intl.string(g.t["5k5OFp"]) };
    t && (o.unshift(u), d.unshift(u));
    let c = { isDisabled: i, tooltipText: n ? g.intl.string(xc.default["6Af/cw"]) : void 0 };
    return (0, S.jsxs)(bu.E, {
        description: g.intl.string(g.t.Wnojv1),
        children: [
            (0, S.jsx)(bc.A, {
                title: g.intl.string(g.t["+uI23H"]),
                value: s,
                onChange: (e) => r({ explicitContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, S.jsx)(bc.A, {
                title: g.intl.string(g.t["Yh+HX1"]),
                value: a,
                onChange: (e) => r({ explicitContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, S.jsx)(bc.A, {
                title: g.intl.string(g.t["FP+a42"]),
                value: l,
                onChange: (e) => r({ explicitContentGuilds: e }),
                isDisabled: !t || i,
                tooltipText: n ? g.intl.string(xc.default["6Af/cw"]) : void 0,
                options: d,
            }),
        ],
    });
}
function b_() {
    let e,
        t = (0, bd.A)() ?? !0,
        n = (0, be.uM)(),
        i = (0, be.uM)(),
        {
            goreContentGuilds: l,
            goreContentFriendDm: s,
            goreContentNonFriendDm: a,
        } = ((e = (0, dp.cf)([oz.A], () => oz.A.settings.textAndImages?.goreContentSettings ?? (0, f3.T4)())),
        {
            goreContentGuilds: (0, f3.gC)({ setting: e?.goreContentGuilds }),
            goreContentNonFriendDm: (0, f3.gC)({ setting: e?.goreContentNonFriendDm, isDm: !0 }),
            goreContentFriendDm: (0, f3.gC)({ setting: e?.goreContentFriendDm, isDm: !0, isFriend: !0 }),
        }),
        r = (e) => {
            let t = Object.values(e);
            (0, br.hK)() && t.includes(f.TO.SHOW)
                ? E2.A.showAgeVerificationGetStartedModal({ entryPoint: E5.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
                : (0, f3.qY)(e);
        },
        o = [
            { value: f.TO.BLUR, label: g.intl.string(g.t.S49Uad) },
            { value: f.TO.BLOCK, label: g.intl.string(g.t["D/157Y"]) },
        ],
        d = [{ value: f.TO.BLUR, label: g.intl.string(g.t.S49Uad) }],
        u = { value: f.TO.SHOW, label: g.intl.string(g.t["5k5OFp"]) };
    t && (o.unshift(u), d.unshift(u));
    let c = { isDisabled: i, tooltipText: n ? g.intl.string(xc.default["6Af/cw"]) : void 0 };
    return (0, S.jsxs)(bu.E, {
        description: g.intl.string(g.t.XgH9eh),
        children: [
            (0, S.jsx)(bc.A, {
                title: g.intl.string(g.t["+uI23H"]),
                value: s,
                onChange: (e) => r({ goreContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, S.jsx)(bc.A, {
                title: g.intl.string(g.t["Yh+HX1"]),
                value: a,
                onChange: (e) => r({ goreContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, S.jsx)(bc.A, {
                title: g.intl.string(g.t["FP+a42"]),
                value: l,
                onChange: (e) => r({ goreContentGuilds: e }),
                isDisabled: !t || i,
                options: d,
                tooltipText: n ? g.intl.string(xc.default["6Af/cw"]) : void 0,
            }),
        ],
    });
}
var bm = n(397620),
    bh = n(759049);
let bA = (0, o.E2)(d.X.CONTENT_AND_SOCIAL_CONTENT_FILTERS_SETTING, {
    Component: function () {
        let e = (0, f3.WX)(),
            t = x.useMemo(
                () => [
                    {
                        id: "explicit-media-redaction",
                        title: g.intl.string(g.t.GYpoAq),
                        component: bg,
                        orientation: "vertical",
                    },
                    {
                        id: "gore-media-redaction",
                        title: g.intl.string(g.t["16/3Bi"]),
                        component: b_,
                        orientation: "vertical",
                    },
                ],
                [],
            ),
            n = x.useCallback((e) => {
                Ag.A.setSection(q.nc_.CONTENT_AND_SOCIAL, e);
            }, []);
        return (0, S.jsxs)(fK.h, {
            children: [
                (0, S.jsx)(fK._, {
                    header: g.intl.string(g.t["Hj/But"]),
                    description: g.intl.format(g.t.dliU4j, { learnMoreLink: tr.A.getArticleURL(e) }),
                }),
                (0, S.jsx)(bm.A, { tabs: t, onTabChange: n, orientation: "vertical", tabsClassName: bh.v }),
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
var bp = n(639555),
    bT = n(617641),
    bE = n(546140),
    bS = n(406935),
    bx = n(594061);
let bf = (0, o.zD)(d.X.CONTENT_AND_SOCIAL_DM_SAFETY_ALERTS_SETTING, {
    useTitle: () => g.intl.string(g.t.qFsx5q),
    useSubtitle: () => g.intl.format(g.t.lunaRv, { learnMoreLink: tr.A.getArticleURL(q.MVz.SAFETY_ALERTS) }),
    useValue: bE.L,
    setValue: (e) =>
        bx.wc.updateAsync(
            "privacy",
            (t) => {
                t.inappropriateConversationWarnings = bS._t.create({ value: e });
            },
            bx.Sb.INFREQUENT_USER_ACTION,
        ),
    usePredicate: function () {
        let e = (0, bT.Lc)({ location: "DMSafetyAlertsSetting" }),
            t = (0, bp.Rv)({ location: "DMSafetyAlertsSetting" }),
            n = (0, bd.A)() ?? !0;
        return e && !n && !t;
    },
});
var bb = n(809505),
    bN = n(923457),
    bC = n(656402);
let bI = (0, o.Qx)(d.X.CONTENT_AND_SOCIAL_DM_SPAM_SETTING, {
        useTitle: () => g.intl.string(g.t.tiCXaH),
        useSubtitle: () => g.intl.format(g.t.RvjRRI, { appealLink: tr.A.getArticleURL(q.MVz.SAFE_DIRECT_MESSAGING) }),
        useValue: function () {
            let e = c.he.useSetting(),
                t = c.cj.useSetting(),
                n = (0, O.bG)([t5.default], () => t5.default.getCurrentUser()),
                i = (0, Eq.yv)(bN.p.SPAM_FILTERS);
            return e !== f.he.DEFAULT_UNSET
                ? e
                : n?.nsfwAllowed === !1 && i
                  ? f.he.FRIENDS_AND_NON_FRIENDS
                  : (bC.xY.get(t) ?? f.he.NON_FRIENDS);
        },
        setValue: (e) => c.he.updateSetting(e),
        useOptions: function () {
            return x.useMemo(() => (0, bb.YS)(), []);
        },
        useSearchTerms: () => [g.intl.string(g.t.JzaP4h), g.intl.string(g.t.H9XOl3), g.intl.string(g.t.k4W40P)],
    }),
    bv = (0, o.zZ)(d.X.CONTENT_AND_SOCIAL_CONTENT_CATEGORY, {
        useTitle: () => g.intl.string(g.t.xVRG4P),
        useInlineNotice: function () {
            let e,
                t,
                n,
                i,
                l,
                s,
                a,
                r,
                o,
                d = bt(),
                u =
                    ((e = (0, xo.Z)()),
                    (t = (0, f3.WX)()),
                    (n = x.useCallback(() => {
                        window.open(tr.A.getArticleURL(t), "_blank"),
                            (0, f8.N)(f4.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, f4.YX.LEARN_MORE);
                    }, [t])),
                    (i = x.useCallback(() => {
                        (0, f8.N)(f4.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, f4.YX.VIEWED);
                    }, [])),
                    x.useMemo(() => {
                        if (e)
                            return {
                                type: ef.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: i,
                                useText: () =>
                                    g.intl.format(g.t.EUo0yj, {
                                        hook: (e, t) => (0, S.jsx)(dT.Anchor, { onClick: n, children: e }, t),
                                    }),
                            };
                    }, [n, e, i])),
                c =
                    ((l = (0, Eq.SJ)()),
                    (s = (0, EZ.b8)()),
                    (a = l && !s),
                    (r = x.useCallback(() => {
                        E2.A.showAgeVerificationGetStartedModal({ entryPoint: E5.q1.CONTENT_AND_SOCIAL_NOTICE }),
                            (0, f8.N)(f4.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, f4.YX.LEARN_MORE);
                    }, [])),
                    (o = x.useCallback(() => {
                        (0, f8.N)(f4.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, f4.YX.VIEWED);
                    }, [])),
                    x.useMemo(() => {
                        if (a)
                            return {
                                type: ef.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: o,
                                useText: () =>
                                    g.intl.format(g.t.OX4ybh, {
                                        hook: (e, t) => (0, S.jsx)(dT.Anchor, { onClick: r, children: e }, t),
                                    }),
                            };
                    }, [r, a, o])),
                _ = f7();
            return d ?? _ ?? c ?? u;
        },
        buildLayout: () => [bA, bI, bf, bs, ba],
    }),
    by = (0, o.zD)(d.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_EVERYONE_SETTING, {
        useTitle: () => g.intl.string(g.t["7x9dyE"]),
        useValue: () => {
            let e = c.FA.useSetting();
            return x.useMemo(() => (0, ap.Lx)(e), [e]).all;
        },
        setValue: (e) => {
            c.FA.updateSetting(e ? q.yKI : q.yKI & ~q.dzt.NO_RELATION);
        },
        useDisabled: () => (0, be.uM)(),
    });
var bj = n(665260);
let bO = (0, o.zD)(d.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_FRIENDS_SETTING, {
        useTitle: () => g.intl.string(g.t.NfeuZ3),
        useValue: () => {
            let e = c.FA.useSetting(),
                t = x.useMemo(() => (0, ap.Lx)(e), [e]);
            return t.all || t.mutualFriends;
        },
        setValue: (e) => {
            let t = c.FA.getSetting();
            c.FA.updateSetting(e ? bj.UI(t, q.dzt.MUTUAL_FRIENDS) : bj.iE(t, q.dzt.MUTUAL_FRIENDS, q.dzt.NO_RELATION));
        },
        useDisabled: () => (0, be.uM)(),
    }),
    bR = (0, o.zD)(d.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_GUILDS_SETTING, {
        useTitle: () => g.intl.string(g.t.qsMfsH),
        useValue: () => {
            let e = c.FA.useSetting(),
                t = x.useMemo(() => (0, ap.Lx)(e), [e]);
            return t.all || t.mutualGuilds;
        },
        setValue: (e) => {
            let t = c.FA.getSetting();
            c.FA.updateSetting(e ? bj.UI(t, q.dzt.MUTUAL_GUILDS) : bj.iE(t, q.dzt.MUTUAL_GUILDS, q.dzt.NO_RELATION));
        },
        useDisabled: () => (0, be.uM)(),
    }),
    bL = (0, o.zZ)(d.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.MNaVwq),
        useInlineNotice: bt,
        buildLayout: () => [by, bO, bR],
    });
var bD = n(994500),
    bG = n(428678),
    bP = n(49229),
    bM = n(730134),
    bU = n(741304);
function bk(e) {
    let { listType: t, numberOfUsers: n } = e,
        i = "blocked" === t;
    return (0, S.jsxs)("div", {
        className: bU.wx,
        children: [
            (0, S.jsx)("div", { className: bU.zc, children: i ? (0, S.jsx)(bG.K, {}) : (0, S.jsx)(nc.G, {}) }),
            (0, S.jsxs)("div", {
                className: bU.Qq,
                children: [
                    (0, S.jsx)(k.E, {
                        variant: "text-md/semibold",
                        color: "interactive-text-active",
                        children: g.intl.string(i ? g.t.PFOUKW : g.t["93ZDWE"]),
                    }),
                    (0, S.jsx)(k.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: i
                            ? g.intl.format(g.t["r91W/h"], { numberOfBlockedUsers: n })
                            : g.intl.format(g.t.rXUeOl, { numberOfIgnoredUsers: n }),
                    }),
                ],
            }),
        ],
    });
}
function bV(e) {
    let { userId: t, last: n } = e,
        i = (0, O.bG)([bD.A], () => bD.A.isBlocked(t)),
        l = (0, O.bG)([t5.default], () => t5.default.getUser(t)),
        [s, a] = x.useState(!1),
        r = x.useCallback(() => {
            a(!0),
                i
                    ? bP.A.unblockUser(t).catch(() => {
                          a(!1);
                      })
                    : bP.A.unignoreUser(t, eU.A.USER_SETTINGS).catch(() => {
                          a(!1);
                      });
        }, [i, t]);
    return null == l
        ? null
        : (0, S.jsxs)("div", {
              className: ew()(bU.nM, { [bU.fW]: n }),
              children: [
                  (0, S.jsxs)("div", {
                      className: bU.eF,
                      children: [
                          (0, S.jsx)(bM.A, { user: l, size: nY._3.SIZE_40 }),
                          (0, S.jsxs)("div", {
                              className: bU.Qq,
                              children: [
                                  (0, S.jsx)(k.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: l.globalName ?? l.username,
                                  }),
                                  (0, S.jsx)(k.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: null != l.globalName ? l.username : null,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, S.jsx)(eh.$, {
                      variant: "secondary",
                      text: g.intl.string(i ? g.t.XyHpKH : g.t["8wXU9B"]),
                      onClick: r,
                      loading: s,
                  }),
              ],
          });
}
function bw(e) {
    let { userIds: t, listType: n } = e,
        [i, l] = x.useState(5);
    return (0, S.jsx)(fK.h, {
        children: (0, S.jsxs)("div", {
            className: bU.Nr,
            children: [
                (0, S.jsx)(bk, { listType: n, numberOfUsers: t.length }),
                (0, S.jsx)("div", {
                    className: bU.jS,
                    children: t.slice(0, i).map((e, n) => (0, S.jsx)(bV, { userId: e, last: n === t.length - 1 }, e)),
                }),
                i < t.length
                    ? (0, S.jsx)("div", {
                          className: bU.vM,
                          children: (0, S.jsx)(U.D, {
                              onClick: () => {
                                  l((e) => e + 5);
                              },
                              className: bU.Qf,
                              children: (0, S.jsx)(k.E, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: g.intl.format(g.t.jULEDr, {
                                      numberOfUsers: i + 5 < t.length ? 5 : t.length - i,
                                  }),
                              }),
                          }),
                      })
                    : null,
            ],
        }),
    });
}
let bB = (0, o.E2)(d.X.CONTENT_AND_SOCIAL_BLOCKED_USERS, {
        useSearchTerms: () => [g.intl.string(g.t.PFOUKW)],
        usePredicate: () => (0, O.bG)([bD.A], () => bD.A.getBlockedIDs().length > 0),
        Component: function () {
            let e = (0, O.yK)([bD.A], () => bD.A.getBlockedIDs());
            return (0, S.jsx)(bw, { userIds: e, listType: "blocked" });
        },
    }),
    bF = (0, o.E2)(d.X.CONTENT_AND_SOCIAL_IGNORED_USERS, {
        useSearchTerms: () => [g.intl.string(g.t["93ZDWE"])],
        usePredicate: () => (0, O.bG)([bD.A], () => bD.A.getIgnoredIDs().length > 0),
        Component: function () {
            let e = (0, O.yK)([bD.A], () => bD.A.getIgnoredIDs());
            return (0, S.jsx)(bw, { userIds: e, listType: "ignored" });
        },
    }),
    bz = (0, o.zZ)(d.X.CONTENT_AND_SOCIAL_RESTRICTED_USERS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.LVwR56),
        useSubtitle: () =>
            g.intl.format(g.t["0aNQo9"], { helpArticle: tr.A.getArticleURL(q.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE) }),
        buildLayout: () => [bB, bF],
        usePredicate: () => {
            let { hasBlockedUsers: e, hasIgnoredUsers: t } = (0, O.cf)([bD.A], () => ({
                hasBlockedUsers: bD.A.getBlockedIDs().length > 0,
                hasIgnoredUsers: bD.A.getIgnoredIDs().length > 0,
            }));
            return t || e;
        },
    });
var bX = n(612025),
    bY = n(112469),
    bH = n(111159),
    bK = n(152056),
    bW = n(321880);
let bZ = { label: () => g.intl.string(g.t["32u1Dx"]), value: bX.YG };
var bq = n(542457);
let bQ = () => (0, bY.Tx)() !== bX.YG;
function bJ() {
    return g.intl.string(g.t["T+nevN"]);
}
let b$ = (0, o.zD)(d.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_JOIN_SETTING, {
        useTitle: bJ,
        useSubtitle: () =>
            g.intl.format(g.t.jXKQCu, { helpdeskArticle: tr.A.getArticleURL(q.MVz.ACTIVITY_STATUS_SETTINGS) }),
        useValue: () => {
            let e = (0, bY.Tx)();
            return !c.pE.useSetting().includes(e);
        },
        setValue: (e) => {
            let t = bX.xk.getState().selectedGuildId,
                n = (0, ap.CN)();
            e ? n.delete(t) : n.add(t),
                c.pE.updateSetting([...n]),
                X.default.track(q.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                    action: bq.m.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
                    ingress: iv.bf.USER_SETTINGS_PRIVACY_SAFETY,
                    guild_id: t,
                });
        },
        usePredicate: bQ,
    }),
    b0 = () => (0, bY.Tx)() !== bX.YG;
function b1() {
    return g.intl.string(_.default.WhdCGP);
}
let b2 = (0, o.zD)(d.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_SHARE_SETTING, {
    useTitle: b1,
    useSubtitle: () => g.intl.string(_.default.UQ9RHJ),
    useValue: () => {
        let e = (0, bY.Tx)();
        return !c.JG.useSetting().includes(e);
    },
    setValue: (e) => {
        let t = bX.xk.getState().selectedGuildId,
            n = (0, ap.Kk)();
        e ? n.delete(t) : n.add(t),
            c.JG.updateSetting([...n]),
            X.default.track(q.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                action: bq.m.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
                ingress: iv.bf.USER_SETTINGS_PRIVACY_SAFETY,
                guild_id: t,
            });
    },
    usePredicate: b0,
});
var b5 = n(762183),
    b3 = n(445176),
    b8 = n(137675);
let b4 = () => ((0, b3.e)() ? g.intl.string(g.t.PMsfcH) : g.intl.string(g.t.RAQUSN)),
    b9 = (e, t) => {
        X.default.track(q.HAw.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t,
        });
    },
    b7 = (0, o.zD)(d.X.CONTENT_AND_SOCIAL_PERMISSIONS_DMS_SETTING, {
        useTitle: b4,
        useSubtitle: () => {
            let e = (0, bY.Tx)(),
                t = (0, bY.q9)(),
                n = (0, b3.e)();
            return e === bX.YG
                ? n
                    ? g.intl.string(g.t.XXGmuB)
                    : g.intl.string(g.t.wbYDfT)
                : t
                  ? g.intl.string(g.t.V0ka0Q)
                  : n
                    ? g.intl.string(g.t.F9WY3f)
                    : g.intl.string(g.t.G7c3Xo);
        },
        useValue: () => {
            let e = (0, bY.Tx)(),
                t = c.$s.useSetting().includes(e),
                n = (0, b5.K)();
            return e === bX.YG ? !n : !t;
        },
        useDisabled: () => {
            let e = (0, be.uM)();
            return (0, bY.Tx)() === bX.YG && e;
        },
        setValue: (e) => {
            let t = bX.xk.getState().selectedGuildId;
            if (t === bX.YG) {
                var n;
                (n = !e),
                    (0, b8.O)({
                        header: g.intl.string(g.t["uUr+GR"]),
                        body: g.intl.string(g.t.hjGJBp),
                        confirmText: g.intl.string(g.t.gm1Vej),
                        cancelText: g.intl.string(g.t.p89ACt),
                        confirmButtonColor: rA.$n.Colors.BRAND,
                        onConfirm: () => {
                            c.n6.updateSetting(n), b9(n, !1);
                        },
                        onCancel: () => {
                            c.n6.updateSetting(n), c.$s.updateSetting(n ? H.A.getGuildIds() : []), b9(n, !0);
                        },
                    });
            } else {
                let n = (0, ap.Tb)();
                e ? n.delete(t) : n.add(t),
                    c.$s.updateSetting(Array.from(n)),
                    X.default.track(q.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: bq.m.DIRECT_MESSAGES_TOGGLE,
                        ingress: iv.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    });
            }
        },
    });
var b6 = n(152076);
let Ne = (e, t) => {
    X.default.track(q.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
        default_guilds_restricted: e,
        applied_to_existing_guilds: t,
    });
};
function Nt() {
    return g.intl.string(g.t["3o2ojh"]);
}
let Nn = (0, o.zD)(d.X.CONTENT_AND_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: Nt,
        useSubtitle: () =>
            (0, bY.q9)()
                ? g.intl.format(g.t.WpnWLc, { helpdeskArticle: tr.A.getArticleURL(q.MVz.MESSAGE_REQUESTS) })
                : g.intl.format(g.t.wkm9a3, { helpdeskArticle: tr.A.getArticleURL(q.MVz.MESSAGE_REQUESTS) }),
        useValue: () => {
            let e = (0, bY.Tx)(),
                t = (0, b5.K)(),
                n = c.$s.useSetting().includes(e),
                i = c.YX.useSetting(),
                l = c.Zr.useSetting().includes(e);
            return e === bX.YG ? !t && !i : !n && !l;
        },
        useDisabled: () => {
            let e = (0, bY.Tx)(),
                t = (0, be.uM)(),
                n = (0, b5.K)(),
                i = c.$s.useSetting().includes(e);
            return e === bX.YG ? n || t : i;
        },
        setValue: (e) => {
            let t = bX.xk.getState().selectedGuildId;
            if (!e && (0, b6.w)())
                return void E2.A.showAgeVerificationGetStartedModal({ entryPoint: E5.q1.MESSAGE_REQUESTS_SETTINGS });
            if (t === bX.YG) {
                var n;
                (n = !e),
                    (0, b8.O)({
                        header: g.intl.string(g.t.yAfu1p),
                        body: g.intl.string(g.t.Ry2z74),
                        confirmText: g.intl.string(g.t.gm1Vej),
                        cancelText: g.intl.string(g.t.p89ACt),
                        confirmButtonColor: rA.$n.Colors.BRAND,
                        onConfirm: () => {
                            c.YX.updateSetting(n), Ne(n, !1);
                        },
                        onCancel: () => {
                            c.YX.updateSetting(n), c.Zr.updateSetting(n ? H.A.getGuildIds() : []), Ne(n, !0);
                        },
                    });
            } else {
                let n = (0, ap.xo)();
                e ? n.delete(t) : n.add(t),
                    c.Zr.updateSetting(Array.from(n)),
                    X.default.track(q.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: bq.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: iv.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    });
            }
        },
    }),
    Ni = (0, o.E2)(d.X.CONTENT_AND_SOCIAL_PERMISSIONS_GUILD_SELECTOR, {
        useSearchTerms: function () {
            let e = [b4(), Nt()],
                t = b1();
            b0() && e.push(t);
            let n = bJ();
            return bQ() && e.push(n), e;
        },
        Component: function () {
            let { selectedGuildId: e, setSelectedGuildId: t } = (0, bX.xk)(),
                n = (0, O.bG)([K.Ay], () => K.Ay.getFlattenedGuildIds()),
                i = (0, O.bG)([H.A], () => H.A.getGuilds()),
                l = n[0];
            x.useEffect(
                () =>
                    bK.A.subscribe(
                        (e) => {
                            let { query: t } = e;
                            return t.trim();
                        },
                        (e, n) => {
                            let i = bX.xk.getState().selectedGuildId;
                            "" === n && "" !== e && i === bX.YG && null != l
                                ? t(l)
                                : "" === e && i !== bX.YG && t(bX.YG);
                        },
                        { equalityFn: (e, t) => e === t },
                    ),
                [l, t],
            );
            let s = x.useMemo(() => {
                let e = [];
                return (
                    e.push({
                        ...bZ,
                        id: bZ.value,
                        label: bZ.label(),
                        leading: (0, S.jsx)("div", {
                            className: bW.KP,
                            children: (0, S.jsx)(bH.p, {
                                size: "sm",
                                color: "white",
                                "aria-hidden": !0,
                                className: bW.cl,
                            }),
                        }),
                    }),
                    n.forEach((t) => {
                        let n = i[t];
                        null != n &&
                            e.push({
                                id: n.id,
                                label: n.name,
                                value: n.id,
                                leading: (0, S.jsx)(c7.Ay, {
                                    className: bW.cl,
                                    guild: n,
                                    size: c7.Ay.Sizes.SMALLER,
                                    active: !0,
                                }),
                            });
                    }),
                    e
                );
            }, [n, i]);
            return (0, S.jsx)(nj.Z, {
                selectionMode: "single",
                onSelectionChange: (e) => {
                    t(e);
                },
                value: e,
                options: s,
            });
        },
    }),
    Nl = (0, o.zZ)(d.X.CONTENT_AND_SOCIAL_PERMISSIONS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.eYaT7L),
        useInlineNotice: function () {
            let e = bt(),
                t = f7();
            if ((0, bY.Tx)() === bX.YG) return e ?? t;
        },
        buildLayout: () => [Ni, b7, Nn, b2, b$],
    }),
    Ns = (0, o.dT)(d.X.CONTENT_AND_SOCIAL_MAIN_TAB, {
        getTitle: () => g.intl.string(g.t["/7xJCF"]),
        buildLayout: () => [bv, Nl, bL, bz],
    }),
    Na = (0, o.dT)(d.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_TAB, {
        initialize: () => {
            xI.A.fetch();
        },
        getTitle: () => g.intl.string(g.t.YpCiMt),
        buildLayout: () => [f2],
    }),
    Nr = (0, o.t_)(d.X.CONTENT_AND_SOCIAL_PANEL, {
        useTitle: () => g.intl.string(g.t["+o1pDZ"]),
        buildLayout: () => [Ns, Na],
    }),
    No = (0, o.i4)(d.X.CONTENT_AND_SOCIAL_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["+o1pDZ"]),
        icon: cN.i,
        buildLayout: () => [Nr],
    });
var Nd = n(254138),
    Nu = n(157559),
    Nc = n(975648),
    Ng = n(837245);
let N_ = (0, o.E2)(d.X.DATA_HARVEST_REQUEST_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t.dmBSKo)],
        Component: function () {
            let e = (0, O.bG)([t5.default], () => t5.default.getCurrentUser()),
                { currentHarvestType: t, awaitingInitialRequest: i } = (0, O.cf)([Nc.A], () => ({
                    currentHarvestType: Nc.A.harvestType,
                    awaitingInitialRequest: Nc.A.requestingHarvest,
                })),
                [l, s] = x.useState(!1);
            if (null == e) return null;
            let a = (0, ap.Oj)(t, e) || i,
                r = null != t && aN()().diff(aN()(t.created_at), "days") < q.n83,
                o = a && r,
                d = e.isStaff(),
                u = !e.verified;
            return (0, S.jsxs)(fK.h, {
                children: [
                    (0, S.jsx)(fK._, {
                        header: g.intl.string(g.t.XAHCgJ),
                        description: g.intl.format(g.t.P3kNfr, {
                            helpdeskArticle: tr.A.getArticleURL(q.MVz.GDPR_REQUEST_DATA),
                        }),
                    }),
                    o
                        ? (0, S.jsx)(ea.Z, {
                              className: Ng.N,
                              children: (0, S.jsx)(k.E, {
                                  variant: "text-md/normal",
                                  children: g.intl.format(g.t.RNDlV9, {
                                      date: aN()(t.created_at).add(q.n83, "days").format("MMMM Do YYYY"),
                                  }),
                              }),
                          })
                        : d
                          ? (0, S.jsx)(ea.Z, {
                                className: Ng.N,
                                children: (0, S.jsx)(k.E, {
                                    variant: "text-md/normal",
                                    children: g.intl.string(g.t.ZPQLH2),
                                }),
                            })
                          : (0, S.jsxs)(S.Fragment, {
                                children: [
                                    u
                                        ? (0, S.jsx)(ea.Z, {
                                              className: Ng.N,
                                              children: (0, S.jsx)(k.E, {
                                                  variant: "text-md/normal",
                                                  children: g.intl.string(g.t.c1f88z),
                                              }),
                                          })
                                        : null,
                                    (0, S.jsx)("div", {
                                        className: Ng.x,
                                        children: (0, S.jsx)(eh.$, {
                                            variant: "primary",
                                            text: g.intl.string(g.t.dmBSKo),
                                            disabled: a,
                                            onClick: () => {
                                                ((e) => {
                                                    let { onConfirm: t } = e;
                                                    (0, b.openModalLazy)(async () => {
                                                        let { default: e } = await n.e("81153").then(n.bind(n, 890904));
                                                        return (n) => (0, S.jsx)(e, { modalProps: n, onConfirm: t });
                                                    });
                                                })({
                                                    onConfirm: (e) => {
                                                        s(!0),
                                                            (0, Ac.$I)(e)
                                                                .then(
                                                                    (e) => (
                                                                        null != e &&
                                                                            null != e.body &&
                                                                            i3.h.dispatch({
                                                                                type: "UPDATE_DATA_HARVEST_TYPE",
                                                                                harvestType: e.body,
                                                                            }),
                                                                        e
                                                                    ),
                                                                )
                                                                .then(
                                                                    (e) => {
                                                                        null != e && null != e.body
                                                                            ? Nu.A.show({
                                                                                  title: g.intl.string(g.t.i2iul5),
                                                                                  body: g.intl.string(g.t["6Nmv4i"]),
                                                                              })
                                                                            : Nu.A.show({
                                                                                  title: g.intl.string(g.t.OjbtDm),
                                                                                  body: g.intl.string(g.t["0F5Jyt"]),
                                                                              });
                                                                    },
                                                                    (e) => {
                                                                        let t =
                                                                            e?.message ||
                                                                            e?.body?.message ||
                                                                            g.intl.string(g.t["0F5Jyt"]);
                                                                        Nu.A.show({
                                                                            title: g.intl.string(g.t.OjbtDm),
                                                                            body: t,
                                                                        });
                                                                    },
                                                                )
                                                                .finally(() => s(!1));
                                                    },
                                                });
                                            },
                                            loading: l || i,
                                        }),
                                    }),
                                ],
                            }),
                ],
            });
        },
    }),
    Nm = (0, o.zZ)(d.X.DATA_REQUEST_CATEGORY, {
        useTitle: () => g.intl.string(g.t.VjDjpb),
        initialize: () => {
            i3.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_START" }),
                i5.Bo.get({ url: q.Rsh.USER_HARVEST, oldFormErrors: !0, rejectWithError: !1 })
                    .then((e) => {
                        i3.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body });
                    })
                    .catch((e) => {
                        i3.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_FAILURE", error: e });
                    });
        },
        buildLayout: () => [N_],
    });
var Nh = n(290595),
    NA = n(153488);
let Np = (0, o.zD)(d.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING, {
        useTitle: () => g.intl.string(g.t.AGDDkH),
        useSubtitle: () => g.intl.string(g.t["wW9/zQ"]),
        useValue: () => c.Q$.useSetting(),
        setValue: (e) => xM.eQ({ allowVoiceRecording: e }),
    }),
    NT = (0, o.v_)(d.X.DATA_USAGE_DISCLAIMER_SETTING, {
        useTitle: () => g.intl.string(g.t.D60Gfj),
        useSubtitle: () =>
            g.intl.format(g.t.R5N31P, {
                onClick: () =>
                    (0, ey.openUserSettings)(
                        (0, TB.pC)("DataUsageDisclaimer") ? d.X.ACCOUNT_REMOVAL_CATEGORY : d.X.ACCOUNT_REMOVAL_SETTING,
                    ),
            }),
    }),
    NE = (0, o.zD)(d.X.DATA_USAGE_PERSONALIZATION_SETTING, {
        useTitle: () => g.intl.string(g.t.MNKzyg),
        useSubtitle: () =>
            g.intl.format(g.t["eQL/Mr"], { helpdeskArticle: tr.A.getArticleURL(q.MVz.DATA_USED_FOR_RECOMMENDED) }),
        useValue: function () {
            return (0, O.bG)([NA.A], () => NA.A.hasConsented(q.YAq.PERSONALIZATION));
        },
        setValue: function (e) {
            e
                ? (0, Nh.U)([q.YAq.PERSONALIZATION], []).catch(b8.i)
                : (0, b8.O)({
                      header: g.intl.string(g.t["9SNpzv"]),
                      confirmText: g.intl.string(g.t["9g5UGw"]),
                      cancelText: g.intl.string(g.t["+ZLPw9"]),
                      onConfirm: () => {
                          (0, Nh.U)([], [q.YAq.PERSONALIZATION]).catch(b8.i);
                      },
                      body: g.intl.string(g.t.gJvDDh),
                  });
        },
        useDisabled: be.uM,
    }),
    NS = (0, o.zD)(d.X.DATA_USAGE_QUESTS_3P_SETTING, {
        useTitle: () => g.intl.string(g.t.CyLYKZ),
        useSubtitle: () =>
            g.intl.format(g.t["2QFDU/"], { helpdeskArticle: tr.A.getArticleURL(q.MVz.QUESTS_PRIVACY_CONTROLS) }),
        useValue: function () {
            return !c.vf.useSetting();
        },
        setValue: function (e) {
            c.vf.updateSetting(!e);
        },
        useDisabled: function () {
            let e = c.H1.useSetting(),
                t = (0, be.uM)();
            return e || t;
        },
        useSearchTerms: () => [g.intl.string(g.t.CyLYKZ)],
    }),
    Nx = (0, o.zD)(d.X.DATA_USAGE_QUESTS_SETTING, {
        useTitle: () => g.intl.string(g.t.sJYh5t),
        useSubtitle: () =>
            g.intl.format(g.t.cf9mvV, { helpdeskArticle: tr.A.getArticleURL(q.MVz.QUESTS_PRIVACY_CONTROLS) }),
        useValue: function () {
            return !c.H1.useSetting();
        },
        setValue: function (e) {
            c.H1.updateSetting(!e);
        },
        useSearchTerms: () => [g.intl.string(g.t.VkS7Yd)],
        useDisabled: be.uM,
    }),
    Nf = (0, o.zD)(d.X.DATA_USAGE_STATISTICS_SETTING, {
        useTitle: () => g.intl.string(g.t.XuADY2),
        useSubtitle: () =>
            g.intl.format(g.t["igTSG/"], { helpdeskArticle: tr.A.getArticleURL(q.MVz.DATA_PRIVACY_CONTROLS) }),
        useValue: function () {
            return (0, O.bG)([NA.A], () => NA.A.hasConsented(q.YAq.USAGE_STATISTICS));
        },
        setValue: function (e) {
            e
                ? (0, Nh.U)([q.YAq.USAGE_STATISTICS], []).catch(b8.i)
                : (0, b8.O)({
                      header: g.intl.string(g.t.OdPCbN),
                      body: g.intl.string(g.t.MGWabA),
                      confirmText: g.intl.string(g.t["D3+rU4"]),
                      cancelText: g.intl.string(g.t.kYpG0u),
                      onConfirm: () => (0, Nh.U)([], [q.YAq.USAGE_STATISTICS]).catch(b8.i),
                  });
        },
        useSearchTerms: () => [g.intl.string(g.t.XuADY2)],
        useDisabled: be.uM,
    }),
    Nb = (0, o.zZ)(d.X.DATA_USAGE_CATEGORY, {
        useTitle: () => g.intl.string(g.t.bvw42E),
        useInlineNotice: bt,
        initialize: () => {
            NA.A.fetchedConsents || (0, Nh.Q)();
        },
        buildLayout: () => [Nf, Nx, NS, NE, Np, NT],
    });
function NN() {
    let e = c.JG.useSetting();
    return (0, O.bG)([K.Ay, H.A], () => {
        let t = new Set(e);
        return K.Ay.getFlattenedGuildIds().filter((e) => null != H.A.getGuild(e) && !t.has(e));
    }, [e]);
}
let NC = {
        type: ef.wF.STACKED_ICONS,
        useIcons: function () {
            let e = NN(),
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
                        frontIcon: { icon: (0, S.jsx)(Y.$, { guild: t[0], size: 48 }), shape: ef.NF.SQUIRCLE },
                        backIcon: { icon: (0, S.jsx)(Y.$, { guild: t[1], size: 48 }), shape: ef.NF.SQUIRCLE },
                    }
                  : { frontIcon: { icon: (0, S.jsx)(Y.$, { guild: t[0], size: 48 }), shape: ef.NF.SQUIRCLE } };
        },
    },
    NI = (0, o.AK)(d.X.PROFILE_PRIVACY_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: function () {
            let e = NN();
            if (0 === e.length) return g.intl.format(g.t.QJIJ5p, {});
            let t = H.A.getGuild(e[0]),
                n = t?.name ?? "",
                i = e.length - 1;
            return 0 === i
                ? g.intl.format(g.t["T+8J4A"], { guildName: n })
                : g.intl.format(g.t["3JyODQ"], { guildName: n, count: i });
        },
        useTrailingDecoration: function () {
            return NC;
        },
        destinationKey: d.X.ACTIVITY_PRIVACY_PANEL,
    }),
    Nv = (0, o.gN)(d.X.PROFILE_PRIVACY_RELATED_SETTINGS, { buildLayout: () => [NI] }),
    Ny = (0, o.Qx)(d.X.PROFILE_PRIVACY_SETTING, {
        useTitle: () => g.intl.string(g.t.Qnf32C),
        useOptions: () => [
            { name: g.intl.string(g.t.Boxc8R), desc: g.intl.string(g.t["nLj+nc"]), value: f.KP.FRIENDS_AND_ALL_GUILDS },
            { name: g.intl.string(g.t.YOIKBt), desc: g.intl.string(g.t.y0JZ4s), value: f.KP.FRIENDS_AND_SMALL_GUILDS },
            { name: g.intl.string(g.t.u0nlJv), desc: g.intl.string(g.t["4jnKHu"]), value: f.KP.FRIENDS_ONLY },
        ],
        useValue: c.KP.useSetting,
        setValue: function (e) {
            let t = c.KP.getSetting();
            if ((c.KP.updateSetting(e), !(0, p.W1)("ProfilePrivacySetting"))) return;
            let i = (0, N.gS)(t, e);
            null != i &&
                (0, b.openModalLazy)(async () => {
                    let { default: e } = await n.e("63786").then(n.bind(n, 413201));
                    return (t) =>
                        (0, S.jsx)(e, {
                            ...t,
                            direction: i.direction,
                            affectedGuildIds: i.affectedGuildIds,
                            settingName: i.settingName,
                            mappedActivityValue: i.mappedActivityValue,
                        });
                });
        },
        useSearchTerms: () => [g.intl.string(g.t.Qnf32C)],
    }),
    Nj = (0, o.zZ)(d.X.PROFILE_PRIVACY_CATEGORY, {
        usePredicate: () => (0, p.lX)("ProfilePrivacyCategory"),
        useTitle: () => g.intl.string(g.t.ul884f),
        useSubtitle: () => g.intl.string(g.t.J0SFL2),
        buildLayout: () => [Ny, Nv],
    });
var NO = n(814278),
    NR = n(936388),
    NL = n(714763);
let ND = (0, o.zD)(d.X.PERSISTENT_VERIFICATION_CODES_SETTING, {
    useTitle: () => g.intl.string(g.t["opi/XK"]),
    useSubtitle: () => g.intl.format(g.t["/T+ZlP"], { helpArticle: (0, NO.Lu)() }),
    useValue: function () {
        return (0, O.bG)([NL.A], () => NL.A.getPersistentCodesEnabled());
    },
    setValue: function (e) {
        NR.A.updatePersistentCodesEnabled(e);
    },
});
var NG = n(787392);
function NP() {
    return (0, O.yK)([NG.A], () => NG.A.getUserIds());
}
var NM = n(803306),
    NU = n(966327),
    Nk = n(882129);
function NV(e) {
    let { userId: t, count: n } = e,
        { analyticsLocations: i } = (0, iM.Ay)(),
        l = (0, O.bG)([t5.default], () => t5.default.getUser(t)),
        s = pT.Ay.getFormattedName(l),
        a = x.useCallback(() => {
            (0, NO.kj)(t);
        }, [t]),
        r = x.useCallback(() => (0, Ap.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: i }), [t, i]);
    return (
        x.useEffect(() => {
            (0, NM.wz)(t);
        }, [t]),
        (0, S.jsxs)("div", {
            className: Nk.uW,
            children: [
                null != l && (0, S.jsx)(NU.A, { className: Nk.my, user: l, size: nY._3.SIZE_40 }),
                (0, S.jsxs)("div", {
                    className: Nk.Qq,
                    children: [
                        (0, S.jsx)(U.D, {
                            className: Nk.Xh,
                            onClick: r,
                            children: (0, S.jsx)(k.E, {
                                variant: "text-md/semibold",
                                color: "interactive-text-active",
                                children: s,
                            }),
                        }),
                        (0, S.jsx)(k.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            children: g.intl.format(g.t["/MBjYF"], { count: n }),
                        }),
                    ],
                }),
                (0, S.jsx)(U.D, { onClick: a, className: Nk.Qz, children: (0, S.jsx)(sS.u, { size: "xs" }) }),
            ],
        })
    );
}
function Nw(e) {
    let { className: t, userId: n, verification: i, index: l } = e,
        s = (0, NO.tC)(i.timestamp),
        a = x.useCallback(() => {
            (0, NO.W0)(n, i.verifiedKey);
        }, [i.verifiedKey, n]);
    return (0, S.jsxs)("div", {
        className: t,
        children: [
            (0, S.jsxs)("div", {
                className: Nk.Qq,
                children: [
                    (0, S.jsx)(k.E, {
                        variant: "text-sm/semibold",
                        color: "interactive-text-active",
                        children: g.intl.format(g.t.N4qBBO, { index: l + 1 }),
                    }),
                    (0, S.jsx)(k.E, { variant: "text-sm/medium", color: "text-default", children: s }),
                ],
            }),
            (0, S.jsx)(U.D, {
                className: Nk.Kk,
                onClick: a,
                children: (0, S.jsx)(cU.P, { size: "md", color: w.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function NB(e) {
    let { userId: t } = e,
        n = (0, O.yK)([NG.A], () =>
            eR()(NG.A.getUserVerifiedKeys(t))
                .entries()
                .map((e) => {
                    let [t, n] = e;
                    return { verifiedKey: t, timestamp: n };
                })
                .sortBy((e) => -1 * e.timestamp)
                .value(),
        );
    return (0, S.jsxs)(S.Fragment, {
        children: [
            (0, S.jsx)(NV, { userId: t, count: n.length }),
            n.map((e, i) =>
                (0, S.jsxs)(
                    x.Fragment,
                    {
                        children: [
                            (0, S.jsx)(Nw, { className: Nk.nM, userId: t, index: i, verification: e }),
                            i !== n.length - 1 && (0, S.jsx)("div", { className: Nk.yF }),
                        ],
                    },
                    `${i}-${e.timestamp}`,
                ),
            ),
        ],
    });
}
var NF = n(691263);
let Nz = (0, o.E2)(d.X.USERS_VERIFIED_KEYS_LIST_SETTING, {
        useSearchTerms: () => [g.intl.string(g.t["5b3FNI"])],
        usePredicate: function () {
            let e = NP();
            return null != e && e.length > 0;
        },
        Component: function () {
            let e = NP();
            return (0, S.jsxs)(fK.h, {
                children: [
                    (0, S.jsx)(fK._, {
                        header: g.intl.string(g.t["5b3FNI"]),
                        description: g.intl.format(g.t.jrTSWU, { helpArticle: (0, NO.dc)() }),
                    }),
                    e.map((e) => (0, S.jsx)("div", { className: NF.A, children: (0, S.jsx)(NB, { userId: e }) }, e)),
                ],
            });
        },
    }),
    NX = (0, o.zZ)(d.X.VOICE_SECURITY_CATEGORY, {
        useTitle: () => g.intl.string(g.t.xVk85F),
        useInlineNotice: function () {
            return x.useMemo(
                () => ({
                    type: ef.lT.INLINE_NOTICE,
                    noticeType: "info",
                    useText: () => g.intl.format(g.t["/6sFWa"], { helpArticle: (0, NO.aW)() }),
                }),
                [],
            );
        },
        usePredicate: () => (0, ev.isDesktop)(),
        buildLayout: () => [ND, Nz],
    }),
    NY = (0, o.t_)(d.X.DATA_AND_PRIVACY_PANEL, {
        useTitle: () => g.intl.string(g.t.OAuOHD),
        buildLayout: () => [Nb, Nj, Nm, NX],
    }),
    NH = (0, o.i4)(d.X.DATA_AND_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.OAuOHD),
        icon: Nd.m,
        buildLayout: () => [NY],
    });
var NK = n(782603);
let NW = (0, o.Hn)(d.X.MOBILE_NOTIFICATION_DELAY, {
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
    NZ = (0, o.zD)(d.X.TEXT_TO_SPEECH_COMMAND, {
        useTitle: () => g.intl.string(g.t["btbS+Z"]),
        useSubtitle: () =>
            g.intl.format(g.t.Q5crhR, { onClick: () => (0, ey.openUserSettings)(d.X.TTS_PLAYBACK_RATE) }),
        useValue: c.on.useSetting,
        setValue: c.on.updateSetting,
    }),
    Nq = (0, o.Qx)(d.X.TEXT_TO_SPEECH_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.JZxxGx),
        useSubtitle: () => g.intl.string(g.t.HDLtJl),
        useValue: () => (0, O.bG)([o$.A], () => o$.A.getTTSType()),
        setValue: (e) => o3.default.setTTSType(e),
        useOptions: () => [
            { name: g.intl.string(g.t.B1AGeJ), value: q.aVn.ALL_CHANNELS },
            { name: g.intl.string(g.t.uzZg9e), value: q.aVn.SELECTED_CHANNEL },
            { name: g.intl.string(g.t.DYO5Oi), value: q.aVn.NEVER },
        ],
        usePredicate: () => n8.$j,
    }),
    NQ = d.X.NOTIFICATIONS_ADVANCED_ACCORDION,
    NJ = (0, o.bd)(NQ, {
        useTitle: (e) => (e ? g.intl.string(g.t.RyimDk) : g.intl.string(g.t.CUICbO)),
        useCollapsedSubtitle: function () {
            return rZ(NQ, {
                formatter: (e) => {
                    let { title: t, index: n } = e;
                    return "string" != typeof t
                        ? t
                        : 0 === n
                          ? `${t.charAt(0).toLocaleUpperCase()}${t.slice(1).toLocaleLowerCase()}`
                          : t.toLocaleLowerCase();
                },
            });
        },
        buildLayout: () => [NW, NZ, Nq],
    }),
    N$ = (0, o.zZ)(d.X.NOTIFICATIONS_ADVANCED_CATEGORY, {
        useTitle: () => g.intl.string(g.t["31DySj"]),
        buildLayout: () => [NJ],
    }),
    N0 = (0, o.zD)(d.X.ENABLE_UNREAD_MESSAGE_BADGE, {
        useTitle: () => g.intl.string(g.t.VH8AIJ),
        useSubtitle: () => g.intl.string(g.t["9K4qwX"]),
        useValue: () => (0, O.bG)([o$.A], () => !o$.A.getDisableUnreadBadge()),
        setValue: (e) => o3.default.setDisableUnreadBadge(!e),
    }),
    N1 = (0, o.zZ)(d.X.NOTIFICATIONS_BADGES_CATEGORY, {
        useTitle: () => g.intl.string(g.t.l6w3Vj),
        buildLayout: () => [N0],
    });
var N2 = n(100406),
    N5 = n(878460),
    N3 = n(431144);
let N8 = N3.px.map((e) =>
        (0, o.zD)(`${d.X.EMAIL_LIST_ITEM_PREFIX}${e.category}`, {
            useTitle: e.label,
            useSubtitle: e.subLabel,
            useValue: () =>
                ((e) => {
                    let { categories: t } = (0, O.cf)([N5.A], () => N5.A.getEmailSettings());
                    return !!t[e];
                })(e.category),
            setValue: (t) => (0, N2.CA)(e.category, t),
        }),
    ),
    N4 = (0, o.Tf)(d.X.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
        useTitle: () => g.intl.string(g.t.Ra9Pwk),
        useSubtitle: () => g.intl.string(g.t.iYjQ8X),
        useLabel: () => g.intl.string(g.t.KT1pBA),
        useDisabled: () => {
            let { categories: e } = (0, O.cf)([N5.A], () => N5.A.getEmailSettings());
            return N3.Zk.every((t) => !e[t]);
        },
        onClick: () => (0, N2.NI)(),
        useVariant: () => "critical-secondary",
    }),
    N9 = (0, o.zZ)(d.X.NOTIFICATIONS_EMAIL_CATEGORY, {
        useTitle: () => g.intl.string(g.t["w/qqKK"]),
        initialize: function () {
            let { initialized: e } = N5.A.getEmailSettings();
            e || (0, N2.cR)();
        },
        buildLayout: () => [...N8, N4],
    }),
    N7 = (0, o.zD)(d.X.DESKTOP_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t["/0WCll"]),
        useSubtitle: () => g.intl.string(g.t.wF9ih3),
        useValue: () => (0, O.bG)([o$.A], () => o$.A.getDesktopType()) !== q.nRU.NEVER,
        setValue: (e) => o3.default.setDesktopType(e ? q.nRU.ALL : q.nRU.NEVER),
    });
var N6 = n(832712),
    Ce = n(543465),
    Ct = n(406535),
    Cn = n(790782);
let Ci = (0, o.zD)(d.X.EXPERIMENTAL_UNREADS, {
    useTitle: () => g.intl.string(g.t["k6m/si"]),
    useSubtitle: () => g.intl.string(g.t.LGynPs),
    useValue: () => (0, O.bG)([Ce.Ay], () => Ce.Ay.useNewNotifications),
    setValue: function (e) {
        N6.A.setAccountFlag(Ct.i.USE_NEW_NOTIFICATIONS, e),
            e ||
                (hI.w.set("turnedOffNewNotifications", !0),
                X.default.track(q.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: H.A.getGuildsArray().filter(
                        (e) => Ce.Ay.resolveGuildUnreadSetting(e) === Cn.e.ONLY_MENTIONS,
                    ).length,
                }));
    },
    usePredicate: () =>
        (0, O.bG)(
            [t5.default, Ce.Ay],
            () =>
                t5.default.getCurrentUser()?.isStaff() ||
                t5.default.getCurrentUser()?.isStaffPersonal() ||
                Ce.Ay.useNewNotifications,
        ),
});
var Cl = n(70730);
let Cs = (0, o.zD)(d.X.FRIEND_ANNIVERSARY_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.NjOMvh),
        usePersistentBadge: () => ({ badgeType: ef.Xi.BETA }),
        useValue: c.oz.useSetting,
        setValue: function (e) {
            c.oz.updateSetting(e),
                X.default.track(q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
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
    Ca = (0, A.mj)({
        kind: "user",
        name: "2026-03-friend-is-online-v3",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 } },
    }),
    Cr = (0, o.zD)(d.X.FRIEND_ONLINE_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.sQQgFj),
        useValue: c.NR.useSetting,
        setValue: function (e) {
            c.NR.updateSetting(e),
                X.default.track(q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Ct.Y.ACCOUNT,
                    friend_online_notifications: e,
                });
        },
        usePredicate: () => Ca.useConfig({ location: "FriendOnlineNotifications" }).showSettingsToggle,
    }),
    Co = (0, A.mj)({
        name: "2026-03-game-update-notification",
        kind: "user",
        defaultConfig: { showToggle: !1 },
        variations: { 0: { showToggle: !1 }, 1: { showToggle: !0 } },
    });
var Cd = n(275007);
let Cu = (0, o.zD)(d.X.GAME_UPDATE_NOTIFICATIONS, {
    useTitle: () => g.intl.string(Cd.default["ZZIP+o"]),
    useValue: c.JV.useSetting,
    setValue: function (e) {
        c.JV.updateSetting(e),
            X.default.track(q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                update_type: Ct.Y.ACCOUNT,
                game_update_notifications: e,
            });
    },
    usePredicate: () => Co.useConfig({ location: "SettingsRendererConfig" }).showToggle,
});
var Cc = n(571524);
let Cg = (0, o.zD)(d.X.GDM_ALL_REACTION_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.nvkXtr),
        useValue: c.c3.useSetting,
        setValue: function (e) {
            c.c3.updateSetting(e),
                X.default.track(q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Ct.Y.ACCOUNT,
                    gdm_all_reaction_notifications: e,
                });
        },
        usePredicate: function () {
            return (0, Cc.h)("GdmAllReactionNotification").showSettingsToggle;
        },
    }),
    C_ = (0, o.zD)(d.X.GO_LIVE_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.FSNIvs),
        useValue: c.Yh.useSetting,
        setValue: function (e) {
            c.Yh.updateSetting(e),
                X.default.track(q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Ct.Y.ACCOUNT,
                    go_live_notifications: e,
                });
        },
    }),
    Cm = (0, A.mj)({
        kind: "user",
        name: "2026-01-profile-updates-notification",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 0: { showSettingsToggle: !1 }, 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 } },
    }),
    Ch = (0, o.zD)(d.X.PROFILE_UPDATES_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.xBLMhQ),
        useValue: c.T3.useSetting,
        setValue: function (e) {
            c.T3.updateSetting(e),
                X.default.track(q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Ct.Y.ACCOUNT,
                    profile_updates_notifications: e,
                });
        },
        usePredicate: () => Cm.useConfig({ location: "user_settings.ProfileUpdatesNotifications" }).showSettingsToggle,
    });
var CA = n(815807);
let Cp = (0, o.Hn)(d.X.REACTION_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.Wxj9Hp),
        useOptions: () => [
            { id: "enabled", label: g.intl.string(g.t["9x/RtT"]), value: f.Tz.NOTIFICATIONS_ENABLED },
            { id: "only_dms", label: g.intl.string(g.t.fJAbQd), value: f.Tz.ONLY_DMS },
            { id: "disabled", label: g.intl.string(g.t["xu+UDU"]), value: f.Tz.NOTIFICATIONS_DISABLED },
        ],
        useValue: c.Zp.useSetting,
        setValue: (e) => (0, CA.n4)(e, c.Zp.getSetting()),
    }),
    CT = (0, o.zD)(d.X.SERVER_TRENDING_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t["k51K1+"]),
        useValue: c.Qr.useSetting,
        setValue: function (e) {
            c.Qr.updateSetting(e),
                X.default.track(q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Ct.Y.ACCOUNT,
                    server_trending_notifications: e,
                });
        },
        usePredicate: () => !1,
    }),
    CE = (0, A.mj)({
        kind: "user",
        name: "2026-04-upcoming-server-event",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 }, 3: { showSettingsToggle: !0 } },
    }),
    CS = (0, o.zD)(d.X.UPCOMING_SERVER_EVENT_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.G8NPz6),
        useValue: c.zS.useSetting,
        setValue: function (e) {
            c.zS.updateSetting(e),
                X.default.track(q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: Ct.Y.ACCOUNT,
                    upcoming_server_event_notifications: e,
                });
        },
        usePredicate: () => CE.useConfig({ location: "UpcomingServerEventNotifications" }).showSettingsToggle,
    }),
    Cx = (0, o.FW)(d.X.NOTIFICATION_SELECTION_FIELD_SET, {
        variant: "compact",
        useTitle: () => g.intl.string(g.t.FEVRDV),
        buildLayout: () => [C_, Cs, Cr, CT, CS, Cu, Ch, Cp, Cg],
    }),
    Cf = (0, o.zD)(d.X.TASK_BAR_FLASHING, {
        useTitle: () => g.intl.string(g.t.xSmFQG),
        useSubtitle: () => g.intl.string(g.t.bd4j4x),
        useValue: () => (0, O.bG)([o$.A], () => o$.A.taskbarFlash),
        setValue: (e) => o3.default.setTaskbarFlash(e),
        usePredicate: () => (0, le.uF)(),
    }),
    Cb = (0, o.zZ)(d.X.NOTIFICATIONS_OVERVIEW_CATEGORY, {
        useTitle: () => g.intl.string(g.t["/dp6yY"]),
        buildLayout: () => [N7, Cf, Cx, Ci],
    });
var CN = n(965957),
    CC = n(312671),
    CI = n(235079);
let Cv = (0, o.zD)(d.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
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
        tj()(null != t, "predicate should fail if no soundpack is available"), (0, CN.p)(e ? t : CI.i.CLASSIC);
    },
    usePredicate: o0.A.useIsEligible,
});
var Cy = n(970931);
let Cj = {
        useTitle: () => g.intl.string(g.t.jD1qzM),
        sound: "message1",
        useDisabled: Cy.kB,
        useDisabledMessage: () => ((0, Cy.kB)() ? g.intl.string(g.t.cIRG0s) : void 0),
    },
    CO = { useTitle: () => g.intl.string(g.t.XBrJT6), sound: "call_ringing" },
    CR = (0, o.zD)(d.X.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => g.intl.string(g.t.TzjwV9),
        useSubtitle: () => g.intl.format(g.t.OOiGCM, { onClick: () => o9("message3") }),
        useValue: () =>
            (0, O.bG)([o$.A], () => o$.A.getNotifyMessagesInSelectedChannel() && !o$.A.getDisableAllSounds()),
        setValue: (e) => o3.default.setNotifyMessagesInSelectedChannel(e),
        useDisabled: () => (0, O.bG)([o$.A], () => o$.A.getDisableAllSounds()),
    }),
    CL = (0, o.zD)(d.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => g.intl.string(g.t["2ZhCOd"]),
        useSubtitle: () => g.intl.string(g.t.EAKdPr),
        useValue: () => (0, O.bG)([o$.A], () => o$.A.getDisableAllSounds()),
        setValue: (e) => o3.default.toggleDisableAllSounds(e),
    }),
    CD = (0, o.D1)(d.X.NOTIFICATION_SOUNDS_LIST, {
        initialize: function () {
            return () => {
                o4();
            };
        },
        buildLayout: () => [o7(Cj), CR, o7(CO), CL],
    }),
    CG = (0, o.AK)(d.X.NOTIFICATIONS_TO_VOICE_AND_VIDEO_SOUNDS_NAVIGATOR, {
        useSubtitle: () => g.intl.string(g.t["MMy+lm"]),
        useSearchTerms: () => [g.intl.string(g.t["MMy+lm"])],
        destinationKey: d.X.SOUNDS_CATEGORY,
    }),
    CP = (0, o.gN)(d.X.NOTIFICATIONS_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [CG] }),
    CM = (0, o.zZ)(d.X.NOTIFICATIONS_SOUNDS_CATEGORY, {
        useTitle: () => g.intl.string(g.t.LweOYy),
        buildLayout: () => [Cv, CD, CP],
    }),
    CU = (0, o.t_)(d.X.NOTIFICATIONS_PANEL, {
        useTitle: () => g.intl.string(g.t.HcoRu0),
        buildLayout: () => [Cb, CM, N1, N9, N$],
    }),
    Ck = (0, o.i4)(d.X.NOTIFICATIONS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.HcoRu0),
        icon: NK.X,
        buildLayout: () => [CU],
    }),
    CV = (0, o.WI)(d.X.USER_SECTION, {
        useTitle: () => g.intl.string(g.t.cduTBL),
        buildLayout: () => [
            xN,
            No,
            NH,
            ...((0, TB.pC)("UserSection") ? [] : [xh]),
            xR,
            ...((0, TB.pC)("UserSection") ? [] : [Ez]),
            fX,
            Ck,
            x7,
        ],
    });
var Cw = n(387758),
    CB = n(271866),
    CF = n(147964),
    Cz = n(867099);
let CX = (0, o.zD)(d.X.APPLICATION_TEST_MODE, {
        useTitle: () => g.intl.string(g.t.erOqlh),
        useSubtitle: () => g.intl.string(g.t["52hMnD"]),
        usePredicate: c.Q_.useSetting,
        useValue: () => (0, O.bG)([CF.A], () => null != CF.A.testModeApplicationId),
        setValue: (e) => {
            e ? (0, b.openModal)((e) => (0, S.jsx)(Cz.A, { ...e })) : CB.cL();
        },
    }),
    CY = (0, o.zD)(d.X.DEVELOPER_MODE, {
        useTitle: () => g.intl.string(g.t.ObIb1Q),
        useSubtitle: () => g.intl.format(g.t["CY6q/Q"], { apiDocsUrl: q.X7G.API_DOCS }),
        useValue: c.Q_.useSetting,
        setValue: c.Q_.updateSetting,
        usePredicate: () => u4.p5,
    }),
    CH = (0, o.zZ)(d.X.DEVELOPER_CATEGORY, { buildLayout: () => [CY, CX] }),
    CK = (0, o.t_)(d.X.DEVELOPER_PANEL, { useTitle: () => g.intl.string(g.t["0BRxRp"]), buildLayout: () => [CH] }),
    CW = (0, o.i4)(d.X.DEVELOPER_SIDEBAR_ITEM, {
        icon: Cw.G,
        useTitle: () => g.intl.string(g.t["0BRxRp"]),
        buildLayout: () => [CK],
    });
var CZ = n(70688),
    Cq = n(830215);
let CQ = (0, o.i4)(d.X.LOGOUT_SIDEBAR_ITEM, {
        variant: "destructive",
        useTitle: () => g.intl.string(g.t["2jxGer"]),
        icon: CZ.o,
        onClick: () => {
            (0, lt.A)({
                title: g.intl.string(g.t["2jxGer"]),
                subtitle: g.intl.string(g.t.SUnWBB),
                confirmText: g.intl.string(g.t["2jxGer"]),
                onConfirm: () => {
                    Cq.A.logout("settings");
                },
            });
        },
        buildLayout: () => [],
    }),
    CJ = (0, o.WI)(d.X.UTILITY_SECTION, { buildLayout: () => [CW, CQ].filter(t3.Vq) }),
    C$ = (0, o.Hr)({ buildLayout: () => [Tw, CV, m5, dL, nB, Au, CJ], analyticsKey: "user_settings" });
