n.d(t, { m: () => lr });
var l,
    i = n(477900),
    a = n(582128),
    s = n(62617);
function r(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: r, width: d, height: c, className: o, style: u } = e,
        m = a.useMemo(
            () => (0, s.H)({ width: d, height: c, intrinsicWidth: 288, intrinsicHeight: 192, style: u }),
            [d, c, u],
        );
    return (0, i.jsx)("img", {
        style: m,
        src: "https://cdn.discordapp.com/assets/content/b501ac4c5a78c462100d3870ce7ab50a78ea7d9b2af6b8ee7a08b11bab82fb01.svg",
        className: (0, s.Z)(o),
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: r ?? "img",
    });
}
var d = n(593673),
    c = n(661531),
    o = n(369606),
    u = n(866665),
    m = n(408278),
    x = n(26430),
    h = n(174459),
    f = n(562073),
    g = n(503698),
    j = n.n(g),
    p = n(289873),
    v = n(738188),
    _ = n(834730),
    A = n(331322),
    E = n(297264),
    N = n(660183),
    b = n(448492);
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
    let { className: t, title: n, body: l, action: a } = e;
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
                    (0, i.jsx)(E.D, { variant: "heading-md/semibold", color: "text-default", children: n }),
                    (0, i.jsx)(_.E, { variant: "text-sm/medium", color: "text-subtle", children: l }),
                ],
            }),
            a,
        ],
    });
}
var y = n(17928),
    T = n(364522),
    R = n(939249),
    k = n(663417),
    D = n(140735),
    w = n(97808),
    L = n(778712),
    M = n(463930),
    U = n(478016),
    G = n(821609),
    P = n(80682),
    O = n(827827),
    B = n(461213),
    W = n(287809),
    z = n(58703),
    F = n(848966);
function H(e) {
    let { position: t } = e;
    return (0, i.jsx)("div", { className: "top" === t ? F.oT : F.yf });
}
function K(e) {
    let { position: t, children: n } = e;
    return (0, i.jsx)("div", { className: "top" === t ? F.sU : F._u, children: n });
}
var Y = n(606072),
    q = n(775602);
function $() {
    let [e, t] = a.useState(null),
        [n, l] = a.useState(null),
        [i, s] = a.useState("unknown"),
        r = (0, y.bG)([q.Ay], () => q.Ay.useReducedMotion);
    a.useEffect(() => {
        if (null == e || null == n) return;
        let t = new IntersectionObserver(
            (e) => {
                var t, n;
                let l,
                    i,
                    [a] = e;
                if (a?.rootBounds == null) return;
                let { clippedPx: r, floatTo: d } =
                    ((t = a.boundingClientRect),
                    (l = Math.max(0, (n = a.rootBounds).top - t.top)),
                    { clippedPx: l + (i = Math.max(0, t.bottom - n.bottom)), floatTo: l > i ? "top" : "bottom" });
                s(() => (r <= 1 ? "visible" : d));
            },
            { root: e, threshold: [0, 0.1, 0.5, 0.9, 1] },
        );
        return (t.observe(n), () => t.disconnect());
    }, [e, n]);
    let d = a.useCallback(() => {
        if (null == e || null == n) return;
        let t = e.getBoundingClientRect(),
            l = n.getBoundingClientRect();
        e.scrollTo({ top: e.scrollTop + l.top - t.top - (t.height - l.height) / 2, behavior: r ? "auto" : "smooth" });
    }, [e, n, r]);
    return {
        scrollerRef: t,
        scrollerNode: e,
        userRowRef: l,
        floatingRowPosition: "top" === i || "bottom" === i ? i : null,
        scrollToUserRow: d,
    };
}
var Q = n(967144),
    V = n(696451),
    X = n(562153),
    Z = n(61567);
function J(e, t) {
    let { showYouSuffix: n = !1, fallbackName: l } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = (0, y.bG)([W.default], () => W.default.getUser(t), [t]),
        a = (0, y.bG)([V.Ay], () => V.Ay.getMember(e, t), [e, t]),
        s = (0, Q.gn)(e, t, a?.colorStrings ?? null),
        r = X.Ay.useName(e, void 0, i),
        d = null == i && null != l ? l : r;
    return {
        user: i,
        member: a,
        roleColorStrings: s,
        name: d,
        displayName: n ? N.intl.formatToPlainString(Z.default.subXXA, { name: d }) : d,
    };
}
var ee = n(885386),
    et = n(927813),
    en = n(251812),
    el = n(518782);
function ei(e) {
    return e.entries.length < 3;
}
function ea(e) {
    return (0, en.K)(ei(e) ? void 0 : e.stat).name;
}
function es(e) {
    let t;
    return ei(e)
        ? "empty_state"
        : null != (t = e.computed_at) &&
            new Date(t).getTime() - e.week_start_ts * et.A.Millis.SECOND >= et.A.Millis.WEEK
          ? "podium"
          : "in_progress";
}
function er(e) {
    let { expanded: t, column: n } = e;
    return t ? "expanded" : 1 === n ? "mini" : "regular";
}
function ed(e) {
    switch (e) {
        case el.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            return "hours_played";
        case el.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return "days_played";
        case el.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return "unique_games_played";
        default:
            return null;
    }
}
n(754674);
var ec = n(192308);
function eo(e, t) {
    (0, ec.openModalLazy)(
        async () => {
            let { default: l } = await Promise.all([
                n.e("120239"),
                n.e("955410"),
                n.e("132502"),
                n.e("230029"),
                n.e("488926"),
                n.e("352456"),
                n.e("203112"),
                n.e("762831"),
                n.e("348567"),
                n.e("264236"),
                n.e("252264"),
                n.e("273232"),
                n.e("240511"),
                n.e("463095"),
                n.e("959134"),
                n.e("371482"),
                n.e("610943"),
                n.e("390213"),
                n.e("944602"),
                n.e("421778"),
                n.e("679019"),
                n.e("210413"),
                n.e("758219"),
            ]).then(n.bind(n, 499334));
            return (n) => (0, i.jsx)(l, { ...n, guildId: e, requirement: t });
        },
        { modalKey: "guild-space-leaderboard-sharing" },
    );
}
var eu = n(823353);
function em(e) {
    let { guildId: t, onActivitySharingClick: n } = e,
        l = ee.tz.useSetting(),
        a = ee.JG.useSetting().includes(t),
        s = !l || a;
    return (0, i.jsx)(C, {
        className: eu.w,
        title: N.intl.string(Z.default.ULK65a),
        body: N.intl.format(s ? Z.default.ueza5l : Z.default["81PK67"], { memberCount: 3 }),
        action: s
            ? (0, i.jsx)(G.$, {
                  variant: "secondary",
                  size: "sm",
                  text: N.intl.string(Z.default.fMbgeZ),
                  onClick: () => {
                      (n(), eo(t, Y.kG.ACTIVITY_SHARING));
                  },
              })
            : null,
    });
}
let ex =
        "https://cdn.discordapp.com/assets/content/f86a84ce3eb0d44fa03c308be330f508fbcdec9528cd7969c8f7530cdd058898.png",
    eh = `${ex} 1x, https://cdn.discordapp.com/assets/content/61de4c8a747fbce4c3772d27eeffbea00e3f3fbefd2a972d9d25b96d7116f042.png 2x, https://cdn.discordapp.com/assets/content/7e79963a2b009fabcc285dc56b301eb819e63b604739b0a48c8e0044a527a800.png 3x`;
function ef(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: r, width: d, height: c, className: o, style: u } = e,
        m = a.useMemo(
            () => (0, s.H)({ width: d, height: c, intrinsicWidth: 24, intrinsicHeight: 24, style: u }),
            [d, c, u],
        );
    return (0, i.jsx)("img", {
        style: m,
        src: ex,
        srcSet: eh,
        className: (0, s.Z)(o),
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: r ?? "img",
    });
}
let eg =
        "https://cdn.discordapp.com/assets/content/e87b249cc95509b720aae7d01a178fa3b37853797f9ad0b87c93c78934854c1f.png",
    ej = `${eg} 1x, https://cdn.discordapp.com/assets/content/4b18fe6b4c48532112a9ea66da62f20f7690a0de57378da9d92f091eba06f2f5.png 2x, https://cdn.discordapp.com/assets/content/b1f5d190ed2b05b6cefd2d44fc875f383134d87d928e3422de92e5e19378a3ae.png 3x`;
function ep(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: r, width: d, height: c, className: o, style: u } = e,
        m = a.useMemo(
            () => (0, s.H)({ width: d, height: c, intrinsicWidth: 24, intrinsicHeight: 24, style: u }),
            [d, c, u],
        );
    return (0, i.jsx)("img", {
        style: m,
        src: eg,
        srcSet: ej,
        className: (0, s.Z)(o),
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: r ?? "img",
    });
}
var ev = n(846058),
    e_ = n(342296);
function eA(e) {
    let t = Math.floor(Math.max(e, 0) / et.A.Seconds.MINUTE),
        n = Math.floor(t / et.A.Minutes.HOUR),
        l = t % et.A.Minutes.HOUR;
    return 0 === n
        ? N.intl.formatToPlainString(Z.default.DdzvGL, { minutes: l })
        : N.intl.formatToPlainString(Z.default["6Y8H0A"], { hours: n, minutes: l });
}
function eE(e, t) {
    switch (t) {
        case el.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return {
                primary: N.intl.formatToPlainString(N.t["k2UNz+"], { days: e.value }),
                secondary: eA(e.time_played_seconds),
            };
        case el.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return {
                primary: N.intl.formatToPlainString(Z.default.rgpc8E, { count: e.value }),
                secondary: eA(e.time_played_seconds),
            };
        case el.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            let n, l, i;
            return {
                primary:
                    ((l = Math.floor((n = Math.floor(Math.max(e.value, 0) / et.A.Millis.MINUTE)) / et.A.Minutes.HOUR)),
                    (i = n % et.A.Minutes.HOUR),
                    0 === l
                        ? N.intl.formatToPlainString(Z.default.bgQf2H, { minutes: i })
                        : 0 === i
                          ? N.intl.formatToPlainString(Z.default["D/HToK"], { hours: l })
                          : N.intl.formatToPlainString(Z.default.fvtrHn, { hours: l, minutes: i })),
            };
        default:
            return { primary: "\u2014" };
    }
}
var eN = n(793169),
    eb = n(81466),
    eI = n(406810),
    eS = n(687966),
    eC = n(683063),
    ey = n(573435),
    eT = n(402860),
    eR = n(396583),
    ek = n(587895),
    eD = n(429913),
    ew = n(280450);
function eL(e, t) {
    return { id: e, name: N.intl.string(Z.default.rhDbuQ), iconUrl: void 0, isLoading: t };
}
function eM(e, t) {
    return e.get(t) ?? eL(t, !1);
}
function eU(e, t) {
    return t.map((t) => eM(e, t));
}
function eG(e, t) {
    let n = t.user_id,
        l = (0, y.bG)([ew.default], () => ew.default.getId() === n, [n]);
    return J(e, n, { showYouSuffix: l, fallbackName: t.name });
}
function eP(e, t) {
    let n = (0, y.bG)([W.default], () => W.default.getCurrentUser()?.id),
        {
            isSharingActivity: l,
            isSharingActivityInGuild: i,
            hasPersonalizationConsent: s,
            hasFetchedConsents: r,
        } = (0, Y.T4)(e),
        d = !l || !i || !s;
    return a.useMemo(() => {
        if (!r) return;
        if (null == t || !d || null == n) return t;
        let e = t.entries.filter((e) => e.user_id !== n);
        return e.length === t.entries.length ? t : { ...t, entries: e.map((e, t) => ({ ...e, rank: t + 1 })) };
    }, [t, d, n, r]);
}
var eO = n(518477),
    eB = n(870087);
