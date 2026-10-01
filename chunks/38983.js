l.d(t, { m: () => lX });
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
    N = l(297264),
    E = l(375708),
    A = l(448492);
function b() {
    return (0, i.jsx)("div", {
        className: A.w,
        children: (0, i.jsx)(j.y, { type: j.y.Type.SPINNING_CIRCLE, "aria-label": E.intl.string(E.t.ZTNur7) }),
    });
}
function I() {
    return (0, i.jsxs)("div", {
        className: A.w,
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
        className: g()(A.p, t),
        align: "center",
        justify: "center",
        gap: 16,
        padding: { top: 24, right: 16, bottom: 24, left: 16 },
        children: [
            (0, i.jsxs)(_.B, {
                align: "center",
                gap: 6,
                children: [
                    (0, i.jsx)(N.D, { variant: "heading-md/semibold", color: "text-default", children: l }),
                    (0, i.jsx)(p.E, { variant: "text-sm/medium", color: "text-subtle", children: n }),
                ],
            }),
            a,
        ],
    });
}
var y = l(17928),
    C = l(364522),
    T = l(939249),
    k = l(663417),
    R = l(140735),
    w = l(97808),
    D = l(778712),
    M = l(463930),
    L = l(821609),
    U = l(80682),
    P = l(967144),
    G = l(885386),
    O = l(153488),
    B = l(696451),
    W = l(287809),
    z = l(58703),
    F = l(562153),
    H = l(775602);
