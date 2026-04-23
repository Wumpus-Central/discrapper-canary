n.d(t, { D: () => CQ });
var i,
    l,
    s,
    a,
    r,
    o,
    d = n(419954),
    u = n(780964),
    c = n(682348),
    g = n(253932),
    _ = n(985018),
    m = n(395277);
let h = (0, d.zD)(u.X.ACTIVITY_PRIVACY_SETTING, {
        useTitle: () => _.intl.string(m.default.WhdCGP),
        useSubtitle: () => _.intl.string(m.default.UQ9RHJ),
        useValue: g.tz.useSetting,
        setValue: g.tz.updateSetting,
    }),
    A = (0, d.zZ)(u.X.ACTIVITY_PRIVACY_SHARING_CATEGORY, {
        useTitle: () => _.intl.string(_.t["6x5uWQ"]),
        useSearchTerms: () => [_.intl.string(_.t["8ka8li"])],
        buildLayout: () => [h],
    });
var p = n(945810),
    E = n(21973);
let T = (0, p.mj)({
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
        let t = (0, E.lX)(e),
            n = T.useConfig({ location: e });
        return t || n.copyChanges;
    };
var x = n(627968),
    f = n(64700),
    b = n(873298),
    N = n(192308),
    C = n(365258);
let I = (0, d.Qx)(u.X.ACTIVITY_PRIVACY_PER_GUILD_DEFAULT_SETTING, {
        useTitle: () =>
            S("GuildActivitySharingDefaultSetting") ? _.intl.string(_.t.vpgck1) : _.intl.string(m.default["/LHVbt"]),
        useOptions: function () {
            let e = S("GuildActivitySharingDefaultSetting");
            return f.useMemo(
                () =>
                    e
                        ? [
                              {
                                  value: b.Qd.ACTIVITY_STATUS_OFF,
                                  name: _.intl.string(_.t.FzgQna),
                                  desc: _.intl.string(_.t.SQxoyc),
                              },
                              {
                                  value: b.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
                                  name: _.intl.string(_.t["1hvuGH"]),
                                  desc: _.intl.string(_.t.odUCPE),
                              },
                              { value: b.Qd.ACTIVITY_STATUS_ON, name: _.intl.string(_.t.fQc5la) },
                          ]
                        : [
                              { value: b.Qd.ACTIVITY_STATUS_ON, name: _.intl.string(_.t.UzGMH9) },
                              {
                                  value: b.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
                                  name: _.intl.string(m.default["/sAeRY"]),
                              },
                              { value: b.Qd.ACTIVITY_STATUS_OFF, name: _.intl.string(m.default.m3oL7Q) },
                          ],
                [e],
            );
        },
        useValue: g._Z.useSetting,
        setValue: function (e) {
            let t,
                i = g._Z.getSetting();
            if (
                (g._Z.updateSetting(e),
                (t = "GuildActivitySharingDefaultSetting"),
                !(0, E.W1)(t) && !T.getConfig({ location: t }).upsell)
            )
                return;
            let l = (0, C.g8)(i, e);
            if (null == l) return;
            let s = (0, C.Xc)(e);
            (0, N.openModalLazy)(async () => {
                let { default: e } = await n.e("41996").then(n.bind(n, 32167));
                return (t) =>
                    (0, x.jsx)(e, {
                        ...t,
                        direction: l.direction,
                        affectedGuildIds: l.affectedGuildIds,
                        settingName: s,
                    });
            });
        },
    }),
    v = (0, d.zZ)(u.X.ACTIVITY_PRIVACY_PER_GUILD_CATEGORY, {
        useTitle: () =>
            S("GuildActivitySharingCategory") ? _.intl.string(_.t.VDcvrR) : _.intl.string(m.default["1PougL"]),
        useSubtitle: () =>
            S("GuildActivitySharingCategory") ? _.intl.string(_.t["/Go08F"]) : _.intl.string(m.default.OO17Lg),
        buildLayout: () => [I],
    }),
    y = (0, d.AK)(u.X.ACTIVITY_PRIVACY_TO_PROFILE_PRIVACY_NAVIGATOR, {
        useSubtitle: () => _.intl.string(_.t.J0SFL2),
        destinationKey: u.X.DATA_AND_PRIVACY_PANEL,
    }),
    j = (0, d.gN)(u.X.ACTIVITY_PRIVACY_RELATED_SETTINGS, {
        usePredicate: () => (0, E.lX)("ActivityPrivacyRelatedSettings"),
        buildLayout: () => [y],
    });
var O = n(683071),
    R = n(17928),
    L = n(331322),
    D = n(243721),
    G = n(892547),
    P = n(922016),
    M = n(550079),
    U = n(477782),
    k = n(939249),
    V = n(834730),
    w = n(847374),
    B = n(661531),
    F = n(123292),
    z = n(140735),
    X = n(498642),
    Y = n(954571),
    H = n(743790),
    K = n(71393),
    W = n(711014),
    Z =
        (((i = {}).SERVER_ORDER = "server-order"),
        (i.RECENTLY_JOINED = "recently-joined"),
        (i.ACTIVITY_SHARING_ON = "activity-sharing-on"),
        (i.ACTIVITY_SHARING_OFF = "activity-sharing-off"),
        i);
let Q = {
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
    J = n(842449);
function $(e) {
    let { guild: t, isActivityRestricted: n, onToggleActivityRestrictedGuild: i } = e,
        l = (0, R.bG)([X.A], () => X.A.getMemberCount(t.id));
    return (0, x.jsxs)(L.B, {
        as: "li",
        direction: "horizontal",
        align: "center",
        gap: 16,
        children: [
            (0, x.jsx)("div", { className: J.FO, children: (0, x.jsx)(H.K, { guild: t, size: 48 }) }),
            (0, x.jsx)("div", {
                className: J.QH,
                children: (0, x.jsx)(D.d, {
                    label: t.name,
                    description: _.intl.format(_.t.zRl6XR, { count: l ?? 0 }),
                    checked: !n,
                    onChange: (e) => i({ checked: e, guildId: t.id }),
                }),
            }),
        ],
    });
}
let ee = function (e) {
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
            numActivityRestrictedGuilds: c,
            numTotalGuilds: h,
        } = (function () {
            let [e, t] = (0, f.useState)(""),
                [n, i] = (0, f.useState)("server-order"),
                l = (0, R.bG)([W.Ay], () => W.Ay.getFlattenedGuildIds()),
                s = (0, R.bG)([K.A], () => K.A.getGuilds()),
                a = l.map((e) => s[e]),
                r = g.Pw.useSetting(),
                [o, d] = (0, f.useState)(r);
            (0, f.useEffect)(() => {
                d(r);
            }, [r]);
            let u = async (e) => {
                    d(e);
                    try {
                        await g.Pw.updateSetting(e);
                    } catch (e) {
                        d(r);
                    }
                },
                c = 0 !== o.length,
                [_, m] = (0, f.useState)(() => Q[n](a, r)),
                h = _.map((e) => s[e.id]).filter(Boolean);
            return {
                guilds: "" === e ? h : h.filter((t) => t.name.toLowerCase().includes(e.toLowerCase())),
                sortOrder: n,
                searchQuery: e,
                setSortOrder: (e) => {
                    m(Q[e](a, r)), i(e);
                },
                setSearchQuery: t,
                onToggleActivityRestrictedGuild: (e) => {
                    let { checked: t, guildId: n } = e,
                        i = new Set(o);
                    t ? i.delete(n) : i.add(n), u([...i]);
                },
                isActivityRestricted: (e) => o.includes(e),
                hasActivityRestrictedGuilds: c,
                onToggleAllActivityRestrictedGuilds: () => {
                    c ? u([]) : u(l);
                },
                numTotalGuilds: l.length,
                numActivityRestrictedGuilds: o.length,
            };
        })(),
        A = (0, f.useId)(),
        p = (0, f.useRef)(null),
        E = (0, f.useMemo)(
            () => [
                { id: Z.SERVER_ORDER, label: _.intl.string(_.t.STMPJ2), value: Z.SERVER_ORDER },
                { id: Z.RECENTLY_JOINED, label: _.intl.string(_.t.CbaapP), value: Z.RECENTLY_JOINED },
                { id: Z.ACTIVITY_SHARING_ON, label: _.intl.string(m.default.ZI51JZ), value: Z.ACTIVITY_SHARING_ON },
                {
                    id: Z.ACTIVITY_SHARING_OFF,
                    label: _.intl.string(m.default["+kxafn"]),
                    value: Z.ACTIVITY_SHARING_OFF,
                },
            ],
            [],
        ),
        T = E.find((e) => e.value === s)?.label ?? "";
    return (0, x.jsxs)("div", {
        className: J.iE,
        children: [
            t,
            (0, x.jsxs)("div", {
                className: J.N1,
                children: [
                    (0, x.jsx)(G.I, {
                        query: i,
                        onChange: l,
                        onClear: () => {
                            Y.default.track(q.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_cleared",
                                sort_order: s,
                                activity_restricted_guild_count: c,
                                total_guild_count: h,
                            }),
                                l("");
                        },
                        onFocus: () =>
                            Y.default.track(q.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_focused",
                                sort_order: s,
                                activity_restricted_guild_count: c,
                                total_guild_count: h,
                            }),
                        onBlur: () =>
                            Y.default.track(q.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_blurred",
                                sort_order: s,
                                activity_restricted_guild_count: c,
                                total_guild_count: h,
                            }),
                        placeholder: _.intl.string(_.t["H+nRYw"]),
                        "aria-label": _.intl.string(_.t["5h0QOP"]),
                        inputProps: { "aria-controls": A, "aria-expanded": !0 },
                    }),
                    n.length > 0 &&
                        (0, x.jsxs)("div", {
                            className: J.gO,
                            children: [
                                (0, x.jsx)(P.Y, {
                                    targetElementRef: p,
                                    position: "bottom",
                                    align: "left",
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, x.jsx)(M.W, {
                                            navId: "guild-sort-order-menu",
                                            onClose: t,
                                            "aria-label": _.intl.string(_.t.LxVjvJ),
                                            onSelect: t,
                                            children: (0, x.jsx)(U.rX, {
                                                children: E.map((e) => {
                                                    let { id: t, label: n, value: i } = e;
                                                    return (0, x.jsx)(
                                                        U.iD,
                                                        {
                                                            id: t,
                                                            group: "sort-order",
                                                            label: n,
                                                            checked: s === i,
                                                            action: () => {
                                                                Y.default.track(
                                                                    q.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED,
                                                                    {
                                                                        interaction: "sort_order_changed",
                                                                        sort_order: i,
                                                                        activity_restricted_guild_count: c,
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
                                        (0, x.jsxs)(k.D, {
                                            ...e,
                                            innerRef: p,
                                            className: J.Ku,
                                            children: [
                                                (0, x.jsx)(V.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-subtle",
                                                    children: T,
                                                }),
                                                (0, x.jsx)(w.a, { size: "xs", color: B.A.colors.TEXT_SUBTLE }),
                                            ],
                                        }),
                                }),
                                (0, x.jsx)(F.Q, {
                                    variant: "primary",
                                    textVariant: "text-sm/medium",
                                    onClick: o,
                                    text: r ? _.intl.string(_.t["7lxcLO"]) : _.intl.string(_.t.zh6UEs),
                                }),
                            ],
                        }),
                ],
            }),
            (0, x.jsx)(z.A, {
                "aria-live": "polite",
                role: "region",
                children: _.intl.format(m.default.EvzDff, { count: n.length }),
            }),
            (0, x.jsxs)("ul", {
                className: J.X1,
                id: A,
                "aria-label": _.intl.string(_.t["7hB4kg"]),
                children: [
                    0 === n.length &&
                        (0, x.jsx)("div", {
                            className: J.pb,
                            children: (0, x.jsx)(V.E, {
                                className: J.R$,
                                variant: "text-lg/medium",
                                children: _.intl.string(_.t["Xe+fJM"]),
                            }),
                        }),
                    n.map((e) =>
                        (0, x.jsx)(
                            $,
                            { guild: e, isActivityRestricted: u(e.id), onToggleActivityRestrictedGuild: d },
                            e.id,
                        ),
                    ),
                ],
            }),
        ],
    });
};
var et = n(780479);
let en = (0, d.E2)(u.X.ACTIVITY_PRIVACY_PER_GUILD_SETTING, {
        useSearchTerms: () => [_.intl.string(m.default["/LHVbt"])],
        Component: function () {
            let e = g.tz.useSetting()
                ? null
                : (0, x.jsx)("div", {
                      className: et.l,
                      children: (0, x.jsx)(O.w, { type: "warning", children: _.intl.string(m.default["xxI0/W"]) }),
                  });
            return (0, x.jsx)(ee, { notice: e });
        },
    }),
    ei = (0, d.zZ)(u.X.ACTIVITY_PRIVACY_MY_SERVERS_CATEGORY, {
        useTitle: () => _.intl.string(_.t.TqdOvC),
        useSubtitle: () => (S("MyServersCategory") ? _.intl.string(m.default.OO17Lg) : null),
        buildLayout: () => [en, j],
    }),
    el = (0, d.zD)(u.X.ACTIVITY_PRIVACY_FRIENDS_JOIN_SETTING, {
        useTitle: () => _.intl.string(m.default.khuuzv),
        useSubtitle: () => _.intl.string(m.default["8EWsJ8"]),
        useValue: () => g.e.useSetting(),
        setValue: (e) => g.e.updateSetting(e),
    }),
    es = (0, d.zD)(u.X.ACTIVITY_PRIVACY_VOICE_JOIN_SETTING, {
        useTitle: () => _.intl.string(m.default.Uz5Ipi),
        useSubtitle: () => _.intl.string(m.default.CZI2Gb),
        useValue: () => g.UM.useSetting(),
        setValue: (e) => g.UM.updateSetting(e),
    }),
    ea = (0, d.zZ)(u.X.ACTIVITY_PRIVACY_GAME_JOINING_CATEGORY, {
        useTitle: () => _.intl.string(m.default["89YBr5"]),
        buildLayout: () => [el, es],
        useSearchTerms: () => [_.intl.string(_.t.VOszPA)],
    });
var er = n(359778),
    eo = n(22917);
let ed = (0, d.E2)(u.X.ACTIVITY_PRIVACY_TERMS, {
        useSearchTerms: () => [],
        Component: function () {
            return (0, x.jsx)(er.Z, {
                type: er.Z.Types.PRIMARY,
                className: eo.A,
                children: (0, x.jsx)(V.E, {
                    variant: "text-sm/normal",
                    children: _.intl.format(_.t.xvCsx4, { termsLink: q.X7G.TERMS, privacyLink: q.X7G.PRIVACY }),
                }),
            });
        },
    }),
    eu = (0, d.zZ)(u.X.ACTIVITY_PRIVACY_TERMS_CATEGORY, { buildLayout: () => [ed] }),
    ec = (0, d.t_)(u.X.ACTIVITY_PRIVACY_PANEL, {
        useTitle: () => _.intl.string(_.t.Cq98yL),
        buildLayout: () => [A, v, ei, ea, eu],
    }),
    eg = (0, d.i4)(u.X.ACTIVITY_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(_.t.Cq98yL),
        icon: c._,
        buildLayout: () => [ec],
    });
var e_ = n(935399),
    em = n(625657),
    eh = n(534514),
    eA = n(821609),
    ep = n(554146),
    eE = n(932001),
    eT = n(843402),
    eS = n(589051),
    ex = n(592598),
    ef = n(46373),
    eb = n(933297),
    eN = n(351906),
    eC = n(532624),
    eI = n(773371),
    ev = n(256415),
    ey = n(723702),
    ej = n(858897),
    eO = n(17460),
    eR = n(735438),
    eL = n.n(eR),
    eD = n(350535),
    eG = n(672396);
let eP = eU(null);
function eM() {
    var e;
    let t = eU(eP);
    (e = eP),
        eL().isEqual(eL().omit(t, "old_enabled"), eL().omit(e, "old_enabled")) ||
            (Y.default.track(q.HAw.OVERLAY_SETTINGS_UPDATED, { ...t }), (eP = t));
}
function eU(e) {
    let t = ev.default.getNotificationPositionMode(),
        n = t !== q.G6Q.DISABLED,
        i = eC.Ay.getOverlayKeybind(),
        l = eC.Ay.getOverlayChatKeybind();
    return {
        enabled: eI.default.enabled,
        notifications_enabled: n,
        notifications_position: n ? t : null,
        text_notifications_mode: ex.A.isNotificationDisabled(eG.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != i ? (0, eD.dI)(i.shortcut) : null,
        text_activation_hotkey: null != l ? (0, eD.dI)(l.shortcut) : null,
        text_opacity_slider: ev.default.getTextWidgetOpacity(),
        old_enabled: e?.enabled ?? eI.default.enabled,
    };
}
var ek = n(793574),
    eV = n(237984),
    ew = n(503698),
    eB = n.n(ew),
    eF = n(890856),
    ez = n(481384);
let eX = (e) => {
    e.preventDefault(), e.stopPropagation();
};
function eY(e) {
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
    return (0, x.jsxs)("div", {
        className: eB()(ez.HS, u),
        children: [
            (0, x.jsxs)(eF.s, {
                "aria-label": d,
                onClick: o,
                children: [
                    null != t && (0, x.jsx)("div", { className: ez.x_, children: t }),
                    (0, x.jsxs)("div", {
                        className: ez.rN,
                        children: [
                            null != n && (0, x.jsx)("div", { className: ez.$t, children: n }),
                            (0, x.jsxs)("div", {
                                className: ez.c8,
                                children: [
                                    (0, x.jsx)(V.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: ez.SZ,
                                        children: i,
                                    }),
                                    null != l &&
                                        (0, x.jsx)(V.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children: l,
                                        }),
                                    null != a &&
                                        (0, x.jsx)(V.E, {
                                            variant: "text-xxs/medium",
                                            color: "text-muted",
                                            children: a,
                                        }),
                                ],
                            }),
                            (0, x.jsx)("div", { className: ez.a$, children: s }),
                        ],
                    }),
                ],
            }),
            (0, x.jsx)("div", { className: ez.Om, children: r }),
        ],
    });
}
let eH = (0, d.E2)(u.X.OVERLAY_BUG_REPORTER_SETTING, {
    Component: function () {
        return (0, x.jsx)(eY, {
            title: _.intl.string(_.t["z4/l+V"]),
            description: _.intl.string(_.t["3aZq/0"]),
            action: (0, x.jsx)(eA.$, {
                variant: "primary",
                text: _.intl.string(_.t.s2nVhG),
                onClick: () => {
                    (0, eV.b)(ek.A.USER_SETTINGS, q.BRT.APP);
                },
            }),
            "aria-label": _.intl.string(_.t["z4/l+V"]),
        });
    },
    useSearchTerms: () => [_.intl.string(_.t["z4/l+V"])],
});
var eK = n(812729),
    eW = n.n(eK),
    eZ = n(587895),
    eQ = n(429913),
    eq = n(616356),
    eJ = n(328153);
function e$(e, t) {
    return null != e && null != e.id ? e.id : null != t && null != t.id ? t.id : void 0;
}
function e0() {
    let e = (0, R.bG)([eq.A], () => eq.A.getStreamerActiveStreamMetadata()),
        t = (0, R.bG)(
            [eJ.Ay],
            () => {
                let e = eJ.Ay.getVisibleGame();
                return null != e ? eJ.Ay.getGameOrTransformedSubgameForPID(e.pid) : null;
            },
            [],
            eW(),
        ),
        [n] = (0, eQ.A)([e$(e, t)]);
    return { runningGame: t ?? void 0, runningGameApplication: n ?? void 0 };
}
var e1 = n(990078),
    e2 = n(478016),
    e5 = n(31300),
    e3 = n(780907),
    e8 = n(684013),
    e4 = n(56562),
    e9 = n(964486),
    e7 = n(137177),
    e6 = n(496885),
    te = n(810412),
    tt = n(41984),
    tn = n(833551),
    ti = n(562519);
let tl = 5 * n(927813).A.Millis.DAY,
    ts = new ti.A("overlay_survey_timestamps");
function ta(e, t) {
    let i, l;
    (i = Date.now()),
        (null != (l = Array.from(ts.values()).reduce((e, t) => Math.max(e, t), 0)) && i - l < tl) ||
            Array.from(ts.values()).filter((e) => {
                let t = new Date(e);
                return t.getMonth() === new Date().getMonth() && t.getFullYear() === new Date().getFullYear();
            }).length >= 3 ||
            (0, N.openModalLazy)(async () => {
                let i,
                    { default: l } = await n.e("82318").then(n.bind(n, 387101));
                return (i = Date.now()), ts.add(i), (n) => (0, x.jsx)(l, { ...n, clientSettingType: e, gameId: t });
            });
}
var tr = n(512950),
    to = n(975571),
    td = n(935671);
function tu() {
    (0, td.sL)("overlay-settings");
}
function tc(e) {
    let { className: t, game: n } = e;
    return (0, td.NP)() && null != n && n.elevated
        ? (0, x.jsx)("div", {
              className: t,
              children: (0, x.jsx)(tr.p, {
                  messageType: tr.Y.WARNING,
                  action: (0, x.jsx)(eA.$, {
                      variant: "secondary",
                      size: "sm",
                      text: _.intl.string(_.t["1iI46O"]),
                      onClick: tu,
                  }),
                  children: _.intl.format(_.t["LJzl+0"], { helpCenterLink: to.A.getArticleURL(q.MVz.SYSTEM_SERVICE) }),
              }),
          })
        : null;
}
var tg = n(760751),
    t_ = n(189081),
    tm = n(9302),
    th = n(311678),
    tA = n(320448);
let tp = new Set([
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
function tE(e) {
    let { children: t, className: n, onExpand: i, ...l } = e,
        [s, a] = f.useState(!1);
    return (0, x.jsx)(th.N, {
        className: ez.uR,
        collapsibleContent: (0, x.jsx)("div", { className: ez.oV, children: t }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, x.jsx)(eY, {
                ...l,
                onClick: (e) => {
                    var n;
                    a((n = !s)), i?.(n), t?.(e);
                },
                className: eB()(ez.AC, n),
                action: (0, x.jsxs)("div", {
                    className: ez.rc,
                    children: [
                        l.action,
                        s
                            ? (0, x.jsx)(w.a, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--interactive-text-active)",
                              })
                            : (0, x.jsx)(tA._, {
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
let tT = (0, d.E2)(u.X.OVERLAY_CURRENT_GAME, {
    Component: function () {
        let { runningGame: e, runningGameApplication: t } = e0(),
            n = e?.pid,
            i = (0, R.bG)(
                [tn.default],
                () => (null == e || null == n ? null : tn.default.getTrackedGameByPid(n)),
                [e, n],
                eW(),
            ),
            { enabledLegacy: l, enabledOOP: s } = (0, R.cf)(
                [tg.A, t_.A],
                () =>
                    null == e && null == i
                        ? { enabledLegacy: !1, enabledOOP: !1 }
                        : null == e
                          ? { enabledLegacy: i?.legacyEnabled ?? !1, enabledOOP: i?.oopEnabled ?? !1 }
                          : (0, eJ.hw)(e, !1, [tg.A, t_.A]),
                [e, i],
            ),
            a = (0, R.bG)([eJ.Ay, tg.A, t_.A], () => (null == e ? null : (0, eJ.xU)(e, eJ.Ay, tg.A, t_.A)), [e], eW()),
            [r, o] = f.useState(s),
            [d, u] = f.useState(l),
            [c, g] = f.useState(!1);
        f.useEffect(() => {
            o(s), u(l);
        }, [s, l]);
        let m = !(0, tm.supportsLegacy)(),
            h = !(0, tm.supportsOutOfProcess)(),
            { legacyEnabled: A, oopEnabled: p } = (0, R.cf)([tn.default], () => tn.default.getGlobalEnabledStatus()),
            E = (t, n) => {
                if (null == e) return;
                let i = !1,
                    l = !1;
                switch (n) {
                    case te.OverlayToggledClientSettingType.LEGACY_GAME:
                        u(t), e3.Ay.toggleOverlay(e, t, r), (i = !t && d);
                        break;
                    case te.OverlayToggledClientSettingType.OOP_GAME:
                        o(t), e3.Ay.toggleOverlay(e, d, t), (l = !t && r);
                        break;
                    case te.OverlayToggledClientSettingType.LEGACY:
                        e8.A.setEnabled(t, p), (0, te.Q3)(t, te.OverlayToggledClientSettingType.LEGACY, e.id ?? null);
                        break;
                    case te.OverlayToggledClientSettingType.OOP:
                        e8.A.setEnabled(A, t), (0, te.Q3)(t, te.OverlayToggledClientSettingType.OOP, e.id ?? null);
                }
                (i || l) &&
                    ta(
                        i
                            ? te.OverlayToggledClientSettingType.LEGACY_GAME
                            : te.OverlayToggledClientSettingType.OOP_GAME,
                        e.id ?? null,
                    );
            },
            T = m && h,
            S = !A && !p,
            b = !r && !A && d && !m,
            N = !d && !p && r && !h,
            C = i?.overlayMethod === tt.Ue.Disabled,
            I = i?.state === tt.AR.OVERLAY_RENDERING && !C,
            v = i?.state != null && tp.has(i.state) && !C,
            y = i?.overlayMethod === tt.Ue.OutOfProcess,
            j = i?.overlayMethod === tt.Ue.OutOfProcessLimitedInteraction,
            O = i?.overlayMethod === tt.Ue.Hook,
            L = i?.state === tt.AR.OVERLAY_CRASHED || i?.state === tt.AR.OVERLAY_CRASHED_DISABLED,
            G = !r && !d,
            [P, M] = (() => {
                switch (!0) {
                    case I && y:
                        return [
                            _.intl.format(_.t.hFVBIg, {
                                overlayMethod: _.intl.string(_.t.a3eXSw),
                                overlayMethodHook: function (e, t) {
                                    return (0, x.jsx)(
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
                    case I && j:
                        return [
                            _.intl.format(_.t.hFVBIg, {
                                overlayMethod: _.intl.string(_.t["506Aba"]),
                                overlayMethodHook: function (e, t) {
                                    return (0, x.jsx)(
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
                    case I && O:
                        return [
                            _.intl.format(_.t.hFVBIg, {
                                overlayMethod: _.intl.string(_.t.bvlpDR),
                                overlayMethodHook: function (e, t) {
                                    return (0, x.jsx)(
                                        V.E,
                                        { tag: "span", variant: "text-sm/medium", color: "text-strong", children: e },
                                        t,
                                    );
                                },
                            }),
                            (function () {
                                switch (!0) {
                                    case i?.fullscreenType !== e4.aI.BORDERLESS_FULLSCREEN:
                                        return _.intl.string(_.t.mJmbeC);
                                    case h:
                                        return _.intl.string(_.t.C7bLTQ);
                                    case !i?.oopEnabled:
                                        return _.intl.string(_.t.WiY24u);
                                    case !p:
                                        return _.intl.string(_.t.cAFVsL);
                                    case !i?.supportsOutOfProcess:
                                        return _.intl.string(_.t.XcGEcs);
                                    default:
                                        return _.intl.string(_.t.bJXH2v);
                                }
                            })(),
                        ];
                    case L:
                        return [_.intl.string(_.t.OFC2aw), null];
                    case T:
                        return [_.intl.string(_.t.m7X4az), null];
                    case S:
                        return [_.intl.string(_.t["9DUS5l"]), null];
                    case G:
                        return [_.intl.string(_.t.nQ9EdJ), null];
                    case b:
                    case N:
                        return [_.intl.string(_.t.VWUn0a), null];
                    case v:
                        if (y) return [_.intl.string(_.t["s8+CFq"]), null];
                        if (O) return [_.intl.string(_.t.JEEdqt), null];
                        if (j) return [_.intl.string(_.t.pzBMwY), null];
                        return [_.intl.string(_.t["2Xhy9k"]), null];
                    case null == i:
                        return [_.intl.string(_.t.vwHPRi), null];
                    case C: {
                        let e = i?.fullscreenType === e4.aI.FULLSCREEN ? _.intl.string(_.t.mJmbeC) : null;
                        return [_.intl.string(_.t.VPW4XY), e];
                    }
                    default:
                        return [_.intl.string(_.t.ONovP5), null];
                }
            })();
        (0, e9.Ay)(() => {
            e3.Ay.getDetectableGames();
        });
        let [U, w] = f.useMemo(
            () =>
                v
                    ? ["text-muted", B.A.colors.TEXT_MUTED.css]
                    : I && j
                      ? ["text-feedback-warning", B.A.colors.TEXT_FEEDBACK_WARNING.css]
                      : I && y
                        ? ["text-feedback-positive", B.A.colors.TEXT_FEEDBACK_POSITIVE.css]
                        : I && O
                          ? ["text-strong", B.A.colors.TEXT_STRONG.css]
                          : ["interactive-text-default", B.A.colors.INTERACTIVE_TEXT_DEFAULT.css],
            [v, I, j, y, O],
        );
        return null == e
            ? null
            : (0, x.jsxs)(tE, {
                  onExpand: g,
                  className: c ? ez.tx : void 0,
                  title: (0, x.jsxs)(x.Fragment, {
                      children: [
                          t?.name ?? a?.name ?? e?.gameName ?? "",
                          null != a && a.verified
                              ? (0, x.jsx)(e1.m, {
                                    text: _.intl.string(_.t["4PJP5p"]),
                                    children: (0, x.jsx)(e6.A, {
                                        size: 16,
                                        color: B.A.colors.BACKGROUND_BRAND.css,
                                        children: (0, x.jsx)(e2.U, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: B.A.colors.WHITE.css,
                                        }),
                                    }),
                                })
                              : null,
                      ],
                  }),
                  description: P,
                  hint: null != M ? M : void 0,
                  header: (0, x.jsxs)(x.Fragment, {
                      children: [
                          I || v
                              ? (0, x.jsx)(e5.k, { size: "xxs", color: w })
                              : (0, x.jsx)("div", { className: ez.W4 }),
                          (0, x.jsx)(V.E, {
                              variant: "text-xs/semibold",
                              color: U,
                              children: _.intl.string(_.t.CDOx3w),
                          }),
                      ],
                  }),
                  icon: (0, x.jsx)(e7.A, { game: t, pid: e?.pid, size: e7.M.MEDIUM }),
                  "aria-label": _.intl.string(_.t["87O5GC"]),
                  action: (0, x.jsx)(k.D, {
                      onClick: (e) => eX(e),
                      children: (0, x.jsx)(D.d, {
                          checked: (r && p) || (d && A),
                          disabled: T,
                          onChange: (t) => {
                              ((t, n) => {
                                  if (null == e) return;
                                  let i = !1,
                                      l = !1;
                                  switch (n) {
                                      case "game":
                                          e3.Ay.toggleOverlay(e, t, t), u(t), o(t), (i = !t && d), (l = !t && r);
                                          break;
                                      case "global":
                                          e8.A.setEnabled(t, t), (i = !t && A), (l = !t && p);
                                          break;
                                      case "both":
                                          e8.A.setEnabled(t, t),
                                              e3.Ay.toggleOverlay(e, t, t),
                                              u(t),
                                              o(t),
                                              (i = (!t && A) || (!t && d)),
                                              (l = (!t && p) || (!t && r));
                                  }
                                  let s = null;
                                  i
                                      ? (s =
                                            "game" === n
                                                ? te.OverlayToggledClientSettingType.LEGACY_GAME
                                                : te.OverlayToggledClientSettingType.LEGACY)
                                      : l &&
                                        (s =
                                            "game" === n
                                                ? te.OverlayToggledClientSettingType.OOP_GAME
                                                : te.OverlayToggledClientSettingType.OOP),
                                      null != s && ta(s, e.id ?? null);
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
                  warning: (0, x.jsx)(tc, { className: ez.Hh, game: e }),
                  children: [
                      (0, x.jsx)(eY, {
                          title: _.intl.string(_.t["7BlVIs"]),
                          description: _.intl.string(_.t.ndgADE),
                          hint: p ? void 0 : _.intl.string(_.t.cAFVsL),
                          "aria-label": _.intl.string(_.t["7BlVIs"]),
                          action: (0, x.jsxs)(x.Fragment, {
                              children: [
                                  (0, x.jsx)(D.d, {
                                      checked: r && p,
                                      disabled: h,
                                      onChange: (e) => {
                                          e && !p
                                              ? E(e, te.OverlayToggledClientSettingType.OOP)
                                              : E(e, te.OverlayToggledClientSettingType.OOP_GAME);
                                      },
                                  }),
                                  (0, x.jsx)("div", { className: ez.Kz }),
                              ],
                          }),
                      }),
                      (0, x.jsx)(eY, {
                          title: _.intl.string(_.t.BfFpW1),
                          description: _.intl.string(_.t.OzInYk),
                          hint: A ? void 0 : _.intl.string(_.t["3sYHXm"]),
                          "aria-label": _.intl.string(_.t.BfFpW1),
                          action: (0, x.jsxs)(x.Fragment, {
                              children: [
                                  (0, x.jsx)(D.d, {
                                      checked: d && A,
                                      disabled: m,
                                      onChange: (e) => {
                                          e && !A
                                              ? E(e, te.OverlayToggledClientSettingType.LEGACY)
                                              : E(e, te.OverlayToggledClientSettingType.LEGACY_GAME);
                                      },
                                  }),
                                  (0, x.jsx)("div", { className: ez.Kz }),
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
    useSearchTerms: () => [_.intl.string(_.t["9cb1Uz"])],
});
var tS = n(364522),
    tx = n(206885),
    tf = n(871633);
function tb(e) {
    let { game: t, gameApplication: n } = e,
        i = f.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        l = (0, R.bG)([eZ.A], () => (null != n ? n : eZ.A.getApplication(t?.id)), [n, t]);
    return (0, x.jsx)(e7.A, { game: l, pid: i, size: e7.M.SMALL });
}
function tN(e) {
    let {
            rawGame: t,
            gameApplication: n,
            supportDisabled: i,
            getEnabledFromStatus: l,
            onChange: s,
            clientSettingType: a,
            ariaLabel: r,
        } = e,
        o = (0, R.cf)([eJ.Ay, tg.A, t_.A], () => (0, eJ.xU)(t, eJ.Ay, tg.A, t_.A)),
        d = (0, R.cf)([tg.A, t_.A], () => (0, eJ.hw)(t, !1, [tg.A, t_.A]), [t]),
        u = l(d),
        [c, g] = f.useState(u);
    return (
        f.useEffect(() => {
            g(u);
        }, [u]),
        (0, x.jsx)(eY, {
            title: t.name,
            icon: (0, x.jsx)(tb, { game: o, gameApplication: n }),
            "aria-label": r,
            action: (0, x.jsxs)(x.Fragment, {
                children: [
                    (0, x.jsx)(D.d, {
                        checked: c,
                        disabled: i,
                        onChange: (e) => {
                            let n;
                            return (n = !e && c), void (g(e), s(e, o, d), n && ta(a, o.id ?? t?.id ?? null));
                        },
                    }),
                    (0, x.jsx)("div", { className: ez.Kz }),
                ],
            }),
        })
    );
}
let tC = (0, d.E2)(u.X.OVERLAY_LEGACY_SETTING, {
        Component: function () {
            let [e, t] = f.useState(!1),
                { legacyEnabled: n, oopEnabled: i } = (0, R.cf)([tn.default], () =>
                    tn.default.getGlobalEnabledStatus(),
                ),
                l = (0, R.yK)([eJ.Ay], () => eJ.Ay.getGamesSeen(!0)).filter((e) => !(0, tf.n1)(e)),
                s = (0, eQ.A)(l.map((e) => e.id)),
                a = !(0, tm.supportsLegacy)(),
                r = (e) => {
                    e8.A.setEnabled(e, i);
                    let t = eJ.Ay.getCurrentGameForAnalytics()?.id ?? null;
                    (0, te.Q3)(e, te.OverlayToggledClientSettingType.LEGACY, t),
                        !e && n && ta(te.OverlayToggledClientSettingType.LEGACY, t);
                },
                o = (e, t, n) => {
                    let { enabledOOP: i } = n;
                    e3.Ay.toggleOverlay(t, e, i);
                },
                d = f.useMemo(
                    () =>
                        (0, tm.supportsLegacy)()
                            ? a
                                ? _.intl.string(_.t.r9jEVw)
                                : _.intl.string(_.t.OzInYk)
                            : _.intl.string(_.t["8Ox6/E"]),
                    [a],
                );
            return 0 === l.length
                ? (0, x.jsx)(eY, {
                      title: _.intl.string(_.t.BfFpW1),
                      description: d,
                      "aria-label": _.intl.string(_.t.BfFpW1),
                      className: ez.dA,
                      action: (0, x.jsxs)(x.Fragment, {
                          children: [
                              (0, x.jsx)(D.d, { checked: n, disabled: a, onChange: (e) => r(e) }),
                              tx.O && (0, x.jsx)("div", { className: ez.Kz }),
                          ],
                      }),
                  })
                : (0, x.jsxs)(tE, {
                      onExpand: t,
                      className: e ? ez.tx : void 0,
                      title: _.intl.string(_.t.BfFpW1),
                      description: d,
                      "aria-label": _.intl.string(_.t.BfFpW1),
                      action: (0, x.jsx)(k.D, {
                          onClick: (e) => eX(e),
                          children: (0, x.jsx)(D.d, { checked: n, disabled: a, onChange: (e) => r(e) }),
                      }),
                      children: [
                          (0, x.jsx)("div", {
                              className: ez.SC,
                              children: (0, x.jsx)(V.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: _.intl.string(_.t.FzoWRo),
                              }),
                          }),
                          (0, x.jsx)(tS.Ip, {
                              className: ez.XG,
                              children: l.map((e, t) =>
                                  (0, x.jsx)(
                                      tN,
                                      {
                                          rawGame: e,
                                          clientSettingType: te.OverlayToggledClientSettingType.LEGACY_GAME,
                                          supportDisabled: a,
                                          gameApplication: s[t],
                                          getEnabledFromStatus: (e) => {
                                              let { enabledLegacy: t } = e;
                                              return t;
                                          },
                                          onChange: o,
                                          ariaLabel: _.intl.format(_.t.hvPYsF, { gameName: e.name }).toString(),
                                      },
                                      e.id,
                                  ),
                              ),
                          }),
                      ],
                  });
        },
        useSearchTerms: () => [_.intl.string(_.t.BfFpW1)],
    }),
    tI = (0, d.E2)(u.X.OVERLAY_OOP_SETTING, {
        Component: function () {
            let [e, t] = f.useState(!1),
                { oopEnabled: n, legacyEnabled: i } = (0, R.cf)([tn.default], () =>
                    tn.default.getGlobalEnabledStatus(),
                ),
                l = !(0, tm.supportsOutOfProcess)(),
                s = (0, R.yK)([eJ.Ay], () => eJ.Ay.getGamesSeen(!0)).filter((e) => !(0, tf.n1)(e)),
                a = (0, eQ.A)(s.map((e) => e.id)),
                r = (e) => {
                    let t = !e && n;
                    e8.A.setEnabled(i, e);
                    let l = eJ.Ay.getCurrentGameForAnalytics()?.id ?? null;
                    (0, te.Q3)(e, te.OverlayToggledClientSettingType.OOP, l),
                        t && ta(te.OverlayToggledClientSettingType.OOP, l);
                },
                o = (e, t, n) => {
                    let { enabledLegacy: i } = n;
                    e3.Ay.toggleOverlay(t, e, i);
                },
                d = f.useMemo(
                    () =>
                        tx.O ? (l ? _.intl.string(_.t.C7bLTQ) : _.intl.string(_.t.ndgADE)) : _.intl.string(_.t.m7X4az),
                    [l],
                );
            return 0 === s.length
                ? (0, x.jsx)(eY, {
                      title: _.intl.string(_.t["7BlVIs"]),
                      description: d,
                      "aria-label": _.intl.string(_.t["7BlVIs"]),
                      className: ez.dA,
                      action: (0, x.jsxs)(x.Fragment, {
                          children: [
                              (0, x.jsx)(D.d, { checked: n, disabled: l, onChange: (e) => r(e) }),
                              tx.O && (0, x.jsx)("div", { className: ez.Kz }),
                          ],
                      }),
                  })
                : (0, x.jsxs)(tE, {
                      onExpand: t,
                      className: e ? ez.tx : void 0,
                      title: _.intl.string(_.t["7BlVIs"]),
                      description: d,
                      "aria-label": _.intl.string(_.t["7BlVIs"]),
                      action: (0, x.jsx)(k.D, {
                          onClick: (e) => eX(e),
                          children: (0, x.jsx)(D.d, { checked: n, disabled: l, onChange: (e) => r(e) }),
                      }),
                      children: [
                          (0, x.jsx)("div", {
                              className: ez.SC,
                              children: (0, x.jsx)(V.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: _.intl.string(_.t.FzoWRo),
                              }),
                          }),
                          (0, x.jsx)(tS.Ip, {
                              className: ez.XG,
                              children: s.map((e, t) =>
                                  (0, x.jsx)(
                                      tN,
                                      {
                                          rawGame: e,
                                          clientSettingType: te.OverlayToggledClientSettingType.OOP_GAME,
                                          gameApplication: a[t],
                                          supportDisabled: l,
                                          getEnabledFromStatus: (e) => {
                                              let { enabledOOP: t } = e;
                                              return t;
                                          },
                                          onChange: o,
                                          ariaLabel: _.intl.format(_.t.nByTd3, { gameName: e.name }).toString(),
                                      },
                                      e.id,
                                  ),
                              ),
                          }),
                      ],
                  });
        },
        useSearchTerms: () => [_.intl.string(_.t["7BlVIs"])],
    }),
    tv = (0, d.zZ)(u.X.OVERLAY_ENABLE_CATEGORY, {
        useSubnavLabel: () => _.intl.string(_.t["/dp6yY"]),
        buildLayout: () => [tT, tI, tC, eH],
    }),
    ty = (0, d.zD)(u.X.OVERLAY_CLICKABLE_REGIONS_SETTING, {
        useValue: () => (0, R.bG)([ev.default], () => !ev.default.disableClickableRegions),
        setValue: (e) => {
            e8.A.setDisableClickableRegions(!e);
        },
        useTitle: () => _.intl.string(_.t["+eFXxq"]),
        useSubtitle: () => _.intl.string(_.t.kivMAp),
    });
var tj = n(284009),
    tO = n.n(tj),
    tR = n(97260),
    tL = n(635242);
let tD = (0, d.E2)(u.X.OVERLAY_KEYBIND_SETTING, {
    Component: function () {
        let e = (0, R.bG)([eC.Ay], () => eC.Ay.getOverlayKeybind()),
            t = !(0, tm.supportsLegacy)(),
            n = !(0, tm.supportsOutOfProcess)(),
            [i, l] = (0, R.yK)([eJ.Ay], () => [eJ.Ay.canShowAdminWarning, eJ.Ay.getVisibleGame()], []),
            s = (0, td.NP)(),
            a = null != l && l.elevated && i && !s,
            r = !(0, eC.DV)(e?.shortcut ?? []);
        return (0, x.jsx)("div", {
            className: ez.hc,
            children: (0, x.jsxs)("div", {
                className: ez.eH,
                children: [
                    (0, x.jsxs)("div", {
                        className: ez.Bu,
                        children: [
                            (0, x.jsx)(V.E, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: _.intl.string(_.t.VsAZcC),
                            }),
                            a &&
                                (0, x.jsx)(V.E, {
                                    variant: "text-xs/normal",
                                    color: "text-feedback-warning",
                                    className: ez.y7,
                                    children: _.intl.string(_.t.NsowVa),
                                }),
                            r &&
                                (0, x.jsx)(V.E, {
                                    variant: "text-xs/normal",
                                    color: "text-feedback-warning",
                                    className: ez.y7,
                                    children: _.intl.string(_.t["UNoTw/"]),
                                }),
                        ],
                    }),
                    (0, x.jsx)("div", {
                        className: ez.IH,
                        children: (0, x.jsx)(tL.A, {
                            disabled: t && n,
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
    useSearchTerms: () => [_.intl.string(_.t.VsAZcC)],
});
var tG = n(515183),
    tP = n(682763);
let tM = (0, d.zD)(u.X.OVERLAY_LIMITED_INTERACTION_OVERRIDE_SETTING, {
        usePredicate: () => {
            let { runningGameApplication: e } = e0();
            return e?.id != null;
        },
        useDisabled: () => {
            let { runningGame: e } = e0();
            return null != e && (0, tG.qJ)(e.pid);
        },
        useValue: () => {
            let { runningGame: e, runningGameApplication: t } = e0(),
                n = t?.id,
                i = (0, R.bG)([ex.A], () => ex.A.isLimitedInteractionOverrideEnabled(n)),
                l = null != e && (0, tG.qJ)(e.pid);
            return i || l;
        },
        setValue: (e) => {
            let t,
                n,
                i,
                l,
                { runningGameApplication: s } =
                    ((t = eq.A.getStreamerActiveStreamMetadata()),
                    (l = e$(
                        t,
                        (i =
                            null != (n = eJ.Ay.getVisibleGame())
                                ? eJ.Ay.getGameOrTransformedSubgameForPID(n.pid)
                                : null),
                    )),
                    { runningGame: i ?? void 0, runningGameApplication: eZ.A.getApplication(l) ?? void 0 });
            null != s && (0, tP.x8)(s.id, e);
        },
        useTitle: () => _.intl.string(_.t.wgVQND),
        useSubtitle: () => _.intl.string(_.t["5SsyF5"]),
    }),
    tU = (0, d.zZ)(u.X.OVERLAY_GENERAL_CATEGORY, { buildLayout: () => [tD, tM, ty] });
var tk = n(93465);
let tV = [
    {
        title: _.t.eVE4LX,
        description: _.t["72WNqk"],
        disabledSetting: tk.M.TEXT_CHAT,
        key: u.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT,
    },
    {
        title: _.t.oifnSh,
        description: _.t.bgU5r0,
        disabledSetting: tk.M.WELCOME_GENERAL,
        key: u.X.OVERLAY_NOTIFICATIONS_WELCOME,
    },
    {
        title: _.t.hqsZJW,
        description: _.t.kHjdqc,
        disabledSetting: tk.M.GO_LIVE_NUDGE,
        key: u.X.OVERLAY_NOTIFICATIONS_GO_LIVE,
    },
    {
        title: _.t.sop3rn,
        description: _.t.pjgffc,
        disabledSetting: tk.M.GAME_ACTIVITY,
        key: u.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY,
    },
    {
        title: _.t["2QVhbb"],
        description: _.t.wQ4ilB,
        disabledSetting: tk.M.NOW_PLAYING,
        key: u.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING,
    },
    {
        title: _.t.giM9fA,
        description: _.t.EhAfWj,
        disabledSetting: tk.M.NOW_PLAYING_DIFFERENT_GAMES,
        key: u.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING_DIFFERENT_GAMES,
        usePredicate: () => {
            let { showNowPlayingForDifferentGames: e } = (0, eS.M8)(
                    "OverlayV3NowPlayingDifferentGamesNotificationSetting",
                ),
                t = (0, R.bG)([ex.A], () => ex.A.isNotificationDisabledBySetting(tk.M.NOW_PLAYING));
            return !!e && !t;
        },
    },
];
function tw(e) {
    return (0, d.zD)(e.key, {
        useTitle: () => _.intl.string(e.title),
        useSubtitle: () => _.intl.string(e.description),
        useValue: () => !(0, R.bG)([ex.A], () => ex.A.getDisabledNotifications().has(e.disabledSetting)),
        setValue: (t) => {
            e8.A.setNotificationDisabledSetting(e.disabledSetting, !t);
        },
        usePredicate: e.usePredicate,
    });
}
let tB = (0, d.FW)(u.X.OVERLAY_NOTIFICATIONS_LIST, {
        variant: "compact",
        useTitle: () => _.intl.string(_.t.gnKWdS),
        isTitleHiddenVisually: !0,
        buildLayout: () => tV.map(tw),
    }),
    tF = (0, d.zZ)(u.X.OVERLAY_NOTIFICATIONS_CATEGORY, {
        useTitle: () => _.intl.string(_.t.xOE5bA),
        buildLayout: () => [tB],
    }),
    tz = (0, d.Hn)(u.X.OVERLAY_VOICE_WIDGET_AVATAR_SIZE, {
        useTitle: () => _.intl.string(_.t.dnvZSg),
        useValue: () => (0, R.bG)([ev.default], () => ev.default.getAvatarSizeMode()),
        setValue: (e) => {
            e8.A.setAvatarSizeMode(e);
        },
        useOptions: () => [
            { id: "large", label: _.intl.string(_.t.YcOxtr), value: q.OSZ.LARGE },
            { id: "small", label: _.intl.string(_.t.BKIKqx), value: q.OSZ.SMALL },
        ],
    }),
    tX = (0, d.Hn)(u.X.OVERLAY_VOICE_WIDGET_DISPLAY_NAMES, {
        useTitle: () => _.intl.string(_.t.J0dpcB),
        useValue: () => (0, R.bG)([ev.default], () => ev.default.getDisplayNameMode()),
        setValue: (e) => {
            e8.A.setDisplayNameMode(e);
        },
        useOptions: () => [
            { id: "always", label: _.intl.string(_.t.nBmDrT), value: q.pwA.ALWAYS },
            { id: "speaking", label: _.intl.string(_.t["2OvIZY"]), value: q.pwA.ONLY_WHILE_SPEAKING },
            { id: "never", label: _.intl.string(_.t.ekjlPL), value: q.pwA.NEVER },
        ],
    }),
    tY = (0, d.Hn)(u.X.OVERLAY_VOICE_WIDGET_DISPLAY_USERS, {
        useTitle: () => _.intl.string(_.t.swsWWC),
        useValue: () => (0, R.bG)([ev.default], () => ev.default.getDisplayUserMode()),
        setValue: (e) => {
            e8.A.setDisplayUserMode(e);
        },
        useOptions: () => [
            { id: "always", label: _.intl.string(_.t.nBmDrT), value: q.f5z.ALWAYS },
            { id: "speaking", label: _.intl.string(_.t["2OvIZY"]), value: q.f5z.ONLY_WHILE_SPEAKING },
        ],
    });
var tH = n(391973),
    tK = n(489277),
    tW = n(897720),
    tZ = n(38502);
function tQ() {
    let e = tK.A.getWidgetByType(q.uss.VOICE_V3);
    if (null == e) return null;
    let t = tZ.A.getWidget(e.id);
    return null != t && (0, tW.ZO)(t) ? t : null;
}
n(392164);
let tq = (0, d.sN)(u.X.OVERLAY_VOICE_WIDGET_MAX_USERS, {
    useTitle: () => _.intl.string(_.t["X/Uyzc"]),
    minValue: 0,
    maxValue: 25,
    markers: [0, 5, 10, 15, 20, 25],
    onMarkerRender: (e) => (e < 1 ? _.intl.string(_.t.nrUzFL) : e),
    getInitialValue: () => {
        let e = tQ();
        return e?.meta.voiceStatesMaxShown ?? 8;
    },
    onValueRender: function (e) {
        return e < 1 ? _.intl.string(_.t.nrUzFL) : `${Math.floor(e)}`;
    },
    setValue: (e) => {
        let t = tQ();
        null != t &&
            (e < 1
                ? (0, tH.cC)(t.id, { voiceStatesMaxShown: -1 })
                : (0, tH.cC)(t.id, { voiceStatesMaxShown: Math.floor(e) }));
    },
});
var tJ = n(43990),
    t$ = n(450740),
    t0 = n(968898),
    t1 = n(95701),
    t2 = n(889227),
    t5 = n(288737),
    t3 = n(287809),
    t8 = n(403362);
function t4(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = "456" + Math.floor(1e6 * Math.random());
    return {
        voiceState: new t5.A({
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
        user: new t2.A({ id: l, username: e }),
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
let t9 = (0, d.E2)(u.X.OVERLAY_VOICE_WIDGET_PREVIEW, {
        Component: function () {
            let e,
                t = (0, R.bG)([t3.default], () => t3.default.getCurrentUser()),
                {
                    avatarSizeMode: n,
                    displayNameMode: i,
                    displayUserMode: l,
                } = (0, R.cf)([ev.default], () => ({
                    avatarSizeMode: ev.default.getAvatarSizeMode(),
                    displayNameMode: ev.default.getDisplayNameMode(),
                    displayUserMode: ev.default.getDisplayUserMode(),
                })),
                [s] = f.useState(() => [
                    t4(_.intl.string(_.t.C0ZDvo), !0, !1),
                    t4(_.intl.string(_.t.iOtj8E), !1, !1, !0),
                    t4(_.intl.string(_.t["0oqNgL"]), !1, !0),
                ]),
                a = (0, R.bG)([tK.A, tZ.A], () => {
                    let e = tK.A.getWidgetByType(q.uss.VOICE_V3);
                    if (null == e) return null;
                    let t = tZ.A.getWidget(e.id);
                    return null != t && (0, tW.ZO)(t) ? t : null;
                }),
                r = a?.meta?.voiceStatesMaxShown ?? 8,
                o = [null != t ? (((e = t4(t.username)).user = t), e) : null, ...s].filter(t8.Vq),
                d = [new Map(o.map((e) => [e.user.id, e])), o.map((e) => e.user.id)],
                u = (0, x.jsx)(tJ.N, {
                    theme: q.NJ8.MIDNIGHT,
                    children: (e) =>
                        (0, x.jsxs)("div", {
                            className: eB()(ez.Y5, e),
                            children: [
                                (0, x.jsx)("div", {
                                    className: ez.kJ,
                                    children: (0, x.jsx)(t$.DH, {
                                        id: "voice-widget",
                                        title: _.intl.string(_.t.KNJ6Vq),
                                        channel: (0, t1.createChannelRecord)({
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
                                (0, x.jsxs)("div", {
                                    className: ez.R$,
                                    children: [
                                        (0, x.jsx)(t0.Pl, { children: _.intl.string(_.t.KNJ6Vq) }),
                                        (0, x.jsx)(t0.CS, {}),
                                        (0, x.jsx)(t0.O0, { id: a?.id ?? "voice-widget", pinned: a?.pinned ?? !1 }),
                                    ],
                                }),
                            ],
                        }),
                });
            return (0, x.jsx)("div", { className: ez.F9, children: u });
        },
        useSearchTerms: () => [],
    }),
    t7 = (0, d.zZ)(u.X.OVERLAY_VOICE_WIDGET_CATEGORY, {
        useTitle: () => _.intl.string(_.t.r1TZfh),
        buildLayout: () => [t9, tz, tX, tY, tq],
    });
var t6 = n(49999),
    ne = n(192391);
function nt() {
    let [e, t] = (0, eE.kn)([ep.M.OVERLAY_OOP_SETTINGS_NUX], void 0, !0);
    return ((0, e_.Ay)(() => () => {
        t(t6.i.AUTO_DISMISS);
    }),
    e !== ep.M.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, x.jsxs)(x.Fragment, {
              children: [
                  (0, x.jsxs)("div", {
                      className: ne.xC,
                      children: [
                          (0, x.jsx)("div", {
                              children: (0, x.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/10b8ab47f3371360233219f4b20fa86155553ddb810ceb8688654738bf7e15d0.png",
                                  alt: _.intl.string(_.t.mdXZh1),
                                  className: ne.tl,
                              }),
                          }),
                          (0, x.jsx)("div", {
                              children: (0, x.jsxs)("div", {
                                  className: ne.vJ,
                                  children: [
                                      (0, x.jsx)(eh.D, {
                                          variant: "heading-xl/medium",
                                          color: "text-strong",
                                          children: _.intl.string(_.t.jzjJQg),
                                      }),
                                      (0, x.jsx)(V.E, {
                                          variant: "text-md/normal",
                                          color: "text-muted",
                                          children: _.intl.string(_.t["5dOfxb"]),
                                      }),
                                  ],
                              }),
                          }),
                          (0, x.jsx)("div", {
                              children: (0, x.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/2aa57f16c71171fc8e0edb8cca60735f1192195344d17fa667de6d3ca8163ba0.png",
                                  alt: _.intl.string(_.t.mdXZh1),
                                  className: ne.lh,
                              }),
                          }),
                          (0, x.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: ne.VV,
                              children: (0, x.jsx)(eA.$, {
                                  variant: "primary",
                                  text: _.intl.string(_.t.Q26diF),
                                  onClick: () => void t(t6.i.DISMISS),
                              }),
                          }),
                      ],
                  }),
                  (0, x.jsx)(ef.A, { className: ne.yF }),
              ],
          });
}
function nn() {
    let e = (0, R.bG)([eN.A], () => eN.A.enabled),
        t = (0, eS.Mn)("OverlayStreamerModeNotice");
    return e && t
        ? (0, x.jsxs)(x.Fragment, {
              children: [
                  (0, x.jsx)(O.w, {
                      type: "warning",
                      children: _.intl.format(_.t.fuEX5B, {
                          onClick: () => (0, ej.openUserSettings)(u.X.STREAMER_MODE_CATEGORY),
                      }),
                  }),
                  (0, x.jsx)(ef.A, { className: ne.yF }),
              ],
          })
        : null;
}
let ni = (0, d.t_)(u.X.OVERLAY_PANEL, {
        initialize: function () {
            return (
                eM(),
                eC.Ay.addChangeListener(eM),
                ex.A.addChangeListener(eM),
                ev.default.addChangeListener(eM),
                eI.default.addChangeListener(eM),
                ey.isPlatformEmbedded && (0, eT.a2)(),
                () => {
                    eC.Ay.removeChangeListener(eM),
                        ex.A.removeChangeListener(eM),
                        ev.default.removeChangeListener(eM),
                        eI.default.removeChangeListener(eM),
                        ey.isPlatformEmbedded && (0, eT.e0)();
                }
            );
        },
        useTitle: () => _.intl.string(_.t["9cb1Uz"]),
        decoration: {
            type: eb.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                return (0, x.jsxs)(x.Fragment, { children: [(0, x.jsx)(nt, {}), (0, x.jsx)(nn, {})] });
            },
        },
        buildLayout: () => [tv, tU, t7, tF],
    }),
    nl = (0, d.i4)(u.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(_.t["9cb1Uz"]),
        icon: em.l,
        usePredicate: eO.b_,
        buildLayout: () => [ni],
    });
var ns = n(687966),
    na = n(396478),
    nr = n(270003),
    no = n(227309),
    nd = n(363195),
    nu = n(1215),
    nc = n(39623),
    ng = n(952270),
    n_ = n(138134),
    nm = n(414079),
    nh = n(29160),
    nA = n(650583),
    np = n(402627),
    nE = n(653307);
let nT = (0, ey.isWindows)();
function nS(e) {
    let { rawGame: t, nowPlaying: i = !1, isOverride: l, subgames: s, isSubgame: a = !1, parentGame: r } = e,
        o = (0, R.cf)([eJ.Ay, tg.A, t_.A], () => (0, eJ.xU)(t, eJ.Ay, tg.A, t_.A)),
        { canToggleDetection: d, isCurrentGameDetectionEnabled: u } = (0, R.cf)([eJ.Ay], () => ({
            canToggleDetection: null == r || eJ.Ay.isDetectionEnabled(r),
            isCurrentGameDetectionEnabled: eJ.Ay.isDetectionEnabled(o),
        })),
        c = (0, R.bG)([eJ.Ay], () => eJ.Ay.getVisibleGame()),
        [g, m] = f.useState(!1),
        h = f.useMemo(
            () =>
                (0, tf.n1)(o)
                    ? a
                        ? o.gameName
                        : _.intl.formatToPlainString(_.t.G6BGdx, { subgameName: o.gameName })
                    : o.name,
            [o, a],
        ),
        [A, p] = f.useState(h ?? "???"),
        E = eB()(nE.tR, {
            [np.LO]: !i,
            [np.Rw]: i,
            [np.FB]: null != o && i,
            [np.xL]: a,
            [np.fG]: null != s && s.length > 0,
        });
    function T() {
        null != s && s.length > 0 && u
            ? (0, N.openModalLazy)(async () => {
                  let { Modal: e } = await n.e("4823").then(n.bind(n, 158954));
                  return (t) =>
                      (0, x.jsx)(e, {
                          ...t,
                          title: _.intl.formatToPlainString(_.t.PZ4fKc, { platform: h }),
                          subtitle: _.intl.formatToPlainString(_.t.ZIQbfb, { platform: h }),
                          actions: [
                              { text: _.intl.string(_.t["ETE/oC"]), onClick: () => t.onClose(), variant: "secondary" },
                              {
                                  text: _.intl.string(_.t.Fmjztz),
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
    let S = null != c && (0, eJ.Es)(o) === (0, eJ.Es)(c),
        b = (null != r && r.id === c?.id) || S || (null != s && s.some((e) => e.id === c?.id));
    return (0, x.jsxs)(x.Fragment, {
        children: [
            (0, x.jsxs)("div", {
                className: E,
                children: [
                    (0, x.jsxs)("div", {
                        className: eB()(np.$K, nE.Vd),
                        children: [
                            o.verified && !l
                                ? (0, x.jsxs)("div", {
                                      className: np.HS,
                                      children: [
                                          (0, x.jsx)("div", { className: np.mO, children: h }),
                                          (0, x.jsx)(e1.m, {
                                              text: _.intl.string(_.t["4PJP5p"]),
                                              children: (0, x.jsx)(e6.A, {
                                                  className: np.qf,
                                                  size: 18,
                                                  color: B.A.unsafe_rawColors.BRAND_500.css,
                                                  children: (0, x.jsx)(e2.U, {
                                                      size: "custom",
                                                      width: 18,
                                                      height: 18,
                                                      color: B.A.unsafe_rawColors.WHITE.css,
                                                  }),
                                              }),
                                          }),
                                      ],
                                  })
                                : (0, x.jsx)("input", {
                                      className: eB()(np.mO, np.sr),
                                      type: "text",
                                      maxLength: 128,
                                      value: A,
                                      onBlur: function () {
                                          o.name !== A && e3.Ay.editName(o, A);
                                      },
                                      onKeyDown: function (e) {
                                          e.key === nA.dh.ENTER && (e.currentTarget.blur(), e.preventDefault());
                                      },
                                      onChange: (e) => p(e.target.value),
                                  }),
                            (function () {
                                let e,
                                    t,
                                    { played: n, exePath: l } = o;
                                return (
                                    i || S
                                        ? (e = _.intl.string(_.t.VbV5dv))
                                        : null != n && "" !== n && (e = _.intl.format(_.t["gGeOE+"], { when: n })),
                                    (0, x.jsx)("div", {
                                        className: np.GN,
                                        children: (0, x.jsx)(nh.A, {
                                            hoverText:
                                                null != l && "" !== l
                                                    ? ((t = l.replace(/^file:\/\//i, "")),
                                                      (0, ey.isWindows)() && (t = t.toUpperCase()),
                                                      t)
                                                    : "",
                                            children: e,
                                        }),
                                    })
                                );
                            })(),
                        ],
                    }),
                    l || g
                        ? null
                        : (0, x.jsx)("div", {
                              className: eB()(nE.tR, nE.oA, nE.LT, np.E3),
                              children: (0, x.jsx)(e1.m, {
                                  text: _.intl.string(_.t["y0B+lo"]),
                                  children: (0, x.jsx)(k.D, {
                                      "aria-label": _.intl.string(_.t["y0B+lo"]),
                                      className: np.ym,
                                      onClick: function () {
                                          if (g) return;
                                          let e = null != o.id ? tg.A.getDetectableGame(o.id) : null;
                                          Y.default.track(q.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
                                              application_id: e?.id,
                                              game_name: (0, tf.n1)(o) ? o.gameName : o.name,
                                          }),
                                              m(!0),
                                              (0, N.openModalLazy)(async () => {
                                                  let { default: t } = await n.e("82733").then(n.bind(n, 651930));
                                                  return (n) =>
                                                      (0, x.jsx)(t, {
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
                                      children: (0, x.jsx)(n_.i, {
                                          size: "md",
                                          color: "currentColor",
                                          className: np.Lj,
                                          colorClass: np.GS,
                                      }),
                                  }),
                              }),
                          }),
                    (function () {
                        let { detectable: e } = o,
                            t =
                                e && d
                                    ? (0, x.jsx)(nc.b, {
                                          size: "md",
                                          color: "currentColor",
                                          className: np.Lj,
                                          colorClass: np.GS,
                                      })
                                    : (0, x.jsx)(ng.G, {
                                          size: "md",
                                          color: "currentColor",
                                          className: d ? np.$V : np.zN,
                                          colorClass: np.GS,
                                      });
                        return (0, x.jsx)("div", {
                            className: eB()(nE.tR, nE.oA, nE.LT, np.E3),
                            children: (0, x.jsx)(e1.m, {
                                text: _.intl.string(_.t.QmitzM),
                                children: d
                                    ? (0, x.jsx)(k.D, {
                                          "aria-label": _.intl.string(_.t.QmitzM),
                                          className: np.ym,
                                          onClick: T,
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
                                ? (0, x.jsx)(e5.k, {
                                      size: "md",
                                      color: "currentColor",
                                      className: np.Lj,
                                      colorClass: np.GS,
                                  })
                                : (0, x.jsx)(nu.n, {
                                      size: "md",
                                      color: "currentColor",
                                      className: np.$V,
                                      colorClass: np.GS,
                                  }),
                            i = t
                                ? (0, x.jsx)(e1.m, {
                                      text: _.intl.string(_.t.Vfw2L5),
                                      children: (0, x.jsx)("i", { className: np.kb }),
                                  })
                                : null;
                        return (0, x.jsxs)("div", {
                            className: eB()(nE.tR, nE.oA, nE.LT, np.E3),
                            children: [
                                i,
                                (0, x.jsx)(e1.m, {
                                    text: _.intl.string(_.t["1+O+Tu"]),
                                    children: (0, x.jsx)(k.D, {
                                        "aria-label": _.intl.string(_.t["1+O+Tu"]),
                                        className: np.ym,
                                        onClick: () => {
                                            var t;
                                            return (t = !e), void e3.Ay.toggleOverlay(o, t, t);
                                        },
                                        children: n,
                                    }),
                                }),
                            ],
                        });
                    })(),
                    (i && !l) || b
                        ? null
                        : (0, x.jsx)(nm.A, {
                              className: np.LS,
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
                !i &&
                (0, x.jsx)("div", {
                    className: np.AQ,
                    children: s.map((e, t) =>
                        (0, x.jsxs)(
                            f.Fragment,
                            {
                                children: [
                                    (0, x.jsx)(nS, { rawGame: e, isOverride: !1, isSubgame: !0, parentGame: o }),
                                    t !== s.length - 1 && (0, x.jsx)("div", { className: np.PQ }),
                                ],
                            },
                            (0, eJ.Es)(e),
                        ),
                    ),
                }),
        ],
    });
}
n(321073);
let nx = (0, n(583613).L_)(function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return new Set(t.map((e) => e.exePath));
});
function nf() {
    let e = (0, R.yK)([eJ.Ay], () => eJ.Ay.getGamesSeen(!1)),
        t = (0, R.bG)([eJ.Ay], () => nx(...eJ.Ay.getOverrides()));
    f.useEffect(() => ((0, eT.a2)(), eT.e0), []);
    let { gameHistory: n, robloxSubgameHistory: i } = f.useMemo(
        () =>
            e.reduce((e, t) => ((0, tf.n1)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
                gameHistory: [],
                robloxSubgameHistory: [],
            }),
        [e],
    );
    return { gameHistory: n, robloxSubgameHistory: i, overrideExePaths: t };
}
var nb = n(818050);
function nN() {
    let e = (0, R.bG)([nd.A], () => nd.A.theme);
    return (0, x.jsxs)(na.pp, {
        theme: e,
        className: nb.eT,
        children: [
            (0, x.jsx)(na.G8, { darkSrc: n(839628), lightSrc: n(446404), width: 430, height: 250 }),
            (0, x.jsx)(na.SG, { children: _.intl.string(_.t["1yiJwn"]) }),
        ],
    });
}
function nC() {
    let { gameHistory: e, robloxSubgameHistory: t, overrideExePaths: n } = nf();
    return 0 === e.length
        ? (0, x.jsx)(nN, {})
        : (0, x.jsx)(nr.n, {
              children: (0, x.jsx)("div", {
                  children: e.map((e) =>
                      (0, x.jsx)(
                          nS,
                          { rawGame: e, isOverride: n.has(e.exePath), subgames: e.id === no.a7 ? t : void 0 },
                          (0, eJ.Es)(e),
                      ),
                  ),
              }),
          });
}
let nI = (0, d.E2)(u.X.REGISTERED_GAMES_ADDED_GAMES_SETTING, {
    useSearchTerms: () => [],
    Component: () => (0, x.jsx)(nC, {}),
});
var nv = n(424994);
let ny = (0, d.zZ)(u.X.REGISTERED_GAMES_ADDED_GAMES_CATEGORY, {
    buildLayout: () => [nI],
    useTitle: () => _.intl.string(_.t.jCOdvx),
    useSubtitle: () => _.intl.format(_.t.KPA3m9, { igdbLink: nv.s8 }),
});
var nj = n(305866),
    nO = n(783878),
    nR = n(404778),
    nL = n(133801),
    nD = n(604949);
function nG(e) {
    let { onClose: t } = e,
        n = (0, R.bG)([eJ.Ay], () => eJ.Ay.getCandidateGames()),
        [i, l] = f.useState(null),
        s = n.map((e) => ({ id: e.pid.toString(), value: e, label: null != e.name ? e.name : "" }));
    return (0, x.jsxs)(nj.l, {
        className: eB()(nL.H, nD.Y_),
        "aria-label": _.intl.string(_.t.GTCx0p),
        children: [
            (0, x.jsx)(nO.Z, {
                selectionMode: "single",
                placeholder: _.intl.string(_.t.XqMe3N),
                value: i,
                options: s,
                onSelectionChange: function (e) {
                    l(e);
                },
            }),
            (0, x.jsx)(nR.c, { className: eB()(nb.Ot, nb.QB) }),
            (0, x.jsxs)("div", {
                className: eB()(nL.o, nE.xM),
                children: [
                    (0, x.jsx)(F.Q, { variant: "secondary", text: _.intl.string(_.t["ETE/oC"]), onClick: t }),
                    (0, x.jsx)(eA.$, {
                        variant: "primary",
                        text: _.intl.string(_.t.GTCx0p),
                        disabled: null == i,
                        onClick: function () {
                            null != i && (e3.Ay.addGame(i.pid, i.name), t());
                        },
                    }),
                ],
            }),
        ],
    });
}
var nP = n(290280);
let nM = (0, d.E2)(u.X.REGISTERED_GAMES_ADD_GAME_SETTING, {
    useSearchTerms: () => [_.intl.string(_.t.GTCx0p)],
    Component: () => {
        let e = f.useRef(null);
        return (0, x.jsxs)("div", {
            className: eB()(nP.a, nb.Gf),
            children: [
                (0, x.jsx)("span", { children: _.intl.string(_.t.xwhoqM) }),
                (0, x.jsx)(P.Y, {
                    targetElementRef: e,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, x.jsx)(nG, { onClose: t });
                    },
                    align: "center",
                    position: "bottom",
                    children: (t) =>
                        (0, x.jsx)(F.Q, {
                            ...t,
                            buttonRef: e,
                            variant: "primary",
                            textVariant: "text-sm/medium",
                            text: _.intl.string(_.t.GjgdXe),
                        }),
                }),
            ],
        });
    },
});
function nU() {
    return (0, x.jsx)("div", {
        className: eB()(nE.tR, np.eS, np.Rw),
        children: (0, x.jsxs)("div", {
            className: eB()(np.$K, nE.Vd),
            children: [
                (0, x.jsx)("div", { className: np.mO, children: _.intl.string(_.t.H68X9x) }),
                (0, x.jsx)("div", { className: np.GN, children: _.intl.string(_.t.T5Ilmw) }),
            ],
        }),
    });
}
let nk = (0, d.E2)(u.X.REGISTERED_GAMES_CURRENT_GAME_SETTING, {
        useSearchTerms: () => [_.intl.string(_.t["MY9/Oe"])],
        Component: () => {
            let { robloxSubgameHistory: e, overrideExePaths: t } = nf(),
                n = (0, R.bG)([eJ.Ay], () => eJ.Ay.getVisibleGame());
            return null != n
                ? (0, x.jsx)(
                      nS,
                      {
                          rawGame: n,
                          isOverride: t.has(n.exePath),
                          nowPlaying: !0,
                          subgames: n.id === no.a7 ? e : void 0,
                      },
                      (0, eJ.Es)(n),
                  )
                : (0, x.jsx)(nU, {});
        },
    }),
    nV = (0, d.zZ)(u.X.REGISTERED_GAMES_CURRENT_GAME_CATEGORY, {
        useTitle: () => _.intl.string(_.t["MY9/Oe"]),
        buildLayout: () => [nk, nM],
    }),
    nw = (0, d.t_)(u.X.REGISTERED_GAMES_PANEL, {
        useTitle: () => _.intl.string(_.t.AVDyEj),
        buildLayout: () => [nV, ny],
    }),
    nB = (0, d.i4)(u.X.REGISTERED_GAMES_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(_.t.AVDyEj),
        icon: ns._,
        usePredicate: eO.Pi,
        buildLayout: () => [nw],
    }),
    nF = (0, d.WI)(u.X.ACTIVITY_SECTION, {
        useTitle: () => _.intl.string(_.t.SmHCFf),
        buildLayout: () => [eg, nB, nl],
    });
var nz = n(550640),
    nX = n(247928),
    nY = n(97808),
    nH = n(778712),
    nK = n(775602),
    nW = n(320095),
    nZ = n(963852),
    nQ = n(763754),
    nq = n(20851),
    nJ = n(486020),
    n$ = n(585001);
let n0 = new t1.nA({ id: "1337", guild_id: "1337", type: q.rbe.GUILD_TEXT, name: "preview" }),
    n1 = [
        { status: q.clD.IDLE, discriminator: "2" },
        { status: q.clD.DND, discriminator: "3" },
        { status: q.clD.ONLINE, mobile: !0, discriminator: "4" },
    ];
function n2(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return (0, nW.rh)({ ...(0, nZ.Ay)({ channelId: n0.id, content: e }), state: q.cmJ.SENT, reactions: t });
}
var n5 = n(180807);
let n3 = (0, d.zD)(u.X.ENABLE_LEGACY_CHAT_INPUT, {
        useTitle: () => _.intl.string(_.t.TZ2hZH),
        useSubtitle: () => _.intl.string(_.t.Q7wgHc),
        useValue: () => g.D_.useSetting(),
        setValue: (e) => g.D_.updateSetting(e),
    }),
    n8 = (0, d.zD)(u.X.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS, {
        useTitle: () => _.intl.string(_.t.XYvMIX),
        useSubtitle: () => _.intl.string(_.t.T0rbtM),
        useValue: g._z.useSetting,
        setValue: g._z.updateSetting,
    });
var n4 = n(100767),
    n9 = n(106236),
    n7 = n(113494),
    n6 = n(782134),
    ie = n(54570),
    it = n(8880),
    ii = n(75804);
let il = eL().debounce((e) => {
    (0, ie.zU)(e);
}, 250);
function is() {
    let [e, t] = f.useState(!1);
    return (
        (0, e_.l0)(() => (0, ie.pr)()),
        (0, x.jsx)(eA.$, {
            text: _.intl.string(_.t.SKNnqq),
            icon: e ? n7.E : n6.u,
            size: "sm",
            onClick: () => {
                if (e) {
                    (0, ie.pr)(), t(!1);
                    return;
                }
                (0, ie.AU)(
                    _.intl.string(_.t.PKaNJL),
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
let ia = (0, d.E2)(u.X.TTS_PLAYBACK_RATE, {
        useSearchTerms: () => [_.intl.string(_.t.lsW5Ev)],
        Component: function () {
            let e = (0, R.bG)([it.A], () => it.A.speechRate);
            return (0, x.jsxs)(L.B, {
                gap: 16,
                children: [
                    (0, x.jsx)(n9.A, {
                        label: _.intl.string(_.t.lsW5Ev),
                        description: _.intl.string(_.t.Ci4wMS),
                        markers: ii.P,
                        initialValue: e,
                        defaultValue: 1,
                        stickToMarkers: !0,
                        onValueChange: il,
                        onValueRender: (e) => `x${e.toFixed(2)}`,
                        onMarkerRender: (e) =>
                            0 === e
                                ? (0, x.jsx)(V.E, {
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: _.intl.string(_.t["493lwX"]),
                                  })
                                : 10 === e
                                  ? (0, x.jsx)(V.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: _.intl.string(_.t.ZSZEdS),
                                    })
                                  : 1 === e
                                    ? (0, x.jsx)(V.E, {
                                          variant: "text-xs/medium",
                                          color: "text-feedback-positive",
                                          children: "x1.0",
                                      })
                                    : e % 1 == 0
                                      ? ""
                                      : void 0,
                    }),
                    (0, x.jsx)(is, {}),
                ],
            });
        },
        usePredicate: () => n4.$j,
    }),
    ir = (0, d.zZ)(u.X.AUDIO_AND_SCREEN_READER_CATEGORY, {
        useTitle: () => _.intl.string(_.t.XVR0Rb),
        buildLayout: () => [ia, n8, n3],
    }),
    io = (0, d.AK)(u.X.ACCESSIBILITY_TO_DISPLAY_NAVIGATOR, {
        useSubtitle: () => _.intl.string(_.t.aTfeGK),
        destinationKey: u.X.APPEARANCE_PANEL,
    }),
    id = (0, d.gN)(u.X.COLOR_AND_CONTRAST_RELATED_SETTINGS, { buildLayout: () => [io] });
var iu = n(955572);
let ic = (0, d.zD)(u.X.DESATURATE_CUSTOM_COLORS, {
    useTitle: () => _.intl.string(_.t.OCJg5f),
    useSubtitle: () => _.intl.string(_.t.HEO0s3),
    useValue: () => (0, R.bG)([nK.A], () => nK.A.desaturateUserColors),
    setValue: () => (0, iu.YV)(),
});
var ig = n(652525);
let i_ = (0, d.zD)(u.X.ENABLE_CUSTOM_CURSOR, {
        useTitle: () => _.intl.string(_.t["+Isihb"]),
        useSubtitle: () => _.intl.string(_.t.nNZ1Tz),
        useValue: () => (0, R.bG)([nK.A], () => nK.A.enableCustomCursor),
        setValue: (e) => (0, iu.ts)(e),
        usePredicate: () => (0, ig.t)("EnableCustomCursorSetting"),
    }),
    im = (0, d.zD)(u.X.ENABLE_SWITCH_ICONS, {
        useTitle: () => _.intl.string(_.t["S3z+pV"]),
        useSubtitle: () => _.intl.string(_.t["3QuI9+"]),
        useValue: () => (0, R.bG)([nK.A], () => nK.A.isSwitchIconsEnabled),
        setValue: (e) => (0, iu.Gm)(e),
        hasIcon: !0,
    }),
    ih = (0, d.zD)(u.X.HIGH_CONTRAST_MODE, {
        useTitle: () => _.intl.string(_.t.aZlePv),
        useSubtitle: () => _.intl.string(_.t["v2qF8+"]),
        useValue: () => (0, R.bG)([nK.A], () => nK.A.isHighContrastModeEnabled),
        setValue: (e) => (0, iu.uh)(e ? nK._.HIGH : nK._.DEFAULT),
        getDismissibleBadges: () => [
            { badgeType: eb.Xi.NEW, dismissibleContent: ep.M.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE },
        ],
    });
var iA = n(406360),
    ip = n(964404);
let iE = (0, d.Qx)(u.X.HIGH_DYNAMIC_RANGE, {
        useTitle: () => _.intl.string(_.t.nemtgW),
        useSubtitle: () => _.intl.string(_.t["O/Gjvn"]),
        usePersistentBadge: () => ({ badgeType: eb.Xi.BETA }),
        useOptions: function () {
            return f.useMemo(
                () => [
                    { name: _.intl.string(_.t.D5Fma9), desc: _.intl.string(_.t.Qj75ck), value: "no-limit" },
                    { name: _.intl.string(_.t.ldcGIH), desc: _.intl.string(_.t["+V/bDk"]), value: "standard" },
                ],
                [],
            );
        },
        usePredicate: function () {
            return (0, iA.i)("HDRDynamicRangeSetting");
        },
        setValue: function (e) {
            (0, iu.FU)(e);
        },
        useValue: function () {
            return (0, R.bG)([ip.Ay], () => ip.Ay.hdrDynamicRange);
        },
        useSearchTerms: () => ["HDR", _.intl.string(_.t["O/Gjvn"])],
    }),
    iT = (0, d.Hn)(u.X.ROLE_STYLE, {
        useTitle: () => _.intl.string(_.t.uSOPWm),
        useSubtitle: () => _.intl.string(_.t.u7fFKS),
        useOptions: () => [
            { id: "username", label: _.intl.string(_.t.eDdMzJ), value: "username" },
            { id: "dot", label: _.intl.string(_.t.rdmJp0), value: "dot" },
            { id: "hidden", label: _.intl.string(_.t.Ji2EVJ), value: "hidden" },
        ],
        useValue: () => (0, R.bG)([nK.A], () => nK.A.roleStyle),
        setValue: (e) => (0, iu.IX)(e),
    });
(0, d.Qx)(u.X.ROLE_STYLE, {
    useTitle: () => _.intl.string(_.t.uSOPWm),
    useSubtitle: () => _.intl.string(_.t["86hjzQ"]),
    useOptions: () => [
        { name: _.intl.string(_.t.YEOEi6), value: "username" },
        { name: _.intl.string(_.t.mQaro3), value: "dot" },
        { name: _.intl.string(_.t.Ji2EVJ), value: "hidden" },
    ],
    useValue: () => (0, R.bG)([nK.A], () => nK.A.roleStyle),
    setValue: (e) => (0, iu.IX)(e),
});
let iS = (0, d.sN)(u.X.SATURATION, {
    useTitle: () => _.intl.string(_.t["5PWWCY"]),
    useSubtitle: () => _.intl.string(_.t.xf5S6P),
    markers: q.hH7.SATURATION_INCREMENTS,
    onMarkerRender: (e) => ((100 * e) % 2 == 0 ? `${100 * e}%` : void 0),
    stickToMarkers: !0,
    minValue: 0,
    maxValue: 1,
    getInitialValue: () => nK.A.saturation,
    asValueChanges: (e) => (0, iu.HU)(e),
});
var ix = n(839214),
    ib = n(502229);
let iN = (0, ix.D)(() => ({ syncEnabled: null, updateTimeout: null })),
    iC = (0, d.zD)(u.X.SYNC_FORCED_COLORS, {
        useTitle: () => _.intl.string(_.t.cguiec),
        useSubtitle: () => _.intl.format(_.t.GwEVE2, { learnMoreLink: to.A.getArticleURL(q.MVz.FORCED_COLORS) }),
        useValue: () => {
            let e = (0, R.bG)([nK.A], () => nK.A.syncForcedColors);
            return (
                (0, e9.Ay)(() => {
                    iN.setState({ syncEnabled: nK.A.syncForcedColors });
                }),
                iN.useState((e) => e.syncEnabled) ?? e
            );
        },
        setValue: (e) => {
            let { updateTimeout: t } = iN.getState();
            if (null != t) {
                clearTimeout(t), iN.setState({ syncEnabled: e, updateTimeout: null });
                return;
            }
            if (e === nK.A.syncForcedColors) return void iN.setState({ syncEnabled: e });
            let n = setTimeout(() => {
                (0, iu.D3)(e), iN.setState({ updateTimeout: null });
            }, 150);
            iN.setState({ syncEnabled: e, updateTimeout: n });
        },
        usePredicate: () => (0, ib.D)(),
    }),
    iI = (0, d.zZ)(u.X.COLOR_AND_CONTRAST_CATEGORY, {
        useTitle: () => _.intl.string(_.t.JqvyiY),
        buildLayout: () => [iS, ic, ih, i_, iC, iE, iT, im, id],
    });
var iv = n(397438),
    iy = n(355097);
function ij(e) {
    return (0, R.bG)([iv.A], () =>
        (function (e) {
            switch (e) {
                case iy._A.REDUCED_MOTION:
                    return _.intl.format(_.t["1dT9V4"], {});
                case iy._A.REDUCED_MOTION_STICKERS:
                    return _.intl.string(_.t["2ExvRu"]);
                default:
                    return;
            }
        })(iv.A.getAppliedOverrideReasonKey(e)),
    );
}
let iO = (0, d.zD)(u.X.ANIMATE_EMOJIS, {
        useTitle: () => _.intl.string(_.t.iIaOlc),
        useSubtitle: () => ij("animateEmoji"),
        useValue: () => g.Sf.useSetting(),
        setValue: (e) => g.Sf.updateSetting(e),
    }),
    iR = (0, d.zD)(u.X.ANIMATE_GIFS, {
        useTitle: () => _.intl.string(_.t.wqsK7q),
        useSubtitle: () => ij("gifAutoPlay"),
        useValue: () => g.kt.useSetting(),
        setValue: (e) => g.kt.updateSetting(e),
    });
var iL = n(823894);
let iD = (0, d.Qx)(u.X.ANIMATE_STICKERS, {
        useTitle: () => _.intl.string(_.t.sBHIh0),
        useSubtitle: () => ij("animateStickers"),
        useOptions: () => [
            { name: _.intl.string(_.t["Xp+X2U"]), value: iL.BJ.ALWAYS_ANIMATE },
            { name: _.intl.string(_.t.IlLT7e), desc: _.intl.string(_.t.bIW9Tl), value: iL.BJ.ANIMATE_ON_INTERACTION },
            { name: _.intl.string(_.t.IGu8x3), value: iL.BJ.NEVER_ANIMATE },
        ],
        useValue: () => g.S0.useSetting(),
        setValue: (e) => g.S0.updateSetting(e),
    }),
    iG = (0, d.zD)(u.X.REDUCED_MOTION, {
        useTitle: () => _.intl.string(_.t.b3XBzg),
        useSubtitle: () => _.intl.format(_.t.XqvxJc, { helpdeskArticle: to.A.getArticleURL(q.MVz.REDUCED_MOTION) }),
        useValue: () => (0, R.bG)([nK.A], () => nK.A.useReducedMotion),
        setValue: (e) => (0, iu.qz)(e ? "reduce" : "no-preference"),
    }),
    iP = (0, d.zD)(u.X.SYNC_REDUCED_MOTION, {
        useTitle: () => _.intl.string(_.t.oL55A6),
        useValue: () => (0, R.bG)([nK.A], () => "auto" === nK.A.rawPrefersReducedMotion),
        setValue: (e) => (0, iu.qz)(e ? "auto" : nK.A.systemPrefersReducedMotion),
    }),
    iM = (0, d.zZ)(u.X.MOTION_CATEGORY, {
        useTitle: () => _.intl.string(_.t.e3TR1b),
        buildLayout: () => [iG, iP, iR, iO, iD],
    });
var iU = n(688810),
    ik = n(259065),
    iV = n(864386);
let iw = (0, d.zD)(u.X.DISPLAY_NAME_STYLES, {
        useTitle: () => _.intl.string(iV.default["2gFUEw"]),
        useSubtitle: () => {
            let { analyticsLocations: e } = (0, iU.Ay)();
            return _.intl.format(iV.default.aEax6P, {
                onClickOpenModal() {
                    (0, ik.L)({ analyticsLocations: e });
                },
            });
        },
        useValue: () => (0, R.bG)([nK.A], () => nK.A.displayNameStylesEnabled),
        setValue: (e) => (0, iu.Dm)(e),
    }),
    iB = (e) => `${e.toFixed(0)}px`,
    iF = (0, d.sN)(u.X.APPEARANCE_FONT_SCALING, {
        useTitle: () => _.intl.string(_.t.rT3Pq5),
        useSubtitle: () => _.intl.string(_.t.LXUhen),
        markers: q.hH7.FONT_SIZES,
        stickToMarkers: !0,
        minValue: q.hH7.FONT_SIZES["0"],
        maxValue: q.hH7.FONT_SIZES[q.hH7.FONT_SIZES.length - 1],
        useDefaultValue: () => q.hH7.FONT_SIZE_DEFAULT,
        getInitialValue: () => nK.A.fontSize,
        onValueRender: iB,
        onMarkerRender: iB,
        asValueChanges: (e) => (0, iu.XS)(e),
    }),
    iz = (0, d.zD)(u.X.UNDERLINE_LINKS, {
        useTitle: () => _.intl.string(_.t.OLZFB8),
        useSubtitle: () => _.intl.string(_.t.DIX3ke),
        useValue: () => (0, R.bG)([nK.A], () => nK.A.alwaysShowLinkDecorations),
        setValue: (e) => (0, iu.kI)(e),
    }),
    iX = (0, d.zZ)(u.X.TEXT_READABILITY_CATEGORY, {
        useTitle: () => _.intl.string(_.t["bxh/R7"]),
        buildLayout: () => [iF, iz, iw],
    }),
    iY = (0, d.Qx)(u.X.APPEARANCE_UI_DENSITY, {
        useTitle: () => _.intl.string(_.t["C/5V0A"]),
        useSubtitle: () => _.intl.string(_.t.QLZhYk),
        useSearchTerms: () => ["List Spacing"],
        useOptions: () => [
            { name: _.intl.string(_.t["7iegX4"]), value: b.NS.COMPACT },
            { name: _.intl.string(_.t.bBvAEH), value: b.NS.DEFAULT },
            { name: _.intl.string(_.t["4cuYHx"]), value: b.NS.COZY },
        ],
        useValue: () => g.Xi.useSetting(),
        setValue: (e) => {
            e !== b.NS.UNSET_UI_DENSITY && g.Xi.updateSetting(e);
        },
    }),
    iH = "cozy",
    iK = "compact",
    iW = (0, d.Qx)(u.X.APPEARANCE_MESSAGE_DISPLAY_MODE, {
        useTitle: () => _.intl.string(_.t.nKRoPv),
        useSubtitle: () => _.intl.string(_.t.QntEEG),
        useSearchTerms: () => [_.intl.string(_.t.ZEoGMd)],
        useOptions: () => [
            { name: _.intl.string(_.t.Jqj4cZ), value: iH },
            { name: _.intl.string(_.t["1JNcPS"]), value: iK },
        ],
        useValue: () => (g.hH.useSetting() ? iK : iH),
        setValue: (e) => {
            g.hH.updateSetting(e === iK), (0, iu.AC)();
        },
    });
var iZ = n(381941);
let iQ = (e) => `${e.toFixed(0)}px`,
    iq = (0, d.sN)(u.X.APPEARANCE_MESSAGE_GROUP_SPACING, {
        useTitle: () => _.intl.string(_.t.Q6lKkg),
        useSubtitle: () => _.intl.string(_.t.p7eUrb),
        markers: iZ.qh,
        stickToMarkers: !0,
        minValue: iZ.qh["0"],
        maxValue: iZ.qh[iZ.qh.length - 1],
        useDefaultValue: () => (g.hH.useSetting() ? iZ.y5 : iZ.ES),
        getInitialValue: () => {
            let e = nK.A.messageGroupSpacing,
                t = g.hH.getSetting();
            return null != e ? e : t ? iZ.y5 : iZ.ES;
        },
        onValueRender: iQ,
        onMarkerRender: iQ,
        asValueChanges: (e) => {
            switch (e) {
                case 0:
                case 4:
                case 8:
                case 16:
                case 24:
                    (0, iu.AC)(e);
            }
        },
    });
var iJ = n(775121);
let i$ = (0, d.sN)(u.X.APPEARANCE_ZOOM, {
        usePredicate: () => ey.isPlatformEmbedded,
        useTitle: () => _.intl.string(_.t.i19n5L),
        useSubtitle: () => _.intl.format(_.t["x9PK/3"], { modKey: iJ.A.modKey }),
        markers: q.hH7.ZOOM_SCALES,
        stickToMarkers: !0,
        minValue: q.hH7.ZOOM_SCALES["0"],
        maxValue: q.hH7.ZOOM_SCALES[q.hH7.ZOOM_SCALES.length - 1],
        useDefaultValue: () => q.hH7.ZOOM_DEFAULT,
        getInitialValue: () => nK.A.zoom,
        useExternalValue: () => (0, R.bG)([nK.A], () => nK.A.zoom),
        onValueRender: (e) => `${e.toFixed(0)}%`,
        setValue: (e) => (0, iu.Qp)(e),
        useSearchTerms: () => [_.intl.string(_.t.ip0uSf)],
    }),
    i0 = (0, d.zZ)(u.X.VISUAL_DENSITY_CATEGORY, {
        useTitle: () => _.intl.string(_.t.VKYWk8),
        buildLayout: () => [iY, iW, iq, i$],
    }),
    i1 = (0, d.t_)(u.X.ACCESSIBILITY_PANEL, {
        useTitle: () => _.intl.string(_.t.G0neg7),
        buildLayout: () => [iX, i0, iI, iM, ir],
        decoration: {
            type: eb.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                let e = g.hH.useSetting(),
                    t = g.jW.useSetting(),
                    n = f.useMemo(
                        () => [
                            n2(
                                _.intl.formatToPlainString(_.t.BknJRT, {}),
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
                            n2(
                                _.intl.formatToPlainString(_.t["4rDfgM"], {
                                    link: "https://discord.com/accessibility",
                                }),
                            ),
                        ],
                        [t],
                    ),
                    i = (0, R.bG)([nK.A], () => nK.A.messageGroupSpacing);
                return (0, x.jsx)(nX.M, {
                    children: (0, x.jsxs)("section", {
                        children: [
                            (0, x.jsx)(eh.D, {
                                variant: "text-md/medium",
                                color: "text-muted",
                                className: n$.Vf,
                                children: _.intl.string(_.t.RC22qg),
                            }),
                            (0, x.jsxs)(tS.Ip, {
                                className: n$.VH,
                                children: [
                                    (0, x.jsx)("ol", {
                                        className: n$.DZ,
                                        style: { gap: i },
                                        "aria-label": _.intl.string(_.t.xfjsEV),
                                        children: n.map((t) =>
                                            (0, x.jsx)(
                                                "li",
                                                {
                                                    children: (0, x.jsx)(nq.A, {
                                                        message: t,
                                                        channel: n0,
                                                        compact: e,
                                                        author: { ...(0, nQ.p_)(t), colorString: "#dd80f4" },
                                                    }),
                                                },
                                                t.id,
                                            ),
                                        ),
                                    }),
                                    (0, x.jsxs)("div", {
                                        className: n$.Jb,
                                        children: [
                                            (0, x.jsx)("div", {
                                                className: n$.HD,
                                                children: n1.map((e) => {
                                                    let { status: t, discriminator: n, mobile: i = !1 } = e;
                                                    return (0, x.jsx)(
                                                        nY.eu,
                                                        {
                                                            status: t,
                                                            isMobile: i,
                                                            size: nH._3.SIZE_32,
                                                            src: nJ.Ay.getDefaultAvatarURL(void 0, n),
                                                            "aria-label": _.intl.string(_.t.VKE5TK),
                                                        },
                                                        t,
                                                    );
                                                }),
                                            }),
                                            (0, x.jsx)(eA.$, {
                                                text: _.intl.string(_.t["2RHHgz"]),
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
    i2 = (0, d.i4)(u.X.ACCESSIBILITY_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(_.t.G0neg7),
        icon: nz.c,
        useMenu: n5.A,
        buildLayout: () => [i1],
    });
var i5 = n(650809),
    i3 = n(636537),
    i8 = n(228366),
    i4 = n(74396),
    i9 = n(227542),
    i7 = n(55619),
    i6 = n(777666);
function le() {
    return (0, x.jsx)(i6.JI, { text: _.intl.string(_.t.y2b7CA) });
}
var lt = n(574381),
    ln = n(314116),
    li = n(19575),
    ll = n(208039);
let ls = (0, d.E2)(u.X.HARDWARE_ACCELERATION, {
    usePredicate: () => lt.Av && !(0, lt.cX)(),
    useSearchTerms: () => [_.intl.string(_.t["/HIxyY"]), _.intl.string(_.t.B0hqpb)],
    Component: function () {
        let [e] = f.useState(() => li.Ay.getEnableHardwareAcceleration()),
            t = _.intl.string(_.t["/HIxyY"]),
            n = _.intl.string(_.t.B0hqpb);
        return (0, x.jsxs)(L.B, {
            children: [
                (0, x.jsx)(D.d, { label: t, description: n, checked: e, onChange: la }),
                !e && (0, x.jsx)(ll.A, { look: ll.k.WARNING, children: _.intl.string(_.t.j7S6IX) }),
            ],
        });
    },
});
function la(e) {
    let t = e ? _.intl.format(_.t.LYXRxL, {}) : _.intl.format(_.t.uDP3Kz, {});
    (0, ln.A)({
        title: _.intl.string(_.t.aqpAvn),
        subtitle: t,
        confirmText: _.intl.string(_.t.vT7ckk),
        onConfirm: () => {
            li.Ay.setEnableHardwareAcceleration(e);
        },
    });
}
let lr = (0, d.zD)(u.X.SHOW_GAME_LIBRARY, {
        usePredicate: () => (0, R.bG)([t_.A], () => t_.A.hasLibraryApplication()),
        useTitle: () => _.intl.string(_.t.fi3UQN),
        useSubtitle: () => _.intl.string(_.t["8mYp37"]),
        useValue: () => !g.l_.useSetting(),
        setValue: (e) => g.l_.updateSetting(!e),
    }),
    lo = (0, d.zZ)(u.X.APPEARANCE_ADVANCED_CATEGORY, {
        useTitle: () => _.intl.string(_.t["8/udY0"]),
        buildLayout: () => [ls, lr],
    });
var ld = n(565645);
let lu = (0, d.zD)(u.X.CHAT_EMOJI_CONVERT_EMOTICONS, {
        useTitle: () => _.intl.string(_.t["79qal8"]),
        useSubtitle: () =>
            _.intl.format(_.t.GejoQK, { emojiHook: (e, t) => (0, x.jsx)(ld.A, { emojiName: "\uD83D\uDE42" }, t) }),
        useValue: g.j7.useSetting,
        setValue: g.j7.updateSetting,
    }),
    lc = (0, d.zD)(u.X.ENABLE_SEND_BUTTON, {
        useTitle: () => _.intl.string(_.t["I/5LyL"]),
        useValue: () => (0, R.bG)([nK.A], () => nK.A.isSubmitButtonEnabled),
        setValue: () => (0, iu.Xt)(),
    }),
    lg = (0, d.zD)(u.X.CHAT_TEXT_BOX_PREVIEWS, {
        useTitle: () => _.intl.string(_.t.AqGrEI),
        useValue: g.SI.useSetting,
        setValue: (e) => {
            Y.default.track(q.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                enabled: e,
                location: { section: q.JJy.SETTINGS_TEXT_AND_IMAGES },
            }),
                g.SI.updateSetting(e);
        },
    }),
    l_ = (0, d.zD)(u.X.CHAT_STICKERS_AUTOCOMPLETE, {
        useTitle: () => _.intl.string(_.t["d+It2U"]),
        useValue: g.ML.useSetting,
        setValue: (e) => {
            Y.default.track(q.HAw.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                enabled: e,
                location: { section: q.JJy.SETTINGS_TEXT_AND_IMAGES },
                location_stack: [ek.A.TEXT_AND_IMAGES],
            }),
                g.ML.updateSetting(e);
        },
    }),
    lm = (0, d.zZ)(u.X.APPEARANCE_CHAT_BOX_CATEGORY, {
        useTitle: () => _.intl.string(_.t.Ob7VMB),
        useSearchTerms: () => [_.intl.string(_.t.onqU6o)],
        buildLayout: () => [lg, lu, l_, lc],
    });
var lh = n(526162),
    lA = n(793943),
    lp = n(792656),
    lE = n(779733),
    lT = n(785007),
    lS = n(806932),
    lx = n(915089),
    lf = n(635917),
    lb = n(788868);
let lN = (0, d.E2)(u.X.APPEARANCE_IN_APP_ICON, {
    useSearchTerms: () => [_.intl.string(_.t.gnwxvT)],
    Component: function () {
        let e = (0, lx.GV)(),
            { ref: t, ...n } = (0, lT._u)({ orientation: "horizontal", labelledBy: e }),
            i = (0, R.bG)([lh.A], () => lh.A.isUpsellPreview);
        return (
            (0, e_.Ay)(() => {
                i &&
                    Y.default.track(q.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: lb.e.APP_ICON_UPSELL,
                        location_stack: [ek.A.USER_SETTINGS],
                    });
            }),
            (0, x.jsx)("div", {
                ...n,
                ref: t,
                children: (0, x.jsx)(L.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    children: (0, x.jsx)(lS.m, { disabled: i, size: lf.N8.SIZE_48 }),
                }),
            })
        );
    },
});
function lC() {
    (0, lA.nf)(lA.HP.APP_ICON), (0, lE.default)();
}
function lI() {
    return (0, x.jsx)(lp.A, {
        subscriptionTier: lb.pe.TIER_2,
        defaultTextOverride: _.intl.string(_.t.mr4K7D),
        premiumModalAnalyticsLocation: { object: q.ZSU.BUTTON_CTA, objectType: q.AnalyticsObjectTypes.BUY },
        fullWidth: !0,
    });
}
let lv = (0, d.zZ)(u.X.APPEARANCE_IN_APP_ICON_CATEGORY, {
        useTitle: () => _.intl.string(_.t.RPh2ou),
        useSubtitle: () => _.intl.string(_.t.IgENJo),
        useHeaderDecoration: function () {
            let e = (0, R.bG)([lh.A], () => lh.A.isUpsellPreview);
            return f.useMemo(() => {
                let t = [];
                return (
                    t.push({
                        id: "preview-icon-button",
                        type: eb.UV.BUTTON,
                        text: _.intl.string(_.t["6acvnZ"]),
                        onClick: lC,
                    }),
                    e && t.push({ id: "upsell-button", type: eb.UV.STRONGLY_DISCOURAGED_CUSTOM, button: lI }),
                    { type: eb.WX.BUTTON_GROUP, buttons: t }
                );
            }, [e]);
        },
        buildLayout: () => [lN],
    }),
    ly = (0, d.AK)(u.X.APPEARANCE_CHAT_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => _.intl.string(_.t.UDr3Iy),
        useSearchTerms: () => [_.intl.string(_.t.UDr3Iy)],
        destinationKey: u.X.ACCESSIBILITY_PANEL,
    }),
    lj = (0, d.gN)(u.X.APPEARANCE_CHAT_RELATED_SETTINGS, { buildLayout: () => [ly] });
var lO = n(379587),
    lR = n(452027),
    lL = n(976860),
    lD = n(474090),
    lG = n(181079),
    lP = n(422258),
    lM = n(668267),
    lU = n(313281),
    lk = n(335993);
let lV = to.A.getArticleURL(q.MVz.FAVORITES_GUILD);
function lw() {
    let { analyticsLocations: e } = (0, iU.Ay)(ek.A.USER_SETTINGS_FAVORITES),
        t = f.useCallback(() => {
            (0, lM.mv)("settings_page"), (0, lL.uh)(q.YYv), (0, lE.default)();
        }, []);
    return (0, x.jsx)(iU.f5, {
        value: e,
        children: (0, x.jsx)(lR.D, {
            label: _.intl.string(lk.default.OT1NK5),
            description: _.intl.format(lk.default.GR2KOG, { helpCenterLink: lV }),
            layout: "horizontal-responsive",
            badge: "beta",
            children: (0, x.jsxs)(L.B, {
                direction: "horizontal",
                gap: 8,
                fullWidth: !1,
                children: [
                    (0, x.jsx)(eA.$, { variant: "secondary", text: _.intl.string(lk.default["7WwLnr"]), onClick: t }),
                    (0, x.jsx)(lp.A, {
                        subscriptionTier: lb.pe.TIER_2,
                        defaultTextOverride: _.intl.string(lk.default["20sYUU"]),
                    }),
                ],
            }),
        }),
    });
}
let lB = (0, d.E2)(u.X.CHAT_FAVORITES_TOGGLE, {
        usePredicate: () => (0, lO.m)({ location: "FavoritesGuildToggle" }).enabled,
        useSearchTerms: () => [_.intl.string(lk.default.OT1NK5)],
        Component: function () {
            let e = (0, R.bG)([lG.A], () => lG.A.favoriteGuildEnabled),
                t = (0, R.bG)([t3.default], () => {
                    let e = t3.default.getCurrentUser();
                    return null != e && lD.Ay.isPremiumExactly(e, lb.PremiumTypes.TIER_2);
                }),
                n = (0, lU.DZ)(),
                i = f.useCallback(
                    (e) => {
                        (0, lP.tV)(e, "settings_page"), !e && n && (0, lL.pX)(q.BVt.ME);
                    },
                    [n],
                );
            return t
                ? (0, x.jsx)(D.d, {
                      checked: e,
                      description: _.intl.format(lk.default.GR2KOG, { helpCenterLink: lV }),
                      onChange: i,
                      label: _.intl.string(lk.default.OT1NK5),
                      badge: "beta",
                  })
                : (0, x.jsx)(lw, {});
        },
    }),
    lF = (0, d.zD)(u.X.CHAT_INLINE_MEDIA_LINKS, {
        useTitle: () => _.intl.string(_.t.U47N1p),
        useValue: g.hD.useSetting,
        setValue: g.hD.updateSetting,
    }),
    lz = (0, d.zD)(u.X.CHAT_INLINE_MEDIA_UPLOADS, {
        useTitle: () => _.intl.string(_.t.VP11No),
        useValue: g.X6.useSetting,
        setValue: g.X6.updateSetting,
    }),
    lX = (0, d.FW)(u.X.CHAT_INLINE_FIELD_SET, {
        useTitle: () => _.intl.string(_.t["9nyle0"]),
        buildLayout: () => [lF, lz],
    }),
    lY = (0, d.zD)(u.X.CHAT_EMBEDS_RENDER_EMBEDS, {
        useTitle: () => _.intl.string(_.t["5bK9vw"]),
        useValue: g.rs.useSetting,
        setValue: g.rs.updateSetting,
    }),
    lH = (0, d.zD)(u.X.CHAT_EMOJI_RENDER_REACTIONS, {
        useTitle: () => _.intl.string(_.t["zge/fP"]),
        useValue: g.jW.useSetting,
        setValue: g.jW.updateSetting,
    });
var lK = n(817281);
let lW = (0, d.zD)(u.X.APPEARANCE_DISPLAY_COMPACT_AVATARS, {
        useTitle: () => _.intl.string(_.t.JgjNG3),
        useSubtitle: () => {
            if (!g.hH.useSetting())
                return _.intl.format(_.t["31PRaj"], {
                    a11yHook: (e, t) =>
                        (0, x.jsx)(
                            k.D,
                            {
                                tag: "a",
                                onClick: () => (0, ej.openUserSettings)(u.X.APPEARANCE_MESSAGE_DISPLAY_MODE),
                                children: e,
                            },
                            t,
                        ),
                });
        },
        useDisabled: () => !g.hH.useSetting(),
        useValue: () => {
            let e = (0, R.bG)([ip.Ay], () => ip.Ay.displayCompactAvatars);
            return !g.hH.useSetting() || e;
        },
        setValue: (e) => {
            lK.Ay.updatedUnsyncedSettings({ displayCompactAvatars: e });
        },
    }),
    lZ = (0, d.Hn)(u.X.CHAT_SPOILERS_SHOW_SPOILERS, {
        useTitle: () => _.intl.string(_.t.QgwmVz),
        useOptions: () => [
            { value: q.P6Q.ON_CLICK, id: q.P6Q.ON_CLICK, label: _.intl.string(_.t["KFH/me"]) },
            { value: q.P6Q.ALWAYS, id: q.P6Q.ALWAYS, label: _.intl.string(_.t.Pe1RbL) },
            { value: q.P6Q.IF_MODERATOR, id: q.P6Q.IF_MODERATOR, label: _.intl.string(_.t.K5VTBE) },
        ],
        useValue: g.gs.useSetting,
        setValue: g.gs.updateSetting,
    }),
    lQ = (0, d.zD)(u.X.CHAT_THREADS_SPLIT_VIEW, {
        useTitle: () => _.intl.string(_.t.AInv5m),
        useValue: g.SY.useSetting,
        setValue: g.SY.updateSetting,
    }),
    lq = (0, d.zZ)(u.X.APPEARANCE_MESSAGES_CATEGORY, {
        useTitle: () => _.intl.string(_.t.OIgYlQ),
        useSearchTerms: () => [_.intl.string(_.t["/VQax8"])],
        buildLayout: () => [lX, lY, lH, lZ, lQ, lW, lB, lj],
    });
var lJ = n(753806),
    l$ = n(145331);
let l0 = (0, d.Qx)(u.X.MESSAGE_SEARCH_DEFAULT_DM_SEARCH_BEHAVIOR, {
        useTitle: () => _.intl.string(_.t.VkoLsy),
        useSearchTerms: () => [_.intl.string(_.t["t4+fbe"])],
        useOptions: function () {
            return [
                { name: _.intl.string(_.t.E9JM4J), value: 0 },
                { name: _.intl.string(_.t["Kr+lPi"]), value: 1 },
            ];
        },
        useValue: () => +!!g.Hu.useSetting(),
        setValue: (e) => {
            let t = 1 === e;
            t ? lJ.A.cleanUpPrivateChannelSearchState() : lJ.A.cleanUpSearchState({ type: q.I4_.DMS }),
                (0, l$._k)({
                    prevIsCrossDMSettingEnabled: g.Hu.getSetting(),
                    isCrossDMSettingEnabled: t,
                    location: l$.vy.USER_SETTINGS,
                }),
                g.Hu.updateSetting(t);
        },
    }),
    l1 = (0, d.zZ)(u.X.APPEARANCE_SEARCH_CATEGORY, {
        useTitle: () => _.intl.string(_.t["5h0QOP"]),
        buildLayout: () => [l0],
    }),
    l2 = (0, d.zD)(u.X.STREAMING_AUTO_STREAMER_MODE, {
        useTitle: () => _.intl.string(_.t.IxjaoF),
        useValue: function () {
            return (0, R.bG)([eN.A], () => {
                let { autoToggle: e } = eN.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            i7.A.update({ autoToggle: e });
        },
        usePredicate: function () {
            return lt.Av;
        },
    }),
    l5 = (0, d.zD)(u.X.STREAMING_STREAMER_MODE, {
        useTitle: () => _.intl.string(_.t.TGNg6T),
        useSubtitle: () => _.intl.string(_.t["4nXLnE"]),
        useValue: function () {
            return (0, R.bG)([eN.A], () => {
                let { enabled: e } = eN.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            i7.A.update({ enabled: e });
        },
    });
var l3 = n(77729),
    l8 = n(349230);
let l4 = [],
    l9 = (0, d.Hn)(u.X.STREAMER_MODE_HIDE_OVERLAY_WIDGETS, {
        selectionMode: "multiple",
        useTitle: () => _.intl.string(_.t.VCDSLW),
        useSearchTerms: () => [_.intl.string(_.t.VCDSLW)],
        usePredicate: () => {
            let e = (0, eO.b_)(),
                t = (0, eS.Mn)("StreamerModeSettings");
            return e && t;
        },
        useOptions: function () {
            return f.useMemo(() => {
                let e = [];
                for (let [t, n] of Object.entries(l8.A))
                    null != n.streamerModeLabel &&
                        (null == n.predicate || n.predicate()) &&
                        e.push({ id: t, value: t, label: n.streamerModeLabel() });
                return e;
            }, []);
        },
        useValue: function () {
            return (0, R.bG)([eN.A], () => eN.A.getSettings().disabledOverlayWidgets ?? l4);
        },
        setValue: (e) => i7.A.update({ disabledOverlayWidgets: e }),
        closeOnSelect: !1,
        wrapTags: !0,
    }),
    l7 = (0, d.zD)(u.X.STREAMER_MODE_HIDE_PERSONAL_INFORMATION, {
        useTitle: () => _.intl.string(_.t.LSBUGR),
        useValue: () =>
            (0, R.bG)([eN.A], () => {
                let { hidePersonalInformation: e } = eN.A.getSettings();
                return e;
            }),
        setValue: (e) => i7.A.update({ hidePersonalInformation: e }),
    }),
    l6 = (0, d.zD)(u.X.STREAMER_MODE_HIDE_INVITE_LINKS, {
        useTitle: () => _.intl.string(_.t.uWBOri),
        useValue: () =>
            (0, R.bG)([eN.A], () => {
                let { hideInstantInvites: e } = eN.A.getSettings();
                return e;
            }),
        setValue: (e) => i7.A.update({ hideInstantInvites: e }),
    }),
    se = (0, d.zD)(u.X.STREAMER_MODE_DISABLE_SOUNDS, {
        useTitle: () => _.intl.string(_.t.OrqYDP),
        useValue: () =>
            (0, R.bG)([eN.A], () => {
                let { disableSounds: e } = eN.A.getSettings();
                return e;
            }),
        setValue: (e) => i7.A.update({ disableSounds: e }),
    }),
    st = (0, d.zD)(u.X.STREAMER_MODE_DISABLE_NOTIFICATIONS, {
        useTitle: () => _.intl.string(_.t.sUAbLd),
        useValue: () =>
            (0, R.bG)([eN.A], () => {
                let { disableNotifications: e } = eN.A.getSettings();
                return e;
            }),
        setValue: (e) => i7.A.update({ disableNotifications: e }),
    }),
    sn = (0, d.zD)(u.X.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE, {
        useTitle: () => _.intl.string(_.t["iA81+a"]),
        useSubtitle: () => _.intl.string(_.t.P4vj0h),
        useValue: () =>
            (0, R.bG)([eN.A], () => {
                let { enableContentProtection: e } = eN.A.getSettings();
                return e;
            }),
        setValue: (e) => i7.A.update({ enableContentProtection: e }),
        usePredicate: () => l3.A?.window?.supportsContentProtection?.() ?? !1,
    }),
    si = (0, d.FW)(u.X.STREAMER_MODE_OPTIONS_LIST, {
        variant: "compact",
        useTitle: () => _.intl.string(_.t.xYhOEh),
        buildLayout: () => [l7, l6, se, st, sn, l9],
    }),
    sl = (0, d.zZ)(u.X.STREAMER_MODE_CATEGORY, {
        useTitle: () => _.intl.string(_.t.S5GfOW),
        buildLayout: () => [l5, l2, si],
    });
var ss = n(47671),
    sa = n(884210);
let sr = (0, d.zD)(u.X.SYNC_PROFILE_THEMES, {
    useTitle: () => _.intl.string(_.t.C00w4l),
    useValue: () => (0, R.bG)([nK.A], () => nK.A.syncProfileThemeWithUserTheme),
    setValue: () => (0, iu.M1)(),
});
var so = n(284016);
let sd = (0, d.zD)(u.X.APPEARANCE_SYNC_THEME, {
    useTitle: () => _.intl.string(_.t["/B+kEV"]),
    useSearchTerms: () => [_.intl.string(_.t.Ksh3ik)],
    useValue: function () {
        return (0, R.bG)([so.A], () => !1 !== so.A.shouldSync("appearance"));
    },
    setValue: function (e) {
        var t;
        let n = nd.A.theme,
            i = ss.A.gradientPreset?.id ?? null,
            l = g.eh.getSetting()?.customUserThemeSettings != null;
        (t = q.HAw.SYNC_ACROSS_CLIENTS_TOGGLED),
            i8.h.dispatch({
                type: "TRACK",
                event: t,
                properties: { is_sync_enabled: e, base_theme: n, client_theme: i, has_custom_theme: l },
            }),
            lK.Ay.setShouldSyncAppearanceSettings(e);
    },
});
var su = n(500158);
let sc = (0, d.AK)(u.X.APPEARANCE_THEME_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => _.intl.string(_.t.nhVQDJ),
        useSearchTerms: () => [_.intl.string(_.t.nhVQDJ)],
        destinationKey: u.X.ACCESSIBILITY_PANEL,
    }),
    sg = (0, d.gN)(u.X.APPEARANCE_THEME_RELATED_SETTINGS, { buildLayout: () => [sc] }),
    s_ = (0, d.zZ)(u.X.APPEARANCE_THEME_CATEGORY, {
        useTitle: () => _.intl.string(_.t.Ksh3ik),
        useInlineNotice: function () {
            return (0, R.bG)([nK.A], () => nK.A.useForcedColors)
                ? {
                      type: eb.lT.INLINE_NOTICE,
                      noticeType: "info",
                      useText: () =>
                          (0, ib.D)()
                              ? _.intl.format(_.t.Jae48E, {
                                    onClick: () => {
                                        (0, ej.openUserSettings)(u.X.SYNC_FORCED_COLORS);
                                    },
                                })
                              : _.intl.string(_.t.AUMSZP),
                  }
                : null;
        },
        useHeaderDecoration: function () {
            return (0, R.bG)([ss.A, nK.A], () => nK.A.useForcedColors || ss.A.isPreview)
                ? null
                : {
                      type: eb.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "open-client-themes-button",
                              type: eb.UV.BUTTON,
                              text: _.intl.string(_.t["E+COuA"]),
                              onClick: sa.J3,
                          },
                      ],
                  };
        },
        buildLayout: () => [su.k, sd, sr, sg],
    }),
    sm = [
        {
            badgeType: eb.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: ep.M.CLIENT_THEMES_SETTINGS_BADGE,
            StronglyDiscouragedCustomComponent: le,
        },
        {
            badgeType: eb.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: ep.M.DEKSTOP_CUSTOM_APP_ICON_BADGE,
            StronglyDiscouragedCustomComponent: le,
        },
        { badgeType: eb.Xi.NEW, dismissibleContent: ep.M.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE },
    ],
    sh = (0, d.t_)(u.X.APPEARANCE_PANEL, {
        initialize: function () {
            i4.A.isFetching() ||
                (i8.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_START" }),
                i3.Bo.get({ url: q.Rsh.USERS_ME_CUSTOM_THEMES, oldFormErrors: !0, rejectWithError: !0 })
                    .then((e) => {
                        i8.h.dispatch({
                            type: "SAVED_CUSTOM_THEMES_FETCH_SUCCESS",
                            themes: e.body?.custom_themes ?? [],
                        });
                    })
                    .catch((e) => {
                        i8.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_FAILURE", error: e });
                    }));
        },
        useTitle: () => _.intl.string(_.t["iHH+ky"]),
        buildLayout: () => [s_, lv, lq, lm, l1, sl, lo],
    }),
    sA = [
        ...sm,
        {
            badgeType: eb.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: ep.M.FAVORITES_GUILD_NEW_BADGE,
            StronglyDiscouragedCustomComponent: le,
        },
    ],
    sp = (0, d.i4)(u.X.APPEARANCE_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(_.t["iHH+ky"]),
        icon: i5.B,
        useMenu: function () {
            let e,
                t,
                n,
                i = (0, i9.A)(),
                l =
                    ((e = g.D_.useSetting()),
                    (t = g.SI.useSetting()),
                    e
                        ? null
                        : (0, x.jsx)(U.sL, {
                              id: "preview-markdown-toggle",
                              label: _.intl.string(_.t.sHJ9wZ),
                              action: () => {
                                  let e = !t;
                                  Y.default.track(q.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                                      enabled: e,
                                      location: { section: q.JJy.SETTINGS_CONTEXT_MENU },
                                  }),
                                      g.SI.updateSetting(e);
                              },
                              checked: t,
                          })),
                s =
                    ((n = (0, R.bG)([eN.A], () => eN.A.enabled, [])),
                    (0, x.jsx)(U.sL, {
                        id: "streamer-mode-toggle",
                        label: _.intl.string(_.t.p9ZAJZ),
                        action: () => {
                            i7.A.setEnabled(!n);
                        },
                        checked: n,
                    }));
            return f.useMemo(() => {
                let e = [...i];
                return (
                    null != l &&
                        e.push((0, x.jsx)(U.rX, { label: _.intl.string(_.t.Ob7VMB), children: l }, "text-and-images")),
                    null != s && e.push((0, x.jsx)(U.rX, { children: s }, "streamer-mode")),
                    e
                );
            }, [i, l, s]);
        },
        getDismissibleBadges: () => sA,
        buildLayout: () => [sh],
    });
var sE = n(410767),
    sT = n(691885),
    sS = n(408278),
    sx = n(241326),
    sf = n(885574),
    sb = n(475358),
    sN = n(28647),
    sC = n(337371),
    sI = n(734066),
    sv = n(880144),
    sy = n(680243),
    sj = n(695366),
    sO = n(969341),
    sR = n(364094);
function sL(e) {
    let { game: t, application: n } = e;
    return null == t || null == n
        ? (0, x.jsx)("div", {
              className: sR.zc,
              children: (0, x.jsx)(sj.E, { size: "sm", color: B.A.colors.TEXT_FEEDBACK_WARNING }),
          })
        : (0, x.jsxs)("div", {
              className: sR.nt,
              children: [
                  (0, x.jsx)(e7.A, { game: n, pid: t.pid, size: e7.M.MEDIUM }),
                  (0, x.jsx)("div", {
                      className: sR.Am,
                      children: (0, x.jsx)(sj.E, { size: "sm", color: B.A.colors.TEXT_FEEDBACK_WARNING }),
                  }),
              ],
          });
}
function sD(e) {
    let t = (0, R.bG)([sO.Ay], () => sO.Ay.getMode()),
        { runningGame: n, runningGameApplication: i } = e0();
    null == n || n.elevated || ((n = void 0), (i = void 0));
    let l = (0, td.NP)(),
        s = l && null != n && t === q.TBI.PUSH_TO_TALK;
    return { canPrompt: "voice" === e ? s : l, runningGame: n, runningGameApplication: i };
}
function sG(e) {
    let { className: t, sourcePage: n } = e,
        { canPrompt: i, runningGame: l, runningGameApplication: s } = sD(n);
    return i
        ? (0, x.jsxs)("div", {
              className: eB()(sR.kL, t),
              children: [
                  (0, x.jsx)(sL, { game: l, application: s }),
                  (0, x.jsxs)("div", {
                      className: sR.FS,
                      children: [
                          (0, x.jsx)(V.E, {
                              variant: "text-sm/medium",
                              color: "text-strong",
                              children:
                                  "voice" === n
                                      ? _.intl.string(_.t.vxfv7v)
                                      : null != l
                                        ? _.intl.string(_.t.fAYU2G)
                                        : _.intl.string(_.t["9V4X/c"]),
                          }),
                          (0, x.jsx)(V.E, {
                              variant: "text-xs/medium",
                              color: "text-muted",
                              children: _.intl.format(_.t["/y6htt"], {
                                  helpCenterLink: to.A.getArticleURL(q.MVz.SYSTEM_SERVICE),
                              }),
                          }),
                      ],
                  }),
                  (0, x.jsx)(eA.$, {
                      variant: "secondary",
                      size: "sm",
                      text: _.intl.string(_.t["1iI46O"]),
                      onClick: function () {
                          (0, td.sL)(n + (null != l ? "-with-game" : "-no-game"));
                      },
                  }),
              ],
          })
        : null;
}
var sP = n(189213),
    sM = n(292666),
    sU = n(320989),
    sk = n(978263);
let sV = [];
var sw = n(235986),
    sB = n(820785),
    sF = n(734057),
    sz = n(808728),
    sX = n(967198),
    sY = n(926140),
    sH = n(194152);
function sK() {}
let sW = [sY.rD.VOICE_CHANNEL];
function sZ(e) {
    e.setOptions({ voiceChannelGuildFilter: null }), e.setLimit(1 / 0);
}
function sQ() {
    return (0, x.jsx)("div", {
        className: sH.i1,
        children: (0, x.jsx)(V.E, {
            variant: "text-md/medium",
            color: "text-muted",
            className: sH.GN,
            children: _.intl.string(_.t.zHjCd1),
        }),
    });
}
function sq(e) {
    let { keybind: t } = e,
        n = f.useRef(t);
    f.useEffect(() => {
        n.current = t;
    });
    let [i, l] = f.useState(t.params?.channelId ?? void 0),
        s = f.useCallback(() => {
            (0, N.openModalLazy)(
                async () => (e) =>
                    (0, x.jsx)(sJ, {
                        ...e,
                        onSelect: (e) => {
                            l(e), tR.A.setKeybind({ ...n.current, params: { channelId: e } });
                        },
                    }),
            );
        }, []);
    return (0, x.jsx)("div", {
        className: sH.a8,
        children: (0, x.jsx)(lR.D, {
            label: _.intl.string(_.t.q4JpM8),
            children: (0, x.jsxs)(sw.A, {
                align: sw.A.Align.STRETCH,
                children: [
                    (0, x.jsx)("div", { className: sH.$X, children: (0, x.jsx)(s$, { channelId: i }) }),
                    (0, x.jsx)(sw.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, x.jsx)(eA.$, { variant: "primary", text: _.intl.string(_.t.Dm8O4e), onClick: s }),
                    }),
                ],
            }),
        }),
    });
}
function sJ(e) {
    let t,
        n,
        { transitionState: i, onClose: l, onSelect: s } = e,
        a = f.useId(),
        r = f.useRef(null),
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
                [s, a] = f.useState(""),
                [r, o] = f.useState(sV),
                d = f.useCallback((e, t) => {
                    "" === (t = t.trim()).trim() ? o(sV) : o(e);
                }, []);
            f.useEffect(
                () =>
                    sU.A.addRouteChangeListener(() => {
                        a("");
                    }),
                [],
            );
            let [u] = f.useState(() => new sk.A(d, n, void 0, i));
            return (
                f.useEffect(() => {
                    t ? (l?.(u), u.createSearchContext()) : (u.clean(), a(""));
                }, [t, u, l]),
                {
                    queryResults: r,
                    query: s,
                    updateQuery: f.useCallback(
                        (e) => {
                            a(e), u.search(e);
                        },
                        [u],
                    ),
                }
            );
        })({ visible: !0, autocompleterResultTypes: sW, autocompleterBeforeCreateSearchContext: sZ }),
        c =
            ((t = "" !== o),
            (n = (0, R.yK)([sz.Ay, sF.A, sX.A], () => {
                let e = sX.A.getGuildId();
                if (t || null == e) return [];
                let n = [];
                for (let t of sz.Ay.getVocalChannelIds(e)) {
                    let e = sF.A.getChannel(t);
                    null != e && n.push(e);
                }
                return n;
            }, [t])),
            t ? null : n),
        { focusedIndex: g, setFocusedIndex: m } = (function (e) {
            let [t, n] = f.useState(0),
                i = f.useRef(e);
            return (
                e !== i.current && 0 !== t && n(0),
                f.useEffect(() => {
                    i.current = e;
                }),
                { focusedIndex: t, setFocusedIndex: n }
            );
        })(o);
    f.useEffect(() => {
        let { current: e } = r;
        null == e || e.isItemVisible(0, g, !0) || e.scrollToIndex({ section: 0, row: g });
    }, [g]);
    let h = null != c ? c.length : u.length,
        A = (() => {
            if (null != c) return c[g]?.id;
            let e = u[g];
            if (e?.type === sY.rD.VOICE_CHANNEL) return e.record.id;
        })(),
        p =
            h > 0 || "" === o
                ? {
                      innerId: a,
                      innerRole: "listbox",
                      innerAriaLabel: _.intl.string(_.t["+N3fW7"]),
                      ref: r,
                      sections: [h],
                      renderRow: function (e) {
                          let { row: t } = e,
                              n = (() => {
                                  if (null != c) return c[t];
                                  let e = u[t];
                                  if (e?.type === sY.rD.VOICE_CHANNEL) return e.record;
                              })();
                          if (null == n) return null;
                          let i = null != n.parent_id ? sF.A.getChannel(n.parent_id) : void 0,
                              a = K.A.getGuild(n.guild_id);
                          return (0, x.jsx)(
                              sB.c3,
                              {
                                  id: n.id,
                                  channel: n,
                                  category: i,
                                  focused: g === t,
                                  onMouseEnter: () => m(t),
                                  onClick: () => {
                                      s(n.id), l();
                                  },
                                  onFocus: () => m(t),
                                  children:
                                      null != a ? (0, x.jsx)("div", { className: sH.J5, children: a.name }) : null,
                              },
                              n.id,
                          );
                      },
                      sectionHeight: 0,
                      rowHeight: 34,
                  }
                : { sections: [1], renderRow: () => (0, x.jsx)(sQ, {}), sectionHeight: 0, rowHeight: 52 };
    return (0, x.jsx)(sP.Modal, {
        transitionState: i,
        onClose: l,
        title: _.intl.string(_.t.Dm8O4e),
        subtitle: _.intl.string(_.t.q4JpM8),
        actions: void 0,
        input: (0, x.jsx)(sM.k, {
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
                                if (null != c) return c[g];
                                let e = u[g];
                                if (e?.type === sY.rD.VOICE_CHANNEL) return e.record;
                            })();
                            null == e ? s(void 0) : s(e.id), l();
                            break;
                        }
                        case "arrowup":
                            0 === g ? m(h - 1) : m(g - 1);
                            break;
                        case "arrowdown":
                            g >= h - 1 ? m(0) : m(g + 1);
                    }
            },
            placeholder: _.intl.string(_.t.tG0r7g),
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
function s$(e) {
    let { channelId: t } = e,
        {
            channel: n,
            category: i,
            guild: l,
        } = (0, R.cf)([sF.A, K.A], () => {
            let e = null != t ? sF.A.getChannel(t) : void 0;
            return null != e
                ? {
                      channel: e,
                      category: null != e.parent_id ? sF.A.getChannel(e.parent_id) : void 0,
                      guild: null != e.guild_id ? K.A.getGuild(e.guild_id) : void 0,
                  }
                : { channel: void 0, category: void 0, guild: void 0 };
        });
    return null == n
        ? (0, x.jsx)(V.E, {
              variant: "text-md/medium",
              color: "text-muted",
              className: sH.GN,
              children: _.intl.string(_.t["/fYIK7"]),
          })
        : (0, x.jsx)(sB.c3, {
              channel: n,
              id: n.id,
              category: i,
              onClick: sK,
              onFocus: sK,
              onMouseEnter: sK,
              focused: !1,
              children: null != l ? (0, x.jsx)("div", { className: sH.J5, children: l.name }) : null,
          });
}
function s0(e) {
    let { className: t, children: n } = e;
    return (0, x.jsx)("div", { className: t, children: (0, x.jsx)(L.B, { gap: 16, children: n }) });
}
var s1 = n(802247);
function s2(e) {
    let { children: t } = e;
    return t([sC.Q_.MESSAGE, sC.Q_.NAVIGATION, sC.Q_.DND, sC.Q_.CHAT, sC.Q_.VOICE_AND_VIDEO, sC.Q_.MISCELLANEOUS]);
}
class s5 extends f.PureComponent {
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
        return iJ.A.hasBind(t)
            ? (0, x.jsx)(tr.p, { messageType: tr.Y.ERROR, children: _.intl.string(_.t["7lQlw3"]) })
            : nA.Yy.has(t)
              ? (0, x.jsx)(tr.p, {
                    messageType: tr.Y.ERROR,
                    children: _.intl.format(_.t.MOIaNd, {
                        keyboardNavArticle: to.A.getArticleURL(q.MVz.KEYBOARD_NAVIGATION),
                    }),
                })
              : (0, x.jsx)(V.E, {
                    variant: "text-md/normal",
                    className: s1.qD,
                    children: this.props.keybindDescriptions[e.action],
                });
    }
    render() {
        let { managed: e, enabled: t } = this.props.keybind;
        return (0, x.jsxs)("div", {
            className: s1.YI,
            children: [
                (0, x.jsxs)("div", {
                    className: s1.PO,
                    children: [
                        (0, x.jsx)("div", {
                            className: s1.AS,
                            children: (0, x.jsx)(sT.l, {
                                selectionMode: "single",
                                label: _.intl.string(_.t.UUpAD6),
                                value: this.props.keybind.action,
                                options: this.props.keybindActionTypes,
                                onSelectionChange: this.handleActionChanged,
                                disabled: e,
                            }),
                        }),
                        (0, x.jsx)("div", {
                            className: s1.AS,
                            children: (0, x.jsx)(lR.D, {
                                label: _.intl.string(_.t["1La4tC"]),
                                children: (0, x.jsx)(tL.A, {
                                    defaultValue: this.props.keybind.shortcut,
                                    onChange: this.handleShortcutChange,
                                }),
                            }),
                        }),
                        !e &&
                            (0, x.jsx)("div", {
                                className: s1.d9,
                                children: (0, x.jsx)(sS.K, {
                                    variant: "icon-only",
                                    onClick: this.handleDeleteKeybind,
                                    icon: sx.u,
                                    "aria-label": _.intl.string(_.t.qEHmmB),
                                }),
                            }),
                        (0, x.jsx)("div", {
                            className: s1.ZW,
                            children: (0, x.jsx)(e1.m, {
                                text: _.intl.string(_.t.uCD7qK),
                                children: (0, x.jsx)("div", {
                                    children: (0, x.jsx)(D.d, { checked: t, onChange: this.handleEnableDisable }),
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
        return e === q.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, x.jsx)(sq, { keybind: this.props.keybind }) : void 0;
    }
}
class s3 extends f.PureComponent {
    get keybindActionTypes() {
        let {
                overlaySupported: e,
                canGoLive: t,
                allowSoundboard: n,
                enableClips: i,
                enableScreenshotKeybind: l,
            } = this.props,
            s = [
                { id: "unassigned", value: q.hCu.UNASSIGNED, label: _.intl.string(_.t["0Uh579"]) },
                { id: "push-to-talk", value: q.hCu.PUSH_TO_TALK, label: _.intl.string(_.t.Y5lgTP) },
                { id: "push-to-talk-priority", value: q.hCu.PUSH_TO_TALK_PRIORITY, label: _.intl.string(_.t.DkSwJ2) },
                { id: "push-to-mute", value: q.hCu.PUSH_TO_MUTE, label: _.intl.string(_.t.hSCRqd) },
                { id: "vad-priority", value: q.hCu.VAD_PRIORITY, label: _.intl.string(_.t["49d6Nd"]) },
                { id: "toggle-mute", value: q.hCu.TOGGLE_MUTE, label: _.intl.string(_.t.PlkYKD) },
                { id: "toggle-deafen", value: q.hCu.TOGGLE_DEAFEN, label: _.intl.string(_.t.NvGq1K) },
                { id: "toggle-voice-mode", value: q.hCu.TOGGLE_VOICE_MODE, label: _.intl.string(_.t.Wa5H9S) },
                { id: "toggle-streamer-mode", value: q.hCu.TOGGLE_STREAMER_MODE, label: _.intl.string(_.t.BK0Ncc) },
                { id: "toggle-camera", value: q.hCu.TOGGLE_CAMERA, label: _.intl.string(_.t.hf8JVT) },
            ];
        return (
            e &&
                (s.push({
                    id: "toggle-overlay-input-lock",
                    value: q.hCu.TOGGLE_OVERLAY_INPUT_LOCK,
                    label: _.intl.string(_.t.VsAZcC),
                }),
                s.push({
                    id: "activate-overlay-region-text-widget",
                    value: q.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                    label: _.intl.string(_.t.hurHWo),
                })),
            t &&
                ((0, ey.isWindows)() || sO.Ay.getUseSystemScreensharePicker()) &&
                s.push({
                    id: "toggle-go-live-streaming",
                    value: q.hCu.TOGGLE_GO_LIVE_STREAMING,
                    label: _.intl.string(_.t.ybdjJD),
                }),
            (0, ey.isDesktop)() &&
                (s.push(
                    { id: "navigate-back", value: q.hCu.NAVIGATE_BACK, label: _.intl.string(_.t.gRSaOa) },
                    { id: "navigate-forward", value: q.hCu.NAVIGATE_FORWARD, label: _.intl.string(_.t.zOXpjU) },
                    {
                        id: "switch-to-voice-channel",
                        value: q.hCu.SWITCH_TO_VOICE_CHANNEL,
                        label: _.intl.string(_.t.ty7Lxy),
                    },
                    {
                        id: "disconnect-from-voice-channel",
                        value: q.hCu.DISCONNECT_FROM_VOICE_CHANNEL,
                        label: _.intl.string(_.t.CV7mT7),
                    },
                ),
                n &&
                    s.push(
                        { id: "soundboard", value: q.hCu.SOUNDBOARD, label: _.intl.string(_.t.yPH4xm) },
                        { id: "soundboard-hold", value: q.hCu.SOUNDBOARD_HOLD, label: _.intl.string(_.t["1xFbP/"]) },
                    ),
                i &&
                    (s.push({ id: "save-clip", value: q.hCu.SAVE_CLIP, label: _.intl.string(_.t.U4URzP) }),
                    l &&
                        s.push({
                            id: "save-screenshot",
                            value: q.hCu.SAVE_SCREENSHOT,
                            label: _.intl.string(_.t["+WloFH"]),
                        }))),
            s
        );
    }
    get keybindDescriptions() {
        let { overlaySupported: e, canGoLive: t, enableClips: n, enableScreenshotKeybind: i } = this.props,
            l = {
                [q.hCu.UNASSIGNED]: _.intl.string(_.t.rvlNLv),
                [q.hCu.PUSH_TO_MUTE]: _.intl.string(_.t.xtESim),
                [q.hCu.PUSH_TO_TALK]: _.intl.string(_.t.wTcBSy),
                [q.hCu.PUSH_TO_TALK_PRIORITY]: _.intl.string(_.t.FhHvWH),
                [q.hCu.TOGGLE_MUTE]: _.intl.string(_.t.X2fbUm),
                [q.hCu.TOGGLE_DEAFEN]: _.intl.string(_.t.MjREZV),
                [q.hCu.TOGGLE_VOICE_MODE]: _.intl.string(_.t.snm5YW),
                [q.hCu.TOGGLE_STREAMER_MODE]: _.intl.string(_.t.YszLLx),
                [q.hCu.VAD_PRIORITY]: _.intl.string(_.t.rSe8IZ),
                [q.hCu.TOGGLE_CAMERA]: _.intl.string(_.t.v1JBtL),
            };
        return (
            e && (l[q.hCu.TOGGLE_OVERLAY_INPUT_LOCK] = _.intl.string(_.t.IoP5vc)),
            t && (0, ey.isWindows)() && (l[q.hCu.TOGGLE_GO_LIVE_STREAMING] = _.intl.string(_.t.s4C238)),
            (0, ey.isDesktop)() &&
                ((l[q.hCu.NAVIGATE_BACK] = _.intl.string(_.t.nKDlEt)),
                (l[q.hCu.NAVIGATE_FORWARD] = _.intl.string(_.t.DK0FFk)),
                (l[q.hCu.SOUNDBOARD] = (0, ey.isWindows)() ? _.intl.string(_.t["5wJefL"]) : _.intl.string(_.t.gzjsSP)),
                (l[q.hCu.SOUNDBOARD_HOLD] = (0, ey.isWindows)()
                    ? _.intl.string(_.t.RRkZc9)
                    : _.intl.string(_.t.laNlTl)),
                n &&
                    ((l[q.hCu.SAVE_CLIP] = _.intl.string(_.t.z3Wbam)),
                    i && (l[q.hCu.SAVE_SCREENSHOT] = _.intl.string(_.t.m0zd57)))),
            l
        );
    }
    handleAddKeybind = () => {
        tR.A.addKeybind();
    };
    renderKeybinds(e) {
        return e.map((t, n) =>
            (0, x.jsxs)(
                f.Fragment,
                {
                    children: [
                        (0, x.jsx)(
                            s5,
                            {
                                keybind: t,
                                keybindDescriptions: this.keybindDescriptions,
                                keybindActionTypes: this.keybindActionTypes,
                            },
                            t.id,
                        ),
                        n !== e.length - 1 ? (0, x.jsx)(nR.c, {}) : null,
                    ],
                },
                t.id,
            ),
        );
    }
    renderKeybindWarning() {
        return (0, x.jsxs)("div", {
            className: s1.$e,
            children: [
                (0, x.jsx)(sf.m, { size: "xs", color: B.A.colors.ICON_SUBTLE }),
                (0, x.jsx)(V.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: _.intl.string(_.t.NoKjWP),
                }),
            ],
        });
    }
    render() {
        let { enableClips: e, enableScreenshotKeybind: t } = this.props,
            n = eL()(this.props.keybinds)
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
            i = eL()((0, sC.Bx)())
                .filter((e) => e.description !== _.intl.string(_.t.HnNtEI))
                .groupBy((e) => e.group)
                .value();
        return (0, x.jsxs)(x.Fragment, {
            children: [
                (0, x.jsx)(s0, {
                    className: nb.IE,
                    children: ey.isPlatformEmbedded
                        ? (0, x.jsxs)(x.Fragment, {
                              children: [
                                  (0, x.jsxs)("div", {
                                      className: s1.OQ,
                                      children: [
                                          this.renderKeybindWarning(),
                                          (0, x.jsx)("div", {
                                              className: s1.c9,
                                              children: (0, x.jsx)(eA.$, {
                                                  size: "md",
                                                  onClick: this.handleAddKeybind,
                                                  text: _.intl.string(_.t.zk6Xbs),
                                                  variant: "primary",
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, x.jsx)(sG, { className: s1.Qo, sourcePage: "keybinds" }),
                                  n.length > 0 &&
                                      (0, x.jsxs)(x.Fragment, {
                                          children: [(0, x.jsx)(nR.c, {}), this.renderKeybinds(n)],
                                      }),
                                  (0, x.jsx)(nR.c, {}),
                              ],
                          })
                        : (0, x.jsx)(tr.p, {
                              messageType: tr.Y.INFO,
                              className: s1.Ly,
                              children: _.intl.format(_.t.mPi3F3, { downloadLink: q.X7G.DOWNLOAD }),
                          }),
                }),
                (0, x.jsxs)(L.B, {
                    gap: 48,
                    children: [
                        (0, x.jsx)(nr.n, {
                            label: _.intl.string(_.t.Lz5KHI),
                            children: (0, x.jsx)("div", {
                                className: s1.jh,
                                children: (0, x.jsxs)("div", {
                                    className: s1.yZ,
                                    children: [
                                        (0, x.jsx)(V.E, {
                                            variant: "text-md/normal",
                                            children: _.intl.string(_.t.sMWLBj),
                                        }),
                                        (0, x.jsx)("div", {
                                            className: s1.DM,
                                            children: (0, x.jsx)(sb.e, { shortcut: sN.z.binds["0"], className: s1.LE }),
                                        }),
                                    ],
                                }),
                            }),
                        }),
                        (0, x.jsx)(s2, {
                            children: (e) =>
                                (0, x.jsx)(x.Fragment, {
                                    children: e.map((e, t) => {
                                        let n = (0, sC.Gm)(e),
                                            l = (0, sC.zF)(e),
                                            s = i[e];
                                        return (0, x.jsx)(
                                            nr.n,
                                            {
                                                label: n,
                                                description: l,
                                                children: (0, x.jsx)("div", {
                                                    className: s1.jh,
                                                    children: s.map((e, t) =>
                                                        (0, x.jsxs)(
                                                            f.Fragment,
                                                            {
                                                                children: [
                                                                    0 !== t && (0, x.jsx)(nR.c, {}),
                                                                    (0, x.jsxs)("div", {
                                                                        className: s1.yZ,
                                                                        children: [
                                                                            (0, x.jsx)(V.E, {
                                                                                variant: "text-md/normal",
                                                                                children: e.description,
                                                                            }),
                                                                            (0, x.jsx)("div", {
                                                                                className: s1.DM,
                                                                                children: e.binds.map((e) =>
                                                                                    (0, x.jsx)(
                                                                                        sb.e,
                                                                                        {
                                                                                            shortcut: e,
                                                                                            className: s1.LE,
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
let s8 = (0, d.E2)(u.X.KEYBINDS_SETTING, {
        Component: function () {
            f.useEffect(
                () => (
                    tR.A.enableAll(!1),
                    () => {
                        tR.A.enableAll(!0);
                    }
                ),
                [],
            );
            let e = (0, R.bG)([eC.Ay], () => eC.Ay.getState()),
                t = (0, R.bG)([sO.Ay], () => (0, sv.A)(sO.Ay)),
                n = (0, R.bG)([sy.A], () => sy.A.isSupported),
                i = (0, sI.sw)(),
                l = (0, sI.BW)();
            return (0, x.jsx)(s3, {
                keybinds: e,
                canGoLive: t,
                overlaySupported: n,
                allowSoundboard: (0, ey.isWindows)(),
                enableClips: i,
                enableScreenshotKeybind: l,
            });
        },
        useSearchTerms: () => [_.intl.string(_.t.T9DA2K)],
    }),
    s4 = (0, d.zZ)(u.X.KEYBINDS_CATEGORY, { buildLayout: () => [s8] }),
    s9 = (0, d.t_)(u.X.KEYBINDS_PANEL, { useTitle: () => _.intl.string(_.t.T9DA2K), buildLayout: () => [s4] }),
    s7 = (0, d.i4)(u.X.KEYBINDS_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(_.t.T9DA2K),
        icon: sE.F,
        buildLayout: () => [s9],
    });
var s6 = n(37646),
    ae = n(76335);
let at = (0, d.t_)(u.X.LANGUAGE_AND_TIME_PANEL, {
        useTitle: () => _.intl.string(_.t.KyFVyi),
        buildLayout: () => [ae.F],
    }),
    an = (0, d.i4)(u.X.LANGUAGE_AND_TIME_SIDEBAR_ITEM, {
        icon: s6.U,
        useTitle: () => _.intl.string(_.t.KyFVyi),
        buildLayout: () => [at],
    }),
    ai = (0, ix.D)(() => ({ openOnStartup: !0, startMinimized: !1, minimizeToTray: !0 }));
async function al() {
    let e = await li.Ay.getOpenOnStart(),
        t = await li.Ay.getSetting("START_MINIMIZED", !1),
        n = await li.Ay.getSetting("MINIMIZE_TO_TRAY", !0);
    ai.setState({ openOnStartup: e, startMinimized: t, minimizeToTray: n });
}
let as = (0, d.zD)(u.X.OS_OPEN_ON_STARTUP, {
        useTitle: () => _.intl.string(_.t["3BeZti"]),
        usePredicate: () => lt.Av && !(0, lt.cX)(),
        useValue: () => ai.useState((e) => e.openOnStartup),
        setValue: function (e) {
            ai.setState({ openOnStartup: e }), li.Ay.send("TOGGLE_OPEN_ON_STARTUP", e);
        },
        initialize: () => {
            li.Ay.getOpenOnStart().then((e) => ai.setState({ openOnStartup: e }));
        },
    }),
    aa = (0, d.zD)(u.X.OS_MINIMIZE_TO_TRAY, {
        useTitle: () => _.intl.string(_.t.dJ5MUh),
        useSubtitle: () => _.intl.string(_.t.nQavHr),
        usePredicate: () => lt.Av && !(0, lt.cX)(),
        useValue: () => ai.useState((e) => e.minimizeToTray),
        setValue: function (e) {
            ai.setState({ minimizeToTray: e }), li.Ay.send("TOGGLE_MINIMIZE_TO_TRAY", e);
        },
        initialize: () => {
            li.Ay.getSetting("MINIMIZE_TO_TRAY", !0).then((e) => ai.setState({ minimizeToTray: e }));
        },
    });
var ar = n(572985);
let ao = (0, d.E2)(u.X.OS_SYSTEM_SERVICE, {
        useSearchTerms: () => [_.intl.string(_.t.roHq80)],
        Component: function () {
            let [e, t] = f.useState(!1),
                [n, i] = f.useState(() => (0, td.TC)()),
                l = (0, R.bG)([eJ.Ay], () => eJ.Ay.getSystemServiceStatus("input-service")),
                s = f.useCallback(async () => {
                    t(!0),
                        n ? await (0, td.z8)("windows-settings") : await (0, td.sL)("windows-settings"),
                        t(!1),
                        i((0, td.TC)());
                }, [n]),
                a = "running" === l.state;
            return (0, x.jsxs)("div", {
                className: ar.q,
                children: [
                    (0, x.jsxs)("div", {
                        className: ar.L,
                        children: [
                            (0, x.jsx)(V.E, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: _.intl.string(_.t.roHq80),
                            }),
                            (0, x.jsx)(V.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: _.intl.format(_.t["8CAL+D"], {
                                    helpCenterLink: to.A.getArticleURL(q.MVz.SYSTEM_SERVICE),
                                }),
                            }),
                            n
                                ? (0, x.jsx)(V.E, {
                                      variant: "text-sm/normal",
                                      color: a ? "text-feedback-positive" : "text-feedback-warning",
                                      children: a
                                          ? _.intl.string(_.t.KHVMkW)
                                          : _.intl.format(_.t["5Rlr0b"], {
                                                status: (function (e) {
                                                    switch (e.state) {
                                                        case "unknown":
                                                            return _.intl.string(_.t["KW+nqT"]);
                                                        case "disabled":
                                                            return _.intl.string(_.t["Q/wAF7"]);
                                                        case "disconnected":
                                                            return _.intl.string(_.t.Xvs9IM);
                                                        case "initializing":
                                                            return _.intl.string(_.t.h4qz8W);
                                                        case "connecting":
                                                            return _.intl.string(_.t.fSu9XF);
                                                        case "handshaking":
                                                            return _.intl.string(_.t["00aYLJ"]);
                                                        case "running":
                                                            return _.intl.string(_.t["54TB7Z"]);
                                                        case "waiting-for-retry":
                                                            return _.intl.string(_.t["0FONwi"]);
                                                        case "failure":
                                                            return _.intl.string(_.t.Ic0nkd);
                                                        default:
                                                            (0, t8.xb)(e.state);
                                                    }
                                                })(l),
                                            }),
                                  })
                                : null,
                        ],
                    }),
                    (0, x.jsx)(eA.$, {
                        variant: n ? "critical-secondary" : "primary",
                        loading: e,
                        onClick: s,
                        text: n ? _.intl.string(_.t.pAwbdL) : _.intl.string(_.t["1iI46O"]),
                    }),
                ],
            });
        },
        usePredicate: () => (0, td.XQ)(),
    }),
    ad = (0, d.zZ)(u.X.LINUX_CATEGORY, {
        buildLayout: () => [as, aa, ao],
        initialize: () => {
            al();
        },
    }),
    au = (0, d.t_)(u.X.LINUX_PANEL, { useTitle: () => _.intl.string(_.t["7pPjTW"]), buildLayout: () => [ad] }),
    ac = (0, d.i4)(u.X.LINUX_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(_.t["7pPjTW"]),
        icon: e5.k,
        usePredicate: () => ey.isPlatformEmbedded && (0, ey.isLinux)(),
        buildLayout: () => [au],
    });
var ag = n(3137),
    a_ = n(369606),
    am = n(604121),
    ah = n(725951),
    aA = n(400492),
    ap = n(178241),
    aE = n(115063),
    aT = n(414736),
    aS = n(927018),
    ax = n(512599),
    af = n(532197),
    ab = n(874486),
    aN = n(989349),
    aC = n.n(aN),
    aI = n(58703),
    av = n(906688),
    ay = n(523896);
function aj(e) {
    let { achievementId: t, dateUnlocked: n } = e,
        i = (0, aS.vM)(t);
    if (null == i) return null;
    let l = null != n,
        { name: s, description: a, hideDescriptionUntilUnlock: r, onAction: o } = i,
        d = r && !l,
        u = l ? "text-strong" : "text-muted",
        c = l ? "text-default" : "text-muted",
        g = aC()(n),
        _ = null != o && l,
        m = _ ? k.D : "div";
    return (0, x.jsxs)(m, {
        className: eB()(ay.kL, _ && ay.b),
        onClick: () => {
            _ && o();
        },
        children: [
            (0, x.jsx)("div", {
                className: ay.zc,
                children: (0, x.jsx)(av.A, { achievementId: t, size: av.A.Sizes.SIZE_40, unlocked: l }),
            }),
            (0, x.jsxs)("div", {
                className: ay.VW,
                children: [
                    null != n &&
                        (0, x.jsx)(V.E, {
                            variant: "text-xxs/semibold",
                            color: "text-muted",
                            className: ay.YR,
                            children: (0, aI.mk)(g),
                        }),
                    (0, x.jsx)(V.E, { variant: "text-md/medium", color: u, children: s() }),
                    (0, x.jsx)(V.E, { variant: "text-xs/normal", color: c, children: d ? "?????" : a() }),
                ],
            }),
        ],
    });
}
var aO = n(885959);
function aR(e) {
    let { onBackClick: t } = e,
        n = (0, R.bG)([ab.A], () => ab.A.getAllUnlockedAchievements()),
        i = f.useMemo(() => Object.values(n).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [n]),
        l = f.useMemo(
            () =>
                Object.values(aS.l0)
                    .filter(t8.Vq)
                    .filter((e) => null == n[e.id])
                    .sort((e, t) => e.rarity - t.rarity),
            [n],
        );
    return (0, x.jsxs)(x.Fragment, {
        children: [
            (0, x.jsxs)(k.D, {
                onClick: t,
                className: aO.vv,
                children: [
                    (0, x.jsx)(af.A, { direction: af.A.Directions.LEFT, className: aO.Kk }),
                    (0, x.jsx)(V.E, {
                        variant: "text-lg/normal",
                        color: "text-default",
                        children: _.intl.string(_.t["13/7kX"]),
                    }),
                ],
            }),
            (0, x.jsxs)("div", {
                className: aO.N1,
                children: [
                    (0, x.jsxs)("div", {
                        className: aO.if,
                        children: [
                            (0, x.jsx)(eh.D, {
                                variant: "heading-lg/extrabold",
                                color: "text-strong",
                                children: _.intl.string(_.t["6jI0hd"]),
                            }),
                            (0, x.jsx)(V.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                children: _.intl.string(_.t.GuUItX),
                            }),
                        ],
                    }),
                    (0, x.jsx)("div", {
                        className: aO.nr,
                        children: (0, x.jsx)(a_.O, {
                            size: "custom",
                            color: B.A.unsafe_rawColors.ORANGE_345.css,
                            width: 40,
                            height: 40,
                        }),
                    }),
                ],
            }),
            i.length > 0 &&
                (0, x.jsx)("div", {
                    className: aO.yF,
                    children: (0, x.jsx)("div", {
                        className: aO.Eh,
                        children: i.map((e) => {
                            let { achievementId: t, dateUnlocked: n } = e;
                            return (0, x.jsx)(aj, { achievementId: t, dateUnlocked: n }, t);
                        }),
                    }),
                }),
            l.length > 0 &&
                (0, x.jsxs)("div", {
                    className: aO.yF,
                    children: [
                        (0, x.jsx)("div", {
                            className: aO.if,
                            children: (0, x.jsx)(V.E, {
                                variant: "text-md/bold",
                                color: "text-default",
                                children: _.intl.string(_.t.GFyMg1),
                            }),
                        }),
                        (0, x.jsx)("div", {
                            className: aO.Eh,
                            children: l.map((e) => (0, x.jsx)(aj, { achievementId: e.id }, e.id)),
                        }),
                    ],
                }),
            (0, x.jsx)("div", { className: aO.yF, children: (0, x.jsx)("div", { className: aO.F3 }) }),
        ],
    });
}
var aL = n(224964),
    aD = n(31408),
    aG = n(739347);
let aP = { enabled: !0, combosEnabled: !0, screenshakeEnabled: !1, confettiEnabled: !1 },
    aM = (0, eR.range)(0, 11),
    aU = (0, eR.range)(0, 2.25, 0.25),
    ak = (0, eR.range)(1, 11),
    aV = (0, eR.range)(1, 26),
    aw = { 0: "poggermode_settings_panel", 1: "poggermode_achievements_panel" };
function aB(e) {
    let { disabled: t, locations: n, settingsLocations: i, onChange: l } = e,
        s = n.map((e) =>
            (0, x.jsx)(
                D.d,
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
    return (0, x.jsx)(nr.n, { label: _.intl.string(_.t.bWVN1D), children: s });
}
function aF(e) {
    let { children: t } = e;
    return (0, x.jsx)(V.E, { className: aG.iF, variant: "text-sm/normal", color: "text-default", children: t });
}
function az(e) {
    let {
            settings: { enabled: t, warningSeen: n },
            updateSettings: i,
        } = e,
        l = (0, R.bG)([nK.A], () => nK.A.useReducedMotion);
    return (0, x.jsx)(D.d, {
        label: _.intl.string(_.t.vuiXm9),
        description: _.intl.string(_.t.KuYbWN),
        checked: t,
        onChange: (e) => {
            e || (0, aT._)(aS.sn.DISABLE_POGGERMODE),
                e && (!n || l)
                    ? (0, ln.A)({
                          title: l ? _.intl.string(_.t["FxT+p0"]) : _.intl.string(_.t.TAZ4F9),
                          subtitle: l ? _.intl.string(_.t.gmixrx) : _.intl.string(_.t.jN3t3K),
                          confirmText: _.intl.string(_.t.JFfins),
                          onConfirm: () => i(l ? aP : { enabled: !0, warningSeen: !0 }),
                      })
                    : i({ enabled: e });
        },
    });
}
function aX(e) {
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
    return (0, x.jsxs)(nr.n, {
        label: _.intl.string(_.t.mqxwJO),
        children: [
            (0, x.jsx)(D.d, {
                label: _.intl.string(_.t.s0KCgF),
                description: _.intl.string(_.t.O1Vflg),
                checked: n,
                disabled: !t,
                onChange: (e) => a({ confettiEnabled: e }, 0),
            }),
            (0, x.jsxs)("div", {
                children: [
                    (0, x.jsx)(V.E, {
                        variant: "text-md/semibold",
                        color: r ? "text-muted" : "text-strong",
                        className: aG.KF,
                        children: _.intl.string(_.t.vd0D81),
                    }),
                    (0, x.jsx)(aF, { children: _.intl.string(_.t.a18Sug) }),
                    (0, x.jsx)(n9.A, {
                        disabled: r,
                        markers: ak,
                        stickToMarkers: !0,
                        minValue: ak[0],
                        maxValue: ak[ak.length - 1],
                        initialValue: i,
                        onValueChange: (e) => a({ confettiCount: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, x.jsxs)("div", {
                children: [
                    (0, x.jsx)(V.E, {
                        variant: "text-md/semibold",
                        color: r ? "text-muted" : "text-strong",
                        className: aG.KF,
                        children: _.intl.string(_.t.sPO3ij),
                    }),
                    (0, x.jsx)(aF, { children: _.intl.string(_.t.xoldVn) }),
                    (0, x.jsx)(n9.A, {
                        disabled: r,
                        markers: aV,
                        stickToMarkers: !0,
                        minValue: aV[0],
                        maxValue: aV[aV.length - 1],
                        initialValue: l,
                        onValueChange: (e) => a({ confettiSize: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, x.jsx)(aB, {
                disabled: r,
                locations: [
                    {
                        location: aD.k.CHAT_INPUT,
                        title: _.intl.string(_.t.elTtyz),
                        description: _.intl.string(_.t.HtKfMi),
                    },
                    {
                        location: aD.k.REACTION,
                        title: _.intl.string(_.t.Ik4VIa),
                        description: _.intl.string(_.t.y4rqK0),
                    },
                    {
                        location: aD.k.MEMBER_USER,
                        title: _.intl.string(_.t.ZXBlAn),
                        description: _.intl.string(_.t["m9RD+c"]),
                    },
                    {
                        location: aD.k.CALL_TILE,
                        title: _.intl.string(_.t.V66giQ),
                        description: _.intl.string(_.t.fiHV7u),
                    },
                ],
                settingsLocations: s,
                onChange: (e) => a({ confettiEnabledLocations: e }, 0),
            }),
        ],
    });
}
function aY(e) {
    let {
            settings: { enabled: t, combosEnabled: n, comboSoundsEnabled: i, combosRequiredCount: l },
            updateSettings: s,
        } = e,
        a = !t || !n;
    return (0, x.jsxs)(nr.n, {
        label: _.intl.string(_.t.Xz0ole),
        children: [
            (0, x.jsx)(D.d, {
                label: _.intl.string(_.t.o3iV7B),
                description: _.intl.string(_.t["31Z8Ee"]),
                checked: n,
                disabled: !t,
                onChange: (e) => s({ combosEnabled: e }),
            }),
            (0, x.jsx)(D.d, {
                label: _.intl.string(_.t["Ax+IoW"]),
                description: _.intl.string(_.t["9rgQEr"]),
                checked: i,
                disabled: !t,
                onChange: (e) => s({ comboSoundsEnabled: e }),
            }),
            (0, x.jsxs)("div", {
                children: [
                    (0, x.jsx)(V.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: aG.KF,
                        children: _.intl.string(_.t.L0oQuh),
                    }),
                    (0, x.jsx)(aF, { children: _.intl.string(_.t["/OOFpL"]) }),
                    (0, x.jsx)(n9.A, {
                        disabled: a,
                        markers: aM,
                        stickToMarkers: !0,
                        minValue: aM[0],
                        maxValue: aM[aM.length - 1],
                        initialValue: l,
                        onValueChange: (e) => s({ combosRequiredCount: e }),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
        ],
    });
}
function aH(e) {
    let {
            settings: { enabled: t, screenshakeEnabled: n, shakeIntensity: i, screenshakeEnabledLocations: l },
            updateSettings: s,
        } = e,
        a = (0, R.bG)([nK.A], () => nK.A.useReducedMotion),
        r = !t || !n || a;
    return (0, x.jsxs)(nr.n, {
        label: _.intl.string(_.t.wVS5Sd),
        children: [
            (0, x.jsx)(D.d, {
                label: _.intl.string(_.t.N004zO),
                description: a ? _.intl.string(_.t.GckHGw) : _.intl.string(_.t.Qq5W3v),
                checked: n && !a,
                disabled: !t || a,
                onChange: (e) => s({ screenshakeEnabled: e }, 1),
            }),
            (0, x.jsxs)("div", {
                children: [
                    (0, x.jsx)(V.E, {
                        variant: "text-md/semibold",
                        color: r ? "text-muted" : "text-strong",
                        className: aG.KF,
                        children: _.intl.string(_.t.UxnnC4),
                    }),
                    (0, x.jsx)(aF, { children: _.intl.string(_.t.CEOEOb) }),
                    (0, x.jsx)(n9.A, {
                        disabled: r,
                        markers: aU,
                        equidistant: !0,
                        stickToMarkers: !0,
                        minValue: aU[0],
                        maxValue: aU[aU.length - 1],
                        initialValue: i,
                        onValueChange: (e) => {
                            var t;
                            null != (t = { shakeIntensity: e }).shakeIntensity &&
                                t.shakeIntensity > i &&
                                (0, aT._)(aS.sn.MORE),
                                s(t, 1);
                        },
                        onMarkerRender: (e) => (e === aU[aU.length - 1] ? _.intl.string(_.t["4rbMWc"]) : `${100 * e}%`),
                    }),
                ],
            }),
            (0, x.jsx)(aB, {
                disabled: r,
                locations: [
                    {
                        location: aD.uD.CHAT_INPUT,
                        title: _.intl.string(_.t.vUcvPP),
                        description: _.intl.string(_.t.y00OrF),
                    },
                    {
                        location: aD.uD.VOICE_USER,
                        title: _.intl.string(_.t.TcRO54),
                        description: _.intl.string(_.t.YJCxVY),
                    },
                    {
                        location: aD.uD.MENTION,
                        title: _.intl.string(_.t.oW4shO),
                        description: _.intl.string(_.t["mqfw/H"]),
                    },
                ],
                settingsLocations: l,
                onChange: (e) => s({ screenshakeEnabledLocations: e }, 1),
            }),
        ],
    });
}
function aK(e) {
    let { updateSettings: t } = e;
    return (0, x.jsx)(nr.n, {
        label: _.intl.string(_.t.EuXv2q),
        children: (0, x.jsxs)(L.B, {
            gap: 16,
            children: [
                (0, x.jsx)("div", { children: _.intl.string(_.t["1SLnki"]) }),
                (0, x.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: aG.hw,
                    children: (0, x.jsx)(eA.$, {
                        variant: "primary",
                        size: "sm",
                        text: _.intl.string(_.t.qz65yY),
                        onClick: () => {
                            t({ enabled: !1, settingsVisible: !1 }), (0, lE.default)();
                        },
                    }),
                }),
            ],
        }),
    });
}
function aW(e) {
    let { onChangePage: t } = e;
    return (0, x.jsxs)(k.D, {
        onClick: () => t(1),
        className: aG.Tq,
        children: [
            (0, x.jsx)("div", {
                className: aG.w1,
                children: (0, x.jsx)(a_.O, { size: "md", color: B.A.unsafe_rawColors.ORANGE_345.css }),
            }),
            (0, x.jsxs)("div", {
                className: aG.qL,
                children: [
                    (0, x.jsx)(eh.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: _.intl.string(_.t["6jI0hd"]),
                    }),
                    (0, x.jsx)(V.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: _.intl.string(_.t.GuUItX),
                    }),
                ],
            }),
            (0, x.jsx)(tA._, { size: "custom", color: "currentColor", width: 16, className: aG.nT }),
        ],
    });
}
let aZ = () =>
    n
        .e("4660")
        .then(n.t.bind(n, 662336, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
function aQ(e) {
    let { onChangePage: t, setShowEnableAnimation: n } = e,
        i = (0, R.cf)([ag.A], () => ag.A.getState()),
        [l, s] = f.useState({ x: 0, y: 0 }),
        a = (0, aL.A)(),
        r = (e, t) => {
            var s, r, o, d, u, c, g, _;
            if (
                (e.enabled &&
                    !1 === i.enabled &&
                    (n(!0),
                    (0, aA.Ak)("poggermode_enabled"),
                    (0, aE.fO)({ duration: 2e3, intensity: e.shakeIntensity ?? i.shakeIntensity })),
                (0, ax.O9)(e),
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
            1 === t && h && (0, aE.fO)({ duration: 1e3, intensity: e.shakeIntensity ?? i.shakeIntensity });
        },
        o = (e) => {
            s({ x: e.clientX, y: e.clientY });
        };
    return (
        f.useEffect(
            () => (window.addEventListener("mousemove", o), () => window.removeEventListener("mousemove", o)),
            [],
        ),
        (0, x.jsxs)(L.B, {
            gap: 24,
            children: [
                (0, x.jsx)(az, { settings: i, updateSettings: r }),
                (0, x.jsx)(aW, { onChangePage: t }),
                (0, x.jsx)(aY, { settings: i, updateSettings: r }),
                (0, x.jsx)(aH, { settings: i, updateSettings: r }),
                (0, x.jsx)(aX, { settings: i, updateSettings: r }),
                (0, x.jsx)(aK, { updateSettings: r }),
            ],
        })
    );
}
let aq = (e) => (0 === e ? ah.f.LEFT : ah.f.RIGHT),
    aJ = (0, d.E2)(u.X.POGGERMODE_SETTING, {
        Component: function () {
            let [e, t] = f.useState(0),
                [n, i] = f.useState(aq(e)),
                [l, s] = f.useState(!1),
                a = (0, R.bG)([nK.A], () => nK.A.useReducedMotion),
                r = l && !a;
            return (
                f.useEffect(() => {
                    let t = setTimeout(() => {
                        i(aq(e));
                    }, 500);
                    return () => clearTimeout(t);
                }, [e]),
                f.useEffect(() => {
                    (0, ap._)(aw[e]);
                }, [e]),
                f.useEffect(() => {
                    Math.random() > 0.99 && (0, aT._)(aS.sn.VISITOR_100);
                }, []),
                (0, x.jsxs)(x.Fragment, {
                    children: [
                        (0, x.jsx)(ah.A, {
                            className: aG.l3,
                            step: e,
                            direction: n,
                            children: ((e, t, n) => {
                                let i = (e) => () => {
                                    t(e);
                                };
                                switch (e) {
                                    case 0:
                                        return (0, x.jsx)(aQ, { onChangePage: i(1), setShowEnableAnimation: n });
                                    case 1:
                                        return (0, x.jsx)(aR, { onBackClick: i(0) });
                                    default:
                                        return null;
                                }
                            })(e, t, s),
                        }),
                        (0, x.jsx)("div", {
                            className: r ? aG.Sr : aG.IP,
                            children: (0, x.jsx)(am.a, {
                                className: aG.gT,
                                importData: aZ,
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
            _.intl.string(_.t.AtCukI),
            _.intl.string(_.t.mqxwJO),
            _.intl.string(_.t.wVS5Sd),
            _.intl.string(_.t.Xz0ole),
            _.intl.string(_.t["Ax+IoW"]),
            _.intl.string(_.t["6jI0hd"]),
            _.intl.string(_.t.s0KCgF),
        ],
    }),
    a$ = (0, d.zZ)(u.X.POGGERMODE_CATEGORY, { buildLayout: () => [aJ] });
var a0 = n(502220);
let a1 = (0, d.t_)(u.X.POGGERMODE_PANEL, { useTitle: () => _.intl.string(_.t.AtCukI), buildLayout: () => [a$] }),
    a2 = (0, d.i4)(u.X.POGGERMODE_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(_.t.AtCukI),
        icon: () => (0, x.jsx)("img", { alt: "", src: n(724405), className: a0.$ }),
        usePredicate: () => (0, R.bG)([ag.A], () => ag.A.settingsVisible),
        buildLayout: () => [a1],
    });
var a5 = n(831544),
    a3 = n(235661),
    a8 = n(212245),
    a4 = n(329551),
    a9 = n(285918),
    a7 = n(413339),
    a6 = n(952572),
    re = n(382003);
let rt = (0, d.E2)(u.X.CAMERA_BACKGROUND_SETTING, {
        useSearchTerms: () => [_.intl.string(_.t.lZTUPs)],
        usePredicate: a6.A,
        Component: function () {
            let e = (0, a8.p)(),
                t = f.useRef(!1),
                n = (0, R.bG)([sO.Ay], () => sO.Ay.getVideoDeviceId()),
                [i, l] = f.useState((0, a4.i)(t3.default.getCurrentUser())),
                s = f.useRef(i);
            return (
                f.useEffect(
                    () => () => {
                        t.current && (0, a9._C)(s.current);
                    },
                    [],
                ),
                (0, x.jsx)(re.A, {
                    selectedBackgroundOption: i,
                    onSelectBackgroundOption: (n) => {
                        (t.current = !0), (s.current = n), l(n), (0, a7.gB)(n, { location: e.location }).catch(q.tEg);
                    },
                    currentDeviceId: n,
                })
            );
        },
    }),
    rn = (0, d.zD)(u.X.CAMERA_PREVIEW_PREFERENCE, {
        useTitle: () => _.intl.string(_.t["3Ppr1h"]),
        useSubtitle: () => _.intl.string(_.t.WNbX4O),
        useValue: g.bm.useSetting,
        setValue: (e) => {
            g.bm.updateSetting(e), Y.default.track(q.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e });
        },
    });
var ri = n(625841),
    rl = n(74848),
    rs = n(204050);
let ra = (0, ix.D)(() => ({ previewEnabled: !1 }));
var rr = n(731854);
let ro = (0, d.E2)(u.X.CAMERA_SELECTION_SETTING, {
    useSearchTerms: () => [_.intl.string(_.t.FsQ3OR)],
    Component: function () {
        let e = (0, R.bG)([sO.Ay], () => sO.Ay.isVideoAvailable()),
            { id: t } = (0, rl.x5)(rr.oh.VIDEO_INPUT),
            { analyticsLocations: n } = (0, iU.Ay)();
        return (0, x.jsx)(ri.U, {
            label: _.intl.string(_.t.FsQ3OR),
            deviceType: rr.oh.VIDEO_INPUT,
            location: "UserSettingsCameraSelect",
            isDisabled: !e,
            helperText: (0, rs.p)()
                ? _.intl.format(_.t.aJYgRt, {
                      onCameraSettingsClick: () => {
                          ra.setState({ previewEnabled: !1 }),
                              window.open((0, rs.i)(t)),
                              Y.default.track(q.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: n });
                      },
                  })
                : void 0,
        });
    },
});
var rd = n(745317),
    ru = n(698292);
let rc = (0, d.E2)(u.X.CAMERA_VIDEO_PREVIEW, {
        useSearchTerms: () => [_.intl.string(_.t.JIf4v7)],
        Component: function () {
            let e = sO.Ay.getCameraComponent(),
                t = (0, R.bG)([sO.Ay], () => sO.Ay.getVideoDeviceId()),
                n = ra.useField("previewEnabled"),
                i = (0, R.bG)([sO.Ay], () => sO.Ay.isVideoAvailable());
            return ((0, e9.l0)(() => {
                ra.setState({ previewEnabled: !1 });
            }),
            n)
                ? (0, x.jsx)("div", {
                      className: ru.T,
                      children: (0, x.jsxs)("div", {
                          className: ru.U,
                          children: [
                              (0, x.jsx)(e, { deviceId: t, width: 387, height: 218, disabled: !n }),
                              (0, x.jsx)(rd.k, {}),
                          ],
                      }),
                  })
                : (0, x.jsx)("div", {
                      className: ru.T,
                      children: (0, x.jsx)(e1.m, {
                          text: i ? null : _.intl.string(_.t["8jSzSe"]),
                          children: (0, x.jsx)(eA.$, {
                              variant: "primary",
                              text: _.intl.string(_.t.JIf4v7),
                              onClick: () => ra.setState({ previewEnabled: !0 }),
                              disabled: !i,
                          }),
                      }),
                  });
        },
    }),
    rg = (0, d.zZ)(u.X.CAMERA_CATEGORY, {
        useTitle: () => _.intl.string(_.t.uje3P9),
        usePredicate: () => (0, R.bG)([sO.Ay], () => sO.Ay.supports(rr.O5.VIDEO)),
        buildLayout: () => [rc, rn, ro, rt],
    });
var r_ = n(827343);
let rm = (0, d.zD)(u.X.VOICE_AND_VIDEO_OPENH264, {
        useTitle: () => _.intl.string(_.t.qFphsa),
        useSubtitle: () => _.intl.string(_.t.cQfwyY),
        usePredicate: function () {
            return (0, lt.j9)();
        },
        useValue: function () {
            return (0, R.bG)([sO.Ay], () => sO.Ay.getOpenH264Enabled());
        },
        setValue: function (e) {
            r_.A.setOpenH264Enabled(e),
                (0, ln.A)({
                    title: _.intl.string(_.t["9jf31O"]),
                    subtitle: _.intl.string(_.t["J2wg+X"]),
                    confirmText: _.intl.string(_.t.BddRzS),
                    onConfirm: () => l3.A.app.relaunch(),
                });
        },
        useSearchTerms: () => ["open", "OpenH264", "H264", "codec"],
    }),
    rh = (0, d.zD)(u.X.VOICE_AND_VIDEO_AUDIO_RECORDING, {
        useTitle: () => _.intl.string(_.t["r6K+TL"]),
        useSubtitle: () => _.intl.string(_.t["xl9+I6"]),
        useValue: function () {
            return (0, R.bG)([sO.Ay], () => sO.Ay.getAecDump());
        },
        setValue: r_.A.setAecDump,
        usePredicate: function () {
            return (0, R.bG)([sO.Ay], () => sO.Ay.isAecDumpSupported());
        },
    });
var rA = n(139033),
    rp = n(862482),
    rE = n(640238),
    rT = n(825484),
    rS = n(77138),
    rx = n(487329),
    rf = n(353835);
let rb = (0, ix.D)(() => ({ isUploading: !1, isDisabled: !1 }));
async function rN() {
    let e = await l3.A.fileManager.getLogPath();
    l3.A.fileManager.showItemInFolder(e);
}
function rC(e) {
    (0, ln.A)({
        title: _.intl.string(_.t["7UXEF2"]),
        subtitle: _.intl.string(_.t.IYPrRl),
        confirmText: _.intl.string(_.t.BddRzS),
        onConfirm: () => r_.A.setDebugLogging(e),
    });
}
async function rI(e) {
    let { onUploadStart: t, onUploadFinish: n } = e;
    t?.();
    try {
        let e, t;
        await sO.Ay.getMediaEngine().writeAudioDebugState(),
            await rf.A.submitLiveCrashReport({ message: { message: "User Live Dump" } }),
            await (0, rS.a)(q.Umv.RTC),
            (e = _.intl.string(_.t["fKBB8+"])),
            (t = _.intl.string(_.t.BvyxE7)),
            (0, rA.A)({ title: e, subtitle: t });
    } catch (s) {
        var i;
        let e, t, n, l;
        (i = s.displayMessage),
            (e = _.intl.string(_.t.QZg0J7)),
            (t = i ?? _.intl.string(_.t.VzHcSm)),
            (n = (0, rx.B1)(rx.iy.DEBUG_LOG_UPLOAD_FAILED)?.errorCode),
            (l = _.intl.formatToPlainString(_.t.ejOT95, { errorCode: n })),
            (0, N.openModal)((n) =>
                (0, x.jsx)(rE.a, {
                    header: e,
                    confirmButtonColor: rp.$n.Colors.BRAND,
                    confirmText: _.intl.string(_.t.BddRzS),
                    ...n,
                    children: (0, x.jsxs)("div", {
                        style: { display: "flex", flexDirection: "column", height: "100%" },
                        children: [
                            (0, x.jsx)(V.E, { variant: "text-md/normal", children: t }),
                            (0, x.jsx)(V.E, {
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
async function rv() {
    await rI({
        onUploadStart: () => rb.setState({ isUploading: !0 }),
        onUploadFinish: () => rb.setState({ isUploading: !1, isDisabled: !0 }),
    });
}
let ry = (0, d.E2)(u.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [_.intl.string(_.t["726JHL"]), _.intl.string(_.t.EbwFfR), _.intl.string(_.t.nuPtYi)],
    usePredicate: function () {
        let e = (0, R.bG)([sO.Ay], () => sO.Ay.supports(rr.O5.DEBUG_LOGGING));
        return lt.Av && e && null != l3.A.fileManager.readLogFiles;
    },
    Component: function () {
        let e = (0, R.bG)([sO.Ay], () => sO.Ay.getDebugLogging()),
            t = rb.useField("isUploading"),
            n = rb.useField("isDisabled"),
            i = f.useId();
        return (0, x.jsxs)("fieldset", {
            children: [
                (0, x.jsx)(z.A, { tag: "legend", id: i, children: _.intl.string(_.t["FjN+et"]) }),
                (0, x.jsxs)(L.B, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, x.jsx)(D.d, {
                            label: _.intl.string(_.t["726JHL"]),
                            description: _.intl.string(_.t["/7ak9Q"]),
                            checked: e,
                            onChange: rC,
                        }),
                        (0, x.jsx)("div", {
                            role: "group",
                            "aria-labelledby": i,
                            children: (0, x.jsxs)(rT.e, {
                                children: [
                                    (0, x.jsx)(eA.$, {
                                        variant: "secondary",
                                        text: _.intl.string(_.t.EbwFfR),
                                        onClick: rv,
                                        loading: t,
                                        disabled: n,
                                        "aria-label": _.intl.string(_.t.aY1OH2),
                                    }),
                                    (0, x.jsx)(eA.$, {
                                        variant: "secondary",
                                        text: _.intl.string(_.t.nuPtYi),
                                        onClick: rN,
                                        "aria-label": _.intl.string(_.t["L/hFOe"]),
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
var rj = n(233545),
    rO = n(412780);
function rR() {
    return (0, R.bG)([t3.default, sO.Ay], () => {
        let e = t3.default.getCurrentUser(),
            t = e?.isStaff() ?? !1,
            n = "canary" === li.Ay.releaseChannel || "development" === li.Ay.releaseChannel,
            i = sO.Ay.supports(rr.O5.CONNECTION_REPLAY);
        return t && n && i;
    });
}
let rL = (0, d.zD)(u.X.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
        useTitle: () => _.intl.string(_.t.U4FgFK),
        useSubtitle: () => _.intl.string(_.t.Lm72RU),
        useValue: function () {
            return (0, R.bG)([rO.Ay], () => rO.Ay.shouldRecordNextConnection());
        },
        setValue: rj.Et,
        usePredicate: rR,
    }),
    rD = (0, d.Tf)(u.X.VOICE_AND_VIDEO_OPEN_CONNECTION_REPLAY, {
        useTitle: () => _.intl.string(_.t.nJnOHO),
        useLabel: () => _.intl.string(_.t["3xjX0U"]),
        onClick: rj.YW,
        usePredicate: rR,
    });
var rG = n(926919),
    rP = n(111162),
    rM = n(698723);
let rU = (0, d.zD)(u.X.VOICE_AND_VIDEO_STREAM_INFO_OVERLAY, {
        useTitle: () => _.intl.string(_.t["0CEP6e"]),
        useSubtitle: () => _.intl.string(_.t["kBXuW+"]),
        useValue: function () {
            return (0, R.bG)([rP.default], () => rP.default.isStreamInfoOverlayEnabled);
        },
        setValue: function (e) {
            let t = rP.default.isStreamInfoOverlayEnabled;
            (0, rM.A)("stream_info_overlay_enabled", e, t), (0, rG.x)({ isStreamInfoOverlayEnabled: e });
        },
        usePredicate: function () {
            return g.Q_.useSetting();
        },
    }),
    rk = (0, d.bd)(u.X.VOICE_AND_VIDEO_DIAGNOSTICS_ACCORDION, {
        useTitle: (e) => (e ? _.intl.string(_.t["/B4I8H"]) : _.intl.string(_.t.BTlsWH)),
        useCollapsedSubtitle: () => _.intl.string(_.t.la1Ys4),
        buildLayout: () => [rU, rh, rL, rD, ry],
    });
function rV(e, t, n) {
    (0, ln.A)({ title: e, subtitle: t, confirmText: _.intl.string(_.t.BddRzS), onConfirm: n });
}
let rw = (0, d.Tf)(u.X.VOICE_AND_VIDEO_RESET_ALL_SETTINGS, {
        useTitle: () => _.intl.string(_.t.SXfv1v),
        useSubtitle: () => _.intl.string(_.t["buA5/q"]),
        useLabel: () => _.intl.string(_.t.yBZMsQ),
        onClick: function () {
            rV(_.intl.string(_.t["4iKQ/3"]), _.intl.string(_.t.sQ42iT), r_.A.reset);
        },
        useVariant: () => "critical-secondary",
    }),
    rB = (0, d.zZ)(u.X.VOICE_AND_VIDEO_DIAGNOSTICS_CATEGORY, {
        useTitle: () => _.intl.string(_.t.UDAU9K),
        buildLayout: () => [rm, rk, rw],
    });
var rF = n(347481),
    rz = n(533488),
    rX = n(199966),
    rY = n(963935);
function rH(e) {
    let { title: t } = e;
    return t;
}
function rK(e) {
    let { useTitle: t, settingKey: n, formatter: i, index: l } = e,
        s = t();
    return "string" == typeof s ? i({ title: s, index: l, key: n }) : s;
}
function rW(e) {
    let { setting: t, formatter: n, index: i } = e;
    return () => (0, x.jsx)(rK, { useTitle: t.useTitle, settingKey: t.key, formatter: n, index: i }, t.key);
}
function rZ(e) {
    return e.type === rY.Z6.LIST;
}
function rQ(e, t) {
    let { limit: n = 2, formatter: i = rH } = t ?? {};
    tO()(n > 0, "[useSettingCollapsibleSubtitle] Limit must be greater than 0");
    let { visibleDirectory: l, accessibleDirectory: s } = (0, rX._)(),
        a = l.get(e) ?? s.get(e);
    tO()(
        null != a && (a.type === rY.Z6.ACCORDION || rZ(a)),
        "[useSettingCollapsibleSubtitle] Node is not a collapsible settings node",
    );
    let r = rZ(a) ? (a.collapseAfter ?? 0) : 0,
        o = a.layout;
    return f.useMemo(() => {
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
                return _.intl.format(_.t["3H9tCW"], { settingOneHook: rW({ setting: t[0], formatter: i, index: 0 }) });
            else if (2 === t.length)
                return _.intl.format(_.t.MWryo6, {
                    settingOneHook: rW({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: rW({ setting: t[1], formatter: i, index: 1 }),
                });
            else
                return _.intl.format(_.t.a00b5G, {
                    settingOneHook: rW({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: rW({ setting: t[1], formatter: i, index: 1 }),
                    settingThreeHook: rW({ setting: t[2], formatter: i, index: 2 }),
                });
        return 1 === l
            ? _.intl.format(_.t.O8vNbS, { settingOneHook: rW({ setting: t[0], formatter: i, index: 0 }) })
            : 2 === l
              ? _.intl.format(_.t["acXG/W"], {
                    settingOneHook: rW({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: rW({ setting: t[1], formatter: i, index: 1 }),
                })
              : _.intl.format(_.t["5+ldWc"], {
                    settingOneHook: rW({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: rW({ setting: t[1], formatter: i, index: 1 }),
                    settingThreeHook: rW({ setting: t[2], formatter: i, index: 2 }),
                });
    }, [n, r, o, i]);
}
let rq = (0, d.zD)(u.X.VOICE_AUTOMATIC_GAIN_CONTROL_SETTING, {
        useTitle: () => _.intl.string(_.t.cUMdH0),
        useSubtitle: () => _.intl.string(_.t["6EjbvA"]),
        useValue: function () {
            return (0, R.bG)([sO.Ay], () => sO.Ay.getAutomaticGainControl());
        },
        setValue: function (e) {
            r_.A.setAutomaticGainControl(e, { page: q.liQ.USER_SETTINGS, section: q.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, R.bG)([sO.Ay, rF.A], () => {
                let e = sO.Ay.getInputDeviceId();
                return rF.A.hasAutomaticGainControl(e);
            });
        },
        usePredicate: function () {
            return (0, R.bG)([sO.Ay], () => sO.Ay.isAutomaticGainControlSupported() && sO.Ay.isInputProfileCustom());
        },
    }),
    rJ = (0, d.sN)(u.X.VOICE_GLOBAL_ATTENUATION_SLIDER, {
        useTitle: () => _.intl.string(_.t.AlybXj),
        setValue: (e) =>
            r_.A.setAttenuation(e, sO.Ay.getAttenuateWhileSpeakingSelf(), sO.Ay.getAttenuateWhileSpeakingOthers()),
        minValue: 0,
        maxValue: 100,
        getInitialValue: () => sO.Ay.getAttenuation(),
    }),
    r$ = (0, d.zD)(u.X.VOICE_GLOBAL_ATTENUATION_FOR_SELF_SETTING, {
        useTitle: () => _.intl.string(_.t["9dHxRY"]),
        useValue: () => (0, R.bG)([sO.Ay], () => sO.Ay.getAttenuateWhileSpeakingSelf()),
        setValue: (e) => r_.A.setAttenuation(sO.Ay.getAttenuation(), e, sO.Ay.getAttenuateWhileSpeakingOthers()),
    }),
    r0 = (0, d.zD)(u.X.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
        useTitle: () => _.intl.string(_.t.SMt0Gr),
        useValue: () => (0, R.bG)([sO.Ay], () => sO.Ay.getAttenuateWhileSpeakingOthers()),
        setValue: (e) => r_.A.setAttenuation(sO.Ay.getAttenuation(), sO.Ay.getAttenuateWhileSpeakingSelf(), e),
    }),
    r1 = (0, d.FW)(u.X.VOICE_GLOBAL_ATTENUATION_FIELD_SET, {
        variant: "compact",
        useTitle: () => _.intl.string(_.t.oSdBvW),
        useSubtitle: () => _.intl.string(_.t["0A/8Rt"]),
        usePredicate: () => (0, R.bG)([sO.Ay], () => sO.Ay.supports(rr.O5.ATTENUATION)),
        buildLayout: () => [rJ, r$, r0],
    });
var r2 = n(801644);
let r5 = (0, d.zD)(u.X.VOICE_HARDWARE_MUTE_SILENCE_ALERT_SETTING, {
        useTitle: () => _.intl.string(_.t.pZ0vr4),
        useSubtitle: () => _.intl.string(_.t.tVbzoZ),
        useValue: function () {
            return (0, R.bG)([ip.Ay], () => !ip.Ay.disableHardwareMuteSilenceAlert);
        },
        setValue: function (e) {
            (0, rM.A)("hardware_mute_silence_alert_enabled", e, !ip.Ay.disableHardwareMuteSilenceAlert),
                lK.Ay.updatedUnsyncedSettings({ disableHardwareMuteSilenceAlert: !e });
        },
        usePredicate: function () {
            let { enableHardwareSilenceWarning: e } = r2.A.useConfig({ location: "HardwareMuteSilenceAlertSetting" });
            return e;
        },
    }),
    r3 = (0, d.zD)(u.X.VOICE_BYPASS_SYSTEM_INPUT_PROCESSING_SETTING, {
        useTitle: () => _.intl.string(_.t.DFPXIG),
        useSubtitle: () => _.intl.string(_.t["UyRX+C"]),
        useValue: function () {
            return (0, R.bG)([sO.Ay], () => sO.Ay.getBypassSystemInputProcessing());
        },
        setValue: function (e) {
            r_.A.setBypassSystemInputProcessing(e);
        },
        usePredicate: function () {
            return (0, R.bG)([sO.Ay], () => sO.Ay.showBypassSystemInputProcessing() && sO.Ay.isInputProfileCustom());
        },
    }),
    r8 = (0, d.zD)(u.X.VOICE_SWITCH_CHANNEL_ALERT_SETTING, {
        useTitle: () => _.intl.string(_.t.jrWHD3),
        useSubtitle: () => _.intl.string(_.t.YCCMkJ),
        useValue: function () {
            return (0, R.bG)([ip.Ay], () => !ip.Ay.disableVoiceChannelChangeAlert);
        },
        setValue: function (e) {
            (0, rM.A)("switch_channel_warning_enabled", e, !ip.Ay.disableVoiceChannelChangeAlert),
                lK.Ay.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !e });
        },
    }),
    r4 = (0, d.zD)(u.X.ADVANCED_VOICE_ACTIVITY_PROCESSING_SETTING, {
        useTitle: () => _.intl.string(_.t.BbESsg),
        useSubtitle: () => _.intl.string(_.t.LoOB1F),
        useValue: function () {
            return (0, R.bG)([sO.Ay], () => {
                let { vadUseKrisp: e } = sO.Ay.getModeOptions();
                return e;
            });
        },
        setValue: function (e) {
            let t = sO.Ay.getMode();
            r_.A.setMode(t, { vadUseKrisp: e });
        },
        useDisabled: function () {
            return (0, R.bG)([sO.Ay], () => {
                let e = sO.Ay.getMode(),
                    t = sO.Ay.getModeOptions().autoThreshold;
                return e === q.TBI.VOICE_ACTIVITY && t;
            });
        },
        usePredicate: function () {
            return (0, R.bG)([sO.Ay], () => sO.Ay.isAdvancedVoiceActivitySupported() && sO.Ay.isInputProfileCustom());
        },
    }),
    r9 = (0, d.Hn)(u.X.VOICE_AUDIO_SUBSYSTEM_SETTING, {
        useTitle: () => _.intl.string(_.t.wVBHr0),
        useValue: function () {
            return (0, R.bG)([sO.Ay], () => sO.Ay.getAudioSubsystem());
        },
        setValue: function (e) {
            rV(_.intl.string(_.t.uY7AcQ), _.intl.string(_.t.gBqik6), () => r_.A.setAudioSubsystem(e));
        },
        useOptions: function () {
            let {
                legacyAudioSubsystemSupported: e,
                experimentalAudioSubsystemSupported: t,
                automaticAudioSubsystemSupported: n,
            } = (0, R.cf)([sO.Ay], () => ({
                legacyAudioSubsystemSupported: sO.Ay.supports(rr.O5.LEGACY_AUDIO_SUBSYSTEM),
                experimentalAudioSubsystemSupported: sO.Ay.supports(rr.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM),
                automaticAudioSubsystemSupported: sO.Ay.supports(rr.O5.AUTOMATIC_AUDIO_SUBSYSTEM),
            }));
            return f.useMemo(() => {
                let i;
                return (
                    (i = [{ id: rr.rB.STANDARD, value: rr.rB.STANDARD, label: _.intl.string(_.t.dqb2JZ) }]),
                    e && i.push({ id: rr.rB.LEGACY, value: rr.rB.LEGACY, label: _.intl.string(_.t["TYfH+5"]) }),
                    t &&
                        i.push({ id: rr.rB.EXPERIMENTAL, value: rr.rB.EXPERIMENTAL, label: _.intl.string(_.t.liQmtr) }),
                    n && i.push({ id: rr.rB.AUTOMATIC, value: rr.rB.AUTOMATIC, label: _.intl.string(_.t.qNgtO1) }),
                    i
                );
            }, [n, t, e]);
        },
        usePredicate: function () {
            return (0, R.bG)([sO.Ay], () => sO.Ay.shouldOfferManualSubsystemSelection());
        },
    }),
    r7 = (0, d.zD)(u.X.VOICE_QUALITY_OF_SERVICE_SETTING, {
        useTitle: () => _.intl.string(_.t.uancuJ),
        useSubtitle: () => _.intl.string(_.t.I1Eoqq),
        useValue: function () {
            return (0, R.bG)([sO.Ay], () => sO.Ay.getQoS());
        },
        setValue: function (e) {
            r_.A.setQoS(e);
        },
        usePredicate: function () {
            return (0, R.bG)([sO.Ay], () => sO.Ay.supports(rr.O5.QOS));
        },
    }),
    r6 = (0, d.zD)(u.X.VOICE_SILENCE_WARNING_SETTING, {
        useTitle: () => _.intl.string(_.t["4rsOPQ"]),
        useSubtitle: () => _.intl.string(_.t.jtiiCw),
        useValue: function () {
            return (0, R.bG)([sO.Ay], () => sO.Ay.getEnableSilenceWarning());
        },
        setValue: function (e) {
            r_.A.setSilenceWarning(e);
        },
        usePredicate: function () {
            return ey.isPlatformEmbedded;
        },
    }),
    oe = (0, d.bd)(u.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? _.intl.string(_.t.KHsSWK) : _.intl.string(_.t.PPDo5V);
        },
        useCollapsedSubtitle: () =>
            rQ(u.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
                limit: (0, R.bG)([sO.Ay], () => sO.Ay.isInputProfileCustom()) ? 3 : 2,
            }),
        buildLayout: () => [rq, r4, r3, r6, r5, r8, r1, r9, r7],
    }),
    ot = (0, d.zD)(u.X.VOICE_ECHO_CANCELLATION_SETTING, {
        useTitle: () => _.intl.string(_.t.iWTwu6),
        useValue: function () {
            return (0, R.bG)([sO.Ay], () => sO.Ay.getEchoCancellation());
        },
        setValue: function (e) {
            r_.A.setEchoCancellation(e, { page: q.liQ.USER_SETTINGS, section: q.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, R.bG)([sO.Ay, rF.A], () => {
                let e = sO.Ay.getInputDeviceId();
                return rF.A.hasEchoCancellation(e);
            });
        },
        usePredicate: function () {
            return (0, R.bG)([sO.Ay], () => sO.Ay.isInputProfileCustom());
        },
    });
var on = n(205693),
    oi = n(451988),
    ol = n(640940),
    os = n(160671);
let oa = (0, lx.Ld)();
function or(e) {
    let { isSpeaking: t, className: n, id: i, ariaDescribedBy: l, ariaLabelledBy: s, disabled: a } = e;
    return (0, x.jsx)("div", {
        role: "meter",
        className: eB()(ol.$I, n),
        id: i,
        "aria-describedby": l,
        "aria-labelledby": s,
        "aria-valuenow": t && !a ? 100 : 0,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuetext": t && !a ? _.intl.string(_.t.haLKZ0) : _.intl.string(_.t.X2hJL7),
        children: (0, x.jsx)("div", { className: eB()(ol.Jx, ol.NU, { [ol.zY]: t && !a, [ol.r9]: a }) }),
    });
}
function oo(e) {
    let { volume: t, id: n, ariaDescribedBy: i, ariaLabelledBy: l, disabled: s } = e,
        { threshold: a, autoThreshold: r } = (0, R.cf)([sO.Ay], () => ({
            threshold: sO.Ay.getModeOptions().threshold,
            autoThreshold: sO.Ay.getModeOptions().autoThreshold,
        })),
        o = (0, R.bG)([sO.Ay], () => sO.Ay.getMode());
    return (0, x.jsx)("section", {
        className: eB()(ol.Mo, ol.jW),
        id: n,
        "aria-describedby": i,
        "aria-labelledby": l,
        children: (0, x.jsx)(n9.A, {
            initialValue: a + 100,
            onValueRender: (e) => `${(-((100 - e) * 1)).toFixed(0)}dB`,
            onValueChange: (e) => {
                var t;
                return (t = -((100 - e) * 1)), void r_.A.setMode(o, { threshold: t, autoThreshold: r });
            },
            barStyles: { background: B.A.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: B.A.unsafe_rawColors.YELLOW_300.css },
            "aria-labelledby": oa,
            disabled: s,
            children: (0, x.jsxs)("div", {
                className: eB()(ol.NU, ol.TL, ol.Jx, os.bar),
                children: [
                    (0, x.jsx)("div", { className: eB()(ol.GS, ol.SH), style: { width: s ? 0 : t + 100 + "%" } }),
                    (0, x.jsx)("div", { className: "grow" }),
                ],
            }),
        }),
    });
}
let od = (0, d.E2)(u.X.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useSearchTerms: () => [_.intl.string(_.t["sqUm+k"]), _.intl.string(_.t.I1Zuq0), _.intl.string(_.t.nuFtHH)],
    usePredicate: () => (0, R.bG)([sO.Ay], () => sO.Ay.isInputProfileCustom()),
    Component: function () {
        let { autoThreshold: e, disabled: t } = (0, R.cf)([sO.Ay], () => ({
                autoThreshold: sO.Ay.getModeOptions().autoThreshold,
                disabled: sO.Ay.getMode() !== rr.TB.VOICE_ACTIVITY,
            })),
            n = f.useCallback((e) => {
                let t = sO.Ay.getMode(),
                    { threshold: n } = sO.Ay.getModeOptions();
                r_.A.setMode(t, { autoThreshold: e, threshold: n });
            }, []),
            i = (0, R.bG)([sO.Ay], () => sO.Ay.supports(rr.O5.AUTOMATIC_VAD)),
            { volume: l, isSpeaking: s } = (function () {
                let [e, t] = f.useState(-100),
                    [n, i] = f.useState(!1);
                function l(e, n) {
                    t(e), i((n & rr.ME.VOICE) === rr.ME.VOICE);
                }
                return (
                    f.useEffect(() => {
                        let e = new oi.Ep();
                        return (
                            e.start(1e3, () => {
                                sO.Ay.getMediaEngine().on(on.bg.VoiceActivity, l), e.stop();
                            }),
                            () => {
                                sO.Ay.getMediaEngine().removeListener(on.bg.VoiceActivity, l), e.stop();
                            }
                        );
                    }, []),
                    { volume: e, isSpeaking: n }
                );
            })(),
            a = (0, R.bG)([sO.Ay], () => sO.Ay.isEnabled()),
            r = f.useMemo(
                () =>
                    !a &&
                    (0, x.jsx)("div", {
                        className: ol.B4,
                        children: (0, x.jsx)(O.w, {
                            type: "warning",
                            children: _.intl.format(_.t["O13I+O"], { onEnableClick: () => r_.A.enable(!0) }),
                        }),
                    }),
                [a],
            ),
            o = f.useMemo(() => (e ? _.intl.string(_.t.JsbzjA) : _.intl.string(_.t.MLmyMY)), [e]),
            d = f.useId(),
            u = f.useId();
        return i
            ? (0, x.jsxs)("fieldset", {
                  "aria-describedby": u,
                  children: [
                      (0, x.jsx)(z.A, { tag: "legend", id: d, children: _.intl.string(_.t.GByLar) }),
                      (0, x.jsx)(z.A, { id: u, children: o }),
                      (0, x.jsxs)(L.B, {
                          direction: "vertical",
                          gap: 8,
                          children: [
                              (0, x.jsx)(D.d, {
                                  disabled: t,
                                  label: _.intl.string(_.t.lY6j47),
                                  description: o,
                                  checked: e,
                                  onChange: n,
                              }),
                              e
                                  ? (0, x.jsx)(or, {
                                        isSpeaking: s,
                                        className: ol.UJ,
                                        ariaDescribedBy: u,
                                        ariaLabelledBy: d,
                                        disabled: t,
                                    })
                                  : (0, x.jsx)(oo, { volume: l, ariaDescribedBy: u, ariaLabelledBy: d, disabled: t }),
                              r,
                          ],
                      }),
                  ],
              })
            : (0, x.jsxs)(L.B, {
                  direction: "vertical",
                  gap: 8,
                  children: [
                      (0, x.jsx)(lR.D, {
                          label: _.intl.string(_.t["sqUm+k"]),
                          description: o,
                          layout: "vertical",
                          children: (n) =>
                              e
                                  ? (0, x.jsx)(or, {
                                        isSpeaking: s,
                                        className: ol.UJ,
                                        id: n.controlId,
                                        ariaDescribedBy: n.describedById,
                                        ariaLabelledBy: n.labelId,
                                        disabled: t,
                                    })
                                  : (0, x.jsx)(oo, {
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
var ou = n(366010);
let oc = n(993830),
    og = n(413142),
    o_ = { page: q.liQ.USER_SETTINGS, section: q.JJy.SETTINGS_VOICE_AND_VIDEO };
function om() {
    let e = (0, R.bG)([nd.A], () => (0, ou.q)(nd.A.theme));
    return (0, x.jsx)("img", { src: e ? oc : og, width: 48, height: 32, alt: "" });
}
let oh = (0, d.E2)(u.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [_.intl.string(_.t.t8Qhib), _.intl.string(_.t.hmfkCi)],
    usePredicate: function () {
        return (0, R.bG)([sO.Ay], () => sO.Ay.isInputProfileCustom() && sO.Ay.isNoiseSuppressionSupported());
    },
    Component: function () {
        let e = f.useCallback((e) => {
                r_.A.setNoiseCancellation("KRISP" === e, o_), r_.A.setNoiseSuppression("STANDARD" === e, o_);
            }, []),
            {
                noiseCancellation: t,
                noiseSuppression: n,
                isNoiseSuppressionSupported: i,
                isNoiseCancellationSupported: l,
            } = (0, R.cf)([sO.Ay], () => ({
                noiseCancellation: sO.Ay.getNoiseCancellation(),
                noiseSuppression: sO.Ay.getNoiseSuppression(),
                isNoiseSuppressionSupported: sO.Ay.isNoiseSuppressionSupported(),
                isNoiseCancellationSupported: sO.Ay.isNoiseCancellationSupported(),
            })),
            s = f.useMemo(() => {
                let e = [];
                return (
                    l && e.push({ id: "krisp", label: _.intl.string(_.t.rdoNzt), value: "KRISP" }),
                    i && e.push({ id: "standard", label: _.intl.string(_.t.qXeYHw), value: "STANDARD" }),
                    e.push({ id: "disabled", label: _.intl.string(_.t.wkYAlz), value: "NONE" }),
                    e
                );
            }, [l, i]),
            a = l
                ? _.intl.format(_.t["1q5aTp"], { helpArticle: to.A.getArticleURL(q.MVz.NOISE_SUPPRESSION) })
                : _.intl.string(_.t.OWKjw5);
        return (0, x.jsxs)(L.B, {
            direction: "vertical",
            gap: 0,
            children: [
                (0, x.jsx)(sT.l, {
                    label: _.intl.string(_.t.t8Qhib),
                    description: a,
                    layout: "horizontal",
                    value: t ? "KRISP" : n ? "STANDARD" : "NONE",
                    onSelectionChange: e,
                    options: s,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                l && (0, x.jsx)(om, {}),
            ],
        });
    },
});
var oA = n(944993),
    op = n(509381);
let oE = !lt.Av;
function oT() {
    return (0, R.bG)([sO.Ay], () => sO.Ay.getMode() === rr.TB.PUSH_TO_TALK);
}
let oS = (0, d.zD)(u.X.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function () {
        return lt.Av ? _.intl.string(_.t.tG4Np5) : _.intl.string(_.t.JMyQin);
    },
    useSubtitle: function () {
        let e = (0, R.bG)([sO.Ay], () => sO.Ay.getMode());
        return f.useMemo(() => {
            if (!lt.Av && e === rr.TB.PUSH_TO_TALK)
                return _.intl.format(_.t["VHI4+Y"], { onDownloadClick: () => (0, oA._)("Help Text PTT") });
        }, [e]);
    },
    usePredicate: function () {
        return (0, R.bG)([sO.Ay], () => sO.Ay.getActiveInputProfile() !== op.m.STUDIO);
    },
    useValue: function () {
        return (0, R.bG)([sO.Ay], () => sO.Ay.getMode() === rr.TB.PUSH_TO_TALK);
    },
    setValue: function (e) {
        var t, i;
        (t = e ? rr.TB.PUSH_TO_TALK : rr.TB.VOICE_ACTIVITY),
            (i = [ek.A.USER_SETTINGS_VOICE_AND_VIDEO]),
            t === rr.TB.PUSH_TO_TALK &&
                oE &&
                (0, N.openModalLazy)(async () => {
                    let { default: e } = await n.e("10919").then(n.bind(n, 556506));
                    return (t) =>
                        (0, x.jsx)(e, {
                            title: _.intl.string(_.t.Kdt0Gb),
                            confirmText: _.intl.string(_.t["1WjMbC"]),
                            cancelText: _.intl.string(_.t.BddRzS),
                            onConfirm: () => (0, oA._)("PTT Limited Modal"),
                            body: _.intl.string(_.t.NIozvt),
                            ...t,
                        });
                }),
            r_.A.setMode(t, void 0, void 0, { analyticsLocations: i });
    },
    useSearchTerms: () => [_.intl.string(_.t["pS+K2L"]), _.intl.string(_.t.nuFtHH)],
});
var ox = n(285802);
let of = (0, d.E2)(u.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
        useSearchTerms: () => [_.intl.string(_.t["pS+K2L"]), _.intl.string(_.t.nuFtHH)],
        usePredicate: oT,
        Component: function () {
            let e = (0, R.bG)([sO.Ay], () => {
                    let { shortcut: e } = sO.Ay.getModeOptions();
                    return e;
                }),
                t = _.intl.format(_.t.HVvn5T, { onClick: () => (0, ej.openUserSettings)(u.X.KEYBINDS_PANEL) });
            return (0, x.jsx)(lR.D, {
                label: _.intl.string(_.t["o+BJQR"]),
                description: t,
                layout: "horizontal-responsive",
                children: (0, x.jsx)("div", {
                    className: ox.e,
                    children: (0, x.jsx)(tL.A, {
                        defaultValue: e,
                        onChange: (e) => r_.A.setMode(q.TBI.PUSH_TO_TALK, { shortcut: e }),
                    }),
                }),
            });
        },
    }),
    ob = (0, d.sN)(u.X.VOICE_PUSH_TO_TALK_RELEASE_DELAY_SETTING, {
        useTitle: () => _.intl.string(_.t.GCNMM8),
        useSearchTerms: () => [_.intl.string(_.t["pS+K2L"]), _.intl.string(_.t.nuFtHH)],
        setValue: function (e) {
            r_.A.setMode(q.TBI.PUSH_TO_TALK, { delay: e });
        },
        minValue: 0,
        maxValue: q.IjB,
        getInitialValue: function () {
            let { delay: e } = sO.Ay.getModeOptions();
            return e;
        },
        onValueRender: function (e) {
            return e >= 1e3 ? ((e /= 1e3), `${e.toFixed(2)}s`) : `${e.toFixed(0)}\u00A0ms`;
        },
        usePredicate: oT,
    }),
    oN = (0, d.Qx)(u.X.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => _.intl.string(_.t.LM3U3k),
        usePredicate: function () {
            let { enabledInputProfiles: e } = (0, rz._)({ location: "SettingsRendererConfig" });
            return e.length > 0;
        },
        useSearchTerms: () => [_.intl.string(_.t.nuFtHH), _.intl.string(_.t.VZPR0R), _.intl.string(_.t.cjPbpT)],
        useValue: function () {
            return (0, R.bG)([sO.Ay], () => sO.Ay.getActiveInputProfile() ?? op.m.CUSTOM);
        },
        setValue: function (e) {
            let t = [ek.A.USER_SETTINGS_VOICE_AND_VIDEO];
            r_.A.setActiveInputProfile(e, { analyticsLocations: t });
        },
        useOptions: function () {
            let { enabledInputProfiles: e } = (0, rz.d)({ location: "InputProfileCategory" });
            return [
                { value: op.m.VOICE_ISOLATION, name: _.intl.string(_.t.cjPbpT), desc: _.intl.string(_.t.CzhvnE) },
                { value: op.m.STUDIO, name: _.intl.string(_.t.VZPR0R), desc: _.intl.string(_.t.ZaJksS) },
                { value: op.m.CUSTOM, name: _.intl.string(_.t["N/PQjv"]), desc: _.intl.string(_.t.SnBmuY) },
            ].filter((t) => {
                let { value: n } = t;
                return e.includes(n);
            });
        },
    }),
    oC = (0, d.zZ)(u.X.VOICE_INPUT_PROFILE_CATEGORY, {
        useInlineNotice: function () {
            let e = (0, R.bG)([rF.A, sO.Ay], () => {
                let e = sO.Ay.getInputDeviceId();
                return (
                    (rF.A.hasEchoCancellation(e) || rF.A.hasNoiseSuppression(e) || rF.A.hasAutomaticGainControl(e)) &&
                    sO.Ay.isInputProfileCustom()
                );
            });
            return f.useMemo(() => {
                if (e)
                    return {
                        type: eb.lT.INLINE_NOTICE,
                        noticeType: "info",
                        useText: () => _.intl.string(_.t["/Whuzi"]),
                    };
            }, [e]);
        },
        buildLayout: () => [oN, od, oh, ot, oS, of, ob, oe],
    });
var oI = n(403581),
    ov = n(983851),
    oy = n(687021),
    oj = n(128450),
    oO = n(796774),
    oR = n(209932),
    oL = n(536432),
    oD = n(984813),
    oG = n(22231),
    oP = n(927578),
    oM = n(792348),
    oU = n(674168),
    ok = n(126970),
    oV = n(805945),
    ow = n(902460);
function oB(e) {
    let { onSelect: t } = e,
        [n, i] = f.useState(!1),
        l = (0, R.bG)([t3.default], () => t3.default.getCurrentUser()),
        s = oP.Ay.canUseCustomCallSounds(l),
        a = f.useRef(null);
    function r(e) {
        s && (i(!1), t?.(e));
    }
    return (0, x.jsx)(P.Y, {
        targetElementRef: a,
        shouldShow: n,
        position: "left",
        onRequestClose: () => i(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, x.jsx)(nj.l, {
                children: (0, x.jsx)(ok.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: r,
                    gridNotice: s ? null : (0, x.jsx)(oU.m, {}),
                    analyticsSource: "call sounds edit setting",
                }),
            });
        },
        children: (e) =>
            (0, x.jsx)(oV.dT, {
                ...e,
                ref: a,
                onClick: () => {
                    i(!n);
                },
                text: _.intl.string(_.t.uOe0Az),
                children: (0, x.jsx)(oG.R, { size: "md", color: "currentColor", className: ow.Wo }),
            }),
    });
}
function oF(e) {
    let { sound: t } = e,
        { previewSound: n } = (0, oM.A)(t, null),
        i =
            0 === (0, oL.wH)()
                ? _.intl.string(_.t.OASXjt)
                : _.intl.formatToPlainString(_.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name });
    return (0, x.jsx)(oV.dT, {
        onClick: n,
        text: i,
        children: (0, x.jsx)(ov.H, { size: "md", color: "currentColor", className: ow.wg }),
    });
}
function oz(e) {
    let { sound: t, isGlobal: n, onSelect: i } = e,
        l = null != t,
        s = t?.emojiId,
        a = t?.emojiName,
        r = l && (null != a || null != s);
    return (0, x.jsxs)("div", {
        className: ow.D6,
        children: [
            (0, x.jsxs)("div", {
                className: ow.kL,
                children: [
                    r && (0, x.jsx)(ld.A, { emojiId: s, emojiName: a, className: ow.Zg }),
                    (0, x.jsx)(V.E, {
                        variant: "text-md/normal",
                        color: "text-strong",
                        className: ow.dj,
                        children:
                            null == t
                                ? _.intl.string(_.t.PoWNfe)
                                : n
                                  ? _.intl.format(_.t.B6HU6O, {
                                        soundName: t.name,
                                        subtextHook: (e) =>
                                            (0, x.jsx)(V.E, {
                                                variant: "text-xs/medium",
                                                color: "text-default",
                                                tag: "span",
                                                children: e,
                                            }),
                                    })
                                  : t.name,
                    }),
                    l
                        ? (0, x.jsx)(oF, { sound: t })
                        : (0, x.jsx)(ov.H, { size: "md", color: "currentColor", className: ow.Gk }),
                ],
            }),
            (0, x.jsxs)("div", {
                className: ow.kL,
                children: [
                    (0, x.jsx)(oB, { onSelect: i }),
                    l &&
                        !n &&
                        (0, x.jsx)(oV.dT, {
                            onClick: () => i(null),
                            text: _.intl.string(_.t.jmtcGA),
                            children: (0, x.jsx)(sx.u, {
                                size: "md",
                                color: B.A.unsafe_rawColors.RED_400.css,
                                className: ow.Wo,
                            }),
                        }),
                ],
            }),
        ],
    });
}
var oX = n(617617);
n(980504);
var oY = n(811249);
function oH(e) {
    return (0, R.bG)([oR.A], () => {
        if (null == e) return null;
        let { guildId: t, soundId: n } = e;
        return oR.A.getSound("0" === t ? "0" : t, n);
    });
}
function oK(e) {
    let { guildId: t } = e,
        n = (0, R.bG)([oX.A], () => oX.A.settings.guilds?.guilds?.[t]?.joinSound),
        i = oH(n);
    if (null == n || null == i) return null;
    let { emojiId: l, emojiName: s } = i,
        a = null != l || null != s;
    return (0, x.jsxs)("div", {
        className: oY.Io,
        children: [
            a
                ? (0, x.jsx)(ld.A, { emojiId: l, emojiName: s, className: oY.nW })
                : (0, x.jsx)(ov.H, { size: "md", color: "currentColor", className: oY.nW }),
            (0, x.jsx)(V.E, { className: oY.dK, variant: "text-xs/medium", children: i.name }),
        ],
    });
}
let oW = (0, d.E2)(u.X.ENTRANCE_SOUNDS_SETTING, {
    useSearchTerms: () => [_.intl.string(_.t.nzUc3B)],
    Component: function () {
        let { analyticsLocations: e } = (0, iU.Ay)(),
            [t, n] = f.useState("0"),
            i = (0, oD.mz)(t),
            l = oH(i),
            s = i?.type === oD.PP.GLOBAL,
            a = (0, R.bG)([oR.A], () => oR.A.hasFetchedAllSounds()) && null != i && null == l;
        f.useEffect(() => {
            a && (0, oL.ND)({ location: e });
        }, [a, e]),
            f.useEffect(() => {
                (0, oO.E7)();
            }, []);
        let r = f.useCallback((e, t) => {
            let { inDropdown: n } = t;
            return null == e ? null : n ? (0, x.jsx)(oK, { guildId: e.value }) : null;
        }, []);
        return (0, x.jsxs)(nr.n, {
            label: _.intl.string(_.t.nzUc3B),
            description: _.intl.format(_.t.u9RWmv, { helpdeskArticle: to.A.getArticleURL(q.MVz.SOUNDBOARD) }),
            children: [
                (0, x.jsx)(oy.A, {
                    guildId: t,
                    className: oY.Dt,
                    globalOption: { label: _.intl.string(_.t["CpEUP/"]), value: "0" },
                    onChange: (e) => {
                        n(null == e ? "0" : e.id);
                    },
                    renderOptionSuffix: r,
                    hideDivider: !0,
                }),
                (0, x.jsxs)(oj.A, {
                    title: _.intl.format(_.t.I2TsYN, {
                        nitroWheelHook: () => (0, x.jsx)(oI.t, { size: "md", color: "currentColor", className: oY.ax }),
                    }),
                    children: [
                        (0, x.jsx)(oz, {
                            sound: l,
                            isGlobal: s,
                            onSelect: (n) => {
                                null == n ? (0, oL.Dv)(t, e) : (0, oL.un)(t, n, e);
                            },
                        }),
                        a &&
                            (0, x.jsx)(tr.p, {
                                className: oY.lm,
                                messageType: tr.Y.WARNING,
                                children: _.intl.string(_.t.WkPsFR),
                            }),
                    ],
                }),
            ],
        });
    },
});
var oZ = n(824744);
let oQ = (0, d.sN)(u.X.SOUNDBOARD_VOLUME_SETTING, {
    useTitle: () => _.intl.string(_.t.kbFsAD),
    useSubtitle: () => _.intl.format(_.t.BPbGq7, { helpCenterArticle: to.A.getArticleURL(q.MVz.SOUNDBOARD) }),
    setValue: function (e) {
        let t = [ek.A.USER_SETTINGS_VOICE_AND_VIDEO],
            n = (0, oZ.w)(e);
        (0, oO.iy)(n, t);
    },
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let e = (0, oL.wH)();
        return (0, oZ.M)(e);
    },
    onValueRender: function (e) {
        return `${e.toFixed(0)}%`;
    },
});
var oq = n(864145);
let oJ = (0, d.sN)(u.X.SOUNDMOJI_VOLUME_SETTING, {
        useTitle: () => _.intl.string(_.t["2JbvKw"]),
        useSubtitle: () => _.intl.string(_.t.INenzY),
        setValue: function (e) {
            let t = (0, oZ.w)(e);
            g.HO.updateSetting(t);
        },
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = g.HO.getSetting();
            return (0, oZ.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        usePredicate: function () {
            return (0, oq.X)({ location: "SoundmojiVolumeSetting" });
        },
    }),
    o$ = (0, d.zZ)(u.X.SOUNDBOARD_CATEGORY, {
        useTitle: () => _.intl.string(_.t.ABjMWI),
        buildLayout: () => [oQ, oJ, oW],
    });
var o0 = n(803224),
    o1 = n(552122);
let o2 = (0, d.E2)(u.X.SOUNDS_HOLIDAY_NOTICE, {
        useSearchTerms: () => [_.intl.string(_.t.fgSHf8)],
        usePredicate: () => null != o1.A.useHolidaySoundpack(),
        Component: () =>
            (0, x.jsx)(V.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: _.intl.format(_.t.Eup6Wv, {
                    onClick: () => (0, ej.openUserSettings)(u.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                }),
            }),
    }),
    o5 = (0, d.AK)(u.X.VOICE_AND_VIDEO_TO_NOTIFICATION_SOUNDS_NAVIGATOR, {
        useSubtitle: () => _.intl.string(_.t.eyGEE4),
        useSearchTerms: () => [_.intl.string(_.t.eyGEE4)],
        destinationKey: u.X.NOTIFICATIONS_SOUNDS_CATEGORY,
    }),
    o3 = (0, d.gN)(u.X.VOICE_AND_VIDEO_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [o5] });
var o8 = n(264686);
let o4 = (0, ix.D)(() => ({ currentPlayingSound: null }));
function o9() {
    let e = o4.getField("currentPlayingSound");
    e?.stop(), o4.setState({ currentPlayingSound: null });
}
function o7(e) {
    let t = o4.getField("currentPlayingSound");
    t?.stop();
    let n = (0, aA.Ak)(e);
    o4.setState({ currentPlayingSound: n });
}
function o6(e) {
    return (0, d.zD)(`${u.X.SOUNDS_LIST_ITEM_PREFIX}${e.sound}`, {
        useTitle: e.useTitle,
        useSubtitle: () => _.intl.format(_.t.OOiGCM, { onClick: () => o7(e.sound) }),
        useValue: () => {
            let t = (0, R.bG)([o0.A], () => o0.A.isSoundDisabled(e.sound)),
                n = e.useDisabled?.();
            return !t && !n;
        },
        setValue: (t) => {
            let n = o0.A.getDisabledSounds().filter((t) => t !== e.sound);
            t || n.push(e.sound), o8.default.setDisabledSounds(n);
        },
        useDisabled: () => {
            let t = e.useDisabled?.(),
                n = (0, R.bG)([o0.A], () => o0.A.getDisableAllSounds());
            return t || n;
        },
        useDisabledMessage: e.useDisabledMessage,
    });
}
let de = [
        { useTitle: () => _.intl.string(_.t.hK51Yg), sound: "deafen" },
        { useTitle: () => _.intl.string(_.t.XiejaJ), sound: "undeafen" },
        { useTitle: () => _.intl.string(_.t.w4m945), sound: "mute" },
        { useTitle: () => _.intl.string(_.t.YqAjXy), sound: "unmute" },
        { useTitle: () => _.intl.string(_.t.JoTq8n), sound: "camera_on" },
        { useTitle: () => _.intl.string(_.t["8P6tQ6"]), sound: "camera_off" },
        { useTitle: () => _.intl.string(_.t["juL9/L"]), sound: "disconnect" },
        { useTitle: () => _.intl.string(_.t.x98vQq), sound: "ptt_start" },
        { useTitle: () => _.intl.string(_.t["1HjRqC"]), sound: "ptt_stop" },
        { useTitle: () => _.intl.string(_.t["9JB1Ck"]), sound: "user_join" },
        { useTitle: () => _.intl.string(_.t.KUBBNt), sound: "user_leave" },
        { useTitle: () => _.intl.string(_.t.EZjqUT), sound: "user_moved" },
        { useTitle: () => _.intl.string(_.t.LnNlQh), sound: "call_calling" },
        { useTitle: () => _.intl.string(_.t.Nd8P5y), sound: "stream_started" },
        { useTitle: () => _.intl.string(_.t["9bYj+G"]), sound: "stream_ended" },
        { useTitle: () => _.intl.string(_.t.KccUI1), sound: "stream_user_joined" },
        { useTitle: () => _.intl.string(_.t.dsjkiN), sound: "stream_user_left" },
        { useTitle: () => _.intl.string(_.t.nFOcf9), sound: "activity_launch" },
        { useTitle: () => _.intl.string(_.t["a6lw/u"]), sound: "activity_end" },
        { useTitle: () => _.intl.string(_.t.KaFxrY), sound: "activity_user_join" },
        { useTitle: () => _.intl.string(_.t.S14z9n), sound: "activity_user_left" },
        { useTitle: () => _.intl.string(_.t.CP3DC3), sound: "reconnect" },
    ],
    dt = (0, d.D1)(u.X.VOICE_AND_VIDEO_SOUNDS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (e, t) =>
            e
                ? _.intl.formatToPlainString(_.t["0JYT98"], { count: t })
                : _.intl.formatToPlainString(_.t.ji1uNt, { count: t }),
        useCollapsedSubtitle: () => rQ(u.X.VOICE_AND_VIDEO_SOUNDS_LIST, { limit: 3 }),
        initialize: function () {
            return () => {
                o9();
            };
        },
        buildLayout: () => de.map((e) => o6(e)),
    }),
    dn = (0, d.zZ)(u.X.SOUNDS_CATEGORY, {
        useTitle: () => _.intl.string(_.t.MKWyKc),
        useInlineNotice: function () {
            let e = (0, R.bG)([o0.A], () => o0.A.getDisableAllSounds());
            return f.useMemo(() => {
                if (e)
                    return {
                        type: eb.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        useText: () =>
                            _.intl.format(_.t.fRvixS, {
                                onClick: () => (0, ej.openUserSettings)(u.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                            }),
                    };
            }, [e]);
        },
        buildLayout: () => [dt, o2, o3],
    }),
    di = (0, d.zD)(u.X.STREAMING_SHOW_STREAM_PREVIEWS, {
        useTitle: () => _.intl.string(_.t.e3Zz3F),
        useSubtitle: () => _.intl.string(_.t.RztTjP),
        useValue: function () {
            return !g.uh.useSetting();
        },
        setValue: function (e) {
            (0, rM.A)("stream_previews_disabled", !e, g.uh.getSetting(), [ek.A.USER_SETTINGS_VOICE_AND_VIDEO]),
                g.uh.updateSetting(!e);
        },
    }),
    dl = (0, d.zD)(u.X.STREAMING_ADVANCED_SCREENSHARE, {
        useTitle: () => _.intl.string(_.t.GmWk2E),
        useSearchTerms: () => [_.intl.string(_.t["Fj/xn1"])],
        useSubtitle: () => _.intl.string(_.t["Fj/xn1"]),
        useValue: function () {
            return (0, R.bG)([sO.Ay], () => sO.Ay.getVideoHook());
        },
        setValue: r_.A.setVideoHook,
        usePredicate: function () {
            return (0, R.bG)([sO.Ay], () => sO.Ay.supportsVideoHook());
        },
    }),
    ds = (0, d.zD)(u.X.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
        useTitle: () => _.intl.string(_.t["4I0qzZ"]),
        useValue: function () {
            return (0, R.bG)([sO.Ay], () => sO.Ay.getExperimentalSoundshare());
        },
        setValue: r_.A.setExperimentalSoundshare,
        usePredicate: function () {
            return (0, R.bG)([sO.Ay], () => {
                let e = sO.Ay.supportsExperimentalSoundshare(),
                    t = sO.Ay.supportsHookSoundshare();
                return e && t;
            });
        },
    }),
    da = (0, d.zD)(u.X.STREAMING_STREAM_ATTENUATION, {
        useTitle: () => _.intl.string(_.t["/jwMtn"]),
        useSubtitle: () => _.intl.string(_.t.zlA23F),
        useValue: function () {
            return (0, R.bG)([sO.Ay], () => sO.Ay.getSidechainCompression());
        },
        setValue: function (e) {
            let t = [ek.A.USER_SETTINGS_VOICE_AND_VIDEO];
            r_.A.setSidechainCompression(e, { analyticsLocations: t });
        },
        usePredicate: function () {
            return sO.Ay.supports(rr.O5.SIDECHAIN_COMPRESSION);
        },
    }),
    dr = (0, d.sN)(u.X.STREAMING_STREAM_ATTENUATION_STRENGTH, {
        useTitle: () => _.intl.string(_.t.fhEzfj),
        setValue: function (e) {
            let t = [ek.A.USER_SETTINGS_VOICE_AND_VIDEO];
            r_.A.setSidechainCompressionStrength(e, { analyticsLocations: t });
        },
        minValue: 1,
        maxValue: 100,
        getInitialValue: sO.Ay.getSidechainCompressionStrength,
        usePredicate: function () {
            return sO.Ay.supports(rr.O5.SIDECHAIN_COMPRESSION);
        },
    }),
    dd = (0, d.zD)(u.X.STREAMING_OS_MENU_SCREEN_CAPTURE, {
        useTitle: () => _.intl.string(_.t.lt8rRx),
        useSubtitle: () => _.intl.string(_.t.ie1mgY),
        useValue: function () {
            return (0, R.bG)([sO.Ay], () => sO.Ay.getUseSystemScreensharePicker());
        },
        setValue: function (e) {
            (0, lt.cX)() && e
                ? (0, ln.A)({
                      title: _.intl.string(_.t["9jf31O"]),
                      subtitle: _.intl.string(_.t.uBd6JW),
                      variant: "primary",
                      onConfirm: () => {
                          r_.A.setUseSystemScreensharePicker(e), l3.A.app.relaunch();
                      },
                      confirmText: _.intl.string(_.t.BddRzS),
                  })
                : r_.A.setUseSystemScreensharePicker(e);
        },
        usePredicate: function () {
            return (0, R.bG)([sO.Ay], () => sO.Ay.supportsSystemScreensharePicker() && (0, lt.cX)());
        },
    }),
    du = (0, d.bd)(u.X.STREAMING_ADVANCED_ACCORDION, {
        useTitle: (e) => (e ? _.intl.string(_.t.qrMyvm) : _.intl.string(_.t.LEtTNl)),
        useCollapsedSubtitle: () => rQ(u.X.STREAMING_ADVANCED_ACCORDION),
        buildLayout: () => [da, dr, dd, ds, dl],
    }),
    dc = (0, d.zZ)(u.X.STREAMING_CATEGORY, { useTitle: () => _.intl.string(_.t.KDdjou), buildLayout: () => [di, du] }),
    dg = (0, d.E2)(u.X.VOICE_MICROPHONE_INPUT_SELECT, {
        useSearchTerms: () => [_.intl.string(_.t.hHMYbb), _.intl.string(_.t.nuFtHH)],
        Component: function () {
            return (0, x.jsx)(ri.U, {
                label: _.intl.string(_.t.UTM8VP),
                deviceType: rr.oh.AUDIO_INPUT,
                location: "UserSettingsVoiceVideo",
                hideDeviceTypeIcon: !0,
            });
        },
    }),
    d_ = (0, d.E2)(u.X.VOICE_SPEAKER_OUTPUT_SELECT, {
        useSearchTerms: () => [_.intl.string(_.t.dl18zb), _.intl.string(_.t["3182VD"]), _.intl.string(_.t["DGq/PR"])],
        Component: function () {
            return (0, x.jsx)(ri.U, {
                label: _.intl.string(_.t.xuYQ0n),
                deviceType: rr.oh.AUDIO_OUTPUT,
                location: "UserSettingsDevices",
                hideDeviceTypeIcon: !0,
            });
        },
    }),
    dm = (0, d.zC)(u.X.VOICE_INPUT_OUTPUT_DEVICE_SPLIT, { buildLayout: () => [dg, d_] }),
    dh = (0, d.sN)(u.X.VOICE_INPUT_VOLUME_SETTING, {
        useTitle: () => _.intl.string(_.t.Rtsr6w),
        useSearchTerms: () => [_.intl.string(_.t.eATD2B), _.intl.string(_.t["3182VD"]), _.intl.string(_.t["DGq/PR"])],
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = sO.Ay.getInputVolume();
            return (0, oZ.M)(e);
        },
        asValueChanges: function (e) {
            let t = [ek.A.USER_SETTINGS_VOICE_AND_VIDEO],
                n = (0, oZ.w)(e);
            r_.A.setInputVolume(n, { analyticsLocations: t });
        },
    }),
    dA = (0, d.sN)(u.X.VOICE_OUTPUT_VOLUME_SETTING, {
        useTitle: () => _.intl.string(_.t.aUJ062),
        useSearchTerms: () => [_.intl.string(_.t.eATD2B), _.intl.string(_.t["3182VD"]), _.intl.string(_.t["DGq/PR"])],
        minValue: 0,
        maxValue: 200,
        getInitialValue: function () {
            let e = sO.Ay.getOutputVolume();
            return (0, oZ.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        asValueChanges: function (e) {
            let t = [ek.A.USER_SETTINGS_VOICE_AND_VIDEO],
                n = (0, oZ.w)(e);
            r_.A.setOutputVolume(n, { analyticsLocations: t });
        },
    }),
    dp = (0, d.zC)(u.X.VOICE_INPUT_OUTPUT_VOLUME_SPLIT, { buildLayout: () => [dh, dA] });
var dE = n(702841),
    dT = n(349288),
    dS = n(152567),
    dx = n(644426);
let df = `${to.A.getArticleURL(q.MVz.VOICE_VIDEO_TROUBLESHOOTING)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm`,
    db = (0, d.E2)(u.X.VOICE_MICROPHONE_TEST_SETTING, {
        useSearchTerms: () => [_.intl.string(_.t.nuFtHH)],
        usePredicate: function () {
            return (0, dE.bG)([sO.Ay], () => sO.Ay.supports(rr.O5.LOOPBACK));
        },
        Component: function () {
            return (0, dE.bG)([sO.Ay], () => sO.Ay.supports(rr.O5.LOOPBACK))
                ? (0, x.jsx)(dS.A, {
                      size: "md",
                      notchBackground: dS.V.GRAY,
                      captionVoice: _.intl.string(_.t.bp3JOV),
                      captionNoVoice: (0, x.jsxs)(x.Fragment, {
                          children: [
                              (0, x.jsx)(V.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-default",
                                  children: _.intl.string(_.t.bgn75v),
                              }),
                              _.intl.string(_.t["MA+OZh"]),
                              (0, x.jsx)(dT.Anchor, {
                                  className: dx.X,
                                  href: to.A.getArticleURL(q.MVz.NO_INPUT_DETECTED),
                                  children: _.intl.string(_.t.RYKKox),
                              }),
                          ],
                      }),
                      helpText: _.intl.format(_.t["V+B3FH"], { guideURL: df }),
                      buttonTest: _.intl.string(_.t.gyljWE),
                      buttonStop: _.intl.string(_.t.I6OnJ3),
                      buttonVariant: "primary",
                      location: { page: q.liQ.USER_SETTINGS, section: q.JJy.SETTINGS_VOICE_AND_VIDEO },
                  })
                : null;
        },
    }),
    dN = ey.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];
function dC(e) {
    let { inputAndOutputAreBluetooth: t, canPromptSystemServiceInstallForVoice: n } = e;
    return (0, x.jsxs)(L.B, {
        children: [
            n && (0, x.jsx)(sG, { sourcePage: "voice" }),
            t && (0, x.jsx)(ll.A, { look: ll.k.WARNING, children: _.intl.string(_.t.Ioz3gx) }),
        ],
    });
}
let dI = (0, d.zZ)(u.X.VOICE_CATEGORY, {
        useTitle: () => _.intl.string(_.t.K3lovD),
        useInlineNotice: function () {
            let e = sD("voice"),
                t = (0, rl.x5)(rr.oh.AUDIO_INPUT),
                n = (0, rl.x5)(rr.oh.AUDIO_OUTPUT),
                i = f.useMemo(() => {
                    let e = dN.some((e) => t?.hardwareId?.startsWith(e)),
                        i = dN.some((e) => n?.hardwareId?.startsWith(e));
                    return e && i && t?.containerId != null && t.containerId === n?.containerId;
                }, [t, n]);
            return f.useMemo(
                () =>
                    e.canPrompt || i
                        ? {
                              type: eb.lT.STRONGLY_DISCOURAGED_CUSTOM,
                              notice: () =>
                                  (0, x.jsx)(dC, {
                                      inputAndOutputAreBluetooth: i,
                                      canPromptSystemServiceInstallForVoice: e.canPrompt,
                                  }),
                          }
                        : null,
                [e.canPrompt, i],
            );
        },
        buildLayout: () => [dm, dp, db],
    }),
    dv = (0, d.t_)(u.X.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => _.intl.string(_.t.B1fFpf),
        buildLayout: () => [dI, oC, rg, dc, dn, o$, rB],
    }),
    dy = (0, d.i4)(u.X.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(_.t.B1fFpf),
        usePredicate: () => sO.Ay.isSupported(),
        icon: a5.c,
        useMenu: a3.A,
        buildLayout: () => [dv],
    }),
    dj = (0, d.zD)(u.X.OS_START_MINIMIZED, {
        useTitle: () => _.intl.string(_.t.GfBL83),
        useSubtitle: () => _.intl.string(_.t.XGyhhc),
        usePredicate: () => (0, lt.uF)(),
        useValue: () => ai.useState((e) => !!e.openOnStartup && e.startMinimized),
        setValue: function (e) {
            ai.setState({ startMinimized: e }), li.Ay.send("TOGGLE_START_MINIMIZED", e);
        },
        useDisabled: () => !ai.useState((e) => e.openOnStartup),
        initialize: () => {
            li.Ay.getSetting("START_MINIMIZED", !1).then((e) => ai.setState({ startMinimized: e }));
        },
    }),
    dO = (0, d.zZ)(u.X.WINDOWS_CATEGORY, {
        buildLayout: () => [as, dj, aa, ao],
        initialize: () => {
            al();
        },
    }),
    dR = (0, d.t_)(u.X.WINDOWS_PANEL, { useTitle: () => _.intl.string(_.t.ZkDZov), buildLayout: () => [dO] }),
    dL = (0, d.i4)(u.X.WINDOWS_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(_.t.ZkDZov),
        icon: e5.k,
        usePredicate: () => ey.isPlatformEmbedded && (0, ey.isWindows)(),
        buildLayout: () => [dR],
    }),
    dD = (0, d.WI)(u.X.APP_SECTION, {
        useTitle: () => _.intl.string(_.t.f2n1TP),
        buildLayout: function () {
            return [dy, sp, i2, a2, s7, an, dL, ac].filter(t8.Vq);
        },
    });
var dG = n(360669),
    dP = n(974544),
    dM = n(194261),
    dU = n(289873),
    dk = n(465323),
    dV = n(391048),
    dw = n(323082),
    dB = n(99696),
    dF = n(202613),
    dz = n(580630),
    dX = n(83617),
    dY = n(935208),
    dH = n(607399),
    dK = n(150934),
    dW = n(256006),
    dZ = n(615405),
    dQ = n(198970),
    dq = n(71532);
let dJ = /[^0-9/]/g,
    d$ = /[^0-9]/g;
class d0 extends f.PureComponent {
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
                ((i = (n = e.replace(dJ, "").split("/"))[0]),
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
            ? (d = d.replace(d$, ""))
            : d === a && e.includes("/") && !a.includes("/") && (d += "/"),
            d.length > e.length && (u += d.length - e.length),
            (this.selectionStart = u),
            null != r && r(d, t);
    };
    render() {
        return (0, x.jsx)(sM.k, {
            ...this.props,
            inputMode: "numeric",
            onChange: this.handleChange,
            inputRef: this.setRef,
        });
    }
}
var d1 = n(832208),
    d2 = n(536439);
let d5 = [
        {
            fields: [
                {
                    expirationDate: {
                        name: "expirationDate",
                        id: (0, lx.Ld)(),
                        title: () => _.intl.string(_.t["CeBa/4"]),
                        autoComplete: "cc-exp",
                        placeholder: () => _.intl.string(_.t.xeEWQ6),
                        pattern: "\\d*",
                        getClassNameForLayout: () => d2.ep,
                        renderInput: (e) => (0, x.jsx)(d0, { ...e }),
                    },
                }.expirationDate,
            ],
        },
    ],
    d3 = function (e) {
        let { onCardInfoChange: t, className: n, expirationDate: i, error: l } = e,
            [s, a] = f.useState(!1),
            [r, o] = f.useState(null),
            [d, u] = f.useState(i);
        return (
            f.useEffect(() => {
                t({ expirationDate: d }, null === r);
            }, [d, t, r]),
            (0, x.jsx)(d1.A, {
                className: n,
                form: d5,
                values: { expirationDate: d },
                errors: null != r ? { expirationDate: r } : {},
                formError: l,
                onFieldChange: (e) => {
                    s || "" === e || a(!0),
                        (s && "" === e) || !(0, dq.So)(e) ? o(_.intl.string(_.t["9/zZdl"])) : o(null),
                        u(e);
                },
            })
        );
    };
var d8 = n(219887),
    d4 = n(276589);
let d9 = "isDefault";
class d7 extends f.PureComponent {
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
            expiresMonth: t instanceof dF.YS ? t.expiresMonth : void 0,
            expiresYear: t instanceof dF.YS ? t.expiresYear : void 0,
            billingAddressValid: !1,
            isDefault: n,
            expirationValid: !0,
            dirtyFields: {},
        };
    }
    componentWillUnmount() {
        i8.h.wait(() => {
            (0, dw.ey)(), (0, dw.tc)();
        });
    }
    handleSubmit = (e) => {
        if ((e.preventDefault(), e.stopPropagation(), 0 === Object.values(this.state.dirtyFields).filter(t8.Vq).length))
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
                ? (0, x.jsx)("div", {
                      className: d4.zc,
                      children: (0, x.jsx)(O.w, { type: "critical", children: t.message }),
                  })
                : null
            : (0, x.jsx)("div", {
                  className: d4.zc,
                  children: (0, x.jsx)(O.w, { type: "critical", children: e.message }),
              });
    }
    renderBillingAddressSection() {
        let { billingAddress: e } = this.state,
            { updateError: t, paymentSource: n } = this.props,
            i = (0, dW.g)(n);
        return (0, x.jsxs)("div", {
            className: d4.yV,
            children: [
                (0, x.jsx)(V.E, {
                    className: d4.bV,
                    variant: "text-sm/normal",
                    children: _.intl.string(_.t["50Auo2"]),
                }),
                (0, x.jsx)(dQ.Ay, {
                    ...e,
                    mode: dQ.Ay.Modes.EDIT,
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
        return (0, x.jsxs)("div", {
            className: d4.yV,
            children: [
                (0, x.jsx)(V.E, { className: d4.bV, variant: "text-sm/normal", children: _.intl.string(_.t.Fo2YP7) }),
                (0, x.jsx)(d3, {
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
        return (0, x.jsx)("div", {
            className: d4.AU,
            children: (0, x.jsxs)(L.B, {
                direction: "horizontal",
                justify: "space-between",
                children: [
                    (0, x.jsx)(rT.e, {
                        children: (0, x.jsxs)("div", {
                            className: d4.lH,
                            children: [
                                n
                                    ? (0, x.jsx)(e1.m, {
                                          text: _.intl.string(_.t["v6/z28"]),
                                          children: (0, x.jsx)("div", { "aria-hidden": !0, className: d4.dm }),
                                      })
                                    : null,
                                (0, x.jsx)(eA.$, {
                                    type: "button",
                                    disabled: n || e,
                                    loading: t,
                                    onClick: this.handleDelete,
                                    variant: "critical-secondary",
                                    size: dH.Fr ? "sm" : "md",
                                    text: dH.Fr ? _.intl.string(_.t.oyYWHE) : _.intl.string(_.t.yk5qfb),
                                }),
                            ],
                        }),
                    }),
                    (0, x.jsxs)(rT.e, {
                        children: [
                            (0, x.jsx)(eA.$, {
                                type: "button",
                                disabled: e || t,
                                onClick: this.handleCancel,
                                variant: "secondary",
                                size: dH.Fr ? "sm" : "md",
                                text: _.intl.string(_.t["ETE/oC"]),
                            }),
                            (0, x.jsx)(eA.$, {
                                loading: e,
                                disabled: !i || t || !l,
                                type: "submit",
                                variant: "active",
                                size: dH.Fr ? "sm" : "md",
                                text: _.intl.string(_.t["R3BPH+"]),
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
            a = e instanceof dF.SJ;
        return (0, x.jsx)(er.Z, {
            editable: !0,
            className: eB()(d4.Nr, i),
            children: (0, x.jsxs)("form", {
                onSubmit: this.handleSubmit,
                noValidate: !0,
                children: [
                    this.renderError(),
                    (0, x.jsxs)("div", {
                        className: d4.__invalid_paymentSection,
                        children: [
                            (0, x.jsx)(d8.A, {
                                paymentSource: e,
                                isDefault: t,
                                isForSubscription: l,
                                locale: n,
                                showLabels: !0,
                                showPaymentSourceIcon: !0,
                            }),
                            e.invalid
                                ? (0, x.jsx)("div", { className: d4.Um, children: _.intl.string(_.t["3R0U0b"]) })
                                : null,
                            (0, x.jsx)("div", {
                                className: d4.Sv,
                                children: a
                                    ? _.intl.format(_.t.w9WkBl, { paypalURL: "https://www.paypal.com" })
                                    : _.intl.string(_.t.VXndyr),
                            }),
                        ],
                    }),
                    this.renderCardExpirationSection(),
                    this.renderBillingAddressSection(),
                    (0, x.jsx)("div", {
                        className: d4.D5,
                        children: (0, x.jsx)(dK.S, {
                            value: d9,
                            checked: s,
                            onChange: (e) => this.handleFieldChange(e, d9),
                            label: _.intl.string(_.t.nag9Og),
                            labelType: "secondary",
                        }),
                    }),
                    (0, x.jsx)(nR.c, {}),
                    this.renderActions(),
                ],
            }),
        });
    }
}
let d6 = R.Ay.connectStores([dZ.A], () => ({ updateError: dZ.A.editSourceError, removeError: dZ.A.removeSourceError }))(
    d7,
);
var ue = n(95322);
class ut extends f.PureComponent {
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
            ? (0, x.jsx)(d6, {
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
            : (0, x.jsxs)(x.Fragment, {
                  children: [
                      i ? null : (0, x.jsx)(nR.c, { className: ue.__invalid_sourceDivider }),
                      (0, x.jsxs)("div", {
                          className: ue.Yb,
                          children: [
                              (0, x.jsx)(d8.A, {
                                  paymentSource: e,
                                  isDefault: t,
                                  isForSubscription: l,
                                  locale: s,
                                  showSubtext: !0,
                                  showLabels: !0,
                                  showPaymentSourceIcon: !0,
                              }),
                              (0, x.jsx)(eA.$, {
                                  variant: "secondary",
                                  onClick: this.handleEditClick,
                                  size: "sm",
                                  text: _.intl.string(_.t.bt75uw),
                              }),
                          ],
                      }),
                  ],
              });
    }
}
let un = f.memo(function (e) {
    let { paymentSource: t, hideDivider: n, isForSubscription: i, locale: l, onRedeemClick: s } = e,
        [a, r] = f.useState(null),
        o = (0, R.bG)([t3.default], () => t3.default.getCurrentUser()?.storeCountry?.country ?? null);
    return (
        f.useEffect(() => {
            void 0 === t
                ? r({ amount: 0, currency: null != o ? (0, dk.TW)(`-${o}`) : (0, oP.Rr)() })
                : dw.YP(t.id).then((e) => {
                      r(e);
                  });
        }, [t, o]),
        (0, x.jsxs)(x.Fragment, {
            children: [
                n ? null : (0, x.jsx)(nR.c, { className: ue.__invalid_sourceDivider }),
                (0, x.jsxs)("div", {
                    className: ue.Yb,
                    children: [
                        void 0 !== t
                            ? (0, x.jsx)(d8.A, {
                                  paymentSource: t,
                                  isDefault: !1,
                                  isForSubscription: i,
                                  locale: l,
                                  showSubtext: !1,
                                  showLabels: !1,
                                  showPaymentSourceIcon: !0,
                              })
                            : (0, x.jsx)(V.E, { variant: "text-sm/medium", children: _.intl.string(_.t["6EEgNt"]) }),
                        (0, x.jsxs)("div", {
                            className: ue.zy,
                            children: [
                                (0, x.jsx)("div", {
                                    className: ue.Tq,
                                    children:
                                        null == a
                                            ? (0, x.jsx)(dU.y, { type: dU.y.Type.SPINNING_CIRCLE })
                                            : (0, x.jsx)(V.E, {
                                                  variant: "text-sm/medium",
                                                  children: (() => {
                                                      let { amount: e, currency: t } = a ?? {},
                                                          n = t ?? (0, oP.Rr)(),
                                                          i = String(n).toUpperCase(),
                                                          l = (0, dz.$g)(e ?? 0, n);
                                                      return `${i} ${l}`;
                                                  })(),
                                              }),
                                }),
                                (0, x.jsx)(eA.$, {
                                    variant: "secondary",
                                    onClick: s,
                                    size: "sm",
                                    text: _.intl.string(_.t.H2hHyf),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
class ui extends f.PureComponent {
    state = { editingPayment: null };
    handleEditClick = async (e) => {
        try {
            await dw.Gr(e), this.setState({ editingPayment: e });
        } catch (e) {}
    };
    handleCancel = () => {
        this.setState({ editingPayment: null });
    };
    handleDelete = async (e) => {
        try {
            await dw.JQ(e), this.setState({ editingPayment: null });
        } catch (e) {}
    };
    handleSubmit = async (e, t) => {
        if (null != e)
            try {
                await dw.Ps(e, t), this.setState({ editingPayment: null });
            } catch (e) {}
    };
    handlePaymentSourceAdded = async (e) => {
        await (0, dX.c_)(e.id);
    };
    handleAddPaymentMethod = () => {
        (0, N.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 362111));
                return (t) => (0, x.jsx)(e, { ...t, onAddPaymentSource: this.handlePaymentSourceAdded });
            },
            {
                onCloseCallback: () => {
                    (0, dV.ET)();
                },
                onCloseRequest: q.tEg,
            },
        );
    };
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, x.jsxs)("div", {
            className: ue.qr,
            children: [
                0 === Object.keys(e).length
                    ? (0, x.jsxs)("div", {
                          className: ue.z8,
                          children: [
                              (0, x.jsx)(V.E, { variant: "text-sm/normal", children: _.intl.string(_.t.aRHpAB) }),
                              (0, x.jsx)("div", { className: ue.Sv, children: _.intl.string(_.t.o9bOIl) }),
                          ],
                      })
                    : null,
                (0, x.jsx)(eA.$, { onClick: this.handleAddPaymentMethod, text: _.intl.string(_.t.CpOiEO) }),
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
            d = eL()
                .values(i)
                .sort((e, t) => (e.id === n ? -1 : t.id === n ? 1 : dY.default.compare(e.id, t.id))),
            u = d.filter((e) => !(e instanceof dF.LQ)),
            c = d.filter((e) => e instanceof dF.LQ),
            g = this.state.editingPayment,
            m = u.findIndex((e) => e.id === g),
            h = u.map((e, t) =>
                (0, x.jsx)(
                    ut,
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
                          (0, x.jsx)(
                              un,
                              {
                                  paymentSource: e,
                                  hideDivider: 0 === u.length || m === u.length - 1,
                                  isForSubscription: e.id === r,
                                  locale: l,
                                  onRedeemClick: () =>
                                      (0, dB.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page" }),
                              },
                              e.id,
                          ),
                      )
                    : (0, x.jsx)(un, {
                          hideDivider: 0 === u.length || m === u.length - 1,
                          isForSubscription: !1,
                          locale: l,
                          onRedeemClick: () =>
                              (0, dB.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page" }),
                      })),
            (0, x.jsxs)(x.Fragment, {
                children: [
                    t
                        ? (0, x.jsxs)(x.Fragment, {
                              children: [
                                  (0, x.jsxs)(eh.D, {
                                      variant: "heading-lg/semibold",
                                      children: [
                                          (0, x.jsx)(dM.X, { size: "sm", className: ue.hz }),
                                          " ",
                                          _.intl.string(_.t.W26xGQ),
                                      ],
                                  }),
                                  (0, x.jsx)(V.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      children: _.intl.string(_.t.h6V3uK),
                                  }),
                              ],
                          })
                        : null,
                    h,
                    o && e,
                    m !== u.length - 1 || (o && c.length > 0) ? (0, x.jsx)(nR.c, {}) : null,
                    this.renderFooter(),
                ],
            })
        );
    }
}
var ul = n(459357),
    us = n(295405),
    ua = n(166403),
    ur = n(773669),
    uo = n(243156);
let ud = (0, d.E2)(u.X.BILLING_PAYMENT_METHODS, {
        Component: function (e) {
            let { showHeader: t = !1 } = e,
                n = (0, R.bG)([dZ.A], () => dZ.A.isSyncing),
                i = (0, R.bG)([us.A], () => us.A.paymentSources),
                l = (0, R.bG)([us.A], () => us.A.defaultPaymentSourceId),
                s = (0, R.bG)([ur.default], () => ur.default.locale),
                a = (0, R.bG)([ua.A], () => ua.A.getPremiumTypeSubscription()),
                r = (0, R.bG)([dZ.A], () => dZ.A.isRemovingPaymentSource),
                o = (0, R.bG)([dZ.A], () => dZ.A.isUpdatingPaymentSource),
                { enabled: d } = (0, ul.c)({ location: "UserSettingsBilling" });
            return (f.useEffect(() => {
                dw.$o(), dw.hP();
            }, []),
            n && 0 === Object.keys(i).length)
                ? (0, x.jsx)("div", { className: uo.o, children: (0, x.jsx)(dU.y, {}) })
                : (0, x.jsx)(ui, {
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
        useSearchTerms: () => [_.intl.string(_.t.W26xGQ)],
    }),
    uu = (0, d.zZ)(u.X.BILLING_PAYMENT_METHODS_CATEGORY, {
        useTitle: () => _.intl.string(_.t.W26xGQ),
        icon: dM.X,
        useSubtitle: () => _.intl.string(_.t.h6V3uK),
        buildLayout: () => [ud],
    });
var uc = n(546605),
    ug = n(500380),
    u_ = n(518977),
    um = n(223784);
function uh(e) {
    let { country: t, countryName: n, ...i } = e,
        { onClose: l } = i,
        s = f.useCallback(
            () => (null == t ? null : (0, x.jsx)("img", { alt: "", className: um.b, src: (0, ug.t)(t) })),
            [t],
        ),
        a = null != n && null != t ? { text: n, leadingIcon: s } : (n ?? void 0),
        r = f.useCallback(() => {
            window.open("https://support.discord.com/hc/articles/39799791912087", "_blank"), l();
        }, [l]);
    return (0, x.jsx)(sP.Modal, {
        ...i,
        title: _.intl.string(_.t.PuB1W7),
        subtitle: a,
        actions: [{ text: _.intl.string(_.t.PuB1W7), onClick: r, variant: "primary" }],
        children: (0, x.jsx)(V.E, {
            variant: "text-md/normal",
            color: "text-muted",
            children: _.intl.string(_.t["21skUa"]),
        }),
    });
}
var uA = n(949677);
let up = (0, d.E2)(u.X.BILLING_STORE_COUNTRY, {
        Component: function () {
            let e = (0, R.bG)([t3.default], () => t3.default.getCurrentUser()?.storeCountry),
                t = f.useCallback(() => {
                    var t;
                    let n;
                    (n = null != (t = e?.country ?? null) ? (0, u_.Gw)(t) : null),
                        (0, N.openModal)((e) => (0, x.jsx)(uh, { ...e, country: t, countryName: n }));
                }, [e?.country]);
            if (null == e) return null;
            let n = (0, u_.Gw)(e.country),
                i = null != e.setAt ? _.intl.format(_.t.ZkWzXG, { date: new Date(e.setAt) }) : null;
            return (0, x.jsxs)("div", {
                className: uA.OO,
                children: [
                    (0, x.jsxs)("div", {
                        className: uA.wI,
                        children: [
                            (0, x.jsx)("div", {
                                className: uA.Gh,
                                children: (0, x.jsx)("img", { alt: "", className: uA.MY, src: (0, ug.t)(e.country) }),
                            }),
                            (0, x.jsxs)("div", {
                                className: uA.d0,
                                children: [
                                    (0, x.jsx)(V.E, { variant: "text-md/semibold", children: n }),
                                    null != i
                                        ? (0, x.jsx)(V.E, {
                                              variant: "text-sm/normal",
                                              color: "text-subtle",
                                              children: i,
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                    (0, x.jsx)(eA.$, { variant: "secondary", size: "sm", text: _.intl.string(_.t.PuB1W7), onClick: t }),
                ],
            });
        },
        useSearchTerms: () => [_.intl.string(_.t["3pIjBH"])],
    }),
    uE = (0, d.zZ)(u.X.BILLING_STORE_COUNTRY_CATEGORY, {
        usePredicate: () => {
            let e, t;
            return (
                (e = (0, uc.vg)("StoreCountrySetting")),
                (t = (0, R.bG)([t3.default], () => t3.default.getCurrentUser()?.storeCountry != null)),
                e && t
            );
        },
        useTitle: () => _.intl.string(_.t["3pIjBH"]),
        buildLayout: () => [up],
    });
var uT = n(549363),
    uS = n(545075);
let ux = (0, d.E2)(u.X.BILLING_TRANSACTION_HISTORY, {
        Component: function () {
            let e = (0, R.bG)([ur.default], () => ur.default.locale);
            return (0, x.jsxs)(x.Fragment, { children: [(0, x.jsx)(uS.kb, {}), (0, x.jsx)(uT.A, { locale: e })] });
        },
        useSearchTerms: () => [_.intl.string(_.t.obLrcK)],
    }),
    uf = (0, d.zZ)(u.X.BILLING_TRANSACTION_HISTORY_CATEGORY, {
        useTitle: () => _.intl.string(_.t.obLrcK),
        buildLayout: () => [ux],
    }),
    ub = (0, d.t_)(u.X.BILLING_PANEL, {
        useTitle: () => _.intl.string(_.t.oeUm2s),
        buildLayout: () => [uu, uE, uf],
        useObscuredNotice: dP.L,
    }),
    uN = (0, d.i4)(u.X.BILLING_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(_.t.oeUm2s),
        icon: dG.B,
        buildLayout: () => [ub],
    });
var uC = n(597770),
    uI = n(35587),
    uv = n(86379),
    uy = n(532446),
    uj = n(869038),
    uO = n(499454),
    uR = n(45938);
class uL extends f.Component {
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
                    await (0, dB.Qp)(n),
                        (0, dB.HF)({ initialCode: n, withRedemptionSuccessModal: !0 }),
                        this.setState({ codeInput: "" });
                    return;
                } catch {}
            let e = (0, uR.Vd)(t);
            if (null == e) return void this.setState({ hasError: !0 });
            let i = await uj.A.resolveGiftCode(e);
            if (null != i && null != i.giftCode.promotion)
                throw (this.setState({ isPromoCode: !0 }), Error("Cannnot redeem promotion code as gift"));
            Y.default.track(q.HAw.OPEN_MODAL, {
                type: "gift_accept",
                location: {
                    ...this.analyticsLocation,
                    section: q.JJy.LIBRARY_INVENTORY_CODE_REDEMPTION,
                    object: q.ZSU.BUTTON_CTA,
                },
            }),
                (0, uO.h)({ processedCode: e }),
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
        return (0, x.jsx)(nr.n, {
            label: _.intl.string(_.t["il+VCo"]),
            children: (0, x.jsx)("form", {
                onSubmit: this.handleSubmit,
                children: (0, x.jsxs)(uy.M, {
                    children: [
                        (0, x.jsx)(sM.k, {
                            label: _.intl.string(_.t.SeKIoS),
                            type: e ? "password" : "text",
                            value: t,
                            onChange: this.handleChange,
                            placeholder: "WUMP-AAAAA-BBBBB-CCCCC",
                            error: !l && i ? _.intl.string(_.t.Y11a2u) : null,
                            helperText: l
                                ? _.intl.format(_.t.gPt3PE, {
                                      promoLink: () => {
                                          window.open(`https://discord.com/billing/promotions/${t}`);
                                      },
                                  })
                                : null,
                            fullWidth: !0,
                        }),
                        (0, x.jsx)(eA.$, {
                            variant: "primary",
                            text: _.intl.string(_.t.KIpp7M),
                            type: "submit",
                            loading: n,
                        }),
                    ],
                }),
            }),
        });
    }
}
let uD = (0, d.E2)(u.X.GIFT_CODE_REDEMPTION_SETTING, {
    Component: function () {
        let { enabled: e } = (0, ul.c)({ location: "UserSettingsBilling" }),
            t = f.useContext(Y.AnalyticsContext),
            n = (0, R.bG)([eN.A], () => eN.A.enabled);
        return (0, x.jsx)(uL, { analyticsContext: t, obscureInput: n, acceptGiftCardRedemption: e });
    },
    usePredicate: () => !(0, uv.Hp)(),
    useSearchTerms: () => [_.intl.string(_.t["jcSP+g"]), _.intl.string(_.t["il+VCo"])],
});
var uG = n(725570),
    uP = n(707554),
    uM = n(339048),
    uU = n(736653),
    uk = n(46054);
let uV = aC().duration(30, "days");
var uw = n(264779),
    uB = n(416052),
    uF = n(961302);
function uz(e) {
    let { onClose: t, transitionState: n } = e;
    return (0, x.jsx)(sP.Modal, {
        title: "",
        size: "md",
        input: (0, x.jsx)("div", { className: uF.aR }),
        onClose: async () => await t(),
        actions: [{ text: _.intl.string(_.t.cpT0Cq), variant: "primary", onClick: t }],
        transitionState: n,
        children: (0, x.jsxs)("div", {
            className: uF.t4,
            children: [
                (0, x.jsx)(eh.D, { variant: "heading-xl/semibold", children: _.intl.string(_.t.iufib1) }),
                (0, x.jsx)(V.E, { variant: "text-md/normal", className: uF.G3, children: _.intl.string(_.t.eAn6z2) }),
            ],
        }),
    });
}
let uX = function (e) {
    let { onClose: t, onClaim: n, code: i, outboundPromotion: l, transitionState: s } = e,
        [a, r] = f.useState(null),
        o = (0, lx.GV)(),
        { analyticsLocations: d } = (0, iU.Ay)(ek.A.USER_SETTINGS_GIFT_INVENTORY);
    return (f.useEffect(() => {
        null == i &&
            (0, uw.kd)({ promotionId: l.id, analyticsLocations: d })
                .then((e) => n(e))
                .catch((e) => r(e?.body?.code));
    }, [i, l.id, n, d]),
    null != a)
        ? (0, x.jsx)(uz, { onClose: t, transitionState: s })
        : null == i
          ? (0, x.jsx)(dU.y, { className: uF.Lq })
          : (0, x.jsx)(sP.Modal, {
                title: "",
                size: "md",
                onClose: async () => await t(),
                input: (0, x.jsxs)("div", {
                    className: uF.N1,
                    children: [
                        (0, x.jsx)("div", { className: uF.Qw }),
                        (0, x.jsx)(eh.D, { variant: "heading-xl/semibold", children: _.intl.string(_.t["23BfZh"]) }),
                        (0, x.jsx)(V.E, {
                            variant: "text-md/normal",
                            className: uF.G3,
                            children: l.outboundRedemptionModalBody,
                        }),
                    ],
                }),
                actions: [
                    { text: _.intl.string(_.t.TulDPl), variant: "secondary", onClick: async () => await t() },
                    {
                        text: _.intl.string(_.t["+zx47d"]),
                        variant: "primary",
                        onClick: () => {
                            let e = (0, uw.kc)(i, l);
                            window.open(e, "_blank");
                        },
                    },
                ],
                transitionState: s,
                "aria-label": o,
                children: (0, x.jsxs)("div", {
                    children: [
                        (0, x.jsx)(nR.c, { className: uF.M5 }),
                        (0, x.jsx)(lR.D, {
                            label: _.intl.string(_.t.s9LFQh),
                            helperText: _.intl.string(_.t["F+nFTZ"]),
                            children: (0, x.jsx)(uB.A, {
                                value: i,
                                buttonColor: rp.$n.Colors.BRAND,
                                buttonLook: rp.$n.Looks.FILLED,
                                delay: 1e3,
                            }),
                        }),
                    ],
                }),
            });
};
var uY = n(725807),
    uH = n(212168),
    uK = n(469778),
    uW = n(109802),
    uZ = n(503787);
let uQ = (e) => {
        let { children: t, className: n, splashArtURL: i } = e;
        return (0, x.jsxs)(sw.A, {
            className: eB()(uZ.wx, n),
            align: sw.A.Align.CENTER,
            children: [
                (0, x.jsx)("div", { className: uZ.Bn, style: null != i ? { backgroundImage: `url(${i})` } : void 0 }),
                t,
            ],
        });
    },
    uq = (e) => {
        let { children: t, className: n } = e;
        return (0, x.jsx)("div", { className: eB()(uZ.rf, n), children: t });
    };
class uJ extends f.PureComponent {
    static Header = uQ;
    static Body = uq;
    render() {
        let { children: e, className: t, onMouseEnter: n, onMouseLeave: i } = this.props;
        return (0, x.jsx)("div", { className: eB()(uZ.Nr, t), onMouseEnter: n, onMouseLeave: i, children: e });
    }
}
var u$ = n(75825),
    u0 = n(871123),
    u1 = n(366523),
    u2 = n(495544),
    u5 = n(30793),
    u3 = n(97352),
    u8 = n(67480),
    u4 = n(147925),
    u9 = n(957565),
    u7 = n(615396),
    u6 = n(233385);
class ce extends f.PureComponent {
    _copyModeTimeout = new oi.Ep();
    state = { copyMode: uW.q.DEFAULT };
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case uW.q.SUCCESS:
                return _.intl.string(_.t.XVvPjU);
            case uW.q.ERROR:
                return _.intl.string(_.t.i4GM3L);
            default:
                return _.intl.string(_.t.OpuAlK);
        }
    }
    handleRevoke(e) {
        uj.A.revokeGiftCode(e);
    }
    handleCopy = (e) => {
        let { giftCode: t, sku: n } = this.props;
        (0, uR.AK)(t, n),
            (0, u9.C)(
                e,
                () => this.setState({ copyMode: uW.q.SUCCESS }),
                () => this.setState({ copyMode: uW.q.ERROR }),
            ),
            this._copyModeTimeout.start(1e3, () => {
                this.setState({ copyMode: uW.q.DEFAULT });
            });
    };
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: n } = this.state;
        return (0, x.jsxs)(sw.A, {
            direction: sw.A.Direction.VERTICAL,
            className: u6.Gj,
            children: [
                (0, x.jsx)(uW.e, {
                    className: u6.ph,
                    value: (0, uR.Zq)(t.code),
                    text: this.copyButtonText,
                    mode: n,
                    supportsCopy: u9.p5,
                    hideMessage: e ? _.intl.string(_.t["0RLn47"]) : null,
                    onCopy: this.handleCopy,
                    buttonColor: rp.XD.BRAND,
                    buttonLook: rp.pR.FILLED,
                }),
                (0, x.jsxs)("div", {
                    className: u6.KB,
                    children: [
                        null != t.expiresAt
                            ? (0, x.jsxs)(f.Fragment, {
                                  children: [
                                      _.intl.format(_.t.ltVZcJ, { hours: t.expiresAt.diff(aC()(), "h") }),
                                      " —\xa0",
                                  ],
                              })
                            : null,
                        (0, x.jsx)(k.D, {
                            tag: "a",
                            onClick: () => this.handleRevoke(t.code),
                            children: _.intl.string(_.t.v6Yazx),
                        }),
                    ],
                }),
            ],
        });
    }
}
class ct extends f.PureComponent {
    _loadedAt = null;
    state = { isOpen: !1, isCreating: !1, isHovered: !1 };
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    handleGenerateGiftCode = async (e) => {
        e.stopPropagation();
        let { skuId: t, subscriptionPlanId: n, giftStyle: i } = this.props;
        this.setState({ isCreating: !0 }),
            await uj.A.createGiftCode(t, n, i),
            this.setState({ isCreating: !1, isOpen: !0 });
    };
    handleToggleOpen = () => {
        let { skuId: e, subscriptionPlanId: t, loadedAt: n } = this.props,
            i = !this.state.isOpen;
        (null == n || null == this._loadedAt || n < this._loadedAt) && i && uj.A.fetchUserGiftCodesForSKU(e, t),
            this.setState({ isOpen: !this.state.isOpen });
    };
    renderGiftIcon() {
        let { sku: e, giftStyle: t, application: n } = this.props;
        return (0, u0.bF)(e)
            ? (0, x.jsx)(u1.e, { shape: "square", sku: e, containerClassName: u6.ez })
            : null != t
              ? (0, x.jsx)(u$.A, { giftStyle: t, className: u6.ez, shouldAnimate: this.state.isHovered })
              : (0, x.jsx)(e7.A, { game: n, size: e7.M.MEDIUM, skuId: e.id });
    }
    renderSubtitle() {
        let { sku: e, entitlements: t, application: n } = this.props;
        return (0, u0.bF)(e)
            ? (0, x.jsxs)("div", {
                  className: eB()(u6.Oc, u6.ic),
                  children: [
                      (0, x.jsx)(e7.A, { game: n, size: e7.M.XSMALL, skuId: e.id, className: u6._u }),
                      _.intl.format(_.t["6plpZi"], { applicationName: n.name, copies: t.length }),
                  ],
              })
            : (0, x.jsx)("div", { className: u6.Oc, children: _.intl.format(_.t.zMcvcA, { copies: t.length }) });
    }
    renderTitle() {
        let e,
            { sku: t, subscriptionPlan: n, giftCodeBatchId: i } = this.props;
        return (
            (e =
                i === lb.FB
                    ? _.intl.string(_.t.odsU6W)
                    : i === lb.Bu && null != n
                      ? _.intl.formatToPlainString(n.interval === lb.WT.MONTH ? _.t.uZjpiJ : _.t.bJW1EA, {
                            skuName: t.name,
                            intervalCount: n.intervalCount,
                        })
                      : null == n
                        ? t.name
                        : _.intl.formatToPlainString(n.interval === lb.WT.MONTH ? _.t.rCJvqo : _.t.Vd3Iu8, {
                              skuName: t.name,
                              intervalCount: n.intervalCount,
                          })),
            (0, x.jsx)("div", { className: u6.mO, children: e })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, x.jsxs)(sw.A, {
            justify: sw.A.Justify.BETWEEN,
            align: sw.A.Align.CENTER,
            className: u6.pe,
            children: [
                (0, x.jsx)(V.E, { variant: "text-md/normal", children: _.intl.string(_.t.lELyPj) }),
                (0, x.jsx)(eA.$, {
                    variant: "primary",
                    size: "sm",
                    text: _.intl.string(_.t.Q3Qguo),
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
        return (0, x.jsxs)(uJ, {
            className: i,
            children: [
                (0, x.jsx)(k.D, {
                    onClick: this.handleToggleOpen,
                    className: u6.Nr,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, x.jsx)(uJ.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, x.jsxs)("div", {
                            className: u6.MY,
                            children: [
                                (0, x.jsxs)(sw.A, {
                                    align: sw.A.Align.CENTER,
                                    children: [
                                        this.renderGiftIcon(),
                                        (0, x.jsxs)("div", {
                                            className: u6.TK,
                                            children: [this.renderTitle(), this.renderSubtitle()],
                                        }),
                                    ],
                                }),
                                (0, x.jsx)(u4.A, {
                                    direction: r ? u4.A.Directions.UP : u4.A.Directions.DOWN,
                                    className: u6.eO,
                                }),
                            ],
                        }),
                    }),
                }),
                r
                    ? (0, x.jsx)(uJ.Body, {
                          children: s
                              ? (0, x.jsx)(dU.y, { className: u6.u1 })
                              : (0, x.jsxs)(f.Fragment, {
                                    children: [
                                        n.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        n.map((e) => (0, x.jsx)(ce, { giftCode: e, sku: l, hideCode: a }, e.code)),
                                    ],
                                }),
                      })
                    : null,
            ],
        });
    }
}
let cn = R.Ay.connectStores([u8.A, eN.A, u5.A, eZ.A, u3.A, u2.default], (e) => {
    let { skuId: t, subscriptionPlanId: n, giftStyle: i } = e,
        l = u8.A.get(t);
    if (null == l) throw Error("SKU was unavailable while rendering gift.");
    let s = u5.A.getForGifterSKUAndPlan(u2.default.getId(), t, n)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === i);
    return {
        sku: l,
        hideCodes: eN.A.enabled,
        isFetching: u5.A.getUserGiftCodesFetchingForSKUAndPlan(t, n),
        loadedAt: u5.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, n),
        application: eZ.A.getApplication(l.applicationId),
        subscriptionPlan: null != n ? (0, u7.c9)(n) : null,
        giftCodes: s,
    };
})(ct);
var ci = n(479913);
function cl(e) {
    let t,
        { outboundPromotion: n, code: i, addClaimedOutboundPromotionCode: l, disabled: s } = e,
        [a, r] = f.useState(!1),
        [o, d] = f.useState(!1),
        u = () => r((e) => !e),
        c = (0, uU.Ay)(),
        g = (0, uw.WD)(n.id, c),
        m = null != i,
        h = f.useMemo(
            () =>
                (0, aI.i$)(
                    m
                        ? null != n.outboundRedemptionEndDate
                            ? aC()(n.outboundRedemptionEndDate)
                            : aC()(n.endDate).add(uV)
                        : aC()(n.endDate),
                    "LL",
                ),
            [n, m],
        );
    m && a
        ? (t = _.intl.format(_.t.pkxVx6, { endDate: h, onClickDetails: u }))
        : m && !a
          ? (t = _.intl.format(_.t["4sFeob"], { endDate: h, onClickDetails: u }))
          : !m && a
            ? (t = _.intl.format(_.t["RBnE+l"], { endDate: h, onClickDetails: u }))
            : m || a || (t = _.intl.format(_.t["57+7Qn"], { endDate: h, onClickDetails: u }));
    let A = m ? _.intl.string(_.t["2cHUti"]) : _.intl.string(_.t.O13yhz),
        p = f.useCallback(() => d(!1), []),
        { outboundTitle: E, outboundTermsAndConditions: T } = n;
    return (0, x.jsxs)(x.Fragment, {
        children: [
            (0, x.jsxs)("div", {
                className: eB()(ci.uI, ci.AX),
                children: [
                    (0, x.jsxs)("div", {
                        className: ci.gE,
                        children: [
                            (0, x.jsxs)("div", {
                                className: ci.At,
                                children: [
                                    (0, x.jsx)("div", {
                                        className: ci.$G,
                                        children: (0, x.jsx)("img", { alt: "", src: g, className: ci.IJ }),
                                    }),
                                    (0, x.jsxs)("div", {
                                        children: [
                                            (0, x.jsx)(eh.D, { variant: "heading-md/semibold", children: E }),
                                            (0, x.jsx)(V.E, {
                                                variant: "text-sm/normal",
                                                color: "text-default",
                                                className: ci.__invalid_promotionText,
                                                children: t,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            !s && (0, x.jsx)(eA.$, { text: A, onClick: () => d(!0), disabled: s, size: "sm" }),
                        ],
                    }),
                    a &&
                        (0, x.jsx)(V.E, {
                            className: ci.GL,
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: uk.A.parse(T, !1, { allowLinks: !0 }),
                        }),
                ],
            }),
            o &&
                (0, x.jsx)(uG.aF, {
                    renderModal: (e) => (0, x.jsx)(uX, { ...e, onClose: p, onClaim: l, code: i, outboundPromotion: n }),
                    onCloseRequest: p,
                }),
        ],
    });
}
let cs = (0, d.E2)(u.X.GIFT_INVENTORY_LIST_SETTING, {
        Component: function () {
            let e = (0, R.yK)([uK.A], () => uK.A.getGiftable()),
                [t, n] = eL().partition(e, (e) => {
                    let { giftCodeBatchId: t } = e;
                    return null == t;
                }),
                i = (0, R.bG)([t3.default], () =>
                    oP.Ay.isPremiumExactly(t3.default.getCurrentUser(), lb.PremiumTypes.TIER_2),
                ),
                l = (0, R.bG)([t3.default], () => !oP.Ay.isPremium(t3.default.getCurrentUser())),
                s = eL().groupBy(t, (e) => (0, uR.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
                [a, r] = f.useState(!1);
            f.useEffect(() => {
                i8.h.wait(() => {
                    (0, uM.XJ)().then(() => r(!0));
                });
            }, []);
            let {
                    promotionsLoaded: o,
                    activeOutboundPromotions: d,
                    claimedEndedOutboundPromotions: c,
                    claimedOutboundPromotionCodeMap: g,
                    addClaimedOutboundPromotionCode: m,
                } = (0, uI.y7)(),
                h = d.length + c.length > 0,
                A = l && h;
            return a && o
                ? (0, x.jsxs)(x.Fragment, {
                      children: [
                          (function () {
                              let e = n.find((e) => e.giftCodeBatchId === lb.FB && !e.consumed),
                                  t = n.filter((e) => e.giftCodeBatchId === lb.Bu && !e.consumed) ?? [],
                                  [l, s] = eL().partition(t, (e) => {
                                      let { subscriptionPlanId: t } = e;
                                      return t === lb.gD.PREMIUM_YEAR_TIER_2;
                                  }),
                                  a = (0, x.jsx)(eh.D, {
                                      variant: "heading-md/semibold",
                                      children: h ? _.intl.string(_.t.wFsj3B) : void 0,
                                  }),
                                  r = A
                                      ? (0, x.jsxs)("div", {
                                            className: ci.uo,
                                            children: [
                                                (0, x.jsx)(oI.t, {
                                                    size: "md",
                                                    color: B.A.colors
                                                        .REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                                                    className: ci.PC,
                                                }),
                                                (0, x.jsx)(V.E, {
                                                    variant: "text-md/normal",
                                                    className: ci.Qw,
                                                    children: _.intl.format(_.t.G4fwxK, {
                                                        onClick: () => {
                                                            (0, lE.default)(), (0, lL.pX)(q.BVt.APPLICATION_STORE);
                                                        },
                                                    }),
                                                }),
                                                (0, x.jsx)(uY.A, {
                                                    showGradient: !0,
                                                    className: ci.aA,
                                                    subscriptionTier: lb.pe.TIER_2,
                                                    textOptions: { textOverride: _.intl.string(_.t.mr4K7D) },
                                                }),
                                            ],
                                        })
                                      : null;
                              return (0, x.jsxs)("div", {
                                  children: [
                                      a,
                                      h ? (0, x.jsx)(nR.c, { className: ci.yF }) : null,
                                      (0, x.jsx)(uH.A, {
                                          className: ci.Yj,
                                          isShown: A,
                                          type: uH.i.PREMIUM,
                                          hasBackground: !0,
                                          children: (0, x.jsxs)("div", {
                                              className: eB()({ [ci.sW]: !A }),
                                              children: [
                                                  r,
                                                  c.map((e) => {
                                                      let { code: t, promotion: n } = e;
                                                      return (0, x.jsx)(
                                                          cl,
                                                          {
                                                              outboundPromotion: n,
                                                              code: t,
                                                              addClaimedOutboundPromotionCode: m,
                                                              disabled: !i,
                                                          },
                                                          n.id,
                                                      );
                                                  }),
                                                  d.map((e) =>
                                                      (0, x.jsx)(
                                                          cl,
                                                          {
                                                              outboundPromotion: e,
                                                              code: g[e.id],
                                                              addClaimedOutboundPromotionCode: m,
                                                              disabled: !i,
                                                          },
                                                          e.id,
                                                      ),
                                                  ),
                                                  null != e
                                                      ? (0, x.jsx)(
                                                            cn,
                                                            {
                                                                className: ci.uI,
                                                                skuId: e.skuId,
                                                                subscriptionPlanId: e.subscriptionPlanId,
                                                                entitlements: [e],
                                                                giftCodeBatchId: lb.FB,
                                                            },
                                                            (0, uR.Kx)(e.skuId, e.subscriptionPlanId),
                                                        )
                                                      : null,
                                                  l.length > 0
                                                      ? (0, x.jsx)(
                                                            cn,
                                                            {
                                                                className: ci.uI,
                                                                skuId: l[0].skuId,
                                                                subscriptionPlanId: l[0].subscriptionPlanId,
                                                                entitlements: l,
                                                                giftCodeBatchId: lb.Bu,
                                                            },
                                                            (0, uR.Kx)(l[0].skuId, l[0].subscriptionPlanId),
                                                        )
                                                      : null,
                                                  s.length > 0
                                                      ? (0, x.jsx)(
                                                            cn,
                                                            {
                                                                className: ci.uI,
                                                                skuId: s[0].skuId,
                                                                subscriptionPlanId: s[0].subscriptionPlanId,
                                                                entitlements: s,
                                                                giftCodeBatchId: lb.Bu,
                                                            },
                                                            (0, uR.Kx)(s[0].skuId, s[0].subscriptionPlanId),
                                                        )
                                                      : null,
                                              ],
                                          }),
                                      }),
                                  ],
                              });
                          })(),
                          (0, x.jsx)("div", {
                              className: ci.sW,
                              children: (0, x.jsxs)(uP.F, {
                                  component: (0, x.jsx)(eh.D, {
                                      variant: "heading-md/semibold",
                                      children: _.intl.string(_.t["9KeUbY"]),
                                  }),
                                  children: [
                                      (0, x.jsx)(nR.c, { className: ci.yF }),
                                      0 === Object.keys(s).length
                                          ? (0, x.jsxs)("div", {
                                                className: ci.p$,
                                                children: [
                                                    (0, x.jsx)("div", { className: ci.QT }),
                                                    (0, x.jsx)(uP.H, {
                                                        className: ci.ks,
                                                        children: _.intl.string(_.t.B1qgZn),
                                                    }),
                                                    (0, x.jsx)("p", {
                                                        className: ci.WO,
                                                        children: _.intl.format(_.t.HezvJ8, {
                                                            onClick: function () {
                                                                (0, ej.openUserSettings)(u.X.NITRO_PANEL);
                                                            },
                                                        }),
                                                    }),
                                                ],
                                            })
                                          : eL()
                                                .keys(s)
                                                .map((e) => {
                                                    let {
                                                        skuId: t,
                                                        subscriptionPlanId: n,
                                                        giftStyle: i,
                                                    } = (0, uR.X6)(e);
                                                    return (0, x.jsx)(
                                                        cn,
                                                        {
                                                            className: ci.uI,
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
                : (0, x.jsx)(dU.y, { className: ci.Lq });
        },
        usePredicate: () => !(0, uv.Hp)(),
        useSearchTerms: () => [_.intl.string(_.t["jcSP+g"]), _.intl.string(_.t["9KeUbY"])],
    }),
    ca = (0, d.E2)(u.X.GIFT_BLOCKED_PAYMENTS_SETTING, {
        Component: uS.uK,
        usePredicate: () => (0, uv.Hp)(),
        useSearchTerms: () => [_.intl.string(_.t.vwMEHS)],
    }),
    cr = (0, d.zZ)(u.X.GIFT_INVENTORY_CATEGORY, { buildLayout: () => [uD, cs, ca] }),
    co = (0, d.t_)(u.X.GIFT_PANEL, { useTitle: () => _.intl.string(_.t["jcSP+g"]), buildLayout: () => [cr] }),
    cd = (0, d.i4)(u.X.GIFT_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(_.t["jcSP+g"]),
        icon: uC.o,
        usePersistentBadge: function () {
            return f.useMemo(() => ({ badgeType: eb.Xi.COUNT, useCount: () => (0, uI.IO)().length }), []);
        },
        buildLayout: () => [co],
    });
var cu = n(949302),
    cc = n(427541),
    cg = n(422253);
let c_ = (0, d.E2)(u.X.NITRO_SETTING, {
        Component: function () {
            let e = (0, R.bG)([t3.default], () => t3.default.getCurrentUser());
            return (0, oP.YE)(e, lb.PremiumTypes.TIER_2) ? (0, x.jsx)(cg.A, {}) : (0, x.jsx)(cc.A, {});
        },
        useSearchTerms: () => [_.intl.string(_.t.Ipxkog)],
    }),
    cm = (0, d.zZ)(u.X.NITRO_CATEGORY, { buildLayout: () => [c_] }),
    ch = (0, d.t_)(u.X.NITRO_PANEL, {
        useTitle: () => _.intl.string(_.t.Ipxkog),
        useObscuredNotice: dP.L,
        buildLayout: () => [cm],
    }),
    cA = (0, d.i4)(u.X.NITRO_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(_.t.Ipxkog),
        icon: oI.t,
        usePersistentBadge: function (e) {
            return f.useMemo(
                () => ({ badgeType: eb.Xi.STRONGLY_DISCOURAGED_CUSTOM, useCustomBadge: () => (0, cu.e)(e) }),
                [e],
            );
        },
        buildLayout: () => [ch],
    });
var cp = n(104510),
    cE = n(820739),
    cT = n(73825),
    cS = n(160946);
let cx = (0, n(250105).Ay)({
    name: "2026-03-boosting-settings-refresh",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var cf = n(859241),
    cb = n(531260),
    cN = n(369163),
    cC = n(179866),
    cI = n(926268),
    cv = n(106529),
    cy = n(93364);
function cj(e) {
    let { className: t, icon: n, children: i } = e;
    return (0, x.jsxs)("li", {
        className: eB()(cv.Nr, t),
        children: [
            (0, x.jsx)(n, { className: cv.Kk }),
            (0, x.jsx)(V.E, { className: cv.__invalid_description, variant: "text-sm/medium", children: i }),
        ],
    });
}
let cO = function (e) {
    let { cardClassName: t } = e;
    return (0, x.jsxs)("div", {
        className: cv.iE,
        children: [
            (0, x.jsxs)("div", {
                className: cv.Qs,
                children: [
                    (0, x.jsx)(eh.D, {
                        className: cv.R_,
                        color: "always-white",
                        variant: "heading-xxl/bold",
                        children: _.intl.string(_.t.IzKs3o),
                    }),
                    (0, x.jsxs)("ul", {
                        className: cv.kR,
                        children: [
                            (0, x.jsx)(cj, { className: t, icon: cN.v, children: _.intl.string(_.t.TZigSO) }),
                            (0, x.jsx)(cj, {
                                className: t,
                                icon: (e) =>
                                    (0, x.jsx)("img", { className: eB()(e.className, cv.Dp), src: cy, alt: "" }),
                                children: _.intl.string(_.t.hjQuV2),
                            }),
                            (0, x.jsx)(cj, { className: t, icon: cC.i, children: _.intl.string(_.t["2RUcaM"]) }),
                            (0, x.jsx)(cj, { className: t, icon: cI.C, children: _.intl.string(_.t.bJoZKV) }),
                        ],
                    }),
                ],
            }),
            (0, x.jsx)("div", { className: cv.JP }),
        ],
    });
};
var cR = n(834040),
    cL = n(307301),
    cD = n(811227);
let cG = [
        { getQuestion: () => _.intl.string(_.t.C4J8UB), getAnswer: () => _.intl.string(_.t.nhkk6k) },
        {
            getQuestion: () => _.intl.string(_.t.ai4ym2),
            getAnswer: () =>
                _.intl.format(_.t["8zlqlD"], { helpCenterUrl: to.A.getArticleURL(q.MVz.GUILD_BOOSTING_FAQ) }),
        },
        { getQuestion: () => _.intl.string(_.t.kMVGsC), getAnswer: () => _.intl.string(_.t["Vz/SCQ"]) },
        { getQuestion: () => _.intl.string(_.t.kYmXWF), getAnswer: () => _.intl.string(_.t["+OURPp"]) },
        { getQuestion: () => _.intl.string(_.t["LsX/vb"]), getAnswer: () => _.intl.string(_.t["3TeauK"]) },
        { getQuestion: () => _.intl.string(_.t.fRlnXU), getAnswer: () => _.intl.string(_.t.bTRacj) },
        { getQuestion: () => _.intl.string(_.t["8Mu5Q9"]), getAnswer: () => _.intl.string(_.t["2T5iPo"]) },
        { getQuestion: () => _.intl.string(_.t["6EN+TZ"]), getAnswer: () => _.intl.string(_.t.NZax1u) },
        { getQuestion: () => _.intl.string(_.t.f5B4EW), getAnswer: () => _.intl.string(_.t.Aje8Pb) },
    ],
    cP = function (e) {
        let { className: t } = e,
            [n, i] = f.useState(null);
        return (0, x.jsxs)("div", {
            className: eB()(cD.iE, t),
            children: [
                (0, x.jsx)(eh.D, {
                    className: cD.R_,
                    variant: "heading-xxl/bold",
                    children: _.intl.string(_.t.HPJ6Nj),
                }),
                (0, x.jsx)("ul", {
                    className: cD.p_,
                    children: cG.map((e, t) => {
                        let l = n === t;
                        return (0, x.jsxs)(
                            "div",
                            {
                                className: cD.Aw,
                                children: [
                                    (0, x.jsxs)(k.D, {
                                        className: eB()(cD.k7, { [cD.lo]: l }),
                                        onClick: () => i((e) => (e === t ? null : t)),
                                        tag: "li",
                                        children: [
                                            (0, x.jsx)(V.E, {
                                                className: cD.b1,
                                                variant: "text-lg/normal",
                                                children: e.getQuestion(),
                                            }),
                                            l
                                                ? (0, x.jsx)(cR.Q, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: cD.q4,
                                                  })
                                                : (0, x.jsx)(cL.j, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: cD.q4,
                                                  }),
                                        ],
                                    }),
                                    l &&
                                        (0, x.jsx)(V.E, {
                                            className: cD.ZF,
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
var cM = n(462887),
    cU = n(933832),
    ck = n(789645),
    cV = n(116891),
    cw = n(416676);
let cB = [
    {
        getPerkHeading: () => _.intl.string(_.t.tIiwuj),
        getPerkPreviewLightTheme: () => n(604203),
        getPerkPreviewDarkTheme: () => n(878515),
        getTier0Value: () => lb.TG[q.TVA.NONE].limits.emoji,
        getTier1Value: () => lb.TG[q.TVA.TIER_1].limits.emoji,
        getTier2Value: () => lb.TG[q.TVA.TIER_2].limits.emoji,
        getTier3Value: () => lb.TG[q.TVA.TIER_3].limits.emoji,
    },
    {
        getPerkHeading: () => _.intl.string(_.t["3iccet"]),
        getPerkPreviewLightTheme: () => n(105732),
        getPerkPreviewDarkTheme: () => n(857020),
        getTier0Value: () => lb.TG[q.TVA.NONE].limits.stickers,
        getTier1Value: () => lb.TG[q.TVA.TIER_1].limits.stickers,
        getTier2Value: () => lb.TG[q.TVA.TIER_2].limits.stickers,
        getTier3Value: () => lb.TG[q.TVA.TIER_3].limits.stickers,
    },
    {
        getPerkHeading: () => _.intl.string(_.t["+smCv9"]),
        getPerkPreviewLightTheme: () => n(597890),
        getPerkPreviewDarkTheme: () => n(297642),
        getTier0Value: () => lb.TG[q.TVA.NONE].limits.soundboardSounds,
        getTier1Value: () => lb.TG[q.TVA.TIER_1].limits.soundboardSounds,
        getTier2Value: () => lb.TG[q.TVA.TIER_2].limits.soundboardSounds,
        getTier3Value: () => lb.TG[q.TVA.TIER_3].limits.soundboardSounds,
    },
    {
        getPerkHeading: () => _.intl.string(_.t.SMYauD),
        getPerkPreviewLightTheme: () => n(323091),
        getPerkPreviewDarkTheme: () => n(261835),
        getTier0Value: () =>
            _.intl.formatToPlainString(_.t.zZ6Rdi, {
                resolution: lb.TG[q.TVA.NONE].limits.screenShareQualityResolution,
                framerate: lb.TG[q.TVA.NONE].limits.screenShareQualityFramerate,
            }),
        getTier1Value: () =>
            _.intl.formatToPlainString(_.t.zZ6Rdi, {
                resolution: lb.TG[q.TVA.TIER_1].limits.screenShareQualityResolution,
                framerate: lb.TG[q.TVA.TIER_1].limits.screenShareQualityFramerate,
            }),
        getTier2Value: () =>
            _.intl.formatToPlainString(_.t.zZ6Rdi, {
                resolution: (0, cV.eT)("GuildBoostingMarketingTierComparisonTable"),
                framerate: lb.TG[q.TVA.TIER_2].limits.screenShareQualityFramerate,
            }),
        getTier3Value: () =>
            _.intl.formatToPlainString(_.t.zZ6Rdi, {
                resolution: (0, cV.eT)("GuildBoostingMarketingTierComparisonTable"),
                framerate: lb.TG[q.TVA.TIER_3].limits.screenShareQualityFramerate,
            }),
    },
    {
        getPerkHeading: () => _.intl.string(_.t["/79IDj"]),
        getPerkPreviewLightTheme: () => n(913997),
        getPerkPreviewDarkTheme: () => n(95781),
        getTier0Value: () =>
            _.intl.formatToPlainString(_.t.w1gmLt, { bitrate: lb.TG[q.TVA.NONE].limits.bitrate / 1e3 }),
        getTier1Value: () =>
            _.intl.formatToPlainString(_.t.w1gmLt, { bitrate: lb.TG[q.TVA.TIER_1].limits.bitrate / 1e3 }),
        getTier2Value: () =>
            _.intl.formatToPlainString(_.t.w1gmLt, { bitrate: lb.TG[q.TVA.TIER_2].limits.bitrate / 1e3 }),
        getTier3Value: () =>
            _.intl.formatToPlainString(_.t.w1gmLt, { bitrate: lb.TG[q.TVA.TIER_3].limits.bitrate / 1e3 }),
    },
    {
        getPerkHeading: () => _.intl.string(_.t.R1U2xC),
        getPerkPreviewLightTheme: () => n(389833),
        getPerkPreviewDarkTheme: () => n(754561),
        getTier0Value: () =>
            _.intl.formatToPlainString(_.t.pIn7Af, { size: lb.TG[q.TVA.NONE].limits.fileSize / 1048576 }),
        getTier1Value: () =>
            _.intl.formatToPlainString(_.t.pIn7Af, { size: lb.TG[q.TVA.TIER_1].limits.fileSize / 1048576 }),
        getTier2Value: () =>
            _.intl.formatToPlainString(_.t.pIn7Af, { size: lb.TG[q.TVA.TIER_2].limits.fileSize / 1048576 }),
        getTier3Value: () =>
            _.intl.formatToPlainString(_.t.pIn7Af, { size: lb.TG[q.TVA.TIER_3].limits.fileSize / 1048576 }),
    },
    {
        getPerkHeading: () => _.intl.string(_.t.f6vfso),
        getPerkPreviewLightTheme: () => n(735669),
        getPerkPreviewDarkTheme: () => n(283517),
        getTier0Value: () => lb.TG[q.TVA.NONE].limits.stageVideoUsers,
        getTier1Value: () => lb.TG[q.TVA.TIER_1].limits.stageVideoUsers,
        getTier2Value: () => lb.TG[q.TVA.TIER_2].limits.stageVideoUsers,
        getTier3Value: () => lb.TG[q.TVA.TIER_3].limits.stageVideoUsers,
    },
    {
        getPerkHeading: () => _.intl.string(_.t.qDqUME),
        getPerkPreviewLightTheme: () => n(970770),
        getPerkPreviewDarkTheme: () => n(416378),
        getTier0Value: () => !1,
        getTier1Value: () => !0,
        getTier2Value: () => !0,
        getTier3Value: () => !0,
    },
    {
        getPerkHeading: () => _.intl.string(_.t.uwqgbu),
        getPerkPreviewLightTheme: () => n(243580),
        getPerkPreviewDarkTheme: () => n(975940),
        getTier0Value: () => !1,
        getTier1Value: () => !0,
        getTier2Value: () => !0,
        getTier3Value: () => !0,
    },
    {
        getPerkHeading: () => _.intl.string(_.t.zxsDxc),
        getPerkPreviewLightTheme: () => n(435748),
        getPerkPreviewDarkTheme: () => n(978380),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => _.intl.string(_.t["2TNS3n"]),
        getTier3Value: () => _.intl.string(_.t["l+S46U"]),
    },
    {
        getPerkHeading: () => _.intl.string(_.t["bHa+Ee"]),
        getPerkPreviewLightTheme: () => n(329312),
        getPerkPreviewDarkTheme: () => n(800120),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => !0,
        getTier3Value: () => !0,
    },
    {
        getPerkHeading: () => _.intl.string(_.t.QV6MZQ),
        getPerkPreviewLightTheme: () => n(463384),
        getPerkPreviewDarkTheme: () => n(258963),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => !1,
        getTier3Value: () => !0,
    },
];
function cF(e) {
    let { children: t, className: n, tier: i } = e,
        l = i === q.TVA.NONE ? "text-muted" : "text-strong",
        s = i === q.TVA.NONE || null == i ? "heading-xl/normal" : "heading-xl/bold";
    return (0, x.jsxs)("th", {
        className: eB()(cw.PG, n),
        scope: "col",
        children: [
            (0, x.jsx)(eh.D, { color: l, variant: s, children: t }),
            null != i &&
                (0, x.jsx)(V.E, {
                    color: l,
                    variant: "text-md/normal",
                    children: _.intl.format(_.t["pob/cL"], { subscriptions: q.M2T[i] }),
                }),
        ],
    });
}
function cz(e) {
    let t,
        { className: n, textVariant: i = "text-md/bold", value: l } = e;
    if ("boolean" == typeof l) {
        let e = eB()(cw.Jk, { [cw.I$]: l });
        t = l
            ? (0, x.jsx)(cU.A, { size: "md", color: "currentColor", className: e })
            : (0, x.jsx)(ck.P, { size: "md", color: "currentColor", className: e });
    } else t = (0, x.jsx)(V.E, { color: "interactive-text-active", variant: i, children: l });
    return (0, x.jsx)("td", { className: eB()(cw.xR, n), children: t });
}
function cX(e) {
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
        : (0, x.jsx)("div", {
              className: eB()(cw.ER, { [cw.GH]: n === q.TVA.TIER_2, [cw.z5]: n === q.TVA.TIER_3 }),
              children: (0, x.jsx)(V.E, {
                  className: cw.uQ,
                  color: "always-white",
                  variant: "text-xs/bold",
                  children: t === q.TVA.TIER_3 ? _.intl.string(_.t.d849Up) : _.intl.string(_.t.dZeX1z),
              }),
          });
}
function cY(e) {
    let { isFocused: t, handleFocus: n, handleRowBlur: i, theme: l, row: s, hideTier0: a } = e,
        r = f.useRef(null);
    return (0, x.jsxs)("tr", {
        className: cw.__invalid_tableRow,
        children: [
            (0, x.jsx)("th", {
                className: eB()(cw.xR, cw.uB),
                scope: "row",
                children: (0, x.jsx)(k.D, {
                    className: eB()(cw.VC, cw.xR, cw.Rk),
                    onFocus: n,
                    onBlur: i,
                    onMouseEnter: n,
                    onMouseLeave: i,
                    children: (0, x.jsx)(P.Y, {
                        targetElementRef: r,
                        align: "center",
                        disablePointerEvents: !0,
                        nudgeAlignIntoViewport: !0,
                        position: "bottom",
                        renderPopout: () =>
                            (0, x.jsx)("img", {
                                className: cw.Mz,
                                src: (0, cM.M)(l) ? s.getPerkPreviewDarkTheme() : s.getPerkPreviewLightTheme(),
                                alt: "",
                            }),
                        shouldShow: t,
                        spacing: 16,
                        children: () =>
                            (0, x.jsx)(V.E, { variant: "text-md/normal", ref: r, children: s.getPerkHeading() }),
                    }),
                }),
            }),
            !a && (0, x.jsx)(cz, { textVariant: "text-md/normal", value: s.getTier0Value() }),
            (0, x.jsx)(cz, { value: s.getTier1Value() }),
            (0, x.jsx)(cz, { value: s.getTier2Value() }),
            (0, x.jsx)(cz, { value: s.getTier3Value() }),
        ],
    });
}
let cH = function (e) {
    let t = (0, uU.Ay)(),
        [n, i] = f.useState(null),
        { className: l, guild: s, hideHeading: a, hideTier0: r } = e;
    function o() {
        i(null);
    }
    return (0, x.jsxs)("div", {
        className: l,
        children: [
            !a &&
                (0, x.jsx)(eh.D, {
                    className: cw.R_,
                    variant: "heading-xxl/extrabold",
                    children: _.intl.string(_.t["9GGb9k"]),
                }),
            (0, x.jsxs)("div", {
                className: cw.wY,
                children: [
                    null != s && (0, x.jsx)(cX, { currentTier: s.premiumTier }),
                    (0, x.jsxs)("table", {
                        className: cw.tp,
                        cellPadding: 0,
                        cellSpacing: 0,
                        children: [
                            (0, x.jsx)("thead", {
                                children: (0, x.jsxs)("tr", {
                                    className: cw.__invalid_tableRow,
                                    children: [
                                        (0, x.jsx)(cF, { className: cw.VC, children: _.intl.string(_.t.F5MY0k) }),
                                        !r && (0, x.jsx)(cF, { tier: q.TVA.NONE, children: _.intl.string(_.t.mx8j2m) }),
                                        (0, x.jsx)(cF, { tier: q.TVA.TIER_1, children: _.intl.string(_.t.nzXtaS) }),
                                        (0, x.jsx)(cF, { tier: q.TVA.TIER_2, children: _.intl.string(_.t["h33/uW"]) }),
                                        (0, x.jsx)(cF, { tier: q.TVA.TIER_3, children: _.intl.string(_.t.BfF6ED) }),
                                    ],
                                }),
                            }),
                            (0, x.jsx)("tbody", {
                                className: cw.__invalid_tableBody,
                                children: cB.map((e, l) => {
                                    let s = n === l;
                                    return void 0 === e.predicate
                                        ? (0, x.jsx)(
                                              cY,
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
var cK = n(338548),
    cW = n(776096),
    cZ = n(178368),
    cQ = n(419354),
    cq = n(866323),
    cJ = n(530005),
    c$ = n(443865),
    c0 = n(473145);
function c1(e) {
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
                label: null != t.premiumGuildSubscription ? _.intl.string(_.t["PR0n//"]) : _.intl.string(_.t["+fmEYG"]),
                subtext: t.isOnCooldown() ? _.intl.string(_.t.XnB8M0) : null,
                disabled: t.isOnCooldown(),
            },
            cancel: { label: _.intl.string(_.t.twFU3R), subtext: l ? null : _.intl.string(_.t.oQ9lOh), disabled: !l },
            uncancel: { label: _.intl.string(_.t["2glQNp"]), subtext: null, disabled: !1 },
        };
    switch (s.status) {
        case q.Dmq.PAST_DUE:
            (o.cancel.disabled = !0), (o.cancel.subtext = _.intl.string(_.t.WnL6DV)), (o.uncancel.disabled = !0);
            break;
        case q.Dmq.PAUSE_PENDING:
        case q.Dmq.PAUSED:
            r === lb.xc.NONE &&
                ((o.transfer.disabled = !0),
                (o.transfer.subtext = _.intl.string(_.t.LiLRRT)),
                (o.cancel.subtext = _.intl.string(_.t["1ywaWL"])),
                (o.cancel.disabled = !0),
                (o.uncancel.disabled = !0));
    }
    let d = f.useMemo(
        () =>
            s.isPausedOrPausePending && r === lb.xc.NONE
                ? (0, x.jsx)(U.Dr, {
                      id: "manage-subscription",
                      label: _.intl.string(_.t.obRG6Y),
                      action: () => (0, ej.openUserSettings)(u.X.SUBSCRIPTIONS_PANEL),
                      iconLeft: c$.x,
                      leadingAccessory: { type: "icon", icon: c$.x },
                  })
                : null,
        [r, s],
    );
    return (0, x.jsxs)(M.W, {
        "data-menu-migrated-auto": !0,
        onSelect: a,
        navId: "subscription-context",
        variant: "fixed",
        "aria-label": _.intl.string(_.t.ogxXGq),
        onClose: i,
        children: [
            (0, x.jsx)(U.Dr, {
                id: "apply",
                label: o.transfer.label,
                subtext: o.transfer.subtext,
                action: function () {
                    (0, N.openModalLazy)(async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 724624));
                        return (n) =>
                            (0, x.jsx)(e, { ...n, guildBoostSlots: [t], locationSection: q.JJy.SETTINGS_PREMIUM });
                    });
                },
                disabled: o.transfer.disabled,
            }),
            (0, c0.I5)(t)
                ? (0, x.jsx)(U.Dr, {
                      id: "uncancel",
                      label: o.uncancel.label,
                      subtext: o.uncancel.subtext,
                      action: function () {
                          (0, N.openModalLazy)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 342744));
                              return (n) => (0, x.jsx)(e, { ...n, guildBoostSlotId: t.id });
                          });
                      },
                      disabled: o.uncancel.disabled,
                  })
                : (0, x.jsx)(U.Dr, {
                      id: "cancel",
                      label: o.cancel.label,
                      subtext: o.cancel.subtext,
                      action: function () {
                          (0, N.openModalLazy)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 983511));
                              return (n) => (0, x.jsx)(e, { ...n, guildBoostSlot: t });
                          });
                      },
                      disabled: o.cancel.disabled,
                      color: "danger",
                  }),
            d,
        ],
    });
}
var c2 = n(545934),
    c5 = n(496431);
let c3 = function (e) {
    let { className: t, cooldown: n } = e,
        i = (0, c5.A)(n);
    return (0, x.jsx)(V.E, {
        className: t,
        variant: "text-sm/medium",
        color: "text-muted",
        children: (0, aI.uN)(i, { days: _.t.WUTPDc, hours: _.t.c1qodV, minutes: _.t["2+A3dv"] }),
    });
};
var c8 = n(550070);
let c4 = function (e) {
    let { className: t, imageClassName: i, boostInCooldown: l, useReducedMotion: s } = e;
    return (0, x.jsx)("div", {
        className: eB()(c8.h4, t, { [c8.K2]: l }),
        children: (0, x.jsx)("img", {
            className: eB()(c8.Sl, i, { [c8.x8]: l }),
            src: l
                ? n(791128)
                : s
                  ? n(757871)
                  : "https://cdn.discordapp.com/assets/content/86fd98fc22283647a8be93d0c503646b53c84e3cb25ca6562a38cecb84327e58.gif",
            alt: "",
        }),
    });
};
var c9 = n(280582);
let c7 = function (e) {
    let { className: t, hasCooldown: i, isCanceled: l, useReducedMotion: s } = e;
    return (0, x.jsxs)("div", {
        className: eB()(c9.sn, t),
        children: [
            l
                ? (0, x.jsx)("img", { className: eB()(c9.$J, c9.qX), src: n(66469), alt: "" })
                : (0, x.jsx)(c4, { className: c9.$J, boostInCooldown: i, useReducedMotion: s }),
            !l && i && (0, x.jsx)("img", { className: c9.De, src: n(994937), alt: "" }),
        ],
    });
};
var c6 = n(548118),
    ge = n(509536),
    gt = n(721923),
    gn = n(864310),
    gi = n(44112);
let gl = function (e) {
    let { className: t, guildId: n, boostingVariant: i } = e,
        l = (0, dE.bG)([K.A], () => K.A.getGuild(n), [n]),
        s = (0, gn.A)(l?.id).total;
    return null == l
        ? (0, x.jsx)("div", {
              className: eB()(t, gi.bo),
              children: (0, x.jsx)("div", {
                  className: gi.$g,
                  children: (0, x.jsx)(V.E, { variant: "text-lg/bold", children: _.intl.string(_.t["6Kwwuo"]) }),
              }),
          })
        : (0, x.jsxs)("div", {
              className: eB()(t, gi.bo),
              children: [
                  (0, x.jsx)(c6.Ay, { className: gi.__invalid_guildIcon, guild: l, size: c6.Ay.Sizes.LARGER }),
                  (0, x.jsxs)("div", {
                      className: gi.$g,
                      children: [
                          (0, x.jsx)(V.E, { variant: "text-lg/bold", children: l.name }),
                          (0, x.jsxs)("div", {
                              className: gi.TZ,
                              children: [
                                  (0, x.jsx)(cp._, {
                                      color: B.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                      className: gi.Me,
                                  }),
                                  (0, x.jsx)(V.E, {
                                      variant: "text-sm/bold",
                                      color: "text-muted",
                                      children: _.intl.format(_.t["pob/cL"], { subscriptions: s }),
                                  }),
                                  (0, x.jsx)("div", { className: gi.me }),
                                  (0, x.jsx)(V.E, {
                                      variant: "text-sm/bold",
                                      color: "text-muted",
                                      children: (0, c0.gb)(l.premiumTier, { useLevels: !1 }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  i
                      ? (0, x.jsx)(gt.A, {
                            guild: l,
                            analyticsLocation: {
                                page: q.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                section: q.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                object: q.ZSU.BUTTON_CTA,
                                objectType: q.AnalyticsObjectTypes.BUY,
                            },
                            pauseAnimation: !0,
                            size: rp.$n.Sizes.MEDIUM,
                            color: rp.$n.Colors.PRIMARY,
                            buttonText: _.intl.string(_.t.aBHecF),
                        })
                      : (0, x.jsx)(eA.$, {
                            variant: "secondary",
                            text: _.intl.string(_.t.KLOhbO),
                            onClick: () => {
                                (0, lE.default)(),
                                    (0, ge.K4)({
                                        guildId: l.id,
                                        location: { section: q.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA },
                                    });
                            },
                        }),
              ],
          });
};
var gs = n(930988);
function ga(e) {
    let {
            guildTier: t,
            guildBoostSlot: n,
            showAltText: i,
            isCanceled: l,
            premiumSubscription: s,
            fractionalPremiumInfo: a,
        } = e,
        r = f.useMemo(() => {
            if (l) {
                let e = s.currentPeriodEnd;
                return (
                    s.isPausedForFractionalPremium && (e = a.endsAt.toDate()), _.intl.format(_.t.Z4ULRD, { date: e })
                );
            }
            let e = null != n.premiumGuildSubscription ? dY.default.extractTimestamp(n.premiumGuildSubscription.id) : 0;
            return _.intl.formatToPlainString(_.t.lY2Bur, { date: new Date(e) });
        }, [n, l, s, a]),
        o = f.useMemo(
            () =>
                (function (e) {
                    if (null == e || e === q.TVA.NONE) return "";
                    let t = [
                        _.intl.formatToPlainString(_.t["dLlKX/"], { numEmojiSlots: lb.TG[e].limits.emoji }),
                        _.intl.formatToPlainString(_.t["+ANIfv"], { numStickerSlots: lb.TG[e].limits.stickers }),
                        _.intl.formatToPlainString(_.t["4gt60b"], {
                            numSoundboardSlots: lb.TG[e].limits.soundboardSounds,
                        }),
                        _.intl.formatToPlainString(_.t.XahSjZ, {
                            resolution: lb.TG[e].limits.screenShareQualityResolution,
                            framerate: lb.TG[e].limits.screenShareQualityFramerate,
                        }),
                        _.intl.formatToPlainString(_.t.NbNs7S, { bitrate: lb.TG[e].limits.bitrate / 1e3 }),
                        _.intl.formatToPlainString(_.t.VVKcpn, { filesize: lb.TG[e].limits.fileSize / 1024 / 1024 }),
                        _.intl.formatToPlainString(_.t.TbpCvv, { numVideoStageSeats: lb.TG[e].limits.stageVideoUsers }),
                        _.intl.string(_.t.LDyX3i),
                        _.intl.string(_.t.YtGlPW),
                    ];
                    e >= q.TVA.TIER_2 && (t.push(_.intl.string(_.t.SztbtN)), t.push(_.intl.string(_.t["3GK91n"]))),
                        e >= q.TVA.TIER_3 && t.push(_.intl.string(_.t["XUUJd+"]));
                    let n = t[Math.floor(Math.random() * t.length)];
                    return _.intl.format(_.t["/dOAmQ"], { perk: n });
                })(t),
            [t],
        ),
        d = (0, cq.p)(i, { from: { opacity: 0 }, enter: { opacity: 1 }, leave: { opacity: 0 } }, "animate-always");
    return l || t === q.TVA.NONE
        ? (0, x.jsx)("div", {
              className: gs.xm,
              children: (0, x.jsx)(V.E, { variant: "text-sm/medium", color: "text-muted", children: r }),
          })
        : d((e, t) =>
              (0, x.jsx)(cQ.animated.div, {
                  style: e,
                  className: gs.xm,
                  children: (0, x.jsx)(V.E, { variant: "text-sm/medium", color: "text-muted", children: t ? o : r }),
              }),
          );
}
function gr(e) {
    let {
            guildTier: t,
            guildBoostSlot: n,
            premiumSubscription: i,
            hasCancelableGuildBoostSlot: l,
            showAltText: s,
            isLastGuildBoostSlot: a,
        } = e,
        r = (0, dE.bG)([nK.A], () => nK.A.useReducedMotion),
        o = f.useMemo(() => (null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null), [n]),
        d = f.useMemo(() => null != o && o > new Date(), [o]),
        u = (0, c0.I5)(n),
        c = (0, cb.A)(),
        g = f.useRef(null);
    return (0, x.jsxs)("div", {
        className: gs.PW,
        children: [
            (0, x.jsxs)("div", {
                className: gs.$U,
                children: [
                    (0, x.jsx)(c7, { isCanceled: u, hasCooldown: d, useReducedMotion: r }),
                    (0, x.jsx)("div", {
                        className: gs.vh,
                        children:
                            null != o && d && !u
                                ? (0, x.jsx)(c3, { className: gs.xm, cooldown: o.getTime() })
                                : (0, x.jsx)(ga, {
                                      guildTier: t,
                                      guildBoostSlot: n,
                                      showAltText: s,
                                      isCanceled: u,
                                      premiumSubscription: i,
                                      fractionalPremiumInfo: c,
                                  }),
                    }),
                    (0, x.jsx)(P.Y, {
                        targetElementRef: g,
                        renderPopout: function (e) {
                            let { closePopout: t } = e;
                            return (0, x.jsx)(c1, {
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
                            (0, x.jsx)(k.D, {
                                ...e,
                                innerRef: g,
                                "aria-label": _.intl.string(_.t.PdRCRg),
                                className: gs.oU,
                                children: (0, x.jsx)(cJ.F, { size: "md", color: "currentColor" }),
                            }),
                    }),
                ],
            }),
            !a && (0, x.jsx)("div", { className: gs.eX }),
        ],
    });
}
function go(e) {
    let {
            guildId: t,
            guildBoostSlotRecords: n,
            premiumSubscription: i,
            hasCancelableGuildBoostSlot: l,
            showAltText: s,
        } = e,
        a = (0, dE.bG)([K.A], () => K.A.getGuild(t), [t]);
    return (0, x.jsxs)("div", {
        className: gs.ag,
        children: [
            (0, x.jsx)(gl, { guildId: t, boostingVariant: !1 }),
            n.map((e, t) =>
                (0, x.jsx)(
                    gr,
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
function gd(e) {
    let { guildId: t, appliedGuildBoosts: n, premiumSubscription: i } = e,
        l = (0, dE.bG)([K.A], () => K.A.getGuild(t), [t]),
        s = dY.default.fromTimestamp(Date.now());
    if (
        (n.forEach((e) => {
            (null == s || 0 > dY.default.compare(e.id, s)) && (s = e.id);
        }),
        null == s)
    )
        return null;
    let a = c2.A.createFromServer(
        {
            id: dY.default.fromTimestamp(Date.now()),
            subscription_id: i.id,
            canceled: !1,
            premium_guild_subscription: { id: s, guild_id: t },
            cooldown_ends_at: null,
        },
        i,
    );
    return (0, x.jsxs)("div", {
        className: gs.ag,
        children: [
            (0, x.jsx)(gl, { guildId: t, boostingVariant: !1 }),
            n.map((e, t) =>
                (0, x.jsx)(
                    gr,
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
function gu(e) {
    let { appliedGuildBoosts: t, premiumSubscription: n } = e,
        i = f.useMemo(() => {
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
        : (0, x.jsxs)("div", {
              className: gs.iE,
              children: [
                  (0, x.jsx)("div", {
                      className: gs.kL,
                      children: dY.default
                          .keys(i)
                          .map((e) =>
                              (0, x.jsx)(gd, { guildId: e, premiumSubscription: n, appliedGuildBoosts: i[e] }, e),
                          ),
                  }),
                  (0, x.jsx)("div", { className: gs.vK }),
              ],
          });
}
function gc(e) {
    let { guildBoostSlots: t, premiumSubscription: n } = e,
        [i, l] = f.useState(!1);
    f.useEffect(() => {
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
    let { boostsByGuildId: s, numActiveGuildBoostSlots: a } = f.useMemo(() => {
        let e = 0,
            n = {};
        return (
            Object.keys(t).forEach((i) => {
                let l = t[i];
                if ((!(0, c0.I5)(l) && e++, null != l.premiumGuildSubscription)) {
                    let e = l.premiumGuildSubscription.guildId;
                    e in n || (n[e] = []), n[e].push(l);
                }
            }),
            { boostsByGuildId: n, numActiveGuildBoostSlots: e }
        );
    }, [t]);
    if (null == n || 0 === Object.keys(s).length) return null;
    let r = a > oP.Ay.getNumIncludedPremiumGuildSubscriptionSlots(n.planId);
    return (0, x.jsxs)("div", {
        className: gs.iE,
        children: [
            (0, x.jsx)("div", {
                className: gs.kL,
                children: dY.default
                    .keys(s)
                    .map((e) =>
                        (0, x.jsx)(
                            go,
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
            (0, x.jsx)("div", { className: gs.vK }),
        ],
    });
}
var gg = n(581796);
let g_ = function (e) {
    let { hasGuildBoostSlots: t, hasAppliedGuildBoosts: i, hasBoostPerk: l, canAddBoosts: s } = e;
    return (0, x.jsxs)("div", {
        className: gg.iE,
        children: [
            (0, x.jsx)("div", {
                className: gg.bj,
                children: (0, x.jsx)("img", { alt: "", className: gg.KV, src: n(757871) }),
            }),
            (0, x.jsxs)("div", {
                className: gg.D7,
                children: [
                    (0, x.jsx)(eh.D, {
                        variant: "display-md",
                        className: gg.R_,
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
                                        ? _.intl.format(_.t.s9zQyG, {})
                                        : _.intl.format(_.t.Rb8Jhs, {})
                                    : _.intl.string(_.t["2rh0by"])
                                : _.intl.format(_.t.Rb8Jhs, {});
                        })({ hasGuildBoostSlots: t, hasBoostPerk: l, hasAppliedGuildBoosts: i, canAddBoosts: s }),
                    }),
                    (0, x.jsx)("svg", {
                        viewBox: "0 0 660 210",
                        className: gg.Mz,
                        children: (0, x.jsx)("path", {
                            d: "M101.3,45.5C57.5,45.9,15.9,82.2,0,99.5V210h660V53.5c-164-137-265.2,32.4-385.8,33.6  C177.7,88.1,158.1,45,101.3,45.5z",
                        }),
                    }),
                ],
            }),
        ],
    });
};
var gm = n(757240),
    gh = n(168482);
function gA() {
    return (0, x.jsxs)("div", {
        className: gm.iE,
        children: [
            (0, x.jsx)("img", { className: gm.Kk, alt: "", src: gh }),
            (0, x.jsxs)("div", {
                className: gm.pq,
                children: [
                    (0, x.jsx)(V.E, { variant: "text-lg/bold", children: _.intl.string(_.t.ZHNSYf) }),
                    (0, x.jsx)(V.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: _.intl.string(_.t.kCj5ps),
                    }),
                ],
            }),
            (0, x.jsx)(eA.$, {
                variant: "secondary",
                text: _.intl.string(_.t.JFlifp),
                onClick: () => {
                    (0, lL.pX)(q.BVt.GUILD_DISCOVERY), (0, lE.default)();
                },
            }),
        ],
    });
}
var gp = n(502572),
    gE = n(614820),
    gT = n(987144),
    gS = n(43985);
let gx = function () {
    let e = f.useRef(null),
        { analyticsLocations: t } = (0, iU.Ay)(),
        { fractionalState: i } = (0, cb.A)();
    function l(n) {
        null != e.current && (0, N.closeModal)(e.current),
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
        e.current = await (0, N.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 770101));
                return (t) => (0, x.jsx)(e, { ...t, onSelectGuild: l });
            },
            {
                onCloseRequest: () => {
                    null != e.current && (0, N.closeModal)(e.current);
                },
            },
        );
    }
    let a = (0, c0.Nc)({ fractionalState: i });
    return (0, x.jsxs)("div", {
        className: gS.iE,
        children: [
            (0, x.jsx)(cp._, { color: B.A.unsafe_rawColors.GUILD_BOOSTING_PINK, className: gS.$J }),
            (0, x.jsx)(V.E, {
                className: gS.C,
                color: "text-default",
                variant: "text-sm/medium",
                children: _.intl.format(_.t.kqC5vq, {
                    boostAnyGuildHook: (e, t) => {
                        let n = null != a,
                            i = (0, gE.O)(e),
                            l = (0, x.jsx)("div", {
                                className: gS.lO,
                                children: (0, x.jsx)(
                                    F.Q,
                                    { variant: "primary", onClick: n ? void 0 : s, text: i, disabled: n },
                                    t,
                                ),
                            });
                        return n
                            ? (0, x.jsx)(
                                  gp.A,
                                  {
                                      text: a,
                                      "aria-label": a.toString(),
                                      children: (e) => (0, x.jsx)("span", { ...e, children: l }),
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
var gf = n(212824);
let gb = function (e) {
    let { canAddBoosts: t, canApplyBoosts: n } = e,
        i = (0, R.bG)([cW.A], () => cW.A.affinities),
        l = (0, R.bG)([W.Ay], () => W.Ay.getFlattenedGuildIds()),
        s = f.useMemo(() => {
            let e = i.slice(0, 3).map((e) => e.guildId);
            for (let t = 0; t < l.length && !(e.length >= 3); t++) {
                let n = l[t];
                e.includes(n) || e.push(n);
            }
            return e;
        }, [i, l]);
    return 0 === s.length
        ? null
        : (0, x.jsxs)("div", {
              className: gf.iE,
              children: [
                  t &&
                      (0, x.jsx)(eh.D, {
                          variant: "heading-lg/semibold",
                          className: gf.wx,
                          children: _.intl.string(_.t.r90Wgo),
                      }),
                  s.map((e) => (0, x.jsx)(gl, { className: gf.ZS, guildId: e, boostingVariant: !0 }, e)),
                  l.length > 3 && n && (0, x.jsx)(gx, {}),
              ],
          });
};
var gN = n(342933);
let gC = function (e) {
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
                    flavor: _.intl.format(_.t.doslJu, {
                        onClick: () => (0, ej.openUserSettings)(u.X.SUBSCRIPTIONS_PANEL),
                    }),
                };
            if (!i) return { subtitle: _.intl.string(_.t.oiWYAc) };
            if (t)
                return {
                    subtitle: _.intl.string(_.t.W5rDjW),
                    flavor: _.intl.format(_.t.cUHcaQ, {
                        helpdeskArticle: to.A.getArticleURL(q.MVz.GUILD_SUBSCRIPTIONS),
                    }),
                };
            let s = lb.hd[lb.gD.PREMIUM_MONTH_GUILD],
                a = oP.Ay.getDefaultPrice(s.id, n),
                r = (0, dz.CE)((0, dz.$g)(a.amount, a.currency), s.interval, s.intervalCount);
            return {
                subtitle: n ? _.intl.string(_.t.bhPzXR) : _.intl.string(_.t.Zs9h9Z),
                flavor: _.intl.formatToPlainString(_.t.PGgTdA, { monthlyGuildBoostPrice: r }),
            };
        })({
            hasAppliedGuildBoosts: t,
            hasBoostPerk: n,
            hasGuildAffinitiesOrInGuild: i,
            subscriptionIsPausedOrPausePending: l,
        });
    return (0, x.jsxs)("div", {
        className: gN.i,
        children: [
            (0, x.jsx)(eh.D, { variant: "heading-lg/bold", className: gN.V, children: s }),
            null != a && (0, x.jsx)(V.E, { variant: "text-sm/normal", children: a }),
        ],
    });
};
var gI = n(724624),
    gv = n(983511),
    gy = n(342744),
    gj = n(87719),
    gO = n(929570);
function gR(e) {
    let {
            guildBoostSlot: t,
            isCancellable: n,
            onCancel: i,
            onUncancel: l,
            premiumSubscription: s,
            useReducedMotion: a,
            fractionalState: r,
        } = e,
        o = f.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t]),
        d = (0, c0.I5)(t),
        u = s?.isPaused === !0 && r === lb.xc.NONE,
        c = _.intl.string(_.t.mOWsF1);
    return (0, x.jsxs)(
        "li",
        {
            className: gO.Hp,
            children: [
                (0, x.jsxs)("div", {
                    className: gO.YL,
                    children: [
                        (0, x.jsx)(c7, {
                            className: gO.W6,
                            hasCooldown: t.isOnCooldown(),
                            isCanceled: d,
                            useReducedMotion: a,
                        }),
                        d && null != s
                            ? (0, x.jsx)(V.E, {
                                  color: "text-muted",
                                  variant: "text-sm/medium",
                                  children: _.intl.format(_.t.Z4ULRD, { date: s.currentPeriodEnd }),
                              })
                            : t.isOnCooldown() && null != o
                              ? (0, x.jsx)(c3, { cooldown: o.getTime() })
                              : (0, x.jsx)(V.E, {
                                    className: gO.__invalid_unappliedGuildBoostSlotDescription,
                                    color: "text-muted",
                                    variant: "text-sm/medium",
                                    children: _.intl.string(_.t["2mcafz"]),
                                }),
                    ],
                }),
                (0, x.jsxs)("div", {
                    className: gO.E7,
                    children: [
                        n &&
                            !d &&
                            (0, x.jsx)(gp.A, {
                                shouldShow: u,
                                text: c,
                                "aria-label": c.toString(),
                                children: (e) =>
                                    (0, x.jsx)("div", {
                                        className: gO.LB,
                                        children: (0, x.jsx)(F.Q, {
                                            ...e,
                                            variant: "primary",
                                            text: _.intl.string(_.t.twFU3R),
                                            onClick: () => i(t),
                                            disabled: u,
                                            size: "sm",
                                        }),
                                    }),
                            }),
                        d &&
                            (0, x.jsx)(gp.A, {
                                shouldShow: u,
                                text: c,
                                "aria-label": c.toString(),
                                children: (e) =>
                                    (0, x.jsx)("div", {
                                        className: gO.LB,
                                        children: (0, x.jsx)(F.Q, {
                                            ...e,
                                            variant: "primary",
                                            text: _.intl.string(_.t["2glQNp"]),
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
function gL(e) {
    (0, N.openModalLazy)(async () => (t) => (0, x.jsx)(gv.default, { ...t, guildBoostSlot: e }));
}
function gD(e) {
    (0, N.openModalLazy)(async () => (t) => (0, x.jsx)(gy.default, { ...t, guildBoostSlotId: e.id }));
}
let gG = function (e) {
    let t,
        n,
        i,
        { guildBoostSlots: l } = e,
        s = (0, R.bG)([ua.A], () => ua.A.getPremiumTypeSubscription()),
        a = s?.isPausedOrPausePending === !0,
        { fractionalState: r } = (0, cb.A)(),
        o = (0, R.bG)([nK.A], () => nK.A.useReducedMotion),
        d = (0, R.bG)([t3.default], () => t3.default.getCurrentUser()),
        u = r === lb.xc.FP_SUB_PAUSED,
        c = a && !u,
        {
            appliedGuildBoostSlots: g,
            unappliedGuildBoostSlots: m,
            numActiveGuildBoostSlots: h,
            hasCooldownBoosts: A,
            allGuildBoostsAreOnCooldown: p,
        } = f.useMemo(() => {
            let e = [],
                t = [],
                n = 0,
                i = !1,
                s = !0;
            return (
                l.forEach((l) => {
                    !(0, c0.I5)(l) && n++,
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
        E = null != s ? oP.Ay.getNumIncludedPremiumGuildSubscriptionSlots(s.planId) : 0,
        T = Math.max(0, E - g.length),
        S = h > E,
        b = E === l.length,
        C = b ? T : 1,
        I = f.useMemo(() => {
            let e = [];
            for (let t = 0; t < C; t++) e.push((0, x.jsx)(c4, { className: gO.YA, useReducedMotion: o }, t));
            return e;
        }, [C, o]),
        v = f.useMemo(() => m.find((e) => e.isAvailable()), [m]);
    if (0 === m.length) return null;
    let y = m.length;
    if (
        ((t = b
            ? _.intl.formatToPlainString(p ? _.t["3DW6Dc"] : _.t["/u15Qc"], { numUnappliedGuildBoostSlots: y })
            : _.intl.formatToPlainString(p ? _.t["3DW6Dc"] : _.t.BPadnO, { numUnappliedGuildBoostSlots: y })),
        oP.Ay.isPremium(d))
    ) {
        let e = (e, t) =>
            (0, x.jsx)(
                k.D,
                {
                    className: gO.nw,
                    tag: "span",
                    onClick: () => {
                        (0, gj.e)();
                    },
                    children: e,
                },
                t,
            );
        n = p
            ? _.intl.format(_.t.omcpSE, { learnMoreHook: e })
            : _.intl.format(_.t["5mAkVi"], { numUnappliedGuildBoostSlots: y, learnMoreHook: e });
    } else
        n = p
            ? _.intl.string(_.t["8pcUZi"])
            : _.intl.formatToPlainString(_.t.Kaw82o, { numUnappliedGuildBoostSlots: y });
    return (
        (i = a && r === lb.xc.NONE ? _.intl.string(_.t.mOWsF1) : _.intl.string(_.t.xr4m5B)),
        (0, x.jsx)("div", {
            className: gO.iE,
            children: (0, x.jsxs)("div", {
                className: eB()(gO.Qs, [gO.Yq]),
                children: [
                    (0, x.jsxs)("div", {
                        className: gO.wx,
                        children: [
                            (0, x.jsxs)("div", {
                                className: gO.RW,
                                children: [
                                    (0, x.jsx)("div", { className: gO.PS, children: I }),
                                    (0, x.jsxs)("div", {
                                        className: gO.__invalid_headerCopy,
                                        children: [
                                            (0, x.jsx)(eh.D, {
                                                className: gO.gg,
                                                variant: "heading-lg/bold",
                                                children: t,
                                            }),
                                            (0, x.jsx)(V.E, {
                                                className: gO.__invalid_headerSubheading,
                                                color: "text-strong",
                                                variant: "text-sm/normal",
                                                children: n,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, x.jsx)("div", {
                                className: gO.di,
                                children: (0, x.jsx)(gp.A, {
                                    shouldShow: null == v || c,
                                    text: i,
                                    "aria-label": i.toString(),
                                    children: (e) =>
                                        (0, x.jsx)(eA.$, {
                                            variant: "primary",
                                            text: _.intl.string(_.t.BMx1iy),
                                            ...e,
                                            disabled: null == v || c,
                                            onClick:
                                                null != v
                                                    ? () => {
                                                          (0, N.openModalLazy)(
                                                              async () => (e) =>
                                                                  (0, x.jsx)(gI.default, {
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
                    (!b || A) &&
                        (0, x.jsx)("ul", {
                            className: gO.LU,
                            children: m.map((e) =>
                                (0, x.jsx)(
                                    gR,
                                    {
                                        guildBoostSlot: e,
                                        isCancellable: S,
                                        onCancel: gL,
                                        onUncancel: gD,
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
var gP = n(669561);
function gM(e) {
    let { premiumSubscription: t } = e,
        n = (0, R.bG)([cZ.A], () => cZ.A.boostSlots),
        i = f.useMemo(() => Object.values(n), [n]),
        l = (0, R.bG)([t3.default], () => t3.default.getCurrentUser()),
        s = oP.Ay.isPremium(l, lb.PremiumTypes.TIER_2),
        a = (0, R.bG)([cW.A], () => cW.A.affinities),
        r = (0, R.bG)([W.Ay], () => W.Ay.getFlattenedGuildIds()),
        o = a.length > 0 || r.length > 0,
        d = i.length > 0,
        u = f.useMemo(() => i.filter((e) => null != e.premiumGuildSubscription), [i]),
        c = u.length > 0,
        g = i.length > u.length,
        _ = (0, R.bG)([cf.A], () => cf.A.getCurrentUserAppliedBoosts()),
        { fractionalState: m } = (0, cb.A)({ forceFetch: !0 }),
        h = l?.isPremiumGroupMember(),
        A = t?.isPausedOrPausePending === !0 && m === lb.xc.NONE,
        p = t?.isPausedOrPausePending !== !0 && m === lb.xc.NONE && !h,
        E = s && m === lb.xc.FP_SUB_PAUSED,
        T = m === lb.xc.NONE && !h;
    return (0, x.jsxs)("div", {
        className: gP.GO,
        children: [
            (0, x.jsx)(uS.kb, { className: gP.ek }),
            (0, x.jsx)(g_, { hasGuildBoostSlots: d, hasAppliedGuildBoosts: c, hasBoostPerk: E, canAddBoosts: p }),
            T &&
                (0, x.jsx)(gC, {
                    hasAppliedGuildBoosts: c,
                    hasBoostPerk: E,
                    hasGuildAffinitiesOrInGuild: o,
                    subscriptionIsPausedOrPausePending: A,
                }),
            h && (0, x.jsx)(cK.A, {}),
            !o && (0, x.jsx)(gA, {}),
            t?.isPaused && m !== lb.xc.FP_SUB_PAUSED
                ? (0, x.jsx)(gu, { appliedGuildBoosts: _, premiumSubscription: t })
                : (0, x.jsx)(gc, { guildBoostSlots: n, premiumSubscription: t }),
            (0, x.jsx)(gG, { guildBoostSlots: i, fractionalPremiumState: m }),
            (0, x.jsx)(gb, { canAddBoosts: c && p, canApplyBoosts: g }),
            (0, x.jsx)(cH, { className: gP.e4, hideHeading: !0, hideTier0: !0 }),
            (0, x.jsx)(cO, { cardClassName: gP.KW }),
            (0, x.jsx)(cP, { className: gP.JL }),
        ],
    });
}
var gU = n(527113),
    gk = n(365199),
    gV = n(102320);
function gw(e) {
    let { guild: t, className: n } = e,
        { total: i } = (0, gn.A)(t.id);
    return (0, x.jsxs)("div", {
        className: n ?? gV.OA,
        children: [
            (0, x.jsx)(c6.Ay, { className: gV.$f, guild: t, size: c6.Ay.Sizes.MEDIUM }),
            (0, x.jsxs)("div", {
                className: gV.gI,
                children: [
                    (0, x.jsx)(V.E, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        tag: "span",
                        children: t.name,
                    }),
                    (0, x.jsxs)("div", {
                        className: gV.ew,
                        children: [
                            (0, x.jsxs)("div", {
                                className: gV.QW,
                                children: [
                                    (0, x.jsx)(cp._, {
                                        className: gV.Wz,
                                        color: B.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH,
                                    }),
                                    (0, x.jsx)(V.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: _.intl.format(_.t["pob/cL"], { subscriptions: i }),
                                    }),
                                ],
                            }),
                            t.premiumTier !== q.TVA.NONE &&
                                (0, x.jsxs)(x.Fragment, {
                                    children: [
                                        (0, x.jsx)("div", { className: gV.zk }),
                                        (0, x.jsx)(V.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-subtle",
                                            children: (0, c0.gb)(t.premiumTier, { useLevels: !1 }),
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
function gB(e) {
    let { guildId: t } = e,
        n = (0, R.bG)([K.A], () => K.A.getGuild(t), [t]);
    return null == n
        ? null
        : (0, x.jsxs)("div", {
              className: gV.Nr,
              children: [
                  (0, x.jsx)(gw, { guild: n }),
                  (0, x.jsx)(eA.$, {
                      variant: "secondary",
                      size: "sm",
                      icon: cp._,
                      text: _.intl.string(_.t.aBHecF),
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
var gF = n(538888);
let gz =
    "https://cdn.discordapp.com/assets/content/272d3fa6496aedb9dee76f2d555913bfd56c9e9aacd6de3c18449644d9749657.png";
function gX(e) {
    let { slot: t, guildTier: n, premiumSubscription: i, hasCancelableSlots: l, isLast: s } = e,
        a = f.useRef(null),
        r = (0, c0.I5)(t),
        o = f.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t.cooldownEndsAt]),
        d = null != o && o > new Date(),
        u = (0, cb.A)(),
        c = f.useMemo(
            () =>
                (function (e, t) {
                    if (null == e || e === q.TVA.NONE) return "";
                    let n = [
                        _.intl.formatToPlainString(_.t["dLlKX/"], { numEmojiSlots: lb.TG[e].limits.emoji }),
                        _.intl.formatToPlainString(_.t["+ANIfv"], { numStickerSlots: lb.TG[e].limits.stickers }),
                        _.intl.formatToPlainString(_.t["4gt60b"], {
                            numSoundboardSlots: lb.TG[e].limits.soundboardSounds,
                        }),
                        _.intl.formatToPlainString(_.t.XahSjZ, {
                            resolution: lb.TG[e].limits.screenShareQualityResolution,
                            framerate: lb.TG[e].limits.screenShareQualityFramerate,
                        }),
                        _.intl.formatToPlainString(_.t.NbNs7S, { bitrate: lb.TG[e].limits.bitrate / 1e3 }),
                        _.intl.formatToPlainString(_.t.VVKcpn, { filesize: lb.TG[e].limits.fileSize / 1024 / 1024 }),
                        _.intl.formatToPlainString(_.t.TbpCvv, { numVideoStageSeats: lb.TG[e].limits.stageVideoUsers }),
                        _.intl.string(_.t.LDyX3i),
                        _.intl.string(_.t.YtGlPW),
                    ];
                    e >= q.TVA.TIER_2 && (n.push(_.intl.string(_.t.SztbtN)), n.push(_.intl.string(_.t["3GK91n"]))),
                        e >= q.TVA.TIER_3 && n.push(_.intl.string(_.t["XUUJd+"]));
                    let i = 0;
                    for (let e = 0; e < t.length; e++) i = (31 * i + t.charCodeAt(e)) | 0;
                    let l = n[Math.abs(i) % n.length];
                    return _.intl.formatToPlainString(_.t["/dOAmQ"], { perk: l });
                })(n, t.id),
            [n, t.id],
        ),
        g = f.useMemo(() => {
            if ("" !== c) return c;
            let e = null != t.premiumGuildSubscription ? dY.default.extractTimestamp(t.premiumGuildSubscription.id) : 0;
            return _.intl.formatToPlainString(_.t.lY2Bur, { date: new Date(e) });
        }, [c, t.premiumGuildSubscription]),
        m = f.useMemo(
            () => (r ? (i.isPausedForFractionalPremium ? u.endsAt.toDate() : i.currentPeriodEnd) : null),
            [r, i, u],
        );
    return (0, x.jsxs)("div", {
        className: eB()(gF.iq, { [gF.Mt]: s }),
        children: [
            (0, x.jsxs)("div", {
                className: gF.kd,
                children: [
                    (0, x.jsx)("img", { alt: "", className: gF.bB, src: gz }),
                    r && null != m
                        ? (0, x.jsx)(V.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: _.intl.format(_.t.Z4ULRD, { date: m }),
                          })
                        : (0, x.jsxs)(x.Fragment, {
                              children: [
                                  (0, x.jsx)(V.E, { variant: "text-sm/medium", color: "text-subtle", children: g }),
                                  d &&
                                      null != o &&
                                      (0, x.jsxs)(x.Fragment, {
                                          children: [
                                              (0, x.jsx)("div", { className: gF.zk }),
                                              (0, x.jsx)(V.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-feedback-info",
                                                  children: _.intl.formatToPlainString(_.t.YJlswH, {
                                                      date: o.toLocaleDateString(),
                                                  }),
                                              }),
                                          ],
                                      }),
                                  !d &&
                                      null != i.trialEndsAt &&
                                      (0, x.jsxs)(x.Fragment, {
                                          children: [
                                              (0, x.jsx)("div", { className: gF.zk }),
                                              (0, x.jsx)(V.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-feedback-warning",
                                                  children: _.intl.formatToPlainString(_.t.OdPSpk, {
                                                      date: new Date(i.trialEndsAt).toLocaleDateString(),
                                                  }),
                                              }),
                                          ],
                                      }),
                              ],
                          }),
                ],
            }),
            (0, x.jsx)(P.Y, {
                targetElementRef: a,
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, x.jsx)(c1, {
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
                    (0, x.jsx)(k.D, {
                        innerRef: a,
                        "aria-label": _.intl.string(_.t.PdRCRg),
                        className: gF.Mj,
                        ...e,
                        children: (0, x.jsx)(gk.j, { size: "xs", color: B.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                    }),
            }),
        ],
    });
}
function gY(e) {
    let { guildId: t, slots: n, premiumSubscription: i, hasCancelableSlots: l } = e,
        s = (0, R.bG)([K.A], () => K.A.getGuild(t), [t]);
    return (0, x.jsxs)("div", {
        className: gF.Nr,
        children: [
            (0, x.jsx)("div", {
                className: gF.MY,
                children:
                    null != s
                        ? (0, x.jsxs)(x.Fragment, {
                              children: [
                                  (0, x.jsx)(gw, { guild: s, className: gF.OA }),
                                  (0, x.jsx)(eA.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: _.intl.string(_.t.KLOhbO),
                                      onClick: () => {
                                          (0, lE.default)(),
                                              (0, ge.K4)({
                                                  guildId: s.id,
                                                  location: {
                                                      section: q.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA,
                                                  },
                                              });
                                      },
                                  }),
                              ],
                          })
                        : (0, x.jsx)("div", {
                              className: gF.OA,
                              children: (0, x.jsx)(eh.D, {
                                  variant: "heading-md/semibold",
                                  color: "text-default",
                                  children: _.intl.string(_.t["6Kwwuo"]),
                              }),
                          }),
            }),
            n.map((e, t) =>
                (0, x.jsx)(
                    gX,
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
function gH(e) {
    let { guildBoostSlots: t, premiumSubscription: n, pausedAppliedGuildBoosts: i, isPaused: l } = e,
        { boostsByGuildId: s, numActiveSlots: a } = f.useMemo(() => {
            if (l && null != n)
                return {
                    boostsByGuildId: (function (e, t) {
                        let n = {};
                        for (let t of e) t.guildId in n || (n[t.guildId] = []), n[t.guildId].push(t);
                        let i = {};
                        for (let e of Object.keys(n)) {
                            let l = n[e];
                            i[e] = l.map((n) =>
                                c2.A.createFromServer(
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
                if ((!(0, c0.I5)(i) && e++, null != i.premiumGuildSubscription)) {
                    let e = i.premiumGuildSubscription.guildId;
                    e in s || (s[e] = []), s[e].push(i);
                }
            }
            return { boostsByGuildId: s, numActiveSlots: e };
        }, [t, l, i, n]);
    if (null == n || 0 === Object.keys(s).length) return null;
    let r = a > oP.Ay.getNumIncludedPremiumGuildSubscriptionSlots(n.planId);
    return (0, x.jsx)("div", {
        className: gF.kR,
        children: dY.default
            .keys(s)
            .map((e) => (0, x.jsx)(gY, { guildId: e, slots: s[e], premiumSubscription: n, hasCancelableSlots: r }, e)),
    });
}
var gK = n(100345);
function gW(e) {
    let { guildBoostSlots: t, fractionalPremiumState: i } = e,
        l = (0, R.bG)([ua.A], () => ua.A.getPremiumTypeSubscription()),
        { unappliedSlots: s, numActiveSlots: a } = f.useMemo(() => {
            let e = [],
                n = 0;
            for (let i of t) !(0, c0.I5)(i) && n++, null == i.premiumGuildSubscription && e.push(i);
            return { unappliedSlots: e, numActiveSlots: n };
        }, [t]),
        r = a > (null != l ? oP.Ay.getNumIncludedPremiumGuildSubscriptionSlots(l.planId) : 0),
        o = l?.isPausedOrPausePending === !0 && i === lb.xc.NONE;
    return 0 === s.length
        ? null
        : (0, x.jsxs)("div", {
              className: gK.Nr,
              children: [
                  (0, x.jsxs)("div", {
                      className: gK.MY,
                      children: [
                          (0, x.jsxs)("div", {
                              className: gK._L,
                              children: [
                                  (0, x.jsxs)("div", {
                                      className: gK.MD,
                                      children: [
                                          (0, x.jsx)("img", { alt: "", className: gK.F8, src: gz }),
                                          (0, x.jsx)("div", {
                                              className: eB()(gK.qS, "theme-dark"),
                                              children: (0, x.jsx)("span", { className: gK.Vv, children: s.length }),
                                          }),
                                      ],
                                  }),
                                  (0, x.jsxs)("div", {
                                      className: gK.Qp,
                                      children: [
                                          (0, x.jsx)(V.E, {
                                              variant: "heading-md/semibold",
                                              color: "text-default",
                                              tag: "span",
                                              children: _.intl.format(_.t.BPadnO, {
                                                  numUnappliedGuildBoostSlots: s.length,
                                              }),
                                          }),
                                          (0, x.jsx)(V.E, {
                                              variant: "text-xs/semibold",
                                              color: "text-subtle",
                                              children: _.intl.format(_.t.Kaw82o, {
                                                  numUnappliedGuildBoostSlots: s.length,
                                              }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, x.jsx)(gp.A, {
                              shouldShow: o,
                              text: _.intl.string(_.t.mOWsF1),
                              "aria-label": _.intl.string(_.t.mOWsF1),
                              children: (e) =>
                                  (0, x.jsx)(eA.$, {
                                      ...e,
                                      variant: "primary",
                                      size: "sm",
                                      icon: cp._,
                                      text: _.intl.string(_.t.BMx1iy),
                                      disabled: o,
                                      onClick: () => {
                                          (0, N.openModalLazy)(async () => {
                                              let { default: e } = await Promise.resolve().then(n.bind(n, 770101));
                                              return (t) =>
                                                  (0, x.jsx)(e, {
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
                      (0, x.jsx)(
                          gZ,
                          {
                              slot: e,
                              isLast: t === s.length - 1,
                              isCancelable: r && !(0, c0.I5)(e),
                              isCanceled: (0, c0.I5)(e),
                              premiumSubscription: l,
                              modificationsDisabled: o,
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function gZ(e) {
    let t,
        { slot: n, isLast: i, isCancelable: l, isCanceled: s, premiumSubscription: a, modificationsDisabled: r } = e,
        o = f.useRef(null),
        d = f.useMemo(() => (null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null), [n.cooldownEndsAt]);
    t =
        s && null != a
            ? (0, x.jsx)(V.E, {
                  variant: "text-sm/medium",
                  color: "text-subtle",
                  children: _.intl.format(_.t.Z4ULRD, { date: a.currentPeriodEnd }),
              })
            : n.isOnCooldown() && null != d
              ? (0, x.jsx)(c3, { cooldown: d.getTime() })
              : (0, x.jsx)(V.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: _.intl.string(_.t["2mcafz"]),
                });
    let u = l || s;
    return (0, x.jsxs)("div", {
        className: eB()(gK.iq, { [gK.Mt]: i }),
        children: [
            (0, x.jsxs)("div", {
                className: gK.kd,
                children: [(0, x.jsx)("img", { alt: "", className: gK.bB, src: gz }), t],
            }),
            u &&
                (0, x.jsx)(P.Y, {
                    targetElementRef: o,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, x.jsxs)(M.W, {
                            navId: "unapplied-boost-actions",
                            "aria-label": _.intl.string(_.t.ogxXGq),
                            onSelect: void 0,
                            onClose: t,
                            children: [
                                l &&
                                    (0, x.jsx)(U.Dr, {
                                        id: "cancel-boost",
                                        label: _.intl.string(_.t.twFU3R),
                                        color: "danger",
                                        disabled: r,
                                        subtext: r ? _.intl.string(_.t.mOWsF1) : void 0,
                                        action: () => {
                                            t(),
                                                (0, N.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, x.jsx)(gv.default, { ...e, guildBoostSlot: n }),
                                                );
                                        },
                                    }),
                                s &&
                                    (0, x.jsx)(U.Dr, {
                                        id: "uncancel-boost",
                                        label: _.intl.string(_.t["2glQNp"]),
                                        disabled: r,
                                        subtext: r ? _.intl.string(_.t.mOWsF1) : void 0,
                                        action: () => {
                                            t(),
                                                (0, N.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, x.jsx)(gy.default, { ...e, guildBoostSlotId: n.id }),
                                                );
                                        },
                                    }),
                            ],
                        });
                    },
                    align: "right",
                    position: "bottom",
                    children: (e) =>
                        (0, x.jsx)(k.D, {
                            innerRef: o,
                            "aria-label": _.intl.string(_.t["UKOtz+"]),
                            className: gK.Mj,
                            ...e,
                            children: (0, x.jsx)(gk.j, { size: "xs", color: B.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                        }),
                }),
        ],
    });
}
var gQ = n(800955);
function gq(e) {
    let {
            guildBoostSlots: t,
            guildBoostSlotsByGuildId: n,
            premiumSubscription: i,
            pausedAppliedGuildBoosts: l,
            fractionalPremiumState: s,
        } = e,
        a = to.A.getArticleURL(q.MVz.GUILD_BOOSTING_FAQ),
        r = i?.isPaused === !0 && s !== lb.xc.FP_SUB_PAUSED,
        o = t.some((e) => null == e.premiumGuildSubscription),
        d = r && l.length > 0,
        u = r ? d : t.some((e) => null != e.premiumGuildSubscription);
    return o || u
        ? (0, x.jsxs)("div", {
              className: gQ.i,
              children: [
                  (0, x.jsxs)("div", {
                      className: gQ.b,
                      children: [
                          (0, x.jsx)(eh.D, { variant: "heading-md/semibold", children: _.intl.string(_.t.W5rDjW) }),
                          (0, x.jsx)(V.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: _.intl.format(_.t.SpDz1x, { helpdeskArticle: a }),
                          }),
                      ],
                  }),
                  (0, x.jsx)(gH, {
                      guildBoostSlots: n,
                      premiumSubscription: i,
                      pausedAppliedGuildBoosts: l,
                      isPaused: r,
                  }),
                  (0, x.jsx)(gW, { guildBoostSlots: t, fractionalPremiumState: s }),
              ],
          })
        : null;
}
var gJ = n(917064),
    g$ = n(598259);
function g0() {
    return (0, x.jsxs)("div", {
        className: g$.iE,
        children: [
            (0, x.jsx)(eh.D, { variant: "heading-xl/normal", children: _.intl.string(_.t.IzKs3o) }),
            (0, x.jsx)("div", {
                className: g$.kR,
                children: gJ.s.map((e, t) => {
                    let n = e.icon;
                    return (0, x.jsxs)(
                        "div",
                        {
                            className: g$.Nr,
                            children: [
                                (0, x.jsx)(n, { className: g$.Kk }),
                                (0, x.jsx)(V.E, {
                                    className: g$.h_,
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
var g1 = n(232122),
    g2 = n(420469);
function g5() {
    let [e, t] = f.useState(null),
        [n, i] = f.useState(null);
    return (0, x.jsxs)("div", {
        className: g2.iE,
        children: [
            (0, x.jsx)(eh.D, { variant: "heading-xl/normal", children: _.intl.string(_.t.HPJ6Nj) }),
            (0, x.jsx)("ul", {
                className: g2.p_,
                children: g1.m.map((l, s) => {
                    let a = e === s,
                        r = n === s,
                        o = a || r ? "text-strong" : "text-muted";
                    return (0, x.jsxs)(
                        k.D,
                        {
                            tag: "li",
                            className: eB()(g2.Aw, { [g2.$K]: a }),
                            onClick: () => t((e) => (e === s ? null : s)),
                            onMouseEnter: () => i(s),
                            onMouseLeave: () => i(null),
                            children: [
                                (0, x.jsxs)("div", {
                                    className: g2.k7,
                                    children: [
                                        (0, x.jsx)(V.E, {
                                            className: g2.b1,
                                            color: o,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: l.getQuestion(),
                                        }),
                                        (0, x.jsx)(w.a, {
                                            size: "sm",
                                            color: B.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: g2.q4,
                                            style: { transform: a ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                a &&
                                    (0, x.jsx)(V.E, {
                                        className: g2.ZF,
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
var g3 = n(182859),
    g8 = n(853513),
    g4 = n(849744);
function g9() {
    let e = to.A.getArticleURL(q.MVz.GUILD_SUBSCRIPTIONS);
    return (0, x.jsxs)("div", {
        className: g4.wx,
        children: [
            (0, x.jsxs)("div", {
                className: g4.Qs,
                children: [
                    (0, x.jsxs)("div", {
                        className: g4.B5,
                        children: [
                            (0, x.jsx)("img", { alt: "", className: g4.F8, src: "/assets/263e4cc9043cab70.svg" }),
                            (0, x.jsx)(eh.D, {
                                variant: "heading-xl/normal",
                                children: _.intl.string(g8.default.hjvcLO),
                            }),
                        ],
                    }),
                    (0, x.jsx)(V.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: _.intl.format(_.t.TUHyoA, { helpdeskArticle: e }),
                    }),
                ],
            }),
            (0, x.jsx)(g3.A, {
                variant: "member",
                className: g4.iO,
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
var g7 = n(315629),
    g6 = n(397384);
function _e() {
    let e = (0, R.bG)([t3.default], () => t3.default.getCurrentUser());
    if (null == e || oP.Ay.hasFreeBoosts(e)) return null;
    let t = to.A.getArticleURL(q.MVz.GUILD_BOOSTING_FAQ);
    return (0, x.jsxs)(g7.h, {
        color: "nitro-pink",
        className: g6.vK,
        children: [
            (0, x.jsxs)("div", {
                className: g6.nw,
                children: [
                    (0, x.jsx)("img", { alt: "", className: g6.q3, src: gz }),
                    (0, x.jsxs)("div", {
                        className: g6.Tm,
                        children: [
                            (0, x.jsx)(V.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: _.intl.format(_.t.Idh1Vs, { count: lb.M4, boostCount: lb.M4 }),
                            }),
                            (0, x.jsxs)("div", {
                                className: g6.xv,
                                children: [
                                    (0, x.jsx)(oI.t, { className: g6.nE }),
                                    (0, x.jsx)(V.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: _.intl.format(_.t["6UAu+f"], {
                                            count: lb.M4,
                                            boostCount: lb.M4,
                                            helpdeskArticle: t,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, x.jsx)(eA.$, {
                variant: "expressive",
                size: "sm",
                icon: oI.t,
                text: _.intl.string(_.t["8x0jKT"]),
                onClick: gj.e,
            }),
        ],
    });
}
var _t = n(942300);
function _n() {
    let e = (0, R.bG)([cW.A], () => cW.A.affinities),
        t = (0, R.bG)([W.Ay], () => W.Ay.getFlattenedGuildIds()),
        n = f.useMemo(() => {
            let n = e.slice(0, 3).map((e) => e.guildId);
            for (let e = 0; e < t.length && n.length < 3; e++) {
                let i = t[e];
                n.includes(i) || n.push(i);
            }
            return n;
        }, [e, t]);
    return 0 === n.length
        ? null
        : (0, x.jsxs)("div", {
              className: _t.i,
              children: [
                  (0, x.jsx)(eh.D, { variant: "heading-md/semibold", children: _.intl.string(_.t.r90Wgo) }),
                  (0, x.jsx)("div", { className: _t.k, children: n.map((e) => (0, x.jsx)(gB, { guildId: e }, e)) }),
              ],
          });
}
var _i = n(901851);
function _l(e) {
    let { count: t, disabledReason: i } = e,
        l = to.A.getArticleURL(q.MVz.GUILD_BOOSTING_FAQ);
    return (0, x.jsxs)(g7.h, {
        color: "nitro-pink",
        className: _i.vK,
        children: [
            (0, x.jsxs)("div", {
                className: _i.nw,
                children: [
                    (0, x.jsxs)("div", {
                        className: _i.MD,
                        children: [
                            (0, x.jsx)("img", { alt: "", className: _i.F8, src: gz }),
                            (0, x.jsx)("div", {
                                className: eB()(_i.qS, "theme-dark"),
                                children: (0, x.jsx)("span", { className: _i.Vv, children: t }),
                            }),
                        ],
                    }),
                    (0, x.jsxs)("div", {
                        className: _i.Tm,
                        children: [
                            (0, x.jsx)(V.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: _.intl.format(_.t.KewnLu, { count: t, boostCount: t }),
                            }),
                            (0, x.jsxs)("div", {
                                className: _i.xv,
                                children: [
                                    (0, x.jsx)(oI.t, { className: _i.nE }),
                                    (0, x.jsx)(V.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: _.intl.format(_.t["6UAu+f"], {
                                            count: lb.M4,
                                            boostCount: lb.M4,
                                            helpdeskArticle: l,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, x.jsx)(gp.A, {
                shouldShow: null != i,
                text: i ?? "",
                "aria-label": i,
                children: (e) =>
                    (0, x.jsx)(eA.$, {
                        ...e,
                        variant: "primary",
                        size: "sm",
                        icon: cp._,
                        text: _.intl.string(_.t.BMx1iy),
                        disabled: null != i,
                        onClick: () => {
                            (0, N.openModalLazy)(async () => {
                                let { default: e } = await Promise.resolve().then(n.bind(n, 770101));
                                return (t) =>
                                    (0, x.jsx)(e, {
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
function _s(e) {
    let { premiumSubscription: t } = e,
        n = (0, R.bG)([cZ.A], () => cZ.A.boostSlots),
        i = f.useMemo(() => Object.values(n), [n]),
        l = (0, R.bG)([t3.default], () => t3.default.getCurrentUser()),
        s = (0, R.bG)([cW.A], () => cW.A.affinities),
        a = (0, R.bG)([W.Ay], () => W.Ay.getFlattenedGuildIds()),
        r = s.length > 0 || a.length > 0,
        o = f.useMemo(() => i.filter((e) => null != e.premiumGuildSubscription), [i]).length,
        d = (0, R.bG)([cf.A], () => cf.A.getCurrentUserAppliedBoosts()),
        { fractionalState: u } = (0, cb.A)({ forceFetch: !0 }),
        c = l?.isPremiumGroupMember(),
        g = t?.isPausedOrPausePending === !0 && u === lb.xc.NONE,
        m = f.useMemo(() => i.some((e) => null == e.premiumGuildSubscription && e.isAvailable()), [i]),
        h = g ? _.intl.string(_.t.mOWsF1) : m ? void 0 : _.intl.string(_.t.xr4m5B),
        A = f.useMemo(() => {
            if (null == t) return 0;
            let e = oP.Ay.getNumIncludedPremiumGuildSubscriptionSlots(t.planId);
            return 0 === e || e !== i.length ? 0 : Math.max(0, e - o);
        }, [t, i.length, o]);
    return (0, x.jsxs)("div", {
        className: gP.GO,
        children: [
            (0, x.jsx)(uS.kb, { className: gP.ek }),
            (0, x.jsx)(g9, {}),
            (0, x.jsx)(_e, {}),
            A > 0 && (0, x.jsx)(_l, { count: A, disabledReason: h }),
            c && (0, x.jsx)(cK.A, {}),
            !r && (0, x.jsx)(gA, {}),
            (0, x.jsxs)("div", {
                className: gP.C_,
                children: [
                    (0, x.jsx)(gq, {
                        guildBoostSlots: i,
                        guildBoostSlotsByGuildId: n,
                        premiumSubscription: t,
                        pausedAppliedGuildBoosts: d,
                        fractionalPremiumState: u,
                    }),
                    (0, x.jsx)(_n, {}),
                    (0, x.jsx)(gU.A, { hideHeading: !0, hideTier0: !0 }),
                    (0, x.jsx)(g0, {}),
                    (0, x.jsx)(g5, {}),
                ],
            }),
        ],
    });
}
var _a = n(752606);
let _r = (0, d.E2)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_SETTING, {
        Component: function () {
            let e = cx.useConfig({ location: "UserSettingsPremiumGuildSubscriptions" }).enabled;
            f.useEffect(() => {
                i8.h.wait(() => {
                    dw.hP(), dw.$o(), (0, cE.CD)(), (0, cT.zS)(null, null, q.tF5.DISCOVERY), (0, cE.tO)(!0);
                });
            }, []);
            let { hasFetchedSubscriptions: t, premiumSubscription: n } = (0, R.cf)([ua.A], () => ({
                    hasFetchedSubscriptions: ua.A.hasFetchedSubscriptions(),
                    premiumSubscription: ua.A.getPremiumTypeSubscription(),
                })),
                i = (0, cS.Y)(),
                l = (0, R.bG)([us.A], () => us.A.hasFetchedPaymentSources),
                s = (0, R.bG)([cf.A], () => cf.A.isFetchingCurrentUserAppliedBoosts),
                a = !t || !i || !l || s,
                [r, o] = f.useState(!1);
            return (a || r || o(!0), a && !r)
                ? (0, x.jsx)("div", { className: eB()(_a.kL, _a.Lq), children: (0, x.jsx)(dU.y, {}) })
                : (0, x.jsxs)("div", {
                      className: _a.kL,
                      children: [
                          (0, x.jsx)("div", { className: _a.Tp }),
                          (0, x.jsx)("div", {
                              className: _a.Qs,
                              children: e
                                  ? (0, x.jsx)(_s, { premiumSubscription: n })
                                  : (0, x.jsx)(gM, { premiumSubscription: n }),
                          }),
                      ],
                  });
        },
        useSearchTerms: () => [_.intl.string(_.t["+CbP2v"]), _.intl.string(_.t.Nn1lJy)],
    }),
    _o = (0, d.zZ)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_CATEGORY, { buildLayout: () => [_r] }),
    _d = (0, d.t_)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        useTitle: () => _.intl.string(_.t["+CbP2v"]),
        buildLayout: () => [_o],
    }),
    _u = (0, d.i4)(u.X.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(_.t["+CbP2v"]),
        icon: cp._,
        buildLayout: () => [_d],
    });
var _c = n(153659),
    _g = n(155984),
    __ = n(262077),
    _m = n(696986),
    _h = n(819411);
function _A(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, x.jsxs)("div", {
        children: [
            (0, x.jsx)(eh.D, { variant: "heading-md/bold", children: _.intl.string(_.t["KzCF/6"]) }),
            (0, x.jsx)(_m.h, { size: 4 }),
            (0, x.jsx)(V.E, { variant: "text-md/normal", className: _h.yV, children: _.intl.string(_.t["3D7qCu"]) }),
            (0, x.jsx)(_m.h, { size: 24 }),
            (0, x.jsxs)("div", {
                className: _h.Nr,
                children: [
                    (0, x.jsx)("img", { src: "/assets/5a420feed295b595.svg", alt: "", className: _h.RI }),
                    (0, x.jsxs)("div", {
                        className: _h.FS,
                        children: [
                            (0, x.jsx)(eh.D, {
                                variant: "heading-xl/semibold",
                                className: _h.wx,
                                children: _.intl.string(_.t["KzCF/6"]),
                            }),
                            (0, x.jsx)(V.E, {
                                variant: "text-md/normal",
                                className: _h.h_,
                                children: _.intl.format(_.t["m+pcOO"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, x.jsx)(eA.$, {
                        size: "sm",
                        variant: "overlay-primary",
                        text: _.intl.string(_.t["3a8Xxj"]),
                        onClick: t,
                    }),
                ],
            }),
        ],
    });
}
var _p = n(872351),
    _E = n(9113),
    _T = n(599941),
    _S = n(384684),
    _x = n(2242);
let _f = [];
var _b = n(912851),
    _N = n(369176);
let _C = (e) => {
    let { label: t, onClick: n, submitting: i } = e;
    return (0, x.jsx)(k.D, {
        onClick: i ? void 0 : n,
        className: _N.x6,
        children: (0, x.jsxs)("div", {
            className: _N.hQ,
            children: [
                i
                    ? (0, x.jsx)(dU.y, { type: dU.y.Type.PULSING_ELLIPSIS, className: _N.__invalid_spinner })
                    : (0, x.jsx)(V.E, { variant: "text-md/medium", className: _N.Pf, children: t }),
                (0, x.jsx)(w.a, { size: "md", color: "currentColor", className: _N.UE }),
            ],
        }),
    });
};
var _I = n(465932),
    _v = n(543767),
    _y = n(420139),
    _j = n(790284),
    _O = n(636194),
    _R = n(624456),
    _L = n(710144),
    _D = n(815332),
    _G = n(817649),
    _P = n(969389);
let _M = (e) => {
    let { transitionState: t, groupListing: n, listing: i, subscription: l, onClose: s } = e,
        a = (0, lx.GV)(),
        { analyticsLocations: r } = (0, iU.Ay)(ek.A.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL),
        {
            cancelSubscription: o,
            error: d,
            submitting: u,
        } = ((e) => {
            let [t, n] = f.useState(!1),
                [i, l] = f.useState(null);
            return {
                cancelSubscription: async (t) => {
                    try {
                        return n(!0), await dw.M2(t, e), !0;
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
        g = i.role_benefits.benefits.filter((e) => e.ref_type === _x.bN.CHANNEL),
        m = i.role_benefits.benefits.filter((e) => e.ref_type === _x.bN.INTANGIBLE),
        h = aC()(l.currentPeriodEnd).format("MMMM Do, YYYY"),
        A = _.intl.formatToPlainString(_.t.KsMRP5, {
            numChannels: g.length,
            numAdditionalBenefits: m.length,
            subscriptionEndDate: h,
        });
    return (0, x.jsx)(sP.Modal, {
        transitionState: t,
        "aria-labelledby": a,
        actions: [
            { text: _.intl.string(_.t.EP6EPb), variant: "secondary", onClick: s },
            { variant: "critical-primary", text: _.intl.string(_.t.F6lUDF), onClick: c, loading: u },
        ],
        title: _.intl.string(_.t.O6l5tM),
        subtitle: A,
        onClose: s,
        children: (0, x.jsxs)(L.B, {
            gap: 8,
            children: [
                null != d ? (0, x.jsx)(O.w, { type: "critical", children: d.message }) : null,
                (0, x.jsx)(_G.x, { listingId: i.id, guildId: n.guild_id, className: _P.P }),
            ],
        }),
    });
};
var _U = n(319225),
    _k = n(746080),
    _V = n(47685);
let _w = (e) => {
        let { label: t, value: n, showInfoIcon: i, infoIconTooltipText: l } = e;
        return (0, x.jsxs)("div", {
            className: _V.L0,
            children: [
                (0, x.jsxs)("div", {
                    className: _V.a5,
                    children: [
                        (0, x.jsx)(eh.D, { variant: "heading-deprecated-12/semibold", className: _V.HU, children: t }),
                        i &&
                            (0, x.jsx)(e1.m, {
                                text: l,
                                children: (0, x.jsx)(sf.m, { size: "xs", color: "currentColor", className: _V.Mo }),
                            }),
                    ],
                }),
                (0, x.jsx)(eh.D, { variant: "heading-xl/semibold", className: _V.sx, children: n }),
            ],
        });
    },
    _B = (e) => {
        let { subscription: t } = e,
            { analyticsLocations: n } = (0, iU.Ay)(),
            [i] = (0, _v.Kq)({
                subscriptionId: t.id,
                renewal: !0,
                analyticsLocations: n,
                analyticsLocation: ek.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
            }),
            l = (0, R.bG)([us.A], () => us.A.hasFetchedPaymentSources);
        return null != i && l
            ? (0, x.jsx)(_y.A, { subscription: t, currentInvoicePreview: i, dropdownClassName: _V.Nw })
            : (0, x.jsx)(dU.y, {});
    },
    _F = (e) => {
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
            : (0, x.jsx)(lR.D, {
                  label: _.intl.string(_.t["4neDM+"]),
                  children: (0, x.jsx)("div", {
                      className: _V.__invalid_rowButtons,
                      children: n
                          ? (0, x.jsx)(eA.$, {
                                variant: "primary",
                                text: _.intl.string(_.t.y3mAE4),
                                onClick: a,
                                loading: i,
                            })
                          : (0, x.jsxs)(x.Fragment, {
                                children: [
                                    !t && !l && (0, x.jsx)(_C, { label: _.intl.string(_.t.FRbWR8), onClick: r }),
                                    (0, x.jsx)(_C, { label: _.intl.string(_.t.Dx0lF7), onClick: s }),
                                ],
                            }),
                  }),
              });
    },
    _z = (e) => {
        let { subscription: t } = e,
            {
                listing: n,
                groupListing: i,
                guild: l,
                expanded: s,
                handleToggleExpanded: a,
                subscriptionInfo: r,
            } = (function (e) {
                let t = (0, _R.M)(e),
                    n = (0, R.bG)([_O.A], () => _O.A.getSubscriptionListingForPlan(t)),
                    i = (0, R.bG)([_O.A], () =>
                        null != n ? _O.A.getSubscriptionGroupListingForSubscriptionListing(n.id) : null,
                    ),
                    l = (0, R.bG)([K.A], () => K.A.getGuild(i?.guild_id)),
                    [s, a] = f.useState(!1),
                    { fetchSubscriptionsSettings: r } = (0, _T.XE)();
                f.useEffect(() => {
                    s && null != l && null == _O.A.getSubscriptionSettings(l.id) && r(l.id);
                }, [s, l, r]);
                let o =
                    null == n
                        ? void 0
                        : (function (e) {
                              let { subscription: t } = e,
                                  n = aC()(t.currentPeriodEnd).format("M/D/YY"),
                                  i = null != t.price ? (0, dz.$g)(t.price, t.currency) : "",
                                  l = aC()(t.createdAt).format("M/D/YY"),
                                  s = t.status === q.Dmq.CANCELED,
                                  a = t.status === q.Dmq.PAST_DUE,
                                  r = t.hasActiveTrial;
                              return {
                                  memberSince: l,
                                  nextRenewalDate: n,
                                  nextRenewalLabel: s ? _.intl.string(_.t.UAfot2) : _.intl.string(_.t.CVjLcM),
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
            [o, d] = f.useState(!1),
            c = (0, lx.GV)(),
            { analyticsLocations: g } = (0, iU.Ay)(),
            { shouldHideGuildPurchaseEntryPoints: m } = (0, _I.MH)(l?.id),
            h = t?.isPurchasedViaAppleGeneric;
        if (null == i || null == n || null == r) return null;
        let A = async () => {
                try {
                    d(!0),
                        await dw.QP(t, g),
                        (0, _U.E)({ title: _.intl.string(_.t.oPV2cy), body: _.intl.string(_.t.DdRizV) });
                } finally {
                    d(!1);
                }
            },
            {
                isCancelled: p,
                isPastDue: E,
                subscriptionPrice: T,
                memberSince: S,
                nextRenewalDate: b,
                nextRenewalLabel: C,
                isTrial: I,
            } = r,
            v = n.soft_deleted || null == l || h;
        return (0, x.jsxs)("div", {
            className: _V.kL,
            children: [
                (0, x.jsx)(_L.A, {
                    onClick: a,
                    className: _V.N1,
                    children: (e) => {
                        let { areaRef: t, handleStopPropagation: i } = e;
                        return (0, x.jsxs)(x.Fragment, {
                            children: [
                                null != l && (0, x.jsx)(c6.Ay, { guild: l, active: !0, size: c6.Ay.Sizes.MEDIUM }),
                                (0, x.jsxs)("div", {
                                    className: _V.if,
                                    children: [
                                        (0, x.jsx)(V.E, {
                                            variant: "text-md/medium",
                                            className: _V.J5,
                                            children: null != l ? l.name : _.intl.string(_.t["He+cmd"]),
                                        }),
                                        (0, x.jsxs)("div", {
                                            className: _V.xp,
                                            children: [
                                                (0, x.jsx)(V.E, {
                                                    variant: "text-sm/normal",
                                                    className: _V.KR,
                                                    children: n.name,
                                                }),
                                                p
                                                    ? (0, x.jsx)(i6.Lp, { text: _.intl.string(_.t["7uFZGt"]) })
                                                    : I
                                                      ? (0, x.jsx)(i6.Lp, {
                                                            text: _.intl.string(_.t["6anton"]),
                                                            color: B.A.unsafe_rawColors.BRAND_500.css,
                                                        })
                                                      : E
                                                        ? (0, x.jsx)(e1.m, {
                                                              text: _.intl.string(_.t.eSuJE2),
                                                              children: (0, x.jsx)("div", {
                                                                  children: (0, x.jsx)(i6.Lp, {
                                                                      className: _V.qc,
                                                                      text: _.intl.string(_.t.NrRwIl),
                                                                      color: B.A.unsafe_rawColors.YELLOW_300.css,
                                                                  }),
                                                              }),
                                                          })
                                                        : null,
                                                h
                                                    ? (0, x.jsx)(e1.m, {
                                                          text: _.intl.string(_.t.nv1IqK),
                                                          children: (0, x.jsx)("div", {
                                                              children: (0, x.jsx)(i6.Lp, {
                                                                  text: _.intl.string(_.t["sBl3X/"]),
                                                                  color: B.A.colors.BACKGROUND_MOD_MUTED.css,
                                                              }),
                                                          }),
                                                      })
                                                    : null,
                                            ],
                                        }),
                                    ],
                                }),
                                (0, x.jsx)(k.D, {
                                    onClick: i(a),
                                    "aria-label": _.intl.string(_.t.e5eQOy),
                                    "aria-controls": c,
                                    "aria-expanded": s,
                                    focusProps: { ringTarget: t },
                                    children: (0, x.jsx)(w.a, {
                                        size: "md",
                                        color: "currentColor",
                                        className: eB()(_V.D6, { [_V.S7]: s }),
                                    }),
                                }),
                            ],
                        });
                    },
                }),
                s
                    ? (0, x.jsxs)("div", {
                          id: c,
                          children: [
                              (0, x.jsx)("div", { className: _V.yF }),
                              (0, x.jsx)(_D.A, { groupListingId: i.id, subscription: t, className: _V.kE }),
                              (0, x.jsxs)("div", {
                                  className: _V.Zx,
                                  children: [
                                      (0, x.jsx)(_w, { label: C, value: b }),
                                      (0, x.jsx)(_w, {
                                          label: _.intl.string(_.t.dltUMH),
                                          value: T,
                                          showInfoIcon: I,
                                          infoIconTooltipText: I ? _.intl.string(_.t["/q6fpa"]) : void 0,
                                      }),
                                      (0, x.jsx)(_w, { label: _.intl.string(_.t.AOcwWB), value: S }),
                                  ],
                              }),
                              (0, x.jsx)(_m.h, { size: 16 }),
                              !p &&
                                  !h &&
                                  (0, x.jsx)(lR.D, {
                                      label: _.intl.string(_.t.wmMFvA),
                                      children: (0, x.jsx)(_B, { subscription: t }),
                                  }),
                              !v &&
                                  (0, x.jsx)(_F, {
                                      isTrial: I,
                                      isCancelled: p,
                                      isResubscribing: o,
                                      shouldHideRoleSubscriptionEntryPoints: m,
                                      onCancelSubscriptionClick: () => {
                                          if (null != l) {
                                              var e;
                                              (e = { groupListing: i, listing: n, subscription: t }),
                                                  (0, N.openModal)((t) => (0, x.jsx)(_M, { ...t, ...e }));
                                          }
                                      },
                                      onChangePlanClick: () => {
                                          null != l &&
                                              ((0, lL.pX)(q.BVt.CHANNEL(l.id, _k.VV.ROLE_SUBSCRIPTIONS)),
                                              (0, lE.default)(),
                                              _b.A.show(
                                                  q.kqX.BACK_TO_PREVIOUS_SCREEN,
                                                  void 0,
                                                  _.intl.string(_.t.DvbaM4),
                                                  () => {
                                                      _j.A.setState({ subsection: iy.nR }),
                                                          (0, ej.openUserSettings)(u.X.SUBSCRIPTIONS_PANEL);
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
var _X = n(170272);
let _Y = (e) => {
    let { onGoBack: t } = e,
        n = (function () {
            let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t =
                    (0, R.bG)([_S.A], () =>
                        (function () {
                            let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [_S.A],
                                t = e.getGuildIdsWithPurchasableRoles(),
                                n = !1;
                            return (t.forEach((t) => {
                                e.getUserSubscriptionRoles(t).size > 0 && (n = !0);
                            }),
                            n)
                                ? _x.M_.SUBSCRIBED
                                : 0 === t.size
                                  ? _x.M_.NONE
                                  : _x.M_.IN_SUBSCRIPTION_SERVER;
                        })([_S.A]),
                    ) === _x.M_.SUBSCRIBED,
                n = (0, R.bG)([ua.A], () => ua.A.getActiveGuildSubscriptions()),
                i = f.useRef(!1);
            return (
                f.useEffect(() => {
                    (function (e) {
                        let { ensureFresh: t, hasFetched: n, hasRoleSubscriptions: i } = e,
                            l = ua.A.getActiveGuildSubscriptions();
                        return (
                            ((l?.length ?? 0) === 0 && !!i) || (!!t && !n) || (!n && !ua.A.hasFetchedSubscriptions())
                        );
                    })({ ensureFresh: e, hasRoleSubscriptions: t, hasFetched: i.current }) &&
                        ((i.current = !0), dw.hP());
                }, [e, t]),
                n ?? _f
            );
        })(),
        { loading: i } = (0, _T.eb)(n);
    return ((0, _E.A)(dH.Fr ? "role-subscriptions-user-setting" : void 0), i)
        ? (0, x.jsx)(dU.y, {})
        : 0 === n.length
          ? null
          : (0, x.jsxs)("div", {
                children: [
                    (0, x.jsx)(eA.$, { text: _.intl.string(_.t.hqyhKQ), icon: _p.z, variant: "secondary", onClick: t }),
                    (0, x.jsx)(_m.h, { size: 10 }),
                    (0, x.jsx)(nr.n, {
                        label: _.intl.string(_.t["KzCF/6"]),
                        description: _.intl.string(_.t["Y+ucR7"]),
                        children: (0, x.jsx)("div", {
                            className: _X.A,
                            children: n.map((e) => (0, x.jsx)(_z, { subscription: e }, e.id)),
                        }),
                    }),
                ],
            });
};
var _H = n(327479),
    _K = n(334335);
function _W(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, x.jsxs)("div", {
        children: [
            (0, x.jsx)(eh.D, { variant: "heading-md/bold", children: _.intl.string(_.t["48ywCu"]) }),
            (0, x.jsx)(_m.h, { size: 4 }),
            (0, x.jsx)(V.E, { variant: "text-md/normal", className: _K.yV, children: _.intl.string(_.t.VWxmSo) }),
            (0, x.jsx)(_m.h, { size: 24 }),
            (0, x.jsxs)("div", {
                className: _K.Nr,
                children: [
                    (0, x.jsx)("img", { src: "/assets/d6bcd13fb6c85425.svg", alt: "", className: _K._e }),
                    (0, x.jsxs)("div", {
                        className: _K.FS,
                        children: [
                            (0, x.jsx)(eh.D, {
                                variant: "heading-xl/semibold",
                                className: _K.wx,
                                children: _.intl.string(_.t["48ywCu"]),
                            }),
                            (0, x.jsx)(V.E, {
                                variant: "text-md/normal",
                                className: _K.h_,
                                children: _.intl.format(_.t["/esXLj"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, x.jsx)(_H.A, { onClick: t, text: _.intl.string(_.t["z5YcJ+"]) }),
                ],
            }),
        ],
    });
}
var _Z = n(548411),
    _Q = n(417098),
    _q = n(143582),
    _J = n(169820),
    _$ = n(920087);
function _0(e) {
    let { className: t, header: n, headerClassName: i, children: l } = e,
        s = f.useMemo(() => {
            let e = !1;
            return (
                f.Children.forEach(l, (t) => {
                    null != t && (e = !0);
                }),
                e
            );
        }, [l]);
    return (0, x.jsxs)("div", {
        className: eB()(_$.iE, t),
        children: [
            (0, x.jsx)("div", { className: eB()(_$.wx, i), children: n }),
            s && (0, x.jsx)("div", { className: _$.Qs, children: l }),
        ],
    });
}
var _1 = n(885996),
    _2 = n(144165),
    _5 = n(664121),
    _3 = n(950305),
    _8 = n(943775),
    _4 = n(123791),
    _9 = n(900797),
    _7 = n(632510);
let _6 = f.createContext({ isOpen: !1, toggleOpen: () => {} });
function me(e) {
    let { children: t } = e,
        [n, i] = f.useReducer((e) => !e, !1),
        l = f.useMemo(() => ({ isOpen: n, toggleOpen: i }), [n]);
    return (0, x.jsx)(_6.Provider, { value: l, children: t(n) });
}
me.Toggle = function (e) {
    let { className: t, text: n } = e,
        { isOpen: i, toggleOpen: l } = f.useContext(_6),
        s = i ? _9.t : w.a,
        a = null != n ? n : i ? _.intl.string(_.t.fgq1gs) : _.intl.string(_.t.XJuakA);
    return (0, x.jsxs)(k.D, {
        className: eB()(_7.L, t),
        onClick: l,
        children: [
            (0, x.jsx)(V.E, { variant: "heading-sm/semibold", tag: "div", color: "currentColor", children: a }),
            (0, x.jsx)(s, { size: "sm", color: "currentColor" }),
        ],
    });
};
var mt = n(627363),
    mn = n(243217),
    mi = n(328968),
    ml = n(163437),
    ms = n(3432);
function ma(e) {
    return e.toLocaleDateString(void 0, { dateStyle: "long" });
}
var mr = n(184451),
    mo = (((l = {})[(l.LOADING = 0)] = "LOADING"), (l[(l.DONE = 1)] = "DONE"), (l[(l.ERROR = 2)] = "ERROR"), l);
function md(e) {
    let { subscription: t, navigateToSwitchPlan: n, loadingState: i } = e,
        l = t.metadata?.application_subscription_guild_id,
        { renewalMutations: s, planId: a } = t,
        {
            appId: r,
            plan: o,
            storeListing: d,
            isGuildSubscription: u,
            subscriptionForGuild: c,
            sku: g,
            isCancelled: m,
            isOrphanedGuildSubscription: h,
            renewalPlan: A,
        } = (0, R.cf)([u3.A, u8.A, mi.A, K.A], () => {
            let e,
                n = u3.A.get(a),
                i = null != n ? u8.A.get(n.skuId) : void 0,
                r = i?.applicationId,
                o = null != n ? mi.A.getForSKU(n.skuId) : null,
                d = null != o && (0, ml.PJ)(o.skuFlags),
                u = d && null != l ? K.A.getGuild(l) : void 0,
                c = (0, ml.Uo)(t, i),
                g = d && null != l && null == u;
            if (!1 === c && null != s && s.items.length > 0) {
                let t = s.items[0];
                e = u3.A.get(t.planId) ?? void 0;
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
        { data: p } = (0, mt.YY)(r),
        E = f.useMemo(() => (null != p ? (0, _8.A)(p, 100) : null), [p]),
        T = g?.deleted ?? !1,
        S = null != g && (0, ml.Se)(g),
        b = t.status === q.Dmq.PAST_DUE,
        { analyticsLocations: N } = (0, iU.Ay)(),
        [C] = (0, _v.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: N,
            analyticsLocation: ek.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        I = ma(t.currentPeriodEnd),
        v = 0 === i;
    return (0, x.jsxs)(_0, {
        headerClassName: mr.dL,
        header:
            !1 === v
                ? (0, x.jsxs)(x.Fragment, {
                      children: [
                          (0, x.jsxs)("div", {
                              className: mr.VW,
                              children: [
                                  null != E &&
                                      (0, x.jsx)(_2._, { src: E.href, imageClassName: mr.Z2, width: 40, height: 40 }),
                                  (0, x.jsxs)("div", {
                                      className: mr.aF,
                                      children: [
                                          (0, x.jsx)(eh.D, {
                                              variant: "heading-md/semibold",
                                              lineClamp: 1,
                                              children: p?.name ?? _.intl.string(_.t["7kqy7W"]),
                                          }),
                                          (0, x.jsx)(V.E, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              lineClamp: 1,
                                              children: o?.name ?? _.intl.string(_.t.sqkbMK),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, x.jsx)("div", {
                              className: mr.Pz,
                              children:
                                  null != p &&
                                  null != d &&
                                  null != g &&
                                  (0, x.jsx)(mm, {
                                      subscription: t,
                                      app: p,
                                      guild: c,
                                      sku: g,
                                      storeListing: d,
                                      isCancelled: m,
                                      isOrphanedGuildSubscription: h,
                                      navigateToSwitchPlan: n,
                                      renewalSkuId: A?.skuId,
                                  }),
                          }),
                      ],
                  })
                : (0, x.jsx)(dU.y, { type: dU.t.PULSING_ELLIPSIS }),
        children: [
            m &&
                (0, x.jsx)(m_, {
                    type: "warning",
                    title: S
                        ? _.intl.formatToPlainString(_.t.QOnM1y, { subscriptionPeriodEnd: I })
                        : _.intl.formatToPlainString(_.t.HOaZu8, { subscriptionPeriodEnd: I }),
                }),
            !m && h && (0, x.jsx)(m_, { type: "warning", title: _.intl.string(_.t.SmSP8Q) }),
            b && (0, x.jsx)(m_, { type: "danger", title: _.intl.string(_.t.fvOqBo) }),
            (0, x.jsxs)("div", {
                className: mr.zH,
                children: [
                    (0, x.jsx)(mg, {
                        title: _.intl.string(_.t["5D/KEH"]),
                        content: u
                            ? (0, x.jsxs)(x.Fragment, {
                                  children: [
                                      (0, x.jsxs)("span", {
                                          className: mr.yW,
                                          children: [(0, x.jsx)(_5.R, { size: "xs" }), _.intl.string(_.t.QjL3vn)],
                                      }),
                                      null != c &&
                                          (0, x.jsxs)("span", {
                                              className: mr._t,
                                              children: [
                                                  (0, x.jsx)(V.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: _.intl.format(_.t["7ZD8p1"], { guildName: c.name }),
                                                  }),
                                                  (0, x.jsx)(c6.Ay, { guild: c, size: c6.Ay.Sizes.MINI }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, x.jsxs)("span", {
                                  className: mr.yW,
                                  children: [(0, x.jsx)(_3.n, { size: "xs" }), _.intl.string(_.t["6anEVv"])],
                              }),
                    }),
                    (0, x.jsx)(mu, { invoicePreview: C, subscriptionPlan: o }),
                    (0, x.jsx)(mg, {
                        title: _.intl.string(_.t.dnUzb6),
                        content: ma(t.createdAt ?? t.currentPeriodStart),
                    }),
                    (0, x.jsx)(mc, { isCancelled: m, subscriptionPeriodEnd: I, renewalPlan: A }),
                ],
            }),
            (0, x.jsx)(mA, {
                subscription: t,
                currentInvoicePreview: C,
                loadingState: i,
                isDeleted: T,
                isCancelled: m,
            }),
            null != p &&
                d?.benefits != null &&
                d.benefits.length > 0 &&
                (0, x.jsx)(mh, { appId: p.id, listingBenefits: d.benefits }),
        ],
    });
}
function mu(e) {
    let { subscriptionPlan: t, invoicePreview: n } = e;
    if (null == t) return (0, x.jsx)(mg, { title: _.intl.string(_.t.KI7ERx), content: "" });
    let i = (0, dz.CE)((0, dz.$g)(t.price, t.currency), t.interval, t.intervalCount),
        l = n?.findInvoiceItemByPlanId(t.id);
    if (null == l) return (0, x.jsx)(mg, { title: _.intl.string(_.t.KI7ERx), content: i });
    let s = (0, dz.CE)((0, dz.$g)(l.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, x.jsx)(mg, {
        title: _.intl.string(_.t.KI7ERx),
        content: (0, x.jsxs)(x.Fragment, {
            children: [
                (0, x.jsx)(V.E, { variant: "text-sm/semibold", children: s }),
                s !== i &&
                    (0, x.jsx)(e1.m, {
                        text: _.intl.format(_.t["6DoE57"], { listPrice: i }),
                        position: "bottom",
                        children: (0, x.jsx)(V.E, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: (0, x.jsx)("s", { children: i }),
                        }),
                    }),
            ],
        }),
    });
}
function mc(e) {
    let { isCancelled: t, subscriptionPeriodEnd: n, renewalPlan: i } = e;
    if (null != i) {
        let e = (0, dz.CE)((0, dz.$g)(i.price, i.currency), i.interval, i.intervalCount);
        return (0, x.jsx)(mg, {
            title: _.intl.string(_.t.hIhAM3),
            content: (0, x.jsxs)(x.Fragment, {
                children: [
                    (0, x.jsx)(V.E, { variant: "text-sm/medium", children: n }),
                    (0, x.jsx)(V.E, {
                        variant: "text-sm/normal",
                        children: _.intl.format(_.t.MCLbvj, { planName: i.name, price: e }),
                    }),
                ],
            }),
        });
    }
    return (0, x.jsx)(mg, { title: t ? _.intl.string(_.t.enxcAl) : _.intl.string(_.t["Ms+6Zq"]), content: n });
}
function mg(e) {
    let { title: t, content: n } = e;
    return (0, x.jsxs)("div", {
        className: mr.nM,
        children: [
            (0, x.jsx)(V.E, { variant: "text-sm/medium", children: t }),
            (0, x.jsx)(V.E, { variant: "text-sm/medium", className: mr.u4, children: n }),
        ],
    });
}
function m_(e) {
    let { type: t, title: n } = e;
    return (0, x.jsx)(tr.p, {
        messageType: "warning" === t ? tr.Y.WARNING : tr.Y.ERROR,
        className: mr.Xm,
        children: (0, x.jsx)(V.E, { variant: "text-sm/normal", children: n }),
    });
}
function mm(e) {
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
        c = (0, ml.Se)(l),
        { analyticsLocations: g } = (0, iU.Ay)(),
        [m, h] = f.useState(!1),
        A = (0, _4.C)(t.id),
        p = (0, R.bG)([u8.A], () => u8.A.getParentSKU(i.skuId), [i.skuId]),
        E = f.useMemo(() => {
            var e, t;
            let n;
            return null == p
                ? []
                : ((e = i.id),
                  (t = A.subscriptions),
                  (n = new Set(p.bundledSkuIds)),
                  t.filter((t) => t.id !== e && n.has(t.skuId)));
        }, [i.id, A, p]),
        T = 0 !== E.length,
        S = async () => {
            try {
                h(!0);
                let { subscription: e } = await (0, dw.QP)(s, g);
                if (null == e) return;
                (0, N.openModalLazy)(async () => {
                    let { default: t } = await n.e("52396").then(n.bind(n, 115623));
                    return (n) => (0, x.jsx)(t, { ...n, storeListing: i, subscription: mn.A.createFromServer(e) });
                });
            } finally {
                h(!1);
            }
        };
    return (0, x.jsxs)("div", {
        className: mr.fw,
        children: [
            c || (a && r)
                ? null
                : a
                  ? (0, x.jsx)(eA.$, {
                        variant: "secondary",
                        size: "sm",
                        text: _.intl.string(_.t.QtMnkW),
                        onClick: S,
                        loading: m,
                    })
                  : (0, x.jsx)(eA.$, {
                        variant: "secondary",
                        size: "sm",
                        text: _.intl.string(_.t["E8G/tr"]),
                        onClick: () => {
                            (0, N.openModalLazy)(async () => {
                                let { default: e } = await n.e("22800").then(n.bind(n, 301139));
                                return (n) =>
                                    (0, x.jsx)(e, { ...n, application: t, storeListing: i, subscription: s, guild: o });
                            });
                        },
                    }),
            T &&
                null != p &&
                !1 === a &&
                !1 === r &&
                (0, x.jsx)(eA.$, {
                    variant: "primary",
                    size: "sm",
                    text: _.intl.string(_.t.R74ZBR),
                    onClick: () => {
                        u({
                            currentSubscription: s,
                            alternativeListings: E,
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
function mh(e) {
    let { appId: t, listingBenefits: n } = e;
    return (0, x.jsx)(me, {
        children: (e) =>
            (0, x.jsxs)("div", {
                className: mr.PX,
                children: [
                    (0, x.jsxs)("div", {
                        className: mr.wV,
                        children: [
                            e && (0, x.jsx)(V.E, { variant: "text-sm/semibold", children: _.intl.string(_.t.mORL67) }),
                            (0, x.jsx)(me.Toggle, {
                                className: mr.Bh,
                                text: e ? _.intl.string(_.t.gsbFAw) : _.intl.string(_.t.IwjfxV),
                            }),
                        ],
                    }),
                    e
                        ? n.map((e) => {
                              let { id: n, name: i, description: l, icon: s } = e;
                              return (0, x.jsx)(_1.FY, { header: i, icon: (0, ms.N)(t, s), description: l }, n);
                          })
                        : null,
                ],
            }),
    });
}
function mA(e) {
    let { subscription: t, currentInvoicePreview: n, loadingState: i, isDeleted: l, isCancelled: s } = e;
    return null == n
        ? null
        : 0 === i
          ? (0, x.jsx)("div", {
                className: mr.Ji,
                children: (0, x.jsx)(lR.D, {
                    label: _.intl.string(_.t.azZaZa),
                    children: (0, x.jsx)(dU.y, { type: dU.t.PULSING_ELLIPSIS }),
                }),
            })
          : 2 === i
            ? (0, x.jsx)("div", {
                  className: mr.Ji,
                  children: (0, x.jsxs)(_Q.$T, {
                      color: _Q.Hv.DANGER,
                      style: { borderRadius: 0 },
                      children: [
                          _.intl.format(_.t.IIHUUF, { subscriptionId: t.id }),
                          (0, x.jsx)("br", {}),
                          _.intl.format(_.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                      ],
                  }),
              })
            : (0, x.jsx)("div", {
                  className: mr.Ji,
                  children: (0, x.jsx)(lR.D, {
                      label: _.intl.string(_.t.azZaZa),
                      children: (0, x.jsx)(_y.A, { subscription: t, currentInvoicePreview: n, disabled: l || s }),
                  }),
              });
}
var mp = (((s = {}).HOME = "HOME"), (s.SWITCH_APP_PLANS = "SWITCH_APP_PLANS"), s);
n(938796);
var mE = n(38405);
let mT = (0, R.UT)(u3.A, {
    getQueryId: q.fic.SUBSCRIPTION_PLANS,
    get: (e) => {
        if (null == e) return null;
        let t = u3.A.getForSKU(e);
        return 0 === t.length ? null : t;
    },
    load: (e) => (
        null == e && mE.A.addBreadcrumb({ message: "Error loading subscription plans: skuId is null" }),
        null != e ? (0, cT.ur)(e).then(() => {}) : Promise.reject()
    ),
});
var mS = n(240248),
    mx = n(237218),
    mf = n(988325);
function mb(e) {
    let { children: t, lineClamp: n = 2, ...i } = e,
        [l, s] = f.useState(!1),
        [a, r] = f.useState(null),
        o =
            null != a &&
            (0, x.jsx)("button", {
                className: mf.x6,
                onClick: () => s((e) => !e),
                children: (0, x.jsxs)(V.E, {
                    className: mf.B0,
                    variant: "text-sm/medium",
                    color: "text-brand",
                    children: [
                        l ? _.intl.string(_.t["JQX/Pb"]) : _.intl.string(_.t.Fbrd8J),
                        l
                            ? (0, x.jsx)(_9.t, { color: B.A.colors.TEXT_BRAND, size: "xs" })
                            : (0, x.jsx)(w.a, { color: B.A.colors.TEXT_BRAND, size: "xs" }),
                    ],
                }),
            }),
        [d, u] = f.useState(null),
        c = f.useCallback(() => {
            if (null == d) return;
            let { scrollHeight: e, clientHeight: t } = d;
            e > t && r({ truncatedHeight: t, expandedHeight: e });
        }, [d]);
    f.useEffect(() => {
        requestAnimationFrame(c);
    }, [c, t, n]);
    let g = "auto";
    return (
        null != a && (g = l ? `${a.expandedHeight}px` : `${a.truncatedHeight}px`),
        (0, x.jsxs)("div", {
            children: [
                (0, x.jsx)(V.E, {
                    ...i,
                    className: mf.Qs,
                    lineClamp: l ? void 0 : n,
                    ref: u,
                    style: { height: g },
                    children: t,
                }),
                o,
            ],
        })
    );
}
var mN = n(827991);
function mC(e) {
    let { cta: t, storeListing: n, className: i } = e,
        { applicationId: l, benefits: s, description: a } = n,
        r = f.useMemo(() => (null == n.thumbnail ? null : (0, mx.t)(l, n.thumbnail, 256)), [l, n.thumbnail]),
        { data: o } = mT(n.skuId),
        d = f.useMemo(() => {
            if (null == o || 0 === o.length) return null;
            let e = o[0];
            return (0, dz._J)(e);
        }, [o]);
    return null == d
        ? null
        : (0, x.jsxs)(_0, {
              className: eB()(mN.iE, i),
              header: (0, x.jsxs)(x.Fragment, {
                  children: [
                      (0, x.jsxs)("div", {
                          className: mN.qd,
                          children: [
                              null != r &&
                                  (0, x.jsx)(_2._, { src: r.href, imageClassName: mN.rW, width: 48, height: 48 }),
                              (0, x.jsxs)("div", {
                                  children: [
                                      (0, x.jsx)(eh.D, { variant: "heading-md/bold", children: n.summary }),
                                      (0, x.jsx)(V.E, { variant: "text-md/medium", children: d }),
                                  ],
                              }),
                          ],
                      }),
                      t,
                  ],
              }),
              children: [
                  !(0, mS.uJ)(a) &&
                      (0, x.jsx)("div", {
                          className: mN.h_,
                          children: (0, x.jsx)(mb, { variant: "text-sm/medium", children: a }),
                      }),
                  null != s &&
                      s.length > 0 &&
                      (0, x.jsx)("div", {
                          className: mN.PX,
                          children: s.map((e) => {
                              let { id: t, name: n, description: i, icon: s } = e;
                              return (0, x.jsx)(_1.FY, { header: n, icon: (0, ms.N)(l, s), description: i }, t);
                          }),
                      }),
              ],
          });
}
var mI = n(185438),
    mv = n(386011);
function my(e) {
    let {
            app: t,
            currentSubscription: n,
            currentListing: i,
            alternativeListings: l,
            navigateToHome: s,
            subscriptionGroup: a,
            renewalSkuId: r,
        } = e,
        o = (0, _8.A)(t, 100),
        d = (0, ml.PJ)(a.flags),
        u = d ? _5.R : _3.n,
        c = d ? _.intl.string(_.t["46YF2D"]) : _.intl.string(_.t.fFyGiA),
        g = n.metadata?.application_subscription_guild_id,
        m = (0, R.bG)([K.A], () => (d && null != g ? K.A.getGuild(g) : void 0), [g, d]),
        h = (0, R.bG)([u8.A], () => {
            if (null != r) return u8.A.get(r);
        }, [r]),
        A = ma(n.currentPeriodEnd);
    return (0, x.jsxs)("div", {
        children: [
            (0, x.jsxs)("div", {
                className: mv.wx,
                children: [
                    null != o && (0, x.jsx)(_2._, { src: o.href, imageClassName: mv.Z2, width: 48, height: 48 }),
                    (0, x.jsxs)("div", {
                        children: [
                            (0, x.jsx)(eh.D, { variant: "heading-xl/semibold", children: t.name }),
                            (0, x.jsxs)("div", {
                                className: mv.p4,
                                children: [
                                    (0, x.jsxs)(eh.D, {
                                        variant: "heading-md/normal",
                                        className: mv.N4,
                                        children: [(0, x.jsx)(u, { size: "xs", color: "currentColor" }), " ", c],
                                    }),
                                    null != m &&
                                        (0, x.jsxs)(x.Fragment, {
                                            children: [
                                                (0, x.jsx)(V.E, { variant: "text-md/normal", children: "•" }),
                                                (0, x.jsxs)("span", {
                                                    className: mv.vP,
                                                    children: [
                                                        (0, x.jsx)(c6.Ay, { guild: m, size: c6.Ay.Sizes.SMOL }),
                                                        (0, x.jsx)(eh.D, {
                                                            variant: "heading-md/semibold",
                                                            color: "text-muted",
                                                            children: _.intl.format(_.t["7ZD8p1"], {
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
            (0, x.jsx)(me, {
                children: (e) =>
                    (0, x.jsxs)("div", {
                        className: mv._B,
                        children: [
                            (0, x.jsx)(V.E, { variant: "text-md/normal", children: _.intl.string(_.t["goe+hk"]) }),
                            e &&
                                (0, x.jsxs)(x.Fragment, {
                                    children: [
                                        (0, x.jsx)(V.E, {
                                            variant: "text-md/normal",
                                            children: _.intl.format(_.t["Q8qJ+5"], {}),
                                        }),
                                        (0, x.jsx)(V.E, {
                                            variant: "text-md/normal",
                                            children: _.intl.format(_.t.sqowYz, {}),
                                        }),
                                    ],
                                }),
                            (0, x.jsx)(me.Toggle, {
                                text: e ? _.intl.string(_.t["1Rkq/E"]) : _.intl.string(_.t.WsTHkY),
                            }),
                        ],
                    }),
            }),
            (0, x.jsxs)("div", {
                className: mv.x0,
                children: [
                    (0, x.jsx)(mC, {
                        storeListing: i,
                        className: mv.o3,
                        cta: (0, x.jsxs)("div", {
                            className: mv.cJ,
                            children: [
                                (0, x.jsx)(V.E, {
                                    variant: "eyebrow",
                                    color: "text-brand",
                                    children: _.intl.string(_.t.fHIpOY),
                                }),
                                null != h &&
                                    (0, x.jsx)(V.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: _.intl.format(_.t["OQk+jr"], { endDate: A }),
                                    }),
                            ],
                        }),
                    }),
                    l.map((e) =>
                        e.skuId === r
                            ? (0, x.jsx)(
                                  mC,
                                  {
                                      storeListing: e,
                                      cta: (0, x.jsx)(V.E, {
                                          variant: "text-sm/semibold",
                                          color: "text-subtle",
                                          children: _.intl.format(_.t.nn88hB, { startDate: A }),
                                      }),
                                  },
                                  e.id,
                              )
                            : (0, x.jsx)(mj, { storeListing: e, guildId: g, navigateToHome: s }, e.id),
                    ),
                ],
            }),
        ],
    });
}
function mj(e) {
    let { storeListing: t, guildId: n, navigateToHome: i } = e,
        { openModal: l } = (0, mI.A)({
            analyticsLocation: q.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: n,
            disableGuildSelector: !0,
            onComplete: i,
        });
    return (0, x.jsx)(mC, {
        storeListing: t,
        cta: (0, x.jsx)(eA.$, { variant: "primary", size: "sm", text: _.intl.string(_.t["+KwmBt"]), onClick: l }),
    });
}
class mO extends f.PureComponent {
    state = { hasError: !1 };
    static getDerivedStateFromError(e) {
        return { hasError: !0 };
    }
    render() {
        return this.state.hasError
            ? (0, x.jsxs)(_Q.$T, {
                  color: _Q.Hv.DANGER,
                  style: { borderRadius: 0 },
                  children: [
                      _.intl.format(_.t.IIHUUF, { subscriptionId: this.props.subscription.id }),
                      " ",
                      _.intl.format(_.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                  ],
              })
            : this.props.children;
    }
}
function mR(e) {
    let { subscriptions: t, updateHeader: n } = e,
        [i, l] = f.useState({ route: mp.HOME }),
        { route: s } = i,
        a = () => {
            l({ route: mp.HOME });
        },
        r = (e) => {
            l({ route: mp.SWITCH_APP_PLANS, ...e }), n(_.intl.string(_.t.VFqtkP), a);
        },
        [o, d] = f.useState({});
    f.useEffect(() => {
        for (let e of t) {
            let t = e.items[0]?.planId;
            null != t &&
                (d((t) => ({ ...t, [e.id]: mo.LOADING })),
                (0, _q._R)(t)
                    .then(() => {
                        d((t) => ({ ...t, [e.id]: mo.DONE }));
                    })
                    .catch(() => {
                        d((t) => ({ ...t, [e.id]: mo.ERROR }));
                    }));
        }
    }, [t]);
    let { loadState: u } = (0, _J.E)(),
        c = u !== _J.mJ.LOADED;
    switch (s) {
        case mp.HOME:
            return (0, x.jsx)(x.Fragment, {
                children: t.map((e) =>
                    (0, x.jsx)(
                        mO,
                        {
                            subscription: e,
                            children: (0, x.jsx)(md, {
                                subscription: e,
                                navigateToSwitchPlan: r,
                                loadingState: c ? mo.LOADING : (o[e.id] ?? mo.LOADING),
                            }),
                        },
                        e.id,
                    ),
                ),
            });
        case mp.SWITCH_APP_PLANS:
            let { route: g, ...m } = i;
            return (0, x.jsx)(my, { ...m, navigateToHome: a });
        default:
            (0, t8.xb)(s);
    }
}
var mL = n(470464);
function mD(e) {
    let { onGoBack: t } = e,
        n = (0, R.yK)(
            [ua.A],
            () =>
                ua.A.getActiveApplicationSubscriptions()
                    ?.slice()
                    .sort(
                        (e, t) =>
                            (e.createdAt?.getTime() ?? e.currentPeriodStart.getTime()) -
                            (t.createdAt?.getTime() ?? t.currentPeriodStart.getTime()),
                    ) ?? [],
        ),
        [i, l] = f.useState();
    return (
        null == i && (i = (0, x.jsx)(mG, { onBack: t, title: _.intl.string(_.t["DB/m9a"]) })),
        (0, x.jsxs)("div", {
            children: [
                i,
                (0, x.jsx)("div", {
                    className: mL.A,
                    children: (0, x.jsx)(mR, {
                        subscriptions: n,
                        updateHeader: (e, t) => {
                            l(
                                (0, x.jsx)(mG, {
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
function mG(e) {
    let { onBack: t, title: n } = e;
    return (0, x.jsxs)("div", {
        className: mL.D,
        children: [
            (0, x.jsx)(sS.K, {
                "aria-label": _.intl.string(_.t["13/7kX"]),
                icon: () => (0, x.jsx)(_Z.Z, { size: "sm" }),
                onClick: t,
                variant: "icon-only",
            }),
            (0, x.jsx)(eh.D, { variant: "heading-lg/semibold", children: n }),
        ],
    });
}
var mP = n(881489),
    mM = n(366999),
    mU = n(466919),
    mk = n(441924);
function mV(e) {
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
        ? ((t = _.intl.string(mU.default["/S02sx"])), (n = _.intl.string(mU.default.OPJNST)))
        : i
          ? ((t = _.intl.string(_.t["hT6i/0"])),
            (n = null != r ? _.intl.format(_.t["0Vwb/l"], { activateDate: r }) : null))
          : ((t = _.intl.string(_.t["3G0CTC"])),
            (n = a === lb.xc.FP_SUB_PAUSED ? _.intl.format(_.t.MMvaIG, { resumeDate: s.toDate() }) : null));
    let d = eB()({ [mk.Hs]: i, [mk.mT]: !i }),
        u = eB()({ [mk.CQ]: i, [mk.ZM]: !i }),
        c = eB()({ [mk.EM]: !i });
    return (0, x.jsxs)("div", {
        className: mk.r6,
        children: [
            (0, x.jsxs)("div", {
                className: mk.Nv,
                children: [
                    (0, x.jsx)(eh.D, { variant: "heading-md/semibold", className: c, children: t }),
                    null !== n && (0, x.jsx)(V.E, { variant: "text-sm/normal", children: n }),
                ],
            }),
            !o &&
                (0, x.jsx)("div", {
                    className: mk.ZS,
                    children: (0, x.jsx)("div", {
                        className: d,
                        children: (0, x.jsx)(V.E, { variant: "text-sm/semibold", className: u, children: l }),
                    }),
                }),
        ],
    });
}
let mw = function (e) {
    let { fractionalPremiumInfo: t, className: n, activationDate: i, hasPremiumGroup: l } = e,
        s = (0, oP.kX)(t),
        a = s.length > 0,
        r = (0, mM.Ay)(t.endsAt, mM.yE.SHORT_TIME),
        o = a ? s : r;
    return (0, x.jsx)("div", {
        children: (0, x.jsxs)("div", {
            className: eB()(n, mk.f8),
            children: [
                (0, x.jsx)("div", {
                    className: mk.J_,
                    children: (0, x.jsxs)("div", {
                        className: mk.Bh,
                        children: [
                            (0, x.jsx)("div", {
                                className: mk.xt,
                                children: (0, x.jsx)(oI.t, { size: "md", color: "white", className: mk.T8 }),
                            }),
                            (0, x.jsx)("div", {
                                className: mk.pt,
                                children: (0, x.jsx)(eh.D, {
                                    variant: "heading-md/semibold",
                                    children: _.intl.string(_.t.DFMPWS),
                                }),
                            }),
                            (0, x.jsx)(V.E, {
                                className: mk.PJ,
                                variant: "text-md/semibold",
                                children: s.length > 0 ? s : _.intl.string(_.t["B66Z+f"]),
                            }),
                        ],
                    }),
                }),
                (0, x.jsx)(mV, {
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
var mB = n(868942);
function mF(e) {
    let t,
        {
            user: n,
            planId: i,
            count: l,
            userPremiumSubscription: s,
            unconsumedFractionalPremiumUnits: a = [],
            hasPremiumGroup: r,
        } = e,
        [o, d] = (0, R.yK)([u3.A], () => [u3.A.get(i), null != s ? u3.A.get(s.planId) : null]);
    if (null == o || oP.Ay.getInterval(i).intervalType !== lb.WT.MONTH) return null;
    let u = null != d ? d.skuId : null,
        c = o.skuId === u,
        g = oP.Ay.getDisplayName(i);
    if (r) t = _.intl.string(mU.default["5asczk"]);
    else if (c && null != s) {
        let e;
        e = new Date(s.status === q.Dmq.PAUSED && null != s.pauseEndsAt ? s.pauseEndsAt : s.currentPeriodEnd);
        let n = (0, oP._e)(e, a);
        t = _.intl.formatToPlainString(_.t["5CNRRA"], { date: n ?? 0 });
    } else t = _.intl.formatToPlainString(_.t.eNXZ5O, { planName: g });
    let m = n.hasFreePremium() || (null != s && s.isPurchasedExternally);
    return (0, x.jsxs)("div", {
        className: mk.Bh,
        children: [
            (0, x.jsx)("div", {
                className: eB()({
                    [mk.sr]: o.skuId === lb.pe.TIER_0,
                    [mk.lP]: o.skuId === lb.pe.TIER_1,
                    [mk.eb]: o.skuId === lb.pe.TIER_2,
                }),
                children: (0, x.jsx)(oI.t, { size: "md", color: "currentColor", className: mk.Kk }),
            }),
            (0, x.jsxs)("div", {
                className: mk.pt,
                children: [
                    (0, x.jsx)(eh.D, {
                        variant: "heading-md/semibold",
                        children: _.intl.format(_.t.LzobT9, { planName: g }),
                    }),
                    !m &&
                        (0, x.jsx)(eh.D, {
                            className: mk.gj,
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            children: t,
                        }),
                ],
            }),
            (0, x.jsx)(V.E, {
                className: mk.PJ,
                variant: "text-md/semibold",
                children: _.intl.format(_.t["ess/xl"], { count: l }),
            }),
        ],
    });
}
let mz = function (e) {
    let { className: t, entitlements: n } = e,
        i = eL()(Array.from(n))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: n, consumed: i } = e;
                return null != t && null != n && !i;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        l = (0, R.yK)([uK.A], () => uK.A.getUnactivatedFractionalPremiumUnits()),
        s = (0, R.bG)([ua.A], () => ua.A.getPremiumSubscription()),
        a = (0, R.bG)([ua.A], () => null == ua.A.getPremiumTypeSubscription()),
        r = Object.keys(i).some((e) => e === lb.gD.PREMIUM_MONTH_TIER_1),
        o = (0, R.bG)([t3.default], () => t3.default.getCurrentUser());
    if (null == o) return null;
    let d = o.isPremiumWithPremiumGroup();
    return (0, x.jsxs)("div", {
        children: [
            (0, x.jsx)("div", {
                className: eB()(t, mk.xF, mk.J_),
                children: Object.keys(i).map((e) =>
                    (0, x.jsx)(
                        mF,
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
                (0, x.jsxs)("div", {
                    children: [
                        (0, x.jsx)(V.E, {
                            className: mk.eT,
                            variant: "text-md/normal",
                            children: _.intl.string(_.t["VNr4+O"]),
                        }),
                        (0, x.jsx)(mB.i, {}),
                    ],
                }),
        ],
    });
};
var mX = n(50919);
function mY(e) {
    let t,
        { subscription: n, withOverheadSeparator: i } = e,
        { analyticsLocations: l } = (0, iU.Ay)(),
        [s] = (0, _v.Kq)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: l,
            analyticsLocation: ek.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT,
        });
    if (null == s) return null;
    let a = i ? mX.r : mX.a,
        r = s.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, oP.xq)(t);
        });
    if (null == r) return null;
    let o = r.subscriptionPlanId,
        d = u3.A.get(o);
    tO()(null != d, "Missing plan");
    let u = (0, dz.$g)(s.total, s.currency);
    return (
        d.interval === lb.WT.YEAR
            ? (t = _.intl.format(_.t["jPz/39"], {
                  price: u,
                  termsUrl: q.X7G.TERMS,
                  paidURL: q.X7G.PAID_TERMS,
                  privacyUrl: q.X7G.PRIVACY,
              }))
            : d.interval === lb.WT.MONTH &&
              (t =
                  1 === d.intervalCount
                      ? _.intl.format(_.t.m27GpI, {
                            price: u,
                            termsUrl: q.X7G.TERMS,
                            paidURL: q.X7G.PAID_TERMS,
                            privacyUrl: q.X7G.PRIVACY,
                        })
                      : _.intl.format(_.t["9xf5Vx"], {
                            price: u,
                            termsUrl: q.X7G.TERMS,
                            paidURL: q.X7G.PAID_TERMS,
                            privacyUrl: q.X7G.PRIVACY,
                            intervalCount: d.intervalCount,
                        })),
        (0, x.jsx)(V.E, { color: "text-muted", className: a, variant: "text-xs/normal", children: t })
    );
}
function mH(e) {
    let { subscription: t, withOverheadSeparator: n } = e;
    return t.status === q.Dmq.CANCELED || t.isPurchasedExternally
        ? null
        : (0, x.jsx)(mY, { subscription: t, withOverheadSeparator: n });
}
var mK = n(600542),
    mW = n(558808);
let mZ = { [iy.nR]: "role_subscriptions_panel", [iy.PZ]: "application_subscriptions_panel" };
function mQ() {
    return (0, x.jsx)(er.Z, {
        className: mW.wb,
        type: er.Z.Types.CUSTOM,
        children: (0, x.jsxs)(sw.A, {
            align: sw.A.Align.CENTER,
            children: [
                (0, x.jsx)(e7.A, { game: null, size: e7.M.SMALL, className: mW.pV }),
                (0, x.jsx)("span", { className: mW.O, children: _.intl.string(_.t["jy/hyj"]) }),
            ],
        }),
    });
}
function mq() {
    let e = (0, R.bG)([uK.A], () => uK.A.getForApplication(lb.tv));
    return (
        f.useEffect(() => {
            (0, uM.LM)(lb.tv);
        }, []),
        (0, x.jsx)(nr.n, {
            label: _.intl.string(_.t["2GKrvn"]),
            description: _.intl.string(_.t.kNEjGm),
            children:
                null != e && oP.Ay.hasAccountCredit(e)
                    ? (0, x.jsx)(mz, { className: mW.fX, entitlements: e })
                    : (0, x.jsx)(mQ, {}),
        })
    );
}
function mJ() {
    return (0, x.jsx)("hr", { className: mW.hr });
}
let m$ = function () {
        var e;
        let t = (0, R.bG)([ua.A], () => ua.A.getPremiumTypeSubscription()),
            n = (0, __.A)({ subscriptionFilter: (e) => mK.Hy.has(e.status) }),
            i = (0, R.bG)([t3.default], () => t3.default.getCurrentUser()),
            l = n.length > 1,
            s = (0, R.bG)(
                [us.A],
                () => (null != t && null != t.paymentSourceId ? us.A.getPaymentSource(t.paymentSourceId) : null),
                [t],
            ),
            a = (0, R.bG)([ua.A], () => ua.A.hasFetchedSubscriptions()),
            r = (0, R.bG)([dZ.A], () => dZ.A.isBusy),
            o = (0, cS.Y)(),
            d = _j.A.useField("subsection");
        f.useEffect(() => {
            (0, ap._)(null != d ? mZ[d] : u.X.SUBSCRIPTIONS_PANEL);
        }, [d]);
        let c = (0, R.bG)([ua.A], () => ua.A.getActiveApplicationSubscriptions()?.length ?? 0),
            g = (0, R.bG)(
                [ua.A],
                () =>
                    Object.values(ua.A.getSubscriptions() ?? {})
                        .filter((e) => e.type === q.rzx.GUILD)
                        .filter((e) => e.status !== q.Dmq.ENDED).length,
            ),
            m = (0, cb.A)({ forceFetch: !0 }),
            h = (0, mP.ds)(),
            A = null !== t ? t.currentPeriodEnd : void 0,
            p =
                !(h && !(m.unactivatedUnits.length > 0)) &&
                (m.fractionalState !== lb.xc.NONE || m.unactivatedUnits.length > 0);
        return (f.useEffect(
            () => (
                i8.h.wait(() => {
                    (0, cT.zS)(), dw.hP(), (0, cE.CD)(), dw.$o();
                }),
                function () {
                    _j.A.resetState();
                }
            ),
            [],
        ),
        eN.A.enabled)
            ? (0, x.jsx)(dP.A, {})
            : a && o
              ? d === iy.nR
                  ? (0, x.jsx)(_Y, { onGoBack: () => _j.A.setState({ subsection: null }) })
                  : d === iy.PZ
                    ? (0, x.jsx)(mD, { onGoBack: () => _j.A.setState({ subsection: null }) })
                    : (0, x.jsx)("div", {
                          className: mW.kL,
                          children: (0, x.jsxs)("div", {
                              className: mW.Qs,
                              children: [
                                  l ? (0, x.jsx)(mK.Sb, {}) : null,
                                  null != t
                                      ? (0, x.jsx)(mK.Ay, {
                                            subscription: t,
                                            paymentSource: s,
                                            busy: r,
                                            subscriptions: n,
                                        })
                                      : (0, x.jsx)(mK.TC, {}),
                                  p &&
                                      ((e = !!i?.isPremiumWithPremiumGroup()),
                                      (0, x.jsxs)("section", {
                                          children: [
                                              (0, x.jsx)(eh.D, {
                                                  variant: "heading-md/bold",
                                                  className: mW.HL,
                                                  children: _.intl.string(_.t.Obre8v),
                                              }),
                                              (0, x.jsx)(V.E, {
                                                  variant: "text-md/normal",
                                                  className: mW.JU,
                                                  children: _.intl.format(_.t["7Zi06b"], {
                                                      helpCenterLink: to.A.getArticleURL(
                                                          q.MVz.FRACTIONAL_PREMIUM_ABOUT,
                                                      ),
                                                  }),
                                              }),
                                              (0, x.jsx)(mw, {
                                                  className: mW.fX,
                                                  fractionalPremiumInfo: m,
                                                  activationDate: A,
                                                  hasPremiumGroup: e,
                                              }),
                                          ],
                                      })),
                                  (0, x.jsx)(mq, {}),
                                  g > 0 &&
                                      (0, x.jsxs)(x.Fragment, {
                                          children: [
                                              (0, x.jsx)(mJ, {}),
                                              (0, x.jsx)(_A, {
                                                  count: g,
                                                  onClickManageSubscription: () => _j.A.setState({ subsection: iy.nR }),
                                              }),
                                          ],
                                      }),
                                  c > 0 &&
                                      (0, x.jsxs)(x.Fragment, {
                                          children: [
                                              (0, x.jsx)(mJ, {}),
                                              (0, x.jsx)(_W, {
                                                  count: c,
                                                  onClickManageSubscription: () => {
                                                      _j.A.setState({ subsection: iy.PZ }),
                                                          Y.default.track(
                                                              q.HAw.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED,
                                                          );
                                                  },
                                              }),
                                          ],
                                      }),
                                  (0, x.jsx)(mJ, {}),
                                  null != t ? (0, x.jsx)(mH, { subscription: t, withOverheadSeparator: !1 }) : null,
                              ],
                          }),
                      })
              : (0, x.jsx)("div", { className: eB()(mW.kL, mW.Lq), children: (0, x.jsx)(dU.y, {}) });
    },
    m0 = (0, d.E2)(u.X.SUBSCRIPTIONS_SETTINGS, {
        useSearchTerms: () => [_.intl.string(_.t.trSpHX), _.intl.string(_.t["2GKrvn"])],
        Component: () => (0, x.jsx)(m$, {}),
    }),
    m1 = (0, d.zZ)(u.X.SUBSCRIPTIONS_CATEGORY, {
        useSearchTerms: () => [_.intl.string(_.t.trSpHX), _.intl.string(_.t["2GKrvn"])],
        buildLayout: () => [m0],
    }),
    m2 = (0, d.t_)(u.X.SUBSCRIPTIONS_PANEL, { useTitle: () => _.intl.string(_.t.trSpHX), buildLayout: () => [m1] }),
    m5 = (0, d.i4)(u.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(_.t.trSpHX),
        icon: _c.L,
        usePersistentBadge: function () {
            return f.useMemo(
                () => ({
                    badgeType: eb.Xi.STRONGLY_DISCOURAGED_CUSTOM,
                    useCustomBadge: () =>
                        (0, _g.l)() ? (0, x.jsx)(sj.E, { size: "xs", color: B.A.unsafe_rawColors.YELLOW_300 }) : null,
                }),
                [],
            );
        },
        buildLayout: () => [m2],
    }),
    m3 = (0, d.WI)(u.X.BILLING_SECTION, {
        useTitle: () => _.intl.string(_.t["4uOdGr"]),
        buildLayout: () => [cA, _u, m5, cd, uN],
    });
var m8 = n(540999),
    m4 = n(306471),
    m9 = n(964355),
    m7 = n(172272);
let m6 = (0, d.zD)(u.X.AXE_AUDITING, {
        useTitle: () => "Enable Accessibility Auditing",
        useSubtitle: () =>
            "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development.",
        usePredicate: () => !1,
        useValue: () => (0, R.bG)([rP.default], () => rP.default.isAxeEnabled),
        setValue: (e) => (0, rG.x)({ axeEnabled: e }),
    }),
    he = (0, d.zD)(u.X.CSS_DEBUGGING, {
        useTitle: () => "Enable CSS Debugging",
        useSubtitle: () => "Display raw colors as pink. Toggling this will refresh the browser.",
        useValue: () => (0, R.bG)([rP.default], () => rP.default.cssDebuggingEnabled),
        setValue: (e) => {
            (0, rG.x)({ cssDebuggingEnabled: e }).then(() => {
                setTimeout(() => location.reload(), 500);
            });
        },
    });
var ht = n(53705),
    hn = n(354328);
let hi = (0, d.zD)(u.X.HIGHLIGHT_MANA_COMPONENTS, {
        useTitle: () => "Highlight Mana Components",
        useSubtitle: () => "Highlights all Mana design system components for easier debugging.",
        useValue: () => (0, hn.A)("highlight_mana_components"),
        setValue: (e) => {
            (0, ht.L)("highlight_mana_components", e);
        },
    }),
    hl = (0, d.zD)(u.X.HIGHLIGHT_VOID_COMPONENTS, {
        useTitle: () => "Highlight Deprecated Void Components",
        useSubtitle: () =>
            "Highlights deprecated toggleable components: VoidCheckbox (green), VoidRadioGroup (yellow), VoidSwitch (blue).",
        useValue: () => (0, hn.A)("highlight_void_toggleables"),
        setValue: (e) => {
            (0, ht.L)("highlight_void_toggleables", e);
        },
    }),
    hs = (0, d.sN)(u.X.LAYOUT_DEBUGGING_HORIZONTAL_SPACING, {
        useTitle: () => "Horizontal Grid Spacing",
        useSubtitle: () =>
            "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
        usePredicate: () => (0, R.bG)([rP.default], () => rP.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: m7.YR,
        markers: Array.from({ length: m7.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => m7.Or.getState().horizontalSpacing,
        asValueChanges: (e) => {
            m7.Or.getState().setHorizontalSpacing(e);
        },
    }),
    ha = (0, d.zD)(u.X.LAYOUT_DEBUGGING, {
        useTitle: () => "Enable Layout Debugging",
        useSubtitle: () => "Renders a grid on top of the app to help debug layout alignment issues.",
        useValue: () => (0, R.bG)([rP.default], () => rP.default.layoutDebuggingEnabled),
        setValue: (e) => {
            (0, rG.x)({ layoutDebuggingEnabled: e });
        },
    }),
    hr = (0, d.sN)(u.X.LAYOUT_DEBUGGING_VERTICAL_SPACING, {
        useTitle: () => "Vertical Grid Spacing",
        useSubtitle: () => "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
        usePredicate: () => (0, R.bG)([rP.default], () => rP.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: m7.YR,
        markers: Array.from({ length: m7.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => m7.Or.getState().verticalSpacing,
        asValueChanges: (e) => {
            m7.Or.getState().setVerticalSpacing(e);
        },
    }),
    ho = (0, d.zZ)(u.X.DESIGN_TOOLS, {
        useTitle: () => "Design & A11y Tools",
        useSearchTerms: () => ["accessibility tools"],
        buildLayout: () => [he, ha, hs, hr, hi, hl, m6],
    }),
    hd = (0, d.zD)(u.X.AD_OVERRIDE, {
        useTitle: () => "Always Deliver Ads",
        useSubtitle: () => "Makes the user targetable for all active ads.",
        useValue: () => g.HZ.useSetting(),
        setValue: (e) => {
            g.HZ.updateSetting(e);
        },
    });
var hu = n(173936),
    hc = n(260598),
    hg = n(148810),
    h_ = n(380610),
    hm = n(986238),
    hh = n(851645),
    hA = n(274446);
let hp = ["discord_web", "discord_marketing", "discord_developers", "discord_ios", "discord_android"],
    hE = [
        { id: "branch", value: "branch", label: "Branch Name" },
        { id: "id", value: "id", label: "Commit SHA" },
    ];
function hT(e) {
    return "discord_ios" in e || "discord_android" in e;
}
class hS extends f.Component {
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
        return (0, x.jsxs)(sw.A, {
            direction: sw.A.Direction.VERTICAL,
            className: eB()(hh.oS, nb.SX, hA.N, hh.nM),
            children: [
                (0, x.jsx)(nm.A, {
                    className: eB()(hh.lL, { [hh.zi]: i }),
                    onClick: i ? void 0 : this.handleRemoveBuildOverride,
                }),
                (0, x.jsxs)(sw.A, {
                    className: nb.QB,
                    children: [
                        (0, x.jsx)(sw.A.Child, {
                            basis: "50%",
                            children: (0, x.jsx)(sT.l, {
                                selectionMode: "single",
                                label: "Override Type",
                                options: hE,
                                onSelectionChange: this.handleOverrideTypeChanged,
                                value: t,
                                disabled: i,
                            }),
                        }),
                        (0, x.jsx)(sw.A.Child, {
                            wrap: !0,
                            basis: "50%",
                            children: (0, x.jsx)(sM.k, {
                                label: "branch" === t ? "Branch Name" : "Commit SHA",
                                value: n,
                                onChange: this.handleOverrideIdChanged,
                                disabled: i,
                            }),
                        }),
                    ],
                }),
                (0, x.jsxs)(sw.A.Child, {
                    children: [
                        null != l &&
                            "" !== l &&
                            (0, x.jsx)(V.E, {
                                className: hh.AS,
                                color: "text-feedback-critical",
                                variant: "text-sm/normal",
                                children: l,
                            }),
                        (0, x.jsxs)(V.E, {
                            variant: "text-sm/normal",
                            className: hh.AS,
                            children: [
                                "This controls the build that will be served for the ",
                                (0, x.jsx)("code", { children: e }),
                                " project.",
                            ],
                        }),
                    ],
                }),
            ],
        });
    }
}
class hx extends f.Component {
    state = { loading: !0, buildOverrides: {}, loadedBuildOverrides: {}, errors: {}, saving: !1, didSave: !1 };
    async refreshBuildOverrides() {
        this.setState({ loading: !0 });
        let e = await (0, h_.bD)();
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
        return eL().without(hp, ...t);
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
        this.setState({ buildOverrides: eL().cloneDeep(this.state.loadedBuildOverrides), errors: {}, didSave: !1 });
    };
    handleSaveChanges = async () => {
        let { buildOverrides: e } = this.state;
        if (null == e) return;
        this.setState({ saving: !0 });
        let t = await (0, hg.Zk)(e);
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
        (0, N.openModal)((t) => (0, x.jsx)(hf, { ...t, buildOverrides: e }));
    };
    renderEmpty() {
        return (0, x.jsx)(na.pp, {
            theme: nd.A.theme,
            className: eB()(nb.eT, nb.SX),
            children: (0, x.jsx)(na.SG, { children: "You have no build overrides configured." }),
        });
    }
    renderItems() {
        let { buildOverrides: e, saving: t, errors: n } = this.state;
        return null == e
            ? null
            : eL().map(e, (e, i) =>
                  (0, x.jsx)(
                      hS,
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
            : (0, x.jsx)(eA.$, { variant: "secondary", text: "Reload App", onClick: () => location.reload() });
    }
    renderLinkButton() {
        let { buildOverrides: e } = this.state;
        return null == e || 0 === Object.keys(e).length
            ? null
            : (0, x.jsx)(e1.m, {
                  text: "Generate Public Link",
                  children: (0, x.jsx)(sS.K, {
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
        return (0, x.jsxs)(x.Fragment, {
            children: [
                (0, x.jsx)(eA.$, {
                    variant: "critical-primary",
                    text: "Discard Changes",
                    onClick: this.handleDiscardChanges,
                    disabled: e,
                }),
                (0, x.jsx)(eA.$, {
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
            ? (0, x.jsx)(dU.y, { className: nb.QX })
            : null != i && 0 === Object.keys(i).length
              ? this.renderEmpty()
              : this.renderItems();
        let l = !n && !t && this.getAvailableProjects().length > 0,
            s =
                hT(i ?? {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL
                    ? (0, x.jsx)(V.E, {
                          color: "text-feedback-critical",
                          variant: "text-md/normal",
                          children:
                              "Mobile build overrides must be generated using the desktop/web stable client for now!",
                      })
                    : null;
        return (0, x.jsx)(nr.n, {
            children: (0, x.jsxs)(L.B, {
                gap: 16,
                children: [
                    (0, x.jsx)(sT.l, {
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
                    (0, x.jsxs)(rT.e, {
                        justify: "end",
                        children: [this.renderRefreshButton(), this.renderLinkButton(), this.renderSaveButton()],
                    }),
                ],
            }),
        });
    }
}
class hf extends f.Component {
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
        e.key === nA.dh.ENTER && this.handleAddAllowedVersion();
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
            t = await (0, hg.SB)(e);
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
            u = hm.fL.find((t) => t.value === e),
            c = l.map((e) => ({ id: e, label: e, value: e }));
        return (0, x.jsxs)(L.B, {
            gap: 20,
            children: [
                (0, x.jsx)(sT.l, {
                    selectionMode: "single",
                    label: "Expire After",
                    value: null != u ? u.value : void 0,
                    options: hm.fL,
                    onSelectionChange: this.handleExpirationChange,
                }),
                this.isMobile()
                    ? null
                    : (0, x.jsx)(sT.l, {
                          selectionMode: "single",
                          label: "Release Channel",
                          value: t,
                          options: hm.VP,
                          onSelectionChange: this.handleReleaseChannelChange,
                      }),
                this.isMobile()
                    ? (0, x.jsxs)(L.B, {
                          gap: 20,
                          children: [
                              (0, x.jsx)(sM.k, {
                                  label: "Add allowed app version (required)",
                                  autoFocus: !0,
                                  value: s,
                                  onKeyDown: this.handleAllowedVersionEnter,
                                  error: a,
                                  onChange: this.handleAllowedVersionEntry,
                                  placeholder: "Example: 34",
                                  trailing: { icon: cL.j, onClick: this.handleAddAllowedVersion, "aria-label": "Add" },
                              }),
                              (0, x.jsx)(sT.l, {
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
                    : (0, x.jsx)(hc.f, {
                          label: "Limit to User IDs (optional)",
                          helperText: "User IDs can be separated by whitespace or commas.",
                          value: n,
                          error: i,
                          onBlur: () => this.setUserEntryError(""),
                          onChange: this.handleUserIDEntry,
                      }),
                (0, x.jsx)(hc.f, {
                    label: "Client Experiment Override",
                    description:
                        "Locally override the given experiments to the given bucket. This ONLY applies locally and WILL NOT affect the server. When the user clears build override, the experiment override is removed as well.",
                    value: o,
                    error: d,
                    onChange: this.handleExperiments,
                    placeholder: '{"2022-01_threads":1}',
                }),
                (0, x.jsx)(D.d, { label: "Allow logged out users", checked: r, onChange: this.handleAllowLoggedOut }),
            ],
        });
    }
    renderHelpMessage() {
        let { statusText: e, status: t } = this.state;
        if (null == e) return (0, x.jsx)("div", {});
        let n = tr.Y.INFO;
        switch (t) {
            case 0:
                n = tr.Y.ERROR;
                break;
            case 1:
                n = tr.Y.WARNING;
        }
        return (0, x.jsx)(tr.p, { messageType: n, children: e });
    }
    render() {
        let { onClose: e, transitionState: t } = this.props,
            { publicLink: n } = this.state;
        return (0, x.jsx)(sP.Modal, {
            title: "Generate Public Build Override Link",
            input: this.renderHelpMessage(),
            actionBarInput: (0, x.jsx)(uB.A, { value: n }),
            transitionState: t,
            "aria-label": "Generate Public Build Override Link",
            actions: [{ variant: "primary", text: "Generate Link", onClick: this.handleGenerateLink }],
            onClose: e,
            children: this.renderSettingsForm(),
        });
    }
}
let hb = (0, d.E2)(u.X.BUILD_OVERRIDES, { useSearchTerms: () => ["build overrides"], Component: hx });
var hN = n(256311),
    hC = n(883600);
let hI = (0, d.E2)(u.X.CHANGE_LOG_OVERRIDE, {
    useSearchTerms: () => ["changelog override", "change log override"],
    Component: function () {
        let e = (0, R.bG)([hC.A], () => hC.A.overrideId()),
            t = async (e) => {
                let t = hC.A.getChangelog(e, "en-US");
                return null != t ? t : ((await hN.A.fetchChangelog(e, "en-US", !1, !0)) ?? null);
            };
        return (0, x.jsx)(hB, {
            label: "Change Log Override",
            description: "Provide a change log ID to override the change log shown to this user.",
            placeholder: "Enter Change Log ID...",
            overrideId: e ?? null,
            setOverride: (e) => hN.A.setChangelogOverride(e),
            fetchOverride: t,
        });
    },
});
var hv = n(506774);
let hy = new Date("2018-01-01"),
    hj = (0, d.Tf)(u.X.CHANGE_LOG_CLEAR, {
        useTitle: () => "Clear Change Log",
        useSubtitle: () => "Resets the change log state so that it will show again on the next startup.",
        useLabel: () => "Clear",
        useDisabled: () => g.pK.useSetting() === dY.default.fromTimestamp(hy.getTime()),
        onClick: () => (hv.w.set("lastChangeLogDate", hy), g.pK.updateSetting(dY.default.fromTimestamp(hy.getTime()))),
    }),
    hO = (0, d.zD)(u.X.DISABLE_APP_COLLECTIONS_CACHE, {
        useTitle: () => "Disable Application Collections Cache",
        useSubtitle: () => "Forces application collection updates to be shown immediately.",
        useDisabled: () => (0, R.bG)([rP.default], () => rP.default.onlyShowPreviewAppCollections),
        useValue: () =>
            (0, R.bG)(
                [rP.default],
                () => rP.default.disableAppCollectionsCache || rP.default.onlyShowPreviewAppCollections,
            ),
        setValue: (e) => (0, rG.x)({ disableAppCollectionsCache: e }),
    }),
    hR = (0, d.zD)(u.X.FORCE_CANARY_API, {
        useTitle: () => "Force Canary API",
        useSubtitle: () => "Routes all API requests to Canary instances.",
        useValue: () => (0, R.bG)([rP.default], () => rP.default.isForcedCanary),
        setValue: (e) => {
            (0, rG.x)({ canary: e });
        },
    }),
    hL = (0, d.zD)(u.X.LOAD_SOURCE_MAPS, {
        useTitle: () => "Load Source Maps",
        useSubtitle: () => "Downloads source maps on this client. Only enable on devices you trust.",
        useValue: () => (0, R.bG)([rP.default], () => rP.default.sourceMapsEnabled),
        setValue: (e) => (0, rG.x)({ sourceMapsEnabled: e }),
    }),
    hD = (0, d.zD)(u.X.ONLY_SHOW_PREVIEW_APP_COLLECTIONS, {
        useTitle: () => "Only Show Preview App Collections",
        useSubtitle: () =>
            "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
        useValue: () => (0, R.bG)([rP.default], () => rP.default.onlyShowPreviewAppCollections),
        setValue: (e) => (0, rG.x)({ onlyShowPreviewAppCollections: e }),
    });
var hG = n(10094),
    hP = n(683760);
let hM = [
        { id: "none", label: "Non-Nitro", value: 0 },
        { id: "tier_0", label: "Nitro Basic", value: lb.PremiumTypes.TIER_0 },
        { id: "tier_1", label: "Nitro Classic", value: lb.PremiumTypes.TIER_1 },
        { id: "tier_2", label: "Nitro Standard", value: lb.PremiumTypes.TIER_2 },
    ],
    hU = (0, d.Hn)(u.X.PREMIUM_TYPE_OVERRIDE, {
        useTitle: () => "Premium Type Override",
        useSearchTerms: () => ["nitro override"],
        useSubtitle: () => "Overrides the client's local premium type.",
        useOptions: () => hM,
        clearable: !0,
        useValue: () =>
            (0, R.bG)([hP.A], () => {
                let e = hP.A.getPremiumTypeOverride();
                return null === e ? 0 : e;
            }),
        setValue: (e) => {
            0 === e
                ? (0, hG.O)(null, void 0)
                : null === e
                  ? (0, hG.O)(void 0, void 0)
                  : (0, hG.O)(0 === e ? null : e, void 0);
        },
    });
var hk = n(246605),
    hV = n(274184);
let hw = (0, d.E2)(u.X.SURVEY_OVERRIDE, {
    useSearchTerms: () => ["survey override"],
    Component: function () {
        let e = (0, R.bG)([hV.Ay], () => hV.Ay.getSurveyOverride());
        return (0, x.jsx)(hB, {
            label: "Survey Override",
            description: "Provide a survey ID to override the survey shown to this user.",
            placeholder: "Enter Survey ID...",
            overrideId: e ?? null,
            setOverride: (e) => hk.xr(e),
            fetchOverride: (e) => hk.BC(e, !0) ?? null,
        });
    },
});
function hB(e) {
    let { label: t, description: n, placeholder: i, overrideId: l, setOverride: s, fetchOverride: a } = e,
        [r, o] = f.useState(l ?? ""),
        d = f.useRef(null),
        [u, c] = f.useState(0),
        g = () => {
            null != d.current && (clearTimeout(d.current), (d.current = null));
        };
    return (
        f.useEffect(() => g, []),
        (0, x.jsx)(lR.D, {
            layout: "horizontal-responsive",
            label: t,
            description: n,
            children: (0, x.jsx)(sM.k, {
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
let hF = (0, d.zZ)(u.X.DEV_OVERRIDES, {
        useTitle: () => "Overrides",
        buildLayout: () => [hU, hw, hI, hj, hR, hd, hD, hO, hL, hb],
        useInlineNotice: () => ({
            type: eb.lT.INLINE_NOTICE,
            noticeType: "info",
            useText: () => _.intl.format(_.t.UeZJlg, { link: "https://i.dis.gd/dev-settings-changes" }),
        }),
    }),
    hz = (0, d.zD)(u.X.ANALYTICS_LOGS, {
        useTitle: () => "Enable Logging of Analytics Events",
        useSubtitle: () => "Logs all analytics events to the developer console.",
        useValue: () => (0, R.bG)([rP.default], () => rP.default.isLoggingAnalyticsEvents),
        setValue: (e) => (0, rG.x)({ logAnalyticsEvents: e }),
    }),
    hX = (0, d.zD)(u.X.GATEWAY_LOGS, {
        useTitle: () => "Log Gateway Events",
        useSubtitle: () => "Logs all gateway events to console, including content. Enable verbose logs to see them.",
        useValue: () => (0, R.bG)([rP.default], () => rP.default.isLoggingGatewayEvents),
        setValue: (e) => (0, rG.x)({ logGatewayEvents: e }),
    }),
    hY = (0, d.zD)(u.X.KEEP_POPOUTS_OPEN, {
        useTitle: () => "Keep Popouts Open",
        useSubtitle: () =>
            "When enabled, popouts will not close automatically, allowing their console contents to be inspected after a crash.",
        useValue: () => (0, R.bG)([rP.default], () => rP.default.preventPopoutClose),
        setValue: (e) => (0, rG.x)({ preventPopoutClose: e }),
    }),
    hH = (0, d.zD)(u.X.KEYBOARD_MISMATCHES, {
        useTitle: () => "Enable Logging of Keyboard Mismatches",
        useSubtitle: () => "Logs mismatches in detected keyboard codes to the console.",
        useValue: () => (0, R.bG)([rP.default], () => rP.default.logKeyboardMismatches),
        setValue: (e) => (0, rG.x)({ logKeyboardMismatches: e }),
    }),
    hK = (0, d.zD)(u.X.OVERLAY_RPC_LOGS, {
        useTitle: () => "Enable Logging of Overlay RPC Events & Commands",
        useSubtitle: () => "Logs all overlay related RPC events. Super noisy if an overlay is connected.",
        useValue: () => (0, R.bG)([rP.default], () => rP.default.isLoggingOverlayEvents),
        setValue: (e) => (0, rG.x)({ logOverlayEvents: e }),
    }),
    hW = (0, d.zD)(u.X.QUEST_LOGGING, {
        useTitle: () => "Enable Quests Debug Logging",
        useSubtitle: () => "Logs quest lifecycle events to the developer console.",
        useValue: () => (0, R.bG)([rP.default], () => rP.default.isLoggingQuestEvents),
        setValue: (e) => (0, rG.x)({ logQuestEvents: e }),
    }),
    hZ = (0, d.zD)(u.X.REQUEST_TRACING, {
        useTitle: () => "Enable Tracing Requests",
        useSubtitle: () => "Force trace all client requests with APM.",
        useValue: () => (0, R.bG)([rP.default], () => rP.default.isTracingRequests),
        setValue: (e) => (0, rG.x)({ trace: e }),
    }),
    hQ = (0, d.zZ)(u.X.LOGGING, { useTitle: () => "Logging", buildLayout: () => [hX, hK, hZ, hz, hH, hY, hW] }),
    hq = (0, d.t_)(u.X.DEVELOPER_OPTIONS_PANEL, {
        useTitle: () => "Developer Options",
        buildLayout: () => [hF, hQ, ho],
    }),
    hJ = (0, d.i4)(u.X.DEVELOPER_OPTIONS_SIDEBAR_ITEM, {
        useTitle: () => "Developer Options",
        icon: m4.V,
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
                    onlyShowPreviewAppCollections: d,
                    disableAppCollectionsCache: c,
                } = (0, R.cf)([rP.default, m8.A], () => ({
                    layoutDebuggingEnabled: rP.default.layoutDebuggingEnabled,
                    isDeveloper: m8.A.isDeveloper,
                    isLoggingGatewayEvents: rP.default.isLoggingGatewayEvents,
                    isLoggingOverlayEvents: rP.default.isLoggingOverlayEvents,
                    isLoggingAnalyticsEvents: rP.default.isLoggingAnalyticsEvents,
                    isTracingRequests: rP.default.isTracingRequests,
                    isForcedCanary: rP.default.isForcedCanary,
                    isSourceMapsEnabled: rP.default.sourceMapsEnabled,
                    isAxeEnabled: rP.default.isAxeEnabled,
                    preventPopoutClose: rP.default.preventPopoutClose,
                    onlyShowPreviewAppCollections: rP.default.onlyShowPreviewAppCollections,
                    disableAppCollectionsCache: rP.default.disableAppCollectionsCache,
                })),
                { horizontalSpacing: _, verticalSpacing: m } = (0, m7.Or)(),
                { setHorizontalSpacing: h, setVerticalSpacing: A } = m7.Or.getState(),
                p = g.HZ.useSetting();
            return t
                ? [
                      (0, x.jsxs)(
                          U.Dr,
                          {
                              id: "overrides",
                              label: "Overrides",
                              action: () => {
                                  (0, ej.openUserSettings)(u.X.DEV_OVERRIDES);
                              },
                              children: [
                                  (0, x.jsx)(
                                      U.sL,
                                      {
                                          id: "always-deliver",
                                          label: "Always Deliver Ads",
                                          checked: p,
                                          action: () => {
                                              g.HZ.updateSetting(!p);
                                          },
                                      },
                                      "always-deliver",
                                  ),
                                  (0, x.jsx)(
                                      U.sL,
                                      {
                                          id: "forced-canary",
                                          label: "Forced Canary",
                                          checked: a,
                                          action: () => {
                                              (0, rG.x)({ canary: !a });
                                          },
                                      },
                                      "forced-canary",
                                  ),
                                  (0, x.jsx)(
                                      U.sL,
                                      {
                                          id: "preview-collections",
                                          label: "Preview Unpublished Collections",
                                          checked: d,
                                          action: () => {
                                              (0, rG.x)({ onlyShowPreviewAppCollections: !d });
                                          },
                                      },
                                      "preview-collections",
                                  ),
                                  (0, x.jsx)(
                                      U.sL,
                                      {
                                          id: "disable-collections-cache",
                                          label: "Disable Collections Cache",
                                          checked: c,
                                          action: () => {
                                              (0, rG.x)({ disableAppCollectionsCache: !c });
                                          },
                                      },
                                      "disable-collections-cache",
                                  ),
                              ],
                          },
                          "overrides",
                      ),
                      (0, x.jsxs)(
                          U.Dr,
                          {
                              id: "logging",
                              label: "Logging",
                              action: () => {
                                  (0, ej.openUserSettings)(u.X.LOGGING);
                              },
                              children: [
                                  (0, x.jsx)(
                                      U.sL,
                                      {
                                          id: "gateway-events",
                                          label: "Gateway Events",
                                          checked: n,
                                          action: () => {
                                              (0, rG.x)({ logGatewayEvents: !n });
                                          },
                                      },
                                      "gateway-events",
                                  ),
                                  (0, x.jsx)(
                                      U.sL,
                                      {
                                          id: "overlay-events",
                                          label: "Overlay RPC Events",
                                          checked: i,
                                          action: () => {
                                              (0, rG.x)({ logOverlayEvents: !i });
                                          },
                                      },
                                      "overlay-events",
                                  ),
                                  (0, x.jsx)(
                                      U.sL,
                                      {
                                          id: "analytics-events",
                                          label: "Analytics Events",
                                          checked: l,
                                          action: () => {
                                              (0, rG.x)({ logAnalyticsEvents: !l });
                                          },
                                      },
                                      "analytics-events",
                                  ),
                                  (0, x.jsx)(
                                      U.sL,
                                      {
                                          id: "tracing-requests",
                                          label: "Tracing Requests",
                                          checked: s,
                                          action: () => {
                                              (0, rG.x)({ trace: !s });
                                          },
                                      },
                                      "tracing-requests",
                                  ),
                                  (0, x.jsx)(
                                      U.sL,
                                      {
                                          id: "prevent-popout-close",
                                          label: "Prevent Popouts From Closing",
                                          checked: o,
                                          action: () => {
                                              (0, rG.x)({ preventPopoutClose: !o });
                                          },
                                      },
                                      "prevent-popout-close",
                                  ),
                              ],
                          },
                          "logging",
                      ),
                      (0, x.jsxs)(
                          U.Dr,
                          {
                              id: "design-tools",
                              label: "Design/A11y Tools",
                              action: () => {
                                  (0, ej.openUserSettings)(u.X.DESIGN_TOOLS);
                              },
                              children: [
                                  (0, x.jsx)(
                                      U.sL,
                                      {
                                          id: "accessibility-auditing",
                                          label: "Accessibility Auditing",
                                          checked: r,
                                          action: () => {
                                              (0, rG.x)({ axeEnabled: !r });
                                          },
                                      },
                                      "accessibility-auditing",
                                  ),
                                  (0, x.jsx)(
                                      U.sL,
                                      {
                                          id: "layout-debugging",
                                          label: "Enable Layout Debugging",
                                          checked: e,
                                          action: () => {
                                              (0, rG.x)({ layoutDebuggingEnabled: !e });
                                          },
                                      },
                                      "layout-debugging",
                                  ),
                                  e &&
                                      (0, x.jsxs)(x.Fragment, {
                                          children: [
                                              (0, x.jsx)(
                                                  U.aK,
                                                  {
                                                      id: "horizontal-spacing",
                                                      label: "Horizontal Spacing",
                                                      control: (e, t) =>
                                                          (0, x.jsx)(m9.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: _,
                                                              minValue: 0,
                                                              maxValue: m7.YR,
                                                              onChange: (e) => h(e),
                                                              renderValue: (e) => `${Math.round(e)}px`,
                                                              "aria-label": "Horizontal Spacing",
                                                          }),
                                                  },
                                                  "horizontal-spacing",
                                              ),
                                              (0, x.jsx)(
                                                  U.aK,
                                                  {
                                                      id: "vertical-spacing",
                                                      label: "Vertical Spacing",
                                                      control: (e, t) =>
                                                          (0, x.jsx)(m9.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: m,
                                                              minValue: 0,
                                                              maxValue: m7.YR,
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
var h$ = n(127062),
    h0 = n(84654),
    h1 = n(80703),
    h2 = n(691540),
    h5 = n(857250),
    h3 = n(97483),
    h8 = n(100392),
    h4 = n(102609),
    h9 = n(271478),
    h7 = n(736056),
    h6 = n(386976),
    Ae = n(257433),
    At = n(32523),
    An = n(222735),
    Ai = n(688151),
    Al = n(491210);
function As(e) {
    let { experiment: t, experimentId: n, overrideInfo: i, defaultOpen: l } = e,
        [s, a] = f.useState(l),
        [r, o] = f.useState(!1),
        d = f.useCallback(() => {
            a((e) => !e);
        }, []),
        u = (0, R.bG)([u2.default], () => u2.default.getId()),
        c = (0, Ae.iN)(t, u),
        g = (0, Ae.Fm)(t, u),
        _ = (0, R.yK)([h7.A], () =>
            eL()
                .sortBy(h7.A.getRecentExposures(Ai.Vh.USER, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return `${new Date(n).toLocaleString()} (${t})`;
                }),
        ),
        m = f.useCallback(
            (e) => {
                (0, u9.C)((0, h8.yA)(n), () => {
                    (0, h2.P0)({
                        id: "experiment-link-copied",
                        message: "Copied experiment link",
                        type: h3.Ck.SUCCESS,
                    }),
                        e.preventDefault(),
                        e.stopPropagation();
                });
            },
            [n],
        ),
        h = (0, x.jsx)(eF.s, {
            "aria-label": "Toggle visibility",
            onClick: d,
            children: (0, x.jsxs)(V.E, {
                variant: "text-md/medium",
                className: Al.DD,
                children: [
                    (0, x.jsxs)("div", {
                        children: [
                            (0, x.jsxs)(L.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                children: [
                                    t.title,
                                    " ",
                                    u9.p5 &&
                                        (0, x.jsx)(k.D, { onClick: m, children: (0, x.jsx)(hu.q, { size: "xs" }) }),
                                ],
                            }),
                            (0, x.jsx)(V.E, { color: "text-muted", variant: "text-sm/normal", children: n }),
                        ],
                    }),
                    (0, x.jsx)("span", { className: Al.km, children: "User" }),
                ],
            }),
        });
    if (!s) return (0, x.jsx)("div", { className: Al.Os, children: h });
    let A = "";
    return (
        (A =
            t.system === h4.l5.LEGACY
                ? `Currently assigned to bucket ${c ?? Ai.RE.NOT_ELIGIBLE}`
                : null != c
                  ? `Currently assigned to variant ${c}`
                  : "Currently unassigned"),
        (0, x.jsxs)("div", {
            className: Al.Os,
            children: [
                h,
                (0, x.jsx)("div", {
                    children: (0, x.jsx)(h9.g, {
                        label: t.system === h4.l5.LEGACY ? "Bucket Override" : "Variant Override",
                        description: A,
                        experiment: t,
                        experimentId: n,
                        overrideInfo: i,
                    }),
                }),
                (0, x.jsx)("div", {
                    className: Al.h_,
                    children:
                        null == g
                            ? (0, x.jsx)(V.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  children:
                                      'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.',
                              })
                            : null,
                }),
                r
                    ? (0, x.jsxs)("div", {
                          children: [
                              (0, x.jsx)(V.E, {
                                  variant: "text-lg/medium",
                                  className: Al.id,
                                  children: "Server Descriptor",
                              }),
                              (0, x.jsx)(V.E, {
                                  variant: "code",
                                  className: Al.AS,
                                  children: null == g ? "None" : JSON.stringify(g, void 0, 2),
                              }),
                              (0, x.jsx)(V.E, {
                                  variant: "text-lg/medium",
                                  className: Al.id,
                                  children: "Override Descriptor",
                              }),
                              (0, x.jsx)(V.E, {
                                  variant: "code",
                                  className: Al.AS,
                                  children:
                                      i?.originalDescriptor == null
                                          ? "None"
                                          : JSON.stringify(i.originalDescriptor, void 0, 2),
                              }),
                              (0, x.jsx)(V.E, {
                                  variant: "text-lg/medium",
                                  className: Al.id,
                                  children: "Recent Exposures",
                              }),
                              (0, x.jsx)(V.E, {
                                  variant: "code",
                                  className: Al.AS,
                                  children: 0 === _.length ? "None" : _.join("\n"),
                              }),
                          ],
                      })
                    : (0, x.jsx)("div", {
                          className: Al.id,
                          children: (0, x.jsx)(F.Q, {
                              variant: "secondary",
                              text: "More Details \xbb",
                              onClick: () => o(!0),
                          }),
                      }),
                (0, x.jsx)(nR.c, { className: Al.yF }),
            ],
        })
    );
}
function Aa(e) {
    let { experiment: t, experimentId: n, overrideInfo: i } = e,
        [l, s] = f.useState(null != i),
        [a, r] = f.useState(!1),
        o = f.useCallback(() => {
            s((e) => !e);
        }, []),
        d = (0, R.bG)([h7.A], () => h7.A.getLoadedGuildExperiment(n)),
        u = (0, R.yK)([h7.A], () =>
            eL()
                .sortBy(h7.A.getRecentExposures(Ai.Vh.GUILD, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return `${new Date(n).toLocaleString()} (${t})`;
                }),
        ),
        [c, g] = (0, R.yK)([K.A, h7.A], () => {
            let e = eL().sortBy(K.A.getGuildsArray(), (e) => e.name.toLowerCase()),
                t = {},
                i = [];
            for (let l of e) {
                let e = h7.A.getGuildExperimentDescriptor(n, l.id),
                    s = e?.bucket ?? Ai.RE.NOT_ELIGIBLE;
                s in t || (t[s] = 0), t[s]++, i.push(`${l.name}: ${s}`);
            }
            let l = eL()(t)
                .keys()
                .map(Number)
                .sort()
                .map((e) => `${t[e]} guilds in bucket ${e}`)
                .join(", ");
            return [i.join("\n"), l];
        }),
        _ = (0, x.jsx)(k.D, {
            onClick: o,
            children: (0, x.jsxs)(V.E, {
                variant: "text-md/medium",
                className: Al.DD,
                children: [
                    (0, x.jsxs)("div", {
                        children: [
                            (0, x.jsx)("span", { children: t.title }),
                            (0, x.jsx)(V.E, { color: "text-muted", variant: "text-sm/normal", children: n }),
                        ],
                    }),
                    (0, x.jsx)("span", { className: Al.km, children: "Guild" }),
                ],
            }),
        });
    return l
        ? (0, x.jsxs)("div", {
              className: Al.Os,
              children: [
                  _,
                  (0, x.jsx)(h9.g, {
                      label: "Bucket Override",
                      description: `Current Assignments: ${g}`,
                      experiment: t,
                      experimentId: n,
                      overrideInfo: i,
                  }),
                  (0, x.jsx)("div", {
                      className: Al.h_,
                      children:
                          null == d
                              ? (0, x.jsx)(V.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children:
                                        'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.',
                                })
                              : null,
                  }),
                  a
                      ? (0, x.jsxs)("div", {
                            children: [
                                (0, x.jsx)(V.E, {
                                    variant: "text-lg/medium",
                                    className: Al.id,
                                    children: "Guild Assignments",
                                }),
                                (0, x.jsx)(V.E, { variant: "code", className: Al.AS, children: c }),
                                (0, x.jsx)(V.E, {
                                    variant: "text-lg/medium",
                                    className: Al.id,
                                    children: "Server Descriptor",
                                }),
                                (0, x.jsx)(V.E, {
                                    variant: "code",
                                    className: Al.AS,
                                    children: null == d ? "None" : JSON.stringify(d, void 0, 2),
                                }),
                                (0, x.jsx)(V.E, {
                                    variant: "text-lg/medium",
                                    className: Al.id,
                                    children: "Override Descriptor",
                                }),
                                (0, x.jsx)(V.E, {
                                    variant: "code",
                                    className: Al.AS,
                                    children:
                                        i?.originalDescriptor == null
                                            ? "None"
                                            : JSON.stringify(i.originalDescriptor, void 0, 2),
                                }),
                                (0, x.jsx)(V.E, {
                                    variant: "text-lg/medium",
                                    className: Al.id,
                                    children: "Recent Exposures",
                                }),
                                (0, x.jsx)(V.E, {
                                    variant: "code",
                                    className: Al.AS,
                                    children: 0 === u.length ? "None" : u.join("\n"),
                                }),
                            ],
                        })
                      : (0, x.jsx)("div", {
                            className: Al.id,
                            children: (0, x.jsx)(F.Q, {
                                variant: "secondary",
                                text: "More Details \xbb",
                                onClick: () => r(!0),
                            }),
                        }),
                  (0, x.jsx)(nR.c, { className: Al.yF }),
              ],
          })
        : (0, x.jsx)("div", { className: Al.Os, children: _ });
}
let Ar = (0, d.E2)(u.X.EXPERIMENTS_SETTING, {
        Component: function () {
            let { experiments: e, overridesInfo: t } = (0, h6.op)(),
                { experiments: n, overridesInfo: i } = (0, At.hI)(),
                l = f.useMemo(() => ({ ...n, ...e }), [n, e]),
                s = f.useMemo(() => ({ ...i, ...t }), [i, t]),
                a = (0, R.bG)([u2.default], () => {
                    let e = u2.default.getInstallationForTracking();
                    return null == e ? null : (0, h1.v)(e);
                }),
                [r, o] = f.useState(""),
                d = (0, An.oC)((0, An.R3)((0, An.Fm)(l), s), r);
            return (0, x.jsxs)("div", {
                "data-mtctest-ignore": "true",
                children: [
                    null != a &&
                        (0, x.jsxs)(L.B, {
                            style: { gap: 8, marginBottom: 16 },
                            children: [
                                (0, x.jsxs)(V.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: ["Installation ID: ", a],
                                }),
                                u9.p5 &&
                                    (0, x.jsx)(F.Q, {
                                        size: "sm",
                                        onClick: () => {
                                            (0, u9.C)(a, () => {
                                                (0, h2.P0)((0, h5.o)("Installation ID copied!", h3.Ck.SUCCESS));
                                            });
                                        },
                                        text: "Copy",
                                    }),
                            ],
                        }),
                    (0, x.jsx)(G.I, { placeholder: "Search experiments", query: r, onChange: o, onClear: () => o("") }),
                    d.length > 0
                        ? d.map((e) => {
                              let t = "guild" === e.experiment.kind ? Aa : As;
                              return (0, x.jsx)(
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
                        : (0, x.jsx)("div", {
                              className: Al.p$,
                              children: (0, x.jsx)(eh.D, {
                                  variant: "heading-md/semibold",
                                  children: "No Experiments Found",
                              }),
                          }),
                ],
            });
        },
        useSearchTerms: () => ["Experiments", "Bucket Override", "Variant Override"],
    }),
    Ao = (0, d.zZ)(u.X.EXPERIMENTS_CATEGORY, { buildLayout: () => [Ar] }),
    Ad = (0, d.t_)(u.X.EXPERIMENTS_PANEL, { useTitle: () => "Experiments", buildLayout: () => [Ao] }),
    Au = (0, d.i4)(u.X.EXPERIMENTS_SIDEBAR_ITEM, {
        useTitle: () => "Experiments",
        icon: h$.c,
        useMenu: h0.A,
        buildLayout: () => [Ad],
    }),
    Ac = (0, d.WI)(u.X.DEVELOPER_SECTION, {
        useTitle: () => _.intl.string(_.t.CbItOL),
        usePredicate: () => m8.A.isDeveloper,
        buildLayout: () => [Au, hJ],
    });
var Ag = n(631670),
    A_ = n(252452),
    Am = n(47360),
    Ah = n(836602),
    AA = n(591179),
    Ap = n(854627),
    AE = n(975732),
    AT = n(761508),
    AS = n(83257),
    Ax = n(159001),
    Af = n(344346),
    Ab = n(919395),
    AN = n(233641);
function AC(e) {
    let { title: t, children: n } = e;
    return (0, x.jsxs)("div", {
        children: [(0, x.jsx)(eh.D, { variant: "text-md/medium", className: AN.Vf, children: t }), n],
    });
}
function AI(e) {
    let {
        children: t,
        className: n,
        layoutClassName: i,
        profilePreview: l,
        profilePreviewTitle: s,
        nameplatePreview: a,
        stickyPreview: r = !0,
    } = e;
    return (0, x.jsx)("div", {
        className: eB()(AN.UA, n),
        children: (0, x.jsxs)("div", {
            className: eB()(AN.yt, i),
            children: [
                (0, x.jsx)("div", {
                    className: eB()(AN.Fp, r && AN.Oz),
                    children: (0, x.jsxs)(x.Fragment, {
                        children: [
                            (0, x.jsx)(AC, { title: s ?? _.intl.string(_.t.Zb06yP), children: l }),
                            null != a ? (0, x.jsx)(AC, { title: _.intl.string(_.t.x5CoXR), children: a }) : null,
                        ],
                    }),
                }),
                (0, x.jsx)("div", { className: AN.oB, children: t }),
            ],
        }),
    });
}
var Av = n(986687),
    Ay = n(101058),
    Aj = n(841595),
    AO = n(696451),
    AR = n(10478);
function AL() {
    return (0, x.jsxs)("div", {
        className: AR.p$,
        children: [
            (0, x.jsx)("img", { src: "/assets/b3b15f93f9f43174.svg", alt: "", className: AR.Sl }),
            (0, x.jsx)(eh.D, {
                className: AR.h8,
                variant: "heading-lg/extrabold",
                children: _.intl.string(_.t.Z1OZCV),
            }),
            (0, x.jsx)(V.E, { className: AR.h8, variant: "text-md/normal", children: _.intl.string(_.t.ZSt4Tt) }),
            (0, x.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: AR.h8,
                children: (0, x.jsx)(eA.$, {
                    variant: "primary",
                    text: _.intl.string(_.t.jQ3pqt),
                    onClick: () => {
                        (0, lL.pX)(q.BVt.GUILD_DISCOVERY), (0, lE.default)();
                    },
                }),
            }),
        ],
    });
}
var AD = n(81400),
    AG = n(757036),
    AP = n(252732),
    AM = n(355622),
    AU = n(408018),
    Ak = n(201349),
    AV = n(158983);
let Aw = (0, lx.Ld)(),
    AB = (0, t1.createChannelRecord)({ id: "1", type: q.rbe.DM }),
    AF = (0, lx.Ld)();
function Az(e) {
    let {
            sectionTitle: t,
            errors: n,
            onBioChange: i,
            pendingBio: l,
            placeholder: s,
            currentBio: a,
            disabled: r = !1,
        } = e,
        [o, d] = f.useState(l ?? a),
        [u, c] = f.useState((0, AU.x7)(o)),
        g = f.useRef(a),
        m = f.useRef(!1);
    return (
        f.useEffect(() => {
            if (g.current !== a) {
                let e = (0, AU.x7)(a);
                d(a), c(e);
            }
            g.current = a;
        }, [a]),
        f.useEffect(() => {
            void 0 !== l || o === a || m.current || (d(a), c((0, AU.x7)(a)));
        }, [l, a, o]),
        (0, x.jsxs)(oj.A, {
            title: t,
            titleId: Aw,
            description: _.intl.string(_.t.Bbw6Ac),
            errors: n,
            disabled: r,
            children: [
                (0, x.jsx)(Ak.Ay, {
                    "aria-describedby": AF,
                    "aria-labelledby": Aw,
                    className: AV.i,
                    innerClassName: AV.Z,
                    maxCharacterCount: q.NA2,
                    onChange: function (e, t, n) {
                        t !== o && (d(t), c(n), i(t));
                    },
                    placeholder: s,
                    channel: AB,
                    textValue: o,
                    richValue: u,
                    emojiPickerCloseOnModalOuterClick: !0,
                    parentModalKey: ej.USER_SETTINGS_MODAL_KEY,
                    type: AM.oU.PROFILE_BIO_INPUT,
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
                (0, x.jsx)(z.A, { id: AF, children: _.intl.format(_.t["+DFxLc"], { maxLength: q.NA2 }) }),
            ],
        })
    );
}
var AX = n(930861),
    AY = n(821956),
    AH = n(562819),
    AK = n(84540),
    AW = n(408919);
function AZ(e) {
    let { user: t, guild: n, className: i, sectionTitle: l, forcedDivider: s = !1, withTutorial: a = !1 } = e,
        { analyticsLocations: r } = (0, iU.Ay)(),
        o = (0, Ab.a4)({ user: t, guildId: n?.id }),
        { pendingAvatarDecoration: d, errors: u } = (0, Ab.CP)(n?.id),
        c = a ? AX.wL : rp.$n;
    return (0, x.jsx)(oj.A, {
        className: i,
        forcedDivider: s,
        hasBackground: !0,
        title: l,
        errors: u,
        children: (0, x.jsxs)("div", {
            className: AW.NC,
            children: [
                (0, x.jsx)(c, {
                    size: rp.$n.Sizes.SMALL,
                    onClick: () => {
                        (0, AH.L)({ analyticsLocations: r, guild: n });
                    },
                    className: eB()({ [AW.yj]: a }),
                    children: _.intl.string(_.t.BVcYCx),
                }),
                (void 0 === d ? null != o : null != d) &&
                    (0, x.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: AW.DT,
                        children: (0, x.jsx)(eA.$, {
                            variant: "secondary",
                            size: "sm",
                            text: (0, AY.uZ)(t, n) ? _.intl.string(_.t.CHf9iJ) : _.intl.string(_.t.OrokWm),
                            onClick: () => {
                                (0, AK.p)({ guildId: n?.id, avatarDecoration: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var AQ = n(339984),
    Aq = n(114077);
let AJ = [{ name: "gif", extensions: ["gif"] }];
function A$(e) {
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
        { newestAnalyticsLocation: g } = (0, iU.Ay)(),
        m = c ? AX.wL : rp.$n,
        h = f.useCallback(() => {
            (0, AP.XD)({
                uploadType: AQ.HL.AVATAR,
                analyticsSource: g,
                filters: d ? AJ : void 0,
                guildId: a,
                isTryItOut: d,
            });
        }, [a, g, d]);
    return (0, x.jsx)(oj.A, {
        className: r,
        title: l,
        errors: n,
        disabled: o,
        forcedDivider: u,
        children: (0, x.jsxs)("div", {
            className: Aq.NC,
            children: [
                (0, x.jsx)(m, {
                    className: eB()({ [Aq.yj]: c }),
                    size: rp.$n.Sizes.SMALL,
                    onClick: h,
                    children: s ?? _.intl.string(_.t["4OynCD"]),
                }),
                t &&
                    (0, x.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: Aq.DT,
                        children: (0, x.jsx)(eA.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != a ? _.intl.string(_.t.TDjKDm) : _.intl.string(_.t.twB3fz),
                            onClick: () => i(null),
                        }),
                    }),
            ],
        }),
    });
}
var A0 = n(152103);
function A1(e) {
    let { user: t, guildId: n, className: i } = e,
        l = oP.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: s } = (0, iU.Ay)(),
        {
            userDisplayNameStyles: a,
            guildDisplayNameStyles: r,
            pendingDisplayNameStyles: o,
            pendingErrors: d,
        } = (0, Ab.B0)(t, n),
        u = (0, f.useCallback)(() => {
            Y.default.track(q.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS), (0, ik.L)({ analyticsLocations: s, guildId: n });
        }, [s, n]),
        c = (0, f.useCallback)(() => {
            (0, AK.p)({ displayNameStyles: null }), Y.default.track(q.HAw.DISPLAY_NAME_STYLES_REMOVED);
        }, []),
        g = (0, f.useCallback)(() => {
            (0, AK.p)({ guildId: n, displayNameStyles: null });
        }, [n]),
        m = void 0 !== o || (null != n ? null != r : null != a);
    return (0, x.jsx)(oj.A, {
        title: _.intl.string(iV.default["86GtGH"]),
        className: i,
        showPremiumIcon: l,
        errors: d,
        children: (0, x.jsxs)("div", {
            className: A0.N,
            children: [
                (0, x.jsx)(eA.$, {
                    variant: "primary",
                    size: "sm",
                    text: _.intl.string(iV.default.vJqrIg),
                    onClick: u,
                }),
                null == n &&
                    m &&
                    (0, x.jsx)(eA.$, {
                        variant: "secondary",
                        size: "sm",
                        text: _.intl.string(iV.default.ymq8WQ),
                        onClick: c,
                    }),
                null != n &&
                    null != (void 0 !== o ? o : r) &&
                    (0, x.jsx)(eA.$, {
                        variant: "secondary",
                        size: "sm",
                        text: _.intl.string(iV.default["j/KRxc"]),
                        onClick: g,
                    }),
            ],
        }),
    });
}
var A2 = n(637193),
    A5 = n(727369);
function A3(e) {
    let { user: t, guild: n, titleIcon: i } = e,
        { analyticsLocations: l } = (0, iU.Ay)(),
        s = null != n,
        { userNameplate: a, guildNameplate: r, pendingNameplate: o, pendingErrors: d } = (0, Ab.rv)(t, n?.id),
        u = f.useCallback(() => {
            (0, A2.p)({ analyticsLocations: l, guildId: n?.id });
        }, [l, n?.id]),
        c = f.useCallback(() => {
            (0, AK.p)({ guildId: n?.id, nameplate: null });
        }, [n?.id]);
    return (0, x.jsx)(oj.A, {
        title: _.intl.string(_.t.x5CoXR),
        titleIcon: i,
        errors: d,
        children: (0, x.jsxs)("div", {
            className: A5.u,
            children: [
                (0, x.jsx)(eA.$, { variant: "primary", size: "sm", text: _.intl.string(_.t.BwdeM1), onClick: u }),
                (void 0 === o ? (s ? r : a) != null : null != o) &&
                    (0, x.jsx)(eA.$, {
                        variant: "secondary",
                        size: "sm",
                        text: s ? _.intl.string(_.t.CHf9iJ) : _.intl.string(_.t["9zwziY"]),
                        onClick: c,
                    }),
            ],
        }),
    });
}
var A8 = n(33023);
function A4(e) {
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
        { newestAnalyticsLocation: c } = (0, iU.Ay)(),
        g = u ? AX.wL : rp.$n;
    return (0, x.jsx)(oj.A, {
        className: s,
        title: _.intl.string(_.t.Vgdusv),
        showPremiumIcon: r,
        errors: n,
        disabled: a,
        forcedDivider: d,
        children: (0, x.jsxs)("div", {
            className: A8.NC,
            children: [
                (0, x.jsx)(g, {
                    className: eB()({ [A8.yj]: u }),
                    size: rp.$n.Sizes.SMALL,
                    onClick: () =>
                        (0, AP.XD)({ uploadType: AQ.HL.BANNER, analyticsSource: c, guildId: l, isTryItOut: o }),
                    children: _.intl.string(_.t.N0bC3P),
                }),
                t &&
                    (0, x.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: A8.DT,
                        children: (0, x.jsx)(eA.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != l ? _.intl.string(_.t.jHlJNS) : _.intl.string(_.t.tT9n7D),
                            onClick: () => i(null),
                        }),
                    }),
            ],
        }),
    });
}
var A9 = n(617061),
    A7 = n(872246);
function A6(e) {
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
        { analyticsLocations: d } = (0, iU.Ay)(),
        u = oP.Ay.canUsePremiumProfileCustomization(t),
        c = (0, Ab.N2)({ user: t, guildId: n?.id }),
        { pendingProfileEffect: g, errors: m } = (0, Ab.nZ)(n?.id);
    f.useEffect(() => {
        u &&
            Y.default.track(q.HAw.PREMIUM_UPSELL_VIEWED, {
                type: lb.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: d,
            });
    }, [u, d]);
    let h = r ? AX.wL : rp.$n;
    return (0, x.jsx)(oj.A, {
        forcedDivider: a,
        borderType: uH.i.PREMIUM,
        hasBackground: !0,
        title: s,
        showBorder: o,
        errors: m,
        className: l,
        children: (0, x.jsxs)("div", {
            className: A7.NC,
            children: [
                (0, x.jsx)(h, {
                    size: rp.$n.Sizes.SMALL,
                    onClick: () => {
                        (0, A9.W)({ analyticsLocations: d, guild: n, initialSelectedEffect: i });
                    },
                    className: eB()({ [A7.yj]: r }),
                    children: _.intl.string(_.t["/dRfCf"]),
                }),
                (void 0 === g ? null != c : null != g) &&
                    (0, x.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: A7.DT,
                        children: (0, x.jsx)(eA.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? _.intl.string(_.t.CHf9iJ) : _.intl.string(_.t.uMuafO),
                            onClick: () => {
                                (0, AK.p)({ guildId: n?.id, profileEffect: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
n(441574);
var pe = n(32206),
    pt =
        (((a = {})[(a.CONTROL = 0)] = "CONTROL"),
        (a[(a.OPEN_PURCHASE = 1)] = "OPEN_PURCHASE"),
        (a[(a.PAID_PREMIUM_SUBSCRIBERS_ONLY = 2)] = "PAID_PREMIUM_SUBSCRIBERS_ONLY"),
        a);
let pn = (0, p.mj)({
    name: "2026-04-collectibles-profile-frames-purchase",
    kind: "user",
    defaultConfig: { bucket: 0 },
    variations: { 0: { bucket: 0 }, 1: { bucket: 1 }, 2: { bucket: 2 } },
});
var pi = n(515727),
    pl = n(238780);
function ps(e) {
    let { user: t, guild: n, sectionTitle: i } = e,
        { analyticsLocations: l } = (0, iU.Ay)(),
        s = (function (e) {
            let t = (0, pe.c)(e),
                { bucket: n } = pn.useConfig({ location: e });
            return t && n !== pt.CONTROL;
        })("ProfileFrameSection"),
        a = (0, Ab.Xf)({ user: t, guildId: n?.id }),
        { pendingProfileFrame: r, errors: o } = (0, Ab.Tu)(n?.id);
    return s
        ? (0, x.jsx)(oj.A, {
              borderType: uH.i.PREMIUM,
              hasBackground: !0,
              title: i,
              errors: o,
              children: (0, x.jsxs)("div", {
                  className: pl.N,
                  children: [
                      (0, x.jsx)(eA.$, {
                          variant: "primary",
                          size: "sm",
                          text: _.intl.string(_.t["9/hmle"]),
                          onClick: () => {
                              (0, pi.w)({ analyticsLocations: l, guild: n });
                          },
                      }),
                      (void 0 === r ? null != a : null != r) &&
                          (0, x.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: pl.D,
                              children: (0, x.jsx)(eA.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: null != n ? _.intl.string(_.t.CHf9iJ) : _.intl.string(_.t.nQBruk),
                                  onClick: () => {
                                      (0, AK.p)({ guildId: n?.id, profileFrame: null });
                                  },
                              }),
                          }),
                  ],
              }),
          })
        : null;
}
var pa = n(33851),
    pr = n.n(pa),
    po = n(602853),
    pd = n(654107),
    pu = n(999291),
    pc = n(101928),
    pg = n(132500),
    p_ = n(317097),
    pm = n(508274),
    ph = n(919796),
    pA = n(773431);
function pp(e) {
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
        u = f.useRef(null),
        c = (0, po.r)(B.A.colors.BACKGROUND_BASE_LOW).hex(),
        g = B.A.colors.BACKGROUND_MOD_MUTED.css,
        m = (0, AP.sN)(i),
        h = (0, p_.Hl)(i),
        A = h === c ? g : h,
        p = m ? B.A.unsafe_rawColors.WHITE.css : B.A.unsafe_rawColors.PRIMARY_530.css,
        E = (0, ph.A)(r),
        T = (0, ph.A)(o),
        [S, b] = f.useState((0, pg.A)());
    return (
        f.useEffect(() => {
            (E !== r || T !== o) && b((0, pg.A)());
        }, [o, r, T, E]),
        (0, x.jsx)(P.Y, {
            targetElementRef: u,
            positionKey: S,
            renderPopout: (e) =>
                (0, x.jsx)(pm.VN, {
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
                return (0, x.jsxs)("div", {
                    ref: u,
                    className: eB()(pA.oP, { [pA.r9]: s }),
                    children: [
                        (0, x.jsx)(k.D, {
                            ...n,
                            tabIndex: s ? -1 : 0,
                            onClick: s ? q.tEg : t,
                            style: { backgroundColor: h, borderColor: A },
                            className: pA.nf,
                            "aria-label": _.intl.string(_.t.Qp04hK),
                            focusProps: { ringTarget: u },
                            children: (0, x.jsx)(oG.R, {
                                size: "custom",
                                className: pA.BW,
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
var pE = n(362656);
function pT(e) {
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
        c = (0, pu.Ay)(t.id, a),
        { primaryColor: g, secondaryColor: m } = (0, pc.A)({
            user: t,
            displayProfile: c,
            pendingThemeColors: i,
            isPreview: !0,
        }),
        h = oP.Ay.canUsePremiumProfileCustomization(t),
        A = null != n ? n : t.getAvatarURL(a, 80),
        p = (0, po.r)(B.A.unsafe_rawColors.PRIMARY_530).hex(),
        E = (0, pd.rh)(A, p, !1);
    if (null == g || null == m) return null;
    let T = (e) => {
        l(pr()(e, c?.themeColors) ? void 0 : e);
    };
    return (0, x.jsx)(oj.A, {
        title: _.intl.string(_.t.DMeO2X),
        disabled: !h && !s,
        className: eB()(pE.__invalid_profileThemesSection, r),
        showPremiumIcon: o,
        forcedDivider: u,
        children: (0, x.jsxs)("div", {
            className: pE.hd,
            children: [
                (0, x.jsx)("div", {
                    className: pE.YX,
                    children: (0, x.jsx)(pp, {
                        onChange: (e) => T([e, m]),
                        color: g,
                        suggestedColors: E,
                        showEyeDropper: !0,
                        label: (0, x.jsx)(V.E, {
                            className: pE.yz,
                            color: "text-default",
                            variant: "text-xs/normal",
                            "aria-hidden": !0,
                            children: _.intl.string(_.t.C3KTQk),
                        }),
                    }),
                }),
                (0, x.jsx)("div", {
                    className: pE.YX,
                    children: (0, x.jsx)(pp, {
                        onChange: (e) => T([g, e]),
                        color: m,
                        suggestedColors: E,
                        showEyeDropper: !0,
                        label: (0, x.jsx)(V.E, {
                            className: pE.yz,
                            color: "text-default",
                            variant: "text-xs/normal",
                            "aria-hidden": !0,
                            children: _.intl.string(_.t["8elvy6"]),
                        }),
                    }),
                }),
                d &&
                    null != a &&
                    (0, x.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: pE.WA,
                        children: (0, x.jsx)(eA.$, {
                            variant: "secondary",
                            size: "sm",
                            text: _.intl.string(_.t["L+GmoR"]),
                            onClick: () => T([null, null]),
                        }),
                    }),
            ],
        }),
    });
}
function pS(e) {
    let {
        sectionTitle: t,
        errors: n,
        onPronounsChange: i,
        pendingPronouns: l,
        placeholder: s,
        currentPronouns: a,
        disabled: r = !1,
    } = e;
    return (0, x.jsx)(oj.A, {
        title: t,
        errors: n,
        disabled: r,
        children: (0, x.jsx)(sM.k, {
            placeholder: s ?? _.intl.string(_.t.NPEUUu),
            maxLength: 40,
            value: l ?? a,
            onChange: function (e) {
                i(e === a ? void 0 : e);
            },
            disabled: r,
        }),
    });
}
var px = n(427262),
    pf = n(576705),
    pb = n(376294);
function pN(e) {
    let { errors: t, pendingNick: n, currentNick: i, username: l, user: s, guild: a } = e,
        r = (0, R.bG)([pf.A], () => pf.A.can(q.xBc.CHANGE_NICKNAME, a) || pf.A.can(q.xBc.MANAGE_NICKNAMES, a)),
        o = (0, AG.L)(lb.PremiumTypes.TIER_2);
    return (0, x.jsxs)(oj.A, {
        title: _.intl.string(_.t.me1lRk),
        errors: t,
        children: [
            (0, x.jsx)(sM.k, {
                value: n ?? i ?? "",
                placeholder: l,
                maxLength: q.d0r,
                onChange: function (e) {
                    (0, AK.p)({ guildId: a.id, nickname: e });
                },
                disabled: !r,
                helperText: r ? void 0 : _.intl.string(_.t.gzjxQi),
            }),
            o && (0, x.jsx)(A1, { user: s, guildId: a.id, className: pb.F }),
        ],
    });
}
var pC = n(574173);
let pI = "/assets/b25da78aa7949feb.png";
function pv(e) {
    let { user: t, showOverlay: n, children: i } = e,
        l = (0, uU.Ay)(),
        { analyticsLocations: s } = (0, iU.Ay)(ek.A.PREMIUM_UPSELL_OVERLAY);
    return (f.useEffect(() => {
        n &&
            Y.default.track(q.HAw.PREMIUM_UPSELL_VIEWED, {
                location_stack: s,
                type: lb.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE,
            });
    }, [n, s]),
    n)
        ? (0, x.jsxs)("div", {
              className: pC.ry,
              children: [
                  (0, x.jsx)("div", { children: i }),
                  (0, x.jsxs)("div", {
                      className: pC.Wc,
                      children: [
                          (0, x.jsx)("img", {
                              className: pC.Tn,
                              alt: _.intl.string(_.t.LHFZQy),
                              src: (function (e) {
                                  switch (e) {
                                      case q.NJ8.DARK:
                                      case q.NJ8.DARKER:
                                      case q.NJ8.MIDNIGHT:
                                          return pI;
                                      case q.NJ8.LIGHT:
                                          return "/assets/a98f1410707fafea.png";
                                      default:
                                          return pI;
                                  }
                              })(l),
                          }),
                          (0, x.jsxs)("div", {
                              className: pC._9,
                              children: [
                                  (0, x.jsx)(V.E, {
                                      variant: "text-lg/semibold",
                                      color: "always-white",
                                      children: _.intl.string(_.t.dMaDFX),
                                  }),
                                  (0, x.jsx)(V.E, {
                                      variant: "text-sm/normal",
                                      color: "always-white",
                                      children: _.intl.string(_.t.F7sgFH),
                                  }),
                              ],
                          }),
                          (0, x.jsx)(uY.A, {
                              size: rp.$n.Sizes.LARGE,
                              color: rp.$n.Colors.GREEN,
                              textOptions: {
                                  textOverride: oP.Ay.isPremium(t)
                                      ? _.intl.string(_.t.AfRWI8)
                                      : _.intl.string(_.t.nkdUym),
                              },
                              subscriptionTier: lb.pe.TIER_2,
                          }),
                      ],
                  }),
              ],
          })
        : i;
}
var py = n(887267);
function pj() {
    var e;
    let t = (0, R.bG)([t3.default], () => {
            let e = t3.default.getCurrentUser();
            return tO()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        n = (0, AG.L)(lb.PremiumTypes.TIER_2),
        i = (0, R.bG)([Ah.A, K.A], () => K.A.getGuild(Ah.A.selectedGuildId));
    tO()(null != i, "guild should not be null");
    let {
            pendingAvatar: l,
            pendingNickname: s,
            pendingBanner: a,
            pendingBio: r,
            pendingPronouns: o,
            pendingThemeColors: d,
            errors: u,
        } = (0, R.cf)([Ah.A], () => ({ ...Ah.A.getPendingChanges(i.id), errors: Ah.A.getErrors(i.id) })),
        c = (0, Ay.V7)({ userId: t.id, image: l }),
        g = (0, AD.EC)(i.id),
        m = (0, R.bG)([AO.Ay], () => (null == i.id ? null : AO.Ay.getMember(i.id, t.id))),
        h = (0, R.bG)([Aj.A], () => Aj.A.getGuildMemberProfile(t.id, i.id)),
        A = oP.Ay.canUsePremiumProfileCustomization(t),
        p = (0, Ab.z5)(l, m?.avatar),
        E = (0, Ab.Ac)(a, h?.banner),
        T = ((e = h?.themeColors), void 0 === d ? null != e : d?.[0] != null && d?.[1] != null),
        S = h?.bio ?? "",
        f = h?.pronouns ?? "";
    return (0, x.jsxs)("div", {
        className: py.Q,
        children: [
            (0, x.jsx)(
                pN,
                {
                    errors: u?.nick ?? g?.nick,
                    username: px.Ay.getName(t),
                    pendingNick: s,
                    currentNick: m?.nick,
                    user: t,
                    guild: i,
                },
                "nick",
            ),
            (0, x.jsx)(
                pS,
                {
                    sectionTitle: _.intl.string(_.t["+T3RI/"]),
                    errors: u?.pronouns,
                    onPronounsChange: (e) => (0, AK.p)({ guildId: i.id, pronouns: e }),
                    pendingPronouns: o,
                    currentPronouns: f,
                },
                "pronouns",
            ),
            (0, x.jsxs)(pv, {
                user: t,
                showOverlay: !A,
                children: [
                    (0, x.jsx)(
                        A$,
                        {
                            sectionTitle: (0, x.jsxs)(x.Fragment, {
                                children: [
                                    _.intl.string(_.t.lqaIxI),
                                    (0, x.jsx)(e1.m, {
                                        text: _.intl.string(_.t["5AFxuK"]),
                                        children: (0, x.jsx)(oI.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: py.a,
                                        }),
                                    }),
                                ],
                            }),
                            showRemoveAvatarButton: p,
                            onAvatarChange: (e) =>
                                (0, AP.rM)(e, m?.avatar, (e) => (0, AK.p)({ guildId: i.id, avatar: e })),
                            errors: u?.avatar,
                            guildId: i.id,
                            disabled: !A,
                        },
                        "avatar",
                    ),
                    (0, x.jsx)(
                        AZ,
                        {
                            sectionTitle: (0, x.jsxs)(x.Fragment, {
                                children: [
                                    _.intl.string(_.t["7v0T9P"]),
                                    (0, x.jsx)(e1.m, {
                                        text: _.intl.string(_.t["5AFxuK"]),
                                        children: (0, x.jsx)(oI.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: py.a,
                                        }),
                                    }),
                                ],
                            }),
                            user: t,
                            guild: i,
                        },
                        "decoration",
                    ),
                    !n && (0, x.jsx)(A1, { user: t, guildId: i.id }),
                    (0, x.jsx)(
                        A3,
                        {
                            user: t,
                            guild: i,
                            titleIcon: (0, x.jsx)(e1.m, {
                                text: _.intl.string(_.t["5AFxuK"]),
                                children: (0, x.jsx)(oI.t, { size: "md", color: "currentColor", className: py.a }),
                            }),
                        },
                        "nameplate",
                    ),
                    (0, x.jsx)(
                        A6,
                        {
                            sectionTitle: (0, x.jsxs)(x.Fragment, {
                                children: [
                                    _.intl.string(_.t.wR5wOo),
                                    (0, x.jsx)(e1.m, {
                                        text: _.intl.string(_.t["5AFxuK"]),
                                        children: (0, x.jsx)(oI.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: py.a,
                                        }),
                                    }),
                                ],
                            }),
                            user: t,
                            guild: i,
                        },
                        "effect",
                    ),
                    (0, x.jsx)(ps, { user: t, guild: i, sectionTitle: _.intl.string(_.t.GWrZOd) }, "frame"),
                    (0, x.jsx)(
                        A4,
                        {
                            showRemoveBannerButton: E,
                            errors: u?.banner,
                            onBannerChange: (e) =>
                                (0, AP.rM)(e, h?.banner, (e) => (0, AK.p)({ guildId: i.id, banner: e })),
                            guildId: i.id,
                            disabled: !A,
                        },
                        "banner",
                    ),
                    (0, x.jsx)(pT, {
                        user: t,
                        pendingAvatarSrc: c,
                        pendingColors: d,
                        onThemeColorsChange: (e) => (0, AK.p)({ guildId: i.id, themeColors: e }),
                        guildId: i.id,
                        showResetThemeButton: T,
                    }),
                    (0, x.jsx)(
                        Az,
                        {
                            placeholder: _.intl.string(_.t["/7NKgv"]),
                            sectionTitle: (0, x.jsxs)(x.Fragment, {
                                children: [
                                    _.intl.string(_.t.ZzAR2Y),
                                    (0, x.jsx)(e1.m, {
                                        text: _.intl.string(_.t["5AFxuK"]),
                                        children: (0, x.jsx)(oI.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: py.a,
                                        }),
                                    }),
                                ],
                            }),
                            onBioChange: (e) => (0, AK.p)({ guildId: i.id, bio: e }),
                            errors: u?.bio ?? g?.bio,
                            pendingBio: r,
                            currentBio: S,
                            disabled: !A,
                        },
                        "about",
                    ),
                ],
            }),
        ],
    });
}
var pO = n(405318);
function pR(e) {
    (0, N.openModalLazy)(async () => {
        let { default: t } = await n.e("97925").then(n.bind(n, 475312));
        return (n) => (0, x.jsx)(t, { source: { ...e, page: q.liQ.GUILD_MEMBER_PROFILE_SETTINGS }, ...n });
    });
}
function pL(e) {
    let { selectedGuild: t, onGuildChange: n } = e,
        { analyticsLocations: i } = (0, iU.Ay)(ek.A.USER_SETTINGS_GUILD_PROFILE),
        l = (0, R.bG)([t3.default], () => {
            let e = t3.default.getCurrentUser();
            return tO()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        s = (0, R.bG)([AO.Ay], () => (null != t ? AO.Ay.getMember(t.id, l.id) : null)),
        a = (0, R.bG)([Aj.A], () => !Aj.A.isFetchingProfile(l.id, t?.id)),
        r = (0, R.bG)([eN.A], () => eN.A.hidePersonalInformation),
        { pendingAvatar: o, pendingNameplate: d, ...u } = (0, R.cf)([Ah.A], () => Ah.A.getPendingChanges(t?.id)),
        c = (0, Ay.V7)({ userId: l.id, image: o }),
        g = (0, Ab.lw)({
            pendingValue: d,
            userValue: l?.collectibles?.nameplate,
            guildValue: s?.collectibles?.nameplate,
            guildId: t?.id,
        }),
        { pendingDisplayNameStyles: m } = (0, Ab.B0)(l, t?.id);
    return (f.useEffect(() => () => i8.h.wait(Ax.IM), []), r)
        ? (0, x.jsx)(dP.A, {})
        : a
          ? (0, x.jsxs)(iU.f5, {
                value: i,
                children: [
                    (0, x.jsx)(V.E, {
                        variant: "text-sm/normal",
                        children: _.intl.format(_.t["/PTB2E"], {
                            helpCenterLink: to.A.getArticleURL(q.MVz.GUILD_PROFILES),
                        }),
                    }),
                    null != t
                        ? (0, x.jsxs)(x.Fragment, {
                              children: [
                                  (0, x.jsx)(oy.A, { guildId: t.id, onChange: n }),
                                  (0, x.jsx)(AI, {
                                      profilePreviewTitle: (0, x.jsx)(eh.D, {
                                          variant: "heading-md/medium",
                                          className: pO.Y,
                                          children: _.intl.formatToPlainString(_.t.Tc0slG, { guildName: t?.name }),
                                      }),
                                      profilePreview: (0, x.jsx)(Av.A, {
                                          ...u,
                                          pendingAvatar: c,
                                          pendingDisplayNameStyles: m,
                                          user: l,
                                          guild: t,
                                          canUsePremiumCustomization: oP.Ay.canUsePremiumProfileCustomization(l),
                                          onUpsellClick: pR,
                                      }),
                                      nameplatePreview: (0, x.jsx)(Af.A, {
                                          ...u,
                                          pendingDisplayNameStyles: m,
                                          user: l,
                                          guildId: t?.id,
                                          nameplate: g,
                                          className: null == g ? pO.t : void 0,
                                          isHighlighted: !0,
                                      }),
                                      children: (0, x.jsx)(pj, {}),
                                  }),
                              ],
                          })
                        : (0, x.jsx)(AL, {}),
                ],
            })
          : (0, x.jsx)(dU.y, {});
}
var pD = n(576622),
    pG = n(913403);
let pP = (e) => {
    let { children: t, notice: n } = e;
    return (0, x.jsxs)("div", { className: pG.r, children: [n, (0, x.jsx)("div", { children: t })] });
};
var pM = n(230109),
    pU = n(823092),
    pk = n(803375),
    pV = n(379197),
    pw = n(488430),
    pB = n(457421),
    pF = n(940622),
    pz = n(559474),
    pX = n(144030);
let pY = () => {
    let e,
        t,
        n,
        i,
        { analyticsLocations: l } = (0, iU.Ay)(ek.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
        s = f.useRef(null),
        {
            asset: a,
            popoutAsset: r,
            title: o,
            body: d,
            version: u,
            revertTextColor: c,
        } = ((e = (0, pF.mb)(pz.RN.UPSELL_BANNER)),
        (t = (0, pF.mb)(pz.RN.UPSELL_BANNER_POPOUT)),
        (n = (0, R.bG)([pB.A], () => pB.A.getMarketingBySurface(pV.R.EDIT_PROFILE_SETTINGS))),
        (i = f.useMemo(
            () =>
                null != n
                    ? n
                    : {
                          asset: "/assets/30e2c68819facd98.png",
                          popoutAsset: "/assets/c6d55507d7473057.png",
                          title: _.intl.string(_.t.QZVVBh),
                          body: _.intl.string(_.t.sajmAq),
                          version: 0,
                          revertTextColor: !1,
                      },
            [n],
        )),
        f.useMemo(
            () => ({ ...i, type: pw.G.BANNER, asset: e ?? i.asset, popoutAsset: t ?? i.popoutAsset }),
            [e, t, i],
        )),
        { navigateWithValidation: g } = (0, pU.L_)();
    return (
        f.useEffect(() => {
            Y.default.track(q.HAw.PREMIUM_UPSELL_VIEWED, {
                type: lb.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                location_stack: l,
                version: u,
            });
        }, [l, u]),
        (0, x.jsxs)("div", {
            ref: s,
            className: pX.kL,
            style: { backgroundImage: `url(${a})` },
            children: [
                (0, x.jsx)("div", {
                    className: pX.JS,
                    "aria-hidden": !0,
                    role: "presentation",
                    children: (0, x.jsx)("img", { src: r, className: pX.Qw, alt: "" }),
                }),
                (0, x.jsxs)("div", {
                    className: pX.Em,
                    children: [
                        (0, x.jsx)(eh.D, {
                            variant: "heading-lg/extrabold",
                            color: c ? "text-overlay-dark" : "currentColor",
                            className: pX.DD,
                            children: o,
                        }),
                        (0, x.jsx)(V.E, {
                            variant: "text-sm/normal",
                            color: c ? "text-overlay-dark" : "currentColor",
                            children: d,
                        }),
                    ],
                }),
                (0, x.jsx)(eA.$, {
                    onClick: () => {
                        g(() =>
                            (0, pk.Cz)({
                                analyticsLocations: l,
                                analyticsSource: ek.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                            }),
                        );
                    },
                    variant: "overlay-primary",
                    text: _.intl.string(_.t.fYfGgK),
                }),
            ],
        })
    );
};
var pH = n(451909),
    pK = n(959249),
    pW = n(400669),
    pZ = n(835071),
    pQ = n(422936),
    pq = n(234419),
    pJ = n(590180),
    p$ = n(898461),
    p0 = n(207803),
    p1 = n(508425),
    p2 = n(559949);
let p5 = {
        above_the_clouds: {
            preset: "above_the_clouds",
            themeColors: [752280, 9215590],
            avatarDecorationSkuId: "1144059132517826601",
            displayNameStyles: { fontId: p2.x.CHICLE, effectId: p1.z.POP, colors: [959694] },
            getName: () => _.intl.string(_.t["TFc+iF"]),
            getHeaderSrc: () => n(702051).A,
            getBannerSrc: (e) => (e ? n(735161).A : n(887e3).A),
        },
        cyberpunk: {
            preset: "cyberpunk",
            themeColors: [1967991, 742532],
            avatarDecorationSkuId: null,
            displayNameStyles: { fontId: p2.x.PIXELIFY, effectId: p1.z.NEON, colors: [2949343] },
            getName: () => _.intl.string(_.t["4g+5bq"]),
            getHeaderSrc: () => n(272017).A,
            getBannerSrc: (e) => (e ? n(735271).A : n(208574).A),
        },
        shadow_realm: {
            preset: "shadow_realm",
            themeColors: [0, 4458504],
            avatarDecorationSkuId: "1144058522808614923",
            displayNameStyles: { fontId: p2.x.NEO_CASTEL, effectId: p1.z.TOON, colors: [0xff0000] },
            getName: () => _.intl.string(_.t.ycg1xj),
            getHeaderSrc: () => n(863653).A,
            getBannerSrc: (e) => (e ? n(538263).A : n(576974).A),
        },
        starlit_dream: {
            preset: "starlit_dream",
            themeColors: [5123751, 590625],
            avatarDecorationSkuId: "1144058844004233369",
            displayNameStyles: { fontId: p2.x.CHERRY_BOMB, effectId: p1.z.TOON, colors: [3343795] },
            getName: () => _.intl.string(_.t["9WLHvr"]),
            getHeaderSrc: () => n(434361).A,
            getBannerSrc: (e) => (e ? n(700309).A : n(135572).A),
        },
        neon_space: {
            preset: "neon_space",
            themeColors: [6094952, 1007678],
            avatarDecorationSkuId: null,
            displayNameStyles: { fontId: p2.x.MUSEO_MODERNO, effectId: p1.z.NEON, colors: [28737] },
            getName: () => _.intl.string(_.t.UdNuqi),
            getHeaderSrc: () => n(301928).A,
            getBannerSrc: (e) => (e ? n(285974).A : n(775627).A),
        },
    },
    p3 = (e) => p5[e],
    p8 = Object.keys(p5),
    p4 = (e) => {
        let t = null == e ? p8 : p8.filter((t) => t !== e);
        return t[Math.floor(Math.random() * t.length)];
    };
var p9 = n(371912),
    p7 = n(674253);
function p6(e) {
    let { preset: t, onShuffle: n } = e,
        i = (0, R.bG)([nK.A], () => nK.A.useReducedMotion),
        l = (0, p9.Xf)({ useReducedMotion: i }),
        { name: s, header: a } = f.useMemo(() => {
            let e = p3(t);
            return { name: e.getName(), header: e.getHeaderSrc() };
        }, [t]);
    return (0, x.jsxs)("div", {
        className: p7.kL,
        children: [
            (0, x.jsx)(k.D, {
                onClick: () => {
                    n(), l.startAnimation(!1);
                },
                className: p7.x6,
                "aria-label": _.intl.string(_.t["44yJxh"]),
                children: l.render(),
            }),
            (0, x.jsxs)(k.D, {
                onClick: () => {
                    n(), l.startAnimation(!1);
                },
                "aria-label": `${s}: ${_.intl.string(_.t["44yJxh"])}`,
                className: p7.Lt,
                children: [
                    (0, x.jsx)("img", { alt: "", "aria-hidden": !0, src: a, className: p7.L_ }),
                    (0, x.jsx)(V.E, { className: p7._e, variant: "text-sm/bold", color: "always-white", children: s }),
                ],
            }),
        ],
    });
}
var Ee = n(511484),
    Et = n(811611),
    En = n(515718),
    Ei = n(507553);
function El(e, t) {
    let n = Ei.A.useField("scrollPosition"),
        i = (0, R.bG)([nK.A], () => nK.A.useReducedMotion);
    (0, f.useEffect)(() => {
        let l = e.current;
        if (null == l || n !== t) return;
        let s = requestAnimationFrame(() => {
            l.scrollIntoView({ behavior: i ? "auto" : "smooth" }), Ei.A.setState({ scrollPosition: null });
        });
        return () => cancelAnimationFrame(s);
    }, [e, t, n, i]);
}
var Es = n(844222),
    Ea = n(314649);
function Er(e) {
    let { user: t, disabledInputs: i, containerClassName: l } = e,
        { reducedMotion: s } = f.useContext(Es.C),
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
            tryItOutDisplayNameStyles: E,
        } = (0, R.cf)([Ah.A], () => {
            let e = Ah.A.getPendingChanges(),
                t = Ah.A.getTryItOutChanges();
            return { ...e, ...t };
        }),
        T = (0, Ay.V7)({ userId: t.id, image: h ?? a });
    return (0, x.jsx)(Av.A, {
        containerClassName: l,
        user: t,
        pendingPronouns: g,
        pendingBio: _,
        pendingBanner: A ?? r ?? n(636763),
        pendingDisplayNameStyles: E ?? u,
        pendingAvatar: T,
        pendingThemeColors: m ?? c,
        pendingAvatarDecoration: void 0 !== p ? p : o,
        pendingProfileEffect: d,
        avatarClassName: null != h || null != a || s.enabled ? void 0 : Ea.W,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        disabledInputs: i,
        hideExampleButton: !0,
    });
}
var Eo = n(461414);
function Ed(e) {
    let { user: t, isVisible: n, shouldShow: i } = e,
        l = oP.Ay.isPremium(t),
        s = oP.Ay.canUseAnimatedAvatar(t),
        {
            pendingAvatar: a,
            pendingThemeColors: r,
            tryItOutThemeColors: o,
            tryItOutAvatar: d,
            tryItOutBanner: u,
        } = (0, R.cf)([Ah.A], () => {
            let e = Ah.A.getPendingChanges(),
                t = Ah.A.getErrors(),
                n = Ah.A.getTryItOutChanges();
            return { ...e, ...n, errors: t };
        }),
        { preset: c, onShuffle: g } = (function () {
            let e = (0, R.bG)([nK.A], () => nK.A.useReducedMotion),
                [t, n] = (0, f.useState)(p4()),
                {
                    banner: i,
                    themeColors: l,
                    avatarDecorationSkuId: s,
                    displayNameStyles: a,
                } = (0, f.useMemo)(() => {
                    let n = p3(t);
                    return {
                        banner: n.getBannerSrc(e),
                        themeColors: n.themeColors,
                        avatarDecorationSkuId: n.avatarDecorationSkuId,
                        displayNameStyles: n.displayNameStyles,
                    };
                }, [t, e]),
                r = (0, R.bG)([pJ.A], () => {
                    let e = pJ.A.getProduct(s);
                    return (0, p$.T)(e?.items[0]) ? e.items[0] : null;
                });
            (0, f.useEffect)(() => {
                (0, p0.w5)({ banner: i, themeColors: l, avatarDecoration: r, displayNameStyles: a });
            }, [i, l, r, a]);
            let o = (0, f.useCallback)(() => {
                let e = p4(t);
                n(e), Y.default.track(q.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: e });
            }, [t]);
            return { preset: t, onShuffle: o };
        })(),
        m = f.useRef(null);
    El(m, iy._F.TRY_IT_OUT);
    let { analyticsLocations: h, sourceAnalyticsLocations: A } = (0, iU.Ay)(ek.A.USER_SETTINGS_TRY_OUT_PREMIUM),
        p = (e) => {
            e &&
                (u?.startsWith("https:") === !0
                    ? fetch(u)
                          .then((e) => e.blob())
                          .then((e) => (0, En.We)(e))
                          .then((e) => {
                              (0, AK.p)({ avatar: d, themeColors: o, banner: e });
                          })
                          .catch(() => {
                              (0, AK.p)({ avatar: d, themeColors: o });
                          })
                    : null != u
                      ? (0, AK.p)({ avatar: d, themeColors: o, banner: u })
                      : (0, AK.p)({ avatar: d, themeColors: o }),
                Y.default.track(q.HAw.TRY_IT_OUT_PRESET_SELECTED, { preset: c }));
        };
    f.useEffect(() => {
        n &&
            Y.default.track(q.HAw.PREMIUM_UPSELL_VIEWED, {
                type: lb.e.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: q.liQ.USER_SETTINGS },
                location_stack: A,
            });
    }, [A, t, n]);
    let E = (0, pq.V)()?.subscription_trial?.sku_id === lb.pe.TIER_2,
        T = (0, pQ.O)(),
        S = (0, Ee.U9)(T, lb.pe.TIER_2);
    return i
        ? (0, x.jsx)(iU.f5, {
              value: h,
              children: (0, x.jsxs)(uH.A, {
                  ref: m,
                  className: Eo.MT,
                  type: uH.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, x.jsx)(AI, {
                          stickyPreview: !1,
                          layoutClassName: Eo.th,
                          profilePreviewTitle: (0, x.jsxs)(x.Fragment, {
                              children: [
                                  (0, x.jsx)(oI.t, { size: "md", color: "currentColor", className: Eo.PC }),
                                  _.intl.string(_.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, x.jsxs)(x.Fragment, {
                              children: [(0, x.jsx)(p6, { preset: c, onShuffle: g }), (0, x.jsx)(Er, { user: t })],
                          }),
                          children: (0, x.jsxs)("div", {
                              className: Eo.EN,
                              children: [
                                  (0, x.jsxs)("div", {
                                      children: [
                                          (0, x.jsx)(eh.D, {
                                              variant: "heading-xl/extrabold",
                                              children: _.intl.string(_.t["2zGdAW"]),
                                          }),
                                          (0, x.jsx)(V.E, {
                                              className: Eo.h_,
                                              variant: "text-sm/normal",
                                              children: _.intl.string(_.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, x.jsx)(pT, {
                                      className: Eo.fz,
                                      user: t,
                                      pendingAvatarSrc: (0, Ay.V7)({ userId: t.id, image: d ?? a }),
                                      pendingColors: o ?? r,
                                      onThemeColorsChange: p0.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, x.jsx)(A4, {
                                      className: Eo.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != u,
                                      onBannerChange: p0.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !s &&
                                      (0, x.jsx)(A$, {
                                          className: Eo.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: p0.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: _.intl.string(_.t["7z0D1c"]),
                                          sectionTitle: _.intl.string(_.t.vtFfPX),
                                      }),
                                  (0, x.jsx)(A1, { user: t, className: Eo.fz }),
                                  !E &&
                                      (0, x.jsx)(V.E, {
                                          variant: "text-sm/normal",
                                          children: _.intl.string(_.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !E &&
                          (0, x.jsx)(pK.d, {
                              onSubscribeModalClose: p,
                              className: Eo.Kv,
                              showUpsell: !0,
                              text: _.intl.format(_.t.TmfgI2, {
                                  onClick: () => {
                                      (0, pZ.K)({ onSubscribeFinish: p });
                                  },
                              }),
                              button: l
                                  ? _.intl.string(_.t.AfRWI8)
                                  : S
                                    ? _.intl.formatToPlainString(_.t.bkQ4bH, { percent: T?.discount.amount })
                                    : _.intl.string(_.t.pj0XBN),
                              position: "inline",
                          }),
                      E &&
                          (0, x.jsxs)("div", {
                              children: [
                                  (0, x.jsx)("div", { className: Eo.BU }),
                                  (0, x.jsx)(Et.Ay, {
                                      type: lb.e.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                      subscriptionTier: lb.pe.TIER_2,
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : null;
}
var Eu = n(814390),
    Ec = n(909536),
    Eg = n(843282),
    E_ = n(145497),
    Em = n(685073),
    Eh = n(534400),
    EA = n(581781),
    Ep = n(743981),
    EE = n(51358);
let ET = (0, lx.Ld)(),
    ES = f.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: n, onChange: i } = e,
            l = f.useMemo(() => new Map(t.map((e) => [e.id, e])), [t]),
            s = (0, R.bG)([t3.default], () => (0, Em.Zo)(t3.default.getCurrentUser()?.primaryGuild).guildId),
            a = void 0 !== n ? n : s,
            r = f.useMemo(
                () => t.reduce((e, t) => (t.profile?.tag != null && e.push({ label: t.name, value: t.id }), e), []),
                [t],
            ),
            o = f.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = l.get(e.value);
                    if (null == t) return null;
                    let n = t.profile?.tag;
                    return null == n
                        ? null
                        : (0, x.jsx)(EA.A, {
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
            d = f.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = l.get(e.value);
                    return null == t || null == t.profile?.tag
                        ? null
                        : (0, x.jsx)(E_.j, {
                              guildId: t.id,
                              guildName: t.name,
                              guildIcon: t.icon,
                              iconSize: 32,
                              animate: !1,
                          });
                },
                [l],
            ),
            u = f.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = l.get(e.value);
                    if (null == t) return null;
                    let n = t.profile?.tag;
                    return null == n
                        ? null
                        : (0, x.jsx)(Eh.o9, {
                              guildId: t.id,
                              guildTag: n,
                              guildBadge: t.profile?.badge ?? void 0,
                              badgeSize: Ep.Sl.SIZE_16,
                              textColor: "interactive-text-default",
                              textVariant: "text-sm/semibold",
                          });
                },
                [l],
            ),
            c = f.useCallback(
                (e) => {
                    let t = e[0];
                    return null == t ? null : (0, x.jsx)(x.Fragment, { children: o(t) });
                },
                [o],
            ),
            g = f.useCallback(
                (e) => {
                    i?.(e);
                },
                [i],
            ),
            m = f.useCallback((e) => e === a, [a]),
            h = f.useCallback((e) => e, []),
            A = f.useCallback(() => {
                i?.(null);
            }, [i]),
            p = f.useRef(null);
        return (
            El(p, iy._F.GUILD_TAG),
            (0, x.jsxs)(oj.A, {
                title: _.intl.string(_.t.Pdd1nd),
                titleId: ET,
                ref: p,
                children: [
                    (0, x.jsx)(V.E, {
                        className: EE.VA,
                        variant: "text-sm/normal",
                        children: _.intl.string(_.t.mlZ6Jx),
                    }),
                    (0, x.jsx)(Eg.Pw, {
                        className: EE.Lt,
                        optionClassName: EE.S0,
                        isSelected: m,
                        options: r,
                        select: g,
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
var Ex = n(556729);
function Ef(e) {
    let t = (0, AG.L)(lb.PremiumTypes.TIER_2);
    return (0, x.jsxs)(oj.A, {
        errors: e.errors,
        disabled: e.disabled,
        title: _.intl.string(_.t["9AjdkD"]),
        children: [
            (0, x.jsx)("div", {
                children: (0, x.jsx)(sM.k, {
                    placeholder: e.placeholder,
                    maxLength: q.zzC,
                    onChange: e.onGlobalNameChange,
                    value: e.pendingGlobalName ?? e.currentGlobalName ?? "",
                }),
            }),
            t && (0, x.jsx)(A1, { user: e.user, className: Ex.F }),
        ],
    });
}
function Eb(e) {
    let { legacyUsername: t, pendingLegacyUsernameDisabled: n } = e,
        i = g.m$.useSetting(),
        l = void 0 !== n ? n : i;
    return (0, x.jsx)(D.d, {
        label: _.intl.string(_.t["3cWDuO"]),
        description: l ? null : _.intl.formatToPlainString(_.t.aYhclf, { username: t }),
        checked: !l,
        onChange: (e) => {
            !e === i ? (0, Ag._e)() : (0, AK.p)({ legacyUsernameDisabled: !e });
        },
    });
}
function EN(e) {
    let { user: t, savedUserColor: n, pendingColor: i, setPendingAccentColor: l } = e,
        s = t.getAvatarURL(null, 80),
        a = (0, po.r)(B.A.unsafe_rawColors.PRIMARY_530).hex(),
        r = (0, pd.rh)(s, a, !1),
        o = (0, p_.LX)(r[0]);
    return (0, x.jsx)(oj.A, {
        title: _.intl.string(_.t["/X3fkf"]),
        children: (0, x.jsx)(pp, { onChange: (e) => l(e), color: i ?? n ?? o, suggestedColors: r, showEyeDropper: !0 }),
    });
}
var EC = n(518477);
let EI = () => {
    let e = (0, R.bG)([u2.default], () => u2.default.getId());
    return (0, x.jsx)(oj.A, {
        title: _.intl.string(_.t.Jzj9q4),
        children: (0, x.jsx)(eA.$, {
            text: _.intl.string(_.t.Geikwq),
            onClick: () => {
                (0, AE.openUserProfileModal)({
                    userId: e,
                    sourceAnalyticsLocations: [ek.A.USER_SETTINGS_USER_PROFILE],
                    hideRestrictedProfile: !0,
                    tabSection: EC.RP.WIDGETS,
                });
            },
            size: "sm",
        }),
    });
};
var Ev = n(289299);
function Ey() {
    let e = (0, R.bG)([t3.default], () => {
            let e = t3.default.getCurrentUser();
            return tO()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e;
        }),
        t = (0, R.bG)([Aj.A], () => Aj.A.getUserProfile(e.id)),
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
        } = (0, R.cf)([Ah.A], () => {
            let e = Ah.A.getPendingChanges(),
                t = Ah.A.getErrors();
            return { ...e, errors: t };
        }),
        g = (0, Ay.V7)({ userId: e.id, image: n }),
        m = (0, AD.EC)(),
        h = oP.Ay.canUsePremiumProfileCustomization(e),
        A = (0, Ab.z5)(n, e.avatar),
        p = (0, Ab.Ac)(l, t?.banner),
        E = (0, pu.Ay)(e.id),
        T = E?.getLegacyUsername(),
        S = (c.global_name?.length ?? 0) > 0 ? c.global_name : (m?.nick ?? []),
        f = (c.bio?.length ?? 0) > 0 ? c.bio : (m?.bio ?? []),
        b = (0, R.yK)([K.A, AO.Ay], () =>
            K.A.getGuildsArray().filter(
                (e) => (0, Em.Rg)(e) && AO.Ay.getSelfMember(e.id)?.joinedAt != null && e.profile?.tag != null,
            ),
        );
    return (0, x.jsxs)("div", {
        className: Ev.Q,
        children: [
            (0, x.jsx)(Ef, {
                placeholder: e.username,
                errors: S,
                currentGlobalName: e.globalName,
                pendingGlobalName: i,
                onGlobalNameChange: (e) => (0, AK.p)({ globalName: e }),
                user: e,
            }),
            (0, x.jsx)(
                pS,
                {
                    sectionTitle: _.intl.string(_.t["+T3RI/"]),
                    errors: c.pronouns,
                    onPronounsChange: (e) => (0, AK.p)({ pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: t?.pronouns ?? "",
                },
                "pronouns",
            ),
            (0, x.jsx)(EI, {}),
            (0, x.jsx)(
                A$,
                {
                    onAvatarChange: (e) => {
                        (0, AK.p)({ avatar: e }), (0, Ab.WU)(null == e ? "remove" : "set");
                    },
                    showRemoveAvatarButton: A,
                    errors: c.avatar,
                    sectionTitle: _.intl.string(_.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, x.jsx)(AZ, { user: e, sectionTitle: _.intl.string(_.t["7v0T9P"]) }, "decoration"),
            (0, x.jsx)(A3, { user: e }),
            (0, x.jsx)(A6, { user: e, sectionTitle: _.intl.string(_.t.wR5wOo) }, "effect"),
            (0, x.jsx)(ps, { user: e, sectionTitle: _.intl.string(_.t.GWrZOd) }, "frame"),
            h
                ? (0, x.jsxs)(x.Fragment, {
                      children: [
                          (0, x.jsx)(
                              A4,
                              {
                                  showRemoveBannerButton: p,
                                  errors: c.banner,
                                  onBannerChange: (e) => (0, AK.p)({ banner: e }),
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, x.jsx)(pT, {
                              user: e,
                              pendingAvatarSrc: g,
                              pendingColors: o,
                              onThemeColorsChange: (e) => (0, AK.p)({ themeColors: e }),
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, x.jsx)(
                      EN,
                      {
                          user: e,
                          savedUserColor: t?.accentColor,
                          pendingColor: r,
                          setPendingAccentColor: (e) => (0, AK.p)({ accentColor: e }),
                      },
                      "color",
                  ),
            (0, x.jsx)(
                Az,
                {
                    sectionTitle: _.intl.string(_.t.ZzAR2Y),
                    errors: f,
                    onBioChange: (e) => (0, AK.p)({ bio: e }),
                    pendingBio: s,
                    currentBio: t?.bio ?? "",
                },
                "bio",
            ),
            b.length > 0 &&
                (0, x.jsx)(ES, {
                    availablePrimaryGuilds: b,
                    pendingPrimaryGuildId: u,
                    onChange: (e) => (0, AK.p)({ primaryGuildId: e }),
                }),
            null != T && (0, x.jsx)(Eb, { legacyUsername: T, pendingLegacyUsernameDisabled: d }, "legacy_username"),
        ],
    });
}
var Ej = n(780207),
    EO = n(482549);
function ER() {
    let e = (0, R.bG)([t3.default], () => {
            let e = t3.default.getCurrentUser();
            return tO()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e;
        }),
        t = (0, R.bG)([eN.A], () => eN.A.hidePersonalInformation),
        {
            pendingBio: n,
            pendingAvatar: i,
            pendingNameplate: l,
            showNotice: s,
            ...a
        } = (0, R.cf)([Ah.A], () => ({ ...Ah.A.getPendingChanges(), showNotice: Ah.A.showNotice() })),
        r = (0, Ay.V7)({ userId: e.id, image: i }),
        o = (0, Ab.lw)({ pendingValue: l, userValue: e?.collectibles?.nameplate }),
        d = (0, Eu.A)() && null != n ? pH.Ay.parse(void 0, n).content : n,
        u = oP.Ay.canUsePremiumProfileCustomization(e),
        c = (0, Ec.St)("edit-profile-upsell"),
        { analyticsLocations: g } = (0, iU.Ay)(ek.A.USER_SETTINGS_USER_PROFILE);
    f.useEffect(() => () => i8.h.wait(Ag.IM), []);
    let [m, h] = f.useState(!1),
        A = !u,
        p = f.useRef(null);
    return t
        ? (0, x.jsx)(dP.A, {})
        : (0, x.jsxs)(iU.f5, {
              value: g,
              children: [
                  (0, x.jsx)(pY, {}),
                  (0, x.jsx)(AI, {
                      profilePreview: (0, x.jsx)(Av.A, {
                          user: e,
                          canUsePremiumCustomization: u,
                          onUpsellClick: Ej.A,
                          pendingBio: d,
                          ...a,
                          pendingAvatar: r,
                      }),
                      nameplatePreview: (0, x.jsx)(Af.A, {
                          user: e,
                          nameplate: o,
                          ...a,
                          className: null == o ? EO.tJ : void 0,
                          isHighlighted: !0,
                      }),
                      children: (0, x.jsx)(Ey, {}),
                  }),
                  (0, x.jsx)(pM.L, {
                      innerRef: p,
                      onChange: (e) => h(e),
                      threshold: 0.25,
                      active: A,
                      children: (0, x.jsx)("div", {
                          ref: p,
                          children: (0, x.jsx)(Ed, { user: e, shouldShow: A, isVisible: m }),
                      }),
                  }),
                  A &&
                      !s &&
                      (0, x.jsx)(pK.d, {
                          className: EO.EL,
                          showUpsell: !m,
                          text: _.intl.format(_.t.TmfgI2, { onClick: () => (0, pZ.K)({}) }),
                          textVariant: "heading-md/medium",
                          useUpdatedStyling: !0,
                          leadingAction: c
                              ? (0, x.jsx)(pW.l, { size: "md", location: ek.A.PREMIUM_WISHLIST_EDIT_PROFILE_UPSELL })
                              : void 0,
                          button: (0, x.jsx)("div", {
                              className: EO.Xl,
                              children: (0, x.jsx)(eA.$, {
                                  variant: "overlay-primary",
                                  onClick: () => {
                                      Y.default.track(q.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                                          cta_variant: "floating_action_button",
                                      }),
                                          p?.current?.scrollIntoView({ behavior: "smooth" });
                                  },
                                  text: _.intl.string(_.t.uw9zI7),
                                  icon: oI.t,
                              }),
                          }),
                      }),
              ],
          });
}
var EL = n(625494),
    ED = n(454078);
let EG = { [iy.Eq.USER_PROFILE]: "main_profile_tab", [iy.Eq.GUILD]: "guild_profile_tab" },
    EP = (0, d.E2)(u.X.PROFILE_SETTING, {
        Component: function () {
            let e = (0, R.bG)([sX.A, W.Ay, Ah.A], () => {
                    let e = Ah.A.selectedGuildId ?? sX.A.getGuildId();
                    return null == e || Ah._.has(e) ? W.Ay.getFlattenedGuildIds().find((e) => !Ah._.has(e)) : e;
                }),
                t = (0, R.bG)([K.A], () => K.A.getGuild(e)),
                n = (0, R.bG)([Ah.A], () => Ah.A.showNotice()),
                i = (0, R.bG)([t3.default], () => t3.default.getCurrentUser()),
                l = Ei.A.useField("subsection");
            return (
                f.useEffect(() => {
                    (0, ap._)(EG[l]);
                }, [l]),
                f.useEffect(() => {
                    null != i && t?.id != null && (0, pD.A)(i.id, i.getAvatarURL(t?.id, 80), { guildId: t?.id });
                }, [t?.id, i]),
                (0, x.jsxs)(pP, {
                    children: [
                        (0, x.jsxs)(AT.V, {
                            className: ED.$H,
                            type: "top",
                            look: "brand",
                            selectedItem: l,
                            onItemSelect: function (e) {
                                if (l !== e) {
                                    if (n) {
                                        (0, aE.fO)({ duration: 300, intensity: AS.n3 }),
                                            EL._.dispatch(q.jej.EMPHASIZE_NOTICE);
                                        return;
                                    }
                                    e === iy.Eq.GUILD && null != t && (0, Ax.V2)(t.id),
                                        Ei.A.setState({ subsection: e });
                                }
                            },
                            children: [
                                (0, x.jsx)(
                                    AT.V.Item,
                                    {
                                        className: ED.YU,
                                        id: iy.Eq.USER_PROFILE,
                                        children: _.intl.string(_.t["2p07FR"]),
                                    },
                                    iy.Eq.USER_PROFILE,
                                ),
                                (0, x.jsx)(
                                    AT.V.Item,
                                    {
                                        className: eB()(ED.YU, ED.HY),
                                        "aria-label": _.intl.string(_.t.kPHroX),
                                        id: iy.Eq.GUILD,
                                        children: _.intl.string(_.t.kPHroX),
                                    },
                                    iy.Eq.GUILD,
                                ),
                            ],
                        }),
                        l === iy.Eq.GUILD
                            ? (0, x.jsx)(pL, {
                                  selectedGuild: t,
                                  onGuildChange: function (e) {
                                      if (n) {
                                          (0, aE.fO)({ duration: 300, intensity: AS.n3 }),
                                              EL._.dispatch(q.jej.EMPHASIZE_NOTICE);
                                          return;
                                      }
                                      null != e && (0, Ax.JJ)(e.id);
                                  },
                              })
                            : (0, x.jsx)(ER, {}),
                    ],
                })
            );
        },
        useSearchTerms: () => [
            _.intl.string(_.t["vi7f+q"]),
            _.intl.string(_.t.Ip9nBS),
            _.intl.string(_.t["2p07FR"]),
            _.intl.string(_.t["7vhiqk"]),
            _.intl.string(_.t.kPHroX),
            _.intl.string(_.t.lqaIxI),
            _.intl.string(_.t.Vgdusv),
            _.intl.string(_.t.DMeO2X),
        ],
    }),
    EM = (0, d.zZ)(u.X.PROFILE_CATEGORY, { buildLayout: () => [EP] });
var EU = n(881324);
let Ek = () => {
        let e = (0, R.bG)([t3.default], () => t3.default.getCurrentUser()),
            { avatarSrc: t, avatarDecorationSrc: n } = (0, Ap.A)({ userId: e?.id, size: nH._3.SIZE_48 });
        return null == e
            ? null
            : (0, x.jsxs)("div", {
                  className: EU.a5,
                  children: [
                      (0, x.jsx)(nY.eu, {
                          src: t,
                          avatarDecoration: n,
                          size: nH._3.SIZE_48,
                          "aria-label": _.intl.string(_.t.lqaIxI),
                      }),
                      (0, x.jsxs)("div", {
                          className: EU.FS,
                          children: [
                              (0, x.jsx)(V.E, {
                                  color: "text-strong",
                                  variant: "text-md/medium",
                                  lineClamp: 1,
                                  children: e.globalName ?? e.username,
                              }),
                              (0, x.jsxs)("div", {
                                  className: EU.Fk,
                                  children: [
                                      (0, x.jsx)(V.E, {
                                          variant: "text-sm/normal",
                                          color: "currentColor",
                                          lineClamp: 1,
                                          children: _.intl.string(_.t.Ip9nBS),
                                      }),
                                      (0, x.jsx)(oG.R, { size: "xxs", color: "currentColor" }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              });
    },
    EV = (0, d.t_)(u.X.PROFILE_PANEL, {
        useTitle: () => _.intl.string(_.t["vi7f+q"]),
        notice: { stores: [Ah.A], element: Am.A },
        initialize: () => () =>
            i8.h.wait(() => {
                (0, Ag.F7)(), A_.A.clearSubsection(q.nc_.PROFILE_CUSTOMIZATION);
            }),
        buildLayout: () => [EM],
    }),
    Ew = (0, d.i4)(u.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(_.t["vi7f+q"]),
        icon: EF,
        StronglyDiscouragedCustomComponent: Ek,
        usePredicate: () => !(0, AA.X)("user_settings_sidebar"),
        buildLayout: () => [EV],
    }),
    EB = (0, d.i4)(u.X.PROFILE_SIDEBAR_ITEM_WYSIWYG, {
        useTitle: () => _.intl.string(_.t["vi7f+q"]),
        icon: EF,
        StronglyDiscouragedCustomComponent: Ek,
        usePredicate: () => (0, AA.X)("user_settings_sidebar"),
        onClick: () => {
            let e = u2.default.getId();
            (0, AE.openUserProfileModal)({ userId: e });
        },
        buildLayout: () => [],
    });
function EF() {
    let e = (0, R.bG)([t3.default], () => t3.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, Ap.A)({ userId: e?.id, size: nH._3.SIZE_48 });
    return (0, x.jsx)(nY.eu, { src: t, avatarDecoration: n, size: nH._3.SIZE_20, "aria-hidden": !0 });
}
let Ez = (0, d.WI)(u.X.PROFILE_SECTION, { hoisted: !0, buildLayout: () => [Ew, EB] });
var EX = n(358776),
    EY = n(98207);
function EH() {
    return (0, x.jsx)(tr.p, { icon: dM.X, messageType: tr.Y.POSITIVE, children: _.intl.string(_.t.FsmBy4) });
}
var EK = n(670492),
    EW = n(579872),
    EZ = n(900686),
    EQ = n(518142),
    Eq = n(662758),
    EJ = n(407186);
function E$(e) {
    let { backupCodes: t, hasTOTPEnabled: n, currentUser: i } = e,
        l = f.useCallback((e) => {
            (0, N.openModal)((t) => (0, x.jsx)(EQ.default, { ...t, password: e }), { stackingBehavior: "stack" });
        }, []),
        s = f.useCallback(() => {
            (0, N.openModal)((e) =>
                (0, x.jsx)(Eq.default, {
                    ...e,
                    handleSubmit: (e) =>
                        EY.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                            l(e);
                        }),
                    title: _.intl.string(_.t.PsQmzU),
                    actionText: _.intl.string(_.t.ajkYcF),
                }),
            );
        }, [l]),
        a = f.useCallback(() => {
            let e = t
                    .map((e) => {
                        let { consumed: t, code: n } = e;
                        return `* ${n.substr(0, 4)}-${n.substr(4)} ${t ? "(used)" : ""}`;
                    })
                    .join("\r\n"),
                n = _.intl.formatToPlainString(_.t["uYWwh/"], { email: i.email });
            return `${n}\r
\r
${e}`;
        }, [t, i.email]),
        r = f.useMemo(
            () =>
                t.length > 0
                    ? (0, x.jsx)(EZ.A, {
                          fileContents: a,
                          contentType: "text/plain",
                          fileName: "discord_backup_codes.txt",
                          children: (0, x.jsx)(eA.$, {
                              variant: "primary",
                              size: "sm",
                              text: _.intl.string(_.t.qZZUy6),
                          }),
                      })
                    : (0, x.jsx)(eA.$, { variant: "primary", size: "sm", text: _.intl.string(_.t.xZEzbu), onClick: s }),
            [t.length, a, s],
        ),
        o = f.useCallback(() => {
            EW.A.show({
                title: _.intl.string(_.t["D+aE7g"]),
                body: _.intl.string(_.t.EA4ZEk),
                cancelText: _.intl.string(_.t["ETE/oC"]),
                onConfirm: () => EY.A.disable(),
            });
        }, []);
    return (0, x.jsx)(lR.D, {
        label: _.intl.string(_.t.EPVq00),
        description: _.intl.string(_.t.bQwxib),
        children: (0, x.jsxs)(rT.e, {
            size: "sm",
            children: [
                r,
                n &&
                    (0, x.jsx)(eA.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        text: _.intl.string(_.t["D+aE7g"]),
                        onClick: o,
                    }),
                !n &&
                    (0, x.jsx)(eA.$, {
                        variant: "primary",
                        size: "sm",
                        text: _.intl.string(_.t.cDgKte),
                        onClick: EJ.Ay.enableMFA,
                    }),
            ],
        }),
    });
}
var E0 = n(464477);
function E1() {
    return !E0.K7;
}
let E2 = (0, d.E2)(u.X.ACCOUNT_TWO_FACTOR_CRYPTO_NOTICE, {
    useSearchTerms: () => [_.intl.string(_.t.m0FidJ)],
    usePredicate: E1,
    Component: function () {
        return (0, x.jsx)(lR.D, {
            label: _.intl.string(_.t.EPVq00),
            children: (0, x.jsx)(tr.p, { messageType: tr.Y.INFO, children: _.intl.string(_.t.PhHhsj) }),
        });
    },
});
function E5() {
    let e = E1(),
        t = (0, R.bG)([t3.default], () => {
            let e = t3.default.getCurrentUser();
            return null != e && !e.verified;
        });
    return !e && t;
}
let E3 = (0, d.E2)(u.X.ACCOUNT_UNVERIFIED_USER_NOTICE, {
    useSearchTerms: () => [_.intl.string(_.t.m0FidJ)],
    usePredicate: E5,
    Component: function () {
        return (0, x.jsx)(lR.D, {
            label: _.intl.string(_.t.EPVq00),
            children: (0, x.jsx)(tr.p, { messageType: tr.Y.WARNING, children: _.intl.string(_.t.uggF7o) }),
        });
    },
});
function E8() {
    return (0, R.bG)([t3.default], () => {
        let e = t3.default.getCurrentUser();
        return null != e && e.mfaEnabled;
    });
}
let E4 = (0, d.E2)(u.X.ACCOUNT_AUTHENTICATOR_APP_SETTING, {
    useSearchTerms: function () {
        let e = (0, R.bG)([u2.default], () => u2.default.hasTOTPEnabled()),
            t = [_.intl.string(_.t.m0FidJ), _.intl.string(_.t.xZEzbu)];
        return e ? t.push(_.intl.string(_.t["D+aE7g"])) : t.push(_.intl.string(_.t.cDgKte)), t;
    },
    usePredicate: function () {
        let e = E1(),
            t = E5(),
            n = E8();
        return !e && !t && n;
    },
    Component: function () {
        let e = (0, R.bG)([t3.default], () => t3.default.getCurrentUser()),
            t = (0, R.bG)([EK.A], () => EK.A.getBackupCodes()),
            n = (0, R.bG)([u2.default], () => u2.default.hasTOTPEnabled());
        return null == e ? null : (0, x.jsx)(E$, { backupCodes: t, currentUser: e, hasTOTPEnabled: n });
    },
});
var E9 = n(658675),
    E7 = n(103579);
function E6(e) {
    let {
            code: { code: t, consumed: n },
        } = e,
        i = `${t.substr(0, 4)}-${t.substr(4)}`,
        l = f.useRef(null),
        s = f.useCallback(
            (e) => {
                "c" === e.key &&
                    e.metaKey &&
                    u9.p5 &&
                    (e.preventDefault(), e.stopPropagation(), (0, u9.C)(i), l?.current?.focus());
            },
            [i],
        );
    return (0, x.jsx)("li", {
        className: nb.SX,
        children: (0, x.jsxs)(k.D, {
            innerRef: l,
            className: E7.Uc,
            onKeyDown: s,
            children: [(0, x.jsx)(E9.P, { checked: n }), (0, x.jsx)("span", { className: E7.aY, children: i })],
        }),
    });
}
function Te(e) {
    let { backupCodes: t } = e,
        n = f.useCallback((e) => e.map((e) => (0, x.jsx)(E6, { code: e }, e.code)), []),
        i = f.useCallback(async () => {
            let e = EK.A.getVerificationKey();
            await EY.A.confirmViewBackupCodes(e, !0);
        }, []);
    return (0, x.jsxs)(lR.D, {
        label: _.intl.string(_.t.GfqHPn),
        description: _.intl.format(_.t.OhmvYt, {}),
        children: [
            (0, x.jsxs)(sw.A, {
                children: [
                    (0, x.jsx)(sw.A.Child, {
                        children: (0, x.jsx)("ul", { className: E7.Pm, children: n(t.slice(0, t.length / 2)) }),
                    }),
                    (0, x.jsx)(sw.A.Child, {
                        children: (0, x.jsx)("ul", { className: E7.Pm, children: n(t.slice(t.length / 2)) }),
                    }),
                ],
            }),
            (0, x.jsx)(F.Q, { textVariant: "text-sm/medium", onClick: i, text: _.intl.string(_.t.RIThUu) }),
        ],
    });
}
let Tt = (0, d.E2)(u.X.ACCOUNT_BACKUP_CODES_SETTING, {
        useSearchTerms: () => [_.intl.string(_.t.m0FidJ), _.intl.string(_.t.xZEzbu)],
        usePredicate: function () {
            let e = E1(),
                t = E5(),
                n = E8(),
                i = (0, R.bG)([EK.A], () => EK.A.getBackupCodes().length > 0);
            return !e && !t && n && i;
        },
        Component: function () {
            let e = (0, R.bG)([EK.A], () => EK.A.getBackupCodes());
            return (0, x.jsx)(Te, { backupCodes: e });
        },
    }),
    Tn = (0, d.E2)(u.X.ACCOUNT_ENABLE_MFA_SETTING, {
        useSearchTerms: () => [_.intl.string(_.t.m0FidJ)],
        usePredicate: function () {
            let e = E1(),
                t = E5();
            return (0, R.bG)([t3.default], () => {
                let n = t3.default.getCurrentUser();
                return null != n && !n.mfaEnabled && !e && !t;
            });
        },
        Component: function () {
            return (0, x.jsx)(lR.D, {
                label: _.intl.string(_.t.EPVq00),
                description: _.intl.string(_.t["8aDa1t"]),
                children: (0, x.jsx)(eA.$, {
                    variant: "primary",
                    size: "sm",
                    text: _.intl.string(_.t.cDgKte),
                    onClick: EJ.Ay.enableMFA,
                }),
            });
        },
    });
var Ti = n(846017);
let Tl = (0, d.Tf)(u.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
        useTitle: () => _.intl.string(_.t["CIGa+7"]),
        useLabel: () => _.intl.string(_.t.bt75uw),
        useAriaLabel: () => _.intl.string(_.t["FRep5/"]),
        useVariant: () => "secondary",
        onClick: () => {
            (0, N.openModal)((e) => (0, x.jsx)(Ti.default, { ...e, onSuccess: () => e.onClose() }));
        },
    }),
    Ts = (0, d.E2)(u.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
        useSearchTerms: () => [_.intl.string(_.t["FRep5/"])],
        Component: function () {
            return (0, x.jsx)(eA.$, {
                variant: "primary",
                size: "sm",
                text: _.intl.string(_.t["FRep5/"]),
                onClick: () => (0, N.openModal)((e) => (0, x.jsx)(Ti.default, { ...e, onSuccess: e.onClose })),
            });
        },
    });
var Ta = n(557722),
    Tr = n(615715);
function To(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null == e
        ? null
        : e.hasAnyStaffLevel()
          ? t
              ? _.intl.string(_.t.YJGvuD)
              : _.intl.string(_.t["3iKih7"])
          : e.hasFlag(q.nhx.PARTNER)
            ? t
                ? _.intl.string(_.t["9UucjT"])
                : _.intl.string(_.t.Sq6Q1u)
            : null == e.email
              ? t
                  ? _.intl.string(_.t["9VWpT9"])
                  : _.intl.string(_.t.LfCBZG)
              : null;
}
var Td =
    (((r = {}).AVAILABLE = "available"),
    (r.UNAVAILABLE_NO_CRYPTO = "unavailable_no_crypto"),
    (r.UNAVAILABLE_UNVERIFIED = "unavailable_unverified"),
    r);
function Tu() {
    let e = (0, dE.bG)([t3.default], () => t3.default.getCurrentUser()?.verified);
    return E0.K7 ? (!1 === e ? "unavailable_unverified" : "available") : "unavailable_no_crypto";
}
function Tc() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (0, dE.bG)([K.A, pf.A, t3.default], () =>
        t3.default.getCurrentUser()?.hasAnyStaffLevel()
            ? e
                ? _.intl.string(_.t.hxf9fX)
                : _.intl.string(_.t["3iKih7"])
            : K.A.getGuildsArray().some(
                    (e) =>
                        e.features.has(q.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) &&
                        pf.A.can(q.xBc.ADMINISTRATOR, e),
                )
              ? e
                  ? _.intl.string(_.t.OYTCUh)
                  : _.intl.string(_.t.HC8uSZ)
              : null,
    );
}
var Tg = n(53516);
function T_(e) {
    let t,
        n,
        { currentUser: i, togglingSMS: l } = e,
        [s, a] = f.useState(!1),
        r = f.useCallback(
            (e) => {
                e.preventDefault(), a(!s);
            },
            [s],
        ),
        o = f.useCallback(function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            (0, N.openModal)((t) => (0, x.jsx)(Tr.default, { reason: Ta.d.USER_SETTINGS_UPDATE, ...t, ...e }), {
                modalKey: Tg.V,
            });
        }, []),
        d = f.useCallback(() => {
            o();
        }, [o]),
        u = f.useCallback(() => {
            null == i.phone ? o({ onAddedPhone: EY.A.enableSMS }) : EY.A.enableSMS();
        }, [i, o]),
        c = f.useCallback(() => {
            (0, N.openModal)((e) =>
                (0, x.jsx)(Eq.default, {
                    ...e,
                    handleSubmit: EY.A.disableSMS,
                    title: _.intl.string(_.t.KLWnit),
                    children: _.intl.string(_.t["W0/Duf"]),
                }),
            );
        }, []),
        g = f.useCallback((e) => (null == e ? "" : `${"*".repeat(e.length - 4)}${e.slice(-4)}`), []),
        m = null != i.phone,
        h = i.hasFlag(q.nhx.MFA_SMS);
    if (m || h) {
        let e = s ? i.phone : g(i.phone);
        n = (0, x.jsxs)(V.E, {
            variant: "text-sm/normal",
            children: [
                _.intl.format(_.t.PXVoEO, { phoneNumber: e }),
                (0, x.jsx)(dT.Anchor, {
                    onClick: r,
                    className: E7.vN,
                    children: s ? _.intl.string(_.t.FfltIN) : _.intl.string(_.t.llArAg),
                }),
            ],
        });
    }
    if (h)
        t = (0, x.jsx)(eA.$, {
            variant: "critical-secondary",
            size: "sm",
            text: _.intl.string(_.t.KLWnit),
            loading: l,
            onClick: c,
        });
    else {
        let e = To(i);
        t = (0, x.jsxs)(rT.e, {
            size: "sm",
            children: [
                (0, x.jsx)(eA.$, {
                    variant: "primary",
                    size: "sm",
                    text: e ?? _.intl.string(_.t.DZQe23),
                    onClick: u,
                    loading: l,
                    disabled: null != e,
                }),
                m
                    ? (0, x.jsx)(eA.$, {
                          variant: "secondary",
                          size: "sm",
                          text: _.intl.string(_.t.Ulqq6K),
                          onClick: d,
                      })
                    : null,
            ],
        });
    }
    return (0, x.jsxs)(lR.D, {
        label: _.intl.string(_.t.uHAJ5v),
        description: _.intl.string(_.t.fspJ4H),
        children: [n, t],
    });
}
let Tm = (0, d.E2)(u.X.ACCOUNT_SMS_BACKUP_AUTHENTICATION_SETTING, {
    useSearchTerms: () => [_.intl.string(_.t.uHAJ5v)],
    usePredicate: function () {
        let e = E1(),
            t = E5(),
            n = E8(),
            i = (0, R.bG)([u2.default], () => u2.default.hasTOTPEnabled());
        return !e && !t && n && i;
    },
    Component: function () {
        let e = (0, R.bG)([t3.default], () => t3.default.getCurrentUser()),
            t = (0, R.bG)([EK.A], () => EK.A.togglingSMS);
        return null == e ? null : (0, x.jsx)(T_, { currentUser: e, togglingSMS: t });
    },
});
var Th = n(328009);
let TA = (0, d.E2)(u.X.ACCOUNT_SECURITY_KEYS_SETTING, {
    useSearchTerms: () => [_.intl.string(_.t.vrOCCk), _.intl.string(_.t.y7SXYX)],
    usePredicate: function () {
        let e = E1(),
            t = E5();
        return !e && !t;
    },
    Component: Th.A,
});
var Tp = n(200921),
    TE = n(390310),
    TT = n(766928),
    TS = n(568385),
    Tx = n(791606),
    Tf = n(646270),
    Tb = n(738678);
function TN(e, t) {
    let n = e.client_info?.location ?? e.client_info?.ip,
        i = e.client_info?.platform,
        { text: l, icon: s } = (function (e) {
            switch (e?.toLowerCase().trim()) {
                case null:
                case void 0:
                case "":
                    return { text: _.intl.string(_.t.cDHCNY), icon: e5.k };
                case "ios":
                case "android":
                    return { text: e, icon: Tf.u };
                case "horizon os":
                    return { text: e, icon: Tb.G };
                default:
                    return { text: e, icon: e5.k };
            }
        })(e.client_info?.os);
    return { location: n, platform: i, os: l, Icon: s, lastActive: t ? null : (0, TE.Y)(e.approx_last_used_time) };
}
var TC = n(405814);
function TI() {
    return (0, x.jsx)(V.E, { variant: "text-sm/normal", className: TC.h_, children: _.intl.string(_.t.zZp618) });
}
function Tv() {
    let { currentSession: e } = (0, TE.r)();
    return null == e
        ? (0, x.jsx)("div", { className: TC.Lq, children: (0, x.jsx)(dU.y, {}) })
        : (0, x.jsx)(nr.n, { label: _.intl.string(_.t.LLS19o), children: (0, x.jsx)(TO, { session: e, current: !0 }) });
}
function Ty(e) {
    let { checked: t, otherSessions: n } = e;
    return (0, x.jsx)(lR.D, {
        label: t.size > 0 ? _.intl.string(_.t.mMEmRO) : _.intl.string(_.t.Vij32M),
        description: _.intl.string(_.t.OTXyaf),
        children: (0, x.jsx)("div", {
            "data-button-hoisted-classname-wrapper": !0,
            className: TC.Cn,
            children: (0, x.jsx)(eA.$, {
                variant: "critical-secondary",
                size: "sm",
                text:
                    t.size > 0
                        ? _.intl.formatToPlainString(_.t["83CPLj"], { count: t.size })
                        : _.intl.string(_.t.cLmmeY),
                onClick: () => {
                    t.size > 0 ? (0, Tp.U0)(Array.from(t)) : (0, Tp.U0)(n.map((e) => e.id_hash));
                },
            }),
        }),
    });
}
function Tj() {
    let { currentSession: e, otherSessions: t } = (0, TE.r)(),
        n = (0, R.bG)([t3.default], () => t3.default.getCurrentUser()),
        [i, l] = f.useState(new Set());
    return (null == e && 0 === t.length) || (0 === t.length && n?.mfaEnabled)
        ? null
        : t.length > 0 || !n?.mfaEnabled
          ? (0, x.jsxs)(x.Fragment, {
                children: [
                    (0, x.jsxs)(nr.n, {
                        label: _.intl.string(_.t.xx1MWc),
                        children: [
                            t.map((e) =>
                                (0, x.jsx)(
                                    TO,
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
                            n?.mfaEnabled ? null : (0, x.jsx)(TR, {}),
                        ],
                    }),
                    t.length > 0 &&
                        (0, x.jsx)("div", {
                            className: TC.wq,
                            children: (0, x.jsx)(Ty, { checked: i, otherSessions: t }),
                        }),
                ],
            })
          : null;
}
function TO(e) {
    let { session: t, current: n, setChecked: i, checked: l, useChecks: s } = e,
        { location: a, platform: r, os: o, Icon: d, lastActive: u } = TN(t, n),
        c = [o, r].filter(t8.Vq),
        g = [a, u].filter(t8.Vq);
    return (0, x.jsxs)(
        "div",
        {
            className: eB()(TC.dZ, { [TC.gg]: n }),
            children: [
                (0, x.jsxs)("div", {
                    className: TC.OC,
                    children: [
                        (0, x.jsx)("div", {
                            className: TC.km,
                            children: (0, x.jsx)(d, { size: "md", color: "currentColor" }),
                        }),
                        (0, x.jsxs)("div", {
                            className: TC.F3,
                            children: [
                                (0, x.jsxs)(V.E, {
                                    variant: "eyebrow",
                                    className: TC.nT,
                                    children: [
                                        (0, x.jsx)("span", { children: c[0] }),
                                        c.length > 1 &&
                                            (0, x.jsxs)(x.Fragment, {
                                                children: [
                                                    (0, x.jsx)("span", { children: "\xb7" }),
                                                    (0, x.jsx)("span", { children: c[1] }),
                                                ],
                                            }),
                                    ],
                                }),
                                (0, x.jsxs)(V.E, {
                                    variant: "text-sm/medium",
                                    className: TC.nT,
                                    children: [
                                        (0, x.jsx)("span", { children: g[0] }),
                                        g.length > 1 &&
                                            (0, x.jsxs)(x.Fragment, {
                                                children: [
                                                    (0, x.jsx)("span", { children: "\xb7" }),
                                                    (0, x.jsx)("span", { children: g[1] }),
                                                ],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        n
                            ? null
                            : s
                              ? (0, x.jsx)("div", {
                                    className: TC.GR,
                                    children: (0, x.jsx)(TS.J, {
                                        onChange: (e) => {
                                            i?.(e);
                                        },
                                        checked: l,
                                    }),
                                })
                              : (0, x.jsx)(k.D, {
                                    className: TC.ux,
                                    onClick: (e) => {
                                        e.shiftKey ? i?.(!0) : (0, Tp.U0)(t.id_hash);
                                    },
                                    "aria-label": _.intl.string(_.t.E4MJNt),
                                    children: (0, x.jsx)(ck.P, { size: "md", color: "currentColor" }),
                                }),
                    ],
                }),
                !n && (0, x.jsx)(nR.c, { className: TC.O9 }),
            ],
        },
        t.id_hash,
    );
}
function TR() {
    return (0, x.jsxs)("div", {
        className: eB()(TC.dZ, TC.EC),
        children: [
            (0, x.jsxs)("div", {
                className: TC.OC,
                children: [
                    (0, x.jsx)("div", { className: TC.km, children: (0, x.jsx)(Tx.A, { width: "32", height: "32" }) }),
                    (0, x.jsxs)("div", {
                        className: TC.F3,
                        children: [
                            (0, x.jsx)(V.E, {
                                variant: "eyebrow",
                                className: TC.nT,
                                color: "text-muted",
                                children: (0, x.jsx)("span", { children: _.intl.string(_.t.iUa0sn) }),
                            }),
                            (0, x.jsx)(V.E, {
                                variant: "text-sm/medium",
                                className: TC.nT,
                                color: "text-muted",
                                children: (0, x.jsx)("span", {
                                    children: _.intl.format(_.t["044+8i"], {
                                        onClick: () =>
                                            (0, ej.openUserSettings)(u.X.ACCOUNT_PANEL, {
                                                analyticsLocations: [ek.A.USER_SETTINGS_SESSIONS],
                                            }),
                                    }),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, x.jsx)("div", { className: TC.O9 }),
        ],
    });
}
var TL = n(176524),
    TD = n(583133);
function TG(e) {
    let { icon: t, label: n, subLabel: i, description: l, children: s, muted: a } = e;
    return (0, x.jsxs)(L.B, {
        direction: "horizontal",
        align: "center",
        gap: "sm",
        role: "listitem",
        children: [
            (0, x.jsx)(TL.A, { Icon: t, color: a ? B.A.colors.ICON_MUTED : "currentColor" }),
            (0, x.jsxs)(L.B, {
                direction: "vertical",
                gap: "xxs",
                children: [
                    (0, x.jsxs)(L.B, {
                        direction: "horizontal",
                        gap: "xs",
                        children: [
                            (0, x.jsx)(V.E, { variant: "text-md/semibold", color: "text-strong", children: n }),
                            null != n &&
                                null != i &&
                                (0, x.jsx)(V.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    "aria-hidden": !0,
                                    children: "•",
                                }),
                            null != i &&
                                (0, x.jsx)(V.E, { variant: "text-md/medium", color: "text-subtle", children: i }),
                        ],
                    }),
                    (0, x.jsx)(V.E, { variant: "text-sm/normal", color: "text-muted", children: l }),
                ],
            }),
            s,
        ],
    });
}
function TP(e) {
    let { session: t, current: n } = e,
        { location: i, platform: l, os: s, Icon: a, lastActive: r } = TN(t, n),
        o = [i, r].filter(t8.Vq);
    return (0, x.jsx)(TG, {
        icon: a,
        label: s,
        subLabel: l,
        description: o.join(" \xb7 "),
        children:
            !n &&
            (0, x.jsx)(k.D, {
                className: TD.X,
                onClick: () => (0, Tp.U0)(t.id_hash),
                "aria-label": _.intl.string(_.t.E4MJNt),
                children: (0, x.jsx)(ck.P, { size: "md", color: "currentColor" }),
            }),
    });
}
function TM(e) {
    let { title: t, children: n } = e,
        i = f.useId();
    return (0, x.jsxs)(L.B, {
        role: "group",
        "aria-labelledby": i,
        gap: "xl",
        padding: { top: 8, bottom: 8 },
        children: [
            (0, x.jsx)(eh.D, { id: i, variant: "heading-md/semibold", color: "text-muted", children: t }),
            (0, x.jsx)(L.B, { role: "list", gap: "xl", children: n }),
        ],
    });
}
function TU() {
    let { currentSession: e } = (0, TE.r)();
    return null == e
        ? (0, x.jsx)(dU.y, {})
        : (0, x.jsx)(TM, { title: _.intl.string(_.t.LLS19o), children: (0, x.jsx)(TP, { session: e, current: !0 }) });
}
let Tk = (0, d.E2)(u.X.SESSIONS_CURRENT_SESSION_SETTING, {
        Component: function () {
            return (0, EX._A)("CurrentSessionSetting") ? (0, x.jsx)(TU, {}) : (0, x.jsx)(Tv, {});
        },
        useSearchTerms: () => [],
    }),
    TV = (0, d.E2)(u.X.SESSIONS_LOGOUT_ALL_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = (0, TE.r)();
            return (0, x.jsx)(lR.D, {
                label: _.intl.string(_.t.Vij32M),
                description: _.intl.string(_.t.OTXyaf),
                children: (0, x.jsx)(eA.$, {
                    onClick: () => (0, Tp.U0)(e.map((e) => e.id_hash)),
                    variant: "critical-primary",
                    size: "sm",
                    text: _.intl.string(_.t.cLmmeY),
                }),
            });
        },
        useSearchTerms: () => [_.intl.string(_.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = (0, TE.r)();
            return e.length > 0;
        },
    });
function Tw() {
    return (0, x.jsx)(TG, {
        icon: TT.W,
        label: _.intl.string(_.t.iUa0sn),
        description: _.intl.format(_.t["044+8i"], {
            onClick: () =>
                (0, ej.openUserSettings)(u.X.ACCOUNT_PANEL, { analyticsLocations: [ek.A.USER_SETTINGS_SESSIONS] }),
        }),
        muted: !0,
    });
}
function TB() {
    let { otherSessions: e } = (0, TE.r)(),
        t = (0, R.bG)([t3.default], () => t3.default.getCurrentUser());
    return (0, x.jsxs)(TM, {
        title: _.intl.string(_.t.xx1MWc),
        children: [e.map((e) => (0, x.jsx)(TP, { session: e }, e.id_hash)), t?.mfaEnabled ? null : (0, x.jsx)(Tw, {})],
    });
}
let TF = (0, d.E2)(u.X.SESSIONS_OTHER_SESSIONS_SETTING, {
        Component: function () {
            return (0, EX._A)("OtherSessionsSetting") ? (0, x.jsx)(TB, {}) : (0, x.jsx)(Tj, {});
        },
        useSearchTerms: () => [_.intl.string(_.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = (0, TE.r)(),
                t = (0, R.bG)([t3.default], () => t3.default.getCurrentUser()?.mfaEnabled);
            return e.length > 0 || !t;
        },
    }),
    Tz = (0, d.zZ)(u.X.SESSIONS_CATEGORY, {
        useTitle: () => _.intl.string(_.t.mEndXM),
        useSubtitle: () => _.intl.string(_.t.b7ZpTM),
        initialize: () => {
            (0, Tp.GY)();
        },
        buildLayout: () => [Tk, TF, TV],
        useSearchTerms: () => [
            _.intl.string(_.t["+1h0k/"]),
            _.intl.string(_.t.LLS19o),
            _.intl.string(_.t.xx1MWc),
            _.intl.string(_.t.lSWsrd),
        ],
    }),
    TX = (0, d.zZ)(u.X.SESSIONS_CATEGORY, {
        useSearchTerms: () => [
            _.intl.string(_.t["+1h0k/"]),
            _.intl.string(_.t.LLS19o),
            _.intl.string(_.t.xx1MWc),
            _.intl.string(_.t.Vij32M),
            _.intl.string(_.t.lSWsrd),
        ],
        buildLayout: () => [Tk, TF],
        initialize: () => (
            (0, Tp.GY)(),
            () => {
                (0, Tp.ZQ)();
            }
        ),
        useInlineNotice: function () {
            return f.useMemo(() => ({ type: eb.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: TI }), []);
        },
    }),
    TY = (0, d.t_)(u.X.SESSIONS_PANEL, {
        useTitle: () => ((0, EX._A)("SessionsPanel") ? _.intl.string(_.t.mEndXM) : _.intl.string(_.t["+1h0k/"])),
        useObscuredNotice: dP.L,
        buildLayout: () => ((0, EX.pC)("SessionsPanel") ? [Tz] : [TX]),
    }),
    TH = (0, d.i4)(u.X.SESSIONS_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(_.t["+1h0k/"]),
        icon: TT.W,
        usePredicate: () => !(0, EX._A)("SessionsPanel"),
        buildLayout: () => [TY],
    }),
    TK = (0, d.t0)(u.X.ACCOUNT_SESSIONS_NESTED_PANEL, {
        buildLayout: () => [TY],
        usePredicate: () => (0, EX._A)("AccountSessionsNestedPanel"),
        initialize: () => {
            (0, Tp.GY)();
        },
        useTrailingDecoration: () => ({
            type: eb.xn.TEXT,
            useText: () => {
                let { currentSession: e, otherSessions: t } = (0, TE.r)(),
                    n = t.length + +(null != e);
                return n > 0 ? _.intl.formatToPlainString(_.t.G7zwOk, { count: n }) : _.intl.string(_.t.MKDeyL);
            },
        }),
    }),
    TW = (0, d.zZ)(u.X.ACCOUNT_AUTHENTICATION_CATEGORY, {
        useTitle: () => _.intl.string(_.t.pKSjEj),
        useInlineNotice: function () {
            return (0, R.bG)([t3.default], () => t3.default.getCurrentUser()?.mfaEnabled ?? !1)
                ? { type: eb.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: EH }
                : null;
        },
        buildLayout: () => [
            Ts,
            E2,
            E3,
            Tn,
            E4,
            Tt,
            Tm,
            TA,
            ...((0, EX.pC)("AccountAuthenticationCategory") ? [TK] : []),
        ],
    });
n(204925);
var TZ = n(818348);
let TQ = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0;
    (0, N.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("78925"), n.e("5291")]).then(n.bind(n, 888363));
            return (n) => (0, x.jsx)(t, { claimRequired: e, ...n });
        },
        { onCloseRequest: e ? TZ.tE : null, onCloseCallback: t },
    );
};
var Tq = n(876696),
    TJ = n(36149),
    T$ = n(207560);
function T0(e) {
    let t = (0, T$.fk)(),
        n = (0, TJ.b8)(),
        i = (0, TJ.yM)(),
        l = (0, TJ.Y2)();
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
var T1 = n(516761);
function T2() {
    let e = _.intl.string(_.t.XxRj7f);
    return (0, x.jsxs)(V.E, {
        variant: "text-md/medium",
        children: [
            `${e} • `,
            _.intl.format(T1.default.WM5adV, {
                handleOnHelpUrlHook: () => window.open(to.A.getArticleURL(q.MVz.TIGGER_PAWTECT_LEARN_MORE), "_blank"),
            }),
        ],
    });
}
let T5 = (0, d.Tf)(u.X.ACCOUNT_INFO_AGE_GROUP_EDIT_SETTING, {
        usePredicate: () => T0("edit"),
        useTitle: () => _.intl.string(_.t["/52UYy"]),
        useVariant: () => "secondary",
        useTrailingContent: () => ({ type: eb._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: T2 }),
        useLabel: () => _.intl.string(_.t.bt75uw),
        onClick: function () {
            (0, N.openModalLazy)(async () => {
                let { default: e } = await n.e("45361").then(n.bind(n, 151080));
                return (t) => (0, x.jsx)(e, { ...t });
            });
        },
    }),
    T3 = (0, d.E2)(u.X.ACCOUNT_INFO_AGE_GROUP_INFO_SETTING, {
        usePredicate: () => T0("info"),
        useSearchTerms: () => [_.intl.string(_.t["/52UYy"])],
        Component: function () {
            return (0, x.jsx)(lR.D, {
                label: _.intl.string(_.t["/52UYy"]),
                layout: "horizontal",
                children: (0, x.jsxs)(L.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "end",
                    gap: "md",
                    children: [
                        (0, x.jsx)(V.E, { variant: "text-md/medium", children: _.intl.string(_.t.XxRj7f) }),
                        (0, x.jsx)("div", {
                            style: { visibility: "hidden" },
                            children: (0, x.jsx)(eA.$, {
                                onClick: TZ.tE,
                                text: _.intl.string(_.t.bt75uw),
                                "aria-hidden": !0,
                            }),
                        }),
                    ],
                }),
            });
        },
    });
var T8 = n(139716),
    T4 = n(847599);
function T9() {
    return (0, TJ.yM)() ? _.intl.string(_.t.sK0dmH) : _.intl.string(_.t.lKDPGA);
}
let T7 = (0, d.Tf)(u.X.ACCOUNT_INFO_AGE_GROUP_VERIFY_SETTING, {
        usePredicate: () => T0("verify"),
        useTitle: () => _.intl.string(_.t["/52UYy"]),
        useVariant: () => "secondary",
        useTrailingContent: () => ({ type: eb._1.TEXT, useText: T9 }),
        useLabel: function () {
            return (0, TJ.yM)() ? _.intl.string(_.t["9KiIz6"]) : _.intl.string(_.t.DVywUB);
        },
        onClick: () => T8.A.showAgeVerificationGetStartedModal({ entryPoint: T4.q1.ACCOUNT_AGE_GROUP }),
    }),
    T6 = (0, d.Tf)(u.X.ACCOUNT_INFO_CLAIM_ACCOUNT_SETTING, {
        usePredicate: () => {
            let e = (0, R.bG)([t3.default], () => t3.default.getCurrentUser());
            return null != e && !e.isClaimed();
        },
        useTitle: () => _.intl.string(_.t.tlZllC),
        useVariant: () => "secondary",
        useTrailingContent: () => ({ type: eb._1.TEXT, useText: () => _.intl.string(_.t.qxk9zo) }),
        useLabel: () => _.intl.string(_.t.BleMPB),
        onClick: () => TQ(),
    });
function Se(e) {
    return `${"*".repeat(e.length - 4)}${e.slice(-4)}`;
}
function St(e) {
    let [t, n] = e.split("@");
    return `${"*".repeat(t.length)}@${n}`;
}
function Sn(e) {
    let { text: t, censor: n, revealLabel: i, hideLabel: l, redesign: s = !1 } = e,
        [a, r] = f.useState(!1),
        o = a ? t : n(t);
    return (0, x.jsxs)(L.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        justify: s ? "end" : "start",
        children: [
            s ? (0, x.jsx)(V.E, { variant: "text-md/medium", children: o }) : o,
            (0, x.jsx)(F.Q, {
                variant: "primary",
                textVariant: s ? "text-md/medium" : "text-sm/medium",
                "aria-label": a ? l : i,
                onClick: () => r(!a),
                text: a ? _.intl.string(_.t.fgq1gs) : _.intl.string(_.t.dcztdU),
            }),
        ],
    });
}
function Si() {
    let e = (0, R.bG)([t3.default], () => t3.default.getCurrentUser()?.email);
    return null == e
        ? (0, x.jsx)(V.E, { variant: "text-md/medium", children: _.intl.string(_.t["8SfTN/"]) })
        : (0, x.jsx)(Sn, {
              text: e,
              censor: St,
              revealLabel: _.intl.string(_.t["Zvx+yV"]),
              hideLabel: _.intl.string(_.t.nqTD4d),
              redesign: !0,
          });
}
let Sl = (0, d.Tf)(u.X.ACCOUNT_INFO_EMAIL_SETTING, {
    usePredicate: () => (0, R.bG)([t3.default], () => t3.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => _.intl.string(_.t.tlZllC),
    useVariant: () => "secondary",
    useTrailingContent: () => ({ type: eb._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: Si }),
    useLabel: function () {
        return null == (0, R.bG)([t3.default], () => t3.default.getCurrentUser()?.email)
            ? _.intl.string(_.t.OYkgVk)
            : _.intl.string(_.t.bt75uw);
    },
    useAriaLabel: function () {
        return null == (0, R.bG)([t3.default], () => t3.default.getCurrentUser()?.email)
            ? _.intl.string(_.t["pvBD+W"])
            : _.intl.string(_.t["8peUT0"]);
    },
    onClick: function () {
        (0, N.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("76660"), n.e("28450")]).then(n.bind(n, 121343));
            return (t) => (0, x.jsx)(e, { ...t });
        });
    },
});
function Ss() {
    let e = (0, R.bG)([t3.default], () => t3.default.getCurrentUser()),
        t = e?.phone ?? null;
    return null == e || null == t
        ? (0, x.jsx)(V.E, { variant: "text-md/medium", children: _.intl.string(_.t.I5kDqj) })
        : (0, x.jsx)(L.B, {
              direction: "horizontal",
              align: "center",
              justify: "end",
              gap: "md",
              children: (0, x.jsx)(Sn, {
                  text: t,
                  censor: Se,
                  revealLabel: _.intl.string(_.t.eY3xlT),
                  hideLabel: _.intl.string(_.t["jllbv+"]),
                  redesign: !0,
              }),
          });
}
let Sa = (0, d.Tf)(u.X.ACCOUNT_INFO_PHONE_SETTING, {
    usePredicate: () => (0, R.bG)([t3.default], () => t3.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => _.intl.string(_.t.kerONq),
    useAriaLabel: function () {
        return null == (0, R.bG)([t3.default], () => t3.default.getCurrentUser()?.phone)
            ? _.intl.string(_.t["SfUuE+"])
            : _.intl.string(_.t.YDabSe);
    },
    useVariant: () => "secondary",
    useTrailingContent: () => ({ type: eb._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: Ss }),
    useLabel: function () {
        return null == (0, R.bG)([t3.default], () => t3.default.getCurrentUser()?.phone)
            ? _.intl.string(_.t.OYkgVk)
            : _.intl.string(_.t.bt75uw);
    },
    onClick: function () {
        null == t3.default.getCurrentUser()?.phone
            ? (0, N.openModalLazy)(
                  async () => {
                      let { default: e } = await Promise.resolve().then(n.bind(n, 615715));
                      return (t) => (0, x.jsx)(e, { reason: Ta.d.USER_SETTINGS_UPDATE, ...t });
                  },
                  { modalKey: Tg.V },
              )
            : (0, N.openModalLazy)(async () => {
                  let { default: e } = await n.e("89061").then(n.bind(n, 359012));
                  return (t) => (0, x.jsx)(e, { ...t });
              });
    },
});
function Sr() {
    let e = (0, R.bG)([t3.default], () => t3.default.getCurrentUser());
    return null != e && !e.isClaimed();
}
function So() {
    let e = (0, AD.EC)(),
        t = e?.nick?.[0] ?? null,
        n = (0, R.bG)([t3.default], () => t3.default.getCurrentUser());
    if (null == n) return null;
    let i = n.hasUniqueUsername() ? n.username : `${n.username}#${n.discriminator}`;
    return (0, x.jsxs)(x.Fragment, {
        children: [
            (0, x.jsx)(V.E, { variant: "text-md/medium", children: i }),
            null != t &&
                (0, x.jsx)(e1.m, {
                    __unsupportedReactNodeAsText: t,
                    "aria-label": !1,
                    children: (0, x.jsx)(sj.E, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: B.A.colors.STATUS_WARNING.css,
                    }),
                }),
        ],
    });
}
let Sd = (0, d.Tf)(u.X.ACCOUNT_INFO_USERNAME_SETTING, {
        useTitle: () => _.intl.string(_.t.qqhR3L),
        useTrailingContent: () => ({ type: eb._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: So }),
        useLabel: () => _.intl.string(_.t.bt75uw),
        useAriaLabel: () => _.intl.string(_.t.JECa91),
        useSubtitle: () => (Sr() ? _.intl.string(_.t["7Ngnyr"]) : void 0),
        useVariant: () => "secondary",
        useDisabled: Sr,
        onClick: function () {
            (0, N.openModalLazy)(async () => {
                let { default: e } = await n.e("13161").then(n.bind(n, 331632));
                return (t) => (0, x.jsx)(e, { ...t });
            });
        },
    }),
    Su = (0, d.zZ)(u.X.ACCOUNT_INFO_CATEGORY, {
        usePredicate: () => (0, R.bG)([t3.default], () => null != t3.default.getCurrentUser()),
        useTitle: () => _.intl.string(_.t.apNo4l),
        useInlineNotice: function () {
            let e = (0, R.bG)([t3.default], () => t3.default.getCurrentUser());
            return null == e
                ? null
                : e.isClaimed()
                  ? null == e.email || e.verified
                      ? null
                      : {
                            type: eb.lT.INLINE_NOTICE,
                            noticeType: "warning",
                            useTitle: () => _.intl.string(_.t.tuGzBT),
                            useText: () => _.intl.string(_.t.NAzplE),
                            button: { useText: () => _.intl.string(_.t.lm1UKt), onClick: () => (0, Tq.S)(e) },
                        }
                  : {
                        type: eb.lT.INLINE_NOTICE,
                        noticeType: "critical",
                        useTitle: () => _.intl.string(_.t["/3qnL/"]),
                        useText: () => _.intl.string(_.t.qKs3vg),
                        button: { useText: () => _.intl.string(_.t["7psymi"]), onClick: () => TQ() },
                    };
        },
        buildLayout: () => [Sd, T6, Sl, Sa, T7, T5, T3],
    }),
    Sc = (0, d.Tf)(u.X.AUTHENTICATOR_APP_DISABLE_BUTTON, {
        useTitle: () => _.intl.string(_.t.lQsY7B),
        useSubtitle: () => Tc(!0),
        useDisabled: () => null !== Tc(!0),
        useLabel: () => _.intl.string(_.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => {
            let e = (0, R.bG)([u2.default], () => u2.default.hasTOTPEnabled()),
                t = Tu() === Td.AVAILABLE;
            return e && t;
        },
        onClick: () =>
            void (0, ln.A)({
                title: _.intl.string(_.t["D+aE7g"]),
                subtitle: _.intl.string(_.t.EA4ZEk),
                variant: "critical",
                confirmText: _.intl.string(_.t.N86XcP),
                onConfirm: () => EY.A.disable(),
            }),
    }),
    Sg = (0, d.zZ)(u.X.AUTHENTICATOR_APP_CATEGORY, {
        useTitle: () => _.intl.string(_.t.RumMFo),
        useSubtitle: () => _.intl.string(_.t.iTbTo7),
        useHeaderDecoration: function () {
            let e = (0, R.bG)([u2.default], () => u2.default.hasTOTPEnabled()),
                t = Tu() === Td.AVAILABLE;
            if (!e && t)
                return {
                    type: eb.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: eb.UV.BUTTON,
                            id: "mfa-setup-button",
                            text: _.intl.string(_.t.cTNUeD),
                            onClick: EJ.Ay.enableMFA,
                        },
                    ],
                };
        },
        useInlineNotice: function () {
            switch (Tu()) {
                case Td.UNAVAILABLE_NO_CRYPTO:
                    return { type: eb.lT.INLINE_NOTICE, noticeType: "info", useText: () => _.intl.string(_.t.PhHhsj) };
                case Td.UNAVAILABLE_UNVERIFIED:
                    return {
                        type: eb.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        useText: () => _.intl.string(_.t.uggF7o),
                    };
                case Td.AVAILABLE:
                    return;
            }
        },
        collapseOnEmpty: !1,
        buildLayout: () => [Sc],
    });
var S_ = n(32880),
    Sm = n(663417);
function Sh() {
    (0, N.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
        return (t) =>
            (0, x.jsx)(e, {
                ...t,
                handleSubmit: (e) =>
                    EY.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                        var t;
                        return (
                            (t = e),
                            void (0, N.openModalLazy)(
                                async () => {
                                    let { default: e } = await Promise.resolve().then(n.bind(n, 518142));
                                    return (n) => (0, x.jsx)(e, { ...n, password: t });
                                },
                                { stackingBehavior: "stack" },
                            )
                        );
                    }),
                title: _.intl.string(_.t.PsQmzU),
                actionText: _.intl.string(_.t.ajkYcF),
            });
    });
}
var SA = n(526122);
function Sp(e) {
    return `${e.slice(0, 4)}-${e.slice(4)}`;
}
async function SE() {
    let e = EK.A.getVerificationKey();
    try {
        await EY.A.confirmViewBackupCodes(e, !0);
    } catch (e) {
        (0, h2.P0)({
            message: e.body?.message ?? _.intl.string(_.t.F8FvUy),
            type: h3.Ck.FAILURE,
            id: "backup-code-regen-failed",
        });
    }
}
function ST(e) {
    let {
            code: { code: t, consumed: n },
        } = e,
        i = Sp(t),
        l = f.useRef(null),
        s = (0, x.jsxs)(x.Fragment, {
            children: [(0, x.jsx)(E9.P, { checked: n }), (0, x.jsx)(V.E, { variant: "text-md/normal", children: i })],
        });
    return u9.p5
        ? (0, x.jsx)(k.D, {
              tag: "li",
              className: eB()(SA.aY, SA.vk),
              innerRef: l,
              onKeyDown: (e) => {
                  "c" === e.key &&
                      (e.metaKey || e.ctrlKey) &&
                      (e.preventDefault(), e.stopPropagation(), (0, u9.C)(i), l?.current?.focus());
              },
              onClick: () => {
                  (0, u9.C)(i),
                      (0, h2.P0)({ message: _.intl.string(_.t.mGZ66D), type: h3.Ck.SUCCESS, id: "backup-code-copied" });
              },
              children: s,
          })
        : (0, x.jsx)("li", { className: SA.aY, children: s });
}
let SS = (0, d.zZ)(u.X.BACKUP_CODES_CATEGORY, {
        useTitle: () => _.intl.string(_.t.fC9qV0),
        useSubtitle: () =>
            (0, R.bG)([EK.A], () => EK.A.getBackupCodes().length > 0)
                ? _.intl.format(_.t.tp7zEK, {})
                : _.intl.string(_.t.LoOi4S),
        usePredicate: E8,
        buildLayout: () => [Sx],
    }),
    Sx = (0, d.E2)(u.X.BACKUP_CODES_SETTING, {
        useSearchTerms: () => [_.intl.string(_.t.fC9qV0)],
        Component: function () {
            let e = (0, R.bG)([EK.A], () => EK.A.getBackupCodes()),
                t = f.useMemo(
                    () =>
                        e
                            .map((e) => {
                                let { code: t, consumed: n } = e;
                                return `* ${Sp(t)}` + (n ? ` (${_.intl.string(_.t["ycME+9"])})` : "");
                            })
                            .join("\r\n"),
                    [e],
                );
            return 0 === e.length
                ? (0, x.jsx)(eA.$, { text: _.intl.string(_.t.Jc2myK), size: "sm", variant: "secondary", onClick: Sh })
                : (0, x.jsxs)(x.Fragment, {
                      children: [
                          (0, x.jsx)("ul", {
                              className: SA.E5,
                              children: e.map((e) => (0, x.jsx)(ST, { code: e }, e.code)),
                          }),
                          (0, x.jsxs)(rT.e, {
                              size: "sm",
                              children: [
                                  (0, x.jsx)(EZ.A, {
                                      fileContents: t,
                                      contentType: "text/plain",
                                      fileName: "discord_backup_codes.txt",
                                      children: (0, x.jsx)(eA.$, {
                                          text: _.intl.string(_.t["OO+Nib"]),
                                          variant: "secondary",
                                          icon: S_.s,
                                      }),
                                  }),
                                  (0, x.jsx)(eA.$, {
                                      text: _.intl.string(_.t["3x962E"]),
                                      variant: "secondary",
                                      icon: Sm.f,
                                      onClick: SE,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
    }),
    Sf = (0, d.Tf)(u.X.SMS_AUTH_DISABLE_BUTTON, {
        useTitle: () => _.intl.string(_.t.lQsY7B),
        useSubtitle: function () {
            let [e, t] = f.useState(!1),
                n = (0, R.bG)([t3.default], () => t3.default.getCurrentUser()?.phone);
            return null == n
                ? null
                : _.intl.format(e ? _.t["xDBk/I"] : _.t.bnKdnl, {
                      phone: e ? n : n.slice(-4),
                      toggleButton: () =>
                          (0, x.jsx)(F.Q, {
                              text: e ? _.intl.string(_.t.fgq1gs) : _.intl.string(_.t.dcztdU),
                              onClick: () => t(!e),
                          }),
                  });
        },
        useLabel: () => _.intl.string(_.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => (0, R.bG)([t3.default], () => t3.default.getCurrentUser()?.hasFlag(q.nhx.MFA_SMS) ?? !1),
        onClick: () =>
            void (0, N.openModalLazy)(async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
                return (t) =>
                    (0, x.jsx)(e, {
                        ...t,
                        handleSubmit: EY.A.disableSMS,
                        title: _.intl.string(_.t.KLWnit),
                        children: _.intl.string(_.t["W0/Duf"]),
                    });
            }),
    }),
    Sb = (0, d.zZ)(u.X.SMS_AUTH_CATEGORY, {
        useTitle: () => _.intl.string(_.t.wuHuI5),
        useSubtitle: () => (0, R.bG)([t3.default], () => To(t3.default.getCurrentUser(), !0)),
        useHeaderDecoration: () => {
            let e = (0, R.bG)([t3.default], () => t3.default.getCurrentUser()?.hasFlag(q.nhx.MFA_SMS) ?? !1),
                t = (0, R.bG)([t3.default], () => null != To(t3.default.getCurrentUser()));
            if (!e)
                return {
                    type: eb.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: eb.UV.BUTTON,
                            id: "sms-setup-button",
                            text: _.intl.string(_.t.Age7yU),
                            onClick: SN,
                            disabled: t,
                        },
                    ],
                };
        },
        collapseOnEmpty: !1,
        usePredicate: () => {
            let e = Tu(),
                t = E8(),
                n = (0, R.bG)([u2.default], () => u2.default.hasTOTPEnabled());
            return e === Td.AVAILABLE && t && n;
        },
        buildLayout: () => [Sf],
    });
function SN() {
    let e = t3.default.getCurrentUser();
    if (null != e)
        if (null == e.phone) {
            var t;
            (t = { reason: Ta.d.USER_SETTINGS_UPDATE, onAddedPhone: EY.A.enableSMS }),
                (0, N.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 615715));
                        return (n) => (0, x.jsx)(e, { ...n, ...t });
                    },
                    { modalKey: Tg.V },
                );
        } else EY.A.enableSMS();
}
var SC = n(665671),
    SI = n(442433),
    Sv = n(917136),
    Sy = n(976910),
    Sj = n(551386);
function SO(e) {
    let { credential: t } = e;
    return (0, x.jsxs)("li", {
        className: Sj.e,
        children: [
            (0, x.jsxs)("div", {
                children: [
                    (0, x.jsx)(V.E, { variant: "text-md/normal", children: t.name }),
                    null != t.last_used &&
                        (0, x.jsx)(V.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: _.intl.format(_.t["7JgxF5"], { lastUsed: (0, TE.Y)(t.last_used) }),
                        }),
                ],
            }),
            (0, x.jsx)(sS.K, {
                icon: gk.j,
                variant: "icon-only",
                size: "sm",
                "aria-label": _.intl.string(_.t["+nrTbK"]),
                onClick: (e) => {
                    (0, SI.L3)(e, async () => {
                        let { default: e } = await n.e("32529").then(n.bind(n, 41e3));
                        return (n) => (0, x.jsx)(e, { credential: t, ...n });
                    });
                },
            }),
        ],
    });
}
let SR = (0, d.zZ)(u.X.SECURITY_KEYS_CATEGORY, {
        useTitle: () => _.intl.string(_.t.IBq4Y3),
        useSubtitle: () => _.intl.string(_.t.yK9edS),
        useHeaderDecoration: function () {
            if (Tu() === Td.AVAILABLE)
                return {
                    type: eb.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: eb.UV.BUTTON,
                            id: "add-security-key-button",
                            text: _.intl.string(_.t["Tzs/fw"]),
                            icon: cL.j,
                            onClick: SC.A,
                        },
                    ],
                };
        },
        useInlineNotice: () =>
            (function () {
                switch (Tu()) {
                    case Td.UNAVAILABLE_NO_CRYPTO:
                        return {
                            type: eb.lT.INLINE_NOTICE,
                            noticeType: "info",
                            useText: () => _.intl.string(_.t.bWCGI9),
                        };
                    case Td.UNAVAILABLE_UNVERIFIED:
                        return {
                            type: eb.lT.INLINE_NOTICE,
                            noticeType: "warning",
                            useText: () => _.intl.string(_.t.uggF7o),
                        };
                    case Td.AVAILABLE:
                        return;
                }
            })(),
        buildLayout: () => [SL],
    }),
    SL = (0, d.E2)(u.X.SECURITY_KEYS_LIST, {
        useSearchTerms: () => [_.intl.string(_.t.y7SXYX)],
        Component: function () {
            let { credentials: e, hasFetchedCredentials: t } = (0, R.cf)([Sy.A], () => ({
                hasFetchedCredentials: Sy.A.hasFetchedCredentials(),
                credentials: Sy.A.getCredentials(),
            }));
            return (f.useEffect(() => {
                t || Sv.JQ();
            }, [t]),
            t)
                ? (0, x.jsx)(L.B, {
                      direction: "vertical",
                      gap: "sm",
                      as: "ul",
                      children: e.map((e) => (0, x.jsx)(SO, { credential: e }, e.id)),
                  })
                : (0, x.jsx)(dU.y, {});
        },
    }),
    SD = (0, d.t_)(u.X.MULTI_FACTOR_AUTHENTICATION, {
        useTitle: () => _.intl.string(_.t.m0FidJ),
        buildLayout: () => [SR, Sg, Sb, SS],
    }),
    SG = (0, d.t0)(u.X.ACCOUNT_MFA_NESTED_PANEL, {
        useTrailingDecoration: () => ({
            type: eb.xn.TEXT,
            useText: () => (E8() ? _.intl.string(_.t.lQsY7B) : _.intl.string(_.t.WsUuTt)),
        }),
        buildLayout: () => [SD],
    }),
    SP = (0, d.zZ)(u.X.ACCOUNT_PASSWORD_SECURITY_CATEGORY, {
        useTitle: () => _.intl.string(_.t["0iH2vc"]),
        buildLayout: () => [Tl, SG, TK],
    });
function SM(e) {
    let { currentUser: t } = e;
    return t.isClaimed()
        ? null == t.email
            ? null
            : t.verified
              ? void 0
              : (0, x.jsxs)(O.w, {
                    type: "warning",
                    children: [
                        (0, x.jsx)(eh.D, { variant: "heading-md/medium", children: _.intl.string(_.t.tuGzBT) }),
                        (0, x.jsx)(V.E, {
                            variant: "text-sm/normal",
                            className: E7.PA,
                            children: _.intl.string(_.t.NAzplE),
                        }),
                        (0, x.jsx)(Tq.A, { size: "sm", variant: "secondary" }),
                    ],
                })
        : (0, x.jsxs)(O.w, {
              type: "critical",
              children: [
                  (0, x.jsx)(eh.D, { variant: "heading-md/medium", children: _.intl.string(_.t["/3qnL/"]) }),
                  (0, x.jsx)(V.E, { variant: "text-sm/normal", className: E7.PA, children: _.intl.string(_.t.qKs3vg) }),
                  (0, x.jsx)(eA.$, {
                      variant: "secondary",
                      size: "sm",
                      text: _.intl.string(_.t["7psymi"]),
                      onClick: () => TQ(),
                  }),
              ],
          });
}
var SU = n(297413),
    Sk = n(50268),
    SV = n(922301),
    Sw = n(262),
    SB = n(177831),
    SF = n(915614),
    Sz = n(475543);
let SX = li.Ay.getEnableHardwareAcceleration() ? nY.Js : nY.eu;
function SY(e) {
    let t = (0, AA.X)("UserSettingsAccountProfileCard");
    return f.useCallback(() => {
        t ? (0, AE.openUserProfileModal)({ userId: e }) : (0, ej.openUserSettings)(u.X.PROFILE_PANEL);
    }, [t, e]);
}
function SH(e) {
    let { className: t, user: i } = e,
        l = f.useRef(null),
        s = (0, AD.EC)(),
        a = s?.nick?.[0] ?? null,
        [r, o] = f.useState(!1);
    f.useEffect(() => {
        o(null != l.current && l.current.scrollWidth > l.current.clientWidth);
    }, [i.username]);
    let d = !i.isClaimed(),
        u = d ? _.intl.string(_.t["7Ngnyr"]) : void 0;
    return (0, x.jsxs)("div", {
        className: eB()(Sz.ZZ, t),
        children: [
            (0, x.jsx)("div", {
                className: Sz.NQ,
                children: (0, x.jsxs)("div", {
                    className: Sz.Fj,
                    children: [
                        (0, x.jsx)(V.E, {
                            variant: "text-md/medium",
                            className: Sz.p9,
                            children: _.intl.string(_.t.qqhR3L),
                        }),
                        (0, x.jsxs)("div", {
                            className: Sz.HR,
                            ref: l,
                            children: [
                                (0, x.jsx)(V.E, {
                                    tag: "span",
                                    color: "text-strong",
                                    variant: "text-md/normal",
                                    children: i.username,
                                }),
                                !i.hasUniqueUsername() &&
                                    (0, x.jsxs)(V.E, {
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
                (0, x.jsx)("div", {
                    className: Sz.a$,
                    children: (0, x.jsx)(e1.m, {
                        __unsupportedReactNodeAsText: a,
                        "aria-label": !1,
                        children: (0, x.jsx)(sj.E, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: B.A.colors.STATUS_WARNING.css,
                        }),
                    }),
                }),
            (0, x.jsx)(e1.m, {
                text: u,
                children: (0, x.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: Sz.pr,
                    children: (0, x.jsx)(eA.$, {
                        variant: "secondary",
                        size: "sm",
                        text: r ? _.intl.string(_.t["16kTw/"]) : _.intl.string(_.t.bt75uw),
                        disabled: d,
                        "aria-label": _.intl.string(_.t.JECa91),
                        onClick: () =>
                            (0, N.openModalLazy)(async () => {
                                let { default: e } = await n.e("13161").then(n.bind(n, 331632));
                                return (t) => (0, x.jsx)(e, { ...t });
                            }),
                    }),
                }),
            }),
        ],
    });
}
function SK(e) {
    let { user: t, className: n } = e,
        i = SY(t.id),
        l = (0, AD.EC)(),
        s = l?.nick?.[0] ?? null,
        a = px.Ay.getGlobalName(t),
        r = f.useRef(null),
        [o, d] = f.useState(!1);
    return (
        f.useEffect(() => {
            d(null != r.current && r.current.scrollWidth > r.current.clientWidth);
        }, [a]),
        (0, x.jsxs)("div", {
            className: eB()(Sz.ZZ, n),
            children: [
                (0, x.jsx)("div", {
                    className: Sz.NQ,
                    children: (0, x.jsxs)("div", {
                        className: Sz.Fj,
                        children: [
                            (0, x.jsx)(V.E, {
                                variant: "text-md/medium",
                                className: Sz.p9,
                                children: _.intl.string(_.t["9AjdkD"]),
                            }),
                            (0, x.jsx)("div", {
                                className: Sz.HR,
                                ref: r,
                                children: (0, x.jsx)(V.E, {
                                    tag: "span",
                                    color: "text-strong",
                                    variant: "text-md/normal",
                                    children: null == a ? _.intl.string(_.t.ep5kjK) : a,
                                }),
                            }),
                        ],
                    }),
                }),
                null != s &&
                    (0, x.jsx)("div", {
                        className: Sz.a$,
                        children: (0, x.jsx)(e1.m, {
                            __unsupportedReactNodeAsText: s,
                            "aria-label": !1,
                            children: (0, x.jsx)(sj.E, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                color: B.A.colors.STATUS_WARNING.css,
                            }),
                        }),
                    }),
                (0, x.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: Sz.pr,
                    children: (0, x.jsx)(eA.$, {
                        variant: "secondary",
                        size: "sm",
                        text: o ? _.intl.string(_.t["16kTw/"]) : _.intl.string(_.t.bt75uw),
                        "aria-label": _.intl.string(_.t.YXeWYM),
                        onClick: i,
                    }),
                }),
            ],
        })
    );
}
function SW(e) {
    let t,
        { className: i, user: l } = e;
    if (l.isClaimed())
        if (null == l.email)
            t = {
                buttonText: _.intl.string(_.t.OYkgVk),
                buttonAriaLabel: _.intl.string(_.t["pvBD+W"]),
                valueMessage: _.intl.string(_.t["8SfTN/"]),
                handleClick: () =>
                    (0, N.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("76660"), n.e("28450")]).then(n.bind(n, 121343));
                        return (t) => (0, x.jsx)(e, { ...t });
                    }),
            };
        else {
            let { email: e } = l;
            t = {
                buttonText: _.intl.string(_.t.bt75uw),
                buttonAriaLabel: _.intl.string(_.t["8peUT0"]),
                valueMessage: (0, x.jsx)(Sn, {
                    text: e,
                    censor: St,
                    revealLabel: _.intl.string(_.t["Zvx+yV"]),
                    hideLabel: _.intl.string(_.t.nqTD4d),
                }),
                handleClick: () =>
                    (0, N.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("76660"), n.e("28450")]).then(n.bind(n, 121343));
                        return (t) => (0, x.jsx)(e, { ...t });
                    }),
            };
        }
    else
        t = {
            buttonText: _.intl.string(_.t.BleMPB),
            buttonAriaLabel: _.intl.string(_.t.BleMPB),
            valueMessage: _.intl.string(_.t.qxk9zo),
            handleClick: () => TQ(),
        };
    return (0, x.jsxs)("div", {
        className: eB()(Sz.ZZ, i),
        children: [
            (0, x.jsx)("div", {
                className: Sz.NQ,
                children: (0, x.jsxs)("div", {
                    children: [
                        (0, x.jsx)(V.E, {
                            variant: "text-md/medium",
                            className: Sz.p9,
                            children: _.intl.string(_.t.tlZllC),
                        }),
                        (0, x.jsx)("div", {
                            children: (0, x.jsx)(V.E, {
                                tag: "span",
                                color: "text-strong",
                                variant: "text-md/normal",
                                children: t.valueMessage,
                            }),
                        }),
                    ],
                }),
            }),
            (0, x.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: Sz.pr,
                children: (0, x.jsx)(eA.$, {
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
function SZ(e) {
    let t,
        { className: i, user: l } = e;
    if (!l.isClaimed()) return null;
    let { phone: s, email: a } = l,
        r = null != s;
    return (
        (t = r
            ? (0, x.jsx)(Sn, {
                  text: s,
                  censor: Se,
                  revealLabel: _.intl.string(_.t.eY3xlT),
                  hideLabel: _.intl.string(_.t["jllbv+"]),
              })
            : _.intl.string(_.t.I5kDqj)),
        (0, x.jsxs)("div", {
            className: eB()(Sz.ZZ, i),
            children: [
                (0, x.jsx)("div", {
                    className: Sz.NQ,
                    children: (0, x.jsxs)("div", {
                        children: [
                            (0, x.jsx)(V.E, {
                                variant: "text-md/medium",
                                className: Sz.p9,
                                children: _.intl.string(_.t.kerONq),
                            }),
                            (0, x.jsx)("div", {
                                children: (0, x.jsx)(V.E, {
                                    tag: "span",
                                    color: "text-strong",
                                    variant: "text-md/normal",
                                    children: t,
                                }),
                            }),
                        ],
                    }),
                }),
                (0, x.jsxs)("div", {
                    className: Sz.PU,
                    children: [
                        r && null != a
                            ? (0, x.jsx)("div", {
                                  className: eB()(Sz.pr, Sz.DT),
                                  children: (0, x.jsx)(F.Q, {
                                      textVariant: "text-sm/medium",
                                      variant: "secondary",
                                      text: _.intl.string(_.t.N86XcP),
                                      "aria-label": _.intl.string(_.t.Rpn4A3),
                                      onClick: function () {
                                          (0, N.openModal)((e) =>
                                              (0, x.jsx)(Eq.default, {
                                                  ...e,
                                                  title: _.intl.string(_.t["3CTiKi"]),
                                                  children: l.hasFlag(q.nhx.MFA_SMS)
                                                      ? _.intl.string(_.t.jrhJyo)
                                                      : void 0,
                                                  actionText: _.intl.string(_.t.N86XcP),
                                                  handleSubmit: (e) => Ta.A.removePhone(e, Ta.d.USER_SETTINGS_UPDATE),
                                              }),
                                          );
                                      },
                                  }),
                              })
                            : null,
                        (0, x.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: Sz.pr,
                            children: (0, x.jsx)(eA.$, {
                                variant: "secondary",
                                size: "sm",
                                text: r ? _.intl.string(_.t.bt75uw) : _.intl.string(_.t.OYkgVk),
                                "aria-label": r ? _.intl.string(_.t.YDabSe) : _.intl.string(_.t["SfUuE+"]),
                                onClick: function () {
                                    (0, N.openModalLazy)(
                                        async () => {
                                            let { default: e } = await Promise.resolve().then(n.bind(n, 615715));
                                            return (t) => (0, x.jsx)(e, { reason: Ta.d.USER_SETTINGS_UPDATE, ...t });
                                        },
                                        { modalKey: Tg.V },
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
function SQ(e) {
    let { user: t } = e,
        n = (0, Sk.A)({ id: t.id, label: _.intl.string(_.t["/AXYnE"]) }),
        i = g.Q_.useSetting(),
        l = f.useRef(null);
    return i && u9.p5
        ? (0, x.jsx)(P.Y, {
              targetElementRef: l,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, x.jsx)(M.W, {
                      "data-menu-migrated": !0,
                      onClose: t,
                      onSelect: void 0,
                      navId: "copy-id",
                      "aria-label": _.intl.string(_.t.RANhlE),
                      children: n,
                  });
              },
              children: (e) =>
                  (0, x.jsx)(k.D, {
                      ...e,
                      innerRef: l,
                      className: Sz.SI,
                      "aria-label": _.intl.string(_.t.DEoVWZ),
                      children: (0, x.jsx)(gk.j, { size: "md", color: "currentColor", className: Sz.D$ }),
                  }),
          })
        : null;
}
function Sq(e) {
    let { className: t } = e,
        i = (0, TJ.b8)(),
        l = (0, TJ.yM)(),
        s = (0, TJ.Y2)(),
        a = !i || l,
        r = _.intl.string(_.t["9KiIz6"]),
        o = _.intl.string(_.t.DVywUB),
        d = _.intl.string(_.t.lKDPGA),
        u = f.useCallback(() => {
            window.open(to.A.getArticleURL(q.MVz.TIGGER_PAWTECT_LEARN_MORE), "_blank");
        }, []),
        c = f.useCallback(() => {
            (0, N.openModalLazy)(async () => {
                let { default: e } = await n.e("45361").then(n.bind(n, 151080));
                return (t) => (0, x.jsx)(e, { ...t });
            });
        }, []),
        g = f.useMemo(
            () =>
                i
                    ? l
                        ? _.intl.string(_.t.sK0dmH)
                        : s
                          ? _.intl.format(T1.default.WM5adV, { handleOnHelpUrlHook: u })
                          : _.intl.string(_.t.XxRj7f)
                    : d,
            [i, l, s, d, u],
        ),
        m = i && !l && s;
    return (0, x.jsxs)("div", {
        className: eB()(Sz.ZZ, t),
        children: [
            (0, x.jsx)("div", {
                className: Sz.NQ,
                children: (0, x.jsxs)("div", {
                    children: [
                        (0, x.jsx)(V.E, {
                            variant: "text-md/medium",
                            className: Sz.p9,
                            children: _.intl.string(_.t["/52UYy"]),
                        }),
                        (0, x.jsx)("div", {
                            children: (0, x.jsxs)(V.E, {
                                tag: "span",
                                color: "text-strong",
                                variant: "text-md/normal",
                                children: [s && i && !l ? `${_.intl.string(_.t.XxRj7f)} • ` : null, g],
                            }),
                        }),
                    ],
                }),
            }),
            m &&
                (0, x.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: Sz.pr,
                    children: (0, x.jsx)(eA.$, {
                        variant: "secondary",
                        size: "sm",
                        text: _.intl.string(_.t.bt75uw),
                        "aria-label": _.intl.string(_.t.bt75uw),
                        onClick: c,
                    }),
                }),
            a &&
                !m &&
                (0, x.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: Sz.pr,
                    children: (0, x.jsx)(eA.$, {
                        variant: "secondary",
                        size: "sm",
                        text: l ? r : o,
                        "aria-label": l ? r : o,
                        onClick: () => T8.A.showAgeVerificationGetStartedModal({ entryPoint: T4.q1.ACCOUNT_AGE_GROUP }),
                    }),
                }),
        ],
    });
}
function SJ(e) {
    let { currentUser: t } = e,
        n = SY(t.id),
        i = (0, pu.Ay)(t.id),
        l = (0, Sw.A)(i),
        s = g.jP.useSetting(),
        a = (0, R.bG)([Ah.A], () => Ah.A.getErrors()),
        r = a?.avatar?.[0],
        { avatarSrc: o, avatarDecorationSrc: d } = (0, Ap.A)({ userId: t?.id, size: nH._3.SIZE_80 }),
        u = (0, T$.fk)();
    return (0, x.jsxs)("div", {
        className: Sz.DM,
        children: [
            (0, x.jsx)(SF.o, {
                user: t,
                displayProfile: i,
                avatarSize: nH._3.SIZE_80,
                avatarOffsetX: 16,
                avatarOffsetY: -22,
                bannerWidth: 696,
                bannerHeight: 100,
                themePadding: 0,
            }),
            (0, x.jsxs)("div", {
                className: Sz.eF,
                children: [
                    (0, x.jsx)(SX, {
                        className: Sz.my,
                        src: o,
                        avatarDecoration: d,
                        status: s,
                        size: nH._3.SIZE_80,
                        "aria-label": t.username,
                    }),
                    (0, x.jsxs)("div", {
                        children: [
                            (0, x.jsxs)("div", {
                                className: Sz.Ib,
                                children: [
                                    (0, x.jsx)(SU.A, {
                                        user: t,
                                        className: Sz.a1,
                                        discriminatorClass: Sz.D2,
                                        displayNameStylesType: SV.G.STATIC,
                                    }),
                                    (0, x.jsx)(SQ, { user: t }),
                                ],
                            }),
                            (0, x.jsx)(SB.A, { badges: l, className: Sz.C_, badgeClassName: Sz.qS }),
                        ],
                    }),
                    (0, x.jsx)(eA.$, {
                        variant: "primary",
                        size: "sm",
                        text: _.intl.string(_.t["2p2aYz"]),
                        onClick: n,
                    }),
                ],
            }),
            (0, x.jsxs)("div", {
                className: Sz.Tp,
                children: [
                    null != r
                        ? (0, x.jsx)(V.E, {
                              className: Sz.mx,
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              children: r,
                          })
                        : null,
                    (0, x.jsxs)("div", {
                        className: Sz.FL,
                        children: [
                            (0, x.jsx)(SK, { className: Sz.mS, user: t }),
                            (0, x.jsx)(SH, { user: t }),
                            (0, x.jsx)(SW, { className: Sz.Zr, user: t }),
                            (0, x.jsx)(SZ, { className: Sz.Zr, user: t }),
                            u && (0, x.jsx)(Sq, { className: Sz.Zr }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
let S$ = (0, d.E2)(u.X.ACCOUNT_PROFILE_SETTING, {
        useSearchTerms: function () {
            let e = [
                    _.intl.string(_.t.LYju5J),
                    _.intl.string(_.t["9AjdkD"]),
                    _.intl.string(_.t["+JkHPw"]),
                    _.intl.string(_.t.oP5zGA),
                    _.intl.string(_.t.Ulqq6K),
                ],
                t = (0, T$.fk)(),
                n = (0, TJ.Y2)();
            return (
                t &&
                    (e.push(_.intl.string(_.t["/52UYy"])),
                    e.push(_.intl.string(_.t.sK0dmH)),
                    e.push(_.intl.string(_.t.XxRj7f)),
                    e.push(_.intl.string(_.t.DVywUB)),
                    e.push(_.intl.string(_.t["9KiIz6"])),
                    n &&
                        (e.push(_.intl.string(T1.default.FTawSP)),
                        e.push(_.intl.string(T1.default["bD//cU"])),
                        e.push(_.intl.string(T1.default.SH6Tcv)))),
                e
            );
        },
        Component: function () {
            let e = (0, R.bG)([t3.default], () => t3.default.getCurrentUser());
            return (0, x.jsxs)(L.B, {
                gap: "md",
                children: [
                    null != e && (0, x.jsx)(SM, { currentUser: e }),
                    null != e && (0, x.jsx)(SJ, { currentUser: e }),
                ],
            });
        },
    }),
    S0 = (0, d.zZ)(u.X.ACCOUNT_PROFILE_CATEGORY, { buildLayout: () => [S$] });
var S1 = n(656161);
function S2(e) {
    let { currentUser: t, disabled: n, handleDisableAccount: i, handleDeleteAccount: l } = e,
        s = t.isClaimed();
    return (0, x.jsx)(lR.D, {
        label: _.intl.string(_.t.ZKsIks),
        description: s ? _.intl.string(_.t.TIh3Yj) : _.intl.string(_.t.czsGA8),
        children: (0, x.jsxs)(rT.e, {
            size: "sm",
            className: S1.U,
            children: [
                s
                    ? (0, x.jsx)(eA.$, {
                          variant: "critical-primary",
                          size: "sm",
                          text: _.intl.string(_.t.jf5GGb),
                          disabled: n,
                          onClick: i,
                      })
                    : null,
                (0, x.jsx)(eA.$, {
                    variant: "critical-secondary",
                    size: "sm",
                    text: _.intl.string(_.t["8lQ2rR"]),
                    disabled: n,
                    onClick: l,
                }),
            ],
        }),
    });
}
var S5 = n(425587);
function S3(e) {
    if (e.body.code === q.t02.INVALID_PASSWORD) throw e;
    (0, rA.A)({ title: _.intl.string(_.t.LX0nT8), subtitle: e.body.message });
}
async function S8() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = t3.default.getCurrentUser();
    if (null == t) return;
    let n = [];
    try {
        n = (await S5.A.fetchTeams(!0)).body;
    } catch {}
    n.filter((e) => e.owner_user_id === t.id).length > 0
        ? (0, rA.A)({
              title: _.intl.string(_.t.UNGZDI),
              subtitle: _.intl.format(_.t.alpAUm, { devPortalLink: "https://discord.com/developers/teams" }),
          })
        : K.A.getGuildsArray().filter((e) => e.ownerId === t.id).length > 0
          ? (0, rA.A)({ title: _.intl.string(_.t.I5UrbV), subtitle: _.intl.string(_.t.UyVVan) })
          : t.isClaimed()
            ? (0, N.openModal)((t) =>
                  (0, x.jsx)(Eq.default, {
                      ...t,
                      handleSubmit: (t) => (0, Ag.U_)(t, e).then(q.tEg, S3),
                      title: e ? _.intl.string(_.t["8lQ2rR"]) : _.intl.string(_.t.jf5GGb),
                      actionText: e ? _.intl.string(_.t["8lQ2rR"]) : _.intl.string(_.t.jf5GGb),
                      variant: "critical-primary",
                      children: e ? _.intl.string(_.t.FB4H1D) : _.intl.string(_.t.gk7h32),
                  }),
              )
            : (0, ln.A)({
                  title: _.intl.string(_.t["8lQ2rR"]),
                  subtitle: _.intl.string(_.t.FB4H1D),
                  confirmText: _.intl.string(_.t["8lQ2rR"]),
                  onConfirm: () => (0, Ag.U_)("", !0),
              });
}
let S4 = (0, d.Tf)(u.X.ACCOUNT_DELETE_SETTING, {
        useTitle: () => _.intl.string(_.t["gIpzR+"]),
        useSubtitle: () => _.intl.string(_.t.Bd6dOf),
        useLabel: () => _.intl.string(_.t["8lQ2rR"]),
        useVariant: () => "critical-primary",
        onClick: () => S8(!0),
    }),
    S9 = (0, d.Tf)(u.X.ACCOUNT_DISABLE_SETTING, {
        useTitle: () => _.intl.string(_.t["p/Tjtp"]),
        useSubtitle: () => _.intl.string(_.t.YvDmKb),
        useLabel: () => _.intl.string(_.t.jf5GGb),
        useVariant: () => "critical-secondary",
        onClick: () => S8(!1),
        usePredicate: () => {
            let e = (0, R.bG)([t3.default], () => t3.default.getCurrentUser());
            return e?.isClaimed() ?? !1;
        },
    }),
    S7 = (0, d.zZ)(u.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [S9, S4] }),
    S6 = (0, d.E2)(u.X.ACCOUNT_REMOVAL_SETTING, {
        useSearchTerms: () => [_.intl.string(_.t.ZKsIks), _.intl.string(_.t.jf5GGb), _.intl.string(_.t["8lQ2rR"])],
        Component: function () {
            let e = (0, R.bG)([t3.default], () => t3.default.getCurrentUser());
            return null == e
                ? null
                : (0, x.jsx)(S2, {
                      currentUser: e,
                      handleDisableAccount: () => S8(!1),
                      handleDeleteAccount: () => S8(!0),
                  });
        },
    }),
    xe = (0, d.zZ)(u.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [S6] });
var xt = n(308645),
    xn = n(271995),
    xi = n(855267);
let xl = (0, d.E2)(u.X.ACCOUNT_STANDING_SETTING, {
        useSearchTerms: () => [_.intl.string(_.t["16r9jm"])],
        Component: xi.A,
    }),
    xs = (0, d.zZ)(u.X.ACCOUNT_STANDING_NESTED_CATEGORY, { buildLayout: () => [xl] }),
    xa = (0, d.t_)(u.X.ACCOUNT_STANDING_PANEL, {
        useTitle: () => _.intl.string(_.t["16r9jm"]),
        buildLayout: () => [xs],
    }),
    xr = (0, d.t0)(u.X.ACCOUNT_STANDING_NESTED_PANEL, {
        useTitle: xn.$b,
        useSubtitle: xn.bh,
        useLeadingDecoration: function () {
            let { color: e, backgroundColor: t, Icon: n } = (0, xn._k)();
            return { type: eb.Xy.ICON, icon: n, color: e, backgroundColor: t };
        },
        initialize: () => {
            xt.Yn();
        },
        buildLayout: () => [xa],
    }),
    xo = (0, d.zZ)(u.X.ACCOUNT_STANDING_CATEGORY, {
        useTitle: () => _.intl.string(_.t["16r9jm"]),
        buildLayout: () => [xr],
    }),
    xd = (0, d.zZ)(u.X.ACCOUNT_STANDING_CATEGORY, { buildLayout: () => [xl] });
var xu = n(834981),
    xc = n(840387),
    xg = n(177953),
    x_ = n(986922),
    xm = n(602339);
let xh = (0, d.E2)(u.X.FAMILY_CENTER_SETTING, {
        Component: x_.p,
        useSearchTerms: () => [
            _.intl.string(xm.default.RZqaJn),
            _.intl.string(xm.default.bdBmqy),
            _.intl.string(xm.default["gVWG+6"]),
            _.intl.string(xm.default.ahKIJO),
            _.intl.string(xm.default["8SLtqb"]),
        ],
    }),
    xA = (0, d.zZ)(u.X.FAMILY_CENTER_CATEGORY, { buildLayout: () => [xh] }),
    xp = (0, d.t_)(u.X.FAMILY_CENTER_PANEL, {
        useTitle: () => _.intl.string(xm.default.RZqaJn),
        buildLayout: () => [xA],
    }),
    xE = (0, d.i4)(u.X.FAMILY_CENTER_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(xm.default.RZqaJn),
        icon: xg.n,
        usePersistentBadge: function () {
            return f.useMemo(() => ({ badgeType: eb.Xi.COUNT, useCount: xu.VT }), []);
        },
        getDismissibleBadges: function () {
            return [{ badgeType: eb.Xi.NEW, dismissibleContent: ep.M.FAMILY_CENTER_NEW_BADGE }];
        },
        buildLayout: () => [xp],
    }),
    xT = (0, d.zZ)(u.X.ACCOUNT_FAMILY_CENTER_CATEGORY, {
        useTitle: () => _.intl.string(xm.default.RZqaJn),
        buildLayout: () => [xS],
    }),
    xS = (0, d.t0)(u.X.ACCOUNT_FAMILY_CENTER_NESTED_PANEL, {
        useTitle: () => ((0, xu.Li)() ? _.intl.string(xm.default.IcMQUP) : _.intl.string(xm.default["n8wrn/"])),
        useSubtitle: () => ((0, xc.Z)() ? _.intl.string(xm.default["G/L4VO"]) : _.intl.string(xm.default.Z53oSM)),
        buildLayout: () => [xp],
    });
var xx = (((o = {}).SECURITY = "SECURITY"), (o.STANDING = "STANDING"), o);
let xf = (0, d.dT)(u.X.ACCOUNT_STANDING_TAB, {
        getTitle: () => _.intl.string(_.t["Vov/9o"]),
        onItemSelect: () => {
            Y.default.track(q.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, { target_tab_name: xx.STANDING });
        },
        buildLayout: () => [xd],
    }),
    xb = (0, d.dT)(u.X.ACCOUNT_SECURITY_TAB, {
        getTitle: () => _.intl.string(_.t.Am9YHi),
        onItemSelect: () => {
            Y.default.track(q.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, { target_tab_name: xx.SECURITY });
        },
        buildLayout: () => [S0, TW, xe],
    });
function xN() {
    let e = t3.default.getCurrentUser();
    return (
        null == e || (0, EX.pC)("Account") || (0, pD.A)(e.id, e.getAvatarURL(void 0, 80)),
        () => {
            EY.A.clearBackupCodes(), (0, Ag.Uo)();
        }
    );
}
let xC = (0, d.t_)(u.X.ACCOUNT_PANEL, {
        useTitle: () => _.intl.string(_.t["JAIM/m"]),
        initialize: xN,
        useObscuredNotice: dP.L,
        buildLayout: () => [xb, xf],
    }),
    xI = (0, d.t_)(u.X.ACCOUNT_PANEL, {
        useTitle: () => _.intl.string(_.t["ldCE/p"]),
        initialize: xN,
        useObscuredNotice: dP.L,
        buildLayout: () => [Su, SP, xo, xT, S7],
    }),
    xv = (0, d.i4)(u.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => ((0, EX.pC)("Account") ? _.intl.string(_.t["ldCE/p"]) : _.intl.string(_.t["JAIM/m"])),
        icon: _3.n,
        buildLayout: () => ((0, EX.pC)("Account") ? [xI] : [xC]),
    });
var xy = n(323384),
    xj = n(824552),
    xO = n(161236);
let xR = (0, d.E2)(u.X.AUTHORIZED_APPS_LIST_SETTING, {
        Component: xO.Ay,
        useSearchTerms: () => [_.intl.string(_.t["f6kk+r"])],
    }),
    xL = (0, d.zZ)(u.X.AUTHORIZED_APPS_CATEGORY, {
        buildLayout: () => [xR],
        initialize: () => (
            xj.A.fetch(),
            () => {
                xO.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    xD = (0, d.t_)(u.X.AUTHORIZED_APPS_PANEL, {
        useTitle: () => _.intl.string(_.t["f6kk+r"]),
        useObscuredNotice: dP.L,
        buildLayout: () => [xL],
    }),
    xG = (0, d.i4)(u.X.AUTHORIZED_APPS_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(_.t["f6kk+r"]),
        icon: xy.k,
        buildLayout: () => [xD],
    });
var xP = n(176781),
    xM = n(611371);
let xU = () =>
    (0, x.jsx)(e1.m, { asContainer: !0, text: _.intl.string(_.t["/fgfWh"]), children: (0, x.jsx)(xM.A, {}) });
var xk = n(274372),
    xV = n(399925),
    xw = n(696016);
let xB = (() => {
        let e = [xw.wN];
        for (let t = 10; t <= xw.qh; t += 10) e.push(t);
        return e[e.length - 1] !== xw.qh && e.push(xw.qh), e;
    })(),
    xF = (0, d.sN)(u.X.CLIPS_AUTO_CLIP_STORAGE_LIMIT, {
        useTitle: () => _.intl.string(_.t.yfsrDI),
        useSubtitle: () => _.intl.string(_.t.vlDHdC),
        minValue: xw.wN,
        maxValue: xw.qh,
        getInitialValue: () => xk.A.getSettings().maxAutoClips,
        onValueRender: (e) => `${Math.floor(e)}`,
        asValueChanges: (e) => xV.e6(Math.floor(e)),
        markers: xB,
        onMarkerRender: (e) => `${Math.floor(e)}`,
    }),
    xz = (0, d.zD)(u.X.CLIPS_ENABLE_GAME_SIGNALS, {
        useTitle: () => _.intl.string(_.t.iV6KcI),
        useSubtitle: () => _.intl.string(_.t["dJ2tX+"]),
        useValue: () => (0, R.bG)([xk.A], () => xk.A.getSettings().clipSignals.enableGameSignals),
        setValue: (e) => {
            let t = xk.A.getSettings().clipSignals;
            xV.PW({ ...t, enableGameSignals: e });
        },
    }),
    xX = (0, d.zD)(u.X.CLIPS_ENABLE_PHRASE_SIGNALS, {
        useTitle: () => _.intl.string(_.t.nHsilt),
        useSubtitle: () => _.intl.string(_.t["s6wq+m"]),
        useValue: () => (0, R.bG)([xk.A], () => xk.A.getSettings().clipSignals.enablePhraseSignals),
        setValue: (e) => {
            let t = xk.A.getSettings().clipSignals;
            xV.PW({ ...t, enablePhraseSignals: e });
        },
    }),
    xY = (0, d.E2)(u.X.CLIPS_PHRASES, {
        useSearchTerms: () => [_.intl.string(_.t.JIze0o)],
        usePredicate: () => (0, R.bG)([xk.A], () => xk.A.getSettings().clipSignals).enablePhraseSignals,
        Component: function () {
            let e = (0, R.bG)([xk.A], () => xk.A.getSettings().autoClipPhrases),
                [t, n] = f.useState(""),
                i = f.useMemo(() => e.map((e) => ({ id: e, label: e })), [e]),
                l = f.useCallback((e) => {
                    n(e);
                }, []),
                s = f.useCallback(
                    (i) => {
                        if ("Enter" === i.key || "," === i.key) {
                            i.preventDefault();
                            let l = t.trim().toLowerCase();
                            l.length > 0 && !e.includes(l) && (xV.pM([...e, l]), n(""));
                        } else if ("Backspace" === i.key && "" === t && e.length > 0) {
                            let t = e.slice(0, -1);
                            xV.pM(t);
                        }
                    },
                    [t, e],
                ),
                a = f.useCallback(
                    (t) => {
                        let n = Array.from(t)[0],
                            i = e.filter((e) => e !== n);
                        xV.pM(i);
                    },
                    [e],
                );
            return (0, x.jsx)(sM.k, {
                value: t,
                onChange: l,
                onKeyDown: s,
                placeholder: _.intl.string(_.t.zYUZpt),
                leading: i.length > 0 ? { type: "tags", items: i, onRemove: a } : void 0,
            });
        },
    }),
    xH = (0, d.zZ)(u.X.CLIPS_AUTOMATIC_CLIPPING_CATEGORY, {
        useTitle: () => _.intl.string(_.t.sA0WKL),
        usePredicate: () => {
            let { enableAdvancedSignals: e } = sI.L_.useConfig({ location: "ClipsAutomaticClippingCategory" });
            return e;
        },
        buildLayout: () => [xF, xz, xX, xY],
    });
var xK = n(753070);
let xW = (0, d.Hn)(u.X.CLIPS_FRAME_RATE, {
    useTitle: () => _.intl.string(_.t["2wScL1"]),
    useSubtitle: () => _.intl.string(_.t["Rf9+fy"]),
    useValue: () => (0, R.bG)([xk.A], () => xk.A.getSettings().clipsQuality.frameRate),
    setValue: (e) => {
        let { clipsQuality: t } = xk.A.getSettings();
        xV.GS({ resolution: t.resolution, frameRate: e });
    },
    useOptions: () => [
        { id: "15", value: xK.kn.FPS_15, label: _.intl.formatToPlainString(_.t.Qb44XH, { fps: xK.kn.FPS_15 }) },
        { id: "30", value: xK.kn.FPS_30, label: _.intl.formatToPlainString(_.t.Qb44XH, { fps: xK.kn.FPS_30 }) },
        { id: "60", value: xK.kn.FPS_60, label: _.intl.formatToPlainString(_.t.Qb44XH, { fps: xK.kn.FPS_60 }) },
    ],
});
var xZ = n(372684);
let xQ = (0, d.E2)(u.X.CLIPS_HARDWARE_CLASSIFICATION_WARNING, {
    useSearchTerms: () => [_.intl.string(_.t.SIxrIF)],
    usePredicate: () => (0, R.bG)([xk.A], () => xk.A.getHardwareClassification()) === xZ.k9.BELOW_MINIMUM,
    Component: () => (0, x.jsx)(ll.A, { look: ll.k.WARNING, children: _.intl.string(_.t.SIxrIF) }),
});
var xq = n(239892);
let xJ = (0, d.E2)(u.X.CLIPS_KEYBIND, {
        useSearchTerms: () => [_.intl.string(_.t.pf54EU), _.intl.string(_.t["QyB/jK"])],
        Component: () => {
            let e = (0, R.bG)([eC.Ay], () => eC.Ay.getKeybindForAction(q.hCu.SAVE_CLIP, !0));
            tO()(null != e, "Save clip keybind unset");
            let t = f.useCallback(
                (t) => {
                    tR.A.setKeybind({ ...e, shortcut: t });
                },
                [e],
            );
            return (0, x.jsx)(lR.D, {
                label: _.intl.string(_.t.pf54EU),
                description: _.intl.string(_.t["QyB/jK"]),
                layout: "horizontal",
                children: (0, x.jsx)("div", {
                    className: xq.g,
                    children: (0, x.jsx)(tL.A, { defaultValue: e.shortcut, onChange: t }),
                }),
            });
        },
    }),
    x$ = (0, d.Hn)(u.X.CLIPS_LENGTH, {
        useTitle: () => _.intl.string(_.t.OgfUio),
        useSubtitle: () => _.intl.string(_.t.H7j4tY),
        useValue: () => (0, R.bG)([xk.A], () => xk.A.getSettings().clipsLength),
        setValue: (e) => xV.h$(e),
        useOptions: () => [
            { id: "30s", value: xw.LX.SECONDS_30, label: _.intl.formatToPlainString(_.t["bTFv/3"], { count: 30 }) },
            { id: "1m", value: xw.LX.MINUTES_1, label: _.intl.formatToPlainString(_.t.ICo9Nk, { count: 1 }) },
            { id: "2m", value: xw.LX.MINUTES_2, label: _.intl.formatToPlainString(_.t.ICo9Nk, { count: 2 }) },
        ],
    }),
    x0 = (0, d.E2)(u.X.CLIPS_QUALITY_INFOBOX, {
        useSearchTerms: () => [_.intl.string(_.t["Z+MfqT"])],
        Component: () => (0, x.jsx)(ll.A, { look: ll.k.INFO, children: _.intl.string(_.t["Z+MfqT"]) }),
    }),
    x1 = (0, d.Hn)(u.X.CLIPS_RESOLUTION, {
        useTitle: () => _.intl.string(_.t.aFudZJ),
        useSubtitle: () => _.intl.string(_.t.nIrkW5),
        useValue: () => (0, R.bG)([xk.A], () => xk.A.getSettings().clipsQuality.resolution),
        setValue: (e) => {
            let { clipsQuality: t } = xk.A.getSettings();
            xV.GS({ resolution: e, frameRate: t.frameRate });
        },
        useOptions: () => [
            {
                id: "480p",
                value: xK.on.RESOLUTION_480,
                label: _.intl.formatToPlainString(_.t.TEOC0I, { resolution: xK.on.RESOLUTION_480 }),
            },
            {
                id: "720p",
                value: xK.on.RESOLUTION_720,
                label: _.intl.formatToPlainString(_.t.TEOC0I, { resolution: xK.on.RESOLUTION_720 }),
            },
            {
                id: "1080p",
                value: xK.on.RESOLUTION_1080,
                label: _.intl.formatToPlainString(_.t.TEOC0I, { resolution: xK.on.RESOLUTION_1080 }),
            },
            {
                id: "1440p",
                value: xK.on.RESOLUTION_1440,
                label: _.intl.formatToPlainString(_.t.TEOC0I, { resolution: xK.on.RESOLUTION_1440 }),
            },
            { id: "source", value: xK.on.RESOLUTION_SOURCE, label: _.intl.string(_.t.XjXqzh) },
        ],
    }),
    x2 = (0, d.E2)(u.X.CLIPS_SCREENSHOT_KEYBIND, {
        useSearchTerms: () => [_.intl.string(_.t["0U/hj7"]), _.intl.string(_.t["5zxkdo"])],
        usePredicate: sI.BW,
        Component: () => {
            let e = (0, R.bG)([eC.Ay], () => eC.Ay.getKeybindForAction(q.hCu.SAVE_CLIP, !0)),
                t = (0, R.bG)([eC.Ay], () => eC.Ay.getKeybindForAction(q.hCu.SAVE_SCREENSHOT, !0));
            tO()(null != e, "Save clip keybind unset"), tO()(null != t, "Save screenshot keybind unset");
            let n = f.useCallback(
                (e) => {
                    tR.A.setKeybind({ ...t, shortcut: e });
                },
                [t],
            );
            return (0, x.jsx)(lR.D, {
                label: _.intl.string(_.t["0U/hj7"]),
                description: _.intl.string(_.t["5zxkdo"]),
                layout: "horizontal",
                children: (0, x.jsx)("div", {
                    className: xq.g,
                    children: (0, x.jsx)(tL.A, { defaultValue: t.shortcut, onChange: n }),
                }),
            });
        },
    }),
    x5 = (0, d.E2)(u.X.CLIPS_STORAGE_LOCATION, {
        useSearchTerms: () => [_.intl.string(_.t.s4773E), _.intl.string(_.t.svjwGh)],
        Component: () => {
            let e = (0, R.bG)([xk.A], () => xk.A.getSettings().storageLocation),
                t = f.useRef(!1),
                n = async () => {
                    if (!t.current) {
                        t.current = !0;
                        try {
                            let e = await l3.A.fileManager.showOpenDialog({
                                properties: ["openDirectory", "createDirectory"],
                            });
                            e.length > 0 && xV.HU(e[0]);
                        } finally {
                            t.current = !1;
                        }
                    }
                };
            return (0, x.jsx)(lR.D, {
                label: _.intl.string(_.t.s4773E),
                description: _.intl.string(_.t.svjwGh),
                layout: "horizontal",
                children: (0, x.jsx)(k.D, {
                    "aria-label": _.intl.formatToPlainString(_.t.iMONTj, { storageLocation: e }),
                    onClick: n,
                    children: (0, x.jsx)(sM.k, { tabIndex: -1, value: e, editable: !1, "aria-hidden": !0 }),
                }),
            });
        },
    });
var x3 = n(572164);
let x8 = (0, d.zD)(u.X.CLIPS_ENABLE, {
    useTitle: () => _.intl.string(_.t.h8rgrK),
    useSubtitle: () => _.intl.string(_.t["4Qw3NO"]),
    useValue: () => (0, x3.Et)(),
    setValue: (e) => xV.yO({ clipsEnabled: e, trackAnalytics: !0 }),
});
var x4 = n(915618);
let x9 = (0, d.zD)(u.X.CLIPS_ENABLE_DECOUPLED_CLIPPING, {
        useTitle: () => _.intl.string(_.t.yXvykv),
        useSubtitle: () => _.intl.string(_.t.YP3ujk),
        useValue: x3.XT,
        setValue: (e) => xV.fd({ enabled: e, trackAnalytics: !0 }),
        usePredicate: () => {
            let e = (0, ey.isWindows)(),
                t = (0, x4.A)(sO.Ay);
            return e && t;
        },
    }),
    x7 = (0, d.zD)(u.X.CLIPS_ENABLE_REMINDERS, {
        useTitle: () => _.intl.string(_.t["3zwNf6"]),
        useSubtitle: () => _.intl.string(_.t.m4Cjj9),
        useValue: () => (0, R.bG)([xk.A], () => xk.A.getSettings().remindersEnabled),
        setValue: (e) => xV.Mt(e),
    }),
    x6 = (0, d.zZ)(u.X.CLIPS_RECORDING_CATEGORY, {
        useTitle: () => _.intl.string(_.t.iIwmV5),
        buildLayout: () => [x0, xQ, x8, x9, x7, x$, x1, xW, xJ, x2, x5],
    }),
    fe = (0, d.t_)(u.X.CLIPS_PANEL, {
        useTitle: () => _.intl.string(_.t.z2jK6X),
        usePersistentBadge: () => ({
            badgeType: eb.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            useCustomBadge: () => (0, x.jsx)(xU, {}),
        }),
        usePredicate: sI.sw,
        buildLayout: () => [x6, xH],
    }),
    ft = (0, d.i4)(u.X.CLIPS_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(_.t.z2jK6X),
        icon: xP.x,
        buildLayout: () => [fe],
    });
var fn = n(187322),
    fi = n(77468),
    fl = n(289498),
    fs = n(573648),
    fa = n(941314),
    fr = n(681819),
    fo = n(370480),
    fd = n(773952);
let fu = new Set([q.fg2.XBOX, q.fg2.PLAYSTATION, q.fg2.PLAYSTATION_STAGING, q.fg2.CRUNCHYROLL]);
var fc = n(169869),
    fg = n(201718),
    f_ = n(321078),
    fm = n(672130),
    fh = n(546183),
    fA = n(30370),
    fp = n(379848),
    fE = n(950018);
let fT = (e) => {
        let { markAsDismissed: t } = e;
        return (
            f.useEffect(() => t(t6.i.UNKNOWN), [t]),
            (0, x.jsx)(i6.Lp, { className: fE.Ad, text: _.intl.string(_.t.y2b7CA) })
        );
    },
    fS = (e) => {
        let { title: t, body: n, img: i, newIndicatorDismissibleContent: l, onClick: s } = e;
        return (0, x.jsxs)("div", {
            className: fE.kL,
            children: [
                i,
                (0, x.jsxs)("div", {
                    className: fE.FS,
                    children: [
                        (0, x.jsxs)("div", {
                            className: fE.TK,
                            children: [
                                (0, x.jsx)(fp.Ay, {
                                    contentTypes: [l],
                                    children: (e) => {
                                        let { visibleContent: t, markAsDismissed: n } = e;
                                        return t === l ? (0, x.jsx)(fT, { markAsDismissed: n }) : null;
                                    },
                                }),
                                (0, x.jsx)(V.E, { variant: "text-md/semibold", children: t }),
                            ],
                        }),
                        (0, x.jsx)(V.E, { variant: "text-xs/normal", children: n }),
                    ],
                }),
                (0, x.jsx)(eA.$, { text: _.intl.string(_.t.vD60Pv), onClick: s }),
            ],
        });
    },
    fx = () => {
        let e = to.A.getArticleURL(q.MVz.PS_CONNECTION);
        return (0, x.jsx)(fS, {
            title: _.intl.string(_.t.v20wwm),
            body: _.intl.format(_.t.lTZBit, { help_article: e }),
            img: (0, x.jsx)("img", { src: "/assets/88954903b6a5b9cc.svg", width: "82", height: "auto", alt: "" }),
            newIndicatorDismissibleContent: ep.M.PS_ONE_WAY_RECONNECT,
            onClick: () => (0, fd.A)({ platformType: q.fg2.PLAYSTATION, location: "PS two way upsell" }),
        });
    },
    ff = () => {
        let e = to.A.getArticleURL(q.MVz.XBOX_CONNECTION);
        return (0, x.jsx)(fS, {
            title: _.intl.string(_.t["2okkZV"]),
            body: _.intl.format(_.t.OnERSS, { help_article: e }),
            img: (0, x.jsx)("img", { src: "/assets/9df988a227916145.png", width: "auto", height: "45", alt: "" }),
            newIndicatorDismissibleContent: ep.M.XBOX_ONE_WAY_RECONNECT,
            onClick: () => (0, fd.A)({ platformType: q.fg2.XBOX, location: "Xbox two way upsell" }),
        });
    };
var fb = n(783419),
    fN = n(534952),
    fC = n(838251);
let fI = (e) => {
    let t,
        { integration: n } = e,
        {
            isJoining: i,
            joinErrorMessage: l,
            showJoinErrorMessage: s,
        } = (0, R.cf)(
            [fA.A],
            () => ({
                isJoining: fA.A.isJoining(n.id),
                joinErrorMessage:
                    "" === fA.A.joinErrorMessage(n.id) ? _.intl.string(_.t.j2d6Km) : fA.A.joinErrorMessage(n.id),
                showJoinErrorMessage: void 0 !== fA.A.joinErrorMessage(n.id),
            }),
            [n.id],
        );
    return (
        null != (0, R.bG)([K.A], () => K.A.getGuild(n.guild.id), [n.guild.id]) ||
            (t = (0, x.jsx)(eA.$, {
                size: "sm",
                onClick: function () {
                    fi.A.joinServer(n.id, () => {});
                },
                disabled: i,
                variant: "primary",
                text: i ? _.intl.string(_.t.RXvQQu) : _.intl.string(_.t.XpeFYr),
            })),
        (0, x.jsxs)("div", {
            className: fC.iA,
            children: [
                (0, x.jsxs)("div", {
                    className: fC.XX,
                    children: [
                        (0, x.jsx)(c6.Ay, { size: c6.Ay.Sizes.SMALL, guild: n.guild, className: fC.$f }),
                        (0, x.jsxs)("div", {
                            className: fC.Vn,
                            children: [
                                (0, x.jsx)(V.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: n.guild.name,
                                }),
                                (0, x.jsx)(dT.Anchor, {
                                    href: fs.A.get(n.type)?.getPlatformUserUrl?.(n.account),
                                    children: (0, x.jsx)(V.E, {
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
                    (0, x.jsx)(V.E, {
                        variant: "text-xs/normal",
                        color: "text-feedback-critical",
                        className: fC.R,
                        children: l,
                    }),
            ],
        })
    );
};
function fv(e) {
    let t,
        n,
        i,
        l,
        s,
        a,
        r,
        { onDisconnect: o, account: d, theme: u, locale: c } = e,
        [g, m] = f.useState(d.friendSync),
        [h, A] = f.useState(d.visibility),
        [p, E] = f.useState(d.metadataVisibility),
        [T, S] = f.useState(d.showActivity),
        [b, C] = f.useState(null),
        [I, v] = f.useState(null),
        [y, j] = f.useState(!1),
        [O, R] = f.useState([]),
        L = (0, fr.ML)(d.type),
        G = fs.A.get(L);
    f.useEffect(() => {
        m(d.friendSync), A(d.visibility), E(d.metadataVisibility), S(d.showActivity);
    }, [d]);
    let P = { inProgressVisibility: b, inProgressMetadataVisibility: I },
        M = f.useRef(P);
    return (
        f.useEffect(() => {
            M.current = P;
        }),
        f.useEffect(() => {
            if (!1 === d.verified) return;
            let { inProgressVisibility: e, inProgressMetadataVisibility: t } = M.current;
            null != e && (A(e), fi.A.setVisibility(d.type, d.id, e), C(null)),
                null != t && (E(t), fi.A.setMetadataVisibility(d.type, d.id, t), v(null));
        }, [d]),
        (0, x.jsxs)("div", {
            className: fC.FI,
            children: [
                ((t = fs.A.get(d.type)),
                (n = fs.A.get(L)),
                (i = "1" === (d.metadata ?? {})[fb.pK.TWITTER_VERIFIED]),
                (l = null),
                t.type === q.fg2.TWITTER &&
                    i &&
                    (l = (0, x.jsx)(e1.m, {
                        text: _.intl.string(_.t.Jebrww),
                        children: (0, x.jsx)(e6.A, {
                            color: B.A.unsafe_rawColors.PLATFORM_TWITTER.css,
                            children: (0, x.jsx)(e2.U, { size: "xs", color: B.A.unsafe_rawColors.WHITE.css }),
                        }),
                    })),
                (0, x.jsxs)("div", {
                    className: fC.Il,
                    children: [
                        (0, x.jsx)("img", {
                            alt: n.name,
                            className: fC.gj,
                            src: (0, cM.M)(u) ? n.icon.darkSVG : n.icon.lightSVG,
                        }),
                        (0, x.jsxs)("div", {
                            children: [
                                (0, x.jsxs)("div", {
                                    className: fC.$p,
                                    children: [
                                        (0, x.jsx)(V.E, {
                                            color: "text-strong",
                                            variant: "text-md/semibold",
                                            className: fC.RW,
                                            children: d.name,
                                        }),
                                        null != l && (0, x.jsx)("div", { className: fC.cG, children: l }),
                                    ],
                                }),
                                (0, x.jsx)(V.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: fC.Au,
                                    children: n.name,
                                }),
                            ],
                        }),
                        (0, x.jsx)(k.D, {
                            className: fC.uH,
                            onClick: function () {
                                let e = fs.A.get(d.type);
                                (0, N.openModal)((t) =>
                                    (0, x.jsx)(sP.Modal, {
                                        title: _.intl.formatToPlainString(_.t.U5x12f, { name: e.name }),
                                        subtitle: _.intl.format(_.t.VgqIPj, { provider: e.name }),
                                        actions: [
                                            {
                                                text: _.intl.string(_.t["ETE/oC"]),
                                                onClick: t.onClose,
                                                variant: "secondary",
                                            },
                                            {
                                                text: _.intl.string(_.t.bsbMVz),
                                                onClick: () => {
                                                    o(), t.onClose();
                                                },
                                                variant: "primary",
                                            },
                                        ],
                                        ...t,
                                        children:
                                            fu.has(d.type) &&
                                            d.twoWayLink &&
                                            (0, x.jsx)(ll.A, {
                                                children: _.intl.format(_.t.COW3Xn, { platformName: e.name }),
                                            }),
                                    }),
                                );
                            },
                            "aria-label": _.intl.string(_.t.ppppRJ),
                            focusProps: { offset: { top: -4, left: -4, right: -4 } },
                            children: (0, x.jsx)(ck.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                })),
                d.twoWayLink
                    ? null
                    : d.type === q.fg2.XBOX
                      ? (0, x.jsx)(ff, {})
                      : d.type === q.fg2.PLAYSTATION
                        ? (0, x.jsx)(fx, {})
                        : null,
                (function (e) {
                    let t = e.metadata ?? {},
                        n = null,
                        i = (0, fo.An)(t[fb.pK.CREATED_AT], c);
                    switch (e.type) {
                        case q.fg2.REDDIT:
                            n = (0, fc.xE)(t, fC.Nz);
                            break;
                        case q.fg2.STEAM:
                            n = (0, fc.dy)(t, fC.Nz);
                            break;
                        case q.fg2.BLUESKY:
                        case q.fg2.TWITTER:
                        case q.fg2.MASTODON:
                            n = (0, fc.ED)(t, fC.Nz);
                            break;
                        case q.fg2.EBAY:
                            n = (0, fc.ub)(t, fC.Nz);
                            break;
                        case q.fg2.PAYPAL:
                            n = (0, fc.gZ)(t, fC.Nz);
                            break;
                        case q.fg2.TIKTOK:
                            n = (0, fc.HU)(t, fC.Nz);
                    }
                    null !== i &&
                        (null == n && (n = []),
                        n?.push(
                            (0, x.jsx)(
                                V.E,
                                {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    className: fC.M4,
                                    children: _.intl.format(_.t["9rfonh"], { date: i }),
                                },
                                "member-since",
                            ),
                        ));
                    let l = O.includes(e.id),
                        s = _.intl.string(_.t.wzzjk9);
                    if (null == n || 0 === n.length)
                        if (!0 !== fs.A.get(e.type).hasMetadata) return null;
                        else
                            (n = [
                                (0, x.jsx)(i6.Lp, { className: fC.Z3, text: _.intl.string(_.t.y2b7CA) }, "badge"),
                                (0, x.jsx)(
                                    V.E,
                                    {
                                        variant: "text-xs/normal",
                                        className: fC.vt,
                                        children: _.intl.format(_.t.Up2ni7, {
                                            helpdeskUrl: to.A.getArticleURL(q.MVz.CONNECTION_DETAILS),
                                        }),
                                    },
                                    "label",
                                ),
                            ]),
                                (s = _.intl.string(_.t["LVh3/5"]));
                    return (
                        l && (s = _.intl.string(_.t.i4jeWR)),
                        n.push(
                            (0, x.jsx)(
                                "div",
                                {
                                    className: fC.jy,
                                    children: (0, x.jsx)(eA.$, {
                                        text: s,
                                        variant: "secondary",
                                        size: "sm",
                                        loading: y,
                                        disabled: l,
                                        "aria-label": _.intl.string(_.t.sCkLYH),
                                        onClick: l
                                            ? void 0
                                            : () => {
                                                  j(!0),
                                                      fi.A.refresh(e.type, e.id).finally(() => {
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
                        (0, x.jsx)("div", { className: fC.tJ, children: n })
                    );
                })(d),
                (q.txh.has(d.type) &&
                    (s = (0, x.jsx)(D.d, {
                        label: _.intl.string(_.t["+KCMSi"]),
                        checked: g,
                        onChange: function (e) {
                            m(e), fi.A.setFriendSync(d.type, d.id, e);
                        },
                    })),
                q.ewM.has(d.type) &&
                    (a = (0, x.jsx)(D.d, {
                        label: _.intl.format(_.t["6u6J0q"], { platform: G.name }),
                        checked: T,
                        onChange: function (e) {
                            S(e), fi.A.setShowActivity(d.type, d.id, e);
                        },
                    })),
                fs.A.get(d.type)?.hasMetadata === !0 &&
                    (r = (0, x.jsx)(D.d, {
                        label: _.intl.string(_.t.FYKGsL),
                        checked: 1 === p,
                        onChange: function (e) {
                            let { verified: t } = d,
                                n = +!!e;
                            if (e && !t) {
                                v(n), (0, fd.A)({ platformType: d.type, location: "User Settings" });
                                return;
                            }
                            E(n), fi.A.setMetadataVisibility(d.type, d.id, n);
                        },
                        disabled: 1 !== h || null == d.metadata,
                    })),
                (0, x.jsxs)("div", {
                    className: fC.HZ,
                    children: [
                        (0, x.jsx)(D.d, {
                            label: _.intl.string(_.t.f7yOAX),
                            checked: 1 === h,
                            onChange: function (e) {
                                let { verified: t } = d,
                                    n = +!!e;
                                if (e && !t) {
                                    C(n), (0, fd.A)({ platformType: d.type, location: "User Settings" });
                                    return;
                                }
                                A(n), fi.A.setVisibility(d.type, d.id, n);
                            },
                        }),
                        r,
                        a,
                        s,
                    ],
                })),
                (function () {
                    if (d.revoked || d.integrations.length > 0) return (0, x.jsx)(nR.c, {});
                })(),
                d.revoked
                    ? (0, x.jsx)(tr.p, {
                          messageType: tr.Y.INFO,
                          children: _.intl.format(_.t["6C4lgA"], {
                              onReconnect: function () {
                                  (0, fd.A)({ platformType: d.type, location: "User Settings" });
                              },
                          }),
                      })
                    : d.integrations.length > 0
                      ? (0, x.jsx)(lR.D, {
                            label: _.intl.string(_.t.fOe3fZ),
                            children: d.integrations.map((e) => (0, x.jsx)(fI, { integration: e }, e.id)),
                        })
                      : void 0,
                null,
            ],
        })
    );
}
function fy(e) {
    let { appIdentity: t, oauth2Token: n } = e;
    return null == n
        ? null
        : (0, x.jsxs)("div", {
              className: fC.FI,
              children: [
                  (function (e, t) {
                      let { application: n } = t,
                          i = nJ.Ay.getApplicationIconURL({ id: n.id, icon: n.icon });
                      return (0, x.jsxs)("div", {
                          className: fC.Il,
                          children: [
                              (0, x.jsx)("img", { alt: n.name, className: eB()(fC.gj, fC.sN), src: i }),
                              (0, x.jsxs)("div", {
                                  children: [
                                      (0, x.jsx)("div", {
                                          className: fC.$p,
                                          children: (0, x.jsx)(V.E, {
                                              color: "text-strong",
                                              variant: "text-md/semibold",
                                              className: fC.RW,
                                              children: e.profile.username,
                                          }),
                                      }),
                                      (0, x.jsx)(V.E, {
                                          variant: "text-xs/normal",
                                          color: "text-strong",
                                          className: fC.Au,
                                          children: n.name,
                                      }),
                                  ],
                              }),
                              (0, x.jsx)(k.D, {
                                  className: fC.uH,
                                  onClick: () =>
                                      (0, xO.d1)(n, () => {
                                          xj.A.delete(t.id);
                                      }),
                                  "aria-label": _.intl.string(_.t.ppppRJ),
                                  focusProps: { offset: { top: -4, left: -4, right: -4 } },
                                  children: (0, x.jsx)(ck.P, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      });
                  })(t, n),
                  (0, x.jsx)("div", {
                      className: fC.HZ,
                      children: (0, x.jsx)(D.d, {
                          label: _.intl.string(_.t.f7yOAX),
                          checked: t.profile?.connection_visible ?? !1,
                          onChange: (e) => {
                              fg.A.updateApplicationIdentityConfig(n.application.id, t.provider_issued_user_id, {
                                  connection_visible: e,
                              });
                          },
                      }),
                  }),
              ],
          });
}
function fj(e) {
    let t = fs.A.get(e);
    (0, fd.A)({ platformType: t.type }),
        Y.default.track(q.HAw.ACCOUNT_LINK_STEP, {
            previous_step: "desktop connections",
            current_step: "desktop oauth",
            platform_type: t.type,
        });
}
function fO() {
    let e = (0, fr.gn)(),
        t = fa.A.useConfig({ location: "User Settings Connections" }),
        n = (0, eQ.A)(t.enabled ? fN.tX : []);
    return (0, x.jsxs)("div", {
        className: fC.lA,
        children: [
            n.map(
                (e) =>
                    null != e &&
                    (0, x.jsx)(
                        fm.A,
                        { application: e, className: fC.__invalid_accountButton, innerClassName: fC.U$ },
                        e.id,
                    ),
            ),
            e
                .slice(0, 10 - n.length)
                .map((e) =>
                    (0, x.jsx)(
                        fl.A,
                        { type: e.type, className: fC.__invalid_accountButton, innerClassName: fC.U$ },
                        e.type,
                    ),
                ),
            (0, x.jsx)(e1.m, {
                text: _.intl.string(_.t.QqTz8b),
                children: (0, x.jsx)("div", {
                    className: eB()(fC.ej, fC.__invalid_accountButton),
                    children: (0, x.jsx)(fn.vN, {
                        children: (0, x.jsx)("button", {
                            className: eB()(fC.R8, fC.U$),
                            type: "button",
                            onClick: function () {
                                i8.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: fj });
                            },
                            "aria-label": _.intl.string(_.t.Zhcj9X),
                            children: (0, x.jsx)(tA._, {
                                color: "currentColor",
                                size: "md",
                                "aria-label": _.intl.string(_.t.QqTz8b),
                            }),
                        }),
                    }),
                }),
            }),
        ],
    });
}
function fR(e) {
    let t,
        { fetching: n, accounts: i, appIdentities: l, authorizedApps: s, theme: a, locale: r } = e;
    return (
        (t = n
            ? (0, x.jsx)(dU.y, { type: dU.y.Type.SPINNING_CIRCLE })
            : 0 === i.length && 0 === l.length
              ? (0, x.jsx)(na.pp, {
                    theme: a,
                    children: (0, x.jsx)(na.SG, {
                        note: _.intl.string(_.t.WenGZ2),
                        children: _.intl.string(_.t.aoLS84),
                    }),
                })
              : (0, x.jsxs)(x.Fragment, {
                    children: [
                        l.map((e, t) =>
                            (0, x.jsx)(
                                fy,
                                { appIdentity: e, oauth2Token: s.find((t) => t.application.id === e.application_id) },
                                `app-${t}`,
                            ),
                        ),
                        i
                            .filter((e) => fs.A.isSupported(e.type))
                            .map((e, t) =>
                                (0, x.jsx)(
                                    fv,
                                    {
                                        theme: a,
                                        account: e,
                                        locale: r,
                                        onDisconnect: () =>
                                            (function (e) {
                                                let { type: t, id: n } = e;
                                                fi.A.disconnect(t, n);
                                            })(e),
                                    },
                                    `connection-${t}`,
                                ),
                            ),
                    ],
                })),
        (0, x.jsx)("div", { className: fC.V, children: t })
    );
}
let fL = (0, d.E2)(u.X.CONNECTIONS_ADD_CONNECTIONS_SETTING, {
        Component: function () {
            return (0, x.jsx)(lR.D, {
                label: _.intl.string(_.t.ZeDrUf),
                description: _.intl.format(_.t["oYc+Gz"], { privacyPolicyUrl: q.X7G.PRIVACY }),
                children: (0, x.jsx)(fO, {}),
            });
        },
        useSearchTerms: () => [
            _.intl.string(_.t.ZeDrUf),
            _.intl.string(_.t.Zhcj9X),
            _.intl.string(_.t.QqTz8b),
            _.intl.string(_.t["+/hZM/"]),
            _.intl.string(_.t.bsbMVz),
            _.intl.string(_.t.f7yOAX),
            _.intl.string(_.t.FYKGsL),
            _.intl.string(_.t["+KCMSi"]),
        ],
    }),
    fD = (0, d.E2)(u.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING, {
        Component: function () {
            let e = (0, R.bG)([eN.A], () => eN.A.hidePersonalInformation),
                t = (0, R.bG)([fA.A], () => fA.A.isFetching()),
                n = (0, R.bG)([fA.A], () => fA.A.getAccounts()),
                { authorizedAppsFetchState: i, authorizedApps: l } = (0, R.cf)([fh.default], () => ({
                    authorizedAppsFetchState: fh.default.getFetchState(),
                    authorizedApps: fh.default.getNewestTokensForNonChildrenApplications(),
                })),
                { isLoading: s, filteredAppIdentities: a } = (0, f_.A)(t3.default.getCurrentUser().id, {
                    includeHidden: !0,
                }),
                r = (0, uU.Ay)(),
                o = (0, R.bG)([ur.default], () => ur.default.locale);
            return (f.useEffect(() => {
                i === fh.FetchState.NOT_FETCHED && xj.A.fetch();
            }, [i]),
            e)
                ? null
                : (0, x.jsxs)(x.Fragment, {
                      children: [
                          null,
                          (0, x.jsx)(fR, {
                              fetching: t || s || (a.length > 0 && i !== fh.FetchState.FETCHED),
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
            fi.A.fetch();
        },
        useSearchTerms: () => [
            _.intl.string(_.t["+/hZM/"]),
            _.intl.string(_.t.bsbMVz),
            _.intl.string(_.t.f7yOAX),
            _.intl.string(_.t.FYKGsL),
            _.intl.string(_.t["+KCMSi"]),
        ],
    });
var fG = n(46225),
    fP = n(452832);
let fM = [q.fg2.LEAGUE_OF_LEGENDS, q.fg2.RIOT_GAMES],
    fU = [{ badgeType: eb.Xi.NEW, dismissibleContent: ep.M.NEW_CRUNCHYROLL_CONNECTION }],
    fk = (0, d.zZ)(u.X.CONNECTIONS_ADD_CONNECTIONS_CATEGORY, {
        buildLayout: () => [fL],
        useInlineNotice: function () {
            let e = (0, R.bG)([fA.A], () => fA.A.getAccounts().find((e) => fM.includes(e.type))?.type),
                t = null != e ? fs.A.get(e) : null,
                n = (0, eQ.h)(t?.replacedBy),
                { canStartAuthorization: i, hasAlreadyLinked: l, fetched: s } = (0, fG.RD)(n),
                a = _.intl.string(fP.default["1S6oAo"]),
                r = fa.A.useConfig({ location: "RiotDeprecationInlineNotice" }).enabled;
            return f.useMemo(
                () =>
                    r && null != t && i && n?.connectionEntrypointUrl != null && !l && s
                        ? {
                              type: eb.lT.INLINE_NOTICE,
                              noticeType: "info",
                              useText: () =>
                                  _.intl.format(fP.default.DeOsIl, {
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
    fV = (0, d.zZ)(u.X.CONNECTIONS_CONNECTED_ACCOUNTS_CATEGORY, { buildLayout: () => [fD] }),
    fw = (0, d.t_)(u.X.CONNECTIONS_PANEL, {
        useTitle: () => _.intl.string(_.t["3fe7U5"]),
        useObscuredNotice: dP.L,
        buildLayout: () => [fk, fV],
    }),
    fB = (0, d.i4)(u.X.CONNECTIONS_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(_.t["3fe7U5"]),
        icon: hu.q,
        getDismissibleBadges: () => fU,
        buildLayout: () => [fw],
    });
var fF = n(875444);
function fz(e, t) {
    let n = (0, R.bG)([fh.default], () => fh.default.getFetchState()),
        i = (0, R.bG)([fh.default], () =>
            e ? fh.default.getNewestTokensForNonChildrenApplications() : fh.default.getNewestTokens(),
        ),
        l = f.useMemo(
            () => (null == i ? [] : i.filter((e) => (0, fF.A)(e.application)).map((e) => e.application)),
            [i],
        );
    return (
        f.useEffect(() => {
            t || xj.A.fetch();
        }, [t]),
        { showLoadingIndicator: n !== fh.FetchState.FETCHED && (null == i || 0 === i.length), slayerSdkApplications: l }
    );
}
n(505653);
var fX = n(106148);
n(650832);
var fY = n(628736);
function fH(e) {
    let { applications: t } = e,
        n = f.useMemo(() => t.sort((e, t) => dY.default.compare(t.id, e.id)), [t]),
        i = f.useMemo(() => {
            let e = [];
            for (let t = 0; t < 3; t++) {
                let i = n[t];
                if (null == i) break;
                e.push(i.name);
            }
            let t = e.join(", "),
                i = n.length - 3;
            return i > 0
                ? _.intl.format(_.t.sHFdTg, {
                      gameList: t,
                      plusMoreHook: (e, t) =>
                          (0, x.jsx)(
                              V.E,
                              {
                                  tag: "span",
                                  variant: "text-sm/medium",
                                  color: "text-muted",
                                  children: _.intl.format(_.t["EADv+4"], { count: i }),
                              },
                              t,
                          ),
                  })
                : e.join(", ");
        }, [n]),
        l = f.useMemo(() => {
            let e = [];
            for (let t = 0; t < 3; t++) {
                let i = n[t];
                if (null == i) break;
                let { icon: l, name: s, id: a } = i,
                    r = nJ.Ay.getApplicationIconURL({ id: a, icon: l });
                e.push(
                    (0, x.jsx)(
                        e1.m,
                        {
                            __unsupportedReactNodeAsText: s,
                            children: (0, x.jsx)("img", { src: r, "aria-label": s, className: fY.Kk }),
                        },
                        a,
                    ),
                );
            }
            let t = n.length - 3;
            return (
                t > 0 &&
                    e.push(
                        (0, x.jsx)(
                            "div",
                            {
                                className: fY.lK,
                                children: (0, x.jsx)(V.E, {
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
    return (0, x.jsxs)("div", {
        className: fY.wx,
        children: [
            (0, x.jsxs)("div", {
                className: fY.kX,
                children: [
                    (0, x.jsx)(V.E, { variant: "text-md/normal", color: "text-strong", children: i }),
                    (0, x.jsxs)(k.D, {
                        onClick: () => {
                            (0, ej.openUserSettings)(u.X.AUTHORIZED_APPS_PANEL);
                        },
                        className: fY.bJ,
                        children: [
                            (0, x.jsx)(V.E, {
                                variant: "text-xs/normal",
                                color: "interactive-text-default",
                                children: _.intl.format(_.t.oYaYOe, {}),
                            }),
                            (0, x.jsx)(tA._, {
                                size: "xxs",
                                color: B.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                className: fY.g7,
                            }),
                        ],
                    }),
                ],
            }),
            (0, x.jsx)("div", { className: fY.yF }),
            (0, x.jsx)("div", { className: fY.lJ, children: l }),
        ],
    });
}
function fK() {
    return (0, x.jsxs)("div", {
        className: fY.do,
        children: [
            (0, x.jsx)(V.E, {
                variant: "text-md/medium",
                color: "text-strong",
                className: fY.xV,
                children: _.intl.string(_.t["+0U77d"]),
            }),
            (0, x.jsx)(V.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: _.intl.format(_.t.V8wClM, {
                    helpdeskArticle: to.A.getArticleURL(q.MVz.SOCIAL_LAYER_CONNECTIONS),
                }),
            }),
        ],
    });
}
function fW(e) {
    let { applications: t } = e;
    return t.length > 0 ? (0, x.jsx)(fH, { applications: t }) : (0, x.jsx)(fK, {});
}
let fZ = (0, d.E2)(u.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES, {
    useSearchTerms: () => [_.intl.string(_.t.YpCiMt)],
    Component: function () {
        let { showLoadingIndicator: e, slayerSdkApplications: t } = fz(!0);
        return e ? (0, x.jsx)(dU.y, {}) : (0, x.jsx)(fW, { applications: t });
    },
});
function fQ() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = fz(!0, !0);
    return !e && t.length > 0;
}
let fq = (0, d.zD)(u.X.CONTENT_AND_SOCIAL_ALLOW_GAME_FRIEND_DMS_SETTING, {
        useTitle: () => _.intl.string(_.t.XpBObB),
        useSubtitle: () =>
            _.intl.format(_.t.oZsHTD, { helpdeskArticle: to.A.getArticleURL(q.MVz.SLAYER_GAME_FRIENDS) }),
        useSearchTerms: () => [_.intl.string(_.t["Uv/eTx"])],
        useValue: () => g.Zk.useSetting(),
        setValue: (e) => g.Zk.updateSetting(e),
        usePredicate: fQ,
    }),
    fJ = (0, d.Qx)(u.X.CONTENT_AND_SOCIAL_IN_GAME_DMS_SETTING, {
        useTitle: () => _.intl.string(_.t["ms+Tme"]),
        useSubtitle: () => _.intl.string(_.t["4NN4+/"]),
        useOptions: () => [
            { name: _.intl.string(_.t.JIFnN9), value: b.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL },
            { name: _.intl.string(_.t.rRdsk1), value: b.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME },
            { name: _.intl.string(_.t.AolKwN), value: b.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE },
        ],
        useValue: () => {
            let e = g.TA.useSetting();
            return e === b.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET ? b.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL : e;
        },
        setValue: (e) => g.TA.updateSetting(e),
        usePredicate: fQ,
    }),
    f$ = (0, d.zZ)(u.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_CATEGORY, {
        useSearchTerms: () => [_.intl.string(_.t.YpCiMt)],
        buildLayout: () => [fZ, fq, fJ],
    });
var f0 = n(687123),
    f1 = n(444802),
    f2 = n(558001);
n(866945);
var f5 = n(835002);
function f3() {
    let e = (0, f1.WX)();
    f.useEffect(() => {
        (0, f2.N)(f5.YA.AGE_CONFIRMATION_NOTICE, f5.YX.VIEWED);
    }, []);
    let t = f.useCallback(() => {
            window.open(to.A.getArticleURL(e), "_blank"), (0, f2.N)(f5.YA.AGE_CONFIRMATION_NOTICE, f5.YX.LEARN_MORE);
        }, [e]),
        n = f.useCallback(() => {
            T8.A.showAgeVerificationGetStartedModal({ entryPoint: T4.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, f2.N)(f5.YA.AGE_CONFIRMATION_NOTICE, f5.YX.CONFIRM_AGE);
        }, []);
    return (0, x.jsx)(tr.p, {
        messageType: tr.Y.INFO,
        action: (0, x.jsx)(F.Q, {
            variant: "secondary",
            size: "sm",
            textVariant: "text-sm/medium",
            text: _.intl.string(_.t.FDSSia),
            onClick: n,
        }),
        children: _.intl.format(_.t.mFgsfg, { hook: (e, n) => (0, x.jsx)(dT.Anchor, { onClick: t, children: e }, n) }),
    });
}
function f8() {
    let e = (0, T$.aX)(f0.t.REACTIVE_CHECK),
        t = (0, TJ.b8)();
    return f.useMemo(() => {
        if (e && !t) return { type: eb.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: f3 };
    }, [e, t]);
}
var f4 = n(308528),
    f9 = n(171316);
function f7() {
    let e = (0, f9.uM)(),
        t = (0, xu.vx)(),
        n = f.useCallback(() => {
            (0, lE.default)(),
                f4.A.openPrivateChannel({ recipientIds: t }),
                (0, f2.N)(f5.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, f5.YX.LEARN_MORE);
        }, [t]),
        i = f.useCallback(() => {
            (0, f2.N)(f5.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, f5.YX.VIEWED);
        }, []);
    return f.useMemo(() => {
        if (e)
            return {
                type: eb.lT.INLINE_NOTICE,
                noticeType: "info",
                trackView: i,
                useText: () =>
                    _.intl.format(xm.default.i284fU, {
                        hook: (e, t) => (0, x.jsx)(dT.Anchor, { onClick: n, children: e }, t),
                        count: t.length,
                    }),
            };
    }, [n, e, t.length, i]);
}
var f6 = n(323073),
    be = n(264249),
    bt = n(406274);
let bn = (0, d.zD)(u.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_DM_SETTING, {
        useTitle: () => _.intl.string(_.t.XahVjj),
        useSubtitle: () => _.intl.string(_.t.R9fXyS),
        useValue: be.hT,
        useDisabled: () => {
            let e = (0, bt.A)() ?? !0,
                t = (0, f6.sP)(),
                n = (0, TJ.yM)();
            return (!t || !!n) && !e;
        },
        setValue: (e) => {
            (0, f6.p5)() && e
                ? T8.A.showAgeVerificationGetStartedModal({ entryPoint: T4.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS })
                : g.Qe.updateSetting(e);
        },
    }),
    bi = (0, d.zD)(u.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_IOS_SETTING, {
        useTitle: () => _.intl.string(_.t["L+yTsa"]),
        useSubtitle: () => _.intl.string(_.t.hiM8pU),
        useValue: be.tI,
        useDisabled: () => {
            let e = (0, bt.A)() ?? !0,
                t = (0, f6.sP)(),
                n = (0, TJ.yM)();
            return f.useMemo(() => (!t || !!n) && !e, [t, e, n]);
        },
        setValue: (e) => {
            (0, f6.p5)() && e
                ? T8.A.showAgeVerificationGetStartedModal({ entryPoint: T4.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS })
                : g.Kg.updateSetting(e);
        },
    });
n(667532);
var bl = n(390248),
    bs = n(632119),
    ba = n(945276),
    br = n(562783),
    bo = n(533517);
function bd() {
    let e,
        t = (0, ba.A)() ?? !0,
        n = (0, f9.uM)(),
        i = (0, f9.uM)(),
        {
            explicitContentGuilds: l,
            explicitContentFriendDm: s,
            explicitContentNonFriendDm: a,
        } = ((e = (0, dE.cf)([oX.A], () => oX.A.settings.textAndImages?.explicitContentSettings ?? (0, bs.C$)())),
        {
            explicitContentGuilds: (0, bs.Ys)({ setting: e?.explicitContentGuilds }),
            explicitContentNonFriendDm: (0, bs.Ys)({ setting: e?.explicitContentNonFriendDm, isDm: !0 }),
            explicitContentFriendDm: (0, bs.Ys)({ setting: e?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
        }),
        r = (e) => {
            let t = Object.values(e);
            (0, bl.hK)() && t.includes(b.TO.SHOW)
                ? T8.A.showAgeVerificationGetStartedModal({ entryPoint: T4.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
                : (0, bs.Jz)(e);
        },
        o = [
            { value: b.TO.BLUR, label: _.intl.string(_.t.S49Uad) },
            { value: b.TO.BLOCK, label: _.intl.string(_.t["D/157Y"]) },
        ],
        d = [{ value: b.TO.BLUR, label: _.intl.string(_.t.S49Uad) }],
        u = { value: b.TO.SHOW, label: _.intl.string(_.t["5k5OFp"]) };
    t && (o.unshift(u), d.unshift(u));
    let c = { isDisabled: i, tooltipText: n ? _.intl.string(xm.default["6Af/cw"]) : void 0 };
    return (0, x.jsxs)(br.E, {
        description: _.intl.string(_.t.Wnojv1),
        children: [
            (0, x.jsx)(bo.A, {
                title: _.intl.string(_.t["+uI23H"]),
                value: s,
                onChange: (e) => r({ explicitContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, x.jsx)(bo.A, {
                title: _.intl.string(_.t["Yh+HX1"]),
                value: a,
                onChange: (e) => r({ explicitContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, x.jsx)(bo.A, {
                title: _.intl.string(_.t["FP+a42"]),
                value: l,
                onChange: (e) => r({ explicitContentGuilds: e }),
                isDisabled: !t || i,
                tooltipText: n ? _.intl.string(xm.default["6Af/cw"]) : void 0,
                options: d,
            }),
        ],
    });
}
function bu() {
    let e,
        t = (0, ba.A)() ?? !0,
        n = (0, f9.uM)(),
        i = (0, f9.uM)(),
        {
            goreContentGuilds: l,
            goreContentFriendDm: s,
            goreContentNonFriendDm: a,
        } = ((e = (0, dE.cf)([oX.A], () => oX.A.settings.textAndImages?.goreContentSettings ?? (0, f1.T4)())),
        {
            goreContentGuilds: (0, f1.gC)({ setting: e?.goreContentGuilds }),
            goreContentNonFriendDm: (0, f1.gC)({ setting: e?.goreContentNonFriendDm, isDm: !0 }),
            goreContentFriendDm: (0, f1.gC)({ setting: e?.goreContentFriendDm, isDm: !0, isFriend: !0 }),
        }),
        r = (e) => {
            let t = Object.values(e);
            (0, bl.hK)() && t.includes(b.TO.SHOW)
                ? T8.A.showAgeVerificationGetStartedModal({ entryPoint: T4.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
                : (0, f1.qY)(e);
        },
        o = [
            { value: b.TO.BLUR, label: _.intl.string(_.t.S49Uad) },
            { value: b.TO.BLOCK, label: _.intl.string(_.t["D/157Y"]) },
        ],
        d = [{ value: b.TO.BLUR, label: _.intl.string(_.t.S49Uad) }],
        u = { value: b.TO.SHOW, label: _.intl.string(_.t["5k5OFp"]) };
    t && (o.unshift(u), d.unshift(u));
    let c = { isDisabled: i, tooltipText: n ? _.intl.string(xm.default["6Af/cw"]) : void 0 };
    return (0, x.jsxs)(br.E, {
        description: _.intl.string(_.t.XgH9eh),
        children: [
            (0, x.jsx)(bo.A, {
                title: _.intl.string(_.t["+uI23H"]),
                value: s,
                onChange: (e) => r({ goreContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, x.jsx)(bo.A, {
                title: _.intl.string(_.t["Yh+HX1"]),
                value: a,
                onChange: (e) => r({ goreContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, x.jsx)(bo.A, {
                title: _.intl.string(_.t["FP+a42"]),
                value: l,
                onChange: (e) => r({ goreContentGuilds: e }),
                isDisabled: !t || i,
                options: d,
                tooltipText: n ? _.intl.string(xm.default["6Af/cw"]) : void 0,
            }),
        ],
    });
}
var bc = n(397620),
    bg = n(759049);
let b_ = (0, d.E2)(u.X.CONTENT_AND_SOCIAL_CONTENT_FILTERS_SETTING, {
    Component: function () {
        let e = (0, f1.WX)(),
            t = f.useMemo(
                () => [
                    {
                        id: "explicit-media-redaction",
                        title: _.intl.string(_.t.GYpoAq),
                        component: bd,
                        orientation: "vertical",
                    },
                    {
                        id: "gore-media-redaction",
                        title: _.intl.string(_.t["16/3Bi"]),
                        component: bu,
                        orientation: "vertical",
                    },
                ],
                [],
            ),
            n = f.useCallback((e) => {
                A_.A.setSection(q.nc_.CONTENT_AND_SOCIAL, e);
            }, []);
        return (0, x.jsxs)(fX.h, {
            children: [
                (0, x.jsx)(fX._, {
                    header: _.intl.string(_.t["Hj/But"]),
                    description: _.intl.format(_.t.dliU4j, { learnMoreLink: to.A.getArticleURL(e) }),
                }),
                (0, x.jsx)(bc.A, { tabs: t, onTabChange: n, orientation: "vertical", tabsClassName: bg.v }),
            ],
        });
    },
    useSearchTerms: () => [
        _.intl.string(_.t["Hj/But"]),
        _.intl.string(_.t["N/oRI+"]),
        _.intl.string(_.t.QVdYsK),
        _.intl.string(_.t["aWD+tu"]),
        _.intl.string(_.t["5mnTa7"]),
        _.intl.string(_.t["K0OWP+"]),
    ],
});
var bm = n(639555),
    bh = n(617641),
    bA = n(546140),
    bp = n(406935),
    bE = n(594061);
let bT = (0, d.zD)(u.X.CONTENT_AND_SOCIAL_DM_SAFETY_ALERTS_SETTING, {
    useTitle: () => _.intl.string(_.t.qFsx5q),
    useSubtitle: () => _.intl.format(_.t.lunaRv, { learnMoreLink: to.A.getArticleURL(q.MVz.SAFETY_ALERTS) }),
    useValue: bA.L,
    setValue: (e) =>
        bE.wc.updateAsync(
            "privacy",
            (t) => {
                t.inappropriateConversationWarnings = bp._t.create({ value: e });
            },
            bE.Sb.INFREQUENT_USER_ACTION,
        ),
    usePredicate: function () {
        let e = (0, bh.Lc)({ location: "DMSafetyAlertsSetting" }),
            t = (0, bm.Rv)({ location: "DMSafetyAlertsSetting" }),
            n = (0, ba.A)() ?? !0;
        return e && !n && !t;
    },
});
var bS = n(809505),
    bx = n(923457),
    bf = n(656402);
let bb = (0, d.Qx)(u.X.CONTENT_AND_SOCIAL_DM_SPAM_SETTING, {
        useTitle: () => _.intl.string(_.t.tiCXaH),
        useSubtitle: () => _.intl.format(_.t.RvjRRI, { appealLink: to.A.getArticleURL(q.MVz.SAFE_DIRECT_MESSAGING) }),
        useValue: function () {
            let e = g.he.useSetting(),
                t = g.cj.useSetting(),
                n = (0, R.bG)([t3.default], () => t3.default.getCurrentUser()),
                i = (0, T$.yv)(bx.p.SPAM_FILTERS);
            return e !== b.he.DEFAULT_UNSET
                ? e
                : n?.nsfwAllowed === !1 && i
                  ? b.he.FRIENDS_AND_NON_FRIENDS
                  : (bf.xY.get(t) ?? b.he.NON_FRIENDS);
        },
        setValue: (e) => g.he.updateSetting(e),
        useOptions: function () {
            return f.useMemo(() => (0, bS.YS)(), []);
        },
        useSearchTerms: () => [_.intl.string(_.t.JzaP4h), _.intl.string(_.t.H9XOl3), _.intl.string(_.t.k4W40P)],
    }),
    bN = (0, d.zZ)(u.X.CONTENT_AND_SOCIAL_CONTENT_CATEGORY, {
        useTitle: () => _.intl.string(_.t.xVRG4P),
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
                d = f7(),
                u =
                    ((e = (0, xc.Z)()),
                    (t = (0, f1.WX)()),
                    (n = f.useCallback(() => {
                        window.open(to.A.getArticleURL(t), "_blank"),
                            (0, f2.N)(f5.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, f5.YX.LEARN_MORE);
                    }, [t])),
                    (i = f.useCallback(() => {
                        (0, f2.N)(f5.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, f5.YX.VIEWED);
                    }, [])),
                    f.useMemo(() => {
                        if (e)
                            return {
                                type: eb.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: i,
                                useText: () =>
                                    _.intl.format(_.t.EUo0yj, {
                                        hook: (e, t) => (0, x.jsx)(dT.Anchor, { onClick: n, children: e }, t),
                                    }),
                            };
                    }, [n, e, i])),
                c =
                    ((l = (0, T$.SJ)()),
                    (s = (0, TJ.b8)()),
                    (a = l && !s),
                    (r = f.useCallback(() => {
                        T8.A.showAgeVerificationGetStartedModal({ entryPoint: T4.q1.CONTENT_AND_SOCIAL_NOTICE }),
                            (0, f2.N)(f5.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, f5.YX.LEARN_MORE);
                    }, [])),
                    (o = f.useCallback(() => {
                        (0, f2.N)(f5.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, f5.YX.VIEWED);
                    }, [])),
                    f.useMemo(() => {
                        if (a)
                            return {
                                type: eb.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: o,
                                useText: () =>
                                    _.intl.format(_.t.OX4ybh, {
                                        hook: (e, t) => (0, x.jsx)(dT.Anchor, { onClick: r, children: e }, t),
                                    }),
                            };
                    }, [r, a, o])),
                g = f8();
            return d ?? g ?? c ?? u;
        },
        buildLayout: () => [b_, bb, bT, bn, bi],
    }),
    bC = (0, d.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_EVERYONE_SETTING, {
        useTitle: () => _.intl.string(_.t["7x9dyE"]),
        useValue: () => {
            let e = g.FA.useSetting();
            return f.useMemo(() => (0, aE.Lx)(e), [e]).all;
        },
        setValue: (e) => {
            g.FA.updateSetting(e ? q.yKI : q.yKI & ~q.dzt.NO_RELATION);
        },
        useDisabled: () => (0, f9.uM)(),
    });
var bI = n(665260);
let bv = (0, d.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_FRIENDS_SETTING, {
        useTitle: () => _.intl.string(_.t.NfeuZ3),
        useValue: () => {
            let e = g.FA.useSetting(),
                t = f.useMemo(() => (0, aE.Lx)(e), [e]);
            return t.all || t.mutualFriends;
        },
        setValue: (e) => {
            let t = g.FA.getSetting();
            g.FA.updateSetting(e ? bI.UI(t, q.dzt.MUTUAL_FRIENDS) : bI.iE(t, q.dzt.MUTUAL_FRIENDS, q.dzt.NO_RELATION));
        },
        useDisabled: () => (0, f9.uM)(),
    }),
    by = (0, d.zD)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_GUILDS_SETTING, {
        useTitle: () => _.intl.string(_.t.qsMfsH),
        useValue: () => {
            let e = g.FA.useSetting(),
                t = f.useMemo(() => (0, aE.Lx)(e), [e]);
            return t.all || t.mutualGuilds;
        },
        setValue: (e) => {
            let t = g.FA.getSetting();
            g.FA.updateSetting(e ? bI.UI(t, q.dzt.MUTUAL_GUILDS) : bI.iE(t, q.dzt.MUTUAL_GUILDS, q.dzt.NO_RELATION));
        },
        useDisabled: () => (0, f9.uM)(),
    }),
    bj = (0, d.zZ)(u.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => _.intl.string(_.t.MNaVwq),
        useInlineNotice: f7,
        buildLayout: () => [bC, bv, by],
    });
var bO = n(994500),
    bR = n(428678),
    bL = n(49229),
    bD = n(730134),
    bG = n(741304);
function bP(e) {
    let { listType: t, numberOfUsers: n } = e,
        i = "blocked" === t;
    return (0, x.jsxs)("div", {
        className: bG.wx,
        children: [
            (0, x.jsx)("div", { className: bG.zc, children: i ? (0, x.jsx)(bR.K, {}) : (0, x.jsx)(ng.G, {}) }),
            (0, x.jsxs)("div", {
                className: bG.Qq,
                children: [
                    (0, x.jsx)(V.E, {
                        variant: "text-md/semibold",
                        color: "interactive-text-active",
                        children: _.intl.string(i ? _.t.PFOUKW : _.t["93ZDWE"]),
                    }),
                    (0, x.jsx)(V.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: i
                            ? _.intl.format(_.t["r91W/h"], { numberOfBlockedUsers: n })
                            : _.intl.format(_.t.rXUeOl, { numberOfIgnoredUsers: n }),
                    }),
                ],
            }),
        ],
    });
}
function bM(e) {
    let { userId: t, last: n } = e,
        i = (0, R.bG)([bO.A], () => bO.A.isBlocked(t)),
        l = (0, R.bG)([t3.default], () => t3.default.getUser(t)),
        [s, a] = f.useState(!1),
        r = f.useCallback(() => {
            a(!0),
                i
                    ? bL.A.unblockUser(t).catch(() => {
                          a(!1);
                      })
                    : bL.A.unignoreUser(t, ek.A.USER_SETTINGS).catch(() => {
                          a(!1);
                      });
        }, [i, t]);
    return null == l
        ? null
        : (0, x.jsxs)("div", {
              className: eB()(bG.nM, { [bG.fW]: n }),
              children: [
                  (0, x.jsxs)("div", {
                      className: bG.eF,
                      children: [
                          (0, x.jsx)(bD.A, { user: l, size: nH._3.SIZE_40 }),
                          (0, x.jsxs)("div", {
                              className: bG.Qq,
                              children: [
                                  (0, x.jsx)(V.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: l.globalName ?? l.username,
                                  }),
                                  (0, x.jsx)(V.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: null != l.globalName ? l.username : null,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, x.jsx)(eA.$, {
                      variant: "secondary",
                      text: _.intl.string(i ? _.t.XyHpKH : _.t["8wXU9B"]),
                      onClick: r,
                      loading: s,
                  }),
              ],
          });
}
function bU(e) {
    let { userIds: t, listType: n } = e,
        [i, l] = f.useState(5);
    return (0, x.jsx)(fX.h, {
        children: (0, x.jsxs)("div", {
            className: bG.Nr,
            children: [
                (0, x.jsx)(bP, { listType: n, numberOfUsers: t.length }),
                (0, x.jsx)("div", {
                    className: bG.jS,
                    children: t.slice(0, i).map((e, n) => (0, x.jsx)(bM, { userId: e, last: n === t.length - 1 }, e)),
                }),
                i < t.length
                    ? (0, x.jsx)("div", {
                          className: bG.vM,
                          children: (0, x.jsx)(k.D, {
                              onClick: () => {
                                  l((e) => e + 5);
                              },
                              className: bG.Qf,
                              children: (0, x.jsx)(V.E, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: _.intl.format(_.t.jULEDr, {
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
let bk = (0, d.E2)(u.X.CONTENT_AND_SOCIAL_BLOCKED_USERS, {
        useSearchTerms: () => [_.intl.string(_.t.PFOUKW)],
        usePredicate: () => (0, R.bG)([bO.A], () => bO.A.getBlockedIDs().length > 0),
        Component: function () {
            let e = (0, R.yK)([bO.A], () => bO.A.getBlockedIDs());
            return (0, x.jsx)(bU, { userIds: e, listType: "blocked" });
        },
    }),
    bV = (0, d.E2)(u.X.CONTENT_AND_SOCIAL_IGNORED_USERS, {
        useSearchTerms: () => [_.intl.string(_.t["93ZDWE"])],
        usePredicate: () => (0, R.bG)([bO.A], () => bO.A.getIgnoredIDs().length > 0),
        Component: function () {
            let e = (0, R.yK)([bO.A], () => bO.A.getIgnoredIDs());
            return (0, x.jsx)(bU, { userIds: e, listType: "ignored" });
        },
    }),
    bw = (0, d.zZ)(u.X.CONTENT_AND_SOCIAL_RESTRICTED_USERS_CATEGORY, {
        useTitle: () => _.intl.string(_.t.LVwR56),
        useSubtitle: () =>
            _.intl.format(_.t["0aNQo9"], { helpArticle: to.A.getArticleURL(q.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE) }),
        buildLayout: () => [bk, bV],
        usePredicate: () => {
            let { hasBlockedUsers: e, hasIgnoredUsers: t } = (0, R.cf)([bO.A], () => ({
                hasBlockedUsers: bO.A.getBlockedIDs().length > 0,
                hasIgnoredUsers: bO.A.getIgnoredIDs().length > 0,
            }));
            return t || e;
        },
    });
var bB = n(612025),
    bF = n(112469),
    bz = n(111159),
    bX = n(152056),
    bY = n(321880);
let bH = { label: () => _.intl.string(_.t["32u1Dx"]), value: bB.YG };
var bK = n(542457);
let bW = () => (0, bF.Tx)() !== bB.YG;
function bZ() {
    return _.intl.string(_.t["T+nevN"]);
}
let bQ = (0, d.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_JOIN_SETTING, {
        useTitle: bZ,
        useSubtitle: () =>
            _.intl.format(_.t.jXKQCu, { helpdeskArticle: to.A.getArticleURL(q.MVz.ACTIVITY_STATUS_SETTINGS) }),
        useValue: () => {
            let e = (0, bF.Tx)();
            return !g.pE.useSetting().includes(e);
        },
        setValue: (e) => {
            let t = bB.xk.getState().selectedGuildId,
                n = (0, aE.CN)();
            e ? n.delete(t) : n.add(t),
                g.pE.updateSetting([...n]),
                Y.default.track(q.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                    action: bK.m.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
                    ingress: iy.bf.USER_SETTINGS_PRIVACY_SAFETY,
                    guild_id: t,
                });
        },
        usePredicate: bW,
    }),
    bq = () => (0, bF.Tx)() !== bB.YG;
function bJ() {
    return _.intl.string(m.default.WhdCGP);
}
let b$ = (0, d.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_SHARE_SETTING, {
    useTitle: bJ,
    useSubtitle: () => _.intl.string(m.default.UQ9RHJ),
    useValue: () => {
        let e = (0, bF.Tx)();
        return !g.JG.useSetting().includes(e);
    },
    setValue: (e) => {
        let t = bB.xk.getState().selectedGuildId,
            n = (0, aE.Kk)();
        e ? n.delete(t) : n.add(t),
            g.JG.updateSetting([...n]),
            Y.default.track(q.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                action: bK.m.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
                ingress: iy.bf.USER_SETTINGS_PRIVACY_SAFETY,
                guild_id: t,
            });
    },
    usePredicate: bq,
});
var b0 = n(762183),
    b1 = n(445176),
    b2 = n(137675);
let b5 = () => ((0, b1.e)() ? _.intl.string(_.t.PMsfcH) : _.intl.string(_.t.RAQUSN)),
    b3 = (e, t) => {
        Y.default.track(q.HAw.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t,
        });
    },
    b8 = (0, d.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_DMS_SETTING, {
        useTitle: b5,
        useSubtitle: () => {
            let e = (0, bF.Tx)(),
                t = (0, bF.q9)(),
                n = (0, b1.e)();
            return e === bB.YG
                ? n
                    ? _.intl.string(_.t.XXGmuB)
                    : _.intl.string(_.t.wbYDfT)
                : t
                  ? _.intl.string(_.t.V0ka0Q)
                  : n
                    ? _.intl.string(_.t.F9WY3f)
                    : _.intl.string(_.t.G7c3Xo);
        },
        useValue: () => {
            let e = (0, bF.Tx)(),
                t = g.$s.useSetting().includes(e),
                n = (0, b0.K)();
            return e === bB.YG ? !n : !t;
        },
        useDisabled: () => {
            let e = (0, f9.uM)();
            return (0, bF.Tx)() === bB.YG && e;
        },
        setValue: (e) => {
            let t = bB.xk.getState().selectedGuildId;
            if (t === bB.YG) {
                var n;
                (n = !e),
                    (0, b2.O)({
                        header: _.intl.string(_.t["uUr+GR"]),
                        body: _.intl.string(_.t.hjGJBp),
                        confirmText: _.intl.string(_.t.gm1Vej),
                        cancelText: _.intl.string(_.t.p89ACt),
                        confirmButtonColor: rp.$n.Colors.BRAND,
                        onConfirm: () => {
                            g.n6.updateSetting(n), b3(n, !1);
                        },
                        onCancel: () => {
                            g.n6.updateSetting(n), g.$s.updateSetting(n ? K.A.getGuildIds() : []), b3(n, !0);
                        },
                    });
            } else {
                let n = (0, aE.Tb)();
                e ? n.delete(t) : n.add(t),
                    g.$s.updateSetting(Array.from(n)),
                    Y.default.track(q.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: bK.m.DIRECT_MESSAGES_TOGGLE,
                        ingress: iy.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    });
            }
        },
    });
var b4 = n(152076);
let b9 = (e, t) => {
    Y.default.track(q.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
        default_guilds_restricted: e,
        applied_to_existing_guilds: t,
    });
};
function b7() {
    return _.intl.string(_.t["3o2ojh"]);
}
let b6 = (0, d.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: b7,
        useSubtitle: () =>
            (0, bF.q9)()
                ? _.intl.format(_.t.WpnWLc, { helpdeskArticle: to.A.getArticleURL(q.MVz.MESSAGE_REQUESTS) })
                : _.intl.format(_.t.wkm9a3, { helpdeskArticle: to.A.getArticleURL(q.MVz.MESSAGE_REQUESTS) }),
        useValue: () => {
            let e = (0, bF.Tx)(),
                t = (0, b0.K)(),
                n = g.$s.useSetting().includes(e),
                i = g.YX.useSetting(),
                l = g.Zr.useSetting().includes(e);
            return e === bB.YG ? !t && !i : !n && !l;
        },
        useDisabled: () => {
            let e = (0, bF.Tx)(),
                t = (0, f9.uM)(),
                n = (0, b0.K)(),
                i = g.$s.useSetting().includes(e);
            return e === bB.YG ? n || t : i;
        },
        setValue: (e) => {
            let t = bB.xk.getState().selectedGuildId;
            if (!e && (0, b4.w)())
                return void T8.A.showAgeVerificationGetStartedModal({ entryPoint: T4.q1.MESSAGE_REQUESTS_SETTINGS });
            if (t === bB.YG) {
                var n;
                (n = !e),
                    (0, b2.O)({
                        header: _.intl.string(_.t.yAfu1p),
                        body: _.intl.string(_.t.Ry2z74),
                        confirmText: _.intl.string(_.t.gm1Vej),
                        cancelText: _.intl.string(_.t.p89ACt),
                        confirmButtonColor: rp.$n.Colors.BRAND,
                        onConfirm: () => {
                            g.YX.updateSetting(n), b9(n, !1);
                        },
                        onCancel: () => {
                            g.YX.updateSetting(n), g.Zr.updateSetting(n ? K.A.getGuildIds() : []), b9(n, !0);
                        },
                    });
            } else {
                let n = (0, aE.xo)();
                e ? n.delete(t) : n.add(t),
                    g.Zr.updateSetting(Array.from(n)),
                    Y.default.track(q.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: bK.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: iy.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    });
            }
        },
    }),
    Ne = (0, d.E2)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_GUILD_SELECTOR, {
        useSearchTerms: function () {
            let e = [b5(), b7()],
                t = bJ();
            bq() && e.push(t);
            let n = bZ();
            return bW() && e.push(n), e;
        },
        Component: function () {
            let { selectedGuildId: e, setSelectedGuildId: t } = (0, bB.xk)(),
                n = (0, R.bG)([W.Ay], () => W.Ay.getFlattenedGuildIds()),
                i = (0, R.bG)([K.A], () => K.A.getGuilds()),
                l = n[0];
            f.useEffect(
                () =>
                    bX.A.subscribe(
                        (e) => {
                            let { query: t } = e;
                            return t.trim();
                        },
                        (e, n) => {
                            let i = bB.xk.getState().selectedGuildId;
                            "" === n && "" !== e && i === bB.YG && null != l
                                ? t(l)
                                : "" === e && i !== bB.YG && t(bB.YG);
                        },
                        { equalityFn: (e, t) => e === t },
                    ),
                [l, t],
            );
            let s = f.useMemo(() => {
                let e = [];
                return (
                    e.push({
                        ...bH,
                        id: bH.value,
                        label: bH.label(),
                        leading: (0, x.jsx)("div", {
                            className: bY.KP,
                            children: (0, x.jsx)(bz.p, {
                                size: "sm",
                                color: "white",
                                "aria-hidden": !0,
                                className: bY.cl,
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
                                leading: (0, x.jsx)(c6.Ay, {
                                    className: bY.cl,
                                    guild: n,
                                    size: c6.Ay.Sizes.SMALLER,
                                    active: !0,
                                }),
                            });
                    }),
                    e
                );
            }, [n, i]);
            return (0, x.jsx)(nO.Z, {
                selectionMode: "single",
                onSelectionChange: (e) => {
                    t(e);
                },
                value: e,
                options: s,
            });
        },
    }),
    Nt = (0, d.zZ)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_CATEGORY, {
        useTitle: () => _.intl.string(_.t.eYaT7L),
        useInlineNotice: function () {
            let e = f7(),
                t = f8();
            if ((0, bF.Tx)() === bB.YG) return e ?? t;
        },
        buildLayout: () => [Ne, b8, b6, b$, bQ],
    }),
    Nn = (0, d.dT)(u.X.CONTENT_AND_SOCIAL_MAIN_TAB, {
        getTitle: () => _.intl.string(_.t["/7xJCF"]),
        buildLayout: () => [bN, Nt, bj, bw],
    }),
    Ni = (0, d.dT)(u.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_TAB, {
        initialize: () => {
            xj.A.fetch();
        },
        getTitle: () => _.intl.string(_.t.YpCiMt),
        buildLayout: () => [f$],
    }),
    Nl = (0, d.t_)(u.X.CONTENT_AND_SOCIAL_PANEL, {
        useTitle: () => _.intl.string(_.t["+o1pDZ"]),
        buildLayout: () => [Nn, Ni],
    }),
    Ns = (0, d.i4)(u.X.CONTENT_AND_SOCIAL_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(_.t["+o1pDZ"]),
        icon: cC.i,
        buildLayout: () => [Nl],
    });
var Na = n(254138),
    Nr = n(157559),
    No = n(975648),
    Nd = n(837245);
let Nu = (0, d.E2)(u.X.DATA_HARVEST_REQUEST_SETTING, {
        useSearchTerms: () => [_.intl.string(_.t.dmBSKo)],
        Component: function () {
            let e = (0, R.bG)([t3.default], () => t3.default.getCurrentUser()),
                { currentHarvestType: t, awaitingInitialRequest: i } = (0, R.cf)([No.A], () => ({
                    currentHarvestType: No.A.harvestType,
                    awaitingInitialRequest: No.A.requestingHarvest,
                })),
                [l, s] = f.useState(!1);
            if (null == e) return null;
            let a = (0, aE.Oj)(t, e) || i,
                r = null != t && aC()().diff(aC()(t.created_at), "days") < q.n83,
                o = a && r,
                d = e.isStaff(),
                u = !e.verified;
            return (0, x.jsxs)(fX.h, {
                children: [
                    (0, x.jsx)(fX._, {
                        header: _.intl.string(_.t.XAHCgJ),
                        description: _.intl.format(_.t.P3kNfr, {
                            helpdeskArticle: to.A.getArticleURL(q.MVz.GDPR_REQUEST_DATA),
                        }),
                    }),
                    o
                        ? (0, x.jsx)(er.Z, {
                              className: Nd.N,
                              children: (0, x.jsx)(V.E, {
                                  variant: "text-md/normal",
                                  children: _.intl.format(_.t.RNDlV9, {
                                      date: aC()(t.created_at).add(q.n83, "days").format("MMMM Do YYYY"),
                                  }),
                              }),
                          })
                        : d
                          ? (0, x.jsx)(er.Z, {
                                className: Nd.N,
                                children: (0, x.jsx)(V.E, {
                                    variant: "text-md/normal",
                                    children: _.intl.string(_.t.ZPQLH2),
                                }),
                            })
                          : (0, x.jsxs)(x.Fragment, {
                                children: [
                                    u
                                        ? (0, x.jsx)(er.Z, {
                                              className: Nd.N,
                                              children: (0, x.jsx)(V.E, {
                                                  variant: "text-md/normal",
                                                  children: _.intl.string(_.t.c1f88z),
                                              }),
                                          })
                                        : null,
                                    (0, x.jsx)("div", {
                                        className: Nd.x,
                                        children: (0, x.jsx)(eA.$, {
                                            variant: "primary",
                                            text: _.intl.string(_.t.dmBSKo),
                                            disabled: a,
                                            onClick: () => {
                                                ((e) => {
                                                    let { onConfirm: t } = e;
                                                    (0, N.openModalLazy)(async () => {
                                                        let { default: e } = await n.e("81153").then(n.bind(n, 890904));
                                                        return (n) => (0, x.jsx)(e, { modalProps: n, onConfirm: t });
                                                    });
                                                })({
                                                    onConfirm: (e) => {
                                                        s(!0),
                                                            (0, Ag.$I)(e)
                                                                .then(
                                                                    (e) => (
                                                                        null != e &&
                                                                            null != e.body &&
                                                                            i8.h.dispatch({
                                                                                type: "UPDATE_DATA_HARVEST_TYPE",
                                                                                harvestType: e.body,
                                                                            }),
                                                                        e
                                                                    ),
                                                                )
                                                                .then(
                                                                    (e) => {
                                                                        null != e && null != e.body
                                                                            ? Nr.A.show({
                                                                                  title: _.intl.string(_.t.i2iul5),
                                                                                  body: _.intl.string(_.t["6Nmv4i"]),
                                                                              })
                                                                            : Nr.A.show({
                                                                                  title: _.intl.string(_.t.OjbtDm),
                                                                                  body: _.intl.string(_.t["0F5Jyt"]),
                                                                              });
                                                                    },
                                                                    (e) => {
                                                                        let t =
                                                                            e?.message ||
                                                                            e?.body?.message ||
                                                                            _.intl.string(_.t["0F5Jyt"]);
                                                                        Nr.A.show({
                                                                            title: _.intl.string(_.t.OjbtDm),
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
    Nc = (0, d.zZ)(u.X.DATA_REQUEST_CATEGORY, {
        useTitle: () => _.intl.string(_.t.VjDjpb),
        initialize: () => {
            i8.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_START" }),
                i3.Bo.get({ url: q.Rsh.USER_HARVEST, oldFormErrors: !0, rejectWithError: !1 })
                    .then((e) => {
                        i8.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body });
                    })
                    .catch((e) => {
                        i8.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_FAILURE", error: e });
                    });
        },
        buildLayout: () => [Nu],
    });
var Ng = n(290595),
    N_ = n(153488);
let Nm = (0, d.zD)(u.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING, {
        useTitle: () => _.intl.string(_.t.AGDDkH),
        useSubtitle: () => _.intl.string(_.t["wW9/zQ"]),
        useValue: () => g.Q$.useSetting(),
        setValue: (e) => xV.eQ({ allowVoiceRecording: e }),
    }),
    Nh = (0, d.v_)(u.X.DATA_USAGE_DISCLAIMER_SETTING, {
        useTitle: () => _.intl.string(_.t.D60Gfj),
        useSubtitle: () =>
            _.intl.format(_.t.R5N31P, {
                onClick: () =>
                    (0, ej.openUserSettings)(
                        (0, EX.pC)("DataUsageDisclaimer") ? u.X.ACCOUNT_REMOVAL_CATEGORY : u.X.ACCOUNT_REMOVAL_SETTING,
                    ),
            }),
    }),
    NA = (0, d.zD)(u.X.DATA_USAGE_PERSONALIZATION_SETTING, {
        useTitle: () => _.intl.string(_.t.MNKzyg),
        useSubtitle: () =>
            _.intl.format(_.t["eQL/Mr"], { helpdeskArticle: to.A.getArticleURL(q.MVz.DATA_USED_FOR_RECOMMENDED) }),
        useValue: function () {
            return (0, R.bG)([N_.A], () => N_.A.hasConsented(q.YAq.PERSONALIZATION));
        },
        setValue: function (e) {
            e
                ? (0, Ng.U)([q.YAq.PERSONALIZATION], []).catch(b2.i)
                : (0, b2.O)({
                      header: _.intl.string(_.t["9SNpzv"]),
                      confirmText: _.intl.string(_.t["9g5UGw"]),
                      cancelText: _.intl.string(_.t["+ZLPw9"]),
                      onConfirm: () => {
                          (0, Ng.U)([], [q.YAq.PERSONALIZATION]).catch(b2.i);
                      },
                      body: _.intl.string(_.t.gJvDDh),
                  });
        },
        useDisabled: f9.uM,
    }),
    Np = (0, d.zD)(u.X.DATA_USAGE_QUESTS_3P_SETTING, {
        useTitle: () => _.intl.string(_.t.CyLYKZ),
        useSubtitle: () =>
            _.intl.format(_.t["2QFDU/"], { helpdeskArticle: to.A.getArticleURL(q.MVz.QUESTS_PRIVACY_CONTROLS) }),
        useValue: function () {
            return !g.vf.useSetting();
        },
        setValue: function (e) {
            g.vf.updateSetting(!e);
        },
        useDisabled: function () {
            let e = g.H1.useSetting(),
                t = (0, f9.uM)();
            return e || t;
        },
        useSearchTerms: () => [_.intl.string(_.t.CyLYKZ)],
    }),
    NE = (0, d.zD)(u.X.DATA_USAGE_QUESTS_SETTING, {
        useTitle: () => _.intl.string(_.t.sJYh5t),
        useSubtitle: () =>
            _.intl.format(_.t.cf9mvV, { helpdeskArticle: to.A.getArticleURL(q.MVz.QUESTS_PRIVACY_CONTROLS) }),
        useValue: function () {
            return !g.H1.useSetting();
        },
        setValue: function (e) {
            g.H1.updateSetting(!e);
        },
        useSearchTerms: () => [_.intl.string(_.t.VkS7Yd)],
        useDisabled: f9.uM,
    }),
    NT = (0, d.zD)(u.X.DATA_USAGE_STATISTICS_SETTING, {
        useTitle: () => _.intl.string(_.t.XuADY2),
        useSubtitle: () =>
            _.intl.format(_.t["igTSG/"], { helpdeskArticle: to.A.getArticleURL(q.MVz.DATA_PRIVACY_CONTROLS) }),
        useValue: function () {
            return (0, R.bG)([N_.A], () => N_.A.hasConsented(q.YAq.USAGE_STATISTICS));
        },
        setValue: function (e) {
            e
                ? (0, Ng.U)([q.YAq.USAGE_STATISTICS], []).catch(b2.i)
                : (0, b2.O)({
                      header: _.intl.string(_.t.OdPCbN),
                      body: _.intl.string(_.t.MGWabA),
                      confirmText: _.intl.string(_.t["D3+rU4"]),
                      cancelText: _.intl.string(_.t.kYpG0u),
                      onConfirm: () => (0, Ng.U)([], [q.YAq.USAGE_STATISTICS]).catch(b2.i),
                  });
        },
        useSearchTerms: () => [_.intl.string(_.t.XuADY2)],
        useDisabled: f9.uM,
    }),
    NS = (0, d.zZ)(u.X.DATA_USAGE_CATEGORY, {
        useTitle: () => _.intl.string(_.t.bvw42E),
        useInlineNotice: f7,
        initialize: () => {
            N_.A.fetchedConsents || (0, Ng.Q)();
        },
        buildLayout: () => [NT, NE, Np, NA, Nm, Nh],
    });
function Nx() {
    let e = g.JG.useSetting();
    return (0, R.bG)([W.Ay, K.A], () => {
        let t = new Set(e);
        return W.Ay.getFlattenedGuildIds().filter((e) => null != K.A.getGuild(e) && !t.has(e));
    }, [e]);
}
let Nf = {
        type: eb.wF.STACKED_ICONS,
        useIcons: function () {
            let e = Nx(),
                t = (0, R.bG)(
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
                        frontIcon: { icon: (0, x.jsx)(H.$, { guild: t[0], size: 48 }), shape: eb.NF.SQUIRCLE },
                        backIcon: { icon: (0, x.jsx)(H.$, { guild: t[1], size: 48 }), shape: eb.NF.SQUIRCLE },
                    }
                  : { frontIcon: { icon: (0, x.jsx)(H.$, { guild: t[0], size: 48 }), shape: eb.NF.SQUIRCLE } };
        },
    },
    Nb = (0, d.AK)(u.X.PROFILE_PRIVACY_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: function () {
            let e = Nx();
            if (0 === e.length) return _.intl.format(_.t.QJIJ5p, {});
            let t = K.A.getGuild(e[0]),
                n = t?.name ?? "",
                i = e.length - 1;
            return 0 === i
                ? _.intl.format(_.t["T+8J4A"], { guildName: n })
                : _.intl.format(_.t["3JyODQ"], { guildName: n, count: i });
        },
        useTrailingDecoration: function () {
            return Nf;
        },
        destinationKey: u.X.ACTIVITY_PRIVACY_PANEL,
    }),
    NN = (0, d.gN)(u.X.PROFILE_PRIVACY_RELATED_SETTINGS, { buildLayout: () => [Nb] }),
    NC = (0, d.Qx)(u.X.PROFILE_PRIVACY_SETTING, {
        useTitle: () => _.intl.string(_.t.Qnf32C),
        useOptions: () => [
            { name: _.intl.string(_.t.Boxc8R), desc: _.intl.string(_.t["nLj+nc"]), value: b.KP.FRIENDS_AND_ALL_GUILDS },
            { name: _.intl.string(_.t.YOIKBt), desc: _.intl.string(_.t.y0JZ4s), value: b.KP.FRIENDS_AND_SMALL_GUILDS },
            { name: _.intl.string(_.t.u0nlJv), desc: _.intl.string(_.t["4jnKHu"]), value: b.KP.FRIENDS_ONLY },
        ],
        useValue: g.KP.useSetting,
        setValue: function (e) {
            let t = g.KP.getSetting();
            if ((g.KP.updateSetting(e), !(0, E.W1)("ProfilePrivacySetting"))) return;
            let i = (0, C.gS)(t, e);
            null != i &&
                (0, N.openModalLazy)(async () => {
                    let { default: e } = await n.e("63786").then(n.bind(n, 413201));
                    return (t) =>
                        (0, x.jsx)(e, {
                            ...t,
                            direction: i.direction,
                            affectedGuildIds: i.affectedGuildIds,
                            settingName: i.settingName,
                            mappedActivityValue: i.mappedActivityValue,
                        });
                });
        },
        useSearchTerms: () => [_.intl.string(_.t.Qnf32C)],
    }),
    NI = (0, d.zZ)(u.X.PROFILE_PRIVACY_CATEGORY, {
        usePredicate: () => (0, E.lX)("ProfilePrivacyCategory"),
        useTitle: () => _.intl.string(_.t.ul884f),
        useSubtitle: () => _.intl.string(_.t.J0SFL2),
        buildLayout: () => [NC, NN],
    });
var Nv = n(814278),
    Ny = n(936388),
    Nj = n(714763);
let NO = (0, d.zD)(u.X.PERSISTENT_VERIFICATION_CODES_SETTING, {
    useTitle: () => _.intl.string(_.t["opi/XK"]),
    useSubtitle: () => _.intl.format(_.t["/T+ZlP"], { helpArticle: (0, Nv.Lu)() }),
    useValue: function () {
        return (0, R.bG)([Nj.A], () => Nj.A.getPersistentCodesEnabled());
    },
    setValue: function (e) {
        Ny.A.updatePersistentCodesEnabled(e);
    },
});
var NR = n(787392);
function NL() {
    return (0, R.yK)([NR.A], () => NR.A.getUserIds());
}
var ND = n(803306),
    NG = n(966327),
    NP = n(882129);
function NM(e) {
    let { userId: t, count: n } = e,
        { analyticsLocations: i } = (0, iU.Ay)(),
        l = (0, R.bG)([t3.default], () => t3.default.getUser(t)),
        s = px.Ay.getFormattedName(l),
        a = f.useCallback(() => {
            (0, Nv.kj)(t);
        }, [t]),
        r = f.useCallback(() => (0, AE.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: i }), [t, i]);
    return (
        f.useEffect(() => {
            (0, ND.wz)(t);
        }, [t]),
        (0, x.jsxs)("div", {
            className: NP.uW,
            children: [
                null != l && (0, x.jsx)(NG.A, { className: NP.my, user: l, size: nH._3.SIZE_40 }),
                (0, x.jsxs)("div", {
                    className: NP.Qq,
                    children: [
                        (0, x.jsx)(k.D, {
                            className: NP.Xh,
                            onClick: r,
                            children: (0, x.jsx)(V.E, {
                                variant: "text-md/semibold",
                                color: "interactive-text-active",
                                children: s,
                            }),
                        }),
                        (0, x.jsx)(V.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            children: _.intl.format(_.t["/MBjYF"], { count: n }),
                        }),
                    ],
                }),
                (0, x.jsx)(k.D, { onClick: a, className: NP.Qz, children: (0, x.jsx)(sx.u, { size: "xs" }) }),
            ],
        })
    );
}
function NU(e) {
    let { className: t, userId: n, verification: i, index: l } = e,
        s = (0, Nv.tC)(i.timestamp),
        a = f.useCallback(() => {
            (0, Nv.W0)(n, i.verifiedKey);
        }, [i.verifiedKey, n]);
    return (0, x.jsxs)("div", {
        className: t,
        children: [
            (0, x.jsxs)("div", {
                className: NP.Qq,
                children: [
                    (0, x.jsx)(V.E, {
                        variant: "text-sm/semibold",
                        color: "interactive-text-active",
                        children: _.intl.format(_.t.N4qBBO, { index: l + 1 }),
                    }),
                    (0, x.jsx)(V.E, { variant: "text-sm/medium", color: "text-default", children: s }),
                ],
            }),
            (0, x.jsx)(k.D, {
                className: NP.Kk,
                onClick: a,
                children: (0, x.jsx)(ck.P, { size: "md", color: B.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function Nk(e) {
    let { userId: t } = e,
        n = (0, R.yK)([NR.A], () =>
            eL()(NR.A.getUserVerifiedKeys(t))
                .entries()
                .map((e) => {
                    let [t, n] = e;
                    return { verifiedKey: t, timestamp: n };
                })
                .sortBy((e) => -1 * e.timestamp)
                .value(),
        );
    return (0, x.jsxs)(x.Fragment, {
        children: [
            (0, x.jsx)(NM, { userId: t, count: n.length }),
            n.map((e, i) =>
                (0, x.jsxs)(
                    f.Fragment,
                    {
                        children: [
                            (0, x.jsx)(NU, { className: NP.nM, userId: t, index: i, verification: e }),
                            i !== n.length - 1 && (0, x.jsx)("div", { className: NP.yF }),
                        ],
                    },
                    `${i}-${e.timestamp}`,
                ),
            ),
        ],
    });
}
var NV = n(691263);
let Nw = (0, d.E2)(u.X.USERS_VERIFIED_KEYS_LIST_SETTING, {
        useSearchTerms: () => [_.intl.string(_.t["5b3FNI"])],
        usePredicate: function () {
            let e = NL();
            return null != e && e.length > 0;
        },
        Component: function () {
            let e = NL();
            return (0, x.jsxs)(fX.h, {
                children: [
                    (0, x.jsx)(fX._, {
                        header: _.intl.string(_.t["5b3FNI"]),
                        description: _.intl.format(_.t.jrTSWU, { helpArticle: (0, Nv.dc)() }),
                    }),
                    e.map((e) => (0, x.jsx)("div", { className: NV.A, children: (0, x.jsx)(Nk, { userId: e }) }, e)),
                ],
            });
        },
    }),
    NB = (0, d.zZ)(u.X.VOICE_SECURITY_CATEGORY, {
        useTitle: () => _.intl.string(_.t.xVk85F),
        useInlineNotice: function () {
            return f.useMemo(
                () => ({
                    type: eb.lT.INLINE_NOTICE,
                    noticeType: "info",
                    useText: () => _.intl.format(_.t["/6sFWa"], { helpArticle: (0, Nv.aW)() }),
                }),
                [],
            );
        },
        usePredicate: () => (0, ey.isDesktop)(),
        buildLayout: () => [NO, Nw],
    }),
    NF = (0, d.t_)(u.X.DATA_AND_PRIVACY_PANEL, {
        useTitle: () => _.intl.string(_.t.OAuOHD),
        buildLayout: () => [NS, NI, Nc, NB],
    }),
    Nz = (0, d.i4)(u.X.DATA_AND_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(_.t.OAuOHD),
        icon: Na.m,
        buildLayout: () => [NF],
    });
var NX = n(782603);
let NY = (0, d.Hn)(u.X.MOBILE_NOTIFICATION_DELAY, {
        useTitle: () => _.intl.string(_.t["8rHeOr"]),
        useSubtitle: () => _.intl.string(_.t["eJE6+J"]),
        useValue: g.cU.useSetting,
        setValue: g.cU.updateSetting,
        useOptions: () =>
            eR
                .range(1, 11)
                .map((e) => ({
                    id: e.toString(),
                    value: 60 * e,
                    label: _.intl.formatToPlainString(_.t.iXLF9W, { minutes: e }),
                })),
    }),
    NH = (0, d.zD)(u.X.TEXT_TO_SPEECH_COMMAND, {
        useTitle: () => _.intl.string(_.t["btbS+Z"]),
        useSubtitle: () =>
            _.intl.format(_.t.Q5crhR, { onClick: () => (0, ej.openUserSettings)(u.X.TTS_PLAYBACK_RATE) }),
        useValue: g.on.useSetting,
        setValue: g.on.updateSetting,
    }),
    NK = (0, d.Qx)(u.X.TEXT_TO_SPEECH_NOTIFICATIONS, {
        useTitle: () => _.intl.string(_.t.JZxxGx),
        useSubtitle: () => _.intl.string(_.t.HDLtJl),
        useValue: () => (0, R.bG)([o0.A], () => o0.A.getTTSType()),
        setValue: (e) => o8.default.setTTSType(e),
        useOptions: () => [
            { name: _.intl.string(_.t.B1AGeJ), value: q.aVn.ALL_CHANNELS },
            { name: _.intl.string(_.t.uzZg9e), value: q.aVn.SELECTED_CHANNEL },
            { name: _.intl.string(_.t.DYO5Oi), value: q.aVn.NEVER },
        ],
        usePredicate: () => n4.$j,
    }),
    NW = u.X.NOTIFICATIONS_ADVANCED_ACCORDION,
    NZ = (0, d.bd)(NW, {
        useTitle: (e) => (e ? _.intl.string(_.t.RyimDk) : _.intl.string(_.t.CUICbO)),
        useCollapsedSubtitle: function () {
            return rQ(NW, {
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
        buildLayout: () => [NY, NH, NK],
    }),
    NQ = (0, d.zZ)(u.X.NOTIFICATIONS_ADVANCED_CATEGORY, {
        useTitle: () => _.intl.string(_.t["31DySj"]),
        buildLayout: () => [NZ],
    }),
    Nq = (0, d.zD)(u.X.ENABLE_UNREAD_MESSAGE_BADGE, {
        useTitle: () => _.intl.string(_.t.VH8AIJ),
        useSubtitle: () => _.intl.string(_.t["9K4qwX"]),
        useValue: () => (0, R.bG)([o0.A], () => !o0.A.getDisableUnreadBadge()),
        setValue: (e) => o8.default.setDisableUnreadBadge(!e),
    }),
    NJ = (0, d.zZ)(u.X.NOTIFICATIONS_BADGES_CATEGORY, {
        useTitle: () => _.intl.string(_.t.l6w3Vj),
        buildLayout: () => [Nq],
    });
var N$ = n(100406),
    N0 = n(878460),
    N1 = n(431144);
let N2 = N1.px.map((e) =>
        (0, d.zD)(`${u.X.EMAIL_LIST_ITEM_PREFIX}${e.category}`, {
            useTitle: e.label,
            useSubtitle: e.subLabel,
            useValue: () =>
                ((e) => {
                    let { categories: t } = (0, R.cf)([N0.A], () => N0.A.getEmailSettings());
                    return !!t[e];
                })(e.category),
            setValue: (t) => (0, N$.CA)(e.category, t),
        }),
    ),
    N5 = (0, d.Tf)(u.X.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
        useTitle: () => _.intl.string(_.t.Ra9Pwk),
        useSubtitle: () => _.intl.string(_.t.iYjQ8X),
        useLabel: () => _.intl.string(_.t.KT1pBA),
        useDisabled: () => {
            let { categories: e } = (0, R.cf)([N0.A], () => N0.A.getEmailSettings());
            return N1.Zk.every((t) => !e[t]);
        },
        onClick: () => (0, N$.NI)(),
        useVariant: () => "critical-secondary",
    }),
    N3 = (0, d.zZ)(u.X.NOTIFICATIONS_EMAIL_CATEGORY, {
        useTitle: () => _.intl.string(_.t["w/qqKK"]),
        initialize: function () {
            let { initialized: e } = N0.A.getEmailSettings();
            e || (0, N$.cR)();
        },
        buildLayout: () => [...N2, N5],
    }),
    N8 = (0, d.zD)(u.X.DESKTOP_NOTIFICATIONS, {
        useTitle: () => _.intl.string(_.t["/0WCll"]),
        useSubtitle: () => _.intl.string(_.t.wF9ih3),
        useValue: () => (0, R.bG)([o0.A], () => o0.A.getDesktopType()) !== q.nRU.NEVER,
        setValue: (e) => o8.default.setDesktopType(e ? q.nRU.ALL : q.nRU.NEVER),
    });
var N4 = n(832712),
    N9 = n(543465),
    N7 = n(406535),
    N6 = n(790782);
let Ce = (0, d.zD)(u.X.EXPERIMENTAL_UNREADS, {
    useTitle: () => _.intl.string(_.t["k6m/si"]),
    useSubtitle: () => _.intl.string(_.t.LGynPs),
    useValue: () => (0, R.bG)([N9.Ay], () => N9.Ay.useNewNotifications),
    setValue: function (e) {
        N4.A.setAccountFlag(N7.i.USE_NEW_NOTIFICATIONS, e),
            e ||
                (hv.w.set("turnedOffNewNotifications", !0),
                Y.default.track(q.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: K.A.getGuildsArray().filter(
                        (e) => N9.Ay.resolveGuildUnreadSetting(e) === N6.e.ONLY_MENTIONS,
                    ).length,
                }));
    },
    usePredicate: () =>
        (0, R.bG)(
            [t3.default, N9.Ay],
            () =>
                t3.default.getCurrentUser()?.isStaff() ||
                t3.default.getCurrentUser()?.isStaffPersonal() ||
                N9.Ay.useNewNotifications,
        ),
});
var Ct = n(70730);
let Cn = (0, d.zD)(u.X.FRIEND_ANNIVERSARY_NOTIFICATIONS, {
        useTitle: () => _.intl.string(_.t.NjOMvh),
        usePersistentBadge: () => ({ badgeType: eb.Xi.BETA }),
        useValue: g.oz.useSetting,
        setValue: function (e) {
            g.oz.updateSetting(e),
                Y.default.track(q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: N7.Y.ACCOUNT,
                    friend_anniversary_notifications: e,
                });
        },
        useSearchTerms: () => [_.intl.string(_.t.hi4dSk)],
        usePredicate: () => {
            let { enabled: e, showDmPrompts: t } = Ct.u.getConfig({ location: "FriendAnniversaryNotifications" });
            return e && t;
        },
    }),
    Ci = (0, p.mj)({
        kind: "user",
        name: "2026-03-friend-is-online-v3",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 } },
    }),
    Cl = (0, d.zD)(u.X.FRIEND_ONLINE_NOTIFICATIONS, {
        useTitle: () => _.intl.string(_.t.sQQgFj),
        useValue: g.NR.useSetting,
        setValue: function (e) {
            g.NR.updateSetting(e),
                Y.default.track(q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: N7.Y.ACCOUNT,
                    friend_online_notifications: e,
                });
        },
        usePredicate: () => Ci.useConfig({ location: "FriendOnlineNotifications" }).showSettingsToggle,
    }),
    Cs = (0, p.mj)({
        name: "2026-03-game-update-notification",
        kind: "user",
        defaultConfig: { showToggle: !1 },
        variations: { 0: { showToggle: !1 }, 1: { showToggle: !0 } },
    });
var Ca = n(275007);
let Cr = (0, d.zD)(u.X.GAME_UPDATE_NOTIFICATIONS, {
    useTitle: () => _.intl.string(Ca.default["ZZIP+o"]),
    useValue: g.JV.useSetting,
    setValue: function (e) {
        g.JV.updateSetting(e),
            Y.default.track(q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                update_type: N7.Y.ACCOUNT,
                game_update_notifications: e,
            });
    },
    usePredicate: () => Cs.useConfig({ location: "SettingsRendererConfig" }).showToggle,
});
var Co = n(571524);
let Cd = (0, d.zD)(u.X.GDM_ALL_REACTION_NOTIFICATIONS, {
        useTitle: () => _.intl.string(_.t.nvkXtr),
        useValue: g.c3.useSetting,
        setValue: function (e) {
            g.c3.updateSetting(e),
                Y.default.track(q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: N7.Y.ACCOUNT,
                    gdm_all_reaction_notifications: e,
                });
        },
        usePredicate: function () {
            return (0, Co.h)("GdmAllReactionNotification").showSettingsToggle;
        },
    }),
    Cu = (0, d.zD)(u.X.GO_LIVE_NOTIFICATIONS, {
        useTitle: () => _.intl.string(_.t.FSNIvs),
        useValue: g.Yh.useSetting,
        setValue: function (e) {
            g.Yh.updateSetting(e),
                Y.default.track(q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: N7.Y.ACCOUNT,
                    go_live_notifications: e,
                });
        },
    }),
    Cc = (0, p.mj)({
        kind: "user",
        name: "2026-01-profile-updates-notification",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 0: { showSettingsToggle: !1 }, 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 } },
    }),
    Cg = (0, d.zD)(u.X.PROFILE_UPDATES_NOTIFICATIONS, {
        useTitle: () => _.intl.string(_.t.xBLMhQ),
        useValue: g.T3.useSetting,
        setValue: function (e) {
            g.T3.updateSetting(e),
                Y.default.track(q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: N7.Y.ACCOUNT,
                    profile_updates_notifications: e,
                });
        },
        usePredicate: () => Cc.useConfig({ location: "user_settings.ProfileUpdatesNotifications" }).showSettingsToggle,
    });
var C_ = n(815807);
let Cm = (0, d.Hn)(u.X.REACTION_NOTIFICATIONS, {
        useTitle: () => _.intl.string(_.t.Wxj9Hp),
        useOptions: () => [
            { id: "enabled", label: _.intl.string(_.t["9x/RtT"]), value: b.Tz.NOTIFICATIONS_ENABLED },
            { id: "only_dms", label: _.intl.string(_.t.fJAbQd), value: b.Tz.ONLY_DMS },
            { id: "disabled", label: _.intl.string(_.t["xu+UDU"]), value: b.Tz.NOTIFICATIONS_DISABLED },
        ],
        useValue: g.Zp.useSetting,
        setValue: (e) => (0, C_.n4)(e, g.Zp.getSetting()),
    }),
    Ch = (0, d.zD)(u.X.SERVER_TRENDING_NOTIFICATIONS, {
        useTitle: () => _.intl.string(_.t["k51K1+"]),
        useValue: g.Qr.useSetting,
        setValue: function (e) {
            g.Qr.updateSetting(e),
                Y.default.track(q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: N7.Y.ACCOUNT,
                    server_trending_notifications: e,
                });
        },
        usePredicate: () => !1,
    }),
    CA = (0, p.mj)({
        kind: "user",
        name: "2026-04-upcoming-server-event",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 }, 3: { showSettingsToggle: !0 } },
    }),
    Cp = (0, d.zD)(u.X.UPCOMING_SERVER_EVENT_NOTIFICATIONS, {
        useTitle: () => _.intl.string(_.t.G8NPz6),
        useValue: g.zS.useSetting,
        setValue: function (e) {
            g.zS.updateSetting(e),
                Y.default.track(q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: N7.Y.ACCOUNT,
                    upcoming_server_event_notifications: e,
                });
        },
        usePredicate: () => CA.useConfig({ location: "UpcomingServerEventNotifications" }).showSettingsToggle,
    }),
    CE = (0, d.FW)(u.X.NOTIFICATION_SELECTION_FIELD_SET, {
        variant: "compact",
        useTitle: () => _.intl.string(_.t.FEVRDV),
        buildLayout: () => [Cu, Cn, Cl, Ch, Cp, Cr, Cg, Cm, Cd],
    }),
    CT = (0, d.zD)(u.X.TASK_BAR_FLASHING, {
        useTitle: () => _.intl.string(_.t.xSmFQG),
        useSubtitle: () => _.intl.string(_.t.bd4j4x),
        useValue: () => (0, R.bG)([o0.A], () => o0.A.taskbarFlash),
        setValue: (e) => o8.default.setTaskbarFlash(e),
        usePredicate: () => (0, lt.uF)(),
    }),
    CS = (0, d.zZ)(u.X.NOTIFICATIONS_OVERVIEW_CATEGORY, {
        useTitle: () => _.intl.string(_.t["/dp6yY"]),
        buildLayout: () => [N8, CT, CE, Ce],
    });
var Cx = n(965957),
    Cf = n(312671),
    Cb = n(235079);
let CN = (0, d.zD)(u.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let e = o1.A.useHolidaySoundpack();
        return null == e ? "" : _.intl.format(_.t["E/OyBr"], { soundpack: _.intl.string(e.soundpackLabel) });
    },
    useValue: function () {
        let e = (0, R.bG)([Cf.A], () => Cf.A.getSoundpack()),
            t = o1.A.useHolidaySoundpack();
        return e === t?.soundpack;
    },
    setValue: function (e) {
        let t = o1.A.getHolidaySoundpack();
        tO()(null != t, "predicate should fail if no soundpack is available"), (0, Cx.p)(e ? t : Cb.i.CLASSIC);
    },
    usePredicate: o1.A.useIsEligible,
});
var CC = n(970931);
let CI = {
        useTitle: () => _.intl.string(_.t.jD1qzM),
        sound: "message1",
        useDisabled: CC.kB,
        useDisabledMessage: () => ((0, CC.kB)() ? _.intl.string(_.t.cIRG0s) : void 0),
    },
    Cv = { useTitle: () => _.intl.string(_.t.XBrJT6), sound: "call_ringing" },
    Cy = (0, d.zD)(u.X.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => _.intl.string(_.t.TzjwV9),
        useSubtitle: () => _.intl.format(_.t.OOiGCM, { onClick: () => o7("message3") }),
        useValue: () =>
            (0, R.bG)([o0.A], () => o0.A.getNotifyMessagesInSelectedChannel() && !o0.A.getDisableAllSounds()),
        setValue: (e) => o8.default.setNotifyMessagesInSelectedChannel(e),
        useDisabled: () => (0, R.bG)([o0.A], () => o0.A.getDisableAllSounds()),
    }),
    Cj = (0, d.zD)(u.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => _.intl.string(_.t["2ZhCOd"]),
        useSubtitle: () => _.intl.string(_.t.EAKdPr),
        useValue: () => (0, R.bG)([o0.A], () => o0.A.getDisableAllSounds()),
        setValue: (e) => o8.default.toggleDisableAllSounds(e),
    }),
    CO = (0, d.D1)(u.X.NOTIFICATION_SOUNDS_LIST, {
        initialize: function () {
            return () => {
                o9();
            };
        },
        buildLayout: () => [o6(CI), Cy, o6(Cv), Cj],
    }),
    CR = (0, d.AK)(u.X.NOTIFICATIONS_TO_VOICE_AND_VIDEO_SOUNDS_NAVIGATOR, {
        useSubtitle: () => _.intl.string(_.t["MMy+lm"]),
        useSearchTerms: () => [_.intl.string(_.t["MMy+lm"])],
        destinationKey: u.X.SOUNDS_CATEGORY,
    }),
    CL = (0, d.gN)(u.X.NOTIFICATIONS_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [CR] }),
    CD = (0, d.zZ)(u.X.NOTIFICATIONS_SOUNDS_CATEGORY, {
        useTitle: () => _.intl.string(_.t.LweOYy),
        buildLayout: () => [CN, CO, CL],
    }),
    CG = (0, d.t_)(u.X.NOTIFICATIONS_PANEL, {
        useTitle: () => _.intl.string(_.t.HcoRu0),
        buildLayout: () => [CS, CD, NJ, N3, NQ],
    }),
    CP = (0, d.i4)(u.X.NOTIFICATIONS_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(_.t.HcoRu0),
        icon: NX.X,
        buildLayout: () => [CG],
    }),
    CM = (0, d.WI)(u.X.USER_SECTION, {
        useTitle: () => _.intl.string(_.t.cduTBL),
        buildLayout: () => [
            xv,
            Ns,
            Nz,
            ...((0, EX.pC)("UserSection") ? [] : [xE]),
            xG,
            ...((0, EX.pC)("UserSection") ? [] : [TH]),
            fB,
            CP,
            ft,
        ],
    });
var CU = n(387758),
    Ck = n(271866),
    CV = n(147964),
    Cw = n(867099);
let CB = (0, d.zD)(u.X.APPLICATION_TEST_MODE, {
        useTitle: () => _.intl.string(_.t.erOqlh),
        useSubtitle: () => _.intl.string(_.t["52hMnD"]),
        usePredicate: g.Q_.useSetting,
        useValue: () => (0, R.bG)([CV.A], () => null != CV.A.testModeApplicationId),
        setValue: (e) => {
            e ? (0, N.openModal)((e) => (0, x.jsx)(Cw.A, { ...e })) : Ck.cL();
        },
    }),
    CF = (0, d.zD)(u.X.DEVELOPER_MODE, {
        useTitle: () => _.intl.string(_.t.ObIb1Q),
        useSubtitle: () => _.intl.format(_.t["CY6q/Q"], { apiDocsUrl: q.X7G.API_DOCS }),
        useValue: g.Q_.useSetting,
        setValue: g.Q_.updateSetting,
        usePredicate: () => u9.p5,
    }),
    Cz = (0, d.zZ)(u.X.DEVELOPER_CATEGORY, { buildLayout: () => [CF, CB] }),
    CX = (0, d.t_)(u.X.DEVELOPER_PANEL, { useTitle: () => _.intl.string(_.t["0BRxRp"]), buildLayout: () => [Cz] }),
    CY = (0, d.i4)(u.X.DEVELOPER_SIDEBAR_ITEM, {
        icon: CU.G,
        useTitle: () => _.intl.string(_.t["0BRxRp"]),
        buildLayout: () => [CX],
    });
var CH = n(70688),
    CK = n(830215);
let CW = (0, d.i4)(u.X.LOGOUT_SIDEBAR_ITEM, {
        variant: "destructive",
        useTitle: () => _.intl.string(_.t["2jxGer"]),
        icon: CH.o,
        onClick: () => {
            (0, ln.A)({
                title: _.intl.string(_.t["2jxGer"]),
                subtitle: _.intl.string(_.t.SUnWBB),
                confirmText: _.intl.string(_.t["2jxGer"]),
                onConfirm: () => {
                    CK.A.logout("settings");
                },
            });
        },
        buildLayout: () => [],
    }),
    CZ = (0, d.WI)(u.X.UTILITY_SECTION, { buildLayout: () => [CY, CW].filter(t8.Vq) }),
    CQ = (0, d.Hr)({ buildLayout: () => [Ez, CM, m3, dD, nF, Ac, CZ], analyticsKey: "user_settings" });