function eW(e) {
    let {
            guildId: t,
            entry: n,
            stat: l,
            games: s,
            isCurrentUser: r,
            shouldDimForCurrentUser: d,
            isFloating: c = !1,
            rowRef: o,
            onClick: u,
            metricWidth: m,
        } = e,
        x = eG(t, n),
        h = n.application_ids[0],
        f = null != h ? eM(s, h) : void 0,
        g = n.user_id,
        p = a.useCallback(() => {
            (u?.(),
                (0, eT.openUserProfileModal)({
                    userId: g,
                    guildId: t,
                    tabSection: eO.RP.ACTIVITY,
                    scrollTarget: eO.bk.RECENT_ACTIVITY,
                }));
        }, [u, g, t]);
    return (0, i.jsxs)("div", {
        ref: o,
        "aria-hidden": c,
        inert: c,
        className: j()(eB.nM, { [eB.Bh]: r && !c, [eB.lR]: d }),
        children: [
            (0, i.jsx)(ez, { guildId: t, entry: n, identity: x, lastPlayedGame: f, onClick: u }),
            (0, i.jsx)(eK, { entry: n, stat: l, width: m, onClick: p }),
            (0, i.jsx)(eQ, {
                name: x.name,
                applicationIds: n.application_ids,
                applicationCount: n.application_count,
                games: s,
                onClick: p,
            }),
        ],
    });
}
function ez(e) {
    let { guildId: t, entry: n, identity: l, lastPlayedGame: s, onClick: r } = e,
        d = a.useRef(null),
        c = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(eF, { rank: n.rank }),
                (0, i.jsx)(w.eu, {
                    size: L._3.SIZE_32,
                    src: l.user?.getAvatarURL(t, (0, L.FT)(L._3.SIZE_32)) ?? void 0,
                    className: eB.my,
                    "aria-hidden": !0,
                }),
                (0, i.jsxs)("div", {
                    className: eB.Dc,
                    children: [
                        (0, i.jsx)(E.D, {
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            lineClamp: 1,
                            children: (0, i.jsx)(M.g, {
                                name: l.displayName,
                                colorString: l.member?.colorString ?? null,
                                colorStrings: l.roleColorStrings,
                            }),
                        }),
                        null != s &&
                            (0, i.jsx)(_.E, {
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                lineClamp: 1,
                                children: N.intl.formatToPlainString(Z.default.YuNVPY, { gameName: s.name }),
                            }),
                    ],
                }),
            ],
        });
    return null == l.user
        ? (0, i.jsx)("div", { className: eB.D_, children: c })
        : (0, i.jsx)(e_.A, {
              targetElementRef: d,
              user: l.user,
              guildId: t,
              children: (e) =>
                  (0, i.jsx)(R.D, {
                      ...e,
                      innerRef: d,
                      className: j()(eB.D_, eB.FB),
                      onClick: (t) => {
                          (r?.(), e.onClick(t));
                      },
                      children: c,
                  }),
          });
}
function eF(e) {
    let { rank: t } = e,
        n = N.intl.formatToPlainString(Z.default.I4JiAQ, { rank: t });
    switch (t) {
        case 1:
            return (0, i.jsx)("div", { className: eB.Tm, children: (0, i.jsx)(eN.t, { alt: n }) });
        case 2:
            return (0, i.jsx)("div", { className: eB.Tm, children: (0, i.jsx)(ef, { alt: n }) });
        case 3:
            return (0, i.jsx)("div", { className: eB.Tm, children: (0, i.jsx)(ep, { alt: n }) });
        default:
            return (0, i.jsxs)("div", {
                className: eB.mH,
                children: [
                    (0, i.jsx)(D.A, { children: n }),
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
function eH(e) {
    let { stat: t } = e;
    switch (t) {
        case el.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return (0, i.jsx)(eb.CalendarIcon, { size: "xxs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case el.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            return (0, i.jsx)(eI.ClockIcon, { size: "xxs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case el.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return (0, i.jsx)(eS.GameControllerIcon, { size: "xxs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        default:
            return null;
    }
}
function eK(e) {
    let { entry: t, stat: n, width: l, onClick: a } = e,
        { primary: s, secondary: r } = eE(t, n);
    return (0, i.jsxs)(R.D, {
        className: eB.TH,
        style: null != l ? { width: l } : void 0,
        "aria-label": N.intl.string(Z.default.o6mBdl),
        onClick: a,
        children: [
            (0, i.jsxs)("div", {
                className: eB.bf,
                children: [
                    (0, i.jsx)(eH, { stat: n }),
                    (0, i.jsx)(_.E, { variant: "text-sm/medium", color: "text-subtle", children: s }),
                ],
            }),
            null != r && (0, i.jsx)(_.E, { variant: "text-xs/medium", color: "text-muted", children: r }),
        ],
    });
}
function eY(e) {
    let { game: t, notched: n } = e;
    return (0, i.jsx)("span", {
        className: eB.rO,
        "aria-hidden": !0,
        children: (0, i.jsx)(ey.Ay, {
            mask: n ? ey.l8[24] : ey.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null != t.iconUrl
                    ? (0, i.jsx)("img", { className: eB.Gt, src: t.iconUrl, alt: "", "aria-hidden": !0 })
                    : (0, i.jsx)("span", { className: eB.ct, "aria-hidden": !0 }),
        }),
    });
}
function eq(e) {
    let { played: t, totalCount: n } = e,
        l = t.filter((e) => null != e.iconUrl || e.isLoading).slice(0, 2),
        a = n - l.length;
    return (0, i.jsxs)("div", {
        className: eB.Nw,
        children: [
            l.map((e, t) => (0, i.jsx)(eY, { game: e, notched: a > 0 || t !== l.length - 1 }, `${e.id}-${t}`)),
            a > 0
                ? (0, i.jsx)("span", {
                      className: eB.rO,
                      children: (0, i.jsx)(ey.Ay, {
                          mask: ey.Ay.Masks.SQUIRCLE,
                          width: 24,
                          height: 24,
                          children: (0, i.jsx)("div", {
                              className: eB.p0,
                              children: (0, i.jsx)(_.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-subtle",
                                  children: N.intl.formatToPlainString(Z.default.JiMMEd, { count: a }),
                              }),
                          }),
                      }),
                  })
                : null,
        ],
    });
}
function e$(e) {
    let { played: t, totalCount: n, children: l } = e,
        a = t.filter((e) => null != e.iconUrl || e.isLoading);
    return (0, i.jsx)(eC.u, {
        body:
            0 === t.length
                ? N.intl.string(Z.default["7CrlYb"])
                : 1 === t.length
                  ? N.intl.formatToPlainString(Z.default.dbNpK0, { firstGame: t[0].name })
                  : 2 === t.length && 2 === n
                    ? N.intl.formatToPlainString(Z.default.tqVg4M, { firstGame: t[0].name, secondGame: t[1].name })
                    : N.intl.formatToPlainString(Z.default.bxcrSz, {
                          firstGame: t[0].name,
                          secondGame: t[1].name,
                          otherCount: n - 2,
                      }),
        asset: a.length > 0 ? (0, i.jsx)(eq, { played: a, totalCount: a.length }) : void 0,
        assetSize: a.length > 1 ? 43 : 24,
        children: l,
    });
}
function eQ(e) {
    let { name: t, applicationIds: n, applicationCount: l, games: a, onClick: s } = e,
        r = eU(a, n);
    return (0, i.jsx)("div", {
        className: eB.ag,
        children: (0, i.jsx)(e$, {
            played: r,
            totalCount: l,
            children: (0, i.jsx)(R.D, {
                className: j()(eB.Nw, eB.Dz),
                "aria-label": N.intl.formatToPlainString(Z.default.o6mBdl, { name: t }),
                onClick: s,
                children: (0, i.jsx)(eq, { played: r, totalCount: l }),
            }),
        }),
    });
}
var eV = n(189043);
function eX(e) {
    let { guildId: t, entries: n, stat: l, games: a, currentUserEntry: s, currentUserPillarRef: r, onClick: d } = e,
        c = {
            1: { column: eV.HC, pillar: eV.P5 },
            2: { column: eV.th, pillar: eV.Vk },
            3: { column: eV.Ou, pillar: eV.el },
        };
    return (0, i.jsx)("div", {
        className: eV.pI,
        role: "list",
        "aria-label": N.intl.string(Z.default.wKXLfQ),
        children: n.map((e, n) =>
            (0, i.jsx)(
                eZ,
                {
                    guildId: t,
                    entry: e,
                    place: n + 1,
                    columnClassName: c[n + 1].column,
                    pillarClassName: c[n + 1].pillar,
                    stat: l,
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
function eZ(e) {
    let {
            guildId: t,
            entry: n,
            place: l,
            columnClassName: s,
            pillarClassName: r,
            stat: d,
            games: c,
            isCurrentUser: o,
            currentUserPillarRef: u,
            onClick: m,
        } = e,
        x = eU(c, n.application_ids),
        h = eG(t, n),
        { primary: f } = eE(n, d),
        g = 1 === l ? L._3.SIZE_48 : L._3.SIZE_40,
        p = a.useRef(null),
        v = 1 === l ? ev.b : 2 === l ? ef : ep,
        A = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: eV.R3,
                    children: [
                        (0, i.jsx)(w.eu, {
                            size: g,
                            src: h.user?.getAvatarURL(t, (0, L.FT)(g)) ?? void 0,
                            "aria-hidden": !0,
                        }),
                        (0, i.jsx)(v, { className: eV.dR, alt: "", ariaHidden: !0 }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: j()(eV.DX, r),
                    children: [
                        (0, i.jsx)(E.D, {
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            lineClamp: 1,
                            className: eV.IY,
                            children: (0, i.jsx)(M.g, {
                                name: h.displayName,
                                colorString: h.member?.colorString ?? null,
                                colorStrings: h.roleColorStrings,
                            }),
                        }),
                        (0, i.jsx)(e$, {
                            played: x,
                            totalCount: n.application_count,
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
                ? (0, i.jsx)(e_.A, {
                      targetElementRef: p,
                      user: h.user,
                      guildId: t,
                      children: (e) =>
                          (0, i.jsx)(R.D, {
                              ...e,
                              className: eV.fs,
                              innerRef: p,
                              onClick: (t) => {
                                  (m?.(), e.onClick(t));
                              },
                              children: A,
                          }),
                  })
                : (0, i.jsx)("div", { className: eV.fs, children: A }),
    });
}
var eJ = n(652215),
    e0 = n(219047);
function e1(e) {
    let t,
        n,
        l,
        { guildId: s, data: r, inModal: d = !1, column: c } = e,
        { stat: o, entries: u } = r,
        m = (0, y.bG)([W.default], () => W.default.getCurrentUser()?.id),
        x = a.useMemo(() => u.find((e) => e.user_id === m) ?? null, [u, m]),
        f = a.useMemo(() => {
            let e = u.slice(0, 20);
            return null == x || e.includes(x) ? e : [...e, x];
        }, [u, x]),
        g = a.useMemo(() => Array.from(new Set(f.map((e) => e.user_id))), [f]);
    (0, P.k6)(s, g);
    let p = ed(o),
        v =
            ((t = a.useMemo(() => Array.from(new Set(f.flatMap((e) => e.application_ids))), [f])),
            (n = (0, eD.A)(t)),
            (l = (0, y.yK)([ek.A], () => t.map((e) => ek.A.didFetchingApplicationFail(e)))),
            a.useMemo(() => {
                let e = new Map();
                return (
                    t.forEach((t, i) => {
                        let a = n[i];
                        e.set(
                            t,
                            null != a
                                ? { id: t, name: a.name, iconUrl: a.getIconURL(64) ?? void 0, isLoading: !1 }
                                : eL(t, !l[i]),
                        );
                    }),
                    e
                );
            }, [t, n, l])),
        _ = ei(r),
        A = es(r),
        E = "podium" === A,
        b = er({ expanded: d, column: c }),
        S = [f[0], f[1], f[2]],
        { scrollerRef: C, scrollerNode: k, userRowRef: D, floatingRowPosition: w, scrollToUserRow: L } = $(),
        M = (function (e) {
            let [t, n] = a.useState(!1);
            return (
                a.useEffect(() => {
                    if (null == e) return;
                    function t() {
                        n(0 !== e.clientHeight && e.scrollHeight - e.scrollTop - e.clientHeight <= 1);
                    }
                    (t(), e.addEventListener("scroll", t, { passive: !0 }));
                    let l = new ResizeObserver(t);
                    return (
                        l.observe(e),
                        () => {
                            (e.removeEventListener("scroll", t), l.disconnect());
                        }
                    );
                }, [e]),
                t
            );
        })(k),
        U = null == x && null != m,
        G = null != w,
        O = a.useMemo(() => {
            let e = null == x || f.includes(x) ? f : [...f, x];
            return e.length > 0 ? e : f;
        }, [f, x]),
        { metricMeasureRef: B, metricWidth: z } = (function () {
            let [e, t] = a.useState(null),
                [n, l] = a.useState(null);
            return (
                a.useEffect(() => {
                    if (null == e) return;
                    let t = new ResizeObserver((e) => {
                        let [t] = e;
                        null != t && l(Math.ceil(t.borderBoxSize[0]?.inlineSize ?? t.contentRect.width));
                    });
                    return (t.observe(e), () => t.disconnect());
                }, [e]),
                { metricMeasureRef: t, metricWidth: n }
            );
        })(),
        F = (0, i.jsx)("div", {
            ref: B,
            className: e0.V$,
            "aria-hidden": !0,
            children: O.map((e) => (0, i.jsx)(eK, { entry: e, stat: o }, e.user_id)),
        });
    !(function (e) {
        let {
                guildId: t,
                leaderboardLength: n,
                leaderboardState: l,
                leaderboardView: i,
                metric: s,
                isAtEnd: r,
                isEmpty: d,
            } = e,
            c = a.useRef(null),
            o = `${t}:${n}:${l}:${i}:${s}`,
            u = a.useCallback(() => {
                c.current !== o &&
                    ((c.current = o),
                    h.default.track(eJ.HAw.LEADERBOARD_END_IMPRESSION, {
                        guild_id: t,
                        leaderboard_length: n,
                        leaderboard_state: l,
                        leaderboard_view: i,
                        metric: s,
                    }));
            }, [t, o, n, l, i, s]);
        a.useEffect(() => {
            (d || r) && u();
        }, [d, r, u]);
    })({
        guildId: s,
        leaderboardLength: _ ? 0 : f.length,
        leaderboardState: A,
        leaderboardView: b,
        metric: p,
        isAtEnd: M,
        isEmpty: _,
    });
    let Y = a.useCallback(
            (e) => {
                h.default.track(eJ.HAw.LEADERBOARD_CLICK, {
                    location: e,
                    guild_id: s,
                    leaderboard_state: A,
                    leaderboard_view: b,
                    metric: p,
                });
            },
            [s, A, b, p],
        ),
        q = a.useCallback(
            (e) => {
                let t = e === x;
                return (0, i.jsx)(
                    eW,
                    {
                        guildId: s,
                        entry: e,
                        stat: o,
                        games: v,
                        isCurrentUser: t,
                        shouldDimForCurrentUser: t && G,
                        rowRef: t ? D : void 0,
                        onClick: () => Y("row"),
                        metricWidth: z ?? void 0,
                    },
                    `${e.rank}-${e.user_id}`,
                );
            },
            [G, x, v, s, o, D, Y, z],
        );
    return _
        ? (0, i.jsx)("div", {
              className: e0.Cm,
              children: (0, i.jsx)(em, { guildId: s, onActivitySharingClick: () => Y("activity_sharing") }),
          })
        : null == z
          ? (0, i.jsxs)("div", { className: e0.rf, children: [F, (0, i.jsx)(I, {})] })
          : (0, i.jsxs)("div", {
                className: e0.rf,
                children: [
                    F,
                    (0, i.jsxs)("div", {
                        className: e0.SY,
                        children: [
                            (0, i.jsxs)(T.d_, {
                                className: j()(e0.p_, { [e0.zE]: d, [e0.Ng]: U }),
                                ref: C,
                                children: [
                                    E &&
                                        (0, i.jsx)(eX, {
                                            guildId: s,
                                            entries: S,
                                            stat: o,
                                            games: v,
                                            currentUserEntry: x,
                                            currentUserPillarRef: D,
                                            onClick: () => Y("podium"),
                                        }),
                                    f.map(q),
                                ],
                            }),
                            (null != x && null != w) || (U && !M)
                                ? (0, i.jsx)(H, { position: "top" !== w || U ? "bottom" : "top" })
                                : null,
                            null != x &&
                                null != w &&
                                (0, i.jsx)(K, {
                                    position: w,
                                    children: (0, i.jsx)(R.D, {
                                        className: e0.Po,
                                        "aria-label": N.intl.string(Z.default.d0Z8kd),
                                        onClick: L,
                                        children: (0, i.jsx)(eW, {
                                            guildId: s,
                                            entry: x,
                                            stat: o,
                                            games: v,
                                            isCurrentUser: !0,
                                            shouldDimForCurrentUser: !1,
                                            isFloating: !0,
                                            onClick: () => Y("row"),
                                            metricWidth: z ?? void 0,
                                        }),
                                    }),
                                }),
                            U && (0, i.jsx)(e6, { guildId: s, onActivitySharingClick: () => Y("activity_sharing") }),
                        ],
                    }),
                    (0, i.jsx)(e2, { computedAt: r.computed_at, inModal: d }),
                ],
            });
}
function e2(e) {
    let { computedAt: t, inModal: n } = e,
        l = (0, i.jsxs)("div", {
            className: e0.z8,
            children: [
                (0, i.jsx)(k.RefreshIcon, { size: "xxs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 }),
                (0, i.jsx)(_.E, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: N.intl.string(Z.default["/nma+a"]),
                }),
            ],
        });
    return null == t
        ? (0, i.jsx)("div", { className: e0.qr, children: l })
        : (0, i.jsx)("div", {
              className: j()(e0.qr, { [e0.zE]: n }),
              tabIndex: 0,
              children: (0, i.jsx)(u.m, {
                  text: N.intl.formatToPlainString(Z.default["1bt50t"], {
                      timestamp: (0, z.mk)(new Date(t)).toLowerCase(),
                  }),
                  position: "bottom",
                  children: l,
              }),
          });
}
function e6(e) {
    let { guildId: t, onActivitySharingClick: n } = e,
        {
            isSharingActivity: l,
            isSharingActivityInGuild: s,
            hasPersonalizationConsent: r,
            requirement: d,
        } = (0, Y.T4)(t),
        o = null != d,
        u = (0, y.bG)([B.A], () => B.A.getStatus() === eJ.clD.INVISIBLE),
        m = N.intl.string(Z.default.toxuHd),
        x = !1;
    l && s
        ? r
            ? u && ((m = N.intl.string(Z.default.PTDDhW)), (x = !0))
            : (m = N.intl.string(Z.default.mTARYx))
        : (m = N.intl.string(Z.default["8y885d"]));
    let [h] = a.useState(o),
        [f] = a.useState(x),
        g = !o && !x && h,
        j = !o && !x && f;
    j ? (m = N.intl.string(Z.default.cgRADC)) : g && (m = N.intl.string(Z.default.dqYuni));
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
              className: e0.Xx,
              children: [
                  (0, i.jsxs)("div", {
                      className: e0.kd,
                      children: [
                          (0, i.jsxs)("div", {
                              className: e0.nk,
                              children: [
                                  (0, i.jsx)(D.A, { children: N.intl.string(Z.default["oHdW+u"]) }),
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
                              className: e0.SA,
                              "aria-hidden": !0,
                              status: u ? eJ.clD.INVISIBLE : void 0,
                          }),
                          (0, i.jsxs)("div", {
                              className: e0.ko,
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
                                      className: e0.LF,
                                      children: [
                                          g || j
                                              ? (0, i.jsx)(U.U, {
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
                          className: e0.rl,
                          children: (0, i.jsx)(G.$, {
                              variant: "secondary",
                              size: "sm",
                              text: N.intl.string(Z.default.fMbgeZ),
                              onClick: () => {
                                  (n(), eo(t, d));
                              },
                          }),
                      }),
                  x &&
                      !o &&
                      (0, i.jsx)(G.$, {
                          variant: "secondary",
                          size: "sm",
                          text: N.intl.string(N.t.fwPurU),
                          onClick: () => {
                              (0, O.A)({ nextStatus: eJ.clD.ONLINE, prevStatus: eJ.clD.INVISIBLE });
                          },
                      }),
              ],
          });
}
var e3 = n(224640),
    e8 = n(20742),
    e4 = n(515746);
function e7(e) {
    let { data: t } = e,
        n = (0, en.K)(t.stat),
        {
            ended: l,
            endDate: s,
            badgeLabel: r,
        } = (function (e) {
            let t = (e + et.A.Seconds.WEEK) * et.A.Millis.SECOND,
                [n, l] = a.useState(() => Date.now()),
                i = t - n,
                s = i <= 0,
                r = i - (Math.ceil(i / et.A.Millis.DAY) - 1) * et.A.Millis.DAY;
            return (
                (0, eR.A)(() => l(Date.now()), s ? null : r),
                a.useMemo(
                    () => ({
                        ended: s,
                        endDate: new Date(t),
                        badgeLabel: s
                            ? N.intl.string(Z.default["J8r/7L"])
                            : N.intl.formatToPlainString(Z.default["PuaR+2"], { days: Math.ceil(i / et.A.Millis.DAY) }),
                    }),
                    [s, t, i],
                )
            );
        })(t.week_start_ts),
        d = ee.PZ.useSetting(),
        c = 2 > (0, z.m_)(s, new Date()) ? (0, z.mk)(s, !1, d).toLowerCase() : (0, z.i$)(s, "L LT", d).toLowerCase(),
        o = l
            ? N.intl.format(Z.default.kG9XmM, { endedAt: c, nextStatName: (0, en.K)(t.next_stat).name })
            : N.intl.format(Z.default["X+VLqi"], { statQuestion: n.question, endsAt: c });
    return (0, i.jsx)(eC.u, {
        title: n.name,
        body: o,
        position: "top",
        children: (0, i.jsx)("div", {
            className: j()(e4.qS, l ? e4.yM : e4.Qk),
            tabIndex: 0,
            children: (0, i.jsx)(_.E, {
                variant: "text-xs/semibold",
                color: l ? "text-muted" : "text-brand",
                children: r,
            }),
        }),
    });
}
function e5(e) {
    let { guildId: t, data: n, expanded: l, column: i, enabled: s = !0 } = e,
        [r, d] = a.useState(null),
        c = a.useRef(null),
        o = a.useRef({ guildId: t, data: n, expanded: l, column: i });
    a.useEffect(() => {
        o.current = { guildId: t, data: n, expanded: l, column: i };
    }, [t, n, l, i]);
    let u = a.useCallback((e) => {
        let t = c.current;
        if (null == t) return;
        c.current = null;
        let n = Date.now() - t;
        if (n < 250) return;
        let l = o.current;
        null != l.data &&
            h.default.track(
                eJ.HAw.LEADERBOARD_HOVER,
                {
                    guild_id: l.guildId,
                    duration: Math.round(n) / 1e3,
                    leaderboard_state: es(l.data),
                    leaderboard_view: er({ expanded: l.expanded, column: l.column }),
                    metric: ed(l.data.stat),
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
                    window.addEventListener("blur", n),
                    document.addEventListener("visibilitychange", l),
                    window.addEventListener("pagehide", i),
                    () => {
                        (r.removeEventListener("mouseenter", e),
                            r.removeEventListener("mouseleave", t),
                            window.removeEventListener("blur", n),
                            document.removeEventListener("visibilitychange", l),
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
            function n() {
                u(!1);
            }
            function l() {
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
var e9 = n(460614);
function te(e) {
    let { guildId: t, data: n, modalProps: l } = e,
        a = eP(t, n),
        s = e5({ guildId: t, data: a, expanded: !0 });
    return null == a
        ? null
        : (0, i.jsx)(e3.d, {
              size: "lg",
              "aria-label": ea(a),
              ...l,
              children: (0, i.jsxs)("div", {
                  ref: s,
                  children: [
                      (0, i.jsxs)("div", {
                          className: e9.wx,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: e9.LD,
                                  children: [
                                      (0, i.jsx)(o.TrophyIcon, {
                                          size: "xs",
                                          color: c.A.colors.ICON_SUBTLE,
                                          "aria-hidden": !0,
                                      }),
                                      (0, i.jsx)(E.D, {
                                          variant: "heading-sm/medium",
                                          className: e9.DD,
                                          children: ea(a),
                                      }),
                                      (0, i.jsx)(e7, { data: a }),
                                  ],
                              }),
                              (0, i.jsx)(e8.s_, {}),
                          ],
                      }),
                      (0, i.jsx)("div", {
                          className: e9.rf,
                          children: (0, i.jsx)(e1, { guildId: t, data: a, inModal: !0 }),
                      }),
                  ],
              }),
          });
}
var tt = n(452027),
    tn = n(103557),
    tl = n(825484),
    ti = n(95477),
    ta = n(241326),
    ts = n(683071),
    tr = n(2553),
    td = n(405810),
    tc = n(967198),
    to = n(488428),
    tu = n(776231);
let tm = (0, n(676279).cy)();
function tx(e, t, n) {
    let l = n.startsWith("a_"),
        i = l ? (tm ? "webp" : "gif") : tm ? "webp" : "jpg",
        { CDN_HOST: a, API_ENDPOINT: s } = window.GLOBAL_ENV,
        r = eJ.Rsh.GUILD_SPACE_IMAGE_TEXT_WIDGET_IMAGE(e, t, n, i),
        d = null != a ? `https://${a}${r}` : location.protocol + s + r,
        c = { size: (0, tu.kr)(500 * (0, tu.mZ)()) };
    return (
        "jpg" === i && (c.quality = "lossless"), "webp" === i && l && (c.animated = !0), (d += `?${to.stringify(c)}`)
    );
}
var th = n(868602),
    tf = n(445187),
    tg = n(650583),
    tj = n(684343);
function tp(e) {
    let { label: t, tabs: n, selectedId: l, panelId: s, getTabId: r, onSelect: d } = e,
        c = a.useCallback((e) => {
            let t,
                n = e.currentTarget,
                l = n.closest('[role="tablist"]');
            if (null == l) return;
            let i = Array.from(l.querySelectorAll('[role="tab"]')),
                a = i.indexOf(n);
            if (-1 !== a && 0 !== i.length) {
                switch (e.key) {
                    case tg.dh.ARROW_RIGHT:
                    case tg.dh.ARROW_DOWN:
                        t = (a + 1) % i.length;
                        break;
                    case tg.dh.ARROW_LEFT:
                    case tg.dh.ARROW_UP:
                        t = (a - 1 + i.length) % i.length;
                        break;
                    case tg.dh.HOME:
                        t = 0;
                        break;
                    case tg.dh.END:
                        t = i.length - 1;
                        break;
                    default:
                        return;
                }
                (e.preventDefault(), i[t]?.focus());
            }
        }, []);
    return (0, i.jsx)("div", {
        className: tj.vR,
        role: "tablist",
        "aria-label": t,
        children: n.map((e) => {
            let t = e.id === l;
            return (0, i.jsx)(
                "button",
                {
                    type: "button",
                    role: "tab",
                    id: r(e.id),
                    className: tj.Mf,
                    "aria-selected": t,
                    "aria-controls": s,
                    tabIndex: t ? 0 : -1,
                    onClick: () => d(e.id),
                    onKeyDown: c,
                    children: (0, i.jsx)(_.E, {
                        className: tj.Pf,
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
var tv = n(831544),
    t_ = n(28863),
    tA = n(148166),
    tE = n(427209),
    tN = n(294454),
    tb = n(605810);
function tI(e) {
    let { target: t, tabIndex: l } = e;
    return (0, i.jsx)("div", {
        className: tb.ql,
        children: (0, i.jsx)(u.m, {
            text: N.intl.string(N.t.RDE0Sc),
            ariaHidden: !0,
            children: (0, i.jsx)(m.K, {
                icon: tE.A,
                size: "sm",
                variant: "overlay-secondary",
                tabIndex: l,
                "aria-label": N.intl.string(N.t.Ej3B3Y),
                onClick: () => {
                    (0, ec.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("325522"),
                                n.e("401317"),
                                n.e("790340"),
                                n.e("147119"),
                                n.e("425292"),
                                n.e("209994"),
                                n.e("457428"),
                                n.e("552653"),
                                n.e("311580"),
                                n.e("174554"),
                                n.e("116815"),
                                n.e("537596"),
                                n.e("132502"),
                                n.e("230029"),
                                n.e("891089"),
                                n.e("861973"),
                                n.e("196063"),
                                n.e("392028"),
                                n.e("124054"),
                                n.e("441674"),
                                n.e("152862"),
                                n.e("148326"),
                                n.e("148729"),
                                n.e("650195"),
                                n.e("67702"),
                                n.e("662387"),
                                n.e("85427"),
                                n.e("247917"),
                                n.e("89530"),
                                n.e("296956"),
                                n.e("629972"),
                                n.e("334168"),
                                n.e("582012"),
                                n.e("495296"),
                                n.e("162182"),
                                n.e("327545"),
                                n.e("860640"),
                                n.e("681801"),
                                n.e("179652"),
                                n.e("916885"),
                                n.e("826139"),
                                n.e("405714"),
                                n.e("360732"),
                                n.e("352456"),
                                n.e("638781"),
                                n.e("678906"),
                                n.e("64769"),
                                n.e("644013"),
                                n.e("971156"),
                                n.e("260009"),
                                n.e("691398"),
                                n.e("266201"),
                                n.e("752704"),
                                n.e("56606"),
                                n.e("206516"),
                                n.e("163466"),
                                n.e("234017"),
                                n.e("40791"),
                                n.e("358404"),
                                n.e("996907"),
                                n.e("831130"),
                                n.e("377989"),
                                n.e("529787"),
                                n.e("358931"),
                                n.e("880150"),
                                n.e("168248"),
                                n.e("490743"),
                                n.e("533240"),
                                n.e("962953"),
                                n.e("734818"),
                                n.e("216870"),
                                n.e("89100"),
                                n.e("340363"),
                                n.e("459086"),
                                n.e("720210"),
                                n.e("61531"),
                                n.e("177086"),
                                n.e("319714"),
                                n.e("189281"),
                                n.e("205035"),
                                n.e("200075"),
                                n.e("896995"),
                                n.e("267732"),
                                n.e("686889"),
                                n.e("560570"),
                                n.e("896691"),
                                n.e("779367"),
                                n.e("992956"),
                                n.e("7452"),
                                n.e("60002"),
                                n.e("189423"),
                                n.e("649500"),
                                n.e("683426"),
                                n.e("501546"),
                                n.e("20409"),
                                n.e("56347"),
                                n.e("424199"),
                                n.e("496818"),
                                n.e("587618"),
                                n.e("645499"),
                                n.e("342551"),
                                n.e("888326"),
                                n.e("695765"),
                                n.e("777489"),
                                n.e("188941"),
                                n.e("264236"),
                                n.e("481647"),
                                n.e("349619"),
                                n.e("776602"),
                                n.e("543039"),
                                n.e("398125"),
                                n.e("221825"),
                                n.e("930758"),
                                n.e("140402"),
                                n.e("244560"),
                                n.e("253729"),
                                n.e("593600"),
                                n.e("266900"),
                                n.e("707826"),
                                n.e("948804"),
                                n.e("721690"),
                                n.e("695445"),
                                n.e("611523"),
                                n.e("136022"),
                                n.e("199999"),
                                n.e("828111"),
                                n.e("890027"),
                                n.e("832817"),
                                n.e("425544"),
                                n.e("416143"),
                                n.e("844695"),
                                n.e("234236"),
                                n.e("776195"),
                                n.e("87306"),
                                n.e("92124"),
                                n.e("988077"),
                                n.e("809915"),
                                n.e("776750"),
                                n.e("812310"),
                                n.e("361626"),
                                n.e("561216"),
                                n.e("646506"),
                                n.e("165595"),
                                n.e("445124"),
                                n.e("313681"),
                                n.e("445421"),
                                n.e("631608"),
                                n.e("343550"),
                                n.e("552712"),
                                n.e("829177"),
                                n.e("832823"),
                                n.e("592028"),
                                n.e("761935"),
                                n.e("106943"),
                                n.e("232551"),
                                n.e("511527"),
                                n.e("892340"),
                                n.e("763070"),
                                n.e("425906"),
                                n.e("381933"),
                                n.e("14962"),
                                n.e("502018"),
                                n.e("123216"),
                                n.e("123353"),
                                n.e("249366"),
                                n.e("728633"),
                                n.e("588940"),
                                n.e("628439"),
                                n.e("756148"),
                                n.e("401518"),
                                n.e("225990"),
                                n.e("539620"),
                                n.e("133902"),
                                n.e("252264"),
                                n.e("183534"),
                                n.e("248329"),
                                n.e("770697"),
                                n.e("147786"),
                                n.e("633128"),
                                n.e("854461"),
                                n.e("401590"),
                                n.e("790244"),
                                n.e("498215"),
                                n.e("482861"),
                                n.e("398793"),
                                n.e("935715"),
                                n.e("836545"),
                                n.e("273232"),
                                n.e("466322"),
                                n.e("894747"),
                                n.e("593176"),
                                n.e("121435"),
                                n.e("592731"),
                                n.e("53374"),
                                n.e("256616"),
                                n.e("858514"),
                                n.e("240511"),
                                n.e("344265"),
                                n.e("718573"),
                                n.e("784103"),
                                n.e("643612"),
                                n.e("346102"),
                                n.e("486792"),
                                n.e("463095"),
                                n.e("537894"),
                                n.e("128534"),
                                n.e("784041"),
                                n.e("799657"),
                                n.e("810034"),
                                n.e("869546"),
                                n.e("124060"),
                                n.e("817852"),
                                n.e("831145"),
                                n.e("556967"),
                                n.e("133179"),
                                n.e("146566"),
                                n.e("614784"),
                                n.e("317225"),
                                n.e("444376"),
                                n.e("32661"),
                                n.e("187856"),
                                n.e("334127"),
                                n.e("696123"),
                                n.e("400954"),
                                n.e("610449"),
                                n.e("32781"),
                                n.e("238412"),
                                n.e("8563"),
                                n.e("499941"),
                                n.e("693832"),
                                n.e("488990"),
                                n.e("577084"),
                                n.e("332470"),
                                n.e("170653"),
                                n.e("545527"),
                                n.e("193158"),
                                n.e("318546"),
                                n.e("843719"),
                                n.e("912773"),
                                n.e("710638"),
                                n.e("73500"),
                                n.e("662355"),
                                n.e("418943"),
                                n.e("455924"),
                                n.e("41991"),
                                n.e("959134"),
                                n.e("377766"),
                                n.e("872648"),
                                n.e("565065"),
                                n.e("834386"),
                                n.e("4780"),
                                n.e("784727"),
                                n.e("130674"),
                                n.e("959669"),
                                n.e("371482"),
                                n.e("126780"),
                                n.e("220518"),
                                n.e("360781"),
                                n.e("88160"),
                                n.e("631825"),
                                n.e("329218"),
                                n.e("622825"),
                                n.e("851243"),
                                n.e("748015"),
                                n.e("278424"),
                                n.e("844780"),
                                n.e("237834"),
                                n.e("807771"),
                                n.e("478476"),
                                n.e("496715"),
                                n.e("681541"),
                                n.e("115754"),
                                n.e("29664"),
                                n.e("243100"),
                                n.e("982699"),
                                n.e("250478"),
                                n.e("863076"),
                                n.e("680986"),
                                n.e("462276"),
                                n.e("90373"),
                                n.e("979630"),
                                n.e("293697"),
                                n.e("568980"),
                                n.e("168177"),
                                n.e("260218"),
                                n.e("236946"),
                                n.e("935948"),
                                n.e("692639"),
                                n.e("565617"),
                                n.e("890480"),
                                n.e("440963"),
                                n.e("766031"),
                                n.e("394317"),
                                n.e("744385"),
                                n.e("304329"),
                                n.e("84755"),
                                n.e("256831"),
                            ]).then(n.bind(n, 99266));
                            return function (n) {
                                return (0, i.jsx)(e, { ...n, target: t });
                            };
                        },
                        { stackingBehavior: "stack", modalKey: tN.aU },
                    );
                },
            }),
        }),
    });
}
var tS = n(272984);
function tC(e) {
    let { artist: t, itemProps: n } = e,
        l = null != t.artist_image_hash ? tS.RQ.IMAGE(t.artist_image_hash) : null,
        s = a.useMemo(
            () => ({
                kind: "artist",
                shareUrl: tS.RQ.WEB_OPEN(tS.M0.ARTIST, t.artist_external_id),
                title: t.artist_name ?? t.artist_external_id,
                subtitle: null,
                imageUrl: l,
            }),
            [t.artist_external_id, t.artist_name, l],
        ),
        r = (0, i.jsx)(tA.R, { src: l, isCircular: !0, FallbackIcon: tv.MicrophoneIcon });
    return null == t.artist_name
        ? (0, i.jsx)("div", { className: tb.Nr, children: (0, i.jsx)("div", { ...n, className: tb.MT, children: r }) })
        : (0, i.jsxs)("div", {
              className: tb.Nr,
              children: [
                  (0, i.jsxs)(t_.Anchor, {
                      ...n,
                      className: tb.MT,
                      href: s.shareUrl,
                      useDefaultUnderlineStyles: !1,
                      children: [
                          r,
                          (0, i.jsx)("span", {
                              className: tb.Qq,
                              children: (0, i.jsx)(_.E, {
                                  className: tb.DD,
                                  tag: "span",
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  lineClamp: 2,
                                  children: t.artist_name,
                              }),
                          }),
                      ],
                  }),
                  (0, i.jsx)(tI, { target: s, tabIndex: n.tabIndex }),
              ],
          });
}
var ty = n(872351),
    tT = n(708988),
    tR = n(104171),
    tk = n(628137);
let tD = "none",
    tw = (e, t) => (0, i.jsx)(_.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: e }, t);
function tL(e) {
    return e;
}
function tM(e) {
    return e?.direction ?? tD;
}
function tU(e) {
    if (null == e) return null;
    let t = Math.round(Math.abs(e));
    return 0 === t
        ? null
        : { direction: e > 0 ? "up" : "down", label: N.intl.formatToPlainString(Z.default["h+LUpk"], { percent: t }) };
}
function tG(e) {
    return tU(null != e.plays_trend_pct ? 100 * e.plays_trend_pct : null);
}
var tP = n(633099);
function tO(e) {
    let { trend: t } = e,
        n = "up" === t.direction ? ty.z : tT.M;
    return (0, i.jsxs)("span", {
        className: tP.GW,
        children: [
            (0, i.jsx)(n, {
                className: j()({ [tP.$J]: "up" === t.direction, [tP.KW]: "down" === t.direction }),
                size: "xxs",
                color: "currentColor",
                "aria-hidden": !0,
            }),
            (0, i.jsx)(_.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: t.label }),
        ],
    });
}
function tB(e) {
    var t;
    let { guildId: n, song: l } = e,
        s = a.useMemo(() => (l.facepile_user_ids ?? []).slice(0, 3), [l.facepile_user_ids]);
    (0, P.k6)(n, s);
    let r = (0, y.yK)([W.default], () => s.map((e) => W.default.getUser(e)), [s]),
        d = a.useMemo(() => r.filter((e) => null != e), [r]);
    if (0 === d.length) return null;
    let c = l.unique_listeners - d.length;
    return (0, i.jsx)("span", {
        className: tP.WM,
        role: "group",
        "aria-label":
            ((t = l.unique_listeners),
            N.intl.formatToPlainString(Z.default.AzIhRB, { count: t, trend: tD, countHook: tL })),
        children: (0, i.jsx)(tR.Ay, {
            users: d,
            guildId: n,
            size: tR.DN.SIZE_24,
            max: d.length,
            count: l.unique_listeners,
            hideMoreUsers: c <= 0,
            renderMoreUsers: () =>
                (0, i.jsx)("span", {
                    className: tP.ju,
                    children: (0, i.jsx)(_.E, {
                        tag: "span",
                        variant: "text-sm/semibold",
                        color: "text-subtle",
                        children: N.intl.formatToPlainString(Z.default.bFIg0R, { count: c }),
                    }),
                }),
        }),
    });
}
function tW(e) {
    let { trackExternalId: t } = e,
        [n, l] = a.useState(!1);
    return (0, i.jsxs)("div", {
        className: tP.aF,
        children: [
            (0, i.jsx)(tk.A, {
                resourceType: tS.M0.TRACK,
                resourceId: t,
                onLoad: () => l(!0),
                allowEncryptedMedia: !0,
            }),
            !n && (0, i.jsx)("div", { className: tP.Ls, "aria-hidden": !0 }),
        ],
    });
}
function tz(e) {
    let { isCompact: t, headline: n, detail: l, trend: a } = e;
    return null == n && null == l && null == a
        ? null
        : (0, i.jsx)("div", {
              className: j()(tP.yp, { [tP.Fl]: t }),
              children: (0, i.jsxs)("div", {
                  className: tP.QD,
                  children: [
                      null != n &&
                          (0, i.jsx)(_.E, {
                              tag: "div",
                              variant: "heading-xl/semibold",
                              color: "text-default",
                              children: n,
                          }),
                      (0, i.jsxs)("div", {
                          className: tP._0,
                          children: [
                              null != l &&
                                  (0, i.jsx)(_.E, {
                                      tag: "span",
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: l,
                                  }),
                              null != a && (0, i.jsx)(tO, { trend: a }),
                          ],
                      }),
                  ],
              }),
          });
}
function tF(e) {
    var t;
    let { guildId: n, isCompact: l, canShowEmbed: a, song: s } = e,
        r = tU(s.plays_change_percent);
    return (0, i.jsxs)("div", {
        className: j()(tP.yp, { [tP.Fl]: l }),
        children: [
            a && (0, i.jsx)(tW, { trackExternalId: s.track_external_id }, s.track_external_id),
            (0, i.jsxs)("div", {
                className: j()(tP.QD, tP.rk),
                children: [
                    (0, i.jsx)(tB, { guildId: n, song: s }),
                    (0, i.jsxs)("div", {
                        className: tP._0,
                        children: [
                            (0, i.jsx)(_.E, {
                                tag: "span",
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                children:
                                    ((t = s.plays),
                                    N.intl.format(Z.default["7hHUIS"], { count: t, trend: tM(r), countHook: tw })),
                            }),
                            null != r && (0, i.jsx)(tO, { trend: r }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var tH = n(197935),
    tK = n(915734);
function tY(e) {
    let { label: t, items: n, isCompact: l, getItemKey: a, renderItem: s } = e;
    return (0, i.jsx)("div", {
        className: j()(tK.Dk, { [tK.yI]: l }),
        children: (0, i.jsx)(tH.A, {
            items: n,
            getItemKey: a,
            renderItem: s,
            gap: 8,
            edgeFade: 40,
            actionsClassName: tK.o1,
            "aria-label": t,
        }),
    });
}
var tq = (((l = {}).TOP_SONGS = "top_songs"), (l.TOP_ARTISTS = "top_artists"), (l.TOP_LISTENERS = "top_listeners"), l);
let t$ = ["top_songs", "top_artists", "top_listeners"];
function tQ(e) {
    return 1 > e.ranked_songs.reduce((e, t) => e + t.plays, 0);
}
function tV(e) {
    switch (e) {
        case "top_songs":
            return N.intl.string(Z.default.KgeEtx);
        case "top_artists":
            return N.intl.string(Z.default.RYxWTS);
        case "top_listeners":
            return N.intl.string(Z.default.KO73KB);
    }
}
function tX(e, t) {
    return `popular-music-tab-${e}-${t}`;
}
function tZ(e) {
    return `popular-music-panel-${e}`;
}
var tJ = n(742452);
function t0(e) {
    return e.artist_external_id;
}
function t1(e, t) {
    return (0, i.jsx)(tC, { artist: e, itemProps: t });
}
function t2(e) {
    let { isCompact: t, data: n } = e;
    if (0 === n.ranked_artists.length) return null;
    let l = tG(n);
    return (0, i.jsxs)("div", {
        className: tJ.U,
        children: [
            (0, i.jsx)(tY, {
                label: tV(tq.TOP_ARTISTS),
                items: n.ranked_artists,
                isCompact: t,
                getItemKey: t0,
                renderItem: t1,
            }),
            (0, i.jsx)(tz, {
                isCompact: t,
                headline:
                    n.distinct_songs < 1
                        ? null
                        : N.intl.formatToPlainString(Z.default.W8etVA, { count: n.distinct_songs }),
                detail:
                    n.distinct_listeners < 1 || n.distinct_artists < 1
                        ? null
                        : N.intl.format(Z.default.yGqf0D, {
                              memberCount: n.distinct_listeners,
                              artistCount: n.distinct_artists,
                              trend: tM(l),
                              memberCountHook: tw,
                              artistCountHook: tw,
                          }),
                trend: l,
            }),
        ],
    });
}
var t6 = n(803613),
    t3 = n(682348),
    t8 = n(73152),
    t4 = n(57129),
    t7 = n(280911);
function t5(e) {
    let { guildId: t, isCompact: n } = e,
        l = (0, y.bG)([W.default], () => W.default.getCurrentUser()),
        a = (0, y.bG)([V.Ay], () => (null != l ? V.Ay.getMember(t, l.id) : null)),
        s = (0, Q.gn)(t, l?.id, a?.colorStrings ?? null),
        r = X.Ay.useName(t, void 0, l);
    return (0, i.jsxs)("div", {
        className: t7.D_,
        children: [
            (0, i.jsxs)("div", {
                className: t7.FI,
                "aria-hidden": !0,
                children: [
                    !n &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("span", { className: t7.eu, children: (0, i.jsx)(t6.D, { size: "sm" }) }),
                                (0, i.jsxs)("span", {
                                    className: t7.r$,
                                    children: [
                                        (0, i.jsx)("span", { className: t7.Om }),
                                        (0, i.jsx)("span", { className: t7.Om }),
                                        (0, i.jsx)("span", { className: t7.Om }),
                                    ],
                                }),
                            ],
                        }),
                    (0, i.jsx)(w.eu, {
                        size: L._3.SIZE_32,
                        src: l?.getAvatarURL(t, (0, L.FT)(L._3.SIZE_32)) ?? void 0,
                        "aria-hidden": !0,
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: t7.Qq,
                children: [
                    (0, i.jsx)(E.D, {
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        lineClamp: 1,
                        children: (0, i.jsx)(M.g, {
                            name: N.intl.formatToPlainString(Z.default.subXXA, { name: r }),
                            colorString: a?.colorString ?? null,
                            colorStrings: s,
                        }),
                    }),
                    (0, i.jsx)(_.E, {
                        variant: "text-xs/medium",
                        color: "text-strong",
                        lineClamp: n ? 2 : 1,
                        children: N.intl.string(Z.default.y1neEe),
                    }),
                ],
            }),
        ],
    });
}
function t9(e) {
    let { widgetName: t, isCompact: n } = e;
    return (0, i.jsxs)("div", {
        className: t7.D_,
        children: [
            !n &&
                (0, i.jsx)("span", {
                    className: t7.eu,
                    "aria-hidden": !0,
                    children: (0, i.jsx)(t3._, { size: "sm", color: c.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
                }),
            (0, i.jsxs)("div", {
                className: t7.Qq,
                children: [
                    (0, i.jsx)(E.D, {
                        variant: "heading-sm/semibold",
                        color: "text-strong",
                        lineClamp: 1,
                        children: N.intl.string(t4.default.WhdCGP),
                    }),
                    (0, i.jsx)(_.E, {
                        variant: "text-xs/medium",
                        color: "text-strong",
                        lineClamp: n ? 2 : 1,
                        children: N.intl.formatToPlainString(Z.default["49Jv0I"], { widgetName: t }),
                    }),
                ],
            }),
        ],
    });
}
function ne(e) {
    let { guildId: t, widgetName: l, isCompact: a, isSpotifyConnected: s } = e;
    return (0, i.jsxs)("div", {
        className: t7.UX,
        children: [
            s ? (0, i.jsx)(t9, { widgetName: l, isCompact: a }) : (0, i.jsx)(t5, { guildId: t, isCompact: a }),
            (0, i.jsx)(G.$, {
                variant: "secondary",
                size: "sm",
                icon: s ? void 0 : t8.E,
                text: s ? N.intl.string(N.t.KY0ilj) : N.intl.string(Z.default.jB1fWC),
                onClick: () => {
                    (0, ec.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("120239"),
                                n.e("955410"),
                                n.e("132502"),
                                n.e("230029"),
                                n.e("488926"),
                                n.e("352456"),
                                n.e("203112"),
                                n.e("13566"),
                                n.e("348567"),
                                n.e("264236"),
                                n.e("252264"),
                                n.e("273232"),
                                n.e("240511"),
                                n.e("463095"),
                                n.e("959134"),
                                n.e("371482"),
                                n.e("610943"),
                                n.e("390213"),
                                n.e("944602"),
                                n.e("421778"),
                                n.e("679019"),
                                n.e("210413"),
                                n.e("32820"),
                            ]).then(n.bind(n, 70111));
                            return (n) => (0, i.jsx)(e, { ...n, guildId: t, widgetName: l });
                        },
                        { modalKey: "guild-space-popular-music-contribution" },
                    );
                },
            }),
        ],
    });
}
var nt = n(625903),
    nn = n(780964),
    nl = n(766075),
    ni = n(30370),
    na = n(123894);
function ns() {
    let e = (0, y.bG)([ni.A], () => ni.A.getAccounts().some((e) => e.type === eJ.fg2.SPOTIFY && e.showActivity));
    return (0, i.jsx)(C, {
        className: na.w,
        title: N.intl.string(Z.default.ULK65a),
        body: N.intl.format(e ? Z.default.BLuvck : Z.default["Ko3a0+"], { memberCount: 2 }),
        action: e
            ? null
            : (0, i.jsx)(G.$, {
                  variant: "secondary",
                  size: "sm",
                  icon: nt.SettingsIcon,
                  text: N.intl.string(N.t["3D5yo/"]),
                  onClick: () => (0, nl.openUserSettings)(nn.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING),
              }),
    });
}
function nr() {
    return (0, i.jsx)(C, {
        className: na.w,
        title: N.intl.string(Z.default.ULK65a),
        body: N.intl.format(Z.default.ZQxU8v, { memberCount: 2 }),
    });
}
var nd = n(109487),
    nc = n(279543);
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
                        children: (0, i.jsx)(k.RefreshIcon, {
                            size: "xxs",
                            color: c.A.colors.ICON_SUBTLE,
                            "aria-hidden": !0,
                        }),
                    }),
                    (0, i.jsx)(_.E, {
                        className: nc.Pf,
                        tag: "span",
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: N.intl.string(Z.default["3/DOFo"]),
                    }),
                ],
            }),
            (0, i.jsxs)(t_.Anchor, {
                className: nc.al,
                href: tS.RQ.WEB_HOME,
                "aria-label": N.intl.string(Z.default["jUr+wF"]),
                children: [
                    (0, i.jsx)("span", {
                        className: nc.Kk,
                        children: (0, i.jsx)(nd.L, { size: "xs", color: c.A.colors.ICON_STRONG, "aria-hidden": !0 }),
                    }),
                    !t &&
                        (0, i.jsx)(_.E, {
                            className: nc.G2,
                            tag: "span",
                            variant: "text-xs/medium",
                            color: "none",
                            children: N.intl.string(Z.default.ZdPp2q),
                        }),
                ],
            }),
        ],
    });
}
var nu = n(65154),
    nm = n(329177),
    nx = n(242226);
function nh(e) {
    var t;
    let {
            guildId: n,
            userId: l,
            listener: a,
            rank: s,
            isCompact: r,
            isCurrentUser: d,
            shouldDimForCurrentUser: o,
            isFloating: u = !1,
            rowRef: m,
        } = e,
        x = J(n, l, { showYouSuffix: d }),
        { user: h } = x;
    return null == h
        ? null
        : (0, i.jsxs)("div", {
              ref: m,
              "aria-hidden": u,
              inert: u,
              className: j()(nx.nM, { [nx.Bh]: d && !u, [nx.lR]: o }),
              children: [
                  (0, i.jsx)(nf, { guildId: n, user: h, identity: x, rank: s, listener: a }),
                  null != a &&
                      (0, i.jsxs)("div", {
                          className: j()(nx.Mx, { [nx.dA]: r }),
                          children: [
                              (0, i.jsx)(nu.S, { size: "xxs", color: c.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                              (0, i.jsx)(_.E, {
                                  variant: "text-sm/medium",
                                  color: "text-strong",
                                  children:
                                      ((t = a.plays), N.intl.formatToPlainString(Z.default["7X+3f8"], { count: t })),
                              }),
                          ],
                      }),
                  null != a && !r && (0, i.jsx)(nv, { artists: a.artists, artistCount: a.artist_count ?? null }),
              ],
          });
}
function nf(e) {
    let { guildId: t, user: n, identity: l, rank: s, listener: r } = e,
        d = a.useRef(null);
    return (0, i.jsx)(e_.A, {
        targetElementRef: d,
        user: n,
        guildId: t,
        children: (e) =>
            (0, i.jsxs)(R.D, {
                ...e,
                innerRef: d,
                className: nx.D_,
                children: [
                    null != s &&
                        (0, i.jsx)(D.A, { children: N.intl.formatToPlainString(Z.default.I4JiAQ, { rank: s }) }),
                    (0, i.jsxs)("span", {
                        className: nx.R3,
                        children: [
                            (0, i.jsx)(w.eu, {
                                size: L._3.SIZE_32,
                                src: n.getAvatarURL(t, (0, L.FT)(L._3.SIZE_32)) ?? void 0,
                                "aria-hidden": !0,
                            }),
                            1 === s &&
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
                            (0, i.jsx)(E.D, {
                                variant: "heading-sm/semibold",
                                color: "text-default",
                                lineClamp: 1,
                                children: (0, i.jsx)(M.g, {
                                    name: l.displayName,
                                    colorString: l.member?.colorString ?? null,
                                    colorStrings: l.roleColorStrings,
                                }),
                            }),
                            (0, i.jsx)(nj, { listener: r }),
                        ],
                    }),
                ],
            }),
    });
}
function ng(e, t) {
    return (0, i.jsx)(_.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: e }, t);
}
function nj(e) {
    let { listener: t } = e,
        n = t?.latest_track_title;
    if (null == n) return null;
    let l = t?.latest_artist_name;
    return (0, i.jsx)(_.E, {
        variant: "text-xs/medium",
        color: "text-subtle",
        lineClamp: 1,
        children:
            null != l
                ? N.intl.format(Z.default.QqaqBg, { trackTitle: n, artistName: l, highlightHook: ng })
                : N.intl.format(Z.default.ZMJ8Mt, { trackTitle: n, highlightHook: ng }),
    });
}
function np(e) {
    let { artist: t, notched: n } = e,
        [l, s] = a.useState(!1),
        r = null != t.artist_image_hash ? tS.RQ.IMAGE(t.artist_image_hash) : null;
    return (0, i.jsx)("span", {
        className: nx.sG,
        children: (0, i.jsx)(ey.Ay, {
            mask: n ? ey.l8[24] : ey.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null == r || l
                    ? (0, i.jsx)("span", {
                          className: nx.Ql,
                          children: (0, i.jsx)(tv.MicrophoneIcon, { size: "xxs", color: c.A.colors.ICON_SUBTLE }),
                      })
                    : (0, i.jsx)("img", { className: nx.v2, src: r, alt: "", loading: "lazy", onError: () => s(!0) }),
        }),
    });
}
function nv(e) {
    let { artists: t, artistCount: n } = e,
        l = t.slice(0, 3),
        a = (n ?? t.length) - l.length;
    return (0, i.jsx)("div", {
        className: nx.Rh,
        "aria-hidden": !0,
        children:
            l.length > 0 &&
            (0, i.jsxs)("div", {
                className: nx.W$,
                children: [
                    l.map((e, t) =>
                        (0, i.jsx)(
                            np,
                            { artist: e, notched: a > 0 || t !== l.length - 1 },
                            `${e.artist_external_id}-${e.artist_image_hash}`,
                        ),
                    ),
                    a > 0 &&
                        (0, i.jsx)("span", {
                            className: nx.sG,
                            children: (0, i.jsx)(ey.Ay, {
                                mask: ey.Ay.Masks.SQUIRCLE,
                                width: 24,
                                height: 24,
                                children: (0, i.jsx)("div", {
                                    className: nx.ag,
                                    children: (0, i.jsx)(_.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: N.intl.formatToPlainString(Z.default.bFIg0R, { count: a }),
                                    }),
                                }),
                            }),
                        }),
                ],
            }),
    });
}
var n_ = n(897130);
function nA(e) {
    let { guildId: t, isCompact: n, data: l, upsell: s } = e,
        r = l.top_listeners,
        d = (0, y.bG)([W.default], () => W.default.getCurrentUser()?.id),
        c = r.findIndex((e) => e.user_id === d),
        o = -1 === c ? null : r[c],
        u = a.useMemo(() => r.map((e) => e.user_id), [r]);
    (0, P.k6)(t, u);
    let { scrollerRef: m, userRowRef: x, floatingRowPosition: h } = $(),
        f = null != s,
        g = f ? null : h,
        p = null != g;
    return l.top_listeners.length < 2
        ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(nr, {}), s] })
        : (0, i.jsxs)("div", {
              className: n_.SY,
              children: [
                  (0, i.jsxs)(T.d_, {
                      className: j()(n_.p_, { [n_.w]: f }),
                      ref: m,
                      children: [
                          r.map((e, l) => {
                              let a = e.user_id === d;
                              return (0, i.jsx)(
                                  nh,
                                  {
                                      guildId: t,
                                      userId: e.user_id,
                                      listener: e,
                                      rank: l + 1,
                                      isCompact: n,
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
                              (0, i.jsx)(nh, {
                                  guildId: t,
                                  userId: d,
                                  listener: null,
                                  rank: null,
                                  isCompact: n,
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
                              (0, i.jsx)("div", { className: n_.Kv, children: s }),
                          ],
                      }),
                  null != d &&
                      null != g &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(H, { position: g }),
                              (0, i.jsx)(K, {
                                  position: g,
                                  children: (0, i.jsx)(nh, {
                                      guildId: t,
                                      userId: d,
                                      listener: o,
                                      rank: -1 === c ? null : c + 1,
                                      isCompact: n,
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
var nE = n(717683);
function nN(e) {
    let { isCompact: t } = e;
    return (0, i.jsxs)("div", {
        className: nE.qV,
        "aria-hidden": !0,
        children: [
            (0, i.jsx)("div", {
                className: j()(nE.Dk, { [nE.yI]: t }),
                children: Array.from({ length: 10 }, (e, t) =>
                    (0, i.jsxs)(
                        "div",
                        {
                            className: nE.Nr,
                            children: [
                                (0, i.jsx)("div", { className: j()(nE.om, nE.xX) }),
                                (0, i.jsxs)("div", {
                                    className: nE.Qq,
                                    children: [
                                        (0, i.jsx)("div", { className: j()(nE.om, nE.DD) }),
                                        (0, i.jsx)("div", { className: j()(nE.om, nE.VA) }),
                                    ],
                                }),
                            ],
                        },
                        t,
                    ),
                ),
            }),
            (0, i.jsxs)("div", {
                className: j()(nE.yp, { [nE.Fl]: t }),
                children: [
                    (0, i.jsx)("div", { className: j()(nE.om, nE.Pl) }),
                    (0, i.jsx)("div", { className: j()(nE.om, nE._0) }),
                ],
            }),
        ],
    });
}
var nb = n(432017),
    nI = n(362704);
function nS(e) {
    let { song: t, isSelected: n, onSelect: l, itemProps: s } = e,
        r = null != t.cover_art_hash ? tS.RQ.IMAGE(t.cover_art_hash) : null,
        d = a.useMemo(
            () => ({
                kind: "song",
                shareUrl: tS.RQ.WEB_OPEN(tS.M0.TRACK, t.track_external_id),
                title: t.track_title ?? t.track_external_id,
                subtitle: t.artist_name,
                imageUrl: r,
            }),
            [t.track_external_id, t.track_title, t.artist_name, r],
        );
    return (0, i.jsxs)("div", {
        className: tb.Nr,
        children: [
            (0, i.jsxs)("button", {
                ...s,
                type: "button",
                className: j()(tb.MT, { [tb.tY]: n }),
                "aria-pressed": n,
                onClick: () => l(t.track_external_id),
                children: [
                    (0, i.jsx)(tA.R, {
                        src: r,
                        isCircular: !1,
                        FallbackIcon: nb.T,
                        children:
                            n &&
                            (0, i.jsx)("span", {
                                className: j()(tb.Lw, tb.Kp),
                                "aria-hidden": !0,
                                children: (0, i.jsx)(nI.Y, { size: "md", color: "currentColor" }),
                            }),
                    }),
                    null != t.track_title &&
                        (0, i.jsxs)("span", {
                            className: tb.Qq,
                            children: [
                                (0, i.jsx)(_.E, {
                                    className: tb.DD,
                                    tag: "span",
                                    variant: "text-sm/semibold",
                                    color: "text-default",
                                    lineClamp: 1,
                                    children: t.track_title,
                                }),
                                null != t.artist_name &&
                                    (0, i.jsx)(_.E, {
                                        className: tb.VA,
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
            (0, i.jsx)(tI, { target: d, tabIndex: s.tabIndex }),
        ],
    });
}
var nC = n(196765),
    ny = n(770178);
let nT = { view: "top_songs", isCompact: !1, canShowEmbed: !1, selectedTrackId: null },
    nR = (0, nC.v)(() => ({ byWidgetId: {} }));
function nk(e, t) {
    nR.setState((n) => {
        let l = n.byWidgetId[e] ?? nT;
        return { byWidgetId: { ...n.byWidgetId, [e]: { ...l, ...t } } };
    });
}
function nD(e) {
    return nR((t) => t.byWidgetId[e]?.view ?? nT.view);
}
function nw(e) {
    return nR((t) => t.byWidgetId[e]?.isCompact ?? nT.isCompact);
}
function nL(e) {
    return nR((t) => t.byWidgetId[e]?.selectedTrackId ?? nT.selectedTrackId);
}
function nM(e, t) {
    (nR.getState().byWidgetId[e] ?? nT).view !== t && nk(e, { view: t, selectedTrackId: null });
}
function nU(e) {
    return e.track_external_id;
}
function nG(e) {
    let t,
        { guildId: n, widgetId: l, isCompact: s, data: r } = e,
        d = nL(l),
        c = nR((e) => e.byWidgetId[l]?.canShowEmbed ?? nT.canShowEmbed),
        o = a.useCallback(
            (e) => {
                let t;
                return (
                    (t = nR.getState().byWidgetId[l]?.selectedTrackId ?? null),
                    void nk(l, { selectedTrackId: t === e ? null : e })
                );
            },
            [l],
        ),
        u = a.useCallback(
            (e, t) => (0, i.jsx)(nS, { song: e, isSelected: e.track_external_id === d, onSelect: o, itemProps: t }),
            [d, o],
        );
    if (0 === r.ranked_songs.length) return null;
    let m = r.ranked_songs.find((e) => e.track_external_id === d) ?? null,
        x = tG(r);
    return (0, i.jsxs)("div", {
        className: tJ.U,
        children: [
            (0, i.jsx)(tY, {
                label: tV(tq.TOP_SONGS),
                items: r.ranked_songs,
                isCompact: s,
                getItemKey: nU,
                renderItem: u,
            }),
            null != m
                ? (0, i.jsx)(tF, { guildId: n, isCompact: s, canShowEmbed: c, song: m })
                : (0, i.jsx)(tz, {
                      isCompact: s,
                      headline:
                          (t = Math.round(r.listening_time_ms / et.A.Millis.MINUTE)) < 1
                              ? null
                              : N.intl.formatToPlainString(Z.default["+5b01q"], { minutes: t }),
                      detail:
                          r.distinct_listeners < 1
                              ? null
                              : N.intl.format(Z.default.AzIhRB, {
                                    count: r.distinct_listeners,
                                    trend: tM(x),
                                    countHook: tw,
                                }),
                      trend: x,
                  }),
        ],
    });
}
var nP = n(691885),
    nO = n(109765);
function nB(e) {
    let { widgetId: t } = e,
        n = nD(t),
        l = a.useMemo(() => t$.map((e) => ({ id: e, label: tV(e), value: e })), []),
        s = a.useCallback(
            (e) => {
                nM(t, e);
            },
            [t],
        );
    return (0, i.jsx)("div", {
        className: nO.L,
        children: (0, i.jsx)(nP.l, {
            selectionMode: "single",
            label: N.intl.string(Z.default.hFYyGU),
            hideLabel: !0,
            fitContent: !0,
            options: l,
            value: n,
            onSelectionChange: s,
        }),
    });
}
var nW = n(871107);
function nz(e) {
    let { title: t } = e;
    return (0, i.jsxs)("div", {
        className: nW.$,
        children: [
            (0, i.jsx)("span", {
                className: nW.K,
                children: (0, i.jsx)(nb.T, { size: "xs", color: c.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
            }),
            (0, i.jsx)(f.q, { size: "md", children: t }),
        ],
    });
}
var nF = n(77915),
    nH = n(756936);
function nK(e) {
    return e.default_title ?? N.intl.string(Z.default["5xxUI2"]);
}
var nY = n(890497),
    nq = n(734057),
    n$ = n(317525),
    nQ = n(576705),
    nV = n(935208),
    nX = n(44167);
n(321073);
var nZ = n(485845),
    nJ = n(136722),
    n0 = n(435183),
    n1 = n(155718),
    n2 = n(795816),
    n6 = n(933958),
    n3 = n(627363),
    n8 = n(712440),
    n4 = n(733110),
    n7 = n(488926),
    n5 = n(818023);
async function n9(e) {
    null == ek.A.getApplication(n5.NW) && (await (0, n3.TA)(n5.NW));
    let t = n6.Ay.getEmbeddedActivitiesForChannel(e).every((e) => e.applicationId !== n5.NW);
    return await (0, n2.su)({ channelId: e, applicationId: n5.NW, isStart: t, renderInFramePool: !0 });
}
async function le(e) {
    let { channel: t, selectedRoleIds: n } = e,
        l = [];
    if (n.length > 0)
        for (let e of (l.push({ id: t.guild_id, type: n1.r2.ROLE, allow: n7.x3, deny: eJ.xBc.USE_EMBEDDED_ACTIVITIES }),
        n))
            l.push({ id: e, type: n1.r2.ROLE, allow: eJ.xBc.USE_EMBEDDED_ACTIVITIES, deny: n7.x3 });
    let i = await (0, n0.RT)(t.id, { permissionOverwrites: l });
    if (!i.ok) throw i;
}
let lt = [];
var ln = n(344351),
    ll = n(256693),
    li = n(343030),
    la = n(317608),
    ls = n(953538);
let lr = {
    [d.a.IMAGE_TEXT]: {
        View: function (e) {
            let { widget: t, guildSpaceMode: n, guildId: l } = e,
                { text: a, image_hash: s } = t.config,
                r = "edit" === n ? t.config.image : void 0,
                d = void 0 !== r ? r : null != s ? tx(l, t.id, s) : null;
            return (0, i.jsxs)("div", {
                className: tf.kL,
                children: [
                    null != d && (0, i.jsx)("img", { className: tf.Sl, src: d, alt: "" }),
                    null != a &&
                        (0, i.jsx)(_.E, {
                            variant: "text-md/normal",
                            color: "text-subtle",
                            className: tf.Qq,
                            children: a,
                        }),
                ],
            });
        },
        Edit: function (e) {
            let { widget: t, commit: n, cancel: l } = e,
                s = t.config,
                [r, c] = a.useState(s.title ?? ""),
                [o, x] = a.useState(s.text ?? ""),
                [h, f] = a.useState(s.image),
                [g, j] = a.useState(null),
                p = (0, y.bG)([tc.A], () => tc.A.getGuildId()),
                v = void 0 !== h ? h : null != s.image_hash && null != p ? tx(p, t.id, s.image_hash) : null;
            return (0, i.jsxs)(A.B, {
                gap: 16,
                children: [
                    (0, i.jsx)(ti.k, {
                        label: N.intl.string(N.t.gnwWrx),
                        value: r,
                        onChange: function (e) {
                            (j(null), c(e));
                        },
                        maxLength: 100,
                        showCharacterCount: !0,
                    }),
                    (0, i.jsx)(tt.D, {
                        label: N.intl.string(N.t.X4IxWL),
                        children: (0, i.jsxs)(A.B, {
                            gap: 16,
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            className: th.B,
                            children: [
                                (0, i.jsxs)(A.B, {
                                    gap: 8,
                                    direction: "horizontal",
                                    children: [
                                        (0, i.jsx)(td.A, {
                                            variant: "secondary",
                                            text: N.intl.string(N.t["MsUY/S"]),
                                            onChange: function (e) {
                                                (j(null), f(e));
                                            },
                                            maxFileSizeBytes: 0xa00000,
                                            onFileSizeError: () => (0, tr.A)(0xa00000),
                                        }),
                                        null != v &&
                                            (0, i.jsx)(u.m, {
                                                text: N.intl.string(N.t.N86XcP),
                                                ariaHidden: !0,
                                                children: (0, i.jsx)(m.K, {
                                                    variant: "critical-secondary",
                                                    icon: ta.TrashIcon,
                                                    onClick: function () {
                                                        (j(null), f(null));
                                                    },
                                                    "aria-label": N.intl.string(N.t.N86XcP),
                                                }),
                                            }),
                                    ],
                                }),
                                null != v && (0, i.jsx)("img", { className: th.V, src: v, alt: "" }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(tn.f, {
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
                            children: (0, i.jsx)(ts.w, { type: "critical", children: g }),
                        }),
                    (0, i.jsxs)(tl.e, {
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(G.$, { variant: "secondary", text: N.intl.string(N.t["ETE/oC"]), onClick: l }),
                            (0, i.jsx)(G.$, {
                                variant: "primary",
                                text: N.intl.string(N.t["R3BPH+"]),
                                onClick: function () {
                                    let e;
                                    if (
                                        ((e = void 0 !== h ? null !== h : null != s.image_hash),
                                        0 === o.length && !e && (j(N.intl.string(Z.default.zleX9q)), 1))
                                    )
                                        return;
                                    let t = {
                                        type: d.a.IMAGE_TEXT,
                                        image_hash: s.image_hash,
                                        text: o.length > 0 ? o : null,
                                        title: r.length > 0 ? r : null,
                                    };
                                    (void 0 !== h && (t.image = h), n(t));
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
                { widget: n, hydration: l, guildId: s, guildSpaceMode: r } = e,
                d = eP(s, l?.status === "success" ? l.data : void 0),
                c = e5({ guildId: s, data: d, expanded: !1, column: n.position.column, enabled: "view" === r }),
                o = a.useCallback(
                    (e) => {
                        c(e?.closest("[data-guild-space-widget]") ?? null);
                    },
                    [c],
                );
            return (
                (t =
                    l?.status === "error"
                        ? (0, i.jsx)(S, {})
                        : null != d
                          ? (0, i.jsx)(e1, { guildId: s, data: d, column: n.position.column })
                          : (0, i.jsx)(I, {})),
                (0, i.jsx)("div", { ref: o, children: t })
            );
        },
        Title: function (e) {
            let { widget: t, hydration: n, guildId: l } = e,
                a = eP(l, n?.status === "success" ? n.data : void 0);
            return null == a
                ? (0, i.jsx)(f.q, { children: t.default_title ?? "" })
                : (0, i.jsx)(f.q, { children: ea(a) });
        },
        TitleIcon: function () {
            return (0, i.jsx)(o.TrophyIcon, { size: "xs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        },
        HeaderAccessory: function (e) {
            let { hydration: t, guildId: n } = e,
                l = eP(n, t?.status === "success" ? t.data : void 0);
            return null == l || ei(l) ? null : (0, i.jsx)(e7, { data: l });
        },
        HeaderActions: function (e) {
            let { hydration: t, guildId: n, column: l } = e,
                a = t?.status === "success" ? t.data : void 0,
                s = eP(n, a);
            return "mini" !== er({ expanded: !1, column: l }) || (null != s && ei(s))
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
                                  (h.default.track(eJ.HAw.LEADERBOARD_CLICK, {
                                      location: "expand",
                                      guild_id: n,
                                      leaderboard_state: es(s),
                                      leaderboard_view: er({ expanded: !1, column: l }),
                                      metric: ed(s.stat),
                                  }),
                                  (function (e) {
                                      let { guildId: t, data: n } = e,
                                          l = (e) => (0, i.jsx)(te, { guildId: t, data: n, modalProps: e });
                                      (0, ec.openModalLazy)(() => Promise.resolve(l), {
                                          modalKey: "guild-space-leaderboard-expand",
                                      });
                                  })({ guildId: n, data: a }));
                          },
                      }),
                  });
        },
    },
    [d.a.POPULAR_MUSIC]: {
        View: function (e) {
            var t, n;
            let l,
                s,
                r,
                { guildId: d, widget: c, hydration: o, guildSpaceMode: u } = e,
                m =
                    ((t = c.id),
                    (l = a.useRef(null)),
                    (s = a.useCallback(
                        (e) => {
                            let { width: n } = e.contentRect;
                            nk(t, { isCompact: n < 480, canShowEmbed: n >= 560 });
                        },
                        [t],
                    )),
                    (0, ny.g)(l, s, [t], { fireOnMount: !0 }),
                    a.useEffect(
                        () => () => {
                            nR.setState((e) => {
                                if (null == e.byWidgetId[t]) return e;
                                let n = { ...e.byWidgetId };
                                return (delete n[t], { byWidgetId: n });
                            });
                        },
                        [t],
                    ),
                    l),
                x = nw(c.id),
                h = nD(c.id),
                f = nL(c.id),
                { isContributing: g, isSpotifyConnected: j, hasFetchedConsents: p } = (0, nF.MX)(d),
                v = "edit" === u,
                _ = o?.status === "success" && tQ(o.data),
                A = !x && !v && !_,
                E =
                    "view" === u && p && !g
                        ? (0, i.jsx)(ne, { guildId: d, widgetName: nK(c), isCompact: x, isSpotifyConnected: j })
                        : null,
                N =
                    v || _ || o?.status !== "success" || h === tq.TOP_LISTENERS
                        ? null
                        : ((n = o.data),
                          null ==
                          (r =
                              n.ranked_songs.find((e) => e.track_external_id === f && null != e.cover_art_hash)
                                  ?.cover_art_hash ??
                              n.ranked_songs.find((e) => null != e.cover_art_hash)?.cover_art_hash)
                              ? null
                              : tS.RQ.IMAGE(r));
            return (0, i.jsxs)("div", {
                className: nH.rf,
                ref: m,
                children: [
                    null != N &&
                        (0, i.jsx)("div", {
                            className: nH.G,
                            "aria-hidden": !0,
                            children: (0, i.jsx)("img", { className: nH.LZ, src: N, alt: "" }),
                        }),
                    (0, i.jsx)("div", {
                        className: nH.Qs,
                        children: (0, i.jsx)("div", {
                            id: tZ(c.id),
                            className: nH.nd,
                            role: A ? "tabpanel" : "group",
                            tabIndex: 0,
                            "aria-label": A ? void 0 : tV(h),
                            "aria-labelledby": A ? tX(c.id, h) : void 0,
                            children: (function () {
                                if (v) return (0, i.jsx)(nN, { isCompact: x });
                                if (null == o || "idle" === o.status || "loading" === o.status)
                                    return (0, i.jsx)(I, {});
                                if ("error" === o.status) return (0, i.jsx)(S, {});
                                if (_) return (0, i.jsx)(ns, {});
                                switch (h) {
                                    case tq.TOP_SONGS:
                                        return (0, i.jsx)(nG, {
                                            guildId: d,
                                            widgetId: c.id,
                                            isCompact: x,
                                            data: o.data,
                                        });
                                    case tq.TOP_ARTISTS:
                                        return (0, i.jsx)(t2, { isCompact: x, data: o.data });
                                    case tq.TOP_LISTENERS:
                                        return (0, i.jsx)(nA, { guildId: d, isCompact: x, data: o.data, upsell: E });
                                }
                            })(),
                        }),
                    }),
                    h !== tq.TOP_LISTENERS && E,
                    (0, i.jsx)(no, { isCompact: x }),
                ],
            });
        },
        Title: function (e) {
            let { widget: t, hydration: n, guildSpaceMode: l } = e,
                a = nK(t),
                s = n?.status === "success" && tQ(n.data);
            return "edit" === l || s ? (0, i.jsx)(f.q, { size: "md", children: a }) : (0, i.jsx)(nz, { title: a });
        },
        ViewHeaderTrailing: function (e) {
            let { widget: t, hydration: n, title: l } = e,
                a = nw(t.id),
                s = nD(t.id);
            return n?.status === "success" && tQ(n.data)
                ? null
                : a
                  ? (0, i.jsx)(nB, { widgetId: t.id })
                  : (0, i.jsx)(tp, {
                        label: l,
                        tabs: t$.map((e) => ({ id: e, label: tV(e) })),
                        selectedId: s,
                        panelId: tZ(t.id),
                        getTabId: (e) => tX(t.id, e),
                        onSelect: (e) => nM(t.id, e),
                    });
        },
    },
    [d.a.WHITEBOARD]: {
        View: function (e) {
            let t,
                n,
                l = (0, nX.n)(),
                s = (0, y.bG)(
                    [nq.A, nQ.A],
                    () => {
                        let e = null != l ? nq.A.getChannel(l) : void 0;
                        return null != e && nQ.A.can(eJ.xBc.USE_EMBEDDED_ACTIVITIES, e);
                    },
                    [l],
                ),
                d = (0, y.bG)(
                    [n6.Ay],
                    () => {
                        let e = n6.Ay.getCurrentEmbeddedActivity();
                        return null == e ||
                            e.applicationId !== n5.NW ||
                            e.location.kind !== ln.T.GUILD_CHANNEL ||
                            e.location.channel_id !== l
                            ? null
                            : e;
                    },
                    [l],
                ),
                c = (0, y.bG)([n6.Ay], () => n6.Ay.isLaunchingActivity(), []),
                { authResolved: o, isAuthorized: u } =
                    ((t = (0, y.bG)(
                        [n4.default],
                        () => n4.default.getFetchStateForApplication(n5.NW) === n4.FetchState.FETCHED,
                        [],
                    )),
                    (n = (0, y.bG)(
                        [n4.default, ek.A],
                        () => {
                            let e = n4.default.getNewestTokenForApplication(n5.NW);
                            if (null == e) return !1;
                            let t = ek.A.getApplication(n5.NW),
                                n = t?.integrationTypesConfig?.[nZ.b.USER_INSTALL]?.oauth2InstallParams?.scopes;
                            if (null == n) return !0;
                            let l = new Set(e.scopes);
                            return n.every((e) => l.has(e));
                        },
                        [],
                    )),
                    a.useEffect(() => {
                        (n4.default.getFetchStateForApplication(n5.NW) === n4.FetchState.NOT_FETCHED &&
                            n8.A.fetch([n5.NW]),
                            null == ek.A.getApplication(n5.NW) && (0, n3.TA)(n5.NW));
                    }, []),
                    { authResolved: t, isAuthorized: n }),
                m = a.useRef(!1);
            a.useEffect(() => {
                null == d && null != l && s && o && u && !m.current && ((m.current = !0), n9(l));
            }, [s, l, d, o, u]);
            let x = a.useCallback(() => {
                    null != l && ((m.current = !0), n9(l));
                }, [l]),
                h = null != l && o && !u;
            return null == l
                ? (0, i.jsx)(A.B, {
                      className: ls.kL,
                      align: "center",
                      justify: "center",
                      children: (0, i.jsx)(r, { alt: "", width: 200, height: 192 }),
                  })
                : s
                  ? (0, i.jsxs)("div", {
                        className: ls.kL,
                        children: [
                            null != d &&
                                (0, i.jsx)(la.A, {
                                    frameId: (0, ll.Ri)(d),
                                    level: li.A.WithinAppContent,
                                    className: ls.t$,
                                }),
                            null == d &&
                                h &&
                                (0, i.jsx)("div", {
                                    className: ls.P5,
                                    children: (0, i.jsx)(G.$, {
                                        variant: "secondary",
                                        text: N.intl.string(Z.default.PSuly6),
                                        loading: c,
                                        onClick: x,
                                    }),
                                }),
                        ],
                    })
                  : (0, i.jsx)("div", {
                        className: ls.kL,
                        children: (0, i.jsx)("div", {
                            className: ls.m0,
                            children: (0, i.jsx)(_.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: N.intl.string(Z.default["nXc/MQ"]),
                            }),
                        }),
                    });
        },
        Edit: function (e) {
            let { cancel: t } = e,
                n = (0, y.bG)([tc.A], () => tc.A.getGuildId()),
                l = nV.default.castGuildIdAsEveryoneGuildRoleId(n),
                s = (0, nX.n)(),
                r = (0, y.bG)([nq.A], () => (null != s ? nq.A.getChannel(s) : void 0), [s]),
                d = (0, y.bG)([nQ.A], () => null != r && nQ.A.can(eJ.xBc.MANAGE_ROLES, r), [r]),
                c = (0, y.bG)([n$.A], () => (null == n ? lt : n$.A.getSortedRoles(n).filter((e) => e.id !== l)), [
                    n,
                    l,
                ]),
                o = a.useMemo(() => {
                    let e;
                    return null != r
                        ? null != (e = r.permissionOverwrites[r.guild_id]) &&
                          nJ.zy(e.deny, eJ.xBc.USE_EMBEDDED_ACTIVITIES)
                            ? c
                                  .filter((e) => {
                                      let t = r.permissionOverwrites[e.id];
                                      return null != t && nJ.zy(t.allow, eJ.xBc.USE_EMBEDDED_ACTIVITIES);
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
                        (await le({ channel: r, selectedRoleIds: j }), t());
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
                          (0, i.jsx)(nY.Z, {
                              selectionMode: "multiple",
                              label: N.intl.string(Z.default.XXLbfv),
                              description: N.intl.string(Z.default.XrpYIG),
                              placeholder: N.intl.string(Z.default.pp6WeD),
                              options: p,
                              value: j,
                              onSelectionChange: function (e) {
                                  (g(!1), m(e));
                              },
                              disabled: !d || x,
                              fullWidth: !0,
                              wrapTags: !0,
                          }),
                          !d && (0, i.jsx)(ts.w, { type: "warning", children: N.intl.string(Z.default.UPLtlA) }),
                          f &&
                              (0, i.jsx)("div", {
                                  role: "alert",
                                  children: (0, i.jsx)(ts.w, {
                                      type: "critical",
                                      children: N.intl.string(Z.default.xyCJYs),
                                  }),
                              }),
                          (0, i.jsxs)(tl.e, {
                              fullWidth: !0,
                              children: [
                                  (0, i.jsx)(G.$, {
                                      variant: "secondary",
                                      text: N.intl.string(N.t["ETE/oC"]),
                                      onClick: t,
                                      disabled: x,
                                  }),
                                  (0, i.jsx)(G.$, {
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
