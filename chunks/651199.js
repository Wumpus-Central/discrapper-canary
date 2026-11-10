a.d(t, { D: () => sl });
var r,
    i = a(477900),
    s = a(858899),
    n = a(361158),
    c = a(267102),
    d = a(188567),
    l = a(796104),
    o = a(719718),
    u = a(527926),
    h = a(617390),
    f = a(582128),
    b = a(503698),
    _ = a.n(b),
    p = a(855986),
    m = a(765178),
    x = a(140735),
    g = a(43990),
    A = a(789645),
    v = a(373955),
    w = a(503235),
    I = a(201779),
    E = a(407905);
let j = [
        I.gr.HOME,
        I.gr.INTRODUCTION,
        I.gr.VOICE_GENERAL,
        I.gr.VOICE_FACE,
        I.gr.MESSAGES_GENERAL,
        I.gr.MESSAGES_OUTFIT,
        I.gr.SERVERS_GENERAL,
        I.gr.SERVERS_HEADWEAR,
        I.gr.EMOJI_GENERAL,
        I.gr.EMOJI_SHOES,
        I.gr.GAMES_GENERAL,
        I.gr.GAMES_WEARABLE,
        I.gr.GAME_TIME_GENERAL,
        I.gr.GAME_TIME_AURA,
        I.gr.FINALIZE_CHARACTER,
        I.gr.SUMMARY,
        I.gr.SHARE,
    ],
    S = [
        I.gr.HOME,
        I.gr.INTRODUCTION,
        I.gr.VOICE_INTRO,
        I.gr.VOICE_STATS,
        I.gr.VOICE_FACE,
        I.gr.MESSAGES_INTRO,
        I.gr.MESSAGES_STATS,
        I.gr.MESSAGES_OUTFIT,
        I.gr.SERVERS_INTRO,
        I.gr.SERVERS_STATS,
        I.gr.TOP_SERVER_STATS,
        I.gr.SERVERS_HEADWEAR,
        I.gr.EMOJI_INTRO,
        I.gr.EMOJI_STATS,
        I.gr.EMOJI_SHOES,
        I.gr.GAMES_INTRO,
        I.gr.GAMES_STATS,
        I.gr.GAMES_WEARABLE,
        I.gr.GAME_TIME_STATS,
        I.gr.GAME_TIME_AURA,
        I.gr.SQUAD_TRANSITION,
        I.gr.SQUAD,
        I.gr.SIDEKICK,
        I.gr.SIDEKICK_LEAVE,
        I.gr.FINALIZE_CHARACTER,
        I.gr.SUMMARY,
        I.gr.SHARE,
    ],
    N = {
        [I.gr.VOICE_INTRO]: (e) => !(0, E.Kr)(e),
        [I.gr.MESSAGES_INTRO]: (e) => !(0, E.nb)(e),
        [I.gr.SERVERS_INTRO]: (e) => !(0, E.jr)(e),
        [I.gr.EMOJI_INTRO]: (e) => !(0, E.y7)(e),
        [I.gr.GAMES_INTRO]: (e) => !(0, E.IH)(e),
    },
    C = {
        [I.gr.TOP_SERVER_STATS]: E.jr,
        [I.gr.SQUAD_TRANSITION]: E.$p,
        [I.gr.SQUAD]: E.$p,
        [I.gr.SIDEKICK]: E.oL,
        [I.gr.SIDEKICK_LEAVE]: E.oL,
    };
function T(e) {
    let { flow: t, stats: a } = e;
    return (t === I.Np.SHARED_DATA ? S : j).filter((e) => {
        let t = N[e];
        if (null != t) return null != a && t(a);
        let r = C[e];
        return null == r || void 0 === a || r(a);
    });
}
function R(e) {
    let { flow: t, stats: a, currentRoute: r, direction: i } = e,
        s = T({ flow: t, stats: a }),
        n = s.indexOf(r);
    return -1 === n ? I.gr.INTRODUCTION : (s[n + i] ?? null);
}
a(321073);
let O =
        "https://cdn.discordapp.com/assets/content/05e7df987cb6150a2d6cbfe4aca2cdacfb4188166f8ff9bbde7421afcd85b382.mp3",
    y =
        "https://cdn.discordapp.com/assets/content/7b28adce16a979de5d4f6b8331dfedca2806d1b0b15f694b7a196db7f624918c.mp3",
    M =
        "https://cdn.discordapp.com/assets/content/aada5b40828140b41a56df82e81783cd43fd60e30ac1eb3c9f93a087b95dcf03.mp3",
    k =
        "https://cdn.discordapp.com/assets/content/04536b9e5b26d0b6e85116ce546b7d5ba97da31e7de7a1e02da262bcd5249bb0.mp3",
    D =
        "https://cdn.discordapp.com/assets/content/82d771ff521a99ea8e26239d2f2e48ae847e39575bc5bce396739b430b8a6fda.mp3",
    L = [O, y, M, k, D];
function P(e) {
    return e !== I.gr.HOME && null == (0, I.UG)(e).statsScreen;
}
function U(e) {
    return null != (0, I.UG)(e).statsScreen;
}
var G = a(127639),
    H = a(287809),
    F = a(474090),
    K = a(817379);
function B() {
    return (0, p.yK)([o.A, H.default], () => {
        let { selectedCharacterTraits: e, stats: t, character: a } = o.A,
            r = (0, F.ki)(H.default.getCurrentUser());
        return Object.values(G.V).filter((i) => {
            let s = e[i];
            return null != s && (0, K.tS)(i, s, { stats: t, hasNitro: r, savedCharacter: a });
        });
    });
}
var V = a(964486),
    z = a(920495),
    W = a(532294),
    Y = a(739187);
function q(e) {
    let t = (0, w.Cz)(e);
    null != t && ((0, Y.V)(), (0, s.P0)({ text: t, variant: "critical" }));
}
var X = a(299619),
    Q = a(775602),
    Z = a(818348),
    J = a(11435);
function $(e) {
    let { isVisible: t } = e,
        a = f.useRef(null),
        r = (0, p.bG)([Q.Ay], () => Q.Ay.useReducedMotion),
        s = t && !r;
    return (
        f.useEffect(() => {
            let e = a.current;
            null != e && (s ? e.play().catch(Z.tE) : e.pause());
        }, [s]),
        f.useEffect(() => {
            r && null != a.current && (a.current.currentTime = 1);
        }, [r]),
        (0, i.jsxs)("div", {
            className: _()(J.Tp, { [J.R]: !t }),
            "aria-hidden": !0,
            children: [
                (0, i.jsx)(X.A, {
                    ref: a,
                    className: J.Ki,
                    src: "https://cdn.discordapp.com/assets/content/a7a4300630ed2733eca4a8bb584c3086a66063d78e2f829faf465d96ff388a93.webm",
                    loop: !0,
                    muted: !0,
                    playsInline: !0,
                }),
                (0, i.jsx)("div", { className: J.D7 }),
            ],
        })
    );
}
var ee = a(885619);
function et(e) {
    let {
        ref: t,
        onMouseEnter: a,
        onMouseLeave: r,
        onFocus: s,
        onBlur: n,
        onContextMenu: c,
        "aria-label": d,
        "aria-pressed": l,
        "aria-disabled": o,
        "aria-describedby": u,
        children: h,
        onClick: f,
        onPointerDown: b,
        onKeyDown: p,
        size: m,
        className: x,
    } = e;
    return (0, i.jsx)("button", {
        ref: t,
        onMouseEnter: a,
        onMouseLeave: r,
        onFocus: s,
        onBlur: n,
        onContextMenu: c,
        type: "button",
        className: _()(ee.button, "custom" !== m && ee[m], x),
        onClick: f,
        onPointerDown: b,
        onKeyDown: p,
        "aria-label": d,
        "aria-pressed": l,
        "aria-disabled": o,
        "aria-describedby": u,
        children: h,
    });
}
function ea(e) {
    let { className: t, ...a } = e;
    return (0, i.jsx)(et, { ...a, className: _()(ee.shadow, t) });
}
function er(e) {
    let { animatedSrc: t, staticSrc: a, className: r } = e,
        s = (0, p.bG)([Q.Ay], () => Q.Ay.useReducedMotion);
    return (0, i.jsx)("img", { src: s ? a : t, alt: "", className: r });
}
var ei = a(740281),
    es = a(766089),
    en = a(767988);
let ec = { animatedSrc: es.A, staticSrc: en.A };
function ed(e) {
    let { activeRoute: t } = e,
        { animatedSrc: a, staticSrc: r } = (0, p.cf)(
            [o.A],
            () => {
                switch (t) {
                    case I.gr.SUMMARY:
                    case I.gr.SHARE:
                        let e = (0, v.o)(o.A.character),
                            { clydeLogoImage: a, clydeLogoStaticImage: r } = (0, v.j)(e);
                        return { animatedSrc: a, staticSrc: r };
                    default:
                        return ec;
                }
            },
            [t],
        );
    return (0, i.jsx)(er, { animatedSrc: a, staticSrc: r, className: ei.w });
}
var el = a(756408);
function eo() {
    let e = f.useRef(null);
    return (
        f.useLayoutEffect(() => {
            let t = e.current;
            null != t && ((t.tabIndex = -1), t.focus({ preventScroll: !0 }));
        }, []),
        e
    );
}
var eu = a(834730),
    eh = a(534514),
    ef = a(504736);
function eb(e) {
    let { children: t, className: a, ...r } = e;
    return (0, i.jsx)(eu.E, { ...r, className: _()(ef.Q, a), color: "none", children: t });
}
function e_(e) {
    let { children: t, className: a, ...r } = e,
        s = eo();
    return (0, i.jsx)(eh.D, { ...r, ref: s, className: _()(ef.Q, a), color: "none", children: t });
}
var ep = a(271427);
function em(e) {
    let { children: t, className: a, style: r } = e;
    return (0, i.jsx)(eb, { tag: "span", variant: "mono-md/bold", className: _()(ep.T, a), style: r, children: t });
}
var ex = a(852717),
    eg = a(792996),
    eA = a(383931);
