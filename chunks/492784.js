l.d(t, { m: () => nM });
var n,
    i = l(477900),
    a = l(582128),
    s = l(62617);
function r(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, width: d, height: c, className: o, style: u } = e,
        m = a.useMemo(
            () => (0, s.H)({ width: d, height: c, intrinsicWidth: 288, intrinsicHeight: 192, style: u }),
            [d, c, u],
        );
    return (0, i.jsx)("img", {
        style: m,
        src: "https://cdn.discordapp.com/assets/content/b501ac4c5a78c462100d3870ce7ab50a78ea7d9b2af6b8ee7a08b11bab82fb01.svg",
        className: (0, s.Z)(o),
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
    N = l(660183),
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
    let { className: t, title: l, body: n, action: a } = e;
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
            a,
        ],
    });
}
var y = l(17928),
    T = l(364522),
    R = l(939249),
    k = l(663417),
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
function q(e) {
    let { position: t, children: l } = e;
    return (0, i.jsx)("div", { className: "top" === t ? F.sU : F._u, children: l });
}
var K = l(606072),
    Y = l(775602);
function $() {
    let [e, t] = a.useState(null),
        [l, n] = a.useState(null),
        [i, s] = a.useState("unknown"),
        r = (0, y.bG)([Y.Ay], () => Y.Ay.useReducedMotion);
    a.useEffect(() => {
        if (null == e || null == l) return;
        let t = new IntersectionObserver(
            (e) => {
                var t, l;
                let n,
                    i,
                    [a] = e;
                if (a?.rootBounds == null) return;
                let { clippedPx: r, floatTo: d } =
                    ((t = a.boundingClientRect),
                    (n = Math.max(0, (l = a.rootBounds).top - t.top)),
                    { clippedPx: n + (i = Math.max(0, t.bottom - l.bottom)), floatTo: n > i ? "top" : "bottom" });
                s(() => (r <= 1 ? "visible" : d));
            },
            { root: e, threshold: [0, 0.1, 0.5, 0.9, 1] },
        );
        return (t.observe(l), () => t.disconnect());
    }, [e, l]);
    let d = a.useCallback(() => {
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
        a = (0, Q.gn)(e, t, i?.colorStrings ?? null),
        s = Z.Ay.useName(e, void 0, n);
    return {
        user: n,
        member: i,
        roleColorStrings: a,
        name: s,
        displayName: l ? N.intl.formatToPlainString(X.default.subXXA, { name: s }) : s,
    };
}
var ee = l(587895),
    et = l(429913),
    el = l(311043),
    en = l(569926),
    ei = l(403362);
function ea(e, t) {
    return { id: e, name: N.intl.string(N.t.GIWFlF), iconUrl: void 0, coverUrl: void 0, isLoading: t };
}
function es(e) {
    let t = (0, et.A)(e),
        l = (0, y.yK)([ee.A], () => e.map((e) => ee.A.didFetchingApplicationFail(e))),
        n = a.useMemo(() => t.map((e) => e?.getCanonicalGameId() ?? void 0), [t]),
        i = a.useMemo(() => n.filter(ei.Vq), [n]);
    (0, en.x)(i);
    let s = (0, y.yK)([el.A], () => n.map((e) => (null != e ? el.A.getGame(e) : void 0))),
        r = (0, y.yK)([el.A], () => n.map((e) => null != e && (el.A.didFetchingFail(e) || el.A.hasNoData(e))));
    return a.useMemo(() => {
        let i = new Map();
        return (
            e.forEach((e, a) => {
                let d = t[a],
                    c = s[a],
                    o = null == d && !l[a],
                    u = null == c && null != n[a] && !r[a];
                null == d || u
                    ? i.set(e, ea(e, o || u))
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
    }, [e, t, l, n, s, r]);
}
function er(e, t) {
    return e.get(t) ?? ea(t, !1);
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
            let { default: a } = await Promise.all([
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
                l.e("252264"),
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
            return (l) => (0, i.jsx)(a, { ...l, guildId: e, requirement: t, description: n });
        },
        { modalKey: "guild-space-leaderboard-sharing" },
    );
}
var ev = l(823353);
function e_(e) {
    let { guildId: t, onActivitySharingClick: l } = e,
        {
            isSharingActivity: n,
            isSharingActivityInGuild: a,
            hasFetchedConsents: s,
            hasPersonalizationConsent: r,
            requirement: d,
        } = (0, K.T4)(t),
        c = !n || !a || (s && !r),
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
        m = a.useMemo(
            () => (0, s.H)({ width: d, height: c, intrinsicWidth: 24, intrinsicHeight: 24, style: u }),
            [d, c, u],
        );
    return (0, i.jsx)("img", {
        style: m,
        src: eA,
        srcSet: eE,
        className: (0, s.Z)(o),
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
        m = a.useMemo(
            () => (0, s.H)({ width: d, height: c, intrinsicWidth: 24, intrinsicHeight: 24, style: u }),
            [d, c, u],
        );
    return (0, i.jsx)("img", {
        style: m,
        src: eb,
        srcSet: eI,
        className: (0, s.Z)(o),
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
function eR(e, t) {
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
var ek = l(793169),
    eD = l(81466),
    ew = l(406810),
    eL = l(687966),
    eM = l(683063),
    eG = l(573435),
    eU = l(402860),
    eP = l(396583),
    eO = l(280450);
function eB(e, t) {
    let l = t.user_id,
        n = (0, y.bG)([eO.default], () => eO.default.getId() === l, [l]);
    return J(e, l, { showYouSuffix: n });
}
function eW(e, t) {
    let l = (0, y.bG)([W.default], () => W.default.getCurrentUser()?.id),
        {
            isSharingActivity: n,
            isSharingActivityInGuild: i,
            hasPersonalizationConsent: s,
            hasFetchedConsents: r,
        } = (0, K.T4)(e),
        d = !n || !i || !s;
    return a.useMemo(() => {
        if (!r) return;
        if (null == t || !d || null == l) return t;
        let e = t.entries.filter((e) => e.user_id !== l);
        return e.length === t.entries.length ? t : { ...t, entries: e.map((e, t) => ({ ...e, rank: t + 1 })) };
    }, [t, d, l, r]);
}
var ez = l(518477),
    eF = l(870087);
function eH(e) {
    let {
            guildId: t,
            entry: l,
            stat: n,
            games: s,
            isCurrentUser: r,
            shouldDimForCurrentUser: d,
            isFloating: c = !1,
            rowRef: o,
            onClick: u,
            metricWidth: m,
        } = e,
        x = eB(t, l),
        h = l.application_ids[0],
        f = null != h ? er(s, h) : void 0,
        g = l.user_id,
        p = a.useCallback(() => {
            (u?.(),
                (0, eU.openUserProfileModal)({
                    userId: g,
                    guildId: t,
                    tabSection: ez.RP.ACTIVITY,
                    scrollTarget: ez.bk.RECENT_ACTIVITY,
                }));
        }, [u, g, t]);
    return (0, i.jsxs)("div", {
        ref: o,
        "aria-hidden": c,
        inert: c,
        className: j()(eF.nM, { [eF.Bh]: r && !c, [eF.lR]: d }),
        children: [
            (0, i.jsx)(eq, { guildId: t, entry: l, identity: x, lastPlayedGame: f, onClick: u }),
            (0, i.jsx)(e$, { entry: l, stat: n, width: m, onClick: p }),
            (0, i.jsx)(eX, {
                name: x.name,
                applicationIds: l.application_ids,
                applicationCount: l.application_count,
                games: s,
                onClick: p,
            }),
        ],
    });
}
function eq(e) {
    let { guildId: t, entry: l, identity: n, lastPlayedGame: s, onClick: r } = e,
        d = a.useRef(null),
        c = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(eK, { rank: l.rank }),
                (0, i.jsx)(w.eu, {
                    size: L._3.SIZE_32,
                    src: n.user?.getAvatarURL(t, (0, L.FT)(L._3.SIZE_32)) ?? void 0,
                    className: eF.my,
                    "aria-hidden": !0,
                }),
                (0, i.jsxs)("div", {
                    className: eF.Dc,
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
                        null != s &&
                            (0, i.jsx)(_.E, {
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                lineClamp: 1,
                                children: N.intl.formatToPlainString(X.default.YuNVPY, { gameName: s.name }),
                            }),
                    ],
                }),
            ],
        });
    return null == n.user
        ? (0, i.jsx)("div", { className: eF.D_, children: c })
        : (0, i.jsx)(ey.A, {
              targetElementRef: d,
              user: n.user,
              guildId: t,
              children: (e) =>
                  (0, i.jsx)(R.D, {
                      ...e,
                      innerRef: d,
                      className: j()(eF.D_, eF.FB),
                      onClick: (t) => {
                          (r?.(), e.onClick(t));
                      },
                      children: c,
                  }),
          });
}
function eK(e) {
    let { rank: t } = e,
        l = N.intl.formatToPlainString(X.default.I4JiAQ, { rank: t });
    switch (t) {
        case 1:
            return (0, i.jsx)("div", { className: eF.Tm, children: (0, i.jsx)(ek.t, { alt: l }) });
        case 2:
            return (0, i.jsx)("div", { className: eF.Tm, children: (0, i.jsx)(eN, { alt: l }) });
        case 3:
            return (0, i.jsx)("div", { className: eF.Tm, children: (0, i.jsx)(eS, { alt: l }) });
        default:
            return (0, i.jsxs)("div", {
                className: eF.mH,
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
function eY(e) {
    let { stat: t } = e;
    switch (t) {
        case eu.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return (0, i.jsx)(eD.CalendarIcon, { size: "xxs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case eu.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            return (0, i.jsx)(ew.ClockIcon, { size: "xxs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case eu.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return (0, i.jsx)(eL.GameControllerIcon, { size: "xxs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        default:
            return null;
    }
}
function e$(e) {
    let { entry: t, stat: l, width: n, onClick: a } = e,
        { primary: s, secondary: r } = eR(t, l);
    return (0, i.jsxs)(R.D, {
        className: eF.TH,
        style: null != n ? { width: n } : void 0,
        "aria-label": N.intl.string(X.default.o6mBdl),
        onClick: a,
        children: [
            (0, i.jsxs)("div", {
                className: eF.bf,
                children: [
                    (0, i.jsx)(eY, { stat: l }),
                    (0, i.jsx)(_.E, { variant: "text-sm/medium", color: "text-subtle", children: s }),
                ],
            }),
            null != r && (0, i.jsx)(_.E, { variant: "text-xs/medium", color: "text-muted", children: r }),
        ],
    });
}
function eQ(e) {
    let { game: t, notched: l } = e;
    return (0, i.jsx)("span", {
        className: eF.rO,
        "aria-hidden": !0,
        children: (0, i.jsx)(eG.Ay, {
            mask: l ? eG.l8[24] : eG.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null != t.iconUrl
                    ? (0, i.jsx)("img", { className: eF.Gt, src: t.iconUrl, alt: "", "aria-hidden": !0 })
                    : (0, i.jsx)("span", { className: eF.ct, "aria-hidden": !0 }),
        }),
    });
}
function eV(e) {
    let { played: t, totalCount: l } = e,
        n = t.filter((e) => null != e.iconUrl || e.isLoading).slice(0, 2),
        a = l - n.length;
    return (0, i.jsxs)("div", {
        className: eF.Nw,
        children: [
            n.map((e, t) => (0, i.jsx)(eQ, { game: e, notched: a > 0 || t !== n.length - 1 }, `${e.id}-${t}`)),
            a > 0
                ? (0, i.jsx)("span", {
                      className: eF.rO,
                      children: (0, i.jsx)(eG.Ay, {
                          mask: eG.Ay.Masks.SQUIRCLE,
                          width: 24,
                          height: 24,
                          children: (0, i.jsx)("div", {
                              className: eF.p0,
                              children: (0, i.jsx)(_.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-subtle",
                                  children: N.intl.formatToPlainString(X.default.JiMMEd, { count: a }),
                              }),
                          }),
                      }),
                  })
                : null,
        ],
    });
}
function eZ(e) {
    let { played: t, totalCount: l, children: n } = e,
        a = t.filter((e) => null != e.iconUrl || e.isLoading);
    return (0, i.jsx)(eM.u, {
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
        asset: a.length > 0 ? (0, i.jsx)(eV, { played: a, totalCount: a.length }) : void 0,
        assetSize: a.length > 1 ? 43 : 24,
        children: n,
    });
}
function eX(e) {
    let { name: t, applicationIds: l, applicationCount: n, games: a, onClick: s } = e,
        r = ed(a, l);
    return (0, i.jsx)("div", {
        className: eF.ag,
        children: (0, i.jsx)(eZ, {
            played: r,
            totalCount: n,
            children: (0, i.jsx)(R.D, {
                className: j()(eF.Nw, eF.Dz),
                "aria-label": N.intl.formatToPlainString(X.default.o6mBdl, { name: t }),
                onClick: s,
                children: (0, i.jsx)(eV, { played: r, totalCount: n }),
            }),
        }),
    });
}
var eJ = l(189043);
function e0(e) {
    let { guildId: t, entries: l, stat: n, games: a, currentUserEntry: s, currentUserPillarRef: r, onClick: d } = e,
        c = {
            1: { column: eJ.HC, pillar: eJ.P5 },
            2: { column: eJ.th, pillar: eJ.Vk },
            3: { column: eJ.Ou, pillar: eJ.el },
        };
    return (0, i.jsx)("div", {
        className: eJ.pI,
        role: "list",
        "aria-label": N.intl.string(X.default.wKXLfQ),
        children: l.map((e, l) =>
            (0, i.jsx)(
                e1,
                {
                    guildId: t,
                    entry: e,
                    place: l + 1,
                    columnClassName: c[l + 1].column,
                    pillarClassName: c[l + 1].pillar,
                    stat: n,
                    games: a,
                    isCurrentUser: e === s,
                    currentUserPillarRef: e === s ? r : void 0,
                    onClick: d,
                },
                e.user_id,
            ),
        ),
    });
}
function e1(e) {
    let {
            guildId: t,
            entry: l,
            place: n,
            columnClassName: s,
            pillarClassName: r,
            stat: d,
            games: c,
            isCurrentUser: o,
            currentUserPillarRef: u,
            onClick: m,
        } = e,
        x = ed(c, l.application_ids),
        h = eB(t, l),
        { primary: f } = eR(l, d),
        g = 1 === n ? L._3.SIZE_48 : L._3.SIZE_40,
        p = a.useRef(null),
        v = 1 === n ? eC.b : 2 === n ? eN : eS,
        A = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: eJ.R3,
                    children: [
                        (0, i.jsx)(w.eu, {
                            size: g,
                            src: h.user?.getAvatarURL(t, (0, L.FT)(g)) ?? void 0,
                            "aria-hidden": !0,
                        }),
                        (0, i.jsx)(v, { className: eJ.dR, alt: "", ariaHidden: !0 }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: j()(eJ.DX, r),
                    children: [
                        (0, i.jsx)(E.D, {
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            lineClamp: 1,
                            className: eJ.IY,
                            children: (0, i.jsx)(M.g, {
                                name: h.displayName,
                                colorString: h.member?.colorString ?? null,
                                colorStrings: h.roleColorStrings,
                            }),
                        }),
                        (0, i.jsx)(eZ, {
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
        className: s,
        role: "listitem",
        ref: o ? u : void 0,
        children:
            null != h.user
                ? (0, i.jsx)(ey.A, {
                      targetElementRef: p,
                      user: h.user,
                      guildId: t,
                      children: (e) =>
                          (0, i.jsx)(R.D, {
                              ...e,
                              className: eJ.fs,
                              innerRef: p,
                              onClick: (t) => {
                                  (m?.(), e.onClick(t));
                              },
                              children: A,
                          }),
                  })
                : (0, i.jsx)("div", { className: eJ.fs, children: A }),
    });
}
var e2 = l(652215),
    e6 = l(219047);
function e3(e) {
    let { guildId: t, data: l, inModal: n = !1, column: s, disabled: r = !1 } = e,
        { stat: d, entries: c } = l,
        o = (0, y.bG)([W.default], () => W.default.getCurrentUser()?.id),
        u = a.useMemo(() => c.find((e) => e.user_id === o) ?? null, [c, o]),
        m = a.useMemo(() => {
            let e = c.slice(0, 20);
            return null == u || e.includes(u) ? e : [...e, u];
        }, [c, u]),
        x = a.useMemo(() => Array.from(new Set(m.map((e) => e.user_id))), [m]);
    (0, P.k6)(t, x);
    let f = eg(d),
        g = es(a.useMemo(() => Array.from(new Set(m.flatMap((e) => e.application_ids))), [m])),
        p = em(l),
        v = eh(l),
        _ = "podium" === v,
        A = ef({ expanded: n, column: s }),
        E = [m[0], m[1], m[2]],
        { scrollerRef: b, scrollerNode: S, userRowRef: C, floatingRowPosition: k, scrollToUserRow: D } = $(),
        w = (function (e) {
            let [t, l] = a.useState(!1);
            return (
                a.useEffect(() => {
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
        M = null != k,
        G = a.useMemo(() => {
            let e = null == u || m.includes(u) ? m : [...m, u];
            return e.length > 0 ? e : m;
        }, [m, u]),
        { metricMeasureRef: U, metricWidth: O } = (function () {
            let [e, t] = a.useState(null),
                [l, n] = a.useState(null);
            return (
                a.useEffect(() => {
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
            className: e6.V$,
            "aria-hidden": !0,
            children: G.map((e) => (0, i.jsx)(e$, { entry: e, stat: d }, e.user_id)),
        });
    !(function (e) {
        let {
                guildId: t,
                leaderboardLength: l,
                leaderboardState: n,
                leaderboardView: i,
                metric: s,
                isAtEnd: r,
                isEmpty: d,
                disabled: c = !1,
            } = e,
            o = a.useRef(null),
            u = `${t}:${l}:${n}:${i}:${s}`,
            m = a.useCallback(() => {
                o.current !== u &&
                    ((o.current = u),
                    h.default.track(e2.HAw.LEADERBOARD_END_IMPRESSION, {
                        guild_id: t,
                        leaderboard_length: l,
                        leaderboard_state: n,
                        leaderboard_view: i,
                        metric: s,
                    }));
            }, [t, u, l, n, i, s]);
        a.useEffect(() => {
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
    let z = a.useCallback(
            (e) => {
                r ||
                    h.default.track(e2.HAw.LEADERBOARD_CLICK, {
                        location: e,
                        guild_id: t,
                        leaderboard_state: v,
                        leaderboard_view: A,
                        metric: f,
                    });
            },
            [t, v, A, f, r],
        ),
        F = a.useCallback(
            (e) => {
                let l = e === u;
                return (0, i.jsx)(
                    eH,
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
              className: e6.Cm,
              children: (0, i.jsx)(e_, { guildId: t, onActivitySharingClick: () => z("activity_sharing") }),
          })
        : null == O
          ? (0, i.jsxs)("div", { className: e6.rf, children: [B, (0, i.jsx)(I, {})] })
          : (0, i.jsxs)("div", {
                className: e6.rf,
                children: [
                    B,
                    (0, i.jsxs)("div", {
                        className: e6.SY,
                        children: [
                            (0, i.jsxs)(T.d_, {
                                className: j()(e6.p_, { [e6.zE]: n, [e6.Ng]: L }),
                                ref: b,
                                children: [
                                    _ &&
                                        (0, i.jsx)(e0, {
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
                            (null != u && null != k) || (L && !w)
                                ? (0, i.jsx)(H, { position: "top" !== k || L ? "bottom" : "top" })
                                : null,
                            null != u &&
                                null != k &&
                                (0, i.jsx)(q, {
                                    position: k,
                                    children: (0, i.jsx)(R.D, {
                                        className: e6.Po,
                                        "aria-label": N.intl.string(X.default.d0Z8kd),
                                        onClick: D,
                                        children: (0, i.jsx)(eH, {
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
                            L && (0, i.jsx)(e4, { guildId: t, onActivitySharingClick: () => z("activity_sharing") }),
                        ],
                    }),
                    (0, i.jsx)(e8, { computedAt: l.computed_at, inModal: n }),
                ],
            });
}
function e8(e) {
    let { computedAt: t, inModal: l } = e,
        n = (0, i.jsxs)("div", {
            className: e6.z8,
            children: [
                (0, i.jsx)(k.RefreshIcon, { size: "xxs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 }),
                (0, i.jsx)(_.E, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: N.intl.string(X.default["/nma+a"]),
                }),
            ],
        });
    return null == t
        ? (0, i.jsx)("div", { className: e6.qr, children: n })
        : (0, i.jsx)("div", {
              className: j()(e6.qr, { [e6.zE]: l }),
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
function e4(e) {
    let { guildId: t, onActivitySharingClick: l } = e,
        {
            isSharingActivity: n,
            isSharingActivityInGuild: s,
            hasPersonalizationConsent: r,
            requirement: d,
        } = (0, K.T4)(t),
        o = null != d,
        u = (0, y.bG)([B.A], () => B.A.getStatus() === e2.clD.INVISIBLE),
        m = N.intl.string(X.default.toxuHd),
        x = !1;
    n && s
        ? r
            ? u && ((m = N.intl.string(X.default.PTDDhW)), (x = !0))
            : (m = N.intl.string(X.default.mTARYx))
        : (m = N.intl.string(X.default["8y885d"]));
    let [h] = a.useState(o),
        [f] = a.useState(x),
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
              className: e6.Xx,
              children: [
                  (0, i.jsxs)("div", {
                      className: e6.kd,
                      children: [
                          (0, i.jsxs)("div", {
                              className: e6.nk,
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
                              className: e6.SA,
                              "aria-hidden": !0,
                              status: u ? e2.clD.INVISIBLE : void 0,
                          }),
                          (0, i.jsxs)("div", {
                              className: e6.ko,
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
                                      className: e6.LF,
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
                          className: e6.rl,
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
                              (0, O.A)({ nextStatus: e2.clD.ONLINE, prevStatus: e2.clD.INVISIBLE });
                          },
                      }),
              ],
          });
}
var e7 = l(665260),
    e5 = l(636537),
    e9 = l(193249),
    te = l(683071),
    tt = l(825484),
    tl = l(71393),
    tn = l(967198),
    ti = l(49303),
    ta = l(313627);
let ts = e2.ogj.SUPPRESS_GAMING_LEADERBOARD_NOTIFICATIONS;
var tr = l(224640),
    td = l(20742),
    tc = l(885386),
    to = l(515746);
function tu(e) {
    let { data: t } = e,
        l = (0, eo.K)(t.stat),
        {
            ended: n,
            endDate: s,
            badgeLabel: r,
        } = (function (e) {
            let t = (e + ec.A.Seconds.WEEK) * ec.A.Millis.SECOND,
                [l, n] = a.useState(() => Date.now()),
                i = t - l,
                s = i <= 0,
                r = i - (Math.ceil(i / ec.A.Millis.DAY) - 1) * ec.A.Millis.DAY;
            return (
                (0, eP.A)(() => n(Date.now()), s ? null : r),
                a.useMemo(
                    () => ({
                        ended: s,
                        endDate: new Date(t),
                        badgeLabel: s
                            ? N.intl.string(X.default["J8r/7L"])
                            : N.intl.formatToPlainString(X.default["PuaR+2"], { days: Math.ceil(i / ec.A.Millis.DAY) }),
                    }),
                    [s, t, i],
                )
            );
        })(t.week_start_ts),
        d = tc.PZ.useSetting(),
        c = 2 > (0, z.m_)(s, new Date()) ? (0, z.mk)(s, !1, d).toLowerCase() : (0, z.i$)(s, "L LT", d).toLowerCase(),
        o = n
            ? N.intl.format(X.default.kG9XmM, { endedAt: c, nextStatName: (0, eo.K)(t.next_stat).name })
            : N.intl.format(X.default["X+VLqi"], { statQuestion: l.question, endsAt: c });
    return (0, i.jsx)(eM.u, {
        title: l.name,
        body: o,
        position: "top",
        children: (0, i.jsx)("div", {
            className: j()(to.qS, n ? to.yM : to.Qk),
            tabIndex: 0,
            children: (0, i.jsx)(_.E, {
                variant: "text-xs/semibold",
                color: n ? "text-muted" : "text-brand",
                children: r,
            }),
        }),
    });
}
function tm(e) {
    let { guildId: t, data: l, expanded: n, column: i, enabled: s = !0 } = e,
        [r, d] = a.useState(null),
        c = a.useRef(null),
        o = a.useRef({ guildId: t, data: l, expanded: n, column: i });
    a.useEffect(() => {
        o.current = { guildId: t, data: l, expanded: n, column: i };
    }, [t, l, n, i]);
    let u = a.useCallback((e) => {
        let t = c.current;
        if (null == t) return;
        c.current = null;
        let l = Date.now() - t;
        if (l < 250) return;
        let n = o.current;
        null != n.data &&
            h.default.track(
                e2.HAw.LEADERBOARD_HOVER,
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
        a.useEffect(() => {
            if (null != r && s)
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
        }, [r, s, u]),
        a.useCallback((e) => {
            d(e);
        }, [])
    );
}
var tx = l(460614);
function th(e) {
    let { guildId: t, data: l, modalProps: n } = e,
        a = eW(t, l),
        s = tm({ guildId: t, data: a, expanded: !0 });
    return null == a
        ? null
        : (0, i.jsx)(tr.d, {
              size: "lg",
              "aria-label": ex(a),
              ...n,
              children: (0, i.jsxs)("div", {
                  ref: s,
                  children: [
                      (0, i.jsxs)("div", {
                          className: tx.wx,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: tx.LD,
                                  children: [
                                      (0, i.jsx)(o.TrophyIcon, {
                                          size: "xs",
                                          color: c.A.colors.ICON_SUBTLE,
                                          "aria-hidden": !0,
                                      }),
                                      (0, i.jsx)(E.D, {
                                          variant: "heading-sm/medium",
                                          className: tx.DD,
                                          children: ex(a),
                                      }),
                                      (0, i.jsx)(tu, { data: a }),
                                  ],
                              }),
                              (0, i.jsx)(td.s_, {}),
                          ],
                      }),
                      (0, i.jsx)("div", {
                          className: tx.rf,
                          children: (0, i.jsx)(e3, { guildId: t, data: a, inModal: !0 }),
                      }),
                  ],
              }),
          });
}
var tf = l(452027),
    tg = l(103557),
    tj = l(95477),
    tp = l(241326),
    tv = l(2553),
    t_ = l(405810),
    tA = l(488428),
    tE = l(776231);
let tN = (0, l(676279).cy)();
function tb(e, t, l) {
    let n = l.startsWith("a_"),
        i = n ? (tN ? "webp" : "gif") : tN ? "webp" : "jpg",
        { CDN_HOST: a, API_ENDPOINT: s } = window.GLOBAL_ENV,
        r = e2.Rsh.GUILD_SPACE_IMAGE_TEXT_WIDGET_IMAGE(e, t, l, i),
        d = null != a ? `https://${a}${r}` : location.protocol + s + r,
        c = { size: (0, tE.kr)(500 * (0, tE.mZ)()) };
    return (
        "jpg" === i && (c.quality = "lossless"), "webp" === i && n && (c.animated = !0), (d += `?${tA.stringify(c)}`)
    );
}
var tI = l(868602),
    tS = l(445187),
    tC = l(770178),
    ty = l(104171),
    tT = l(889227),
    tR = l(427262),
    tk = l(950305),
    tD = l(409626),
    tw = l(692969),
    tL = l(788593),
    tM = l(948852),
    tG = l(365611);
function tU(e) {
    let { totalUsers: t, gameName: l } = e,
        n = N.intl.formatToPlainString(X.default["XaT+x0"], { count: t, gameName: l });
    return (0, i.jsxs)("div", {
        className: tM.Fk,
        role: "img",
        "aria-label": n,
        children: [
            (0, i.jsx)(tk.UserIcon, {
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
function tP(e) {
    let { entry: t, games: l } = e,
        { name: n, coverUrl: a, isLoading: s } = er(l, t.application_id),
        r = (0, tw.A)({
            location: "PopularGamesGameCard",
            applicationId: t.application_id,
            source: tD.GameProfileSources.GuildSpacePopularGames,
            trackEntryPointImpression: !0,
        }),
        d = null != r;
    if (s)
        return (0, i.jsx)("div", {
            className: tM.Nr,
            role: "listitem",
            children: (0, i.jsx)("div", { className: tG.mD }),
        });
    let c = (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(u.m, {
                text: n,
                ariaHidden: !0,
                children: (0, i.jsx)("div", {
                    className: j()(tG.PY, { [tG.vk]: d, [tG.iL]: d && null != a }),
                    children: (0, i.jsx)(tL.R, { imageSrc: a, gameName: n }),
                }),
            }),
            (0, i.jsx)(_.E, { variant: "text-sm/semibold", color: "text-default", lineClamp: 1, children: n }),
        ],
    });
    return (0, i.jsxs)("div", {
        className: tM.Nr,
        role: "listitem",
        children: [
            d
                ? (0, i.jsx)(R.D, {
                      className: j()(tM.LO, tM.vk),
                      onClick: r,
                      "aria-label": N.intl.formatToPlainString(N.t["8QLQB+"], { gameName: n }),
                      children: c,
                  })
                : (0, i.jsx)("div", { className: tM.LO, children: c }),
            (0, i.jsx)(tU, { totalUsers: t.total_users, gameName: n }),
        ],
    });
}
var tO = l(347661),
    tB = l(57129),
    tW = l(560328);
function tz(e) {
    let { guildId: t, requirement: l } = e;
    return (0, i.jsx)(C, {
        className: tW.p$,
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
function tF(e) {
    let { guildId: t, requirement: l } = e;
    return (0, i.jsxs)("div", {
        className: tW.UX,
        children: [
            (0, i.jsxs)("div", {
                className: tW.tD,
                children: [
                    (0, i.jsx)(E.D, {
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        lineClamp: 1,
                        children: N.intl.string(tB.default.WhdCGP),
                    }),
                    (0, i.jsx)(_.E, {
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        lineClamp: 2,
                        children:
                            l === K.kG.ACTIVITY_SHARING
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
function tH(e) {
    let { guildId: t, memberIds: l, totalUsers: n, totalGames: a, isCompact: s } = e,
        r = s ? 2 : 4,
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
        className: tW.qr,
        children: [
            (0, i.jsx)(_.E, {
                className: tW.z,
                variant: "text-xs/medium",
                color: "text-subtle",
                lineClamp: 1,
                children: N.intl.format(X.default.ED2GDQ, { memberCount: n, gameCount: a }),
            }),
            d.length > 0 &&
                (0, i.jsx)("div", {
                    className: tW.WM,
                    children: (0, i.jsx)(ty.Ay, {
                        users: d,
                        guildId: t,
                        size: ty.DN.SIZE_24,
                        max: d.length,
                        renderUser: function (e) {
                            if (!(e instanceof tT.A)) return null;
                            let l = Z.Ay.getNickname(t, void 0, e) ?? tR.Ay.getName(e);
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
                                className: tW.ju,
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
function tq(e) {
    let { guildId: t, data: l, title: n } = e,
        {
            ref: s,
            visibleCount: r,
            isCompact: d,
        } = (function () {
            let e = a.useRef(null),
                [t, l] = a.useState({ visibleCount: 5, isCompact: !1 }),
                n = a.useCallback((e) => {
                    let { width: t } = e.contentRect,
                        n = Math.max(1, Math.min(5, Math.floor((t - 32 + 12) / 108))),
                        i = t < 480;
                    l((e) => (e.visibleCount === n && e.isCompact === i ? e : { visibleCount: n, isCompact: i }));
                }, []);
            return ((0, tC.g)(e, n, [], { fireOnMount: !0 }), { ref: e, ...t });
        })(),
        { requirement: c } = (0, K.T4)(t),
        o = null != c,
        u = (0, y.bG)([W.default], () => W.default.getCurrentUser()?.id),
        m = a.useMemo(() => (o ? l.user_ids.filter((e) => e !== u) : l.user_ids), [l.user_ids, o, u]),
        x = a.useMemo(() => ({ ...l, user_ids: m }), [l, m]),
        h = (0, tO.m)(x),
        f = h ? [] : x.user_ids;
    (0, P.k6)(t, f);
    let g = a.useMemo(() => x.games.map((e) => e.application_id), [x.games]),
        j = es(g),
        p = a.useMemo(() => g.map((e) => j.get(e)?.coverUrl).find(ei.Vq) ?? null, [j, g]),
        v = null;
    return (
        (v = h
            ? (0, i.jsx)(tz, { guildId: t, requirement: c })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsxs)("div", {
                          className: tW.Qs,
                          children: [
                              null != p
                                  ? (0, i.jsx)("div", {
                                        className: tW.G,
                                        children: (0, i.jsx)("img", { className: tW.LZ, src: p, alt: "" }),
                                    })
                                  : null,
                              (0, i.jsx)("div", {
                                  className: tW.ag,
                                  role: "list",
                                  "aria-label": n,
                                  children: x.games
                                      .slice(0, r)
                                      .map((e) => (0, i.jsx)(tP, { entry: e, games: j }, e.application_id)),
                              }),
                          ],
                      }),
                      (0, i.jsxs)("div", {
                          className: tW.sQ,
                          children: [
                              null != c && (0, i.jsx)(tF, { guildId: t, requirement: c }),
                              (0, i.jsx)(tH, {
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
        (0, i.jsx)("div", { className: tW.rf, ref: s, children: v })
    );
}
function tK(e) {
    return e.default_title ?? N.intl.string(X.default.GZsvDx);
}
var tY = l(650583),
    t$ = l(684343);
function tQ(e) {
    let { label: t, tabs: l, selectedId: n, panelId: s, getTabId: r, onSelect: d } = e,
        c = a.useCallback((e) => {
            let t,
                l = e.currentTarget,
                n = l.closest('[role="tablist"]');
            if (null == n) return;
            let i = Array.from(n.querySelectorAll('[role="tab"]')),
                a = i.indexOf(l);
            if (-1 !== a && 0 !== i.length) {
                switch (e.key) {
                    case tY.dh.ARROW_RIGHT:
                    case tY.dh.ARROW_DOWN:
                        t = (a + 1) % i.length;
                        break;
                    case tY.dh.ARROW_LEFT:
                    case tY.dh.ARROW_UP:
                        t = (a - 1 + i.length) % i.length;
                        break;
                    case tY.dh.HOME:
                        t = 0;
                        break;
                    case tY.dh.END:
                        t = i.length - 1;
                        break;
                    default:
                        return;
                }
                (e.preventDefault(), i[t]?.focus());
            }
        }, []);
    return (0, i.jsx)("div", {
        className: t$.vR,
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
                    className: t$.Mf,
                    "aria-selected": t,
                    "aria-controls": s,
                    tabIndex: t ? 0 : -1,
                    onClick: () => d(e.id),
                    onKeyDown: c,
                    children: (0, i.jsx)(_.E, {
                        className: t$.Pf,
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
var tV = l(831544),
    tZ = l(28863),
    tX = l(148166),
    tJ = l(427209),
    t0 = l(294454),
    t1 = l(605810);
function t2(e) {
    let { target: t, tabIndex: n } = e;
    return (0, i.jsx)("div", {
        className: t1.ql,
        children: (0, i.jsx)(u.m, {
            text: N.intl.string(N.t.RDE0Sc),
            ariaHidden: !0,
            children: (0, i.jsx)(m.K, {
                icon: tJ.A,
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
                                l.e("537596"),
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
                                l.e("611523"),
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
                                l.e("252264"),
                                l.e("183534"),
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
                                l.e("935715"),
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
                                l.e("444376"),
                                l.e("32661"),
                                l.e("187856"),
                                l.e("334127"),
                                l.e("696123"),
                                l.e("400954"),
                                l.e("610449"),
                                l.e("32781"),
                                l.e("238412"),
                                l.e("8563"),
                                l.e("499941"),
                                l.e("693832"),
                                l.e("488990"),
                                l.e("577084"),
                                l.e("332470"),
                                l.e("170653"),
                                l.e("545527"),
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
                                l.e("130674"),
                                l.e("959669"),
                                l.e("220518"),
                                l.e("371482"),
                                l.e("126780"),
                                l.e("360781"),
                                l.e("88160"),
                                l.e("631825"),
                                l.e("329218"),
                                l.e("622825"),
                                l.e("851243"),
                                l.e("748015"),
                                l.e("278424"),
                                l.e("844780"),
                                l.e("237834"),
                                l.e("807771"),
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
                        { stackingBehavior: "stack", modalKey: t0.aU },
                    );
                },
            }),
        }),
    });
}
var t6 = l(272984);
function t3(e) {
    let { artist: t, itemProps: l } = e,
        n = null != t.artist_image_hash ? t6.RQ.IMAGE(t.artist_image_hash) : null,
        s = a.useMemo(
            () => ({
                kind: "artist",
                shareUrl: t6.RQ.WEB_OPEN(t6.M0.ARTIST, t.artist_external_id),
                title: t.artist_name ?? t.artist_external_id,
                subtitle: null,
                imageUrl: n,
            }),
            [t.artist_external_id, t.artist_name, n],
        ),
        r = (0, i.jsx)(tX.R, { src: n, isCircular: !0, FallbackIcon: tV.MicrophoneIcon });
    return null == t.artist_name
        ? (0, i.jsx)("div", { className: t1.Nr, children: (0, i.jsx)("div", { ...l, className: t1.MT, children: r }) })
        : (0, i.jsxs)("div", {
              className: t1.Nr,
              children: [
                  (0, i.jsxs)(tZ.Anchor, {
                      ...l,
                      className: t1.MT,
                      href: s.shareUrl,
                      useDefaultUnderlineStyles: !1,
                      children: [
                          r,
                          (0, i.jsx)("span", {
                              className: t1.Qq,
                              children: (0, i.jsx)(_.E, {
                                  className: t1.DD,
                                  tag: "span",
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  lineClamp: 2,
                                  children: t.artist_name,
                              }),
                          }),
                      ],
                  }),
                  (0, i.jsx)(t2, { target: s, tabIndex: l.tabIndex }),
              ],
          });
}
var t8 = l(872351),
    t4 = l(708988),
    t7 = l(628137);
let t5 = "none",
    t9 = (e, t) => (0, i.jsx)(_.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: e }, t);
function le(e) {
    return e;
}
function lt(e) {
    return e?.direction ?? t5;
}
function ll(e) {
    if (null == e) return null;
    let t = Math.round(Math.abs(e));
    return 0 === t
        ? null
        : { direction: e > 0 ? "up" : "down", label: N.intl.formatToPlainString(X.default["h+LUpk"], { percent: t }) };
}
function ln(e) {
    return ll(null != e.plays_trend_pct ? 100 * e.plays_trend_pct : null);
}
var li = l(633099);
function la(e) {
    let { trend: t } = e,
        l = "up" === t.direction ? t8.z : t4.M;
    return (0, i.jsxs)("span", {
        className: li.GW,
        children: [
            (0, i.jsx)(l, {
                className: j()({ [li.$J]: "up" === t.direction, [li.KW]: "down" === t.direction }),
                size: "xxs",
                color: "currentColor",
                "aria-hidden": !0,
            }),
            (0, i.jsx)(_.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: t.label }),
        ],
    });
}
function ls(e) {
    var t;
    let { guildId: l, song: n } = e,
        s = a.useMemo(() => (n.facepile_user_ids ?? []).slice(0, 3), [n.facepile_user_ids]);
    (0, P.k6)(l, s);
    let r = (0, y.yK)([W.default], () => s.map((e) => W.default.getUser(e)), [s]),
        d = a.useMemo(() => r.filter((e) => null != e), [r]);
    if (0 === d.length) return null;
    let c = n.unique_listeners - d.length;
    return (0, i.jsx)("span", {
        className: li.WM,
        role: "group",
        "aria-label":
            ((t = n.unique_listeners),
            N.intl.formatToPlainString(X.default.AzIhRB, { count: t, trend: t5, countHook: le })),
        children: (0, i.jsx)(ty.Ay, {
            users: d,
            guildId: l,
            size: ty.DN.SIZE_24,
            max: d.length,
            count: n.unique_listeners,
            hideMoreUsers: c <= 0,
            renderMoreUsers: () =>
                (0, i.jsx)("span", {
                    className: li.ju,
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
function lr(e) {
    let { trackExternalId: t } = e,
        [l, n] = a.useState(!1);
    return (0, i.jsxs)("div", {
        className: li.aF,
        children: [
            (0, i.jsx)(t7.A, {
                resourceType: t6.M0.TRACK,
                resourceId: t,
                onLoad: () => n(!0),
                allowEncryptedMedia: !0,
            }),
            !l && (0, i.jsx)("div", { className: li.Ls, "aria-hidden": !0 }),
        ],
    });
}
function ld(e) {
    let { isCompact: t, headline: l, detail: n, trend: a } = e;
    return null == l && null == n && null == a
        ? null
        : (0, i.jsx)("div", {
              className: j()(li.yp, { [li.Fl]: t }),
              children: (0, i.jsxs)("div", {
                  className: li.QD,
                  children: [
                      null != l &&
                          (0, i.jsx)(_.E, {
                              tag: "div",
                              variant: "heading-xl/semibold",
                              color: "text-default",
                              children: l,
                          }),
                      (0, i.jsxs)("div", {
                          className: li._0,
                          children: [
                              null != n &&
                                  (0, i.jsx)(_.E, {
                                      tag: "span",
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: n,
                                  }),
                              null != a && (0, i.jsx)(la, { trend: a }),
                          ],
                      }),
                  ],
              }),
          });
}
function lc(e) {
    var t;
    let { guildId: l, isCompact: n, canShowEmbed: a, song: s } = e,
        r = ll(s.plays_change_percent);
    return (0, i.jsxs)("div", {
        className: j()(li.yp, { [li.Fl]: n }),
        children: [
            a && (0, i.jsx)(lr, { trackExternalId: s.track_external_id }, s.track_external_id),
            (0, i.jsxs)("div", {
                className: j()(li.QD, li.rk),
                children: [
                    (0, i.jsx)(ls, { guildId: l, song: s }),
                    (0, i.jsxs)("div", {
                        className: li._0,
                        children: [
                            (0, i.jsx)(_.E, {
                                tag: "span",
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                children:
                                    ((t = s.plays),
                                    N.intl.format(X.default["7hHUIS"], { count: t, trend: lt(r), countHook: t9 })),
                            }),
                            null != r && (0, i.jsx)(la, { trend: r }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var lo = l(197935),
    lu = l(915734);
function lm(e) {
    let { label: t, items: l, isCompact: n, getItemKey: a, renderItem: s } = e;
    return (0, i.jsx)("div", {
        className: j()(lu.Dk, { [lu.yI]: n }),
        children: (0, i.jsx)(lo.A, {
            items: l,
            getItemKey: a,
            renderItem: s,
            gap: 8,
            edgeFade: 40,
            actionsClassName: lu.o1,
            "aria-label": t,
        }),
    });
}
var lx = (((n = {}).TOP_SONGS = "top_songs"), (n.TOP_ARTISTS = "top_artists"), (n.TOP_LISTENERS = "top_listeners"), n);
let lh = ["top_songs", "top_artists", "top_listeners"];
function lf(e) {
    return 1 > e.ranked_songs.reduce((e, t) => e + t.plays, 0);
}
function lg(e) {
    switch (e) {
        case "top_songs":
            return N.intl.string(X.default.KgeEtx);
        case "top_artists":
            return N.intl.string(X.default.RYxWTS);
        case "top_listeners":
            return N.intl.string(X.default.KO73KB);
    }
}
function lj(e, t) {
    return `popular-music-tab-${e}-${t}`;
}
function lp(e) {
    return `popular-music-panel-${e}`;
}
var lv = l(742452);
function l_(e) {
    return e.artist_external_id;
}
function lA(e, t) {
    return (0, i.jsx)(t3, { artist: e, itemProps: t });
}
function lE(e) {
    let { isCompact: t, data: l } = e;
    if (0 === l.ranked_artists.length) return null;
    let n = ln(l);
    return (0, i.jsxs)("div", {
        className: lv.U,
        children: [
            (0, i.jsx)(lm, {
                label: lg(lx.TOP_ARTISTS),
                items: l.ranked_artists,
                isCompact: t,
                getItemKey: l_,
                renderItem: lA,
            }),
            (0, i.jsx)(ld, {
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
                              trend: lt(n),
                              memberCountHook: t9,
                              artistCountHook: t9,
                          }),
                trend: n,
            }),
        ],
    });
}
var lN = l(803613),
    lb = l(682348),
    lI = l(73152),
    lS = l(280911);
function lC(e) {
    let { guildId: t, isCompact: l } = e,
        n = (0, y.bG)([W.default], () => W.default.getCurrentUser()),
        a = (0, y.bG)([V.Ay], () => (null != n ? V.Ay.getMember(t, n.id) : null)),
        s = (0, Q.gn)(t, n?.id, a?.colorStrings ?? null),
        r = Z.Ay.useName(t, void 0, n);
    return (0, i.jsxs)("div", {
        className: lS.D_,
        children: [
            (0, i.jsxs)("div", {
                className: lS.FI,
                "aria-hidden": !0,
                children: [
                    !l &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("span", { className: lS.eu, children: (0, i.jsx)(lN.D, { size: "sm" }) }),
                                (0, i.jsxs)("span", {
                                    className: lS.r$,
                                    children: [
                                        (0, i.jsx)("span", { className: lS.Om }),
                                        (0, i.jsx)("span", { className: lS.Om }),
                                        (0, i.jsx)("span", { className: lS.Om }),
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
                className: lS.Qq,
                children: [
                    (0, i.jsx)(E.D, {
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        lineClamp: 1,
                        children: (0, i.jsx)(M.g, {
                            name: N.intl.formatToPlainString(X.default.subXXA, { name: r }),
                            colorString: a?.colorString ?? null,
                            colorStrings: s,
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
function ly(e) {
    let { widgetName: t, isCompact: l } = e;
    return (0, i.jsxs)("div", {
        className: lS.D_,
        children: [
            !l &&
                (0, i.jsx)("span", {
                    className: lS.eu,
                    "aria-hidden": !0,
                    children: (0, i.jsx)(lb._, { size: "sm", color: c.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
                }),
            (0, i.jsxs)("div", {
                className: lS.Qq,
                children: [
                    (0, i.jsx)(E.D, {
                        variant: "heading-sm/semibold",
                        color: "text-strong",
                        lineClamp: 1,
                        children: N.intl.string(tB.default.WhdCGP),
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
function lT(e) {
    let { guildId: t, widgetName: n, isCompact: a, isSpotifyConnected: s } = e;
    return (0, i.jsxs)("div", {
        className: lS.UX,
        children: [
            s ? (0, i.jsx)(ly, { widgetName: n, isCompact: a }) : (0, i.jsx)(lC, { guildId: t, isCompact: a }),
            (0, i.jsx)(U.$, {
                variant: "secondary",
                size: "sm",
                icon: s ? void 0 : lI.E,
                text: s ? N.intl.string(N.t.KY0ilj) : N.intl.string(X.default.jB1fWC),
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
                                l.e("252264"),
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
var lR = l(625903),
    lk = l(780964),
    lD = l(766075),
    lw = l(30370),
    lL = l(123894);
function lM() {
    let e = (0, y.bG)([lw.A], () => lw.A.getAccounts().some((e) => e.type === e2.fg2.SPOTIFY && e.showActivity));
    return (0, i.jsx)(C, {
        className: lL.w,
        title: N.intl.string(X.default.ULK65a),
        body: N.intl.format(e ? X.default.BLuvck : X.default["Ko3a0+"], { memberCount: 2 }),
        action: e
            ? null
            : (0, i.jsx)(U.$, {
                  variant: "secondary",
                  size: "sm",
                  icon: lR.SettingsIcon,
                  text: N.intl.string(N.t["3D5yo/"]),
                  onClick: () => (0, lD.openUserSettings)(lk.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING),
              }),
    });
}
function lG() {
    return (0, i.jsx)(C, {
        className: lL.w,
        title: N.intl.string(X.default.ULK65a),
        body: N.intl.format(X.default.ZQxU8v, { memberCount: 2 }),
    });
}
var lU = l(109487),
    lP = l(279543);
function lO(e) {
    let { isCompact: t } = e;
    return (0, i.jsxs)("div", {
        className: lP.qr,
        children: [
            (0, i.jsxs)("div", {
                className: lP.Os,
                children: [
                    (0, i.jsx)("span", {
                        className: lP.Kk,
                        children: (0, i.jsx)(k.RefreshIcon, {
                            size: "xxs",
                            color: c.A.colors.ICON_SUBTLE,
                            "aria-hidden": !0,
                        }),
                    }),
                    (0, i.jsx)(_.E, {
                        className: lP.Pf,
                        tag: "span",
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: N.intl.string(X.default["3/DOFo"]),
                    }),
                ],
            }),
            (0, i.jsxs)(tZ.Anchor, {
                className: lP.al,
                href: t6.RQ.WEB_HOME,
                "aria-label": N.intl.string(X.default["jUr+wF"]),
                children: [
                    (0, i.jsx)("span", {
                        className: lP.Kk,
                        children: (0, i.jsx)(lU.L, { size: "xs", color: c.A.colors.ICON_STRONG, "aria-hidden": !0 }),
                    }),
                    !t &&
                        (0, i.jsx)(_.E, {
                            className: lP.G2,
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
var lB = l(65154),
    lW = l(329177),
    lz = l(242226);
function lF(e) {
    var t;
    let {
            guildId: l,
            userId: n,
            listener: a,
            rank: s,
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
              className: j()(lz.nM, { [lz.Bh]: d && !u, [lz.lR]: o }),
              children: [
                  (0, i.jsx)(lH, { guildId: l, user: h, identity: x, rank: s, listener: a }),
                  null != a &&
                      (0, i.jsxs)("div", {
                          className: j()(lz.Mx, { [lz.dA]: r }),
                          children: [
                              (0, i.jsx)(lB.S, { size: "xxs", color: c.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                              (0, i.jsx)(_.E, {
                                  variant: "text-sm/medium",
                                  color: "text-strong",
                                  children:
                                      ((t = a.plays), N.intl.formatToPlainString(X.default["7X+3f8"], { count: t })),
                              }),
                          ],
                      }),
                  null != a && !r && (0, i.jsx)(l$, { artists: a.artists, artistCount: a.artist_count ?? null }),
              ],
          });
}
function lH(e) {
    let { guildId: t, user: l, identity: n, rank: s, listener: r } = e,
        d = a.useRef(null);
    return (0, i.jsx)(ey.A, {
        targetElementRef: d,
        user: l,
        guildId: t,
        children: (e) =>
            (0, i.jsxs)(R.D, {
                ...e,
                innerRef: d,
                className: lz.D_,
                children: [
                    null != s &&
                        (0, i.jsx)(D.A, { children: N.intl.formatToPlainString(X.default.I4JiAQ, { rank: s }) }),
                    (0, i.jsxs)("span", {
                        className: lz.R3,
                        children: [
                            (0, i.jsx)(w.eu, {
                                size: L._3.SIZE_32,
                                src: l.getAvatarURL(t, (0, L.FT)(L._3.SIZE_32)) ?? void 0,
                                "aria-hidden": !0,
                            }),
                            1 === s &&
                                (0, i.jsx)("span", {
                                    className: lz.ie,
                                    "aria-hidden": !0,
                                    children: (0, i.jsx)(lW.CrownIcon, { size: "xxs", color: "currentColor" }),
                                }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: lz.Dc,
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
                            (0, i.jsx)(lK, { listener: r }),
                        ],
                    }),
                ],
            }),
    });
}
function lq(e, t) {
    return (0, i.jsx)(_.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: e }, t);
}
function lK(e) {
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
                ? N.intl.format(X.default.QqaqBg, { trackTitle: l, artistName: n, highlightHook: lq })
                : N.intl.format(X.default.ZMJ8Mt, { trackTitle: l, highlightHook: lq }),
    });
}
function lY(e) {
    let { artist: t, notched: l } = e,
        [n, s] = a.useState(!1),
        r = null != t.artist_image_hash ? t6.RQ.IMAGE(t.artist_image_hash) : null;
    return (0, i.jsx)("span", {
        className: lz.sG,
        children: (0, i.jsx)(eG.Ay, {
            mask: l ? eG.l8[24] : eG.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null == r || n
                    ? (0, i.jsx)("span", {
                          className: lz.Ql,
                          children: (0, i.jsx)(tV.MicrophoneIcon, { size: "xxs", color: c.A.colors.ICON_SUBTLE }),
                      })
                    : (0, i.jsx)("img", { className: lz.v2, src: r, alt: "", loading: "lazy", onError: () => s(!0) }),
        }),
    });
}
function l$(e) {
    let { artists: t, artistCount: l } = e,
        n = t.slice(0, 3),
        a = (l ?? t.length) - n.length;
    return (0, i.jsx)("div", {
        className: lz.Rh,
        "aria-hidden": !0,
        children:
            n.length > 0 &&
            (0, i.jsxs)("div", {
                className: lz.W$,
                children: [
                    n.map((e, t) =>
                        (0, i.jsx)(
                            lY,
                            { artist: e, notched: a > 0 || t !== n.length - 1 },
                            `${e.artist_external_id}-${e.artist_image_hash}`,
                        ),
                    ),
                    a > 0 &&
                        (0, i.jsx)("span", {
                            className: lz.sG,
                            children: (0, i.jsx)(eG.Ay, {
                                mask: eG.Ay.Masks.SQUIRCLE,
                                width: 24,
                                height: 24,
                                children: (0, i.jsx)("div", {
                                    className: lz.ag,
                                    children: (0, i.jsx)(_.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: N.intl.formatToPlainString(X.default.bFIg0R, { count: a }),
                                    }),
                                }),
                            }),
                        }),
                ],
            }),
    });
}
var lQ = l(897130);
function lV(e) {
    let { guildId: t, isCompact: l, data: n, upsell: s } = e,
        r = n.top_listeners,
        d = (0, y.bG)([W.default], () => W.default.getCurrentUser()?.id),
        c = r.findIndex((e) => e.user_id === d),
        o = -1 === c ? null : r[c],
        u = a.useMemo(() => r.map((e) => e.user_id), [r]);
    (0, P.k6)(t, u);
    let { scrollerRef: m, userRowRef: x, floatingRowPosition: h } = $(),
        f = null != s,
        g = f ? null : h,
        p = null != g;
    return n.top_listeners.length < 2
        ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(lG, {}), s] })
        : (0, i.jsxs)("div", {
              className: lQ.SY,
              children: [
                  (0, i.jsxs)(T.d_, {
                      className: j()(lQ.p_, { [lQ.w]: f }),
                      ref: m,
                      children: [
                          r.map((e, n) => {
                              let a = e.user_id === d;
                              return (0, i.jsx)(
                                  lF,
                                  {
                                      guildId: t,
                                      userId: e.user_id,
                                      listener: e,
                                      rank: n + 1,
                                      isCompact: l,
                                      isCurrentUser: a,
                                      shouldDimForCurrentUser: a && p,
                                      rowRef: a ? x : void 0,
                                  },
                                  e.user_id,
                              );
                          }),
                          !f &&
                              null != d &&
                              null == o &&
                              (0, i.jsx)(lF, {
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
                              (0, i.jsx)("div", { className: lQ.Kv, children: s }),
                          ],
                      }),
                  null != d &&
                      null != g &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(H, { position: g }),
                              (0, i.jsx)(q, {
                                  position: g,
                                  children: (0, i.jsx)(lF, {
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
var lZ = l(717683);
function lX(e) {
    let { isCompact: t } = e;
    return (0, i.jsxs)("div", {
        className: lZ.qV,
        "aria-hidden": !0,
        children: [
            (0, i.jsx)("div", {
                className: j()(lZ.Dk, { [lZ.yI]: t }),
                children: Array.from({ length: 10 }, (e, t) =>
                    (0, i.jsxs)(
                        "div",
                        {
                            className: lZ.Nr,
                            children: [
                                (0, i.jsx)("div", { className: j()(lZ.om, lZ.xX) }),
                                (0, i.jsxs)("div", {
                                    className: lZ.Qq,
                                    children: [
                                        (0, i.jsx)("div", { className: j()(lZ.om, lZ.DD) }),
                                        (0, i.jsx)("div", { className: j()(lZ.om, lZ.VA) }),
                                    ],
                                }),
                            ],
                        },
                        t,
                    ),
                ),
            }),
            (0, i.jsxs)("div", {
                className: j()(lZ.yp, { [lZ.Fl]: t }),
                children: [
                    (0, i.jsx)("div", { className: j()(lZ.om, lZ.Pl) }),
                    (0, i.jsx)("div", { className: j()(lZ.om, lZ._0) }),
                ],
            }),
        ],
    });
}
var lJ = l(432017),
    l0 = l(362704);
function l1(e) {
    let { song: t, isSelected: l, onSelect: n, itemProps: s } = e,
        r = null != t.cover_art_hash ? t6.RQ.IMAGE(t.cover_art_hash) : null,
        d = a.useMemo(
            () => ({
                kind: "song",
                shareUrl: t6.RQ.WEB_OPEN(t6.M0.TRACK, t.track_external_id),
                title: t.track_title ?? t.track_external_id,
                subtitle: t.artist_name,
                imageUrl: r,
            }),
            [t.track_external_id, t.track_title, t.artist_name, r],
        );
    return (0, i.jsxs)("div", {
        className: t1.Nr,
        children: [
            (0, i.jsxs)("button", {
                ...s,
                type: "button",
                className: j()(t1.MT, { [t1.tY]: l }),
                "aria-pressed": l,
                onClick: () => n(t.track_external_id),
                children: [
                    (0, i.jsx)(tX.R, {
                        src: r,
                        isCircular: !1,
                        FallbackIcon: lJ.T,
                        children:
                            l &&
                            (0, i.jsx)("span", {
                                className: j()(t1.Lw, t1.Kp),
                                "aria-hidden": !0,
                                children: (0, i.jsx)(l0.Y, { size: "md", color: "currentColor" }),
                            }),
                    }),
                    null != t.track_title &&
                        (0, i.jsxs)("span", {
                            className: t1.Qq,
                            children: [
                                (0, i.jsx)(_.E, {
                                    className: t1.DD,
                                    tag: "span",
                                    variant: "text-sm/semibold",
                                    color: "text-default",
                                    lineClamp: 1,
                                    children: t.track_title,
                                }),
                                null != t.artist_name &&
                                    (0, i.jsx)(_.E, {
                                        className: t1.VA,
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
            (0, i.jsx)(t2, { target: d, tabIndex: s.tabIndex }),
        ],
    });
}
var l2 = l(196765);
let l6 = { view: "top_songs", isCompact: !1, canShowEmbed: !1, selectedTrackId: null },
    l3 = (0, l2.v)(() => ({ byWidgetId: {} }));
function l8(e, t) {
    l3.setState((l) => {
        let n = l.byWidgetId[e] ?? l6;
        return { byWidgetId: { ...l.byWidgetId, [e]: { ...n, ...t } } };
    });
}
function l4(e) {
    return l3((t) => t.byWidgetId[e]?.view ?? l6.view);
}
function l7(e) {
    return l3((t) => t.byWidgetId[e]?.isCompact ?? l6.isCompact);
}
function l5(e) {
    return l3((t) => t.byWidgetId[e]?.selectedTrackId ?? l6.selectedTrackId);
}
function l9(e, t) {
    (l3.getState().byWidgetId[e] ?? l6).view !== t && l8(e, { view: t, selectedTrackId: null });
}
function ne(e) {
    return e.track_external_id;
}
function nt(e) {
    let t,
        { guildId: l, widgetId: n, isCompact: s, data: r } = e,
        d = l5(n),
        c = l3((e) => e.byWidgetId[n]?.canShowEmbed ?? l6.canShowEmbed),
        o = a.useCallback(
            (e) => {
                let t;
                return (
                    (t = l3.getState().byWidgetId[n]?.selectedTrackId ?? null),
                    void l8(n, { selectedTrackId: t === e ? null : e })
                );
            },
            [n],
        ),
        u = a.useCallback(
            (e, t) => (0, i.jsx)(l1, { song: e, isSelected: e.track_external_id === d, onSelect: o, itemProps: t }),
            [d, o],
        );
    if (0 === r.ranked_songs.length) return null;
    let m = r.ranked_songs.find((e) => e.track_external_id === d) ?? null,
        x = ln(r);
    return (0, i.jsxs)("div", {
        className: lv.U,
        children: [
            (0, i.jsx)(lm, {
                label: lg(lx.TOP_SONGS),
                items: r.ranked_songs,
                isCompact: s,
                getItemKey: ne,
                renderItem: u,
            }),
            null != m
                ? (0, i.jsx)(lc, { guildId: l, isCompact: s, canShowEmbed: c, song: m })
                : (0, i.jsx)(ld, {
                      isCompact: s,
                      headline:
                          (t = Math.round(r.listening_time_ms / ec.A.Millis.MINUTE)) < 1
                              ? null
                              : N.intl.formatToPlainString(X.default["+5b01q"], { minutes: t }),
                      detail:
                          r.distinct_listeners < 1
                              ? null
                              : N.intl.format(X.default.AzIhRB, {
                                    count: r.distinct_listeners,
                                    trend: lt(x),
                                    countHook: t9,
                                }),
                      trend: x,
                  }),
        ],
    });
}
var nl = l(691885),
    nn = l(109765);
function ni(e) {
    let { widgetId: t } = e,
        l = l4(t),
        n = a.useMemo(() => lh.map((e) => ({ id: e, label: lg(e), value: e })), []),
        s = a.useCallback(
            (e) => {
                l9(t, e);
            },
            [t],
        );
    return (0, i.jsx)("div", {
        className: nn.L,
        children: (0, i.jsx)(nl.l, {
            selectionMode: "single",
            label: N.intl.string(X.default.hFYyGU),
            hideLabel: !0,
            fitContent: !0,
            options: n,
            value: l,
            onSelectionChange: s,
        }),
    });
}
var na = l(871107);
function ns(e) {
    let { title: t } = e;
    return (0, i.jsxs)("div", {
        className: na.$,
        children: [
            (0, i.jsx)("span", {
                className: na.K,
                children: (0, i.jsx)(lJ.T, { size: "xs", color: c.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
            }),
            (0, i.jsx)(f.q, { size: "md", children: t }),
        ],
    });
}
var nr = l(77915),
    nd = l(756936);
function nc(e) {
    return e.default_title ?? N.intl.string(X.default["5xxUI2"]);
}
var no = l(890497),
    nu = l(734057),
    nm = l(317525),
    nx = l(576705),
    nh = l(935208),
    nf = l(44167);
l(321073);
var ng = l(485845),
    nj = l(136722),
    np = l(435183),
    nv = l(155718),
    n_ = l(795816),
    nA = l(933958),
    nE = l(627363),
    nN = l(712440),
    nb = l(733110),
    nI = l(488926),
    nS = l(818023);
async function nC(e) {
    null == ee.A.getApplication(nS.NW) && (await (0, nE.TA)(nS.NW));
    let t = nA.Ay.getEmbeddedActivitiesForChannel(e).every((e) => e.applicationId !== nS.NW);
    return await (0, n_.su)({ channelId: e, applicationId: nS.NW, isStart: t, renderInFramePool: !0 });
}
async function ny(e) {
    let { channel: t, selectedRoleIds: l } = e,
        n = [];
    if (l.length > 0)
        for (let e of (n.push({ id: t.guild_id, type: nv.r2.ROLE, allow: nI.x3, deny: e2.xBc.USE_EMBEDDED_ACTIVITIES }),
        l))
            n.push({ id: e, type: nv.r2.ROLE, allow: e2.xBc.USE_EMBEDDED_ACTIVITIES, deny: nI.x3 });
    let i = await (0, np.RT)(t.id, { permissionOverwrites: n });
    if (!i.ok) throw i;
}
let nT = [];
var nR = l(344351),
    nk = l(256693),
    nD = l(343030),
    nw = l(317608),
    nL = l(953538);
let nM = {
    [d.a.IMAGE_TEXT]: {
        View: function (e) {
            let { widget: t, guildSpaceMode: l, guildId: n } = e,
                { text: a, image_hash: s } = t.config,
                r = "edit" === l ? t.config.image : void 0,
                d = void 0 !== r ? r : null != s ? tb(n, t.id, s) : null;
            return (0, i.jsxs)("div", {
                className: tS.kL,
                children: [
                    null != d && (0, i.jsx)("img", { className: tS.Sl, src: d, alt: "" }),
                    null != a &&
                        (0, i.jsx)(_.E, {
                            variant: "text-md/normal",
                            color: "text-subtle",
                            className: tS.Qq,
                            children: a,
                        }),
                ],
            });
        },
        Edit: function (e) {
            let { widget: t, commit: l, cancel: n } = e,
                s = t.config,
                [r, c] = a.useState(s.title ?? ""),
                [o, x] = a.useState(s.text ?? ""),
                [h, f] = a.useState(s.image),
                [g, j] = a.useState(null),
                p = (0, y.bG)([tn.A], () => tn.A.getGuildId()),
                v = void 0 !== h ? h : null != s.image_hash && null != p ? tb(p, t.id, s.image_hash) : null;
            return (0, i.jsxs)(A.B, {
                gap: 16,
                children: [
                    (0, i.jsx)(tj.k, {
                        label: N.intl.string(N.t.gnwWrx),
                        value: r,
                        onChange: function (e) {
                            (j(null), c(e));
                        },
                        maxLength: 100,
                        showCharacterCount: !0,
                    }),
                    (0, i.jsx)(tf.D, {
                        label: N.intl.string(N.t.X4IxWL),
                        children: (0, i.jsxs)(A.B, {
                            gap: 16,
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            className: tI.B,
                            children: [
                                (0, i.jsxs)(A.B, {
                                    gap: 8,
                                    direction: "horizontal",
                                    children: [
                                        (0, i.jsx)(t_.A, {
                                            variant: "secondary",
                                            text: N.intl.string(N.t["MsUY/S"]),
                                            onChange: function (e) {
                                                (j(null), f(e));
                                            },
                                            maxFileSizeBytes: 0xa00000,
                                            onFileSizeError: () => (0, tv.A)(0xa00000),
                                        }),
                                        null != v &&
                                            (0, i.jsx)(u.m, {
                                                text: N.intl.string(N.t.N86XcP),
                                                ariaHidden: !0,
                                                children: (0, i.jsx)(m.K, {
                                                    variant: "critical-secondary",
                                                    icon: tp.TrashIcon,
                                                    onClick: function () {
                                                        (j(null), f(null));
                                                    },
                                                    "aria-label": N.intl.string(N.t.N86XcP),
                                                }),
                                            }),
                                    ],
                                }),
                                null != v && (0, i.jsx)("img", { className: tI.V, src: v, alt: "" }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(tg.f, {
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
                            children: (0, i.jsx)(te.w, { type: "critical", children: g }),
                        }),
                    (0, i.jsxs)(tt.e, {
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(U.$, { variant: "secondary", text: N.intl.string(N.t["ETE/oC"]), onClick: n }),
                            (0, i.jsx)(U.$, {
                                variant: "primary",
                                text: N.intl.string(N.t["R3BPH+"]),
                                onClick: function () {
                                    let e;
                                    if (
                                        ((e = void 0 !== h ? null !== h : null != s.image_hash),
                                        0 === o.length && !e && (j(N.intl.string(X.default.zleX9q)), 1))
                                    )
                                        return;
                                    let t = {
                                        type: d.a.IMAGE_TEXT,
                                        image_hash: s.image_hash,
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
                { widget: l, hydration: n, guildId: s, guildSpaceMode: r } = e,
                d = eW(s, n?.status === "success" ? n.data : void 0),
                c = tm({ guildId: s, data: d, expanded: !1, column: l.position.column, enabled: "view" === r }),
                o = a.useCallback(
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
                          ? (0, i.jsx)(e3, { guildId: s, data: d, column: l.position.column, disabled: "view" !== r })
                          : (0, i.jsx)(I, {})),
                (0, i.jsx)("div", { ref: o, children: t })
            );
        },
        Edit: function (e) {
            let { cancel: t } = e,
                l = (0, y.bG)([tn.A], () => tn.A.getGuildId()),
                n = (0, y.bG)([tl.A], () => tl.A.getGuild(l), [l]),
                s = (0, ta.mN)(n),
                r = null != n && null != n.systemChannelId,
                d = null != n ? n.systemChannelFlags : null,
                [c, o] = a.useState(!1),
                [u, m] = a.useState(null),
                [x, h] = a.useState(!1),
                f = a.useCallback(async () => {
                    if (null == n || null == l || null == u || null == d) return void t();
                    (h(!1), o(!0));
                    try {
                        (await e5.Bo.patch({
                            url: e2.Rsh.GUILD(l),
                            body: { system_channel_flags: (0, e7.lA)(d, ts, !u) },
                            rejectWithError: !0,
                        }),
                            (0, ti.q9)(l, ti.PY.LEADERBOARD_SYSTEM_MESSAGES, u),
                            t());
                    } catch (e) {
                        h(!0);
                    } finally {
                        o(!1);
                    }
                }, [n, l, u, d, t]),
                g = null == n || !r || null == d || c || !s;
            return (0, i.jsxs)(A.B, {
                gap: 16,
                children: [
                    (0, i.jsx)(e9.d, {
                        label: N.intl.string(X.default.v0iLIA),
                        description: N.intl.string(X.default["88c7ds"]),
                        checked: u ?? !(0, e7.Lt)(d ?? 0, ts),
                        onChange: m,
                        disabled: g,
                    }),
                    !r && (0, i.jsx)(te.w, { type: "warning", children: N.intl.string(X.default["1hsDpi"]) }),
                    x && (0, i.jsx)(te.w, { type: "critical", children: N.intl.string(X.default["4FcF2j"]) }),
                    (0, i.jsxs)(tt.e, {
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
                a = eW(n, l?.status === "success" ? l.data : void 0);
            return null == a
                ? (0, i.jsx)(f.q, { children: t.default_title ?? "" })
                : (0, i.jsx)(f.q, { children: ex(a) });
        },
        TitleIcon: function () {
            return (0, i.jsx)(o.TrophyIcon, { size: "xs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        },
        HeaderAccessory: function (e) {
            let { hydration: t, guildId: l } = e,
                n = eW(l, t?.status === "success" ? t.data : void 0);
            return null == n || em(n) ? null : (0, i.jsx)(tu, { data: n });
        },
        HeaderActions: function (e) {
            let { hydration: t, guildId: l, column: n } = e,
                a = t?.status === "success" ? t.data : void 0,
                s = eW(l, a);
            return "mini" !== ef({ expanded: !1, column: n }) || (null != s && em(s))
                ? null
                : (0, i.jsx)(u.m, {
                      text: N.intl.string(N.t.dcl9MQ),
                      children: (0, i.jsx)(m.K, {
                          variant: "icon-only",
                          size: "sm",
                          icon: x._,
                          "aria-label": N.intl.string(N.t.dcl9MQ),
                          disabled: null == s,
                          onClick: function () {
                              null != s &&
                                  null != a &&
                                  (h.default.track(e2.HAw.LEADERBOARD_CLICK, {
                                      location: "expand",
                                      guild_id: l,
                                      leaderboard_state: eh(s),
                                      leaderboard_view: ef({ expanded: !1, column: n }),
                                      metric: eg(s.stat),
                                  }),
                                  (function (e) {
                                      let { guildId: t, data: l } = e,
                                          n = (e) => (0, i.jsx)(th, { guildId: t, data: l, modalProps: e });
                                      (0, ej.openModalLazy)(() => Promise.resolve(n), {
                                          modalKey: "guild-space-leaderboard-expand",
                                      });
                                  })({ guildId: l, data: a }));
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
                  : (0, i.jsx)(tq, { guildId: n, data: l.data, title: tK(t) });
        },
        Title: function (e) {
            let { widget: t } = e;
            return (0, i.jsx)(f.q, { children: tK(t) });
        },
        TitleIcon: function () {
            return (0, i.jsx)(eL.GameControllerIcon, { size: "xs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        },
    },
    [d.a.POPULAR_MUSIC]: {
        View: function (e) {
            var t, l;
            let n,
                s,
                r,
                { guildId: d, widget: c, hydration: o, guildSpaceMode: u } = e,
                m =
                    ((t = c.id),
                    (n = a.useRef(null)),
                    (s = a.useCallback(
                        (e) => {
                            let { width: l } = e.contentRect;
                            l8(t, { isCompact: l < 480, canShowEmbed: l >= 560 });
                        },
                        [t],
                    )),
                    (0, tC.g)(n, s, [t], { fireOnMount: !0 }),
                    a.useEffect(
                        () => () => {
                            l3.setState((e) => {
                                if (null == e.byWidgetId[t]) return e;
                                let l = { ...e.byWidgetId };
                                return (delete l[t], { byWidgetId: l });
                            });
                        },
                        [t],
                    ),
                    n),
                x = l7(c.id),
                h = l4(c.id),
                f = l5(c.id),
                { isContributing: g, isSpotifyConnected: j, hasFetchedConsents: p } = (0, nr.MX)(d),
                v = "edit" === u,
                _ = o?.status === "success" && lf(o.data),
                A = !x && !v && !_,
                E =
                    "view" === u && p && !g
                        ? (0, i.jsx)(lT, { guildId: d, widgetName: nc(c), isCompact: x, isSpotifyConnected: j })
                        : null,
                N =
                    v || _ || o?.status !== "success" || h === lx.TOP_LISTENERS
                        ? null
                        : ((l = o.data),
                          null ==
                          (r =
                              l.ranked_songs.find((e) => e.track_external_id === f && null != e.cover_art_hash)
                                  ?.cover_art_hash ??
                              l.ranked_songs.find((e) => null != e.cover_art_hash)?.cover_art_hash)
                              ? null
                              : t6.RQ.IMAGE(r));
            return (0, i.jsxs)("div", {
                className: nd.rf,
                ref: m,
                children: [
                    null != N &&
                        (0, i.jsx)("div", {
                            className: nd.G,
                            "aria-hidden": !0,
                            children: (0, i.jsx)("img", { className: nd.LZ, src: N, alt: "" }),
                        }),
                    (0, i.jsx)("div", {
                        className: nd.Qs,
                        children: (0, i.jsx)("div", {
                            id: lp(c.id),
                            className: nd.nd,
                            role: A ? "tabpanel" : "group",
                            tabIndex: 0,
                            "aria-label": A ? void 0 : lg(h),
                            "aria-labelledby": A ? lj(c.id, h) : void 0,
                            children: (function () {
                                if (v) return (0, i.jsx)(lX, { isCompact: x });
                                if (null == o || "idle" === o.status || "loading" === o.status)
                                    return (0, i.jsx)(I, {});
                                if ("error" === o.status) return (0, i.jsx)(S, {});
                                if (_) return (0, i.jsx)(lM, {});
                                switch (h) {
                                    case lx.TOP_SONGS:
                                        return (0, i.jsx)(nt, {
                                            guildId: d,
                                            widgetId: c.id,
                                            isCompact: x,
                                            data: o.data,
                                        });
                                    case lx.TOP_ARTISTS:
                                        return (0, i.jsx)(lE, { isCompact: x, data: o.data });
                                    case lx.TOP_LISTENERS:
                                        return (0, i.jsx)(lV, { guildId: d, isCompact: x, data: o.data, upsell: E });
                                }
                            })(),
                        }),
                    }),
                    h !== lx.TOP_LISTENERS && E,
                    (0, i.jsx)(lO, { isCompact: x }),
                ],
            });
        },
        Title: function (e) {
            let { widget: t, hydration: l, guildSpaceMode: n } = e,
                a = nc(t),
                s = l?.status === "success" && lf(l.data);
            return "edit" === n || s ? (0, i.jsx)(f.q, { size: "md", children: a }) : (0, i.jsx)(ns, { title: a });
        },
        ViewHeaderTrailing: function (e) {
            let { widget: t, hydration: l, title: n } = e,
                a = l7(t.id),
                s = l4(t.id);
            return l?.status === "success" && lf(l.data)
                ? null
                : a
                  ? (0, i.jsx)(ni, { widgetId: t.id })
                  : (0, i.jsx)(tQ, {
                        label: n,
                        tabs: lh.map((e) => ({ id: e, label: lg(e) })),
                        selectedId: s,
                        panelId: lp(t.id),
                        getTabId: (e) => lj(t.id, e),
                        onSelect: (e) => l9(t.id, e),
                    });
        },
    },
    [d.a.WHITEBOARD]: {
        View: function (e) {
            let t,
                l,
                n = (0, nf.n)(),
                s = (0, y.bG)(
                    [nu.A, nx.A],
                    () => {
                        let e = null != n ? nu.A.getChannel(n) : void 0;
                        return null != e && nx.A.can(e2.xBc.USE_EMBEDDED_ACTIVITIES, e);
                    },
                    [n],
                ),
                d = (0, y.bG)(
                    [nA.Ay],
                    () => {
                        let e = nA.Ay.getCurrentEmbeddedActivity();
                        return null == e ||
                            e.applicationId !== nS.NW ||
                            e.location.kind !== nR.T.GUILD_CHANNEL ||
                            e.location.channel_id !== n
                            ? null
                            : e;
                    },
                    [n],
                ),
                c = (0, y.bG)([nA.Ay], () => nA.Ay.isLaunchingActivity(), []),
                { authResolved: o, isAuthorized: u } =
                    ((t = (0, y.bG)(
                        [nb.default],
                        () => nb.default.getFetchStateForApplication(nS.NW) === nb.FetchState.FETCHED,
                        [],
                    )),
                    (l = (0, y.bG)(
                        [nb.default, ee.A],
                        () => {
                            let e = nb.default.getNewestTokenForApplication(nS.NW);
                            if (null == e) return !1;
                            let t = ee.A.getApplication(nS.NW),
                                l = t?.integrationTypesConfig?.[ng.b.USER_INSTALL]?.oauth2InstallParams?.scopes;
                            if (null == l) return !0;
                            let n = new Set(e.scopes);
                            return l.every((e) => n.has(e));
                        },
                        [],
                    )),
                    a.useEffect(() => {
                        (nb.default.getFetchStateForApplication(nS.NW) === nb.FetchState.NOT_FETCHED &&
                            nN.A.fetch([nS.NW]),
                            null == ee.A.getApplication(nS.NW) && (0, nE.TA)(nS.NW));
                    }, []),
                    { authResolved: t, isAuthorized: l }),
                m = a.useRef(!1);
            a.useEffect(() => {
                null == d && null != n && s && o && u && !m.current && ((m.current = !0), nC(n));
            }, [s, n, d, o, u]);
            let x = a.useCallback(() => {
                    null != n && ((m.current = !0), nC(n));
                }, [n]),
                h = null != n && o && !u;
            return null == n
                ? (0, i.jsx)(A.B, {
                      className: nL.kL,
                      align: "center",
                      justify: "center",
                      children: (0, i.jsx)(r, { alt: "", width: 200, height: 192 }),
                  })
                : s
                  ? (0, i.jsxs)("div", {
                        className: nL.kL,
                        children: [
                            null != d &&
                                (0, i.jsx)(nw.A, {
                                    frameId: (0, nk.Ri)(d),
                                    level: nD.A.WithinAppContent,
                                    className: nL.t$,
                                }),
                            null == d &&
                                h &&
                                (0, i.jsx)("div", {
                                    className: nL.P5,
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
                        className: nL.kL,
                        children: (0, i.jsx)("div", {
                            className: nL.m0,
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
                l = (0, y.bG)([tn.A], () => tn.A.getGuildId()),
                n = nh.default.castGuildIdAsEveryoneGuildRoleId(l),
                s = (0, nf.n)(),
                r = (0, y.bG)([nu.A], () => (null != s ? nu.A.getChannel(s) : void 0), [s]),
                d = (0, y.bG)([nx.A], () => null != r && nx.A.can(e2.xBc.MANAGE_ROLES, r), [r]),
                c = (0, y.bG)([nm.A], () => (null == l ? nT : nm.A.getSortedRoles(l).filter((e) => e.id !== n)), [
                    l,
                    n,
                ]),
                o = a.useMemo(() => {
                    let e;
                    return null != r
                        ? null != (e = r.permissionOverwrites[r.guild_id]) &&
                          nj.zy(e.deny, e2.xBc.USE_EMBEDDED_ACTIVITIES)
                            ? c
                                  .filter((e) => {
                                      let t = r.permissionOverwrites[e.id];
                                      return null != t && nj.zy(t.allow, e2.xBc.USE_EMBEDDED_ACTIVITIES);
                                  })
                                  .map((e) => e.id)
                            : []
                        : [];
                }, [r, c]),
                [u, m] = a.useState(null),
                [x, h] = a.useState(!1),
                [f, g] = a.useState(!1),
                j = u ?? o,
                p = a.useMemo(() => c.map((e) => ({ id: e.id, label: e.name, value: e.id })), [c]);
            async function v() {
                if (null != r) {
                    (g(!1), h(!0));
                    try {
                        (await ny({ channel: r, selectedRoleIds: j }), t());
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
                          (0, i.jsx)(no.Z, {
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
                          !d && (0, i.jsx)(te.w, { type: "warning", children: N.intl.string(X.default.UPLtlA) }),
                          f &&
                              (0, i.jsx)("div", {
                                  role: "alert",
                                  children: (0, i.jsx)(te.w, {
                                      type: "critical",
                                      children: N.intl.string(X.default.xyCJYs),
                                  }),
                              }),
                          (0, i.jsxs)(tt.e, {
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
