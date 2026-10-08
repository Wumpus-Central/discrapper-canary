l.d(t, { m: () => l9 });
var n,
    i = l(477900),
    s = l(582128);
function a(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: s, width: a = 288, height: r = 192 } = e;
    return (0, i.jsx)("img", {
        style: { width: a, height: r },
        src: "https://cdn.discordapp.com/assets/content/b501ac4c5a78c462100d3870ce7ab50a78ea7d9b2af6b8ee7a08b11bab82fb01.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: s ?? "img",
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
    let { className: t, title: l, body: n, action: s } = e;
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
            s,
        ],
    });
}
var C = l(17928),
    y = l(364522),
    T = l(939249),
    R = l(663417),
    D = l(140735),
    k = l(97808),
    w = l(778712),
    M = l(463930),
    L = l(478016),
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
    let [e, t] = s.useState(null),
        [l, n] = s.useState(null),
        [i, a] = s.useState("unknown"),
        r = (0, C.bG)([Y.Ay], () => Y.Ay.useReducedMotion);
    s.useEffect(() => {
        if (null == e || null == l) return;
        let t = new IntersectionObserver(
            (e) => {
                var t, l;
                let n,
                    i,
                    [s] = e;
                if (s?.rootBounds == null) return;
                let { clippedPx: r, floatTo: d } =
                    ((t = s.boundingClientRect),
                    (n = Math.max(0, (l = s.rootBounds).top - t.top)),
                    { clippedPx: n + (i = Math.max(0, t.bottom - l.bottom)), floatTo: n > i ? "top" : "bottom" });
                a(() => (r <= 1 ? "visible" : d));
            },
            { root: e, threshold: [0, 0.1, 0.5, 0.9, 1] },
        );
        return (t.observe(l), () => t.disconnect());
    }, [e, l]);
    let d = s.useCallback(() => {
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
        s = (0, C.bG)([Q.Ay], () => Q.Ay.getMember(e, t), [e, t]),
        a = (0, $.gn)(e, t, s?.colorStrings ?? null),
        r = V.Ay.useName(e, void 0, i),
        d = null == i && null != n ? n : r;
    return {
        user: i,
        member: s,
        roleColorStrings: a,
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
function es(e) {
    let t;
    return en(e)
        ? "empty_state"
        : null != (t = e.computed_at) &&
            new Date(t).getTime() - e.week_start_ts * ee.A.Millis.SECOND >= ee.A.Millis.WEEK
          ? "podium"
          : "in_progress";
}
function ea(e) {
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
        s = J.JG.useSetting().includes(t),
        a = !n || s;
    return (0, i.jsx)(S, {
        className: eo.w,
        title: E.intl.string(X.default.ULK65a),
        body: E.intl.format(a ? X.default.ueza5l : X.default["81PK67"], { memberCount: 3 }),
        action: a
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
    let { label: t, tabs: l, selectedId: n, panelId: a, getTabId: r, onSelect: d } = e,
        c = s.useCallback((e) => {
            let t,
                l = e.currentTarget,
                n = l.closest('[role="tablist"]');
            if (null == n) return;
            let i = Array.from(n.querySelectorAll('[role="tab"]')),
                s = i.indexOf(l);
            if (-1 !== s && 0 !== i.length) {
                switch (e.key) {
                    case eS.dh.ARROW_RIGHT:
                    case eS.dh.ARROW_DOWN:
                        t = (s + 1) % i.length;
                        break;
                    case eS.dh.ARROW_LEFT:
                    case eS.dh.ARROW_UP:
                        t = (s - 1 + i.length) % i.length;
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
                    "aria-controls": a,
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
function eD(e, t) {
    return t.map((t) => eR(e, t));
}
function ek(e, t) {
    let l = t.user_id,
        n = (0, C.bG)([eb.default], () => eb.default.getId() === l, [l]);
    return Z(e, l, { showYouSuffix: n, fallbackName: t.name });
}
function ew(e, t) {
    let l = (0, C.bG)([B.default], () => B.default.getCurrentUser()?.id),
        {
            isSharingActivity: n,
            isSharingActivityInGuild: i,
            hasPersonalizationConsent: a,
            hasFetchedConsents: r,
        } = (0, K.T4)(e),
        d = !n || !i || !a;
    return s.useMemo(() => {
        if (!r) return;
        if (null == t || !d || null == l) return t;
        let e = t.entries.filter((e) => e.user_id !== l);
        return e.length === t.entries.length ? t : { ...t, entries: e.map((e, t) => ({ ...e, rank: t + 1 })) };
    }, [t, d, l, r]);
}
(l(539888), l(914173));
var eM = l(518477),
    eL = l(870087);
function eU(e) {
    let {
            guildId: t,
            entry: l,
            stat: n,
            games: a,
            isCurrentUser: r,
            shouldDimForCurrentUser: d,
            isFloating: c = !1,
            rowRef: o,
            onClick: u,
            metricWidth: m,
        } = e,
        x = ek(t, l),
        h = l.application_ids[0],
        f = null != h ? eR(a, h) : void 0,
        j = l.user_id,
        v = s.useCallback(() => {
            (u?.(),
                (0, eA.openUserProfileModal)({
                    userId: j,
                    guildId: t,
                    tabSection: eM.RP.ACTIVITY,
                    scrollTarget: eM.bk.RECENT_ACTIVITY,
                }));
        }, [u, j, t]);
    return (0, i.jsxs)("div", {
        ref: o,
        "aria-hidden": c,
        inert: c,
        className: g()(eL.nM, { [eL.Bh]: r && !c, [eL.lR]: d }),
        children: [
            (0, i.jsx)(eG, { guildId: t, entry: l, identity: x, lastPlayedGame: f, onClick: u }),
            (0, i.jsx)(eB, { entry: l, stat: n, width: m, onClick: v }),
            (0, i.jsx)(eH, {
                name: x.name,
                applicationIds: l.application_ids,
                applicationCount: l.application_count,
                games: a,
                onClick: v,
            }),
        ],
    });
}
function eG(e) {
    let { guildId: t, entry: l, identity: n, lastPlayedGame: a, onClick: r } = e,
        d = s.useRef(null),
        c = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(eP, { rank: l.rank }),
                (0, i.jsx)(k.eu, {
                    size: w._3.SIZE_32,
                    src: n.user?.getAvatarURL(t, (0, w.FT)(w._3.SIZE_32)) ?? void 0,
                    className: eL.my,
                    "aria-hidden": !0,
                }),
                (0, i.jsxs)("div", {
                    className: eL.Dc,
                    children: [
                        (0, i.jsx)(A.D, {
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            lineClamp: 1,
                            children: (0, i.jsx)(M.g, {
                                name: n.displayName,
                                colorString: n.member?.colorString ?? null,
                                colorStrings: n.roleColorStrings,
                            }),
                        }),
                        null != a &&
                            (0, i.jsx)(p.E, {
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                lineClamp: 1,
                                children: E.intl.formatToPlainString(X.default.YuNVPY, { gameName: a.name }),
                            }),
                    ],
                }),
            ],
        });
    return null == n.user
        ? (0, i.jsx)("div", { className: eL.D_, children: c })
        : (0, i.jsx)(em.A, {
              targetElementRef: d,
              user: n.user,
              guildId: t,
              children: (e) =>
                  (0, i.jsx)(T.D, {
                      ...e,
                      innerRef: d,
                      className: g()(eL.D_, eL.FB),
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
                className: eL.Tm,
                "aria-label": l,
                children: (0, i.jsx)("div", { className: eL.Xe }),
            });
        case 2:
            return (0, i.jsx)("div", {
                className: eL.Tm,
                "aria-label": l,
                children: (0, i.jsx)("div", { className: eL.XQ }),
            });
        case 3:
            return (0, i.jsx)("div", {
                className: eL.Tm,
                "aria-label": l,
                children: (0, i.jsx)("div", { className: eL.c9 }),
            });
        default:
            return (0, i.jsxs)("div", {
                className: eL.mH,
                children: [
                    (0, i.jsx)(D.A, { children: l }),
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
    let { entry: t, stat: l, width: n, onClick: s } = e,
        { primary: a, secondary: r } = eh(t, l);
    return (0, i.jsxs)(T.D, {
        className: eL.TH,
        style: null != n ? { width: n } : void 0,
        "aria-label": E.intl.string(X.default.o6mBdl),
        onClick: s,
        children: [
            (0, i.jsxs)("div", {
                className: eL.bf,
                children: [
                    (0, i.jsx)(eO, { stat: l }),
                    (0, i.jsx)(p.E, { variant: "text-sm/medium", color: "text-subtle", children: a }),
                ],
            }),
            null != r && (0, i.jsx)(p.E, { variant: "text-xs/medium", color: "text-muted", children: r }),
        ],
    });
}
function eW(e) {
    let { game: t, notched: l } = e;
    return (0, i.jsx)("span", {
        className: eL.rO,
        "aria-hidden": !0,
        children: (0, i.jsx)(e_.Ay, {
            mask: l ? e_.l8[24] : e_.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null != t.iconUrl
                    ? (0, i.jsx)("img", { className: eL.Gt, src: t.iconUrl, alt: "", "aria-hidden": !0 })
                    : (0, i.jsx)("span", {
                          className: eL.ct,
                          "aria-hidden": !0,
                          children: !t.isLoading && (0, i.jsx)(ev._, { size: "xxs", color: d.A.colors.ICON_SUBTLE }),
                      }),
        }),
    });
}
function ez(e) {
    let { played: t, totalCount: l } = e,
        n = t.slice(0, 2),
        s = l - n.length;
    return (0, i.jsxs)("div", {
        className: eL.Nw,
        children: [
            n.map((e, t) => (0, i.jsx)(eW, { game: e, notched: s > 0 || t !== n.length - 1 }, `${e.id}-${t}`)),
            s > 0
                ? (0, i.jsx)("span", {
                      className: eL.rO,
                      children: (0, i.jsx)(e_.Ay, {
                          mask: e_.Ay.Masks.SQUIRCLE,
                          width: 24,
                          height: 24,
                          children: (0, i.jsx)("div", {
                              className: eL.p0,
                              children: (0, i.jsx)(p.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-subtle",
                                  children: E.intl.formatToPlainString(X.default.JiMMEd, { count: s }),
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
    let { name: t, applicationIds: l, applicationCount: n, games: s, onClick: a } = e,
        r = eD(s, l);
    return (0, i.jsx)("div", {
        className: eL.ag,
        children: (0, i.jsx)(eF, {
            played: r,
            totalCount: n,
            children: (0, i.jsx)(T.D, {
                className: g()(eL.Nw, eL.Dz),
                "aria-label": E.intl.formatToPlainString(X.default.o6mBdl, { name: t }),
                onClick: a,
                children: (0, i.jsx)(ez, { played: r, totalCount: n }),
            }),
        }),
    });
}
var eK = l(189043);
function eY(e) {
    let { guildId: t, entries: l, stat: n, games: s, currentUserEntry: a, currentUserPillarRef: r, onClick: d } = e,
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
                    games: s,
                    isCurrentUser: e === a,
                    currentUserPillarRef: e === a ? r : void 0,
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
            columnClassName: a,
            pillarClassName: r,
            stat: d,
            games: c,
            isCurrentUser: o,
            currentUserPillarRef: u,
            onClick: m,
        } = e,
        x = eD(c, l.application_ids),
        h = ek(t, l),
        { primary: f } = eh(l, d),
        j = 1 === n ? w._3.SIZE_48 : w._3.SIZE_40,
        v = s.useRef(null),
        _ = g()(eK.dR, { [eK.m$]: 1 === n, [eK.wd]: 2 === n, [eK.p0]: 3 === n }),
        E = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: eK.R3,
                    children: [
                        (0, i.jsx)(k.eu, {
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
                            children: (0, i.jsx)(M.g, {
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
        className: a,
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
        { guildId: a, data: r, inModal: d = !1, column: c } = e,
        { stat: o, entries: u } = r,
        m = (0, C.bG)([B.default], () => B.default.getCurrentUser()?.id),
        h = s.useMemo(() => u.find((e) => e.user_id === m) ?? null, [u, m]),
        f = s.useMemo(() => {
            let e = u.slice(0, 20);
            return null == h || e.includes(h) ? e : [...e, h];
        }, [u, h]),
        j = s.useMemo(() => Array.from(new Set(f.map((e) => e.user_id))), [f]);
    (0, G.k6)(a, j);
    let v = er(o),
        p =
            ((t = s.useMemo(() => Array.from(new Set(f.flatMap((e) => e.application_ids))), [f])),
            (l = (0, eI.A)(t)),
            (n = (0, C.yK)([eN.A], () => t.map((e) => eN.A.didFetchingApplicationFail(e)))),
            s.useMemo(() => {
                let e = new Map();
                return (
                    t.forEach((t, i) => {
                        let s = l[i];
                        e.set(
                            t,
                            null != s
                                ? { id: t, name: s.name, iconUrl: s.getIconURL(64) ?? void 0, isLoading: !1 }
                                : eT(t, !n[i]),
                        );
                    }),
                    e
                );
            }, [t, l, n])),
        _ = en(r),
        A = es(r),
        N = "podium" === A,
        b = ea({ expanded: d, column: c }),
        S = [f[0], f[1], f[2]],
        { scrollerRef: R, scrollerNode: D, userRowRef: k, floatingRowPosition: w, scrollToUserRow: M } = q(),
        L = null == h && null != m,
        U = null != w,
        P = s.useMemo(() => {
            let e = null == h || f.includes(h) ? f : [...f, h];
            return e.length > 0 ? e : f;
        }, [f, h]),
        { metricMeasureRef: O, metricWidth: W } = (function () {
            let [e, t] = s.useState(null),
                [l, n] = s.useState(null);
            return (
                s.useEffect(() => {
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
                metric: a,
                scrollerNode: r,
                isEmpty: d,
            } = e,
            c = s.useRef(null),
            o = `${t}:${l}:${n}:${i}:${a}`,
            u = s.useCallback(() => {
                c.current !== o &&
                    ((c.current = o),
                    x.default.track(e$.HAw.LEADERBOARD_END_IMPRESSION, {
                        guild_id: t,
                        leaderboard_length: l,
                        leaderboard_state: n,
                        leaderboard_view: i,
                        metric: a,
                    }));
            }, [t, o, l, n, i, a]);
        s.useEffect(() => {
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
        guildId: a,
        leaderboardLength: _ ? 0 : f.length,
        leaderboardState: A,
        leaderboardView: b,
        metric: v,
        scrollerNode: _ ? null : D,
        isEmpty: _,
    });
    let K = s.useCallback(
            (e) => {
                x.default.track(e$.HAw.LEADERBOARD_CLICK, {
                    location: e,
                    guild_id: a,
                    leaderboard_state: A,
                    leaderboard_view: b,
                    metric: v,
                });
            },
            [a, A, b, v],
        ),
        Y = s.useCallback(
            (e) => {
                let t = e === h;
                return (0, i.jsx)(
                    eU,
                    {
                        guildId: a,
                        entry: e,
                        stat: o,
                        games: p,
                        isCurrentUser: t,
                        shouldDimForCurrentUser: t && U,
                        rowRef: t ? k : void 0,
                        onClick: () => K("row"),
                        metricWidth: W ?? void 0,
                    },
                    `${e.rank}-${e.user_id}`,
                );
            },
            [U, h, p, a, o, k, K, W],
        );
    return _
        ? (0, i.jsx)("div", {
              className: eQ.Cm,
              children: (0, i.jsx)(eu, { guildId: a, onActivitySharingClick: () => K("activity_sharing") }),
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
                                className: g()(eQ.p_, { [eQ.zE]: d, [eQ.Ng]: L }),
                                ref: R,
                                children: [
                                    N &&
                                        (0, i.jsx)(eY, {
                                            guildId: a,
                                            entries: S,
                                            stat: o,
                                            games: p,
                                            currentUserEntry: h,
                                            currentUserPillarRef: k,
                                            onClick: () => K("podium"),
                                        }),
                                    f.map(Y),
                                ],
                            }),
                            (null != h && null != w) || L
                                ? (0, i.jsx)(F, { position: "top" !== w || L ? "bottom" : "top" })
                                : null,
                            null != h &&
                                null != w &&
                                (0, i.jsx)(H, {
                                    position: w,
                                    children: (0, i.jsx)(T.D, {
                                        className: eQ.Po,
                                        "aria-label": E.intl.string(X.default.d0Z8kd),
                                        onClick: M,
                                        children: (0, i.jsx)(eU, {
                                            guildId: a,
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
                            L && (0, i.jsx)(eZ, { guildId: a, onActivitySharingClick: () => K("activity_sharing") }),
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
        { isSharingActivity: n, isSharingActivityInGuild: a, hasPersonalizationConsent: r } = (0, K.T4)(t),
        c = (0, C.bG)([O.A], () => O.A.getStatus() === e$.clD.INVISIBLE),
        o = E.intl.string(X.default.toxuHd),
        u = !1,
        m = !1;
    n && a
        ? r
            ? c && ((o = E.intl.string(X.default.PTDDhW)), (m = !0))
            : ((o = E.intl.string(X.default.mTARYx)), (u = !0))
        : ((o = E.intl.string(X.default["8y885d"])), (u = !0));
    let [x] = s.useState(u),
        [h] = s.useState(m),
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
                                  (0, i.jsx)(D.A, { children: E.intl.string(X.default["oHdW+u"]) }),
                                  (0, i.jsx)(p.E, {
                                      variant: "text-sm/semibold",
                                      color: "text-muted",
                                      "aria-hidden": !0,
                                      children: "?",
                                  }),
                              ],
                          }),
                          (0, i.jsx)(k.eu, {
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
                                      children: (0, i.jsx)(M.g, {
                                          name: _,
                                          colorString: v?.colorString ?? null,
                                          colorStrings: N,
                                      }),
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: eQ.LF,
                                      children: [
                                          f || g
                                              ? (0, i.jsx)(L.U, {
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
            endDate: a,
            badgeLabel: r,
        } = (function (e) {
            let t = (e + ee.A.Seconds.WEEK) * ee.A.Millis.SECOND,
                [l, n] = s.useState(() => Date.now()),
                i = t - l,
                a = i <= 0,
                r = i - (Math.ceil(i / ee.A.Millis.DAY) - 1) * ee.A.Millis.DAY;
            return (
                (0, eE.A)(() => n(Date.now()), a ? null : r),
                s.useMemo(
                    () => ({
                        ended: a,
                        endDate: new Date(t),
                        badgeLabel: a
                            ? E.intl.string(X.default["J8r/7L"])
                            : E.intl.formatToPlainString(X.default["PuaR+2"], { days: Math.ceil(i / ee.A.Millis.DAY) }),
                    }),
                    [a, t, i],
                )
            );
        })(t.week_start_ts),
        d = J.PZ.useSetting(),
        c = 2 > (0, W.m_)(a, new Date()) ? (0, W.mk)(a, !1, d).toLowerCase() : (0, W.i$)(a, "L LT", d).toLowerCase(),
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
    let { guildId: t, data: l, expanded: n, column: i, enabled: a = !0 } = e,
        [r, d] = s.useState(null),
        c = s.useRef(null),
        o = s.useRef({ guildId: t, data: l, expanded: n, column: i });
    s.useEffect(() => {
        o.current = { guildId: t, data: l, expanded: n, column: i };
    }, [t, l, n, i]);
    let u = s.useCallback((e) => {
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
                    leaderboard_state: es(n.data),
                    leaderboard_view: ea({ expanded: n.expanded, column: n.column }),
                    metric: er(n.data.stat),
                },
                { flush: e },
            );
    }, []);
    return (
        s.useEffect(() => {
            if (null != r && a)
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
        }, [r, a, u]),
        s.useCallback((e) => {
            d(e);
        }, [])
    );
}
var e6 = l(460614);
function e8(e) {
    let { guildId: t, data: l, modalProps: n } = e,
        s = ew(t, l),
        a = e3({ guildId: t, data: s, expanded: !0 });
    return null == s
        ? null
        : (0, i.jsx)(eJ.d, {
              size: "lg",
              "aria-label": ei(s),
              ...n,
              children: (0, i.jsxs)("div", {
                  ref: a,
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
                                          children: ei(s),
                                      }),
                                      (0, i.jsx)(e2, { data: s }),
                                  ],
                              }),
                              (0, i.jsx)(e0.s_, {}),
                          ],
                      }),
                      (0, i.jsx)("div", {
                          className: e6.rf,
                          children: (0, i.jsx)(eV, { guildId: t, data: s, inModal: !0 }),
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
    ts = l(488428),
    ta = l(776231);
let tr = (0, l(676279).cy)();
function td(e, t, l) {
    let n = l.startsWith("a_"),
        i = n ? (tr ? "webp" : "gif") : tr ? "webp" : "jpg",
        { CDN_HOST: s, API_ENDPOINT: a } = window.GLOBAL_ENV,
        r = e$.Rsh.GUILD_SPACE_IMAGE_TEXT_WIDGET_IMAGE(e, t, l, i),
        d = null != s ? `https://${s}${r}` : location.protocol + a + r,
        c = { size: (0, ta.kr)(500 * (0, ta.mZ)()) };
    return (
        "jpg" === i && (c.quality = "lossless"), "webp" === i && n && (c.animated = !0), (d += `?${ts.stringify(c)}`)
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
        a = s.useMemo(
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
                      href: a.shareUrl,
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
                  (0, i.jsx)(tj, { target: a, tabIndex: l.tabIndex }),
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
function tD(e) {
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
function tk(e) {
    var t;
    let { guildId: l, song: n } = e,
        a = s.useMemo(() => (n.facepile_user_ids ?? []).slice(0, 3), [n.facepile_user_ids]);
    (0, G.k6)(l, a);
    let r = (0, C.yK)([B.default], () => a.map((e) => B.default.getUser(e)), [a]),
        d = s.useMemo(() => r.filter((e) => null != e), [r]);
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
    let { isCompact: t, headline: l, detail: n, trend: s } = e;
    return null == l && null == n && null == s
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
                              null != s && (0, i.jsx)(tD, { trend: s }),
                          ],
                      }),
                  ],
              }),
          });
}
function tM(e) {
    var t;
    let { guildId: l, isCompact: n, canShowEmbed: s, song: a } = e,
        r = ty(a.plays_change_percent);
    return (0, i.jsxs)("div", {
        className: g()(tR.yp, { [tR.Fl]: n }),
        children: [
            s && (0, i.jsx)(tN.A, { className: tR.aF, resourceType: tv.M0.TRACK, resourceId: a.track_external_id }),
            (0, i.jsxs)("div", {
                className: g()(tR.QD, tR.rk),
                children: [
                    (0, i.jsx)(tk, { guildId: l, song: a }),
                    (0, i.jsxs)("div", {
                        className: tR._0,
                        children: [
                            (0, i.jsx)(p.E, {
                                tag: "span",
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                children:
                                    ((t = a.plays),
                                    E.intl.format(X.default["7hHUIS"], { count: t, trend: tC(r), countHook: tb })),
                            }),
                            null != r && (0, i.jsx)(tD, { trend: r }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var tL = l(197935),
    tU = l(915734);
function tG(e) {
    let { label: t, items: l, isCompact: n, getItemKey: s, renderItem: a } = e;
    return (0, i.jsx)("div", {
        className: g()(tU.Dk, { [tU.yI]: n }),
        children: (0, i.jsx)(tL.A, {
            items: l,
            getItemKey: s,
            renderItem: a,
            gap: 8,
            edgeFade: 40,
            actionsClassName: tU.o1,
            "aria-label": t,
        }),
    });
}
var tP = (((n = {}).TOP_SONGS = "top_songs"), (n.TOP_ARTISTS = "top_artists"), (n.TOP_LISTENERS = "top_listeners"), n);
let tO = ["top_songs", "top_artists", "top_listeners"];
function tB(e) {
    return 1 > e.ranked_songs.reduce((e, t) => e + t.plays, 0);
}
function tW(e) {
    switch (e) {
        case "top_songs":
            return E.intl.string(X.default.KgeEtx);
        case "top_artists":
            return E.intl.string(X.default.RYxWTS);
        case "top_listeners":
            return E.intl.string(X.default.KO73KB);
    }
}
function tz(e, t) {
    return `popular-music-tab-${e}-${t}`;
}
function tF(e) {
    return `popular-music-panel-${e}`;
}
var tH = l(742452);
function tK(e) {
    return e.artist_external_id;
}
function tY(e, t) {
    return (0, i.jsx)(tp, { artist: e, itemProps: t });
}
function tq(e) {
    let { isCompact: t, data: l } = e;
    if (0 === l.ranked_artists.length) return null;
    let n = tT(l);
    return (0, i.jsxs)("div", {
        className: tH.U,
        children: [
            (0, i.jsx)(tG, {
                label: tW(tP.TOP_ARTISTS),
                items: l.ranked_artists,
                isCompact: t,
                getItemKey: tK,
                renderItem: tY,
            }),
            (0, i.jsx)(tw, {
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
var t$ = l(803613),
    tQ = l(682348),
    tV = l(73152),
    tX = l(968987),
    tZ = l(280911);
function tJ(e) {
    let { guildId: t, isCompact: l } = e,
        n = (0, C.bG)([B.default], () => B.default.getCurrentUser()),
        s = (0, C.bG)([Q.Ay], () => (null != n ? Q.Ay.getMember(t, n.id) : null)),
        a = (0, $.gn)(t, n?.id, s?.colorStrings ?? null),
        r = V.Ay.useName(t, void 0, n);
    return (0, i.jsxs)("div", {
        className: tZ.D_,
        children: [
            (0, i.jsxs)("div", {
                className: tZ.FI,
                "aria-hidden": !0,
                children: [
                    !l &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("span", { className: tZ.eu, children: (0, i.jsx)(t$.D, { size: "sm" }) }),
                                (0, i.jsxs)("span", {
                                    className: tZ.r$,
                                    children: [
                                        (0, i.jsx)("span", { className: tZ.Om }),
                                        (0, i.jsx)("span", { className: tZ.Om }),
                                        (0, i.jsx)("span", { className: tZ.Om }),
                                    ],
                                }),
                            ],
                        }),
                    (0, i.jsx)(k.eu, {
                        size: w._3.SIZE_32,
                        src: n?.getAvatarURL(t, (0, w.FT)(w._3.SIZE_32)) ?? void 0,
                        "aria-hidden": !0,
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: tZ.Qq,
                children: [
                    (0, i.jsx)(A.D, {
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        lineClamp: 1,
                        children: (0, i.jsx)(M.g, {
                            name: E.intl.formatToPlainString(X.default.subXXA, { name: r }),
                            colorString: s?.colorString ?? null,
                            colorStrings: a,
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
function t0(e) {
    let { widgetName: t, isCompact: l } = e;
    return (0, i.jsxs)("div", {
        className: tZ.D_,
        children: [
            !l &&
                (0, i.jsx)("span", {
                    className: tZ.eu,
                    "aria-hidden": !0,
                    children: (0, i.jsx)(tQ._, { size: "sm", color: d.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
                }),
            (0, i.jsxs)("div", {
                className: tZ.Qq,
                children: [
                    (0, i.jsx)(A.D, {
                        variant: "heading-sm/semibold",
                        color: "text-strong",
                        lineClamp: 1,
                        children: E.intl.string(tX.default.WhdCGP),
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
function t1(e) {
    let { guildId: t, widgetName: n, isCompact: s, isSpotifyConnected: a } = e;
    return (0, i.jsxs)("div", {
        className: tZ.UX,
        children: [
            a ? (0, i.jsx)(t0, { widgetName: n, isCompact: s }) : (0, i.jsx)(tJ, { guildId: t, isCompact: s }),
            (0, i.jsx)(U.$, {
                variant: "secondary",
                size: "sm",
                icon: a ? void 0 : tV.E,
                text: a ? E.intl.string(E.t.KY0ilj) : E.intl.string(X.default.jB1fWC),
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
var t2 = l(625903),
    t3 = l(780964),
    t6 = l(766075),
    t8 = l(30370),
    t4 = l(123894);
function t7() {
    let e = (0, C.bG)([t8.A], () => t8.A.getAccounts().some((e) => e.type === e$.fg2.SPOTIFY && e.showActivity));
    return (0, i.jsx)(S, {
        className: t4.w,
        title: E.intl.string(X.default.ULK65a),
        body: E.intl.format(e ? X.default.BLuvck : X.default["Ko3a0+"], { memberCount: 2 }),
        action: e
            ? null
            : (0, i.jsx)(U.$, {
                  variant: "secondary",
                  size: "sm",
                  icon: t2.SettingsIcon,
                  text: E.intl.string(E.t["3D5yo/"]),
                  onClick: () => (0, t6.openUserSettings)(t3.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING),
              }),
    });
}
function t5() {
    return (0, i.jsx)(S, {
        className: t4.w,
        title: E.intl.string(X.default.ULK65a),
        body: E.intl.format(X.default.ZQxU8v, { memberCount: 2 }),
    });
}
var t9 = l(109487),
    le = l(279543);
function lt(e) {
    let { isCompact: t } = e;
    return (0, i.jsxs)("div", {
        className: le.qr,
        children: [
            (0, i.jsxs)("div", {
                className: le.Os,
                children: [
                    (0, i.jsx)("span", {
                        className: le.Kk,
                        children: (0, i.jsx)(R.RefreshIcon, {
                            size: "xxs",
                            color: d.A.colors.ICON_SUBTLE,
                            "aria-hidden": !0,
                        }),
                    }),
                    (0, i.jsx)(p.E, {
                        className: le.Pf,
                        tag: "span",
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: E.intl.string(X.default["3/DOFo"]),
                    }),
                ],
            }),
            (0, i.jsxs)(tm.Anchor, {
                className: le.al,
                href: tv.RQ.WEB_HOME,
                "aria-label": E.intl.string(X.default["jUr+wF"]),
                children: [
                    (0, i.jsx)("span", {
                        className: le.Kk,
                        children: (0, i.jsx)(t9.L, { size: "xs", color: d.A.colors.ICON_STRONG, "aria-hidden": !0 }),
                    }),
                    !t &&
                        (0, i.jsx)(p.E, {
                            className: le.G2,
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
var ll = l(65154),
    ln = l(329177),
    li = l(242226);
function ls(e) {
    var t;
    let {
            guildId: l,
            userId: n,
            listener: s,
            rank: a,
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
              className: g()(li.nM, { [li.Bh]: c && !u, [li.lR]: o }),
              children: [
                  (0, i.jsx)(la, { guildId: l, user: h, identity: x, rank: a, listener: s }),
                  null != s &&
                      (0, i.jsxs)("div", {
                          className: g()(li.Mx, { [li.dA]: r }),
                          children: [
                              (0, i.jsx)(ll.S, { size: "xxs", color: d.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                              (0, i.jsx)(p.E, {
                                  variant: "text-sm/medium",
                                  color: "text-strong",
                                  children:
                                      ((t = s.plays), E.intl.formatToPlainString(X.default["7X+3f8"], { count: t })),
                              }),
                          ],
                      }),
                  null != s && !r && (0, i.jsx)(lo, { artists: s.artists, artistCount: s.artist_count ?? null }),
              ],
          });
}
function la(e) {
    let { guildId: t, user: l, identity: n, rank: a, listener: r } = e,
        d = s.useRef(null);
    return (0, i.jsx)(em.A, {
        targetElementRef: d,
        user: l,
        guildId: t,
        children: (e) =>
            (0, i.jsxs)(T.D, {
                ...e,
                innerRef: d,
                className: li.D_,
                children: [
                    null != a &&
                        (0, i.jsx)(D.A, { children: E.intl.formatToPlainString(X.default.I4JiAQ, { rank: a }) }),
                    (0, i.jsxs)("span", {
                        className: li.R3,
                        children: [
                            (0, i.jsx)(k.eu, {
                                size: w._3.SIZE_32,
                                src: l.getAvatarURL(t, (0, w.FT)(w._3.SIZE_32)) ?? void 0,
                                "aria-hidden": !0,
                            }),
                            1 === a &&
                                (0, i.jsx)("span", {
                                    className: li.ie,
                                    "aria-hidden": !0,
                                    children: (0, i.jsx)(ln.CrownIcon, { size: "xxs", color: "currentColor" }),
                                }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: li.Dc,
                        children: [
                            (0, i.jsx)(A.D, {
                                variant: "heading-sm/semibold",
                                color: "text-default",
                                lineClamp: 1,
                                children: (0, i.jsx)(M.g, {
                                    name: n.displayName,
                                    colorString: n.member?.colorString ?? null,
                                    colorStrings: n.roleColorStrings,
                                }),
                            }),
                            (0, i.jsx)(ld, { listener: r }),
                        ],
                    }),
                ],
            }),
    });
}
function lr(e, t) {
    return (0, i.jsx)(p.E, { tag: "span", variant: "text-xs/medium", color: "text-strong", children: e }, t);
}
function ld(e) {
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
                ? E.intl.format(X.default.QqaqBg, { trackTitle: l, artistName: n, highlightHook: lr })
                : E.intl.format(X.default.ZMJ8Mt, { trackTitle: l, highlightHook: lr }),
    });
}
function lc(e) {
    let { artist: t, notched: l } = e,
        [n, a] = s.useState(!1),
        r = null != t.artist_image_hash ? tv.RQ.IMAGE(t.artist_image_hash) : null;
    return (0, i.jsx)("span", {
        className: li.sG,
        children: (0, i.jsx)(e_.Ay, {
            mask: l ? e_.l8[24] : e_.Ay.Masks.SQUIRCLE,
            width: 24,
            height: 24,
            children:
                null == r || n
                    ? (0, i.jsx)("span", {
                          className: li.Ql,
                          children: (0, i.jsx)(tu.MicrophoneIcon, { size: "xxs", color: d.A.colors.ICON_SUBTLE }),
                      })
                    : (0, i.jsx)("img", { className: li.v2, src: r, alt: "", loading: "lazy", onError: () => a(!0) }),
        }),
    });
}
function lo(e) {
    let { artists: t, artistCount: l } = e,
        n = t.slice(0, 3),
        s = (l ?? t.length) - n.length;
    return (0, i.jsx)("div", {
        className: li.Rh,
        "aria-hidden": !0,
        children:
            n.length > 0 &&
            (0, i.jsxs)("div", {
                className: li.W$,
                children: [
                    n.map((e, t) =>
                        (0, i.jsx)(
                            lc,
                            { artist: e, notched: s > 0 || t !== n.length - 1 },
                            `${e.artist_external_id}-${e.artist_image_hash}`,
                        ),
                    ),
                    s > 0 &&
                        (0, i.jsx)("span", {
                            className: li.sG,
                            children: (0, i.jsx)(e_.Ay, {
                                mask: e_.Ay.Masks.SQUIRCLE,
                                width: 24,
                                height: 24,
                                children: (0, i.jsx)("div", {
                                    className: li.ag,
                                    children: (0, i.jsx)(p.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: E.intl.formatToPlainString(X.default.bFIg0R, { count: s }),
                                    }),
                                }),
                            }),
                        }),
                ],
            }),
    });
}
var lu = l(897130);
function lm(e) {
    let { guildId: t, isCompact: l, data: n, upsell: a } = e,
        r = n.top_listeners,
        d = (0, C.bG)([B.default], () => B.default.getCurrentUser()?.id),
        c = r.findIndex((e) => e.user_id === d),
        o = -1 === c ? null : r[c],
        u = s.useMemo(() => r.map((e) => e.user_id), [r]);
    (0, G.k6)(t, u);
    let { scrollerRef: m, userRowRef: x, floatingRowPosition: h } = q(),
        f = null != a,
        j = f ? null : h,
        v = null != j;
    return n.top_listeners.length < 2
        ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(t5, {}), a] })
        : (0, i.jsxs)("div", {
              className: lu.SY,
              children: [
                  (0, i.jsxs)(y.d_, {
                      className: g()(lu.p_, { [lu.w]: f }),
                      ref: m,
                      children: [
                          r.map((e, n) => {
                              let s = e.user_id === d;
                              return (0, i.jsx)(
                                  ls,
                                  {
                                      guildId: t,
                                      userId: e.user_id,
                                      listener: e,
                                      rank: n + 1,
                                      isCompact: l,
                                      isCurrentUser: s,
                                      shouldDimForCurrentUser: s && v,
                                      rowRef: s ? x : void 0,
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
                              (0, i.jsx)("div", { className: lu.Kv, children: a }),
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
var lx = l(717683);
function lh(e) {
    let { isCompact: t } = e;
    return (0, i.jsxs)("div", {
        className: lx.qV,
        "aria-hidden": !0,
        children: [
            (0, i.jsx)("div", {
                className: g()(lx.Dk, { [lx.yI]: t }),
                children: Array.from({ length: 10 }, (e, t) =>
                    (0, i.jsxs)(
                        "div",
                        {
                            className: lx.Nr,
                            children: [
                                (0, i.jsx)("div", { className: g()(lx.om, lx.xX) }),
                                (0, i.jsxs)("div", {
                                    className: lx.Qq,
                                    children: [
                                        (0, i.jsx)("div", { className: g()(lx.om, lx.DD) }),
                                        (0, i.jsx)("div", { className: g()(lx.om, lx.VA) }),
                                    ],
                                }),
                            ],
                        },
                        t,
                    ),
                ),
            }),
            (0, i.jsxs)("div", {
                className: g()(lx.yp, { [lx.Fl]: t }),
                children: [
                    (0, i.jsx)("div", { className: g()(lx.om, lx.Pl) }),
                    (0, i.jsx)("div", { className: g()(lx.om, lx._0) }),
                ],
            }),
        ],
    });
}
var lf = l(432017),
    lg = l(362704);
function lj(e) {
    let { song: t, isSelected: l, onSelect: n, itemProps: a } = e,
        r = null != t.cover_art_hash ? tv.RQ.IMAGE(t.cover_art_hash) : null,
        d = s.useMemo(
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
                ...a,
                type: "button",
                className: g()(tg.MT, { [tg.tY]: l }),
                "aria-pressed": l,
                onClick: () => n(t.track_external_id),
                children: [
                    (0, i.jsx)(tx.R, {
                        src: r,
                        isCircular: !1,
                        FallbackIcon: lf.T,
                        children:
                            l &&
                            (0, i.jsx)("span", {
                                className: g()(tg.Lw, tg.Kp),
                                "aria-hidden": !0,
                                children: (0, i.jsx)(lg.Y, { size: "md", color: "currentColor" }),
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
            (0, i.jsx)(tj, { target: d, tabIndex: a.tabIndex }),
        ],
    });
}
var lv = l(196765),
    lp = l(770178);
let l_ = { view: "top_songs", isCompact: !1, canShowEmbed: !1, selectedTrackId: null },
    lA = (0, lv.v)(() => ({ byWidgetId: {} }));
function lE(e, t) {
    lA.setState((l) => {
        let n = l.byWidgetId[e] ?? l_;
        return { byWidgetId: { ...l.byWidgetId, [e]: { ...n, ...t } } };
    });
}
function lN(e) {
    return lA((t) => t.byWidgetId[e]?.view ?? l_.view);
}
function lI(e) {
    return lA((t) => t.byWidgetId[e]?.isCompact ?? l_.isCompact);
}
function lb(e) {
    return lA((t) => t.byWidgetId[e]?.selectedTrackId ?? l_.selectedTrackId);
}
function lS(e, t) {
    (lA.getState().byWidgetId[e] ?? l_).view !== t && lE(e, { view: t, selectedTrackId: null });
}
function lC(e) {
    return e.track_external_id;
}
function ly(e) {
    let t,
        { guildId: l, widgetId: n, isCompact: a, data: r } = e,
        d = lb(n),
        c = lA((e) => e.byWidgetId[n]?.canShowEmbed ?? l_.canShowEmbed),
        o = s.useCallback(
            (e) => {
                let t;
                return (
                    (t = lA.getState().byWidgetId[n]?.selectedTrackId ?? null),
                    void lE(n, { selectedTrackId: t === e ? null : e })
                );
            },
            [n],
        ),
        u = s.useCallback(
            (e, t) => (0, i.jsx)(lj, { song: e, isSelected: e.track_external_id === d, onSelect: o, itemProps: t }),
            [d, o],
        );
    if (0 === r.ranked_songs.length) return null;
    let m = r.ranked_songs.find((e) => e.track_external_id === d) ?? null,
        x = tT(r);
    return (0, i.jsxs)("div", {
        className: tH.U,
        children: [
            (0, i.jsx)(tG, {
                label: tW(tP.TOP_SONGS),
                items: r.ranked_songs,
                isCompact: a,
                getItemKey: lC,
                renderItem: u,
            }),
            null != m
                ? (0, i.jsx)(tM, { guildId: l, isCompact: a, canShowEmbed: c, song: m })
                : (0, i.jsx)(tw, {
                      isCompact: a,
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
var lT = l(691885),
    lR = l(109765);
function lD(e) {
    let { widgetId: t } = e,
        l = lN(t),
        n = s.useMemo(() => tO.map((e) => ({ id: e, label: tW(e), value: e })), []),
        a = s.useCallback(
            (e) => {
                lS(t, e);
            },
            [t],
        );
    return (0, i.jsx)("div", {
        className: lR.L,
        children: (0, i.jsx)(lT.l, {
            selectionMode: "single",
            label: E.intl.string(X.default.hFYyGU),
            hideLabel: !0,
            fitContent: !0,
            options: n,
            value: l,
            onSelectionChange: a,
        }),
    });
}
var lk = l(871107);
function lw(e) {
    let { title: t } = e;
    return (0, i.jsxs)("div", {
        className: lk.$,
        children: [
            (0, i.jsx)("span", {
                className: lk.K,
                children: (0, i.jsx)(lf.T, { size: "xs", color: d.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
            }),
            (0, i.jsx)(h.q, { size: "md", children: t }),
        ],
    });
}
var lM = l(77915),
    lL = l(756936);
function lU(e) {
    return e.default_title ?? E.intl.string(X.default["5xxUI2"]);
}
var lG = l(890497),
    lP = l(734057),
    lO = l(317525),
    lB = l(576705),
    lW = l(935208),
    lz = l(44167);
l(321073);
var lF = l(485845),
    lH = l(136722),
    lK = l(435183),
    lY = l(155718),
    lq = l(795816),
    l$ = l(933958),
    lQ = l(574152),
    lV = l(627363),
    lX = l(712440),
    lZ = l(733110),
    lJ = l(488926),
    l0 = l(818023);
async function l1(e) {
    null == eN.A.getApplication(l0.NW) && (await (0, lV.TA)(l0.NW));
    let t = l$.Ay.getEmbeddedActivitiesForChannel(e).every((e) => e.applicationId !== l0.NW);
    return await (0, lq.su)({
        channelId: e,
        applicationId: l0.NW,
        isStart: t,
        embeddedActivitiesManager: (0, lQ.A)(),
        renderInFramePool: !0,
    });
}
async function l2(e) {
    let { channel: t, selectedRoleIds: l } = e,
        n = [];
    if (l.length > 0)
        for (let e of (n.push({ id: t.guild_id, type: lY.r2.ROLE, allow: lJ.x3, deny: e$.xBc.USE_EMBEDDED_ACTIVITIES }),
        l))
            n.push({ id: e, type: lY.r2.ROLE, allow: e$.xBc.USE_EMBEDDED_ACTIVITIES, deny: lJ.x3 });
    let i = await (0, lK.RT)(t.id, { permissionOverwrites: n });
    if (!i.ok) throw i;
}
let l3 = [];
var l6 = l(344351),
    l8 = l(256693),
    l4 = l(343030),
    l7 = l(317608),
    l5 = l(953538);
let l9 = {
    [r.a.IMAGE_TEXT]: {
        View: function (e) {
            let { widget: t, guildSpaceMode: l, guildId: n } = e,
                { text: s, image_hash: a } = t.config,
                r = "edit" === l ? t.config.image : void 0,
                d = void 0 !== r ? r : null != a ? td(n, t.id, a) : null;
            return (0, i.jsxs)("div", {
                className: to.kL,
                children: [
                    null != d && (0, i.jsx)("img", { className: to.Sl, src: d, alt: "" }),
                    null != s &&
                        (0, i.jsx)(p.E, {
                            variant: "text-md/normal",
                            color: "text-subtle",
                            className: to.Qq,
                            children: s,
                        }),
                ],
            });
        },
        Edit: function (e) {
            let { widget: t, commit: l, cancel: n } = e,
                a = t.config,
                [d, c] = s.useState(a.title ?? ""),
                [m, x] = s.useState(a.text ?? ""),
                [h, f] = s.useState(a.image),
                [g, j] = s.useState(null),
                v = (0, C.bG)([ti.A], () => ti.A.getGuildId()),
                p = void 0 !== h ? h : null != a.image_hash && null != v ? td(v, t.id, a.image_hash) : null;
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
                                        ((e = void 0 !== h ? null !== h : null != a.image_hash),
                                        0 === m.length && !e && (j(E.intl.string(X.default.zleX9q)), 1))
                                    )
                                        return;
                                    let t = {
                                        type: r.a.IMAGE_TEXT,
                                        image_hash: a.image_hash,
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
                { widget: l, hydration: n, guildId: a, guildSpaceMode: r } = e,
                d = ew(a, n?.status === "success" ? n.data : void 0),
                c = e3({ guildId: a, data: d, expanded: !1, column: l.position.column, enabled: "view" === r }),
                o = s.useCallback(
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
                          ? (0, i.jsx)(eV, { guildId: a, data: d, column: l.position.column })
                          : (0, i.jsx)(I, {})),
                (0, i.jsx)("div", { ref: o, children: t })
            );
        },
        Title: function (e) {
            let { widget: t, hydration: l, guildId: n } = e,
                s = ew(n, l?.status === "success" ? l.data : void 0);
            return null == s
                ? (0, i.jsx)(h.q, { children: t.default_title ?? "" })
                : (0, i.jsx)(h.q, { children: ei(s) });
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
                s = t?.status === "success" ? t.data : void 0,
                a = ew(l, s);
            return "mini" !== ea({ expanded: !1, column: n }) || (null != a && en(a))
                ? null
                : (0, i.jsx)(o.m, {
                      text: E.intl.string(E.t.dcl9MQ),
                      children: (0, i.jsx)(u.K, {
                          variant: "icon-only",
                          size: "sm",
                          icon: m._,
                          "aria-label": E.intl.string(E.t.dcl9MQ),
                          disabled: null == a,
                          onClick: function () {
                              null != a &&
                                  null != s &&
                                  (x.default.track(e$.HAw.LEADERBOARD_CLICK, {
                                      location: "expand",
                                      guild_id: l,
                                      leaderboard_state: es(a),
                                      leaderboard_view: ea({ expanded: !1, column: n }),
                                      metric: er(a.stat),
                                  }),
                                  (function (e) {
                                      let { guildId: t, data: l } = e,
                                          n = (e) => (0, i.jsx)(e8, { guildId: t, data: l, modalProps: e });
                                      (0, ed.openModalLazy)(() => Promise.resolve(n), {
                                          modalKey: "guild-space-leaderboard-expand",
                                      });
                                  })({ guildId: l, data: s }));
                          },
                      }),
                  });
        },
    },
    [r.a.POPULAR_MUSIC]: {
        View: function (e) {
            var t, l;
            let n,
                a,
                r,
                { guildId: d, widget: c, hydration: o, guildSpaceMode: u } = e,
                m =
                    ((t = c.id),
                    (n = s.useRef(null)),
                    (a = s.useCallback(
                        (e) => {
                            let { width: l } = e.contentRect;
                            lE(t, { isCompact: l < 480, canShowEmbed: l >= 560 });
                        },
                        [t],
                    )),
                    (0, lp.g)(n, a, [t], { fireOnMount: !0 }),
                    s.useEffect(
                        () => () => {
                            lA.setState((e) => {
                                if (null == e.byWidgetId[t]) return e;
                                let l = { ...e.byWidgetId };
                                return (delete l[t], { byWidgetId: l });
                            });
                        },
                        [t],
                    ),
                    n),
                x = lI(c.id),
                h = lN(c.id),
                f = lb(c.id),
                { isContributing: g, isSpotifyConnected: j, hasFetchedConsents: v } = (0, lM.MX)(d),
                p = "edit" === u,
                _ = o?.status === "success" && tB(o.data),
                A = !x && !p && !_,
                E =
                    "view" === u && v && !g
                        ? (0, i.jsx)(t1, { guildId: d, widgetName: lU(c), isCompact: x, isSpotifyConnected: j })
                        : null,
                N =
                    p || _ || o?.status !== "success" || h === tP.TOP_LISTENERS
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
                className: lL.rf,
                ref: m,
                children: [
                    null != N &&
                        (0, i.jsx)("div", {
                            className: lL.G,
                            "aria-hidden": !0,
                            children: (0, i.jsx)("img", { className: lL.LZ, src: N, alt: "" }),
                        }),
                    (0, i.jsx)("div", {
                        className: lL.Qs,
                        children: (0, i.jsx)("div", {
                            id: tF(c.id),
                            className: lL.nd,
                            role: A ? "tabpanel" : "group",
                            tabIndex: 0,
                            "aria-label": A ? void 0 : tW(h),
                            "aria-labelledby": A ? tz(c.id, h) : void 0,
                            children: (function () {
                                if (p) return (0, i.jsx)(lh, { isCompact: x });
                                if (null == o || "idle" === o.status || "loading" === o.status)
                                    return (0, i.jsx)(I, {});
                                if ("error" === o.status) return (0, i.jsx)(b, {});
                                if (_) return (0, i.jsx)(t7, {});
                                switch (h) {
                                    case tP.TOP_SONGS:
                                        return (0, i.jsx)(ly, {
                                            guildId: d,
                                            widgetId: c.id,
                                            isCompact: x,
                                            data: o.data,
                                        });
                                    case tP.TOP_ARTISTS:
                                        return (0, i.jsx)(tq, { isCompact: x, data: o.data });
                                    case tP.TOP_LISTENERS:
                                        return (0, i.jsx)(lm, { guildId: d, isCompact: x, data: o.data, upsell: E });
                                }
                            })(),
                        }),
                    }),
                    h !== tP.TOP_LISTENERS && E,
                    (0, i.jsx)(lt, { isCompact: x }),
                ],
            });
        },
        Title: function (e) {
            let { widget: t, hydration: l, guildSpaceMode: n } = e,
                s = lU(t),
                a = l?.status === "success" && tB(l.data);
            return "edit" === n || a ? (0, i.jsx)(h.q, { size: "md", children: s }) : (0, i.jsx)(lw, { title: s });
        },
        ViewHeaderTrailing: function (e) {
            let { widget: t, hydration: l, title: n } = e,
                s = lI(t.id),
                a = lN(t.id);
            return l?.status === "success" && tB(l.data)
                ? null
                : s
                  ? (0, i.jsx)(lD, { widgetId: t.id })
                  : (0, i.jsx)(ey, {
                        label: n,
                        tabs: tO.map((e) => ({ id: e, label: tW(e) })),
                        selectedId: a,
                        panelId: tF(t.id),
                        getTabId: (e) => tz(t.id, e),
                        onSelect: (e) => lS(t.id, e),
                    });
        },
    },
    [r.a.WHITEBOARD]: {
        View: function (e) {
            let t,
                l,
                n = (0, lz.n)(),
                r = (0, C.bG)(
                    [lP.A, lB.A],
                    () => {
                        let e = null != n ? lP.A.getChannel(n) : void 0;
                        return null != e && lB.A.can(e$.xBc.USE_EMBEDDED_ACTIVITIES, e);
                    },
                    [n],
                ),
                d = (0, C.bG)(
                    [l$.Ay],
                    () => {
                        let e = l$.Ay.getCurrentEmbeddedActivity();
                        return null == e ||
                            e.applicationId !== l0.NW ||
                            e.location.kind !== l6.T.GUILD_CHANNEL ||
                            e.location.channel_id !== n
                            ? null
                            : e;
                    },
                    [n],
                ),
                c = (0, C.bG)([l$.Ay], () => l$.Ay.isLaunchingActivity(), []),
                { authResolved: o, isAuthorized: u } =
                    ((t = (0, C.bG)(
                        [lZ.default],
                        () => lZ.default.getFetchStateForApplication(l0.NW) === lZ.FetchState.FETCHED,
                        [],
                    )),
                    (l = (0, C.bG)(
                        [lZ.default, eN.A],
                        () => {
                            let e = lZ.default.getNewestTokenForApplication(l0.NW);
                            if (null == e) return !1;
                            let t = eN.A.getApplication(l0.NW),
                                l = t?.integrationTypesConfig?.[lF.b.USER_INSTALL]?.oauth2InstallParams?.scopes;
                            if (null == l) return !0;
                            let n = new Set(e.scopes);
                            return l.every((e) => n.has(e));
                        },
                        [],
                    )),
                    s.useEffect(() => {
                        (lZ.default.getFetchStateForApplication(l0.NW) === lZ.FetchState.NOT_FETCHED &&
                            lX.A.fetch([l0.NW]),
                            null == eN.A.getApplication(l0.NW) && (0, lV.TA)(l0.NW));
                    }, []),
                    { authResolved: t, isAuthorized: l }),
                m = s.useRef(!1);
            s.useEffect(() => {
                null == d && null != n && r && o && u && !m.current && ((m.current = !0), l1(n));
            }, [r, n, d, o, u]);
            let x = s.useCallback(() => {
                    null != n && ((m.current = !0), l1(n));
                }, [n]),
                h = null != n && o && !u;
            return null == n
                ? (0, i.jsx)(_.B, {
                      className: l5.kL,
                      align: "center",
                      justify: "center",
                      children: (0, i.jsx)(a, { alt: "", width: 200, height: 192 }),
                  })
                : r
                  ? (0, i.jsxs)("div", {
                        className: l5.kL,
                        children: [
                            null != d &&
                                (0, i.jsx)(l7.A, {
                                    frameId: (0, l8.Ri)(d),
                                    level: l4.A.WithinAppContent,
                                    className: l5.t$,
                                }),
                            null == d &&
                                h &&
                                (0, i.jsx)("div", {
                                    className: l5.P5,
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
                        className: l5.kL,
                        children: (0, i.jsx)("div", {
                            className: l5.m0,
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
                n = lW.default.castGuildIdAsEveryoneGuildRoleId(l),
                a = (0, lz.n)(),
                r = (0, C.bG)([lP.A], () => (null != a ? lP.A.getChannel(a) : void 0), [a]),
                d = (0, C.bG)([lB.A], () => null != r && lB.A.can(e$.xBc.MANAGE_ROLES, r), [r]),
                c = (0, C.bG)([lO.A], () => (null == l ? l3 : lO.A.getSortedRoles(l).filter((e) => e.id !== n)), [
                    l,
                    n,
                ]),
                o = s.useMemo(() => {
                    let e;
                    return null != r
                        ? null != (e = r.permissionOverwrites[r.guild_id]) &&
                          lH.zy(e.deny, e$.xBc.USE_EMBEDDED_ACTIVITIES)
                            ? c
                                  .filter((e) => {
                                      let t = r.permissionOverwrites[e.id];
                                      return null != t && lH.zy(t.allow, e$.xBc.USE_EMBEDDED_ACTIVITIES);
                                  })
                                  .map((e) => e.id)
                            : []
                        : [];
                }, [r, c]),
                [u, m] = s.useState(null),
                [x, h] = s.useState(!1),
                [f, g] = s.useState(!1),
                j = u ?? o,
                v = s.useMemo(() => c.map((e) => ({ id: e.id, label: e.name, value: e.id })), [c]);
            async function p() {
                if (null != r) {
                    (g(!1), h(!0));
                    try {
                        (await l2({ channel: r, selectedRoleIds: j }), t());
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
                          (0, i.jsx)(lG.Z, {
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
        LockedPreview: a,
    },
};
