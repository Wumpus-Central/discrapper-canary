l.d(t, { m: () => tV });
var n,
    i = l(477900),
    a = l(582128),
    s = l(593673),
    r = l(661531),
    d = l(369606),
    o = l(866665),
    c = l(408278),
    u = l(26430),
    m = l(562073),
    x = l(834730),
    f = l(650583),
    h = l(684343);
function g(e) {
    let { label: t, tabs: l, selectedId: n, panelId: s, getTabId: r, onSelect: d } = e,
        o = a.useCallback((e) => {
            let t,
                l = e.currentTarget,
                n = l.closest('[role="tablist"]');
            if (null == n) return;
            let i = Array.from(n.querySelectorAll('[role="tab"]')),
                a = i.indexOf(l);
            if (-1 !== a && 0 !== i.length) {
                switch (e.key) {
                    case f.dh.ARROW_RIGHT:
                    case f.dh.ARROW_DOWN:
                        t = (a + 1) % i.length;
                        break;
                    case f.dh.ARROW_LEFT:
                    case f.dh.ARROW_UP:
                        t = (a - 1 + i.length) % i.length;
                        break;
                    case f.dh.HOME:
                        t = 0;
                        break;
                    case f.dh.END:
                        t = i.length - 1;
                        break;
                    default:
                        return;
                }
                (e.preventDefault(), i[t]?.focus());
            }
        }, []);
    return (0, i.jsx)("div", {
        className: h.vR,
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
                    className: h.Mf,
                    "aria-selected": t,
                    "aria-controls": s,
                    tabIndex: t ? 0 : -1,
                    onClick: () => d(e.id),
                    onKeyDown: o,
                    children: (0, i.jsx)(x.E, {
                        className: h.Pf,
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
l(539888);
var p = l(289873),
    j = l(738188),
    v = l(375708),
    A = l(448492);
function E() {
    return (0, i.jsx)("div", {
        className: A.w,
        children: (0, i.jsx)(p.y, { type: p.y.Type.SPINNING_CIRCLE, "aria-label": v.intl.string(v.t.ZTNur7) }),
    });
}
function _() {
    return (0, i.jsxs)("div", {
        className: A.w,
        role: "alert",
        children: [
            (0, i.jsx)(j.WarningIcon, { size: "md", color: "text-feedback-critical", "aria-hidden": !0 }),
            (0, i.jsx)(x.E, { variant: "text-sm/normal", color: "text-muted", children: v.intl.string(v.t.F8FvUy) }),
        ],
    });
}
var I = l(980707),
    N = l(477782),
    b = l(922016),
    S = l(847374),
    y = l(914173);
function T(e) {
    let { navId: t, options: l, selectedId: n, label: a, onSelect: s, onClose: r } = e;
    return (0, i.jsx)(I.W, {
        navId: t,
        "aria-label": a,
        onClose: r,
        onSelect: void 0,
        children: l.map((e) =>
            (0, i.jsx)(
                N.iD,
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
function C(e) {
    let { navId: t, options: l, selectedId: n, menuLabel: s, triggerLabel: d, onSelect: o } = e,
        [c, u] = a.useState(!1),
        m = a.useRef(null),
        f = l.find((e) => e.id === n);
    return null == f
        ? null
        : (0, i.jsx)(b.Y, {
              targetElementRef: m,
              position: "bottom",
              align: "left",
              shouldShow: c,
              onRequestOpen: () => u(!0),
              onRequestClose: () => u(!1),
              renderPopout: (e) => {
                  let { closePopout: a } = e;
                  return (0, i.jsx)(T, { navId: t, options: l, selectedId: n, label: s, onSelect: o, onClose: a });
              },
              children: (e) =>
                  (0, i.jsxs)("button", {
                      ...e,
                      ref: m,
                      type: "button",
                      className: y.hZ,
                      "aria-haspopup": "menu",
                      "aria-label": d,
                      children: [
                          null != f.icon && (0, i.jsx)("span", { className: y.Kk, children: f.icon }),
                          (0, i.jsx)(x.E, {
                              className: y.DD,
                              tag: "span",
                              variant: "heading-sm/medium",
                              color: "text-default",
                              children: f.label,
                          }),
                          (0, i.jsx)("span", {
                              className: y.Kk,
                              children: (0, i.jsx)(S.a, {
                                  size: "xs",
                                  color: r.A.colors.ICON_DEFAULT,
                                  "aria-hidden": !0,
                              }),
                          }),
                      ],
                  }),
          });
}
var w = l(503698),
    D = l.n(w),
    R = l(17928),
    L = l(364522),
    M = l(663417),
    k = l(80682),
    G = l(287809),
    P = l(58703),
    U = l(927813),
    O = l(331322),
    W = l(297264),
    B = l(251812);
function z(e) {
    return e.entries.length < 3;
}
function F(e) {
    return (0, B.K)(z(e) ? void 0 : e.stat).name;
}
var H = l(104129),
    Y = l(823353);
function q() {
    return (0, i.jsxs)(O.B, {
        className: Y.w,
        align: "center",
        justify: "center",
        gap: 6,
        children: [
            (0, i.jsx)(W.D, {
                variant: "heading-md/semibold",
                color: "text-default",
                children: v.intl.string(H.default.ULK65a),
            }),
            (0, i.jsx)(x.E, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: v.intl.format(H.default["81PK67"], { memberCount: 3 }),
            }),
        ],
    });
}
var K = l(778712),
    $ = l(463930),
    V = l(97808),
    X = l(939249),
    Q = l(342296),
    Z = l(518782);
function J(e) {
    let t = Math.floor(Math.max(e, 0) / U.A.Seconds.MINUTE);
    return v.intl.formatToPlainString(H.default["6Y8H0A"], {
        hours: Math.floor(t / U.A.Minutes.HOUR),
        minutes: t % U.A.Minutes.HOUR,
    });
}
function ee(e, t) {
    switch (t) {
        case Z.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return {
                primary: v.intl.formatToPlainString(v.t["k2UNz+"], { days: e.value }),
                secondary: J(e.time_played_seconds),
            };
        case Z.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return {
                primary: v.intl.formatToPlainString(H.default.rgpc8E, { count: e.value }),
                secondary: J(e.time_played_seconds),
            };
        case Z.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            let l, n, i;
            return {
                primary:
                    ((n = Math.floor((l = Math.floor(Math.max(e.value, 0) / U.A.Millis.MINUTE)) / U.A.Minutes.HOUR)),
                    (i = l % U.A.Minutes.HOUR),
                    0 === n
                        ? v.intl.formatToPlainString(H.default.bgQf2H, { minutes: i })
                        : 0 === i
                          ? v.intl.formatToPlainString(H.default["D/HToK"], { hours: n })
                          : v.intl.formatToPlainString(H.default.fvtrHn, { hours: n, minutes: i })),
            };
        default:
            return { primary: "\u2014" };
    }
}
var et = l(140735),
    el = l(81466),
    en = l(406810),
    ei = l(687966),
    ea = l(109112),
    es = l(683063),
    er = l(573435),
    ed = l(402860),
    eo = l(396583),
    ec = l(587895),
    eu = l(429913),
    em = l(967144),
    ex = l(696451),
    ef = l(562153);
function eh(e, t) {
    return { id: e, name: v.intl.string(H.default.rhDbuQ), iconUrl: void 0, isLoading: t };
}
function eg(e, t) {
    return e.get(t) ?? eh(t, !1);
}
function ep(e, t) {
    return t.map((t) => eg(e, t));
}
function ej(e, t, l) {
    let n = t.user_id,
        i = (0, R.bG)([G.default], () => G.default.getUser(n), [n]),
        a = (0, R.bG)([ex.Ay], () => ex.Ay.getMember(e, n), [e, n]),
        s = (0, em.gn)(e, n, a?.colorStrings ?? null),
        r = ef.Ay.useName(e, void 0, i),
        d = null != i ? r : t.name;
    return {
        user: i,
        member: a,
        roleColorStrings: s,
        baseName: d,
        displayName: l ? v.intl.formatToPlainString(H.default.subXXA, { name: d }) : d,
    };
}
var ev = l(518477),
    eA = l(870087);
function eE(e) {
    let {
            guildId: t,
            entry: l,
            stat: n,
            games: a,
            isCurrentUser: s,
            shouldDimForCurrentUser: r,
            isFloating: d = !1,
            rowRef: o,
        } = e,
        c = ej(t, l, s),
        u = l.application_ids[0],
        m = null != u ? eg(a, u) : void 0;
    return (0, i.jsxs)("div", {
        ref: o,
        "aria-hidden": d,
        inert: d,
        className: D()(eA.nM, { [eA.Bh]: s && !d, [eA.lR]: r }),
        children: [
            (0, i.jsx)(e_, { guildId: t, entry: l, identity: c, lastPlayedGame: m }),
            (0, i.jsx)(eb, { entry: l, stat: n }),
            (0, i.jsx)(eC, {
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
function e_(e) {
    let { guildId: t, entry: l, identity: n, lastPlayedGame: s } = e,
        r = a.useRef(null),
        d = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(eI, { rank: l.rank }),
                (0, i.jsx)(V.eu, {
                    size: K._3.SIZE_32,
                    src: n.user?.getAvatarURL(t, (0, K.FT)(K._3.SIZE_32)) ?? void 0,
                    className: eA.my,
                    "aria-hidden": !0,
                }),
                (0, i.jsxs)("div", {
                    className: eA.Dc,
                    children: [
                        (0, i.jsx)(W.D, {
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            lineClamp: 1,
                            children: (0, i.jsx)($.g, {
                                name: n.displayName,
                                colorString: n.member?.colorString ?? null,
                                colorStrings: n.roleColorStrings,
                            }),
                        }),
                        null != s &&
                            (0, i.jsx)(x.E, {
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                lineClamp: 1,
                                children: v.intl.formatToPlainString(H.default.YuNVPY, { gameName: s.name }),
                            }),
                    ],
                }),
            ],
        });
    return null == n.user
        ? (0, i.jsx)("div", { className: eA.D_, children: d })
        : (0, i.jsx)(Q.A, {
              targetElementRef: r,
              user: n.user,
              guildId: t,
              children: (e) => (0, i.jsx)(X.D, { ...e, innerRef: r, className: D()(eA.D_, eA.FB), children: d }),
          });
}
function eI(e) {
    let { rank: t } = e,
        l = v.intl.formatToPlainString(H.default.I4JiAQ, { rank: t });
    switch (t) {
        case 1:
            return (0, i.jsx)("div", {
                className: eA.Tm,
                "aria-label": l,
                children: (0, i.jsx)("div", { className: eA.Xe }),
            });
        case 2:
            return (0, i.jsx)("div", {
                className: eA.Tm,
                "aria-label": l,
                children: (0, i.jsx)("div", { className: eA.XQ }),
            });
        case 3:
            return (0, i.jsx)("div", {
                className: eA.Tm,
                "aria-label": l,
                children: (0, i.jsx)("div", { className: eA.c9 }),
            });
        default:
            return (0, i.jsxs)("div", {
                className: eA.mH,
                children: [
                    (0, i.jsx)(et.A, { children: l }),
                    (0, i.jsx)(x.E, {
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
            return (0, i.jsx)(el.CalendarIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case Z.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            return (0, i.jsx)(en.ClockIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case Z.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return (0, i.jsx)(ei.GameControllerIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        default:
            return null;
    }
}
function eb(e) {
    let { entry: t, stat: l } = e,
        { primary: n, secondary: a } = ee(t, l);
    return (0, i.jsxs)("div", {
        className: eA.TH,
        children: [
            (0, i.jsxs)("div", {
                className: eA.bf,
                children: [
                    (0, i.jsx)(eN, { stat: l }),
                    (0, i.jsx)(x.E, { variant: "text-sm/medium", color: "text-subtle", children: n }),
                ],
            }),
            null != a && (0, i.jsx)(x.E, { variant: "text-xs/medium", color: "text-muted", children: a }),
        ],
    });
}
function eS(e) {
    let { game: t, notched: l } = e;
    return (0, i.jsx)("span", {
        className: eA.rO,
        "aria-hidden": !0,
        children: (0, i.jsx)(er.Ay, {
            mask: l ? er.l8[24] : er.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null != t.iconUrl
                    ? (0, i.jsx)("img", { className: eA.Gt, src: t.iconUrl, alt: "", "aria-hidden": !0 })
                    : (0, i.jsx)("span", {
                          className: eA.ct,
                          "aria-hidden": !0,
                          children: !t.isLoading && (0, i.jsx)(ea._, { size: "xxs", color: r.A.colors.ICON_SUBTLE }),
                      }),
        }),
    });
}
function ey(e) {
    let { played: t, totalCount: l } = e,
        n = t.slice(0, 2),
        a = l - n.length;
    return (0, i.jsxs)("div", {
        className: eA.Nw,
        children: [
            n.map((e, t) => (0, i.jsx)(eS, { game: e, notched: a > 0 || t !== n.length - 1 }, `${e.id}-${t}`)),
            a > 0
                ? (0, i.jsx)("span", {
                      className: eA.rO,
                      children: (0, i.jsx)(er.Ay, {
                          mask: er.Ay.Masks.SQUIRCLE,
                          width: 24,
                          height: 24,
                          children: (0, i.jsx)("div", {
                              className: eA.p0,
                              children: (0, i.jsx)(x.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-subtle",
                                  children: v.intl.formatToPlainString(H.default.JiMMEd, { count: a }),
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
    return (0, i.jsx)(es.u, {
        body:
            0 === t.length
                ? v.intl.string(H.default["7CrlYb"])
                : 1 === t.length
                  ? v.intl.formatToPlainString(H.default.dbNpK0, { firstGame: t[0].name })
                  : 2 === t.length && 2 === l
                    ? v.intl.formatToPlainString(H.default.tqVg4M, { firstGame: t[0].name, secondGame: t[1].name })
                    : v.intl.formatToPlainString(H.default.bxcrSz, {
                          firstGame: t[0].name,
                          secondGame: t[1].name,
                          otherCount: l - 2,
                      }),
        asset: t.length > 0 ? (0, i.jsx)(ey, { played: t, totalCount: t.length }) : void 0,
        assetSize: t.length > 1 ? 43 : 24,
        children: n,
    });
}
function eC(e) {
    let { guildId: t, userId: l, name: n, applicationIds: s, applicationCount: r, games: d } = e,
        o = ep(d, s),
        c = a.useCallback(() => {
            (0, ed.openUserProfileModal)({
                userId: l,
                guildId: t,
                tabSection: ev.RP.ACTIVITY,
                scrollTarget: ev.bk.RECENT_ACTIVITY,
            });
        }, [l, t]);
    return (0, i.jsx)("div", {
        className: eA.ag,
        children: (0, i.jsx)(eT, {
            played: o,
            totalCount: r,
            children: (0, i.jsx)(X.D, {
                className: D()(eA.Nw, eA.Dz),
                "aria-label": v.intl.formatToPlainString(H.default.o6mBdl, { name: n }),
                onClick: c,
                children: (0, i.jsx)(ey, { played: o, totalCount: r }),
            }),
        }),
    });
}
var ew = l(189043);
function eD(e) {
    let { guildId: t, entries: l, stat: n, games: a, currentUserEntry: s, currentUserPillarRef: r } = e,
        d = {
            1: { column: ew.HC, pillar: ew.P5 },
            2: { column: ew.th, pillar: ew.Vk },
            3: { column: ew.Ou, pillar: ew.el },
        };
    return (0, i.jsx)("div", {
        className: ew.pI,
        role: "list",
        "aria-label": v.intl.string(H.default.wKXLfQ),
        children: l.map((e, l) =>
            (0, i.jsx)(
                eR,
                {
                    guildId: t,
                    entry: e,
                    place: l + 1,
                    columnClassName: d[l + 1].column,
                    pillarClassName: d[l + 1].pillar,
                    stat: n,
                    games: a,
                    isCurrentUser: e === s,
                    currentUserPillarRef: e === s ? r : void 0,
                },
                e.user_id,
            ),
        ),
    });
}
function eR(e) {
    let {
            guildId: t,
            entry: l,
            place: n,
            columnClassName: s,
            pillarClassName: r,
            stat: d,
            games: o,
            isCurrentUser: c,
            currentUserPillarRef: u,
        } = e,
        m = ep(o, l.application_ids),
        f = ej(t, l, c),
        { primary: h } = ee(l, d),
        g = 1 === n ? K._3.SIZE_48 : K._3.SIZE_40,
        p = a.useRef(null),
        j = D()(ew.dR, { [ew.m$]: 1 === n, [ew.wd]: 2 === n, [ew.p0]: 3 === n }),
        v = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(W.D, {
                    variant: "heading-sm/semibold",
                    color: "text-default",
                    lineClamp: 1,
                    className: ew.IY,
                    children: (0, i.jsx)($.g, {
                        name: f.displayName,
                        colorString: f.member?.colorString ?? null,
                        colorStrings: f.roleColorStrings,
                    }),
                }),
                (0, i.jsx)(eT, {
                    played: m,
                    totalCount: l.application_count,
                    children: (0, i.jsx)(x.E, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        tabularNumbers: !0,
                        children: h,
                    }),
                }),
            ],
        });
    return (0, i.jsxs)("div", {
        className: D()(ew.fs, s),
        role: "listitem",
        ref: c ? u : void 0,
        children: [
            (0, i.jsxs)("div", {
                className: ew.R3,
                children: [
                    (0, i.jsx)(V.eu, {
                        size: g,
                        src: f.user?.getAvatarURL(t, (0, K.FT)(g)) ?? void 0,
                        "aria-hidden": !0,
                    }),
                    (0, i.jsx)("div", { className: j }),
                ],
            }),
            null != f.user
                ? (0, i.jsx)(Q.A, {
                      targetElementRef: p,
                      user: f.user,
                      guildId: t,
                      children: (e) => (0, i.jsx)(X.D, { ...e, className: D()(ew.DX, r), innerRef: p, children: v }),
                  })
                : (0, i.jsx)("div", { className: D()(ew.DX, r), children: v }),
        ],
    });
}
var eL = l(219047);
function eM(e) {
    let t,
        l,
        n,
        { guildId: s, data: r, inModal: d = !1 } = e,
        { stat: o, entries: c, computed_at: u, week_start_ts: m } = r,
        x = null != u && new Date(u).getTime() - m * U.A.Millis.SECOND >= U.A.Millis.WEEK,
        f = (0, R.bG)([G.default], () => G.default.getCurrentUser()?.id),
        h = a.useMemo(() => c.find((e) => e.user_id === f), [c, f]),
        g = a.useMemo(() => {
            let e = c.slice(0, 20);
            return null == h || e.includes(h) ? e : [...e, h];
        }, [c, h]),
        p = a.useMemo(() => Array.from(new Set(g.map((e) => e.user_id))), [g]);
    (0, k.k6)(s, p);
    let j =
            ((t = a.useMemo(() => Array.from(new Set(g.flatMap((e) => e.application_ids))), [g])),
            (l = (0, eu.A)(t)),
            (n = (0, R.yK)([ec.A], () => t.map((e) => ec.A.didFetchingApplicationFail(e)))),
            a.useMemo(() => {
                let e = new Map();
                return (
                    t.forEach((t, i) => {
                        let a = l[i];
                        e.set(
                            t,
                            null != a
                                ? { id: t, name: a.name, iconUrl: a.getIconURL(64) ?? void 0, isLoading: !1 }
                                : eh(t, !n[i]),
                        );
                    }),
                    e
                );
            }, [t, l, n])),
        {
            scrollerRef: v,
            userRowRef: A,
            floatingRowPosition: E,
        } = (function () {
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
                                {
                                    clippedPx: n + (i = Math.max(0, t.bottom - l.bottom)),
                                    floatTo: n > i ? "top" : "bottom",
                                });
                            s(() => (r <= 1 ? "visible" : d));
                        },
                        { root: e, threshold: [0, 0.1, 0.5, 0.9, 1] },
                    );
                    return (t.observe(l), () => t.disconnect());
                }, [e, l]),
                { scrollerRef: t, userRowRef: n, floatingRowPosition: "top" === i || "bottom" === i ? i : null }
            );
        })(),
        _ = null != E,
        I = a.useCallback(
            (e) => {
                let t = e === h;
                return (0, i.jsx)(
                    eE,
                    {
                        guildId: s,
                        entry: e,
                        stat: o,
                        games: j,
                        isCurrentUser: t,
                        shouldDimForCurrentUser: t && _,
                        rowRef: t ? A : void 0,
                    },
                    `${e.rank}-${e.user_id}`,
                );
            },
            [_, h, j, s, o, A],
        );
    if (z(r)) return (0, i.jsx)(q, {});
    let N = x ? g.slice(3) : g,
        b = [g[0], g[1], g[2]];
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsxs)("div", {
                className: eL.SY,
                children: [
                    (0, i.jsxs)(L.d_, {
                        className: D()(eL.p_, { [eL.zE]: d }),
                        ref: v,
                        children: [
                            x &&
                                (0, i.jsx)(eD, {
                                    guildId: s,
                                    entries: b,
                                    stat: o,
                                    games: j,
                                    currentUserEntry: h,
                                    currentUserPillarRef: A,
                                }),
                            N.map(I),
                        ],
                    }),
                    null != h && null != E && (0, i.jsx)("div", { className: D()(eL.Dz, "top" === E ? eL.gN : eL.qV) }),
                    null != h &&
                        null != E &&
                        (0, i.jsx)("div", {
                            className: D()(eL.z$, "top" === E ? eL.aG : eL.Ie),
                            children: (0, i.jsx)(eE, {
                                guildId: s,
                                entry: h,
                                stat: o,
                                games: j,
                                isCurrentUser: !0,
                                shouldDimForCurrentUser: !1,
                                isFloating: !0,
                            }),
                        }),
                ],
            }),
            (0, i.jsx)(ek, { computedAt: r.computed_at, inModal: d }),
        ],
    });
}
function ek(e) {
    let { computedAt: t, inModal: l } = e,
        n = (0, i.jsxs)("div", {
            className: eL.z8,
            children: [
                (0, i.jsx)(M.RefreshIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 }),
                (0, i.jsx)(x.E, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: v.intl.string(H.default["/nma+a"]),
                }),
            ],
        });
    return null == t
        ? (0, i.jsx)("div", { className: eL.qr, children: n })
        : (0, i.jsx)("div", {
              className: D()(eL.qr, { [eL.zE]: l }),
              tabIndex: 0,
              children: (0, i.jsx)(o.m, {
                  text: v.intl.formatToPlainString(H.default["1bt50t"], { timestamp: (0, P.mk)(new Date(t)) }),
                  position: "bottom",
                  children: n,
              }),
          });
}
var eG = l(224640),
    eP = l(20742),
    eU = l(192308),
    eO = l(885386),
    eW = l(515746);
function eB(e) {
    let { data: t } = e,
        l = (0, B.K)(t.stat),
        {
            ended: n,
            endDate: s,
            badgeLabel: r,
        } = (function (e) {
            let t = (e + U.A.Seconds.WEEK) * U.A.Millis.SECOND,
                [l, n] = a.useState(() => Date.now()),
                i = t - l,
                s = i <= 0,
                r = i - (Math.ceil(i / U.A.Millis.DAY) - 1) * U.A.Millis.DAY;
            return (
                (0, eo.A)(() => n(Date.now()), s ? null : r),
                a.useMemo(
                    () => ({
                        ended: s,
                        endDate: new Date(t),
                        badgeLabel: s
                            ? v.intl.string(H.default["J8r/7L"])
                            : v.intl.formatToPlainString(H.default["PuaR+2"], { days: Math.ceil(i / U.A.Millis.DAY) }),
                    }),
                    [s, t, i],
                )
            );
        })(t.week_start_ts),
        d = eO.PZ.useSetting(),
        o = 2 > (0, P.m_)(s, new Date()) ? (0, P.mk)(s, !1, d) : (0, P.i$)(s, "L LT", d),
        c = n
            ? v.intl.format(H.default.kG9XmM, { endedAt: o, nextStatName: (0, B.K)(t.next_stat).name })
            : v.intl.format(H.default["X+VLqi"], { statQuestion: l.question, endsAt: o });
    return (0, i.jsx)(es.u, {
        title: l.name,
        body: c,
        position: "top",
        children: (0, i.jsx)("div", {
            className: eW.q,
            tabIndex: 0,
            children: (0, i.jsx)(x.E, {
                variant: "text-xs/semibold",
                color: n ? "text-muted" : "text-brand",
                children: r,
            }),
        }),
    });
}
var ez = l(460614);
function eF(e) {
    let { guildId: t, data: l, modalProps: n } = e;
    return (0, i.jsxs)(eG.d, {
        size: "lg",
        "aria-label": F(l),
        ...n,
        children: [
            (0, i.jsxs)("div", {
                className: ez.wx,
                children: [
                    (0, i.jsxs)("div", {
                        className: ez.LD,
                        children: [
                            (0, i.jsx)(d.TrophyIcon, { size: "xs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 }),
                            (0, i.jsx)(W.D, { variant: "heading-sm/medium", className: ez.DD, children: F(l) }),
                            (0, i.jsx)(eB, { data: l }),
                        ],
                    }),
                    (0, i.jsx)(eP.s_, {}),
                ],
            }),
            (0, i.jsx)("div", { className: ez.rf, children: (0, i.jsx)(eM, { guildId: t, data: l, inModal: !0 }) }),
        ],
    });
}
var eH = l(452027),
    eY = l(103557),
    eq = l(825484),
    eK = l(821609),
    e$ = l(95477),
    eV = l(241326),
    eX = l(683071),
    eQ = l(2553),
    eZ = l(405810),
    eJ = l(967198),
    e0 = l(488428),
    e1 = l(776231),
    e8 = l(676279),
    e2 = l(652215);
let e7 = (0, e8.cy)();
function e3(e, t, l) {
    let n = l.startsWith("a_"),
        i = n ? (e7 ? "webp" : "gif") : e7 ? "webp" : "jpg",
        { CDN_HOST: a, API_ENDPOINT: s } = window.GLOBAL_ENV,
        r = e2.Rsh.GUILD_SPACE_IMAGE_TEXT_WIDGET_IMAGE(e, t, l, i),
        d = null != a ? `https://${a}${r}` : location.protocol + s + r,
        o = { size: (0, e1.kr)(500 * (0, e1.mZ)()) };
    return (
        "jpg" === i && (o.quality = "lossless"), "webp" === i && n && (o.animated = !0), (d += `?${e0.stringify(o)}`)
    );
}
var e6 = l(868602),
    e5 = l(445187),
    e4 = l(28863),
    e9 = l(109487),
    te = l(272984),
    tt = l(279543);
function tl(e) {
    let { isCompact: t } = e;
    return (0, i.jsxs)("div", {
        className: tt.qr,
        children: [
            (0, i.jsxs)("div", {
                className: tt.Os,
                children: [
                    (0, i.jsx)("span", {
                        className: tt.Kk,
                        children: (0, i.jsx)(M.RefreshIcon, {
                            size: "xxs",
                            color: r.A.colors.ICON_SUBTLE,
                            "aria-hidden": !0,
                        }),
                    }),
                    (0, i.jsx)(x.E, {
                        className: tt.Pf,
                        tag: "span",
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: v.intl.string(H.default["3/DOFo"]),
                    }),
                ],
            }),
            (0, i.jsxs)(e4.Anchor, {
                className: tt.al,
                href: te.RQ.WEB_HOME,
                "aria-label": v.intl.string(H.default["jUr+wF"]),
                children: [
                    (0, i.jsx)("span", {
                        className: tt.Kk,
                        children: (0, i.jsx)(e9.L, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    }),
                    !t &&
                        (0, i.jsx)(x.E, {
                            className: tt.G2,
                            tag: "span",
                            variant: "text-xs/medium",
                            color: "none",
                            children: v.intl.string(H.default.ZdPp2q),
                        }),
                ],
            }),
        ],
    });
}
var tn = (((n = {}).TOP_SONGS = "top_songs"), (n.TOP_ARTISTS = "top_artists"), (n.TOP_LISTENERS = "top_listeners"), n);
let ti = ["top_songs", "top_artists", "top_listeners"];
function ta(e) {
    switch (e) {
        case "top_songs":
            return v.intl.string(H.default.KgeEtx);
        case "top_artists":
            return v.intl.string(H.default.RYxWTS);
        case "top_listeners":
            return v.intl.string(H.default.KO73KB);
    }
}
function ts(e, t) {
    return `popular-music-tab-${e}-${t}`;
}
function tr(e) {
    return `popular-music-panel-${e}`;
}
var td = l(756936);
function to(e) {
    let { view: t, data: l } = e;
    return (0, i.jsxs)("div", {
        className: td.rv,
        children: [
            (0, i.jsx)(x.E, { variant: "text-sm/semibold", color: "text-default", children: ta(t) }),
            (function (e, t) {
                switch (e) {
                    case "top_songs":
                        return t.ranked_songs.map((e) => e.track_title ?? e.track_external_id);
                    case "top_artists":
                        return t.ranked_artists.map((e) => e.artist_name ?? e.artist_external_id);
                    case "top_listeners":
                        return t.top_listeners.map((e) => e.user_id);
                }
            })(t, l).map((e, t) =>
                (0, i.jsx)(
                    x.E,
                    { className: td.tH, variant: "text-sm/normal", color: "text-muted", children: e },
                    `${e}-${t}`,
                ),
            ),
        ],
    });
}
var tc = l(196765),
    tu = l(770178);
let tm = { view: "top_songs", isCompact: !1 },
    tx = (0, tc.v)(() => ({ byWidgetId: {} }));
function tf(e, t) {
    tx.setState((l) => {
        let n = l.byWidgetId[e] ?? tm;
        return { byWidgetId: { ...l.byWidgetId, [e]: { ...n, ...t } } };
    });
}
function th(e) {
    return tx((t) => t.byWidgetId[e]?.view ?? tm.view);
}
function tg(e) {
    return tx((t) => t.byWidgetId[e]?.isCompact ?? tm.isCompact);
}
var tp = l(831544),
    tj = l(597601),
    tv = l(432017),
    tA = l(871107);
function tE(e) {
    let { view: t } = e,
        l = r.A.colors.ICON_DEFAULT;
    switch (t) {
        case tn.TOP_ARTISTS:
            return (0, i.jsx)(tp.MicrophoneIcon, { size: "xs", color: l, "aria-hidden": !0 });
        case tn.TOP_LISTENERS:
            return (0, i.jsx)(tj.L, { size: "xs", color: l, "aria-hidden": !0 });
        case tn.TOP_SONGS:
            return (0, i.jsx)(tv.T, { size: "xs", color: l, "aria-hidden": !0 });
    }
}
function t_(e) {
    let { widgetId: t, title: l } = e,
        n = tg(t),
        a = th(t);
    if (!n)
        return (0, i.jsxs)("div", {
            className: tA.$,
            children: [
                (0, i.jsx)("span", {
                    className: tA.K,
                    children: (0, i.jsx)(tv.T, { size: "xs", color: r.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
                }),
                (0, i.jsx)(m.q, { children: l }),
            ],
        });
    let s = ti.map((e) => ({ id: e, label: ta(e), icon: (0, i.jsx)(tE, { view: e }) }));
    return (0, i.jsx)(C, {
        navId: "popular-music-view",
        options: s,
        selectedId: a,
        menuLabel: v.intl.string(H.default.hFYyGU),
        triggerLabel: v.intl.formatToPlainString(H.default["/sw0JL"], { widgetName: l, viewName: ta(a) }),
        onSelect: (e) => {
            tf(t, { view: e });
        },
    });
}
var tI = l(890497),
    tN = l(734057),
    tb = l(317525),
    tS = l(576705),
    ty = l(935208),
    tT = l(44167);
l(321073);
var tC = l(485845),
    tw = l(136722),
    tD = l(435183),
    tR = l(155718),
    tL = l(795816),
    tM = l(933958),
    tk = l(574152),
    tG = l(627363),
    tP = l(712440),
    tU = l(733110),
    tO = l(488926),
    tW = l(818023);
async function tB(e) {
    null == ec.A.getApplication(tW.NW) && (await (0, tG.TA)(tW.NW));
    let t = tM.Ay.getEmbeddedActivitiesForChannel(e).every((e) => e.applicationId !== tW.NW);
    return await (0, tL.su)({
        channelId: e,
        applicationId: tW.NW,
        isStart: t,
        embeddedActivitiesManager: (0, tk.A)(),
        renderInFramePool: !0,
    });
}
async function tz(e) {
    let { channel: t, selectedRoleIds: l } = e,
        n = [];
    if (l.length > 0)
        for (let e of (n.push({ id: t.guild_id, type: tR.r2.ROLE, allow: tO.x3, deny: e2.xBc.USE_EMBEDDED_ACTIVITIES }),
        l))
            n.push({ id: e, type: tR.r2.ROLE, allow: e2.xBc.USE_EMBEDDED_ACTIVITIES, deny: tO.x3 });
    let i = await (0, tD.RT)(t.id, { permissionOverwrites: n });
    if (!i.ok) throw i;
}
let tF = [];
var tH = l(344351),
    tY = l(256693),
    tq = l(812901),
    tK = l(317608),
    t$ = l(953538);
let tV = {
    [s.a.IMAGE_TEXT]: {
        View: function (e) {
            let { widget: t, guildSpaceMode: l, guildId: n } = e,
                { text: a, image_hash: s } = t.config,
                r = "edit" === l ? t.config.image : void 0,
                d = void 0 !== r ? r : null != s ? e3(n, t.id, s) : null;
            return (0, i.jsxs)("div", {
                className: e5.kL,
                children: [
                    null != d && (0, i.jsx)("img", { className: e5.Sl, src: d, alt: "" }),
                    null != a &&
                        (0, i.jsx)(x.E, {
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
                r = t.config,
                [d, u] = a.useState(r.title ?? ""),
                [m, x] = a.useState(r.text ?? ""),
                [f, h] = a.useState(r.image),
                [g, p] = a.useState(null),
                j = (0, R.bG)([eJ.A], () => eJ.A.getGuildId()),
                A = void 0 !== f ? f : null != r.image_hash && null != j ? e3(j, t.id, r.image_hash) : null;
            return (0, i.jsxs)(O.B, {
                gap: 16,
                children: [
                    (0, i.jsx)(e$.k, {
                        label: v.intl.string(v.t.gnwWrx),
                        value: d,
                        onChange: function (e) {
                            (p(null), u(e));
                        },
                        maxLength: 100,
                        showCharacterCount: !0,
                    }),
                    (0, i.jsx)(eH.D, {
                        label: v.intl.string(v.t.X4IxWL),
                        children: (0, i.jsxs)(O.B, {
                            gap: 16,
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            className: e6.B,
                            children: [
                                (0, i.jsxs)(O.B, {
                                    gap: 8,
                                    direction: "horizontal",
                                    children: [
                                        (0, i.jsx)(eZ.A, {
                                            variant: "secondary",
                                            text: v.intl.string(v.t["MsUY/S"]),
                                            onChange: function (e) {
                                                (p(null), h(e));
                                            },
                                            maxFileSizeBytes: 0xa00000,
                                            onFileSizeError: () => (0, eQ.A)(0xa00000),
                                        }),
                                        null != A &&
                                            (0, i.jsx)(o.m, {
                                                text: v.intl.string(v.t.N86XcP),
                                                ariaHidden: !0,
                                                children: (0, i.jsx)(c.K, {
                                                    variant: "critical-secondary",
                                                    icon: eV.TrashIcon,
                                                    onClick: function () {
                                                        (p(null), h(null));
                                                    },
                                                    "aria-label": v.intl.string(v.t.N86XcP),
                                                }),
                                            }),
                                    ],
                                }),
                                null != A && (0, i.jsx)("img", { className: e6.V, src: A, alt: "" }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(eY.f, {
                        label: v.intl.string(v.t.COGMNC),
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
                            children: (0, i.jsx)(eX.w, { type: "critical", children: g }),
                        }),
                    (0, i.jsxs)(eq.e, {
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(eK.$, { variant: "secondary", text: v.intl.string(v.t["ETE/oC"]), onClick: n }),
                            (0, i.jsx)(eK.$, {
                                variant: "primary",
                                text: v.intl.string(v.t["R3BPH+"]),
                                onClick: function () {
                                    let e;
                                    if (
                                        ((e = void 0 !== f ? null !== f : null != r.image_hash),
                                        0 === m.length && !e && (p(v.intl.string(H.default.zleX9q)), 1))
                                    )
                                        return;
                                    let t = {
                                        type: s.a.IMAGE_TEXT,
                                        image_hash: r.image_hash,
                                        text: m.length > 0 ? m : null,
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
        Title: function (e) {
            let { widget: t } = e;
            return (0, i.jsx)(m.q, { children: t.config.title ?? t.default_title ?? "" });
        },
    },
    [s.a.LEADERBOARD]: {
        View: function (e) {
            let { hydration: t, guildId: l } = e;
            return null == t || "idle" === t.status || "loading" === t.status
                ? (0, i.jsx)(E, {})
                : "error" === t.status
                  ? (0, i.jsx)(_, {})
                  : (0, i.jsx)(eM, { guildId: l, data: t.data });
        },
        Title: function (e) {
            let { widget: t, hydration: l } = e;
            return l?.status !== "success"
                ? (0, i.jsx)(m.q, { children: t.default_title ?? "" })
                : (0, i.jsx)(m.q, { children: F(l.data) });
        },
        TitleIcon: function () {
            return (0, i.jsx)(d.TrophyIcon, { size: "xs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        },
        HeaderAccessory: function (e) {
            let { hydration: t } = e;
            return t?.status !== "success" || z(t.data) ? null : (0, i.jsx)(eB, { data: t.data });
        },
        HeaderActions: function (e) {
            let { hydration: t, guildId: l } = e,
                n = t?.status === "success" ? t.data : void 0;
            return null != n && z(n)
                ? null
                : (0, i.jsx)(o.m, {
                      text: v.intl.string(v.t.dcl9MQ),
                      children: (0, i.jsx)(c.K, {
                          variant: "icon-only",
                          size: "sm",
                          icon: u._,
                          "aria-label": v.intl.string(v.t.dcl9MQ),
                          disabled: null == n,
                          onClick: function () {
                              null != n &&
                                  (function (e) {
                                      let { guildId: t, data: l } = e,
                                          n = (e) => (0, i.jsx)(eF, { guildId: t, data: l, modalProps: e });
                                      (0, eU.openModalLazy)(() => Promise.resolve(n), {
                                          modalKey: "guild-space-leaderboard-expand",
                                      });
                                  })({ guildId: l, data: n });
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
                { widget: d, hydration: o, guildSpaceMode: c } = e,
                u =
                    ((t = d.id),
                    (n = a.useRef(null)),
                    (s = a.useCallback(
                        (e) => {
                            tf(t, { isCompact: e.contentRect.width < 480 });
                        },
                        [t],
                    )),
                    (0, tu.g)(n, s, [t], { fireOnMount: !0 }),
                    a.useEffect(
                        () => () => {
                            tx.setState((e) => {
                                if (null == e.byWidgetId[t]) return e;
                                let l = { ...e.byWidgetId };
                                return (delete l[t], { byWidgetId: l });
                            });
                        },
                        [t],
                    ),
                    n),
                m = tg(d.id),
                x = th(d.id),
                f = !m && "view" === c,
                h =
                    o?.status === "success"
                        ? ((l = o.data),
                          null == (r = l.ranked_songs.find((e) => null != e.cover_art_hash)?.cover_art_hash)
                              ? null
                              : `https://i.scdn.co/image/${encodeURIComponent(r)}`)
                        : null;
            return (0, i.jsxs)("div", {
                className: td.rf,
                ref: u,
                children: [
                    null != h && (0, i.jsx)("img", { className: td.G, src: h, alt: "", "aria-hidden": !0 }),
                    (0, i.jsx)("div", {
                        className: td.Qs,
                        children: (0, i.jsx)("div", {
                            id: tr(d.id),
                            className: td.nd,
                            role: f ? "tabpanel" : "group",
                            tabIndex: 0,
                            "aria-label": f ? void 0 : ta(x),
                            "aria-labelledby": f ? ts(d.id, x) : void 0,
                            children:
                                null == o || "idle" === o.status || "loading" === o.status
                                    ? (0, i.jsx)(E, {})
                                    : "error" === o.status
                                      ? (0, i.jsx)(_, {})
                                      : (0, i.jsx)(to, { view: x, data: o.data }),
                        }),
                    }),
                    (0, i.jsx)(tl, { isCompact: m }),
                ],
            });
        },
        Title: function (e) {
            let { widget: t, guildSpaceMode: l } = e,
                n = t.default_title ?? v.intl.string(H.default["5xxUI2"]);
            return "edit" === l ? (0, i.jsx)(m.q, { children: n }) : (0, i.jsx)(t_, { widgetId: t.id, title: n });
        },
        ViewHeaderTrailing: function (e) {
            let { widget: t, title: l } = e,
                n = tg(t.id),
                a = th(t.id);
            return n
                ? null
                : (0, i.jsx)(g, {
                      label: l,
                      tabs: ti.map((e) => ({ id: e, label: ta(e) })),
                      selectedId: a,
                      panelId: tr(t.id),
                      getTabId: (e) => ts(t.id, e),
                      onSelect: (e) => {
                          tf(t.id, { view: e });
                      },
                  });
        },
    },
    [s.a.WHITEBOARD]: {
        View: function (e) {
            let t,
                l,
                n = (0, tT.n)(),
                s = (0, R.bG)(
                    [tN.A, tS.A],
                    () => {
                        let e = null != n ? tN.A.getChannel(n) : void 0;
                        return null != e && tS.A.can(e2.xBc.USE_EMBEDDED_ACTIVITIES, e);
                    },
                    [n],
                ),
                r = (0, R.bG)(
                    [tM.Ay],
                    () => {
                        let e = tM.Ay.getCurrentEmbeddedActivity();
                        return null == e ||
                            e.applicationId !== tW.NW ||
                            e.location.kind !== tH.T.GUILD_CHANNEL ||
                            e.location.channel_id !== n
                            ? null
                            : e;
                    },
                    [n],
                ),
                d = (0, R.bG)([tM.Ay], () => tM.Ay.isLaunchingActivity(), []),
                { authResolved: o, isAuthorized: c } =
                    ((t = (0, R.bG)(
                        [tU.default],
                        () => tU.default.getFetchStateForApplication(tW.NW) === tU.FetchState.FETCHED,
                        [],
                    )),
                    (l = (0, R.bG)(
                        [tU.default, ec.A],
                        () => {
                            let e = tU.default.getNewestTokenForApplication(tW.NW);
                            if (null == e) return !1;
                            let t = ec.A.getApplication(tW.NW),
                                l = t?.integrationTypesConfig?.[tC.b.USER_INSTALL]?.oauth2InstallParams?.scopes;
                            if (null == l) return !0;
                            let n = new Set(e.scopes);
                            return l.every((e) => n.has(e));
                        },
                        [],
                    )),
                    a.useEffect(() => {
                        (tU.default.getFetchStateForApplication(tW.NW) === tU.FetchState.NOT_FETCHED &&
                            tP.A.fetch([tW.NW]),
                            null == ec.A.getApplication(tW.NW) && (0, tG.TA)(tW.NW));
                    }, []),
                    { authResolved: t, isAuthorized: l }),
                u = a.useRef(!1);
            a.useEffect(() => {
                null == r && null != n && s && o && c && !u.current && ((u.current = !0), tB(n));
            }, [s, n, r, o, c]);
            let m = a.useCallback(() => {
                    null != n && ((u.current = !0), tB(n));
                }, [n]),
                f = null != n && o && !c;
            return s
                ? (0, i.jsxs)("div", {
                      className: t$.kL,
                      children: [
                          null != r &&
                              (0, i.jsx)(tK.A, {
                                  frameId: (0, tY.Ri)(r),
                                  level: tq.A.WithinAppContent,
                                  className: t$.t$,
                              }),
                          null == r &&
                              f &&
                              (0, i.jsx)("div", {
                                  className: t$.P5,
                                  children: (0, i.jsx)(eK.$, {
                                      variant: "secondary",
                                      text: v.intl.string(H.default.PSuly6),
                                      loading: d,
                                      onClick: m,
                                  }),
                              }),
                      ],
                  })
                : (0, i.jsx)("div", {
                      className: t$.kL,
                      children: (0, i.jsx)("div", {
                          className: t$.m0,
                          children: (0, i.jsx)(x.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: v.intl.string(H.default["nXc/MQ"]),
                          }),
                      }),
                  });
        },
        Edit: function (e) {
            let { cancel: t } = e,
                l = (0, R.bG)([eJ.A], () => eJ.A.getGuildId()),
                n = ty.default.castGuildIdAsEveryoneGuildRoleId(l),
                s = (0, tT.n)(),
                r = (0, R.bG)([tN.A], () => (null != s ? tN.A.getChannel(s) : void 0), [s]),
                d = (0, R.bG)([tS.A], () => null != r && tS.A.can(e2.xBc.MANAGE_ROLES, r), [r]),
                o = (0, R.bG)([tb.A], () => (null == l ? tF : tb.A.getSortedRoles(l).filter((e) => e.id !== n)), [
                    l,
                    n,
                ]),
                c = a.useMemo(() => {
                    let e;
                    return null != r
                        ? null != (e = r.permissionOverwrites[r.guild_id]) &&
                          tw.zy(e.deny, e2.xBc.USE_EMBEDDED_ACTIVITIES)
                            ? o
                                  .filter((e) => {
                                      let t = r.permissionOverwrites[e.id];
                                      return null != t && tw.zy(t.allow, e2.xBc.USE_EMBEDDED_ACTIVITIES);
                                  })
                                  .map((e) => e.id)
                            : []
                        : [];
                }, [r, o]),
                [u, m] = a.useState(null),
                [x, f] = a.useState(!1),
                [h, g] = a.useState(!1),
                p = u ?? c,
                j = a.useMemo(() => o.map((e) => ({ id: e.id, label: e.name, value: e.id })), [o]);
            async function A() {
                if (null != r) {
                    (g(!1), f(!0));
                    try {
                        (await tz({ channel: r, selectedRoleIds: p }), t());
                    } catch {
                        (f(!1), g(!0));
                    }
                }
            }
            return null == r
                ? null
                : (0, i.jsxs)(O.B, {
                      gap: 16,
                      children: [
                          (0, i.jsx)(tI.Z, {
                              selectionMode: "multiple",
                              label: v.intl.string(H.default.XXLbfv),
                              description: v.intl.string(H.default.XrpYIG),
                              placeholder: v.intl.string(H.default.pp6WeD),
                              options: j,
                              value: p,
                              onSelectionChange: function (e) {
                                  (g(!1), m(e));
                              },
                              disabled: !d || x,
                              fullWidth: !0,
                              wrapTags: !0,
                          }),
                          !d && (0, i.jsx)(eX.w, { type: "warning", children: v.intl.string(H.default.UPLtlA) }),
                          h &&
                              (0, i.jsx)("div", {
                                  role: "alert",
                                  children: (0, i.jsx)(eX.w, {
                                      type: "critical",
                                      children: v.intl.string(H.default.xyCJYs),
                                  }),
                              }),
                          (0, i.jsxs)(eq.e, {
                              fullWidth: !0,
                              children: [
                                  (0, i.jsx)(eK.$, {
                                      variant: "secondary",
                                      text: v.intl.string(v.t["ETE/oC"]),
                                      onClick: t,
                                      disabled: x,
                                  }),
                                  (0, i.jsx)(eK.$, {
                                      variant: "primary",
                                      text: v.intl.string(v.t["R3BPH+"]),
                                      onClick: A,
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
