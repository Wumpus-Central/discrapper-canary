l.d(t, { m: () => n5 });
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
    I = l(105292),
    N = l(448492);
function C() {
    return (0, i.jsx)("div", {
        className: N.w,
        children: (0, i.jsx)(v.y, { type: v.y.Type.SPINNING_CIRCLE, "aria-label": I.intl.string(I.t.ZTNur7) }),
    });
}
function S() {
    return (0, i.jsxs)("div", {
        className: N.w,
        role: "alert",
        children: [
            (0, i.jsx)(_.WarningIcon, { size: "md", color: c.A.colors.ICON_MUTED, "aria-hidden": !0 }),
            (0, i.jsx)(A.E, { variant: "text-sm/normal", color: "text-muted", children: I.intl.string(I.t.F8FvUy) }),
        ],
    });
}
function y(e) {
    let { className: t, illustration: l, title: n, body: s, action: a } = e;
    return (0, i.jsxs)(b.B, {
        className: j()(N.p, t),
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
        displayName: l ? I.intl.formatToPlainString(el.default.subXXA, { name: a }) : a,
    };
}
var ei = l(587895),
    es = l(429913),
    ea = l(311043),
    er = l(454908),
    ed = l(403362);
function ec(e, t) {
    return { id: e, name: I.intl.string(I.t.GIWFlF), iconUrl: void 0, coverUrl: void 0, isLoading: t };
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
        title: I.intl.string(el.default.ULK65a),
        body: I.intl.format(s, { memberCount: 3 }),
        action:
            null != n
                ? (0, i.jsx)(W.$, {
                      variant: "secondary",
                      size: "sm",
                      text: I.intl.string(el.default.A4ZMJL),
                      onClick: () => {
                          (l(), eA(t, n, I.intl.string(el.default.PJn0ih)));
                      },
                  })
                : null,
    });
}
let eI =
        "https://cdn.discordapp.com/assets/content/f86a84ce3eb0d44fa03c308be330f508fbcdec9528cd7969c8f7530cdd058898.png",
    eN = `${eI} 1x, https://cdn.discordapp.com/assets/content/61de4c8a747fbce4c3772d27eeffbea00e3f3fbefd2a972d9d25b96d7116f042.png 2x, https://cdn.discordapp.com/assets/content/7e79963a2b009fabcc285dc56b301eb819e63b604739b0a48c8e0044a527a800.png 3x`;