function ev(e) {
    let { percent: t } = e;
    return (0, i.jsx)(em, {
        className: eA.t,
        children: eg.intl.formatToPlainString(ex.default.fOGKA4, { percent: t }),
    });
}
var ew = a(646692);
function eI(e) {
    let { icon: t, value: a, topPercent: r, children: s } = e,
        n = eo(),
        c =
            null != r
                ? eg.intl.formatToPlainString(ex.default.USo6cU, { value: a, label: s, percent: r })
                : eg.intl.formatToPlainString(ex.default["+CCx/D"], { value: a, label: s });
    return (0, i.jsxs)("div", {
        ref: n,
        role: "heading",
        "aria-level": 2,
        children: [
            (0, i.jsxs)("div", {
                className: ew.dJ,
                "aria-hidden": !0,
                children: [
                    null != r && (0, i.jsx)(ev, { percent: r }),
                    (0, i.jsxs)("div", {
                        className: ew.p,
                        children: [
                            (0, i.jsx)(eb, {
                                variant: "heading-xxl/medium",
                                className: ew.Uq,
                                children: a.toLocaleString(eg.intl.currentLocale),
                            }),
                            (0, i.jsxs)("div", {
                                className: ew.Pf,
                                children: [
                                    (0, i.jsx)(t, { size: "xs", color: "currentColor" }),
                                    (0, i.jsx)(eb, { variant: "heading-xs/semibold", className: ew.QK, children: s }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(x.A, { children: c }),
        ],
    });
}
var eE = a(303453);
let ej = {
    [w.v7.FACE]: ex.default.q8GA6h,
    [w.v7.OUTFIT]: ex.default["xGh/fq"],
    [w.v7.OUTFIT_COLOR]: ex.default.IgiEDV,
    [w.v7.HAT]: ex.default.QqeBEO,
    [w.v7.WEARABLE]: ex.default.l57q3i,
    [w.v7.AURA]: ex.default["fYp+yq"],
    [w.v7.SHOES]: ex.default.BaI4wD,
    [w.v7.BASE]: ex.default.SMXZXX,
};
function eS(e) {
    let { customizationOption: t, earnedCount: a, totalCount: r } = e;
    return (0, i.jsx)(eu.E, {
        variant: "body-md/medium",
        color: "text-subtle",
        className: eE.k,
        children: eg.intl.format(ej[t], {
            earnedCount: a,
            totalCount: r,
            countHook: (e, t) =>
                (0, i.jsx)(eb, { tag: "span", variant: "mono-md/bold", className: eE.U, children: e }, t),
        }),
    });
}
let eN =
    "https://cdn.discordapp.com/assets/content/48cbcb920dfd15e45e7fe3f297ede63a7891cb0eee9fc44f27053d05d2c6b5ca.mp3";
var eC = a(11044),
    eT = a(435558);
let eR = (0, a(196765).v)(() => ({ hoveredOption: void 0 })),
    eO = (0, eT.debounce)((e) => eR.setState({ hoveredOption: e }), 250);
function ey(e) {
    let { hoveredOption: t, isDelayed: a = !1 } = e;
    a ? eO(t) : (eO.cancel(), eR.setState({ hoveredOption: t }));
}
function eM(e) {
    let { isMuted: t, volume: a } = (0, p.cf)([o.A], () => ({ isMuted: o.A.isMuted, volume: o.A.volume })),
        r = f.useRef(null);
    return (
        f.useEffect(() => {
            r.current = new Audio(e);
        }, [e]),
        f.useEffect(() => {
            null != r.current && ((r.current.muted = t), (r.current.volume = a));
        }, [t, a]),
        f.useCallback(() => {
            let e = r.current;
            t || 0 === a || null == e || ((e.volume = a), (e.currentTime = 0), e.play());
        }, [t, a])
    );
}
var ek = a(28863),
    eD = a(793574),
    eL = a(778705),
    eP = a(461872),
    eU = a(218546),
    eG = a(647093);
let eH = `linear-gradient(to right, ${W.uz.join(", ")})`;
function eF(e) {
    let { rarity: t } = e,
        a = f.useMemo(() => ({ "--custom-checkpoint-rarity-background": t === eU.K.NITRO ? eH : W.Zy[t] }), [t]);
    return (0, i.jsx)(em, { className: eG.q, style: a, children: eg.intl.string(W.iG[t]) });
}
var eK = a(829870);
function eB(e) {
    let { asset: t, hideRarity: a } = e,
        r =
            t.status === eP.eP.NITRO_LOCKED
                ? eg.intl.format(ex.default.E6AfCb, {
                      subscribeHook: (e, t) =>
                          (0, i.jsx)(
                              ek.Anchor,
                              {
                                  onClick: () =>
                                      (0, eL.A)({ analyticsLocations: [eD.A.CHECKPOINT, eD.A.CHECKPOINT_TRAIT] }),
                                  children: e,
                              },
                              t,
                          ),
                  })
                : (0, w.Oq)(t);
    return (0, i.jsxs)("div", {
        className: eK.z,
        children: [
            (0, i.jsxs)("div", {
                className: eK.D,
                children: [
                    (0, i.jsx)(eu.E, {
                        tag: "div",
                        variant: "heading-sm/semibold",
                        color: "text-strong",
                        children: t.getName(),
                    }),
                    !a && null != t.rarity && (0, i.jsx)(eF, { rarity: t.rarity }),
                ],
            }),
            null != r && (0, i.jsx)(eu.E, { variant: "body-md/medium", color: "text-subtle", children: r }),
        ],
    });
}
var eV = a(646514),
    ez = a(403581),
    eW = a(835517),
    eY = a(559265);
function eq(e) {
    let { rarity: t } = e,
        a = f.useMemo(() => ({ "--custom-checkpoint-rarity-color": W.Zy[t] }), [t]);
    return t === eU.K.NITRO
        ? (0, i.jsx)(ez.NitroWheelIcon, { size: "custom", color: eV.A.colors.ICON_SUBTLE, className: eY.d7 })
        : (0, i.jsx)("span", { className: eY.oG, style: a });
}
function eX(e) {
    let {
            traitOption: t,
            groupName: a,
            isSelected: r,
            hideRarity: s,
            onSelectOption: n,
            onHoverOption: c,
            disabled: d = !1,
        } = e,
        { trait: l, optionId: o, rarity: u, asset: h, status: b } = t,
        p = b === eP.eP.LOCKED,
        m = f.useMemo(() => {
            if (null == h) return null;
            let e = Math.round(80 * (0, eW.A)());
            return `${h}?width=${e}&height=${e}`;
        }, [h]);
    return (0, i.jsxs)("label", {
        className: _()(eY.uK, { [eY.wH]: r, [eY.dv]: (0, w.C5)(t), [eY.xt]: p, [eY.Ns]: b === eP.eP.NITRO_LOCKED }),
        onMouseEnter: () => c(t),
        onFocus: function () {
            c(t);
        },
        children: [
            (0, i.jsx)(x.A, {
                children: (0, i.jsx)("input", {
                    type: "radio",
                    name: a,
                    checked: r,
                    disabled: d,
                    "aria-disabled": d ? void 0 : p,
                    onChange: function () {
                        d || p || n(l, o);
                    },
                    "aria-label": (0, w.v2)(t, { skipRarity: s, skipDescription: !1 }),
                }),
            }),
            null != m && (0, i.jsx)("img", { src: m, alt: "", draggable: !1, className: eY.Sl }),
            !s && null != u && (0, i.jsx)(eq, { rarity: u }),
        ],
    });
}
var eQ = a(509063),
    eZ = a(974862),
    eJ = a(142389),
    e$ = a(211235),
    e0 = a(230532),
    e1 = a(110601),
    e5 = a(917970);
function e6(e) {
    let {
            customizationOption: t,
            traitOptions: a,
            selectedOption: r,
            onSelectOption: s,
            disabled: n = !1,
            children: c,
        } = e,
        d = f.useId(),
        l = !(0, w.Ux)(t),
        o = eR((e) => e.hoveredOption ?? r),
        u = eM(
            "https://cdn.discordapp.com/assets/content/fc5527a1a369d8982c6e6fa588f732c7c5364ff00ddd0cf51646f05ad423af36.mp3",
        ),
        h = eM(eN);
    ((0, V.Ay)(() => {
        [eZ, e5, eJ, e$, e1, e0].forEach((e) => (0, eC.N)(e));
    }),
        f.useEffect(() => () => ey({ hoveredOption: void 0 }), [t]));
    let b = f.useCallback(
            (e, t) => {
                (ey({ hoveredOption: void 0 }), h(), s(e, t));
            },
            [s, h],
        ),
        _ = f.useCallback(
            (e) => {
                (u(), ey({ hoveredOption: e.optionId !== r?.optionId ? e : void 0, isDelayed: !0 }));
            },
            [u, r],
        );
    return (0, i.jsxs)("div", {
        className: eQ.Nz,
        children: [
            (0, i.jsxs)("div", {
                className: eQ.fF,
                children: [
                    c,
                    (0, i.jsx)("div", {
                        onMouseLeave: () => ey({ hoveredOption: void 0 }),
                        children: (0, i.jsx)("div", {
                            role: "radiogroup",
                            "aria-label": (0, w.cq)(t),
                            className: eQ.Vg,
                            onBlur: (e) => {
                                e.currentTarget.contains(e.relatedTarget) || ey({ hoveredOption: void 0 });
                            },
                            children: a.map((e) =>
                                (0, i.jsx)(
                                    eX,
                                    {
                                        traitOption: e,
                                        groupName: d,
                                        isSelected: e.optionId === r?.optionId,
                                        hideRarity: l,
                                        onSelectOption: b,
                                        onHoverOption: _,
                                        disabled: n,
                                    },
                                    e.optionId,
                                ),
                            ),
                        }),
                    }),
                ],
            }),
            null != o && (0, i.jsx)(eB, { asset: o, hideRarity: l }),
        ],
    });
}
var e2 = a(51104),
    e3 = a(67915);
function e4(e, t) {
    return e === w.v7.OUTFIT ? (null != t ? (0, K.FA)(t) : void 0) : t;
}
function e8(e) {
    let { customizationOption: t } = e,
        {
            optionIds: a,
            selectedOptionId: r,
            savedOptionId: i,
            onSelectOption: s,
        } = (function (e) {
            let { customizationOption: t, onSelectOption: a } = e,
                r = w.hw[t],
                { selectedOptionId: i, savedOptionId: s } = (0, p.cf)([o.A], () => ({
                    selectedOptionId: e4(t, o.A.selectedCharacterTraits[r]),
                    savedOptionId: e4(t, o.A.character?.[r]),
                })),
                n = f.useCallback(
                    (e, t) => {
                        t !== i && ((0, h.dw)(e, t), a(e, t));
                    },
                    [a, i],
                );
            return {
                optionIds: (function (e, t) {
                    switch (e) {
                        case w.v7.OUTFIT:
                            return K.ps;
                        case w.v7.OUTFIT_COLOR:
                            return (0, K.wD)(t ?? e3.r.NONE);
                        default:
                            return;
                    }
                })(t, i),
                selectedOptionId: i,
                savedOptionId: s,
                onSelectOption: n,
            };
        })({ customizationOption: t, onSelectOption: l.IB }),
        {
            traitOptions: n,
            availableTraitOptions: c,
            totalCount: d,
            earnedCount: u,
        } = (function (e) {
            let { customizationOption: t, savedOptionId: a, rarityOrder: r, optionIds: i } = e,
                s = (0, p.bG)([o.A], () => o.A.stats),
                n = (0, p.bG)([H.default], () => (0, F.ki)(H.default.getCurrentUser())),
                c = f.useMemo(() => (0, w.p8)(r), [r]);
            return f.useMemo(() => {
                let e = w.hw[t],
                    r = t === w.v7.OUTFIT_COLOR ? e2.x : e2.$[e],
                    d = (0, K.mf)(e, s),
                    l = [],
                    o = 0,
                    u = 0;
                for (let t of i ?? K.Rk[e]) {
                    let i = (0, K.$C)(e, t),
                        s = a === t,
                        c = eP.eP.UNLOCKED;
                    null == i || d.has(i) || s
                        ? i !== eU.K.NITRO || n || s || (c = eP.eP.NITRO_LOCKED)
                        : (c = eP.eP.LOCKED);
                    let h = c === eP.eP.UNLOCKED && (i !== eU.K.NITRO || n);
                    (null != i && o++,
                        null != i && h && u++,
                        l.push({
                            trait: e,
                            optionId: t,
                            asset: K.qM[e][t]?.thumbnail,
                            rarity: i,
                            status: c,
                            getName: () => {
                                let e = r[t];
                                return null != e ? eg.intl.string(e) : "";
                            },
                        }));
                }
                l.sort(c);
                let h = l.filter((e) => {
                    let { status: t } = e;
                    return t !== eP.eP.LOCKED;
                });
                return { traitOptions: l, availableTraitOptions: h, totalCount: o, earnedCount: u };
            }, [t, n, i, c, a, s]);
        })({ customizationOption: t, savedOptionId: i, rarityOrder: W.FG, optionIds: a }),
        b = f.useMemo(
            () =>
                c.find((e) => {
                    let { optionId: t } = e;
                    return t === r;
                }) ?? c[0],
            [r, c],
        );
    return (
        !(function (e) {
            let { availableTraitOptions: t, selectedOptionId: a, onSelectOption: r, isPaused: i = !1 } = e,
                s = t[0],
                n = t.some((e) => e.optionId === a);
            f.useEffect(() => {
                i || null == s || n || r(s.trait, s.optionId);
            }, [s, n, r, i]);
        })({ availableTraitOptions: c, selectedOptionId: r, onSelectOption: l.IB }),
        { traitOptions: n, selectedOption: b, totalCount: d, earnedCount: u, onSelectOption: s }
    );
}
function e9(e) {
    let { customizationOption: t } = e,
        {
            traitOptions: a,
            selectedOption: r,
            totalCount: s,
            earnedCount: n,
            onSelectOption: c,
        } = e8({ customizationOption: t });
    return (0, i.jsx)(e6, {
        customizationOption: t,
        traitOptions: a,
        selectedOption: r,
        onSelectOption: c,
        children: (0, i.jsx)(eS, { customizationOption: t, earnedCount: n, totalCount: s }),
    });
}
var e7 = a(71678);
function te(e) {
    let { children: t, className: a } = e;
    return (0, i.jsx)("div", { className: _()(e7.n, a), children: t });
}
function tt() {
    let e = (0, p.bG)([o.A], () => o.A.stats?.emojis);
    return (0, i.jsxs)(te, {
        children: [
            (0, i.jsx)(eI, {
                icon: el.EmojiSlightlySmilingFaceIcon,
                value: Math.round(e?.numEmojisSent ?? 0),
                topPercent: (0, E.bD)(e?.numEmojisSentPercentile),
                children: eg.intl.string(ex.default.ZTDCIv),
            }),
            (0, i.jsx)(e9, { customizationOption: w.v7.SHOES }),
        ],
    });
}
var ta = a(265872),
    tr = a(320448);
let ti = [w.v7.BASE, w.v7.OUTFIT_COLOR];
var ts = a(315710),
    tn = a(444927);
let tc = {
        "--custom-checkpoint-game-art-width": "clamp(135px, 17.5vh, 180px)",
        "--custom-checkpoint-game-full-art-width": 180,
        "--custom-checkpoint-game-full-shell-width": 196,
        "--custom-checkpoint-game-full-shell-offset": 2,
    },
    td = {
        "--custom-checkpoint-game-art-width": "clamp(165px, 21.5vh, 220px)",
        "--custom-checkpoint-game-full-art-width": 220,
        "--custom-checkpoint-game-full-shell-width": 235.5,
        "--custom-checkpoint-game-full-shell-offset": 2,
    },
    tl = {
        "--custom-checkpoint-primary": W.Kr,
        "--custom-checkpoint-dark-cyan": W.ow,
        "--custom-checkpoint-button-border": W.ow,
        "--custom-checkpoint-button-shadow": W.zj,
        "--custom-checkpoint-white": W.Ve,
        "--custom-checkpoint-guild-card-background": W.LM,
        "--custom-checkpoint-background-gradient-start": W.bI,
    };
var to = a(580814);
function tu(e) {
    let {
            menuRef: t,
            options: a,
            activeCustomizationOption: r,
            returnRef: s,
            onSelectOption: n,
            onClose: c,
            focusMenu: d,
            onMouseEnter: l,
            onMouseLeave: o,
        } = e,
        u = f.useRef([]),
        h = (0, tn.A)(() => Math.max(a.indexOf(r), 0)),
        [b, p] = f.useState(null);
    function m(e) {
        let t = (e + a.length) % a.length;
        (p(t), u.current[t]?.focus());
    }
    return (
        (0, ts.tj)(t, { disable: !d, disableReturn: !0 }),
        f.useEffect(() => {
            d && u.current[h]?.focus();
        }, [h, d]),
        (0, i.jsx)("div", {
            ref: t,
            role: "menu",
            tabIndex: -1,
            "aria-label": eg.intl.string(ex.default.Zl5vPW),
            className: to.MK,
            style: tl,
            onKeyDown: function (e) {
                if ("Escape" === e.key) return;
                e.stopPropagation();
                let t = u.current.indexOf(e.target);
                switch (e.key) {
                    case "ArrowDown":
                        (e.preventDefault(), m(t + 1));
                        break;
                    case "ArrowUp":
                        (e.preventDefault(), m(t - 1));
                        break;
                    case "Home":
                        (e.preventDefault(), m(0));
                        break;
                    case "End":
                        (e.preventDefault(), m(a.length - 1));
                        break;
                    case "Tab":
                        (c(), s.current?.focus());
                }
            },
            onMouseEnter: l,
            onMouseLeave: () => {
                (d || p(null), o?.());
            },
            children: a.map((e, t) =>
                (0, i.jsx)(
                    "button",
                    {
                        ref: (e) => {
                            u.current[t] = e;
                        },
                        type: "button",
                        role: "menuitemradio",
                        "aria-checked": e === r,
                        tabIndex: -1,
                        className: _()(to.AS, { [to.dT]: b === t }),
                        onFocus: () => p(t),
                        onMouseEnter: (e) => {
                            (p(t), d && e.currentTarget.focus());
                        },
                        onClick: () => n(e),
                        children: (0, i.jsx)(eu.E, {
                            tag: "span",
                            variant: "heading-sm/semibold",
                            color: "none",
                            children: (0, w.cq)(e),
                        }),
                    },
                    e,
                ),
            ),
        })
    );
}
var th = a(421773);
let tf = [w.v7.AURA, w.v7.WEARABLE, w.v7.SHOES, w.v7.HAT, w.v7.OUTFIT, w.v7.FACE];
var tb = a(769909);
function t_(e) {
    var t;
    let a,
        r,
        s,
        {
            activeCustomizationOption: n,
            onSelectOption: c,
            tabIdPrefix: d,
            panelId: l,
            blockedTrait: u,
            disabled: h = !1,
        } = e,
        b =
            ((a = (0, p.yK)([o.A], () => {
                let e = o.A.selectedCharacterTraits[G.V.OUTFIT];
                return null == e || (0, K.nb)(G.V.OUTFIT, e) ? ti.filter((e) => e !== w.v7.OUTFIT_COLOR) : ti;
            })),
            (r = n === w.v7.OUTFIT_COLOR && !a.includes(w.v7.OUTFIT_COLOR)),
            f.useEffect(() => {
                r && c(w.v7.BASE);
            }, [r, c]),
            a),
        {
            moreTabRef: m,
            menuRef: g,
            isMoreOptionActive: A,
            moreTabOption: v,
            isMenuOpen: I,
            focusMenu: E,
            openMenu: j,
            closeMenu: S,
            handleRequestClose: N,
            selectMenuOption: C,
            onMouseEnter: T,
            onMouseLeave: R,
        } = (function (e) {
            let { activeCustomizationOption: t, onSelectOption: a, blockedTrait: r, disabled: i } = e,
                s = f.useRef(null),
                n = f.useRef(null),
                c = tf.includes(t),
                [d, l] = f.useState(c ? t : null);
            c && d !== t && l(t);
            let o = i || null != r,
                [u, h] = f.useState(!1),
                {
                    isHovered: b,
                    setIsHovered: _,
                    onMouseEnter: p,
                    onMouseLeave: m,
                    cancelTimers: x,
                } = (0, th.A)(100, 300);
            function g() {
                (x(), _(!1), h(!1));
            }
            return {
                moreTabRef: s,
                menuRef: n,
                isMoreOptionActive: c,
                moreTabOption: d,
                isMenuOpen: !o && b,
                focusMenu: u,
                openMenu: function () {
                    null != r ? q(r) : i || (x(), h(!0), _(!0));
                },
                closeMenu: g,
                handleRequestClose: function (e, t) {
                    if ("user:escape" !== t) return void g();
                    let a = u || n.current?.contains(n.current.ownerDocument.activeElement);
                    (g(), a && s.current?.focus());
                },
                selectMenuOption: function (e) {
                    (a(e), g(), s.current?.focus());
                },
                onMouseEnter: o ? void 0 : p,
                onMouseLeave: u ? void 0 : m,
            };
        })({ activeCustomizationOption: n, onSelectOption: c, blockedTrait: u, disabled: h }),
        O = A ? "more" : n,
        { tabListRef: y, focusAdjacentTab: M } =
            ((t = [...b, "more"]),
            {
                tabListRef: (s = f.useRef(null)),
                focusAdjacentTab: function (e, a) {
                    let r = (function (e, t, a) {
                        switch (a) {
                            case "Home":
                                return 0;
                            case "End":
                                return t - 1;
                            case "ArrowRight":
                                return (e + 1) % t;
                            default:
                                return (e - 1 + t) % t;
                        }
                    })(t.indexOf(e), t.length, a);
                    return (s.current?.querySelectorAll('[role="tab"]')[r]?.focus(), t[r]);
                },
            }),
        k = f.useId(),
        D = null != u ? k : void 0,
        L = null != v ? (0, w.cq)(v) : null;
    function P(e) {
        null != u ? q(u) : h || (c(e), S());
    }
    function U(e) {
        "more" !== e ? P(e) : null != v && P(v);
    }
    function H(e) {
        "more" === e && (A || null == v) ? j() : U(e);
    }
    function F(e) {
        let t = e === O;
        return {
            id: `${d}-${e}`,
            type: "button",
            role: "tab",
            "aria-selected": t,
            "aria-controls": t ? l : void 0,
            "aria-disabled": null != u,
            "aria-describedby": D,
            disabled: h,
            tabIndex: t ? 0 : -1,
            onClick: () => H(e),
            onKeyDown: (t) =>
                (function (e, t) {
                    switch (e.key) {
                        case "Enter":
                            (e.preventDefault(), e.stopPropagation(), H(t));
                            break;
                        case " ":
                            (e.preventDefault(), e.stopPropagation());
                            break;
                        case "ArrowDown":
                            if ("more" !== t) break;
                            (e.preventDefault(), e.stopPropagation(), j());
                            break;
                        case "Tab":
                            S();
                            break;
                        case "ArrowLeft":
                        case "ArrowRight":
                        case "Home":
                        case "End":
                            (e.preventDefault(), e.stopPropagation(), S(), U(M(t, e.key)));
                    }
                })(t, e),
            onKeyUp: (t) => {
                " " === t.key && (t.preventDefault(), t.stopPropagation(), H(e));
            },
            className: _()(tb.Mf, { [tb.OS]: "more" === e, [tb.vu]: t }),
        };
    }
    return (0, i.jsxs)("div", {
        ref: y,
        role: "tablist",
        "aria-label": eg.intl.string(ex.default.Zl5vPW),
        className: tb.vR,
        children: [
            b.map((e) => {
                let t = (0, w.cq)(e);
                return (0, i.jsx)(
                    "button",
                    {
                        ...F(e),
                        "aria-label": t,
                        children: (0, i.jsx)(eu.E, {
                            tag: "span",
                            variant: "heading-sm/semibold",
                            color: "none",
                            children: t,
                        }),
                    },
                    e,
                );
            }),
            (0, i.jsx)(ta.Y, {
                targetElementRef: m,
                shouldShow: I,
                onRequestOpen: j,
                onRequestClose: N,
                position: "right",
                align: "top",
                spacing: 8,
                renderPopout: () =>
                    (0, i.jsx)(tu, {
                        menuRef: g,
                        options: tf,
                        activeCustomizationOption: n,
                        returnRef: m,
                        focusMenu: E,
                        onMouseEnter: T,
                        onMouseLeave: R,
                        onSelectOption: C,
                        onClose: S,
                    }),
                children: (e) =>
                    (0, i.jsxs)("button", {
                        ...e,
                        ...F("more"),
                        ref: m,
                        "aria-label":
                            null != L
                                ? eg.intl.formatToPlainString(ex.default.QX1VPx, { category: L })
                                : eg.intl.string(ex.default.jepsQ6),
                        "aria-haspopup": "menu",
                        "aria-expanded": I,
                        onMouseEnter: T,
                        onMouseLeave: R,
                        children: [
                            (0, i.jsx)(eu.E, {
                                tag: "span",
                                variant: "heading-sm/semibold",
                                color: "none",
                                children: L ?? eg.intl.string(ex.default["iXpQc+"]),
                            }),
                            (0, i.jsx)(tr.ChevronSmallRightIcon, { size: "refresh_sm", color: "currentColor" }),
                        ],
                    }),
            }),
            null != u && (0, i.jsx)(x.A, { id: k, children: (0, w.Cz)(u) }),
        ],
    });
}
var tp = a(195464);
function tm() {
    let e = f.useId(),
        t = f.useId(),
        [a, r] = f.useState(w.v7.BASE),
        { traitOptions: s, selectedOption: n, onSelectOption: c } = e8({ customizationOption: a }),
        d = B().find((e) => e === w.hw[a]),
        l = (0, p.bG)([o.A], () => o.A.isSaving),
        u = eo();
    return (0, i.jsxs)(te, {
        className: tp.n,
        children: [
            (0, i.jsx)(eh.D, {
                ref: u,
                variant: "heading-xl/medium",
                color: "none",
                className: tp.D,
                children: eg.intl.string(ex.default["q2nj/Z"]),
            }),
            (0, i.jsx)(t_, {
                tabIdPrefix: e,
                panelId: t,
                activeCustomizationOption: a,
                onSelectOption: r,
                blockedTrait: d,
                disabled: l,
            }),
            (0, i.jsx)("div", {
                role: "tabpanel",
                id: t,
                "aria-label": (0, w.cq)(a),
                children: (0, i.jsx)(e6, {
                    customizationOption: a,
                    traitOptions: s,
                    selectedOption: n,
                    onSelectOption: c,
                    disabled: l,
                }),
            }),
        ],
    });
}
var tx = a(81466);
function tg() {
    let e = (0, p.bG)([o.A], () => o.A.stats?.games);
    return (0, i.jsxs)(te, {
        children: [
            (0, i.jsx)(eI, {
                icon: tx.CalendarIcon,
                value: Math.round(e?.totalDaysPlayed ?? 0),
                topPercent: (0, E.bD)(e?.totalDaysPlayedPercentile),
                children: eg.intl.string(ex.default["4N5p4D"]),
            }),
            (0, i.jsx)(e9, { customizationOption: w.v7.AURA }),
        ],
    });
}
var tA = a(687966);
function tv() {
    let e = (0, p.bG)([o.A], () => o.A.stats?.games);
    return (0, i.jsxs)(te, {
        children: [
            (0, i.jsx)(eI, {
                icon: tA.GameControllerIcon,
                value: Math.round(e?.totalGamesPlayed ?? 0),
                topPercent: (0, E.bD)(e?.totalGamesPlayedPercentile),
                children: eg.intl.string(ex.default.HM2fjf),
            }),
            (0, i.jsx)(e9, { customizationOption: w.v7.WEARABLE }),
        ],
    });
}
var tw = a(534890),
    tI = a(350363);
function tE() {
    let e = (0, p.bG)([o.A], () => o.A.stats?.messages);
    return (0, i.jsxs)(te, {
        children: [
            (0, i.jsx)(eI, {
                icon: tw.ChatIcon,
                value: Math.round(e?.numMessagesSent ?? 0),
                topPercent: (0, E.bD)(e?.numMessagesSentPercentile),
                children: eg.intl.string(tI.default.wWKySP),
            }),
            (0, i.jsx)(e9, { customizationOption: w.v7.OUTFIT }),
        ],
    });
}
var tj = a(664121);
function tS() {
    let e = (0, p.bG)([o.A], () => o.A.stats?.guilds?.guilds[0]);
    return (0, i.jsxs)(te, {
        children: [
            (0, i.jsx)(eI, {
                icon: tj.ServerIcon,
                value: Math.round(e?.numDaysInteracted ?? 0),
                topPercent: (0, E.bD)(e?.numDaysInteractedPercentile),
                children: eg.intl.string(ex.default["M+a+t1"]),
            }),
            (0, i.jsx)(e9, { customizationOption: w.v7.HAT }),
        ],
    });
}
var tN = a(831544);
function tC() {
    let e = (0, p.bG)([o.A], () => o.A.stats?.voice),
        t = Math.round(e?.totalVoiceMinutes ?? 0);
    return (0, i.jsxs)(te, {
        children: [
            (0, i.jsx)(eI, {
                icon: tN.MicrophoneIcon,
                value: t,
                topPercent: (0, E.bD)(e?.totalVoiceMinutesPercentile),
                children: eg.intl.string(ex.default["3/T12E"]),
            }),
            (0, i.jsx)(e9, { customizationOption: w.v7.FACE }),
        ],
    });
}
function tT(e) {
    let { route: t } = e;
    switch (t) {
        case I.gr.VOICE_FACE:
            return (0, i.jsx)(tC, {});
        case I.gr.MESSAGES_OUTFIT:
            return (0, i.jsx)(tE, {});
        case I.gr.SERVERS_HEADWEAR:
            return (0, i.jsx)(tS, {});
        case I.gr.EMOJI_SHOES:
            return (0, i.jsx)(tt, {});
        case I.gr.GAMES_WEARABLE:
            return (0, i.jsx)(tv, {});
        case I.gr.GAME_TIME_AURA:
            return (0, i.jsx)(tg, {});
        case I.gr.FINALIZE_CHARACTER:
            return (0, i.jsx)(tm, {});
        default:
            return null;
    }
}
var tR = a(358618),
    tO = a(983851),
    ty = a(793920),
    tM = a(893007),
    tk = a(738964);
function tD(e) {
    return `${Math.round(e)}%`;
}
function tL() {
    let { volume: e, isMuted: t } = (0, p.cf)([o.A], () => ({ volume: o.A.volume, isMuted: o.A.isMuted })),
        a = f.useRef(null),
        r = f.useRef(null),
        [s, n] = f.useState(!1),
        [c, d] = f.useState(!1),
        [u, h] = f.useState(!1),
        [b, _] = f.useState(!1),
        m = f.useRef(null),
        x = f.useRef(!1),
        g = t ? 0 : Math.round(100 * e),
        A = !b && (s || c || u),
        v = 0 === g ? tR.VoiceXIcon : g > 50 ? tO.VoiceNormalIcon : ty.VoiceLowIcon;
    (f.useLayoutEffect(() => {
        null != r.current && (r.current.volume = e);
    }, [e]),
        (0, V.l0)(() => {
            null != m.current && clearTimeout(m.current);
        }));
    let w = f.useCallback((e) => {
            ((0, l.ls)(e / 100),
                h(!0),
                null != m.current && clearTimeout(m.current),
                (m.current = setTimeout(() => h(!1), 1e3)));
        }, []),
        I = f.useCallback(() => {
            (n(!0), _(!1));
        }, []),
        E = f.useCallback(() => n(!1), []),
        j = f.useCallback((e) => {
            d(!x.current && e.target.matches(":focus-visible"));
        }, []),
        S = f.useCallback(() => {
            ((x.current = !0), d(!1));
        }, []),
        N = f.useCallback(() => {
            ((x.current = !1), d(!0));
        }, []),
        C = f.useCallback(() => {
            n(a.current?.matches(":hover") ?? !1);
        }, []),
        T = f.useCallback((e) => {
            e.currentTarget.contains(e.relatedTarget) || ((x.current = !1), d(!1), _(!1));
        }, []),
        R = f.useCallback(
            (e) => {
                "Escape" === e.key &&
                    A &&
                    (e.preventDefault(),
                    e.stopPropagation(),
                    null != m.current && clearTimeout(m.current),
                    h(!1),
                    _(!0),
                    a.current?.querySelector("button")?.focus());
            },
            [A],
        );
    return (0, i.jsxs)("div", {
        ref: a,
        className: tk.kL,
        onMouseEnter: I,
        onMouseLeave: E,
        onFocus: j,
        onPointerDownCapture: S,
        onBlur: T,
        onKeyDownCapture: N,
        onKeyDown: R,
        children: [
            (0, i.jsx)(et, {
                size: "sm",
                className: A ? tk.Gg : void 0,
                "aria-label": eg.intl.string(t ? tI.default.GN0uv6 : tI.default.pjF33X),
                onClick: l.K8,
                children: (0, i.jsx)(v, { size: "xs", color: "currentColor" }),
            }),
            A
                ? (0, i.jsx)("div", {
                      className: tk.xJ,
                      children: (0, i.jsx)(tM.A, {
                          value: g,
                          minValue: 0,
                          maxValue: 100,
                          onChange: w,
                          onChangeEnd: C,
                          formatValue: tD,
                          "aria-label": eg.intl.string(eg.t.xPHVBs),
                      }),
                  })
                : null,
            (0, i.jsx)("audio", {
                ref: r,
                autoPlay: !0,
                loop: !0,
                muted: t,
                children: (0, i.jsx)("source", {
                    src: "https://cdn.discordapp.com/assets/content/d271231f4934992caed169c11586a1da060d37b5fd8804b56666b547f03836bd.mp3",
                }),
            }),
        ],
    });
}
let tP =
        "https://cdn.discordapp.com/assets/content/914f6f5e36c680d00944ba2e6278b45f8b1da722692e101b5986cf7be56c4979.mp3",
    tU =
        "https://cdn.discordapp.com/assets/content/d1dfc8280cfbd578f18728598db893d807d9ece6b511389848b7308c399f07a0.mp3";
var tG = a(477155),
    tH = a(866665),
    tF = a(417270),
    tK = a(935286),
    tB = a(405433),
    tV = a(289873),
    tz = a(621466);
function tW(e, t) {
    let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    f.useEffect(() => {
        if (!a) return (window.addEventListener("keydown", r), () => window.removeEventListener("keydown", r));
        function r(a) {
            (0, tz.vq)(a.target, HTMLTextAreaElement) ||
                (0, tz.vq)(a.target, HTMLInputElement) ||
                (a.key === e && t(a));
        }
    }, [e, t, a]);
}
var tY = a(652215),
    tq = a(650583);
function tX(e) {
    let { source: t, onClick: a, disabled: r = !1 } = e,
        i = eM(t),
        s = f.useRef(!1);
    function n() {
        r || i();
    }
    return {
        playSound: n,
        onPointerDown: function (e) {
            e.button === tY.hE4.PRIMARY && ((s.current = !0), n());
        },
        onKeyDown: function (e) {
            (e.key === tq.dh.ENTER || e.key === tq.dh.SPACE) && ((s.current = !0), e.repeat || n());
        },
        onClickWithSound: function () {
            (s.current || n(), (s.current = !1), a());
        },
    };
}
var tQ = a(753875);
function tZ(e) {
    let { "aria-label": t, "aria-describedby": a, icon: r, onClick: s, disabled: n = !1 } = e,
        {
            playSound: c,
            onPointerDown: d,
            onKeyDown: l,
            onClickWithSound: o,
        } = tX({ source: tP, onClick: s, disabled: n });
    return (
        tW(
            "ArrowLeft",
            function (e) {
                (e.repeat || c(), s());
            },
            n,
        ),
        (0, i.jsx)(et, {
            onPointerDown: d,
            onKeyDown: l,
            onClick: o,
            size: "md",
            className: _()(tQ.A4, tQ.aX),
            "aria-disabled": n,
            "aria-describedby": a,
            "aria-label": t,
            children: (0, i.jsx)(r, { color: "currentColor" }),
        })
    );
}
function tJ(e) {
    let {
            "aria-label": t,
            "aria-describedby": a,
            children: r,
            onClick: s,
            size: n,
            className: c,
            disabled: d = !1,
            sound: l = tU,
        } = e,
        {
            playSound: o,
            onPointerDown: u,
            onKeyDown: h,
            onClickWithSound: f,
        } = tX({ source: l, onClick: s, disabled: d });
    return (
        tW(
            "ArrowRight",
            function (e) {
                (e.repeat || o(), s());
            },
            d,
        ),
        (0, i.jsx)(ea, {
            onPointerDown: u,
            onKeyDown: h,
            onClick: f,
            size: n,
            className: _()(tQ.A4, tQ.K2, c),
            "aria-disabled": d,
            "aria-describedby": a,
            "aria-label": t,
            children: r,
        })
    );
}
function t$(e) {
    let { "aria-describedby": t, onClick: a, disabled: r } = e;
    return (0, i.jsx)(tZ, {
        "aria-label": eg.intl.string(eg.t["13/7kX"]),
        "aria-describedby": t,
        icon: tG.ArrowSmallLeftIcon,
        onClick: a,
        disabled: r,
    });
}
function t0(e) {
    let { onClick: t } = e,
        { onPointerDown: a, onKeyDown: r, onClickWithSound: s } = tX({ source: tU, onClick: t });
    return (0, i.jsx)(tH.m, {
        text: eg.intl.string(ex.default.cWdGf9),
        ariaHidden: !0,
        children: (0, i.jsx)(et, {
            onPointerDown: a,
            onKeyDown: r,
            onClick: s,
            size: "md",
            className: _()(tQ.A4, tQ.eZ),
            "aria-label": eg.intl.string(ex.default.cWdGf9),
            children: (0, i.jsx)(tF.RetryIcon, { color: "currentColor" }),
        }),
    });
}
function t1(e) {
    let { "aria-describedby": t, onClick: a, disabled: r } = e;
    return (0, i.jsx)(tJ, {
        size: "md",
        "aria-label": eg.intl.string(eg.t.PDTjLN),
        "aria-describedby": t,
        onClick: a,
        disabled: r,
        children: (0, i.jsx)(tK.ArrowSmallRightIcon, { color: "currentColor" }),
    });
}
function t5(e) {
    let { onClick: t, disabled: a } = e;
    return (0, i.jsxs)(tJ, {
        size: "custom",
        className: tQ.GA,
        "aria-label": eg.intl.string(eg.t.i4jeWR),
        onClick: t,
        disabled: a,
        children: [
            (0, i.jsx)(eb, { variant: "mono-md/normal", className: tQ.Pf, children: eg.intl.string(eg.t.i4jeWR) }),
            (0, i.jsx)(tK.ArrowSmallRightIcon, { size: "refresh_sm", color: "currentColor" }),
        ],
    });
}
function t6(e) {
    let { onClick: t, disabled: a } = e;
    return (0, i.jsxs)(tJ, {
        size: "custom",
        className: _()(tQ.GA, tQ.Bq),
        "aria-label": eg.intl.string(eg.t.RDE0Sc),
        onClick: t,
        disabled: a,
        children: [
            (0, i.jsx)(eu.E, {
                variant: "mono-md/bold",
                color: "none",
                className: tQ.Pf,
                children: eg.intl.string(eg.t.RDE0Sc),
            }),
            (0, i.jsx)(tB.ShareIcon, { size: "refresh_sm", color: "currentColor" }),
        ],
    });
}
function t2(e) {
    let { onBack: t, isRouteBlocked: a, blockedTraitDescriptionId: r } = e,
        s = (0, p.bG)([o.A], () => o.A.isSaving);
    return (0, i.jsx)(t$, {
        "aria-describedby": r,
        onClick: function () {
            s || t();
        },
        disabled: s || a,
    });
}
function t3(e) {
    let { onNext: t, navigate: a, isRouteBlocked: r, blockedTraitDescriptionId: n } = e,
        c = (0, p.bG)([o.A], () => o.A.isSaving);
    async function d() {
        if (c) return;
        let e = (0, K.XI)(o.A.selectedCharacterTraits);
        (await (0, l.yE)(e)) ? t() : (0, s.P0)({ text: eg.intl.string(eg.t.fEptJP), variant: "critical" });
    }
    return (0, i.jsxs)(tJ, {
        size: "custom",
        className: tQ.GA,
        "aria-label": eg.intl.string(eg.t["R3BPH+"]),
        "aria-describedby": n,
        onClick: function () {
            a(d);
        },
        disabled: c || r,
        sound: "https://cdn.discordapp.com/assets/content/1514d999969512ff06ade75018213676ebaf3698af26c0b1b7d3243ec480f920.mp3",
        children: [
            (0, i.jsx)(eb, { variant: "mono-md/normal", className: tQ.Pf, children: eg.intl.string(eg.t["R3BPH+"]) }),
            c
                ? (0, i.jsx)(tV.y, { type: tV.t.SPINNING_CIRCLE_SIMPLE, className: tQ.u1, itemClassName: tQ.$N })
                : (0, i.jsx)(tK.ArrowSmallRightIcon, { size: "refresh_sm", color: "currentColor" }),
        ],
    });
}
function t4(e) {
    let { activeRoute: t, blockedTrait: a, blockedTraitDescriptionId: r, onBack: s, onNext: n, onReplay: c } = e,
        d = null != a,
        l = f.useMemo(() => (0, eT.throttle)((e) => e(), 500, { trailing: !1 }), []);
    function o(e) {
        null != a ? q(a) : l(e);
    }
    switch (t) {
        case I.gr.HOME:
            return null;
        case I.gr.FINALIZE_CHARACTER:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(t2, { onBack: () => o(s), isRouteBlocked: d, blockedTraitDescriptionId: r }),
                    (0, i.jsx)(t3, { onNext: n, navigate: o, isRouteBlocked: d, blockedTraitDescriptionId: r }),
                ],
            });
        case I.gr.SUMMARY:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(t$, { onClick: () => l(s) }),
                    (0, i.jsx)(t0, { onClick: () => l(c) }),
                    (0, i.jsx)(t6, { onClick: () => l(n) }),
                ],
            });
        case I.gr.SHARE:
            return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(t$, { onClick: () => l(s) }), (0, i.jsx)(t5, { onClick: () => l(n) })],
            });
        default:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(t$, { "aria-describedby": r, onClick: () => o(s), disabled: d }),
                    (0, i.jsx)(t1, { "aria-describedby": r, onClick: () => o(n), disabled: d }),
                ],
            });
    }
}
function t8(e) {
    let { className: t } = e;
    return (0, i.jsx)(er, {
        animatedSrc:
            "https://cdn.discordapp.com/assets/content/02e9ae4cdbec0b2adef22c9a5659f5c7340e399cc8932e8af6d41e62a37644ae.png",
        staticSrc:
            "https://cdn.discordapp.com/assets/content/f08be0abd0d224b5f7e1e5d6c1ef8e4d24cddcb712e2c624dcc6ea3d136818d5.png",
        className: t,
    });
}
var t9 = a(771639);
let t7 = { "--custom-checkpoint-screen-vertical-inset": "88px" };
function ae(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", { className: t9.n, style: t7, children: t });
}
var at = a(639331);
function aa() {
    let e = (0, p.bG)([o.A], () => o.A.fetchState !== o.T.SUCCESS || null != o.A.stats),
        t = eo();
    return (0, i.jsx)(ae, {
        children: (0, i.jsxs)("div", {
            className: at.Qs,
            children: [
                (0, i.jsxs)("div", {
                    ref: t,
                    className: at.Ok,
                    role: "heading",
                    "aria-level": 2,
                    children: ["2026", !e && (0, i.jsx)(t8, { className: at.gi })],
                }),
                (0, i.jsxs)("div", {
                    className: at.eH,
                    children: [
                        (0, i.jsx)(eb, {
                            tag: "p",
                            variant: "heading-xl/medium",
                            children: eg.intl.string(e ? ex.default["7YmUVu"] : ex.default["Fyr+NW"]),
                        }),
                        !e &&
                            (0, i.jsx)(eb, {
                                tag: "p",
                                variant: "heading-xl/medium",
                                children: eg.intl.string(ex.default["2GRr6H"]),
                            }),
                    ],
                }),
            ],
        }),
    });
}
(a(134528), a(947204));
var ar = a(675970),
    ai = a(559106),
    as = a(366056),
    an = a(292801),
    ac = a(155718),
    ad = a(294454),
    al = a(489414),
    ao = a(878358),
    au = a(383233),
    ah = a(819648),
    af = a(677059);
