l.d(t, { m: () => lP });
var n,
    i = l(477900),
    a = l(582128),
    s = l(593673),
    r = l(661531),
    d = l(369606),
    c = l(866665),
    o = l(408278),
    u = l(26430),
    m = l(562073),
    x = l(289873),
    h = l(738188),
    f = l(834730),
    g = l(375708),
    j = l(448492);
function p() {
    return (0, i.jsx)("div", {
        className: j.w,
        children: (0, i.jsx)(x.y, { type: x.y.Type.SPINNING_CIRCLE, "aria-label": g.intl.string(g.t.ZTNur7) }),
    });
}
function v() {
    return (0, i.jsxs)("div", {
        className: j.w,
        role: "alert",
        children: [
            (0, i.jsx)(h.WarningIcon, { size: "md", color: "text-feedback-critical", "aria-hidden": !0 }),
            (0, i.jsx)(f.E, { variant: "text-sm/normal", color: "text-muted", children: g.intl.string(g.t.F8FvUy) }),
        ],
    });
}
var _ = l(503698),
    I = l.n(_),
    A = l(17928),
    N = l(364522),
    E = l(663417),
    b = l(140735),
    S = l(97808),
    y = l(778712),
    C = l(297264),
    T = l(463930),
    R = l(821609),
    k = l(192308),
    D = l(80682),
    w = l(967144),
    M = l(885386),
    U = l(153488),
    P = l(696451),
    G = l(287809),
    L = l(58703),
    O = l(927813),
    W = l(562153);
function B() {
    let [e, t] = a.useState(null),
        [l, n] = a.useState(null),
        [i, s] = a.useState("unknown");
    return (
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
        }, [e, l]),
        { scrollerRef: t, userRowRef: n, floatingRowPosition: "top" === i || "bottom" === i ? i : null }
    );
}
var z = l(331322),
    F = l(625903),
    H = l(780964),
    Y = l(766075),
    q = l(251812);
function K(e) {
    return e.entries.length < 3;
}
function $(e) {
    return (0, q.K)(K(e) ? void 0 : e.stat).name;
}
var Q = l(104129),
    V = l(823353);
function X(e) {
    let { guildId: t } = e,
        l = M.tz.useSetting(),
        n = M.JG.useSetting().includes(t),
        a = !l || n;
    return (0, i.jsxs)(z.B, {
        className: V.w,
        align: "center",
        justify: "center",
        gap: 16,
        padding: { top: 24, right: 16, bottom: 24, left: 16 },
        children: [
            (0, i.jsxs)(z.B, {
                align: "center",
                gap: 6,
                children: [
                    (0, i.jsx)(C.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: g.intl.string(Q.default.ULK65a),
                    }),
                    (0, i.jsx)(f.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: g.intl.format(a ? Q.default.ueza5l : Q.default["81PK67"], { memberCount: 3 }),
                    }),
                ],
            }),
            a &&
                (0, i.jsx)(R.$, {
                    variant: "secondary",
                    size: "sm",
                    icon: F.SettingsIcon,
                    text: g.intl.string(g.t["3D5yo/"]),
                    onClick: () =>
                        (0, Y.openUserSettings)(
                            l ? H.X.ACTIVITY_PRIVACY_PER_GUILD_CATEGORY : H.X.ACTIVITY_PRIVACY_SETTING,
                        ),
                }),
        ],
    });
}
var Z = l(939249),
    J = l(342296),
    ee = l(518782);
function et(e) {
    let t = Math.floor(Math.max(e, 0) / O.A.Seconds.MINUTE),
        l = Math.floor(t / O.A.Minutes.HOUR),
        n = t % O.A.Minutes.HOUR;
    return 0 === l
        ? g.intl.formatToPlainString(Q.default.DdzvGL, { minutes: n })
        : g.intl.formatToPlainString(Q.default["6Y8H0A"], { hours: l, minutes: n });
}
function el(e, t) {
    switch (t) {
        case ee.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return {
                primary: g.intl.formatToPlainString(g.t["k2UNz+"], { days: e.value }),
                secondary: et(e.time_played_seconds),
            };
        case ee.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return {
                primary: g.intl.formatToPlainString(Q.default.rgpc8E, { count: e.value }),
                secondary: et(e.time_played_seconds),
            };
        case ee.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            let l, n, i;
            return {
                primary:
                    ((n = Math.floor((l = Math.floor(Math.max(e.value, 0) / O.A.Millis.MINUTE)) / O.A.Minutes.HOUR)),
                    (i = l % O.A.Minutes.HOUR),
                    0 === n
                        ? g.intl.formatToPlainString(Q.default.bgQf2H, { minutes: i })
                        : 0 === i
                          ? g.intl.formatToPlainString(Q.default["D/HToK"], { hours: n })
                          : g.intl.formatToPlainString(Q.default.fvtrHn, { hours: n, minutes: i })),
            };
        default:
            return { primary: "\u2014" };
    }
}
var en = l(81466),
    ei = l(406810),
    ea = l(687966),
    es = l(109112),
    er = l(683063),
    ed = l(573435),
    ec = l(402860),
    eo = l(396583),
    eu = l(587895),
    em = l(429913),
    ex = l(280450);
function eh(e, t) {
    return { id: e, name: g.intl.string(Q.default.rhDbuQ), iconUrl: void 0, isLoading: t };
}
function ef(e, t) {
    return e.get(t) ?? eh(t, !1);
}
function eg(e, t) {
    return t.map((t) => ef(e, t));
}
function ej(e, t) {
    let l = t.user_id,
        n = (0, A.bG)([G.default], () => G.default.getUser(l), [l]),
        i = (0, A.bG)([P.Ay], () => P.Ay.getMember(e, l), [e, l]),
        a = (0, w.gn)(e, l, i?.colorStrings ?? null),
        s = W.Ay.useName(e, void 0, n),
        r = (0, A.bG)([ex.default], () => ex.default.getId()) === l,
        d = null != n ? s : t.name;
    return {
        user: n,
        member: i,
        roleColorStrings: a,
        baseName: d,
        displayName: r ? g.intl.formatToPlainString(Q.default.subXXA, { name: d }) : d,
    };
}
var ep = l(518477),
    ev = l(870087);
