l.d(t, { m: () => tm });
var n = l(477900),
    i = l(582128),
    a = l(593673),
    r = l(661531),
    s = l(369606),
    d = l(866665),
    o = l(408278),
    c = l(26430);
l(539888);
var u = l(289873),
    m = l(738188),
    f = l(834730),
    x = l(375708),
    h = l(448492);
function g() {
    return (0, n.jsx)("div", {
        className: h.w,
        children: (0, n.jsx)(u.y, { type: u.y.Type.SPINNING_CIRCLE, "aria-label": x.intl.string(x.t.ZTNur7) }),
    });
}
function j() {
    return (0, n.jsxs)("div", {
        className: h.w,
        role: "alert",
        children: [
            (0, n.jsx)(m.WarningIcon, { size: "md", color: "text-feedback-critical", "aria-hidden": !0 }),
            (0, n.jsx)(f.E, { variant: "text-sm/normal", color: "text-muted", children: x.intl.string(x.t.F8FvUy) }),
        ],
    });
}
var p = l(503698),
    A = l.n(p),
    v = l(17928),
    E = l(364522),
    _ = l(663417),
    I = l(80682),
    N = l(287809),
    S = l(58703),
    y = l(331322),
    b = l(297264),
    C = l(251812);
function T(e) {
    return e.entries.length < 3;
}
function D(e) {
    return (0, C.K)(T(e) ? void 0 : e.stat).name;
}
var w = l(61567),
    R = l(823353);
function G() {
    return (0, n.jsxs)(y.B, {
        className: R.w,
        align: "center",
        justify: "center",
        gap: 6,
        children: [
            (0, n.jsx)(b.D, {
                variant: "heading-md/semibold",
                color: "text-default",
                children: x.intl.string(w.default.ULK65a),
            }),
            (0, n.jsx)(f.E, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: x.intl.format(w.default["81PK67"], { memberCount: 3 }),
            }),
        ],
    });
}
var M = l(778712),
    L = l(463930),
    U = l(97808),
    P = l(939249),
    k = l(342296),
    B = l(927813),
    W = l(518782);
function O(e) {
    let t = Math.floor(Math.max(e, 0) / B.A.Seconds.MINUTE);
    return x.intl.formatToPlainString(w.default["6Y8H0A"], {
        hours: Math.floor(t / B.A.Minutes.HOUR),
        minutes: t % B.A.Minutes.HOUR,
    });
}
function z(e, t) {
    switch (t) {
        case W.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return {
                primary: x.intl.formatToPlainString(x.t["k2UNz+"], { days: e.value }),
                secondary: O(e.time_played_seconds),
            };
        case W.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return {
                primary: x.intl.formatToPlainString(w.default.rgpc8E, { count: e.value }),
                secondary: O(e.time_played_seconds),
            };
        case W.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            let l, n, i;
            return {
                primary:
                    ((n = Math.floor((l = Math.floor(Math.max(e.value, 0) / B.A.Millis.MINUTE)) / B.A.Minutes.HOUR)),
                    (i = l % B.A.Minutes.HOUR),
                    0 === n
                        ? x.intl.formatToPlainString(w.default.bgQf2H, { minutes: i })
                        : 0 === i
                          ? x.intl.formatToPlainString(w.default["D/HToK"], { hours: n })
                          : x.intl.formatToPlainString(w.default.fvtrHn, { hours: n, minutes: i })),
            };
        default:
            return { primary: "\u2014" };
    }
}
var F = l(140735),
    H = l(81466),
    Y = l(406810),
    X = l(687966),
    K = l(109112),
    q = l(683063),
    V = l(573435),
    $ = l(402860),
    Q = l(396583),
    Z = l(587895),
    J = l(429913),
    ee = l(967144),
    et = l(696451),
    el = l(562153);
