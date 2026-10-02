l.d(t, { m: () => lZ });
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
    N = l(663417),
    A = l(834730),
    E = l(140735),
    b = l(97808),
    I = l(778712),
    S = l(297264),
    C = l(463930),
    y = l(821609),
    T = l(80682),
    k = l(287809),
    w = l(58703),
    R = l(17085),
    D = l(848966);
function M(e) {
    let { position: t } = e;
    return (0, i.jsx)("div", { className: "top" === t ? D.oT : D.yf });
}
function L(e) {
    let { position: t, children: l } = e;
    return (0, i.jsx)("div", { className: "top" === t ? D.sU : D._u, children: l });
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
        i = (0, v.bG)([k.default], () => k.default.getUser(t), [t]),
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
    q = l(251812);
function Y(e) {
    return e.entries.length < 3;
}
function Q(e) {
    return (0, q.K)(Y(e) ? void 0 : e.stat).name;
}
function $(e) {
    let t;
    return Y(e)
        ? "empty_state"
        : null != (t = e.computed_at) && new Date(t).getTime() - e.week_start_ts * K.A.Millis.SECOND >= K.A.Millis.WEEK
          ? "podium"
          : "in_progress";
}
function X(e) {
    let { expanded: t } = e;
    return t ? "regular" : "mini";
}
var Z = l(192308);
function V(e) {
    (0, Z.openModalLazy)(
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
var J = l(823353);
function ee(e) {
    let { guildId: t, onActivitySharingClick: l } = e,
        n = H.tz.useSetting(),
        a = H.JG.useSetting().includes(t),
        s = !n || a;
    return (0, i.jsx)(R.Zj, {
        className: J.w,
        title: z.intl.string(W.default.ULK65a),
        body: z.intl.format(s ? W.default.ueza5l : W.default["81PK67"], { memberCount: 3 }),
        action: s
            ? (0, i.jsx)(y.$, {
                  variant: "secondary",
                  size: "sm",
                  text: z.intl.string(W.default.fMbgeZ),
                  onClick: () => {
                      (l(), V(t));
                  },
              })
            : null,
    });
}
var et = l(342296),
    el = l(518782);
function en(e) {
    let t = Math.floor(Math.max(e, 0) / K.A.Seconds.MINUTE),
        l = Math.floor(t / K.A.Minutes.HOUR),
        n = t % K.A.Minutes.HOUR;
    return 0 === l
        ? z.intl.formatToPlainString(W.default.DdzvGL, { minutes: n })
        : z.intl.formatToPlainString(W.default["6Y8H0A"], { hours: l, minutes: n });
}
function ei(e, t) {
    switch (t) {
        case el.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return {
                primary: z.intl.formatToPlainString(z.t["k2UNz+"], { days: e.value }),
                secondary: en(e.time_played_seconds),
            };
        case el.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return {
                primary: z.intl.formatToPlainString(W.default.rgpc8E, { count: e.value }),
                secondary: en(e.time_played_seconds),
            };
        case el.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
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
    return { id: e, name: z.intl.string(W.default.rhDbuQ), iconUrl: void 0, isLoading: t };
}
function ej(e, t) {
    return e.get(t) ?? eg(t, !1);
}
function ev(e, t) {
    return t.map((t) => ej(e, t));
}
function ep(e, t) {
    let l = t.user_id,
        n = (0, v.bG)([ef.default], () => ef.default.getId() === l, [l]);
    return F(e, l, { showYouSuffix: n, fallbackName: t.name });
}
var e_ = l(518477),
    eN = l(870087);
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
        x = ep(t, l),
        h = l.application_ids[0],
        f = null != h ? ej(s, h) : void 0,
        g = l.user_id,
        v = a.useCallback(() => {
            (u?.(),
                (0, eu.openUserProfileModal)({
                    userId: g,
                    guildId: t,
                    tabSection: e_.RP.ACTIVITY,
                    scrollTarget: e_.bk.RECENT_ACTIVITY,
                }));
        }, [u, g, t]);
    return (0, i.jsxs)("div", {
        ref: o,
        "aria-hidden": c,
        inert: c,
        className: j()(eN.nM, { [eN.Bh]: r && !c, [eN.lR]: d }),
        children: [
            (0, i.jsx)(eE, { guildId: t, entry: l, identity: x, lastPlayedGame: f, onClick: u }),
            (0, i.jsx)(eS, { entry: l, stat: n, width: m, onClick: v }),
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
function eE(e) {
    let { guildId: t, entry: l, identity: n, lastPlayedGame: s, onClick: r } = e,
        d = a.useRef(null),
        c = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(eb, { rank: l.rank }),
                (0, i.jsx)(b.eu, {
                    size: I._3.SIZE_32,
                    src: n.user?.getAvatarURL(t, (0, I.FT)(I._3.SIZE_32)) ?? void 0,
                    className: eN.my,
                    "aria-hidden": !0,
                }),
                (0, i.jsxs)("div", {
                    className: eN.Dc,
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
                            (0, i.jsx)(A.E, {
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
        ? (0, i.jsx)("div", { className: eN.D_, children: c })
        : (0, i.jsx)(et.A, {
              targetElementRef: d,
              user: n.user,
              guildId: t,
              children: (e) =>
                  (0, i.jsx)(_.D, {
                      ...e,
                      innerRef: d,
                      className: j()(eN.D_, eN.FB),
                      onClick: (t) => {
                          (r?.(), e.onClick(t));
                      },
                      children: c,
                  }),
          });
}
function eb(e) {
    let { rank: t } = e,
        l = z.intl.formatToPlainString(W.default.I4JiAQ, { rank: t });
    switch (t) {
        case 1:
            return (0, i.jsx)("div", {
                className: eN.Tm,
                "aria-label": l,
                children: (0, i.jsx)("div", { className: eN.Xe }),
            });
        case 2:
            return (0, i.jsx)("div", {
                className: eN.Tm,
                "aria-label": l,
                children: (0, i.jsx)("div", { className: eN.XQ }),
            });
        case 3:
            return (0, i.jsx)("div", {
                className: eN.Tm,
                "aria-label": l,
                children: (0, i.jsx)("div", { className: eN.c9 }),
            });
        default:
            return (0, i.jsxs)("div", {
                className: eN.mH,
                children: [
                    (0, i.jsx)(E.A, { children: l }),
                    (0, i.jsx)(A.E, {
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
    let { entry: t, stat: l, width: n, onClick: a } = e,
        { primary: s, secondary: r } = ei(t, l);
    return (0, i.jsxs)(_.D, {
        className: eN.TH,
        style: null != n ? { width: n } : void 0,
        "aria-label": z.intl.string(W.default.o6mBdl),
        onClick: a,
        children: [
            (0, i.jsxs)("div", {
                className: eN.bf,
                children: [
                    (0, i.jsx)(eI, { stat: l }),
                    (0, i.jsx)(A.E, { variant: "text-sm/medium", color: "text-subtle", children: s }),
                ],
            }),
            null != r && (0, i.jsx)(A.E, { variant: "text-xs/medium", color: "text-muted", children: r }),
        ],
    });
}
function eC(e) {
    let { game: t, notched: l } = e;
    return (0, i.jsx)("span", {
        className: eN.rO,
        "aria-hidden": !0,
        children: (0, i.jsx)(eo.Ay, {
            mask: l ? eo.l8[24] : eo.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null != t.iconUrl
                    ? (0, i.jsx)("img", { className: eN.Gt, src: t.iconUrl, alt: "", "aria-hidden": !0 })
                    : (0, i.jsx)("span", {
                          className: eN.ct,
                          "aria-hidden": !0,
                          children: !t.isLoading && (0, i.jsx)(ed._, { size: "xxs", color: d.A.colors.ICON_SUBTLE }),
                      }),
        }),
    });
}
function ey(e) {
    let { played: t, totalCount: l } = e,
        n = t.slice(0, 2),
        a = l - n.length;
    return (0, i.jsxs)("div", {
        className: eN.Nw,
        children: [
            n.map((e, t) => (0, i.jsx)(eC, { game: e, notched: a > 0 || t !== n.length - 1 }, `${e.id}-${t}`)),
            a > 0
                ? (0, i.jsx)("span", {
                      className: eN.rO,
                      children: (0, i.jsx)(eo.Ay, {
                          mask: eo.Ay.Masks.SQUIRCLE,
                          width: 24,
                          height: 24,
                          children: (0, i.jsx)("div", {
                              className: eN.p0,
                              children: (0, i.jsx)(A.E, {
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
function eT(e) {
    let { played: t, totalCount: l, children: n } = e;
    return (0, i.jsx)(ec.u, {
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
        asset: t.length > 0 ? (0, i.jsx)(ey, { played: t, totalCount: t.length }) : void 0,
        assetSize: t.length > 1 ? 43 : 24,
        children: n,
    });
}
function ek(e) {
    let { name: t, applicationIds: l, applicationCount: n, games: a, onClick: s } = e,
        r = ev(a, l);
    return (0, i.jsx)("div", {
        className: eN.ag,
        children: (0, i.jsx)(eT, {
            played: r,
            totalCount: n,
            children: (0, i.jsx)(_.D, {
                className: j()(eN.Nw, eN.Dz),
                "aria-label": z.intl.formatToPlainString(W.default.o6mBdl, { name: t }),
                onClick: s,
                children: (0, i.jsx)(ey, { played: r, totalCount: n }),
            }),
        }),
    });
}
var ew = l(189043);
function eR(e) {
    let { guildId: t, entries: l, stat: n, games: a, currentUserEntry: s, currentUserPillarRef: r, onClick: d } = e,
        c = {
            1: { column: ew.HC, pillar: ew.P5 },
            2: { column: ew.th, pillar: ew.Vk },
            3: { column: ew.Ou, pillar: ew.el },
        };
    return (0, i.jsx)("div", {
        className: ew.pI,
        role: "list",
        "aria-label": z.intl.string(W.default.wKXLfQ),
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
        x = ev(c, l.application_ids),
        h = ep(t, l),
        { primary: f } = ei(l, d),
        g = 1 === n ? I._3.SIZE_48 : I._3.SIZE_40,
        v = a.useRef(null),
        p = j()(ew.dR, { [ew.m$]: 1 === n, [ew.wd]: 2 === n, [ew.p0]: 3 === n }),
        N = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: ew.R3,
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
                    className: j()(ew.DX, r),
                    children: [
                        (0, i.jsx)(S.D, {
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            lineClamp: 1,
                            className: ew.IY,
                            children: (0, i.jsx)(C.g, {
                                name: h.displayName,
                                colorString: h.member?.colorString ?? null,
                                colorStrings: h.roleColorStrings,
                            }),
                        }),
                        (0, i.jsx)(eT, {
                            played: x,
                            totalCount: l.application_count,
                            children: (0, i.jsx)(A.E, {
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
                      targetElementRef: v,
                      user: h.user,
                      guildId: t,
                      children: (e) =>
                          (0, i.jsx)(_.D, {
                              ...e,
                              className: ew.fs,
                              innerRef: v,
                              onClick: (t) => {
                                  (m?.(), e.onClick(t));
                              },
                              children: N,
                          }),
                  })
                : (0, i.jsx)("div", { className: ew.fs, children: N }),
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
        u = (0, v.bG)([k.default], () => k.default.getCurrentUser()?.id),
        m = a.useMemo(() => o.find((e) => e.user_id === u), [o, u]),
        h = a.useMemo(() => {
            let e = o.slice(0, 20);
            return null == m || e.includes(m) ? e : [...e, m];
        }, [o, m]),
        g = a.useMemo(() => Array.from(new Set(h.map((e) => e.user_id))), [h]);
    (0, T.k6)(s, g);
    let N =
            ((t = a.useMemo(() => Array.from(new Set(h.flatMap((e) => e.application_ids))), [h])),
            (l = (0, eh.A)(t)),
            (n = (0, v.yK)([ex.A], () => t.map((e) => ex.A.didFetchingApplicationFail(e)))),
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
        A = Y(r),
        E = $(r),
        b = "podium" === E,
        I = X({ expanded: d }),
        { scrollerRef: S, scrollerNode: C, userRowRef: y, floatingRowPosition: w, scrollToUserRow: R } = G();
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
        leaderboardLength: A ? 0 : h.length,
        leaderboardState: E,
        leaderboardView: I,
        scrollerNode: A ? null : C,
        isEmpty: A,
    });
    let D = null != w,
        U = a.useMemo(() => (b ? h.slice(3) : h), [b, h]),
        P = a.useMemo(() => {
            let e = null == m || U.includes(m) ? U : [...U, m];
            return e.length > 0 ? e : h;
        }, [U, m, h]),
        { metricMeasureRef: O, metricWidth: B } = (function () {
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
                x.default.track(eM.HAw.LEADERBOARD_CLICK, {
                    location: e,
                    guild_id: s,
                    leaderboard_state: E,
                    leaderboard_view: I,
                });
            },
            [s, E, I],
        ),
        H = null == m && null != u,
        K = a.useCallback(
            (e) => {
                let t = e === m;
                return (0, i.jsx)(
                    eA,
                    {
                        guildId: s,
                        entry: e,
                        stat: c,
                        games: N,
                        isCurrentUser: t,
                        shouldDimForCurrentUser: t && D,
                        rowRef: t ? y : void 0,
                        onClick: () => F("row"),
                        metricWidth: B ?? void 0,
                    },
                    `${e.rank}-${e.user_id}`,
                );
            },
            [D, m, N, s, c, y, F, B],
        );
    if (A)
        return (0, i.jsx)("div", {
            className: eL.Cm,
            children: (0, i.jsx)(ee, { guildId: s, onActivitySharingClick: () => F("activity_sharing") }),
        });
    let q = [h[0], h[1], h[2]],
        Q = (0, i.jsx)("div", {
            ref: O,
            className: eL.V$,
            "aria-hidden": !0,
            children: P.map((e) => (0, i.jsx)(eS, { entry: e, stat: c }, e.user_id)),
        });
    return null == B
        ? (0, i.jsxs)("div", { className: eL.rf, children: [Q, (0, i.jsx)(f.eU, {})] })
        : (0, i.jsxs)("div", {
              className: eL.rf,
              children: [
                  Q,
                  (0, i.jsxs)("div", {
                      className: eL.SY,
                      children: [
                          (0, i.jsxs)(p.d_, {
                              className: j()(eL.p_, { [eL.zE]: d, [eL.Ng]: H }),
                              ref: S,
                              children: [
                                  b &&
                                      (0, i.jsx)(eR, {
                                          guildId: s,
                                          entries: q,
                                          stat: c,
                                          games: N,
                                          currentUserEntry: m,
                                          currentUserPillarRef: y,
                                          onClick: () => F("podium"),
                                      }),
                                  U.map(K),
                              ],
                          }),
                          (null != m && null != w) || H
                              ? (0, i.jsx)(M, { position: "top" !== w || H ? "bottom" : "top" })
                              : null,
                          null != m &&
                              null != w &&
                              (0, i.jsx)(L, {
                                  position: w,
                                  children: (0, i.jsx)(_.D, {
                                      className: eL.Po,
                                      "aria-label": z.intl.string(W.default.d0Z8kd),
                                      onClick: R,
                                      children: (0, i.jsx)(eA, {
                                          guildId: s,
                                          entry: m,
                                          stat: c,
                                          games: N,
                                          isCurrentUser: !0,
                                          shouldDimForCurrentUser: !1,
                                          isFloating: !0,
                                          onClick: () => F("row"),
                                          metricWidth: B ?? void 0,
                                      }),
                                  }),
                              }),
                          H && (0, i.jsx)(eP, { guildId: s, onActivitySharingClick: () => F("activity_sharing") }),
                      ],
                  }),
                  (0, i.jsx)(eG, { computedAt: r.computed_at, inModal: d }),
              ],
          });
}
function eG(e) {
    let { computedAt: t, inModal: l } = e,
        n = (0, i.jsxs)("div", {
            className: eL.z8,
            children: [
                (0, i.jsx)(N.RefreshIcon, { size: "xxs", color: d.A.colors.ICON_SUBTLE, "aria-hidden": !0 }),
                (0, i.jsx)(A.E, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: z.intl.string(W.default["/nma+a"]),
                }),
            ],
        });
    return null == t
        ? (0, i.jsx)("div", { className: eL.qr, children: n })
        : (0, i.jsx)("div", {
              className: j()(eL.qr, { [eL.zE]: l }),
              tabIndex: 0,
              children: (0, i.jsx)(o.m, {
                  text: z.intl.formatToPlainString(W.default["1bt50t"], { timestamp: (0, w.mk)(new Date(t)) }),
                  position: "bottom",
                  children: n,
              }),
          });
}
function eP(e) {
    let { guildId: t, onActivitySharingClick: l } = e,
        { isSharingActivity: n, isSharingActivityInGuild: a, hasPersonalizationConsent: s } = (0, R.T4)(t),
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
        (0, v.bG)([k.default], () => k.default.getCurrentUser()?.id ?? ""),
    );
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
                                  (0, i.jsx)(E.A, { children: z.intl.string(W.default["oHdW+u"]) }),
                                  (0, i.jsx)(A.E, {
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
                              className: eL.SA,
                              "aria-hidden": !0,
                          }),
                          (0, i.jsxs)("div", {
                              className: eL.ko,
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
                                      className: eL.LF,
                                      children: (0, i.jsx)(A.E, {
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
                          children: (0, i.jsx)(y.$, {
                              variant: "secondary",
                              size: "sm",
                              text: z.intl.string(W.default.fMbgeZ),
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
        l = (0, q.K)(t.stat),
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
                (0, em.A)(() => n(Date.now()), s ? null : r),
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
        c = 2 > (0, w.m_)(s, new Date()) ? (0, w.mk)(s, !1, d) : (0, w.i$)(s, "L LT", d),
        o = n
            ? z.intl.format(W.default.kG9XmM, { endedAt: c, nextStatName: (0, q.K)(t.next_stat).name })
            : z.intl.format(W.default["X+VLqi"], { statQuestion: l.question, endsAt: c });
    return (0, i.jsx)(ec.u, {
        title: l.name,
        body: o,
        position: "top",
        children: (0, i.jsx)("div", {
            className: eW.q,
            tabIndex: 0,
            children: (0, i.jsx)(A.E, {
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
                    leaderboard_state: $(n.data),
                    leaderboard_view: X({ expanded: n.expanded }),
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
function eK(e) {
    let { guildId: t, data: l, modalProps: n } = e,
        a = eF({ guildId: t, data: l, expanded: !0 });
    return (0, i.jsx)(eO.d, {
        size: "lg",
        "aria-label": Q(l),
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
                                (0, i.jsx)(S.D, { variant: "heading-sm/medium", className: eH.DD, children: Q(l) }),
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
var eq = l(331322),
    eY = l(452027),
    eQ = l(103557),
    e$ = l(825484),
    eX = l(95477),
    eZ = l(241326),
    eV = l(683071),
    eJ = l(2553),
    e0 = l(405810),
    e1 = l(967198),
    e2 = l(488428),
    e3 = l(776231);
let e6 = (0, l(676279).cy)();
function e8(e, t, l) {
    let n = l.startsWith("a_"),
        i = n ? (e6 ? "webp" : "gif") : e6 ? "webp" : "jpg",
        { CDN_HOST: a, API_ENDPOINT: s } = window.GLOBAL_ENV,
        r = eM.Rsh.GUILD_SPACE_IMAGE_TEXT_WIDGET_IMAGE(e, t, l, i),
        d = null != a ? `https://${a}${r}` : location.protocol + s + r,
        c = { size: (0, e3.kr)(500 * (0, e3.mZ)()) };
    return (
        "jpg" === i && (c.quality = "lossless"), "webp" === i && n && (c.animated = !0), (d += `?${e2.stringify(c)}`)
    );
}
var e7 = l(868602),
    e5 = l(445187),
    e4 = l(299285),
    e9 = l(831544),
    te = l(28863),
    tt = l(148166),
    tl = l(427209),
    tn = l(294454),
    ti = l(605810);
function ta(e) {
    let { target: t, tabIndex: n } = e;
    return (0, i.jsx)("div", {
        className: ti.ql,
        children: (0, i.jsx)(o.m, {
            text: z.intl.string(z.t.RDE0Sc),
            ariaHidden: !0,
            children: (0, i.jsx)(u.K, {
                icon: tl.A,
                size: "sm",
                variant: "overlay-secondary",
                tabIndex: n,
                "aria-label": z.intl.string(z.t.Ej3B3Y),
                onClick: () => {
                    (0, Z.openModalLazy)(
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
                                l.e("193158"),
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
                                l.e("115754"),
                                l.e("616592"),
                                l.e("680986"),
                                l.e("600330"),
                                l.e("982699"),
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
                        { stackingBehavior: "stack", modalKey: tn.aU },
                    );
                },
            }),
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
                              children: (0, i.jsx)(A.E, {
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
    tx = (e, t) => (0, i.jsx)(A.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: e }, t);
function th(e) {
    return e;
}
function tf(e) {
    return e?.direction ?? tm;
}
function tg(e) {
    if (null == e) return null;
    let t = Math.round(Math.abs(e));
    return 0 === t
        ? null
        : { direction: e > 0 ? "up" : "down", label: z.intl.formatToPlainString(W.default["h+LUpk"], { percent: t }) };
}
function tj(e) {
    return tg(null != e.plays_trend_pct ? 100 * e.plays_trend_pct : null);
}
var tv = l(633099);
function tp(e) {
    let { trend: t } = e,
        l = "up" === t.direction ? td.z : tc.M;
    return (0, i.jsxs)("span", {
        className: tv.GW,
        children: [
            (0, i.jsx)(l, {
                className: j()({ [tv.$J]: "up" === t.direction, [tv.KW]: "down" === t.direction }),
                size: "xxs",
                color: "currentColor",
                "aria-hidden": !0,
            }),
            (0, i.jsx)(A.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: t.label }),
        ],
    });
}
function t_(e) {
    var t;
    let { guildId: l, song: n } = e,
        s = a.useMemo(() => (n.facepile_user_ids ?? []).slice(0, 3), [n.facepile_user_ids]);
    (0, T.k6)(l, s);
    let r = (0, v.yK)([k.default], () => s.map((e) => k.default.getUser(e)), [s]),
        d = a.useMemo(() => r.filter((e) => null != e), [r]);
    if (0 === d.length) return null;
    let c = n.unique_listeners - d.length;
    return (0, i.jsx)("span", {
        className: tv.WM,
        role: "group",
        "aria-label":
            ((t = n.unique_listeners),
            z.intl.formatToPlainString(W.default.AzIhRB, { count: t, trend: tm, countHook: th })),
        children: (0, i.jsx)(to.Ay, {
            users: d,
            guildId: l,
            size: to.DN.SIZE_24,
            max: d.length,
            count: n.unique_listeners,
            hideMoreUsers: c <= 0,
            renderMoreUsers: () =>
                (0, i.jsx)("span", {
                    className: tv.ju,
                    children: (0, i.jsx)(A.E, {
                        tag: "span",
                        variant: "text-sm/semibold",
                        color: "text-subtle",
                        children: z.intl.formatToPlainString(W.default.bFIg0R, { count: c }),
                    }),
                }),
        }),
    });
}
function tN(e) {
    let { isCompact: t, headline: l, detail: n, trend: a } = e;
    return null == l && null == n && null == a
        ? null
        : (0, i.jsx)("div", {
              className: j()(tv.yp, { [tv.Fl]: t }),
              children: (0, i.jsxs)("div", {
                  className: tv.QD,
                  children: [
                      null != l &&
                          (0, i.jsx)(A.E, {
                              tag: "div",
                              variant: "heading-xl/semibold",
                              color: "text-default",
                              children: l,
                          }),
                      (0, i.jsxs)("div", {
                          className: tv._0,
                          children: [
                              null != n &&
                                  (0, i.jsx)(A.E, {
                                      tag: "span",
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: n,
                                  }),
                              null != a && (0, i.jsx)(tp, { trend: a }),
                          ],
                      }),
                  ],
              }),
          });
}
function tA(e) {
    var t;
    let { guildId: l, isCompact: n, canShowEmbed: a, song: s } = e,
        r = tg(s.plays_change_percent);
    return (0, i.jsxs)("div", {
        className: j()(tv.yp, { [tv.Fl]: n }),
        children: [
            a && (0, i.jsx)(tu.A, { className: tv.aF, resourceType: ts.M0.TRACK, resourceId: s.track_external_id }),
            (0, i.jsxs)("div", {
                className: j()(tv.QD, tv.rk),
                children: [
                    (0, i.jsx)(t_, { guildId: l, song: s }),
                    (0, i.jsxs)("div", {
                        className: tv._0,
                        children: [
                            (0, i.jsx)(A.E, {
                                tag: "span",
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                children:
                                    ((t = s.plays),
                                    z.intl.format(W.default["7hHUIS"], { count: t, trend: tf(r), countHook: tx })),
                            }),
                            null != r && (0, i.jsx)(tp, { trend: r }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var tE = l(197935),
    tb = l(915734);
function tI(e) {
    let { label: t, items: l, isCompact: n, getItemKey: a, renderItem: s } = e;
    return (0, i.jsx)("div", {
        className: j()(tb.Dk, { [tb.yI]: n }),
        children: (0, i.jsx)(tE.A, {
            items: l,
            getItemKey: a,
            renderItem: s,
            gap: 8,
            edgeFade: 40,
            actionsClassName: tb.o1,
            "aria-label": t,
        }),
    });
}
var tS = (((n = {}).TOP_SONGS = "top_songs"), (n.TOP_ARTISTS = "top_artists"), (n.TOP_LISTENERS = "top_listeners"), n);
let tC = ["top_songs", "top_artists", "top_listeners"];
function ty(e) {
    return 1 > e.ranked_songs.reduce((e, t) => e + t.plays, 0);
}
function tT(e) {
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
function tw(e) {
    return `popular-music-panel-${e}`;
}
var tR = l(742452);
function tD(e) {
    return e.artist_external_id;
}
function tM(e, t) {
    return (0, i.jsx)(tr, { artist: e, itemProps: t });
}
function tL(e) {
    let { isCompact: t, data: l } = e;
    if (0 === l.ranked_artists.length) return null;
    let n = tj(l);
    return (0, i.jsxs)("div", {
        className: tR.U,
        children: [
            (0, i.jsx)(tI, {
                label: tT(tS.TOP_ARTISTS),
                items: l.ranked_artists,
                isCompact: t,
                getItemKey: tD,
                renderItem: tM,
            }),
            (0, i.jsx)(tN, {
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
                              trend: tf(n),
                              memberCountHook: tx,
                              artistCountHook: tx,
                          }),
                trend: n,
            }),
        ],
    });
}
var tU = l(803613),
    tG = l(682348),
    tP = l(73152),
    tO = l(57129),
    tB = l(280911);
function tW(e) {
    let { guildId: t, isCompact: l } = e,
        n = (0, v.bG)([k.default], () => k.default.getCurrentUser()),
        a = (0, v.bG)([O.Ay], () => (null != n ? O.Ay.getMember(t, n.id) : null)),
        s = (0, P.gn)(t, n?.id, a?.colorStrings ?? null),
        r = B.Ay.useName(t, void 0, n);
    return (0, i.jsxs)("div", {
        className: tB.D_,
        children: [
            (0, i.jsxs)("div", {
                className: tB.FI,
                "aria-hidden": !0,
                children: [
                    !l &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("span", { className: tB.eu, children: (0, i.jsx)(tU.D, { size: "sm" }) }),
                                (0, i.jsxs)("span", {
                                    className: tB.r$,
                                    children: [
                                        (0, i.jsx)("span", { className: tB.Om }),
                                        (0, i.jsx)("span", { className: tB.Om }),
                                        (0, i.jsx)("span", { className: tB.Om }),
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
                className: tB.Qq,
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
                    (0, i.jsx)(A.E, {
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
function tz(e) {
    let { widgetName: t, isCompact: l } = e;
    return (0, i.jsxs)("div", {
        className: tB.D_,
        children: [
            !l &&
                (0, i.jsx)("span", {
                    className: tB.eu,
                    "aria-hidden": !0,
                    children: (0, i.jsx)(tG._, { size: "sm", color: d.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
                }),
            (0, i.jsxs)("div", {
                className: tB.Qq,
                children: [
                    (0, i.jsx)(S.D, {
                        variant: "heading-sm/semibold",
                        color: "text-strong",
                        lineClamp: 1,
                        children: z.intl.string(tO.default.WhdCGP),
                    }),
                    (0, i.jsx)(A.E, {
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
function tF(e) {
    let { guildId: t, widgetName: n, isCompact: a, isSpotifyConnected: s } = e;
    return (0, i.jsxs)("div", {
        className: tB.UX,
        children: [
            s ? (0, i.jsx)(tz, { widgetName: n, isCompact: a }) : (0, i.jsx)(tW, { guildId: t, isCompact: a }),
            (0, i.jsx)(y.$, {
                variant: "secondary",
                size: "sm",
                icon: s ? void 0 : tP.E,
                text: s ? z.intl.string(z.t.KY0ilj) : z.intl.string(W.default.jB1fWC),
                onClick: () => {
                    (0, Z.openModalLazy)(
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
var tH = l(625903),
    tK = l(780964),
    tq = l(766075),
    tY = l(30370),
    tQ = l(123894);
function t$() {
    let e = (0, v.bG)([tY.A], () => tY.A.getAccounts().some((e) => e.type === eM.fg2.SPOTIFY && e.showActivity));
    return (0, i.jsx)(R.Zj, {
        className: tQ.w,
        title: z.intl.string(W.default.ULK65a),
        body: z.intl.format(e ? W.default.BLuvck : W.default["Ko3a0+"], { memberCount: 2 }),
        action: e
            ? null
            : (0, i.jsx)(y.$, {
                  variant: "secondary",
                  size: "sm",
                  icon: tH.SettingsIcon,
                  text: z.intl.string(z.t["3D5yo/"]),
                  onClick: () => (0, tq.openUserSettings)(tK.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING),
              }),
    });
}
function tX() {
    return (0, i.jsx)(R.Zj, {
        className: tQ.w,
        title: z.intl.string(W.default.ULK65a),
        body: z.intl.format(W.default.ZQxU8v, { memberCount: 2 }),
    });
}
var tZ = l(109487),
    tV = l(279543);
function tJ(e) {
    let { isCompact: t } = e;
    return (0, i.jsxs)("div", {
        className: tV.qr,
        children: [
            (0, i.jsxs)("div", {
                className: tV.Os,
                children: [
                    (0, i.jsx)("span", {
                        className: tV.Kk,
                        children: (0, i.jsx)(N.RefreshIcon, {
                            size: "xxs",
                            color: d.A.colors.ICON_SUBTLE,
                            "aria-hidden": !0,
                        }),
                    }),
                    (0, i.jsx)(A.E, {
                        className: tV.Pf,
                        tag: "span",
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: z.intl.string(W.default["3/DOFo"]),
                    }),
                ],
            }),
            (0, i.jsxs)(te.Anchor, {
                className: tV.al,
                href: ts.RQ.WEB_HOME,
                "aria-label": z.intl.string(W.default["jUr+wF"]),
                children: [
                    (0, i.jsx)("span", {
                        className: tV.Kk,
                        children: (0, i.jsx)(tZ.L, { size: "xs", color: d.A.colors.ICON_STRONG, "aria-hidden": !0 }),
                    }),
                    !t &&
                        (0, i.jsx)(A.E, {
                            className: tV.G2,
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
var t0 = l(65154),
    t1 = l(329177),
    t2 = l(242226);
function t3(e) {
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
              className: j()(t2.nM, { [t2.Bh]: c && !u, [t2.lR]: o }),
              children: [
                  (0, i.jsx)(t6, { guildId: l, user: h, identity: x, rank: s, listener: a }),
                  null != a &&
                      (0, i.jsxs)("div", {
                          className: j()(t2.Mx, { [t2.dA]: r }),
                          children: [
                              (0, i.jsx)(t0.S, { size: "xxs", color: d.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                              (0, i.jsx)(A.E, {
                                  variant: "text-sm/medium",
                                  color: "text-strong",
                                  children:
                                      ((t = a.plays), z.intl.formatToPlainString(W.default["7X+3f8"], { count: t })),
                              }),
                          ],
                      }),
                  null != a && !r && (0, i.jsx)(t4, { artists: a.artists, artistCount: a.artist_count ?? null }),
              ],
          });
}
function t6(e) {
    let { guildId: t, user: l, identity: n, rank: s, listener: r } = e,
        d = a.useRef(null);
    return (0, i.jsx)(et.A, {
        targetElementRef: d,
        user: l,
        guildId: t,
        children: (e) =>
            (0, i.jsxs)(_.D, {
                ...e,
                innerRef: d,
                className: t2.D_,
                children: [
                    null != s &&
                        (0, i.jsx)(E.A, { children: z.intl.formatToPlainString(W.default.I4JiAQ, { rank: s }) }),
                    (0, i.jsxs)("span", {
                        className: t2.R3,
                        children: [
                            (0, i.jsx)(b.eu, {
                                size: I._3.SIZE_32,
                                src: l.getAvatarURL(t, (0, I.FT)(I._3.SIZE_32)) ?? void 0,
                                "aria-hidden": !0,
                            }),
                            1 === s &&
                                (0, i.jsx)("span", {
                                    className: t2.ie,
                                    "aria-hidden": !0,
                                    children: (0, i.jsx)(t1.CrownIcon, { size: "xxs", color: "currentColor" }),
                                }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: t2.Dc,
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
                            (0, i.jsx)(t7, { listener: r }),
                        ],
                    }),
                ],
            }),
    });
}
function t8(e, t) {
    return (0, i.jsx)(A.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: e }, t);
}
function t7(e) {
    let { listener: t } = e,
        l = t?.latest_track_title;
    if (null == l) return null;
    let n = t?.latest_artist_name;
    return (0, i.jsx)(A.E, {
        variant: "text-xs/medium",
        color: "text-subtle",
        lineClamp: 1,
        children:
            null != n
                ? z.intl.format(W.default.QqaqBg, { trackTitle: l, artistName: n, highlightHook: t8 })
                : z.intl.format(W.default.ZMJ8Mt, { trackTitle: l, highlightHook: t8 }),
    });
}
function t5(e) {
    let { artist: t, notched: l } = e,
        [n, s] = a.useState(!1),
        r = null != t.artist_image_hash ? ts.RQ.IMAGE(t.artist_image_hash) : null;
    return (0, i.jsx)("span", {
        className: t2.sG,
        children: (0, i.jsx)(eo.Ay, {
            mask: l ? eo.l8[24] : eo.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null == r || n
                    ? (0, i.jsx)("span", {
                          className: t2.Ql,
                          children: (0, i.jsx)(e9.MicrophoneIcon, { size: "xxs", color: d.A.colors.ICON_SUBTLE }),
                      })
                    : (0, i.jsx)("img", { className: t2.v2, src: r, alt: "", loading: "lazy", onError: () => s(!0) }),
        }),
    });
}
function t4(e) {
    let { artists: t, artistCount: l } = e,
        n = t.slice(0, 3),
        a = (l ?? t.length) - n.length;
    return (0, i.jsx)("div", {
        className: t2.Rh,
        "aria-hidden": !0,
        children:
            n.length > 0 &&
            (0, i.jsxs)("div", {
                className: t2.W$,
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
                            className: t2.sG,
                            children: (0, i.jsx)(eo.Ay, {
                                mask: eo.Ay.Masks.SQUIRCLE,
                                width: 24,
                                height: 24,
                                children: (0, i.jsx)("div", {
                                    className: t2.ag,
                                    children: (0, i.jsx)(A.E, {
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
var t9 = l(897130);
function le(e) {
    let { guildId: t, isCompact: l, data: n, upsell: s } = e,
        r = n.top_listeners,
        d = (0, v.bG)([k.default], () => k.default.getCurrentUser()?.id),
        c = r.findIndex((e) => e.user_id === d),
        o = -1 === c ? null : r[c],
        u = a.useMemo(() => r.map((e) => e.user_id), [r]);
    (0, T.k6)(t, u);
    let { scrollerRef: m, userRowRef: x, floatingRowPosition: h } = G(),
        f = null != s,
        g = f ? null : h,
        _ = null != g;
    return n.top_listeners.length < 2
        ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(tX, {}), s] })
        : (0, i.jsxs)("div", {
              className: t9.SY,
              children: [
                  (0, i.jsxs)(p.d_, {
                      className: j()(t9.p_, { [t9.w]: f }),
                      ref: m,
                      children: [
                          r.map((e, n) => {
                              let a = e.user_id === d;
                              return (0, i.jsx)(
                                  t3,
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
                              (0, i.jsx)(t3, {
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
                              (0, i.jsx)("div", { className: t9.Kv, children: s }),
                          ],
                      }),
                  null != d &&
                      null != g &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(M, { position: g }),
                              (0, i.jsx)(L, {
                                  position: g,
                                  children: (0, i.jsx)(t3, {
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
var lt = l(717683);
function ll(e) {
    let { isCompact: t } = e;
    return (0, i.jsxs)("div", {
        className: lt.qV,
        "aria-hidden": !0,
        children: [
            (0, i.jsx)("div", {
                className: j()(lt.Dk, { [lt.yI]: t }),
                children: Array.from({ length: 10 }, (e, t) =>
                    (0, i.jsxs)(
                        "div",
                        {
                            className: lt.Nr,
                            children: [
                                (0, i.jsx)("div", { className: j()(lt.om, lt.xX) }),
                                (0, i.jsxs)("div", {
                                    className: lt.Qq,
                                    children: [
                                        (0, i.jsx)("div", { className: j()(lt.om, lt.DD) }),
                                        (0, i.jsx)("div", { className: j()(lt.om, lt.VA) }),
                                    ],
                                }),
                            ],
                        },
                        t,
                    ),
                ),
            }),
            (0, i.jsxs)("div", {
                className: j()(lt.yp, { [lt.Fl]: t }),
                children: [
                    (0, i.jsx)("div", { className: j()(lt.om, lt.Pl) }),
                    (0, i.jsx)("div", { className: j()(lt.om, lt._0) }),
                ],
            }),
        ],
    });
}
var ln = l(432017),
    li = l(362704);
function la(e) {
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
                className: j()(ti.MT, { [ti.tY]: l }),
                "aria-pressed": l,
                onClick: () => n(t.track_external_id),
                children: [
                    (0, i.jsx)(tt.R, {
                        src: r,
                        isCircular: !1,
                        FallbackIcon: ln.T,
                        children:
                            l &&
                            (0, i.jsx)("span", {
                                className: j()(ti.Lw, ti.Kp),
                                "aria-hidden": !0,
                                children: (0, i.jsx)(li.Y, { size: "md", color: "currentColor" }),
                            }),
                    }),
                    null != t.track_title &&
                        (0, i.jsxs)("span", {
                            className: ti.Qq,
                            children: [
                                (0, i.jsx)(A.E, {
                                    className: ti.DD,
                                    tag: "span",
                                    variant: "text-sm/semibold",
                                    color: "text-default",
                                    lineClamp: 1,
                                    children: t.track_title,
                                }),
                                null != t.artist_name &&
                                    (0, i.jsx)(A.E, {
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
var ls = l(196765),
    lr = l(770178);
let ld = { view: "top_songs", isCompact: !1, canShowEmbed: !1, selectedTrackId: null },
    lc = (0, ls.v)(() => ({ byWidgetId: {} }));
function lo(e, t) {
    lc.setState((l) => {
        let n = l.byWidgetId[e] ?? ld;
        return { byWidgetId: { ...l.byWidgetId, [e]: { ...n, ...t } } };
    });
}
function lu(e) {
    return lc((t) => t.byWidgetId[e]?.view ?? ld.view);
}
function lm(e) {
    return lc((t) => t.byWidgetId[e]?.isCompact ?? ld.isCompact);
}
function lx(e) {
    return lc((t) => t.byWidgetId[e]?.selectedTrackId ?? ld.selectedTrackId);
}
function lh(e, t) {
    (lc.getState().byWidgetId[e] ?? ld).view !== t && lo(e, { view: t, selectedTrackId: null });
}
function lf(e) {
    return e.track_external_id;
}
function lg(e) {
    let t,
        { guildId: l, widgetId: n, isCompact: s, data: r } = e,
        d = lx(n),
        c = lc((e) => e.byWidgetId[n]?.canShowEmbed ?? ld.canShowEmbed),
        o = a.useCallback(
            (e) => {
                let t;
                return (
                    (t = lc.getState().byWidgetId[n]?.selectedTrackId ?? null),
                    void lo(n, { selectedTrackId: t === e ? null : e })
                );
            },
            [n],
        ),
        u = a.useCallback(
            (e, t) => (0, i.jsx)(la, { song: e, isSelected: e.track_external_id === d, onSelect: o, itemProps: t }),
            [d, o],
        );
    if (0 === r.ranked_songs.length) return null;
    let m = r.ranked_songs.find((e) => e.track_external_id === d) ?? null,
        x = tj(r);
    return (0, i.jsxs)("div", {
        className: tR.U,
        children: [
            (0, i.jsx)(tI, {
                label: tT(tS.TOP_SONGS),
                items: r.ranked_songs,
                isCompact: s,
                getItemKey: lf,
                renderItem: u,
            }),
            null != m
                ? (0, i.jsx)(tA, { guildId: l, isCompact: s, canShowEmbed: c, song: m })
                : (0, i.jsx)(tN, {
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
                                    trend: tf(x),
                                    countHook: tx,
                                }),
                      trend: x,
                  }),
        ],
    });
}
var lj = l(691885),
    lv = l(109765);
function lp(e) {
    let { widgetId: t } = e,
        l = lu(t),
        n = a.useMemo(() => tC.map((e) => ({ id: e, label: tT(e), value: e })), []),
        s = a.useCallback(
            (e) => {
                lh(t, e);
            },
            [t],
        );
    return (0, i.jsx)("div", {
        className: lv.L,
        children: (0, i.jsx)(lj.l, {
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
var l_ = l(871107);
function lN(e) {
    let { title: t } = e;
    return (0, i.jsxs)("div", {
        className: l_.$,
        children: [
            (0, i.jsx)("span", {
                className: l_.K,
                children: (0, i.jsx)(ln.T, { size: "xs", color: d.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
            }),
            (0, i.jsx)(h.q, { size: "md", children: t }),
        ],
    });
}
var lA = l(77915),
    lE = l(756936);
function lb(e) {
    return e.default_title ?? z.intl.string(W.default["5xxUI2"]);
}
var lI = l(890497),
    lS = l(734057),
    lC = l(317525),
    ly = l(576705),
    lT = l(935208),
    lk = l(44167);
l(321073);
var lw = l(485845),
    lR = l(136722),
    lD = l(435183),
    lM = l(155718),
    lL = l(795816),
    lU = l(933958),
    lG = l(574152),
    lP = l(627363),
    lO = l(712440),
    lB = l(733110),
    lW = l(488926),
    lz = l(818023);
async function lF(e) {
    null == ex.A.getApplication(lz.NW) && (await (0, lP.TA)(lz.NW));
    let t = lU.Ay.getEmbeddedActivitiesForChannel(e).every((e) => e.applicationId !== lz.NW);
    return await (0, lL.su)({
        channelId: e,
        applicationId: lz.NW,
        isStart: t,
        embeddedActivitiesManager: (0, lG.A)(),
        renderInFramePool: !0,
    });
}
async function lH(e) {
    let { channel: t, selectedRoleIds: l } = e,
        n = [];
    if (l.length > 0)
        for (let e of (n.push({ id: t.guild_id, type: lM.r2.ROLE, allow: lW.x3, deny: eM.xBc.USE_EMBEDDED_ACTIVITIES }),
        l))
            n.push({ id: e, type: lM.r2.ROLE, allow: eM.xBc.USE_EMBEDDED_ACTIVITIES, deny: lW.x3 });
    let i = await (0, lD.RT)(t.id, { permissionOverwrites: n });
    if (!i.ok) throw i;
}
let lK = [];
var lq = l(344351),
    lY = l(256693),
    lQ = l(343030),
    l$ = l(317608),
    lX = l(953538);
let lZ = {
    [r.a.IMAGE_TEXT]: {
        View: function (e) {
            let { widget: t, guildSpaceMode: l, guildId: n } = e,
                { text: a, image_hash: s } = t.config,
                r = "edit" === l ? t.config.image : void 0,
                d = void 0 !== r ? r : null != s ? e8(n, t.id, s) : null;
            return (0, i.jsxs)("div", {
                className: e5.kL,
                children: [
                    null != d && (0, i.jsx)("img", { className: e5.Sl, src: d, alt: "" }),
                    null != a &&
                        (0, i.jsx)(A.E, {
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
                p = (0, v.bG)([e1.A], () => e1.A.getGuildId()),
                _ = void 0 !== h ? h : null != s.image_hash && null != p ? e8(p, t.id, s.image_hash) : null;
            return (0, i.jsxs)(eq.B, {
                gap: 16,
                children: [
                    (0, i.jsx)(eX.k, {
                        label: z.intl.string(z.t.gnwWrx),
                        value: d,
                        onChange: function (e) {
                            (j(null), c(e));
                        },
                        maxLength: 100,
                        showCharacterCount: !0,
                    }),
                    (0, i.jsx)(eY.D, {
                        label: z.intl.string(z.t.X4IxWL),
                        children: (0, i.jsxs)(eq.B, {
                            gap: 16,
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            className: e7.B,
                            children: [
                                (0, i.jsxs)(eq.B, {
                                    gap: 8,
                                    direction: "horizontal",
                                    children: [
                                        (0, i.jsx)(e0.A, {
                                            variant: "secondary",
                                            text: z.intl.string(z.t["MsUY/S"]),
                                            onChange: function (e) {
                                                (j(null), f(e));
                                            },
                                            maxFileSizeBytes: 0xa00000,
                                            onFileSizeError: () => (0, eJ.A)(0xa00000),
                                        }),
                                        null != _ &&
                                            (0, i.jsx)(o.m, {
                                                text: z.intl.string(z.t.N86XcP),
                                                ariaHidden: !0,
                                                children: (0, i.jsx)(u.K, {
                                                    variant: "critical-secondary",
                                                    icon: eZ.TrashIcon,
                                                    onClick: function () {
                                                        (j(null), f(null));
                                                    },
                                                    "aria-label": z.intl.string(z.t.N86XcP),
                                                }),
                                            }),
                                    ],
                                }),
                                null != _ && (0, i.jsx)("img", { className: e7.V, src: _, alt: "" }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(eQ.f, {
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
                            children: (0, i.jsx)(eV.w, { type: "critical", children: g }),
                        }),
                    (0, i.jsxs)(e$.e, {
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
                        ? (0, i.jsx)(f.eU, {})
                        : "error" === l.status
                          ? (0, i.jsx)(f.MO, {})
                          : (0, i.jsx)(eU, { guildId: n, data: l.data })),
                (0, i.jsx)("div", { ref: d, children: t })
            );
        },
        Title: function (e) {
            let { widget: t, hydration: l } = e;
            return l?.status !== "success"
                ? (0, i.jsx)(h.q, { children: t.default_title ?? "" })
                : (0, i.jsx)(h.q, { children: Q(l.data) });
        },
        TitleIcon: function () {
            return (0, i.jsx)(c.TrophyIcon, { size: "xs", color: d.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        },
        HeaderAccessory: function (e) {
            let { hydration: t } = e;
            return t?.status !== "success" || Y(t.data) ? null : (0, i.jsx)(ez, { data: t.data });
        },
        HeaderActions: function (e) {
            let { hydration: t, guildId: l } = e,
                n = t?.status === "success" ? t.data : void 0;
            return null != n && Y(n)
                ? null
                : (0, i.jsx)(o.m, {
                      text: z.intl.string(z.t.dcl9MQ),
                      children: (0, i.jsx)(u.K, {
                          variant: "icon-only",
                          size: "sm",
                          icon: m._,
                          "aria-label": z.intl.string(z.t.dcl9MQ),
                          disabled: null == n,
                          onClick: function () {
                              null != n &&
                                  (x.default.track(eM.HAw.LEADERBOARD_CLICK, {
                                      location: "expand",
                                      guild_id: l,
                                      leaderboard_state: $(n),
                                      leaderboard_view: X({ expanded: !1 }),
                                  }),
                                  (function (e) {
                                      let { guildId: t, data: l } = e,
                                          n = (e) => (0, i.jsx)(eK, { guildId: t, data: l, modalProps: e });
                                      (0, Z.openModalLazy)(() => Promise.resolve(n), {
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
                            lo(t, { isCompact: l < 480, canShowEmbed: l >= 560 });
                        },
                        [t],
                    )),
                    (0, lr.g)(n, s, [t], { fireOnMount: !0 }),
                    a.useEffect(
                        () => () => {
                            lc.setState((e) => {
                                if (null == e.byWidgetId[t]) return e;
                                let l = { ...e.byWidgetId };
                                return (delete l[t], { byWidgetId: l });
                            });
                        },
                        [t],
                    ),
                    n),
                x = lm(c.id),
                h = lu(c.id),
                g = lx(c.id),
                { isContributing: j, isSpotifyConnected: v, hasFetchedConsents: p } = (0, lA.MX)(d),
                _ = "edit" === u,
                N = o?.status === "success" && ty(o.data),
                A = !x && !_ && !N,
                E =
                    "view" === u && p && !j
                        ? (0, i.jsx)(tF, { guildId: d, widgetName: lb(c), isCompact: x, isSpotifyConnected: v })
                        : null,
                b =
                    _ || N || o?.status !== "success" || h === tS.TOP_LISTENERS
                        ? null
                        : ((l = o.data),
                          null ==
                          (r =
                              l.ranked_songs.find((e) => e.track_external_id === g && null != e.cover_art_hash)
                                  ?.cover_art_hash ??
                              l.ranked_songs.find((e) => null != e.cover_art_hash)?.cover_art_hash)
                              ? null
                              : ts.RQ.IMAGE(r));
            return (0, i.jsxs)("div", {
                className: lE.rf,
                ref: m,
                children: [
                    null != b &&
                        (0, i.jsx)("div", {
                            className: lE.G,
                            "aria-hidden": !0,
                            children: (0, i.jsx)("img", { className: lE.LZ, src: b, alt: "" }),
                        }),
                    (0, i.jsx)("div", {
                        className: lE.Qs,
                        children: (0, i.jsx)("div", {
                            id: tw(c.id),
                            className: lE.nd,
                            role: A ? "tabpanel" : "group",
                            tabIndex: 0,
                            "aria-label": A ? void 0 : tT(h),
                            "aria-labelledby": A ? tk(c.id, h) : void 0,
                            children: (function () {
                                if (_) return (0, i.jsx)(ll, { isCompact: x });
                                if (null == o || "idle" === o.status || "loading" === o.status)
                                    return (0, i.jsx)(f.eU, {});
                                if ("error" === o.status) return (0, i.jsx)(f.MO, {});
                                if (N) return (0, i.jsx)(t$, {});
                                switch (h) {
                                    case tS.TOP_SONGS:
                                        return (0, i.jsx)(lg, {
                                            guildId: d,
                                            widgetId: c.id,
                                            isCompact: x,
                                            data: o.data,
                                        });
                                    case tS.TOP_ARTISTS:
                                        return (0, i.jsx)(tL, { isCompact: x, data: o.data });
                                    case tS.TOP_LISTENERS:
                                        return (0, i.jsx)(le, { guildId: d, isCompact: x, data: o.data, upsell: E });
                                }
                            })(),
                        }),
                    }),
                    h !== tS.TOP_LISTENERS && E,
                    (0, i.jsx)(tJ, { isCompact: x }),
                ],
            });
        },
        Title: function (e) {
            let { widget: t, hydration: l, guildSpaceMode: n } = e,
                a = lb(t),
                s = l?.status === "success" && ty(l.data);
            return "edit" === n || s ? (0, i.jsx)(h.q, { size: "md", children: a }) : (0, i.jsx)(lN, { title: a });
        },
        ViewHeaderTrailing: function (e) {
            let { widget: t, hydration: l, title: n } = e,
                a = lm(t.id),
                s = lu(t.id);
            return l?.status === "success" && ty(l.data)
                ? null
                : a
                  ? (0, i.jsx)(lp, { widgetId: t.id })
                  : (0, i.jsx)(e4.I, {
                        label: n,
                        tabs: tC.map((e) => ({ id: e, label: tT(e) })),
                        selectedId: s,
                        panelId: tw(t.id),
                        getTabId: (e) => tk(t.id, e),
                        onSelect: (e) => lh(t.id, e),
                    });
        },
    },
    [r.a.WHITEBOARD]: {
        View: function (e) {
            let t,
                l,
                n = (0, lk.n)(),
                r = (0, v.bG)(
                    [lS.A, ly.A],
                    () => {
                        let e = null != n ? lS.A.getChannel(n) : void 0;
                        return null != e && ly.A.can(eM.xBc.USE_EMBEDDED_ACTIVITIES, e);
                    },
                    [n],
                ),
                d = (0, v.bG)(
                    [lU.Ay],
                    () => {
                        let e = lU.Ay.getCurrentEmbeddedActivity();
                        return null == e ||
                            e.applicationId !== lz.NW ||
                            e.location.kind !== lq.T.GUILD_CHANNEL ||
                            e.location.channel_id !== n
                            ? null
                            : e;
                    },
                    [n],
                ),
                c = (0, v.bG)([lU.Ay], () => lU.Ay.isLaunchingActivity(), []),
                { authResolved: o, isAuthorized: u } =
                    ((t = (0, v.bG)(
                        [lB.default],
                        () => lB.default.getFetchStateForApplication(lz.NW) === lB.FetchState.FETCHED,
                        [],
                    )),
                    (l = (0, v.bG)(
                        [lB.default, ex.A],
                        () => {
                            let e = lB.default.getNewestTokenForApplication(lz.NW);
                            if (null == e) return !1;
                            let t = ex.A.getApplication(lz.NW),
                                l = t?.integrationTypesConfig?.[lw.b.USER_INSTALL]?.oauth2InstallParams?.scopes;
                            if (null == l) return !0;
                            let n = new Set(e.scopes);
                            return l.every((e) => n.has(e));
                        },
                        [],
                    )),
                    a.useEffect(() => {
                        (lB.default.getFetchStateForApplication(lz.NW) === lB.FetchState.NOT_FETCHED &&
                            lO.A.fetch([lz.NW]),
                            null == ex.A.getApplication(lz.NW) && (0, lP.TA)(lz.NW));
                    }, []),
                    { authResolved: t, isAuthorized: l }),
                m = a.useRef(!1);
            a.useEffect(() => {
                null == d && null != n && r && o && u && !m.current && ((m.current = !0), lF(n));
            }, [r, n, d, o, u]);
            let x = a.useCallback(() => {
                    null != n && ((m.current = !0), lF(n));
                }, [n]),
                h = null != n && o && !u;
            return null == n
                ? (0, i.jsx)(eq.B, {
                      className: lX.kL,
                      align: "center",
                      justify: "center",
                      children: (0, i.jsx)(s, { alt: "", width: 200 }),
                  })
                : r
                  ? (0, i.jsxs)("div", {
                        className: lX.kL,
                        children: [
                            null != d &&
                                (0, i.jsx)(l$.A, {
                                    frameId: (0, lY.Ri)(d),
                                    level: lQ.A.WithinAppContent,
                                    className: lX.t$,
                                }),
                            null == d &&
                                h &&
                                (0, i.jsx)("div", {
                                    className: lX.P5,
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
                        className: lX.kL,
                        children: (0, i.jsx)("div", {
                            className: lX.m0,
                            children: (0, i.jsx)(A.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: z.intl.string(W.default["nXc/MQ"]),
                            }),
                        }),
                    });
        },
        Edit: function (e) {
            let { cancel: t } = e,
                l = (0, v.bG)([e1.A], () => e1.A.getGuildId()),
                n = lT.default.castGuildIdAsEveryoneGuildRoleId(l),
                s = (0, lk.n)(),
                r = (0, v.bG)([lS.A], () => (null != s ? lS.A.getChannel(s) : void 0), [s]),
                d = (0, v.bG)([ly.A], () => null != r && ly.A.can(eM.xBc.MANAGE_ROLES, r), [r]),
                c = (0, v.bG)([lC.A], () => (null == l ? lK : lC.A.getSortedRoles(l).filter((e) => e.id !== n)), [
                    l,
                    n,
                ]),
                o = a.useMemo(() => {
                    let e;
                    return null != r
                        ? null != (e = r.permissionOverwrites[r.guild_id]) &&
                          lR.zy(e.deny, eM.xBc.USE_EMBEDDED_ACTIVITIES)
                            ? c
                                  .filter((e) => {
                                      let t = r.permissionOverwrites[e.id];
                                      return null != t && lR.zy(t.allow, eM.xBc.USE_EMBEDDED_ACTIVITIES);
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
                        (await lH({ channel: r, selectedRoleIds: j }), t());
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
                          (0, i.jsx)(lI.Z, {
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
                          !d && (0, i.jsx)(eV.w, { type: "warning", children: z.intl.string(W.default.UPLtlA) }),
                          f &&
                              (0, i.jsx)("div", {
                                  role: "alert",
                                  children: (0, i.jsx)(eV.w, {
                                      type: "critical",
                                      children: z.intl.string(W.default.xyCJYs),
                                  }),
                              }),
                          (0, i.jsxs)(e$.e, {
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
