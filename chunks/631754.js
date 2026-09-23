l.d(t, { m: () => ta });
var n = l(477900),
    i = l(582128),
    a = l(593673),
    r = l(661531),
    s = l(369606),
    d = l(251812);
l(539888);
var o = l(289873),
    u = l(738188),
    c = l(834730),
    m = l(375708),
    f = l(448492);
function x() {
    return (0, n.jsx)("div", {
        className: f.w,
        children: (0, n.jsx)(o.y, { type: o.y.Type.SPINNING_CIRCLE, "aria-label": m.intl.string(m.t.ZTNur7) }),
    });
}
function h() {
    return (0, n.jsxs)("div", {
        className: f.w,
        role: "alert",
        children: [
            (0, n.jsx)(u.WarningIcon, { size: "md", color: "text-feedback-critical", "aria-hidden": !0 }),
            (0, n.jsx)(c.E, { variant: "text-sm/normal", color: "text-muted", children: m.intl.string(m.t.F8FvUy) }),
        ],
    });
}
var g = l(503698),
    p = l.n(g),
    A = l(17928),
    j = l(364522),
    v = l(663417),
    E = l(866665),
    _ = l(80682),
    I = l(287809),
    S = l(58703),
    N = l(331322),
    y = l(297264);
function b(e) {
    return e.entries.length < 3;
}
var C = l(104129),
    T = l(823353);
function D() {
    return (0, n.jsxs)(N.B, {
        className: T.w,
        align: "center",
        justify: "center",
        gap: 6,
        children: [
            (0, n.jsx)(y.D, {
                variant: "heading-md/semibold",
                color: "text-default",
                children: m.intl.string(C.default.ULK65a),
            }),
            (0, n.jsx)(c.E, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: m.intl.format(C.default["81PK67"], { memberCount: 3 }),
            }),
        ],
    });
}
var w = l(778712),
    R = l(463930),
    G = l(97808),
    L = l(939249),
    M = l(342296),
    U = l(927813),
    P = l(518782);
function k(e) {
    let t = Math.floor(Math.max(e, 0) / U.A.Seconds.MINUTE);
    return m.intl.formatToPlainString(C.default["6Y8H0A"], {
        hours: Math.floor(t / U.A.Minutes.HOUR),
        minutes: t % U.A.Minutes.HOUR,
    });
}
function B(e, t) {
    switch (t) {
        case P.R.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return {
                primary: m.intl.formatToPlainString(m.t["k2UNz+"], { days: e.value }),
                secondary: k(e.time_played_seconds),
            };
        case P.R.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return {
                primary: m.intl.formatToPlainString(C.default.rgpc8E, { count: e.value }),
                secondary: k(e.time_played_seconds),
            };
        case P.R.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            let l, n, i;
            return {
                primary:
                    ((n = Math.floor((l = Math.floor(Math.max(e.value, 0) / U.A.Millis.MINUTE)) / U.A.Minutes.HOUR)),
                    (i = l % U.A.Minutes.HOUR),
                    0 === n
                        ? m.intl.formatToPlainString(C.default.bgQf2H, { minutes: i })
                        : 0 === i
                          ? m.intl.formatToPlainString(C.default["D/HToK"], { hours: n })
                          : m.intl.formatToPlainString(C.default.fvtrHn, { hours: n, minutes: i })),
            };
        default:
            return { primary: "\u2014" };
    }
}
var W = l(140735),
    O = l(81466),
    F = l(406810),
    z = l(687966),
    H = l(109112),
    Y = l(683063),
    X = l(573435),
    q = l(402860),
    V = l(396583),
    K = l(587895),
    $ = l(429913),
    Q = l(967144),
    Z = l(696451),
    J = l(562153);
