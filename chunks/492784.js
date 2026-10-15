l.d(t, { m: () => nP });
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
    c = l(661531),
    o = l(369606),
    u = l(866665),
    m = l(408278),
    x = l(26430),
    h = l(174459),
    f = l(562073),
    g = l(503698),
    j = l.n(g),
    p = l(289873),
    v = l(738188),
    _ = l(834730),
    A = l(331322),
    E = l(297264),
    N = l(105292),
    b = l(448492);
function I() {
    return (0, i.jsx)("div", {
        className: b.w,
        children: (0, i.jsx)(p.y, { type: p.y.Type.SPINNING_CIRCLE, "aria-label": N.intl.string(N.t.ZTNur7) }),
    });
}
function S() {
    return (0, i.jsxs)("div", {
        className: b.w,
        role: "alert",
        children: [
            (0, i.jsx)(v.WarningIcon, { size: "md", color: c.A.colors.ICON_MUTED, "aria-hidden": !0 }),
            (0, i.jsx)(_.E, { variant: "text-sm/normal", color: "text-muted", children: N.intl.string(N.t.F8FvUy) }),
        ],
    });
}
function C(e) {
    let { className: t, title: l, body: n, action: s } = e;
    return (0, i.jsxs)(A.B, {
        className: j()(b.p, t),
        align: "center",
        justify: "center",
        gap: 16,
        padding: { top: 24, right: 16, bottom: 24, left: 16 },
        children: [
            (0, i.jsxs)(A.B, {
                align: "center",
                gap: 6,
                children: [
                    (0, i.jsx)(E.D, { variant: "heading-md/semibold", color: "text-default", children: l }),
                    (0, i.jsx)(_.E, { variant: "text-sm/medium", color: "text-subtle", children: n }),
                ],
            }),
            s,
        ],
    });
}
var y = l(17928),
    T = l(364522),
    k = l(939249),
    R = l(663417),
    D = l(140735),
    w = l(97808),
    L = l(778712),
    M = l(463930),
    G = l(478016),
    U = l(821609),
    P = l(80682),
    O = l(827827),
    B = l(461213),
    W = l(287809),
    z = l(58703),
    F = l(848966);
function H(e) {
    let { position: t } = e;
    return (0, i.jsx)("div", { className: "top" === t ? F.oT : F.yf });
}
function K(e) {
    let { position: t, children: l } = e;
    return (0, i.jsx)("div", { className: "top" === t ? F.sU : F._u, children: l });
}
var q = l(606072),
    Y = l(775602);
