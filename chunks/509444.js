l.d(t, { m: () => lB });
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
    v = l(375708),
    p = l(448492);
function _() {
    return (0, i.jsx)("div", {
        className: p.w,
        children: (0, i.jsx)(f.y, { type: f.y.Type.SPINNING_CIRCLE, "aria-label": v.intl.string(v.t.ZTNur7) }),
    });
}
function E() {
    return (0, i.jsxs)("div", {
        className: p.w,
        role: "alert",
        children: [
            (0, i.jsx)(g.WarningIcon, { size: "md", color: "text-feedback-critical", "aria-hidden": !0 }),
            (0, i.jsx)(j.E, { variant: "text-sm/normal", color: "text-muted", children: v.intl.string(v.t.F8FvUy) }),
        ],
    });
}
var b = l(503698),
    A = l.n(b),
    N = l(17928),
    I = l(364522),
    S = l(939249),
    y = l(663417),
    C = l(140735),
    T = l(97808),
    k = l(778712),
    R = l(297264),
    w = l(463930),
    D = l(821609),
    M = l(80682),
    L = l(967144),
    U = l(885386),
    P = l(153488),
    G = l(696451),
    O = l(287809),
    B = l(58703),
    W = l(562153),
    z = l(775602);
function F() {
    let [e, t] = a.useState(null),
        [l, n] = a.useState(null),
        [i, s] = a.useState("unknown"),
        r = (0, N.bG)([z.Ay], () => z.Ay.useReducedMotion);
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
var H = l(331322),
    q = l(927813),
    K = l(251812);
function Y(e) {
    return e.entries.length < 3;
}
function $(e) {
    return (0, K.K)(Y(e) ? void 0 : e.stat).name;
}
function Q(e) {
    let t;
    return Y(e)
        ? "empty_state"
        : null != (t = e.computed_at) && new Date(t).getTime() - e.week_start_ts * q.A.Millis.SECOND >= q.A.Millis.WEEK
          ? "podium"
          : "in_progress";
}
function V(e) {
    let { expanded: t } = e;
    return t ? "regular" : "mini";
}
var X = l(192308);
function Z(e) {
    (0, X.openModalLazy)(
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
var J = l(61567),
    ee = l(823353);
function et(e) {
    let { guildId: t, onActivitySharingClick: l } = e,
        n = U.tz.useSetting(),
        a = U.JG.useSetting().includes(t),
        s = !n || a;
    return (0, i.jsxs)(H.B, {
        className: ee.w,
        align: "center",
        justify: "center",
        gap: 16,
        padding: { top: 24, right: 16, bottom: 24, left: 16 },
        children: [
            (0, i.jsxs)(H.B, {
                align: "center",
                gap: 6,
                children: [
                    (0, i.jsx)(R.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: v.intl.string(J.default.ULK65a),
                    }),
                    (0, i.jsx)(j.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: v.intl.format(s ? J.default.ueza5l : J.default["81PK67"], { memberCount: 3 }),
                    }),
                ],
            }),
            s &&
                (0, i.jsx)(D.$, {
                    variant: "secondary",
                    size: "sm",
                    text: v.intl.string(J.default.fMbgeZ),
                    onClick: () => {
                        (l(), Z(t));
                    },
                }),
        ],
    });
}
var el = l(342296),
    en = l(518782);
function ei(e) {
    let t = Math.floor(Math.max(e, 0) / q.A.Seconds.MINUTE),
        l = Math.floor(t / q.A.Minutes.HOUR),
        n = t % q.A.Minutes.HOUR;
    return 0 === l
        ? v.intl.formatToPlainString(J.default.DdzvGL, { minutes: n })
        : v.intl.formatToPlainString(J.default["6Y8H0A"], { hours: l, minutes: n });
}
function ea(e, t) {
    switch (t) {
        case en.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return {
                primary: v.intl.formatToPlainString(v.t["k2UNz+"], { days: e.value }),
                secondary: ei(e.time_played_seconds),
            };
        case en.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return {
                primary: v.intl.formatToPlainString(J.default.rgpc8E, { count: e.value }),
                secondary: ei(e.time_played_seconds),
            };
        case en.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            let l, n, i;
            return {
                primary:
                    ((n = Math.floor((l = Math.floor(Math.max(e.value, 0) / q.A.Millis.MINUTE)) / q.A.Minutes.HOUR)),
                    (i = l % q.A.Minutes.HOUR),
                    0 === n
                        ? v.intl.formatToPlainString(J.default.bgQf2H, { minutes: i })
                        : 0 === i
                          ? v.intl.formatToPlainString(J.default["D/HToK"], { hours: n })
                          : v.intl.formatToPlainString(J.default.fvtrHn, { hours: n, minutes: i })),
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
    return { id: e, name: v.intl.string(J.default.rhDbuQ), iconUrl: void 0, isLoading: t };
}
function ev(e, t) {
    return e.get(t) ?? ej(t, !1);
}
function ep(e, t) {
    return t.map((t) => ev(e, t));
}
function e_(e, t) {
    let l = t.user_id,
        n = (0, N.bG)([O.default], () => O.default.getUser(l), [l]),
        i = (0, N.bG)([G.Ay], () => G.Ay.getMember(e, l), [e, l]),
        a = (0, L.gn)(e, l, i?.colorStrings ?? null),
        s = W.Ay.useName(e, void 0, n),
        r = (0, N.bG)([eg.default], () => eg.default.getId()) === l,
        d = null != n ? s : t.name;
    return {
        user: n,
        member: i,
        roleColorStrings: a,
        baseName: d,
        displayName: r ? v.intl.formatToPlainString(J.default.subXXA, { name: d }) : d,
    };
}
var eE = l(518477),
    eb = l(870087);
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
            metricWidth: m,
        } = e,
        x = e_(t, l),
        h = l.application_ids[0],
        f = null != h ? ev(s, h) : void 0,
        g = l.user_id,
        j = a.useCallback(() => {
            (u?.(),
                (0, em.openUserProfileModal)({
                    userId: g,
                    guildId: t,
                    tabSection: eE.RP.ACTIVITY,
                    scrollTarget: eE.bk.RECENT_ACTIVITY,
                }));
        }, [u, g, t]);
    return (0, i.jsxs)("div", {
        ref: o,
        "aria-hidden": c,
        inert: c,
        className: A()(eb.nM, { [eb.Bh]: r && !c, [eb.lR]: d }),
        children: [
            (0, i.jsx)(eN, { guildId: t, entry: l, identity: x, lastPlayedGame: f, onClick: u }),
            (0, i.jsx)(ey, { entry: l, stat: n, width: m, onClick: j }),
            (0, i.jsx)(eR, {
                name: x.baseName,
                applicationIds: l.application_ids,
                applicationCount: l.application_count,
                games: s,
                onClick: j,
            }),
        ],
    });
}
function eN(e) {
    let { guildId: t, entry: l, identity: n, lastPlayedGame: s, onClick: r } = e,
        d = a.useRef(null),
        c = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(eI, { rank: l.rank }),
                (0, i.jsx)(T.eu, {
                    size: k._3.SIZE_32,
                    src: n.user?.getAvatarURL(t, (0, k.FT)(k._3.SIZE_32)) ?? void 0,
                    className: eb.my,
                    "aria-hidden": !0,
                }),
                (0, i.jsxs)("div", {
                    className: eb.Dc,
                    children: [
                        (0, i.jsx)(R.D, {
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            lineClamp: 1,
                            children: (0, i.jsx)(w.g, {
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
                                children: v.intl.formatToPlainString(J.default.YuNVPY, { gameName: s.name }),
                            }),
                    ],
                }),
            ],
        });
    return null == n.user
        ? (0, i.jsx)("div", { className: eb.D_, children: c })
        : (0, i.jsx)(el.A, {
              targetElementRef: d,
              user: n.user,
              guildId: t,
              children: (e) =>
                  (0, i.jsx)(S.D, {
                      ...e,
                      innerRef: d,
                      className: A()(eb.D_, eb.FB),
                      onClick: (t) => {
                          (r?.(), e.onClick(t));
                      },
                      children: c,
                  }),
          });
}
function eI(e) {
    let { rank: t } = e,
        l = v.intl.formatToPlainString(J.default.I4JiAQ, { rank: t });
    switch (t) {
        case 1:
            return (0, i.jsx)("div", {
                className: eb.Tm,
                "aria-label": l,
                children: (0, i.jsx)("div", { className: eb.Xe }),
            });
        case 2:
            return (0, i.jsx)("div", {
                className: eb.Tm,
                "aria-label": l,
                children: (0, i.jsx)("div", { className: eb.XQ }),
            });
        case 3:
            return (0, i.jsx)("div", {
                className: eb.Tm,
                "aria-label": l,
                children: (0, i.jsx)("div", { className: eb.c9 }),
            });
        default:
            return (0, i.jsxs)("div", {
                className: eb.mH,
                children: [
                    (0, i.jsx)(C.A, { children: l }),
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
function eS(e) {
    let { stat: t } = e;
    switch (t) {
        case en.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return (0, i.jsx)(es.CalendarIcon, { size: "xxs", color: d.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case en.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            return (0, i.jsx)(er.ClockIcon, { size: "xxs", color: d.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case en.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return (0, i.jsx)(ed.GameControllerIcon, { size: "xxs", color: d.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        default:
            return null;
    }
}
function ey(e) {
    let { entry: t, stat: l, width: n, onClick: a } = e,
        { primary: s, secondary: r } = ea(t, l);
    return (0, i.jsxs)(S.D, {
        className: eb.TH,
        style: null != n ? { width: n } : void 0,
        "aria-label": v.intl.string(J.default.o6mBdl),
        onClick: a,
        children: [
            (0, i.jsxs)("div", {
                className: eb.bf,
                children: [
                    (0, i.jsx)(eS, { stat: l }),
                    (0, i.jsx)(j.E, { variant: "text-sm/medium", color: "text-subtle", children: s }),
                ],
            }),
            null != r && (0, i.jsx)(j.E, { variant: "text-xs/medium", color: "text-muted", children: r }),
        ],
    });
}
function eC(e) {
    let { game: t, notched: l } = e;
    return (0, i.jsx)("span", {
        className: eb.rO,
        "aria-hidden": !0,
        children: (0, i.jsx)(eu.Ay, {
            mask: l ? eu.l8[24] : eu.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null != t.iconUrl
                    ? (0, i.jsx)("img", { className: eb.Gt, src: t.iconUrl, alt: "", "aria-hidden": !0 })
                    : (0, i.jsx)("span", {
                          className: eb.ct,
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
        className: eb.Nw,
        children: [
            n.map((e, t) => (0, i.jsx)(eC, { game: e, notched: a > 0 || t !== n.length - 1 }, `${e.id}-${t}`)),
            a > 0
                ? (0, i.jsx)("span", {
                      className: eb.rO,
                      children: (0, i.jsx)(eu.Ay, {
                          mask: eu.Ay.Masks.SQUIRCLE,
                          width: 24,
                          height: 24,
                          children: (0, i.jsx)("div", {
                              className: eb.p0,
                              children: (0, i.jsx)(j.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-subtle",
                                  children: v.intl.formatToPlainString(J.default.JiMMEd, { count: a }),
                              }),
                          }),
                      }),
                  })
                : null,
        ],
    });
}
function ek(e) {
    let { played: t, totalCount: l, children: n } = e;
    return (0, i.jsx)(eo.u, {
        body:
            0 === t.length
                ? v.intl.string(J.default["7CrlYb"])
                : 1 === t.length
                  ? v.intl.formatToPlainString(J.default.dbNpK0, { firstGame: t[0].name })
                  : 2 === t.length && 2 === l
                    ? v.intl.formatToPlainString(J.default.tqVg4M, { firstGame: t[0].name, secondGame: t[1].name })
                    : v.intl.formatToPlainString(J.default.bxcrSz, {
                          firstGame: t[0].name,
                          secondGame: t[1].name,
                          otherCount: l - 2,
                      }),
        asset: t.length > 0 ? (0, i.jsx)(eT, { played: t, totalCount: t.length }) : void 0,
        assetSize: t.length > 1 ? 43 : 24,
        children: n,
    });
}
function eR(e) {
    let { name: t, applicationIds: l, applicationCount: n, games: a, onClick: s } = e,
        r = ep(a, l);
    return (0, i.jsx)("div", {
        className: eb.ag,
        children: (0, i.jsx)(ek, {
            played: r,
            totalCount: n,
            children: (0, i.jsx)(S.D, {
                className: A()(eb.Nw, eb.Dz),
                "aria-label": v.intl.formatToPlainString(J.default.o6mBdl, { name: t }),
                onClick: s,
                children: (0, i.jsx)(eT, { played: r, totalCount: n }),
            }),
        }),
    });
}
var ew = l(189043);
function eD(e) {
    let { guildId: t, entries: l, stat: n, games: a, currentUserEntry: s, currentUserPillarRef: r, onClick: d } = e,
        c = {
            1: { column: ew.HC, pillar: ew.P5 },
            2: { column: ew.th, pillar: ew.Vk },
            3: { column: ew.Ou, pillar: ew.el },
        };
    return (0, i.jsx)("div", {
        className: ew.pI,
        role: "list",
        "aria-label": v.intl.string(J.default.wKXLfQ),
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
        g = 1 === n ? k._3.SIZE_48 : k._3.SIZE_40,
        v = a.useRef(null),
        p = A()(ew.dR, { [ew.m$]: 1 === n, [ew.wd]: 2 === n, [ew.p0]: 3 === n }),
        _ = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: ew.R3,
                    children: [
                        (0, i.jsx)(T.eu, {
                            size: g,
                            src: h.user?.getAvatarURL(t, (0, k.FT)(g)) ?? void 0,
                            "aria-hidden": !0,
                        }),
                        (0, i.jsx)("div", { className: p }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: A()(ew.DX, r),
                    children: [
                        (0, i.jsx)(R.D, {
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            lineClamp: 1,
                            className: ew.IY,
                            children: (0, i.jsx)(w.g, {
                                name: h.displayName,
                                colorString: h.member?.colorString ?? null,
                                colorStrings: h.roleColorStrings,
                            }),
                        }),
                        (0, i.jsx)(ek, {
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
                ? (0, i.jsx)(el.A, {
                      targetElementRef: v,
                      user: h.user,
                      guildId: t,
                      children: (e) =>
                          (0, i.jsx)(S.D, {
                              ...e,
                              className: ew.fs,
                              innerRef: v,
                              onClick: (t) => {
                                  (m?.(), e.onClick(t));
                              },
                              children: _,
                          }),
                  })
                : (0, i.jsx)("div", { className: ew.fs, children: _ }),
    });
}
var eL = l(652215),
    eU = l(219047);
function eP(e) {
    let t,
        l,
        n,
        { guildId: s, data: r, inModal: d = !1 } = e,
        { stat: c, entries: o } = r,
        u = (0, N.bG)([O.default], () => O.default.getCurrentUser()?.id),
        m = a.useMemo(() => o.find((e) => e.user_id === u), [o, u]),
        h = a.useMemo(() => {
            let e = o.slice(0, 20);
            return null == m || e.includes(m) ? e : [...e, m];
        }, [o, m]),
        f = a.useMemo(() => Array.from(new Set(h.map((e) => e.user_id))), [h]);
    (0, M.k6)(s, f);
    let g =
            ((t = a.useMemo(() => Array.from(new Set(h.flatMap((e) => e.application_ids))), [h])),
            (l = (0, ef.A)(t)),
            (n = (0, N.yK)([eh.A], () => t.map((e) => eh.A.didFetchingApplicationFail(e)))),
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
        j = Y(r),
        p = Q(r),
        E = "podium" === p,
        b = V({ expanded: d }),
        { scrollerRef: y, scrollerNode: C, userRowRef: T, floatingRowPosition: k, scrollToUserRow: R } = F();
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
                    x.default.track(eL.HAw.LEADERBOARD_END_IMPRESSION, {
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
        leaderboardView: b,
        scrollerNode: j ? null : C,
        isEmpty: j,
    });
    let w = null != k,
        D = a.useMemo(() => (E ? h.slice(3) : h), [E, h]),
        L = a.useMemo(() => {
            let e = null == m || D.includes(m) ? D : [...D, m];
            return e.length > 0 ? e : h;
        }, [D, m, h]),
        { metricMeasureRef: U, metricWidth: P } = (function () {
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
        G = a.useCallback(
            (e) => {
                x.default.track(eL.HAw.LEADERBOARD_CLICK, {
                    location: e,
                    guild_id: s,
                    leaderboard_state: p,
                    leaderboard_view: b,
                });
            },
            [s, p, b],
        ),
        B = null == m && null != u,
        W = a.useCallback(
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
                        shouldDimForCurrentUser: t && w,
                        rowRef: t ? T : void 0,
                        onClick: () => G("row"),
                        metricWidth: P ?? void 0,
                    },
                    `${e.rank}-${e.user_id}`,
                );
            },
            [w, m, g, s, c, T, G, P],
        );
    if (j)
        return (0, i.jsx)("div", {
            className: eU.Cm,
            children: (0, i.jsx)(et, { guildId: s, onActivitySharingClick: () => G("activity_sharing") }),
        });
    let z = [h[0], h[1], h[2]],
        H = (0, i.jsx)("div", {
            ref: U,
            className: eU.V$,
            "aria-hidden": !0,
            children: L.map((e) => (0, i.jsx)(ey, { entry: e, stat: c }, e.user_id)),
        });
    return null == P
        ? (0, i.jsxs)("div", { className: eU.rf, children: [H, (0, i.jsx)(_, {})] })
        : (0, i.jsxs)("div", {
              className: eU.rf,
              children: [
                  H,
                  (0, i.jsxs)("div", {
                      className: eU.SY,
                      children: [
                          (0, i.jsxs)(I.d_, {
                              className: A()(eU.p_, { [eU.zE]: d, [eU.Ng]: B }),
                              ref: y,
                              children: [
                                  E &&
                                      (0, i.jsx)(eD, {
                                          guildId: s,
                                          entries: z,
                                          stat: c,
                                          games: g,
                                          currentUserEntry: m,
                                          currentUserPillarRef: T,
                                          onClick: () => G("podium"),
                                      }),
                                  D.map(W),
                              ],
                          }),
                          (null != m && null != k) || B
                              ? (0, i.jsx)("div", { className: A()(eU.Dz, "top" !== k || B ? eU.qV : eU.gN) })
                              : null,
                          null != m &&
                              null != k &&
                              (0, i.jsx)(S.D, {
                                  className: A()(eU.z$, "top" === k ? eU.aG : eU.Ie),
                                  "aria-label": v.intl.string(J.default.d0Z8kd),
                                  onClick: R,
                                  children: (0, i.jsx)(eA, {
                                      guildId: s,
                                      entry: m,
                                      stat: c,
                                      games: g,
                                      isCurrentUser: !0,
                                      shouldDimForCurrentUser: !1,
                                      isFloating: !0,
                                      onClick: () => G("row"),
                                      metricWidth: P ?? void 0,
                                  }),
                              }),
                          B && (0, i.jsx)(eO, { guildId: s, onActivitySharingClick: () => G("activity_sharing") }),
                      ],
                  }),
                  (0, i.jsx)(eG, { computedAt: r.computed_at, inModal: d }),
              ],
          });
}
function eG(e) {
    let { computedAt: t, inModal: l } = e,
        n = (0, i.jsxs)("div", {
            className: eU.z8,
            children: [
                (0, i.jsx)(y.RefreshIcon, { size: "xxs", color: d.A.colors.ICON_SUBTLE, "aria-hidden": !0 }),
                (0, i.jsx)(j.E, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: v.intl.string(J.default["/nma+a"]),
                }),
            ],
        });
    return null == t
        ? (0, i.jsx)("div", { className: eU.qr, children: n })
        : (0, i.jsx)("div", {
              className: A()(eU.qr, { [eU.zE]: l }),
              tabIndex: 0,
              children: (0, i.jsx)(o.m, {
                  text: v.intl.formatToPlainString(J.default["1bt50t"], { timestamp: (0, B.mk)(new Date(t)) }),
                  position: "bottom",
                  children: n,
              }),
          });
}
function eO(e) {
    let { guildId: t, onActivitySharingClick: l } = e,
        n = U.tz.useSetting(),
        a = U.JG.useSetting(),
        s = (0, N.bG)([P.A], () => P.A.hasConsented(eL.YAq.PERSONALIZATION)),
        r = v.intl.string(J.default.toxuHd),
        d = !1;
    ((!n || a.includes(t)) && ((r = v.intl.string(J.default["8y885d"])), (d = !0)),
        s || ((r = v.intl.string(J.default.mTARYx)), (d = !0)));
    let c = (0, N.bG)([O.default], () => O.default.getCurrentUser()),
        o = W.Ay.useName(t, void 0, c),
        u = (0, N.bG)([G.Ay], () => G.Ay.getMember(t, c?.id ?? "")),
        m = (0, L.gn)(t, c?.id, u?.colorStrings ?? null);
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
                                  (0, i.jsx)(C.A, { children: v.intl.string(J.default["oHdW+u"]) }),
                                  (0, i.jsx)(j.E, {
                                      variant: "text-sm/semibold",
                                      color: "text-muted",
                                      "aria-hidden": !0,
                                      children: "?",
                                  }),
                              ],
                          }),
                          (0, i.jsx)(T.eu, {
                              size: k._3.SIZE_32,
                              src: c.getAvatarURL(t, (0, k.FT)(k._3.SIZE_32)) ?? void 0,
                              className: eU.SA,
                              "aria-hidden": !0,
                          }),
                          (0, i.jsxs)("div", {
                              className: eU.ko,
                              children: [
                                  (0, i.jsx)(R.D, {
                                      variant: "heading-sm/semibold",
                                      color: "text-default",
                                      lineClamp: 1,
                                      children: (0, i.jsx)(w.g, {
                                          name: o,
                                          colorString: u?.colorString ?? null,
                                          colorStrings: m,
                                      }),
                                  }),
                                  (0, i.jsx)("div", {
                                      className: eU.LF,
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
                          className: eU.rl,
                          children: (0, i.jsx)(D.$, {
                              variant: "secondary",
                              size: "sm",
                              text: v.intl.string(J.default.fMbgeZ),
                              onClick: () => {
                                  (l(), Z(t));
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
        l = (0, K.K)(t.stat),
        {
            ended: n,
            endDate: s,
            badgeLabel: r,
        } = (function (e) {
            let t = (e + q.A.Seconds.WEEK) * q.A.Millis.SECOND,
                [l, n] = a.useState(() => Date.now()),
                i = t - l,
                s = i <= 0,
                r = i - (Math.ceil(i / q.A.Millis.DAY) - 1) * q.A.Millis.DAY;
            return (
                (0, ex.A)(() => n(Date.now()), s ? null : r),
                a.useMemo(
                    () => ({
                        ended: s,
                        endDate: new Date(t),
                        badgeLabel: s
                            ? v.intl.string(J.default["J8r/7L"])
                            : v.intl.formatToPlainString(J.default["PuaR+2"], { days: Math.ceil(i / q.A.Millis.DAY) }),
                    }),
                    [s, t, i],
                )
            );
        })(t.week_start_ts),
        d = U.PZ.useSetting(),
        c = 2 > (0, B.m_)(s, new Date()) ? (0, B.mk)(s, !1, d) : (0, B.i$)(s, "L LT", d),
        o = n
            ? v.intl.format(J.default.kG9XmM, { endedAt: c, nextStatName: (0, K.K)(t.next_stat).name })
            : v.intl.format(J.default["X+VLqi"], { statQuestion: l.question, endsAt: c });
    return (0, i.jsx)(eo.u, {
        title: l.name,
        body: o,
        position: "top",
        children: (0, i.jsx)("div", {
            className: ez.q,
            tabIndex: 0,
            children: (0, i.jsx)(j.E, {
                variant: "text-xs/semibold",
                color: n ? "text-muted" : "text-brand",
                children: r,
            }),
        }),
    });
}
function eH(e) {
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
                eL.HAw.LEADERBOARD_HOVER,
                {
                    guild_id: n.guildId,
                    duration: Math.round(l) / 1e3,
                    leaderboard_state: Q(n.data),
                    leaderboard_view: V({ expanded: n.expanded }),
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
var eq = l(460614);
function eK(e) {
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
                    className: eq.wx,
                    children: [
                        (0, i.jsxs)("div", {
                            className: eq.LD,
                            children: [
                                (0, i.jsx)(c.TrophyIcon, {
                                    size: "xs",
                                    color: d.A.colors.ICON_SUBTLE,
                                    "aria-hidden": !0,
                                }),
                                (0, i.jsx)(R.D, { variant: "heading-sm/medium", className: eq.DD, children: $(l) }),
                                (0, i.jsx)(eF, { data: l }),
                            ],
                        }),
                        (0, i.jsx)(eW.s_, {}),
                    ],
                }),
                (0, i.jsx)("div", { className: eq.rf, children: (0, i.jsx)(eP, { guildId: t, data: l, inModal: !0 }) }),
            ],
        }),
    });
}
var eY = l(452027),
    e$ = l(103557),
    eQ = l(825484),
    eV = l(95477),
    eX = l(241326),
    eZ = l(683071),
    eJ = l(2553),
    e0 = l(405810),
    e1 = l(967198),
    e2 = l(488428),
    e3 = l(776231);
let e6 = (0, l(676279).cy)();
function e4(e, t, l) {
    let n = l.startsWith("a_"),
        i = n ? (e6 ? "webp" : "gif") : e6 ? "webp" : "jpg",
        { CDN_HOST: a, API_ENDPOINT: s } = window.GLOBAL_ENV,
        r = eL.Rsh.GUILD_SPACE_IMAGE_TEXT_WIDGET_IMAGE(e, t, l, i),
        d = null != a ? `https://${a}${r}` : location.protocol + s + r,
        c = { size: (0, e3.kr)(500 * (0, e3.mZ)()) };
    return (
        "jpg" === i && (c.quality = "lossless"), "webp" === i && n && (c.animated = !0), (d += `?${e2.stringify(c)}`)
    );
}
var e8 = l(868602),
    e7 = l(445187),
    e5 = l(650583),
    e9 = l(684343);
function te(e) {
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
                    case e5.dh.ARROW_RIGHT:
                    case e5.dh.ARROW_DOWN:
                        t = (a + 1) % i.length;
                        break;
                    case e5.dh.ARROW_LEFT:
                    case e5.dh.ARROW_UP:
                        t = (a - 1 + i.length) % i.length;
                        break;
                    case e5.dh.HOME:
                        t = 0;
                        break;
                    case e5.dh.END:
                        t = i.length - 1;
                        break;
                    default:
                        return;
                }
                (e.preventDefault(), i[t]?.focus());
            }
        }, []);
    return (0, i.jsx)("div", {
        className: e9.vR,
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
                    className: e9.Mf,
                    "aria-selected": t,
                    "aria-controls": s,
                    tabIndex: t ? 0 : -1,
                    onClick: () => d(e.id),
                    onKeyDown: c,
                    children: (0, i.jsx)(j.E, {
                        className: e9.Pf,
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
var tt = l(831544),
    tl = l(28863),
    tn = l(148166),
    ti = l(427209),
    ta = l(294454),
    ts = l(605810);
function tr(e) {
    let { target: t, tabIndex: n } = e;
    return (0, i.jsx)(o.m, {
        text: v.intl.string(v.t.RDE0Sc),
        ariaHidden: !0,
        children: (0, i.jsx)("button", {
            type: "button",
            className: ts.ql,
            tabIndex: n,
            "aria-label": v.intl.string(v.t.Ej3B3Y),
            onClick: () => {
                (0, X.openModalLazy)(
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
                    { stackingBehavior: "stack", modalKey: ta.aU },
                );
            },
            children: (0, i.jsx)(ti.A, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
        }),
    });
}
var td = l(272984);
function tc(e) {
    let { artist: t, itemProps: l } = e,
        n = null != t.artist_image_hash ? td.RQ.IMAGE(t.artist_image_hash) : null,
        s = a.useMemo(
            () => ({
                kind: "artist",
                shareUrl: td.RQ.WEB_OPEN(td.M0.ARTIST, t.artist_external_id),
                title: t.artist_name ?? t.artist_external_id,
                subtitle: null,
                imageUrl: n,
            }),
            [t.artist_external_id, t.artist_name, n],
        ),
        r = (0, i.jsx)(tn.R, { src: n, isCircular: !0, FallbackIcon: tt.MicrophoneIcon });
    return null == t.artist_name
        ? (0, i.jsx)("div", { className: ts.Nr, children: (0, i.jsx)("div", { ...l, className: ts.MT, children: r }) })
        : (0, i.jsxs)("div", {
              className: ts.Nr,
              children: [
                  (0, i.jsxs)(tl.Anchor, {
                      ...l,
                      className: ts.MT,
                      href: s.shareUrl,
                      useDefaultUnderlineStyles: !1,
                      children: [
                          r,
                          (0, i.jsx)("span", {
                              className: ts.Qq,
                              children: (0, i.jsx)(j.E, {
                                  className: ts.DD,
                                  tag: "span",
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  lineClamp: 2,
                                  children: t.artist_name,
                              }),
                          }),
                      ],
                  }),
                  (0, i.jsx)(tr, { target: s, tabIndex: l.tabIndex }),
              ],
          });
}
var to = l(872351),
    tu = l(708988),
    tm = l(104171),
    tx = l(628137);
let th = "none",
    tf = (e, t) => (0, i.jsx)(j.E, { tag: "span", variant: "text-sm/semibold", color: "text-default", children: e }, t);
function tg(e) {
    return e;
}
function tj(e) {
    return e?.direction ?? th;
}
function tv(e) {
    return v.intl.formatToPlainString(J.default["7X+3f8"], { count: e });
}
function tp(e) {
    let t = e?.plays_change_percent;
    if (null == t) return null;
    let l = Math.round(Math.abs(t));
    return 0 === l
        ? null
        : { direction: t > 0 ? "up" : "down", label: v.intl.formatToPlainString(J.default["h+LUpk"], { percent: l }) };
}
var t_ = l(633099);
function tE(e) {
    let { trend: t } = e,
        l = "up" === t.direction ? to.z : tu.M;
    return (0, i.jsxs)("span", {
        className: A()(t_.GW, { [t_.$J]: "up" === t.direction, [t_.KW]: "down" === t.direction }),
        children: [
            (0, i.jsx)(l, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
            (0, i.jsx)(j.E, { tag: "span", variant: "text-sm/medium", color: "none", children: t.label }),
        ],
    });
}
function tb(e) {
    var t;
    let { guildId: l, song: n } = e,
        s = a.useMemo(() => (n.facepile_user_ids ?? []).slice(0, 3), [n.facepile_user_ids]);
    (0, M.k6)(l, s);
    let r = (0, N.yK)([O.default], () => s.map((e) => O.default.getUser(e)), [s]),
        d = a.useMemo(() => r.filter((e) => null != e), [r]);
    if (0 === d.length) return null;
    let c = n.unique_listeners - d.length;
    return (0, i.jsx)("span", {
        className: t_.WM,
        role: "group",
        "aria-label":
            ((t = n.unique_listeners),
            v.intl.formatToPlainString(J.default.AzIhRB, { count: t, trend: th, countHook: tg })),
        children: (0, i.jsx)(tm.Ay, {
            users: d,
            guildId: l,
            size: tm.DN.SIZE_24,
            max: d.length,
            count: n.unique_listeners,
            hideMoreUsers: c <= 0,
            renderMoreUsers: () =>
                (0, i.jsx)("span", {
                    className: t_.ju,
                    children: (0, i.jsx)(j.E, {
                        tag: "span",
                        variant: "text-xs/semibold",
                        color: "text-subtle",
                        children: v.intl.formatToPlainString(J.default.bFIg0R, { count: c }),
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
              className: A()(t_.yp, { [t_.Fl]: t }),
              children: (0, i.jsxs)("div", {
                  className: t_.QD,
                  children: [
                      null != l && (0, i.jsx)(j.E, { variant: "text-md/semibold", color: "text-default", children: l }),
                      (0, i.jsxs)("div", {
                          className: t_._0,
                          children: [
                              null != n &&
                                  (0, i.jsx)(j.E, {
                                      tag: "span",
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: n,
                                  }),
                              null != a && (0, i.jsx)(tE, { trend: a }),
                          ],
                      }),
                  ],
              }),
          });
}
function tN(e) {
    var t;
    let { guildId: l, isCompact: n, canShowEmbed: a, song: s } = e,
        r = tp(s);
    return (0, i.jsxs)("div", {
        className: A()(t_.yp, { [t_.Fl]: n }),
        children: [
            a && (0, i.jsx)(tx.A, { className: t_.aF, resourceType: td.M0.TRACK, resourceId: s.track_external_id }),
            (0, i.jsxs)("div", {
                className: t_.QD,
                children: [
                    (0, i.jsx)(tb, { guildId: l, song: s }),
                    (0, i.jsxs)("div", {
                        className: t_._0,
                        children: [
                            (0, i.jsx)(j.E, {
                                tag: "span",
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children:
                                    ((t = s.plays),
                                    v.intl.format(J.default["7hHUIS"], { count: t, trend: tj(r), countHook: tf })),
                            }),
                            null != r && (0, i.jsx)(tE, { trend: r }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var tI = l(197935),
    tS = l(915734);
function ty(e) {
    let { label: t, items: l, isCompact: n, getItemKey: a, renderItem: s } = e;
    return (0, i.jsx)("div", {
        className: A()(tS.Dk, { [tS.yI]: n }),
        children: (0, i.jsx)(tI.A, {
            items: l,
            getItemKey: a,
            renderItem: s,
            gap: 8,
            edgeFade: 40,
            actionsClassName: tS.o1,
            "aria-label": t,
        }),
    });
}
var tC = (((n = {}).TOP_SONGS = "top_songs"), (n.TOP_ARTISTS = "top_artists"), (n.TOP_LISTENERS = "top_listeners"), n);
let tT = ["top_songs", "top_artists", "top_listeners"];
function tk(e) {
    switch (e) {
        case "top_songs":
            return v.intl.string(J.default.KgeEtx);
        case "top_artists":
            return v.intl.string(J.default.RYxWTS);
        case "top_listeners":
            return v.intl.string(J.default.KO73KB);
    }
}
function tR(e, t) {
    return `popular-music-tab-${e}-${t}`;
}
function tw(e) {
    return `popular-music-panel-${e}`;
}
var tD = l(742452);
function tM(e) {
    return e.artist_external_id;
}
function tL(e, t) {
    return (0, i.jsx)(tc, { artist: e, itemProps: t });
}
function tU(e) {
    var t, l;
    let n,
        a,
        s,
        { isCompact: r, data: d } = e;
    if (0 === d.ranked_artists.length) return null;
    let c = tp(d.summary);
    return (0, i.jsxs)("div", {
        className: tD.U,
        children: [
            (0, i.jsx)(ty, {
                label: tk(tC.TOP_ARTISTS),
                items: d.ranked_artists,
                isCompact: r,
                getItemKey: tM,
                renderItem: tL,
            }),
            (0, i.jsx)(tA, {
                isCompact: r,
                headline:
                    ((t = d.summary),
                    null == (n = t?.distinct_songs) || n < 1
                        ? null
                        : v.intl.formatToPlainString(J.default.W8etVA, { count: n })),
                detail:
                    ((l = d.summary),
                    (a = l?.listener_count),
                    (s = l?.distinct_artists),
                    null == a || a < 1 || null == s || s < 1
                        ? null
                        : v.intl.format(J.default.yGqf0D, {
                              memberCount: a,
                              artistCount: s,
                              trend: tj(c),
                              memberCountHook: tf,
                              artistCountHook: tf,
                          })),
                trend: c,
            }),
        ],
    });
}
var tP = l(109487),
    tG = l(279543);
function tO(e) {
    let { isCompact: t } = e;
    return (0, i.jsxs)("div", {
        className: tG.qr,
        children: [
            (0, i.jsxs)("div", {
                className: tG.Os,
                children: [
                    (0, i.jsx)("span", {
                        className: tG.Kk,
                        children: (0, i.jsx)(y.RefreshIcon, {
                            size: "xxs",
                            color: d.A.colors.ICON_SUBTLE,
                            "aria-hidden": !0,
                        }),
                    }),
                    (0, i.jsx)(j.E, {
                        className: tG.Pf,
                        tag: "span",
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: v.intl.string(J.default["3/DOFo"]),
                    }),
                ],
            }),
            (0, i.jsxs)(tl.Anchor, {
                className: tG.al,
                href: td.RQ.WEB_HOME,
                "aria-label": v.intl.string(J.default["jUr+wF"]),
                children: [
                    (0, i.jsx)("span", {
                        className: tG.Kk,
                        children: (0, i.jsx)(tP.L, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    }),
                    !t &&
                        (0, i.jsx)(j.E, {
                            className: tG.G2,
                            tag: "span",
                            variant: "text-xs/medium",
                            color: "none",
                            children: v.intl.string(J.default.ZdPp2q),
                        }),
                ],
            }),
        ],
    });
}
var tB = l(65154),
    tW = l(329177),
    tz = l(242226);
function tF(e) {
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
            ((t = (0, N.bG)([O.default], () => O.default.getUser(r), [r])),
            (l = (0, N.bG)([G.Ay], () => G.Ay.getMember(s, r), [s, r])),
            (n = (0, L.gn)(s, r, l?.colorStrings ?? null)),
            (a = W.Ay.useName(s, void 0, t)),
            {
                user: t,
                colorString: l?.colorString ?? null,
                roleColorStrings: n,
                displayName: m ? v.intl.formatToPlainString(J.default.subXXA, { name: a }) : a,
            }),
        { user: p } = g;
    return null == p
        ? null
        : (0, i.jsxs)("div", {
              ref: f,
              "aria-hidden": h,
              inert: h,
              className: A()(tz.nM, { [tz.Bh]: m && !h, [tz.lR]: x }),
              children: [
                  (0, i.jsx)(tH, { guildId: s, user: p, identity: g, rank: o, lastTrack: c?.last_track ?? null }),
                  null != c &&
                      (0, i.jsxs)("div", {
                          className: A()(tz.Mx, { [tz.dA]: u }),
                          children: [
                              (0, i.jsx)(tB.S, { size: "xxs", color: d.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                              (0, i.jsx)(j.E, {
                                  variant: "text-sm/medium",
                                  color: "text-strong",
                                  children: tv(c.plays),
                              }),
                          ],
                      }),
                  null != c &&
                      !u &&
                      (0, i.jsx)(t$, { artists: c.recent_artists ?? [], artistCount: c.artist_count ?? null }),
              ],
          });
}
function tH(e) {
    let { guildId: t, user: l, identity: n, rank: s, lastTrack: r } = e,
        d = a.useRef(null);
    return (0, i.jsx)(el.A, {
        targetElementRef: d,
        user: l,
        guildId: t,
        children: (e) =>
            (0, i.jsxs)(S.D, {
                ...e,
                innerRef: d,
                className: tz.D_,
                children: [
                    null != s &&
                        (0, i.jsx)(C.A, { children: v.intl.formatToPlainString(J.default.I4JiAQ, { rank: s }) }),
                    (0, i.jsxs)("span", {
                        className: tz.R3,
                        children: [
                            (0, i.jsx)(T.eu, {
                                size: k._3.SIZE_32,
                                src: l.getAvatarURL(t, (0, k.FT)(k._3.SIZE_32)) ?? void 0,
                                "aria-hidden": !0,
                            }),
                            1 === s &&
                                (0, i.jsx)("span", {
                                    className: tz.ie,
                                    "aria-hidden": !0,
                                    children: (0, i.jsx)(tW.CrownIcon, { size: "xxs", color: "currentColor" }),
                                }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tz.Dc,
                        children: [
                            (0, i.jsx)(R.D, {
                                variant: "heading-sm/semibold",
                                color: "text-default",
                                lineClamp: 1,
                                children: (0, i.jsx)(w.g, {
                                    name: n.displayName,
                                    colorString: n.colorString,
                                    colorStrings: n.roleColorStrings,
                                }),
                            }),
                            (0, i.jsx)(tK, { track: r }),
                        ],
                    }),
                ],
            }),
    });
}
function tq(e, t) {
    return (0, i.jsx)(j.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: e }, t);
}
function tK(e) {
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
                ? v.intl.format(J.default.QqaqBg, { trackTitle: l, artistName: n, highlightHook: tq })
                : v.intl.format(J.default.ZMJ8Mt, { trackTitle: l, highlightHook: tq }),
    });
}
function tY(e) {
    let { artist: t, notched: l } = e,
        [n, s] = a.useState(!1),
        r = null != t.artist_image_hash ? td.RQ.IMAGE(t.artist_image_hash) : null;
    return (0, i.jsx)("span", {
        className: tz.sG,
        children: (0, i.jsx)(eu.Ay, {
            mask: l ? eu.l8[24] : eu.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null == r || n
                    ? (0, i.jsx)("span", {
                          className: tz.Ql,
                          children: (0, i.jsx)(tt.MicrophoneIcon, { size: "xxs", color: d.A.colors.ICON_SUBTLE }),
                      })
                    : (0, i.jsx)("img", { className: tz.v2, src: r, alt: "", loading: "lazy", onError: () => s(!0) }),
        }),
    });
}
function t$(e) {
    let { artists: t, artistCount: l } = e,
        n = t.slice(0, 3),
        a = (l ?? t.length) - n.length;
    return (0, i.jsx)("div", {
        className: tz.Rh,
        "aria-hidden": !0,
        children:
            n.length > 0 &&
            (0, i.jsxs)("div", {
                className: tz.W$,
                children: [
                    n.map((e, t) =>
                        (0, i.jsx)(
                            tY,
                            { artist: e, notched: a > 0 || t !== n.length - 1 },
                            `${e.artist_external_id}-${e.artist_image_hash}`,
                        ),
                    ),
                    a > 0 &&
                        (0, i.jsx)("span", {
                            className: tz.sG,
                            children: (0, i.jsx)(eu.Ay, {
                                mask: eu.Ay.Masks.SQUIRCLE,
                                width: 24,
                                height: 24,
                                children: (0, i.jsx)("div", {
                                    className: tz.ag,
                                    children: (0, i.jsx)(j.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: v.intl.formatToPlainString(J.default.bFIg0R, { count: a }),
                                    }),
                                }),
                            }),
                        }),
                ],
            }),
    });
}
var tQ = l(897130);
function tV(e) {
    let { guildId: t, isCompact: l, data: n } = e,
        s = n.top_listeners,
        r = (0, N.bG)([O.default], () => O.default.getCurrentUser()?.id),
        d = s.findIndex((e) => e.user_id === r),
        c = -1 === d ? null : s[d],
        o = a.useMemo(() => s.map((e) => e.user_id), [s]);
    (0, M.k6)(t, o);
    let { scrollerRef: u, userRowRef: m, floatingRowPosition: x } = F(),
        h = null != x;
    return 0 === s.length
        ? null
        : (0, i.jsxs)("div", {
              className: tQ.SY,
              children: [
                  (0, i.jsxs)(I.d_, {
                      className: tQ.p_,
                      ref: u,
                      children: [
                          s.map((e, n) => {
                              let a = e.user_id === r;
                              return (0, i.jsx)(
                                  tF,
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
                              (0, i.jsx)(tF, {
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
                              (0, i.jsx)("div", { className: "top" === x ? tQ.gN : tQ.qV }),
                              (0, i.jsx)("div", {
                                  className: A()(tQ.z$, "top" === x ? tQ.aG : tQ.Ie),
                                  children: (0, i.jsx)(tF, {
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
var tX = l(432017),
    tZ = l(362704),
    tJ = l(782134);
function t0(e) {
    let { song: t, isSelected: l, onSelect: n, itemProps: s } = e,
        r = null != t.cover_art_hash ? td.RQ.IMAGE(t.cover_art_hash) : null,
        d = a.useMemo(
            () => ({
                kind: "song",
                shareUrl: td.RQ.WEB_OPEN(td.M0.TRACK, t.track_external_id),
                title: t.track_title ?? t.track_external_id,
                subtitle: t.artist_name,
                imageUrl: r,
            }),
            [t.track_external_id, t.track_title, t.artist_name, r],
        );
    return (0, i.jsxs)("div", {
        className: ts.Nr,
        children: [
            (0, i.jsxs)("button", {
                ...s,
                type: "button",
                className: A()(ts.MT, { [ts.tY]: l }),
                "aria-pressed": l,
                onClick: () => n(t.track_external_id),
                children: [
                    (0, i.jsxs)(tn.R, {
                        src: r,
                        isCircular: !1,
                        FallbackIcon: tX.T,
                        children: [
                            l &&
                                (0, i.jsx)("span", {
                                    className: A()(ts.Lw, ts.Kp),
                                    "aria-hidden": !0,
                                    children: (0, i.jsx)(tZ.Y, { size: "md", color: "currentColor" }),
                                }),
                            (0, i.jsxs)("span", {
                                className: A()(ts.Lw, ts.vY),
                                children: [
                                    (0, i.jsx)(tJ.PlayIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                                    (0, i.jsx)(j.E, {
                                        tag: "span",
                                        variant: "text-xs/semibold",
                                        color: "none",
                                        children: tv(t.plays),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    null != t.track_title &&
                        (0, i.jsxs)("span", {
                            className: ts.Qq,
                            children: [
                                (0, i.jsx)(j.E, {
                                    className: ts.DD,
                                    tag: "span",
                                    variant: "text-sm/semibold",
                                    color: "text-default",
                                    lineClamp: 1,
                                    children: t.track_title,
                                }),
                                null != t.artist_name &&
                                    (0, i.jsx)(j.E, {
                                        className: ts.VA,
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
            (0, i.jsx)(tr, { target: d, tabIndex: s.tabIndex }),
        ],
    });
}
var t1 = l(196765),
    t2 = l(770178);
let t3 = { view: "top_songs", isCompact: !1, canShowEmbed: !1, selectedTrackId: null },
    t6 = (0, t1.v)(() => ({ byWidgetId: {} }));
function t4(e, t) {
    t6.setState((l) => {
        let n = l.byWidgetId[e] ?? t3;
        return { byWidgetId: { ...l.byWidgetId, [e]: { ...n, ...t } } };
    });
}
function t8(e) {
    return t6((t) => t.byWidgetId[e]?.view ?? t3.view);
}
function t7(e) {
    return t6((t) => t.byWidgetId[e]?.isCompact ?? t3.isCompact);
}
function t5(e) {
    return t6((t) => t.byWidgetId[e]?.selectedTrackId ?? t3.selectedTrackId);
}
function t9(e, t) {
    (t6.getState().byWidgetId[e] ?? t3).view !== t && t4(e, { view: t, selectedTrackId: null });
}
function le(e) {
    return e.track_external_id;
}
function lt(e) {
    var t;
    let l,
        { guildId: n, widgetId: s, isCompact: r, data: d } = e,
        c = t5(s),
        o = t6((e) => e.byWidgetId[s]?.canShowEmbed ?? t3.canShowEmbed),
        u = a.useCallback(
            (e) => {
                let t;
                return (
                    (t = t6.getState().byWidgetId[s]?.selectedTrackId ?? null),
                    void t4(s, { selectedTrackId: t === e ? null : e })
                );
            },
            [s],
        ),
        m = a.useCallback(
            (e, t) => (0, i.jsx)(t0, { song: e, isSelected: e.track_external_id === c, onSelect: u, itemProps: t }),
            [c, u],
        );
    if (0 === d.ranked_songs.length) return null;
    let x = d.ranked_songs.find((e) => e.track_external_id === c) ?? null,
        h = tp(d.summary);
    return (0, i.jsxs)("div", {
        className: tD.U,
        children: [
            (0, i.jsx)(ty, {
                label: tk(tC.TOP_SONGS),
                items: d.ranked_songs,
                isCompact: r,
                getItemKey: le,
                renderItem: m,
            }),
            null != x
                ? (0, i.jsx)(tN, { guildId: n, isCompact: r, canShowEmbed: o, song: x })
                : (0, i.jsx)(tA, {
                      isCompact: r,
                      headline: (function (e) {
                          let t = e?.listening_time_ms;
                          if (null == t) return null;
                          let l = Math.round(t / q.A.Millis.MINUTE);
                          return l < 1 ? null : v.intl.formatToPlainString(J.default["+5b01q"], { minutes: l });
                      })(d.summary),
                      detail:
                          ((t = d.summary),
                          null == (l = t?.listener_count) || l < 1
                              ? null
                              : v.intl.format(J.default.AzIhRB, { count: l, trend: tj(h), countHook: tf })),
                      trend: h,
                  }),
        ],
    });
}
var ll = l(597601),
    ln = l(980707),
    li = l(477782),
    la = l(922016),
    ls = l(847374),
    lr = l(914173);
function ld(e) {
    let { navId: t, options: l, selectedId: n, label: a, onSelect: s, onClose: r } = e;
    return (0, i.jsx)(ln.W, {
        navId: t,
        "aria-label": a,
        onClose: r,
        onSelect: void 0,
        children: l.map((e) =>
            (0, i.jsx)(
                li.iD,
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
function lc(e) {
    let { navId: t, options: l, selectedId: n, menuLabel: s, triggerLabel: r, onSelect: c } = e,
        [o, u] = a.useState(!1),
        m = a.useRef(null),
        x = l.find((e) => e.id === n);
    return null == x
        ? null
        : (0, i.jsx)(la.Y, {
              targetElementRef: m,
              position: "bottom",
              align: "left",
              shouldShow: o,
              onRequestOpen: () => u(!0),
              onRequestClose: () => u(!1),
              renderPopout: (e) => {
                  let { closePopout: a } = e;
                  return (0, i.jsx)(ld, { navId: t, options: l, selectedId: n, label: s, onSelect: c, onClose: a });
              },
              children: (e) =>
                  (0, i.jsx)(R.D, {
                      variant: "heading-sm/medium",
                      className: lr.R_,
                      children: (0, i.jsxs)("button", {
                          ...e,
                          ref: m,
                          type: "button",
                          className: lr.hZ,
                          "aria-haspopup": "menu",
                          "aria-label": r,
                          children: [
                              null != x.icon && (0, i.jsx)("span", { className: lr.Kk, children: x.icon }),
                              (0, i.jsx)(j.E, {
                                  className: lr.DD,
                                  tag: "span",
                                  variant: "heading-sm/medium",
                                  color: "text-default",
                                  children: x.label,
                              }),
                              (0, i.jsx)("span", {
                                  className: lr.Kk,
                                  children: (0, i.jsx)(ls.a, {
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
var lo = l(871107);
function lu(e) {
    let { view: t } = e,
        l = d.A.colors.ICON_DEFAULT;
    switch (t) {
        case tC.TOP_ARTISTS:
            return (0, i.jsx)(tt.MicrophoneIcon, { size: "xs", color: l, "aria-hidden": !0 });
        case tC.TOP_LISTENERS:
            return (0, i.jsx)(ll.L, { size: "xs", color: l, "aria-hidden": !0 });
        case tC.TOP_SONGS:
            return (0, i.jsx)(tX.T, { size: "xs", color: l, "aria-hidden": !0 });
    }
}
function lm(e) {
    let { widgetId: t, title: l } = e,
        n = t7(t),
        a = t8(t);
    if (!n)
        return (0, i.jsxs)("div", {
            className: lo.$,
            children: [
                (0, i.jsx)("span", {
                    className: lo.K,
                    children: (0, i.jsx)(tX.T, { size: "xs", color: d.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
                }),
                (0, i.jsx)(h.q, { children: l }),
            ],
        });
    let s = tT.map((e) => ({ id: e, label: tk(e), icon: (0, i.jsx)(lu, { view: e }) }));
    return (0, i.jsx)(lc, {
        navId: "popular-music-view",
        options: s,
        selectedId: a,
        menuLabel: v.intl.string(J.default.hFYyGU),
        triggerLabel: v.intl.formatToPlainString(J.default["/sw0JL"], { widgetName: l, viewName: tk(a) }),
        onSelect: (e) => t9(t, e),
    });
}
var lx = l(756936),
    lh = l(890497),
    lf = l(734057),
    lg = l(317525),
    lj = l(576705),
    lv = l(935208),
    lp = l(44167);
l(321073);
var l_ = l(485845),
    lE = l(136722),
    lb = l(435183),
    lA = l(155718),
    lN = l(795816),
    lI = l(933958),
    lS = l(574152),
    ly = l(627363),
    lC = l(712440),
    lT = l(733110),
    lk = l(488926),
    lR = l(818023);
async function lw(e) {
    null == eh.A.getApplication(lR.NW) && (await (0, ly.TA)(lR.NW));
    let t = lI.Ay.getEmbeddedActivitiesForChannel(e).every((e) => e.applicationId !== lR.NW);
    return await (0, lN.su)({
        channelId: e,
        applicationId: lR.NW,
        isStart: t,
        embeddedActivitiesManager: (0, lS.A)(),
        renderInFramePool: !0,
    });
}
async function lD(e) {
    let { channel: t, selectedRoleIds: l } = e,
        n = [];
    if (l.length > 0)
        for (let e of (n.push({ id: t.guild_id, type: lA.r2.ROLE, allow: lk.x3, deny: eL.xBc.USE_EMBEDDED_ACTIVITIES }),
        l))
            n.push({ id: e, type: lA.r2.ROLE, allow: eL.xBc.USE_EMBEDDED_ACTIVITIES, deny: lk.x3 });
    let i = await (0, lb.RT)(t.id, { permissionOverwrites: n });
    if (!i.ok) throw i;
}
let lM = [];
var lL = l(344351),
    lU = l(256693),
    lP = l(812901),
    lG = l(317608),
    lO = l(953538);
let lB = {
    [r.a.IMAGE_TEXT]: {
        View: function (e) {
            let { widget: t, guildSpaceMode: l, guildId: n } = e,
                { text: a, image_hash: s } = t.config,
                r = "edit" === l ? t.config.image : void 0,
                d = void 0 !== r ? r : null != s ? e4(n, t.id, s) : null;
            return (0, i.jsxs)("div", {
                className: e7.kL,
                children: [
                    null != d && (0, i.jsx)("img", { className: e7.Sl, src: d, alt: "" }),
                    null != a &&
                        (0, i.jsx)(j.E, {
                            variant: "text-md/normal",
                            color: "text-subtle",
                            className: e7.Qq,
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
                p = (0, N.bG)([e1.A], () => e1.A.getGuildId()),
                _ = void 0 !== h ? h : null != s.image_hash && null != p ? e4(p, t.id, s.image_hash) : null;
            return (0, i.jsxs)(H.B, {
                gap: 16,
                children: [
                    (0, i.jsx)(eV.k, {
                        label: v.intl.string(v.t.gnwWrx),
                        value: d,
                        onChange: function (e) {
                            (j(null), c(e));
                        },
                        maxLength: 100,
                        showCharacterCount: !0,
                    }),
                    (0, i.jsx)(eY.D, {
                        label: v.intl.string(v.t.X4IxWL),
                        children: (0, i.jsxs)(H.B, {
                            gap: 16,
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            className: e8.B,
                            children: [
                                (0, i.jsxs)(H.B, {
                                    gap: 8,
                                    direction: "horizontal",
                                    children: [
                                        (0, i.jsx)(e0.A, {
                                            variant: "secondary",
                                            text: v.intl.string(v.t["MsUY/S"]),
                                            onChange: function (e) {
                                                (j(null), f(e));
                                            },
                                            maxFileSizeBytes: 0xa00000,
                                            onFileSizeError: () => (0, eJ.A)(0xa00000),
                                        }),
                                        null != _ &&
                                            (0, i.jsx)(o.m, {
                                                text: v.intl.string(v.t.N86XcP),
                                                ariaHidden: !0,
                                                children: (0, i.jsx)(u.K, {
                                                    variant: "critical-secondary",
                                                    icon: eX.TrashIcon,
                                                    onClick: function () {
                                                        (j(null), f(null));
                                                    },
                                                    "aria-label": v.intl.string(v.t.N86XcP),
                                                }),
                                            }),
                                    ],
                                }),
                                null != _ && (0, i.jsx)("img", { className: e8.V, src: _, alt: "" }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(e$.f, {
                        label: v.intl.string(v.t.COGMNC),
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
                            children: (0, i.jsx)(eZ.w, { type: "critical", children: g }),
                        }),
                    (0, i.jsxs)(eQ.e, {
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(D.$, { variant: "secondary", text: v.intl.string(v.t["ETE/oC"]), onClick: n }),
                            (0, i.jsx)(D.$, {
                                variant: "primary",
                                text: v.intl.string(v.t["R3BPH+"]),
                                onClick: function () {
                                    let e;
                                    if (
                                        ((e = void 0 !== h ? null !== h : null != s.image_hash),
                                        0 === m.length && !e && (j(v.intl.string(J.default.zleX9q)), 1))
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
                r = eH({
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
                          : (0, i.jsx)(eP, { guildId: n, data: l.data })),
                (0, i.jsx)("div", { ref: d, children: t })
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
            return t?.status !== "success" || Y(t.data) ? null : (0, i.jsx)(eF, { data: t.data });
        },
        HeaderActions: function (e) {
            let { hydration: t, guildId: l } = e,
                n = t?.status === "success" ? t.data : void 0;
            return null != n && Y(n)
                ? null
                : (0, i.jsx)(o.m, {
                      text: v.intl.string(v.t.dcl9MQ),
                      children: (0, i.jsx)(u.K, {
                          variant: "icon-only",
                          size: "sm",
                          icon: m._,
                          "aria-label": v.intl.string(v.t.dcl9MQ),
                          disabled: null == n,
                          onClick: function () {
                              null != n &&
                                  (x.default.track(eL.HAw.LEADERBOARD_CLICK, {
                                      location: "expand",
                                      guild_id: l,
                                      leaderboard_state: Q(n),
                                      leaderboard_view: V({ expanded: !1 }),
                                  }),
                                  (function (e) {
                                      let { guildId: t, data: l } = e,
                                          n = (e) => (0, i.jsx)(eK, { guildId: t, data: l, modalProps: e });
                                      (0, X.openModalLazy)(() => Promise.resolve(n), {
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
                            t4(t, { isCompact: l < 480, canShowEmbed: l >= 720 });
                        },
                        [t],
                    )),
                    (0, t2.g)(n, s, [t], { fireOnMount: !0 }),
                    a.useEffect(
                        () => () => {
                            t6.setState((e) => {
                                if (null == e.byWidgetId[t]) return e;
                                let l = { ...e.byWidgetId };
                                return (delete l[t], { byWidgetId: l });
                            });
                        },
                        [t],
                    ),
                    n),
                x = t7(c.id),
                h = t8(c.id),
                f = t5(c.id),
                g = !x && "view" === u,
                j =
                    o?.status === "success" && h !== tC.TOP_LISTENERS
                        ? ((l = o.data),
                          null ==
                          (r =
                              l.ranked_songs.find((e) => e.track_external_id === f && null != e.cover_art_hash)
                                  ?.cover_art_hash ??
                              l.ranked_songs.find((e) => null != e.cover_art_hash)?.cover_art_hash)
                              ? null
                              : td.RQ.IMAGE(r))
                        : null;
            return (0, i.jsxs)("div", {
                className: lx.rf,
                ref: m,
                children: [
                    null != j && (0, i.jsx)("img", { className: lx.G, src: j, alt: "", "aria-hidden": !0 }),
                    (0, i.jsx)("div", {
                        className: lx.Qs,
                        children: (0, i.jsx)("div", {
                            id: tw(c.id),
                            className: lx.nd,
                            role: g ? "tabpanel" : "group",
                            tabIndex: 0,
                            "aria-label": g ? void 0 : tk(h),
                            "aria-labelledby": g ? tR(c.id, h) : void 0,
                            children: (function () {
                                if (null == o || "idle" === o.status || "loading" === o.status)
                                    return (0, i.jsx)(_, {});
                                if ("error" === o.status) return (0, i.jsx)(E, {});
                                switch (h) {
                                    case tC.TOP_SONGS:
                                        return (0, i.jsx)(lt, {
                                            guildId: d,
                                            widgetId: c.id,
                                            isCompact: x,
                                            data: o.data,
                                        });
                                    case tC.TOP_ARTISTS:
                                        return (0, i.jsx)(tU, { isCompact: x, data: o.data });
                                    case tC.TOP_LISTENERS:
                                        return (0, i.jsx)(tV, { guildId: d, isCompact: x, data: o.data });
                                }
                            })(),
                        }),
                    }),
                    (0, i.jsx)(tO, { isCompact: x }),
                ],
            });
        },
        Title: function (e) {
            let { widget: t, guildSpaceMode: l } = e,
                n = t.default_title ?? v.intl.string(J.default["5xxUI2"]);
            return "edit" === l ? (0, i.jsx)(h.q, { children: n }) : (0, i.jsx)(lm, { widgetId: t.id, title: n });
        },
        ViewHeaderTrailing: function (e) {
            let { widget: t, title: l } = e,
                n = t7(t.id),
                a = t8(t.id);
            return n
                ? null
                : (0, i.jsx)(te, {
                      label: l,
                      tabs: tT.map((e) => ({ id: e, label: tk(e) })),
                      selectedId: a,
                      panelId: tw(t.id),
                      getTabId: (e) => tR(t.id, e),
                      onSelect: (e) => t9(t.id, e),
                  });
        },
    },
    [r.a.WHITEBOARD]: {
        View: function (e) {
            let t,
                l,
                n = (0, lp.n)(),
                r = (0, N.bG)(
                    [lf.A, lj.A],
                    () => {
                        let e = null != n ? lf.A.getChannel(n) : void 0;
                        return null != e && lj.A.can(eL.xBc.USE_EMBEDDED_ACTIVITIES, e);
                    },
                    [n],
                ),
                d = (0, N.bG)(
                    [lI.Ay],
                    () => {
                        let e = lI.Ay.getCurrentEmbeddedActivity();
                        return null == e ||
                            e.applicationId !== lR.NW ||
                            e.location.kind !== lL.T.GUILD_CHANNEL ||
                            e.location.channel_id !== n
                            ? null
                            : e;
                    },
                    [n],
                ),
                c = (0, N.bG)([lI.Ay], () => lI.Ay.isLaunchingActivity(), []),
                { authResolved: o, isAuthorized: u } =
                    ((t = (0, N.bG)(
                        [lT.default],
                        () => lT.default.getFetchStateForApplication(lR.NW) === lT.FetchState.FETCHED,
                        [],
                    )),
                    (l = (0, N.bG)(
                        [lT.default, eh.A],
                        () => {
                            let e = lT.default.getNewestTokenForApplication(lR.NW);
                            if (null == e) return !1;
                            let t = eh.A.getApplication(lR.NW),
                                l = t?.integrationTypesConfig?.[l_.b.USER_INSTALL]?.oauth2InstallParams?.scopes;
                            if (null == l) return !0;
                            let n = new Set(e.scopes);
                            return l.every((e) => n.has(e));
                        },
                        [],
                    )),
                    a.useEffect(() => {
                        (lT.default.getFetchStateForApplication(lR.NW) === lT.FetchState.NOT_FETCHED &&
                            lC.A.fetch([lR.NW]),
                            null == eh.A.getApplication(lR.NW) && (0, ly.TA)(lR.NW));
                    }, []),
                    { authResolved: t, isAuthorized: l }),
                m = a.useRef(!1);
            a.useEffect(() => {
                null == d && null != n && r && o && u && !m.current && ((m.current = !0), lw(n));
            }, [r, n, d, o, u]);
            let x = a.useCallback(() => {
                    null != n && ((m.current = !0), lw(n));
                }, [n]),
                h = null != n && o && !u;
            return null == n
                ? (0, i.jsx)(H.B, {
                      className: lO.kL,
                      align: "center",
                      justify: "center",
                      children: (0, i.jsx)(s, { alt: "", width: 200 }),
                  })
                : r
                  ? (0, i.jsxs)("div", {
                        className: lO.kL,
                        children: [
                            null != d &&
                                (0, i.jsx)(lG.A, {
                                    frameId: (0, lU.Ri)(d),
                                    level: lP.A.WithinAppContent,
                                    className: lO.t$,
                                }),
                            null == d &&
                                h &&
                                (0, i.jsx)("div", {
                                    className: lO.P5,
                                    children: (0, i.jsx)(D.$, {
                                        variant: "secondary",
                                        text: v.intl.string(J.default.PSuly6),
                                        loading: c,
                                        onClick: x,
                                    }),
                                }),
                        ],
                    })
                  : (0, i.jsx)("div", {
                        className: lO.kL,
                        children: (0, i.jsx)("div", {
                            className: lO.m0,
                            children: (0, i.jsx)(j.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: v.intl.string(J.default["nXc/MQ"]),
                            }),
                        }),
                    });
        },
        Edit: function (e) {
            let { cancel: t } = e,
                l = (0, N.bG)([e1.A], () => e1.A.getGuildId()),
                n = lv.default.castGuildIdAsEveryoneGuildRoleId(l),
                s = (0, lp.n)(),
                r = (0, N.bG)([lf.A], () => (null != s ? lf.A.getChannel(s) : void 0), [s]),
                d = (0, N.bG)([lj.A], () => null != r && lj.A.can(eL.xBc.MANAGE_ROLES, r), [r]),
                c = (0, N.bG)([lg.A], () => (null == l ? lM : lg.A.getSortedRoles(l).filter((e) => e.id !== n)), [
                    l,
                    n,
                ]),
                o = a.useMemo(() => {
                    let e;
                    return null != r
                        ? null != (e = r.permissionOverwrites[r.guild_id]) &&
                          lE.zy(e.deny, eL.xBc.USE_EMBEDDED_ACTIVITIES)
                            ? c
                                  .filter((e) => {
                                      let t = r.permissionOverwrites[e.id];
                                      return null != t && lE.zy(t.allow, eL.xBc.USE_EMBEDDED_ACTIVITIES);
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
                        (await lD({ channel: r, selectedRoleIds: j }), t());
                    } catch {
                        (h(!1), g(!0));
                    }
                }
            }
            return null == r
                ? null
                : (0, i.jsxs)(H.B, {
                      gap: 16,
                      children: [
                          (0, i.jsx)(lh.Z, {
                              selectionMode: "multiple",
                              label: v.intl.string(J.default.XXLbfv),
                              description: v.intl.string(J.default.XrpYIG),
                              placeholder: v.intl.string(J.default.pp6WeD),
                              options: p,
                              value: j,
                              onSelectionChange: function (e) {
                                  (g(!1), m(e));
                              },
                              disabled: !d || x,
                              fullWidth: !0,
                              wrapTags: !0,
                          }),
                          !d && (0, i.jsx)(eZ.w, { type: "warning", children: v.intl.string(J.default.UPLtlA) }),
                          f &&
                              (0, i.jsx)("div", {
                                  role: "alert",
                                  children: (0, i.jsx)(eZ.w, {
                                      type: "critical",
                                      children: v.intl.string(J.default.xyCJYs),
                                  }),
                              }),
                          (0, i.jsxs)(eQ.e, {
                              fullWidth: !0,
                              children: [
                                  (0, i.jsx)(D.$, {
                                      variant: "secondary",
                                      text: v.intl.string(v.t["ETE/oC"]),
                                      onClick: t,
                                      disabled: x,
                                  }),
                                  (0, i.jsx)(D.$, {
                                      variant: "primary",
                                      text: v.intl.string(v.t["R3BPH+"]),
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