function ee(e, t) {
    return { id: e, name: m.intl.string(C.default.rhDbuQ), iconUrl: void 0, isLoading: t };
}
function et(e, t) {
    return e.get(t) ?? ee(t, !1);
}
function el(e, t) {
    return t.map((t) => et(e, t));
}
function en(e, t, l) {
    let n = t.user_id,
        i = (0, A.bG)([I.default], () => I.default.getUser(n), [n]),
        a = (0, A.bG)([Z.Ay], () => Z.Ay.getMember(e, n), [e, n]),
        r = (0, Q.gn)(e, n, a?.colorStrings ?? null),
        s = J.Ay.useName(e, void 0, i),
        d = null != i ? s : t.name;
    return {
        user: i,
        member: a,
        roleColorStrings: r,
        baseName: d,
        displayName: l ? m.intl.formatToPlainString(C.default.subXXA, { name: d }) : d,
    };
}
function ei(e) {
    let t = (e + U.A.Seconds.WEEK) * U.A.Millis.SECOND,
        [l, n] = i.useState(() => Date.now()),
        a = t - l,
        r = a <= 0,
        s = a - (Math.ceil(a / U.A.Millis.DAY) - 1) * U.A.Millis.DAY;
    return (
        (0, V.A)(() => n(Date.now()), r ? null : s),
        i.useMemo(
            () => ({
                ended: r,
                endDate: new Date(t),
                badgeLabel: r
                    ? m.intl.string(C.default["J8r/7L"])
                    : m.intl.formatToPlainString(C.default["PuaR+2"], { days: Math.ceil(a / U.A.Millis.DAY) }),
            }),
            [r, t, a],
        )
    );
}
var ea = l(518477),
    er = l(870087);
