l.d(t, { m: () => lA });
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
function E() {
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
    b = l(477782),
    I = l(922016),
    S = l(297264),
    y = l(847374),
    T = l(914173);
function C(e) {
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
function k(e) {
    let { navId: t, options: l, selectedId: n, menuLabel: s, triggerLabel: d, onSelect: c } = e,
        [o, u] = a.useState(!1),
        m = a.useRef(null),
        h = l.find((e) => e.id === n);
    return null == h
        ? null
        : (0, i.jsx)(I.Y, {
              targetElementRef: m,
              position: "bottom",
              align: "left",
              shouldShow: o,
              onRequestOpen: () => u(!0),
              onRequestClose: () => u(!1),
              renderPopout: (e) => {
                  let { closePopout: a } = e;
                  return (0, i.jsx)(C, { navId: t, options: l, selectedId: n, label: s, onSelect: c, onClose: a });
              },
              children: (e) =>
                  (0, i.jsx)(S.D, {
                      variant: "heading-sm/medium",
                      className: T.R_,
                      children: (0, i.jsxs)("button", {
                          ...e,
                          ref: m,
                          type: "button",
                          className: T.hZ,
                          "aria-haspopup": "menu",
                          "aria-label": d,
                          children: [
                              null != h.icon && (0, i.jsx)("span", { className: T.Kk, children: h.icon }),
                              (0, i.jsx)(x.E, {
                                  className: T.DD,
                                  tag: "span",
                                  variant: "heading-sm/medium",
                                  color: "text-default",
                                  children: h.label,
                              }),
                              (0, i.jsx)("span", {
                                  className: T.Kk,
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
var R = l(503698),
    w = l.n(R),
    D = l(17928),
    M = l(364522),
    P = l(663417),
    L = l(140735),
    U = l(97808),
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
    $ = l(58703),
    Q = l(927813),
    V = l(562153),
    X = l(331322),
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
    return (0, i.jsxs)(X.B, {
        className: el.w,
        align: "center",
        justify: "center",
        gap: 6,
        children: [
            (0, i.jsx)(S.D, {
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
    let t = Math.floor(Math.max(e, 0) / Q.A.Seconds.MINUTE);
    return v.intl.formatToPlainString(et.default["6Y8H0A"], {
        hours: Math.floor(t / Q.A.Minutes.HOUR),
        minutes: t % Q.A.Minutes.HOUR,
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
                    ((n = Math.floor((l = Math.floor(Math.max(e.value, 0) / Q.A.Millis.MINUTE)) / Q.A.Minutes.HOUR)),
                    (i = l % Q.A.Minutes.HOUR),
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
var ec = l(81466),
    eo = l(406810),
    eu = l(687966),
    em = l(109112),
    ex = l(683063),
    eh = l(573435),
    ef = l(402860),
    eg = l(396583),
    ej = l(587895),
    ep = l(429913),
    ev = l(280450);
function e_(e, t) {
    return { id: e, name: v.intl.string(et.default.rhDbuQ), iconUrl: void 0, isLoading: t };
}
function eA(e, t) {
    return e.get(t) ?? e_(t, !1);
}
function eE(e, t) {
    return t.map((t) => eA(e, t));
}
function eN(e, t) {
    let l = t.user_id,
        n = (0, D.bG)([Y.default], () => Y.default.getUser(l), [l]),
        i = (0, D.bG)([K.Ay], () => K.Ay.getMember(e, l), [e, l]),
        a = (0, F.gn)(e, l, i?.colorStrings ?? null),
        s = V.Ay.useName(e, void 0, n),
        r = (0, D.bG)([ev.default], () => ev.default.getId()) === l,
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
            isFloating: c = !1,
            rowRef: o,
        } = e,
        u = eN(t, l),
        m = l.application_ids[0],
        x = null != m ? eA(s, m) : void 0,
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
        ref: o,
        "aria-hidden": c,
        inert: c,
        className: w()(eI.nM, { [eI.Bh]: r && !c, [eI.lR]: d }),
        children: [
            (0, i.jsx)(ey, { guildId: t, entry: l, identity: u, lastPlayedGame: x }),
            (0, i.jsx)(ek, { entry: l, stat: n, name: u.baseName, onClick: f }),
            (0, i.jsx)(eM, {
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
                (0, i.jsx)(U.eu, {
                    size: G._3.SIZE_32,
                    src: n.user?.getAvatarURL(t, (0, G.FT)(G._3.SIZE_32)) ?? void 0,
                    className: eI.my,
                    "aria-hidden": !0,
                }),
                (0, i.jsxs)("div", {
                    className: eI.Dc,
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
              children: (e) => (0, i.jsx)(ei.D, { ...e, innerRef: r, className: w()(eI.D_, eI.FB), children: d }),
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
                    (0, i.jsx)(L.A, { children: l }),
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
            return (0, i.jsx)(ec.CalendarIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case es.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            return (0, i.jsx)(eo.ClockIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case es.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return (0, i.jsx)(eu.GameControllerIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        default:
            return null;
    }
}
function ek(e) {
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
function eR(e) {
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
function ew(e) {
    let { played: t, totalCount: l } = e,
        n = t.slice(0, 2),
        a = l - n.length;
    return (0, i.jsxs)("div", {
        className: eI.Nw,
        children: [
            n.map((e, t) => (0, i.jsx)(eR, { game: e, notched: a > 0 || t !== n.length - 1 }, `${e.id}-${t}`)),
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
function eD(e) {
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
        asset: t.length > 0 ? (0, i.jsx)(ew, { played: t, totalCount: t.length }) : void 0,
        assetSize: t.length > 1 ? 43 : 24,
        children: n,
    });
}
function eM(e) {
    let { name: t, applicationIds: l, applicationCount: n, games: a, onClick: s } = e,
        r = eE(a, l);
    return (0, i.jsx)("div", {
        className: eI.ag,
        children: (0, i.jsx)(eD, {
            played: r,
            totalCount: n,
            children: (0, i.jsx)(ei.D, {
                className: w()(eI.Nw, eI.Dz),
                "aria-label": v.intl.formatToPlainString(et.default.o6mBdl, { name: t }),
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
        "aria-label": v.intl.string(et.default.wKXLfQ),
        children: l.map((e, l) =>
            (0, i.jsx)(
                eU,
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
function eU(e) {
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
        m = eE(c, l.application_ids),
        h = eN(t, l),
        { primary: f } = ed(l, d),
        g = 1 === n ? G._3.SIZE_48 : G._3.SIZE_40,
        j = a.useRef(null),
        p = w()(eP.dR, { [eP.m$]: 1 === n, [eP.wd]: 2 === n, [eP.p0]: 3 === n }),
        v = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: eP.R3,
                    children: [
                        (0, i.jsx)(U.eu, {
                            size: g,
                            src: h.user?.getAvatarURL(t, (0, G.FT)(g)) ?? void 0,
                            "aria-hidden": !0,
                        }),
                        (0, i.jsx)("div", { className: p }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: w()(eP.DX, r),
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
                        (0, i.jsx)(eD, {
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
                ? (0, i.jsx)(ea.A, {
                      targetElementRef: j,
                      user: h.user,
                      guildId: t,
                      children: (e) => (0, i.jsx)(ei.D, { ...e, className: eP.fs, innerRef: j, children: v }),
                  })
                : (0, i.jsx)("div", { className: eP.fs, children: v }),
    });
}
var eG = l(652215),
    eO = l(219047);
function eW(e) {
    let t,
        l,
        n,
        { guildId: s, data: r, inModal: d = !1 } = e,
        { stat: c, entries: o, computed_at: u, week_start_ts: m } = r,
        x = null != u && new Date(u).getTime() - m * Q.A.Millis.SECOND >= Q.A.Millis.WEEK,
        h = (0, D.bG)([Y.default], () => Y.default.getCurrentUser()?.id),
        f = a.useMemo(() => o.find((e) => e.user_id === h), [o, h]),
        g = a.useMemo(() => {
            let e = o.slice(0, 20);
            return null == f || e.includes(f) ? e : [...e, f];
        }, [o, f]),
        j = a.useMemo(() => Array.from(new Set(g.map((e) => e.user_id))), [g]);
    (0, z.k6)(s, j);
    let p =
            ((t = a.useMemo(() => Array.from(new Set(g.flatMap((e) => e.application_ids))), [g])),
            (l = (0, ep.A)(t)),
            (n = (0, D.yK)([ej.A], () => t.map((e) => ej.A.didFetchingApplicationFail(e)))),
            a.useMemo(() => {
                let e = new Map();
                return (
                    t.forEach((t, i) => {
                        let a = l[i];
                        e.set(
                            t,
                            null != a
                                ? { id: t, name: a.name, iconUrl: a.getIconURL(64) ?? void 0, isLoading: !1 }
                                : e_(t, !n[i]),
                        );
                    }),
                    e
                );
            }, [t, l, n])),
        {
            scrollerRef: v,
            userRowRef: _,
            floatingRowPosition: A,
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
        E = null != A,
        N = null == f && null != h,
        b = a.useCallback(
            (e) => {
                let t = e === f;
                return (0, i.jsx)(
                    eS,
                    {
                        guildId: s,
                        entry: e,
                        stat: c,
                        games: p,
                        isCurrentUser: t,
                        shouldDimForCurrentUser: t && E,
                        rowRef: t ? _ : void 0,
                    },
                    `${e.rank}-${e.user_id}`,
                );
            },
            [E, f, p, s, c, _],
        );
    if (J(r))
        return (0, i.jsxs)("div", {
            children: [(0, i.jsx)(en, {}), N && (0, i.jsx)(ez, { guildId: s, isEmptyLeaderboard: !0 })],
        });
    let I = x ? g.slice(3) : g,
        S = [g[0], g[1], g[2]];
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsxs)("div", {
                className: eO.SY,
                children: [
                    (0, i.jsxs)(M.d_, {
                        className: w()(eO.p_, { [eO.zE]: d }),
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
                            I.map(b),
                        ],
                    }),
                    null != f && null != A && (0, i.jsx)("div", { className: w()(eO.Dz, "top" === A ? eO.gN : eO.qV) }),
                    null != f &&
                        null != A &&
                        (0, i.jsx)("div", {
                            className: w()(eO.z$, "top" === A ? eO.aG : eO.Ie),
                            children: (0, i.jsx)(eS, {
                                guildId: s,
                                entry: f,
                                stat: c,
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
                (0, i.jsx)(P.RefreshIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 }),
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
              className: w()(eO.qr, { [eO.zE]: l }),
              tabIndex: 0,
              children: (0, i.jsx)(c.m, {
                  text: v.intl.formatToPlainString(et.default["1bt50t"], { timestamp: (0, $.mk)(new Date(t)) }),
                  position: "bottom",
                  children: n,
              }),
          });
}
function ez(e) {
    let { guildId: t, isEmptyLeaderboard: n = !1 } = e,
        a = H.tz.useSetting(),
        s = H.JG.useSetting(),
        r = (0, D.bG)([q.A], () => q.A.hasConsented(eG.YAq.PERSONALIZATION)),
        d = v.intl.string(et.default.toxuHd),
        c = !1;
    ((!a || s.includes(t)) && ((d = v.intl.string(et.default["8y885d"])), (c = !0)),
        r || ((d = v.intl.string(et.default.mTARYx)), (c = !0)));
    let o = (0, D.bG)([Y.default], () => Y.default.getCurrentUser()),
        u = V.Ay.useName(t, void 0, o),
        m = (0, D.bG)([K.Ay], () => K.Ay.getMember(t, o?.id ?? "")),
        h = (0, F.gn)(t, o?.id, m?.colorStrings ?? null);
    return null == o || (n && !c)
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
                                  (0, i.jsx)(L.A, { children: v.intl.string(et.default["oHdW+u"]) }),
                                  (0, i.jsx)(x.E, {
                                      variant: "text-sm/semibold",
                                      color: "text-muted",
                                      "aria-hidden": !0,
                                      children: "?",
                                  }),
                              ],
                          }),
                          (0, i.jsx)(U.eu, {
                              size: G._3.SIZE_32,
                              src: o.getAvatarURL(t, (0, G.FT)(G._3.SIZE_32)) ?? void 0,
                              className: eO.SA,
                              "aria-hidden": !0,
                          }),
                          (0, i.jsxs)("div", {
                              className: eO.ko,
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
                                      className: eO.LF,
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
var eF = l(224640),
    eH = l(20742),
    eq = l(515746);
function eK(e) {
    let { data: t } = e,
        l = (0, Z.K)(t.stat),
        {
            ended: n,
            endDate: s,
            badgeLabel: r,
        } = (function (e) {
            let t = (e + Q.A.Seconds.WEEK) * Q.A.Millis.SECOND,
                [l, n] = a.useState(() => Date.now()),
                i = t - l,
                s = i <= 0,
                r = i - (Math.ceil(i / Q.A.Millis.DAY) - 1) * Q.A.Millis.DAY;
            return (
                (0, eg.A)(() => n(Date.now()), s ? null : r),
                a.useMemo(
                    () => ({
                        ended: s,
                        endDate: new Date(t),
                        badgeLabel: s
                            ? v.intl.string(et.default["J8r/7L"])
                            : v.intl.formatToPlainString(et.default["PuaR+2"], { days: Math.ceil(i / Q.A.Millis.DAY) }),
                    }),
                    [s, t, i],
                )
            );
        })(t.week_start_ts),
        d = H.PZ.useSetting(),
        c = 2 > (0, $.m_)(s, new Date()) ? (0, $.mk)(s, !1, d) : (0, $.i$)(s, "L LT", d),
        o = n
            ? v.intl.format(et.default.kG9XmM, { endedAt: c, nextStatName: (0, Z.K)(t.next_stat).name })
            : v.intl.format(et.default["X+VLqi"], { statQuestion: l.question, endsAt: c });
    return (0, i.jsx)(ex.u, {
        title: l.name,
        body: o,
        position: "top",
        children: (0, i.jsx)("div", {
            className: eq.q,
            tabIndex: 0,
            children: (0, i.jsx)(x.E, {
                variant: "text-xs/semibold",
                color: n ? "text-muted" : "text-brand",
                children: r,
            }),
        }),
    });
}
var eY = l(460614);
function e$(e) {
    let { guildId: t, data: l, modalProps: n } = e;
    return (0, i.jsxs)(eF.d, {
        size: "lg",
        "aria-label": ee(l),
        ...n,
        children: [
            (0, i.jsxs)("div", {
                className: eY.wx,
                children: [
                    (0, i.jsxs)("div", {
                        className: eY.LD,
                        children: [
                            (0, i.jsx)(d.TrophyIcon, { size: "xs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 }),
                            (0, i.jsx)(S.D, { variant: "heading-sm/medium", className: eY.DD, children: ee(l) }),
                            (0, i.jsx)(eK, { data: l }),
                        ],
                    }),
                    (0, i.jsx)(eH.s_, {}),
                ],
            }),
            (0, i.jsx)("div", { className: eY.rf, children: (0, i.jsx)(eW, { guildId: t, data: l, inModal: !0 }) }),
        ],
    });
}
var eQ = l(452027),
    eV = l(103557),
    eX = l(825484),
    eZ = l(95477),
    eJ = l(241326),
    e0 = l(683071),
    e1 = l(2553),
    e2 = l(405810),
    e3 = l(967198),
    e7 = l(488428),
    e4 = l(776231);
let e8 = (0, l(676279).cy)();
function e6(e, t, l) {
    let n = l.startsWith("a_"),
        i = n ? (e8 ? "webp" : "gif") : e8 ? "webp" : "jpg",
        { CDN_HOST: a, API_ENDPOINT: s } = window.GLOBAL_ENV,
        r = eG.Rsh.GUILD_SPACE_IMAGE_TEXT_WIDGET_IMAGE(e, t, l, i),
        d = null != a ? `https://${a}${r}` : location.protocol + s + r,
        c = { size: (0, e4.kr)(500 * (0, e4.mZ)()) };
    return (
        "jpg" === i && (c.quality = "lossless"), "webp" === i && n && (c.animated = !0), (d += `?${e7.stringify(c)}`)
    );
}
var e5 = l(868602),
    e9 = l(445187),
    te = l(831544),
    tt = l(28863),
    tl = l(148166),
    tn = l(427209),
    ti = l(294454),
    ta = l(605810);
function ts(e) {
    let { target: t, tabIndex: n } = e;
    return (0, i.jsx)(c.m, {
        text: v.intl.string(v.t.RDE0Sc),
        ariaHidden: !0,
        children: (0, i.jsx)("button", {
            type: "button",
            className: ta.ql,
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
                              children: (0, i.jsx)(x.E, {
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
    th = (e, t) => (0, i.jsx)(x.E, { tag: "span", variant: "text-sm/semibold", color: "text-default", children: e }, t);
function tf(e) {
    return e;
}
function tg(e) {
    return e?.direction ?? tx;
}
function tj(e) {
    let t = e?.plays_change_percent;
    if (null == t) return null;
    let l = Math.round(Math.abs(t));
    return 0 === l
        ? null
        : { direction: t > 0 ? "up" : "down", label: v.intl.formatToPlainString(et.default["h+LUpk"], { percent: l }) };
}
var tp = l(633099);
function tv(e) {
    let { trend: t } = e,
        l = "up" === t.direction ? tc.z : to.M;
    return (0, i.jsxs)("span", {
        className: w()(tp.GW, { [tp.$J]: "up" === t.direction, [tp.KW]: "down" === t.direction }),
        children: [
            (0, i.jsx)(l, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
            (0, i.jsx)(x.E, { tag: "span", variant: "text-sm/medium", color: "none", children: t.label }),
        ],
    });
}
function t_(e) {
    var t;
    let { guildId: l, song: n } = e,
        s = a.useMemo(() => (n.facepile_user_ids ?? []).slice(0, 3), [n.facepile_user_ids]);
    (0, z.k6)(l, s);
    let r = (0, D.yK)([Y.default], () => s.map((e) => Y.default.getUser(e)), [s]),
        d = a.useMemo(() => r.filter((e) => null != e), [r]);
    if (0 === d.length) return null;
    let c = n.unique_listeners - d.length;
    return (0, i.jsx)("span", {
        className: tp.WM,
        role: "group",
        "aria-label":
            ((t = n.unique_listeners),
            v.intl.formatToPlainString(et.default.AzIhRB, { count: t, trend: tx, countHook: tf })),
        children: (0, i.jsx)(tu.Ay, {
            users: d,
            guildId: l,
            size: tu.DN.SIZE_24,
            max: d.length,
            count: n.unique_listeners,
            hideMoreUsers: c <= 0,
            renderMoreUsers: () =>
                (0, i.jsx)("span", {
                    className: tp.ju,
                    children: (0, i.jsx)(x.E, {
                        tag: "span",
                        variant: "text-xs/semibold",
                        color: "text-subtle",
                        children: v.intl.formatToPlainString(et.default.bFIg0R, { count: c }),
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
              className: w()(tp.yp, { [tp.Fl]: t }),
              children: (0, i.jsxs)("div", {
                  className: tp.QD,
                  children: [
                      null != l && (0, i.jsx)(x.E, { variant: "text-md/semibold", color: "text-default", children: l }),
                      (0, i.jsxs)("div", {
                          className: tp._0,
                          children: [
                              null != n &&
                                  (0, i.jsx)(x.E, {
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
function tE(e) {
    var t;
    let { guildId: l, isCompact: n, canShowEmbed: a, song: s } = e,
        r = tj(s);
    return (0, i.jsxs)("div", {
        className: w()(tp.yp, { [tp.Fl]: n }),
        children: [
            a && (0, i.jsx)(tm.A, { className: tp.aF, resourceType: tr.M0.TRACK, resourceId: s.track_external_id }),
            (0, i.jsxs)("div", {
                className: tp.QD,
                children: [
                    (0, i.jsx)(t_, { guildId: l, song: s }),
                    (0, i.jsxs)("div", {
                        className: tp._0,
                        children: [
                            (0, i.jsx)(x.E, {
                                tag: "span",
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children:
                                    ((t = s.plays),
                                    v.intl.format(et.default["7hHUIS"], { count: t, trend: tg(r), countHook: th })),
                            }),
                            null != r && (0, i.jsx)(tv, { trend: r }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var tN = l(197935),
    tb = l(915734);
function tI(e) {
    let { label: t, items: l, isCompact: n, getItemKey: a, renderItem: s } = e;
    return (0, i.jsx)("div", {
        className: w()(tb.Dk, { [tb.yI]: n }),
        children: (0, i.jsx)(tN.A, {
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
let ty = ["top_songs", "top_artists", "top_listeners"];
function tT(e) {
    switch (e) {
        case "top_songs":
            return v.intl.string(et.default.KgeEtx);
        case "top_artists":
            return v.intl.string(et.default.RYxWTS);
        case "top_listeners":
            return v.intl.string(et.default.KO73KB);
    }
}
function tC(e, t) {
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
    return (0, i.jsx)(td, { artist: e, itemProps: t });
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
            (0, i.jsx)(tI, {
                label: tT(tS.TOP_ARTISTS),
                items: d.ranked_artists,
                isCompact: r,
                getItemKey: tw,
                renderItem: tD,
            }),
            (0, i.jsx)(tA, {
                isCompact: r,
                headline:
                    ((t = d.summary),
                    null == (n = t?.distinct_songs) || n < 1
                        ? null
                        : v.intl.formatToPlainString(et.default.W8etVA, { count: n })),
                detail:
                    ((l = d.summary),
                    (a = l?.listener_count),
                    (s = l?.distinct_artists),
                    null == a || a < 1 || null == s || s < 1
                        ? null
                        : v.intl.format(et.default.yGqf0D, {
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
var tP = l(109487),
    tL = l(279543);
function tU(e) {
    let { isCompact: t } = e;
    return (0, i.jsxs)("div", {
        className: tL.qr,
        children: [
            (0, i.jsxs)("div", {
                className: tL.Os,
                children: [
                    (0, i.jsx)("span", {
                        className: tL.Kk,
                        children: (0, i.jsx)(P.RefreshIcon, {
                            size: "xxs",
                            color: r.A.colors.ICON_SUBTLE,
                            "aria-hidden": !0,
                        }),
                    }),
                    (0, i.jsx)(x.E, {
                        className: tL.Pf,
                        tag: "span",
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: v.intl.string(et.default["3/DOFo"]),
                    }),
                ],
            }),
            (0, i.jsxs)(tt.Anchor, {
                className: tL.al,
                href: tr.RQ.WEB_HOME,
                "aria-label": v.intl.string(et.default["jUr+wF"]),
                children: [
                    (0, i.jsx)("span", {
                        className: tL.Kk,
                        children: (0, i.jsx)(tP.L, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    }),
                    !t &&
                        (0, i.jsx)(x.E, {
                            className: tL.G2,
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
var tG = l(432017),
    tO = l(362704),
    tW = l(782134);
function tB(e) {
    var t;
    let { song: l, isSelected: n, onSelect: s, itemProps: r } = e,
        d = null != l.cover_art_hash ? tr.RQ.IMAGE(l.cover_art_hash) : null,
        c = a.useMemo(
            () => ({
                kind: "song",
                shareUrl: tr.RQ.WEB_OPEN(tr.M0.TRACK, l.track_external_id),
                title: l.track_title ?? l.track_external_id,
                subtitle: l.artist_name,
                imageUrl: d,
            }),
            [l.track_external_id, l.track_title, l.artist_name, d],
        );
    return (0, i.jsxs)("div", {
        className: ta.Nr,
        children: [
            (0, i.jsxs)("button", {
                ...r,
                type: "button",
                className: w()(ta.MT, { [ta.tY]: n }),
                "aria-pressed": n,
                onClick: () => s(l.track_external_id),
                children: [
                    (0, i.jsxs)(tl.R, {
                        src: d,
                        isCircular: !1,
                        FallbackIcon: tG.T,
                        children: [
                            n &&
                                (0, i.jsx)("span", {
                                    className: w()(ta.Lw, ta.Kp),
                                    "aria-hidden": !0,
                                    children: (0, i.jsx)(tO.Y, { size: "md", color: "currentColor" }),
                                }),
                            (0, i.jsxs)("span", {
                                className: w()(ta.Lw, ta.vY),
                                children: [
                                    (0, i.jsx)(tW.PlayIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                                    (0, i.jsx)(x.E, {
                                        tag: "span",
                                        variant: "text-xs/semibold",
                                        color: "none",
                                        children:
                                            ((t = l.plays),
                                            v.intl.formatToPlainString(et.default["7X+3f8"], { count: t })),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    null != l.track_title &&
                        (0, i.jsxs)("span", {
                            className: ta.Qq,
                            children: [
                                (0, i.jsx)(x.E, {
                                    className: ta.DD,
                                    tag: "span",
                                    variant: "text-sm/semibold",
                                    color: "text-default",
                                    lineClamp: 1,
                                    children: l.track_title,
                                }),
                                null != l.artist_name &&
                                    (0, i.jsx)(x.E, {
                                        className: ta.VA,
                                        tag: "span",
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        lineClamp: 1,
                                        children: l.artist_name,
                                    }),
                            ],
                        }),
                ],
            }),
            (0, i.jsx)(ts, { target: c, tabIndex: r.tabIndex }),
        ],
    });
}
var tz = l(196765),
    tF = l(770178);
let tH = { view: "top_songs", isCompact: !1, canShowEmbed: !1, selectedTrackId: null },
    tq = (0, tz.v)(() => ({ byWidgetId: {} }));
function tK(e, t) {
    tq.setState((l) => {
        let n = l.byWidgetId[e] ?? tH;
        return { byWidgetId: { ...l.byWidgetId, [e]: { ...n, ...t } } };
    });
}
function tY(e) {
    return tq((t) => t.byWidgetId[e]?.view ?? tH.view);
}
function t$(e) {
    return tq((t) => t.byWidgetId[e]?.isCompact ?? tH.isCompact);
}
function tQ(e) {
    return tq((t) => t.byWidgetId[e]?.selectedTrackId ?? tH.selectedTrackId);
}
function tV(e, t) {
    (tq.getState().byWidgetId[e] ?? tH).view !== t && tK(e, { view: t, selectedTrackId: null });
}
function tX(e) {
    return e.track_external_id;
}
function tZ(e) {
    var t;
    let l,
        { guildId: n, widgetId: s, isCompact: r, data: d } = e,
        c = tQ(s),
        o = tq((e) => e.byWidgetId[s]?.canShowEmbed ?? tH.canShowEmbed),
        u = a.useCallback(
            (e) => {
                let t;
                return (
                    (t = tq.getState().byWidgetId[s]?.selectedTrackId ?? null),
                    void tK(s, { selectedTrackId: t === e ? null : e })
                );
            },
            [s],
        ),
        m = a.useCallback(
            (e, t) => (0, i.jsx)(tB, { song: e, isSelected: e.track_external_id === c, onSelect: u, itemProps: t }),
            [c, u],
        );
    if (0 === d.ranked_songs.length) return null;
    let x = d.ranked_songs.find((e) => e.track_external_id === c) ?? null,
        h = tj(d.summary);
    return (0, i.jsxs)("div", {
        className: tR.U,
        children: [
            (0, i.jsx)(tI, {
                label: tT(tS.TOP_SONGS),
                items: d.ranked_songs,
                isCompact: r,
                getItemKey: tX,
                renderItem: m,
            }),
            null != x
                ? (0, i.jsx)(tE, { guildId: n, isCompact: r, canShowEmbed: o, song: x })
                : (0, i.jsx)(tA, {
                      isCompact: r,
                      headline: (function (e) {
                          let t = e?.listening_time_ms;
                          if (null == t) return null;
                          let l = Math.round(t / Q.A.Millis.MINUTE);
                          return l < 1 ? null : v.intl.formatToPlainString(et.default["+5b01q"], { minutes: l });
                      })(d.summary),
                      detail:
                          ((t = d.summary),
                          null == (l = t?.listener_count) || l < 1
                              ? null
                              : v.intl.format(et.default.AzIhRB, { count: l, trend: tg(h), countHook: th })),
                      trend: h,
                  }),
        ],
    });
}
var tJ = l(756936);
function t0(e) {
    let { view: t, data: l } = e;
    return (0, i.jsxs)("div", {
        className: tJ.rv,
        children: [
            (0, i.jsx)(x.E, { variant: "text-sm/semibold", color: "text-default", children: tT(t) }),
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
                    { className: tJ.tH, variant: "text-sm/normal", color: "text-muted", children: e },
                    `${e}-${t}`,
                ),
            ),
        ],
    });
}
var t1 = l(597601),
    t2 = l(871107);
function t3(e) {
    let { view: t } = e,
        l = r.A.colors.ICON_DEFAULT;
    switch (t) {
        case tS.TOP_ARTISTS:
            return (0, i.jsx)(te.MicrophoneIcon, { size: "xs", color: l, "aria-hidden": !0 });
        case tS.TOP_LISTENERS:
            return (0, i.jsx)(t1.L, { size: "xs", color: l, "aria-hidden": !0 });
        case tS.TOP_SONGS:
            return (0, i.jsx)(tG.T, { size: "xs", color: l, "aria-hidden": !0 });
    }
}
function t7(e) {
    let { widgetId: t, title: l } = e,
        n = t$(t),
        a = tY(t);
    if (!n)
        return (0, i.jsxs)("div", {
            className: t2.$,
            children: [
                (0, i.jsx)("span", {
                    className: t2.K,
                    children: (0, i.jsx)(tG.T, { size: "xs", color: r.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
                }),
                (0, i.jsx)(m.q, { children: l }),
            ],
        });
    let s = ty.map((e) => ({ id: e, label: tT(e), icon: (0, i.jsx)(t3, { view: e }) }));
    return (0, i.jsx)(k, {
        navId: "popular-music-view",
        options: s,
        selectedId: a,
        menuLabel: v.intl.string(et.default.hFYyGU),
        triggerLabel: v.intl.formatToPlainString(et.default["/sw0JL"], { widgetName: l, viewName: tT(a) }),
        onSelect: (e) => tV(t, e),
    });
}
var t4 = l(890497),
    t8 = l(734057),
    t6 = l(317525),
    t5 = l(576705),
    t9 = l(935208),
    le = l(44167);
l(321073);
var lt = l(485845),
    ll = l(136722),
    ln = l(435183),
    li = l(155718),
    la = l(795816),
    ls = l(933958),
    lr = l(574152),
    ld = l(627363),
    lc = l(712440),
    lo = l(733110),
    lu = l(488926),
    lm = l(818023);
async function lx(e) {
    null == ej.A.getApplication(lm.NW) && (await (0, ld.TA)(lm.NW));
    let t = ls.Ay.getEmbeddedActivitiesForChannel(e).every((e) => e.applicationId !== lm.NW);
    return await (0, la.su)({
        channelId: e,
        applicationId: lm.NW,
        isStart: t,
        embeddedActivitiesManager: (0, lr.A)(),
        renderInFramePool: !0,
    });
}
async function lh(e) {
    let { channel: t, selectedRoleIds: l } = e,
        n = [];
    if (l.length > 0)
        for (let e of (n.push({ id: t.guild_id, type: li.r2.ROLE, allow: lu.x3, deny: eG.xBc.USE_EMBEDDED_ACTIVITIES }),
        l))
            n.push({ id: e, type: li.r2.ROLE, allow: eG.xBc.USE_EMBEDDED_ACTIVITIES, deny: lu.x3 });
    let i = await (0, ln.RT)(t.id, { permissionOverwrites: n });
    if (!i.ok) throw i;
}
let lf = [];
var lg = l(344351),
    lj = l(256693),
    lp = l(812901),
    lv = l(317608),
    l_ = l(953538);
let lA = {
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
                p = (0, D.bG)([e3.A], () => e3.A.getGuildId()),
                _ = void 0 !== h ? h : null != r.image_hash && null != p ? e6(p, t.id, r.image_hash) : null;
            return (0, i.jsxs)(X.B, {
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
                    (0, i.jsx)(eQ.D, {
                        label: v.intl.string(v.t.X4IxWL),
                        children: (0, i.jsxs)(X.B, {
                            gap: 16,
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            className: e5.B,
                            children: [
                                (0, i.jsxs)(X.B, {
                                    gap: 8,
                                    direction: "horizontal",
                                    children: [
                                        (0, i.jsx)(e2.A, {
                                            variant: "secondary",
                                            text: v.intl.string(v.t["MsUY/S"]),
                                            onChange: function (e) {
                                                (j(null), f(e));
                                            },
                                            maxFileSizeBytes: 0xa00000,
                                            onFileSizeError: () => (0, e1.A)(0xa00000),
                                        }),
                                        null != _ &&
                                            (0, i.jsx)(c.m, {
                                                text: v.intl.string(v.t.N86XcP),
                                                ariaHidden: !0,
                                                children: (0, i.jsx)(o.K, {
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
                                null != _ && (0, i.jsx)("img", { className: e5.V, src: _, alt: "" }),
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
                            children: (0, i.jsx)(e0.w, { type: "critical", children: g }),
                        }),
                    (0, i.jsxs)(eX.e, {
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
                ? (0, i.jsx)(A, {})
                : "error" === t.status
                  ? (0, i.jsx)(E, {})
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
            return t?.status !== "success" || J(t.data) ? null : (0, i.jsx)(eK, { data: t.data });
        },
        HeaderActions: function (e) {
            let { hydration: t, guildId: l } = e,
                n = t?.status === "success" ? t.data : void 0;
            return null != n && J(n)
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
                            tK(t, { isCompact: l < 480, canShowEmbed: l >= 720 });
                        },
                        [t],
                    )),
                    (0, tF.g)(n, s, [t], { fireOnMount: !0 }),
                    a.useEffect(
                        () => () => {
                            tq.setState((e) => {
                                if (null == e.byWidgetId[t]) return e;
                                let l = { ...e.byWidgetId };
                                return (delete l[t], { byWidgetId: l });
                            });
                        },
                        [t],
                    ),
                    n),
                x = t$(c.id),
                h = tY(c.id),
                f = tQ(c.id),
                g = !x && "view" === u,
                j =
                    o?.status === "success"
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
                className: tJ.rf,
                ref: m,
                children: [
                    null != j && (0, i.jsx)("img", { className: tJ.G, src: j, alt: "", "aria-hidden": !0 }),
                    (0, i.jsx)("div", {
                        className: tJ.Qs,
                        children: (0, i.jsx)("div", {
                            id: tk(c.id),
                            className: tJ.nd,
                            role: g ? "tabpanel" : "group",
                            tabIndex: 0,
                            "aria-label": g ? void 0 : tT(h),
                            "aria-labelledby": g ? tC(c.id, h) : void 0,
                            children: (function () {
                                if (null == o || "idle" === o.status || "loading" === o.status)
                                    return (0, i.jsx)(A, {});
                                if ("error" === o.status) return (0, i.jsx)(E, {});
                                switch (h) {
                                    case tS.TOP_SONGS:
                                        return (0, i.jsx)(tZ, {
                                            guildId: d,
                                            widgetId: c.id,
                                            isCompact: x,
                                            data: o.data,
                                        });
                                    case tS.TOP_ARTISTS:
                                        return (0, i.jsx)(tM, { isCompact: x, data: o.data });
                                    case tS.TOP_LISTENERS:
                                        return (0, i.jsx)(t0, { view: h, data: o.data });
                                }
                            })(),
                        }),
                    }),
                    (0, i.jsx)(tU, { isCompact: x }),
                ],
            });
        },
        Title: function (e) {
            let { widget: t, guildSpaceMode: l } = e,
                n = t.default_title ?? v.intl.string(et.default["5xxUI2"]);
            return "edit" === l ? (0, i.jsx)(m.q, { children: n }) : (0, i.jsx)(t7, { widgetId: t.id, title: n });
        },
        ViewHeaderTrailing: function (e) {
            let { widget: t, title: l } = e,
                n = t$(t.id),
                a = tY(t.id);
            return n
                ? null
                : (0, i.jsx)(g, {
                      label: l,
                      tabs: ty.map((e) => ({ id: e, label: tT(e) })),
                      selectedId: a,
                      panelId: tk(t.id),
                      getTabId: (e) => tC(t.id, e),
                      onSelect: (e) => tV(t.id, e),
                  });
        },
    },
    [s.a.WHITEBOARD]: {
        View: function (e) {
            let t,
                l,
                n = (0, le.n)(),
                s = (0, D.bG)(
                    [t8.A, t5.A],
                    () => {
                        let e = null != n ? t8.A.getChannel(n) : void 0;
                        return null != e && t5.A.can(eG.xBc.USE_EMBEDDED_ACTIVITIES, e);
                    },
                    [n],
                ),
                r = (0, D.bG)(
                    [ls.Ay],
                    () => {
                        let e = ls.Ay.getCurrentEmbeddedActivity();
                        return null == e ||
                            e.applicationId !== lm.NW ||
                            e.location.kind !== lg.T.GUILD_CHANNEL ||
                            e.location.channel_id !== n
                            ? null
                            : e;
                    },
                    [n],
                ),
                d = (0, D.bG)([ls.Ay], () => ls.Ay.isLaunchingActivity(), []),
                { authResolved: c, isAuthorized: o } =
                    ((t = (0, D.bG)(
                        [lo.default],
                        () => lo.default.getFetchStateForApplication(lm.NW) === lo.FetchState.FETCHED,
                        [],
                    )),
                    (l = (0, D.bG)(
                        [lo.default, ej.A],
                        () => {
                            let e = lo.default.getNewestTokenForApplication(lm.NW);
                            if (null == e) return !1;
                            let t = ej.A.getApplication(lm.NW),
                                l = t?.integrationTypesConfig?.[lt.b.USER_INSTALL]?.oauth2InstallParams?.scopes;
                            if (null == l) return !0;
                            let n = new Set(e.scopes);
                            return l.every((e) => n.has(e));
                        },
                        [],
                    )),
                    a.useEffect(() => {
                        (lo.default.getFetchStateForApplication(lm.NW) === lo.FetchState.NOT_FETCHED &&
                            lc.A.fetch([lm.NW]),
                            null == ej.A.getApplication(lm.NW) && (0, ld.TA)(lm.NW));
                    }, []),
                    { authResolved: t, isAuthorized: l }),
                u = a.useRef(!1);
            a.useEffect(() => {
                null == r && null != n && s && c && o && !u.current && ((u.current = !0), lx(n));
            }, [s, n, r, c, o]);
            let m = a.useCallback(() => {
                    null != n && ((u.current = !0), lx(n));
                }, [n]),
                h = null != n && c && !o;
            return s
                ? (0, i.jsxs)("div", {
                      className: l_.kL,
                      children: [
                          null != r &&
                              (0, i.jsx)(lv.A, {
                                  frameId: (0, lj.Ri)(r),
                                  level: lp.A.WithinAppContent,
                                  className: l_.t$,
                              }),
                          null == r &&
                              h &&
                              (0, i.jsx)("div", {
                                  className: l_.P5,
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
                      className: l_.kL,
                      children: (0, i.jsx)("div", {
                          className: l_.m0,
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
                l = (0, D.bG)([e3.A], () => e3.A.getGuildId()),
                n = t9.default.castGuildIdAsEveryoneGuildRoleId(l),
                s = (0, le.n)(),
                r = (0, D.bG)([t8.A], () => (null != s ? t8.A.getChannel(s) : void 0), [s]),
                d = (0, D.bG)([t5.A], () => null != r && t5.A.can(eG.xBc.MANAGE_ROLES, r), [r]),
                c = (0, D.bG)([t6.A], () => (null == l ? lf : t6.A.getSortedRoles(l).filter((e) => e.id !== n)), [
                    l,
                    n,
                ]),
                o = a.useMemo(() => {
                    let e;
                    return null != r
                        ? null != (e = r.permissionOverwrites[r.guild_id]) &&
                          ll.zy(e.deny, eG.xBc.USE_EMBEDDED_ACTIVITIES)
                            ? c
                                  .filter((e) => {
                                      let t = r.permissionOverwrites[e.id];
                                      return null != t && ll.zy(t.allow, eG.xBc.USE_EMBEDDED_ACTIVITIES);
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
                        (await lh({ channel: r, selectedRoleIds: j }), t());
                    } catch {
                        (h(!1), g(!0));
                    }
                }
            }
            return null == r
                ? null
                : (0, i.jsxs)(X.B, {
                      gap: 16,
                      children: [
                          (0, i.jsx)(t4.Z, {
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
                          (0, i.jsxs)(eX.e, {
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
