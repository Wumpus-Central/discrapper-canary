l.d(t, { m: () => l9 });
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
    c = l(661531),
    u = l(369606),
    o = l(866665),
    m = l(408278),
    x = l(26430),
    h = l(174459),
    f = l(562073),
    g = l(503698),
    j = l.n(g),
    v = l(289873),
    p = l(738188),
    _ = l(834730),
    E = l(331322),
    A = l(297264),
    N = l(660183),
    I = l(448492);
function b() {
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
            (0, i.jsx)(p.WarningIcon, { size: "md", color: c.A.colors.ICON_MUTED, "aria-hidden": !0 }),
            (0, i.jsx)(_.E, { variant: "text-sm/normal", color: "text-muted", children: N.intl.string(N.t.F8FvUy) }),
        ],
    });
}
function C(e) {
    let { className: t, title: l, body: n, action: s } = e;
    return (0, i.jsxs)(E.B, {
        className: j()(I.p, t),
        align: "center",
        justify: "center",
        gap: 16,
        padding: { top: 24, right: 16, bottom: 24, left: 16 },
        children: [
            (0, i.jsxs)(E.B, {
                align: "center",
                gap: 6,
                children: [
                    (0, i.jsx)(A.D, { variant: "heading-md/semibold", color: "text-default", children: l }),
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
    M = l(778712),
    L = l(463930),
    U = l(478016),
    G = l(821609),
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
var Y = l(606072),
    q = l(775602);
function Q() {
    let [e, t] = s.useState(null),
        [l, n] = s.useState(null),
        [i, a] = s.useState("unknown"),
        r = (0, y.bG)([q.Ay], () => q.Ay.useReducedMotion);
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
var $ = l(967144),
    V = l(696451),
    X = l(562153),
    Z = l(61567);
function J(e, t) {
    let { showYouSuffix: l = !1, fallbackName: n } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = (0, y.bG)([W.default], () => W.default.getUser(t), [t]),
        s = (0, y.bG)([V.Ay], () => V.Ay.getMember(e, t), [e, t]),
        a = (0, $.gn)(e, t, s?.colorStrings ?? null),
        r = X.Ay.useName(e, void 0, i),
        d = null == i && null != n ? n : r;
    return {
        user: i,
        member: s,
        roleColorStrings: a,
        name: d,
        displayName: l ? N.intl.formatToPlainString(Z.default.subXXA, { name: d }) : d,
    };
}
var ee = l(885386),
    et = l(927813),
    el = l(251812),
    en = l(518782);
function ei(e) {
    return e.entries.length < 3;
}
function es(e) {
    return (0, el.K)(ei(e) ? void 0 : e.stat).name;
}
function ea(e) {
    let t;
    return ei(e)
        ? "empty_state"
        : null != (t = e.computed_at) &&
            new Date(t).getTime() - e.week_start_ts * et.A.Millis.SECOND >= et.A.Millis.WEEK
          ? "podium"
          : "in_progress";
}
function er(e) {
    let { expanded: t, column: l } = e;
    return t ? "expanded" : 1 === l ? "mini" : "regular";
}
function ed(e) {
    switch (e) {
        case en.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            return "hours_played";
        case en.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return "days_played";
        case en.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return "unique_games_played";
        default:
            return null;
    }
}
l(754674);
var ec = l(192308);
function eu(e) {
    (0, ec.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([
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
            return (l) => (0, i.jsx)(t, { ...l, guildId: e });
        },
        { modalKey: "guild-space-leaderboard-sharing" },
    );
}
var eo = l(823353);
function em(e) {
    let { guildId: t, onActivitySharingClick: l } = e,
        n = ee.tz.useSetting(),
        s = ee.JG.useSetting().includes(t),
        a = !n || s;
    return (0, i.jsx)(C, {
        className: eo.w,
        title: N.intl.string(Z.default.ULK65a),
        body: N.intl.format(a ? Z.default.ueza5l : Z.default["81PK67"], { memberCount: 3 }),
        action: a
            ? (0, i.jsx)(G.$, {
                  variant: "secondary",
                  size: "sm",
                  text: N.intl.string(Z.default.fMbgeZ),
                  onClick: () => {
                      (l(), eu(t));
                  },
              })
            : null,
    });
}
var ex = l(342296);
function eh(e) {
    let t = Math.floor(Math.max(e, 0) / et.A.Seconds.MINUTE),
        l = Math.floor(t / et.A.Minutes.HOUR),
        n = t % et.A.Minutes.HOUR;
    return 0 === l
        ? N.intl.formatToPlainString(Z.default.DdzvGL, { minutes: n })
        : N.intl.formatToPlainString(Z.default["6Y8H0A"], { hours: l, minutes: n });
}
function ef(e, t) {
    switch (t) {
        case en.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return {
                primary: N.intl.formatToPlainString(N.t["k2UNz+"], { days: e.value }),
                secondary: eh(e.time_played_seconds),
            };
        case en.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return {
                primary: N.intl.formatToPlainString(Z.default.rgpc8E, { count: e.value }),
                secondary: eh(e.time_played_seconds),
            };
        case en.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            let l, n, i;
            return {
                primary:
                    ((n = Math.floor((l = Math.floor(Math.max(e.value, 0) / et.A.Millis.MINUTE)) / et.A.Minutes.HOUR)),
                    (i = l % et.A.Minutes.HOUR),
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
var eg = l(81466),
    ej = l(406810),
    ev = l(687966),
    ep = l(683063),
    e_ = l(573435),
    eE = l(402860),
    eA = l(396583),
    eN = l(587895),
    eI = l(429913),
    eb = l(280450);
function eS(e, t) {
    return { id: e, name: N.intl.string(Z.default.rhDbuQ), iconUrl: void 0, isLoading: t };
}
function eC(e, t) {
    return e.get(t) ?? eS(t, !1);
}
function ey(e, t) {
    return t.map((t) => eC(e, t));
}
function eT(e, t) {
    let l = t.user_id,
        n = (0, y.bG)([eb.default], () => eb.default.getId() === l, [l]);
    return J(e, l, { showYouSuffix: n, fallbackName: t.name });
}
function ek(e, t) {
    let l = (0, y.bG)([W.default], () => W.default.getCurrentUser()?.id),
        {
            isSharingActivity: n,
            isSharingActivityInGuild: i,
            hasPersonalizationConsent: a,
            hasFetchedConsents: r,
        } = (0, Y.T4)(e),
        d = !n || !i || !a;
    return s.useMemo(() => {
        if (!r) return;
        if (null == t || !d || null == l) return t;
        let e = t.entries.filter((e) => e.user_id !== l);
        return e.length === t.entries.length ? t : { ...t, entries: e.map((e, t) => ({ ...e, rank: t + 1 })) };
    }, [t, d, l, r]);
}
var eR = l(518477),
    eD = l(870087);
function ew(e) {
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
        x = eT(t, l),
        h = l.application_ids[0],
        f = null != h ? eC(a, h) : void 0,
        g = l.user_id,
        v = s.useCallback(() => {
            (o?.(),
                (0, eE.openUserProfileModal)({
                    userId: g,
                    guildId: t,
                    tabSection: eR.RP.ACTIVITY,
                    scrollTarget: eR.bk.RECENT_ACTIVITY,
                }));
        }, [o, g, t]);
    return (0, i.jsxs)("div", {
        ref: u,
        "aria-hidden": c,
        inert: c,
        className: j()(eD.nM, { [eD.Bh]: r && !c, [eD.lR]: d }),
        children: [
            (0, i.jsx)(eM, { guildId: t, entry: l, identity: x, lastPlayedGame: f, onClick: o }),
            (0, i.jsx)(eG, { entry: l, stat: n, width: m, onClick: v }),
            (0, i.jsx)(eW, {
                name: x.name,
                applicationIds: l.application_ids,
                applicationCount: l.application_count,
                games: a,
                onClick: v,
            }),
        ],
    });
}
function eM(e) {
    let { guildId: t, entry: l, identity: n, lastPlayedGame: a, onClick: r } = e,
        d = s.useRef(null),
        c = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(eL, { rank: l.rank }),
                (0, i.jsx)(w.eu, {
                    size: M._3.SIZE_32,
                    src: n.user?.getAvatarURL(t, (0, M.FT)(M._3.SIZE_32)) ?? void 0,
                    className: eD.my,
                    "aria-hidden": !0,
                }),
                (0, i.jsxs)("div", {
                    className: eD.Dc,
                    children: [
                        (0, i.jsx)(A.D, {
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            lineClamp: 1,
                            children: (0, i.jsx)(L.g, {
                                name: n.displayName,
                                colorString: n.member?.colorString ?? null,
                                colorStrings: n.roleColorStrings,
                            }),
                        }),
                        null != a &&
                            (0, i.jsx)(_.E, {
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                lineClamp: 1,
                                children: N.intl.formatToPlainString(Z.default.YuNVPY, { gameName: a.name }),
                            }),
                    ],
                }),
            ],
        });
    return null == n.user
        ? (0, i.jsx)("div", { className: eD.D_, children: c })
        : (0, i.jsx)(ex.A, {
              targetElementRef: d,
              user: n.user,
              guildId: t,
              children: (e) =>
                  (0, i.jsx)(k.D, {
                      ...e,
                      innerRef: d,
                      className: j()(eD.D_, eD.FB),
                      onClick: (t) => {
                          (r?.(), e.onClick(t));
                      },
                      children: c,
                  }),
          });
}
function eL(e) {
    let { rank: t } = e,
        l = N.intl.formatToPlainString(Z.default.I4JiAQ, { rank: t });
    switch (t) {
        case 1:
            return (0, i.jsx)("div", {
                className: eD.Tm,
                "aria-label": l,
                children: (0, i.jsx)("div", { className: eD.Xe }),
            });
        case 2:
            return (0, i.jsx)("div", {
                className: eD.Tm,
                "aria-label": l,
                children: (0, i.jsx)("div", { className: eD.XQ }),
            });
        case 3:
            return (0, i.jsx)("div", {
                className: eD.Tm,
                "aria-label": l,
                children: (0, i.jsx)("div", { className: eD.c9 }),
            });
        default:
            return (0, i.jsxs)("div", {
                className: eD.mH,
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
function eU(e) {
    let { stat: t } = e;
    switch (t) {
        case en.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return (0, i.jsx)(eg.CalendarIcon, { size: "xxs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case en.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            return (0, i.jsx)(ej.ClockIcon, { size: "xxs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case en.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return (0, i.jsx)(ev.GameControllerIcon, { size: "xxs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        default:
            return null;
    }
}
function eG(e) {
    let { entry: t, stat: l, width: n, onClick: s } = e,
        { primary: a, secondary: r } = ef(t, l);
    return (0, i.jsxs)(k.D, {
        className: eD.TH,
        style: null != n ? { width: n } : void 0,
        "aria-label": N.intl.string(Z.default.o6mBdl),
        onClick: s,
        children: [
            (0, i.jsxs)("div", {
                className: eD.bf,
                children: [
                    (0, i.jsx)(eU, { stat: l }),
                    (0, i.jsx)(_.E, { variant: "text-sm/medium", color: "text-subtle", children: a }),
                ],
            }),
            null != r && (0, i.jsx)(_.E, { variant: "text-xs/medium", color: "text-muted", children: r }),
        ],
    });
}
function eP(e) {
    let { game: t, notched: l } = e;
    return (0, i.jsx)("span", {
        className: eD.rO,
        "aria-hidden": !0,
        children: (0, i.jsx)(e_.Ay, {
            mask: l ? e_.l8[24] : e_.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null != t.iconUrl
                    ? (0, i.jsx)("img", { className: eD.Gt, src: t.iconUrl, alt: "", "aria-hidden": !0 })
                    : (0, i.jsx)("span", { className: eD.ct, "aria-hidden": !0 }),
        }),
    });
}
function eO(e) {
    let { played: t, totalCount: l } = e,
        n = t.filter((e) => null != e.iconUrl || e.isLoading).slice(0, 2),
        s = l - n.length;
    return (0, i.jsxs)("div", {
        className: eD.Nw,
        children: [
            n.map((e, t) => (0, i.jsx)(eP, { game: e, notched: s > 0 || t !== n.length - 1 }, `${e.id}-${t}`)),
            s > 0
                ? (0, i.jsx)("span", {
                      className: eD.rO,
                      children: (0, i.jsx)(e_.Ay, {
                          mask: e_.Ay.Masks.SQUIRCLE,
                          width: 24,
                          height: 24,
                          children: (0, i.jsx)("div", {
                              className: eD.p0,
                              children: (0, i.jsx)(_.E, {
                                  variant: "text-xs/semibold",
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
function eB(e) {
    let { played: t, totalCount: l, children: n } = e,
        s = t.filter((e) => null != e.iconUrl || e.isLoading);
    return (0, i.jsx)(ep.u, {
        body:
            0 === t.length
                ? N.intl.string(Z.default["7CrlYb"])
                : 1 === t.length
                  ? N.intl.formatToPlainString(Z.default.dbNpK0, { firstGame: t[0].name })
                  : 2 === t.length && 2 === l
                    ? N.intl.formatToPlainString(Z.default.tqVg4M, { firstGame: t[0].name, secondGame: t[1].name })
                    : N.intl.formatToPlainString(Z.default.bxcrSz, {
                          firstGame: t[0].name,
                          secondGame: t[1].name,
                          otherCount: l - 2,
                      }),
        asset: s.length > 0 ? (0, i.jsx)(eO, { played: s, totalCount: s.length }) : void 0,
        assetSize: s.length > 1 ? 43 : 24,
        children: n,
    });
}
function eW(e) {
    let { name: t, applicationIds: l, applicationCount: n, games: s, onClick: a } = e,
        r = ey(s, l);
    return (0, i.jsx)("div", {
        className: eD.ag,
        children: (0, i.jsx)(eB, {
            played: r,
            totalCount: n,
            children: (0, i.jsx)(k.D, {
                className: j()(eD.Nw, eD.Dz),
                "aria-label": N.intl.formatToPlainString(Z.default.o6mBdl, { name: t }),
                onClick: a,
                children: (0, i.jsx)(eO, { played: r, totalCount: n }),
            }),
        }),
    });
}
var ez = l(189043);
function eF(e) {
    let { guildId: t, entries: l, stat: n, games: s, currentUserEntry: a, currentUserPillarRef: r, onClick: d } = e,
        c = {
            1: { column: ez.HC, pillar: ez.P5 },
            2: { column: ez.th, pillar: ez.Vk },
            3: { column: ez.Ou, pillar: ez.el },
        };
    return (0, i.jsx)("div", {
        className: ez.pI,
        role: "list",
        "aria-label": N.intl.string(Z.default.wKXLfQ),
        children: l.map((e, l) =>
            (0, i.jsx)(
                eH,
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
function eH(e) {
    let {
            guildId: t,
            entry: l,
            place: n,
            columnClassName: a,
            pillarClassName: r,
            stat: d,
            games: c,
            isCurrentUser: u,
            currentUserPillarRef: o,
            onClick: m,
        } = e,
        x = ey(c, l.application_ids),
        h = eT(t, l),
        { primary: f } = ef(l, d),
        g = 1 === n ? M._3.SIZE_48 : M._3.SIZE_40,
        v = s.useRef(null),
        p = j()(ez.dR, { [ez.m$]: 1 === n, [ez.wd]: 2 === n, [ez.p0]: 3 === n }),
        E = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: ez.R3,
                    children: [
                        (0, i.jsx)(w.eu, {
                            size: g,
                            src: h.user?.getAvatarURL(t, (0, M.FT)(g)) ?? void 0,
                            "aria-hidden": !0,
                        }),
                        (0, i.jsx)("div", { className: p }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: j()(ez.DX, r),
                    children: [
                        (0, i.jsx)(A.D, {
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            lineClamp: 1,
                            className: ez.IY,
                            children: (0, i.jsx)(L.g, {
                                name: h.displayName,
                                colorString: h.member?.colorString ?? null,
                                colorStrings: h.roleColorStrings,
                            }),
                        }),
                        (0, i.jsx)(eB, {
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
        ref: u ? o : void 0,
        children:
            null != h.user
                ? (0, i.jsx)(ex.A, {
                      targetElementRef: v,
                      user: h.user,
                      guildId: t,
                      children: (e) =>
                          (0, i.jsx)(k.D, {
                              ...e,
                              className: ez.fs,
                              innerRef: v,
                              onClick: (t) => {
                                  (m?.(), e.onClick(t));
                              },
                              children: E,
                          }),
                  })
                : (0, i.jsx)("div", { className: ez.fs, children: E }),
    });
}
var eK = l(652215),
    eY = l(219047);
function eq(e) {
    let t,
        l,
        n,
        { guildId: a, data: r, inModal: d = !1, column: c } = e,
        { stat: u, entries: o } = r,
        m = (0, y.bG)([W.default], () => W.default.getCurrentUser()?.id),
        x = s.useMemo(() => o.find((e) => e.user_id === m) ?? null, [o, m]),
        f = s.useMemo(() => {
            let e = o.slice(0, 20);
            return null == x || e.includes(x) ? e : [...e, x];
        }, [o, x]),
        g = s.useMemo(() => Array.from(new Set(f.map((e) => e.user_id))), [f]);
    (0, P.k6)(a, g);
    let v = ed(u),
        p =
            ((t = s.useMemo(() => Array.from(new Set(f.flatMap((e) => e.application_ids))), [f])),
            (l = (0, eI.A)(t)),
            (n = (0, y.yK)([eN.A], () => t.map((e) => eN.A.didFetchingApplicationFail(e)))),
            s.useMemo(() => {
                let e = new Map();
                return (
                    t.forEach((t, i) => {
                        let s = l[i];
                        e.set(
                            t,
                            null != s
                                ? { id: t, name: s.name, iconUrl: s.getIconURL(64) ?? void 0, isLoading: !1 }
                                : eS(t, !n[i]),
                        );
                    }),
                    e
                );
            }, [t, l, n])),
        _ = ei(r),
        E = ea(r),
        A = "podium" === E,
        I = er({ expanded: d, column: c }),
        S = [f[0], f[1], f[2]],
        { scrollerRef: C, scrollerNode: R, userRowRef: D, floatingRowPosition: w, scrollToUserRow: M } = Q(),
        L = (function (e) {
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
        })(R),
        U = null == x && null != m,
        G = null != w,
        O = s.useMemo(() => {
            let e = null == x || f.includes(x) ? f : [...f, x];
            return e.length > 0 ? e : f;
        }, [f, x]),
        { metricMeasureRef: B, metricWidth: z } = (function () {
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
        F = (0, i.jsx)("div", {
            ref: B,
            className: eY.V$,
            "aria-hidden": !0,
            children: O.map((e) => (0, i.jsx)(eG, { entry: e, stat: u }, e.user_id)),
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
            } = e,
            c = s.useRef(null),
            u = `${t}:${l}:${n}:${i}:${a}`,
            o = s.useCallback(() => {
                c.current !== u &&
                    ((c.current = u),
                    h.default.track(eK.HAw.LEADERBOARD_END_IMPRESSION, {
                        guild_id: t,
                        leaderboard_length: l,
                        leaderboard_state: n,
                        leaderboard_view: i,
                        metric: a,
                    }));
            }, [t, u, l, n, i, a]);
        s.useEffect(() => {
            (d || r) && o();
        }, [d, r, o]);
    })({
        guildId: a,
        leaderboardLength: _ ? 0 : f.length,
        leaderboardState: E,
        leaderboardView: I,
        metric: v,
        isAtEnd: L,
        isEmpty: _,
    });
    let Y = s.useCallback(
            (e) => {
                h.default.track(eK.HAw.LEADERBOARD_CLICK, {
                    location: e,
                    guild_id: a,
                    leaderboard_state: E,
                    leaderboard_view: I,
                    metric: v,
                });
            },
            [a, E, I, v],
        ),
        q = s.useCallback(
            (e) => {
                let t = e === x;
                return (0, i.jsx)(
                    ew,
                    {
                        guildId: a,
                        entry: e,
                        stat: u,
                        games: p,
                        isCurrentUser: t,
                        shouldDimForCurrentUser: t && G,
                        rowRef: t ? D : void 0,
                        onClick: () => Y("row"),
                        metricWidth: z ?? void 0,
                    },
                    `${e.rank}-${e.user_id}`,
                );
            },
            [G, x, p, a, u, D, Y, z],
        );
    return _
        ? (0, i.jsx)("div", {
              className: eY.Cm,
              children: (0, i.jsx)(em, { guildId: a, onActivitySharingClick: () => Y("activity_sharing") }),
          })
        : null == z
          ? (0, i.jsxs)("div", { className: eY.rf, children: [F, (0, i.jsx)(b, {})] })
          : (0, i.jsxs)("div", {
                className: eY.rf,
                children: [
                    F,
                    (0, i.jsxs)("div", {
                        className: eY.SY,
                        children: [
                            (0, i.jsxs)(T.d_, {
                                className: j()(eY.p_, { [eY.zE]: d, [eY.Ng]: U }),
                                ref: C,
                                children: [
                                    A &&
                                        (0, i.jsx)(eF, {
                                            guildId: a,
                                            entries: S,
                                            stat: u,
                                            games: p,
                                            currentUserEntry: x,
                                            currentUserPillarRef: D,
                                            onClick: () => Y("podium"),
                                        }),
                                    f.map(q),
                                ],
                            }),
                            (null != x && null != w) || (U && !L)
                                ? (0, i.jsx)(H, { position: "top" !== w || U ? "bottom" : "top" })
                                : null,
                            null != x &&
                                null != w &&
                                (0, i.jsx)(K, {
                                    position: w,
                                    children: (0, i.jsx)(k.D, {
                                        className: eY.Po,
                                        "aria-label": N.intl.string(Z.default.d0Z8kd),
                                        onClick: M,
                                        children: (0, i.jsx)(ew, {
                                            guildId: a,
                                            entry: x,
                                            stat: u,
                                            games: p,
                                            isCurrentUser: !0,
                                            shouldDimForCurrentUser: !1,
                                            isFloating: !0,
                                            onClick: () => Y("row"),
                                            metricWidth: z ?? void 0,
                                        }),
                                    }),
                                }),
                            U && (0, i.jsx)(e$, { guildId: a, onActivitySharingClick: () => Y("activity_sharing") }),
                        ],
                    }),
                    (0, i.jsx)(eQ, { computedAt: r.computed_at, inModal: d }),
                ],
            });
}
function eQ(e) {
    let { computedAt: t, inModal: l } = e,
        n = (0, i.jsxs)("div", {
            className: eY.z8,
            children: [
                (0, i.jsx)(R.RefreshIcon, { size: "xxs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 }),
                (0, i.jsx)(_.E, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: N.intl.string(Z.default["/nma+a"]),
                }),
            ],
        });
    return null == t
        ? (0, i.jsx)("div", { className: eY.qr, children: n })
        : (0, i.jsx)("div", {
              className: j()(eY.qr, { [eY.zE]: l }),
              tabIndex: 0,
              children: (0, i.jsx)(o.m, {
                  text: N.intl.formatToPlainString(Z.default["1bt50t"], {
                      timestamp: (0, z.mk)(new Date(t)).toLowerCase(),
                  }),
                  position: "bottom",
                  children: n,
              }),
          });
}
function e$(e) {
    let { guildId: t, onActivitySharingClick: l } = e,
        { isSharingActivity: n, isSharingActivityInGuild: a, hasPersonalizationConsent: r } = (0, Y.T4)(t),
        d = (0, y.bG)([B.A], () => B.A.getStatus() === eK.clD.INVISIBLE),
        u = N.intl.string(Z.default.toxuHd),
        o = !1,
        m = !1;
    n && a
        ? r
            ? d && ((u = N.intl.string(Z.default.PTDDhW)), (m = !0))
            : ((u = N.intl.string(Z.default.mTARYx)), (o = !0))
        : ((u = N.intl.string(Z.default["8y885d"])), (o = !0));
    let [x] = s.useState(o),
        [h] = s.useState(m),
        f = !o && !m && x,
        g = !o && !m && h;
    g ? (u = N.intl.string(Z.default.cgRADC)) : f && (u = N.intl.string(Z.default.dqYuni));
    let {
        user: j,
        member: v,
        name: p,
        roleColorStrings: E,
    } = J(
        t,
        (0, y.bG)([W.default], () => W.default.getCurrentUser()?.id ?? ""),
    );
    return null == j
        ? null
        : (0, i.jsxs)("div", {
              className: eY.Xx,
              children: [
                  (0, i.jsxs)("div", {
                      className: eY.kd,
                      children: [
                          (0, i.jsxs)("div", {
                              className: eY.nk,
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
                              size: M._3.SIZE_32,
                              src: j.getAvatarURL(t, (0, M.FT)(M._3.SIZE_32)) ?? void 0,
                              className: eY.SA,
                              "aria-hidden": !0,
                              status: d ? eK.clD.INVISIBLE : void 0,
                          }),
                          (0, i.jsxs)("div", {
                              className: eY.ko,
                              children: [
                                  (0, i.jsx)(A.D, {
                                      variant: "heading-sm/semibold",
                                      color: "text-default",
                                      lineClamp: 1,
                                      children: (0, i.jsx)(L.g, {
                                          name: p,
                                          colorString: v?.colorString ?? null,
                                          colorStrings: E,
                                      }),
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: eY.LF,
                                      children: [
                                          f || g
                                              ? (0, i.jsx)(U.U, {
                                                    size: "xs",
                                                    color: c.A.colors.ICON_FEEDBACK_POSITIVE,
                                                    "aria-hidden": !0,
                                                })
                                              : null,
                                          (0, i.jsx)(_.E, {
                                              variant: "text-xs/medium",
                                              color: "text-subtle",
                                              children: u,
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                      ],
                  }),
                  o &&
                      (0, i.jsx)("div", {
                          className: eY.rl,
                          children: (0, i.jsx)(G.$, {
                              variant: "secondary",
                              size: "sm",
                              text: N.intl.string(Z.default.fMbgeZ),
                              onClick: () => {
                                  (l(), eu(t));
                              },
                          }),
                      }),
                  m &&
                      !o &&
                      (0, i.jsx)(G.$, {
                          variant: "secondary",
                          size: "sm",
                          text: N.intl.string(N.t.fwPurU),
                          onClick: () => {
                              (0, O.A)({ nextStatus: eK.clD.ONLINE, prevStatus: eK.clD.INVISIBLE });
                          },
                      }),
              ],
          });
}
var eV = l(224640),
    eX = l(20742),
    eZ = l(515746);
function eJ(e) {
    let { data: t } = e,
        l = (0, el.K)(t.stat),
        {
            ended: n,
            endDate: a,
            badgeLabel: r,
        } = (function (e) {
            let t = (e + et.A.Seconds.WEEK) * et.A.Millis.SECOND,
                [l, n] = s.useState(() => Date.now()),
                i = t - l,
                a = i <= 0,
                r = i - (Math.ceil(i / et.A.Millis.DAY) - 1) * et.A.Millis.DAY;
            return (
                (0, eA.A)(() => n(Date.now()), a ? null : r),
                s.useMemo(
                    () => ({
                        ended: a,
                        endDate: new Date(t),
                        badgeLabel: a
                            ? N.intl.string(Z.default["J8r/7L"])
                            : N.intl.formatToPlainString(Z.default["PuaR+2"], { days: Math.ceil(i / et.A.Millis.DAY) }),
                    }),
                    [a, t, i],
                )
            );
        })(t.week_start_ts),
        d = ee.PZ.useSetting(),
        c = 2 > (0, z.m_)(a, new Date()) ? (0, z.mk)(a, !1, d).toLowerCase() : (0, z.i$)(a, "L LT", d).toLowerCase(),
        u = n
            ? N.intl.format(Z.default.kG9XmM, { endedAt: c, nextStatName: (0, el.K)(t.next_stat).name })
            : N.intl.format(Z.default["X+VLqi"], { statQuestion: l.question, endsAt: c });
    return (0, i.jsx)(ep.u, {
        title: l.name,
        body: u,
        position: "top",
        children: (0, i.jsx)("div", {
            className: j()(eZ.qS, n ? eZ.yM : eZ.Qk),
            tabIndex: 0,
            children: (0, i.jsx)(_.E, {
                variant: "text-xs/semibold",
                color: n ? "text-muted" : "text-brand",
                children: r,
            }),
        }),
    });
}
function e0(e) {
    let { guildId: t, data: l, expanded: n, column: i, enabled: a = !0 } = e,
        [r, d] = s.useState(null),
        c = s.useRef(null),
        u = s.useRef({ guildId: t, data: l, expanded: n, column: i });
    s.useEffect(() => {
        u.current = { guildId: t, data: l, expanded: n, column: i };
    }, [t, l, n, i]);
    let o = s.useCallback((e) => {
        let t = c.current;
        if (null == t) return;
        c.current = null;
        let l = Date.now() - t;
        if (l < 250) return;
        let n = u.current;
        null != n.data &&
            h.default.track(
                eK.HAw.LEADERBOARD_HOVER,
                {
                    guild_id: n.guildId,
                    duration: Math.round(l) / 1e3,
                    leaderboard_state: ea(n.data),
                    leaderboard_view: er({ expanded: n.expanded, column: n.column }),
                    metric: ed(n.data.stat),
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
                            o(!0));
                    }
                );
            function e() {
                c.current = Date.now();
            }
            function t() {
                o(!1);
            }
            function l() {
                o(!1);
            }
            function n() {
                "hidden" === document.visibilityState && o(!0);
            }
            function i() {
                o(!0);
            }
        }, [r, a, o]),
        s.useCallback((e) => {
            d(e);
        }, [])
    );
}
var e1 = l(460614);
function e2(e) {
    let { guildId: t, data: l, modalProps: n } = e,
        s = ek(t, l),
        a = e0({ guildId: t, data: s, expanded: !0 });
    return null == s
        ? null
        : (0, i.jsx)(eV.d, {
              size: "lg",
              "aria-label": es(s),
              ...n,
              children: (0, i.jsxs)("div", {
                  ref: a,
                  children: [
                      (0, i.jsxs)("div", {
                          className: e1.wx,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: e1.LD,
                                  children: [
                                      (0, i.jsx)(u.TrophyIcon, {
                                          size: "xs",
                                          color: c.A.colors.ICON_SUBTLE,
                                          "aria-hidden": !0,
                                      }),
                                      (0, i.jsx)(A.D, {
                                          variant: "heading-sm/medium",
                                          className: e1.DD,
                                          children: es(s),
                                      }),
                                      (0, i.jsx)(eJ, { data: s }),
                                  ],
                              }),
                              (0, i.jsx)(eX.s_, {}),
                          ],
                      }),
                      (0, i.jsx)("div", {
                          className: e1.rf,
                          children: (0, i.jsx)(eq, { guildId: t, data: s, inModal: !0 }),
                      }),
                  ],
              }),
          });
}
var e6 = l(452027),
    e3 = l(103557),
    e8 = l(825484),
    e4 = l(95477),
    e7 = l(241326),
    e5 = l(683071),
    e9 = l(2553),
    te = l(405810),
    tt = l(967198),
    tl = l(488428),
    tn = l(776231);
let ti = (0, l(676279).cy)();
function ts(e, t, l) {
    let n = l.startsWith("a_"),
        i = n ? (ti ? "webp" : "gif") : ti ? "webp" : "jpg",
        { CDN_HOST: s, API_ENDPOINT: a } = window.GLOBAL_ENV,
        r = eK.Rsh.GUILD_SPACE_IMAGE_TEXT_WIDGET_IMAGE(e, t, l, i),
        d = null != s ? `https://${s}${r}` : location.protocol + a + r,
        c = { size: (0, tn.kr)(500 * (0, tn.mZ)()) };
    return (
        "jpg" === i && (c.quality = "lossless"), "webp" === i && n && (c.animated = !0), (d += `?${tl.stringify(c)}`)
    );
}
var ta = l(868602),
    tr = l(445187),
    td = l(650583),
    tc = l(684343);
function tu(e) {
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
                    case td.dh.ARROW_RIGHT:
                    case td.dh.ARROW_DOWN:
                        t = (s + 1) % i.length;
                        break;
                    case td.dh.ARROW_LEFT:
                    case td.dh.ARROW_UP:
                        t = (s - 1 + i.length) % i.length;
                        break;
                    case td.dh.HOME:
                        t = 0;
                        break;
                    case td.dh.END:
                        t = i.length - 1;
                        break;
                    default:
                        return;
                }
                (e.preventDefault(), i[t]?.focus());
            }
        }, []);
    return (0, i.jsx)("div", {
        className: tc.vR,
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
                    className: tc.Mf,
                    "aria-selected": t,
                    "aria-controls": a,
                    tabIndex: t ? 0 : -1,
                    onClick: () => d(e.id),
                    onKeyDown: c,
                    children: (0, i.jsx)(_.E, {
                        className: tc.Pf,
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
var to = l(831544),
    tm = l(28863),
    tx = l(148166),
    th = l(427209),
    tf = l(294454),
    tg = l(605810);
function tj(e) {
    let { target: t, tabIndex: n } = e;
    return (0, i.jsx)("div", {
        className: tg.ql,
        children: (0, i.jsx)(o.m, {
            text: N.intl.string(N.t.RDE0Sc),
            ariaHidden: !0,
            children: (0, i.jsx)(m.K, {
                icon: th.A,
                size: "sm",
                variant: "overlay-secondary",
                tabIndex: n,
                "aria-label": N.intl.string(N.t.Ej3B3Y),
                onClick: () => {
                    (0, ec.openModalLazy)(
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
                                l.e("82389"),
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
                                l.e("225307"),
                                l.e("332165"),
                                l.e("618416"),
                                l.e("501546"),
                                l.e("20409"),
                                l.e("56347"),
                                l.e("424199"),
                                l.e("496818"),
                                l.e("587618"),
                                l.e("645499"),
                                l.e("342551"),
                                l.e("888326"),
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
                                l.e("536200"),
                                l.e("832817"),
                                l.e("183776"),
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
                                l.e("428296"),
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
                                l.e("534822"),
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
                                l.e("466322"),
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
                                l.e("556967"),
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
                                l.e("469187"),
                                l.e("193158"),
                                l.e("318546"),
                                l.e("843719"),
                                l.e("912773"),
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
                                l.e("371482"),
                                l.e("126780"),
                                l.e("220518"),
                                l.e("360781"),
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
                                l.e("88160"),
                                l.e("29664"),
                                l.e("243100"),
                                l.e("982699"),
                                l.e("250478"),
                                l.e("863076"),
                                l.e("680986"),
                                l.e("462276"),
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
                        { stackingBehavior: "stack", modalKey: tf.aU },
                    );
                },
            }),
        }),
    });
}
var tv = l(272984);
function tp(e) {
    let { artist: t, itemProps: l } = e,
        n = null != t.artist_image_hash ? tv.RQ.IMAGE(t.artist_image_hash) : null,
        a = s.useMemo(
            () => ({
                kind: "artist",
                shareUrl: tv.RQ.WEB_OPEN(tv.M0.ARTIST, t.artist_external_id),
                title: t.artist_name ?? t.artist_external_id,
                subtitle: null,
                imageUrl: n,
            }),
            [t.artist_external_id, t.artist_name, n],
        ),
        r = (0, i.jsx)(tx.R, { src: n, isCircular: !0, FallbackIcon: to.MicrophoneIcon });
    return null == t.artist_name
        ? (0, i.jsx)("div", { className: tg.Nr, children: (0, i.jsx)("div", { ...l, className: tg.MT, children: r }) })
        : (0, i.jsxs)("div", {
              className: tg.Nr,
              children: [
                  (0, i.jsxs)(tm.Anchor, {
                      ...l,
                      className: tg.MT,
                      href: a.shareUrl,
                      useDefaultUnderlineStyles: !1,
                      children: [
                          r,
                          (0, i.jsx)("span", {
                              className: tg.Qq,
                              children: (0, i.jsx)(_.E, {
                                  className: tg.DD,
                                  tag: "span",
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  lineClamp: 2,
                                  children: t.artist_name,
                              }),
                          }),
                      ],
                  }),
                  (0, i.jsx)(tj, { target: a, tabIndex: l.tabIndex }),
              ],
          });
}
var t_ = l(872351),
    tE = l(708988),
    tA = l(104171),
    tN = l(628137);
let tI = "none",
    tb = (e, t) => (0, i.jsx)(_.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: e }, t);
function tS(e) {
    return e;
}
function tC(e) {
    return e?.direction ?? tI;
}
function ty(e) {
    if (null == e) return null;
    let t = Math.round(Math.abs(e));
    return 0 === t
        ? null
        : { direction: e > 0 ? "up" : "down", label: N.intl.formatToPlainString(Z.default["h+LUpk"], { percent: t }) };
}
function tT(e) {
    return ty(null != e.plays_trend_pct ? 100 * e.plays_trend_pct : null);
}
var tk = l(633099);
function tR(e) {
    let { trend: t } = e,
        l = "up" === t.direction ? t_.z : tE.M;
    return (0, i.jsxs)("span", {
        className: tk.GW,
        children: [
            (0, i.jsx)(l, {
                className: j()({ [tk.$J]: "up" === t.direction, [tk.KW]: "down" === t.direction }),
                size: "xxs",
                color: "currentColor",
                "aria-hidden": !0,
            }),
            (0, i.jsx)(_.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: t.label }),
        ],
    });
}
function tD(e) {
    var t;
    let { guildId: l, song: n } = e,
        a = s.useMemo(() => (n.facepile_user_ids ?? []).slice(0, 3), [n.facepile_user_ids]);
    (0, P.k6)(l, a);
    let r = (0, y.yK)([W.default], () => a.map((e) => W.default.getUser(e)), [a]),
        d = s.useMemo(() => r.filter((e) => null != e), [r]);
    if (0 === d.length) return null;
    let c = n.unique_listeners - d.length;
    return (0, i.jsx)("span", {
        className: tk.WM,
        role: "group",
        "aria-label":
            ((t = n.unique_listeners),
            N.intl.formatToPlainString(Z.default.AzIhRB, { count: t, trend: tI, countHook: tS })),
        children: (0, i.jsx)(tA.Ay, {
            users: d,
            guildId: l,
            size: tA.DN.SIZE_24,
            max: d.length,
            count: n.unique_listeners,
            hideMoreUsers: c <= 0,
            renderMoreUsers: () =>
                (0, i.jsx)("span", {
                    className: tk.ju,
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
function tw(e) {
    let { trackExternalId: t } = e,
        [l, n] = s.useState(!1);
    return (0, i.jsxs)("div", {
        className: tk.aF,
        children: [
            (0, i.jsx)(tN.A, {
                resourceType: tv.M0.TRACK,
                resourceId: t,
                onLoad: () => n(!0),
                allowEncryptedMedia: !0,
            }),
            !l && (0, i.jsx)("div", { className: tk.Ls, "aria-hidden": !0 }),
        ],
    });
}
function tM(e) {
    let { isCompact: t, headline: l, detail: n, trend: s } = e;
    return null == l && null == n && null == s
        ? null
        : (0, i.jsx)("div", {
              className: j()(tk.yp, { [tk.Fl]: t }),
              children: (0, i.jsxs)("div", {
                  className: tk.QD,
                  children: [
                      null != l &&
                          (0, i.jsx)(_.E, {
                              tag: "div",
                              variant: "heading-xl/semibold",
                              color: "text-default",
                              children: l,
                          }),
                      (0, i.jsxs)("div", {
                          className: tk._0,
                          children: [
                              null != n &&
                                  (0, i.jsx)(_.E, {
                                      tag: "span",
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: n,
                                  }),
                              null != s && (0, i.jsx)(tR, { trend: s }),
                          ],
                      }),
                  ],
              }),
          });
}
function tL(e) {
    var t;
    let { guildId: l, isCompact: n, canShowEmbed: s, song: a } = e,
        r = ty(a.plays_change_percent);
    return (0, i.jsxs)("div", {
        className: j()(tk.yp, { [tk.Fl]: n }),
        children: [
            s && (0, i.jsx)(tw, { trackExternalId: a.track_external_id }, a.track_external_id),
            (0, i.jsxs)("div", {
                className: j()(tk.QD, tk.rk),
                children: [
                    (0, i.jsx)(tD, { guildId: l, song: a }),
                    (0, i.jsxs)("div", {
                        className: tk._0,
                        children: [
                            (0, i.jsx)(_.E, {
                                tag: "span",
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                children:
                                    ((t = a.plays),
                                    N.intl.format(Z.default["7hHUIS"], { count: t, trend: tC(r), countHook: tb })),
                            }),
                            null != r && (0, i.jsx)(tR, { trend: r }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var tU = l(197935),
    tG = l(915734);
function tP(e) {
    let { label: t, items: l, isCompact: n, getItemKey: s, renderItem: a } = e;
    return (0, i.jsx)("div", {
        className: j()(tG.Dk, { [tG.yI]: n }),
        children: (0, i.jsx)(tU.A, {
            items: l,
            getItemKey: s,
            renderItem: a,
            gap: 8,
            edgeFade: 40,
            actionsClassName: tG.o1,
            "aria-label": t,
        }),
    });
}
var tO = (((n = {}).TOP_SONGS = "top_songs"), (n.TOP_ARTISTS = "top_artists"), (n.TOP_LISTENERS = "top_listeners"), n);
let tB = ["top_songs", "top_artists", "top_listeners"];
function tW(e) {
    return 1 > e.ranked_songs.reduce((e, t) => e + t.plays, 0);
}
function tz(e) {
    switch (e) {
        case "top_songs":
            return N.intl.string(Z.default.KgeEtx);
        case "top_artists":
            return N.intl.string(Z.default.RYxWTS);
        case "top_listeners":
            return N.intl.string(Z.default.KO73KB);
    }
}
function tF(e, t) {
    return `popular-music-tab-${e}-${t}`;
}
function tH(e) {
    return `popular-music-panel-${e}`;
}
var tK = l(742452);
function tY(e) {
    return e.artist_external_id;
}
function tq(e, t) {
    return (0, i.jsx)(tp, { artist: e, itemProps: t });
}
function tQ(e) {
    let { isCompact: t, data: l } = e;
    if (0 === l.ranked_artists.length) return null;
    let n = tT(l);
    return (0, i.jsxs)("div", {
        className: tK.U,
        children: [
            (0, i.jsx)(tP, {
                label: tz(tO.TOP_ARTISTS),
                items: l.ranked_artists,
                isCompact: t,
                getItemKey: tY,
                renderItem: tq,
            }),
            (0, i.jsx)(tM, {
                isCompact: t,
                headline:
                    l.distinct_songs < 1
                        ? null
                        : N.intl.formatToPlainString(Z.default.W8etVA, { count: l.distinct_songs }),
                detail:
                    l.distinct_listeners < 1 || l.distinct_artists < 1
                        ? null
                        : N.intl.format(Z.default.yGqf0D, {
                              memberCount: l.distinct_listeners,
                              artistCount: l.distinct_artists,
                              trend: tC(n),
                              memberCountHook: tb,
                              artistCountHook: tb,
                          }),
                trend: n,
            }),
        ],
    });
}
var t$ = l(803613),
    tV = l(682348),
    tX = l(73152),
    tZ = l(57129),
    tJ = l(280911);
function t0(e) {
    let { guildId: t, isCompact: l } = e,
        n = (0, y.bG)([W.default], () => W.default.getCurrentUser()),
        s = (0, y.bG)([V.Ay], () => (null != n ? V.Ay.getMember(t, n.id) : null)),
        a = (0, $.gn)(t, n?.id, s?.colorStrings ?? null),
        r = X.Ay.useName(t, void 0, n);
    return (0, i.jsxs)("div", {
        className: tJ.D_,
        children: [
            (0, i.jsxs)("div", {
                className: tJ.FI,
                "aria-hidden": !0,
                children: [
                    !l &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("span", { className: tJ.eu, children: (0, i.jsx)(t$.D, { size: "sm" }) }),
                                (0, i.jsxs)("span", {
                                    className: tJ.r$,
                                    children: [
                                        (0, i.jsx)("span", { className: tJ.Om }),
                                        (0, i.jsx)("span", { className: tJ.Om }),
                                        (0, i.jsx)("span", { className: tJ.Om }),
                                    ],
                                }),
                            ],
                        }),
                    (0, i.jsx)(w.eu, {
                        size: M._3.SIZE_32,
                        src: n?.getAvatarURL(t, (0, M.FT)(M._3.SIZE_32)) ?? void 0,
                        "aria-hidden": !0,
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: tJ.Qq,
                children: [
                    (0, i.jsx)(A.D, {
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        lineClamp: 1,
                        children: (0, i.jsx)(L.g, {
                            name: N.intl.formatToPlainString(Z.default.subXXA, { name: r }),
                            colorString: s?.colorString ?? null,
                            colorStrings: a,
                        }),
                    }),
                    (0, i.jsx)(_.E, {
                        variant: "text-xs/medium",
                        color: "text-strong",
                        lineClamp: l ? 2 : 1,
                        children: N.intl.string(Z.default.y1neEe),
                    }),
                ],
            }),
        ],
    });
}
function t1(e) {
    let { widgetName: t, isCompact: l } = e;
    return (0, i.jsxs)("div", {
        className: tJ.D_,
        children: [
            !l &&
                (0, i.jsx)("span", {
                    className: tJ.eu,
                    "aria-hidden": !0,
                    children: (0, i.jsx)(tV._, { size: "sm", color: c.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
                }),
            (0, i.jsxs)("div", {
                className: tJ.Qq,
                children: [
                    (0, i.jsx)(A.D, {
                        variant: "heading-sm/semibold",
                        color: "text-strong",
                        lineClamp: 1,
                        children: N.intl.string(tZ.default.WhdCGP),
                    }),
                    (0, i.jsx)(_.E, {
                        variant: "text-xs/medium",
                        color: "text-strong",
                        lineClamp: l ? 2 : 1,
                        children: N.intl.formatToPlainString(Z.default["49Jv0I"], { widgetName: t }),
                    }),
                ],
            }),
        ],
    });
}
function t2(e) {
    let { guildId: t, widgetName: n, isCompact: s, isSpotifyConnected: a } = e;
    return (0, i.jsxs)("div", {
        className: tJ.UX,
        children: [
            a ? (0, i.jsx)(t1, { widgetName: n, isCompact: s }) : (0, i.jsx)(t0, { guildId: t, isCompact: s }),
            (0, i.jsx)(G.$, {
                variant: "secondary",
                size: "sm",
                icon: a ? void 0 : tX.E,
                text: a ? N.intl.string(N.t.KY0ilj) : N.intl.string(Z.default.jB1fWC),
                onClick: () => {
                    (0, ec.openModalLazy)(
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
var t6 = l(625903),
    t3 = l(780964),
    t8 = l(766075),
    t4 = l(30370),
    t7 = l(123894);
function t5() {
    let e = (0, y.bG)([t4.A], () => t4.A.getAccounts().some((e) => e.type === eK.fg2.SPOTIFY && e.showActivity));
    return (0, i.jsx)(C, {
        className: t7.w,
        title: N.intl.string(Z.default.ULK65a),
        body: N.intl.format(e ? Z.default.BLuvck : Z.default["Ko3a0+"], { memberCount: 2 }),
        action: e
            ? null
            : (0, i.jsx)(G.$, {
                  variant: "secondary",
                  size: "sm",
                  icon: t6.SettingsIcon,
                  text: N.intl.string(N.t["3D5yo/"]),
                  onClick: () => (0, t8.openUserSettings)(t3.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING),
              }),
    });
}
function t9() {
    return (0, i.jsx)(C, {
        className: t7.w,
        title: N.intl.string(Z.default.ULK65a),
        body: N.intl.format(Z.default.ZQxU8v, { memberCount: 2 }),
    });
}
var le = l(109487),
    lt = l(279543);
function ll(e) {
    let { isCompact: t } = e;
    return (0, i.jsxs)("div", {
        className: lt.qr,
        children: [
            (0, i.jsxs)("div", {
                className: lt.Os,
                children: [
                    (0, i.jsx)("span", {
                        className: lt.Kk,
                        children: (0, i.jsx)(R.RefreshIcon, {
                            size: "xxs",
                            color: c.A.colors.ICON_SUBTLE,
                            "aria-hidden": !0,
                        }),
                    }),
                    (0, i.jsx)(_.E, {
                        className: lt.Pf,
                        tag: "span",
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: N.intl.string(Z.default["3/DOFo"]),
                    }),
                ],
            }),
            (0, i.jsxs)(tm.Anchor, {
                className: lt.al,
                href: tv.RQ.WEB_HOME,
                "aria-label": N.intl.string(Z.default["jUr+wF"]),
                children: [
                    (0, i.jsx)("span", {
                        className: lt.Kk,
                        children: (0, i.jsx)(le.L, { size: "xs", color: c.A.colors.ICON_STRONG, "aria-hidden": !0 }),
                    }),
                    !t &&
                        (0, i.jsx)(_.E, {
                            className: lt.G2,
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
var ln = l(65154),
    li = l(329177),
    ls = l(242226);
function la(e) {
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
        } = e,
        x = J(l, n, { showYouSuffix: d }),
        { user: h } = x;
    return null == h
        ? null
        : (0, i.jsxs)("div", {
              ref: m,
              "aria-hidden": o,
              inert: o,
              className: j()(ls.nM, { [ls.Bh]: d && !o, [ls.lR]: u }),
              children: [
                  (0, i.jsx)(lr, { guildId: l, user: h, identity: x, rank: a, listener: s }),
                  null != s &&
                      (0, i.jsxs)("div", {
                          className: j()(ls.Mx, { [ls.dA]: r }),
                          children: [
                              (0, i.jsx)(ln.S, { size: "xxs", color: c.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                              (0, i.jsx)(_.E, {
                                  variant: "text-sm/medium",
                                  color: "text-strong",
                                  children:
                                      ((t = s.plays), N.intl.formatToPlainString(Z.default["7X+3f8"], { count: t })),
                              }),
                          ],
                      }),
                  null != s && !r && (0, i.jsx)(lo, { artists: s.artists, artistCount: s.artist_count ?? null }),
              ],
          });
}
function lr(e) {
    let { guildId: t, user: l, identity: n, rank: a, listener: r } = e,
        d = s.useRef(null);
    return (0, i.jsx)(ex.A, {
        targetElementRef: d,
        user: l,
        guildId: t,
        children: (e) =>
            (0, i.jsxs)(k.D, {
                ...e,
                innerRef: d,
                className: ls.D_,
                children: [
                    null != a &&
                        (0, i.jsx)(D.A, { children: N.intl.formatToPlainString(Z.default.I4JiAQ, { rank: a }) }),
                    (0, i.jsxs)("span", {
                        className: ls.R3,
                        children: [
                            (0, i.jsx)(w.eu, {
                                size: M._3.SIZE_32,
                                src: l.getAvatarURL(t, (0, M.FT)(M._3.SIZE_32)) ?? void 0,
                                "aria-hidden": !0,
                            }),
                            1 === a &&
                                (0, i.jsx)("span", {
                                    className: ls.ie,
                                    "aria-hidden": !0,
                                    children: (0, i.jsx)(li.CrownIcon, { size: "xxs", color: "currentColor" }),
                                }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: ls.Dc,
                        children: [
                            (0, i.jsx)(A.D, {
                                variant: "heading-sm/semibold",
                                color: "text-default",
                                lineClamp: 1,
                                children: (0, i.jsx)(L.g, {
                                    name: n.displayName,
                                    colorString: n.member?.colorString ?? null,
                                    colorStrings: n.roleColorStrings,
                                }),
                            }),
                            (0, i.jsx)(lc, { listener: r }),
                        ],
                    }),
                ],
            }),
    });
}
function ld(e, t) {
    return (0, i.jsx)(_.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: e }, t);
}
function lc(e) {
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
                ? N.intl.format(Z.default.QqaqBg, { trackTitle: l, artistName: n, highlightHook: ld })
                : N.intl.format(Z.default.ZMJ8Mt, { trackTitle: l, highlightHook: ld }),
    });
}
function lu(e) {
    let { artist: t, notched: l } = e,
        [n, a] = s.useState(!1),
        r = null != t.artist_image_hash ? tv.RQ.IMAGE(t.artist_image_hash) : null;
    return (0, i.jsx)("span", {
        className: ls.sG,
        children: (0, i.jsx)(e_.Ay, {
            mask: l ? e_.l8[24] : e_.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null == r || n
                    ? (0, i.jsx)("span", {
                          className: ls.Ql,
                          children: (0, i.jsx)(to.MicrophoneIcon, { size: "xxs", color: c.A.colors.ICON_SUBTLE }),
                      })
                    : (0, i.jsx)("img", { className: ls.v2, src: r, alt: "", loading: "lazy", onError: () => a(!0) }),
        }),
    });
}
function lo(e) {
    let { artists: t, artistCount: l } = e,
        n = t.slice(0, 3),
        s = (l ?? t.length) - n.length;
    return (0, i.jsx)("div", {
        className: ls.Rh,
        "aria-hidden": !0,
        children:
            n.length > 0 &&
            (0, i.jsxs)("div", {
                className: ls.W$,
                children: [
                    n.map((e, t) =>
                        (0, i.jsx)(
                            lu,
                            { artist: e, notched: s > 0 || t !== n.length - 1 },
                            `${e.artist_external_id}-${e.artist_image_hash}`,
                        ),
                    ),
                    s > 0 &&
                        (0, i.jsx)("span", {
                            className: ls.sG,
                            children: (0, i.jsx)(e_.Ay, {
                                mask: e_.Ay.Masks.SQUIRCLE,
                                width: 24,
                                height: 24,
                                children: (0, i.jsx)("div", {
                                    className: ls.ag,
                                    children: (0, i.jsx)(_.E, {
                                        variant: "text-xs/semibold",
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
var lm = l(897130);
function lx(e) {
    let { guildId: t, isCompact: l, data: n, upsell: a } = e,
        r = n.top_listeners,
        d = (0, y.bG)([W.default], () => W.default.getCurrentUser()?.id),
        c = r.findIndex((e) => e.user_id === d),
        u = -1 === c ? null : r[c],
        o = s.useMemo(() => r.map((e) => e.user_id), [r]);
    (0, P.k6)(t, o);
    let { scrollerRef: m, userRowRef: x, floatingRowPosition: h } = Q(),
        f = null != a,
        g = f ? null : h,
        v = null != g;
    return n.top_listeners.length < 2
        ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(t9, {}), a] })
        : (0, i.jsxs)("div", {
              className: lm.SY,
              children: [
                  (0, i.jsxs)(T.d_, {
                      className: j()(lm.p_, { [lm.w]: f }),
                      ref: m,
                      children: [
                          r.map((e, n) => {
                              let s = e.user_id === d;
                              return (0, i.jsx)(
                                  la,
                                  {
                                      guildId: t,
                                      userId: e.user_id,
                                      listener: e,
                                      rank: n + 1,
                                      isCompact: l,
                                      isCurrentUser: s,
                                      shouldDimForCurrentUser: s && v,
                                      rowRef: s ? x : void 0,
                                  },
                                  e.user_id,
                              );
                          }),
                          !f &&
                              null != d &&
                              null == u &&
                              (0, i.jsx)(la, {
                                  guildId: t,
                                  userId: d,
                                  listener: null,
                                  rank: null,
                                  isCompact: l,
                                  isCurrentUser: !0,
                                  shouldDimForCurrentUser: v,
                                  rowRef: x,
                              }),
                      ],
                  }),
                  f &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(H, { position: "bottom" }),
                              (0, i.jsx)("div", { className: lm.Kv, children: a }),
                          ],
                      }),
                  null != d &&
                      null != g &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(H, { position: g }),
                              (0, i.jsx)(K, {
                                  position: g,
                                  children: (0, i.jsx)(la, {
                                      guildId: t,
                                      userId: d,
                                      listener: u,
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
var lh = l(717683);
function lf(e) {
    let { isCompact: t } = e;
    return (0, i.jsxs)("div", {
        className: lh.qV,
        "aria-hidden": !0,
        children: [
            (0, i.jsx)("div", {
                className: j()(lh.Dk, { [lh.yI]: t }),
                children: Array.from({ length: 10 }, (e, t) =>
                    (0, i.jsxs)(
                        "div",
                        {
                            className: lh.Nr,
                            children: [
                                (0, i.jsx)("div", { className: j()(lh.om, lh.xX) }),
                                (0, i.jsxs)("div", {
                                    className: lh.Qq,
                                    children: [
                                        (0, i.jsx)("div", { className: j()(lh.om, lh.DD) }),
                                        (0, i.jsx)("div", { className: j()(lh.om, lh.VA) }),
                                    ],
                                }),
                            ],
                        },
                        t,
                    ),
                ),
            }),
            (0, i.jsxs)("div", {
                className: j()(lh.yp, { [lh.Fl]: t }),
                children: [
                    (0, i.jsx)("div", { className: j()(lh.om, lh.Pl) }),
                    (0, i.jsx)("div", { className: j()(lh.om, lh._0) }),
                ],
            }),
        ],
    });
}
var lg = l(432017),
    lj = l(362704);
function lv(e) {
    let { song: t, isSelected: l, onSelect: n, itemProps: a } = e,
        r = null != t.cover_art_hash ? tv.RQ.IMAGE(t.cover_art_hash) : null,
        d = s.useMemo(
            () => ({
                kind: "song",
                shareUrl: tv.RQ.WEB_OPEN(tv.M0.TRACK, t.track_external_id),
                title: t.track_title ?? t.track_external_id,
                subtitle: t.artist_name,
                imageUrl: r,
            }),
            [t.track_external_id, t.track_title, t.artist_name, r],
        );
    return (0, i.jsxs)("div", {
        className: tg.Nr,
        children: [
            (0, i.jsxs)("button", {
                ...a,
                type: "button",
                className: j()(tg.MT, { [tg.tY]: l }),
                "aria-pressed": l,
                onClick: () => n(t.track_external_id),
                children: [
                    (0, i.jsx)(tx.R, {
                        src: r,
                        isCircular: !1,
                        FallbackIcon: lg.T,
                        children:
                            l &&
                            (0, i.jsx)("span", {
                                className: j()(tg.Lw, tg.Kp),
                                "aria-hidden": !0,
                                children: (0, i.jsx)(lj.Y, { size: "md", color: "currentColor" }),
                            }),
                    }),
                    null != t.track_title &&
                        (0, i.jsxs)("span", {
                            className: tg.Qq,
                            children: [
                                (0, i.jsx)(_.E, {
                                    className: tg.DD,
                                    tag: "span",
                                    variant: "text-sm/semibold",
                                    color: "text-default",
                                    lineClamp: 1,
                                    children: t.track_title,
                                }),
                                null != t.artist_name &&
                                    (0, i.jsx)(_.E, {
                                        className: tg.VA,
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
            (0, i.jsx)(tj, { target: d, tabIndex: a.tabIndex }),
        ],
    });
}
var lp = l(196765),
    l_ = l(770178);
let lE = { view: "top_songs", isCompact: !1, canShowEmbed: !1, selectedTrackId: null },
    lA = (0, lp.v)(() => ({ byWidgetId: {} }));
function lN(e, t) {
    lA.setState((l) => {
        let n = l.byWidgetId[e] ?? lE;
        return { byWidgetId: { ...l.byWidgetId, [e]: { ...n, ...t } } };
    });
}
function lI(e) {
    return lA((t) => t.byWidgetId[e]?.view ?? lE.view);
}
function lb(e) {
    return lA((t) => t.byWidgetId[e]?.isCompact ?? lE.isCompact);
}
function lS(e) {
    return lA((t) => t.byWidgetId[e]?.selectedTrackId ?? lE.selectedTrackId);
}
function lC(e, t) {
    (lA.getState().byWidgetId[e] ?? lE).view !== t && lN(e, { view: t, selectedTrackId: null });
}
function ly(e) {
    return e.track_external_id;
}
function lT(e) {
    let t,
        { guildId: l, widgetId: n, isCompact: a, data: r } = e,
        d = lS(n),
        c = lA((e) => e.byWidgetId[n]?.canShowEmbed ?? lE.canShowEmbed),
        u = s.useCallback(
            (e) => {
                let t;
                return (
                    (t = lA.getState().byWidgetId[n]?.selectedTrackId ?? null),
                    void lN(n, { selectedTrackId: t === e ? null : e })
                );
            },
            [n],
        ),
        o = s.useCallback(
            (e, t) => (0, i.jsx)(lv, { song: e, isSelected: e.track_external_id === d, onSelect: u, itemProps: t }),
            [d, u],
        );
    if (0 === r.ranked_songs.length) return null;
    let m = r.ranked_songs.find((e) => e.track_external_id === d) ?? null,
        x = tT(r);
    return (0, i.jsxs)("div", {
        className: tK.U,
        children: [
            (0, i.jsx)(tP, {
                label: tz(tO.TOP_SONGS),
                items: r.ranked_songs,
                isCompact: a,
                getItemKey: ly,
                renderItem: o,
            }),
            null != m
                ? (0, i.jsx)(tL, { guildId: l, isCompact: a, canShowEmbed: c, song: m })
                : (0, i.jsx)(tM, {
                      isCompact: a,
                      headline:
                          (t = Math.round(r.listening_time_ms / et.A.Millis.MINUTE)) < 1
                              ? null
                              : N.intl.formatToPlainString(Z.default["+5b01q"], { minutes: t }),
                      detail:
                          r.distinct_listeners < 1
                              ? null
                              : N.intl.format(Z.default.AzIhRB, {
                                    count: r.distinct_listeners,
                                    trend: tC(x),
                                    countHook: tb,
                                }),
                      trend: x,
                  }),
        ],
    });
}
var lk = l(691885),
    lR = l(109765);
function lD(e) {
    let { widgetId: t } = e,
        l = lI(t),
        n = s.useMemo(() => tB.map((e) => ({ id: e, label: tz(e), value: e })), []),
        a = s.useCallback(
            (e) => {
                lC(t, e);
            },
            [t],
        );
    return (0, i.jsx)("div", {
        className: lR.L,
        children: (0, i.jsx)(lk.l, {
            selectionMode: "single",
            label: N.intl.string(Z.default.hFYyGU),
            hideLabel: !0,
            fitContent: !0,
            options: n,
            value: l,
            onSelectionChange: a,
        }),
    });
}
var lw = l(871107);
function lM(e) {
    let { title: t } = e;
    return (0, i.jsxs)("div", {
        className: lw.$,
        children: [
            (0, i.jsx)("span", {
                className: lw.K,
                children: (0, i.jsx)(lg.T, { size: "xs", color: c.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
            }),
            (0, i.jsx)(f.q, { size: "md", children: t }),
        ],
    });
}
var lL = l(77915),
    lU = l(756936);
function lG(e) {
    return e.default_title ?? N.intl.string(Z.default["5xxUI2"]);
}
var lP = l(890497),
    lO = l(734057),
    lB = l(317525),
    lW = l(576705),
    lz = l(935208),
    lF = l(44167);
l(321073);
var lH = l(485845),
    lK = l(136722),
    lY = l(435183),
    lq = l(155718),
    lQ = l(795816),
    l$ = l(933958),
    lV = l(627363),
    lX = l(712440),
    lZ = l(733110),
    lJ = l(488926),
    l0 = l(818023);
async function l1(e) {
    null == eN.A.getApplication(l0.NW) && (await (0, lV.TA)(l0.NW));
    let t = l$.Ay.getEmbeddedActivitiesForChannel(e).every((e) => e.applicationId !== l0.NW);
    return await (0, lQ.su)({ channelId: e, applicationId: l0.NW, isStart: t, renderInFramePool: !0 });
}
async function l2(e) {
    let { channel: t, selectedRoleIds: l } = e,
        n = [];
    if (l.length > 0)
        for (let e of (n.push({ id: t.guild_id, type: lq.r2.ROLE, allow: lJ.x3, deny: eK.xBc.USE_EMBEDDED_ACTIVITIES }),
        l))
            n.push({ id: e, type: lq.r2.ROLE, allow: eK.xBc.USE_EMBEDDED_ACTIVITIES, deny: lJ.x3 });
    let i = await (0, lY.RT)(t.id, { permissionOverwrites: n });
    if (!i.ok) throw i;
}
let l6 = [];
var l3 = l(344351),
    l8 = l(256693),
    l4 = l(343030),
    l7 = l(317608),
    l5 = l(953538);
let l9 = {
    [d.a.IMAGE_TEXT]: {
        View: function (e) {
            let { widget: t, guildSpaceMode: l, guildId: n } = e,
                { text: s, image_hash: a } = t.config,
                r = "edit" === l ? t.config.image : void 0,
                d = void 0 !== r ? r : null != a ? ts(n, t.id, a) : null;
            return (0, i.jsxs)("div", {
                className: tr.kL,
                children: [
                    null != d && (0, i.jsx)("img", { className: tr.Sl, src: d, alt: "" }),
                    null != s &&
                        (0, i.jsx)(_.E, {
                            variant: "text-md/normal",
                            color: "text-subtle",
                            className: tr.Qq,
                            children: s,
                        }),
                ],
            });
        },
        Edit: function (e) {
            let { widget: t, commit: l, cancel: n } = e,
                a = t.config,
                [r, c] = s.useState(a.title ?? ""),
                [u, x] = s.useState(a.text ?? ""),
                [h, f] = s.useState(a.image),
                [g, j] = s.useState(null),
                v = (0, y.bG)([tt.A], () => tt.A.getGuildId()),
                p = void 0 !== h ? h : null != a.image_hash && null != v ? ts(v, t.id, a.image_hash) : null;
            return (0, i.jsxs)(E.B, {
                gap: 16,
                children: [
                    (0, i.jsx)(e4.k, {
                        label: N.intl.string(N.t.gnwWrx),
                        value: r,
                        onChange: function (e) {
                            (j(null), c(e));
                        },
                        maxLength: 100,
                        showCharacterCount: !0,
                    }),
                    (0, i.jsx)(e6.D, {
                        label: N.intl.string(N.t.X4IxWL),
                        children: (0, i.jsxs)(E.B, {
                            gap: 16,
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            className: ta.B,
                            children: [
                                (0, i.jsxs)(E.B, {
                                    gap: 8,
                                    direction: "horizontal",
                                    children: [
                                        (0, i.jsx)(te.A, {
                                            variant: "secondary",
                                            text: N.intl.string(N.t["MsUY/S"]),
                                            onChange: function (e) {
                                                (j(null), f(e));
                                            },
                                            maxFileSizeBytes: 0xa00000,
                                            onFileSizeError: () => (0, e9.A)(0xa00000),
                                        }),
                                        null != p &&
                                            (0, i.jsx)(o.m, {
                                                text: N.intl.string(N.t.N86XcP),
                                                ariaHidden: !0,
                                                children: (0, i.jsx)(m.K, {
                                                    variant: "critical-secondary",
                                                    icon: e7.TrashIcon,
                                                    onClick: function () {
                                                        (j(null), f(null));
                                                    },
                                                    "aria-label": N.intl.string(N.t.N86XcP),
                                                }),
                                            }),
                                    ],
                                }),
                                null != p && (0, i.jsx)("img", { className: ta.V, src: p, alt: "" }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(e3.f, {
                        label: N.intl.string(N.t.COGMNC),
                        value: u,
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
                            children: (0, i.jsx)(e5.w, { type: "critical", children: g }),
                        }),
                    (0, i.jsxs)(e8.e, {
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(G.$, { variant: "secondary", text: N.intl.string(N.t["ETE/oC"]), onClick: n }),
                            (0, i.jsx)(G.$, {
                                variant: "primary",
                                text: N.intl.string(N.t["R3BPH+"]),
                                onClick: function () {
                                    let e;
                                    if (
                                        ((e = void 0 !== h ? null !== h : null != a.image_hash),
                                        0 === u.length && !e && (j(N.intl.string(Z.default.zleX9q)), 1))
                                    )
                                        return;
                                    let t = {
                                        type: d.a.IMAGE_TEXT,
                                        image_hash: a.image_hash,
                                        text: u.length > 0 ? u : null,
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
                d = ek(a, n?.status === "success" ? n.data : void 0),
                c = e0({ guildId: a, data: d, expanded: !1, column: l.position.column, enabled: "view" === r }),
                u = s.useCallback(
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
                          ? (0, i.jsx)(eq, { guildId: a, data: d, column: l.position.column })
                          : (0, i.jsx)(b, {})),
                (0, i.jsx)("div", { ref: u, children: t })
            );
        },
        Title: function (e) {
            let { widget: t, hydration: l, guildId: n } = e,
                s = ek(n, l?.status === "success" ? l.data : void 0);
            return null == s
                ? (0, i.jsx)(f.q, { children: t.default_title ?? "" })
                : (0, i.jsx)(f.q, { children: es(s) });
        },
        TitleIcon: function () {
            return (0, i.jsx)(u.TrophyIcon, { size: "xs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        },
        HeaderAccessory: function (e) {
            let { hydration: t, guildId: l } = e,
                n = ek(l, t?.status === "success" ? t.data : void 0);
            return null == n || ei(n) ? null : (0, i.jsx)(eJ, { data: n });
        },
        HeaderActions: function (e) {
            let { hydration: t, guildId: l, column: n } = e,
                s = t?.status === "success" ? t.data : void 0,
                a = ek(l, s);
            return "mini" !== er({ expanded: !1, column: n }) || (null != a && ei(a))
                ? null
                : (0, i.jsx)(o.m, {
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
                                  (h.default.track(eK.HAw.LEADERBOARD_CLICK, {
                                      location: "expand",
                                      guild_id: l,
                                      leaderboard_state: ea(a),
                                      leaderboard_view: er({ expanded: !1, column: n }),
                                      metric: ed(a.stat),
                                  }),
                                  (function (e) {
                                      let { guildId: t, data: l } = e,
                                          n = (e) => (0, i.jsx)(e2, { guildId: t, data: l, modalProps: e });
                                      (0, ec.openModalLazy)(() => Promise.resolve(n), {
                                          modalKey: "guild-space-leaderboard-expand",
                                      });
                                  })({ guildId: l, data: s }));
                          },
                      }),
                  });
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
                            lN(t, { isCompact: l < 480, canShowEmbed: l >= 560 });
                        },
                        [t],
                    )),
                    (0, l_.g)(n, a, [t], { fireOnMount: !0 }),
                    s.useEffect(
                        () => () => {
                            lA.setState((e) => {
                                if (null == e.byWidgetId[t]) return e;
                                let l = { ...e.byWidgetId };
                                return (delete l[t], { byWidgetId: l });
                            });
                        },
                        [t],
                    ),
                    n),
                x = lb(c.id),
                h = lI(c.id),
                f = lS(c.id),
                { isContributing: g, isSpotifyConnected: j, hasFetchedConsents: v } = (0, lL.MX)(d),
                p = "edit" === o,
                _ = u?.status === "success" && tW(u.data),
                E = !x && !p && !_,
                A =
                    "view" === o && v && !g
                        ? (0, i.jsx)(t2, { guildId: d, widgetName: lG(c), isCompact: x, isSpotifyConnected: j })
                        : null,
                N =
                    p || _ || u?.status !== "success" || h === tO.TOP_LISTENERS
                        ? null
                        : ((l = u.data),
                          null ==
                          (r =
                              l.ranked_songs.find((e) => e.track_external_id === f && null != e.cover_art_hash)
                                  ?.cover_art_hash ??
                              l.ranked_songs.find((e) => null != e.cover_art_hash)?.cover_art_hash)
                              ? null
                              : tv.RQ.IMAGE(r));
            return (0, i.jsxs)("div", {
                className: lU.rf,
                ref: m,
                children: [
                    null != N &&
                        (0, i.jsx)("div", {
                            className: lU.G,
                            "aria-hidden": !0,
                            children: (0, i.jsx)("img", { className: lU.LZ, src: N, alt: "" }),
                        }),
                    (0, i.jsx)("div", {
                        className: lU.Qs,
                        children: (0, i.jsx)("div", {
                            id: tH(c.id),
                            className: lU.nd,
                            role: E ? "tabpanel" : "group",
                            tabIndex: 0,
                            "aria-label": E ? void 0 : tz(h),
                            "aria-labelledby": E ? tF(c.id, h) : void 0,
                            children: (function () {
                                if (p) return (0, i.jsx)(lf, { isCompact: x });
                                if (null == u || "idle" === u.status || "loading" === u.status)
                                    return (0, i.jsx)(b, {});
                                if ("error" === u.status) return (0, i.jsx)(S, {});
                                if (_) return (0, i.jsx)(t5, {});
                                switch (h) {
                                    case tO.TOP_SONGS:
                                        return (0, i.jsx)(lT, {
                                            guildId: d,
                                            widgetId: c.id,
                                            isCompact: x,
                                            data: u.data,
                                        });
                                    case tO.TOP_ARTISTS:
                                        return (0, i.jsx)(tQ, { isCompact: x, data: u.data });
                                    case tO.TOP_LISTENERS:
                                        return (0, i.jsx)(lx, { guildId: d, isCompact: x, data: u.data, upsell: A });
                                }
                            })(),
                        }),
                    }),
                    h !== tO.TOP_LISTENERS && A,
                    (0, i.jsx)(ll, { isCompact: x }),
                ],
            });
        },
        Title: function (e) {
            let { widget: t, hydration: l, guildSpaceMode: n } = e,
                s = lG(t),
                a = l?.status === "success" && tW(l.data);
            return "edit" === n || a ? (0, i.jsx)(f.q, { size: "md", children: s }) : (0, i.jsx)(lM, { title: s });
        },
        ViewHeaderTrailing: function (e) {
            let { widget: t, hydration: l, title: n } = e,
                s = lb(t.id),
                a = lI(t.id);
            return l?.status === "success" && tW(l.data)
                ? null
                : s
                  ? (0, i.jsx)(lD, { widgetId: t.id })
                  : (0, i.jsx)(tu, {
                        label: n,
                        tabs: tB.map((e) => ({ id: e, label: tz(e) })),
                        selectedId: a,
                        panelId: tH(t.id),
                        getTabId: (e) => tF(t.id, e),
                        onSelect: (e) => lC(t.id, e),
                    });
        },
    },
    [d.a.WHITEBOARD]: {
        View: function (e) {
            let t,
                l,
                n = (0, lF.n)(),
                a = (0, y.bG)(
                    [lO.A, lW.A],
                    () => {
                        let e = null != n ? lO.A.getChannel(n) : void 0;
                        return null != e && lW.A.can(eK.xBc.USE_EMBEDDED_ACTIVITIES, e);
                    },
                    [n],
                ),
                d = (0, y.bG)(
                    [l$.Ay],
                    () => {
                        let e = l$.Ay.getCurrentEmbeddedActivity();
                        return null == e ||
                            e.applicationId !== l0.NW ||
                            e.location.kind !== l3.T.GUILD_CHANNEL ||
                            e.location.channel_id !== n
                            ? null
                            : e;
                    },
                    [n],
                ),
                c = (0, y.bG)([l$.Ay], () => l$.Ay.isLaunchingActivity(), []),
                { authResolved: u, isAuthorized: o } =
                    ((t = (0, y.bG)(
                        [lZ.default],
                        () => lZ.default.getFetchStateForApplication(l0.NW) === lZ.FetchState.FETCHED,
                        [],
                    )),
                    (l = (0, y.bG)(
                        [lZ.default, eN.A],
                        () => {
                            let e = lZ.default.getNewestTokenForApplication(l0.NW);
                            if (null == e) return !1;
                            let t = eN.A.getApplication(l0.NW),
                                l = t?.integrationTypesConfig?.[lH.b.USER_INSTALL]?.oauth2InstallParams?.scopes;
                            if (null == l) return !0;
                            let n = new Set(e.scopes);
                            return l.every((e) => n.has(e));
                        },
                        [],
                    )),
                    s.useEffect(() => {
                        (lZ.default.getFetchStateForApplication(l0.NW) === lZ.FetchState.NOT_FETCHED &&
                            lX.A.fetch([l0.NW]),
                            null == eN.A.getApplication(l0.NW) && (0, lV.TA)(l0.NW));
                    }, []),
                    { authResolved: t, isAuthorized: l }),
                m = s.useRef(!1);
            s.useEffect(() => {
                null == d && null != n && a && u && o && !m.current && ((m.current = !0), l1(n));
            }, [a, n, d, u, o]);
            let x = s.useCallback(() => {
                    null != n && ((m.current = !0), l1(n));
                }, [n]),
                h = null != n && u && !o;
            return null == n
                ? (0, i.jsx)(E.B, {
                      className: l5.kL,
                      align: "center",
                      justify: "center",
                      children: (0, i.jsx)(r, { alt: "", width: 200, height: 192 }),
                  })
                : a
                  ? (0, i.jsxs)("div", {
                        className: l5.kL,
                        children: [
                            null != d &&
                                (0, i.jsx)(l7.A, {
                                    frameId: (0, l8.Ri)(d),
                                    level: l4.A.WithinAppContent,
                                    className: l5.t$,
                                }),
                            null == d &&
                                h &&
                                (0, i.jsx)("div", {
                                    className: l5.P5,
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
                        className: l5.kL,
                        children: (0, i.jsx)("div", {
                            className: l5.m0,
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
                l = (0, y.bG)([tt.A], () => tt.A.getGuildId()),
                n = lz.default.castGuildIdAsEveryoneGuildRoleId(l),
                a = (0, lF.n)(),
                r = (0, y.bG)([lO.A], () => (null != a ? lO.A.getChannel(a) : void 0), [a]),
                d = (0, y.bG)([lW.A], () => null != r && lW.A.can(eK.xBc.MANAGE_ROLES, r), [r]),
                c = (0, y.bG)([lB.A], () => (null == l ? l6 : lB.A.getSortedRoles(l).filter((e) => e.id !== n)), [
                    l,
                    n,
                ]),
                u = s.useMemo(() => {
                    let e;
                    return null != r
                        ? null != (e = r.permissionOverwrites[r.guild_id]) &&
                          lK.zy(e.deny, eK.xBc.USE_EMBEDDED_ACTIVITIES)
                            ? c
                                  .filter((e) => {
                                      let t = r.permissionOverwrites[e.id];
                                      return null != t && lK.zy(t.allow, eK.xBc.USE_EMBEDDED_ACTIVITIES);
                                  })
                                  .map((e) => e.id)
                            : []
                        : [];
                }, [r, c]),
                [o, m] = s.useState(null),
                [x, h] = s.useState(!1),
                [f, g] = s.useState(!1),
                j = o ?? u,
                v = s.useMemo(() => c.map((e) => ({ id: e.id, label: e.name, value: e.id })), [c]);
            async function p() {
                if (null != r) {
                    (g(!1), h(!0));
                    try {
                        (await l2({ channel: r, selectedRoleIds: j }), t());
                    } catch {
                        (h(!1), g(!0));
                    }
                }
            }
            return null == r
                ? null
                : (0, i.jsxs)(E.B, {
                      gap: 16,
                      children: [
                          (0, i.jsx)(lP.Z, {
                              selectionMode: "multiple",
                              label: N.intl.string(Z.default.XXLbfv),
                              description: N.intl.string(Z.default.XrpYIG),
                              placeholder: N.intl.string(Z.default.pp6WeD),
                              options: v,
                              value: j,
                              onSelectionChange: function (e) {
                                  (g(!1), m(e));
                              },
                              disabled: !d || x,
                              fullWidth: !0,
                              wrapTags: !0,
                          }),
                          !d && (0, i.jsx)(e5.w, { type: "warning", children: N.intl.string(Z.default.UPLtlA) }),
                          f &&
                              (0, i.jsx)("div", {
                                  role: "alert",
                                  children: (0, i.jsx)(e5.w, {
                                      type: "critical",
                                      children: N.intl.string(Z.default.xyCJYs),
                                  }),
                              }),
                          (0, i.jsxs)(e8.e, {
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
                                      onClick: p,
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
