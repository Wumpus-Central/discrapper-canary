l.d(t, { m: () => tf });
var n = l(477900),
    i = l(582128),
    a = l(593673),
    r = l(661531),
    s = l(369606),
    d = l(866665),
    o = l(408278),
    c = l(26430),
    u = l(562073);
l(539888);
var m = l(289873),
    f = l(738188),
    x = l(834730),
    h = l(375708),
    g = l(448492);
function j() {
    return (0, n.jsx)("div", {
        className: g.w,
        children: (0, n.jsx)(m.y, { type: m.y.Type.SPINNING_CIRCLE, "aria-label": h.intl.string(h.t.ZTNur7) }),
    });
}
function p() {
    return (0, n.jsxs)("div", {
        className: g.w,
        role: "alert",
        children: [
            (0, n.jsx)(f.WarningIcon, { size: "md", color: "text-feedback-critical", "aria-hidden": !0 }),
            (0, n.jsx)(x.E, { variant: "text-sm/normal", color: "text-muted", children: h.intl.string(h.t.F8FvUy) }),
        ],
    });
}
var v = l(503698),
    A = l.n(v),
    E = l(17928),
    _ = l(364522),
    I = l(663417),
    S = l(80682),
    N = l(287809),
    y = l(58703),
    b = l(331322),
    C = l(297264),
    T = l(251812);
function D(e) {
    return e.entries.length < 3;
}
function w(e) {
    return (0, T.K)(D(e) ? void 0 : e.stat).name;
}
var R = l(61567),
    M = l(823353);
function G() {
    return (0, n.jsxs)(b.B, {
        className: M.w,
        align: "center",
        justify: "center",
        gap: 6,
        children: [
            (0, n.jsx)(C.D, {
                variant: "heading-md/semibold",
                color: "text-default",
                children: h.intl.string(R.default.ULK65a),
            }),
            (0, n.jsx)(x.E, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: h.intl.format(R.default["81PK67"], { memberCount: 3 }),
            }),
        ],
    });
}
var L = l(778712),
    U = l(463930),
    P = l(97808),
    k = l(939249),
    B = l(342296),
    W = l(927813),
    O = l(518782);
function z(e) {
    let t = Math.floor(Math.max(e, 0) / W.A.Seconds.MINUTE);
    return h.intl.formatToPlainString(R.default["6Y8H0A"], {
        hours: Math.floor(t / W.A.Minutes.HOUR),
        minutes: t % W.A.Minutes.HOUR,
    });
}
function F(e, t) {
    switch (t) {
        case O.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return {
                primary: h.intl.formatToPlainString(h.t["k2UNz+"], { days: e.value }),
                secondary: z(e.time_played_seconds),
            };
        case O.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return {
                primary: h.intl.formatToPlainString(R.default.rgpc8E, { count: e.value }),
                secondary: z(e.time_played_seconds),
            };
        case O.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            let l, n, i;
            return {
                primary:
                    ((n = Math.floor((l = Math.floor(Math.max(e.value, 0) / W.A.Millis.MINUTE)) / W.A.Minutes.HOUR)),
                    (i = l % W.A.Minutes.HOUR),
                    0 === n
                        ? h.intl.formatToPlainString(R.default.bgQf2H, { minutes: i })
                        : 0 === i
                          ? h.intl.formatToPlainString(R.default["D/HToK"], { hours: n })
                          : h.intl.formatToPlainString(R.default.fvtrHn, { hours: n, minutes: i })),
            };
        default:
            return { primary: "\u2014" };
    }
}
var H = l(140735),
    Y = l(81466),
    q = l(406810),
    X = l(687966),
    K = l(109112),
    V = l(683063),
    $ = l(573435),
    Q = l(402860),
    Z = l(396583),
    J = l(587895),
    ee = l(429913),
    et = l(967144),
    el = l(696451),
    en = l(562153);
function ei(e, t) {
    return { id: e, name: h.intl.string(R.default.rhDbuQ), iconUrl: void 0, isLoading: t };
}
function ea(e, t) {
    return e.get(t) ?? ei(t, !1);
}
function er(e, t) {
    return t.map((t) => ea(e, t));
}
function es(e, t, l) {
    let n = t.user_id,
        i = (0, E.bG)([N.default], () => N.default.getUser(n), [n]),
        a = (0, E.bG)([el.Ay], () => el.Ay.getMember(e, n), [e, n]),
        r = (0, et.gn)(e, n, a?.colorStrings ?? null),
        s = en.Ay.useName(e, void 0, i),
        d = null != i ? s : t.name;
    return {
        user: i,
        member: a,
        roleColorStrings: r,
        baseName: d,
        displayName: l ? h.intl.formatToPlainString(R.default.subXXA, { name: d }) : d,
    };
}
function ed(e) {
    let t = (e + W.A.Seconds.WEEK) * W.A.Millis.SECOND,
        [l, n] = i.useState(() => Date.now()),
        a = t - l,
        r = a <= 0,
        s = a - (Math.ceil(a / W.A.Millis.DAY) - 1) * W.A.Millis.DAY;
    return (
        (0, Z.A)(() => n(Date.now()), r ? null : s),
        i.useMemo(
            () => ({
                ended: r,
                endDate: new Date(t),
                badgeLabel: r
                    ? h.intl.string(R.default["J8r/7L"])
                    : h.intl.formatToPlainString(R.default["PuaR+2"], { days: Math.ceil(a / W.A.Millis.DAY) }),
            }),
            [r, t, a],
        )
    );
}
var eo = l(518477),
    ec = l(870087);
