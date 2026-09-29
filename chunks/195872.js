l.d(t, { m: () => tQ });
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
    h = l(650583),
    f = l(684343);
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
                    case h.dh.ARROW_RIGHT:
                    case h.dh.ARROW_DOWN:
                        t = (a + 1) % i.length;
                        break;
                    case h.dh.ARROW_LEFT:
                    case h.dh.ARROW_UP:
                        t = (a - 1 + i.length) % i.length;
                        break;
                    case h.dh.HOME:
                        t = 0;
                        break;
                    case h.dh.END:
                        t = i.length - 1;
                        break;
                    default:
                        return;
                }
                (e.preventDefault(), i[t]?.focus());
            }
        }, []);
    return (0, i.jsx)("div", {
        className: f.vR,
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
                    className: f.Mf,
                    "aria-selected": t,
                    "aria-controls": s,
                    tabIndex: t ? 0 : -1,
                    onClick: () => d(e.id),
                    onKeyDown: o,
                    children: (0, i.jsx)(x.E, {
                        className: f.Pf,
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
var j = l(289873),
    p = l(738188),
    v = l(375708),
    A = l(448492);
function E() {
    return (0, i.jsx)("div", {
        className: A.w,
        children: (0, i.jsx)(j.y, { type: j.y.Type.SPINNING_CIRCLE, "aria-label": v.intl.string(v.t.ZTNur7) }),
    });
}
function _() {
    return (0, i.jsxs)("div", {
        className: A.w,
        role: "alert",
        children: [
            (0, i.jsx)(p.WarningIcon, { size: "md", color: "text-feedback-critical", "aria-hidden": !0 }),
            (0, i.jsx)(x.E, { variant: "text-sm/normal", color: "text-muted", children: v.intl.string(v.t.F8FvUy) }),
        ],
    });
}
var N = l(980707),
    b = l(477782),
    I = l(922016),
    S = l(847374),
    y = l(914173);
function T(e) {
    let { navId: t, options: l, selectedId: n, label: a, onSelect: s, onClose: r } = e;
    return (0, i.jsx)(N.W, {
        navId: t,
        "aria-label": a,
        onClose: r,
        onSelect: void 0,
        children: l.map((e) =>
            (0, i.jsx)(
                b.iD,
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
        h = l.find((e) => e.id === n);
    return null == h
        ? null
        : (0, i.jsx)(I.Y, {
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
                          null != h.icon && (0, i.jsx)("span", { className: y.Kk, children: h.icon }),
                          (0, i.jsx)(x.E, {
                              className: y.DD,
                              tag: "span",
                              variant: "heading-sm/medium",
                              color: "text-default",
                              children: h.label,
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
    k = l(663417),
    G = l(140735),
    M = l(97808),
    P = l(778712),
    U = l(297264),
    O = l(463930),
    W = l(821609),
    B = l(192308),
    z = l(80682),
    F = l(967144),
    H = l(885386),
    Y = l(153488),
    q = l(696451),
    K = l(287809),
    $ = l(58703),
    V = l(927813),
    X = l(562153),
    Q = l(331322),
    Z = l(251812);
function J(e) {
    return e.entries.length < 3;
}
function ee(e) {
    return (0, Z.K)(J(e) ? void 0 : e.stat).name;
}
var et = l(104129),
    el = l(823353);
function en() {
    return (0, i.jsxs)(Q.B, {
        className: el.w,
        align: "center",
        justify: "center",
        gap: 6,
        children: [
            (0, i.jsx)(U.D, {
                variant: "heading-md/semibold",
                color: "text-default",
                children: v.intl.string(et.default.ULK65a),
            }),
            (0, i.jsx)(x.E, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: v.intl.format(et.default["81PK67"], { memberCount: 3 }),
            }),
        ],
    });
}
var ei = l(939249),
    ea = l(342296),
    es = l(518782);
function er(e) {
    let t = Math.floor(Math.max(e, 0) / V.A.Seconds.MINUTE);
    return v.intl.formatToPlainString(et.default["6Y8H0A"], {
        hours: Math.floor(t / V.A.Minutes.HOUR),
        minutes: t % V.A.Minutes.HOUR,
    });
}
function ed(e, t) {
    switch (t) {
        case es.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return {
                primary: v.intl.formatToPlainString(v.t["k2UNz+"], { days: e.value }),
                secondary: er(e.time_played_seconds),
            };
        case es.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return {
                primary: v.intl.formatToPlainString(et.default.rgpc8E, { count: e.value }),
                secondary: er(e.time_played_seconds),
            };
        case es.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            let l, n, i;
            return {
                primary:
                    ((n = Math.floor((l = Math.floor(Math.max(e.value, 0) / V.A.Millis.MINUTE)) / V.A.Minutes.HOUR)),
                    (i = l % V.A.Minutes.HOUR),
                    0 === n
                        ? v.intl.formatToPlainString(et.default.bgQf2H, { minutes: i })
                        : 0 === i
                          ? v.intl.formatToPlainString(et.default["D/HToK"], { hours: n })
                          : v.intl.formatToPlainString(et.default.fvtrHn, { hours: n, minutes: i })),
            };
        default:
            return { primary: "\u2014" };
    }
}
var eo = l(81466),
    ec = l(406810),
    eu = l(687966),
    em = l(109112),
    ex = l(683063),
    eh = l(573435),
    ef = l(402860),
    eg = l(396583),
    ej = l(587895),
    ep = l(429913),
    ev = l(280450);
function eA(e, t) {
    return { id: e, name: v.intl.string(et.default.rhDbuQ), iconUrl: void 0, isLoading: t };
}
function eE(e, t) {
    return e.get(t) ?? eA(t, !1);
}
function e_(e, t) {
    return t.map((t) => eE(e, t));
}
function eN(e, t) {
    let l = t.user_id,
        n = (0, R.bG)([K.default], () => K.default.getUser(l), [l]),
        i = (0, R.bG)([q.Ay], () => q.Ay.getMember(e, l), [e, l]),
        a = (0, F.gn)(e, l, i?.colorStrings ?? null),
        s = X.Ay.useName(e, void 0, n),
        r = (0, R.bG)([ev.default], () => ev.default.getId()) === l,
        d = null != n ? s : t.name;
    return {
        user: n,
        member: i,
        roleColorStrings: a,
        baseName: d,
        displayName: r ? v.intl.formatToPlainString(et.default.subXXA, { name: d }) : d,
    };
}
var eb = l(518477),
    eI = l(870087);
function eS(e) {
    let {
            guildId: t,
            entry: l,
            stat: n,
            games: s,
            isCurrentUser: r,
            shouldDimForCurrentUser: d,
            isFloating: o = !1,
            rowRef: c,
        } = e,
        u = eN(t, l),
        m = l.application_ids[0],
        x = null != m ? eE(s, m) : void 0,
        h = l.user_id,
        f = a.useCallback(() => {
            (0, ef.openUserProfileModal)({
                userId: h,
                guildId: t,
                tabSection: eb.RP.ACTIVITY,
                scrollTarget: eb.bk.RECENT_ACTIVITY,
            });
        }, [h, t]);
    return (0, i.jsxs)("div", {
        ref: c,
        "aria-hidden": o,
        inert: o,
        className: D()(eI.nM, { [eI.Bh]: r && !o, [eI.lR]: d }),
        children: [
            (0, i.jsx)(ey, { guildId: t, entry: l, identity: u, lastPlayedGame: x }),
            (0, i.jsx)(ew, { entry: l, stat: n, name: u.baseName, onClick: f }),
            (0, i.jsx)(ek, {
                name: u.baseName,
                applicationIds: l.application_ids,
                applicationCount: l.application_count,
                games: s,
                onClick: f,
            }),
        ],
    });
}
function ey(e) {
    let { guildId: t, entry: l, identity: n, lastPlayedGame: s } = e,
        r = a.useRef(null),
        d = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(eT, { rank: l.rank }),
                (0, i.jsx)(M.eu, {
                    size: P._3.SIZE_32,
                    src: n.user?.getAvatarURL(t, (0, P.FT)(P._3.SIZE_32)) ?? void 0,
                    className: eI.my,
                    "aria-hidden": !0,
                }),
                (0, i.jsxs)("div", {
                    className: eI.Dc,
                    children: [
                        (0, i.jsx)(U.D, {
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            lineClamp: 1,
                            children: (0, i.jsx)(O.g, {
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
                                children: v.intl.formatToPlainString(et.default.YuNVPY, { gameName: s.name }),
                            }),
                    ],
                }),
            ],
        });
    return null == n.user
        ? (0, i.jsx)("div", { className: eI.D_, children: d })
        : (0, i.jsx)(ea.A, {
              targetElementRef: r,
              user: n.user,
              guildId: t,
              children: (e) => (0, i.jsx)(ei.D, { ...e, innerRef: r, className: D()(eI.D_, eI.FB), children: d }),
          });
}
function eT(e) {
    let { rank: t } = e,
        l = v.intl.formatToPlainString(et.default.I4JiAQ, { rank: t });
    switch (t) {
        case 1:
            return (0, i.jsx)("div", {
                className: eI.Tm,
                "aria-label": l,
                children: (0, i.jsx)("div", { className: eI.Xe }),
            });
        case 2:
            return (0, i.jsx)("div", {
                className: eI.Tm,
                "aria-label": l,
                children: (0, i.jsx)("div", { className: eI.XQ }),
            });
        case 3:
            return (0, i.jsx)("div", {
                className: eI.Tm,
                "aria-label": l,
                children: (0, i.jsx)("div", { className: eI.c9 }),
            });
        default:
            return (0, i.jsxs)("div", {
                className: eI.mH,
                children: [
                    (0, i.jsx)(G.A, { children: l }),
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
function eC(e) {
    let { stat: t } = e;
    switch (t) {
        case es.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return (0, i.jsx)(eo.CalendarIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case es.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            return (0, i.jsx)(ec.ClockIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case es.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return (0, i.jsx)(eu.GameControllerIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        default:
            return null;
    }
}
function ew(e) {
    let { entry: t, stat: l, name: n, onClick: a } = e,
        { primary: s, secondary: r } = ed(t, l);
    return (0, i.jsxs)(ei.D, {
        className: eI.TH,
        "aria-label": v.intl.formatToPlainString(et.default.o6mBdl, { name: n }),
        onClick: a,
        children: [
            (0, i.jsxs)("div", {
                className: eI.bf,
                children: [
                    (0, i.jsx)(eC, { stat: l }),
                    (0, i.jsx)(x.E, { variant: "text-sm/medium", color: "text-subtle", children: s }),
                ],
            }),
            null != r && (0, i.jsx)(x.E, { variant: "text-xs/medium", color: "text-muted", children: r }),
        ],
    });
}
function eD(e) {
    let { game: t, notched: l } = e;
    return (0, i.jsx)("span", {
        className: eI.rO,
        "aria-hidden": !0,
        children: (0, i.jsx)(eh.Ay, {
            mask: l ? eh.l8[24] : eh.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null != t.iconUrl
                    ? (0, i.jsx)("img", { className: eI.Gt, src: t.iconUrl, alt: "", "aria-hidden": !0 })
                    : (0, i.jsx)("span", {
                          className: eI.ct,
                          "aria-hidden": !0,
                          children: !t.isLoading && (0, i.jsx)(em._, { size: "xxs", color: r.A.colors.ICON_SUBTLE }),
                      }),
        }),
    });
}
function eR(e) {
    let { played: t, totalCount: l } = e,
        n = t.slice(0, 2),
        a = l - n.length;
    return (0, i.jsxs)("div", {
        className: eI.Nw,
        children: [
            n.map((e, t) => (0, i.jsx)(eD, { game: e, notched: a > 0 || t !== n.length - 1 }, `${e.id}-${t}`)),
            a > 0
                ? (0, i.jsx)("span", {
                      className: eI.rO,
                      children: (0, i.jsx)(eh.Ay, {
                          mask: eh.Ay.Masks.SQUIRCLE,
                          width: 24,
                          height: 24,
                          children: (0, i.jsx)("div", {
                              className: eI.p0,
                              children: (0, i.jsx)(x.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-subtle",
                                  children: v.intl.formatToPlainString(et.default.JiMMEd, { count: a }),
                              }),
                          }),
                      }),
                  })
                : null,
        ],
    });
}
function eL(e) {
    let { played: t, totalCount: l, children: n } = e;
    return (0, i.jsx)(ex.u, {
        body:
            0 === t.length
                ? v.intl.string(et.default["7CrlYb"])
                : 1 === t.length
                  ? v.intl.formatToPlainString(et.default.dbNpK0, { firstGame: t[0].name })
                  : 2 === t.length && 2 === l
                    ? v.intl.formatToPlainString(et.default.tqVg4M, { firstGame: t[0].name, secondGame: t[1].name })
                    : v.intl.formatToPlainString(et.default.bxcrSz, {
                          firstGame: t[0].name,
                          secondGame: t[1].name,
                          otherCount: l - 2,
                      }),
        asset: t.length > 0 ? (0, i.jsx)(eR, { played: t, totalCount: t.length }) : void 0,
        assetSize: t.length > 1 ? 43 : 24,
        children: n,
    });
}
function ek(e) {
    let { name: t, applicationIds: l, applicationCount: n, games: a, onClick: s } = e,
        r = e_(a, l);
    return (0, i.jsx)("div", {
        className: eI.ag,
        children: (0, i.jsx)(eL, {
            played: r,
            totalCount: n,
            children: (0, i.jsx)(ei.D, {
                className: D()(eI.Nw, eI.Dz),
                "aria-label": v.intl.formatToPlainString(et.default.o6mBdl, { name: t }),
                onClick: s,
                children: (0, i.jsx)(eR, { played: r, totalCount: n }),
            }),
        }),
    });
}
var eG = l(189043);
function eM(e) {
    let { guildId: t, entries: l, stat: n, games: a, currentUserEntry: s, currentUserPillarRef: r } = e,
        d = {
            1: { column: eG.HC, pillar: eG.P5 },
            2: { column: eG.th, pillar: eG.Vk },
            3: { column: eG.Ou, pillar: eG.el },
        };
    return (0, i.jsx)("div", {
        className: eG.pI,
        role: "list",
        "aria-label": v.intl.string(et.default.wKXLfQ),
        children: l.map((e, l) =>
            (0, i.jsx)(
                eP,
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
function eP(e) {
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
        m = e_(o, l.application_ids),
        h = eN(t, l),
        { primary: f } = ed(l, d),
        g = 1 === n ? P._3.SIZE_48 : P._3.SIZE_40,
        j = a.useRef(null),
        p = D()(eG.dR, { [eG.m$]: 1 === n, [eG.wd]: 2 === n, [eG.p0]: 3 === n }),
        v = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: eG.R3,
                    children: [
                        (0, i.jsx)(M.eu, {
                            size: g,
                            src: h.user?.getAvatarURL(t, (0, P.FT)(g)) ?? void 0,
                            "aria-hidden": !0,
                        }),
                        (0, i.jsx)("div", { className: p }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: D()(eG.DX, r),
                    children: [
                        (0, i.jsx)(U.D, {
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            lineClamp: 1,
                            className: eG.IY,
                            children: (0, i.jsx)(O.g, {
                                name: h.displayName,
                                colorString: h.member?.colorString ?? null,
                                colorStrings: h.roleColorStrings,
                            }),
                        }),
                        (0, i.jsx)(eL, {
                            played: m,
                            totalCount: l.application_count,
                            children: (0, i.jsx)(x.E, {
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
        ref: c ? u : void 0,
        children:
            null != h.user
                ? (0, i.jsx)(ea.A, {
                      targetElementRef: j,
                      user: h.user,
                      guildId: t,
                      children: (e) => (0, i.jsx)(ei.D, { ...e, className: eG.fs, innerRef: j, children: v }),
                  })
                : (0, i.jsx)("div", { className: eG.fs, children: v }),
    });
}
var eU = l(652215),
    eO = l(219047);
function eW(e) {
    let t,
        l,
        n,
        { guildId: s, data: r, inModal: d = !1 } = e,
        { stat: o, entries: c, computed_at: u, week_start_ts: m } = r,
        x = null != u && new Date(u).getTime() - m * V.A.Millis.SECOND >= V.A.Millis.WEEK,
        h = (0, R.bG)([K.default], () => K.default.getCurrentUser()?.id),
        f = a.useMemo(() => c.find((e) => e.user_id === h), [c, h]),
        g = a.useMemo(() => {
            let e = c.slice(0, 20);
            return null == f || e.includes(f) ? e : [...e, f];
        }, [c, f]),
        j = a.useMemo(() => Array.from(new Set(g.map((e) => e.user_id))), [g]);
    (0, z.k6)(s, j);
    let p =
            ((t = a.useMemo(() => Array.from(new Set(g.flatMap((e) => e.application_ids))), [g])),
            (l = (0, ep.A)(t)),
            (n = (0, R.yK)([ej.A], () => t.map((e) => ej.A.didFetchingApplicationFail(e)))),
            a.useMemo(() => {
                let e = new Map();
                return (
                    t.forEach((t, i) => {
                        let a = l[i];
                        e.set(
                            t,
                            null != a
                                ? { id: t, name: a.name, iconUrl: a.getIconURL(64) ?? void 0, isLoading: !1 }
                                : eA(t, !n[i]),
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
        N = null == f && null != h,
        b = a.useCallback(
            (e) => {
                let t = e === f;
                return (0, i.jsx)(
                    eS,
                    {
                        guildId: s,
                        entry: e,
                        stat: o,
                        games: p,
                        isCurrentUser: t,
                        shouldDimForCurrentUser: t && _,
                        rowRef: t ? A : void 0,
                    },
                    `${e.rank}-${e.user_id}`,
                );
            },
            [_, f, p, s, o, A],
        );
    if (J(r)) return (0, i.jsx)(en, {});
    let I = x ? g.slice(3) : g,
        S = [g[0], g[1], g[2]];
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsxs)("div", {
                className: eO.SY,
                children: [
                    (0, i.jsxs)(L.d_, {
                        className: D()(eO.p_, { [eO.zE]: d }),
                        ref: v,
                        children: [
                            x &&
                                (0, i.jsx)(eM, {
                                    guildId: s,
                                    entries: S,
                                    stat: o,
                                    games: p,
                                    currentUserEntry: f,
                                    currentUserPillarRef: A,
                                }),
                            I.map(b),
                        ],
                    }),
                    null != f && null != E && (0, i.jsx)("div", { className: D()(eO.Dz, "top" === E ? eO.gN : eO.qV) }),
                    null != f &&
                        null != E &&
                        (0, i.jsx)("div", {
                            className: D()(eO.z$, "top" === E ? eO.aG : eO.Ie),
                            children: (0, i.jsx)(eS, {
                                guildId: s,
                                entry: f,
                                stat: o,
                                games: p,
                                isCurrentUser: !0,
                                shouldDimForCurrentUser: !1,
                                isFloating: !0,
                            }),
                        }),
                    N && (0, i.jsx)(ez, { guildId: s }),
                ],
            }),
            (0, i.jsx)(eB, { computedAt: r.computed_at, inModal: d }),
        ],
    });
}
function eB(e) {
    let { computedAt: t, inModal: l } = e,
        n = (0, i.jsxs)("div", {
            className: eO.z8,
            children: [
                (0, i.jsx)(k.RefreshIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 }),
                (0, i.jsx)(x.E, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: v.intl.string(et.default["/nma+a"]),
                }),
            ],
        });
    return null == t
        ? (0, i.jsx)("div", { className: eO.qr, children: n })
        : (0, i.jsx)("div", {
              className: D()(eO.qr, { [eO.zE]: l }),
              tabIndex: 0,
              children: (0, i.jsx)(o.m, {
                  text: v.intl.formatToPlainString(et.default["1bt50t"], { timestamp: (0, $.mk)(new Date(t)) }),
                  position: "bottom",
                  children: n,
              }),
          });
}
function ez(e) {
    let { guildId: t } = e,
        n = H.tz.useSetting(),
        a = H.JG.useSetting(),
        s = (0, R.bG)([Y.A], () => Y.A.hasConsented(eU.YAq.PERSONALIZATION)),
        r = v.intl.string(et.default.toxuHd),
        d = !1;
    ((!n || a.includes(t)) && ((r = v.intl.string(et.default["8y885d"])), (d = !0)),
        s || ((r = v.intl.string(et.default.mTARYx)), (d = !0)));
    let o = (0, R.bG)([K.default], () => K.default.getCurrentUser()),
        c = X.Ay.useName(t, void 0, o),
        u = (0, R.bG)([q.Ay], () => q.Ay.getMember(t, o?.id ?? "")),
        m = (0, F.gn)(t, o?.id, u?.colorStrings ?? null);
    return null == o
        ? null
        : (0, i.jsxs)("div", {
              className: eO.Xx,
              children: [
                  (0, i.jsxs)("div", {
                      className: eO.kd,
                      children: [
                          (0, i.jsxs)("div", {
                              className: eO.nk,
                              children: [
                                  (0, i.jsx)(G.A, { children: v.intl.string(et.default["oHdW+u"]) }),
                                  (0, i.jsx)(x.E, {
                                      variant: "text-sm/semibold",
                                      color: "text-muted",
                                      "aria-hidden": !0,
                                      children: "?",
                                  }),
                              ],
                          }),
                          (0, i.jsx)(M.eu, {
                              size: P._3.SIZE_32,
                              src: o.getAvatarURL(t, (0, P.FT)(P._3.SIZE_32)) ?? void 0,
                              className: eO.SA,
                              "aria-hidden": !0,
                          }),
                          (0, i.jsxs)("div", {
                              className: eO.ko,
                              children: [
                                  (0, i.jsx)(U.D, {
                                      variant: "heading-sm/semibold",
                                      color: "text-default",
                                      lineClamp: 1,
                                      children: (0, i.jsx)(O.g, {
                                          name: c,
                                          colorString: u?.colorString ?? null,
                                          colorStrings: m,
                                      }),
                                  }),
                                  (0, i.jsx)("div", {
                                      className: eO.LF,
                                      children: (0, i.jsx)(x.E, {
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
                          className: eO.rl,
                          children: (0, i.jsx)(W.$, {
                              variant: "secondary",
                              size: "sm",
                              text: v.intl.string(et.default.fMbgeZ),
                              onClick: () => {
                                  var e;
                                  return (
                                      (e = t),
                                      void (0, B.openModalLazy)(
                                          async () => {
                                              let { default: t } = await Promise.all([
                                                  l.e("120239"),
                                                  l.e("955410"),
                                                  l.e("812720"),
                                                  l.e("251400"),
                                                  l.e("203112"),
                                                  l.e("348567"),
                                                  l.e("264236"),
                                                  l.e("371482"),
                                                  l.e("463095"),
                                                  l.e("252264"),
                                                  l.e("143549"),
                                                  l.e("154630"),
                                                  l.e("610943"),
                                                  l.e("390213"),
                                                  l.e("759174"),
                                                  l.e("340346"),
                                                  l.e("421778"),
                                                  l.e("944602"),
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
                                      )
                                  );
                              },
                          }),
                      }),
              ],
          });
}
var eF = l(224640),
    eH = l(20742),
    eY = l(515746);
function eq(e) {
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
                (0, eg.A)(() => n(Date.now()), s ? null : r),
                a.useMemo(
                    () => ({
                        ended: s,
                        endDate: new Date(t),
                        badgeLabel: s
                            ? v.intl.string(et.default["J8r/7L"])
                            : v.intl.formatToPlainString(et.default["PuaR+2"], { days: Math.ceil(i / V.A.Millis.DAY) }),
                    }),
                    [s, t, i],
                )
            );
        })(t.week_start_ts),
        d = H.PZ.useSetting(),
        o = 2 > (0, $.m_)(s, new Date()) ? (0, $.mk)(s, !1, d) : (0, $.i$)(s, "L LT", d),
        c = n
            ? v.intl.format(et.default.kG9XmM, { endedAt: o, nextStatName: (0, Z.K)(t.next_stat).name })
            : v.intl.format(et.default["X+VLqi"], { statQuestion: l.question, endsAt: o });
    return (0, i.jsx)(ex.u, {
        title: l.name,
        body: c,
        position: "top",
        children: (0, i.jsx)("div", {
            className: eY.q,
            tabIndex: 0,
            children: (0, i.jsx)(x.E, {
                variant: "text-xs/semibold",
                color: n ? "text-muted" : "text-brand",
                children: r,
            }),
        }),
    });
}
var eK = l(460614);
function e$(e) {
    let { guildId: t, data: l, modalProps: n } = e;
    return (0, i.jsxs)(eF.d, {
        size: "lg",
        "aria-label": ee(l),
        ...n,
        children: [
            (0, i.jsxs)("div", {
                className: eK.wx,
                children: [
                    (0, i.jsxs)("div", {
                        className: eK.LD,
                        children: [
                            (0, i.jsx)(d.TrophyIcon, { size: "xs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 }),
                            (0, i.jsx)(U.D, { variant: "heading-sm/medium", className: eK.DD, children: ee(l) }),
                            (0, i.jsx)(eq, { data: l }),
                        ],
                    }),
                    (0, i.jsx)(eH.s_, {}),
                ],
            }),
            (0, i.jsx)("div", { className: eK.rf, children: (0, i.jsx)(eW, { guildId: t, data: l, inModal: !0 }) }),
        ],
    });
}
var eV = l(452027),
    eX = l(103557),
    eQ = l(825484),
    eZ = l(95477),
    eJ = l(241326),
    e0 = l(683071),
    e1 = l(2553),
    e8 = l(405810),
    e2 = l(967198),
    e3 = l(488428),
    e7 = l(776231);
let e4 = (0, l(676279).cy)();
function e6(e, t, l) {
    let n = l.startsWith("a_"),
        i = n ? (e4 ? "webp" : "gif") : e4 ? "webp" : "jpg",
        { CDN_HOST: a, API_ENDPOINT: s } = window.GLOBAL_ENV,
        r = eU.Rsh.GUILD_SPACE_IMAGE_TEXT_WIDGET_IMAGE(e, t, l, i),
        d = null != a ? `https://${a}${r}` : location.protocol + s + r,
        o = { size: (0, e7.kr)(500 * (0, e7.mZ)()) };
    return (
        "jpg" === i && (o.quality = "lossless"), "webp" === i && n && (o.animated = !0), (d += `?${e3.stringify(o)}`)
    );
}
var e5 = l(868602),
    e9 = l(445187),
    te = l(28863),
    tt = l(109487),
    tl = l(272984),
    tn = l(279543);
function ti(e) {
    let { isCompact: t } = e;
    return (0, i.jsxs)("div", {
        className: tn.qr,
        children: [
            (0, i.jsxs)("div", {
                className: tn.Os,
                children: [
                    (0, i.jsx)("span", {
                        className: tn.Kk,
                        children: (0, i.jsx)(k.RefreshIcon, {
                            size: "xxs",
                            color: r.A.colors.ICON_SUBTLE,
                            "aria-hidden": !0,
                        }),
                    }),
                    (0, i.jsx)(x.E, {
                        className: tn.Pf,
                        tag: "span",
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: v.intl.string(et.default["3/DOFo"]),
                    }),
                ],
            }),
            (0, i.jsxs)(te.Anchor, {
                className: tn.al,
                href: tl.RQ.WEB_HOME,
                "aria-label": v.intl.string(et.default["jUr+wF"]),
                children: [
                    (0, i.jsx)("span", {
                        className: tn.Kk,
                        children: (0, i.jsx)(tt.L, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    }),
                    !t &&
                        (0, i.jsx)(x.E, {
                            className: tn.G2,
                            tag: "span",
                            variant: "text-xs/medium",
                            color: "none",
                            children: v.intl.string(et.default.ZdPp2q),
                        }),
                ],
            }),
        ],
    });
}
var ta = (((n = {}).TOP_SONGS = "top_songs"), (n.TOP_ARTISTS = "top_artists"), (n.TOP_LISTENERS = "top_listeners"), n);
let ts = ["top_songs", "top_artists", "top_listeners"];
function tr(e) {
    switch (e) {
        case "top_songs":
            return v.intl.string(et.default.KgeEtx);
        case "top_artists":
            return v.intl.string(et.default.RYxWTS);
        case "top_listeners":
            return v.intl.string(et.default.KO73KB);
    }
}
function td(e, t) {
    return `popular-music-tab-${e}-${t}`;
}
function to(e) {
    return `popular-music-panel-${e}`;
}
var tc = l(756936);
function tu(e) {
    let { view: t, data: l } = e;
    return (0, i.jsxs)("div", {
        className: tc.rv,
        children: [
            (0, i.jsx)(x.E, { variant: "text-sm/semibold", color: "text-default", children: tr(t) }),
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
                    { className: tc.tH, variant: "text-sm/normal", color: "text-muted", children: e },
                    `${e}-${t}`,
                ),
            ),
        ],
    });
}
var tm = l(196765),
    tx = l(770178);
let th = { view: "top_songs", isCompact: !1 },
    tf = (0, tm.v)(() => ({ byWidgetId: {} }));
function tg(e, t) {
    tf.setState((l) => {
        let n = l.byWidgetId[e] ?? th;
        return { byWidgetId: { ...l.byWidgetId, [e]: { ...n, ...t } } };
    });
}
function tj(e) {
    return tf((t) => t.byWidgetId[e]?.view ?? th.view);
}
function tp(e) {
    return tf((t) => t.byWidgetId[e]?.isCompact ?? th.isCompact);
}
var tv = l(831544),
    tA = l(597601),
    tE = l(432017),
    t_ = l(871107);
function tN(e) {
    let { view: t } = e,
        l = r.A.colors.ICON_DEFAULT;
    switch (t) {
        case ta.TOP_ARTISTS:
            return (0, i.jsx)(tv.MicrophoneIcon, { size: "xs", color: l, "aria-hidden": !0 });
        case ta.TOP_LISTENERS:
            return (0, i.jsx)(tA.L, { size: "xs", color: l, "aria-hidden": !0 });
        case ta.TOP_SONGS:
            return (0, i.jsx)(tE.T, { size: "xs", color: l, "aria-hidden": !0 });
    }
}
function tb(e) {
    let { widgetId: t, title: l } = e,
        n = tp(t),
        a = tj(t);
    if (!n)
        return (0, i.jsxs)("div", {
            className: t_.$,
            children: [
                (0, i.jsx)("span", {
                    className: t_.K,
                    children: (0, i.jsx)(tE.T, { size: "xs", color: r.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
                }),
                (0, i.jsx)(m.q, { children: l }),
            ],
        });
    let s = ts.map((e) => ({ id: e, label: tr(e), icon: (0, i.jsx)(tN, { view: e }) }));
    return (0, i.jsx)(C, {
        navId: "popular-music-view",
        options: s,
        selectedId: a,
        menuLabel: v.intl.string(et.default.hFYyGU),
        triggerLabel: v.intl.formatToPlainString(et.default["/sw0JL"], { widgetName: l, viewName: tr(a) }),
        onSelect: (e) => {
            tg(t, { view: e });
        },
    });
}
var tI = l(890497),
    tS = l(734057),
    ty = l(317525),
    tT = l(576705),
    tC = l(935208),
    tw = l(44167);
l(321073);
var tD = l(485845),
    tR = l(136722),
    tL = l(435183),
    tk = l(155718),
    tG = l(795816),
    tM = l(933958),
    tP = l(574152),
    tU = l(627363),
    tO = l(712440),
    tW = l(733110),
    tB = l(488926),
    tz = l(818023);
async function tF(e) {
    null == ej.A.getApplication(tz.NW) && (await (0, tU.TA)(tz.NW));
    let t = tM.Ay.getEmbeddedActivitiesForChannel(e).every((e) => e.applicationId !== tz.NW);
    return await (0, tG.su)({
        channelId: e,
        applicationId: tz.NW,
        isStart: t,
        embeddedActivitiesManager: (0, tP.A)(),
        renderInFramePool: !0,
    });
}
async function tH(e) {
    let { channel: t, selectedRoleIds: l } = e,
        n = [];
    if (l.length > 0)
        for (let e of (n.push({ id: t.guild_id, type: tk.r2.ROLE, allow: tB.x3, deny: eU.xBc.USE_EMBEDDED_ACTIVITIES }),
        l))
            n.push({ id: e, type: tk.r2.ROLE, allow: eU.xBc.USE_EMBEDDED_ACTIVITIES, deny: tB.x3 });
    let i = await (0, tL.RT)(t.id, { permissionOverwrites: n });
    if (!i.ok) throw i;
}
let tY = [];
var tq = l(344351),
    tK = l(256693),
    t$ = l(812901),
    tV = l(317608),
    tX = l(953538);
let tQ = {
    [s.a.IMAGE_TEXT]: {
        View: function (e) {
            let { widget: t, guildSpaceMode: l, guildId: n } = e,
                { text: a, image_hash: s } = t.config,
                r = "edit" === l ? t.config.image : void 0,
                d = void 0 !== r ? r : null != s ? e6(n, t.id, s) : null;
            return (0, i.jsxs)("div", {
                className: e9.kL,
                children: [
                    null != d && (0, i.jsx)("img", { className: e9.Sl, src: d, alt: "" }),
                    null != a &&
                        (0, i.jsx)(x.E, {
                            variant: "text-md/normal",
                            color: "text-subtle",
                            className: e9.Qq,
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
                [g, j] = a.useState(null),
                p = (0, R.bG)([e2.A], () => e2.A.getGuildId()),
                A = void 0 !== h ? h : null != r.image_hash && null != p ? e6(p, t.id, r.image_hash) : null;
            return (0, i.jsxs)(Q.B, {
                gap: 16,
                children: [
                    (0, i.jsx)(eZ.k, {
                        label: v.intl.string(v.t.gnwWrx),
                        value: d,
                        onChange: function (e) {
                            (j(null), u(e));
                        },
                        maxLength: 100,
                        showCharacterCount: !0,
                    }),
                    (0, i.jsx)(eV.D, {
                        label: v.intl.string(v.t.X4IxWL),
                        children: (0, i.jsxs)(Q.B, {
                            gap: 16,
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            className: e5.B,
                            children: [
                                (0, i.jsxs)(Q.B, {
                                    gap: 8,
                                    direction: "horizontal",
                                    children: [
                                        (0, i.jsx)(e8.A, {
                                            variant: "secondary",
                                            text: v.intl.string(v.t["MsUY/S"]),
                                            onChange: function (e) {
                                                (j(null), f(e));
                                            },
                                            maxFileSizeBytes: 0xa00000,
                                            onFileSizeError: () => (0, e1.A)(0xa00000),
                                        }),
                                        null != A &&
                                            (0, i.jsx)(o.m, {
                                                text: v.intl.string(v.t.N86XcP),
                                                ariaHidden: !0,
                                                children: (0, i.jsx)(c.K, {
                                                    variant: "critical-secondary",
                                                    icon: eJ.TrashIcon,
                                                    onClick: function () {
                                                        (j(null), f(null));
                                                    },
                                                    "aria-label": v.intl.string(v.t.N86XcP),
                                                }),
                                            }),
                                    ],
                                }),
                                null != A && (0, i.jsx)("img", { className: e5.V, src: A, alt: "" }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(eX.f, {
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
                            children: (0, i.jsx)(e0.w, { type: "critical", children: g }),
                        }),
                    (0, i.jsxs)(eQ.e, {
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(W.$, { variant: "secondary", text: v.intl.string(v.t["ETE/oC"]), onClick: n }),
                            (0, i.jsx)(W.$, {
                                variant: "primary",
                                text: v.intl.string(v.t["R3BPH+"]),
                                onClick: function () {
                                    let e;
                                    if (
                                        ((e = void 0 !== h ? null !== h : null != r.image_hash),
                                        0 === m.length && !e && (j(v.intl.string(et.default.zleX9q)), 1))
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
                  : (0, i.jsx)(eW, { guildId: l, data: t.data });
        },
        Title: function (e) {
            let { widget: t, hydration: l } = e;
            return l?.status !== "success"
                ? (0, i.jsx)(m.q, { children: t.default_title ?? "" })
                : (0, i.jsx)(m.q, { children: ee(l.data) });
        },
        TitleIcon: function () {
            return (0, i.jsx)(d.TrophyIcon, { size: "xs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        },
        HeaderAccessory: function (e) {
            let { hydration: t } = e;
            return t?.status !== "success" || J(t.data) ? null : (0, i.jsx)(eq, { data: t.data });
        },
        HeaderActions: function (e) {
            let { hydration: t, guildId: l } = e,
                n = t?.status === "success" ? t.data : void 0;
            return null != n && J(n)
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
                                          n = (e) => (0, i.jsx)(e$, { guildId: t, data: l, modalProps: e });
                                      (0, B.openModalLazy)(() => Promise.resolve(n), {
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
                            tg(t, { isCompact: e.contentRect.width < 480 });
                        },
                        [t],
                    )),
                    (0, tx.g)(n, s, [t], { fireOnMount: !0 }),
                    a.useEffect(
                        () => () => {
                            tf.setState((e) => {
                                if (null == e.byWidgetId[t]) return e;
                                let l = { ...e.byWidgetId };
                                return (delete l[t], { byWidgetId: l });
                            });
                        },
                        [t],
                    ),
                    n),
                m = tp(d.id),
                x = tj(d.id),
                h = !m && "view" === c,
                f =
                    o?.status === "success"
                        ? ((l = o.data),
                          null == (r = l.ranked_songs.find((e) => null != e.cover_art_hash)?.cover_art_hash)
                              ? null
                              : `https://i.scdn.co/image/${encodeURIComponent(r)}`)
                        : null;
            return (0, i.jsxs)("div", {
                className: tc.rf,
                ref: u,
                children: [
                    null != f && (0, i.jsx)("img", { className: tc.G, src: f, alt: "", "aria-hidden": !0 }),
                    (0, i.jsx)("div", {
                        className: tc.Qs,
                        children: (0, i.jsx)("div", {
                            id: to(d.id),
                            className: tc.nd,
                            role: h ? "tabpanel" : "group",
                            tabIndex: 0,
                            "aria-label": h ? void 0 : tr(x),
                            "aria-labelledby": h ? td(d.id, x) : void 0,
                            children:
                                null == o || "idle" === o.status || "loading" === o.status
                                    ? (0, i.jsx)(E, {})
                                    : "error" === o.status
                                      ? (0, i.jsx)(_, {})
                                      : (0, i.jsx)(tu, { view: x, data: o.data }),
                        }),
                    }),
                    (0, i.jsx)(ti, { isCompact: m }),
                ],
            });
        },
        Title: function (e) {
            let { widget: t, guildSpaceMode: l } = e,
                n = t.default_title ?? v.intl.string(et.default["5xxUI2"]);
            return "edit" === l ? (0, i.jsx)(m.q, { children: n }) : (0, i.jsx)(tb, { widgetId: t.id, title: n });
        },
        ViewHeaderTrailing: function (e) {
            let { widget: t, title: l } = e,
                n = tp(t.id),
                a = tj(t.id);
            return n
                ? null
                : (0, i.jsx)(g, {
                      label: l,
                      tabs: ts.map((e) => ({ id: e, label: tr(e) })),
                      selectedId: a,
                      panelId: to(t.id),
                      getTabId: (e) => td(t.id, e),
                      onSelect: (e) => {
                          tg(t.id, { view: e });
                      },
                  });
        },
    },
    [s.a.WHITEBOARD]: {
        View: function (e) {
            let t,
                l,
                n = (0, tw.n)(),
                s = (0, R.bG)(
                    [tS.A, tT.A],
                    () => {
                        let e = null != n ? tS.A.getChannel(n) : void 0;
                        return null != e && tT.A.can(eU.xBc.USE_EMBEDDED_ACTIVITIES, e);
                    },
                    [n],
                ),
                r = (0, R.bG)(
                    [tM.Ay],
                    () => {
                        let e = tM.Ay.getCurrentEmbeddedActivity();
                        return null == e ||
                            e.applicationId !== tz.NW ||
                            e.location.kind !== tq.T.GUILD_CHANNEL ||
                            e.location.channel_id !== n
                            ? null
                            : e;
                    },
                    [n],
                ),
                d = (0, R.bG)([tM.Ay], () => tM.Ay.isLaunchingActivity(), []),
                { authResolved: o, isAuthorized: c } =
                    ((t = (0, R.bG)(
                        [tW.default],
                        () => tW.default.getFetchStateForApplication(tz.NW) === tW.FetchState.FETCHED,
                        [],
                    )),
                    (l = (0, R.bG)(
                        [tW.default, ej.A],
                        () => {
                            let e = tW.default.getNewestTokenForApplication(tz.NW);
                            if (null == e) return !1;
                            let t = ej.A.getApplication(tz.NW),
                                l = t?.integrationTypesConfig?.[tD.b.USER_INSTALL]?.oauth2InstallParams?.scopes;
                            if (null == l) return !0;
                            let n = new Set(e.scopes);
                            return l.every((e) => n.has(e));
                        },
                        [],
                    )),
                    a.useEffect(() => {
                        (tW.default.getFetchStateForApplication(tz.NW) === tW.FetchState.NOT_FETCHED &&
                            tO.A.fetch([tz.NW]),
                            null == ej.A.getApplication(tz.NW) && (0, tU.TA)(tz.NW));
                    }, []),
                    { authResolved: t, isAuthorized: l }),
                u = a.useRef(!1);
            a.useEffect(() => {
                null == r && null != n && s && o && c && !u.current && ((u.current = !0), tF(n));
            }, [s, n, r, o, c]);
            let m = a.useCallback(() => {
                    null != n && ((u.current = !0), tF(n));
                }, [n]),
                h = null != n && o && !c;
            return s
                ? (0, i.jsxs)("div", {
                      className: tX.kL,
                      children: [
                          null != r &&
                              (0, i.jsx)(tV.A, {
                                  frameId: (0, tK.Ri)(r),
                                  level: t$.A.WithinAppContent,
                                  className: tX.t$,
                              }),
                          null == r &&
                              h &&
                              (0, i.jsx)("div", {
                                  className: tX.P5,
                                  children: (0, i.jsx)(W.$, {
                                      variant: "secondary",
                                      text: v.intl.string(et.default.PSuly6),
                                      loading: d,
                                      onClick: m,
                                  }),
                              }),
                      ],
                  })
                : (0, i.jsx)("div", {
                      className: tX.kL,
                      children: (0, i.jsx)("div", {
                          className: tX.m0,
                          children: (0, i.jsx)(x.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: v.intl.string(et.default["nXc/MQ"]),
                          }),
                      }),
                  });
        },
        Edit: function (e) {
            let { cancel: t } = e,
                l = (0, R.bG)([e2.A], () => e2.A.getGuildId()),
                n = tC.default.castGuildIdAsEveryoneGuildRoleId(l),
                s = (0, tw.n)(),
                r = (0, R.bG)([tS.A], () => (null != s ? tS.A.getChannel(s) : void 0), [s]),
                d = (0, R.bG)([tT.A], () => null != r && tT.A.can(eU.xBc.MANAGE_ROLES, r), [r]),
                o = (0, R.bG)([ty.A], () => (null == l ? tY : ty.A.getSortedRoles(l).filter((e) => e.id !== n)), [
                    l,
                    n,
                ]),
                c = a.useMemo(() => {
                    let e;
                    return null != r
                        ? null != (e = r.permissionOverwrites[r.guild_id]) &&
                          tR.zy(e.deny, eU.xBc.USE_EMBEDDED_ACTIVITIES)
                            ? o
                                  .filter((e) => {
                                      let t = r.permissionOverwrites[e.id];
                                      return null != t && tR.zy(t.allow, eU.xBc.USE_EMBEDDED_ACTIVITIES);
                                  })
                                  .map((e) => e.id)
                            : []
                        : [];
                }, [r, o]),
                [u, m] = a.useState(null),
                [x, h] = a.useState(!1),
                [f, g] = a.useState(!1),
                j = u ?? c,
                p = a.useMemo(() => o.map((e) => ({ id: e.id, label: e.name, value: e.id })), [o]);
            async function A() {
                if (null != r) {
                    (g(!1), h(!0));
                    try {
                        (await tH({ channel: r, selectedRoleIds: j }), t());
                    } catch {
                        (h(!1), g(!0));
                    }
                }
            }
            return null == r
                ? null
                : (0, i.jsxs)(Q.B, {
                      gap: 16,
                      children: [
                          (0, i.jsx)(tI.Z, {
                              selectionMode: "multiple",
                              label: v.intl.string(et.default.XXLbfv),
                              description: v.intl.string(et.default.XrpYIG),
                              placeholder: v.intl.string(et.default.pp6WeD),
                              options: p,
                              value: j,
                              onSelectionChange: function (e) {
                                  (g(!1), m(e));
                              },
                              disabled: !d || x,
                              fullWidth: !0,
                              wrapTags: !0,
                          }),
                          !d && (0, i.jsx)(e0.w, { type: "warning", children: v.intl.string(et.default.UPLtlA) }),
                          f &&
                              (0, i.jsx)("div", {
                                  role: "alert",
                                  children: (0, i.jsx)(e0.w, {
                                      type: "critical",
                                      children: v.intl.string(et.default.xyCJYs),
                                  }),
                              }),
                          (0, i.jsxs)(eQ.e, {
                              fullWidth: !0,
                              children: [
                                  (0, i.jsx)(W.$, {
                                      variant: "secondary",
                                      text: v.intl.string(v.t["ETE/oC"]),
                                      onClick: t,
                                      disabled: x,
                                  }),
                                  (0, i.jsx)(W.$, {
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
