l.d(t, { m: () => lO });
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
    f = l(289873),
    g = l(738188),
    j = l(834730),
    p = l(375708),
    v = l(448492);
function _() {
    return (0, i.jsx)("div", {
        className: v.w,
        children: (0, i.jsx)(f.y, { type: f.y.Type.SPINNING_CIRCLE, "aria-label": p.intl.string(p.t.ZTNur7) }),
    });
}
function E() {
    return (0, i.jsxs)("div", {
        className: v.w,
        role: "alert",
        children: [
            (0, i.jsx)(g.WarningIcon, { size: "md", color: "text-feedback-critical", "aria-hidden": !0 }),
            (0, i.jsx)(j.E, { variant: "text-sm/normal", color: "text-muted", children: p.intl.string(p.t.F8FvUy) }),
        ],
    });
}
var A = l(503698),
    b = l.n(A),
    N = l(17928),
    I = l(364522),
    S = l(663417),
    y = l(140735),
    C = l(97808),
    T = l(778712),
    k = l(297264),
    R = l(463930),
    w = l(821609),
    D = l(80682),
    M = l(967144),
    L = l(885386),
    U = l(153488),
    P = l(696451),
    G = l(287809),
    O = l(58703),
    B = l(562153);
function W() {
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
var z = l(331322),
    F = l(927813),
    H = l(251812);
function q(e) {
    return e.entries.length < 3;
}
function K(e) {
    return (0, H.K)(q(e) ? void 0 : e.stat).name;
}
function Y(e) {
    let t;
    return q(e)
        ? "empty_state"
        : null != (t = e.computed_at) && new Date(t).getTime() - e.week_start_ts * F.A.Millis.SECOND >= F.A.Millis.WEEK
          ? "podium"
          : "in_progress";
}
function $(e) {
    let { expanded: t } = e;
    return t ? "regular" : "mini";
}
var Q = l(192308);
function V(e) {
    (0, Q.openModalLazy)(
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
                l.e("371482"),
                l.e("959134"),
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
                l.e("215890"),
                l.e("210413"),
                l.e("785888"),
                l.e("758219"),
            ]).then(l.bind(l, 499334));
            return (l) => (0, i.jsx)(t, { ...l, guildId: e });
        },
        { modalKey: "guild-space-leaderboard-sharing" },
    );
}
var X = l(61567),
    Z = l(823353);
function J(e) {
    let { guildId: t, onActivitySharingClick: l } = e,
        n = L.tz.useSetting(),
        a = L.JG.useSetting().includes(t),
        s = !n || a;
    return (0, i.jsxs)(z.B, {
        className: Z.w,
        align: "center",
        justify: "center",
        gap: 16,
        padding: { top: 24, right: 16, bottom: 24, left: 16 },
        children: [
            (0, i.jsxs)(z.B, {
                align: "center",
                gap: 6,
                children: [
                    (0, i.jsx)(k.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: p.intl.string(X.default.ULK65a),
                    }),
                    (0, i.jsx)(j.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: p.intl.format(s ? X.default.ueza5l : X.default["81PK67"], { memberCount: 3 }),
                    }),
                ],
            }),
            s &&
                (0, i.jsx)(w.$, {
                    variant: "secondary",
                    size: "sm",
                    text: p.intl.string(X.default.fMbgeZ),
                    onClick: () => {
                        (l(), V(t));
                    },
                }),
        ],
    });
}
var ee = l(939249),
    et = l(342296),
    el = l(518782);
function en(e) {
    let t = Math.floor(Math.max(e, 0) / F.A.Seconds.MINUTE),
        l = Math.floor(t / F.A.Minutes.HOUR),
        n = t % F.A.Minutes.HOUR;
    return 0 === l
        ? p.intl.formatToPlainString(X.default.DdzvGL, { minutes: n })
        : p.intl.formatToPlainString(X.default["6Y8H0A"], { hours: l, minutes: n });
}
function ei(e, t) {
    switch (t) {
        case el.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return {
                primary: p.intl.formatToPlainString(p.t["k2UNz+"], { days: e.value }),
                secondary: en(e.time_played_seconds),
            };
        case el.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return {
                primary: p.intl.formatToPlainString(X.default.rgpc8E, { count: e.value }),
                secondary: en(e.time_played_seconds),
            };
        case el.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            let l, n, i;
            return {
                primary:
                    ((n = Math.floor((l = Math.floor(Math.max(e.value, 0) / F.A.Millis.MINUTE)) / F.A.Minutes.HOUR)),
                    (i = l % F.A.Minutes.HOUR),
                    0 === n
                        ? p.intl.formatToPlainString(X.default.bgQf2H, { minutes: i })
                        : 0 === i
                          ? p.intl.formatToPlainString(X.default["D/HToK"], { hours: n })
                          : p.intl.formatToPlainString(X.default.fvtrHn, { hours: n, minutes: i })),
            };
        default:
            return { primary: "\u2014" };
    }
}
var ea = l(81466),
    es = l(406810),
    er = l(687966),
    ed = l(109112),
    ec = l(683063),
    eo = l(573435),
    eu = l(402860),
    em = l(396583),
    ex = l(587895),
    eh = l(429913),
    ef = l(280450);
function eg(e, t) {
    return { id: e, name: p.intl.string(X.default.rhDbuQ), iconUrl: void 0, isLoading: t };
}
function ej(e, t) {
    return e.get(t) ?? eg(t, !1);
}
function ep(e, t) {
    return t.map((t) => ej(e, t));
}
function ev(e, t) {
    let l = t.user_id,
        n = (0, N.bG)([G.default], () => G.default.getUser(l), [l]),
        i = (0, N.bG)([P.Ay], () => P.Ay.getMember(e, l), [e, l]),
        a = (0, M.gn)(e, l, i?.colorStrings ?? null),
        s = B.Ay.useName(e, void 0, n),
        r = (0, N.bG)([ef.default], () => ef.default.getId()) === l,
        d = null != n ? s : t.name;
    return {
        user: n,
        member: i,
        roleColorStrings: a,
        baseName: d,
        displayName: r ? p.intl.formatToPlainString(X.default.subXXA, { name: d }) : d,
    };
}
var e_ = l(518477),
    eE = l(870087);
