l.d(t, { m: () => lQ });
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
    b = l(140735),
    E = l(97808),
    I = l(778712),
    S = l(297264),
    C = l(463930),
    y = l(821609),
    T = l(80682),
    k = l(967144),
    w = l(696451),
    R = l(287809),
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
        n = (0, v.bG)([R.default], () => R.default.getUser(l), [l]),
        i = (0, v.bG)([w.Ay], () => w.Ay.getMember(e, l), [e, l]),
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
                (0, i.jsx)(E.eu, {
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
                    (0, i.jsx)(b.A, { children: l }),
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
function eb(e) {
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
function eE(e) {
    let { played: t, totalCount: l } = e,
        n = t.slice(0, 2),
        a = l - n.length;
    return (0, i.jsxs)("div", {
        className: ej.Nw,
        children: [
            n.map((e, t) => (0, i.jsx)(eb, { game: e, notched: a > 0 || t !== n.length - 1 }, `${e.id}-${t}`)),
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
        asset: t.length > 0 ? (0, i.jsx)(eE, { played: t, totalCount: t.length }) : void 0,
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
                children: (0, i.jsx)(eE, { played: r, totalCount: n }),
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
                        (0, i.jsx)(E.eu, {
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
    ew = l(219047);
function eR(e) {
    let t,
        l,
        n,
        { guildId: s, data: r, inModal: d = !1 } = e,
        { stat: c, entries: o } = r,
        u = (0, v.bG)([R.default], () => R.default.getCurrentUser()?.id),
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
        b = F(r),
        E = "podium" === b,
        I = H({ expanded: d }),
        { scrollerRef: S, scrollerNode: C, userRowRef: y, floatingRowPosition: k, scrollToUserRow: w } = G();
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
        leaderboardState: b,
        leaderboardView: I,
        scrollerNode: A ? null : C,
        isEmpty: A,
    });
    let D = null != k,
        M = a.useMemo(() => (E ? h.slice(3) : h), [E, h]),
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
                    leaderboard_state: b,
                    leaderboard_view: I,
                });
            },
            [s, b, I],
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
            className: ew.Cm,
            children: (0, i.jsx)(X, { guildId: s, onActivitySharingClick: () => O("activity_sharing") }),
        });
    let K = [h[0], h[1], h[2]],
        q = (0, i.jsx)("div", {
            ref: U,
            className: ew.V$,
            "aria-hidden": !0,
            children: L.map((e) => (0, i.jsx)(eA, { entry: e, stat: c }, e.user_id)),
        });
    return null == P
        ? (0, i.jsxs)("div", { className: ew.rf, children: [q, (0, i.jsx)(f.eU, {})] })
        : (0, i.jsxs)("div", {
              className: ew.rf,
              children: [
                  q,
                  (0, i.jsxs)("div", {
                      className: ew.SY,
                      children: [
                          (0, i.jsxs)(p.d_, {
                              className: j()(ew.p_, { [ew.zE]: d, [ew.Ng]: B }),
                              ref: S,
                              children: [
                                  E &&
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
                              ? (0, i.jsx)("div", { className: j()(ew.Dz, "top" !== k || B ? ew.qV : ew.gN) })
                              : null,
                          null != m &&
                              null != k &&
                              (0, i.jsx)(_.D, {
                                  className: j()(ew.z$, "top" === k ? ew.aG : ew.Ie),
                                  "aria-label": $.intl.string(Y.default.d0Z8kd),
                                  onClick: w,
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
            className: ew.z8,
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
        ? (0, i.jsx)("div", { className: ew.qr, children: n })
        : (0, i.jsx)("div", {
              className: j()(ew.qr, { [ew.zE]: l }),
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
    let c = (0, v.bG)([R.default], () => R.default.getCurrentUser()),
        o = M.Ay.useName(t, void 0, c),
        u = (0, v.bG)([w.Ay], () => w.Ay.getMember(t, c?.id ?? "")),
        m = (0, k.gn)(t, c?.id, u?.colorStrings ?? null);
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
                                  (0, i.jsx)(b.A, { children: $.intl.string(Y.default["oHdW+u"]) }),
                                  (0, i.jsx)(A.E, {
                                      variant: "text-sm/semibold",
                                      color: "text-muted",
                                      "aria-hidden": !0,
                                      children: "?",
                                  }),
                              ],
                          }),
                          (0, i.jsx)(E.eu, {
                              size: I._3.SIZE_32,
                              src: c.getAvatarURL(t, (0, I.FT)(I._3.SIZE_32)) ?? void 0,
                              className: ew.SA,
                              "aria-hidden": !0,
                          }),
                          (0, i.jsxs)("div", {
                              className: ew.ko,
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
                                      className: ew.LF,
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
                          className: ew.rl,
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
                (0, i.jsx)("div", { className: eB.rf, children: (0, i.jsx)(eR, { guildId: t, data: l, inModal: !0 }) }),
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
    tc = (e, t) => (0, i.jsx)(A.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: e }, t);
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
    if (null == e) return null;
    let t = Math.round(Math.abs(e));
    return 0 === t
        ? null
        : { direction: e > 0 ? "up" : "down", label: $.intl.formatToPlainString(Y.default["h+LUpk"], { percent: t }) };
}
function th(e) {
    return tx(null != e.plays_trend_pct ? 100 * e.plays_trend_pct : null);
}
var tf = l(633099);
function tg(e) {
    let { trend: t } = e,
        l = "up" === t.direction ? ti.z : ta.M;
    return (0, i.jsxs)("span", {
        className: tf.GW,
        children: [
            (0, i.jsx)(l, {
                className: j()({ [tf.$J]: "up" === t.direction, [tf.KW]: "down" === t.direction }),
                size: "xxs",
                color: "currentColor",
                "aria-hidden": !0,
            }),
            (0, i.jsx)(A.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: t.label }),
        ],
    });
}
function tj(e) {
    var t;
    let { guildId: l, song: n } = e,
        s = a.useMemo(() => (n.facepile_user_ids ?? []).slice(0, 3), [n.facepile_user_ids]);
    (0, T.k6)(l, s);
    let r = (0, v.yK)([R.default], () => s.map((e) => R.default.getUser(e)), [s]),
        d = a.useMemo(() => r.filter((e) => null != e), [r]);
    if (0 === d.length) return null;
    let c = n.unique_listeners - d.length;
    return (0, i.jsx)("span", {
        className: tf.WM,
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
                    className: tf.ju,
                    children: (0, i.jsx)(A.E, {
                        tag: "span",
                        variant: "text-sm/semibold",
                        color: "text-subtle",
                        children: $.intl.formatToPlainString(Y.default.bFIg0R, { count: c }),
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
              className: j()(tf.yp, { [tf.Fl]: t }),
              children: (0, i.jsxs)("div", {
                  className: tf.QD,
                  children: [
                      null != l &&
                          (0, i.jsx)(A.E, {
                              tag: "div",
                              variant: "heading-xl/semibold",
                              color: "text-default",
                              children: l,
                          }),
                      (0, i.jsxs)("div", {
                          className: tf._0,
                          children: [
                              null != n &&
                                  (0, i.jsx)(A.E, {
                                      tag: "span",
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: n,
                                  }),
                              null != a && (0, i.jsx)(tg, { trend: a }),
                          ],
                      }),
                  ],
              }),
          });
}
function tp(e) {
    var t;
    let { guildId: l, isCompact: n, canShowEmbed: a, song: s } = e,
        r = tx(s.plays_change_percent);
    return (0, i.jsxs)("div", {
        className: j()(tf.yp, { [tf.Fl]: n }),
        children: [
            a && (0, i.jsx)(tr.A, { className: tf.aF, resourceType: tl.M0.TRACK, resourceId: s.track_external_id }),
            (0, i.jsxs)("div", {
                className: j()(tf.QD, tf.rk),
                children: [
                    (0, i.jsx)(tj, { guildId: l, song: s }),
                    (0, i.jsxs)("div", {
                        className: tf._0,
                        children: [
                            (0, i.jsx)(A.E, {
                                tag: "span",
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                children:
                                    ((t = s.plays),
                                    $.intl.format(Y.default["7hHUIS"], { count: t, trend: tu(r), countHook: tc })),
                            }),
                            null != r && (0, i.jsx)(tg, { trend: r }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var t_ = l(197935),
    tN = l(915734);
function tA(e) {
    let { label: t, items: l, isCompact: n, getItemKey: a, renderItem: s } = e;
    return (0, i.jsx)("div", {
        className: j()(tN.Dk, { [tN.yI]: n }),
        children: (0, i.jsx)(t_.A, {
            items: l,
            getItemKey: a,
            renderItem: s,
            gap: 8,
            edgeFade: 40,
            actionsClassName: tN.o1,
            "aria-label": t,
        }),
    });
}
var tb = (((n = {}).TOP_SONGS = "top_songs"), (n.TOP_ARTISTS = "top_artists"), (n.TOP_LISTENERS = "top_listeners"), n);
let tE = ["top_songs", "top_artists", "top_listeners"];
function tI(e) {
    return 1 > e.ranked_songs.reduce((e, t) => e + t.plays, 0);
}
function tS(e) {
    switch (e) {
        case "top_songs":
            return $.intl.string(Y.default.KgeEtx);
        case "top_artists":
            return $.intl.string(Y.default.RYxWTS);
        case "top_listeners":
            return $.intl.string(Y.default.KO73KB);
    }
}
function tC(e, t) {
    return `popular-music-tab-${e}-${t}`;
}
function ty(e) {
    return `popular-music-panel-${e}`;
}
var tT = l(742452);
function tk(e) {
    return e.artist_external_id;
}
function tw(e, t) {
    return (0, i.jsx)(tn, { artist: e, itemProps: t });
}
function tR(e) {
    let { isCompact: t, data: l } = e;
    if (0 === l.ranked_artists.length) return null;
    let n = th(l);
    return (0, i.jsxs)("div", {
        className: tT.U,
        children: [
            (0, i.jsx)(tA, {
                label: tS(tb.TOP_ARTISTS),
                items: l.ranked_artists,
                isCompact: t,
                getItemKey: tk,
                renderItem: tw,
            }),
            (0, i.jsx)(tv, {
                isCompact: t,
                headline:
                    l.distinct_songs < 1
                        ? null
                        : $.intl.formatToPlainString(Y.default.W8etVA, { count: l.distinct_songs }),
                detail:
                    l.distinct_listeners < 1 || l.distinct_artists < 1
                        ? null
                        : $.intl.format(Y.default.yGqf0D, {
                              memberCount: l.distinct_listeners,
                              artistCount: l.distinct_artists,
                              trend: tu(n),
                              memberCountHook: tc,
                              artistCountHook: tc,
                          }),
                trend: n,
            }),
        ],
    });
}
var tD = l(803613),
    tM = l(682348),
    tL = l(73152),
    tU = l(57129),
    tG = l(280911);
function tP(e) {
    let { guildId: t, isCompact: l } = e,
        n = (0, v.bG)([R.default], () => R.default.getCurrentUser()),
        a = (0, v.bG)([w.Ay], () => (null != n ? w.Ay.getMember(t, n.id) : null)),
        s = (0, k.gn)(t, n?.id, a?.colorStrings ?? null),
        r = M.Ay.useName(t, void 0, n);
    return (0, i.jsxs)("div", {
        className: tG.D_,
        children: [
            (0, i.jsxs)("div", {
                className: tG.FI,
                "aria-hidden": !0,
                children: [
                    !l &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("span", { className: tG.eu, children: (0, i.jsx)(tD.D, { size: "sm" }) }),
                                (0, i.jsxs)("span", {
                                    className: tG.r$,
                                    children: [
                                        (0, i.jsx)("span", { className: tG.Om }),
                                        (0, i.jsx)("span", { className: tG.Om }),
                                        (0, i.jsx)("span", { className: tG.Om }),
                                    ],
                                }),
                            ],
                        }),
                    (0, i.jsx)(E.eu, {
                        size: I._3.SIZE_32,
                        src: n?.getAvatarURL(t, (0, I.FT)(I._3.SIZE_32)) ?? void 0,
                        "aria-hidden": !0,
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: tG.Qq,
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
function tO(e) {
    let { widgetName: t, isCompact: l } = e;
    return (0, i.jsxs)("div", {
        className: tG.D_,
        children: [
            !l &&
                (0, i.jsx)("span", {
                    className: tG.eu,
                    "aria-hidden": !0,
                    children: (0, i.jsx)(tM._, { size: "sm", color: d.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
                }),
            (0, i.jsxs)("div", {
                className: tG.Qq,
                children: [
                    (0, i.jsx)(S.D, {
                        variant: "heading-sm/semibold",
                        color: "text-strong",
                        lineClamp: 1,
                        children: $.intl.string(tU.default.WhdCGP),
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
function tB(e) {
    let { guildId: t, widgetName: n, isCompact: a, isSpotifyConnected: s } = e;
    return (0, i.jsxs)("div", {
        className: tG.UX,
        children: [
            s ? (0, i.jsx)(tO, { widgetName: n, isCompact: a }) : (0, i.jsx)(tP, { guildId: t, isCompact: a }),
            (0, i.jsx)(y.$, {
                variant: "secondary",
                size: "sm",
                icon: s ? void 0 : tL.E,
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
                                l.e("13566"),
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
var tW = l(625903),
    tz = l(780964),
    tF = l(766075),
    tH = l(30370),
    tK = l(123894);
function tq() {
    let e = (0, v.bG)([tH.A], () => tH.A.getAccounts().some((e) => e.type === ek.fg2.SPOTIFY && e.showActivity));
    return (0, i.jsx)(L.Zj, {
        className: tK.w,
        title: $.intl.string(Y.default.ULK65a),
        body: $.intl.format(e ? Y.default.BLuvck : Y.default["Ko3a0+"], { memberCount: 2 }),
        action: e
            ? null
            : (0, i.jsx)(y.$, {
                  variant: "secondary",
                  size: "sm",
                  icon: tW.SettingsIcon,
                  text: $.intl.string($.t["3D5yo/"]),
                  onClick: () => (0, tF.openUserSettings)(tz.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING),
              }),
    });
}
function tY() {
    return (0, i.jsx)(L.Zj, {
        className: tK.w,
        title: $.intl.string(Y.default.ULK65a),
        body: $.intl.format(Y.default.ZQxU8v, { memberCount: 2 }),
    });
}
var t$ = l(109487),
    tQ = l(279543);
function tX(e) {
    let { isCompact: t } = e;
    return (0, i.jsxs)("div", {
        className: tQ.qr,
        children: [
            (0, i.jsxs)("div", {
                className: tQ.Os,
                children: [
                    (0, i.jsx)("span", {
                        className: tQ.Kk,
                        children: (0, i.jsx)(N.RefreshIcon, {
                            size: "xxs",
                            color: d.A.colors.ICON_SUBTLE,
                            "aria-hidden": !0,
                        }),
                    }),
                    (0, i.jsx)(A.E, {
                        className: tQ.Pf,
                        tag: "span",
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: $.intl.string(Y.default["3/DOFo"]),
                    }),
                ],
            }),
            (0, i.jsxs)(e7.Anchor, {
                className: tQ.al,
                href: tl.RQ.WEB_HOME,
                "aria-label": $.intl.string(Y.default["jUr+wF"]),
                children: [
                    (0, i.jsx)("span", {
                        className: tQ.Kk,
                        children: (0, i.jsx)(t$.L, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    }),
                    !t &&
                        (0, i.jsx)(A.E, {
                            className: tQ.G2,
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
var tV = l(65154),
    tZ = l(329177),
    tJ = l(242226);
function t0(e) {
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
            ((t = (0, v.bG)([R.default], () => R.default.getUser(r), [r])),
            (l = (0, v.bG)([w.Ay], () => w.Ay.getMember(s, r), [s, r])),
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
              className: j()(tJ.nM, { [tJ.Bh]: m && !h, [tJ.lR]: x }),
              children: [
                  (0, i.jsx)(t1, { guildId: s, user: p, identity: g, rank: o, listener: c }),
                  null != c &&
                      (0, i.jsxs)("div", {
                          className: j()(tJ.Mx, { [tJ.dA]: u }),
                          children: [
                              (0, i.jsx)(tV.S, { size: "xxs", color: d.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                              (0, i.jsx)(A.E, {
                                  variant: "text-sm/medium",
                                  color: "text-strong",
                                  children: tm(c.plays),
                              }),
                          ],
                      }),
                  null != c && !u && (0, i.jsx)(t8, { artists: c.artists, artistCount: c.artist_count ?? null }),
              ],
          });
}
function t1(e) {
    let { guildId: t, user: l, identity: n, rank: s, listener: r } = e,
        d = a.useRef(null);
    return (0, i.jsx)(V.A, {
        targetElementRef: d,
        user: l,
        guildId: t,
        children: (e) =>
            (0, i.jsxs)(_.D, {
                ...e,
                innerRef: d,
                className: tJ.D_,
                children: [
                    null != s &&
                        (0, i.jsx)(b.A, { children: $.intl.formatToPlainString(Y.default.I4JiAQ, { rank: s }) }),
                    (0, i.jsxs)("span", {
                        className: tJ.R3,
                        children: [
                            (0, i.jsx)(E.eu, {
                                size: I._3.SIZE_32,
                                src: l.getAvatarURL(t, (0, I.FT)(I._3.SIZE_32)) ?? void 0,
                                "aria-hidden": !0,
                            }),
                            1 === s &&
                                (0, i.jsx)("span", {
                                    className: tJ.ie,
                                    "aria-hidden": !0,
                                    children: (0, i.jsx)(tZ.CrownIcon, { size: "xxs", color: "currentColor" }),
                                }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tJ.Dc,
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
                            (0, i.jsx)(t3, { listener: r }),
                        ],
                    }),
                ],
            }),
    });
}
function t2(e, t) {
    return (0, i.jsx)(A.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: e }, t);
}
function t3(e) {
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
                ? $.intl.format(Y.default.QqaqBg, { trackTitle: l, artistName: n, highlightHook: t2 })
                : $.intl.format(Y.default.ZMJ8Mt, { trackTitle: l, highlightHook: t2 }),
    });
}
function t6(e) {
    let { artist: t, notched: l } = e,
        [n, s] = a.useState(!1),
        r = null != t.artist_image_hash ? tl.RQ.IMAGE(t.artist_image_hash) : null;
    return (0, i.jsx)("span", {
        className: tJ.sG,
        children: (0, i.jsx)(es.Ay, {
            mask: l ? es.l8[24] : es.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null == r || n
                    ? (0, i.jsx)("span", {
                          className: tJ.Ql,
                          children: (0, i.jsx)(e8.MicrophoneIcon, { size: "xxs", color: d.A.colors.ICON_SUBTLE }),
                      })
                    : (0, i.jsx)("img", { className: tJ.v2, src: r, alt: "", loading: "lazy", onError: () => s(!0) }),
        }),
    });
}
function t8(e) {
    let { artists: t, artistCount: l } = e,
        n = t.slice(0, 3),
        a = (l ?? t.length) - n.length;
    return (0, i.jsx)("div", {
        className: tJ.Rh,
        "aria-hidden": !0,
        children:
            n.length > 0 &&
            (0, i.jsxs)("div", {
                className: tJ.W$,
                children: [
                    n.map((e, t) =>
                        (0, i.jsx)(
                            t6,
                            { artist: e, notched: a > 0 || t !== n.length - 1 },
                            `${e.artist_external_id}-${e.artist_image_hash}`,
                        ),
                    ),
                    a > 0 &&
                        (0, i.jsx)("span", {
                            className: tJ.sG,
                            children: (0, i.jsx)(es.Ay, {
                                mask: es.Ay.Masks.SQUIRCLE,
                                width: 24,
                                height: 24,
                                children: (0, i.jsx)("div", {
                                    className: tJ.ag,
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
var t7 = l(897130);
function t4(e) {
    let { guildId: t, isCompact: l, data: n, upsell: s } = e,
        r = n.top_listeners,
        d = (0, v.bG)([R.default], () => R.default.getCurrentUser()?.id),
        c = r.findIndex((e) => e.user_id === d),
        o = -1 === c ? null : r[c],
        u = a.useMemo(() => r.map((e) => e.user_id), [r]);
    (0, T.k6)(t, u);
    let { scrollerRef: m, userRowRef: x, floatingRowPosition: h } = G(),
        f = null != s,
        g = f ? null : h,
        _ = null != g;
    return n.top_listeners.length < 2
        ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(tY, {}), s] })
        : (0, i.jsxs)("div", {
              className: t7.SY,
              children: [
                  (0, i.jsxs)(p.d_, {
                      className: j()(t7.p_, { [t7.w]: f }),
                      ref: m,
                      children: [
                          r.map((e, n) => {
                              let a = e.user_id === d;
                              return (0, i.jsx)(
                                  t0,
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
                              (0, i.jsx)(t0, {
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
                              (0, i.jsx)("div", { className: t7.qV }),
                              (0, i.jsx)("div", { className: t7.Kv, children: s }),
                          ],
                      }),
                  null != d &&
                      null != g &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", { className: "top" === g ? t7.gN : t7.qV }),
                              (0, i.jsx)("div", {
                                  className: j()(t7.z$, "top" === g ? t7.aG : t7.Ie),
                                  children: (0, i.jsx)(t0, {
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
var t5 = l(717683);
function t9(e) {
    let { isCompact: t } = e;
    return (0, i.jsxs)("div", {
        className: t5.qV,
        "aria-hidden": !0,
        children: [
            (0, i.jsx)("div", {
                className: j()(t5.Dk, { [t5.yI]: t }),
                children: Array.from({ length: 5 }, (e, t) =>
                    (0, i.jsxs)(
                        "div",
                        {
                            className: t5.Nr,
                            children: [
                                (0, i.jsx)("div", { className: j()(t5.om, t5.xX) }),
                                (0, i.jsxs)("div", {
                                    className: t5.Qq,
                                    children: [
                                        (0, i.jsx)("div", { className: j()(t5.om, t5.DD) }),
                                        (0, i.jsx)("div", { className: j()(t5.om, t5.VA) }),
                                    ],
                                }),
                            ],
                        },
                        t,
                    ),
                ),
            }),
            (0, i.jsxs)("div", {
                className: j()(t5.yp, { [t5.Fl]: t }),
                children: [
                    (0, i.jsx)("div", { className: j()(t5.om, t5.Pl) }),
                    (0, i.jsx)("div", { className: j()(t5.om, t5._0) }),
                ],
            }),
        ],
    });
}
var le = l(432017),
    lt = l(362704),
    ll = l(782134);
function ln(e) {
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
                        FallbackIcon: le.T,
                        children: [
                            l &&
                                (0, i.jsx)("span", {
                                    className: j()(te.Lw, te.Kp),
                                    "aria-hidden": !0,
                                    children: (0, i.jsx)(lt.Y, { size: "md", color: "currentColor" }),
                                }),
                            (0, i.jsxs)("span", {
                                className: j()(te.Lw, te.vY),
                                children: [
                                    (0, i.jsx)(ll.PlayIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
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
var li = l(196765),
    la = l(770178);
let ls = { view: "top_songs", isCompact: !1, canShowEmbed: !1, selectedTrackId: null },
    lr = (0, li.v)(() => ({ byWidgetId: {} }));
function ld(e, t) {
    lr.setState((l) => {
        let n = l.byWidgetId[e] ?? ls;
        return { byWidgetId: { ...l.byWidgetId, [e]: { ...n, ...t } } };
    });
}
function lc(e) {
    return lr((t) => t.byWidgetId[e]?.view ?? ls.view);
}
function lo(e) {
    return lr((t) => t.byWidgetId[e]?.isCompact ?? ls.isCompact);
}
function lu(e) {
    return lr((t) => t.byWidgetId[e]?.selectedTrackId ?? ls.selectedTrackId);
}
function lm(e, t) {
    (lr.getState().byWidgetId[e] ?? ls).view !== t && ld(e, { view: t, selectedTrackId: null });
}
function lx(e) {
    return e.track_external_id;
}
function lh(e) {
    let t,
        { guildId: l, widgetId: n, isCompact: s, data: r } = e,
        d = lu(n),
        c = lr((e) => e.byWidgetId[n]?.canShowEmbed ?? ls.canShowEmbed),
        o = a.useCallback(
            (e) => {
                let t;
                return (
                    (t = lr.getState().byWidgetId[n]?.selectedTrackId ?? null),
                    void ld(n, { selectedTrackId: t === e ? null : e })
                );
            },
            [n],
        ),
        u = a.useCallback(
            (e, t) => (0, i.jsx)(ln, { song: e, isSelected: e.track_external_id === d, onSelect: o, itemProps: t }),
            [d, o],
        );
    if (0 === r.ranked_songs.length) return null;
    let m = r.ranked_songs.find((e) => e.track_external_id === d) ?? null,
        x = th(r);
    return (0, i.jsxs)("div", {
        className: tT.U,
        children: [
            (0, i.jsx)(tA, {
                label: tS(tb.TOP_SONGS),
                items: r.ranked_songs,
                isCompact: s,
                getItemKey: lx,
                renderItem: u,
            }),
            null != m
                ? (0, i.jsx)(tp, { guildId: l, isCompact: s, canShowEmbed: c, song: m })
                : (0, i.jsx)(tv, {
                      isCompact: s,
                      headline:
                          (t = Math.round(r.listening_time_ms / O.A.Millis.MINUTE)) < 1
                              ? null
                              : $.intl.formatToPlainString(Y.default["+5b01q"], { minutes: t }),
                      detail:
                          r.distinct_listeners < 1
                              ? null
                              : $.intl.format(Y.default.AzIhRB, {
                                    count: r.distinct_listeners,
                                    trend: tu(x),
                                    countHook: tc,
                                }),
                      trend: x,
                  }),
        ],
    });
}
var lf = l(597601),
    lg = l(937863),
    lj = l(871107);
function lv(e) {
    let { view: t } = e,
        l = d.A.colors.ICON_DEFAULT;
    switch (t) {
        case tb.TOP_ARTISTS:
            return (0, i.jsx)(e8.MicrophoneIcon, { size: "xs", color: l, "aria-hidden": !0 });
        case tb.TOP_LISTENERS:
            return (0, i.jsx)(lf.L, { size: "xs", color: l, "aria-hidden": !0 });
        case tb.TOP_SONGS:
            return (0, i.jsx)(le.T, { size: "xs", color: l, "aria-hidden": !0 });
    }
}
function lp(e) {
    let { widgetId: t, title: l } = e,
        n = lo(t),
        a = lc(t);
    if (!n)
        return (0, i.jsxs)("div", {
            className: lj.$,
            children: [
                (0, i.jsx)("span", {
                    className: lj.K,
                    children: (0, i.jsx)(le.T, { size: "xs", color: d.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
                }),
                (0, i.jsx)(h.q, { children: l }),
            ],
        });
    let s = tE.map((e) => ({ id: e, label: tS(e), icon: (0, i.jsx)(lv, { view: e }) }));
    return (0, i.jsx)(lg.C, {
        navId: "popular-music-view",
        options: s,
        selectedId: a,
        menuLabel: $.intl.string(Y.default.hFYyGU),
        triggerLabel: $.intl.formatToPlainString(Y.default["/sw0JL"], { widgetName: l, viewName: tS(a) }),
        onSelect: (e) => lm(t, e),
    });
}
var l_ = l(77915),
    lN = l(756936);
function lA(e) {
    return e.default_title ?? $.intl.string(Y.default["5xxUI2"]);
}
var lb = l(890497),
    lE = l(734057),
    lI = l(317525),
    lS = l(576705),
    lC = l(935208),
    ly = l(44167);
l(321073);
var lT = l(485845),
    lk = l(136722),
    lw = l(435183),
    lR = l(155718),
    lD = l(795816),
    lM = l(933958),
    lL = l(574152),
    lU = l(627363),
    lG = l(712440),
    lP = l(733110),
    lO = l(488926),
    lB = l(818023);
async function lW(e) {
    null == ec.A.getApplication(lB.NW) && (await (0, lU.TA)(lB.NW));
    let t = lM.Ay.getEmbeddedActivitiesForChannel(e).every((e) => e.applicationId !== lB.NW);
    return await (0, lD.su)({
        channelId: e,
        applicationId: lB.NW,
        isStart: t,
        embeddedActivitiesManager: (0, lL.A)(),
        renderInFramePool: !0,
    });
}
async function lz(e) {
    let { channel: t, selectedRoleIds: l } = e,
        n = [];
    if (l.length > 0)
        for (let e of (n.push({ id: t.guild_id, type: lR.r2.ROLE, allow: lO.x3, deny: ek.xBc.USE_EMBEDDED_ACTIVITIES }),
        l))
            n.push({ id: e, type: lR.r2.ROLE, allow: ek.xBc.USE_EMBEDDED_ACTIVITIES, deny: lO.x3 });
    let i = await (0, lw.RT)(t.id, { permissionOverwrites: n });
    if (!i.ok) throw i;
}
let lF = [];
var lH = l(344351),
    lK = l(256693),
    lq = l(812901),
    lY = l(317608),
    l$ = l(953538);
let lQ = {
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
                          : (0, i.jsx)(eR, { guildId: n, data: l.data })),
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
                            ld(t, { isCompact: l < 480, canShowEmbed: l >= 560 });
                        },
                        [t],
                    )),
                    (0, la.g)(n, s, [t], { fireOnMount: !0 }),
                    a.useEffect(
                        () => () => {
                            lr.setState((e) => {
                                if (null == e.byWidgetId[t]) return e;
                                let l = { ...e.byWidgetId };
                                return (delete l[t], { byWidgetId: l });
                            });
                        },
                        [t],
                    ),
                    n),
                x = lo(c.id),
                h = lc(c.id),
                g = lu(c.id),
                { isContributing: j, isSpotifyConnected: v, hasFetchedConsents: p } = (0, l_.MX)(d),
                _ = "edit" === u,
                N = o?.status === "success" && tI(o.data),
                A = !x && !_ && !N,
                b =
                    "view" === u && p && !j
                        ? (0, i.jsx)(tB, { guildId: d, widgetName: lA(c), isCompact: x, isSpotifyConnected: v })
                        : null,
                E =
                    _ || N || o?.status !== "success" || h === tb.TOP_LISTENERS
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
                className: lN.rf,
                ref: m,
                children: [
                    null != E &&
                        (0, i.jsx)("div", {
                            className: lN.G,
                            "aria-hidden": !0,
                            children: (0, i.jsx)("img", { className: lN.LZ, src: E, alt: "" }),
                        }),
                    (0, i.jsx)("div", {
                        className: lN.Qs,
                        children: (0, i.jsx)("div", {
                            id: ty(c.id),
                            className: lN.nd,
                            role: A ? "tabpanel" : "group",
                            tabIndex: 0,
                            "aria-label": A ? void 0 : tS(h),
                            "aria-labelledby": A ? tC(c.id, h) : void 0,
                            children: (function () {
                                if (_) return (0, i.jsx)(t9, { isCompact: x });
                                if (null == o || "idle" === o.status || "loading" === o.status)
                                    return (0, i.jsx)(f.eU, {});
                                if ("error" === o.status) return (0, i.jsx)(f.MO, {});
                                if (N) return (0, i.jsx)(tq, {});
                                switch (h) {
                                    case tb.TOP_SONGS:
                                        return (0, i.jsx)(lh, {
                                            guildId: d,
                                            widgetId: c.id,
                                            isCompact: x,
                                            data: o.data,
                                        });
                                    case tb.TOP_ARTISTS:
                                        return (0, i.jsx)(tR, { isCompact: x, data: o.data });
                                    case tb.TOP_LISTENERS:
                                        return (0, i.jsx)(t4, { guildId: d, isCompact: x, data: o.data, upsell: b });
                                }
                            })(),
                        }),
                    }),
                    h !== tb.TOP_LISTENERS && b,
                    (0, i.jsx)(tX, { isCompact: x }),
                ],
            });
        },
        Title: function (e) {
            let { widget: t, hydration: l, guildSpaceMode: n } = e,
                a = lA(t),
                s = l?.status === "success" && tI(l.data);
            return "edit" === n || s ? (0, i.jsx)(h.q, { children: a }) : (0, i.jsx)(lp, { widgetId: t.id, title: a });
        },
        ViewHeaderTrailing: function (e) {
            let { widget: t, hydration: l, title: n } = e,
                a = lo(t.id),
                s = lc(t.id);
            return a || (l?.status === "success" && tI(l.data))
                ? null
                : (0, i.jsx)(e6.I, {
                      label: n,
                      tabs: tE.map((e) => ({ id: e, label: tS(e) })),
                      selectedId: s,
                      panelId: ty(t.id),
                      getTabId: (e) => tC(t.id, e),
                      onSelect: (e) => lm(t.id, e),
                  });
        },
    },
    [r.a.WHITEBOARD]: {
        View: function (e) {
            let t,
                l,
                n = (0, ly.n)(),
                r = (0, v.bG)(
                    [lE.A, lS.A],
                    () => {
                        let e = null != n ? lE.A.getChannel(n) : void 0;
                        return null != e && lS.A.can(ek.xBc.USE_EMBEDDED_ACTIVITIES, e);
                    },
                    [n],
                ),
                d = (0, v.bG)(
                    [lM.Ay],
                    () => {
                        let e = lM.Ay.getCurrentEmbeddedActivity();
                        return null == e ||
                            e.applicationId !== lB.NW ||
                            e.location.kind !== lH.T.GUILD_CHANNEL ||
                            e.location.channel_id !== n
                            ? null
                            : e;
                    },
                    [n],
                ),
                c = (0, v.bG)([lM.Ay], () => lM.Ay.isLaunchingActivity(), []),
                { authResolved: o, isAuthorized: u } =
                    ((t = (0, v.bG)(
                        [lP.default],
                        () => lP.default.getFetchStateForApplication(lB.NW) === lP.FetchState.FETCHED,
                        [],
                    )),
                    (l = (0, v.bG)(
                        [lP.default, ec.A],
                        () => {
                            let e = lP.default.getNewestTokenForApplication(lB.NW);
                            if (null == e) return !1;
                            let t = ec.A.getApplication(lB.NW),
                                l = t?.integrationTypesConfig?.[lT.b.USER_INSTALL]?.oauth2InstallParams?.scopes;
                            if (null == l) return !0;
                            let n = new Set(e.scopes);
                            return l.every((e) => n.has(e));
                        },
                        [],
                    )),
                    a.useEffect(() => {
                        (lP.default.getFetchStateForApplication(lB.NW) === lP.FetchState.NOT_FETCHED &&
                            lG.A.fetch([lB.NW]),
                            null == ec.A.getApplication(lB.NW) && (0, lU.TA)(lB.NW));
                    }, []),
                    { authResolved: t, isAuthorized: l }),
                m = a.useRef(!1);
            a.useEffect(() => {
                null == d && null != n && r && o && u && !m.current && ((m.current = !0), lW(n));
            }, [r, n, d, o, u]);
            let x = a.useCallback(() => {
                    null != n && ((m.current = !0), lW(n));
                }, [n]),
                h = null != n && o && !u;
            return null == n
                ? (0, i.jsx)(ez.B, {
                      className: l$.kL,
                      align: "center",
                      justify: "center",
                      children: (0, i.jsx)(s, { alt: "", width: 200 }),
                  })
                : r
                  ? (0, i.jsxs)("div", {
                        className: l$.kL,
                        children: [
                            null != d &&
                                (0, i.jsx)(lY.A, {
                                    frameId: (0, lK.Ri)(d),
                                    level: lq.A.WithinAppContent,
                                    className: l$.t$,
                                }),
                            null == d &&
                                h &&
                                (0, i.jsx)("div", {
                                    className: l$.P5,
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
                        className: l$.kL,
                        children: (0, i.jsx)("div", {
                            className: l$.m0,
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
                n = lC.default.castGuildIdAsEveryoneGuildRoleId(l),
                s = (0, ly.n)(),
                r = (0, v.bG)([lE.A], () => (null != s ? lE.A.getChannel(s) : void 0), [s]),
                d = (0, v.bG)([lS.A], () => null != r && lS.A.can(ek.xBc.MANAGE_ROLES, r), [r]),
                c = (0, v.bG)([lI.A], () => (null == l ? lF : lI.A.getSortedRoles(l).filter((e) => e.id !== n)), [
                    l,
                    n,
                ]),
                o = a.useMemo(() => {
                    let e;
                    return null != r
                        ? null != (e = r.permissionOverwrites[r.guild_id]) &&
                          lk.zy(e.deny, ek.xBc.USE_EMBEDDED_ACTIVITIES)
                            ? c
                                  .filter((e) => {
                                      let t = r.permissionOverwrites[e.id];
                                      return null != t && lk.zy(t.allow, ek.xBc.USE_EMBEDDED_ACTIVITIES);
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
                        (await lz({ channel: r, selectedRoleIds: j }), t());
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
                          (0, i.jsx)(lb.Z, {
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