function en(e, t) {
    return { id: e, name: x.intl.string(w.default.rhDbuQ), iconUrl: void 0, isLoading: t };
}
function ei(e, t) {
    return e.get(t) ?? en(t, !1);
}
function ea(e, t) {
    return t.map((t) => ei(e, t));
}
function er(e, t, l) {
    let n = t.user_id,
        i = (0, v.bG)([N.default], () => N.default.getUser(n), [n]),
        a = (0, v.bG)([et.Ay], () => et.Ay.getMember(e, n), [e, n]),
        r = (0, ee.gn)(e, n, a?.colorStrings ?? null),
        s = el.Ay.useName(e, void 0, i),
        d = null != i ? s : t.name;
    return {
        user: i,
        member: a,
        roleColorStrings: r,
        baseName: d,
        displayName: l ? x.intl.formatToPlainString(w.default.subXXA, { name: d }) : d,
    };
}
function es(e) {
    let t = (e + B.A.Seconds.WEEK) * B.A.Millis.SECOND,
        [l, n] = i.useState(() => Date.now()),
        a = t - l,
        r = a <= 0,
        s = a - (Math.ceil(a / B.A.Millis.DAY) - 1) * B.A.Millis.DAY;
    return (
        (0, Q.A)(() => n(Date.now()), r ? null : s),
        i.useMemo(
            () => ({
                ended: r,
                endDate: new Date(t),
                badgeLabel: r
                    ? x.intl.string(w.default["J8r/7L"])
                    : x.intl.formatToPlainString(w.default["PuaR+2"], { days: Math.ceil(a / B.A.Millis.DAY) }),
            }),
            [r, t, a],
        )
    );
}
var ed = l(518477),
    eo = l(870087);