function $() {
    let [e, t] = s.useState(null),
        [l, n] = s.useState(null),
        [i, a] = s.useState("unknown"),
        r = (0, y.bG)([Y.Ay], () => Y.Ay.useReducedMotion);
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
var Q = l(967144),
    V = l(696451),
    Z = l(562153),
    X = l(61567);
function J(e, t) {
    let { showYouSuffix: l = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        n = (0, y.bG)([W.default], () => W.default.getUser(t), [t]),
        i = (0, y.bG)([V.Ay], () => V.Ay.getMember(e, t), [e, t]),
        s = (0, Q.gn)(e, t, i?.colorStrings ?? null),
        a = Z.Ay.useName(e, void 0, n);
    return {
        user: n,
        member: i,
        roleColorStrings: s,
        name: a,
        displayName: l ? N.intl.formatToPlainString(X.default.subXXA, { name: a }) : a,
    };
}
var ee = l(587895),
    et = l(429913),
    el = l(311043),
    en = l(569926),
    ei = l(403362);
function es(e, t) {
    return { id: e, name: N.intl.string(N.t.GIWFlF), iconUrl: void 0, coverUrl: void 0, isLoading: t };
}
function ea(e) {
    let t = (0, et.A)(e),
        l = (0, y.yK)([ee.A], () => e.map((e) => ee.A.didFetchingApplicationFail(e))),
        n = s.useMemo(() => t.map((e) => e?.getCanonicalGameId() ?? void 0), [t]),
        i = s.useMemo(() => n.filter(ei.Vq), [n]);
    (0, en.x)(i);
    let a = (0, y.yK)([el.A], () => n.map((e) => (null != e ? el.A.getGame(e) : void 0))),
        r = (0, y.yK)([el.A], () => n.map((e) => null != e && (el.A.didFetchingFail(e) || el.A.hasNoData(e))));
    return s.useMemo(() => {
        let i = new Map();
        return (
            e.forEach((e, s) => {
                let d = t[s],
                    c = a[s],
                    o = null == d && !l[s],
                    u = null == c && null != n[s] && !r[s];
                null == d || u
                    ? i.set(e, es(e, o || u))
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
function er(e, t) {
    return e.get(t) ?? es(t, !1);
}
function ed(e, t) {
    return t.map((t) => er(e, t));
}
var ec = l(927813),
    eo = l(251812),
    eu = l(518782);
function em(e) {
    return e.entries.length < 3;
}
function ex(e) {
    return (0, eo.K)(em(e) ? void 0 : e.stat).name;
}
function eh(e) {
    let t;
    return em(e)
        ? "empty_state"
        : null != (t = e.computed_at) &&
            new Date(t).getTime() - e.week_start_ts * ec.A.Millis.SECOND >= ec.A.Millis.WEEK
          ? "podium"
          : "in_progress";
}
function ef(e) {
    let { expanded: t, column: l } = e;
    return t ? "expanded" : 1 === l ? "mini" : "regular";
}
function eg(e) {
    switch (e) {
        case eu.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            return "hours_played";
        case eu.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return "days_played";
        case eu.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return "unique_games_played";
        default:
            return null;
    }
}
l(754674);
var ej = l(192308);
function ep(e, t, n) {
    (0, ej.openModalLazy)(
        async () => {
            let { default: s } = await Promise.all([
                l.e("120239"),
                l.e("955410"),
                l.e("132502"),
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
var ev = l(823353);
function e_(e) {
    let { guildId: t, onActivitySharingClick: l } = e,
        {
            isSharingActivity: n,
            isSharingActivityInGuild: s,
            hasFetchedConsents: a,
            hasPersonalizationConsent: r,
            requirement: d,
        } = (0, q.T4)(t),
        c = !n || !s || (a && !r),
        o = c ? X.default.wyIs4o : X.default["81PK67"],
        u = c ? X.default.A4ZMJL : null;
    return (0, i.jsx)(C, {
        className: ev.w,
        title: N.intl.string(X.default.ULK65a),
        body: N.intl.format(o, { memberCount: 3 }),
        action:
            null != u && null != d
                ? (0, i.jsx)(U.$, {
                      variant: "secondary",
                      size: "sm",
                      text: N.intl.string(u),
                      onClick: () => {
                          (l(), ep(t, d, N.intl.string(X.default.PJn0ih)));
                      },
                  })
                : null,
    });
}
let eA =
        "https://cdn.discordapp.com/assets/content/f86a84ce3eb0d44fa03c308be330f508fbcdec9528cd7969c8f7530cdd058898.png",
    eE = `${eA} 1x, https://cdn.discordapp.com/assets/content/61de4c8a747fbce4c3772d27eeffbea00e3f3fbefd2a972d9d25b96d7116f042.png 2x, https://cdn.discordapp.com/assets/content/7e79963a2b009fabcc285dc56b301eb819e63b604739b0a48c8e0044a527a800.png 3x`;
function eN(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, width: d, height: c, className: o, style: u } = e,
        m = s.useMemo(
            () => (0, a.H)({ width: d, height: c, intrinsicWidth: 24, intrinsicHeight: 24, style: u }),
            [d, c, u],
        );
    return (0, i.jsx)("img", {
        style: m,
        src: eA,
        srcSet: eE,
        className: (0, a.Z)(o),
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
let eb =
        "https://cdn.discordapp.com/assets/content/e87b249cc95509b720aae7d01a178fa3b37853797f9ad0b87c93c78934854c1f.png",
    eI = `${eb} 1x, https://cdn.discordapp.com/assets/content/4b18fe6b4c48532112a9ea66da62f20f7690a0de57378da9d92f091eba06f2f5.png 2x, https://cdn.discordapp.com/assets/content/b1f5d190ed2b05b6cefd2d44fc875f383134d87d928e3422de92e5e19378a3ae.png 3x`;
function eS(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, width: d, height: c, className: o, style: u } = e,
        m = s.useMemo(
            () => (0, a.H)({ width: d, height: c, intrinsicWidth: 24, intrinsicHeight: 24, style: u }),
            [d, c, u],
        );
    return (0, i.jsx)("img", {
        style: m,
        src: eb,
        srcSet: eI,
        className: (0, a.Z)(o),
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
var eC = l(846058),
    ey = l(342296);
function eT(e) {
    let t = Math.floor(Math.max(e, 0) / ec.A.Seconds.MINUTE),
        l = Math.floor(t / ec.A.Minutes.HOUR),
        n = t % ec.A.Minutes.HOUR;
    return 0 === l
        ? N.intl.formatToPlainString(X.default.DdzvGL, { minutes: n })
        : N.intl.formatToPlainString(X.default["6Y8H0A"], { hours: l, minutes: n });
}
function ek(e, t) {
    switch (t) {
        case eu.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return {
                primary: N.intl.formatToPlainString(N.t["k2UNz+"], { days: e.value }),
                secondary: eT(e.time_played_seconds),
            };
        case eu.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return {
                primary: N.intl.formatToPlainString(X.default.rgpc8E, { count: e.value }),
                secondary: eT(e.time_played_seconds),
            };
        case eu.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            let l, n, i;
            return {
                primary:
                    ((n = Math.floor((l = Math.floor(Math.max(e.value, 0) / ec.A.Millis.MINUTE)) / ec.A.Minutes.HOUR)),
                    (i = l % ec.A.Minutes.HOUR),
                    0 === n
                        ? N.intl.formatToPlainString(X.default.bgQf2H, { minutes: i })
                        : 0 === i
                          ? N.intl.formatToPlainString(X.default["D/HToK"], { hours: n })
                          : N.intl.formatToPlainString(X.default.fvtrHn, { hours: n, minutes: i })),
            };
        default:
            return { primary: "\u2014" };
    }
}
var eR = l(793169),
    eD = l(428678),
    ew = l(952270),
    eL = l(81466),
    eM = l(406810),
    eG = l(687966),
    eU = l(683063),
    eP = l(573435),
    eO = l(402860),
    eB = l(994500),
    eW = l(396583),
    ez = l(280450);
function eF(e, t) {
    let l = t.user_id,
        n = (0, y.bG)([ez.default], () => ez.default.getId() === l, [l]);
    return J(e, l, { showYouSuffix: n });
}
function eH(e, t) {
    let l = (0, y.bG)([W.default], () => W.default.getCurrentUser()?.id),
        {
            isSharingActivity: n,
            isSharingActivityInGuild: i,
            hasPersonalizationConsent: a,
            hasFetchedConsents: r,
        } = (0, q.T4)(e),
        d = !n || !i || !a;
    return s.useMemo(() => {
        if (!r) return;
        if (null == t || !d || null == l) return t;
        let e = t.entries.filter((e) => e.user_id !== l);
        return e.length === t.entries.length ? t : { ...t, entries: e.map((e, t) => ({ ...e, rank: t + 1 })) };
    }, [t, d, l, r]);
}
var eK = l(518477),
    eq = l(870087);
function eY(e) {
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
        x = eF(t, l),
        h = l.application_ids[0],
        f = null != h ? er(a, h) : void 0,
        g = l.user_id,
        p = s.useCallback(() => {
            (u?.(),
                (0, eO.openUserProfileModal)({
                    userId: g,
                    guildId: t,
                    tabSection: eK.RP.ACTIVITY,
                    scrollTarget: eK.bk.RECENT_ACTIVITY,
                }));
        }, [u, g, t]);
    return (0, i.jsxs)("div", {
        ref: o,
        "aria-hidden": c,
        inert: c,
        className: j()(eq.nM, { [eq.Bh]: r && !c, [eq.lR]: d }),
        children: [
            (0, i.jsx)(e$, { guildId: t, entry: l, identity: x, lastPlayedGame: f, onClick: u }),
            (0, i.jsx)(eZ, { entry: l, stat: n, width: m, onClick: p }),
            (0, i.jsx)(e1, {
                name: x.name,
                applicationIds: l.application_ids,
                applicationCount: l.application_count,
                games: a,
                onClick: p,
            }),
        ],
    });
}
function e$(e) {
    let { guildId: t, entry: l, identity: n, lastPlayedGame: a, onClick: r } = e,
        d = s.useRef(null),
        o = (0, y.bG)(
            [eB.A],
            () => (eB.A.isBlocked(l.user_id) ? "blocked" : eB.A.isIgnored(l.user_id) ? "ignored" : null),
            [l.user_id],
        ),
        u = null != o,
        m = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(eQ, { rank: l.rank }),
                u
                    ? (0, i.jsx)("span", {
                          className: eq.gt,
                          children:
                              "blocked" === o
                                  ? (0, i.jsx)(eD.K, { size: "xs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 })
                                  : (0, i.jsx)(ew.EyeSlashIcon, {
                                        size: "xs",
                                        color: c.A.colors.ICON_SUBTLE,
                                        "aria-hidden": !0,
                                    }),
                      })
                    : (0, i.jsx)(w.eu, {
                          size: L._3.SIZE_32,
                          src: n.user?.getAvatarURL(t, (0, L.FT)(L._3.SIZE_32)) ?? void 0,
                          className: eq.my,
                          "aria-hidden": !0,
                      }),
                (0, i.jsxs)("div", {
                    className: eq.Dc,
                    children: [
                        (0, i.jsx)(E.D, {
                            variant: "heading-sm/semibold",
                            color: u ? "text-subtle" : "text-default",
                            lineClamp: 1,
                            children:
                                null != o
                                    ? (function (e) {
                                          switch (e) {
                                              case "blocked":
                                                  return N.intl.string(X.default.I3YOjC);
                                              case "ignored":
                                                  return N.intl.string(X.default.CfMzwe);
                                          }
                                      })(o)
                                    : (0, i.jsx)(M.g, {
                                          name: n.displayName,
                                          colorString: n.member?.colorString ?? null,
                                          colorStrings: n.roleColorStrings,
                                      }),
                        }),
                        !u &&
                            null != a &&
                            (0, i.jsx)(_.E, {
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                lineClamp: 1,
                                children: N.intl.formatToPlainString(X.default.YuNVPY, { gameName: a.name }),
                            }),
                    ],
                }),
            ],
        });
    return null == n.user
        ? (0, i.jsx)("div", { className: eq.D_, children: m })
        : (0, i.jsx)(ey.A, {
              targetElementRef: d,
              user: n.user,
              guildId: t,
              children: (e) =>
                  (0, i.jsx)(k.D, {
                      ...e,
                      innerRef: d,
                      className: j()(eq.D_, eq.FB),
                      onClick: (t) => {
                          (r?.(), e.onClick(t));
                      },
                      children: m,
                  }),
          });
}
function eQ(e) {
    let { rank: t } = e,
        l = N.intl.formatToPlainString(X.default.I4JiAQ, { rank: t });
    switch (t) {
        case 1:
            return (0, i.jsx)("div", { className: eq.Tm, children: (0, i.jsx)(eR.t, { alt: l }) });
        case 2:
            return (0, i.jsx)("div", { className: eq.Tm, children: (0, i.jsx)(eN, { alt: l }) });
        case 3:
            return (0, i.jsx)("div", { className: eq.Tm, children: (0, i.jsx)(eS, { alt: l }) });
        default:
            return (0, i.jsxs)("div", {
                className: eq.mH,
                children: [
                    (0, i.jsx)(D.A, { children: l }),
                    (0, i.jsx)(_.E, {
                        variant: "text-sm/semibold",
                        color: "text-muted",
                        "aria-hidden": !0,
                        children: t,
                    }),
                ],
            });
    }
}
function eV(e) {
    let { stat: t } = e;
    switch (t) {
        case eu.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return (0, i.jsx)(eL.CalendarIcon, { size: "xxs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case eu.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            return (0, i.jsx)(eM.ClockIcon, { size: "xxs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case eu.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return (0, i.jsx)(eG.GameControllerIcon, { size: "xxs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        default:
            return null;
    }
}
function eZ(e) {
    let { entry: t, stat: l, width: n, onClick: s } = e,
        { primary: a, secondary: r } = ek(t, l);
    return (0, i.jsxs)(k.D, {
        className: eq.TH,
        style: null != n ? { width: n } : void 0,
        "aria-label": N.intl.string(X.default.o6mBdl),
        onClick: s,
        children: [
            (0, i.jsxs)("div", {
                className: eq.bf,
                children: [
                    (0, i.jsx)(eV, { stat: l }),
                    (0, i.jsx)(_.E, { variant: "text-sm/medium", color: "text-subtle", children: a }),
                ],
            }),
            null != r && (0, i.jsx)(_.E, { variant: "text-xs/medium", color: "text-muted", children: r }),
        ],
    });
}
function eX(e) {
    let { game: t, notched: l } = e;
    return (0, i.jsx)("span", {
        className: eq.rO,
        "aria-hidden": !0,
        children: (0, i.jsx)(eP.Ay, {
            mask: l ? eP.l8[24] : eP.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null != t.iconUrl
                    ? (0, i.jsx)("img", { className: eq.Gt, src: t.iconUrl, alt: "", "aria-hidden": !0 })
                    : (0, i.jsx)("span", { className: eq.ct, "aria-hidden": !0 }),
        }),
    });
}
function eJ(e) {
    let { played: t, totalCount: l } = e,
        n = t.filter((e) => null != e.iconUrl || e.isLoading).slice(0, 2),
        s = l - n.length;
    return (0, i.jsxs)("div", {
        className: eq.Nw,
        children: [
            n.map((e, t) => (0, i.jsx)(eX, { game: e, notched: s > 0 || t !== n.length - 1 }, `${e.id}-${t}`)),
            s > 0
                ? (0, i.jsx)("span", {
                      className: eq.rO,
                      children: (0, i.jsx)(eP.Ay, {
                          mask: eP.Ay.Masks.SQUIRCLE,
                          width: 24,
                          height: 24,
                          children: (0, i.jsx)("div", {
                              className: eq.p0,
                              children: (0, i.jsx)(_.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-subtle",
                                  children: N.intl.formatToPlainString(X.default.JiMMEd, { count: s }),
                              }),
                          }),
                      }),
                  })
                : null,
        ],
    });
}
function e0(e) {
    let { played: t, totalCount: l, children: n } = e,
        s = t.filter((e) => null != e.iconUrl || e.isLoading);
    return (0, i.jsx)(eU.u, {
        body:
            0 === t.length
                ? N.intl.string(X.default["7CrlYb"])
                : 1 === t.length
                  ? N.intl.formatToPlainString(X.default.dbNpK0, { firstGame: t[0].name })
                  : 2 === t.length && 2 === l
                    ? N.intl.formatToPlainString(X.default.tqVg4M, { firstGame: t[0].name, secondGame: t[1].name })
                    : N.intl.formatToPlainString(X.default.bxcrSz, {
                          firstGame: t[0].name,
                          secondGame: t[1].name,
                          otherCount: l - 2,
                      }),
        asset: s.length > 0 ? (0, i.jsx)(eJ, { played: s, totalCount: s.length }) : void 0,
        assetSize: s.length > 1 ? 43 : 24,
        children: n,
    });
}
function e1(e) {
    let { name: t, applicationIds: l, applicationCount: n, games: s, onClick: a } = e,
        r = ed(s, l);
    return (0, i.jsx)("div", {
        className: eq.ag,
        children: (0, i.jsx)(e0, {
            played: r,
            totalCount: n,
            children: (0, i.jsx)(k.D, {
                className: j()(eq.Nw, eq.Dz),
                "aria-label": N.intl.formatToPlainString(X.default.o6mBdl, { name: t }),
                onClick: a,
                children: (0, i.jsx)(eJ, { played: r, totalCount: n }),
            }),
        }),
    });
}
var e2 = l(189043);
function e6(e) {
    let { guildId: t, entries: l, stat: n, games: s, currentUserEntry: a, currentUserPillarRef: r, onClick: d } = e,
        c = {
            1: { column: e2.HC, pillar: e2.P5 },
            2: { column: e2.th, pillar: e2.Vk },
            3: { column: e2.Ou, pillar: e2.el },
        };
    return (0, i.jsx)("div", {
        className: e2.pI,
        role: "list",
        "aria-label": N.intl.string(X.default.wKXLfQ),
        children: l.map((e, l) =>
            (0, i.jsx)(
                e3,
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
function e3(e) {
    let {
            guildId: t,
            entry: l,
            place: n,
            columnClassName: a,
            pillarClassName: r,
            stat: d,
            games: c,
            isCurrentUser: o,
            currentUserPillarRef: u,
            onClick: m,
        } = e,
        x = ed(c, l.application_ids),
        h = eF(t, l),
        { primary: f } = ek(l, d),
        g = 1 === n ? L._3.SIZE_48 : L._3.SIZE_40,
        p = s.useRef(null),
        v = 1 === n ? eC.b : 2 === n ? eN : eS,
        A = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: e2.R3,
                    children: [
                        (0, i.jsx)(w.eu, {
                            size: g,
                            src: h.user?.getAvatarURL(t, (0, L.FT)(g)) ?? void 0,
                            "aria-hidden": !0,
                        }),
                        (0, i.jsx)(v, { className: e2.dR, alt: "", ariaHidden: !0 }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: j()(e2.DX, r),
                    children: [
                        (0, i.jsx)(E.D, {
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            lineClamp: 1,
                            className: e2.IY,
                            children: (0, i.jsx)(M.g, {
                                name: h.displayName,
                                colorString: h.member?.colorString ?? null,
                                colorStrings: h.roleColorStrings,
                            }),
                        }),
                        (0, i.jsx)(e0, {
                            played: x,
                            totalCount: l.application_count,
                            children: (0, i.jsx)(_.E, {
                                variant: "text-xs/medium",
                                color: "text-default",
                                children: f,
                            }),
                        }),
                    ],
                }),
            ],
        });
    return (0, i.jsx)("div", {
        className: a,
        role: "listitem",
        ref: o ? u : void 0,
        children:
            null != h.user
                ? (0, i.jsx)(ey.A, {
                      targetElementRef: p,
                      user: h.user,
                      guildId: t,
                      children: (e) =>
                          (0, i.jsx)(k.D, {
                              ...e,
                              className: e2.fs,
                              innerRef: p,
                              onClick: (t) => {
                                  (m?.(), e.onClick(t));
                              },
                              children: A,
                          }),
                  })
                : (0, i.jsx)("div", { className: e2.fs, children: A }),
    });
}
var e8 = l(652215),
    e4 = l(219047);
function e7(e) {
    let { guildId: t, data: l, inModal: n = !1, column: a, disabled: r = !1 } = e,
        { stat: d, entries: c } = l,
        o = (0, y.bG)([W.default], () => W.default.getCurrentUser()?.id),
        u = s.useMemo(() => c.find((e) => e.user_id === o) ?? null, [c, o]),
        m = s.useMemo(() => {
            let e = c.slice(0, 20);
            return null == u || e.includes(u) ? e : [...e, u];
        }, [c, u]),
        x = s.useMemo(() => Array.from(new Set(m.map((e) => e.user_id))), [m]);
    (0, P.k6)(t, x);
    let f = eg(d),
        g = ea(s.useMemo(() => Array.from(new Set(m.flatMap((e) => e.application_ids))), [m])),
        p = em(l),
        v = eh(l),
        _ = "podium" === v,
        A = ef({ expanded: n, column: a }),
        E = [m[0], m[1], m[2]],
        { scrollerRef: b, scrollerNode: S, userRowRef: C, floatingRowPosition: R, scrollToUserRow: D } = $(),
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
        })(S),
        L = null == u && null != o,
        M = null != R,
        G = s.useMemo(() => {
            let e = null == u || m.includes(u) ? m : [...m, u];
            return e.length > 0 ? e : m;
        }, [m, u]),
        { metricMeasureRef: U, metricWidth: O } = (function () {
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
            ref: U,
            className: e4.V$,
            "aria-hidden": !0,
            children: G.map((e) => (0, i.jsx)(eZ, { entry: e, stat: d }, e.user_id)),
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
                    h.default.track(e8.HAw.LEADERBOARD_END_IMPRESSION, {
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
        leaderboardView: A,
        metric: f,
        isAtEnd: w,
        isEmpty: p,
        disabled: r,
    });
    let z = s.useCallback(
            (e) => {
                r ||
                    h.default.track(e8.HAw.LEADERBOARD_CLICK, {
                        location: e,
                        guild_id: t,
                        leaderboard_state: v,
                        leaderboard_view: A,
                        metric: f,
                    });
            },
            [t, v, A, f, r],
        ),
        F = s.useCallback(
            (e) => {
                let l = e === u;
                return (0, i.jsx)(
                    eY,
                    {
                        guildId: t,
                        entry: e,
                        stat: d,
                        games: g,
                        isCurrentUser: l,
                        shouldDimForCurrentUser: l && M,
                        rowRef: l ? C : void 0,
                        onClick: () => z("row"),
                        metricWidth: O ?? void 0,
                    },
                    `${e.rank}-${e.user_id}`,
                );
            },
            [M, u, g, t, d, C, z, O],
        );
    return p
        ? (0, i.jsx)("div", {
              className: e4.Cm,
              children: (0, i.jsx)(e_, { guildId: t, onActivitySharingClick: () => z("activity_sharing") }),
          })
        : null == O
          ? (0, i.jsxs)("div", { className: e4.rf, children: [B, (0, i.jsx)(I, {})] })
          : (0, i.jsxs)("div", {
                className: e4.rf,
                children: [
                    B,
                    (0, i.jsxs)("div", {
                        className: e4.SY,
                        children: [
                            (0, i.jsxs)(T.d_, {
                                className: j()(e4.p_, { [e4.zE]: n, [e4.Ng]: L }),
                                ref: b,
                                children: [
                                    _ &&
                                        (0, i.jsx)(e6, {
                                            guildId: t,
                                            entries: E,
                                            stat: d,
                                            games: g,
                                            currentUserEntry: u,
                                            currentUserPillarRef: C,
                                            onClick: () => z("podium"),
                                        }),
                                    m.map(F),
                                ],
                            }),
                            (null != u && null != R) || (L && !w)
                                ? (0, i.jsx)(H, { position: "top" !== R || L ? "bottom" : "top" })
                                : null,
                            null != u &&
                                null != R &&
                                (0, i.jsx)(K, {
                                    position: R,
                                    children: (0, i.jsx)(k.D, {
                                        className: e4.Po,
                                        "aria-label": N.intl.string(X.default.d0Z8kd),
                                        onClick: D,
                                        children: (0, i.jsx)(eY, {
                                            guildId: t,
                                            entry: u,
                                            stat: d,
                                            games: g,
                                            isCurrentUser: !0,
                                            shouldDimForCurrentUser: !1,
                                            isFloating: !0,
                                            onClick: () => z("row"),
                                            metricWidth: O ?? void 0,
                                        }),
                                    }),
                                }),
                            L && (0, i.jsx)(e9, { guildId: t, onActivitySharingClick: () => z("activity_sharing") }),
                        ],
                    }),
                    (0, i.jsx)(e5, { computedAt: l.computed_at, inModal: n }),
                ],
            });
}
function e5(e) {
    let { computedAt: t, inModal: l } = e,
        n = (0, i.jsxs)("div", {
            className: e4.z8,
            children: [
                (0, i.jsx)(R.RefreshIcon, { size: "xxs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 }),
                (0, i.jsx)(_.E, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: N.intl.string(X.default["/nma+a"]),
                }),
            ],
        });
    return null == t
        ? (0, i.jsx)("div", { className: e4.qr, children: n })
        : (0, i.jsx)("div", {
              className: j()(e4.qr, { [e4.zE]: l }),
              tabIndex: 0,
              children: (0, i.jsx)(u.m, {
                  text: N.intl.formatToPlainString(X.default["1bt50t"], {
                      timestamp: (0, z.mk)(new Date(t)).toLowerCase(),
                  }),
                  position: "bottom",
                  children: n,
              }),
          });
}
function e9(e) {
    let { guildId: t, onActivitySharingClick: l } = e,
        {
            isSharingActivity: n,
            isSharingActivityInGuild: a,
            hasPersonalizationConsent: r,
            requirement: d,
        } = (0, q.T4)(t),
        o = null != d,
        u = (0, y.bG)([B.A], () => B.A.getStatus() === e8.clD.INVISIBLE),
        m = N.intl.string(X.default.toxuHd),
        x = !1;
    n && a
        ? r
            ? u && ((m = N.intl.string(X.default.PTDDhW)), (x = !0))
            : (m = N.intl.string(X.default.mTARYx))
        : (m = N.intl.string(X.default["8y885d"]));
    let [h] = s.useState(o),
        [f] = s.useState(x),
        g = !o && !x && h,
        j = !o && !x && f;
    j ? (m = N.intl.string(X.default.cgRADC)) : g && (m = N.intl.string(X.default.dqYuni));
    let {
        user: p,
        member: v,
        name: A,
        roleColorStrings: b,
    } = J(
        t,
        (0, y.bG)([W.default], () => W.default.getCurrentUser()?.id ?? ""),
    );
    return null == p
        ? null
        : (0, i.jsxs)("div", {
              className: e4.Xx,
              children: [
                  (0, i.jsxs)("div", {
                      className: e4.kd,
                      children: [
                          (0, i.jsxs)("div", {
                              className: e4.nk,
                              children: [
                                  (0, i.jsx)(D.A, { children: N.intl.string(X.default["oHdW+u"]) }),
                                  (0, i.jsx)(_.E, {
                                      variant: "text-sm/semibold",
                                      color: "text-muted",
                                      "aria-hidden": !0,
                                      children: "?",
                                  }),
                              ],
                          }),
                          (0, i.jsx)(w.eu, {
                              size: L._3.SIZE_32,
                              src: p.getAvatarURL(t, (0, L.FT)(L._3.SIZE_32)) ?? void 0,
                              className: e4.SA,
                              "aria-hidden": !0,
                              status: u ? e8.clD.INVISIBLE : void 0,
                          }),
                          (0, i.jsxs)("div", {
                              className: e4.ko,
                              children: [
                                  (0, i.jsx)(E.D, {
                                      variant: "heading-sm/semibold",
                                      color: "text-default",
                                      lineClamp: 1,
                                      children: (0, i.jsx)(M.g, {
                                          name: A,
                                          colorString: v?.colorString ?? null,
                                          colorStrings: b,
                                      }),
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: e4.LF,
                                      children: [
                                          g || j
                                              ? (0, i.jsx)(G.U, {
                                                    size: "xs",
                                                    color: c.A.colors.ICON_FEEDBACK_POSITIVE,
                                                    "aria-hidden": !0,
                                                })
                                              : null,
                                          (0, i.jsx)(_.E, {
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
                  o &&
                      (0, i.jsx)("div", {
                          className: e4.rl,
                          children: (0, i.jsx)(U.$, {
                              variant: "secondary",
                              size: "sm",
                              text: N.intl.string(X.default.fMbgeZ),
                              onClick: () => {
                                  (l(), ep(t, d, N.intl.string(X.default.PJn0ih)));
                              },
                          }),
                      }),
                  x &&
                      !o &&
                      (0, i.jsx)(U.$, {
                          variant: "secondary",
                          size: "sm",
                          text: N.intl.string(N.t.fwPurU),
                          onClick: () => {
                              (0, O.A)({ nextStatus: e8.clD.ONLINE, prevStatus: e8.clD.INVISIBLE });
                          },
                      }),
              ],
          });
}
var te = l(665260),
    tt = l(636537),
    tl = l(193249),
    tn = l(683071),
    ti = l(825484),
    ts = l(71393),
    ta = l(967198),
    tr = l(49303),
    td = l(313627);
let tc = e8.ogj.SUPPRESS_GAMING_LEADERBOARD_NOTIFICATIONS;
var to = l(224640),
    tu = l(20742),
    tm = l(885386),
    tx = l(515746);
function th(e) {
    let { data: t } = e,
        l = (0, eo.K)(t.stat),
        {
            ended: n,
            endDate: a,
            badgeLabel: r,
        } = (function (e) {
            let t = (e + ec.A.Seconds.WEEK) * ec.A.Millis.SECOND,
                [l, n] = s.useState(() => Date.now()),
                i = t - l,
                a = i <= 0,
                r = i - (Math.ceil(i / ec.A.Millis.DAY) - 1) * ec.A.Millis.DAY;
            return (
                (0, eW.A)(() => n(Date.now()), a ? null : r),
                s.useMemo(
                    () => ({
                        ended: a,
                        endDate: new Date(t),
                        badgeLabel: a
                            ? N.intl.string(X.default["J8r/7L"])
                            : N.intl.formatToPlainString(X.default["PuaR+2"], { days: Math.ceil(i / ec.A.Millis.DAY) }),
                    }),
                    [a, t, i],
                )
            );
        })(t.week_start_ts),
        d = tm.PZ.useSetting(),
        c = 2 > (0, z.m_)(a, new Date()) ? (0, z.mk)(a, !1, d).toLowerCase() : (0, z.i$)(a, "L LT", d).toLowerCase(),
        o = n
            ? N.intl.format(X.default.kG9XmM, { endedAt: c, nextStatName: (0, eo.K)(t.next_stat).name })
            : N.intl.format(X.default["X+VLqi"], { statQuestion: l.question, endsAt: c });
    return (0, i.jsx)(eU.u, {
        title: l.name,
        body: o,
        position: "top",
        children: (0, i.jsx)("div", {
            className: j()(tx.qS, n ? tx.yM : tx.Qk),
            tabIndex: 0,
            children: (0, i.jsx)(_.E, {
                variant: "text-xs/semibold",
                color: n ? "text-muted" : "text-brand",
                children: r,
            }),
        }),
    });
}
function tf(e) {
    let { guildId: t, data: l, expanded: n, column: i, enabled: a = !0 } = e,
        [r, d] = s.useState(null),
        c = s.useRef(null),
        o = s.useRef({ guildId: t, data: l, expanded: n, column: i });
    s.useEffect(() => {
        o.current = { guildId: t, data: l, expanded: n, column: i };
    }, [t, l, n, i]);
    let u = s.useCallback((e) => {
        let t = c.current;
        if (null == t) return;
        c.current = null;
        let l = Date.now() - t;
        if (l < 250) return;
        let n = o.current;
        null != n.data &&
            h.default.track(
                e8.HAw.LEADERBOARD_HOVER,
                {
                    guild_id: n.guildId,
                    duration: Math.round(l) / 1e3,
                    leaderboard_state: eh(n.data),
                    leaderboard_view: ef({ expanded: n.expanded, column: n.column }),
                    metric: eg(n.data.stat),
                },
                { flush: e },
            );
    }, []);
    return (
        s.useEffect(() => {
            if (null != r && a)
                return (
                    r.addEventListener("mouseenter", e),
                    r.addEventListener("mouseleave", t),
                    window.addEventListener("blur", l),
                    document.addEventListener("visibilitychange", n),
                    window.addEventListener("pagehide", i),
                    () => {
                        (r.removeEventListener("mouseenter", e),
                            r.removeEventListener("mouseleave", t),
                            window.removeEventListener("blur", l),
                            document.removeEventListener("visibilitychange", n),
                            window.removeEventListener("pagehide", i),
                            u(!0));
                    }
                );
            function e() {
                c.current = Date.now();
            }
            function t() {
                u(!1);
            }
            function l() {
                u(!1);
            }
            function n() {
                "hidden" === document.visibilityState && u(!0);
            }
            function i() {
                u(!0);
            }
        }, [r, a, u]),
        s.useCallback((e) => {
            d(e);
        }, [])
    );
}
var tg = l(460614);
function tj(e) {
    let { guildId: t, data: l, modalProps: n } = e,
        s = eH(t, l),
        a = tf({ guildId: t, data: s, expanded: !0 });
    return null == s
        ? null
        : (0, i.jsx)(to.d, {
              size: "lg",
              "aria-label": ex(s),
              ...n,
              children: (0, i.jsxs)("div", {
                  ref: a,
                  children: [
                      (0, i.jsxs)("div", {
                          className: tg.wx,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: tg.LD,
                                  children: [
                                      (0, i.jsx)(o.TrophyIcon, {
                                          size: "xs",
                                          color: c.A.colors.ICON_SUBTLE,
                                          "aria-hidden": !0,
                                      }),
                                      (0, i.jsx)(E.D, {
                                          variant: "heading-sm/medium",
                                          className: tg.DD,
                                          children: ex(s),
                                      }),
                                      (0, i.jsx)(th, { data: s }),
                                  ],
                              }),
                              (0, i.jsx)(tu.s_, {}),
                          ],
                      }),
                      (0, i.jsx)("div", {
                          className: tg.rf,
                          children: (0, i.jsx)(e7, { guildId: t, data: s, inModal: !0 }),
                      }),
                  ],
              }),
          });
}
var tp = l(452027),
    tv = l(103557),
    t_ = l(95477),
    tA = l(241326),
    tE = l(2553),
    tN = l(405810),
    tb = l(488428),
    tI = l(776231);
let tS = (0, l(676279).cy)();
function tC(e, t, l) {
    let n = l.startsWith("a_"),
        i = n ? (tS ? "webp" : "gif") : tS ? "webp" : "jpg",
        { CDN_HOST: s, API_ENDPOINT: a } = window.GLOBAL_ENV,
        r = e8.Rsh.GUILD_SPACE_IMAGE_TEXT_WIDGET_IMAGE(e, t, l, i),
        d = null != s ? `https://${s}${r}` : location.protocol + a + r,
        c = { size: (0, tI.kr)(500 * (0, tI.mZ)()) };
    return (
        "jpg" === i && (c.quality = "lossless"), "webp" === i && n && (c.animated = !0), (d += `?${tb.stringify(c)}`)
    );
}
var ty = l(868602),
    tT = l(445187),
    tk = l(770178),
    tR = l(104171),
    tD = l(889227),
    tw = l(427262),
    tL = l(950305),
    tM = l(409626),
    tG = l(692969),
    tU = l(788593),
    tP = l(948852),
    tO = l(365611);
function tB(e) {
    let { totalUsers: t, gameName: l } = e,
        n = N.intl.formatToPlainString(X.default["XaT+x0"], { count: t, gameName: l });
    return (0, i.jsxs)("div", {
        className: tP.Fk,
        role: "img",
        "aria-label": n,
        children: [
            (0, i.jsx)(tL.UserIcon, {
                size: "custom",
                width: 14,
                height: 14,
                color: c.A.colors.ICON_SUBTLE,
                "aria-hidden": !0,
            }),
            (0, i.jsx)(_.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
        ],
    });
}
function tW(e) {
    let { entry: t, games: l } = e,
        { name: n, coverUrl: s, isLoading: a } = er(l, t.application_id),
        r = (0, tG.A)({
            location: "PopularGamesGameCard",
            applicationId: t.application_id,
            source: tM.GameProfileSources.GuildSpacePopularGames,
            trackEntryPointImpression: !0,
        }),
        d = null != r;
    if (a)
        return (0, i.jsx)("div", {
            className: tP.Nr,
            role: "listitem",
            children: (0, i.jsx)("div", { className: tO.mD }),
        });
    let c = (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(u.m, {
                text: n,
                ariaHidden: !0,
                children: (0, i.jsx)("div", {
                    className: j()(tO.PY, { [tO.vk]: d, [tO.iL]: d && null != s }),
                    children: (0, i.jsx)(tU.R, { imageSrc: s, gameName: n }),
                }),
            }),
            (0, i.jsx)(_.E, { variant: "text-sm/semibold", color: "text-default", lineClamp: 1, children: n }),
        ],
    });
    return (0, i.jsxs)("div", {
        className: tP.Nr,
        role: "listitem",
        children: [
            d
                ? (0, i.jsx)(k.D, {
                      className: j()(tP.LO, tP.vk),
                      onClick: r,
                      "aria-label": N.intl.formatToPlainString(N.t["8QLQB+"], { gameName: n }),
                      children: c,
                  })
                : (0, i.jsx)("div", { className: tP.LO, children: c }),
            (0, i.jsx)(tB, { totalUsers: t.total_users, gameName: n }),
        ],
    });
}
var tz = l(347661),
    tF = l(57129),
    tH = l(560328);
function tK(e) {
    let { guildId: t, requirement: l } = e;
    return (0, i.jsx)(C, {
        className: tH.p$,
        title: N.intl.string(X.default.ULK65a),
        body: N.intl.format(null != l ? X.default.JDAHQV : X.default.LeSGal, { memberCount: 3 }),
        action:
            null != l
                ? (0, i.jsx)(U.$, {
                      variant: "secondary",
                      size: "sm",
                      text: N.intl.string(X.default.fMbgeZ),
                      onClick: () => ep(t, l, N.intl.string(X.default.e7pD5m)),
                  })
                : null,
    });
}
function tq(e) {
    let { guildId: t, requirement: l } = e;
    return (0, i.jsxs)("div", {
        className: tH.UX,
        children: [
            (0, i.jsxs)("div", {
                className: tH.tD,
                children: [
                    (0, i.jsx)(E.D, {
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        lineClamp: 1,
                        children: N.intl.string(tF.default.WhdCGP),
                    }),
                    (0, i.jsx)(_.E, {
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        lineClamp: 2,
                        children:
                            l === q.kG.ACTIVITY_SHARING
                                ? N.intl.string(X.default.wyK5KO)
                                : N.intl.string(X.default.uQOR1j),
                    }),
                ],
            }),
            (0, i.jsx)(U.$, {
                variant: "secondary",
                size: "sm",
                text: N.intl.string(X.default.fMbgeZ),
                onClick: () => ep(t, l, N.intl.string(X.default.e7pD5m)),
            }),
        ],
    });
}
function tY(e) {
    let { guildId: t, memberIds: l, totalUsers: n, totalGames: s, isCompact: a } = e,
        r = a ? 2 : 4,
        d = (0, y.yK)(
            [W.default],
            () =>
                l
                    .map((e) => W.default.getUser(e))
                    .filter(ei.Vq)
                    .slice(0, r),
            [l, r],
        ),
        c = n - d.length;
    return (0, i.jsxs)("div", {
        className: tH.qr,
        children: [
            (0, i.jsx)(_.E, {
                className: tH.z,
                variant: "text-xs/normal",
                color: "text-muted",
                lineClamp: 1,
                children: N.intl.format(X.default.ED2GDQ, { memberCount: n, gameCount: s }),
            }),
            d.length > 0 &&
                (0, i.jsx)("div", {
                    className: tH.WM,
                    children: (0, i.jsx)(tR.Ay, {
                        users: d,
                        guildId: t,
                        size: tR.DN.SIZE_24,
                        max: d.length,
                        renderUser: function (e) {
                            if (!(e instanceof tD.A)) return null;
                            let l = Z.Ay.getNickname(t, void 0, e) ?? tw.Ay.getName(e);
                            return (0, i.jsx)(u.m, {
                                text: l,
                                ariaHidden: !0,
                                children: (0, i.jsx)("span", {
                                    role: "img",
                                    "aria-label": l,
                                    children: (0, i.jsx)(w.eu, {
                                        src: e.getAvatarURL(t, (0, L.FT)(L._3.SIZE_24)),
                                        size: L._3.SIZE_24,
                                        "aria-hidden": !0,
                                    }),
                                }),
                            });
                        },
                        count: n,
                        hideMoreUsers: c <= 0,
                        renderMoreUsers: () =>
                            (0, i.jsx)("span", {
                                className: tH.ju,
                                children: (0, i.jsx)(_.E, {
                                    tag: "span",
                                    variant: "text-xs/semibold",
                                    color: "text-subtle",
                                    children: N.intl.formatToPlainString(X.default.G5PLYW, { count: c }),
                                }),
                            }),
                    }),
                }),
        ],
    });
}
function t$(e) {
    let { guildId: t, data: l, title: n } = e,
        {
            ref: a,
            visibleCount: r,
            isCompact: d,
        } = (function () {
            let e = s.useRef(null),
                [t, l] = s.useState({ visibleCount: 5, isCompact: !1 }),
                n = s.useCallback((e) => {
                    let { width: t } = e.contentRect,
                        n = Math.max(1, Math.min(5, Math.floor((t - 32 + 12) / 108))),
                        i = t < 480;
                    l((e) => (e.visibleCount === n && e.isCompact === i ? e : { visibleCount: n, isCompact: i }));
                }, []);
            return ((0, tk.g)(e, n, [], { fireOnMount: !0 }), { ref: e, ...t });
        })(),
        { requirement: c } = (0, q.T4)(t),
        o = null != c,
        u = (0, y.bG)([W.default], () => W.default.getCurrentUser()?.id),
        m = s.useMemo(() => (o ? l.user_ids.filter((e) => e !== u) : l.user_ids), [l.user_ids, o, u]),
        x = s.useMemo(() => ({ ...l, user_ids: m }), [l, m]),
        h = (0, tz.m)(x),
        f = h ? [] : x.user_ids;
    (0, P.k6)(t, f);
    let g = s.useMemo(() => x.games.map((e) => e.application_id), [x.games]),
        j = ea(g),
        p = s.useMemo(() => g.map((e) => j.get(e)?.coverUrl).find(ei.Vq) ?? null, [j, g]),
        v = null;
    return (
        (v = h
            ? (0, i.jsx)(tK, { guildId: t, requirement: c })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsxs)("div", {
                          className: tH.Qs,
                          children: [
                              null != p
                                  ? (0, i.jsx)("div", {
                                        className: tH.G,
                                        children: (0, i.jsx)("img", { className: tH.LZ, src: p, alt: "" }),
                                    })
                                  : null,
                              (0, i.jsx)("div", {
                                  className: tH.ag,
                                  role: "list",
                                  "aria-label": n,
                                  children: x.games
                                      .slice(0, r)
                                      .map((e) => (0, i.jsx)(tW, { entry: e, games: j }, e.application_id)),
                              }),
                          ],
                      }),
                      (0, i.jsxs)("div", {
                          className: tH.sQ,
                          children: [
                              null != c && (0, i.jsx)(tq, { guildId: t, requirement: c }),
                              (0, i.jsx)(tY, {
                                  guildId: t,
                                  memberIds: f,
                                  totalUsers: x.total_users,
                                  totalGames: x.total_games,
                                  isCompact: d,
                              }),
                          ],
                      }),
                  ],
              })),
        (0, i.jsx)("div", { className: tH.rf, ref: a, children: v })
    );
}
function tQ(e) {
    return e.default_title ?? N.intl.string(X.default.GZsvDx);
}
var tV = l(650583),
    tZ = l(684343);
function tX(e) {
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
                    case tV.dh.ARROW_RIGHT:
                    case tV.dh.ARROW_DOWN:
                        t = (s + 1) % i.length;
                        break;
                    case tV.dh.ARROW_LEFT:
                    case tV.dh.ARROW_UP:
                        t = (s - 1 + i.length) % i.length;
                        break;
                    case tV.dh.HOME:
                        t = 0;
                        break;
                    case tV.dh.END:
                        t = i.length - 1;
                        break;
                    default:
                        return;
                }
                (e.preventDefault(), i[t]?.focus());
            }
        }, []);
    return (0, i.jsx)("div", {
        className: tZ.vR,
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
                    className: tZ.Mf,
                    "aria-selected": t,
                    "aria-controls": a,
                    tabIndex: t ? 0 : -1,
                    onClick: () => d(e.id),
                    onKeyDown: c,
                    children: (0, i.jsx)(_.E, {
                        className: tZ.Pf,
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
var tJ = l(831544),
    t0 = l(28863),
    t1 = l(148166),
    t2 = l(427209),
    t6 = l(294454),
    t3 = l(605810);
function t8(e) {
    let { target: t, tabIndex: n } = e;
    return (0, i.jsx)("div", {
        className: t3.ql,
        children: (0, i.jsx)(u.m, {
            text: N.intl.string(N.t.RDE0Sc),
            ariaHidden: !0,
            children: (0, i.jsx)(m.K, {
                icon: t2.A,
                size: "sm",
                variant: "overlay-secondary",
                tabIndex: n,
                "aria-label": N.intl.string(N.t.Ej3B3Y),
                onClick: () => {
                    (0, ej.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([
                                l.e("325522"),
                                l.e("401317"),
                                l.e("790340"),
                                l.e("147119"),
                                l.e("425292"),
                                l.e("209994"),
                                l.e("457428"),
                                l.e("552653"),
                                l.e("311580"),
                                l.e("174554"),
                                l.e("116815"),
                                l.e("813057"),
                                l.e("132502"),
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
                                l.e("85427"),
                                l.e("247917"),
                                l.e("89530"),
                                l.e("296956"),
                                l.e("629972"),
                                l.e("334168"),
                                l.e("582012"),
                                l.e("495296"),
                                l.e("162182"),
                                l.e("327545"),
                                l.e("860640"),
                                l.e("681801"),
                                l.e("179652"),
                                l.e("916885"),
                                l.e("826139"),
                                l.e("405714"),
                                l.e("360732"),
                                l.e("352456"),
                                l.e("638781"),
                                l.e("678906"),
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
                                l.e("533240"),
                                l.e("962953"),
                                l.e("734818"),
                                l.e("216870"),
                                l.e("89100"),
                                l.e("340363"),
                                l.e("459086"),
                                l.e("720210"),
                                l.e("61531"),
                                l.e("177086"),
                                l.e("319714"),
                                l.e("189281"),
                                l.e("205035"),
                                l.e("200075"),
                                l.e("896995"),
                                l.e("267732"),
                                l.e("686889"),
                                l.e("560570"),
                                l.e("896691"),
                                l.e("779367"),
                                l.e("992956"),
                                l.e("7452"),
                                l.e("60002"),
                                l.e("189423"),
                                l.e("649500"),
                                l.e("683426"),
                                l.e("501546"),
                                l.e("20409"),
                                l.e("56347"),
                                l.e("424199"),
                                l.e("496818"),
                                l.e("587618"),
                                l.e("645499"),
                                l.e("342551"),
                                l.e("162512"),
                                l.e("695765"),
                                l.e("777489"),
                                l.e("188941"),
                                l.e("264236"),
                                l.e("481647"),
                                l.e("349619"),
                                l.e("776602"),
                                l.e("543039"),
                                l.e("398125"),
                                l.e("221825"),
                                l.e("930758"),
                                l.e("140402"),
                                l.e("244560"),
                                l.e("253729"),
                                l.e("593600"),
                                l.e("266900"),
                                l.e("707826"),
                                l.e("948804"),
                                l.e("721690"),
                                l.e("695445"),
                                l.e("136022"),
                                l.e("199999"),
                                l.e("828111"),
                                l.e("890027"),
                                l.e("832817"),
                                l.e("425544"),
                                l.e("416143"),
                                l.e("844695"),
                                l.e("234236"),
                                l.e("776195"),
                                l.e("87306"),
                                l.e("92124"),
                                l.e("988077"),
                                l.e("809915"),
                                l.e("776750"),
                                l.e("812310"),
                                l.e("361626"),
                                l.e("561216"),
                                l.e("646506"),
                                l.e("165595"),
                                l.e("445124"),
                                l.e("313681"),
                                l.e("445421"),
                                l.e("631608"),
                                l.e("343550"),
                                l.e("552712"),
                                l.e("829177"),
                                l.e("832823"),
                                l.e("592028"),
                                l.e("761935"),
                                l.e("106943"),
                                l.e("232551"),
                                l.e("511527"),
                                l.e("892340"),
                                l.e("763070"),
                                l.e("425906"),
                                l.e("381933"),
                                l.e("14962"),
                                l.e("502018"),
                                l.e("123216"),
                                l.e("123353"),
                                l.e("249366"),
                                l.e("728633"),
                                l.e("588940"),
                                l.e("628439"),
                                l.e("756148"),
                                l.e("401518"),
                                l.e("225990"),
                                l.e("539620"),
                                l.e("133902"),
                                l.e("183534"),
                                l.e("935715"),
                                l.e("248329"),
                                l.e("770697"),
                                l.e("147786"),
                                l.e("633128"),
                                l.e("854461"),
                                l.e("401590"),
                                l.e("790244"),
                                l.e("498215"),
                                l.e("482861"),
                                l.e("398793"),
                                l.e("836545"),
                                l.e("273232"),
                                l.e("894747"),
                                l.e("593176"),
                                l.e("121435"),
                                l.e("592731"),
                                l.e("53374"),
                                l.e("256616"),
                                l.e("858514"),
                                l.e("240511"),
                                l.e("344265"),
                                l.e("718573"),
                                l.e("784103"),
                                l.e("643612"),
                                l.e("346102"),
                                l.e("486792"),
                                l.e("463095"),
                                l.e("537894"),
                                l.e("128534"),
                                l.e("784041"),
                                l.e("799657"),
                                l.e("810034"),
                                l.e("869546"),
                                l.e("124060"),
                                l.e("817852"),
                                l.e("831145"),
                                l.e("133179"),
                                l.e("146566"),
                                l.e("614784"),
                                l.e("317225"),
                                l.e("8563"),
                                l.e("444376"),
                                l.e("32661"),
                                l.e("187856"),
                                l.e("170653"),
                                l.e("334127"),
                                l.e("696123"),
                                l.e("400954"),
                                l.e("610449"),
                                l.e("32781"),
                                l.e("238412"),
                                l.e("499941"),
                                l.e("693832"),
                                l.e("488990"),
                                l.e("577084"),
                                l.e("332470"),
                                l.e("168219"),
                                l.e("193158"),
                                l.e("318546"),
                                l.e("843719"),
                                l.e("912773"),
                                l.e("556967"),
                                l.e("710638"),
                                l.e("73500"),
                                l.e("662355"),
                                l.e("418943"),
                                l.e("455924"),
                                l.e("41991"),
                                l.e("959134"),
                                l.e("377766"),
                                l.e("872648"),
                                l.e("565065"),
                                l.e("834386"),
                                l.e("4780"),
                                l.e("784727"),
                                l.e("976148"),
                                l.e("130674"),
                                l.e("622825"),
                                l.e("959669"),
                                l.e("220518"),
                                l.e("371482"),
                                l.e("126780"),
                                l.e("360781"),
                                l.e("88160"),
                                l.e("631825"),
                                l.e("851243"),
                                l.e("748015"),
                                l.e("278424"),
                                l.e("844780"),
                                l.e("237834"),
                                l.e("807771"),
                                l.e("338516"),
                                l.e("478476"),
                                l.e("496715"),
                                l.e("681541"),
                                l.e("115754"),
                                l.e("29664"),
                                l.e("178565"),
                                l.e("243100"),
                                l.e("546745"),
                                l.e("250478"),
                                l.e("863076"),
                                l.e("462276"),
                                l.e("680986"),
                                l.e("90373"),
                                l.e("979630"),
                                l.e("293697"),
                                l.e("568980"),
                                l.e("168177"),
                                l.e("260218"),
                                l.e("236946"),
                                l.e("935948"),
                                l.e("692639"),
                                l.e("565617"),
                                l.e("890480"),
                                l.e("440963"),
                                l.e("766031"),
                                l.e("394317"),
                                l.e("744385"),
                                l.e("304329"),
                                l.e("84755"),
                                l.e("256831"),
                            ]).then(l.bind(l, 99266));
                            return function (l) {
                                return (0, i.jsx)(e, { ...l, target: t });
                            };
                        },
                        { stackingBehavior: "stack", modalKey: t6.aU },
                    );
                },
            }),
        }),
    });
}
var t4 = l(272984);
function t7(e) {
    let { artist: t, itemProps: l } = e,
        n = null != t.artist_image_hash ? t4.RQ.IMAGE(t.artist_image_hash) : null,
        a = s.useMemo(
            () => ({
                kind: "artist",
                shareUrl: t4.RQ.WEB_OPEN(t4.M0.ARTIST, t.artist_external_id),
                title: t.artist_name ?? t.artist_external_id,
                subtitle: null,
                imageUrl: n,
            }),
            [t.artist_external_id, t.artist_name, n],
        ),
        r = (0, i.jsx)(t1.R, { src: n, isCircular: !0, FallbackIcon: tJ.MicrophoneIcon });
    return null == t.artist_name
        ? (0, i.jsx)("div", { className: t3.Nr, children: (0, i.jsx)("div", { ...l, className: t3.MT, children: r }) })
        : (0, i.jsxs)("div", {
              className: t3.Nr,
              children: [
                  (0, i.jsxs)(t0.Anchor, {
                      ...l,
                      className: t3.MT,
                      href: a.shareUrl,
                      useDefaultUnderlineStyles: !1,
                      children: [
                          r,
                          (0, i.jsx)("span", {
                              className: t3.Qq,
                              children: (0, i.jsx)(_.E, {
                                  className: t3.DD,
                                  tag: "span",
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  lineClamp: 2,
                                  children: t.artist_name,
                              }),
                          }),
                      ],
                  }),
                  (0, i.jsx)(t8, { target: a, tabIndex: l.tabIndex }),
              ],
          });
}
var t5 = l(872351),
    t9 = l(708988),
    le = l(628137);
let lt = "none",
    ll = (e, t) => (0, i.jsx)(_.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: e }, t);
function ln(e) {
    return e;
}
function li(e) {
    return e?.direction ?? lt;
}
function ls(e) {
    if (null == e) return null;
    let t = Math.round(Math.abs(e));
    return 0 === t
        ? null
        : { direction: e > 0 ? "up" : "down", label: N.intl.formatToPlainString(X.default["h+LUpk"], { percent: t }) };
}
function la(e) {
    return ls(null != e.plays_trend_pct ? 100 * e.plays_trend_pct : null);
}
var lr = l(633099);
function ld(e) {
    let { trend: t } = e,
        l = "up" === t.direction ? t5.z : t9.M;
    return (0, i.jsxs)("span", {
        className: lr.GW,
        children: [
            (0, i.jsx)(l, {
                className: j()({ [lr.$J]: "up" === t.direction, [lr.KW]: "down" === t.direction }),
                size: "xxs",
                color: "currentColor",
                "aria-hidden": !0,
            }),
            (0, i.jsx)(_.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: t.label }),
        ],
    });
}
function lc(e) {
    var t;
    let { guildId: l, song: n } = e,
        a = s.useMemo(() => (n.facepile_user_ids ?? []).slice(0, 3), [n.facepile_user_ids]);
    (0, P.k6)(l, a);
    let r = (0, y.yK)([W.default], () => a.map((e) => W.default.getUser(e)), [a]),
        d = s.useMemo(() => r.filter((e) => null != e), [r]);
    if (0 === d.length) return null;
    let c = n.unique_listeners - d.length;
    return (0, i.jsx)("span", {
        className: lr.WM,
        role: "group",
        "aria-label":
            ((t = n.unique_listeners),
            N.intl.formatToPlainString(X.default.AzIhRB, { count: t, trend: lt, countHook: ln })),
        children: (0, i.jsx)(tR.Ay, {
            users: d,
            guildId: l,
            size: tR.DN.SIZE_24,
            max: d.length,
            count: n.unique_listeners,
            hideMoreUsers: c <= 0,
            renderMoreUsers: () =>
                (0, i.jsx)("span", {
                    className: lr.ju,
                    children: (0, i.jsx)(_.E, {
                        tag: "span",
                        variant: "text-sm/semibold",
                        color: "text-subtle",
                        children: N.intl.formatToPlainString(X.default.bFIg0R, { count: c }),
                    }),
                }),
        }),
    });
}
function lo(e) {
    let { trackExternalId: t } = e,
        [l, n] = s.useState(!1);
    return (0, i.jsxs)("div", {
        className: lr.aF,
        children: [
            (0, i.jsx)(le.A, {
                resourceType: t4.M0.TRACK,
                resourceId: t,
                onLoad: () => n(!0),
                allowEncryptedMedia: !0,
            }),
            !l && (0, i.jsx)("div", { className: lr.Ls, "aria-hidden": !0 }),
        ],
    });
}
function lu(e) {
    let { isCompact: t, headline: l, detail: n, trend: s } = e;
    return null == l && null == n && null == s
        ? null
        : (0, i.jsx)("div", {
              className: j()(lr.yp, { [lr.Fl]: t }),
              children: (0, i.jsxs)("div", {
                  className: lr.QD,
                  children: [
                      null != l &&
                          (0, i.jsx)(_.E, {
                              tag: "div",
                              variant: "heading-xl/semibold",
                              color: "text-default",
                              children: l,
                          }),
                      (0, i.jsxs)("div", {
                          className: lr._0,
                          children: [
                              null != n &&
                                  (0, i.jsx)(_.E, {
                                      tag: "span",
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: n,
                                  }),
                              null != s && (0, i.jsx)(ld, { trend: s }),
                          ],
                      }),
                  ],
              }),
          });
}
function lm(e) {
    var t;
    let { guildId: l, isCompact: n, canShowEmbed: s, song: a } = e,
        r = ls(a.plays_change_percent);
    return (0, i.jsxs)("div", {
        className: j()(lr.yp, { [lr.Fl]: n }),
        children: [
            s && (0, i.jsx)(lo, { trackExternalId: a.track_external_id }, a.track_external_id),
            (0, i.jsxs)("div", {
                className: j()(lr.QD, lr.rk),
                children: [
                    (0, i.jsx)(lc, { guildId: l, song: a }),
                    (0, i.jsxs)("div", {
                        className: lr._0,
                        children: [
                            (0, i.jsx)(_.E, {
                                tag: "span",
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                children:
                                    ((t = a.plays),
                                    N.intl.format(X.default["7hHUIS"], { count: t, trend: li(r), countHook: ll })),
                            }),
                            null != r && (0, i.jsx)(ld, { trend: r }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var lx = l(197935),
    lh = l(915734);
function lf(e) {
    let { label: t, items: l, isCompact: n, getItemKey: s, renderItem: a } = e;
    return (0, i.jsx)("div", {
        className: j()(lh.Dk, { [lh.yI]: n }),
        children: (0, i.jsx)(lx.A, {
            items: l,
            getItemKey: s,
            renderItem: a,
            gap: 8,
            edgeFade: 40,
            actionsClassName: lh.o1,
            "aria-label": t,
        }),
    });
}
var lg = (((n = {}).TOP_SONGS = "top_songs"), (n.TOP_ARTISTS = "top_artists"), (n.TOP_LISTENERS = "top_listeners"), n);
let lj = ["top_songs", "top_artists", "top_listeners"];
function lp(e) {
    return 1 > e.ranked_songs.reduce((e, t) => e + t.plays, 0);
}
function lv(e) {
    switch (e) {
        case "top_songs":
            return N.intl.string(X.default.KgeEtx);
        case "top_artists":
            return N.intl.string(X.default.RYxWTS);
        case "top_listeners":
            return N.intl.string(X.default.KO73KB);
    }
}
function l_(e, t) {
    return `popular-music-tab-${e}-${t}`;
}
function lA(e) {
    return `popular-music-panel-${e}`;
}
var lE = l(742452);
function lN(e) {
    return e.artist_external_id;
}
function lb(e, t) {
    return (0, i.jsx)(t7, { artist: e, itemProps: t });
}
function lI(e) {
    let { isCompact: t, data: l } = e;
    if (0 === l.ranked_artists.length) return null;
    let n = la(l);
    return (0, i.jsxs)("div", {
        className: lE.U,
        children: [
            (0, i.jsx)(lf, {
                label: lv(lg.TOP_ARTISTS),
                items: l.ranked_artists,
                isCompact: t,
                getItemKey: lN,
                renderItem: lb,
            }),
            (0, i.jsx)(lu, {
                isCompact: t,
                headline:
                    l.distinct_songs < 1
                        ? null
                        : N.intl.formatToPlainString(X.default.W8etVA, { count: l.distinct_songs }),
                detail:
                    l.distinct_listeners < 1 || l.distinct_artists < 1
                        ? null
                        : N.intl.format(X.default.yGqf0D, {
                              memberCount: l.distinct_listeners,
                              artistCount: l.distinct_artists,
                              trend: li(n),
                              memberCountHook: ll,
                              artistCountHook: ll,
                          }),
                trend: n,
            }),
        ],
    });
}
var lS = l(803613),
    lC = l(682348),
    ly = l(73152),
    lT = l(280911);
function lk(e) {
    let { guildId: t, isCompact: l } = e,
        n = (0, y.bG)([W.default], () => W.default.getCurrentUser()),
        s = (0, y.bG)([V.Ay], () => (null != n ? V.Ay.getMember(t, n.id) : null)),
        a = (0, Q.gn)(t, n?.id, s?.colorStrings ?? null),
        r = Z.Ay.useName(t, void 0, n);
    return (0, i.jsxs)("div", {
        className: lT.D_,
        children: [
            (0, i.jsxs)("div", {
                className: lT.FI,
                "aria-hidden": !0,
                children: [
                    !l &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("span", { className: lT.eu, children: (0, i.jsx)(lS.D, { size: "sm" }) }),
                                (0, i.jsxs)("span", {
                                    className: lT.r$,
                                    children: [
                                        (0, i.jsx)("span", { className: lT.Om }),
                                        (0, i.jsx)("span", { className: lT.Om }),
                                        (0, i.jsx)("span", { className: lT.Om }),
                                    ],
                                }),
                            ],
                        }),
                    (0, i.jsx)(w.eu, {
                        size: L._3.SIZE_32,
                        src: n?.getAvatarURL(t, (0, L.FT)(L._3.SIZE_32)) ?? void 0,
                        "aria-hidden": !0,
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: lT.Qq,
                children: [
                    (0, i.jsx)(E.D, {
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        lineClamp: 1,
                        children: (0, i.jsx)(M.g, {
                            name: N.intl.formatToPlainString(X.default.subXXA, { name: r }),
                            colorString: s?.colorString ?? null,
                            colorStrings: a,
                        }),
                    }),
                    (0, i.jsx)(_.E, {
                        variant: "text-xs/medium",
                        color: "text-strong",
                        lineClamp: l ? 2 : 1,
                        children: N.intl.string(X.default.y1neEe),
                    }),
                ],
            }),
        ],
    });
}
function lR(e) {
    let { widgetName: t, isCompact: l } = e;
    return (0, i.jsxs)("div", {
        className: lT.D_,
        children: [
            !l &&
                (0, i.jsx)("span", {
                    className: lT.eu,
                    "aria-hidden": !0,
                    children: (0, i.jsx)(lC._, { size: "sm", color: c.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
                }),
            (0, i.jsxs)("div", {
                className: lT.Qq,
                children: [
                    (0, i.jsx)(E.D, {
                        variant: "heading-sm/semibold",
                        color: "text-strong",
                        lineClamp: 1,
                        children: N.intl.string(tF.default.WhdCGP),
                    }),
                    (0, i.jsx)(_.E, {
                        variant: "text-xs/medium",
                        color: "text-strong",
                        lineClamp: l ? 2 : 1,
                        children: N.intl.formatToPlainString(X.default["49Jv0I"], { widgetName: t }),
                    }),
                ],
            }),
        ],
    });
}
function lD(e) {
    let { guildId: t, widgetName: n, isCompact: s, isSpotifyConnected: a } = e;
    return (0, i.jsxs)("div", {
        className: lT.UX,
        children: [
            a ? (0, i.jsx)(lR, { widgetName: n, isCompact: s }) : (0, i.jsx)(lk, { guildId: t, isCompact: s }),
            (0, i.jsx)(U.$, {
                variant: "secondary",
                size: "sm",
                icon: a ? void 0 : ly.E,
                text: a ? N.intl.string(N.t.KY0ilj) : N.intl.string(X.default.jB1fWC),
                onClick: () => {
                    (0, ej.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([
                                l.e("120239"),
                                l.e("955410"),
                                l.e("132502"),
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
                    );
                },
            }),
        ],
    });
}
var lw = l(625903),
    lL = l(780964),
    lM = l(766075),
    lG = l(30370),
    lU = l(123894);
function lP() {
    let e = (0, y.bG)([lG.A], () => lG.A.getAccounts().some((e) => e.type === e8.fg2.SPOTIFY && e.showActivity));
    return (0, i.jsx)(C, {
        className: lU.w,
        title: N.intl.string(X.default.ULK65a),
        body: N.intl.format(e ? X.default.BLuvck : X.default["Ko3a0+"], { memberCount: 2 }),
        action: e
            ? null
            : (0, i.jsx)(U.$, {
                  variant: "secondary",
                  size: "sm",
                  icon: lw.SettingsIcon,
                  text: N.intl.string(N.t["3D5yo/"]),
                  onClick: () => (0, lM.openUserSettings)(lL.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING),
              }),
    });
}
function lO() {
    return (0, i.jsx)(C, {
        className: lU.w,
        title: N.intl.string(X.default.ULK65a),
        body: N.intl.format(X.default.ZQxU8v, { memberCount: 2 }),
    });
}
var lB = l(109487),
    lW = l(279543);
function lz(e) {
    let { isCompact: t } = e;
    return (0, i.jsxs)("div", {
        className: lW.qr,
        children: [
            (0, i.jsxs)("div", {
                className: lW.Os,
                children: [
                    (0, i.jsx)("span", {
                        className: lW.Kk,
                        children: (0, i.jsx)(R.RefreshIcon, {
                            size: "xxs",
                            color: c.A.colors.ICON_SUBTLE,
                            "aria-hidden": !0,
                        }),
                    }),
                    (0, i.jsx)(_.E, {
                        className: lW.Pf,
                        tag: "span",
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: N.intl.string(X.default["3/DOFo"]),
                    }),
                ],
            }),
            (0, i.jsxs)(t0.Anchor, {
                className: lW.al,
                href: t4.RQ.WEB_HOME,
                "aria-label": N.intl.string(X.default["jUr+wF"]),
                children: [
                    (0, i.jsx)("span", {
                        className: lW.Kk,
                        children: (0, i.jsx)(lB.L, { size: "xs", color: c.A.colors.ICON_STRONG, "aria-hidden": !0 }),
                    }),
                    !t &&
                        (0, i.jsx)(_.E, {
                            className: lW.G2,
                            tag: "span",
                            variant: "text-xs/medium",
                            color: "none",
                            children: N.intl.string(X.default.ZdPp2q),
                        }),
                ],
            }),
        ],
    });
}
var lF = l(65154),
    lH = l(329177),
    lK = l(242226);
function lq(e) {
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
        } = e,
        x = J(l, n, { showYouSuffix: d }),
        { user: h } = x;
    return null == h
        ? null
        : (0, i.jsxs)("div", {
              ref: m,
              "aria-hidden": u,
              inert: u,
              className: j()(lK.nM, { [lK.Bh]: d && !u, [lK.lR]: o }),
              children: [
                  (0, i.jsx)(lY, { guildId: l, user: h, identity: x, rank: a, listener: s }),
                  null != s &&
                      (0, i.jsxs)("div", {
                          className: j()(lK.Mx, { [lK.dA]: r }),
                          children: [
                              (0, i.jsx)(lF.S, { size: "xxs", color: c.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                              (0, i.jsx)(_.E, {
                                  variant: "text-sm/medium",
                                  color: "text-strong",
                                  children:
                                      ((t = s.plays), N.intl.formatToPlainString(X.default["7X+3f8"], { count: t })),
                              }),
                          ],
                      }),
                  null != s && !r && (0, i.jsx)(lZ, { artists: s.artists, artistCount: s.artist_count ?? null }),
              ],
          });
}
function lY(e) {
    let { guildId: t, user: l, identity: n, rank: a, listener: r } = e,
        d = s.useRef(null);
    return (0, i.jsx)(ey.A, {
        targetElementRef: d,
        user: l,
        guildId: t,
        children: (e) =>
            (0, i.jsxs)(k.D, {
                ...e,
                innerRef: d,
                className: lK.D_,
                children: [
                    null != a &&
                        (0, i.jsx)(D.A, { children: N.intl.formatToPlainString(X.default.I4JiAQ, { rank: a }) }),
                    (0, i.jsxs)("span", {
                        className: lK.R3,
                        children: [
                            (0, i.jsx)(w.eu, {
                                size: L._3.SIZE_32,
                                src: l.getAvatarURL(t, (0, L.FT)(L._3.SIZE_32)) ?? void 0,
                                "aria-hidden": !0,
                            }),
                            1 === a &&
                                (0, i.jsx)("span", {
                                    className: lK.ie,
                                    "aria-hidden": !0,
                                    children: (0, i.jsx)(lH.CrownIcon, { size: "xxs", color: "currentColor" }),
                                }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: lK.Dc,
                        children: [
                            (0, i.jsx)(E.D, {
                                variant: "heading-sm/semibold",
                                color: "text-default",
                                lineClamp: 1,
                                children: (0, i.jsx)(M.g, {
                                    name: n.displayName,
                                    colorString: n.member?.colorString ?? null,
                                    colorStrings: n.roleColorStrings,
                                }),
                            }),
                            (0, i.jsx)(lQ, { listener: r }),
                        ],
                    }),
                ],
            }),
    });
}
function l$(e, t) {
    return (0, i.jsx)(_.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: e }, t);
}
function lQ(e) {
    let { listener: t } = e,
        l = t?.latest_track_title;
    if (null == l) return null;
    let n = t?.latest_artist_name;
    return (0, i.jsx)(_.E, {
        variant: "text-xs/medium",
        color: "text-subtle",
        lineClamp: 1,
        children:
            null != n
                ? N.intl.format(X.default.QqaqBg, { trackTitle: l, artistName: n, highlightHook: l$ })
                : N.intl.format(X.default.ZMJ8Mt, { trackTitle: l, highlightHook: l$ }),
    });
}
function lV(e) {
    let { artist: t, notched: l } = e,
        [n, a] = s.useState(!1),
        r = null != t.artist_image_hash ? t4.RQ.IMAGE(t.artist_image_hash) : null;
    return (0, i.jsx)("span", {
        className: lK.sG,
        children: (0, i.jsx)(eP.Ay, {
            mask: l ? eP.l8[24] : eP.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null == r || n
                    ? (0, i.jsx)("span", {
                          className: lK.Ql,
                          children: (0, i.jsx)(tJ.MicrophoneIcon, { size: "xxs", color: c.A.colors.ICON_SUBTLE }),
                      })
                    : (0, i.jsx)("img", { className: lK.v2, src: r, alt: "", loading: "lazy", onError: () => a(!0) }),
        }),
    });
}
function lZ(e) {
    let { artists: t, artistCount: l } = e,
        n = t.slice(0, 3),
        s = (l ?? t.length) - n.length;
    return (0, i.jsx)("div", {
        className: lK.Rh,
        "aria-hidden": !0,
        children:
            n.length > 0 &&
            (0, i.jsxs)("div", {
                className: lK.W$,
                children: [
                    n.map((e, t) =>
                        (0, i.jsx)(
                            lV,
                            { artist: e, notched: s > 0 || t !== n.length - 1 },
                            `${e.artist_external_id}-${e.artist_image_hash}`,
                        ),
                    ),
                    s > 0 &&
                        (0, i.jsx)("span", {
                            className: lK.sG,
                            children: (0, i.jsx)(eP.Ay, {
                                mask: eP.Ay.Masks.SQUIRCLE,
                                width: 24,
                                height: 24,
                                children: (0, i.jsx)("div", {
                                    className: lK.ag,
                                    children: (0, i.jsx)(_.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: N.intl.formatToPlainString(X.default.bFIg0R, { count: s }),
                                    }),
                                }),
                            }),
                        }),
                ],
            }),
    });
}
var lX = l(897130);
function lJ(e) {
    let { guildId: t, isCompact: l, data: n, upsell: a } = e,
        r = n.top_listeners,
        d = (0, y.bG)([W.default], () => W.default.getCurrentUser()?.id),
        c = r.findIndex((e) => e.user_id === d),
        o = -1 === c ? null : r[c],
        u = s.useMemo(() => r.map((e) => e.user_id), [r]);
    (0, P.k6)(t, u);
    let { scrollerRef: m, userRowRef: x, floatingRowPosition: h } = $(),
        f = null != a,
        g = f ? null : h,
        p = null != g;
    return n.top_listeners.length < 2
        ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(lO, {}), a] })
        : (0, i.jsxs)("div", {
              className: lX.SY,
              children: [
                  (0, i.jsxs)(T.d_, {
                      className: j()(lX.p_, { [lX.w]: f }),
                      ref: m,
                      children: [
                          r.map((e, n) => {
                              let s = e.user_id === d;
                              return (0, i.jsx)(
                                  lq,
                                  {
                                      guildId: t,
                                      userId: e.user_id,
                                      listener: e,
                                      rank: n + 1,
                                      isCompact: l,
                                      isCurrentUser: s,
                                      shouldDimForCurrentUser: s && p,
                                      rowRef: s ? x : void 0,
                                  },
                                  e.user_id,
                              );
                          }),
                          !f &&
                              null != d &&
                              null == o &&
                              (0, i.jsx)(lq, {
                                  guildId: t,
                                  userId: d,
                                  listener: null,
                                  rank: null,
                                  isCompact: l,
                                  isCurrentUser: !0,
                                  shouldDimForCurrentUser: p,
                                  rowRef: x,
                              }),
                      ],
                  }),
                  f &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(H, { position: "bottom" }),
                              (0, i.jsx)("div", { className: lX.Kv, children: a }),
                          ],
                      }),
                  null != d &&
                      null != g &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(H, { position: g }),
                              (0, i.jsx)(K, {
                                  position: g,
                                  children: (0, i.jsx)(lq, {
                                      guildId: t,
                                      userId: d,
                                      listener: o,
                                      rank: -1 === c ? null : c + 1,
                                      isCompact: l,
                                      isCurrentUser: !0,
                                      shouldDimForCurrentUser: !1,
                                      isFloating: !0,
                                  }),
                              }),
                          ],
                      }),
              ],
          });
}
var l0 = l(717683);
function l1(e) {
    let { isCompact: t } = e;
    return (0, i.jsxs)("div", {
        className: l0.qV,
        "aria-hidden": !0,
        children: [
            (0, i.jsx)("div", {
                className: j()(l0.Dk, { [l0.yI]: t }),
                children: Array.from({ length: 10 }, (e, t) =>
                    (0, i.jsxs)(
                        "div",
                        {
                            className: l0.Nr,
                            children: [
                                (0, i.jsx)("div", { className: j()(l0.om, l0.xX) }),
                                (0, i.jsxs)("div", {
                                    className: l0.Qq,
                                    children: [
                                        (0, i.jsx)("div", { className: j()(l0.om, l0.DD) }),
                                        (0, i.jsx)("div", { className: j()(l0.om, l0.VA) }),
                                    ],
                                }),
                            ],
                        },
                        t,
                    ),
                ),
            }),
            (0, i.jsxs)("div", {
                className: j()(l0.yp, { [l0.Fl]: t }),
                children: [
                    (0, i.jsx)("div", { className: j()(l0.om, l0.Pl) }),
                    (0, i.jsx)("div", { className: j()(l0.om, l0._0) }),
                ],
            }),
        ],
    });
}
var l2 = l(432017),
    l6 = l(362704);
function l3(e) {
    let { song: t, isSelected: l, onSelect: n, itemProps: a } = e,
        r = null != t.cover_art_hash ? t4.RQ.IMAGE(t.cover_art_hash) : null,
        d = s.useMemo(
            () => ({
                kind: "song",
                shareUrl: t4.RQ.WEB_OPEN(t4.M0.TRACK, t.track_external_id),
                title: t.track_title ?? t.track_external_id,
                subtitle: t.artist_name,
                imageUrl: r,
            }),
            [t.track_external_id, t.track_title, t.artist_name, r],
        );
    return (0, i.jsxs)("div", {
        className: t3.Nr,
        children: [
            (0, i.jsxs)("button", {
                ...a,
                type: "button",
                className: j()(t3.MT, { [t3.tY]: l }),
                "aria-pressed": l,
                onClick: () => n(t.track_external_id),
                children: [
                    (0, i.jsx)(t1.R, {
                        src: r,
                        isCircular: !1,
                        FallbackIcon: l2.T,
                        children:
                            l &&
                            (0, i.jsx)("span", {
                                className: j()(t3.Lw, t3.Kp),
                                "aria-hidden": !0,
                                children: (0, i.jsx)(l6.Y, { size: "md", color: "currentColor" }),
                            }),
                    }),
                    null != t.track_title &&
                        (0, i.jsxs)("span", {
                            className: t3.Qq,
                            children: [
                                (0, i.jsx)(_.E, {
                                    className: t3.DD,
                                    tag: "span",
                                    variant: "text-sm/semibold",
                                    color: "text-default",
                                    lineClamp: 1,
                                    children: t.track_title,
                                }),
                                null != t.artist_name &&
                                    (0, i.jsx)(_.E, {
                                        className: t3.VA,
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
            (0, i.jsx)(t8, { target: d, tabIndex: a.tabIndex }),
        ],
    });
}
var l8 = l(196765);
let l4 = { view: "top_songs", isCompact: !1, canShowEmbed: !1, selectedTrackId: null },
    l7 = (0, l8.v)(() => ({ byWidgetId: {} }));
function l5(e, t) {
    l7.setState((l) => {
        let n = l.byWidgetId[e] ?? l4;
        return { byWidgetId: { ...l.byWidgetId, [e]: { ...n, ...t } } };
    });
}
function l9(e) {
    return l7((t) => t.byWidgetId[e]?.view ?? l4.view);
}
function ne(e) {
    return l7((t) => t.byWidgetId[e]?.isCompact ?? l4.isCompact);
}
function nt(e) {
    return l7((t) => t.byWidgetId[e]?.selectedTrackId ?? l4.selectedTrackId);
}
function nl(e, t) {
    (l7.getState().byWidgetId[e] ?? l4).view !== t && l5(e, { view: t, selectedTrackId: null });
}
function nn(e) {
    return e.track_external_id;
}
function ni(e) {
    let t,
        { guildId: l, widgetId: n, isCompact: a, data: r } = e,
        d = nt(n),
        c = l7((e) => e.byWidgetId[n]?.canShowEmbed ?? l4.canShowEmbed),
        o = s.useCallback(
            (e) => {
                let t;
                return (
                    (t = l7.getState().byWidgetId[n]?.selectedTrackId ?? null),
                    void l5(n, { selectedTrackId: t === e ? null : e })
                );
            },
            [n],
        ),
        u = s.useCallback(
            (e, t) => (0, i.jsx)(l3, { song: e, isSelected: e.track_external_id === d, onSelect: o, itemProps: t }),
            [d, o],
        );
    if (0 === r.ranked_songs.length) return null;
    let m = r.ranked_songs.find((e) => e.track_external_id === d) ?? null,
        x = la(r);
    return (0, i.jsxs)("div", {
        className: lE.U,
        children: [
            (0, i.jsx)(lf, {
                label: lv(lg.TOP_SONGS),
                items: r.ranked_songs,
                isCompact: a,
                getItemKey: nn,
                renderItem: u,
            }),
            null != m
                ? (0, i.jsx)(lm, { guildId: l, isCompact: a, canShowEmbed: c, song: m })
                : (0, i.jsx)(lu, {
                      isCompact: a,
                      headline:
                          (t = Math.round(r.listening_time_ms / ec.A.Millis.MINUTE)) < 1
                              ? null
                              : N.intl.formatToPlainString(X.default["+5b01q"], { minutes: t }),
                      detail:
                          r.distinct_listeners < 1
                              ? null
                              : N.intl.format(X.default.AzIhRB, {
                                    count: r.distinct_listeners,
                                    trend: li(x),
                                    countHook: ll,
                                }),
                      trend: x,
                  }),
        ],
    });
}
var ns = l(691885),
    na = l(109765);
function nr(e) {
    let { widgetId: t } = e,
        l = l9(t),
        n = s.useMemo(() => lj.map((e) => ({ id: e, label: lv(e), value: e })), []),
        a = s.useCallback(
            (e) => {
                nl(t, e);
            },
            [t],
        );
    return (0, i.jsx)("div", {
        className: na.L,
        children: (0, i.jsx)(ns.l, {
            selectionMode: "single",
            label: N.intl.string(X.default.hFYyGU),
            hideLabel: !0,
            fitContent: !0,
            options: n,
            value: l,
            onSelectionChange: a,
        }),
    });
}
var nd = l(871107);
function nc(e) {
    let { title: t } = e;
    return (0, i.jsxs)("div", {
        className: nd.$,
        children: [
            (0, i.jsx)("span", {
                className: nd.K,
                children: (0, i.jsx)(l2.T, { size: "xs", color: c.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
            }),
            (0, i.jsx)(f.q, { size: "md", children: t }),
        ],
    });
}
var no = l(77915),
    nu = l(756936);
function nm(e) {
    return e.default_title ?? N.intl.string(X.default["5xxUI2"]);
}
var nx = l(890497),
    nh = l(734057),
    nf = l(317525),
    ng = l(576705),
    nj = l(935208),
    np = l(44167);
l(321073);
var nv = l(485845),
    n_ = l(136722),
    nA = l(435183),
    nE = l(155718),
    nN = l(795816),
    nb = l(933958),
    nI = l(627363),
    nS = l(712440),
    nC = l(733110),
    ny = l(488926),
    nT = l(818023);
async function nk(e) {
    null == ee.A.getApplication(nT.NW) && (await (0, nI.TA)(nT.NW));
    let t = nb.Ay.getEmbeddedActivitiesForChannel(e).every((e) => e.applicationId !== nT.NW);
    return await (0, nN.su)({ channelId: e, applicationId: nT.NW, isStart: t, renderInFramePool: !0 });
}
async function nR(e) {
    let { channel: t, selectedRoleIds: l } = e,
        n = [];
    if (l.length > 0)
        for (let e of (n.push({ id: t.guild_id, type: nE.r2.ROLE, allow: ny.x3, deny: e8.xBc.USE_EMBEDDED_ACTIVITIES }),
        l))
            n.push({ id: e, type: nE.r2.ROLE, allow: e8.xBc.USE_EMBEDDED_ACTIVITIES, deny: ny.x3 });
    let i = await (0, nA.RT)(t.id, { permissionOverwrites: n });
    if (!i.ok) throw i;
}
let nD = [];
var nw = l(344351),
    nL = l(256693),
    nM = l(343030),
    nG = l(317608),
    nU = l(953538);
let nP = {
    [d.a.IMAGE_TEXT]: {
        View: function (e) {
            let { widget: t, guildSpaceMode: l, guildId: n } = e,
                { text: s, image_hash: a } = t.config,
                r = "edit" === l ? t.config.image : void 0,
                d = void 0 !== r ? r : null != a ? tC(n, t.id, a) : null;
            return (0, i.jsxs)("div", {
                className: tT.kL,
                children: [
                    null != d && (0, i.jsx)("img", { className: tT.Sl, src: d, alt: "" }),
                    null != s &&
                        (0, i.jsx)(_.E, {
                            variant: "text-md/normal",
                            color: "text-subtle",
                            className: tT.Qq,
                            children: s,
                        }),
                ],
            });
        },
        Edit: function (e) {
            let { widget: t, commit: l, cancel: n } = e,
                a = t.config,
                [r, c] = s.useState(a.title ?? ""),
                [o, x] = s.useState(a.text ?? ""),
                [h, f] = s.useState(a.image),
                [g, j] = s.useState(null),
                p = (0, y.bG)([ta.A], () => ta.A.getGuildId()),
                v = void 0 !== h ? h : null != a.image_hash && null != p ? tC(p, t.id, a.image_hash) : null;
            return (0, i.jsxs)(A.B, {
                gap: 16,
                children: [
                    (0, i.jsx)(t_.k, {
                        label: N.intl.string(N.t.gnwWrx),
                        value: r,
                        onChange: function (e) {
                            (j(null), c(e));
                        },
                        maxLength: 100,
                        showCharacterCount: !0,
                    }),
                    (0, i.jsx)(tp.D, {
                        label: N.intl.string(N.t.X4IxWL),
                        children: (0, i.jsxs)(A.B, {
                            gap: 16,
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            className: ty.B,
                            children: [
                                (0, i.jsxs)(A.B, {
                                    gap: 8,
                                    direction: "horizontal",
                                    children: [
                                        (0, i.jsx)(tN.A, {
                                            variant: "secondary",
                                            text: N.intl.string(N.t["MsUY/S"]),
                                            onChange: function (e) {
                                                (j(null), f(e));
                                            },
                                            maxFileSizeBytes: 0xa00000,
                                            onFileSizeError: () => (0, tE.A)(0xa00000),
                                        }),
                                        null != v &&
                                            (0, i.jsx)(u.m, {
                                                text: N.intl.string(N.t.N86XcP),
                                                ariaHidden: !0,
                                                children: (0, i.jsx)(m.K, {
                                                    variant: "critical-secondary",
                                                    icon: tA.TrashIcon,
                                                    onClick: function () {
                                                        (j(null), f(null));
                                                    },
                                                    "aria-label": N.intl.string(N.t.N86XcP),
                                                }),
                                            }),
                                    ],
                                }),
                                null != v && (0, i.jsx)("img", { className: ty.V, src: v, alt: "" }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(tv.f, {
                        label: N.intl.string(N.t.COGMNC),
                        value: o,
                        onChange: function (e) {
                            (j(null), x(e));
                        },
                        rows: 3,
                        autosize: !0,
                        maxLength: 500,
                        showCharacterCount: !0,
                    }),
                    null != g &&
                        (0, i.jsx)("div", {
                            role: "alert",
                            children: (0, i.jsx)(tn.w, { type: "critical", message: g, role: "none" }),
                        }),
                    (0, i.jsxs)(ti.e, {
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(U.$, { variant: "secondary", text: N.intl.string(N.t["ETE/oC"]), onClick: n }),
                            (0, i.jsx)(U.$, {
                                variant: "primary",
                                text: N.intl.string(N.t["R3BPH+"]),
                                onClick: function () {
                                    let e;
                                    if (
                                        ((e = void 0 !== h ? null !== h : null != a.image_hash),
                                        0 === o.length && !e && (j(N.intl.string(X.default.zleX9q)), 1))
                                    )
                                        return;
                                    let t = {
                                        type: d.a.IMAGE_TEXT,
                                        image_hash: a.image_hash,
                                        text: o.length > 0 ? o : null,
                                        title: r.length > 0 ? r : null,
                                    };
                                    (void 0 !== h && (t.image = h), l(t));
                                },
                            }),
                        ],
                    }),
                ],
            });
        },
        Title: function (e) {
            let { widget: t } = e;
            return (0, i.jsx)(f.q, { children: t.config.title ?? t.default_title ?? "" });
        },
    },
    [d.a.LEADERBOARD]: {
        View: function (e) {
            let t,
                { widget: l, hydration: n, guildId: a, guildSpaceMode: r } = e,
                d = eH(a, n?.status === "success" ? n.data : void 0),
                c = tf({ guildId: a, data: d, expanded: !1, column: l.position.column, enabled: "view" === r }),
                o = s.useCallback(
                    (e) => {
                        c(e?.closest("[data-guild-space-widget]") ?? null);
                    },
                    [c],
                );
            return (
                (t =
                    n?.status === "error"
                        ? (0, i.jsx)(S, {})
                        : null != d
                          ? (0, i.jsx)(e7, { guildId: a, data: d, column: l.position.column, disabled: "view" !== r })
                          : (0, i.jsx)(I, {})),
                (0, i.jsx)("div", { ref: o, children: t })
            );
        },
        Edit: function (e) {
            let { cancel: t } = e,
                l = (0, y.bG)([ta.A], () => ta.A.getGuildId()),
                n = (0, y.bG)([ts.A], () => ts.A.getGuild(l), [l]),
                a = (0, td.mN)(n),
                r = null != n && null != n.systemChannelId,
                d = null != n ? n.systemChannelFlags : null,
                [c, o] = s.useState(!1),
                [u, m] = s.useState(null),
                [x, h] = s.useState(!1),
                f = s.useCallback(async () => {
                    if (null == n || null == l || null == u || null == d) return void t();
                    (h(!1), o(!0));
                    try {
                        (await tt.Bo.patch({
                            url: e8.Rsh.GUILD(l),
                            body: { system_channel_flags: (0, te.lA)(d, tc, !u) },
                            rejectWithError: !0,
                        }),
                            (0, tr.q9)(l, tr.PY.LEADERBOARD_SYSTEM_MESSAGES, u),
                            t());
                    } catch (e) {
                        h(!0);
                    } finally {
                        o(!1);
                    }
                }, [n, l, u, d, t]),
                g = null == n || !r || null == d || c || !a;
            return (0, i.jsxs)(A.B, {
                gap: 16,
                children: [
                    (0, i.jsx)(tl.d, {
                        label: N.intl.string(X.default.v0iLIA),
                        description: N.intl.string(X.default["88c7ds"]),
                        checked: u ?? !(0, te.Lt)(d ?? 0, tc),
                        onChange: m,
                        disabled: g,
                    }),
                    !r && (0, i.jsx)(tn.w, { type: "warning", children: N.intl.string(X.default["1hsDpi"]) }),
                    x && (0, i.jsx)(tn.w, { type: "critical", children: N.intl.string(X.default["4FcF2j"]) }),
                    (0, i.jsxs)(ti.e, {
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(U.$, {
                                variant: "secondary",
                                text: N.intl.string(N.t["ETE/oC"]),
                                onClick: t,
                                disabled: c,
                            }),
                            (0, i.jsx)(U.$, {
                                variant: "primary",
                                text: N.intl.string(N.t["R3BPH+"]),
                                onClick: f,
                                disabled: g,
                                loading: c,
                            }),
                        ],
                    }),
                ],
            });
        },
        Title: function (e) {
            let { widget: t, hydration: l, guildId: n } = e,
                s = eH(n, l?.status === "success" ? l.data : void 0);
            return null == s
                ? (0, i.jsx)(f.q, { children: t.default_title ?? "" })
                : (0, i.jsx)(f.q, { children: ex(s) });
        },
        TitleIcon: function () {
            return (0, i.jsx)(o.TrophyIcon, { size: "xs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        },
        HeaderAccessory: function (e) {
            let { hydration: t, guildId: l } = e,
                n = eH(l, t?.status === "success" ? t.data : void 0);
            return null == n || em(n) ? null : (0, i.jsx)(th, { data: n });
        },
        HeaderActions: function (e) {
            let { hydration: t, guildId: l, column: n } = e,
                s = t?.status === "success" ? t.data : void 0,
                a = eH(l, s);
            return "mini" !== ef({ expanded: !1, column: n }) || (null != a && em(a))
                ? null
                : (0, i.jsx)(u.m, {
                      text: N.intl.string(N.t.dcl9MQ),
                      children: (0, i.jsx)(m.K, {
                          variant: "icon-only",
                          size: "sm",
                          icon: x._,
                          "aria-label": N.intl.string(N.t.dcl9MQ),
                          disabled: null == a,
                          onClick: function () {
                              null != a &&
                                  null != s &&
                                  (h.default.track(e8.HAw.LEADERBOARD_CLICK, {
                                      location: "expand",
                                      guild_id: l,
                                      leaderboard_state: eh(a),
                                      leaderboard_view: ef({ expanded: !1, column: n }),
                                      metric: eg(a.stat),
                                  }),
                                  (function (e) {
                                      let { guildId: t, data: l } = e,
                                          n = (e) => (0, i.jsx)(tj, { guildId: t, data: l, modalProps: e });
                                      (0, ej.openModalLazy)(() => Promise.resolve(n), {
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
            let { widget: t, hydration: l, guildId: n } = e;
            return null == l || "idle" === l.status || "loading" === l.status
                ? (0, i.jsx)(I, {})
                : "error" === l.status
                  ? (0, i.jsx)(S, {})
                  : (0, i.jsx)(t$, { guildId: n, data: l.data, title: tQ(t) });
        },
        Title: function (e) {
            let { widget: t } = e;
            return (0, i.jsx)(f.q, { children: tQ(t) });
        },
        TitleIcon: function () {
            return (0, i.jsx)(eG.GameControllerIcon, { size: "xs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
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
                            l5(t, { isCompact: l < 480, canShowEmbed: l >= 560 });
                        },
                        [t],
                    )),
                    (0, tk.g)(n, a, [t], { fireOnMount: !0 }),
                    s.useEffect(
                        () => () => {
                            l7.setState((e) => {
                                if (null == e.byWidgetId[t]) return e;
                                let l = { ...e.byWidgetId };
                                return (delete l[t], { byWidgetId: l });
                            });
                        },
                        [t],
                    ),
                    n),
                x = ne(c.id),
                h = l9(c.id),
                f = nt(c.id),
                { isContributing: g, isSpotifyConnected: j, hasFetchedConsents: p } = (0, no.MX)(d),
                v = "edit" === u,
                _ = o?.status === "success" && lp(o.data),
                A = !x && !v && !_,
                E =
                    "view" === u && p && !g
                        ? (0, i.jsx)(lD, { guildId: d, widgetName: nm(c), isCompact: x, isSpotifyConnected: j })
                        : null,
                N =
                    v || _ || o?.status !== "success" || h === lg.TOP_LISTENERS
                        ? null
                        : ((l = o.data),
                          null ==
                          (r =
                              l.ranked_songs.find((e) => e.track_external_id === f && null != e.cover_art_hash)
                                  ?.cover_art_hash ??
                              l.ranked_songs.find((e) => null != e.cover_art_hash)?.cover_art_hash)
                              ? null
                              : t4.RQ.IMAGE(r));
            return (0, i.jsxs)("div", {
                className: nu.rf,
                ref: m,
                children: [
                    null != N &&
                        (0, i.jsx)("div", {
                            className: nu.G,
                            "aria-hidden": !0,
                            children: (0, i.jsx)("img", { className: nu.LZ, src: N, alt: "" }),
                        }),
                    (0, i.jsx)("div", {
                        className: nu.Qs,
                        children: (0, i.jsx)("div", {
                            id: lA(c.id),
                            className: nu.nd,
                            role: A ? "tabpanel" : "group",
                            tabIndex: 0,
                            "aria-label": A ? void 0 : lv(h),
                            "aria-labelledby": A ? l_(c.id, h) : void 0,
                            children: (function () {
                                if (v) return (0, i.jsx)(l1, { isCompact: x });
                                if (null == o || "idle" === o.status || "loading" === o.status)
                                    return (0, i.jsx)(I, {});
                                if ("error" === o.status) return (0, i.jsx)(S, {});
                                if (_) return (0, i.jsx)(lP, {});
                                switch (h) {
                                    case lg.TOP_SONGS:
                                        return (0, i.jsx)(ni, {
                                            guildId: d,
                                            widgetId: c.id,
                                            isCompact: x,
                                            data: o.data,
                                        });
                                    case lg.TOP_ARTISTS:
                                        return (0, i.jsx)(lI, { isCompact: x, data: o.data });
                                    case lg.TOP_LISTENERS:
                                        return (0, i.jsx)(lJ, { guildId: d, isCompact: x, data: o.data, upsell: E });
                                }
                            })(),
                        }),
                    }),
                    h !== lg.TOP_LISTENERS && E,
                    (0, i.jsx)(lz, { isCompact: x }),
                ],
            });
        },
        Title: function (e) {
            let { widget: t, hydration: l, guildSpaceMode: n } = e,
                s = nm(t),
                a = l?.status === "success" && lp(l.data);
            return "edit" === n || a ? (0, i.jsx)(f.q, { size: "md", children: s }) : (0, i.jsx)(nc, { title: s });
        },
        ViewHeaderTrailing: function (e) {
            let { widget: t, hydration: l, title: n } = e,
                s = ne(t.id),
                a = l9(t.id);
            return l?.status === "success" && lp(l.data)
                ? null
                : s
                  ? (0, i.jsx)(nr, { widgetId: t.id })
                  : (0, i.jsx)(tX, {
                        label: n,
                        tabs: lj.map((e) => ({ id: e, label: lv(e) })),
                        selectedId: a,
                        panelId: lA(t.id),
                        getTabId: (e) => l_(t.id, e),
                        onSelect: (e) => nl(t.id, e),
                    });
        },
    },
    [d.a.WHITEBOARD]: {
        View: function (e) {
            let t,
                l,
                n = (0, np.n)(),
                a = (0, y.bG)(
                    [nh.A, ng.A],
                    () => {
                        let e = null != n ? nh.A.getChannel(n) : void 0;
                        return null != e && ng.A.can(e8.xBc.USE_EMBEDDED_ACTIVITIES, e);
                    },
                    [n],
                ),
                d = (0, y.bG)(
                    [nb.Ay],
                    () => {
                        let e = nb.Ay.getCurrentEmbeddedActivity();
                        return null == e ||
                            e.applicationId !== nT.NW ||
                            e.location.kind !== nw.T.GUILD_CHANNEL ||
                            e.location.channel_id !== n
                            ? null
                            : e;
                    },
                    [n],
                ),
                c = (0, y.bG)([nb.Ay], () => nb.Ay.isLaunchingActivity(), []),
                { authResolved: o, isAuthorized: u } =
                    ((t = (0, y.bG)(
                        [nC.default],
                        () => nC.default.getFetchStateForApplication(nT.NW) === nC.FetchState.FETCHED,
                        [],
                    )),
                    (l = (0, y.bG)(
                        [nC.default, ee.A],
                        () => {
                            let e = nC.default.getNewestTokenForApplication(nT.NW);
                            if (null == e) return !1;
                            let t = ee.A.getApplication(nT.NW),
                                l = t?.integrationTypesConfig?.[nv.b.USER_INSTALL]?.oauth2InstallParams?.scopes;
                            if (null == l) return !0;
                            let n = new Set(e.scopes);
                            return l.every((e) => n.has(e));
                        },
                        [],
                    )),
                    s.useEffect(() => {
                        (nC.default.getFetchStateForApplication(nT.NW) === nC.FetchState.NOT_FETCHED &&
                            nS.A.fetch([nT.NW]),
                            null == ee.A.getApplication(nT.NW) && (0, nI.TA)(nT.NW));
                    }, []),
                    { authResolved: t, isAuthorized: l }),
                m = s.useRef(!1);
            s.useEffect(() => {
                null == d && null != n && a && o && u && !m.current && ((m.current = !0), nk(n));
            }, [a, n, d, o, u]);
            let x = s.useCallback(() => {
                    null != n && ((m.current = !0), nk(n));
                }, [n]),
                h = null != n && o && !u;
            return null == n
                ? (0, i.jsx)(A.B, {
                      className: nU.kL,
                      align: "center",
                      justify: "center",
                      children: (0, i.jsx)(r, { alt: "", width: 200, height: 192 }),
                  })
                : a
                  ? (0, i.jsxs)("div", {
                        className: nU.kL,
                        children: [
                            null != d &&
                                (0, i.jsx)(nG.A, {
                                    frameId: (0, nL.Ri)(d),
                                    level: nM.A.WithinAppContent,
                                    className: nU.t$,
                                }),
                            null == d &&
                                h &&
                                (0, i.jsx)("div", {
                                    className: nU.P5,
                                    children: (0, i.jsx)(U.$, {
                                        variant: "secondary",
                                        text: N.intl.string(X.default.PSuly6),
                                        loading: c,
                                        onClick: x,
                                    }),
                                }),
                        ],
                    })
                  : (0, i.jsx)("div", {
                        className: nU.kL,
                        children: (0, i.jsx)("div", {
                            className: nU.m0,
                            children: (0, i.jsx)(_.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: N.intl.string(X.default["nXc/MQ"]),
                            }),
                        }),
                    });
        },
        Edit: function (e) {
            let { cancel: t } = e,
                l = (0, y.bG)([ta.A], () => ta.A.getGuildId()),
                n = nj.default.castGuildIdAsEveryoneGuildRoleId(l),
                a = (0, np.n)(),
                r = (0, y.bG)([nh.A], () => (null != a ? nh.A.getChannel(a) : void 0), [a]),
                d = (0, y.bG)([ng.A], () => null != r && ng.A.can(e8.xBc.MANAGE_ROLES, r), [r]),
                c = (0, y.bG)([nf.A], () => (null == l ? nD : nf.A.getSortedRoles(l).filter((e) => e.id !== n)), [
                    l,
                    n,
                ]),
                o = s.useMemo(() => {
                    let e;
                    return null != r
                        ? null != (e = r.permissionOverwrites[r.guild_id]) &&
                          n_.zy(e.deny, e8.xBc.USE_EMBEDDED_ACTIVITIES)
                            ? c
                                  .filter((e) => {
                                      let t = r.permissionOverwrites[e.id];
                                      return null != t && n_.zy(t.allow, e8.xBc.USE_EMBEDDED_ACTIVITIES);
                                  })
                                  .map((e) => e.id)
                            : []
                        : [];
                }, [r, c]),
                [u, m] = s.useState(null),
                [x, h] = s.useState(!1),
                [f, g] = s.useState(!1),
                j = u ?? o,
                p = s.useMemo(() => c.map((e) => ({ id: e.id, label: e.name, value: e.id })), [c]);
            async function v() {
                if (null != r) {
                    (g(!1), h(!0));
                    try {
                        (await nR({ channel: r, selectedRoleIds: j }), t());
                    } catch {
                        (h(!1), g(!0));
                    }
                }
            }
            return null == r
                ? null
                : (0, i.jsxs)(A.B, {
                      gap: 16,
                      children: [
                          (0, i.jsx)(nx.Z, {
                              selectionMode: "multiple",
                              label: N.intl.string(X.default.XXLbfv),
                              description: N.intl.string(X.default.XrpYIG),
                              placeholder: N.intl.string(X.default.pp6WeD),
                              options: p,
                              value: j,
                              onSelectionChange: function (e) {
                                  (g(!1), m(e));
                              },
                              disabled: !d || x,
                              fullWidth: !0,
                              wrapTags: !0,
                          }),
                          !d &&
                              (0, i.jsx)(tn.w, {
                                  type: "warning",
                                  message: N.intl.string(X.default.UPLtlA),
                                  role: "none",
                              }),
                          f &&
                              (0, i.jsx)("div", {
                                  role: "alert",
                                  children: (0, i.jsx)(tn.w, {
                                      type: "critical",
                                      message: N.intl.string(X.default.xyCJYs),
                                      role: "none",
                                  }),
                              }),
                          (0, i.jsxs)(ti.e, {
                              fullWidth: !0,
                              children: [
                                  (0, i.jsx)(U.$, {
                                      variant: "secondary",
                                      text: N.intl.string(N.t["ETE/oC"]),
                                      onClick: t,
                                      disabled: x,
                                  }),
                                  (0, i.jsx)(U.$, {
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