function eC(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, width: d, height: c, className: u, style: o } = e,
        m = s.useMemo(
            () => (0, a.H)({ width: d, height: c, intrinsicWidth: 24, intrinsicHeight: 24, style: o }),
            [d, c, o],
        );
    return (0, i.jsx)("img", {
        style: m,
        src: eI,
        srcSet: eN,
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
        ? I.intl.formatToPlainString(el.default.DdzvGL, { minutes: n })
        : I.intl.formatToPlainString(el.default["6Y8H0A"], { hours: l, minutes: n });
}
function eM(e, t) {
    switch (t) {
        case eg.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return {
                primary: I.intl.formatToPlainString(I.t["k2UNz+"], { days: e.value }),
                secondary: eL(e.time_played_seconds),
            };
        case eg.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return {
                primary: I.intl.formatToPlainString(el.default.rgpc8E, { count: e.value }),
                secondary: eL(e.time_played_seconds),
            };
        case eg.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            let l, n, i;
            return {
                primary:
                    ((n = Math.floor((l = Math.floor(Math.max(e.value, 0) / ex.A.Millis.MINUTE)) / ex.A.Minutes.HOUR)),
                    (i = l % ex.A.Minutes.HOUR),
                    0 === n
                        ? I.intl.formatToPlainString(el.default.bgQf2H, { minutes: i })
                        : 0 === i
                          ? I.intl.formatToPlainString(el.default["D/HToK"], { hours: n })
                          : I.intl.formatToPlainString(el.default.fvtrHn, { hours: n, minutes: i })),
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
            return I.intl.string(el.default.I3YOjC);
        case "ignored":
            return I.intl.string(el.default.CfMzwe);
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
            (0, i.jsx)(e7, {
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
                                children: I.intl.formatToPlainString(el.default.YuNVPY, { gameName: a.name }),
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
        l = I.intl.formatToPlainString(el.default.I4JiAQ, { rank: t });
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
        "aria-label": I.intl.string(el.default.o6mBdl),
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
function e3(e, t) {
    let l = e.filter((e) => null != e.iconUrl || e.isLoading).slice(0, t > 3 ? 2 : 3),
        n = Math.max(0, t - l.length);
    return { visibleGames: l, overflowCount: n };
}
function e4(e) {
    let { played: t, totalCount: l } = e,
        { visibleGames: n, overflowCount: s } = e3(t, l);
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
                                  children: I.intl.formatToPlainString(el.default.JiMMEd, { count: s }),
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
        { visibleGames: a, overflowCount: r } = e3(s, s.length),
        d = Math.max(1, a.length + Number(r > 0));
    return (0, i.jsx)(eB.u, {
        body:
            0 === t.length
                ? I.intl.string(el.default["7CrlYb"])
                : 1 === t.length
                  ? I.intl.formatToPlainString(el.default.dbNpK0, { firstGame: t[0].name })
                  : 2 === t.length && 2 === l
                    ? I.intl.formatToPlainString(el.default.tqVg4M, { firstGame: t[0].name, secondGame: t[1].name })
                    : 3 === t.length && 3 === l
                      ? I.intl.formatToPlainString(el.default["7h8GUv"], {
                            firstGame: t[0].name,
                            secondGame: t[1].name,
                            thirdGame: t[2].name,
                        })
                      : I.intl.formatToPlainString(el.default.bxcrSz, {
                            firstGame: t[0].name,
                            secondGame: t[1].name,
                            otherCount: l - 2,
                        }),
        asset: s.length > 0 ? (0, i.jsx)(e4, { played: s, totalCount: s.length }) : void 0,
        assetSize: 24 * d - 5 * (d - 1),
        children: n,
    });
}
function e7(e) {
    let { name: t, applicationIds: l, applicationCount: n, games: s, onClick: a } = e,
        r = em(s, l);
    return (0, i.jsx)("div", {
        className: eZ.ag,
        children: (0, i.jsx)(e8, {
            played: r,
            totalCount: n,
            children: (0, i.jsx)(L.D, {
                className: j()(eZ.Nw, eZ.Dz),
                "aria-label": I.intl.formatToPlainString(el.default.o6mBdl, { name: t }),
                onClick: a,
                children: (0, i.jsx)(e4, { played: r, totalCount: n }),
            }),
        }),
    });
}
var e5 = l(189043);
function e9(e) {
    let { guildId: t, entries: l, stat: n, games: s, currentUserEntry: a, currentUserPillarRef: r, onClick: d } = e,
        c = {
            1: { column: e5.HC, pillar: e5.P5 },
            2: { column: e5.th, pillar: e5.Vk },
            3: { column: e5.Ou, pillar: e5.el },
        };
    return (0, i.jsx)("div", {
        className: e5.pI,
        role: "list",
        "aria-label": I.intl.string(el.default.wKXLfQ),
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
        I = 1 === n ? eT.b : 2 === n ? eC : ek,
        N = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: e5.R3,
                    children: [
                        p
                            ? (0, i.jsx)("span", {
                                  className: j()(e5.gt, 1 === n && e5.o2),
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
                        (0, i.jsx)(I, { className: e5.dR, alt: "", ariaHidden: !0 }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: j()(e5.DX, r),
                    children: [
                        (0, i.jsx)(E.D, {
                            variant: "heading-sm/semibold",
                            color: p ? "text-subtle" : "text-default",
                            lineClamp: 1,
                            className: e5.IY,
                            children:
                                null != h
                                    ? e$(h)
                                    : (0, i.jsx)(O.g, {
                                          name: g.displayName,
                                          colorString: g.member?.colorString ?? null,
                                          colorStrings: g.roleColorStrings,
                                      }),
                        }),
                        (0, i.jsx)(e8, {
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
                              className: e5.fs,
                              innerRef: b,
                              onClick: (t) => {
                                  (x?.(), e.onClick(t));
                              },
                              children: N,
                          }),
                  })
                : (0, i.jsx)("div", { className: e5.fs, children: N }),
    });
}
var tt = l(652215),
    tl = l(219047);
function tn(e) {
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
        { scrollerRef: E, scrollerNode: N, userRowRef: S, floatingRowPosition: y, scrollToUserRow: T } = X(),
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
            u = s.useRef(null),
            o = `${t}:${l}:${n}:${i}:${a}`,
            m = s.useCallback(() => {
                u.current !== o &&
                    ((u.current = o),
                    g.default.track(tt.HAw.LEADERBOARD_END_IMPRESSION, {
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
                    g.default.track(tt.HAw.LEADERBOARD_CLICK, {
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
              className: tl.Cm,
              children: (0, i.jsx)(eE, { guildId: t, onActivitySharingClick: () => W("activity_sharing") }),
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
                                ref: E,
                                children: [
                                    _ &&
                                        (0, i.jsx)(e9, {
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
                                        className: tl.Po,
                                        "aria-label": I.intl.string(el.default.d0Z8kd),
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
                            M && (0, i.jsx)(ts, { guildId: t, onActivitySharingClick: () => W("activity_sharing") }),
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
                (0, i.jsx)(A.E, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: I.intl.string(el.default["/nma+a"]),
                }),
            ],
        });
    return null == t
        ? (0, i.jsx)("div", { className: tl.qr, children: n })
        : (0, i.jsx)("div", {
              className: j()(tl.qr, { [tl.zE]: l }),
              tabIndex: 0,
              children: (0, i.jsx)(m.m, {
                  text: I.intl.formatToPlainString(el.default["1bt50t"], {
                      timestamp: (0, q.mk)(new Date(t)).toLowerCase(),
                  }),
                  position: "bottom",
                  children: n,
              }),
          });
}
function ts(e) {
    let { guildId: t, onActivitySharingClick: l } = e,
        {
            isSharingActivity: n,
            isSharingActivityInGuild: a,
            hasPersonalizationConsent: r,
            requirement: d,
        } = (0, Q.T4)(t),
        u = null != d,
        o = (0, R.bG)([F.A], () => F.A.getStatus() === tt.clD.INVISIBLE),
        m = I.intl.string(el.default.toxuHd),
        x = !1;
    n && a
        ? r
            ? o && ((m = I.intl.string(el.default.PTDDhW)), (x = !0))
            : (m = I.intl.string(el.default.mTARYx))
        : (m = I.intl.string(el.default["8y885d"]));
    let [f] = s.useState(u),
        [g] = s.useState(x),
        h = !u && !x && f,
        p = !u && !x && g;
    p ? (m = I.intl.string(el.default.cgRADC)) : h && (m = I.intl.string(el.default.dqYuni));
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
              className: tl.Xx,
              children: [
                  (0, i.jsxs)("div", {
                      className: tl.kd,
                      children: [
                          (0, i.jsxs)("div", {
                              className: tl.nk,
                              children: [
                                  (0, i.jsx)(U.A, { children: I.intl.string(el.default["oHdW+u"]) }),
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
                              className: tl.SA,
                              "aria-hidden": !0,
                              status: o ? tt.clD.INVISIBLE : void 0,
                          }),
                          (0, i.jsxs)("div", {
                              className: tl.ko,
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
                                      className: tl.LF,
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
                          className: tl.rl,
                          children: (0, i.jsx)(W.$, {
                              variant: "secondary",
                              size: "sm",
                              text: I.intl.string(el.default.fMbgeZ),
                              onClick: () => {
                                  (l(), eA(t, d, I.intl.string(el.default.PJn0ih)));
                              },
                          }),
                      }),
                  x &&
                      !u &&
                      (0, i.jsx)(W.$, {
                          variant: "secondary",
                          size: "sm",
                          text: I.intl.string(I.t.fwPurU),
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
    tu = l(825484),
    to = l(71393),
    tm = l(967198),
    tx = l(49303),
    tf = l(313627);
let tg = tt.ogj.SUPPRESS_GAMING_LEADERBOARD_NOTIFICATIONS;
var th = l(224640),
    tp = l(20742),
    tj = l(885386),
    tv = l(515746);
function t_(e) {
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
                            ? I.intl.string(el.default["J8r/7L"])
                            : I.intl.formatToPlainString(el.default["PuaR+2"], {
                                  days: Math.ceil(i / ex.A.Millis.DAY),
                              }),
                    }),
                    [a, t, i],
                )
            );
        })(t.week_start_ts),
        d = tj.PZ.useSetting(),
        c = 2 > (0, q.m_)(a, new Date()) ? (0, q.mk)(a, !1, d).toLowerCase() : (0, q.i$)(a, "L LT", d).toLowerCase(),
        u = n
            ? I.intl.format(el.default.kG9XmM, { endedAt: c, nextStatName: (0, ef.K)(t.next_stat).name })
            : I.intl.format(el.default["X+VLqi"], { statQuestion: l.question, endsAt: c });
    return (0, i.jsx)(eB.u, {
        title: l.name,
        body: u,
        position: "top",
        children: (0, i.jsx)("div", {
            className: j()(tv.qS, n ? tv.yM : tv.Qk),
            tabIndex: 0,
            children: (0, i.jsx)(A.E, {
                variant: "text-xs/semibold",
                color: n ? "text-muted" : "text-brand",
                children: r,
            }),
        }),
    });
}
function tA(e) {
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
function tb(e) {
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
                            leaderboard_state: ej(l),
                            leaderboard_view: k({ expanded: n, column: i }),
                            metric: ev(l.stat),
                        },
                        { flush: a },
                    );
            },
            [t, l, n, i],
        );
    return tA({ onHoverEnd: r, enabled: a });
}
var tE = l(460614);
function tI(e) {
    let { guildId: t, data: l, modalProps: n } = e,
        s = eV(t, l),
        a = tb({ guildId: t, data: s, expanded: !0 });
    return null == s
        ? null
        : (0, i.jsx)(th.d, {
              size: "lg",
              "aria-label": ep(s),
              ...n,
              children: (0, i.jsxs)("div", {
                  ref: a,
                  children: [
                      (0, i.jsxs)("div", {
                          className: tE.wx,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: tE.LD,
                                  children: [
                                      (0, i.jsx)(o.TrophyIcon, {
                                          size: "xs",
                                          color: c.A.colors.ICON_SUBTLE,
                                          "aria-hidden": !0,
                                      }),
                                      (0, i.jsx)(E.D, {
                                          variant: "heading-sm/medium",
                                          className: tE.DD,
                                          children: ep(s),
                                      }),
                                      (0, i.jsx)(t_, { data: s }),
                                  ],
                              }),
                              (0, i.jsx)(tp.s_, {}),
                          ],
                      }),
                      (0, i.jsx)("div", {
                          className: tE.rf,
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
var tP = l(770178),
    tO = l(104171),
    tB = l(889227),
    tW = l(980707),
    tz = l(477782),
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
        u = (0, R.yK)([eK.A], () => n.filter((e) => !eK.A.isBlockedOrIgnored(e)).slice(0, 5), [n]),
        o = (0, R.yK)([K.default], () => u.map((e) => K.default.getUser(e)).filter(ed.Vq), [u]),
        m = (0, R.cf)(
            [ee.Ay],
            () => {
                let e = {};
                for (let l of o) e[l.id] = ee.Ay.getNick(t, l.id) ?? tV.Ay.getName(l);
                return e;
            },
            [t, o],
        ),
        x = Math.max(0, a - o.length),
        f = I.intl.formatToPlainString(el.default["XaT+x0"], { count: a, gameName: r }),
        g = I.intl.formatToPlainString(I.t.F6iMs4, { count: x }),
        h = s.useCallback(
            (e) => {
                let { closePopout: n } = e;
                return (0, i.jsxs)(tW.W, {
                    navId: `popular-games-players-${l}`,
                    "aria-label": f,
                    onClose: n,
                    onSelect: void 0,
                    children: [
                        o.map((e) =>
                            (0, i.jsx)(
                                tz.Dr,
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
                                    action: () => (0, ez.openUserProfileModal)({ userId: e.id, guildId: t }),
                                },
                                e.id,
                            ),
                        ),
                        x > 0 ? (0, i.jsx)(tz.Dr, { id: `${l}-overflow`, label: g, disabled: !0 }) : null,
                    ],
                });
            },
            [l, t, f, m, x, g, o],
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
                (0, i.jsx)(A.E, {
                    tag: "span",
                    className: tQ.Rd,
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: a,
                }),
            ],
        });
    return 0 === o.length
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
        { name: a, coverUrl: r, isLoading: d } = eo(n, l.application_id),
        c = (0, tY.A)({
            location: "PopularGamesGameCard",
            applicationId: l.application_id,
            source: tq.GameProfileSources.GuildSpacePopularGames,
            trackEntryPointImpression: !0,
        }),
        u = null != c;
    if (d)
        return (0, i.jsx)("div", {
            className: tQ.Nr,
            role: "listitem",
            children: (0, i.jsx)("div", { className: tZ.mD }),
        });
    let o = (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.m, {
                text: a,
                ariaHidden: !0,
                children: (0, i.jsx)("div", {
                    className: j()(tZ.PY, { [tZ.vk]: u, [tZ.iL]: u && null != r }),
                    children: (0, i.jsx)(t$.R, { imageSrc: r, gameName: a }),
                }),
            }),
            (0, i.jsx)(A.E, { variant: "text-sm/semibold", color: "text-default", lineClamp: 1, children: a }),
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
                          (c(), s());
                      },
                      "aria-label": I.intl.formatToPlainString(I.t["8QLQB+"], { gameName: a }),
                      children: o,
                  })
                : (0, i.jsx)("div", { className: tQ.LO, children: o }),
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
var t2 = l(57129),
    t6 = l(560328);
function t3(e) {
    let { guildId: t, requirement: l, onClick: n } = e;
    return (0, i.jsx)(y, {
        className: t6.p$,
        illustration: tG,
        title: I.intl.string(el.default.ULK65a),
        body: I.intl.format(null != l ? el.default.JDAHQV : el.default.LeSGal, { memberCount: 3 }),
        action:
            null != l
                ? (0, i.jsx)(W.$, {
                      variant: "secondary",
                      size: "sm",
                      text: I.intl.string(el.default.A4ZMJL),
                      onClick: () => {
                          (n(), eA(t, l, I.intl.string(el.default.e7pD5m)));
                      },
                  })
                : null,
    });
}
function t4(e) {
    let { guildId: t, requirement: l, onClick: n } = e;
    return (0, i.jsxs)("div", {
        className: t6.UX,
        children: [
            (0, i.jsxs)("div", {
                className: t6.tD,
                children: [
                    (0, i.jsx)(E.D, {
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        lineClamp: 1,
                        children: I.intl.string(t2.default.WhdCGP),
                    }),
                    (0, i.jsx)(A.E, {
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        lineClamp: 2,
                        children:
                            l === Q.kG.ACTIVITY_SHARING
                                ? I.intl.string(el.default.wyK5KO)
                                : I.intl.string(el.default.uQOR1j),
                    }),
                ],
            }),
            (0, i.jsx)(W.$, {
                variant: "secondary",
                size: "sm",
                text: I.intl.string(el.default.fMbgeZ),
                onClick: () => {
                    (n(), eA(t, l, I.intl.string(el.default.e7pD5m)));
                },
            }),
        ],
    });
}
function t8(e) {
    let { guildId: t, user: l } = e,
        n = et.Ay.useName(t, void 0, l);
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
function t7(e) {
    let { guildId: t, memberIds: l, totalUsers: n, totalGames: s, isCompact: a } = e,
        r = a ? 2 : 4,
        d = (0, R.yK)(
            [eK.A, K.default],
            () =>
                l
                    .filter((e) => !eK.A.isBlockedOrIgnored(e))
                    .map((e) => K.default.getUser(e))
                    .filter(ed.Vq)
                    .slice(0, r),
            [l, r],
        ),
        c = n - d.length;
    return (0, i.jsxs)("div", {
        className: t6.qr,
        children: [
            (0, i.jsx)(A.E, {
                className: t6.z,
                variant: "text-xs/normal",
                color: "text-muted",
                lineClamp: 1,
                children: I.intl.format(el.default.ED2GDQ, { memberCount: n, gameCount: s }),
            }),
            d.length > 0 &&
                (0, i.jsx)("div", {
                    className: t6.WM,
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
                                className: t6.ju,
                                children: (0, i.jsx)(A.E, {
                                    tag: "span",
                                    variant: "text-xs/semibold",
                                    color: "text-subtle",
                                    children: I.intl.formatToPlainString(el.default.G5PLYW, { count: c }),
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
            return ((0, tP.g)(e, n, [], { fireOnMount: !0 }), { ref: e, ...t });
        })(),
        { requirement: o } = (0, Q.T4)(t),
        m = t0(l),
        x = s.useMemo(() => (m ? [] : l.user_ids), [m, l.user_ids]);
    (0, z.k6)(t, x);
    let f = s.useMemo(() => l.games.map((e) => e.application_id), [l.games]),
        h = eu(f),
        p = s.useMemo(() => f.map((e) => h.get(e)?.coverUrl).find(ed.Vq) ?? null, [h, f]),
        j = s.useMemo(() => ({ "--custom-popular-games-columns": c }), [c]),
        v = s.useCallback(
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
        _ = null;
    return (
        (_ = m
            ? (0, i.jsx)(t3, { guildId: t, requirement: o, onClick: () => v("activity_sharing") })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsxs)("div", {
                          className: t6.Qs,
                          children: [
                              null != p
                                  ? (0, i.jsx)("div", {
                                        className: t6.G,
                                        children: (0, i.jsx)("img", { className: t6.LZ, src: p, alt: "" }),
                                    })
                                  : null,
                              (0, i.jsx)("div", {
                                  className: t6.ag,
                                  role: "list",
                                  "aria-label": n,
                                  style: j,
                                  children: l.games
                                      .slice(0, c)
                                      .map((e) =>
                                          (0, i.jsx)(
                                              tJ,
                                              { guildId: t, entry: e, games: h, onClick: () => v("game") },
                                              e.application_id,
                                          ),
                                      ),
                              }),
                          ],
                      }),
                      (0, i.jsxs)("div", {
                          className: t6.sQ,
                          children: [
                              null != o &&
                                  (0, i.jsx)(t4, { guildId: t, requirement: o, onClick: () => v("activity_sharing") }),
                              (0, i.jsx)(t7, {
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
        (0, i.jsx)("div", { className: t6.rf, ref: d, children: _ })
    );
}
function t9(e) {
    return e.default_title ?? I.intl.string(el.default.GZsvDx);
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
                    children: (0, i.jsx)(A.E, {
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
function lu(e) {
    switch (e) {
        case "top_songs":
            return I.intl.string(el.default.KgeEtx);
        case "top_artists":
            return I.intl.string(el.default.RYxWTS);
        case "top_listeners":
            return I.intl.string(el.default.KO73KB);
    }
}
function lo(e, t) {
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
function lv(e) {
    return lg((t) => t.byWidgetId[e]?.selectedTrackId ?? lf.selectedTrackId);
}
function l_(e) {
    let { guildId: t, data: l, view: n, isCompact: i, location: s } = e;
    g.default.track(tt.HAw.POPULAR_MUSIC_CLICK, {
        location: s,
        guild_id: t,
        popular_music_state: null != l ? ld(l, n) : null,
        popular_music_view: n,
        popular_music_layout: lc(i),
    });
}
function lA(e) {
    let { guildId: t, widgetId: l, data: n } = e,
        i = lp(l),
        a = lj(l);
    return s.useCallback((e) => l_({ guildId: t, data: n, view: i, isCompact: a, location: e }), [t, n, i, a]);
}
function lb(e) {
    let { guildId: t, widgetId: l, data: n, length: i, isAtEnd: a, disabled: r = !1 } = e,
        d = lp(l),
        c = lj(l),
        u = null != n ? ld(n, d) : null,
        o = lc(c),
        m = "empty_state" === u,
        x = s.useRef(null),
        f = `${t}:${i}:${u}:${d}:${o}`,
        h = s.useCallback(() => {
            x.current !== f &&
                ((x.current = f),
                g.default.track(tt.HAw.POPULAR_MUSIC_END_IMPRESSION, {
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
function lE(e) {
    let [t, l] = s.useState(null),
        n = s.useCallback(
            (t) => {
                l((l) => (l?.contentKey === e && l.isAtEnd === t ? l : { contentKey: e, isAtEnd: t }));
            },
            [e],
        );
    return [t?.contentKey === e && t.isAtEnd, n];
}
var lI = l(59652),
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
            text: I.intl.string(I.t.RDE0Sc),
            ariaHidden: !0,
            children: (0, i.jsx)(x.K, {
                icon: ly.A,
                size: "sm",
                variant: "overlay-secondary",
                tabIndex: n,
                "aria-label": I.intl.string(I.t.Ej3B3Y),
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
                                    l.e("170653"),
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
                                    l.e("696123"),
                                    l.e("400954"),
                                    l.e("610449"),
                                    l.e("32781"),
                                    l.e("912773"),
                                    l.e("693832"),
                                    l.e("488990"),
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
        u = s.useMemo(() => lI.V.getDefaultLinkInterceptor(c.shareUrl), [c.shareUrl]),
        o = s.useCallback(
            (e) => {
                (a(), u?.(e));
            },
            [u, a],
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
                      onClick: o,
                      children: [
                          m,
                          (0, i.jsx)("span", {
                              className: lT.Qq,
                              children: (0, i.jsx)(A.E, {
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
    lP = (e, t) => (0, i.jsx)(A.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: e }, t);
function lO(e) {
    return e;
}
function lB(e) {
    return e?.direction ?? lG;
}
function lW(e) {
    if (null == e) return null;
    let t = Math.round(Math.abs(e));
    return 0 === t
        ? null
        : { direction: e > 0 ? "up" : "down", label: I.intl.formatToPlainString(el.default["h+LUpk"], { percent: t }) };
}
function lz(e) {
    return lW(null != e.plays_trend_pct ? 100 * e.plays_trend_pct : null);
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
            (0, i.jsx)(A.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: t.label }),
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
    (0, z.k6)(l, a);
    let r = (0, R.yK)([K.default], () => a.map((e) => K.default.getUser(e)), [a]),
        d = s.useMemo(() => r.filter((e) => null != e), [r]);
    if (0 === d.length) return null;
    let c = n.unique_listeners - d.length;
    return (0, i.jsx)("span", {
        className: lH.WM,
        role: "group",
        "aria-label":
            ((t = n.unique_listeners),
            I.intl.formatToPlainString(el.default.AzIhRB, { count: t, trend: lG, countHook: lO })),
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
                    children: (0, i.jsx)(A.E, {
                        tag: "span",
                        variant: "text-sm/semibold",
                        color: "text-subtle",
                        children: I.intl.formatToPlainString(el.default.bFIg0R, { count: c }),
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
                          (0, i.jsx)(A.E, {
                              tag: "div",
                              variant: "heading-xl/semibold",
                              color: "text-default",
                              children: l,
                          }),
                      (0, i.jsxs)("div", {
                          className: lH._0,
                          children: [
                              null != n &&
                                  (0, i.jsx)(A.E, {
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
        r = lW(a.plays_change_percent);
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
                            (0, i.jsx)(A.E, {
                                tag: "span",
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                children:
                                    ((t = a.plays),
                                    I.intl.format(el.default["7hHUIS"], { count: t, trend: lB(r), countHook: lP })),
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
        [r, d] = lE(a.ranked_artists.length),
        c = lA({ guildId: t, widgetId: l, data: a });
    lb({ guildId: t, widgetId: l, data: a, length: a.ranked_artists.length, isAtEnd: r });
    let u = s.useCallback(() => c("artist"), [c]),
        o = s.useCallback(() => c("forward"), [c]),
        m = s.useCallback(
            (e, t, l) => (0, i.jsx)(lD, { artist: e, itemProps: t, cardRef: l, onClick: u, onForwardClick: o }),
            [u, o],
        );
    if (0 === a.ranked_artists.length) return null;
    let x = lz(a);
    return (0, i.jsxs)("div", {
        className: lX.U,
        children: [
            (0, i.jsx)(lZ, {
                label: lu(li.TOP_ARTISTS),
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
                        : I.intl.formatToPlainString(el.default.W8etVA, { count: a.distinct_songs }),
                detail:
                    a.distinct_listeners < 1 || a.distinct_artists < 1
                        ? null
                        : I.intl.format(el.default.yGqf0D, {
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
    l6 = l(73152),
    l3 = l(280911);
function l4(e) {
    let { guildId: t, isCompact: l } = e,
        n = (0, R.bG)([K.default], () => K.default.getCurrentUser()),
        s = (0, R.bG)([ee.Ay], () => (null != n ? ee.Ay.getMember(t, n.id) : null)),
        a = (0, J.gn)(t, n?.id, s?.colorStrings ?? null),
        r = et.Ay.useName(t, void 0, n);
    return (0, i.jsxs)("div", {
        className: l3.D_,
        children: [
            (0, i.jsxs)("div", {
                className: l3.FI,
                "aria-hidden": !0,
                children: [
                    !l &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("span", { className: l3.eu, children: (0, i.jsx)(l1.D, { size: "sm" }) }),
                                (0, i.jsxs)("span", {
                                    className: l3.r$,
                                    children: [
                                        (0, i.jsx)("span", { className: l3.Om }),
                                        (0, i.jsx)("span", { className: l3.Om }),
                                        (0, i.jsx)("span", { className: l3.Om }),
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
                className: l3.Qq,
                children: [
                    (0, i.jsx)(E.D, {
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        lineClamp: 1,
                        children: (0, i.jsx)(O.g, {
                            name: I.intl.formatToPlainString(el.default.subXXA, { name: r }),
                            colorString: s?.colorString ?? null,
                            colorStrings: a,
                        }),
                    }),
                    (0, i.jsx)(A.E, {
                        variant: "text-xs/medium",
                        color: "text-strong",
                        lineClamp: l ? 2 : 1,
                        children: I.intl.string(el.default.y1neEe),
                    }),
                ],
            }),
        ],
    });
}
function l8(e) {
    let { widgetName: t, isCompact: l } = e;
    return (0, i.jsxs)("div", {
        className: l3.D_,
        children: [
            !l &&
                (0, i.jsx)("span", {
                    className: l3.eu,
                    "aria-hidden": !0,
                    children: (0, i.jsx)(l2._, { size: "sm", color: c.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
                }),
            (0, i.jsxs)("div", {
                className: l3.Qq,
                children: [
                    (0, i.jsx)(E.D, {
                        variant: "heading-sm/semibold",
                        color: "text-strong",
                        lineClamp: 1,
                        children: I.intl.string(t2.default.WhdCGP),
                    }),
                    (0, i.jsx)(A.E, {
                        variant: "text-xs/medium",
                        color: "text-strong",
                        lineClamp: l ? 2 : 1,
                        children: I.intl.formatToPlainString(el.default["49Jv0I"], { widgetName: t }),
                    }),
                ],
            }),
        ],
    });
}
function l7(e) {
    let { guildId: t, widgetName: n, isCompact: s, isSpotifyConnected: a, onClick: r } = e;
    return (0, i.jsxs)("div", {
        className: l3.UX,
        children: [
            a ? (0, i.jsx)(l8, { widgetName: n, isCompact: s }) : (0, i.jsx)(l4, { guildId: t, isCompact: s }),
            (0, i.jsx)(W.$, {
                variant: "secondary",
                size: "sm",
                icon: a ? void 0 : l6.E,
                text: a ? I.intl.string(I.t.KY0ilj) : I.intl.string(el.default.jB1fWC),
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
function l5(e) {
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
var l9 = l(625903),
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
        title: I.intl.string(el.default.ULK65a),
        body: I.intl.format(l ? el.default.BLuvck : el.default["Ko3a0+"], { memberCount: 2 }),
        action: l
            ? null
            : (0, i.jsx)(W.$, {
                  variant: "secondary",
                  size: "sm",
                  icon: l9.SettingsIcon,
                  text: I.intl.string(I.t["3D5yo/"]),
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
        title: I.intl.string(el.default.ULK65a),
        body: I.intl.format(el.default.ZQxU8v, { memberCount: 2 }),
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
                    (0, i.jsx)(A.E, {
                        className: nr.Pf,
                        tag: "span",
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: I.intl.string(el.default["3/DOFo"]),
                    }),
                ],
            }),
            (0, i.jsxs)(lC.Anchor, {
                className: nr.al,
                href: lR.RQ.WEB_HOME,
                "aria-label": I.intl.string(el.default["jUr+wF"]),
                children: [
                    (0, i.jsx)("span", {
                        className: nr.Kk,
                        children: (0, i.jsx)(na.L, { size: "xs", color: c.A.colors.ICON_STRONG, "aria-hidden": !0 }),
                    }),
                    !t &&
                        (0, i.jsx)(A.E, {
                            className: nr.G2,
                            tag: "span",
                            variant: "text-xs/medium",
                            color: "none",
                            children: I.intl.string(el.default.ZdPp2q),
                        }),
                ],
            }),
        ],
    });
}
var nc = l(860071),
    nu = l(65154),
    no = l(329177),
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
              className: j()(nm.nM, { [nm.Bh]: d && !o, [nm.lR]: u }),
              children: [
                  (0, i.jsx)(nf, { guildId: l, user: g, identity: f, rank: a, listener: s, onClick: x }),
                  null != s &&
                      (0, i.jsxs)("div", {
                          className: j()(nm.Mx, { [nm.dA]: r }),
                          children: [
                              (0, i.jsx)(nu.S, { size: "xxs", color: c.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                              (0, i.jsx)(A.E, {
                                  variant: "text-sm/medium",
                                  color: "text-strong",
                                  children:
                                      ((t = s.plays), I.intl.formatToPlainString(el.default["7X+3f8"], { count: t })),
                              }),
                          ],
                      }),
                  null != s && !r && (0, i.jsx)(nj, { artists: s.artists, artistCount: s.artist_count ?? null }),
              ],
          });
}
function nf(e) {
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
                className: nm.D_,
                onClick: (t) => {
                    (d(), e.onClick(t));
                },
                children: [
                    null != a &&
                        (0, i.jsx)(U.A, { children: I.intl.formatToPlainString(el.default.I4JiAQ, { rank: a }) }),
                    (0, i.jsxs)("span", {
                        className: nm.R3,
                        children: [
                            m
                                ? (0, i.jsx)("span", {
                                      className: nm.gt,
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
                                    className: nm.ie,
                                    "aria-hidden": !0,
                                    children: (0, i.jsx)(no.CrownIcon, { size: "xxs", color: "currentColor" }),
                                }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: nm.Dc,
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
                                                      return I.intl.string(el.default.I3YOjC);
                                                  case "ignored":
                                                      return I.intl.string(el.default.CfMzwe);
                                              }
                                          })(o)
                                        : (0, i.jsx)(O.g, {
                                              name: n.displayName,
                                              colorString: n.member?.colorString ?? null,
                                              colorStrings: n.roleColorStrings,
                                          }),
                            }),
                            !m && (0, i.jsx)(nh, { listener: r }),
                        ],
                    }),
                ],
            }),
    });
}
function ng(e, t) {
    return (0, i.jsx)(A.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: e }, t);
}
function nh(e) {
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
                ? I.intl.format(el.default.QqaqBg, { trackTitle: l, artistName: n, highlightHook: ng })
                : I.intl.format(el.default.ZMJ8Mt, { trackTitle: l, highlightHook: ng }),
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
                                    children: (0, i.jsx)(A.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: I.intl.formatToPlainString(el.default.bFIg0R, { count: s }),
                                    }),
                                }),
                            }),
                        }),
                ],
            }),
    });
}
var nv = l(897130);
function n_(e) {
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
            [K.default, nc.A],
            () => f.every((e) => null != K.default.getUser(e) || nc.A.isMemberRequestSettled(t, e)),
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
        E = lA({ guildId: t, widgetId: l, data: a }),
        I = s.useCallback(() => E("listener_row"), [E]);
    lb({ guildId: t, widgetId: l, data: a, length: c.length, isAtEnd: b, disabled: !h && !lr(a) });
    let N = null != d,
        C = N ? null : A,
        S = null != C;
    return lr(a)
        ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(ns, {}), d] })
        : (0, i.jsxs)("div", {
              className: nv.SY,
              children: [
                  (0, i.jsxs)(D.d_, {
                      className: j()(nv.p_, { [nv.w]: N }),
                      ref: p,
                      children: [
                          c.map((e, l) => {
                              let s = e.user_id === o;
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
                                      rowRef: s ? _ : void 0,
                                      onClick: I,
                                  },
                                  e.user_id,
                              );
                          }),
                          !N &&
                              null != o &&
                              null == x &&
                              (0, i.jsx)(nx, {
                                  guildId: t,
                                  userId: o,
                                  listener: null,
                                  rank: null,
                                  isCompact: n,
                                  isCurrentUser: !0,
                                  shouldDimForCurrentUser: S,
                                  rowRef: _,
                                  onClick: I,
                              }),
                      ],
                  }),
                  N &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)($, { position: "bottom" }),
                              (0, i.jsx)("div", { className: nv.Kv, children: d }),
                          ],
                      }),
                  null != o &&
                      null != C &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)($, { position: C }),
                              (0, i.jsx)(V, {
                                  position: C,
                                  children: (0, i.jsx)(nx, {
                                      guildId: t,
                                      userId: o,
                                      listener: x,
                                      rank: -1 === m ? null : m + 1,
                                      isCompact: n,
                                      isCurrentUser: !0,
                                      shouldDimForCurrentUser: !1,
                                      isFloating: !0,
                                      onClick: I,
                                  }),
                              }),
                          ],
                      }),
              ],
          });
}
var nA = l(717683);
function nb(e) {
    let { isCompact: t } = e;
    return (0, i.jsxs)("div", {
        className: nA.qV,
        "aria-hidden": !0,
        children: [
            (0, i.jsx)("div", {
                className: j()(nA.Dk, { [nA.yI]: t }),
                children: Array.from({ length: 10 }, (e, t) =>
                    (0, i.jsxs)(
                        "div",
                        {
                            className: nA.Nr,
                            children: [
                                (0, i.jsx)("div", { className: j()(nA.om, nA.xX) }),
                                (0, i.jsxs)("div", {
                                    className: nA.Qq,
                                    children: [
                                        (0, i.jsx)("div", { className: j()(nA.om, nA.DD) }),
                                        (0, i.jsx)("div", { className: j()(nA.om, nA.VA) }),
                                    ],
                                }),
                            ],
                        },
                        t,
                    ),
                ),
            }),
            (0, i.jsxs)("div", {
                className: j()(nA.yp, { [nA.Fl]: t }),
                children: [
                    (0, i.jsx)("div", { className: j()(nA.om, nA.Pl) }),
                    (0, i.jsx)("div", { className: j()(nA.om, nA._0) }),
                ],
            }),
        ],
    });
}
var nE = l(450078),
    nI = l(362704);
function nN(e) {
    let { song: t, isSelected: l, onSelect: n, itemProps: a, cardRef: r, onForwardClick: d } = e,
        c = null != t.cover_art_hash ? lR.RQ.IMAGE(t.cover_art_hash) : null,
        u = s.useMemo(
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
                        FallbackIcon: nE.u,
                        children:
                            l &&
                            (0, i.jsx)("span", {
                                className: j()(lT.Lw, lT.Kp),
                                "aria-hidden": !0,
                                children: (0, i.jsx)(nI.Y, { size: "md", color: "currentColor" }),
                            }),
                    }),
                    null != t.track_title &&
                        (0, i.jsxs)("span", {
                            className: lT.Qq,
                            children: [
                                (0, i.jsx)(A.E, {
                                    className: lT.DD,
                                    tag: "span",
                                    variant: "text-sm/semibold",
                                    color: "text-default",
                                    lineClamp: 1,
                                    children: t.track_title,
                                }),
                                null != t.artist_name &&
                                    (0, i.jsx)(A.E, {
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
            (0, i.jsx)(lw, { target: u, tabIndex: a.tabIndex, onClick: d }),
        ],
    });
}
function nC(e) {
    return e.track_external_id;
}
function nS(e) {
    let t,
        { guildId: l, widgetId: n, isCompact: a, data: r } = e,
        d = lv(n),
        c = lg((e) => e.byWidgetId[n]?.canShowEmbed ?? lf.canShowEmbed),
        [u, o] = lE(r.ranked_songs.length),
        m = lA({ guildId: l, widgetId: n, data: r });
    lb({ guildId: l, widgetId: n, data: r, length: r.ranked_songs.length, isAtEnd: u });
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
        p = lz(r);
    return (0, i.jsxs)("div", {
        className: lX.U,
        children: [
            (0, i.jsx)(lZ, {
                label: lu(li.TOP_SONGS),
                items: r.ranked_songs,
                isCompact: a,
                getItemKey: nC,
                renderItem: g,
                onScrollEndChange: o,
            }),
            null != h
                ? (0, i.jsx)(l$, { guildId: l, isCompact: a, canShowEmbed: c, song: h })
                : (0, i.jsx)(lY, {
                      isCompact: a,
                      headline:
                          (t = Math.round(r.listening_time_ms / ex.A.Millis.MINUTE)) < 1
                              ? null
                              : I.intl.formatToPlainString(el.default["+5b01q"], { minutes: t }),
                      detail:
                          r.distinct_listeners < 1
                              ? null
                              : I.intl.format(el.default.AzIhRB, {
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
        a = s.useMemo(() => ls.map((e) => ({ id: e, label: lu(e), value: e })), []);
    return (0, i.jsx)("div", {
        className: nk.L,
        children: (0, i.jsx)(ny.l, {
            selectionMode: "single",
            label: I.intl.string(el.default.hFYyGU),
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
    return e.default_title ?? I.intl.string(el.default["5xxUI2"]);
}
var nG = l(890497),
    nP = l(734057),
    nO = l(317525),
    nB = l(576705),
    nW = l(935208),
    nz = l(44167);
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
    null == ei.A.getApplication(nJ.NW) && (await (0, nV.TA)(nJ.NW));
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
var n6 = l(344351),
    n3 = l(256693),
    n4 = l(343030),
    n8 = l(317608),
    n7 = l(953538);
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
                        (0, i.jsx)(A.E, {
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
                [u, o] = s.useState(a.text ?? ""),
                [f, g] = s.useState(a.image),
                [h, p] = s.useState(null),
                j = (0, R.bG)([tm.A], () => tm.A.getGuildId()),
                v = void 0 !== f ? f : null != a.image_hash && null != j ? tL(j, t.id, a.image_hash) : null;
            return (0, i.jsxs)(b.B, {
                gap: 16,
                children: [
                    (0, i.jsx)(tS.k, {
                        label: I.intl.string(I.t.gnwWrx),
                        value: r,
                        onChange: function (e) {
                            (p(null), c(e));
                        },
                        maxLength: 100,
                        showCharacterCount: !0,
                    }),
                    (0, i.jsx)(tN.D, {
                        label: I.intl.string(I.t.X4IxWL),
                        children: (0, i.jsxs)(b.B, {
                            gap: 16,
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            className: tM.B,
                            children: [
                                (0, i.jsxs)(b.B, {
                                    gap: 8,
                                    direction: "horizontal",
                                    children: [
                                        (0, i.jsx)(tT.A, {
                                            variant: "secondary",
                                            text: I.intl.string(I.t["MsUY/S"]),
                                            onChange: function (e) {
                                                (p(null), g(e));
                                            },
                                            maxFileSizeBytes: 0xa00000,
                                            onFileSizeError: () => (0, tk.A)(0xa00000),
                                        }),
                                        null != v &&
                                            (0, i.jsx)(m.m, {
                                                text: I.intl.string(I.t.N86XcP),
                                                ariaHidden: !0,
                                                children: (0, i.jsx)(x.K, {
                                                    variant: "critical-secondary",
                                                    icon: ty.TrashIcon,
                                                    onClick: function () {
                                                        (p(null), g(null));
                                                    },
                                                    "aria-label": I.intl.string(I.t.N86XcP),
                                                }),
                                            }),
                                    ],
                                }),
                                null != v && (0, i.jsx)("img", { className: tM.V, src: v, alt: "" }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(tC.f, {
                        label: I.intl.string(I.t.COGMNC),
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
                            children: (0, i.jsx)(tc.w, { type: "critical", message: h, role: "none" }),
                        }),
                    (0, i.jsxs)(tu.e, {
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(W.$, { variant: "secondary", text: I.intl.string(I.t["ETE/oC"]), onClick: n }),
                            (0, i.jsx)(W.$, {
                                variant: "primary",
                                text: I.intl.string(I.t["R3BPH+"]),
                                onClick: function () {
                                    let e;
                                    if (
                                        ((e = void 0 !== f ? null !== f : null != a.image_hash),
                                        0 === u.length && !e && (p(I.intl.string(el.default.zleX9q)), 1))
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
                c = tb({ guildId: a, data: d, expanded: !1, column: l.position.column, enabled: "view" === r }),
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
                              title: I.intl.string(el.default.wqHke4),
                              subtitle: I.intl.string(el.default.n1sscC),
                          })
                        : n?.status === "error"
                          ? (0, i.jsx)(S, {})
                          : null != d
                            ? (0, i.jsx)(tn, { guildId: a, data: d, column: l.position.column, disabled: "view" !== r })
                            : (0, i.jsx)(C, {})),
                (0, i.jsx)("div", { ref: o, children: t })
            );
        },
        Edit: function (e) {
            let { cancel: t } = e,
                l = (0, R.bG)([tm.A], () => tm.A.getGuildId()),
                n = (0, R.bG)([to.A], () => to.A.getGuild(l), [l]),
                a = (0, tf.mN)(n),
                r = null != n && null != n.systemChannelId,
                d = null != n ? n.systemChannelFlags : null,
                [c, u] = s.useState(!1),
                [o, m] = s.useState(null),
                [x, f] = s.useState(!1),
                g = s.useCallback(async () => {
                    if (null == n || null == l || null == o || null == d) return void t();
                    (f(!1), u(!0));
                    try {
                        (await tr.Bo.patch({
                            url: tt.Rsh.GUILD(l),
                            body: { system_channel_flags: (0, ta.lA)(d, tg, !o) },
                            rejectWithError: !0,
                        }),
                            (0, tx.q9)(l, tx.PY.LEADERBOARD_SYSTEM_MESSAGES, o),
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
                    (0, i.jsx)(td.d, {
                        label: I.intl.string(el.default.v0iLIA),
                        description: I.intl.string(el.default["88c7ds"]),
                        checked: o ?? !(0, ta.Lt)(d ?? 0, tg),
                        onChange: m,
                        disabled: h,
                    }),
                    !r && (0, i.jsx)(tc.w, { type: "warning", children: I.intl.string(el.default["1hsDpi"]) }),
                    x && (0, i.jsx)(tc.w, { type: "critical", children: I.intl.string(el.default["4FcF2j"]) }),
                    (0, i.jsxs)(tu.e, {
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(W.$, {
                                variant: "secondary",
                                text: I.intl.string(I.t["ETE/oC"]),
                                onClick: t,
                                disabled: c,
                            }),
                            (0, i.jsx)(W.$, {
                                variant: "primary",
                                text: I.intl.string(I.t["R3BPH+"]),
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
            return null == n || eh(n) ? null : (0, i.jsx)(t_, { data: n });
        },
        HeaderActions: function (e) {
            let { hydration: t, guildId: l, column: n } = e,
                s = t?.status === "success" ? t.data : void 0,
                a = eV(l, s);
            return "mini" !== k({ expanded: !1, column: n }) || (null != a && eh(a))
                ? null
                : (0, i.jsx)(m.m, {
                      text: I.intl.string(I.t.dcl9MQ),
                      children: (0, i.jsx)(x.K, {
                          variant: "icon-only",
                          size: "sm",
                          icon: f._,
                          "aria-label": I.intl.string(I.t.dcl9MQ),
                          disabled: null == a,
                          onClick: function () {
                              null != a &&
                                  null != s &&
                                  (g.default.track(tt.HAw.LEADERBOARD_CLICK, {
                                      location: "expand",
                                      guild_id: l,
                                      leaderboard_state: ej(a),
                                      leaderboard_view: k({ expanded: !1, column: n }),
                                      metric: ev(a.stat),
                                  }),
                                  (function (e) {
                                      let { guildId: t, data: l } = e,
                                          n = (e) => (0, i.jsx)(tI, { guildId: t, data: l, modalProps: e });
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
                c = tA({
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
                              graphic: (0, i.jsx)(tG, { alt: "", ariaHidden: !0, width: 200 }),
                              title: I.intl.string(el.default.v59XPT),
                              subtitle: I.intl.string(el.default.Bayri1),
                          })
                        : n?.status === "error"
                          ? (0, i.jsx)(S, {})
                          : null == n || null == d || "idle" === n.status || "loading" === n.status
                            ? (0, i.jsx)(C, {})
                            : (0, i.jsx)(t5, {
                                  guildId: a,
                                  data: d,
                                  title: t9(l),
                                  column: l.position.column,
                                  disabled: "view" !== r,
                              })),
                (0, i.jsx)("div", { ref: u, children: t })
            );
        },
        Title: function (e) {
            let { widget: t } = e;
            return (0, i.jsx)(h.q, { children: t9(t) });
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
                h = lv(c.id),
                { isContributing: p, isSpotifyConnected: j, hasFetchedConsents: v } = (0, nL.MX)(d),
                _ = u?.status === "success" ? u.data : void 0,
                { data: A, shouldHideCurrentUser: b } = (0, nL.qL)(d, _),
                E = "edit" === o,
                I = null != _ && la(_),
                N = !x && !E && !I,
                y = lA({ guildId: d, widgetId: c.id, data: A }),
                k = (function (e) {
                    let { guildId: t, widgetId: l, data: n, enabled: i } = e,
                        a = lp(l),
                        r = lj(l);
                    return tA({
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
                })({ guildId: d, widgetId: c.id, data: A, enabled: "view" === o }),
                T = s.useCallback(
                    (e) => {
                        k(e?.closest("[data-guild-space-widget]") ?? null);
                    },
                    [k],
                ),
                w = (0, le.A)(m, T);
            lb({ guildId: d, widgetId: c.id, data: A, length: 0, isAtEnd: !1, disabled: E || !I });
            let R =
                    "view" === o && v && !p
                        ? (0, i.jsx)(l7, {
                              guildId: d,
                              widgetName: nU(c),
                              isCompact: x,
                              isSpotifyConnected: j,
                              onClick: () => y("contribution_upsell"),
                          })
                        : null,
                D =
                    E || I || u?.status !== "success" || f === li.TOP_LISTENERS
                        ? null
                        : ((l = u.data),
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
                            "aria-label": N ? void 0 : lu(f),
                            "aria-labelledby": N ? lo(c.id, f) : void 0,
                            children: (function () {
                                if (E) return (0, i.jsx)(nb, { isCompact: x });
                                if (null == u || "idle" === u.status || "loading" === u.status)
                                    return (0, i.jsx)(C, {});
                                if ("error" === u.status) return (0, i.jsx)(S, {});
                                if (I) return (0, i.jsx)(ni, { onSettingsClick: () => y("empty_state_settings") });
                                if (null == A) return (0, i.jsx)(C, {});
                                switch (f) {
                                    case li.TOP_SONGS:
                                        return (0, i.jsx)(nS, { guildId: d, widgetId: c.id, isCompact: x, data: A });
                                    case li.TOP_ARTISTS:
                                        return (0, i.jsx)(l0, { guildId: d, widgetId: c.id, isCompact: x, data: A });
                                    case li.TOP_LISTENERS:
                                        return (0, i.jsx)(n_, {
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
                    (l_({ guildId: s, data: d, view: e, isCompact: a, location: l }),
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
                        tabs: ls.map((e) => ({ id: e, label: lu(e) })),
                        selectedId: r,
                        panelId: lm(t.id),
                        getTabId: (e) => lo(t.id, e),
                        onSelect: (e) => c(e, "view_tab"),
                    });
        },
    },
    [d.a.WHITEBOARD]: {
        View: function (e) {
            let t,
                l,
                n = (0, nz.n)(),
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
                            e.location.kind !== n6.T.GUILD_CHANNEL ||
                            e.location.channel_id !== n
                            ? null
                            : e;
                    },
                    [n],
                ),
                c = (0, R.bG)([n$.Ay], () => n$.Ay.isLaunchingActivity(), []),
                { authResolved: u, isAuthorized: o } =
                    ((t = (0, R.bG)(
                        [nZ.default],
                        () => nZ.default.getFetchStateForApplication(nJ.NW) === nZ.FetchState.FETCHED,
                        [],
                    )),
                    (l = (0, R.bG)(
                        [nZ.default, ei.A],
                        () => {
                            let e = nZ.default.getNewestTokenForApplication(nJ.NW);
                            if (null == e) return !1;
                            let t = ei.A.getApplication(nJ.NW),
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
                            null == ei.A.getApplication(nJ.NW) && (0, nV.TA)(nJ.NW));
                    }, []),
                    { authResolved: t, isAuthorized: l }),
                m = s.useRef(!1);
            s.useEffect(() => {
                null == d && null != n && a && u && o && !m.current && ((m.current = !0), n0(n));
            }, [a, n, d, u, o]);
            let x = s.useCallback(() => {
                    null != n && ((m.current = !0), n0(n));
                }, [n]),
                f = null != n && u && !o;
            return null == n
                ? (0, i.jsx)(b.B, {
                      className: n7.kL,
                      align: "center",
                      justify: "center",
                      children: (0, i.jsx)(r, { alt: "", width: 200, height: 192 }),
                  })
                : a
                  ? (0, i.jsxs)("div", {
                        className: n7.kL,
                        children: [
                            null != d &&
                                (0, i.jsx)(n8.A, {
                                    frameId: (0, n3.Ri)(d),
                                    level: n4.A.WithinAppContent,
                                    className: n7.t$,
                                }),
                            null == d &&
                                f &&
                                (0, i.jsx)("div", {
                                    className: n7.P5,
                                    children: (0, i.jsx)(W.$, {
                                        variant: "secondary",
                                        text: I.intl.string(el.default.PSuly6),
                                        loading: c,
                                        onClick: x,
                                    }),
                                }),
                        ],
                    })
                  : (0, i.jsx)("div", {
                        className: n7.kL,
                        children: (0, i.jsx)("div", {
                            className: n7.m0,
                            children: (0, i.jsx)(A.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: I.intl.string(el.default["nXc/MQ"]),
                            }),
                        }),
                    });
        },
        Edit: function (e) {
            let { cancel: t } = e,
                l = (0, R.bG)([tm.A], () => tm.A.getGuildId()),
                n = nW.default.castGuildIdAsEveryoneGuildRoleId(l),
                a = (0, nz.n)(),
                r = (0, R.bG)([nP.A], () => (null != a ? nP.A.getChannel(a) : void 0), [a]),
                d = (0, R.bG)([nB.A], () => null != r && nB.A.can(tt.xBc.MANAGE_ROLES, r), [r]),
                c = (0, R.bG)([nO.A], () => (null == l ? n2 : nO.A.getSortedRoles(l).filter((e) => e.id !== n)), [
                    l,
                    n,
                ]),
                u = s.useMemo(() => {
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
                [o, m] = s.useState(null),
                [x, f] = s.useState(!1),
                [g, h] = s.useState(!1),
                p = o ?? u,
                j = s.useMemo(() => c.map((e) => ({ id: e.id, label: e.name, value: e.id })), [c]);
            async function v() {
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
                : (0, i.jsxs)(b.B, {
                      gap: 16,
                      children: [
                          (0, i.jsx)(nG.Z, {
                              selectionMode: "multiple",
                              label: I.intl.string(el.default.XXLbfv),
                              description: I.intl.string(el.default.XrpYIG),
                              placeholder: I.intl.string(el.default.pp6WeD),
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
                                  message: I.intl.string(el.default.UPLtlA),
                                  role: "none",
                              }),
                          g &&
                              (0, i.jsx)("div", {
                                  role: "alert",
                                  children: (0, i.jsx)(tc.w, {
                                      type: "critical",
                                      message: I.intl.string(el.default.xyCJYs),
                                      role: "none",
                                  }),
                              }),
                          (0, i.jsxs)(tu.e, {
                              fullWidth: !0,
                              children: [
                                  (0, i.jsx)(W.$, {
                                      variant: "secondary",
                                      text: I.intl.string(I.t["ETE/oC"]),
                                      onClick: t,
                                      disabled: x,
                                  }),
                                  (0, i.jsx)(W.$, {
                                      variant: "primary",
                                      text: I.intl.string(I.t["R3BPH+"]),
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
