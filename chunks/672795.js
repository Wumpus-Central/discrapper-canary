l.d(t, { m: () => n7 });
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
    U = l(663417),
    M = l(140735),
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
    Z = l(61567);
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
function eu(e, t) {
    return {
        id: e,
        name: E.intl.string(E.t.GIWFlF),
        iconUrl: null,
        coverUrl: null,
        coverFallbackIconUrl: null,
        isLoading: t,
    };
}
function eo(e) {
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
                    u = null == d && !l[s],
                    o = null == c && null != n[s] && !r[s];
                null == d || o
                    ? i.set(e, eu(e, u || o))
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
    return e.get(t) ?? eu(t, !1);
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
    let t;
    return ep(e)
        ? "empty_state"
        : null != (t = e.computed_at) &&
            new Date(t).getTime() - e.week_start_ts * ef.A.Millis.SECOND >= ef.A.Millis.WEEK
          ? "podium"
          : "in_progress";
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
                l.e("6050"),
                l.e("230029"),
                l.e("488926"),
                l.e("352456"),
                l.e("203112"),
                l.e("762831"),
                l.e("348567"),
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
        illustration: u,
        title: E.intl.string(Z.default.ULK65a),
        body: E.intl.format(s, { memberCount: 3 }),
        action:
            null != n
                ? (0, i.jsx)(W.$, {
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
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, width: d, height: c, className: u, style: o } = e,
        m = s.useMemo(
            () => (0, a.H)({ width: d, height: c, intrinsicWidth: 24, intrinsicHeight: 24, style: o }),
            [d, c, o],
        );
    return (0, i.jsx)("img", {
        style: m,
        src: eN,
        srcSet: eC,
        className: (0, a.Z)(u),
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
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, width: d, height: c, className: u, style: o } = e,
        m = s.useMemo(
            () => (0, a.H)({ width: d, height: c, intrinsicWidth: 24, intrinsicHeight: 24, style: o }),
            [d, c, o],
        );
    return (0, i.jsx)("img", {
        style: m,
        src: ey,
        srcSet: ek,
        className: (0, a.Z)(u),
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
var ew = l(846058),
    eR = l(428678),
    eD = l(952270),
    eL = l(342296);
function eU(e) {
    let t = Math.floor(Math.max(e, 0) / ef.A.Seconds.MINUTE),
        l = Math.floor(t / ef.A.Minutes.HOUR),
        n = t % ef.A.Minutes.HOUR;
    return 0 === l
        ? E.intl.formatToPlainString(Z.default.DdzvGL, { minutes: n })
        : E.intl.formatToPlainString(Z.default["6Y8H0A"], { hours: l, minutes: n });
}
function eM(e, t) {
    switch (t) {
        case eh.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return {
                primary: E.intl.formatToPlainString(E.t["k2UNz+"], { days: e.value }),
                secondary: eU(e.time_played_seconds),
            };
        case eh.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return {
                primary: E.intl.formatToPlainString(Z.default.rgpc8E, { count: e.value }),
                secondary: eU(e.time_played_seconds),
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
    eW = l(683063),
    ez = l(573435),
    eH = l(402860),
    eF = l(396583),
    eK = l(280450),
    eq = l(994500);
function eY(e, t) {
    let l = t.user_id,
        n = (0, R.bG)([eK.default], () => eK.default.getId() === l, [l]);
    return ei(e, l, { showYouSuffix: n });
}
function e$(e) {
    return (0, R.bG)([eq.A], () => (eq.A.isBlocked(e) ? "blocked" : eq.A.isIgnored(e) ? "ignored" : null), [e]);
}
function eV(e) {
    switch (e) {
        case "blocked":
            return E.intl.string(Z.default.I3YOjC);
        case "ignored":
            return E.intl.string(Z.default.CfMzwe);
    }
}
function eQ(e, t) {
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
var eZ = l(518477),
    eX = l(870087);
function eJ(e) {
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
        x = eY(t, l),
        f = l.application_ids[0],
        g = null != f ? em(a, f) : void 0,
        h = l.user_id,
        p = s.useCallback(() => {
            (o?.(),
                (0, eH.openUserProfileModal)({
                    userId: h,
                    guildId: t,
                    tabSection: eZ.RP.ACTIVITY,
                    scrollTarget: eZ.bk.RECENT_ACTIVITY,
                }));
        }, [o, h, t]);
    return (0, i.jsxs)("div", {
        ref: u,
        "aria-hidden": c,
        inert: c,
        className: j()(eX.nM, { [eX.Bh]: r && !c, [eX.lR]: d }),
        children: [
            (0, i.jsx)(e0, { guildId: t, entry: l, identity: x, lastPlayedGame: g, onClick: o }),
            (0, i.jsx)(e3, { entry: l, stat: n, width: m, onClick: p }),
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
function e0(e) {
    let { guildId: t, entry: l, identity: n, lastPlayedGame: a, onClick: r } = e,
        d = s.useRef(null),
        u = e$(l.user_id),
        o = null != u,
        m = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(e1, { rank: l.rank }),
                o
                    ? (0, i.jsx)("span", {
                          className: eX.gt,
                          children:
                              "blocked" === u
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
                          className: eX.my,
                          "aria-hidden": !0,
                      }),
                (0, i.jsxs)("div", {
                    className: eX.Dc,
                    children: [
                        (0, i.jsx)(I.D, {
                            variant: "heading-sm/semibold",
                            color: o ? "text-subtle" : "text-default",
                            lineClamp: 1,
                            children:
                                null != u
                                    ? eV(u)
                                    : (0, i.jsx)(O.g, {
                                          name: n.displayName,
                                          colorString: n.member?.colorString ?? null,
                                          colorStrings: n.roleColorStrings,
                                      }),
                        }),
                        !o &&
                            null != a &&
                            (0, i.jsx)(b.E, {
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                lineClamp: 1,
                                children: E.intl.formatToPlainString(Z.default.YuNVPY, { gameName: a.name }),
                            }),
                    ],
                }),
            ],
        });
    return null == n.user
        ? (0, i.jsx)("div", { className: eX.D_, children: m })
        : (0, i.jsx)(eL.A, {
              targetElementRef: d,
              user: n.user,
              guildId: t,
              children: (e) =>
                  (0, i.jsx)(L.D, {
                      ...e,
                      innerRef: d,
                      className: j()(eX.D_, eX.FB),
                      onClick: (t) => {
                          (r?.(), e.onClick(t));
                      },
                      children: m,
                  }),
          });
}
function e1(e) {
    let { rank: t } = e,
        l = E.intl.formatToPlainString(Z.default.I4JiAQ, { rank: t });
    switch (t) {
        case 1:
            return (0, i.jsx)("div", { className: eX.Tm, children: (0, i.jsx)(eG.t, { alt: l }) });
        case 2:
            return (0, i.jsx)("div", { className: eX.Tm, children: (0, i.jsx)(eS, { alt: l }) });
        case 3:
            return (0, i.jsx)("div", { className: eX.Tm, children: (0, i.jsx)(eT, { alt: l }) });
        default:
            return (0, i.jsxs)("div", {
                className: eX.mH,
                children: [
                    (0, i.jsx)(M.A, { children: l }),
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
function e2(e) {
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
function e3(e) {
    let { entry: t, stat: l, width: n, onClick: s } = e,
        { primary: a, secondary: r } = eM(t, l);
    return (0, i.jsxs)(L.D, {
        className: eX.TH,
        style: null != n ? { width: n } : void 0,
        "aria-label": E.intl.string(Z.default.o6mBdl),
        onClick: s,
        children: [
            (0, i.jsxs)("div", {
                className: eX.bf,
                children: [
                    (0, i.jsx)(e2, { stat: l }),
                    (0, i.jsx)(b.E, { variant: "text-sm/medium", color: "text-subtle", children: a }),
                ],
            }),
            null != r && (0, i.jsx)(b.E, { variant: "text-xs/medium", color: "text-muted", children: r }),
        ],
    });
}
function e6(e) {
    let { game: t, notched: l } = e;
    return (0, i.jsx)("span", {
        className: eX.rO,
        "aria-hidden": !0,
        children: (0, i.jsx)(ez.Ay, {
            mask: l ? ez.l8[24] : ez.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null != t.iconUrl
                    ? (0, i.jsx)("img", { className: eX.Gt, src: t.iconUrl, alt: "", "aria-hidden": !0 })
                    : (0, i.jsx)("span", { className: eX.ct, "aria-hidden": !0 }),
        }),
    });
}
function e4(e, t) {
    let l = e.filter((e) => null != e.iconUrl || e.isLoading).slice(0, t > 3 ? 2 : 3),
        n = Math.max(0, t - l.length);
    return { visibleGames: l, overflowCount: n };
}
function e8(e) {
    let { played: t, totalCount: l } = e,
        { visibleGames: n, overflowCount: s } = e4(t, l);
    return (0, i.jsxs)("div", {
        className: eX.Nw,
        children: [
            n.map((e, t) => (0, i.jsx)(e6, { game: e, notched: s > 0 || t !== n.length - 1 }, `${e.id}-${t}`)),
            s > 0
                ? (0, i.jsx)("span", {
                      className: eX.rO,
                      children: (0, i.jsx)(ez.Ay, {
                          mask: ez.Ay.Masks.SQUIRCLE,
                          width: 24,
                          height: 24,
                          children: (0, i.jsx)("div", {
                              className: eX.p0,
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
function e5(e) {
    let { played: t, totalCount: l, children: n } = e,
        s = t.filter((e) => null != e.iconUrl || e.isLoading),
        { visibleGames: a, overflowCount: r } = e4(s, s.length),
        d = Math.max(1, a.length + Number(r > 0));
    return (0, i.jsx)(eW.u, {
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
        asset: s.length > 0 ? (0, i.jsx)(e8, { played: s, totalCount: s.length }) : void 0,
        assetSize: 24 * d - 5 * (d - 1),
        children: n,
    });
}
function e9(e) {
    let { name: t, applicationIds: l, applicationCount: n, games: s, onClick: a } = e,
        r = ex(s, l);
    return (0, i.jsx)("div", {
        className: eX.ag,
        children: (0, i.jsx)(e5, {
            played: r,
            totalCount: n,
            children: (0, i.jsx)(L.D, {
                className: j()(eX.Nw, eX.Dz),
                "aria-label": E.intl.formatToPlainString(Z.default.o6mBdl, { name: t }),
                onClick: a,
                children: (0, i.jsx)(e8, { played: r, totalCount: n }),
            }),
        }),
    });
}
var e7 = l(189043);
function te(e) {
    let { guildId: t, entries: l, stat: n, games: s, currentUserEntry: a, currentUserPillarRef: r, onClick: d } = e,
        c = {
            1: { column: e7.HC, pillar: e7.P5 },
            2: { column: e7.th, pillar: e7.Vk },
            3: { column: e7.Ou, pillar: e7.el },
        };
    return (0, i.jsx)("div", {
        className: e7.pI,
        role: "list",
        "aria-label": E.intl.string(Z.default.wKXLfQ),
        children: l.map((e, l) =>
            (0, i.jsx)(
                tt,
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
function tt(e) {
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
        f = ex(u, l.application_ids),
        g = eY(t, l),
        h = e$(l.user_id),
        p = null != h,
        { primary: _ } = eM(l, d),
        v = 1 === n ? P._3.SIZE_48 : P._3.SIZE_40,
        A = s.useRef(null),
        E = 1 === n ? ew.b : 2 === n ? eS : eT,
        N = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: e7.R3,
                    children: [
                        p
                            ? (0, i.jsx)("span", {
                                  className: j()(e7.gt, 1 === n && e7.o2),
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
                        (0, i.jsx)(E, { className: e7.dR, alt: "", ariaHidden: !0 }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: j()(e7.DX, r),
                    children: [
                        (0, i.jsx)(I.D, {
                            variant: "heading-sm/semibold",
                            color: p ? "text-subtle" : "text-default",
                            lineClamp: 1,
                            className: e7.IY,
                            children:
                                null != h
                                    ? eV(h)
                                    : (0, i.jsx)(O.g, {
                                          name: g.displayName,
                                          colorString: g.member?.colorString ?? null,
                                          colorStrings: g.roleColorStrings,
                                      }),
                        }),
                        (0, i.jsx)(e5, {
                            played: f,
                            totalCount: l.application_count,
                            children: (0, i.jsx)(b.E, {
                                variant: "text-xs/medium",
                                color: "text-default",
                                children: _,
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
                ? (0, i.jsx)(eL.A, {
                      targetElementRef: A,
                      user: g.user,
                      guildId: t,
                      children: (e) =>
                          (0, i.jsx)(L.D, {
                              ...e,
                              className: e7.fs,
                              innerRef: A,
                              onClick: (t) => {
                                  (x?.(), e.onClick(t));
                              },
                              children: N,
                          }),
                  })
                : (0, i.jsx)("div", { className: e7.fs, children: N }),
    });
}
var tl = l(652215),
    tn = l(219047);
function ti(e) {
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
        h = eo(s.useMemo(() => Array.from(new Set(m.flatMap((e) => e.application_ids))), [m])),
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
        U = null == o && null != u,
        M = null != y,
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
            className: tn.V$,
            "aria-hidden": !0,
            children: G.map((e) => (0, i.jsx)(e3, { entry: e, stat: d }, e.user_id)),
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
                    g.default.track(tl.HAw.LEADERBOARD_END_IMPRESSION, {
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
        leaderboardState: _,
        leaderboardView: b,
        metric: f,
        isAtEnd: w,
        isEmpty: p,
        disabled: r,
    });
    let W = s.useCallback(
            (e) => {
                r ||
                    g.default.track(tl.HAw.LEADERBOARD_CLICK, {
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
                let l = e === o;
                return (0, i.jsx)(
                    eJ,
                    {
                        guildId: t,
                        entry: e,
                        stat: d,
                        games: h,
                        isCurrentUser: l,
                        shouldDimForCurrentUser: l && M,
                        rowRef: l ? S : void 0,
                        onClick: () => W("row"),
                        metricWidth: O ?? void 0,
                    },
                    `${e.rank}-${e.user_id}`,
                );
            },
            [M, o, h, t, d, S, W, O],
        );
    return p
        ? (0, i.jsx)("div", {
              className: tn.Cm,
              children: (0, i.jsx)(eE, { guildId: t, onActivitySharingClick: () => W("activity_sharing") }),
          })
        : null == O
          ? (0, i.jsxs)("div", { className: tn.rf, children: [B, (0, i.jsx)(C, {})] })
          : (0, i.jsxs)("div", {
                className: tn.rf,
                children: [
                    B,
                    (0, i.jsxs)("div", {
                        className: tn.SY,
                        children: [
                            (0, i.jsxs)(D.d_, {
                                className: j()(tn.p_, { [tn.zE]: n, [tn.Ng]: U }),
                                ref: I,
                                children: [
                                    v &&
                                        (0, i.jsx)(te, {
                                            guildId: t,
                                            entries: A,
                                            stat: d,
                                            games: h,
                                            currentUserEntry: o,
                                            currentUserPillarRef: S,
                                            onClick: () => W("podium"),
                                        }),
                                    m.map(H),
                                ],
                            }),
                            (null != o && null != y) || (U && !w)
                                ? (0, i.jsx)($, { position: "top" !== y || U ? "bottom" : "top" })
                                : null,
                            null != o &&
                                null != y &&
                                (0, i.jsx)(V, {
                                    position: y,
                                    children: (0, i.jsx)(L.D, {
                                        className: tn.Po,
                                        "aria-label": E.intl.string(Z.default.d0Z8kd),
                                        onClick: T,
                                        children: (0, i.jsx)(eJ, {
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
                            U && (0, i.jsx)(ta, { guildId: t, onActivitySharingClick: () => W("activity_sharing") }),
                        ],
                    }),
                    (0, i.jsx)(ts, { computedAt: l.computed_at, inModal: n }),
                ],
            });
}
function ts(e) {
    let { computedAt: t, inModal: l } = e,
        n = (0, i.jsxs)("div", {
            className: tn.z8,
            children: [
                (0, i.jsx)(U.RefreshIcon, { size: "xxs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 }),
                (0, i.jsx)(b.E, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: E.intl.string(Z.default["/nma+a"]),
                }),
            ],
        });
    return null == t
        ? (0, i.jsx)("div", { className: tn.qr, children: n })
        : (0, i.jsx)("div", {
              className: j()(tn.qr, { [tn.zE]: l }),
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
function ta(e) {
    let { guildId: t, onActivitySharingClick: l } = e,
        { requirement: n } = (0, Q.T4)(t),
        a = null == n ? null : { requirement: n, ...X(n, "leaderboard") },
        r = (0, R.bG)([F.A], () => F.A.getStatus() === tl.clD.INVISIBLE),
        d = E.intl.string(Z.default.toxuHd),
        u = !1;
    null != a ? (d = a.body) : r && ((d = E.intl.string(Z.default.PTDDhW)), (u = !0));
    let [o] = s.useState(null != a),
        [m] = s.useState(u),
        x = null == a && !u && o,
        f = null == a && !u && m;
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
              className: tn.Xx,
              children: [
                  (0, i.jsxs)("div", {
                      className: tn.kd,
                      children: [
                          (0, i.jsxs)("div", {
                              className: tn.nk,
                              children: [
                                  (0, i.jsx)(M.A, { children: E.intl.string(Z.default["oHdW+u"]) }),
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
                              className: tn.SA,
                              "aria-hidden": !0,
                              status: r ? tl.clD.INVISIBLE : void 0,
                          }),
                          (0, i.jsxs)("div", {
                              className: tn.ko,
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
                                      className: tn.LF,
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
                          className: tn.rl,
                          children: (0, i.jsx)(W.$, {
                              variant: "secondary",
                              size: "sm",
                              text: a.cta,
                              onClick: () => {
                                  (l(), eA(t, a.requirement, E.intl.string(Z.default.PJn0ih)));
                              },
                          }),
                      }),
                  u &&
                      (0, i.jsx)(W.$, {
                          variant: "secondary",
                          size: "sm",
                          text: E.intl.string(E.t.fwPurU),
                          onClick: () => {
                              (0, H.A)({ nextStatus: tl.clD.ONLINE, prevStatus: tl.clD.INVISIBLE });
                          },
                      }),
              ],
          });
}
var tr = l(665260),
    td = l(636537),
    tc = l(193249),
    tu = l(683071),
    to = l(825484),
    tm = l(71393),
    tx = l(967198),
    tf = l(49303),
    tg = l(313627);
let th = tl.ogj.SUPPRESS_GAMING_LEADERBOARD_NOTIFICATIONS;
var tp = l(224640),
    tj = l(20742),
    t_ = l(253932),
    tv = l(515746);
function tb(e) {
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
                (0, eF.A)(() => n(Date.now()), a ? null : r),
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
        d = t_.PZ.useSetting(),
        c = 2 > (0, q.m_)(a, new Date()) ? (0, q.mk)(a, !1, d).toLowerCase() : (0, q.i$)(a, "L LT", d).toLowerCase(),
        u = n
            ? E.intl.format(Z.default.kG9XmM, { endedAt: c, nextStatName: (0, eg.K)(t.next_stat).name })
            : E.intl.format(Z.default["X+VLqi"], { statQuestion: l.question, endsAt: c });
    return (0, i.jsx)(eW.u, {
        title: l.name,
        body: u,
        position: "top",
        children: (0, i.jsx)("div", {
            className: j()(tv.qS, n ? tv.yM : tv.Qk),
            tabIndex: 0,
            children: (0, i.jsx)(b.E, {
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
function tI(e) {
    let { guildId: t, data: l, expanded: n, column: i, enabled: a } = e,
        r = s.useCallback(
            (e) => {
                let { duration: s, flush: a } = e;
                null != l &&
                    g.default.track(
                        tl.HAw.LEADERBOARD_HOVER,
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
    return tA({ onHoverEnd: r, enabled: a });
}
var tE = l(460614);
function tN(e) {
    let { guildId: t, data: l, modalProps: n } = e,
        s = eQ(t, l),
        a = tI({ guildId: t, data: s, expanded: !0 });
    return null == s
        ? null
        : (0, i.jsx)(tp.d, {
              size: "lg",
              "aria-label": ej(s),
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
                                      (0, i.jsx)(I.D, {
                                          variant: "heading-sm/medium",
                                          className: tE.DD,
                                          children: ej(s),
                                      }),
                                      (0, i.jsx)(tb, { data: s }),
                                  ],
                              }),
                              (0, i.jsx)(tj.s_, {}),
                          ],
                      }),
                      (0, i.jsx)("div", {
                          className: tE.rf,
                          children: (0, i.jsx)(ti, { guildId: t, data: s, inModal: !0 }),
                      }),
                  ],
              }),
          });
}
var tC = l(452027),
    tS = l(103557),
    ty = l(95477),
    tk = l(241326),
    tT = l(2553),
    tw = l(405810),
    tR = l(488428),
    tD = l(776231);
let tL = (0, l(676279).cy)();
function tU(e, t, l) {
    let n = l.startsWith("a_"),
        i = n ? (tL ? "webp" : "gif") : tL ? "webp" : "jpg",
        { CDN_HOST: s, API_ENDPOINT: a } = window.GLOBAL_ENV,
        r = tl.Rsh.GUILD_SPACE_IMAGE_TEXT_WIDGET_IMAGE(e, t, l, i),
        d = null != s ? `https://${s}${r}` : location.protocol + a + r,
        c = { size: (0, tD.kr)(500 * (0, tD.mZ)()) };
    return (
        "jpg" === i && (c.quality = "lossless"), "webp" === i && n && (c.animated = !0), (d += `?${tR.stringify(c)}`)
    );
}
var tM = l(868602),
    tG = l(445187);
function tP(e) {
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
var tO = l(770178),
    tB = l(104171),
    tW = l(889227),
    tz = l(980707),
    tH = l(477782),
    tF = l(950305),
    tK = l(265872),
    tq = l(966327),
    tY = l(409626),
    t$ = l(692969),
    tV = l(788593),
    tQ = l(427262);
l(347661);
var tZ = l(948852),
    tX = l(365611);
function tJ(e) {
    let { guildId: t, applicationId: l, userIds: n, totalUsers: a, gameName: r } = e,
        d = s.useRef(null),
        u = (0, R.yK)([eq.A], () => n.filter((e) => !eq.A.isBlockedOrIgnored(e)).slice(0, 5), [n]),
        o = (0, R.yK)([K.default], () => u.map((e) => K.default.getUser(e)).filter(ec.Vq), [u]),
        m = (0, R.cf)(
            [el.Ay],
            () => {
                let e = {};
                for (let l of o) e[l.id] = el.Ay.getNick(t, l.id) ?? tQ.Ay.getName(l);
                return e;
            },
            [t, o],
        ),
        x = Math.max(0, a - o.length),
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
                        o.map((e) =>
                            (0, i.jsx)(
                                tH.Dr,
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
                                    action: () => (0, eH.openUserProfileModal)({ userId: e.id, guildId: t }),
                                },
                                e.id,
                            ),
                        ),
                        x > 0 ? (0, i.jsx)(tH.Dr, { id: `${l}-overflow`, label: g, disabled: !0 }) : null,
                    ],
                });
            },
            [l, t, f, m, x, g, o],
        ),
        p = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(tF.UserIcon, {
                    size: "custom",
                    width: 14,
                    height: 14,
                    color: c.A.colors.ICON_SUBTLE,
                    "aria-hidden": !0,
                }),
                (0, i.jsx)(b.E, {
                    tag: "span",
                    className: tZ.Rd,
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: a,
                }),
            ],
        });
    return 0 === o.length
        ? (0, i.jsx)("div", { className: tZ.Fk, role: "img", "aria-label": f, children: p })
        : (0, i.jsx)(tK.Y, {
              targetElementRef: d,
              position: "bottom",
              align: "left",
              renderPopout: h,
              children: (e) =>
                  (0, i.jsx)(L.D, { innerRef: d, className: j()(tZ.Fk, tZ.r6), ...e, "aria-label": f, children: p }),
          });
}
function t0(e) {
    let { guildId: t, entry: l, games: n, onClick: s } = e,
        { name: a, coverUrl: r, coverFallbackIconUrl: d, isLoading: c } = em(n, l.application_id),
        u = (0, t$.A)({
            location: "PopularGamesGameCard",
            applicationId: l.application_id,
            source: tY.GameProfileSources.GuildSpacePopularGames,
            trackEntryPointImpression: !0,
        }),
        o = null != u;
    if (c)
        return (0, i.jsx)("div", {
            className: tZ.Nr,
            role: "listitem",
            children: (0, i.jsx)("div", { className: tX.mD }),
        });
    let x = (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.m, {
                text: a,
                ariaHidden: !0,
                children: (0, i.jsx)("div", {
                    className: j()(tX.PY, { [tX.vk]: o, [tX.iL]: o && (null != r || null != d) }),
                    children: (0, i.jsx)(tV.R, { imageSrc: r, iconSrc: d, gameName: a }),
                }),
            }),
            (0, i.jsx)(b.E, { variant: "text-sm/semibold", color: "text-default", lineClamp: 1, children: a }),
        ],
    });
    return (0, i.jsxs)("div", {
        className: tZ.Nr,
        role: "listitem",
        children: [
            o
                ? (0, i.jsx)(L.D, {
                      className: j()(tZ.LO, tZ.vk),
                      onClick: () => {
                          (u(), s());
                      },
                      "aria-label": E.intl.formatToPlainString(E.t["8QLQB+"], { gameName: a }),
                      children: x,
                  })
                : (0, i.jsx)("div", { className: tZ.LO, children: x }),
            (0, i.jsx)(tJ, {
                guildId: t,
                applicationId: l.application_id,
                userIds: l.user_ids,
                totalUsers: l.total_users,
                gameName: a,
            }),
        ],
    });
}
function t1(e) {
    return 0 === e.games.length || e.total_users < 3;
}
function t2(e) {
    return t1(e) ? "empty_state" : "regular";
}
var t3 = l(57129),
    t6 = l(560328);
function t4(e) {
    let { guildId: t, requirement: l, onClick: n } = e;
    return (0, i.jsx)(y, {
        className: t6.p$,
        illustration: tP,
        title: E.intl.string(Z.default.ULK65a),
        body: E.intl.format(null != l ? Z.default.JDAHQV : Z.default.LeSGal, { memberCount: 3 }),
        action:
            null != l
                ? (0, i.jsx)(W.$, {
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
function t8(e) {
    let { guildId: t, requirement: l, onClick: n } = e,
        s = X(l, "popular_games");
    return (0, i.jsxs)("div", {
        className: t6.UX,
        children: [
            (0, i.jsxs)("div", {
                className: t6.tD,
                children: [
                    (0, i.jsx)(I.D, {
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        lineClamp: 1,
                        children: E.intl.string(t3.default.WhdCGP),
                    }),
                    (0, i.jsx)(b.E, {
                        variant: "text-xs/medium",
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
                    (n(), eA(t, l, E.intl.string(Z.default.e7pD5m)));
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
function t9(e) {
    let { guildId: t, memberIds: l, totalUsers: n, totalGames: s, isCompact: a } = e,
        r = a ? 2 : 4,
        d = (0, R.yK)(
            [eq.A, K.default],
            () =>
                l
                    .filter((e) => !eq.A.isBlockedOrIgnored(e))
                    .map((e) => K.default.getUser(e))
                    .filter(ec.Vq)
                    .slice(0, r),
            [l, r],
        ),
        c = n - d.length;
    return (0, i.jsxs)("div", {
        className: t6.qr,
        children: [
            (0, i.jsx)(b.E, {
                className: t6.z,
                variant: "text-xs/normal",
                color: "text-muted",
                lineClamp: 1,
                children: E.intl.format(Z.default.ED2GDQ, { memberCount: n, gameCount: s }),
            }),
            d.length > 0 &&
                (0, i.jsx)("div", {
                    className: t6.WM,
                    children: (0, i.jsx)(tB.Ay, {
                        users: d,
                        guildId: t,
                        size: tB.DN.SIZE_24,
                        max: d.length,
                        renderUser: function (e) {
                            return e instanceof tW.A ? (0, i.jsx)(t5, { guildId: t, user: e }) : null;
                        },
                        count: n,
                        hideMoreUsers: c <= 0,
                        renderMoreUsers: () =>
                            (0, i.jsx)("span", {
                                className: t6.ju,
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
function t7(e) {
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
            return ((0, tO.g)(e, n, [], { fireOnMount: !0 }), { ref: e, ...t });
        })(),
        { requirement: o } = (0, Q.T4)(t),
        m = t1(l),
        x = s.useMemo(() => (m ? [] : l.user_ids), [m, l.user_ids]);
    (0, z.k6)(t, x);
    let f = s.useMemo(() => l.games.map((e) => e.application_id), [l.games]),
        h = eo(f),
        p = s.useMemo(() => f.map((e) => h.get(e)?.coverUrl).find(ec.Vq) ?? null, [h, f]),
        j = s.useMemo(() => ({ "--custom-popular-games-columns": c }), [c]),
        _ = s.useCallback(
            (e) => {
                r ||
                    g.default.track(tl.HAw.POPULAR_GAMES_CLICK, {
                        location: e,
                        guild_id: t,
                        popular_games_state: t2(l),
                        popular_games_view: k({ expanded: !1, column: a }),
                    });
            },
            [r, t, l, a],
        ),
        v = null;
    return (
        (v = m
            ? (0, i.jsx)(t4, { guildId: t, requirement: o, onClick: () => _("activity_sharing") })
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
                                              t0,
                                              { guildId: t, entry: e, games: h, onClick: () => _("game") },
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
                                  (0, i.jsx)(t8, { guildId: t, requirement: o, onClick: () => _("activity_sharing") }),
                              (0, i.jsx)(t9, {
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
        (0, i.jsx)("div", { className: t6.rf, ref: d, children: v })
    );
}
function le(e) {
    return e.default_title ?? E.intl.string(Z.default.GZsvDx);
}
var lt = l(612324),
    ll = l(650583),
    ln = l(684343);
function li(e) {
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
                    case ll.dh.ARROW_RIGHT:
                    case ll.dh.ARROW_DOWN:
                        t = (s + 1) % i.length;
                        break;
                    case ll.dh.ARROW_LEFT:
                    case ll.dh.ARROW_UP:
                        t = (s - 1 + i.length) % i.length;
                        break;
                    case ll.dh.HOME:
                        t = 0;
                        break;
                    case ll.dh.END:
                        t = i.length - 1;
                        break;
                    default:
                        return;
                }
                (e.preventDefault(), i[t]?.focus());
            }
        }, []);
    return (0, i.jsx)("div", {
        className: ln.vR,
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
                    className: ln.Mf,
                    "aria-selected": t,
                    "aria-controls": a,
                    tabIndex: t ? 0 : -1,
                    onClick: () => d(e.id),
                    onKeyDown: c,
                    children: (0, i.jsx)(b.E, {
                        className: ln.Pf,
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
var ls = (((n = {}).TOP_SONGS = "top_songs"), (n.TOP_ARTISTS = "top_artists"), (n.TOP_LISTENERS = "top_listeners"), n);
let la = ["top_songs", "top_artists", "top_listeners"];
function lr(e) {
    return 1 > e.ranked_songs.reduce((e, t) => e + t.plays, 0);
}
function ld(e) {
    return e.top_listeners.length < 2;
}
function lc(e, t) {
    return lr(e) || ("top_listeners" === t && ld(e)) ? "empty_state" : "populated";
}
function lu(e) {
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
function lm(e, t) {
    return `popular-music-tab-${e}-${t}`;
}
function lx(e) {
    return `popular-music-panel-${e}`;
}
var lf = l(196765);
let lg = { view: "top_songs", isCompact: !1, canShowEmbed: !1, selectedTrackId: null },
    lh = (0, lf.v)(() => ({ byWidgetId: {} }));
function lp(e, t) {
    lh.setState((l) => {
        let n = l.byWidgetId[e] ?? lg;
        return { byWidgetId: { ...l.byWidgetId, [e]: { ...n, ...t } } };
    });
}
function lj(e) {
    return lh((t) => t.byWidgetId[e]?.view ?? lg.view);
}
function l_(e) {
    return lh((t) => t.byWidgetId[e]?.isCompact ?? lg.isCompact);
}
function lv(e) {
    return lh((t) => t.byWidgetId[e]?.selectedTrackId ?? lg.selectedTrackId);
}
function lb(e) {
    let { guildId: t, data: l, view: n, isCompact: i, location: s } = e;
    g.default.track(tl.HAw.POPULAR_MUSIC_CLICK, {
        location: s,
        guild_id: t,
        popular_music_state: null != l ? lc(l, n) : null,
        popular_music_view: n,
        popular_music_layout: lu(i),
    });
}
function lA(e) {
    let { guildId: t, widgetId: l, data: n } = e,
        i = lj(l),
        a = l_(l);
    return s.useCallback((e) => lb({ guildId: t, data: n, view: i, isCompact: a, location: e }), [t, n, i, a]);
}
function lI(e) {
    let { guildId: t, widgetId: l, data: n, length: i, isAtEnd: a, disabled: r = !1 } = e,
        d = lj(l),
        c = l_(l),
        u = null != n ? lc(n, d) : null,
        o = lu(c),
        m = "empty_state" === u,
        x = s.useRef(null),
        f = `${t}:${i}:${u}:${d}:${o}`,
        h = s.useCallback(() => {
            x.current !== f &&
                ((x.current = f),
                g.default.track(tl.HAw.POPULAR_MUSIC_END_IMPRESSION, {
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
var lN = l(59652),
    lC = l(991308),
    lS = l(28863),
    ly = l(148166),
    lk = l(427209),
    lT = l(294454),
    lw = l(605810);
function lR(e) {
    let { target: t, tabIndex: n, onClick: s } = e;
    return (0, i.jsx)("div", {
        className: lw.ql,
        children: (0, i.jsx)(m.m, {
            text: E.intl.string(E.t.RDE0Sc),
            ariaHidden: !0,
            children: (0, i.jsx)(x.K, {
                icon: lk.A,
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
                                    l.e("457428"),
                                    l.e("552653"),
                                    l.e("311580"),
                                    l.e("174554"),
                                    l.e("116815"),
                                    l.e("813057"),
                                    l.e("6050"),
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
                                    l.e("725134"),
                                    l.e("921611"),
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
                                    l.e("587618"),
                                    l.e("424199"),
                                    l.e("645499"),
                                    l.e("726391"),
                                    l.e("342551"),
                                    l.e("125729"),
                                    l.e("162512"),
                                    l.e("695765"),
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
                                    l.e("199999"),
                                    l.e("205596"),
                                    l.e("110116"),
                                    l.e("828111"),
                                    l.e("890027"),
                                    l.e("140402"),
                                    l.e("809915"),
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
                                    l.e("593020"),
                                    l.e("955184"),
                                    l.e("249366"),
                                    l.e("728633"),
                                    l.e("628439"),
                                    l.e("136022"),
                                    l.e("756148"),
                                    l.e("539620"),
                                    l.e("225990"),
                                    l.e("183534"),
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
                                    l.e("631608"),
                                    l.e("844780"),
                                    l.e("133902"),
                                    l.e("92124"),
                                    l.e("123353"),
                                    l.e("593176"),
                                    l.e("988077"),
                                    l.e("592028"),
                                    l.e("776750"),
                                    l.e("76705"),
                                    l.e("232551"),
                                    l.e("425906"),
                                    l.e("123216"),
                                    l.e("561216"),
                                    l.e("770291"),
                                    l.e("313681"),
                                    l.e("588940"),
                                    l.e("552712"),
                                    l.e("829177"),
                                    l.e("106943"),
                                    l.e("892340"),
                                    l.e("836545"),
                                    l.e("147786"),
                                    l.e("14962"),
                                    l.e("127151"),
                                    l.e("482861"),
                                    l.e("770697"),
                                    l.e("858514"),
                                    l.e("790244"),
                                    l.e("344265"),
                                    l.e("121435"),
                                    l.e("643612"),
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
                                    l.e("486792"),
                                    l.e("377766"),
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
                                    l.e("556967"),
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
                                    l.e("115754"),
                                    l.e("278424"),
                                    l.e("744385"),
                                    l.e("59413"),
                                    l.e("29664"),
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
                                    l.e("890480"),
                                    l.e("440963"),
                                    l.e("766031"),
                                    l.e("599889"),
                                    l.e("394317"),
                                    l.e("304329"),
                                    l.e("207960"),
                                    l.e("256831"),
                                ]).then(l.bind(l, 99266));
                                return function (l) {
                                    return (0, i.jsx)(e, { ...l, target: t });
                                };
                            },
                            { stackingBehavior: "stack", modalKey: lT.aU },
                        ));
                },
            }),
        }),
    });
}
var lD = l(272984);
function lL(e) {
    let { artist: t, itemProps: l, cardRef: n, onClick: a, onForwardClick: r } = e,
        d = null != t.artist_image_hash ? lD.RQ.IMAGE(t.artist_image_hash) : null,
        c = s.useMemo(
            () => ({
                kind: "artist",
                shareUrl: lD.RQ.WEB_OPEN(lD.M0.ARTIST, t.artist_external_id),
                title: t.artist_name ?? t.artist_external_id,
                subtitle: null,
                imageUrl: d,
            }),
            [t.artist_external_id, t.artist_name, d],
        ),
        u = s.useMemo(() => lN.V.getDefaultLinkInterceptor(c.shareUrl), [c.shareUrl]),
        o = s.useCallback(
            (e) => {
                (a(), u?.(e));
            },
            [u, a],
        ),
        m = (0, i.jsx)(ly.R, { src: d, isCircular: !0, FallbackIcon: lC.I });
    return null == t.artist_name
        ? (0, i.jsx)("div", {
              className: lw.Nr,
              ref: n,
              children: (0, i.jsx)("div", { ...l, className: lw.MT, children: m }),
          })
        : (0, i.jsxs)("div", {
              className: lw.Nr,
              ref: n,
              children: [
                  (0, i.jsxs)(lS.Anchor, {
                      ...l,
                      className: lw.MT,
                      href: c.shareUrl,
                      useDefaultUnderlineStyles: !1,
                      onClick: o,
                      children: [
                          m,
                          (0, i.jsx)("span", {
                              className: lw.Qq,
                              children: (0, i.jsx)(b.E, {
                                  className: lw.DD,
                                  tag: "span",
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  lineClamp: 2,
                                  children: t.artist_name,
                              }),
                          }),
                      ],
                  }),
                  (0, i.jsx)(lR, { target: c, tabIndex: l.tabIndex, onClick: r }),
              ],
          });
}
var lU = l(872351),
    lM = l(708988),
    lG = l(628137);
let lP = "none",
    lO = (e, t) => (0, i.jsx)(b.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: e }, t);
function lB(e) {
    return e;
}
function lW(e) {
    return e?.direction ?? lP;
}
function lz(e) {
    if (null == e) return null;
    let t = Math.round(Math.abs(e));
    return 0 === t
        ? null
        : { direction: e > 0 ? "up" : "down", label: E.intl.formatToPlainString(Z.default["h+LUpk"], { percent: t }) };
}
function lH(e) {
    return lz(null != e.plays_trend_pct ? 100 * e.plays_trend_pct : null);
}
var lF = l(633099);
function lK(e) {
    let { trend: t } = e,
        l = "up" === t.direction ? lU.z : lM.M;
    return (0, i.jsxs)("span", {
        className: lF.GW,
        children: [
            (0, i.jsx)(l, {
                className: j()({ [lF.$J]: "up" === t.direction, [lF.KW]: "down" === t.direction }),
                size: "xxs",
                color: "currentColor",
                "aria-hidden": !0,
            }),
            (0, i.jsx)(b.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: t.label }),
        ],
    });
}
function lq(e) {
    var t;
    let { guildId: l, song: n } = e,
        a = (0, R.yK)(
            [eq.A],
            () => (n.facepile_user_ids ?? []).filter((e) => !eq.A.isBlockedOrIgnored(e)).slice(0, 3),
            [n.facepile_user_ids],
        );
    (0, z.k6)(l, a);
    let r = (0, R.yK)([K.default], () => a.map((e) => K.default.getUser(e)), [a]),
        d = s.useMemo(() => r.filter((e) => null != e), [r]);
    if (0 === d.length) return null;
    let c = n.unique_listeners - d.length;
    return (0, i.jsx)("span", {
        className: lF.WM,
        role: "group",
        "aria-label":
            ((t = n.unique_listeners),
            E.intl.formatToPlainString(Z.default.AzIhRB, { count: t, trend: lP, countHook: lB })),
        children: (0, i.jsx)(tB.Ay, {
            users: d,
            guildId: l,
            size: tB.DN.SIZE_24,
            max: d.length,
            count: n.unique_listeners,
            hideMoreUsers: c <= 0,
            renderMoreUsers: () =>
                (0, i.jsx)("span", {
                    className: lF.ju,
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
function lY(e) {
    let { trackExternalId: t } = e,
        [l, n] = s.useState(!1);
    return (0, i.jsxs)("div", {
        className: lF.aF,
        children: [
            (0, i.jsx)(lG.A, {
                resourceType: lD.M0.TRACK,
                resourceId: t,
                onLoad: () => n(!0),
                allowEncryptedMedia: !0,
            }),
            !l && (0, i.jsx)("div", { className: lF.Ls, "aria-hidden": !0 }),
        ],
    });
}
function l$(e) {
    let { isCompact: t, headline: l, detail: n, trend: s } = e;
    return null == l && null == n && null == s
        ? null
        : (0, i.jsx)("div", {
              className: j()(lF.yp, { [lF.Fl]: t }),
              children: (0, i.jsxs)("div", {
                  className: lF.QD,
                  children: [
                      null != l &&
                          (0, i.jsx)(b.E, {
                              tag: "div",
                              variant: "heading-xl/semibold",
                              color: "text-default",
                              children: l,
                          }),
                      (0, i.jsxs)("div", {
                          className: lF._0,
                          children: [
                              null != n &&
                                  (0, i.jsx)(b.E, {
                                      tag: "span",
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: n,
                                  }),
                              null != s && (0, i.jsx)(lK, { trend: s }),
                          ],
                      }),
                  ],
              }),
          });
}
function lV(e) {
    var t;
    let { guildId: l, isCompact: n, canShowEmbed: s, song: a } = e,
        r = lz(a.plays_change_percent);
    return (0, i.jsxs)("div", {
        className: j()(lF.yp, { [lF.Fl]: n }),
        children: [
            s && (0, i.jsx)(lY, { trackExternalId: a.track_external_id }, a.track_external_id),
            (0, i.jsxs)("div", {
                className: j()(lF.QD, lF.rk),
                children: [
                    (0, i.jsx)(lq, { guildId: l, song: a }),
                    (0, i.jsxs)("div", {
                        className: lF._0,
                        children: [
                            (0, i.jsx)(b.E, {
                                tag: "span",
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                children:
                                    ((t = a.plays),
                                    E.intl.format(Z.default["7hHUIS"], { count: t, trend: lW(r), countHook: lO })),
                            }),
                            null != r && (0, i.jsx)(lK, { trend: r }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var lQ = l(197935),
    lZ = l(915734);
function lX(e) {
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
        className: j()(lZ.Dk, { [lZ.yI]: n }),
        children: (0, i.jsx)(lQ.A, {
            items: l,
            getItemKey: a,
            renderItem: m,
            gap: 8,
            edgeFade: 40,
            actionsClassName: lZ.o1,
            "aria-label": t,
        }),
    });
}
var lJ = l(742452);
function l0(e) {
    return e.artist_external_id;
}
function l1(e) {
    let { guildId: t, widgetId: l, isCompact: n, data: a } = e,
        [r, d] = lE(a.ranked_artists.length),
        c = lA({ guildId: t, widgetId: l, data: a });
    lI({ guildId: t, widgetId: l, data: a, length: a.ranked_artists.length, isAtEnd: r });
    let u = s.useCallback(() => c("artist"), [c]),
        o = s.useCallback(() => c("forward"), [c]),
        m = s.useCallback(
            (e, t, l) => (0, i.jsx)(lL, { artist: e, itemProps: t, cardRef: l, onClick: u, onForwardClick: o }),
            [u, o],
        );
    if (0 === a.ranked_artists.length) return null;
    let x = lH(a);
    return (0, i.jsxs)("div", {
        className: lJ.U,
        children: [
            (0, i.jsx)(lX, {
                label: lo(ls.TOP_ARTISTS),
                items: a.ranked_artists,
                isCompact: n,
                getItemKey: l0,
                renderItem: m,
                onScrollEndChange: d,
            }),
            (0, i.jsx)(l$, {
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
                              trend: lW(x),
                              memberCountHook: lO,
                              artistCountHook: lO,
                          }),
                trend: x,
            }),
        ],
    });
}
var l2 = l(803613),
    l3 = l(682348),
    l6 = l(73152),
    l4 = l(280911);
function l8(e) {
    let { guildId: t, isCompact: l } = e,
        n = (0, R.bG)([K.default], () => K.default.getCurrentUser()),
        s = (0, R.bG)([el.Ay], () => (null != n ? el.Ay.getMember(t, n.id) : null)),
        a = (0, et.gn)(t, n?.id, s?.colorStrings ?? null),
        r = en.Ay.useName(t, void 0, n);
    return (0, i.jsxs)("div", {
        className: l4.D_,
        children: [
            (0, i.jsxs)("div", {
                className: l4.FI,
                "aria-hidden": !0,
                children: [
                    !l &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("span", { className: l4.eu, children: (0, i.jsx)(l2.D, { size: "sm" }) }),
                                (0, i.jsxs)("span", {
                                    className: l4.r$,
                                    children: [
                                        (0, i.jsx)("span", { className: l4.Om }),
                                        (0, i.jsx)("span", { className: l4.Om }),
                                        (0, i.jsx)("span", { className: l4.Om }),
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
                className: l4.Qq,
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
function l5(e) {
    let { widgetName: t, isCompact: l } = e;
    return (0, i.jsxs)("div", {
        className: l4.D_,
        children: [
            !l &&
                (0, i.jsx)("span", {
                    className: l4.eu,
                    "aria-hidden": !0,
                    children: (0, i.jsx)(l3._, { size: "sm", color: c.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
                }),
            (0, i.jsxs)("div", {
                className: l4.Qq,
                children: [
                    (0, i.jsx)(I.D, {
                        variant: "heading-sm/semibold",
                        color: "text-strong",
                        lineClamp: 1,
                        children: E.intl.string(t3.default.WhdCGP),
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
        className: l4.UX,
        children: [
            a ? (0, i.jsx)(l5, { widgetName: n, isCompact: s }) : (0, i.jsx)(l8, { guildId: t, isCompact: s }),
            (0, i.jsx)(W.$, {
                variant: "secondary",
                size: "sm",
                icon: a ? void 0 : l6.E,
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
                                    l.e("6050"),
                                    l.e("230029"),
                                    l.e("488926"),
                                    l.e("352456"),
                                    l.e("203112"),
                                    l.e("13566"),
                                    l.e("348567"),
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
function l7(e) {
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
var ne = l(625903),
    nt = l(780964),
    nl = l(766075),
    nn = l(30370),
    ni = l(123894);
function ns(e) {
    let { onSettingsClick: t } = e,
        l = (0, R.bG)([nn.A], () => nn.A.getAccounts().some((e) => e.type === tl.fg2.SPOTIFY && e.showActivity));
    return (0, i.jsx)(y, {
        className: ni.w,
        illustration: l7,
        title: E.intl.string(Z.default.ULK65a),
        body: E.intl.format(l ? Z.default.BLuvck : Z.default["Ko3a0+"], { memberCount: 2 }),
        action: l
            ? null
            : (0, i.jsx)(W.$, {
                  variant: "secondary",
                  size: "sm",
                  icon: ne.SettingsIcon,
                  text: E.intl.string(E.t["3D5yo/"]),
                  onClick: () => {
                      (t(), (0, nl.openUserSettings)(nt.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING));
                  },
              }),
    });
}
function na() {
    return (0, i.jsx)(y, {
        className: ni.w,
        illustration: l7,
        title: E.intl.string(Z.default.ULK65a),
        body: E.intl.format(Z.default.ZQxU8v, { memberCount: 2 }),
    });
}
var nr = l(109487),
    nd = l(279543);
function nc(e) {
    let { isCompact: t } = e;
    return (0, i.jsxs)("div", {
        className: nd.qr,
        children: [
            (0, i.jsxs)("div", {
                className: nd.Os,
                children: [
                    (0, i.jsx)("span", {
                        className: nd.Kk,
                        children: (0, i.jsx)(U.RefreshIcon, {
                            size: "xxs",
                            color: c.A.colors.ICON_SUBTLE,
                            "aria-hidden": !0,
                        }),
                    }),
                    (0, i.jsx)(b.E, {
                        className: nd.Pf,
                        tag: "span",
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: E.intl.string(Z.default["3/DOFo"]),
                    }),
                ],
            }),
            (0, i.jsxs)(lS.Anchor, {
                className: nd.al,
                href: lD.RQ.WEB_HOME,
                "aria-label": E.intl.string(Z.default["jUr+wF"]),
                children: [
                    (0, i.jsx)("span", {
                        className: nd.Kk,
                        children: (0, i.jsx)(nr.L, { size: "xs", color: c.A.colors.ICON_STRONG, "aria-hidden": !0 }),
                    }),
                    !t &&
                        (0, i.jsx)(b.E, {
                            className: nd.G2,
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
var nu = l(860071),
    no = l(65154),
    nm = l(329177),
    nx = l(242226);
function nf(e) {
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
        f = ei(l, n, { showYouSuffix: d }),
        { user: g } = f;
    return null == g
        ? null
        : (0, i.jsxs)("div", {
              ref: m,
              "aria-hidden": o,
              inert: o,
              className: j()(nx.nM, { [nx.Bh]: d && !o, [nx.lR]: u }),
              children: [
                  (0, i.jsx)(ng, { guildId: l, user: g, identity: f, rank: a, listener: s, onClick: x }),
                  null != s &&
                      (0, i.jsxs)("div", {
                          className: j()(nx.Mx, { [nx.dA]: r }),
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
                  null != s && !r && (0, i.jsx)(n_, { artists: s.artists, artistCount: s.artist_count ?? null }),
              ],
          });
}
function ng(e) {
    let { guildId: t, user: l, identity: n, rank: a, listener: r, onClick: d } = e,
        u = s.useRef(null),
        o = (0, R.bG)([eq.A], () => (eq.A.isBlocked(l.id) ? "blocked" : eq.A.isIgnored(l.id) ? "ignored" : null), [
            l.id,
        ]),
        m = null != o;
    return (0, i.jsx)(eL.A, {
        targetElementRef: u,
        user: l,
        guildId: t,
        children: (e) =>
            (0, i.jsxs)(L.D, {
                ...e,
                innerRef: u,
                className: nx.D_,
                onClick: (t) => {
                    (d(), e.onClick(t));
                },
                children: [
                    null != a &&
                        (0, i.jsx)(M.A, { children: E.intl.formatToPlainString(Z.default.I4JiAQ, { rank: a }) }),
                    (0, i.jsxs)("span", {
                        className: nx.R3,
                        children: [
                            m
                                ? (0, i.jsx)("span", {
                                      className: nx.gt,
                                      children:
                                          "blocked" === o
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
                            1 === a &&
                                (0, i.jsx)("span", {
                                    className: nx.ie,
                                    "aria-hidden": !0,
                                    children: (0, i.jsx)(nm.CrownIcon, { size: "xxs", color: "currentColor" }),
                                }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: nx.Dc,
                        children: [
                            (0, i.jsx)(I.D, {
                                variant: "heading-sm/semibold",
                                color: m ? "text-subtle" : "text-default",
                                lineClamp: 1,
                                children:
                                    null != o
                                        ? (function (e) {
                                              switch (e) {
                                                  case "blocked":
                                                      return E.intl.string(Z.default.I3YOjC);
                                                  case "ignored":
                                                      return E.intl.string(Z.default.CfMzwe);
                                              }
                                          })(o)
                                        : (0, i.jsx)(O.g, {
                                              name: n.displayName,
                                              colorString: n.member?.colorString ?? null,
                                              colorStrings: n.roleColorStrings,
                                          }),
                            }),
                            !m && (0, i.jsx)(np, { listener: r }),
                        ],
                    }),
                ],
            }),
    });
}
function nh(e, t) {
    return (0, i.jsx)(b.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: e }, t);
}
function np(e) {
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
                ? E.intl.format(Z.default.QqaqBg, { trackTitle: l, artistName: n, highlightHook: nh })
                : E.intl.format(Z.default.ZMJ8Mt, { trackTitle: l, highlightHook: nh }),
    });
}
function nj(e) {
    let { artist: t, notched: l } = e,
        [n, a] = s.useState(!1),
        r = null != t.artist_image_hash ? lD.RQ.IMAGE(t.artist_image_hash) : null;
    return (0, i.jsx)("span", {
        className: nx.sG,
        children: (0, i.jsx)(ez.Ay, {
            mask: l ? ez.l8[24] : ez.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null == r || n
                    ? (0, i.jsx)("span", {
                          className: nx.Ql,
                          children: (0, i.jsx)(lC.I, { size: "xxs", color: c.A.colors.ICON_SUBTLE }),
                      })
                    : (0, i.jsx)("img", { className: nx.v2, src: r, alt: "", loading: "lazy", onError: () => a(!0) }),
        }),
    });
}
function n_(e) {
    let { artists: t, artistCount: l } = e,
        n = t.slice(0, 3),
        s = (l ?? t.length) - n.length;
    return (0, i.jsx)("div", {
        className: nx.Rh,
        "aria-hidden": !0,
        children:
            n.length > 0 &&
            (0, i.jsxs)("div", {
                className: nx.W$,
                children: [
                    n.map((e, t) =>
                        (0, i.jsx)(
                            nj,
                            { artist: e, notched: s > 0 || t !== n.length - 1 },
                            `${e.artist_external_id}-${e.artist_image_hash}`,
                        ),
                    ),
                    s > 0 &&
                        (0, i.jsx)("span", {
                            className: nx.sG,
                            children: (0, i.jsx)(ez.Ay, {
                                mask: ez.Ay.Masks.SQUIRCLE,
                                width: 24,
                                height: 24,
                                children: (0, i.jsx)("div", {
                                    className: nx.ag,
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
var nv = l(897130);
function nb(e) {
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
            [K.default, nu.A],
            () => f.every((e) => null != K.default.getUser(e) || nu.A.isMemberRequestSettled(t, e)),
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
        I = lA({ guildId: t, widgetId: l, data: a }),
        E = s.useCallback(() => I("listener_row"), [I]);
    lI({ guildId: t, widgetId: l, data: a, length: c.length, isAtEnd: A, disabled: !h && !ld(a) });
    let N = null != d,
        C = N ? null : b,
        S = null != C;
    return ld(a)
        ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(na, {}), d] })
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
                                  nf,
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
                              null != o &&
                              null == x &&
                              (0, i.jsx)(nf, {
                                  guildId: t,
                                  userId: o,
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
                                  children: (0, i.jsx)(nf, {
                                      guildId: t,
                                      userId: o,
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
var nA = l(717683);
function nI(e) {
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
    nN = l(362704);
function nC(e) {
    let { song: t, isSelected: l, onSelect: n, itemProps: a, cardRef: r, onForwardClick: d } = e,
        c = null != t.cover_art_hash ? lD.RQ.IMAGE(t.cover_art_hash) : null,
        u = s.useMemo(
            () => ({
                kind: "song",
                shareUrl: lD.RQ.WEB_OPEN(lD.M0.TRACK, t.track_external_id),
                title: t.track_title ?? t.track_external_id,
                subtitle: t.artist_name,
                imageUrl: c,
            }),
            [t.track_external_id, t.track_title, t.artist_name, c],
        );
    return (0, i.jsxs)("div", {
        className: lw.Nr,
        ref: r,
        children: [
            (0, i.jsxs)("button", {
                ...a,
                type: "button",
                className: j()(lw.MT, { [lw.tY]: l }),
                "aria-pressed": l,
                onClick: () => n(t.track_external_id),
                children: [
                    (0, i.jsx)(ly.R, {
                        src: c,
                        isCircular: !1,
                        FallbackIcon: nE.u,
                        children:
                            l &&
                            (0, i.jsx)("span", {
                                className: j()(lw.Lw, lw.Kp),
                                "aria-hidden": !0,
                                children: (0, i.jsx)(nN.Y, { size: "md", color: "currentColor" }),
                            }),
                    }),
                    null != t.track_title &&
                        (0, i.jsxs)("span", {
                            className: lw.Qq,
                            children: [
                                (0, i.jsx)(b.E, {
                                    className: lw.DD,
                                    tag: "span",
                                    variant: "text-sm/semibold",
                                    color: "text-default",
                                    lineClamp: 1,
                                    children: t.track_title,
                                }),
                                null != t.artist_name &&
                                    (0, i.jsx)(b.E, {
                                        className: lw.VA,
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
            (0, i.jsx)(lR, { target: u, tabIndex: a.tabIndex, onClick: d }),
        ],
    });
}
function nS(e) {
    return e.track_external_id;
}
function ny(e) {
    let t,
        { guildId: l, widgetId: n, isCompact: a, data: r } = e,
        d = lv(n),
        c = lh((e) => e.byWidgetId[n]?.canShowEmbed ?? lg.canShowEmbed),
        [u, o] = lE(r.ranked_songs.length),
        m = lA({ guildId: l, widgetId: n, data: r });
    lI({ guildId: l, widgetId: n, data: r, length: r.ranked_songs.length, isAtEnd: u });
    let x = s.useCallback(
            (e) => {
                let t;
                (m("song"),
                    (t = lh.getState().byWidgetId[n]?.selectedTrackId ?? null),
                    lp(n, { selectedTrackId: t === e ? null : e }));
            },
            [n, m],
        ),
        f = s.useCallback(() => m("forward"), [m]),
        g = s.useCallback(
            (e, t, l) =>
                (0, i.jsx)(nC, {
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
        p = lH(r);
    return (0, i.jsxs)("div", {
        className: lJ.U,
        children: [
            (0, i.jsx)(lX, {
                label: lo(ls.TOP_SONGS),
                items: r.ranked_songs,
                isCompact: a,
                getItemKey: nS,
                renderItem: g,
                onScrollEndChange: o,
            }),
            null != h
                ? (0, i.jsx)(lV, { guildId: l, isCompact: a, canShowEmbed: c, song: h })
                : (0, i.jsx)(l$, {
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
                                    trend: lW(p),
                                    countHook: lO,
                                }),
                      trend: p,
                  }),
        ],
    });
}
var nk = l(691885),
    nT = l(109765);
function nw(e) {
    let { widgetId: t, onSelect: l } = e,
        n = lj(t),
        a = s.useMemo(() => la.map((e) => ({ id: e, label: lo(e), value: e })), []);
    return (0, i.jsx)("div", {
        className: nT.L,
        children: (0, i.jsx)(nk.l, {
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
var nR = l(432017),
    nD = l(871107);
function nL(e) {
    let { title: t } = e;
    return (0, i.jsxs)("div", {
        className: nD.$,
        children: [
            (0, i.jsx)("span", {
                className: nD.K,
                children: (0, i.jsx)(nR.T, { size: "xs", color: c.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
            }),
            (0, i.jsx)(h.q, { size: "md", children: t }),
        ],
    });
}
var nU = l(77915),
    nM = l(756936);
function nG(e) {
    return e.default_title ?? E.intl.string(Z.default["5xxUI2"]);
}
var nP = l(890497),
    nO = l(734057),
    nB = l(317525),
    nW = l(576705),
    nz = l(935208),
    nH = l(44167);
l(321073);
var nF = l(485845),
    nK = l(136722),
    nq = l(435183),
    nY = l(155718),
    n$ = l(795816),
    nV = l(933958),
    nQ = l(627363),
    nZ = l(712440),
    nX = l(733110),
    nJ = l(488926),
    n0 = l(818023);
async function n1(e) {
    null == es.A.getApplication(n0.NW) && (await (0, nQ.TA)(n0.NW));
    let t = nV.Ay.getEmbeddedActivitiesForChannel(e).every((e) => e.applicationId !== n0.NW);
    return await (0, n$.su)({ channelId: e, applicationId: n0.NW, isStart: t, renderInFramePool: !0 });
}
async function n2(e) {
    let { channel: t, selectedRoleIds: l } = e,
        n = [];
    if (l.length > 0)
        for (let e of (n.push({ id: t.guild_id, type: nY.r2.ROLE, allow: nJ.x3, deny: tl.xBc.USE_EMBEDDED_ACTIVITIES }),
        l))
            n.push({ id: e, type: nY.r2.ROLE, allow: tl.xBc.USE_EMBEDDED_ACTIVITIES, deny: nJ.x3 });
    let i = await (0, nq.RT)(t.id, { permissionOverwrites: n });
    if (!i.ok) throw i;
}
let n3 = [];
var n6 = l(344351),
    n4 = l(256693),
    n8 = l(343030),
    n5 = l(317608),
    n9 = l(953538);
let n7 = {
    [d.a.IMAGE_TEXT]: {
        View: function (e) {
            let { widget: t, guildSpaceMode: l, guildId: n } = e,
                { text: s, image_hash: a } = t.config,
                r = "edit" === l ? t.config.image : void 0,
                d = void 0 !== r ? r : null != a ? tU(n, t.id, a) : null;
            return (0, i.jsxs)("div", {
                className: tG.kL,
                children: [
                    null != d && (0, i.jsx)("img", { className: tG.Sl, src: d, alt: "" }),
                    null != s &&
                        (0, i.jsx)(b.E, {
                            variant: "text-md/normal",
                            color: "text-subtle",
                            className: tG.Qq,
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
                j = (0, R.bG)([tx.A], () => tx.A.getGuildId()),
                _ = void 0 !== f ? f : null != a.image_hash && null != j ? tU(j, t.id, a.image_hash) : null;
            return (0, i.jsxs)(A.B, {
                gap: 16,
                children: [
                    (0, i.jsx)(ty.k, {
                        label: E.intl.string(E.t.gnwWrx),
                        value: r,
                        onChange: function (e) {
                            (p(null), c(e));
                        },
                        maxLength: 100,
                        showCharacterCount: !0,
                    }),
                    (0, i.jsx)(tC.D, {
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
                                        (0, i.jsx)(tw.A, {
                                            variant: "secondary",
                                            text: E.intl.string(E.t["MsUY/S"]),
                                            onChange: function (e) {
                                                (p(null), g(e));
                                            },
                                            maxFileSizeBytes: 0xa00000,
                                            onFileSizeError: () => (0, tT.A)(0xa00000),
                                        }),
                                        null != _ &&
                                            (0, i.jsx)(m.m, {
                                                text: E.intl.string(E.t.N86XcP),
                                                ariaHidden: !0,
                                                children: (0, i.jsx)(x.K, {
                                                    variant: "critical-secondary",
                                                    icon: tk.TrashIcon,
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
                    (0, i.jsx)(tS.f, {
                        label: E.intl.string(E.t.COGMNC),
                        value: u,
                        onChange: function (e) {
                            (p(null), o(e));
                        },
                        rows: 3,
                        autosize: !0,
                        maxLength: 500,
                        showCharacterCount: !0,
                    }),
                    null != h && (0, i.jsx)(tu.w, { type: "critical", message: h, role: "alert" }),
                    (0, i.jsxs)(to.e, {
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(W.$, { variant: "secondary", text: E.intl.string(E.t["ETE/oC"]), onClick: n }),
                            (0, i.jsx)(W.$, {
                                variant: "primary",
                                text: E.intl.string(E.t["R3BPH+"]),
                                onClick: function () {
                                    let e;
                                    if (
                                        ((e = void 0 !== f ? null !== f : null != a.image_hash),
                                        0 === u.length && !e && (p(E.intl.string(Z.default.zleX9q)), 1))
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
                d = eQ(a, n?.status === "success" ? n.data : void 0),
                c = tI({ guildId: a, data: d, expanded: !1, column: l.position.column, enabled: "view" === r }),
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
                              title: E.intl.string(Z.default.wqHke4),
                              subtitle: E.intl.string(Z.default.n1sscC),
                          })
                        : n?.status === "error"
                          ? (0, i.jsx)(S, {})
                          : null != d
                            ? (0, i.jsx)(ti, { guildId: a, data: d, column: l.position.column, disabled: "view" !== r })
                            : (0, i.jsx)(C, {})),
                (0, i.jsx)("div", { ref: o, children: t })
            );
        },
        Edit: function (e) {
            let { cancel: t } = e,
                l = (0, R.bG)([tx.A], () => tx.A.getGuildId()),
                n = (0, R.bG)([tm.A], () => tm.A.getGuild(l), [l]),
                a = (0, tg.mN)(n),
                r = null != n && null != n.systemChannelId,
                d = null != n ? n.systemChannelFlags : null,
                [c, u] = s.useState(!1),
                [o, m] = s.useState(null),
                [x, f] = s.useState(!1),
                g = s.useCallback(async () => {
                    if (null == n || null == l || null == o || null == d) return void t();
                    (f(!1), u(!0));
                    try {
                        (await td.Bo.patch({
                            url: tl.Rsh.GUILD(l),
                            body: { system_channel_flags: (0, tr.lA)(d, th, !o) },
                            rejectWithError: !0,
                        }),
                            (0, tf.q9)(l, tf.PY.LEADERBOARD_SYSTEM_MESSAGES, o),
                            t());
                    } catch (e) {
                        f(!0);
                    } finally {
                        u(!1);
                    }
                }, [n, l, o, d, t]),
                h = null == n || !r || null == d || c || !a;
            return (0, i.jsxs)(A.B, {
                gap: 16,
                children: [
                    (0, i.jsx)(tc.d, {
                        label: E.intl.string(Z.default.v0iLIA),
                        description: E.intl.string(Z.default["88c7ds"]),
                        checked: o ?? !(0, tr.Lt)(d ?? 0, th),
                        onChange: m,
                        disabled: h,
                    }),
                    !r &&
                        (0, i.jsx)(tu.w, {
                            type: "warning",
                            message: E.intl.string(Z.default["1hsDpi"]),
                            role: "none",
                        }),
                    x &&
                        (0, i.jsx)(tu.w, {
                            type: "critical",
                            message: E.intl.string(Z.default["4FcF2j"]),
                            role: "alert",
                        }),
                    (0, i.jsxs)(to.e, {
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(W.$, {
                                variant: "secondary",
                                text: E.intl.string(E.t["ETE/oC"]),
                                onClick: t,
                                disabled: c,
                            }),
                            (0, i.jsx)(W.$, {
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
                s = eQ(n, l?.status === "success" ? l.data : void 0);
            return null == s
                ? (0, i.jsx)(h.q, { children: t.default_title ?? "" })
                : (0, i.jsx)(h.q, { children: ej(s) });
        },
        TitleIcon: function () {
            return (0, i.jsx)(o.TrophyIcon, { size: "xs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        },
        HeaderAccessory: function (e) {
            let { hydration: t, guildId: l } = e,
                n = eQ(l, t?.status === "success" ? t.data : void 0);
            return null == n || ep(n) ? null : (0, i.jsx)(tb, { data: n });
        },
        HeaderActions: function (e) {
            let { hydration: t, guildId: l, column: n } = e,
                s = t?.status === "success" ? t.data : void 0,
                a = eQ(l, s);
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
                                  (g.default.track(tl.HAw.LEADERBOARD_CLICK, {
                                      location: "expand",
                                      guild_id: l,
                                      leaderboard_state: e_(a),
                                      leaderboard_view: k({ expanded: !1, column: n }),
                                      metric: ev(a.stat),
                                  }),
                                  (function (e) {
                                      let { guildId: t, data: l } = e,
                                          n = (e) => (0, i.jsx)(tN, { guildId: t, data: l, modalProps: e });
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
                c = tA({
                    onHoverEnd: s.useCallback(
                        (e) => {
                            let { duration: t, flush: n } = e;
                            null != d &&
                                g.default.track(
                                    tl.HAw.POPULAR_GAMES_HOVER,
                                    {
                                        guild_id: a,
                                        duration: t,
                                        popular_games_state: t2(d),
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
                              graphic: (0, i.jsx)(tP, { alt: "", ariaHidden: !0, width: 200 }),
                              title: E.intl.string(Z.default.v59XPT),
                              subtitle: E.intl.string(Z.default.Bayri1),
                          })
                        : n?.status === "error"
                          ? (0, i.jsx)(S, {})
                          : null == n || null == d || "idle" === n.status || "loading" === n.status
                            ? (0, i.jsx)(C, {})
                            : (0, i.jsx)(t7, {
                                  guildId: a,
                                  data: d,
                                  title: le(l),
                                  column: l.position.column,
                                  disabled: "view" !== r,
                              })),
                (0, i.jsx)("div", { ref: u, children: t })
            );
        },
        Title: function (e) {
            let { widget: t } = e;
            return (0, i.jsx)(h.q, { children: le(t) });
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
                { guildId: d, widget: c, hydration: u, guildSpaceMode: o } = e,
                m =
                    ((t = c.id),
                    (n = s.useRef(null)),
                    (a = s.useCallback(
                        (e) => {
                            let { width: l } = e.contentRect;
                            lp(t, { isCompact: l < 480, canShowEmbed: l >= 560 });
                        },
                        [t],
                    )),
                    (0, tO.g)(n, a, [t], { fireOnMount: !0 }),
                    s.useEffect(
                        () => () => {
                            lh.setState((e) => {
                                if (null == e.byWidgetId[t]) return e;
                                let l = { ...e.byWidgetId };
                                return (delete l[t], { byWidgetId: l });
                            });
                        },
                        [t],
                    ),
                    n),
                x = l_(c.id),
                f = lj(c.id),
                h = lv(c.id),
                { isContributing: p, isSpotifyConnected: j, hasFetchedConsents: _ } = (0, nU.MX)(d),
                v = u?.status === "success" ? u.data : void 0,
                { data: b, shouldHideCurrentUser: A } = (0, nU.qL)(d, v),
                I = "edit" === o,
                E = null != v && lr(v),
                N = !x && !I && !E,
                y = lA({ guildId: d, widgetId: c.id, data: b }),
                k = (function (e) {
                    let { guildId: t, widgetId: l, data: n, enabled: i } = e,
                        a = lj(l),
                        r = l_(l);
                    return tA({
                        onHoverEnd: s.useCallback(
                            (e) => {
                                let { duration: l, flush: i } = e;
                                null != n &&
                                    g.default.track(
                                        tl.HAw.POPULAR_MUSIC_HOVER,
                                        {
                                            guild_id: t,
                                            duration: l,
                                            popular_music_state: lc(n, a),
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
                })({ guildId: d, widgetId: c.id, data: b, enabled: "view" === o }),
                T = s.useCallback(
                    (e) => {
                        k(e?.closest("[data-guild-space-widget]") ?? null);
                    },
                    [k],
                ),
                w = (0, lt.A)(m, T);
            lI({ guildId: d, widgetId: c.id, data: b, length: 0, isAtEnd: !1, disabled: I || !E });
            let R =
                    "view" === o && _ && !p
                        ? (0, i.jsx)(l9, {
                              guildId: d,
                              widgetName: nG(c),
                              isCompact: x,
                              isSpotifyConnected: j,
                              onClick: () => y("contribution_upsell"),
                          })
                        : null,
                D =
                    I || E || u?.status !== "success" || f === ls.TOP_LISTENERS
                        ? null
                        : ((l = u.data),
                          null ==
                          (r =
                              l.ranked_songs.find((e) => e.track_external_id === h && null != e.cover_art_hash)
                                  ?.cover_art_hash ??
                              l.ranked_songs.find((e) => null != e.cover_art_hash)?.cover_art_hash)
                              ? null
                              : lD.RQ.IMAGE(r));
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
                            id: lx(c.id),
                            className: nM.nd,
                            role: N ? "tabpanel" : "group",
                            tabIndex: 0,
                            "aria-label": N ? void 0 : lo(f),
                            "aria-labelledby": N ? lm(c.id, f) : void 0,
                            children: (function () {
                                if (I && u?.status !== "success") return (0, i.jsx)(nI, { isCompact: x });
                                if (null == u || "idle" === u.status || "loading" === u.status)
                                    return (0, i.jsx)(C, {});
                                if ("error" === u.status) return (0, i.jsx)(S, {});
                                if (E) return (0, i.jsx)(ns, { onSettingsClick: () => y("empty_state_settings") });
                                if (null == b) return (0, i.jsx)(C, {});
                                switch (f) {
                                    case ls.TOP_SONGS:
                                        return (0, i.jsx)(ny, { guildId: d, widgetId: c.id, isCompact: x, data: b });
                                    case ls.TOP_ARTISTS:
                                        return (0, i.jsx)(l1, { guildId: d, widgetId: c.id, isCompact: x, data: b });
                                    case ls.TOP_LISTENERS:
                                        return (0, i.jsx)(nb, {
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
                    f !== ls.TOP_LISTENERS && R,
                    (0, i.jsx)(nc, { isCompact: x }),
                ],
            });
        },
        Title: function (e) {
            let { widget: t, hydration: l, guildSpaceMode: n } = e,
                s = nG(t),
                a = l?.status === "success" && lr(l.data);
            return "edit" === n || a ? (0, i.jsx)(h.q, { size: "md", children: s }) : (0, i.jsx)(nL, { title: s });
        },
        ViewHeaderTrailing: function (e) {
            let { widget: t, hydration: l, title: n, guildId: s } = e,
                a = l_(t.id),
                r = lj(t.id),
                { data: d } = (0, nU.qL)(s, l?.status === "success" ? l.data : void 0);
            function c(e, l) {
                if (e !== r) {
                    var n;
                    (lb({ guildId: s, data: d, view: e, isCompact: a, location: l }),
                        (n = t.id),
                        (lh.getState().byWidgetId[n] ?? lg).view !== e && lp(n, { view: e, selectedTrackId: null }));
                }
            }
            return l?.status === "success" && lr(l.data)
                ? null
                : a
                  ? (0, i.jsx)(nw, { widgetId: t.id, onSelect: (e) => c(e, "view_select") })
                  : (0, i.jsx)(li, {
                        label: n,
                        tabs: la.map((e) => ({ id: e, label: lo(e) })),
                        selectedId: r,
                        panelId: lx(t.id),
                        getTabId: (e) => lm(t.id, e),
                        onSelect: (e) => c(e, "view_tab"),
                    });
        },
    },
    [d.a.WHITEBOARD]: {
        View: function (e) {
            let t,
                l,
                n = (0, nH.n)(),
                a = (0, R.bG)(
                    [nO.A, nW.A],
                    () => {
                        let e = null != n ? nO.A.getChannel(n) : void 0;
                        return null != e && nW.A.can(tl.xBc.USE_EMBEDDED_ACTIVITIES, e);
                    },
                    [n],
                ),
                d = (0, R.bG)(
                    [nV.Ay],
                    () => {
                        let e = nV.Ay.getCurrentEmbeddedActivity();
                        return null == e ||
                            e.applicationId !== n0.NW ||
                            e.location.kind !== n6.T.GUILD_CHANNEL ||
                            e.location.channel_id !== n
                            ? null
                            : e;
                    },
                    [n],
                ),
                c = (0, R.bG)([nV.Ay], () => nV.Ay.isLaunchingActivity(), []),
                { authResolved: u, isAuthorized: o } =
                    ((t = (0, R.bG)(
                        [nX.default],
                        () => nX.default.getFetchStateForApplication(n0.NW) === nX.FetchState.FETCHED,
                        [],
                    )),
                    (l = (0, R.bG)(
                        [nX.default, es.A],
                        () => {
                            let e = nX.default.getNewestTokenForApplication(n0.NW);
                            if (null == e) return !1;
                            let t = es.A.getApplication(n0.NW),
                                l = t?.integrationTypesConfig?.[nF.b.USER_INSTALL]?.oauth2InstallParams?.scopes;
                            if (null == l) return !0;
                            let n = new Set(e.scopes);
                            return l.every((e) => n.has(e));
                        },
                        [],
                    )),
                    s.useEffect(() => {
                        (nX.default.getFetchStateForApplication(n0.NW) === nX.FetchState.NOT_FETCHED &&
                            nZ.A.fetch([n0.NW]),
                            null == es.A.getApplication(n0.NW) && (0, nQ.TA)(n0.NW));
                    }, []),
                    { authResolved: t, isAuthorized: l }),
                m = s.useRef(!1);
            s.useEffect(() => {
                null == d && null != n && a && u && o && !m.current && ((m.current = !0), n1(n));
            }, [a, n, d, u, o]);
            let x = s.useCallback(() => {
                    null != n && ((m.current = !0), n1(n));
                }, [n]),
                f = null != n && u && !o;
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
                                (0, i.jsx)(n5.A, {
                                    frameId: (0, n4.Ri)(d),
                                    level: n8.A.WithinAppContent,
                                    className: n9.t$,
                                }),
                            null == d &&
                                f &&
                                (0, i.jsx)("div", {
                                    className: n9.P5,
                                    children: (0, i.jsx)(W.$, {
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
                l = (0, R.bG)([tx.A], () => tx.A.getGuildId()),
                n = nz.default.castGuildIdAsEveryoneGuildRoleId(l),
                a = (0, nH.n)(),
                r = (0, R.bG)([nO.A], () => (null != a ? nO.A.getChannel(a) : void 0), [a]),
                d = (0, R.bG)([nW.A], () => null != r && nW.A.can(tl.xBc.MANAGE_ROLES, r), [r]),
                c = (0, R.bG)([nB.A], () => (null == l ? n3 : nB.A.getSortedRoles(l).filter((e) => e.id !== n)), [
                    l,
                    n,
                ]),
                u = s.useMemo(() => {
                    let e;
                    return null != r
                        ? null != (e = r.permissionOverwrites[r.guild_id]) &&
                          nK.zy(e.deny, tl.xBc.USE_EMBEDDED_ACTIVITIES)
                            ? c
                                  .filter((e) => {
                                      let t = r.permissionOverwrites[e.id];
                                      return null != t && nK.zy(t.allow, tl.xBc.USE_EMBEDDED_ACTIVITIES);
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
            async function _() {
                if (null != r) {
                    (h(!1), f(!0));
                    try {
                        (await n2({ channel: r, selectedRoleIds: p }), t());
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
                          (0, i.jsx)(nP.Z, {
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
                              (0, i.jsx)(tu.w, {
                                  type: "warning",
                                  message: E.intl.string(Z.default.UPLtlA),
                                  role: "none",
                              }),
                          g &&
                              (0, i.jsx)(tu.w, {
                                  type: "critical",
                                  message: E.intl.string(Z.default.xyCJYs),
                                  role: "alert",
                              }),
                          (0, i.jsxs)(to.e, {
                              fullWidth: !0,
                              children: [
                                  (0, i.jsx)(W.$, {
                                      variant: "secondary",
                                      text: E.intl.string(E.t["ETE/oC"]),
                                      onClick: t,
                                      disabled: x,
                                  }),
                                  (0, i.jsx)(W.$, {
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
