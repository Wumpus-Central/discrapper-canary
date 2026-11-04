l.d(t, { m: () => n7 });
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
    c = l(646514);
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
    f = l(408278),
    g = l(26430),
    h = l(129230),
    x = l(562073),
    p = l(503698),
    j = l.n(p),
    v = l(289873),
    _ = l(738188),
    b = l(834730),
    A = l(331322),
    I = l(534514),
    N = l(792996),
    E = l(448492);
function y() {
    return (0, i.jsx)("div", {
        className: E.w,
        children: (0, i.jsx)(v.y, { type: v.y.Type.SPINNING_CIRCLE, "aria-label": N.intl.string(N.t.ZTNur7) }),
    });
}
function C() {
    return (0, i.jsxs)("div", {
        className: E.w,
        role: "alert",
        children: [
            (0, i.jsx)(_.WarningIcon, { size: "md", color: c.A.colors.ICON_MUTED, "aria-hidden": !0 }),
            (0, i.jsx)(b.E, { variant: "body-sm/normal", color: "text-muted", children: N.intl.string(N.t.F8FvUy) }),
        ],
    });
}
function S(e) {
    let { className: t, illustration: l, title: n, body: s, action: a } = e;
    return (0, i.jsxs)(A.B, {
        className: j()(E.p, t),
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
                    (0, i.jsx)(I.D, { variant: "heading-sm/semibold", color: "text-default", children: n }),
                    (0, i.jsx)(b.E, { variant: "body-sm/medium", color: "text-subtle", children: s }),
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
                    (0, i.jsx)(I.D, { variant: "heading-sm/semibold", color: "text-default", children: l }),
                    (0, i.jsx)(b.E, { variant: "body-sm/medium", color: "text-subtle", children: n }),
                ],
            }),
        ],
    });
}
var R = l(855986),
    D = l(95362),
    L = l(939249),
    M = l(663417),
    U = l(140735),
    G = l(97808),
    P = l(778712),
    O = l(463930),
    B = l(478016),
    W = l(821609),
    H = l(80682),
    z = l(827827),
    F = l(894768),
    K = l(287809),
    Y = l(5377),
    q = l(848966);
function $(e) {
    let { position: t } = e;
    return (0, i.jsx)("div", { className: "top" === t ? q.oT : q.yf });
}
function V(e) {
    let { position: t, children: l } = e;
    return (0, i.jsx)("div", { className: "top" === t ? q.sU : q._u, children: l });
}
var Q = l(606072),
    Z = l(135294);