function ec(e) {
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
        c = er(t, l, r),
        u = l.application_ids[0],
        m = null != u ? ei(a, u) : void 0;
    return (0, n.jsxs)("div", {
        ref: o,
        "aria-hidden": d,
        inert: d,
        className: A()(eo.nM, { [eo.Bh]: r && !d, [eo.lR]: s }),
        children: [
            (0, n.jsx)(eu, { guildId: t, entry: l, identity: c, lastPlayedGame: m }),
            (0, n.jsx)(ex, { entry: l, stat: i }),
            (0, n.jsx)(ep, {
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
function eu(e) {
    let { guildId: t, entry: l, identity: a, lastPlayedGame: r } = e,
        s = i.useRef(null),
        d = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(em, { rank: l.rank }),
                (0, n.jsx)(U.eu, {
                    size: M._3.SIZE_32,
                    src: a.user?.getAvatarURL(t, (0, M.FT)(M._3.SIZE_32)) ?? void 0,
                    className: eo.my,
                    "aria-hidden": !0,
                }),
                (0, n.jsxs)("div", {
                    className: eo.Dc,
                    children: [
                        (0, n.jsx)(b.D, {
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            lineClamp: 1,
                            children: (0, n.jsx)(L.g, {
                                name: a.displayName,
                                colorString: a.member?.colorString ?? null,
                                colorStrings: a.roleColorStrings,
                            }),
                        }),
                        null != r &&
                            (0, n.jsx)(f.E, {
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                lineClamp: 1,
                                children: x.intl.formatToPlainString(w.default.YuNVPY, { gameName: r.name }),
                            }),
                    ],
                }),
            ],
        });
    return null == a.user
        ? (0, n.jsx)("div", { className: eo.D_, children: d })
        : (0, n.jsx)(k.A, {
              targetElementRef: s,
              user: a.user,
              guildId: t,
              children: (e) => (0, n.jsx)(P.D, { ...e, innerRef: s, className: A()(eo.D_, eo.FB), children: d }),
          });
}
function em(e) {
    let { rank: t } = e,
        l = x.intl.formatToPlainString(w.default.I4JiAQ, { rank: t });
    switch (t) {
        case 1:
            return (0, n.jsx)("div", {
                className: eo.Tm,
                "aria-label": l,
                children: (0, n.jsx)("div", { className: eo.Xe }),
            });
        case 2:
            return (0, n.jsx)("div", {
                className: eo.Tm,
                "aria-label": l,
                children: (0, n.jsx)("div", { className: eo.XQ }),
            });
        case 3:
            return (0, n.jsx)("div", {
                className: eo.Tm,
                "aria-label": l,
                children: (0, n.jsx)("div", { className: eo.c9 }),
            });
        default:
            return (0, n.jsxs)("div", {
                className: eo.mH,
                children: [
                    (0, n.jsx)(F.A, { children: l }),
                    (0, n.jsx)(f.E, {
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
function ef(e) {
    let { stat: t } = e;
    switch (t) {
        case W.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return (0, n.jsx)(H.CalendarIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case W.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            return (0, n.jsx)(Y.ClockIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case W.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return (0, n.jsx)(X.GameControllerIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        default:
            return null;
    }
}
function ex(e) {
    let { entry: t, stat: l } = e,
        { primary: i, secondary: a } = z(t, l);
    return (0, n.jsxs)("div", {
        className: eo.TH,
        children: [
            (0, n.jsxs)("div", {
                className: eo.bf,
                children: [
                    (0, n.jsx)(ef, { stat: l }),
                    (0, n.jsx)(f.E, { variant: "text-sm/medium", color: "text-subtle", children: i }),
                ],
            }),
            null != a && (0, n.jsx)(f.E, { variant: "text-xs/medium", color: "text-muted", children: a }),
        ],
    });
}
function eh(e) {
    let { game: t, notched: l } = e;
    return (0, n.jsx)("span", {
        className: eo.rO,
        "aria-hidden": !0,
        children: (0, n.jsx)(V.Ay, {
            mask: l ? V.l8[24] : V.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null != t.iconUrl
                    ? (0, n.jsx)("img", { className: eo.Gt, src: t.iconUrl, alt: "", "aria-hidden": !0 })
                    : (0, n.jsx)("span", {
                          className: eo.ct,
                          "aria-hidden": !0,
                          children: !t.isLoading && (0, n.jsx)(K._, { size: "xxs", color: r.A.colors.ICON_SUBTLE }),
                      }),
        }),
    });
}
function eg(e) {
    let { played: t, totalCount: l } = e,
        i = t.slice(0, 2),
        a = l - i.length;
    return (0, n.jsxs)("div", {
        className: eo.Nw,
        children: [
            i.map((e, t) => (0, n.jsx)(eh, { game: e, notched: a > 0 || t !== i.length - 1 }, `${e.id}-${t}`)),
            a > 0
                ? (0, n.jsx)("span", {
                      className: eo.rO,
                      children: (0, n.jsx)(V.Ay, {
                          mask: V.Ay.Masks.SQUIRCLE,
                          width: 24,
                          height: 24,
                          children: (0, n.jsx)("div", {
                              className: eo.p0,
                              children: (0, n.jsx)(f.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-subtle",
                                  children: x.intl.formatToPlainString(w.default.JiMMEd, { count: a }),
                              }),
                          }),
                      }),
                  })
                : null,
        ],
    });
}
function ej(e) {
    let { played: t, totalCount: l, children: i } = e;
    return (0, n.jsx)(q.u, {
        body:
            0 === t.length
                ? x.intl.string(w.default["7CrlYb"])
                : 1 === t.length
                  ? x.intl.formatToPlainString(w.default.dbNpK0, { firstGame: t[0].name })
                  : 2 === t.length && 2 === l
                    ? x.intl.formatToPlainString(w.default.tqVg4M, { firstGame: t[0].name, secondGame: t[1].name })
                    : x.intl.formatToPlainString(w.default.bxcrSz, {
                          firstGame: t[0].name,
                          secondGame: t[1].name,
                          otherCount: l - 2,
                      }),
        asset: t.length > 0 ? (0, n.jsx)(eg, { played: t, totalCount: t.length }) : void 0,
        assetSize: t.length > 1 ? 43 : 24,
        children: i,
    });
}
function ep(e) {
    let { guildId: t, userId: l, name: a, applicationIds: r, applicationCount: s, games: d } = e,
        o = ea(d, r),
        c = i.useCallback(() => {
            (0, $.openUserProfileModal)({
                userId: l,
                guildId: t,
                tabSection: ed.RP.ACTIVITY,
                scrollTarget: ed.bk.RECENT_ACTIVITY,
            });
        }, [l, t]);
    return (0, n.jsx)("div", {
        className: eo.ag,
        children: (0, n.jsx)(ej, {
            played: o,
            totalCount: s,
            children: (0, n.jsx)(P.D, {
                className: A()(eo.Nw, eo.Dz),
                "aria-label": x.intl.formatToPlainString(w.default.o6mBdl, { name: a }),
                onClick: c,
                children: (0, n.jsx)(eg, { played: o, totalCount: s }),
            }),
        }),
    });
}
var eA = l(189043);
function ev(e) {
    let { guildId: t, entries: l, stat: i, games: a, currentUserEntry: r, currentUserPillarRef: s } = e,
        d = {
            1: { column: eA.HC, pillar: eA.P5 },
            2: { column: eA.th, pillar: eA.Vk },
            3: { column: eA.Ou, pillar: eA.el },
        };
    return (0, n.jsx)("div", {
        className: eA.pI,
        role: "list",
        "aria-label": x.intl.string(w.default.wKXLfQ),
        children: l.map((e, l) =>
            (0, n.jsx)(
                eE,
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
function eE(e) {
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
        m = ea(o, l.application_ids),
        x = er(t, l, c),
        { primary: h } = z(l, d),
        g = 1 === a ? M._3.SIZE_48 : M._3.SIZE_40,
        j = i.useRef(null),
        p = A()(eA.dR, { [eA.m$]: 1 === a, [eA.wd]: 2 === a, [eA.p0]: 3 === a }),
        v = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(b.D, {
                    variant: "heading-sm/semibold",
                    color: "text-default",
                    lineClamp: 1,
                    className: eA.IY,
                    children: (0, n.jsx)(L.g, {
                        name: x.displayName,
                        colorString: x.member?.colorString ?? null,
                        colorStrings: x.roleColorStrings,
                    }),
                }),
                (0, n.jsx)(ej, {
                    played: m,
                    totalCount: l.application_count,
                    children: (0, n.jsx)(f.E, {
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
                    (0, n.jsx)(U.eu, {
                        size: g,
                        src: x.user?.getAvatarURL(t, (0, M.FT)(g)) ?? void 0,
                        "aria-hidden": !0,
                    }),
                    (0, n.jsx)("div", { className: p }),
                ],
            }),
            null != x.user
                ? (0, n.jsx)(k.A, {
                      targetElementRef: j,
                      user: x.user,
                      guildId: t,
                      children: (e) => (0, n.jsx)(P.D, { ...e, className: A()(eA.DX, s), innerRef: j, children: v }),
                  })
                : (0, n.jsx)("div", { className: A()(eA.DX, s), children: v }),
        ],
    });
}
var e_ = l(219047);
function eI(e) {
    let t,
        l,
        a,
        { guildId: r, data: s, inModal: d = !1 } = e,
        { stat: o, entries: c } = s,
        { ended: u } = es(s.week_start_ts),
        m = (0, v.bG)([N.default], () => N.default.getCurrentUser()?.id),
        f = i.useMemo(() => c.find((e) => e.user_id === m), [c, m]),
        x = i.useMemo(() => {
            let e = c.slice(0, 20);
            return null == f || e.includes(f) ? e : [...e, f];
        }, [c, f]),
        h = i.useMemo(() => Array.from(new Set(x.map((e) => e.user_id))), [x]);
    (0, I.k6)(r, h);
    let g =
            ((t = i.useMemo(() => Array.from(new Set(x.flatMap((e) => e.application_ids))), [x])),
            (l = (0, J.A)(t)),
            (a = (0, v.yK)([Z.A], () => t.map((e) => Z.A.didFetchingApplicationFail(e)))),
            i.useMemo(() => {
                let e = new Map();
                return (
                    t.forEach((t, n) => {
                        let i = l[n];
                        e.set(
                            t,
                            null != i
                                ? { id: t, name: i.name, iconUrl: i.getIconURL(64) ?? void 0, isLoading: !1 }
                                : en(t, !a[n]),
                        );
                    }),
                    e
                );
            }, [t, l, a])),
        {
            scrollerRef: j,
            userRowRef: p,
            floatingRowPosition: _,
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
        S = null != _,
        y = i.useCallback(
            (e) => {
                let t = e === f;
                return (0, n.jsx)(
                    ec,
                    {
                        guildId: r,
                        entry: e,
                        stat: o,
                        games: g,
                        isCurrentUser: t,
                        shouldDimForCurrentUser: t && S,
                        rowRef: t ? p : void 0,
                    },
                    `${e.rank}-${e.user_id}`,
                );
            },
            [S, f, g, r, o, p],
        );
    if (T(s)) return (0, n.jsx)(G, {});
    let b = u ? x.slice(3) : x,
        C = [x[0], x[1], x[2]];
    return (0, n.jsxs)("div", {
        children: [
            (0, n.jsxs)("div", {
                className: e_.SY,
                children: [
                    (0, n.jsxs)(E.d_, {
                        className: A()(e_.p_, { [e_.zE]: d }),
                        ref: j,
                        children: [
                            u &&
                                (0, n.jsx)(ev, {
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
                    null != f && null != _ && (0, n.jsx)("div", { className: A()(e_.Dz, "top" === _ ? e_.gN : e_.qV) }),
                    null != f &&
                        null != _ &&
                        (0, n.jsx)("div", {
                            className: A()(e_.z$, "top" === _ ? e_.aG : e_.Ie),
                            children: (0, n.jsx)(ec, {
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
            className: e_.z8,
            children: [
                (0, n.jsx)(_.RefreshIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 }),
                (0, n.jsx)(f.E, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: x.intl.string(w.default["/nma+a"]),
                }),
            ],
        });
    return null == t
        ? (0, n.jsx)("div", { className: e_.qr, children: i })
        : (0, n.jsx)("div", {
              className: A()(e_.qr, { [e_.zE]: l }),
              tabIndex: 0,
              children: (0, n.jsx)(d.m, {
                  text: x.intl.formatToPlainString(w.default["1bt50t"], { timestamp: (0, S.mk)(new Date(t)) }),
                  position: "bottom",
                  children: i,
              }),
          });
}
var eS = l(224640),
    ey = l(20742),
    eb = l(192308),
    eC = l(885386),
    eT = l(515746);
function eD(e) {
    let { data: t } = e,
        l = (0, C.K)(t.stat),
        { ended: i, endDate: a, badgeLabel: r } = es(t.week_start_ts),
        s = eC.PZ.useSetting(),
        d = 2 > (0, S.m_)(a, new Date()) ? (0, S.mk)(a, !1, s) : (0, S.i$)(a, "L LT", s),
        o = i
            ? x.intl.format(w.default.kG9XmM, { endedAt: d, nextStatName: (0, C.K)(t.next_stat).name })
            : x.intl.format(w.default["X+VLqi"], { statQuestion: l.question, endsAt: d });
    return (0, n.jsx)(q.u, {
        title: l.name,
        body: o,
        position: "top",
        children: (0, n.jsx)("div", {
            className: eT.q,
            tabIndex: 0,
            children: (0, n.jsx)(f.E, {
                variant: "text-xs/semibold",
                color: i ? "text-muted" : "text-brand",
                children: r,
            }),
        }),
    });
}
var ew = l(460614);
function eR(e) {
    let { guildId: t, data: l, modalProps: i } = e;
    return (0, n.jsxs)(eS.d, {
        size: "lg",
        "aria-label": D(l),
        ...i,
        children: [
            (0, n.jsxs)("div", {
                className: ew.wx,
                children: [
                    (0, n.jsxs)("div", {
                        className: ew.LD,
                        children: [
                            (0, n.jsx)(s.TrophyIcon, { size: "xs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 }),
                            (0, n.jsx)(b.D, { variant: "heading-sm/medium", className: ew.DD, children: D(l) }),
                            (0, n.jsx)(eD, { data: l }),
                        ],
                    }),
                    (0, n.jsx)(ey.s_, {}),
                ],
            }),
            (0, n.jsx)("div", { className: ew.rf, children: (0, n.jsx)(eI, { guildId: t, data: l, inModal: !0 }) }),
        ],
    });
}
var eG = l(452027),
    eM = l(103557),
    eL = l(825484),
    eU = l(821609),
    eP = l(95477),
    ek = l(241326),
    eB = l(683071),
    eW = l(2553),
    eO = l(405810),
    ez = l(967198),
    eF = l(488428),
    eH = l(776231),
    eY = l(486020),
    eX = l(652215);
function eK(e, t, l) {
    let n = eY.QB ? "webp" : "jpg",
        { CDN_HOST: i, API_ENDPOINT: a } = window.GLOBAL_ENV,
        r = eX.Rsh.GUILD_SPACE_IMAGE_TEXT_WIDGET_IMAGE(e, t, l, n),
        s = null != i ? `https://${i}${r}` : location.protocol + a + r,
        d = { size: (0, eH.kr)(500 * (0, eH.mZ)()) };
    return ("jpg" === n && (d.quality = "lossless"), (s += `?${eF.stringify(d)}`));
}
var eq = l(868602),
    eV = l(445187),
    e$ = l(890497),
    eQ = l(734057),
    eZ = l(317525),
    eJ = l(576705),
    e0 = l(935208),
    e1 = l(44167);
l(321073);
var e8 = l(485845),
    e2 = l(136722),
    e3 = l(435183),
    e6 = l(155718),
    e7 = l(795816),
    e5 = l(933958),
    e4 = l(574152),
    e9 = l(627363),
    te = l(712440),
    tt = l(733110),
    tl = l(488926),
    tn = l(818023);
async function ti(e) {
    null == Z.A.getApplication(tn.NW) && (await (0, e9.TA)(tn.NW));
    let t = e5.Ay.getEmbeddedActivitiesForChannel(e).every((e) => e.applicationId !== tn.NW);
    return await (0, e7.su)({
        channelId: e,
        applicationId: tn.NW,
        isStart: t,
        embeddedActivitiesManager: (0, e4.A)(),
        renderInFramePool: !0,
    });
}
async function ta(e) {
    let { channel: t, selectedRoleIds: l } = e,
        n = [];
    if (l.length > 0)
        for (let e of (n.push({ id: t.guild_id, type: e6.r2.ROLE, allow: tl.x3, deny: eX.xBc.USE_EMBEDDED_ACTIVITIES }),
        l))
            n.push({ id: e, type: e6.r2.ROLE, allow: eX.xBc.USE_EMBEDDED_ACTIVITIES, deny: tl.x3 });
    let i = await (0, e3.RT)(t.id, { permissionOverwrites: n });
    if (!i.ok) throw i;
}
let tr = [];
var ts = l(344351),
    td = l(256693),
    to = l(812901),
    tc = l(317608),
    tu = l(953538);
let tm = {
    [a.a.IMAGE_TEXT]: {
        View: function (e) {
            let { widget: t, guildSpaceMode: l, guildId: i } = e,
                { text: a, image_hash: r } = t.config,
                s = "edit" === l ? t.config.image : void 0,
                d = void 0 !== s ? s : null != r ? eK(i, t.id, r) : null;
            return (0, n.jsxs)("div", {
                className: eV.kL,
                children: [
                    null != d && (0, n.jsx)("img", { className: eV.Sl, src: d, alt: "" }),
                    null != a &&
                        (0, n.jsx)(f.E, {
                            variant: "text-md/normal",
                            color: "text-subtle",
                            className: eV.Qq,
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
                [h, g] = i.useState(s.image),
                [j, p] = i.useState(null),
                A = (0, v.bG)([ez.A], () => ez.A.getGuildId()),
                E = void 0 !== h ? h : null != s.image_hash && null != A ? eK(A, t.id, s.image_hash) : null;
            return (0, n.jsxs)(y.B, {
                gap: 16,
                children: [
                    (0, n.jsx)(eP.k, {
                        label: x.intl.string(x.t.gnwWrx),
                        value: c,
                        onChange: function (e) {
                            (p(null), u(e));
                        },
                        maxLength: 100,
                        showCharacterCount: !0,
                    }),
                    (0, n.jsx)(eG.D, {
                        label: x.intl.string(x.t.X4IxWL),
                        children: (0, n.jsxs)(y.B, {
                            gap: 16,
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            className: eq.B,
                            children: [
                                (0, n.jsxs)(y.B, {
                                    gap: 8,
                                    direction: "horizontal",
                                    children: [
                                        (0, n.jsx)(eO.A, {
                                            variant: "secondary",
                                            text: x.intl.string(x.t["MsUY/S"]),
                                            onChange: function (e) {
                                                (p(null), g(e));
                                            },
                                            maxFileSizeBytes: 0xa00000,
                                            onFileSizeError: () => (0, eW.A)(0xa00000),
                                        }),
                                        null != E &&
                                            (0, n.jsx)(d.m, {
                                                text: x.intl.string(x.t.N86XcP),
                                                ariaHidden: !0,
                                                children: (0, n.jsx)(o.K, {
                                                    variant: "critical-secondary",
                                                    icon: ek.TrashIcon,
                                                    onClick: function () {
                                                        (p(null), g(null));
                                                    },
                                                    "aria-label": x.intl.string(x.t.N86XcP),
                                                }),
                                            }),
                                    ],
                                }),
                                null != E && (0, n.jsx)("img", { className: eq.V, src: E, alt: "" }),
                            ],
                        }),
                    }),
                    (0, n.jsx)(eM.f, {
                        label: x.intl.string(x.t.COGMNC),
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
                            children: (0, n.jsx)(eB.w, { type: "critical", children: j }),
                        }),
                    (0, n.jsxs)(eL.e, {
                        fullWidth: !0,
                        children: [
                            (0, n.jsx)(eU.$, { variant: "secondary", text: x.intl.string(x.t["ETE/oC"]), onClick: r }),
                            (0, n.jsx)(eU.$, {
                                variant: "primary",
                                text: x.intl.string(x.t["R3BPH+"]),
                                onClick: function () {
                                    let e;
                                    if (
                                        ((e = void 0 !== h ? null !== h : null != s.image_hash),
                                        0 === m.length && !e && (p(x.intl.string(w.default.zleX9q)), 1))
                                    )
                                        return;
                                    let t = {
                                        type: a.a.IMAGE_TEXT,
                                        image_hash: s.image_hash,
                                        text: m.length > 0 ? m : null,
                                        title: c.length > 0 ? c : null,
                                    };
                                    (void 0 !== h && (t.image = h), l(t));
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
                ? (0, n.jsx)(g, {})
                : "error" === t.status
                  ? (0, n.jsx)(j, {})
                  : (0, n.jsx)(eI, { guildId: l, data: t.data });
        },
        useTitle: function (e, t) {
            return t?.status !== "success" ? (e.default_title ?? "") : D(t.data);
        },
        TitleIcon: function () {
            return (0, n.jsx)(s.TrophyIcon, { size: "xs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        },
        HeaderAccessory: function (e) {
            let { hydration: t } = e;
            return t?.status !== "success" || T(t.data) ? null : (0, n.jsx)(eD, { data: t.data });
        },
        HeaderActions: function (e) {
            let { hydration: t, guildId: l } = e,
                i = t?.status === "success" ? t.data : void 0;
            return null != i && T(i)
                ? null
                : (0, n.jsx)(d.m, {
                      text: x.intl.string(x.t.dcl9MQ),
                      children: (0, n.jsx)(o.K, {
                          variant: "icon-only",
                          size: "sm",
                          icon: c._,
                          "aria-label": x.intl.string(x.t.dcl9MQ),
                          disabled: null == i,
                          onClick: function () {
                              null != i &&
                                  (function (e) {
                                      let { guildId: t, data: l } = e,
                                          i = (e) => (0, n.jsx)(eR, { guildId: t, data: l, modalProps: e });
                                      (0, eb.openModalLazy)(() => Promise.resolve(i), {
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
                a = (0, e1.n)(),
                r = (0, v.bG)(
                    [eQ.A, eJ.A],
                    () => {
                        let e = null != a ? eQ.A.getChannel(a) : void 0;
                        return null != e && eJ.A.can(eX.xBc.USE_EMBEDDED_ACTIVITIES, e);
                    },
                    [a],
                ),
                s = (0, v.bG)(
                    [e5.Ay],
                    () => {
                        let e = e5.Ay.getCurrentEmbeddedActivity();
                        return null == e ||
                            e.applicationId !== tn.NW ||
                            e.location.kind !== ts.T.GUILD_CHANNEL ||
                            e.location.channel_id !== a
                            ? null
                            : e;
                    },
                    [a],
                ),
                d = (0, v.bG)([e5.Ay], () => e5.Ay.isLaunchingActivity(), []),
                { authResolved: o, isAuthorized: c } =
                    ((t = (0, v.bG)(
                        [tt.default],
                        () => tt.default.getFetchStateForApplication(tn.NW) === tt.FetchState.FETCHED,
                        [],
                    )),
                    (l = (0, v.bG)(
                        [tt.default, Z.A],
                        () => {
                            let e = tt.default.getNewestTokenForApplication(tn.NW);
                            if (null == e) return !1;
                            let t = Z.A.getApplication(tn.NW),
                                l = t?.integrationTypesConfig?.[e8.b.USER_INSTALL]?.oauth2InstallParams?.scopes;
                            if (null == l) return !0;
                            let n = new Set(e.scopes);
                            return l.every((e) => n.has(e));
                        },
                        [],
                    )),
                    i.useEffect(() => {
                        (tt.default.getFetchStateForApplication(tn.NW) === tt.FetchState.NOT_FETCHED &&
                            te.A.fetch([tn.NW]),
                            null == Z.A.getApplication(tn.NW) && (0, e9.TA)(tn.NW));
                    }, []),
                    { authResolved: t, isAuthorized: l }),
                u = i.useRef(!1);
            i.useEffect(() => {
                null == s && null != a && r && o && c && !u.current && ((u.current = !0), ti(a));
            }, [r, a, s, o, c]);
            let m = i.useCallback(() => {
                    null != a && ((u.current = !0), ti(a));
                }, [a]),
                h = null != a && o && !c;
            return r
                ? (0, n.jsxs)("div", {
                      className: tu.kL,
                      children: [
                          null != s &&
                              (0, n.jsx)(tc.A, {
                                  frameId: (0, td.Ri)(s),
                                  level: to.A.WithinAppContent,
                                  className: tu.t$,
                              }),
                          null == s &&
                              h &&
                              (0, n.jsx)("div", {
                                  className: tu.P5,
                                  children: (0, n.jsx)(eU.$, {
                                      variant: "secondary",
                                      text: x.intl.string(w.default.PSuly6),
                                      loading: d,
                                      onClick: m,
                                  }),
                              }),
                      ],
                  })
                : (0, n.jsx)("div", {
                      className: tu.kL,
                      children: (0, n.jsx)("div", {
                          className: tu.m0,
                          children: (0, n.jsx)(f.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: x.intl.string(w.default["nXc/MQ"]),
                          }),
                      }),
                  });
        },
        Edit: function (e) {
            let { cancel: t } = e,
                l = (0, v.bG)([ez.A], () => ez.A.getGuildId()),
                a = e0.default.castGuildIdAsEveryoneGuildRoleId(l),
                r = (0, e1.n)(),
                s = (0, v.bG)([eQ.A], () => (null != r ? eQ.A.getChannel(r) : void 0), [r]),
                d = (0, v.bG)([eJ.A], () => null != s && eJ.A.can(eX.xBc.MANAGE_ROLES, s), [s]),
                o = (0, v.bG)([eZ.A], () => (null == l ? tr : eZ.A.getSortedRoles(l).filter((e) => e.id !== a)), [
                    l,
                    a,
                ]),
                c = i.useMemo(() => {
                    let e;
                    return null != s
                        ? null != (e = s.permissionOverwrites[s.guild_id]) &&
                          e2.zy(e.deny, eX.xBc.USE_EMBEDDED_ACTIVITIES)
                            ? o
                                  .filter((e) => {
                                      let t = s.permissionOverwrites[e.id];
                                      return null != t && e2.zy(t.allow, eX.xBc.USE_EMBEDDED_ACTIVITIES);
                                  })
                                  .map((e) => e.id)
                            : []
                        : [];
                }, [s, o]),
                [u, m] = i.useState(null),
                [f, h] = i.useState(!1),
                [g, j] = i.useState(!1),
                p = u ?? c,
                A = i.useMemo(() => o.map((e) => ({ id: e.id, label: e.name, value: e.id })), [o]);
            async function E() {
                if (null != s) {
                    (j(!1), h(!0));
                    try {
                        (await ta({ channel: s, selectedRoleIds: p }), t());
                    } catch {
                        (h(!1), j(!0));
                    }
                }
            }
            return null == s
                ? null
                : (0, n.jsxs)(y.B, {
                      gap: 16,
                      children: [
                          (0, n.jsx)(e$.Z, {
                              selectionMode: "multiple",
                              label: x.intl.string(w.default.XXLbfv),
                              description: x.intl.string(w.default.XrpYIG),
                              placeholder: x.intl.string(w.default.pp6WeD),
                              options: A,
                              value: p,
                              onSelectionChange: function (e) {
                                  (j(!1), m(e));
                              },
                              disabled: !d || f,
                              fullWidth: !0,
                              wrapTags: !0,
                          }),
                          !d && (0, n.jsx)(eB.w, { type: "warning", children: x.intl.string(w.default.UPLtlA) }),
                          g &&
                              (0, n.jsx)("div", {
                                  role: "alert",
                                  children: (0, n.jsx)(eB.w, {
                                      type: "critical",
                                      children: x.intl.string(w.default.xyCJYs),
                                  }),
                              }),
                          (0, n.jsxs)(eL.e, {
                              fullWidth: !0,
                              children: [
                                  (0, n.jsx)(eU.$, {
                                      variant: "secondary",
                                      text: x.intl.string(x.t["ETE/oC"]),
                                      onClick: t,
                                      disabled: f,
                                  }),
                                  (0, n.jsx)(eU.$, {
                                      variant: "primary",
                                      text: x.intl.string(x.t["R3BPH+"]),
                                      onClick: E,
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