function q() {
    let [e, t] = a.useState(null),
        [l, n] = a.useState(null),
        [i, s] = a.useState("unknown"),
        r = (0, y.bG)([H.Ay], () => H.Ay.useReducedMotion);
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
var K = l(650583),
    Y = l(684343);
function $(e) {
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
                    case K.dh.ARROW_RIGHT:
                    case K.dh.ARROW_DOWN:
                        t = (a + 1) % i.length;
                        break;
                    case K.dh.ARROW_LEFT:
                    case K.dh.ARROW_UP:
                        t = (a - 1 + i.length) % i.length;
                        break;
                    case K.dh.HOME:
                        t = 0;
                        break;
                    case K.dh.END:
                        t = i.length - 1;
                        break;
                    default:
                        return;
                }
                (e.preventDefault(), i[t]?.focus());
            }
        }, []);
    return (0, i.jsx)("div", {
        className: Y.vR,
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
                    className: Y.Mf,
                    "aria-selected": t,
                    "aria-controls": s,
                    tabIndex: t ? 0 : -1,
                    onClick: () => d(e.id),
                    onKeyDown: c,
                    children: (0, i.jsx)(p.E, {
                        className: Y.Pf,
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
var Q = l(980707),
    V = l(477782),
    X = l(922016),
    Z = l(847374),
    J = l(914173);
function ee(e) {
    let { navId: t, options: l, selectedId: n, label: a, onSelect: s, onClose: r } = e;
    return (0, i.jsx)(Q.W, {
        navId: t,
        "aria-label": a,
        onClose: r,
        onSelect: void 0,
        children: l.map((e) =>
            (0, i.jsx)(
                V.iD,
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
function et(e) {
    let { navId: t, options: l, selectedId: n, menuLabel: s, triggerLabel: r, onSelect: c } = e,
        [o, u] = a.useState(!1),
        m = a.useRef(null),
        x = l.find((e) => e.id === n);
    return null == x
        ? null
        : (0, i.jsx)(X.Y, {
              targetElementRef: m,
              position: "bottom",
              align: "left",
              shouldShow: o,
              onRequestOpen: () => u(!0),
              onRequestClose: () => u(!1),
              renderPopout: (e) => {
                  let { closePopout: a } = e;
                  return (0, i.jsx)(ee, { navId: t, options: l, selectedId: n, label: s, onSelect: c, onClose: a });
              },
              children: (e) =>
                  (0, i.jsx)(N.D, {
                      variant: "heading-sm/medium",
                      className: J.R_,
                      children: (0, i.jsxs)("button", {
                          ...e,
                          ref: m,
                          type: "button",
                          className: J.hZ,
                          "aria-haspopup": "menu",
                          "aria-label": r,
                          children: [
                              null != x.icon && (0, i.jsx)("span", { className: J.Kk, children: x.icon }),
                              (0, i.jsx)(p.E, {
                                  className: J.DD,
                                  tag: "span",
                                  variant: "heading-sm/medium",
                                  color: "text-default",
                                  children: x.label,
                              }),
                              (0, i.jsx)("span", {
                                  className: J.Kk,
                                  children: (0, i.jsx)(Z.a, {
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
var el = l(927813),
    en = l(251812);
function ei(e) {
    return e.entries.length < 3;
}
function ea(e) {
    return (0, en.K)(ei(e) ? void 0 : e.stat).name;
}
function es(e) {
    let t;
    return ei(e)
        ? "empty_state"
        : null != (t = e.computed_at) &&
            new Date(t).getTime() - e.week_start_ts * el.A.Millis.SECOND >= el.A.Millis.WEEK
          ? "podium"
          : "in_progress";
}
function er(e) {
    let { expanded: t } = e;
    return t ? "regular" : "mini";
}
var ed = l(192308);
function ec(e) {
    (0, ed.openModalLazy)(
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
var eo = l(61567),
    eu = l(823353);
function em(e) {
    let { guildId: t, onActivitySharingClick: l } = e,
        n = G.tz.useSetting(),
        a = G.JG.useSetting().includes(t),
        s = !n || a;
    return (0, i.jsx)(S, {
        className: eu.w,
        title: E.intl.string(eo.default.ULK65a),
        body: E.intl.format(s ? eo.default.ueza5l : eo.default["81PK67"], { memberCount: 3 }),
        action: s
            ? (0, i.jsx)(L.$, {
                  variant: "secondary",
                  size: "sm",
                  text: E.intl.string(eo.default.fMbgeZ),
                  onClick: () => {
                      (l(), ec(t));
                  },
              })
            : null,
    });
}
var ex = l(342296),
    eh = l(518782);
function ef(e) {
    let t = Math.floor(Math.max(e, 0) / el.A.Seconds.MINUTE),
        l = Math.floor(t / el.A.Minutes.HOUR),
        n = t % el.A.Minutes.HOUR;
    return 0 === l
        ? E.intl.formatToPlainString(eo.default.DdzvGL, { minutes: n })
        : E.intl.formatToPlainString(eo.default["6Y8H0A"], { hours: l, minutes: n });
}
function eg(e, t) {
    switch (t) {
        case eh.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return {
                primary: E.intl.formatToPlainString(E.t["k2UNz+"], { days: e.value }),
                secondary: ef(e.time_played_seconds),
            };
        case eh.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return {
                primary: E.intl.formatToPlainString(eo.default.rgpc8E, { count: e.value }),
                secondary: ef(e.time_played_seconds),
            };
        case eh.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            let l, n, i;
            return {
                primary:
                    ((n = Math.floor((l = Math.floor(Math.max(e.value, 0) / el.A.Millis.MINUTE)) / el.A.Minutes.HOUR)),
                    (i = l % el.A.Minutes.HOUR),
                    0 === n
                        ? E.intl.formatToPlainString(eo.default.bgQf2H, { minutes: i })
                        : 0 === i
                          ? E.intl.formatToPlainString(eo.default["D/HToK"], { hours: n })
                          : E.intl.formatToPlainString(eo.default.fvtrHn, { hours: n, minutes: i })),
            };
        default:
            return { primary: "\u2014" };
    }
}
var ej = l(81466),
    ev = l(406810),
    ep = l(687966),
    e_ = l(109112),
    eN = l(683063),
    eE = l(573435),
    eA = l(402860),
    eb = l(396583),
    eI = l(587895),
    eS = l(429913),
    ey = l(280450);
function eC(e, t) {
    return { id: e, name: E.intl.string(eo.default.rhDbuQ), iconUrl: void 0, isLoading: t };
}
function eT(e, t) {
    return e.get(t) ?? eC(t, !1);
}
function ek(e, t) {
    return t.map((t) => eT(e, t));
}
function eR(e, t) {
    let l = t.user_id,
        n = (0, y.bG)([W.default], () => W.default.getUser(l), [l]),
        i = (0, y.bG)([B.Ay], () => B.Ay.getMember(e, l), [e, l]),
        a = (0, P.gn)(e, l, i?.colorStrings ?? null),
        s = F.Ay.useName(e, void 0, n),
        r = (0, y.bG)([ey.default], () => ey.default.getId()) === l,
        d = null != n ? s : t.name;
    return {
        user: n,
        member: i,
        roleColorStrings: a,
        baseName: d,
        displayName: r ? E.intl.formatToPlainString(eo.default.subXXA, { name: d }) : d,
    };
}
var ew = l(518477),
    eD = l(870087);
function eM(e) {
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
        x = eR(t, l),
        h = l.application_ids[0],
        f = null != h ? eT(s, h) : void 0,
        j = l.user_id,
        v = a.useCallback(() => {
            (u?.(),
                (0, eA.openUserProfileModal)({
                    userId: j,
                    guildId: t,
                    tabSection: ew.RP.ACTIVITY,
                    scrollTarget: ew.bk.RECENT_ACTIVITY,
                }));
        }, [u, j, t]);
    return (0, i.jsxs)("div", {
        ref: o,
        "aria-hidden": c,
        inert: c,
        className: g()(eD.nM, { [eD.Bh]: r && !c, [eD.lR]: d }),
        children: [
            (0, i.jsx)(eL, { guildId: t, entry: l, identity: x, lastPlayedGame: f, onClick: u }),
            (0, i.jsx)(eG, { entry: l, stat: n, width: m, onClick: v }),
            (0, i.jsx)(ez, {
                name: x.baseName,
                applicationIds: l.application_ids,
                applicationCount: l.application_count,
                games: s,
                onClick: v,
            }),
        ],
    });
}
function eL(e) {
    let { guildId: t, entry: l, identity: n, lastPlayedGame: s, onClick: r } = e,
        d = a.useRef(null),
        c = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(eU, { rank: l.rank }),
                (0, i.jsx)(w.eu, {
                    size: D._3.SIZE_32,
                    src: n.user?.getAvatarURL(t, (0, D.FT)(D._3.SIZE_32)) ?? void 0,
                    className: eD.my,
                    "aria-hidden": !0,
                }),
                (0, i.jsxs)("div", {
                    className: eD.Dc,
                    children: [
                        (0, i.jsx)(N.D, {
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
                                children: E.intl.formatToPlainString(eo.default.YuNVPY, { gameName: s.name }),
                            }),
                    ],
                }),
            ],
        });
    return null == n.user
        ? (0, i.jsx)("div", { className: eD.D_, children: c })
        : (0, i.jsx)(ex.A, {
              targetElementRef: d,
              user: n.user,
              guildId: t,
              children: (e) =>
                  (0, i.jsx)(T.D, {
                      ...e,
                      innerRef: d,
                      className: g()(eD.D_, eD.FB),
                      onClick: (t) => {
                          (r?.(), e.onClick(t));
                      },
                      children: c,
                  }),
          });
}
function eU(e) {
    let { rank: t } = e,
        l = E.intl.formatToPlainString(eo.default.I4JiAQ, { rank: t });
    switch (t) {
        case 1:
            return (0, i.jsx)("div", {
                className: eD.Tm,
                "aria-label": l,
                children: (0, i.jsx)("div", { className: eD.Xe }),
            });
        case 2:
            return (0, i.jsx)("div", {
                className: eD.Tm,
                "aria-label": l,
                children: (0, i.jsx)("div", { className: eD.XQ }),
            });
        case 3:
            return (0, i.jsx)("div", {
                className: eD.Tm,
                "aria-label": l,
                children: (0, i.jsx)("div", { className: eD.c9 }),
            });
        default:
            return (0, i.jsxs)("div", {
                className: eD.mH,
                children: [
                    (0, i.jsx)(R.A, { children: l }),
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
function eP(e) {
    let { stat: t } = e;
    switch (t) {
        case eh.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return (0, i.jsx)(ej.CalendarIcon, { size: "xxs", color: d.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case eh.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            return (0, i.jsx)(ev.ClockIcon, { size: "xxs", color: d.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case eh.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return (0, i.jsx)(ep.GameControllerIcon, { size: "xxs", color: d.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        default:
            return null;
    }
}
function eG(e) {
    let { entry: t, stat: l, width: n, onClick: a } = e,
        { primary: s, secondary: r } = eg(t, l);
    return (0, i.jsxs)(T.D, {
        className: eD.TH,
        style: null != n ? { width: n } : void 0,
        "aria-label": E.intl.string(eo.default.o6mBdl),
        onClick: a,
        children: [
            (0, i.jsxs)("div", {
                className: eD.bf,
                children: [
                    (0, i.jsx)(eP, { stat: l }),
                    (0, i.jsx)(p.E, { variant: "text-sm/medium", color: "text-subtle", children: s }),
                ],
            }),
            null != r && (0, i.jsx)(p.E, { variant: "text-xs/medium", color: "text-muted", children: r }),
        ],
    });
}
function eO(e) {
    let { game: t, notched: l } = e;
    return (0, i.jsx)("span", {
        className: eD.rO,
        "aria-hidden": !0,
        children: (0, i.jsx)(eE.Ay, {
            mask: l ? eE.l8[24] : eE.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null != t.iconUrl
                    ? (0, i.jsx)("img", { className: eD.Gt, src: t.iconUrl, alt: "", "aria-hidden": !0 })
                    : (0, i.jsx)("span", {
                          className: eD.ct,
                          "aria-hidden": !0,
                          children: !t.isLoading && (0, i.jsx)(e_._, { size: "xxs", color: d.A.colors.ICON_SUBTLE }),
                      }),
        }),
    });
}
function eB(e) {
    let { played: t, totalCount: l } = e,
        n = t.slice(0, 2),
        a = l - n.length;
    return (0, i.jsxs)("div", {
        className: eD.Nw,
        children: [
            n.map((e, t) => (0, i.jsx)(eO, { game: e, notched: a > 0 || t !== n.length - 1 }, `${e.id}-${t}`)),
            a > 0
                ? (0, i.jsx)("span", {
                      className: eD.rO,
                      children: (0, i.jsx)(eE.Ay, {
                          mask: eE.Ay.Masks.SQUIRCLE,
                          width: 24,
                          height: 24,
                          children: (0, i.jsx)("div", {
                              className: eD.p0,
                              children: (0, i.jsx)(p.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-subtle",
                                  children: E.intl.formatToPlainString(eo.default.JiMMEd, { count: a }),
                              }),
                          }),
                      }),
                  })
                : null,
        ],
    });
}
function eW(e) {
    let { played: t, totalCount: l, children: n } = e;
    return (0, i.jsx)(eN.u, {
        body:
            0 === t.length
                ? E.intl.string(eo.default["7CrlYb"])
                : 1 === t.length
                  ? E.intl.formatToPlainString(eo.default.dbNpK0, { firstGame: t[0].name })
                  : 2 === t.length && 2 === l
                    ? E.intl.formatToPlainString(eo.default.tqVg4M, { firstGame: t[0].name, secondGame: t[1].name })
                    : E.intl.formatToPlainString(eo.default.bxcrSz, {
                          firstGame: t[0].name,
                          secondGame: t[1].name,
                          otherCount: l - 2,
                      }),
        asset: t.length > 0 ? (0, i.jsx)(eB, { played: t, totalCount: t.length }) : void 0,
        assetSize: t.length > 1 ? 43 : 24,
        children: n,
    });
}
function ez(e) {
    let { name: t, applicationIds: l, applicationCount: n, games: a, onClick: s } = e,
        r = ek(a, l);
    return (0, i.jsx)("div", {
        className: eD.ag,
        children: (0, i.jsx)(eW, {
            played: r,
            totalCount: n,
            children: (0, i.jsx)(T.D, {
                className: g()(eD.Nw, eD.Dz),
                "aria-label": E.intl.formatToPlainString(eo.default.o6mBdl, { name: t }),
                onClick: s,
                children: (0, i.jsx)(eB, { played: r, totalCount: n }),
            }),
        }),
    });
}
var eF = l(189043);
function eH(e) {
    let { guildId: t, entries: l, stat: n, games: a, currentUserEntry: s, currentUserPillarRef: r, onClick: d } = e,
        c = {
            1: { column: eF.HC, pillar: eF.P5 },
            2: { column: eF.th, pillar: eF.Vk },
            3: { column: eF.Ou, pillar: eF.el },
        };
    return (0, i.jsx)("div", {
        className: eF.pI,
        role: "list",
        "aria-label": E.intl.string(eo.default.wKXLfQ),
        children: l.map((e, l) =>
            (0, i.jsx)(
                eq,
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
function eq(e) {
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
        x = ek(c, l.application_ids),
        h = eR(t, l),
        { primary: f } = eg(l, d),
        j = 1 === n ? D._3.SIZE_48 : D._3.SIZE_40,
        v = a.useRef(null),
        _ = g()(eF.dR, { [eF.m$]: 1 === n, [eF.wd]: 2 === n, [eF.p0]: 3 === n }),
        E = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: eF.R3,
                    children: [
                        (0, i.jsx)(w.eu, {
                            size: j,
                            src: h.user?.getAvatarURL(t, (0, D.FT)(j)) ?? void 0,
                            "aria-hidden": !0,
                        }),
                        (0, i.jsx)("div", { className: _ }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: g()(eF.DX, r),
                    children: [
                        (0, i.jsx)(N.D, {
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            lineClamp: 1,
                            className: eF.IY,
                            children: (0, i.jsx)(M.g, {
                                name: h.displayName,
                                colorString: h.member?.colorString ?? null,
                                colorStrings: h.roleColorStrings,
                            }),
                        }),
                        (0, i.jsx)(eW, {
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
                ? (0, i.jsx)(ex.A, {
                      targetElementRef: v,
                      user: h.user,
                      guildId: t,
                      children: (e) =>
                          (0, i.jsx)(T.D, {
                              ...e,
                              className: eF.fs,
                              innerRef: v,
                              onClick: (t) => {
                                  (m?.(), e.onClick(t));
                              },
                              children: E,
                          }),
                  })
                : (0, i.jsx)("div", { className: eF.fs, children: E }),
    });
}
var eK = l(652215),
    eY = l(219047);
function e$(e) {
    let t,
        l,
        n,
        { guildId: s, data: r, inModal: d = !1 } = e,
        { stat: c, entries: o } = r,
        u = (0, y.bG)([W.default], () => W.default.getCurrentUser()?.id),
        m = a.useMemo(() => o.find((e) => e.user_id === u), [o, u]),
        h = a.useMemo(() => {
            let e = o.slice(0, 20);
            return null == m || e.includes(m) ? e : [...e, m];
        }, [o, m]),
        f = a.useMemo(() => Array.from(new Set(h.map((e) => e.user_id))), [h]);
    (0, U.k6)(s, f);
    let j =
            ((t = a.useMemo(() => Array.from(new Set(h.flatMap((e) => e.application_ids))), [h])),
            (l = (0, eS.A)(t)),
            (n = (0, y.yK)([eI.A], () => t.map((e) => eI.A.didFetchingApplicationFail(e)))),
            a.useMemo(() => {
                let e = new Map();
                return (
                    t.forEach((t, i) => {
                        let a = l[i];
                        e.set(
                            t,
                            null != a
                                ? { id: t, name: a.name, iconUrl: a.getIconURL(64) ?? void 0, isLoading: !1 }
                                : eC(t, !n[i]),
                        );
                    }),
                    e
                );
            }, [t, l, n])),
        v = ei(r),
        p = es(r),
        _ = "podium" === p,
        N = er({ expanded: d }),
        { scrollerRef: A, scrollerNode: I, userRowRef: S, floatingRowPosition: k, scrollToUserRow: R } = q();
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
                    x.default.track(eK.HAw.LEADERBOARD_END_IMPRESSION, {
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
        leaderboardLength: v ? 0 : h.length,
        leaderboardState: p,
        leaderboardView: N,
        scrollerNode: v ? null : I,
        isEmpty: v,
    });
    let w = null != k,
        D = a.useMemo(() => (_ ? h.slice(3) : h), [_, h]),
        M = a.useMemo(() => {
            let e = null == m || D.includes(m) ? D : [...D, m];
            return e.length > 0 ? e : h;
        }, [D, m, h]),
        { metricMeasureRef: L, metricWidth: P } = (function () {
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
                x.default.track(eK.HAw.LEADERBOARD_CLICK, {
                    location: e,
                    guild_id: s,
                    leaderboard_state: p,
                    leaderboard_view: N,
                });
            },
            [s, p, N],
        ),
        O = null == m && null != u,
        B = a.useCallback(
            (e) => {
                let t = e === m;
                return (0, i.jsx)(
                    eM,
                    {
                        guildId: s,
                        entry: e,
                        stat: c,
                        games: j,
                        isCurrentUser: t,
                        shouldDimForCurrentUser: t && w,
                        rowRef: t ? S : void 0,
                        onClick: () => G("row"),
                        metricWidth: P ?? void 0,
                    },
                    `${e.rank}-${e.user_id}`,
                );
            },
            [w, m, j, s, c, S, G, P],
        );
    if (v)
        return (0, i.jsx)("div", {
            className: eY.Cm,
            children: (0, i.jsx)(em, { guildId: s, onActivitySharingClick: () => G("activity_sharing") }),
        });
    let z = [h[0], h[1], h[2]],
        F = (0, i.jsx)("div", {
            ref: L,
            className: eY.V$,
            "aria-hidden": !0,
            children: M.map((e) => (0, i.jsx)(eG, { entry: e, stat: c }, e.user_id)),
        });
    return null == P
        ? (0, i.jsxs)("div", { className: eY.rf, children: [F, (0, i.jsx)(b, {})] })
        : (0, i.jsxs)("div", {
              className: eY.rf,
              children: [
                  F,
                  (0, i.jsxs)("div", {
                      className: eY.SY,
                      children: [
                          (0, i.jsxs)(C.d_, {
                              className: g()(eY.p_, { [eY.zE]: d, [eY.Ng]: O }),
                              ref: A,
                              children: [
                                  _ &&
                                      (0, i.jsx)(eH, {
                                          guildId: s,
                                          entries: z,
                                          stat: c,
                                          games: j,
                                          currentUserEntry: m,
                                          currentUserPillarRef: S,
                                          onClick: () => G("podium"),
                                      }),
                                  D.map(B),
                              ],
                          }),
                          (null != m && null != k) || O
                              ? (0, i.jsx)("div", { className: g()(eY.Dz, "top" !== k || O ? eY.qV : eY.gN) })
                              : null,
                          null != m &&
                              null != k &&
                              (0, i.jsx)(T.D, {
                                  className: g()(eY.z$, "top" === k ? eY.aG : eY.Ie),
                                  "aria-label": E.intl.string(eo.default.d0Z8kd),
                                  onClick: R,
                                  children: (0, i.jsx)(eM, {
                                      guildId: s,
                                      entry: m,
                                      stat: c,
                                      games: j,
                                      isCurrentUser: !0,
                                      shouldDimForCurrentUser: !1,
                                      isFloating: !0,
                                      onClick: () => G("row"),
                                      metricWidth: P ?? void 0,
                                  }),
                              }),
                          O && (0, i.jsx)(eV, { guildId: s, onActivitySharingClick: () => G("activity_sharing") }),
                      ],
                  }),
                  (0, i.jsx)(eQ, { computedAt: r.computed_at, inModal: d }),
              ],
          });
}
function eQ(e) {
    let { computedAt: t, inModal: l } = e,
        n = (0, i.jsxs)("div", {
            className: eY.z8,
            children: [
                (0, i.jsx)(k.RefreshIcon, { size: "xxs", color: d.A.colors.ICON_SUBTLE, "aria-hidden": !0 }),
                (0, i.jsx)(p.E, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: E.intl.string(eo.default["/nma+a"]),
                }),
            ],
        });
    return null == t
        ? (0, i.jsx)("div", { className: eY.qr, children: n })
        : (0, i.jsx)("div", {
              className: g()(eY.qr, { [eY.zE]: l }),
              tabIndex: 0,
              children: (0, i.jsx)(o.m, {
                  text: E.intl.formatToPlainString(eo.default["1bt50t"], { timestamp: (0, z.mk)(new Date(t)) }),
                  position: "bottom",
                  children: n,
              }),
          });
}
function eV(e) {
    let { guildId: t, onActivitySharingClick: l } = e,
        n = G.tz.useSetting(),
        a = G.JG.useSetting(),
        s = (0, y.bG)([O.A], () => O.A.hasConsented(eK.YAq.PERSONALIZATION)),
        r = E.intl.string(eo.default.toxuHd),
        d = !1;
    ((!n || a.includes(t)) && ((r = E.intl.string(eo.default["8y885d"])), (d = !0)),
        s || ((r = E.intl.string(eo.default.mTARYx)), (d = !0)));
    let c = (0, y.bG)([W.default], () => W.default.getCurrentUser()),
        o = F.Ay.useName(t, void 0, c),
        u = (0, y.bG)([B.Ay], () => B.Ay.getMember(t, c?.id ?? "")),
        m = (0, P.gn)(t, c?.id, u?.colorStrings ?? null);
    return null == c
        ? null
        : (0, i.jsxs)("div", {
              className: eY.Xx,
              children: [
                  (0, i.jsxs)("div", {
                      className: eY.kd,
                      children: [
                          (0, i.jsxs)("div", {
                              className: eY.nk,
                              children: [
                                  (0, i.jsx)(R.A, { children: E.intl.string(eo.default["oHdW+u"]) }),
                                  (0, i.jsx)(p.E, {
                                      variant: "text-sm/semibold",
                                      color: "text-muted",
                                      "aria-hidden": !0,
                                      children: "?",
                                  }),
                              ],
                          }),
                          (0, i.jsx)(w.eu, {
                              size: D._3.SIZE_32,
                              src: c.getAvatarURL(t, (0, D.FT)(D._3.SIZE_32)) ?? void 0,
                              className: eY.SA,
                              "aria-hidden": !0,
                          }),
                          (0, i.jsxs)("div", {
                              className: eY.ko,
                              children: [
                                  (0, i.jsx)(N.D, {
                                      variant: "heading-sm/semibold",
                                      color: "text-default",
                                      lineClamp: 1,
                                      children: (0, i.jsx)(M.g, {
                                          name: o,
                                          colorString: u?.colorString ?? null,
                                          colorStrings: m,
                                      }),
                                  }),
                                  (0, i.jsx)("div", {
                                      className: eY.LF,
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
                          className: eY.rl,
                          children: (0, i.jsx)(L.$, {
                              variant: "secondary",
                              size: "sm",
                              text: E.intl.string(eo.default.fMbgeZ),
                              onClick: () => {
                                  (l(), ec(t));
                              },
                          }),
                      }),
              ],
          });
}
var eX = l(224640),
    eZ = l(20742),
    eJ = l(515746);
function e0(e) {
    let { data: t } = e,
        l = (0, en.K)(t.stat),
        {
            ended: n,
            endDate: s,
            badgeLabel: r,
        } = (function (e) {
            let t = (e + el.A.Seconds.WEEK) * el.A.Millis.SECOND,
                [l, n] = a.useState(() => Date.now()),
                i = t - l,
                s = i <= 0,
                r = i - (Math.ceil(i / el.A.Millis.DAY) - 1) * el.A.Millis.DAY;
            return (
                (0, eb.A)(() => n(Date.now()), s ? null : r),
                a.useMemo(
                    () => ({
                        ended: s,
                        endDate: new Date(t),
                        badgeLabel: s
                            ? E.intl.string(eo.default["J8r/7L"])
                            : E.intl.formatToPlainString(eo.default["PuaR+2"], {
                                  days: Math.ceil(i / el.A.Millis.DAY),
                              }),
                    }),
                    [s, t, i],
                )
            );
        })(t.week_start_ts),
        d = G.PZ.useSetting(),
        c = 2 > (0, z.m_)(s, new Date()) ? (0, z.mk)(s, !1, d) : (0, z.i$)(s, "L LT", d),
        o = n
            ? E.intl.format(eo.default.kG9XmM, { endedAt: c, nextStatName: (0, en.K)(t.next_stat).name })
            : E.intl.format(eo.default["X+VLqi"], { statQuestion: l.question, endsAt: c });
    return (0, i.jsx)(eN.u, {
        title: l.name,
        body: o,
        position: "top",
        children: (0, i.jsx)("div", {
            className: eJ.q,
            tabIndex: 0,
            children: (0, i.jsx)(p.E, {
                variant: "text-xs/semibold",
                color: n ? "text-muted" : "text-brand",
                children: r,
            }),
        }),
    });
}
function e1(e) {
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
                eK.HAw.LEADERBOARD_HOVER,
                {
                    guild_id: n.guildId,
                    duration: Math.round(l) / 1e3,
                    leaderboard_state: es(n.data),
                    leaderboard_view: er({ expanded: n.expanded }),
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
var e2 = l(460614);
function e3(e) {
    let { guildId: t, data: l, modalProps: n } = e,
        a = e1({ guildId: t, data: l, expanded: !0 });
    return (0, i.jsx)(eX.d, {
        size: "lg",
        "aria-label": ea(l),
        ...n,
        children: (0, i.jsxs)("div", {
            ref: a,
            children: [
                (0, i.jsxs)("div", {
                    className: e2.wx,
                    children: [
                        (0, i.jsxs)("div", {
                            className: e2.LD,
                            children: [
                                (0, i.jsx)(c.TrophyIcon, {
                                    size: "xs",
                                    color: d.A.colors.ICON_SUBTLE,
                                    "aria-hidden": !0,
                                }),
                                (0, i.jsx)(N.D, { variant: "heading-sm/medium", className: e2.DD, children: ea(l) }),
                                (0, i.jsx)(e0, { data: l }),
                            ],
                        }),
                        (0, i.jsx)(eZ.s_, {}),
                    ],
                }),
                (0, i.jsx)("div", { className: e2.rf, children: (0, i.jsx)(e$, { guildId: t, data: l, inModal: !0 }) }),
            ],
        }),
    });
}
var e6 = l(452027),
    e8 = l(103557),
    e4 = l(825484),
    e7 = l(95477),
    e5 = l(241326),
    e9 = l(683071),
    te = l(2553),
    tt = l(405810),
    tl = l(967198),
    tn = l(488428),
    ti = l(776231);
let ta = (0, l(676279).cy)();
function ts(e, t, l) {
    let n = l.startsWith("a_"),
        i = n ? (ta ? "webp" : "gif") : ta ? "webp" : "jpg",
        { CDN_HOST: a, API_ENDPOINT: s } = window.GLOBAL_ENV,
        r = eK.Rsh.GUILD_SPACE_IMAGE_TEXT_WIDGET_IMAGE(e, t, l, i),
        d = null != a ? `https://${a}${r}` : location.protocol + s + r,
        c = { size: (0, ti.kr)(500 * (0, ti.mZ)()) };
    return (
        "jpg" === i && (c.quality = "lossless"), "webp" === i && n && (c.animated = !0), (d += `?${tn.stringify(c)}`)
    );
}
var tr = l(868602),
    td = l(445187),
    tc = l(831544),
    to = l(28863),
    tu = l(148166),
    tm = l(427209),
    tx = l(294454),
    th = l(605810);
function tf(e) {
    let { target: t, tabIndex: n } = e;
    return (0, i.jsx)(o.m, {
        text: E.intl.string(E.t.RDE0Sc),
        ariaHidden: !0,
        children: (0, i.jsx)("button", {
            type: "button",
            className: th.ql,
            tabIndex: n,
            "aria-label": E.intl.string(E.t.Ej3B3Y),
            onClick: () => {
                (0, ed.openModalLazy)(
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
                    { stackingBehavior: "stack", modalKey: tx.aU },
                );
            },
            children: (0, i.jsx)(tm.A, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
        }),
    });
}
var tg = l(272984);
function tj(e) {
    let { artist: t, itemProps: l } = e,
        n = null != t.artist_image_hash ? tg.RQ.IMAGE(t.artist_image_hash) : null,
        s = a.useMemo(
            () => ({
                kind: "artist",
                shareUrl: tg.RQ.WEB_OPEN(tg.M0.ARTIST, t.artist_external_id),
                title: t.artist_name ?? t.artist_external_id,
                subtitle: null,
                imageUrl: n,
            }),
            [t.artist_external_id, t.artist_name, n],
        ),
        r = (0, i.jsx)(tu.R, { src: n, isCircular: !0, FallbackIcon: tc.MicrophoneIcon });
    return null == t.artist_name
        ? (0, i.jsx)("div", { className: th.Nr, children: (0, i.jsx)("div", { ...l, className: th.MT, children: r }) })
        : (0, i.jsxs)("div", {
              className: th.Nr,
              children: [
                  (0, i.jsxs)(to.Anchor, {
                      ...l,
                      className: th.MT,
                      href: s.shareUrl,
                      useDefaultUnderlineStyles: !1,
                      children: [
                          r,
                          (0, i.jsx)("span", {
                              className: th.Qq,
                              children: (0, i.jsx)(p.E, {
                                  className: th.DD,
                                  tag: "span",
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  lineClamp: 2,
                                  children: t.artist_name,
                              }),
                          }),
                      ],
                  }),
                  (0, i.jsx)(tf, { target: s, tabIndex: l.tabIndex }),
              ],
          });
}
var tv = l(872351),
    tp = l(708988),
    t_ = l(104171),
    tN = l(628137);
let tE = "none",
    tA = (e, t) => (0, i.jsx)(p.E, { tag: "span", variant: "text-sm/semibold", color: "text-default", children: e }, t);
function tb(e) {
    return e;
}
function tI(e) {
    return e?.direction ?? tE;
}
function tS(e) {
    return E.intl.formatToPlainString(eo.default["7X+3f8"], { count: e });
}
function ty(e) {
    let t = e?.plays_change_percent;
    if (null == t) return null;
    let l = Math.round(Math.abs(t));
    return 0 === l
        ? null
        : { direction: t > 0 ? "up" : "down", label: E.intl.formatToPlainString(eo.default["h+LUpk"], { percent: l }) };
}
var tC = l(633099);
function tT(e) {
    let { trend: t } = e,
        l = "up" === t.direction ? tv.z : tp.M;
    return (0, i.jsxs)("span", {
        className: g()(tC.GW, { [tC.$J]: "up" === t.direction, [tC.KW]: "down" === t.direction }),
        children: [
            (0, i.jsx)(l, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
            (0, i.jsx)(p.E, { tag: "span", variant: "text-sm/medium", color: "none", children: t.label }),
        ],
    });
}
function tk(e) {
    var t;
    let { guildId: l, song: n } = e,
        s = a.useMemo(() => (n.facepile_user_ids ?? []).slice(0, 3), [n.facepile_user_ids]);
    (0, U.k6)(l, s);
    let r = (0, y.yK)([W.default], () => s.map((e) => W.default.getUser(e)), [s]),
        d = a.useMemo(() => r.filter((e) => null != e), [r]);
    if (0 === d.length) return null;
    let c = n.unique_listeners - d.length;
    return (0, i.jsx)("span", {
        className: tC.WM,
        role: "group",
        "aria-label":
            ((t = n.unique_listeners),
            E.intl.formatToPlainString(eo.default.AzIhRB, { count: t, trend: tE, countHook: tb })),
        children: (0, i.jsx)(t_.Ay, {
            users: d,
            guildId: l,
            size: t_.DN.SIZE_24,
            max: d.length,
            count: n.unique_listeners,
            hideMoreUsers: c <= 0,
            renderMoreUsers: () =>
                (0, i.jsx)("span", {
                    className: tC.ju,
                    children: (0, i.jsx)(p.E, {
                        tag: "span",
                        variant: "text-xs/semibold",
                        color: "text-subtle",
                        children: E.intl.formatToPlainString(eo.default.bFIg0R, { count: c }),
                    }),
                }),
        }),
    });
}
function tR(e) {
    let { isCompact: t, headline: l, detail: n, trend: a } = e;
    return null == l && null == n && null == a
        ? null
        : (0, i.jsx)("div", {
              className: g()(tC.yp, { [tC.Fl]: t }),
              children: (0, i.jsxs)("div", {
                  className: tC.QD,
                  children: [
                      null != l && (0, i.jsx)(p.E, { variant: "text-md/semibold", color: "text-default", children: l }),
                      (0, i.jsxs)("div", {
                          className: tC._0,
                          children: [
                              null != n &&
                                  (0, i.jsx)(p.E, {
                                      tag: "span",
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: n,
                                  }),
                              null != a && (0, i.jsx)(tT, { trend: a }),
                          ],
                      }),
                  ],
              }),
          });
}
function tw(e) {
    var t;
    let { guildId: l, isCompact: n, canShowEmbed: a, song: s } = e,
        r = ty(s);
    return (0, i.jsxs)("div", {
        className: g()(tC.yp, { [tC.Fl]: n }),
        children: [
            a && (0, i.jsx)(tN.A, { className: tC.aF, resourceType: tg.M0.TRACK, resourceId: s.track_external_id }),
            (0, i.jsxs)("div", {
                className: tC.QD,
                children: [
                    (0, i.jsx)(tk, { guildId: l, song: s }),
                    (0, i.jsxs)("div", {
                        className: tC._0,
                        children: [
                            (0, i.jsx)(p.E, {
                                tag: "span",
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children:
                                    ((t = s.plays),
                                    E.intl.format(eo.default["7hHUIS"], { count: t, trend: tI(r), countHook: tA })),
                            }),
                            null != r && (0, i.jsx)(tT, { trend: r }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var tD = l(197935),
    tM = l(915734);
function tL(e) {
    let { label: t, items: l, isCompact: n, getItemKey: a, renderItem: s } = e;
    return (0, i.jsx)("div", {
        className: g()(tM.Dk, { [tM.yI]: n }),
        children: (0, i.jsx)(tD.A, {
            items: l,
            getItemKey: a,
            renderItem: s,
            gap: 8,
            edgeFade: 40,
            actionsClassName: tM.o1,
            "aria-label": t,
        }),
    });
}
var tU = (((n = {}).TOP_SONGS = "top_songs"), (n.TOP_ARTISTS = "top_artists"), (n.TOP_LISTENERS = "top_listeners"), n);
let tP = ["top_songs", "top_artists", "top_listeners"];
function tG(e) {
    return 1 > e.ranked_songs.reduce((e, t) => e + t.plays, 0);
}
function tO(e) {
    switch (e) {
        case "top_songs":
            return E.intl.string(eo.default.KgeEtx);
        case "top_artists":
            return E.intl.string(eo.default.RYxWTS);
        case "top_listeners":
            return E.intl.string(eo.default.KO73KB);
    }
}
function tB(e, t) {
    return `popular-music-tab-${e}-${t}`;
}
function tW(e) {
    return `popular-music-panel-${e}`;
}
var tz = l(742452);
function tF(e) {
    return e.artist_external_id;
}
function tH(e, t) {
    return (0, i.jsx)(tj, { artist: e, itemProps: t });
}
function tq(e) {
    var t, l;
    let n,
        a,
        s,
        { isCompact: r, data: d } = e;
    if (0 === d.ranked_artists.length) return null;
    let c = ty(d.summary);
    return (0, i.jsxs)("div", {
        className: tz.U,
        children: [
            (0, i.jsx)(tL, {
                label: tO(tU.TOP_ARTISTS),
                items: d.ranked_artists,
                isCompact: r,
                getItemKey: tF,
                renderItem: tH,
            }),
            (0, i.jsx)(tR, {
                isCompact: r,
                headline:
                    ((t = d.summary),
                    null == (n = t?.distinct_songs) || n < 1
                        ? null
                        : E.intl.formatToPlainString(eo.default.W8etVA, { count: n })),
                detail:
                    ((l = d.summary),
                    (a = l?.listener_count),
                    (s = l?.distinct_artists),
                    null == a || a < 1 || null == s || s < 1
                        ? null
                        : E.intl.format(eo.default.yGqf0D, {
                              memberCount: a,
                              artistCount: s,
                              trend: tI(c),
                              memberCountHook: tA,
                              artistCountHook: tA,
                          })),
                trend: c,
            }),
        ],
    });
}
var tK = l(625903),
    tY = l(780964),
    t$ = l(766075),
    tQ = l(30370),
    tV = l(123894);
function tX() {
    let e = (0, y.bG)([tQ.A], () => tQ.A.getAccounts().some((e) => e.type === eK.fg2.SPOTIFY && e.showActivity));
    return (0, i.jsx)(S, {
        className: tV.w,
        title: E.intl.string(eo.default.ULK65a),
        body: E.intl.format(e ? eo.default.BLuvck : eo.default["Ko3a0+"], { memberCount: 2 }),
        action: e
            ? null
            : (0, i.jsx)(L.$, {
                  variant: "secondary",
                  size: "sm",
                  icon: tK.SettingsIcon,
                  text: E.intl.string(E.t["3D5yo/"]),
                  onClick: () => (0, t$.openUserSettings)(tY.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING),
              }),
    });
}
function tZ() {
    return (0, i.jsx)(S, {
        className: tV.w,
        title: E.intl.string(eo.default.ULK65a),
        body: E.intl.format(eo.default.ZQxU8v, { memberCount: 2 }),
    });
}
var tJ = l(109487),
    t0 = l(279543);
function t1(e) {
    let { isCompact: t } = e;
    return (0, i.jsxs)("div", {
        className: t0.qr,
        children: [
            (0, i.jsxs)("div", {
                className: t0.Os,
                children: [
                    (0, i.jsx)("span", {
                        className: t0.Kk,
                        children: (0, i.jsx)(k.RefreshIcon, {
                            size: "xxs",
                            color: d.A.colors.ICON_SUBTLE,
                            "aria-hidden": !0,
                        }),
                    }),
                    (0, i.jsx)(p.E, {
                        className: t0.Pf,
                        tag: "span",
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: E.intl.string(eo.default["3/DOFo"]),
                    }),
                ],
            }),
            (0, i.jsxs)(to.Anchor, {
                className: t0.al,
                href: tg.RQ.WEB_HOME,
                "aria-label": E.intl.string(eo.default["jUr+wF"]),
                children: [
                    (0, i.jsx)("span", {
                        className: t0.Kk,
                        children: (0, i.jsx)(tJ.L, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    }),
                    !t &&
                        (0, i.jsx)(p.E, {
                            className: t0.G2,
                            tag: "span",
                            variant: "text-xs/medium",
                            color: "none",
                            children: E.intl.string(eo.default.ZdPp2q),
                        }),
                ],
            }),
        ],
    });
}
var t2 = l(65154),
    t3 = l(329177),
    t6 = l(242226);
function t8(e) {
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
        j =
            ((t = (0, y.bG)([W.default], () => W.default.getUser(r), [r])),
            (l = (0, y.bG)([B.Ay], () => B.Ay.getMember(s, r), [s, r])),
            (n = (0, P.gn)(s, r, l?.colorStrings ?? null)),
            (a = F.Ay.useName(s, void 0, t)),
            {
                user: t,
                colorString: l?.colorString ?? null,
                roleColorStrings: n,
                displayName: m ? E.intl.formatToPlainString(eo.default.subXXA, { name: a }) : a,
            }),
        { user: v } = j;
    return null == v
        ? null
        : (0, i.jsxs)("div", {
              ref: f,
              "aria-hidden": h,
              inert: h,
              className: g()(t6.nM, { [t6.Bh]: m && !h, [t6.lR]: x }),
              children: [
                  (0, i.jsx)(t4, { guildId: s, user: v, identity: j, rank: o, lastTrack: c?.last_track ?? null }),
                  null != c &&
                      (0, i.jsxs)("div", {
                          className: g()(t6.Mx, { [t6.dA]: u }),
                          children: [
                              (0, i.jsx)(t2.S, { size: "xxs", color: d.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                              (0, i.jsx)(p.E, {
                                  variant: "text-sm/medium",
                                  color: "text-strong",
                                  children: tS(c.plays),
                              }),
                          ],
                      }),
                  null != c &&
                      !u &&
                      (0, i.jsx)(le, { artists: c.recent_artists ?? [], artistCount: c.artist_count ?? null }),
              ],
          });
}
function t4(e) {
    let { guildId: t, user: l, identity: n, rank: s, lastTrack: r } = e,
        d = a.useRef(null);
    return (0, i.jsx)(ex.A, {
        targetElementRef: d,
        user: l,
        guildId: t,
        children: (e) =>
            (0, i.jsxs)(T.D, {
                ...e,
                innerRef: d,
                className: t6.D_,
                children: [
                    null != s &&
                        (0, i.jsx)(R.A, { children: E.intl.formatToPlainString(eo.default.I4JiAQ, { rank: s }) }),
                    (0, i.jsxs)("span", {
                        className: t6.R3,
                        children: [
                            (0, i.jsx)(w.eu, {
                                size: D._3.SIZE_32,
                                src: l.getAvatarURL(t, (0, D.FT)(D._3.SIZE_32)) ?? void 0,
                                "aria-hidden": !0,
                            }),
                            1 === s &&
                                (0, i.jsx)("span", {
                                    className: t6.ie,
                                    "aria-hidden": !0,
                                    children: (0, i.jsx)(t3.CrownIcon, { size: "xxs", color: "currentColor" }),
                                }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: t6.Dc,
                        children: [
                            (0, i.jsx)(N.D, {
                                variant: "heading-sm/semibold",
                                color: "text-default",
                                lineClamp: 1,
                                children: (0, i.jsx)(M.g, {
                                    name: n.displayName,
                                    colorString: n.colorString,
                                    colorStrings: n.roleColorStrings,
                                }),
                            }),
                            (0, i.jsx)(t5, { track: r }),
                        ],
                    }),
                ],
            }),
    });
}
function t7(e, t) {
    return (0, i.jsx)(p.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: e }, t);
}
function t5(e) {
    let { track: t } = e,
        l = t?.track_title;
    if (null == l) return null;
    let n = t?.artist_name;
    return (0, i.jsx)(p.E, {
        variant: "text-xs/medium",
        color: "text-subtle",
        lineClamp: 1,
        children:
            null != n
                ? E.intl.format(eo.default.QqaqBg, { trackTitle: l, artistName: n, highlightHook: t7 })
                : E.intl.format(eo.default.ZMJ8Mt, { trackTitle: l, highlightHook: t7 }),
    });
}
function t9(e) {
    let { artist: t, notched: l } = e,
        [n, s] = a.useState(!1),
        r = null != t.artist_image_hash ? tg.RQ.IMAGE(t.artist_image_hash) : null;
    return (0, i.jsx)("span", {
        className: t6.sG,
        children: (0, i.jsx)(eE.Ay, {
            mask: l ? eE.l8[24] : eE.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null == r || n
                    ? (0, i.jsx)("span", {
                          className: t6.Ql,
                          children: (0, i.jsx)(tc.MicrophoneIcon, { size: "xxs", color: d.A.colors.ICON_SUBTLE }),
                      })
                    : (0, i.jsx)("img", { className: t6.v2, src: r, alt: "", loading: "lazy", onError: () => s(!0) }),
        }),
    });
}
function le(e) {
    let { artists: t, artistCount: l } = e,
        n = t.slice(0, 3),
        a = (l ?? t.length) - n.length;
    return (0, i.jsx)("div", {
        className: t6.Rh,
        "aria-hidden": !0,
        children:
            n.length > 0 &&
            (0, i.jsxs)("div", {
                className: t6.W$,
                children: [
                    n.map((e, t) =>
                        (0, i.jsx)(
                            t9,
                            { artist: e, notched: a > 0 || t !== n.length - 1 },
                            `${e.artist_external_id}-${e.artist_image_hash}`,
                        ),
                    ),
                    a > 0 &&
                        (0, i.jsx)("span", {
                            className: t6.sG,
                            children: (0, i.jsx)(eE.Ay, {
                                mask: eE.Ay.Masks.SQUIRCLE,
                                width: 24,
                                height: 24,
                                children: (0, i.jsx)("div", {
                                    className: t6.ag,
                                    children: (0, i.jsx)(p.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: E.intl.formatToPlainString(eo.default.bFIg0R, { count: a }),
                                    }),
                                }),
                            }),
                        }),
                ],
            }),
    });
}
var lt = l(897130);
function ll(e) {
    let { guildId: t, isCompact: l, data: n } = e,
        s = n.top_listeners,
        r = (0, y.bG)([W.default], () => W.default.getCurrentUser()?.id),
        d = s.findIndex((e) => e.user_id === r),
        c = -1 === d ? null : s[d],
        o = a.useMemo(() => s.map((e) => e.user_id), [s]);
    (0, U.k6)(t, o);
    let { scrollerRef: u, userRowRef: m, floatingRowPosition: x } = q(),
        h = null != x;
    return n.top_listeners.length < 2
        ? (0, i.jsx)(tZ, {})
        : (0, i.jsxs)("div", {
              className: lt.SY,
              children: [
                  (0, i.jsxs)(C.d_, {
                      className: lt.p_,
                      ref: u,
                      children: [
                          s.map((e, n) => {
                              let a = e.user_id === r;
                              return (0, i.jsx)(
                                  t8,
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
                              (0, i.jsx)(t8, {
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
                              (0, i.jsx)("div", { className: "top" === x ? lt.gN : lt.qV }),
                              (0, i.jsx)("div", {
                                  className: g()(lt.z$, "top" === x ? lt.aG : lt.Ie),
                                  children: (0, i.jsx)(t8, {
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
var ln = l(717683);
function li(e) {
    let { isCompact: t } = e;
    return (0, i.jsxs)("div", {
        className: ln.qV,
        "aria-hidden": !0,
        children: [
            (0, i.jsx)("div", {
                className: g()(ln.Dk, { [ln.yI]: t }),
                children: Array.from({ length: 5 }, (e, t) =>
                    (0, i.jsxs)(
                        "div",
                        {
                            className: ln.Nr,
                            children: [
                                (0, i.jsx)("div", { className: g()(ln.om, ln.xX) }),
                                (0, i.jsxs)("div", {
                                    className: ln.Qq,
                                    children: [
                                        (0, i.jsx)("div", { className: g()(ln.om, ln.DD) }),
                                        (0, i.jsx)("div", { className: g()(ln.om, ln.VA) }),
                                    ],
                                }),
                            ],
                        },
                        t,
                    ),
                ),
            }),
            (0, i.jsxs)("div", {
                className: g()(ln.yp, { [ln.Fl]: t }),
                children: [
                    (0, i.jsx)("div", { className: g()(ln.om, ln.Pl) }),
                    (0, i.jsx)("div", { className: g()(ln.om, ln._0) }),
                ],
            }),
        ],
    });
}
var la = l(432017),
    ls = l(362704),
    lr = l(782134);
function ld(e) {
    let { song: t, isSelected: l, onSelect: n, itemProps: s } = e,
        r = null != t.cover_art_hash ? tg.RQ.IMAGE(t.cover_art_hash) : null,
        d = a.useMemo(
            () => ({
                kind: "song",
                shareUrl: tg.RQ.WEB_OPEN(tg.M0.TRACK, t.track_external_id),
                title: t.track_title ?? t.track_external_id,
                subtitle: t.artist_name,
                imageUrl: r,
            }),
            [t.track_external_id, t.track_title, t.artist_name, r],
        );
    return (0, i.jsxs)("div", {
        className: th.Nr,
        children: [
            (0, i.jsxs)("button", {
                ...s,
                type: "button",
                className: g()(th.MT, { [th.tY]: l }),
                "aria-pressed": l,
                onClick: () => n(t.track_external_id),
                children: [
                    (0, i.jsxs)(tu.R, {
                        src: r,
                        isCircular: !1,
                        FallbackIcon: la.T,
                        children: [
                            l &&
                                (0, i.jsx)("span", {
                                    className: g()(th.Lw, th.Kp),
                                    "aria-hidden": !0,
                                    children: (0, i.jsx)(ls.Y, { size: "md", color: "currentColor" }),
                                }),
                            (0, i.jsxs)("span", {
                                className: g()(th.Lw, th.vY),
                                children: [
                                    (0, i.jsx)(lr.PlayIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                                    (0, i.jsx)(p.E, {
                                        tag: "span",
                                        variant: "text-xs/semibold",
                                        color: "none",
                                        children: tS(t.plays),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    null != t.track_title &&
                        (0, i.jsxs)("span", {
                            className: th.Qq,
                            children: [
                                (0, i.jsx)(p.E, {
                                    className: th.DD,
                                    tag: "span",
                                    variant: "text-sm/semibold",
                                    color: "text-default",
                                    lineClamp: 1,
                                    children: t.track_title,
                                }),
                                null != t.artist_name &&
                                    (0, i.jsx)(p.E, {
                                        className: th.VA,
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
            (0, i.jsx)(tf, { target: d, tabIndex: s.tabIndex }),
        ],
    });
}
var lc = l(196765),
    lo = l(770178);
let lu = { view: "top_songs", isCompact: !1, canShowEmbed: !1, selectedTrackId: null },
    lm = (0, lc.v)(() => ({ byWidgetId: {} }));
function lx(e, t) {
    lm.setState((l) => {
        let n = l.byWidgetId[e] ?? lu;
        return { byWidgetId: { ...l.byWidgetId, [e]: { ...n, ...t } } };
    });
}
function lh(e) {
    return lm((t) => t.byWidgetId[e]?.view ?? lu.view);
}
function lf(e) {
    return lm((t) => t.byWidgetId[e]?.isCompact ?? lu.isCompact);
}
function lg(e) {
    return lm((t) => t.byWidgetId[e]?.selectedTrackId ?? lu.selectedTrackId);
}
function lj(e, t) {
    (lm.getState().byWidgetId[e] ?? lu).view !== t && lx(e, { view: t, selectedTrackId: null });
}
function lv(e) {
    return e.track_external_id;
}
function lp(e) {
    var t;
    let l,
        { guildId: n, widgetId: s, isCompact: r, data: d } = e,
        c = lg(s),
        o = lm((e) => e.byWidgetId[s]?.canShowEmbed ?? lu.canShowEmbed),
        u = a.useCallback(
            (e) => {
                let t;
                return (
                    (t = lm.getState().byWidgetId[s]?.selectedTrackId ?? null),
                    void lx(s, { selectedTrackId: t === e ? null : e })
                );
            },
            [s],
        ),
        m = a.useCallback(
            (e, t) => (0, i.jsx)(ld, { song: e, isSelected: e.track_external_id === c, onSelect: u, itemProps: t }),
            [c, u],
        );
    if (0 === d.ranked_songs.length) return null;
    let x = d.ranked_songs.find((e) => e.track_external_id === c) ?? null,
        h = ty(d.summary);
    return (0, i.jsxs)("div", {
        className: tz.U,
        children: [
            (0, i.jsx)(tL, {
                label: tO(tU.TOP_SONGS),
                items: d.ranked_songs,
                isCompact: r,
                getItemKey: lv,
                renderItem: m,
            }),
            null != x
                ? (0, i.jsx)(tw, { guildId: n, isCompact: r, canShowEmbed: o, song: x })
                : (0, i.jsx)(tR, {
                      isCompact: r,
                      headline: (function (e) {
                          let t = e?.listening_time_ms;
                          if (null == t) return null;
                          let l = Math.round(t / el.A.Millis.MINUTE);
                          return l < 1 ? null : E.intl.formatToPlainString(eo.default["+5b01q"], { minutes: l });
                      })(d.summary),
                      detail:
                          ((t = d.summary),
                          null == (l = t?.listener_count) || l < 1
                              ? null
                              : E.intl.format(eo.default.AzIhRB, { count: l, trend: tI(h), countHook: tA })),
                      trend: h,
                  }),
        ],
    });
}
var l_ = l(597601),
    lN = l(871107);
function lE(e) {
    let { view: t } = e,
        l = d.A.colors.ICON_DEFAULT;
    switch (t) {
        case tU.TOP_ARTISTS:
            return (0, i.jsx)(tc.MicrophoneIcon, { size: "xs", color: l, "aria-hidden": !0 });
        case tU.TOP_LISTENERS:
            return (0, i.jsx)(l_.L, { size: "xs", color: l, "aria-hidden": !0 });
        case tU.TOP_SONGS:
            return (0, i.jsx)(la.T, { size: "xs", color: l, "aria-hidden": !0 });
    }
}
function lA(e) {
    let { widgetId: t, title: l } = e,
        n = lf(t),
        a = lh(t);
    if (!n)
        return (0, i.jsxs)("div", {
            className: lN.$,
            children: [
                (0, i.jsx)("span", {
                    className: lN.K,
                    children: (0, i.jsx)(la.T, { size: "xs", color: d.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
                }),
                (0, i.jsx)(h.q, { children: l }),
            ],
        });
    let s = tP.map((e) => ({ id: e, label: tO(e), icon: (0, i.jsx)(lE, { view: e }) }));
    return (0, i.jsx)(et, {
        navId: "popular-music-view",
        options: s,
        selectedId: a,
        menuLabel: E.intl.string(eo.default.hFYyGU),
        triggerLabel: E.intl.formatToPlainString(eo.default["/sw0JL"], { widgetName: l, viewName: tO(a) }),
        onSelect: (e) => lj(t, e),
    });
}
var lb = l(756936),
    lI = l(890497),
    lS = l(734057),
    ly = l(317525),
    lC = l(576705),
    lT = l(935208),
    lk = l(44167);
l(321073);
var lR = l(485845),
    lw = l(136722),
    lD = l(435183),
    lM = l(155718),
    lL = l(795816),
    lU = l(933958),
    lP = l(574152),
    lG = l(627363),
    lO = l(712440),
    lB = l(733110),
    lW = l(488926),
    lz = l(818023);
async function lF(e) {
    null == eI.A.getApplication(lz.NW) && (await (0, lG.TA)(lz.NW));
    let t = lU.Ay.getEmbeddedActivitiesForChannel(e).every((e) => e.applicationId !== lz.NW);
    return await (0, lL.su)({
        channelId: e,
        applicationId: lz.NW,
        isStart: t,
        embeddedActivitiesManager: (0, lP.A)(),
        renderInFramePool: !0,
    });
}
async function lH(e) {
    let { channel: t, selectedRoleIds: l } = e,
        n = [];
    if (l.length > 0)
        for (let e of (n.push({ id: t.guild_id, type: lM.r2.ROLE, allow: lW.x3, deny: eK.xBc.USE_EMBEDDED_ACTIVITIES }),
        l))
            n.push({ id: e, type: lM.r2.ROLE, allow: eK.xBc.USE_EMBEDDED_ACTIVITIES, deny: lW.x3 });
    let i = await (0, lD.RT)(t.id, { permissionOverwrites: n });
    if (!i.ok) throw i;
}
let lq = [];
var lK = l(344351),
    lY = l(256693),
    l$ = l(812901),
    lQ = l(317608),
    lV = l(953538);
let lX = {
    [r.a.IMAGE_TEXT]: {
        View: function (e) {
            let { widget: t, guildSpaceMode: l, guildId: n } = e,
                { text: a, image_hash: s } = t.config,
                r = "edit" === l ? t.config.image : void 0,
                d = void 0 !== r ? r : null != s ? ts(n, t.id, s) : null;
            return (0, i.jsxs)("div", {
                className: td.kL,
                children: [
                    null != d && (0, i.jsx)("img", { className: td.Sl, src: d, alt: "" }),
                    null != a &&
                        (0, i.jsx)(p.E, {
                            variant: "text-md/normal",
                            color: "text-subtle",
                            className: td.Qq,
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
                v = (0, y.bG)([tl.A], () => tl.A.getGuildId()),
                p = void 0 !== h ? h : null != s.image_hash && null != v ? ts(v, t.id, s.image_hash) : null;
            return (0, i.jsxs)(_.B, {
                gap: 16,
                children: [
                    (0, i.jsx)(e7.k, {
                        label: E.intl.string(E.t.gnwWrx),
                        value: d,
                        onChange: function (e) {
                            (j(null), c(e));
                        },
                        maxLength: 100,
                        showCharacterCount: !0,
                    }),
                    (0, i.jsx)(e6.D, {
                        label: E.intl.string(E.t.X4IxWL),
                        children: (0, i.jsxs)(_.B, {
                            gap: 16,
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            className: tr.B,
                            children: [
                                (0, i.jsxs)(_.B, {
                                    gap: 8,
                                    direction: "horizontal",
                                    children: [
                                        (0, i.jsx)(tt.A, {
                                            variant: "secondary",
                                            text: E.intl.string(E.t["MsUY/S"]),
                                            onChange: function (e) {
                                                (j(null), f(e));
                                            },
                                            maxFileSizeBytes: 0xa00000,
                                            onFileSizeError: () => (0, te.A)(0xa00000),
                                        }),
                                        null != p &&
                                            (0, i.jsx)(o.m, {
                                                text: E.intl.string(E.t.N86XcP),
                                                ariaHidden: !0,
                                                children: (0, i.jsx)(u.K, {
                                                    variant: "critical-secondary",
                                                    icon: e5.TrashIcon,
                                                    onClick: function () {
                                                        (j(null), f(null));
                                                    },
                                                    "aria-label": E.intl.string(E.t.N86XcP),
                                                }),
                                            }),
                                    ],
                                }),
                                null != p && (0, i.jsx)("img", { className: tr.V, src: p, alt: "" }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(e8.f, {
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
                            children: (0, i.jsx)(e9.w, { type: "critical", children: g }),
                        }),
                    (0, i.jsxs)(e4.e, {
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
                                        0 === m.length && !e && (j(E.intl.string(eo.default.zleX9q)), 1))
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
                r = e1({
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
                        ? (0, i.jsx)(b, {})
                        : "error" === l.status
                          ? (0, i.jsx)(I, {})
                          : (0, i.jsx)(e$, { guildId: n, data: l.data })),
                (0, i.jsx)("div", { ref: d, children: t })
            );
        },
        Title: function (e) {
            let { widget: t, hydration: l } = e;
            return l?.status !== "success"
                ? (0, i.jsx)(h.q, { children: t.default_title ?? "" })
                : (0, i.jsx)(h.q, { children: ea(l.data) });
        },
        TitleIcon: function () {
            return (0, i.jsx)(c.TrophyIcon, { size: "xs", color: d.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        },
        HeaderAccessory: function (e) {
            let { hydration: t } = e;
            return t?.status !== "success" || ei(t.data) ? null : (0, i.jsx)(e0, { data: t.data });
        },
        HeaderActions: function (e) {
            let { hydration: t, guildId: l } = e,
                n = t?.status === "success" ? t.data : void 0;
            return null != n && ei(n)
                ? null
                : (0, i.jsx)(o.m, {
                      text: E.intl.string(E.t.dcl9MQ),
                      children: (0, i.jsx)(u.K, {
                          variant: "icon-only",
                          size: "sm",
                          icon: m._,
                          "aria-label": E.intl.string(E.t.dcl9MQ),
                          disabled: null == n,
                          onClick: function () {
                              null != n &&
                                  (x.default.track(eK.HAw.LEADERBOARD_CLICK, {
                                      location: "expand",
                                      guild_id: l,
                                      leaderboard_state: es(n),
                                      leaderboard_view: er({ expanded: !1 }),
                                  }),
                                  (function (e) {
                                      let { guildId: t, data: l } = e,
                                          n = (e) => (0, i.jsx)(e3, { guildId: t, data: l, modalProps: e });
                                      (0, ed.openModalLazy)(() => Promise.resolve(n), {
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
                            lx(t, { isCompact: l < 480, canShowEmbed: l >= 720 });
                        },
                        [t],
                    )),
                    (0, lo.g)(n, s, [t], { fireOnMount: !0 }),
                    a.useEffect(
                        () => () => {
                            lm.setState((e) => {
                                if (null == e.byWidgetId[t]) return e;
                                let l = { ...e.byWidgetId };
                                return (delete l[t], { byWidgetId: l });
                            });
                        },
                        [t],
                    ),
                    n),
                x = lf(c.id),
                h = lh(c.id),
                f = lg(c.id),
                g = "edit" === u,
                j = o?.status === "success" && tG(o.data),
                v = !x && !g && !j,
                p =
                    g || j || o?.status !== "success" || h === tU.TOP_LISTENERS
                        ? null
                        : ((l = o.data),
                          null ==
                          (r =
                              l.ranked_songs.find((e) => e.track_external_id === f && null != e.cover_art_hash)
                                  ?.cover_art_hash ??
                              l.ranked_songs.find((e) => null != e.cover_art_hash)?.cover_art_hash)
                              ? null
                              : tg.RQ.IMAGE(r));
            return (0, i.jsxs)("div", {
                className: lb.rf,
                ref: m,
                children: [
                    null != p && (0, i.jsx)("img", { className: lb.G, src: p, alt: "", "aria-hidden": !0 }),
                    (0, i.jsx)("div", {
                        className: lb.Qs,
                        children: (0, i.jsx)("div", {
                            id: tW(c.id),
                            className: lb.nd,
                            role: v ? "tabpanel" : "group",
                            tabIndex: 0,
                            "aria-label": v ? void 0 : tO(h),
                            "aria-labelledby": v ? tB(c.id, h) : void 0,
                            children: (function () {
                                if (g) return (0, i.jsx)(li, { isCompact: x });
                                if (null == o || "idle" === o.status || "loading" === o.status)
                                    return (0, i.jsx)(b, {});
                                if ("error" === o.status) return (0, i.jsx)(I, {});
                                if (j) return (0, i.jsx)(tX, {});
                                switch (h) {
                                    case tU.TOP_SONGS:
                                        return (0, i.jsx)(lp, {
                                            guildId: d,
                                            widgetId: c.id,
                                            isCompact: x,
                                            data: o.data,
                                        });
                                    case tU.TOP_ARTISTS:
                                        return (0, i.jsx)(tq, { isCompact: x, data: o.data });
                                    case tU.TOP_LISTENERS:
                                        return (0, i.jsx)(ll, { guildId: d, isCompact: x, data: o.data });
                                }
                            })(),
                        }),
                    }),
                    (0, i.jsx)(t1, { isCompact: x }),
                ],
            });
        },
        Title: function (e) {
            let { widget: t, hydration: l, guildSpaceMode: n } = e,
                a = t.default_title ?? E.intl.string(eo.default["5xxUI2"]),
                s = l?.status === "success" && tG(l.data);
            return "edit" === n || s ? (0, i.jsx)(h.q, { children: a }) : (0, i.jsx)(lA, { widgetId: t.id, title: a });
        },
        ViewHeaderTrailing: function (e) {
            let { widget: t, hydration: l, title: n } = e,
                a = lf(t.id),
                s = lh(t.id);
            return a || (l?.status === "success" && tG(l.data))
                ? null
                : (0, i.jsx)($, {
                      label: n,
                      tabs: tP.map((e) => ({ id: e, label: tO(e) })),
                      selectedId: s,
                      panelId: tW(t.id),
                      getTabId: (e) => tB(t.id, e),
                      onSelect: (e) => lj(t.id, e),
                  });
        },
    },
    [r.a.WHITEBOARD]: {
        View: function (e) {
            let t,
                l,
                n = (0, lk.n)(),
                r = (0, y.bG)(
                    [lS.A, lC.A],
                    () => {
                        let e = null != n ? lS.A.getChannel(n) : void 0;
                        return null != e && lC.A.can(eK.xBc.USE_EMBEDDED_ACTIVITIES, e);
                    },
                    [n],
                ),
                d = (0, y.bG)(
                    [lU.Ay],
                    () => {
                        let e = lU.Ay.getCurrentEmbeddedActivity();
                        return null == e ||
                            e.applicationId !== lz.NW ||
                            e.location.kind !== lK.T.GUILD_CHANNEL ||
                            e.location.channel_id !== n
                            ? null
                            : e;
                    },
                    [n],
                ),
                c = (0, y.bG)([lU.Ay], () => lU.Ay.isLaunchingActivity(), []),
                { authResolved: o, isAuthorized: u } =
                    ((t = (0, y.bG)(
                        [lB.default],
                        () => lB.default.getFetchStateForApplication(lz.NW) === lB.FetchState.FETCHED,
                        [],
                    )),
                    (l = (0, y.bG)(
                        [lB.default, eI.A],
                        () => {
                            let e = lB.default.getNewestTokenForApplication(lz.NW);
                            if (null == e) return !1;
                            let t = eI.A.getApplication(lz.NW),
                                l = t?.integrationTypesConfig?.[lR.b.USER_INSTALL]?.oauth2InstallParams?.scopes;
                            if (null == l) return !0;
                            let n = new Set(e.scopes);
                            return l.every((e) => n.has(e));
                        },
                        [],
                    )),
                    a.useEffect(() => {
                        (lB.default.getFetchStateForApplication(lz.NW) === lB.FetchState.NOT_FETCHED &&
                            lO.A.fetch([lz.NW]),
                            null == eI.A.getApplication(lz.NW) && (0, lG.TA)(lz.NW));
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
                ? (0, i.jsx)(_.B, {
                      className: lV.kL,
                      align: "center",
                      justify: "center",
                      children: (0, i.jsx)(s, { alt: "", width: 200 }),
                  })
                : r
                  ? (0, i.jsxs)("div", {
                        className: lV.kL,
                        children: [
                            null != d &&
                                (0, i.jsx)(lQ.A, {
                                    frameId: (0, lY.Ri)(d),
                                    level: l$.A.WithinAppContent,
                                    className: lV.t$,
                                }),
                            null == d &&
                                h &&
                                (0, i.jsx)("div", {
                                    className: lV.P5,
                                    children: (0, i.jsx)(L.$, {
                                        variant: "secondary",
                                        text: E.intl.string(eo.default.PSuly6),
                                        loading: c,
                                        onClick: x,
                                    }),
                                }),
                        ],
                    })
                  : (0, i.jsx)("div", {
                        className: lV.kL,
                        children: (0, i.jsx)("div", {
                            className: lV.m0,
                            children: (0, i.jsx)(p.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: E.intl.string(eo.default["nXc/MQ"]),
                            }),
                        }),
                    });
        },
        Edit: function (e) {
            let { cancel: t } = e,
                l = (0, y.bG)([tl.A], () => tl.A.getGuildId()),
                n = lT.default.castGuildIdAsEveryoneGuildRoleId(l),
                s = (0, lk.n)(),
                r = (0, y.bG)([lS.A], () => (null != s ? lS.A.getChannel(s) : void 0), [s]),
                d = (0, y.bG)([lC.A], () => null != r && lC.A.can(eK.xBc.MANAGE_ROLES, r), [r]),
                c = (0, y.bG)([ly.A], () => (null == l ? lq : ly.A.getSortedRoles(l).filter((e) => e.id !== n)), [
                    l,
                    n,
                ]),
                o = a.useMemo(() => {
                    let e;
                    return null != r
                        ? null != (e = r.permissionOverwrites[r.guild_id]) &&
                          lw.zy(e.deny, eK.xBc.USE_EMBEDDED_ACTIVITIES)
                            ? c
                                  .filter((e) => {
                                      let t = r.permissionOverwrites[e.id];
                                      return null != t && lw.zy(t.allow, eK.xBc.USE_EMBEDDED_ACTIVITIES);
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
                        (await lH({ channel: r, selectedRoleIds: j }), t());
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
                          (0, i.jsx)(lI.Z, {
                              selectionMode: "multiple",
                              label: E.intl.string(eo.default.XXLbfv),
                              description: E.intl.string(eo.default.XrpYIG),
                              placeholder: E.intl.string(eo.default.pp6WeD),
                              options: v,
                              value: j,
                              onSelectionChange: function (e) {
                                  (g(!1), m(e));
                              },
                              disabled: !d || x,
                              fullWidth: !0,
                              wrapTags: !0,
                          }),
                          !d && (0, i.jsx)(e9.w, { type: "warning", children: E.intl.string(eo.default.UPLtlA) }),
                          f &&
                              (0, i.jsx)("div", {
                                  role: "alert",
                                  children: (0, i.jsx)(e9.w, {
                                      type: "critical",
                                      children: E.intl.string(eo.default.xyCJYs),
                                  }),
                              }),
                          (0, i.jsxs)(e4.e, {
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
