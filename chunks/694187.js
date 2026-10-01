l.d(t, { m: () => l$ });
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
    k = l(967144),
    R = l(696451),
    w = l(287809),
    D = l(58703),
    M = l(562153),
    L = l(550004),
    U = l(775602);
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
var P = l(885386),
    O = l(927813),
    B = l(251812);
function W(e) {
    return e.entries.length < 3;
}
function z(e) {
    return (0, B.K)(W(e) ? void 0 : e.stat).name;
}
function F(e) {
    let t;
    return W(e)
        ? "empty_state"
        : null != (t = e.computed_at) && new Date(t).getTime() - e.week_start_ts * O.A.Millis.SECOND >= O.A.Millis.WEEK
          ? "podium"
          : "in_progress";
}
function H(e) {
    let { expanded: t } = e;
    return t ? "regular" : "mini";
}
var K = l(192308);
function q(e) {
    (0, K.openModalLazy)(
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
var Y = l(61567),
    $ = l(375708),
    Q = l(823353);
function X(e) {
    let { guildId: t, onActivitySharingClick: l } = e,
        n = P.tz.useSetting(),
        a = P.JG.useSetting().includes(t),
        s = !n || a;
    return (0, i.jsx)(L.Zj, {
        className: Q.w,
        title: $.intl.string(Y.default.ULK65a),
        body: $.intl.format(s ? Y.default.ueza5l : Y.default["81PK67"], { memberCount: 3 }),
        action: s
            ? (0, i.jsx)(y.$, {
                  variant: "secondary",
                  size: "sm",
                  text: $.intl.string(Y.default.fMbgeZ),
                  onClick: () => {
                      (l(), q(t));
                  },
              })
            : null,
    });
}
var V = l(342296),
    Z = l(518782);
function J(e) {
    let t = Math.floor(Math.max(e, 0) / O.A.Seconds.MINUTE),
        l = Math.floor(t / O.A.Minutes.HOUR),
        n = t % O.A.Minutes.HOUR;
    return 0 === l
        ? $.intl.formatToPlainString(Y.default.DdzvGL, { minutes: n })
        : $.intl.formatToPlainString(Y.default["6Y8H0A"], { hours: l, minutes: n });
}
function ee(e, t) {
    switch (t) {
        case Z.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return {
                primary: $.intl.formatToPlainString($.t["k2UNz+"], { days: e.value }),
                secondary: J(e.time_played_seconds),
            };
        case Z.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return {
                primary: $.intl.formatToPlainString(Y.default.rgpc8E, { count: e.value }),
                secondary: J(e.time_played_seconds),
            };
        case Z.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            let l, n, i;
            return {
                primary:
                    ((n = Math.floor((l = Math.floor(Math.max(e.value, 0) / O.A.Millis.MINUTE)) / O.A.Minutes.HOUR)),
                    (i = l % O.A.Minutes.HOUR),
                    0 === n
                        ? $.intl.formatToPlainString(Y.default.bgQf2H, { minutes: i })
                        : 0 === i
                          ? $.intl.formatToPlainString(Y.default["D/HToK"], { hours: n })
                          : $.intl.formatToPlainString(Y.default.fvtrHn, { hours: n, minutes: i })),
            };
        default:
            return { primary: "\u2014" };
    }
}
var et = l(81466),
    el = l(406810),
    en = l(687966),
    ei = l(109112),
    ea = l(683063),
    es = l(573435),
    er = l(402860),
    ed = l(396583),
    ec = l(587895),
    eo = l(429913),
    eu = l(280450);
function em(e, t) {
    return { id: e, name: $.intl.string(Y.default.rhDbuQ), iconUrl: void 0, isLoading: t };
}
function ex(e, t) {
    return e.get(t) ?? em(t, !1);
}
function eh(e, t) {
    return t.map((t) => ex(e, t));
}
function ef(e, t) {
    let l = t.user_id,
        n = (0, v.bG)([w.default], () => w.default.getUser(l), [l]),
        i = (0, v.bG)([R.Ay], () => R.Ay.getMember(e, l), [e, l]),
        a = (0, k.gn)(e, l, i?.colorStrings ?? null),
        s = M.Ay.useName(e, void 0, n),
        r = (0, v.bG)([eu.default], () => eu.default.getId()) === l,
        d = null != n ? s : t.name;
    return {
        user: n,
        member: i,
        roleColorStrings: a,
        baseName: d,
        displayName: r ? $.intl.formatToPlainString(Y.default.subXXA, { name: d }) : d,
    };
}
var eg = l(518477),
    ej = l(870087);
function ev(e) {
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
        x = ef(t, l),
        h = l.application_ids[0],
        f = null != h ? ex(s, h) : void 0,
        g = l.user_id,
        v = a.useCallback(() => {
            (u?.(),
                (0, er.openUserProfileModal)({
                    userId: g,
                    guildId: t,
                    tabSection: eg.RP.ACTIVITY,
                    scrollTarget: eg.bk.RECENT_ACTIVITY,
                }));
        }, [u, g, t]);
    return (0, i.jsxs)("div", {
        ref: o,
        "aria-hidden": c,
        inert: c,
        className: j()(ej.nM, { [ej.Bh]: r && !c, [ej.lR]: d }),
        children: [
            (0, i.jsx)(ep, { guildId: t, entry: l, identity: x, lastPlayedGame: f, onClick: u }),
            (0, i.jsx)(eA, { entry: l, stat: n, width: m, onClick: v }),
            (0, i.jsx)(eS, {
                name: x.baseName,
                applicationIds: l.application_ids,
                applicationCount: l.application_count,
                games: s,
                onClick: v,
            }),
        ],
    });
}
function ep(e) {
    let { guildId: t, entry: l, identity: n, lastPlayedGame: s, onClick: r } = e,
        d = a.useRef(null),
        c = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(e_, { rank: l.rank }),
                (0, i.jsx)(b.eu, {
                    size: I._3.SIZE_32,
                    src: n.user?.getAvatarURL(t, (0, I.FT)(I._3.SIZE_32)) ?? void 0,
                    className: ej.my,
                    "aria-hidden": !0,
                }),
                (0, i.jsxs)("div", {
                    className: ej.Dc,
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
                                children: $.intl.formatToPlainString(Y.default.YuNVPY, { gameName: s.name }),
                            }),
                    ],
                }),
            ],
        });
    return null == n.user
        ? (0, i.jsx)("div", { className: ej.D_, children: c })
        : (0, i.jsx)(V.A, {
              targetElementRef: d,
              user: n.user,
              guildId: t,
              children: (e) =>
                  (0, i.jsx)(_.D, {
                      ...e,
                      innerRef: d,
                      className: j()(ej.D_, ej.FB),
                      onClick: (t) => {
                          (r?.(), e.onClick(t));
                      },
                      children: c,
                  }),
          });
}
function e_(e) {
    let { rank: t } = e,
        l = $.intl.formatToPlainString(Y.default.I4JiAQ, { rank: t });
    switch (t) {
        case 1:
            return (0, i.jsx)("div", {
                className: ej.Tm,
                "aria-label": l,
                children: (0, i.jsx)("div", { className: ej.Xe }),
            });
        case 2:
            return (0, i.jsx)("div", {
                className: ej.Tm,
                "aria-label": l,
                children: (0, i.jsx)("div", { className: ej.XQ }),
            });
        case 3:
            return (0, i.jsx)("div", {
                className: ej.Tm,
                "aria-label": l,
                children: (0, i.jsx)("div", { className: ej.c9 }),
            });
        default:
            return (0, i.jsxs)("div", {
                className: ej.mH,
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
function eN(e) {
    let { stat: t } = e;
    switch (t) {
        case Z.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return (0, i.jsx)(et.CalendarIcon, { size: "xxs", color: d.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case Z.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            return (0, i.jsx)(el.ClockIcon, { size: "xxs", color: d.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case Z.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return (0, i.jsx)(en.GameControllerIcon, { size: "xxs", color: d.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        default:
            return null;
    }
}
function eA(e) {
    let { entry: t, stat: l, width: n, onClick: a } = e,
        { primary: s, secondary: r } = ee(t, l);
    return (0, i.jsxs)(_.D, {
        className: ej.TH,
        style: null != n ? { width: n } : void 0,
        "aria-label": $.intl.string(Y.default.o6mBdl),
        onClick: a,
        children: [
            (0, i.jsxs)("div", {
                className: ej.bf,
                children: [
                    (0, i.jsx)(eN, { stat: l }),
                    (0, i.jsx)(A.E, { variant: "text-sm/medium", color: "text-subtle", children: s }),
                ],
            }),
            null != r && (0, i.jsx)(A.E, { variant: "text-xs/medium", color: "text-muted", children: r }),
        ],
    });
}
function eE(e) {
    let { game: t, notched: l } = e;
    return (0, i.jsx)("span", {
        className: ej.rO,
        "aria-hidden": !0,
        children: (0, i.jsx)(es.Ay, {
            mask: l ? es.l8[24] : es.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null != t.iconUrl
                    ? (0, i.jsx)("img", { className: ej.Gt, src: t.iconUrl, alt: "", "aria-hidden": !0 })
                    : (0, i.jsx)("span", {
                          className: ej.ct,
                          "aria-hidden": !0,
                          children: !t.isLoading && (0, i.jsx)(ei._, { size: "xxs", color: d.A.colors.ICON_SUBTLE }),
                      }),
        }),
    });
}
function eb(e) {
    let { played: t, totalCount: l } = e,
        n = t.slice(0, 2),
        a = l - n.length;
    return (0, i.jsxs)("div", {
        className: ej.Nw,
        children: [
            n.map((e, t) => (0, i.jsx)(eE, { game: e, notched: a > 0 || t !== n.length - 1 }, `${e.id}-${t}`)),
            a > 0
                ? (0, i.jsx)("span", {
                      className: ej.rO,
                      children: (0, i.jsx)(es.Ay, {
                          mask: es.Ay.Masks.SQUIRCLE,
                          width: 24,
                          height: 24,
                          children: (0, i.jsx)("div", {
                              className: ej.p0,
                              children: (0, i.jsx)(A.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-subtle",
                                  children: $.intl.formatToPlainString(Y.default.JiMMEd, { count: a }),
                              }),
                          }),
                      }),
                  })
                : null,
        ],
    });
}
function eI(e) {
    let { played: t, totalCount: l, children: n } = e;
    return (0, i.jsx)(ea.u, {
        body:
            0 === t.length
                ? $.intl.string(Y.default["7CrlYb"])
                : 1 === t.length
                  ? $.intl.formatToPlainString(Y.default.dbNpK0, { firstGame: t[0].name })
                  : 2 === t.length && 2 === l
                    ? $.intl.formatToPlainString(Y.default.tqVg4M, { firstGame: t[0].name, secondGame: t[1].name })
                    : $.intl.formatToPlainString(Y.default.bxcrSz, {
                          firstGame: t[0].name,
                          secondGame: t[1].name,
                          otherCount: l - 2,
                      }),
        asset: t.length > 0 ? (0, i.jsx)(eb, { played: t, totalCount: t.length }) : void 0,
        assetSize: t.length > 1 ? 43 : 24,
        children: n,
    });
}
function eS(e) {
    let { name: t, applicationIds: l, applicationCount: n, games: a, onClick: s } = e,
        r = eh(a, l);
    return (0, i.jsx)("div", {
        className: ej.ag,
        children: (0, i.jsx)(eI, {
            played: r,
            totalCount: n,
            children: (0, i.jsx)(_.D, {
                className: j()(ej.Nw, ej.Dz),
                "aria-label": $.intl.formatToPlainString(Y.default.o6mBdl, { name: t }),
                onClick: s,
                children: (0, i.jsx)(eb, { played: r, totalCount: n }),
            }),
        }),
    });
}
var eC = l(189043);
function ey(e) {
    let { guildId: t, entries: l, stat: n, games: a, currentUserEntry: s, currentUserPillarRef: r, onClick: d } = e,
        c = {
            1: { column: eC.HC, pillar: eC.P5 },
            2: { column: eC.th, pillar: eC.Vk },
            3: { column: eC.Ou, pillar: eC.el },
        };
    return (0, i.jsx)("div", {
        className: eC.pI,
        role: "list",
        "aria-label": $.intl.string(Y.default.wKXLfQ),
        children: l.map((e, l) =>
            (0, i.jsx)(
                eT,
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
function eT(e) {
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
        x = eh(c, l.application_ids),
        h = ef(t, l),
        { primary: f } = ee(l, d),
        g = 1 === n ? I._3.SIZE_48 : I._3.SIZE_40,
        v = a.useRef(null),
        p = j()(eC.dR, { [eC.m$]: 1 === n, [eC.wd]: 2 === n, [eC.p0]: 3 === n }),
        N = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: eC.R3,
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
                    className: j()(eC.DX, r),
                    children: [
                        (0, i.jsx)(S.D, {
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            lineClamp: 1,
                            className: eC.IY,
                            children: (0, i.jsx)(C.g, {
                                name: h.displayName,
                                colorString: h.member?.colorString ?? null,
                                colorStrings: h.roleColorStrings,
                            }),
                        }),
                        (0, i.jsx)(eI, {
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
                ? (0, i.jsx)(V.A, {
                      targetElementRef: v,
                      user: h.user,
                      guildId: t,
                      children: (e) =>
                          (0, i.jsx)(_.D, {
                              ...e,
                              className: eC.fs,
                              innerRef: v,
                              onClick: (t) => {
                                  (m?.(), e.onClick(t));
                              },
                              children: N,
                          }),
                  })
                : (0, i.jsx)("div", { className: eC.fs, children: N }),
    });
}
var ek = l(652215),
    eR = l(219047);
function ew(e) {
    let t,
        l,
        n,
        { guildId: s, data: r, inModal: d = !1 } = e,
        { stat: c, entries: o } = r,
        u = (0, v.bG)([w.default], () => w.default.getCurrentUser()?.id),
        m = a.useMemo(() => o.find((e) => e.user_id === u), [o, u]),
        h = a.useMemo(() => {
            let e = o.slice(0, 20);
            return null == m || e.includes(m) ? e : [...e, m];
        }, [o, m]),
        g = a.useMemo(() => Array.from(new Set(h.map((e) => e.user_id))), [h]);
    (0, T.k6)(s, g);
    let N =
            ((t = a.useMemo(() => Array.from(new Set(h.flatMap((e) => e.application_ids))), [h])),
            (l = (0, eo.A)(t)),
            (n = (0, v.yK)([ec.A], () => t.map((e) => ec.A.didFetchingApplicationFail(e)))),
            a.useMemo(() => {
                let e = new Map();
                return (
                    t.forEach((t, i) => {
                        let a = l[i];
                        e.set(
                            t,
                            null != a
                                ? { id: t, name: a.name, iconUrl: a.getIconURL(64) ?? void 0, isLoading: !1 }
                                : em(t, !n[i]),
                        );
                    }),
                    e
                );
            }, [t, l, n])),
        A = W(r),
        E = F(r),
        b = "podium" === E,
        I = H({ expanded: d }),
        { scrollerRef: S, scrollerNode: C, userRowRef: y, floatingRowPosition: k, scrollToUserRow: R } = G();
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
                    x.default.track(ek.HAw.LEADERBOARD_END_IMPRESSION, {
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
    let D = null != k,
        M = a.useMemo(() => (b ? h.slice(3) : h), [b, h]),
        L = a.useMemo(() => {
            let e = null == m || M.includes(m) ? M : [...M, m];
            return e.length > 0 ? e : h;
        }, [M, m, h]),
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
        O = a.useCallback(
            (e) => {
                x.default.track(ek.HAw.LEADERBOARD_CLICK, {
                    location: e,
                    guild_id: s,
                    leaderboard_state: E,
                    leaderboard_view: I,
                });
            },
            [s, E, I],
        ),
        B = null == m && null != u,
        z = a.useCallback(
            (e) => {
                let t = e === m;
                return (0, i.jsx)(
                    ev,
                    {
                        guildId: s,
                        entry: e,
                        stat: c,
                        games: N,
                        isCurrentUser: t,
                        shouldDimForCurrentUser: t && D,
                        rowRef: t ? y : void 0,
                        onClick: () => O("row"),
                        metricWidth: P ?? void 0,
                    },
                    `${e.rank}-${e.user_id}`,
                );
            },
            [D, m, N, s, c, y, O, P],
        );
    if (A)
        return (0, i.jsx)("div", {
            className: eR.Cm,
            children: (0, i.jsx)(X, { guildId: s, onActivitySharingClick: () => O("activity_sharing") }),
        });
    let K = [h[0], h[1], h[2]],
        q = (0, i.jsx)("div", {
            ref: U,
            className: eR.V$,
            "aria-hidden": !0,
            children: L.map((e) => (0, i.jsx)(eA, { entry: e, stat: c }, e.user_id)),
        });
    return null == P
        ? (0, i.jsxs)("div", { className: eR.rf, children: [q, (0, i.jsx)(f.eU, {})] })
        : (0, i.jsxs)("div", {
              className: eR.rf,
              children: [
                  q,
                  (0, i.jsxs)("div", {
                      className: eR.SY,
                      children: [
                          (0, i.jsxs)(p.d_, {
                              className: j()(eR.p_, { [eR.zE]: d, [eR.Ng]: B }),
                              ref: S,
                              children: [
                                  b &&
                                      (0, i.jsx)(ey, {
                                          guildId: s,
                                          entries: K,
                                          stat: c,
                                          games: N,
                                          currentUserEntry: m,
                                          currentUserPillarRef: y,
                                          onClick: () => O("podium"),
                                      }),
                                  M.map(z),
                              ],
                          }),
                          (null != m && null != k) || B
                              ? (0, i.jsx)("div", { className: j()(eR.Dz, "top" !== k || B ? eR.qV : eR.gN) })
                              : null,
                          null != m &&
                              null != k &&
                              (0, i.jsx)(_.D, {
                                  className: j()(eR.z$, "top" === k ? eR.aG : eR.Ie),
                                  "aria-label": $.intl.string(Y.default.d0Z8kd),
                                  onClick: R,
                                  children: (0, i.jsx)(ev, {
                                      guildId: s,
                                      entry: m,
                                      stat: c,
                                      games: N,
                                      isCurrentUser: !0,
                                      shouldDimForCurrentUser: !1,
                                      isFloating: !0,
                                      onClick: () => O("row"),
                                      metricWidth: P ?? void 0,
                                  }),
                              }),
                          B && (0, i.jsx)(eM, { guildId: s, onActivitySharingClick: () => O("activity_sharing") }),
                      ],
                  }),
                  (0, i.jsx)(eD, { computedAt: r.computed_at, inModal: d }),
              ],
          });
}
function eD(e) {
    let { computedAt: t, inModal: l } = e,
        n = (0, i.jsxs)("div", {
            className: eR.z8,
            children: [
                (0, i.jsx)(N.RefreshIcon, { size: "xxs", color: d.A.colors.ICON_SUBTLE, "aria-hidden": !0 }),
                (0, i.jsx)(A.E, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: $.intl.string(Y.default["/nma+a"]),
                }),
            ],
        });
    return null == t
        ? (0, i.jsx)("div", { className: eR.qr, children: n })
        : (0, i.jsx)("div", {
              className: j()(eR.qr, { [eR.zE]: l }),
              tabIndex: 0,
              children: (0, i.jsx)(o.m, {
                  text: $.intl.formatToPlainString(Y.default["1bt50t"], { timestamp: (0, D.mk)(new Date(t)) }),
                  position: "bottom",
                  children: n,
              }),
          });
}
function eM(e) {
    let { guildId: t, onActivitySharingClick: l } = e,
        { isSharingActivity: n, isSharingActivityInGuild: a, hasPersonalizationConsent: s } = (0, L.T4)(t),
        r = $.intl.string(Y.default.toxuHd),
        d = !1;
    ((n && a) || ((r = $.intl.string(Y.default["8y885d"])), (d = !0)),
        s || ((r = $.intl.string(Y.default.mTARYx)), (d = !0)));
    let c = (0, v.bG)([w.default], () => w.default.getCurrentUser()),
        o = M.Ay.useName(t, void 0, c),
        u = (0, v.bG)([R.Ay], () => R.Ay.getMember(t, c?.id ?? "")),
        m = (0, k.gn)(t, c?.id, u?.colorStrings ?? null);
    return null == c
        ? null
        : (0, i.jsxs)("div", {
              className: eR.Xx,
              children: [
                  (0, i.jsxs)("div", {
                      className: eR.kd,
                      children: [
                          (0, i.jsxs)("div", {
                              className: eR.nk,
                              children: [
                                  (0, i.jsx)(E.A, { children: $.intl.string(Y.default["oHdW+u"]) }),
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
                              className: eR.SA,
                              "aria-hidden": !0,
                          }),
                          (0, i.jsxs)("div", {
                              className: eR.ko,
                              children: [
                                  (0, i.jsx)(S.D, {
                                      variant: "heading-sm/semibold",
                                      color: "text-default",
                                      lineClamp: 1,
                                      children: (0, i.jsx)(C.g, {
                                          name: o,
                                          colorString: u?.colorString ?? null,
                                          colorStrings: m,
                                      }),
                                  }),
                                  (0, i.jsx)("div", {
                                      className: eR.LF,
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
                          className: eR.rl,
                          children: (0, i.jsx)(y.$, {
                              variant: "secondary",
                              size: "sm",
                              text: $.intl.string(Y.default.fMbgeZ),
                              onClick: () => {
                                  (l(), q(t));
                              },
                          }),
                      }),
              ],
          });
}
var eL = l(224640),
    eU = l(20742),
    eG = l(515746);
function eP(e) {
    let { data: t } = e,
        l = (0, B.K)(t.stat),
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
                (0, ed.A)(() => n(Date.now()), s ? null : r),
                a.useMemo(
                    () => ({
                        ended: s,
                        endDate: new Date(t),
                        badgeLabel: s
                            ? $.intl.string(Y.default["J8r/7L"])
                            : $.intl.formatToPlainString(Y.default["PuaR+2"], { days: Math.ceil(i / O.A.Millis.DAY) }),
                    }),
                    [s, t, i],
                )
            );
        })(t.week_start_ts),
        d = P.PZ.useSetting(),
        c = 2 > (0, D.m_)(s, new Date()) ? (0, D.mk)(s, !1, d) : (0, D.i$)(s, "L LT", d),
        o = n
            ? $.intl.format(Y.default.kG9XmM, { endedAt: c, nextStatName: (0, B.K)(t.next_stat).name })
            : $.intl.format(Y.default["X+VLqi"], { statQuestion: l.question, endsAt: c });
    return (0, i.jsx)(ea.u, {
        title: l.name,
        body: o,
        position: "top",
        children: (0, i.jsx)("div", {
            className: eG.q,
            tabIndex: 0,
            children: (0, i.jsx)(A.E, {
                variant: "text-xs/semibold",
                color: n ? "text-muted" : "text-brand",
                children: r,
            }),
        }),
    });
}
function eO(e) {
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
                ek.HAw.LEADERBOARD_HOVER,
                {
                    guild_id: n.guildId,
                    duration: Math.round(l) / 1e3,
                    leaderboard_state: F(n.data),
                    leaderboard_view: H({ expanded: n.expanded }),
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
var eB = l(460614);
function eW(e) {
    let { guildId: t, data: l, modalProps: n } = e,
        a = eO({ guildId: t, data: l, expanded: !0 });
    return (0, i.jsx)(eL.d, {
        size: "lg",
        "aria-label": z(l),
        ...n,
        children: (0, i.jsxs)("div", {
            ref: a,
            children: [
                (0, i.jsxs)("div", {
                    className: eB.wx,
                    children: [
                        (0, i.jsxs)("div", {
                            className: eB.LD,
                            children: [
                                (0, i.jsx)(c.TrophyIcon, {
                                    size: "xs",
                                    color: d.A.colors.ICON_SUBTLE,
                                    "aria-hidden": !0,
                                }),
                                (0, i.jsx)(S.D, { variant: "heading-sm/medium", className: eB.DD, children: z(l) }),
                                (0, i.jsx)(eP, { data: l }),
                            ],
                        }),
                        (0, i.jsx)(eU.s_, {}),
                    ],
                }),
                (0, i.jsx)("div", { className: eB.rf, children: (0, i.jsx)(ew, { guildId: t, data: l, inModal: !0 }) }),
            ],
        }),
    });
}
var ez = l(331322),
    eF = l(452027),
    eH = l(103557),
    eK = l(825484),
    eq = l(95477),
    eY = l(241326),
    e$ = l(683071),
    eQ = l(2553),
    eX = l(405810),
    eV = l(967198),
    eZ = l(488428),
    eJ = l(776231);
let e0 = (0, l(676279).cy)();
function e1(e, t, l) {
    let n = l.startsWith("a_"),
        i = n ? (e0 ? "webp" : "gif") : e0 ? "webp" : "jpg",
        { CDN_HOST: a, API_ENDPOINT: s } = window.GLOBAL_ENV,
        r = ek.Rsh.GUILD_SPACE_IMAGE_TEXT_WIDGET_IMAGE(e, t, l, i),
        d = null != a ? `https://${a}${r}` : location.protocol + s + r,
        c = { size: (0, eJ.kr)(500 * (0, eJ.mZ)()) };
    return (
        "jpg" === i && (c.quality = "lossless"), "webp" === i && n && (c.animated = !0), (d += `?${eZ.stringify(c)}`)
    );
}
var e2 = l(868602),
    e3 = l(445187),
    e6 = l(299285),
    e8 = l(831544),
    e7 = l(28863),
    e4 = l(148166),
    e5 = l(427209),
    e9 = l(294454),
    te = l(605810);
function tt(e) {
    let { target: t, tabIndex: n } = e;
    return (0, i.jsx)(o.m, {
        text: $.intl.string($.t.RDE0Sc),
        ariaHidden: !0,
        children: (0, i.jsx)("button", {
            type: "button",
            className: te.ql,
            tabIndex: n,
            "aria-label": $.intl.string($.t.Ej3B3Y),
            onClick: () => {
                (0, K.openModalLazy)(
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
                            l.e("252264"),
                            l.e("960478"),
                            l.e("466322"),
                            l.e("593176"),
                            l.e("121435"),
                            l.e("592731"),
                            l.e("53374"),
                            l.e("170653"),
                            l.e("836545"),
                            l.e("273232"),
                            l.e("784041"),
                            l.e("124060"),
                            l.e("858514"),
                            l.e("240511"),
                            l.e("344265"),
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
                            l.e("869546"),
                            l.e("843719"),
                            l.e("817852"),
                            l.e("831145"),
                            l.e("556967"),
                            l.e("643612"),
                            l.e("187856"),
                            l.e("577084"),
                            l.e("652898"),
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
                            l.e("371482"),
                            l.e("662355"),
                            l.e("126780"),
                            l.e("455924"),
                            l.e("844780"),
                            l.e("360781"),
                            l.e("959134"),
                            l.e("631825"),
                            l.e("784727"),
                            l.e("851243"),
                            l.e("220518"),
                            l.e("237834"),
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
                    { stackingBehavior: "stack", modalKey: e9.aU },
                );
            },
            children: (0, i.jsx)(e5.A, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
        }),
    });
}
var tl = l(272984);
function tn(e) {
    let { artist: t, itemProps: l } = e,
        n = null != t.artist_image_hash ? tl.RQ.IMAGE(t.artist_image_hash) : null,
        s = a.useMemo(
            () => ({
                kind: "artist",
                shareUrl: tl.RQ.WEB_OPEN(tl.M0.ARTIST, t.artist_external_id),
                title: t.artist_name ?? t.artist_external_id,
                subtitle: null,
                imageUrl: n,
            }),
            [t.artist_external_id, t.artist_name, n],
        ),
        r = (0, i.jsx)(e4.R, { src: n, isCircular: !0, FallbackIcon: e8.MicrophoneIcon });
    return null == t.artist_name
        ? (0, i.jsx)("div", { className: te.Nr, children: (0, i.jsx)("div", { ...l, className: te.MT, children: r }) })
        : (0, i.jsxs)("div", {
              className: te.Nr,
              children: [
                  (0, i.jsxs)(e7.Anchor, {
                      ...l,
                      className: te.MT,
                      href: s.shareUrl,
                      useDefaultUnderlineStyles: !1,
                      children: [
                          r,
                          (0, i.jsx)("span", {
                              className: te.Qq,
                              children: (0, i.jsx)(A.E, {
                                  className: te.DD,
                                  tag: "span",
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  lineClamp: 2,
                                  children: t.artist_name,
                              }),
                          }),
                      ],
                  }),
                  (0, i.jsx)(tt, { target: s, tabIndex: l.tabIndex }),
              ],
          });
}
var ti = l(872351),
    ta = l(708988),
    ts = l(104171),
    tr = l(628137);
let td = "none",
    tc = (e, t) => (0, i.jsx)(A.E, { tag: "span", variant: "text-sm/semibold", color: "text-default", children: e }, t);
function to(e) {
    return e;
}
function tu(e) {
    return e?.direction ?? td;
}
function tm(e) {
    return $.intl.formatToPlainString(Y.default["7X+3f8"], { count: e });
}
function tx(e) {
    let t = e?.plays_change_percent;
    if (null == t) return null;
    let l = Math.round(Math.abs(t));
    return 0 === l
        ? null
        : { direction: t > 0 ? "up" : "down", label: $.intl.formatToPlainString(Y.default["h+LUpk"], { percent: l }) };
}
var th = l(633099);
function tf(e) {
    let { trend: t } = e,
        l = "up" === t.direction ? ti.z : ta.M;
    return (0, i.jsxs)("span", {
        className: j()(th.GW, { [th.$J]: "up" === t.direction, [th.KW]: "down" === t.direction }),
        children: [
            (0, i.jsx)(l, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
            (0, i.jsx)(A.E, { tag: "span", variant: "text-sm/medium", color: "none", children: t.label }),
        ],
    });
}
function tg(e) {
    var t;
    let { guildId: l, song: n } = e,
        s = a.useMemo(() => (n.facepile_user_ids ?? []).slice(0, 3), [n.facepile_user_ids]);
    (0, T.k6)(l, s);
    let r = (0, v.yK)([w.default], () => s.map((e) => w.default.getUser(e)), [s]),
        d = a.useMemo(() => r.filter((e) => null != e), [r]);
    if (0 === d.length) return null;
    let c = n.unique_listeners - d.length;
    return (0, i.jsx)("span", {
        className: th.WM,
        role: "group",
        "aria-label":
            ((t = n.unique_listeners),
            $.intl.formatToPlainString(Y.default.AzIhRB, { count: t, trend: td, countHook: to })),
        children: (0, i.jsx)(ts.Ay, {
            users: d,
            guildId: l,
            size: ts.DN.SIZE_24,
            max: d.length,
            count: n.unique_listeners,
            hideMoreUsers: c <= 0,
            renderMoreUsers: () =>
                (0, i.jsx)("span", {
                    className: th.ju,
                    children: (0, i.jsx)(A.E, {
                        tag: "span",
                        variant: "text-xs/semibold",
                        color: "text-subtle",
                        children: $.intl.formatToPlainString(Y.default.bFIg0R, { count: c }),
                    }),
                }),
        }),
    });
}
function tj(e) {
    let { isCompact: t, headline: l, detail: n, trend: a } = e;
    return null == l && null == n && null == a
        ? null
        : (0, i.jsx)("div", {
              className: j()(th.yp, { [th.Fl]: t }),
              children: (0, i.jsxs)("div", {
                  className: th.QD,
                  children: [
                      null != l && (0, i.jsx)(A.E, { variant: "text-md/semibold", color: "text-default", children: l }),
                      (0, i.jsxs)("div", {
                          className: th._0,
                          children: [
                              null != n &&
                                  (0, i.jsx)(A.E, {
                                      tag: "span",
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: n,
                                  }),
                              null != a && (0, i.jsx)(tf, { trend: a }),
                          ],
                      }),
                  ],
              }),
          });
}
function tv(e) {
    var t;
    let { guildId: l, isCompact: n, canShowEmbed: a, song: s } = e,
        r = tx(s);
    return (0, i.jsxs)("div", {
        className: j()(th.yp, { [th.Fl]: n }),
        children: [
            a && (0, i.jsx)(tr.A, { className: th.aF, resourceType: tl.M0.TRACK, resourceId: s.track_external_id }),
            (0, i.jsxs)("div", {
                className: th.QD,
                children: [
                    (0, i.jsx)(tg, { guildId: l, song: s }),
                    (0, i.jsxs)("div", {
                        className: th._0,
                        children: [
                            (0, i.jsx)(A.E, {
                                tag: "span",
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children:
                                    ((t = s.plays),
                                    $.intl.format(Y.default["7hHUIS"], { count: t, trend: tu(r), countHook: tc })),
                            }),
                            null != r && (0, i.jsx)(tf, { trend: r }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var tp = l(197935),
    t_ = l(915734);
function tN(e) {
    let { label: t, items: l, isCompact: n, getItemKey: a, renderItem: s } = e;
    return (0, i.jsx)("div", {
        className: j()(t_.Dk, { [t_.yI]: n }),
        children: (0, i.jsx)(tp.A, {
            items: l,
            getItemKey: a,
            renderItem: s,
            gap: 8,
            edgeFade: 40,
            actionsClassName: t_.o1,
            "aria-label": t,
        }),
    });
}
var tA = (((n = {}).TOP_SONGS = "top_songs"), (n.TOP_ARTISTS = "top_artists"), (n.TOP_LISTENERS = "top_listeners"), n);
let tE = ["top_songs", "top_artists", "top_listeners"];
function tb(e) {
    return 1 > e.ranked_songs.reduce((e, t) => e + t.plays, 0);
}
function tI(e) {
    switch (e) {
        case "top_songs":
            return $.intl.string(Y.default.KgeEtx);
        case "top_artists":
            return $.intl.string(Y.default.RYxWTS);
        case "top_listeners":
            return $.intl.string(Y.default.KO73KB);
    }
}
function tS(e, t) {
    return `popular-music-tab-${e}-${t}`;
}
function tC(e) {
    return `popular-music-panel-${e}`;
}
var ty = l(742452);
function tT(e) {
    return e.artist_external_id;
}
function tk(e, t) {
    return (0, i.jsx)(tn, { artist: e, itemProps: t });
}
function tR(e) {
    var t, l;
    let n,
        a,
        s,
        { isCompact: r, data: d } = e;
    if (0 === d.ranked_artists.length) return null;
    let c = tx(d.summary);
    return (0, i.jsxs)("div", {
        className: ty.U,
        children: [
            (0, i.jsx)(tN, {
                label: tI(tA.TOP_ARTISTS),
                items: d.ranked_artists,
                isCompact: r,
                getItemKey: tT,
                renderItem: tk,
            }),
            (0, i.jsx)(tj, {
                isCompact: r,
                headline:
                    ((t = d.summary),
                    null == (n = t?.distinct_songs) || n < 1
                        ? null
                        : $.intl.formatToPlainString(Y.default.W8etVA, { count: n })),
                detail:
                    ((l = d.summary),
                    (a = l?.listener_count),
                    (s = l?.distinct_artists),
                    null == a || a < 1 || null == s || s < 1
                        ? null
                        : $.intl.format(Y.default.yGqf0D, {
                              memberCount: a,
                              artistCount: s,
                              trend: tu(c),
                              memberCountHook: tc,
                              artistCountHook: tc,
                          })),
                trend: c,
            }),
        ],
    });
}
var tw = l(803613),
    tD = l(682348),
    tM = l(73152),
    tL = l(57129),
    tU = l(280911);
function tG(e) {
    let { guildId: t, isCompact: l } = e,
        n = (0, v.bG)([w.default], () => w.default.getCurrentUser()),
        a = (0, v.bG)([R.Ay], () => (null != n ? R.Ay.getMember(t, n.id) : null)),
        s = (0, k.gn)(t, n?.id, a?.colorStrings ?? null),
        r = M.Ay.useName(t, void 0, n);
    return (0, i.jsxs)("div", {
        className: tU.D_,
        children: [
            (0, i.jsxs)("div", {
                className: tU.FI,
                "aria-hidden": !0,
                children: [
                    !l &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("span", { className: tU.eu, children: (0, i.jsx)(tw.D, { size: "sm" }) }),
                                (0, i.jsxs)("span", {
                                    className: tU.r$,
                                    children: [
                                        (0, i.jsx)("span", { className: tU.Om }),
                                        (0, i.jsx)("span", { className: tU.Om }),
                                        (0, i.jsx)("span", { className: tU.Om }),
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
                className: tU.Qq,
                children: [
                    (0, i.jsx)(S.D, {
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        lineClamp: 1,
                        children: (0, i.jsx)(C.g, {
                            name: $.intl.formatToPlainString(Y.default.subXXA, { name: r }),
                            colorString: a?.colorString ?? null,
                            colorStrings: s,
                        }),
                    }),
                    (0, i.jsx)(A.E, {
                        variant: "text-xs/medium",
                        color: "text-strong",
                        lineClamp: l ? 2 : 1,
                        children: $.intl.string(Y.default.y1neEe),
                    }),
                ],
            }),
        ],
    });
}
function tP(e) {
    let { widgetName: t, isCompact: l } = e;
    return (0, i.jsxs)("div", {
        className: tU.D_,
        children: [
            !l &&
                (0, i.jsx)("span", {
                    className: tU.eu,
                    "aria-hidden": !0,
                    children: (0, i.jsx)(tD._, { size: "sm", color: d.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
                }),
            (0, i.jsxs)("div", {
                className: tU.Qq,
                children: [
                    (0, i.jsx)(S.D, {
                        variant: "heading-sm/semibold",
                        color: "text-strong",
                        lineClamp: 1,
                        children: $.intl.string(tL.default.WhdCGP),
                    }),
                    (0, i.jsx)(A.E, {
                        variant: "text-xs/medium",
                        color: "text-strong",
                        lineClamp: l ? 2 : 1,
                        children: $.intl.formatToPlainString(Y.default["49Jv0I"], { widgetName: t }),
                    }),
                ],
            }),
        ],
    });
}
function tO(e) {
    let { guildId: t, widgetName: n, isCompact: a, isSpotifyConnected: s } = e;
    return (0, i.jsxs)("div", {
        className: tU.UX,
        children: [
            s ? (0, i.jsx)(tP, { widgetName: n, isCompact: a }) : (0, i.jsx)(tG, { guildId: t, isCompact: a }),
            (0, i.jsx)(y.$, {
                variant: "secondary",
                size: "sm",
                icon: s ? void 0 : tM.E,
                text: s ? $.intl.string($.t.KY0ilj) : $.intl.string(Y.default.jB1fWC),
                onClick: () => {
                    (0, K.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([
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
var tB = l(625903),
    tW = l(780964),
    tz = l(766075),
    tF = l(30370),
    tH = l(123894);
function tK() {
    let e = (0, v.bG)([tF.A], () => tF.A.getAccounts().some((e) => e.type === ek.fg2.SPOTIFY && e.showActivity));
    return (0, i.jsx)(L.Zj, {
        className: tH.w,
        title: $.intl.string(Y.default.ULK65a),
        body: $.intl.format(e ? Y.default.BLuvck : Y.default["Ko3a0+"], { memberCount: 2 }),
        action: e
            ? null
            : (0, i.jsx)(y.$, {
                  variant: "secondary",
                  size: "sm",
                  icon: tB.SettingsIcon,
                  text: $.intl.string($.t["3D5yo/"]),
                  onClick: () => (0, tz.openUserSettings)(tW.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING),
              }),
    });
}
function tq() {
    return (0, i.jsx)(L.Zj, {
        className: tH.w,
        title: $.intl.string(Y.default.ULK65a),
        body: $.intl.format(Y.default.ZQxU8v, { memberCount: 2 }),
    });
}
var tY = l(109487),
    t$ = l(279543);
function tQ(e) {
    let { isCompact: t } = e;
    return (0, i.jsxs)("div", {
        className: t$.qr,
        children: [
            (0, i.jsxs)("div", {
                className: t$.Os,
                children: [
                    (0, i.jsx)("span", {
                        className: t$.Kk,
                        children: (0, i.jsx)(N.RefreshIcon, {
                            size: "xxs",
                            color: d.A.colors.ICON_SUBTLE,
                            "aria-hidden": !0,
                        }),
                    }),
                    (0, i.jsx)(A.E, {
                        className: t$.Pf,
                        tag: "span",
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: $.intl.string(Y.default["3/DOFo"]),
                    }),
                ],
            }),
            (0, i.jsxs)(e7.Anchor, {
                className: t$.al,
                href: tl.RQ.WEB_HOME,
                "aria-label": $.intl.string(Y.default["jUr+wF"]),
                children: [
                    (0, i.jsx)("span", {
                        className: t$.Kk,
                        children: (0, i.jsx)(tY.L, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    }),
                    !t &&
                        (0, i.jsx)(A.E, {
                            className: t$.G2,
                            tag: "span",
                            variant: "text-xs/medium",
                            color: "none",
                            children: $.intl.string(Y.default.ZdPp2q),
                        }),
                ],
            }),
        ],
    });
}
var tX = l(65154),
    tV = l(329177),
    tZ = l(242226);
function tJ(e) {
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
            ((t = (0, v.bG)([w.default], () => w.default.getUser(r), [r])),
            (l = (0, v.bG)([R.Ay], () => R.Ay.getMember(s, r), [s, r])),
            (n = (0, k.gn)(s, r, l?.colorStrings ?? null)),
            (a = M.Ay.useName(s, void 0, t)),
            {
                user: t,
                colorString: l?.colorString ?? null,
                roleColorStrings: n,
                displayName: m ? $.intl.formatToPlainString(Y.default.subXXA, { name: a }) : a,
            }),
        { user: p } = g;
    return null == p
        ? null
        : (0, i.jsxs)("div", {
              ref: f,
              "aria-hidden": h,
              inert: h,
              className: j()(tZ.nM, { [tZ.Bh]: m && !h, [tZ.lR]: x }),
              children: [
                  (0, i.jsx)(t0, { guildId: s, user: p, identity: g, rank: o, lastTrack: c?.last_track ?? null }),
                  null != c &&
                      (0, i.jsxs)("div", {
                          className: j()(tZ.Mx, { [tZ.dA]: u }),
                          children: [
                              (0, i.jsx)(tX.S, { size: "xxs", color: d.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                              (0, i.jsx)(A.E, {
                                  variant: "text-sm/medium",
                                  color: "text-strong",
                                  children: tm(c.plays),
                              }),
                          ],
                      }),
                  null != c &&
                      !u &&
                      (0, i.jsx)(t6, { artists: c.recent_artists ?? [], artistCount: c.artist_count ?? null }),
              ],
          });
}
function t0(e) {
    let { guildId: t, user: l, identity: n, rank: s, lastTrack: r } = e,
        d = a.useRef(null);
    return (0, i.jsx)(V.A, {
        targetElementRef: d,
        user: l,
        guildId: t,
        children: (e) =>
            (0, i.jsxs)(_.D, {
                ...e,
                innerRef: d,
                className: tZ.D_,
                children: [
                    null != s &&
                        (0, i.jsx)(E.A, { children: $.intl.formatToPlainString(Y.default.I4JiAQ, { rank: s }) }),
                    (0, i.jsxs)("span", {
                        className: tZ.R3,
                        children: [
                            (0, i.jsx)(b.eu, {
                                size: I._3.SIZE_32,
                                src: l.getAvatarURL(t, (0, I.FT)(I._3.SIZE_32)) ?? void 0,
                                "aria-hidden": !0,
                            }),
                            1 === s &&
                                (0, i.jsx)("span", {
                                    className: tZ.ie,
                                    "aria-hidden": !0,
                                    children: (0, i.jsx)(tV.CrownIcon, { size: "xxs", color: "currentColor" }),
                                }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tZ.Dc,
                        children: [
                            (0, i.jsx)(S.D, {
                                variant: "heading-sm/semibold",
                                color: "text-default",
                                lineClamp: 1,
                                children: (0, i.jsx)(C.g, {
                                    name: n.displayName,
                                    colorString: n.colorString,
                                    colorStrings: n.roleColorStrings,
                                }),
                            }),
                            (0, i.jsx)(t2, { track: r }),
                        ],
                    }),
                ],
            }),
    });
}
function t1(e, t) {
    return (0, i.jsx)(A.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: e }, t);
}
function t2(e) {
    let { track: t } = e,
        l = t?.track_title;
    if (null == l) return null;
    let n = t?.artist_name;
    return (0, i.jsx)(A.E, {
        variant: "text-xs/medium",
        color: "text-subtle",
        lineClamp: 1,
        children:
            null != n
                ? $.intl.format(Y.default.QqaqBg, { trackTitle: l, artistName: n, highlightHook: t1 })
                : $.intl.format(Y.default.ZMJ8Mt, { trackTitle: l, highlightHook: t1 }),
    });
}
function t3(e) {
    let { artist: t, notched: l } = e,
        [n, s] = a.useState(!1),
        r = null != t.artist_image_hash ? tl.RQ.IMAGE(t.artist_image_hash) : null;
    return (0, i.jsx)("span", {
        className: tZ.sG,
        children: (0, i.jsx)(es.Ay, {
            mask: l ? es.l8[24] : es.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null == r || n
                    ? (0, i.jsx)("span", {
                          className: tZ.Ql,
                          children: (0, i.jsx)(e8.MicrophoneIcon, { size: "xxs", color: d.A.colors.ICON_SUBTLE }),
                      })
                    : (0, i.jsx)("img", { className: tZ.v2, src: r, alt: "", loading: "lazy", onError: () => s(!0) }),
        }),
    });
}
function t6(e) {
    let { artists: t, artistCount: l } = e,
        n = t.slice(0, 3),
        a = (l ?? t.length) - n.length;
    return (0, i.jsx)("div", {
        className: tZ.Rh,
        "aria-hidden": !0,
        children:
            n.length > 0 &&
            (0, i.jsxs)("div", {
                className: tZ.W$,
                children: [
                    n.map((e, t) =>
                        (0, i.jsx)(
                            t3,
                            { artist: e, notched: a > 0 || t !== n.length - 1 },
                            `${e.artist_external_id}-${e.artist_image_hash}`,
                        ),
                    ),
                    a > 0 &&
                        (0, i.jsx)("span", {
                            className: tZ.sG,
                            children: (0, i.jsx)(es.Ay, {
                                mask: es.Ay.Masks.SQUIRCLE,
                                width: 24,
                                height: 24,
                                children: (0, i.jsx)("div", {
                                    className: tZ.ag,
                                    children: (0, i.jsx)(A.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: $.intl.formatToPlainString(Y.default.bFIg0R, { count: a }),
                                    }),
                                }),
                            }),
                        }),
                ],
            }),
    });
}
var t8 = l(897130);
function t7(e) {
    let { guildId: t, isCompact: l, data: n, upsell: s } = e,
        r = n.top_listeners,
        d = (0, v.bG)([w.default], () => w.default.getCurrentUser()?.id),
        c = r.findIndex((e) => e.user_id === d),
        o = -1 === c ? null : r[c],
        u = a.useMemo(() => r.map((e) => e.user_id), [r]);
    (0, T.k6)(t, u);
    let { scrollerRef: m, userRowRef: x, floatingRowPosition: h } = G(),
        f = null != h;
    return n.top_listeners.length < 2
        ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(tq, {}), s] })
        : (0, i.jsxs)("div", {
              className: t8.SY,
              children: [
                  (0, i.jsxs)(p.d_, {
                      className: t8.p_,
                      ref: m,
                      children: [
                          r.map((e, n) => {
                              let a = e.user_id === d;
                              return (0, i.jsx)(
                                  tJ,
                                  {
                                      guildId: t,
                                      userId: e.user_id,
                                      listener: e,
                                      rank: n + 1,
                                      isCompact: l,
                                      isCurrentUser: a,
                                      shouldDimForCurrentUser: a && f,
                                      rowRef: a ? x : void 0,
                                  },
                                  e.user_id,
                              );
                          }),
                          s ??
                              (null != d &&
                                  null == o &&
                                  (0, i.jsx)(tJ, {
                                      guildId: t,
                                      userId: d,
                                      listener: null,
                                      rank: null,
                                      isCompact: l,
                                      isCurrentUser: !0,
                                      shouldDimForCurrentUser: f,
                                      rowRef: x,
                                  })),
                      ],
                  }),
                  null != d &&
                      null != h &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", { className: "top" === h ? t8.gN : t8.qV }),
                              (0, i.jsx)("div", {
                                  className: j()(t8.z$, "top" === h ? t8.aG : t8.Ie),
                                  children: (0, i.jsx)(tJ, {
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
var t4 = l(717683);
function t5(e) {
    let { isCompact: t } = e;
    return (0, i.jsxs)("div", {
        className: t4.qV,
        "aria-hidden": !0,
        children: [
            (0, i.jsx)("div", {
                className: j()(t4.Dk, { [t4.yI]: t }),
                children: Array.from({ length: 5 }, (e, t) =>
                    (0, i.jsxs)(
                        "div",
                        {
                            className: t4.Nr,
                            children: [
                                (0, i.jsx)("div", { className: j()(t4.om, t4.xX) }),
                                (0, i.jsxs)("div", {
                                    className: t4.Qq,
                                    children: [
                                        (0, i.jsx)("div", { className: j()(t4.om, t4.DD) }),
                                        (0, i.jsx)("div", { className: j()(t4.om, t4.VA) }),
                                    ],
                                }),
                            ],
                        },
                        t,
                    ),
                ),
            }),
            (0, i.jsxs)("div", {
                className: j()(t4.yp, { [t4.Fl]: t }),
                children: [
                    (0, i.jsx)("div", { className: j()(t4.om, t4.Pl) }),
                    (0, i.jsx)("div", { className: j()(t4.om, t4._0) }),
                ],
            }),
        ],
    });
}
var t9 = l(432017),
    le = l(362704),
    lt = l(782134);
function ll(e) {
    let { song: t, isSelected: l, onSelect: n, itemProps: s } = e,
        r = null != t.cover_art_hash ? tl.RQ.IMAGE(t.cover_art_hash) : null,
        d = a.useMemo(
            () => ({
                kind: "song",
                shareUrl: tl.RQ.WEB_OPEN(tl.M0.TRACK, t.track_external_id),
                title: t.track_title ?? t.track_external_id,
                subtitle: t.artist_name,
                imageUrl: r,
            }),
            [t.track_external_id, t.track_title, t.artist_name, r],
        );
    return (0, i.jsxs)("div", {
        className: te.Nr,
        children: [
            (0, i.jsxs)("button", {
                ...s,
                type: "button",
                className: j()(te.MT, { [te.tY]: l }),
                "aria-pressed": l,
                onClick: () => n(t.track_external_id),
                children: [
                    (0, i.jsxs)(e4.R, {
                        src: r,
                        isCircular: !1,
                        FallbackIcon: t9.T,
                        children: [
                            l &&
                                (0, i.jsx)("span", {
                                    className: j()(te.Lw, te.Kp),
                                    "aria-hidden": !0,
                                    children: (0, i.jsx)(le.Y, { size: "md", color: "currentColor" }),
                                }),
                            (0, i.jsxs)("span", {
                                className: j()(te.Lw, te.vY),
                                children: [
                                    (0, i.jsx)(lt.PlayIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                                    (0, i.jsx)(A.E, {
                                        tag: "span",
                                        variant: "text-xs/semibold",
                                        color: "none",
                                        children: tm(t.plays),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    null != t.track_title &&
                        (0, i.jsxs)("span", {
                            className: te.Qq,
                            children: [
                                (0, i.jsx)(A.E, {
                                    className: te.DD,
                                    tag: "span",
                                    variant: "text-sm/semibold",
                                    color: "text-default",
                                    lineClamp: 1,
                                    children: t.track_title,
                                }),
                                null != t.artist_name &&
                                    (0, i.jsx)(A.E, {
                                        className: te.VA,
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
            (0, i.jsx)(tt, { target: d, tabIndex: s.tabIndex }),
        ],
    });
}
var ln = l(196765),
    li = l(770178);
let la = { view: "top_songs", isCompact: !1, canShowEmbed: !1, selectedTrackId: null },
    ls = (0, ln.v)(() => ({ byWidgetId: {} }));
function lr(e, t) {
    ls.setState((l) => {
        let n = l.byWidgetId[e] ?? la;
        return { byWidgetId: { ...l.byWidgetId, [e]: { ...n, ...t } } };
    });
}
function ld(e) {
    return ls((t) => t.byWidgetId[e]?.view ?? la.view);
}
function lc(e) {
    return ls((t) => t.byWidgetId[e]?.isCompact ?? la.isCompact);
}
function lo(e) {
    return ls((t) => t.byWidgetId[e]?.selectedTrackId ?? la.selectedTrackId);
}
function lu(e, t) {
    (ls.getState().byWidgetId[e] ?? la).view !== t && lr(e, { view: t, selectedTrackId: null });
}
function lm(e) {
    return e.track_external_id;
}
function lx(e) {
    var t;
    let l,
        { guildId: n, widgetId: s, isCompact: r, data: d } = e,
        c = lo(s),
        o = ls((e) => e.byWidgetId[s]?.canShowEmbed ?? la.canShowEmbed),
        u = a.useCallback(
            (e) => {
                let t;
                return (
                    (t = ls.getState().byWidgetId[s]?.selectedTrackId ?? null),
                    void lr(s, { selectedTrackId: t === e ? null : e })
                );
            },
            [s],
        ),
        m = a.useCallback(
            (e, t) => (0, i.jsx)(ll, { song: e, isSelected: e.track_external_id === c, onSelect: u, itemProps: t }),
            [c, u],
        );
    if (0 === d.ranked_songs.length) return null;
    let x = d.ranked_songs.find((e) => e.track_external_id === c) ?? null,
        h = tx(d.summary);
    return (0, i.jsxs)("div", {
        className: ty.U,
        children: [
            (0, i.jsx)(tN, {
                label: tI(tA.TOP_SONGS),
                items: d.ranked_songs,
                isCompact: r,
                getItemKey: lm,
                renderItem: m,
            }),
            null != x
                ? (0, i.jsx)(tv, { guildId: n, isCompact: r, canShowEmbed: o, song: x })
                : (0, i.jsx)(tj, {
                      isCompact: r,
                      headline: (function (e) {
                          let t = e?.listening_time_ms;
                          if (null == t) return null;
                          let l = Math.round(t / O.A.Millis.MINUTE);
                          return l < 1 ? null : $.intl.formatToPlainString(Y.default["+5b01q"], { minutes: l });
                      })(d.summary),
                      detail:
                          ((t = d.summary),
                          null == (l = t?.listener_count) || l < 1
                              ? null
                              : $.intl.format(Y.default.AzIhRB, { count: l, trend: tu(h), countHook: tc })),
                      trend: h,
                  }),
        ],
    });
}
var lh = l(597601),
    lf = l(937863),
    lg = l(871107);
function lj(e) {
    let { view: t } = e,
        l = d.A.colors.ICON_DEFAULT;
    switch (t) {
        case tA.TOP_ARTISTS:
            return (0, i.jsx)(e8.MicrophoneIcon, { size: "xs", color: l, "aria-hidden": !0 });
        case tA.TOP_LISTENERS:
            return (0, i.jsx)(lh.L, { size: "xs", color: l, "aria-hidden": !0 });
        case tA.TOP_SONGS:
            return (0, i.jsx)(t9.T, { size: "xs", color: l, "aria-hidden": !0 });
    }
}
function lv(e) {
    let { widgetId: t, title: l } = e,
        n = lc(t),
        a = ld(t);
    if (!n)
        return (0, i.jsxs)("div", {
            className: lg.$,
            children: [
                (0, i.jsx)("span", {
                    className: lg.K,
                    children: (0, i.jsx)(t9.T, { size: "xs", color: d.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
                }),
                (0, i.jsx)(h.q, { children: l }),
            ],
        });
    let s = tE.map((e) => ({ id: e, label: tI(e), icon: (0, i.jsx)(lj, { view: e }) }));
    return (0, i.jsx)(lf.C, {
        navId: "popular-music-view",
        options: s,
        selectedId: a,
        menuLabel: $.intl.string(Y.default.hFYyGU),
        triggerLabel: $.intl.formatToPlainString(Y.default["/sw0JL"], { widgetName: l, viewName: tI(a) }),
        onSelect: (e) => lu(t, e),
    });
}
var lp = l(77915),
    l_ = l(756936);
function lN(e) {
    return e.default_title ?? $.intl.string(Y.default["5xxUI2"]);
}
var lA = l(890497),
    lE = l(734057),
    lb = l(317525),
    lI = l(576705),
    lS = l(935208),
    lC = l(44167);
l(321073);
var ly = l(485845),
    lT = l(136722),
    lk = l(435183),
    lR = l(155718),
    lw = l(795816),
    lD = l(933958),
    lM = l(574152),
    lL = l(627363),
    lU = l(712440),
    lG = l(733110),
    lP = l(488926),
    lO = l(818023);
async function lB(e) {
    null == ec.A.getApplication(lO.NW) && (await (0, lL.TA)(lO.NW));
    let t = lD.Ay.getEmbeddedActivitiesForChannel(e).every((e) => e.applicationId !== lO.NW);
    return await (0, lw.su)({
        channelId: e,
        applicationId: lO.NW,
        isStart: t,
        embeddedActivitiesManager: (0, lM.A)(),
        renderInFramePool: !0,
    });
}
async function lW(e) {
    let { channel: t, selectedRoleIds: l } = e,
        n = [];
    if (l.length > 0)
        for (let e of (n.push({ id: t.guild_id, type: lR.r2.ROLE, allow: lP.x3, deny: ek.xBc.USE_EMBEDDED_ACTIVITIES }),
        l))
            n.push({ id: e, type: lR.r2.ROLE, allow: ek.xBc.USE_EMBEDDED_ACTIVITIES, deny: lP.x3 });
    let i = await (0, lk.RT)(t.id, { permissionOverwrites: n });
    if (!i.ok) throw i;
}
let lz = [];
var lF = l(344351),
    lH = l(256693),
    lK = l(812901),
    lq = l(317608),
    lY = l(953538);
let l$ = {
    [r.a.IMAGE_TEXT]: {
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
                        (0, i.jsx)(A.E, {
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
                s = t.config,
                [d, c] = a.useState(s.title ?? ""),
                [m, x] = a.useState(s.text ?? ""),
                [h, f] = a.useState(s.image),
                [g, j] = a.useState(null),
                p = (0, v.bG)([eV.A], () => eV.A.getGuildId()),
                _ = void 0 !== h ? h : null != s.image_hash && null != p ? e1(p, t.id, s.image_hash) : null;
            return (0, i.jsxs)(ez.B, {
                gap: 16,
                children: [
                    (0, i.jsx)(eq.k, {
                        label: $.intl.string($.t.gnwWrx),
                        value: d,
                        onChange: function (e) {
                            (j(null), c(e));
                        },
                        maxLength: 100,
                        showCharacterCount: !0,
                    }),
                    (0, i.jsx)(eF.D, {
                        label: $.intl.string($.t.X4IxWL),
                        children: (0, i.jsxs)(ez.B, {
                            gap: 16,
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            className: e2.B,
                            children: [
                                (0, i.jsxs)(ez.B, {
                                    gap: 8,
                                    direction: "horizontal",
                                    children: [
                                        (0, i.jsx)(eX.A, {
                                            variant: "secondary",
                                            text: $.intl.string($.t["MsUY/S"]),
                                            onChange: function (e) {
                                                (j(null), f(e));
                                            },
                                            maxFileSizeBytes: 0xa00000,
                                            onFileSizeError: () => (0, eQ.A)(0xa00000),
                                        }),
                                        null != _ &&
                                            (0, i.jsx)(o.m, {
                                                text: $.intl.string($.t.N86XcP),
                                                ariaHidden: !0,
                                                children: (0, i.jsx)(u.K, {
                                                    variant: "critical-secondary",
                                                    icon: eY.TrashIcon,
                                                    onClick: function () {
                                                        (j(null), f(null));
                                                    },
                                                    "aria-label": $.intl.string($.t.N86XcP),
                                                }),
                                            }),
                                    ],
                                }),
                                null != _ && (0, i.jsx)("img", { className: e2.V, src: _, alt: "" }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(eH.f, {
                        label: $.intl.string($.t.COGMNC),
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
                            children: (0, i.jsx)(e$.w, { type: "critical", children: g }),
                        }),
                    (0, i.jsxs)(eK.e, {
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(y.$, { variant: "secondary", text: $.intl.string($.t["ETE/oC"]), onClick: n }),
                            (0, i.jsx)(y.$, {
                                variant: "primary",
                                text: $.intl.string($.t["R3BPH+"]),
                                onClick: function () {
                                    let e;
                                    if (
                                        ((e = void 0 !== h ? null !== h : null != s.image_hash),
                                        0 === m.length && !e && (j($.intl.string(Y.default.zleX9q)), 1))
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
                r = eO({
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
                          : (0, i.jsx)(ew, { guildId: n, data: l.data })),
                (0, i.jsx)("div", { ref: d, children: t })
            );
        },
        Title: function (e) {
            let { widget: t, hydration: l } = e;
            return l?.status !== "success"
                ? (0, i.jsx)(h.q, { children: t.default_title ?? "" })
                : (0, i.jsx)(h.q, { children: z(l.data) });
        },
        TitleIcon: function () {
            return (0, i.jsx)(c.TrophyIcon, { size: "xs", color: d.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        },
        HeaderAccessory: function (e) {
            let { hydration: t } = e;
            return t?.status !== "success" || W(t.data) ? null : (0, i.jsx)(eP, { data: t.data });
        },
        HeaderActions: function (e) {
            let { hydration: t, guildId: l } = e,
                n = t?.status === "success" ? t.data : void 0;
            return null != n && W(n)
                ? null
                : (0, i.jsx)(o.m, {
                      text: $.intl.string($.t.dcl9MQ),
                      children: (0, i.jsx)(u.K, {
                          variant: "icon-only",
                          size: "sm",
                          icon: m._,
                          "aria-label": $.intl.string($.t.dcl9MQ),
                          disabled: null == n,
                          onClick: function () {
                              null != n &&
                                  (x.default.track(ek.HAw.LEADERBOARD_CLICK, {
                                      location: "expand",
                                      guild_id: l,
                                      leaderboard_state: F(n),
                                      leaderboard_view: H({ expanded: !1 }),
                                  }),
                                  (function (e) {
                                      let { guildId: t, data: l } = e,
                                          n = (e) => (0, i.jsx)(eW, { guildId: t, data: l, modalProps: e });
                                      (0, K.openModalLazy)(() => Promise.resolve(n), {
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
                            lr(t, { isCompact: l < 480, canShowEmbed: l >= 720 });
                        },
                        [t],
                    )),
                    (0, li.g)(n, s, [t], { fireOnMount: !0 }),
                    a.useEffect(
                        () => () => {
                            ls.setState((e) => {
                                if (null == e.byWidgetId[t]) return e;
                                let l = { ...e.byWidgetId };
                                return (delete l[t], { byWidgetId: l });
                            });
                        },
                        [t],
                    ),
                    n),
                x = lc(c.id),
                h = ld(c.id),
                g = lo(c.id),
                { isContributing: j, isSpotifyConnected: v, hasFetchedConsents: p } = (0, lp.MX)(d),
                _ = "edit" === u,
                N = o?.status === "success" && tb(o.data),
                A = !x && !_ && !N,
                E =
                    "view" === u && p && !j
                        ? (0, i.jsx)(tO, { guildId: d, widgetName: lN(c), isCompact: x, isSpotifyConnected: v })
                        : null,
                b =
                    _ || N || o?.status !== "success" || h === tA.TOP_LISTENERS
                        ? null
                        : ((l = o.data),
                          null ==
                          (r =
                              l.ranked_songs.find((e) => e.track_external_id === g && null != e.cover_art_hash)
                                  ?.cover_art_hash ??
                              l.ranked_songs.find((e) => null != e.cover_art_hash)?.cover_art_hash)
                              ? null
                              : tl.RQ.IMAGE(r));
            return (0, i.jsxs)("div", {
                className: l_.rf,
                ref: m,
                children: [
                    null != b && (0, i.jsx)("img", { className: l_.G, src: b, alt: "", "aria-hidden": !0 }),
                    (0, i.jsx)("div", {
                        className: l_.Qs,
                        children: (0, i.jsx)("div", {
                            id: tC(c.id),
                            className: l_.nd,
                            role: A ? "tabpanel" : "group",
                            tabIndex: 0,
                            "aria-label": A ? void 0 : tI(h),
                            "aria-labelledby": A ? tS(c.id, h) : void 0,
                            children: (function () {
                                if (_) return (0, i.jsx)(t5, { isCompact: x });
                                if (null == o || "idle" === o.status || "loading" === o.status)
                                    return (0, i.jsx)(f.eU, {});
                                if ("error" === o.status) return (0, i.jsx)(f.MO, {});
                                if (N) return (0, i.jsx)(tK, {});
                                switch (h) {
                                    case tA.TOP_SONGS:
                                        return (0, i.jsx)(lx, {
                                            guildId: d,
                                            widgetId: c.id,
                                            isCompact: x,
                                            data: o.data,
                                        });
                                    case tA.TOP_ARTISTS:
                                        return (0, i.jsx)(tR, { isCompact: x, data: o.data });
                                    case tA.TOP_LISTENERS:
                                        return (0, i.jsx)(t7, { guildId: d, isCompact: x, data: o.data, upsell: E });
                                }
                            })(),
                        }),
                    }),
                    h !== tA.TOP_LISTENERS && E,
                    (0, i.jsx)(tQ, { isCompact: x }),
                ],
            });
        },
        Title: function (e) {
            let { widget: t, hydration: l, guildSpaceMode: n } = e,
                a = lN(t),
                s = l?.status === "success" && tb(l.data);
            return "edit" === n || s ? (0, i.jsx)(h.q, { children: a }) : (0, i.jsx)(lv, { widgetId: t.id, title: a });
        },
        ViewHeaderTrailing: function (e) {
            let { widget: t, hydration: l, title: n } = e,
                a = lc(t.id),
                s = ld(t.id);
            return a || (l?.status === "success" && tb(l.data))
                ? null
                : (0, i.jsx)(e6.I, {
                      label: n,
                      tabs: tE.map((e) => ({ id: e, label: tI(e) })),
                      selectedId: s,
                      panelId: tC(t.id),
                      getTabId: (e) => tS(t.id, e),
                      onSelect: (e) => lu(t.id, e),
                  });
        },
    },
    [r.a.WHITEBOARD]: {
        View: function (e) {
            let t,
                l,
                n = (0, lC.n)(),
                r = (0, v.bG)(
                    [lE.A, lI.A],
                    () => {
                        let e = null != n ? lE.A.getChannel(n) : void 0;
                        return null != e && lI.A.can(ek.xBc.USE_EMBEDDED_ACTIVITIES, e);
                    },
                    [n],
                ),
                d = (0, v.bG)(
                    [lD.Ay],
                    () => {
                        let e = lD.Ay.getCurrentEmbeddedActivity();
                        return null == e ||
                            e.applicationId !== lO.NW ||
                            e.location.kind !== lF.T.GUILD_CHANNEL ||
                            e.location.channel_id !== n
                            ? null
                            : e;
                    },
                    [n],
                ),
                c = (0, v.bG)([lD.Ay], () => lD.Ay.isLaunchingActivity(), []),
                { authResolved: o, isAuthorized: u } =
                    ((t = (0, v.bG)(
                        [lG.default],
                        () => lG.default.getFetchStateForApplication(lO.NW) === lG.FetchState.FETCHED,
                        [],
                    )),
                    (l = (0, v.bG)(
                        [lG.default, ec.A],
                        () => {
                            let e = lG.default.getNewestTokenForApplication(lO.NW);
                            if (null == e) return !1;
                            let t = ec.A.getApplication(lO.NW),
                                l = t?.integrationTypesConfig?.[ly.b.USER_INSTALL]?.oauth2InstallParams?.scopes;
                            if (null == l) return !0;
                            let n = new Set(e.scopes);
                            return l.every((e) => n.has(e));
                        },
                        [],
                    )),
                    a.useEffect(() => {
                        (lG.default.getFetchStateForApplication(lO.NW) === lG.FetchState.NOT_FETCHED &&
                            lU.A.fetch([lO.NW]),
                            null == ec.A.getApplication(lO.NW) && (0, lL.TA)(lO.NW));
                    }, []),
                    { authResolved: t, isAuthorized: l }),
                m = a.useRef(!1);
            a.useEffect(() => {
                null == d && null != n && r && o && u && !m.current && ((m.current = !0), lB(n));
            }, [r, n, d, o, u]);
            let x = a.useCallback(() => {
                    null != n && ((m.current = !0), lB(n));
                }, [n]),
                h = null != n && o && !u;
            return null == n
                ? (0, i.jsx)(ez.B, {
                      className: lY.kL,
                      align: "center",
                      justify: "center",
                      children: (0, i.jsx)(s, { alt: "", width: 200 }),
                  })
                : r
                  ? (0, i.jsxs)("div", {
                        className: lY.kL,
                        children: [
                            null != d &&
                                (0, i.jsx)(lq.A, {
                                    frameId: (0, lH.Ri)(d),
                                    level: lK.A.WithinAppContent,
                                    className: lY.t$,
                                }),
                            null == d &&
                                h &&
                                (0, i.jsx)("div", {
                                    className: lY.P5,
                                    children: (0, i.jsx)(y.$, {
                                        variant: "secondary",
                                        text: $.intl.string(Y.default.PSuly6),
                                        loading: c,
                                        onClick: x,
                                    }),
                                }),
                        ],
                    })
                  : (0, i.jsx)("div", {
                        className: lY.kL,
                        children: (0, i.jsx)("div", {
                            className: lY.m0,
                            children: (0, i.jsx)(A.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: $.intl.string(Y.default["nXc/MQ"]),
                            }),
                        }),
                    });
        },
        Edit: function (e) {
            let { cancel: t } = e,
                l = (0, v.bG)([eV.A], () => eV.A.getGuildId()),
                n = lS.default.castGuildIdAsEveryoneGuildRoleId(l),
                s = (0, lC.n)(),
                r = (0, v.bG)([lE.A], () => (null != s ? lE.A.getChannel(s) : void 0), [s]),
                d = (0, v.bG)([lI.A], () => null != r && lI.A.can(ek.xBc.MANAGE_ROLES, r), [r]),
                c = (0, v.bG)([lb.A], () => (null == l ? lz : lb.A.getSortedRoles(l).filter((e) => e.id !== n)), [
                    l,
                    n,
                ]),
                o = a.useMemo(() => {
                    let e;
                    return null != r
                        ? null != (e = r.permissionOverwrites[r.guild_id]) &&
                          lT.zy(e.deny, ek.xBc.USE_EMBEDDED_ACTIVITIES)
                            ? c
                                  .filter((e) => {
                                      let t = r.permissionOverwrites[e.id];
                                      return null != t && lT.zy(t.allow, ek.xBc.USE_EMBEDDED_ACTIVITIES);
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
                        (await lW({ channel: r, selectedRoleIds: j }), t());
                    } catch {
                        (h(!1), g(!0));
                    }
                }
            }
            return null == r
                ? null
                : (0, i.jsxs)(ez.B, {
                      gap: 16,
                      children: [
                          (0, i.jsx)(lA.Z, {
                              selectionMode: "multiple",
                              label: $.intl.string(Y.default.XXLbfv),
                              description: $.intl.string(Y.default.XrpYIG),
                              placeholder: $.intl.string(Y.default.pp6WeD),
                              options: p,
                              value: j,
                              onSelectionChange: function (e) {
                                  (g(!1), m(e));
                              },
                              disabled: !d || x,
                              fullWidth: !0,
                              wrapTags: !0,
                          }),
                          !d && (0, i.jsx)(e$.w, { type: "warning", children: $.intl.string(Y.default.UPLtlA) }),
                          f &&
                              (0, i.jsx)("div", {
                                  role: "alert",
                                  children: (0, i.jsx)(e$.w, {
                                      type: "critical",
                                      children: $.intl.string(Y.default.xyCJYs),
                                  }),
                              }),
                          (0, i.jsxs)(eK.e, {
                              fullWidth: !0,
                              children: [
                                  (0, i.jsx)(y.$, {
                                      variant: "secondary",
                                      text: $.intl.string($.t["ETE/oC"]),
                                      onClick: t,
                                      disabled: x,
                                  }),
                                  (0, i.jsx)(y.$, {
                                      variant: "primary",
                                      text: $.intl.string($.t["R3BPH+"]),
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