function ab(e) {
    let { children: t } = e;
    return (0, i.jsx)(eb, { variant: "heading-xxl/medium", className: af.h, children: t });
}
function a_(e) {
    let { accessibilityLabel: t, className: a, children: r, ref: s } = e;
    return (0, i.jsxs)("div", {
        ref: s,
        role: "heading",
        "aria-level": 2,
        children: [
            (0, i.jsx)("div", { className: a, "aria-hidden": !0, children: r }),
            (0, i.jsx)(x.A, { children: t }),
        ],
    });
}
var ap = a(100391);
function am(e) {
    let { icon: t, children: a } = e;
    return (0, i.jsxs)("div", {
        className: ap.D,
        children: [
            (0, i.jsx)(t, { size: "md", color: "currentColor" }),
            (0, i.jsx)(eb, { variant: "heading-lg/semibold", className: ap.Q, children: a }),
        ],
    });
}
function ax(e) {
    let { icon: t, children: a } = e;
    return (0, i.jsxs)("div", {
        className: ap.D,
        children: [
            (0, i.jsx)(t, { size: "md", color: "currentColor" }),
            (0, i.jsx)(e_, { variant: "heading-lg/semibold", className: ap.Q, children: a }),
        ],
    });
}
var ag = a(456410);
function aA(e) {
    let { name: t, label: a, checked: r, onSelect: s, children: n } = e;
    return (0, i.jsx)(ai.vN, {
        within: !0,
        children: (0, i.jsxs)("label", {
            className: _()(ag.uK, { [ag.KD]: r }),
            children: [
                (0, i.jsx)(x.A, {
                    children: (0, i.jsx)("input", { type: "radio", name: t, checked: r, onChange: s, "aria-label": a }),
                }),
                r ? (0, i.jsx)("div", { className: ag.Gt, "aria-hidden": !0 }) : null,
                (0, i.jsx)("div", { className: ag.Nr, "aria-hidden": !0, children: n }),
            ],
        }),
    });
}
function av() {
    let e = (0, p.bG)([o.A], () => o.A.character),
        t = (0, p.bG)([o.A], () => o.A.stats),
        a = f.useId(),
        r = eo(),
        n = f.useMemo(() => {
            var a, r;
            return ((a = e),
            (r = t),
            null != a && null != r
                ? [ar.Q.CHARACTER_ONLY, ar.Q.DEFAULT, ar.Q.STATS_ONLY]
                : null != a
                  ? [ar.Q.CHARACTER_ONLY]
                  : null != r
                    ? [ar.Q.STATS_ONLY]
                    : []).map((a) => ({ cardType: a, checkpointData: (0, ah.Go)(a, e, t) }));
        }, [e, t]),
        [c, d] = f.useState(
            () =>
                (
                    n.find((e) => {
                        let { cardType: t } = e;
                        return t === ar.Q.DEFAULT;
                    }) ?? n.at(0)
                )?.cardType,
        ),
        u = n.find((e) => {
            let { cardType: t } = e;
            return t === c;
        }),
        b = eM(eN),
        {
            onPointerDown: _,
            onKeyDown: m,
            onClickWithSound: x,
        } = tX({
            source: tU,
            onClick: function () {
                if (null == u) return;
                let { cardType: e, checkpointData: t } = u;
                (0, ad.fO)({
                    message: new au.Ay({
                        content: "",
                        components: [{ type: ac.I5.CHECKPOINT_CARD, id: (0, al.X1)("0"), checkpointData: t }],
                    }),
                    source: "checkpoint",
                    customSendHandler: async (t, a, r) => {
                        let { withMessage: i } = a;
                        r(!0);
                        try {
                            (await (0, l.jA)(t, i ?? "", e),
                                (0, h.Pe)(e),
                                (0, ad.Be)(),
                                (0, s.P0)({ text: eg.intl.string(eg.t.kwmYkt), variant: "success" }));
                        } catch {
                            (0, s.P0)({ text: eg.intl.string(eg.t.iufib1), variant: "critical" });
                        } finally {
                            r(!1);
                        }
                    },
                });
            },
        });
    return null == u
        ? null
        : (0, i.jsx)(ae, {
              children: (0, i.jsxs)("div", {
                  className: ag.uM,
                  children: [
                      (0, i.jsxs)("div", {
                          className: ag.wx,
                          children: [
                              (0, i.jsxs)(a_, {
                                  ref: r,
                                  className: ag.R_,
                                  accessibilityLabel: eg.intl.string(ex.default.P5zyko),
                                  children: [
                                      (0, i.jsx)(am, {
                                          icon: as.ExperimentalCheckpointIcon,
                                          children: eg.intl.string(tI.default.ir6nEQ),
                                      }),
                                      (0, i.jsx)(eb, {
                                          variant: "display-lg",
                                          className: ag.Vy,
                                          children: eg.intl.string(eg.t.RDE0Sc),
                                      }),
                                  ],
                              }),
                              (0, i.jsx)("div", {
                                  className: ag.h_,
                                  children: (0, i.jsx)(ab, { children: eg.intl.string(ex.default.KXDPot) }),
                              }),
                          ],
                      }),
                      (0, i.jsx)("div", {
                          role: "radiogroup",
                          "aria-label": eg.intl.string(ex.default.KXDPot),
                          className: ag.kR,
                          children: n.map((e) => {
                              let { cardType: t, checkpointData: r } = e;
                              return (0, i.jsx)(
                                  aA,
                                  {
                                      name: a,
                                      label: (function (e) {
                                          switch (e) {
                                              case ar.Q.CHARACTER_ONLY:
                                                  return eg.intl.string(ex.default.tUU3fe);
                                              case ar.Q.DEFAULT:
                                                  return eg.intl.string(ex.default.DZQzJn);
                                              case ar.Q.STATS_ONLY:
                                                  return eg.intl.string(ex.default.e2UHGT);
                                          }
                                      })(t),
                                      checked: t === u.cardType,
                                      onSelect: () => {
                                          (b(), d(t));
                                      },
                                      children: (0, i.jsx)(ao.A, { checkpointData: r }),
                                  },
                                  t,
                              );
                          }),
                      }),
                      (0, i.jsxs)(ea, {
                          onPointerDown: _,
                          onKeyDown: m,
                          onClick: x,
                          size: "custom",
                          className: ag.sY,
                          "aria-label": eg.intl.string(eg.t.I3ltXO),
                          children: [
                              (0, i.jsx)(eu.E, {
                                  variant: "mono-md/bold",
                                  color: "none",
                                  className: ag.RC,
                                  children: eg.intl.string(eg.t.I3ltXO),
                              }),
                              (0, i.jsx)(an.ArrowAngleRightUpIcon, { size: "refresh_sm", color: "currentColor" }),
                          ],
                      }),
                  ],
              }),
          });
}
var aw = a(206701),
    aI = a(782134),
    aE = a(998304),
    aj = a(975571),
    aS = a(427262),
    aN = a(438389);
let aC = (0, aE.j5)(W.Kr);
function aT(e) {
    let { onStart: t } = e,
        a = (0, p.bG)([H.default], () => H.default.getCurrentUser()),
        r = (0, aS.tx)(a),
        s = (0, p.bG)([Q.Ay], () => Q.Ay.useReducedMotion),
        { playSound: n, onPointerDown: c, onKeyDown: d, onClickWithSound: l } = tX({ source: tU, onClick: t });
    return (
        tW("ArrowRight", function (e) {
            (e.repeat || n(), t());
        }),
        (0, i.jsxs)(ae, {
            children: [
                (0, i.jsxs)("div", {
                    className: aN.Qs,
                    children: [
                        (0, i.jsxs)("div", {
                            className: aN.wx,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: aN.Qq,
                                    children: [
                                        (0, i.jsx)(e_, {
                                            variant: "display-lg",
                                            className: aN.DD,
                                            children: eg.intl.string(tI.default["CdU/PF"]),
                                        }),
                                        (0, i.jsx)(eb, {
                                            variant: "heading-xxl/medium",
                                            children: eg.intl.formatToPlainString(ex.default.xhZ23b, { username: r }),
                                        }),
                                    ],
                                }),
                                (0, i.jsx)("div", {
                                    className: aN.CB,
                                    children: (0, i.jsx)(aw.U, {
                                        artboard: "Entry",
                                        className: aN.lW,
                                        fit: "contain",
                                        withReducedMotion: "short-loop",
                                        dataBinding: { iconColor: aC, reducedMotion: s },
                                    }),
                                }),
                            ],
                        }),
                        (0, i.jsxs)(ea, {
                            onPointerDown: c,
                            onKeyDown: d,
                            onClick: l,
                            size: "custom",
                            className: aN.ni,
                            "aria-label": eg.intl.string(eg.t.I0v0Qv),
                            children: [
                                (0, i.jsx)(aI.PlayIcon, { size: "refresh_sm", color: "currentColor" }),
                                (0, i.jsx)(eb, {
                                    variant: "mono-md/normal",
                                    className: aN.qK,
                                    children: eg.intl.string(eg.t.I0v0Qv),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: aN.qr,
                    children: [
                        (0, i.jsx)(eb, {
                            variant: "body-sm/medium",
                            className: aN.ed,
                            children: eg.intl.format(ex.default.hcNhyq, {
                                learnMoreHook: (e, t) =>
                                    (0, i.jsx)(
                                        ek.Anchor,
                                        {
                                            className: aN.nf,
                                            href: aj.A.getArticleURL(tY.MVz.CHECKPOINT),
                                            useDefaultUnderlineStyles: !1,
                                            children: e,
                                        },
                                        t,
                                    ),
                            }),
                        }),
                        (0, i.jsx)(eb, {
                            variant: "body-md/medium",
                            className: aN.al,
                            children: eg.intl.format(tI.default.g476ZL, { name: "Exyl" }),
                        }),
                    ],
                }),
            ],
        })
    );
}
var aR = a(565645),
    aO = a(141881);
function ay(e) {
    let { children: t } = e;
    return (0, i.jsx)(em, { className: aO.l, children: t });
}
var aM = a(765671),
    ak = a(663385),
    aD = a(469228),
    aL = a(406956);
let aP = (0, aE.j5)(W.Kr);
function aU(e) {
    let { value: t, alignment: a = "left", className: r } = e,
        s = (0, p.bG)([Q.Ay], () => Q.Ay.useReducedMotion),
        [n, c] = f.useState(0),
        d = s ? t : n;
    f.useEffect(() => {
        if (s) return;
        let e = performance.now(),
            a = requestAnimationFrame(function r(i) {
                let s = Math.min((i - e) / 500, 1);
                (c(Math.round(t * s)), s < 1 && (a = requestAnimationFrame(r)));
            });
        return () => cancelAnimationFrame(a);
    }, [t, s]);
    let l = "center" === a ? ak.m : aD.w;
    return (0, i.jsxs)("div", {
        className: _()(aL.lY, r),
        children: [
            (0, i.jsx)("div", { className: aL.VL, children: t }),
            (0, i.jsx)(l, {
                className: aL.lW,
                fit: "layout",
                withReducedMotion: "short-loop",
                dataBinding: { DisplayValue: d, TextColor: aP },
            }),
            (0, i.jsx)(x.A, { children: t.toLocaleString(eg.intl.currentLocale) }),
        ],
    });
}
var aG = a(434911);
function aH(e) {
    let { value: t } = e,
        { ref: a, width: r } = (0, aM.Ay)(),
        { ref: s, width: n } = (0, aM.Ay)(),
        c = null != r && null != n ? Math.min(1, r / n) : 1;
    return (0, i.jsxs)("div", {
        ref: a,
        className: aG.ai,
        style: { height: 200 * c },
        children: [
            (0, i.jsx)("span", { ref: s, className: _()(aG.Qq, aG.xP), children: t }),
            (0, i.jsx)(aU, { value: t }),
        ],
    });
}
function aF(e) {
    let { value: t } = e;
    return (0, i.jsxs)("div", {
        className: aG.dJ,
        children: [
            "number" == typeof t
                ? (0, i.jsx)(aH, { value: t })
                : (0, i.jsx)(eb, { variant: "heading-xxl/medium", className: aG.Qq, children: t }),
            (0, i.jsx)(t8, { className: aG.gi }),
        ],
    });
}
(a(393431), a(532706), a(42231), a(232424), a(949626), a(767709), a(65162));
var aK = a(445199),
    aB = a(205524),
    aV = a(690521),
    az = a(152321);
let aW = [0, 0, 2],
    aY = [0, 1, 0],
    aq = [0, 0, 0],
    aX = `
attribute vec4 a_position;
attribute vec2 a_texcoord;
uniform mat4 u_normalMatrix;
attribute vec3 a_vertexNormal;

uniform mat4 u_matrix;

varying vec2 v_texcoord;
varying highp vec3 v_lighting;

void main() {
  // Multiply the position by the matrix.
  gl_Position = u_matrix * a_position;

  // Pass the texcoord to the fragment shader.
  v_texcoord = a_texcoord;

  highp vec3 ambientLight = vec3(0.4, 0.4, 0.4);
  highp vec3 directionalLightColor = vec3(0.6, 0.6, 0.6);
  highp vec3 directionalVector = normalize(vec3(0.0, 0.0, 1.0));

  highp vec4 transformedNormal = u_normalMatrix * vec4(a_vertexNormal, 0.0);

  highp float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);
  v_lighting = ambientLight + (directionalLightColor * directional);
}
`,
    aQ = `
precision mediump float;

varying vec2 v_texcoord;
varying highp vec3 v_lighting;

uniform sampler2D u_texture;

void main() {
  highp vec4 texelColor = texture2D(u_texture, v_texcoord);
  gl_FragColor = vec4(texelColor.rgb * v_lighting, texelColor.a);
}
`,
    aZ = [
        -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5,
        -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5,
        0.5, 0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, -0.5,
        -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5,
        -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5,
        -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5,
    ],
    aJ = [
        0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0,
        1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0,
    ],
    a$ = [
        0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
        1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
        -1, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
        1, 0, 0,
    ];
function a0(e) {
    let t,
        { emoji: a } = e,
        [r, s] = f.useState(null),
        [n, c] = f.useState(null),
        d = f.useRef(new Image()),
        [l, o] = f.useState(null),
        [u, h] = f.useState(!1),
        b = f.useRef(0),
        m = f.useRef(0),
        x = f.useRef(45),
        g = f.useRef(45),
        A = (0, p.bG)([Q.Ay], () => Q.Ay.useReducedMotion),
        v = 70 * !A,
        w = 40 * !A,
        I = f.useRef(v),
        E = f.useRef(w),
        j = f.useRef(!1),
        S = f.useRef(0),
        N = f.useRef(0);
    ((t = f.useRef(null)),
        f.useEffect(() => {
            if (null == t.current || null == n) return;
            let e = t.current,
                a = e.createTexture();
            return (
                e.bindTexture(e.TEXTURE_2D, a),
                e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, n),
                e.generateMipmap(e.TEXTURE_2D),
                () => e.deleteTexture(a)
            );
        }, [n, l]),
        f.useEffect(() => {
            let e,
                a = 0,
                i = r?.getContext("webgl");
            if (null == i || null == r || null == n) return;
            t.current = i;
            let s = i.createShader(i.VERTEX_SHADER),
                c = i.createShader(i.FRAGMENT_SHADER);
            if (null == s || null == c) return;
            if (
                (i.shaderSource(s, aX),
                i.shaderSource(c, aQ),
                i.compileShader(s),
                !i.getShaderParameter(s, i.COMPILE_STATUS))
            )
                return void console.error("ERROR compiling vertex shader!", i.getShaderInfoLog(s));
            if ((i.compileShader(c), !i.getShaderParameter(c, i.COMPILE_STATUS)))
                return void console.error("ERROR compiling fragment shader!", i.getShaderInfoLog(c));
            let d = i.createProgram();
            if (
                (i.attachShader(d, s), i.attachShader(d, c), i.linkProgram(d), !i.getProgramParameter(d, i.LINK_STATUS))
            )
                return void console.error("ERROR linking program!", i.getProgramInfoLog(d));
            if ((i.validateProgram(d), !i.getProgramParameter(d, i.VALIDATE_STATUS)))
                return void console.error("ERROR validating program!", i.getProgramInfoLog(d));
            let l = i.getAttribLocation(d, "a_position"),
                o = i.getAttribLocation(d, "a_texcoord"),
                u = i.getUniformLocation(d, "u_matrix"),
                h = i.getUniformLocation(d, "u_texture"),
                f = i.getAttribLocation(d, "a_vertexNormal"),
                b = i.getUniformLocation(d, "u_normalMatrix"),
                _ = i.createBuffer();
            (i.bindBuffer(i.ARRAY_BUFFER, _),
                i.bufferData(i.ARRAY_BUFFER, new Float32Array(a$), i.STATIC_DRAW),
                i.vertexAttribPointer(f, 3, i.FLOAT, !1, 0, 0),
                i.enableVertexAttribArray(f));
            let p = i.createBuffer();
            (i.bindBuffer(i.ARRAY_BUFFER, p),
                (e = new Float32Array(aZ)),
                i.bufferData(i.ARRAY_BUFFER, e, i.STATIC_DRAW));
            let m = i.createBuffer();
            (i.bindBuffer(i.ARRAY_BUFFER, m), i.bufferData(i.ARRAY_BUFFER, new Float32Array(aJ), i.STATIC_DRAW));
            let A = aK.DF(60);
            return (
                (a = requestAnimationFrame(function e() {
                    if (null == i || null == r) return;
                    (i.viewport(0, 0, i.canvas.width, i.canvas.height), i.enable(i.CULL_FACE), i.enable(i.DEPTH_TEST));
                    let t = aK.DF(x.current),
                        s = aK.DF(g.current);
                    (i.clear(i.COLOR_BUFFER_BIT | i.DEPTH_BUFFER_BIT),
                        i.useProgram(d),
                        i.enableVertexAttribArray(l),
                        i.bindBuffer(i.ARRAY_BUFFER, p),
                        i.vertexAttribPointer(l, 3, i.FLOAT, !1, 0, 0),
                        i.enableVertexAttribArray(o),
                        i.bindBuffer(i.ARRAY_BUFFER, m),
                        i.vertexAttribPointer(o, 2, i.FLOAT, !1, 0, 0));
                    let n = r.clientWidth / r.clientHeight,
                        c = aB.fN(aB.vt(), A, n, 1, 2e3),
                        f = aB.t5(aB.vt(), aW, aq, aY),
                        _ = aB.lw(aB.vt(), c, f),
                        v = aB.vt();
                    (aB.eL(v, v, t), aB.Z8(v, v, s));
                    let w = aB.lw(aB.vt(), _, v),
                        I = aB.vt();
                    (aB.B8(I, v),
                        aB.mg(I, I),
                        i.uniformMatrix4fv(b, !1, I),
                        i.uniformMatrix4fv(u, !1, w),
                        i.uniform1i(h, 0),
                        i.drawArrays(i.TRIANGLES, 0, 36),
                        (a = requestAnimationFrame(e)));
                })),
                () => cancelAnimationFrame(a)
            );
        }, [x, g, r, n]));
    let C = f.useCallback(() => {
        let e = n?.getContext("2d");
        null != n &&
            null != e &&
            ((e.fillStyle = "black"),
            e.fillRect(0, 0, n.width, n.height),
            e.drawImage(d.current, 0, 0, n.width, n.height),
            (e.fillStyle = W.Kr),
            e.fillRect(0, 0, n.width, 1),
            e.fillRect(0, 0, 1, n.height),
            e.fillRect(0, n.height - 1, n.width, 1),
            e.fillRect(n.width - 1, 0, 1, n.height),
            o(a),
            h(!0));
    }, [a, d, n]);
    (f.useEffect(() => {
        null != n &&
            ((d.current.crossOrigin = "anonymous"), (d.current.src = (0, aV.Ez)(a, 256)), (d.current.onload = C));
    }, [a, C, d, n]),
        f.useEffect(
            () => (
                !(function e(t) {
                    let a = 0.001 * t,
                        r = Math.min(a - m.current, 0.1);
                    if (((g.current += -E.current * r), (x.current += -I.current * r), !j.current)) {
                        if (Math.abs(I.current) > v) {
                            let e = I.current > 0 ? 1 : -1;
                            I.current -= 2 * e * window.devicePixelRatio;
                        }
                        if (Math.abs(E.current) > w) {
                            let e = E.current > 0 ? 1 : -1;
                            E.current -= 2 * e * window.devicePixelRatio;
                        }
                    }
                    ((m.current = a), (b.current = requestAnimationFrame(e)));
                })(0),
                () => cancelAnimationFrame(b.current)
            ),
            [v, w],
        ));
    let T = f.useCallback((e) => {
            ((j.current = !0), (I.current = 0), (E.current = 0), (S.current = e.clientX), (N.current = e.clientY));
        }, []),
        R = f.useCallback((e) => {
            if (j.current) {
                let t = (e.clientX - S.current) / window.devicePixelRatio;
                ((I.current = -((e.clientY - N.current) / window.devicePixelRatio) * (100 / window.devicePixelRatio)),
                    (E.current = -t * (100 / window.devicePixelRatio)),
                    (S.current = e.clientX),
                    (N.current = e.clientY));
            }
        }, []),
        O = f.useCallback(() => {
            j.current = !1;
        }, []);
    return (
        f.useEffect(
            () => (
                window.addEventListener("mouseup", O),
                window.addEventListener("mousemove", R),
                () => {
                    (window.removeEventListener("mouseup", O), window.removeEventListener("mousemove", R));
                }
            ),
            [R, O],
        ),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("canvas", {
                    className: _()(az.Ji, { [az.q4]: !u }),
                    ref: s,
                    height: 512,
                    width: 512,
                    onMouseDown: T,
                }),
                (0, i.jsx)("canvas", { className: az.R, ref: c, height: 256, width: 256 }),
            ],
        })
    );
}
var a1 = a(826820);
let a5 = [];
function a6(e) {
    let { emojiStats: t } = e,
        a = Math.round(t?.numEmojisSent ?? 0),
        r = (0, E.bD)(t?.numEmojisSentPercentile);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: a1.dJ,
                children: [
                    (0, i.jsx)(ax, {
                        icon: el.EmojiSlightlySmilingFaceIcon,
                        children: eg.intl.string(ex.default.ZTDCIv),
                    }),
                    (0, i.jsx)(aU, { value: a }),
                ],
            }),
            (0, i.jsx)(ab, {
                children:
                    null != r
                        ? eg.intl.format(ex.default.o7vDrk, {
                              percent: r,
                              percentHook: (e, t) => (0, i.jsx)(ay, { children: e }, t),
                          })
                        : eg.intl.format(ex.default.NFptic, { numEmojis: a }),
            }),
        ],
    });
}
function a2(e) {
    let { numEmojisSent: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: a1.dJ,
                children: [
                    (0, i.jsx)(ax, {
                        icon: el.EmojiSlightlySmilingFaceIcon,
                        children: eg.intl.string(ex.default.ZTDCIv),
                    }),
                    (0, i.jsx)(aF, { value: t }),
                ],
            }),
            (0, i.jsx)(ab, { children: eg.intl.format(ex.default["660/Rr"], { numEmojis: (0, E.wj)(t) }) }),
        ],
    });
}
function a3() {
    let e = (0, p.bG)([o.A], () => o.A.stats?.emojis),
        t = (0, p.bG)([o.A], () => (0, E.y7)(o.A.stats)),
        a = (0, p.bG)([o.A], () => o.A.globalStats?.emojis),
        r = !t && null != a,
        s = (r ? a.emojis : e?.emojis) ?? a5,
        [n, c] = f.useState(0),
        d = s[n],
        l = eM(eN);
    return (0, i.jsx)(ae, {
        children: (0, i.jsxs)("div", {
            className: a1.kL,
            children: [
                (0, i.jsx)("div", { className: a1.KY, children: null != d && (0, i.jsx)(a0, { emoji: d }) }),
                (0, i.jsxs)("div", {
                    className: a1.C,
                    children: [
                        r ? (0, i.jsx)(a2, { numEmojisSent: a.numEmojisSent }) : (0, i.jsx)(a6, { emojiStats: e }),
                        (0, i.jsx)("div", {
                            className: a1.gm,
                            children: s.map((e, t) =>
                                (0, i.jsx)(
                                    a4,
                                    {
                                        emoji: e,
                                        rank: t + 1,
                                        isActive: t === n,
                                        onClick: () => {
                                            (l(), c(t));
                                        },
                                    },
                                    e.id ?? e.name,
                                ),
                            ),
                        }),
                    ],
                }),
            ],
        }),
    });
}
function a4(e) {
    let { emoji: t, rank: a, isActive: r, onClick: s } = e,
        n = !(0, p.bG)([Q.Ay], () => Q.Ay.useReducedMotion) && !0 === t.animated;
    return (0, i.jsxs)(et, {
        size: "custom",
        className: a1._X,
        onClick: s,
        "aria-label": eg.intl.formatToPlainString(ex.default["S5+pRg"], { emojiName: t.name, rank: a }),
        "aria-pressed": r,
        children: [
            (0, i.jsx)(aR.A, { className: a1.Zg, emojiId: t.id, emojiName: t.name, animated: n }),
            (0, i.jsx)(eb, { variant: "mono-md/bold", className: a1.Tm, children: a }),
        ],
    });
}
var a8 = a(360450),
    a9 = a(214947),
    a7 = a(939249),
    re = a(597770),
    rt = a(559647),
    ra = a(95369),
    rr = a(570287),
    ri = a(486020),
    rs = a(801305);
