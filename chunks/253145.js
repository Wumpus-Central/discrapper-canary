l.d(t, { m: () => ne });
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
    E = l(660183),
    N = l(448492);
function I() {
    return (0, i.jsx)("div", {
        className: N.w,
        children: (0, i.jsx)(j.y, { type: j.y.Type.SPINNING_CIRCLE, "aria-label": E.intl.string(E.t.ZTNur7) }),
    });
}
function b() {
    return (0, i.jsxs)("div", {
        className: N.w,
        role: "alert",
        children: [
            (0, i.jsx)(v.WarningIcon, { size: "md", color: d.A.colors.ICON_MUTED, "aria-hidden": !0 }),
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
    L = l(463930),
    M = l(478016),
    U = l(821609),
    G = l(80682),
    P = l(827827),
    O = l(461213),
    B = l(287809),
    W = l(58703),
    z = l(848966);
function F(e) {
    let { position: t } = e;
    return (0, i.jsx)("div", { className: "top" === t ? z.oT : z.yf });
}
function H(e) {
    let { position: t, children: l } = e;
    return (0, i.jsx)("div", { className: "top" === t ? z.sU : z._u, children: l });
}
var K = l(606072),
    Y = l(775602);
function q() {
    let [e, t] = a.useState(null),
        [l, n] = a.useState(null),
        [i, s] = a.useState("unknown"),
        r = (0, C.bG)([Y.Ay], () => Y.Ay.useReducedMotion);
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
var $ = l(967144),
    Q = l(696451),
    V = l(562153),
    X = l(104129);
function Z(e, t) {
    let { showYouSuffix: l = !1, fallbackName: n } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = (0, C.bG)([B.default], () => B.default.getUser(t), [t]),
        a = (0, C.bG)([Q.Ay], () => Q.Ay.getMember(e, t), [e, t]),
        s = (0, $.gn)(e, t, a?.colorStrings ?? null),
        r = V.Ay.useName(e, void 0, i),
        d = null == i && null != n ? n : r;
    return {
        user: i,
        member: a,
        roleColorStrings: s,
        name: d,
        displayName: l ? E.intl.formatToPlainString(X.default.subXXA, { name: d }) : d,
    };
}
var J = l(885386),
    ee = l(927813),
    et = l(251812),
    el = l(518782);
function en(e) {
    return e.entries.length < 3;
}
function ei(e) {
    return (0, et.K)(en(e) ? void 0 : e.stat).name;
}
function ea(e) {
    let t;
    return en(e)
        ? "empty_state"
        : null != (t = e.computed_at) &&
            new Date(t).getTime() - e.week_start_ts * ee.A.Millis.SECOND >= ee.A.Millis.WEEK
          ? "podium"
          : "in_progress";
}
function es(e) {
    let { expanded: t, column: l } = e;
    return t ? "expanded" : 1 === l ? "mini" : "regular";
}
function er(e) {
    switch (e) {
        case el.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            return "hours_played";
        case el.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return "days_played";
        case el.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return "unique_games_played";
        default:
            return null;
    }
}
l(754674);
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
                l.e("762831"),
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
var eo = l(823353);
function eu(e) {
    let { guildId: t, onActivitySharingClick: l } = e,
        n = J.tz.useSetting(),
        a = J.JG.useSetting().includes(t),
        s = !n || a;
    return (0, i.jsx)(S, {
        className: eo.w,
        title: E.intl.string(X.default.ULK65a),
        body: E.intl.format(s ? X.default.ueza5l : X.default["81PK67"], { memberCount: 3 }),
        action: s
            ? (0, i.jsx)(U.$, {
                  variant: "secondary",
                  size: "sm",
                  text: E.intl.string(X.default.fMbgeZ),
                  onClick: () => {
                      (l(), ec(t));
                  },
              })
            : null,
    });
}
var em = l(342296);
function ex(e) {
    let t = Math.floor(Math.max(e, 0) / ee.A.Seconds.MINUTE),
        l = Math.floor(t / ee.A.Minutes.HOUR),
        n = t % ee.A.Minutes.HOUR;
    return 0 === l
        ? E.intl.formatToPlainString(X.default.DdzvGL, { minutes: n })
        : E.intl.formatToPlainString(X.default["6Y8H0A"], { hours: l, minutes: n });
}
function eh(e, t) {
    switch (t) {
        case el.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return {
                primary: E.intl.formatToPlainString(E.t["k2UNz+"], { days: e.value }),
                secondary: ex(e.time_played_seconds),
            };
        case el.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return {
                primary: E.intl.formatToPlainString(X.default.rgpc8E, { count: e.value }),
                secondary: ex(e.time_played_seconds),
            };
        case el.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            let l, n, i;
            return {
                primary:
                    ((n = Math.floor((l = Math.floor(Math.max(e.value, 0) / ee.A.Millis.MINUTE)) / ee.A.Minutes.HOUR)),
                    (i = l % ee.A.Minutes.HOUR),
                    0 === n
                        ? E.intl.formatToPlainString(X.default.bgQf2H, { minutes: i })
                        : 0 === i
                          ? E.intl.formatToPlainString(X.default["D/HToK"], { hours: n })
                          : E.intl.formatToPlainString(X.default.fvtrHn, { hours: n, minutes: i })),
            };
        default:
            return { primary: "\u2014" };
    }
}
var ef = l(81466),
    eg = l(406810),
    ej = l(687966),
    ev = l(109112),
    ep = l(683063),
    e_ = l(573435),
    eA = l(402860),
    eE = l(396583),
    eN = l(587895),
    eI = l(429913),
    eb = l(280450),
    eS = l(650583),
    eC = l(684343);
function ey(e) {
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
                    case eS.dh.ARROW_RIGHT:
                    case eS.dh.ARROW_DOWN:
                        t = (a + 1) % i.length;
                        break;
                    case eS.dh.ARROW_LEFT:
                    case eS.dh.ARROW_UP:
                        t = (a - 1 + i.length) % i.length;
                        break;
                    case eS.dh.HOME:
                        t = 0;
                        break;
                    case eS.dh.END:
                        t = i.length - 1;
                        break;
                    default:
                        return;
                }
                (e.preventDefault(), i[t]?.focus());
            }
        }, []);
    return (0, i.jsx)("div", {
        className: eC.vR,
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
                    className: eC.Mf,
                    "aria-selected": t,
                    "aria-controls": s,
                    tabIndex: t ? 0 : -1,
                    onClick: () => d(e.id),
                    onKeyDown: c,
                    children: (0, i.jsx)(p.E, {
                        className: eC.Pf,
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
function eT(e, t) {
    return { id: e, name: E.intl.string(X.default.rhDbuQ), iconUrl: void 0, isLoading: t };
}
function eR(e, t) {
    return e.get(t) ?? eT(t, !1);
}
function ek(e, t) {
    return t.map((t) => eR(e, t));
}
function eD(e, t) {
    let l = t.user_id,
        n = (0, C.bG)([eb.default], () => eb.default.getId() === l, [l]);
    return Z(e, l, { showYouSuffix: n, fallbackName: t.name });
}
function ew(e, t) {
    let l = (0, C.bG)([B.default], () => B.default.getCurrentUser()?.id),
        {
            isSharingActivity: n,
            isSharingActivityInGuild: i,
            hasPersonalizationConsent: s,
            hasFetchedConsents: r,
        } = (0, K.T4)(e),
        d = !n || !i || !s;
    return a.useMemo(() => {
        if (!r) return;
        if (null == t || !d || null == l) return t;
        let e = t.entries.filter((e) => e.user_id !== l);
        return e.length === t.entries.length ? t : { ...t, entries: e.map((e, t) => ({ ...e, rank: t + 1 })) };
    }, [t, d, l, r]);
}
(l(539888), l(914173));
var eL = l(518477),
    eM = l(870087);
function eU(e) {
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
        x = eD(t, l),
        h = l.application_ids[0],
        f = null != h ? eR(s, h) : void 0,
        j = l.user_id,
        v = a.useCallback(() => {
            (u?.(),
                (0, eA.openUserProfileModal)({
                    userId: j,
                    guildId: t,
                    tabSection: eL.RP.ACTIVITY,
                    scrollTarget: eL.bk.RECENT_ACTIVITY,
                }));
        }, [u, j, t]);
    return (0, i.jsxs)("div", {
        ref: o,
        "aria-hidden": c,
        inert: c,
        className: g()(eM.nM, { [eM.Bh]: r && !c, [eM.lR]: d }),
        children: [
            (0, i.jsx)(eG, { guildId: t, entry: l, identity: x, lastPlayedGame: f, onClick: u }),
            (0, i.jsx)(eB, { entry: l, stat: n, width: m, onClick: v }),
            (0, i.jsx)(eH, {
                name: x.name,
                applicationIds: l.application_ids,
                applicationCount: l.application_count,
                games: s,
                onClick: v,
            }),
        ],
    });
}
function eG(e) {
    let { guildId: t, entry: l, identity: n, lastPlayedGame: s, onClick: r } = e,
        d = a.useRef(null),
        c = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(eP, { rank: l.rank }),
                (0, i.jsx)(D.eu, {
                    size: w._3.SIZE_32,
                    src: n.user?.getAvatarURL(t, (0, w.FT)(w._3.SIZE_32)) ?? void 0,
                    className: eM.my,
                    "aria-hidden": !0,
                }),
                (0, i.jsxs)("div", {
                    className: eM.Dc,
                    children: [
                        (0, i.jsx)(A.D, {
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            lineClamp: 1,
                            children: (0, i.jsx)(L.g, {
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
                                children: E.intl.formatToPlainString(X.default.YuNVPY, { gameName: s.name }),
                            }),
                    ],
                }),
            ],
        });
    return null == n.user
        ? (0, i.jsx)("div", { className: eM.D_, children: c })
        : (0, i.jsx)(em.A, {
              targetElementRef: d,
              user: n.user,
              guildId: t,
              children: (e) =>
                  (0, i.jsx)(T.D, {
                      ...e,
                      innerRef: d,
                      className: g()(eM.D_, eM.FB),
                      onClick: (t) => {
                          (r?.(), e.onClick(t));
                      },
                      children: c,
                  }),
          });
}
function eP(e) {
    let { rank: t } = e,
        l = E.intl.formatToPlainString(X.default.I4JiAQ, { rank: t });
    switch (t) {
        case 1:
            return (0, i.jsx)("div", {
                className: eM.Tm,
                "aria-label": l,
                children: (0, i.jsx)("div", { className: eM.Xe }),
            });
        case 2:
            return (0, i.jsx)("div", {
                className: eM.Tm,
                "aria-label": l,
                children: (0, i.jsx)("div", { className: eM.XQ }),
            });
        case 3:
            return (0, i.jsx)("div", {
                className: eM.Tm,
                "aria-label": l,
                children: (0, i.jsx)("div", { className: eM.c9 }),
            });
        default:
            return (0, i.jsxs)("div", {
                className: eM.mH,
                children: [
                    (0, i.jsx)(k.A, { children: l }),
                    (0, i.jsx)(p.E, {
                        variant: "text-sm/semibold",
                        color: "text-muted",
                        "aria-hidden": !0,
                        children: t,
                    }),
                ],
            });
    }
}
function eO(e) {
    let { stat: t } = e;
    switch (t) {
        case el.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return (0, i.jsx)(ef.CalendarIcon, { size: "xxs", color: d.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case el.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED:
            return (0, i.jsx)(eg.ClockIcon, { size: "xxs", color: d.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        case el.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return (0, i.jsx)(ej.GameControllerIcon, { size: "xxs", color: d.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        default:
            return null;
    }
}
function eB(e) {
    let { entry: t, stat: l, width: n, onClick: a } = e,
        { primary: s, secondary: r } = eh(t, l);
    return (0, i.jsxs)(T.D, {
        className: eM.TH,
        style: null != n ? { width: n } : void 0,
        "aria-label": E.intl.string(X.default.o6mBdl),
        onClick: a,
        children: [
            (0, i.jsxs)("div", {
                className: eM.bf,
                children: [
                    (0, i.jsx)(eO, { stat: l }),
                    (0, i.jsx)(p.E, { variant: "text-sm/medium", color: "text-subtle", children: s }),
                ],
            }),
            null != r && (0, i.jsx)(p.E, { variant: "text-xs/medium", color: "text-muted", children: r }),
        ],
    });
}
function eW(e) {
    let { game: t, notched: l } = e;
    return (0, i.jsx)("span", {
        className: eM.rO,
        "aria-hidden": !0,
        children: (0, i.jsx)(e_.Ay, {
            mask: l ? e_.l8[24] : e_.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null != t.iconUrl
                    ? (0, i.jsx)("img", { className: eM.Gt, src: t.iconUrl, alt: "", "aria-hidden": !0 })
                    : (0, i.jsx)("span", {
                          className: eM.ct,
                          "aria-hidden": !0,
                          children: !t.isLoading && (0, i.jsx)(ev._, { size: "xxs", color: d.A.colors.ICON_SUBTLE }),
                      }),
        }),
    });
}
function ez(e) {
    let { played: t, totalCount: l } = e,
        n = t.slice(0, 2),
        a = l - n.length;
    return (0, i.jsxs)("div", {
        className: eM.Nw,
        children: [
            n.map((e, t) => (0, i.jsx)(eW, { game: e, notched: a > 0 || t !== n.length - 1 }, `${e.id}-${t}`)),
            a > 0
                ? (0, i.jsx)("span", {
                      className: eM.rO,
                      children: (0, i.jsx)(e_.Ay, {
                          mask: e_.Ay.Masks.SQUIRCLE,
                          width: 24,
                          height: 24,
                          children: (0, i.jsx)("div", {
                              className: eM.p0,
                              children: (0, i.jsx)(p.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-subtle",
                                  children: E.intl.formatToPlainString(X.default.JiMMEd, { count: a }),
                              }),
                          }),
                      }),
                  })
                : null,
        ],
    });
}
function eF(e) {
    let { played: t, totalCount: l, children: n } = e;
    return (0, i.jsx)(ep.u, {
        body:
            0 === t.length
                ? E.intl.string(X.default["7CrlYb"])
                : 1 === t.length
                  ? E.intl.formatToPlainString(X.default.dbNpK0, { firstGame: t[0].name })
                  : 2 === t.length && 2 === l
                    ? E.intl.formatToPlainString(X.default.tqVg4M, { firstGame: t[0].name, secondGame: t[1].name })
                    : E.intl.formatToPlainString(X.default.bxcrSz, {
                          firstGame: t[0].name,
                          secondGame: t[1].name,
                          otherCount: l - 2,
                      }),
        asset: t.length > 0 ? (0, i.jsx)(ez, { played: t, totalCount: t.length }) : void 0,
        assetSize: t.length > 1 ? 43 : 24,
        children: n,
    });
}
function eH(e) {
    let { name: t, applicationIds: l, applicationCount: n, games: a, onClick: s } = e,
        r = ek(a, l);
    return (0, i.jsx)("div", {
        className: eM.ag,
        children: (0, i.jsx)(eF, {
            played: r,
            totalCount: n,
            children: (0, i.jsx)(T.D, {
                className: g()(eM.Nw, eM.Dz),
                "aria-label": E.intl.formatToPlainString(X.default.o6mBdl, { name: t }),
                onClick: s,
                children: (0, i.jsx)(ez, { played: r, totalCount: n }),
            }),
        }),
    });
}
var eK = l(189043);
function eY(e) {
    let { guildId: t, entries: l, stat: n, games: a, currentUserEntry: s, currentUserPillarRef: r, onClick: d } = e,
        c = {
            1: { column: eK.HC, pillar: eK.P5 },
            2: { column: eK.th, pillar: eK.Vk },
            3: { column: eK.Ou, pillar: eK.el },
        };
    return (0, i.jsx)("div", {
        className: eK.pI,
        role: "list",
        "aria-label": E.intl.string(X.default.wKXLfQ),
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
        h = eD(t, l),
        { primary: f } = eh(l, d),
        j = 1 === n ? w._3.SIZE_48 : w._3.SIZE_40,
        v = a.useRef(null),
        _ = g()(eK.dR, { [eK.m$]: 1 === n, [eK.wd]: 2 === n, [eK.p0]: 3 === n }),
        E = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: eK.R3,
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
                    className: g()(eK.DX, r),
                    children: [
                        (0, i.jsx)(A.D, {
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            lineClamp: 1,
                            className: eK.IY,
                            children: (0, i.jsx)(L.g, {
                                name: h.displayName,
                                colorString: h.member?.colorString ?? null,
                                colorStrings: h.roleColorStrings,
                            }),
                        }),
                        (0, i.jsx)(eF, {
                            played: x,
                            totalCount: l.application_count,
                            children: (0, i.jsx)(p.E, {
                                variant: "text-xs/medium",
                                color: "text-default",
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
                ? (0, i.jsx)(em.A, {
                      targetElementRef: v,
                      user: h.user,
                      guildId: t,
                      children: (e) =>
                          (0, i.jsx)(T.D, {
                              ...e,
                              className: eK.fs,
                              innerRef: v,
                              onClick: (t) => {
                                  (m?.(), e.onClick(t));
                              },
                              children: E,
                          }),
                  })
                : (0, i.jsx)("div", { className: eK.fs, children: E }),
    });
}
var e$ = l(652215),
    eQ = l(219047);
function eV(e) {
    let t,
        l,
        n,
        { guildId: s, data: r, inModal: d = !1, column: c } = e,
        { stat: o, entries: u } = r,
        m = (0, C.bG)([B.default], () => B.default.getCurrentUser()?.id),
        h = a.useMemo(() => u.find((e) => e.user_id === m) ?? null, [u, m]),
        f = a.useMemo(() => {
            let e = u.slice(0, 20);
            return null == h || e.includes(h) ? e : [...e, h];
        }, [u, h]),
        j = a.useMemo(() => Array.from(new Set(f.map((e) => e.user_id))), [f]);
    (0, G.k6)(s, j);
    let v = er(o),
        p =
            ((t = a.useMemo(() => Array.from(new Set(f.flatMap((e) => e.application_ids))), [f])),
            (l = (0, eI.A)(t)),
            (n = (0, C.yK)([eN.A], () => t.map((e) => eN.A.didFetchingApplicationFail(e)))),
            a.useMemo(() => {
                let e = new Map();
                return (
                    t.forEach((t, i) => {
                        let a = l[i];
                        e.set(
                            t,
                            null != a
                                ? { id: t, name: a.name, iconUrl: a.getIconURL(64) ?? void 0, isLoading: !1 }
                                : eT(t, !n[i]),
                        );
                    }),
                    e
                );
            }, [t, l, n])),
        _ = en(r),
        A = ea(r),
        N = "podium" === A,
        b = es({ expanded: d, column: c }),
        S = [f[0], f[1], f[2]],
        { scrollerRef: R, scrollerNode: k, userRowRef: D, floatingRowPosition: w, scrollToUserRow: L } = q(),
        M = null == h && null != m,
        U = null != w,
        P = a.useMemo(() => {
            let e = null == h || f.includes(h) ? f : [...f, h];
            return e.length > 0 ? e : f;
        }, [f, h]),
        { metricMeasureRef: O, metricWidth: W } = (function () {
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
        z = (0, i.jsx)("div", {
            ref: O,
            className: eQ.V$,
            "aria-hidden": !0,
            children: P.map((e) => (0, i.jsx)(eB, { entry: e, stat: o }, e.user_id)),
        });
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
                    x.default.track(e$.HAw.LEADERBOARD_END_IMPRESSION, {
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
        leaderboardLength: _ ? 0 : f.length,
        leaderboardState: A,
        leaderboardView: b,
        metric: v,
        scrollerNode: _ ? null : k,
        isEmpty: _,
    });
    let K = a.useCallback(
            (e) => {
                x.default.track(e$.HAw.LEADERBOARD_CLICK, {
                    location: e,
                    guild_id: s,
                    leaderboard_state: A,
                    leaderboard_view: b,
                    metric: v,
                });
            },
            [s, A, b, v],
        ),
        Y = a.useCallback(
            (e) => {
                let t = e === h;
                return (0, i.jsx)(
                    eU,
                    {
                        guildId: s,
                        entry: e,
                        stat: o,
                        games: p,
                        isCurrentUser: t,
                        shouldDimForCurrentUser: t && U,
                        rowRef: t ? D : void 0,
                        onClick: () => K("row"),
                        metricWidth: W ?? void 0,
                    },
                    `${e.rank}-${e.user_id}`,
                );
            },
            [U, h, p, s, o, D, K, W],
        );
    return _
        ? (0, i.jsx)("div", {
              className: eQ.Cm,
              children: (0, i.jsx)(eu, { guildId: s, onActivitySharingClick: () => K("activity_sharing") }),
          })
        : null == W
          ? (0, i.jsxs)("div", { className: eQ.rf, children: [z, (0, i.jsx)(I, {})] })
          : (0, i.jsxs)("div", {
                className: eQ.rf,
                children: [
                    z,
                    (0, i.jsxs)("div", {
                        className: eQ.SY,
                        children: [
                            (0, i.jsxs)(y.d_, {
                                className: g()(eQ.p_, { [eQ.zE]: d, [eQ.Ng]: M }),
                                ref: R,
                                children: [
                                    N &&
                                        (0, i.jsx)(eY, {
                                            guildId: s,
                                            entries: S,
                                            stat: o,
                                            games: p,
                                            currentUserEntry: h,
                                            currentUserPillarRef: D,
                                            onClick: () => K("podium"),
                                        }),
                                    f.map(Y),
                                ],
                            }),
                            (null != h && null != w) || M
                                ? (0, i.jsx)(F, { position: "top" !== w || M ? "bottom" : "top" })
                                : null,
                            null != h &&
                                null != w &&
                                (0, i.jsx)(H, {
                                    position: w,
                                    children: (0, i.jsx)(T.D, {
                                        className: eQ.Po,
                                        "aria-label": E.intl.string(X.default.d0Z8kd),
                                        onClick: L,
                                        children: (0, i.jsx)(eU, {
                                            guildId: s,
                                            entry: h,
                                            stat: o,
                                            games: p,
                                            isCurrentUser: !0,
                                            shouldDimForCurrentUser: !1,
                                            isFloating: !0,
                                            onClick: () => K("row"),
                                            metricWidth: W ?? void 0,
                                        }),
                                    }),
                                }),
                            M && (0, i.jsx)(eZ, { guildId: s, onActivitySharingClick: () => K("activity_sharing") }),
                        ],
                    }),
                    (0, i.jsx)(eX, { computedAt: r.computed_at, inModal: d }),
                ],
            });
}
function eX(e) {
    let { computedAt: t, inModal: l } = e,
        n = (0, i.jsxs)("div", {
            className: eQ.z8,
            children: [
                (0, i.jsx)(R.RefreshIcon, { size: "xxs", color: d.A.colors.ICON_SUBTLE, "aria-hidden": !0 }),
                (0, i.jsx)(p.E, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: E.intl.string(X.default["/nma+a"]),
                }),
            ],
        });
    return null == t
        ? (0, i.jsx)("div", { className: eQ.qr, children: n })
        : (0, i.jsx)("div", {
              className: g()(eQ.qr, { [eQ.zE]: l }),
              tabIndex: 0,
              children: (0, i.jsx)(o.m, {
                  text: E.intl.formatToPlainString(X.default["1bt50t"], {
                      timestamp: (0, W.mk)(new Date(t)).toLowerCase(),
                  }),
                  position: "bottom",
                  children: n,
              }),
          });
}
function eZ(e) {
    let { guildId: t, onActivitySharingClick: l } = e,
        { isSharingActivity: n, isSharingActivityInGuild: s, hasPersonalizationConsent: r } = (0, K.T4)(t),
        c = (0, C.bG)([O.A], () => O.A.getStatus() === e$.clD.INVISIBLE),
        o = E.intl.string(X.default.toxuHd),
        u = !1,
        m = !1;
    n && s
        ? r
            ? c && ((o = E.intl.string(X.default.PTDDhW)), (m = !0))
            : ((o = E.intl.string(X.default.mTARYx)), (u = !0))
        : ((o = E.intl.string(X.default["8y885d"])), (u = !0));
    let [x] = a.useState(u),
        [h] = a.useState(m),
        f = !u && !m && x,
        g = !u && !m && h;
    g ? (o = E.intl.string(X.default.cgRADC)) : f && (o = E.intl.string(X.default.dqYuni));
    let {
        user: j,
        member: v,
        name: _,
        roleColorStrings: N,
    } = Z(
        t,
        (0, C.bG)([B.default], () => B.default.getCurrentUser()?.id ?? ""),
    );
    return null == j
        ? null
        : (0, i.jsxs)("div", {
              className: eQ.Xx,
              children: [
                  (0, i.jsxs)("div", {
                      className: eQ.kd,
                      children: [
                          (0, i.jsxs)("div", {
                              className: eQ.nk,
                              children: [
                                  (0, i.jsx)(k.A, { children: E.intl.string(X.default["oHdW+u"]) }),
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
                              src: j.getAvatarURL(t, (0, w.FT)(w._3.SIZE_32)) ?? void 0,
                              className: eQ.SA,
                              "aria-hidden": !0,
                              status: c ? e$.clD.INVISIBLE : void 0,
                          }),
                          (0, i.jsxs)("div", {
                              className: eQ.ko,
                              children: [
                                  (0, i.jsx)(A.D, {
                                      variant: "heading-sm/semibold",
                                      color: "text-default",
                                      lineClamp: 1,
                                      children: (0, i.jsx)(L.g, {
                                          name: _,
                                          colorString: v?.colorString ?? null,
                                          colorStrings: N,
                                      }),
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: eQ.LF,
                                      children: [
                                          f || g
                                              ? (0, i.jsx)(M.U, {
                                                    size: "xs",
                                                    color: d.A.colors.ICON_FEEDBACK_POSITIVE,
                                                    "aria-hidden": !0,
                                                })
                                              : null,
                                          (0, i.jsx)(p.E, {
                                              variant: "text-xs/medium",
                                              color: "text-subtle",
                                              children: o,
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                      ],
                  }),
                  u &&
                      (0, i.jsx)("div", {
                          className: eQ.rl,
                          children: (0, i.jsx)(U.$, {
                              variant: "secondary",
                              size: "sm",
                              text: E.intl.string(X.default.fMbgeZ),
                              onClick: () => {
                                  (l(), ec(t));
                              },
                          }),
                      }),
                  m &&
                      !u &&
                      (0, i.jsx)(U.$, {
                          variant: "secondary",
                          size: "sm",
                          text: E.intl.string(E.t.fwPurU),
                          onClick: () => {
                              (0, P.A)({ nextStatus: e$.clD.ONLINE, prevStatus: e$.clD.INVISIBLE });
                          },
                      }),
              ],
          });
}
var eJ = l(224640),
    e0 = l(20742),
    e1 = l(515746);
function e2(e) {
    let { data: t } = e,
        l = (0, et.K)(t.stat),
        {
            ended: n,
            endDate: s,
            badgeLabel: r,
        } = (function (e) {
            let t = (e + ee.A.Seconds.WEEK) * ee.A.Millis.SECOND,
                [l, n] = a.useState(() => Date.now()),
                i = t - l,
                s = i <= 0,
                r = i - (Math.ceil(i / ee.A.Millis.DAY) - 1) * ee.A.Millis.DAY;
            return (
                (0, eE.A)(() => n(Date.now()), s ? null : r),
                a.useMemo(
                    () => ({
                        ended: s,
                        endDate: new Date(t),
                        badgeLabel: s
                            ? E.intl.string(X.default["J8r/7L"])
                            : E.intl.formatToPlainString(X.default["PuaR+2"], { days: Math.ceil(i / ee.A.Millis.DAY) }),
                    }),
                    [s, t, i],
                )
            );
        })(t.week_start_ts),
        d = J.PZ.useSetting(),
        c = 2 > (0, W.m_)(s, new Date()) ? (0, W.mk)(s, !1, d).toLowerCase() : (0, W.i$)(s, "L LT", d).toLowerCase(),
        o = n
            ? E.intl.format(X.default.kG9XmM, { endedAt: c, nextStatName: (0, et.K)(t.next_stat).name })
            : E.intl.format(X.default["X+VLqi"], { statQuestion: l.question, endsAt: c });
    return (0, i.jsx)(ep.u, {
        title: l.name,
        body: o,
        position: "top",
        children: (0, i.jsx)("div", {
            className: e1.q,
            tabIndex: 0,
            children: (0, i.jsx)(p.E, {
                variant: "text-xs/semibold",
                color: n ? "text-muted" : "text-brand",
                children: r,
            }),
        }),
    });
}
function e3(e) {
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
                e$.HAw.LEADERBOARD_HOVER,
                {
                    guild_id: n.guildId,
                    duration: Math.round(l) / 1e3,
                    leaderboard_state: ea(n.data),
                    leaderboard_view: es({ expanded: n.expanded, column: n.column }),
                    metric: er(n.data.stat),
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
var e6 = l(460614);
function e8(e) {
    let { guildId: t, data: l, modalProps: n } = e,
        a = ew(t, l),
        s = e3({ guildId: t, data: a, expanded: !0 });
    return null == a
        ? null
        : (0, i.jsx)(eJ.d, {
              size: "lg",
              "aria-label": ei(a),
              ...n,
              children: (0, i.jsxs)("div", {
                  ref: s,
                  children: [
                      (0, i.jsxs)("div", {
                          className: e6.wx,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: e6.LD,
                                  children: [
                                      (0, i.jsx)(c.TrophyIcon, {
                                          size: "xs",
                                          color: d.A.colors.ICON_SUBTLE,
                                          "aria-hidden": !0,
                                      }),
                                      (0, i.jsx)(A.D, {
                                          variant: "heading-sm/medium",
                                          className: e6.DD,
                                          children: ei(a),
                                      }),
                                      (0, i.jsx)(e2, { data: a }),
                                  ],
                              }),
                              (0, i.jsx)(e0.s_, {}),
                          ],
                      }),
                      (0, i.jsx)("div", {
                          className: e6.rf,
                          children: (0, i.jsx)(eV, { guildId: t, data: a, inModal: !0 }),
                      }),
                  ],
              }),
          });
}
var e4 = l(452027),
    e7 = l(103557),
    e5 = l(825484),
    e9 = l(95477),
    te = l(241326),
    tt = l(683071),
    tl = l(2553),
    tn = l(405810),
    ti = l(967198),
    ta = l(488428),
    ts = l(776231);
let tr = (0, l(676279).cy)();
function td(e, t, l) {
    let n = l.startsWith("a_"),
        i = n ? (tr ? "webp" : "gif") : tr ? "webp" : "jpg",
        { CDN_HOST: a, API_ENDPOINT: s } = window.GLOBAL_ENV,
        r = e$.Rsh.GUILD_SPACE_IMAGE_TEXT_WIDGET_IMAGE(e, t, l, i),
        d = null != a ? `https://${a}${r}` : location.protocol + s + r,
        c = { size: (0, ts.kr)(500 * (0, ts.mZ)()) };
    return (
        "jpg" === i && (c.quality = "lossless"), "webp" === i && n && (c.animated = !0), (d += `?${ta.stringify(c)}`)
    );
}
var tc = l(868602),
    to = l(445187),
    tu = l(831544),
    tm = l(28863),
    tx = l(148166),
    th = l(427209),
    tf = l(294454),
    tg = l(605810);
function tj(e) {
    let { target: t, tabIndex: n } = e;
    return (0, i.jsx)("div", {
        className: tg.ql,
        children: (0, i.jsx)(o.m, {
            text: E.intl.string(E.t.RDE0Sc),
            ariaHidden: !0,
            children: (0, i.jsx)(u.K, {
                icon: th.A,
                size: "sm",
                variant: "overlay-secondary",
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
                                l.e("457428"),
                                l.e("552653"),
                                l.e("311580"),
                                l.e("174554"),
                                l.e("116815"),
                                l.e("82389"),
                                l.e("132502"),
                                l.e("230029"),
                                l.e("891089"),
                                l.e("861973"),
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
                                l.e("272915"),
                                l.e("162182"),
                                l.e("327545"),
                                l.e("860640"),
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
                                l.e("206516"),
                                l.e("163466"),
                                l.e("227652"),
                                l.e("234017"),
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
                                l.e("501546"),
                                l.e("20409"),
                                l.e("56347"),
                                l.e("424199"),
                                l.e("496818"),
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
                                l.e("117268"),
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
                                l.e("757238"),
                                l.e("141432"),
                                l.e("92678"),
                                l.e("475166"),
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
                                l.e("498215"),
                                l.e("482861"),
                                l.e("588940"),
                                l.e("252264"),
                                l.e("960478"),
                                l.e("770697"),
                                l.e("534822"),
                                l.e("790244"),
                                l.e("593176"),
                                l.e("836545"),
                                l.e("273232"),
                                l.e("466322"),
                                l.e("894747"),
                                l.e("858514"),
                                l.e("344265"),
                                l.e("121435"),
                                l.e("592731"),
                                l.e("53374"),
                                l.e("170653"),
                                l.e("784041"),
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
                                l.e("772493"),
                                l.e("390098"),
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
                                l.e("488990"),
                                l.e("469187"),
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
                                l.e("130674"),
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
                                l.e("398082"),
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
                                l.e("243100"),
                                l.e("982699"),
                                l.e("250478"),
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
                        { stackingBehavior: "stack", modalKey: tf.aU },
                    );
                },
            }),
        }),
    });
}
var tv = l(272984);
function tp(e) {
    let { artist: t, itemProps: l } = e,
        n = null != t.artist_image_hash ? tv.RQ.IMAGE(t.artist_image_hash) : null,
        s = a.useMemo(
            () => ({
                kind: "artist",
                shareUrl: tv.RQ.WEB_OPEN(tv.M0.ARTIST, t.artist_external_id),
                title: t.artist_name ?? t.artist_external_id,
                subtitle: null,
                imageUrl: n,
            }),
            [t.artist_external_id, t.artist_name, n],
        ),
        r = (0, i.jsx)(tx.R, { src: n, isCircular: !0, FallbackIcon: tu.MicrophoneIcon });
    return null == t.artist_name
        ? (0, i.jsx)("div", { className: tg.Nr, children: (0, i.jsx)("div", { ...l, className: tg.MT, children: r }) })
        : (0, i.jsxs)("div", {
              className: tg.Nr,
              children: [
                  (0, i.jsxs)(tm.Anchor, {
                      ...l,
                      className: tg.MT,
                      href: s.shareUrl,
                      useDefaultUnderlineStyles: !1,
                      children: [
                          r,
                          (0, i.jsx)("span", {
                              className: tg.Qq,
                              children: (0, i.jsx)(p.E, {
                                  className: tg.DD,
                                  tag: "span",
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  lineClamp: 2,
                                  children: t.artist_name,
                              }),
                          }),
                      ],
                  }),
                  (0, i.jsx)(tj, { target: s, tabIndex: l.tabIndex }),
              ],
          });
}
var t_ = l(872351),
    tA = l(708988),
    tE = l(104171),
    tN = l(628137);
let tI = "none",
    tb = (e, t) => (0, i.jsx)(p.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: e }, t);
function tS(e) {
    return e;
}
function tC(e) {
    return e?.direction ?? tI;
}
function ty(e) {
    if (null == e) return null;
    let t = Math.round(Math.abs(e));
    return 0 === t
        ? null
        : { direction: e > 0 ? "up" : "down", label: E.intl.formatToPlainString(X.default["h+LUpk"], { percent: t }) };
}
function tT(e) {
    return ty(null != e.plays_trend_pct ? 100 * e.plays_trend_pct : null);
}
var tR = l(633099);
function tk(e) {
    let { trend: t } = e,
        l = "up" === t.direction ? t_.z : tA.M;
    return (0, i.jsxs)("span", {
        className: tR.GW,
        children: [
            (0, i.jsx)(l, {
                className: g()({ [tR.$J]: "up" === t.direction, [tR.KW]: "down" === t.direction }),
                size: "xxs",
                color: "currentColor",
                "aria-hidden": !0,
            }),
            (0, i.jsx)(p.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: t.label }),
        ],
    });
}
function tD(e) {
    var t;
    let { guildId: l, song: n } = e,
        s = a.useMemo(() => (n.facepile_user_ids ?? []).slice(0, 3), [n.facepile_user_ids]);
    (0, G.k6)(l, s);
    let r = (0, C.yK)([B.default], () => s.map((e) => B.default.getUser(e)), [s]),
        d = a.useMemo(() => r.filter((e) => null != e), [r]);
    if (0 === d.length) return null;
    let c = n.unique_listeners - d.length;
    return (0, i.jsx)("span", {
        className: tR.WM,
        role: "group",
        "aria-label":
            ((t = n.unique_listeners),
            E.intl.formatToPlainString(X.default.AzIhRB, { count: t, trend: tI, countHook: tS })),
        children: (0, i.jsx)(tE.Ay, {
            users: d,
            guildId: l,
            size: tE.DN.SIZE_24,
            max: d.length,
            count: n.unique_listeners,
            hideMoreUsers: c <= 0,
            renderMoreUsers: () =>
                (0, i.jsx)("span", {
                    className: tR.ju,
                    children: (0, i.jsx)(p.E, {
                        tag: "span",
                        variant: "text-sm/semibold",
                        color: "text-subtle",
                        children: E.intl.formatToPlainString(X.default.bFIg0R, { count: c }),
                    }),
                }),
        }),
    });
}
function tw(e) {
    let { trackExternalId: t } = e,
        [l, n] = a.useState(!1);
    return (0, i.jsxs)("div", {
        className: tR.aF,
        children: [
            (0, i.jsx)(tN.A, {
                resourceType: tv.M0.TRACK,
                resourceId: t,
                onLoad: () => n(!0),
                allowEncryptedMedia: !0,
            }),
            !l && (0, i.jsx)("div", { className: tR.Ls, "aria-hidden": !0 }),
        ],
    });
}
function tL(e) {
    let { isCompact: t, headline: l, detail: n, trend: a } = e;
    return null == l && null == n && null == a
        ? null
        : (0, i.jsx)("div", {
              className: g()(tR.yp, { [tR.Fl]: t }),
              children: (0, i.jsxs)("div", {
                  className: tR.QD,
                  children: [
                      null != l &&
                          (0, i.jsx)(p.E, {
                              tag: "div",
                              variant: "heading-xl/semibold",
                              color: "text-default",
                              children: l,
                          }),
                      (0, i.jsxs)("div", {
                          className: tR._0,
                          children: [
                              null != n &&
                                  (0, i.jsx)(p.E, {
                                      tag: "span",
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: n,
                                  }),
                              null != a && (0, i.jsx)(tk, { trend: a }),
                          ],
                      }),
                  ],
              }),
          });
}
function tM(e) {
    var t;
    let { guildId: l, isCompact: n, canShowEmbed: a, song: s } = e,
        r = ty(s.plays_change_percent);
    return (0, i.jsxs)("div", {
        className: g()(tR.yp, { [tR.Fl]: n }),
        children: [
            a && (0, i.jsx)(tw, { trackExternalId: s.track_external_id }, s.track_external_id),
            (0, i.jsxs)("div", {
                className: g()(tR.QD, tR.rk),
                children: [
                    (0, i.jsx)(tD, { guildId: l, song: s }),
                    (0, i.jsxs)("div", {
                        className: tR._0,
                        children: [
                            (0, i.jsx)(p.E, {
                                tag: "span",
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                children:
                                    ((t = s.plays),
                                    E.intl.format(X.default["7hHUIS"], { count: t, trend: tC(r), countHook: tb })),
                            }),
                            null != r && (0, i.jsx)(tk, { trend: r }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var tU = l(197935),
    tG = l(915734);
function tP(e) {
    let { label: t, items: l, isCompact: n, getItemKey: a, renderItem: s } = e;
    return (0, i.jsx)("div", {
        className: g()(tG.Dk, { [tG.yI]: n }),
        children: (0, i.jsx)(tU.A, {
            items: l,
            getItemKey: a,
            renderItem: s,
            gap: 8,
            edgeFade: 40,
            actionsClassName: tG.o1,
            "aria-label": t,
        }),
    });
}
var tO = (((n = {}).TOP_SONGS = "top_songs"), (n.TOP_ARTISTS = "top_artists"), (n.TOP_LISTENERS = "top_listeners"), n);
let tB = ["top_songs", "top_artists", "top_listeners"];
function tW(e) {
    return 1 > e.ranked_songs.reduce((e, t) => e + t.plays, 0);
}
function tz(e) {
    switch (e) {
        case "top_songs":
            return E.intl.string(X.default.KgeEtx);
        case "top_artists":
            return E.intl.string(X.default.RYxWTS);
        case "top_listeners":
            return E.intl.string(X.default.KO73KB);
    }
}
function tF(e, t) {
    return `popular-music-tab-${e}-${t}`;
}
function tH(e) {
    return `popular-music-panel-${e}`;
}
var tK = l(742452);
function tY(e) {
    return e.artist_external_id;
}
function tq(e, t) {
    return (0, i.jsx)(tp, { artist: e, itemProps: t });
}
function t$(e) {
    let { isCompact: t, data: l } = e;
    if (0 === l.ranked_artists.length) return null;
    let n = tT(l);
    return (0, i.jsxs)("div", {
        className: tK.U,
        children: [
            (0, i.jsx)(tP, {
                label: tz(tO.TOP_ARTISTS),
                items: l.ranked_artists,
                isCompact: t,
                getItemKey: tY,
                renderItem: tq,
            }),
            (0, i.jsx)(tL, {
                isCompact: t,
                headline:
                    l.distinct_songs < 1
                        ? null
                        : E.intl.formatToPlainString(X.default.W8etVA, { count: l.distinct_songs }),
                detail:
                    l.distinct_listeners < 1 || l.distinct_artists < 1
                        ? null
                        : E.intl.format(X.default.yGqf0D, {
                              memberCount: l.distinct_listeners,
                              artistCount: l.distinct_artists,
                              trend: tC(n),
                              memberCountHook: tb,
                              artistCountHook: tb,
                          }),
                trend: n,
            }),
        ],
    });
}
var tQ = l(803613),
    tV = l(682348),
    tX = l(73152),
    tZ = l(968987),
    tJ = l(280911);
function t0(e) {
    let { guildId: t, isCompact: l } = e,
        n = (0, C.bG)([B.default], () => B.default.getCurrentUser()),
        a = (0, C.bG)([Q.Ay], () => (null != n ? Q.Ay.getMember(t, n.id) : null)),
        s = (0, $.gn)(t, n?.id, a?.colorStrings ?? null),
        r = V.Ay.useName(t, void 0, n);
    return (0, i.jsxs)("div", {
        className: tJ.D_,
        children: [
            (0, i.jsxs)("div", {
                className: tJ.FI,
                "aria-hidden": !0,
                children: [
                    !l &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("span", { className: tJ.eu, children: (0, i.jsx)(tQ.D, { size: "sm" }) }),
                                (0, i.jsxs)("span", {
                                    className: tJ.r$,
                                    children: [
                                        (0, i.jsx)("span", { className: tJ.Om }),
                                        (0, i.jsx)("span", { className: tJ.Om }),
                                        (0, i.jsx)("span", { className: tJ.Om }),
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
                className: tJ.Qq,
                children: [
                    (0, i.jsx)(A.D, {
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        lineClamp: 1,
                        children: (0, i.jsx)(L.g, {
                            name: E.intl.formatToPlainString(X.default.subXXA, { name: r }),
                            colorString: a?.colorString ?? null,
                            colorStrings: s,
                        }),
                    }),
                    (0, i.jsx)(p.E, {
                        variant: "text-xs/medium",
                        color: "text-strong",
                        lineClamp: l ? 2 : 1,
                        children: E.intl.string(X.default.y1neEe),
                    }),
                ],
            }),
        ],
    });
}
function t1(e) {
    let { widgetName: t, isCompact: l } = e;
    return (0, i.jsxs)("div", {
        className: tJ.D_,
        children: [
            !l &&
                (0, i.jsx)("span", {
                    className: tJ.eu,
                    "aria-hidden": !0,
                    children: (0, i.jsx)(tV._, { size: "sm", color: d.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
                }),
            (0, i.jsxs)("div", {
                className: tJ.Qq,
                children: [
                    (0, i.jsx)(A.D, {
                        variant: "heading-sm/semibold",
                        color: "text-strong",
                        lineClamp: 1,
                        children: E.intl.string(tZ.default.WhdCGP),
                    }),
                    (0, i.jsx)(p.E, {
                        variant: "text-xs/medium",
                        color: "text-strong",
                        lineClamp: l ? 2 : 1,
                        children: E.intl.formatToPlainString(X.default["49Jv0I"], { widgetName: t }),
                    }),
                ],
            }),
        ],
    });
}
function t2(e) {
    let { guildId: t, widgetName: n, isCompact: a, isSpotifyConnected: s } = e;
    return (0, i.jsxs)("div", {
        className: tJ.UX,
        children: [
            s ? (0, i.jsx)(t1, { widgetName: n, isCompact: a }) : (0, i.jsx)(t0, { guildId: t, isCompact: a }),
            (0, i.jsx)(U.$, {
                variant: "secondary",
                size: "sm",
                icon: s ? void 0 : tX.E,
                text: s ? E.intl.string(E.t.KY0ilj) : E.intl.string(X.default.jB1fWC),
                onClick: () => {
                    (0, ed.openModalLazy)(
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
var t3 = l(625903),
    t6 = l(780964),
    t8 = l(766075),
    t4 = l(30370),
    t7 = l(123894);
function t5() {
    let e = (0, C.bG)([t4.A], () => t4.A.getAccounts().some((e) => e.type === e$.fg2.SPOTIFY && e.showActivity));
    return (0, i.jsx)(S, {
        className: t7.w,
        title: E.intl.string(X.default.ULK65a),
        body: E.intl.format(e ? X.default.BLuvck : X.default["Ko3a0+"], { memberCount: 2 }),
        action: e
            ? null
            : (0, i.jsx)(U.$, {
                  variant: "secondary",
                  size: "sm",
                  icon: t3.SettingsIcon,
                  text: E.intl.string(E.t["3D5yo/"]),
                  onClick: () => (0, t8.openUserSettings)(t6.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING),
              }),
    });
}
function t9() {
    return (0, i.jsx)(S, {
        className: t7.w,
        title: E.intl.string(X.default.ULK65a),
        body: E.intl.format(X.default.ZQxU8v, { memberCount: 2 }),
    });
}
var le = l(109487),
    lt = l(279543);
function ll(e) {
    let { isCompact: t } = e;
    return (0, i.jsxs)("div", {
        className: lt.qr,
        children: [
            (0, i.jsxs)("div", {
                className: lt.Os,
                children: [
                    (0, i.jsx)("span", {
                        className: lt.Kk,
                        children: (0, i.jsx)(R.RefreshIcon, {
                            size: "xxs",
                            color: d.A.colors.ICON_SUBTLE,
                            "aria-hidden": !0,
                        }),
                    }),
                    (0, i.jsx)(p.E, {
                        className: lt.Pf,
                        tag: "span",
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: E.intl.string(X.default["3/DOFo"]),
                    }),
                ],
            }),
            (0, i.jsxs)(tm.Anchor, {
                className: lt.al,
                href: tv.RQ.WEB_HOME,
                "aria-label": E.intl.string(X.default["jUr+wF"]),
                children: [
                    (0, i.jsx)("span", {
                        className: lt.Kk,
                        children: (0, i.jsx)(le.L, { size: "xs", color: d.A.colors.ICON_STRONG, "aria-hidden": !0 }),
                    }),
                    !t &&
                        (0, i.jsx)(p.E, {
                            className: lt.G2,
                            tag: "span",
                            variant: "text-xs/medium",
                            color: "none",
                            children: E.intl.string(X.default.ZdPp2q),
                        }),
                ],
            }),
        ],
    });
}
var ln = l(65154),
    li = l(329177),
    la = l(242226);
function ls(e) {
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
        x = Z(l, n, { showYouSuffix: c }),
        { user: h } = x;
    return null == h
        ? null
        : (0, i.jsxs)("div", {
              ref: m,
              "aria-hidden": u,
              inert: u,
              className: g()(la.nM, { [la.Bh]: c && !u, [la.lR]: o }),
              children: [
                  (0, i.jsx)(lr, { guildId: l, user: h, identity: x, rank: s, listener: a }),
                  null != a &&
                      (0, i.jsxs)("div", {
                          className: g()(la.Mx, { [la.dA]: r }),
                          children: [
                              (0, i.jsx)(ln.S, { size: "xxs", color: d.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                              (0, i.jsx)(p.E, {
                                  variant: "text-sm/medium",
                                  color: "text-strong",
                                  children:
                                      ((t = a.plays), E.intl.formatToPlainString(X.default["7X+3f8"], { count: t })),
                              }),
                          ],
                      }),
                  null != a && !r && (0, i.jsx)(lu, { artists: a.artists, artistCount: a.artist_count ?? null }),
              ],
          });
}
function lr(e) {
    let { guildId: t, user: l, identity: n, rank: s, listener: r } = e,
        d = a.useRef(null);
    return (0, i.jsx)(em.A, {
        targetElementRef: d,
        user: l,
        guildId: t,
        children: (e) =>
            (0, i.jsxs)(T.D, {
                ...e,
                innerRef: d,
                className: la.D_,
                children: [
                    null != s &&
                        (0, i.jsx)(k.A, { children: E.intl.formatToPlainString(X.default.I4JiAQ, { rank: s }) }),
                    (0, i.jsxs)("span", {
                        className: la.R3,
                        children: [
                            (0, i.jsx)(D.eu, {
                                size: w._3.SIZE_32,
                                src: l.getAvatarURL(t, (0, w.FT)(w._3.SIZE_32)) ?? void 0,
                                "aria-hidden": !0,
                            }),
                            1 === s &&
                                (0, i.jsx)("span", {
                                    className: la.ie,
                                    "aria-hidden": !0,
                                    children: (0, i.jsx)(li.CrownIcon, { size: "xxs", color: "currentColor" }),
                                }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: la.Dc,
                        children: [
                            (0, i.jsx)(A.D, {
                                variant: "heading-sm/semibold",
                                color: "text-default",
                                lineClamp: 1,
                                children: (0, i.jsx)(L.g, {
                                    name: n.displayName,
                                    colorString: n.member?.colorString ?? null,
                                    colorStrings: n.roleColorStrings,
                                }),
                            }),
                            (0, i.jsx)(lc, { listener: r }),
                        ],
                    }),
                ],
            }),
    });
}
function ld(e, t) {
    return (0, i.jsx)(p.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: e }, t);
}
function lc(e) {
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
                ? E.intl.format(X.default.QqaqBg, { trackTitle: l, artistName: n, highlightHook: ld })
                : E.intl.format(X.default.ZMJ8Mt, { trackTitle: l, highlightHook: ld }),
    });
}
function lo(e) {
    let { artist: t, notched: l } = e,
        [n, s] = a.useState(!1),
        r = null != t.artist_image_hash ? tv.RQ.IMAGE(t.artist_image_hash) : null;
    return (0, i.jsx)("span", {
        className: la.sG,
        children: (0, i.jsx)(e_.Ay, {
            mask: l ? e_.l8[24] : e_.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null == r || n
                    ? (0, i.jsx)("span", {
                          className: la.Ql,
                          children: (0, i.jsx)(tu.MicrophoneIcon, { size: "xxs", color: d.A.colors.ICON_SUBTLE }),
                      })
                    : (0, i.jsx)("img", { className: la.v2, src: r, alt: "", loading: "lazy", onError: () => s(!0) }),
        }),
    });
}
function lu(e) {
    let { artists: t, artistCount: l } = e,
        n = t.slice(0, 3),
        a = (l ?? t.length) - n.length;
    return (0, i.jsx)("div", {
        className: la.Rh,
        "aria-hidden": !0,
        children:
            n.length > 0 &&
            (0, i.jsxs)("div", {
                className: la.W$,
                children: [
                    n.map((e, t) =>
                        (0, i.jsx)(
                            lo,
                            { artist: e, notched: a > 0 || t !== n.length - 1 },
                            `${e.artist_external_id}-${e.artist_image_hash}`,
                        ),
                    ),
                    a > 0 &&
                        (0, i.jsx)("span", {
                            className: la.sG,
                            children: (0, i.jsx)(e_.Ay, {
                                mask: e_.Ay.Masks.SQUIRCLE,
                                width: 24,
                                height: 24,
                                children: (0, i.jsx)("div", {
                                    className: la.ag,
                                    children: (0, i.jsx)(p.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: E.intl.formatToPlainString(X.default.bFIg0R, { count: a }),
                                    }),
                                }),
                            }),
                        }),
                ],
            }),
    });
}
var lm = l(897130);
function lx(e) {
    let { guildId: t, isCompact: l, data: n, upsell: s } = e,
        r = n.top_listeners,
        d = (0, C.bG)([B.default], () => B.default.getCurrentUser()?.id),
        c = r.findIndex((e) => e.user_id === d),
        o = -1 === c ? null : r[c],
        u = a.useMemo(() => r.map((e) => e.user_id), [r]);
    (0, G.k6)(t, u);
    let { scrollerRef: m, userRowRef: x, floatingRowPosition: h } = q(),
        f = null != s,
        j = f ? null : h,
        v = null != j;
    return n.top_listeners.length < 2
        ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(t9, {}), s] })
        : (0, i.jsxs)("div", {
              className: lm.SY,
              children: [
                  (0, i.jsxs)(y.d_, {
                      className: g()(lm.p_, { [lm.w]: f }),
                      ref: m,
                      children: [
                          r.map((e, n) => {
                              let a = e.user_id === d;
                              return (0, i.jsx)(
                                  ls,
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
                              (0, i.jsx)(ls, {
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
                              (0, i.jsx)(F, { position: "bottom" }),
                              (0, i.jsx)("div", { className: lm.Kv, children: s }),
                          ],
                      }),
                  null != d &&
                      null != j &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(F, { position: j }),
                              (0, i.jsx)(H, {
                                  position: j,
                                  children: (0, i.jsx)(ls, {
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
var lh = l(717683);
function lf(e) {
    let { isCompact: t } = e;
    return (0, i.jsxs)("div", {
        className: lh.qV,
        "aria-hidden": !0,
        children: [
            (0, i.jsx)("div", {
                className: g()(lh.Dk, { [lh.yI]: t }),
                children: Array.from({ length: 10 }, (e, t) =>
                    (0, i.jsxs)(
                        "div",
                        {
                            className: lh.Nr,
                            children: [
                                (0, i.jsx)("div", { className: g()(lh.om, lh.xX) }),
                                (0, i.jsxs)("div", {
                                    className: lh.Qq,
                                    children: [
                                        (0, i.jsx)("div", { className: g()(lh.om, lh.DD) }),
                                        (0, i.jsx)("div", { className: g()(lh.om, lh.VA) }),
                                    ],
                                }),
                            ],
                        },
                        t,
                    ),
                ),
            }),
            (0, i.jsxs)("div", {
                className: g()(lh.yp, { [lh.Fl]: t }),
                children: [
                    (0, i.jsx)("div", { className: g()(lh.om, lh.Pl) }),
                    (0, i.jsx)("div", { className: g()(lh.om, lh._0) }),
                ],
            }),
        ],
    });
}
var lg = l(432017),
    lj = l(362704);
function lv(e) {
    let { song: t, isSelected: l, onSelect: n, itemProps: s } = e,
        r = null != t.cover_art_hash ? tv.RQ.IMAGE(t.cover_art_hash) : null,
        d = a.useMemo(
            () => ({
                kind: "song",
                shareUrl: tv.RQ.WEB_OPEN(tv.M0.TRACK, t.track_external_id),
                title: t.track_title ?? t.track_external_id,
                subtitle: t.artist_name,
                imageUrl: r,
            }),
            [t.track_external_id, t.track_title, t.artist_name, r],
        );
    return (0, i.jsxs)("div", {
        className: tg.Nr,
        children: [
            (0, i.jsxs)("button", {
                ...s,
                type: "button",
                className: g()(tg.MT, { [tg.tY]: l }),
                "aria-pressed": l,
                onClick: () => n(t.track_external_id),
                children: [
                    (0, i.jsx)(tx.R, {
                        src: r,
                        isCircular: !1,
                        FallbackIcon: lg.T,
                        children:
                            l &&
                            (0, i.jsx)("span", {
                                className: g()(tg.Lw, tg.Kp),
                                "aria-hidden": !0,
                                children: (0, i.jsx)(lj.Y, { size: "md", color: "currentColor" }),
                            }),
                    }),
                    null != t.track_title &&
                        (0, i.jsxs)("span", {
                            className: tg.Qq,
                            children: [
                                (0, i.jsx)(p.E, {
                                    className: tg.DD,
                                    tag: "span",
                                    variant: "text-sm/semibold",
                                    color: "text-default",
                                    lineClamp: 1,
                                    children: t.track_title,
                                }),
                                null != t.artist_name &&
                                    (0, i.jsx)(p.E, {
                                        className: tg.VA,
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
            (0, i.jsx)(tj, { target: d, tabIndex: s.tabIndex }),
        ],
    });
}
var lp = l(196765),
    l_ = l(770178);
let lA = { view: "top_songs", isCompact: !1, canShowEmbed: !1, selectedTrackId: null },
    lE = (0, lp.v)(() => ({ byWidgetId: {} }));
function lN(e, t) {
    lE.setState((l) => {
        let n = l.byWidgetId[e] ?? lA;
        return { byWidgetId: { ...l.byWidgetId, [e]: { ...n, ...t } } };
    });
}
function lI(e) {
    return lE((t) => t.byWidgetId[e]?.view ?? lA.view);
}
function lb(e) {
    return lE((t) => t.byWidgetId[e]?.isCompact ?? lA.isCompact);
}
function lS(e) {
    return lE((t) => t.byWidgetId[e]?.selectedTrackId ?? lA.selectedTrackId);
}
function lC(e, t) {
    (lE.getState().byWidgetId[e] ?? lA).view !== t && lN(e, { view: t, selectedTrackId: null });
}
function ly(e) {
    return e.track_external_id;
}
function lT(e) {
    let t,
        { guildId: l, widgetId: n, isCompact: s, data: r } = e,
        d = lS(n),
        c = lE((e) => e.byWidgetId[n]?.canShowEmbed ?? lA.canShowEmbed),
        o = a.useCallback(
            (e) => {
                let t;
                return (
                    (t = lE.getState().byWidgetId[n]?.selectedTrackId ?? null),
                    void lN(n, { selectedTrackId: t === e ? null : e })
                );
            },
            [n],
        ),
        u = a.useCallback(
            (e, t) => (0, i.jsx)(lv, { song: e, isSelected: e.track_external_id === d, onSelect: o, itemProps: t }),
            [d, o],
        );
    if (0 === r.ranked_songs.length) return null;
    let m = r.ranked_songs.find((e) => e.track_external_id === d) ?? null,
        x = tT(r);
    return (0, i.jsxs)("div", {
        className: tK.U,
        children: [
            (0, i.jsx)(tP, {
                label: tz(tO.TOP_SONGS),
                items: r.ranked_songs,
                isCompact: s,
                getItemKey: ly,
                renderItem: u,
            }),
            null != m
                ? (0, i.jsx)(tM, { guildId: l, isCompact: s, canShowEmbed: c, song: m })
                : (0, i.jsx)(tL, {
                      isCompact: s,
                      headline:
                          (t = Math.round(r.listening_time_ms / ee.A.Millis.MINUTE)) < 1
                              ? null
                              : E.intl.formatToPlainString(X.default["+5b01q"], { minutes: t }),
                      detail:
                          r.distinct_listeners < 1
                              ? null
                              : E.intl.format(X.default.AzIhRB, {
                                    count: r.distinct_listeners,
                                    trend: tC(x),
                                    countHook: tb,
                                }),
                      trend: x,
                  }),
        ],
    });
}
var lR = l(691885),
    lk = l(109765);
function lD(e) {
    let { widgetId: t } = e,
        l = lI(t),
        n = a.useMemo(() => tB.map((e) => ({ id: e, label: tz(e), value: e })), []),
        s = a.useCallback(
            (e) => {
                lC(t, e);
            },
            [t],
        );
    return (0, i.jsx)("div", {
        className: lk.L,
        children: (0, i.jsx)(lR.l, {
            selectionMode: "single",
            label: E.intl.string(X.default.hFYyGU),
            hideLabel: !0,
            fitContent: !0,
            options: n,
            value: l,
            onSelectionChange: s,
        }),
    });
}
var lw = l(871107);
function lL(e) {
    let { title: t } = e;
    return (0, i.jsxs)("div", {
        className: lw.$,
        children: [
            (0, i.jsx)("span", {
                className: lw.K,
                children: (0, i.jsx)(lg.T, { size: "xs", color: d.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
            }),
            (0, i.jsx)(h.q, { size: "md", children: t }),
        ],
    });
}
var lM = l(77915),
    lU = l(756936);
function lG(e) {
    return e.default_title ?? E.intl.string(X.default["5xxUI2"]);
}
var lP = l(890497),
    lO = l(734057),
    lB = l(317525),
    lW = l(576705),
    lz = l(935208),
    lF = l(44167);
l(321073);
var lH = l(485845),
    lK = l(136722),
    lY = l(435183),
    lq = l(155718),
    l$ = l(795816),
    lQ = l(933958),
    lV = l(574152),
    lX = l(627363),
    lZ = l(712440),
    lJ = l(733110),
    l0 = l(488926),
    l1 = l(818023);
async function l2(e) {
    null == eN.A.getApplication(l1.NW) && (await (0, lX.TA)(l1.NW));
    let t = lQ.Ay.getEmbeddedActivitiesForChannel(e).every((e) => e.applicationId !== l1.NW);
    return await (0, l$.su)({
        channelId: e,
        applicationId: l1.NW,
        isStart: t,
        embeddedActivitiesManager: (0, lV.A)(),
        renderInFramePool: !0,
    });
}
async function l3(e) {
    let { channel: t, selectedRoleIds: l } = e,
        n = [];
    if (l.length > 0)
        for (let e of (n.push({ id: t.guild_id, type: lq.r2.ROLE, allow: l0.x3, deny: e$.xBc.USE_EMBEDDED_ACTIVITIES }),
        l))
            n.push({ id: e, type: lq.r2.ROLE, allow: e$.xBc.USE_EMBEDDED_ACTIVITIES, deny: l0.x3 });
    let i = await (0, lY.RT)(t.id, { permissionOverwrites: n });
    if (!i.ok) throw i;
}
let l6 = [];
var l8 = l(344351),
    l4 = l(256693),
    l7 = l(343030),
    l5 = l(317608),
    l9 = l(953538);
let ne = {
    [r.a.IMAGE_TEXT]: {
        View: function (e) {
            let { widget: t, guildSpaceMode: l, guildId: n } = e,
                { text: a, image_hash: s } = t.config,
                r = "edit" === l ? t.config.image : void 0,
                d = void 0 !== r ? r : null != s ? td(n, t.id, s) : null;
            return (0, i.jsxs)("div", {
                className: to.kL,
                children: [
                    null != d && (0, i.jsx)("img", { className: to.Sl, src: d, alt: "" }),
                    null != a &&
                        (0, i.jsx)(p.E, {
                            variant: "text-md/normal",
                            color: "text-subtle",
                            className: to.Qq,
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
                v = (0, C.bG)([ti.A], () => ti.A.getGuildId()),
                p = void 0 !== h ? h : null != s.image_hash && null != v ? td(v, t.id, s.image_hash) : null;
            return (0, i.jsxs)(_.B, {
                gap: 16,
                children: [
                    (0, i.jsx)(e9.k, {
                        label: E.intl.string(E.t.gnwWrx),
                        value: d,
                        onChange: function (e) {
                            (j(null), c(e));
                        },
                        maxLength: 100,
                        showCharacterCount: !0,
                    }),
                    (0, i.jsx)(e4.D, {
                        label: E.intl.string(E.t.X4IxWL),
                        children: (0, i.jsxs)(_.B, {
                            gap: 16,
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            className: tc.B,
                            children: [
                                (0, i.jsxs)(_.B, {
                                    gap: 8,
                                    direction: "horizontal",
                                    children: [
                                        (0, i.jsx)(tn.A, {
                                            variant: "secondary",
                                            text: E.intl.string(E.t["MsUY/S"]),
                                            onChange: function (e) {
                                                (j(null), f(e));
                                            },
                                            maxFileSizeBytes: 0xa00000,
                                            onFileSizeError: () => (0, tl.A)(0xa00000),
                                        }),
                                        null != p &&
                                            (0, i.jsx)(o.m, {
                                                text: E.intl.string(E.t.N86XcP),
                                                ariaHidden: !0,
                                                children: (0, i.jsx)(u.K, {
                                                    variant: "critical-secondary",
                                                    icon: te.TrashIcon,
                                                    onClick: function () {
                                                        (j(null), f(null));
                                                    },
                                                    "aria-label": E.intl.string(E.t.N86XcP),
                                                }),
                                            }),
                                    ],
                                }),
                                null != p && (0, i.jsx)("img", { className: tc.V, src: p, alt: "" }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(e7.f, {
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
                            children: (0, i.jsx)(tt.w, { type: "critical", children: g }),
                        }),
                    (0, i.jsxs)(e5.e, {
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(U.$, { variant: "secondary", text: E.intl.string(E.t["ETE/oC"]), onClick: n }),
                            (0, i.jsx)(U.$, {
                                variant: "primary",
                                text: E.intl.string(E.t["R3BPH+"]),
                                onClick: function () {
                                    let e;
                                    if (
                                        ((e = void 0 !== h ? null !== h : null != s.image_hash),
                                        0 === m.length && !e && (j(E.intl.string(X.default.zleX9q)), 1))
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
                d = ew(s, n?.status === "success" ? n.data : void 0),
                c = e3({ guildId: s, data: d, expanded: !1, column: l.position.column, enabled: "view" === r }),
                o = a.useCallback(
                    (e) => {
                        c(e?.closest("[data-guild-space-widget]") ?? null);
                    },
                    [c],
                );
            return (
                (t =
                    n?.status === "error"
                        ? (0, i.jsx)(b, {})
                        : null != d
                          ? (0, i.jsx)(eV, { guildId: s, data: d, column: l.position.column })
                          : (0, i.jsx)(I, {})),
                (0, i.jsx)("div", { ref: o, children: t })
            );
        },
        Title: function (e) {
            let { widget: t, hydration: l, guildId: n } = e,
                a = ew(n, l?.status === "success" ? l.data : void 0);
            return null == a
                ? (0, i.jsx)(h.q, { children: t.default_title ?? "" })
                : (0, i.jsx)(h.q, { children: ei(a) });
        },
        TitleIcon: function () {
            return (0, i.jsx)(c.TrophyIcon, { size: "xs", color: d.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        },
        HeaderAccessory: function (e) {
            let { hydration: t, guildId: l } = e,
                n = ew(l, t?.status === "success" ? t.data : void 0);
            return null == n || en(n) ? null : (0, i.jsx)(e2, { data: n });
        },
        HeaderActions: function (e) {
            let { hydration: t, guildId: l, column: n } = e,
                a = t?.status === "success" ? t.data : void 0,
                s = ew(l, a);
            return "mini" !== es({ expanded: !1, column: n }) || (null != s && en(s))
                ? null
                : (0, i.jsx)(o.m, {
                      text: E.intl.string(E.t.dcl9MQ),
                      children: (0, i.jsx)(u.K, {
                          variant: "icon-only",
                          size: "sm",
                          icon: m._,
                          "aria-label": E.intl.string(E.t.dcl9MQ),
                          disabled: null == s,
                          onClick: function () {
                              null != s &&
                                  null != a &&
                                  (x.default.track(e$.HAw.LEADERBOARD_CLICK, {
                                      location: "expand",
                                      guild_id: l,
                                      leaderboard_state: ea(s),
                                      leaderboard_view: es({ expanded: !1, column: n }),
                                      metric: er(s.stat),
                                  }),
                                  (function (e) {
                                      let { guildId: t, data: l } = e,
                                          n = (e) => (0, i.jsx)(e8, { guildId: t, data: l, modalProps: e });
                                      (0, ed.openModalLazy)(() => Promise.resolve(n), {
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
                            lN(t, { isCompact: l < 480, canShowEmbed: l >= 560 });
                        },
                        [t],
                    )),
                    (0, l_.g)(n, s, [t], { fireOnMount: !0 }),
                    a.useEffect(
                        () => () => {
                            lE.setState((e) => {
                                if (null == e.byWidgetId[t]) return e;
                                let l = { ...e.byWidgetId };
                                return (delete l[t], { byWidgetId: l });
                            });
                        },
                        [t],
                    ),
                    n),
                x = lb(c.id),
                h = lI(c.id),
                f = lS(c.id),
                { isContributing: g, isSpotifyConnected: j, hasFetchedConsents: v } = (0, lM.MX)(d),
                p = "edit" === u,
                _ = o?.status === "success" && tW(o.data),
                A = !x && !p && !_,
                E =
                    "view" === u && v && !g
                        ? (0, i.jsx)(t2, { guildId: d, widgetName: lG(c), isCompact: x, isSpotifyConnected: j })
                        : null,
                N =
                    p || _ || o?.status !== "success" || h === tO.TOP_LISTENERS
                        ? null
                        : ((l = o.data),
                          null ==
                          (r =
                              l.ranked_songs.find((e) => e.track_external_id === f && null != e.cover_art_hash)
                                  ?.cover_art_hash ??
                              l.ranked_songs.find((e) => null != e.cover_art_hash)?.cover_art_hash)
                              ? null
                              : tv.RQ.IMAGE(r));
            return (0, i.jsxs)("div", {
                className: lU.rf,
                ref: m,
                children: [
                    null != N &&
                        (0, i.jsx)("div", {
                            className: lU.G,
                            "aria-hidden": !0,
                            children: (0, i.jsx)("img", { className: lU.LZ, src: N, alt: "" }),
                        }),
                    (0, i.jsx)("div", {
                        className: lU.Qs,
                        children: (0, i.jsx)("div", {
                            id: tH(c.id),
                            className: lU.nd,
                            role: A ? "tabpanel" : "group",
                            tabIndex: 0,
                            "aria-label": A ? void 0 : tz(h),
                            "aria-labelledby": A ? tF(c.id, h) : void 0,
                            children: (function () {
                                if (p) return (0, i.jsx)(lf, { isCompact: x });
                                if (null == o || "idle" === o.status || "loading" === o.status)
                                    return (0, i.jsx)(I, {});
                                if ("error" === o.status) return (0, i.jsx)(b, {});
                                if (_) return (0, i.jsx)(t5, {});
                                switch (h) {
                                    case tO.TOP_SONGS:
                                        return (0, i.jsx)(lT, {
                                            guildId: d,
                                            widgetId: c.id,
                                            isCompact: x,
                                            data: o.data,
                                        });
                                    case tO.TOP_ARTISTS:
                                        return (0, i.jsx)(t$, { isCompact: x, data: o.data });
                                    case tO.TOP_LISTENERS:
                                        return (0, i.jsx)(lx, { guildId: d, isCompact: x, data: o.data, upsell: E });
                                }
                            })(),
                        }),
                    }),
                    h !== tO.TOP_LISTENERS && E,
                    (0, i.jsx)(ll, { isCompact: x }),
                ],
            });
        },
        Title: function (e) {
            let { widget: t, hydration: l, guildSpaceMode: n } = e,
                a = lG(t),
                s = l?.status === "success" && tW(l.data);
            return "edit" === n || s ? (0, i.jsx)(h.q, { size: "md", children: a }) : (0, i.jsx)(lL, { title: a });
        },
        ViewHeaderTrailing: function (e) {
            let { widget: t, hydration: l, title: n } = e,
                a = lb(t.id),
                s = lI(t.id);
            return l?.status === "success" && tW(l.data)
                ? null
                : a
                  ? (0, i.jsx)(lD, { widgetId: t.id })
                  : (0, i.jsx)(ey, {
                        label: n,
                        tabs: tB.map((e) => ({ id: e, label: tz(e) })),
                        selectedId: s,
                        panelId: tH(t.id),
                        getTabId: (e) => tF(t.id, e),
                        onSelect: (e) => lC(t.id, e),
                    });
        },
    },
    [r.a.WHITEBOARD]: {
        View: function (e) {
            let t,
                l,
                n = (0, lF.n)(),
                r = (0, C.bG)(
                    [lO.A, lW.A],
                    () => {
                        let e = null != n ? lO.A.getChannel(n) : void 0;
                        return null != e && lW.A.can(e$.xBc.USE_EMBEDDED_ACTIVITIES, e);
                    },
                    [n],
                ),
                d = (0, C.bG)(
                    [lQ.Ay],
                    () => {
                        let e = lQ.Ay.getCurrentEmbeddedActivity();
                        return null == e ||
                            e.applicationId !== l1.NW ||
                            e.location.kind !== l8.T.GUILD_CHANNEL ||
                            e.location.channel_id !== n
                            ? null
                            : e;
                    },
                    [n],
                ),
                c = (0, C.bG)([lQ.Ay], () => lQ.Ay.isLaunchingActivity(), []),
                { authResolved: o, isAuthorized: u } =
                    ((t = (0, C.bG)(
                        [lJ.default],
                        () => lJ.default.getFetchStateForApplication(l1.NW) === lJ.FetchState.FETCHED,
                        [],
                    )),
                    (l = (0, C.bG)(
                        [lJ.default, eN.A],
                        () => {
                            let e = lJ.default.getNewestTokenForApplication(l1.NW);
                            if (null == e) return !1;
                            let t = eN.A.getApplication(l1.NW),
                                l = t?.integrationTypesConfig?.[lH.b.USER_INSTALL]?.oauth2InstallParams?.scopes;
                            if (null == l) return !0;
                            let n = new Set(e.scopes);
                            return l.every((e) => n.has(e));
                        },
                        [],
                    )),
                    a.useEffect(() => {
                        (lJ.default.getFetchStateForApplication(l1.NW) === lJ.FetchState.NOT_FETCHED &&
                            lZ.A.fetch([l1.NW]),
                            null == eN.A.getApplication(l1.NW) && (0, lX.TA)(l1.NW));
                    }, []),
                    { authResolved: t, isAuthorized: l }),
                m = a.useRef(!1);
            a.useEffect(() => {
                null == d && null != n && r && o && u && !m.current && ((m.current = !0), l2(n));
            }, [r, n, d, o, u]);
            let x = a.useCallback(() => {
                    null != n && ((m.current = !0), l2(n));
                }, [n]),
                h = null != n && o && !u;
            return null == n
                ? (0, i.jsx)(_.B, {
                      className: l9.kL,
                      align: "center",
                      justify: "center",
                      children: (0, i.jsx)(s, { alt: "", width: 200, height: 192 }),
                  })
                : r
                  ? (0, i.jsxs)("div", {
                        className: l9.kL,
                        children: [
                            null != d &&
                                (0, i.jsx)(l5.A, {
                                    frameId: (0, l4.Ri)(d),
                                    level: l7.A.WithinAppContent,
                                    className: l9.t$,
                                }),
                            null == d &&
                                h &&
                                (0, i.jsx)("div", {
                                    className: l9.P5,
                                    children: (0, i.jsx)(U.$, {
                                        variant: "secondary",
                                        text: E.intl.string(X.default.PSuly6),
                                        loading: c,
                                        onClick: x,
                                    }),
                                }),
                        ],
                    })
                  : (0, i.jsx)("div", {
                        className: l9.kL,
                        children: (0, i.jsx)("div", {
                            className: l9.m0,
                            children: (0, i.jsx)(p.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: E.intl.string(X.default["nXc/MQ"]),
                            }),
                        }),
                    });
        },
        Edit: function (e) {
            let { cancel: t } = e,
                l = (0, C.bG)([ti.A], () => ti.A.getGuildId()),
                n = lz.default.castGuildIdAsEveryoneGuildRoleId(l),
                s = (0, lF.n)(),
                r = (0, C.bG)([lO.A], () => (null != s ? lO.A.getChannel(s) : void 0), [s]),
                d = (0, C.bG)([lW.A], () => null != r && lW.A.can(e$.xBc.MANAGE_ROLES, r), [r]),
                c = (0, C.bG)([lB.A], () => (null == l ? l6 : lB.A.getSortedRoles(l).filter((e) => e.id !== n)), [
                    l,
                    n,
                ]),
                o = a.useMemo(() => {
                    let e;
                    return null != r
                        ? null != (e = r.permissionOverwrites[r.guild_id]) &&
                          lK.zy(e.deny, e$.xBc.USE_EMBEDDED_ACTIVITIES)
                            ? c
                                  .filter((e) => {
                                      let t = r.permissionOverwrites[e.id];
                                      return null != t && lK.zy(t.allow, e$.xBc.USE_EMBEDDED_ACTIVITIES);
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
                        (await l3({ channel: r, selectedRoleIds: j }), t());
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
                          (0, i.jsx)(lP.Z, {
                              selectionMode: "multiple",
                              label: E.intl.string(X.default.XXLbfv),
                              description: E.intl.string(X.default.XrpYIG),
                              placeholder: E.intl.string(X.default.pp6WeD),
                              options: v,
                              value: j,
                              onSelectionChange: function (e) {
                                  (g(!1), m(e));
                              },
                              disabled: !d || x,
                              fullWidth: !0,
                              wrapTags: !0,
                          }),
                          !d && (0, i.jsx)(tt.w, { type: "warning", children: E.intl.string(X.default.UPLtlA) }),
                          f &&
                              (0, i.jsx)("div", {
                                  role: "alert",
                                  children: (0, i.jsx)(tt.w, {
                                      type: "critical",
                                      children: E.intl.string(X.default.xyCJYs),
                                  }),
                              }),
                          (0, i.jsxs)(e5.e, {
                              fullWidth: !0,
                              children: [
                                  (0, i.jsx)(U.$, {
                                      variant: "secondary",
                                      text: E.intl.string(E.t["ETE/oC"]),
                                      onClick: t,
                                      disabled: x,
                                  }),
                                  (0, i.jsx)(U.$, {
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