function X(e, t) {
    switch (e) {
        case Q.kG.ACTIVITY_SHARING:
            return {
                body: N.intl.string("popular_games" === t ? Z.default.wyK5KO : Z.default["8y885d"]),
                cta: N.intl.string(Z.default.fMbgeZ),
            };
        case Q.kG.PERSONALIZATION:
            return {
                body: N.intl.string("popular_games" === t ? Z.default.uQOR1j : Z.default.mTARYx),
                cta: N.intl.string(N.t["3/IlR0"]),
            };
        case Q.kG.ALL:
            return { body: N.intl.string(Z.default.hYjG3N), cta: N.intl.string(N.t["3/IlR0"]) };
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
        displayName: l ? N.intl.formatToPlainString(Z.default.subXXA, { name: a }) : a,
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
        name: N.intl.string(N.t.GIWFlF),
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
                          coverUrl: c?.getCoverURL(512) ?? null,
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
function ef(e, t) {
    return t.map((t) => em(e, t));
}
var eg = l(927813),
    eh = l(251812),
    ex = l(518782);
function ep(e) {
    return e.entries.length < 3;
}
function ej(e) {
    return (0, eh.K)(ep(e) ? void 0 : e.stat).name;
}
function ev(e) {
    return ep(e)
        ? "empty_state"
        : !(function (e) {
                if (null == e.day_pt) return !1;
                let t = new Date(e.day_pt).getTime();
                if (Number.isNaN(t)) return !1;
                let l = Math.floor((e.week_start_ts * eg.A.Millis.SECOND) / eg.A.Millis.DAY);
                return Math.floor(t / eg.A.Millis.DAY) === l + 6;
            })(e)
          ? "in_progress"
          : "podium";
}
function e_(e) {
    switch (e) {
        case ex.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            return "hours_played";
        case ex.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return "days_played";
        case ex.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return "unique_games_played";
        default:
            return null;
    }
}
var eb = l(192308);
function eA(e, t, n) {
    (0, eb.mM)(
        async () => {
            let { default: s } = await Promise.all([
                l.e(846201),
                l.e(311913),
                l.e(881717),
                l.e(5257),
                l.e(991625),
                l.e(230029),
                l.e(488926),
                l.e(512831),
                l.e(203112),
                l.e(762831),
                l.e(324469),
                l.e(264236),
                l.e(110116),
                l.e(463095),
                l.e(723794),
                l.e(240511),
                l.e(959134),
                l.e(371482),
                l.e(610943),
                l.e(16954),
                l.e(390213),
                l.e(944602),
                l.e(421778),
                l.e(646191),
                l.e(784170),
                l.e(758219),
            ]).then(l.bind(l, 499334));
            return (l) => (0, i.jsx)(s, { ...l, guildId: e, requirement: t, description: n });
        },
        { modalKey: "guild-space-leaderboard-sharing" },
    );
}
var eI = l(823353);
function eN(e) {
    let { guildId: t, onActivitySharingClick: l } = e,
        { requirement: n } = (0, Q.T4)(t),
        s = null != n ? Z.default.wyIs4o : Z.default["81PK67"];
    return (0, i.jsx)(S, {
        className: eI.w,
        illustration: o,
        title: N.intl.string(Z.default.ULK65a),
        body: N.intl.format(s, { memberCount: 3 }),
        action:
            null != n
                ? (0, i.jsx)(W.$, {
                      variant: "secondary",
                      size: "sm",
                      text: N.intl.string(Z.default.A4ZMJL),
                      onClick: () => {
                          (l(), eA(t, n, N.intl.string(Z.default.PJn0ih)));
                      },
                  })
                : null,
    });
}
let eE =
        "https://cdn.discordapp.com/assets/content/f86a84ce3eb0d44fa03c308be330f508fbcdec9528cd7969c8f7530cdd058898.png",
    ey = `${eE} 1x, https://cdn.discordapp.com/assets/content/61de4c8a747fbce4c3772d27eeffbea00e3f3fbefd2a972d9d25b96d7116f042.png 2x, https://cdn.discordapp.com/assets/content/7e79963a2b009fabcc285dc56b301eb819e63b604739b0a48c8e0044a527a800.png 3x`;
function eC(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, width: d, height: c, className: o, style: u } = e,
        m = s.useMemo(
            () => (0, a.H)({ width: d, height: c, intrinsicWidth: 24, intrinsicHeight: 24, style: u }),
            [d, c, u],
        );
    return (0, i.jsx)("img", {
        style: m,
        src: eE,
        srcSet: ey,
        className: (0, a.Z)(o),
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
let eS =
        "https://cdn.discordapp.com/assets/content/e87b249cc95509b720aae7d01a178fa3b37853797f9ad0b87c93c78934854c1f.png",
    ek = `${eS} 1x, https://cdn.discordapp.com/assets/content/4b18fe6b4c48532112a9ea66da62f20f7690a0de57378da9d92f091eba06f2f5.png 2x, https://cdn.discordapp.com/assets/content/b1f5d190ed2b05b6cefd2d44fc875f383134d87d928e3422de92e5e19378a3ae.png 3x`;
function eT(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, width: d, height: c, className: o, style: u } = e,
        m = s.useMemo(
            () => (0, a.H)({ width: d, height: c, intrinsicWidth: 24, intrinsicHeight: 24, style: u }),
            [d, c, u],
        );
    return (0, i.jsx)("img", {
        style: m,
        src: eS,
        srcSet: ek,
        className: (0, a.Z)(o),
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
var ew = l(125858),
    eR = l(428678),
    eD = l(952270),
    eL = l(702476);
function eM(e) {
    let t = Math.floor(Math.max(e, 0) / eg.A.Seconds.MINUTE),
        l = Math.floor(t / eg.A.Minutes.HOUR),
        n = t % eg.A.Minutes.HOUR;
    return 0 === l
        ? N.intl.formatToPlainString(Z.default.DdzvGL, { minutes: n })
        : N.intl.formatToPlainString(Z.default["6Y8H0A"], { hours: l, minutes: n });
}
function eU(e, t) {
    switch (t) {
        case ex.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return {
                primary: N.intl.formatToPlainString(N.t["k2UNz+"], { days: e.value }),
                secondary: eM(e.time_played_seconds),
            };
        case ex.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return {
                primary: N.intl.formatToPlainString(Z.default.rgpc8E, { count: e.value }),
                secondary: eM(e.time_played_seconds),
            };
        case ex.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            let l, n, i;
            return {
                primary:
                    ((n = Math.floor((l = Math.floor(Math.max(e.value, 0) / eg.A.Millis.MINUTE)) / eg.A.Minutes.HOUR)),
                    (i = l % eg.A.Minutes.HOUR),
                    0 === n
                        ? N.intl.formatToPlainString(Z.default.bgQf2H, { minutes: i })
                        : 0 === i
                          ? N.intl.formatToPlainString(Z.default["D/HToK"], { hours: n })
                          : N.intl.formatToPlainString(Z.default.fvtrHn, { hours: n, minutes: i })),
            };
        default:
            return { primary: "\u2014" };
    }
}
var eG = l(83827),
    eP = l(81466),
    eO = l(406810),
    eB = l(687966),
    eW = l(683063),
    eH = l(573435),
    ez = l(396583),
    eF = l(46653),
    eK = l(994500);
function eY(e, t) {
    let l = t.user_id,
        n = (0, R.bG)([eF.default], () => eF.default.getId() === l, [l]);
    return ei(e, l, { showYouSuffix: n });
}
function eq(e) {
    return (0, R.bG)([eK.A], () => (eK.A.isBlocked(e) ? "blocked" : eK.A.isIgnored(e) ? "ignored" : null), [e]);
}
function e$(e) {
    switch (e) {
        case "blocked":
            return N.intl.string(Z.default.I3YOjC);
        case "ignored":
            return N.intl.string(Z.default.CfMzwe);
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
        f = eY(t, l),
        g = l.application_ids[0],
        h = null != g ? em(a, g) : void 0,
        x = l.user_id,
        p = s.useCallback(() => {
            (u?.(),
                (0, eL.openUserProfileModal)({
                    userId: x,
                    guildId: t,
                    tabSection: eQ.RP.ACTIVITY,
                    scrollTarget: eQ.bk.RECENT_ACTIVITY,
                }));
        }, [u, x, t]);
    return (0, i.jsxs)("div", {
        ref: o,
        "aria-hidden": c,
        inert: c,
        className: j()(eZ.nM, { [eZ.Bh]: r && !c, [eZ.lR]: d }),
        children: [
            (0, i.jsx)(eJ, { guildId: t, entry: l, identity: f, lastPlayedGame: h, onClick: c ? void 0 : u }),
            (0, i.jsx)(e2, { entry: l, stat: n, width: m, onClick: c ? void 0 : p }),
            (0, i.jsx)(e9, {
                name: f.name,
                applicationIds: l.application_ids,
                applicationCount: l.application_count,
                games: a,
                onClick: c ? void 0 : p,
            }),
        ],
    });
}
function eJ(e) {
    let { guildId: t, entry: l, identity: n, lastPlayedGame: s, onClick: a } = e,
        r = eq(l.user_id),
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
                            variant: "heading-xs/semibold",
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
                                variant: "body-xs/medium",
                                color: "text-subtle",
                                lineClamp: 1,
                                children: N.intl.formatToPlainString(Z.default.YuNVPY, { gameName: s.name }),
                            }),
                    ],
                }),
            ],
        }),
        { user: u } = n;
    return null == u || null == a
        ? (0, i.jsx)("div", { className: eZ.D_, children: o })
        : (0, i.jsx)(L.D, {
              className: j()(eZ.D_, eZ.FB),
              onClick: () => {
                  (a(),
                      (0, eL.openUserProfileModal)({
                          userId: u.id,
                          guildId: t,
                          tabSection: eQ.RP.ACTIVITY,
                          scrollTarget: eQ.bk.RECENT_ACTIVITY,
                      }));
              },
              children: o,
          });
}
function e0(e) {
    let { rank: t } = e,
        l = N.intl.formatToPlainString(Z.default.I4JiAQ, { rank: t });
    switch (t) {
        case 1:
            return (0, i.jsx)("div", { className: eZ.Tm, children: (0, i.jsx)(eG.t, { alt: l }) });
        case 2:
            return (0, i.jsx)("div", { className: eZ.Tm, children: (0, i.jsx)(eC, { alt: l }) });
        case 3:
            return (0, i.jsx)("div", { className: eZ.Tm, children: (0, i.jsx)(eT, { alt: l }) });
        default:
            return (0, i.jsxs)("div", {
                className: eZ.mH,
                children: [
                    (0, i.jsx)(U.A, { children: l }),
                    (0, i.jsx)(b.E, {
                        variant: "body-sm/semibold",
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
        case ex.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return (0, i.jsx)(eP.CalendarIcon, { size: "xxs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case ex.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            return (0, i.jsx)(eO.ClockIcon, { size: "xxs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case ex.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return (0, i.jsx)(eB.GameControllerIcon, { size: "xxs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        default:
            return null;
    }
}
function e2(e) {
    let { entry: t, stat: l, width: n, onClick: s } = e,
        { primary: a, secondary: r } = eU(t, l),
        d = eZ.TH,
        c = null != n ? { width: n } : void 0,
        o = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: eZ.bf,
                    children: [
                        (0, i.jsx)(e1, { stat: l }),
                        (0, i.jsx)(b.E, { variant: "body-sm/medium", color: "text-subtle", children: a }),
                    ],
                }),
                null != r && (0, i.jsx)(b.E, { variant: "body-xs/medium", color: "text-muted", children: r }),
            ],
        });
    return null == s
        ? (0, i.jsx)("div", { className: d, style: c, children: o })
        : (0, i.jsx)(L.D, {
              className: d,
              style: c,
              "aria-label": N.intl.string(Z.default.o6mBdl),
              onClick: s,
              children: o,
          });
}
function e3(e) {
    let { game: t, notched: l } = e;
    return (0, i.jsx)("span", {
        className: eZ.rO,
        "aria-hidden": !0,
        children: (0, i.jsx)(eH.Ay, {
            mask: l ? eH.l8[24] : eH.Ay.Masks.SQUIRCLE,
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
                      children: (0, i.jsx)(eH.Ay, {
                          mask: eH.Ay.Masks.SQUIRCLE,
                          width: 24,
                          height: 24,
                          children: (0, i.jsx)("div", {
                              className: eZ.p0,
                              children: (0, i.jsx)(b.E, {
                                  variant: "body-xs/semibold",
                                  color: "text-subtle",
                                  children: N.intl.formatToPlainString(Z.default.JiMMEd, { count: s }),
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
        { visibleGames: s, overflowCount: a } = e6(t, l),
        r = Math.max(1, s.length + Number(a > 0));
    return (0, i.jsx)(eW.u, {
        body:
            0 === t.length
                ? N.intl.string(Z.default["7CrlYb"])
                : 1 === t.length
                  ? N.intl.formatToPlainString(Z.default.dbNpK0, { firstGame: t[0].name })
                  : 2 === t.length && 2 === l
                    ? N.intl.formatToPlainString(Z.default.tqVg4M, { firstGame: t[0].name, secondGame: t[1].name })
                    : 3 === t.length && 3 === l
                      ? N.intl.formatToPlainString(Z.default["7h8GUv"], {
                            firstGame: t[0].name,
                            secondGame: t[1].name,
                            thirdGame: t[2].name,
                        })
                      : N.intl.formatToPlainString(Z.default.bxcrSz, {
                            firstGame: t[0].name,
                            secondGame: t[1].name,
                            otherCount: l - 2,
                        }),
        asset: s.length > 0 ? (0, i.jsx)(e4, { played: t, totalCount: l }) : void 0,
        assetSize: 24 * r - 5 * (r - 1),
        children: n,
    });
}
function e9(e) {
    let { name: t, applicationIds: l, applicationCount: n, games: s, onClick: a } = e,
        r = ef(s, l);
    return null == a
        ? (0, i.jsx)("div", {
              className: eZ.ag,
              children: (0, i.jsx)("div", { className: eZ.Nw, children: (0, i.jsx)(e4, { played: r, totalCount: n }) }),
          })
        : (0, i.jsx)("div", {
              className: eZ.ag,
              children: (0, i.jsx)(e8, {
                  played: r,
                  totalCount: n,
                  children: (0, i.jsx)(L.D, {
                      className: j()(eZ.Nw, eZ.Dz),
                      "aria-label": N.intl.formatToPlainString(Z.default.o6mBdl, { name: t }),
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
        "aria-label": N.intl.string(Z.default.wKXLfQ),
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
        f = ef(d, l.application_ids),
        g = eY(t, l),
        h = eq(l.user_id),
        x = null != h,
        { primary: p } = eU(l, r),
        v = 1 === n ? P._3.SIZE_48 : P._3.SIZE_40,
        _ = 1 === n ? ew.b : 2 === n ? eC : eT,
        A = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: e5.R3,
                    children: [
                        x
                            ? (0, i.jsx)("span", {
                                  className: j()(e5.gt, 1 === n && e5.o2),
                                  children:
                                      "blocked" === h
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
                                  size: v,
                                  src: g.user?.getAvatarURL(t, (0, P.FT)(v)) ?? void 0,
                                  "aria-hidden": !0,
                              }),
                        (0, i.jsx)(_, { className: e5.dR, alt: "", ariaHidden: !0 }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: j()(e5.DX, a),
                    children: [
                        (0, i.jsx)(I.D, {
                            variant: "heading-xs/semibold",
                            color: x ? "text-subtle" : "text-default",
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
                            children: (0, i.jsx)(b.E, {
                                variant: "body-xs/medium",
                                color: "text-default",
                                children: p,
                            }),
                        }),
                    ],
                }),
            ],
        }),
        { user: N } = g;
    return (0, i.jsx)("div", {
        className: s,
        role: "listitem",
        ref: o ? u : void 0,
        children:
            null != N
                ? (0, i.jsx)(L.D, {
                      className: e5.fs,
                      onClick: () => {
                          (m?.(),
                              (0, eL.openUserProfileModal)({
                                  userId: N.id,
                                  guildId: t,
                                  tabSection: eQ.RP.ACTIVITY,
                                  scrollTarget: eQ.bk.RECENT_ACTIVITY,
                              }));
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
        f = s.useMemo(() => Array.from(new Set(m.map((e) => e.user_id))), [m]);
    (0, H.k6)(t, f);
    let g = e_(d),
        x = eu(s.useMemo(() => Array.from(new Set(m.flatMap((e) => e.application_ids))), [m])),
        p = ep(l),
        v = ev(l),
        _ = "podium" === v,
        b = k({ expanded: n, column: a }),
        A = [m[0], m[1], m[2]],
        { scrollerRef: I, scrollerNode: E, userRowRef: C, floatingRowPosition: S, scrollToUserRow: T } = ee(),
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
        })(E),
        M = null == u && null != o,
        U = null != S,
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
                    h.default.track(tt.HAw.LEADERBOARD_END_IMPRESSION, {
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
        leaderboardState: v,
        leaderboardView: b,
        metric: g,
        isAtEnd: w,
        isEmpty: p,
        disabled: r,
    });
    let W = s.useCallback(
            (e) => {
                r ||
                    h.default.track(tt.HAw.LEADERBOARD_CLICK, {
                        location: e,
                        guild_id: t,
                        leaderboard_state: v,
                        leaderboard_view: b,
                        metric: g,
                    });
            },
            [t, v, b, g, r],
        ),
        z = s.useCallback(
            (e) => {
                let l = e === u;
                return (0, i.jsx)(
                    eX,
                    {
                        guildId: t,
                        entry: e,
                        stat: d,
                        games: x,
                        isCurrentUser: l,
                        shouldDimForCurrentUser: l && U,
                        rowRef: l ? C : void 0,
                        onClick: () => W("row"),
                        metricWidth: O ?? void 0,
                    },
                    `${e.rank}-${e.user_id}`,
                );
            },
            [U, u, x, t, d, C, W, O],
        );
    return p
        ? (0, i.jsx)("div", {
              className: tl.Cm,
              children: (0, i.jsx)(eN, { guildId: t, onActivitySharingClick: () => W("activity_sharing") }),
          })
        : null == O
          ? (0, i.jsxs)("div", { className: tl.rf, children: [B, (0, i.jsx)(y, {})] })
          : (0, i.jsxs)("div", {
                className: tl.rf,
                children: [
                    B,
                    (0, i.jsxs)("div", {
                        className: tl.SY,
                        children: [
                            (0, i.jsxs)(D.Ip, {
                                fade: !0,
                                className: j()(tl.p_, { [tl.zE]: n, [tl.Ng]: M }),
                                ref: I,
                                children: [
                                    _ &&
                                        (0, i.jsx)(e7, {
                                            guildId: t,
                                            entries: A,
                                            stat: d,
                                            games: x,
                                            currentUserEntry: u,
                                            currentUserPillarRef: C,
                                            onClick: () => W("podium"),
                                        }),
                                    m.map(z),
                                ],
                            }),
                            (null != u && null != S) || (M && !w)
                                ? (0, i.jsx)($, { position: "top" !== S || M ? "bottom" : "top" })
                                : null,
                            null != u &&
                                null != S &&
                                (0, i.jsx)(V, {
                                    position: S,
                                    children: (0, i.jsx)(L.D, {
                                        className: tl.Po,
                                        "aria-label": N.intl.string(Z.default.d0Z8kd),
                                        onClick: T,
                                        children: (0, i.jsx)(eX, {
                                            guildId: t,
                                            entry: u,
                                            stat: d,
                                            games: x,
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
                (0, i.jsx)(b.E, {
                    variant: "body-xs/medium",
                    color: "text-subtle",
                    children: N.intl.string(Z.default["/nma+a"]),
                }),
            ],
        });
    return null == t
        ? (0, i.jsx)("div", { className: tl.qr, children: n })
        : (0, i.jsx)("div", {
              className: j()(tl.qr, { [tl.zE]: l }),
              tabIndex: 0,
              children: (0, i.jsx)(m.m, {
                  text: N.intl.formatToPlainString(Z.default["1bt50t"], {
                      timestamp: (0, Y.mk)(new Date(t)).toLowerCase(),
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
        d = N.intl.string(Z.default.toxuHd),
        o = !1;
    null != a ? (d = a.body) : r && ((d = N.intl.string(Z.default.PTDDhW)), (o = !0));
    let [u] = s.useState(null != a),
        [m] = s.useState(o),
        f = null == a && !o && u,
        g = null == a && !o && m;
    g ? (d = N.intl.string(Z.default.cgRADC)) : f && (d = N.intl.string(Z.default.dqYuni));
    let {
        user: h,
        member: x,
        name: p,
        roleColorStrings: j,
    } = ei(
        t,
        (0, R.bG)([K.default], () => K.default.getCurrentUser()?.id ?? ""),
    );
    return null == h
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
                                  (0, i.jsx)(U.A, { children: N.intl.string(Z.default["oHdW+u"]) }),
                                  (0, i.jsx)(b.E, {
                                      variant: "body-sm/semibold",
                                      color: "text-muted",
                                      "aria-hidden": !0,
                                      children: "?",
                                  }),
                              ],
                          }),
                          (0, i.jsx)(G.eu, {
                              size: P._3.SIZE_32,
                              src: h.getAvatarURL(t, (0, P.FT)(P._3.SIZE_32)) ?? void 0,
                              className: tl.SA,
                              "aria-hidden": !0,
                              status: r ? tt.clD.INVISIBLE : void 0,
                          }),
                          (0, i.jsxs)("div", {
                              className: tl.ko,
                              children: [
                                  (0, i.jsx)(I.D, {
                                      variant: "heading-xs/semibold",
                                      color: "text-default",
                                      lineClamp: 1,
                                      children: (0, i.jsx)(O.g, {
                                          name: p,
                                          colorString: x?.colorString ?? null,
                                          colorStrings: j,
                                      }),
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: tl.LF,
                                      children: [
                                          f || g
                                              ? (0, i.jsx)(B.U, {
                                                    size: "xs",
                                                    color: c.A.colors.ICON_FEEDBACK_POSITIVE,
                                                    "aria-hidden": !0,
                                                })
                                              : null,
                                          (0, i.jsx)(b.E, {
                                              variant: "body-xs/medium",
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
                          children: (0, i.jsx)(W.$, {
                              variant: "secondary",
                              size: "sm",
                              text: a.cta,
                              onClick: () => {
                                  (l(), eA(t, a.requirement, N.intl.string(Z.default.PJn0ih)));
                              },
                          }),
                      }),
                  o &&
                      (0, i.jsx)(W.$, {
                          variant: "secondary",
                          size: "sm",
                          text: N.intl.string(N.t.fwPurU),
                          onClick: () => {
                              (0, z.A)({ nextStatus: tt.clD.ONLINE, prevStatus: tt.clD.INVISIBLE });
                          },
                      }),
              ],
          });
}
var ta = l(665260),
    tr = l(620632),
    td = l(143129),
    tc = l(683071),
    to = l(825484),
    tu = l(71393),
    tm = l(967198),
    tf = l(49303),
    tg = l(313627);
let th = tt.ogj.SUPPRESS_GAMING_LEADERBOARD_NOTIFICATIONS;
var tx = l(224640),
    tp = l(20742),
    tj = l(253932),
    tv = l(515746);
function t_(e) {
    let { data: t } = e,
        l = (0, eh.K)(t.stat),
        {
            ended: n,
            endDate: a,
            badgeLabel: r,
        } = (function (e) {
            let t = (e + eg.A.Seconds.WEEK) * eg.A.Millis.SECOND,
                [l, n] = s.useState(() => Date.now()),
                i = t - l,
                a = i <= 0,
                r = i - (Math.ceil(i / eg.A.Millis.DAY) - 1) * eg.A.Millis.DAY;
            return (
                (0, ez.A)(() => n(Date.now()), a ? null : r),
                s.useMemo(
                    () => ({
                        ended: a,
                        endDate: new Date(t),
                        badgeLabel: a
                            ? N.intl.string(Z.default["J8r/7L"])
                            : N.intl.formatToPlainString(Z.default["PuaR+2"], { days: Math.ceil(i / eg.A.Millis.DAY) }),
                    }),
                    [a, t, i],
                )
            );
        })(t.week_start_ts),
        d = tj.PZ.useSetting(),
        c = 2 > (0, Y.m_)(a, new Date()) ? (0, Y.mk)(a, !1, d).toLowerCase() : (0, Y.i$)(a, "L LT", d).toLowerCase(),
        o = n
            ? N.intl.format(Z.default.kG9XmM, { endedAt: c, nextStatName: (0, eh.K)(t.next_stat).name })
            : N.intl.format(Z.default["X+VLqi"], { statQuestion: l.question, endsAt: c });
    return (0, i.jsx)(eW.u, {
        title: l.name,
        body: o,
        position: "top",
        children: (0, i.jsx)("div", {
            className: j()(tv.qS, n ? tv.yM : tv.Qk),
            tabIndex: 0,
            children: (0, i.jsx)(b.E, {
                variant: "body-xs/semibold",
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
    let { guildId: t, data: l, expanded: n, column: i, enabled: a } = e;
    return tb({
        onHoverEnd: s.useCallback(
            (e) => {
                let { duration: s, flush: a } = e;
                null != l &&
                    h.default.track(
                        tt.HAw.LEADERBOARD_HOVER,
                        {
                            guild_id: t,
                            duration: s,
                            leaderboard_state: ev(l),
                            leaderboard_view: k({ expanded: n, column: i }),
                            metric: e_(l.stat),
                        },
                        { flush: a },
                    );
            },
            [t, l, n, i],
        ),
        enabled: a,
    });
}
var tI = l(460614);
function tN(e) {
    let { guildId: t, data: l, modalProps: n } = e,
        s = eV(t, l),
        a = tA({ guildId: t, data: s, expanded: !0 });
    return null == s
        ? null
        : (0, i.jsx)(tx.d, {
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
                                          variant: "heading-xs/medium",
                                          className: tI.DD,
                                          children: ej(s),
                                      }),
                                      (0, i.jsx)(t_, { data: s }),
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
var tE = l(452027),
    ty = l(103557),
    tC = l(95477),
    tS = l(241326),
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
    return ("jpg" === i && (c.quality = "lossless"), "webp" === i && n && (c.animated = !0), (d += `?${tw.As(c)}`));
}
var tM = l(868602);
function tU(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, width: d, height: c, className: o, style: u } = e,
        m = s.useMemo(
            () => (0, a.H)({ width: d, height: c, intrinsicWidth: 288, intrinsicHeight: 192, style: u }),
            [d, c, u],
        );
    return (0, i.jsx)("img", {
        style: m,
        src: "https://cdn.discordapp.com/assets/content/1c5d5dd760fa15de3c2ad23c6b191aa9fd5eefde3c29367503b5d90af485a3e3.svg",
        className: (0, a.Z)(o),
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
var tG = l(22231),
    tP = l(445187);
function tO(e) {
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
var tB = l(770178),
    tW = l(104171),
    tH = l(619019),
    tz = l(165862),
    tF = l(477782),
    tK = l(950305),
    tY = l(265872),
    tq = l(966327),
    t$ = l(409626),
    tV = l(692969),
    tQ = l(788593),
    tZ = l(427262);
l(347661);
var tX = l(948852),
    tJ = l(365611);
function t0(e) {
    let { guildId: t, applicationId: l, userIds: n, totalUsers: a, gameName: r } = e,
        d = s.useRef(null),
        o = (0, R.yK)([eK.A], () => n.filter((e) => !eK.A.isBlockedOrIgnored(e)).slice(0, 5), [n]),
        u = (0, R.yK)([K.default], () => o.map((e) => K.default.getUser(e)).filter(ec.Vq), [o]),
        m = (0, R.cf)(
            [el.Ay],
            () => {
                let e = {};
                for (let l of u) e[l.id] = el.Ay.getNick(t, l.id) ?? tZ.Ay.getName(l);
                return e;
            },
            [t, u],
        ),
        f = Math.max(0, a - u.length),
        g = N.intl.formatToPlainString(Z.default["XaT+x0"], { count: a, gameName: r }),
        h = N.intl.formatToPlainString(N.t.F6iMs4, { count: f }),
        x = s.useCallback(
            (e) => {
                let { closePopout: n } = e;
                return (0, i.jsxs)(tz.W, {
                    navId: `popular-games-players-${l}`,
                    "aria-label": g,
                    onClose: n,
                    onSelect: void 0,
                    children: [
                        u.map((e) =>
                            (0, i.jsx)(
                                tF.Dr,
                                {
                                    id: e.id,
                                    label: m[e.id],
                                    leadingAccessory: {
                                        type: "avatar",
                                        src: e.getAvatarURL(t, (0, P.FT)(P._3.SIZE_24)),
                                    },
                                    iconLeft: () =>
                                        (0, i.jsx)(tq.A, {
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
                        f > 0 ? (0, i.jsx)(tF.Dr, { id: `${l}-overflow`, label: h, disabled: !0 }) : null,
                    ],
                });
            },
            [l, t, g, m, f, h, u],
        ),
        p = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(tK.UserIcon, {
                    size: "custom",
                    width: 14,
                    height: 14,
                    color: c.A.colors.ICON_SUBTLE,
                    "aria-hidden": !0,
                }),
                (0, i.jsx)(b.E, {
                    tag: "span",
                    className: tX.Rd,
                    variant: "body-sm/medium",
                    color: "text-subtle",
                    children: a,
                }),
            ],
        });
    return 0 === u.length
        ? (0, i.jsx)("div", { className: tX.Fk, role: "img", "aria-label": g, children: p })
        : (0, i.jsx)(tY.Y, {
              targetElementRef: d,
              position: "bottom",
              align: "left",
              renderPopout: x,
              children: (e) =>
                  (0, i.jsx)(L.D, { innerRef: d, className: j()(tX.Fk, tX.r6), ...e, "aria-label": g, children: p }),
          });
}
function t1(e) {
    let { guildId: t, entry: l, games: n, onClick: s } = e,
        { name: a, coverUrl: r, coverFallbackIconUrl: d, isLoading: c } = em(n, l.application_id),
        o = (0, tV.A)({
            location: "PopularGamesGameCard",
            applicationId: l.application_id,
            source: t$.GameProfileSources.GuildSpacePopularGames,
            trackEntryPointImpression: !0,
        }),
        u = null != o;
    if (c)
        return (0, i.jsx)("div", {
            className: tX.Nr,
            role: "listitem",
            children: (0, i.jsx)("div", { className: tJ.mD }),
        });
    let f = (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.m, {
                text: a,
                ariaHidden: !0,
                children: (0, i.jsx)("div", {
                    className: j()(tJ.PY, { [tJ.vk]: u, [tJ.iL]: u && (null != r || null != d) }),
                    children: (0, i.jsx)(tQ.R, { imageSrc: r, iconSrc: d, gameName: a }),
                }),
            }),
            (0, i.jsx)(b.E, { variant: "body-sm/semibold", color: "text-default", lineClamp: 1, children: a }),
        ],
    });
    return (0, i.jsxs)("div", {
        className: tX.Nr,
        role: "listitem",
        children: [
            u
                ? (0, i.jsx)(L.D, {
                      className: j()(tX.LO, tX.vk),
                      onClick: () => {
                          (o(), s());
                      },
                      "aria-label": N.intl.formatToPlainString(N.t["8QLQB+"], { gameName: a }),
                      children: f,
                  })
                : (0, i.jsx)("div", { className: tX.LO, children: f }),
            (0, i.jsx)(t0, {
                guildId: t,
                applicationId: l.application_id,
                userIds: l.user_ids,
                totalUsers: l.total_users,
                gameName: a,
            }),
        ],
    });
}
function t2(e) {
    return 0 === e.games.length || e.total_users < 3;
}
function t3(e) {
    return t2(e) ? "empty_state" : "regular";
}
var t6 = l(966756),
    t4 = l(560328);
function t8(e) {
    let { guildId: t, requirement: l, onClick: n } = e;
    return (0, i.jsx)(S, {
        className: t4.p$,
        illustration: tO,
        title: N.intl.string(Z.default.ULK65a),
        body: N.intl.format(null != l ? Z.default.JDAHQV : Z.default.LeSGal, { memberCount: 3 }),
        action:
            null != l
                ? (0, i.jsx)(W.$, {
                      variant: "secondary",
                      size: "sm",
                      text: N.intl.string(Z.default.A4ZMJL),
                      onClick: () => {
                          (n(), eA(t, l, N.intl.string(Z.default.e7pD5m)));
                      },
                  })
                : null,
    });
}
function t9(e) {
    let { guildId: t, requirement: l, onClick: n } = e,
        s = X(l, "popular_games");
    return (0, i.jsxs)("div", {
        className: t4.UX,
        children: [
            (0, i.jsxs)("div", {
                className: t4.tD,
                children: [
                    (0, i.jsx)(I.D, {
                        variant: "heading-xs/semibold",
                        color: "text-default",
                        lineClamp: 1,
                        children: N.intl.string(t6.default.WhdCGP),
                    }),
                    (0, i.jsx)(b.E, {
                        variant: "body-xs/medium",
                        color: "text-subtle",
                        lineClamp: 2,
                        children: s.body,
                    }),
                ],
            }),
            (0, i.jsx)(W.$, {
                variant: "secondary",
                size: "sm",
                text: s.cta,
                onClick: () => {
                    (n(), eA(t, l, N.intl.string(Z.default.e7pD5m)));
                },
            }),
        ],
    });
}
function t5(e) {
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
function t7(e) {
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
        className: t4.qr,
        children: [
            (0, i.jsx)(b.E, {
                className: t4.z,
                variant: "body-xs/normal",
                color: "text-muted",
                lineClamp: 1,
                children: N.intl.format(Z.default.ED2GDQ, { memberCount: n, gameCount: s }),
            }),
            d.length > 0 &&
                (0, i.jsx)("div", {
                    className: t4.WM,
                    children: (0, i.jsx)(tW.Ay, {
                        users: d,
                        guildId: t,
                        size: tW.DN.SIZE_24,
                        max: d.length,
                        renderUser: function (e) {
                            return e instanceof tH.A ? (0, i.jsx)(t5, { guildId: t, user: e }) : null;
                        },
                        count: n,
                        hideMoreUsers: c <= 0,
                        renderMoreUsers: () =>
                            (0, i.jsx)("span", {
                                className: t4.ju,
                                children: (0, i.jsx)(b.E, {
                                    tag: "span",
                                    variant: "body-xs/semibold",
                                    color: "text-subtle",
                                    children: N.intl.formatToPlainString(Z.default.G5PLYW, { count: c }),
                                }),
                            }),
                    }),
                }),
        ],
    });
}
function le(e) {
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
            return ((0, tB.g)(e, n, [], { fireOnMount: !0 }), { ref: e, ...t });
        })(),
        { requirement: u } = (0, Q.T4)(t),
        m = t2(l),
        f = s.useMemo(() => (m ? [] : l.user_ids), [m, l.user_ids]);
    (0, H.k6)(t, f);
    let g = s.useMemo(() => l.games.map((e) => e.application_id), [l.games]),
        x = eu(g),
        p = s.useMemo(() => g.map((e) => x.get(e)?.coverUrl).find(ec.Vq) ?? null, [x, g]),
        j = s.useMemo(() => ({ "--custom-popular-games-columns": c }), [c]),
        v = s.useCallback(
            (e) => {
                r ||
                    h.default.track(tt.HAw.POPULAR_GAMES_CLICK, {
                        location: e,
                        guild_id: t,
                        popular_games_state: t3(l),
                        popular_games_view: k({ expanded: !1, column: a }),
                    });
            },
            [r, t, l, a],
        ),
        _ = null;
    return (
        (_ = m
            ? (0, i.jsx)(t8, { guildId: t, requirement: u, onClick: () => v("activity_sharing") })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsxs)("div", {
                          className: t4.Qs,
                          children: [
                              null != p
                                  ? (0, i.jsx)("div", {
                                        className: t4.G,
                                        children: (0, i.jsx)("img", { className: t4.LZ, src: p, alt: "" }),
                                    })
                                  : null,
                              (0, i.jsx)("div", {
                                  className: t4.ag,
                                  role: "list",
                                  "aria-label": n,
                                  style: j,
                                  children: l.games
                                      .slice(0, c)
                                      .map((e) =>
                                          (0, i.jsx)(
                                              t1,
                                              { guildId: t, entry: e, games: x, onClick: () => v("game") },
                                              e.application_id,
                                          ),
                                      ),
                              }),
                          ],
                      }),
                      (0, i.jsxs)("div", {
                          className: t4.sQ,
                          children: [
                              null != u &&
                                  (0, i.jsx)(t9, { guildId: t, requirement: u, onClick: () => v("activity_sharing") }),
                              (0, i.jsx)(t7, {
                                  guildId: t,
                                  memberIds: f,
                                  totalUsers: l.total_users,
                                  totalGames: l.total_games,
                                  isCompact: o,
                              }),
                          ],
                      }),
                  ],
              })),
        (0, i.jsx)("div", { className: t4.rf, ref: d, children: _ })
    );
}
function lt(e) {
    return e.default_title ?? N.intl.string(Z.default.GZsvDx);
}
var ll = l(612324),
    ln = l(650583),
    li = l(684343);
function ls(e) {
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
                    case ln.dh.ARROW_RIGHT:
                    case ln.dh.ARROW_DOWN:
                        t = (s + 1) % i.length;
                        break;
                    case ln.dh.ARROW_LEFT:
                    case ln.dh.ARROW_UP:
                        t = (s - 1 + i.length) % i.length;
                        break;
                    case ln.dh.HOME:
                        t = 0;
                        break;
                    case ln.dh.END:
                        t = i.length - 1;
                        break;
                    default:
                        return;
                }
                (e.preventDefault(), i[t]?.focus());
            }
        }, []);
    return (0, i.jsx)("div", {
        className: li.vR,
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
                    className: li.Mf,
                    "aria-selected": t,
                    "aria-controls": a,
                    tabIndex: t ? 0 : -1,
                    onClick: () => d(e.id),
                    onKeyDown: c,
                    children: (0, i.jsx)(b.E, {
                        className: li.Pf,
                        tag: "span",
                        variant: "body-xs/medium",
                        color: "none",
                        children: e.label,
                    }),
                },
                e.id,
            );
        }),
    });
}
var la = (((n = {}).TOP_SONGS = "top_songs"), (n.TOP_ARTISTS = "top_artists"), (n.TOP_LISTENERS = "top_listeners"), n);
let lr = ["top_songs", "top_artists", "top_listeners"];
function ld(e) {
    return 1 > e.ranked_songs.reduce((e, t) => e + t.plays, 0);
}
function lc(e) {
    return e.top_listeners.length < 2;
}
function lo(e, t) {
    return ld(e) || ("top_listeners" === t && lc(e)) ? "empty_state" : "populated";
}
function lu(e) {
    return e ? "compact" : "regular";
}
function lm(e) {
    switch (e) {
        case "top_songs":
            return N.intl.string(Z.default.KgeEtx);
        case "top_artists":
            return N.intl.string(Z.default.RYxWTS);
        case "top_listeners":
            return N.intl.string(Z.default.KO73KB);
    }
}
function lf(e, t) {
    return `popular-music-tab-${e}-${t}`;
}
function lg(e) {
    return `popular-music-panel-${e}`;
}
var lh = l(196765);
let lx = { view: "top_songs", isCompact: !1, canShowEmbed: !1, selectedTrackId: null },
    lp = (0, lh.v)(() => ({ byWidgetId: {} }));
function lj(e, t) {
    lp.setState((l) => {
        let n = l.byWidgetId[e] ?? lx;
        return { byWidgetId: { ...l.byWidgetId, [e]: { ...n, ...t } } };
    });
}
function lv(e) {
    return lp((t) => t.byWidgetId[e]?.view ?? lx.view);
}
function l_(e) {
    return lp((t) => t.byWidgetId[e]?.isCompact ?? lx.isCompact);
}
function lb(e) {
    return lp((t) => t.byWidgetId[e]?.selectedTrackId ?? lx.selectedTrackId);
}
function lA(e) {
    let { guildId: t, data: l, view: n, isCompact: i, location: s } = e;
    h.default.track(tt.HAw.POPULAR_MUSIC_CLICK, {
        location: s,
        guild_id: t,
        popular_music_state: null != l ? lo(l, n) : null,
        popular_music_view: n,
        popular_music_layout: lu(i),
    });
}
function lI(e) {
    let { guildId: t, widgetId: l, data: n } = e,
        i = lv(l),
        a = l_(l);
    return s.useCallback((e) => lA({ guildId: t, data: n, view: i, isCompact: a, location: e }), [t, n, i, a]);
}
function lN(e) {
    let { guildId: t, widgetId: l, data: n, length: i, isAtEnd: a, disabled: r = !1 } = e,
        d = lv(l),
        c = l_(l),
        o = null != n ? lo(n, d) : null,
        u = lu(c),
        m = "empty_state" === o,
        f = s.useRef(null),
        g = `${t}:${i}:${o}:${d}:${u}`,
        x = s.useCallback(() => {
            f.current !== g &&
                ((f.current = g),
                h.default.track(tt.HAw.POPULAR_MUSIC_END_IMPRESSION, {
                    guild_id: t,
                    popular_music_length: m ? 0 : i,
                    popular_music_state: o,
                    popular_music_view: d,
                    popular_music_layout: u,
                }));
        }, [t, g, m, i, o, d, u]);
    s.useEffect(() => {
        !r && null != o && (m || a) && x();
    }, [r, o, m, a, x]);
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
var ly = l(59652),
    lC = l(991308),
    lS = l(28863),
    lk = l(148166),
    lT = l(427209),
    lw = l(294454),
    lR = l(605810);
function lD(e) {
    let { target: t, tabIndex: n, onClick: s } = e;
    return (0, i.jsx)("div", {
        className: lR.ql,
        children: (0, i.jsx)(m.m, {
            text: N.intl.string(N.t.RDE0Sc),
            ariaHidden: !0,
            children: (0, i.jsx)(f.K, {
                icon: lT.A,
                size: "sm",
                variant: "overlay-secondary",
                tabIndex: n,
                "aria-label": N.intl.string(N.t.Ej3B3Y),
                onClick: () => {
                    (s(),
                        (0, eb.mM)(
                            async () => {
                                let { default: e } = await Promise.all([
                                    l.e(325522),
                                    l.e(401317),
                                    l.e(790340),
                                    l.e(147119),
                                    l.e(668756),
                                    l.e(425292),
                                    l.e(209994),
                                    l.e(44141),
                                    l.e(552653),
                                    l.e(311580),
                                    l.e(174554),
                                    l.e(116815),
                                    l.e(813057),
                                    l.e(991625),
                                    l.e(230029),
                                    l.e(891089),
                                    l.e(585733),
                                    l.e(861973),
                                    l.e(196063),
                                    l.e(392028),
                                    l.e(124054),
                                    l.e(441674),
                                    l.e(152862),
                                    l.e(148326),
                                    l.e(148729),
                                    l.e(650195),
                                    l.e(144909),
                                    l.e(67702),
                                    l.e(662387),
                                    l.e(31544),
                                    l.e(629972),
                                    l.e(334168),
                                    l.e(582012),
                                    l.e(166336),
                                    l.e(113658),
                                    l.e(162182),
                                    l.e(327545),
                                    l.e(860640),
                                    l.e(681801),
                                    l.e(85427),
                                    l.e(66149),
                                    l.e(996969),
                                    l.e(281342),
                                    l.e(967850),
                                    l.e(570385),
                                    l.e(67909),
                                    l.e(916885),
                                    l.e(272804),
                                    l.e(291329),
                                    l.e(449933),
                                    l.e(985236),
                                    l.e(512831),
                                    l.e(678906),
                                    l.e(799357),
                                    l.e(491899),
                                    l.e(889880),
                                    l.e(375724),
                                    l.e(999272),
                                    l.e(701406),
                                    l.e(216112),
                                    l.e(490514),
                                    l.e(962953),
                                    l.e(550929),
                                    l.e(64769),
                                    l.e(644013),
                                    l.e(971156),
                                    l.e(60002),
                                    l.e(260009),
                                    l.e(691398),
                                    l.e(266201),
                                    l.e(752704),
                                    l.e(56606),
                                    l.e(678749),
                                    l.e(163466),
                                    l.e(234017),
                                    l.e(40791),
                                    l.e(358404),
                                    l.e(996907),
                                    l.e(831130),
                                    l.e(377989),
                                    l.e(358931),
                                    l.e(880150),
                                    l.e(168248),
                                    l.e(490743),
                                    l.e(533240),
                                    l.e(985768),
                                    l.e(734818),
                                    l.e(936090),
                                    l.e(841136),
                                    l.e(560338),
                                    l.e(340363),
                                    l.e(459086),
                                    l.e(720210),
                                    l.e(601152),
                                    l.e(319714),
                                    l.e(331249),
                                    l.e(937139),
                                    l.e(921611),
                                    l.e(686889),
                                    l.e(560570),
                                    l.e(592e3),
                                    l.e(524434),
                                    l.e(992956),
                                    l.e(896691),
                                    l.e(334733),
                                    l.e(779367),
                                    l.e(428643),
                                    l.e(630290),
                                    l.e(189423),
                                    l.e(706073),
                                    l.e(227512),
                                    l.e(933947),
                                    l.e(866475),
                                    l.e(56347),
                                    l.e(650376),
                                    l.e(587618),
                                    l.e(424199),
                                    l.e(645499),
                                    l.e(322690),
                                    l.e(342551),
                                    l.e(425345),
                                    l.e(125729),
                                    l.e(888326),
                                    l.e(695765),
                                    l.e(131859),
                                    l.e(188941),
                                    l.e(349619),
                                    l.e(264236),
                                    l.e(543039),
                                    l.e(481647),
                                    l.e(398125),
                                    l.e(221825),
                                    l.e(930758),
                                    l.e(776195),
                                    l.e(253729),
                                    l.e(593600),
                                    l.e(749248),
                                    l.e(266900),
                                    l.e(707826),
                                    l.e(948804),
                                    l.e(199999),
                                    l.e(879315),
                                    l.e(314243),
                                    l.e(110116),
                                    l.e(37085),
                                    l.e(890027),
                                    l.e(900361),
                                    l.e(809915),
                                    l.e(463095),
                                    l.e(927211),
                                    l.e(361626),
                                    l.e(646506),
                                    l.e(445124),
                                    l.e(76428),
                                    l.e(445421),
                                    l.e(783988),
                                    l.e(721690),
                                    l.e(844780),
                                    l.e(832823),
                                    l.e(761935),
                                    l.e(511527),
                                    l.e(763070),
                                    l.e(87306),
                                    l.e(502018),
                                    l.e(276863),
                                    l.e(955184),
                                    l.e(249366),
                                    l.e(728633),
                                    l.e(628439),
                                    l.e(35757),
                                    l.e(539620),
                                    l.e(225990),
                                    l.e(297964),
                                    l.e(787672),
                                    l.e(248329),
                                    l.e(234236),
                                    l.e(832817),
                                    l.e(893928),
                                    l.e(165595),
                                    l.e(416143),
                                    l.e(401590),
                                    l.e(844695),
                                    l.e(213653),
                                    l.e(466354),
                                    l.e(133902),
                                    l.e(791154),
                                    l.e(92124),
                                    l.e(123353),
                                    l.e(263765),
                                    l.e(988077),
                                    l.e(592028),
                                    l.e(776750),
                                    l.e(445980),
                                    l.e(76705),
                                    l.e(232551),
                                    l.e(425906),
                                    l.e(123216),
                                    l.e(561216),
                                    l.e(648365),
                                    l.e(692835),
                                    l.e(588940),
                                    l.e(21219),
                                    l.e(829177),
                                    l.e(106943),
                                    l.e(348674),
                                    l.e(494768),
                                    l.e(182408),
                                    l.e(14962),
                                    l.e(45072),
                                    l.e(482861),
                                    l.e(422891),
                                    l.e(858514),
                                    l.e(790244),
                                    l.e(344265),
                                    l.e(121435),
                                    l.e(491279),
                                    l.e(398793),
                                    l.e(592731),
                                    l.e(723794),
                                    l.e(459332),
                                    l.e(486309),
                                    l.e(894747),
                                    l.e(54953),
                                    l.e(317225),
                                    l.e(53374),
                                    l.e(56021),
                                    l.e(741162),
                                    l.e(547646),
                                    l.e(124060),
                                    l.e(240511),
                                    l.e(718573),
                                    l.e(146566),
                                    l.e(693832),
                                    l.e(32661),
                                    l.e(346102),
                                    l.e(377766),
                                    l.e(545587),
                                    l.e(170653),
                                    l.e(376883),
                                    l.e(696123),
                                    l.e(647211),
                                    l.e(799657),
                                    l.e(810034),
                                    l.e(817852),
                                    l.e(133179),
                                    l.e(784103),
                                    l.e(614784),
                                    l.e(8563),
                                    l.e(444376),
                                    l.e(499941),
                                    l.e(509793),
                                    l.e(831145),
                                    l.e(187856),
                                    l.e(555793),
                                    l.e(960286),
                                    l.e(610449),
                                    l.e(32781),
                                    l.e(996218),
                                    l.e(488990),
                                    l.e(959134),
                                    l.e(332470),
                                    l.e(735381),
                                    l.e(826240),
                                    l.e(924862),
                                    l.e(73500),
                                    l.e(371482),
                                    l.e(912773),
                                    l.e(68904),
                                    l.e(796867),
                                    l.e(919307),
                                    l.e(565617),
                                    l.e(662355),
                                    l.e(488934),
                                    l.e(455924),
                                    l.e(41991),
                                    l.e(237834),
                                    l.e(872648),
                                    l.e(409843),
                                    l.e(565065),
                                    l.e(834386),
                                    l.e(482652),
                                    l.e(464242),
                                    l.e(130674),
                                    l.e(959669),
                                    l.e(220518),
                                    l.e(875842),
                                    l.e(126780),
                                    l.e(360781),
                                    l.e(88160),
                                    l.e(209518),
                                    l.e(368111),
                                    l.e(851243),
                                    l.e(748015),
                                    l.e(952577),
                                    l.e(807771),
                                    l.e(338516),
                                    l.e(751202),
                                    l.e(496715),
                                    l.e(115754),
                                    l.e(474055),
                                    l.e(744385),
                                    l.e(59413),
                                    l.e(29664),
                                    l.e(471064),
                                    l.e(282094),
                                    l.e(250478),
                                    l.e(421658),
                                    l.e(450048),
                                    l.e(587244),
                                    l.e(680986),
                                    l.e(90373),
                                    l.e(957506),
                                    l.e(539319),
                                    l.e(981237),
                                    l.e(303730),
                                    l.e(362422),
                                    l.e(789573),
                                    l.e(732272),
                                    l.e(236946),
                                    l.e(935948),
                                    l.e(692639),
                                    l.e(890480),
                                    l.e(593020),
                                    l.e(440963),
                                    l.e(657003),
                                    l.e(766031),
                                    l.e(394317),
                                    l.e(304329),
                                    l.e(12762),
                                    l.e(256831),
                                ]).then(l.bind(l, 99266));
                                return function (l) {
                                    return (0, i.jsx)(e, { ...l, target: t });
                                };
                            },
                            { stackingBehavior: "stack", modalKey: lw.aU },
                        ));
                },
            }),
        }),
    });
}
var lL = l(272984);
function lM(e) {
    let { artist: t, itemProps: l, cardRef: n, onClick: a, onForwardClick: r } = e,
        d = null != t.artist_image_hash ? lL.RQ.IMAGE(t.artist_image_hash) : null,
        c = s.useMemo(
            () => ({
                kind: "artist",
                shareUrl: lL.RQ.WEB_OPEN(lL.M0.ARTIST, t.artist_external_id),
                title: t.artist_name ?? t.artist_external_id,
                subtitle: null,
                imageUrl: d,
            }),
            [t.artist_external_id, t.artist_name, d],
        ),
        o = s.useMemo(() => ly.V.getDefaultLinkInterceptor(c.shareUrl), [c.shareUrl]),
        u = s.useCallback(
            (e) => {
                (a(), o?.(e));
            },
            [o, a],
        ),
        m = (0, i.jsx)(lk.R, { src: d, isCircular: !0, FallbackIcon: lC.I });
    return null == t.artist_name
        ? (0, i.jsx)("div", {
              className: lR.Nr,
              ref: n,
              children: (0, i.jsx)("div", { ...l, className: lR.MT, children: m }),
          })
        : (0, i.jsxs)("div", {
              className: lR.Nr,
              ref: n,
              children: [
                  (0, i.jsxs)(lS.Anchor, {
                      ...l,
                      className: lR.MT,
                      href: c.shareUrl,
                      useDefaultUnderlineStyles: !1,
                      onClick: u,
                      children: [
                          m,
                          (0, i.jsx)("span", {
                              className: lR.Qq,
                              children: (0, i.jsx)(b.E, {
                                  className: lR.DD,
                                  tag: "span",
                                  variant: "body-sm/semibold",
                                  color: "text-default",
                                  lineClamp: 2,
                                  children: t.artist_name,
                              }),
                          }),
                      ],
                  }),
                  (0, i.jsx)(lD, { target: c, tabIndex: l.tabIndex, onClick: r }),
              ],
          });
}
var lU = l(872351),
    lG = l(708988),
    lP = l(628137);
let lO = "none",
    lB = (e, t) => (0, i.jsx)(b.E, { tag: "span", variant: "body-xs/medium", color: "text-strong", children: e }, t);
function lW(e) {
    return e;
}
function lH(e) {
    return e?.direction ?? lO;
}
function lz(e) {
    if (null == e) return null;
    let t = Math.round(Math.abs(e));
    return 0 === t
        ? null
        : { direction: e > 0 ? "up" : "down", label: N.intl.formatToPlainString(Z.default["h+LUpk"], { percent: t }) };
}
function lF(e) {
    return lz(null != e.plays_trend_pct ? 100 * e.plays_trend_pct : null);
}
var lK = l(633099);
function lY(e) {
    let { trend: t } = e,
        l = "up" === t.direction ? lU.z : lG.M;
    return (0, i.jsxs)("span", {
        className: lK.GW,
        children: [
            (0, i.jsx)(l, {
                className: j()({ [lK.$J]: "up" === t.direction, [lK.KW]: "down" === t.direction }),
                size: "xxs",
                color: "currentColor",
                "aria-hidden": !0,
            }),
            (0, i.jsx)(b.E, { tag: "span", variant: "body-xs/medium", color: "text-strong", children: t.label }),
        ],
    });
}
function lq(e) {
    var t;
    let { guildId: l, song: n } = e,
        a = (0, R.yK)(
            [eK.A],
            () => (n.facepile_user_ids ?? []).filter((e) => !eK.A.isBlockedOrIgnored(e)).slice(0, 3),
            [n.facepile_user_ids],
        );
    (0, H.k6)(l, a);
    let r = (0, R.yK)([K.default], () => a.map((e) => K.default.getUser(e)), [a]),
        d = s.useMemo(() => r.filter((e) => null != e), [r]);
    if (0 === d.length) return null;
    let c = n.unique_listeners - d.length;
    return (0, i.jsx)("span", {
        className: lK.WM,
        role: "group",
        "aria-label":
            ((t = n.unique_listeners),
            N.intl.formatToPlainString(Z.default.AzIhRB, { count: t, trend: lO, countHook: lW })),
        children: (0, i.jsx)(tW.Ay, {
            users: d,
            guildId: l,
            size: tW.DN.SIZE_24,
            max: d.length,
            count: n.unique_listeners,
            hideMoreUsers: c <= 0,
            renderMoreUsers: () =>
                (0, i.jsx)("span", {
                    className: lK.ju,
                    children: (0, i.jsx)(b.E, {
                        tag: "span",
                        variant: "body-sm/semibold",
                        color: "text-subtle",
                        children: N.intl.formatToPlainString(Z.default.bFIg0R, { count: c }),
                    }),
                }),
        }),
    });
}
function l$(e) {
    let { trackExternalId: t } = e,
        [l, n] = s.useState(!1);
    return (0, i.jsxs)("div", {
        className: lK.aF,
        children: [
            (0, i.jsx)(lP.A, {
                resourceType: lL.M0.TRACK,
                resourceId: t,
                onLoad: () => n(!0),
                allowEncryptedMedia: !0,
            }),
            !l && (0, i.jsx)("div", { className: lK.Ls, "aria-hidden": !0 }),
        ],
    });
}
function lV(e) {
    let { isCompact: t, headline: l, detail: n, trend: s } = e;
    return null == l && null == n && null == s
        ? null
        : (0, i.jsx)("div", {
              className: j()(lK.yp, { [lK.Fl]: t }),
              children: (0, i.jsxs)("div", {
                  className: lK.QD,
                  children: [
                      null != l &&
                          (0, i.jsx)(b.E, {
                              tag: "div",
                              variant: "heading-xl/semibold",
                              color: "text-default",
                              children: l,
                          }),
                      (0, i.jsxs)("div", {
                          className: lK._0,
                          children: [
                              null != n &&
                                  (0, i.jsx)(b.E, {
                                      tag: "span",
                                      variant: "body-xs/medium",
                                      color: "text-subtle",
                                      children: n,
                                  }),
                              null != s && (0, i.jsx)(lY, { trend: s }),
                          ],
                      }),
                  ],
              }),
          });
}
function lQ(e) {
    var t;
    let { guildId: l, isCompact: n, canShowEmbed: s, song: a } = e,
        r = lz(a.plays_change_percent);
    return (0, i.jsxs)("div", {
        className: j()(lK.yp, { [lK.Fl]: n }),
        children: [
            s && (0, i.jsx)(l$, { trackExternalId: a.track_external_id }, a.track_external_id),
            (0, i.jsxs)("div", {
                className: j()(lK.QD, lK.rk),
                children: [
                    (0, i.jsx)(lq, { guildId: l, song: a }),
                    (0, i.jsxs)("div", {
                        className: lK._0,
                        children: [
                            (0, i.jsx)(b.E, {
                                tag: "span",
                                variant: "body-xs/medium",
                                color: "text-subtle",
                                children:
                                    ((t = a.plays),
                                    N.intl.format(Z.default["7hHUIS"], { count: t, trend: lH(r), countHook: lB })),
                            }),
                            null != r && (0, i.jsx)(lY, { trend: r }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var lZ = l(151869),
    lX = l(915734);
function lJ(e) {
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
        className: j()(lX.Dk, { [lX.yI]: n }),
        children: (0, i.jsx)(lZ.A, {
            items: l,
            getItemKey: a,
            renderItem: m,
            gap: 8,
            edgeFade: 40,
            actionsClassName: lX.o1,
            "aria-label": t,
        }),
    });
}
var l0 = l(742452);
function l1(e) {
    return e.artist_external_id;
}
function l2(e) {
    let { guildId: t, widgetId: l, isCompact: n, data: a } = e,
        [r, d] = lE(a.ranked_artists.length),
        c = lI({ guildId: t, widgetId: l, data: a });
    lN({ guildId: t, widgetId: l, data: a, length: a.ranked_artists.length, isAtEnd: r });
    let o = s.useCallback(() => c("artist"), [c]),
        u = s.useCallback(() => c("forward"), [c]),
        m = s.useCallback(
            (e, t, l) => (0, i.jsx)(lM, { artist: e, itemProps: t, cardRef: l, onClick: o, onForwardClick: u }),
            [o, u],
        );
    if (0 === a.ranked_artists.length) return null;
    let f = lF(a);
    return (0, i.jsxs)("div", {
        className: l0.U,
        children: [
            (0, i.jsx)(lJ, {
                label: lm(la.TOP_ARTISTS),
                items: a.ranked_artists,
                isCompact: n,
                getItemKey: l1,
                renderItem: m,
                onScrollEndChange: d,
            }),
            (0, i.jsx)(lV, {
                isCompact: n,
                headline:
                    a.distinct_songs < 1
                        ? null
                        : N.intl.formatToPlainString(Z.default.W8etVA, { count: a.distinct_songs }),
                detail:
                    a.distinct_listeners < 1 || a.distinct_artists < 1
                        ? null
                        : N.intl.format(Z.default.yGqf0D, {
                              memberCount: a.distinct_listeners,
                              artistCount: a.distinct_artists,
                              trend: lH(f),
                              memberCountHook: lB,
                              artistCountHook: lB,
                          }),
                trend: f,
            }),
        ],
    });
}
var l3 = l(803613),
    l6 = l(682348),
    l4 = l(73152),
    l8 = l(280911);
function l9(e) {
    let { guildId: t, isCompact: l } = e,
        n = (0, R.bG)([K.default], () => K.default.getCurrentUser()),
        s = (0, R.bG)([el.Ay], () => (null != n ? el.Ay.getMember(t, n.id) : null)),
        a = (0, et.gn)(t, n?.id, s?.colorStrings ?? null),
        r = en.Ay.useName(t, void 0, n);
    return (0, i.jsxs)("div", {
        className: l8.D_,
        children: [
            (0, i.jsxs)("div", {
                className: l8.FI,
                "aria-hidden": !0,
                children: [
                    !l &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("span", { className: l8.eu, children: (0, i.jsx)(l3.D, { size: "sm" }) }),
                                (0, i.jsxs)("span", {
                                    className: l8.r$,
                                    children: [
                                        (0, i.jsx)("span", { className: l8.Om }),
                                        (0, i.jsx)("span", { className: l8.Om }),
                                        (0, i.jsx)("span", { className: l8.Om }),
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
                className: l8.Qq,
                children: [
                    (0, i.jsx)(I.D, {
                        variant: "heading-xs/semibold",
                        color: "text-default",
                        lineClamp: 1,
                        children: (0, i.jsx)(O.g, {
                            name: N.intl.formatToPlainString(Z.default.subXXA, { name: r }),
                            colorString: s?.colorString ?? null,
                            colorStrings: a,
                        }),
                    }),
                    (0, i.jsx)(b.E, {
                        variant: "body-xs/medium",
                        color: "text-strong",
                        lineClamp: l ? 2 : 1,
                        children: N.intl.string(Z.default.y1neEe),
                    }),
                ],
            }),
        ],
    });
}
function l5(e) {
    let { widgetName: t, isCompact: l } = e;
    return (0, i.jsxs)("div", {
        className: l8.D_,
        children: [
            !l &&
                (0, i.jsx)("span", {
                    className: l8.eu,
                    "aria-hidden": !0,
                    children: (0, i.jsx)(l6._, { size: "sm", color: c.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
                }),
            (0, i.jsxs)("div", {
                className: l8.Qq,
                children: [
                    (0, i.jsx)(I.D, {
                        variant: "heading-xs/semibold",
                        color: "text-strong",
                        lineClamp: 1,
                        children: N.intl.string(t6.default.WhdCGP),
                    }),
                    (0, i.jsx)(b.E, {
                        variant: "body-xs/medium",
                        color: "text-strong",
                        lineClamp: l ? 2 : 1,
                        children: N.intl.formatToPlainString(Z.default["49Jv0I"], { widgetName: t }),
                    }),
                ],
            }),
        ],
    });
}
function l7(e) {
    let { guildId: t, widgetName: n, isCompact: s, isSpotifyConnected: a, onClick: r } = e;
    return (0, i.jsxs)("div", {
        className: l8.UX,
        children: [
            a ? (0, i.jsx)(l5, { widgetName: n, isCompact: s }) : (0, i.jsx)(l9, { guildId: t, isCompact: s }),
            (0, i.jsx)(W.$, {
                variant: "secondary",
                size: "sm",
                icon: a ? void 0 : l4.E,
                text: a ? N.intl.string(N.t.KY0ilj) : N.intl.string(Z.default.jB1fWC),
                onClick: () => {
                    (r(),
                        (0, eb.mM)(
                            async () => {
                                let { default: e } = await Promise.all([
                                    l.e(846201),
                                    l.e(311913),
                                    l.e(881717),
                                    l.e(5257),
                                    l.e(991625),
                                    l.e(230029),
                                    l.e(488926),
                                    l.e(512831),
                                    l.e(203112),
                                    l.e(13566),
                                    l.e(324469),
                                    l.e(264236),
                                    l.e(110116),
                                    l.e(463095),
                                    l.e(723794),
                                    l.e(240511),
                                    l.e(959134),
                                    l.e(371482),
                                    l.e(610943),
                                    l.e(16954),
                                    l.e(390213),
                                    l.e(944602),
                                    l.e(421778),
                                    l.e(646191),
                                    l.e(784170),
                                    l.e(32820),
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
function ne(e) {
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
var nt = l(625903),
    nl = l(780964),
    nn = l(766075),
    ni = l(417869),
    ns = l(123894);
function na(e) {
    let { onSettingsClick: t } = e,
        l = (0, R.bG)([ni.A], () => ni.A.getAccounts().some((e) => e.type === tt.fg2.SPOTIFY && e.showActivity));
    return (0, i.jsx)(S, {
        className: ns.w,
        illustration: ne,
        title: N.intl.string(Z.default.ULK65a),
        body: N.intl.format(l ? Z.default.BLuvck : Z.default["Ko3a0+"], { memberCount: 2 }),
        action: l
            ? null
            : (0, i.jsx)(W.$, {
                  variant: "secondary",
                  size: "sm",
                  icon: nt.SettingsIcon,
                  text: N.intl.string(N.t["3D5yo/"]),
                  onClick: () => {
                      (t(), (0, nn.openUserSettings)(nl.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING));
                  },
              }),
    });
}
function nr() {
    return (0, i.jsx)(S, {
        className: ns.w,
        illustration: ne,
        title: N.intl.string(Z.default.ULK65a),
        body: N.intl.format(Z.default.ZQxU8v, { memberCount: 2 }),
    });
}
var nd = l(109487),
    nc = l(279543);
function no(e) {
    let { isCompact: t } = e;
    return (0, i.jsxs)("div", {
        className: nc.qr,
        children: [
            (0, i.jsxs)("div", {
                className: nc.Os,
                children: [
                    (0, i.jsx)("span", {
                        className: nc.Kk,
                        children: (0, i.jsx)(M.RefreshIcon, {
                            size: "xxs",
                            color: c.A.colors.ICON_SUBTLE,
                            "aria-hidden": !0,
                        }),
                    }),
                    (0, i.jsx)(b.E, {
                        className: nc.Pf,
                        tag: "span",
                        variant: "body-xs/medium",
                        color: "text-subtle",
                        children: N.intl.string(Z.default["3/DOFo"]),
                    }),
                ],
            }),
            (0, i.jsxs)(lS.Anchor, {
                className: nc.al,
                href: lL.RQ.WEB_HOME,
                "aria-label": N.intl.string(Z.default["jUr+wF"]),
                children: [
                    (0, i.jsx)("span", {
                        className: nc.Kk,
                        children: (0, i.jsx)(nd.L, { size: "xs", color: c.A.colors.ICON_STRONG, "aria-hidden": !0 }),
                    }),
                    !t &&
                        (0, i.jsx)(b.E, {
                            className: nc.G2,
                            tag: "span",
                            variant: "body-xs/medium",
                            color: "none",
                            children: N.intl.string(Z.default.ZdPp2q),
                        }),
                ],
            }),
        ],
    });
}
var nu = l(949744),
    nm = l(65154),
    nf = l(329177),
    ng = l(242226);
function nh(e) {
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
            onClick: f,
        } = e,
        g = ei(l, n, { showYouSuffix: d }),
        { user: h } = g;
    return null == h
        ? null
        : (0, i.jsxs)("div", {
              ref: m,
              "aria-hidden": u,
              inert: u,
              className: j()(ng.nM, { [ng.Bh]: d && !u, [ng.lR]: o }),
              children: [
                  (0, i.jsx)(nx, { guildId: l, user: h, identity: g, rank: a, listener: s, onClick: f }),
                  null != s &&
                      (0, i.jsxs)("div", {
                          className: j()(ng.Mx, { [ng.dA]: r }),
                          children: [
                              (0, i.jsx)(nm.S, { size: "xxs", color: c.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                              (0, i.jsx)(b.E, {
                                  variant: "body-sm/medium",
                                  color: "text-strong",
                                  children:
                                      ((t = s.plays), N.intl.formatToPlainString(Z.default["7X+3f8"], { count: t })),
                              }),
                          ],
                      }),
                  null != s && !r && (0, i.jsx)(n_, { artists: s.artists, artistCount: s.artist_count ?? null }),
              ],
          });
}
function nx(e) {
    let { guildId: t, user: l, identity: n, rank: s, listener: a, onClick: r } = e,
        d = (0, R.bG)([eK.A], () => (eK.A.isBlocked(l.id) ? "blocked" : eK.A.isIgnored(l.id) ? "ignored" : null), [
            l.id,
        ]),
        o = null != d;
    return (0, i.jsxs)(L.D, {
        className: ng.D_,
        onClick: () => {
            (r(), (0, eL.openUserProfileModal)({ userId: l.id, guildId: t }));
        },
        children: [
            null != s && (0, i.jsx)(U.A, { children: N.intl.formatToPlainString(Z.default.I4JiAQ, { rank: s }) }),
            (0, i.jsxs)("span", {
                className: ng.R3,
                children: [
                    o
                        ? (0, i.jsx)("span", {
                              className: ng.gt,
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
                            className: ng.ie,
                            "aria-hidden": !0,
                            children: (0, i.jsx)(nf.CrownIcon, { size: "xxs", color: "currentColor" }),
                        }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: ng.Dc,
                children: [
                    (0, i.jsx)(I.D, {
                        variant: "heading-xs/semibold",
                        color: o ? "text-subtle" : "text-default",
                        lineClamp: 1,
                        children:
                            null != d
                                ? (function (e) {
                                      switch (e) {
                                          case "blocked":
                                              return N.intl.string(Z.default.I3YOjC);
                                          case "ignored":
                                              return N.intl.string(Z.default.CfMzwe);
                                      }
                                  })(d)
                                : (0, i.jsx)(O.g, {
                                      name: n.displayName,
                                      colorString: n.member?.colorString ?? null,
                                      colorStrings: n.roleColorStrings,
                                  }),
                    }),
                    !o && (0, i.jsx)(nj, { listener: a }),
                ],
            }),
        ],
    });
}
function np(e, t) {
    return (0, i.jsx)(b.E, { tag: "span", variant: "body-xs/medium", color: "text-strong", children: e }, t);
}
function nj(e) {
    let { listener: t } = e,
        l = t?.latest_track_title;
    if (null == l) return null;
    let n = t?.latest_artist_name;
    return (0, i.jsx)(b.E, {
        variant: "body-xs/medium",
        color: "text-subtle",
        lineClamp: 1,
        children:
            null != n
                ? N.intl.format(Z.default.QqaqBg, { trackTitle: l, artistName: n, highlightHook: np })
                : N.intl.format(Z.default.ZMJ8Mt, { trackTitle: l, highlightHook: np }),
    });
}
function nv(e) {
    let { artist: t, notched: l } = e,
        [n, a] = s.useState(!1),
        r = null != t.artist_image_hash ? lL.RQ.IMAGE(t.artist_image_hash) : null;
    return (0, i.jsx)("span", {
        className: ng.sG,
        children: (0, i.jsx)(eH.Ay, {
            mask: l ? eH.l8[24] : eH.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null == r || n
                    ? (0, i.jsx)("span", {
                          className: ng.Ql,
                          children: (0, i.jsx)(lC.I, { size: "xxs", color: c.A.colors.ICON_SUBTLE }),
                      })
                    : (0, i.jsx)("img", { className: ng.v2, src: r, alt: "", loading: "lazy", onError: () => a(!0) }),
        }),
    });
}
function n_(e) {
    let { artists: t, artistCount: l } = e,
        n = t.slice(0, 3),
        s = (l ?? t.length) - n.length;
    return (0, i.jsx)("div", {
        className: ng.Rh,
        "aria-hidden": !0,
        children:
            n.length > 0 &&
            (0, i.jsxs)("div", {
                className: ng.W$,
                children: [
                    n.map((e, t) =>
                        (0, i.jsx)(
                            nv,
                            { artist: e, notched: s > 0 || t !== n.length - 1 },
                            `${e.artist_external_id}-${e.artist_image_hash}`,
                        ),
                    ),
                    s > 0 &&
                        (0, i.jsx)("span", {
                            className: ng.sG,
                            children: (0, i.jsx)(eH.Ay, {
                                mask: eH.Ay.Masks.SQUIRCLE,
                                width: 24,
                                height: 24,
                                children: (0, i.jsx)("div", {
                                    className: ng.ag,
                                    children: (0, i.jsx)(b.E, {
                                        variant: "body-xs/semibold",
                                        color: "text-subtle",
                                        children: N.intl.formatToPlainString(Z.default.bFIg0R, { count: s }),
                                    }),
                                }),
                            }),
                        }),
                ],
            }),
    });
}
var nb = l(897130);
function nA(e) {
    let { guildId: t, widgetId: l, isCompact: n, data: a, shouldHideCurrentUser: r, upsell: d } = e,
        c = a.top_listeners,
        o = (0, R.bG)([K.default], () => K.default.getCurrentUser()?.id),
        u = r ? null : o,
        m = c.findIndex((e) => e.user_id === u),
        f = -1 === m ? null : c[m],
        g = s.useMemo(() => c.map((e) => e.user_id), [c]);
    (0, H.k6)(t, g);
    let h = (0, R.bG)([K.default], () => g.reduce((e, t) => (null != K.default.getUser(t) ? e + 1 : e), 0), [g]),
        x = (0, R.bG)(
            [K.default, nu.A],
            () => g.every((e) => null != K.default.getUser(e) || nu.A.isMemberRequestSettled(t, e)),
            [t, g],
        ),
        { scrollerRef: p, scrollerNode: v, userRowRef: _, floatingRowPosition: b } = ee(),
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
        })(v, h),
        I = lI({ guildId: t, widgetId: l, data: a }),
        N = s.useCallback(() => I("listener_row"), [I]);
    lN({ guildId: t, widgetId: l, data: a, length: c.length, isAtEnd: A, disabled: !x && !lc(a) });
    let E = null != d,
        y = E ? null : b,
        C = null != y;
    return lc(a)
        ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(nr, {}), d] })
        : (0, i.jsxs)("div", {
              className: nb.SY,
              children: [
                  (0, i.jsxs)(D.d_, {
                      className: j()(nb.p_, { [nb.w]: E }),
                      ref: p,
                      children: [
                          c.map((e, l) => {
                              let s = e.user_id === u;
                              return (0, i.jsx)(
                                  nh,
                                  {
                                      guildId: t,
                                      userId: e.user_id,
                                      listener: e,
                                      rank: l + 1,
                                      isCompact: n,
                                      isCurrentUser: s,
                                      shouldDimForCurrentUser: s && C,
                                      rowRef: s ? _ : void 0,
                                      onClick: N,
                                  },
                                  e.user_id,
                              );
                          }),
                          !E &&
                              null != u &&
                              null == f &&
                              (0, i.jsx)(nh, {
                                  guildId: t,
                                  userId: u,
                                  listener: null,
                                  rank: null,
                                  isCompact: n,
                                  isCurrentUser: !0,
                                  shouldDimForCurrentUser: C,
                                  rowRef: _,
                                  onClick: N,
                              }),
                      ],
                  }),
                  E &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)($, { position: "bottom" }),
                              (0, i.jsx)("div", { className: nb.Kv, children: d }),
                          ],
                      }),
                  null != u &&
                      null != y &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)($, { position: y }),
                              (0, i.jsx)(V, {
                                  position: y,
                                  children: (0, i.jsx)(nh, {
                                      guildId: t,
                                      userId: u,
                                      listener: f,
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
var nI = l(717683);
function nN(e) {
    let { isCompact: t } = e;
    return (0, i.jsxs)("div", {
        className: nI.qV,
        "aria-hidden": !0,
        children: [
            (0, i.jsx)("div", {
                className: j()(nI.Dk, { [nI.yI]: t }),
                children: Array.from({ length: 10 }, (e, t) =>
                    (0, i.jsxs)(
                        "div",
                        {
                            className: nI.Nr,
                            children: [
                                (0, i.jsx)("div", { className: j()(nI.om, nI.xX) }),
                                (0, i.jsxs)("div", {
                                    className: nI.Qq,
                                    children: [
                                        (0, i.jsx)("div", { className: j()(nI.om, nI.DD) }),
                                        (0, i.jsx)("div", { className: j()(nI.om, nI.VA) }),
                                    ],
                                }),
                            ],
                        },
                        t,
                    ),
                ),
            }),
            (0, i.jsxs)("div", {
                className: j()(nI.yp, { [nI.Fl]: t }),
                children: [
                    (0, i.jsx)("div", { className: j()(nI.om, nI.Pl) }),
                    (0, i.jsx)("div", { className: j()(nI.om, nI._0) }),
                ],
            }),
        ],
    });
}
var nE = l(450078),
    ny = l(362704);
function nC(e) {
    let { song: t, isSelected: l, onSelect: n, itemProps: a, cardRef: r, onForwardClick: d } = e,
        c = null != t.cover_art_hash ? lL.RQ.IMAGE(t.cover_art_hash) : null,
        o = s.useMemo(
            () => ({
                kind: "song",
                shareUrl: lL.RQ.WEB_OPEN(lL.M0.TRACK, t.track_external_id),
                title: t.track_title ?? t.track_external_id,
                subtitle: t.artist_name,
                imageUrl: c,
            }),
            [t.track_external_id, t.track_title, t.artist_name, c],
        );
    return (0, i.jsxs)("div", {
        className: lR.Nr,
        ref: r,
        children: [
            (0, i.jsxs)("button", {
                ...a,
                type: "button",
                className: j()(lR.MT, { [lR.tY]: l }),
                "aria-pressed": l,
                onClick: () => n(t.track_external_id),
                children: [
                    (0, i.jsx)(lk.R, {
                        src: c,
                        isCircular: !1,
                        FallbackIcon: nE.u,
                        children:
                            l &&
                            (0, i.jsx)("span", {
                                className: j()(lR.Lw, lR.Kp),
                                "aria-hidden": !0,
                                children: (0, i.jsx)(ny.Y, { size: "md", color: "currentColor" }),
                            }),
                    }),
                    null != t.track_title &&
                        (0, i.jsxs)("span", {
                            className: lR.Qq,
                            children: [
                                (0, i.jsx)(b.E, {
                                    className: lR.DD,
                                    tag: "span",
                                    variant: "body-sm/semibold",
                                    color: "text-default",
                                    lineClamp: 1,
                                    children: t.track_title,
                                }),
                                null != t.artist_name &&
                                    (0, i.jsx)(b.E, {
                                        className: lR.VA,
                                        tag: "span",
                                        variant: "body-xs/normal",
                                        color: "text-muted",
                                        lineClamp: 1,
                                        children: t.artist_name,
                                    }),
                            ],
                        }),
                ],
            }),
            (0, i.jsx)(lD, { target: o, tabIndex: a.tabIndex, onClick: d }),
        ],
    });
}
function nS(e) {
    return e.track_external_id;
}
function nk(e) {
    let t,
        { guildId: l, widgetId: n, isCompact: a, data: r } = e,
        d = lb(n),
        c = lp((e) => e.byWidgetId[n]?.canShowEmbed ?? lx.canShowEmbed),
        [o, u] = lE(r.ranked_songs.length),
        m = lI({ guildId: l, widgetId: n, data: r });
    lN({ guildId: l, widgetId: n, data: r, length: r.ranked_songs.length, isAtEnd: o });
    let f = s.useCallback(
            (e) => {
                let t;
                (m("song"),
                    (t = lp.getState().byWidgetId[n]?.selectedTrackId ?? null),
                    lj(n, { selectedTrackId: t === e ? null : e }));
            },
            [n, m],
        ),
        g = s.useCallback(() => m("forward"), [m]),
        h = s.useCallback(
            (e, t, l) =>
                (0, i.jsx)(nC, {
                    song: e,
                    isSelected: e.track_external_id === d,
                    onSelect: f,
                    itemProps: t,
                    cardRef: l,
                    onForwardClick: g,
                }),
            [d, f, g],
        );
    if (0 === r.ranked_songs.length) return null;
    let x = r.ranked_songs.find((e) => e.track_external_id === d) ?? null,
        p = lF(r);
    return (0, i.jsxs)("div", {
        className: l0.U,
        children: [
            (0, i.jsx)(lJ, {
                label: lm(la.TOP_SONGS),
                items: r.ranked_songs,
                isCompact: a,
                getItemKey: nS,
                renderItem: h,
                onScrollEndChange: u,
            }),
            null != x
                ? (0, i.jsx)(lQ, { guildId: l, isCompact: a, canShowEmbed: c, song: x })
                : (0, i.jsx)(lV, {
                      isCompact: a,
                      headline:
                          (t = Math.round(r.listening_time_ms / eg.A.Millis.MINUTE)) < 1
                              ? null
                              : N.intl.formatToPlainString(Z.default["+5b01q"], { minutes: t }),
                      detail:
                          r.distinct_listeners < 1
                              ? null
                              : N.intl.format(Z.default.AzIhRB, {
                                    count: r.distinct_listeners,
                                    trend: lH(p),
                                    countHook: lB,
                                }),
                      trend: p,
                  }),
        ],
    });
}
var nT = l(691885),
    nw = l(109765);
function nR(e) {
    let { widgetId: t, onSelect: l } = e,
        n = lv(t),
        a = s.useMemo(() => lr.map((e) => ({ id: e, label: lm(e), value: e })), []);
    return (0, i.jsx)("div", {
        className: nw.L,
        children: (0, i.jsx)(nT.l, {
            selectionMode: "single",
            label: N.intl.string(Z.default.hFYyGU),
            hideLabel: !0,
            fitContent: !0,
            options: a,
            value: n,
            onSelectionChange: l,
        }),
    });
}
var nD = l(432017),
    nL = l(871107);
function nM(e) {
    let { title: t } = e;
    return (0, i.jsxs)("div", {
        className: nL.$,
        children: [
            (0, i.jsx)("span", {
                className: nL.K,
                children: (0, i.jsx)(nD.T, { size: "xs", color: c.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
            }),
            (0, i.jsx)(x.q, { size: "md", children: t }),
        ],
    });
}
var nU = l(77915),
    nG = l(756936);
function nP(e) {
    return e.default_title ?? N.intl.string(Z.default["5xxUI2"]);
}
var nO = l(890497),
    nB = l(734057),
    nW = l(317525),
    nH = l(576705),
    nz = l(811091),
    nF = l(44167);
l(321073);
var nK = l(485845),
    nY = l(136722),
    nq = l(435183),
    n$ = l(155718),
    nV = l(795816),
    nQ = l(933958),
    nZ = l(627363),
    nX = l(712440),
    nJ = l(733110),
    n0 = l(488926),
    n1 = l(487887);
async function n2(e) {
    null == es.A.getApplication(n1.NW) && (await (0, nZ.TA)(n1.NW));
    let t = nQ.Ay.getEmbeddedActivitiesForChannel(e).every((e) => e.applicationId !== n1.NW);
    return await (0, nV.su)({ channelId: e, applicationId: n1.NW, isStart: t, renderInFramePool: !0 });
}
let n3 = [];
var n6 = l(344351),
    n4 = l(256693),
    n8 = l(343030),
    n9 = l(11411),
    n5 = l(953538);
let n7 = {
    [d.a.IMAGE_TEXT]: {
        View: function (e) {
            let { widget: t, guildSpaceMode: l, guildId: n, onEdit: s, disabled: a } = e,
                { text: r, image_hash: d } = t.config,
                c = "edit" === l ? t.config.image : void 0,
                o = void 0 !== c ? c : null != d ? tL(n, t.id, d) : null;
            return (null == r || 0 === r.length) && null == o
                ? (0, i.jsx)(S, {
                      illustration: tU,
                      title: N.intl.string(Z.default.rl3fNQ),
                      body: N.intl.string(Z.default["a/oDbC"]),
                      action:
                          null != s
                              ? (0, i.jsx)(W.$, {
                                    variant: "secondary",
                                    size: "sm",
                                    icon: tG.PencilIcon,
                                    text: N.intl.string(N.t.bt75uw),
                                    disabled: a,
                                    onClick: s,
                                })
                              : null,
                  })
                : (0, i.jsxs)("div", {
                      className: tP.kL,
                      children: [
                          null != o && (0, i.jsx)("img", { className: tP.Sl, src: o, alt: "" }),
                          null != r &&
                              (0, i.jsx)(b.E, {
                                  variant: "body-md/normal",
                                  color: "text-subtle",
                                  className: tP.Qq,
                                  children: r,
                              }),
                      ],
                  });
        },
        Edit: function (e) {
            let { widget: t, commit: l, cancel: n } = e,
                a = t.config,
                [r, c] = s.useState(a.title ?? ""),
                [o, u] = s.useState(a.text ?? ""),
                [g, h] = s.useState(a.image),
                [x, p] = s.useState(null),
                j = (0, R.bG)([tm.A], () => tm.A.getGuildId()),
                v = void 0 !== g ? g : null != a.image_hash && null != j ? tL(j, t.id, a.image_hash) : null;
            return (0, i.jsxs)(A.B, {
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
                    (0, i.jsx)(tE.D, {
                        label: N.intl.string(N.t.X4IxWL),
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
                                            text: N.intl.string(N.t["MsUY/S"]),
                                            onChange: function (e) {
                                                (p(null), h(e));
                                            },
                                            maxFileSizeBytes: 0xa00000,
                                            onFileSizeError: () => (0, tk.A)(0xa00000),
                                        }),
                                        null != v &&
                                            (0, i.jsx)(m.m, {
                                                text: N.intl.string(N.t.N86XcP),
                                                ariaHidden: !0,
                                                children: (0, i.jsx)(f.K, {
                                                    variant: "critical-secondary",
                                                    icon: tS.TrashIcon,
                                                    onClick: function () {
                                                        (p(null), h(null));
                                                    },
                                                    "aria-label": N.intl.string(N.t.N86XcP),
                                                }),
                                            }),
                                    ],
                                }),
                                null != v && (0, i.jsx)("img", { className: tM.V, src: v, alt: "" }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(ty.f, {
                        label: N.intl.string(N.t.COGMNC),
                        value: o,
                        onChange: function (e) {
                            (p(null), u(e));
                        },
                        rows: 3,
                        autosize: !0,
                        maxLength: 500,
                        showCharacterCount: !0,
                    }),
                    null != x && (0, i.jsx)(tc.w, { type: "critical", message: x, role: "alert" }),
                    (0, i.jsxs)(to.e, {
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(W.$, { variant: "secondary", text: N.intl.string(N.t["ETE/oC"]), onClick: n }),
                            (0, i.jsx)(W.$, {
                                variant: "primary",
                                text: N.intl.string(N.t["R3BPH+"]),
                                onClick: function () {
                                    let e;
                                    if (
                                        ((e = void 0 !== g ? null !== g : null != a.image_hash),
                                        0 === o.length && !e && (p(N.intl.string(Z.default.zleX9q)), 1))
                                    )
                                        return;
                                    let t = {
                                        type: d.a.IMAGE_TEXT,
                                        image_hash: a.image_hash,
                                        text: o.length > 0 ? o : null,
                                        title: r.length > 0 ? r : null,
                                    };
                                    (void 0 !== g && (t.image = g), l(t));
                                },
                            }),
                        ],
                    }),
                ],
            });
        },
        Title: function (e) {
            let { widget: t } = e;
            return (0, i.jsx)(x.q, { children: t.config.title ?? t.default_title ?? "" });
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
                              title: N.intl.string(Z.default.wqHke4),
                              subtitle: N.intl.string(Z.default.n1sscC),
                          })
                        : n?.status === "error"
                          ? (0, i.jsx)(C, {})
                          : null != d
                            ? (0, i.jsx)(tn, { guildId: a, data: d, column: l.position.column, disabled: "view" !== r })
                            : (0, i.jsx)(y, {})),
                (0, i.jsx)("div", { ref: u, children: t })
            );
        },
        Edit: function (e) {
            let { cancel: t } = e,
                l = (0, R.bG)([tm.A], () => tm.A.getGuildId()),
                n = (0, R.bG)([tu.A], () => tu.A.getGuild(l), [l]),
                a = (0, tg.mN)(n),
                r = null != n && null != n.systemChannelId,
                d = null != n ? n.systemChannelFlags : null,
                [c, o] = s.useState(!1),
                [u, m] = s.useState(null),
                [f, g] = s.useState(!1),
                h = s.useCallback(async () => {
                    if (null == n || null == l || null == u || null == d) return void t();
                    (g(!1), o(!0));
                    try {
                        (await tr.Bo.patch({
                            url: tt.Rsh.GUILD(l),
                            body: { system_channel_flags: (0, ta.lA)(d, th, !u) },
                            rejectWithError: !0,
                        }),
                            (0, tf.q9)(l, tf.PY.LEADERBOARD_SYSTEM_MESSAGES, u),
                            t());
                    } catch (e) {
                        g(!0);
                    } finally {
                        o(!1);
                    }
                }, [n, l, u, d, t]),
                x = null == n || !r || null == d || c || !a;
            return (0, i.jsxs)(A.B, {
                gap: 16,
                children: [
                    (0, i.jsx)(td.d, {
                        label: N.intl.string(Z.default.v0iLIA),
                        description: N.intl.string(Z.default["88c7ds"]),
                        checked: u ?? !(0, ta.Lt)(d ?? 0, th),
                        onChange: m,
                        disabled: x,
                    }),
                    !r &&
                        (0, i.jsx)(tc.w, {
                            type: "warning",
                            message: N.intl.string(Z.default["1hsDpi"]),
                            role: "none",
                        }),
                    f &&
                        (0, i.jsx)(tc.w, {
                            type: "critical",
                            message: N.intl.string(Z.default["4FcF2j"]),
                            role: "alert",
                        }),
                    (0, i.jsxs)(to.e, {
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
                                onClick: h,
                                disabled: x,
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
                ? (0, i.jsx)(x.q, { children: t.default_title ?? "" })
                : (0, i.jsx)(x.q, { children: ej(s) });
        },
        TitleIcon: function () {
            return (0, i.jsx)(u.TrophyIcon, { size: "xs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        },
        HeaderAccessory: function (e) {
            let { hydration: t, guildId: l } = e,
                n = eV(l, t?.status === "success" ? t.data : void 0);
            return null == n || ep(n) ? null : (0, i.jsx)(t_, { data: n });
        },
        HeaderActions: function (e) {
            let { hydration: t, guildId: l, column: n } = e,
                s = t?.status === "success" ? t.data : void 0,
                a = eV(l, s);
            return "mini" !== k({ expanded: !1, column: n }) || (null != a && ep(a))
                ? null
                : (0, i.jsx)(m.m, {
                      text: N.intl.string(N.t.dcl9MQ),
                      children: (0, i.jsx)(f.K, {
                          variant: "icon-only",
                          size: "sm",
                          icon: g._,
                          "aria-label": N.intl.string(N.t.dcl9MQ),
                          disabled: null == a,
                          onClick: function () {
                              null != a &&
                                  null != s &&
                                  (h.default.track(tt.HAw.LEADERBOARD_CLICK, {
                                      location: "expand",
                                      guild_id: l,
                                      leaderboard_state: ev(a),
                                      leaderboard_view: k({ expanded: !1, column: n }),
                                      metric: e_(a.stat),
                                  }),
                                  (function (e) {
                                      let { guildId: t, data: l } = e,
                                          n = (e) => (0, i.jsx)(tN, { guildId: t, data: l, modalProps: e });
                                      (0, eb.mM)(() => Promise.resolve(n), {
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
                                h.default.track(
                                    tt.HAw.POPULAR_GAMES_HOVER,
                                    {
                                        guild_id: a,
                                        duration: t,
                                        popular_games_state: t3(d),
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
                              graphic: (0, i.jsx)(tO, { alt: "", ariaHidden: !0, width: 200 }),
                              title: N.intl.string(Z.default.v59XPT),
                              subtitle: N.intl.string(Z.default.Bayri1),
                          })
                        : n?.status === "error"
                          ? (0, i.jsx)(C, {})
                          : null == n || null == d || "idle" === n.status || "loading" === n.status
                            ? (0, i.jsx)(y, {})
                            : (0, i.jsx)(le, {
                                  guildId: a,
                                  data: d,
                                  title: lt(l),
                                  column: l.position.column,
                                  disabled: "view" !== r,
                              })),
                (0, i.jsx)("div", { ref: o, children: t })
            );
        },
        Title: function (e) {
            let { widget: t } = e;
            return (0, i.jsx)(x.q, { children: lt(t) });
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
                            lj(t, { isCompact: l < 480, canShowEmbed: l >= 560 });
                        },
                        [t],
                    )),
                    (0, tB.g)(n, a, [t], { fireOnMount: !0 }),
                    s.useEffect(
                        () => () => {
                            lp.setState((e) => {
                                if (null == e.byWidgetId[t]) return e;
                                let l = { ...e.byWidgetId };
                                return (delete l[t], { byWidgetId: l });
                            });
                        },
                        [t],
                    ),
                    n),
                f = l_(c.id),
                g = lv(c.id),
                x = lb(c.id),
                { isContributing: p, isSpotifyConnected: j, hasFetchedConsents: v } = (0, nU.MX)(d),
                _ = o?.status === "success" ? o.data : void 0,
                { data: b, shouldHideCurrentUser: A } = (0, nU.qL)(d, _),
                I = "edit" === u,
                N = null != _ && ld(_),
                E = !f && !I && !N,
                S = lI({ guildId: d, widgetId: c.id, data: b }),
                k = (function (e) {
                    let { guildId: t, widgetId: l, data: n, enabled: i } = e,
                        a = lv(l),
                        r = l_(l);
                    return tb({
                        onHoverEnd: s.useCallback(
                            (e) => {
                                let { duration: l, flush: i } = e;
                                null != n &&
                                    h.default.track(
                                        tt.HAw.POPULAR_MUSIC_HOVER,
                                        {
                                            guild_id: t,
                                            duration: l,
                                            popular_music_state: lo(n, a),
                                            popular_music_view: a,
                                            popular_music_layout: lu(r),
                                        },
                                        { flush: i },
                                    );
                            },
                            [t, n, a, r],
                        ),
                        segmentKey: `${a}:${lu(r)}`,
                        enabled: i,
                    });
                })({ guildId: d, widgetId: c.id, data: b, enabled: "view" === u }),
                T = s.useCallback(
                    (e) => {
                        k(e?.closest("[data-guild-space-widget]") ?? null);
                    },
                    [k],
                ),
                w = (0, ll.A)(m, T);
            lN({ guildId: d, widgetId: c.id, data: b, length: 0, isAtEnd: !1, disabled: I || !N });
            let R =
                    "view" === u && v && !p
                        ? (0, i.jsx)(l7, {
                              guildId: d,
                              widgetName: nP(c),
                              isCompact: f,
                              isSpotifyConnected: j,
                              onClick: () => S("contribution_upsell"),
                          })
                        : null,
                D =
                    I || N || o?.status !== "success" || g === la.TOP_LISTENERS
                        ? null
                        : ((l = o.data),
                          null ==
                          (r =
                              l.ranked_songs.find((e) => e.track_external_id === x && null != e.cover_art_hash)
                                  ?.cover_art_hash ??
                              l.ranked_songs.find((e) => null != e.cover_art_hash)?.cover_art_hash)
                              ? null
                              : lL.RQ.IMAGE(r));
            return (0, i.jsxs)("div", {
                className: nG.rf,
                ref: w,
                children: [
                    null != D &&
                        (0, i.jsx)("div", {
                            className: nG.G,
                            "aria-hidden": !0,
                            children: (0, i.jsx)("img", { className: nG.LZ, src: D, alt: "" }),
                        }),
                    (0, i.jsx)("div", {
                        className: nG.Qs,
                        children: (0, i.jsx)("div", {
                            id: lg(c.id),
                            className: nG.nd,
                            role: E ? "tabpanel" : "group",
                            tabIndex: 0,
                            "aria-label": E ? void 0 : lm(g),
                            "aria-labelledby": E ? lf(c.id, g) : void 0,
                            children: (function () {
                                if (I && o?.status !== "success") return (0, i.jsx)(nN, { isCompact: f });
                                if (null == o || "idle" === o.status || "loading" === o.status)
                                    return (0, i.jsx)(y, {});
                                if ("error" === o.status) return (0, i.jsx)(C, {});
                                if (N) return (0, i.jsx)(na, { onSettingsClick: () => S("empty_state_settings") });
                                if (null == b) return (0, i.jsx)(y, {});
                                switch (g) {
                                    case la.TOP_SONGS:
                                        return (0, i.jsx)(nk, { guildId: d, widgetId: c.id, isCompact: f, data: b });
                                    case la.TOP_ARTISTS:
                                        return (0, i.jsx)(l2, { guildId: d, widgetId: c.id, isCompact: f, data: b });
                                    case la.TOP_LISTENERS:
                                        return (0, i.jsx)(nA, {
                                            guildId: d,
                                            widgetId: c.id,
                                            isCompact: f,
                                            data: b,
                                            shouldHideCurrentUser: A,
                                            upsell: R,
                                        });
                                }
                            })(),
                        }),
                    }),
                    g !== la.TOP_LISTENERS && R,
                    (0, i.jsx)(no, { isCompact: f }),
                ],
            });
        },
        Title: function (e) {
            let { widget: t, hydration: l, guildSpaceMode: n } = e,
                s = nP(t),
                a = l?.status === "success" && ld(l.data);
            return "edit" === n || a ? (0, i.jsx)(x.q, { size: "md", children: s }) : (0, i.jsx)(nM, { title: s });
        },
        ViewHeaderTrailing: function (e) {
            let { widget: t, hydration: l, title: n, guildId: s } = e,
                a = l_(t.id),
                r = lv(t.id),
                { data: d } = (0, nU.qL)(s, l?.status === "success" ? l.data : void 0);
            function c(e, l) {
                if (e !== r) {
                    var n;
                    (lA({ guildId: s, data: d, view: e, isCompact: a, location: l }),
                        (n = t.id),
                        (lp.getState().byWidgetId[n] ?? lx).view !== e && lj(n, { view: e, selectedTrackId: null }));
                }
            }
            return l?.status === "success" && ld(l.data)
                ? null
                : a
                  ? (0, i.jsx)(nR, { widgetId: t.id, onSelect: (e) => c(e, "view_select") })
                  : (0, i.jsx)(ls, {
                        label: n,
                        tabs: lr.map((e) => ({ id: e, label: lm(e) })),
                        selectedId: r,
                        panelId: lg(t.id),
                        getTabId: (e) => lf(t.id, e),
                        onSelect: (e) => c(e, "view_tab"),
                    });
        },
    },
    [d.a.WHITEBOARD]: {
        View: function (e) {
            let t,
                l,
                n = (0, nF.n)(),
                a = (0, R.bG)(
                    [nB.A, nH.A],
                    () => {
                        let e = null != n ? nB.A.getChannel(n) : void 0;
                        return null != e && nH.A.can(tt.xBc.USE_EMBEDDED_ACTIVITIES, e);
                    },
                    [n],
                ),
                d = (0, R.bG)(
                    [nQ.Ay],
                    () => {
                        let e = nQ.Ay.getCurrentEmbeddedActivity();
                        return null == e ||
                            e.applicationId !== n1.NW ||
                            e.location.kind !== n6.T.GUILD_CHANNEL ||
                            e.location.channel_id !== n
                            ? null
                            : e;
                    },
                    [n],
                ),
                c = (0, R.bG)([nQ.Ay], () => nQ.Ay.isLaunchingActivity(), []),
                { authResolved: o, isAuthorized: u } =
                    ((t = (0, R.bG)(
                        [nJ.A],
                        () => nJ.A.getFetchStateForApplication(n1.NW) === nJ.FetchState.FETCHED,
                        [],
                    )),
                    (l = (0, R.bG)(
                        [nJ.A, es.A],
                        () => {
                            let e = nJ.A.getNewestTokenForApplication(n1.NW);
                            if (null == e) return !1;
                            let t = es.A.getApplication(n1.NW),
                                l = t?.integrationTypesConfig?.[nK.b.USER_INSTALL]?.oauth2InstallParams?.scopes;
                            if (null == l) return !0;
                            let n = new Set(e.scopes);
                            return l.every((e) => n.has(e));
                        },
                        [],
                    )),
                    s.useEffect(() => {
                        (nJ.A.getFetchStateForApplication(n1.NW) === nJ.FetchState.NOT_FETCHED && nX.A.fetch([n1.NW]),
                            null == es.A.getApplication(n1.NW) && (0, nZ.TA)(n1.NW));
                    }, []),
                    { authResolved: t, isAuthorized: l }),
                m = s.useRef(!1);
            s.useEffect(() => {
                null == d && null != n && a && o && u && !m.current && ((m.current = !0), n2(n));
            }, [a, n, d, o, u]);
            let f = s.useCallback(() => {
                    null != n && ((m.current = !0), n2(n));
                }, [n]),
                g = null != n && o && !u;
            return null == n
                ? (0, i.jsx)(A.B, {
                      className: n5.kL,
                      align: "center",
                      justify: "center",
                      children: (0, i.jsx)(r, { alt: "", width: 200, height: 192 }),
                  })
                : a
                  ? (0, i.jsxs)("div", {
                        className: n5.kL,
                        children: [
                            null != d &&
                                (0, i.jsx)(n9.A, {
                                    frameId: (0, n4.Ri)(d),
                                    level: n8.A.WithinAppContent,
                                    className: n5.t$,
                                }),
                            null == d &&
                                g &&
                                (0, i.jsx)("div", {
                                    className: n5.P5,
                                    children: (0, i.jsx)(W.$, {
                                        variant: "secondary",
                                        text: N.intl.string(Z.default.PSuly6),
                                        loading: c,
                                        onClick: f,
                                    }),
                                }),
                        ],
                    })
                  : (0, i.jsx)("div", {
                        className: n5.kL,
                        children: (0, i.jsx)("div", {
                            className: n5.m0,
                            children: (0, i.jsx)(b.E, {
                                variant: "body-sm/normal",
                                color: "text-muted",
                                children: N.intl.string(Z.default["nXc/MQ"]),
                            }),
                        }),
                    });
        },
        Edit: function (e) {
            let { cancel: t } = e,
                l = (0, R.bG)([tm.A], () => tm.A.getGuildId()),
                n = nz.default.castGuildIdAsEveryoneGuildRoleId(l),
                a = (0, nF.n)(),
                r = (0, R.bG)([nB.A], () => (null != a ? nB.A.getChannel(a) : void 0), [a]),
                d = (0, R.bG)([nH.A], () => null != r && nH.A.can(tt.xBc.MANAGE_ROLES, r), [r]),
                c = (0, R.bG)([nW.A], () => (null == l ? n3 : nW.A.getSortedRoles(l).filter((e) => e.id !== n)), [
                    l,
                    n,
                ]),
                o = s.useMemo(() => {
                    let e;
                    return null != r
                        ? null != (e = r.permissionOverwrites[r.guild_id]) &&
                          nY.zy(e.deny, tt.xBc.USE_EMBEDDED_ACTIVITIES)
                            ? c
                                  .filter((e) => {
                                      let t = r.permissionOverwrites[e.id];
                                      return null != t && nY.zy(t.allow, tt.xBc.USE_EMBEDDED_ACTIVITIES);
                                  })
                                  .map((e) => e.id)
                            : []
                        : [];
                }, [r, c]),
                [u, m] = s.useState(null),
                [f, g] = s.useState(!1),
                [h, x] = s.useState(!1),
                p = u ?? o,
                j = s.useMemo(() => c.map((e) => ({ id: e.id, label: e.name, value: e.id })), [c]);
            return null == r
                ? null
                : (0, i.jsxs)(A.B, {
                      gap: 16,
                      children: [
                          (0, i.jsx)(nO.Z, {
                              selectionMode: "multiple",
                              label: N.intl.string(Z.default.XXLbfv),
                              description: N.intl.string(Z.default.XrpYIG),
                              placeholder: N.intl.string(Z.default.pp6WeD),
                              options: j,
                              value: p,
                              onSelectionChange: function (e) {
                                  (x(!1), m(e));
                              },
                              disabled: !d || f,
                              fullWidth: !0,
                              wrapTags: !0,
                          }),
                          !d &&
                              (0, i.jsx)(tc.w, {
                                  type: "warning",
                                  message: N.intl.string(Z.default.UPLtlA),
                                  role: "none",
                              }),
                          h &&
                              (0, i.jsx)(tc.w, {
                                  type: "critical",
                                  message: N.intl.string(Z.default.xyCJYs),
                                  role: "alert",
                              }),
                          (0, i.jsxs)(to.e, {
                              fullWidth: !0,
                              children: [
                                  (0, i.jsx)(W.$, {
                                      variant: "secondary",
                                      text: N.intl.string(N.t["ETE/oC"]),
                                      onClick: t,
                                      disabled: f,
                                  }),
                                  (0, i.jsx)(W.$, {
                                      variant: "primary",
                                      text: N.intl.string(N.t["R3BPH+"]),
                                      onClick: async function () {
                                          if (null != r) {
                                              (x(!1), g(!0));
                                              try {
                                                  (await (async function (e) {
                                                      let { channel: t, selectedRoleIds: l } = e,
                                                          n = [];
                                                      if (l.length > 0)
                                                          for (let e of (n.push({
                                                              id: t.guild_id,
                                                              type: n$.r2.ROLE,
                                                              allow: n0.x3,
                                                              deny: tt.xBc.USE_EMBEDDED_ACTIVITIES,
                                                          }),
                                                          l))
                                                              n.push({
                                                                  id: e,
                                                                  type: n$.r2.ROLE,
                                                                  allow: tt.xBc.USE_EMBEDDED_ACTIVITIES,
                                                                  deny: n0.x3,
                                                              });
                                                      let i = await (0, nq.RT)(t.id, { permissionOverwrites: n });
                                                      if (!i.ok) throw i;
                                                  })({ channel: r, selectedRoleIds: p }),
                                                      t());
                                              } catch {
                                                  (g(!1), x(!0));
                                              }
                                          }
                                      },
                                      disabled: !d,
                                      loading: f,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
        LockedPreview: r,
    },
};
