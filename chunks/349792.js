l.d(t, { m: () => lw });
var n,
    i = l(477900),
    a = l(582128),
    s = l(593673),
    r = l(661531),
    d = l(369606),
    c = l(866665),
    o = l(408278),
    u = l(26430),
    m = l(562073),
    x = l(834730),
    h = l(650583),
    f = l(684343);
function g(e) {
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
                    onKeyDown: c,
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
    _ = l(448492);
function A() {
    return (0, i.jsx)("div", {
        className: _.w,
        children: (0, i.jsx)(j.y, { type: j.y.Type.SPINNING_CIRCLE, "aria-label": v.intl.string(v.t.ZTNur7) }),
    });
}
function I() {
    return (0, i.jsxs)("div", {
        className: _.w,
        role: "alert",
        children: [
            (0, i.jsx)(p.WarningIcon, { size: "md", color: "text-feedback-critical", "aria-hidden": !0 }),
            (0, i.jsx)(x.E, { variant: "text-sm/normal", color: "text-muted", children: v.intl.string(v.t.F8FvUy) }),
        ],
    });
}
var N = l(980707),
    E = l(477782),
    b = l(922016),
    S = l(297264),
    y = l(847374),
    C = l(914173);
function T(e) {
    let { navId: t, options: l, selectedId: n, label: a, onSelect: s, onClose: r } = e;
    return (0, i.jsx)(N.W, {
        navId: t,
        "aria-label": a,
        onClose: r,
        onSelect: void 0,
        children: l.map((e) =>
            (0, i.jsx)(
                E.iD,
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
function R(e) {
    let { navId: t, options: l, selectedId: n, menuLabel: s, triggerLabel: d, onSelect: c } = e,
        [o, u] = a.useState(!1),
        m = a.useRef(null),
        h = l.find((e) => e.id === n);
    return null == h
        ? null
        : (0, i.jsx)(b.Y, {
              targetElementRef: m,
              position: "bottom",
              align: "left",
              shouldShow: o,
              onRequestOpen: () => u(!0),
              onRequestClose: () => u(!1),
              renderPopout: (e) => {
                  let { closePopout: a } = e;
                  return (0, i.jsx)(T, { navId: t, options: l, selectedId: n, label: s, onSelect: c, onClose: a });
              },
              children: (e) =>
                  (0, i.jsx)(S.D, {
                      variant: "heading-sm/medium",
                      className: C.R_,
                      children: (0, i.jsxs)("button", {
                          ...e,
                          ref: m,
                          type: "button",
                          className: C.hZ,
                          "aria-haspopup": "menu",
                          "aria-label": d,
                          children: [
                              null != h.icon && (0, i.jsx)("span", { className: C.Kk, children: h.icon }),
                              (0, i.jsx)(x.E, {
                                  className: C.DD,
                                  tag: "span",
                                  variant: "heading-sm/medium",
                                  color: "text-default",
                                  children: h.label,
                              }),
                              (0, i.jsx)("span", {
                                  className: C.Kk,
                                  children: (0, i.jsx)(y.a, {
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
var k = l(503698),
    D = l.n(k),
    w = l(17928),
    M = l(364522),
    U = l(663417),
    P = l(140735),
    L = l(97808),
    G = l(778712),
    O = l(463930),
    W = l(821609),
    B = l(192308),
    z = l(80682),
    F = l(967144),
    H = l(885386),
    q = l(153488),
    K = l(696451),
    Y = l(287809),
    Q = l(58703),
    $ = l(927813),
    X = l(562153);
function V() {
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
        { scrollerRef: t, userRowRef: n, floatingRowPosition: "top" === i || "bottom" === i ? i : null }
    );
}
var Z = l(331322),
    J = l(251812);
function ee(e) {
    return e.entries.length < 3;
}
function et(e) {
    return (0, J.K)(ee(e) ? void 0 : e.stat).name;
}
var el = l(104129),
    en = l(823353);
function ei() {
    return (0, i.jsxs)(Z.B, {
        className: en.w,
        align: "center",
        justify: "center",
        gap: 6,
        children: [
            (0, i.jsx)(S.D, {
                variant: "heading-md/semibold",
                color: "text-default",
                children: v.intl.string(el.default.ULK65a),
            }),
            (0, i.jsx)(x.E, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: v.intl.format(el.default["81PK67"], { memberCount: 3 }),
            }),
        ],
    });
}
var ea = l(939249),
    es = l(342296),
    er = l(518782);
function ed(e) {
    let t = Math.floor(Math.max(e, 0) / $.A.Seconds.MINUTE);
    return v.intl.formatToPlainString(el.default["6Y8H0A"], {
        hours: Math.floor(t / $.A.Minutes.HOUR),
        minutes: t % $.A.Minutes.HOUR,
    });
}
function ec(e, t) {
    switch (t) {
        case er.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return {
                primary: v.intl.formatToPlainString(v.t["k2UNz+"], { days: e.value }),
                secondary: ed(e.time_played_seconds),
            };
        case er.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return {
                primary: v.intl.formatToPlainString(el.default.rgpc8E, { count: e.value }),
                secondary: ed(e.time_played_seconds),
            };
        case er.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            let l, n, i;
            return {
                primary:
                    ((n = Math.floor((l = Math.floor(Math.max(e.value, 0) / $.A.Millis.MINUTE)) / $.A.Minutes.HOUR)),
                    (i = l % $.A.Minutes.HOUR),
                    0 === n
                        ? v.intl.formatToPlainString(el.default.bgQf2H, { minutes: i })
                        : 0 === i
                          ? v.intl.formatToPlainString(el.default["D/HToK"], { hours: n })
                          : v.intl.formatToPlainString(el.default.fvtrHn, { hours: n, minutes: i })),
            };
        default:
            return { primary: "\u2014" };
    }
}
var eo = l(81466),
    eu = l(406810),
    em = l(687966),
    ex = l(109112),
    eh = l(683063),
    ef = l(573435),
    eg = l(402860),
    ej = l(396583),
    ep = l(587895),
    ev = l(429913),
    e_ = l(280450);
function eA(e, t) {
    return { id: e, name: v.intl.string(el.default.rhDbuQ), iconUrl: void 0, isLoading: t };
}
function eI(e, t) {
    return e.get(t) ?? eA(t, !1);
}
function eN(e, t) {
    return t.map((t) => eI(e, t));
}
function eE(e, t) {
    let l = t.user_id,
        n = (0, w.bG)([Y.default], () => Y.default.getUser(l), [l]),
        i = (0, w.bG)([K.Ay], () => K.Ay.getMember(e, l), [e, l]),
        a = (0, F.gn)(e, l, i?.colorStrings ?? null),
        s = X.Ay.useName(e, void 0, n),
        r = (0, w.bG)([e_.default], () => e_.default.getId()) === l,
        d = null != n ? s : t.name;
    return {
        user: n,
        member: i,
        roleColorStrings: a,
        baseName: d,
        displayName: r ? v.intl.formatToPlainString(el.default.subXXA, { name: d }) : d,
    };
}
var eb = l(518477),
    eS = l(870087);
function ey(e) {
    let {
            guildId: t,
            entry: l,
            stat: n,
            games: s,
            isCurrentUser: r,
            shouldDimForCurrentUser: d,
            isFloating: c = !1,
            rowRef: o,
        } = e,
        u = eE(t, l),
        m = l.application_ids[0],
        x = null != m ? eI(s, m) : void 0,
        h = l.user_id,
        f = a.useCallback(() => {
            (0, eg.openUserProfileModal)({
                userId: h,
                guildId: t,
                tabSection: eb.RP.ACTIVITY,
                scrollTarget: eb.bk.RECENT_ACTIVITY,
            });
        }, [h, t]);
    return (0, i.jsxs)("div", {
        ref: o,
        "aria-hidden": c,
        inert: c,
        className: D()(eS.nM, { [eS.Bh]: r && !c, [eS.lR]: d }),
        children: [
            (0, i.jsx)(eC, { guildId: t, entry: l, identity: u, lastPlayedGame: x }),
            (0, i.jsx)(ek, { entry: l, stat: n, name: u.baseName, onClick: f }),
            (0, i.jsx)(eU, {
                name: u.baseName,
                applicationIds: l.application_ids,
                applicationCount: l.application_count,
                games: s,
                onClick: f,
            }),
        ],
    });
}
function eC(e) {
    let { guildId: t, entry: l, identity: n, lastPlayedGame: s } = e,
        r = a.useRef(null),
        d = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(eT, { rank: l.rank }),
                (0, i.jsx)(L.eu, {
                    size: G._3.SIZE_32,
                    src: n.user?.getAvatarURL(t, (0, G.FT)(G._3.SIZE_32)) ?? void 0,
                    className: eS.my,
                    "aria-hidden": !0,
                }),
                (0, i.jsxs)("div", {
                    className: eS.Dc,
                    children: [
                        (0, i.jsx)(S.D, {
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
                                children: v.intl.formatToPlainString(el.default.YuNVPY, { gameName: s.name }),
                            }),
                    ],
                }),
            ],
        });
    return null == n.user
        ? (0, i.jsx)("div", { className: eS.D_, children: d })
        : (0, i.jsx)(es.A, {
              targetElementRef: r,
              user: n.user,
              guildId: t,
              children: (e) => (0, i.jsx)(ea.D, { ...e, innerRef: r, className: D()(eS.D_, eS.FB), children: d }),
          });
}
function eT(e) {
    let { rank: t } = e,
        l = v.intl.formatToPlainString(el.default.I4JiAQ, { rank: t });
    switch (t) {
        case 1:
            return (0, i.jsx)("div", {
                className: eS.Tm,
                "aria-label": l,
                children: (0, i.jsx)("div", { className: eS.Xe }),
            });
        case 2:
            return (0, i.jsx)("div", {
                className: eS.Tm,
                "aria-label": l,
                children: (0, i.jsx)("div", { className: eS.XQ }),
            });
        case 3:
            return (0, i.jsx)("div", {
                className: eS.Tm,
                "aria-label": l,
                children: (0, i.jsx)("div", { className: eS.c9 }),
            });
        default:
            return (0, i.jsxs)("div", {
                className: eS.mH,
                children: [
                    (0, i.jsx)(P.A, { children: l }),
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
function eR(e) {
    let { stat: t } = e;
    switch (t) {
        case er.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return (0, i.jsx)(eo.CalendarIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case er.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            return (0, i.jsx)(eu.ClockIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case er.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return (0, i.jsx)(em.GameControllerIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        default:
            return null;
    }
}
function ek(e) {
    let { entry: t, stat: l, name: n, onClick: a } = e,
        { primary: s, secondary: r } = ec(t, l);
    return (0, i.jsxs)(ea.D, {
        className: eS.TH,
        "aria-label": v.intl.formatToPlainString(el.default.o6mBdl, { name: n }),
        onClick: a,
        children: [
            (0, i.jsxs)("div", {
                className: eS.bf,
                children: [
                    (0, i.jsx)(eR, { stat: l }),
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
        className: eS.rO,
        "aria-hidden": !0,
        children: (0, i.jsx)(ef.Ay, {
            mask: l ? ef.l8[24] : ef.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null != t.iconUrl
                    ? (0, i.jsx)("img", { className: eS.Gt, src: t.iconUrl, alt: "", "aria-hidden": !0 })
                    : (0, i.jsx)("span", {
                          className: eS.ct,
                          "aria-hidden": !0,
                          children: !t.isLoading && (0, i.jsx)(ex._, { size: "xxs", color: r.A.colors.ICON_SUBTLE }),
                      }),
        }),
    });
}
function ew(e) {
    let { played: t, totalCount: l } = e,
        n = t.slice(0, 2),
        a = l - n.length;
    return (0, i.jsxs)("div", {
        className: eS.Nw,
        children: [
            n.map((e, t) => (0, i.jsx)(eD, { game: e, notched: a > 0 || t !== n.length - 1 }, `${e.id}-${t}`)),
            a > 0
                ? (0, i.jsx)("span", {
                      className: eS.rO,
                      children: (0, i.jsx)(ef.Ay, {
                          mask: ef.Ay.Masks.SQUIRCLE,
                          width: 24,
                          height: 24,
                          children: (0, i.jsx)("div", {
                              className: eS.p0,
                              children: (0, i.jsx)(x.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-subtle",
                                  children: v.intl.formatToPlainString(el.default.JiMMEd, { count: a }),
                              }),
                          }),
                      }),
                  })
                : null,
        ],
    });
}
function eM(e) {
    let { played: t, totalCount: l, children: n } = e;
    return (0, i.jsx)(eh.u, {
        body:
            0 === t.length
                ? v.intl.string(el.default["7CrlYb"])
                : 1 === t.length
                  ? v.intl.formatToPlainString(el.default.dbNpK0, { firstGame: t[0].name })
                  : 2 === t.length && 2 === l
                    ? v.intl.formatToPlainString(el.default.tqVg4M, { firstGame: t[0].name, secondGame: t[1].name })
                    : v.intl.formatToPlainString(el.default.bxcrSz, {
                          firstGame: t[0].name,
                          secondGame: t[1].name,
                          otherCount: l - 2,
                      }),
        asset: t.length > 0 ? (0, i.jsx)(ew, { played: t, totalCount: t.length }) : void 0,
        assetSize: t.length > 1 ? 43 : 24,
        children: n,
    });
}
function eU(e) {
    let { name: t, applicationIds: l, applicationCount: n, games: a, onClick: s } = e,
        r = eN(a, l);
    return (0, i.jsx)("div", {
        className: eS.ag,
        children: (0, i.jsx)(eM, {
            played: r,
            totalCount: n,
            children: (0, i.jsx)(ea.D, {
                className: D()(eS.Nw, eS.Dz),
                "aria-label": v.intl.formatToPlainString(el.default.o6mBdl, { name: t }),
                onClick: s,
                children: (0, i.jsx)(ew, { played: r, totalCount: n }),
            }),
        }),
    });
}
var eP = l(189043);
function eL(e) {
    let { guildId: t, entries: l, stat: n, games: a, currentUserEntry: s, currentUserPillarRef: r } = e,
        d = {
            1: { column: eP.HC, pillar: eP.P5 },
            2: { column: eP.th, pillar: eP.Vk },
            3: { column: eP.Ou, pillar: eP.el },
        };
    return (0, i.jsx)("div", {
        className: eP.pI,
        role: "list",
        "aria-label": v.intl.string(el.default.wKXLfQ),
        children: l.map((e, l) =>
            (0, i.jsx)(
                eG,
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
function eG(e) {
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
        } = e,
        m = eN(c, l.application_ids),
        h = eE(t, l),
        { primary: f } = ec(l, d),
        g = 1 === n ? G._3.SIZE_48 : G._3.SIZE_40,
        j = a.useRef(null),
        p = D()(eP.dR, { [eP.m$]: 1 === n, [eP.wd]: 2 === n, [eP.p0]: 3 === n }),
        v = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: eP.R3,
                    children: [
                        (0, i.jsx)(L.eu, {
                            size: g,
                            src: h.user?.getAvatarURL(t, (0, G.FT)(g)) ?? void 0,
                            "aria-hidden": !0,
                        }),
                        (0, i.jsx)("div", { className: p }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: D()(eP.DX, r),
                    children: [
                        (0, i.jsx)(S.D, {
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            lineClamp: 1,
                            className: eP.IY,
                            children: (0, i.jsx)(O.g, {
                                name: h.displayName,
                                colorString: h.member?.colorString ?? null,
                                colorStrings: h.roleColorStrings,
                            }),
                        }),
                        (0, i.jsx)(eM, {
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
        ref: o ? u : void 0,
        children:
            null != h.user
                ? (0, i.jsx)(es.A, {
                      targetElementRef: j,
                      user: h.user,
                      guildId: t,
                      children: (e) => (0, i.jsx)(ea.D, { ...e, className: eP.fs, innerRef: j, children: v }),
                  })
                : (0, i.jsx)("div", { className: eP.fs, children: v }),
    });
}
var eO = l(652215),
    eW = l(219047);
function eB(e) {
    let t,
        l,
        n,
        { guildId: s, data: r, inModal: d = !1 } = e,
        { stat: c, entries: o, computed_at: u, week_start_ts: m } = r,
        x = null != u && new Date(u).getTime() - m * $.A.Millis.SECOND >= $.A.Millis.WEEK,
        h = (0, w.bG)([Y.default], () => Y.default.getCurrentUser()?.id),
        f = a.useMemo(() => o.find((e) => e.user_id === h), [o, h]),
        g = a.useMemo(() => {
            let e = o.slice(0, 20);
            return null == f || e.includes(f) ? e : [...e, f];
        }, [o, f]),
        j = a.useMemo(() => Array.from(new Set(g.map((e) => e.user_id))), [g]);
    (0, z.k6)(s, j);
    let p =
            ((t = a.useMemo(() => Array.from(new Set(g.flatMap((e) => e.application_ids))), [g])),
            (l = (0, ev.A)(t)),
            (n = (0, w.yK)([ep.A], () => t.map((e) => ep.A.didFetchingApplicationFail(e)))),
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
        { scrollerRef: v, userRowRef: _, floatingRowPosition: A } = V(),
        I = null != A,
        N = null == f && null != h,
        E = a.useCallback(
            (e) => {
                let t = e === f;
                return (0, i.jsx)(
                    ey,
                    {
                        guildId: s,
                        entry: e,
                        stat: c,
                        games: p,
                        isCurrentUser: t,
                        shouldDimForCurrentUser: t && I,
                        rowRef: t ? _ : void 0,
                    },
                    `${e.rank}-${e.user_id}`,
                );
            },
            [I, f, p, s, c, _],
        );
    if (ee(r))
        return (0, i.jsxs)("div", {
            children: [(0, i.jsx)(ei, {}), N && (0, i.jsx)(eF, { guildId: s, isEmptyLeaderboard: !0 })],
        });
    let b = x ? g.slice(3) : g,
        S = [g[0], g[1], g[2]];
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsxs)("div", {
                className: eW.SY,
                children: [
                    (0, i.jsxs)(M.d_, {
                        className: D()(eW.p_, { [eW.zE]: d }),
                        ref: v,
                        children: [
                            x &&
                                (0, i.jsx)(eL, {
                                    guildId: s,
                                    entries: S,
                                    stat: c,
                                    games: p,
                                    currentUserEntry: f,
                                    currentUserPillarRef: _,
                                }),
                            b.map(E),
                        ],
                    }),
                    null != f && null != A && (0, i.jsx)("div", { className: D()(eW.Dz, "top" === A ? eW.gN : eW.qV) }),
                    null != f &&
                        null != A &&
                        (0, i.jsx)("div", {
                            className: D()(eW.z$, "top" === A ? eW.aG : eW.Ie),
                            children: (0, i.jsx)(ey, {
                                guildId: s,
                                entry: f,
                                stat: c,
                                games: p,
                                isCurrentUser: !0,
                                shouldDimForCurrentUser: !1,
                                isFloating: !0,
                            }),
                        }),
                    N && (0, i.jsx)(eF, { guildId: s }),
                ],
            }),
            (0, i.jsx)(ez, { computedAt: r.computed_at, inModal: d }),
        ],
    });
}
function ez(e) {
    let { computedAt: t, inModal: l } = e,
        n = (0, i.jsxs)("div", {
            className: eW.z8,
            children: [
                (0, i.jsx)(U.RefreshIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 }),
                (0, i.jsx)(x.E, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: v.intl.string(el.default["/nma+a"]),
                }),
            ],
        });
    return null == t
        ? (0, i.jsx)("div", { className: eW.qr, children: n })
        : (0, i.jsx)("div", {
              className: D()(eW.qr, { [eW.zE]: l }),
              tabIndex: 0,
              children: (0, i.jsx)(c.m, {
                  text: v.intl.formatToPlainString(el.default["1bt50t"], { timestamp: (0, Q.mk)(new Date(t)) }),
                  position: "bottom",
                  children: n,
              }),
          });
}
function eF(e) {
    let { guildId: t, isEmptyLeaderboard: n = !1 } = e,
        a = H.tz.useSetting(),
        s = H.JG.useSetting(),
        r = (0, w.bG)([q.A], () => q.A.hasConsented(eO.YAq.PERSONALIZATION)),
        d = v.intl.string(el.default.toxuHd),
        c = !1;
    ((!a || s.includes(t)) && ((d = v.intl.string(el.default["8y885d"])), (c = !0)),
        r || ((d = v.intl.string(el.default.mTARYx)), (c = !0)));
    let o = (0, w.bG)([Y.default], () => Y.default.getCurrentUser()),
        u = X.Ay.useName(t, void 0, o),
        m = (0, w.bG)([K.Ay], () => K.Ay.getMember(t, o?.id ?? "")),
        h = (0, F.gn)(t, o?.id, m?.colorStrings ?? null);
    return null == o || (n && !c)
        ? null
        : (0, i.jsxs)("div", {
              className: eW.Xx,
              children: [
                  (0, i.jsxs)("div", {
                      className: eW.kd,
                      children: [
                          (0, i.jsxs)("div", {
                              className: eW.nk,
                              children: [
                                  (0, i.jsx)(P.A, { children: v.intl.string(el.default["oHdW+u"]) }),
                                  (0, i.jsx)(x.E, {
                                      variant: "text-sm/semibold",
                                      color: "text-muted",
                                      "aria-hidden": !0,
                                      children: "?",
                                  }),
                              ],
                          }),
                          (0, i.jsx)(L.eu, {
                              size: G._3.SIZE_32,
                              src: o.getAvatarURL(t, (0, G.FT)(G._3.SIZE_32)) ?? void 0,
                              className: eW.SA,
                              "aria-hidden": !0,
                          }),
                          (0, i.jsxs)("div", {
                              className: eW.ko,
                              children: [
                                  (0, i.jsx)(S.D, {
                                      variant: "heading-sm/semibold",
                                      color: "text-default",
                                      lineClamp: 1,
                                      children: (0, i.jsx)(O.g, {
                                          name: u,
                                          colorString: m?.colorString ?? null,
                                          colorStrings: h,
                                      }),
                                  }),
                                  (0, i.jsx)("div", {
                                      className: eW.LF,
                                      children: (0, i.jsx)(x.E, {
                                          variant: "text-xs/medium",
                                          color: "text-subtle",
                                          children: d,
                                      }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  c &&
                      (0, i.jsx)("div", {
                          className: eW.rl,
                          children: (0, i.jsx)(W.$, {
                              variant: "secondary",
                              size: "sm",
                              text: v.intl.string(el.default.fMbgeZ),
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
                                                  l.e("463095"),
                                                  l.e("371482"),
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
var eH = l(224640),
    eq = l(20742),
    eK = l(515746);
function eY(e) {
    let { data: t } = e,
        l = (0, J.K)(t.stat),
        {
            ended: n,
            endDate: s,
            badgeLabel: r,
        } = (function (e) {
            let t = (e + $.A.Seconds.WEEK) * $.A.Millis.SECOND,
                [l, n] = a.useState(() => Date.now()),
                i = t - l,
                s = i <= 0,
                r = i - (Math.ceil(i / $.A.Millis.DAY) - 1) * $.A.Millis.DAY;
            return (
                (0, ej.A)(() => n(Date.now()), s ? null : r),
                a.useMemo(
                    () => ({
                        ended: s,
                        endDate: new Date(t),
                        badgeLabel: s
                            ? v.intl.string(el.default["J8r/7L"])
                            : v.intl.formatToPlainString(el.default["PuaR+2"], { days: Math.ceil(i / $.A.Millis.DAY) }),
                    }),
                    [s, t, i],
                )
            );
        })(t.week_start_ts),
        d = H.PZ.useSetting(),
        c = 2 > (0, Q.m_)(s, new Date()) ? (0, Q.mk)(s, !1, d) : (0, Q.i$)(s, "L LT", d),
        o = n
            ? v.intl.format(el.default.kG9XmM, { endedAt: c, nextStatName: (0, J.K)(t.next_stat).name })
            : v.intl.format(el.default["X+VLqi"], { statQuestion: l.question, endsAt: c });
    return (0, i.jsx)(eh.u, {
        title: l.name,
        body: o,
        position: "top",
        children: (0, i.jsx)("div", {
            className: eK.q,
            tabIndex: 0,
            children: (0, i.jsx)(x.E, {
                variant: "text-xs/semibold",
                color: n ? "text-muted" : "text-brand",
                children: r,
            }),
        }),
    });
}
var eQ = l(460614);
function e$(e) {
    let { guildId: t, data: l, modalProps: n } = e;
    return (0, i.jsxs)(eH.d, {
        size: "lg",
        "aria-label": et(l),
        ...n,
        children: [
            (0, i.jsxs)("div", {
                className: eQ.wx,
                children: [
                    (0, i.jsxs)("div", {
                        className: eQ.LD,
                        children: [
                            (0, i.jsx)(d.TrophyIcon, { size: "xs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 }),
                            (0, i.jsx)(S.D, { variant: "heading-sm/medium", className: eQ.DD, children: et(l) }),
                            (0, i.jsx)(eY, { data: l }),
                        ],
                    }),
                    (0, i.jsx)(eq.s_, {}),
                ],
            }),
            (0, i.jsx)("div", { className: eQ.rf, children: (0, i.jsx)(eB, { guildId: t, data: l, inModal: !0 }) }),
        ],
    });
}
var eX = l(452027),
    eV = l(103557),
    eZ = l(825484),
    eJ = l(95477),
    e0 = l(241326),
    e1 = l(683071),
    e2 = l(2553),
    e3 = l(405810),
    e4 = l(967198),
    e7 = l(488428),
    e8 = l(776231);
let e6 = (0, l(676279).cy)();
function e5(e, t, l) {
    let n = l.startsWith("a_"),
        i = n ? (e6 ? "webp" : "gif") : e6 ? "webp" : "jpg",
        { CDN_HOST: a, API_ENDPOINT: s } = window.GLOBAL_ENV,
        r = eO.Rsh.GUILD_SPACE_IMAGE_TEXT_WIDGET_IMAGE(e, t, l, i),
        d = null != a ? `https://${a}${r}` : location.protocol + s + r,
        c = { size: (0, e8.kr)(500 * (0, e8.mZ)()) };
    return (
        "jpg" === i && (c.quality = "lossless"), "webp" === i && n && (c.animated = !0), (d += `?${e7.stringify(c)}`)
    );
}
var e9 = l(868602),
    te = l(445187),
    tt = l(831544),
    tl = l(28863),
    tn = l(148166),
    ti = l(427209),
    ta = l(294454),
    ts = l(605810);
function tr(e) {
    let { target: t, tabIndex: n } = e;
    return (0, i.jsx)(c.m, {
        text: v.intl.string(v.t.RDE0Sc),
        ariaHidden: !0,
        children: (0, i.jsx)("button", {
            type: "button",
            className: ts.ql,
            tabIndex: n,
            "aria-label": v.intl.string(v.t.Ej3B3Y),
            onClick: () => {
                (0, B.openModalLazy)(
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
                            l.e("392028"),
                            l.e("124054"),
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
                            l.e("468787"),
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
                            l.e("177086"),
                            l.e("319714"),
                            l.e("189281"),
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
                            l.e("930758"),
                            l.e("234236"),
                            l.e("295366"),
                            l.e("28154"),
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
                            l.e("636989"),
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
                            l.e("88160"),
                            l.e("732672"),
                            l.e("403813"),
                            l.e("177104"),
                            l.e("844780"),
                            l.e("979630"),
                            l.e("236946"),
                            l.e("935948"),
                            l.e("464704"),
                            l.e("692639"),
                            l.e("890480"),
                            l.e("440963"),
                            l.e("565617"),
                            l.e("766031"),
                            l.e("394317"),
                            l.e("744385"),
                            l.e("84755"),
                            l.e("304329"),
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
                              children: (0, i.jsx)(x.E, {
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
    tf = (e, t) => (0, i.jsx)(x.E, { tag: "span", variant: "text-sm/semibold", color: "text-default", children: e }, t);
function tg(e) {
    return e;
}
function tj(e) {
    return e?.direction ?? th;
}
function tp(e) {
    return v.intl.formatToPlainString(el.default["7X+3f8"], { count: e });
}
function tv(e) {
    let t = e?.plays_change_percent;
    if (null == t) return null;
    let l = Math.round(Math.abs(t));
    return 0 === l
        ? null
        : { direction: t > 0 ? "up" : "down", label: v.intl.formatToPlainString(el.default["h+LUpk"], { percent: l }) };
}
var t_ = l(633099);
function tA(e) {
    let { trend: t } = e,
        l = "up" === t.direction ? to.z : tu.M;
    return (0, i.jsxs)("span", {
        className: D()(t_.GW, { [t_.$J]: "up" === t.direction, [t_.KW]: "down" === t.direction }),
        children: [
            (0, i.jsx)(l, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
            (0, i.jsx)(x.E, { tag: "span", variant: "text-sm/medium", color: "none", children: t.label }),
        ],
    });
}
function tI(e) {
    var t;
    let { guildId: l, song: n } = e,
        s = a.useMemo(() => (n.facepile_user_ids ?? []).slice(0, 3), [n.facepile_user_ids]);
    (0, z.k6)(l, s);
    let r = (0, w.yK)([Y.default], () => s.map((e) => Y.default.getUser(e)), [s]),
        d = a.useMemo(() => r.filter((e) => null != e), [r]);
    if (0 === d.length) return null;
    let c = n.unique_listeners - d.length;
    return (0, i.jsx)("span", {
        className: t_.WM,
        role: "group",
        "aria-label":
            ((t = n.unique_listeners),
            v.intl.formatToPlainString(el.default.AzIhRB, { count: t, trend: th, countHook: tg })),
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
                    children: (0, i.jsx)(x.E, {
                        tag: "span",
                        variant: "text-xs/semibold",
                        color: "text-subtle",
                        children: v.intl.formatToPlainString(el.default.bFIg0R, { count: c }),
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
              className: D()(t_.yp, { [t_.Fl]: t }),
              children: (0, i.jsxs)("div", {
                  className: t_.QD,
                  children: [
                      null != l && (0, i.jsx)(x.E, { variant: "text-md/semibold", color: "text-default", children: l }),
                      (0, i.jsxs)("div", {
                          className: t_._0,
                          children: [
                              null != n &&
                                  (0, i.jsx)(x.E, {
                                      tag: "span",
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: n,
                                  }),
                              null != a && (0, i.jsx)(tA, { trend: a }),
                          ],
                      }),
                  ],
              }),
          });
}
function tE(e) {
    var t;
    let { guildId: l, isCompact: n, canShowEmbed: a, song: s } = e,
        r = tv(s);
    return (0, i.jsxs)("div", {
        className: D()(t_.yp, { [t_.Fl]: n }),
        children: [
            a && (0, i.jsx)(tx.A, { className: t_.aF, resourceType: td.M0.TRACK, resourceId: s.track_external_id }),
            (0, i.jsxs)("div", {
                className: t_.QD,
                children: [
                    (0, i.jsx)(tI, { guildId: l, song: s }),
                    (0, i.jsxs)("div", {
                        className: t_._0,
                        children: [
                            (0, i.jsx)(x.E, {
                                tag: "span",
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children:
                                    ((t = s.plays),
                                    v.intl.format(el.default["7hHUIS"], { count: t, trend: tj(r), countHook: tf })),
                            }),
                            null != r && (0, i.jsx)(tA, { trend: r }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var tb = l(197935),
    tS = l(915734);
function ty(e) {
    let { label: t, items: l, isCompact: n, getItemKey: a, renderItem: s } = e;
    return (0, i.jsx)("div", {
        className: D()(tS.Dk, { [tS.yI]: n }),
        children: (0, i.jsx)(tb.A, {
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
function tR(e) {
    switch (e) {
        case "top_songs":
            return v.intl.string(el.default.KgeEtx);
        case "top_artists":
            return v.intl.string(el.default.RYxWTS);
        case "top_listeners":
            return v.intl.string(el.default.KO73KB);
    }
}
function tk(e, t) {
    return `popular-music-tab-${e}-${t}`;
}
function tD(e) {
    return `popular-music-panel-${e}`;
}
var tw = l(742452);
function tM(e) {
    return e.artist_external_id;
}
function tU(e, t) {
    return (0, i.jsx)(tc, { artist: e, itemProps: t });
}
function tP(e) {
    var t, l;
    let n,
        a,
        s,
        { isCompact: r, data: d } = e;
    if (0 === d.ranked_artists.length) return null;
    let c = tv(d.summary);
    return (0, i.jsxs)("div", {
        className: tw.U,
        children: [
            (0, i.jsx)(ty, {
                label: tR(tC.TOP_ARTISTS),
                items: d.ranked_artists,
                isCompact: r,
                getItemKey: tM,
                renderItem: tU,
            }),
            (0, i.jsx)(tN, {
                isCompact: r,
                headline:
                    ((t = d.summary),
                    null == (n = t?.distinct_songs) || n < 1
                        ? null
                        : v.intl.formatToPlainString(el.default.W8etVA, { count: n })),
                detail:
                    ((l = d.summary),
                    (a = l?.listener_count),
                    (s = l?.distinct_artists),
                    null == a || a < 1 || null == s || s < 1
                        ? null
                        : v.intl.format(el.default.yGqf0D, {
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
var tL = l(109487),
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
                        children: (0, i.jsx)(U.RefreshIcon, {
                            size: "xxs",
                            color: r.A.colors.ICON_SUBTLE,
                            "aria-hidden": !0,
                        }),
                    }),
                    (0, i.jsx)(x.E, {
                        className: tG.Pf,
                        tag: "span",
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: v.intl.string(el.default["3/DOFo"]),
                    }),
                ],
            }),
            (0, i.jsxs)(tl.Anchor, {
                className: tG.al,
                href: td.RQ.WEB_HOME,
                "aria-label": v.intl.string(el.default["jUr+wF"]),
                children: [
                    (0, i.jsx)("span", {
                        className: tG.Kk,
                        children: (0, i.jsx)(tL.L, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    }),
                    !t &&
                        (0, i.jsx)(x.E, {
                            className: tG.G2,
                            tag: "span",
                            variant: "text-xs/medium",
                            color: "none",
                            children: v.intl.string(el.default.ZdPp2q),
                        }),
                ],
            }),
        ],
    });
}
var tW = l(65154),
    tB = l(329177),
    tz = l(242226);
function tF(e) {
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
            shouldDimForCurrentUser: h,
            isFloating: f = !1,
            rowRef: g,
        } = e,
        j =
            ((t = (0, w.bG)([Y.default], () => Y.default.getUser(d), [d])),
            (l = (0, w.bG)([K.Ay], () => K.Ay.getMember(s, d), [s, d])),
            (n = (0, F.gn)(s, d, l?.colorStrings ?? null)),
            (a = X.Ay.useName(s, void 0, t)),
            {
                user: t,
                colorString: l?.colorString ?? null,
                roleColorStrings: n,
                displayName: m ? v.intl.formatToPlainString(el.default.subXXA, { name: a }) : a,
            }),
        { user: p } = j;
    return null == p
        ? null
        : (0, i.jsxs)("div", {
              ref: g,
              "aria-hidden": f,
              inert: f,
              className: D()(tz.nM, { [tz.Bh]: m && !f, [tz.lR]: h }),
              children: [
                  (0, i.jsx)(tH, { guildId: s, user: p, identity: j, rank: o, lastTrack: c?.last_track ?? null }),
                  null != c &&
                      (0, i.jsxs)("div", {
                          className: D()(tz.Mx, { [tz.dA]: u }),
                          children: [
                              (0, i.jsx)(tW.S, { size: "xxs", color: r.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                              (0, i.jsx)(x.E, {
                                  variant: "text-sm/medium",
                                  color: "text-strong",
                                  children: tp(c.plays),
                              }),
                          ],
                      }),
                  null != c &&
                      !u &&
                      (0, i.jsx)(tQ, { artists: c.recent_artists ?? [], artistCount: c.artist_count ?? null }),
              ],
          });
}
function tH(e) {
    let { guildId: t, user: l, identity: n, rank: s, lastTrack: r } = e,
        d = a.useRef(null);
    return (0, i.jsx)(es.A, {
        targetElementRef: d,
        user: l,
        guildId: t,
        children: (e) =>
            (0, i.jsxs)(ea.D, {
                ...e,
                innerRef: d,
                className: tz.D_,
                children: [
                    null != s &&
                        (0, i.jsx)(P.A, { children: v.intl.formatToPlainString(el.default.I4JiAQ, { rank: s }) }),
                    (0, i.jsxs)("span", {
                        className: tz.R3,
                        children: [
                            (0, i.jsx)(L.eu, {
                                size: G._3.SIZE_32,
                                src: l.getAvatarURL(t, (0, G.FT)(G._3.SIZE_32)) ?? void 0,
                                "aria-hidden": !0,
                            }),
                            1 === s &&
                                (0, i.jsx)("span", {
                                    className: tz.ie,
                                    "aria-hidden": !0,
                                    children: (0, i.jsx)(tB.CrownIcon, { size: "xxs", color: "currentColor" }),
                                }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tz.Dc,
                        children: [
                            (0, i.jsx)(S.D, {
                                variant: "heading-sm/semibold",
                                color: "text-default",
                                lineClamp: 1,
                                children: (0, i.jsx)(O.g, {
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
    return (0, i.jsx)(x.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: e }, t);
}
function tK(e) {
    let { track: t } = e,
        l = t?.track_title;
    if (null == l) return null;
    let n = t?.artist_name;
    return (0, i.jsx)(x.E, {
        variant: "text-xs/medium",
        color: "text-subtle",
        lineClamp: 1,
        children:
            null != n
                ? v.intl.format(el.default.QqaqBg, { trackTitle: l, artistName: n, highlightHook: tq })
                : v.intl.format(el.default.ZMJ8Mt, { trackTitle: l, highlightHook: tq }),
    });
}
function tY(e) {
    let { artist: t, notched: l } = e,
        [n, s] = a.useState(!1),
        d = null != t.artist_image_hash ? td.RQ.IMAGE(t.artist_image_hash) : null;
    return (0, i.jsx)("span", {
        className: tz.sG,
        children: (0, i.jsx)(ef.Ay, {
            mask: l ? ef.l8[24] : ef.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null == d || n
                    ? (0, i.jsx)("span", {
                          className: tz.Ql,
                          children: (0, i.jsx)(tt.MicrophoneIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE }),
                      })
                    : (0, i.jsx)("img", { className: tz.v2, src: d, alt: "", loading: "lazy", onError: () => s(!0) }),
        }),
    });
}
function tQ(e) {
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
                            children: (0, i.jsx)(ef.Ay, {
                                mask: ef.Ay.Masks.SQUIRCLE,
                                width: 24,
                                height: 24,
                                children: (0, i.jsx)("div", {
                                    className: tz.ag,
                                    children: (0, i.jsx)(x.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: v.intl.formatToPlainString(el.default.bFIg0R, { count: a }),
                                    }),
                                }),
                            }),
                        }),
                ],
            }),
    });
}
var t$ = l(897130);
function tX(e) {
    let { guildId: t, isCompact: l, data: n } = e,
        s = n.top_listeners,
        r = (0, w.bG)([Y.default], () => Y.default.getCurrentUser()?.id),
        d = s.findIndex((e) => e.user_id === r),
        c = -1 === d ? null : s[d],
        o = a.useMemo(() => s.map((e) => e.user_id), [s]);
    (0, z.k6)(t, o);
    let { scrollerRef: u, userRowRef: m, floatingRowPosition: x } = V(),
        h = null != x;
    return 0 === s.length
        ? null
        : (0, i.jsxs)("div", {
              className: t$.SY,
              children: [
                  (0, i.jsxs)(M.d_, {
                      className: t$.p_,
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
                              (0, i.jsx)("div", { className: "top" === x ? t$.gN : t$.qV }),
                              (0, i.jsx)("div", {
                                  className: D()(t$.z$, "top" === x ? t$.aG : t$.Ie),
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
var tV = l(432017),
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
                className: D()(ts.MT, { [ts.tY]: l }),
                "aria-pressed": l,
                onClick: () => n(t.track_external_id),
                children: [
                    (0, i.jsxs)(tn.R, {
                        src: r,
                        isCircular: !1,
                        FallbackIcon: tV.T,
                        children: [
                            l &&
                                (0, i.jsx)("span", {
                                    className: D()(ts.Lw, ts.Kp),
                                    "aria-hidden": !0,
                                    children: (0, i.jsx)(tZ.Y, { size: "md", color: "currentColor" }),
                                }),
                            (0, i.jsxs)("span", {
                                className: D()(ts.Lw, ts.vY),
                                children: [
                                    (0, i.jsx)(tJ.PlayIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                                    (0, i.jsx)(x.E, {
                                        tag: "span",
                                        variant: "text-xs/semibold",
                                        color: "none",
                                        children: tp(t.plays),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    null != t.track_title &&
                        (0, i.jsxs)("span", {
                            className: ts.Qq,
                            children: [
                                (0, i.jsx)(x.E, {
                                    className: ts.DD,
                                    tag: "span",
                                    variant: "text-sm/semibold",
                                    color: "text-default",
                                    lineClamp: 1,
                                    children: t.track_title,
                                }),
                                null != t.artist_name &&
                                    (0, i.jsx)(x.E, {
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
    t4 = (0, t1.v)(() => ({ byWidgetId: {} }));
function t7(e, t) {
    t4.setState((l) => {
        let n = l.byWidgetId[e] ?? t3;
        return { byWidgetId: { ...l.byWidgetId, [e]: { ...n, ...t } } };
    });
}
function t8(e) {
    return t4((t) => t.byWidgetId[e]?.view ?? t3.view);
}
function t6(e) {
    return t4((t) => t.byWidgetId[e]?.isCompact ?? t3.isCompact);
}
function t5(e) {
    return t4((t) => t.byWidgetId[e]?.selectedTrackId ?? t3.selectedTrackId);
}
function t9(e, t) {
    (t4.getState().byWidgetId[e] ?? t3).view !== t && t7(e, { view: t, selectedTrackId: null });
}
function le(e) {
    return e.track_external_id;
}
function lt(e) {
    var t;
    let l,
        { guildId: n, widgetId: s, isCompact: r, data: d } = e,
        c = t5(s),
        o = t4((e) => e.byWidgetId[s]?.canShowEmbed ?? t3.canShowEmbed),
        u = a.useCallback(
            (e) => {
                let t;
                return (
                    (t = t4.getState().byWidgetId[s]?.selectedTrackId ?? null),
                    void t7(s, { selectedTrackId: t === e ? null : e })
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
        h = tv(d.summary);
    return (0, i.jsxs)("div", {
        className: tw.U,
        children: [
            (0, i.jsx)(ty, {
                label: tR(tC.TOP_SONGS),
                items: d.ranked_songs,
                isCompact: r,
                getItemKey: le,
                renderItem: m,
            }),
            null != x
                ? (0, i.jsx)(tE, { guildId: n, isCompact: r, canShowEmbed: o, song: x })
                : (0, i.jsx)(tN, {
                      isCompact: r,
                      headline: (function (e) {
                          let t = e?.listening_time_ms;
                          if (null == t) return null;
                          let l = Math.round(t / $.A.Millis.MINUTE);
                          return l < 1 ? null : v.intl.formatToPlainString(el.default["+5b01q"], { minutes: l });
                      })(d.summary),
                      detail:
                          ((t = d.summary),
                          null == (l = t?.listener_count) || l < 1
                              ? null
                              : v.intl.format(el.default.AzIhRB, { count: l, trend: tj(h), countHook: tf })),
                      trend: h,
                  }),
        ],
    });
}
var ll = l(597601),
    ln = l(871107);
function li(e) {
    let { view: t } = e,
        l = r.A.colors.ICON_DEFAULT;
    switch (t) {
        case tC.TOP_ARTISTS:
            return (0, i.jsx)(tt.MicrophoneIcon, { size: "xs", color: l, "aria-hidden": !0 });
        case tC.TOP_LISTENERS:
            return (0, i.jsx)(ll.L, { size: "xs", color: l, "aria-hidden": !0 });
        case tC.TOP_SONGS:
            return (0, i.jsx)(tV.T, { size: "xs", color: l, "aria-hidden": !0 });
    }
}
function la(e) {
    let { widgetId: t, title: l } = e,
        n = t6(t),
        a = t8(t);
    if (!n)
        return (0, i.jsxs)("div", {
            className: ln.$,
            children: [
                (0, i.jsx)("span", {
                    className: ln.K,
                    children: (0, i.jsx)(tV.T, { size: "xs", color: r.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
                }),
                (0, i.jsx)(m.q, { children: l }),
            ],
        });
    let s = tT.map((e) => ({ id: e, label: tR(e), icon: (0, i.jsx)(li, { view: e }) }));
    return (0, i.jsx)(R, {
        navId: "popular-music-view",
        options: s,
        selectedId: a,
        menuLabel: v.intl.string(el.default.hFYyGU),
        triggerLabel: v.intl.formatToPlainString(el.default["/sw0JL"], { widgetName: l, viewName: tR(a) }),
        onSelect: (e) => t9(t, e),
    });
}
var ls = l(756936),
    lr = l(890497),
    ld = l(734057),
    lc = l(317525),
    lo = l(576705),
    lu = l(935208),
    lm = l(44167);
l(321073);
var lx = l(485845),
    lh = l(136722),
    lf = l(435183),
    lg = l(155718),
    lj = l(795816),
    lp = l(933958),
    lv = l(574152),
    l_ = l(627363),
    lA = l(712440),
    lI = l(733110),
    lN = l(488926),
    lE = l(818023);
async function lb(e) {
    null == ep.A.getApplication(lE.NW) && (await (0, l_.TA)(lE.NW));
    let t = lp.Ay.getEmbeddedActivitiesForChannel(e).every((e) => e.applicationId !== lE.NW);
    return await (0, lj.su)({
        channelId: e,
        applicationId: lE.NW,
        isStart: t,
        embeddedActivitiesManager: (0, lv.A)(),
        renderInFramePool: !0,
    });
}
async function lS(e) {
    let { channel: t, selectedRoleIds: l } = e,
        n = [];
    if (l.length > 0)
        for (let e of (n.push({ id: t.guild_id, type: lg.r2.ROLE, allow: lN.x3, deny: eO.xBc.USE_EMBEDDED_ACTIVITIES }),
        l))
            n.push({ id: e, type: lg.r2.ROLE, allow: eO.xBc.USE_EMBEDDED_ACTIVITIES, deny: lN.x3 });
    let i = await (0, lf.RT)(t.id, { permissionOverwrites: n });
    if (!i.ok) throw i;
}
let ly = [];
var lC = l(344351),
    lT = l(256693),
    lR = l(812901),
    lk = l(317608),
    lD = l(953538);
let lw = {
    [s.a.IMAGE_TEXT]: {
        View: function (e) {
            let { widget: t, guildSpaceMode: l, guildId: n } = e,
                { text: a, image_hash: s } = t.config,
                r = "edit" === l ? t.config.image : void 0,
                d = void 0 !== r ? r : null != s ? e5(n, t.id, s) : null;
            return (0, i.jsxs)("div", {
                className: te.kL,
                children: [
                    null != d && (0, i.jsx)("img", { className: te.Sl, src: d, alt: "" }),
                    null != a &&
                        (0, i.jsx)(x.E, {
                            variant: "text-md/normal",
                            color: "text-subtle",
                            className: te.Qq,
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
                p = (0, w.bG)([e4.A], () => e4.A.getGuildId()),
                _ = void 0 !== h ? h : null != r.image_hash && null != p ? e5(p, t.id, r.image_hash) : null;
            return (0, i.jsxs)(Z.B, {
                gap: 16,
                children: [
                    (0, i.jsx)(eJ.k, {
                        label: v.intl.string(v.t.gnwWrx),
                        value: d,
                        onChange: function (e) {
                            (j(null), u(e));
                        },
                        maxLength: 100,
                        showCharacterCount: !0,
                    }),
                    (0, i.jsx)(eX.D, {
                        label: v.intl.string(v.t.X4IxWL),
                        children: (0, i.jsxs)(Z.B, {
                            gap: 16,
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            className: e9.B,
                            children: [
                                (0, i.jsxs)(Z.B, {
                                    gap: 8,
                                    direction: "horizontal",
                                    children: [
                                        (0, i.jsx)(e3.A, {
                                            variant: "secondary",
                                            text: v.intl.string(v.t["MsUY/S"]),
                                            onChange: function (e) {
                                                (j(null), f(e));
                                            },
                                            maxFileSizeBytes: 0xa00000,
                                            onFileSizeError: () => (0, e2.A)(0xa00000),
                                        }),
                                        null != _ &&
                                            (0, i.jsx)(c.m, {
                                                text: v.intl.string(v.t.N86XcP),
                                                ariaHidden: !0,
                                                children: (0, i.jsx)(o.K, {
                                                    variant: "critical-secondary",
                                                    icon: e0.TrashIcon,
                                                    onClick: function () {
                                                        (j(null), f(null));
                                                    },
                                                    "aria-label": v.intl.string(v.t.N86XcP),
                                                }),
                                            }),
                                    ],
                                }),
                                null != _ && (0, i.jsx)("img", { className: e9.V, src: _, alt: "" }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(eV.f, {
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
                            children: (0, i.jsx)(e1.w, { type: "critical", children: g }),
                        }),
                    (0, i.jsxs)(eZ.e, {
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
                                        0 === m.length && !e && (j(v.intl.string(el.default.zleX9q)), 1))
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
                ? (0, i.jsx)(A, {})
                : "error" === t.status
                  ? (0, i.jsx)(I, {})
                  : (0, i.jsx)(eB, { guildId: l, data: t.data });
        },
        Title: function (e) {
            let { widget: t, hydration: l } = e;
            return l?.status !== "success"
                ? (0, i.jsx)(m.q, { children: t.default_title ?? "" })
                : (0, i.jsx)(m.q, { children: et(l.data) });
        },
        TitleIcon: function () {
            return (0, i.jsx)(d.TrophyIcon, { size: "xs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        },
        HeaderAccessory: function (e) {
            let { hydration: t } = e;
            return t?.status !== "success" || ee(t.data) ? null : (0, i.jsx)(eY, { data: t.data });
        },
        HeaderActions: function (e) {
            let { hydration: t, guildId: l } = e,
                n = t?.status === "success" ? t.data : void 0;
            return null != n && ee(n)
                ? null
                : (0, i.jsx)(c.m, {
                      text: v.intl.string(v.t.dcl9MQ),
                      children: (0, i.jsx)(o.K, {
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
                { guildId: d, widget: c, hydration: o, guildSpaceMode: u } = e,
                m =
                    ((t = c.id),
                    (n = a.useRef(null)),
                    (s = a.useCallback(
                        (e) => {
                            let { width: l } = e.contentRect;
                            t7(t, { isCompact: l < 480, canShowEmbed: l >= 720 });
                        },
                        [t],
                    )),
                    (0, t2.g)(n, s, [t], { fireOnMount: !0 }),
                    a.useEffect(
                        () => () => {
                            t4.setState((e) => {
                                if (null == e.byWidgetId[t]) return e;
                                let l = { ...e.byWidgetId };
                                return (delete l[t], { byWidgetId: l });
                            });
                        },
                        [t],
                    ),
                    n),
                x = t6(c.id),
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
                className: ls.rf,
                ref: m,
                children: [
                    null != j && (0, i.jsx)("img", { className: ls.G, src: j, alt: "", "aria-hidden": !0 }),
                    (0, i.jsx)("div", {
                        className: ls.Qs,
                        children: (0, i.jsx)("div", {
                            id: tD(c.id),
                            className: ls.nd,
                            role: g ? "tabpanel" : "group",
                            tabIndex: 0,
                            "aria-label": g ? void 0 : tR(h),
                            "aria-labelledby": g ? tk(c.id, h) : void 0,
                            children: (function () {
                                if (null == o || "idle" === o.status || "loading" === o.status)
                                    return (0, i.jsx)(A, {});
                                if ("error" === o.status) return (0, i.jsx)(I, {});
                                switch (h) {
                                    case tC.TOP_SONGS:
                                        return (0, i.jsx)(lt, {
                                            guildId: d,
                                            widgetId: c.id,
                                            isCompact: x,
                                            data: o.data,
                                        });
                                    case tC.TOP_ARTISTS:
                                        return (0, i.jsx)(tP, { isCompact: x, data: o.data });
                                    case tC.TOP_LISTENERS:
                                        return (0, i.jsx)(tX, { guildId: d, isCompact: x, data: o.data });
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
                n = t.default_title ?? v.intl.string(el.default["5xxUI2"]);
            return "edit" === l ? (0, i.jsx)(m.q, { children: n }) : (0, i.jsx)(la, { widgetId: t.id, title: n });
        },
        ViewHeaderTrailing: function (e) {
            let { widget: t, title: l } = e,
                n = t6(t.id),
                a = t8(t.id);
            return n
                ? null
                : (0, i.jsx)(g, {
                      label: l,
                      tabs: tT.map((e) => ({ id: e, label: tR(e) })),
                      selectedId: a,
                      panelId: tD(t.id),
                      getTabId: (e) => tk(t.id, e),
                      onSelect: (e) => t9(t.id, e),
                  });
        },
    },
    [s.a.WHITEBOARD]: {
        View: function (e) {
            let t,
                l,
                n = (0, lm.n)(),
                s = (0, w.bG)(
                    [ld.A, lo.A],
                    () => {
                        let e = null != n ? ld.A.getChannel(n) : void 0;
                        return null != e && lo.A.can(eO.xBc.USE_EMBEDDED_ACTIVITIES, e);
                    },
                    [n],
                ),
                r = (0, w.bG)(
                    [lp.Ay],
                    () => {
                        let e = lp.Ay.getCurrentEmbeddedActivity();
                        return null == e ||
                            e.applicationId !== lE.NW ||
                            e.location.kind !== lC.T.GUILD_CHANNEL ||
                            e.location.channel_id !== n
                            ? null
                            : e;
                    },
                    [n],
                ),
                d = (0, w.bG)([lp.Ay], () => lp.Ay.isLaunchingActivity(), []),
                { authResolved: c, isAuthorized: o } =
                    ((t = (0, w.bG)(
                        [lI.default],
                        () => lI.default.getFetchStateForApplication(lE.NW) === lI.FetchState.FETCHED,
                        [],
                    )),
                    (l = (0, w.bG)(
                        [lI.default, ep.A],
                        () => {
                            let e = lI.default.getNewestTokenForApplication(lE.NW);
                            if (null == e) return !1;
                            let t = ep.A.getApplication(lE.NW),
                                l = t?.integrationTypesConfig?.[lx.b.USER_INSTALL]?.oauth2InstallParams?.scopes;
                            if (null == l) return !0;
                            let n = new Set(e.scopes);
                            return l.every((e) => n.has(e));
                        },
                        [],
                    )),
                    a.useEffect(() => {
                        (lI.default.getFetchStateForApplication(lE.NW) === lI.FetchState.NOT_FETCHED &&
                            lA.A.fetch([lE.NW]),
                            null == ep.A.getApplication(lE.NW) && (0, l_.TA)(lE.NW));
                    }, []),
                    { authResolved: t, isAuthorized: l }),
                u = a.useRef(!1);
            a.useEffect(() => {
                null == r && null != n && s && c && o && !u.current && ((u.current = !0), lb(n));
            }, [s, n, r, c, o]);
            let m = a.useCallback(() => {
                    null != n && ((u.current = !0), lb(n));
                }, [n]),
                h = null != n && c && !o;
            return s
                ? (0, i.jsxs)("div", {
                      className: lD.kL,
                      children: [
                          null != r &&
                              (0, i.jsx)(lk.A, {
                                  frameId: (0, lT.Ri)(r),
                                  level: lR.A.WithinAppContent,
                                  className: lD.t$,
                              }),
                          null == r &&
                              h &&
                              (0, i.jsx)("div", {
                                  className: lD.P5,
                                  children: (0, i.jsx)(W.$, {
                                      variant: "secondary",
                                      text: v.intl.string(el.default.PSuly6),
                                      loading: d,
                                      onClick: m,
                                  }),
                              }),
                      ],
                  })
                : (0, i.jsx)("div", {
                      className: lD.kL,
                      children: (0, i.jsx)("div", {
                          className: lD.m0,
                          children: (0, i.jsx)(x.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: v.intl.string(el.default["nXc/MQ"]),
                          }),
                      }),
                  });
        },
        Edit: function (e) {
            let { cancel: t } = e,
                l = (0, w.bG)([e4.A], () => e4.A.getGuildId()),
                n = lu.default.castGuildIdAsEveryoneGuildRoleId(l),
                s = (0, lm.n)(),
                r = (0, w.bG)([ld.A], () => (null != s ? ld.A.getChannel(s) : void 0), [s]),
                d = (0, w.bG)([lo.A], () => null != r && lo.A.can(eO.xBc.MANAGE_ROLES, r), [r]),
                c = (0, w.bG)([lc.A], () => (null == l ? ly : lc.A.getSortedRoles(l).filter((e) => e.id !== n)), [
                    l,
                    n,
                ]),
                o = a.useMemo(() => {
                    let e;
                    return null != r
                        ? null != (e = r.permissionOverwrites[r.guild_id]) &&
                          lh.zy(e.deny, eO.xBc.USE_EMBEDDED_ACTIVITIES)
                            ? c
                                  .filter((e) => {
                                      let t = r.permissionOverwrites[e.id];
                                      return null != t && lh.zy(t.allow, eO.xBc.USE_EMBEDDED_ACTIVITIES);
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
                        (await lS({ channel: r, selectedRoleIds: j }), t());
                    } catch {
                        (h(!1), g(!0));
                    }
                }
            }
            return null == r
                ? null
                : (0, i.jsxs)(Z.B, {
                      gap: 16,
                      children: [
                          (0, i.jsx)(lr.Z, {
                              selectionMode: "multiple",
                              label: v.intl.string(el.default.XXLbfv),
                              description: v.intl.string(el.default.XrpYIG),
                              placeholder: v.intl.string(el.default.pp6WeD),
                              options: p,
                              value: j,
                              onSelectionChange: function (e) {
                                  (g(!1), m(e));
                              },
                              disabled: !d || x,
                              fullWidth: !0,
                              wrapTags: !0,
                          }),
                          !d && (0, i.jsx)(e1.w, { type: "warning", children: v.intl.string(el.default.UPLtlA) }),
                          f &&
                              (0, i.jsx)("div", {
                                  role: "alert",
                                  children: (0, i.jsx)(e1.w, {
                                      type: "critical",
                                      children: v.intl.string(el.default.xyCJYs),
                                  }),
                              }),
                          (0, i.jsxs)(eZ.e, {
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