function e_(e) {
    let {
            guildId: t,
            entry: l,
            stat: n,
            games: s,
            isCurrentUser: r,
            shouldDimForCurrentUser: d,
            isFloating: c = !1,
            rowRef: o,
        } = e,
        u = ej(t, l),
        m = l.application_ids[0],
        x = null != m ? ef(s, m) : void 0,
        h = l.user_id,
        f = a.useCallback(() => {
            (0, ec.openUserProfileModal)({
                userId: h,
                guildId: t,
                tabSection: ep.RP.ACTIVITY,
                scrollTarget: ep.bk.RECENT_ACTIVITY,
            });
        }, [h, t]);
    return (0, i.jsxs)("div", {
        ref: o,
        "aria-hidden": c,
        inert: c,
        className: I()(ev.nM, { [ev.Bh]: r && !c, [ev.lR]: d }),
        children: [
            (0, i.jsx)(eI, { guildId: t, entry: l, identity: u, lastPlayedGame: x }),
            (0, i.jsx)(eE, { entry: l, stat: n, name: u.baseName, onClick: f }),
            (0, i.jsx)(eC, {
                name: u.baseName,
                applicationIds: l.application_ids,
                applicationCount: l.application_count,
                games: s,
                onClick: f,
            }),
        ],
    });
}
function eI(e) {
    let { guildId: t, entry: l, identity: n, lastPlayedGame: s } = e,
        r = a.useRef(null),
        d = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(eA, { rank: l.rank }),
                (0, i.jsx)(S.eu, {
                    size: y._3.SIZE_32,
                    src: n.user?.getAvatarURL(t, (0, y.FT)(y._3.SIZE_32)) ?? void 0,
                    className: ev.my,
                    "aria-hidden": !0,
                }),
                (0, i.jsxs)("div", {
                    className: ev.Dc,
                    children: [
                        (0, i.jsx)(C.D, {
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            lineClamp: 1,
                            children: (0, i.jsx)(T.g, {
                                name: n.displayName,
                                colorString: n.member?.colorString ?? null,
                                colorStrings: n.roleColorStrings,
                            }),
                        }),
                        null != s &&
                            (0, i.jsx)(f.E, {
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                lineClamp: 1,
                                children: g.intl.formatToPlainString(Q.default.YuNVPY, { gameName: s.name }),
                            }),
                    ],
                }),
            ],
        });
    return null == n.user
        ? (0, i.jsx)("div", { className: ev.D_, children: d })
        : (0, i.jsx)(J.A, {
              targetElementRef: r,
              user: n.user,
              guildId: t,
              children: (e) => (0, i.jsx)(Z.D, { ...e, innerRef: r, className: I()(ev.D_, ev.FB), children: d }),
          });
}
function eA(e) {
    let { rank: t } = e,
        l = g.intl.formatToPlainString(Q.default.I4JiAQ, { rank: t });
    switch (t) {
        case 1:
            return (0, i.jsx)("div", {
                className: ev.Tm,
                "aria-label": l,
                children: (0, i.jsx)("div", { className: ev.Xe }),
            });
        case 2:
            return (0, i.jsx)("div", {
                className: ev.Tm,
                "aria-label": l,
                children: (0, i.jsx)("div", { className: ev.XQ }),
            });
        case 3:
            return (0, i.jsx)("div", {
                className: ev.Tm,
                "aria-label": l,
                children: (0, i.jsx)("div", { className: ev.c9 }),
            });
        default:
            return (0, i.jsxs)("div", {
                className: ev.mH,
                children: [
                    (0, i.jsx)(b.A, { children: l }),
                    (0, i.jsx)(f.E, {
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
function eN(e) {
    let { stat: t } = e;
    switch (t) {
        case ee.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return (0, i.jsx)(en.CalendarIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case ee.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            return (0, i.jsx)(ei.ClockIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case ee.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return (0, i.jsx)(ea.GameControllerIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        default:
            return null;
    }
}
function eE(e) {
    let { entry: t, stat: l, name: n, onClick: a } = e,
        { primary: s, secondary: r } = el(t, l);
    return (0, i.jsxs)(Z.D, {
        className: ev.TH,
        "aria-label": g.intl.formatToPlainString(Q.default.o6mBdl, { name: n }),
        onClick: a,
        children: [
            (0, i.jsxs)("div", {
                className: ev.bf,
                children: [
                    (0, i.jsx)(eN, { stat: l }),
                    (0, i.jsx)(f.E, { variant: "text-sm/medium", color: "text-subtle", children: s }),
                ],
            }),
            null != r && (0, i.jsx)(f.E, { variant: "text-xs/medium", color: "text-muted", children: r }),
        ],
    });
}
function eb(e) {
    let { game: t, notched: l } = e;
    return (0, i.jsx)("span", {
        className: ev.rO,
        "aria-hidden": !0,
        children: (0, i.jsx)(ed.Ay, {
            mask: l ? ed.l8[24] : ed.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null != t.iconUrl
                    ? (0, i.jsx)("img", { className: ev.Gt, src: t.iconUrl, alt: "", "aria-hidden": !0 })
                    : (0, i.jsx)("span", {
                          className: ev.ct,
                          "aria-hidden": !0,
                          children: !t.isLoading && (0, i.jsx)(es._, { size: "xxs", color: r.A.colors.ICON_SUBTLE }),
                      }),
        }),
    });
}
function eS(e) {
    let { played: t, totalCount: l } = e,
        n = t.slice(0, 2),
        a = l - n.length;
    return (0, i.jsxs)("div", {
        className: ev.Nw,
        children: [
            n.map((e, t) => (0, i.jsx)(eb, { game: e, notched: a > 0 || t !== n.length - 1 }, `${e.id}-${t}`)),
            a > 0
                ? (0, i.jsx)("span", {
                      className: ev.rO,
                      children: (0, i.jsx)(ed.Ay, {
                          mask: ed.Ay.Masks.SQUIRCLE,
                          width: 24,
                          height: 24,
                          children: (0, i.jsx)("div", {
                              className: ev.p0,
                              children: (0, i.jsx)(f.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-subtle",
                                  children: g.intl.formatToPlainString(Q.default.JiMMEd, { count: a }),
                              }),
                          }),
                      }),
                  })
                : null,
        ],
    });
}
function ey(e) {
    let { played: t, totalCount: l, children: n } = e;
    return (0, i.jsx)(er.u, {
        body:
            0 === t.length
                ? g.intl.string(Q.default["7CrlYb"])
                : 1 === t.length
                  ? g.intl.formatToPlainString(Q.default.dbNpK0, { firstGame: t[0].name })
                  : 2 === t.length && 2 === l
                    ? g.intl.formatToPlainString(Q.default.tqVg4M, { firstGame: t[0].name, secondGame: t[1].name })
                    : g.intl.formatToPlainString(Q.default.bxcrSz, {
                          firstGame: t[0].name,
                          secondGame: t[1].name,
                          otherCount: l - 2,
                      }),
        asset: t.length > 0 ? (0, i.jsx)(eS, { played: t, totalCount: t.length }) : void 0,
        assetSize: t.length > 1 ? 43 : 24,
        children: n,
    });
}
function eC(e) {
    let { name: t, applicationIds: l, applicationCount: n, games: a, onClick: s } = e,
        r = eg(a, l);
    return (0, i.jsx)("div", {
        className: ev.ag,
        children: (0, i.jsx)(ey, {
            played: r,
            totalCount: n,
            children: (0, i.jsx)(Z.D, {
                className: I()(ev.Nw, ev.Dz),
                "aria-label": g.intl.formatToPlainString(Q.default.o6mBdl, { name: t }),
                onClick: s,
                children: (0, i.jsx)(eS, { played: r, totalCount: n }),
            }),
        }),
    });
}
var eT = l(189043);
function eR(e) {
    let { guildId: t, entries: l, stat: n, games: a, currentUserEntry: s, currentUserPillarRef: r } = e,
        d = {
            1: { column: eT.HC, pillar: eT.P5 },
            2: { column: eT.th, pillar: eT.Vk },
            3: { column: eT.Ou, pillar: eT.el },
        };
    return (0, i.jsx)("div", {
        className: eT.pI,
        role: "list",
        "aria-label": g.intl.string(Q.default.wKXLfQ),
        children: l.map((e, l) =>
            (0, i.jsx)(
                ek,
                {
                    guildId: t,
                    entry: e,
                    place: l + 1,
                    columnClassName: d[l + 1].column,
                    pillarClassName: d[l + 1].pillar,
                    stat: n,
                    games: a,
                    isCurrentUser: e === s,
                    currentUserPillarRef: e === s ? r : void 0,
                },
                e.user_id,
            ),
        ),
    });
}
function ek(e) {
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
        } = e,
        m = eg(c, l.application_ids),
        x = ej(t, l),
        { primary: h } = el(l, d),
        g = 1 === n ? y._3.SIZE_48 : y._3.SIZE_40,
        j = a.useRef(null),
        p = I()(eT.dR, { [eT.m$]: 1 === n, [eT.wd]: 2 === n, [eT.p0]: 3 === n }),
        v = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: eT.R3,
                    children: [
                        (0, i.jsx)(S.eu, {
                            size: g,
                            src: x.user?.getAvatarURL(t, (0, y.FT)(g)) ?? void 0,
                            "aria-hidden": !0,
                        }),
                        (0, i.jsx)("div", { className: p }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: I()(eT.DX, r),
                    children: [
                        (0, i.jsx)(C.D, {
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            lineClamp: 1,
                            className: eT.IY,
                            children: (0, i.jsx)(T.g, {
                                name: x.displayName,
                                colorString: x.member?.colorString ?? null,
                                colorStrings: x.roleColorStrings,
                            }),
                        }),
                        (0, i.jsx)(ey, {
                            played: m,
                            totalCount: l.application_count,
                            children: (0, i.jsx)(f.E, {
                                variant: "text-xs/medium",
                                color: "text-default",
                                tabularNumbers: !0,
                                children: h,
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
            null != x.user
                ? (0, i.jsx)(J.A, {
                      targetElementRef: j,
                      user: x.user,
                      guildId: t,
                      children: (e) => (0, i.jsx)(Z.D, { ...e, className: eT.fs, innerRef: j, children: v }),
                  })
                : (0, i.jsx)("div", { className: eT.fs, children: v }),
    });
}
var eD = l(652215),
    ew = l(219047);
function eM(e) {
    let t,
        l,
        n,
        { guildId: s, data: r, inModal: d = !1 } = e,
        { stat: c, entries: o, computed_at: u, week_start_ts: m } = r,
        x = null != u && new Date(u).getTime() - m * O.A.Millis.SECOND >= O.A.Millis.WEEK,
        h = (0, A.bG)([G.default], () => G.default.getCurrentUser()?.id),
        f = a.useMemo(() => o.find((e) => e.user_id === h), [o, h]),
        g = a.useMemo(() => {
            let e = o.slice(0, 20);
            return null == f || e.includes(f) ? e : [...e, f];
        }, [o, f]),
        j = a.useMemo(() => Array.from(new Set(g.map((e) => e.user_id))), [g]);
    (0, D.k6)(s, j);
    let p =
            ((t = a.useMemo(() => Array.from(new Set(g.flatMap((e) => e.application_ids))), [g])),
            (l = (0, em.A)(t)),
            (n = (0, A.yK)([eu.A], () => t.map((e) => eu.A.didFetchingApplicationFail(e)))),
            a.useMemo(() => {
                let e = new Map();
                return (
                    t.forEach((t, i) => {
                        let a = l[i];
                        e.set(
                            t,
                            null != a
                                ? { id: t, name: a.name, iconUrl: a.getIconURL(64) ?? void 0, isLoading: !1 }
                                : eh(t, !n[i]),
                        );
                    }),
                    e
                );
            }, [t, l, n])),
        { scrollerRef: v, userRowRef: _, floatingRowPosition: E } = B(),
        b = null != E,
        S = null == f && null != h,
        y = a.useCallback(
            (e) => {
                let t = e === f;
                return (0, i.jsx)(
                    e_,
                    {
                        guildId: s,
                        entry: e,
                        stat: c,
                        games: p,
                        isCurrentUser: t,
                        shouldDimForCurrentUser: t && b,
                        rowRef: t ? _ : void 0,
                    },
                    `${e.rank}-${e.user_id}`,
                );
            },
            [b, f, p, s, c, _],
        );
    if (K(r)) return (0, i.jsx)("div", { className: ew.Cm, children: (0, i.jsx)(X, { guildId: s }) });
    let C = x ? g.slice(3) : g,
        T = [g[0], g[1], g[2]];
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsxs)("div", {
                className: ew.SY,
                children: [
                    (0, i.jsxs)(N.d_, {
                        className: I()(ew.p_, { [ew.zE]: d, [ew.Ng]: S }),
                        ref: v,
                        children: [
                            x &&
                                (0, i.jsx)(eR, {
                                    guildId: s,
                                    entries: T,
                                    stat: c,
                                    games: p,
                                    currentUserEntry: f,
                                    currentUserPillarRef: _,
                                }),
                            C.map(y),
                        ],
                    }),
                    (null != f && null != E) || S
                        ? (0, i.jsx)("div", { className: I()(ew.Dz, "top" !== E || S ? ew.qV : ew.gN) })
                        : null,
                    null != f &&
                        null != E &&
                        (0, i.jsx)("div", {
                            className: I()(ew.z$, "top" === E ? ew.aG : ew.Ie),
                            children: (0, i.jsx)(e_, {
                                guildId: s,
                                entry: f,
                                stat: c,
                                games: p,
                                isCurrentUser: !0,
                                shouldDimForCurrentUser: !1,
                                isFloating: !0,
                            }),
                        }),
                    S && (0, i.jsx)(eP, { guildId: s }),
                ],
            }),
            (0, i.jsx)(eU, { computedAt: r.computed_at, inModal: d }),
        ],
    });
}
function eU(e) {
    let { computedAt: t, inModal: l } = e,
        n = (0, i.jsxs)("div", {
            className: ew.z8,
            children: [
                (0, i.jsx)(E.RefreshIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 }),
                (0, i.jsx)(f.E, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: g.intl.string(Q.default["/nma+a"]),
                }),
            ],
        });
    return null == t
        ? (0, i.jsx)("div", { className: ew.qr, children: n })
        : (0, i.jsx)("div", {
              className: I()(ew.qr, { [ew.zE]: l }),
              tabIndex: 0,
              children: (0, i.jsx)(c.m, {
                  text: g.intl.formatToPlainString(Q.default["1bt50t"], { timestamp: (0, L.mk)(new Date(t)) }),
                  position: "bottom",
                  children: n,
              }),
          });
}
function eP(e) {
    let { guildId: t } = e,
        n = M.tz.useSetting(),
        a = M.JG.useSetting(),
        s = (0, A.bG)([U.A], () => U.A.hasConsented(eD.YAq.PERSONALIZATION)),
        r = g.intl.string(Q.default.toxuHd),
        d = !1;
    ((!n || a.includes(t)) && ((r = g.intl.string(Q.default["8y885d"])), (d = !0)),
        s || ((r = g.intl.string(Q.default.mTARYx)), (d = !0)));
    let c = (0, A.bG)([G.default], () => G.default.getCurrentUser()),
        o = W.Ay.useName(t, void 0, c),
        u = (0, A.bG)([P.Ay], () => P.Ay.getMember(t, c?.id ?? "")),
        m = (0, w.gn)(t, c?.id, u?.colorStrings ?? null);
    return null == c
        ? null
        : (0, i.jsxs)("div", {
              className: ew.Xx,
              children: [
                  (0, i.jsxs)("div", {
                      className: ew.kd,
                      children: [
                          (0, i.jsxs)("div", {
                              className: ew.nk,
                              children: [
                                  (0, i.jsx)(b.A, { children: g.intl.string(Q.default["oHdW+u"]) }),
                                  (0, i.jsx)(f.E, {
                                      variant: "text-sm/semibold",
                                      color: "text-muted",
                                      "aria-hidden": !0,
                                      children: "?",
                                  }),
                              ],
                          }),
                          (0, i.jsx)(S.eu, {
                              size: y._3.SIZE_32,
                              src: c.getAvatarURL(t, (0, y.FT)(y._3.SIZE_32)) ?? void 0,
                              className: ew.SA,
                              "aria-hidden": !0,
                          }),
                          (0, i.jsxs)("div", {
                              className: ew.ko,
                              children: [
                                  (0, i.jsx)(C.D, {
                                      variant: "heading-sm/semibold",
                                      color: "text-default",
                                      lineClamp: 1,
                                      children: (0, i.jsx)(T.g, {
                                          name: o,
                                          colorString: u?.colorString ?? null,
                                          colorStrings: m,
                                      }),
                                  }),
                                  (0, i.jsx)("div", {
                                      className: ew.LF,
                                      children: (0, i.jsx)(f.E, {
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
                          className: ew.rl,
                          children: (0, i.jsx)(R.$, {
                              variant: "secondary",
                              size: "sm",
                              text: g.intl.string(Q.default.fMbgeZ),
                              onClick: () => {
                                  var e;
                                  return (
                                      (e = t),
                                      void (0, k.openModalLazy)(
                                          async () => {
                                              let { default: t } = await Promise.all([
                                                  l.e("120239"),
                                                  l.e("955410"),
                                                  l.e("812720"),
                                                  l.e("251400"),
                                                  l.e("203112"),
                                                  l.e("348567"),
                                                  l.e("264236"),
                                                  l.e("463095"),
                                                  l.e("371482"),
                                                  l.e("252264"),
                                                  l.e("143549"),
                                                  l.e("154630"),
                                                  l.e("610943"),
                                                  l.e("390213"),
                                                  l.e("759174"),
                                                  l.e("340346"),
                                                  l.e("421778"),
                                                  l.e("944602"),
                                                  l.e("863443"),
                                                  l.e("273084"),
                                                  l.e("821403"),
                                                  l.e("525416"),
                                                  l.e("210413"),
                                                  l.e("785888"),
                                                  l.e("758219"),
                                              ]).then(l.bind(l, 499334));
                                              return (l) => (0, i.jsx)(t, { ...l, guildId: e });
                                          },
                                          { modalKey: "guild-space-leaderboard-sharing" },
                                      )
                                  );
                              },
                          }),
                      }),
              ],
          });
}
var eG = l(224640),
    eL = l(20742),
    eO = l(515746);
function eW(e) {
    let { data: t } = e,
        l = (0, q.K)(t.stat),
        {
            ended: n,
            endDate: s,
            badgeLabel: r,
        } = (function (e) {
            let t = (e + O.A.Seconds.WEEK) * O.A.Millis.SECOND,
                [l, n] = a.useState(() => Date.now()),
                i = t - l,
                s = i <= 0,
                r = i - (Math.ceil(i / O.A.Millis.DAY) - 1) * O.A.Millis.DAY;
            return (
                (0, eo.A)(() => n(Date.now()), s ? null : r),
                a.useMemo(
                    () => ({
                        ended: s,
                        endDate: new Date(t),
                        badgeLabel: s
                            ? g.intl.string(Q.default["J8r/7L"])
                            : g.intl.formatToPlainString(Q.default["PuaR+2"], { days: Math.ceil(i / O.A.Millis.DAY) }),
                    }),
                    [s, t, i],
                )
            );
        })(t.week_start_ts),
        d = M.PZ.useSetting(),
        c = 2 > (0, L.m_)(s, new Date()) ? (0, L.mk)(s, !1, d) : (0, L.i$)(s, "L LT", d),
        o = n
            ? g.intl.format(Q.default.kG9XmM, { endedAt: c, nextStatName: (0, q.K)(t.next_stat).name })
            : g.intl.format(Q.default["X+VLqi"], { statQuestion: l.question, endsAt: c });
    return (0, i.jsx)(er.u, {
        title: l.name,
        body: o,
        position: "top",
        children: (0, i.jsx)("div", {
            className: eO.q,
            tabIndex: 0,
            children: (0, i.jsx)(f.E, {
                variant: "text-xs/semibold",
                color: n ? "text-muted" : "text-brand",
                children: r,
            }),
        }),
    });
}
var eB = l(460614);
function ez(e) {
    let { guildId: t, data: l, modalProps: n } = e;
    return (0, i.jsxs)(eG.d, {
        size: "lg",
        "aria-label": $(l),
        ...n,
        children: [
            (0, i.jsxs)("div", {
                className: eB.wx,
                children: [
                    (0, i.jsxs)("div", {
                        className: eB.LD,
                        children: [
                            (0, i.jsx)(d.TrophyIcon, { size: "xs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 }),
                            (0, i.jsx)(C.D, { variant: "heading-sm/medium", className: eB.DD, children: $(l) }),
                            (0, i.jsx)(eW, { data: l }),
                        ],
                    }),
                    (0, i.jsx)(eL.s_, {}),
                ],
            }),
            (0, i.jsx)("div", { className: eB.rf, children: (0, i.jsx)(eM, { guildId: t, data: l, inModal: !0 }) }),
        ],
    });
}
var eF = l(452027),
    eH = l(103557),
    eY = l(825484),
    eq = l(95477),
    eK = l(241326),
    e$ = l(683071),
    eQ = l(2553),
    eV = l(405810),
    eX = l(967198),
    eZ = l(488428),
    eJ = l(776231);
let e0 = (0, l(676279).cy)();
function e1(e, t, l) {
    let n = l.startsWith("a_"),
        i = n ? (e0 ? "webp" : "gif") : e0 ? "webp" : "jpg",
        { CDN_HOST: a, API_ENDPOINT: s } = window.GLOBAL_ENV,
        r = eD.Rsh.GUILD_SPACE_IMAGE_TEXT_WIDGET_IMAGE(e, t, l, i),
        d = null != a ? `https://${a}${r}` : location.protocol + s + r,
        c = { size: (0, eJ.kr)(500 * (0, eJ.mZ)()) };
    return (
        "jpg" === i && (c.quality = "lossless"), "webp" === i && n && (c.animated = !0), (d += `?${eZ.stringify(c)}`)
    );
}
var e2 = l(868602),
    e3 = l(445187),
    e4 = l(650583),
    e6 = l(684343);
function e7(e) {
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
                    case e4.dh.ARROW_RIGHT:
                    case e4.dh.ARROW_DOWN:
                        t = (a + 1) % i.length;
                        break;
                    case e4.dh.ARROW_LEFT:
                    case e4.dh.ARROW_UP:
                        t = (a - 1 + i.length) % i.length;
                        break;
                    case e4.dh.HOME:
                        t = 0;
                        break;
                    case e4.dh.END:
                        t = i.length - 1;
                        break;
                    default:
                        return;
                }
                (e.preventDefault(), i[t]?.focus());
            }
        }, []);
    return (0, i.jsx)("div", {
        className: e6.vR,
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
                    className: e6.Mf,
                    "aria-selected": t,
                    "aria-controls": s,
                    tabIndex: t ? 0 : -1,
                    onClick: () => d(e.id),
                    onKeyDown: c,
                    children: (0, i.jsx)(f.E, {
                        className: e6.Pf,
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
var e8 = l(831544),
    e5 = l(28863),
    e9 = l(148166),
    te = l(427209),
    tt = l(294454),
    tl = l(605810);
function tn(e) {
    let { target: t, tabIndex: n } = e;
    return (0, i.jsx)(c.m, {
        text: g.intl.string(g.t.RDE0Sc),
        ariaHidden: !0,
        children: (0, i.jsx)("button", {
            type: "button",
            className: tl.ql,
            tabIndex: n,
            "aria-label": g.intl.string(g.t.Ej3B3Y),
            onClick: () => {
                (0, k.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            l.e("325522"),
                            l.e("401317"),
                            l.e("862735"),
                            l.e("476988"),
                            l.e("571702"),
                            l.e("552653"),
                            l.e("311580"),
                            l.e("174554"),
                            l.e("116815"),
                            l.e("82389"),
                            l.e("812720"),
                            l.e("891089"),
                            l.e("196063"),
                            l.e("118864"),
                            l.e("441674"),
                            l.e("419656"),
                            l.e("67702"),
                            l.e("702154"),
                            l.e("85427"),
                            l.e("275363"),
                            l.e("560570"),
                            l.e("334324"),
                            l.e("64769"),
                            l.e("992956"),
                            l.e("880150"),
                            l.e("490743"),
                            l.e("7452"),
                            l.e("529787"),
                            l.e("309499"),
                            l.e("691398"),
                            l.e("266201"),
                            l.e("752704"),
                            l.e("56606"),
                            l.e("611585"),
                            l.e("227652"),
                            l.e("234017"),
                            l.e("629972"),
                            l.e("40791"),
                            l.e("358404"),
                            l.e("245758"),
                            l.e("561672"),
                            l.e("977306"),
                            l.e("722514"),
                            l.e("847980"),
                            l.e("957251"),
                            l.e("677624"),
                            l.e("933373"),
                            l.e("201074"),
                            l.e("879641"),
                            l.e("720210"),
                            l.e("98857"),
                            l.e("495628"),
                            l.e("390430"),
                            l.e("326605"),
                            l.e("644289"),
                            l.e("460915"),
                            l.e("675582"),
                            l.e("79324"),
                            l.e("192388"),
                            l.e("165994"),
                            l.e("652091"),
                            l.e("996907"),
                            l.e("657503"),
                            l.e("377989"),
                            l.e("797845"),
                            l.e("659500"),
                            l.e("491899"),
                            l.e("867721"),
                            l.e("567999"),
                            l.e("156032"),
                            l.e("267526"),
                            l.e("377265"),
                            l.e("400088"),
                            l.e("35328"),
                            l.e("915170"),
                            l.e("296956"),
                            l.e("334168"),
                            l.e("582012"),
                            l.e("468787"),
                            l.e("650387"),
                            l.e("195719"),
                            l.e("251400"),
                            l.e("678906"),
                            l.e("358931"),
                            l.e("168248"),
                            l.e("533240"),
                            l.e("962953"),
                            l.e("434168"),
                            l.e("59565"),
                            l.e("456885"),
                            l.e("340363"),
                            l.e("459086"),
                            l.e("61531"),
                            l.e("633761"),
                            l.e("205035"),
                            l.e("911680"),
                            l.e("267732"),
                            l.e("225307"),
                            l.e("332165"),
                            l.e("618416"),
                            l.e("524434"),
                            l.e("90343"),
                            l.e("769281"),
                            l.e("424199"),
                            l.e("342551"),
                            l.e("247932"),
                            l.e("720157"),
                            l.e("645499"),
                            l.e("777489"),
                            l.e("188941"),
                            l.e("481647"),
                            l.e("776602"),
                            l.e("140402"),
                            l.e("349619"),
                            l.e("264236"),
                            l.e("543039"),
                            l.e("117268"),
                            l.e("740428"),
                            l.e("832817"),
                            l.e("398125"),
                            l.e("221825"),
                            l.e("416143"),
                            l.e("653849"),
                            l.e("930758"),
                            l.e("234236"),
                            l.e("295366"),
                            l.e("844695"),
                            l.e("948804"),
                            l.e("988077"),
                            l.e("593600"),
                            l.e("431011"),
                            l.e("561216"),
                            l.e("707826"),
                            l.e("141432"),
                            l.e("475166"),
                            l.e("829177"),
                            l.e("199999"),
                            l.e("106943"),
                            l.e("232551"),
                            l.e("892340"),
                            l.e("183776"),
                            l.e("611523"),
                            l.e("313681"),
                            l.e("588940"),
                            l.e("772493"),
                            l.e("401518"),
                            l.e("444376"),
                            l.e("170653"),
                            l.e("147786"),
                            l.e("770697"),
                            l.e("318546"),
                            l.e("123216"),
                            l.e("854461"),
                            l.e("936320"),
                            l.e("190889"),
                            l.e("790244"),
                            l.e("718573"),
                            l.e("418943"),
                            l.e("784103"),
                            l.e("317225"),
                            l.e("390098"),
                            l.e("499941"),
                            l.e("776750"),
                            l.e("34472"),
                            l.e("757364"),
                            l.e("53374"),
                            l.e("710638"),
                            l.e("696123"),
                            l.e("236676"),
                            l.e("631825"),
                            l.e("696443"),
                            l.e("87306"),
                            l.e("361626"),
                            l.e("731390"),
                            l.e("799657"),
                            l.e("252574"),
                            l.e("466322"),
                            l.e("747017"),
                            l.e("165595"),
                            l.e("894747"),
                            l.e("146248"),
                            l.e("715391"),
                            l.e("445421"),
                            l.e("126780"),
                            l.e("761935"),
                            l.e("592731"),
                            l.e("511527"),
                            l.e("463095"),
                            l.e("478476"),
                            l.e("103730"),
                            l.e("763070"),
                            l.e("371482"),
                            l.e("536200"),
                            l.e("193158"),
                            l.e("919307"),
                            l.e("502018"),
                            l.e("757598"),
                            l.e("400954"),
                            l.e("61129"),
                            l.e("249366"),
                            l.e("105136"),
                            l.e("115754"),
                            l.e("728633"),
                            l.e("314805"),
                            l.e("173547"),
                            l.e("599141"),
                            l.e("757238"),
                            l.e("398082"),
                            l.e("515572"),
                            l.e("225990"),
                            l.e("858821"),
                            l.e("346102"),
                            l.e("636126"),
                            l.e("133902"),
                            l.e("562168"),
                            l.e("831219"),
                            l.e("610449"),
                            l.e("123353"),
                            l.e("561279"),
                            l.e("401590"),
                            l.e("498215"),
                            l.e("8563"),
                            l.e("416311"),
                            l.e("377766"),
                            l.e("148660"),
                            l.e("30517"),
                            l.e("577084"),
                            l.e("252264"),
                            l.e("836545"),
                            l.e("784041"),
                            l.e("843719"),
                            l.e("858514"),
                            l.e("344265"),
                            l.e("237834"),
                            l.e("869546"),
                            l.e("199328"),
                            l.e("444795"),
                            l.e("455924"),
                            l.e("462276"),
                            l.e("88160"),
                            l.e("403813"),
                            l.e("177104"),
                            l.e("844780"),
                            l.e("979630"),
                            l.e("236946"),
                            l.e("935948"),
                            l.e("692639"),
                            l.e("890480"),
                            l.e("440963"),
                            l.e("565617"),
                            l.e("766031"),
                            l.e("394317"),
                            l.e("744385"),
                            l.e("84755"),
                            l.e("304329"),
                            l.e("256831"),
                        ]).then(l.bind(l, 99266));
                        return function (l) {
                            return (0, i.jsx)(e, { ...l, target: t });
                        };
                    },
                    { stackingBehavior: "stack", modalKey: tt.aU },
                );
            },
            children: (0, i.jsx)(te.A, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
        }),
    });
}
var ti = l(272984);
function ta(e) {
    let { artist: t, itemProps: l } = e,
        n = null != t.artist_image_hash ? ti.RQ.IMAGE(t.artist_image_hash) : null,
        s = a.useMemo(
            () => ({
                kind: "artist",
                shareUrl: ti.RQ.WEB_OPEN(ti.M0.ARTIST, t.artist_external_id),
                title: t.artist_name ?? t.artist_external_id,
                subtitle: null,
                imageUrl: n,
            }),
            [t.artist_external_id, t.artist_name, n],
        ),
        r = (0, i.jsx)(e9.R, { src: n, isCircular: !0, FallbackIcon: e8.MicrophoneIcon });
    return null == t.artist_name
        ? (0, i.jsx)("div", { className: tl.Nr, children: (0, i.jsx)("div", { ...l, className: tl.MT, children: r }) })
        : (0, i.jsxs)("div", {
              className: tl.Nr,
              children: [
                  (0, i.jsxs)(e5.Anchor, {
                      ...l,
                      className: tl.MT,
                      href: s.shareUrl,
                      useDefaultUnderlineStyles: !1,
                      children: [
                          r,
                          (0, i.jsx)("span", {
                              className: tl.Qq,
                              children: (0, i.jsx)(f.E, {
                                  className: tl.DD,
                                  tag: "span",
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  lineClamp: 2,
                                  children: t.artist_name,
                              }),
                          }),
                      ],
                  }),
                  (0, i.jsx)(tn, { target: s, tabIndex: l.tabIndex }),
              ],
          });
}
var ts = l(872351),
    tr = l(708988),
    td = l(104171),
    tc = l(628137);
let to = "none",
    tu = (e, t) => (0, i.jsx)(f.E, { tag: "span", variant: "text-sm/semibold", color: "text-default", children: e }, t);
function tm(e) {
    return e;
}
function tx(e) {
    return e?.direction ?? to;
}
function th(e) {
    return g.intl.formatToPlainString(Q.default["7X+3f8"], { count: e });
}
function tf(e) {
    let t = e?.plays_change_percent;
    if (null == t) return null;
    let l = Math.round(Math.abs(t));
    return 0 === l
        ? null
        : { direction: t > 0 ? "up" : "down", label: g.intl.formatToPlainString(Q.default["h+LUpk"], { percent: l }) };
}
var tg = l(633099);
function tj(e) {
    let { trend: t } = e,
        l = "up" === t.direction ? ts.z : tr.M;
    return (0, i.jsxs)("span", {
        className: I()(tg.GW, { [tg.$J]: "up" === t.direction, [tg.KW]: "down" === t.direction }),
        children: [
            (0, i.jsx)(l, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
            (0, i.jsx)(f.E, { tag: "span", variant: "text-sm/medium", color: "none", children: t.label }),
        ],
    });
}
function tp(e) {
    var t;
    let { guildId: l, song: n } = e,
        s = a.useMemo(() => (n.facepile_user_ids ?? []).slice(0, 3), [n.facepile_user_ids]);
    (0, D.k6)(l, s);
    let r = (0, A.yK)([G.default], () => s.map((e) => G.default.getUser(e)), [s]),
        d = a.useMemo(() => r.filter((e) => null != e), [r]);
    if (0 === d.length) return null;
    let c = n.unique_listeners - d.length;
    return (0, i.jsx)("span", {
        className: tg.WM,
        role: "group",
        "aria-label":
            ((t = n.unique_listeners),
            g.intl.formatToPlainString(Q.default.AzIhRB, { count: t, trend: to, countHook: tm })),
        children: (0, i.jsx)(td.Ay, {
            users: d,
            guildId: l,
            size: td.DN.SIZE_24,
            max: d.length,
            count: n.unique_listeners,
            hideMoreUsers: c <= 0,
            renderMoreUsers: () =>
                (0, i.jsx)("span", {
                    className: tg.ju,
                    children: (0, i.jsx)(f.E, {
                        tag: "span",
                        variant: "text-xs/semibold",
                        color: "text-subtle",
                        children: g.intl.formatToPlainString(Q.default.bFIg0R, { count: c }),
                    }),
                }),
        }),
    });
}
function tv(e) {
    let { isCompact: t, headline: l, detail: n, trend: a } = e;
    return null == l && null == n && null == a
        ? null
        : (0, i.jsx)("div", {
              className: I()(tg.yp, { [tg.Fl]: t }),
              children: (0, i.jsxs)("div", {
                  className: tg.QD,
                  children: [
                      null != l && (0, i.jsx)(f.E, { variant: "text-md/semibold", color: "text-default", children: l }),
                      (0, i.jsxs)("div", {
                          className: tg._0,
                          children: [
                              null != n &&
                                  (0, i.jsx)(f.E, {
                                      tag: "span",
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: n,
                                  }),
                              null != a && (0, i.jsx)(tj, { trend: a }),
                          ],
                      }),
                  ],
              }),
          });
}
function t_(e) {
    var t;
    let { guildId: l, isCompact: n, canShowEmbed: a, song: s } = e,
        r = tf(s);
    return (0, i.jsxs)("div", {
        className: I()(tg.yp, { [tg.Fl]: n }),
        children: [
            a && (0, i.jsx)(tc.A, { className: tg.aF, resourceType: ti.M0.TRACK, resourceId: s.track_external_id }),
            (0, i.jsxs)("div", {
                className: tg.QD,
                children: [
                    (0, i.jsx)(tp, { guildId: l, song: s }),
                    (0, i.jsxs)("div", {
                        className: tg._0,
                        children: [
                            (0, i.jsx)(f.E, {
                                tag: "span",
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children:
                                    ((t = s.plays),
                                    g.intl.format(Q.default["7hHUIS"], { count: t, trend: tx(r), countHook: tu })),
                            }),
                            null != r && (0, i.jsx)(tj, { trend: r }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var tI = l(197935),
    tA = l(915734);
function tN(e) {
    let { label: t, items: l, isCompact: n, getItemKey: a, renderItem: s } = e;
    return (0, i.jsx)("div", {
        className: I()(tA.Dk, { [tA.yI]: n }),
        children: (0, i.jsx)(tI.A, {
            items: l,
            getItemKey: a,
            renderItem: s,
            gap: 8,
            edgeFade: 40,
            actionsClassName: tA.o1,
            "aria-label": t,
        }),
    });
}
var tE = (((n = {}).TOP_SONGS = "top_songs"), (n.TOP_ARTISTS = "top_artists"), (n.TOP_LISTENERS = "top_listeners"), n);
let tb = ["top_songs", "top_artists", "top_listeners"];
function tS(e) {
    switch (e) {
        case "top_songs":
            return g.intl.string(Q.default.KgeEtx);
        case "top_artists":
            return g.intl.string(Q.default.RYxWTS);
        case "top_listeners":
            return g.intl.string(Q.default.KO73KB);
    }
}
function ty(e, t) {
    return `popular-music-tab-${e}-${t}`;
}
function tC(e) {
    return `popular-music-panel-${e}`;
}
var tT = l(742452);
function tR(e) {
    return e.artist_external_id;
}
function tk(e, t) {
    return (0, i.jsx)(ta, { artist: e, itemProps: t });
}
function tD(e) {
    var t, l;
    let n,
        a,
        s,
        { isCompact: r, data: d } = e;
    if (0 === d.ranked_artists.length) return null;
    let c = tf(d.summary);
    return (0, i.jsxs)("div", {
        className: tT.U,
        children: [
            (0, i.jsx)(tN, {
                label: tS(tE.TOP_ARTISTS),
                items: d.ranked_artists,
                isCompact: r,
                getItemKey: tR,
                renderItem: tk,
            }),
            (0, i.jsx)(tv, {
                isCompact: r,
                headline:
                    ((t = d.summary),
                    null == (n = t?.distinct_songs) || n < 1
                        ? null
                        : g.intl.formatToPlainString(Q.default.W8etVA, { count: n })),
                detail:
                    ((l = d.summary),
                    (a = l?.listener_count),
                    (s = l?.distinct_artists),
                    null == a || a < 1 || null == s || s < 1
                        ? null
                        : g.intl.format(Q.default.yGqf0D, {
                              memberCount: a,
                              artistCount: s,
                              trend: tx(c),
                              memberCountHook: tu,
                              artistCountHook: tu,
                          })),
                trend: c,
            }),
        ],
    });
}
var tw = l(109487),
    tM = l(279543);
function tU(e) {
    let { isCompact: t } = e;
    return (0, i.jsxs)("div", {
        className: tM.qr,
        children: [
            (0, i.jsxs)("div", {
                className: tM.Os,
                children: [
                    (0, i.jsx)("span", {
                        className: tM.Kk,
                        children: (0, i.jsx)(E.RefreshIcon, {
                            size: "xxs",
                            color: r.A.colors.ICON_SUBTLE,
                            "aria-hidden": !0,
                        }),
                    }),
                    (0, i.jsx)(f.E, {
                        className: tM.Pf,
                        tag: "span",
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: g.intl.string(Q.default["3/DOFo"]),
                    }),
                ],
            }),
            (0, i.jsxs)(e5.Anchor, {
                className: tM.al,
                href: ti.RQ.WEB_HOME,
                "aria-label": g.intl.string(Q.default["jUr+wF"]),
                children: [
                    (0, i.jsx)("span", {
                        className: tM.Kk,
                        children: (0, i.jsx)(tw.L, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    }),
                    !t &&
                        (0, i.jsx)(f.E, {
                            className: tM.G2,
                            tag: "span",
                            variant: "text-xs/medium",
                            color: "none",
                            children: g.intl.string(Q.default.ZdPp2q),
                        }),
                ],
            }),
        ],
    });
}
var tP = l(65154),
    tG = l(329177),
    tL = l(242226);
function tO(e) {
    let t,
        l,
        n,
        a,
        {
            guildId: s,
            userId: d,
            listener: c,
            rank: o,
            isCompact: u,
            isCurrentUser: m,
            shouldDimForCurrentUser: x,
            isFloating: h = !1,
            rowRef: j,
        } = e,
        p =
            ((t = (0, A.bG)([G.default], () => G.default.getUser(d), [d])),
            (l = (0, A.bG)([P.Ay], () => P.Ay.getMember(s, d), [s, d])),
            (n = (0, w.gn)(s, d, l?.colorStrings ?? null)),
            (a = W.Ay.useName(s, void 0, t)),
            {
                user: t,
                colorString: l?.colorString ?? null,
                roleColorStrings: n,
                displayName: m ? g.intl.formatToPlainString(Q.default.subXXA, { name: a }) : a,
            }),
        { user: v } = p;
    return null == v
        ? null
        : (0, i.jsxs)("div", {
              ref: j,
              "aria-hidden": h,
              inert: h,
              className: I()(tL.nM, { [tL.Bh]: m && !h, [tL.lR]: x }),
              children: [
                  (0, i.jsx)(tW, { guildId: s, user: v, identity: p, rank: o, lastTrack: c?.last_track ?? null }),
                  null != c &&
                      (0, i.jsxs)("div", {
                          className: I()(tL.Mx, { [tL.dA]: u }),
                          children: [
                              (0, i.jsx)(tP.S, { size: "xxs", color: r.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                              (0, i.jsx)(f.E, {
                                  variant: "text-sm/medium",
                                  color: "text-strong",
                                  children: th(c.plays),
                              }),
                          ],
                      }),
                  null != c &&
                      !u &&
                      (0, i.jsx)(tH, { artists: c.recent_artists ?? [], artistCount: c.artist_count ?? null }),
              ],
          });
}
function tW(e) {
    let { guildId: t, user: l, identity: n, rank: s, lastTrack: r } = e,
        d = a.useRef(null);
    return (0, i.jsx)(J.A, {
        targetElementRef: d,
        user: l,
        guildId: t,
        children: (e) =>
            (0, i.jsxs)(Z.D, {
                ...e,
                innerRef: d,
                className: tL.D_,
                children: [
                    null != s &&
                        (0, i.jsx)(b.A, { children: g.intl.formatToPlainString(Q.default.I4JiAQ, { rank: s }) }),
                    (0, i.jsxs)("span", {
                        className: tL.R3,
                        children: [
                            (0, i.jsx)(S.eu, {
                                size: y._3.SIZE_32,
                                src: l.getAvatarURL(t, (0, y.FT)(y._3.SIZE_32)) ?? void 0,
                                "aria-hidden": !0,
                            }),
                            1 === s &&
                                (0, i.jsx)("span", {
                                    className: tL.ie,
                                    "aria-hidden": !0,
                                    children: (0, i.jsx)(tG.CrownIcon, { size: "xxs", color: "currentColor" }),
                                }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tL.Dc,
                        children: [
                            (0, i.jsx)(C.D, {
                                variant: "heading-sm/semibold",
                                color: "text-default",
                                lineClamp: 1,
                                children: (0, i.jsx)(T.g, {
                                    name: n.displayName,
                                    colorString: n.colorString,
                                    colorStrings: n.roleColorStrings,
                                }),
                            }),
                            (0, i.jsx)(tz, { track: r }),
                        ],
                    }),
                ],
            }),
    });
}
function tB(e, t) {
    return (0, i.jsx)(f.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: e }, t);
}
function tz(e) {
    let { track: t } = e,
        l = t?.track_title;
    if (null == l) return null;
    let n = t?.artist_name;
    return (0, i.jsx)(f.E, {
        variant: "text-xs/medium",
        color: "text-subtle",
        lineClamp: 1,
        children:
            null != n
                ? g.intl.format(Q.default.QqaqBg, { trackTitle: l, artistName: n, highlightHook: tB })
                : g.intl.format(Q.default.ZMJ8Mt, { trackTitle: l, highlightHook: tB }),
    });
}
function tF(e) {
    let { artist: t, notched: l } = e,
        [n, s] = a.useState(!1),
        d = null != t.artist_image_hash ? ti.RQ.IMAGE(t.artist_image_hash) : null;
    return (0, i.jsx)("span", {
        className: tL.sG,
        children: (0, i.jsx)(ed.Ay, {
            mask: l ? ed.l8[24] : ed.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null == d || n
                    ? (0, i.jsx)("span", {
                          className: tL.Ql,
                          children: (0, i.jsx)(e8.MicrophoneIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE }),
                      })
                    : (0, i.jsx)("img", { className: tL.v2, src: d, alt: "", loading: "lazy", onError: () => s(!0) }),
        }),
    });
}
function tH(e) {
    let { artists: t, artistCount: l } = e,
        n = t.slice(0, 3),
        a = (l ?? t.length) - n.length;
    return (0, i.jsx)("div", {
        className: tL.Rh,
        "aria-hidden": !0,
        children:
            n.length > 0 &&
            (0, i.jsxs)("div", {
                className: tL.W$,
                children: [
                    n.map((e, t) =>
                        (0, i.jsx)(
                            tF,
                            { artist: e, notched: a > 0 || t !== n.length - 1 },
                            `${e.artist_external_id}-${e.artist_image_hash}`,
                        ),
                    ),
                    a > 0 &&
                        (0, i.jsx)("span", {
                            className: tL.sG,
                            children: (0, i.jsx)(ed.Ay, {
                                mask: ed.Ay.Masks.SQUIRCLE,
                                width: 24,
                                height: 24,
                                children: (0, i.jsx)("div", {
                                    className: tL.ag,
                                    children: (0, i.jsx)(f.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: g.intl.formatToPlainString(Q.default.bFIg0R, { count: a }),
                                    }),
                                }),
                            }),
                        }),
                ],
            }),
    });
}
var tY = l(897130);
function tq(e) {
    let { guildId: t, isCompact: l, data: n } = e,
        s = n.top_listeners,
        r = (0, A.bG)([G.default], () => G.default.getCurrentUser()?.id),
        d = s.findIndex((e) => e.user_id === r),
        c = -1 === d ? null : s[d],
        o = a.useMemo(() => s.map((e) => e.user_id), [s]);
    (0, D.k6)(t, o);
    let { scrollerRef: u, userRowRef: m, floatingRowPosition: x } = B(),
        h = null != x;
    return 0 === s.length
        ? null
        : (0, i.jsxs)("div", {
              className: tY.SY,
              children: [
                  (0, i.jsxs)(N.d_, {
                      className: tY.p_,
                      ref: u,
                      children: [
                          s.map((e, n) => {
                              let a = e.user_id === r;
                              return (0, i.jsx)(
                                  tO,
                                  {
                                      guildId: t,
                                      userId: e.user_id,
                                      listener: e,
                                      rank: n + 1,
                                      isCompact: l,
                                      isCurrentUser: a,
                                      shouldDimForCurrentUser: a && h,
                                      rowRef: a ? m : void 0,
                                  },
                                  e.user_id,
                              );
                          }),
                          null != r &&
                              null == c &&
                              (0, i.jsx)(tO, {
                                  guildId: t,
                                  userId: r,
                                  listener: null,
                                  rank: null,
                                  isCompact: l,
                                  isCurrentUser: !0,
                                  shouldDimForCurrentUser: h,
                                  rowRef: m,
                              }),
                      ],
                  }),
                  null != r &&
                      null != x &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", { className: "top" === x ? tY.gN : tY.qV }),
                              (0, i.jsx)("div", {
                                  className: I()(tY.z$, "top" === x ? tY.aG : tY.Ie),
                                  children: (0, i.jsx)(tO, {
                                      guildId: t,
                                      userId: r,
                                      listener: c,
                                      rank: -1 === d ? null : d + 1,
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
var tK = l(432017),
    t$ = l(362704),
    tQ = l(782134);
function tV(e) {
    let { song: t, isSelected: l, onSelect: n, itemProps: s } = e,
        r = null != t.cover_art_hash ? ti.RQ.IMAGE(t.cover_art_hash) : null,
        d = a.useMemo(
            () => ({
                kind: "song",
                shareUrl: ti.RQ.WEB_OPEN(ti.M0.TRACK, t.track_external_id),
                title: t.track_title ?? t.track_external_id,
                subtitle: t.artist_name,
                imageUrl: r,
            }),
            [t.track_external_id, t.track_title, t.artist_name, r],
        );
    return (0, i.jsxs)("div", {
        className: tl.Nr,
        children: [
            (0, i.jsxs)("button", {
                ...s,
                type: "button",
                className: I()(tl.MT, { [tl.tY]: l }),
                "aria-pressed": l,
                onClick: () => n(t.track_external_id),
                children: [
                    (0, i.jsxs)(e9.R, {
                        src: r,
                        isCircular: !1,
                        FallbackIcon: tK.T,
                        children: [
                            l &&
                                (0, i.jsx)("span", {
                                    className: I()(tl.Lw, tl.Kp),
                                    "aria-hidden": !0,
                                    children: (0, i.jsx)(t$.Y, { size: "md", color: "currentColor" }),
                                }),
                            (0, i.jsxs)("span", {
                                className: I()(tl.Lw, tl.vY),
                                children: [
                                    (0, i.jsx)(tQ.PlayIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                                    (0, i.jsx)(f.E, {
                                        tag: "span",
                                        variant: "text-xs/semibold",
                                        color: "none",
                                        children: th(t.plays),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    null != t.track_title &&
                        (0, i.jsxs)("span", {
                            className: tl.Qq,
                            children: [
                                (0, i.jsx)(f.E, {
                                    className: tl.DD,
                                    tag: "span",
                                    variant: "text-sm/semibold",
                                    color: "text-default",
                                    lineClamp: 1,
                                    children: t.track_title,
                                }),
                                null != t.artist_name &&
                                    (0, i.jsx)(f.E, {
                                        className: tl.VA,
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
            (0, i.jsx)(tn, { target: d, tabIndex: s.tabIndex }),
        ],
    });
}
var tX = l(196765),
    tZ = l(770178);
let tJ = { view: "top_songs", isCompact: !1, canShowEmbed: !1, selectedTrackId: null },
    t0 = (0, tX.v)(() => ({ byWidgetId: {} }));
function t1(e, t) {
    t0.setState((l) => {
        let n = l.byWidgetId[e] ?? tJ;
        return { byWidgetId: { ...l.byWidgetId, [e]: { ...n, ...t } } };
    });
}
function t2(e) {
    return t0((t) => t.byWidgetId[e]?.view ?? tJ.view);
}
function t3(e) {
    return t0((t) => t.byWidgetId[e]?.isCompact ?? tJ.isCompact);
}
function t4(e) {
    return t0((t) => t.byWidgetId[e]?.selectedTrackId ?? tJ.selectedTrackId);
}
function t6(e, t) {
    (t0.getState().byWidgetId[e] ?? tJ).view !== t && t1(e, { view: t, selectedTrackId: null });
}
function t7(e) {
    return e.track_external_id;
}
function t8(e) {
    var t;
    let l,
        { guildId: n, widgetId: s, isCompact: r, data: d } = e,
        c = t4(s),
        o = t0((e) => e.byWidgetId[s]?.canShowEmbed ?? tJ.canShowEmbed),
        u = a.useCallback(
            (e) => {
                let t;
                return (
                    (t = t0.getState().byWidgetId[s]?.selectedTrackId ?? null),
                    void t1(s, { selectedTrackId: t === e ? null : e })
                );
            },
            [s],
        ),
        m = a.useCallback(
            (e, t) => (0, i.jsx)(tV, { song: e, isSelected: e.track_external_id === c, onSelect: u, itemProps: t }),
            [c, u],
        );
    if (0 === d.ranked_songs.length) return null;
    let x = d.ranked_songs.find((e) => e.track_external_id === c) ?? null,
        h = tf(d.summary);
    return (0, i.jsxs)("div", {
        className: tT.U,
        children: [
            (0, i.jsx)(tN, {
                label: tS(tE.TOP_SONGS),
                items: d.ranked_songs,
                isCompact: r,
                getItemKey: t7,
                renderItem: m,
            }),
            null != x
                ? (0, i.jsx)(t_, { guildId: n, isCompact: r, canShowEmbed: o, song: x })
                : (0, i.jsx)(tv, {
                      isCompact: r,
                      headline: (function (e) {
                          let t = e?.listening_time_ms;
                          if (null == t) return null;
                          let l = Math.round(t / O.A.Millis.MINUTE);
                          return l < 1 ? null : g.intl.formatToPlainString(Q.default["+5b01q"], { minutes: l });
                      })(d.summary),
                      detail:
                          ((t = d.summary),
                          null == (l = t?.listener_count) || l < 1
                              ? null
                              : g.intl.format(Q.default.AzIhRB, { count: l, trend: tx(h), countHook: tu })),
                      trend: h,
                  }),
        ],
    });
}
var t5 = l(597601),
    t9 = l(980707),
    le = l(477782),
    lt = l(922016),
    ll = l(847374),
    ln = l(914173);
function li(e) {
    let { navId: t, options: l, selectedId: n, label: a, onSelect: s, onClose: r } = e;
    return (0, i.jsx)(t9.W, {
        navId: t,
        "aria-label": a,
        onClose: r,
        onSelect: void 0,
        children: l.map((e) =>
            (0, i.jsx)(
                le.iD,
                {
                    id: `${t}-${e.id}`,
                    group: t,
                    label: e.label,
                    checked: e.id === n,
                    action: () => {
                        (s(e.id), r());
                    },
                },
                e.id,
            ),
        ),
    });
}
function la(e) {
    let { navId: t, options: l, selectedId: n, menuLabel: s, triggerLabel: d, onSelect: c } = e,
        [o, u] = a.useState(!1),
        m = a.useRef(null),
        x = l.find((e) => e.id === n);
    return null == x
        ? null
        : (0, i.jsx)(lt.Y, {
              targetElementRef: m,
              position: "bottom",
              align: "left",
              shouldShow: o,
              onRequestOpen: () => u(!0),
              onRequestClose: () => u(!1),
              renderPopout: (e) => {
                  let { closePopout: a } = e;
                  return (0, i.jsx)(li, { navId: t, options: l, selectedId: n, label: s, onSelect: c, onClose: a });
              },
              children: (e) =>
                  (0, i.jsx)(C.D, {
                      variant: "heading-sm/medium",
                      className: ln.R_,
                      children: (0, i.jsxs)("button", {
                          ...e,
                          ref: m,
                          type: "button",
                          className: ln.hZ,
                          "aria-haspopup": "menu",
                          "aria-label": d,
                          children: [
                              null != x.icon && (0, i.jsx)("span", { className: ln.Kk, children: x.icon }),
                              (0, i.jsx)(f.E, {
                                  className: ln.DD,
                                  tag: "span",
                                  variant: "heading-sm/medium",
                                  color: "text-default",
                                  children: x.label,
                              }),
                              (0, i.jsx)("span", {
                                  className: ln.Kk,
                                  children: (0, i.jsx)(ll.a, {
                                      size: "xs",
                                      color: r.A.colors.ICON_DEFAULT,
                                      "aria-hidden": !0,
                                  }),
                              }),
                          ],
                      }),
                  }),
          });
}
var ls = l(871107);
function lr(e) {
    let { view: t } = e,
        l = r.A.colors.ICON_DEFAULT;
    switch (t) {
        case tE.TOP_ARTISTS:
            return (0, i.jsx)(e8.MicrophoneIcon, { size: "xs", color: l, "aria-hidden": !0 });
        case tE.TOP_LISTENERS:
            return (0, i.jsx)(t5.L, { size: "xs", color: l, "aria-hidden": !0 });
        case tE.TOP_SONGS:
            return (0, i.jsx)(tK.T, { size: "xs", color: l, "aria-hidden": !0 });
    }
}
function ld(e) {
    let { widgetId: t, title: l } = e,
        n = t3(t),
        a = t2(t);
    if (!n)
        return (0, i.jsxs)("div", {
            className: ls.$,
            children: [
                (0, i.jsx)("span", {
                    className: ls.K,
                    children: (0, i.jsx)(tK.T, { size: "xs", color: r.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
                }),
                (0, i.jsx)(m.q, { children: l }),
            ],
        });
    let s = tb.map((e) => ({ id: e, label: tS(e), icon: (0, i.jsx)(lr, { view: e }) }));
    return (0, i.jsx)(la, {
        navId: "popular-music-view",
        options: s,
        selectedId: a,
        menuLabel: g.intl.string(Q.default.hFYyGU),
        triggerLabel: g.intl.formatToPlainString(Q.default["/sw0JL"], { widgetName: l, viewName: tS(a) }),
        onSelect: (e) => t6(t, e),
    });
}
var lc = l(756936),
    lo = l(890497),
    lu = l(734057),
    lm = l(317525),
    lx = l(576705),
    lh = l(935208),
    lf = l(44167);
l(321073);
var lg = l(485845),
    lj = l(136722),
    lp = l(435183),
    lv = l(155718),
    l_ = l(795816),
    lI = l(933958),
    lA = l(574152),
    lN = l(627363),
    lE = l(712440),
    lb = l(733110),
    lS = l(488926),
    ly = l(818023);
async function lC(e) {
    null == eu.A.getApplication(ly.NW) && (await (0, lN.TA)(ly.NW));
    let t = lI.Ay.getEmbeddedActivitiesForChannel(e).every((e) => e.applicationId !== ly.NW);
    return await (0, l_.su)({
        channelId: e,
        applicationId: ly.NW,
        isStart: t,
        embeddedActivitiesManager: (0, lA.A)(),
        renderInFramePool: !0,
    });
}
async function lT(e) {
    let { channel: t, selectedRoleIds: l } = e,
        n = [];
    if (l.length > 0)
        for (let e of (n.push({ id: t.guild_id, type: lv.r2.ROLE, allow: lS.x3, deny: eD.xBc.USE_EMBEDDED_ACTIVITIES }),
        l))
            n.push({ id: e, type: lv.r2.ROLE, allow: eD.xBc.USE_EMBEDDED_ACTIVITIES, deny: lS.x3 });
    let i = await (0, lp.RT)(t.id, { permissionOverwrites: n });
    if (!i.ok) throw i;
}
let lR = [];
var lk = l(344351),
    lD = l(256693),
    lw = l(812901),
    lM = l(317608),
    lU = l(953538);
let lP = {
    [s.a.IMAGE_TEXT]: {
        View: function (e) {
            let { widget: t, guildSpaceMode: l, guildId: n } = e,
                { text: a, image_hash: s } = t.config,
                r = "edit" === l ? t.config.image : void 0,
                d = void 0 !== r ? r : null != s ? e1(n, t.id, s) : null;
            return (0, i.jsxs)("div", {
                className: e3.kL,
                children: [
                    null != d && (0, i.jsx)("img", { className: e3.Sl, src: d, alt: "" }),
                    null != a &&
                        (0, i.jsx)(f.E, {
                            variant: "text-md/normal",
                            color: "text-subtle",
                            className: e3.Qq,
                            children: a,
                        }),
                ],
            });
        },
        Edit: function (e) {
            let { widget: t, commit: l, cancel: n } = e,
                r = t.config,
                [d, u] = a.useState(r.title ?? ""),
                [m, x] = a.useState(r.text ?? ""),
                [h, f] = a.useState(r.image),
                [j, p] = a.useState(null),
                v = (0, A.bG)([eX.A], () => eX.A.getGuildId()),
                _ = void 0 !== h ? h : null != r.image_hash && null != v ? e1(v, t.id, r.image_hash) : null;
            return (0, i.jsxs)(z.B, {
                gap: 16,
                children: [
                    (0, i.jsx)(eq.k, {
                        label: g.intl.string(g.t.gnwWrx),
                        value: d,
                        onChange: function (e) {
                            (p(null), u(e));
                        },
                        maxLength: 100,
                        showCharacterCount: !0,
                    }),
                    (0, i.jsx)(eF.D, {
                        label: g.intl.string(g.t.X4IxWL),
                        children: (0, i.jsxs)(z.B, {
                            gap: 16,
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            className: e2.B,
                            children: [
                                (0, i.jsxs)(z.B, {
                                    gap: 8,
                                    direction: "horizontal",
                                    children: [
                                        (0, i.jsx)(eV.A, {
                                            variant: "secondary",
                                            text: g.intl.string(g.t["MsUY/S"]),
                                            onChange: function (e) {
                                                (p(null), f(e));
                                            },
                                            maxFileSizeBytes: 0xa00000,
                                            onFileSizeError: () => (0, eQ.A)(0xa00000),
                                        }),
                                        null != _ &&
                                            (0, i.jsx)(c.m, {
                                                text: g.intl.string(g.t.N86XcP),
                                                ariaHidden: !0,
                                                children: (0, i.jsx)(o.K, {
                                                    variant: "critical-secondary",
                                                    icon: eK.TrashIcon,
                                                    onClick: function () {
                                                        (p(null), f(null));
                                                    },
                                                    "aria-label": g.intl.string(g.t.N86XcP),
                                                }),
                                            }),
                                    ],
                                }),
                                null != _ && (0, i.jsx)("img", { className: e2.V, src: _, alt: "" }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(eH.f, {
                        label: g.intl.string(g.t.COGMNC),
                        value: m,
                        onChange: function (e) {
                            (p(null), x(e));
                        },
                        rows: 3,
                        autosize: !0,
                        maxLength: 500,
                        showCharacterCount: !0,
                    }),
                    null != j &&
                        (0, i.jsx)("div", {
                            role: "alert",
                            children: (0, i.jsx)(e$.w, { type: "critical", children: j }),
                        }),
                    (0, i.jsxs)(eY.e, {
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(R.$, { variant: "secondary", text: g.intl.string(g.t["ETE/oC"]), onClick: n }),
                            (0, i.jsx)(R.$, {
                                variant: "primary",
                                text: g.intl.string(g.t["R3BPH+"]),
                                onClick: function () {
                                    let e;
                                    if (
                                        ((e = void 0 !== h ? null !== h : null != r.image_hash),
                                        0 === m.length && !e && (p(g.intl.string(Q.default.zleX9q)), 1))
                                    )
                                        return;
                                    let t = {
                                        type: s.a.IMAGE_TEXT,
                                        image_hash: r.image_hash,
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
            return (0, i.jsx)(m.q, { children: t.config.title ?? t.default_title ?? "" });
        },
    },
    [s.a.LEADERBOARD]: {
        View: function (e) {
            let { hydration: t, guildId: l } = e;
            return null == t || "idle" === t.status || "loading" === t.status
                ? (0, i.jsx)(p, {})
                : "error" === t.status
                  ? (0, i.jsx)(v, {})
                  : (0, i.jsx)(eM, { guildId: l, data: t.data });
        },
        Title: function (e) {
            let { widget: t, hydration: l } = e;
            return l?.status !== "success"
                ? (0, i.jsx)(m.q, { children: t.default_title ?? "" })
                : (0, i.jsx)(m.q, { children: $(l.data) });
        },
        TitleIcon: function () {
            return (0, i.jsx)(d.TrophyIcon, { size: "xs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        },
        HeaderAccessory: function (e) {
            let { hydration: t } = e;
            return t?.status !== "success" || K(t.data) ? null : (0, i.jsx)(eW, { data: t.data });
        },
        HeaderActions: function (e) {
            let { hydration: t, guildId: l } = e,
                n = t?.status === "success" ? t.data : void 0;
            return null != n && K(n)
                ? null
                : (0, i.jsx)(c.m, {
                      text: g.intl.string(g.t.dcl9MQ),
                      children: (0, i.jsx)(o.K, {
                          variant: "icon-only",
                          size: "sm",
                          icon: u._,
                          "aria-label": g.intl.string(g.t.dcl9MQ),
                          disabled: null == n,
                          onClick: function () {
                              null != n &&
                                  (function (e) {
                                      let { guildId: t, data: l } = e,
                                          n = (e) => (0, i.jsx)(ez, { guildId: t, data: l, modalProps: e });
                                      (0, k.openModalLazy)(() => Promise.resolve(n), {
                                          modalKey: "guild-space-leaderboard-expand",
                                      });
                                  })({ guildId: l, data: n });
                          },
                      }),
                  });
        },
    },
    [s.a.POPULAR_MUSIC]: {
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
                            t1(t, { isCompact: l < 480, canShowEmbed: l >= 720 });
                        },
                        [t],
                    )),
                    (0, tZ.g)(n, s, [t], { fireOnMount: !0 }),
                    a.useEffect(
                        () => () => {
                            t0.setState((e) => {
                                if (null == e.byWidgetId[t]) return e;
                                let l = { ...e.byWidgetId };
                                return (delete l[t], { byWidgetId: l });
                            });
                        },
                        [t],
                    ),
                    n),
                x = t3(c.id),
                h = t2(c.id),
                f = t4(c.id),
                g = !x && "view" === u,
                j =
                    o?.status === "success" && h !== tE.TOP_LISTENERS
                        ? ((l = o.data),
                          null ==
                          (r =
                              l.ranked_songs.find((e) => e.track_external_id === f && null != e.cover_art_hash)
                                  ?.cover_art_hash ??
                              l.ranked_songs.find((e) => null != e.cover_art_hash)?.cover_art_hash)
                              ? null
                              : ti.RQ.IMAGE(r))
                        : null;
            return (0, i.jsxs)("div", {
                className: lc.rf,
                ref: m,
                children: [
                    null != j && (0, i.jsx)("img", { className: lc.G, src: j, alt: "", "aria-hidden": !0 }),
                    (0, i.jsx)("div", {
                        className: lc.Qs,
                        children: (0, i.jsx)("div", {
                            id: tC(c.id),
                            className: lc.nd,
                            role: g ? "tabpanel" : "group",
                            tabIndex: 0,
                            "aria-label": g ? void 0 : tS(h),
                            "aria-labelledby": g ? ty(c.id, h) : void 0,
                            children: (function () {
                                if (null == o || "idle" === o.status || "loading" === o.status)
                                    return (0, i.jsx)(p, {});
                                if ("error" === o.status) return (0, i.jsx)(v, {});
                                switch (h) {
                                    case tE.TOP_SONGS:
                                        return (0, i.jsx)(t8, {
                                            guildId: d,
                                            widgetId: c.id,
                                            isCompact: x,
                                            data: o.data,
                                        });
                                    case tE.TOP_ARTISTS:
                                        return (0, i.jsx)(tD, { isCompact: x, data: o.data });
                                    case tE.TOP_LISTENERS:
                                        return (0, i.jsx)(tq, { guildId: d, isCompact: x, data: o.data });
                                }
                            })(),
                        }),
                    }),
                    (0, i.jsx)(tU, { isCompact: x }),
                ],
            });
        },
        Title: function (e) {
            let { widget: t, guildSpaceMode: l } = e,
                n = t.default_title ?? g.intl.string(Q.default["5xxUI2"]);
            return "edit" === l ? (0, i.jsx)(m.q, { children: n }) : (0, i.jsx)(ld, { widgetId: t.id, title: n });
        },
        ViewHeaderTrailing: function (e) {
            let { widget: t, title: l } = e,
                n = t3(t.id),
                a = t2(t.id);
            return n
                ? null
                : (0, i.jsx)(e7, {
                      label: l,
                      tabs: tb.map((e) => ({ id: e, label: tS(e) })),
                      selectedId: a,
                      panelId: tC(t.id),
                      getTabId: (e) => ty(t.id, e),
                      onSelect: (e) => t6(t.id, e),
                  });
        },
    },
    [s.a.WHITEBOARD]: {
        View: function (e) {
            let t,
                l,
                n = (0, lf.n)(),
                s = (0, A.bG)(
                    [lu.A, lx.A],
                    () => {
                        let e = null != n ? lu.A.getChannel(n) : void 0;
                        return null != e && lx.A.can(eD.xBc.USE_EMBEDDED_ACTIVITIES, e);
                    },
                    [n],
                ),
                r = (0, A.bG)(
                    [lI.Ay],
                    () => {
                        let e = lI.Ay.getCurrentEmbeddedActivity();
                        return null == e ||
                            e.applicationId !== ly.NW ||
                            e.location.kind !== lk.T.GUILD_CHANNEL ||
                            e.location.channel_id !== n
                            ? null
                            : e;
                    },
                    [n],
                ),
                d = (0, A.bG)([lI.Ay], () => lI.Ay.isLaunchingActivity(), []),
                { authResolved: c, isAuthorized: o } =
                    ((t = (0, A.bG)(
                        [lb.default],
                        () => lb.default.getFetchStateForApplication(ly.NW) === lb.FetchState.FETCHED,
                        [],
                    )),
                    (l = (0, A.bG)(
                        [lb.default, eu.A],
                        () => {
                            let e = lb.default.getNewestTokenForApplication(ly.NW);
                            if (null == e) return !1;
                            let t = eu.A.getApplication(ly.NW),
                                l = t?.integrationTypesConfig?.[lg.b.USER_INSTALL]?.oauth2InstallParams?.scopes;
                            if (null == l) return !0;
                            let n = new Set(e.scopes);
                            return l.every((e) => n.has(e));
                        },
                        [],
                    )),
                    a.useEffect(() => {
                        (lb.default.getFetchStateForApplication(ly.NW) === lb.FetchState.NOT_FETCHED &&
                            lE.A.fetch([ly.NW]),
                            null == eu.A.getApplication(ly.NW) && (0, lN.TA)(ly.NW));
                    }, []),
                    { authResolved: t, isAuthorized: l }),
                u = a.useRef(!1);
            a.useEffect(() => {
                null == r && null != n && s && c && o && !u.current && ((u.current = !0), lC(n));
            }, [s, n, r, c, o]);
            let m = a.useCallback(() => {
                    null != n && ((u.current = !0), lC(n));
                }, [n]),
                x = null != n && c && !o;
            return s
                ? (0, i.jsxs)("div", {
                      className: lU.kL,
                      children: [
                          null != r &&
                              (0, i.jsx)(lM.A, {
                                  frameId: (0, lD.Ri)(r),
                                  level: lw.A.WithinAppContent,
                                  className: lU.t$,
                              }),
                          null == r &&
                              x &&
                              (0, i.jsx)("div", {
                                  className: lU.P5,
                                  children: (0, i.jsx)(R.$, {
                                      variant: "secondary",
                                      text: g.intl.string(Q.default.PSuly6),
                                      loading: d,
                                      onClick: m,
                                  }),
                              }),
                      ],
                  })
                : (0, i.jsx)("div", {
                      className: lU.kL,
                      children: (0, i.jsx)("div", {
                          className: lU.m0,
                          children: (0, i.jsx)(f.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: g.intl.string(Q.default["nXc/MQ"]),
                          }),
                      }),
                  });
        },
        Edit: function (e) {
            let { cancel: t } = e,
                l = (0, A.bG)([eX.A], () => eX.A.getGuildId()),
                n = lh.default.castGuildIdAsEveryoneGuildRoleId(l),
                s = (0, lf.n)(),
                r = (0, A.bG)([lu.A], () => (null != s ? lu.A.getChannel(s) : void 0), [s]),
                d = (0, A.bG)([lx.A], () => null != r && lx.A.can(eD.xBc.MANAGE_ROLES, r), [r]),
                c = (0, A.bG)([lm.A], () => (null == l ? lR : lm.A.getSortedRoles(l).filter((e) => e.id !== n)), [
                    l,
                    n,
                ]),
                o = a.useMemo(() => {
                    let e;
                    return null != r
                        ? null != (e = r.permissionOverwrites[r.guild_id]) &&
                          lj.zy(e.deny, eD.xBc.USE_EMBEDDED_ACTIVITIES)
                            ? c
                                  .filter((e) => {
                                      let t = r.permissionOverwrites[e.id];
                                      return null != t && lj.zy(t.allow, eD.xBc.USE_EMBEDDED_ACTIVITIES);
                                  })
                                  .map((e) => e.id)
                            : []
                        : [];
                }, [r, c]),
                [u, m] = a.useState(null),
                [x, h] = a.useState(!1),
                [f, j] = a.useState(!1),
                p = u ?? o,
                v = a.useMemo(() => c.map((e) => ({ id: e.id, label: e.name, value: e.id })), [c]);
            async function _() {
                if (null != r) {
                    (j(!1), h(!0));
                    try {
                        (await lT({ channel: r, selectedRoleIds: p }), t());
                    } catch {
                        (h(!1), j(!0));
                    }
                }
            }
            return null == r
                ? null
                : (0, i.jsxs)(z.B, {
                      gap: 16,
                      children: [
                          (0, i.jsx)(lo.Z, {
                              selectionMode: "multiple",
                              label: g.intl.string(Q.default.XXLbfv),
                              description: g.intl.string(Q.default.XrpYIG),
                              placeholder: g.intl.string(Q.default.pp6WeD),
                              options: v,
                              value: p,
                              onSelectionChange: function (e) {
                                  (j(!1), m(e));
                              },
                              disabled: !d || x,
                              fullWidth: !0,
                              wrapTags: !0,
                          }),
                          !d && (0, i.jsx)(e$.w, { type: "warning", children: g.intl.string(Q.default.UPLtlA) }),
                          f &&
                              (0, i.jsx)("div", {
                                  role: "alert",
                                  children: (0, i.jsx)(e$.w, {
                                      type: "critical",
                                      children: g.intl.string(Q.default.xyCJYs),
                                  }),
                              }),
                          (0, i.jsxs)(eY.e, {
                              fullWidth: !0,
                              children: [
                                  (0, i.jsx)(R.$, {
                                      variant: "secondary",
                                      text: g.intl.string(g.t["ETE/oC"]),
                                      onClick: t,
                                      disabled: x,
                                  }),
                                  (0, i.jsx)(R.$, {
                                      variant: "primary",
                                      text: g.intl.string(g.t["R3BPH+"]),
                                      onClick: _,
                                      disabled: !d,
                                      loading: x,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
        LockedPreview: function (e) {
            let { alt: t, ariaLabel: l, ariaHidden: n, role: a, width: s = 288, height: r = 192 } = e;
            return (0, i.jsx)("img", {
                style: { width: s, height: r },
                src: "https://cdn.discordapp.com/assets/content/b501ac4c5a78c462100d3870ce7ab50a78ea7d9b2af6b8ee7a08b11bab82fb01.svg",
                alt: t,
                "aria-label": l,
                "aria-hidden": n,
                role: a ?? "img",
            });
        },
    },
};
