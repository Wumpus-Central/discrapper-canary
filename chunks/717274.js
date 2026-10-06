l.d(t, { m: () => l4 });
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
    f = l(503698),
    g = l.n(f),
    j = l(289873),
    v = l(738188),
    p = l(834730),
    _ = l(331322),
    A = l(297264),
    E = l(375708),
    N = l(448492);
function b() {
    return (0, i.jsx)("div", {
        className: N.w,
        children: (0, i.jsx)(j.y, { type: j.y.Type.SPINNING_CIRCLE, "aria-label": E.intl.string(E.t.ZTNur7) }),
    });
}
function I() {
    return (0, i.jsxs)("div", {
        className: N.w,
        role: "alert",
        children: [
            (0, i.jsx)(v.WarningIcon, { size: "md", color: "text-feedback-critical", "aria-hidden": !0 }),
            (0, i.jsx)(p.E, { variant: "text-sm/normal", color: "text-muted", children: E.intl.string(E.t.F8FvUy) }),
        ],
    });
}
function S(e) {
    let { className: t, title: l, body: n, action: a } = e;
    return (0, i.jsxs)(_.B, {
        className: g()(N.p, t),
        align: "center",
        justify: "center",
        gap: 16,
        padding: { top: 24, right: 16, bottom: 24, left: 16 },
        children: [
            (0, i.jsxs)(_.B, {
                align: "center",
                gap: 6,
                children: [
                    (0, i.jsx)(A.D, { variant: "heading-md/semibold", color: "text-default", children: l }),
                    (0, i.jsx)(p.E, { variant: "text-sm/medium", color: "text-subtle", children: n }),
                ],
            }),
            a,
        ],
    });
}
var C = l(17928),
    y = l(364522),
    T = l(939249),
    R = l(663417),
    k = l(140735),
    D = l(97808),
    w = l(778712),
    M = l(463930),
    L = l(821609),
    U = l(80682),
    G = l(287809),
    P = l(58703),
    O = l(848966);
function B(e) {
    let { position: t } = e;
    return (0, i.jsx)("div", { className: "top" === t ? O.oT : O.yf });
}
function W(e) {
    let { position: t, children: l } = e;
    return (0, i.jsx)("div", { className: "top" === t ? O.sU : O._u, children: l });
}
var z = l(606072),
    F = l(775602);