function es(e) {
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
        u = en(t, l, r),
        c = l.application_ids[0],
        m = null != c ? et(a, c) : void 0;
    return (0, n.jsxs)("div", {
        ref: o,
        "aria-hidden": d,
        inert: d,
        className: p()(er.nM, { [er.Bh]: r && !d, [er.lR]: s }),
        children: [
            (0, n.jsx)(ed, { guildId: t, entry: l, identity: u, lastPlayedGame: m }),
            (0, n.jsx)(ec, { entry: l, stat: i }),
            (0, n.jsx)(eh, {
                guildId: t,
                userId: l.user_id,
                name: u.baseName,
                applicationIds: l.application_ids,
                applicationCount: l.application_count,
                games: a,
            }),
        ],
    });
}
function ed(e) {
    let { guildId: t, entry: l, identity: a, lastPlayedGame: r } = e,
        s = i.useRef(null),
        d = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(eo, { rank: l.rank }),
                (0, n.jsx)(G.eu, {
                    size: w._3.SIZE_32,
                    src: a.user?.getAvatarURL(t, (0, w.FT)(w._3.SIZE_32)) ?? void 0,
                    className: er.my,
                    "aria-hidden": !0,
                }),
                (0, n.jsxs)("div", {
                    className: er.Dc,
                    children: [
                        (0, n.jsx)(y.D, {
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            lineClamp: 1,
                            children: (0, n.jsx)(R.g, {
                                name: a.displayName,
                                colorString: a.member?.colorString ?? null,
                                colorStrings: a.roleColorStrings,
                            }),
                        }),
                        null != r &&
                            (0, n.jsx)(c.E, {
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                lineClamp: 1,
                                children: m.intl.formatToPlainString(C.default.YuNVPY, { gameName: r.name }),
                            }),
                    ],
                }),
            ],
        });
    return null == a.user
        ? (0, n.jsx)("div", { className: er.D_, children: d })
        : (0, n.jsx)(M.A, {
              targetElementRef: s,
              user: a.user,
              guildId: t,
              children: (e) => (0, n.jsx)(L.D, { ...e, innerRef: s, className: p()(er.D_, er.FB), children: d }),
          });
}
function eo(e) {
    let { rank: t } = e,
        l = m.intl.formatToPlainString(C.default.I4JiAQ, { rank: t });
    switch (t) {
        case 1:
            return (0, n.jsx)("div", {
                className: er.Tm,
                "aria-label": l,
                children: (0, n.jsx)("div", { className: er.Xe }),
            });
        case 2:
            return (0, n.jsx)("div", {
                className: er.Tm,
                "aria-label": l,
                children: (0, n.jsx)("div", { className: er.XQ }),
            });
        case 3:
            return (0, n.jsx)("div", {
                className: er.Tm,
                "aria-label": l,
                children: (0, n.jsx)("div", { className: er.c9 }),
            });
        default:
            return (0, n.jsxs)("div", {
                className: er.mH,
                children: [
                    (0, n.jsx)(W.A, { children: l }),
                    (0, n.jsx)(c.E, {
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
function eu(e) {
    let { stat: t } = e;
    switch (t) {
        case P.R.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return (0, n.jsx)(O.CalendarIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case P.R.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            return (0, n.jsx)(F.ClockIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case P.R.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return (0, n.jsx)(z.GameControllerIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        default:
            return null;
    }
}
function ec(e) {
    let { entry: t, stat: l } = e,
        { primary: i, secondary: a } = B(t, l);
    return (0, n.jsxs)("div", {
        className: er.TH,
        children: [
            (0, n.jsxs)("div", {
                className: er.bf,
                children: [
                    (0, n.jsx)(eu, { stat: l }),
                    (0, n.jsx)(c.E, { variant: "text-sm/medium", color: "text-subtle", children: i }),
                ],
            }),
            null != a && (0, n.jsx)(c.E, { variant: "text-xs/medium", color: "text-muted", children: a }),
        ],
    });
}
function em(e) {
    let { game: t, notched: l } = e;
    return (0, n.jsx)("span", {
        className: er.rO,
        "aria-hidden": !0,
        children: (0, n.jsx)(X.Ay, {
            mask: l ? X.l8[24] : X.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null != t.iconUrl
                    ? (0, n.jsx)("img", { className: er.Gt, src: t.iconUrl, alt: "", "aria-hidden": !0 })
                    : (0, n.jsx)("span", {
                          className: er.ct,
                          "aria-hidden": !0,
                          children: !t.isLoading && (0, n.jsx)(H._, { size: "xxs", color: r.A.colors.ICON_SUBTLE }),
                      }),
        }),
    });
}
function ef(e) {
    let { played: t, totalCount: l } = e,
        i = t.slice(0, 2),
        a = l - i.length;
    return (0, n.jsxs)("div", {
        className: er.Nw,
        children: [
            i.map((e, t) => (0, n.jsx)(em, { game: e, notched: a > 0 || t !== i.length - 1 }, `${e.id}-${t}`)),
            a > 0
                ? (0, n.jsx)("span", {
                      className: er.rO,
                      children: (0, n.jsx)(X.Ay, {
                          mask: X.Ay.Masks.SQUIRCLE,
                          width: 24,
                          height: 24,
                          children: (0, n.jsx)("div", {
                              className: er.p0,
                              children: (0, n.jsx)(c.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-subtle",
                                  children: m.intl.formatToPlainString(C.default.JiMMEd, { count: a }),
                              }),
                          }),
                      }),
                  })
                : null,
        ],
    });
}
function ex(e) {
    let { played: t, totalCount: l, children: i } = e;
    return (0, n.jsx)(Y.u, {
        body:
            0 === t.length
                ? m.intl.string(C.default["7CrlYb"])
                : 1 === t.length
                  ? m.intl.formatToPlainString(C.default.dbNpK0, { firstGame: t[0].name })
                  : 2 === t.length && 2 === l
                    ? m.intl.formatToPlainString(C.default.tqVg4M, { firstGame: t[0].name, secondGame: t[1].name })
                    : m.intl.formatToPlainString(C.default.bxcrSz, {
                          firstGame: t[0].name,
                          secondGame: t[1].name,
                          otherCount: l - 2,
                      }),
        asset: t.length > 0 ? (0, n.jsx)(ef, { played: t, totalCount: t.length }) : void 0,
        assetSize: t.length > 1 ? 43 : 24,
        children: i,
    });
}
function eh(e) {
    let { guildId: t, userId: l, name: a, applicationIds: r, applicationCount: s, games: d } = e,
        o = el(d, r),
        u = i.useCallback(() => {
            (0, q.openUserProfileModal)({
                userId: l,
                guildId: t,
                tabSection: ea.RP.ACTIVITY,
                scrollTarget: ea.bk.RECENT_ACTIVITY,
            });
        }, [l, t]);
    return (0, n.jsx)("div", {
        className: er.ag,
        children: (0, n.jsx)(ex, {
            played: o,
            totalCount: s,
            children: (0, n.jsx)(L.D, {
                className: p()(er.Nw, er.Dz),
                "aria-label": m.intl.formatToPlainString(C.default.o6mBdl, { name: a }),
                onClick: u,
                children: (0, n.jsx)(ef, { played: o, totalCount: s }),
            }),
        }),
    });
}
var eg = l(189043);
function ep(e) {
    let { guildId: t, entries: l, stat: i, games: a, currentUserEntry: r, currentUserPillarRef: s } = e,
        d = {
            1: { column: eg.HC, pillar: eg.P5 },
            2: { column: eg.th, pillar: eg.Vk },
            3: { column: eg.Ou, pillar: eg.el },
        };
    return (0, n.jsx)("div", {
        className: eg.pI,
        role: "list",
        "aria-label": m.intl.string(C.default.wKXLfQ),
        children: l.map((e, l) =>
            (0, n.jsx)(
                eA,
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
function eA(e) {
    let {
            guildId: t,
            entry: l,
            place: a,
            columnClassName: r,
            pillarClassName: s,
            stat: d,
            games: o,
            isCurrentUser: u,
            currentUserPillarRef: m,
        } = e,
        f = el(o, l.application_ids),
        x = en(t, l, u),
        { primary: h } = B(l, d),
        g = 1 === a ? w._3.SIZE_48 : w._3.SIZE_40,
        A = i.useRef(null),
        j = p()(eg.dR, { [eg.m$]: 1 === a, [eg.wd]: 2 === a, [eg.p0]: 3 === a }),
        v = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(y.D, {
                    variant: "heading-sm/semibold",
                    color: "text-default",
                    lineClamp: 1,
                    className: eg.IY,
                    children: (0, n.jsx)(R.g, {
                        name: x.displayName,
                        colorString: x.member?.colorString ?? null,
                        colorStrings: x.roleColorStrings,
                    }),
                }),
                (0, n.jsx)(ex, {
                    played: f,
                    totalCount: l.application_count,
                    children: (0, n.jsx)(c.E, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        tabularNumbers: !0,
                        children: h,
                    }),
                }),
            ],
        });
    return (0, n.jsxs)("div", {
        className: p()(eg.fs, r),
        role: "listitem",
        ref: u ? m : void 0,
        children: [
            (0, n.jsxs)("div", {
                className: eg.R3,
                children: [
                    (0, n.jsx)(G.eu, {
                        size: g,
                        src: x.user?.getAvatarURL(t, (0, w.FT)(g)) ?? void 0,
                        "aria-hidden": !0,
                    }),
                    (0, n.jsx)("div", { className: j }),
                ],
            }),
            null != x.user
                ? (0, n.jsx)(M.A, {
                      targetElementRef: A,
                      user: x.user,
                      guildId: t,
                      children: (e) => (0, n.jsx)(L.D, { ...e, className: p()(eg.DX, s), innerRef: A, children: v }),
                  })
                : (0, n.jsx)("div", { className: p()(eg.DX, s), children: v }),
        ],
    });
}
var ej = l(219047);
function ev(e) {
    let t,
        l,
        a,
        { guildId: r, data: s } = e,
        { stat: d, entries: o } = s,
        { ended: u } = ei(s.week_start_ts),
        c = (0, A.bG)([I.default], () => I.default.getCurrentUser()?.id),
        m = i.useMemo(() => o.find((e) => e.user_id === c), [o, c]),
        f = i.useMemo(() => {
            let e = o.slice(0, 20);
            return null == m || e.includes(m) ? e : [...e, m];
        }, [o, m]),
        x = i.useMemo(() => Array.from(new Set(f.map((e) => e.user_id))), [f]);
    (0, _.k6)(r, x);
    let h =
            ((t = i.useMemo(() => Array.from(new Set(f.flatMap((e) => e.application_ids))), [f])),
            (l = (0, $.A)(t)),
            (a = (0, A.yK)([K.A], () => t.map((e) => K.A.didFetchingApplicationFail(e)))),
            i.useMemo(() => {
                let e = new Map();
                return (
                    t.forEach((t, n) => {
                        let i = l[n];
                        e.set(
                            t,
                            null != i
                                ? { id: t, name: i.name, iconUrl: i.getIconURL(64) ?? void 0, isLoading: !1 }
                                : ee(t, !a[n]),
                        );
                    }),
                    e
                );
            }, [t, l, a])),
        {
            scrollerRef: g,
            userRowRef: v,
            floatingRowPosition: E,
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
        S = null != E,
        N = i.useCallback(
            (e) => {
                let t = e === m;
                return (0, n.jsx)(
                    es,
                    {
                        guildId: r,
                        entry: e,
                        stat: d,
                        games: h,
                        isCurrentUser: t,
                        shouldDimForCurrentUser: t && S,
                        rowRef: t ? v : void 0,
                    },
                    `${e.rank}-${e.user_id}`,
                );
            },
            [S, m, h, r, d, v],
        );
    if (b(s)) return (0, n.jsx)(D, {});
    let y = u ? f.slice(3) : f,
        C = [f[0], f[1], f[2]];
    return (0, n.jsxs)("div", {
        children: [
            (0, n.jsxs)("div", {
                className: ej.SY,
                children: [
                    (0, n.jsxs)(j.d_, {
                        className: ej.p_,
                        ref: g,
                        children: [
                            u &&
                                (0, n.jsx)(ep, {
                                    guildId: r,
                                    entries: C,
                                    stat: d,
                                    games: h,
                                    currentUserEntry: m,
                                    currentUserPillarRef: v,
                                }),
                            y.map(N),
                        ],
                    }),
                    null != m && null != E && (0, n.jsx)("div", { className: p()(ej.Dz, "top" === E ? ej.gN : ej.qV) }),
                    null != m &&
                        null != E &&
                        (0, n.jsx)("div", {
                            className: p()(ej.z$, "top" === E ? ej.aG : ej.Ie),
                            children: (0, n.jsx)(es, {
                                guildId: r,
                                entry: m,
                                stat: d,
                                games: h,
                                isCurrentUser: !0,
                                shouldDimForCurrentUser: !1,
                                isFloating: !0,
                            }),
                        }),
                ],
            }),
            (0, n.jsx)(eE, { computedAt: s.computed_at }),
        ],
    });
}
function eE(e) {
    let { computedAt: t } = e,
        l = (0, n.jsxs)("div", {
            className: ej.z8,
            children: [
                (0, n.jsx)(v.RefreshIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 }),
                (0, n.jsx)(c.E, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: m.intl.string(C.default["/nma+a"]),
                }),
            ],
        });
    return null == t
        ? (0, n.jsx)("div", { className: ej.qr, children: l })
        : (0, n.jsx)("div", {
              className: ej.qr,
              tabIndex: 0,
              children: (0, n.jsx)(E.m, {
                  text: m.intl.formatToPlainString(C.default["1bt50t"], { timestamp: (0, S.mk)(new Date(t)) }),
                  position: "bottom",
                  children: l,
              }),
          });
}
var e_ = l(885386),
    eI = l(515746);
function eS(e) {
    let { data: t } = e,
        l = (0, d.K)(t.stat),
        { ended: i, endDate: a, badgeLabel: r } = ei(t.week_start_ts),
        s = e_.PZ.useSetting(),
        o = 2 > (0, S.m_)(a, new Date()) ? (0, S.mk)(a, !1, s) : (0, S.i$)(a, "L LT", s),
        u = i
            ? m.intl.format(C.default.kG9XmM, { endedAt: o, nextStatName: (0, d.K)(t.next_stat).name })
            : m.intl.format(C.default["X+VLqi"], { statQuestion: l.question, endsAt: o });
    return (0, n.jsx)(Y.u, {
        title: l.name,
        body: u,
        position: "top",
        children: (0, n.jsx)("div", {
            className: eI.q,
            tabIndex: 0,
            children: (0, n.jsx)(c.E, {
                variant: "text-xs/semibold",
                color: i ? "text-muted" : "text-brand",
                children: r,
            }),
        }),
    });
}
var eN = l(452027),
    ey = l(103557),
    eb = l(825484),
    eC = l(821609),
    eT = l(95477),
    eD = l(408278),
    ew = l(241326),
    eR = l(683071),
    eG = l(2553),
    eL = l(405810),
    eM = l(967198),
    eU = l(488428),
    eP = l(776231),
    ek = l(486020),
    eB = l(652215);
function eW(e, t, l) {
    let n = ek.QB ? "webp" : "jpg",
        { CDN_HOST: i, API_ENDPOINT: a } = window.GLOBAL_ENV,
        r = eB.Rsh.GUILD_SPACE_IMAGE_TEXT_WIDGET_IMAGE(e, t, l, n),
        s = null != i ? `https://${i}${r}` : location.protocol + a + r,
        d = { size: (0, eP.kr)(500 * (0, eP.mZ)()) };
    return ("jpg" === n && (d.quality = "lossless"), (s += `?${eU.stringify(d)}`));
}
var eO = l(868602),
    eF = l(445187),
    ez = l(890497),
    eH = l(734057),
    eY = l(317525),
    eX = l(576705),
    eq = l(935208),
    eV = l(44167);
l(321073);
var eK = l(485845),
    e$ = l(136722),
    eQ = l(435183),
    eZ = l(155718),
    eJ = l(795816),
    e0 = l(933958),
    e1 = l(574152),
    e8 = l(627363),
    e2 = l(712440),
    e3 = l(733110),
    e6 = l(488926),
    e7 = l(818023);
async function e5(e) {
    null == K.A.getApplication(e7.NW) && (await (0, e8.TA)(e7.NW));
    let t = e0.Ay.getEmbeddedActivitiesForChannel(e).every((e) => e.applicationId !== e7.NW);
    return await (0, eJ.su)({
        channelId: e,
        applicationId: e7.NW,
        isStart: t,
        embeddedActivitiesManager: (0, e1.A)(),
        renderInFramePool: !0,
    });
}
async function e4(e) {
    let { channel: t, selectedRoleIds: l } = e,
        n = [];
    if (l.length > 0)
        for (let e of (n.push({ id: t.guild_id, type: eZ.r2.ROLE, allow: e6.x3, deny: eB.xBc.USE_EMBEDDED_ACTIVITIES }),
        l))
            n.push({ id: e, type: eZ.r2.ROLE, allow: eB.xBc.USE_EMBEDDED_ACTIVITIES, deny: e6.x3 });
    let i = await (0, eQ.RT)(t.id, { permissionOverwrites: n });
    if (!i.ok) throw i;
}
let e9 = [];
var te = l(344351),
    tt = l(256693),
    tl = l(812901),
    tn = l(317608),
    ti = l(953538);
let ta = {
    [a.a.IMAGE_TEXT]: {
        View: function (e) {
            let { widget: t, guildSpaceMode: l, guildId: i } = e,
                { text: a, image_hash: r } = t.config,
                s = "edit" === l ? t.config.image : void 0,
                d = void 0 !== s ? s : null != r ? eW(i, t.id, r) : null;
            return (0, n.jsxs)("div", {
                className: eF.kL,
                children: [
                    null != d && (0, n.jsx)("img", { className: eF.Sl, src: d, alt: "" }),
                    null != a &&
                        (0, n.jsx)(c.E, {
                            variant: "text-md/normal",
                            color: "text-subtle",
                            className: eF.Qq,
                            children: a,
                        }),
                ],
            });
        },
        Edit: function (e) {
            let { widget: t, commit: l, cancel: r } = e,
                s = t.config,
                [d, o] = i.useState(s.title ?? ""),
                [u, c] = i.useState(s.text ?? ""),
                [f, x] = i.useState(s.image),
                [h, g] = i.useState(null),
                p = (0, A.bG)([eM.A], () => eM.A.getGuildId()),
                j = void 0 !== f ? f : null != s.image_hash && null != p ? eW(p, t.id, s.image_hash) : null;
            return (0, n.jsxs)(N.B, {
                gap: 16,
                children: [
                    (0, n.jsx)(eT.k, {
                        label: m.intl.string(m.t.gnwWrx),
                        value: d,
                        onChange: function (e) {
                            (g(null), o(e));
                        },
                        maxLength: 100,
                        showCharacterCount: !0,
                    }),
                    (0, n.jsx)(eN.D, {
                        label: m.intl.string(m.t.X4IxWL),
                        children: (0, n.jsxs)(N.B, {
                            gap: 16,
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            className: eO.B,
                            children: [
                                (0, n.jsxs)(N.B, {
                                    gap: 8,
                                    direction: "horizontal",
                                    children: [
                                        (0, n.jsx)(eL.A, {
                                            variant: "secondary",
                                            text: m.intl.string(m.t["MsUY/S"]),
                                            onChange: function (e) {
                                                (g(null), x(e));
                                            },
                                            maxFileSizeBytes: 0xa00000,
                                            onFileSizeError: () => (0, eG.A)(0xa00000),
                                        }),
                                        null != j &&
                                            (0, n.jsx)(E.m, {
                                                text: m.intl.string(m.t.N86XcP),
                                                ariaHidden: !0,
                                                children: (0, n.jsx)(eD.K, {
                                                    variant: "critical-secondary",
                                                    icon: ew.TrashIcon,
                                                    onClick: function () {
                                                        (g(null), x(null));
                                                    },
                                                    "aria-label": m.intl.string(m.t.N86XcP),
                                                }),
                                            }),
                                    ],
                                }),
                                null != j && (0, n.jsx)("img", { className: eO.V, src: j, alt: "" }),
                            ],
                        }),
                    }),
                    (0, n.jsx)(ey.f, {
                        label: m.intl.string(m.t.COGMNC),
                        value: u,
                        onChange: function (e) {
                            (g(null), c(e));
                        },
                        rows: 3,
                        autosize: !0,
                        maxLength: 500,
                        showCharacterCount: !0,
                    }),
                    null != h &&
                        (0, n.jsx)("div", {
                            role: "alert",
                            children: (0, n.jsx)(eR.w, { type: "critical", children: h }),
                        }),
                    (0, n.jsxs)(eb.e, {
                        fullWidth: !0,
                        children: [
                            (0, n.jsx)(eC.$, { variant: "secondary", text: m.intl.string(m.t["ETE/oC"]), onClick: r }),
                            (0, n.jsx)(eC.$, {
                                variant: "primary",
                                text: m.intl.string(m.t["R3BPH+"]),
                                onClick: function () {
                                    let e;
                                    if (
                                        ((e = void 0 !== f ? null !== f : null != s.image_hash),
                                        0 === u.length && !e && (g(m.intl.string(C.default.zleX9q)), 1))
                                    )
                                        return;
                                    let t = {
                                        type: a.a.IMAGE_TEXT,
                                        image_hash: s.image_hash,
                                        text: u.length > 0 ? u : null,
                                        title: d.length > 0 ? d : null,
                                    };
                                    (void 0 !== f && (t.image = f), l(t));
                                },
                            }),
                        ],
                    }),
                ],
            });
        },
        useTitle: function (e) {
            return e.config.title ?? e.default_title ?? "";
        },
    },
    [a.a.LEADERBOARD]: {
        View: function (e) {
            let { hydration: t, guildId: l } = e;
            return null == t || "idle" === t.status || "loading" === t.status
                ? (0, n.jsx)(x, {})
                : "error" === t.status
                  ? (0, n.jsx)(h, {})
                  : (0, n.jsx)(ev, { guildId: l, data: t.data });
        },
        useTitle: function (e, t) {
            return t?.status !== "success" ? (e.default_title ?? "") : (0, d.K)(b(t.data) ? void 0 : t.data.stat).name;
        },
        TitleIcon: function () {
            return (0, n.jsx)(s.TrophyIcon, { size: "xs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        },
        HeaderAccessory: function (e) {
            let { hydration: t } = e;
            return t?.status !== "success" || b(t.data) ? null : (0, n.jsx)(eS, { data: t.data });
        },
    },
    [a.a.WHITEBOARD]: {
        View: function (e) {
            let t,
                l,
                a = (0, eV.n)(),
                r = (0, A.bG)(
                    [eH.A, eX.A],
                    () => {
                        let e = null != a ? eH.A.getChannel(a) : void 0;
                        return null != e && eX.A.can(eB.xBc.USE_EMBEDDED_ACTIVITIES, e);
                    },
                    [a],
                ),
                s = (0, A.bG)(
                    [e0.Ay],
                    () => {
                        let e = e0.Ay.getCurrentEmbeddedActivity();
                        return null == e ||
                            e.applicationId !== e7.NW ||
                            e.location.kind !== te.T.GUILD_CHANNEL ||
                            e.location.channel_id !== a
                            ? null
                            : e;
                    },
                    [a],
                ),
                d = (0, A.bG)([e0.Ay], () => e0.Ay.isLaunchingActivity(), []),
                { authResolved: o, isAuthorized: u } =
                    ((t = (0, A.bG)(
                        [e3.default],
                        () => e3.default.getFetchStateForApplication(e7.NW) === e3.FetchState.FETCHED,
                        [],
                    )),
                    (l = (0, A.bG)(
                        [e3.default, K.A],
                        () => {
                            let e = e3.default.getNewestTokenForApplication(e7.NW);
                            if (null == e) return !1;
                            let t = K.A.getApplication(e7.NW),
                                l = t?.integrationTypesConfig?.[eK.b.USER_INSTALL]?.oauth2InstallParams?.scopes;
                            if (null == l) return !0;
                            let n = new Set(e.scopes);
                            return l.every((e) => n.has(e));
                        },
                        [],
                    )),
                    i.useEffect(() => {
                        (e3.default.getFetchStateForApplication(e7.NW) === e3.FetchState.NOT_FETCHED &&
                            e2.A.fetch([e7.NW]),
                            null == K.A.getApplication(e7.NW) && (0, e8.TA)(e7.NW));
                    }, []),
                    { authResolved: t, isAuthorized: l }),
                f = i.useRef(!1);
            i.useEffect(() => {
                null == s && null != a && r && o && u && !f.current && ((f.current = !0), e5(a));
            }, [r, a, s, o, u]);
            let x = i.useCallback(() => {
                    null != a && ((f.current = !0), e5(a));
                }, [a]),
                h = null != a && o && !u;
            return r
                ? (0, n.jsxs)("div", {
                      className: ti.kL,
                      children: [
                          null != s &&
                              (0, n.jsx)(tn.A, {
                                  frameId: (0, tt.Ri)(s),
                                  level: tl.A.WithinAppContent,
                                  className: ti.t$,
                              }),
                          null == s &&
                              h &&
                              (0, n.jsx)("div", {
                                  className: ti.P5,
                                  children: (0, n.jsx)(eC.$, {
                                      variant: "secondary",
                                      text: m.intl.string(C.default.PSuly6),
                                      loading: d,
                                      onClick: x,
                                  }),
                              }),
                      ],
                  })
                : (0, n.jsx)("div", {
                      className: ti.kL,
                      children: (0, n.jsx)("div", {
                          className: ti.m0,
                          children: (0, n.jsx)(c.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: m.intl.string(C.default["nXc/MQ"]),
                          }),
                      }),
                  });
        },
        Edit: function (e) {
            let { cancel: t } = e,
                l = (0, A.bG)([eM.A], () => eM.A.getGuildId()),
                a = eq.default.castGuildIdAsEveryoneGuildRoleId(l),
                r = (0, eV.n)(),
                s = (0, A.bG)([eH.A], () => (null != r ? eH.A.getChannel(r) : void 0), [r]),
                d = (0, A.bG)([eX.A], () => null != s && eX.A.can(eB.xBc.MANAGE_ROLES, s), [s]),
                o = (0, A.bG)([eY.A], () => (null == l ? e9 : eY.A.getSortedRoles(l).filter((e) => e.id !== a)), [
                    l,
                    a,
                ]),
                u = i.useMemo(() => {
                    let e;
                    return null != s
                        ? null != (e = s.permissionOverwrites[s.guild_id]) &&
                          e$.zy(e.deny, eB.xBc.USE_EMBEDDED_ACTIVITIES)
                            ? o
                                  .filter((e) => {
                                      let t = s.permissionOverwrites[e.id];
                                      return null != t && e$.zy(t.allow, eB.xBc.USE_EMBEDDED_ACTIVITIES);
                                  })
                                  .map((e) => e.id)
                            : []
                        : [];
                }, [s, o]),
                [c, f] = i.useState(null),
                [x, h] = i.useState(!1),
                [g, p] = i.useState(!1),
                j = c ?? u,
                v = i.useMemo(() => o.map((e) => ({ id: e.id, label: e.name, value: e.id })), [o]);
            async function E() {
                if (null != s) {
                    (p(!1), h(!0));
                    try {
                        (await e4({ channel: s, selectedRoleIds: j }), t());
                    } catch {
                        (h(!1), p(!0));
                    }
                }
            }
            return null == s
                ? null
                : (0, n.jsxs)(N.B, {
                      gap: 16,
                      children: [
                          (0, n.jsx)(ez.Z, {
                              selectionMode: "multiple",
                              label: m.intl.string(C.default.XXLbfv),
                              description: m.intl.string(C.default.XrpYIG),
                              placeholder: m.intl.string(C.default.pp6WeD),
                              options: v,
                              value: j,
                              onSelectionChange: function (e) {
                                  (p(!1), f(e));
                              },
                              disabled: !d || x,
                              fullWidth: !0,
                              wrapTags: !0,
                          }),
                          !d && (0, n.jsx)(eR.w, { type: "warning", children: m.intl.string(C.default.UPLtlA) }),
                          g &&
                              (0, n.jsx)("div", {
                                  role: "alert",
                                  children: (0, n.jsx)(eR.w, {
                                      type: "critical",
                                      children: m.intl.string(C.default.xyCJYs),
                                  }),
                              }),
                          (0, n.jsxs)(eb.e, {
                              fullWidth: !0,
                              children: [
                                  (0, n.jsx)(eC.$, {
                                      variant: "secondary",
                                      text: m.intl.string(m.t["ETE/oC"]),
                                      onClick: t,
                                      disabled: x,
                                  }),
                                  (0, n.jsx)(eC.$, {
                                      variant: "primary",
                                      text: m.intl.string(m.t["R3BPH+"]),
                                      onClick: E,
                                      disabled: !d,
                                      loading: x,
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
