l.d(t, { m: () => lG });
var n,
    i = l(477900),
    a = l(582128),
    s = l(593673),
    r = l(661531),
    d = l(369606),
    c = l(866665),
    o = l(408278),
    u = l(26430),
    m = l(174459),
    x = l(562073),
    h = l(289873),
    f = l(738188),
    g = l(834730),
    j = l(375708),
    p = l(448492);
function v() {
    return (0, i.jsx)("div", {
        className: p.w,
        children: (0, i.jsx)(h.y, { type: h.y.Type.SPINNING_CIRCLE, "aria-label": j.intl.string(j.t.ZTNur7) }),
    });
}
function _() {
    return (0, i.jsxs)("div", {
        className: p.w,
        role: "alert",
        children: [
            (0, i.jsx)(f.WarningIcon, { size: "md", color: "text-feedback-critical", "aria-hidden": !0 }),
            (0, i.jsx)(g.E, { variant: "text-sm/normal", color: "text-muted", children: j.intl.string(j.t.F8FvUy) }),
        ],
    });
}
var E = l(503698),
    A = l.n(E),
    b = l(17928),
    I = l(364522),
    N = l(663417),
    S = l(140735),
    C = l(97808),
    y = l(778712),
    T = l(297264),
    k = l(463930),
    R = l(821609),
    w = l(80682),
    D = l(967144),
    M = l(885386),
    L = l(153488),
    U = l(696451),
    P = l(287809),
    G = l(58703),
    O = l(562153);
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
        {
            scrollerRef: t,
            scrollerNode: e,
            userRowRef: n,
            floatingRowPosition: "top" === i || "bottom" === i ? i : null,
        }
    );
}
var W = l(331322),
    z = l(927813),
    F = l(251812);
function H(e) {
    return e.entries.length < 3;
}
function q(e) {
    return (0, F.K)(H(e) ? void 0 : e.stat).name;
}
function K(e) {
    let t;
    return H(e)
        ? "empty_state"
        : null != (t = e.computed_at) && new Date(t).getTime() - e.week_start_ts * z.A.Millis.SECOND >= z.A.Millis.WEEK
          ? "podium"
          : "in_progress";
}
function Y(e) {
    let { expanded: t } = e;
    return t ? "regular" : "mini";
}
var $ = l(192308);
function Q(e) {
    (0, $.openModalLazy)(
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
                l.e("944602"),
                l.e("421778"),
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
    );
}
var V = l(104129),
    X = l(823353);
function Z(e) {
    let { guildId: t, onActivitySharingClick: l } = e,
        n = M.tz.useSetting(),
        a = M.JG.useSetting().includes(t),
        s = !n || a;
    return (0, i.jsxs)(W.B, {
        className: X.w,
        align: "center",
        justify: "center",
        gap: 16,
        padding: { top: 24, right: 16, bottom: 24, left: 16 },
        children: [
            (0, i.jsxs)(W.B, {
                align: "center",
                gap: 6,
                children: [
                    (0, i.jsx)(T.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: j.intl.string(V.default.ULK65a),
                    }),
                    (0, i.jsx)(g.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: j.intl.format(s ? V.default.ueza5l : V.default["81PK67"], { memberCount: 3 }),
                    }),
                ],
            }),
            s &&
                (0, i.jsx)(R.$, {
                    variant: "secondary",
                    size: "sm",
                    text: j.intl.string(V.default.fMbgeZ),
                    onClick: () => {
                        (l(), Q(t));
                    },
                }),
        ],
    });
}
var J = l(939249),
    ee = l(342296),
    et = l(518782);
function el(e) {
    let t = Math.floor(Math.max(e, 0) / z.A.Seconds.MINUTE),
        l = Math.floor(t / z.A.Minutes.HOUR),
        n = t % z.A.Minutes.HOUR;
    return 0 === l
        ? j.intl.formatToPlainString(V.default.DdzvGL, { minutes: n })
        : j.intl.formatToPlainString(V.default["6Y8H0A"], { hours: l, minutes: n });
}
function en(e, t) {
    switch (t) {
        case et.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return {
                primary: j.intl.formatToPlainString(j.t["k2UNz+"], { days: e.value }),
                secondary: el(e.time_played_seconds),
            };
        case et.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return {
                primary: j.intl.formatToPlainString(V.default.rgpc8E, { count: e.value }),
                secondary: el(e.time_played_seconds),
            };
        case et.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            let l, n, i;
            return {
                primary:
                    ((n = Math.floor((l = Math.floor(Math.max(e.value, 0) / z.A.Millis.MINUTE)) / z.A.Minutes.HOUR)),
                    (i = l % z.A.Minutes.HOUR),
                    0 === n
                        ? j.intl.formatToPlainString(V.default.bgQf2H, { minutes: i })
                        : 0 === i
                          ? j.intl.formatToPlainString(V.default["D/HToK"], { hours: n })
                          : j.intl.formatToPlainString(V.default.fvtrHn, { hours: n, minutes: i })),
            };
        default:
            return { primary: "\u2014" };
    }
}
var ei = l(81466),
    ea = l(406810),
    es = l(687966),
    er = l(109112),
    ed = l(683063),
    ec = l(573435),
    eo = l(402860),
    eu = l(396583),
    em = l(587895),
    ex = l(429913),
    eh = l(280450);
function ef(e, t) {
    return { id: e, name: j.intl.string(V.default.rhDbuQ), iconUrl: void 0, isLoading: t };
}
function eg(e, t) {
    return e.get(t) ?? ef(t, !1);
}
function ej(e, t) {
    return t.map((t) => eg(e, t));
}
function ep(e, t) {
    let l = t.user_id,
        n = (0, b.bG)([P.default], () => P.default.getUser(l), [l]),
        i = (0, b.bG)([U.Ay], () => U.Ay.getMember(e, l), [e, l]),
        a = (0, D.gn)(e, l, i?.colorStrings ?? null),
        s = O.Ay.useName(e, void 0, n),
        r = (0, b.bG)([eh.default], () => eh.default.getId()) === l,
        d = null != n ? s : t.name;
    return {
        user: n,
        member: i,
        roleColorStrings: a,
        baseName: d,
        displayName: r ? j.intl.formatToPlainString(V.default.subXXA, { name: d }) : d,
    };
}
var ev = l(518477),
    e_ = l(870087);
