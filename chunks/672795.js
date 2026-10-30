l.d(t, { m: () => n5 });
var n,
    i = l(477900),
    s = l(582128),
    a = l(62617);
function r(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, width: d, height: c, className: o, style: u } = e,
        m = s.useMemo(
            () => (0, a.H)({ width: d, height: c, intrinsicWidth: 288, intrinsicHeight: 192, style: u }),
            [d, c, u],
        );
    return (0, i.jsx)("img", {
        style: m,
        src: "https://cdn.discordapp.com/assets/content/b501ac4c5a78c462100d3870ce7ab50a78ea7d9b2af6b8ee7a08b11bab82fb01.svg",
        className: (0, a.Z)(o),
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
var d = l(593673),
    c = l(661531);
function o(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, width: d, height: c, className: o, style: u } = e,
        m = s.useMemo(
            () => (0, a.H)({ width: d, height: c, intrinsicWidth: 288, intrinsicHeight: 162, style: u }),
            [d, c, u],
        );
    return (0, i.jsx)("img", {
        style: m,
        src: "https://cdn.discordapp.com/assets/content/58e54efe82f33e76cc9388d9907b1684625b43f15aa5bc7f85752f0f3d4e9be7.svg",
        className: (0, a.Z)(o),
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
var u = l(369606),
    m = l(866665),
    x = l(408278),
    f = l(26430),
    g = l(174459),
    h = l(562073),
    p = l(503698),
    j = l.n(p),
    _ = l(289873),
    v = l(738188),
    b = l(834730),
    A = l(331322),
    I = l(297264),
    E = l(105292),
    N = l(448492);
function C() {
    return (0, i.jsx)("div", {
        className: N.w,
        children: (0, i.jsx)(_.y, { type: _.y.Type.SPINNING_CIRCLE, "aria-label": E.intl.string(E.t.ZTNur7) }),
    });
}
function S() {
    return (0, i.jsxs)("div", {
        className: N.w,
        role: "alert",
        children: [
            (0, i.jsx)(v.WarningIcon, { size: "md", color: c.A.colors.ICON_MUTED, "aria-hidden": !0 }),
            (0, i.jsx)(b.E, { variant: "text-sm/normal", color: "text-muted", children: E.intl.string(E.t.F8FvUy) }),
        ],
    });
}
function y(e) {
    let { className: t, illustration: l, title: n, body: s, action: a } = e;
    return (0, i.jsxs)(A.B, {
        className: j()(N.p, t),
        align: "center",
        justify: "center",
        gap: 16,
        padding: { top: 24, right: 16, bottom: 24, left: 16 },
        children: [
            null != l && (0, i.jsx)(l, { alt: "", ariaHidden: !0, width: 160 }),
            (0, i.jsxs)(A.B, {
                align: "center",
                gap: 6,
                children: [
                    (0, i.jsx)(I.D, { variant: "heading-md/semibold", color: "text-default", children: n }),
                    (0, i.jsx)(b.E, { variant: "text-sm/medium", color: "text-subtle", children: s }),
                ],
            }),
            a,
        ],
    });
}
function k(e) {
    let { expanded: t, column: l } = e;
    return t ? "expanded" : 1 === l ? "mini" : "regular";
}
l(754674);
var T = l(441920);
function w(e) {
    let { graphic: t, title: l, subtitle: n, minHeight: a } = e,
        r = s.useMemo(() => (null != a ? { minHeight: `${a}px` } : void 0), [a]);
    return (0, i.jsxs)(A.B, {
        className: T.VH,
        style: r,
        align: "center",
        justify: "center",
        gap: 16,
        padding: { top: 24, right: 16, bottom: 24, left: 16 },
        children: [
            (0, i.jsx)("div", { className: T.fA, children: t }),
            (0, i.jsxs)(A.B, {
                className: T.C,
                align: "center",
                gap: 6,
                children: [
                    (0, i.jsx)(I.D, { variant: "heading-md/semibold", color: "text-default", children: l }),
                    (0, i.jsx)(b.E, { variant: "text-sm/medium", color: "text-subtle", children: n }),
                ],
            }),
        ],
    });
}
var R = l(17928),
    D = l(364522),
    L = l(939249),
    M = l(663417),
    U = l(140735),
    G = l(97808),
    P = l(778712),
    O = l(463930),
    B = l(478016),
    z = l(821609),
    W = l(80682),
    H = l(827827),
    F = l(461213),
    K = l(287809),
    q = l(58703),
    Y = l(848966);
function $(e) {
    let { position: t } = e;
    return (0, i.jsx)("div", { className: "top" === t ? Y.oT : Y.yf });
}
function V(e) {
    let { position: t, children: l } = e;
    return (0, i.jsx)("div", { className: "top" === t ? Y.sU : Y._u, children: l });
}
var Q = l(606072),
    Z = l(663269);
function X(e, t) {
    switch (e) {
        case Q.kG.ACTIVITY_SHARING:
            return {
                body: E.intl.string("popular_games" === t ? Z.default.wyK5KO : Z.default["8y885d"]),
                cta: E.intl.string(Z.default.fMbgeZ),
            };
        case Q.kG.PERSONALIZATION:
            return {
                body: E.intl.string("popular_games" === t ? Z.default.uQOR1j : Z.default.mTARYx),
                cta: E.intl.string(E.t["3/IlR0"]),
            };
        case Q.kG.ALL:
            return { body: E.intl.string(Z.default.hYjG3N), cta: E.intl.string(E.t["3/IlR0"]) };
    }
}
var J = l(775602);
function ee() {
    let [e, t] = s.useState(null),
        [l, n] = s.useState(null),
        [i, a] = s.useState("unknown"),
        r = (0, R.bG)([J.Ay], () => J.Ay.useReducedMotion);
    s.useEffect(() => {
        if (null == e || null == l) return;
        let t = new IntersectionObserver(
            (e) => {
                var t, l;
                let n,
                    i,
                    [s] = e;
                if (s?.rootBounds == null) return;
                let { clippedPx: r, floatTo: d } =
                    ((t = s.boundingClientRect),
                    (n = Math.max(0, (l = s.rootBounds).top - t.top)),
                    { clippedPx: n + (i = Math.max(0, t.bottom - l.bottom)), floatTo: n > i ? "top" : "bottom" });
                a(() => (r <= 1 ? "visible" : d));
            },
            { root: e, threshold: [0, 0.1, 0.5, 0.9, 1] },
        );
        return (t.observe(l), () => t.disconnect());
    }, [e, l]);
    let d = s.useCallback(() => {
        if (null == e || null == l) return;
        let t = e.getBoundingClientRect(),
            n = l.getBoundingClientRect();
        e.scrollTo({ top: e.scrollTop + n.top - t.top - (t.height - n.height) / 2, behavior: r ? "auto" : "smooth" });
    }, [e, l, r]);
    return {
        scrollerRef: t,
        scrollerNode: e,
        userRowRef: n,
        floatingRowPosition: "top" === i || "bottom" === i ? i : null,
        scrollToUserRow: d,
    };
}
var et = l(967144),
    el = l(696451),
    en = l(562153);
function ei(e, t) {
    let { showYouSuffix: l = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        n = (0, R.bG)([K.default], () => K.default.getUser(t), [t]),
        i = (0, R.bG)([el.Ay], () => el.Ay.getMember(e, t), [e, t]),
        s = (0, et.gn)(e, t, i?.colorStrings ?? null),
        a = en.Ay.useName(e, void 0, n);
    return {
        user: n,
        member: i,
        roleColorStrings: s,
        name: a,
        displayName: l ? E.intl.formatToPlainString(Z.default.subXXA, { name: a }) : a,
    };
}
var es = l(587895),
    ea = l(429913),
    er = l(311043),
    ed = l(454908),
    ec = l(403362);
function eo(e, t) {
    return {
        id: e,
        name: E.intl.string(E.t.GIWFlF),
        iconUrl: null,
        coverUrl: null,
        coverFallbackIconUrl: null,
        isLoading: t,
    };
}
function eu(e) {
    let t = (0, ea.A)(e),
        l = (0, R.yK)([es.A], () => e.map((e) => es.A.didFetchingApplicationFail(e))),
        n = s.useMemo(() => t.map((e) => e?.getCanonicalGameId() ?? void 0), [t]),
        i = s.useMemo(() => n.filter(ec.Vq), [n]);
    (0, ed.x)(i);
    let a = (0, R.yK)([er.A], () => n.map((e) => (null != e ? er.A.getGame(e) : void 0))),
        r = (0, R.yK)([er.A], () => n.map((e) => null != e && (er.A.didFetchingFail(e) || er.A.hasNoData(e))));
    return s.useMemo(() => {
        let i = new Map();
        return (
            e.forEach((e, s) => {
                let d = t[s],
                    c = a[s],
                    o = null == d && !l[s],
                    u = null == c && null != n[s] && !r[s];
                null == d || u
                    ? i.set(e, eo(e, o || u))
                    : i.set(e, {
                          id: e,
                          name: c?.name ?? d.name,
                          iconUrl: d.getIconURL(64) ?? null,
                          coverUrl: c?.getCoverURL() ?? null,
                          coverFallbackIconUrl: c?.getIconURL(256) ?? d.getIconURL(256) ?? null,
                          isLoading: !1,
                      });
            }),
            i
        );
    }, [e, t, l, n, a, r]);
}
function em(e, t) {
    return e.get(t) ?? eo(t, !1);
}
function ex(e, t) {
    return t.map((t) => em(e, t));
}
var ef = l(927813),
    eg = l(251812),
    eh = l(518782);
function ep(e) {
    return e.entries.length < 3;
}
function ej(e) {
    return (0, eg.K)(ep(e) ? void 0 : e.stat).name;
}
function e_(e) {
    return ep(e)
        ? "empty_state"
        : !(function (e) {
                if (null == e.day_pt) return !1;
                let t = new Date(e.day_pt).getTime();
                if (Number.isNaN(t)) return !1;
                let l = Math.floor((e.week_start_ts * ef.A.Millis.SECOND) / ef.A.Millis.DAY);
                return Math.floor(t / ef.A.Millis.DAY) === l + 6;
            })(e)
          ? "in_progress"
          : "podium";
}
function ev(e) {
    switch (e) {
        case eh.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            return "hours_played";
        case eh.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return "days_played";
        case eh.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return "unique_games_played";
        default:
            return null;
    }
}
var eb = l(192308);
function eA(e, t, n) {
    (0, eb.openModalLazy)(
        async () => {
            let { default: s } = await Promise.all([
                l.e("120239"),
                l.e("955410"),
                l.e("518264"),
                l.e("5257"),
                l.e("991625"),
                l.e("230029"),
                l.e("488926"),
                l.e("352456"),
                l.e("203112"),
                l.e("762831"),
                l.e("910167"),
                l.e("264236"),
                l.e("110116"),
                l.e("273232"),
                l.e("463095"),
                l.e("240511"),
                l.e("959134"),
                l.e("371482"),
                l.e("610943"),
                l.e("16954"),
                l.e("390213"),
                l.e("944602"),
                l.e("421778"),
                l.e("679019"),
                l.e("210413"),
                l.e("758219"),
            ]).then(l.bind(l, 499334));
            return (l) => (0, i.jsx)(s, { ...l, guildId: e, requirement: t, description: n });
        },
        { modalKey: "guild-space-leaderboard-sharing" },
    );
}
var eI = l(823353);
function eE(e) {
    let { guildId: t, onActivitySharingClick: l } = e,
        { requirement: n } = (0, Q.T4)(t),
        s = null != n ? Z.default.wyIs4o : Z.default["81PK67"];
    return (0, i.jsx)(y, {
        className: eI.w,
        illustration: o,
        title: E.intl.string(Z.default.ULK65a),
        body: E.intl.format(s, { memberCount: 3 }),
        action:
            null != n
                ? (0, i.jsx)(z.$, {
                      variant: "secondary",
                      size: "sm",
                      text: E.intl.string(Z.default.A4ZMJL),
                      onClick: () => {
                          (l(), eA(t, n, E.intl.string(Z.default.PJn0ih)));
                      },
                  })
                : null,
    });
}
let eN =
        "https://cdn.discordapp.com/assets/content/f86a84ce3eb0d44fa03c308be330f508fbcdec9528cd7969c8f7530cdd058898.png",
    eC = `${eN} 1x, https://cdn.discordapp.com/assets/content/61de4c8a747fbce4c3772d27eeffbea00e3f3fbefd2a972d9d25b96d7116f042.png 2x, https://cdn.discordapp.com/assets/content/7e79963a2b009fabcc285dc56b301eb819e63b604739b0a48c8e0044a527a800.png 3x`;
function eS(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, width: d, height: c, className: o, style: u } = e,
        m = s.useMemo(
            () => (0, a.H)({ width: d, height: c, intrinsicWidth: 24, intrinsicHeight: 24, style: u }),
            [d, c, u],
        );
    return (0, i.jsx)("img", {
        style: m,
        src: eN,
        srcSet: eC,
        className: (0, a.Z)(o),
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
let ey =
        "https://cdn.discordapp.com/assets/content/e87b249cc95509b720aae7d01a178fa3b37853797f9ad0b87c93c78934854c1f.png",
    ek = `${ey} 1x, https://cdn.discordapp.com/assets/content/4b18fe6b4c48532112a9ea66da62f20f7690a0de57378da9d92f091eba06f2f5.png 2x, https://cdn.discordapp.com/assets/content/b1f5d190ed2b05b6cefd2d44fc875f383134d87d928e3422de92e5e19378a3ae.png 3x`;
function eT(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, width: d, height: c, className: o, style: u } = e,
        m = s.useMemo(
            () => (0, a.H)({ width: d, height: c, intrinsicWidth: 24, intrinsicHeight: 24, style: u }),
            [d, c, u],
        );
    return (0, i.jsx)("img", {
        style: m,
        src: ey,
        srcSet: ek,
        className: (0, a.Z)(o),
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
var ew = l(846058),
    eR = l(428678),
    eD = l(952270),
    eL = l(402860);
function eM(e) {
    let t = Math.floor(Math.max(e, 0) / ef.A.Seconds.MINUTE),
        l = Math.floor(t / ef.A.Minutes.HOUR),
        n = t % ef.A.Minutes.HOUR;
    return 0 === l
        ? E.intl.formatToPlainString(Z.default.DdzvGL, { minutes: n })
        : E.intl.formatToPlainString(Z.default["6Y8H0A"], { hours: l, minutes: n });
}
function eU(e, t) {
    switch (t) {
        case eh.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return {
                primary: E.intl.formatToPlainString(E.t["k2UNz+"], { days: e.value }),
                secondary: eM(e.time_played_seconds),
            };
        case eh.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return {
                primary: E.intl.formatToPlainString(Z.default.rgpc8E, { count: e.value }),
                secondary: eM(e.time_played_seconds),
            };
        case eh.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            let l, n, i;
            return {
                primary:
                    ((n = Math.floor((l = Math.floor(Math.max(e.value, 0) / ef.A.Millis.MINUTE)) / ef.A.Minutes.HOUR)),
                    (i = l % ef.A.Minutes.HOUR),
                    0 === n
                        ? E.intl.formatToPlainString(Z.default.bgQf2H, { minutes: i })
                        : 0 === i
                          ? E.intl.formatToPlainString(Z.default["D/HToK"], { hours: n })
                          : E.intl.formatToPlainString(Z.default.fvtrHn, { hours: n, minutes: i })),
            };
        default:
            return { primary: "\u2014" };
    }
}
var eG = l(793169),
    eP = l(81466),
    eO = l(406810),
    eB = l(687966),
    ez = l(683063),
    eW = l(573435),
    eH = l(396583),
    eF = l(280450),
    eK = l(994500);
function eq(e, t) {
    let l = t.user_id,
        n = (0, R.bG)([eF.default], () => eF.default.getId() === l, [l]);
    return ei(e, l, { showYouSuffix: n });
}
function eY(e) {
    return (0, R.bG)([eK.A], () => (eK.A.isBlocked(e) ? "blocked" : eK.A.isIgnored(e) ? "ignored" : null), [e]);
}
function e$(e) {
    switch (e) {
        case "blocked":
            return E.intl.string(Z.default.I3YOjC);
        case "ignored":
            return E.intl.string(Z.default.CfMzwe);
    }
}
function eV(e, t) {
    let l = (0, R.bG)([K.default], () => K.default.getCurrentUser()?.id),
        {
            isSharingActivity: n,
            isSharingActivityInGuild: i,
            hasPersonalizationConsent: a,
            hasFetchedConsents: r,
        } = (0, Q.T4)(e),
        d = !n || !i || !a;
    return s.useMemo(() => {
        if (!r) return;
        if (null == t || !d || null == l) return t;
        let e = t.entries.filter((e) => e.user_id !== l);
        return e.length === t.entries.length ? t : { ...t, entries: e.map((e, t) => ({ ...e, rank: t + 1 })) };
    }, [t, d, l, r]);
}
var eQ = l(518477),
    eZ = l(870087);
function eX(e) {
    let {
            guildId: t,
            entry: l,
            stat: n,
            games: a,
            isCurrentUser: r,
            shouldDimForCurrentUser: d,
            isFloating: c = !1,
            rowRef: o,
            onClick: u,
            metricWidth: m,
        } = e,
        x = eq(t, l),
        f = l.application_ids[0],
        g = null != f ? em(a, f) : void 0,
        h = l.user_id,
        p = s.useCallback(() => {
            (u?.(),
                (0, eL.openUserProfileModal)({
                    userId: h,
                    guildId: t,
                    tabSection: eQ.RP.ACTIVITY,
                    scrollTarget: eQ.bk.RECENT_ACTIVITY,
                }));
        }, [u, h, t]);
    return (0, i.jsxs)("div", {
        ref: o,
        "aria-hidden": c,
        inert: c,
        className: j()(eZ.nM, { [eZ.Bh]: r && !c, [eZ.lR]: d }),
        children: [
            (0, i.jsx)(eJ, { guildId: t, entry: l, identity: x, lastPlayedGame: g, onClick: u }),
            (0, i.jsx)(e2, { entry: l, stat: n, width: m, onClick: p }),
            (0, i.jsx)(e9, {
                name: x.name,
                applicationIds: l.application_ids,
                applicationCount: l.application_count,
                games: a,
                onClick: p,
            }),
        ],
    });
}
function eJ(e) {
    let { guildId: t, entry: l, identity: n, lastPlayedGame: s, onClick: a } = e,
        r = eY(l.user_id),
        d = null != r,
        o = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(e0, { rank: l.rank }),
                d
                    ? (0, i.jsx)("span", {
                          className: eZ.gt,
                          children:
                              "blocked" === r
                                  ? (0, i.jsx)(eR.K, { size: "xs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 })
                                  : (0, i.jsx)(eD.EyeSlashIcon, {
                                        size: "xs",
                                        color: c.A.colors.ICON_SUBTLE,
                                        "aria-hidden": !0,
                                    }),
                      })
                    : (0, i.jsx)(G.eu, {
                          size: P._3.SIZE_32,
                          src: n.user?.getAvatarURL(t, (0, P.FT)(P._3.SIZE_32)) ?? void 0,
                          className: eZ.my,
                          "aria-hidden": !0,
                      }),
                (0, i.jsxs)("div", {
                    className: eZ.Dc,
                    children: [
                        (0, i.jsx)(I.D, {
                            variant: "heading-sm/semibold",
                            color: d ? "text-subtle" : "text-default",
                            lineClamp: 1,
                            children:
                                null != r
                                    ? e$(r)
                                    : (0, i.jsx)(O.g, {
                                          name: n.displayName,
                                          colorString: n.member?.colorString ?? null,
                                          colorStrings: n.roleColorStrings,
                                      }),
                        }),
                        !d &&
                            null != s &&
                            (0, i.jsx)(b.E, {
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                lineClamp: 1,
                                children: E.intl.formatToPlainString(Z.default.YuNVPY, { gameName: s.name }),
                            }),
                    ],
                }),
            ],
        }),
        { user: u } = n;
    return null == u
        ? (0, i.jsx)("div", { className: eZ.D_, children: o })
        : (0, i.jsx)(L.D, {
              className: j()(eZ.D_, eZ.FB),
              onClick: () => {
                  (a?.(), (0, eL.openUserProfileModal)({ userId: u.id, guildId: t }));
              },
              children: o,
          });
}
function e0(e) {
    let { rank: t } = e,
        l = E.intl.formatToPlainString(Z.default.I4JiAQ, { rank: t });
    switch (t) {
        case 1:
            return (0, i.jsx)("div", { className: eZ.Tm, children: (0, i.jsx)(eG.t, { alt: l }) });
        case 2:
            return (0, i.jsx)("div", { className: eZ.Tm, children: (0, i.jsx)(eS, { alt: l }) });
        case 3:
            return (0, i.jsx)("div", { className: eZ.Tm, children: (0, i.jsx)(eT, { alt: l }) });
        default:
            return (0, i.jsxs)("div", {
                className: eZ.mH,
                children: [
                    (0, i.jsx)(U.A, { children: l }),
                    (0, i.jsx)(b.E, {
                        variant: "text-sm/semibold",
                        color: "text-muted",
                        "aria-hidden": !0,
                        children: t,
                    }),
                ],
            });
    }
}
function e1(e) {
    let { stat: t } = e;
    switch (t) {
        case eh.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return (0, i.jsx)(eP.CalendarIcon, { size: "xxs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case eh.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            return (0, i.jsx)(eO.ClockIcon, { size: "xxs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case eh.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return (0, i.jsx)(eB.GameControllerIcon, { size: "xxs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        default:
            return null;
    }
}
function e2(e) {
    let { entry: t, stat: l, width: n, onClick: s } = e,
        { primary: a, secondary: r } = eU(t, l);
    return (0, i.jsxs)(L.D, {
        className: eZ.TH,
        style: null != n ? { width: n } : void 0,
        "aria-label": E.intl.string(Z.default.o6mBdl),
        onClick: s,
        children: [
            (0, i.jsxs)("div", {
                className: eZ.bf,
                children: [
                    (0, i.jsx)(e1, { stat: l }),
                    (0, i.jsx)(b.E, { variant: "text-sm/medium", color: "text-subtle", children: a }),
                ],
            }),
            null != r && (0, i.jsx)(b.E, { variant: "text-xs/medium", color: "text-muted", children: r }),
        ],
    });
}
function e3(e) {
    let { game: t, notched: l } = e;
    return (0, i.jsx)("span", {
        className: eZ.rO,
        "aria-hidden": !0,
        children: (0, i.jsx)(eW.Ay, {
            mask: l ? eW.l8[24] : eW.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null != t.iconUrl
                    ? (0, i.jsx)("img", { className: eZ.Gt, src: t.iconUrl, alt: "", "aria-hidden": !0 })
                    : (0, i.jsx)("span", { className: eZ.ct, "aria-hidden": !0 }),
        }),
    });
}
function e6(e, t) {
    let l = e.filter((e) => null != e.iconUrl || e.isLoading).slice(0, t > 3 ? 2 : 3),
        n = Math.max(0, t - l.length);
    return { visibleGames: l, overflowCount: n };
}
function e4(e) {
    let { played: t, totalCount: l } = e,
        { visibleGames: n, overflowCount: s } = e6(t, l);
    return (0, i.jsxs)("div", {
        className: eZ.Nw,
        children: [
            n.map((e, t) => (0, i.jsx)(e3, { game: e, notched: s > 0 || t !== n.length - 1 }, `${e.id}-${t}`)),
            s > 0
                ? (0, i.jsx)("span", {
                      className: eZ.rO,
                      children: (0, i.jsx)(eW.Ay, {
                          mask: eW.Ay.Masks.SQUIRCLE,
                          width: 24,
                          height: 24,
                          children: (0, i.jsx)("div", {
                              className: eZ.p0,
                              children: (0, i.jsx)(b.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-subtle",
                                  children: E.intl.formatToPlainString(Z.default.JiMMEd, { count: s }),
                              }),
                          }),
                      }),
                  })
                : null,
        ],
    });
}
function e8(e) {
    let { played: t, totalCount: l, children: n } = e,
        s = t.filter((e) => null != e.iconUrl || e.isLoading),
        { visibleGames: a, overflowCount: r } = e6(s, s.length),
        d = Math.max(1, a.length + Number(r > 0));
    return (0, i.jsx)(ez.u, {
        body:
            0 === t.length
                ? E.intl.string(Z.default["7CrlYb"])
                : 1 === t.length
                  ? E.intl.formatToPlainString(Z.default.dbNpK0, { firstGame: t[0].name })
                  : 2 === t.length && 2 === l
                    ? E.intl.formatToPlainString(Z.default.tqVg4M, { firstGame: t[0].name, secondGame: t[1].name })
                    : 3 === t.length && 3 === l
                      ? E.intl.formatToPlainString(Z.default["7h8GUv"], {
                            firstGame: t[0].name,
                            secondGame: t[1].name,
                            thirdGame: t[2].name,
                        })
                      : E.intl.formatToPlainString(Z.default.bxcrSz, {
                            firstGame: t[0].name,
                            secondGame: t[1].name,
                            otherCount: l - 2,
                        }),
        asset: s.length > 0 ? (0, i.jsx)(e4, { played: s, totalCount: s.length }) : void 0,
        assetSize: 24 * d - 5 * (d - 1),
        children: n,
    });
}
function e9(e) {
    let { name: t, applicationIds: l, applicationCount: n, games: s, onClick: a } = e,
        r = ex(s, l);
    return (0, i.jsx)("div", {
        className: eZ.ag,
        children: (0, i.jsx)(e8, {
            played: r,
            totalCount: n,
            children: (0, i.jsx)(L.D, {
                className: j()(eZ.Nw, eZ.Dz),
                "aria-label": E.intl.formatToPlainString(Z.default.o6mBdl, { name: t }),
                onClick: a,
                children: (0, i.jsx)(e4, { played: r, totalCount: n }),
            }),
        }),
    });
}
var e5 = l(189043);
function e7(e) {
    let { guildId: t, entries: l, stat: n, games: s, currentUserEntry: a, currentUserPillarRef: r, onClick: d } = e,
        c = {
            1: { column: e5.HC, pillar: e5.P5 },
            2: { column: e5.th, pillar: e5.Vk },
            3: { column: e5.Ou, pillar: e5.el },
        };
    return (0, i.jsx)("div", {
        className: e5.pI,
        role: "list",
        "aria-label": E.intl.string(Z.default.wKXLfQ),
        children: l.map((e, l) =>
            (0, i.jsx)(
                te,
                {
                    guildId: t,
                    entry: e,
                    place: l + 1,
                    columnClassName: c[l + 1].column,
                    pillarClassName: c[l + 1].pillar,
                    stat: n,
                    games: s,
                    isCurrentUser: e === a,
                    currentUserPillarRef: e === a ? r : void 0,
                    onClick: d,
                },
                e.user_id,
            ),
        ),
    });
}
function te(e) {
    let {
            guildId: t,
            entry: l,
            place: n,
            columnClassName: s,
            pillarClassName: a,
            stat: r,
            games: d,
            isCurrentUser: o,
            currentUserPillarRef: u,
            onClick: m,
        } = e,
        x = ex(d, l.application_ids),
        f = eq(t, l),
        g = eY(l.user_id),
        h = null != g,
        { primary: p } = eU(l, r),
        _ = 1 === n ? P._3.SIZE_48 : P._3.SIZE_40,
        v = 1 === n ? ew.b : 2 === n ? eS : eT,
        A = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: e5.R3,
                    children: [
                        h
                            ? (0, i.jsx)("span", {
                                  className: j()(e5.gt, 1 === n && e5.o2),
                                  children:
                                      "blocked" === g
                                          ? (0, i.jsx)(eR.K, {
                                                size: 1 === n ? "md" : "sm",
                                                color: c.A.colors.ICON_SUBTLE,
                                                "aria-hidden": !0,
                                            })
                                          : (0, i.jsx)(eD.EyeSlashIcon, {
                                                size: 1 === n ? "md" : "sm",
                                                color: c.A.colors.ICON_SUBTLE,
                                                "aria-hidden": !0,
                                            }),
                              })
                            : (0, i.jsx)(G.eu, {
                                  size: _,
                                  src: f.user?.getAvatarURL(t, (0, P.FT)(_)) ?? void 0,
                                  "aria-hidden": !0,
                              }),
                        (0, i.jsx)(v, { className: e5.dR, alt: "", ariaHidden: !0 }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: j()(e5.DX, a),
                    children: [
                        (0, i.jsx)(I.D, {
                            variant: "heading-sm/semibold",
                            color: h ? "text-subtle" : "text-default",
                            lineClamp: 1,
                            className: e5.IY,
                            children:
                                null != g
                                    ? e$(g)
                                    : (0, i.jsx)(O.g, {
                                          name: f.displayName,
                                          colorString: f.member?.colorString ?? null,
                                          colorStrings: f.roleColorStrings,
                                      }),
                        }),
                        (0, i.jsx)(e8, {
                            played: x,
                            totalCount: l.application_count,
                            children: (0, i.jsx)(b.E, {
                                variant: "text-xs/medium",
                                color: "text-default",
                                children: p,
                            }),
                        }),
                    ],
                }),
            ],
        }),
        { user: E } = f;
    return (0, i.jsx)("div", {
        className: s,
        role: "listitem",
        ref: o ? u : void 0,
        children:
            null != E
                ? (0, i.jsx)(L.D, {
                      className: e5.fs,
                      onClick: () => {
                          (m?.(), (0, eL.openUserProfileModal)({ userId: E.id, guildId: t }));
                      },
                      children: A,
                  })
                : (0, i.jsx)("div", { className: e5.fs, children: A }),
    });
}
var tt = l(652215),
    tl = l(219047);
function tn(e) {
    let { guildId: t, data: l, inModal: n = !1, column: a, disabled: r = !1 } = e,
        { stat: d, entries: c } = l,
        o = (0, R.bG)([K.default], () => K.default.getCurrentUser()?.id),
        u = s.useMemo(() => c.find((e) => e.user_id === o) ?? null, [c, o]),
        m = s.useMemo(() => {
            let e = c.slice(0, 20);
            return null == u || e.includes(u) ? e : [...e, u];
        }, [c, u]),
        x = s.useMemo(() => Array.from(new Set(m.map((e) => e.user_id))), [m]);
    (0, W.k6)(t, x);
    let f = ev(d),
        h = eu(s.useMemo(() => Array.from(new Set(m.flatMap((e) => e.application_ids))), [m])),
        p = ep(l),
        _ = e_(l),
        v = "podium" === _,
        b = k({ expanded: n, column: a }),
        A = [m[0], m[1], m[2]],
        { scrollerRef: I, scrollerNode: N, userRowRef: S, floatingRowPosition: y, scrollToUserRow: T } = ee(),
        w = (function (e) {
            let [t, l] = s.useState(!1);
            return (
                s.useEffect(() => {
                    if (null == e) return;
                    function t() {
                        l(0 !== e.clientHeight && e.scrollHeight - e.scrollTop - e.clientHeight <= 1);
                    }
                    (t(), e.addEventListener("scroll", t, { passive: !0 }));
                    let n = new ResizeObserver(t);
                    return (
                        n.observe(e),
                        () => {
                            (e.removeEventListener("scroll", t), n.disconnect());
                        }
                    );
                }, [e]),
                t
            );
        })(N),
        M = null == u && null != o,
        U = null != y,
        G = s.useMemo(() => {
            let e = null == u || m.includes(u) ? m : [...m, u];
            return e.length > 0 ? e : m;
        }, [m, u]),
        { metricMeasureRef: P, metricWidth: O } = (function () {
            let [e, t] = s.useState(null),
                [l, n] = s.useState(null);
            return (
                s.useEffect(() => {
                    if (null == e) return;
                    let t = new ResizeObserver((e) => {
                        let [t] = e;
                        null != t && n(Math.ceil(t.borderBoxSize[0]?.inlineSize ?? t.contentRect.width));
                    });
                    return (t.observe(e), () => t.disconnect());
                }, [e]),
                { metricMeasureRef: t, metricWidth: l }
            );
        })(),
        B = (0, i.jsx)("div", {
            ref: P,
            className: tl.V$,
            "aria-hidden": !0,
            children: G.map((e) => (0, i.jsx)(e2, { entry: e, stat: d }, e.user_id)),
        });
    !(function (e) {
        let {
                guildId: t,
                leaderboardLength: l,
                leaderboardState: n,
                leaderboardView: i,
                metric: a,
                isAtEnd: r,
                isEmpty: d,
                disabled: c = !1,
            } = e,
            o = s.useRef(null),
            u = `${t}:${l}:${n}:${i}:${a}`,
            m = s.useCallback(() => {
                o.current !== u &&
                    ((o.current = u),
                    g.default.track(tt.HAw.LEADERBOARD_END_IMPRESSION, {
                        guild_id: t,
                        leaderboard_length: l,
                        leaderboard_state: n,
                        leaderboard_view: i,
                        metric: a,
                    }));
            }, [t, u, l, n, i, a]);
        s.useEffect(() => {
            !c && (d || r) && m();
        }, [c, d, r, m]);
    })({
        guildId: t,
        leaderboardLength: p ? 0 : m.length,
        leaderboardState: _,
        leaderboardView: b,
        metric: f,
        isAtEnd: w,
        isEmpty: p,
        disabled: r,
    });
    let z = s.useCallback(
            (e) => {
                r ||
                    g.default.track(tt.HAw.LEADERBOARD_CLICK, {
                        location: e,
                        guild_id: t,
                        leaderboard_state: _,
                        leaderboard_view: b,
                        metric: f,
                    });
            },
            [t, _, b, f, r],
        ),
        H = s.useCallback(
            (e) => {
                let l = e === u;
                return (0, i.jsx)(
                    eX,
                    {
                        guildId: t,
                        entry: e,
                        stat: d,
                        games: h,
                        isCurrentUser: l,
                        shouldDimForCurrentUser: l && U,
                        rowRef: l ? S : void 0,
                        onClick: () => z("row"),
                        metricWidth: O ?? void 0,
                    },
                    `${e.rank}-${e.user_id}`,
                );
            },
            [U, u, h, t, d, S, z, O],
        );
    return p
        ? (0, i.jsx)("div", {
              className: tl.Cm,
              children: (0, i.jsx)(eE, { guildId: t, onActivitySharingClick: () => z("activity_sharing") }),
          })
        : null == O
          ? (0, i.jsxs)("div", { className: tl.rf, children: [B, (0, i.jsx)(C, {})] })
          : (0, i.jsxs)("div", {
                className: tl.rf,
                children: [
                    B,
                    (0, i.jsxs)("div", {
                        className: tl.SY,
                        children: [
                            (0, i.jsxs)(D.d_, {
                                className: j()(tl.p_, { [tl.zE]: n, [tl.Ng]: M }),
                                ref: I,
                                children: [
                                    v &&
                                        (0, i.jsx)(e7, {
                                            guildId: t,
                                            entries: A,
                                            stat: d,
                                            games: h,
                                            currentUserEntry: u,
                                            currentUserPillarRef: S,
                                            onClick: () => z("podium"),
                                        }),
                                    m.map(H),
                                ],
                            }),
                            (null != u && null != y) || (M && !w)
                                ? (0, i.jsx)($, { position: "top" !== y || M ? "bottom" : "top" })
                                : null,
                            null != u &&
                                null != y &&
                                (0, i.jsx)(V, {
                                    position: y,
                                    children: (0, i.jsx)(L.D, {
                                        className: tl.Po,
                                        "aria-label": E.intl.string(Z.default.d0Z8kd),
                                        onClick: T,
                                        children: (0, i.jsx)(eX, {
                                            guildId: t,
                                            entry: u,
                                            stat: d,
                                            games: h,
                                            isCurrentUser: !0,
                                            shouldDimForCurrentUser: !1,
                                            isFloating: !0,
                                            onClick: () => z("row"),
                                            metricWidth: O ?? void 0,
                                        }),
                                    }),
                                }),
                            M && (0, i.jsx)(ts, { guildId: t, onActivitySharingClick: () => z("activity_sharing") }),
                        ],
                    }),
                    (0, i.jsx)(ti, { computedAt: l.computed_at, inModal: n }),
                ],
            });
}
function ti(e) {
    let { computedAt: t, inModal: l } = e,
        n = (0, i.jsxs)("div", {
            className: tl.z8,
            children: [
                (0, i.jsx)(M.RefreshIcon, { size: "xxs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 }),
                (0, i.jsx)(b.E, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: E.intl.string(Z.default["/nma+a"]),
                }),
            ],
        });
    return null == t
        ? (0, i.jsx)("div", { className: tl.qr, children: n })
        : (0, i.jsx)("div", {
              className: j()(tl.qr, { [tl.zE]: l }),
              tabIndex: 0,
              children: (0, i.jsx)(m.m, {
                  text: E.intl.formatToPlainString(Z.default["1bt50t"], {
                      timestamp: (0, q.mk)(new Date(t)).toLowerCase(),
                  }),
                  position: "bottom",
                  children: n,
              }),
          });
}
function ts(e) {
    let { guildId: t, onActivitySharingClick: l } = e,
        { requirement: n } = (0, Q.T4)(t),
        a = null == n ? null : { requirement: n, ...X(n, "leaderboard") },
        r = (0, R.bG)([F.A], () => F.A.getStatus() === tt.clD.INVISIBLE),
        d = E.intl.string(Z.default.toxuHd),
        o = !1;
    null != a ? (d = a.body) : r && ((d = E.intl.string(Z.default.PTDDhW)), (o = !0));
    let [u] = s.useState(null != a),
        [m] = s.useState(o),
        x = null == a && !o && u,
        f = null == a && !o && m;
    f ? (d = E.intl.string(Z.default.cgRADC)) : x && (d = E.intl.string(Z.default.dqYuni));
    let {
        user: g,
        member: h,
        name: p,
        roleColorStrings: j,
    } = ei(
        t,
        (0, R.bG)([K.default], () => K.default.getCurrentUser()?.id ?? ""),
    );
    return null == g
        ? null
        : (0, i.jsxs)("div", {
              className: tl.Xx,
              children: [
                  (0, i.jsxs)("div", {
                      className: tl.kd,
                      children: [
                          (0, i.jsxs)("div", {
                              className: tl.nk,
                              children: [
                                  (0, i.jsx)(U.A, { children: E.intl.string(Z.default["oHdW+u"]) }),
                                  (0, i.jsx)(b.E, {
                                      variant: "text-sm/semibold",
                                      color: "text-muted",
                                      "aria-hidden": !0,
                                      children: "?",
                                  }),
                              ],
                          }),
                          (0, i.jsx)(G.eu, {
                              size: P._3.SIZE_32,
                              src: g.getAvatarURL(t, (0, P.FT)(P._3.SIZE_32)) ?? void 0,
                              className: tl.SA,
                              "aria-hidden": !0,
                              status: r ? tt.clD.INVISIBLE : void 0,
                          }),
                          (0, i.jsxs)("div", {
                              className: tl.ko,
                              children: [
                                  (0, i.jsx)(I.D, {
                                      variant: "heading-sm/semibold",
                                      color: "text-default",
                                      lineClamp: 1,
                                      children: (0, i.jsx)(O.g, {
                                          name: p,
                                          colorString: h?.colorString ?? null,
                                          colorStrings: j,
                                      }),
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: tl.LF,
                                      children: [
                                          x || f
                                              ? (0, i.jsx)(B.U, {
                                                    size: "xs",
                                                    color: c.A.colors.ICON_FEEDBACK_POSITIVE,
                                                    "aria-hidden": !0,
                                                })
                                              : null,
                                          (0, i.jsx)(b.E, {
                                              variant: "text-xs/medium",
                                              color: "text-subtle",
                                              children: d,
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                      ],
                  }),
                  null != a &&
                      (0, i.jsx)("div", {
                          className: tl.rl,
                          children: (0, i.jsx)(z.$, {
                              variant: "secondary",
                              size: "sm",
                              text: a.cta,
                              onClick: () => {
                                  (l(), eA(t, a.requirement, E.intl.string(Z.default.PJn0ih)));
                              },
                          }),
                      }),
                  o &&
                      (0, i.jsx)(z.$, {
                          variant: "secondary",
                          size: "sm",
                          text: E.intl.string(E.t.fwPurU),
                          onClick: () => {
                              (0, H.A)({ nextStatus: tt.clD.ONLINE, prevStatus: tt.clD.INVISIBLE });
                          },
                      }),
              ],
          });
}
var ta = l(665260),
    tr = l(636537),
    td = l(193249),
    tc = l(683071),
    to = l(825484),
    tu = l(71393),
    tm = l(967198),
    tx = l(49303),
    tf = l(313627);
let tg = tt.ogj.SUPPRESS_GAMING_LEADERBOARD_NOTIFICATIONS;
var th = l(224640),
    tp = l(20742),
    tj = l(253932),
    t_ = l(515746);
function tv(e) {
    let { data: t } = e,
        l = (0, eg.K)(t.stat),
        {
            ended: n,
            endDate: a,
            badgeLabel: r,
        } = (function (e) {
            let t = (e + ef.A.Seconds.WEEK) * ef.A.Millis.SECOND,
                [l, n] = s.useState(() => Date.now()),
                i = t - l,
                a = i <= 0,
                r = i - (Math.ceil(i / ef.A.Millis.DAY) - 1) * ef.A.Millis.DAY;
            return (
                (0, eH.A)(() => n(Date.now()), a ? null : r),
                s.useMemo(
                    () => ({
                        ended: a,
                        endDate: new Date(t),
                        badgeLabel: a
                            ? E.intl.string(Z.default["J8r/7L"])
                            : E.intl.formatToPlainString(Z.default["PuaR+2"], { days: Math.ceil(i / ef.A.Millis.DAY) }),
                    }),
                    [a, t, i],
                )
            );
        })(t.week_start_ts),
        d = tj.PZ.useSetting(),
        c = 2 > (0, q.m_)(a, new Date()) ? (0, q.mk)(a, !1, d).toLowerCase() : (0, q.i$)(a, "L LT", d).toLowerCase(),
        o = n
            ? E.intl.format(Z.default.kG9XmM, { endedAt: c, nextStatName: (0, eg.K)(t.next_stat).name })
            : E.intl.format(Z.default["X+VLqi"], { statQuestion: l.question, endsAt: c });
    return (0, i.jsx)(ez.u, {
        title: l.name,
        body: o,
        position: "top",
        children: (0, i.jsx)("div", {
            className: j()(t_.qS, n ? t_.yM : t_.Qk),
            tabIndex: 0,
            children: (0, i.jsx)(b.E, {
                variant: "text-xs/semibold",
                color: n ? "text-muted" : "text-brand",
                children: r,
            }),
        }),
    });
}
function tb(e) {
    let { onHoverEnd: t, segmentKey: l, enabled: n = !0 } = e,
        [i, a] = s.useState(null),
        r = s.useRef(null),
        d = s.useRef(t),
        c = s.useRef(l),
        o = s.useCallback((e) => {
            let t = r.current;
            if (null == t) return;
            r.current = null;
            let l = Date.now() - t;
            l < 250 || d.current({ duration: Math.round(l) / 1e3, flush: e });
        }, []);
    return (
        s.useEffect(() => {
            (c.current !== l && null != r.current && (o(!1), (r.current = Date.now())),
                (c.current = l),
                (d.current = t));
        }, [l, t, o]),
        s.useEffect(() => {
            if (null != i && n)
                return (
                    i.addEventListener("mouseenter", e),
                    i.addEventListener("mouseleave", t),
                    window.addEventListener("blur", l),
                    document.addEventListener("visibilitychange", s),
                    window.addEventListener("pagehide", a),
                    () => {
                        (i.removeEventListener("mouseenter", e),
                            i.removeEventListener("mouseleave", t),
                            window.removeEventListener("blur", l),
                            document.removeEventListener("visibilitychange", s),
                            window.removeEventListener("pagehide", a),
                            o(!0));
                    }
                );
            function e() {
                r.current = Date.now();
            }
            function t() {
                o(!1);
            }
            function l() {
                o(!1);
            }
            function s() {
                "hidden" === document.visibilityState && o(!0);
            }
            function a() {
                o(!0);
            }
        }, [i, n, o]),
        s.useCallback((e) => {
            a(e);
        }, [])
    );
}
function tA(e) {
    let { guildId: t, data: l, expanded: n, column: i, enabled: a } = e,
        r = s.useCallback(
            (e) => {
                let { duration: s, flush: a } = e;
                null != l &&
                    g.default.track(
                        tt.HAw.LEADERBOARD_HOVER,
                        {
                            guild_id: t,
                            duration: s,
                            leaderboard_state: e_(l),
                            leaderboard_view: k({ expanded: n, column: i }),
                            metric: ev(l.stat),
                        },
                        { flush: a },
                    );
            },
            [t, l, n, i],
        );
    return tb({ onHoverEnd: r, enabled: a });
}
var tI = l(460614);
function tE(e) {
    let { guildId: t, data: l, modalProps: n } = e,
        s = eV(t, l),
        a = tA({ guildId: t, data: s, expanded: !0 });
    return null == s
        ? null
        : (0, i.jsx)(th.d, {
              size: "lg",
              "aria-label": ej(s),
              ...n,
              children: (0, i.jsxs)("div", {
                  ref: a,
                  children: [
                      (0, i.jsxs)("div", {
                          className: tI.wx,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: tI.LD,
                                  children: [
                                      (0, i.jsx)(u.TrophyIcon, {
                                          size: "xs",
                                          color: c.A.colors.ICON_SUBTLE,
                                          "aria-hidden": !0,
                                      }),
                                      (0, i.jsx)(I.D, {
                                          variant: "heading-sm/medium",
                                          className: tI.DD,
                                          children: ej(s),
                                      }),
                                      (0, i.jsx)(tv, { data: s }),
                                  ],
                              }),
                              (0, i.jsx)(tp.s_, {}),
                          ],
                      }),
                      (0, i.jsx)("div", {
                          className: tI.rf,
                          children: (0, i.jsx)(tn, { guildId: t, data: s, inModal: !0 }),
                      }),
                  ],
              }),
          });
}
var tN = l(452027),
    tC = l(103557),
    tS = l(95477),
    ty = l(241326),
    tk = l(2553),
    tT = l(405810),
    tw = l(488428),
    tR = l(776231);
let tD = (0, l(676279).cy)();
function tL(e, t, l) {
    let n = l.startsWith("a_"),
        i = n ? (tD ? "webp" : "gif") : tD ? "webp" : "jpg",
        { CDN_HOST: s, API_ENDPOINT: a } = window.GLOBAL_ENV,
        r = tt.Rsh.GUILD_SPACE_IMAGE_TEXT_WIDGET_IMAGE(e, t, l, i),
        d = null != s ? `https://${s}${r}` : location.protocol + a + r,
        c = { size: (0, tR.kr)(500 * (0, tR.mZ)()) };
    return (
        "jpg" === i && (c.quality = "lossless"), "webp" === i && n && (c.animated = !0), (d += `?${tw.stringify(c)}`)
    );
}
var tM = l(868602),
    tU = l(445187);
function tG(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, width: d, height: c, className: o, style: u } = e,
        m = s.useMemo(
            () => (0, a.H)({ width: d, height: c, intrinsicWidth: 288, intrinsicHeight: 192, style: u }),
            [d, c, u],
        );
    return (0, i.jsx)("img", {
        style: m,
        src: "https://cdn.discordapp.com/assets/content/d561fd91d87017743133e6f7c82388345a8938aa2434a28cc42077d126076514.svg",
        className: (0, a.Z)(o),
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
var tP = l(770178),
    tO = l(104171),
    tB = l(889227),
    tz = l(980707),
    tW = l(477782),
    tH = l(950305),
    tF = l(265872),
    tK = l(966327),
    tq = l(409626),
    tY = l(692969),
    t$ = l(788593),
    tV = l(427262);
l(347661);
var tQ = l(948852),
    tZ = l(365611);
function tX(e) {
    let { guildId: t, applicationId: l, userIds: n, totalUsers: a, gameName: r } = e,
        d = s.useRef(null),
        o = (0, R.yK)([eK.A], () => n.filter((e) => !eK.A.isBlockedOrIgnored(e)).slice(0, 5), [n]),
        u = (0, R.yK)([K.default], () => o.map((e) => K.default.getUser(e)).filter(ec.Vq), [o]),
        m = (0, R.cf)(
            [el.Ay],
            () => {
                let e = {};
                for (let l of u) e[l.id] = el.Ay.getNick(t, l.id) ?? tV.Ay.getName(l);
                return e;
            },
            [t, u],
        ),
        x = Math.max(0, a - u.length),
        f = E.intl.formatToPlainString(Z.default["XaT+x0"], { count: a, gameName: r }),
        g = E.intl.formatToPlainString(E.t.F6iMs4, { count: x }),
        h = s.useCallback(
            (e) => {
                let { closePopout: n } = e;
                return (0, i.jsxs)(tz.W, {
                    navId: `popular-games-players-${l}`,
                    "aria-label": f,
                    onClose: n,
                    onSelect: void 0,
                    children: [
                        u.map((e) =>
                            (0, i.jsx)(
                                tW.Dr,
                                {
                                    id: e.id,
                                    label: m[e.id],
                                    leadingAccessory: {
                                        type: "avatar",
                                        src: e.getAvatarURL(t, (0, P.FT)(P._3.SIZE_24)),
                                    },
                                    iconLeft: () =>
                                        (0, i.jsx)(tK.A, {
                                            user: e,
                                            size: P._3.SIZE_20,
                                            guildId: t,
                                            "aria-hidden": !0,
                                        }),
                                    action: () => (0, eL.openUserProfileModal)({ userId: e.id, guildId: t }),
                                },
                                e.id,
                            ),
                        ),
                        x > 0 ? (0, i.jsx)(tW.Dr, { id: `${l}-overflow`, label: g, disabled: !0 }) : null,
                    ],
                });
            },
            [l, t, f, m, x, g, u],
        ),
        p = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(tH.UserIcon, {
                    size: "custom",
                    width: 14,
                    height: 14,
                    color: c.A.colors.ICON_SUBTLE,
                    "aria-hidden": !0,
                }),
                (0, i.jsx)(b.E, {
                    tag: "span",
                    className: tQ.Rd,
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: a,
                }),
            ],
        });
    return 0 === u.length
        ? (0, i.jsx)("div", { className: tQ.Fk, role: "img", "aria-label": f, children: p })
        : (0, i.jsx)(tF.Y, {
              targetElementRef: d,
              position: "bottom",
              align: "left",
              renderPopout: h,
              children: (e) =>
                  (0, i.jsx)(L.D, { innerRef: d, className: j()(tQ.Fk, tQ.r6), ...e, "aria-label": f, children: p }),
          });
}
function tJ(e) {
    let { guildId: t, entry: l, games: n, onClick: s } = e,
        { name: a, coverUrl: r, coverFallbackIconUrl: d, isLoading: c } = em(n, l.application_id),
        o = (0, tY.A)({
            location: "PopularGamesGameCard",
            applicationId: l.application_id,
            source: tq.GameProfileSources.GuildSpacePopularGames,
            trackEntryPointImpression: !0,
        }),
        u = null != o;
    if (c)
        return (0, i.jsx)("div", {
            className: tQ.Nr,
            role: "listitem",
            children: (0, i.jsx)("div", { className: tZ.mD }),
        });
    let x = (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.m, {
                text: a,
                ariaHidden: !0,
                children: (0, i.jsx)("div", {
                    className: j()(tZ.PY, { [tZ.vk]: u, [tZ.iL]: u && (null != r || null != d) }),
                    children: (0, i.jsx)(t$.R, { imageSrc: r, iconSrc: d, gameName: a }),
                }),
            }),
            (0, i.jsx)(b.E, { variant: "text-sm/semibold", color: "text-default", lineClamp: 1, children: a }),
        ],
    });
    return (0, i.jsxs)("div", {
        className: tQ.Nr,
        role: "listitem",
        children: [
            u
                ? (0, i.jsx)(L.D, {
                      className: j()(tQ.LO, tQ.vk),
                      onClick: () => {
                          (o(), s());
                      },
                      "aria-label": E.intl.formatToPlainString(E.t["8QLQB+"], { gameName: a }),
                      children: x,
                  })
                : (0, i.jsx)("div", { className: tQ.LO, children: x }),
            (0, i.jsx)(tX, {
                guildId: t,
                applicationId: l.application_id,
                userIds: l.user_ids,
                totalUsers: l.total_users,
                gameName: a,
            }),
        ],
    });
}
function t0(e) {
    return 0 === e.games.length || e.total_users < 3;
}
function t1(e) {
    return t0(e) ? "empty_state" : "regular";
}
var t2 = l(305103),
    t3 = l(560328);
function t6(e) {
    let { guildId: t, requirement: l, onClick: n } = e;
    return (0, i.jsx)(y, {
        className: t3.p$,
        illustration: tG,
        title: E.intl.string(Z.default.ULK65a),
        body: E.intl.format(null != l ? Z.default.JDAHQV : Z.default.LeSGal, { memberCount: 3 }),
        action:
            null != l
                ? (0, i.jsx)(z.$, {
                      variant: "secondary",
                      size: "sm",
                      text: E.intl.string(Z.default.A4ZMJL),
                      onClick: () => {
                          (n(), eA(t, l, E.intl.string(Z.default.e7pD5m)));
                      },
                  })
                : null,
    });
}
function t4(e) {
    let { guildId: t, requirement: l, onClick: n } = e,
        s = X(l, "popular_games");
    return (0, i.jsxs)("div", {
        className: t3.UX,
        children: [
            (0, i.jsxs)("div", {
                className: t3.tD,
                children: [
                    (0, i.jsx)(I.D, {
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        lineClamp: 1,
                        children: E.intl.string(t2.default.WhdCGP),
                    }),
                    (0, i.jsx)(b.E, {
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        lineClamp: 2,
                        children: s.body,
                    }),
                ],
            }),
            (0, i.jsx)(z.$, {
                variant: "secondary",
                size: "sm",
                text: s.cta,
                onClick: () => {
                    (n(), eA(t, l, E.intl.string(Z.default.e7pD5m)));
                },
            }),
        ],
    });
}
function t8(e) {
    let { guildId: t, user: l } = e,
        n = en.Ay.useName(t, void 0, l);
    return (0, i.jsx)(m.m, {
        text: n,
        ariaHidden: !0,
        children: (0, i.jsx)("span", {
            role: "img",
            "aria-label": n,
            children: (0, i.jsx)(G.eu, {
                src: l.getAvatarURL(t, (0, P.FT)(P._3.SIZE_24)),
                size: P._3.SIZE_24,
                "aria-hidden": !0,
            }),
        }),
    });
}
function t9(e) {
    let { guildId: t, memberIds: l, totalUsers: n, totalGames: s, isCompact: a } = e,
        r = a ? 2 : 4,
        d = (0, R.yK)(
            [eK.A, K.default],
            () =>
                l
                    .filter((e) => !eK.A.isBlockedOrIgnored(e))
                    .map((e) => K.default.getUser(e))
                    .filter(ec.Vq)
                    .slice(0, r),
            [l, r],
        ),
        c = n - d.length;
    return (0, i.jsxs)("div", {
        className: t3.qr,
        children: [
            (0, i.jsx)(b.E, {
                className: t3.z,
                variant: "text-xs/normal",
                color: "text-muted",
                lineClamp: 1,
                children: E.intl.format(Z.default.ED2GDQ, { memberCount: n, gameCount: s }),
            }),
            d.length > 0 &&
                (0, i.jsx)("div", {
                    className: t3.WM,
                    children: (0, i.jsx)(tO.Ay, {
                        users: d,
                        guildId: t,
                        size: tO.DN.SIZE_24,
                        max: d.length,
                        renderUser: function (e) {
                            return e instanceof tB.A ? (0, i.jsx)(t8, { guildId: t, user: e }) : null;
                        },
                        count: n,
                        hideMoreUsers: c <= 0,
                        renderMoreUsers: () =>
                            (0, i.jsx)("span", {
                                className: t3.ju,
                                children: (0, i.jsx)(b.E, {
                                    tag: "span",
                                    variant: "text-xs/semibold",
                                    color: "text-subtle",
                                    children: E.intl.formatToPlainString(Z.default.G5PLYW, { count: c }),
                                }),
                            }),
                    }),
                }),
        ],
    });
}
function t5(e) {
    let { guildId: t, data: l, title: n, column: a, disabled: r } = e,
        {
            ref: d,
            visibleCount: c,
            isCompact: o,
        } = (function () {
            let e = s.useRef(null),
                [t, l] = s.useState({ visibleCount: 5, isCompact: !1 }),
                n = s.useCallback((e) => {
                    let { width: t } = e.contentRect,
                        n = Math.max(1, Math.min(5, Math.floor((t - 32 + 12) / 108))),
                        i = t < 480;
                    l((e) => (e.visibleCount === n && e.isCompact === i ? e : { visibleCount: n, isCompact: i }));
                }, []);
            return ((0, tP.g)(e, n, [], { fireOnMount: !0 }), { ref: e, ...t });
        })(),
        { requirement: u } = (0, Q.T4)(t),
        m = t0(l),
        x = s.useMemo(() => (m ? [] : l.user_ids), [m, l.user_ids]);
    (0, W.k6)(t, x);
    let f = s.useMemo(() => l.games.map((e) => e.application_id), [l.games]),
        h = eu(f),
        p = s.useMemo(() => f.map((e) => h.get(e)?.coverUrl).find(ec.Vq) ?? null, [h, f]),
        j = s.useMemo(() => ({ "--custom-popular-games-columns": c }), [c]),
        _ = s.useCallback(
            (e) => {
                r ||
                    g.default.track(tt.HAw.POPULAR_GAMES_CLICK, {
                        location: e,
                        guild_id: t,
                        popular_games_state: t1(l),
                        popular_games_view: k({ expanded: !1, column: a }),
                    });
            },
            [r, t, l, a],
        ),
        v = null;
    return (
        (v = m
            ? (0, i.jsx)(t6, { guildId: t, requirement: u, onClick: () => _("activity_sharing") })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsxs)("div", {
                          className: t3.Qs,
                          children: [
                              null != p
                                  ? (0, i.jsx)("div", {
                                        className: t3.G,
                                        children: (0, i.jsx)("img", { className: t3.LZ, src: p, alt: "" }),
                                    })
                                  : null,
                              (0, i.jsx)("div", {
                                  className: t3.ag,
                                  role: "list",
                                  "aria-label": n,
                                  style: j,
                                  children: l.games
                                      .slice(0, c)
                                      .map((e) =>
                                          (0, i.jsx)(
                                              tJ,
                                              { guildId: t, entry: e, games: h, onClick: () => _("game") },
                                              e.application_id,
                                          ),
                                      ),
                              }),
                          ],
                      }),
                      (0, i.jsxs)("div", {
                          className: t3.sQ,
                          children: [
                              null != u &&
                                  (0, i.jsx)(t4, { guildId: t, requirement: u, onClick: () => _("activity_sharing") }),
                              (0, i.jsx)(t9, {
                                  guildId: t,
                                  memberIds: x,
                                  totalUsers: l.total_users,
                                  totalGames: l.total_games,
                                  isCompact: o,
                              }),
                          ],
                      }),
                  ],
              })),
        (0, i.jsx)("div", { className: t3.rf, ref: d, children: v })
    );
}
function t7(e) {
    return e.default_title ?? E.intl.string(Z.default.GZsvDx);
}
var le = l(612324),
    lt = l(650583),
    ll = l(684343);
function ln(e) {
    let { label: t, tabs: l, selectedId: n, panelId: a, getTabId: r, onSelect: d } = e,
        c = s.useCallback((e) => {
            let t,
                l = e.currentTarget,
                n = l.closest('[role="tablist"]');
            if (null == n) return;
            let i = Array.from(n.querySelectorAll('[role="tab"]')),
                s = i.indexOf(l);
            if (-1 !== s && 0 !== i.length) {
                switch (e.key) {
                    case lt.dh.ARROW_RIGHT:
                    case lt.dh.ARROW_DOWN:
                        t = (s + 1) % i.length;
                        break;
                    case lt.dh.ARROW_LEFT:
                    case lt.dh.ARROW_UP:
                        t = (s - 1 + i.length) % i.length;
                        break;
                    case lt.dh.HOME:
                        t = 0;
                        break;
                    case lt.dh.END:
                        t = i.length - 1;
                        break;
                    default:
                        return;
                }
                (e.preventDefault(), i[t]?.focus());
            }
        }, []);
    return (0, i.jsx)("div", {
        className: ll.vR,
        role: "tablist",
        "aria-label": t,
        children: l.map((e) => {
            let t = e.id === n;
            return (0, i.jsx)(
                "button",
                {
                    type: "button",
                    role: "tab",
                    id: r(e.id),
                    className: ll.Mf,
                    "aria-selected": t,
                    "aria-controls": a,
                    tabIndex: t ? 0 : -1,
                    onClick: () => d(e.id),
                    onKeyDown: c,
                    children: (0, i.jsx)(b.E, {
                        className: ll.Pf,
                        tag: "span",
                        variant: "text-xs/medium",
                        color: "none",
                        children: e.label,
                    }),
                },
                e.id,
            );
        }),
    });
}
var li = (((n = {}).TOP_SONGS = "top_songs"), (n.TOP_ARTISTS = "top_artists"), (n.TOP_LISTENERS = "top_listeners"), n);
let ls = ["top_songs", "top_artists", "top_listeners"];
function la(e) {
    return 1 > e.ranked_songs.reduce((e, t) => e + t.plays, 0);
}
function lr(e) {
    return e.top_listeners.length < 2;
}
function ld(e, t) {
    return la(e) || ("top_listeners" === t && lr(e)) ? "empty_state" : "populated";
}
function lc(e) {
    return e ? "compact" : "regular";
}
function lo(e) {
    switch (e) {
        case "top_songs":
            return E.intl.string(Z.default.KgeEtx);
        case "top_artists":
            return E.intl.string(Z.default.RYxWTS);
        case "top_listeners":
            return E.intl.string(Z.default.KO73KB);
    }
}
function lu(e, t) {
    return `popular-music-tab-${e}-${t}`;
}
function lm(e) {
    return `popular-music-panel-${e}`;
}
var lx = l(196765);
let lf = { view: "top_songs", isCompact: !1, canShowEmbed: !1, selectedTrackId: null },
    lg = (0, lx.v)(() => ({ byWidgetId: {} }));
function lh(e, t) {
    lg.setState((l) => {
        let n = l.byWidgetId[e] ?? lf;
        return { byWidgetId: { ...l.byWidgetId, [e]: { ...n, ...t } } };
    });
}
function lp(e) {
    return lg((t) => t.byWidgetId[e]?.view ?? lf.view);
}
function lj(e) {
    return lg((t) => t.byWidgetId[e]?.isCompact ?? lf.isCompact);
}
function l_(e) {
    return lg((t) => t.byWidgetId[e]?.selectedTrackId ?? lf.selectedTrackId);
}
function lv(e) {
    let { guildId: t, data: l, view: n, isCompact: i, location: s } = e;
    g.default.track(tt.HAw.POPULAR_MUSIC_CLICK, {
        location: s,
        guild_id: t,
        popular_music_state: null != l ? ld(l, n) : null,
        popular_music_view: n,
        popular_music_layout: lc(i),
    });
}
function lb(e) {
    let { guildId: t, widgetId: l, data: n } = e,
        i = lp(l),
        a = lj(l);
    return s.useCallback((e) => lv({ guildId: t, data: n, view: i, isCompact: a, location: e }), [t, n, i, a]);
}
function lA(e) {
    let { guildId: t, widgetId: l, data: n, length: i, isAtEnd: a, disabled: r = !1 } = e,
        d = lp(l),
        c = lj(l),
        o = null != n ? ld(n, d) : null,
        u = lc(c),
        m = "empty_state" === o,
        x = s.useRef(null),
        f = `${t}:${i}:${o}:${d}:${u}`,
        h = s.useCallback(() => {
            x.current !== f &&
                ((x.current = f),
                g.default.track(tt.HAw.POPULAR_MUSIC_END_IMPRESSION, {
                    guild_id: t,
                    popular_music_length: m ? 0 : i,
                    popular_music_state: o,
                    popular_music_view: d,
                    popular_music_layout: u,
                }));
        }, [t, f, m, i, o, d, u]);
    s.useEffect(() => {
        !r && null != o && (m || a) && h();
    }, [r, o, m, a, h]);
}
function lI(e) {
    let [t, l] = s.useState(null),
        n = s.useCallback(
            (t) => {
                l((l) => (l?.contentKey === e && l.isAtEnd === t ? l : { contentKey: e, isAtEnd: t }));
            },
            [e],
        );
    return [t?.contentKey === e && t.isAtEnd, n];
}
var lE = l(59652),
    lN = l(991308),
    lC = l(28863),
    lS = l(148166),
    ly = l(427209),
    lk = l(294454),
    lT = l(605810);
function lw(e) {
    let { target: t, tabIndex: n, onClick: s } = e;
    return (0, i.jsx)("div", {
        className: lT.ql,
        children: (0, i.jsx)(m.m, {
            text: E.intl.string(E.t.RDE0Sc),
            ariaHidden: !0,
            children: (0, i.jsx)(x.K, {
                icon: ly.A,
                size: "sm",
                variant: "overlay-secondary",
                tabIndex: n,
                "aria-label": E.intl.string(E.t.Ej3B3Y),
                onClick: () => {
                    (s(),
                        (0, eb.openModalLazy)(
                            async () => {
                                let { default: e } = await Promise.all([
                                    l.e("325522"),
                                    l.e("401317"),
                                    l.e("790340"),
                                    l.e("147119"),
                                    l.e("205035"),
                                    l.e("425292"),
                                    l.e("209994"),
                                    l.e("44141"),
                                    l.e("552653"),
                                    l.e("311580"),
                                    l.e("174554"),
                                    l.e("116815"),
                                    l.e("813057"),
                                    l.e("991625"),
                                    l.e("230029"),
                                    l.e("891089"),
                                    l.e("938512"),
                                    l.e("196063"),
                                    l.e("392028"),
                                    l.e("124054"),
                                    l.e("441674"),
                                    l.e("152862"),
                                    l.e("148326"),
                                    l.e("148729"),
                                    l.e("650195"),
                                    l.e("144909"),
                                    l.e("67702"),
                                    l.e("662387"),
                                    l.e("31544"),
                                    l.e("621820"),
                                    l.e("334168"),
                                    l.e("582012"),
                                    l.e("166336"),
                                    l.e("113658"),
                                    l.e("162182"),
                                    l.e("327545"),
                                    l.e("860640"),
                                    l.e("681801"),
                                    l.e("85427"),
                                    l.e("698584"),
                                    l.e("967850"),
                                    l.e("570385"),
                                    l.e("67909"),
                                    l.e("916885"),
                                    l.e("272804"),
                                    l.e("291329"),
                                    l.e("449933"),
                                    l.e("985236"),
                                    l.e("352456"),
                                    l.e("678906"),
                                    l.e("799357"),
                                    l.e("491899"),
                                    l.e("50466"),
                                    l.e("999272"),
                                    l.e("701406"),
                                    l.e("216112"),
                                    l.e("490514"),
                                    l.e("962953"),
                                    l.e("550929"),
                                    l.e("64769"),
                                    l.e("644013"),
                                    l.e("971156"),
                                    l.e("60002"),
                                    l.e("260009"),
                                    l.e("691398"),
                                    l.e("266201"),
                                    l.e("752704"),
                                    l.e("56606"),
                                    l.e("206516"),
                                    l.e("163466"),
                                    l.e("456398"),
                                    l.e("40791"),
                                    l.e("358404"),
                                    l.e("996907"),
                                    l.e("831130"),
                                    l.e("377989"),
                                    l.e("358931"),
                                    l.e("880150"),
                                    l.e("168248"),
                                    l.e("490743"),
                                    l.e("245420"),
                                    l.e("216870"),
                                    l.e("841136"),
                                    l.e("560338"),
                                    l.e("340363"),
                                    l.e("459086"),
                                    l.e("720210"),
                                    l.e("601152"),
                                    l.e("319714"),
                                    l.e("331249"),
                                    l.e("257472"),
                                    l.e("921611"),
                                    l.e("686889"),
                                    l.e("560570"),
                                    l.e("896691"),
                                    l.e("779367"),
                                    l.e("992956"),
                                    l.e("7452"),
                                    l.e("189423"),
                                    l.e("592000"),
                                    l.e("524434"),
                                    l.e("933947"),
                                    l.e("866475"),
                                    l.e("56347"),
                                    l.e("97430"),
                                    l.e("587618"),
                                    l.e("424199"),
                                    l.e("645499"),
                                    l.e("838540"),
                                    l.e("342551"),
                                    l.e("125729"),
                                    l.e("111057"),
                                    l.e("695765"),
                                    l.e("188941"),
                                    l.e("349619"),
                                    l.e("264236"),
                                    l.e("543039"),
                                    l.e("398125"),
                                    l.e("221825"),
                                    l.e("930758"),
                                    l.e("481647"),
                                    l.e("244560"),
                                    l.e("253729"),
                                    l.e("593600"),
                                    l.e("266900"),
                                    l.e("707826"),
                                    l.e("948804"),
                                    l.e("199999"),
                                    l.e("205596"),
                                    l.e("776602"),
                                    l.e("110116"),
                                    l.e("828111"),
                                    l.e("890027"),
                                    l.e("809915"),
                                    l.e("140402"),
                                    l.e("812310"),
                                    l.e("361626"),
                                    l.e("646506"),
                                    l.e("445124"),
                                    l.e("445421"),
                                    l.e("721690"),
                                    l.e("832823"),
                                    l.e("761935"),
                                    l.e("511527"),
                                    l.e("763070"),
                                    l.e("776195"),
                                    l.e("87306"),
                                    l.e("502018"),
                                    l.e("276863"),
                                    l.e("955184"),
                                    l.e("249366"),
                                    l.e("728633"),
                                    l.e("628439"),
                                    l.e("650576"),
                                    l.e("680922"),
                                    l.e("539620"),
                                    l.e("225990"),
                                    l.e("41402"),
                                    l.e("935715"),
                                    l.e("248329"),
                                    l.e("234236"),
                                    l.e("832817"),
                                    l.e("425544"),
                                    l.e("165595"),
                                    l.e("416143"),
                                    l.e("401590"),
                                    l.e("498215"),
                                    l.e("844695"),
                                    l.e("435474"),
                                    l.e("133902"),
                                    l.e("92124"),
                                    l.e("123353"),
                                    l.e("593176"),
                                    l.e("844780"),
                                    l.e("988077"),
                                    l.e("592028"),
                                    l.e("776750"),
                                    l.e("76705"),
                                    l.e("232551"),
                                    l.e("425906"),
                                    l.e("123216"),
                                    l.e("561216"),
                                    l.e("313681"),
                                    l.e("588940"),
                                    l.e("126298"),
                                    l.e("829177"),
                                    l.e("106943"),
                                    l.e("569918"),
                                    l.e("836545"),
                                    l.e("147786"),
                                    l.e("14962"),
                                    l.e("770291"),
                                    l.e("482861"),
                                    l.e("770697"),
                                    l.e("854461"),
                                    l.e("858514"),
                                    l.e("790244"),
                                    l.e("344265"),
                                    l.e("121435"),
                                    l.e("151502"),
                                    l.e("398793"),
                                    l.e("592731"),
                                    l.e("273232"),
                                    l.e("716092"),
                                    l.e("784041"),
                                    l.e("894747"),
                                    l.e("784103"),
                                    l.e("317225"),
                                    l.e("463095"),
                                    l.e("53374"),
                                    l.e("256616"),
                                    l.e("124060"),
                                    l.e("238412"),
                                    l.e("240511"),
                                    l.e("718573"),
                                    l.e("146566"),
                                    l.e("32661"),
                                    l.e("346102"),
                                    l.e("377766"),
                                    l.e("545587"),
                                    l.e("170653"),
                                    l.e("256255"),
                                    l.e("696123"),
                                    l.e("128534"),
                                    l.e("799657"),
                                    l.e("810034"),
                                    l.e("817852"),
                                    l.e("133179"),
                                    l.e("614784"),
                                    l.e("8563"),
                                    l.e("444376"),
                                    l.e("499941"),
                                    l.e("509793"),
                                    l.e("831145"),
                                    l.e("187856"),
                                    l.e("334127"),
                                    l.e("400954"),
                                    l.e("610449"),
                                    l.e("32781"),
                                    l.e("354121"),
                                    l.e("693832"),
                                    l.e("488990"),
                                    l.e("332470"),
                                    l.e("776545"),
                                    l.e("193158"),
                                    l.e("318546"),
                                    l.e("73500"),
                                    l.e("912773"),
                                    l.e("465129"),
                                    l.e("846523"),
                                    l.e("710638"),
                                    l.e("919307"),
                                    l.e("565617"),
                                    l.e("662355"),
                                    l.e("418943"),
                                    l.e("455924"),
                                    l.e("41991"),
                                    l.e("959134"),
                                    l.e("872648"),
                                    l.e("174347"),
                                    l.e("565065"),
                                    l.e("834386"),
                                    l.e("976148"),
                                    l.e("130674"),
                                    l.e("959669"),
                                    l.e("492022"),
                                    l.e("220518"),
                                    l.e("371482"),
                                    l.e("875842"),
                                    l.e("126780"),
                                    l.e("360781"),
                                    l.e("237834"),
                                    l.e("88160"),
                                    l.e("209518"),
                                    l.e("631825"),
                                    l.e("851243"),
                                    l.e("748015"),
                                    l.e("952577"),
                                    l.e("807771"),
                                    l.e("338516"),
                                    l.e("478476"),
                                    l.e("496715"),
                                    l.e("521570"),
                                    l.e("115754"),
                                    l.e("7942"),
                                    l.e("744385"),
                                    l.e("59413"),
                                    l.e("793394"),
                                    l.e("546745"),
                                    l.e("250478"),
                                    l.e("192440"),
                                    l.e("450048"),
                                    l.e("462276"),
                                    l.e("680986"),
                                    l.e("90373"),
                                    l.e("979630"),
                                    l.e("981237"),
                                    l.e("168177"),
                                    l.e("236946"),
                                    l.e("935948"),
                                    l.e("692639"),
                                    l.e("668099"),
                                    l.e("593020"),
                                    l.e("440963"),
                                    l.e("657003"),
                                    l.e("766031"),
                                    l.e("394317"),
                                    l.e("304329"),
                                    l.e("207960"),
                                    l.e("256831"),
                                ]).then(l.bind(l, 99266));
                                return function (l) {
                                    return (0, i.jsx)(e, { ...l, target: t });
                                };
                            },
                            { stackingBehavior: "stack", modalKey: lk.aU },
                        ));
                },
            }),
        }),
    });
}
var lR = l(272984);
function lD(e) {
    let { artist: t, itemProps: l, cardRef: n, onClick: a, onForwardClick: r } = e,
        d = null != t.artist_image_hash ? lR.RQ.IMAGE(t.artist_image_hash) : null,
        c = s.useMemo(
            () => ({
                kind: "artist",
                shareUrl: lR.RQ.WEB_OPEN(lR.M0.ARTIST, t.artist_external_id),
                title: t.artist_name ?? t.artist_external_id,
                subtitle: null,
                imageUrl: d,
            }),
            [t.artist_external_id, t.artist_name, d],
        ),
        o = s.useMemo(() => lE.V.getDefaultLinkInterceptor(c.shareUrl), [c.shareUrl]),
        u = s.useCallback(
            (e) => {
                (a(), o?.(e));
            },
            [o, a],
        ),
        m = (0, i.jsx)(lS.R, { src: d, isCircular: !0, FallbackIcon: lN.I });
    return null == t.artist_name
        ? (0, i.jsx)("div", {
              className: lT.Nr,
              ref: n,
              children: (0, i.jsx)("div", { ...l, className: lT.MT, children: m }),
          })
        : (0, i.jsxs)("div", {
              className: lT.Nr,
              ref: n,
              children: [
                  (0, i.jsxs)(lC.Anchor, {
                      ...l,
                      className: lT.MT,
                      href: c.shareUrl,
                      useDefaultUnderlineStyles: !1,
                      onClick: u,
                      children: [
                          m,
                          (0, i.jsx)("span", {
                              className: lT.Qq,
                              children: (0, i.jsx)(b.E, {
                                  className: lT.DD,
                                  tag: "span",
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  lineClamp: 2,
                                  children: t.artist_name,
                              }),
                          }),
                      ],
                  }),
                  (0, i.jsx)(lw, { target: c, tabIndex: l.tabIndex, onClick: r }),
              ],
          });
}
var lL = l(872351),
    lM = l(708988),
    lU = l(628137);
let lG = "none",
    lP = (e, t) => (0, i.jsx)(b.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: e }, t);
function lO(e) {
    return e;
}
function lB(e) {
    return e?.direction ?? lG;
}
function lz(e) {
    if (null == e) return null;
    let t = Math.round(Math.abs(e));
    return 0 === t
        ? null
        : { direction: e > 0 ? "up" : "down", label: E.intl.formatToPlainString(Z.default["h+LUpk"], { percent: t }) };
}
function lW(e) {
    return lz(null != e.plays_trend_pct ? 100 * e.plays_trend_pct : null);
}
var lH = l(633099);
function lF(e) {
    let { trend: t } = e,
        l = "up" === t.direction ? lL.z : lM.M;
    return (0, i.jsxs)("span", {
        className: lH.GW,
        children: [
            (0, i.jsx)(l, {
                className: j()({ [lH.$J]: "up" === t.direction, [lH.KW]: "down" === t.direction }),
                size: "xxs",
                color: "currentColor",
                "aria-hidden": !0,
            }),
            (0, i.jsx)(b.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: t.label }),
        ],
    });
}
function lK(e) {
    var t;
    let { guildId: l, song: n } = e,
        a = (0, R.yK)(
            [eK.A],
            () => (n.facepile_user_ids ?? []).filter((e) => !eK.A.isBlockedOrIgnored(e)).slice(0, 3),
            [n.facepile_user_ids],
        );
    (0, W.k6)(l, a);
    let r = (0, R.yK)([K.default], () => a.map((e) => K.default.getUser(e)), [a]),
        d = s.useMemo(() => r.filter((e) => null != e), [r]);
    if (0 === d.length) return null;
    let c = n.unique_listeners - d.length;
    return (0, i.jsx)("span", {
        className: lH.WM,
        role: "group",
        "aria-label":
            ((t = n.unique_listeners),
            E.intl.formatToPlainString(Z.default.AzIhRB, { count: t, trend: lG, countHook: lO })),
        children: (0, i.jsx)(tO.Ay, {
            users: d,
            guildId: l,
            size: tO.DN.SIZE_24,
            max: d.length,
            count: n.unique_listeners,
            hideMoreUsers: c <= 0,
            renderMoreUsers: () =>
                (0, i.jsx)("span", {
                    className: lH.ju,
                    children: (0, i.jsx)(b.E, {
                        tag: "span",
                        variant: "text-sm/semibold",
                        color: "text-subtle",
                        children: E.intl.formatToPlainString(Z.default.bFIg0R, { count: c }),
                    }),
                }),
        }),
    });
}
function lq(e) {
    let { trackExternalId: t } = e,
        [l, n] = s.useState(!1);
    return (0, i.jsxs)("div", {
        className: lH.aF,
        children: [
            (0, i.jsx)(lU.A, {
                resourceType: lR.M0.TRACK,
                resourceId: t,
                onLoad: () => n(!0),
                allowEncryptedMedia: !0,
            }),
            !l && (0, i.jsx)("div", { className: lH.Ls, "aria-hidden": !0 }),
        ],
    });
}
function lY(e) {
    let { isCompact: t, headline: l, detail: n, trend: s } = e;
    return null == l && null == n && null == s
        ? null
        : (0, i.jsx)("div", {
              className: j()(lH.yp, { [lH.Fl]: t }),
              children: (0, i.jsxs)("div", {
                  className: lH.QD,
                  children: [
                      null != l &&
                          (0, i.jsx)(b.E, {
                              tag: "div",
                              variant: "heading-xl/semibold",
                              color: "text-default",
                              children: l,
                          }),
                      (0, i.jsxs)("div", {
                          className: lH._0,
                          children: [
                              null != n &&
                                  (0, i.jsx)(b.E, {
                                      tag: "span",
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: n,
                                  }),
                              null != s && (0, i.jsx)(lF, { trend: s }),
                          ],
                      }),
                  ],
              }),
          });
}
function l$(e) {
    var t;
    let { guildId: l, isCompact: n, canShowEmbed: s, song: a } = e,
        r = lz(a.plays_change_percent);
    return (0, i.jsxs)("div", {
        className: j()(lH.yp, { [lH.Fl]: n }),
        children: [
            s && (0, i.jsx)(lq, { trackExternalId: a.track_external_id }, a.track_external_id),
            (0, i.jsxs)("div", {
                className: j()(lH.QD, lH.rk),
                children: [
                    (0, i.jsx)(lK, { guildId: l, song: a }),
                    (0, i.jsxs)("div", {
                        className: lH._0,
                        children: [
                            (0, i.jsx)(b.E, {
                                tag: "span",
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                children:
                                    ((t = a.plays),
                                    E.intl.format(Z.default["7hHUIS"], { count: t, trend: lB(r), countHook: lP })),
                            }),
                            null != r && (0, i.jsx)(lF, { trend: r }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var lV = l(197935),
    lQ = l(915734);
function lZ(e) {
    let { label: t, items: l, isCompact: n, getItemKey: a, renderItem: r, onScrollEndChange: d } = e,
        [c, o] = s.useState(null),
        u = l.length - 1;
    s.useEffect(() => {
        if (null == c) return;
        let e = new IntersectionObserver(
            (e) => {
                let [t] = e;
                null != t && d(t.intersectionRatio >= 0.99);
            },
            { threshold: [0, 0.99] },
        );
        return (e.observe(c), () => e.disconnect());
    }, [c, d]);
    let m = s.useCallback((e, t, l) => r(e, t, l === u ? o : void 0), [r, u]);
    return (0, i.jsx)("div", {
        className: j()(lQ.Dk, { [lQ.yI]: n }),
        children: (0, i.jsx)(lV.A, {
            items: l,
            getItemKey: a,
            renderItem: m,
            gap: 8,
            edgeFade: 40,
            actionsClassName: lQ.o1,
            "aria-label": t,
        }),
    });
}
var lX = l(742452);
function lJ(e) {
    return e.artist_external_id;
}
function l0(e) {
    let { guildId: t, widgetId: l, isCompact: n, data: a } = e,
        [r, d] = lI(a.ranked_artists.length),
        c = lb({ guildId: t, widgetId: l, data: a });
    lA({ guildId: t, widgetId: l, data: a, length: a.ranked_artists.length, isAtEnd: r });
    let o = s.useCallback(() => c("artist"), [c]),
        u = s.useCallback(() => c("forward"), [c]),
        m = s.useCallback(
            (e, t, l) => (0, i.jsx)(lD, { artist: e, itemProps: t, cardRef: l, onClick: o, onForwardClick: u }),
            [o, u],
        );
    if (0 === a.ranked_artists.length) return null;
    let x = lW(a);
    return (0, i.jsxs)("div", {
        className: lX.U,
        children: [
            (0, i.jsx)(lZ, {
                label: lo(li.TOP_ARTISTS),
                items: a.ranked_artists,
                isCompact: n,
                getItemKey: lJ,
                renderItem: m,
                onScrollEndChange: d,
            }),
            (0, i.jsx)(lY, {
                isCompact: n,
                headline:
                    a.distinct_songs < 1
                        ? null
                        : E.intl.formatToPlainString(Z.default.W8etVA, { count: a.distinct_songs }),
                detail:
                    a.distinct_listeners < 1 || a.distinct_artists < 1
                        ? null
                        : E.intl.format(Z.default.yGqf0D, {
                              memberCount: a.distinct_listeners,
                              artistCount: a.distinct_artists,
                              trend: lB(x),
                              memberCountHook: lP,
                              artistCountHook: lP,
                          }),
                trend: x,
            }),
        ],
    });
}
var l1 = l(803613),
    l2 = l(682348),
    l3 = l(73152),
    l6 = l(280911);
function l4(e) {
    let { guildId: t, isCompact: l } = e,
        n = (0, R.bG)([K.default], () => K.default.getCurrentUser()),
        s = (0, R.bG)([el.Ay], () => (null != n ? el.Ay.getMember(t, n.id) : null)),
        a = (0, et.gn)(t, n?.id, s?.colorStrings ?? null),
        r = en.Ay.useName(t, void 0, n);
    return (0, i.jsxs)("div", {
        className: l6.D_,
        children: [
            (0, i.jsxs)("div", {
                className: l6.FI,
                "aria-hidden": !0,
                children: [
                    !l &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("span", { className: l6.eu, children: (0, i.jsx)(l1.D, { size: "sm" }) }),
                                (0, i.jsxs)("span", {
                                    className: l6.r$,
                                    children: [
                                        (0, i.jsx)("span", { className: l6.Om }),
                                        (0, i.jsx)("span", { className: l6.Om }),
                                        (0, i.jsx)("span", { className: l6.Om }),
                                    ],
                                }),
                            ],
                        }),
                    (0, i.jsx)(G.eu, {
                        size: P._3.SIZE_32,
                        src: n?.getAvatarURL(t, (0, P.FT)(P._3.SIZE_32)) ?? void 0,
                        "aria-hidden": !0,
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: l6.Qq,
                children: [
                    (0, i.jsx)(I.D, {
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        lineClamp: 1,
                        children: (0, i.jsx)(O.g, {
                            name: E.intl.formatToPlainString(Z.default.subXXA, { name: r }),
                            colorString: s?.colorString ?? null,
                            colorStrings: a,
                        }),
                    }),
                    (0, i.jsx)(b.E, {
                        variant: "text-xs/medium",
                        color: "text-strong",
                        lineClamp: l ? 2 : 1,
                        children: E.intl.string(Z.default.y1neEe),
                    }),
                ],
            }),
        ],
    });
}
function l8(e) {
    let { widgetName: t, isCompact: l } = e;
    return (0, i.jsxs)("div", {
        className: l6.D_,
        children: [
            !l &&
                (0, i.jsx)("span", {
                    className: l6.eu,
                    "aria-hidden": !0,
                    children: (0, i.jsx)(l2._, { size: "sm", color: c.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
                }),
            (0, i.jsxs)("div", {
                className: l6.Qq,
                children: [
                    (0, i.jsx)(I.D, {
                        variant: "heading-sm/semibold",
                        color: "text-strong",
                        lineClamp: 1,
                        children: E.intl.string(t2.default.WhdCGP),
                    }),
                    (0, i.jsx)(b.E, {
                        variant: "text-xs/medium",
                        color: "text-strong",
                        lineClamp: l ? 2 : 1,
                        children: E.intl.formatToPlainString(Z.default["49Jv0I"], { widgetName: t }),
                    }),
                ],
            }),
        ],
    });
}
function l9(e) {
    let { guildId: t, widgetName: n, isCompact: s, isSpotifyConnected: a, onClick: r } = e;
    return (0, i.jsxs)("div", {
        className: l6.UX,
        children: [
            a ? (0, i.jsx)(l8, { widgetName: n, isCompact: s }) : (0, i.jsx)(l4, { guildId: t, isCompact: s }),
            (0, i.jsx)(z.$, {
                variant: "secondary",
                size: "sm",
                icon: a ? void 0 : l3.E,
                text: a ? E.intl.string(E.t.KY0ilj) : E.intl.string(Z.default.jB1fWC),
                onClick: () => {
                    (r(),
                        (0, eb.openModalLazy)(
                            async () => {
                                let { default: e } = await Promise.all([
                                    l.e("120239"),
                                    l.e("955410"),
                                    l.e("518264"),
                                    l.e("5257"),
                                    l.e("991625"),
                                    l.e("230029"),
                                    l.e("488926"),
                                    l.e("352456"),
                                    l.e("203112"),
                                    l.e("13566"),
                                    l.e("910167"),
                                    l.e("264236"),
                                    l.e("110116"),
                                    l.e("273232"),
                                    l.e("463095"),
                                    l.e("240511"),
                                    l.e("959134"),
                                    l.e("371482"),
                                    l.e("610943"),
                                    l.e("16954"),
                                    l.e("390213"),
                                    l.e("944602"),
                                    l.e("421778"),
                                    l.e("679019"),
                                    l.e("210413"),
                                    l.e("32820"),
                                ]).then(l.bind(l, 70111));
                                return (l) => (0, i.jsx)(e, { ...l, guildId: t, widgetName: n });
                            },
                            { modalKey: "guild-space-popular-music-contribution" },
                        ));
                },
            }),
        ],
    });
}
function l5(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, width: d, height: c, className: o, style: u } = e,
        m = s.useMemo(
            () => (0, a.H)({ width: d, height: c, intrinsicWidth: 288, intrinsicHeight: 162, style: u }),
            [d, c, u],
        );
    return (0, i.jsx)("img", {
        style: m,
        src: "https://cdn.discordapp.com/assets/content/e5cd35ca79f49d81161fc468618bf0291bd91c44fbb5190819cd6dffcf71fef0.svg",
        className: (0, a.Z)(o),
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
var l7 = l(625903),
    ne = l(780964),
    nt = l(766075),
    nl = l(30370),
    nn = l(123894);
function ni(e) {
    let { onSettingsClick: t } = e,
        l = (0, R.bG)([nl.A], () => nl.A.getAccounts().some((e) => e.type === tt.fg2.SPOTIFY && e.showActivity));
    return (0, i.jsx)(y, {
        className: nn.w,
        illustration: l5,
        title: E.intl.string(Z.default.ULK65a),
        body: E.intl.format(l ? Z.default.BLuvck : Z.default["Ko3a0+"], { memberCount: 2 }),
        action: l
            ? null
            : (0, i.jsx)(z.$, {
                  variant: "secondary",
                  size: "sm",
                  icon: l7.SettingsIcon,
                  text: E.intl.string(E.t["3D5yo/"]),
                  onClick: () => {
                      (t(), (0, nt.openUserSettings)(ne.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING));
                  },
              }),
    });
}
function ns() {
    return (0, i.jsx)(y, {
        className: nn.w,
        illustration: l5,
        title: E.intl.string(Z.default.ULK65a),
        body: E.intl.format(Z.default.ZQxU8v, { memberCount: 2 }),
    });
}
var na = l(109487),
    nr = l(279543);
function nd(e) {
    let { isCompact: t } = e;
    return (0, i.jsxs)("div", {
        className: nr.qr,
        children: [
            (0, i.jsxs)("div", {
                className: nr.Os,
                children: [
                    (0, i.jsx)("span", {
                        className: nr.Kk,
                        children: (0, i.jsx)(M.RefreshIcon, {
                            size: "xxs",
                            color: c.A.colors.ICON_SUBTLE,
                            "aria-hidden": !0,
                        }),
                    }),
                    (0, i.jsx)(b.E, {
                        className: nr.Pf,
                        tag: "span",
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: E.intl.string(Z.default["3/DOFo"]),
                    }),
                ],
            }),
            (0, i.jsxs)(lC.Anchor, {
                className: nr.al,
                href: lR.RQ.WEB_HOME,
                "aria-label": E.intl.string(Z.default["jUr+wF"]),
                children: [
                    (0, i.jsx)("span", {
                        className: nr.Kk,
                        children: (0, i.jsx)(na.L, { size: "xs", color: c.A.colors.ICON_STRONG, "aria-hidden": !0 }),
                    }),
                    !t &&
                        (0, i.jsx)(b.E, {
                            className: nr.G2,
                            tag: "span",
                            variant: "text-xs/medium",
                            color: "none",
                            children: E.intl.string(Z.default.ZdPp2q),
                        }),
                ],
            }),
        ],
    });
}
var nc = l(860071),
    no = l(65154),
    nu = l(329177),
    nm = l(242226);
function nx(e) {
    var t;
    let {
            guildId: l,
            userId: n,
            listener: s,
            rank: a,
            isCompact: r,
            isCurrentUser: d,
            shouldDimForCurrentUser: o,
            isFloating: u = !1,
            rowRef: m,
            onClick: x,
        } = e,
        f = ei(l, n, { showYouSuffix: d }),
        { user: g } = f;
    return null == g
        ? null
        : (0, i.jsxs)("div", {
              ref: m,
              "aria-hidden": u,
              inert: u,
              className: j()(nm.nM, { [nm.Bh]: d && !u, [nm.lR]: o }),
              children: [
                  (0, i.jsx)(nf, { guildId: l, user: g, identity: f, rank: a, listener: s, onClick: x }),
                  null != s &&
                      (0, i.jsxs)("div", {
                          className: j()(nm.Mx, { [nm.dA]: r }),
                          children: [
                              (0, i.jsx)(no.S, { size: "xxs", color: c.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                              (0, i.jsx)(b.E, {
                                  variant: "text-sm/medium",
                                  color: "text-strong",
                                  children:
                                      ((t = s.plays), E.intl.formatToPlainString(Z.default["7X+3f8"], { count: t })),
                              }),
                          ],
                      }),
                  null != s && !r && (0, i.jsx)(nj, { artists: s.artists, artistCount: s.artist_count ?? null }),
              ],
          });
}
function nf(e) {
    let { guildId: t, user: l, identity: n, rank: s, listener: a, onClick: r } = e,
        d = (0, R.bG)([eK.A], () => (eK.A.isBlocked(l.id) ? "blocked" : eK.A.isIgnored(l.id) ? "ignored" : null), [
            l.id,
        ]),
        o = null != d;
    return (0, i.jsxs)(L.D, {
        className: nm.D_,
        onClick: () => {
            (r(), (0, eL.openUserProfileModal)({ userId: l.id, guildId: t }));
        },
        children: [
            null != s && (0, i.jsx)(U.A, { children: E.intl.formatToPlainString(Z.default.I4JiAQ, { rank: s }) }),
            (0, i.jsxs)("span", {
                className: nm.R3,
                children: [
                    o
                        ? (0, i.jsx)("span", {
                              className: nm.gt,
                              children:
                                  "blocked" === d
                                      ? (0, i.jsx)(eR.K, {
                                            size: "xs",
                                            color: c.A.colors.ICON_SUBTLE,
                                            "aria-hidden": !0,
                                        })
                                      : (0, i.jsx)(eD.EyeSlashIcon, {
                                            size: "xs",
                                            color: c.A.colors.ICON_SUBTLE,
                                            "aria-hidden": !0,
                                        }),
                          })
                        : (0, i.jsx)(G.eu, {
                              size: P._3.SIZE_32,
                              src: l.getAvatarURL(t, (0, P.FT)(P._3.SIZE_32)) ?? void 0,
                              "aria-hidden": !0,
                          }),
                    1 === s &&
                        (0, i.jsx)("span", {
                            className: nm.ie,
                            "aria-hidden": !0,
                            children: (0, i.jsx)(nu.CrownIcon, { size: "xxs", color: "currentColor" }),
                        }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: nm.Dc,
                children: [
                    (0, i.jsx)(I.D, {
                        variant: "heading-sm/semibold",
                        color: o ? "text-subtle" : "text-default",
                        lineClamp: 1,
                        children:
                            null != d
                                ? (function (e) {
                                      switch (e) {
                                          case "blocked":
                                              return E.intl.string(Z.default.I3YOjC);
                                          case "ignored":
                                              return E.intl.string(Z.default.CfMzwe);
                                      }
                                  })(d)
                                : (0, i.jsx)(O.g, {
                                      name: n.displayName,
                                      colorString: n.member?.colorString ?? null,
                                      colorStrings: n.roleColorStrings,
                                  }),
                    }),
                    !o && (0, i.jsx)(nh, { listener: a }),
                ],
            }),
        ],
    });
}
function ng(e, t) {
    return (0, i.jsx)(b.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: e }, t);
}
function nh(e) {
    let { listener: t } = e,
        l = t?.latest_track_title;
    if (null == l) return null;
    let n = t?.latest_artist_name;
    return (0, i.jsx)(b.E, {
        variant: "text-xs/medium",
        color: "text-subtle",
        lineClamp: 1,
        children:
            null != n
                ? E.intl.format(Z.default.QqaqBg, { trackTitle: l, artistName: n, highlightHook: ng })
                : E.intl.format(Z.default.ZMJ8Mt, { trackTitle: l, highlightHook: ng }),
    });
}
function np(e) {
    let { artist: t, notched: l } = e,
        [n, a] = s.useState(!1),
        r = null != t.artist_image_hash ? lR.RQ.IMAGE(t.artist_image_hash) : null;
    return (0, i.jsx)("span", {
        className: nm.sG,
        children: (0, i.jsx)(eW.Ay, {
            mask: l ? eW.l8[24] : eW.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null == r || n
                    ? (0, i.jsx)("span", {
                          className: nm.Ql,
                          children: (0, i.jsx)(lN.I, { size: "xxs", color: c.A.colors.ICON_SUBTLE }),
                      })
                    : (0, i.jsx)("img", { className: nm.v2, src: r, alt: "", loading: "lazy", onError: () => a(!0) }),
        }),
    });
}
function nj(e) {
    let { artists: t, artistCount: l } = e,
        n = t.slice(0, 3),
        s = (l ?? t.length) - n.length;
    return (0, i.jsx)("div", {
        className: nm.Rh,
        "aria-hidden": !0,
        children:
            n.length > 0 &&
            (0, i.jsxs)("div", {
                className: nm.W$,
                children: [
                    n.map((e, t) =>
                        (0, i.jsx)(
                            np,
                            { artist: e, notched: s > 0 || t !== n.length - 1 },
                            `${e.artist_external_id}-${e.artist_image_hash}`,
                        ),
                    ),
                    s > 0 &&
                        (0, i.jsx)("span", {
                            className: nm.sG,
                            children: (0, i.jsx)(eW.Ay, {
                                mask: eW.Ay.Masks.SQUIRCLE,
                                width: 24,
                                height: 24,
                                children: (0, i.jsx)("div", {
                                    className: nm.ag,
                                    children: (0, i.jsx)(b.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: E.intl.formatToPlainString(Z.default.bFIg0R, { count: s }),
                                    }),
                                }),
                            }),
                        }),
                ],
            }),
    });
}
var n_ = l(897130);
function nv(e) {
    let { guildId: t, widgetId: l, isCompact: n, data: a, shouldHideCurrentUser: r, upsell: d } = e,
        c = a.top_listeners,
        o = (0, R.bG)([K.default], () => K.default.getCurrentUser()?.id),
        u = r ? null : o,
        m = c.findIndex((e) => e.user_id === u),
        x = -1 === m ? null : c[m],
        f = s.useMemo(() => c.map((e) => e.user_id), [c]);
    (0, W.k6)(t, f);
    let g = (0, R.bG)([K.default], () => f.reduce((e, t) => (null != K.default.getUser(t) ? e + 1 : e), 0), [f]),
        h = (0, R.bG)(
            [K.default, nc.A],
            () => f.every((e) => null != K.default.getUser(e) || nc.A.isMemberRequestSettled(t, e)),
            [t, f],
        ),
        { scrollerRef: p, scrollerNode: _, userRowRef: v, floatingRowPosition: b } = ee(),
        A = (function (e, t) {
            let [l, n] = s.useState(null);
            return (
                s.useEffect(() => {
                    if (null == e) return;
                    function l() {
                        let l = 0 !== e.clientHeight && e.scrollHeight - e.scrollTop - e.clientHeight <= 1;
                        n((e) => (e?.contentKey === t && e.isAtEnd === l ? e : { contentKey: t, isAtEnd: l }));
                    }
                    (l(), e.addEventListener("scroll", l, { passive: !0 }));
                    let i = new ResizeObserver(l);
                    return (
                        i.observe(e),
                        () => {
                            (e.removeEventListener("scroll", l), i.disconnect());
                        }
                    );
                }, [e, t]),
                l?.contentKey === t && l.isAtEnd
            );
        })(_, g),
        I = lb({ guildId: t, widgetId: l, data: a }),
        E = s.useCallback(() => I("listener_row"), [I]);
    lA({ guildId: t, widgetId: l, data: a, length: c.length, isAtEnd: A, disabled: !h && !lr(a) });
    let N = null != d,
        C = N ? null : b,
        S = null != C;
    return lr(a)
        ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(ns, {}), d] })
        : (0, i.jsxs)("div", {
              className: n_.SY,
              children: [
                  (0, i.jsxs)(D.d_, {
                      className: j()(n_.p_, { [n_.w]: N }),
                      ref: p,
                      children: [
                          c.map((e, l) => {
                              let s = e.user_id === u;
                              return (0, i.jsx)(
                                  nx,
                                  {
                                      guildId: t,
                                      userId: e.user_id,
                                      listener: e,
                                      rank: l + 1,
                                      isCompact: n,
                                      isCurrentUser: s,
                                      shouldDimForCurrentUser: s && S,
                                      rowRef: s ? v : void 0,
                                      onClick: E,
                                  },
                                  e.user_id,
                              );
                          }),
                          !N &&
                              null != u &&
                              null == x &&
                              (0, i.jsx)(nx, {
                                  guildId: t,
                                  userId: u,
                                  listener: null,
                                  rank: null,
                                  isCompact: n,
                                  isCurrentUser: !0,
                                  shouldDimForCurrentUser: S,
                                  rowRef: v,
                                  onClick: E,
                              }),
                      ],
                  }),
                  N &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)($, { position: "bottom" }),
                              (0, i.jsx)("div", { className: n_.Kv, children: d }),
                          ],
                      }),
                  null != u &&
                      null != C &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)($, { position: C }),
                              (0, i.jsx)(V, {
                                  position: C,
                                  children: (0, i.jsx)(nx, {
                                      guildId: t,
                                      userId: u,
                                      listener: x,
                                      rank: -1 === m ? null : m + 1,
                                      isCompact: n,
                                      isCurrentUser: !0,
                                      shouldDimForCurrentUser: !1,
                                      isFloating: !0,
                                      onClick: E,
                                  }),
                              }),
                          ],
                      }),
              ],
          });
}
var nb = l(717683);
function nA(e) {
    let { isCompact: t } = e;
    return (0, i.jsxs)("div", {
        className: nb.qV,
        "aria-hidden": !0,
        children: [
            (0, i.jsx)("div", {
                className: j()(nb.Dk, { [nb.yI]: t }),
                children: Array.from({ length: 10 }, (e, t) =>
                    (0, i.jsxs)(
                        "div",
                        {
                            className: nb.Nr,
                            children: [
                                (0, i.jsx)("div", { className: j()(nb.om, nb.xX) }),
                                (0, i.jsxs)("div", {
                                    className: nb.Qq,
                                    children: [
                                        (0, i.jsx)("div", { className: j()(nb.om, nb.DD) }),
                                        (0, i.jsx)("div", { className: j()(nb.om, nb.VA) }),
                                    ],
                                }),
                            ],
                        },
                        t,
                    ),
                ),
            }),
            (0, i.jsxs)("div", {
                className: j()(nb.yp, { [nb.Fl]: t }),
                children: [
                    (0, i.jsx)("div", { className: j()(nb.om, nb.Pl) }),
                    (0, i.jsx)("div", { className: j()(nb.om, nb._0) }),
                ],
            }),
        ],
    });
}
var nI = l(450078),
    nE = l(362704);
function nN(e) {
    let { song: t, isSelected: l, onSelect: n, itemProps: a, cardRef: r, onForwardClick: d } = e,
        c = null != t.cover_art_hash ? lR.RQ.IMAGE(t.cover_art_hash) : null,
        o = s.useMemo(
            () => ({
                kind: "song",
                shareUrl: lR.RQ.WEB_OPEN(lR.M0.TRACK, t.track_external_id),
                title: t.track_title ?? t.track_external_id,
                subtitle: t.artist_name,
                imageUrl: c,
            }),
            [t.track_external_id, t.track_title, t.artist_name, c],
        );
    return (0, i.jsxs)("div", {
        className: lT.Nr,
        ref: r,
        children: [
            (0, i.jsxs)("button", {
                ...a,
                type: "button",
                className: j()(lT.MT, { [lT.tY]: l }),
                "aria-pressed": l,
                onClick: () => n(t.track_external_id),
                children: [
                    (0, i.jsx)(lS.R, {
                        src: c,
                        isCircular: !1,
                        FallbackIcon: nI.u,
                        children:
                            l &&
                            (0, i.jsx)("span", {
                                className: j()(lT.Lw, lT.Kp),
                                "aria-hidden": !0,
                                children: (0, i.jsx)(nE.Y, { size: "md", color: "currentColor" }),
                            }),
                    }),
                    null != t.track_title &&
                        (0, i.jsxs)("span", {
                            className: lT.Qq,
                            children: [
                                (0, i.jsx)(b.E, {
                                    className: lT.DD,
                                    tag: "span",
                                    variant: "text-sm/semibold",
                                    color: "text-default",
                                    lineClamp: 1,
                                    children: t.track_title,
                                }),
                                null != t.artist_name &&
                                    (0, i.jsx)(b.E, {
                                        className: lT.VA,
                                        tag: "span",
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        lineClamp: 1,
                                        children: t.artist_name,
                                    }),
                            ],
                        }),
                ],
            }),
            (0, i.jsx)(lw, { target: o, tabIndex: a.tabIndex, onClick: d }),
        ],
    });
}
function nC(e) {
    return e.track_external_id;
}
function nS(e) {
    let t,
        { guildId: l, widgetId: n, isCompact: a, data: r } = e,
        d = l_(n),
        c = lg((e) => e.byWidgetId[n]?.canShowEmbed ?? lf.canShowEmbed),
        [o, u] = lI(r.ranked_songs.length),
        m = lb({ guildId: l, widgetId: n, data: r });
    lA({ guildId: l, widgetId: n, data: r, length: r.ranked_songs.length, isAtEnd: o });
    let x = s.useCallback(
            (e) => {
                let t;
                (m("song"),
                    (t = lg.getState().byWidgetId[n]?.selectedTrackId ?? null),
                    lh(n, { selectedTrackId: t === e ? null : e }));
            },
            [n, m],
        ),
        f = s.useCallback(() => m("forward"), [m]),
        g = s.useCallback(
            (e, t, l) =>
                (0, i.jsx)(nN, {
                    song: e,
                    isSelected: e.track_external_id === d,
                    onSelect: x,
                    itemProps: t,
                    cardRef: l,
                    onForwardClick: f,
                }),
            [d, x, f],
        );
    if (0 === r.ranked_songs.length) return null;
    let h = r.ranked_songs.find((e) => e.track_external_id === d) ?? null,
        p = lW(r);
    return (0, i.jsxs)("div", {
        className: lX.U,
        children: [
            (0, i.jsx)(lZ, {
                label: lo(li.TOP_SONGS),
                items: r.ranked_songs,
                isCompact: a,
                getItemKey: nC,
                renderItem: g,
                onScrollEndChange: u,
            }),
            null != h
                ? (0, i.jsx)(l$, { guildId: l, isCompact: a, canShowEmbed: c, song: h })
                : (0, i.jsx)(lY, {
                      isCompact: a,
                      headline:
                          (t = Math.round(r.listening_time_ms / ef.A.Millis.MINUTE)) < 1
                              ? null
                              : E.intl.formatToPlainString(Z.default["+5b01q"], { minutes: t }),
                      detail:
                          r.distinct_listeners < 1
                              ? null
                              : E.intl.format(Z.default.AzIhRB, {
                                    count: r.distinct_listeners,
                                    trend: lB(p),
                                    countHook: lP,
                                }),
                      trend: p,
                  }),
        ],
    });
}
var ny = l(691885),
    nk = l(109765);
function nT(e) {
    let { widgetId: t, onSelect: l } = e,
        n = lp(t),
        a = s.useMemo(() => ls.map((e) => ({ id: e, label: lo(e), value: e })), []);
    return (0, i.jsx)("div", {
        className: nk.L,
        children: (0, i.jsx)(ny.l, {
            selectionMode: "single",
            label: E.intl.string(Z.default.hFYyGU),
            hideLabel: !0,
            fitContent: !0,
            options: a,
            value: n,
            onSelectionChange: l,
        }),
    });
}
var nw = l(432017),
    nR = l(871107);
function nD(e) {
    let { title: t } = e;
    return (0, i.jsxs)("div", {
        className: nR.$,
        children: [
            (0, i.jsx)("span", {
                className: nR.K,
                children: (0, i.jsx)(nw.T, { size: "xs", color: c.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
            }),
            (0, i.jsx)(h.q, { size: "md", children: t }),
        ],
    });
}
var nL = l(77915),
    nM = l(756936);
function nU(e) {
    return e.default_title ?? E.intl.string(Z.default["5xxUI2"]);
}
var nG = l(890497),
    nP = l(734057),
    nO = l(317525),
    nB = l(576705),
    nz = l(935208),
    nW = l(44167);
l(321073);
var nH = l(485845),
    nF = l(136722),
    nK = l(435183),
    nq = l(155718),
    nY = l(795816),
    n$ = l(933958),
    nV = l(627363),
    nQ = l(712440),
    nZ = l(733110),
    nX = l(488926),
    nJ = l(818023);
async function n0(e) {
    null == es.A.getApplication(nJ.NW) && (await (0, nV.TA)(nJ.NW));
    let t = n$.Ay.getEmbeddedActivitiesForChannel(e).every((e) => e.applicationId !== nJ.NW);
    return await (0, nY.su)({ channelId: e, applicationId: nJ.NW, isStart: t, renderInFramePool: !0 });
}
async function n1(e) {
    let { channel: t, selectedRoleIds: l } = e,
        n = [];
    if (l.length > 0)
        for (let e of (n.push({ id: t.guild_id, type: nq.r2.ROLE, allow: nX.x3, deny: tt.xBc.USE_EMBEDDED_ACTIVITIES }),
        l))
            n.push({ id: e, type: nq.r2.ROLE, allow: tt.xBc.USE_EMBEDDED_ACTIVITIES, deny: nX.x3 });
    let i = await (0, nK.RT)(t.id, { permissionOverwrites: n });
    if (!i.ok) throw i;
}
let n2 = [];
var n3 = l(344351),
    n6 = l(256693),
    n4 = l(343030),
    n8 = l(317608),
    n9 = l(953538);
let n5 = {
    [d.a.IMAGE_TEXT]: {
        View: function (e) {
            let { widget: t, guildSpaceMode: l, guildId: n } = e,
                { text: s, image_hash: a } = t.config,
                r = "edit" === l ? t.config.image : void 0,
                d = void 0 !== r ? r : null != a ? tL(n, t.id, a) : null;
            return (0, i.jsxs)("div", {
                className: tU.kL,
                children: [
                    null != d && (0, i.jsx)("img", { className: tU.Sl, src: d, alt: "" }),
                    null != s &&
                        (0, i.jsx)(b.E, {
                            variant: "text-md/normal",
                            color: "text-subtle",
                            className: tU.Qq,
                            children: s,
                        }),
                ],
            });
        },
        Edit: function (e) {
            let { widget: t, commit: l, cancel: n } = e,
                a = t.config,
                [r, c] = s.useState(a.title ?? ""),
                [o, u] = s.useState(a.text ?? ""),
                [f, g] = s.useState(a.image),
                [h, p] = s.useState(null),
                j = (0, R.bG)([tm.A], () => tm.A.getGuildId()),
                _ = void 0 !== f ? f : null != a.image_hash && null != j ? tL(j, t.id, a.image_hash) : null;
            return (0, i.jsxs)(A.B, {
                gap: 16,
                children: [
                    (0, i.jsx)(tS.k, {
                        label: E.intl.string(E.t.gnwWrx),
                        value: r,
                        onChange: function (e) {
                            (p(null), c(e));
                        },
                        maxLength: 100,
                        showCharacterCount: !0,
                    }),
                    (0, i.jsx)(tN.D, {
                        label: E.intl.string(E.t.X4IxWL),
                        children: (0, i.jsxs)(A.B, {
                            gap: 16,
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            className: tM.B,
                            children: [
                                (0, i.jsxs)(A.B, {
                                    gap: 8,
                                    direction: "horizontal",
                                    children: [
                                        (0, i.jsx)(tT.A, {
                                            variant: "secondary",
                                            text: E.intl.string(E.t["MsUY/S"]),
                                            onChange: function (e) {
                                                (p(null), g(e));
                                            },
                                            maxFileSizeBytes: 0xa00000,
                                            onFileSizeError: () => (0, tk.A)(0xa00000),
                                        }),
                                        null != _ &&
                                            (0, i.jsx)(m.m, {
                                                text: E.intl.string(E.t.N86XcP),
                                                ariaHidden: !0,
                                                children: (0, i.jsx)(x.K, {
                                                    variant: "critical-secondary",
                                                    icon: ty.TrashIcon,
                                                    onClick: function () {
                                                        (p(null), g(null));
                                                    },
                                                    "aria-label": E.intl.string(E.t.N86XcP),
                                                }),
                                            }),
                                    ],
                                }),
                                null != _ && (0, i.jsx)("img", { className: tM.V, src: _, alt: "" }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(tC.f, {
                        label: E.intl.string(E.t.COGMNC),
                        value: o,
                        onChange: function (e) {
                            (p(null), u(e));
                        },
                        rows: 3,
                        autosize: !0,
                        maxLength: 500,
                        showCharacterCount: !0,
                    }),
                    null != h && (0, i.jsx)(tc.w, { type: "critical", message: h, role: "alert" }),
                    (0, i.jsxs)(to.e, {
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(z.$, { variant: "secondary", text: E.intl.string(E.t["ETE/oC"]), onClick: n }),
                            (0, i.jsx)(z.$, {
                                variant: "primary",
                                text: E.intl.string(E.t["R3BPH+"]),
                                onClick: function () {
                                    let e;
                                    if (
                                        ((e = void 0 !== f ? null !== f : null != a.image_hash),
                                        0 === o.length && !e && (p(E.intl.string(Z.default.zleX9q)), 1))
                                    )
                                        return;
                                    let t = {
                                        type: d.a.IMAGE_TEXT,
                                        image_hash: a.image_hash,
                                        text: o.length > 0 ? o : null,
                                        title: r.length > 0 ? r : null,
                                    };
                                    (void 0 !== f && (t.image = f), l(t));
                                },
                            }),
                        ],
                    }),
                ],
            });
        },
        Title: function (e) {
            let { widget: t } = e;
            return (0, i.jsx)(h.q, { children: t.config.title ?? t.default_title ?? "" });
        },
    },
    [d.a.LEADERBOARD]: {
        View: function (e) {
            let t,
                { widget: l, hydration: n, guildId: a, guildSpaceMode: r } = e,
                d = eV(a, n?.status === "success" ? n.data : void 0),
                c = tA({ guildId: a, data: d, expanded: !1, column: l.position.column, enabled: "view" === r }),
                u = s.useCallback(
                    (e) => {
                        c(e?.closest("[data-guild-space-widget]") ?? null);
                    },
                    [c],
                );
            return (
                (t =
                    "edit" === r && null == n
                        ? (0, i.jsx)(w, {
                              minHeight: 390,
                              graphic: (0, i.jsx)(o, { alt: "", ariaHidden: !0, width: 200 }),
                              title: E.intl.string(Z.default.wqHke4),
                              subtitle: E.intl.string(Z.default.n1sscC),
                          })
                        : n?.status === "error"
                          ? (0, i.jsx)(S, {})
                          : null != d
                            ? (0, i.jsx)(tn, { guildId: a, data: d, column: l.position.column, disabled: "view" !== r })
                            : (0, i.jsx)(C, {})),
                (0, i.jsx)("div", { ref: u, children: t })
            );
        },
        Edit: function (e) {
            let { cancel: t } = e,
                l = (0, R.bG)([tm.A], () => tm.A.getGuildId()),
                n = (0, R.bG)([tu.A], () => tu.A.getGuild(l), [l]),
                a = (0, tf.mN)(n),
                r = null != n && null != n.systemChannelId,
                d = null != n ? n.systemChannelFlags : null,
                [c, o] = s.useState(!1),
                [u, m] = s.useState(null),
                [x, f] = s.useState(!1),
                g = s.useCallback(async () => {
                    if (null == n || null == l || null == u || null == d) return void t();
                    (f(!1), o(!0));
                    try {
                        (await tr.Bo.patch({
                            url: tt.Rsh.GUILD(l),
                            body: { system_channel_flags: (0, ta.lA)(d, tg, !u) },
                            rejectWithError: !0,
                        }),
                            (0, tx.q9)(l, tx.PY.LEADERBOARD_SYSTEM_MESSAGES, u),
                            t());
                    } catch (e) {
                        f(!0);
                    } finally {
                        o(!1);
                    }
                }, [n, l, u, d, t]),
                h = null == n || !r || null == d || c || !a;
            return (0, i.jsxs)(A.B, {
                gap: 16,
                children: [
                    (0, i.jsx)(td.d, {
                        label: E.intl.string(Z.default.v0iLIA),
                        description: E.intl.string(Z.default["88c7ds"]),
                        checked: u ?? !(0, ta.Lt)(d ?? 0, tg),
                        onChange: m,
                        disabled: h,
                    }),
                    !r &&
                        (0, i.jsx)(tc.w, {
                            type: "warning",
                            message: E.intl.string(Z.default["1hsDpi"]),
                            role: "none",
                        }),
                    x &&
                        (0, i.jsx)(tc.w, {
                            type: "critical",
                            message: E.intl.string(Z.default["4FcF2j"]),
                            role: "alert",
                        }),
                    (0, i.jsxs)(to.e, {
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(z.$, {
                                variant: "secondary",
                                text: E.intl.string(E.t["ETE/oC"]),
                                onClick: t,
                                disabled: c,
                            }),
                            (0, i.jsx)(z.$, {
                                variant: "primary",
                                text: E.intl.string(E.t["R3BPH+"]),
                                onClick: g,
                                disabled: h,
                                loading: c,
                            }),
                        ],
                    }),
                ],
            });
        },
        Title: function (e) {
            let { widget: t, hydration: l, guildId: n } = e,
                s = eV(n, l?.status === "success" ? l.data : void 0);
            return null == s
                ? (0, i.jsx)(h.q, { children: t.default_title ?? "" })
                : (0, i.jsx)(h.q, { children: ej(s) });
        },
        TitleIcon: function () {
            return (0, i.jsx)(u.TrophyIcon, { size: "xs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        },
        HeaderAccessory: function (e) {
            let { hydration: t, guildId: l } = e,
                n = eV(l, t?.status === "success" ? t.data : void 0);
            return null == n || ep(n) ? null : (0, i.jsx)(tv, { data: n });
        },
        HeaderActions: function (e) {
            let { hydration: t, guildId: l, column: n } = e,
                s = t?.status === "success" ? t.data : void 0,
                a = eV(l, s);
            return "mini" !== k({ expanded: !1, column: n }) || (null != a && ep(a))
                ? null
                : (0, i.jsx)(m.m, {
                      text: E.intl.string(E.t.dcl9MQ),
                      children: (0, i.jsx)(x.K, {
                          variant: "icon-only",
                          size: "sm",
                          icon: f._,
                          "aria-label": E.intl.string(E.t.dcl9MQ),
                          disabled: null == a,
                          onClick: function () {
                              null != a &&
                                  null != s &&
                                  (g.default.track(tt.HAw.LEADERBOARD_CLICK, {
                                      location: "expand",
                                      guild_id: l,
                                      leaderboard_state: e_(a),
                                      leaderboard_view: k({ expanded: !1, column: n }),
                                      metric: ev(a.stat),
                                  }),
                                  (function (e) {
                                      let { guildId: t, data: l } = e,
                                          n = (e) => (0, i.jsx)(tE, { guildId: t, data: l, modalProps: e });
                                      (0, eb.openModalLazy)(() => Promise.resolve(n), {
                                          modalKey: "guild-space-leaderboard-expand",
                                      });
                                  })({ guildId: l, data: s }));
                          },
                      }),
                  });
        },
    },
    [d.a.POPULAR_GAMES]: {
        View: function (e) {
            let t,
                { widget: l, hydration: n, guildId: a, guildSpaceMode: r } = e,
                d = (function (e, t) {
                    let { requirement: l, hasFetchedConsents: n } = (0, Q.T4)(e),
                        i = (0, R.bG)([K.default], () => K.default.getCurrentUser()?.id);
                    return s.useMemo(() => {
                        if (n)
                            return null == t || null == l || null == i
                                ? t
                                : {
                                      ...t,
                                      user_ids: t.user_ids.filter((e) => e !== i),
                                      games: t.games.map((e) => ({
                                          ...e,
                                          user_ids: e.user_ids.filter((e) => e !== i),
                                      })),
                                  };
                    }, [t, n, l, i]);
                })(a, n?.status === "success" ? n.data : void 0),
                c = tb({
                    onHoverEnd: s.useCallback(
                        (e) => {
                            let { duration: t, flush: n } = e;
                            null != d &&
                                g.default.track(
                                    tt.HAw.POPULAR_GAMES_HOVER,
                                    {
                                        guild_id: a,
                                        duration: t,
                                        popular_games_state: t1(d),
                                        popular_games_view: k({ expanded: !1, column: l.position.column }),
                                    },
                                    { flush: n },
                                );
                        },
                        [a, d, l.position.column],
                    ),
                    enabled: "view" === r,
                }),
                o = s.useCallback(
                    (e) => {
                        c(e?.closest("[data-guild-space-widget]") ?? null);
                    },
                    [c],
                );
            return (
                (t =
                    "edit" === r && null == n
                        ? (0, i.jsx)(w, {
                              minHeight: 273,
                              graphic: (0, i.jsx)(tG, { alt: "", ariaHidden: !0, width: 200 }),
                              title: E.intl.string(Z.default.v59XPT),
                              subtitle: E.intl.string(Z.default.Bayri1),
                          })
                        : n?.status === "error"
                          ? (0, i.jsx)(S, {})
                          : null == n || null == d || "idle" === n.status || "loading" === n.status
                            ? (0, i.jsx)(C, {})
                            : (0, i.jsx)(t5, {
                                  guildId: a,
                                  data: d,
                                  title: t7(l),
                                  column: l.position.column,
                                  disabled: "view" !== r,
                              })),
                (0, i.jsx)("div", { ref: o, children: t })
            );
        },
        Title: function (e) {
            let { widget: t } = e;
            return (0, i.jsx)(h.q, { children: t7(t) });
        },
        TitleIcon: function () {
            return (0, i.jsx)(eB.GameControllerIcon, { size: "xs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        },
    },
    [d.a.POPULAR_MUSIC]: {
        View: function (e) {
            var t, l;
            let n,
                a,
                r,
                { guildId: d, widget: c, hydration: o, guildSpaceMode: u } = e,
                m =
                    ((t = c.id),
                    (n = s.useRef(null)),
                    (a = s.useCallback(
                        (e) => {
                            let { width: l } = e.contentRect;
                            lh(t, { isCompact: l < 480, canShowEmbed: l >= 560 });
                        },
                        [t],
                    )),
                    (0, tP.g)(n, a, [t], { fireOnMount: !0 }),
                    s.useEffect(
                        () => () => {
                            lg.setState((e) => {
                                if (null == e.byWidgetId[t]) return e;
                                let l = { ...e.byWidgetId };
                                return (delete l[t], { byWidgetId: l });
                            });
                        },
                        [t],
                    ),
                    n),
                x = lj(c.id),
                f = lp(c.id),
                h = l_(c.id),
                { isContributing: p, isSpotifyConnected: j, hasFetchedConsents: _ } = (0, nL.MX)(d),
                v = o?.status === "success" ? o.data : void 0,
                { data: b, shouldHideCurrentUser: A } = (0, nL.qL)(d, v),
                I = "edit" === u,
                E = null != v && la(v),
                N = !x && !I && !E,
                y = lb({ guildId: d, widgetId: c.id, data: b }),
                k = (function (e) {
                    let { guildId: t, widgetId: l, data: n, enabled: i } = e,
                        a = lp(l),
                        r = lj(l);
                    return tb({
                        onHoverEnd: s.useCallback(
                            (e) => {
                                let { duration: l, flush: i } = e;
                                null != n &&
                                    g.default.track(
                                        tt.HAw.POPULAR_MUSIC_HOVER,
                                        {
                                            guild_id: t,
                                            duration: l,
                                            popular_music_state: ld(n, a),
                                            popular_music_view: a,
                                            popular_music_layout: lc(r),
                                        },
                                        { flush: i },
                                    );
                            },
                            [t, n, a, r],
                        ),
                        segmentKey: `${a}:${lc(r)}`,
                        enabled: i,
                    });
                })({ guildId: d, widgetId: c.id, data: b, enabled: "view" === u }),
                T = s.useCallback(
                    (e) => {
                        k(e?.closest("[data-guild-space-widget]") ?? null);
                    },
                    [k],
                ),
                w = (0, le.A)(m, T);
            lA({ guildId: d, widgetId: c.id, data: b, length: 0, isAtEnd: !1, disabled: I || !E });
            let R =
                    "view" === u && _ && !p
                        ? (0, i.jsx)(l9, {
                              guildId: d,
                              widgetName: nU(c),
                              isCompact: x,
                              isSpotifyConnected: j,
                              onClick: () => y("contribution_upsell"),
                          })
                        : null,
                D =
                    I || E || o?.status !== "success" || f === li.TOP_LISTENERS
                        ? null
                        : ((l = o.data),
                          null ==
                          (r =
                              l.ranked_songs.find((e) => e.track_external_id === h && null != e.cover_art_hash)
                                  ?.cover_art_hash ??
                              l.ranked_songs.find((e) => null != e.cover_art_hash)?.cover_art_hash)
                              ? null
                              : lR.RQ.IMAGE(r));
            return (0, i.jsxs)("div", {
                className: nM.rf,
                ref: w,
                children: [
                    null != D &&
                        (0, i.jsx)("div", {
                            className: nM.G,
                            "aria-hidden": !0,
                            children: (0, i.jsx)("img", { className: nM.LZ, src: D, alt: "" }),
                        }),
                    (0, i.jsx)("div", {
                        className: nM.Qs,
                        children: (0, i.jsx)("div", {
                            id: lm(c.id),
                            className: nM.nd,
                            role: N ? "tabpanel" : "group",
                            tabIndex: 0,
                            "aria-label": N ? void 0 : lo(f),
                            "aria-labelledby": N ? lu(c.id, f) : void 0,
                            children: (function () {
                                if (I && o?.status !== "success") return (0, i.jsx)(nA, { isCompact: x });
                                if (null == o || "idle" === o.status || "loading" === o.status)
                                    return (0, i.jsx)(C, {});
                                if ("error" === o.status) return (0, i.jsx)(S, {});
                                if (E) return (0, i.jsx)(ni, { onSettingsClick: () => y("empty_state_settings") });
                                if (null == b) return (0, i.jsx)(C, {});
                                switch (f) {
                                    case li.TOP_SONGS:
                                        return (0, i.jsx)(nS, { guildId: d, widgetId: c.id, isCompact: x, data: b });
                                    case li.TOP_ARTISTS:
                                        return (0, i.jsx)(l0, { guildId: d, widgetId: c.id, isCompact: x, data: b });
                                    case li.TOP_LISTENERS:
                                        return (0, i.jsx)(nv, {
                                            guildId: d,
                                            widgetId: c.id,
                                            isCompact: x,
                                            data: b,
                                            shouldHideCurrentUser: A,
                                            upsell: R,
                                        });
                                }
                            })(),
                        }),
                    }),
                    f !== li.TOP_LISTENERS && R,
                    (0, i.jsx)(nd, { isCompact: x }),
                ],
            });
        },
        Title: function (e) {
            let { widget: t, hydration: l, guildSpaceMode: n } = e,
                s = nU(t),
                a = l?.status === "success" && la(l.data);
            return "edit" === n || a ? (0, i.jsx)(h.q, { size: "md", children: s }) : (0, i.jsx)(nD, { title: s });
        },
        ViewHeaderTrailing: function (e) {
            let { widget: t, hydration: l, title: n, guildId: s } = e,
                a = lj(t.id),
                r = lp(t.id),
                { data: d } = (0, nL.qL)(s, l?.status === "success" ? l.data : void 0);
            function c(e, l) {
                if (e !== r) {
                    var n;
                    (lv({ guildId: s, data: d, view: e, isCompact: a, location: l }),
                        (n = t.id),
                        (lg.getState().byWidgetId[n] ?? lf).view !== e && lh(n, { view: e, selectedTrackId: null }));
                }
            }
            return l?.status === "success" && la(l.data)
                ? null
                : a
                  ? (0, i.jsx)(nT, { widgetId: t.id, onSelect: (e) => c(e, "view_select") })
                  : (0, i.jsx)(ln, {
                        label: n,
                        tabs: ls.map((e) => ({ id: e, label: lo(e) })),
                        selectedId: r,
                        panelId: lm(t.id),
                        getTabId: (e) => lu(t.id, e),
                        onSelect: (e) => c(e, "view_tab"),
                    });
        },
    },
    [d.a.WHITEBOARD]: {
        View: function (e) {
            let t,
                l,
                n = (0, nW.n)(),
                a = (0, R.bG)(
                    [nP.A, nB.A],
                    () => {
                        let e = null != n ? nP.A.getChannel(n) : void 0;
                        return null != e && nB.A.can(tt.xBc.USE_EMBEDDED_ACTIVITIES, e);
                    },
                    [n],
                ),
                d = (0, R.bG)(
                    [n$.Ay],
                    () => {
                        let e = n$.Ay.getCurrentEmbeddedActivity();
                        return null == e ||
                            e.applicationId !== nJ.NW ||
                            e.location.kind !== n3.T.GUILD_CHANNEL ||
                            e.location.channel_id !== n
                            ? null
                            : e;
                    },
                    [n],
                ),
                c = (0, R.bG)([n$.Ay], () => n$.Ay.isLaunchingActivity(), []),
                { authResolved: o, isAuthorized: u } =
                    ((t = (0, R.bG)(
                        [nZ.default],
                        () => nZ.default.getFetchStateForApplication(nJ.NW) === nZ.FetchState.FETCHED,
                        [],
                    )),
                    (l = (0, R.bG)(
                        [nZ.default, es.A],
                        () => {
                            let e = nZ.default.getNewestTokenForApplication(nJ.NW);
                            if (null == e) return !1;
                            let t = es.A.getApplication(nJ.NW),
                                l = t?.integrationTypesConfig?.[nH.b.USER_INSTALL]?.oauth2InstallParams?.scopes;
                            if (null == l) return !0;
                            let n = new Set(e.scopes);
                            return l.every((e) => n.has(e));
                        },
                        [],
                    )),
                    s.useEffect(() => {
                        (nZ.default.getFetchStateForApplication(nJ.NW) === nZ.FetchState.NOT_FETCHED &&
                            nQ.A.fetch([nJ.NW]),
                            null == es.A.getApplication(nJ.NW) && (0, nV.TA)(nJ.NW));
                    }, []),
                    { authResolved: t, isAuthorized: l }),
                m = s.useRef(!1);
            s.useEffect(() => {
                null == d && null != n && a && o && u && !m.current && ((m.current = !0), n0(n));
            }, [a, n, d, o, u]);
            let x = s.useCallback(() => {
                    null != n && ((m.current = !0), n0(n));
                }, [n]),
                f = null != n && o && !u;
            return null == n
                ? (0, i.jsx)(A.B, {
                      className: n9.kL,
                      align: "center",
                      justify: "center",
                      children: (0, i.jsx)(r, { alt: "", width: 200, height: 192 }),
                  })
                : a
                  ? (0, i.jsxs)("div", {
                        className: n9.kL,
                        children: [
                            null != d &&
                                (0, i.jsx)(n8.A, {
                                    frameId: (0, n6.Ri)(d),
                                    level: n4.A.WithinAppContent,
                                    className: n9.t$,
                                }),
                            null == d &&
                                f &&
                                (0, i.jsx)("div", {
                                    className: n9.P5,
                                    children: (0, i.jsx)(z.$, {
                                        variant: "secondary",
                                        text: E.intl.string(Z.default.PSuly6),
                                        loading: c,
                                        onClick: x,
                                    }),
                                }),
                        ],
                    })
                  : (0, i.jsx)("div", {
                        className: n9.kL,
                        children: (0, i.jsx)("div", {
                            className: n9.m0,
                            children: (0, i.jsx)(b.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: E.intl.string(Z.default["nXc/MQ"]),
                            }),
                        }),
                    });
        },
        Edit: function (e) {
            let { cancel: t } = e,
                l = (0, R.bG)([tm.A], () => tm.A.getGuildId()),
                n = nz.default.castGuildIdAsEveryoneGuildRoleId(l),
                a = (0, nW.n)(),
                r = (0, R.bG)([nP.A], () => (null != a ? nP.A.getChannel(a) : void 0), [a]),
                d = (0, R.bG)([nB.A], () => null != r && nB.A.can(tt.xBc.MANAGE_ROLES, r), [r]),
                c = (0, R.bG)([nO.A], () => (null == l ? n2 : nO.A.getSortedRoles(l).filter((e) => e.id !== n)), [
                    l,
                    n,
                ]),
                o = s.useMemo(() => {
                    let e;
                    return null != r
                        ? null != (e = r.permissionOverwrites[r.guild_id]) &&
                          nF.zy(e.deny, tt.xBc.USE_EMBEDDED_ACTIVITIES)
                            ? c
                                  .filter((e) => {
                                      let t = r.permissionOverwrites[e.id];
                                      return null != t && nF.zy(t.allow, tt.xBc.USE_EMBEDDED_ACTIVITIES);
                                  })
                                  .map((e) => e.id)
                            : []
                        : [];
                }, [r, c]),
                [u, m] = s.useState(null),
                [x, f] = s.useState(!1),
                [g, h] = s.useState(!1),
                p = u ?? o,
                j = s.useMemo(() => c.map((e) => ({ id: e.id, label: e.name, value: e.id })), [c]);
            async function _() {
                if (null != r) {
                    (h(!1), f(!0));
                    try {
                        (await n1({ channel: r, selectedRoleIds: p }), t());
                    } catch {
                        (f(!1), h(!0));
                    }
                }
            }
            return null == r
                ? null
                : (0, i.jsxs)(A.B, {
                      gap: 16,
                      children: [
                          (0, i.jsx)(nG.Z, {
                              selectionMode: "multiple",
                              label: E.intl.string(Z.default.XXLbfv),
                              description: E.intl.string(Z.default.XrpYIG),
                              placeholder: E.intl.string(Z.default.pp6WeD),
                              options: j,
                              value: p,
                              onSelectionChange: function (e) {
                                  (h(!1), m(e));
                              },
                              disabled: !d || x,
                              fullWidth: !0,
                              wrapTags: !0,
                          }),
                          !d &&
                              (0, i.jsx)(tc.w, {
                                  type: "warning",
                                  message: E.intl.string(Z.default.UPLtlA),
                                  role: "none",
                              }),
                          g &&
                              (0, i.jsx)(tc.w, {
                                  type: "critical",
                                  message: E.intl.string(Z.default.xyCJYs),
                                  role: "alert",
                              }),
                          (0, i.jsxs)(to.e, {
                              fullWidth: !0,
                              children: [
                                  (0, i.jsx)(z.$, {
                                      variant: "secondary",
                                      text: E.intl.string(E.t["ETE/oC"]),
                                      onClick: t,
                                      disabled: x,
                                  }),
                                  (0, i.jsx)(z.$, {
                                      variant: "primary",
                                      text: E.intl.string(E.t["R3BPH+"]),
                                      onClick: _,
                                      disabled: !d,
                                      loading: x,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
        LockedPreview: r,
    },
};