function H() {
    let [e, t] = a.useState(null),
        [l, n] = a.useState(null),
        [i, s] = a.useState("unknown"),
        r = (0, C.bG)([F.Ay], () => F.Ay.useReducedMotion);
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
var K = l(967144),
    Y = l(696451),
    q = l(562153),
    Q = l(61567);
function $(e, t) {
    let { showYouSuffix: l = !1, fallbackName: n } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = (0, C.bG)([G.default], () => G.default.getUser(t), [t]),
        a = (0, C.bG)([Y.Ay], () => Y.Ay.getMember(e, t), [e, t]),
        s = (0, K.gn)(e, t, a?.colorStrings ?? null),
        r = q.Ay.useName(e, void 0, i),
        d = null == i && null != n ? n : r;
    return {
        user: i,
        member: a,
        roleColorStrings: s,
        name: d,
        displayName: l ? E.intl.formatToPlainString(Q.default.subXXA, { name: d }) : d,
    };
}
var X = l(885386),
    V = l(927813),
    Z = l(251812),
    J = l(518782);
function ee(e) {
    return e.entries.length < 3;
}
function et(e) {
    return (0, Z.K)(ee(e) ? void 0 : e.stat).name;
}
function el(e) {
    let t;
    return ee(e)
        ? "empty_state"
        : null != (t = e.computed_at) && new Date(t).getTime() - e.week_start_ts * V.A.Millis.SECOND >= V.A.Millis.WEEK
          ? "podium"
          : "in_progress";
}
function en(e) {
    let { expanded: t, column: l } = e;
    return t ? "expanded" : 1 === l ? "mini" : "regular";
}
function ei(e) {
    switch (e) {
        case J.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            return "hours_played";
        case J.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return "days_played";
        case J.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return "unique_games_played";
        default:
            return null;
    }
}
l(754674);
var ea = l(192308);
function es(e) {
    (0, ea.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([
                l.e("120239"),
                l.e("955410"),
                l.e("132502"),
                l.e("230029"),
                l.e("488926"),
                l.e("452467"),
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
var er = l(823353);
function ed(e) {
    let { guildId: t, onActivitySharingClick: l } = e,
        n = X.tz.useSetting(),
        a = X.JG.useSetting().includes(t),
        s = !n || a;
    return (0, i.jsx)(S, {
        className: er.w,
        title: E.intl.string(Q.default.ULK65a),
        body: E.intl.format(s ? Q.default.ueza5l : Q.default["81PK67"], { memberCount: 3 }),
        action: s
            ? (0, i.jsx)(L.$, {
                  variant: "secondary",
                  size: "sm",
                  text: E.intl.string(Q.default.fMbgeZ),
                  onClick: () => {
                      (l(), es(t));
                  },
              })
            : null,
    });
}
var ec = l(342296);
function eo(e) {
    let t = Math.floor(Math.max(e, 0) / V.A.Seconds.MINUTE),
        l = Math.floor(t / V.A.Minutes.HOUR),
        n = t % V.A.Minutes.HOUR;
    return 0 === l
        ? E.intl.formatToPlainString(Q.default.DdzvGL, { minutes: n })
        : E.intl.formatToPlainString(Q.default["6Y8H0A"], { hours: l, minutes: n });
}
function eu(e, t) {
    switch (t) {
        case J.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return {
                primary: E.intl.formatToPlainString(E.t["k2UNz+"], { days: e.value }),
                secondary: eo(e.time_played_seconds),
            };
        case J.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return {
                primary: E.intl.formatToPlainString(Q.default.rgpc8E, { count: e.value }),
                secondary: eo(e.time_played_seconds),
            };
        case J.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            let l, n, i;
            return {
                primary:
                    ((n = Math.floor((l = Math.floor(Math.max(e.value, 0) / V.A.Millis.MINUTE)) / V.A.Minutes.HOUR)),
                    (i = l % V.A.Minutes.HOUR),
                    0 === n
                        ? E.intl.formatToPlainString(Q.default.bgQf2H, { minutes: i })
                        : 0 === i
                          ? E.intl.formatToPlainString(Q.default["D/HToK"], { hours: n })
                          : E.intl.formatToPlainString(Q.default.fvtrHn, { hours: n, minutes: i })),
            };
        default:
            return { primary: "\u2014" };
    }
}
var em = l(81466),
    ex = l(406810),
    eh = l(687966),
    ef = l(109112),
    eg = l(683063),
    ej = l(573435),
    ev = l(402860),
    ep = l(396583),
    e_ = l(587895),
    eA = l(429913),
    eE = l(280450);
function eN(e, t) {
    return { id: e, name: E.intl.string(Q.default.rhDbuQ), iconUrl: void 0, isLoading: t };
}
function eb(e, t) {
    return e.get(t) ?? eN(t, !1);
}
function eI(e, t) {
    return t.map((t) => eb(e, t));
}
function eS(e, t) {
    let l = t.user_id,
        n = (0, C.bG)([eE.default], () => eE.default.getId() === l, [l]);
    return $(e, l, { showYouSuffix: n, fallbackName: t.name });
}
var eC = l(518477),
    ey = l(870087);
function eT(e) {
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
        x = eS(t, l),
        h = l.application_ids[0],
        f = null != h ? eb(s, h) : void 0,
        j = l.user_id,
        v = a.useCallback(() => {
            (u?.(),
                (0, ev.openUserProfileModal)({
                    userId: j,
                    guildId: t,
                    tabSection: eC.RP.ACTIVITY,
                    scrollTarget: eC.bk.RECENT_ACTIVITY,
                }));
        }, [u, j, t]);
    return (0, i.jsxs)("div", {
        ref: o,
        "aria-hidden": c,
        inert: c,
        className: g()(ey.nM, { [ey.Bh]: r && !c, [ey.lR]: d }),
        children: [
            (0, i.jsx)(eR, { guildId: t, entry: l, identity: x, lastPlayedGame: f, onClick: u }),
            (0, i.jsx)(ew, { entry: l, stat: n, width: m, onClick: v }),
            (0, i.jsx)(eG, {
                name: x.name,
                applicationIds: l.application_ids,
                applicationCount: l.application_count,
                games: s,
                onClick: v,
            }),
        ],
    });
}
function eR(e) {
    let { guildId: t, entry: l, identity: n, lastPlayedGame: s, onClick: r } = e,
        d = a.useRef(null),
        c = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(ek, { rank: l.rank }),
                (0, i.jsx)(D.eu, {
                    size: w._3.SIZE_32,
                    src: n.user?.getAvatarURL(t, (0, w.FT)(w._3.SIZE_32)) ?? void 0,
                    className: ey.my,
                    "aria-hidden": !0,
                }),
                (0, i.jsxs)("div", {
                    className: ey.Dc,
                    children: [
                        (0, i.jsx)(A.D, {
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            lineClamp: 1,
                            children: (0, i.jsx)(M.g, {
                                name: n.displayName,
                                colorString: n.member?.colorString ?? null,
                                colorStrings: n.roleColorStrings,
                            }),
                        }),
                        null != s &&
                            (0, i.jsx)(p.E, {
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                lineClamp: 1,
                                children: E.intl.formatToPlainString(Q.default.YuNVPY, { gameName: s.name }),
                            }),
                    ],
                }),
            ],
        });
    return null == n.user
        ? (0, i.jsx)("div", { className: ey.D_, children: c })
        : (0, i.jsx)(ec.A, {
              targetElementRef: d,
              user: n.user,
              guildId: t,
              children: (e) =>
                  (0, i.jsx)(T.D, {
                      ...e,
                      innerRef: d,
                      className: g()(ey.D_, ey.FB),
                      onClick: (t) => {
                          (r?.(), e.onClick(t));
                      },
                      children: c,
                  }),
          });
}
function ek(e) {
    let { rank: t } = e,
        l = E.intl.formatToPlainString(Q.default.I4JiAQ, { rank: t });
    switch (t) {
        case 1:
            return (0, i.jsx)("div", {
                className: ey.Tm,
                "aria-label": l,
                children: (0, i.jsx)("div", { className: ey.Xe }),
            });
        case 2:
            return (0, i.jsx)("div", {
                className: ey.Tm,
                "aria-label": l,
                children: (0, i.jsx)("div", { className: ey.XQ }),
            });
        case 3:
            return (0, i.jsx)("div", {
                className: ey.Tm,
                "aria-label": l,
                children: (0, i.jsx)("div", { className: ey.c9 }),
            });
        default:
            return (0, i.jsxs)("div", {
                className: ey.mH,
                children: [
                    (0, i.jsx)(k.A, { children: l }),
                    (0, i.jsx)(p.E, {
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
function eD(e) {
    let { stat: t } = e;
    switch (t) {
        case J.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return (0, i.jsx)(em.CalendarIcon, { size: "xxs", color: d.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case J.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            return (0, i.jsx)(ex.ClockIcon, { size: "xxs", color: d.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case J.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return (0, i.jsx)(eh.GameControllerIcon, { size: "xxs", color: d.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        default:
            return null;
    }
}
function ew(e) {
    let { entry: t, stat: l, width: n, onClick: a } = e,
        { primary: s, secondary: r } = eu(t, l);
    return (0, i.jsxs)(T.D, {
        className: ey.TH,
        style: null != n ? { width: n } : void 0,
        "aria-label": E.intl.string(Q.default.o6mBdl),
        onClick: a,
        children: [
            (0, i.jsxs)("div", {
                className: ey.bf,
                children: [
                    (0, i.jsx)(eD, { stat: l }),
                    (0, i.jsx)(p.E, { variant: "text-sm/medium", color: "text-subtle", children: s }),
                ],
            }),
            null != r && (0, i.jsx)(p.E, { variant: "text-xs/medium", color: "text-muted", children: r }),
        ],
    });
}
function eM(e) {
    let { game: t, notched: l } = e;
    return (0, i.jsx)("span", {
        className: ey.rO,
        "aria-hidden": !0,
        children: (0, i.jsx)(ej.Ay, {
            mask: l ? ej.l8[24] : ej.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null != t.iconUrl
                    ? (0, i.jsx)("img", { className: ey.Gt, src: t.iconUrl, alt: "", "aria-hidden": !0 })
                    : (0, i.jsx)("span", {
                          className: ey.ct,
                          "aria-hidden": !0,
                          children: !t.isLoading && (0, i.jsx)(ef._, { size: "xxs", color: d.A.colors.ICON_SUBTLE }),
                      }),
        }),
    });
}
function eL(e) {
    let { played: t, totalCount: l } = e,
        n = t.slice(0, 2),
        a = l - n.length;
    return (0, i.jsxs)("div", {
        className: ey.Nw,
        children: [
            n.map((e, t) => (0, i.jsx)(eM, { game: e, notched: a > 0 || t !== n.length - 1 }, `${e.id}-${t}`)),
            a > 0
                ? (0, i.jsx)("span", {
                      className: ey.rO,
                      children: (0, i.jsx)(ej.Ay, {
                          mask: ej.Ay.Masks.SQUIRCLE,
                          width: 24,
                          height: 24,
                          children: (0, i.jsx)("div", {
                              className: ey.p0,
                              children: (0, i.jsx)(p.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-subtle",
                                  children: E.intl.formatToPlainString(Q.default.JiMMEd, { count: a }),
                              }),
                          }),
                      }),
                  })
                : null,
        ],
    });
}
function eU(e) {
    let { played: t, totalCount: l, children: n } = e;
    return (0, i.jsx)(eg.u, {
        body:
            0 === t.length
                ? E.intl.string(Q.default["7CrlYb"])
                : 1 === t.length
                  ? E.intl.formatToPlainString(Q.default.dbNpK0, { firstGame: t[0].name })
                  : 2 === t.length && 2 === l
                    ? E.intl.formatToPlainString(Q.default.tqVg4M, { firstGame: t[0].name, secondGame: t[1].name })
                    : E.intl.formatToPlainString(Q.default.bxcrSz, {
                          firstGame: t[0].name,
                          secondGame: t[1].name,
                          otherCount: l - 2,
                      }),
        asset: t.length > 0 ? (0, i.jsx)(eL, { played: t, totalCount: t.length }) : void 0,
        assetSize: t.length > 1 ? 43 : 24,
        children: n,
    });
}
function eG(e) {
    let { name: t, applicationIds: l, applicationCount: n, games: a, onClick: s } = e,
        r = eI(a, l);
    return (0, i.jsx)("div", {
        className: ey.ag,
        children: (0, i.jsx)(eU, {
            played: r,
            totalCount: n,
            children: (0, i.jsx)(T.D, {
                className: g()(ey.Nw, ey.Dz),
                "aria-label": E.intl.formatToPlainString(Q.default.o6mBdl, { name: t }),
                onClick: s,
                children: (0, i.jsx)(eL, { played: r, totalCount: n }),
            }),
        }),
    });
}
var eP = l(189043);
function eO(e) {
    let { guildId: t, entries: l, stat: n, games: a, currentUserEntry: s, currentUserPillarRef: r, onClick: d } = e,
        c = {
            1: { column: eP.HC, pillar: eP.P5 },
            2: { column: eP.th, pillar: eP.Vk },
            3: { column: eP.Ou, pillar: eP.el },
        };
    return (0, i.jsx)("div", {
        className: eP.pI,
        role: "list",
        "aria-label": E.intl.string(Q.default.wKXLfQ),
        children: l.map((e, l) =>
            (0, i.jsx)(
                eB,
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
function eB(e) {
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
        x = eI(c, l.application_ids),
        h = eS(t, l),
        { primary: f } = eu(l, d),
        j = 1 === n ? w._3.SIZE_48 : w._3.SIZE_40,
        v = a.useRef(null),
        _ = g()(eP.dR, { [eP.m$]: 1 === n, [eP.wd]: 2 === n, [eP.p0]: 3 === n }),
        E = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: eP.R3,
                    children: [
                        (0, i.jsx)(D.eu, {
                            size: j,
                            src: h.user?.getAvatarURL(t, (0, w.FT)(j)) ?? void 0,
                            "aria-hidden": !0,
                        }),
                        (0, i.jsx)("div", { className: _ }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: g()(eP.DX, r),
                    children: [
                        (0, i.jsx)(A.D, {
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            lineClamp: 1,
                            className: eP.IY,
                            children: (0, i.jsx)(M.g, {
                                name: h.displayName,
                                colorString: h.member?.colorString ?? null,
                                colorStrings: h.roleColorStrings,
                            }),
                        }),
                        (0, i.jsx)(eU, {
                            played: x,
                            totalCount: l.application_count,
                            children: (0, i.jsx)(p.E, {
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
                ? (0, i.jsx)(ec.A, {
                      targetElementRef: v,
                      user: h.user,
                      guildId: t,
                      children: (e) =>
                          (0, i.jsx)(T.D, {
                              ...e,
                              className: eP.fs,
                              innerRef: v,
                              onClick: (t) => {
                                  (m?.(), e.onClick(t));
                              },
                              children: E,
                          }),
                  })
                : (0, i.jsx)("div", { className: eP.fs, children: E }),
    });
}
var eW = l(652215),
    ez = l(219047);
function eF(e) {
    let t,
        l,
        n,
        { guildId: s, data: r, inModal: d = !1, column: c } = e,
        { stat: o, entries: u } = r,
        m = (0, C.bG)([G.default], () => G.default.getCurrentUser()?.id),
        h = a.useMemo(() => u.find((e) => e.user_id === m), [u, m]),
        f = a.useMemo(() => {
            let e = u.slice(0, 20);
            return null == h || e.includes(h) ? e : [...e, h];
        }, [u, h]),
        j = a.useMemo(() => Array.from(new Set(f.map((e) => e.user_id))), [f]);
    (0, U.k6)(s, j);
    let v =
            ((t = a.useMemo(() => Array.from(new Set(f.flatMap((e) => e.application_ids))), [f])),
            (l = (0, eA.A)(t)),
            (n = (0, C.yK)([e_.A], () => t.map((e) => e_.A.didFetchingApplicationFail(e)))),
            a.useMemo(() => {
                let e = new Map();
                return (
                    t.forEach((t, i) => {
                        let a = l[i];
                        e.set(
                            t,
                            null != a
                                ? { id: t, name: a.name, iconUrl: a.getIconURL(64) ?? void 0, isLoading: !1 }
                                : eN(t, !n[i]),
                        );
                    }),
                    e
                );
            }, [t, l, n])),
        p = ee(r),
        _ = el(r),
        A = "podium" === _,
        N = en({ expanded: d, column: c }),
        { scrollerRef: I, scrollerNode: S, userRowRef: R, floatingRowPosition: k, scrollToUserRow: D } = H(),
        w = ei(o);
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
                    x.default.track(eW.HAw.LEADERBOARD_END_IMPRESSION, {
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
        leaderboardLength: p ? 0 : f.length,
        leaderboardState: _,
        leaderboardView: N,
        metric: w,
        scrollerNode: p ? null : S,
        isEmpty: p,
    });
    let M = null != k,
        L = a.useMemo(() => (A ? f.slice(3) : f), [A, f]),
        P = a.useMemo(() => {
            let e = null == h || L.includes(h) ? L : [...L, h];
            return e.length > 0 ? e : f;
        }, [L, h, f]),
        { metricMeasureRef: O, metricWidth: z } = (function () {
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
        F = a.useCallback(
            (e) => {
                x.default.track(eW.HAw.LEADERBOARD_CLICK, {
                    location: e,
                    guild_id: s,
                    leaderboard_state: _,
                    leaderboard_view: N,
                    metric: w,
                });
            },
            [s, _, N, w],
        ),
        K = null == h && null != m,
        Y = a.useCallback(
            (e) => {
                let t = e === h;
                return (0, i.jsx)(
                    eT,
                    {
                        guildId: s,
                        entry: e,
                        stat: o,
                        games: v,
                        isCurrentUser: t,
                        shouldDimForCurrentUser: t && M,
                        rowRef: t ? R : void 0,
                        onClick: () => F("row"),
                        metricWidth: z ?? void 0,
                    },
                    `${e.rank}-${e.user_id}`,
                );
            },
            [M, h, v, s, o, R, F, z],
        );
    if (p)
        return (0, i.jsx)("div", {
            className: ez.Cm,
            children: (0, i.jsx)(ed, { guildId: s, onActivitySharingClick: () => F("activity_sharing") }),
        });
    let q = [f[0], f[1], f[2]],
        $ = (0, i.jsx)("div", {
            ref: O,
            className: ez.V$,
            "aria-hidden": !0,
            children: P.map((e) => (0, i.jsx)(ew, { entry: e, stat: o }, e.user_id)),
        });
    return null == z
        ? (0, i.jsxs)("div", { className: ez.rf, children: [$, (0, i.jsx)(b, {})] })
        : (0, i.jsxs)("div", {
              className: ez.rf,
              children: [
                  $,
                  (0, i.jsxs)("div", {
                      className: ez.SY,
                      children: [
                          (0, i.jsxs)(y.d_, {
                              className: g()(ez.p_, { [ez.zE]: d, [ez.Ng]: K }),
                              ref: I,
                              children: [
                                  A &&
                                      (0, i.jsx)(eO, {
                                          guildId: s,
                                          entries: q,
                                          stat: o,
                                          games: v,
                                          currentUserEntry: h,
                                          currentUserPillarRef: R,
                                          onClick: () => F("podium"),
                                      }),
                                  L.map(Y),
                              ],
                          }),
                          (null != h && null != k) || K
                              ? (0, i.jsx)(B, { position: "top" !== k || K ? "bottom" : "top" })
                              : null,
                          null != h &&
                              null != k &&
                              (0, i.jsx)(W, {
                                  position: k,
                                  children: (0, i.jsx)(T.D, {
                                      className: ez.Po,
                                      "aria-label": E.intl.string(Q.default.d0Z8kd),
                                      onClick: D,
                                      children: (0, i.jsx)(eT, {
                                          guildId: s,
                                          entry: h,
                                          stat: o,
                                          games: v,
                                          isCurrentUser: !0,
                                          shouldDimForCurrentUser: !1,
                                          isFloating: !0,
                                          onClick: () => F("row"),
                                          metricWidth: z ?? void 0,
                                      }),
                                  }),
                              }),
                          K && (0, i.jsx)(eK, { guildId: s, onActivitySharingClick: () => F("activity_sharing") }),
                      ],
                  }),
                  (0, i.jsx)(eH, { computedAt: r.computed_at, inModal: d }),
              ],
          });
}
function eH(e) {
    let { computedAt: t, inModal: l } = e,
        n = (0, i.jsxs)("div", {
            className: ez.z8,
            children: [
                (0, i.jsx)(R.RefreshIcon, { size: "xxs", color: d.A.colors.ICON_SUBTLE, "aria-hidden": !0 }),
                (0, i.jsx)(p.E, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: E.intl.string(Q.default["/nma+a"]),
                }),
            ],
        });
    return null == t
        ? (0, i.jsx)("div", { className: ez.qr, children: n })
        : (0, i.jsx)("div", {
              className: g()(ez.qr, { [ez.zE]: l }),
              tabIndex: 0,
              children: (0, i.jsx)(o.m, {
                  text: E.intl.formatToPlainString(Q.default["1bt50t"], { timestamp: (0, P.mk)(new Date(t)) }),
                  position: "bottom",
                  children: n,
              }),
          });
}
function eK(e) {
    let { guildId: t, onActivitySharingClick: l } = e,
        { isSharingActivity: n, isSharingActivityInGuild: a, hasPersonalizationConsent: s } = (0, z.T4)(t),
        r = E.intl.string(Q.default.toxuHd),
        d = !1;
    ((n && a) || ((r = E.intl.string(Q.default["8y885d"])), (d = !0)),
        s || ((r = E.intl.string(Q.default.mTARYx)), (d = !0)));
    let {
        user: c,
        member: o,
        name: u,
        roleColorStrings: m,
    } = $(
        t,
        (0, C.bG)([G.default], () => G.default.getCurrentUser()?.id ?? ""),
    );
    return null == c
        ? null
        : (0, i.jsxs)("div", {
              className: ez.Xx,
              children: [
                  (0, i.jsxs)("div", {
                      className: ez.kd,
                      children: [
                          (0, i.jsxs)("div", {
                              className: ez.nk,
                              children: [
                                  (0, i.jsx)(k.A, { children: E.intl.string(Q.default["oHdW+u"]) }),
                                  (0, i.jsx)(p.E, {
                                      variant: "text-sm/semibold",
                                      color: "text-muted",
                                      "aria-hidden": !0,
                                      children: "?",
                                  }),
                              ],
                          }),
                          (0, i.jsx)(D.eu, {
                              size: w._3.SIZE_32,
                              src: c.getAvatarURL(t, (0, w.FT)(w._3.SIZE_32)) ?? void 0,
                              className: ez.SA,
                              "aria-hidden": !0,
                          }),
                          (0, i.jsxs)("div", {
                              className: ez.ko,
                              children: [
                                  (0, i.jsx)(A.D, {
                                      variant: "heading-sm/semibold",
                                      color: "text-default",
                                      lineClamp: 1,
                                      children: (0, i.jsx)(M.g, {
                                          name: u,
                                          colorString: o?.colorString ?? null,
                                          colorStrings: m,
                                      }),
                                  }),
                                  (0, i.jsx)("div", {
                                      className: ez.LF,
                                      children: (0, i.jsx)(p.E, {
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
                          className: ez.rl,
                          children: (0, i.jsx)(L.$, {
                              variant: "secondary",
                              size: "sm",
                              text: E.intl.string(Q.default.fMbgeZ),
                              onClick: () => {
                                  (l(), es(t));
                              },
                          }),
                      }),
              ],
          });
}
var eY = l(224640),
    eq = l(20742),
    eQ = l(515746);
function e$(e) {
    let { data: t } = e,
        l = (0, Z.K)(t.stat),
        {
            ended: n,
            endDate: s,
            badgeLabel: r,
        } = (function (e) {
            let t = (e + V.A.Seconds.WEEK) * V.A.Millis.SECOND,
                [l, n] = a.useState(() => Date.now()),
                i = t - l,
                s = i <= 0,
                r = i - (Math.ceil(i / V.A.Millis.DAY) - 1) * V.A.Millis.DAY;
            return (
                (0, ep.A)(() => n(Date.now()), s ? null : r),
                a.useMemo(
                    () => ({
                        ended: s,
                        endDate: new Date(t),
                        badgeLabel: s
                            ? E.intl.string(Q.default["J8r/7L"])
                            : E.intl.formatToPlainString(Q.default["PuaR+2"], { days: Math.ceil(i / V.A.Millis.DAY) }),
                    }),
                    [s, t, i],
                )
            );
        })(t.week_start_ts),
        d = X.PZ.useSetting(),
        c = 2 > (0, P.m_)(s, new Date()) ? (0, P.mk)(s, !1, d) : (0, P.i$)(s, "L LT", d),
        o = n
            ? E.intl.format(Q.default.kG9XmM, { endedAt: c, nextStatName: (0, Z.K)(t.next_stat).name })
            : E.intl.format(Q.default["X+VLqi"], { statQuestion: l.question, endsAt: c });
    return (0, i.jsx)(eg.u, {
        title: l.name,
        body: o,
        position: "top",
        children: (0, i.jsx)("div", {
            className: eQ.q,
            tabIndex: 0,
            children: (0, i.jsx)(p.E, {
                variant: "text-xs/semibold",
                color: n ? "text-muted" : "text-brand",
                children: r,
            }),
        }),
    });
}
function eX(e) {
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
                eW.HAw.LEADERBOARD_HOVER,
                {
                    guild_id: n.guildId,
                    duration: Math.round(l) / 1e3,
                    leaderboard_state: el(n.data),
                    leaderboard_view: en({ expanded: n.expanded, column: n.column }),
                    metric: ei(n.data.stat),
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
var eV = l(460614);
function eZ(e) {
    let { guildId: t, data: l, modalProps: n } = e,
        a = eX({ guildId: t, data: l, expanded: !0 });
    return (0, i.jsx)(eY.d, {
        size: "lg",
        "aria-label": et(l),
        ...n,
        children: (0, i.jsxs)("div", {
            ref: a,
            children: [
                (0, i.jsxs)("div", {
                    className: eV.wx,
                    children: [
                        (0, i.jsxs)("div", {
                            className: eV.LD,
                            children: [
                                (0, i.jsx)(c.TrophyIcon, {
                                    size: "xs",
                                    color: d.A.colors.ICON_SUBTLE,
                                    "aria-hidden": !0,
                                }),
                                (0, i.jsx)(A.D, { variant: "heading-sm/medium", className: eV.DD, children: et(l) }),
                                (0, i.jsx)(e$, { data: l }),
                            ],
                        }),
                        (0, i.jsx)(eq.s_, {}),
                    ],
                }),
                (0, i.jsx)("div", { className: eV.rf, children: (0, i.jsx)(eF, { guildId: t, data: l, inModal: !0 }) }),
            ],
        }),
    });
}
var eJ = l(452027),
    e0 = l(103557),
    e1 = l(825484),
    e2 = l(95477),
    e6 = l(241326),
    e3 = l(683071),
    e4 = l(2553),
    e8 = l(405810),
    e7 = l(967198),
    e5 = l(488428),
    e9 = l(776231);
let te = (0, l(676279).cy)();
function tt(e, t, l) {
    let n = l.startsWith("a_"),
        i = n ? (te ? "webp" : "gif") : te ? "webp" : "jpg",
        { CDN_HOST: a, API_ENDPOINT: s } = window.GLOBAL_ENV,
        r = eW.Rsh.GUILD_SPACE_IMAGE_TEXT_WIDGET_IMAGE(e, t, l, i),
        d = null != a ? `https://${a}${r}` : location.protocol + s + r,
        c = { size: (0, e9.kr)(500 * (0, e9.mZ)()) };
    return (
        "jpg" === i && (c.quality = "lossless"), "webp" === i && n && (c.animated = !0), (d += `?${e5.stringify(c)}`)
    );
}
var tl = l(868602),
    tn = l(445187),
    ti = l(650583),
    ta = l(684343);
function ts(e) {
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
                    case ti.dh.ARROW_RIGHT:
                    case ti.dh.ARROW_DOWN:
                        t = (a + 1) % i.length;
                        break;
                    case ti.dh.ARROW_LEFT:
                    case ti.dh.ARROW_UP:
                        t = (a - 1 + i.length) % i.length;
                        break;
                    case ti.dh.HOME:
                        t = 0;
                        break;
                    case ti.dh.END:
                        t = i.length - 1;
                        break;
                    default:
                        return;
                }
                (e.preventDefault(), i[t]?.focus());
            }
        }, []);
    return (0, i.jsx)("div", {
        className: ta.vR,
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
                    className: ta.Mf,
                    "aria-selected": t,
                    "aria-controls": s,
                    tabIndex: t ? 0 : -1,
                    onClick: () => d(e.id),
                    onKeyDown: c,
                    children: (0, i.jsx)(p.E, {
                        className: ta.Pf,
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
var tr = l(831544),
    td = l(28863),
    tc = l(148166),
    to = l(427209),
    tu = l(294454),
    tm = l(605810);
function tx(e) {
    let { target: t, tabIndex: n } = e;
    return (0, i.jsx)("div", {
        className: tm.ql,
        children: (0, i.jsx)(o.m, {
            text: E.intl.string(E.t.RDE0Sc),
            ariaHidden: !0,
            children: (0, i.jsx)(u.K, {
                icon: to.A,
                size: "sm",
                variant: "overlay-secondary",
                tabIndex: n,
                "aria-label": E.intl.string(E.t.Ej3B3Y),
                onClick: () => {
                    (0, ea.openModalLazy)(
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
                                l.e("89530"),
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
                                l.e("452467"),
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
                                l.e("841136"),
                                l.e("560338"),
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
                                l.e("611523"),
                                l.e("707826"),
                                l.e("721690"),
                                l.e("199999"),
                                l.e("890027"),
                                l.e("536200"),
                                l.e("183776"),
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
                                l.e("756148"),
                                l.e("552712"),
                                l.e("829177"),
                                l.e("225990"),
                                l.e("539620"),
                                l.e("106943"),
                                l.e("133902"),
                                l.e("232551"),
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
                                l.e("534822"),
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
                                l.e("128534"),
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
                                l.e("329218"),
                                l.e("622825"),
                                l.e("681541"),
                                l.e("406357"),
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
                        { stackingBehavior: "stack", modalKey: tu.aU },
                    );
                },
            }),
        }),
    });
}
var th = l(272984);
function tf(e) {
    let { artist: t, itemProps: l } = e,
        n = null != t.artist_image_hash ? th.RQ.IMAGE(t.artist_image_hash) : null,
        s = a.useMemo(
            () => ({
                kind: "artist",
                shareUrl: th.RQ.WEB_OPEN(th.M0.ARTIST, t.artist_external_id),
                title: t.artist_name ?? t.artist_external_id,
                subtitle: null,
                imageUrl: n,
            }),
            [t.artist_external_id, t.artist_name, n],
        ),
        r = (0, i.jsx)(tc.R, { src: n, isCircular: !0, FallbackIcon: tr.MicrophoneIcon });
    return null == t.artist_name
        ? (0, i.jsx)("div", { className: tm.Nr, children: (0, i.jsx)("div", { ...l, className: tm.MT, children: r }) })
        : (0, i.jsxs)("div", {
              className: tm.Nr,
              children: [
                  (0, i.jsxs)(td.Anchor, {
                      ...l,
                      className: tm.MT,
                      href: s.shareUrl,
                      useDefaultUnderlineStyles: !1,
                      children: [
                          r,
                          (0, i.jsx)("span", {
                              className: tm.Qq,
                              children: (0, i.jsx)(p.E, {
                                  className: tm.DD,
                                  tag: "span",
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  lineClamp: 2,
                                  children: t.artist_name,
                              }),
                          }),
                      ],
                  }),
                  (0, i.jsx)(tx, { target: s, tabIndex: l.tabIndex }),
              ],
          });
}
var tg = l(872351),
    tj = l(708988),
    tv = l(104171),
    tp = l(628137);
let t_ = "none",
    tA = (e, t) => (0, i.jsx)(p.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: e }, t);
function tE(e) {
    return e;
}
function tN(e) {
    return e?.direction ?? t_;
}
function tb(e) {
    if (null == e) return null;
    let t = Math.round(Math.abs(e));
    return 0 === t
        ? null
        : { direction: e > 0 ? "up" : "down", label: E.intl.formatToPlainString(Q.default["h+LUpk"], { percent: t }) };
}
function tI(e) {
    return tb(null != e.plays_trend_pct ? 100 * e.plays_trend_pct : null);
}
var tS = l(633099);
function tC(e) {
    let { trend: t } = e,
        l = "up" === t.direction ? tg.z : tj.M;
    return (0, i.jsxs)("span", {
        className: tS.GW,
        children: [
            (0, i.jsx)(l, {
                className: g()({ [tS.$J]: "up" === t.direction, [tS.KW]: "down" === t.direction }),
                size: "xxs",
                color: "currentColor",
                "aria-hidden": !0,
            }),
            (0, i.jsx)(p.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: t.label }),
        ],
    });
}
function ty(e) {
    var t;
    let { guildId: l, song: n } = e,
        s = a.useMemo(() => (n.facepile_user_ids ?? []).slice(0, 3), [n.facepile_user_ids]);
    (0, U.k6)(l, s);
    let r = (0, C.yK)([G.default], () => s.map((e) => G.default.getUser(e)), [s]),
        d = a.useMemo(() => r.filter((e) => null != e), [r]);
    if (0 === d.length) return null;
    let c = n.unique_listeners - d.length;
    return (0, i.jsx)("span", {
        className: tS.WM,
        role: "group",
        "aria-label":
            ((t = n.unique_listeners),
            E.intl.formatToPlainString(Q.default.AzIhRB, { count: t, trend: t_, countHook: tE })),
        children: (0, i.jsx)(tv.Ay, {
            users: d,
            guildId: l,
            size: tv.DN.SIZE_24,
            max: d.length,
            count: n.unique_listeners,
            hideMoreUsers: c <= 0,
            renderMoreUsers: () =>
                (0, i.jsx)("span", {
                    className: tS.ju,
                    children: (0, i.jsx)(p.E, {
                        tag: "span",
                        variant: "text-sm/semibold",
                        color: "text-subtle",
                        children: E.intl.formatToPlainString(Q.default.bFIg0R, { count: c }),
                    }),
                }),
        }),
    });
}
function tT(e) {
    let { isCompact: t, headline: l, detail: n, trend: a } = e;
    return null == l && null == n && null == a
        ? null
        : (0, i.jsx)("div", {
              className: g()(tS.yp, { [tS.Fl]: t }),
              children: (0, i.jsxs)("div", {
                  className: tS.QD,
                  children: [
                      null != l &&
                          (0, i.jsx)(p.E, {
                              tag: "div",
                              variant: "heading-xl/semibold",
                              color: "text-default",
                              children: l,
                          }),
                      (0, i.jsxs)("div", {
                          className: tS._0,
                          children: [
                              null != n &&
                                  (0, i.jsx)(p.E, {
                                      tag: "span",
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: n,
                                  }),
                              null != a && (0, i.jsx)(tC, { trend: a }),
                          ],
                      }),
                  ],
              }),
          });
}
function tR(e) {
    var t;
    let { guildId: l, isCompact: n, canShowEmbed: a, song: s } = e,
        r = tb(s.plays_change_percent);
    return (0, i.jsxs)("div", {
        className: g()(tS.yp, { [tS.Fl]: n }),
        children: [
            a && (0, i.jsx)(tp.A, { className: tS.aF, resourceType: th.M0.TRACK, resourceId: s.track_external_id }),
            (0, i.jsxs)("div", {
                className: g()(tS.QD, tS.rk),
                children: [
                    (0, i.jsx)(ty, { guildId: l, song: s }),
                    (0, i.jsxs)("div", {
                        className: tS._0,
                        children: [
                            (0, i.jsx)(p.E, {
                                tag: "span",
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                children:
                                    ((t = s.plays),
                                    E.intl.format(Q.default["7hHUIS"], { count: t, trend: tN(r), countHook: tA })),
                            }),
                            null != r && (0, i.jsx)(tC, { trend: r }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var tk = l(197935),
    tD = l(915734);
function tw(e) {
    let { label: t, items: l, isCompact: n, getItemKey: a, renderItem: s } = e;
    return (0, i.jsx)("div", {
        className: g()(tD.Dk, { [tD.yI]: n }),
        children: (0, i.jsx)(tk.A, {
            items: l,
            getItemKey: a,
            renderItem: s,
            gap: 8,
            edgeFade: 40,
            actionsClassName: tD.o1,
            "aria-label": t,
        }),
    });
}
var tM = (((n = {}).TOP_SONGS = "top_songs"), (n.TOP_ARTISTS = "top_artists"), (n.TOP_LISTENERS = "top_listeners"), n);
let tL = ["top_songs", "top_artists", "top_listeners"];
function tU(e) {
    return 1 > e.ranked_songs.reduce((e, t) => e + t.plays, 0);
}
function tG(e) {
    switch (e) {
        case "top_songs":
            return E.intl.string(Q.default.KgeEtx);
        case "top_artists":
            return E.intl.string(Q.default.RYxWTS);
        case "top_listeners":
            return E.intl.string(Q.default.KO73KB);
    }
}
function tP(e, t) {
    return `popular-music-tab-${e}-${t}`;
}
function tO(e) {
    return `popular-music-panel-${e}`;
}
var tB = l(742452);
function tW(e) {
    return e.artist_external_id;
}
function tz(e, t) {
    return (0, i.jsx)(tf, { artist: e, itemProps: t });
}
function tF(e) {
    let { isCompact: t, data: l } = e;
    if (0 === l.ranked_artists.length) return null;
    let n = tI(l);
    return (0, i.jsxs)("div", {
        className: tB.U,
        children: [
            (0, i.jsx)(tw, {
                label: tG(tM.TOP_ARTISTS),
                items: l.ranked_artists,
                isCompact: t,
                getItemKey: tW,
                renderItem: tz,
            }),
            (0, i.jsx)(tT, {
                isCompact: t,
                headline:
                    l.distinct_songs < 1
                        ? null
                        : E.intl.formatToPlainString(Q.default.W8etVA, { count: l.distinct_songs }),
                detail:
                    l.distinct_listeners < 1 || l.distinct_artists < 1
                        ? null
                        : E.intl.format(Q.default.yGqf0D, {
                              memberCount: l.distinct_listeners,
                              artistCount: l.distinct_artists,
                              trend: tN(n),
                              memberCountHook: tA,
                              artistCountHook: tA,
                          }),
                trend: n,
            }),
        ],
    });
}
var tH = l(803613),
    tK = l(682348),
    tY = l(73152),
    tq = l(57129),
    tQ = l(280911);
function t$(e) {
    let { guildId: t, isCompact: l } = e,
        n = (0, C.bG)([G.default], () => G.default.getCurrentUser()),
        a = (0, C.bG)([Y.Ay], () => (null != n ? Y.Ay.getMember(t, n.id) : null)),
        s = (0, K.gn)(t, n?.id, a?.colorStrings ?? null),
        r = q.Ay.useName(t, void 0, n);
    return (0, i.jsxs)("div", {
        className: tQ.D_,
        children: [
            (0, i.jsxs)("div", {
                className: tQ.FI,
                "aria-hidden": !0,
                children: [
                    !l &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("span", { className: tQ.eu, children: (0, i.jsx)(tH.D, { size: "sm" }) }),
                                (0, i.jsxs)("span", {
                                    className: tQ.r$,
                                    children: [
                                        (0, i.jsx)("span", { className: tQ.Om }),
                                        (0, i.jsx)("span", { className: tQ.Om }),
                                        (0, i.jsx)("span", { className: tQ.Om }),
                                    ],
                                }),
                            ],
                        }),
                    (0, i.jsx)(D.eu, {
                        size: w._3.SIZE_32,
                        src: n?.getAvatarURL(t, (0, w.FT)(w._3.SIZE_32)) ?? void 0,
                        "aria-hidden": !0,
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: tQ.Qq,
                children: [
                    (0, i.jsx)(A.D, {
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        lineClamp: 1,
                        children: (0, i.jsx)(M.g, {
                            name: E.intl.formatToPlainString(Q.default.subXXA, { name: r }),
                            colorString: a?.colorString ?? null,
                            colorStrings: s,
                        }),
                    }),
                    (0, i.jsx)(p.E, {
                        variant: "text-xs/medium",
                        color: "text-strong",
                        lineClamp: l ? 2 : 1,
                        children: E.intl.string(Q.default.y1neEe),
                    }),
                ],
            }),
        ],
    });
}
function tX(e) {
    let { widgetName: t, isCompact: l } = e;
    return (0, i.jsxs)("div", {
        className: tQ.D_,
        children: [
            !l &&
                (0, i.jsx)("span", {
                    className: tQ.eu,
                    "aria-hidden": !0,
                    children: (0, i.jsx)(tK._, { size: "sm", color: d.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
                }),
            (0, i.jsxs)("div", {
                className: tQ.Qq,
                children: [
                    (0, i.jsx)(A.D, {
                        variant: "heading-sm/semibold",
                        color: "text-strong",
                        lineClamp: 1,
                        children: E.intl.string(tq.default.WhdCGP),
                    }),
                    (0, i.jsx)(p.E, {
                        variant: "text-xs/medium",
                        color: "text-strong",
                        lineClamp: l ? 2 : 1,
                        children: E.intl.formatToPlainString(Q.default["49Jv0I"], { widgetName: t }),
                    }),
                ],
            }),
        ],
    });
}
function tV(e) {
    let { guildId: t, widgetName: n, isCompact: a, isSpotifyConnected: s } = e;
    return (0, i.jsxs)("div", {
        className: tQ.UX,
        children: [
            s ? (0, i.jsx)(tX, { widgetName: n, isCompact: a }) : (0, i.jsx)(t$, { guildId: t, isCompact: a }),
            (0, i.jsx)(L.$, {
                variant: "secondary",
                size: "sm",
                icon: s ? void 0 : tY.E,
                text: s ? E.intl.string(E.t.KY0ilj) : E.intl.string(Q.default.jB1fWC),
                onClick: () => {
                    (0, ea.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([
                                l.e("120239"),
                                l.e("955410"),
                                l.e("132502"),
                                l.e("230029"),
                                l.e("488926"),
                                l.e("452467"),
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
var tZ = l(625903),
    tJ = l(780964),
    t0 = l(766075),
    t1 = l(30370),
    t2 = l(123894);
function t6() {
    let e = (0, C.bG)([t1.A], () => t1.A.getAccounts().some((e) => e.type === eW.fg2.SPOTIFY && e.showActivity));
    return (0, i.jsx)(S, {
        className: t2.w,
        title: E.intl.string(Q.default.ULK65a),
        body: E.intl.format(e ? Q.default.BLuvck : Q.default["Ko3a0+"], { memberCount: 2 }),
        action: e
            ? null
            : (0, i.jsx)(L.$, {
                  variant: "secondary",
                  size: "sm",
                  icon: tZ.SettingsIcon,
                  text: E.intl.string(E.t["3D5yo/"]),
                  onClick: () => (0, t0.openUserSettings)(tJ.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING),
              }),
    });
}
function t3() {
    return (0, i.jsx)(S, {
        className: t2.w,
        title: E.intl.string(Q.default.ULK65a),
        body: E.intl.format(Q.default.ZQxU8v, { memberCount: 2 }),
    });
}
var t4 = l(109487),
    t8 = l(279543);
function t7(e) {
    let { isCompact: t } = e;
    return (0, i.jsxs)("div", {
        className: t8.qr,
        children: [
            (0, i.jsxs)("div", {
                className: t8.Os,
                children: [
                    (0, i.jsx)("span", {
                        className: t8.Kk,
                        children: (0, i.jsx)(R.RefreshIcon, {
                            size: "xxs",
                            color: d.A.colors.ICON_SUBTLE,
                            "aria-hidden": !0,
                        }),
                    }),
                    (0, i.jsx)(p.E, {
                        className: t8.Pf,
                        tag: "span",
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: E.intl.string(Q.default["3/DOFo"]),
                    }),
                ],
            }),
            (0, i.jsxs)(td.Anchor, {
                className: t8.al,
                href: th.RQ.WEB_HOME,
                "aria-label": E.intl.string(Q.default["jUr+wF"]),
                children: [
                    (0, i.jsx)("span", {
                        className: t8.Kk,
                        children: (0, i.jsx)(t4.L, { size: "xs", color: d.A.colors.ICON_STRONG, "aria-hidden": !0 }),
                    }),
                    !t &&
                        (0, i.jsx)(p.E, {
                            className: t8.G2,
                            tag: "span",
                            variant: "text-xs/medium",
                            color: "none",
                            children: E.intl.string(Q.default.ZdPp2q),
                        }),
                ],
            }),
        ],
    });
}
var t5 = l(65154),
    t9 = l(329177),
    le = l(242226);
function lt(e) {
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
        x = $(l, n, { showYouSuffix: c }),
        { user: h } = x;
    return null == h
        ? null
        : (0, i.jsxs)("div", {
              ref: m,
              "aria-hidden": u,
              inert: u,
              className: g()(le.nM, { [le.Bh]: c && !u, [le.lR]: o }),
              children: [
                  (0, i.jsx)(ll, { guildId: l, user: h, identity: x, rank: s, listener: a }),
                  null != a &&
                      (0, i.jsxs)("div", {
                          className: g()(le.Mx, { [le.dA]: r }),
                          children: [
                              (0, i.jsx)(t5.S, { size: "xxs", color: d.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                              (0, i.jsx)(p.E, {
                                  variant: "text-sm/medium",
                                  color: "text-strong",
                                  children:
                                      ((t = a.plays), E.intl.formatToPlainString(Q.default["7X+3f8"], { count: t })),
                              }),
                          ],
                      }),
                  null != a && !r && (0, i.jsx)(ls, { artists: a.artists, artistCount: a.artist_count ?? null }),
              ],
          });
}
function ll(e) {
    let { guildId: t, user: l, identity: n, rank: s, listener: r } = e,
        d = a.useRef(null);
    return (0, i.jsx)(ec.A, {
        targetElementRef: d,
        user: l,
        guildId: t,
        children: (e) =>
            (0, i.jsxs)(T.D, {
                ...e,
                innerRef: d,
                className: le.D_,
                children: [
                    null != s &&
                        (0, i.jsx)(k.A, { children: E.intl.formatToPlainString(Q.default.I4JiAQ, { rank: s }) }),
                    (0, i.jsxs)("span", {
                        className: le.R3,
                        children: [
                            (0, i.jsx)(D.eu, {
                                size: w._3.SIZE_32,
                                src: l.getAvatarURL(t, (0, w.FT)(w._3.SIZE_32)) ?? void 0,
                                "aria-hidden": !0,
                            }),
                            1 === s &&
                                (0, i.jsx)("span", {
                                    className: le.ie,
                                    "aria-hidden": !0,
                                    children: (0, i.jsx)(t9.CrownIcon, { size: "xxs", color: "currentColor" }),
                                }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: le.Dc,
                        children: [
                            (0, i.jsx)(A.D, {
                                variant: "heading-sm/semibold",
                                color: "text-default",
                                lineClamp: 1,
                                children: (0, i.jsx)(M.g, {
                                    name: n.displayName,
                                    colorString: n.member?.colorString ?? null,
                                    colorStrings: n.roleColorStrings,
                                }),
                            }),
                            (0, i.jsx)(li, { listener: r }),
                        ],
                    }),
                ],
            }),
    });
}
function ln(e, t) {
    return (0, i.jsx)(p.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: e }, t);
}
function li(e) {
    let { listener: t } = e,
        l = t?.latest_track_title;
    if (null == l) return null;
    let n = t?.latest_artist_name;
    return (0, i.jsx)(p.E, {
        variant: "text-xs/medium",
        color: "text-subtle",
        lineClamp: 1,
        children:
            null != n
                ? E.intl.format(Q.default.QqaqBg, { trackTitle: l, artistName: n, highlightHook: ln })
                : E.intl.format(Q.default.ZMJ8Mt, { trackTitle: l, highlightHook: ln }),
    });
}
function la(e) {
    let { artist: t, notched: l } = e,
        [n, s] = a.useState(!1),
        r = null != t.artist_image_hash ? th.RQ.IMAGE(t.artist_image_hash) : null;
    return (0, i.jsx)("span", {
        className: le.sG,
        children: (0, i.jsx)(ej.Ay, {
            mask: l ? ej.l8[24] : ej.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null == r || n
                    ? (0, i.jsx)("span", {
                          className: le.Ql,
                          children: (0, i.jsx)(tr.MicrophoneIcon, { size: "xxs", color: d.A.colors.ICON_SUBTLE }),
                      })
                    : (0, i.jsx)("img", { className: le.v2, src: r, alt: "", loading: "lazy", onError: () => s(!0) }),
        }),
    });
}
function ls(e) {
    let { artists: t, artistCount: l } = e,
        n = t.slice(0, 3),
        a = (l ?? t.length) - n.length;
    return (0, i.jsx)("div", {
        className: le.Rh,
        "aria-hidden": !0,
        children:
            n.length > 0 &&
            (0, i.jsxs)("div", {
                className: le.W$,
                children: [
                    n.map((e, t) =>
                        (0, i.jsx)(
                            la,
                            { artist: e, notched: a > 0 || t !== n.length - 1 },
                            `${e.artist_external_id}-${e.artist_image_hash}`,
                        ),
                    ),
                    a > 0 &&
                        (0, i.jsx)("span", {
                            className: le.sG,
                            children: (0, i.jsx)(ej.Ay, {
                                mask: ej.Ay.Masks.SQUIRCLE,
                                width: 24,
                                height: 24,
                                children: (0, i.jsx)("div", {
                                    className: le.ag,
                                    children: (0, i.jsx)(p.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: E.intl.formatToPlainString(Q.default.bFIg0R, { count: a }),
                                    }),
                                }),
                            }),
                        }),
                ],
            }),
    });
}
var lr = l(897130);
function ld(e) {
    let { guildId: t, isCompact: l, data: n, upsell: s } = e,
        r = n.top_listeners,
        d = (0, C.bG)([G.default], () => G.default.getCurrentUser()?.id),
        c = r.findIndex((e) => e.user_id === d),
        o = -1 === c ? null : r[c],
        u = a.useMemo(() => r.map((e) => e.user_id), [r]);
    (0, U.k6)(t, u);
    let { scrollerRef: m, userRowRef: x, floatingRowPosition: h } = H(),
        f = null != s,
        j = f ? null : h,
        v = null != j;
    return n.top_listeners.length < 2
        ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(t3, {}), s] })
        : (0, i.jsxs)("div", {
              className: lr.SY,
              children: [
                  (0, i.jsxs)(y.d_, {
                      className: g()(lr.p_, { [lr.w]: f }),
                      ref: m,
                      children: [
                          r.map((e, n) => {
                              let a = e.user_id === d;
                              return (0, i.jsx)(
                                  lt,
                                  {
                                      guildId: t,
                                      userId: e.user_id,
                                      listener: e,
                                      rank: n + 1,
                                      isCompact: l,
                                      isCurrentUser: a,
                                      shouldDimForCurrentUser: a && v,
                                      rowRef: a ? x : void 0,
                                  },
                                  e.user_id,
                              );
                          }),
                          !f &&
                              null != d &&
                              null == o &&
                              (0, i.jsx)(lt, {
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
                              (0, i.jsx)(B, { position: "bottom" }),
                              (0, i.jsx)("div", { className: lr.Kv, children: s }),
                          ],
                      }),
                  null != d &&
                      null != j &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(B, { position: j }),
                              (0, i.jsx)(W, {
                                  position: j,
                                  children: (0, i.jsx)(lt, {
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
var lc = l(717683);
function lo(e) {
    let { isCompact: t } = e;
    return (0, i.jsxs)("div", {
        className: lc.qV,
        "aria-hidden": !0,
        children: [
            (0, i.jsx)("div", {
                className: g()(lc.Dk, { [lc.yI]: t }),
                children: Array.from({ length: 10 }, (e, t) =>
                    (0, i.jsxs)(
                        "div",
                        {
                            className: lc.Nr,
                            children: [
                                (0, i.jsx)("div", { className: g()(lc.om, lc.xX) }),
                                (0, i.jsxs)("div", {
                                    className: lc.Qq,
                                    children: [
                                        (0, i.jsx)("div", { className: g()(lc.om, lc.DD) }),
                                        (0, i.jsx)("div", { className: g()(lc.om, lc.VA) }),
                                    ],
                                }),
                            ],
                        },
                        t,
                    ),
                ),
            }),
            (0, i.jsxs)("div", {
                className: g()(lc.yp, { [lc.Fl]: t }),
                children: [
                    (0, i.jsx)("div", { className: g()(lc.om, lc.Pl) }),
                    (0, i.jsx)("div", { className: g()(lc.om, lc._0) }),
                ],
            }),
        ],
    });
}
var lu = l(432017),
    lm = l(362704);
function lx(e) {
    let { song: t, isSelected: l, onSelect: n, itemProps: s } = e,
        r = null != t.cover_art_hash ? th.RQ.IMAGE(t.cover_art_hash) : null,
        d = a.useMemo(
            () => ({
                kind: "song",
                shareUrl: th.RQ.WEB_OPEN(th.M0.TRACK, t.track_external_id),
                title: t.track_title ?? t.track_external_id,
                subtitle: t.artist_name,
                imageUrl: r,
            }),
            [t.track_external_id, t.track_title, t.artist_name, r],
        );
    return (0, i.jsxs)("div", {
        className: tm.Nr,
        children: [
            (0, i.jsxs)("button", {
                ...s,
                type: "button",
                className: g()(tm.MT, { [tm.tY]: l }),
                "aria-pressed": l,
                onClick: () => n(t.track_external_id),
                children: [
                    (0, i.jsx)(tc.R, {
                        src: r,
                        isCircular: !1,
                        FallbackIcon: lu.T,
                        children:
                            l &&
                            (0, i.jsx)("span", {
                                className: g()(tm.Lw, tm.Kp),
                                "aria-hidden": !0,
                                children: (0, i.jsx)(lm.Y, { size: "md", color: "currentColor" }),
                            }),
                    }),
                    null != t.track_title &&
                        (0, i.jsxs)("span", {
                            className: tm.Qq,
                            children: [
                                (0, i.jsx)(p.E, {
                                    className: tm.DD,
                                    tag: "span",
                                    variant: "text-sm/semibold",
                                    color: "text-default",
                                    lineClamp: 1,
                                    children: t.track_title,
                                }),
                                null != t.artist_name &&
                                    (0, i.jsx)(p.E, {
                                        className: tm.VA,
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
            (0, i.jsx)(tx, { target: d, tabIndex: s.tabIndex }),
        ],
    });
}
var lh = l(196765),
    lf = l(770178);
let lg = { view: "top_songs", isCompact: !1, canShowEmbed: !1, selectedTrackId: null },
    lj = (0, lh.v)(() => ({ byWidgetId: {} }));
function lv(e, t) {
    lj.setState((l) => {
        let n = l.byWidgetId[e] ?? lg;
        return { byWidgetId: { ...l.byWidgetId, [e]: { ...n, ...t } } };
    });
}
function lp(e) {
    return lj((t) => t.byWidgetId[e]?.view ?? lg.view);
}
function l_(e) {
    return lj((t) => t.byWidgetId[e]?.isCompact ?? lg.isCompact);
}
function lA(e) {
    return lj((t) => t.byWidgetId[e]?.selectedTrackId ?? lg.selectedTrackId);
}
function lE(e, t) {
    (lj.getState().byWidgetId[e] ?? lg).view !== t && lv(e, { view: t, selectedTrackId: null });
}
function lN(e) {
    return e.track_external_id;
}
function lb(e) {
    let t,
        { guildId: l, widgetId: n, isCompact: s, data: r } = e,
        d = lA(n),
        c = lj((e) => e.byWidgetId[n]?.canShowEmbed ?? lg.canShowEmbed),
        o = a.useCallback(
            (e) => {
                let t;
                return (
                    (t = lj.getState().byWidgetId[n]?.selectedTrackId ?? null),
                    void lv(n, { selectedTrackId: t === e ? null : e })
                );
            },
            [n],
        ),
        u = a.useCallback(
            (e, t) => (0, i.jsx)(lx, { song: e, isSelected: e.track_external_id === d, onSelect: o, itemProps: t }),
            [d, o],
        );
    if (0 === r.ranked_songs.length) return null;
    let m = r.ranked_songs.find((e) => e.track_external_id === d) ?? null,
        x = tI(r);
    return (0, i.jsxs)("div", {
        className: tB.U,
        children: [
            (0, i.jsx)(tw, {
                label: tG(tM.TOP_SONGS),
                items: r.ranked_songs,
                isCompact: s,
                getItemKey: lN,
                renderItem: u,
            }),
            null != m
                ? (0, i.jsx)(tR, { guildId: l, isCompact: s, canShowEmbed: c, song: m })
                : (0, i.jsx)(tT, {
                      isCompact: s,
                      headline:
                          (t = Math.round(r.listening_time_ms / V.A.Millis.MINUTE)) < 1
                              ? null
                              : E.intl.formatToPlainString(Q.default["+5b01q"], { minutes: t }),
                      detail:
                          r.distinct_listeners < 1
                              ? null
                              : E.intl.format(Q.default.AzIhRB, {
                                    count: r.distinct_listeners,
                                    trend: tN(x),
                                    countHook: tA,
                                }),
                      trend: x,
                  }),
        ],
    });
}
var lI = l(691885),
    lS = l(109765);
function lC(e) {
    let { widgetId: t } = e,
        l = lp(t),
        n = a.useMemo(() => tL.map((e) => ({ id: e, label: tG(e), value: e })), []),
        s = a.useCallback(
            (e) => {
                lE(t, e);
            },
            [t],
        );
    return (0, i.jsx)("div", {
        className: lS.L,
        children: (0, i.jsx)(lI.l, {
            selectionMode: "single",
            label: E.intl.string(Q.default.hFYyGU),
            hideLabel: !0,
            fitContent: !0,
            options: n,
            value: l,
            onSelectionChange: s,
        }),
    });
}
var ly = l(871107);
function lT(e) {
    let { title: t } = e;
    return (0, i.jsxs)("div", {
        className: ly.$,
        children: [
            (0, i.jsx)("span", {
                className: ly.K,
                children: (0, i.jsx)(lu.T, { size: "xs", color: d.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
            }),
            (0, i.jsx)(h.q, { size: "md", children: t }),
        ],
    });
}
var lR = l(77915),
    lk = l(756936);
function lD(e) {
    return e.default_title ?? E.intl.string(Q.default["5xxUI2"]);
}
var lw = l(890497),
    lM = l(734057),
    lL = l(317525),
    lU = l(576705),
    lG = l(935208),
    lP = l(44167);
l(321073);
var lO = l(485845),
    lB = l(136722),
    lW = l(435183),
    lz = l(155718),
    lF = l(795816),
    lH = l(933958),
    lK = l(574152),
    lY = l(627363),
    lq = l(712440),
    lQ = l(733110),
    l$ = l(488926),
    lX = l(818023);
async function lV(e) {
    null == e_.A.getApplication(lX.NW) && (await (0, lY.TA)(lX.NW));
    let t = lH.Ay.getEmbeddedActivitiesForChannel(e).every((e) => e.applicationId !== lX.NW);
    return await (0, lF.su)({
        channelId: e,
        applicationId: lX.NW,
        isStart: t,
        embeddedActivitiesManager: (0, lK.A)(),
        renderInFramePool: !0,
    });
}
async function lZ(e) {
    let { channel: t, selectedRoleIds: l } = e,
        n = [];
    if (l.length > 0)
        for (let e of (n.push({ id: t.guild_id, type: lz.r2.ROLE, allow: l$.x3, deny: eW.xBc.USE_EMBEDDED_ACTIVITIES }),
        l))
            n.push({ id: e, type: lz.r2.ROLE, allow: eW.xBc.USE_EMBEDDED_ACTIVITIES, deny: l$.x3 });
    let i = await (0, lW.RT)(t.id, { permissionOverwrites: n });
    if (!i.ok) throw i;
}
let lJ = [];
var l0 = l(344351),
    l1 = l(256693),
    l2 = l(343030),
    l6 = l(317608),
    l3 = l(953538);
let l4 = {
    [r.a.IMAGE_TEXT]: {
        View: function (e) {
            let { widget: t, guildSpaceMode: l, guildId: n } = e,
                { text: a, image_hash: s } = t.config,
                r = "edit" === l ? t.config.image : void 0,
                d = void 0 !== r ? r : null != s ? tt(n, t.id, s) : null;
            return (0, i.jsxs)("div", {
                className: tn.kL,
                children: [
                    null != d && (0, i.jsx)("img", { className: tn.Sl, src: d, alt: "" }),
                    null != a &&
                        (0, i.jsx)(p.E, {
                            variant: "text-md/normal",
                            color: "text-subtle",
                            className: tn.Qq,
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
                v = (0, C.bG)([e7.A], () => e7.A.getGuildId()),
                p = void 0 !== h ? h : null != s.image_hash && null != v ? tt(v, t.id, s.image_hash) : null;
            return (0, i.jsxs)(_.B, {
                gap: 16,
                children: [
                    (0, i.jsx)(e2.k, {
                        label: E.intl.string(E.t.gnwWrx),
                        value: d,
                        onChange: function (e) {
                            (j(null), c(e));
                        },
                        maxLength: 100,
                        showCharacterCount: !0,
                    }),
                    (0, i.jsx)(eJ.D, {
                        label: E.intl.string(E.t.X4IxWL),
                        children: (0, i.jsxs)(_.B, {
                            gap: 16,
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            className: tl.B,
                            children: [
                                (0, i.jsxs)(_.B, {
                                    gap: 8,
                                    direction: "horizontal",
                                    children: [
                                        (0, i.jsx)(e8.A, {
                                            variant: "secondary",
                                            text: E.intl.string(E.t["MsUY/S"]),
                                            onChange: function (e) {
                                                (j(null), f(e));
                                            },
                                            maxFileSizeBytes: 0xa00000,
                                            onFileSizeError: () => (0, e4.A)(0xa00000),
                                        }),
                                        null != p &&
                                            (0, i.jsx)(o.m, {
                                                text: E.intl.string(E.t.N86XcP),
                                                ariaHidden: !0,
                                                children: (0, i.jsx)(u.K, {
                                                    variant: "critical-secondary",
                                                    icon: e6.TrashIcon,
                                                    onClick: function () {
                                                        (j(null), f(null));
                                                    },
                                                    "aria-label": E.intl.string(E.t.N86XcP),
                                                }),
                                            }),
                                    ],
                                }),
                                null != p && (0, i.jsx)("img", { className: tl.V, src: p, alt: "" }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(e0.f, {
                        label: E.intl.string(E.t.COGMNC),
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
                            children: (0, i.jsx)(e3.w, { type: "critical", children: g }),
                        }),
                    (0, i.jsxs)(e1.e, {
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(L.$, { variant: "secondary", text: E.intl.string(E.t["ETE/oC"]), onClick: n }),
                            (0, i.jsx)(L.$, {
                                variant: "primary",
                                text: E.intl.string(E.t["R3BPH+"]),
                                onClick: function () {
                                    let e;
                                    if (
                                        ((e = void 0 !== h ? null !== h : null != s.image_hash),
                                        0 === m.length && !e && (j(E.intl.string(Q.default.zleX9q)), 1))
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
                d = eX({
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
                        ? (0, i.jsx)(b, {})
                        : "error" === n.status
                          ? (0, i.jsx)(I, {})
                          : (0, i.jsx)(eF, { guildId: s, data: n.data, column: l.position.column })),
                (0, i.jsx)("div", { ref: c, children: t })
            );
        },
        Title: function (e) {
            let { widget: t, hydration: l } = e;
            return l?.status !== "success"
                ? (0, i.jsx)(h.q, { children: t.default_title ?? "" })
                : (0, i.jsx)(h.q, { children: et(l.data) });
        },
        TitleIcon: function () {
            return (0, i.jsx)(c.TrophyIcon, { size: "xs", color: d.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        },
        HeaderAccessory: function (e) {
            let { hydration: t } = e;
            return t?.status !== "success" || ee(t.data) ? null : (0, i.jsx)(e$, { data: t.data });
        },
        HeaderActions: function (e) {
            let { hydration: t, guildId: l, column: n } = e,
                a = t?.status === "success" ? t.data : void 0;
            return null != a && ee(a)
                ? null
                : (0, i.jsx)(o.m, {
                      text: E.intl.string(E.t.dcl9MQ),
                      children: (0, i.jsx)(u.K, {
                          variant: "icon-only",
                          size: "sm",
                          icon: m._,
                          "aria-label": E.intl.string(E.t.dcl9MQ),
                          disabled: null == a,
                          onClick: function () {
                              null != a &&
                                  (x.default.track(eW.HAw.LEADERBOARD_CLICK, {
                                      location: "expand",
                                      guild_id: l,
                                      leaderboard_state: el(a),
                                      leaderboard_view: en({ expanded: !1, column: n }),
                                      metric: ei(a.stat),
                                  }),
                                  (function (e) {
                                      let { guildId: t, data: l } = e,
                                          n = (e) => (0, i.jsx)(eZ, { guildId: t, data: l, modalProps: e });
                                      (0, ea.openModalLazy)(() => Promise.resolve(n), {
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
                            lv(t, { isCompact: l < 480, canShowEmbed: l >= 560 });
                        },
                        [t],
                    )),
                    (0, lf.g)(n, s, [t], { fireOnMount: !0 }),
                    a.useEffect(
                        () => () => {
                            lj.setState((e) => {
                                if (null == e.byWidgetId[t]) return e;
                                let l = { ...e.byWidgetId };
                                return (delete l[t], { byWidgetId: l });
                            });
                        },
                        [t],
                    ),
                    n),
                x = l_(c.id),
                h = lp(c.id),
                f = lA(c.id),
                { isContributing: g, isSpotifyConnected: j, hasFetchedConsents: v } = (0, lR.MX)(d),
                p = "edit" === u,
                _ = o?.status === "success" && tU(o.data),
                A = !x && !p && !_,
                E =
                    "view" === u && v && !g
                        ? (0, i.jsx)(tV, { guildId: d, widgetName: lD(c), isCompact: x, isSpotifyConnected: j })
                        : null,
                N =
                    p || _ || o?.status !== "success" || h === tM.TOP_LISTENERS
                        ? null
                        : ((l = o.data),
                          null ==
                          (r =
                              l.ranked_songs.find((e) => e.track_external_id === f && null != e.cover_art_hash)
                                  ?.cover_art_hash ??
                              l.ranked_songs.find((e) => null != e.cover_art_hash)?.cover_art_hash)
                              ? null
                              : th.RQ.IMAGE(r));
            return (0, i.jsxs)("div", {
                className: lk.rf,
                ref: m,
                children: [
                    null != N &&
                        (0, i.jsx)("div", {
                            className: lk.G,
                            "aria-hidden": !0,
                            children: (0, i.jsx)("img", { className: lk.LZ, src: N, alt: "" }),
                        }),
                    (0, i.jsx)("div", {
                        className: lk.Qs,
                        children: (0, i.jsx)("div", {
                            id: tO(c.id),
                            className: lk.nd,
                            role: A ? "tabpanel" : "group",
                            tabIndex: 0,
                            "aria-label": A ? void 0 : tG(h),
                            "aria-labelledby": A ? tP(c.id, h) : void 0,
                            children: (function () {
                                if (p) return (0, i.jsx)(lo, { isCompact: x });
                                if (null == o || "idle" === o.status || "loading" === o.status)
                                    return (0, i.jsx)(b, {});
                                if ("error" === o.status) return (0, i.jsx)(I, {});
                                if (_) return (0, i.jsx)(t6, {});
                                switch (h) {
                                    case tM.TOP_SONGS:
                                        return (0, i.jsx)(lb, {
                                            guildId: d,
                                            widgetId: c.id,
                                            isCompact: x,
                                            data: o.data,
                                        });
                                    case tM.TOP_ARTISTS:
                                        return (0, i.jsx)(tF, { isCompact: x, data: o.data });
                                    case tM.TOP_LISTENERS:
                                        return (0, i.jsx)(ld, { guildId: d, isCompact: x, data: o.data, upsell: E });
                                }
                            })(),
                        }),
                    }),
                    h !== tM.TOP_LISTENERS && E,
                    (0, i.jsx)(t7, { isCompact: x }),
                ],
            });
        },
        Title: function (e) {
            let { widget: t, hydration: l, guildSpaceMode: n } = e,
                a = lD(t),
                s = l?.status === "success" && tU(l.data);
            return "edit" === n || s ? (0, i.jsx)(h.q, { size: "md", children: a }) : (0, i.jsx)(lT, { title: a });
        },
        ViewHeaderTrailing: function (e) {
            let { widget: t, hydration: l, title: n } = e,
                a = l_(t.id),
                s = lp(t.id);
            return l?.status === "success" && tU(l.data)
                ? null
                : a
                  ? (0, i.jsx)(lC, { widgetId: t.id })
                  : (0, i.jsx)(ts, {
                        label: n,
                        tabs: tL.map((e) => ({ id: e, label: tG(e) })),
                        selectedId: s,
                        panelId: tO(t.id),
                        getTabId: (e) => tP(t.id, e),
                        onSelect: (e) => lE(t.id, e),
                    });
        },
    },
    [r.a.WHITEBOARD]: {
        View: function (e) {
            let t,
                l,
                n = (0, lP.n)(),
                r = (0, C.bG)(
                    [lM.A, lU.A],
                    () => {
                        let e = null != n ? lM.A.getChannel(n) : void 0;
                        return null != e && lU.A.can(eW.xBc.USE_EMBEDDED_ACTIVITIES, e);
                    },
                    [n],
                ),
                d = (0, C.bG)(
                    [lH.Ay],
                    () => {
                        let e = lH.Ay.getCurrentEmbeddedActivity();
                        return null == e ||
                            e.applicationId !== lX.NW ||
                            e.location.kind !== l0.T.GUILD_CHANNEL ||
                            e.location.channel_id !== n
                            ? null
                            : e;
                    },
                    [n],
                ),
                c = (0, C.bG)([lH.Ay], () => lH.Ay.isLaunchingActivity(), []),
                { authResolved: o, isAuthorized: u } =
                    ((t = (0, C.bG)(
                        [lQ.default],
                        () => lQ.default.getFetchStateForApplication(lX.NW) === lQ.FetchState.FETCHED,
                        [],
                    )),
                    (l = (0, C.bG)(
                        [lQ.default, e_.A],
                        () => {
                            let e = lQ.default.getNewestTokenForApplication(lX.NW);
                            if (null == e) return !1;
                            let t = e_.A.getApplication(lX.NW),
                                l = t?.integrationTypesConfig?.[lO.b.USER_INSTALL]?.oauth2InstallParams?.scopes;
                            if (null == l) return !0;
                            let n = new Set(e.scopes);
                            return l.every((e) => n.has(e));
                        },
                        [],
                    )),
                    a.useEffect(() => {
                        (lQ.default.getFetchStateForApplication(lX.NW) === lQ.FetchState.NOT_FETCHED &&
                            lq.A.fetch([lX.NW]),
                            null == e_.A.getApplication(lX.NW) && (0, lY.TA)(lX.NW));
                    }, []),
                    { authResolved: t, isAuthorized: l }),
                m = a.useRef(!1);
            a.useEffect(() => {
                null == d && null != n && r && o && u && !m.current && ((m.current = !0), lV(n));
            }, [r, n, d, o, u]);
            let x = a.useCallback(() => {
                    null != n && ((m.current = !0), lV(n));
                }, [n]),
                h = null != n && o && !u;
            return null == n
                ? (0, i.jsx)(_.B, {
                      className: l3.kL,
                      align: "center",
                      justify: "center",
                      children: (0, i.jsx)(s, { alt: "", width: 200 }),
                  })
                : r
                  ? (0, i.jsxs)("div", {
                        className: l3.kL,
                        children: [
                            null != d &&
                                (0, i.jsx)(l6.A, {
                                    frameId: (0, l1.Ri)(d),
                                    level: l2.A.WithinAppContent,
                                    className: l3.t$,
                                }),
                            null == d &&
                                h &&
                                (0, i.jsx)("div", {
                                    className: l3.P5,
                                    children: (0, i.jsx)(L.$, {
                                        variant: "secondary",
                                        text: E.intl.string(Q.default.PSuly6),
                                        loading: c,
                                        onClick: x,
                                    }),
                                }),
                        ],
                    })
                  : (0, i.jsx)("div", {
                        className: l3.kL,
                        children: (0, i.jsx)("div", {
                            className: l3.m0,
                            children: (0, i.jsx)(p.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: E.intl.string(Q.default["nXc/MQ"]),
                            }),
                        }),
                    });
        },
        Edit: function (e) {
            let { cancel: t } = e,
                l = (0, C.bG)([e7.A], () => e7.A.getGuildId()),
                n = lG.default.castGuildIdAsEveryoneGuildRoleId(l),
                s = (0, lP.n)(),
                r = (0, C.bG)([lM.A], () => (null != s ? lM.A.getChannel(s) : void 0), [s]),
                d = (0, C.bG)([lU.A], () => null != r && lU.A.can(eW.xBc.MANAGE_ROLES, r), [r]),
                c = (0, C.bG)([lL.A], () => (null == l ? lJ : lL.A.getSortedRoles(l).filter((e) => e.id !== n)), [
                    l,
                    n,
                ]),
                o = a.useMemo(() => {
                    let e;
                    return null != r
                        ? null != (e = r.permissionOverwrites[r.guild_id]) &&
                          lB.zy(e.deny, eW.xBc.USE_EMBEDDED_ACTIVITIES)
                            ? c
                                  .filter((e) => {
                                      let t = r.permissionOverwrites[e.id];
                                      return null != t && lB.zy(t.allow, eW.xBc.USE_EMBEDDED_ACTIVITIES);
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
            async function p() {
                if (null != r) {
                    (g(!1), h(!0));
                    try {
                        (await lZ({ channel: r, selectedRoleIds: j }), t());
                    } catch {
                        (h(!1), g(!0));
                    }
                }
            }
            return null == r
                ? null
                : (0, i.jsxs)(_.B, {
                      gap: 16,
                      children: [
                          (0, i.jsx)(lw.Z, {
                              selectionMode: "multiple",
                              label: E.intl.string(Q.default.XXLbfv),
                              description: E.intl.string(Q.default.XrpYIG),
                              placeholder: E.intl.string(Q.default.pp6WeD),
                              options: v,
                              value: j,
                              onSelectionChange: function (e) {
                                  (g(!1), m(e));
                              },
                              disabled: !d || x,
                              fullWidth: !0,
                              wrapTags: !0,
                          }),
                          !d && (0, i.jsx)(e3.w, { type: "warning", children: E.intl.string(Q.default.UPLtlA) }),
                          f &&
                              (0, i.jsx)("div", {
                                  role: "alert",
                                  children: (0, i.jsx)(e3.w, {
                                      type: "critical",
                                      children: E.intl.string(Q.default.xyCJYs),
                                  }),
                              }),
                          (0, i.jsxs)(e1.e, {
                              fullWidth: !0,
                              children: [
                                  (0, i.jsx)(L.$, {
                                      variant: "secondary",
                                      text: E.intl.string(E.t["ETE/oC"]),
                                      onClick: t,
                                      disabled: x,
                                  }),
                                  (0, i.jsx)(L.$, {
                                      variant: "primary",
                                      text: E.intl.string(E.t["R3BPH+"]),
                                      onClick: p,
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
