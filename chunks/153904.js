l.d(t, { m: () => n2 });
var n,
    i = l(477900),
    s = l(582128),
    a = l(62617);
function r(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, width: d, height: c, className: u, style: o } = e,
        m = s.useMemo(
            () => (0, a.H)({ width: d, height: c, intrinsicWidth: 288, intrinsicHeight: 192, style: o }),
            [d, c, o],
        );
    return (0, i.jsx)("img", {
        style: m,
        src: "https://cdn.discordapp.com/assets/content/b501ac4c5a78c462100d3870ce7ab50a78ea7d9b2af6b8ee7a08b11bab82fb01.svg",
        className: (0, a.Z)(u),
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
var d = l(593673),
    c = l(661531);
function u(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, width: d, height: c, className: u, style: o } = e,
        m = s.useMemo(
            () => (0, a.H)({ width: d, height: c, intrinsicWidth: 288, intrinsicHeight: 162, style: o }),
            [d, c, o],
        );
    return (0, i.jsx)("img", {
        style: m,
        src: "https://cdn.discordapp.com/assets/content/58e54efe82f33e76cc9388d9907b1684625b43f15aa5bc7f85752f0f3d4e9be7.svg",
        className: (0, a.Z)(u),
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
var o = l(369606),
    m = l(866665),
    x = l(408278),
    f = l(26430),
    g = l(174459),
    h = l(562073),
    p = l(503698),
    j = l.n(p),
    v = l(289873),
    _ = l(738188),
    A = l(834730),
    b = l(331322),
    E = l(297264),
    N = l(105292),
    I = l(448492);
function C() {
    return (0, i.jsx)("div", {
        className: I.w,
        children: (0, i.jsx)(v.y, { type: v.y.Type.SPINNING_CIRCLE, "aria-label": N.intl.string(N.t.ZTNur7) }),
    });
}
function S() {
    return (0, i.jsxs)("div", {
        className: I.w,
        role: "alert",
        children: [
            (0, i.jsx)(_.WarningIcon, { size: "md", color: c.A.colors.ICON_MUTED, "aria-hidden": !0 }),
            (0, i.jsx)(A.E, { variant: "text-sm/normal", color: "text-muted", children: N.intl.string(N.t.F8FvUy) }),
        ],
    });
}
function y(e) {
    let { className: t, illustration: l, title: n, body: s, action: a } = e;
    return (0, i.jsxs)(b.B, {
        className: j()(I.p, t),
        align: "center",
        justify: "center",
        gap: 16,
        padding: { top: 24, right: 16, bottom: 24, left: 16 },
        children: [
            null != l && (0, i.jsx)(l, { alt: "", ariaHidden: !0, width: 160 }),
            (0, i.jsxs)(b.B, {
                align: "center",
                gap: 6,
                children: [
                    (0, i.jsx)(E.D, { variant: "heading-md/semibold", color: "text-default", children: n }),
                    (0, i.jsx)(A.E, { variant: "text-sm/medium", color: "text-subtle", children: s }),
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
    return (0, i.jsxs)(b.B, {
        className: T.VH,
        style: r,
        align: "center",
        justify: "center",
        gap: 16,
        padding: { top: 24, right: 16, bottom: 24, left: 16 },
        children: [
            (0, i.jsx)("div", { className: T.fA, children: t }),
            (0, i.jsxs)(b.B, {
                className: T.C,
                align: "center",
                gap: 6,
                children: [
                    (0, i.jsx)(E.D, { variant: "heading-md/semibold", color: "text-default", children: l }),
                    (0, i.jsx)(A.E, { variant: "text-sm/medium", color: "text-subtle", children: n }),
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
    W = l(821609),
    z = l(80682),
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
    Z = l(775602);
function X() {
    let [e, t] = s.useState(null),
        [l, n] = s.useState(null),
        [i, a] = s.useState("unknown"),
        r = (0, R.bG)([Z.Ay], () => Z.Ay.useReducedMotion);
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
var J = l(967144),
    ee = l(696451),
    et = l(562153),
    el = l(61567);
function en(e, t) {
    let { showYouSuffix: l = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        n = (0, R.bG)([K.default], () => K.default.getUser(t), [t]),
        i = (0, R.bG)([ee.Ay], () => ee.Ay.getMember(e, t), [e, t]),
        s = (0, J.gn)(e, t, i?.colorStrings ?? null),
        a = et.Ay.useName(e, void 0, n);
    return {
        user: n,
        member: i,
        roleColorStrings: s,
        name: a,
        displayName: l ? N.intl.formatToPlainString(el.default.subXXA, { name: a }) : a,
    };
}
var ei = l(587895),
    es = l(429913),
    ea = l(311043),
    er = l(454908),
    ed = l(403362);
function ec(e, t) {
    return { id: e, name: N.intl.string(N.t.GIWFlF), iconUrl: void 0, coverUrl: void 0, isLoading: t };
}
function eu(e) {
    let t = (0, es.A)(e),
        l = (0, R.yK)([ei.A], () => e.map((e) => ei.A.didFetchingApplicationFail(e))),
        n = s.useMemo(() => t.map((e) => e?.getCanonicalGameId() ?? void 0), [t]),
        i = s.useMemo(() => n.filter(ed.Vq), [n]);
    (0, er.x)(i);
    let a = (0, R.yK)([ea.A], () => n.map((e) => (null != e ? ea.A.getGame(e) : void 0))),
        r = (0, R.yK)([ea.A], () => n.map((e) => null != e && (ea.A.didFetchingFail(e) || ea.A.hasNoData(e))));
    return s.useMemo(() => {
        let i = new Map();
        return (
            e.forEach((e, s) => {
                let d = t[s],
                    c = a[s],
                    u = null == d && !l[s],
                    o = null == c && null != n[s] && !r[s];
                null == d || o
                    ? i.set(e, ec(e, u || o))
                    : i.set(e, {
                          id: e,
                          name: c?.name ?? d.name,
                          iconUrl: d.getIconURL(64) ?? void 0,
                          coverUrl: c?.getCoverURL() ?? void 0,
                          isLoading: !1,
                      });
            }),
            i
        );
    }, [e, t, l, n, a, r]);
}
function eo(e, t) {
    return e.get(t) ?? ec(t, !1);
}
function em(e, t) {
    return t.map((t) => eo(e, t));
}
var ex = l(927813),
    ef = l(251812),
    eg = l(518782);
function eh(e) {
    return e.entries.length < 3;
}
function ep(e) {
    return (0, ef.K)(eh(e) ? void 0 : e.stat).name;
}
function ej(e) {
    let t;
    return eh(e)
        ? "empty_state"
        : null != (t = e.computed_at) &&
            new Date(t).getTime() - e.week_start_ts * ex.A.Millis.SECOND >= ex.A.Millis.WEEK
          ? "podium"
          : "in_progress";
}
function ev(e) {
    switch (e) {
        case eg.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            return "hours_played";
        case eg.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return "days_played";
        case eg.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return "unique_games_played";
        default:
            return null;
    }
}
var e_ = l(192308);
function eA(e, t, n) {
    (0, e_.openModalLazy)(
        async () => {
            let { default: s } = await Promise.all([
                l.e("120239"),
                l.e("955410"),
                l.e("518264"),
                l.e("5257"),
                l.e("6050"),
                l.e("230029"),
                l.e("488926"),
                l.e("352456"),
                l.e("203112"),
                l.e("762831"),
                l.e("348567"),
                l.e("264236"),
                l.e("273232"),
                l.e("240511"),
                l.e("463095"),
                l.e("959134"),
                l.e("371482"),
                l.e("16954"),
                l.e("610943"),
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
var eb = l(823353);
function eE(e) {
    let { guildId: t, onActivitySharingClick: l } = e,
        { requirement: n } = (0, Q.T4)(t),
        s = null != n ? el.default.wyIs4o : el.default["81PK67"];
    return (0, i.jsx)(y, {
        className: eb.w,
        illustration: u,
        title: N.intl.string(el.default.ULK65a),
        body: N.intl.format(s, { memberCount: 3 }),
        action:
            null != n
                ? (0, i.jsx)(W.$, {
                      variant: "secondary",
                      size: "sm",
                      text: N.intl.string(el.default.A4ZMJL),
                      onClick: () => {
                          (l(), eA(t, n, N.intl.string(el.default.PJn0ih)));
                      },
                  })
                : null,
    });
}
let eN =
        "https://cdn.discordapp.com/assets/content/f86a84ce3eb0d44fa03c308be330f508fbcdec9528cd7969c8f7530cdd058898.png",
    eI = `${eN} 1x, https://cdn.discordapp.com/assets/content/61de4c8a747fbce4c3772d27eeffbea00e3f3fbefd2a972d9d25b96d7116f042.png 2x, https://cdn.discordapp.com/assets/content/7e79963a2b009fabcc285dc56b301eb819e63b604739b0a48c8e0044a527a800.png 3x`;
function eC(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, width: d, height: c, className: u, style: o } = e,
        m = s.useMemo(
            () => (0, a.H)({ width: d, height: c, intrinsicWidth: 24, intrinsicHeight: 24, style: o }),
            [d, c, o],
        );
    return (0, i.jsx)("img", {
        style: m,
        src: eN,
        srcSet: eI,
        className: (0, a.Z)(u),
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
let eS =
        "https://cdn.discordapp.com/assets/content/e87b249cc95509b720aae7d01a178fa3b37853797f9ad0b87c93c78934854c1f.png",
    ey = `${eS} 1x, https://cdn.discordapp.com/assets/content/4b18fe6b4c48532112a9ea66da62f20f7690a0de57378da9d92f091eba06f2f5.png 2x, https://cdn.discordapp.com/assets/content/b1f5d190ed2b05b6cefd2d44fc875f383134d87d928e3422de92e5e19378a3ae.png 3x`;
function ek(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, width: d, height: c, className: u, style: o } = e,
        m = s.useMemo(
            () => (0, a.H)({ width: d, height: c, intrinsicWidth: 24, intrinsicHeight: 24, style: o }),
            [d, c, o],
        );
    return (0, i.jsx)("img", {
        style: m,
        src: eS,
        srcSet: ey,
        className: (0, a.Z)(u),
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
var eT = l(846058),
    ew = l(428678),
    eR = l(952270),
    eD = l(342296);
function eL(e) {
    let t = Math.floor(Math.max(e, 0) / ex.A.Seconds.MINUTE),
        l = Math.floor(t / ex.A.Minutes.HOUR),
        n = t % ex.A.Minutes.HOUR;
    return 0 === l
        ? N.intl.formatToPlainString(el.default.DdzvGL, { minutes: n })
        : N.intl.formatToPlainString(el.default["6Y8H0A"], { hours: l, minutes: n });
}
function eM(e, t) {
    switch (t) {
        case eg.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return {
                primary: N.intl.formatToPlainString(N.t["k2UNz+"], { days: e.value }),
                secondary: eL(e.time_played_seconds),
            };
        case eg.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return {
                primary: N.intl.formatToPlainString(el.default.rgpc8E, { count: e.value }),
                secondary: eL(e.time_played_seconds),
            };
        case eg.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            let l, n, i;
            return {
                primary:
                    ((n = Math.floor((l = Math.floor(Math.max(e.value, 0) / ex.A.Millis.MINUTE)) / ex.A.Minutes.HOUR)),
                    (i = l % ex.A.Minutes.HOUR),
                    0 === n
                        ? N.intl.formatToPlainString(el.default.bgQf2H, { minutes: i })
                        : 0 === i
                          ? N.intl.formatToPlainString(el.default["D/HToK"], { hours: n })
                          : N.intl.formatToPlainString(el.default.fvtrHn, { hours: n, minutes: i })),
            };
        default:
            return { primary: "\u2014" };
    }
}
var eU = l(793169),
    eG = l(81466),
    eP = l(406810),
    eO = l(687966),
    eB = l(683063),
    eW = l(573435),
    ez = l(402860),
    eH = l(396583),
    eF = l(280450),
    eK = l(994500);
function eq(e, t) {
    let l = t.user_id,
        n = (0, R.bG)([eF.default], () => eF.default.getId() === l, [l]);
    return en(e, l, { showYouSuffix: n });
}
function eY(e) {
    return (0, R.bG)([eK.A], () => (eK.A.isBlocked(e) ? "blocked" : eK.A.isIgnored(e) ? "ignored" : null), [e]);
}
function e$(e) {
    switch (e) {
        case "blocked":
            return N.intl.string(el.default.I3YOjC);
        case "ignored":
            return N.intl.string(el.default.CfMzwe);
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
            rowRef: u,
            onClick: o,
            metricWidth: m,
        } = e,
        x = eq(t, l),
        f = l.application_ids[0],
        g = null != f ? eo(a, f) : void 0,
        h = l.user_id,
        p = s.useCallback(() => {
            (o?.(),
                (0, ez.openUserProfileModal)({
                    userId: h,
                    guildId: t,
                    tabSection: eQ.RP.ACTIVITY,
                    scrollTarget: eQ.bk.RECENT_ACTIVITY,
                }));
        }, [o, h, t]);
    return (0, i.jsxs)("div", {
        ref: u,
        "aria-hidden": c,
        inert: c,
        className: j()(eZ.nM, { [eZ.Bh]: r && !c, [eZ.lR]: d }),
        children: [
            (0, i.jsx)(eJ, { guildId: t, entry: l, identity: x, lastPlayedGame: g, onClick: o }),
            (0, i.jsx)(e2, { entry: l, stat: n, width: m, onClick: p }),
            (0, i.jsx)(e8, {
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
    let { guildId: t, entry: l, identity: n, lastPlayedGame: a, onClick: r } = e,
        d = s.useRef(null),
        u = eY(l.user_id),
        o = null != u,
        m = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(e0, { rank: l.rank }),
                o
                    ? (0, i.jsx)("span", {
                          className: eZ.gt,
                          children:
                              "blocked" === u
                                  ? (0, i.jsx)(ew.K, { size: "xs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 })
                                  : (0, i.jsx)(eR.EyeSlashIcon, {
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
                        (0, i.jsx)(E.D, {
                            variant: "heading-sm/semibold",
                            color: o ? "text-subtle" : "text-default",
                            lineClamp: 1,
                            children:
                                null != u
                                    ? e$(u)
                                    : (0, i.jsx)(O.g, {
                                          name: n.displayName,
                                          colorString: n.member?.colorString ?? null,
                                          colorStrings: n.roleColorStrings,
                                      }),
                        }),
                        !o &&
                            null != a &&
                            (0, i.jsx)(A.E, {
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                lineClamp: 1,
                                children: N.intl.formatToPlainString(el.default.YuNVPY, { gameName: a.name }),
                            }),
                    ],
                }),
            ],
        });
    return null == n.user
        ? (0, i.jsx)("div", { className: eZ.D_, children: m })
        : (0, i.jsx)(eD.A, {
              targetElementRef: d,
              user: n.user,
              guildId: t,
              children: (e) =>
                  (0, i.jsx)(L.D, {
                      ...e,
                      innerRef: d,
                      className: j()(eZ.D_, eZ.FB),
                      onClick: (t) => {
                          (r?.(), e.onClick(t));
                      },
                      children: m,
                  }),
          });
}
function e0(e) {
    let { rank: t } = e,
        l = N.intl.formatToPlainString(el.default.I4JiAQ, { rank: t });
    switch (t) {
        case 1:
            return (0, i.jsx)("div", { className: eZ.Tm, children: (0, i.jsx)(eU.t, { alt: l }) });
        case 2:
            return (0, i.jsx)("div", { className: eZ.Tm, children: (0, i.jsx)(eC, { alt: l }) });
        case 3:
            return (0, i.jsx)("div", { className: eZ.Tm, children: (0, i.jsx)(ek, { alt: l }) });
        default:
            return (0, i.jsxs)("div", {
                className: eZ.mH,
                children: [
                    (0, i.jsx)(U.A, { children: l }),
                    (0, i.jsx)(A.E, {
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
        case eg.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return (0, i.jsx)(eG.CalendarIcon, { size: "xxs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case eg.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            return (0, i.jsx)(eP.ClockIcon, { size: "xxs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case eg.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return (0, i.jsx)(eO.GameControllerIcon, { size: "xxs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        default:
            return null;
    }
}
function e2(e) {
    let { entry: t, stat: l, width: n, onClick: s } = e,
        { primary: a, secondary: r } = eM(t, l);
    return (0, i.jsxs)(L.D, {
        className: eZ.TH,
        style: null != n ? { width: n } : void 0,
        "aria-label": N.intl.string(el.default.o6mBdl),
        onClick: s,
        children: [
            (0, i.jsxs)("div", {
                className: eZ.bf,
                children: [
                    (0, i.jsx)(e1, { stat: l }),
                    (0, i.jsx)(A.E, { variant: "text-sm/medium", color: "text-subtle", children: a }),
                ],
            }),
            null != r && (0, i.jsx)(A.E, { variant: "text-xs/medium", color: "text-muted", children: r }),
        ],
    });
}
function e6(e) {
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
function e3(e) {
    let { played: t, totalCount: l } = e,
        n = t.filter((e) => null != e.iconUrl || e.isLoading).slice(0, 2),
        s = l - n.length;
    return (0, i.jsxs)("div", {
        className: eZ.Nw,
        children: [
            n.map((e, t) => (0, i.jsx)(e6, { game: e, notched: s > 0 || t !== n.length - 1 }, `${e.id}-${t}`)),
            s > 0
                ? (0, i.jsx)("span", {
                      className: eZ.rO,
                      children: (0, i.jsx)(eW.Ay, {
                          mask: eW.Ay.Masks.SQUIRCLE,
                          width: 24,
                          height: 24,
                          children: (0, i.jsx)("div", {
                              className: eZ.p0,
                              children: (0, i.jsx)(A.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-subtle",
                                  children: N.intl.formatToPlainString(el.default.JiMMEd, { count: s }),
                              }),
                          }),
                      }),
                  })
                : null,
        ],
    });
}
function e4(e) {
    let { played: t, totalCount: l, children: n } = e,
        s = t.filter((e) => null != e.iconUrl || e.isLoading);
    return (0, i.jsx)(eB.u, {
        body:
            0 === t.length
                ? N.intl.string(el.default["7CrlYb"])
                : 1 === t.length
                  ? N.intl.formatToPlainString(el.default.dbNpK0, { firstGame: t[0].name })
                  : 2 === t.length && 2 === l
                    ? N.intl.formatToPlainString(el.default.tqVg4M, { firstGame: t[0].name, secondGame: t[1].name })
                    : N.intl.formatToPlainString(el.default.bxcrSz, {
                          firstGame: t[0].name,
                          secondGame: t[1].name,
                          otherCount: l - 2,
                      }),
        asset: s.length > 0 ? (0, i.jsx)(e3, { played: s, totalCount: s.length }) : void 0,
        assetSize: s.length > 1 ? 43 : 24,
        children: n,
    });
}
function e8(e) {
    let { name: t, applicationIds: l, applicationCount: n, games: s, onClick: a } = e,
        r = em(s, l);
    return (0, i.jsx)("div", {
        className: eZ.ag,
        children: (0, i.jsx)(e4, {
            played: r,
            totalCount: n,
            children: (0, i.jsx)(L.D, {
                className: j()(eZ.Nw, eZ.Dz),
                "aria-label": N.intl.formatToPlainString(el.default.o6mBdl, { name: t }),
                onClick: a,
                children: (0, i.jsx)(e3, { played: r, totalCount: n }),
            }),
        }),
    });
}
var e7 = l(189043);
function e5(e) {
    let { guildId: t, entries: l, stat: n, games: s, currentUserEntry: a, currentUserPillarRef: r, onClick: d } = e,
        c = {
            1: { column: e7.HC, pillar: e7.P5 },
            2: { column: e7.th, pillar: e7.Vk },
            3: { column: e7.Ou, pillar: e7.el },
        };
    return (0, i.jsx)("div", {
        className: e7.pI,
        role: "list",
        "aria-label": N.intl.string(el.default.wKXLfQ),
        children: l.map((e, l) =>
            (0, i.jsx)(
                e9,
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
function e9(e) {
    let {
            guildId: t,
            entry: l,
            place: n,
            columnClassName: a,
            pillarClassName: r,
            stat: d,
            games: u,
            isCurrentUser: o,
            currentUserPillarRef: m,
            onClick: x,
        } = e,
        f = em(u, l.application_ids),
        g = eq(t, l),
        h = eY(l.user_id),
        p = null != h,
        { primary: v } = eM(l, d),
        _ = 1 === n ? P._3.SIZE_48 : P._3.SIZE_40,
        b = s.useRef(null),
        N = 1 === n ? eT.b : 2 === n ? eC : ek,
        I = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: e7.R3,
                    children: [
                        p
                            ? (0, i.jsx)("span", {
                                  className: j()(e7.gt, 1 === n && e7.o2),
                                  children:
                                      "blocked" === h
                                          ? (0, i.jsx)(ew.K, {
                                                size: 1 === n ? "md" : "sm",
                                                color: c.A.colors.ICON_SUBTLE,
                                                "aria-hidden": !0,
                                            })
                                          : (0, i.jsx)(eR.EyeSlashIcon, {
                                                size: 1 === n ? "md" : "sm",
                                                color: c.A.colors.ICON_SUBTLE,
                                                "aria-hidden": !0,
                                            }),
                              })
                            : (0, i.jsx)(G.eu, {
                                  size: _,
                                  src: g.user?.getAvatarURL(t, (0, P.FT)(_)) ?? void 0,
                                  "aria-hidden": !0,
                              }),
                        (0, i.jsx)(N, { className: e7.dR, alt: "", ariaHidden: !0 }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: j()(e7.DX, r),
                    children: [
                        (0, i.jsx)(E.D, {
                            variant: "heading-sm/semibold",
                            color: p ? "text-subtle" : "text-default",
                            lineClamp: 1,
                            className: e7.IY,
                            children:
                                null != h
                                    ? e$(h)
                                    : (0, i.jsx)(O.g, {
                                          name: g.displayName,
                                          colorString: g.member?.colorString ?? null,
                                          colorStrings: g.roleColorStrings,
                                      }),
                        }),
                        (0, i.jsx)(e4, {
                            played: f,
                            totalCount: l.application_count,
                            children: (0, i.jsx)(A.E, {
                                variant: "text-xs/medium",
                                color: "text-default",
                                children: v,
                            }),
                        }),
                    ],
                }),
            ],
        });
    return (0, i.jsx)("div", {
        className: a,
        role: "listitem",
        ref: o ? m : void 0,
        children:
            null != g.user
                ? (0, i.jsx)(eD.A, {
                      targetElementRef: b,
                      user: g.user,
                      guildId: t,
                      children: (e) =>
                          (0, i.jsx)(L.D, {
                              ...e,
                              className: e7.fs,
                              innerRef: b,
                              onClick: (t) => {
                                  (x?.(), e.onClick(t));
                              },
                              children: I,
                          }),
                  })
                : (0, i.jsx)("div", { className: e7.fs, children: I }),
    });
}
var te = l(652215),
    tt = l(219047);
function tl(e) {
    let { guildId: t, data: l, inModal: n = !1, column: a, disabled: r = !1 } = e,
        { stat: d, entries: c } = l,
        u = (0, R.bG)([K.default], () => K.default.getCurrentUser()?.id),
        o = s.useMemo(() => c.find((e) => e.user_id === u) ?? null, [c, u]),
        m = s.useMemo(() => {
            let e = c.slice(0, 20);
            return null == o || e.includes(o) ? e : [...e, o];
        }, [c, o]),
        x = s.useMemo(() => Array.from(new Set(m.map((e) => e.user_id))), [m]);
    (0, z.k6)(t, x);
    let f = ev(d),
        h = eu(s.useMemo(() => Array.from(new Set(m.flatMap((e) => e.application_ids))), [m])),
        p = eh(l),
        v = ej(l),
        _ = "podium" === v,
        A = k({ expanded: n, column: a }),
        b = [m[0], m[1], m[2]],
        { scrollerRef: E, scrollerNode: I, userRowRef: S, floatingRowPosition: y, scrollToUserRow: T } = X(),
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
        })(I),
        M = null == o && null != u,
        U = null != y,
        G = s.useMemo(() => {
            let e = null == o || m.includes(o) ? m : [...m, o];
            return e.length > 0 ? e : m;
        }, [m, o]),
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
            className: tt.V$,
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
            u = s.useRef(null),
            o = `${t}:${l}:${n}:${i}:${a}`,
            m = s.useCallback(() => {
                u.current !== o &&
                    ((u.current = o),
                    g.default.track(te.HAw.LEADERBOARD_END_IMPRESSION, {
                        guild_id: t,
                        leaderboard_length: l,
                        leaderboard_state: n,
                        leaderboard_view: i,
                        metric: a,
                    }));
            }, [t, o, l, n, i, a]);
        s.useEffect(() => {
            !c && (d || r) && m();
        }, [c, d, r, m]);
    })({
        guildId: t,
        leaderboardLength: p ? 0 : m.length,
        leaderboardState: v,
        leaderboardView: A,
        metric: f,
        isAtEnd: w,
        isEmpty: p,
        disabled: r,
    });
    let W = s.useCallback(
            (e) => {
                r ||
                    g.default.track(te.HAw.LEADERBOARD_CLICK, {
                        location: e,
                        guild_id: t,
                        leaderboard_state: v,
                        leaderboard_view: A,
                        metric: f,
                    });
            },
            [t, v, A, f, r],
        ),
        H = s.useCallback(
            (e) => {
                let l = e === o;
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
                        onClick: () => W("row"),
                        metricWidth: O ?? void 0,
                    },
                    `${e.rank}-${e.user_id}`,
                );
            },
            [U, o, h, t, d, S, W, O],
        );
    return p
        ? (0, i.jsx)("div", {
              className: tt.Cm,
              children: (0, i.jsx)(eE, { guildId: t, onActivitySharingClick: () => W("activity_sharing") }),
          })
        : null == O
          ? (0, i.jsxs)("div", { className: tt.rf, children: [B, (0, i.jsx)(C, {})] })
          : (0, i.jsxs)("div", {
                className: tt.rf,
                children: [
                    B,
                    (0, i.jsxs)("div", {
                        className: tt.SY,
                        children: [
                            (0, i.jsxs)(D.d_, {
                                className: j()(tt.p_, { [tt.zE]: n, [tt.Ng]: M }),
                                ref: E,
                                children: [
                                    _ &&
                                        (0, i.jsx)(e5, {
                                            guildId: t,
                                            entries: b,
                                            stat: d,
                                            games: h,
                                            currentUserEntry: o,
                                            currentUserPillarRef: S,
                                            onClick: () => W("podium"),
                                        }),
                                    m.map(H),
                                ],
                            }),
                            (null != o && null != y) || (M && !w)
                                ? (0, i.jsx)($, { position: "top" !== y || M ? "bottom" : "top" })
                                : null,
                            null != o &&
                                null != y &&
                                (0, i.jsx)(V, {
                                    position: y,
                                    children: (0, i.jsx)(L.D, {
                                        className: tt.Po,
                                        "aria-label": N.intl.string(el.default.d0Z8kd),
                                        onClick: T,
                                        children: (0, i.jsx)(eX, {
                                            guildId: t,
                                            entry: o,
                                            stat: d,
                                            games: h,
                                            isCurrentUser: !0,
                                            shouldDimForCurrentUser: !1,
                                            isFloating: !0,
                                            onClick: () => W("row"),
                                            metricWidth: O ?? void 0,
                                        }),
                                    }),
                                }),
                            M && (0, i.jsx)(ti, { guildId: t, onActivitySharingClick: () => W("activity_sharing") }),
                        ],
                    }),
                    (0, i.jsx)(tn, { computedAt: l.computed_at, inModal: n }),
                ],
            });
}
function tn(e) {
    let { computedAt: t, inModal: l } = e,
        n = (0, i.jsxs)("div", {
            className: tt.z8,
            children: [
                (0, i.jsx)(M.RefreshIcon, { size: "xxs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 }),
                (0, i.jsx)(A.E, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: N.intl.string(el.default["/nma+a"]),
                }),
            ],
        });
    return null == t
        ? (0, i.jsx)("div", { className: tt.qr, children: n })
        : (0, i.jsx)("div", {
              className: j()(tt.qr, { [tt.zE]: l }),
              tabIndex: 0,
              children: (0, i.jsx)(m.m, {
                  text: N.intl.formatToPlainString(el.default["1bt50t"], {
                      timestamp: (0, q.mk)(new Date(t)).toLowerCase(),
                  }),
                  position: "bottom",
                  children: n,
              }),
          });
}
function ti(e) {
    let { guildId: t, onActivitySharingClick: l } = e,
        {
            isSharingActivity: n,
            isSharingActivityInGuild: a,
            hasPersonalizationConsent: r,
            requirement: d,
        } = (0, Q.T4)(t),
        u = null != d,
        o = (0, R.bG)([F.A], () => F.A.getStatus() === te.clD.INVISIBLE),
        m = N.intl.string(el.default.toxuHd),
        x = !1;
    n && a
        ? r
            ? o && ((m = N.intl.string(el.default.PTDDhW)), (x = !0))
            : (m = N.intl.string(el.default.mTARYx))
        : (m = N.intl.string(el.default["8y885d"]));
    let [f] = s.useState(u),
        [g] = s.useState(x),
        h = !u && !x && f,
        p = !u && !x && g;
    p ? (m = N.intl.string(el.default.cgRADC)) : h && (m = N.intl.string(el.default.dqYuni));
    let {
        user: j,
        member: v,
        name: _,
        roleColorStrings: b,
    } = en(
        t,
        (0, R.bG)([K.default], () => K.default.getCurrentUser()?.id ?? ""),
    );
    return null == j
        ? null
        : (0, i.jsxs)("div", {
              className: tt.Xx,
              children: [
                  (0, i.jsxs)("div", {
                      className: tt.kd,
                      children: [
                          (0, i.jsxs)("div", {
                              className: tt.nk,
                              children: [
                                  (0, i.jsx)(U.A, { children: N.intl.string(el.default["oHdW+u"]) }),
                                  (0, i.jsx)(A.E, {
                                      variant: "text-sm/semibold",
                                      color: "text-muted",
                                      "aria-hidden": !0,
                                      children: "?",
                                  }),
                              ],
                          }),
                          (0, i.jsx)(G.eu, {
                              size: P._3.SIZE_32,
                              src: j.getAvatarURL(t, (0, P.FT)(P._3.SIZE_32)) ?? void 0,
                              className: tt.SA,
                              "aria-hidden": !0,
                              status: o ? te.clD.INVISIBLE : void 0,
                          }),
                          (0, i.jsxs)("div", {
                              className: tt.ko,
                              children: [
                                  (0, i.jsx)(E.D, {
                                      variant: "heading-sm/semibold",
                                      color: "text-default",
                                      lineClamp: 1,
                                      children: (0, i.jsx)(O.g, {
                                          name: _,
                                          colorString: v?.colorString ?? null,
                                          colorStrings: b,
                                      }),
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: tt.LF,
                                      children: [
                                          h || p
                                              ? (0, i.jsx)(B.U, {
                                                    size: "xs",
                                                    color: c.A.colors.ICON_FEEDBACK_POSITIVE,
                                                    "aria-hidden": !0,
                                                })
                                              : null,
                                          (0, i.jsx)(A.E, {
                                              variant: "text-xs/medium",
                                              color: "text-subtle",
                                              children: m,
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                      ],
                  }),
                  u &&
                      (0, i.jsx)("div", {
                          className: tt.rl,
                          children: (0, i.jsx)(W.$, {
                              variant: "secondary",
                              size: "sm",
                              text: N.intl.string(el.default.fMbgeZ),
                              onClick: () => {
                                  (l(), eA(t, d, N.intl.string(el.default.PJn0ih)));
                              },
                          }),
                      }),
                  x &&
                      !u &&
                      (0, i.jsx)(W.$, {
                          variant: "secondary",
                          size: "sm",
                          text: N.intl.string(N.t.fwPurU),
                          onClick: () => {
                              (0, H.A)({ nextStatus: te.clD.ONLINE, prevStatus: te.clD.INVISIBLE });
                          },
                      }),
              ],
          });
}
var ts = l(665260),
    ta = l(636537),
    tr = l(193249),
    td = l(683071),
    tc = l(825484),
    tu = l(71393),
    to = l(967198),
    tm = l(49303),
    tx = l(313627);
let tf = te.ogj.SUPPRESS_GAMING_LEADERBOARD_NOTIFICATIONS;
var tg = l(224640),
    th = l(20742),
    tp = l(885386),
    tj = l(515746);
function tv(e) {
    let { data: t } = e,
        l = (0, ef.K)(t.stat),
        {
            ended: n,
            endDate: a,
            badgeLabel: r,
        } = (function (e) {
            let t = (e + ex.A.Seconds.WEEK) * ex.A.Millis.SECOND,
                [l, n] = s.useState(() => Date.now()),
                i = t - l,
                a = i <= 0,
                r = i - (Math.ceil(i / ex.A.Millis.DAY) - 1) * ex.A.Millis.DAY;
            return (
                (0, eH.A)(() => n(Date.now()), a ? null : r),
                s.useMemo(
                    () => ({
                        ended: a,
                        endDate: new Date(t),
                        badgeLabel: a
                            ? N.intl.string(el.default["J8r/7L"])
                            : N.intl.formatToPlainString(el.default["PuaR+2"], {
                                  days: Math.ceil(i / ex.A.Millis.DAY),
                              }),
                    }),
                    [a, t, i],
                )
            );
        })(t.week_start_ts),
        d = tp.PZ.useSetting(),
        c = 2 > (0, q.m_)(a, new Date()) ? (0, q.mk)(a, !1, d).toLowerCase() : (0, q.i$)(a, "L LT", d).toLowerCase(),
        u = n
            ? N.intl.format(el.default.kG9XmM, { endedAt: c, nextStatName: (0, ef.K)(t.next_stat).name })
            : N.intl.format(el.default["X+VLqi"], { statQuestion: l.question, endsAt: c });
    return (0, i.jsx)(eB.u, {
        title: l.name,
        body: u,
        position: "top",
        children: (0, i.jsx)("div", {
            className: j()(tj.qS, n ? tj.yM : tj.Qk),
            tabIndex: 0,
            children: (0, i.jsx)(A.E, {
                variant: "text-xs/semibold",
                color: n ? "text-muted" : "text-brand",
                children: r,
            }),
        }),
    });
}
function t_(e) {
    let { onHoverEnd: t, segmentKey: l, enabled: n = !0 } = e,
        [i, a] = s.useState(null),
        r = s.useRef(null),
        d = s.useRef(t),
        c = s.useRef(l),
        u = s.useCallback((e) => {
            let t = r.current;
            if (null == t) return;
            r.current = null;
            let l = Date.now() - t;
            l < 250 || d.current({ duration: Math.round(l) / 1e3, flush: e });
        }, []);
    return (
        s.useEffect(() => {
            (c.current !== l && null != r.current && (u(!1), (r.current = Date.now())),
                (c.current = l),
                (d.current = t));
        }, [l, t, u]),
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
                            u(!0));
                    }
                );
            function e() {
                r.current = Date.now();
            }
            function t() {
                u(!1);
            }
            function l() {
                u(!1);
            }
            function s() {
                "hidden" === document.visibilityState && u(!0);
            }
            function a() {
                u(!0);
            }
        }, [i, n, u]),
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
                        te.HAw.LEADERBOARD_HOVER,
                        {
                            guild_id: t,
                            duration: s,
                            leaderboard_state: ej(l),
                            leaderboard_view: k({ expanded: n, column: i }),
                            metric: ev(l.stat),
                        },
                        { flush: a },
                    );
            },
            [t, l, n, i],
        );
    return t_({ onHoverEnd: r, enabled: a });
}
var tb = l(460614);
function tE(e) {
    let { guildId: t, data: l, modalProps: n } = e,
        s = eV(t, l),
        a = tA({ guildId: t, data: s, expanded: !0 });
    return null == s
        ? null
        : (0, i.jsx)(tg.d, {
              size: "lg",
              "aria-label": ep(s),
              ...n,
              children: (0, i.jsxs)("div", {
                  ref: a,
                  children: [
                      (0, i.jsxs)("div", {
                          className: tb.wx,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: tb.LD,
                                  children: [
                                      (0, i.jsx)(o.TrophyIcon, {
                                          size: "xs",
                                          color: c.A.colors.ICON_SUBTLE,
                                          "aria-hidden": !0,
                                      }),
                                      (0, i.jsx)(E.D, {
                                          variant: "heading-sm/medium",
                                          className: tb.DD,
                                          children: ep(s),
                                      }),
                                      (0, i.jsx)(tv, { data: s }),
                                  ],
                              }),
                              (0, i.jsx)(th.s_, {}),
                          ],
                      }),
                      (0, i.jsx)("div", {
                          className: tb.rf,
                          children: (0, i.jsx)(tl, { guildId: t, data: s, inModal: !0 }),
                      }),
                  ],
              }),
          });
}
var tN = l(452027),
    tI = l(103557),
    tC = l(95477),
    tS = l(241326),
    ty = l(2553),
    tk = l(405810),
    tT = l(488428),
    tw = l(776231);
let tR = (0, l(676279).cy)();
function tD(e, t, l) {
    let n = l.startsWith("a_"),
        i = n ? (tR ? "webp" : "gif") : tR ? "webp" : "jpg",
        { CDN_HOST: s, API_ENDPOINT: a } = window.GLOBAL_ENV,
        r = te.Rsh.GUILD_SPACE_IMAGE_TEXT_WIDGET_IMAGE(e, t, l, i),
        d = null != s ? `https://${s}${r}` : location.protocol + a + r,
        c = { size: (0, tw.kr)(500 * (0, tw.mZ)()) };
    return (
        "jpg" === i && (c.quality = "lossless"), "webp" === i && n && (c.animated = !0), (d += `?${tT.stringify(c)}`)
    );
}
var tL = l(868602),
    tM = l(445187);
function tU(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, width: d, height: c, className: u, style: o } = e,
        m = s.useMemo(
            () => (0, a.H)({ width: d, height: c, intrinsicWidth: 288, intrinsicHeight: 192, style: o }),
            [d, c, o],
        );
    return (0, i.jsx)("img", {
        style: m,
        src: "https://cdn.discordapp.com/assets/content/d561fd91d87017743133e6f7c82388345a8938aa2434a28cc42077d126076514.svg",
        className: (0, a.Z)(u),
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
var tG = l(770178),
    tP = l(104171),
    tO = l(889227),
    tB = l(427262),
    tW = l(950305),
    tz = l(409626),
    tH = l(692969),
    tF = l(788593),
    tK = l(948852),
    tq = l(365611);
function tY(e) {
    let { totalUsers: t, gameName: l } = e,
        n = N.intl.formatToPlainString(el.default["XaT+x0"], { count: t, gameName: l });
    return (0, i.jsxs)("div", {
        className: tK.Fk,
        role: "img",
        "aria-label": n,
        children: [
            (0, i.jsx)(tW.UserIcon, {
                size: "custom",
                width: 14,
                height: 14,
                color: c.A.colors.ICON_SUBTLE,
                "aria-hidden": !0,
            }),
            (0, i.jsx)(A.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
        ],
    });
}
function t$(e) {
    let { entry: t, games: l, onClick: n } = e,
        { name: s, coverUrl: a, isLoading: r } = eo(l, t.application_id),
        d = (0, tH.A)({
            location: "PopularGamesGameCard",
            applicationId: t.application_id,
            source: tz.GameProfileSources.GuildSpacePopularGames,
            trackEntryPointImpression: !0,
        }),
        c = null != d;
    if (r)
        return (0, i.jsx)("div", {
            className: tK.Nr,
            role: "listitem",
            children: (0, i.jsx)("div", { className: tq.mD }),
        });
    let u = (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.m, {
                text: s,
                ariaHidden: !0,
                children: (0, i.jsx)("div", {
                    className: j()(tq.PY, { [tq.vk]: c, [tq.iL]: c && null != a }),
                    children: (0, i.jsx)(tF.R, { imageSrc: a, gameName: s }),
                }),
            }),
            (0, i.jsx)(A.E, { variant: "text-sm/semibold", color: "text-default", lineClamp: 1, children: s }),
        ],
    });
    return (0, i.jsxs)("div", {
        className: tK.Nr,
        role: "listitem",
        children: [
            c
                ? (0, i.jsx)(L.D, {
                      className: j()(tK.LO, tK.vk),
                      onClick: () => {
                          (d(), n());
                      },
                      "aria-label": N.intl.formatToPlainString(N.t["8QLQB+"], { gameName: s }),
                      children: u,
                  })
                : (0, i.jsx)("div", { className: tK.LO, children: u }),
            (0, i.jsx)(tY, { totalUsers: t.total_users, gameName: s }),
        ],
    });
}
function tV(e) {
    return 0 === e.games.length || e.total_users < 3;
}
function tQ(e) {
    return tV(e) ? "empty_state" : "regular";
}
l(347661);
var tZ = l(57129),
    tX = l(560328);
function tJ(e) {
    let { guildId: t, requirement: l, onClick: n } = e;
    return (0, i.jsx)(y, {
        className: tX.p$,
        illustration: tU,
        title: N.intl.string(el.default.ULK65a),
        body: N.intl.format(null != l ? el.default.JDAHQV : el.default.LeSGal, { memberCount: 3 }),
        action:
            null != l
                ? (0, i.jsx)(W.$, {
                      variant: "secondary",
                      size: "sm",
                      text: N.intl.string(el.default.A4ZMJL),
                      onClick: () => {
                          (n(), eA(t, l, N.intl.string(el.default.e7pD5m)));
                      },
                  })
                : null,
    });
}
function t0(e) {
    let { guildId: t, requirement: l, onClick: n } = e;
    return (0, i.jsxs)("div", {
        className: tX.UX,
        children: [
            (0, i.jsxs)("div", {
                className: tX.tD,
                children: [
                    (0, i.jsx)(E.D, {
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        lineClamp: 1,
                        children: N.intl.string(tZ.default.WhdCGP),
                    }),
                    (0, i.jsx)(A.E, {
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        lineClamp: 2,
                        children:
                            l === Q.kG.ACTIVITY_SHARING
                                ? N.intl.string(el.default.wyK5KO)
                                : N.intl.string(el.default.uQOR1j),
                    }),
                ],
            }),
            (0, i.jsx)(W.$, {
                variant: "secondary",
                size: "sm",
                text: N.intl.string(el.default.fMbgeZ),
                onClick: () => {
                    (n(), eA(t, l, N.intl.string(el.default.e7pD5m)));
                },
            }),
        ],
    });
}
function t1(e) {
    let { guildId: t, memberIds: l, totalUsers: n, totalGames: s, isCompact: a } = e,
        r = a ? 2 : 4,
        d = (0, R.yK)(
            [K.default],
            () =>
                l
                    .map((e) => K.default.getUser(e))
                    .filter(ed.Vq)
                    .slice(0, r),
            [l, r],
        ),
        c = n - d.length;
    return (0, i.jsxs)("div", {
        className: tX.qr,
        children: [
            (0, i.jsx)(A.E, {
                className: tX.z,
                variant: "text-xs/normal",
                color: "text-muted",
                lineClamp: 1,
                children: N.intl.format(el.default.ED2GDQ, { memberCount: n, gameCount: s }),
            }),
            d.length > 0 &&
                (0, i.jsx)("div", {
                    className: tX.WM,
                    children: (0, i.jsx)(tP.Ay, {
                        users: d,
                        guildId: t,
                        size: tP.DN.SIZE_24,
                        max: d.length,
                        renderUser: function (e) {
                            if (!(e instanceof tO.A)) return null;
                            let l = et.Ay.getNickname(t, void 0, e) ?? tB.Ay.getName(e);
                            return (0, i.jsx)(m.m, {
                                text: l,
                                ariaHidden: !0,
                                children: (0, i.jsx)("span", {
                                    role: "img",
                                    "aria-label": l,
                                    children: (0, i.jsx)(G.eu, {
                                        src: e.getAvatarURL(t, (0, P.FT)(P._3.SIZE_24)),
                                        size: P._3.SIZE_24,
                                        "aria-hidden": !0,
                                    }),
                                }),
                            });
                        },
                        count: n,
                        hideMoreUsers: c <= 0,
                        renderMoreUsers: () =>
                            (0, i.jsx)("span", {
                                className: tX.ju,
                                children: (0, i.jsx)(A.E, {
                                    tag: "span",
                                    variant: "text-xs/semibold",
                                    color: "text-subtle",
                                    children: N.intl.formatToPlainString(el.default.G5PLYW, { count: c }),
                                }),
                            }),
                    }),
                }),
        ],
    });
}
function t2(e) {
    let { guildId: t, data: l, title: n, column: a, disabled: r } = e,
        {
            ref: d,
            visibleCount: c,
            isCompact: u,
        } = (function () {
            let e = s.useRef(null),
                [t, l] = s.useState({ visibleCount: 5, isCompact: !1 }),
                n = s.useCallback((e) => {
                    let { width: t } = e.contentRect,
                        n = Math.max(1, Math.min(5, Math.floor((t - 32 + 12) / 108))),
                        i = t < 480;
                    l((e) => (e.visibleCount === n && e.isCompact === i ? e : { visibleCount: n, isCompact: i }));
                }, []);
            return ((0, tG.g)(e, n, [], { fireOnMount: !0 }), { ref: e, ...t });
        })(),
        { requirement: o } = (0, Q.T4)(t),
        m = tV(l),
        x = m ? [] : l.user_ids;
    (0, z.k6)(t, x);
    let f = s.useMemo(() => l.games.map((e) => e.application_id), [l.games]),
        h = eu(f),
        p = s.useMemo(() => f.map((e) => h.get(e)?.coverUrl).find(ed.Vq) ?? null, [h, f]),
        j = s.useMemo(() => ({ "--custom-popular-games-columns": c }), [c]),
        v = s.useCallback(
            (e) => {
                r ||
                    g.default.track(te.HAw.POPULAR_GAMES_CLICK, {
                        location: e,
                        guild_id: t,
                        popular_games_state: tQ(l),
                        popular_games_view: k({ expanded: !1, column: a }),
                    });
            },
            [r, t, l, a],
        ),
        _ = null;
    return (
        (_ = m
            ? (0, i.jsx)(tJ, { guildId: t, requirement: o, onClick: () => v("activity_sharing") })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsxs)("div", {
                          className: tX.Qs,
                          children: [
                              null != p
                                  ? (0, i.jsx)("div", {
                                        className: tX.G,
                                        children: (0, i.jsx)("img", { className: tX.LZ, src: p, alt: "" }),
                                    })
                                  : null,
                              (0, i.jsx)("div", {
                                  className: tX.ag,
                                  role: "list",
                                  "aria-label": n,
                                  style: j,
                                  children: l.games
                                      .slice(0, c)
                                      .map((e) =>
                                          (0, i.jsx)(
                                              t$,
                                              { entry: e, games: h, onClick: () => v("game") },
                                              e.application_id,
                                          ),
                                      ),
                              }),
                          ],
                      }),
                      (0, i.jsxs)("div", {
                          className: tX.sQ,
                          children: [
                              null != o &&
                                  (0, i.jsx)(t0, { guildId: t, requirement: o, onClick: () => v("activity_sharing") }),
                              (0, i.jsx)(t1, {
                                  guildId: t,
                                  memberIds: x,
                                  totalUsers: l.total_users,
                                  totalGames: l.total_games,
                                  isCompact: u,
                              }),
                          ],
                      }),
                  ],
              })),
        (0, i.jsx)("div", { className: tX.rf, ref: d, children: _ })
    );
}
function t6(e) {
    return e.default_title ?? N.intl.string(el.default.GZsvDx);
}
var t3 = l(612324),
    t4 = l(650583),
    t8 = l(684343);
function t7(e) {
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
                    case t4.dh.ARROW_RIGHT:
                    case t4.dh.ARROW_DOWN:
                        t = (s + 1) % i.length;
                        break;
                    case t4.dh.ARROW_LEFT:
                    case t4.dh.ARROW_UP:
                        t = (s - 1 + i.length) % i.length;
                        break;
                    case t4.dh.HOME:
                        t = 0;
                        break;
                    case t4.dh.END:
                        t = i.length - 1;
                        break;
                    default:
                        return;
                }
                (e.preventDefault(), i[t]?.focus());
            }
        }, []);
    return (0, i.jsx)("div", {
        className: t8.vR,
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
                    className: t8.Mf,
                    "aria-selected": t,
                    "aria-controls": a,
                    tabIndex: t ? 0 : -1,
                    onClick: () => d(e.id),
                    onKeyDown: c,
                    children: (0, i.jsx)(A.E, {
                        className: t8.Pf,
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
var t5 = (((n = {}).TOP_SONGS = "top_songs"), (n.TOP_ARTISTS = "top_artists"), (n.TOP_LISTENERS = "top_listeners"), n);
let t9 = ["top_songs", "top_artists", "top_listeners"];
function le(e) {
    return 1 > e.ranked_songs.reduce((e, t) => e + t.plays, 0);
}
function lt(e) {
    return e.top_listeners.length < 2;
}
function ll(e, t) {
    return le(e) || ("top_listeners" === t && lt(e)) ? "empty_state" : "populated";
}
function ln(e) {
    return e ? "compact" : "regular";
}
function li(e) {
    switch (e) {
        case "top_songs":
            return N.intl.string(el.default.KgeEtx);
        case "top_artists":
            return N.intl.string(el.default.RYxWTS);
        case "top_listeners":
            return N.intl.string(el.default.KO73KB);
    }
}
function ls(e, t) {
    return `popular-music-tab-${e}-${t}`;
}
function la(e) {
    return `popular-music-panel-${e}`;
}
var lr = l(196765);
let ld = { view: "top_songs", isCompact: !1, canShowEmbed: !1, selectedTrackId: null },
    lc = (0, lr.v)(() => ({ byWidgetId: {} }));
function lu(e, t) {
    lc.setState((l) => {
        let n = l.byWidgetId[e] ?? ld;
        return { byWidgetId: { ...l.byWidgetId, [e]: { ...n, ...t } } };
    });
}
function lo(e) {
    return lc((t) => t.byWidgetId[e]?.view ?? ld.view);
}
function lm(e) {
    return lc((t) => t.byWidgetId[e]?.isCompact ?? ld.isCompact);
}
function lx(e) {
    return lc((t) => t.byWidgetId[e]?.selectedTrackId ?? ld.selectedTrackId);
}
function lf(e) {
    let { guildId: t, data: l, view: n, isCompact: i, location: s } = e;
    g.default.track(te.HAw.POPULAR_MUSIC_CLICK, {
        location: s,
        guild_id: t,
        popular_music_state: null != l ? ll(l, n) : null,
        popular_music_view: n,
        popular_music_layout: ln(i),
    });
}
function lg(e) {
    let { guildId: t, widgetId: l, data: n } = e,
        i = lo(l),
        a = lm(l);
    return s.useCallback((e) => lf({ guildId: t, data: n, view: i, isCompact: a, location: e }), [t, n, i, a]);
}
function lh(e) {
    let { guildId: t, widgetId: l, data: n, length: i, isAtEnd: a, disabled: r = !1 } = e,
        d = lo(l),
        c = lm(l),
        u = null != n ? ll(n, d) : null,
        o = ln(c),
        m = "empty_state" === u,
        x = s.useRef(null),
        f = `${t}:${i}:${u}:${d}:${o}`,
        h = s.useCallback(() => {
            x.current !== f &&
                ((x.current = f),
                g.default.track(te.HAw.POPULAR_MUSIC_END_IMPRESSION, {
                    guild_id: t,
                    popular_music_length: m ? 0 : i,
                    popular_music_state: u,
                    popular_music_view: d,
                    popular_music_layout: o,
                }));
        }, [t, f, m, i, u, d, o]);
    s.useEffect(() => {
        !r && null != u && (m || a) && h();
    }, [r, u, m, a, h]);
}
function lp(e) {
    let [t, l] = s.useState(null),
        n = s.useCallback(
            (t) => {
                l((l) => (l?.contentKey === e && l.isAtEnd === t ? l : { contentKey: e, isAtEnd: t }));
            },
            [e],
        );
    return [t?.contentKey === e && t.isAtEnd, n];
}
var lj = l(59652),
    lv = l(991308),
    l_ = l(28863),
    lA = l(148166),
    lb = l(427209),
    lE = l(294454),
    lN = l(605810);
function lI(e) {
    let { target: t, tabIndex: n, onClick: s } = e;
    return (0, i.jsx)("div", {
        className: lN.ql,
        children: (0, i.jsx)(m.m, {
            text: N.intl.string(N.t.RDE0Sc),
            ariaHidden: !0,
            children: (0, i.jsx)(x.K, {
                icon: lb.A,
                size: "sm",
                variant: "overlay-secondary",
                tabIndex: n,
                "aria-label": N.intl.string(N.t.Ej3B3Y),
                onClick: () => {
                    (s(),
                        (0, e_.openModalLazy)(
                            async () => {
                                let { default: e } = await Promise.all([
                                    l.e("325522"),
                                    l.e("401317"),
                                    l.e("790340"),
                                    l.e("147119"),
                                    l.e("205035"),
                                    l.e("425292"),
                                    l.e("209994"),
                                    l.e("457428"),
                                    l.e("552653"),
                                    l.e("311580"),
                                    l.e("174554"),
                                    l.e("116815"),
                                    l.e("813057"),
                                    l.e("6050"),
                                    l.e("230029"),
                                    l.e("891089"),
                                    l.e("861973"),
                                    l.e("196063"),
                                    l.e("392028"),
                                    l.e("124054"),
                                    l.e("441674"),
                                    l.e("152862"),
                                    l.e("148326"),
                                    l.e("148729"),
                                    l.e("650195"),
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
                                    l.e("916885"),
                                    l.e("272804"),
                                    l.e("915170"),
                                    l.e("449933"),
                                    l.e("405714"),
                                    l.e("360732"),
                                    l.e("352456"),
                                    l.e("864875"),
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
                                    l.e("260009"),
                                    l.e("691398"),
                                    l.e("266201"),
                                    l.e("752704"),
                                    l.e("56606"),
                                    l.e("206516"),
                                    l.e("163466"),
                                    l.e("234017"),
                                    l.e("40791"),
                                    l.e("358404"),
                                    l.e("996907"),
                                    l.e("831130"),
                                    l.e("377989"),
                                    l.e("529787"),
                                    l.e("358931"),
                                    l.e("880150"),
                                    l.e("168248"),
                                    l.e("490743"),
                                    l.e("245420"),
                                    l.e("216870"),
                                    l.e("89100"),
                                    l.e("340363"),
                                    l.e("459086"),
                                    l.e("720210"),
                                    l.e("601152"),
                                    l.e("319714"),
                                    l.e("331249"),
                                    l.e("267732"),
                                    l.e("686889"),
                                    l.e("560570"),
                                    l.e("896691"),
                                    l.e("779367"),
                                    l.e("992956"),
                                    l.e("7452"),
                                    l.e("60002"),
                                    l.e("189423"),
                                    l.e("592000"),
                                    l.e("524434"),
                                    l.e("933947"),
                                    l.e("866475"),
                                    l.e("56347"),
                                    l.e("70690"),
                                    l.e("424199"),
                                    l.e("587618"),
                                    l.e("645499"),
                                    l.e("726391"),
                                    l.e("342551"),
                                    l.e("125729"),
                                    l.e("162512"),
                                    l.e("695765"),
                                    l.e("777489"),
                                    l.e("188941"),
                                    l.e("349619"),
                                    l.e("264236"),
                                    l.e("543039"),
                                    l.e("481647"),
                                    l.e("398125"),
                                    l.e("221825"),
                                    l.e("930758"),
                                    l.e("244560"),
                                    l.e("253729"),
                                    l.e("593600"),
                                    l.e("776602"),
                                    l.e("266900"),
                                    l.e("707826"),
                                    l.e("948804"),
                                    l.e("205596"),
                                    l.e("199999"),
                                    l.e("828111"),
                                    l.e("890027"),
                                    l.e("140402"),
                                    l.e("809915"),
                                    l.e("721690"),
                                    l.e("812310"),
                                    l.e("361626"),
                                    l.e("646506"),
                                    l.e("445124"),
                                    l.e("445421"),
                                    l.e("136022"),
                                    l.e("832823"),
                                    l.e("761935"),
                                    l.e("511527"),
                                    l.e("763070"),
                                    l.e("776195"),
                                    l.e("87306"),
                                    l.e("502018"),
                                    l.e("955184"),
                                    l.e("832817"),
                                    l.e("425544"),
                                    l.e("416143"),
                                    l.e("249366"),
                                    l.e("728633"),
                                    l.e("844695"),
                                    l.e("628439"),
                                    l.e("756148"),
                                    l.e("539620"),
                                    l.e("225990"),
                                    l.e("183534"),
                                    l.e("935715"),
                                    l.e("248329"),
                                    l.e("234236"),
                                    l.e("276863"),
                                    l.e("92124"),
                                    l.e("165595"),
                                    l.e("401590"),
                                    l.e("498215"),
                                    l.e("631608"),
                                    l.e("844780"),
                                    l.e("988077"),
                                    l.e("776750"),
                                    l.e("123353"),
                                    l.e("561216"),
                                    l.e("313681"),
                                    l.e("593176"),
                                    l.e("552712"),
                                    l.e("829177"),
                                    l.e("592028"),
                                    l.e("106943"),
                                    l.e("133902"),
                                    l.e("76705"),
                                    l.e("232551"),
                                    l.e("892340"),
                                    l.e("425906"),
                                    l.e("14962"),
                                    l.e("123216"),
                                    l.e("770291"),
                                    l.e("588940"),
                                    l.e("643612"),
                                    l.e("398793"),
                                    l.e("836545"),
                                    l.e("770697"),
                                    l.e("147786"),
                                    l.e("854461"),
                                    l.e("790244"),
                                    l.e("482861"),
                                    l.e("784103"),
                                    l.e("592731"),
                                    l.e("53374"),
                                    l.e("256616"),
                                    l.e("273232"),
                                    l.e("894747"),
                                    l.e("858514"),
                                    l.e("344265"),
                                    l.e("121435"),
                                    l.e("716092"),
                                    l.e("784041"),
                                    l.e("240511"),
                                    l.e("817852"),
                                    l.e("718573"),
                                    l.e("133179"),
                                    l.e("614784"),
                                    l.e("317225"),
                                    l.e("346102"),
                                    l.e("96588"),
                                    l.e("486792"),
                                    l.e("377766"),
                                    l.e("463095"),
                                    l.e("334127"),
                                    l.e("537894"),
                                    l.e("128534"),
                                    l.e("799657"),
                                    l.e("810034"),
                                    l.e("124060"),
                                    l.e("238412"),
                                    l.e("146566"),
                                    l.e("8563"),
                                    l.e("444376"),
                                    l.e("499941"),
                                    l.e("32661"),
                                    l.e("509793"),
                                    l.e("831145"),
                                    l.e("187856"),
                                    l.e("170653"),
                                    l.e("696123"),
                                    l.e("400954"),
                                    l.e("610449"),
                                    l.e("32781"),
                                    l.e("912773"),
                                    l.e("693832"),
                                    l.e("488990"),
                                    l.e("577084"),
                                    l.e("332470"),
                                    l.e("696374"),
                                    l.e("710638"),
                                    l.e("193158"),
                                    l.e("318546"),
                                    l.e("843719"),
                                    l.e("556967"),
                                    l.e("846523"),
                                    l.e("919307"),
                                    l.e("565617"),
                                    l.e("73500"),
                                    l.e("662355"),
                                    l.e("418943"),
                                    l.e("455924"),
                                    l.e("41991"),
                                    l.e("959134"),
                                    l.e("872648"),
                                    l.e("174347"),
                                    l.e("565065"),
                                    l.e("834386"),
                                    l.e("784727"),
                                    l.e("976148"),
                                    l.e("130674"),
                                    l.e("622825"),
                                    l.e("959669"),
                                    l.e("220518"),
                                    l.e("371482"),
                                    l.e("875842"),
                                    l.e("126780"),
                                    l.e("360781"),
                                    l.e("88160"),
                                    l.e("209518"),
                                    l.e("631825"),
                                    l.e("851243"),
                                    l.e("748015"),
                                    l.e("237834"),
                                    l.e("952577"),
                                    l.e("807771"),
                                    l.e("338516"),
                                    l.e("478476"),
                                    l.e("496715"),
                                    l.e("115754"),
                                    l.e("278424"),
                                    l.e("744385"),
                                    l.e("59413"),
                                    l.e("29664"),
                                    l.e("793394"),
                                    l.e("546745"),
                                    l.e("250478"),
                                    l.e("192440"),
                                    l.e("863076"),
                                    l.e("462276"),
                                    l.e("680986"),
                                    l.e("90373"),
                                    l.e("979630"),
                                    l.e("293697"),
                                    l.e("568980"),
                                    l.e("168177"),
                                    l.e("236946"),
                                    l.e("935948"),
                                    l.e("692639"),
                                    l.e("890480"),
                                    l.e("440963"),
                                    l.e("766031"),
                                    l.e("394317"),
                                    l.e("304329"),
                                    l.e("84755"),
                                    l.e("256831"),
                                ]).then(l.bind(l, 99266));
                                return function (l) {
                                    return (0, i.jsx)(e, { ...l, target: t });
                                };
                            },
                            { stackingBehavior: "stack", modalKey: lE.aU },
                        ));
                },
            }),
        }),
    });
}
var lC = l(272984);
function lS(e) {
    let { artist: t, itemProps: l, cardRef: n, onClick: a, onForwardClick: r } = e,
        d = null != t.artist_image_hash ? lC.RQ.IMAGE(t.artist_image_hash) : null,
        c = s.useMemo(
            () => ({
                kind: "artist",
                shareUrl: lC.RQ.WEB_OPEN(lC.M0.ARTIST, t.artist_external_id),
                title: t.artist_name ?? t.artist_external_id,
                subtitle: null,
                imageUrl: d,
            }),
            [t.artist_external_id, t.artist_name, d],
        ),
        u = s.useMemo(() => lj.V.getDefaultLinkInterceptor(c.shareUrl), [c.shareUrl]),
        o = s.useCallback(
            (e) => {
                (a(), u?.(e));
            },
            [u, a],
        ),
        m = (0, i.jsx)(lA.R, { src: d, isCircular: !0, FallbackIcon: lv.I });
    return null == t.artist_name
        ? (0, i.jsx)("div", {
              className: lN.Nr,
              ref: n,
              children: (0, i.jsx)("div", { ...l, className: lN.MT, children: m }),
          })
        : (0, i.jsxs)("div", {
              className: lN.Nr,
              ref: n,
              children: [
                  (0, i.jsxs)(l_.Anchor, {
                      ...l,
                      className: lN.MT,
                      href: c.shareUrl,
                      useDefaultUnderlineStyles: !1,
                      onClick: o,
                      children: [
                          m,
                          (0, i.jsx)("span", {
                              className: lN.Qq,
                              children: (0, i.jsx)(A.E, {
                                  className: lN.DD,
                                  tag: "span",
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  lineClamp: 2,
                                  children: t.artist_name,
                              }),
                          }),
                      ],
                  }),
                  (0, i.jsx)(lI, { target: c, tabIndex: l.tabIndex, onClick: r }),
              ],
          });
}
var ly = l(872351),
    lk = l(708988),
    lT = l(628137);
let lw = "none",
    lR = (e, t) => (0, i.jsx)(A.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: e }, t);
function lD(e) {
    return e;
}
function lL(e) {
    return e?.direction ?? lw;
}
function lM(e) {
    if (null == e) return null;
    let t = Math.round(Math.abs(e));
    return 0 === t
        ? null
        : { direction: e > 0 ? "up" : "down", label: N.intl.formatToPlainString(el.default["h+LUpk"], { percent: t }) };
}
function lU(e) {
    return lM(null != e.plays_trend_pct ? 100 * e.plays_trend_pct : null);
}
var lG = l(633099);
function lP(e) {
    let { trend: t } = e,
        l = "up" === t.direction ? ly.z : lk.M;
    return (0, i.jsxs)("span", {
        className: lG.GW,
        children: [
            (0, i.jsx)(l, {
                className: j()({ [lG.$J]: "up" === t.direction, [lG.KW]: "down" === t.direction }),
                size: "xxs",
                color: "currentColor",
                "aria-hidden": !0,
            }),
            (0, i.jsx)(A.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: t.label }),
        ],
    });
}
function lO(e) {
    var t;
    let { guildId: l, song: n } = e,
        a = (0, R.yK)(
            [eK.A],
            () => (n.facepile_user_ids ?? []).filter((e) => !eK.A.isBlockedOrIgnored(e)).slice(0, 3),
            [n.facepile_user_ids],
        );
    (0, z.k6)(l, a);
    let r = (0, R.yK)([K.default], () => a.map((e) => K.default.getUser(e)), [a]),
        d = s.useMemo(() => r.filter((e) => null != e), [r]);
    if (0 === d.length) return null;
    let c = n.unique_listeners - d.length;
    return (0, i.jsx)("span", {
        className: lG.WM,
        role: "group",
        "aria-label":
            ((t = n.unique_listeners),
            N.intl.formatToPlainString(el.default.AzIhRB, { count: t, trend: lw, countHook: lD })),
        children: (0, i.jsx)(tP.Ay, {
            users: d,
            guildId: l,
            size: tP.DN.SIZE_24,
            max: d.length,
            count: n.unique_listeners,
            hideMoreUsers: c <= 0,
            renderMoreUsers: () =>
                (0, i.jsx)("span", {
                    className: lG.ju,
                    children: (0, i.jsx)(A.E, {
                        tag: "span",
                        variant: "text-sm/semibold",
                        color: "text-subtle",
                        children: N.intl.formatToPlainString(el.default.bFIg0R, { count: c }),
                    }),
                }),
        }),
    });
}
function lB(e) {
    let { trackExternalId: t } = e,
        [l, n] = s.useState(!1);
    return (0, i.jsxs)("div", {
        className: lG.aF,
        children: [
            (0, i.jsx)(lT.A, {
                resourceType: lC.M0.TRACK,
                resourceId: t,
                onLoad: () => n(!0),
                allowEncryptedMedia: !0,
            }),
            !l && (0, i.jsx)("div", { className: lG.Ls, "aria-hidden": !0 }),
        ],
    });
}
function lW(e) {
    let { isCompact: t, headline: l, detail: n, trend: s } = e;
    return null == l && null == n && null == s
        ? null
        : (0, i.jsx)("div", {
              className: j()(lG.yp, { [lG.Fl]: t }),
              children: (0, i.jsxs)("div", {
                  className: lG.QD,
                  children: [
                      null != l &&
                          (0, i.jsx)(A.E, {
                              tag: "div",
                              variant: "heading-xl/semibold",
                              color: "text-default",
                              children: l,
                          }),
                      (0, i.jsxs)("div", {
                          className: lG._0,
                          children: [
                              null != n &&
                                  (0, i.jsx)(A.E, {
                                      tag: "span",
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: n,
                                  }),
                              null != s && (0, i.jsx)(lP, { trend: s }),
                          ],
                      }),
                  ],
              }),
          });
}
function lz(e) {
    var t;
    let { guildId: l, isCompact: n, canShowEmbed: s, song: a } = e,
        r = lM(a.plays_change_percent);
    return (0, i.jsxs)("div", {
        className: j()(lG.yp, { [lG.Fl]: n }),
        children: [
            s && (0, i.jsx)(lB, { trackExternalId: a.track_external_id }, a.track_external_id),
            (0, i.jsxs)("div", {
                className: j()(lG.QD, lG.rk),
                children: [
                    (0, i.jsx)(lO, { guildId: l, song: a }),
                    (0, i.jsxs)("div", {
                        className: lG._0,
                        children: [
                            (0, i.jsx)(A.E, {
                                tag: "span",
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                children:
                                    ((t = a.plays),
                                    N.intl.format(el.default["7hHUIS"], { count: t, trend: lL(r), countHook: lR })),
                            }),
                            null != r && (0, i.jsx)(lP, { trend: r }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var lH = l(197935),
    lF = l(915734);
function lK(e) {
    let { label: t, items: l, isCompact: n, getItemKey: a, renderItem: r, onScrollEndChange: d } = e,
        [c, u] = s.useState(null),
        o = l.length - 1;
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
    let m = s.useCallback((e, t, l) => r(e, t, l === o ? u : void 0), [r, o]);
    return (0, i.jsx)("div", {
        className: j()(lF.Dk, { [lF.yI]: n }),
        children: (0, i.jsx)(lH.A, {
            items: l,
            getItemKey: a,
            renderItem: m,
            gap: 8,
            edgeFade: 40,
            actionsClassName: lF.o1,
            "aria-label": t,
        }),
    });
}
var lq = l(742452);
function lY(e) {
    return e.artist_external_id;
}
function l$(e) {
    let { guildId: t, widgetId: l, isCompact: n, data: a } = e,
        [r, d] = lp(a.ranked_artists.length),
        c = lg({ guildId: t, widgetId: l, data: a });
    lh({ guildId: t, widgetId: l, data: a, length: a.ranked_artists.length, isAtEnd: r });
    let u = s.useCallback(() => c("artist"), [c]),
        o = s.useCallback(() => c("forward"), [c]),
        m = s.useCallback(
            (e, t, l) => (0, i.jsx)(lS, { artist: e, itemProps: t, cardRef: l, onClick: u, onForwardClick: o }),
            [u, o],
        );
    if (0 === a.ranked_artists.length) return null;
    let x = lU(a);
    return (0, i.jsxs)("div", {
        className: lq.U,
        children: [
            (0, i.jsx)(lK, {
                label: li(t5.TOP_ARTISTS),
                items: a.ranked_artists,
                isCompact: n,
                getItemKey: lY,
                renderItem: m,
                onScrollEndChange: d,
            }),
            (0, i.jsx)(lW, {
                isCompact: n,
                headline:
                    a.distinct_songs < 1
                        ? null
                        : N.intl.formatToPlainString(el.default.W8etVA, { count: a.distinct_songs }),
                detail:
                    a.distinct_listeners < 1 || a.distinct_artists < 1
                        ? null
                        : N.intl.format(el.default.yGqf0D, {
                              memberCount: a.distinct_listeners,
                              artistCount: a.distinct_artists,
                              trend: lL(x),
                              memberCountHook: lR,
                              artistCountHook: lR,
                          }),
                trend: x,
            }),
        ],
    });
}
var lV = l(803613),
    lQ = l(682348),
    lZ = l(73152),
    lX = l(280911);
function lJ(e) {
    let { guildId: t, isCompact: l } = e,
        n = (0, R.bG)([K.default], () => K.default.getCurrentUser()),
        s = (0, R.bG)([ee.Ay], () => (null != n ? ee.Ay.getMember(t, n.id) : null)),
        a = (0, J.gn)(t, n?.id, s?.colorStrings ?? null),
        r = et.Ay.useName(t, void 0, n);
    return (0, i.jsxs)("div", {
        className: lX.D_,
        children: [
            (0, i.jsxs)("div", {
                className: lX.FI,
                "aria-hidden": !0,
                children: [
                    !l &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("span", { className: lX.eu, children: (0, i.jsx)(lV.D, { size: "sm" }) }),
                                (0, i.jsxs)("span", {
                                    className: lX.r$,
                                    children: [
                                        (0, i.jsx)("span", { className: lX.Om }),
                                        (0, i.jsx)("span", { className: lX.Om }),
                                        (0, i.jsx)("span", { className: lX.Om }),
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
                className: lX.Qq,
                children: [
                    (0, i.jsx)(E.D, {
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        lineClamp: 1,
                        children: (0, i.jsx)(O.g, {
                            name: N.intl.formatToPlainString(el.default.subXXA, { name: r }),
                            colorString: s?.colorString ?? null,
                            colorStrings: a,
                        }),
                    }),
                    (0, i.jsx)(A.E, {
                        variant: "text-xs/medium",
                        color: "text-strong",
                        lineClamp: l ? 2 : 1,
                        children: N.intl.string(el.default.y1neEe),
                    }),
                ],
            }),
        ],
    });
}
function l0(e) {
    let { widgetName: t, isCompact: l } = e;
    return (0, i.jsxs)("div", {
        className: lX.D_,
        children: [
            !l &&
                (0, i.jsx)("span", {
                    className: lX.eu,
                    "aria-hidden": !0,
                    children: (0, i.jsx)(lQ._, { size: "sm", color: c.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
                }),
            (0, i.jsxs)("div", {
                className: lX.Qq,
                children: [
                    (0, i.jsx)(E.D, {
                        variant: "heading-sm/semibold",
                        color: "text-strong",
                        lineClamp: 1,
                        children: N.intl.string(tZ.default.WhdCGP),
                    }),
                    (0, i.jsx)(A.E, {
                        variant: "text-xs/medium",
                        color: "text-strong",
                        lineClamp: l ? 2 : 1,
                        children: N.intl.formatToPlainString(el.default["49Jv0I"], { widgetName: t }),
                    }),
                ],
            }),
        ],
    });
}
function l1(e) {
    let { guildId: t, widgetName: n, isCompact: s, isSpotifyConnected: a, onClick: r } = e;
    return (0, i.jsxs)("div", {
        className: lX.UX,
        children: [
            a ? (0, i.jsx)(l0, { widgetName: n, isCompact: s }) : (0, i.jsx)(lJ, { guildId: t, isCompact: s }),
            (0, i.jsx)(W.$, {
                variant: "secondary",
                size: "sm",
                icon: a ? void 0 : lZ.E,
                text: a ? N.intl.string(N.t.KY0ilj) : N.intl.string(el.default.jB1fWC),
                onClick: () => {
                    (r(),
                        (0, e_.openModalLazy)(
                            async () => {
                                let { default: e } = await Promise.all([
                                    l.e("120239"),
                                    l.e("955410"),
                                    l.e("518264"),
                                    l.e("5257"),
                                    l.e("6050"),
                                    l.e("230029"),
                                    l.e("488926"),
                                    l.e("352456"),
                                    l.e("203112"),
                                    l.e("13566"),
                                    l.e("348567"),
                                    l.e("264236"),
                                    l.e("273232"),
                                    l.e("240511"),
                                    l.e("463095"),
                                    l.e("959134"),
                                    l.e("371482"),
                                    l.e("16954"),
                                    l.e("610943"),
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
function l2(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, width: d, height: c, className: u, style: o } = e,
        m = s.useMemo(
            () => (0, a.H)({ width: d, height: c, intrinsicWidth: 288, intrinsicHeight: 162, style: o }),
            [d, c, o],
        );
    return (0, i.jsx)("img", {
        style: m,
        src: "https://cdn.discordapp.com/assets/content/e5cd35ca79f49d81161fc468618bf0291bd91c44fbb5190819cd6dffcf71fef0.svg",
        className: (0, a.Z)(u),
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
var l6 = l(625903),
    l3 = l(780964),
    l4 = l(766075),
    l8 = l(30370),
    l7 = l(123894);
function l5(e) {
    let { onSettingsClick: t } = e,
        l = (0, R.bG)([l8.A], () => l8.A.getAccounts().some((e) => e.type === te.fg2.SPOTIFY && e.showActivity));
    return (0, i.jsx)(y, {
        className: l7.w,
        illustration: l2,
        title: N.intl.string(el.default.ULK65a),
        body: N.intl.format(l ? el.default.BLuvck : el.default["Ko3a0+"], { memberCount: 2 }),
        action: l
            ? null
            : (0, i.jsx)(W.$, {
                  variant: "secondary",
                  size: "sm",
                  icon: l6.SettingsIcon,
                  text: N.intl.string(N.t["3D5yo/"]),
                  onClick: () => {
                      (t(), (0, l4.openUserSettings)(l3.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING));
                  },
              }),
    });
}
function l9() {
    return (0, i.jsx)(y, {
        className: l7.w,
        illustration: l2,
        title: N.intl.string(el.default.ULK65a),
        body: N.intl.format(el.default.ZQxU8v, { memberCount: 2 }),
    });
}
var ne = l(109487),
    nt = l(279543);
function nl(e) {
    let { isCompact: t } = e;
    return (0, i.jsxs)("div", {
        className: nt.qr,
        children: [
            (0, i.jsxs)("div", {
                className: nt.Os,
                children: [
                    (0, i.jsx)("span", {
                        className: nt.Kk,
                        children: (0, i.jsx)(M.RefreshIcon, {
                            size: "xxs",
                            color: c.A.colors.ICON_SUBTLE,
                            "aria-hidden": !0,
                        }),
                    }),
                    (0, i.jsx)(A.E, {
                        className: nt.Pf,
                        tag: "span",
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: N.intl.string(el.default["3/DOFo"]),
                    }),
                ],
            }),
            (0, i.jsxs)(l_.Anchor, {
                className: nt.al,
                href: lC.RQ.WEB_HOME,
                "aria-label": N.intl.string(el.default["jUr+wF"]),
                children: [
                    (0, i.jsx)("span", {
                        className: nt.Kk,
                        children: (0, i.jsx)(ne.L, { size: "xs", color: c.A.colors.ICON_STRONG, "aria-hidden": !0 }),
                    }),
                    !t &&
                        (0, i.jsx)(A.E, {
                            className: nt.G2,
                            tag: "span",
                            variant: "text-xs/medium",
                            color: "none",
                            children: N.intl.string(el.default.ZdPp2q),
                        }),
                ],
            }),
        ],
    });
}
var nn = l(860071),
    ni = l(65154),
    ns = l(329177),
    na = l(242226);
function nr(e) {
    var t;
    let {
            guildId: l,
            userId: n,
            listener: s,
            rank: a,
            isCompact: r,
            isCurrentUser: d,
            shouldDimForCurrentUser: u,
            isFloating: o = !1,
            rowRef: m,
            onClick: x,
        } = e,
        f = en(l, n, { showYouSuffix: d }),
        { user: g } = f;
    return null == g
        ? null
        : (0, i.jsxs)("div", {
              ref: m,
              "aria-hidden": o,
              inert: o,
              className: j()(na.nM, { [na.Bh]: d && !o, [na.lR]: u }),
              children: [
                  (0, i.jsx)(nd, { guildId: l, user: g, identity: f, rank: a, listener: s, onClick: x }),
                  null != s &&
                      (0, i.jsxs)("div", {
                          className: j()(na.Mx, { [na.dA]: r }),
                          children: [
                              (0, i.jsx)(ni.S, { size: "xxs", color: c.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                              (0, i.jsx)(A.E, {
                                  variant: "text-sm/medium",
                                  color: "text-strong",
                                  children:
                                      ((t = s.plays), N.intl.formatToPlainString(el.default["7X+3f8"], { count: t })),
                              }),
                          ],
                      }),
                  null != s && !r && (0, i.jsx)(nm, { artists: s.artists, artistCount: s.artist_count ?? null }),
              ],
          });
}
function nd(e) {
    let { guildId: t, user: l, identity: n, rank: a, listener: r, onClick: d } = e,
        u = s.useRef(null),
        o = (0, R.bG)([eK.A], () => (eK.A.isBlocked(l.id) ? "blocked" : eK.A.isIgnored(l.id) ? "ignored" : null), [
            l.id,
        ]),
        m = null != o;
    return (0, i.jsx)(eD.A, {
        targetElementRef: u,
        user: l,
        guildId: t,
        children: (e) =>
            (0, i.jsxs)(L.D, {
                ...e,
                innerRef: u,
                className: na.D_,
                onClick: (t) => {
                    (d(), e.onClick(t));
                },
                children: [
                    null != a &&
                        (0, i.jsx)(U.A, { children: N.intl.formatToPlainString(el.default.I4JiAQ, { rank: a }) }),
                    (0, i.jsxs)("span", {
                        className: na.R3,
                        children: [
                            m
                                ? (0, i.jsx)("span", {
                                      className: na.gt,
                                      children:
                                          "blocked" === o
                                              ? (0, i.jsx)(ew.K, {
                                                    size: "xs",
                                                    color: c.A.colors.ICON_SUBTLE,
                                                    "aria-hidden": !0,
                                                })
                                              : (0, i.jsx)(eR.EyeSlashIcon, {
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
                            1 === a &&
                                (0, i.jsx)("span", {
                                    className: na.ie,
                                    "aria-hidden": !0,
                                    children: (0, i.jsx)(ns.CrownIcon, { size: "xxs", color: "currentColor" }),
                                }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: na.Dc,
                        children: [
                            (0, i.jsx)(E.D, {
                                variant: "heading-sm/semibold",
                                color: m ? "text-subtle" : "text-default",
                                lineClamp: 1,
                                children:
                                    null != o
                                        ? (function (e) {
                                              switch (e) {
                                                  case "blocked":
                                                      return N.intl.string(el.default.I3YOjC);
                                                  case "ignored":
                                                      return N.intl.string(el.default.CfMzwe);
                                              }
                                          })(o)
                                        : (0, i.jsx)(O.g, {
                                              name: n.displayName,
                                              colorString: n.member?.colorString ?? null,
                                              colorStrings: n.roleColorStrings,
                                          }),
                            }),
                            !m && (0, i.jsx)(nu, { listener: r }),
                        ],
                    }),
                ],
            }),
    });
}
function nc(e, t) {
    return (0, i.jsx)(A.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: e }, t);
}
function nu(e) {
    let { listener: t } = e,
        l = t?.latest_track_title;
    if (null == l) return null;
    let n = t?.latest_artist_name;
    return (0, i.jsx)(A.E, {
        variant: "text-xs/medium",
        color: "text-subtle",
        lineClamp: 1,
        children:
            null != n
                ? N.intl.format(el.default.QqaqBg, { trackTitle: l, artistName: n, highlightHook: nc })
                : N.intl.format(el.default.ZMJ8Mt, { trackTitle: l, highlightHook: nc }),
    });
}
function no(e) {
    let { artist: t, notched: l } = e,
        [n, a] = s.useState(!1),
        r = null != t.artist_image_hash ? lC.RQ.IMAGE(t.artist_image_hash) : null;
    return (0, i.jsx)("span", {
        className: na.sG,
        children: (0, i.jsx)(eW.Ay, {
            mask: l ? eW.l8[24] : eW.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null == r || n
                    ? (0, i.jsx)("span", {
                          className: na.Ql,
                          children: (0, i.jsx)(lv.I, { size: "xxs", color: c.A.colors.ICON_SUBTLE }),
                      })
                    : (0, i.jsx)("img", { className: na.v2, src: r, alt: "", loading: "lazy", onError: () => a(!0) }),
        }),
    });
}
function nm(e) {
    let { artists: t, artistCount: l } = e,
        n = t.slice(0, 3),
        s = (l ?? t.length) - n.length;
    return (0, i.jsx)("div", {
        className: na.Rh,
        "aria-hidden": !0,
        children:
            n.length > 0 &&
            (0, i.jsxs)("div", {
                className: na.W$,
                children: [
                    n.map((e, t) =>
                        (0, i.jsx)(
                            no,
                            { artist: e, notched: s > 0 || t !== n.length - 1 },
                            `${e.artist_external_id}-${e.artist_image_hash}`,
                        ),
                    ),
                    s > 0 &&
                        (0, i.jsx)("span", {
                            className: na.sG,
                            children: (0, i.jsx)(eW.Ay, {
                                mask: eW.Ay.Masks.SQUIRCLE,
                                width: 24,
                                height: 24,
                                children: (0, i.jsx)("div", {
                                    className: na.ag,
                                    children: (0, i.jsx)(A.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: N.intl.formatToPlainString(el.default.bFIg0R, { count: s }),
                                    }),
                                }),
                            }),
                        }),
                ],
            }),
    });
}
var nx = l(897130);
function nf(e) {
    let { guildId: t, widgetId: l, isCompact: n, data: a, shouldHideCurrentUser: r, upsell: d } = e,
        c = a.top_listeners,
        u = (0, R.bG)([K.default], () => K.default.getCurrentUser()?.id),
        o = r ? null : u,
        m = c.findIndex((e) => e.user_id === o),
        x = -1 === m ? null : c[m],
        f = s.useMemo(() => c.map((e) => e.user_id), [c]);
    (0, z.k6)(t, f);
    let g = (0, R.bG)([K.default], () => f.reduce((e, t) => (null != K.default.getUser(t) ? e + 1 : e), 0), [f]),
        h = (0, R.bG)(
            [K.default, nn.A],
            () => f.every((e) => null != K.default.getUser(e) || nn.A.isMemberRequestSettled(t, e)),
            [t, f],
        ),
        { scrollerRef: p, scrollerNode: v, userRowRef: _, floatingRowPosition: A } = X(),
        b = (function (e, t) {
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
        })(v, g),
        E = lg({ guildId: t, widgetId: l, data: a }),
        N = s.useCallback(() => E("listener_row"), [E]);
    lh({ guildId: t, widgetId: l, data: a, length: c.length, isAtEnd: b, disabled: !h && !lt(a) });
    let I = null != d,
        C = I ? null : A,
        S = null != C;
    return lt(a)
        ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(l9, {}), d] })
        : (0, i.jsxs)("div", {
              className: nx.SY,
              children: [
                  (0, i.jsxs)(D.d_, {
                      className: j()(nx.p_, { [nx.w]: I }),
                      ref: p,
                      children: [
                          c.map((e, l) => {
                              let s = e.user_id === o;
                              return (0, i.jsx)(
                                  nr,
                                  {
                                      guildId: t,
                                      userId: e.user_id,
                                      listener: e,
                                      rank: l + 1,
                                      isCompact: n,
                                      isCurrentUser: s,
                                      shouldDimForCurrentUser: s && S,
                                      rowRef: s ? _ : void 0,
                                      onClick: N,
                                  },
                                  e.user_id,
                              );
                          }),
                          !I &&
                              null != o &&
                              null == x &&
                              (0, i.jsx)(nr, {
                                  guildId: t,
                                  userId: o,
                                  listener: null,
                                  rank: null,
                                  isCompact: n,
                                  isCurrentUser: !0,
                                  shouldDimForCurrentUser: S,
                                  rowRef: _,
                                  onClick: N,
                              }),
                      ],
                  }),
                  I &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)($, { position: "bottom" }),
                              (0, i.jsx)("div", { className: nx.Kv, children: d }),
                          ],
                      }),
                  null != o &&
                      null != C &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)($, { position: C }),
                              (0, i.jsx)(V, {
                                  position: C,
                                  children: (0, i.jsx)(nr, {
                                      guildId: t,
                                      userId: o,
                                      listener: x,
                                      rank: -1 === m ? null : m + 1,
                                      isCompact: n,
                                      isCurrentUser: !0,
                                      shouldDimForCurrentUser: !1,
                                      isFloating: !0,
                                      onClick: N,
                                  }),
                              }),
                          ],
                      }),
              ],
          });
}
var ng = l(717683);
function nh(e) {
    let { isCompact: t } = e;
    return (0, i.jsxs)("div", {
        className: ng.qV,
        "aria-hidden": !0,
        children: [
            (0, i.jsx)("div", {
                className: j()(ng.Dk, { [ng.yI]: t }),
                children: Array.from({ length: 10 }, (e, t) =>
                    (0, i.jsxs)(
                        "div",
                        {
                            className: ng.Nr,
                            children: [
                                (0, i.jsx)("div", { className: j()(ng.om, ng.xX) }),
                                (0, i.jsxs)("div", {
                                    className: ng.Qq,
                                    children: [
                                        (0, i.jsx)("div", { className: j()(ng.om, ng.DD) }),
                                        (0, i.jsx)("div", { className: j()(ng.om, ng.VA) }),
                                    ],
                                }),
                            ],
                        },
                        t,
                    ),
                ),
            }),
            (0, i.jsxs)("div", {
                className: j()(ng.yp, { [ng.Fl]: t }),
                children: [
                    (0, i.jsx)("div", { className: j()(ng.om, ng.Pl) }),
                    (0, i.jsx)("div", { className: j()(ng.om, ng._0) }),
                ],
            }),
        ],
    });
}
var np = l(450078),
    nj = l(362704);
function nv(e) {
    let { song: t, isSelected: l, onSelect: n, itemProps: a, cardRef: r, onForwardClick: d } = e,
        c = null != t.cover_art_hash ? lC.RQ.IMAGE(t.cover_art_hash) : null,
        u = s.useMemo(
            () => ({
                kind: "song",
                shareUrl: lC.RQ.WEB_OPEN(lC.M0.TRACK, t.track_external_id),
                title: t.track_title ?? t.track_external_id,
                subtitle: t.artist_name,
                imageUrl: c,
            }),
            [t.track_external_id, t.track_title, t.artist_name, c],
        );
    return (0, i.jsxs)("div", {
        className: lN.Nr,
        ref: r,
        children: [
            (0, i.jsxs)("button", {
                ...a,
                type: "button",
                className: j()(lN.MT, { [lN.tY]: l }),
                "aria-pressed": l,
                onClick: () => n(t.track_external_id),
                children: [
                    (0, i.jsx)(lA.R, {
                        src: c,
                        isCircular: !1,
                        FallbackIcon: np.u,
                        children:
                            l &&
                            (0, i.jsx)("span", {
                                className: j()(lN.Lw, lN.Kp),
                                "aria-hidden": !0,
                                children: (0, i.jsx)(nj.Y, { size: "md", color: "currentColor" }),
                            }),
                    }),
                    null != t.track_title &&
                        (0, i.jsxs)("span", {
                            className: lN.Qq,
                            children: [
                                (0, i.jsx)(A.E, {
                                    className: lN.DD,
                                    tag: "span",
                                    variant: "text-sm/semibold",
                                    color: "text-default",
                                    lineClamp: 1,
                                    children: t.track_title,
                                }),
                                null != t.artist_name &&
                                    (0, i.jsx)(A.E, {
                                        className: lN.VA,
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
            (0, i.jsx)(lI, { target: u, tabIndex: a.tabIndex, onClick: d }),
        ],
    });
}
function n_(e) {
    return e.track_external_id;
}
function nA(e) {
    let t,
        { guildId: l, widgetId: n, isCompact: a, data: r } = e,
        d = lx(n),
        c = lc((e) => e.byWidgetId[n]?.canShowEmbed ?? ld.canShowEmbed),
        [u, o] = lp(r.ranked_songs.length),
        m = lg({ guildId: l, widgetId: n, data: r });
    lh({ guildId: l, widgetId: n, data: r, length: r.ranked_songs.length, isAtEnd: u });
    let x = s.useCallback(
            (e) => {
                let t;
                (m("song"),
                    (t = lc.getState().byWidgetId[n]?.selectedTrackId ?? null),
                    lu(n, { selectedTrackId: t === e ? null : e }));
            },
            [n, m],
        ),
        f = s.useCallback(() => m("forward"), [m]),
        g = s.useCallback(
            (e, t, l) =>
                (0, i.jsx)(nv, {
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
        p = lU(r);
    return (0, i.jsxs)("div", {
        className: lq.U,
        children: [
            (0, i.jsx)(lK, {
                label: li(t5.TOP_SONGS),
                items: r.ranked_songs,
                isCompact: a,
                getItemKey: n_,
                renderItem: g,
                onScrollEndChange: o,
            }),
            null != h
                ? (0, i.jsx)(lz, { guildId: l, isCompact: a, canShowEmbed: c, song: h })
                : (0, i.jsx)(lW, {
                      isCompact: a,
                      headline:
                          (t = Math.round(r.listening_time_ms / ex.A.Millis.MINUTE)) < 1
                              ? null
                              : N.intl.formatToPlainString(el.default["+5b01q"], { minutes: t }),
                      detail:
                          r.distinct_listeners < 1
                              ? null
                              : N.intl.format(el.default.AzIhRB, {
                                    count: r.distinct_listeners,
                                    trend: lL(p),
                                    countHook: lR,
                                }),
                      trend: p,
                  }),
        ],
    });
}
var nb = l(691885),
    nE = l(109765);
function nN(e) {
    let { widgetId: t, onSelect: l } = e,
        n = lo(t),
        a = s.useMemo(() => t9.map((e) => ({ id: e, label: li(e), value: e })), []);
    return (0, i.jsx)("div", {
        className: nE.L,
        children: (0, i.jsx)(nb.l, {
            selectionMode: "single",
            label: N.intl.string(el.default.hFYyGU),
            hideLabel: !0,
            fitContent: !0,
            options: a,
            value: n,
            onSelectionChange: l,
        }),
    });
}
var nI = l(432017),
    nC = l(871107);
function nS(e) {
    let { title: t } = e;
    return (0, i.jsxs)("div", {
        className: nC.$,
        children: [
            (0, i.jsx)("span", {
                className: nC.K,
                children: (0, i.jsx)(nI.T, { size: "xs", color: c.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
            }),
            (0, i.jsx)(h.q, { size: "md", children: t }),
        ],
    });
}
var ny = l(77915),
    nk = l(756936);
function nT(e) {
    return e.default_title ?? N.intl.string(el.default["5xxUI2"]);
}
var nw = l(890497),
    nR = l(734057),
    nD = l(317525),
    nL = l(576705),
    nM = l(935208),
    nU = l(44167);
l(321073);
var nG = l(485845),
    nP = l(136722),
    nO = l(435183),
    nB = l(155718),
    nW = l(795816),
    nz = l(933958),
    nH = l(627363),
    nF = l(712440),
    nK = l(733110),
    nq = l(488926),
    nY = l(818023);
async function n$(e) {
    null == ei.A.getApplication(nY.NW) && (await (0, nH.TA)(nY.NW));
    let t = nz.Ay.getEmbeddedActivitiesForChannel(e).every((e) => e.applicationId !== nY.NW);
    return await (0, nW.su)({ channelId: e, applicationId: nY.NW, isStart: t, renderInFramePool: !0 });
}
async function nV(e) {
    let { channel: t, selectedRoleIds: l } = e,
        n = [];
    if (l.length > 0)
        for (let e of (n.push({ id: t.guild_id, type: nB.r2.ROLE, allow: nq.x3, deny: te.xBc.USE_EMBEDDED_ACTIVITIES }),
        l))
            n.push({ id: e, type: nB.r2.ROLE, allow: te.xBc.USE_EMBEDDED_ACTIVITIES, deny: nq.x3 });
    let i = await (0, nO.RT)(t.id, { permissionOverwrites: n });
    if (!i.ok) throw i;
}
let nQ = [];
var nZ = l(344351),
    nX = l(256693),
    nJ = l(343030),
    n0 = l(317608),
    n1 = l(953538);
let n2 = {
    [d.a.IMAGE_TEXT]: {
        View: function (e) {
            let { widget: t, guildSpaceMode: l, guildId: n } = e,
                { text: s, image_hash: a } = t.config,
                r = "edit" === l ? t.config.image : void 0,
                d = void 0 !== r ? r : null != a ? tD(n, t.id, a) : null;
            return (0, i.jsxs)("div", {
                className: tM.kL,
                children: [
                    null != d && (0, i.jsx)("img", { className: tM.Sl, src: d, alt: "" }),
                    null != s &&
                        (0, i.jsx)(A.E, {
                            variant: "text-md/normal",
                            color: "text-subtle",
                            className: tM.Qq,
                            children: s,
                        }),
                ],
            });
        },
        Edit: function (e) {
            let { widget: t, commit: l, cancel: n } = e,
                a = t.config,
                [r, c] = s.useState(a.title ?? ""),
                [u, o] = s.useState(a.text ?? ""),
                [f, g] = s.useState(a.image),
                [h, p] = s.useState(null),
                j = (0, R.bG)([to.A], () => to.A.getGuildId()),
                v = void 0 !== f ? f : null != a.image_hash && null != j ? tD(j, t.id, a.image_hash) : null;
            return (0, i.jsxs)(b.B, {
                gap: 16,
                children: [
                    (0, i.jsx)(tC.k, {
                        label: N.intl.string(N.t.gnwWrx),
                        value: r,
                        onChange: function (e) {
                            (p(null), c(e));
                        },
                        maxLength: 100,
                        showCharacterCount: !0,
                    }),
                    (0, i.jsx)(tN.D, {
                        label: N.intl.string(N.t.X4IxWL),
                        children: (0, i.jsxs)(b.B, {
                            gap: 16,
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            className: tL.B,
                            children: [
                                (0, i.jsxs)(b.B, {
                                    gap: 8,
                                    direction: "horizontal",
                                    children: [
                                        (0, i.jsx)(tk.A, {
                                            variant: "secondary",
                                            text: N.intl.string(N.t["MsUY/S"]),
                                            onChange: function (e) {
                                                (p(null), g(e));
                                            },
                                            maxFileSizeBytes: 0xa00000,
                                            onFileSizeError: () => (0, ty.A)(0xa00000),
                                        }),
                                        null != v &&
                                            (0, i.jsx)(m.m, {
                                                text: N.intl.string(N.t.N86XcP),
                                                ariaHidden: !0,
                                                children: (0, i.jsx)(x.K, {
                                                    variant: "critical-secondary",
                                                    icon: tS.TrashIcon,
                                                    onClick: function () {
                                                        (p(null), g(null));
                                                    },
                                                    "aria-label": N.intl.string(N.t.N86XcP),
                                                }),
                                            }),
                                    ],
                                }),
                                null != v && (0, i.jsx)("img", { className: tL.V, src: v, alt: "" }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(tI.f, {
                        label: N.intl.string(N.t.COGMNC),
                        value: u,
                        onChange: function (e) {
                            (p(null), o(e));
                        },
                        rows: 3,
                        autosize: !0,
                        maxLength: 500,
                        showCharacterCount: !0,
                    }),
                    null != h &&
                        (0, i.jsx)("div", {
                            role: "alert",
                            children: (0, i.jsx)(td.w, { type: "critical", message: h, role: "none" }),
                        }),
                    (0, i.jsxs)(tc.e, {
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(W.$, { variant: "secondary", text: N.intl.string(N.t["ETE/oC"]), onClick: n }),
                            (0, i.jsx)(W.$, {
                                variant: "primary",
                                text: N.intl.string(N.t["R3BPH+"]),
                                onClick: function () {
                                    let e;
                                    if (
                                        ((e = void 0 !== f ? null !== f : null != a.image_hash),
                                        0 === u.length && !e && (p(N.intl.string(el.default.zleX9q)), 1))
                                    )
                                        return;
                                    let t = {
                                        type: d.a.IMAGE_TEXT,
                                        image_hash: a.image_hash,
                                        text: u.length > 0 ? u : null,
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
                              minHeight: 390,
                              graphic: (0, i.jsx)(u, { alt: "", ariaHidden: !0, width: 200 }),
                              title: N.intl.string(el.default.wqHke4),
                              subtitle: N.intl.string(el.default.n1sscC),
                          })
                        : n?.status === "error"
                          ? (0, i.jsx)(S, {})
                          : null != d
                            ? (0, i.jsx)(tl, { guildId: a, data: d, column: l.position.column, disabled: "view" !== r })
                            : (0, i.jsx)(C, {})),
                (0, i.jsx)("div", { ref: o, children: t })
            );
        },
        Edit: function (e) {
            let { cancel: t } = e,
                l = (0, R.bG)([to.A], () => to.A.getGuildId()),
                n = (0, R.bG)([tu.A], () => tu.A.getGuild(l), [l]),
                a = (0, tx.mN)(n),
                r = null != n && null != n.systemChannelId,
                d = null != n ? n.systemChannelFlags : null,
                [c, u] = s.useState(!1),
                [o, m] = s.useState(null),
                [x, f] = s.useState(!1),
                g = s.useCallback(async () => {
                    if (null == n || null == l || null == o || null == d) return void t();
                    (f(!1), u(!0));
                    try {
                        (await ta.Bo.patch({
                            url: te.Rsh.GUILD(l),
                            body: { system_channel_flags: (0, ts.lA)(d, tf, !o) },
                            rejectWithError: !0,
                        }),
                            (0, tm.q9)(l, tm.PY.LEADERBOARD_SYSTEM_MESSAGES, o),
                            t());
                    } catch (e) {
                        f(!0);
                    } finally {
                        u(!1);
                    }
                }, [n, l, o, d, t]),
                h = null == n || !r || null == d || c || !a;
            return (0, i.jsxs)(b.B, {
                gap: 16,
                children: [
                    (0, i.jsx)(tr.d, {
                        label: N.intl.string(el.default.v0iLIA),
                        description: N.intl.string(el.default["88c7ds"]),
                        checked: o ?? !(0, ts.Lt)(d ?? 0, tf),
                        onChange: m,
                        disabled: h,
                    }),
                    !r && (0, i.jsx)(td.w, { type: "warning", children: N.intl.string(el.default["1hsDpi"]) }),
                    x && (0, i.jsx)(td.w, { type: "critical", children: N.intl.string(el.default["4FcF2j"]) }),
                    (0, i.jsxs)(tc.e, {
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(W.$, {
                                variant: "secondary",
                                text: N.intl.string(N.t["ETE/oC"]),
                                onClick: t,
                                disabled: c,
                            }),
                            (0, i.jsx)(W.$, {
                                variant: "primary",
                                text: N.intl.string(N.t["R3BPH+"]),
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
                : (0, i.jsx)(h.q, { children: ep(s) });
        },
        TitleIcon: function () {
            return (0, i.jsx)(o.TrophyIcon, { size: "xs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        },
        HeaderAccessory: function (e) {
            let { hydration: t, guildId: l } = e,
                n = eV(l, t?.status === "success" ? t.data : void 0);
            return null == n || eh(n) ? null : (0, i.jsx)(tv, { data: n });
        },
        HeaderActions: function (e) {
            let { hydration: t, guildId: l, column: n } = e,
                s = t?.status === "success" ? t.data : void 0,
                a = eV(l, s);
            return "mini" !== k({ expanded: !1, column: n }) || (null != a && eh(a))
                ? null
                : (0, i.jsx)(m.m, {
                      text: N.intl.string(N.t.dcl9MQ),
                      children: (0, i.jsx)(x.K, {
                          variant: "icon-only",
                          size: "sm",
                          icon: f._,
                          "aria-label": N.intl.string(N.t.dcl9MQ),
                          disabled: null == a,
                          onClick: function () {
                              null != a &&
                                  null != s &&
                                  (g.default.track(te.HAw.LEADERBOARD_CLICK, {
                                      location: "expand",
                                      guild_id: l,
                                      leaderboard_state: ej(a),
                                      leaderboard_view: k({ expanded: !1, column: n }),
                                      metric: ev(a.stat),
                                  }),
                                  (function (e) {
                                      let { guildId: t, data: l } = e,
                                          n = (e) => (0, i.jsx)(tE, { guildId: t, data: l, modalProps: e });
                                      (0, e_.openModalLazy)(() => Promise.resolve(n), {
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
                                : { ...t, user_ids: t.user_ids.filter((e) => e !== i) };
                    }, [t, n, l, i]);
                })(a, n?.status === "success" ? n.data : void 0),
                c = t_({
                    onHoverEnd: s.useCallback(
                        (e) => {
                            let { duration: t, flush: n } = e;
                            null != d &&
                                g.default.track(
                                    te.HAw.POPULAR_GAMES_HOVER,
                                    {
                                        guild_id: a,
                                        duration: t,
                                        popular_games_state: tQ(d),
                                        popular_games_view: k({ expanded: !1, column: l.position.column }),
                                    },
                                    { flush: n },
                                );
                        },
                        [a, d, l.position.column],
                    ),
                    enabled: "view" === r,
                }),
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
                              minHeight: 273,
                              graphic: (0, i.jsx)(tU, { alt: "", ariaHidden: !0, width: 200 }),
                              title: N.intl.string(el.default.v59XPT),
                              subtitle: N.intl.string(el.default.Bayri1),
                          })
                        : n?.status === "error"
                          ? (0, i.jsx)(S, {})
                          : null == n || null == d || "idle" === n.status || "loading" === n.status
                            ? (0, i.jsx)(C, {})
                            : (0, i.jsx)(t2, {
                                  guildId: a,
                                  data: d,
                                  title: t6(l),
                                  column: l.position.column,
                                  disabled: "view" !== r,
                              })),
                (0, i.jsx)("div", { ref: u, children: t })
            );
        },
        Title: function (e) {
            let { widget: t } = e;
            return (0, i.jsx)(h.q, { children: t6(t) });
        },
        TitleIcon: function () {
            return (0, i.jsx)(eO.GameControllerIcon, { size: "xs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        },
    },
    [d.a.POPULAR_MUSIC]: {
        View: function (e) {
            var t, l;
            let n,
                a,
                r,
                { guildId: d, widget: c, hydration: u, guildSpaceMode: o } = e,
                m =
                    ((t = c.id),
                    (n = s.useRef(null)),
                    (a = s.useCallback(
                        (e) => {
                            let { width: l } = e.contentRect;
                            lu(t, { isCompact: l < 480, canShowEmbed: l >= 560 });
                        },
                        [t],
                    )),
                    (0, tG.g)(n, a, [t], { fireOnMount: !0 }),
                    s.useEffect(
                        () => () => {
                            lc.setState((e) => {
                                if (null == e.byWidgetId[t]) return e;
                                let l = { ...e.byWidgetId };
                                return (delete l[t], { byWidgetId: l });
                            });
                        },
                        [t],
                    ),
                    n),
                x = lm(c.id),
                f = lo(c.id),
                h = lx(c.id),
                { isContributing: p, isSpotifyConnected: j, hasFetchedConsents: v } = (0, ny.MX)(d),
                _ = u?.status === "success" ? u.data : void 0,
                { data: A, shouldHideCurrentUser: b } = (0, ny.qL)(d, _),
                E = "edit" === o,
                N = null != _ && le(_),
                I = !x && !E && !N,
                y = lg({ guildId: d, widgetId: c.id, data: A }),
                k = (function (e) {
                    let { guildId: t, widgetId: l, data: n, enabled: i } = e,
                        a = lo(l),
                        r = lm(l);
                    return t_({
                        onHoverEnd: s.useCallback(
                            (e) => {
                                let { duration: l, flush: i } = e;
                                null != n &&
                                    g.default.track(
                                        te.HAw.POPULAR_MUSIC_HOVER,
                                        {
                                            guild_id: t,
                                            duration: l,
                                            popular_music_state: ll(n, a),
                                            popular_music_view: a,
                                            popular_music_layout: ln(r),
                                        },
                                        { flush: i },
                                    );
                            },
                            [t, n, a, r],
                        ),
                        segmentKey: `${a}:${ln(r)}`,
                        enabled: i,
                    });
                })({ guildId: d, widgetId: c.id, data: A, enabled: "view" === o }),
                T = s.useCallback(
                    (e) => {
                        k(e?.closest("[data-guild-space-widget]") ?? null);
                    },
                    [k],
                ),
                w = (0, t3.A)(m, T);
            lh({ guildId: d, widgetId: c.id, data: A, length: 0, isAtEnd: !1, disabled: E || !N });
            let R =
                    "view" === o && v && !p
                        ? (0, i.jsx)(l1, {
                              guildId: d,
                              widgetName: nT(c),
                              isCompact: x,
                              isSpotifyConnected: j,
                              onClick: () => y("contribution_upsell"),
                          })
                        : null,
                D =
                    E || N || u?.status !== "success" || f === t5.TOP_LISTENERS
                        ? null
                        : ((l = u.data),
                          null ==
                          (r =
                              l.ranked_songs.find((e) => e.track_external_id === h && null != e.cover_art_hash)
                                  ?.cover_art_hash ??
                              l.ranked_songs.find((e) => null != e.cover_art_hash)?.cover_art_hash)
                              ? null
                              : lC.RQ.IMAGE(r));
            return (0, i.jsxs)("div", {
                className: nk.rf,
                ref: w,
                children: [
                    null != D &&
                        (0, i.jsx)("div", {
                            className: nk.G,
                            "aria-hidden": !0,
                            children: (0, i.jsx)("img", { className: nk.LZ, src: D, alt: "" }),
                        }),
                    (0, i.jsx)("div", {
                        className: nk.Qs,
                        children: (0, i.jsx)("div", {
                            id: la(c.id),
                            className: nk.nd,
                            role: I ? "tabpanel" : "group",
                            tabIndex: 0,
                            "aria-label": I ? void 0 : li(f),
                            "aria-labelledby": I ? ls(c.id, f) : void 0,
                            children: (function () {
                                if (E) return (0, i.jsx)(nh, { isCompact: x });
                                if (null == u || "idle" === u.status || "loading" === u.status)
                                    return (0, i.jsx)(C, {});
                                if ("error" === u.status) return (0, i.jsx)(S, {});
                                if (N) return (0, i.jsx)(l5, { onSettingsClick: () => y("empty_state_settings") });
                                if (null == A) return (0, i.jsx)(C, {});
                                switch (f) {
                                    case t5.TOP_SONGS:
                                        return (0, i.jsx)(nA, { guildId: d, widgetId: c.id, isCompact: x, data: A });
                                    case t5.TOP_ARTISTS:
                                        return (0, i.jsx)(l$, { guildId: d, widgetId: c.id, isCompact: x, data: A });
                                    case t5.TOP_LISTENERS:
                                        return (0, i.jsx)(nf, {
                                            guildId: d,
                                            widgetId: c.id,
                                            isCompact: x,
                                            data: A,
                                            shouldHideCurrentUser: b,
                                            upsell: R,
                                        });
                                }
                            })(),
                        }),
                    }),
                    f !== t5.TOP_LISTENERS && R,
                    (0, i.jsx)(nl, { isCompact: x }),
                ],
            });
        },
        Title: function (e) {
            let { widget: t, hydration: l, guildSpaceMode: n } = e,
                s = nT(t),
                a = l?.status === "success" && le(l.data);
            return "edit" === n || a ? (0, i.jsx)(h.q, { size: "md", children: s }) : (0, i.jsx)(nS, { title: s });
        },
        ViewHeaderTrailing: function (e) {
            let { widget: t, hydration: l, title: n, guildId: s } = e,
                a = lm(t.id),
                r = lo(t.id),
                { data: d } = (0, ny.qL)(s, l?.status === "success" ? l.data : void 0);
            function c(e, l) {
                if (e !== r) {
                    var n;
                    (lf({ guildId: s, data: d, view: e, isCompact: a, location: l }),
                        (n = t.id),
                        (lc.getState().byWidgetId[n] ?? ld).view !== e && lu(n, { view: e, selectedTrackId: null }));
                }
            }
            return l?.status === "success" && le(l.data)
                ? null
                : a
                  ? (0, i.jsx)(nN, { widgetId: t.id, onSelect: (e) => c(e, "view_select") })
                  : (0, i.jsx)(t7, {
                        label: n,
                        tabs: t9.map((e) => ({ id: e, label: li(e) })),
                        selectedId: r,
                        panelId: la(t.id),
                        getTabId: (e) => ls(t.id, e),
                        onSelect: (e) => c(e, "view_tab"),
                    });
        },
    },
    [d.a.WHITEBOARD]: {
        View: function (e) {
            let t,
                l,
                n = (0, nU.n)(),
                a = (0, R.bG)(
                    [nR.A, nL.A],
                    () => {
                        let e = null != n ? nR.A.getChannel(n) : void 0;
                        return null != e && nL.A.can(te.xBc.USE_EMBEDDED_ACTIVITIES, e);
                    },
                    [n],
                ),
                d = (0, R.bG)(
                    [nz.Ay],
                    () => {
                        let e = nz.Ay.getCurrentEmbeddedActivity();
                        return null == e ||
                            e.applicationId !== nY.NW ||
                            e.location.kind !== nZ.T.GUILD_CHANNEL ||
                            e.location.channel_id !== n
                            ? null
                            : e;
                    },
                    [n],
                ),
                c = (0, R.bG)([nz.Ay], () => nz.Ay.isLaunchingActivity(), []),
                { authResolved: u, isAuthorized: o } =
                    ((t = (0, R.bG)(
                        [nK.default],
                        () => nK.default.getFetchStateForApplication(nY.NW) === nK.FetchState.FETCHED,
                        [],
                    )),
                    (l = (0, R.bG)(
                        [nK.default, ei.A],
                        () => {
                            let e = nK.default.getNewestTokenForApplication(nY.NW);
                            if (null == e) return !1;
                            let t = ei.A.getApplication(nY.NW),
                                l = t?.integrationTypesConfig?.[nG.b.USER_INSTALL]?.oauth2InstallParams?.scopes;
                            if (null == l) return !0;
                            let n = new Set(e.scopes);
                            return l.every((e) => n.has(e));
                        },
                        [],
                    )),
                    s.useEffect(() => {
                        (nK.default.getFetchStateForApplication(nY.NW) === nK.FetchState.NOT_FETCHED &&
                            nF.A.fetch([nY.NW]),
                            null == ei.A.getApplication(nY.NW) && (0, nH.TA)(nY.NW));
                    }, []),
                    { authResolved: t, isAuthorized: l }),
                m = s.useRef(!1);
            s.useEffect(() => {
                null == d && null != n && a && u && o && !m.current && ((m.current = !0), n$(n));
            }, [a, n, d, u, o]);
            let x = s.useCallback(() => {
                    null != n && ((m.current = !0), n$(n));
                }, [n]),
                f = null != n && u && !o;
            return null == n
                ? (0, i.jsx)(b.B, {
                      className: n1.kL,
                      align: "center",
                      justify: "center",
                      children: (0, i.jsx)(r, { alt: "", width: 200, height: 192 }),
                  })
                : a
                  ? (0, i.jsxs)("div", {
                        className: n1.kL,
                        children: [
                            null != d &&
                                (0, i.jsx)(n0.A, {
                                    frameId: (0, nX.Ri)(d),
                                    level: nJ.A.WithinAppContent,
                                    className: n1.t$,
                                }),
                            null == d &&
                                f &&
                                (0, i.jsx)("div", {
                                    className: n1.P5,
                                    children: (0, i.jsx)(W.$, {
                                        variant: "secondary",
                                        text: N.intl.string(el.default.PSuly6),
                                        loading: c,
                                        onClick: x,
                                    }),
                                }),
                        ],
                    })
                  : (0, i.jsx)("div", {
                        className: n1.kL,
                        children: (0, i.jsx)("div", {
                            className: n1.m0,
                            children: (0, i.jsx)(A.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: N.intl.string(el.default["nXc/MQ"]),
                            }),
                        }),
                    });
        },
        Edit: function (e) {
            let { cancel: t } = e,
                l = (0, R.bG)([to.A], () => to.A.getGuildId()),
                n = nM.default.castGuildIdAsEveryoneGuildRoleId(l),
                a = (0, nU.n)(),
                r = (0, R.bG)([nR.A], () => (null != a ? nR.A.getChannel(a) : void 0), [a]),
                d = (0, R.bG)([nL.A], () => null != r && nL.A.can(te.xBc.MANAGE_ROLES, r), [r]),
                c = (0, R.bG)([nD.A], () => (null == l ? nQ : nD.A.getSortedRoles(l).filter((e) => e.id !== n)), [
                    l,
                    n,
                ]),
                u = s.useMemo(() => {
                    let e;
                    return null != r
                        ? null != (e = r.permissionOverwrites[r.guild_id]) &&
                          nP.zy(e.deny, te.xBc.USE_EMBEDDED_ACTIVITIES)
                            ? c
                                  .filter((e) => {
                                      let t = r.permissionOverwrites[e.id];
                                      return null != t && nP.zy(t.allow, te.xBc.USE_EMBEDDED_ACTIVITIES);
                                  })
                                  .map((e) => e.id)
                            : []
                        : [];
                }, [r, c]),
                [o, m] = s.useState(null),
                [x, f] = s.useState(!1),
                [g, h] = s.useState(!1),
                p = o ?? u,
                j = s.useMemo(() => c.map((e) => ({ id: e.id, label: e.name, value: e.id })), [c]);
            async function v() {
                if (null != r) {
                    (h(!1), f(!0));
                    try {
                        (await nV({ channel: r, selectedRoleIds: p }), t());
                    } catch {
                        (f(!1), h(!0));
                    }
                }
            }
            return null == r
                ? null
                : (0, i.jsxs)(b.B, {
                      gap: 16,
                      children: [
                          (0, i.jsx)(nw.Z, {
                              selectionMode: "multiple",
                              label: N.intl.string(el.default.XXLbfv),
                              description: N.intl.string(el.default.XrpYIG),
                              placeholder: N.intl.string(el.default.pp6WeD),
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
                              (0, i.jsx)(td.w, {
                                  type: "warning",
                                  message: N.intl.string(el.default.UPLtlA),
                                  role: "none",
                              }),
                          g &&
                              (0, i.jsx)("div", {
                                  role: "alert",
                                  children: (0, i.jsx)(td.w, {
                                      type: "critical",
                                      message: N.intl.string(el.default.xyCJYs),
                                      role: "none",
                                  }),
                              }),
                          (0, i.jsxs)(tc.e, {
                              fullWidth: !0,
                              children: [
                                  (0, i.jsx)(W.$, {
                                      variant: "secondary",
                                      text: N.intl.string(N.t["ETE/oC"]),
                                      onClick: t,
                                      disabled: x,
                                  }),
                                  (0, i.jsx)(W.$, {
                                      variant: "primary",
                                      text: N.intl.string(N.t["R3BPH+"]),
                                      onClick: v,
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
