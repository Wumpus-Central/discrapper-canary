l.d(t, { m: () => lP });
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
function I() {
    return (0, i.jsx)("div", {
        className: _.w,
        children: (0, i.jsx)(j.y, { type: j.y.Type.SPINNING_CIRCLE, "aria-label": v.intl.string(v.t.ZTNur7) }),
    });
}
function A() {
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
    G = l(97808),
    L = l(778712),
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
    Q = l(927813),
    V = l(562153);
function X() {
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
    J = l(625903),
    ee = l(780964),
    et = l(766075),
    el = l(251812);
function en(e) {
    return e.entries.length < 3;
}
function ei(e) {
    return (0, el.K)(en(e) ? void 0 : e.stat).name;
}
var ea = l(104129),
    es = l(823353);
function er(e) {
    let { guildId: t } = e,
        l = H.tz.useSetting(),
        n = H.JG.useSetting().includes(t),
        a = !l || n;
    return (0, i.jsxs)(Z.B, {
        className: es.w,
        align: "center",
        justify: "center",
        gap: 16,
        padding: { top: 24, right: 16, bottom: 24, left: 16 },
        children: [
            (0, i.jsxs)(Z.B, {
                align: "center",
                gap: 6,
                children: [
                    (0, i.jsx)(S.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: v.intl.string(ea.default.ULK65a),
                    }),
                    (0, i.jsx)(x.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: v.intl.format(a ? ea.default.ueza5l : ea.default["81PK67"], { memberCount: 3 }),
                    }),
                ],
            }),
            a &&
                (0, i.jsx)(W.$, {
                    variant: "secondary",
                    size: "sm",
                    icon: J.SettingsIcon,
                    text: v.intl.string(v.t["3D5yo/"]),
                    onClick: () =>
                        (0, et.openUserSettings)(
                            l ? ee.X.ACTIVITY_PRIVACY_PER_GUILD_CATEGORY : ee.X.ACTIVITY_PRIVACY_SETTING,
                        ),
                }),
        ],
    });
}
var ed = l(939249),
    ec = l(342296),
    eo = l(518782);
function eu(e) {
    let t = Math.floor(Math.max(e, 0) / Q.A.Seconds.MINUTE);
    return v.intl.formatToPlainString(ea.default["6Y8H0A"], {
        hours: Math.floor(t / Q.A.Minutes.HOUR),
        minutes: t % Q.A.Minutes.HOUR,
    });
}
function em(e, t) {
    switch (t) {
        case eo.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return {
                primary: v.intl.formatToPlainString(v.t["k2UNz+"], { days: e.value }),
                secondary: eu(e.time_played_seconds),
            };
        case eo.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return {
                primary: v.intl.formatToPlainString(ea.default.rgpc8E, { count: e.value }),
                secondary: eu(e.time_played_seconds),
            };
        case eo.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            let l, n, i;
            return {
                primary:
                    ((n = Math.floor((l = Math.floor(Math.max(e.value, 0) / Q.A.Millis.MINUTE)) / Q.A.Minutes.HOUR)),
                    (i = l % Q.A.Minutes.HOUR),
                    0 === n
                        ? v.intl.formatToPlainString(ea.default.bgQf2H, { minutes: i })
                        : 0 === i
                          ? v.intl.formatToPlainString(ea.default["D/HToK"], { hours: n })
                          : v.intl.formatToPlainString(ea.default.fvtrHn, { hours: n, minutes: i })),
            };
        default:
            return { primary: "\u2014" };
    }
}
var ex = l(81466),
    eh = l(406810),
    ef = l(687966),
    eg = l(109112),
    ej = l(683063),
    ep = l(573435),
    ev = l(402860),
    e_ = l(396583),
    eI = l(587895),
    eA = l(429913),
    eN = l(280450);
function eE(e, t) {
    return { id: e, name: v.intl.string(ea.default.rhDbuQ), iconUrl: void 0, isLoading: t };
}
function eb(e, t) {
    return e.get(t) ?? eE(t, !1);
}
function eS(e, t) {
    return t.map((t) => eb(e, t));
}
function ey(e, t) {
    let l = t.user_id,
        n = (0, w.bG)([K.default], () => K.default.getUser(l), [l]),
        i = (0, w.bG)([q.Ay], () => q.Ay.getMember(e, l), [e, l]),
        a = (0, F.gn)(e, l, i?.colorStrings ?? null),
        s = V.Ay.useName(e, void 0, n),
        r = (0, w.bG)([eN.default], () => eN.default.getId()) === l,
        d = null != n ? s : t.name;
    return {
        user: n,
        member: i,
        roleColorStrings: a,
        baseName: d,
        displayName: r ? v.intl.formatToPlainString(ea.default.subXXA, { name: d }) : d,
    };
}
var eC = l(518477),
    eT = l(870087);