let rn = [],
    rc = (0, aE.j5)(W.Kr),
    rd = { r: 0, g: 0, b: 0, a: 1 },
    rl = {
        "Avatar01/Stroke": rd,
        "Avatar01/Fill": rc,
        "Avatar02/Stroke": rd,
        "Avatar02/Fill": rc,
        "Avatar03/Stroke": rd,
        "Avatar03/Fill": rc,
        "Avatar04/Stroke": rd,
        "Avatar04/Fill": rc,
        "Avatar05/Stroke": rd,
        "Avatar05/Fill": rc,
        ConnectorColor: rc,
    };
function ro(e) {
    return null != e ? ri.Ay.getUserAvatarURL(e, !1, 160, "png") : void 0;
}
function ru(e) {
    let t,
        { route: a, onNextStep: r, onPreviousStep: s } = e,
        n = (0, p.bG)([o.A], () => o.A.stats?.users ?? rn),
        c = (0, p.bG)([o.A], () => o.A.stats?.sidekick),
        d = (0, p.bG)([H.default], () => H.default.getCurrentUser()),
        l = (0, p.bG)([Q.Ay], () => Q.Ay.useReducedMotion),
        u = f.useRef(null),
        h = f.useRef(void 0),
        b = (function (e, t) {
            let [a, r] = f.useState({ route: e, hasShownSquad: e === I.gr.SQUAD, isTransitioning: !1 });
            switch (
                (a.route !== e &&
                    r({
                        route: e,
                        hasShownSquad: a.hasShownSquad || e === I.gr.SQUAD,
                        isTransitioning: !t && a.route === I.gr.SQUAD && e === I.gr.SIDEKICK,
                    }),
                f.useEffect(() => {
                    if (!a.isTransitioning) return;
                    let e = setTimeout(() => r((e) => ({ ...e, isTransitioning: !1 })), 1500);
                    return () => clearTimeout(e);
                }, [a.isTransitioning]),
                e)
            ) {
                case I.gr.SQUAD_TRANSITION:
                    return 5 * !!a.hasShownSquad;
                case I.gr.SQUAD:
                    return 1;
                case I.gr.SIDEKICK:
                    return a.isTransitioning ? 2 : 3;
                case I.gr.SIDEKICK_LEAVE:
                    return t ? 3 : 4;
                default:
                    return 0;
            }
        })(a, l);
    ((t = f.useRef(!0)),
        f.useEffect(() => {
            if (a !== I.gr.SIDEKICK_LEAVE) {
                t.current = !1;
                return;
            }
            if (t.current) return void s();
            if (l) return void r();
            let e = setTimeout(r, 1e3);
            return () => clearTimeout(e);
        }, [r, s, l, a]));
    let [m, g] = n,
        A = (0, aS.tx)(m) ?? "",
        v = (0, aS.tx)(g) ?? "",
        w = A.toLocaleUpperCase(),
        E = v.toLocaleUpperCase(),
        j = (0, aS.tx)(c?.user) ?? "",
        S = [
            { user: c?.user, name: j },
            { user: m, name: A },
            { user: g, name: v },
        ].filter((e) => null != e.user),
        N = n.length < 2,
        C = a === I.gr.SIDEKICK || a === I.gr.SIDEKICK_LEAVE;
    f.useEffect(() => () => clearInterval(h.current), []);
    let T = f.useCallback(() => {
        (clearInterval(h.current),
            (h.current = setInterval(() => {
                let e = u.current?.getProperties();
                e?.twoFriends?.value === N &&
                    e?.reducedMotion?.value === l &&
                    e?.["Avatar01/Username"]?.value === j.toLocaleUpperCase() &&
                    (u.current?.play(), clearInterval(h.current));
            }, 50)));
    }, [l, j, N]);
    return (0, i.jsxs)(ae, {
        children: [
            (0, i.jsx)(a8.m, {
                ref: u,
                className: rs.lW,
                fit: "contain",
                autoplay: !1,
                onLoad: T,
                withReducedMotion: "play",
                dataBinding: {
                    ...rl,
                    AnimationState: b,
                    "Avatar01/img": ro(c?.user),
                    "Avatar02/img": ro(g),
                    "Avatar03/img": ro(m),
                    "Avatar04/img": ro(c?.user),
                    "Avatar05/img": ro(d),
                    "Avatar01/Username": j.toLocaleUpperCase(),
                    "Avatar02/Username": E,
                    "Avatar03/Username": w,
                    "Avatar04/Username": j.toLocaleUpperCase(),
                    twoFriends: N,
                    reducedMotion: l,
                },
            }),
            a === I.gr.SQUAD_TRANSITION && (0, i.jsx)(rh, {}),
            a === I.gr.SQUAD &&
                (0, i.jsxs)("div", {
                    className: rs.Qs,
                    children: [
                        (0, i.jsx)(rf, {
                            title: eg.intl.string(tI.default.OzY5Ns),
                            accessibilityLabel: eg.intl.string(ex.default.OSo1fB),
                            description: eg.intl.string(ex.default.EqdLDd),
                        }),
                        (0, i.jsx)(x.A, {
                            tag: "ul",
                            children: S.map((e, t) => (0, i.jsx)("li", { children: e.name }, t)),
                        }),
                    ],
                }),
            C &&
                null != c &&
                (0, i.jsxs)("div", {
                    className: _()(rs.Qs, rs.yG),
                    children: [
                        (0, i.jsxs)("div", {
                            className: rs.Cv,
                            children: [
                                (0, i.jsx)(rf, {
                                    title: eg.intl.string(tI.default["+uwOHt"]),
                                    accessibilityLabel: eg.intl.string(ex.default.X4EiRH),
                                    description: eg.intl.string(ex.default["/ctmGw"]),
                                }),
                                (0, i.jsx)(x.A, { children: j }),
                                (0, i.jsx)(rb, { sidekick: c }),
                            ],
                        }),
                        (0, i.jsx)(r_, { user: c.user, username: j }),
                    ],
                }),
        ],
    });
}
function rh() {
    let e = eo();
    return (0, i.jsx)("div", {
        ref: e,
        className: _()(rs.Qs, rs.kY),
        children: (0, i.jsx)(ab, { children: eg.intl.string(ex.default["6RSp5q"]) }),
    });
}
function rf(e) {
    let { title: t, accessibilityLabel: a, description: r } = e,
        s = eo();
    return (0, i.jsxs)("div", {
        className: rs.wx,
        children: [
            (0, i.jsxs)(a_, {
                ref: s,
                className: rs.R_,
                accessibilityLabel: a,
                children: [
                    (0, i.jsx)(am, { icon: a9.FriendsIcon, children: eg.intl.string(tI.default.ZQakPR) }),
                    (0, i.jsx)(eb, { variant: "display-lg", className: rs.Vy, children: t }),
                ],
            }),
            (0, i.jsx)(ab, { children: r }),
        ],
    });
}
function rb(e) {
    let { sidekick: t } = e,
        a = Math.round(t.numMessagesSent),
        r = Math.round(t.numVoiceMinutes);
    return (0, i.jsxs)("div", {
        className: rs.M1,
        children: [
            (0, i.jsxs)("div", {
                className: rs.dJ,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(tw.ChatIcon, { size: "md", color: "currentColor" }),
                    (0, i.jsx)(eb, { variant: "heading-xxl/medium", className: rs.wk, children: a }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: rs.dJ,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(tN.MicrophoneIcon, { size: "md", color: "currentColor" }),
                    (0, i.jsx)(eb, { variant: "heading-xxl/medium", className: rs.wk, children: r }),
                ],
            }),
            (0, i.jsx)(x.A, {
                children: eg.intl.formatToPlainString(ex.default.NafXAs, { numMessages: a, numMinutes: r }),
            }),
        ],
    });
}
function r_(e) {
    let { user: t, username: a } = e,
        [r, n] = f.useState(""),
        [c, d] = f.useState(!1),
        [o, u] = f.useState(!1),
        b = (0, rr.A)(t.id),
        p = r.length > 0 && r.length <= 250 && !c && !o,
        x = c ? eg.intl.string(eg.t.fjcCk5) : eg.intl.formatToPlainString(eg.t["0ZQw/X"], { name: a });
    return b
        ? (0, i.jsxs)("div", {
              className: rs.OG,
              children: [
                  (0, i.jsx)("textarea", {
                      className: rs.yB,
                      value: r,
                      onChange: (e) => n(e.target.value),
                      maxLength: 250,
                      disabled: c || o,
                      placeholder: x,
                      "aria-label": x,
                  }),
                  (0, i.jsxs)("div", {
                      className: rs.n,
                      children: [
                          (0, i.jsx)(a7.D, {
                              className: rs.KD,
                              onClick: function () {
                                  ((0, h.nr)(t.id),
                                      (0, ra.A)({
                                          giftRecipient: t,
                                          analyticsLocations: [eD.A.CHECKPOINT, eD.A.CHECKPOINT_SIDEKICK],
                                      }));
                              },
                              "aria-label": eg.intl.string(eg.t.Ve9Ge6),
                              children: (0, i.jsx)(re.GiftIcon, { size: "refresh_sm", color: "currentColor" }),
                          }),
                          (0, i.jsx)(a7.D, {
                              className: _()(rs.KD, { [rs.r9]: !p }),
                              onClick: async function () {
                                  if (p) {
                                      u(!0);
                                      try {
                                          (await (0, l.fr)(r, t.id),
                                              n(""),
                                              d(!0),
                                              m.O.announce(eg.intl.string(eg.t.fjcCk5), "polite"));
                                      } catch {
                                          (0, s.P0)({ text: eg.intl.string(eg.t.fEptJP), variant: "critical" });
                                      } finally {
                                          u(!1);
                                      }
                                  }
                              },
                              "aria-disabled": !p,
                              "aria-label": eg.intl.string(eg.t.oeb1vg),
                              children: (0, i.jsx)(rt.SendMessageIcon, { size: "refresh_sm", color: "currentColor" }),
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
var rp = a(9767);
function rm(e) {
    let { games: t } = e,
        a = Math.round(t?.totalDaysPlayed ?? 0),
        r = (0, E.bD)(t?.totalDaysPlayedPercentile);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: rp.dJ,
                children: [
                    (0, i.jsx)(ax, { icon: tx.CalendarIcon, children: eg.intl.string(ex.default["4N5p4D"]) }),
                    (0, i.jsx)(aU, { value: a }),
                ],
            }),
            (0, i.jsx)(ab, {
                children:
                    null != r
                        ? eg.intl.format(ex.default["4FXB/m"], {
                              numDays: a,
                              percent: r,
                              percentHook: (e, t) => (0, i.jsx)(ay, { children: e }, t),
                          })
                        : eg.intl.format(ex.default.iCKjh6, { numDays: a }),
            }),
        ],
    });
}
function rx(e) {
    let { numUsersPlayedEveryDay: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: rp.dJ,
                children: [
                    (0, i.jsx)(ax, { icon: tx.CalendarIcon, children: eg.intl.string(ex.default["dx4+NI"]) }),
                    (0, i.jsx)(aF, { value: t }),
                ],
            }),
            (0, i.jsx)(ab, { children: eg.intl.format(ex.default["N32w+2"], { numUsers: (0, E.wj)(t) }) }),
        ],
    });
}
function rg() {
    let e = (0, p.bG)([o.A], () => o.A.stats?.games),
        t = (0, p.bG)([o.A], () => (0, E.uO)(o.A.stats)),
        a = (0, p.bG)([o.A], () => o.A.globalStats?.games?.numUsersPlayedEveryDay),
        r = !t && null != a;
    return (0, i.jsx)(ae, {
        children: (0, i.jsxs)("div", {
            className: rp.kL,
            children: [
                (0, i.jsx)(er, {
                    animatedSrc:
                        "https://cdn.discordapp.com/assets/content/e3289e9a0a7faf4db23c3fefa390126fc64a09120fdb701f9dea833dddf671ef.png",
                    staticSrc:
                        "https://cdn.discordapp.com/assets/content/312abde9b19fcf85150d507de3f33096992506459b895ab3ea8d92c8f1e04a28.png",
                    className: rp.HW,
                }),
                (0, i.jsx)("div", {
                    className: rp.C,
                    children: r ? (0, i.jsx)(rx, { numUsersPlayedEveryDay: a }) : (0, i.jsx)(rm, { games: e }),
                }),
            ],
        }),
    });
}
var rA = a(95362),
    rv = a(828062);
function rw(e) {
    let { children: t } = e;
    return (0, i.jsx)(eb, { variant: "display-lg", className: rv.V, children: t });
}
function rI(e) {
    let { children: t } = e;
    return (0, i.jsx)(e_, { variant: "display-lg", className: rv.V, children: t });
}
var rE = a(109112),
    rj = a(311043),
    rS = a(883053);
function rN(e) {
    let { rank: t, className: a } = e;
    return (0, i.jsxs)(em, { className: _()(rS.T, a), children: ["#", t] });
}
var rC = a(770178),
    rT = a(102189);
let rR = { fireOnMount: !0, fireOnDepsChange: !0 };
function rO(e) {
    let { text: t, textRef: a, children: r } = e,
        s = (function (e, t) {
            let [a, r] = f.useState(!1),
                i = f.useCallback((e) => {
                    let { target: t } = e;
                    r(t.scrollWidth > t.clientWidth);
                }, []);
            return ((0, rC.g)(e, i, [t], rR), a);
        })(a, t);
    return (0, i.jsx)(tH.m, {
        text: t,
        position: "bottom",
        anchorRef: a,
        shouldShow: s,
        ariaHidden: !0,
        children: r({ tabIndex: s ? 0 : void 0, className: rT.Y }),
    });
}
var ry = a(497357);
let rM = "/assets/e74703a44e087adc.svg";
function rk(e) {
    let {
            game: { id: t, name: a, coverImageHash: r },
            rank: s,
            label: n,
            shellImage: c,
            style: d,
            accessibilityLabel: l,
            className: o,
            textRef: u,
            lineClamp: h,
            ...f
        } = e,
        b = (0, p.bG)(
            [rj.A],
            () =>
                rj.A.getGame(t)?.getCoverURL(300) ??
                ri.Ay.getApplicationIconURL({ id: t, icon: r, size: 300, keepAspectRatio: !0, fallbackAvatar: !1 }),
        );
    return (0, i.jsxs)("div", {
        ...f,
        role: "listitem",
        className: _()(ry.LO, o),
        style: d,
        children: [
            (0, i.jsxs)("div", {
                className: ry.Tn,
                "aria-hidden": null != l,
                children: [
                    (0, i.jsx)("img", { src: c, alt: "", className: ry.vf }),
                    null != b
                        ? (0, i.jsx)("img", { src: b, alt: "", className: ry.Qw })
                        : (0, i.jsx)("div", {
                              className: _()(ry.Qw, ry.uj),
                              children: (0, i.jsx)(rE.UnknownGameIcon, { size: "lg" }),
                          }),
                    null != s && (0, i.jsx)(rN, { rank: s, className: ry.Tm }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: ry.zH,
                "aria-hidden": null != l,
                children: [
                    (0, i.jsx)(eb, {
                        ref: u,
                        variant: "heading-xl/medium",
                        className: ry.UU,
                        lineClamp: h,
                        children: a,
                    }),
                    (0, i.jsx)(eb, { variant: "mono-md/bold", className: ry.Pf, children: n }),
                ],
            }),
            null != l && (0, i.jsx)(x.A, { children: l }),
        ],
    });
}
function rD(e) {
    let t = f.useRef(null);
    return (0, i.jsx)(rO, {
        text: e.game.name,
        textRef: t,
        children: (a) => {
            let { tabIndex: r, className: s } = a;
            return (0, i.jsx)(rk, { ...e, className: _()(e.className, s), tabIndex: r, textRef: t, lineClamp: 1 });
        },
    });
}
function rL(e, t, a) {
    return eg.intl.formatToPlainString(ex.default.mqdLhl, { gameName: e.name, rank: t, numSessions: a });
}
function rP(e) {
    let { numSessions: t, ...a } = e,
        r = Math.round(t);
    return (0, i.jsx)(rD, { ...a, label: r, shellImage: rM, style: tc, accessibilityLabel: rL(a.game, a.rank, r) });
}
function rU(e) {
    let { numSessions: t, ...a } = e,
        r = Math.round(t);
    return (0, i.jsx)(rD, {
        ...a,
        rank: 1,
        label: r,
        shellImage: "/assets/fbe1ab9677ed007a.svg",
        style: td,
        accessibilityLabel: rL(a.game, 1, r),
    });
}
function rG(e) {
    return (0, i.jsx)(rk, { ...e, shellImage: rM, style: tc, className: ry.Ku });
}
var rH = a(842807);
let rF = [];
function rK(e) {
    let { gameStats: t } = e,
        a = Math.round(t?.totalGamesPlayed ?? 0),
        r = (0, E.bD)(t?.totalGamesPlayedPercentile),
        s = t?.games ?? rF;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: rH.wx,
                children: [
                    (0, i.jsxs)("div", {
                        className: rH.dJ,
                        children: [
                            (0, i.jsx)(ax, {
                                icon: tA.GameControllerIcon,
                                children: eg.intl.string(ex.default.HM2fjf),
                            }),
                            (0, i.jsx)(aU, { value: a, className: rH.ai }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: rH.h_,
                        children: (0, i.jsx)(ab, {
                            children:
                                null != r
                                    ? eg.intl.format(ex.default["hc0/yJ"], {
                                          percent: r,
                                          percentHook: (e, t) => (0, i.jsx)(ay, { children: e }, t),
                                      })
                                    : eg.intl.format(ex.default.aJMJ6b, { numGames: a }),
                        }),
                    }),
                ],
            }),
            (0, i.jsx)(rA.Ip, {
                orientation: "horizontal",
                scrollbarGutter: !1,
                fade: !0,
                className: rH.ag,
                role: "list",
                children: s.map((e, t) => {
                    let { game: a, numSessions: r } = e;
                    return 0 === t
                        ? (0, i.jsx)(rU, { game: a, numSessions: r }, a.id)
                        : (0, i.jsx)(rP, { game: a, rank: t + 1, numSessions: r }, a.id);
                }),
            }),
        ],
    });
}
function rB(e) {
    let { gameStats: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: _()(rH.wx, rH.l7),
                children: [
                    (0, i.jsxs)("div", {
                        className: rH.dJ,
                        children: [
                            (0, i.jsx)(t8, { className: rH.gi }),
                            (0, i.jsx)(rI, { children: eg.intl.string(ex.default.qbCgI7) }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: rH.h_,
                        children: (0, i.jsx)(ab, { children: eg.intl.string(ex.default["0oDeiM"]) }),
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: _()(rH.ag, rH.Zs),
                role: "list",
                children: W.Jb.map((e) => {
                    let { list: a, label: r } = e,
                        s = t[a][0];
                    return null != s ? (0, i.jsx)(rG, { game: s, label: eg.intl.string(r) }, a) : null;
                }),
            }),
        ],
    });
}
function rV() {
    let e = (0, p.bG)([o.A], () => o.A.stats?.games),
        t = (0, p.bG)([o.A], () => (0, E.IH)(o.A.stats)),
        a = (0, p.bG)([o.A], () => o.A.globalStats?.games),
        r = !t && null != a;
    return (0, i.jsx)(ae, {
        children: (0, i.jsx)("div", {
            className: _()(rH.kL, { [rH.TF]: r }),
            children: r ? (0, i.jsx)(rB, { gameStats: a }) : (0, i.jsx)(rK, { gameStats: e }),
        }),
    });
}
var rz = a(167662);
function rW(e) {
    let { messages: t } = e,
        a = Math.round(t?.numMessagesSent ?? 0),
        r = (0, E.bD)(t?.numMessagesSentPercentile);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: rz.dJ,
                children: [
                    (0, i.jsx)(ax, { icon: tw.ChatIcon, children: eg.intl.string(tI.default.wWKySP) }),
                    (0, i.jsx)(aU, { value: a }),
                ],
            }),
            (0, i.jsx)(ab, {
                children:
                    null != r
                        ? eg.intl.format(ex.default.TOMBAW, {
                              numMessages: a,
                              percent: r,
                              percentHook: (e, t) => (0, i.jsx)(ay, { children: e }, t),
                          })
                        : eg.intl.format(ex.default.cYCqz8, { numMessages: a }),
            }),
        ],
    });
}
function rY(e) {
    let { numWordsSent: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: rz.dJ,
                children: [
                    (0, i.jsx)(ax, { icon: tw.ChatIcon, children: eg.intl.string(ex.default["2BuyVC"]) }),
                    (0, i.jsx)(aF, { value: t }),
                ],
            }),
            (0, i.jsx)(ab, {
                children: eg.intl.format(ex.default.bAxEs2, {
                    numWords: (0, E.wj)(t),
                    numCopies: (0, E.wj)((0, E.yQ)(t)),
                }),
            }),
        ],
    });
}
function rq() {
    let e = (0, p.bG)([o.A], () => o.A.stats?.messages),
        t = (0, p.bG)([o.A], () => (0, E.nb)(o.A.stats)),
        a = (0, p.bG)([o.A], () => o.A.globalStats?.messages?.numWordsSent),
        r = !t && null != a;
    return (0, i.jsx)(ae, {
        children: (0, i.jsxs)("div", {
            className: rz.kL,
            children: [
                (0, i.jsx)(er, {
                    animatedSrc:
                        "https://cdn.discordapp.com/assets/content/d2d8036bb6a32967893421f9956b9e8ed30abde474f68c1a34e824205549c5a1.png",
                    staticSrc:
                        "https://cdn.discordapp.com/assets/content/1dfd8684180df4216b23f0a61617250be8fcc12bc1970ac259892f34fbdb836d.png",
                    className: rz.HW,
                }),
                (0, i.jsx)("div", {
                    className: rz.C,
                    children: r ? (0, i.jsx)(rY, { numWordsSent: a }) : (0, i.jsx)(rW, { messages: e }),
                }),
            ],
        }),
    });
}
var rX = a(682163),
    rQ = a(224865);
let rZ = rX.iu[rX.Ay.Sizes.XLARGE];
function rJ(e) {
    let { guild: t, size: a } = e;
    return null == t.icon && a < 48
        ? (0, i.jsx)("div", {
              className: _()(rQ.K, rQ.J),
              style: { width: a, height: a },
              "aria-hidden": !0,
              children: (0, i.jsx)(eu.E, { variant: "body-md/medium", children: (0, E.oW)(t.name) }),
          })
        : (0, i.jsx)(rX.Ay, {
              guild: t,
              size: rX.Ay.Sizes.XLARGE,
              iconSize: a,
              textScale: a / rZ,
              className: rQ.K,
              style: { width: a, height: a, borderRadius: 0 },
              "aria-hidden": !0,
          });
}
var r$ = a(140645);
function r0(e) {
    let { numVoiceMinutes: t, numMessagesSent: a } = e,
        r = Math.round(t),
        s = Math.round(a);
    return (0, i.jsxs)("div", {
        className: r$.M1,
        children: [
            (0, i.jsxs)("div", {
                className: r$.dJ,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(tN.MicrophoneIcon, { size: "md", color: "currentColor" }),
                    (0, i.jsx)(eb, { variant: "mono-md/bold", className: r$.Qq, children: r }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: r$.dJ,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(tw.ChatIcon, { size: "md", color: "currentColor" }),
                    (0, i.jsx)(eb, { variant: "mono-md/bold", className: r$.Qq, children: s }),
                ],
            }),
            (0, i.jsx)(x.A, {
                children: eg.intl.formatToPlainString(ex.default["OQjeY/"], { numMinutes: r, numMessages: s }),
            }),
        ],
    });
}
var r1 = a(972106);
let r5 = [];
function r6(e) {
    let { guild: t, rank: a, iconSize: r = 100, children: s } = e,
        n = f.useRef(null);
    return (0, i.jsx)(rO, {
        text: t.name,
        textRef: n,
        children: (e) => {
            let { tabIndex: c, className: d } = e;
            return (0, i.jsxs)("li", {
                className: _()(r1.w_, d),
                tabIndex: c,
                children: [
                    (0, i.jsxs)("div", {
                        className: r1.jj,
                        children: [
                            (0, i.jsx)(rN, { rank: a }),
                            (0, i.jsxs)("div", {
                                className: r1.gI,
                                children: [
                                    (0, i.jsx)(eb, {
                                        ref: n,
                                        variant: "heading-xxl/medium",
                                        className: r1.J5,
                                        lineClamp: 1,
                                        children: t.name,
                                    }),
                                    s,
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsx)(rJ, { guild: t, size: r }),
                ],
            });
        },
    });
}
function r2(e) {
    let { guild: t, numVoiceMinutes: a, numMessagesSent: r } = e;
    return (0, i.jsx)(r6, {
        guild: t,
        rank: 1,
        iconSize: 140,
        children: (0, i.jsx)(r0, { numVoiceMinutes: a, numMessagesSent: r }),
    });
}
function r3(e) {
    let { guilds: t } = e,
        a = eo();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: r1.wx,
                children: [
                    (0, i.jsxs)(a_, {
                        ref: a,
                        className: r1.R_,
                        accessibilityLabel: eg.intl.string(ex.default.FroqRf),
                        children: [
                            (0, i.jsx)(am, { icon: tj.ServerIcon, children: eg.intl.string(ex.default.Mb5E6r) }),
                            (0, i.jsx)(rw, { children: eg.intl.string(tI.default.F0fkrh) }),
                        ],
                    }),
                    (0, i.jsx)(ab, { children: eg.intl.string(ex.default.IN1DaS) }),
                ],
            }),
            (0, i.jsx)("ul", {
                className: r1.Pl,
                children: t.map((e, t) => {
                    let { guild: a, numMessagesSent: r, numVoiceMinutes: s } = e;
                    return 0 === t
                        ? (0, i.jsx)(r2, { guild: a, numMessagesSent: r ?? 0, numVoiceMinutes: s ?? 0 }, a.id)
                        : (0, i.jsx)(r6, { guild: a, rank: t + 1 }, a.id);
                }),
            }),
        ],
    });
}
function r4(e) {
    let { guilds: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: r1.wx,
                children: [
                    (0, i.jsxs)("div", {
                        className: r1.R_,
                        children: [
                            (0, i.jsx)(t8, { className: r1.gi }),
                            (0, i.jsx)(rI, { children: eg.intl.string(tI.default.F0fkrh) }),
                        ],
                    }),
                    (0, i.jsx)(ab, { children: eg.intl.string(ex.default.bhnqop) }),
                ],
            }),
            (0, i.jsx)("ul", {
                className: r1.Pl,
                children: t.map((e, t) => (0, i.jsx)(r6, { guild: e, rank: t + 1 }, e.id)),
            }),
        ],
    });
}
function r8() {
    let e = (0, p.bG)([o.A], () => o.A.stats?.guilds?.guilds ?? r5),
        t = (0, p.bG)([o.A], () => o.A.globalStats?.guilds?.guildsByMembers),
        a = 0 === e.length && null != t;
    return (0, i.jsx)(ae, {
        children: (0, i.jsx)("div", {
            className: r1.kL,
            children: a ? (0, i.jsx)(r4, { guilds: t }) : (0, i.jsx)(r3, { guilds: e }),
        }),
    });
}
var r9 = a(155094);
function r7(e) {
    let { icon: t, title: a, description: r } = e;
    return (0, i.jsx)(ae, {
        children: (0, i.jsxs)("div", {
            className: r9.Q,
            children: [(0, i.jsx)(ax, { icon: t, children: a }), (0, i.jsx)(ab, { children: r })],
        }),
    });
}
var ie = a(7584),
    it = a(33293),
    ia = a(498137),
    ir = a(192339),
    ii = a(574414),
    is = a(834109),
    ic = a(48763);
