l.d(t, { m: () => lV });
var n,
    i = l(477900),
    a = l(582128);
function s(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: a, width: s = 288, height: r = 192 } = e;
    return (0, i.jsx)("img", {
        style: { width: s, height: r },
        src: "https://cdn.discordapp.com/assets/content/b501ac4c5a78c462100d3870ce7ab50a78ea7d9b2af6b8ee7a08b11bab82fb01.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: a ?? "img",
    });
}
var r = l(593673),
    d = l(661531),
    c = l(369606),
    o = l(866665),
    u = l(408278),
    m = l(26430),
    x = l(174459),
    h = l(562073),
    f = l(851612),
    g = l(503698),
    j = l.n(g),
    v = l(17928),
    p = l(364522),
    _ = l(939249),
    A = l(663417),
    E = l(834730),
    N = l(140735),
    b = l(97808),
    I = l(778712),
    S = l(297264),
    C = l(463930),
    y = l(821609),
    T = l(80682),
    R = l(287809),
    k = l(58703),
    D = l(17085),
    w = l(848966);
function M(e) {
    let { position: t } = e;
    return (0, i.jsx)("div", { className: "top" === t ? w.oT : w.yf });
}
function L(e) {
    let { position: t, children: l } = e;
    return (0, i.jsx)("div", { className: "top" === t ? w.sU : w._u, children: l });
}
var U = l(775602);
function G() {
    let [e, t] = a.useState(null),
        [l, n] = a.useState(null),
        [i, s] = a.useState("unknown"),
        r = (0, v.bG)([U.Ay], () => U.Ay.useReducedMotion);
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
var P = l(967144),
    O = l(696451),
    B = l(562153),
    W = l(61567),
    z = l(375708);
function F(e, t) {
    let { showYouSuffix: l = !1, fallbackName: n } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = (0, v.bG)([R.default], () => R.default.getUser(t), [t]),
        a = (0, v.bG)([O.Ay], () => O.Ay.getMember(e, t), [e, t]),
        s = (0, P.gn)(e, t, a?.colorStrings ?? null),
        r = B.Ay.useName(e, void 0, i),
        d = null == i && null != n ? n : r;
    return {
        user: i,
        member: a,
        roleColorStrings: s,
        name: d,
        displayName: l ? z.intl.formatToPlainString(W.default.subXXA, { name: d }) : d,
    };
}
var H = l(885386),
    K = l(927813),
    Y = l(251812),
    q = l(518782);
function Q(e) {
    return e.entries.length < 3;
}
function $(e) {
    return (0, Y.K)(Q(e) ? void 0 : e.stat).name;
}
function X(e) {
    let t;
    return Q(e)
        ? "empty_state"
        : null != (t = e.computed_at) && new Date(t).getTime() - e.week_start_ts * K.A.Millis.SECOND >= K.A.Millis.WEEK
          ? "podium"
          : "in_progress";
}
function Z(e) {
    let { expanded: t, column: l } = e;
    return t ? "expanded" : 1 === l ? "mini" : "regular";
}
function V(e) {
    switch (e) {
        case q.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            return "hours_played";
        case q.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return "days_played";
        case q.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return "unique_games_played";
        default:
            return null;
    }
}
l(754674);
var J = l(192308);
function ee(e) {
    (0, J.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([
                l.e("120239"),
                l.e("955410"),
                l.e("132502"),
                l.e("230029"),
                l.e("488926"),
                l.e("352456"),
                l.e("203112"),
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
var et = l(823353);
function el(e) {
    let { guildId: t, onActivitySharingClick: l } = e,
        n = H.tz.useSetting(),
        a = H.JG.useSetting().includes(t),
        s = !n || a;
    return (0, i.jsx)(D.Zj, {
        className: et.w,
        title: z.intl.string(W.default.ULK65a),
        body: z.intl.format(s ? W.default.ueza5l : W.default["81PK67"], { memberCount: 3 }),
        action: s
            ? (0, i.jsx)(y.$, {
                  variant: "secondary",
                  size: "sm",
                  text: z.intl.string(W.default.fMbgeZ),
                  onClick: () => {
                      (l(), ee(t));
                  },
              })
            : null,
    });
}
var en = l(342296);
function ei(e) {
    let t = Math.floor(Math.max(e, 0) / K.A.Seconds.MINUTE),
        l = Math.floor(t / K.A.Minutes.HOUR),
        n = t % K.A.Minutes.HOUR;
    return 0 === l
        ? z.intl.formatToPlainString(W.default.DdzvGL, { minutes: n })
        : z.intl.formatToPlainString(W.default["6Y8H0A"], { hours: l, minutes: n });
}
function ea(e, t) {
    switch (t) {
        case q.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return {
                primary: z.intl.formatToPlainString(z.t["k2UNz+"], { days: e.value }),
                secondary: ei(e.time_played_seconds),
            };
        case q.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return {
                primary: z.intl.formatToPlainString(W.default.rgpc8E, { count: e.value }),
                secondary: ei(e.time_played_seconds),
            };
        case q.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            let l, n, i;
            return {
                primary:
                    ((n = Math.floor((l = Math.floor(Math.max(e.value, 0) / K.A.Millis.MINUTE)) / K.A.Minutes.HOUR)),
                    (i = l % K.A.Minutes.HOUR),
                    0 === n
                        ? z.intl.formatToPlainString(W.default.bgQf2H, { minutes: i })
                        : 0 === i
                          ? z.intl.formatToPlainString(W.default["D/HToK"], { hours: n })
                          : z.intl.formatToPlainString(W.default.fvtrHn, { hours: n, minutes: i })),
            };
        default:
            return { primary: "\u2014" };
    }
}
var es = l(81466),
    er = l(406810),
    ed = l(687966),
    ec = l(109112),
    eo = l(683063),
    eu = l(573435),
    em = l(402860),
    ex = l(396583),
    eh = l(587895),
    ef = l(429913),
    eg = l(280450);
function ej(e, t) {
    return { id: e, name: z.intl.string(W.default.rhDbuQ), iconUrl: void 0, isLoading: t };
}
function ev(e, t) {
    return e.get(t) ?? ej(t, !1);
}
function ep(e, t) {
    return t.map((t) => ev(e, t));
}
function e_(e, t) {
    let l = t.user_id,
        n = (0, v.bG)([eg.default], () => eg.default.getId() === l, [l]);
    return F(e, l, { showYouSuffix: n, fallbackName: t.name });
}
var eA = l(518477),
    eE = l(870087);
function eN(e) {
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
        x = e_(t, l),
        h = l.application_ids[0],
        f = null != h ? ev(s, h) : void 0,
        g = l.user_id,
        v = a.useCallback(() => {
            (u?.(),
                (0, em.openUserProfileModal)({
                    userId: g,
                    guildId: t,
                    tabSection: eA.RP.ACTIVITY,
                    scrollTarget: eA.bk.RECENT_ACTIVITY,
                }));
        }, [u, g, t]);
    return (0, i.jsxs)("div", {
        ref: o,
        "aria-hidden": c,
        inert: c,
        className: j()(eE.nM, { [eE.Bh]: r && !c, [eE.lR]: d }),
        children: [
            (0, i.jsx)(eb, { guildId: t, entry: l, identity: x, lastPlayedGame: f, onClick: u }),
            (0, i.jsx)(eC, { entry: l, stat: n, width: m, onClick: v }),
            (0, i.jsx)(ek, {
                name: x.name,
                applicationIds: l.application_ids,
                applicationCount: l.application_count,
                games: s,
                onClick: v,
            }),
        ],
    });
}
function eb(e) {
    let { guildId: t, entry: l, identity: n, lastPlayedGame: s, onClick: r } = e,
        d = a.useRef(null),
        c = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(eI, { rank: l.rank }),
                (0, i.jsx)(b.eu, {
                    size: I._3.SIZE_32,
                    src: n.user?.getAvatarURL(t, (0, I.FT)(I._3.SIZE_32)) ?? void 0,
                    className: eE.my,
                    "aria-hidden": !0,
                }),
                (0, i.jsxs)("div", {
                    className: eE.Dc,
                    children: [
                        (0, i.jsx)(S.D, {
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            lineClamp: 1,
                            children: (0, i.jsx)(C.g, {
                                name: n.displayName,
                                colorString: n.member?.colorString ?? null,
                                colorStrings: n.roleColorStrings,
                            }),
                        }),
                        null != s &&
                            (0, i.jsx)(E.E, {
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                lineClamp: 1,
                                children: z.intl.formatToPlainString(W.default.YuNVPY, { gameName: s.name }),
                            }),
                    ],
                }),
            ],
        });
    return null == n.user
        ? (0, i.jsx)("div", { className: eE.D_, children: c })
        : (0, i.jsx)(en.A, {
              targetElementRef: d,
              user: n.user,
              guildId: t,
              children: (e) =>
                  (0, i.jsx)(_.D, {
                      ...e,
                      innerRef: d,
                      className: j()(eE.D_, eE.FB),
                      onClick: (t) => {
                          (r?.(), e.onClick(t));
                      },
                      children: c,
                  }),
          });
}
function eI(e) {
    let { rank: t } = e,
        l = z.intl.formatToPlainString(W.default.I4JiAQ, { rank: t });
    switch (t) {
        case 1:
            return (0, i.jsx)("div", {
                className: eE.Tm,
                "aria-label": l,
                children: (0, i.jsx)("div", { className: eE.Xe }),
            });
        case 2:
            return (0, i.jsx)("div", {
                className: eE.Tm,
                "aria-label": l,
                children: (0, i.jsx)("div", { className: eE.XQ }),
            });
        case 3:
            return (0, i.jsx)("div", {
                className: eE.Tm,
                "aria-label": l,
                children: (0, i.jsx)("div", { className: eE.c9 }),
            });
        default:
            return (0, i.jsxs)("div", {
                className: eE.mH,
                children: [
                    (0, i.jsx)(N.A, { children: l }),
                    (0, i.jsx)(E.E, {
                        variant: "text-sm/semibold",
                        color: "text-muted",
                        tabularNumbers: !0,
                        "aria-hidden": !0,
                        children: t,
                    }),
                ],
            });
    }
}
function eS(e) {
    let { stat: t } = e;
    switch (t) {
        case q.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return (0, i.jsx)(es.CalendarIcon, { size: "xxs", color: d.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case q.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            return (0, i.jsx)(er.ClockIcon, { size: "xxs", color: d.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case q.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return (0, i.jsx)(ed.GameControllerIcon, { size: "xxs", color: d.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        default:
            return null;
    }
}
function eC(e) {
    let { entry: t, stat: l, width: n, onClick: a } = e,
        { primary: s, secondary: r } = ea(t, l);
    return (0, i.jsxs)(_.D, {
        className: eE.TH,
        style: null != n ? { width: n } : void 0,
        "aria-label": z.intl.string(W.default.o6mBdl),
        onClick: a,
        children: [
            (0, i.jsxs)("div", {
                className: eE.bf,
                children: [
                    (0, i.jsx)(eS, { stat: l }),
                    (0, i.jsx)(E.E, { variant: "text-sm/medium", color: "text-subtle", children: s }),
                ],
            }),
            null != r && (0, i.jsx)(E.E, { variant: "text-xs/medium", color: "text-muted", children: r }),
        ],
    });
}
function ey(e) {
    let { game: t, notched: l } = e;
    return (0, i.jsx)("span", {
        className: eE.rO,
        "aria-hidden": !0,
        children: (0, i.jsx)(eu.Ay, {
            mask: l ? eu.l8[24] : eu.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null != t.iconUrl
                    ? (0, i.jsx)("img", { className: eE.Gt, src: t.iconUrl, alt: "", "aria-hidden": !0 })
                    : (0, i.jsx)("span", {
                          className: eE.ct,
                          "aria-hidden": !0,
                          children: !t.isLoading && (0, i.jsx)(ec._, { size: "xxs", color: d.A.colors.ICON_SUBTLE }),
                      }),
        }),
    });
}
function eT(e) {
    let { played: t, totalCount: l } = e,
        n = t.slice(0, 2),
        a = l - n.length;
    return (0, i.jsxs)("div", {
        className: eE.Nw,
        children: [
            n.map((e, t) => (0, i.jsx)(ey, { game: e, notched: a > 0 || t !== n.length - 1 }, `${e.id}-${t}`)),
            a > 0
                ? (0, i.jsx)("span", {
                      className: eE.rO,
                      children: (0, i.jsx)(eu.Ay, {
                          mask: eu.Ay.Masks.SQUIRCLE,
                          width: 24,
                          height: 24,
                          children: (0, i.jsx)("div", {
                              className: eE.p0,
                              children: (0, i.jsx)(E.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-subtle",
                                  children: z.intl.formatToPlainString(W.default.JiMMEd, { count: a }),
                              }),
                          }),
                      }),
                  })
                : null,
        ],
    });
}
function eR(e) {
    let { played: t, totalCount: l, children: n } = e;
    return (0, i.jsx)(eo.u, {
        body:
            0 === t.length
                ? z.intl.string(W.default["7CrlYb"])
                : 1 === t.length
                  ? z.intl.formatToPlainString(W.default.dbNpK0, { firstGame: t[0].name })
                  : 2 === t.length && 2 === l
                    ? z.intl.formatToPlainString(W.default.tqVg4M, { firstGame: t[0].name, secondGame: t[1].name })
                    : z.intl.formatToPlainString(W.default.bxcrSz, {
                          firstGame: t[0].name,
                          secondGame: t[1].name,
                          otherCount: l - 2,
                      }),
        asset: t.length > 0 ? (0, i.jsx)(eT, { played: t, totalCount: t.length }) : void 0,
        assetSize: t.length > 1 ? 43 : 24,
        children: n,
    });
}
function ek(e) {
    let { name: t, applicationIds: l, applicationCount: n, games: a, onClick: s } = e,
        r = ep(a, l);
    return (0, i.jsx)("div", {
        className: eE.ag,
        children: (0, i.jsx)(eR, {
            played: r,
            totalCount: n,
            children: (0, i.jsx)(_.D, {
                className: j()(eE.Nw, eE.Dz),
                "aria-label": z.intl.formatToPlainString(W.default.o6mBdl, { name: t }),
                onClick: s,
                children: (0, i.jsx)(eT, { played: r, totalCount: n }),
            }),
        }),
    });
}
var eD = l(189043);
function ew(e) {
    let { guildId: t, entries: l, stat: n, games: a, currentUserEntry: s, currentUserPillarRef: r, onClick: d } = e,
        c = {
            1: { column: eD.HC, pillar: eD.P5 },
            2: { column: eD.th, pillar: eD.Vk },
            3: { column: eD.Ou, pillar: eD.el },
        };
    return (0, i.jsx)("div", {
        className: eD.pI,
        role: "list",
        "aria-label": z.intl.string(W.default.wKXLfQ),
        children: l.map((e, l) =>
            (0, i.jsx)(
                eM,
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
function eM(e) {
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
        x = ep(c, l.application_ids),
        h = e_(t, l),
        { primary: f } = ea(l, d),
        g = 1 === n ? I._3.SIZE_48 : I._3.SIZE_40,
        v = a.useRef(null),
        p = j()(eD.dR, { [eD.m$]: 1 === n, [eD.wd]: 2 === n, [eD.p0]: 3 === n }),
        A = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: eD.R3,
                    children: [
                        (0, i.jsx)(b.eu, {
                            size: g,
                            src: h.user?.getAvatarURL(t, (0, I.FT)(g)) ?? void 0,
                            "aria-hidden": !0,
                        }),
                        (0, i.jsx)("div", { className: p }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: j()(eD.DX, r),
                    children: [
                        (0, i.jsx)(S.D, {
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            lineClamp: 1,
                            className: eD.IY,
                            children: (0, i.jsx)(C.g, {
                                name: h.displayName,
                                colorString: h.member?.colorString ?? null,
                                colorStrings: h.roleColorStrings,
                            }),
                        }),
                        (0, i.jsx)(eR, {
                            played: x,
                            totalCount: l.application_count,
                            children: (0, i.jsx)(E.E, {
                                variant: "text-xs/medium",
                                color: "text-default",
                                tabularNumbers: !0,
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
                ? (0, i.jsx)(en.A, {
                      targetElementRef: v,
                      user: h.user,
                      guildId: t,
                      children: (e) =>
                          (0, i.jsx)(_.D, {
                              ...e,
                              className: eD.fs,
                              innerRef: v,
                              onClick: (t) => {
                                  (m?.(), e.onClick(t));
                              },
                              children: A,
                          }),
                  })
                : (0, i.jsx)("div", { className: eD.fs, children: A }),
    });
}
var eL = l(652215),
    eU = l(219047);
function eG(e) {
    let t,
        l,
        n,
        { guildId: s, data: r, inModal: d = !1, column: c } = e,
        { stat: o, entries: u } = r,
        m = (0, v.bG)([R.default], () => R.default.getCurrentUser()?.id),
        h = a.useMemo(() => u.find((e) => e.user_id === m), [u, m]),
        g = a.useMemo(() => {
            let e = u.slice(0, 20);
            return null == h || e.includes(h) ? e : [...e, h];
        }, [u, h]),
        A = a.useMemo(() => Array.from(new Set(g.map((e) => e.user_id))), [g]);
    (0, T.k6)(s, A);
    let E =
            ((t = a.useMemo(() => Array.from(new Set(g.flatMap((e) => e.application_ids))), [g])),
            (l = (0, ef.A)(t)),
            (n = (0, v.yK)([eh.A], () => t.map((e) => eh.A.didFetchingApplicationFail(e)))),
            a.useMemo(() => {
                let e = new Map();
                return (
                    t.forEach((t, i) => {
                        let a = l[i];
                        e.set(
                            t,
                            null != a
                                ? { id: t, name: a.name, iconUrl: a.getIconURL(64) ?? void 0, isLoading: !1 }
                                : ej(t, !n[i]),
                        );
                    }),
                    e
                );
            }, [t, l, n])),
        N = Q(r),
        b = X(r),
        I = "podium" === b,
        S = Z({ expanded: d, column: c }),
        { scrollerRef: C, scrollerNode: y, userRowRef: k, floatingRowPosition: D, scrollToUserRow: w } = G(),
        U = V(o);
    !(function (e) {
        let {
                guildId: t,
                leaderboardLength: l,
                leaderboardState: n,
                leaderboardView: i,
                metric: s,
                scrollerNode: r,
                isEmpty: d,
            } = e,
            c = a.useRef(null),
            o = `${t}:${l}:${n}:${i}:${s}`,
            u = a.useCallback(() => {
                c.current !== o &&
                    ((c.current = o),
                    x.default.track(eL.HAw.LEADERBOARD_END_IMPRESSION, {
                        guild_id: t,
                        leaderboard_length: l,
                        leaderboard_state: n,
                        leaderboard_view: i,
                        metric: s,
                    }));
            }, [t, o, l, n, i, s]);
        a.useEffect(() => {
            if (d) return void u();
            if (null == r) return;
            function e() {
                0 !== r.clientHeight && r.scrollHeight - r.scrollTop - r.clientHeight <= 1 && u();
            }
            (e(), r.addEventListener("scroll", e, { passive: !0 }));
            let t = new ResizeObserver(e);
            return (
                t.observe(r),
                () => {
                    (r.removeEventListener("scroll", e), t.disconnect());
                }
            );
        }, [d, r, u]);
    })({
        guildId: s,
        leaderboardLength: N ? 0 : g.length,
        leaderboardState: b,
        leaderboardView: S,
        metric: U,
        scrollerNode: N ? null : y,
        isEmpty: N,
    });
    let P = null != D,
        O = a.useMemo(() => (I ? g.slice(3) : g), [I, g]),
        B = a.useMemo(() => {
            let e = null == h || O.includes(h) ? O : [...O, h];
            return e.length > 0 ? e : g;
        }, [O, h, g]),
        { metricMeasureRef: F, metricWidth: H } = (function () {
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
        K = a.useCallback(
            (e) => {
                x.default.track(eL.HAw.LEADERBOARD_CLICK, {
                    location: e,
                    guild_id: s,
                    leaderboard_state: b,
                    leaderboard_view: S,
                    metric: U,
                });
            },
            [s, b, S, U],
        ),
        Y = null == h && null != m,
        q = a.useCallback(
            (e) => {
                let t = e === h;
                return (0, i.jsx)(
                    eN,
                    {
                        guildId: s,
                        entry: e,
                        stat: o,
                        games: E,
                        isCurrentUser: t,
                        shouldDimForCurrentUser: t && P,
                        rowRef: t ? k : void 0,
                        onClick: () => K("row"),
                        metricWidth: H ?? void 0,
                    },
                    `${e.rank}-${e.user_id}`,
                );
            },
            [P, h, E, s, o, k, K, H],
        );
    if (N)
        return (0, i.jsx)("div", {
            className: eU.Cm,
            children: (0, i.jsx)(el, { guildId: s, onActivitySharingClick: () => K("activity_sharing") }),
        });
    let $ = [g[0], g[1], g[2]],
        J = (0, i.jsx)("div", {
            ref: F,
            className: eU.V$,
            "aria-hidden": !0,
            children: B.map((e) => (0, i.jsx)(eC, { entry: e, stat: o }, e.user_id)),
        });
    return null == H
        ? (0, i.jsxs)("div", { className: eU.rf, children: [J, (0, i.jsx)(f.eU, {})] })
        : (0, i.jsxs)("div", {
              className: eU.rf,
              children: [
                  J,
                  (0, i.jsxs)("div", {
                      className: eU.SY,
                      children: [
                          (0, i.jsxs)(p.d_, {
                              className: j()(eU.p_, { [eU.zE]: d, [eU.Ng]: Y }),
                              ref: C,
                              children: [
                                  I &&
                                      (0, i.jsx)(ew, {
                                          guildId: s,
                                          entries: $,
                                          stat: o,
                                          games: E,
                                          currentUserEntry: h,
                                          currentUserPillarRef: k,
                                          onClick: () => K("podium"),
                                      }),
                                  O.map(q),
                              ],
                          }),
                          (null != h && null != D) || Y
                              ? (0, i.jsx)(M, { position: "top" !== D || Y ? "bottom" : "top" })
                              : null,
                          null != h &&
                              null != D &&
                              (0, i.jsx)(L, {
                                  position: D,
                                  children: (0, i.jsx)(_.D, {
                                      className: eU.Po,
                                      "aria-label": z.intl.string(W.default.d0Z8kd),
                                      onClick: w,
                                      children: (0, i.jsx)(eN, {
                                          guildId: s,
                                          entry: h,
                                          stat: o,
                                          games: E,
                                          isCurrentUser: !0,
                                          shouldDimForCurrentUser: !1,
                                          isFloating: !0,
                                          onClick: () => K("row"),
                                          metricWidth: H ?? void 0,
                                      }),
                                  }),
                              }),
                          Y && (0, i.jsx)(eO, { guildId: s, onActivitySharingClick: () => K("activity_sharing") }),
                      ],
                  }),
                  (0, i.jsx)(eP, { computedAt: r.computed_at, inModal: d }),
              ],
          });
}
function eP(e) {
    let { computedAt: t, inModal: l } = e,
        n = (0, i.jsxs)("div", {
            className: eU.z8,
            children: [
                (0, i.jsx)(A.RefreshIcon, { size: "xxs", color: d.A.colors.ICON_SUBTLE, "aria-hidden": !0 }),
                (0, i.jsx)(E.E, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: z.intl.string(W.default["/nma+a"]),
                }),
            ],
        });
    return null == t
        ? (0, i.jsx)("div", { className: eU.qr, children: n })
        : (0, i.jsx)("div", {
              className: j()(eU.qr, { [eU.zE]: l }),
              tabIndex: 0,
              children: (0, i.jsx)(o.m, {
                  text: z.intl.formatToPlainString(W.default["1bt50t"], { timestamp: (0, k.mk)(new Date(t)) }),
                  position: "bottom",
                  children: n,
              }),
          });
}
function eO(e) {
    let { guildId: t, onActivitySharingClick: l } = e,
        { isSharingActivity: n, isSharingActivityInGuild: a, hasPersonalizationConsent: s } = (0, D.T4)(t),
        r = z.intl.string(W.default.toxuHd),
        d = !1;
    ((n && a) || ((r = z.intl.string(W.default["8y885d"])), (d = !0)),
        s || ((r = z.intl.string(W.default.mTARYx)), (d = !0)));
    let {
        user: c,
        member: o,
        name: u,
        roleColorStrings: m,
    } = F(
        t,
        (0, v.bG)([R.default], () => R.default.getCurrentUser()?.id ?? ""),
    );
    return null == c
        ? null
        : (0, i.jsxs)("div", {
              className: eU.Xx,
              children: [
                  (0, i.jsxs)("div", {
                      className: eU.kd,
                      children: [
                          (0, i.jsxs)("div", {
                              className: eU.nk,
                              children: [
                                  (0, i.jsx)(N.A, { children: z.intl.string(W.default["oHdW+u"]) }),
                                  (0, i.jsx)(E.E, {
                                      variant: "text-sm/semibold",
                                      color: "text-muted",
                                      "aria-hidden": !0,
                                      children: "?",
                                  }),
                              ],
                          }),
                          (0, i.jsx)(b.eu, {
                              size: I._3.SIZE_32,
                              src: c.getAvatarURL(t, (0, I.FT)(I._3.SIZE_32)) ?? void 0,
                              className: eU.SA,
                              "aria-hidden": !0,
                          }),
                          (0, i.jsxs)("div", {
                              className: eU.ko,
                              children: [
                                  (0, i.jsx)(S.D, {
                                      variant: "heading-sm/semibold",
                                      color: "text-default",
                                      lineClamp: 1,
                                      children: (0, i.jsx)(C.g, {
                                          name: u,
                                          colorString: o?.colorString ?? null,
                                          colorStrings: m,
                                      }),
                                  }),
                                  (0, i.jsx)("div", {
                                      className: eU.LF,
                                      children: (0, i.jsx)(E.E, {
                                          variant: "text-xs/medium",
                                          color: "text-subtle",
                                          children: r,
                                      }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  d &&
                      (0, i.jsx)("div", {
                          className: eU.rl,
                          children: (0, i.jsx)(y.$, {
                              variant: "secondary",
                              size: "sm",
                              text: z.intl.string(W.default.fMbgeZ),
                              onClick: () => {
                                  (l(), ee(t));
                              },
                          }),
                      }),
              ],
          });
}
var eB = l(224640),
    eW = l(20742),
    ez = l(515746);
function eF(e) {
    let { data: t } = e,
        l = (0, Y.K)(t.stat),
        {
            ended: n,
            endDate: s,
            badgeLabel: r,
        } = (function (e) {
            let t = (e + K.A.Seconds.WEEK) * K.A.Millis.SECOND,
                [l, n] = a.useState(() => Date.now()),
                i = t - l,
                s = i <= 0,
                r = i - (Math.ceil(i / K.A.Millis.DAY) - 1) * K.A.Millis.DAY;
            return (
                (0, ex.A)(() => n(Date.now()), s ? null : r),
                a.useMemo(
                    () => ({
                        ended: s,
                        endDate: new Date(t),
                        badgeLabel: s
                            ? z.intl.string(W.default["J8r/7L"])
                            : z.intl.formatToPlainString(W.default["PuaR+2"], { days: Math.ceil(i / K.A.Millis.DAY) }),
                    }),
                    [s, t, i],
                )
            );
        })(t.week_start_ts),
        d = H.PZ.useSetting(),
        c = 2 > (0, k.m_)(s, new Date()) ? (0, k.mk)(s, !1, d) : (0, k.i$)(s, "L LT", d),
        o = n
            ? z.intl.format(W.default.kG9XmM, { endedAt: c, nextStatName: (0, Y.K)(t.next_stat).name })
            : z.intl.format(W.default["X+VLqi"], { statQuestion: l.question, endsAt: c });
    return (0, i.jsx)(eo.u, {
        title: l.name,
        body: o,
        position: "top",
        children: (0, i.jsx)("div", {
            className: ez.q,
            tabIndex: 0,
            children: (0, i.jsx)(E.E, {
                variant: "text-xs/semibold",
                color: n ? "text-muted" : "text-brand",
                children: r,
            }),
        }),
    });
}
function eH(e) {
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
            x.default.track(
                eL.HAw.LEADERBOARD_HOVER,
                {
                    guild_id: n.guildId,
                    duration: Math.round(l) / 1e3,
                    leaderboard_state: X(n.data),
                    leaderboard_view: Z({ expanded: n.expanded, column: n.column }),
                    metric: V(n.data.stat),
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
var eK = l(460614);
function eY(e) {
    let { guildId: t, data: l, modalProps: n } = e,
        a = eH({ guildId: t, data: l, expanded: !0 });
    return (0, i.jsx)(eB.d, {
        size: "lg",
        "aria-label": $(l),
        ...n,
        children: (0, i.jsxs)("div", {
            ref: a,
            children: [
                (0, i.jsxs)("div", {
                    className: eK.wx,
                    children: [
                        (0, i.jsxs)("div", {
                            className: eK.LD,
                            children: [
                                (0, i.jsx)(c.TrophyIcon, {
                                    size: "xs",
                                    color: d.A.colors.ICON_SUBTLE,
                                    "aria-hidden": !0,
                                }),
                                (0, i.jsx)(S.D, { variant: "heading-sm/medium", className: eK.DD, children: $(l) }),
                                (0, i.jsx)(eF, { data: l }),
                            ],
                        }),
                        (0, i.jsx)(eW.s_, {}),
                    ],
                }),
                (0, i.jsx)("div", { className: eK.rf, children: (0, i.jsx)(eG, { guildId: t, data: l, inModal: !0 }) }),
            ],
        }),
    });
}
var eq = l(331322),
    eQ = l(452027),
    e$ = l(103557),
    eX = l(825484),
    eZ = l(95477),
    eV = l(241326),
    eJ = l(683071),
    e0 = l(2553),
    e1 = l(405810),
    e2 = l(967198),
    e3 = l(488428),
    e6 = l(776231);
let e8 = (0, l(676279).cy)();
function e7(e, t, l) {
    let n = l.startsWith("a_"),
        i = n ? (e8 ? "webp" : "gif") : e8 ? "webp" : "jpg",
        { CDN_HOST: a, API_ENDPOINT: s } = window.GLOBAL_ENV,
        r = eL.Rsh.GUILD_SPACE_IMAGE_TEXT_WIDGET_IMAGE(e, t, l, i),
        d = null != a ? `https://${a}${r}` : location.protocol + s + r,
        c = { size: (0, e6.kr)(500 * (0, e6.mZ)()) };
    return (
        "jpg" === i && (c.quality = "lossless"), "webp" === i && n && (c.animated = !0), (d += `?${e3.stringify(c)}`)
    );
}
var e4 = l(868602),
    e5 = l(445187),
    e9 = l(299285),
    te = l(831544),
    tt = l(28863),
    tl = l(148166),
    tn = l(427209),
    ti = l(294454),
    ta = l(605810);
function ts(e) {
    let { target: t, tabIndex: n } = e;
    return (0, i.jsx)("div", {
        className: ta.ql,
        children: (0, i.jsx)(o.m, {
            text: z.intl.string(z.t.RDE0Sc),
            ariaHidden: !0,
            children: (0, i.jsx)(u.K, {
                icon: tn.A,
                size: "sm",
                variant: "overlay-secondary",
                tabIndex: n,
                "aria-label": z.intl.string(z.t.Ej3B3Y),
                onClick: () => {
                    (0, J.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([
                                l.e("325522"),
                                l.e("401317"),
                                l.e("790340"),
                                l.e("147119"),
                                l.e("425292"),
                                l.e("209994"),
                                l.e("571702"),
                                l.e("552653"),
                                l.e("311580"),
                                l.e("174554"),
                                l.e("116815"),
                                l.e("82389"),
                                l.e("132502"),
                                l.e("230029"),
                                l.e("891089"),
                                l.e("196063"),
                                l.e("392028"),
                                l.e("124054"),
                                l.e("441674"),
                                l.e("152862"),
                                l.e("148326"),
                                l.e("148729"),
                                l.e("650195"),
                                l.e("67702"),
                                l.e("702154"),
                                l.e("85427"),
                                l.e("247917"),
                                l.e("400088"),
                                l.e("35328"),
                                l.e("915170"),
                                l.e("296956"),
                                l.e("629972"),
                                l.e("334168"),
                                l.e("582012"),
                                l.e("495296"),
                                l.e("611585"),
                                l.e("234017"),
                                l.e("608500"),
                                l.e("201074"),
                                l.e("879641"),
                                l.e("590600"),
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
                                l.e("227652"),
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
                                l.e("751251"),
                                l.e("200075"),
                                l.e("896995"),
                                l.e("385663"),
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
                                l.e("524434"),
                                l.e("90343"),
                                l.e("866475"),
                                l.e("56347"),
                                l.e("424199"),
                                l.e("247932"),
                                l.e("587618"),
                                l.e("645499"),
                                l.e("342551"),
                                l.e("888326"),
                                l.e("695765"),
                                l.e("777489"),
                                l.e("188941"),
                                l.e("481647"),
                                l.e("264236"),
                                l.e("776602"),
                                l.e("349619"),
                                l.e("543039"),
                                l.e("140402"),
                                l.e("244560"),
                                l.e("398125"),
                                l.e("221825"),
                                l.e("930758"),
                                l.e("266900"),
                                l.e("948804"),
                                l.e("593600"),
                                l.e("695445"),
                                l.e("707826"),
                                l.e("721690"),
                                l.e("199999"),
                                l.e("890027"),
                                l.e("536200"),
                                l.e("183776"),
                                l.e("611523"),
                                l.e("136022"),
                                l.e("776195"),
                                l.e("832817"),
                                l.e("425544"),
                                l.e("416143"),
                                l.e("844695"),
                                l.e("592028"),
                                l.e("809915"),
                                l.e("662174"),
                                l.e("425906"),
                                l.e("234236"),
                                l.e("87306"),
                                l.e("92124"),
                                l.e("361626"),
                                l.e("123216"),
                                l.e("428296"),
                                l.e("747017"),
                                l.e("165595"),
                                l.e("445124"),
                                l.e("445421"),
                                l.e("988077"),
                                l.e("401518"),
                                l.e("832823"),
                                l.e("776750"),
                                l.e("761935"),
                                l.e("511527"),
                                l.e("763070"),
                                l.e("147786"),
                                l.e("381933"),
                                l.e("502018"),
                                l.e("561216"),
                                l.e("854461"),
                                l.e("249366"),
                                l.e("728633"),
                                l.e("313681"),
                                l.e("628439"),
                                l.e("631608"),
                                l.e("343550"),
                                l.e("552712"),
                                l.e("829177"),
                                l.e("225990"),
                                l.e("539620"),
                                l.e("106943"),
                                l.e("133902"),
                                l.e("232551"),
                                l.e("756148"),
                                l.e("485393"),
                                l.e("892340"),
                                l.e("14962"),
                                l.e("123353"),
                                l.e("401590"),
                                l.e("482861"),
                                l.e("498215"),
                                l.e("588940"),
                                l.e("252264"),
                                l.e("960478"),
                                l.e("770697"),
                                l.e("561279"),
                                l.e("894747"),
                                l.e("790244"),
                                l.e("593176"),
                                l.e("836545"),
                                l.e("273232"),
                                l.e("784041"),
                                l.e("466322"),
                                l.e("858514"),
                                l.e("344265"),
                                l.e("121435"),
                                l.e("592731"),
                                l.e("53374"),
                                l.e("170653"),
                                l.e("869546"),
                                l.e("124060"),
                                l.e("240511"),
                                l.e("718573"),
                                l.e("784103"),
                                l.e("146566"),
                                l.e("317225"),
                                l.e("444376"),
                                l.e("346102"),
                                l.e("486792"),
                                l.e("463095"),
                                l.e("696123"),
                                l.e("537894"),
                                l.e("198323"),
                                l.e("548974"),
                                l.e("799657"),
                                l.e("810034"),
                                l.e("843719"),
                                l.e("238412"),
                                l.e("817852"),
                                l.e("831145"),
                                l.e("556967"),
                                l.e("643612"),
                                l.e("187856"),
                                l.e("577084"),
                                l.e("332470"),
                                l.e("334127"),
                                l.e("193158"),
                                l.e("318546"),
                                l.e("400954"),
                                l.e("610449"),
                                l.e("32781"),
                                l.e("41991"),
                                l.e("8563"),
                                l.e("499941"),
                                l.e("693832"),
                                l.e("773192"),
                                l.e("710638"),
                                l.e("959669"),
                                l.e("73500"),
                                l.e("912773"),
                                l.e("418943"),
                                l.e("959134"),
                                l.e("377766"),
                                l.e("565065"),
                                l.e("834386"),
                                l.e("4780"),
                                l.e("757598"),
                                l.e("130674"),
                                l.e("124006"),
                                l.e("371482"),
                                l.e("662355"),
                                l.e("126780"),
                                l.e("455924"),
                                l.e("844780"),
                                l.e("360781"),
                                l.e("872648"),
                                l.e("631825"),
                                l.e("784727"),
                                l.e("851243"),
                                l.e("220518"),
                                l.e("278424"),
                                l.e("237834"),
                                l.e("807771"),
                                l.e("478476"),
                                l.e("496715"),
                                l.e("622825"),
                                l.e("681541"),
                                l.e("406357"),
                                l.e("616592"),
                                l.e("115754"),
                                l.e("680986"),
                                l.e("600330"),
                                l.e("982699"),
                                l.e("250478"),
                                l.e("177104"),
                                l.e("88160"),
                                l.e("90373"),
                                l.e("863076"),
                                l.e("462276"),
                                l.e("293697"),
                                l.e("568980"),
                                l.e("979630"),
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
                        { stackingBehavior: "stack", modalKey: ti.aU },
                    );
                },
            }),
        }),
    });
}
var tr = l(272984);
function td(e) {
    let { artist: t, itemProps: l } = e,
        n = null != t.artist_image_hash ? tr.RQ.IMAGE(t.artist_image_hash) : null,
        s = a.useMemo(
            () => ({
                kind: "artist",
                shareUrl: tr.RQ.WEB_OPEN(tr.M0.ARTIST, t.artist_external_id),
                title: t.artist_name ?? t.artist_external_id,
                subtitle: null,
                imageUrl: n,
            }),
            [t.artist_external_id, t.artist_name, n],
        ),
        r = (0, i.jsx)(tl.R, { src: n, isCircular: !0, FallbackIcon: te.MicrophoneIcon });
    return null == t.artist_name
        ? (0, i.jsx)("div", { className: ta.Nr, children: (0, i.jsx)("div", { ...l, className: ta.MT, children: r }) })
        : (0, i.jsxs)("div", {
              className: ta.Nr,
              children: [
                  (0, i.jsxs)(tt.Anchor, {
                      ...l,
                      className: ta.MT,
                      href: s.shareUrl,
                      useDefaultUnderlineStyles: !1,
                      children: [
                          r,
                          (0, i.jsx)("span", {
                              className: ta.Qq,
                              children: (0, i.jsx)(E.E, {
                                  className: ta.DD,
                                  tag: "span",
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  lineClamp: 2,
                                  children: t.artist_name,
                              }),
                          }),
                      ],
                  }),
                  (0, i.jsx)(ts, { target: s, tabIndex: l.tabIndex }),
              ],
          });
}
var tc = l(872351),
    to = l(708988),
    tu = l(104171),
    tm = l(628137);
let tx = "none",
    th = (e, t) => (0, i.jsx)(E.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: e }, t);
function tf(e) {
    return e;
}
function tg(e) {
    return e?.direction ?? tx;
}
function tj(e) {
    if (null == e) return null;
    let t = Math.round(Math.abs(e));
    return 0 === t
        ? null
        : { direction: e > 0 ? "up" : "down", label: z.intl.formatToPlainString(W.default["h+LUpk"], { percent: t }) };
}
function tv(e) {
    return tj(null != e.plays_trend_pct ? 100 * e.plays_trend_pct : null);
}
var tp = l(633099);
function t_(e) {
    let { trend: t } = e,
        l = "up" === t.direction ? tc.z : to.M;
    return (0, i.jsxs)("span", {
        className: tp.GW,
        children: [
            (0, i.jsx)(l, {
                className: j()({ [tp.$J]: "up" === t.direction, [tp.KW]: "down" === t.direction }),
                size: "xxs",
                color: "currentColor",
                "aria-hidden": !0,
            }),
            (0, i.jsx)(E.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: t.label }),
        ],
    });
}
function tA(e) {
    var t;
    let { guildId: l, song: n } = e,
        s = a.useMemo(() => (n.facepile_user_ids ?? []).slice(0, 3), [n.facepile_user_ids]);
    (0, T.k6)(l, s);
    let r = (0, v.yK)([R.default], () => s.map((e) => R.default.getUser(e)), [s]),
        d = a.useMemo(() => r.filter((e) => null != e), [r]);
    if (0 === d.length) return null;
    let c = n.unique_listeners - d.length;
    return (0, i.jsx)("span", {
        className: tp.WM,
        role: "group",
        "aria-label":
            ((t = n.unique_listeners),
            z.intl.formatToPlainString(W.default.AzIhRB, { count: t, trend: tx, countHook: tf })),
        children: (0, i.jsx)(tu.Ay, {
            users: d,
            guildId: l,
            size: tu.DN.SIZE_24,
            max: d.length,
            count: n.unique_listeners,
            hideMoreUsers: c <= 0,
            renderMoreUsers: () =>
                (0, i.jsx)("span", {
                    className: tp.ju,
                    children: (0, i.jsx)(E.E, {
                        tag: "span",
                        variant: "text-sm/semibold",
                        color: "text-subtle",
                        children: z.intl.formatToPlainString(W.default.bFIg0R, { count: c }),
                    }),
                }),
        }),
    });
}
function tE(e) {
    let { isCompact: t, headline: l, detail: n, trend: a } = e;
    return null == l && null == n && null == a
        ? null
        : (0, i.jsx)("div", {
              className: j()(tp.yp, { [tp.Fl]: t }),
              children: (0, i.jsxs)("div", {
                  className: tp.QD,
                  children: [
                      null != l &&
                          (0, i.jsx)(E.E, {
                              tag: "div",
                              variant: "heading-xl/semibold",
                              color: "text-default",
                              children: l,
                          }),
                      (0, i.jsxs)("div", {
                          className: tp._0,
                          children: [
                              null != n &&
                                  (0, i.jsx)(E.E, {
                                      tag: "span",
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: n,
                                  }),
                              null != a && (0, i.jsx)(t_, { trend: a }),
                          ],
                      }),
                  ],
              }),
          });
}
function tN(e) {
    var t;
    let { guildId: l, isCompact: n, canShowEmbed: a, song: s } = e,
        r = tj(s.plays_change_percent);
    return (0, i.jsxs)("div", {
        className: j()(tp.yp, { [tp.Fl]: n }),
        children: [
            a && (0, i.jsx)(tm.A, { className: tp.aF, resourceType: tr.M0.TRACK, resourceId: s.track_external_id }),
            (0, i.jsxs)("div", {
                className: j()(tp.QD, tp.rk),
                children: [
                    (0, i.jsx)(tA, { guildId: l, song: s }),
                    (0, i.jsxs)("div", {
                        className: tp._0,
                        children: [
                            (0, i.jsx)(E.E, {
                                tag: "span",
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                children:
                                    ((t = s.plays),
                                    z.intl.format(W.default["7hHUIS"], { count: t, trend: tg(r), countHook: th })),
                            }),
                            null != r && (0, i.jsx)(t_, { trend: r }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var tb = l(197935),
    tI = l(915734);
function tS(e) {
    let { label: t, items: l, isCompact: n, getItemKey: a, renderItem: s } = e;
    return (0, i.jsx)("div", {
        className: j()(tI.Dk, { [tI.yI]: n }),
        children: (0, i.jsx)(tb.A, {
            items: l,
            getItemKey: a,
            renderItem: s,
            gap: 8,
            edgeFade: 40,
            actionsClassName: tI.o1,
            "aria-label": t,
        }),
    });
}
var tC = (((n = {}).TOP_SONGS = "top_songs"), (n.TOP_ARTISTS = "top_artists"), (n.TOP_LISTENERS = "top_listeners"), n);
let ty = ["top_songs", "top_artists", "top_listeners"];
function tT(e) {
    return 1 > e.ranked_songs.reduce((e, t) => e + t.plays, 0);
}
function tR(e) {
    switch (e) {
        case "top_songs":
            return z.intl.string(W.default.KgeEtx);
        case "top_artists":
            return z.intl.string(W.default.RYxWTS);
        case "top_listeners":
            return z.intl.string(W.default.KO73KB);
    }
}
function tk(e, t) {
    return `popular-music-tab-${e}-${t}`;
}
function tD(e) {
    return `popular-music-panel-${e}`;
}
var tw = l(742452);
function tM(e) {
    return e.artist_external_id;
}
function tL(e, t) {
    return (0, i.jsx)(td, { artist: e, itemProps: t });
}
function tU(e) {
    let { isCompact: t, data: l } = e;
    if (0 === l.ranked_artists.length) return null;
    let n = tv(l);
    return (0, i.jsxs)("div", {
        className: tw.U,
        children: [
            (0, i.jsx)(tS, {
                label: tR(tC.TOP_ARTISTS),
                items: l.ranked_artists,
                isCompact: t,
                getItemKey: tM,
                renderItem: tL,
            }),
            (0, i.jsx)(tE, {
                isCompact: t,
                headline:
                    l.distinct_songs < 1
                        ? null
                        : z.intl.formatToPlainString(W.default.W8etVA, { count: l.distinct_songs }),
                detail:
                    l.distinct_listeners < 1 || l.distinct_artists < 1
                        ? null
                        : z.intl.format(W.default.yGqf0D, {
                              memberCount: l.distinct_listeners,
                              artistCount: l.distinct_artists,
                              trend: tg(n),
                              memberCountHook: th,
                              artistCountHook: th,
                          }),
                trend: n,
            }),
        ],
    });
}
var tG = l(803613),
    tP = l(682348),
    tO = l(73152),
    tB = l(57129),
    tW = l(280911);
function tz(e) {
    let { guildId: t, isCompact: l } = e,
        n = (0, v.bG)([R.default], () => R.default.getCurrentUser()),
        a = (0, v.bG)([O.Ay], () => (null != n ? O.Ay.getMember(t, n.id) : null)),
        s = (0, P.gn)(t, n?.id, a?.colorStrings ?? null),
        r = B.Ay.useName(t, void 0, n);
    return (0, i.jsxs)("div", {
        className: tW.D_,
        children: [
            (0, i.jsxs)("div", {
                className: tW.FI,
                "aria-hidden": !0,
                children: [
                    !l &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("span", { className: tW.eu, children: (0, i.jsx)(tG.D, { size: "sm" }) }),
                                (0, i.jsxs)("span", {
                                    className: tW.r$,
                                    children: [
                                        (0, i.jsx)("span", { className: tW.Om }),
                                        (0, i.jsx)("span", { className: tW.Om }),
                                        (0, i.jsx)("span", { className: tW.Om }),
                                    ],
                                }),
                            ],
                        }),
                    (0, i.jsx)(b.eu, {
                        size: I._3.SIZE_32,
                        src: n?.getAvatarURL(t, (0, I.FT)(I._3.SIZE_32)) ?? void 0,
                        "aria-hidden": !0,
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: tW.Qq,
                children: [
                    (0, i.jsx)(S.D, {
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        lineClamp: 1,
                        children: (0, i.jsx)(C.g, {
                            name: z.intl.formatToPlainString(W.default.subXXA, { name: r }),
                            colorString: a?.colorString ?? null,
                            colorStrings: s,
                        }),
                    }),
                    (0, i.jsx)(E.E, {
                        variant: "text-xs/medium",
                        color: "text-strong",
                        lineClamp: l ? 2 : 1,
                        children: z.intl.string(W.default.y1neEe),
                    }),
                ],
            }),
        ],
    });
}
function tF(e) {
    let { widgetName: t, isCompact: l } = e;
    return (0, i.jsxs)("div", {
        className: tW.D_,
        children: [
            !l &&
                (0, i.jsx)("span", {
                    className: tW.eu,
                    "aria-hidden": !0,
                    children: (0, i.jsx)(tP._, { size: "sm", color: d.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
                }),
            (0, i.jsxs)("div", {
                className: tW.Qq,
                children: [
                    (0, i.jsx)(S.D, {
                        variant: "heading-sm/semibold",
                        color: "text-strong",
                        lineClamp: 1,
                        children: z.intl.string(tB.default.WhdCGP),
                    }),
                    (0, i.jsx)(E.E, {
                        variant: "text-xs/medium",
                        color: "text-strong",
                        lineClamp: l ? 2 : 1,
                        children: z.intl.formatToPlainString(W.default["49Jv0I"], { widgetName: t }),
                    }),
                ],
            }),
        ],
    });
}
function tH(e) {
    let { guildId: t, widgetName: n, isCompact: a, isSpotifyConnected: s } = e;
    return (0, i.jsxs)("div", {
        className: tW.UX,
        children: [
            s ? (0, i.jsx)(tF, { widgetName: n, isCompact: a }) : (0, i.jsx)(tz, { guildId: t, isCompact: a }),
            (0, i.jsx)(y.$, {
                variant: "secondary",
                size: "sm",
                icon: s ? void 0 : tO.E,
                text: s ? z.intl.string(z.t.KY0ilj) : z.intl.string(W.default.jB1fWC),
                onClick: () => {
                    (0, J.openModalLazy)(
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
var tK = l(625903),
    tY = l(780964),
    tq = l(766075),
    tQ = l(30370),
    t$ = l(123894);
function tX() {
    let e = (0, v.bG)([tQ.A], () => tQ.A.getAccounts().some((e) => e.type === eL.fg2.SPOTIFY && e.showActivity));
    return (0, i.jsx)(D.Zj, {
        className: t$.w,
        title: z.intl.string(W.default.ULK65a),
        body: z.intl.format(e ? W.default.BLuvck : W.default["Ko3a0+"], { memberCount: 2 }),
        action: e
            ? null
            : (0, i.jsx)(y.$, {
                  variant: "secondary",
                  size: "sm",
                  icon: tK.SettingsIcon,
                  text: z.intl.string(z.t["3D5yo/"]),
                  onClick: () => (0, tq.openUserSettings)(tY.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING),
              }),
    });
}
function tZ() {
    return (0, i.jsx)(D.Zj, {
        className: t$.w,
        title: z.intl.string(W.default.ULK65a),
        body: z.intl.format(W.default.ZQxU8v, { memberCount: 2 }),
    });
}
var tV = l(109487),
    tJ = l(279543);
function t0(e) {
    let { isCompact: t } = e;
    return (0, i.jsxs)("div", {
        className: tJ.qr,
        children: [
            (0, i.jsxs)("div", {
                className: tJ.Os,
                children: [
                    (0, i.jsx)("span", {
                        className: tJ.Kk,
                        children: (0, i.jsx)(A.RefreshIcon, {
                            size: "xxs",
                            color: d.A.colors.ICON_SUBTLE,
                            "aria-hidden": !0,
                        }),
                    }),
                    (0, i.jsx)(E.E, {
                        className: tJ.Pf,
                        tag: "span",
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: z.intl.string(W.default["3/DOFo"]),
                    }),
                ],
            }),
            (0, i.jsxs)(tt.Anchor, {
                className: tJ.al,
                href: tr.RQ.WEB_HOME,
                "aria-label": z.intl.string(W.default["jUr+wF"]),
                children: [
                    (0, i.jsx)("span", {
                        className: tJ.Kk,
                        children: (0, i.jsx)(tV.L, { size: "xs", color: d.A.colors.ICON_STRONG, "aria-hidden": !0 }),
                    }),
                    !t &&
                        (0, i.jsx)(E.E, {
                            className: tJ.G2,
                            tag: "span",
                            variant: "text-xs/medium",
                            color: "none",
                            children: z.intl.string(W.default.ZdPp2q),
                        }),
                ],
            }),
        ],
    });
}
var t1 = l(65154),
    t2 = l(329177),
    t3 = l(242226);
function t6(e) {
    var t;
    let {
            guildId: l,
            userId: n,
            listener: a,
            rank: s,
            isCompact: r,
            isCurrentUser: c,
            shouldDimForCurrentUser: o,
            isFloating: u = !1,
            rowRef: m,
        } = e,
        x = F(l, n, { showYouSuffix: c }),
        { user: h } = x;
    return null == h
        ? null
        : (0, i.jsxs)("div", {
              ref: m,
              "aria-hidden": u,
              inert: u,
              className: j()(t3.nM, { [t3.Bh]: c && !u, [t3.lR]: o }),
              children: [
                  (0, i.jsx)(t8, { guildId: l, user: h, identity: x, rank: s, listener: a }),
                  null != a &&
                      (0, i.jsxs)("div", {
                          className: j()(t3.Mx, { [t3.dA]: r }),
                          children: [
                              (0, i.jsx)(t1.S, { size: "xxs", color: d.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                              (0, i.jsx)(E.E, {
                                  variant: "text-sm/medium",
                                  color: "text-strong",
                                  children:
                                      ((t = a.plays), z.intl.formatToPlainString(W.default["7X+3f8"], { count: t })),
                              }),
                          ],
                      }),
                  null != a && !r && (0, i.jsx)(t9, { artists: a.artists, artistCount: a.artist_count ?? null }),
              ],
          });
}
function t8(e) {
    let { guildId: t, user: l, identity: n, rank: s, listener: r } = e,
        d = a.useRef(null);
    return (0, i.jsx)(en.A, {
        targetElementRef: d,
        user: l,
        guildId: t,
        children: (e) =>
            (0, i.jsxs)(_.D, {
                ...e,
                innerRef: d,
                className: t3.D_,
                children: [
                    null != s &&
                        (0, i.jsx)(N.A, { children: z.intl.formatToPlainString(W.default.I4JiAQ, { rank: s }) }),
                    (0, i.jsxs)("span", {
                        className: t3.R3,
                        children: [
                            (0, i.jsx)(b.eu, {
                                size: I._3.SIZE_32,
                                src: l.getAvatarURL(t, (0, I.FT)(I._3.SIZE_32)) ?? void 0,
                                "aria-hidden": !0,
                            }),
                            1 === s &&
                                (0, i.jsx)("span", {
                                    className: t3.ie,
                                    "aria-hidden": !0,
                                    children: (0, i.jsx)(t2.CrownIcon, { size: "xxs", color: "currentColor" }),
                                }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: t3.Dc,
                        children: [
                            (0, i.jsx)(S.D, {
                                variant: "heading-sm/semibold",
                                color: "text-default",
                                lineClamp: 1,
                                children: (0, i.jsx)(C.g, {
                                    name: n.displayName,
                                    colorString: n.member?.colorString ?? null,
                                    colorStrings: n.roleColorStrings,
                                }),
                            }),
                            (0, i.jsx)(t4, { listener: r }),
                        ],
                    }),
                ],
            }),
    });
}
function t7(e, t) {
    return (0, i.jsx)(E.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: e }, t);
}
function t4(e) {
    let { listener: t } = e,
        l = t?.latest_track_title;
    if (null == l) return null;
    let n = t?.latest_artist_name;
    return (0, i.jsx)(E.E, {
        variant: "text-xs/medium",
        color: "text-subtle",
        lineClamp: 1,
        children:
            null != n
                ? z.intl.format(W.default.QqaqBg, { trackTitle: l, artistName: n, highlightHook: t7 })
                : z.intl.format(W.default.ZMJ8Mt, { trackTitle: l, highlightHook: t7 }),
    });
}
function t5(e) {
    let { artist: t, notched: l } = e,
        [n, s] = a.useState(!1),
        r = null != t.artist_image_hash ? tr.RQ.IMAGE(t.artist_image_hash) : null;
    return (0, i.jsx)("span", {
        className: t3.sG,
        children: (0, i.jsx)(eu.Ay, {
            mask: l ? eu.l8[24] : eu.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null == r || n
                    ? (0, i.jsx)("span", {
                          className: t3.Ql,
                          children: (0, i.jsx)(te.MicrophoneIcon, { size: "xxs", color: d.A.colors.ICON_SUBTLE }),
                      })
                    : (0, i.jsx)("img", { className: t3.v2, src: r, alt: "", loading: "lazy", onError: () => s(!0) }),
        }),
    });
}
function t9(e) {
    let { artists: t, artistCount: l } = e,
        n = t.slice(0, 3),
        a = (l ?? t.length) - n.length;
    return (0, i.jsx)("div", {
        className: t3.Rh,
        "aria-hidden": !0,
        children:
            n.length > 0 &&
            (0, i.jsxs)("div", {
                className: t3.W$,
                children: [
                    n.map((e, t) =>
                        (0, i.jsx)(
                            t5,
                            { artist: e, notched: a > 0 || t !== n.length - 1 },
                            `${e.artist_external_id}-${e.artist_image_hash}`,
                        ),
                    ),
                    a > 0 &&
                        (0, i.jsx)("span", {
                            className: t3.sG,
                            children: (0, i.jsx)(eu.Ay, {
                                mask: eu.Ay.Masks.SQUIRCLE,
                                width: 24,
                                height: 24,
                                children: (0, i.jsx)("div", {
                                    className: t3.ag,
                                    children: (0, i.jsx)(E.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: z.intl.formatToPlainString(W.default.bFIg0R, { count: a }),
                                    }),
                                }),
                            }),
                        }),
                ],
            }),
    });
}
var le = l(897130);
function lt(e) {
    let { guildId: t, isCompact: l, data: n, upsell: s } = e,
        r = n.top_listeners,
        d = (0, v.bG)([R.default], () => R.default.getCurrentUser()?.id),
        c = r.findIndex((e) => e.user_id === d),
        o = -1 === c ? null : r[c],
        u = a.useMemo(() => r.map((e) => e.user_id), [r]);
    (0, T.k6)(t, u);
    let { scrollerRef: m, userRowRef: x, floatingRowPosition: h } = G(),
        f = null != s,
        g = f ? null : h,
        _ = null != g;
    return n.top_listeners.length < 2
        ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(tZ, {}), s] })
        : (0, i.jsxs)("div", {
              className: le.SY,
              children: [
                  (0, i.jsxs)(p.d_, {
                      className: j()(le.p_, { [le.w]: f }),
                      ref: m,
                      children: [
                          r.map((e, n) => {
                              let a = e.user_id === d;
                              return (0, i.jsx)(
                                  t6,
                                  {
                                      guildId: t,
                                      userId: e.user_id,
                                      listener: e,
                                      rank: n + 1,
                                      isCompact: l,
                                      isCurrentUser: a,
                                      shouldDimForCurrentUser: a && _,
                                      rowRef: a ? x : void 0,
                                  },
                                  e.user_id,
                              );
                          }),
                          !f &&
                              null != d &&
                              null == o &&
                              (0, i.jsx)(t6, {
                                  guildId: t,
                                  userId: d,
                                  listener: null,
                                  rank: null,
                                  isCompact: l,
                                  isCurrentUser: !0,
                                  shouldDimForCurrentUser: _,
                                  rowRef: x,
                              }),
                      ],
                  }),
                  f &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(M, { position: "bottom" }),
                              (0, i.jsx)("div", { className: le.Kv, children: s }),
                          ],
                      }),
                  null != d &&
                      null != g &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(M, { position: g }),
                              (0, i.jsx)(L, {
                                  position: g,
                                  children: (0, i.jsx)(t6, {
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
var ll = l(717683);
function ln(e) {
    let { isCompact: t } = e;
    return (0, i.jsxs)("div", {
        className: ll.qV,
        "aria-hidden": !0,
        children: [
            (0, i.jsx)("div", {
                className: j()(ll.Dk, { [ll.yI]: t }),
                children: Array.from({ length: 10 }, (e, t) =>
                    (0, i.jsxs)(
                        "div",
                        {
                            className: ll.Nr,
                            children: [
                                (0, i.jsx)("div", { className: j()(ll.om, ll.xX) }),
                                (0, i.jsxs)("div", {
                                    className: ll.Qq,
                                    children: [
                                        (0, i.jsx)("div", { className: j()(ll.om, ll.DD) }),
                                        (0, i.jsx)("div", { className: j()(ll.om, ll.VA) }),
                                    ],
                                }),
                            ],
                        },
                        t,
                    ),
                ),
            }),
            (0, i.jsxs)("div", {
                className: j()(ll.yp, { [ll.Fl]: t }),
                children: [
                    (0, i.jsx)("div", { className: j()(ll.om, ll.Pl) }),
                    (0, i.jsx)("div", { className: j()(ll.om, ll._0) }),
                ],
            }),
        ],
    });
}
var li = l(432017),
    la = l(362704);
function ls(e) {
    let { song: t, isSelected: l, onSelect: n, itemProps: s } = e,
        r = null != t.cover_art_hash ? tr.RQ.IMAGE(t.cover_art_hash) : null,
        d = a.useMemo(
            () => ({
                kind: "song",
                shareUrl: tr.RQ.WEB_OPEN(tr.M0.TRACK, t.track_external_id),
                title: t.track_title ?? t.track_external_id,
                subtitle: t.artist_name,
                imageUrl: r,
            }),
            [t.track_external_id, t.track_title, t.artist_name, r],
        );
    return (0, i.jsxs)("div", {
        className: ta.Nr,
        children: [
            (0, i.jsxs)("button", {
                ...s,
                type: "button",
                className: j()(ta.MT, { [ta.tY]: l }),
                "aria-pressed": l,
                onClick: () => n(t.track_external_id),
                children: [
                    (0, i.jsx)(tl.R, {
                        src: r,
                        isCircular: !1,
                        FallbackIcon: li.T,
                        children:
                            l &&
                            (0, i.jsx)("span", {
                                className: j()(ta.Lw, ta.Kp),
                                "aria-hidden": !0,
                                children: (0, i.jsx)(la.Y, { size: "md", color: "currentColor" }),
                            }),
                    }),
                    null != t.track_title &&
                        (0, i.jsxs)("span", {
                            className: ta.Qq,
                            children: [
                                (0, i.jsx)(E.E, {
                                    className: ta.DD,
                                    tag: "span",
                                    variant: "text-sm/semibold",
                                    color: "text-default",
                                    lineClamp: 1,
                                    children: t.track_title,
                                }),
                                null != t.artist_name &&
                                    (0, i.jsx)(E.E, {
                                        className: ta.VA,
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
            (0, i.jsx)(ts, { target: d, tabIndex: s.tabIndex }),
        ],
    });
}
var lr = l(196765),
    ld = l(770178);
let lc = { view: "top_songs", isCompact: !1, canShowEmbed: !1, selectedTrackId: null },
    lo = (0, lr.v)(() => ({ byWidgetId: {} }));
function lu(e, t) {
    lo.setState((l) => {
        let n = l.byWidgetId[e] ?? lc;
        return { byWidgetId: { ...l.byWidgetId, [e]: { ...n, ...t } } };
    });
}
function lm(e) {
    return lo((t) => t.byWidgetId[e]?.view ?? lc.view);
}
function lx(e) {
    return lo((t) => t.byWidgetId[e]?.isCompact ?? lc.isCompact);
}
function lh(e) {
    return lo((t) => t.byWidgetId[e]?.selectedTrackId ?? lc.selectedTrackId);
}
function lf(e, t) {
    (lo.getState().byWidgetId[e] ?? lc).view !== t && lu(e, { view: t, selectedTrackId: null });
}
function lg(e) {
    return e.track_external_id;
}
function lj(e) {
    let t,
        { guildId: l, widgetId: n, isCompact: s, data: r } = e,
        d = lh(n),
        c = lo((e) => e.byWidgetId[n]?.canShowEmbed ?? lc.canShowEmbed),
        o = a.useCallback(
            (e) => {
                let t;
                return (
                    (t = lo.getState().byWidgetId[n]?.selectedTrackId ?? null),
                    void lu(n, { selectedTrackId: t === e ? null : e })
                );
            },
            [n],
        ),
        u = a.useCallback(
            (e, t) => (0, i.jsx)(ls, { song: e, isSelected: e.track_external_id === d, onSelect: o, itemProps: t }),
            [d, o],
        );
    if (0 === r.ranked_songs.length) return null;
    let m = r.ranked_songs.find((e) => e.track_external_id === d) ?? null,
        x = tv(r);
    return (0, i.jsxs)("div", {
        className: tw.U,
        children: [
            (0, i.jsx)(tS, {
                label: tR(tC.TOP_SONGS),
                items: r.ranked_songs,
                isCompact: s,
                getItemKey: lg,
                renderItem: u,
            }),
            null != m
                ? (0, i.jsx)(tN, { guildId: l, isCompact: s, canShowEmbed: c, song: m })
                : (0, i.jsx)(tE, {
                      isCompact: s,
                      headline:
                          (t = Math.round(r.listening_time_ms / K.A.Millis.MINUTE)) < 1
                              ? null
                              : z.intl.formatToPlainString(W.default["+5b01q"], { minutes: t }),
                      detail:
                          r.distinct_listeners < 1
                              ? null
                              : z.intl.format(W.default.AzIhRB, {
                                    count: r.distinct_listeners,
                                    trend: tg(x),
                                    countHook: th,
                                }),
                      trend: x,
                  }),
        ],
    });
}
var lv = l(691885),
    lp = l(109765);
function l_(e) {
    let { widgetId: t } = e,
        l = lm(t),
        n = a.useMemo(() => ty.map((e) => ({ id: e, label: tR(e), value: e })), []),
        s = a.useCallback(
            (e) => {
                lf(t, e);
            },
            [t],
        );
    return (0, i.jsx)("div", {
        className: lp.L,
        children: (0, i.jsx)(lv.l, {
            selectionMode: "single",
            label: z.intl.string(W.default.hFYyGU),
            hideLabel: !0,
            fitContent: !0,
            options: n,
            value: l,
            onSelectionChange: s,
        }),
    });
}
var lA = l(871107);
function lE(e) {
    let { title: t } = e;
    return (0, i.jsxs)("div", {
        className: lA.$,
        children: [
            (0, i.jsx)("span", {
                className: lA.K,
                children: (0, i.jsx)(li.T, { size: "xs", color: d.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
            }),
            (0, i.jsx)(h.q, { size: "md", children: t }),
        ],
    });
}
var lN = l(77915),
    lb = l(756936);
function lI(e) {
    return e.default_title ?? z.intl.string(W.default["5xxUI2"]);
}
var lS = l(890497),
    lC = l(734057),
    ly = l(317525),
    lT = l(576705),
    lR = l(935208),
    lk = l(44167);
l(321073);
var lD = l(485845),
    lw = l(136722),
    lM = l(435183),
    lL = l(155718),
    lU = l(795816),
    lG = l(933958),
    lP = l(574152),
    lO = l(627363),
    lB = l(712440),
    lW = l(733110),
    lz = l(488926),
    lF = l(818023);
async function lH(e) {
    null == eh.A.getApplication(lF.NW) && (await (0, lO.TA)(lF.NW));
    let t = lG.Ay.getEmbeddedActivitiesForChannel(e).every((e) => e.applicationId !== lF.NW);
    return await (0, lU.su)({
        channelId: e,
        applicationId: lF.NW,
        isStart: t,
        embeddedActivitiesManager: (0, lP.A)(),
        renderInFramePool: !0,
    });
}
async function lK(e) {
    let { channel: t, selectedRoleIds: l } = e,
        n = [];
    if (l.length > 0)
        for (let e of (n.push({ id: t.guild_id, type: lL.r2.ROLE, allow: lz.x3, deny: eL.xBc.USE_EMBEDDED_ACTIVITIES }),
        l))
            n.push({ id: e, type: lL.r2.ROLE, allow: eL.xBc.USE_EMBEDDED_ACTIVITIES, deny: lz.x3 });
    let i = await (0, lM.RT)(t.id, { permissionOverwrites: n });
    if (!i.ok) throw i;
}
let lY = [];
var lq = l(344351),
    lQ = l(256693),
    l$ = l(343030),
    lX = l(317608),
    lZ = l(953538);
let lV = {
    [r.a.IMAGE_TEXT]: {
        View: function (e) {
            let { widget: t, guildSpaceMode: l, guildId: n } = e,
                { text: a, image_hash: s } = t.config,
                r = "edit" === l ? t.config.image : void 0,
                d = void 0 !== r ? r : null != s ? e7(n, t.id, s) : null;
            return (0, i.jsxs)("div", {
                className: e5.kL,
                children: [
                    null != d && (0, i.jsx)("img", { className: e5.Sl, src: d, alt: "" }),
                    null != a &&
                        (0, i.jsx)(E.E, {
                            variant: "text-md/normal",
                            color: "text-subtle",
                            className: e5.Qq,
                            children: a,
                        }),
                ],
            });
        },
        Edit: function (e) {
            let { widget: t, commit: l, cancel: n } = e,
                s = t.config,
                [d, c] = a.useState(s.title ?? ""),
                [m, x] = a.useState(s.text ?? ""),
                [h, f] = a.useState(s.image),
                [g, j] = a.useState(null),
                p = (0, v.bG)([e2.A], () => e2.A.getGuildId()),
                _ = void 0 !== h ? h : null != s.image_hash && null != p ? e7(p, t.id, s.image_hash) : null;
            return (0, i.jsxs)(eq.B, {
                gap: 16,
                children: [
                    (0, i.jsx)(eZ.k, {
                        label: z.intl.string(z.t.gnwWrx),
                        value: d,
                        onChange: function (e) {
                            (j(null), c(e));
                        },
                        maxLength: 100,
                        showCharacterCount: !0,
                    }),
                    (0, i.jsx)(eQ.D, {
                        label: z.intl.string(z.t.X4IxWL),
                        children: (0, i.jsxs)(eq.B, {
                            gap: 16,
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            className: e4.B,
                            children: [
                                (0, i.jsxs)(eq.B, {
                                    gap: 8,
                                    direction: "horizontal",
                                    children: [
                                        (0, i.jsx)(e1.A, {
                                            variant: "secondary",
                                            text: z.intl.string(z.t["MsUY/S"]),
                                            onChange: function (e) {
                                                (j(null), f(e));
                                            },
                                            maxFileSizeBytes: 0xa00000,
                                            onFileSizeError: () => (0, e0.A)(0xa00000),
                                        }),
                                        null != _ &&
                                            (0, i.jsx)(o.m, {
                                                text: z.intl.string(z.t.N86XcP),
                                                ariaHidden: !0,
                                                children: (0, i.jsx)(u.K, {
                                                    variant: "critical-secondary",
                                                    icon: eV.TrashIcon,
                                                    onClick: function () {
                                                        (j(null), f(null));
                                                    },
                                                    "aria-label": z.intl.string(z.t.N86XcP),
                                                }),
                                            }),
                                    ],
                                }),
                                null != _ && (0, i.jsx)("img", { className: e4.V, src: _, alt: "" }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(e$.f, {
                        label: z.intl.string(z.t.COGMNC),
                        value: m,
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
                            children: (0, i.jsx)(eJ.w, { type: "critical", children: g }),
                        }),
                    (0, i.jsxs)(eX.e, {
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(y.$, { variant: "secondary", text: z.intl.string(z.t["ETE/oC"]), onClick: n }),
                            (0, i.jsx)(y.$, {
                                variant: "primary",
                                text: z.intl.string(z.t["R3BPH+"]),
                                onClick: function () {
                                    let e;
                                    if (
                                        ((e = void 0 !== h ? null !== h : null != s.image_hash),
                                        0 === m.length && !e && (j(z.intl.string(W.default.zleX9q)), 1))
                                    )
                                        return;
                                    let t = {
                                        type: r.a.IMAGE_TEXT,
                                        image_hash: s.image_hash,
                                        text: m.length > 0 ? m : null,
                                        title: d.length > 0 ? d : null,
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
            return (0, i.jsx)(h.q, { children: t.config.title ?? t.default_title ?? "" });
        },
    },
    [r.a.LEADERBOARD]: {
        View: function (e) {
            let t,
                { widget: l, hydration: n, guildId: s, guildSpaceMode: r } = e,
                d = eH({
                    guildId: s,
                    data: n?.status === "success" ? n.data : void 0,
                    expanded: !1,
                    column: l.position.column,
                    enabled: "view" === r,
                }),
                c = a.useCallback(
                    (e) => {
                        d(e?.closest("[data-guild-space-widget]") ?? null);
                    },
                    [d],
                );
            return (
                (t =
                    null == n || "idle" === n.status || "loading" === n.status
                        ? (0, i.jsx)(f.eU, {})
                        : "error" === n.status
                          ? (0, i.jsx)(f.MO, {})
                          : (0, i.jsx)(eG, { guildId: s, data: n.data, column: l.position.column })),
                (0, i.jsx)("div", { ref: c, children: t })
            );
        },
        Title: function (e) {
            let { widget: t, hydration: l } = e;
            return l?.status !== "success"
                ? (0, i.jsx)(h.q, { children: t.default_title ?? "" })
                : (0, i.jsx)(h.q, { children: $(l.data) });
        },
        TitleIcon: function () {
            return (0, i.jsx)(c.TrophyIcon, { size: "xs", color: d.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        },
        HeaderAccessory: function (e) {
            let { hydration: t } = e;
            return t?.status !== "success" || Q(t.data) ? null : (0, i.jsx)(eF, { data: t.data });
        },
        HeaderActions: function (e) {
            let { hydration: t, guildId: l, column: n } = e,
                a = t?.status === "success" ? t.data : void 0;
            return null != a && Q(a)
                ? null
                : (0, i.jsx)(o.m, {
                      text: z.intl.string(z.t.dcl9MQ),
                      children: (0, i.jsx)(u.K, {
                          variant: "icon-only",
                          size: "sm",
                          icon: m._,
                          "aria-label": z.intl.string(z.t.dcl9MQ),
                          disabled: null == a,
                          onClick: function () {
                              null != a &&
                                  (x.default.track(eL.HAw.LEADERBOARD_CLICK, {
                                      location: "expand",
                                      guild_id: l,
                                      leaderboard_state: X(a),
                                      leaderboard_view: Z({ expanded: !1, column: n }),
                                      metric: V(a.stat),
                                  }),
                                  (function (e) {
                                      let { guildId: t, data: l } = e,
                                          n = (e) => (0, i.jsx)(eY, { guildId: t, data: l, modalProps: e });
                                      (0, J.openModalLazy)(() => Promise.resolve(n), {
                                          modalKey: "guild-space-leaderboard-expand",
                                      });
                                  })({ guildId: l, data: a }));
                          },
                      }),
                  });
        },
    },
    [r.a.POPULAR_MUSIC]: {
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
                            lu(t, { isCompact: l < 480, canShowEmbed: l >= 560 });
                        },
                        [t],
                    )),
                    (0, ld.g)(n, s, [t], { fireOnMount: !0 }),
                    a.useEffect(
                        () => () => {
                            lo.setState((e) => {
                                if (null == e.byWidgetId[t]) return e;
                                let l = { ...e.byWidgetId };
                                return (delete l[t], { byWidgetId: l });
                            });
                        },
                        [t],
                    ),
                    n),
                x = lx(c.id),
                h = lm(c.id),
                g = lh(c.id),
                { isContributing: j, isSpotifyConnected: v, hasFetchedConsents: p } = (0, lN.MX)(d),
                _ = "edit" === u,
                A = o?.status === "success" && tT(o.data),
                E = !x && !_ && !A,
                N =
                    "view" === u && p && !j
                        ? (0, i.jsx)(tH, { guildId: d, widgetName: lI(c), isCompact: x, isSpotifyConnected: v })
                        : null,
                b =
                    _ || A || o?.status !== "success" || h === tC.TOP_LISTENERS
                        ? null
                        : ((l = o.data),
                          null ==
                          (r =
                              l.ranked_songs.find((e) => e.track_external_id === g && null != e.cover_art_hash)
                                  ?.cover_art_hash ??
                              l.ranked_songs.find((e) => null != e.cover_art_hash)?.cover_art_hash)
                              ? null
                              : tr.RQ.IMAGE(r));
            return (0, i.jsxs)("div", {
                className: lb.rf,
                ref: m,
                children: [
                    null != b &&
                        (0, i.jsx)("div", {
                            className: lb.G,
                            "aria-hidden": !0,
                            children: (0, i.jsx)("img", { className: lb.LZ, src: b, alt: "" }),
                        }),
                    (0, i.jsx)("div", {
                        className: lb.Qs,
                        children: (0, i.jsx)("div", {
                            id: tD(c.id),
                            className: lb.nd,
                            role: E ? "tabpanel" : "group",
                            tabIndex: 0,
                            "aria-label": E ? void 0 : tR(h),
                            "aria-labelledby": E ? tk(c.id, h) : void 0,
                            children: (function () {
                                if (_) return (0, i.jsx)(ln, { isCompact: x });
                                if (null == o || "idle" === o.status || "loading" === o.status)
                                    return (0, i.jsx)(f.eU, {});
                                if ("error" === o.status) return (0, i.jsx)(f.MO, {});
                                if (A) return (0, i.jsx)(tX, {});
                                switch (h) {
                                    case tC.TOP_SONGS:
                                        return (0, i.jsx)(lj, {
                                            guildId: d,
                                            widgetId: c.id,
                                            isCompact: x,
                                            data: o.data,
                                        });
                                    case tC.TOP_ARTISTS:
                                        return (0, i.jsx)(tU, { isCompact: x, data: o.data });
                                    case tC.TOP_LISTENERS:
                                        return (0, i.jsx)(lt, { guildId: d, isCompact: x, data: o.data, upsell: N });
                                }
                            })(),
                        }),
                    }),
                    h !== tC.TOP_LISTENERS && N,
                    (0, i.jsx)(t0, { isCompact: x }),
                ],
            });
        },
        Title: function (e) {
            let { widget: t, hydration: l, guildSpaceMode: n } = e,
                a = lI(t),
                s = l?.status === "success" && tT(l.data);
            return "edit" === n || s ? (0, i.jsx)(h.q, { size: "md", children: a }) : (0, i.jsx)(lE, { title: a });
        },
        ViewHeaderTrailing: function (e) {
            let { widget: t, hydration: l, title: n } = e,
                a = lx(t.id),
                s = lm(t.id);
            return l?.status === "success" && tT(l.data)
                ? null
                : a
                  ? (0, i.jsx)(l_, { widgetId: t.id })
                  : (0, i.jsx)(e9.I, {
                        label: n,
                        tabs: ty.map((e) => ({ id: e, label: tR(e) })),
                        selectedId: s,
                        panelId: tD(t.id),
                        getTabId: (e) => tk(t.id, e),
                        onSelect: (e) => lf(t.id, e),
                    });
        },
    },
    [r.a.WHITEBOARD]: {
        View: function (e) {
            let t,
                l,
                n = (0, lk.n)(),
                r = (0, v.bG)(
                    [lC.A, lT.A],
                    () => {
                        let e = null != n ? lC.A.getChannel(n) : void 0;
                        return null != e && lT.A.can(eL.xBc.USE_EMBEDDED_ACTIVITIES, e);
                    },
                    [n],
                ),
                d = (0, v.bG)(
                    [lG.Ay],
                    () => {
                        let e = lG.Ay.getCurrentEmbeddedActivity();
                        return null == e ||
                            e.applicationId !== lF.NW ||
                            e.location.kind !== lq.T.GUILD_CHANNEL ||
                            e.location.channel_id !== n
                            ? null
                            : e;
                    },
                    [n],
                ),
                c = (0, v.bG)([lG.Ay], () => lG.Ay.isLaunchingActivity(), []),
                { authResolved: o, isAuthorized: u } =
                    ((t = (0, v.bG)(
                        [lW.default],
                        () => lW.default.getFetchStateForApplication(lF.NW) === lW.FetchState.FETCHED,
                        [],
                    )),
                    (l = (0, v.bG)(
                        [lW.default, eh.A],
                        () => {
                            let e = lW.default.getNewestTokenForApplication(lF.NW);
                            if (null == e) return !1;
                            let t = eh.A.getApplication(lF.NW),
                                l = t?.integrationTypesConfig?.[lD.b.USER_INSTALL]?.oauth2InstallParams?.scopes;
                            if (null == l) return !0;
                            let n = new Set(e.scopes);
                            return l.every((e) => n.has(e));
                        },
                        [],
                    )),
                    a.useEffect(() => {
                        (lW.default.getFetchStateForApplication(lF.NW) === lW.FetchState.NOT_FETCHED &&
                            lB.A.fetch([lF.NW]),
                            null == eh.A.getApplication(lF.NW) && (0, lO.TA)(lF.NW));
                    }, []),
                    { authResolved: t, isAuthorized: l }),
                m = a.useRef(!1);
            a.useEffect(() => {
                null == d && null != n && r && o && u && !m.current && ((m.current = !0), lH(n));
            }, [r, n, d, o, u]);
            let x = a.useCallback(() => {
                    null != n && ((m.current = !0), lH(n));
                }, [n]),
                h = null != n && o && !u;
            return null == n
                ? (0, i.jsx)(eq.B, {
                      className: lZ.kL,
                      align: "center",
                      justify: "center",
                      children: (0, i.jsx)(s, { alt: "", width: 200 }),
                  })
                : r
                  ? (0, i.jsxs)("div", {
                        className: lZ.kL,
                        children: [
                            null != d &&
                                (0, i.jsx)(lX.A, {
                                    frameId: (0, lQ.Ri)(d),
                                    level: l$.A.WithinAppContent,
                                    className: lZ.t$,
                                }),
                            null == d &&
                                h &&
                                (0, i.jsx)("div", {
                                    className: lZ.P5,
                                    children: (0, i.jsx)(y.$, {
                                        variant: "secondary",
                                        text: z.intl.string(W.default.PSuly6),
                                        loading: c,
                                        onClick: x,
                                    }),
                                }),
                        ],
                    })
                  : (0, i.jsx)("div", {
                        className: lZ.kL,
                        children: (0, i.jsx)("div", {
                            className: lZ.m0,
                            children: (0, i.jsx)(E.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: z.intl.string(W.default["nXc/MQ"]),
                            }),
                        }),
                    });
        },
        Edit: function (e) {
            let { cancel: t } = e,
                l = (0, v.bG)([e2.A], () => e2.A.getGuildId()),
                n = lR.default.castGuildIdAsEveryoneGuildRoleId(l),
                s = (0, lk.n)(),
                r = (0, v.bG)([lC.A], () => (null != s ? lC.A.getChannel(s) : void 0), [s]),
                d = (0, v.bG)([lT.A], () => null != r && lT.A.can(eL.xBc.MANAGE_ROLES, r), [r]),
                c = (0, v.bG)([ly.A], () => (null == l ? lY : ly.A.getSortedRoles(l).filter((e) => e.id !== n)), [
                    l,
                    n,
                ]),
                o = a.useMemo(() => {
                    let e;
                    return null != r
                        ? null != (e = r.permissionOverwrites[r.guild_id]) &&
                          lw.zy(e.deny, eL.xBc.USE_EMBEDDED_ACTIVITIES)
                            ? c
                                  .filter((e) => {
                                      let t = r.permissionOverwrites[e.id];
                                      return null != t && lw.zy(t.allow, eL.xBc.USE_EMBEDDED_ACTIVITIES);
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
            async function _() {
                if (null != r) {
                    (g(!1), h(!0));
                    try {
                        (await lK({ channel: r, selectedRoleIds: j }), t());
                    } catch {
                        (h(!1), g(!0));
                    }
                }
            }
            return null == r
                ? null
                : (0, i.jsxs)(eq.B, {
                      gap: 16,
                      children: [
                          (0, i.jsx)(lS.Z, {
                              selectionMode: "multiple",
                              label: z.intl.string(W.default.XXLbfv),
                              description: z.intl.string(W.default.XrpYIG),
                              placeholder: z.intl.string(W.default.pp6WeD),
                              options: p,
                              value: j,
                              onSelectionChange: function (e) {
                                  (g(!1), m(e));
                              },
                              disabled: !d || x,
                              fullWidth: !0,
                              wrapTags: !0,
                          }),
                          !d && (0, i.jsx)(eJ.w, { type: "warning", children: z.intl.string(W.default.UPLtlA) }),
                          f &&
                              (0, i.jsx)("div", {
                                  role: "alert",
                                  children: (0, i.jsx)(eJ.w, {
                                      type: "critical",
                                      children: z.intl.string(W.default.xyCJYs),
                                  }),
                              }),
                          (0, i.jsxs)(eX.e, {
                              fullWidth: !0,
                              children: [
                                  (0, i.jsx)(y.$, {
                                      variant: "secondary",
                                      text: z.intl.string(z.t["ETE/oC"]),
                                      onClick: t,
                                      disabled: x,
                                  }),
                                  (0, i.jsx)(y.$, {
                                      variant: "primary",
                                      text: z.intl.string(z.t["R3BPH+"]),
                                      onClick: _,
                                      disabled: !d,
                                      loading: x,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
        LockedPreview: s,
    },
};