function eA(e) {
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
        m = ev(t, l),
        x = l.application_ids[0],
        h = null != x ? ej(s, x) : void 0,
        f = l.user_id,
        g = a.useCallback(() => {
            (u?.(),
                (0, eu.openUserProfileModal)({
                    userId: f,
                    guildId: t,
                    tabSection: e_.RP.ACTIVITY,
                    scrollTarget: e_.bk.RECENT_ACTIVITY,
                }));
        }, [u, f, t]);
    return (0, i.jsxs)("div", {
        ref: o,
        "aria-hidden": c,
        inert: c,
        className: b()(eE.nM, { [eE.Bh]: r && !c, [eE.lR]: d }),
        children: [
            (0, i.jsx)(eb, { guildId: t, entry: l, identity: m, lastPlayedGame: h, onClick: u }),
            (0, i.jsx)(eS, { entry: l, stat: n, name: m.baseName, onClick: g }),
            (0, i.jsx)(ek, {
                name: m.baseName,
                applicationIds: l.application_ids,
                applicationCount: l.application_count,
                games: s,
                onClick: g,
            }),
        ],
    });
}
function eb(e) {
    let { guildId: t, entry: l, identity: n, lastPlayedGame: s, onClick: r } = e,
        d = a.useRef(null),
        c = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(eN, { rank: l.rank }),
                (0, i.jsx)(C.eu, {
                    size: T._3.SIZE_32,
                    src: n.user?.getAvatarURL(t, (0, T.FT)(T._3.SIZE_32)) ?? void 0,
                    className: eE.my,
                    "aria-hidden": !0,
                }),
                (0, i.jsxs)("div", {
                    className: eE.Dc,
                    children: [
                        (0, i.jsx)(k.D, {
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            lineClamp: 1,
                            children: (0, i.jsx)(R.g, {
                                name: n.displayName,
                                colorString: n.member?.colorString ?? null,
                                colorStrings: n.roleColorStrings,
                            }),
                        }),
                        null != s &&
                            (0, i.jsx)(j.E, {
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                lineClamp: 1,
                                children: p.intl.formatToPlainString(X.default.YuNVPY, { gameName: s.name }),
                            }),
                    ],
                }),
            ],
        });
    return null == n.user
        ? (0, i.jsx)("div", { className: eE.D_, children: c })
        : (0, i.jsx)(et.A, {
              targetElementRef: d,
              user: n.user,
              guildId: t,
              children: (e) =>
                  (0, i.jsx)(ee.D, {
                      ...e,
                      innerRef: d,
                      className: b()(eE.D_, eE.FB),
                      onClick: (t) => {
                          (r?.(), e.onClick(t));
                      },
                      children: c,
                  }),
          });
}
function eN(e) {
    let { rank: t } = e,
        l = p.intl.formatToPlainString(X.default.I4JiAQ, { rank: t });
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
                    (0, i.jsx)(y.A, { children: l }),
                    (0, i.jsx)(j.E, {
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
        case el.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return (0, i.jsx)(ea.CalendarIcon, { size: "xxs", color: d.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case el.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            return (0, i.jsx)(es.ClockIcon, { size: "xxs", color: d.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case el.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return (0, i.jsx)(er.GameControllerIcon, { size: "xxs", color: d.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        default:
            return null;
    }
}
function eS(e) {
    let { entry: t, stat: l, name: n, onClick: a } = e,
        { primary: s, secondary: r } = ei(t, l);
    return (0, i.jsxs)(ee.D, {
        className: eE.TH,
        "aria-label": p.intl.formatToPlainString(X.default.o6mBdl, { name: n }),
        onClick: a,
        children: [
            (0, i.jsxs)("div", {
                className: eE.bf,
                children: [
                    (0, i.jsx)(eI, { stat: l }),
                    (0, i.jsx)(j.E, { variant: "text-sm/medium", color: "text-subtle", children: s }),
                ],
            }),
            null != r && (0, i.jsx)(j.E, { variant: "text-xs/medium", color: "text-muted", children: r }),
        ],
    });
}
function ey(e) {
    let { game: t, notched: l } = e;
    return (0, i.jsx)("span", {
        className: eE.rO,
        "aria-hidden": !0,
        children: (0, i.jsx)(eo.Ay, {
            mask: l ? eo.l8[24] : eo.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null != t.iconUrl
                    ? (0, i.jsx)("img", { className: eE.Gt, src: t.iconUrl, alt: "", "aria-hidden": !0 })
                    : (0, i.jsx)("span", {
                          className: eE.ct,
                          "aria-hidden": !0,
                          children: !t.isLoading && (0, i.jsx)(ed._, { size: "xxs", color: d.A.colors.ICON_SUBTLE }),
                      }),
        }),
    });
}
function eC(e) {
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
                      children: (0, i.jsx)(eo.Ay, {
                          mask: eo.Ay.Masks.SQUIRCLE,
                          width: 24,
                          height: 24,
                          children: (0, i.jsx)("div", {
                              className: eE.p0,
                              children: (0, i.jsx)(j.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-subtle",
                                  children: p.intl.formatToPlainString(X.default.JiMMEd, { count: a }),
                              }),
                          }),
                      }),
                  })
                : null,
        ],
    });
}
function eT(e) {
    let { played: t, totalCount: l, children: n } = e;
    return (0, i.jsx)(ec.u, {
        body:
            0 === t.length
                ? p.intl.string(X.default["7CrlYb"])
                : 1 === t.length
                  ? p.intl.formatToPlainString(X.default.dbNpK0, { firstGame: t[0].name })
                  : 2 === t.length && 2 === l
                    ? p.intl.formatToPlainString(X.default.tqVg4M, { firstGame: t[0].name, secondGame: t[1].name })
                    : p.intl.formatToPlainString(X.default.bxcrSz, {
                          firstGame: t[0].name,
                          secondGame: t[1].name,
                          otherCount: l - 2,
                      }),
        asset: t.length > 0 ? (0, i.jsx)(eC, { played: t, totalCount: t.length }) : void 0,
        assetSize: t.length > 1 ? 43 : 24,
        children: n,
    });
}
function ek(e) {
    let { name: t, applicationIds: l, applicationCount: n, games: a, onClick: s } = e,
        r = ep(a, l);
    return (0, i.jsx)("div", {
        className: eE.ag,
        children: (0, i.jsx)(eT, {
            played: r,
            totalCount: n,
            children: (0, i.jsx)(ee.D, {
                className: b()(eE.Nw, eE.Dz),
                "aria-label": p.intl.formatToPlainString(X.default.o6mBdl, { name: t }),
                onClick: s,
                children: (0, i.jsx)(eC, { played: r, totalCount: n }),
            }),
        }),
    });
}
var eR = l(189043);
function ew(e) {
    let { guildId: t, entries: l, stat: n, games: a, currentUserEntry: s, currentUserPillarRef: r, onClick: d } = e,
        c = {
            1: { column: eR.HC, pillar: eR.P5 },
            2: { column: eR.th, pillar: eR.Vk },
            3: { column: eR.Ou, pillar: eR.el },
        };
    return (0, i.jsx)("div", {
        className: eR.pI,
        role: "list",
        "aria-label": p.intl.string(X.default.wKXLfQ),
        children: l.map((e, l) =>
            (0, i.jsx)(
                eD,
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
function eD(e) {
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
        h = ev(t, l),
        { primary: f } = ei(l, d),
        g = 1 === n ? T._3.SIZE_48 : T._3.SIZE_40,
        p = a.useRef(null),
        v = b()(eR.dR, { [eR.m$]: 1 === n, [eR.wd]: 2 === n, [eR.p0]: 3 === n }),
        _ = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: eR.R3,
                    children: [
                        (0, i.jsx)(C.eu, {
                            size: g,
                            src: h.user?.getAvatarURL(t, (0, T.FT)(g)) ?? void 0,
                            "aria-hidden": !0,
                        }),
                        (0, i.jsx)("div", { className: v }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: b()(eR.DX, r),
                    children: [
                        (0, i.jsx)(k.D, {
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            lineClamp: 1,
                            className: eR.IY,
                            children: (0, i.jsx)(R.g, {
                                name: h.displayName,
                                colorString: h.member?.colorString ?? null,
                                colorStrings: h.roleColorStrings,
                            }),
                        }),
                        (0, i.jsx)(eT, {
                            played: x,
                            totalCount: l.application_count,
                            children: (0, i.jsx)(j.E, {
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
                ? (0, i.jsx)(et.A, {
                      targetElementRef: p,
                      user: h.user,
                      guildId: t,
                      children: (e) =>
                          (0, i.jsx)(ee.D, {
                              ...e,
                              className: eR.fs,
                              innerRef: p,
                              onClick: (t) => {
                                  (m?.(), e.onClick(t));
                              },
                              children: _,
                          }),
                  })
                : (0, i.jsx)("div", { className: eR.fs, children: _ }),
    });
}
var eM = l(652215),
    eL = l(219047);
function eU(e) {
    let t,
        l,
        n,
        { guildId: s, data: r, inModal: d = !1 } = e,
        { stat: c, entries: o } = r,
        u = (0, N.bG)([G.default], () => G.default.getCurrentUser()?.id),
        m = a.useMemo(() => o.find((e) => e.user_id === u), [o, u]),
        h = a.useMemo(() => {
            let e = o.slice(0, 20);
            return null == m || e.includes(m) ? e : [...e, m];
        }, [o, m]),
        f = a.useMemo(() => Array.from(new Set(h.map((e) => e.user_id))), [h]);
    (0, D.k6)(s, f);
    let g =
            ((t = a.useMemo(() => Array.from(new Set(h.flatMap((e) => e.application_ids))), [h])),
            (l = (0, eh.A)(t)),
            (n = (0, N.yK)([ex.A], () => t.map((e) => ex.A.didFetchingApplicationFail(e)))),
            a.useMemo(() => {
                let e = new Map();
                return (
                    t.forEach((t, i) => {
                        let a = l[i];
                        e.set(
                            t,
                            null != a
                                ? { id: t, name: a.name, iconUrl: a.getIconURL(64) ?? void 0, isLoading: !1 }
                                : eg(t, !n[i]),
                        );
                    }),
                    e
                );
            }, [t, l, n])),
        j = q(r),
        p = Y(r),
        v = "podium" === p,
        _ = $({ expanded: d }),
        { scrollerRef: E, scrollerNode: A, userRowRef: S, floatingRowPosition: y } = W();
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
                    x.default.track(eM.HAw.LEADERBOARD_END_IMPRESSION, {
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
        scrollerNode: j ? null : A,
        isEmpty: j,
    });
    let C = null != y,
        T = a.useCallback(
            (e) => {
                x.default.track(eM.HAw.LEADERBOARD_CLICK, {
                    location: e,
                    guild_id: s,
                    leaderboard_state: p,
                    leaderboard_view: _,
                });
            },
            [s, p, _],
        ),
        k = null == m && null != u,
        R = a.useCallback(
            (e) => {
                let t = e === m;
                return (0, i.jsx)(
                    eA,
                    {
                        guildId: s,
                        entry: e,
                        stat: c,
                        games: g,
                        isCurrentUser: t,
                        shouldDimForCurrentUser: t && C,
                        rowRef: t ? S : void 0,
                        onClick: () => T("row"),
                    },
                    `${e.rank}-${e.user_id}`,
                );
            },
            [C, m, g, s, c, S, T],
        );
    if (j)
        return (0, i.jsx)("div", {
            className: eL.Cm,
            children: (0, i.jsx)(J, { guildId: s, onActivitySharingClick: () => T("activity_sharing") }),
        });
    let w = v ? h.slice(3) : h,
        M = [h[0], h[1], h[2]];
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsxs)("div", {
                className: eL.SY,
                children: [
                    (0, i.jsxs)(I.d_, {
                        className: b()(eL.p_, { [eL.zE]: d, [eL.Ng]: k }),
                        ref: E,
                        children: [
                            v &&
                                (0, i.jsx)(ew, {
                                    guildId: s,
                                    entries: M,
                                    stat: c,
                                    games: g,
                                    currentUserEntry: m,
                                    currentUserPillarRef: S,
                                    onClick: () => T("podium"),
                                }),
                            w.map(R),
                        ],
                    }),
                    (null != m && null != y) || k
                        ? (0, i.jsx)("div", { className: b()(eL.Dz, "top" !== y || k ? eL.qV : eL.gN) })
                        : null,
                    null != m &&
                        null != y &&
                        (0, i.jsx)("div", {
                            className: b()(eL.z$, "top" === y ? eL.aG : eL.Ie),
                            children: (0, i.jsx)(eA, {
                                guildId: s,
                                entry: m,
                                stat: c,
                                games: g,
                                isCurrentUser: !0,
                                shouldDimForCurrentUser: !1,
                                isFloating: !0,
                                onClick: () => T("row"),
                            }),
                        }),
                    k && (0, i.jsx)(eG, { guildId: s, onActivitySharingClick: () => T("activity_sharing") }),
                ],
            }),
            (0, i.jsx)(eP, { computedAt: r.computed_at, inModal: d }),
        ],
    });
}
function eP(e) {
    let { computedAt: t, inModal: l } = e,
        n = (0, i.jsxs)("div", {
            className: eL.z8,
            children: [
                (0, i.jsx)(S.RefreshIcon, { size: "xxs", color: d.A.colors.ICON_SUBTLE, "aria-hidden": !0 }),
                (0, i.jsx)(j.E, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: p.intl.string(X.default["/nma+a"]),
                }),
            ],
        });
    return null == t
        ? (0, i.jsx)("div", { className: eL.qr, children: n })
        : (0, i.jsx)("div", {
              className: b()(eL.qr, { [eL.zE]: l }),
              tabIndex: 0,
              children: (0, i.jsx)(o.m, {
                  text: p.intl.formatToPlainString(X.default["1bt50t"], { timestamp: (0, O.mk)(new Date(t)) }),
                  position: "bottom",
                  children: n,
              }),
          });
}
function eG(e) {
    let { guildId: t, onActivitySharingClick: l } = e,
        n = L.tz.useSetting(),
        a = L.JG.useSetting(),
        s = (0, N.bG)([U.A], () => U.A.hasConsented(eM.YAq.PERSONALIZATION)),
        r = p.intl.string(X.default.toxuHd),
        d = !1;
    ((!n || a.includes(t)) && ((r = p.intl.string(X.default["8y885d"])), (d = !0)),
        s || ((r = p.intl.string(X.default.mTARYx)), (d = !0)));
    let c = (0, N.bG)([G.default], () => G.default.getCurrentUser()),
        o = B.Ay.useName(t, void 0, c),
        u = (0, N.bG)([P.Ay], () => P.Ay.getMember(t, c?.id ?? "")),
        m = (0, M.gn)(t, c?.id, u?.colorStrings ?? null);
    return null == c
        ? null
        : (0, i.jsxs)("div", {
              className: eL.Xx,
              children: [
                  (0, i.jsxs)("div", {
                      className: eL.kd,
                      children: [
                          (0, i.jsxs)("div", {
                              className: eL.nk,
                              children: [
                                  (0, i.jsx)(y.A, { children: p.intl.string(X.default["oHdW+u"]) }),
                                  (0, i.jsx)(j.E, {
                                      variant: "text-sm/semibold",
                                      color: "text-muted",
                                      "aria-hidden": !0,
                                      children: "?",
                                  }),
                              ],
                          }),
                          (0, i.jsx)(C.eu, {
                              size: T._3.SIZE_32,
                              src: c.getAvatarURL(t, (0, T.FT)(T._3.SIZE_32)) ?? void 0,
                              className: eL.SA,
                              "aria-hidden": !0,
                          }),
                          (0, i.jsxs)("div", {
                              className: eL.ko,
                              children: [
                                  (0, i.jsx)(k.D, {
                                      variant: "heading-sm/semibold",
                                      color: "text-default",
                                      lineClamp: 1,
                                      children: (0, i.jsx)(R.g, {
                                          name: o,
                                          colorString: u?.colorString ?? null,
                                          colorStrings: m,
                                      }),
                                  }),
                                  (0, i.jsx)("div", {
                                      className: eL.LF,
                                      children: (0, i.jsx)(j.E, {
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
                          className: eL.rl,
                          children: (0, i.jsx)(w.$, {
                              variant: "secondary",
                              size: "sm",
                              text: p.intl.string(X.default.fMbgeZ),
                              onClick: () => {
                                  (l(), V(t));
                              },
                          }),
                      }),
              ],
          });
}
var eO = l(224640),
    eB = l(20742),
    eW = l(515746);
function ez(e) {
    let { data: t } = e,
        l = (0, H.K)(t.stat),
        {
            ended: n,
            endDate: s,
            badgeLabel: r,
        } = (function (e) {
            let t = (e + F.A.Seconds.WEEK) * F.A.Millis.SECOND,
                [l, n] = a.useState(() => Date.now()),
                i = t - l,
                s = i <= 0,
                r = i - (Math.ceil(i / F.A.Millis.DAY) - 1) * F.A.Millis.DAY;
            return (
                (0, em.A)(() => n(Date.now()), s ? null : r),
                a.useMemo(
                    () => ({
                        ended: s,
                        endDate: new Date(t),
                        badgeLabel: s
                            ? p.intl.string(X.default["J8r/7L"])
                            : p.intl.formatToPlainString(X.default["PuaR+2"], { days: Math.ceil(i / F.A.Millis.DAY) }),
                    }),
                    [s, t, i],
                )
            );
        })(t.week_start_ts),
        d = L.PZ.useSetting(),
        c = 2 > (0, O.m_)(s, new Date()) ? (0, O.mk)(s, !1, d) : (0, O.i$)(s, "L LT", d),
        o = n
            ? p.intl.format(X.default.kG9XmM, { endedAt: c, nextStatName: (0, H.K)(t.next_stat).name })
            : p.intl.format(X.default["X+VLqi"], { statQuestion: l.question, endsAt: c });
    return (0, i.jsx)(ec.u, {
        title: l.name,
        body: o,
        position: "top",
        children: (0, i.jsx)("div", {
            className: eW.q,
            tabIndex: 0,
            children: (0, i.jsx)(j.E, {
                variant: "text-xs/semibold",
                color: n ? "text-muted" : "text-brand",
                children: r,
            }),
        }),
    });
}
function eF(e) {
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
            x.default.track(
                eM.HAw.LEADERBOARD_HOVER,
                {
                    guild_id: n.guildId,
                    duration: Math.round(l) / 1e3,
                    leaderboard_state: Y(n.data),
                    leaderboard_view: $({ expanded: n.expanded }),
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
var eH = l(460614);
function eq(e) {
    let { guildId: t, data: l, modalProps: n } = e,
        a = eF({ guildId: t, data: l, expanded: !0 });
    return (0, i.jsx)(eO.d, {
        size: "lg",
        "aria-label": K(l),
        ...n,
        children: (0, i.jsxs)("div", {
            ref: a,
            children: [
                (0, i.jsxs)("div", {
                    className: eH.wx,
                    children: [
                        (0, i.jsxs)("div", {
                            className: eH.LD,
                            children: [
                                (0, i.jsx)(c.TrophyIcon, {
                                    size: "xs",
                                    color: d.A.colors.ICON_SUBTLE,
                                    "aria-hidden": !0,
                                }),
                                (0, i.jsx)(k.D, { variant: "heading-sm/medium", className: eH.DD, children: K(l) }),
                                (0, i.jsx)(ez, { data: l }),
                            ],
                        }),
                        (0, i.jsx)(eB.s_, {}),
                    ],
                }),
                (0, i.jsx)("div", { className: eH.rf, children: (0, i.jsx)(eU, { guildId: t, data: l, inModal: !0 }) }),
            ],
        }),
    });
}
var eK = l(452027),
    eY = l(103557),
    e$ = l(825484),
    eQ = l(95477),
    eV = l(241326),
    eX = l(683071),
    eZ = l(2553),
    eJ = l(405810),
    e0 = l(967198),
    e1 = l(488428),
    e2 = l(776231);
let e3 = (0, l(676279).cy)();
function e6(e, t, l) {
    let n = l.startsWith("a_"),
        i = n ? (e3 ? "webp" : "gif") : e3 ? "webp" : "jpg",
        { CDN_HOST: a, API_ENDPOINT: s } = window.GLOBAL_ENV,
        r = eM.Rsh.GUILD_SPACE_IMAGE_TEXT_WIDGET_IMAGE(e, t, l, i),
        d = null != a ? `https://${a}${r}` : location.protocol + s + r,
        c = { size: (0, e2.kr)(500 * (0, e2.mZ)()) };
    return (
        "jpg" === i && (c.quality = "lossless"), "webp" === i && n && (c.animated = !0), (d += `?${e1.stringify(c)}`)
    );
}
var e4 = l(868602),
    e8 = l(445187),
    e7 = l(650583),
    e5 = l(684343);
function e9(e) {
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
        className: e5.vR,
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
                    className: e5.Mf,
                    "aria-selected": t,
                    "aria-controls": s,
                    tabIndex: t ? 0 : -1,
                    onClick: () => d(e.id),
                    onKeyDown: c,
                    children: (0, i.jsx)(j.E, {
                        className: e5.Pf,
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
var te = l(831544),
    tt = l(28863),
    tl = l(148166),
    tn = l(427209),
    ti = l(294454),
    ta = l(605810);
function ts(e) {
    let { target: t, tabIndex: n } = e;
    return (0, i.jsx)(o.m, {
        text: p.intl.string(p.t.RDE0Sc),
        ariaHidden: !0,
        children: (0, i.jsx)("button", {
            type: "button",
            className: ta.ql,
            tabIndex: n,
            "aria-label": p.intl.string(p.t.Ej3B3Y),
            onClick: () => {
                (0, Q.openModalLazy)(
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
                            l.e("776602"),
                            l.e("264236"),
                            l.e("140402"),
                            l.e("349619"),
                            l.e("543039"),
                            l.e("244560"),
                            l.e("398125"),
                            l.e("221825"),
                            l.e("695445"),
                            l.e("930758"),
                            l.e("266900"),
                            l.e("948804"),
                            l.e("593600"),
                            l.e("890027"),
                            l.e("536200"),
                            l.e("707826"),
                            l.e("136022"),
                            l.e("199999"),
                            l.e("832817"),
                            l.e("183776"),
                            l.e("425544"),
                            l.e("416143"),
                            l.e("611523"),
                            l.e("844695"),
                            l.e("401518"),
                            l.e("592028"),
                            l.e("425906"),
                            l.e("234236"),
                            l.e("776195"),
                            l.e("92124"),
                            l.e("123216"),
                            l.e("854461"),
                            l.e("988077"),
                            l.e("776750"),
                            l.e("662174"),
                            l.e("147786"),
                            l.e("87306"),
                            l.e("361626"),
                            l.e("428296"),
                            l.e("561216"),
                            l.e("747017"),
                            l.e("165595"),
                            l.e("445124"),
                            l.e("445421"),
                            l.e("313681"),
                            l.e("343550"),
                            l.e("552712"),
                            l.e("829177"),
                            l.e("832823"),
                            l.e("761935"),
                            l.e("106943"),
                            l.e("232551"),
                            l.e("511527"),
                            l.e("892340"),
                            l.e("763070"),
                            l.e("381933"),
                            l.e("14962"),
                            l.e("502018"),
                            l.e("249366"),
                            l.e("728633"),
                            l.e("482861"),
                            l.e("588940"),
                            l.e("628439"),
                            l.e("631608"),
                            l.e("225990"),
                            l.e("539620"),
                            l.e("133902"),
                            l.e("485393"),
                            l.e("770697"),
                            l.e("123353"),
                            l.e("561279"),
                            l.e("894747"),
                            l.e("401590"),
                            l.e("790244"),
                            l.e("498215"),
                            l.e("960478"),
                            l.e("466322"),
                            l.e("593176"),
                            l.e("121435"),
                            l.e("592731"),
                            l.e("53374"),
                            l.e("252264"),
                            l.e("170653"),
                            l.e("836545"),
                            l.e("784041"),
                            l.e("124060"),
                            l.e("858514"),
                            l.e("344265"),
                            l.e("718573"),
                            l.e("784103"),
                            l.e("146566"),
                            l.e("317225"),
                            l.e("444376"),
                            l.e("346102"),
                            l.e("486792"),
                            l.e("696123"),
                            l.e("537894"),
                            l.e("198323"),
                            l.e("548974"),
                            l.e("273232"),
                            l.e("799657"),
                            l.e("869546"),
                            l.e("843719"),
                            l.e("240511"),
                            l.e("817852"),
                            l.e("831145"),
                            l.e("556967"),
                            l.e("643612"),
                            l.e("187856"),
                            l.e("577084"),
                            l.e("652898"),
                            l.e("463095"),
                            l.e("332470"),
                            l.e("334127"),
                            l.e("318546"),
                            l.e("400954"),
                            l.e("610449"),
                            l.e("810034"),
                            l.e("32781"),
                            l.e("238412"),
                            l.e("41991"),
                            l.e("8563"),
                            l.e("499941"),
                            l.e("693832"),
                            l.e("515572"),
                            l.e("773192"),
                            l.e("710638"),
                            l.e("193158"),
                            l.e("959669"),
                            l.e("73500"),
                            l.e("912773"),
                            l.e("418943"),
                            l.e("377766"),
                            l.e("565065"),
                            l.e("834386"),
                            l.e("4780"),
                            l.e("757598"),
                            l.e("130674"),
                            l.e("124006"),
                            l.e("662355"),
                            l.e("126780"),
                            l.e("455924"),
                            l.e("844780"),
                            l.e("360781"),
                            l.e("631825"),
                            l.e("784727"),
                            l.e("851243"),
                            l.e("371482"),
                            l.e("220518"),
                            l.e("237834"),
                            l.e("959134"),
                            l.e("807771"),
                            l.e("478476"),
                            l.e("496715"),
                            l.e("622825"),
                            l.e("406357"),
                            l.e("115754"),
                            l.e("616592"),
                            l.e("278424"),
                            l.e("680986"),
                            l.e("600330"),
                            l.e("982699"),
                            l.e("681541"),
                            l.e("177104"),
                            l.e("88160"),
                            l.e("90373"),
                            l.e("250478"),
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
                    { stackingBehavior: "stack", modalKey: ti.aU },
                );
            },
            children: (0, i.jsx)(tn.A, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
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
                              children: (0, i.jsx)(j.E, {
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
    th = (e, t) => (0, i.jsx)(j.E, { tag: "span", variant: "text-sm/semibold", color: "text-default", children: e }, t);
function tf(e) {
    return e;
}
function tg(e) {
    return e?.direction ?? tx;
}
function tj(e) {
    return p.intl.formatToPlainString(X.default["7X+3f8"], { count: e });
}
function tp(e) {
    let t = e?.plays_change_percent;
    if (null == t) return null;
    let l = Math.round(Math.abs(t));
    return 0 === l
        ? null
        : { direction: t > 0 ? "up" : "down", label: p.intl.formatToPlainString(X.default["h+LUpk"], { percent: l }) };
}
var tv = l(633099);
function t_(e) {
    let { trend: t } = e,
        l = "up" === t.direction ? tc.z : to.M;
    return (0, i.jsxs)("span", {
        className: b()(tv.GW, { [tv.$J]: "up" === t.direction, [tv.KW]: "down" === t.direction }),
        children: [
            (0, i.jsx)(l, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
            (0, i.jsx)(j.E, { tag: "span", variant: "text-sm/medium", color: "none", children: t.label }),
        ],
    });
}
function tE(e) {
    var t;
    let { guildId: l, song: n } = e,
        s = a.useMemo(() => (n.facepile_user_ids ?? []).slice(0, 3), [n.facepile_user_ids]);
    (0, D.k6)(l, s);
    let r = (0, N.yK)([G.default], () => s.map((e) => G.default.getUser(e)), [s]),
        d = a.useMemo(() => r.filter((e) => null != e), [r]);
    if (0 === d.length) return null;
    let c = n.unique_listeners - d.length;
    return (0, i.jsx)("span", {
        className: tv.WM,
        role: "group",
        "aria-label":
            ((t = n.unique_listeners),
            p.intl.formatToPlainString(X.default.AzIhRB, { count: t, trend: tx, countHook: tf })),
        children: (0, i.jsx)(tu.Ay, {
            users: d,
            guildId: l,
            size: tu.DN.SIZE_24,
            max: d.length,
            count: n.unique_listeners,
            hideMoreUsers: c <= 0,
            renderMoreUsers: () =>
                (0, i.jsx)("span", {
                    className: tv.ju,
                    children: (0, i.jsx)(j.E, {
                        tag: "span",
                        variant: "text-xs/semibold",
                        color: "text-subtle",
                        children: p.intl.formatToPlainString(X.default.bFIg0R, { count: c }),
                    }),
                }),
        }),
    });
}
function tA(e) {
    let { isCompact: t, headline: l, detail: n, trend: a } = e;
    return null == l && null == n && null == a
        ? null
        : (0, i.jsx)("div", {
              className: b()(tv.yp, { [tv.Fl]: t }),
              children: (0, i.jsxs)("div", {
                  className: tv.QD,
                  children: [
                      null != l && (0, i.jsx)(j.E, { variant: "text-md/semibold", color: "text-default", children: l }),
                      (0, i.jsxs)("div", {
                          className: tv._0,
                          children: [
                              null != n &&
                                  (0, i.jsx)(j.E, {
                                      tag: "span",
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: n,
                                  }),
                              null != a && (0, i.jsx)(t_, { trend: a }),
                          ],
                      }),
                  ],
              }),
          });
}
function tb(e) {
    var t;
    let { guildId: l, isCompact: n, canShowEmbed: a, song: s } = e,
        r = tp(s);
    return (0, i.jsxs)("div", {
        className: b()(tv.yp, { [tv.Fl]: n }),
        children: [
            a && (0, i.jsx)(tm.A, { className: tv.aF, resourceType: tr.M0.TRACK, resourceId: s.track_external_id }),
            (0, i.jsxs)("div", {
                className: tv.QD,
                children: [
                    (0, i.jsx)(tE, { guildId: l, song: s }),
                    (0, i.jsxs)("div", {
                        className: tv._0,
                        children: [
                            (0, i.jsx)(j.E, {
                                tag: "span",
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children:
                                    ((t = s.plays),
                                    p.intl.format(X.default["7hHUIS"], { count: t, trend: tg(r), countHook: th })),
                            }),
                            null != r && (0, i.jsx)(t_, { trend: r }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var tN = l(197935),
    tI = l(915734);
function tS(e) {
    let { label: t, items: l, isCompact: n, getItemKey: a, renderItem: s } = e;
    return (0, i.jsx)("div", {
        className: b()(tI.Dk, { [tI.yI]: n }),
        children: (0, i.jsx)(tN.A, {
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
var ty = (((n = {}).TOP_SONGS = "top_songs"), (n.TOP_ARTISTS = "top_artists"), (n.TOP_LISTENERS = "top_listeners"), n);
let tC = ["top_songs", "top_artists", "top_listeners"];
function tT(e) {
    switch (e) {
        case "top_songs":
            return p.intl.string(X.default.KgeEtx);
        case "top_artists":
            return p.intl.string(X.default.RYxWTS);
        case "top_listeners":
            return p.intl.string(X.default.KO73KB);
    }
}
function tk(e, t) {
    return `popular-music-tab-${e}-${t}`;
}
function tR(e) {
    return `popular-music-panel-${e}`;
}
var tw = l(742452);
function tD(e) {
    return e.artist_external_id;
}
function tM(e, t) {
    return (0, i.jsx)(td, { artist: e, itemProps: t });
}
function tL(e) {
    var t, l;
    let n,
        a,
        s,
        { isCompact: r, data: d } = e;
    if (0 === d.ranked_artists.length) return null;
    let c = tp(d.summary);
    return (0, i.jsxs)("div", {
        className: tw.U,
        children: [
            (0, i.jsx)(tS, {
                label: tT(ty.TOP_ARTISTS),
                items: d.ranked_artists,
                isCompact: r,
                getItemKey: tD,
                renderItem: tM,
            }),
            (0, i.jsx)(tA, {
                isCompact: r,
                headline:
                    ((t = d.summary),
                    null == (n = t?.distinct_songs) || n < 1
                        ? null
                        : p.intl.formatToPlainString(X.default.W8etVA, { count: n })),
                detail:
                    ((l = d.summary),
                    (a = l?.listener_count),
                    (s = l?.distinct_artists),
                    null == a || a < 1 || null == s || s < 1
                        ? null
                        : p.intl.format(X.default.yGqf0D, {
                              memberCount: a,
                              artistCount: s,
                              trend: tg(c),
                              memberCountHook: th,
                              artistCountHook: th,
                          })),
                trend: c,
            }),
        ],
    });
}
var tU = l(109487),
    tP = l(279543);
function tG(e) {
    let { isCompact: t } = e;
    return (0, i.jsxs)("div", {
        className: tP.qr,
        children: [
            (0, i.jsxs)("div", {
                className: tP.Os,
                children: [
                    (0, i.jsx)("span", {
                        className: tP.Kk,
                        children: (0, i.jsx)(S.RefreshIcon, {
                            size: "xxs",
                            color: d.A.colors.ICON_SUBTLE,
                            "aria-hidden": !0,
                        }),
                    }),
                    (0, i.jsx)(j.E, {
                        className: tP.Pf,
                        tag: "span",
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: p.intl.string(X.default["3/DOFo"]),
                    }),
                ],
            }),
            (0, i.jsxs)(tt.Anchor, {
                className: tP.al,
                href: tr.RQ.WEB_HOME,
                "aria-label": p.intl.string(X.default["jUr+wF"]),
                children: [
                    (0, i.jsx)("span", {
                        className: tP.Kk,
                        children: (0, i.jsx)(tU.L, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    }),
                    !t &&
                        (0, i.jsx)(j.E, {
                            className: tP.G2,
                            tag: "span",
                            variant: "text-xs/medium",
                            color: "none",
                            children: p.intl.string(X.default.ZdPp2q),
                        }),
                ],
            }),
        ],
    });
}
var tO = l(65154),
    tB = l(329177),
    tW = l(242226);
function tz(e) {
    let t,
        l,
        n,
        a,
        {
            guildId: s,
            userId: r,
            listener: c,
            rank: o,
            isCompact: u,
            isCurrentUser: m,
            shouldDimForCurrentUser: x,
            isFloating: h = !1,
            rowRef: f,
        } = e,
        g =
            ((t = (0, N.bG)([G.default], () => G.default.getUser(r), [r])),
            (l = (0, N.bG)([P.Ay], () => P.Ay.getMember(s, r), [s, r])),
            (n = (0, M.gn)(s, r, l?.colorStrings ?? null)),
            (a = B.Ay.useName(s, void 0, t)),
            {
                user: t,
                colorString: l?.colorString ?? null,
                roleColorStrings: n,
                displayName: m ? p.intl.formatToPlainString(X.default.subXXA, { name: a }) : a,
            }),
        { user: v } = g;
    return null == v
        ? null
        : (0, i.jsxs)("div", {
              ref: f,
              "aria-hidden": h,
              inert: h,
              className: b()(tW.nM, { [tW.Bh]: m && !h, [tW.lR]: x }),
              children: [
                  (0, i.jsx)(tF, { guildId: s, user: v, identity: g, rank: o, lastTrack: c?.last_track ?? null }),
                  null != c &&
                      (0, i.jsxs)("div", {
                          className: b()(tW.Mx, { [tW.dA]: u }),
                          children: [
                              (0, i.jsx)(tO.S, { size: "xxs", color: d.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                              (0, i.jsx)(j.E, {
                                  variant: "text-sm/medium",
                                  color: "text-strong",
                                  children: tj(c.plays),
                              }),
                          ],
                      }),
                  null != c &&
                      !u &&
                      (0, i.jsx)(tY, { artists: c.recent_artists ?? [], artistCount: c.artist_count ?? null }),
              ],
          });
}
function tF(e) {
    let { guildId: t, user: l, identity: n, rank: s, lastTrack: r } = e,
        d = a.useRef(null);
    return (0, i.jsx)(et.A, {
        targetElementRef: d,
        user: l,
        guildId: t,
        children: (e) =>
            (0, i.jsxs)(ee.D, {
                ...e,
                innerRef: d,
                className: tW.D_,
                children: [
                    null != s &&
                        (0, i.jsx)(y.A, { children: p.intl.formatToPlainString(X.default.I4JiAQ, { rank: s }) }),
                    (0, i.jsxs)("span", {
                        className: tW.R3,
                        children: [
                            (0, i.jsx)(C.eu, {
                                size: T._3.SIZE_32,
                                src: l.getAvatarURL(t, (0, T.FT)(T._3.SIZE_32)) ?? void 0,
                                "aria-hidden": !0,
                            }),
                            1 === s &&
                                (0, i.jsx)("span", {
                                    className: tW.ie,
                                    "aria-hidden": !0,
                                    children: (0, i.jsx)(tB.CrownIcon, { size: "xxs", color: "currentColor" }),
                                }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tW.Dc,
                        children: [
                            (0, i.jsx)(k.D, {
                                variant: "heading-sm/semibold",
                                color: "text-default",
                                lineClamp: 1,
                                children: (0, i.jsx)(R.g, {
                                    name: n.displayName,
                                    colorString: n.colorString,
                                    colorStrings: n.roleColorStrings,
                                }),
                            }),
                            (0, i.jsx)(tq, { track: r }),
                        ],
                    }),
                ],
            }),
    });
}
function tH(e, t) {
    return (0, i.jsx)(j.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: e }, t);
}
function tq(e) {
    let { track: t } = e,
        l = t?.track_title;
    if (null == l) return null;
    let n = t?.artist_name;
    return (0, i.jsx)(j.E, {
        variant: "text-xs/medium",
        color: "text-subtle",
        lineClamp: 1,
        children:
            null != n
                ? p.intl.format(X.default.QqaqBg, { trackTitle: l, artistName: n, highlightHook: tH })
                : p.intl.format(X.default.ZMJ8Mt, { trackTitle: l, highlightHook: tH }),
    });
}
function tK(e) {
    let { artist: t, notched: l } = e,
        [n, s] = a.useState(!1),
        r = null != t.artist_image_hash ? tr.RQ.IMAGE(t.artist_image_hash) : null;
    return (0, i.jsx)("span", {
        className: tW.sG,
        children: (0, i.jsx)(eo.Ay, {
            mask: l ? eo.l8[24] : eo.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null == r || n
                    ? (0, i.jsx)("span", {
                          className: tW.Ql,
                          children: (0, i.jsx)(te.MicrophoneIcon, { size: "xxs", color: d.A.colors.ICON_SUBTLE }),
                      })
                    : (0, i.jsx)("img", { className: tW.v2, src: r, alt: "", loading: "lazy", onError: () => s(!0) }),
        }),
    });
}
function tY(e) {
    let { artists: t, artistCount: l } = e,
        n = t.slice(0, 3),
        a = (l ?? t.length) - n.length;
    return (0, i.jsx)("div", {
        className: tW.Rh,
        "aria-hidden": !0,
        children:
            n.length > 0 &&
            (0, i.jsxs)("div", {
                className: tW.W$,
                children: [
                    n.map((e, t) =>
                        (0, i.jsx)(
                            tK,
                            { artist: e, notched: a > 0 || t !== n.length - 1 },
                            `${e.artist_external_id}-${e.artist_image_hash}`,
                        ),
                    ),
                    a > 0 &&
                        (0, i.jsx)("span", {
                            className: tW.sG,
                            children: (0, i.jsx)(eo.Ay, {
                                mask: eo.Ay.Masks.SQUIRCLE,
                                width: 24,
                                height: 24,
                                children: (0, i.jsx)("div", {
                                    className: tW.ag,
                                    children: (0, i.jsx)(j.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: p.intl.formatToPlainString(X.default.bFIg0R, { count: a }),
                                    }),
                                }),
                            }),
                        }),
                ],
            }),
    });
}
var t$ = l(897130);
function tQ(e) {
    let { guildId: t, isCompact: l, data: n } = e,
        s = n.top_listeners,
        r = (0, N.bG)([G.default], () => G.default.getCurrentUser()?.id),
        d = s.findIndex((e) => e.user_id === r),
        c = -1 === d ? null : s[d],
        o = a.useMemo(() => s.map((e) => e.user_id), [s]);
    (0, D.k6)(t, o);
    let { scrollerRef: u, userRowRef: m, floatingRowPosition: x } = W(),
        h = null != x;
    return 0 === s.length
        ? null
        : (0, i.jsxs)("div", {
              className: t$.SY,
              children: [
                  (0, i.jsxs)(I.d_, {
                      className: t$.p_,
                      ref: u,
                      children: [
                          s.map((e, n) => {
                              let a = e.user_id === r;
                              return (0, i.jsx)(
                                  tz,
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
                              (0, i.jsx)(tz, {
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
                              (0, i.jsx)("div", { className: "top" === x ? t$.gN : t$.qV }),
                              (0, i.jsx)("div", {
                                  className: b()(t$.z$, "top" === x ? t$.aG : t$.Ie),
                                  children: (0, i.jsx)(tz, {
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
var tV = l(432017),
    tX = l(362704),
    tZ = l(782134);
function tJ(e) {
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
                className: b()(ta.MT, { [ta.tY]: l }),
                "aria-pressed": l,
                onClick: () => n(t.track_external_id),
                children: [
                    (0, i.jsxs)(tl.R, {
                        src: r,
                        isCircular: !1,
                        FallbackIcon: tV.T,
                        children: [
                            l &&
                                (0, i.jsx)("span", {
                                    className: b()(ta.Lw, ta.Kp),
                                    "aria-hidden": !0,
                                    children: (0, i.jsx)(tX.Y, { size: "md", color: "currentColor" }),
                                }),
                            (0, i.jsxs)("span", {
                                className: b()(ta.Lw, ta.vY),
                                children: [
                                    (0, i.jsx)(tZ.PlayIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                                    (0, i.jsx)(j.E, {
                                        tag: "span",
                                        variant: "text-xs/semibold",
                                        color: "none",
                                        children: tj(t.plays),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    null != t.track_title &&
                        (0, i.jsxs)("span", {
                            className: ta.Qq,
                            children: [
                                (0, i.jsx)(j.E, {
                                    className: ta.DD,
                                    tag: "span",
                                    variant: "text-sm/semibold",
                                    color: "text-default",
                                    lineClamp: 1,
                                    children: t.track_title,
                                }),
                                null != t.artist_name &&
                                    (0, i.jsx)(j.E, {
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
var t0 = l(196765),
    t1 = l(770178);
let t2 = { view: "top_songs", isCompact: !1, canShowEmbed: !1, selectedTrackId: null },
    t3 = (0, t0.v)(() => ({ byWidgetId: {} }));
function t6(e, t) {
    t3.setState((l) => {
        let n = l.byWidgetId[e] ?? t2;
        return { byWidgetId: { ...l.byWidgetId, [e]: { ...n, ...t } } };
    });
}
function t4(e) {
    return t3((t) => t.byWidgetId[e]?.view ?? t2.view);
}
function t8(e) {
    return t3((t) => t.byWidgetId[e]?.isCompact ?? t2.isCompact);
}
function t7(e) {
    return t3((t) => t.byWidgetId[e]?.selectedTrackId ?? t2.selectedTrackId);
}
function t5(e, t) {
    (t3.getState().byWidgetId[e] ?? t2).view !== t && t6(e, { view: t, selectedTrackId: null });
}
function t9(e) {
    return e.track_external_id;
}
function le(e) {
    var t;
    let l,
        { guildId: n, widgetId: s, isCompact: r, data: d } = e,
        c = t7(s),
        o = t3((e) => e.byWidgetId[s]?.canShowEmbed ?? t2.canShowEmbed),
        u = a.useCallback(
            (e) => {
                let t;
                return (
                    (t = t3.getState().byWidgetId[s]?.selectedTrackId ?? null),
                    void t6(s, { selectedTrackId: t === e ? null : e })
                );
            },
            [s],
        ),
        m = a.useCallback(
            (e, t) => (0, i.jsx)(tJ, { song: e, isSelected: e.track_external_id === c, onSelect: u, itemProps: t }),
            [c, u],
        );
    if (0 === d.ranked_songs.length) return null;
    let x = d.ranked_songs.find((e) => e.track_external_id === c) ?? null,
        h = tp(d.summary);
    return (0, i.jsxs)("div", {
        className: tw.U,
        children: [
            (0, i.jsx)(tS, {
                label: tT(ty.TOP_SONGS),
                items: d.ranked_songs,
                isCompact: r,
                getItemKey: t9,
                renderItem: m,
            }),
            null != x
                ? (0, i.jsx)(tb, { guildId: n, isCompact: r, canShowEmbed: o, song: x })
                : (0, i.jsx)(tA, {
                      isCompact: r,
                      headline: (function (e) {
                          let t = e?.listening_time_ms;
                          if (null == t) return null;
                          let l = Math.round(t / F.A.Millis.MINUTE);
                          return l < 1 ? null : p.intl.formatToPlainString(X.default["+5b01q"], { minutes: l });
                      })(d.summary),
                      detail:
                          ((t = d.summary),
                          null == (l = t?.listener_count) || l < 1
                              ? null
                              : p.intl.format(X.default.AzIhRB, { count: l, trend: tg(h), countHook: th })),
                      trend: h,
                  }),
        ],
    });
}
var lt = l(597601),
    ll = l(980707),
    ln = l(477782),
    li = l(922016),
    la = l(847374),
    ls = l(914173);
function lr(e) {
    let { navId: t, options: l, selectedId: n, label: a, onSelect: s, onClose: r } = e;
    return (0, i.jsx)(ll.W, {
        navId: t,
        "aria-label": a,
        onClose: r,
        onSelect: void 0,
        children: l.map((e) =>
            (0, i.jsx)(
                ln.iD,
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
function ld(e) {
    let { navId: t, options: l, selectedId: n, menuLabel: s, triggerLabel: r, onSelect: c } = e,
        [o, u] = a.useState(!1),
        m = a.useRef(null),
        x = l.find((e) => e.id === n);
    return null == x
        ? null
        : (0, i.jsx)(li.Y, {
              targetElementRef: m,
              position: "bottom",
              align: "left",
              shouldShow: o,
              onRequestOpen: () => u(!0),
              onRequestClose: () => u(!1),
              renderPopout: (e) => {
                  let { closePopout: a } = e;
                  return (0, i.jsx)(lr, { navId: t, options: l, selectedId: n, label: s, onSelect: c, onClose: a });
              },
              children: (e) =>
                  (0, i.jsx)(k.D, {
                      variant: "heading-sm/medium",
                      className: ls.R_,
                      children: (0, i.jsxs)("button", {
                          ...e,
                          ref: m,
                          type: "button",
                          className: ls.hZ,
                          "aria-haspopup": "menu",
                          "aria-label": r,
                          children: [
                              null != x.icon && (0, i.jsx)("span", { className: ls.Kk, children: x.icon }),
                              (0, i.jsx)(j.E, {
                                  className: ls.DD,
                                  tag: "span",
                                  variant: "heading-sm/medium",
                                  color: "text-default",
                                  children: x.label,
                              }),
                              (0, i.jsx)("span", {
                                  className: ls.Kk,
                                  children: (0, i.jsx)(la.a, {
                                      size: "xs",
                                      color: d.A.colors.ICON_DEFAULT,
                                      "aria-hidden": !0,
                                  }),
                              }),
                          ],
                      }),
                  }),
          });
}
var lc = l(871107);
function lo(e) {
    let { view: t } = e,
        l = d.A.colors.ICON_DEFAULT;
    switch (t) {
        case ty.TOP_ARTISTS:
            return (0, i.jsx)(te.MicrophoneIcon, { size: "xs", color: l, "aria-hidden": !0 });
        case ty.TOP_LISTENERS:
            return (0, i.jsx)(lt.L, { size: "xs", color: l, "aria-hidden": !0 });
        case ty.TOP_SONGS:
            return (0, i.jsx)(tV.T, { size: "xs", color: l, "aria-hidden": !0 });
    }
}
function lu(e) {
    let { widgetId: t, title: l } = e,
        n = t8(t),
        a = t4(t);
    if (!n)
        return (0, i.jsxs)("div", {
            className: lc.$,
            children: [
                (0, i.jsx)("span", {
                    className: lc.K,
                    children: (0, i.jsx)(tV.T, { size: "xs", color: d.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
                }),
                (0, i.jsx)(h.q, { children: l }),
            ],
        });
    let s = tC.map((e) => ({ id: e, label: tT(e), icon: (0, i.jsx)(lo, { view: e }) }));
    return (0, i.jsx)(ld, {
        navId: "popular-music-view",
        options: s,
        selectedId: a,
        menuLabel: p.intl.string(X.default.hFYyGU),
        triggerLabel: p.intl.formatToPlainString(X.default["/sw0JL"], { widgetName: l, viewName: tT(a) }),
        onSelect: (e) => t5(t, e),
    });
}
var lm = l(756936),
    lx = l(890497),
    lh = l(734057),
    lf = l(317525),
    lg = l(576705),
    lj = l(935208),
    lp = l(44167);
l(321073);
var lv = l(485845),
    l_ = l(136722),
    lE = l(435183),
    lA = l(155718),
    lb = l(795816),
    lN = l(933958),
    lI = l(574152),
    lS = l(627363),
    ly = l(712440),
    lC = l(733110),
    lT = l(488926),
    lk = l(818023);
async function lR(e) {
    null == ex.A.getApplication(lk.NW) && (await (0, lS.TA)(lk.NW));
    let t = lN.Ay.getEmbeddedActivitiesForChannel(e).every((e) => e.applicationId !== lk.NW);
    return await (0, lb.su)({
        channelId: e,
        applicationId: lk.NW,
        isStart: t,
        embeddedActivitiesManager: (0, lI.A)(),
        renderInFramePool: !0,
    });
}
async function lw(e) {
    let { channel: t, selectedRoleIds: l } = e,
        n = [];
    if (l.length > 0)
        for (let e of (n.push({ id: t.guild_id, type: lA.r2.ROLE, allow: lT.x3, deny: eM.xBc.USE_EMBEDDED_ACTIVITIES }),
        l))
            n.push({ id: e, type: lA.r2.ROLE, allow: eM.xBc.USE_EMBEDDED_ACTIVITIES, deny: lT.x3 });
    let i = await (0, lE.RT)(t.id, { permissionOverwrites: n });
    if (!i.ok) throw i;
}
let lD = [];
var lM = l(344351),
    lL = l(256693),
    lU = l(812901),
    lP = l(317608),
    lG = l(953538);
let lO = {
    [r.a.IMAGE_TEXT]: {
        View: function (e) {
            let { widget: t, guildSpaceMode: l, guildId: n } = e,
                { text: a, image_hash: s } = t.config,
                r = "edit" === l ? t.config.image : void 0,
                d = void 0 !== r ? r : null != s ? e6(n, t.id, s) : null;
            return (0, i.jsxs)("div", {
                className: e8.kL,
                children: [
                    null != d && (0, i.jsx)("img", { className: e8.Sl, src: d, alt: "" }),
                    null != a &&
                        (0, i.jsx)(j.E, {
                            variant: "text-md/normal",
                            color: "text-subtle",
                            className: e8.Qq,
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
                v = (0, N.bG)([e0.A], () => e0.A.getGuildId()),
                _ = void 0 !== h ? h : null != s.image_hash && null != v ? e6(v, t.id, s.image_hash) : null;
            return (0, i.jsxs)(z.B, {
                gap: 16,
                children: [
                    (0, i.jsx)(eQ.k, {
                        label: p.intl.string(p.t.gnwWrx),
                        value: d,
                        onChange: function (e) {
                            (j(null), c(e));
                        },
                        maxLength: 100,
                        showCharacterCount: !0,
                    }),
                    (0, i.jsx)(eK.D, {
                        label: p.intl.string(p.t.X4IxWL),
                        children: (0, i.jsxs)(z.B, {
                            gap: 16,
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            className: e4.B,
                            children: [
                                (0, i.jsxs)(z.B, {
                                    gap: 8,
                                    direction: "horizontal",
                                    children: [
                                        (0, i.jsx)(eJ.A, {
                                            variant: "secondary",
                                            text: p.intl.string(p.t["MsUY/S"]),
                                            onChange: function (e) {
                                                (j(null), f(e));
                                            },
                                            maxFileSizeBytes: 0xa00000,
                                            onFileSizeError: () => (0, eZ.A)(0xa00000),
                                        }),
                                        null != _ &&
                                            (0, i.jsx)(o.m, {
                                                text: p.intl.string(p.t.N86XcP),
                                                ariaHidden: !0,
                                                children: (0, i.jsx)(u.K, {
                                                    variant: "critical-secondary",
                                                    icon: eV.TrashIcon,
                                                    onClick: function () {
                                                        (j(null), f(null));
                                                    },
                                                    "aria-label": p.intl.string(p.t.N86XcP),
                                                }),
                                            }),
                                    ],
                                }),
                                null != _ && (0, i.jsx)("img", { className: e4.V, src: _, alt: "" }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(eY.f, {
                        label: p.intl.string(p.t.COGMNC),
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
                            children: (0, i.jsx)(eX.w, { type: "critical", children: g }),
                        }),
                    (0, i.jsxs)(e$.e, {
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(w.$, { variant: "secondary", text: p.intl.string(p.t["ETE/oC"]), onClick: n }),
                            (0, i.jsx)(w.$, {
                                variant: "primary",
                                text: p.intl.string(p.t["R3BPH+"]),
                                onClick: function () {
                                    let e;
                                    if (
                                        ((e = void 0 !== h ? null !== h : null != s.image_hash),
                                        0 === m.length && !e && (j(p.intl.string(X.default.zleX9q)), 1))
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
                { hydration: l, guildId: n, guildSpaceMode: s } = e,
                r = eF({
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
                        ? (0, i.jsx)(_, {})
                        : "error" === l.status
                          ? (0, i.jsx)(E, {})
                          : (0, i.jsx)(eU, { guildId: n, data: l.data })),
                (0, i.jsx)("div", { ref: d, children: t })
            );
        },
        Title: function (e) {
            let { widget: t, hydration: l } = e;
            return l?.status !== "success"
                ? (0, i.jsx)(h.q, { children: t.default_title ?? "" })
                : (0, i.jsx)(h.q, { children: K(l.data) });
        },
        TitleIcon: function () {
            return (0, i.jsx)(c.TrophyIcon, { size: "xs", color: d.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        },
        HeaderAccessory: function (e) {
            let { hydration: t } = e;
            return t?.status !== "success" || q(t.data) ? null : (0, i.jsx)(ez, { data: t.data });
        },
        HeaderActions: function (e) {
            let { hydration: t, guildId: l } = e,
                n = t?.status === "success" ? t.data : void 0;
            return null != n && q(n)
                ? null
                : (0, i.jsx)(o.m, {
                      text: p.intl.string(p.t.dcl9MQ),
                      children: (0, i.jsx)(u.K, {
                          variant: "icon-only",
                          size: "sm",
                          icon: m._,
                          "aria-label": p.intl.string(p.t.dcl9MQ),
                          disabled: null == n,
                          onClick: function () {
                              null != n &&
                                  (x.default.track(eM.HAw.LEADERBOARD_CLICK, {
                                      location: "expand",
                                      guild_id: l,
                                      leaderboard_state: Y(n),
                                      leaderboard_view: $({ expanded: !1 }),
                                  }),
                                  (function (e) {
                                      let { guildId: t, data: l } = e,
                                          n = (e) => (0, i.jsx)(eq, { guildId: t, data: l, modalProps: e });
                                      (0, Q.openModalLazy)(() => Promise.resolve(n), {
                                          modalKey: "guild-space-leaderboard-expand",
                                      });
                                  })({ guildId: l, data: n }));
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
                            t6(t, { isCompact: l < 480, canShowEmbed: l >= 720 });
                        },
                        [t],
                    )),
                    (0, t1.g)(n, s, [t], { fireOnMount: !0 }),
                    a.useEffect(
                        () => () => {
                            t3.setState((e) => {
                                if (null == e.byWidgetId[t]) return e;
                                let l = { ...e.byWidgetId };
                                return (delete l[t], { byWidgetId: l });
                            });
                        },
                        [t],
                    ),
                    n),
                x = t8(c.id),
                h = t4(c.id),
                f = t7(c.id),
                g = !x && "view" === u,
                j =
                    o?.status === "success" && h !== ty.TOP_LISTENERS
                        ? ((l = o.data),
                          null ==
                          (r =
                              l.ranked_songs.find((e) => e.track_external_id === f && null != e.cover_art_hash)
                                  ?.cover_art_hash ??
                              l.ranked_songs.find((e) => null != e.cover_art_hash)?.cover_art_hash)
                              ? null
                              : tr.RQ.IMAGE(r))
                        : null;
            return (0, i.jsxs)("div", {
                className: lm.rf,
                ref: m,
                children: [
                    null != j && (0, i.jsx)("img", { className: lm.G, src: j, alt: "", "aria-hidden": !0 }),
                    (0, i.jsx)("div", {
                        className: lm.Qs,
                        children: (0, i.jsx)("div", {
                            id: tR(c.id),
                            className: lm.nd,
                            role: g ? "tabpanel" : "group",
                            tabIndex: 0,
                            "aria-label": g ? void 0 : tT(h),
                            "aria-labelledby": g ? tk(c.id, h) : void 0,
                            children: (function () {
                                if (null == o || "idle" === o.status || "loading" === o.status)
                                    return (0, i.jsx)(_, {});
                                if ("error" === o.status) return (0, i.jsx)(E, {});
                                switch (h) {
                                    case ty.TOP_SONGS:
                                        return (0, i.jsx)(le, {
                                            guildId: d,
                                            widgetId: c.id,
                                            isCompact: x,
                                            data: o.data,
                                        });
                                    case ty.TOP_ARTISTS:
                                        return (0, i.jsx)(tL, { isCompact: x, data: o.data });
                                    case ty.TOP_LISTENERS:
                                        return (0, i.jsx)(tQ, { guildId: d, isCompact: x, data: o.data });
                                }
                            })(),
                        }),
                    }),
                    (0, i.jsx)(tG, { isCompact: x }),
                ],
            });
        },
        Title: function (e) {
            let { widget: t, guildSpaceMode: l } = e,
                n = t.default_title ?? p.intl.string(X.default["5xxUI2"]);
            return "edit" === l ? (0, i.jsx)(h.q, { children: n }) : (0, i.jsx)(lu, { widgetId: t.id, title: n });
        },
        ViewHeaderTrailing: function (e) {
            let { widget: t, title: l } = e,
                n = t8(t.id),
                a = t4(t.id);
            return n
                ? null
                : (0, i.jsx)(e9, {
                      label: l,
                      tabs: tC.map((e) => ({ id: e, label: tT(e) })),
                      selectedId: a,
                      panelId: tR(t.id),
                      getTabId: (e) => tk(t.id, e),
                      onSelect: (e) => t5(t.id, e),
                  });
        },
    },
    [r.a.WHITEBOARD]: {
        View: function (e) {
            let t,
                l,
                n = (0, lp.n)(),
                r = (0, N.bG)(
                    [lh.A, lg.A],
                    () => {
                        let e = null != n ? lh.A.getChannel(n) : void 0;
                        return null != e && lg.A.can(eM.xBc.USE_EMBEDDED_ACTIVITIES, e);
                    },
                    [n],
                ),
                d = (0, N.bG)(
                    [lN.Ay],
                    () => {
                        let e = lN.Ay.getCurrentEmbeddedActivity();
                        return null == e ||
                            e.applicationId !== lk.NW ||
                            e.location.kind !== lM.T.GUILD_CHANNEL ||
                            e.location.channel_id !== n
                            ? null
                            : e;
                    },
                    [n],
                ),
                c = (0, N.bG)([lN.Ay], () => lN.Ay.isLaunchingActivity(), []),
                { authResolved: o, isAuthorized: u } =
                    ((t = (0, N.bG)(
                        [lC.default],
                        () => lC.default.getFetchStateForApplication(lk.NW) === lC.FetchState.FETCHED,
                        [],
                    )),
                    (l = (0, N.bG)(
                        [lC.default, ex.A],
                        () => {
                            let e = lC.default.getNewestTokenForApplication(lk.NW);
                            if (null == e) return !1;
                            let t = ex.A.getApplication(lk.NW),
                                l = t?.integrationTypesConfig?.[lv.b.USER_INSTALL]?.oauth2InstallParams?.scopes;
                            if (null == l) return !0;
                            let n = new Set(e.scopes);
                            return l.every((e) => n.has(e));
                        },
                        [],
                    )),
                    a.useEffect(() => {
                        (lC.default.getFetchStateForApplication(lk.NW) === lC.FetchState.NOT_FETCHED &&
                            ly.A.fetch([lk.NW]),
                            null == ex.A.getApplication(lk.NW) && (0, lS.TA)(lk.NW));
                    }, []),
                    { authResolved: t, isAuthorized: l }),
                m = a.useRef(!1);
            a.useEffect(() => {
                null == d && null != n && r && o && u && !m.current && ((m.current = !0), lR(n));
            }, [r, n, d, o, u]);
            let x = a.useCallback(() => {
                    null != n && ((m.current = !0), lR(n));
                }, [n]),
                h = null != n && o && !u;
            return null == n
                ? (0, i.jsx)(z.B, {
                      className: lG.kL,
                      align: "center",
                      justify: "center",
                      children: (0, i.jsx)(s, { alt: "", width: 200 }),
                  })
                : r
                  ? (0, i.jsxs)("div", {
                        className: lG.kL,
                        children: [
                            null != d &&
                                (0, i.jsx)(lP.A, {
                                    frameId: (0, lL.Ri)(d),
                                    level: lU.A.WithinAppContent,
                                    className: lG.t$,
                                }),
                            null == d &&
                                h &&
                                (0, i.jsx)("div", {
                                    className: lG.P5,
                                    children: (0, i.jsx)(w.$, {
                                        variant: "secondary",
                                        text: p.intl.string(X.default.PSuly6),
                                        loading: c,
                                        onClick: x,
                                    }),
                                }),
                        ],
                    })
                  : (0, i.jsx)("div", {
                        className: lG.kL,
                        children: (0, i.jsx)("div", {
                            className: lG.m0,
                            children: (0, i.jsx)(j.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: p.intl.string(X.default["nXc/MQ"]),
                            }),
                        }),
                    });
        },
        Edit: function (e) {
            let { cancel: t } = e,
                l = (0, N.bG)([e0.A], () => e0.A.getGuildId()),
                n = lj.default.castGuildIdAsEveryoneGuildRoleId(l),
                s = (0, lp.n)(),
                r = (0, N.bG)([lh.A], () => (null != s ? lh.A.getChannel(s) : void 0), [s]),
                d = (0, N.bG)([lg.A], () => null != r && lg.A.can(eM.xBc.MANAGE_ROLES, r), [r]),
                c = (0, N.bG)([lf.A], () => (null == l ? lD : lf.A.getSortedRoles(l).filter((e) => e.id !== n)), [
                    l,
                    n,
                ]),
                o = a.useMemo(() => {
                    let e;
                    return null != r
                        ? null != (e = r.permissionOverwrites[r.guild_id]) &&
                          l_.zy(e.deny, eM.xBc.USE_EMBEDDED_ACTIVITIES)
                            ? c
                                  .filter((e) => {
                                      let t = r.permissionOverwrites[e.id];
                                      return null != t && l_.zy(t.allow, eM.xBc.USE_EMBEDDED_ACTIVITIES);
                                  })
                                  .map((e) => e.id)
                            : []
                        : [];
                }, [r, c]),
                [u, m] = a.useState(null),
                [x, h] = a.useState(!1),
                [f, g] = a.useState(!1),
                j = u ?? o,
                v = a.useMemo(() => c.map((e) => ({ id: e.id, label: e.name, value: e.id })), [c]);
            async function _() {
                if (null != r) {
                    (g(!1), h(!0));
                    try {
                        (await lw({ channel: r, selectedRoleIds: j }), t());
                    } catch {
                        (h(!1), g(!0));
                    }
                }
            }
            return null == r
                ? null
                : (0, i.jsxs)(z.B, {
                      gap: 16,
                      children: [
                          (0, i.jsx)(lx.Z, {
                              selectionMode: "multiple",
                              label: p.intl.string(X.default.XXLbfv),
                              description: p.intl.string(X.default.XrpYIG),
                              placeholder: p.intl.string(X.default.pp6WeD),
                              options: v,
                              value: j,
                              onSelectionChange: function (e) {
                                  (g(!1), m(e));
                              },
                              disabled: !d || x,
                              fullWidth: !0,
                              wrapTags: !0,
                          }),
                          !d && (0, i.jsx)(eX.w, { type: "warning", children: p.intl.string(X.default.UPLtlA) }),
                          f &&
                              (0, i.jsx)("div", {
                                  role: "alert",
                                  children: (0, i.jsx)(eX.w, {
                                      type: "critical",
                                      children: p.intl.string(X.default.xyCJYs),
                                  }),
                              }),
                          (0, i.jsxs)(e$.e, {
                              fullWidth: !0,
                              children: [
                                  (0, i.jsx)(w.$, {
                                      variant: "secondary",
                                      text: p.intl.string(p.t["ETE/oC"]),
                                      onClick: t,
                                      disabled: x,
                                  }),
                                  (0, i.jsx)(w.$, {
                                      variant: "primary",
                                      text: p.intl.string(p.t["R3BPH+"]),
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