function eu(e) {
    let {
            guildId: t,
            entry: l,
            stat: i,
            games: a,
            isCurrentUser: r,
            shouldDimForCurrentUser: s,
            isFloating: d = !1,
            rowRef: o,
        } = e,
        c = es(t, l, r),
        u = l.application_ids[0],
        m = null != u ? ea(a, u) : void 0;
    return (0, n.jsxs)("div", {
        ref: o,
        "aria-hidden": d,
        inert: d,
        className: A()(ec.nM, { [ec.Bh]: r && !d, [ec.lR]: s }),
        children: [
            (0, n.jsx)(em, { guildId: t, entry: l, identity: c, lastPlayedGame: m }),
            (0, n.jsx)(eh, { entry: l, stat: i }),
            (0, n.jsx)(ev, {
                guildId: t,
                userId: l.user_id,
                name: c.baseName,
                applicationIds: l.application_ids,
                applicationCount: l.application_count,
                games: a,
            }),
        ],
    });
}
function em(e) {
    let { guildId: t, entry: l, identity: a, lastPlayedGame: r } = e,
        s = i.useRef(null),
        d = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(ef, { rank: l.rank }),
                (0, n.jsx)(P.eu, {
                    size: L._3.SIZE_32,
                    src: a.user?.getAvatarURL(t, (0, L.FT)(L._3.SIZE_32)) ?? void 0,
                    className: ec.my,
                    "aria-hidden": !0,
                }),
                (0, n.jsxs)("div", {
                    className: ec.Dc,
                    children: [
                        (0, n.jsx)(C.D, {
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            lineClamp: 1,
                            children: (0, n.jsx)(U.g, {
                                name: a.displayName,
                                colorString: a.member?.colorString ?? null,
                                colorStrings: a.roleColorStrings,
                            }),
                        }),
                        null != r &&
                            (0, n.jsx)(x.E, {
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                lineClamp: 1,
                                children: h.intl.formatToPlainString(R.default.YuNVPY, { gameName: r.name }),
                            }),
                    ],
                }),
            ],
        });
    return null == a.user
        ? (0, n.jsx)("div", { className: ec.D_, children: d })
        : (0, n.jsx)(B.A, {
              targetElementRef: s,
              user: a.user,
              guildId: t,
              children: (e) => (0, n.jsx)(k.D, { ...e, innerRef: s, className: A()(ec.D_, ec.FB), children: d }),
          });
}
function ef(e) {
    let { rank: t } = e,
        l = h.intl.formatToPlainString(R.default.I4JiAQ, { rank: t });
    switch (t) {
        case 1:
            return (0, n.jsx)("div", {
                className: ec.Tm,
                "aria-label": l,
                children: (0, n.jsx)("div", { className: ec.Xe }),
            });
        case 2:
            return (0, n.jsx)("div", {
                className: ec.Tm,
                "aria-label": l,
                children: (0, n.jsx)("div", { className: ec.XQ }),
            });
        case 3:
            return (0, n.jsx)("div", {
                className: ec.Tm,
                "aria-label": l,
                children: (0, n.jsx)("div", { className: ec.c9 }),
            });
        default:
            return (0, n.jsxs)("div", {
                className: ec.mH,
                children: [
                    (0, n.jsx)(H.A, { children: l }),
                    (0, n.jsx)(x.E, {
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
function ex(e) {
    let { stat: t } = e;
    switch (t) {
        case O.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return (0, n.jsx)(Y.CalendarIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case O.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            return (0, n.jsx)(q.ClockIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case O.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return (0, n.jsx)(X.GameControllerIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        default:
            return null;
    }
}
function eh(e) {
    let { entry: t, stat: l } = e,
        { primary: i, secondary: a } = F(t, l);
    return (0, n.jsxs)("div", {
        className: ec.TH,
        children: [
            (0, n.jsxs)("div", {
                className: ec.bf,
                children: [
                    (0, n.jsx)(ex, { stat: l }),
                    (0, n.jsx)(x.E, { variant: "text-sm/medium", color: "text-subtle", children: i }),
                ],
            }),
            null != a && (0, n.jsx)(x.E, { variant: "text-xs/medium", color: "text-muted", children: a }),
        ],
    });
}
function eg(e) {
    let { game: t, notched: l } = e;
    return (0, n.jsx)("span", {
        className: ec.rO,
        "aria-hidden": !0,
        children: (0, n.jsx)($.Ay, {
            mask: l ? $.l8[24] : $.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null != t.iconUrl
                    ? (0, n.jsx)("img", { className: ec.Gt, src: t.iconUrl, alt: "", "aria-hidden": !0 })
                    : (0, n.jsx)("span", {
                          className: ec.ct,
                          "aria-hidden": !0,
                          children: !t.isLoading && (0, n.jsx)(K._, { size: "xxs", color: r.A.colors.ICON_SUBTLE }),
                      }),
        }),
    });
}
function ej(e) {
    let { played: t, totalCount: l } = e,
        i = t.slice(0, 2),
        a = l - i.length;
    return (0, n.jsxs)("div", {
        className: ec.Nw,
        children: [
            i.map((e, t) => (0, n.jsx)(eg, { game: e, notched: a > 0 || t !== i.length - 1 }, `${e.id}-${t}`)),
            a > 0
                ? (0, n.jsx)("span", {
                      className: ec.rO,
                      children: (0, n.jsx)($.Ay, {
                          mask: $.Ay.Masks.SQUIRCLE,
                          width: 24,
                          height: 24,
                          children: (0, n.jsx)("div", {
                              className: ec.p0,
                              children: (0, n.jsx)(x.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-subtle",
                                  children: h.intl.formatToPlainString(R.default.JiMMEd, { count: a }),
                              }),
                          }),
                      }),
                  })
                : null,
        ],
    });
}
function ep(e) {
    let { played: t, totalCount: l, children: i } = e;
    return (0, n.jsx)(V.u, {
        body:
            0 === t.length
                ? h.intl.string(R.default["7CrlYb"])
                : 1 === t.length
                  ? h.intl.formatToPlainString(R.default.dbNpK0, { firstGame: t[0].name })
                  : 2 === t.length && 2 === l
                    ? h.intl.formatToPlainString(R.default.tqVg4M, { firstGame: t[0].name, secondGame: t[1].name })
                    : h.intl.formatToPlainString(R.default.bxcrSz, {
                          firstGame: t[0].name,
                          secondGame: t[1].name,
                          otherCount: l - 2,
                      }),
        asset: t.length > 0 ? (0, n.jsx)(ej, { played: t, totalCount: t.length }) : void 0,
        assetSize: t.length > 1 ? 43 : 24,
        children: i,
    });
}
function ev(e) {
    let { guildId: t, userId: l, name: a, applicationIds: r, applicationCount: s, games: d } = e,
        o = er(d, r),
        c = i.useCallback(() => {
            (0, Q.openUserProfileModal)({
                userId: l,
                guildId: t,
                tabSection: eo.RP.ACTIVITY,
                scrollTarget: eo.bk.RECENT_ACTIVITY,
            });
        }, [l, t]);
    return (0, n.jsx)("div", {
        className: ec.ag,
        children: (0, n.jsx)(ep, {
            played: o,
            totalCount: s,
            children: (0, n.jsx)(k.D, {
                className: A()(ec.Nw, ec.Dz),
                "aria-label": h.intl.formatToPlainString(R.default.o6mBdl, { name: a }),
                onClick: c,
                children: (0, n.jsx)(ej, { played: o, totalCount: s }),
            }),
        }),
    });
}
var eA = l(189043);
function eE(e) {
    let { guildId: t, entries: l, stat: i, games: a, currentUserEntry: r, currentUserPillarRef: s } = e,
        d = {
            1: { column: eA.HC, pillar: eA.P5 },
            2: { column: eA.th, pillar: eA.Vk },
            3: { column: eA.Ou, pillar: eA.el },
        };
    return (0, n.jsx)("div", {
        className: eA.pI,
        role: "list",
        "aria-label": h.intl.string(R.default.wKXLfQ),
        children: l.map((e, l) =>
            (0, n.jsx)(
                e_,
                {
                    guildId: t,
                    entry: e,
                    place: l + 1,
                    columnClassName: d[l + 1].column,
                    pillarClassName: d[l + 1].pillar,
                    stat: i,
                    games: a,
                    isCurrentUser: e === r,
                    currentUserPillarRef: e === r ? s : void 0,
                },
                e.user_id,
            ),
        ),
    });
}
function e_(e) {
    let {
            guildId: t,
            entry: l,
            place: a,
            columnClassName: r,
            pillarClassName: s,
            stat: d,
            games: o,
            isCurrentUser: c,
            currentUserPillarRef: u,
        } = e,
        m = er(o, l.application_ids),
        f = es(t, l, c),
        { primary: h } = F(l, d),
        g = 1 === a ? L._3.SIZE_48 : L._3.SIZE_40,
        j = i.useRef(null),
        p = A()(eA.dR, { [eA.m$]: 1 === a, [eA.wd]: 2 === a, [eA.p0]: 3 === a }),
        v = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(C.D, {
                    variant: "heading-sm/semibold",
                    color: "text-default",
                    lineClamp: 1,
                    className: eA.IY,
                    children: (0, n.jsx)(U.g, {
                        name: f.displayName,
                        colorString: f.member?.colorString ?? null,
                        colorStrings: f.roleColorStrings,
                    }),
                }),
                (0, n.jsx)(ep, {
                    played: m,
                    totalCount: l.application_count,
                    children: (0, n.jsx)(x.E, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        tabularNumbers: !0,
                        children: h,
                    }),
                }),
            ],
        });
    return (0, n.jsxs)("div", {
        className: A()(eA.fs, r),
        role: "listitem",
        ref: c ? u : void 0,
        children: [
            (0, n.jsxs)("div", {
                className: eA.R3,
                children: [
                    (0, n.jsx)(P.eu, {
                        size: g,
                        src: f.user?.getAvatarURL(t, (0, L.FT)(g)) ?? void 0,
                        "aria-hidden": !0,
                    }),
                    (0, n.jsx)("div", { className: p }),
                ],
            }),
            null != f.user
                ? (0, n.jsx)(B.A, {
                      targetElementRef: j,
                      user: f.user,
                      guildId: t,
                      children: (e) => (0, n.jsx)(k.D, { ...e, className: A()(eA.DX, s), innerRef: j, children: v }),
                  })
                : (0, n.jsx)("div", { className: A()(eA.DX, s), children: v }),
        ],
    });
}
var eI = l(219047);
function eS(e) {
    let t,
        l,
        a,
        { guildId: r, data: s, inModal: d = !1 } = e,
        { stat: o, entries: c } = s,
        { ended: u } = ed(s.week_start_ts),
        m = (0, E.bG)([N.default], () => N.default.getCurrentUser()?.id),
        f = i.useMemo(() => c.find((e) => e.user_id === m), [c, m]),
        x = i.useMemo(() => {
            let e = c.slice(0, 20);
            return null == f || e.includes(f) ? e : [...e, f];
        }, [c, f]),
        h = i.useMemo(() => Array.from(new Set(x.map((e) => e.user_id))), [x]);
    (0, S.k6)(r, h);
    let g =
            ((t = i.useMemo(() => Array.from(new Set(x.flatMap((e) => e.application_ids))), [x])),
            (l = (0, ee.A)(t)),
            (a = (0, E.yK)([J.A], () => t.map((e) => J.A.didFetchingApplicationFail(e)))),
            i.useMemo(() => {
                let e = new Map();
                return (
                    t.forEach((t, n) => {
                        let i = l[n];
                        e.set(
                            t,
                            null != i
                                ? { id: t, name: i.name, iconUrl: i.getIconURL(64) ?? void 0, isLoading: !1 }
                                : ei(t, !a[n]),
                        );
                    }),
                    e
                );
            }, [t, l, a])),
        {
            scrollerRef: j,
            userRowRef: p,
            floatingRowPosition: v,
        } = (function () {
            let [e, t] = i.useState(null),
                [l, n] = i.useState(null),
                [a, r] = i.useState("unknown");
            return (
                i.useEffect(() => {
                    if (null == e || null == l) return;
                    let t = new IntersectionObserver(
                        (e) => {
                            var t, l;
                            let n,
                                i,
                                [a] = e;
                            if (a?.rootBounds == null) return;
                            let { clippedPx: s, floatTo: d } =
                                ((t = a.boundingClientRect),
                                (n = Math.max(0, (l = a.rootBounds).top - t.top)),
                                {
                                    clippedPx: n + (i = Math.max(0, t.bottom - l.bottom)),
                                    floatTo: n > i ? "top" : "bottom",
                                });
                            r(() => (s <= 1 ? "visible" : d));
                        },
                        { root: e, threshold: [0, 0.1, 0.5, 0.9, 1] },
                    );
                    return (t.observe(l), () => t.disconnect());
                }, [e, l]),
                { scrollerRef: t, userRowRef: n, floatingRowPosition: "top" === a || "bottom" === a ? a : null }
            );
        })(),
        I = null != v,
        y = i.useCallback(
            (e) => {
                let t = e === f;
                return (0, n.jsx)(
                    eu,
                    {
                        guildId: r,
                        entry: e,
                        stat: o,
                        games: g,
                        isCurrentUser: t,
                        shouldDimForCurrentUser: t && I,
                        rowRef: t ? p : void 0,
                    },
                    `${e.rank}-${e.user_id}`,
                );
            },
            [I, f, g, r, o, p],
        );
    if (D(s)) return (0, n.jsx)(G, {});
    let b = u ? x.slice(3) : x,
        C = [x[0], x[1], x[2]];
    return (0, n.jsxs)("div", {
        children: [
            (0, n.jsxs)("div", {
                className: eI.SY,
                children: [
                    (0, n.jsxs)(_.d_, {
                        className: A()(eI.p_, { [eI.zE]: d }),
                        ref: j,
                        children: [
                            u &&
                                (0, n.jsx)(eE, {
                                    guildId: r,
                                    entries: C,
                                    stat: o,
                                    games: g,
                                    currentUserEntry: f,
                                    currentUserPillarRef: p,
                                }),
                            b.map(y),
                        ],
                    }),
                    null != f && null != v && (0, n.jsx)("div", { className: A()(eI.Dz, "top" === v ? eI.gN : eI.qV) }),
                    null != f &&
                        null != v &&
                        (0, n.jsx)("div", {
                            className: A()(eI.z$, "top" === v ? eI.aG : eI.Ie),
                            children: (0, n.jsx)(eu, {
                                guildId: r,
                                entry: f,
                                stat: o,
                                games: g,
                                isCurrentUser: !0,
                                shouldDimForCurrentUser: !1,
                                isFloating: !0,
                            }),
                        }),
                ],
            }),
            (0, n.jsx)(eN, { computedAt: s.computed_at, inModal: d }),
        ],
    });
}
function eN(e) {
    let { computedAt: t, inModal: l } = e,
        i = (0, n.jsxs)("div", {
            className: eI.z8,
            children: [
                (0, n.jsx)(I.RefreshIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 }),
                (0, n.jsx)(x.E, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: h.intl.string(R.default["/nma+a"]),
                }),
            ],
        });
    return null == t
        ? (0, n.jsx)("div", { className: eI.qr, children: i })
        : (0, n.jsx)("div", {
              className: A()(eI.qr, { [eI.zE]: l }),
              tabIndex: 0,
              children: (0, n.jsx)(d.m, {
                  text: h.intl.formatToPlainString(R.default["1bt50t"], { timestamp: (0, y.mk)(new Date(t)) }),
                  position: "bottom",
                  children: i,
              }),
          });
}
var ey = l(224640),
    eb = l(20742),
    eC = l(192308),
    eT = l(885386),
    eD = l(515746);
function ew(e) {
    let { data: t } = e,
        l = (0, T.K)(t.stat),
        { ended: i, endDate: a, badgeLabel: r } = ed(t.week_start_ts),
        s = eT.PZ.useSetting(),
        d = 2 > (0, y.m_)(a, new Date()) ? (0, y.mk)(a, !1, s) : (0, y.i$)(a, "L LT", s),
        o = i
            ? h.intl.format(R.default.kG9XmM, { endedAt: d, nextStatName: (0, T.K)(t.next_stat).name })
            : h.intl.format(R.default["X+VLqi"], { statQuestion: l.question, endsAt: d });
    return (0, n.jsx)(V.u, {
        title: l.name,
        body: o,
        position: "top",
        children: (0, n.jsx)("div", {
            className: eD.q,
            tabIndex: 0,
            children: (0, n.jsx)(x.E, {
                variant: "text-xs/semibold",
                color: i ? "text-muted" : "text-brand",
                children: r,
            }),
        }),
    });
}
var eR = l(460614);
function eM(e) {
    let { guildId: t, data: l, modalProps: i } = e;
    return (0, n.jsxs)(ey.d, {
        size: "lg",
        "aria-label": w(l),
        ...i,
        children: [
            (0, n.jsxs)("div", {
                className: eR.wx,
                children: [
                    (0, n.jsxs)("div", {
                        className: eR.LD,
                        children: [
                            (0, n.jsx)(s.TrophyIcon, { size: "xs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 }),
                            (0, n.jsx)(C.D, { variant: "heading-sm/medium", className: eR.DD, children: w(l) }),
                            (0, n.jsx)(ew, { data: l }),
                        ],
                    }),
                    (0, n.jsx)(eb.s_, {}),
                ],
            }),
            (0, n.jsx)("div", { className: eR.rf, children: (0, n.jsx)(eS, { guildId: t, data: l, inModal: !0 }) }),
        ],
    });
}
var eG = l(452027),
    eL = l(103557),
    eU = l(825484),
    eP = l(821609),
    ek = l(95477),
    eB = l(241326),
    eW = l(683071),
    eO = l(2553),
    ez = l(405810),
    eF = l(967198),
    eH = l(488428),
    eY = l(776231),
    eq = l(486020),
    eX = l(652215);
function eK(e, t, l) {
    let n = eq.QB ? "webp" : "jpg",
        { CDN_HOST: i, API_ENDPOINT: a } = window.GLOBAL_ENV,
        r = eX.Rsh.GUILD_SPACE_IMAGE_TEXT_WIDGET_IMAGE(e, t, l, n),
        s = null != i ? `https://${i}${r}` : location.protocol + a + r,
        d = { size: (0, eY.kr)(500 * (0, eY.mZ)()) };
    return ("jpg" === n && (d.quality = "lossless"), (s += `?${eH.stringify(d)}`));
}
var eV = l(868602),
    e$ = l(445187),
    eQ = l(890497),
    eZ = l(734057),
    eJ = l(317525),
    e0 = l(576705),
    e1 = l(935208),
    e8 = l(44167);
l(321073);
var e2 = l(485845),
    e3 = l(136722),
    e6 = l(435183),
    e7 = l(155718),
    e5 = l(795816),
    e4 = l(933958),
    e9 = l(574152),
    te = l(627363),
    tt = l(712440),
    tl = l(733110),
    tn = l(488926),
    ti = l(818023);
async function ta(e) {
    null == J.A.getApplication(ti.NW) && (await (0, te.TA)(ti.NW));
    let t = e4.Ay.getEmbeddedActivitiesForChannel(e).every((e) => e.applicationId !== ti.NW);
    return await (0, e5.su)({
        channelId: e,
        applicationId: ti.NW,
        isStart: t,
        embeddedActivitiesManager: (0, e9.A)(),
        renderInFramePool: !0,
    });
}
async function tr(e) {
    let { channel: t, selectedRoleIds: l } = e,
        n = [];
    if (l.length > 0)
        for (let e of (n.push({ id: t.guild_id, type: e7.r2.ROLE, allow: tn.x3, deny: eX.xBc.USE_EMBEDDED_ACTIVITIES }),
        l))
            n.push({ id: e, type: e7.r2.ROLE, allow: eX.xBc.USE_EMBEDDED_ACTIVITIES, deny: tn.x3 });
    let i = await (0, e6.RT)(t.id, { permissionOverwrites: n });
    if (!i.ok) throw i;
}
let ts = [];
var td = l(344351),
    to = l(256693),
    tc = l(812901),
    tu = l(317608),
    tm = l(953538);
let tf = {
    [a.a.IMAGE_TEXT]: {
        View: function (e) {
            let { widget: t, guildSpaceMode: l, guildId: i } = e,
                { text: a, image_hash: r } = t.config,
                s = "edit" === l ? t.config.image : void 0,
                d = void 0 !== s ? s : null != r ? eK(i, t.id, r) : null;
            return (0, n.jsxs)("div", {
                className: e$.kL,
                children: [
                    null != d && (0, n.jsx)("img", { className: e$.Sl, src: d, alt: "" }),
                    null != a &&
                        (0, n.jsx)(x.E, {
                            variant: "text-md/normal",
                            color: "text-subtle",
                            className: e$.Qq,
                            children: a,
                        }),
                ],
            });
        },
        Edit: function (e) {
            let { widget: t, commit: l, cancel: r } = e,
                s = t.config,
                [c, u] = i.useState(s.title ?? ""),
                [m, f] = i.useState(s.text ?? ""),
                [x, g] = i.useState(s.image),
                [j, p] = i.useState(null),
                v = (0, E.bG)([eF.A], () => eF.A.getGuildId()),
                A = void 0 !== x ? x : null != s.image_hash && null != v ? eK(v, t.id, s.image_hash) : null;
            return (0, n.jsxs)(b.B, {
                gap: 16,
                children: [
                    (0, n.jsx)(ek.k, {
                        label: h.intl.string(h.t.gnwWrx),
                        value: c,
                        onChange: function (e) {
                            (p(null), u(e));
                        },
                        maxLength: 100,
                        showCharacterCount: !0,
                    }),
                    (0, n.jsx)(eG.D, {
                        label: h.intl.string(h.t.X4IxWL),
                        children: (0, n.jsxs)(b.B, {
                            gap: 16,
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            className: eV.B,
                            children: [
                                (0, n.jsxs)(b.B, {
                                    gap: 8,
                                    direction: "horizontal",
                                    children: [
                                        (0, n.jsx)(ez.A, {
                                            variant: "secondary",
                                            text: h.intl.string(h.t["MsUY/S"]),
                                            onChange: function (e) {
                                                (p(null), g(e));
                                            },
                                            maxFileSizeBytes: 0xa00000,
                                            onFileSizeError: () => (0, eO.A)(0xa00000),
                                        }),
                                        null != A &&
                                            (0, n.jsx)(d.m, {
                                                text: h.intl.string(h.t.N86XcP),
                                                ariaHidden: !0,
                                                children: (0, n.jsx)(o.K, {
                                                    variant: "critical-secondary",
                                                    icon: eB.TrashIcon,
                                                    onClick: function () {
                                                        (p(null), g(null));
                                                    },
                                                    "aria-label": h.intl.string(h.t.N86XcP),
                                                }),
                                            }),
                                    ],
                                }),
                                null != A && (0, n.jsx)("img", { className: eV.V, src: A, alt: "" }),
                            ],
                        }),
                    }),
                    (0, n.jsx)(eL.f, {
                        label: h.intl.string(h.t.COGMNC),
                        value: m,
                        onChange: function (e) {
                            (p(null), f(e));
                        },
                        rows: 3,
                        autosize: !0,
                        maxLength: 500,
                        showCharacterCount: !0,
                    }),
                    null != j &&
                        (0, n.jsx)("div", {
                            role: "alert",
                            children: (0, n.jsx)(eW.w, { type: "critical", children: j }),
                        }),
                    (0, n.jsxs)(eU.e, {
                        fullWidth: !0,
                        children: [
                            (0, n.jsx)(eP.$, { variant: "secondary", text: h.intl.string(h.t["ETE/oC"]), onClick: r }),
                            (0, n.jsx)(eP.$, {
                                variant: "primary",
                                text: h.intl.string(h.t["R3BPH+"]),
                                onClick: function () {
                                    let e;
                                    if (
                                        ((e = void 0 !== x ? null !== x : null != s.image_hash),
                                        0 === m.length && !e && (p(h.intl.string(R.default.zleX9q)), 1))
                                    )
                                        return;
                                    let t = {
                                        type: a.a.IMAGE_TEXT,
                                        image_hash: s.image_hash,
                                        text: m.length > 0 ? m : null,
                                        title: c.length > 0 ? c : null,
                                    };
                                    (void 0 !== x && (t.image = x), l(t));
                                },
                            }),
                        ],
                    }),
                ],
            });
        },
        Title: function (e) {
            let { widget: t } = e;
            return (0, n.jsx)(u.q, { children: t.config.title ?? t.default_title ?? "" });
        },
    },
    [a.a.LEADERBOARD]: {
        View: function (e) {
            let { hydration: t, guildId: l } = e;
            return null == t || "idle" === t.status || "loading" === t.status
                ? (0, n.jsx)(j, {})
                : "error" === t.status
                  ? (0, n.jsx)(p, {})
                  : (0, n.jsx)(eS, { guildId: l, data: t.data });
        },
        Title: function (e) {
            let { widget: t, hydration: l } = e;
            return l?.status !== "success"
                ? (0, n.jsx)(u.q, { children: t.default_title ?? "" })
                : (0, n.jsx)(u.q, { children: w(l.data) });
        },
        TitleIcon: function () {
            return (0, n.jsx)(s.TrophyIcon, { size: "xs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        },
        HeaderAccessory: function (e) {
            let { hydration: t } = e;
            return t?.status !== "success" || D(t.data) ? null : (0, n.jsx)(ew, { data: t.data });
        },
        HeaderActions: function (e) {
            let { hydration: t, guildId: l } = e,
                i = t?.status === "success" ? t.data : void 0;
            return null != i && D(i)
                ? null
                : (0, n.jsx)(d.m, {
                      text: h.intl.string(h.t.dcl9MQ),
                      children: (0, n.jsx)(o.K, {
                          variant: "icon-only",
                          size: "sm",
                          icon: c._,
                          "aria-label": h.intl.string(h.t.dcl9MQ),
                          disabled: null == i,
                          onClick: function () {
                              null != i &&
                                  (function (e) {
                                      let { guildId: t, data: l } = e,
                                          i = (e) => (0, n.jsx)(eM, { guildId: t, data: l, modalProps: e });
                                      (0, eC.openModalLazy)(() => Promise.resolve(i), {
                                          modalKey: "guild-space-leaderboard-expand",
                                      });
                                  })({ guildId: l, data: i });
                          },
                      }),
                  });
        },
    },
    [a.a.WHITEBOARD]: {
        View: function (e) {
            let t,
                l,
                a = (0, e8.n)(),
                r = (0, E.bG)(
                    [eZ.A, e0.A],
                    () => {
                        let e = null != a ? eZ.A.getChannel(a) : void 0;
                        return null != e && e0.A.can(eX.xBc.USE_EMBEDDED_ACTIVITIES, e);
                    },
                    [a],
                ),
                s = (0, E.bG)(
                    [e4.Ay],
                    () => {
                        let e = e4.Ay.getCurrentEmbeddedActivity();
                        return null == e ||
                            e.applicationId !== ti.NW ||
                            e.location.kind !== td.T.GUILD_CHANNEL ||
                            e.location.channel_id !== a
                            ? null
                            : e;
                    },
                    [a],
                ),
                d = (0, E.bG)([e4.Ay], () => e4.Ay.isLaunchingActivity(), []),
                { authResolved: o, isAuthorized: c } =
                    ((t = (0, E.bG)(
                        [tl.default],
                        () => tl.default.getFetchStateForApplication(ti.NW) === tl.FetchState.FETCHED,
                        [],
                    )),
                    (l = (0, E.bG)(
                        [tl.default, J.A],
                        () => {
                            let e = tl.default.getNewestTokenForApplication(ti.NW);
                            if (null == e) return !1;
                            let t = J.A.getApplication(ti.NW),
                                l = t?.integrationTypesConfig?.[e2.b.USER_INSTALL]?.oauth2InstallParams?.scopes;
                            if (null == l) return !0;
                            let n = new Set(e.scopes);
                            return l.every((e) => n.has(e));
                        },
                        [],
                    )),
                    i.useEffect(() => {
                        (tl.default.getFetchStateForApplication(ti.NW) === tl.FetchState.NOT_FETCHED &&
                            tt.A.fetch([ti.NW]),
                            null == J.A.getApplication(ti.NW) && (0, te.TA)(ti.NW));
                    }, []),
                    { authResolved: t, isAuthorized: l }),
                u = i.useRef(!1);
            i.useEffect(() => {
                null == s && null != a && r && o && c && !u.current && ((u.current = !0), ta(a));
            }, [r, a, s, o, c]);
            let m = i.useCallback(() => {
                    null != a && ((u.current = !0), ta(a));
                }, [a]),
                f = null != a && o && !c;
            return r
                ? (0, n.jsxs)("div", {
                      className: tm.kL,
                      children: [
                          null != s &&
                              (0, n.jsx)(tu.A, {
                                  frameId: (0, to.Ri)(s),
                                  level: tc.A.WithinAppContent,
                                  className: tm.t$,
                              }),
                          null == s &&
                              f &&
                              (0, n.jsx)("div", {
                                  className: tm.P5,
                                  children: (0, n.jsx)(eP.$, {
                                      variant: "secondary",
                                      text: h.intl.string(R.default.PSuly6),
                                      loading: d,
                                      onClick: m,
                                  }),
                              }),
                      ],
                  })
                : (0, n.jsx)("div", {
                      className: tm.kL,
                      children: (0, n.jsx)("div", {
                          className: tm.m0,
                          children: (0, n.jsx)(x.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: h.intl.string(R.default["nXc/MQ"]),
                          }),
                      }),
                  });
        },
        Edit: function (e) {
            let { cancel: t } = e,
                l = (0, E.bG)([eF.A], () => eF.A.getGuildId()),
                a = e1.default.castGuildIdAsEveryoneGuildRoleId(l),
                r = (0, e8.n)(),
                s = (0, E.bG)([eZ.A], () => (null != r ? eZ.A.getChannel(r) : void 0), [r]),
                d = (0, E.bG)([e0.A], () => null != s && e0.A.can(eX.xBc.MANAGE_ROLES, s), [s]),
                o = (0, E.bG)([eJ.A], () => (null == l ? ts : eJ.A.getSortedRoles(l).filter((e) => e.id !== a)), [
                    l,
                    a,
                ]),
                c = i.useMemo(() => {
                    let e;
                    return null != s
                        ? null != (e = s.permissionOverwrites[s.guild_id]) &&
                          e3.zy(e.deny, eX.xBc.USE_EMBEDDED_ACTIVITIES)
                            ? o
                                  .filter((e) => {
                                      let t = s.permissionOverwrites[e.id];
                                      return null != t && e3.zy(t.allow, eX.xBc.USE_EMBEDDED_ACTIVITIES);
                                  })
                                  .map((e) => e.id)
                            : []
                        : [];
                }, [s, o]),
                [u, m] = i.useState(null),
                [f, x] = i.useState(!1),
                [g, j] = i.useState(!1),
                p = u ?? c,
                v = i.useMemo(() => o.map((e) => ({ id: e.id, label: e.name, value: e.id })), [o]);
            async function A() {
                if (null != s) {
                    (j(!1), x(!0));
                    try {
                        (await tr({ channel: s, selectedRoleIds: p }), t());
                    } catch {
                        (x(!1), j(!0));
                    }
                }
            }
            return null == s
                ? null
                : (0, n.jsxs)(b.B, {
                      gap: 16,
                      children: [
                          (0, n.jsx)(eQ.Z, {
                              selectionMode: "multiple",
                              label: h.intl.string(R.default.XXLbfv),
                              description: h.intl.string(R.default.XrpYIG),
                              placeholder: h.intl.string(R.default.pp6WeD),
                              options: v,
                              value: p,
                              onSelectionChange: function (e) {
                                  (j(!1), m(e));
                              },
                              disabled: !d || f,
                              fullWidth: !0,
                              wrapTags: !0,
                          }),
                          !d && (0, n.jsx)(eW.w, { type: "warning", children: h.intl.string(R.default.UPLtlA) }),
                          g &&
                              (0, n.jsx)("div", {
                                  role: "alert",
                                  children: (0, n.jsx)(eW.w, {
                                      type: "critical",
                                      children: h.intl.string(R.default.xyCJYs),
                                  }),
                              }),
                          (0, n.jsxs)(eU.e, {
                              fullWidth: !0,
                              children: [
                                  (0, n.jsx)(eP.$, {
                                      variant: "secondary",
                                      text: h.intl.string(h.t["ETE/oC"]),
                                      onClick: t,
                                      disabled: f,
                                  }),
                                  (0, n.jsx)(eP.$, {
                                      variant: "primary",
                                      text: h.intl.string(h.t["R3BPH+"]),
                                      onClick: A,
                                      disabled: !d,
                                      loading: f,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
        LockedPreview: function (e) {
            let { alt: t, ariaLabel: l, ariaHidden: i, role: a, width: r = 288, height: s = 192 } = e;
            return (0, n.jsx)("img", {
                style: { width: r, height: s },
                src: "https://cdn.discordapp.com/assets/content/b501ac4c5a78c462100d3870ce7ab50a78ea7d9b2af6b8ee7a08b11bab82fb01.svg",
                alt: t,
                "aria-label": l,
                "aria-hidden": i,
                role: a ?? "img",
            });
        },
    },
};