function eR(e) {
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
        u = ey(t, l),
        m = l.application_ids[0],
        x = null != m ? eb(s, m) : void 0,
        h = l.user_id,
        f = a.useCallback(() => {
            (0, ev.openUserProfileModal)({
                userId: h,
                guildId: t,
                tabSection: eC.RP.ACTIVITY,
                scrollTarget: eC.bk.RECENT_ACTIVITY,
            });
        }, [h, t]);
    return (0, i.jsxs)("div", {
        ref: o,
        "aria-hidden": c,
        inert: c,
        className: D()(eT.nM, { [eT.Bh]: r && !c, [eT.lR]: d }),
        children: [
            (0, i.jsx)(ek, { guildId: t, entry: l, identity: u, lastPlayedGame: x }),
            (0, i.jsx)(eM, { entry: l, stat: n, name: u.baseName, onClick: f }),
            (0, i.jsx)(eL, {
                name: u.baseName,
                applicationIds: l.application_ids,
                applicationCount: l.application_count,
                games: s,
                onClick: f,
            }),
        ],
    });
}
function ek(e) {
    let { guildId: t, entry: l, identity: n, lastPlayedGame: s } = e,
        r = a.useRef(null),
        d = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(eD, { rank: l.rank }),
                (0, i.jsx)(G.eu, {
                    size: L._3.SIZE_32,
                    src: n.user?.getAvatarURL(t, (0, L.FT)(L._3.SIZE_32)) ?? void 0,
                    className: eT.my,
                    "aria-hidden": !0,
                }),
                (0, i.jsxs)("div", {
                    className: eT.Dc,
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
                                children: v.intl.formatToPlainString(ea.default.YuNVPY, { gameName: s.name }),
                            }),
                    ],
                }),
            ],
        });
    return null == n.user
        ? (0, i.jsx)("div", { className: eT.D_, children: d })
        : (0, i.jsx)(ec.A, {
              targetElementRef: r,
              user: n.user,
              guildId: t,
              children: (e) => (0, i.jsx)(ed.D, { ...e, innerRef: r, className: D()(eT.D_, eT.FB), children: d }),
          });
}
function eD(e) {
    let { rank: t } = e,
        l = v.intl.formatToPlainString(ea.default.I4JiAQ, { rank: t });
    switch (t) {
        case 1:
            return (0, i.jsx)("div", {
                className: eT.Tm,
                "aria-label": l,
                children: (0, i.jsx)("div", { className: eT.Xe }),
            });
        case 2:
            return (0, i.jsx)("div", {
                className: eT.Tm,
                "aria-label": l,
                children: (0, i.jsx)("div", { className: eT.XQ }),
            });
        case 3:
            return (0, i.jsx)("div", {
                className: eT.Tm,
                "aria-label": l,
                children: (0, i.jsx)("div", { className: eT.c9 }),
            });
        default:
            return (0, i.jsxs)("div", {
                className: eT.mH,
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
function ew(e) {
    let { stat: t } = e;
    switch (t) {
        case eo.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return (0, i.jsx)(ex.CalendarIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case eo.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            return (0, i.jsx)(eh.ClockIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case eo.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return (0, i.jsx)(ef.GameControllerIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        default:
            return null;
    }
}
function eM(e) {
    let { entry: t, stat: l, name: n, onClick: a } = e,
        { primary: s, secondary: r } = em(t, l);
    return (0, i.jsxs)(ed.D, {
        className: eT.TH,
        "aria-label": v.intl.formatToPlainString(ea.default.o6mBdl, { name: n }),
        onClick: a,
        children: [
            (0, i.jsxs)("div", {
                className: eT.bf,
                children: [
                    (0, i.jsx)(ew, { stat: l }),
                    (0, i.jsx)(x.E, { variant: "text-sm/medium", color: "text-subtle", children: s }),
                ],
            }),
            null != r && (0, i.jsx)(x.E, { variant: "text-xs/medium", color: "text-muted", children: r }),
        ],
    });
}
function eU(e) {
    let { game: t, notched: l } = e;
    return (0, i.jsx)("span", {
        className: eT.rO,
        "aria-hidden": !0,
        children: (0, i.jsx)(ep.Ay, {
            mask: l ? ep.l8[24] : ep.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null != t.iconUrl
                    ? (0, i.jsx)("img", { className: eT.Gt, src: t.iconUrl, alt: "", "aria-hidden": !0 })
                    : (0, i.jsx)("span", {
                          className: eT.ct,
                          "aria-hidden": !0,
                          children: !t.isLoading && (0, i.jsx)(eg._, { size: "xxs", color: r.A.colors.ICON_SUBTLE }),
                      }),
        }),
    });
}
function eP(e) {
    let { played: t, totalCount: l } = e,
        n = t.slice(0, 2),
        a = l - n.length;
    return (0, i.jsxs)("div", {
        className: eT.Nw,
        children: [
            n.map((e, t) => (0, i.jsx)(eU, { game: e, notched: a > 0 || t !== n.length - 1 }, `${e.id}-${t}`)),
            a > 0
                ? (0, i.jsx)("span", {
                      className: eT.rO,
                      children: (0, i.jsx)(ep.Ay, {
                          mask: ep.Ay.Masks.SQUIRCLE,
                          width: 24,
                          height: 24,
                          children: (0, i.jsx)("div", {
                              className: eT.p0,
                              children: (0, i.jsx)(x.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-subtle",
                                  children: v.intl.formatToPlainString(ea.default.JiMMEd, { count: a }),
                              }),
                          }),
                      }),
                  })
                : null,
        ],
    });
}
function eG(e) {
    let { played: t, totalCount: l, children: n } = e;
    return (0, i.jsx)(ej.u, {
        body:
            0 === t.length
                ? v.intl.string(ea.default["7CrlYb"])
                : 1 === t.length
                  ? v.intl.formatToPlainString(ea.default.dbNpK0, { firstGame: t[0].name })
                  : 2 === t.length && 2 === l
                    ? v.intl.formatToPlainString(ea.default.tqVg4M, { firstGame: t[0].name, secondGame: t[1].name })
                    : v.intl.formatToPlainString(ea.default.bxcrSz, {
                          firstGame: t[0].name,
                          secondGame: t[1].name,
                          otherCount: l - 2,
                      }),
        asset: t.length > 0 ? (0, i.jsx)(eP, { played: t, totalCount: t.length }) : void 0,
        assetSize: t.length > 1 ? 43 : 24,
        children: n,
    });
}
function eL(e) {
    let { name: t, applicationIds: l, applicationCount: n, games: a, onClick: s } = e,
        r = eS(a, l);
    return (0, i.jsx)("div", {
        className: eT.ag,
        children: (0, i.jsx)(eG, {
            played: r,
            totalCount: n,
            children: (0, i.jsx)(ed.D, {
                className: D()(eT.Nw, eT.Dz),
                "aria-label": v.intl.formatToPlainString(ea.default.o6mBdl, { name: t }),
                onClick: s,
                children: (0, i.jsx)(eP, { played: r, totalCount: n }),
            }),
        }),
    });
}
var eO = l(189043);
function eW(e) {
    let { guildId: t, entries: l, stat: n, games: a, currentUserEntry: s, currentUserPillarRef: r } = e,
        d = {
            1: { column: eO.HC, pillar: eO.P5 },
            2: { column: eO.th, pillar: eO.Vk },
            3: { column: eO.Ou, pillar: eO.el },
        };
    return (0, i.jsx)("div", {
        className: eO.pI,
        role: "list",
        "aria-label": v.intl.string(ea.default.wKXLfQ),
        children: l.map((e, l) =>
            (0, i.jsx)(
                eB,
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
        } = e,
        m = eS(c, l.application_ids),
        h = ey(t, l),
        { primary: f } = em(l, d),
        g = 1 === n ? L._3.SIZE_48 : L._3.SIZE_40,
        j = a.useRef(null),
        p = D()(eO.dR, { [eO.m$]: 1 === n, [eO.wd]: 2 === n, [eO.p0]: 3 === n }),
        v = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: eO.R3,
                    children: [
                        (0, i.jsx)(G.eu, {
                            size: g,
                            src: h.user?.getAvatarURL(t, (0, L.FT)(g)) ?? void 0,
                            "aria-hidden": !0,
                        }),
                        (0, i.jsx)("div", { className: p }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: D()(eO.DX, r),
                    children: [
                        (0, i.jsx)(S.D, {
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            lineClamp: 1,
                            className: eO.IY,
                            children: (0, i.jsx)(O.g, {
                                name: h.displayName,
                                colorString: h.member?.colorString ?? null,
                                colorStrings: h.roleColorStrings,
                            }),
                        }),
                        (0, i.jsx)(eG, {
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
                ? (0, i.jsx)(ec.A, {
                      targetElementRef: j,
                      user: h.user,
                      guildId: t,
                      children: (e) => (0, i.jsx)(ed.D, { ...e, className: eO.fs, innerRef: j, children: v }),
                  })
                : (0, i.jsx)("div", { className: eO.fs, children: v }),
    });
}
var ez = l(652215),
    eF = l(219047);
function eH(e) {
    let t,
        l,
        n,
        { guildId: s, data: r, inModal: d = !1 } = e,
        { stat: c, entries: o, computed_at: u, week_start_ts: m } = r,
        x = null != u && new Date(u).getTime() - m * Q.A.Millis.SECOND >= Q.A.Millis.WEEK,
        h = (0, w.bG)([K.default], () => K.default.getCurrentUser()?.id),
        f = a.useMemo(() => o.find((e) => e.user_id === h), [o, h]),
        g = a.useMemo(() => {
            let e = o.slice(0, 20);
            return null == f || e.includes(f) ? e : [...e, f];
        }, [o, f]),
        j = a.useMemo(() => Array.from(new Set(g.map((e) => e.user_id))), [g]);
    (0, z.k6)(s, j);
    let p =
            ((t = a.useMemo(() => Array.from(new Set(g.flatMap((e) => e.application_ids))), [g])),
            (l = (0, eA.A)(t)),
            (n = (0, w.yK)([eI.A], () => t.map((e) => eI.A.didFetchingApplicationFail(e)))),
            a.useMemo(() => {
                let e = new Map();
                return (
                    t.forEach((t, i) => {
                        let a = l[i];
                        e.set(
                            t,
                            null != a
                                ? { id: t, name: a.name, iconUrl: a.getIconURL(64) ?? void 0, isLoading: !1 }
                                : eE(t, !n[i]),
                        );
                    }),
                    e
                );
            }, [t, l, n])),
        { scrollerRef: v, userRowRef: _, floatingRowPosition: I } = X(),
        A = null != I,
        N = null == f && null != h,
        E = a.useCallback(
            (e) => {
                let t = e === f;
                return (0, i.jsx)(
                    eR,
                    {
                        guildId: s,
                        entry: e,
                        stat: c,
                        games: p,
                        isCurrentUser: t,
                        shouldDimForCurrentUser: t && A,
                        rowRef: t ? _ : void 0,
                    },
                    `${e.rank}-${e.user_id}`,
                );
            },
            [A, f, p, s, c, _],
        );
    if (en(r)) return (0, i.jsx)("div", { className: eF.Cm, children: (0, i.jsx)(er, { guildId: s }) });
    let b = x ? g.slice(3) : g,
        S = [g[0], g[1], g[2]];
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsxs)("div", {
                className: eF.SY,
                children: [
                    (0, i.jsxs)(M.d_, {
                        className: D()(eF.p_, { [eF.zE]: d, [eF.Ng]: N }),
                        ref: v,
                        children: [
                            x &&
                                (0, i.jsx)(eW, {
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
                    (null != f && null != I) || N
                        ? (0, i.jsx)("div", { className: D()(eF.Dz, "top" !== I || N ? eF.qV : eF.gN) })
                        : null,
                    null != f &&
                        null != I &&
                        (0, i.jsx)("div", {
                            className: D()(eF.z$, "top" === I ? eF.aG : eF.Ie),
                            children: (0, i.jsx)(eR, {
                                guildId: s,
                                entry: f,
                                stat: c,
                                games: p,
                                isCurrentUser: !0,
                                shouldDimForCurrentUser: !1,
                                isFloating: !0,
                            }),
                        }),
                    N && (0, i.jsx)(eq, { guildId: s }),
                ],
            }),
            (0, i.jsx)(eY, { computedAt: r.computed_at, inModal: d }),
        ],
    });
}
function eY(e) {
    let { computedAt: t, inModal: l } = e,
        n = (0, i.jsxs)("div", {
            className: eF.z8,
            children: [
                (0, i.jsx)(U.RefreshIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 }),
                (0, i.jsx)(x.E, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: v.intl.string(ea.default["/nma+a"]),
                }),
            ],
        });
    return null == t
        ? (0, i.jsx)("div", { className: eF.qr, children: n })
        : (0, i.jsx)("div", {
              className: D()(eF.qr, { [eF.zE]: l }),
              tabIndex: 0,
              children: (0, i.jsx)(c.m, {
                  text: v.intl.formatToPlainString(ea.default["1bt50t"], { timestamp: (0, $.mk)(new Date(t)) }),
                  position: "bottom",
                  children: n,
              }),
          });
}
function eq(e) {
    let { guildId: t } = e,
        n = H.tz.useSetting(),
        a = H.JG.useSetting(),
        s = (0, w.bG)([Y.A], () => Y.A.hasConsented(ez.YAq.PERSONALIZATION)),
        r = v.intl.string(ea.default.toxuHd),
        d = !1;
    ((!n || a.includes(t)) && ((r = v.intl.string(ea.default["8y885d"])), (d = !0)),
        s || ((r = v.intl.string(ea.default.mTARYx)), (d = !0)));
    let c = (0, w.bG)([K.default], () => K.default.getCurrentUser()),
        o = V.Ay.useName(t, void 0, c),
        u = (0, w.bG)([q.Ay], () => q.Ay.getMember(t, c?.id ?? "")),
        m = (0, F.gn)(t, c?.id, u?.colorStrings ?? null);
    return null == c
        ? null
        : (0, i.jsxs)("div", {
              className: eF.Xx,
              children: [
                  (0, i.jsxs)("div", {
                      className: eF.kd,
                      children: [
                          (0, i.jsxs)("div", {
                              className: eF.nk,
                              children: [
                                  (0, i.jsx)(P.A, { children: v.intl.string(ea.default["oHdW+u"]) }),
                                  (0, i.jsx)(x.E, {
                                      variant: "text-sm/semibold",
                                      color: "text-muted",
                                      "aria-hidden": !0,
                                      children: "?",
                                  }),
                              ],
                          }),
                          (0, i.jsx)(G.eu, {
                              size: L._3.SIZE_32,
                              src: c.getAvatarURL(t, (0, L.FT)(L._3.SIZE_32)) ?? void 0,
                              className: eF.SA,
                              "aria-hidden": !0,
                          }),
                          (0, i.jsxs)("div", {
                              className: eF.ko,
                              children: [
                                  (0, i.jsx)(S.D, {
                                      variant: "heading-sm/semibold",
                                      color: "text-default",
                                      lineClamp: 1,
                                      children: (0, i.jsx)(O.g, {
                                          name: o,
                                          colorString: u?.colorString ?? null,
                                          colorStrings: m,
                                      }),
                                  }),
                                  (0, i.jsx)("div", {
                                      className: eF.LF,
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
                          className: eF.rl,
                          children: (0, i.jsx)(W.$, {
                              variant: "secondary",
                              size: "sm",
                              text: v.intl.string(ea.default.fMbgeZ),
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
var eK = l(224640),
    e$ = l(20742),
    eQ = l(515746);
function eV(e) {
    let { data: t } = e,
        l = (0, el.K)(t.stat),
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
                (0, e_.A)(() => n(Date.now()), s ? null : r),
                a.useMemo(
                    () => ({
                        ended: s,
                        endDate: new Date(t),
                        badgeLabel: s
                            ? v.intl.string(ea.default["J8r/7L"])
                            : v.intl.formatToPlainString(ea.default["PuaR+2"], { days: Math.ceil(i / Q.A.Millis.DAY) }),
                    }),
                    [s, t, i],
                )
            );
        })(t.week_start_ts),
        d = H.PZ.useSetting(),
        c = 2 > (0, $.m_)(s, new Date()) ? (0, $.mk)(s, !1, d) : (0, $.i$)(s, "L LT", d),
        o = n
            ? v.intl.format(ea.default.kG9XmM, { endedAt: c, nextStatName: (0, el.K)(t.next_stat).name })
            : v.intl.format(ea.default["X+VLqi"], { statQuestion: l.question, endsAt: c });
    return (0, i.jsx)(ej.u, {
        title: l.name,
        body: o,
        position: "top",
        children: (0, i.jsx)("div", {
            className: eQ.q,
            tabIndex: 0,
            children: (0, i.jsx)(x.E, {
                variant: "text-xs/semibold",
                color: n ? "text-muted" : "text-brand",
                children: r,
            }),
        }),
    });
}
var eX = l(460614);
function eZ(e) {
    let { guildId: t, data: l, modalProps: n } = e;
    return (0, i.jsxs)(eK.d, {
        size: "lg",
        "aria-label": ei(l),
        ...n,
        children: [
            (0, i.jsxs)("div", {
                className: eX.wx,
                children: [
                    (0, i.jsxs)("div", {
                        className: eX.LD,
                        children: [
                            (0, i.jsx)(d.TrophyIcon, { size: "xs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 }),
                            (0, i.jsx)(S.D, { variant: "heading-sm/medium", className: eX.DD, children: ei(l) }),
                            (0, i.jsx)(eV, { data: l }),
                        ],
                    }),
                    (0, i.jsx)(e$.s_, {}),
                ],
            }),
            (0, i.jsx)("div", { className: eX.rf, children: (0, i.jsx)(eH, { guildId: t, data: l, inModal: !0 }) }),
        ],
    });
}
var eJ = l(452027),
    e0 = l(103557),
    e1 = l(825484),
    e2 = l(95477),
    e3 = l(241326),
    e4 = l(683071),
    e7 = l(2553),
    e6 = l(405810),
    e8 = l(967198),
    e5 = l(488428),
    e9 = l(776231);
let te = (0, l(676279).cy)();
function tt(e, t, l) {
    let n = l.startsWith("a_"),
        i = n ? (te ? "webp" : "gif") : te ? "webp" : "jpg",
        { CDN_HOST: a, API_ENDPOINT: s } = window.GLOBAL_ENV,
        r = ez.Rsh.GUILD_SPACE_IMAGE_TEXT_WIDGET_IMAGE(e, t, l, i),
        d = null != a ? `https://${a}${r}` : location.protocol + s + r,
        c = { size: (0, e9.kr)(500 * (0, e9.mZ)()) };
    return (
        "jpg" === i && (c.quality = "lossless"), "webp" === i && n && (c.animated = !0), (d += `?${e5.stringify(c)}`)
    );
}
var tl = l(868602),
    tn = l(445187),
    ti = l(831544),
    ta = l(28863),
    ts = l(148166),
    tr = l(427209),
    td = l(294454),
    tc = l(605810);
function to(e) {
    let { target: t, tabIndex: n } = e;
    return (0, i.jsx)(c.m, {
        text: v.intl.string(v.t.RDE0Sc),
        ariaHidden: !0,
        children: (0, i.jsx)("button", {
            type: "button",
            className: tc.ql,
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
                            l.e("919307"),
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
                    { stackingBehavior: "stack", modalKey: td.aU },
                );
            },
            children: (0, i.jsx)(tr.A, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
        }),
    });
}
var tu = l(272984);
function tm(e) {
    let { artist: t, itemProps: l } = e,
        n = null != t.artist_image_hash ? tu.RQ.IMAGE(t.artist_image_hash) : null,
        s = a.useMemo(
            () => ({
                kind: "artist",
                shareUrl: tu.RQ.WEB_OPEN(tu.M0.ARTIST, t.artist_external_id),
                title: t.artist_name ?? t.artist_external_id,
                subtitle: null,
                imageUrl: n,
            }),
            [t.artist_external_id, t.artist_name, n],
        ),
        r = (0, i.jsx)(ts.R, { src: n, isCircular: !0, FallbackIcon: ti.MicrophoneIcon });
    return null == t.artist_name
        ? (0, i.jsx)("div", { className: tc.Nr, children: (0, i.jsx)("div", { ...l, className: tc.MT, children: r }) })
        : (0, i.jsxs)("div", {
              className: tc.Nr,
              children: [
                  (0, i.jsxs)(ta.Anchor, {
                      ...l,
                      className: tc.MT,
                      href: s.shareUrl,
                      useDefaultUnderlineStyles: !1,
                      children: [
                          r,
                          (0, i.jsx)("span", {
                              className: tc.Qq,
                              children: (0, i.jsx)(x.E, {
                                  className: tc.DD,
                                  tag: "span",
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  lineClamp: 2,
                                  children: t.artist_name,
                              }),
                          }),
                      ],
                  }),
                  (0, i.jsx)(to, { target: s, tabIndex: l.tabIndex }),
              ],
          });
}
var tx = l(872351),
    th = l(708988),
    tf = l(104171),
    tg = l(628137);
let tj = "none",
    tp = (e, t) => (0, i.jsx)(x.E, { tag: "span", variant: "text-sm/semibold", color: "text-default", children: e }, t);
function tv(e) {
    return e;
}
function t_(e) {
    return e?.direction ?? tj;
}
function tI(e) {
    return v.intl.formatToPlainString(ea.default["7X+3f8"], { count: e });
}
function tA(e) {
    let t = e?.plays_change_percent;
    if (null == t) return null;
    let l = Math.round(Math.abs(t));
    return 0 === l
        ? null
        : { direction: t > 0 ? "up" : "down", label: v.intl.formatToPlainString(ea.default["h+LUpk"], { percent: l }) };
}
var tN = l(633099);
function tE(e) {
    let { trend: t } = e,
        l = "up" === t.direction ? tx.z : th.M;
    return (0, i.jsxs)("span", {
        className: D()(tN.GW, { [tN.$J]: "up" === t.direction, [tN.KW]: "down" === t.direction }),
        children: [
            (0, i.jsx)(l, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
            (0, i.jsx)(x.E, { tag: "span", variant: "text-sm/medium", color: "none", children: t.label }),
        ],
    });
}
function tb(e) {
    var t;
    let { guildId: l, song: n } = e,
        s = a.useMemo(() => (n.facepile_user_ids ?? []).slice(0, 3), [n.facepile_user_ids]);
    (0, z.k6)(l, s);
    let r = (0, w.yK)([K.default], () => s.map((e) => K.default.getUser(e)), [s]),
        d = a.useMemo(() => r.filter((e) => null != e), [r]);
    if (0 === d.length) return null;
    let c = n.unique_listeners - d.length;
    return (0, i.jsx)("span", {
        className: tN.WM,
        role: "group",
        "aria-label":
            ((t = n.unique_listeners),
            v.intl.formatToPlainString(ea.default.AzIhRB, { count: t, trend: tj, countHook: tv })),
        children: (0, i.jsx)(tf.Ay, {
            users: d,
            guildId: l,
            size: tf.DN.SIZE_24,
            max: d.length,
            count: n.unique_listeners,
            hideMoreUsers: c <= 0,
            renderMoreUsers: () =>
                (0, i.jsx)("span", {
                    className: tN.ju,
                    children: (0, i.jsx)(x.E, {
                        tag: "span",
                        variant: "text-xs/semibold",
                        color: "text-subtle",
                        children: v.intl.formatToPlainString(ea.default.bFIg0R, { count: c }),
                    }),
                }),
        }),
    });
}
function tS(e) {
    let { isCompact: t, headline: l, detail: n, trend: a } = e;
    return null == l && null == n && null == a
        ? null
        : (0, i.jsx)("div", {
              className: D()(tN.yp, { [tN.Fl]: t }),
              children: (0, i.jsxs)("div", {
                  className: tN.QD,
                  children: [
                      null != l && (0, i.jsx)(x.E, { variant: "text-md/semibold", color: "text-default", children: l }),
                      (0, i.jsxs)("div", {
                          className: tN._0,
                          children: [
                              null != n &&
                                  (0, i.jsx)(x.E, {
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
function ty(e) {
    var t;
    let { guildId: l, isCompact: n, canShowEmbed: a, song: s } = e,
        r = tA(s);
    return (0, i.jsxs)("div", {
        className: D()(tN.yp, { [tN.Fl]: n }),
        children: [
            a && (0, i.jsx)(tg.A, { className: tN.aF, resourceType: tu.M0.TRACK, resourceId: s.track_external_id }),
            (0, i.jsxs)("div", {
                className: tN.QD,
                children: [
                    (0, i.jsx)(tb, { guildId: l, song: s }),
                    (0, i.jsxs)("div", {
                        className: tN._0,
                        children: [
                            (0, i.jsx)(x.E, {
                                tag: "span",
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children:
                                    ((t = s.plays),
                                    v.intl.format(ea.default["7hHUIS"], { count: t, trend: t_(r), countHook: tp })),
                            }),
                            null != r && (0, i.jsx)(tE, { trend: r }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var tC = l(197935),
    tT = l(915734);
function tR(e) {
    let { label: t, items: l, isCompact: n, getItemKey: a, renderItem: s } = e;
    return (0, i.jsx)("div", {
        className: D()(tT.Dk, { [tT.yI]: n }),
        children: (0, i.jsx)(tC.A, {
            items: l,
            getItemKey: a,
            renderItem: s,
            gap: 8,
            edgeFade: 40,
            actionsClassName: tT.o1,
            "aria-label": t,
        }),
    });
}
var tk = (((n = {}).TOP_SONGS = "top_songs"), (n.TOP_ARTISTS = "top_artists"), (n.TOP_LISTENERS = "top_listeners"), n);
let tD = ["top_songs", "top_artists", "top_listeners"];
function tw(e) {
    switch (e) {
        case "top_songs":
            return v.intl.string(ea.default.KgeEtx);
        case "top_artists":
            return v.intl.string(ea.default.RYxWTS);
        case "top_listeners":
            return v.intl.string(ea.default.KO73KB);
    }
}
function tM(e, t) {
    return `popular-music-tab-${e}-${t}`;
}
function tU(e) {
    return `popular-music-panel-${e}`;
}
var tP = l(742452);
function tG(e) {
    return e.artist_external_id;
}
function tL(e, t) {
    return (0, i.jsx)(tm, { artist: e, itemProps: t });
}
function tO(e) {
    var t, l;
    let n,
        a,
        s,
        { isCompact: r, data: d } = e;
    if (0 === d.ranked_artists.length) return null;
    let c = tA(d.summary);
    return (0, i.jsxs)("div", {
        className: tP.U,
        children: [
            (0, i.jsx)(tR, {
                label: tw(tk.TOP_ARTISTS),
                items: d.ranked_artists,
                isCompact: r,
                getItemKey: tG,
                renderItem: tL,
            }),
            (0, i.jsx)(tS, {
                isCompact: r,
                headline:
                    ((t = d.summary),
                    null == (n = t?.distinct_songs) || n < 1
                        ? null
                        : v.intl.formatToPlainString(ea.default.W8etVA, { count: n })),
                detail:
                    ((l = d.summary),
                    (a = l?.listener_count),
                    (s = l?.distinct_artists),
                    null == a || a < 1 || null == s || s < 1
                        ? null
                        : v.intl.format(ea.default.yGqf0D, {
                              memberCount: a,
                              artistCount: s,
                              trend: t_(c),
                              memberCountHook: tp,
                              artistCountHook: tp,
                          })),
                trend: c,
            }),
        ],
    });
}
var tW = l(109487),
    tB = l(279543);
function tz(e) {
    let { isCompact: t } = e;
    return (0, i.jsxs)("div", {
        className: tB.qr,
        children: [
            (0, i.jsxs)("div", {
                className: tB.Os,
                children: [
                    (0, i.jsx)("span", {
                        className: tB.Kk,
                        children: (0, i.jsx)(U.RefreshIcon, {
                            size: "xxs",
                            color: r.A.colors.ICON_SUBTLE,
                            "aria-hidden": !0,
                        }),
                    }),
                    (0, i.jsx)(x.E, {
                        className: tB.Pf,
                        tag: "span",
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: v.intl.string(ea.default["3/DOFo"]),
                    }),
                ],
            }),
            (0, i.jsxs)(ta.Anchor, {
                className: tB.al,
                href: tu.RQ.WEB_HOME,
                "aria-label": v.intl.string(ea.default["jUr+wF"]),
                children: [
                    (0, i.jsx)("span", {
                        className: tB.Kk,
                        children: (0, i.jsx)(tW.L, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    }),
                    !t &&
                        (0, i.jsx)(x.E, {
                            className: tB.G2,
                            tag: "span",
                            variant: "text-xs/medium",
                            color: "none",
                            children: v.intl.string(ea.default.ZdPp2q),
                        }),
                ],
            }),
        ],
    });
}
var tF = l(65154),
    tH = l(329177),
    tY = l(242226);
function tq(e) {
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
            ((t = (0, w.bG)([K.default], () => K.default.getUser(d), [d])),
            (l = (0, w.bG)([q.Ay], () => q.Ay.getMember(s, d), [s, d])),
            (n = (0, F.gn)(s, d, l?.colorStrings ?? null)),
            (a = V.Ay.useName(s, void 0, t)),
            {
                user: t,
                colorString: l?.colorString ?? null,
                roleColorStrings: n,
                displayName: m ? v.intl.formatToPlainString(ea.default.subXXA, { name: a }) : a,
            }),
        { user: p } = j;
    return null == p
        ? null
        : (0, i.jsxs)("div", {
              ref: g,
              "aria-hidden": f,
              inert: f,
              className: D()(tY.nM, { [tY.Bh]: m && !f, [tY.lR]: h }),
              children: [
                  (0, i.jsx)(tK, { guildId: s, user: p, identity: j, rank: o, lastTrack: c?.last_track ?? null }),
                  null != c &&
                      (0, i.jsxs)("div", {
                          className: D()(tY.Mx, { [tY.dA]: u }),
                          children: [
                              (0, i.jsx)(tF.S, { size: "xxs", color: r.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                              (0, i.jsx)(x.E, {
                                  variant: "text-sm/medium",
                                  color: "text-strong",
                                  children: tI(c.plays),
                              }),
                          ],
                      }),
                  null != c &&
                      !u &&
                      (0, i.jsx)(tX, { artists: c.recent_artists ?? [], artistCount: c.artist_count ?? null }),
              ],
          });
}
function tK(e) {
    let { guildId: t, user: l, identity: n, rank: s, lastTrack: r } = e,
        d = a.useRef(null);
    return (0, i.jsx)(ec.A, {
        targetElementRef: d,
        user: l,
        guildId: t,
        children: (e) =>
            (0, i.jsxs)(ed.D, {
                ...e,
                innerRef: d,
                className: tY.D_,
                children: [
                    null != s &&
                        (0, i.jsx)(P.A, { children: v.intl.formatToPlainString(ea.default.I4JiAQ, { rank: s }) }),
                    (0, i.jsxs)("span", {
                        className: tY.R3,
                        children: [
                            (0, i.jsx)(G.eu, {
                                size: L._3.SIZE_32,
                                src: l.getAvatarURL(t, (0, L.FT)(L._3.SIZE_32)) ?? void 0,
                                "aria-hidden": !0,
                            }),
                            1 === s &&
                                (0, i.jsx)("span", {
                                    className: tY.ie,
                                    "aria-hidden": !0,
                                    children: (0, i.jsx)(tH.CrownIcon, { size: "xxs", color: "currentColor" }),
                                }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: tY.Dc,
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
                            (0, i.jsx)(tQ, { track: r }),
                        ],
                    }),
                ],
            }),
    });
}
function t$(e, t) {
    return (0, i.jsx)(x.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: e }, t);
}
function tQ(e) {
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
                ? v.intl.format(ea.default.QqaqBg, { trackTitle: l, artistName: n, highlightHook: t$ })
                : v.intl.format(ea.default.ZMJ8Mt, { trackTitle: l, highlightHook: t$ }),
    });
}
function tV(e) {
    let { artist: t, notched: l } = e,
        [n, s] = a.useState(!1),
        d = null != t.artist_image_hash ? tu.RQ.IMAGE(t.artist_image_hash) : null;
    return (0, i.jsx)("span", {
        className: tY.sG,
        children: (0, i.jsx)(ep.Ay, {
            mask: l ? ep.l8[24] : ep.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null == d || n
                    ? (0, i.jsx)("span", {
                          className: tY.Ql,
                          children: (0, i.jsx)(ti.MicrophoneIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE }),
                      })
                    : (0, i.jsx)("img", { className: tY.v2, src: d, alt: "", loading: "lazy", onError: () => s(!0) }),
        }),
    });
}
function tX(e) {
    let { artists: t, artistCount: l } = e,
        n = t.slice(0, 3),
        a = (l ?? t.length) - n.length;
    return (0, i.jsx)("div", {
        className: tY.Rh,
        "aria-hidden": !0,
        children:
            n.length > 0 &&
            (0, i.jsxs)("div", {
                className: tY.W$,
                children: [
                    n.map((e, t) =>
                        (0, i.jsx)(
                            tV,
                            { artist: e, notched: a > 0 || t !== n.length - 1 },
                            `${e.artist_external_id}-${e.artist_image_hash}`,
                        ),
                    ),
                    a > 0 &&
                        (0, i.jsx)("span", {
                            className: tY.sG,
                            children: (0, i.jsx)(ep.Ay, {
                                mask: ep.Ay.Masks.SQUIRCLE,
                                width: 24,
                                height: 24,
                                children: (0, i.jsx)("div", {
                                    className: tY.ag,
                                    children: (0, i.jsx)(x.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: v.intl.formatToPlainString(ea.default.bFIg0R, { count: a }),
                                    }),
                                }),
                            }),
                        }),
                ],
            }),
    });
}
var tZ = l(897130);
function tJ(e) {
    let { guildId: t, isCompact: l, data: n } = e,
        s = n.top_listeners,
        r = (0, w.bG)([K.default], () => K.default.getCurrentUser()?.id),
        d = s.findIndex((e) => e.user_id === r),
        c = -1 === d ? null : s[d],
        o = a.useMemo(() => s.map((e) => e.user_id), [s]);
    (0, z.k6)(t, o);
    let { scrollerRef: u, userRowRef: m, floatingRowPosition: x } = X(),
        h = null != x;
    return 0 === s.length
        ? null
        : (0, i.jsxs)("div", {
              className: tZ.SY,
              children: [
                  (0, i.jsxs)(M.d_, {
                      className: tZ.p_,
                      ref: u,
                      children: [
                          s.map((e, n) => {
                              let a = e.user_id === r;
                              return (0, i.jsx)(
                                  tq,
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
                              (0, i.jsx)(tq, {
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
                              (0, i.jsx)("div", { className: "top" === x ? tZ.gN : tZ.qV }),
                              (0, i.jsx)("div", {
                                  className: D()(tZ.z$, "top" === x ? tZ.aG : tZ.Ie),
                                  children: (0, i.jsx)(tq, {
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
var t0 = l(432017),
    t1 = l(362704),
    t2 = l(782134);
function t3(e) {
    let { song: t, isSelected: l, onSelect: n, itemProps: s } = e,
        r = null != t.cover_art_hash ? tu.RQ.IMAGE(t.cover_art_hash) : null,
        d = a.useMemo(
            () => ({
                kind: "song",
                shareUrl: tu.RQ.WEB_OPEN(tu.M0.TRACK, t.track_external_id),
                title: t.track_title ?? t.track_external_id,
                subtitle: t.artist_name,
                imageUrl: r,
            }),
            [t.track_external_id, t.track_title, t.artist_name, r],
        );
    return (0, i.jsxs)("div", {
        className: tc.Nr,
        children: [
            (0, i.jsxs)("button", {
                ...s,
                type: "button",
                className: D()(tc.MT, { [tc.tY]: l }),
                "aria-pressed": l,
                onClick: () => n(t.track_external_id),
                children: [
                    (0, i.jsxs)(ts.R, {
                        src: r,
                        isCircular: !1,
                        FallbackIcon: t0.T,
                        children: [
                            l &&
                                (0, i.jsx)("span", {
                                    className: D()(tc.Lw, tc.Kp),
                                    "aria-hidden": !0,
                                    children: (0, i.jsx)(t1.Y, { size: "md", color: "currentColor" }),
                                }),
                            (0, i.jsxs)("span", {
                                className: D()(tc.Lw, tc.vY),
                                children: [
                                    (0, i.jsx)(t2.PlayIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                                    (0, i.jsx)(x.E, {
                                        tag: "span",
                                        variant: "text-xs/semibold",
                                        color: "none",
                                        children: tI(t.plays),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    null != t.track_title &&
                        (0, i.jsxs)("span", {
                            className: tc.Qq,
                            children: [
                                (0, i.jsx)(x.E, {
                                    className: tc.DD,
                                    tag: "span",
                                    variant: "text-sm/semibold",
                                    color: "text-default",
                                    lineClamp: 1,
                                    children: t.track_title,
                                }),
                                null != t.artist_name &&
                                    (0, i.jsx)(x.E, {
                                        className: tc.VA,
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
            (0, i.jsx)(to, { target: d, tabIndex: s.tabIndex }),
        ],
    });
}
var t4 = l(196765),
    t7 = l(770178);
let t6 = { view: "top_songs", isCompact: !1, canShowEmbed: !1, selectedTrackId: null },
    t8 = (0, t4.v)(() => ({ byWidgetId: {} }));
function t5(e, t) {
    t8.setState((l) => {
        let n = l.byWidgetId[e] ?? t6;
        return { byWidgetId: { ...l.byWidgetId, [e]: { ...n, ...t } } };
    });
}
function t9(e) {
    return t8((t) => t.byWidgetId[e]?.view ?? t6.view);
}
function le(e) {
    return t8((t) => t.byWidgetId[e]?.isCompact ?? t6.isCompact);
}
function lt(e) {
    return t8((t) => t.byWidgetId[e]?.selectedTrackId ?? t6.selectedTrackId);
}
function ll(e, t) {
    (t8.getState().byWidgetId[e] ?? t6).view !== t && t5(e, { view: t, selectedTrackId: null });
}
function ln(e) {
    return e.track_external_id;
}
function li(e) {
    var t;
    let l,
        { guildId: n, widgetId: s, isCompact: r, data: d } = e,
        c = lt(s),
        o = t8((e) => e.byWidgetId[s]?.canShowEmbed ?? t6.canShowEmbed),
        u = a.useCallback(
            (e) => {
                let t;
                return (
                    (t = t8.getState().byWidgetId[s]?.selectedTrackId ?? null),
                    void t5(s, { selectedTrackId: t === e ? null : e })
                );
            },
            [s],
        ),
        m = a.useCallback(
            (e, t) => (0, i.jsx)(t3, { song: e, isSelected: e.track_external_id === c, onSelect: u, itemProps: t }),
            [c, u],
        );
    if (0 === d.ranked_songs.length) return null;
    let x = d.ranked_songs.find((e) => e.track_external_id === c) ?? null,
        h = tA(d.summary);
    return (0, i.jsxs)("div", {
        className: tP.U,
        children: [
            (0, i.jsx)(tR, {
                label: tw(tk.TOP_SONGS),
                items: d.ranked_songs,
                isCompact: r,
                getItemKey: ln,
                renderItem: m,
            }),
            null != x
                ? (0, i.jsx)(ty, { guildId: n, isCompact: r, canShowEmbed: o, song: x })
                : (0, i.jsx)(tS, {
                      isCompact: r,
                      headline: (function (e) {
                          let t = e?.listening_time_ms;
                          if (null == t) return null;
                          let l = Math.round(t / Q.A.Millis.MINUTE);
                          return l < 1 ? null : v.intl.formatToPlainString(ea.default["+5b01q"], { minutes: l });
                      })(d.summary),
                      detail:
                          ((t = d.summary),
                          null == (l = t?.listener_count) || l < 1
                              ? null
                              : v.intl.format(ea.default.AzIhRB, { count: l, trend: t_(h), countHook: tp })),
                      trend: h,
                  }),
        ],
    });
}
var la = l(597601),
    ls = l(871107);
function lr(e) {
    let { view: t } = e,
        l = r.A.colors.ICON_DEFAULT;
    switch (t) {
        case tk.TOP_ARTISTS:
            return (0, i.jsx)(ti.MicrophoneIcon, { size: "xs", color: l, "aria-hidden": !0 });
        case tk.TOP_LISTENERS:
            return (0, i.jsx)(la.L, { size: "xs", color: l, "aria-hidden": !0 });
        case tk.TOP_SONGS:
            return (0, i.jsx)(t0.T, { size: "xs", color: l, "aria-hidden": !0 });
    }
}
function ld(e) {
    let { widgetId: t, title: l } = e,
        n = le(t),
        a = t9(t);
    if (!n)
        return (0, i.jsxs)("div", {
            className: ls.$,
            children: [
                (0, i.jsx)("span", {
                    className: ls.K,
                    children: (0, i.jsx)(t0.T, { size: "xs", color: r.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
                }),
                (0, i.jsx)(m.q, { children: l }),
            ],
        });
    let s = tD.map((e) => ({ id: e, label: tw(e), icon: (0, i.jsx)(lr, { view: e }) }));
    return (0, i.jsx)(R, {
        navId: "popular-music-view",
        options: s,
        selectedId: a,
        menuLabel: v.intl.string(ea.default.hFYyGU),
        triggerLabel: v.intl.formatToPlainString(ea.default["/sw0JL"], { widgetName: l, viewName: tw(a) }),
        onSelect: (e) => ll(t, e),
    });
}
var lc = l(756936),
    lo = l(890497),
    lu = l(734057),
    lm = l(317525),
    lx = l(576705),
    lh = l(935208),
    lf = l(44167);
l(321073);
var lg = l(485845),
    lj = l(136722),
    lp = l(435183),
    lv = l(155718),
    l_ = l(795816),
    lI = l(933958),
    lA = l(574152),
    lN = l(627363),
    lE = l(712440),
    lb = l(733110),
    lS = l(488926),
    ly = l(818023);
async function lC(e) {
    null == eI.A.getApplication(ly.NW) && (await (0, lN.TA)(ly.NW));
    let t = lI.Ay.getEmbeddedActivitiesForChannel(e).every((e) => e.applicationId !== ly.NW);
    return await (0, l_.su)({
        channelId: e,
        applicationId: ly.NW,
        isStart: t,
        embeddedActivitiesManager: (0, lA.A)(),
        renderInFramePool: !0,
    });
}
async function lT(e) {
    let { channel: t, selectedRoleIds: l } = e,
        n = [];
    if (l.length > 0)
        for (let e of (n.push({ id: t.guild_id, type: lv.r2.ROLE, allow: lS.x3, deny: ez.xBc.USE_EMBEDDED_ACTIVITIES }),
        l))
            n.push({ id: e, type: lv.r2.ROLE, allow: ez.xBc.USE_EMBEDDED_ACTIVITIES, deny: lS.x3 });
    let i = await (0, lp.RT)(t.id, { permissionOverwrites: n });
    if (!i.ok) throw i;
}
let lR = [];
var lk = l(344351),
    lD = l(256693),
    lw = l(812901),
    lM = l(317608),
    lU = l(953538);
let lP = {
    [s.a.IMAGE_TEXT]: {
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
                        (0, i.jsx)(x.E, {
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
                r = t.config,
                [d, u] = a.useState(r.title ?? ""),
                [m, x] = a.useState(r.text ?? ""),
                [h, f] = a.useState(r.image),
                [g, j] = a.useState(null),
                p = (0, w.bG)([e8.A], () => e8.A.getGuildId()),
                _ = void 0 !== h ? h : null != r.image_hash && null != p ? tt(p, t.id, r.image_hash) : null;
            return (0, i.jsxs)(Z.B, {
                gap: 16,
                children: [
                    (0, i.jsx)(e2.k, {
                        label: v.intl.string(v.t.gnwWrx),
                        value: d,
                        onChange: function (e) {
                            (j(null), u(e));
                        },
                        maxLength: 100,
                        showCharacterCount: !0,
                    }),
                    (0, i.jsx)(eJ.D, {
                        label: v.intl.string(v.t.X4IxWL),
                        children: (0, i.jsxs)(Z.B, {
                            gap: 16,
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            className: tl.B,
                            children: [
                                (0, i.jsxs)(Z.B, {
                                    gap: 8,
                                    direction: "horizontal",
                                    children: [
                                        (0, i.jsx)(e6.A, {
                                            variant: "secondary",
                                            text: v.intl.string(v.t["MsUY/S"]),
                                            onChange: function (e) {
                                                (j(null), f(e));
                                            },
                                            maxFileSizeBytes: 0xa00000,
                                            onFileSizeError: () => (0, e7.A)(0xa00000),
                                        }),
                                        null != _ &&
                                            (0, i.jsx)(c.m, {
                                                text: v.intl.string(v.t.N86XcP),
                                                ariaHidden: !0,
                                                children: (0, i.jsx)(o.K, {
                                                    variant: "critical-secondary",
                                                    icon: e3.TrashIcon,
                                                    onClick: function () {
                                                        (j(null), f(null));
                                                    },
                                                    "aria-label": v.intl.string(v.t.N86XcP),
                                                }),
                                            }),
                                    ],
                                }),
                                null != _ && (0, i.jsx)("img", { className: tl.V, src: _, alt: "" }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(e0.f, {
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
                            children: (0, i.jsx)(e4.w, { type: "critical", children: g }),
                        }),
                    (0, i.jsxs)(e1.e, {
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
                                        0 === m.length && !e && (j(v.intl.string(ea.default.zleX9q)), 1))
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
                ? (0, i.jsx)(I, {})
                : "error" === t.status
                  ? (0, i.jsx)(A, {})
                  : (0, i.jsx)(eH, { guildId: l, data: t.data });
        },
        Title: function (e) {
            let { widget: t, hydration: l } = e;
            return l?.status !== "success"
                ? (0, i.jsx)(m.q, { children: t.default_title ?? "" })
                : (0, i.jsx)(m.q, { children: ei(l.data) });
        },
        TitleIcon: function () {
            return (0, i.jsx)(d.TrophyIcon, { size: "xs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        },
        HeaderAccessory: function (e) {
            let { hydration: t } = e;
            return t?.status !== "success" || en(t.data) ? null : (0, i.jsx)(eV, { data: t.data });
        },
        HeaderActions: function (e) {
            let { hydration: t, guildId: l } = e,
                n = t?.status === "success" ? t.data : void 0;
            return null != n && en(n)
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
                                          n = (e) => (0, i.jsx)(eZ, { guildId: t, data: l, modalProps: e });
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
                            t5(t, { isCompact: l < 480, canShowEmbed: l >= 720 });
                        },
                        [t],
                    )),
                    (0, t7.g)(n, s, [t], { fireOnMount: !0 }),
                    a.useEffect(
                        () => () => {
                            t8.setState((e) => {
                                if (null == e.byWidgetId[t]) return e;
                                let l = { ...e.byWidgetId };
                                return (delete l[t], { byWidgetId: l });
                            });
                        },
                        [t],
                    ),
                    n),
                x = le(c.id),
                h = t9(c.id),
                f = lt(c.id),
                g = !x && "view" === u,
                j =
                    o?.status === "success" && h !== tk.TOP_LISTENERS
                        ? ((l = o.data),
                          null ==
                          (r =
                              l.ranked_songs.find((e) => e.track_external_id === f && null != e.cover_art_hash)
                                  ?.cover_art_hash ??
                              l.ranked_songs.find((e) => null != e.cover_art_hash)?.cover_art_hash)
                              ? null
                              : tu.RQ.IMAGE(r))
                        : null;
            return (0, i.jsxs)("div", {
                className: lc.rf,
                ref: m,
                children: [
                    null != j && (0, i.jsx)("img", { className: lc.G, src: j, alt: "", "aria-hidden": !0 }),
                    (0, i.jsx)("div", {
                        className: lc.Qs,
                        children: (0, i.jsx)("div", {
                            id: tU(c.id),
                            className: lc.nd,
                            role: g ? "tabpanel" : "group",
                            tabIndex: 0,
                            "aria-label": g ? void 0 : tw(h),
                            "aria-labelledby": g ? tM(c.id, h) : void 0,
                            children: (function () {
                                if (null == o || "idle" === o.status || "loading" === o.status)
                                    return (0, i.jsx)(I, {});
                                if ("error" === o.status) return (0, i.jsx)(A, {});
                                switch (h) {
                                    case tk.TOP_SONGS:
                                        return (0, i.jsx)(li, {
                                            guildId: d,
                                            widgetId: c.id,
                                            isCompact: x,
                                            data: o.data,
                                        });
                                    case tk.TOP_ARTISTS:
                                        return (0, i.jsx)(tO, { isCompact: x, data: o.data });
                                    case tk.TOP_LISTENERS:
                                        return (0, i.jsx)(tJ, { guildId: d, isCompact: x, data: o.data });
                                }
                            })(),
                        }),
                    }),
                    (0, i.jsx)(tz, { isCompact: x }),
                ],
            });
        },
        Title: function (e) {
            let { widget: t, guildSpaceMode: l } = e,
                n = t.default_title ?? v.intl.string(ea.default["5xxUI2"]);
            return "edit" === l ? (0, i.jsx)(m.q, { children: n }) : (0, i.jsx)(ld, { widgetId: t.id, title: n });
        },
        ViewHeaderTrailing: function (e) {
            let { widget: t, title: l } = e,
                n = le(t.id),
                a = t9(t.id);
            return n
                ? null
                : (0, i.jsx)(g, {
                      label: l,
                      tabs: tD.map((e) => ({ id: e, label: tw(e) })),
                      selectedId: a,
                      panelId: tU(t.id),
                      getTabId: (e) => tM(t.id, e),
                      onSelect: (e) => ll(t.id, e),
                  });
        },
    },
    [s.a.WHITEBOARD]: {
        View: function (e) {
            let t,
                l,
                n = (0, lf.n)(),
                s = (0, w.bG)(
                    [lu.A, lx.A],
                    () => {
                        let e = null != n ? lu.A.getChannel(n) : void 0;
                        return null != e && lx.A.can(ez.xBc.USE_EMBEDDED_ACTIVITIES, e);
                    },
                    [n],
                ),
                r = (0, w.bG)(
                    [lI.Ay],
                    () => {
                        let e = lI.Ay.getCurrentEmbeddedActivity();
                        return null == e ||
                            e.applicationId !== ly.NW ||
                            e.location.kind !== lk.T.GUILD_CHANNEL ||
                            e.location.channel_id !== n
                            ? null
                            : e;
                    },
                    [n],
                ),
                d = (0, w.bG)([lI.Ay], () => lI.Ay.isLaunchingActivity(), []),
                { authResolved: c, isAuthorized: o } =
                    ((t = (0, w.bG)(
                        [lb.default],
                        () => lb.default.getFetchStateForApplication(ly.NW) === lb.FetchState.FETCHED,
                        [],
                    )),
                    (l = (0, w.bG)(
                        [lb.default, eI.A],
                        () => {
                            let e = lb.default.getNewestTokenForApplication(ly.NW);
                            if (null == e) return !1;
                            let t = eI.A.getApplication(ly.NW),
                                l = t?.integrationTypesConfig?.[lg.b.USER_INSTALL]?.oauth2InstallParams?.scopes;
                            if (null == l) return !0;
                            let n = new Set(e.scopes);
                            return l.every((e) => n.has(e));
                        },
                        [],
                    )),
                    a.useEffect(() => {
                        (lb.default.getFetchStateForApplication(ly.NW) === lb.FetchState.NOT_FETCHED &&
                            lE.A.fetch([ly.NW]),
                            null == eI.A.getApplication(ly.NW) && (0, lN.TA)(ly.NW));
                    }, []),
                    { authResolved: t, isAuthorized: l }),
                u = a.useRef(!1);
            a.useEffect(() => {
                null == r && null != n && s && c && o && !u.current && ((u.current = !0), lC(n));
            }, [s, n, r, c, o]);
            let m = a.useCallback(() => {
                    null != n && ((u.current = !0), lC(n));
                }, [n]),
                h = null != n && c && !o;
            return s
                ? (0, i.jsxs)("div", {
                      className: lU.kL,
                      children: [
                          null != r &&
                              (0, i.jsx)(lM.A, {
                                  frameId: (0, lD.Ri)(r),
                                  level: lw.A.WithinAppContent,
                                  className: lU.t$,
                              }),
                          null == r &&
                              h &&
                              (0, i.jsx)("div", {
                                  className: lU.P5,
                                  children: (0, i.jsx)(W.$, {
                                      variant: "secondary",
                                      text: v.intl.string(ea.default.PSuly6),
                                      loading: d,
                                      onClick: m,
                                  }),
                              }),
                      ],
                  })
                : (0, i.jsx)("div", {
                      className: lU.kL,
                      children: (0, i.jsx)("div", {
                          className: lU.m0,
                          children: (0, i.jsx)(x.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: v.intl.string(ea.default["nXc/MQ"]),
                          }),
                      }),
                  });
        },
        Edit: function (e) {
            let { cancel: t } = e,
                l = (0, w.bG)([e8.A], () => e8.A.getGuildId()),
                n = lh.default.castGuildIdAsEveryoneGuildRoleId(l),
                s = (0, lf.n)(),
                r = (0, w.bG)([lu.A], () => (null != s ? lu.A.getChannel(s) : void 0), [s]),
                d = (0, w.bG)([lx.A], () => null != r && lx.A.can(ez.xBc.MANAGE_ROLES, r), [r]),
                c = (0, w.bG)([lm.A], () => (null == l ? lR : lm.A.getSortedRoles(l).filter((e) => e.id !== n)), [
                    l,
                    n,
                ]),
                o = a.useMemo(() => {
                    let e;
                    return null != r
                        ? null != (e = r.permissionOverwrites[r.guild_id]) &&
                          lj.zy(e.deny, ez.xBc.USE_EMBEDDED_ACTIVITIES)
                            ? c
                                  .filter((e) => {
                                      let t = r.permissionOverwrites[e.id];
                                      return null != t && lj.zy(t.allow, ez.xBc.USE_EMBEDDED_ACTIVITIES);
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
                        (await lT({ channel: r, selectedRoleIds: j }), t());
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
                          (0, i.jsx)(lo.Z, {
                              selectionMode: "multiple",
                              label: v.intl.string(ea.default.XXLbfv),
                              description: v.intl.string(ea.default.XrpYIG),
                              placeholder: v.intl.string(ea.default.pp6WeD),
                              options: p,
                              value: j,
                              onSelectionChange: function (e) {
                                  (g(!1), m(e));
                              },
                              disabled: !d || x,
                              fullWidth: !0,
                              wrapTags: !0,
                          }),
                          !d && (0, i.jsx)(e4.w, { type: "warning", children: v.intl.string(ea.default.UPLtlA) }),
                          f &&
                              (0, i.jsx)("div", {
                                  role: "alert",
                                  children: (0, i.jsx)(e4.w, {
                                      type: "critical",
                                      children: v.intl.string(ea.default.xyCJYs),
                                  }),
                              }),
                          (0, i.jsxs)(e1.e, {
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