function eE(e) {
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
        } = e,
        m = ep(t, l),
        x = l.application_ids[0],
        h = null != x ? eg(s, x) : void 0,
        f = l.user_id,
        g = a.useCallback(() => {
            (u?.(),
                (0, eo.openUserProfileModal)({
                    userId: f,
                    guildId: t,
                    tabSection: ev.RP.ACTIVITY,
                    scrollTarget: ev.bk.RECENT_ACTIVITY,
                }));
        }, [u, f, t]);
    return (0, i.jsxs)("div", {
        ref: o,
        "aria-hidden": c,
        inert: c,
        className: A()(e_.nM, { [e_.Bh]: r && !c, [e_.lR]: d }),
        children: [
            (0, i.jsx)(eA, { guildId: t, entry: l, identity: m, lastPlayedGame: h, onClick: u }),
            (0, i.jsx)(eN, { entry: l, stat: n, name: m.baseName, onClick: g }),
            (0, i.jsx)(eT, {
                name: m.baseName,
                applicationIds: l.application_ids,
                applicationCount: l.application_count,
                games: s,
                onClick: g,
            }),
        ],
    });
}
function eA(e) {
    let { guildId: t, entry: l, identity: n, lastPlayedGame: s, onClick: r } = e,
        d = a.useRef(null),
        c = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(eb, { rank: l.rank }),
                (0, i.jsx)(C.eu, {
                    size: y._3.SIZE_32,
                    src: n.user?.getAvatarURL(t, (0, y.FT)(y._3.SIZE_32)) ?? void 0,
                    className: e_.my,
                    "aria-hidden": !0,
                }),
                (0, i.jsxs)("div", {
                    className: e_.Dc,
                    children: [
                        (0, i.jsx)(T.D, {
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            lineClamp: 1,
                            children: (0, i.jsx)(k.g, {
                                name: n.displayName,
                                colorString: n.member?.colorString ?? null,
                                colorStrings: n.roleColorStrings,
                            }),
                        }),
                        null != s &&
                            (0, i.jsx)(g.E, {
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                lineClamp: 1,
                                children: j.intl.formatToPlainString(V.default.YuNVPY, { gameName: s.name }),
                            }),
                    ],
                }),
            ],
        });
    return null == n.user
        ? (0, i.jsx)("div", { className: e_.D_, children: c })
        : (0, i.jsx)(ee.A, {
              targetElementRef: d,
              user: n.user,
              guildId: t,
              children: (e) =>
                  (0, i.jsx)(J.D, {
                      ...e,
                      innerRef: d,
                      className: A()(e_.D_, e_.FB),
                      onClick: (t) => {
                          (r?.(), e.onClick(t));
                      },
                      children: c,
                  }),
          });
}
function eb(e) {
    let { rank: t } = e,
        l = j.intl.formatToPlainString(V.default.I4JiAQ, { rank: t });
    switch (t) {
        case 1:
            return (0, i.jsx)("div", {
                className: e_.Tm,
                "aria-label": l,
                children: (0, i.jsx)("div", { className: e_.Xe }),
            });
        case 2:
            return (0, i.jsx)("div", {
                className: e_.Tm,
                "aria-label": l,
                children: (0, i.jsx)("div", { className: e_.XQ }),
            });
        case 3:
            return (0, i.jsx)("div", {
                className: e_.Tm,
                "aria-label": l,
                children: (0, i.jsx)("div", { className: e_.c9 }),
            });
        default:
            return (0, i.jsxs)("div", {
                className: e_.mH,
                children: [
                    (0, i.jsx)(S.A, { children: l }),
                    (0, i.jsx)(g.E, {
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
function eI(e) {
    let { stat: t } = e;
    switch (t) {
        case et.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return (0, i.jsx)(ei.CalendarIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case et.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            return (0, i.jsx)(ea.ClockIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case et.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return (0, i.jsx)(es.GameControllerIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        default:
            return null;
    }
}
function eN(e) {
    let { entry: t, stat: l, name: n, onClick: a } = e,
        { primary: s, secondary: r } = en(t, l);
    return (0, i.jsxs)(J.D, {
        className: e_.TH,
        "aria-label": j.intl.formatToPlainString(V.default.o6mBdl, { name: n }),
        onClick: a,
        children: [
            (0, i.jsxs)("div", {
                className: e_.bf,
                children: [
                    (0, i.jsx)(eI, { stat: l }),
                    (0, i.jsx)(g.E, { variant: "text-sm/medium", color: "text-subtle", children: s }),
                ],
            }),
            null != r && (0, i.jsx)(g.E, { variant: "text-xs/medium", color: "text-muted", children: r }),
        ],
    });
}
function eS(e) {
    let { game: t, notched: l } = e;
    return (0, i.jsx)("span", {
        className: e_.rO,
        "aria-hidden": !0,
        children: (0, i.jsx)(ec.Ay, {
            mask: l ? ec.l8[24] : ec.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null != t.iconUrl
                    ? (0, i.jsx)("img", { className: e_.Gt, src: t.iconUrl, alt: "", "aria-hidden": !0 })
                    : (0, i.jsx)("span", {
                          className: e_.ct,
                          "aria-hidden": !0,
                          children: !t.isLoading && (0, i.jsx)(er._, { size: "xxs", color: r.A.colors.ICON_SUBTLE }),
                      }),
        }),
    });
}
function eC(e) {
    let { played: t, totalCount: l } = e,
        n = t.slice(0, 2),
        a = l - n.length;
    return (0, i.jsxs)("div", {
        className: e_.Nw,
        children: [
            n.map((e, t) => (0, i.jsx)(eS, { game: e, notched: a > 0 || t !== n.length - 1 }, `${e.id}-${t}`)),
            a > 0
                ? (0, i.jsx)("span", {
                      className: e_.rO,
                      children: (0, i.jsx)(ec.Ay, {
                          mask: ec.Ay.Masks.SQUIRCLE,
                          width: 24,
                          height: 24,
                          children: (0, i.jsx)("div", {
                              className: e_.p0,
                              children: (0, i.jsx)(g.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-subtle",
                                  children: j.intl.formatToPlainString(V.default.JiMMEd, { count: a }),
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
    return (0, i.jsx)(ed.u, {
        body:
            0 === t.length
                ? j.intl.string(V.default["7CrlYb"])
                : 1 === t.length
                  ? j.intl.formatToPlainString(V.default.dbNpK0, { firstGame: t[0].name })
                  : 2 === t.length && 2 === l
                    ? j.intl.formatToPlainString(V.default.tqVg4M, { firstGame: t[0].name, secondGame: t[1].name })
                    : j.intl.formatToPlainString(V.default.bxcrSz, {
                          firstGame: t[0].name,
                          secondGame: t[1].name,
                          otherCount: l - 2,
                      }),
        asset: t.length > 0 ? (0, i.jsx)(eC, { played: t, totalCount: t.length }) : void 0,
        assetSize: t.length > 1 ? 43 : 24,
        children: n,
    });
}
function eT(e) {
    let { name: t, applicationIds: l, applicationCount: n, games: a, onClick: s } = e,
        r = ej(a, l);
    return (0, i.jsx)("div", {
        className: e_.ag,
        children: (0, i.jsx)(ey, {
            played: r,
            totalCount: n,
            children: (0, i.jsx)(J.D, {
                className: A()(e_.Nw, e_.Dz),
                "aria-label": j.intl.formatToPlainString(V.default.o6mBdl, { name: t }),
                onClick: s,
                children: (0, i.jsx)(eC, { played: r, totalCount: n }),
            }),
        }),
    });
}
var ek = l(189043);
function eR(e) {
    let { guildId: t, entries: l, stat: n, games: a, currentUserEntry: s, currentUserPillarRef: r, onClick: d } = e,
        c = {
            1: { column: ek.HC, pillar: ek.P5 },
            2: { column: ek.th, pillar: ek.Vk },
            3: { column: ek.Ou, pillar: ek.el },
        };
    return (0, i.jsx)("div", {
        className: ek.pI,
        role: "list",
        "aria-label": j.intl.string(V.default.wKXLfQ),
        children: l.map((e, l) =>
            (0, i.jsx)(
                ew,
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
function ew(e) {
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
        x = ej(c, l.application_ids),
        h = ep(t, l),
        { primary: f } = en(l, d),
        j = 1 === n ? y._3.SIZE_48 : y._3.SIZE_40,
        p = a.useRef(null),
        v = A()(ek.dR, { [ek.m$]: 1 === n, [ek.wd]: 2 === n, [ek.p0]: 3 === n }),
        _ = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: ek.R3,
                    children: [
                        (0, i.jsx)(C.eu, {
                            size: j,
                            src: h.user?.getAvatarURL(t, (0, y.FT)(j)) ?? void 0,
                            "aria-hidden": !0,
                        }),
                        (0, i.jsx)("div", { className: v }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: A()(ek.DX, r),
                    children: [
                        (0, i.jsx)(T.D, {
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            lineClamp: 1,
                            className: ek.IY,
                            children: (0, i.jsx)(k.g, {
                                name: h.displayName,
                                colorString: h.member?.colorString ?? null,
                                colorStrings: h.roleColorStrings,
                            }),
                        }),
                        (0, i.jsx)(ey, {
                            played: x,
                            totalCount: l.application_count,
                            children: (0, i.jsx)(g.E, {
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
                ? (0, i.jsx)(ee.A, {
                      targetElementRef: p,
                      user: h.user,
                      guildId: t,
                      children: (e) =>
                          (0, i.jsx)(J.D, {
                              ...e,
                              className: ek.fs,
                              innerRef: p,
                              onClick: (t) => {
                                  (m?.(), e.onClick(t));
                              },
                              children: _,
                          }),
                  })
                : (0, i.jsx)("div", { className: ek.fs, children: _ }),
    });
}
var eD = l(652215),
    eM = l(219047);
function eL(e) {
    let t,
        l,
        n,
        { guildId: s, data: r, inModal: d = !1 } = e,
        { stat: c, entries: o } = r,
        u = (0, b.bG)([P.default], () => P.default.getCurrentUser()?.id),
        x = a.useMemo(() => o.find((e) => e.user_id === u), [o, u]),
        h = a.useMemo(() => {
            let e = o.slice(0, 20);
            return null == x || e.includes(x) ? e : [...e, x];
        }, [o, x]),
        f = a.useMemo(() => Array.from(new Set(h.map((e) => e.user_id))), [h]);
    (0, w.k6)(s, f);
    let g =
            ((t = a.useMemo(() => Array.from(new Set(h.flatMap((e) => e.application_ids))), [h])),
            (l = (0, ex.A)(t)),
            (n = (0, b.yK)([em.A], () => t.map((e) => em.A.didFetchingApplicationFail(e)))),
            a.useMemo(() => {
                let e = new Map();
                return (
                    t.forEach((t, i) => {
                        let a = l[i];
                        e.set(
                            t,
                            null != a
                                ? { id: t, name: a.name, iconUrl: a.getIconURL(64) ?? void 0, isLoading: !1 }
                                : ef(t, !n[i]),
                        );
                    }),
                    e
                );
            }, [t, l, n])),
        j = H(r),
        p = K(r),
        v = "podium" === p,
        _ = Y({ expanded: d }),
        { scrollerRef: E, scrollerNode: N, userRowRef: S, floatingRowPosition: C } = B();
    !(function (e) {
        let {
                guildId: t,
                leaderboardLength: l,
                leaderboardState: n,
                leaderboardView: i,
                scrollerNode: s,
                isEmpty: r,
            } = e,
            d = a.useRef(null),
            c = `${t}:${l}:${n}:${i}`,
            o = a.useCallback(() => {
                d.current !== c &&
                    ((d.current = c),
                    m.default.track(eD.HAw.LEADERBOARD_END_IMPRESSION, {
                        guild_id: t,
                        leaderboard_length: l,
                        leaderboard_state: n,
                        leaderboard_view: i,
                    }));
            }, [t, c, l, n, i]);
        a.useEffect(() => {
            if (r) return void o();
            if (null == s) return;
            function e() {
                0 !== s.clientHeight && s.scrollHeight - s.scrollTop - s.clientHeight <= 1 && o();
            }
            (e(), s.addEventListener("scroll", e, { passive: !0 }));
            let t = new ResizeObserver(e);
            return (
                t.observe(s),
                () => {
                    (s.removeEventListener("scroll", e), t.disconnect());
                }
            );
        }, [r, s, o]);
    })({
        guildId: s,
        leaderboardLength: j ? 0 : h.length,
        leaderboardState: p,
        leaderboardView: _,
        scrollerNode: j ? null : N,
        isEmpty: j,
    });
    let y = null != C,
        T = a.useCallback(
            (e) => {
                m.default.track(eD.HAw.LEADERBOARD_CLICK, {
                    location: e,
                    guild_id: s,
                    leaderboard_state: p,
                    leaderboard_view: _,
                });
            },
            [s, p, _],
        ),
        k = null == x && null != u,
        R = a.useCallback(
            (e) => {
                let t = e === x;
                return (0, i.jsx)(
                    eE,
                    {
                        guildId: s,
                        entry: e,
                        stat: c,
                        games: g,
                        isCurrentUser: t,
                        shouldDimForCurrentUser: t && y,
                        rowRef: t ? S : void 0,
                        onClick: () => T("row"),
                    },
                    `${e.rank}-${e.user_id}`,
                );
            },
            [y, x, g, s, c, S, T],
        );
    if (j)
        return (0, i.jsx)("div", {
            className: eM.Cm,
            children: (0, i.jsx)(Z, { guildId: s, onActivitySharingClick: () => T("activity_sharing") }),
        });
    let D = v ? h.slice(3) : h,
        M = [h[0], h[1], h[2]];
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsxs)("div", {
                className: eM.SY,
                children: [
                    (0, i.jsxs)(I.d_, {
                        className: A()(eM.p_, { [eM.zE]: d, [eM.Ng]: k }),
                        ref: E,
                        children: [
                            v &&
                                (0, i.jsx)(eR, {
                                    guildId: s,
                                    entries: M,
                                    stat: c,
                                    games: g,
                                    currentUserEntry: x,
                                    currentUserPillarRef: S,
                                    onClick: () => T("podium"),
                                }),
                            D.map(R),
                        ],
                    }),
                    (null != x && null != C) || k
                        ? (0, i.jsx)("div", { className: A()(eM.Dz, "top" !== C || k ? eM.qV : eM.gN) })
                        : null,
                    null != x &&
                        null != C &&
                        (0, i.jsx)("div", {
                            className: A()(eM.z$, "top" === C ? eM.aG : eM.Ie),
                            children: (0, i.jsx)(eE, {
                                guildId: s,
                                entry: x,
                                stat: c,
                                games: g,
                                isCurrentUser: !0,
                                shouldDimForCurrentUser: !1,
                                isFloating: !0,
                                onClick: () => T("row"),
                            }),
                        }),
                    k && (0, i.jsx)(eP, { guildId: s, onActivitySharingClick: () => T("activity_sharing") }),
                ],
            }),
            (0, i.jsx)(eU, { computedAt: r.computed_at, inModal: d }),
        ],
    });
}
function eU(e) {
    let { computedAt: t, inModal: l } = e,
        n = (0, i.jsxs)("div", {
            className: eM.z8,
            children: [
                (0, i.jsx)(N.RefreshIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 }),
                (0, i.jsx)(g.E, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: j.intl.string(V.default["/nma+a"]),
                }),
            ],
        });
    return null == t
        ? (0, i.jsx)("div", { className: eM.qr, children: n })
        : (0, i.jsx)("div", {
              className: A()(eM.qr, { [eM.zE]: l }),
              tabIndex: 0,
              children: (0, i.jsx)(c.m, {
                  text: j.intl.formatToPlainString(V.default["1bt50t"], { timestamp: (0, G.mk)(new Date(t)) }),
                  position: "bottom",
                  children: n,
              }),
          });
}
function eP(e) {
    let { guildId: t, onActivitySharingClick: l } = e,
        n = M.tz.useSetting(),
        a = M.JG.useSetting(),
        s = (0, b.bG)([L.A], () => L.A.hasConsented(eD.YAq.PERSONALIZATION)),
        r = j.intl.string(V.default.toxuHd),
        d = !1;
    ((!n || a.includes(t)) && ((r = j.intl.string(V.default["8y885d"])), (d = !0)),
        s || ((r = j.intl.string(V.default.mTARYx)), (d = !0)));
    let c = (0, b.bG)([P.default], () => P.default.getCurrentUser()),
        o = O.Ay.useName(t, void 0, c),
        u = (0, b.bG)([U.Ay], () => U.Ay.getMember(t, c?.id ?? "")),
        m = (0, D.gn)(t, c?.id, u?.colorStrings ?? null);
    return null == c
        ? null
        : (0, i.jsxs)("div", {
              className: eM.Xx,
              children: [
                  (0, i.jsxs)("div", {
                      className: eM.kd,
                      children: [
                          (0, i.jsxs)("div", {
                              className: eM.nk,
                              children: [
                                  (0, i.jsx)(S.A, { children: j.intl.string(V.default["oHdW+u"]) }),
                                  (0, i.jsx)(g.E, {
                                      variant: "text-sm/semibold",
                                      color: "text-muted",
                                      "aria-hidden": !0,
                                      children: "?",
                                  }),
                              ],
                          }),
                          (0, i.jsx)(C.eu, {
                              size: y._3.SIZE_32,
                              src: c.getAvatarURL(t, (0, y.FT)(y._3.SIZE_32)) ?? void 0,
                              className: eM.SA,
                              "aria-hidden": !0,
                          }),
                          (0, i.jsxs)("div", {
                              className: eM.ko,
                              children: [
                                  (0, i.jsx)(T.D, {
                                      variant: "heading-sm/semibold",
                                      color: "text-default",
                                      lineClamp: 1,
                                      children: (0, i.jsx)(k.g, {
                                          name: o,
                                          colorString: u?.colorString ?? null,
                                          colorStrings: m,
                                      }),
                                  }),
                                  (0, i.jsx)("div", {
                                      className: eM.LF,
                                      children: (0, i.jsx)(g.E, {
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
                          className: eM.rl,
                          children: (0, i.jsx)(R.$, {
                              variant: "secondary",
                              size: "sm",
                              text: j.intl.string(V.default.fMbgeZ),
                              onClick: () => {
                                  (l(), Q(t));
                              },
                          }),
                      }),
              ],
          });
}
var eG = l(224640),
    eO = l(20742),
    eB = l(515746);
function eW(e) {
    let { data: t } = e,
        l = (0, F.K)(t.stat),
        {
            ended: n,
            endDate: s,
            badgeLabel: r,
        } = (function (e) {
            let t = (e + z.A.Seconds.WEEK) * z.A.Millis.SECOND,
                [l, n] = a.useState(() => Date.now()),
                i = t - l,
                s = i <= 0,
                r = i - (Math.ceil(i / z.A.Millis.DAY) - 1) * z.A.Millis.DAY;
            return (
                (0, eu.A)(() => n(Date.now()), s ? null : r),
                a.useMemo(
                    () => ({
                        ended: s,
                        endDate: new Date(t),
                        badgeLabel: s
                            ? j.intl.string(V.default["J8r/7L"])
                            : j.intl.formatToPlainString(V.default["PuaR+2"], { days: Math.ceil(i / z.A.Millis.DAY) }),
                    }),
                    [s, t, i],
                )
            );
        })(t.week_start_ts),
        d = M.PZ.useSetting(),
        c = 2 > (0, G.m_)(s, new Date()) ? (0, G.mk)(s, !1, d) : (0, G.i$)(s, "L LT", d),
        o = n
            ? j.intl.format(V.default.kG9XmM, { endedAt: c, nextStatName: (0, F.K)(t.next_stat).name })
            : j.intl.format(V.default["X+VLqi"], { statQuestion: l.question, endsAt: c });
    return (0, i.jsx)(ed.u, {
        title: l.name,
        body: o,
        position: "top",
        children: (0, i.jsx)("div", {
            className: eB.q,
            tabIndex: 0,
            children: (0, i.jsx)(g.E, {
                variant: "text-xs/semibold",
                color: n ? "text-muted" : "text-brand",
                children: r,
            }),
        }),
    });
}
function ez(e) {
    let { guildId: t, data: l, expanded: n, enabled: i = !0 } = e,
        [s, r] = a.useState(null),
        d = a.useRef(null),
        c = a.useRef({ guildId: t, data: l, expanded: n });
    a.useEffect(() => {
        c.current = { guildId: t, data: l, expanded: n };
    }, [t, l, n]);
    let o = a.useCallback((e) => {
        let t = d.current;
        if (null == t) return;
        d.current = null;
        let l = Date.now() - t;
        if (l < 250) return;
        let n = c.current;
        null != n.data &&
            m.default.track(
                eD.HAw.LEADERBOARD_HOVER,
                {
                    guild_id: n.guildId,
                    duration: Math.round(l) / 1e3,
                    leaderboard_state: K(n.data),
                    leaderboard_view: Y({ expanded: n.expanded }),
                },
                { flush: e },
            );
    }, []);
    return (
        a.useEffect(() => {
            if (null != s && i)
                return (
                    s.addEventListener("mouseenter", e),
                    s.addEventListener("mouseleave", t),
                    window.addEventListener("blur", l),
                    document.addEventListener("visibilitychange", n),
                    window.addEventListener("pagehide", a),
                    () => {
                        (s.removeEventListener("mouseenter", e),
                            s.removeEventListener("mouseleave", t),
                            window.removeEventListener("blur", l),
                            document.removeEventListener("visibilitychange", n),
                            window.removeEventListener("pagehide", a),
                            o(!0));
                    }
                );
            function e() {
                d.current = Date.now();
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
            function a() {
                o(!0);
            }
        }, [s, i, o]),
        a.useCallback((e) => {
            r(e);
        }, [])
    );
}
var eF = l(460614);
function eH(e) {
    let { guildId: t, data: l, modalProps: n } = e,
        a = ez({ guildId: t, data: l, expanded: !0 });
    return (0, i.jsx)(eG.d, {
        size: "lg",
        "aria-label": q(l),
        ...n,
        children: (0, i.jsxs)("div", {
            ref: a,
            children: [
                (0, i.jsxs)("div", {
                    className: eF.wx,
                    children: [
                        (0, i.jsxs)("div", {
                            className: eF.LD,
                            children: [
                                (0, i.jsx)(d.TrophyIcon, {
                                    size: "xs",
                                    color: r.A.colors.ICON_SUBTLE,
                                    "aria-hidden": !0,
                                }),
                                (0, i.jsx)(T.D, { variant: "heading-sm/medium", className: eF.DD, children: q(l) }),
                                (0, i.jsx)(eW, { data: l }),
                            ],
                        }),
                        (0, i.jsx)(eO.s_, {}),
                    ],
                }),
                (0, i.jsx)("div", { className: eF.rf, children: (0, i.jsx)(eL, { guildId: t, data: l, inModal: !0 }) }),
            ],
        }),
    });
}
var eq = l(452027),
    eK = l(103557),
    eY = l(825484),
    e$ = l(95477),
    eQ = l(241326),
    eV = l(683071),
    eX = l(2553),
    eZ = l(405810),
    eJ = l(967198),
    e0 = l(488428),
    e1 = l(776231);
let e2 = (0, l(676279).cy)();
function e3(e, t, l) {
    let n = l.startsWith("a_"),
        i = n ? (e2 ? "webp" : "gif") : e2 ? "webp" : "jpg",
        { CDN_HOST: a, API_ENDPOINT: s } = window.GLOBAL_ENV,
        r = eD.Rsh.GUILD_SPACE_IMAGE_TEXT_WIDGET_IMAGE(e, t, l, i),
        d = null != a ? `https://${a}${r}` : location.protocol + s + r,
        c = { size: (0, e1.kr)(500 * (0, e1.mZ)()) };
    return (
        "jpg" === i && (c.quality = "lossless"), "webp" === i && n && (c.animated = !0), (d += `?${e0.stringify(c)}`)
    );
}
var e4 = l(868602),
    e6 = l(445187),
    e7 = l(650583),
    e8 = l(684343);
function e5(e) {
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
                    case e7.dh.ARROW_RIGHT:
                    case e7.dh.ARROW_DOWN:
                        t = (a + 1) % i.length;
                        break;
                    case e7.dh.ARROW_LEFT:
                    case e7.dh.ARROW_UP:
                        t = (a - 1 + i.length) % i.length;
                        break;
                    case e7.dh.HOME:
                        t = 0;
                        break;
                    case e7.dh.END:
                        t = i.length - 1;
                        break;
                    default:
                        return;
                }
                (e.preventDefault(), i[t]?.focus());
            }
        }, []);
    return (0, i.jsx)("div", {
        className: e8.vR,
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
                    className: e8.Mf,
                    "aria-selected": t,
                    "aria-controls": s,
                    tabIndex: t ? 0 : -1,
                    onClick: () => d(e.id),
                    onKeyDown: c,
                    children: (0, i.jsx)(g.E, {
                        className: e8.Pf,
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
var e9 = l(831544),
    te = l(28863),
    tt = l(148166),
    tl = l(427209),
    tn = l(294454),
    ti = l(605810);
function ta(e) {
    let { target: t, tabIndex: n } = e;
    return (0, i.jsx)(c.m, {
        text: j.intl.string(j.t.RDE0Sc),
        ariaHidden: !0,
        children: (0, i.jsx)("button", {
            type: "button",
            className: ti.ql,
            tabIndex: n,
            "aria-label": j.intl.string(j.t.Ej3B3Y),
            onClick: () => {
                (0, $.openModalLazy)(
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
                            l.e("166336"),
                            l.e("304527"),
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
                            l.e("990873"),
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
                            l.e("304329"),
                            l.e("84755"),
                            l.e("256831"),
                        ]).then(l.bind(l, 99266));
                        return function (l) {
                            return (0, i.jsx)(e, { ...l, target: t });
                        };
                    },
                    { stackingBehavior: "stack", modalKey: tn.aU },
                );
            },
            children: (0, i.jsx)(tl.A, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
        }),
    });
}
var ts = l(272984);
function tr(e) {
    let { artist: t, itemProps: l } = e,
        n = null != t.artist_image_hash ? ts.RQ.IMAGE(t.artist_image_hash) : null,
        s = a.useMemo(
            () => ({
                kind: "artist",
                shareUrl: ts.RQ.WEB_OPEN(ts.M0.ARTIST, t.artist_external_id),
                title: t.artist_name ?? t.artist_external_id,
                subtitle: null,
                imageUrl: n,
            }),
            [t.artist_external_id, t.artist_name, n],
        ),
        r = (0, i.jsx)(tt.R, { src: n, isCircular: !0, FallbackIcon: e9.MicrophoneIcon });
    return null == t.artist_name
        ? (0, i.jsx)("div", { className: ti.Nr, children: (0, i.jsx)("div", { ...l, className: ti.MT, children: r }) })
        : (0, i.jsxs)("div", {
              className: ti.Nr,
              children: [
                  (0, i.jsxs)(te.Anchor, {
                      ...l,
                      className: ti.MT,
                      href: s.shareUrl,
                      useDefaultUnderlineStyles: !1,
                      children: [
                          r,
                          (0, i.jsx)("span", {
                              className: ti.Qq,
                              children: (0, i.jsx)(g.E, {
                                  className: ti.DD,
                                  tag: "span",
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  lineClamp: 2,
                                  children: t.artist_name,
                              }),
                          }),
                      ],
                  }),
                  (0, i.jsx)(ta, { target: s, tabIndex: l.tabIndex }),
              ],
          });
}
var td = l(872351),
    tc = l(708988),
    to = l(104171),
    tu = l(628137);
let tm = "none",
    tx = (e, t) => (0, i.jsx)(g.E, { tag: "span", variant: "text-sm/semibold", color: "text-default", children: e }, t);
function th(e) {
    return e;
}
function tf(e) {
    return e?.direction ?? tm;
}
function tg(e) {
    return j.intl.formatToPlainString(V.default["7X+3f8"], { count: e });
}
function tj(e) {
    let t = e?.plays_change_percent;
    if (null == t) return null;
    let l = Math.round(Math.abs(t));
    return 0 === l
        ? null
        : { direction: t > 0 ? "up" : "down", label: j.intl.formatToPlainString(V.default["h+LUpk"], { percent: l }) };
}
var tp = l(633099);
function tv(e) {
    let { trend: t } = e,
        l = "up" === t.direction ? td.z : tc.M;
    return (0, i.jsxs)("span", {
        className: A()(tp.GW, { [tp.$J]: "up" === t.direction, [tp.KW]: "down" === t.direction }),
        children: [
            (0, i.jsx)(l, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
            (0, i.jsx)(g.E, { tag: "span", variant: "text-sm/medium", color: "none", children: t.label }),
        ],
    });
}
function t_(e) {
    var t;
    let { guildId: l, song: n } = e,
        s = a.useMemo(() => (n.facepile_user_ids ?? []).slice(0, 3), [n.facepile_user_ids]);
    (0, w.k6)(l, s);
    let r = (0, b.yK)([P.default], () => s.map((e) => P.default.getUser(e)), [s]),
        d = a.useMemo(() => r.filter((e) => null != e), [r]);
    if (0 === d.length) return null;
    let c = n.unique_listeners - d.length;
    return (0, i.jsx)("span", {
        className: tp.WM,
        role: "group",
        "aria-label":
            ((t = n.unique_listeners),
            j.intl.formatToPlainString(V.default.AzIhRB, { count: t, trend: tm, countHook: th })),
        children: (0, i.jsx)(to.Ay, {
            users: d,
            guildId: l,
            size: to.DN.SIZE_24,
            max: d.length,
            count: n.unique_listeners,
            hideMoreUsers: c <= 0,
            renderMoreUsers: () =>
                (0, i.jsx)("span", {
                    className: tp.ju,
                    children: (0, i.jsx)(g.E, {
                        tag: "span",
                        variant: "text-xs/semibold",
                        color: "text-subtle",
                        children: j.intl.formatToPlainString(V.default.bFIg0R, { count: c }),
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
              className: A()(tp.yp, { [tp.Fl]: t }),
              children: (0, i.jsxs)("div", {
                  className: tp.QD,
                  children: [
                      null != l && (0, i.jsx)(g.E, { variant: "text-md/semibold", color: "text-default", children: l }),
                      (0, i.jsxs)("div", {
                          className: tp._0,
                          children: [
                              null != n &&
                                  (0, i.jsx)(g.E, {
                                      tag: "span",
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: n,
                                  }),
                              null != a && (0, i.jsx)(tv, { trend: a }),
                          ],
                      }),
                  ],
              }),
          });
}
function tA(e) {
    var t;
    let { guildId: l, isCompact: n, canShowEmbed: a, song: s } = e,
        r = tj(s);
    return (0, i.jsxs)("div", {
        className: A()(tp.yp, { [tp.Fl]: n }),
        children: [
            a && (0, i.jsx)(tu.A, { className: tp.aF, resourceType: ts.M0.TRACK, resourceId: s.track_external_id }),
            (0, i.jsxs)("div", {
                className: tp.QD,
                children: [
                    (0, i.jsx)(t_, { guildId: l, song: s }),
                    (0, i.jsxs)("div", {
                        className: tp._0,
                        children: [
                            (0, i.jsx)(g.E, {
                                tag: "span",
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children:
                                    ((t = s.plays),
                                    j.intl.format(V.default["7hHUIS"], { count: t, trend: tf(r), countHook: tx })),
                            }),
                            null != r && (0, i.jsx)(tv, { trend: r }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var tb = l(197935),
    tI = l(915734);
function tN(e) {
    let { label: t, items: l, isCompact: n, getItemKey: a, renderItem: s } = e;
    return (0, i.jsx)("div", {
        className: A()(tI.Dk, { [tI.yI]: n }),
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
var tS = (((n = {}).TOP_SONGS = "top_songs"), (n.TOP_ARTISTS = "top_artists"), (n.TOP_LISTENERS = "top_listeners"), n);
let tC = ["top_songs", "top_artists", "top_listeners"];
function ty(e) {
    switch (e) {
        case "top_songs":
            return j.intl.string(V.default.KgeEtx);
        case "top_artists":
            return j.intl.string(V.default.RYxWTS);
        case "top_listeners":
            return j.intl.string(V.default.KO73KB);
    }
}
function tT(e, t) {
    return `popular-music-tab-${e}-${t}`;
}
function tk(e) {
    return `popular-music-panel-${e}`;
}
var tR = l(742452);
function tw(e) {
    return e.artist_external_id;
}
function tD(e, t) {
    return (0, i.jsx)(tr, { artist: e, itemProps: t });
}
function tM(e) {
    var t, l;
    let n,
        a,
        s,
        { isCompact: r, data: d } = e;
    if (0 === d.ranked_artists.length) return null;
    let c = tj(d.summary);
    return (0, i.jsxs)("div", {
        className: tR.U,
        children: [
            (0, i.jsx)(tN, {
                label: ty(tS.TOP_ARTISTS),
                items: d.ranked_artists,
                isCompact: r,
                getItemKey: tw,
                renderItem: tD,
            }),
            (0, i.jsx)(tE, {
                isCompact: r,
                headline:
                    ((t = d.summary),
                    null == (n = t?.distinct_songs) || n < 1
                        ? null
                        : j.intl.formatToPlainString(V.default.W8etVA, { count: n })),
                detail:
                    ((l = d.summary),
                    (a = l?.listener_count),
                    (s = l?.distinct_artists),
                    null == a || a < 1 || null == s || s < 1
                        ? null
                        : j.intl.format(V.default.yGqf0D, {
                              memberCount: a,
                              artistCount: s,
                              trend: tf(c),
                              memberCountHook: tx,
                              artistCountHook: tx,
                          })),
                trend: c,
            }),
        ],
    });
}
var tL = l(109487),
    tU = l(279543);
function tP(e) {
    let { isCompact: t } = e;
    return (0, i.jsxs)("div", {
        className: tU.qr,
        children: [
            (0, i.jsxs)("div", {
                className: tU.Os,
                children: [
                    (0, i.jsx)("span", {
                        className: tU.Kk,
                        children: (0, i.jsx)(N.RefreshIcon, {
                            size: "xxs",
                            color: r.A.colors.ICON_SUBTLE,
                            "aria-hidden": !0,
                        }),
                    }),
                    (0, i.jsx)(g.E, {
                        className: tU.Pf,
                        tag: "span",
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: j.intl.string(V.default["3/DOFo"]),
                    }),
                ],
            }),
            (0, i.jsxs)(te.Anchor, {
                className: tU.al,
                href: ts.RQ.WEB_HOME,
                "aria-label": j.intl.string(V.default["jUr+wF"]),
                children: [
                    (0, i.jsx)("span", {
                        className: tU.Kk,
                        children: (0, i.jsx)(tL.L, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    }),
                    !t &&
                        (0, i.jsx)(g.E, {
                            className: tU.G2,
                            tag: "span",
                            variant: "text-xs/medium",
                            color: "none",
                            children: j.intl.string(V.default.ZdPp2q),
                        }),
                ],
            }),
        ],
    });
}
var tG = l(65154),
    tO = l(329177),
    tB = l(242226);
function tW(e) {
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
            rowRef: f,
        } = e,
        p =
            ((t = (0, b.bG)([P.default], () => P.default.getUser(d), [d])),
            (l = (0, b.bG)([U.Ay], () => U.Ay.getMember(s, d), [s, d])),
            (n = (0, D.gn)(s, d, l?.colorStrings ?? null)),
            (a = O.Ay.useName(s, void 0, t)),
            {
                user: t,
                colorString: l?.colorString ?? null,
                roleColorStrings: n,
                displayName: m ? j.intl.formatToPlainString(V.default.subXXA, { name: a }) : a,
            }),
        { user: v } = p;
    return null == v
        ? null
        : (0, i.jsxs)("div", {
              ref: f,
              "aria-hidden": h,
              inert: h,
              className: A()(tB.nM, { [tB.Bh]: m && !h, [tB.lR]: x }),
              children: [
                  (0, i.jsx)(tz, { guildId: s, user: v, identity: p, rank: o, lastTrack: c?.last_track ?? null }),
                  null != c &&
                      (0, i.jsxs)("div", {
                          className: A()(tB.Mx, { [tB.dA]: u }),
                          children: [
                              (0, i.jsx)(tG.S, { size: "xxs", color: r.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                              (0, i.jsx)(g.E, {
                                  variant: "text-sm/medium",
                                  color: "text-strong",
                                  children: tg(c.plays),
                              }),
                          ],
                      }),
                  null != c &&
                      !u &&
                      (0, i.jsx)(tK, { artists: c.recent_artists ?? [], artistCount: c.artist_count ?? null }),
              ],
          });
}
function tz(e) {
    let { guildId: t, user: l, identity: n, rank: s, lastTrack: r } = e,
        d = a.useRef(null);
    return (0, i.jsx)(ee.A, {
        targetElementRef: d,
        user: l,
        guildId: t,
        children: (e) =>
            (0, i.jsxs)(J.D, {
                ...e,
                innerRef: d,
                className: tB.D_,
                children: [
                    null != s &&
                        (0, i.jsx)(S.A, { children: j.intl.formatToPlainString(V.default.I4JiAQ, { rank: s }) }),
                    (0, i.jsxs)("span", {
                        className: tB.R3,
                        children: [
                            (0, i.jsx)(C.eu, {
                                size: y._3.SIZE_32,
                                src: l.getAvatarURL(t, (0, y.FT)(y._3.SIZE_32)) ?? void 0,
                                "aria-hidden": !0,
                            }),
                            1 === s &&
                                (0, i.jsx)("span", {
                                    className: tB.ie,
                                    "aria-hidden": !0,
                                    children: (0, i.jsx)(tO.CrownIcon, { size: "xxs", color: "currentColor" }),
                                }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tB.Dc,
                        children: [
                            (0, i.jsx)(T.D, {
                                variant: "heading-sm/semibold",
                                color: "text-default",
                                lineClamp: 1,
                                children: (0, i.jsx)(k.g, {
                                    name: n.displayName,
                                    colorString: n.colorString,
                                    colorStrings: n.roleColorStrings,
                                }),
                            }),
                            (0, i.jsx)(tH, { track: r }),
                        ],
                    }),
                ],
            }),
    });
}
function tF(e, t) {
    return (0, i.jsx)(g.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: e }, t);
}
function tH(e) {
    let { track: t } = e,
        l = t?.track_title;
    if (null == l) return null;
    let n = t?.artist_name;
    return (0, i.jsx)(g.E, {
        variant: "text-xs/medium",
        color: "text-subtle",
        lineClamp: 1,
        children:
            null != n
                ? j.intl.format(V.default.QqaqBg, { trackTitle: l, artistName: n, highlightHook: tF })
                : j.intl.format(V.default.ZMJ8Mt, { trackTitle: l, highlightHook: tF }),
    });
}
function tq(e) {
    let { artist: t, notched: l } = e,
        [n, s] = a.useState(!1),
        d = null != t.artist_image_hash ? ts.RQ.IMAGE(t.artist_image_hash) : null;
    return (0, i.jsx)("span", {
        className: tB.sG,
        children: (0, i.jsx)(ec.Ay, {
            mask: l ? ec.l8[24] : ec.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null == d || n
                    ? (0, i.jsx)("span", {
                          className: tB.Ql,
                          children: (0, i.jsx)(e9.MicrophoneIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE }),
                      })
                    : (0, i.jsx)("img", { className: tB.v2, src: d, alt: "", loading: "lazy", onError: () => s(!0) }),
        }),
    });
}
function tK(e) {
    let { artists: t, artistCount: l } = e,
        n = t.slice(0, 3),
        a = (l ?? t.length) - n.length;
    return (0, i.jsx)("div", {
        className: tB.Rh,
        "aria-hidden": !0,
        children:
            n.length > 0 &&
            (0, i.jsxs)("div", {
                className: tB.W$,
                children: [
                    n.map((e, t) =>
                        (0, i.jsx)(
                            tq,
                            { artist: e, notched: a > 0 || t !== n.length - 1 },
                            `${e.artist_external_id}-${e.artist_image_hash}`,
                        ),
                    ),
                    a > 0 &&
                        (0, i.jsx)("span", {
                            className: tB.sG,
                            children: (0, i.jsx)(ec.Ay, {
                                mask: ec.Ay.Masks.SQUIRCLE,
                                width: 24,
                                height: 24,
                                children: (0, i.jsx)("div", {
                                    className: tB.ag,
                                    children: (0, i.jsx)(g.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: j.intl.formatToPlainString(V.default.bFIg0R, { count: a }),
                                    }),
                                }),
                            }),
                        }),
                ],
            }),
    });
}
var tY = l(897130);
function t$(e) {
    let { guildId: t, isCompact: l, data: n } = e,
        s = n.top_listeners,
        r = (0, b.bG)([P.default], () => P.default.getCurrentUser()?.id),
        d = s.findIndex((e) => e.user_id === r),
        c = -1 === d ? null : s[d],
        o = a.useMemo(() => s.map((e) => e.user_id), [s]);
    (0, w.k6)(t, o);
    let { scrollerRef: u, userRowRef: m, floatingRowPosition: x } = B(),
        h = null != x;
    return 0 === s.length
        ? null
        : (0, i.jsxs)("div", {
              className: tY.SY,
              children: [
                  (0, i.jsxs)(I.d_, {
                      className: tY.p_,
                      ref: u,
                      children: [
                          s.map((e, n) => {
                              let a = e.user_id === r;
                              return (0, i.jsx)(
                                  tW,
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
                              (0, i.jsx)(tW, {
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
                                  className: A()(tY.z$, "top" === x ? tY.aG : tY.Ie),
                                  children: (0, i.jsx)(tW, {
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
var tQ = l(432017),
    tV = l(362704),
    tX = l(782134);
function tZ(e) {
    let { song: t, isSelected: l, onSelect: n, itemProps: s } = e,
        r = null != t.cover_art_hash ? ts.RQ.IMAGE(t.cover_art_hash) : null,
        d = a.useMemo(
            () => ({
                kind: "song",
                shareUrl: ts.RQ.WEB_OPEN(ts.M0.TRACK, t.track_external_id),
                title: t.track_title ?? t.track_external_id,
                subtitle: t.artist_name,
                imageUrl: r,
            }),
            [t.track_external_id, t.track_title, t.artist_name, r],
        );
    return (0, i.jsxs)("div", {
        className: ti.Nr,
        children: [
            (0, i.jsxs)("button", {
                ...s,
                type: "button",
                className: A()(ti.MT, { [ti.tY]: l }),
                "aria-pressed": l,
                onClick: () => n(t.track_external_id),
                children: [
                    (0, i.jsxs)(tt.R, {
                        src: r,
                        isCircular: !1,
                        FallbackIcon: tQ.T,
                        children: [
                            l &&
                                (0, i.jsx)("span", {
                                    className: A()(ti.Lw, ti.Kp),
                                    "aria-hidden": !0,
                                    children: (0, i.jsx)(tV.Y, { size: "md", color: "currentColor" }),
                                }),
                            (0, i.jsxs)("span", {
                                className: A()(ti.Lw, ti.vY),
                                children: [
                                    (0, i.jsx)(tX.PlayIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                                    (0, i.jsx)(g.E, {
                                        tag: "span",
                                        variant: "text-xs/semibold",
                                        color: "none",
                                        children: tg(t.plays),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    null != t.track_title &&
                        (0, i.jsxs)("span", {
                            className: ti.Qq,
                            children: [
                                (0, i.jsx)(g.E, {
                                    className: ti.DD,
                                    tag: "span",
                                    variant: "text-sm/semibold",
                                    color: "text-default",
                                    lineClamp: 1,
                                    children: t.track_title,
                                }),
                                null != t.artist_name &&
                                    (0, i.jsx)(g.E, {
                                        className: ti.VA,
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
            (0, i.jsx)(ta, { target: d, tabIndex: s.tabIndex }),
        ],
    });
}
var tJ = l(196765),
    t0 = l(770178);
let t1 = { view: "top_songs", isCompact: !1, canShowEmbed: !1, selectedTrackId: null },
    t2 = (0, tJ.v)(() => ({ byWidgetId: {} }));
function t3(e, t) {
    t2.setState((l) => {
        let n = l.byWidgetId[e] ?? t1;
        return { byWidgetId: { ...l.byWidgetId, [e]: { ...n, ...t } } };
    });
}
function t4(e) {
    return t2((t) => t.byWidgetId[e]?.view ?? t1.view);
}
function t6(e) {
    return t2((t) => t.byWidgetId[e]?.isCompact ?? t1.isCompact);
}
function t7(e) {
    return t2((t) => t.byWidgetId[e]?.selectedTrackId ?? t1.selectedTrackId);
}
function t8(e, t) {
    (t2.getState().byWidgetId[e] ?? t1).view !== t && t3(e, { view: t, selectedTrackId: null });
}
function t5(e) {
    return e.track_external_id;
}
function t9(e) {
    var t;
    let l,
        { guildId: n, widgetId: s, isCompact: r, data: d } = e,
        c = t7(s),
        o = t2((e) => e.byWidgetId[s]?.canShowEmbed ?? t1.canShowEmbed),
        u = a.useCallback(
            (e) => {
                let t;
                return (
                    (t = t2.getState().byWidgetId[s]?.selectedTrackId ?? null),
                    void t3(s, { selectedTrackId: t === e ? null : e })
                );
            },
            [s],
        ),
        m = a.useCallback(
            (e, t) => (0, i.jsx)(tZ, { song: e, isSelected: e.track_external_id === c, onSelect: u, itemProps: t }),
            [c, u],
        );
    if (0 === d.ranked_songs.length) return null;
    let x = d.ranked_songs.find((e) => e.track_external_id === c) ?? null,
        h = tj(d.summary);
    return (0, i.jsxs)("div", {
        className: tR.U,
        children: [
            (0, i.jsx)(tN, {
                label: ty(tS.TOP_SONGS),
                items: d.ranked_songs,
                isCompact: r,
                getItemKey: t5,
                renderItem: m,
            }),
            null != x
                ? (0, i.jsx)(tA, { guildId: n, isCompact: r, canShowEmbed: o, song: x })
                : (0, i.jsx)(tE, {
                      isCompact: r,
                      headline: (function (e) {
                          let t = e?.listening_time_ms;
                          if (null == t) return null;
                          let l = Math.round(t / z.A.Millis.MINUTE);
                          return l < 1 ? null : j.intl.formatToPlainString(V.default["+5b01q"], { minutes: l });
                      })(d.summary),
                      detail:
                          ((t = d.summary),
                          null == (l = t?.listener_count) || l < 1
                              ? null
                              : j.intl.format(V.default.AzIhRB, { count: l, trend: tf(h), countHook: tx })),
                      trend: h,
                  }),
        ],
    });
}
var le = l(597601),
    lt = l(980707),
    ll = l(477782),
    ln = l(922016),
    li = l(847374),
    la = l(914173);
function ls(e) {
    let { navId: t, options: l, selectedId: n, label: a, onSelect: s, onClose: r } = e;
    return (0, i.jsx)(lt.W, {
        navId: t,
        "aria-label": a,
        onClose: r,
        onSelect: void 0,
        children: l.map((e) =>
            (0, i.jsx)(
                ll.iD,
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
function lr(e) {
    let { navId: t, options: l, selectedId: n, menuLabel: s, triggerLabel: d, onSelect: c } = e,
        [o, u] = a.useState(!1),
        m = a.useRef(null),
        x = l.find((e) => e.id === n);
    return null == x
        ? null
        : (0, i.jsx)(ln.Y, {
              targetElementRef: m,
              position: "bottom",
              align: "left",
              shouldShow: o,
              onRequestOpen: () => u(!0),
              onRequestClose: () => u(!1),
              renderPopout: (e) => {
                  let { closePopout: a } = e;
                  return (0, i.jsx)(ls, { navId: t, options: l, selectedId: n, label: s, onSelect: c, onClose: a });
              },
              children: (e) =>
                  (0, i.jsx)(T.D, {
                      variant: "heading-sm/medium",
                      className: la.R_,
                      children: (0, i.jsxs)("button", {
                          ...e,
                          ref: m,
                          type: "button",
                          className: la.hZ,
                          "aria-haspopup": "menu",
                          "aria-label": d,
                          children: [
                              null != x.icon && (0, i.jsx)("span", { className: la.Kk, children: x.icon }),
                              (0, i.jsx)(g.E, {
                                  className: la.DD,
                                  tag: "span",
                                  variant: "heading-sm/medium",
                                  color: "text-default",
                                  children: x.label,
                              }),
                              (0, i.jsx)("span", {
                                  className: la.Kk,
                                  children: (0, i.jsx)(li.a, {
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
var ld = l(871107);
function lc(e) {
    let { view: t } = e,
        l = r.A.colors.ICON_DEFAULT;
    switch (t) {
        case tS.TOP_ARTISTS:
            return (0, i.jsx)(e9.MicrophoneIcon, { size: "xs", color: l, "aria-hidden": !0 });
        case tS.TOP_LISTENERS:
            return (0, i.jsx)(le.L, { size: "xs", color: l, "aria-hidden": !0 });
        case tS.TOP_SONGS:
            return (0, i.jsx)(tQ.T, { size: "xs", color: l, "aria-hidden": !0 });
    }
}
function lo(e) {
    let { widgetId: t, title: l } = e,
        n = t6(t),
        a = t4(t);
    if (!n)
        return (0, i.jsxs)("div", {
            className: ld.$,
            children: [
                (0, i.jsx)("span", {
                    className: ld.K,
                    children: (0, i.jsx)(tQ.T, { size: "xs", color: r.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
                }),
                (0, i.jsx)(x.q, { children: l }),
            ],
        });
    let s = tC.map((e) => ({ id: e, label: ty(e), icon: (0, i.jsx)(lc, { view: e }) }));
    return (0, i.jsx)(lr, {
        navId: "popular-music-view",
        options: s,
        selectedId: a,
        menuLabel: j.intl.string(V.default.hFYyGU),
        triggerLabel: j.intl.formatToPlainString(V.default["/sw0JL"], { widgetName: l, viewName: ty(a) }),
        onSelect: (e) => t8(t, e),
    });
}
var lu = l(756936),
    lm = l(890497),
    lx = l(734057),
    lh = l(317525),
    lf = l(576705),
    lg = l(935208),
    lj = l(44167);
l(321073);
var lp = l(485845),
    lv = l(136722),
    l_ = l(435183),
    lE = l(155718),
    lA = l(795816),
    lb = l(933958),
    lI = l(574152),
    lN = l(627363),
    lS = l(712440),
    lC = l(733110),
    ly = l(488926),
    lT = l(818023);
async function lk(e) {
    null == em.A.getApplication(lT.NW) && (await (0, lN.TA)(lT.NW));
    let t = lb.Ay.getEmbeddedActivitiesForChannel(e).every((e) => e.applicationId !== lT.NW);
    return await (0, lA.su)({
        channelId: e,
        applicationId: lT.NW,
        isStart: t,
        embeddedActivitiesManager: (0, lI.A)(),
        renderInFramePool: !0,
    });
}
async function lR(e) {
    let { channel: t, selectedRoleIds: l } = e,
        n = [];
    if (l.length > 0)
        for (let e of (n.push({ id: t.guild_id, type: lE.r2.ROLE, allow: ly.x3, deny: eD.xBc.USE_EMBEDDED_ACTIVITIES }),
        l))
            n.push({ id: e, type: lE.r2.ROLE, allow: eD.xBc.USE_EMBEDDED_ACTIVITIES, deny: ly.x3 });
    let i = await (0, l_.RT)(t.id, { permissionOverwrites: n });
    if (!i.ok) throw i;
}
let lw = [];
var lD = l(344351),
    lM = l(256693),
    lL = l(812901),
    lU = l(317608),
    lP = l(953538);
let lG = {
    [s.a.IMAGE_TEXT]: {
        View: function (e) {
            let { widget: t, guildSpaceMode: l, guildId: n } = e,
                { text: a, image_hash: s } = t.config,
                r = "edit" === l ? t.config.image : void 0,
                d = void 0 !== r ? r : null != s ? e3(n, t.id, s) : null;
            return (0, i.jsxs)("div", {
                className: e6.kL,
                children: [
                    null != d && (0, i.jsx)("img", { className: e6.Sl, src: d, alt: "" }),
                    null != a &&
                        (0, i.jsx)(g.E, {
                            variant: "text-md/normal",
                            color: "text-subtle",
                            className: e6.Qq,
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
                [g, p] = a.useState(null),
                v = (0, b.bG)([eJ.A], () => eJ.A.getGuildId()),
                _ = void 0 !== h ? h : null != r.image_hash && null != v ? e3(v, t.id, r.image_hash) : null;
            return (0, i.jsxs)(W.B, {
                gap: 16,
                children: [
                    (0, i.jsx)(e$.k, {
                        label: j.intl.string(j.t.gnwWrx),
                        value: d,
                        onChange: function (e) {
                            (p(null), u(e));
                        },
                        maxLength: 100,
                        showCharacterCount: !0,
                    }),
                    (0, i.jsx)(eq.D, {
                        label: j.intl.string(j.t.X4IxWL),
                        children: (0, i.jsxs)(W.B, {
                            gap: 16,
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            className: e4.B,
                            children: [
                                (0, i.jsxs)(W.B, {
                                    gap: 8,
                                    direction: "horizontal",
                                    children: [
                                        (0, i.jsx)(eZ.A, {
                                            variant: "secondary",
                                            text: j.intl.string(j.t["MsUY/S"]),
                                            onChange: function (e) {
                                                (p(null), f(e));
                                            },
                                            maxFileSizeBytes: 0xa00000,
                                            onFileSizeError: () => (0, eX.A)(0xa00000),
                                        }),
                                        null != _ &&
                                            (0, i.jsx)(c.m, {
                                                text: j.intl.string(j.t.N86XcP),
                                                ariaHidden: !0,
                                                children: (0, i.jsx)(o.K, {
                                                    variant: "critical-secondary",
                                                    icon: eQ.TrashIcon,
                                                    onClick: function () {
                                                        (p(null), f(null));
                                                    },
                                                    "aria-label": j.intl.string(j.t.N86XcP),
                                                }),
                                            }),
                                    ],
                                }),
                                null != _ && (0, i.jsx)("img", { className: e4.V, src: _, alt: "" }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(eK.f, {
                        label: j.intl.string(j.t.COGMNC),
                        value: m,
                        onChange: function (e) {
                            (p(null), x(e));
                        },
                        rows: 3,
                        autosize: !0,
                        maxLength: 500,
                        showCharacterCount: !0,
                    }),
                    null != g &&
                        (0, i.jsx)("div", {
                            role: "alert",
                            children: (0, i.jsx)(eV.w, { type: "critical", children: g }),
                        }),
                    (0, i.jsxs)(eY.e, {
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(R.$, { variant: "secondary", text: j.intl.string(j.t["ETE/oC"]), onClick: n }),
                            (0, i.jsx)(R.$, {
                                variant: "primary",
                                text: j.intl.string(j.t["R3BPH+"]),
                                onClick: function () {
                                    let e;
                                    if (
                                        ((e = void 0 !== h ? null !== h : null != r.image_hash),
                                        0 === m.length && !e && (p(j.intl.string(V.default.zleX9q)), 1))
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
            return (0, i.jsx)(x.q, { children: t.config.title ?? t.default_title ?? "" });
        },
    },
    [s.a.LEADERBOARD]: {
        View: function (e) {
            let t,
                { hydration: l, guildId: n, guildSpaceMode: s } = e,
                r = ez({
                    guildId: n,
                    data: l?.status === "success" ? l.data : void 0,
                    expanded: !1,
                    enabled: "view" === s,
                }),
                d = a.useCallback(
                    (e) => {
                        r(e?.closest("[data-guild-space-widget]") ?? null);
                    },
                    [r],
                );
            return (
                (t =
                    null == l || "idle" === l.status || "loading" === l.status
                        ? (0, i.jsx)(v, {})
                        : "error" === l.status
                          ? (0, i.jsx)(_, {})
                          : (0, i.jsx)(eL, { guildId: n, data: l.data })),
                (0, i.jsx)("div", { ref: d, children: t })
            );
        },
        Title: function (e) {
            let { widget: t, hydration: l } = e;
            return l?.status !== "success"
                ? (0, i.jsx)(x.q, { children: t.default_title ?? "" })
                : (0, i.jsx)(x.q, { children: q(l.data) });
        },
        TitleIcon: function () {
            return (0, i.jsx)(d.TrophyIcon, { size: "xs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        },
        HeaderAccessory: function (e) {
            let { hydration: t } = e;
            return t?.status !== "success" || H(t.data) ? null : (0, i.jsx)(eW, { data: t.data });
        },
        HeaderActions: function (e) {
            let { hydration: t, guildId: l } = e,
                n = t?.status === "success" ? t.data : void 0;
            return null != n && H(n)
                ? null
                : (0, i.jsx)(c.m, {
                      text: j.intl.string(j.t.dcl9MQ),
                      children: (0, i.jsx)(o.K, {
                          variant: "icon-only",
                          size: "sm",
                          icon: u._,
                          "aria-label": j.intl.string(j.t.dcl9MQ),
                          disabled: null == n,
                          onClick: function () {
                              null != n &&
                                  (m.default.track(eD.HAw.LEADERBOARD_CLICK, {
                                      location: "expand",
                                      guild_id: l,
                                      leaderboard_state: K(n),
                                      leaderboard_view: Y({ expanded: !1 }),
                                  }),
                                  (function (e) {
                                      let { guildId: t, data: l } = e,
                                          n = (e) => (0, i.jsx)(eH, { guildId: t, data: l, modalProps: e });
                                      (0, $.openModalLazy)(() => Promise.resolve(n), {
                                          modalKey: "guild-space-leaderboard-expand",
                                      });
                                  })({ guildId: l, data: n }));
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
                            t3(t, { isCompact: l < 480, canShowEmbed: l >= 720 });
                        },
                        [t],
                    )),
                    (0, t0.g)(n, s, [t], { fireOnMount: !0 }),
                    a.useEffect(
                        () => () => {
                            t2.setState((e) => {
                                if (null == e.byWidgetId[t]) return e;
                                let l = { ...e.byWidgetId };
                                return (delete l[t], { byWidgetId: l });
                            });
                        },
                        [t],
                    ),
                    n),
                x = t6(c.id),
                h = t4(c.id),
                f = t7(c.id),
                g = !x && "view" === u,
                j =
                    o?.status === "success" && h !== tS.TOP_LISTENERS
                        ? ((l = o.data),
                          null ==
                          (r =
                              l.ranked_songs.find((e) => e.track_external_id === f && null != e.cover_art_hash)
                                  ?.cover_art_hash ??
                              l.ranked_songs.find((e) => null != e.cover_art_hash)?.cover_art_hash)
                              ? null
                              : ts.RQ.IMAGE(r))
                        : null;
            return (0, i.jsxs)("div", {
                className: lu.rf,
                ref: m,
                children: [
                    null != j && (0, i.jsx)("img", { className: lu.G, src: j, alt: "", "aria-hidden": !0 }),
                    (0, i.jsx)("div", {
                        className: lu.Qs,
                        children: (0, i.jsx)("div", {
                            id: tk(c.id),
                            className: lu.nd,
                            role: g ? "tabpanel" : "group",
                            tabIndex: 0,
                            "aria-label": g ? void 0 : ty(h),
                            "aria-labelledby": g ? tT(c.id, h) : void 0,
                            children: (function () {
                                if (null == o || "idle" === o.status || "loading" === o.status)
                                    return (0, i.jsx)(v, {});
                                if ("error" === o.status) return (0, i.jsx)(_, {});
                                switch (h) {
                                    case tS.TOP_SONGS:
                                        return (0, i.jsx)(t9, {
                                            guildId: d,
                                            widgetId: c.id,
                                            isCompact: x,
                                            data: o.data,
                                        });
                                    case tS.TOP_ARTISTS:
                                        return (0, i.jsx)(tM, { isCompact: x, data: o.data });
                                    case tS.TOP_LISTENERS:
                                        return (0, i.jsx)(t$, { guildId: d, isCompact: x, data: o.data });
                                }
                            })(),
                        }),
                    }),
                    (0, i.jsx)(tP, { isCompact: x }),
                ],
            });
        },
        Title: function (e) {
            let { widget: t, guildSpaceMode: l } = e,
                n = t.default_title ?? j.intl.string(V.default["5xxUI2"]);
            return "edit" === l ? (0, i.jsx)(x.q, { children: n }) : (0, i.jsx)(lo, { widgetId: t.id, title: n });
        },
        ViewHeaderTrailing: function (e) {
            let { widget: t, title: l } = e,
                n = t6(t.id),
                a = t4(t.id);
            return n
                ? null
                : (0, i.jsx)(e5, {
                      label: l,
                      tabs: tC.map((e) => ({ id: e, label: ty(e) })),
                      selectedId: a,
                      panelId: tk(t.id),
                      getTabId: (e) => tT(t.id, e),
                      onSelect: (e) => t8(t.id, e),
                  });
        },
    },
    [s.a.WHITEBOARD]: {
        View: function (e) {
            let t,
                l,
                n = (0, lj.n)(),
                s = (0, b.bG)(
                    [lx.A, lf.A],
                    () => {
                        let e = null != n ? lx.A.getChannel(n) : void 0;
                        return null != e && lf.A.can(eD.xBc.USE_EMBEDDED_ACTIVITIES, e);
                    },
                    [n],
                ),
                r = (0, b.bG)(
                    [lb.Ay],
                    () => {
                        let e = lb.Ay.getCurrentEmbeddedActivity();
                        return null == e ||
                            e.applicationId !== lT.NW ||
                            e.location.kind !== lD.T.GUILD_CHANNEL ||
                            e.location.channel_id !== n
                            ? null
                            : e;
                    },
                    [n],
                ),
                d = (0, b.bG)([lb.Ay], () => lb.Ay.isLaunchingActivity(), []),
                { authResolved: c, isAuthorized: o } =
                    ((t = (0, b.bG)(
                        [lC.default],
                        () => lC.default.getFetchStateForApplication(lT.NW) === lC.FetchState.FETCHED,
                        [],
                    )),
                    (l = (0, b.bG)(
                        [lC.default, em.A],
                        () => {
                            let e = lC.default.getNewestTokenForApplication(lT.NW);
                            if (null == e) return !1;
                            let t = em.A.getApplication(lT.NW),
                                l = t?.integrationTypesConfig?.[lp.b.USER_INSTALL]?.oauth2InstallParams?.scopes;
                            if (null == l) return !0;
                            let n = new Set(e.scopes);
                            return l.every((e) => n.has(e));
                        },
                        [],
                    )),
                    a.useEffect(() => {
                        (lC.default.getFetchStateForApplication(lT.NW) === lC.FetchState.NOT_FETCHED &&
                            lS.A.fetch([lT.NW]),
                            null == em.A.getApplication(lT.NW) && (0, lN.TA)(lT.NW));
                    }, []),
                    { authResolved: t, isAuthorized: l }),
                u = a.useRef(!1);
            a.useEffect(() => {
                null == r && null != n && s && c && o && !u.current && ((u.current = !0), lk(n));
            }, [s, n, r, c, o]);
            let m = a.useCallback(() => {
                    null != n && ((u.current = !0), lk(n));
                }, [n]),
                x = null != n && c && !o;
            return s
                ? (0, i.jsxs)("div", {
                      className: lP.kL,
                      children: [
                          null != r &&
                              (0, i.jsx)(lU.A, {
                                  frameId: (0, lM.Ri)(r),
                                  level: lL.A.WithinAppContent,
                                  className: lP.t$,
                              }),
                          null == r &&
                              x &&
                              (0, i.jsx)("div", {
                                  className: lP.P5,
                                  children: (0, i.jsx)(R.$, {
                                      variant: "secondary",
                                      text: j.intl.string(V.default.PSuly6),
                                      loading: d,
                                      onClick: m,
                                  }),
                              }),
                      ],
                  })
                : (0, i.jsx)("div", {
                      className: lP.kL,
                      children: (0, i.jsx)("div", {
                          className: lP.m0,
                          children: (0, i.jsx)(g.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: j.intl.string(V.default["nXc/MQ"]),
                          }),
                      }),
                  });
        },
        Edit: function (e) {
            let { cancel: t } = e,
                l = (0, b.bG)([eJ.A], () => eJ.A.getGuildId()),
                n = lg.default.castGuildIdAsEveryoneGuildRoleId(l),
                s = (0, lj.n)(),
                r = (0, b.bG)([lx.A], () => (null != s ? lx.A.getChannel(s) : void 0), [s]),
                d = (0, b.bG)([lf.A], () => null != r && lf.A.can(eD.xBc.MANAGE_ROLES, r), [r]),
                c = (0, b.bG)([lh.A], () => (null == l ? lw : lh.A.getSortedRoles(l).filter((e) => e.id !== n)), [
                    l,
                    n,
                ]),
                o = a.useMemo(() => {
                    let e;
                    return null != r
                        ? null != (e = r.permissionOverwrites[r.guild_id]) &&
                          lv.zy(e.deny, eD.xBc.USE_EMBEDDED_ACTIVITIES)
                            ? c
                                  .filter((e) => {
                                      let t = r.permissionOverwrites[e.id];
                                      return null != t && lv.zy(t.allow, eD.xBc.USE_EMBEDDED_ACTIVITIES);
                                  })
                                  .map((e) => e.id)
                            : []
                        : [];
                }, [r, c]),
                [u, m] = a.useState(null),
                [x, h] = a.useState(!1),
                [f, g] = a.useState(!1),
                p = u ?? o,
                v = a.useMemo(() => c.map((e) => ({ id: e.id, label: e.name, value: e.id })), [c]);
            async function _() {
                if (null != r) {
                    (g(!1), h(!0));
                    try {
                        (await lR({ channel: r, selectedRoleIds: p }), t());
                    } catch {
                        (h(!1), g(!0));
                    }
                }
            }
            return null == r
                ? null
                : (0, i.jsxs)(W.B, {
                      gap: 16,
                      children: [
                          (0, i.jsx)(lm.Z, {
                              selectionMode: "multiple",
                              label: j.intl.string(V.default.XXLbfv),
                              description: j.intl.string(V.default.XrpYIG),
                              placeholder: j.intl.string(V.default.pp6WeD),
                              options: v,
                              value: p,
                              onSelectionChange: function (e) {
                                  (g(!1), m(e));
                              },
                              disabled: !d || x,
                              fullWidth: !0,
                              wrapTags: !0,
                          }),
                          !d && (0, i.jsx)(eV.w, { type: "warning", children: j.intl.string(V.default.UPLtlA) }),
                          f &&
                              (0, i.jsx)("div", {
                                  role: "alert",
                                  children: (0, i.jsx)(eV.w, {
                                      type: "critical",
                                      children: j.intl.string(V.default.xyCJYs),
                                  }),
                              }),
                          (0, i.jsxs)(eY.e, {
                              fullWidth: !0,
                              children: [
                                  (0, i.jsx)(R.$, {
                                      variant: "secondary",
                                      text: j.intl.string(j.t["ETE/oC"]),
                                      onClick: t,
                                      disabled: x,
                                  }),
                                  (0, i.jsx)(R.$, {
                                      variant: "primary",
                                      text: j.intl.string(j.t["R3BPH+"]),
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