function id(e) {
    let { character: t, power: a } = e,
        r = (0, v.o)(t);
    return (0, i.jsxs)(ia.A, {
        cardColorPalette: r,
        size: ic.W.LG,
        children: [
            (0, i.jsx)(ir.A, {}),
            (0, i.jsx)(is.A, { variant: "full" }),
            null != a
                ? (0, i.jsx)(ii.A, {
                      powerLevel: (0, ah.Le)(a.powerLevel),
                      powerLevelUnits: (0, ah.sX)(a.powerLevelPercentile),
                  })
                : null,
            (0, i.jsx)(it.A, { character: t }),
        ],
    });
}
var il = a(58410);
function io() {
    let e = (0, p.bG)([o.A], () => o.A.stats),
        t = (0, p.bG)([o.A], () => o.A.character),
        a = eo(),
        r = e?.guilds?.guilds[0],
        s = e?.emojis?.emojis[0],
        n = e?.games?.games[0]?.game,
        c =
            null != n
                ? ri.Ay.getApplicationIconURL({ id: n.id, icon: n.iconHash, size: 40, fallbackAvatar: !1 })
                : void 0;
    return (0, i.jsx)(ae, {
        children: (0, i.jsxs)("div", {
            className: il.z,
            children: [
                null != t ? (0, i.jsx)(id, { character: t, power: e?.power }) : null,
                (0, i.jsxs)("div", {
                    className: il.zH,
                    children: [
                        (0, i.jsxs)(a_, {
                            ref: a,
                            className: il.R_,
                            accessibilityLabel: eg.intl.string(ex.default.ASrTAc),
                            children: [
                                (0, i.jsx)(am, {
                                    icon: as.ExperimentalCheckpointIcon,
                                    children: eg.intl.string(tI.default.ir6nEQ),
                                }),
                                (0, i.jsx)(eb, {
                                    variant: "display-lg",
                                    className: il.Vy,
                                    children: eg.intl.string(tI.default.y4M1na),
                                }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: il.M1,
                            children: [
                                (0, i.jsx)(iu, {
                                    label: eg.intl.string(ex.default.MSrV9z),
                                    value: e?.voice?.totalVoiceMinutes,
                                }),
                                (0, i.jsx)(iu, {
                                    label: eg.intl.string(ex.default.hhh11L),
                                    value: e?.messages?.numMessagesSent,
                                }),
                                (0, i.jsx)(iu, {
                                    label: eg.intl.string(ex.default["f5S+pt"]),
                                    value: r?.numDaysInteracted,
                                }),
                                (0, i.jsx)(ih, {
                                    label: eg.intl.string(tI.default["8XPMJj"]),
                                    icon: null != r ? (0, i.jsx)(rJ, { guild: r.guild, size: 40 }) : (0, i.jsx)(ib, {}),
                                    name: null != r ? r.guild.name : eg.intl.string(eg.t.PoWNfe),
                                }),
                                (0, i.jsx)(iu, {
                                    label: eg.intl.string(ex.default.xVSlv3),
                                    value: e?.emojis?.numEmojisSent,
                                }),
                                (0, i.jsx)(ih, {
                                    label: eg.intl.string(tI.default["3sARW7"]),
                                    icon:
                                        null != s
                                            ? (0, i.jsx)(aR.A, {
                                                  emojiId: s.id,
                                                  emojiName: null == s.id ? s.name : void 0,
                                                  animated: s.animated,
                                                  alt: "",
                                                  className: il.Kk,
                                              })
                                            : (0, i.jsx)(ib, {}),
                                    name:
                                        null == s
                                            ? eg.intl.string(eg.t.PoWNfe)
                                            : null == s.id
                                              ? ie.Ay.convertSurrogateToName(s.name)
                                              : `:${s.name}:`,
                                }),
                                (0, i.jsx)(iu, {
                                    label: eg.intl.string(ex.default.y2Y1DD),
                                    value: e?.games?.totalDaysPlayed,
                                }),
                                (0, i.jsx)(ih, {
                                    label: eg.intl.string(tI.default.RbT4Zq),
                                    icon:
                                        null != c
                                            ? (0, i.jsx)("img", { src: c, alt: "", className: _()(il.Kk, il.Gt) })
                                            : null == n
                                              ? (0, i.jsx)(ib, {})
                                              : (0, i.jsx)("div", {
                                                    className: _()(il.Kk, il.Gc),
                                                    children: (0, i.jsx)(rE.UnknownGameIcon, {
                                                        size: "md",
                                                        color: "currentColor",
                                                    }),
                                                }),
                                    name: null != n ? n.name : eg.intl.string(eg.t.PoWNfe),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function iu(e) {
    let { label: t, value: a } = e;
    return (0, i.jsxs)("div", {
        className: il.dJ,
        children: [
            (0, i.jsx)(eb, { variant: "heading-md/semibold", children: t }),
            (0, i.jsx)(eb, {
                variant: "heading-xxl/medium",
                className: il.wk,
                children: Math.round(a ?? 0).toLocaleString(eg.intl.currentLocale),
            }),
        ],
    });
}
function ih(e) {
    let { label: t, icon: a, name: r } = e,
        s = f.useRef(null);
    return (0, i.jsx)(rO, {
        text: r,
        textRef: s,
        children: (e) => {
            let { tabIndex: n, className: c } = e;
            return (0, i.jsxs)("div", {
                className: _()(il.dJ, il.u4, c),
                tabIndex: n,
                children: [
                    (0, i.jsx)(eb, { variant: "heading-md/semibold", children: t }),
                    (0, i.jsxs)("div", {
                        className: il.AS,
                        children: [
                            a,
                            (0, i.jsx)(eb, {
                                ref: s,
                                variant: "heading-xl/medium",
                                lineClamp: 1,
                                className: il.TJ,
                                children: r,
                            }),
                        ],
                    }),
                ],
            });
        },
    });
}
function ib() {
    return (0, i.jsx)("div", {
        className: _()(il.Kk, il.Gc, il.Wn),
        children: (0, i.jsx)(rE.UnknownGameIcon, { size: "lg", color: "currentColor" }),
    });
}
var i_ = a(651946);
function ip() {
    let e = (0, p.bG)([o.A], () => o.A.stats?.guilds?.guilds[0]),
        t = Math.round(e?.numDaysInteracted ?? 0),
        a = (0, E.bD)(e?.numDaysInteractedPercentile),
        r = f.useRef(null);
    return (0, i.jsx)(ae, {
        children: (0, i.jsxs)("div", {
            className: i_.kL,
            children: [
                (0, i.jsxs)("div", {
                    className: i_.wx,
                    children: [
                        (0, i.jsxs)("div", {
                            className: i_.R_,
                            children: [
                                (0, i.jsx)(ax, { icon: tj.ServerIcon, children: eg.intl.string(ex.default["M+a+t1"]) }),
                                (0, i.jsx)(aU, { value: t }),
                            ],
                        }),
                        (0, i.jsx)(ab, {
                            children:
                                null != a
                                    ? eg.intl.format(ex.default.sIDTV1, {
                                          numDays: t,
                                          percent: a,
                                          percentHook: (e, t) => (0, i.jsx)(ay, { children: e }, t),
                                      })
                                    : eg.intl.format(ex.default.nLCUQ4, { numDays: t }),
                        }),
                    ],
                }),
                null != e &&
                    (0, i.jsx)("div", {
                        className: i_.bU,
                        children: (0, i.jsx)(rO, {
                            text: e.guild.name,
                            textRef: r,
                            children: (t) => {
                                let { tabIndex: a, className: s } = t;
                                return (0, i.jsxs)("div", {
                                    className: _()(i_.Nr, s),
                                    style: { width: 360 },
                                    tabIndex: a,
                                    children: [
                                        (0, i.jsx)(rJ, { guild: e.guild, size: 360 }),
                                        (0, i.jsxs)("div", {
                                            className: i_.zH,
                                            children: [
                                                (0, i.jsx)(eb, {
                                                    ref: r,
                                                    variant: "heading-xxl/medium",
                                                    className: i_.J5,
                                                    lineClamp: 1,
                                                    children: e.guild.name,
                                                }),
                                                (0, i.jsx)(r0, {
                                                    numVoiceMinutes: e.numVoiceMinutes ?? 0,
                                                    numMessagesSent: e.numMessagesSent ?? 0,
                                                }),
                                            ],
                                        }),
                                    ],
                                });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var im = a(270704);
function ix(e) {
    let { voice: t } = e,
        a = Math.round(t?.totalVoiceMinutes ?? 0),
        r = (0, E.bD)(t?.totalVoiceMinutesPercentile);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: im.dJ,
                children: [
                    (0, i.jsx)(ax, { icon: tN.MicrophoneIcon, children: eg.intl.string(ex.default["3/T12E"]) }),
                    (0, i.jsx)(aU, { value: a, alignment: "center" }),
                ],
            }),
            (0, i.jsx)(ab, {
                children:
                    null != r
                        ? eg.intl.format(ex.default.RqXsIs, {
                              numMinutes: a,
                              percent: r,
                              percentHook: (e, t) => (0, i.jsx)(ay, { children: e }, t),
                          })
                        : eg.intl.format(ex.default.Y3poDW, { numMinutes: a }),
            }),
        ],
    });
}
function ig(e) {
    let { peakHour: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: im.dJ,
                children: [
                    (0, i.jsx)(ax, { icon: tN.MicrophoneIcon, children: eg.intl.string(ex.default.ZCwB8J) }),
                    (0, i.jsx)(aF, { value: t }),
                ],
            }),
            (0, i.jsx)(ab, { children: eg.intl.string(ex.default.huiTne) }),
        ],
    });
}
function iA() {
    let e = (0, p.bG)([o.A], () => o.A.stats?.voice),
        t = (0, p.bG)([o.A], () => (0, E.Kr)(o.A.stats)),
        a = (0, p.bG)([o.A], () => o.A.globalStats?.voice?.peakHourUtc),
        r = (0, E.XF)(a)?.value,
        s = !t && null != r;
    return (0, i.jsxs)(ae, {
        children: [
            (0, i.jsx)(er, {
                animatedSrc:
                    "https://cdn.discordapp.com/assets/content/04746dc04eab575d0168935af2b1b3f97e2e00439f84bd0f0474276e0c5a81dc.png",
                staticSrc:
                    "https://cdn.discordapp.com/assets/content/c4c2d6b631bff3da4e4bb9afffc8f89bc9fb6f76a2fcd824f8a7af83eb7f1e6b.png",
                className: im.Tp,
            }),
            (0, i.jsx)("div", {
                className: im.Qs,
                children: s ? (0, i.jsx)(ig, { peakHour: r }) : (0, i.jsx)(ix, { voice: e }),
            }),
        ],
    });
}
function iv(e) {
    let { route: t, onNextStep: a, onPreviousStep: r } = e;
    if (t === I.gr.HOME) return (0, i.jsx)(aT, { onStart: a });
    if (t === I.gr.INTRODUCTION) return (0, i.jsx)(aa, {});
    let { statsScreen: s } = (0, I.UG)(t);
    switch (s) {
        case I.oI.VOICE_INTRO:
            return (0, i.jsx)(r7, {
                icon: tN.MicrophoneIcon,
                title: eg.intl.string(ex.default["/7XYsa"]),
                description: eg.intl.string(ex.default["X8/G/o"]),
            });
        case I.oI.VOICE:
            return (0, i.jsx)(iA, {});
        case I.oI.MESSAGES_INTRO:
            return (0, i.jsx)(r7, {
                icon: tw.ChatIcon,
                title: eg.intl.string(ex.default["2BuyVC"]),
                description: eg.intl.string(ex.default["kF+Y3a"]),
            });
        case I.oI.MESSAGES:
            return (0, i.jsx)(rq, {});
        case I.oI.SERVERS_INTRO:
            return (0, i.jsx)(r7, {
                icon: tj.ServerIcon,
                title: eg.intl.string(tI.default.F0fkrh),
                description: eg.intl.string(ex.default.Xg82Gy),
            });
        case I.oI.SERVERS:
            return (0, i.jsx)(r8, {});
        case I.oI.TOP_SERVER:
            return (0, i.jsx)(ip, {});
        case I.oI.EMOJI_INTRO:
            return (0, i.jsx)(r7, {
                icon: el.EmojiSlightlySmilingFaceIcon,
                title: eg.intl.string(ex.default.ZTDCIv),
                description: eg.intl.string(ex.default.y8Sr8J),
            });
        case I.oI.EMOJI:
            return (0, i.jsx)(a3, {});
        case I.oI.GAMES_INTRO:
            return (0, i.jsx)(r7, {
                icon: tA.GameControllerIcon,
                title: eg.intl.string(ex.default.HM2fjf),
                description: eg.intl.string(ex.default.LQiFqJ),
            });
        case I.oI.GAMES:
            return (0, i.jsx)(rV, {});
        case I.oI.GAME_TIME:
            return (0, i.jsx)(rg, {});
        case I.oI.SQUAD:
        case I.oI.SIDEKICK:
            return (0, i.jsx)(ru, { route: t, onNextStep: a, onPreviousStep: r });
        case I.oI.SUMMARY:
            return (0, i.jsx)(io, {});
        case I.oI.SHARE:
            return (0, i.jsx)(av, {});
        default:
            return null;
    }
}
var iw = a(650809),
    iI = a(428692);
let iE = {
    [I.s9.FACE]: { icon: tN.MicrophoneIcon, label: eg.t.K3lovD },
    [I.s9.OUTFIT]: { icon: tw.ChatIcon, label: eg.t.OIgYlQ },
    [I.s9.HEADWEAR]: { icon: tj.ServerIcon, label: eg.t["7hB4kg"] },
    [I.s9.SHOES]: { icon: el.EmojiSlightlySmilingFaceIcon, label: eg.t.sMOuuS },
    [I.s9.WEARABLE]: { icon: tA.GameControllerIcon, label: eg.t.URyqtP },
    [I.s9.AURA]: { icon: tx.CalendarIcon, label: ex.default.y2Y1DD },
    [I.s9.ASSEMBLED]: { icon: a9.FriendsIcon, label: eg.t.TdEu5X },
    [I.s9.FINALIZE]: { icon: iw.PaintPaletteIcon, label: ex.default.gmMD2I },
    [I.s9.SUMMARY]: { icon: as.ExperimentalCheckpointIcon, label: tI.default.y4M1na },
};
function ij(e) {
    let {
            step: { icon: t, label: a, route: r },
            disabled: s,
            blockedTraitDescriptionId: n,
            sound: c,
            onRouteClick: d,
        } = e,
        l = eg.intl.string(a),
        { onPointerDown: o, onKeyDown: u, onClickWithSound: h } = tX({ source: c, onClick: () => d(r), disabled: s });
    return (0, i.jsx)(tH.m, {
        text: l,
        ariaHidden: !0,
        children: (0, i.jsxs)(a7.D, {
            onPointerDown: o,
            onKeyDown: u,
            onClick: h,
            role: "tab",
            "aria-selected": !1,
            className: _()(iI.PM, iI.CD, { [iI.vk]: !s }),
            "aria-label": l,
            "aria-disabled": s,
            "aria-describedby": n,
            children: [
                (0, i.jsx)("div", { className: _()(iI.Om, iI.hZ) }),
                (0, i.jsx)(t, { size: "xs", color: "currentColor", className: iI.RQ }),
            ],
        }),
    });
}
function iS(e) {
    let { flow: t, stats: a, activeRoute: r, isRouteBlocked: s, blockedTraitDescriptionId: n, onRouteClick: c } = e,
        d = (function (e, t) {
            let a = [];
            for (let r of T({ flow: e, stats: t })) {
                let { characterStage: e } = (0, I.UG)(r),
                    t = iE[e];
                null != t && a.at(-1)?.stage !== e && a.push({ ...t, stage: e, route: r });
            }
            return a;
        })(t, a),
        { characterStage: l } = (0, I.UG)(r),
        u = d.findIndex((e) => {
            let { stage: t } = e;
            return t === l;
        }),
        [h, b] = f.useState(u);
    u > h && b(u);
    let _ = (0, p.bG)([o.A], () => o.A.isSaving);
    return -1 === u
        ? null
        : (0, i.jsx)("div", {
              className: iI.qB,
              role: "tablist",
              "aria-label": eg.intl.string(ex.default.DyMw85),
              children: d.map((e, t) => {
                  let { icon: a } = e;
                  return t === u
                      ? (0, i.jsx)(
                            tH.m,
                            {
                                text: eg.intl.string(e.label),
                                ariaHidden: !0,
                                children: (0, i.jsx)("div", {
                                    className: iI.PM,
                                    role: "tab",
                                    "aria-selected": !0,
                                    "aria-label": eg.intl.string(e.label),
                                    children: (0, i.jsx)(a, { size: "xs", color: "currentColor" }),
                                }),
                            },
                            e.stage,
                        )
                      : t <= h
                        ? (0, i.jsx)(
                              ij,
                              {
                                  step: e,
                                  disabled: _ || s,
                                  blockedTraitDescriptionId: n,
                                  sound: t < u ? tP : tU,
                                  onRouteClick: c,
                              },
                              e.stage,
                          )
                        : (0, i.jsx)(
                              "div",
                              {
                                  className: iI.PM,
                                  role: "tab",
                                  "aria-selected": !1,
                                  "aria-disabled": !0,
                                  "aria-label": eg.intl.string(e.label),
                                  children: (0, i.jsx)("div", { className: iI.Om }),
                              },
                              e.stage,
                          );
              }),
          });
}
var iN = a(516749),
    iC = a(531685),
    iT = a(399667),
    iR = a(468311),
    iO = a(706121),
    iy = a(985747),
    iM = a(118531);
let ik = {
    tex_aura_01_blossom: {
        url: "https://cdn.discordapp.com/assets/content/e2b0577c5815a08ed970f8192b862231a1ffe18387dcd7dcec888e9c3027199a.webp",
        riveId: 6946196,
        width: 4080,
        height: 4080,
        widthAt1x: 2560,
    },
    tex_aura_02_prism: {
        url: "https://cdn.discordapp.com/assets/content/d689a73838fcb85906b77e916194e0c392dd3ceddcc52061e56c63a966dcf1e2.webp",
        riveId: 6946199,
        width: 4080,
        height: 4080,
        widthAt1x: 2560,
    },
    tex_aura_03_shock: {
        url: "https://cdn.discordapp.com/assets/content/0705b7642d139a6163da7e61eff087f7b6e88e6407ab86dea3d05dc4e81a6f45.webp",
        riveId: 6946202,
        width: 4080,
        height: 4080,
        widthAt1x: 2560,
    },
    tex_aura_04_blaze: {
        url: "https://cdn.discordapp.com/assets/content/2a529cf90b15974fee17885a301d3367c56b2a1962931630210bf2a5f6bddedc.webp",
        riveId: 6946204,
        width: 4080,
        height: 4080,
        widthAt1x: 2560,
    },
    tex_aura_05_fated: {
        url: "https://cdn.discordapp.com/assets/content/cb5fcd7305a8925206c759e95257fdd5ce3f2f591bb351caf0029d5064d896b9.webp",
        riveId: 6946205,
        width: 4080,
        height: 4080,
        widthAt1x: 2560,
    },
    tex_aura_06_luster: {
        url: "https://cdn.discordapp.com/assets/content/59fe644414bdaad3017ede0d6a2a7d6433824a11addaa896d436e4da0e3280c6.webp",
        riveId: 6946206,
        width: 4080,
        height: 4080,
        widthAt1x: 2560,
    },
    tex_aura_07_bubbly: {
        url: "https://cdn.discordapp.com/assets/content/19b3d871b42fdca6a5c808842e204d98aa6523a54e793f3154e8e60b96b166ce.webp",
        riveId: 6946208,
        width: 4080,
        height: 4080,
        widthAt1x: 2560,
    },
    tex_aura_08_spooky: {
        url: "https://cdn.discordapp.com/assets/content/258f8c1eefdd4a4186b6e9f85d0986813469857414b1b5502c81078d9a76e98a.webp",
        riveId: 7026924,
        width: 4080,
        height: 4080,
        widthAt1x: 2560,
    },
    tex_aura_09_cursed: {
        url: "https://cdn.discordapp.com/assets/content/bb67049ba7ae915ec7e906730567a2781dfc96f5a135afa2f6942478e9f20f2c.webp",
        riveId: 7026931,
        width: 4080,
        height: 4080,
        widthAt1x: 2560,
    },
    tex_aura_10_magnetic: {
        url: "https://cdn.discordapp.com/assets/content/c3aa3b181bde82281f302a4c7eeda0192fd7f82b2de185e82daf61e15f257ead.webp",
        riveId: 6946211,
        width: 4080,
        height: 4080,
        widthAt1x: 2560,
    },
    tex_aura_11_radioactive: {
        url: "https://cdn.discordapp.com/assets/content/2c5a6cd560dc5b1f5331a8cfdd240307ac9f2943305681fc99eba17af68d8cec.webp",
        riveId: 6946212,
        width: 4080,
        height: 4080,
        widthAt1x: 2560,
    },
    tex_aura_12_elemental: {
        url: "https://cdn.discordapp.com/assets/content/27470dbd590f675c78e45d1918951e6e1eb0d9404f17d8c829b927b97ccc0528.webp",
        riveId: 6946214,
        width: 4080,
        height: 4080,
        widthAt1x: 2560,
    },
    tex_aura_13_shimmer: {
        url: "https://cdn.discordapp.com/assets/content/41e05e6577af1a5dff29c80f78be1c628e8d6ffdba6ab769900519d6466223b3.webp",
        riveId: 6946217,
        width: 4080,
        height: 4080,
        widthAt1x: 2560,
    },
    tex_aura_14_witchy: {
        url: "https://cdn.discordapp.com/assets/content/c1d8b710eb16bc0e2723f17df37f9544c322f8b77f01c8ef416f210794896e80.webp",
        riveId: 7026932,
        width: 4080,
        height: 4080,
        widthAt1x: 2560,
    },
    tex_base_01_icy: {
        url: "https://cdn.discordapp.com/assets/content/175380cce0f63d36fa2d3fe2794a42bef264584529df6313a90fffd9f444642f.webp",
        riveId: 6945448,
        width: 833,
        height: 1316,
        widthAt1x: 273,
    },
    tex_base_02_crimson: {
        url: "https://cdn.discordapp.com/assets/content/096971854f9e84ca6d397d763d7a2df3e9a540419d68de1683e6264cf9771402.webp",
        riveId: 6945450,
        width: 833,
        height: 1316,
        widthAt1x: 273,
    },
    tex_base_03_chrome: {
        url: "https://cdn.discordapp.com/assets/content/0f3f41debc5f0a2a7ff3a90a98e80d10e384b5e8680ece83caf0af3c2e941697.webp",
        riveId: 6945451,
        width: 833,
        height: 1316,
        widthAt1x: 273,
    },
    tex_base_04_galactic: {
        url: "https://cdn.discordapp.com/assets/content/b827dc2a60147f1fa3e33073a48ad7bc120ea6f7d0770eba06971e3a81c58239.webp",
        riveId: 6945452,
        width: 833,
        height: 1316,
        widthAt1x: 273,
    },
    tex_base_05_forrest: {
        url: "https://cdn.discordapp.com/assets/content/0996433f3f8486f168b8eab8841d099ad736c5c166e2ccf669f5e18536a1cd78.webp",
        riveId: 6945454,
        width: 833,
        height: 1316,
        widthAt1x: 273,
    },
    tex_base_06_mighnight: {
        url: "https://cdn.discordapp.com/assets/content/b5437c9682f5c273d412a0d5700d18b01ce4fd8dd41b5a2eb94f1ac70def0493.webp",
        riveId: 6945456,
        width: 833,
        height: 1316,
        widthAt1x: 273,
    },
    tex_base_07_glacier: {
        url: "https://cdn.discordapp.com/assets/content/fbba0d8f4b2ead815afb45bfa3e3bc529b87f0eb9fe6f116ead8617e99f73edb.webp",
        riveId: 7026923,
        width: 833,
        height: 1316,
        widthAt1x: 273,
    },
    tex_base_08_orange: {
        url: "https://cdn.discordapp.com/assets/content/861c67a712d842a269cf386d076d73c5b82bccf22f122e2ca58eb7b2f9f4910a.webp",
        riveId: 6945457,
        width: 833,
        height: 1316,
        widthAt1x: 273,
    },
    tex_base_09_pink: {
        url: "https://cdn.discordapp.com/assets/content/fd2c2ca2b95d8332e0c6b71fcd09c01a433a3bb82e6007cde3a34f8eaf78118b.webp",
        riveId: 6945459,
        width: 833,
        height: 1316,
        widthAt1x: 273,
    },
    tex_base_10_red: {
        url: "https://cdn.discordapp.com/assets/content/6bbde6588b826c49df896ece1b5521ea3deb7693a0ab6a96414889f3cf86d214.webp",
        riveId: 6945460,
        width: 833,
        height: 1316,
        widthAt1x: 273,
    },
    tex_base_11_cobalt: {
        url: "https://cdn.discordapp.com/assets/content/54c48557922ef25abf2ae44ac30bb89fc18cf3e817a0dbb8cb999e7d4e88a25e.webp",
        riveId: 6945462,
        width: 833,
        height: 1316,
        widthAt1x: 273,
    },
    "tex_base_12_x-ray": {
        url: "https://cdn.discordapp.com/assets/content/0610ec83c1a63ee5d35bf3f33ef84e26123565100b1ebc2f7e553569f6389e21.webp",
        riveId: 6945463,
        width: 833,
        height: 1316,
        widthAt1x: 273,
    },
    tex_base_13_liquid: {
        url: "https://cdn.discordapp.com/assets/content/4a87c2dea61d07d6e560866b618d1a16741e1377cd50545e8aca5a5250657d40.webp",
        riveId: 6945465,
        width: 833,
        height: 1316,
        widthAt1x: 273,
    },
    tex_base_14_butter: {
        url: "https://cdn.discordapp.com/assets/content/56a1b0472868f73c93350c8a73127eda64771bd884c7f4b9fc7055527b07a1d4.webp",
        riveId: 6945464,
        width: 833,
        height: 1316,
        widthAt1x: 273,
    },
    tex_base_15_iridescent: {
        url: "https://cdn.discordapp.com/assets/content/4ddd69337f5f51635742e70a344805df71109ba652ce467fa01582b99cb15ca4.webp",
        riveId: 6945468,
        width: 833,
        height: 1316,
        widthAt1x: 273,
    },
    tex_base_shadow: {
        url: "https://cdn.discordapp.com/assets/content/ed8b72ee7b21e3fdfd09054e873dd9989a77d12902e5bed116dd1e5bc39b3658.webp",
        riveId: 6885304,
        width: 1008,
        height: 350,
        widthAt1x: 331,
    },
    tex_env_labNight_bg: {
        url: "https://cdn.discordapp.com/assets/content/5fcc2d762e62c2ae52c7381be2ed0f3dc816795344b9303a51024d0521447699.webp",
        riveId: 6979903,
        width: 3952,
        height: 2223,
        widthAt1x: 1968,
    },
    tex_env_labNight_bg_mobileLandscape: {
        url: "https://cdn.discordapp.com/assets/content/46cf720ddb76a5975b8705fd532e27e75f683a79f6842bb9b6cf60daa1691ce0.webp",
        riveId: 7118591,
        width: 4096,
        height: 2595,
        widthAt1x: 1470,
    },
    tex_env_labNight_bg_mobilePortrait: {
        url: "https://cdn.discordapp.com/assets/content/445d6d89646aa5eeacba5b6fe893db6ae931c1756946bee6eb026c5eb4a1f4a7.webp",
        riveId: 7088398,
        width: 2353,
        height: 3332,
        widthAt1x: 784,
    },
    tex_env_labNight_fgLeft: {
        url: "https://cdn.discordapp.com/assets/content/14b81d95ca0227535c38194f3961b6e0fb8df4d1fdbcad9133262605938e6c2a.webp",
        riveId: 6979899,
        width: 1462,
        height: 451,
        widthAt1x: 705,
    },
    tex_env_labNight_fgRight: {
        url: "https://cdn.discordapp.com/assets/content/c3b2c54e6d95d021851397aa1e6014d19759e4a13d0dfe604c912a4b030ff203.webp",
        riveId: 6979900,
        width: 1426,
        height: 2232,
        widthAt1x: 713,
    },
    tex_env_labNight_mgBottom: {
        url: "https://cdn.discordapp.com/assets/content/90c46b4aaf2be6f4539860ac7aef8b6d60ab0c4dbb42acb3755b78452a9dfa69.webp",
        riveId: 6979898,
        width: 1800,
        height: 514,
        widthAt1x: 900,
    },
    tex_env_labNight_mgBottomMobile: {
        url: "https://cdn.discordapp.com/assets/content/89370c20287193d1be0e5d7d3868d10bb6d09f35677be72957bf756da0873a4a.webp",
        riveId: 6979901,
        width: 1171,
        height: 364,
        widthAt1x: 564,
    },
    tex_env_labNight_mgLight: {
        url: "https://cdn.discordapp.com/assets/content/75888ea5b13919a455db725d7c7bff432de103b8b856333bf6293d916f42ab5e.webp",
        riveId: 6979902,
        width: 839,
        height: 1032,
        widthAt1x: 404,
    },
    tex_env_labNight_mgTop: {
        url: "https://cdn.discordapp.com/assets/content/ab91ef672e2676d9757f5a5fa465363d66024cff0c0dd9bb75cd6b355ba33d9e.webp",
        riveId: 6979904,
        width: 1162,
        height: 489,
        widthAt1x: 560,
    },
    tex_env_labNight_sky: {
        url: "https://cdn.discordapp.com/assets/content/7dde187de68290a9dfe1ff7e2521ade9682c866b64ec57e8c1d3e9278ddd73d6.webp",
        riveId: 6979905,
        width: 1919,
        height: 1426,
        widthAt1x: 925,
    },
    tex_face_06_confused_textureAtlas: {
        url: "https://cdn.discordapp.com/assets/content/5122692930f1fc219e03764c6f075d0db23f2c9b9af4630493f5535edd190d28.webp",
        riveId: 6866859,
        width: 682,
        height: 341,
    },
    tex_face_07_anxious_textureAtlas: {
        url: "https://cdn.discordapp.com/assets/content/cf1fd596a8f2180aa33d8be5f8a3e24c7e7d777e285ad9a0bd4270cdaff1a437.webp",
        riveId: 6866913,
        width: 458,
        height: 181,
    },
    tex_face_09_rage_textureAtlas: {
        url: "https://cdn.discordapp.com/assets/content/bbdc9063a3ab4a299e686fb29b9121484d83c1a92fe09c9864cfdf5189407519.webp",
        riveId: 6863487,
        width: 900,
        height: 201,
    },
    tex_face_11_spellbound_textureAtlas: {
        url: "https://cdn.discordapp.com/assets/content/30245c5db85935d260665cf86ebc95051b93f05a608bb7381b9848dacacc9d3c.webp",
        riveId: 6856738,
        width: 1106,
        height: 278,
    },
    tex_face_13_freeFall_textureAtlas: {
        url: "https://cdn.discordapp.com/assets/content/63950cbbad9db04a28aff1fb86a0fa4a152f425f98c6456307726a006dcb29da.webp",
        riveId: 6866304,
        width: 391,
        height: 203,
    },
    tex_face_14_possessed_textureAtlas: {
        url: "https://cdn.discordapp.com/assets/content/c6866d54c44f1135bc370833b8c568d176c0cf8aeec1d218c3c2c6b055634866.webp",
        riveId: 6864828,
        width: 649,
        height: 525,
    },
    tex_face_spooked_drop: {
        url: "https://cdn.discordapp.com/assets/content/c0ef1aa0fe438130e637c52d9587c2bec5c175398843c085bf63d53a1cc60a7d.webp",
        riveId: 6825665,
        width: 30,
        height: 90,
    },
    tex_face_spooked_shadow: {
        url: "https://cdn.discordapp.com/assets/content/24fac27097b1200e730a4fe48358eb4a746963b3e635ae9582872a19e8b87a18.webp",
        riveId: 7104996,
        width: 677,
        height: 236,
    },
    tex_headwear_01_elvenHeadpiece: {
        url: "https://cdn.discordapp.com/assets/content/41903840a79ad543f21fa9f40f1b7c076ac16a8f4a193f6951ce1bc8da21dbe4.webp",
        riveId: 6878398,
        width: 546,
        height: 231,
        widthAt1x: 182,
    },
    tex_headwear_02_headphones: {
        url: "https://cdn.discordapp.com/assets/content/71d94c94a82c5357529c52d33facf7361cd733be7bb1908632aa1fd375bc8678.webp",
        riveId: 7012013,
        width: 880,
        height: 495,
        widthAt1x: 288,
    },
    tex_headwear_03_bananaPeel: {
        url: "https://cdn.discordapp.com/assets/content/fe15e02141e24b2e0b3cc54e4ca967545e8737345d35f24fc843487b2f07d52f.webp",
        riveId: 6944187,
        width: 952,
        height: 567,
        widthAt1x: 312,
    },
    tex_headwear_04_piercings: {
        url: "https://cdn.discordapp.com/assets/content/cab0de0a14c34a595a7773cb81c56af3e90603b2b9760723cde97f61a161922a.webp",
        riveId: 6945559,
        width: 322,
        height: 280,
        widthAt1x: 106,
    },
    tex_headwear_05_headband: {
        url: "https://cdn.discordapp.com/assets/content/c9167315bc86f8ac43ae9777d38e8daed9a7beff8390e2b664ebf738a6982404.webp",
        riveId: 6943812,
        width: 1022,
        height: 742,
        widthAt1x: 335,
    },
    tex_headwear_06_sunGlasses: {
        url: "https://cdn.discordapp.com/assets/content/0a1c73f81e29ad53e8889ae38ba6b3a5a16e4d7dda9eb4b0e070f6dc562e593f.webp",
        riveId: 6878347,
        width: 819,
        height: 350,
        widthAt1x: 269,
    },
    tex_headwear_07_backwardHat: {
        url: "https://cdn.discordapp.com/assets/content/0f6576c50446353959d6063ce87a702b12e6983e4e2d4abbe1382e4e7d79dd9b.webp",
        riveId: 6878399,
        width: 861,
        height: 420,
        widthAt1x: 287,
    },
    tex_headwear_08_leaf: {
        url: "https://cdn.discordapp.com/assets/content/ab8aa59e898f3a281f81a8d6703355c32debba8a5879719121141baa3dc8aca9.webp",
        riveId: 6943794,
        width: 681,
        height: 227,
        widthAt1x: 228,
    },
    tex_headwear_09_fire: {
        url: "https://cdn.discordapp.com/assets/content/52c3472e9e5c5d0923e77b50358d3e71ab1e40aab8df78dba73163d2c3dea572.webp",
        riveId: 6878288,
        width: 910,
        height: 574,
        widthAt1x: 298,
    },
    tex_headwear_10_halo: {
        url: "https://cdn.discordapp.com/assets/content/d7a51adc59b09eb652d8dd473804dd9e369966eeeb694abae3d801215d8d4f93.webp",
        riveId: 6878456,
        width: 714,
        height: 322,
        widthAt1x: 234,
    },
    tex_headwear_11_brain: {
        url: "https://cdn.discordapp.com/assets/content/cf6a8c75cfbaa0bf81ea0cce2a932dbc265916d6f0f572b3e8c63b4093778bf4.webp",
        riveId: 6878244,
        width: 414,
        height: 276,
        widthAt1x: 138,
    },
    tex_headwear_12_trafficCone: {
        url: "https://cdn.discordapp.com/assets/content/9d7f0fa78ba9217409be309c1b7fddd20503251292aaa58c06fecc3b68741abb.webp",
        riveId: 6878330,
        width: 420,
        height: 399,
        widthAt1x: 140,
    },
    tex_headwear_13_teddyBeanie: {
        url: "https://cdn.discordapp.com/assets/content/2bc458cf90e244a2f272b41461945fde86846111276a505f56016ee058022c7d.webp",
        riveId: 6878395,
        width: 910,
        height: 532,
        widthAt1x: 298,
    },
    tex_headwear_14_crown: {
        url: "https://cdn.discordapp.com/assets/content/48d7f40db34c7c16aafa68a525df464c88a847ba757c4e720943d1de33efe210.webp",
        riveId: 6878327,
        width: 602,
        height: 455,
        widthAt1x: 197,
    },
    tex_none: {
        url: "https://cdn.discordapp.com/assets/content/a0cbeae4f229972a95fe4b0855e085d1cbeb4ce09600f340f9629824fe163fd0.webp",
        riveId: 6585260,
        width: 1,
        height: 1,
    },
    tex_outfit_01_baddie: {
        url: "https://cdn.discordapp.com/assets/content/a638356d8b217bb4c38954a53b644478006a329bf7cfbf9fb7019685e281ebab.webp",
        riveId: 6942551,
        width: 707,
        height: 532,
        widthAt1x: 232,
    },
    tex_outfit_01_baddie_monochrome: {
        url: "https://cdn.discordapp.com/assets/content/181b04511ce9a18af59375d77ae1a971c1d78d7739ad38fc9ba82b644d80bc45.webp",
        riveId: 6942552,
        width: 707,
        height: 532,
        widthAt1x: 232,
    },
    tex_outfit_01_baddie_pastel: {
        url: "https://cdn.discordapp.com/assets/content/cb13824a08fd2eb0115bf56399c4ba1ef9aaa4aaa44a3dc551270ed5e7885250.webp",
        riveId: 6942562,
        width: 707,
        height: 532,
        widthAt1x: 232,
    },
    tex_outfit_01_baddie_sunset: {
        url: "https://cdn.discordapp.com/assets/content/ec0e423280609f7f963a3ce34d8962971f4a6adee53cd95f8412d11c4f2d8603.webp",
        riveId: 6942559,
        width: 707,
        height: 532,
        widthAt1x: 232,
    },
    tex_outfit_01_baddie_violet: {
        url: "https://cdn.discordapp.com/assets/content/0f09a73bb81b7dbc72de42f2bb6e0c8a80d48cd00426636cfe55be210a87cfe1.webp",
        riveId: 6942557,
        width: 707,
        height: 532,
        widthAt1x: 232,
    },
    tex_outfit_02_trash: {
        url: "https://cdn.discordapp.com/assets/content/bfaacc2bc71388a8030b9b93dbf1aff45321010c2fcd35c89a79db4aa85cafde.webp",
        riveId: 6923673,
        width: 938,
        height: 644,
        widthAt1x: 308,
    },
    tex_outfit_02_trash_blackout: {
        url: "https://cdn.discordapp.com/assets/content/67c8fd9a93a09b7b1d3161d24bb84914ef8536c7525cdd5bbd70748e61c6fae6.webp",
        riveId: 6923652,
        width: 938,
        height: 644,
        widthAt1x: 308,
    },
    tex_outfit_02_trash_bubblegum: {
        url: "https://cdn.discordapp.com/assets/content/75e4d1da85059643f20d2c00b8e0166b1277aa6d507b3009b357f2879dba9f1c.webp",
        riveId: 6923653,
        width: 938,
        height: 644,
        widthAt1x: 308,
    },
    tex_outfit_02_trash_caution: {
        url: "https://cdn.discordapp.com/assets/content/8cb44780aa8185c4aa6d36c21c0708fda1f686e97a397d66e26dd3433f9f1d45.webp",
        riveId: 6923654,
        width: 938,
        height: 644,
        widthAt1x: 308,
    },
    tex_outfit_02_trash_toxic: {
        url: "https://cdn.discordapp.com/assets/content/f3818ad8b69a62ff626171cc359651545d0706bb460195cc4989ab38e42dc777.webp",
        riveId: 6923655,
        width: 938,
        height: 644,
        widthAt1x: 308,
    },
    tex_outfit_03_streamer: {
        url: "https://cdn.discordapp.com/assets/content/b240e82978b8b05a1d2d6f52a5357e15c06d1b47f8a3d3aa02e9a906ebabd553.webp",
        riveId: 7084204,
        width: 609,
        height: 588,
        widthAt1x: 203,
    },
    tex_outfit_03_streamer_flames: {
        url: "https://cdn.discordapp.com/assets/content/38523b655ee3b79ed747a764e14a70d9d446130a1bb5185f8010ecbe6bf4ea4a.webp",
        riveId: 7026918,
        width: 609,
        height: 588,
        widthAt1x: 203,
    },
    tex_outfit_03_streamer_smiley: {
        url: "https://cdn.discordapp.com/assets/content/ed21145fc06784143b6bba1470226b087ed720b49565abf6f25fc3d90055a6db.webp",
        riveId: 7026919,
        width: 609,
        height: 588,
        widthAt1x: 203,
    },
    tex_outfit_03_streamer_stripes: {
        url: "https://cdn.discordapp.com/assets/content/debe13ae8d3734021e6a2945d61e131ea3375f8d479611616ae71b59f2beb577.webp",
        riveId: 7026920,
        width: 609,
        height: 588,
        widthAt1x: 203,
    },
    tex_outfit_03_streamer_vintage: {
        url: "https://cdn.discordapp.com/assets/content/2c2bb5198cba26001c893681dd90280ea80a6a425b493073477cba643b9ace92.webp",
        riveId: 7026922,
        width: 609,
        height: 588,
        widthAt1x: 203,
    },
    tex_outfit_04_camper: {
        url: "https://cdn.discordapp.com/assets/content/f768da4bac88bb093b186306433d7e6b3db833612d0453a9fb68a55cfc419077.webp",
        riveId: 6879281,
        width: 588,
        height: 511,
        widthAt1x: 193,
    },
    tex_outfit_04_camper_amber: {
        url: "https://cdn.discordapp.com/assets/content/a9744591939d82efb6d53435ad0af0d93fd0bcc38db8691ae69ed7b3780d3e77.webp",
        riveId: 6945578,
        width: 588,
        height: 511,
        widthAt1x: 193,
    },
    tex_outfit_04_camper_glamp: {
        url: "https://cdn.discordapp.com/assets/content/1c63db3e687f68960444f30aa5c2bddd7a6ba467e197063e1b7506ba701ec0c7.webp",
        riveId: 6945579,
        width: 588,
        height: 511,
        widthAt1x: 193,
    },
    tex_outfit_04_camper_plaid: {
        url: "https://cdn.discordapp.com/assets/content/4c0deb2d95e0dcab1910e294456dcc62cd07be606edb90b1942b387781ee3696.webp",
        riveId: 6945580,
        width: 588,
        height: 511,
        widthAt1x: 193,
    },
    tex_outfit_04_camper_swamp: {
        url: "https://cdn.discordapp.com/assets/content/e25eb49b4710edffac760cf611a2c335df7db7ba8b6ff4db791b67353215b274.webp",
        riveId: 6945581,
        width: 588,
        height: 511,
        widthAt1x: 193,
    },
    tex_outfit_05_athlete: {
        url: "https://cdn.discordapp.com/assets/content/1b58451c4351d3ec6d4dfe2ecf65ab82983872d35f06642b126fa22aa8704674.webp",
        riveId: 7000298,
        width: 784,
        height: 532,
        widthAt1x: 252,
    },
    tex_outfit_05_athlete_blocked: {
        url: "https://cdn.discordapp.com/assets/content/a9210c5be3d3c0672856ac2d91b53bceaddcb4b30f7ba9e477ec0a941c0006e8.webp",
        riveId: 7000296,
        width: 784,
        height: 532,
        widthAt1x: 252,
    },
    tex_outfit_05_athlete_checkered: {
        url: "https://cdn.discordapp.com/assets/content/f04c24b3330c703e0f9e012ffd4e50680c8f62e0e73df713450cf3268b60bb3d.webp",
        riveId: 7000295,
        width: 784,
        height: 532,
        widthAt1x: 252,
    },
    tex_outfit_05_athlete_faded: {
        url: "https://cdn.discordapp.com/assets/content/b38e28b84e4e9b68d51837e09272135272e3dbb9ff54adedef5f646518a11a59.webp",
        riveId: 7000297,
        width: 784,
        height: 532,
        widthAt1x: 252,
    },
    tex_outfit_05_athlete_lined: {
        url: "https://cdn.discordapp.com/assets/content/a6b94af15440d8554f7a1acaffbff75a38c9ad2db2eb8197b69a972562e0b8db.webp",
        riveId: 7000294,
        width: 784,
        height: 532,
        widthAt1x: 252,
    },
    tex_outfit_06_cowpoke: {
        url: "https://cdn.discordapp.com/assets/content/5d82863d31a7e305f2fad3df4c27faf9155f851b4ca35f812c21b47a14298dda.webp",
        riveId: 6879600,
        width: 826,
        height: 532,
        widthAt1x: 271,
    },
    tex_outfit_06_cowpoke_blush: {
        url: "https://cdn.discordapp.com/assets/content/6db99f429cf7bc5dd70523fa8ca891042ffafc4455065d8a7d4865edbbe25568.webp",
        riveId: 6945584,
        width: 826,
        height: 532,
        widthAt1x: 271,
    },
    tex_outfit_06_cowpoke_denim: {
        url: "https://cdn.discordapp.com/assets/content/23c34abef900b338b47a6072454b8e02108a9a0f40835c37e01bbf0cfb12e70f.webp",
        riveId: 6945585,
        width: 826,
        height: 532,
        widthAt1x: 271,
    },
    tex_outfit_06_cowpoke_onyx: {
        url: "https://cdn.discordapp.com/assets/content/e5b483670bcb7a90f7f9deba1aed475278d29f78baf3dc6ef384082e7a643f22.webp",
        riveId: 6945586,
        width: 826,
        height: 532,
        widthAt1x: 271,
    },
    tex_outfit_06_cowpoke_steel: {
        url: "https://cdn.discordapp.com/assets/content/73abc8bb1ebe0cc1eb46c4a657995cb9075331dd454f923233ea94bd3ceeeef6.webp",
        riveId: 6945587,
        width: 826,
        height: 532,
        widthAt1x: 271,
    },
    tex_outfit_07_goth: {
        url: "https://cdn.discordapp.com/assets/content/5b1aec6182980ea56babc5ed3b360af43cda05c19b20c8cad00f19fb8216271d.webp",
        riveId: 6936838,
        width: 875,
        height: 518,
        widthAt1x: 287,
    },
    tex_outfit_07_goth_raven: {
        url: "https://cdn.discordapp.com/assets/content/cec7dc286b8b32389c941e6bcd7f267a93dcbfe6d2dc830ec6ce1ceeba33dcb7.webp",
        riveId: 6936841,
        width: 875,
        height: 518,
        widthAt1x: 287,
    },
    tex_outfit_07_goth_serpent: {
        url: "https://cdn.discordapp.com/assets/content/d79e9bed36e6765595541997b85cbe5ca0d274b23027a263b0eb51b494b1e942.webp",
        riveId: 6936840,
        width: 875,
        height: 518,
        widthAt1x: 287,
    },
    tex_outfit_07_goth_siren: {
        url: "https://cdn.discordapp.com/assets/content/d17d73be0b6ea5cb388a50a555ee4f6ccf2efc9eb9d8757225c3e28c40a82bfb.webp",
        riveId: 6936839,
        width: 875,
        height: 518,
        widthAt1x: 287,
    },
    tex_outfit_07_goth_vamp: {
        url: "https://cdn.discordapp.com/assets/content/78470b15e9af123335c2f084b6ec7a2992cf507628c3acff53abf0046791d2e5.webp",
        riveId: 6936842,
        width: 875,
        height: 518,
        widthAt1x: 287,
    },
    tex_outfit_08_astronaut: {
        url: "https://cdn.discordapp.com/assets/content/396996658c046202d66d9358672064ef2a2b2b71491e89fa41f0633a2715db53.webp",
        riveId: 6879222,
        width: 609,
        height: 546,
        widthAt1x: 203,
    },
    tex_outfit_08_astronaut_cosmic: {
        url: "https://cdn.discordapp.com/assets/content/a441fbd411bfbec0ee7cee5938ca43212d1aa3969a79c5791582b7643da077c5.webp",
        riveId: 6945588,
        width: 609,
        height: 546,
        widthAt1x: 203,
    },
    tex_outfit_08_astronaut_martian: {
        url: "https://cdn.discordapp.com/assets/content/cd6399f8dc97eacf112200bbd1bc96e6efa50b7f34ad8ba0aef4d5de90474626.webp",
        riveId: 6945589,
        width: 609,
        height: 546,
        widthAt1x: 203,
    },
    tex_outfit_08_astronaut_solar: {
        url: "https://cdn.discordapp.com/assets/content/f9cf559f0b9cfe1af9098661e2d6004099db00bd471e453a2087fba3448cbaa7.webp",
        riveId: 6945590,
        width: 609,
        height: 546,
        widthAt1x: 203,
    },
    tex_outfit_08_astronaut_stardust: {
        url: "https://cdn.discordapp.com/assets/content/5a09ce15b42a0ae2f9e0b54a341c89acc7d1ded744b656c5c8bab3c0ed1af923.webp",
        riveId: 6945591,
        width: 609,
        height: 546,
        widthAt1x: 203,
    },
    tex_outfit_09_jester: {
        url: "https://cdn.discordapp.com/assets/content/fe2f547f7f6ec7c45bcba23839b29024fdd6d698a548101431b966ad7940a69a.webp",
        riveId: 6998778,
        width: 658,
        height: 546,
        widthAt1x: 216,
    },
    tex_outfit_09_jester_carnival: {
        url: "https://cdn.discordapp.com/assets/content/c53941011e11c3b8724339b34432a6c60d6fccc955b4b5bd3944f26bc7e1f5fe.webp",
        riveId: 6998764,
        width: 658,
        height: 546,
        widthAt1x: 216,
    },
    tex_outfit_09_jester_confetti: {
        url: "https://cdn.discordapp.com/assets/content/e2d3ddef9dd87b3e3df01cf1c4d57e45cebdfbd93b2fba28f77b2b50612498d7.webp",
        riveId: 6998766,
        width: 658,
        height: 546,
        widthAt1x: 216,
    },
    tex_outfit_09_jester_nightfall: {
        url: "https://cdn.discordapp.com/assets/content/f303b179db0856f11658b6b3244d4175637248d757786e8d8917b8147ab53bb3.webp",
        riveId: 6998768,
        width: 658,
        height: 546,
        widthAt1x: 216,
    },
    tex_outfit_09_jester_sunrise: {
        url: "https://cdn.discordapp.com/assets/content/3c47f48bd62a43207b4ee2e94df00b917d303bb4159eeda7230e58f30894f918.webp",
        riveId: 6998772,
        width: 658,
        height: 546,
        widthAt1x: 216,
    },
    tex_outfit_10_traveler: {
        url: "https://cdn.discordapp.com/assets/content/65ae90f06f97ff09dda7cd3a1909388a4ad9a8b74f13f6946595026bf13c1ad1.webp",
        riveId: 6879283,
        width: 602,
        height: 525,
        widthAt1x: 197,
    },
    tex_outfit_10_traveler_chrono: {
        url: "https://cdn.discordapp.com/assets/content/145beced8bfbd0fd382954f80601143eb74673bf1670c0ff6354e67c9f113e68.webp",
        riveId: 6945598,
        width: 602,
        height: 525,
        widthAt1x: 197,
    },
    tex_outfit_10_traveler_haze: {
        url: "https://cdn.discordapp.com/assets/content/7a8e8d172fc6c799661fb9b434b66e9003fd795f7b29d46881476e6f6a5245d5.webp",
        riveId: 6945599,
        width: 602,
        height: 525,
        widthAt1x: 197,
    },
    tex_outfit_10_traveler_moss: {
        url: "https://cdn.discordapp.com/assets/content/d64d37450d7389fd3251911ac4c8e4ec073f023044cb38e8ca0811ed742c04b7.webp",
        riveId: 6945600,
        width: 602,
        height: 525,
        widthAt1x: 197,
    },
    tex_outfit_10_traveler_umber: {
        url: "https://cdn.discordapp.com/assets/content/bcecdc6f144b54dd85e5bd8178cb72efdd2d010743d562b126c08611344c894e.webp",
        riveId: 6945602,
        width: 602,
        height: 525,
        widthAt1x: 197,
    },
    tex_outfit_11_mage: {
        url: "https://cdn.discordapp.com/assets/content/8fcdb12bd45a5543e63beebc742249eef13b38e6070c8a62f65a34ba0a3d96dd.webp",
        riveId: 6879170,
        width: 714,
        height: 581,
        widthAt1x: 234,
    },
    tex_outfit_11_mage_dusk: {
        url: "https://cdn.discordapp.com/assets/content/72a6fd56a3bb2edde462ef0aa8ed197f5e4118703d7056bc967daf94cbb855a3.webp",
        riveId: 6945603,
        width: 714,
        height: 581,
        widthAt1x: 234,
    },
    tex_outfit_11_mage_shadow: {
        url: "https://cdn.discordapp.com/assets/content/739ea8b814a59fe6fb3c6db9104032d8172e45906a95e75c302f56b9e9449c98.webp",
        riveId: 6945604,
        width: 714,
        height: 581,
        widthAt1x: 234,
    },
    tex_outfit_11_mage_wildwood: {
        url: "https://cdn.discordapp.com/assets/content/06226eed0688fb73b26f0a573f6a5238a7f97ab84cf59ed0f86e953c155a0e49.webp",
        riveId: 6945606,
        width: 714,
        height: 581,
        widthAt1x: 234,
    },
    tex_outfit_11_mage_winter: {
        url: "https://cdn.discordapp.com/assets/content/c8ccb36e839423e9c76ecdfecf0bf7d41ac9ad06bf7f79638ebde449ef181f71.webp",
        riveId: 6945607,
        width: 714,
        height: 581,
        widthAt1x: 234,
    },
    tex_outfit_12_mech: {
        url: "https://cdn.discordapp.com/assets/content/285eb1fe0b9bf15ae3c9687bc769e6a53da54c14de1e59cc5c19be6e1ef5ee33.webp",
        riveId: 6879169,
        width: 651,
        height: 532,
        widthAt1x: 214,
    },
    tex_outfit_12_mech_aero: {
        url: "https://cdn.discordapp.com/assets/content/90b53362edd3a1db609acb1775a5dcc7c18db8db186881391328b217adce63e7.webp",
        riveId: 6945608,
        width: 651,
        height: 532,
        widthAt1x: 214,
    },
    tex_outfit_12_mech_sandstorm: {
        url: "https://cdn.discordapp.com/assets/content/66c6c521ebe635d15c9213cc1422cbb76f9c1bb71d7359ae397d16b86ac26168.webp",
        riveId: 6945609,
        width: 651,
        height: 532,
        widthAt1x: 214,
    },
    tex_outfit_12_mech_ultraviolet: {
        url: "https://cdn.discordapp.com/assets/content/cfb396306bc31b1ae6323aefd8763e0872e2172dde2b5017f63c61fe7342252c.webp",
        riveId: 6945612,
        width: 651,
        height: 532,
        widthAt1x: 214,
    },
    tex_outfit_12_mech_viper: {
        url: "https://cdn.discordapp.com/assets/content/e72eab13d7faad9833b1086edc90d384b9b55aa2b15a9fc48e2703d505f1c213.webp",
        riveId: 6945613,
        width: 651,
        height: 532,
        widthAt1x: 214,
    },
    tex_outfit_13_knight: {
        url: "https://cdn.discordapp.com/assets/content/20c0f50c019c0456f521399755cc9d538d2deddeafd3af777803cee3093dec61.webp",
        riveId: 7115126,
        width: 630,
        height: 532,
        widthAt1x: 207,
    },
    tex_outfit_13_knight_glacier: {
        url: "https://cdn.discordapp.com/assets/content/9fd7b1d11a9a189a75aee3b505b7232db5ef4acb0954528a1ca0e83ffbb7fe5f.webp",
        riveId: 7115195,
        width: 630,
        height: 532,
        widthAt1x: 207,
    },
    tex_outfit_13_knight_iron: {
        url: "https://cdn.discordapp.com/assets/content/df1b4521899b76d90e43283bc31686194050053504d56017e7fcc3140426e2f8.webp",
        riveId: 7115194,
        width: 630,
        height: 532,
        widthAt1x: 207,
    },
    tex_outfit_13_knight_petal: {
        url: "https://cdn.discordapp.com/assets/content/4f62ac7f293b01e4735ae8b9afd539209ea8f95a9ec80477d867fc5c451931df.webp",
        riveId: 7115193,
        width: 630,
        height: 532,
        widthAt1x: 207,
    },
    tex_outfit_13_knight_rust: {
        url: "https://cdn.discordapp.com/assets/content/8970597ae7c2a28f09498dc5883e34e490a87f8f2d1453eff165693d782cc448.webp",
        riveId: 7115186,
        width: 630,
        height: 532,
        widthAt1x: 207,
    },
    tex_outfit_14_magical: {
        url: "https://cdn.discordapp.com/assets/content/76aa1e996574709c012d7ff52df93a8c2d1e42fb39add8d34a09a170672c6796.webp",
        riveId: 6879167,
        width: 560,
        height: 497,
        widthAt1x: 184,
    },
    tex_outfit_14_magical_amethyst: {
        url: "https://cdn.discordapp.com/assets/content/273bd6cbe651b7b1c7255adbdef137d5bfff6806f52540250ea894235f1be749.webp",
        riveId: 6945731,
        width: 560,
        height: 497,
        widthAt1x: 184,
    },
    tex_outfit_14_magical_citrine: {
        url: "https://cdn.discordapp.com/assets/content/58a03fcfb57cf16e6e84490101b7ac42d59d3f943c77ebc5384767a16c3ab50c.webp",
        riveId: 6945753,
        width: 560,
        height: 497,
        widthAt1x: 184,
    },
    tex_outfit_14_magical_frost: {
        url: "https://cdn.discordapp.com/assets/content/5f0dc06798554eec4c41deb31afbf5253fac077c18a7a358583fff11591ea67b.webp",
        riveId: 6945754,
        width: 560,
        height: 497,
        widthAt1x: 184,
    },
    tex_outfit_14_magical_sapphire: {
        url: "https://cdn.discordapp.com/assets/content/4d0eca018f23d91c94d83a2c85b4e0a42606bff9f17e842cb0cf6b9d444bb56f.webp",
        riveId: 6945756,
        width: 560,
        height: 497,
        widthAt1x: 184,
    },
    tex_shoes_01_sneakers: {
        url: "https://cdn.discordapp.com/assets/content/65eac1112a7cad9ad3119662358d747610dc3aa744e2eb94b613e5aad0922e8f.webp",
        riveId: 6880490,
        width: 560,
        height: 196,
        widthAt1x: 180,
    },
    tex_shoes_02_socks: {
        url: "https://cdn.discordapp.com/assets/content/00e3887d696c3e0d5815129f2c0a4e0053ef24b68b424c07e2ec623d4eaa4379.webp",
        riveId: 6880573,
        width: 550,
        height: 165,
        widthAt1x: 180,
    },
    tex_shoes_03_wumpusSlippers: {
        url: "https://cdn.discordapp.com/assets/content/8de8639167be0de097e03690139c0033392e1119de42158cbbdfc5778dba0a4d.webp",
        riveId: 6880448,
        width: 456,
        height: 152,
        widthAt1x: 153,
    },
    tex_shoes_04_bionic: {
        url: "https://cdn.discordapp.com/assets/content/9ba048a4df654c31c5581cac9749b8773d299af66883d5fa3bbd9da0b3dd8efc.webp",
        riveId: 6880556,
        width: 504,
        height: 140,
        widthAt1x: 162,
    },
    tex_shoes_05_platforms: {
        url: "https://cdn.discordapp.com/assets/content/f4b1f3149f7d10c3beecb729985886faf43790eee4936e4d56efe820ad2a694c.webp",
        riveId: 7026898,
        width: 504,
        height: 196,
        widthAt1x: 162,
    },
    tex_shoes_06_westernboots: {
        url: "https://cdn.discordapp.com/assets/content/67f4d6b777aca5cb3c0806056a449e1946183c2ef76b607e3e2b1bd2bc1aab0c.webp",
        riveId: 7026900,
        width: 504,
        height: 133,
        widthAt1x: 165,
    },
    tex_shoes_07_kittyPaws: {
        url: "https://cdn.discordapp.com/assets/content/b648ea8ac395fa010c951c8900b88e1c0c7797fde3af1881c6d5138431a24c3a.webp",
        riveId: 7026901,
        width: 550,
        height: 165,
        widthAt1x: 180,
    },
    tex_shoes_08_rollerSkates: {
        url: "https://cdn.discordapp.com/assets/content/c2417470196be3f00f30a55a85abce59b45343e34ae9c7fcd48c70b9ac162acd.webp",
        riveId: 7026902,
        width: 483,
        height: 175,
        widthAt1x: 158,
    },
    tex_shoes_09_snowShoes: {
        url: "https://cdn.discordapp.com/assets/content/d42b4d283c7dd6fcd3a7bb76337b26ad98944c34ec43cce2f933a0e062c081ce.webp",
        riveId: 6880513,
        width: 504,
        height: 140,
        widthAt1x: 162,
    },
    tex_shoes_10_icarusSandals: {
        url: "https://cdn.discordapp.com/assets/content/766ae7f630db69ffa4eba764e4241f8580c1614fd2a335da5b9b1bb58744df29.webp",
        riveId: 7074384,
        width: 546,
        height: 196,
        widthAt1x: 179,
    },
    tex_shoes_11_clownShoes: {
        url: "https://cdn.discordapp.com/assets/content/3e3a25b167c3d501f91b0eb3fe5f0e7a8964dddee6947cd709649a2bd42fdc69.webp",
        riveId: 7026915,
        width: 602,
        height: 168,
        widthAt1x: 197,
    },
    tex_shoes_12_fancyHeel: {
        url: "https://cdn.discordapp.com/assets/content/7e67569cb0520ad297cabc5e6aa56457c23d81a6be71beac4c4bc92f5fa9a1e3.webp",
        riveId: 6880487,
        width: 550,
        height: 165,
        widthAt1x: 180,
    },
    tex_shoes_13_ballet: {
        url: "https://cdn.discordapp.com/assets/content/c28bad5caad1018cc4c21deba110fe8d76518c4f400101c9e76cc65377e618c2.webp",
        riveId: 7026916,
        width: 496,
        height: 124,
        widthAt1x: 164,
    },
    tex_shoes_14_cyberStompers: {
        url: "https://cdn.discordapp.com/assets/content/e4e99046896383e95c1dc7a76a13654ced23cb670b12019cc0c7988fac1b096a.webp",
        riveId: 7026917,
        width: 532,
        height: 140,
        widthAt1x: 171,
    },
    tex_wearable_01_stickers: {
        url: "https://cdn.discordapp.com/assets/content/e0a1a7a2429d25c4dc98167306dcc1d11982344b2f8f326d4f029860570ae8d2.webp",
        riveId: 6880478,
        width: 805,
        height: 728,
        widthAt1x: 264,
    },
    tex_wearable_02_tote: {
        url: "https://cdn.discordapp.com/assets/content/30435369290e6fa4e20a1d077cbd903c46a47777d332cb6b2c22facfdde3acac.webp",
        riveId: 6880476,
        width: 238,
        height: 308,
        widthAt1x: 78,
    },
    tex_wearable_03_angelWings: {
        url: "https://cdn.discordapp.com/assets/content/01a8ffa3c5846232c6e8758e385abdb4a1f181f337e425a82baadfc2ff59e7f4.webp",
        riveId: 6880634,
        width: 1210,
        height: 385,
        widthAt1x: 396,
    },
    tex_wearable_04_skateboard: {
        url: "https://cdn.discordapp.com/assets/content/4415af6fe2b6749df24f13c8bea4668ba4c50eecf44e4cff7a89186f5bc51353.webp",
        riveId: 6880472,
        width: 259,
        height: 385,
        widthAt1x: 85,
    },
    tex_wearable_05_dragonWings: {
        url: "https://cdn.discordapp.com/assets/content/ecdf7d0dc99d8a143f58b5321720b6692305e05355858b9dd237e6a5b3a53cdb.webp",
        riveId: 6945412,
        width: 1430,
        height: 1045,
        widthAt1x: 468,
    },
    tex_wearable_06_takeOutBag: {
        url: "https://cdn.discordapp.com/assets/content/07f5722786e32bde7a1fdaaf30bd728e67034808d2d54b25168bfa2bc6f07722.webp",
        riveId: 6880614,
        width: 210,
        height: 238,
        widthAt1x: 69,
    },
    tex_wearable_07_pixelWrench: {
        url: "https://cdn.discordapp.com/assets/content/41b921fee09a12551cb671b5c8c162abff806ebbb80dc2a03e2f4068bb7732b4.webp",
        riveId: 7058139,
        width: 406,
        height: 301,
        widthAt1x: 133,
    },
    tex_wearable_08_wizardStaff: {
        url: "https://cdn.discordapp.com/assets/content/f788dccb04b2519dbe7e8b54f5946411947c97a275c85e1618505b1ea372b6ad.webp",
        riveId: 6978663,
        width: 490,
        height: 707,
        widthAt1x: 161,
    },
    tex_wearable_09_mechWings: {
        url: "https://cdn.discordapp.com/assets/content/b671fb212481e511e935dd760a6c18c271fe0f5cc216ba06037df67d93f11c43.webp",
        riveId: 6880609,
        width: 1265,
        height: 385,
        widthAt1x: 414,
    },
    tex_wearable_10_sword_spritesheet: {
        url: "https://cdn.discordapp.com/assets/content/37b333a6ffdbf3f0d73282d262fc1ad0542b9a869edcb47fc8d4c8634177a31c.webp",
        riveId: 7026804,
        width: 2765,
        height: 2464,
        widthAt1x: 905,
    },
    tex_wearable_11_deviantTail: {
        url: "https://cdn.discordapp.com/assets/content/bc2ff8a274e216642534dd789518bc89ffbde6bd8612319ced01354bf461fe62.webp",
        riveId: 7000661,
        width: 525,
        height: 462,
        widthAt1x: 175,
    },
    tex_wearable_11_deviantTail_smoke_active_spritesheet: {
        url: "https://cdn.discordapp.com/assets/content/4af280e7a843ff71ef8ab45b54effd3d78ba74a1fac8e08de63893e9e282ff26.webp",
        riveId: 7190581,
        width: 2550,
        height: 3400,
        widthAt1x: 900,
    },
    tex_wearable_11_deviantTail_smoke_idle_spritesheet: {
        url: "https://cdn.discordapp.com/assets/content/9d45fab964812509c67b59af7ba2037146aa9feb7b10304265e8020a7e91cf75.webp",
        riveId: 7190582,
        width: 2550,
        height: 3400,
        widthAt1x: 900,
    },
    tex_wearable_12_magicalStaff: {
        url: "https://cdn.discordapp.com/assets/content/3f2089245e36fa8abca99b90cfc479420e158de8b7f7d1875a09e2da33861bcb.webp",
        riveId: 6944077,
        width: 476,
        height: 574,
        widthAt1x: 156,
    },
    tex_wearable_13_butterflyWings: {
        url: "https://cdn.discordapp.com/assets/content/d7af6b2723ed82a7263a988927781ccc240d6a770194c38e042dfcd37348403a.webp",
        riveId: 6797765,
        width: 1550,
        height: 1550,
        widthAt1x: 517,
    },
    tex_wearable_14_catBackpack: {
        url: "https://cdn.discordapp.com/assets/content/8c059e9d8030f6d97924cbefc6e2ac135dfbf4d01de1ea0b97db0d69ebb84cbc.webp",
        riveId: 6944650,
        width: 308,
        height: 322,
        widthAt1x: 101,
    },
    tex_wireframe_spritesheet: {
        url: "https://cdn.discordapp.com/assets/content/df0bc8b307f84dcb7044c1f8b571bb41716dd891da077311940d4e8003b2fb9d.webp",
        riveId: 7103978,
        width: 4032,
        height: 4080,
        widthAt1x: 2016,
    },
};
function iD(e) {
    return { name: e, url: ik[e].url };
}
let iL = iD("tex_none"),
    iP = {
        [iy.N.NONE]: 0,
        [iy.N.CAP]: 7,
        [iy.N.ELVEN_HEADPIECE]: 1,
        [iy.N.HEADPHONES]: 2,
        [iy.N.TEDDY_BEANIE]: 13,
        [iy.N.PIERCINGS]: 4,
        [iy.N.HEADBAND]: 5,
        [iy.N.SUNGLASSES]: 6,
        [iy.N.BANANA_PEEL]: 3,
        [iy.N.LEAF]: 8,
        [iy.N.FIRE]: 9,
        [iy.N.HALO]: 10,
        [iy.N.BRAIN]: 11,
        [iy.N.TRAFFIC_CONE]: 12,
        [iy.N.CROWN]: 14,
    },
    iU = {
        [iM.Z.NONE]: 0,
        [iM.Z.ANGEL_WINGS]: 3,
        [iM.Z.STICKERS]: 1,
        [iM.Z.TOTE]: 2,
        [iM.Z.WIZARD_STAFF]: 8,
        [iM.Z.SKATEBOARD]: 4,
        [iM.Z.DRAGON_WINGS]: 5,
        [iM.Z.TAKE_OUT_BAG]: 6,
        [iM.Z.PIXEL_WRENCH]: 7,
        [iM.Z.MECH_WINGS]: 9,
        [iM.Z.SWORD]: 10,
        [iM.Z.DEVIANT_TAIL]: 11,
        [iM.Z.MAGICAL_STAFF]: 12,
        [iM.Z.BUTTERFLY_WINGS]: 13,
        [iM.Z.CAT_BACKPACK]: 14,
    },
    iG = {
        [iR.X.NONE]: iL,
        [iR.X.BLAZE]: iD("tex_aura_04_blaze"),
        [iR.X.BLOSSOM]: iD("tex_aura_01_blossom"),
        [iR.X.PRISM]: iD("tex_aura_02_prism"),
        [iR.X.SHOCK]: iD("tex_aura_03_shock"),
        [iR.X.FATED]: iD("tex_aura_05_fated"),
        [iR.X.LUSTER]: iD("tex_aura_06_luster"),
        [iR.X.BUBBLES]: iD("tex_aura_07_bubbly"),
        [iR.X.SPOOKY]: iD("tex_aura_08_spooky"),
        [iR.X.CURSED]: iD("tex_aura_09_cursed"),
        [iR.X.MAGNETIC]: iD("tex_aura_10_magnetic"),
        [iR.X.RADIOACTIVE]: iD("tex_aura_11_radioactive"),
        [iR.X.ELEMENTAL]: iD("tex_aura_12_elemental"),
        [iR.X.SHIMMER]: iD("tex_aura_13_shimmer"),
        [iR.X.WITCHY]: iD("tex_aura_14_witchy"),
    },
    iH = {
        [iO.R.ICY]: iD("tex_base_01_icy"),
        [iO.R.CRIMSON]: iD("tex_base_02_crimson"),
        [iO.R.CHROME]: iD("tex_base_03_chrome"),
        [iO.R.GALACTIC]: iD("tex_base_04_galactic"),
        [iO.R.FOREST]: iD("tex_base_05_forrest"),
        [iO.R.MIDNIGHT]: iD("tex_base_06_mighnight"),
        [iO.R.GLACIER]: iD("tex_base_07_glacier"),
        [iO.R.ORANGE]: iD("tex_base_08_orange"),
        [iO.R.PURPLE]: iD("tex_base_09_pink"),
        [iO.R.RED]: iD("tex_base_10_red"),
        [iO.R.COBALT]: iD("tex_base_11_cobalt"),
        [iO.R.X_RAY]: iD("tex_base_12_x-ray"),
        [iO.R.LIQUID]: iD("tex_base_13_liquid"),
        [iO.R.BUTTER]: iD("tex_base_14_butter"),
        [iO.R.IRIDESCENT]: iD("tex_base_15_iridescent"),
    },
    iF = {
        [e3.r.NONE]: null,
        [e3.r.BADDIE_DEFAULT]: { riveId: 1, texture: iD("tex_outfit_01_baddie") },
        [e3.r.TRAVELER_DEFAULT]: { riveId: 10, texture: iD("tex_outfit_10_traveler") },
        [e3.r.STREAMER_DEFAULT]: { riveId: 3, texture: iD("tex_outfit_03_streamer") },
        [e3.r.CAMPER_DEFAULT]: { riveId: 4, texture: iD("tex_outfit_04_camper") },
        [e3.r.ATHLETE_DEFAULT]: { riveId: 5, texture: iD("tex_outfit_05_athlete") },
        [e3.r.COWPOKE_DEFAULT]: { riveId: 6, texture: iD("tex_outfit_06_cowpoke") },
        [e3.r.GOTH_DEFAULT]: { riveId: 7, texture: iD("tex_outfit_07_goth") },
        [e3.r.ASTRONAUT_DEFAULT]: { riveId: 8, texture: iD("tex_outfit_08_astronaut") },
        [e3.r.JESTER_DEFAULT]: { riveId: 9, texture: iD("tex_outfit_09_jester") },
        [e3.r.TRASH_CAN_DEFAULT]: { riveId: 2, texture: iD("tex_outfit_02_trash") },
        [e3.r.MAGE_DEFAULT]: { riveId: 11, texture: iD("tex_outfit_11_mage") },
        [e3.r.MECH_DEFAULT]: { riveId: 12, texture: iD("tex_outfit_12_mech") },
        [e3.r.KNIGHT_DEFAULT]: { riveId: 13, texture: iD("tex_outfit_13_knight") },
        [e3.r.MAGICAL_DEFAULT]: { riveId: 14, texture: iD("tex_outfit_14_magical") },
        [e3.r.BADDIE_MONOCHROME]: { riveId: 1, texture: iD("tex_outfit_01_baddie_monochrome") },
        [e3.r.BADDIE_VIOLET]: { riveId: 1, texture: iD("tex_outfit_01_baddie_violet") },
        [e3.r.BADDIE_PASTEL]: { riveId: 1, texture: iD("tex_outfit_01_baddie_pastel") },
        [e3.r.BADDIE_SUNSET]: { riveId: 1, texture: iD("tex_outfit_01_baddie_sunset") },
        [e3.r.TRAVELER_HAZE]: { riveId: 10, texture: iD("tex_outfit_10_traveler_haze") },
        [e3.r.TRAVELER_MOSS]: { riveId: 10, texture: iD("tex_outfit_10_traveler_moss") },
        [e3.r.TRAVELER_CHRONO]: { riveId: 10, texture: iD("tex_outfit_10_traveler_chrono") },
        [e3.r.TRAVELER_UMBER]: { riveId: 10, texture: iD("tex_outfit_10_traveler_umber") },
        [e3.r.STREAMER_FLAMES]: { riveId: 3, texture: iD("tex_outfit_03_streamer_flames") },
        [e3.r.STREAMER_STRIPES]: { riveId: 3, texture: iD("tex_outfit_03_streamer_stripes") },
        [e3.r.STREAMER_SMILEY]: { riveId: 3, texture: iD("tex_outfit_03_streamer_smiley") },
        [e3.r.STREAMER_VINTAGE]: { riveId: 3, texture: iD("tex_outfit_03_streamer_vintage") },
        [e3.r.CAMPER_PLAID]: { riveId: 4, texture: iD("tex_outfit_04_camper_plaid") },
        [e3.r.CAMPER_SWAMP]: { riveId: 4, texture: iD("tex_outfit_04_camper_swamp") },
        [e3.r.CAMPER_GLAMP]: { riveId: 4, texture: iD("tex_outfit_04_camper_glamp") },
        [e3.r.CAMPER_AMBER]: { riveId: 4, texture: iD("tex_outfit_04_camper_amber") },
        [e3.r.ATHLETE_BLOCKED]: { riveId: 5, texture: iD("tex_outfit_05_athlete_blocked") },
        [e3.r.ATHLETE_FADED]: { riveId: 5, texture: iD("tex_outfit_05_athlete_faded") },
        [e3.r.ATHLETE_CHECKERED]: { riveId: 5, texture: iD("tex_outfit_05_athlete_checkered") },
        [e3.r.ATHLETE_LINED]: { riveId: 5, texture: iD("tex_outfit_05_athlete_lined") },
        [e3.r.COWPOKE_ONYX]: { riveId: 6, texture: iD("tex_outfit_06_cowpoke_onyx") },
        [e3.r.COWPOKE_STEEL]: { riveId: 6, texture: iD("tex_outfit_06_cowpoke_steel") },
        [e3.r.COWPOKE_DENIM]: { riveId: 6, texture: iD("tex_outfit_06_cowpoke_denim") },
        [e3.r.COWPOKE_BLUSH]: { riveId: 6, texture: iD("tex_outfit_06_cowpoke_blush") },
        [e3.r.GOTH_SIREN]: { riveId: 7, texture: iD("tex_outfit_07_goth_siren") },
        [e3.r.GOTH_SERPENT]: { riveId: 7, texture: iD("tex_outfit_07_goth_serpent") },
        [e3.r.GOTH_RAVEN]: { riveId: 7, texture: iD("tex_outfit_07_goth_raven") },
        [e3.r.GOTH_VAMP]: { riveId: 7, texture: iD("tex_outfit_07_goth_vamp") },
        [e3.r.ASTRONAUT_STARDUST]: { riveId: 8, texture: iD("tex_outfit_08_astronaut_stardust") },
        [e3.r.ASTRONAUT_MARTIAN]: { riveId: 8, texture: iD("tex_outfit_08_astronaut_martian") },
        [e3.r.ASTRONAUT_SOLAR]: { riveId: 8, texture: iD("tex_outfit_08_astronaut_solar") },
        [e3.r.ASTRONAUT_COSMIC]: { riveId: 8, texture: iD("tex_outfit_08_astronaut_cosmic") },
        [e3.r.JESTER_CONFETTI]: { riveId: 9, texture: iD("tex_outfit_09_jester_confetti") },
        [e3.r.JESTER_CARNIVAL]: { riveId: 9, texture: iD("tex_outfit_09_jester_carnival") },
        [e3.r.JESTER_SUNRISE]: { riveId: 9, texture: iD("tex_outfit_09_jester_sunrise") },
        [e3.r.JESTER_NIGHTFALL]: { riveId: 9, texture: iD("tex_outfit_09_jester_nightfall") },
        [e3.r.TRASH_CAN_BLACKOUT]: { riveId: 2, texture: iD("tex_outfit_02_trash_blackout") },
        [e3.r.TRASH_CAN_CAUTION]: { riveId: 2, texture: iD("tex_outfit_02_trash_caution") },
        [e3.r.TRASH_CAN_BUBBLEGUM]: { riveId: 2, texture: iD("tex_outfit_02_trash_bubblegum") },
        [e3.r.TRASH_CAN_TOXIC]: { riveId: 2, texture: iD("tex_outfit_02_trash_toxic") },
        [e3.r.MAGE_SHADOW]: { riveId: 11, texture: iD("tex_outfit_11_mage_shadow") },
        [e3.r.MAGE_DUSK]: { riveId: 11, texture: iD("tex_outfit_11_mage_dusk") },
        [e3.r.MAGE_WILDWOOD]: { riveId: 11, texture: iD("tex_outfit_11_mage_wildwood") },
        [e3.r.MAGE_WINTER]: { riveId: 11, texture: iD("tex_outfit_11_mage_winter") },
        [e3.r.MECH_AERO]: { riveId: 12, texture: iD("tex_outfit_12_mech_aero") },
        [e3.r.MECH_VIPER]: { riveId: 12, texture: iD("tex_outfit_12_mech_viper") },
        [e3.r.MECH_ULTRAVIOLET]: { riveId: 12, texture: iD("tex_outfit_12_mech_ultraviolet") },
        [e3.r.MECH_SANDSTORM]: { riveId: 12, texture: iD("tex_outfit_12_mech_sandstorm") },
        [e3.r.KNIGHT_IRON]: { riveId: 13, texture: iD("tex_outfit_13_knight_iron") },
        [e3.r.KNIGHT_RUST]: { riveId: 13, texture: iD("tex_outfit_13_knight_rust") },
        [e3.r.KNIGHT_PETAL]: { riveId: 13, texture: iD("tex_outfit_13_knight_petal") },
        [e3.r.KNIGHT_GLACIER]: { riveId: 13, texture: iD("tex_outfit_13_knight_glacier") },
        [e3.r.MAGICAL_SAPPHIRE]: { riveId: 14, texture: iD("tex_outfit_14_magical_sapphire") },
        [e3.r.MAGICAL_AMETHYST]: { riveId: 14, texture: iD("tex_outfit_14_magical_amethyst") },
        [e3.r.MAGICAL_FROST]: { riveId: 14, texture: iD("tex_outfit_14_magical_frost") },
        [e3.r.MAGICAL_CITRINE]: { riveId: 14, texture: iD("tex_outfit_14_magical_citrine") },
    };
var iK = (((r = {}).SLOT = "slot"), (r.TRAIT = "trait"), (r.LAYOUT = "layout"), (r.ALWAYS = "always"), r);
let iB = /^tex_(aura|base_\d+|outfit)_/,
    iV = /^tex_(headwear|shoes|wearable|face)_(\d+)_/,
    iz = /^tex_face_([a-z]+)_/i,
    iW = {
        tex_env_labNight_bg: ["Desktop"],
        tex_env_labNight_bg_mobileLandscape: ["MobileLandscape"],
        tex_env_labNight_bg_mobilePortrait: ["MobilePortrait"],
        tex_env_labNight_fgLeft: ["Desktop"],
        tex_env_labNight_fgRight: ["Desktop"],
        tex_env_labNight_mgBottom: ["Desktop"],
        tex_env_labNight_mgBottomMobile: ["MobilePortrait", "MobileLandscape"],
        tex_env_labNight_sky: ["Desktop"],
    },
    iY = {
        chill: 1,
        crybaby: 2,
        bored: 3,
        lockedin: 4,
        smitten: 5,
        confused: 6,
        anxious: 7,
        sparkle: 8,
        rage: 9,
        sus: 10,
        spellbound: 11,
        spooked: 12,
        freefall: 13,
        possessed: 14,
        awkward: 15,
    },
    iq = { columns: 1, rows: 1 },
    iX = { columns: 5, rows: 5 },
    iQ = { columns: 6, rows: 8 },
    iZ = {
        tex_aura_01_blossom: iX,
        tex_aura_02_prism: iX,
        tex_aura_03_shock: iX,
        tex_aura_04_blaze: iX,
        tex_aura_05_fated: iX,
        tex_aura_06_luster: iX,
        tex_aura_07_bubbly: iX,
        tex_aura_08_spooky: iX,
        tex_aura_09_cursed: iX,
        tex_aura_10_magnetic: iX,
        tex_aura_11_radioactive: iX,
        tex_aura_12_elemental: iX,
        tex_aura_13_shimmer: iX,
        tex_aura_14_witchy: iX,
        tex_wireframe_spritesheet: { columns: 12, rows: 6 },
        tex_wearable_10_sword_spritesheet: { columns: 5, rows: 4 },
        tex_wearable_11_deviantTail_smoke_active_spritesheet: iQ,
        tex_wearable_11_deviantTail_smoke_idle_spritesheet: iQ,
    },
    iJ = [1, 1.25, 1.5, 1.75, 2, 3],
    i$ = Math.min(...iJ),
    i0 = Math.max(...iJ);
function i1(e, t) {
    let { url: a, width: r, height: i, widthAt1x: s } = ik[e];
    if (null == s) return a;
    let n = (t * s) / r,
        c = t >= Math.round(r / s);
    if (n >= 1 || c) return a;
    let { columns: d, rows: l } = iZ[e] ?? iq,
        o = d * Math.round((r / d) * n),
        u = l * Math.round((i / l) * n);
    return `${a}?width=${o}&height=${u}`;
}
let i5 = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14"],
    i6 = i5.map((e) => `outfit${e}Image`),
    i2 = {
        [I.s9.IDLE]: 0,
        [I.s9.INTRODUCTION]: 1,
        [I.s9.FACE]: 2,
        [I.s9.OUTFIT]: 3,
        [I.s9.HEADWEAR]: 4,
        [I.s9.SHOES]: 5,
        [I.s9.WEARABLE]: 6,
        [I.s9.AURA]: 7,
        [I.s9.ASSEMBLED]: 8,
        [I.s9.FINALIZE]: 8,
        [I.s9.SUMMARY]: 8,
    },
    i3 = {
        Desktop: {
            gradientTopOpacity: 0,
            gradientTopPosition: 0,
            gradientBottomOpacity: 0,
            gradientBottomPosition: 0,
            gradientLeftOpacity: 100,
            gradientLeftPosition: 100,
            gradientRightOpacity: 0,
            gradientRightPosition: 0,
        },
        MobilePortrait: {
            gradientTopOpacity: 100,
            gradientTopPosition: 45,
            gradientBottomOpacity: 100,
            gradientBottomPosition: 75,
            gradientLeftOpacity: 0,
            gradientLeftPosition: 0,
            gradientRightOpacity: 0,
            gradientRightPosition: 0,
        },
        MobileLandscape: {
            gradientTopOpacity: 100,
            gradientTopPosition: 50,
            gradientBottomOpacity: 100,
            gradientBottomPosition: 30,
            gradientLeftOpacity: 0,
            gradientLeftPosition: 0,
            gradientRightOpacity: 100,
            gradientRightPosition: 100,
        },
    },
    i4 = { ...i3.MobilePortrait, gradientTopPosition: 55, gradientBottomPosition: 90 };
var i8 = a(574381);
let i9 = new Set([1]),
    i7 = Object.keys(ik).map((e) => ({
        name: e,
        role: (function (e) {
            if (iB.test(e)) return { type: "slot" };
            let t = iW[e];
            if (null != t) return { type: "layout", layouts: t };
            let a = iV.exec(e);
            if (null != a) return { type: "trait", path: `${a[1]}ID`, riveId: Number(a[2]) };
            let r = iz.exec(e),
                i = null != r ? iY[r[1].toLowerCase()] : void 0;
            return null != i ? { type: "trait", path: "faceID", riveId: i } : { type: "always" };
        })(e),
        swapKey: (0, i8.un)() ? `${e}-${ik[e].riveId}` : e,
    }));
function se(e) {
    let { faceID: t, headwearID: a, shoesID: r, wearableID: i, chapterID: s, device: n } = e;
    return f.useMemo(() => {
        var e;
        let c;
        return (
            (e = { faceID: t, headwearID: a, shoesID: r, wearableID: i }),
            (c = new Set()),
            i7.forEach((t) => {
                let { name: a, role: r } = t;
                switch (r.type) {
                    case iK.SLOT:
                        break;
                    case iK.TRAIT:
                        e[r.path] === r.riveId && c.add(a);
                        break;
                    case iK.LAYOUT:
                        r.layouts.includes(n) && c.add(a);
                        break;
                    case iK.ALWAYS:
                        ("tex_wireframe_spritesheet" !== a || i9.has(s)) && c.add(a);
                }
            }),
            c
        );
    }, [t, a, r, i, s, n]);
}
var st = a(971940);
async function sa(e) {
    try {
        let t = await fetch(e);
        if (!t.ok) return null;
        return await (0, st.decodeImage)(new Uint8Array(await t.arrayBuffer()));
    } catch {
        return null;
    }
}
var sr = a(168862);
function si(e) {
    let t,
        a,
        { stage: r, isHidden: s } = e,
        n = (0, p.bG)([iC.A], () => {
            let e = iC.A.windowSize();
            return (function (e, t) {
                let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (a) return i$;
                let r = Math.max(e / 945, t / 532) * (0, eW.A)();
                return iJ.find((e) => e >= r) ?? i0;
            })(e.width, e.height);
        }),
        [c, d] = f.useState(n);
    n > c && d(n);
    let l =
            ((t = (0, p.bG)([o.A], () => o.A.selectedCharacterTraits)),
            (a = eR((e) => e.hoveredOption)),
            f.useMemo(() => (null != a ? { ...t, [a.trait]: a.optionId } : t), [t, a])),
        u = (0, p.bG)([Q.Ay], () => Q.Ay.useReducedMotion),
        h = f.useMemo(
            () =>
                (function (e) {
                    let { stage: t, isHidden: a, traits: r, layout: i, mobileLift: s = 0, textureScale: n } = e,
                        { base: c, shoes: d, outfit: l, face: o, hat: u, wearable: h, aura: f } = (0, K.XI)(r),
                        b = iF[l],
                        _ = {};
                    return (
                        i5.forEach((e) => {
                            let t = Number(e) === b?.riveId ? b.texture : iL;
                            _[`outfit${e}Image`] = i1(t.name, n);
                        }),
                        {
                            device: i,
                            mobileLift: s,
                            chapterID: a && t === I.s9.FACE ? i2[I.s9.IDLE] : i2[t],
                            faceID: o,
                            shoesID: d,
                            headwearID: iP[u],
                            wearableID: iU[h],
                            outfitID: b?.riveId ?? 0,
                            auraImage: i1(iG[f].name, n),
                            baseColorImage: i1(iH[c].name, n),
                            ...("MobilePortrait" === i && t === I.s9.INTRODUCTION ? i4 : i3[i]),
                            ..._,
                        }
                    );
                })({ stage: r, isHidden: s, traits: l, layout: "Desktop", textureScale: c }),
            [r, s, l, c],
        ),
        [b, m] = f.useState(null),
        x = (function (e) {
            let { visibleDataBinding: t, requestedDataBinding: a, textureScale: r } = e,
                i = (function (e) {
                    let { visibleTextureNames: t, requestedTextureNames: a } = e,
                        [r, i] = f.useState(t),
                        [s, n] = f.useState(t);
                    if (t !== s) {
                        n(t);
                        let e = new Set(r);
                        (t.forEach((t) => e.add(t)), i(e));
                    }
                    return (
                        f.useEffect(() => {
                            let e = setTimeout(() => i(t), 600);
                            return () => clearTimeout(e);
                        }, [t]),
                        f.useMemo(() => new Set([...r, ...a]), [r, a])
                    );
                })({ visibleTextureNames: se(t), requestedTextureNames: se(a) });
            return f.useMemo(() => {
                let e;
                return (
                    (e = {}),
                    i7.forEach((t) => {
                        let { name: a, swapKey: s } = t,
                            n = i.has(a) ? i1(a, r) : iL.url;
                        e[s] = { source: { uri: n } };
                    }),
                    e
                );
            }, [i, r]);
        })({ visibleDataBinding: b ?? h, requestedDataBinding: h, textureScale: c }),
        {
            assetLoader: g,
            onLoad: A,
            textureManager: v,
        } = (function () {
            let e = f.useRef(new Map()),
                [t, a] = f.useState(null),
                r = f.useCallback((t) => !!t.isImage && t.name in ik && (e.current.set(t.name, t), !0), []);
            return {
                assetLoader: r,
                onLoad: f.useCallback(() => {
                    (a(e.current), (e.current = new Map()));
                }, []),
                textureManager: f.useMemo(
                    () =>
                        null == t
                            ? null
                            : {
                                  load: sa,
                                  swap: (e) => e.forEach((e, a) => t.get(a)?.setRenderImage(e)),
                                  release: (e) => e.forEach((e) => e.unref()),
                              },
                    [t],
                ),
            };
        })(),
        w = f.useRef(null),
        E = f.useRef(s);
    f.useEffect(() => {
        ((E.current = s), s ? w.current?.pause() : w.current?.play());
    }, [s]);
    let j = f.useCallback(() => {
            (A(), E.current && w.current?.pause());
        }, [A]),
        S = (function (e) {
            let { textureManager: t, referencedAssets: a, initialReferencedAssets: r } = e,
                i = f.useRef(new Map()),
                [s, n] = f.useState(r);
            return (
                f.useEffect(() => {
                    i.current = new Map(
                        Object.entries(r ?? {}).map((e) => {
                            let [t, { source: a }] = e;
                            return [t, a.uri];
                        }),
                    );
                }, [t, r]),
                f.useEffect(() => {
                    if (null == t) return;
                    let e = !1;
                    return (
                        (async () => {
                            (await (async function (e) {
                                let { textureManager: t, shownUrls: a, referencedAssets: r, isStale: i } = e,
                                    s = new Map();
                                if (
                                    (Object.entries(r).forEach((e) => {
                                        let [t, { source: r }] = e;
                                        a.get(t) !== r.uri && s.set(t, r.uri);
                                    }),
                                    0 === s.size)
                                )
                                    return;
                                let n = new Map();
                                if (
                                    (await Promise.all(
                                        Array.from(new Set(s.values()), async (e) => {
                                            let a = await t.load(e);
                                            null != a && n.set(e, a);
                                        }),
                                    ),
                                    !i())
                                ) {
                                    let e = new Map();
                                    (s.forEach((t, r) => {
                                        let i = n.get(t);
                                        null != i && (e.set(r, i), a.set(r, t));
                                    }),
                                        t.swap(e));
                                }
                                t.release(Array.from(n.values()));
                            })({ textureManager: t, shownUrls: i.current, referencedAssets: a, isStale: () => e }),
                                e || n(a));
                        })(),
                        () => {
                            e = !0;
                        }
                    );
                }, [t, a]),
                s === a
            );
        })({ textureManager: v, referencedAssets: x }),
        {
            dataBinding: N,
            isOutfitPreloaded: C,
            onDataBindingChange: T,
        } = (function (e) {
            var t;
            let { visibleDataBinding: a, requestedDataBinding: r } = e,
                [i, s] = f.useState({}),
                n = (t = r.outfitID) > 0 ? i6[t - 1] : null,
                c = null != n ? r[n] : void 0,
                d = null == n || a?.[n] === c || i[n] === c,
                l = a ?? r;
            return {
                dataBinding: f.useMemo(() => (null == n || l[n] === c ? l : { ...l, [n]: c }), [l, n, c]),
                isOutfitPreloaded: d,
                onDataBindingChange: f.useMemo(() => {
                    let e = {};
                    return (
                        i6.forEach((t) => {
                            e[t] = (e) => {
                                s((a) => (a[t] === e ? a : { ...a, [t]: e }));
                            };
                        }),
                        e
                    );
                }, []),
            };
        })({ visibleDataBinding: b, requestedDataBinding: h });
    S && C && b !== h && m(h);
    let R = f.useMemo(() => ({ ...N, reducedMotion: u }), [N, u]);
    return (0, i.jsx)("div", {
        role: "img",
        "aria-label": (0, iT.O)(l),
        className: _()(sr.dw, { [sr.RK]: null != b }),
        children: (0, i.jsx)(iN.W, {
            artboard: "AB_Master",
            stateMachine: "SM_Master",
            fit: "layout",
            alignment: "center",
            ref: w,
            assetLoader: g,
            onLoad: j,
            listenOnDocumentBody: !u,
            withReducedMotion: "play",
            dataBinding: R,
            onDataBindingChange: T,
            className: sr.lW,
        }),
    });
}
var ss = a(517782);
function sn() {
    let e = f.useId(),
        t = f.useRef(null);
    return (f.useEffect(() => (m.O.moveTo?.(e, t.current), () => m.O.remove?.(e)), [e]), (0, i.jsx)(x.A, { ref: t }));
}
function sc(e) {
    let t,
        { didPlayerShareDataWithDiscord: a, onClose: r } = e;
    ((0, p.bG)([o.A], () => o.A.fetchState),
        (t = (0, p.yK)([o.A], () => {
            let { stats: e, globalStats: t } = o.A,
                a = t?.games;
            if ((0, E.IH)(e) || null == a)
                return (
                    e?.games?.games.map((e) => {
                        let { game: t } = e;
                        return t.id;
                    }) ?? []
                );
            let r = [];
            return (
                W.Jb.forEach((e) => {
                    let { list: t } = e,
                        i = a[t][0];
                    null != i && r.push(i.id);
                }),
                r
            );
        })),
        f.useEffect(() => {
            let { fetchState: e } = o.A;
            (e === o.T.INIT || e === o.T.ERROR) && (0, l.nX)();
        }, []),
        f.useEffect(() => {
            (0, z.E)(t);
        }, [t]));
    let s = a ? I.Np.SHARED_DATA : I.Np.NO_SHARED_DATA,
        [n, c] = (function (e) {
            let [t, a] = f.useState(() =>
                (function (e) {
                    let { character: t, progress: a, stats: r } = o.A,
                        i = null != t ? I.s9.SUMMARY : a?.stage;
                    return T({ flow: e, stats: r }).find((e) => (0, I.UG)(e).characterStage === i) ?? I.gr.HOME;
                })(e),
            );
            return (
                f.useEffect(() => {
                    let { characterStage: e } = (0, I.UG)(t);
                    (0, l.l4)(e);
                }, [t]),
                [t, a]
            );
        })(s);
    (f.useEffect(() => {
        (u.A.setStepName(n), (0, h.if)(n));
    }, [n]),
        (0, V.l0)(() => {
            (0, h.i)(u.A.getStepName());
        }));
    let { characterStage: d, statsScreen: b } = (0, I.UG)(n),
        m = n === I.gr.HOME || null != b,
        j = m || n === I.gr.INTRODUCTION,
        S = (0, p.bG)([o.A], () => (o.A.fetchState === o.T.SUCCESS ? o.A.stats : void 0)),
        N = (0, p.bG)([o.A], () => o.A.character),
        C = f.useMemo(
            () =>
                (function (e, t) {
                    switch (e) {
                        case I.gr.SUMMARY:
                        case I.gr.SHARE:
                            let a = (0, v.o)(t),
                                { primaryBackgroundColor: r, shadowColor: i } = (0, v.j)(a);
                            return {
                                ...tl,
                                "--custom-checkpoint-primary": r,
                                "--custom-checkpoint-button-border": r,
                                "--custom-checkpoint-button-shadow": i,
                                "--custom-checkpoint-background-gradient-start": r,
                            };
                        default:
                            return tl;
                    }
                })(n, N),
            [n, N],
        ),
        G = (function () {
            let { isMuted: e, volume: t } = (0, p.cf)([o.A], () => ({ isMuted: o.A.isMuted, volume: o.A.volume })),
                a = f.useRef(new Map()),
                r = f.useRef(null),
                i = f.useCallback(() => {
                    (r.current?.(), a.current.forEach((e) => e.pause()));
                }, []);
            return (
                f.useEffect(() => ((a.current = new Map(L.map((e) => [e, new Audio(e)]))), i), [i]),
                f.useEffect(() => {
                    a.current.forEach((a) => {
                        ((a.muted = e), (a.volume = t));
                    });
                }, [e, t]),
                f.useCallback(
                    (e) => {
                        var t;
                        let s;
                        (i(),
                            (t = (e) => {
                                let t = a.current.get(e);
                                null == t || o.A.isMuted || 0 === o.A.volume || ((t.currentTime = 0), t.play());
                            }),
                            (s = []),
                            e.forEach((e) => {
                                let { source: a, delayMs: r } = e;
                                r > 0 ? s.push(setTimeout(() => t(a), r)) : t(a);
                            }),
                            (r.current = () => s.forEach((e) => clearTimeout(e))));
                    },
                    [i],
                )
            );
        })(),
        H = B(),
        F = (0, w.k0)(n, H),
        K = f.useId(),
        Y = null != F ? K : void 0,
        X = f.useCallback(
            (e) => {
                let t = (function (e) {
                    let { previousRoute: t, route: a } = e;
                    if (t === I.gr.SIDEKICK_LEAVE && a === I.gr.SIDEKICK) return null;
                    if (t === I.gr.FINALIZE_CHARACTER && a === I.gr.SUMMARY) return [];
                    let r = [];
                    return (
                        a === I.gr.INTRODUCTION
                            ? (r.push({ source: O, delayMs: 0 }),
                              r.push({ source: D, delayMs: 2500 }),
                              r.push({ source: y, delayMs: 2800 }))
                            : P(t) && U(a)
                              ? r.push({ source: M, delayMs: 0 })
                              : U(t) && P(a) && (r.push({ source: k, delayMs: 0 }), r.push({ source: D, delayMs: 0 })),
                        r
                    );
                })({ previousRoute: n, route: e });
                (null != t && G(t), c(e));
            },
            [n, G, c],
        ),
        Q = f.useCallback(
            (e) => {
                let t = R({ flow: s, stats: S, currentRoute: n, direction: e });
                if (null == t) {
                    1 === e && r();
                    return;
                }
                X(t);
            },
            [n, s, X, r, S],
        ),
        J = f.useCallback(() => Q(-1), [Q]),
        ee = f.useCallback(() => Q(1), [Q]),
        ea = f.useCallback(
            () =>
                X(R({ ...{ flow: s, stats: S }, currentRoute: I.gr.INTRODUCTION, direction: 1 }) ?? I.gr.INTRODUCTION),
            [s, X, S],
        ),
        er = f.useCallback(
            (e) => {
                if (!o.A.isSaving) {
                    if (null != F) return void q(F);
                    X(e);
                }
            },
            [F, X],
        );
    return (0, i.jsx)(g.N, {
        theme: Z.NJ.DARK,
        children: (e) =>
            (0, i.jsxs)("div", {
                className: _()(e, ss.kL),
                style: C,
                role: "dialog",
                "aria-modal": !0,
                "aria-label": eg.intl.string(tI.default["CdU/PF"]),
                children: [
                    (0, i.jsx)(sn, {}),
                    (0, i.jsx)($, { isVisible: m }),
                    (0, i.jsxs)("div", {
                        className: ss.$s,
                        children: [
                            (0, i.jsx)(tL, {}),
                            (0, i.jsx)(et, {
                                size: "sm",
                                "aria-label": eg.intl.string(eg.t.cpT0Cq),
                                onClick: r,
                                children: (0, i.jsx)(A.XSmallIcon, { size: "xs", color: "currentColor" }),
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: _()(ss.qd, { [ss.R]: m }),
                        children: (0, i.jsx)(si, { stage: d, isHidden: m }),
                    }),
                    (0, I.Rq)(n) && (0, i.jsx)("div", { className: ss.qd, children: (0, i.jsx)(tT, { route: n }) }),
                    j &&
                        (0, i.jsx)("div", {
                            className: ss.qd,
                            children: (0, i.jsx)(iv, { route: n, onNextStep: ee, onPreviousStep: J }),
                        }),
                    (0, i.jsx)(t4, {
                        activeRoute: n,
                        blockedTrait: F,
                        blockedTraitDescriptionId: Y,
                        onBack: J,
                        onNext: ee,
                        onReplay: ea,
                    }),
                    (0, i.jsx)(ed, { activeRoute: n }),
                    (0, i.jsx)(iS, {
                        flow: s,
                        stats: S,
                        activeRoute: n,
                        isRouteBlocked: null != F,
                        blockedTraitDescriptionId: Y,
                        onRouteClick: er,
                    }),
                    null != F && (0, i.jsx)(x.A, { id: K, children: (0, w.Cz)(F) }),
                ],
            }),
    });
}
function sd() {
    if (d._.hasSubscribers(tY.jej.MODAL_CLOSE)) return (d._.dispatch(tY.jej.MODAL_CLOSE), !0);
    let e = (0, c.mU)(document.activeElement ?? document.body);
    return !!e?.hasSubscribers(tY.jej.POPOUT_CLOSE) && (e.dispatch(tY.jej.POPOUT_CLOSE), !0);
}
async function sl(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        a = arguments.length > 2 ? arguments[2] : void 0,
        r = await (0, l.nX)(a);
    r === o.T.ERROR
        ? (0, s.P0)({ text: eg.intl.string(eg.t.fEptJP), variant: "critical" })
        : r !== o.T.FETCHING &&
          (u.A.initialize(t),
          (0, h.lw)(e),
          (0, n.B8)(
              (e) => {
                  let { closeLayer: a } = e;
                  return (0, i.jsx)(sc, { didPlayerShareDataWithDiscord: t, onClose: a });
              },
              { onEscape: sd },
          ));
}
