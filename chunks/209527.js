a.d(t, { D: () => sm });
var r,
    s = a(477900),
    i = a(858899),
    c = a(361158),
    n = a(174459),
    d = a(625494),
    l = a(796104),
    o = a(719718),
    u = a(582128),
    h = a(503698),
    f = a.n(h);
let b =
    "https://cdn.discordapp.com/assets/content/ca0ec81d050b27537618a0563ff926476bc53f331bae7af46595969995dea5fb.mp3";
var _ = a(17928),
    x = a(43990),
    p = a(789645),
    m = a(627369),
    g = a(503235),
    A = a(201779),
    v = a(407905);
let w = [
        A.gr.HOME,
        A.gr.INTRODUCTION,
        A.gr.VOICE_GENERAL,
        A.gr.VOICE_FACE,
        A.gr.MESSAGES_GENERAL,
        A.gr.MESSAGES_OUTFIT,
        A.gr.SERVERS_GENERAL,
        A.gr.SERVERS_HEADWEAR,
        A.gr.EMOJI_GENERAL,
        A.gr.EMOJI_SHOES,
        A.gr.GAMES_GENERAL,
        A.gr.GAMES_WEARABLE,
        A.gr.GAME_TIME_GENERAL,
        A.gr.GAME_TIME_AURA,
        A.gr.FINALIZE_CHARACTER,
        A.gr.SUMMARY,
        A.gr.SHARE,
    ],
    I = [
        A.gr.HOME,
        A.gr.INTRODUCTION,
        A.gr.VOICE_INTRO,
        A.gr.VOICE_STATS,
        A.gr.VOICE_FACE,
        A.gr.MESSAGES_INTRO,
        A.gr.MESSAGES_STATS,
        A.gr.MESSAGES_OUTFIT,
        A.gr.SERVERS_INTRO,
        A.gr.SERVERS_STATS,
        A.gr.TOP_SERVER_STATS,
        A.gr.SERVERS_HEADWEAR,
        A.gr.EMOJI_INTRO,
        A.gr.EMOJI_STATS,
        A.gr.EMOJI_SHOES,
        A.gr.GAMES_INTRO,
        A.gr.GAMES_STATS,
        A.gr.GAMES_WEARABLE,
        A.gr.GAME_TIME_STATS,
        A.gr.GAME_TIME_AURA,
        A.gr.SQUAD_TRANSITION,
        A.gr.SQUAD,
        A.gr.SIDEKICK,
        A.gr.SIDEKICK_LEAVE,
        A.gr.FINALIZE_CHARACTER,
        A.gr.SUMMARY,
        A.gr.SHARE,
    ],
    E = {
        [A.gr.VOICE_INTRO]: (e) => !(0, v.Kr)(e),
        [A.gr.MESSAGES_INTRO]: (e) => !(0, v.nb)(e),
        [A.gr.SERVERS_INTRO]: (e) => !(0, v.jr)(e),
        [A.gr.EMOJI_INTRO]: (e) => !(0, v.y7)(e),
        [A.gr.GAMES_INTRO]: (e) => !(0, v.IH)(e),
    },
    j = {
        [A.gr.TOP_SERVER_STATS]: v.jr,
        [A.gr.SQUAD_TRANSITION]: v.$p,
        [A.gr.SQUAD]: v.$p,
        [A.gr.SIDEKICK]: v.oL,
        [A.gr.SIDEKICK_LEAVE]: v.oL,
    };
function N(e) {
    let { flow: t, stats: a } = e;
    return (t === A.Np.SHARED_DATA ? I : w).filter((e) => {
        let t = E[e];
        if (null != t) return null != a && t(a);
        let r = j[e];
        return null == r || void 0 === a || r(a);
    });
}
var S = a(127639),
    T = a(287809),
    R = a(474090),
    C = a(817379);
function O() {
    let {
            selectedCharacterTraits: e,
            savedSelection: t,
            stats: a,
        } = (0, _.cf)([o.A], () => ({
            selectedCharacterTraits: o.A.selectedCharacterTraits,
            savedSelection: o.A.character,
            stats: o.A.stats,
        })),
        r = (0, _.bG)([T.default], () => (0, R.ki)(T.default.getCurrentUser())),
        s = u.useMemo(
            () =>
                Object.values(S.V).filter((s) => {
                    let i = e[s];
                    return null != i && (0, C.tS)(s, i, { stats: a, hasNitro: r, savedCharacter: t });
                }),
            [r, t, e, a],
        );
    return { selectedCharacterTraits: e, blockedTraits: s };
}
var M = a(920495);
function y(e) {
    let t = (0, _.bG)([o.A], () => o.A.isMuted),
        a = u.useRef(null);
    return (
        u.useEffect(() => {
            let t = new Audio(e);
            return ((a.current = t), () => t.pause());
        }, [e]),
        u.useCallback(() => {
            let e = a.current;
            t || null == e || ((e.currentTime = 0), e.play());
        }, [t])
    );
}
var L = a(299619),
    D = a(775602),
    k = a(818348),
    P = a(11435);
function G(e) {
    let { isVisible: t } = e,
        a = u.useRef(null),
        r = (0, _.bG)([D.Ay], () => D.Ay.useReducedMotion),
        i = t && !r;
    return (
        u.useEffect(() => {
            let e = a.current;
            null != e && (i ? e.play().catch(k.tE) : e.pause());
        }, [i]),
        u.useEffect(() => {
            r && null != a.current && (a.current.currentTime = 1);
        }, [r]),
        (0, s.jsxs)("div", {
            className: f()(P.Tp, { [P.R]: !t }),
            "aria-hidden": !0,
            children: [
                (0, s.jsx)(L.A, {
                    ref: a,
                    className: P.Ki,
                    src: "https://cdn.discordapp.com/assets/content/a7a4300630ed2733eca4a8bb584c3086a66063d78e2f829faf465d96ff388a93.webm",
                    loop: !0,
                    muted: !0,
                    playsInline: !0,
                }),
                (0, s.jsx)("div", { className: P.D7 }),
            ],
        })
    );
}
var U = a(885619);
function H(e) {
    let { "aria-label": t, "aria-pressed": a, children: r, onClick: i, size: c, className: n, disabled: d = !1 } = e;
    return (0, s.jsx)("button", {
        type: "button",
        className: f()(U.button, "custom" !== c && U[c], n),
        onClick: i,
        "aria-label": t,
        "aria-pressed": a,
        disabled: d,
        children: r,
    });
}
function F(e) {
    let { className: t, ...a } = e;
    return (0, s.jsx)(H, { ...a, className: f()(U.shadow, t) });
}
function K(e) {
    let { animatedSrc: t, staticSrc: a, className: r } = e,
        i = (0, _.bG)([D.Ay], () => D.Ay.useReducedMotion);
    return (0, s.jsx)("img", { src: i ? a : t, alt: "", className: r });
}
var B = a(740281),
    V = a(766089),
    z = a(767988);
let W = { animatedSrc: V.A, staticSrc: z.A };
function Y(e) {
    let { activeRoute: t } = e,
        { animatedSrc: a, staticSrc: r } = (0, _.cf)(
            [o.A],
            () => {
                switch (t) {
                    case A.gr.SUMMARY:
                    case A.gr.SHARE:
                        let e = (0, m.o)(o.A.character),
                            { clydeLogoImage: a, clydeLogoStaticImage: r } = (0, m.j)(e);
                        return { animatedSrc: a, staticSrc: r };
                    default:
                        return W;
                }
            },
            [t],
        );
    return (0, s.jsx)(K, { animatedSrc: a, staticSrc: r, className: B.w });
}
var Z = a(756408),
    q = a(834730),
    J = a(504736);
function X(e) {
    let { children: t, className: a, ...r } = e;
    return (0, s.jsx)(q.E, { ...r, className: f()(J.Q, a), color: "none", children: t });
}
var Q = a(271427);
function $(e) {
    let { children: t, className: a, style: r } = e;
    return (0, s.jsx)(X, { tag: "span", variant: "mono-md/bold", className: f()(Q.T, a), style: r, children: t });
}
var ee = a(842089),
    et = a(105292),
    ea = a(383931);
function er(e) {
    let { percent: t } = e;
    return (0, s.jsx)($, { className: ea.t, children: et.intl.formatToPlainString(ee.default.fOGKA4, { percent: t }) });
}
var es = a(646692);
function ei(e) {
    let { icon: t, value: a, topPercent: r, children: i } = e;
    return (0, s.jsxs)("div", {
        className: es.dJ,
        children: [
            null != r && (0, s.jsx)(er, { percent: r }),
            (0, s.jsxs)("div", {
                className: es.p,
                children: [
                    (0, s.jsx)(X, {
                        variant: "heading-xxl/medium",
                        className: es.Uq,
                        children: a.toLocaleString(et.intl.currentLocale),
                    }),
                    (0, s.jsxs)("div", {
                        className: es.Pf,
                        children: [
                            (0, s.jsx)(t, { size: "xs", color: "currentColor" }),
                            (0, s.jsx)(X, { variant: "heading-sm/semibold", className: es.QK, children: i }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var ec = a(303453);
function en(e) {
    let { earnedCount: t, totalCount: a } = e;
    return (0, s.jsx)(q.E, {
        variant: "text-md/medium",
        color: "text-subtle",
        children: et.intl.format(ee.default.Vfq58K, {
            earnedCount: t,
            totalCount: a,
            countHook: (e, t) =>
                (0, s.jsx)(X, { tag: "span", variant: "mono-md/bold", className: ec.U, children: e }, t),
        }),
    });
}
var ed = a(218546),
    el = a(309913),
    eo = a(647093);
let eu = `linear-gradient(to right, ${el.uz.join(", ")})`;
function eh(e) {
    let { rarity: t } = e,
        a = u.useMemo(() => ({ "--custom-checkpoint-rarity-background": t === ed.K.NITRO ? eu : el.Zy[t] }), [t]);
    return (0, s.jsx)($, { className: eo.q, style: a, children: et.intl.string(el.iG[t]) });
}
var ef = a(829870);
function eb(e) {
    let { asset: t, hideRarity: a } = e,
        r = (0, g.hC)(t);
    return (0, s.jsxs)("div", {
        className: ef.z,
        children: [
            (0, s.jsxs)("div", {
                className: ef.D,
                children: [
                    (0, s.jsx)(q.E, {
                        tag: "div",
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: t.getName(),
                    }),
                    !a && null != t.rarity && (0, s.jsx)(eh, { rarity: t.rarity }),
                ],
            }),
            null != r && (0, s.jsx)(q.E, { variant: "text-md/medium", color: "text-subtle", children: r }),
        ],
    });
}
var e_ = a(661531),
    ex = a(403581),
    ep = a(140735),
    em = a(835517),
    eg = a(32623),
    eA = a(559265);
function ev(e) {
    let { rarity: t } = e,
        a = u.useMemo(() => ({ "--custom-checkpoint-rarity-color": el.Zy[t] }), [t]);
    return t === ed.K.NITRO
        ? (0, s.jsx)(ex.t, { size: "custom", color: e_.A.colors.ICON_SUBTLE, className: eA.d7 })
        : (0, s.jsx)("span", { className: eA.oG, style: a });
}
function ew(e) {
    let { traitOption: t, groupName: a, isSelected: r, hideRarity: i, onSelectOption: c, disabled: n = !1 } = e,
        { trait: d, optionId: l, rarity: o, asset: h, status: b } = t,
        _ = b === eg.eP.LOCKED,
        x = u.useMemo(() => {
            if (null == h) return null;
            let e = Math.round(el.VG * (0, em.A)());
            return `${h}?width=${e}&height=${e}`;
        }, [h]);
    return (0, s.jsxs)("label", {
        className: f()(eA.uK, { [eA.wH]: r, [eA.dv]: (0, g.C5)(t), [eA.xt]: _, [eA.Ns]: b === eg.eP.NITRO_LOCKED }),
        children: [
            (0, s.jsx)(ep.A, {
                children: (0, s.jsx)("input", {
                    type: "radio",
                    name: a,
                    checked: r,
                    disabled: n,
                    onChange: () => c(d, l),
                    "aria-label": (0, g.v2)(t, i),
                }),
            }),
            null != x && (0, s.jsx)("img", { src: x, alt: "", draggable: !1, className: eA.Sl }),
            !i && null != o && (0, s.jsx)(ev, { rarity: o }),
        ],
    });
}
var eI = a(509063);
function eE(e) {
    let {
            customizationOption: t,
            traitOptions: a,
            selectedOption: r,
            onSelectOption: i,
            disabled: c = !1,
            children: n,
        } = e,
        d = u.useId(),
        l = !(0, g.Ux)(t);
    return (0, s.jsxs)("div", {
        className: eI.Nz,
        children: [
            (0, s.jsxs)("div", {
                className: eI.fF,
                children: [
                    n,
                    (0, s.jsx)("div", {
                        role: "radiogroup",
                        "aria-label": (0, g.cq)(t),
                        className: eI.Vg,
                        children: a.map((e) =>
                            (0, s.jsx)(
                                ew,
                                {
                                    traitOption: e,
                                    groupName: d,
                                    isSelected: e.optionId === r?.optionId,
                                    hideRarity: l,
                                    onSelectOption: i,
                                    disabled: c,
                                },
                                e.optionId,
                            ),
                        ),
                    }),
                ],
            }),
            null != r && (0, s.jsx)(eb, { asset: r, hideRarity: l }),
        ],
    });
}
a(321073);
var ej = a(51104),
    eN = a(67915);
function eS(e, t) {
    return e === g.v7.OUTFIT ? (null != t ? (0, C.FA)(t) : void 0) : t;
}
function eT(e) {
    let { customizationOption: t } = e,
        {
            optionIds: a,
            selectedOptionId: r,
            savedOptionId: s,
            onSelectOption: i,
        } = (function (e) {
            let { customizationOption: t, onSelectOption: a } = e,
                r = g.hw[t],
                { selectedOptionId: s, savedOptionId: i } = (0, _.cf)([o.A], () => ({
                    selectedOptionId: eS(t, o.A.selectedCharacterTraits[r]),
                    savedOptionId: eS(t, o.A.character?.[r]),
                })),
                c = u.useCallback(
                    (e, t) => {
                        t !== s && a(e, t);
                    },
                    [a, s],
                );
            return {
                optionIds: (function (e, t) {
                    switch (e) {
                        case g.v7.OUTFIT:
                            return C.ps;
                        case g.v7.OUTFIT_COLOR:
                            return (0, C.wD)(t ?? eN.r.NONE);
                        default:
                            return;
                    }
                })(t, s),
                selectedOptionId: s,
                savedOptionId: i,
                onSelectOption: c,
            };
        })({ customizationOption: t, onSelectOption: l.IB }),
        {
            traitOptions: c,
            availableTraitOptions: n,
            totalCount: d,
            earnedCount: h,
        } = (function (e) {
            let { customizationOption: t, savedOptionId: a, rarityOrder: r, optionIds: s } = e,
                i = (0, _.bG)([o.A], () => o.A.stats),
                c = (0, _.bG)([T.default], () => (0, R.ki)(T.default.getCurrentUser())),
                n = u.useMemo(() => (0, g.p8)(r), [r]);
            return u.useMemo(() => {
                let e = g.hw[t],
                    r = t === g.v7.OUTFIT_COLOR ? ej.x : ej.$[e],
                    d = (0, C.mf)(e, i),
                    l = [],
                    o = 0,
                    u = 0;
                for (let t of s ?? C.Rk[e]) {
                    let s = (0, C.$C)(e, t),
                        i = eg.eP.UNLOCKED;
                    (null == s || d.has(s) || a === t
                        ? s !== ed.K.NITRO || c || (i = eg.eP.NITRO_LOCKED)
                        : (i = eg.eP.LOCKED),
                        null != s && o++,
                        null != s && i === eg.eP.UNLOCKED && u++,
                        l.push({
                            trait: e,
                            optionId: t,
                            asset: C.qM[e][t]?.thumbnail,
                            rarity: s,
                            status: i,
                            getName: () => {
                                let e = r[t];
                                return null != e ? et.intl.string(e) : "";
                            },
                        }));
                }
                l.sort(n);
                let h = l.filter((e) => {
                    let { status: t } = e;
                    return t !== eg.eP.LOCKED;
                });
                return { traitOptions: l, availableTraitOptions: h, totalCount: o, earnedCount: u };
            }, [t, c, s, n, a, i]);
        })({ customizationOption: t, savedOptionId: s, rarityOrder: el.FG, optionIds: a }),
        f = u.useMemo(
            () =>
                c.find((e) => {
                    let { optionId: t } = e;
                    return t === r;
                }) ?? n[0],
            [r, c, n],
        );
    return (
        !(function (e) {
            let { availableTraitOptions: t, selectedOptionId: a, onSelectOption: r, paused: s } = e,
                i = t[0],
                c = t.some((e) => e.optionId === a);
            u.useEffect(() => {
                s || null == i || c || r(i.trait, i.optionId);
            }, [i, c, r, s]);
        })({ availableTraitOptions: n, selectedOptionId: r, onSelectOption: i, paused: f?.status === eg.eP.LOCKED }),
        { traitOptions: c, selectedOption: f, totalCount: d, earnedCount: h, onSelectOption: i }
    );
}
function eR(e) {
    let { customizationOption: t } = e,
        {
            traitOptions: a,
            selectedOption: r,
            totalCount: i,
            earnedCount: c,
            onSelectOption: n,
        } = eT({ customizationOption: t });
    return (0, s.jsx)(eE, {
        customizationOption: t,
        traitOptions: a,
        selectedOption: r,
        onSelectOption: n,
        children: (0, s.jsx)(en, { earnedCount: c, totalCount: i }),
    });
}
var eC = a(71678);
function eO(e) {
    let { children: t, className: a } = e;
    return (0, s.jsx)("div", { className: f()(eC.n, a), children: t });
}
function eM() {
    let e = (0, _.bG)([o.A], () => o.A.stats?.emojis);
    return (0, s.jsxs)(eO, {
        children: [
            (0, s.jsx)(ei, {
                icon: Z.o,
                value: Math.round(e?.numEmojisSent ?? 0),
                topPercent: (0, v.bD)(e?.numEmojisSentPercentile),
                children: et.intl.string(ee.default.ZTDCIv),
            }),
            (0, s.jsx)(eR, { customizationOption: g.v7.SHOES }),
        ],
    });
}
var ey = a(534514),
    eL = a(265872),
    eD = a(320448),
    ek = a(315710),
    eP = a(444927);
let eG = {
    "--custom-checkpoint-primary": el.Kr,
    "--custom-checkpoint-dark-cyan": el.ow,
    "--custom-checkpoint-button-border": el.ow,
    "--custom-checkpoint-button-shadow": el.zj,
    "--custom-checkpoint-white": el.Ve,
    "--custom-checkpoint-guild-card-background": el.LM,
    "--custom-checkpoint-background-gradient-start": el.bI,
};
var eU = a(580814);
function eH(e) {
    let { options: t, activeCustomizationOption: a, returnRef: r, onSelectOption: i, onClose: c } = e,
        n = u.useRef(null),
        d = u.useRef([]),
        l = (0, eP.A)(() => Math.max(t.indexOf(a), 0));
    function o(e) {
        d.current[(e + t.length) % t.length]?.focus();
    }
    return (
        (0, ek.tj)(n, { returnRef: r }),
        u.useEffect(() => {
            d.current[l]?.focus();
        }, [l]),
        (0, s.jsx)("div", {
            ref: n,
            role: "menu",
            tabIndex: -1,
            "aria-label": et.intl.string(ee.default.Zl5vPW),
            className: eU.M,
            style: eG,
            onKeyDown: function (e) {
                e.stopPropagation();
                let a = d.current.indexOf(e.target);
                switch (e.key) {
                    case "ArrowDown":
                        (e.preventDefault(), o(a + 1));
                        break;
                    case "ArrowUp":
                        (e.preventDefault(), o(a - 1));
                        break;
                    case "Home":
                        (e.preventDefault(), o(0));
                        break;
                    case "End":
                        (e.preventDefault(), o(t.length - 1));
                        break;
                    case "Escape":
                    case "Tab":
                        (e.preventDefault(), c());
                }
            },
            children: t.map((e, t) =>
                (0, s.jsx)(
                    "button",
                    {
                        ref: (e) => {
                            d.current[t] = e;
                        },
                        type: "button",
                        role: "menuitemradio",
                        "aria-checked": e === a,
                        tabIndex: -1,
                        className: eU.A,
                        onClick: () => i(e),
                        onMouseEnter: (e) => e.currentTarget.focus(),
                        children: (0, s.jsx)(q.E, {
                            tag: "span",
                            variant: "heading-md/semibold",
                            color: "none",
                            children: (0, g.cq)(e),
                        }),
                    },
                    e,
                ),
            ),
        })
    );
}
var eF = a(769909);
let eK = [g.v7.BASE, g.v7.OUTFIT_COLOR],
    eB = [g.v7.AURA, g.v7.WEARABLE, g.v7.SHOES, g.v7.HAT, g.v7.OUTFIT, g.v7.FACE];
function eV(e) {
    let { activeCustomizationOption: t, onSelectOption: a, disabled: r = !1 } = e,
        i = u.useRef(null),
        c = eB.includes(t);
    return (0, s.jsx)(eL.Y, {
        targetElementRef: i,
        position: "right",
        align: "top",
        spacing: 8,
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, s.jsx)(eH, {
                options: eB,
                activeCustomizationOption: t,
                returnRef: i,
                onSelectOption: (e) => {
                    (a(e), r());
                },
                onClose: r,
            });
        },
        children: (e, a) => {
            let { isShown: n } = a;
            return (0, s.jsxs)("button", {
                ...e,
                ref: i,
                type: "button",
                disabled: r,
                "aria-haspopup": "menu",
                onKeyDown: (t) => {
                    (e.onKeyDown(t), ("ArrowLeft" === t.key || "ArrowRight" === t.key) && t.stopPropagation());
                },
                className: f()(eF.Mf, eF.OS, { [eF.vu]: c || n }),
                children: [
                    (0, s.jsx)(q.E, {
                        tag: "span",
                        variant: "heading-md/semibold",
                        color: "none",
                        children: c ? (0, g.cq)(t) : et.intl.string(ee.default["iXpQc+"]),
                    }),
                    (0, s.jsx)(eD._, { size: "refresh_sm", color: "currentColor" }),
                ],
            });
        },
    });
}
function ez(e) {
    let { activeCustomizationOption: t, onSelectOption: a, disabled: r = !1 } = e,
        i = u.useId();
    return (0, s.jsxs)("div", {
        className: eF.vR,
        children: [
            (0, s.jsx)("div", {
                role: "radiogroup",
                "aria-label": et.intl.string(ee.default.Zl5vPW),
                className: eF.vR,
                children: eK.map((e) => {
                    let c = e === t;
                    return (0, s.jsxs)(
                        "label",
                        {
                            className: f()(eF.Mf, { [eF.vu]: c }),
                            children: [
                                (0, s.jsx)(ep.A, {
                                    children: (0, s.jsx)("input", {
                                        type: "radio",
                                        name: i,
                                        checked: c,
                                        disabled: r,
                                        onChange: () => a(e),
                                    }),
                                }),
                                (0, s.jsx)(q.E, {
                                    tag: "span",
                                    variant: "heading-md/semibold",
                                    color: "none",
                                    children: (0, g.cq)(e),
                                }),
                            ],
                        },
                        e,
                    );
                }),
            }),
            (0, s.jsx)(eV, { activeCustomizationOption: t, onSelectOption: a, disabled: r }),
        ],
    });
}
var eW = a(195464);
function eY() {
    let [e, t] = u.useState(g.v7.BASE),
        { traitOptions: a, selectedOption: r, onSelectOption: i } = eT({ customizationOption: e }),
        { blockedTraits: c } = O(),
        n = c.includes(g.hw[e]),
        d = (0, _.bG)([o.A], () => o.A.isSaving);
    return (0, s.jsxs)(eO, {
        className: eW.n,
        children: [
            (0, s.jsx)(ey.D, {
                variant: "heading-xl/medium",
                color: "none",
                className: eW.D,
                children: et.intl.string(ee.default["q2nj/Z"]),
            }),
            (0, s.jsx)(ez, { activeCustomizationOption: e, onSelectOption: t, disabled: d || n }),
            (0, s.jsx)(eE, {
                customizationOption: e,
                traitOptions: a,
                selectedOption: r,
                onSelectOption: i,
                disabled: d,
            }),
        ],
    });
}
var eZ = a(81466);
function eq() {
    let e = (0, _.bG)([o.A], () => o.A.stats?.games);
    return (0, s.jsxs)(eO, {
        children: [
            (0, s.jsx)(ei, {
                icon: eZ.CalendarIcon,
                value: Math.round(e?.totalDaysPlayed ?? 0),
                topPercent: (0, v.bD)(e?.totalDaysPlayedPercentile),
                children: et.intl.string(ee.default["4N5p4D"]),
            }),
            (0, s.jsx)(eR, { customizationOption: g.v7.AURA }),
        ],
    });
}
var eJ = a(687966);
function eX() {
    let e = (0, _.bG)([o.A], () => o.A.stats?.games);
    return (0, s.jsxs)(eO, {
        children: [
            (0, s.jsx)(ei, {
                icon: eJ.GameControllerIcon,
                value: Math.round(e?.totalGamesPlayed ?? 0),
                topPercent: (0, v.bD)(e?.totalGamesPlayedPercentile),
                children: et.intl.string(ee.default.HM2fjf),
            }),
            (0, s.jsx)(eR, { customizationOption: g.v7.WEARABLE }),
        ],
    });
}
var eQ = a(534890),
    e$ = a(465199);
function e0() {
    let e = (0, _.bG)([o.A], () => o.A.stats?.messages);
    return (0, s.jsxs)(eO, {
        children: [
            (0, s.jsx)(ei, {
                icon: eQ.ChatIcon,
                value: Math.round(e?.numMessagesSent ?? 0),
                topPercent: (0, v.bD)(e?.numMessagesSentPercentile),
                children: et.intl.string(e$.default.wWKySP),
            }),
            (0, s.jsx)(eR, { customizationOption: g.v7.OUTFIT }),
        ],
    });
}
var e1 = a(664121);
function e5() {
    let e = (0, _.bG)([o.A], () => o.A.stats?.guilds?.guilds[0]);
    return (0, s.jsxs)(eO, {
        children: [
            (0, s.jsx)(ei, {
                icon: e1.R,
                value: Math.round(e?.numDaysInteracted ?? 0),
                topPercent: (0, v.bD)(e?.numDaysInteractedPercentile),
                children: et.intl.string(ee.default["M+a+t1"]),
            }),
            (0, s.jsx)(eR, { customizationOption: g.v7.HAT }),
        ],
    });
}
var e6 = a(831544);
function e2() {
    let e = (0, _.bG)([o.A], () => o.A.stats?.voice),
        t = Math.round(e?.totalVoiceMinutes ?? 0);
    return (0, s.jsxs)(eO, {
        children: [
            (0, s.jsx)(ei, {
                icon: e6.MicrophoneIcon,
                value: t,
                topPercent: (0, v.bD)(e?.totalVoiceMinutesPercentile),
                children: et.intl.string(ee.default["3/T12E"]),
            }),
            (0, s.jsx)(eR, { customizationOption: g.v7.FACE }),
        ],
    });
}
function e3(e) {
    let { route: t } = e;
    switch (t) {
        case A.gr.VOICE_FACE:
            return (0, s.jsx)(e2, {});
        case A.gr.MESSAGES_OUTFIT:
            return (0, s.jsx)(e0, {});
        case A.gr.SERVERS_HEADWEAR:
            return (0, s.jsx)(e5, {});
        case A.gr.EMOJI_SHOES:
            return (0, s.jsx)(eM, {});
        case A.gr.GAMES_WEARABLE:
            return (0, s.jsx)(eX, {});
        case A.gr.GAME_TIME_AURA:
            return (0, s.jsx)(eq, {});
        case A.gr.FINALIZE_CHARACTER:
            return (0, s.jsx)(eY, {});
        default:
            return null;
    }
}
var e4 = a(358618),
    e8 = a(983851);
function e9() {
    let e = (0, _.bG)([o.A], () => o.A.isMuted),
        t = e ? e4._ : e8.H;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(H, {
                size: "sm",
                "aria-label": et.intl.string(e ? et.t.YqAjXy : et.t.w4m945),
                onClick: l.K8,
                children: (0, s.jsx)(t, { size: "xs", color: "currentColor" }),
            }),
            (0, s.jsx)("audio", {
                autoPlay: !0,
                loop: !0,
                muted: e,
                children: (0, s.jsx)("source", {
                    src: "https://cdn.discordapp.com/assets/content/d271231f4934992caed169c11586a1da060d37b5fd8804b56666b547f03836bd.mp3",
                }),
            }),
        ],
    });
}
var e7 = a(435558),
    te = a(477155),
    tt = a(22231),
    ta = a(935286),
    tr = a(405433),
    ts = a(289873),
    ti = a(621466);
function tc(e, t) {
    let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    u.useEffect(() => {
        if (!a) return (window.addEventListener("keydown", r), () => window.removeEventListener("keydown", r));
        function r(a) {
            (0, ti.vq)(a.target, HTMLTextAreaElement) || (0, ti.vq)(a.target, HTMLInputElement) || (a.key === e && t());
        }
    }, [e, t, a]);
}
var tn = a(753875);
function td(e) {
    let { "aria-label": t, icon: a, onClick: r, disabled: i = !1 } = e;
    return (
        tc("ArrowLeft", r, i),
        (0, s.jsx)(H, {
            size: "md",
            className: f()(tn.A4, tn.aX),
            onClick: r,
            disabled: i,
            "aria-label": t,
            children: (0, s.jsx)(a, { color: "currentColor" }),
        })
    );
}
function tl(e) {
    let { "aria-label": t, children: a, onClick: r, size: i, className: c, disabled: n = !1 } = e;
    return (
        tc("ArrowRight", r, n),
        (0, s.jsx)(F, {
            size: i,
            className: f()(tn.A4, tn.K2, c),
            onClick: r,
            disabled: n,
            "aria-label": t,
            children: a,
        })
    );
}
function to(e) {
    let { onClick: t, disabled: a } = e;
    return (0, s.jsx)(td, { "aria-label": et.intl.string(et.t["13/7kX"]), icon: te.r, onClick: t, disabled: a });
}
function tu(e) {
    let { onClick: t, disabled: a } = e;
    return (0, s.jsx)(td, {
        "aria-label": et.intl.string(ee.default.Iyyy9s),
        icon: tt.PencilIcon,
        onClick: t,
        disabled: a,
    });
}
function th(e) {
    let { onClick: t, disabled: a } = e;
    return (0, s.jsx)(tl, {
        size: "md",
        "aria-label": et.intl.string(et.t.PDTjLN),
        onClick: t,
        disabled: a,
        children: (0, s.jsx)(ta.E, { color: "currentColor" }),
    });
}
function tf(e) {
    let { onClick: t, disabled: a } = e;
    return (0, s.jsxs)(tl, {
        size: "custom",
        className: tn.GA,
        "aria-label": et.intl.string(et.t.PDTjLN),
        onClick: t,
        disabled: a,
        children: [
            (0, s.jsx)(X, { variant: "mono-md/normal", className: tn.Pf, children: et.intl.string(et.t.PDTjLN) }),
            (0, s.jsx)(ta.E, { size: "refresh_sm", color: "currentColor" }),
        ],
    });
}
function tb(e) {
    let { onClick: t, disabled: a } = e;
    return (0, s.jsxs)(tl, {
        size: "custom",
        className: f()(tn.GA, tn.Bq),
        "aria-label": et.intl.string(et.t.RDE0Sc),
        onClick: t,
        disabled: a,
        children: [
            (0, s.jsx)(q.E, {
                variant: "mono-md/bold",
                color: "none",
                className: tn.Pf,
                children: et.intl.string(et.t.RDE0Sc),
            }),
            (0, s.jsx)(tr.ShareIcon, { size: "refresh_sm", color: "currentColor" }),
        ],
    });
}
function t_(e) {
    let { onBack: t, isRouteBlocked: a } = e,
        r = (0, _.bG)([o.A], () => o.A.isSaving);
    return (0, s.jsx)(to, {
        onClick: function () {
            r || t();
        },
        disabled: r || a,
    });
}
function tx(e) {
    let { onNext: t, throttledNavigate: a, isRouteBlocked: r } = e,
        c = (0, _.bG)([o.A], () => o.A.isSaving);
    async function n() {
        if (c) return;
        let e = (0, C.XI)(o.A.selectedCharacterTraits);
        (await (0, l.yE)(e)) ? t() : (0, i.P0)({ text: et.intl.string(et.t.fEptJP), variant: "critical" });
    }
    return (0, s.jsxs)(tl, {
        size: "custom",
        className: tn.GA,
        "aria-label": et.intl.string(et.t["R3BPH+"]),
        onClick: function () {
            a(n);
        },
        disabled: c || r,
        children: [
            (0, s.jsx)(X, { variant: "mono-md/normal", className: tn.Pf, children: et.intl.string(et.t["R3BPH+"]) }),
            c
                ? (0, s.jsx)(ts.y, { type: ts.t.SPINNING_CIRCLE_SIMPLE, className: tn.u1, itemClassName: tn.$N })
                : (0, s.jsx)(ta.E, { size: "refresh_sm", color: "currentColor" }),
        ],
    });
}
function tp(e) {
    let { activeRoute: t, isRouteBlocked: a, onBack: r, onNext: i } = e,
        c = u.useMemo(() => (0, e7.throttle)((e) => e(), 500, { trailing: !1 }), []);
    switch (t) {
        case A.gr.HOME:
            return null;
        case A.gr.FINALIZE_CHARACTER:
            return (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsx)(t_, { onBack: () => c(r), isRouteBlocked: a }),
                    (0, s.jsx)(tx, { onNext: i, throttledNavigate: c, isRouteBlocked: a }),
                ],
            });
        case A.gr.SUMMARY:
            return (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsx)(tu, { onClick: () => c(r) }), (0, s.jsx)(tb, { onClick: () => c(i) })],
            });
        default:
            return (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsx)(to, { onClick: () => c(r), disabled: a }),
                    (0, A.Rq)(t)
                        ? (0, s.jsx)(tf, { onClick: () => c(i), disabled: a })
                        : (0, s.jsx)(th, { onClick: () => c(i), disabled: a }),
                ],
            });
    }
}
function tm(e) {
    let { className: t } = e;
    return (0, s.jsx)(K, {
        animatedSrc:
            "https://cdn.discordapp.com/assets/content/02e9ae4cdbec0b2adef22c9a5659f5c7340e399cc8932e8af6d41e62a37644ae.png",
        staticSrc:
            "https://cdn.discordapp.com/assets/content/f08be0abd0d224b5f7e1e5d6c1ef8e4d24cddcb712e2c624dcc6ea3d136818d5.png",
        className: t,
    });
}
var tg = a(771639);
let tA = { "--custom-checkpoint-screen-vertical-inset": "88px" };
function tv(e) {
    let { children: t } = e;
    return (0, s.jsx)("div", { className: tg.n, style: tA, children: t });
}
var tw = a(639331);
function tI() {
    let e = (0, _.bG)([o.A], () => o.A.fetchState !== o.T.SUCCESS || null != o.A.stats);
    return (0, s.jsx)(tv, {
        children: (0, s.jsxs)("div", {
            className: tw.Qs,
            children: [
                (0, s.jsxs)("div", {
                    className: tw.Ok,
                    children: ["2026", !e && (0, s.jsx)(tm, { className: tw.gi })],
                }),
                (0, s.jsxs)("div", {
                    className: tw.eH,
                    children: [
                        (0, s.jsx)(X, {
                            tag: "p",
                            variant: "heading-lg/medium",
                            children: et.intl.string(e ? ee.default["7YmUVu"] : ee.default["Fyr+NW"]),
                        }),
                        !e &&
                            (0, s.jsx)(X, {
                                tag: "p",
                                variant: "heading-lg/medium",
                                children: et.intl.string(ee.default["2GRr6H"]),
                            }),
                    ],
                }),
            ],
        }),
    });
}
(a(134528), a(947204));
var tE = a(675970),
    tj = a(559106),
    tN = a(366056),
    tS = a(292801),
    tT = a(155718),
    tR = a(294454),
    tC = a(489414),
    tO = a(878358),
    tM = a(383233),
    ty = a(819648),
    tL = a(677059);
function tD(e) {
    let { children: t } = e;
    return (0, s.jsx)(X, { variant: "heading-xxl/medium", className: tL.h, children: t });
}
var tk = a(100391);
function tP(e) {
    let { icon: t, children: a } = e;
    return (0, s.jsxs)("div", {
        className: tk.D,
        children: [
            (0, s.jsx)(t, { size: "md", color: "currentColor" }),
            (0, s.jsx)(X, { variant: "heading-lg/semibold", className: tk.Q, children: a }),
        ],
    });
}
var tG = a(456410);
function tU(e) {
    let { name: t, label: a, checked: r, onSelect: i, children: c } = e;
    return (0, s.jsx)(tj.vN, {
        within: !0,
        children: (0, s.jsxs)("label", {
            className: f()(tG.uK, { [tG.KD]: r }),
            children: [
                (0, s.jsx)(ep.A, {
                    children: (0, s.jsx)("input", { type: "radio", name: t, checked: r, onChange: i, "aria-label": a }),
                }),
                r ? (0, s.jsx)("div", { className: tG.Gt, "aria-hidden": !0 }) : null,
                (0, s.jsx)("div", { className: tG.Nr, "aria-hidden": !0, children: c }),
            ],
        }),
    });
}
function tH() {
    let e = (0, _.bG)([o.A], () => o.A.character),
        t = (0, _.bG)([o.A], () => o.A.stats),
        a = u.useId(),
        r = u.useMemo(() => {
            var a, r;
            return ((a = e),
            (r = t),
            null != a && null != r
                ? [tE.Q.CHARACTER_ONLY, tE.Q.DEFAULT, tE.Q.STATS_ONLY]
                : null != a
                  ? [tE.Q.CHARACTER_ONLY]
                  : null != r
                    ? [tE.Q.STATS_ONLY]
                    : []).map((a) => ({ cardType: a, checkpointData: (0, ty.Go)(a, e, t) }));
        }, [e, t]),
        [c, n] = u.useState(r.at(0)?.cardType),
        d = r.find((e) => {
            let { cardType: t } = e;
            return t === c;
        });
    return null == d
        ? null
        : (0, s.jsx)(tv, {
              children: (0, s.jsxs)("div", {
                  className: tG.uM,
                  children: [
                      (0, s.jsxs)("div", {
                          className: tG.wx,
                          children: [
                              (0, s.jsxs)("div", {
                                  className: tG.R_,
                                  children: [
                                      (0, s.jsx)(tP, { icon: tN.M, children: et.intl.string(e$.default.ir6nEQ) }),
                                      (0, s.jsx)(X, {
                                          variant: "display-lg",
                                          className: tG.Vy,
                                          children: et.intl.string(e$.default["T7cl+Y"]),
                                      }),
                                  ],
                              }),
                              (0, s.jsx)("div", {
                                  className: tG.h_,
                                  children: (0, s.jsx)(tD, { children: et.intl.string(ee.default.KXDPot) }),
                              }),
                          ],
                      }),
                      (0, s.jsx)("div", {
                          role: "radiogroup",
                          "aria-label": et.intl.string(ee.default.KXDPot),
                          className: tG.kR,
                          children: r.map((e) => {
                              let { cardType: t, checkpointData: r } = e;
                              return (0, s.jsx)(
                                  tU,
                                  {
                                      name: a,
                                      label: (function (e) {
                                          switch (e) {
                                              case tE.Q.CHARACTER_ONLY:
                                                  return et.intl.string(ee.default.tUU3fe);
                                              case tE.Q.DEFAULT:
                                                  return et.intl.string(ee.default.DZQzJn);
                                              case tE.Q.STATS_ONLY:
                                                  return et.intl.string(ee.default.e2UHGT);
                                          }
                                      })(t),
                                      checked: t === d.cardType,
                                      onSelect: () => n(t),
                                      children: (0, s.jsx)(tO.A, { checkpointData: r }),
                                  },
                                  t,
                              );
                          }),
                      }),
                      (0, s.jsxs)(F, {
                          size: "custom",
                          className: tG.sY,
                          "aria-label": et.intl.string(et.t.I3ltXO),
                          onClick: function () {
                              if (null == d) return;
                              let { cardType: e, checkpointData: t } = d;
                              (0, tR.fO)({
                                  message: new tM.Ay({
                                      content: "",
                                      components: [
                                          { type: tT.I5.CHECKPOINT_CARD, id: (0, tC.X1)("0"), checkpointData: t },
                                      ],
                                  }),
                                  source: "checkpoint",
                                  customSendHandler: async (t, a, r) => {
                                      let { withMessage: s } = a;
                                      r(!0);
                                      try {
                                          (await (0, l.jA)(t, s ?? "", e),
                                              (0, tR.Be)(),
                                              (0, i.P0)({ text: et.intl.string(et.t.kwmYkt), variant: "success" }));
                                      } catch {
                                          (0, i.P0)({ text: et.intl.string(et.t.iufib1), variant: "critical" });
                                      } finally {
                                          r(!1);
                                      }
                                  },
                              });
                          },
                          children: [
                              (0, s.jsx)(q.E, {
                                  variant: "mono-md/bold",
                                  color: "none",
                                  className: tG.RC,
                                  children: et.intl.string(et.t.I3ltXO),
                              }),
                              (0, s.jsx)(tS.t, { size: "refresh_sm", color: "currentColor" }),
                          ],
                      }),
                  ],
              }),
          });
}
var tF = a(536426),
    tK = a(782134),
    tB = a(28863),
    tV = a(998304),
    tz = a(975571),
    tW = a(427262),
    tY = a(652215),
    tZ = a(438389);
let tq = (0, tV.j5)(el.Kr);
function tJ(e) {
    let { onStart: t } = e,
        a = (0, _.bG)([T.default], () => T.default.getCurrentUser()),
        r = (0, tW.tx)(a),
        i = (0, _.bG)([D.Ay], () => D.Ay.useReducedMotion);
    return (
        tc("ArrowRight", t),
        (0, s.jsxs)(tv, {
            children: [
                (0, s.jsxs)("div", {
                    className: tZ.Qs,
                    children: [
                        (0, s.jsxs)("div", {
                            className: tZ.wx,
                            children: [
                                (0, s.jsxs)("div", {
                                    className: tZ.Qq,
                                    children: [
                                        (0, s.jsx)(X, {
                                            variant: "display-lg",
                                            className: tZ.DD,
                                            children: et.intl.string(e$.default["CdU/PF"]),
                                        }),
                                        (0, s.jsx)(X, {
                                            variant: "heading-xxl/medium",
                                            children: et.intl.formatToPlainString(ee.default.xhZ23b, { username: r }),
                                        }),
                                    ],
                                }),
                                (0, s.jsx)("div", {
                                    className: tZ.CB,
                                    children: (0, s.jsx)(tF.U, {
                                        artboard: "Entry",
                                        className: tZ.lW,
                                        fit: "contain",
                                        withReducedMotion: "short-loop",
                                        dataBinding: { iconColor: tq, reducedMotion: i },
                                    }),
                                }),
                            ],
                        }),
                        (0, s.jsxs)(F, {
                            size: "custom",
                            className: tZ.ni,
                            "aria-label": et.intl.string(et.t.I0v0Qv),
                            onClick: t,
                            children: [
                                (0, s.jsx)(tK.PlayIcon, { size: "refresh_sm", color: "currentColor" }),
                                (0, s.jsx)(X, {
                                    variant: "mono-md/normal",
                                    className: tZ.qK,
                                    children: et.intl.string(et.t.I0v0Qv),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: tZ.qr,
                    children: [
                        (0, s.jsx)(X, {
                            variant: "text-sm/medium",
                            className: tZ.ed,
                            children: et.intl.format(ee.default.hcNhyq, {
                                learnMoreHook: (e, t) =>
                                    (0, s.jsx)(
                                        tB.Anchor,
                                        {
                                            className: tZ.nf,
                                            href: tz.A.getArticleURL(tY.MVz.CHECKPOINT_2026),
                                            useDefaultUnderlineStyles: !1,
                                            children: e,
                                        },
                                        t,
                                    ),
                            }),
                        }),
                        (0, s.jsx)(X, {
                            variant: "text-md/medium",
                            className: tZ.al,
                            children: et.intl.format(e$.default.g476ZL, { name: "Exyl" }),
                        }),
                    ],
                }),
            ],
        })
    );
}
var tX = a(788026),
    tQ = a(141881);
function t$(e) {
    let { children: t } = e;
    return (0, s.jsx)($, { className: tQ.l, children: t });
}
var t0 = a(765671),
    t1 = a(590642),
    t5 = a(362263),
    t6 = a(406956);
let t2 = (0, tV.j5)(el.Kr);
function t3(e) {
    let { value: t, alignment: a = "left" } = e,
        r = (0, _.bG)([D.Ay], () => D.Ay.useReducedMotion),
        [i, c] = u.useState(0),
        n = r ? t : i;
    u.useEffect(() => {
        if (r) return;
        let e = performance.now(),
            a = requestAnimationFrame(function r(s) {
                let i = Math.min((s - e) / 500, 1);
                (c(Math.round(t * i)), i < 1 && (a = requestAnimationFrame(r)));
            });
        return () => cancelAnimationFrame(a);
    }, [t, r]);
    let d = "center" === a ? t1.m : t5.w;
    return (0, s.jsxs)("div", {
        className: t6.lY,
        children: [
            (0, s.jsx)("div", { className: t6.VL, children: t }),
            (0, s.jsx)(d, {
                className: t6.lW,
                fit: "layout",
                withReducedMotion: "short-loop",
                dataBinding: { DisplayValue: n, TextColor: t2 },
            }),
            (0, s.jsx)(ep.A, { children: t.toLocaleString(et.intl.currentLocale) }),
        ],
    });
}
var t4 = a(434911);
function t8(e) {
    let { value: t } = e,
        { ref: a, width: r } = (0, t0.Ay)(),
        { ref: i, width: c } = (0, t0.Ay)(),
        n = null != r && null != c ? Math.min(1, r / c) : 1;
    return (0, s.jsxs)("div", {
        ref: a,
        className: t4.ai,
        style: { height: 200 * n },
        children: [
            (0, s.jsx)("span", { ref: i, className: f()(t4.Qq, t4.xP), children: t }),
            (0, s.jsx)(t3, { value: t }),
        ],
    });
}
function t9(e) {
    let { value: t } = e;
    return (0, s.jsxs)("div", {
        className: t4.dJ,
        children: [
            "number" == typeof t
                ? (0, s.jsx)(t8, { value: t })
                : (0, s.jsx)(X, { variant: "heading-xxl/medium", className: t4.Qq, children: t }),
            (0, s.jsx)(tm, { className: t4.gi }),
        ],
    });
}
(a(393431), a(532706), a(42231), a(232424), a(949626), a(767709), a(65162));
var t7 = a(445199),
    ae = a(205524),
    at = a(690521),
    aa = a(152321);
let ar = [0, 0, 2],
    as = [0, 1, 0],
    ai = [0, 0, 0],
    ac = `
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
    an = `
precision mediump float;

varying vec2 v_texcoord;
varying highp vec3 v_lighting;

uniform sampler2D u_texture;

void main() {
  highp vec4 texelColor = texture2D(u_texture, v_texcoord);
  gl_FragColor = vec4(texelColor.rgb * v_lighting, texelColor.a);
}
`,
    ad = [
        -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5,
        -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5,
        0.5, 0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, -0.5,
        -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5,
        -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5,
        -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5,
    ],
    al = [
        0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0,
        1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0,
    ],
    ao = [
        0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
        1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
        -1, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
        1, 0, 0,
    ];
function au(e) {
    let t,
        { emoji: a } = e,
        [r, i] = u.useState(null),
        [c, n] = u.useState(null),
        d = u.useRef(new Image()),
        [l, o] = u.useState(null),
        [h, b] = u.useState(!1),
        x = u.useRef(0),
        p = u.useRef(0),
        m = u.useRef(45),
        g = u.useRef(45),
        A = (0, _.bG)([D.Ay], () => D.Ay.useReducedMotion),
        v = 70 * !A,
        w = 40 * !A,
        I = u.useRef(v),
        E = u.useRef(w),
        j = u.useRef(!1),
        N = u.useRef(0),
        S = u.useRef(0);
    ((t = u.useRef(null)),
        u.useEffect(() => {
            if (null == t.current || null == c) return;
            let e = t.current,
                a = e.createTexture();
            return (
                e.bindTexture(e.TEXTURE_2D, a),
                e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, c),
                e.generateMipmap(e.TEXTURE_2D),
                () => e.deleteTexture(a)
            );
        }, [c, l]),
        u.useEffect(() => {
            let e,
                a = 0,
                s = r?.getContext("webgl");
            if (null == s || null == r || null == c) return;
            t.current = s;
            let i = s.createShader(s.VERTEX_SHADER),
                n = s.createShader(s.FRAGMENT_SHADER);
            if (null == i || null == n) return;
            if (
                (s.shaderSource(i, ac),
                s.shaderSource(n, an),
                s.compileShader(i),
                !s.getShaderParameter(i, s.COMPILE_STATUS))
            )
                return void console.error("ERROR compiling vertex shader!", s.getShaderInfoLog(i));
            if ((s.compileShader(n), !s.getShaderParameter(n, s.COMPILE_STATUS)))
                return void console.error("ERROR compiling fragment shader!", s.getShaderInfoLog(n));
            let d = s.createProgram();
            if (
                (s.attachShader(d, i), s.attachShader(d, n), s.linkProgram(d), !s.getProgramParameter(d, s.LINK_STATUS))
            )
                return void console.error("ERROR linking program!", s.getProgramInfoLog(d));
            if ((s.validateProgram(d), !s.getProgramParameter(d, s.VALIDATE_STATUS)))
                return void console.error("ERROR validating program!", s.getProgramInfoLog(d));
            let l = s.getAttribLocation(d, "a_position"),
                o = s.getAttribLocation(d, "a_texcoord"),
                u = s.getUniformLocation(d, "u_matrix"),
                h = s.getUniformLocation(d, "u_texture"),
                f = s.getAttribLocation(d, "a_vertexNormal"),
                b = s.getUniformLocation(d, "u_normalMatrix"),
                _ = s.createBuffer();
            (s.bindBuffer(s.ARRAY_BUFFER, _),
                s.bufferData(s.ARRAY_BUFFER, new Float32Array(ao), s.STATIC_DRAW),
                s.vertexAttribPointer(f, 3, s.FLOAT, !1, 0, 0),
                s.enableVertexAttribArray(f));
            let x = s.createBuffer();
            (s.bindBuffer(s.ARRAY_BUFFER, x),
                (e = new Float32Array(ad)),
                s.bufferData(s.ARRAY_BUFFER, e, s.STATIC_DRAW));
            let p = s.createBuffer();
            (s.bindBuffer(s.ARRAY_BUFFER, p), s.bufferData(s.ARRAY_BUFFER, new Float32Array(al), s.STATIC_DRAW));
            let A = t7.DF(60);
            return (
                (a = requestAnimationFrame(function e() {
                    if (null == s || null == r) return;
                    (s.viewport(0, 0, s.canvas.width, s.canvas.height), s.enable(s.CULL_FACE), s.enable(s.DEPTH_TEST));
                    let t = t7.DF(m.current),
                        i = t7.DF(g.current);
                    (s.clear(s.COLOR_BUFFER_BIT | s.DEPTH_BUFFER_BIT),
                        s.useProgram(d),
                        s.enableVertexAttribArray(l),
                        s.bindBuffer(s.ARRAY_BUFFER, x),
                        s.vertexAttribPointer(l, 3, s.FLOAT, !1, 0, 0),
                        s.enableVertexAttribArray(o),
                        s.bindBuffer(s.ARRAY_BUFFER, p),
                        s.vertexAttribPointer(o, 2, s.FLOAT, !1, 0, 0));
                    let c = r.clientWidth / r.clientHeight,
                        n = ae.fN(ae.vt(), A, c, 1, 2e3),
                        f = ae.t5(ae.vt(), ar, ai, as),
                        _ = ae.lw(ae.vt(), n, f),
                        v = ae.vt();
                    (ae.eL(v, v, t), ae.Z8(v, v, i));
                    let w = ae.lw(ae.vt(), _, v),
                        I = ae.vt();
                    (ae.B8(I, v),
                        ae.mg(I, I),
                        s.uniformMatrix4fv(b, !1, I),
                        s.uniformMatrix4fv(u, !1, w),
                        s.uniform1i(h, 0),
                        s.drawArrays(s.TRIANGLES, 0, 36),
                        (a = requestAnimationFrame(e)));
                })),
                () => cancelAnimationFrame(a)
            );
        }, [m, g, r, c]));
    let T = u.useCallback(() => {
        let e = c?.getContext("2d");
        null != c &&
            null != e &&
            ((e.fillStyle = "black"),
            e.fillRect(0, 0, c.width, c.height),
            e.drawImage(d.current, 0, 0, c.width, c.height),
            (e.fillStyle = el.Kr),
            e.fillRect(0, 0, c.width, 1),
            e.fillRect(0, 0, 1, c.height),
            e.fillRect(0, c.height - 1, c.width, 1),
            e.fillRect(c.width - 1, 0, 1, c.height),
            o(a),
            b(!0));
    }, [a, d, c]);
    (u.useEffect(() => {
        null != c &&
            ((d.current.crossOrigin = "anonymous"), (d.current.src = (0, at.Ez)(a, 256)), (d.current.onload = T));
    }, [a, T, d, c]),
        u.useEffect(
            () => (
                !(function e(t) {
                    let a = 0.001 * t,
                        r = Math.min(a - p.current, 0.1);
                    if (((g.current += -E.current * r), (m.current += -I.current * r), !j.current)) {
                        if (Math.abs(I.current) > v) {
                            let e = I.current > 0 ? 1 : -1;
                            I.current -= 2 * e * window.devicePixelRatio;
                        }
                        if (Math.abs(E.current) > w) {
                            let e = E.current > 0 ? 1 : -1;
                            E.current -= 2 * e * window.devicePixelRatio;
                        }
                    }
                    ((p.current = a), (x.current = requestAnimationFrame(e)));
                })(0),
                () => cancelAnimationFrame(x.current)
            ),
            [v, w],
        ));
    let R = u.useCallback((e) => {
            ((j.current = !0), (I.current = 0), (E.current = 0), (N.current = e.clientX), (S.current = e.clientY));
        }, []),
        C = u.useCallback((e) => {
            if (j.current) {
                let t = (e.clientX - N.current) / window.devicePixelRatio;
                ((I.current = -((e.clientY - S.current) / window.devicePixelRatio) * (100 / window.devicePixelRatio)),
                    (E.current = -t * (100 / window.devicePixelRatio)),
                    (N.current = e.clientX),
                    (S.current = e.clientY));
            }
        }, []),
        O = u.useCallback(() => {
            j.current = !1;
        }, []);
    return (
        u.useEffect(
            () => (
                window.addEventListener("mouseup", O),
                window.addEventListener("mousemove", C),
                () => {
                    (window.removeEventListener("mouseup", O), window.removeEventListener("mousemove", C));
                }
            ),
            [C, O],
        ),
        (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)("canvas", {
                    className: f()(aa.Ji, { [aa.q4]: !h }),
                    ref: i,
                    height: 512,
                    width: 512,
                    onMouseDown: R,
                }),
                (0, s.jsx)("canvas", { className: aa.R, ref: n, height: 256, width: 256 }),
            ],
        })
    );
}
var ah = a(826820);
let af = [];
function ab(e) {
    let { emojiStats: t } = e,
        a = Math.round(t?.numEmojisSent ?? 0),
        r = (0, v.bD)(t?.numEmojisSentPercentile);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)("div", {
                className: ah.dJ,
                children: [
                    (0, s.jsx)(tP, { icon: Z.o, children: et.intl.string(ee.default.ZTDCIv) }),
                    (0, s.jsx)(t3, { value: a }),
                ],
            }),
            (0, s.jsx)(tD, {
                children:
                    null != r
                        ? et.intl.format(ee.default.o7vDrk, {
                              percent: r,
                              percentHook: (e, t) => (0, s.jsx)(t$, { children: e }, t),
                          })
                        : et.intl.format(ee.default.NFptic, { numEmojis: a }),
            }),
        ],
    });
}
function a_(e) {
    let { numEmojisSent: t } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)("div", {
                className: ah.dJ,
                children: [
                    (0, s.jsx)(tP, { icon: Z.o, children: et.intl.string(ee.default.ZTDCIv) }),
                    (0, s.jsx)(t9, { value: t }),
                ],
            }),
            (0, s.jsx)(tD, { children: et.intl.format(ee.default["660/Rr"], { numEmojis: (0, v.wj)(t) }) }),
        ],
    });
}
function ax() {
    let e = (0, _.bG)([o.A], () => o.A.stats?.emojis),
        t = (0, _.bG)([o.A], () => (0, v.y7)(o.A.stats)),
        a = (0, _.bG)([o.A], () => o.A.globalStats?.emojis),
        r = !t && null != a,
        i = (r ? a.emojis : e?.emojis) ?? af,
        [c, n] = u.useState(0),
        d = i[c],
        l = y(b);
    return (0, s.jsx)(tv, {
        children: (0, s.jsxs)("div", {
            className: ah.kL,
            children: [
                (0, s.jsx)("div", { className: ah.KY, children: null != d && (0, s.jsx)(au, { emoji: d }) }),
                (0, s.jsxs)("div", {
                    className: ah.C,
                    children: [
                        r ? (0, s.jsx)(a_, { numEmojisSent: a.numEmojisSent }) : (0, s.jsx)(ab, { emojiStats: e }),
                        (0, s.jsx)("div", {
                            className: ah.gm,
                            children: i.map((e, t) =>
                                (0, s.jsx)(
                                    ap,
                                    {
                                        emoji: e,
                                        rank: t + 1,
                                        isActive: t === c,
                                        onClick: () => {
                                            (l(), n(t));
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
function ap(e) {
    let { emoji: t, rank: a, isActive: r, onClick: i } = e,
        c = !(0, _.bG)([D.Ay], () => D.Ay.useReducedMotion) && !0 === t.animated;
    return (0, s.jsxs)(H, {
        size: "custom",
        className: ah._X,
        onClick: i,
        "aria-label": et.intl.formatToPlainString(ee.default["S5+pRg"], { emojiName: t.name, rank: a }),
        "aria-pressed": r,
        children: [
            (0, s.jsx)(tX.A, { className: ah.Zg, emojiId: t.id, emojiName: t.name, animated: c }),
            (0, s.jsx)(X, { variant: "mono-md/bold", className: ah.Tm, children: a }),
        ],
    });
}
var am = a(236177),
    ag = a(214947),
    aA = a(939249),
    av = a(597770),
    aw = a(559647),
    aI = a(793574),
    aE = a(95369),
    aj = a(570287),
    aN = a(486020),
    aS = a(801305);
let aT = [],
    aR = (0, tV.j5)(el.Kr),
    aC = { r: 0, g: 0, b: 0, a: 1 },
    aO = {
        "Avatar01/Stroke": aC,
        "Avatar01/Fill": aR,
        "Avatar02/Stroke": aC,
        "Avatar02/Fill": aR,
        "Avatar03/Stroke": aC,
        "Avatar03/Fill": aR,
        "Avatar04/Stroke": aC,
        "Avatar04/Fill": aR,
        "Avatar05/Stroke": aC,
        "Avatar05/Fill": aR,
        ConnectorColor: aR,
    };
function aM(e) {
    return null != e ? aN.Ay.getUserAvatarURL(e, !1, 160, "png") : void 0;
}
function ay(e) {
    let t,
        { route: a, onNextStep: r, onPreviousStep: i } = e,
        c = (0, _.bG)([o.A], () => o.A.stats?.users ?? aT),
        n = (0, _.bG)([o.A], () => o.A.stats?.sidekick),
        d = (0, _.bG)([T.default], () => T.default.getCurrentUser()),
        l = (0, _.bG)([D.Ay], () => D.Ay.useReducedMotion),
        h = u.useRef(null),
        b = u.useRef(void 0),
        x = (function (e, t) {
            let [a, r] = u.useState({ route: e, hasShownSquad: e === A.gr.SQUAD, isTransitioning: !1 });
            switch (
                (a.route !== e &&
                    r({
                        route: e,
                        hasShownSquad: a.hasShownSquad || e === A.gr.SQUAD,
                        isTransitioning: !t && a.route === A.gr.SQUAD && e === A.gr.SIDEKICK,
                    }),
                u.useEffect(() => {
                    if (!a.isTransitioning) return;
                    let e = setTimeout(() => r((e) => ({ ...e, isTransitioning: !1 })), 1500);
                    return () => clearTimeout(e);
                }, [a.isTransitioning]),
                e)
            ) {
                case A.gr.SQUAD_TRANSITION:
                    return 5 * !!a.hasShownSquad;
                case A.gr.SQUAD:
                    return 1;
                case A.gr.SIDEKICK:
                    return a.isTransitioning ? 2 : 3;
                case A.gr.SIDEKICK_LEAVE:
                    return t ? 3 : 4;
                default:
                    return 0;
            }
        })(a, l);
    ((t = u.useRef(!0)),
        u.useEffect(() => {
            if (a !== A.gr.SIDEKICK_LEAVE) {
                t.current = !1;
                return;
            }
            if (t.current) return void i();
            if (l) return void r();
            let e = setTimeout(r, 1e3);
            return () => clearTimeout(e);
        }, [r, i, l, a]));
    let [p, m] = c,
        g = ((0, tW.tx)(p) ?? "").toLocaleUpperCase(),
        v = ((0, tW.tx)(m) ?? "").toLocaleUpperCase(),
        w = (0, tW.tx)(n?.user) ?? "",
        I = c.length < 2,
        E = a === A.gr.SIDEKICK || a === A.gr.SIDEKICK_LEAVE;
    u.useEffect(() => () => clearInterval(b.current), []);
    let j = u.useCallback(() => {
        (clearInterval(b.current),
            (b.current = setInterval(() => {
                let e = h.current?.getProperties();
                e?.twoFriends?.value === I &&
                    e?.reducedMotion?.value === l &&
                    e?.["Avatar01/Username"]?.value === w.toLocaleUpperCase() &&
                    (h.current?.play(), clearInterval(b.current));
            }, 50)));
    }, [l, w, I]);
    return (0, s.jsxs)(tv, {
        children: [
            (0, s.jsx)(am.m, {
                ref: h,
                className: aS.lW,
                fit: "contain",
                autoplay: !1,
                onLoad: j,
                withReducedMotion: "play",
                dataBinding: {
                    ...aO,
                    AnimationState: x,
                    "Avatar01/img": aM(n?.user),
                    "Avatar02/img": aM(m),
                    "Avatar03/img": aM(p),
                    "Avatar04/img": aM(n?.user),
                    "Avatar05/img": aM(d),
                    "Avatar01/Username": w.toLocaleUpperCase(),
                    "Avatar02/Username": v,
                    "Avatar03/Username": g,
                    "Avatar04/Username": w.toLocaleUpperCase(),
                    twoFriends: I,
                    reducedMotion: l,
                },
            }),
            a === A.gr.SQUAD_TRANSITION &&
                (0, s.jsx)("div", {
                    className: f()(aS.Qs, aS.kY),
                    children: (0, s.jsx)(tD, { children: et.intl.string(ee.default["6RSp5q"]) }),
                }),
            a === A.gr.SQUAD &&
                (0, s.jsx)("div", {
                    className: aS.Qs,
                    children: (0, s.jsx)(aL, {
                        title: et.intl.string(e$.default.OzY5Ns),
                        description: et.intl.string(ee.default.EqdLDd),
                    }),
                }),
            E &&
                null != n &&
                (0, s.jsxs)("div", {
                    className: f()(aS.Qs, aS.yG),
                    children: [
                        (0, s.jsxs)("div", {
                            className: aS.Cv,
                            children: [
                                (0, s.jsx)(aL, {
                                    title: et.intl.string(e$.default["+uwOHt"]),
                                    description: et.intl.string(ee.default["/ctmGw"]),
                                }),
                                (0, s.jsx)(aD, { sidekick: n }),
                            ],
                        }),
                        (0, s.jsx)(ak, { user: n.user, username: w }),
                    ],
                }),
        ],
    });
}
function aL(e) {
    let { title: t, description: a } = e;
    return (0, s.jsxs)("div", {
        className: aS.wx,
        children: [
            (0, s.jsxs)("div", {
                className: aS.R_,
                children: [
                    (0, s.jsx)(tP, { icon: ag.$, children: et.intl.string(e$.default.ZQakPR) }),
                    (0, s.jsx)(X, { variant: "display-lg", className: aS.Vy, children: t }),
                ],
            }),
            (0, s.jsx)(tD, { children: a }),
        ],
    });
}
function aD(e) {
    let { sidekick: t } = e;
    return (0, s.jsxs)("div", {
        className: aS.M1,
        children: [
            (0, s.jsxs)("div", {
                className: aS.dJ,
                children: [
                    (0, s.jsx)(eQ.ChatIcon, { size: "md", color: "currentColor" }),
                    (0, s.jsx)(X, {
                        variant: "heading-xxl/medium",
                        className: aS.wk,
                        children: Math.round(t.numMessagesSent),
                    }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: aS.dJ,
                children: [
                    (0, s.jsx)(e6.MicrophoneIcon, { size: "md", color: "currentColor" }),
                    (0, s.jsx)(X, {
                        variant: "heading-xxl/medium",
                        className: aS.wk,
                        children: Math.round(t.numVoiceMinutes),
                    }),
                ],
            }),
        ],
    });
}
function ak(e) {
    let { user: t, username: a } = e,
        [r, c] = u.useState(""),
        [n, d] = u.useState(!1),
        [o, h] = u.useState(!1),
        b = (0, aj.A)(t.id),
        _ = r.length > 0 && r.length <= 250 && !n && !o,
        x = n ? et.intl.string(et.t.fjcCk5) : et.intl.formatToPlainString(et.t["0ZQw/X"], { name: a });
    async function p() {
        if (_) {
            h(!0);
            try {
                (await (0, l.fr)(r, t.id), c(""), d(!0));
            } catch {
                (0, i.P0)({ text: et.intl.string(et.t.fEptJP), variant: "critical" });
            } finally {
                h(!1);
            }
        }
    }
    return b
        ? (0, s.jsxs)("div", {
              className: aS.OG,
              children: [
                  (0, s.jsx)("textarea", {
                      className: aS.yB,
                      value: r,
                      onChange: (e) => c(e.target.value),
                      disabled: n || o,
                      placeholder: x,
                      "aria-label": x,
                  }),
                  (0, s.jsxs)("div", {
                      className: aS.n,
                      children: [
                          (0, s.jsx)(aA.D, {
                              className: aS.KD,
                              onClick: function () {
                                  (0, aE.A)({ giftRecipient: t, analyticsLocations: [aI.A.CHECKPOINT] });
                              },
                              "aria-label": et.intl.string(et.t.Ve9Ge6),
                              children: (0, s.jsx)(av.GiftIcon, { size: "refresh_sm", color: "currentColor" }),
                          }),
                          (0, s.jsx)(aA.D, {
                              className: f()(aS.KD, { [aS.r9]: !_ }),
                              onClick: p,
                              "aria-disabled": !_,
                              "aria-label": et.intl.string(et.t.oeb1vg),
                              children: (0, s.jsx)(aw.SendMessageIcon, { size: "refresh_sm", color: "currentColor" }),
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
var aP = a(9767);
function aG(e) {
    let { games: t } = e,
        a = Math.round(t?.totalDaysPlayed ?? 0),
        r = (0, v.bD)(t?.totalDaysPlayedPercentile);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)("div", {
                className: aP.dJ,
                children: [
                    (0, s.jsx)(tP, { icon: eZ.CalendarIcon, children: et.intl.string(ee.default["4N5p4D"]) }),
                    (0, s.jsx)(t3, { value: a }),
                ],
            }),
            (0, s.jsx)(tD, {
                children:
                    null != r
                        ? et.intl.format(ee.default["4FXB/m"], {
                              numDays: a,
                              percent: r,
                              percentHook: (e, t) => (0, s.jsx)(t$, { children: e }, t),
                          })
                        : et.intl.format(ee.default.iCKjh6, { numDays: a }),
            }),
        ],
    });
}
function aU(e) {
    let { numUsersPlayedEveryDay: t } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)("div", {
                className: aP.dJ,
                children: [
                    (0, s.jsx)(tP, { icon: eZ.CalendarIcon, children: et.intl.string(ee.default["dx4+NI"]) }),
                    (0, s.jsx)(t9, { value: t }),
                ],
            }),
            (0, s.jsx)(tD, { children: et.intl.format(ee.default["N32w+2"], { numUsers: (0, v.wj)(t) }) }),
        ],
    });
}
function aH() {
    let e = (0, _.bG)([o.A], () => o.A.stats?.games),
        t = (0, _.bG)([o.A], () => (0, v.uO)(o.A.stats)),
        a = (0, _.bG)([o.A], () => o.A.globalStats?.games?.numUsersPlayedEveryDay),
        r = !t && null != a;
    return (0, s.jsx)(tv, {
        children: (0, s.jsxs)("div", {
            className: aP.kL,
            children: [
                (0, s.jsx)(K, {
                    animatedSrc:
                        "https://cdn.discordapp.com/assets/content/e3289e9a0a7faf4db23c3fefa390126fc64a09120fdb701f9dea833dddf671ef.png",
                    staticSrc:
                        "https://cdn.discordapp.com/assets/content/312abde9b19fcf85150d507de3f33096992506459b895ab3ea8d92c8f1e04a28.png",
                    className: aP.HW,
                }),
                (0, s.jsx)("div", {
                    className: aP.C,
                    children: r ? (0, s.jsx)(aU, { numUsersPlayedEveryDay: a }) : (0, s.jsx)(aG, { games: e }),
                }),
            ],
        }),
    });
}
var aF = a(364522),
    aK = a(828062);
function aB(e) {
    let { children: t } = e;
    return (0, s.jsx)(X, { variant: "display-lg", className: aK.V, children: t });
}
var aV = a(109112),
    az = a(311043),
    aW = a(883053);
function aY(e) {
    let { rank: t, className: a } = e;
    return (0, s.jsxs)($, { className: f()(aW.T, a), children: ["#", t] });
}
var aZ = a(497357);
let aq = "/assets/e74703a44e087adc.svg";
function aJ(e) {
    let {
            game: { id: t, name: a, coverImageHash: r },
            rank: i,
            label: c,
            shellImage: n,
            className: d,
        } = e,
        l = (0, _.bG)(
            [az.A],
            () =>
                az.A.getGame(t)?.getCoverURL(300) ??
                aN.Ay.getApplicationIconURL({ id: t, icon: r, size: 300, fallbackAvatar: !1 }),
        );
    return (0, s.jsxs)("div", {
        className: f()(aZ.LO, d),
        children: [
            (0, s.jsxs)("div", {
                className: aZ.Tn,
                children: [
                    (0, s.jsx)("img", { src: n, alt: "", className: aZ.vf }),
                    null != l
                        ? (0, s.jsx)("img", { src: l, alt: "", className: aZ.Qw })
                        : (0, s.jsx)("div", {
                              className: f()(aZ.Qw, aZ.uj),
                              children: (0, s.jsx)(aV._, { size: "lg" }),
                          }),
                    null != i && (0, s.jsx)(aY, { rank: i, className: aZ.Tm }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: aZ.zH,
                children: [
                    (0, s.jsx)(X, { variant: "heading-xl/medium", className: aZ.UU, lineClamp: 1, children: a }),
                    (0, s.jsx)(X, { variant: "mono-md/bold", className: aZ.Pf, children: c }),
                ],
            }),
        ],
    });
}
function aX(e) {
    let { numSessions: t, ...a } = e;
    return (0, s.jsx)(aJ, { ...a, label: Math.round(t), shellImage: aq });
}
function aQ(e) {
    let { numSessions: t, ...a } = e;
    return (0, s.jsx)(aJ, {
        ...a,
        rank: 1,
        label: Math.round(t),
        shellImage: "/assets/fbe1ab9677ed007a.svg",
        className: aZ.Ms,
    });
}
function a$(e) {
    return (0, s.jsx)(aJ, { ...e, shellImage: aq });
}
var a0 = a(842807);
let a1 = [];
function a5(e) {
    let { gameStats: t } = e,
        a = Math.round(t?.totalGamesPlayed ?? 0),
        r = (0, v.bD)(t?.totalGamesPlayedPercentile),
        i = t?.games ?? a1;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)("div", {
                className: a0.wx,
                children: [
                    (0, s.jsxs)("div", {
                        className: a0.dJ,
                        children: [
                            (0, s.jsx)(tP, {
                                icon: eJ.GameControllerIcon,
                                children: et.intl.string(ee.default.HM2fjf),
                            }),
                            (0, s.jsx)(t3, { value: a }),
                        ],
                    }),
                    (0, s.jsx)("div", {
                        className: a0.h_,
                        children: (0, s.jsx)(tD, {
                            children:
                                null != r
                                    ? et.intl.format(ee.default["hc0/yJ"], {
                                          percent: r,
                                          percentHook: (e, t) => (0, s.jsx)(t$, { children: e }, t),
                                      })
                                    : et.intl.format(ee.default.aJMJ6b, { numGames: a }),
                        }),
                    }),
                ],
            }),
            (0, s.jsx)(aF.Ip, {
                orientation: "horizontal",
                scrollbarGutter: !1,
                fade: !0,
                className: a0.ag,
                children: i.map((e, t) => {
                    let { game: a, numSessions: r } = e;
                    return 0 === t
                        ? (0, s.jsx)(aQ, { game: a, numSessions: r }, a.id)
                        : (0, s.jsx)(aX, { game: a, rank: t + 1, numSessions: r }, a.id);
                }),
            }),
        ],
    });
}
function a6(e) {
    let { gameStats: t } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)("div", {
                className: f()(a0.wx, a0.l7),
                children: [
                    (0, s.jsxs)("div", {
                        className: a0.dJ,
                        children: [
                            (0, s.jsx)(tm, { className: a0.gi }),
                            (0, s.jsx)(aB, { children: et.intl.string(ee.default.qbCgI7) }),
                        ],
                    }),
                    (0, s.jsx)("div", {
                        className: a0.h_,
                        children: (0, s.jsx)(tD, { children: et.intl.string(ee.default["0oDeiM"]) }),
                    }),
                ],
            }),
            (0, s.jsx)(aF.Ip, {
                orientation: "horizontal",
                scrollbarGutter: !1,
                fade: !0,
                className: f()(a0.ag, a0.Zs),
                children: el.Jb.map((e) => {
                    let { list: a, label: r } = e,
                        i = t[a][0];
                    return null != i ? (0, s.jsx)(a$, { game: i, label: et.intl.string(r) }, a) : null;
                }),
            }),
        ],
    });
}
function a2() {
    let e = (0, _.bG)([o.A], () => o.A.stats?.games),
        t = (0, _.bG)([o.A], () => (0, v.IH)(o.A.stats)),
        a = (0, _.bG)([o.A], () => o.A.globalStats?.games),
        r = !t && null != a;
    return (0, s.jsx)(tv, {
        children: (0, s.jsx)("div", {
            className: a0.kL,
            children: r ? (0, s.jsx)(a6, { gameStats: a }) : (0, s.jsx)(a5, { gameStats: e }),
        }),
    });
}
var a3 = a(167662);
function a4(e) {
    let { messages: t } = e,
        a = Math.round(t?.numMessagesSent ?? 0),
        r = (0, v.bD)(t?.numMessagesSentPercentile);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)("div", {
                className: a3.dJ,
                children: [
                    (0, s.jsx)(tP, { icon: eQ.ChatIcon, children: et.intl.string(e$.default.wWKySP) }),
                    (0, s.jsx)(t3, { value: a }),
                ],
            }),
            (0, s.jsx)(tD, {
                children:
                    null != r
                        ? et.intl.format(ee.default.TOMBAW, {
                              numMessages: a,
                              percent: r,
                              percentHook: (e, t) => (0, s.jsx)(t$, { children: e }, t),
                          })
                        : et.intl.format(ee.default.cYCqz8, { numMessages: a }),
            }),
        ],
    });
}
function a8(e) {
    let { numWordsSent: t } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)("div", {
                className: a3.dJ,
                children: [
                    (0, s.jsx)(tP, { icon: eQ.ChatIcon, children: et.intl.string(ee.default["2BuyVC"]) }),
                    (0, s.jsx)(t9, { value: t }),
                ],
            }),
            (0, s.jsx)(tD, {
                children: et.intl.format(ee.default.bAxEs2, {
                    numWords: (0, v.wj)(t),
                    numCopies: (0, v.wj)((0, v.yQ)(t)),
                }),
            }),
        ],
    });
}
function a9() {
    let e = (0, _.bG)([o.A], () => o.A.stats?.messages),
        t = (0, _.bG)([o.A], () => (0, v.nb)(o.A.stats)),
        a = (0, _.bG)([o.A], () => o.A.globalStats?.messages?.numWordsSent),
        r = !t && null != a;
    return (0, s.jsx)(tv, {
        children: (0, s.jsxs)("div", {
            className: a3.kL,
            children: [
                (0, s.jsx)(K, {
                    animatedSrc:
                        "https://cdn.discordapp.com/assets/content/d2d8036bb6a32967893421f9956b9e8ed30abde474f68c1a34e824205549c5a1.png",
                    staticSrc:
                        "https://cdn.discordapp.com/assets/content/1dfd8684180df4216b23f0a61617250be8fcc12bc1970ac259892f34fbdb836d.png",
                    className: a3.HW,
                }),
                (0, s.jsx)("div", {
                    className: a3.C,
                    children: r ? (0, s.jsx)(a8, { numWordsSent: a }) : (0, s.jsx)(a4, { messages: e }),
                }),
            ],
        }),
    });
}
var a7 = a(548118),
    re = a(224865);
let rt = a7.iu[a7.Ay.Sizes.XLARGE];
function ra(e) {
    let { guild: t, size: a } = e;
    return null == t.icon && a < 48
        ? (0, s.jsx)("div", {
              className: f()(re.K, re.J),
              style: { width: a, height: a },
              "aria-hidden": !0,
              children: (0, s.jsx)(q.E, { variant: "text-md/medium", children: (0, v.oW)(t.name) }),
          })
        : (0, s.jsx)(a7.Ay, {
              guild: t,
              size: a7.Ay.Sizes.XLARGE,
              iconSize: a,
              textScale: a / rt,
              className: re.K,
              style: { width: a, height: a, borderRadius: 0 },
          });
}
var rr = a(140645);
function rs(e) {
    let { numVoiceMinutes: t, numMessagesSent: a } = e;
    return (0, s.jsxs)("div", {
        className: rr.M1,
        children: [
            (0, s.jsxs)("div", {
                className: rr.dJ,
                children: [
                    (0, s.jsx)(e6.MicrophoneIcon, { size: "md", color: "currentColor" }),
                    (0, s.jsx)(X, { variant: "mono-md/bold", className: rr.Qq, children: Math.round(t) }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: rr.dJ,
                children: [
                    (0, s.jsx)(eQ.ChatIcon, { size: "md", color: "currentColor" }),
                    (0, s.jsx)(X, { variant: "mono-md/bold", className: rr.Qq, children: Math.round(a) }),
                ],
            }),
        ],
    });
}
var ri = a(972106);
let rc = [];
function rn(e) {
    let { guild: t, rank: a, iconSize: r = 100, children: i } = e;
    return (0, s.jsxs)("div", {
        className: ri.w_,
        children: [
            (0, s.jsxs)("div", {
                className: ri.jj,
                children: [
                    (0, s.jsx)(aY, { rank: a }),
                    (0, s.jsxs)("div", {
                        className: ri.gI,
                        children: [
                            (0, s.jsx)(X, {
                                variant: "heading-xxl/medium",
                                className: ri.J5,
                                lineClamp: 1,
                                children: t.name,
                            }),
                            i,
                        ],
                    }),
                ],
            }),
            (0, s.jsx)(ra, { guild: t, size: r }),
        ],
    });
}
function rd(e) {
    let { guild: t, numVoiceMinutes: a, numMessagesSent: r } = e;
    return (0, s.jsx)(rn, {
        guild: t,
        rank: 1,
        iconSize: 140,
        children: (0, s.jsx)(rs, { numVoiceMinutes: a, numMessagesSent: r }),
    });
}
function rl(e) {
    let { guilds: t } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)("div", {
                className: ri.wx,
                children: [
                    (0, s.jsxs)("div", {
                        className: ri.R_,
                        children: [
                            (0, s.jsx)(tP, { icon: e1.R, children: et.intl.string(ee.default.Mb5E6r) }),
                            (0, s.jsx)(aB, { children: et.intl.string(e$.default.F0fkrh) }),
                        ],
                    }),
                    (0, s.jsx)(tD, { children: et.intl.string(ee.default.IN1DaS) }),
                ],
            }),
            (0, s.jsx)("div", {
                className: ri.Pl,
                children: t.map((e, t) => {
                    let { guild: a, numMessagesSent: r, numVoiceMinutes: i } = e;
                    return 0 === t
                        ? (0, s.jsx)(rd, { guild: a, numMessagesSent: r ?? 0, numVoiceMinutes: i ?? 0 }, a.id)
                        : (0, s.jsx)(rn, { guild: a, rank: t + 1 }, a.id);
                }),
            }),
        ],
    });
}
function ro(e) {
    let { guilds: t } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)("div", {
                className: ri.wx,
                children: [
                    (0, s.jsxs)("div", {
                        className: ri.R_,
                        children: [
                            (0, s.jsx)(tm, { className: ri.gi }),
                            (0, s.jsx)(aB, { children: et.intl.string(e$.default.F0fkrh) }),
                        ],
                    }),
                    (0, s.jsx)(tD, { children: et.intl.string(ee.default.bhnqop) }),
                ],
            }),
            (0, s.jsx)("div", {
                className: ri.Pl,
                children: t.map((e, t) => (0, s.jsx)(rn, { guild: e, rank: t + 1 }, e.id)),
            }),
        ],
    });
}
function ru() {
    let e = (0, _.bG)([o.A], () => o.A.stats?.guilds?.guilds ?? rc),
        t = (0, _.bG)([o.A], () => o.A.globalStats?.guilds?.guildsByMembers),
        a = 0 === e.length && null != t;
    return (0, s.jsx)(tv, {
        children: (0, s.jsx)("div", {
            className: ri.kL,
            children: a ? (0, s.jsx)(ro, { guilds: t }) : (0, s.jsx)(rl, { guilds: e }),
        }),
    });
}
var rh = a(155094);
function rf(e) {
    let { icon: t, title: a, description: r } = e;
    return (0, s.jsx)(tv, {
        children: (0, s.jsxs)("div", {
            className: rh.Q,
            children: [(0, s.jsx)(tP, { icon: t, children: a }), (0, s.jsx)(tD, { children: r })],
        }),
    });
}
var rb = a(7584),
    r_ = a(33293),
    rx = a(498137),
    rp = a(192339),
    rm = a(144103),
    rg = a(834109),
    rA = a(48763);
function rv(e) {
    let { character: t, power: a } = e,
        r = (0, m.o)(t);
    return (0, s.jsxs)(rx.A, {
        cardColorPalette: r,
        size: rA.W.LG,
        children: [
            (0, s.jsx)(rp.A, {}),
            (0, s.jsx)(rg.A, { variant: "full" }),
            null != a
                ? (0, s.jsx)(rm.A, {
                      powerLevel: (0, ty.Le)(a.powerLevel),
                      powerLevelUnits: (0, ty.sX)(a.powerLevelPercentile),
                  })
                : null,
            (0, s.jsx)(r_.A, { character: t }),
        ],
    });
}
var rw = a(58410);
function rI() {
    let e = (0, _.bG)([o.A], () => o.A.stats),
        t = (0, _.bG)([o.A], () => o.A.character),
        a = e?.guilds?.guilds[0],
        r = e?.emojis?.emojis[0],
        i = e?.games?.games[0]?.game,
        c =
            null != i
                ? aN.Ay.getApplicationIconURL({ id: i.id, icon: i.iconHash, size: 40, fallbackAvatar: !1 })
                : void 0;
    return (0, s.jsx)(tv, {
        children: (0, s.jsxs)("div", {
            className: rw.z,
            children: [
                null != t ? (0, s.jsx)(rv, { character: t, power: e?.power }) : null,
                (0, s.jsxs)("div", {
                    className: rw.zH,
                    children: [
                        (0, s.jsxs)("div", {
                            className: rw.R_,
                            children: [
                                (0, s.jsx)(tP, { icon: tN.M, children: et.intl.string(e$.default.ir6nEQ) }),
                                (0, s.jsx)(X, {
                                    variant: "display-lg",
                                    className: rw.Vy,
                                    children: et.intl.string(e$.default.y4M1na),
                                }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: rw.M1,
                            children: [
                                (0, s.jsx)(rE, {
                                    label: et.intl.string(ee.default.MSrV9z),
                                    value: e?.voice?.totalVoiceMinutes,
                                }),
                                (0, s.jsx)(rE, {
                                    label: et.intl.string(ee.default.hhh11L),
                                    value: e?.messages?.numMessagesSent,
                                }),
                                (0, s.jsx)(rE, {
                                    label: et.intl.string(ee.default["f5S+pt"]),
                                    value: a?.numDaysInteracted,
                                }),
                                (0, s.jsx)(rj, {
                                    label: et.intl.string(e$.default["8XPMJj"]),
                                    icon: null != a ? (0, s.jsx)(ra, { guild: a.guild, size: 40 }) : (0, s.jsx)(rN, {}),
                                    name: null != a ? a.guild.name : et.intl.string(ee.default.GultYJ),
                                }),
                                (0, s.jsx)(rE, {
                                    label: et.intl.string(ee.default.xVSlv3),
                                    value: e?.emojis?.numEmojisSent,
                                }),
                                (0, s.jsx)(rj, {
                                    label: et.intl.string(e$.default["3sARW7"]),
                                    icon:
                                        null != r
                                            ? (0, s.jsx)(tX.A, {
                                                  emojiId: r.id,
                                                  emojiName: null == r.id ? r.name : void 0,
                                                  animated: r.animated,
                                                  alt: "",
                                                  className: rw.Kk,
                                              })
                                            : (0, s.jsx)(rN, {}),
                                    name:
                                        null == r
                                            ? et.intl.string(et.t.PoWNfe)
                                            : null == r.id
                                              ? rb.Ay.convertSurrogateToName(r.name)
                                              : `:${r.name}:`,
                                }),
                                (0, s.jsx)(rE, {
                                    label: et.intl.string(ee.default.y2Y1DD),
                                    value: e?.games?.totalDaysPlayed,
                                }),
                                (0, s.jsx)(rj, {
                                    label: et.intl.string(e$.default.RbT4Zq),
                                    icon:
                                        null != c
                                            ? (0, s.jsx)("img", { src: c, alt: "", className: f()(rw.Kk, rw.Gt) })
                                            : (0, s.jsx)(rN, {}),
                                    name: null != i ? i.name : et.intl.string(et.t.PoWNfe),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function rE(e) {
    let { label: t, value: a } = e;
    return (0, s.jsxs)("div", {
        className: rw.dJ,
        children: [
            (0, s.jsx)(X, { variant: "experimental/heading-md/semibold", children: t }),
            (0, s.jsx)(X, {
                variant: "heading-xxl/medium",
                className: rw.wk,
                children: Math.round(a ?? 0).toLocaleString(et.intl.currentLocale),
            }),
        ],
    });
}
function rj(e) {
    let { label: t, icon: a, name: r } = e;
    return (0, s.jsxs)("div", {
        className: f()(rw.dJ, rw.u4),
        children: [
            (0, s.jsx)(X, { variant: "experimental/heading-md/semibold", children: t }),
            (0, s.jsxs)("div", {
                className: rw.AS,
                children: [
                    a,
                    (0, s.jsx)(X, { variant: "heading-xl/medium", lineClamp: 1, className: rw.TJ, children: r }),
                ],
            }),
        ],
    });
}
function rN() {
    return (0, s.jsx)("div", {
        className: f()(rw.Kk, rw.Gc),
        children: (0, s.jsx)(aV._, { size: "md", color: "currentColor" }),
    });
}
var rS = a(651946);
function rT() {
    let e = (0, _.bG)([o.A], () => o.A.stats?.guilds?.guilds[0]),
        t = Math.round(e?.numDaysInteracted ?? 0),
        a = (0, v.bD)(e?.numDaysInteractedPercentile);
    return (0, s.jsx)(tv, {
        children: (0, s.jsxs)("div", {
            className: rS.kL,
            children: [
                (0, s.jsxs)("div", {
                    className: rS.wx,
                    children: [
                        (0, s.jsxs)("div", {
                            className: rS.R_,
                            children: [
                                (0, s.jsx)(tP, { icon: e1.R, children: et.intl.string(ee.default["M+a+t1"]) }),
                                (0, s.jsx)(t3, { value: t }),
                            ],
                        }),
                        (0, s.jsx)(tD, {
                            children:
                                null != a
                                    ? et.intl.format(ee.default.sIDTV1, {
                                          numDays: t,
                                          percent: a,
                                          percentHook: (e, t) => (0, s.jsx)(t$, { children: e }, t),
                                      })
                                    : et.intl.format(ee.default.nLCUQ4, { numDays: t }),
                        }),
                    ],
                }),
                null != e &&
                    (0, s.jsx)("div", {
                        className: rS.bU,
                        children: (0, s.jsxs)("div", {
                            className: rS.Nr,
                            style: { width: 360 },
                            children: [
                                (0, s.jsx)(ra, { guild: e.guild, size: 360 }),
                                (0, s.jsxs)("div", {
                                    className: rS.zH,
                                    children: [
                                        (0, s.jsx)(X, {
                                            variant: "heading-xxl/medium",
                                            className: rS.J5,
                                            lineClamp: 1,
                                            children: e.guild.name,
                                        }),
                                        (0, s.jsx)(rs, {
                                            numVoiceMinutes: e.numVoiceMinutes ?? 0,
                                            numMessagesSent: e.numMessagesSent ?? 0,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
            ],
        }),
    });
}
var rR = a(270704);
function rC(e) {
    let { voice: t } = e,
        a = Math.round(t?.totalVoiceMinutes ?? 0),
        r = (0, v.bD)(t?.totalVoiceMinutesPercentile);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)("div", {
                className: rR.dJ,
                children: [
                    (0, s.jsx)(tP, { icon: e6.MicrophoneIcon, children: et.intl.string(ee.default["3/T12E"]) }),
                    (0, s.jsx)(t3, { value: a, alignment: "center" }),
                ],
            }),
            (0, s.jsx)(tD, {
                children:
                    null != r
                        ? et.intl.format(ee.default.RqXsIs, {
                              numMinutes: a,
                              percent: r,
                              percentHook: (e, t) => (0, s.jsx)(t$, { children: e }, t),
                          })
                        : et.intl.format(ee.default.Y3poDW, { numMinutes: a }),
            }),
        ],
    });
}
function rO(e) {
    let { peakHour: t } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)("div", {
                className: rR.dJ,
                children: [
                    (0, s.jsx)(tP, { icon: e6.MicrophoneIcon, children: et.intl.string(ee.default.ZCwB8J) }),
                    (0, s.jsx)(t9, { value: t }),
                ],
            }),
            (0, s.jsx)(tD, { children: et.intl.string(ee.default.huiTne) }),
        ],
    });
}
function rM() {
    let e = (0, _.bG)([o.A], () => o.A.stats?.voice),
        t = (0, _.bG)([o.A], () => (0, v.Kr)(o.A.stats)),
        a = (0, _.bG)([o.A], () => o.A.globalStats?.voice?.peakHourUtc),
        r = (0, v.XF)(a)?.value,
        i = !t && null != r;
    return (0, s.jsxs)(tv, {
        children: [
            (0, s.jsx)(K, {
                animatedSrc:
                    "https://cdn.discordapp.com/assets/content/04746dc04eab575d0168935af2b1b3f97e2e00439f84bd0f0474276e0c5a81dc.png",
                staticSrc:
                    "https://cdn.discordapp.com/assets/content/c4c2d6b631bff3da4e4bb9afffc8f89bc9fb6f76a2fcd824f8a7af83eb7f1e6b.png",
                className: rR.Tp,
            }),
            (0, s.jsx)("div", {
                className: rR.Qs,
                children: i ? (0, s.jsx)(rO, { peakHour: r }) : (0, s.jsx)(rC, { voice: e }),
            }),
        ],
    });
}
function ry(e) {
    let { route: t, onNextStep: a, onPreviousStep: r } = e;
    if (t === A.gr.HOME) return (0, s.jsx)(tJ, { onStart: a });
    if (t === A.gr.INTRODUCTION) return (0, s.jsx)(tI, {});
    let { statsScreen: i } = (0, A.UG)(t);
    switch (i) {
        case A.oI.VOICE_INTRO:
            return (0, s.jsx)(rf, {
                icon: e6.MicrophoneIcon,
                title: et.intl.string(ee.default["/7XYsa"]),
                description: et.intl.string(ee.default["X8/G/o"]),
            });
        case A.oI.VOICE:
            return (0, s.jsx)(rM, {});
        case A.oI.MESSAGES_INTRO:
            return (0, s.jsx)(rf, {
                icon: eQ.ChatIcon,
                title: et.intl.string(ee.default["2BuyVC"]),
                description: et.intl.string(ee.default["kF+Y3a"]),
            });
        case A.oI.MESSAGES:
            return (0, s.jsx)(a9, {});
        case A.oI.SERVERS_INTRO:
            return (0, s.jsx)(rf, {
                icon: e1.R,
                title: et.intl.string(e$.default.F0fkrh),
                description: et.intl.string(ee.default.Xg82Gy),
            });
        case A.oI.SERVERS:
            return (0, s.jsx)(ru, {});
        case A.oI.TOP_SERVER:
            return (0, s.jsx)(rT, {});
        case A.oI.EMOJI_INTRO:
            return (0, s.jsx)(rf, {
                icon: Z.o,
                title: et.intl.string(ee.default.ZTDCIv),
                description: et.intl.string(ee.default.y8Sr8J),
            });
        case A.oI.EMOJI:
            return (0, s.jsx)(ax, {});
        case A.oI.GAMES_INTRO:
            return (0, s.jsx)(rf, {
                icon: eJ.GameControllerIcon,
                title: et.intl.string(ee.default.HM2fjf),
                description: et.intl.string(ee.default.LQiFqJ),
            });
        case A.oI.GAMES:
            return (0, s.jsx)(a2, {});
        case A.oI.GAME_TIME:
            return (0, s.jsx)(aH, {});
        case A.oI.SQUAD:
        case A.oI.SIDEKICK:
            return (0, s.jsx)(ay, { route: t, onNextStep: a, onPreviousStep: r });
        case A.oI.SUMMARY:
            return (0, s.jsx)(rI, {});
        case A.oI.SHARE:
            return (0, s.jsx)(tH, {});
        default:
            return null;
    }
}
var rL = a(650809),
    rD = a(866665),
    rk = a(428692);
let rP = {
    [A.s9.FACE]: { icon: e6.MicrophoneIcon, label: et.t.K3lovD },
    [A.s9.OUTFIT]: { icon: eQ.ChatIcon, label: et.t.OIgYlQ },
    [A.s9.HEADWEAR]: { icon: e1.R, label: et.t["7hB4kg"] },
    [A.s9.SHOES]: { icon: Z.o, label: et.t.sMOuuS },
    [A.s9.WEARABLE]: { icon: eJ.GameControllerIcon, label: et.t.URyqtP },
    [A.s9.AURA]: { icon: eZ.CalendarIcon, label: ee.default["4N5p4D"] },
    [A.s9.ASSEMBLED]: { icon: ag.$, label: et.t.TdEu5X },
    [A.s9.FINALIZE]: { icon: rL.PaintPaletteIcon, label: ee.default.gmMD2I },
    [A.s9.SUMMARY]: { icon: tN.M, label: e$.default.y4M1na },
};
function rG(e) {
    let {
            step: { icon: t, label: a, route: r },
            disabled: i,
            onRouteClick: c,
        } = e,
        n = et.intl.string(a);
    return (0, s.jsx)(rD.m, {
        text: n,
        ariaHidden: !0,
        children: (0, s.jsxs)(aA.D, {
            className: f()(rk.PM, rk.CD, { [rk.vk]: !i }),
            onClick: () => c(r),
            "aria-label": n,
            "aria-disabled": i,
            children: [
                (0, s.jsx)("div", { className: f()(rk.Om, rk.hZ) }),
                (0, s.jsx)(t, { size: "xs", color: "currentColor", className: rk.RQ }),
            ],
        }),
    });
}
function rU(e) {
    let { flow: t, stats: a, activeRoute: r, isRouteBlocked: i, onRouteClick: c } = e,
        n = (function (e, t) {
            let a = [];
            for (let r of N({ flow: e, stats: t })) {
                let { characterStage: e } = (0, A.UG)(r),
                    t = rP[e];
                null != t && a.at(-1)?.stage !== e && a.push({ ...t, stage: e, route: r });
            }
            return a;
        })(t, a),
        { characterStage: d } = (0, A.UG)(r),
        l = n.findIndex((e) => {
            let { stage: t } = e;
            return t === d;
        }),
        [h, f] = u.useState(l);
    l > h && f(l);
    let b = (0, _.bG)([o.A], () => o.A.isSaving);
    return -1 === l
        ? null
        : (0, s.jsx)("div", {
              className: rk.qB,
              role: "group",
              "aria-label": et.intl.formatToPlainString(ee.default.iyTfFt, { stepNumber: l + 1, stepCount: n.length }),
              children: n.map((e, t) => {
                  let { icon: a } = e;
                  return t === l
                      ? (0, s.jsx)(
                            rD.m,
                            {
                                text: et.intl.string(e.label),
                                children: (0, s.jsx)("div", {
                                    className: rk.PM,
                                    children: (0, s.jsx)(a, { size: "xs", color: "currentColor" }),
                                }),
                            },
                            e.stage,
                        )
                      : t <= h
                        ? (0, s.jsx)(rG, { step: e, disabled: b || i, onRouteClick: c }, e.stage)
                        : (0, s.jsx)(
                              "div",
                              { className: rk.PM, children: (0, s.jsx)("div", { className: rk.Om }) },
                              e.stage,
                          );
              }),
          });
}
var rH = a(125688),
    rF = a(981355),
    rK = a(399667),
    rB = a(468311),
    rV = a(706121),
    rz = a(985747),
    rW = a(118531);
let rY = {
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
function rZ(e) {
    return { name: e, url: rY[e].url };
}
let rq = rZ("tex_none"),
    rJ = {
        [rz.N.NONE]: 0,
        [rz.N.CAP]: 7,
        [rz.N.ELVEN_HEADPIECE]: 1,
        [rz.N.HEADPHONES]: 2,
        [rz.N.TEDDY_BEANIE]: 13,
        [rz.N.PIERCINGS]: 4,
        [rz.N.HEADBAND]: 5,
        [rz.N.SUNGLASSES]: 6,
        [rz.N.BANANA_PEEL]: 3,
        [rz.N.LEAF]: 8,
        [rz.N.FIRE]: 9,
        [rz.N.HALO]: 10,
        [rz.N.BRAIN]: 11,
        [rz.N.TRAFFIC_CONE]: 12,
        [rz.N.CROWN]: 14,
    },
    rX = {
        [rW.Z.NONE]: 0,
        [rW.Z.ANGEL_WINGS]: 3,
        [rW.Z.STICKERS]: 1,
        [rW.Z.TOTE]: 2,
        [rW.Z.WIZARD_STAFF]: 8,
        [rW.Z.SKATEBOARD]: 4,
        [rW.Z.DRAGON_WINGS]: 5,
        [rW.Z.TAKE_OUT_BAG]: 6,
        [rW.Z.PIXEL_WRENCH]: 7,
        [rW.Z.MECH_WINGS]: 9,
        [rW.Z.SWORD]: 10,
        [rW.Z.DEVIANT_TAIL]: 11,
        [rW.Z.MAGICAL_STAFF]: 12,
        [rW.Z.BUTTERFLY_WINGS]: 13,
        [rW.Z.CAT_BACKPACK]: 14,
    },
    rQ = {
        [rB.X.NONE]: rq,
        [rB.X.BLAZE]: rZ("tex_aura_04_blaze"),
        [rB.X.BLOSSOM]: rZ("tex_aura_01_blossom"),
        [rB.X.PRISM]: rZ("tex_aura_02_prism"),
        [rB.X.SHOCK]: rZ("tex_aura_03_shock"),
        [rB.X.FATED]: rZ("tex_aura_05_fated"),
        [rB.X.LUSTER]: rZ("tex_aura_06_luster"),
        [rB.X.BUBBLES]: rZ("tex_aura_07_bubbly"),
        [rB.X.SPOOKY]: rZ("tex_aura_08_spooky"),
        [rB.X.CURSED]: rZ("tex_aura_09_cursed"),
        [rB.X.MAGNETIC]: rZ("tex_aura_10_magnetic"),
        [rB.X.RADIOACTIVE]: rZ("tex_aura_11_radioactive"),
        [rB.X.ELEMENTAL]: rZ("tex_aura_12_elemental"),
        [rB.X.SHIMMER]: rZ("tex_aura_13_shimmer"),
        [rB.X.WITCHY]: rZ("tex_aura_14_witchy"),
    },
    r$ = {
        [rV.R.ICY]: rZ("tex_base_01_icy"),
        [rV.R.CRIMSON]: rZ("tex_base_02_crimson"),
        [rV.R.CHROME]: rZ("tex_base_03_chrome"),
        [rV.R.GALACTIC]: rZ("tex_base_04_galactic"),
        [rV.R.FOREST]: rZ("tex_base_05_forrest"),
        [rV.R.MIDNIGHT]: rZ("tex_base_06_mighnight"),
        [rV.R.GLACIER]: rZ("tex_base_07_glacier"),
        [rV.R.ORANGE]: rZ("tex_base_08_orange"),
        [rV.R.PURPLE]: rZ("tex_base_09_pink"),
        [rV.R.RED]: rZ("tex_base_10_red"),
        [rV.R.COBALT]: rZ("tex_base_11_cobalt"),
        [rV.R.X_RAY]: rZ("tex_base_12_x-ray"),
        [rV.R.LIQUID]: rZ("tex_base_13_liquid"),
        [rV.R.BUTTER]: rZ("tex_base_14_butter"),
        [rV.R.IRIDESCENT]: rZ("tex_base_15_iridescent"),
    },
    r0 = {
        [eN.r.NONE]: null,
        [eN.r.BADDIE_DEFAULT]: { riveId: 1, texture: rZ("tex_outfit_01_baddie") },
        [eN.r.TRAVELER_DEFAULT]: { riveId: 10, texture: rZ("tex_outfit_10_traveler") },
        [eN.r.STREAMER_DEFAULT]: { riveId: 3, texture: rZ("tex_outfit_03_streamer") },
        [eN.r.CAMPER_DEFAULT]: { riveId: 4, texture: rZ("tex_outfit_04_camper") },
        [eN.r.ATHLETE_DEFAULT]: { riveId: 5, texture: rZ("tex_outfit_05_athlete") },
        [eN.r.COWPOKE_DEFAULT]: { riveId: 6, texture: rZ("tex_outfit_06_cowpoke") },
        [eN.r.GOTH_DEFAULT]: { riveId: 7, texture: rZ("tex_outfit_07_goth") },
        [eN.r.ASTRONAUT_DEFAULT]: { riveId: 8, texture: rZ("tex_outfit_08_astronaut") },
        [eN.r.JESTER_DEFAULT]: { riveId: 9, texture: rZ("tex_outfit_09_jester") },
        [eN.r.TRASH_CAN_DEFAULT]: { riveId: 2, texture: rZ("tex_outfit_02_trash") },
        [eN.r.MAGE_DEFAULT]: { riveId: 11, texture: rZ("tex_outfit_11_mage") },
        [eN.r.MECH_DEFAULT]: { riveId: 12, texture: rZ("tex_outfit_12_mech") },
        [eN.r.KNIGHT_DEFAULT]: { riveId: 13, texture: rZ("tex_outfit_13_knight") },
        [eN.r.MAGICAL_DEFAULT]: { riveId: 14, texture: rZ("tex_outfit_14_magical") },
        [eN.r.BADDIE_MONOCHROME]: { riveId: 1, texture: rZ("tex_outfit_01_baddie_monochrome") },
        [eN.r.BADDIE_VIOLET]: { riveId: 1, texture: rZ("tex_outfit_01_baddie_violet") },
        [eN.r.BADDIE_PASTEL]: { riveId: 1, texture: rZ("tex_outfit_01_baddie_pastel") },
        [eN.r.BADDIE_SUNSET]: { riveId: 1, texture: rZ("tex_outfit_01_baddie_sunset") },
        [eN.r.TRAVELER_HAZE]: { riveId: 10, texture: rZ("tex_outfit_10_traveler_haze") },
        [eN.r.TRAVELER_MOSS]: { riveId: 10, texture: rZ("tex_outfit_10_traveler_moss") },
        [eN.r.TRAVELER_CHRONO]: { riveId: 10, texture: rZ("tex_outfit_10_traveler_chrono") },
        [eN.r.TRAVELER_UMBER]: { riveId: 10, texture: rZ("tex_outfit_10_traveler_umber") },
        [eN.r.STREAMER_FLAMES]: { riveId: 3, texture: rZ("tex_outfit_03_streamer_flames") },
        [eN.r.STREAMER_STRIPES]: { riveId: 3, texture: rZ("tex_outfit_03_streamer_stripes") },
        [eN.r.STREAMER_SMILEY]: { riveId: 3, texture: rZ("tex_outfit_03_streamer_smiley") },
        [eN.r.STREAMER_VINTAGE]: { riveId: 3, texture: rZ("tex_outfit_03_streamer_vintage") },
        [eN.r.CAMPER_PLAID]: { riveId: 4, texture: rZ("tex_outfit_04_camper_plaid") },
        [eN.r.CAMPER_SWAMP]: { riveId: 4, texture: rZ("tex_outfit_04_camper_swamp") },
        [eN.r.CAMPER_GLAMP]: { riveId: 4, texture: rZ("tex_outfit_04_camper_glamp") },
        [eN.r.CAMPER_AMBER]: { riveId: 4, texture: rZ("tex_outfit_04_camper_amber") },
        [eN.r.ATHLETE_BLOCKED]: { riveId: 5, texture: rZ("tex_outfit_05_athlete_blocked") },
        [eN.r.ATHLETE_FADED]: { riveId: 5, texture: rZ("tex_outfit_05_athlete_faded") },
        [eN.r.ATHLETE_CHECKERED]: { riveId: 5, texture: rZ("tex_outfit_05_athlete_checkered") },
        [eN.r.ATHLETE_LINED]: { riveId: 5, texture: rZ("tex_outfit_05_athlete_lined") },
        [eN.r.COWPOKE_ONYX]: { riveId: 6, texture: rZ("tex_outfit_06_cowpoke_onyx") },
        [eN.r.COWPOKE_STEEL]: { riveId: 6, texture: rZ("tex_outfit_06_cowpoke_steel") },
        [eN.r.COWPOKE_DENIM]: { riveId: 6, texture: rZ("tex_outfit_06_cowpoke_denim") },
        [eN.r.COWPOKE_BLUSH]: { riveId: 6, texture: rZ("tex_outfit_06_cowpoke_blush") },
        [eN.r.GOTH_SIREN]: { riveId: 7, texture: rZ("tex_outfit_07_goth_siren") },
        [eN.r.GOTH_SERPENT]: { riveId: 7, texture: rZ("tex_outfit_07_goth_serpent") },
        [eN.r.GOTH_RAVEN]: { riveId: 7, texture: rZ("tex_outfit_07_goth_raven") },
        [eN.r.GOTH_VAMP]: { riveId: 7, texture: rZ("tex_outfit_07_goth_vamp") },
        [eN.r.ASTRONAUT_STARDUST]: { riveId: 8, texture: rZ("tex_outfit_08_astronaut_stardust") },
        [eN.r.ASTRONAUT_MARTIAN]: { riveId: 8, texture: rZ("tex_outfit_08_astronaut_martian") },
        [eN.r.ASTRONAUT_SOLAR]: { riveId: 8, texture: rZ("tex_outfit_08_astronaut_solar") },
        [eN.r.ASTRONAUT_COSMIC]: { riveId: 8, texture: rZ("tex_outfit_08_astronaut_cosmic") },
        [eN.r.JESTER_CONFETTI]: { riveId: 9, texture: rZ("tex_outfit_09_jester_confetti") },
        [eN.r.JESTER_CARNIVAL]: { riveId: 9, texture: rZ("tex_outfit_09_jester_carnival") },
        [eN.r.JESTER_SUNRISE]: { riveId: 9, texture: rZ("tex_outfit_09_jester_sunrise") },
        [eN.r.JESTER_NIGHTFALL]: { riveId: 9, texture: rZ("tex_outfit_09_jester_nightfall") },
        [eN.r.TRASH_CAN_BLACKOUT]: { riveId: 2, texture: rZ("tex_outfit_02_trash_blackout") },
        [eN.r.TRASH_CAN_CAUTION]: { riveId: 2, texture: rZ("tex_outfit_02_trash_caution") },
        [eN.r.TRASH_CAN_BUBBLEGUM]: { riveId: 2, texture: rZ("tex_outfit_02_trash_bubblegum") },
        [eN.r.TRASH_CAN_TOXIC]: { riveId: 2, texture: rZ("tex_outfit_02_trash_toxic") },
        [eN.r.MAGE_SHADOW]: { riveId: 11, texture: rZ("tex_outfit_11_mage_shadow") },
        [eN.r.MAGE_DUSK]: { riveId: 11, texture: rZ("tex_outfit_11_mage_dusk") },
        [eN.r.MAGE_WILDWOOD]: { riveId: 11, texture: rZ("tex_outfit_11_mage_wildwood") },
        [eN.r.MAGE_WINTER]: { riveId: 11, texture: rZ("tex_outfit_11_mage_winter") },
        [eN.r.MECH_AERO]: { riveId: 12, texture: rZ("tex_outfit_12_mech_aero") },
        [eN.r.MECH_VIPER]: { riveId: 12, texture: rZ("tex_outfit_12_mech_viper") },
        [eN.r.MECH_ULTRAVIOLET]: { riveId: 12, texture: rZ("tex_outfit_12_mech_ultraviolet") },
        [eN.r.MECH_SANDSTORM]: { riveId: 12, texture: rZ("tex_outfit_12_mech_sandstorm") },
        [eN.r.KNIGHT_IRON]: { riveId: 13, texture: rZ("tex_outfit_13_knight_iron") },
        [eN.r.KNIGHT_RUST]: { riveId: 13, texture: rZ("tex_outfit_13_knight_rust") },
        [eN.r.KNIGHT_PETAL]: { riveId: 13, texture: rZ("tex_outfit_13_knight_petal") },
        [eN.r.KNIGHT_GLACIER]: { riveId: 13, texture: rZ("tex_outfit_13_knight_glacier") },
        [eN.r.MAGICAL_SAPPHIRE]: { riveId: 14, texture: rZ("tex_outfit_14_magical_sapphire") },
        [eN.r.MAGICAL_AMETHYST]: { riveId: 14, texture: rZ("tex_outfit_14_magical_amethyst") },
        [eN.r.MAGICAL_FROST]: { riveId: 14, texture: rZ("tex_outfit_14_magical_frost") },
        [eN.r.MAGICAL_CITRINE]: { riveId: 14, texture: rZ("tex_outfit_14_magical_citrine") },
    };
var r1 = (((r = {}).SLOT = "slot"), (r.TRAIT = "trait"), (r.LAYOUT = "layout"), (r.ALWAYS = "always"), r);
let r5 = /^tex_(aura|base_\d+|outfit)_/,
    r6 = /^tex_(headwear|shoes|wearable|face)_(\d+)_/,
    r2 = /^tex_face_([a-z]+)_/i,
    r3 = {
        tex_env_labNight_bg: ["Desktop"],
        tex_env_labNight_bg_mobileLandscape: ["MobileLandscape"],
        tex_env_labNight_bg_mobilePortrait: ["MobilePortrait"],
        tex_env_labNight_fgLeft: ["Desktop"],
        tex_env_labNight_fgRight: ["Desktop"],
        tex_env_labNight_mgBottom: ["Desktop"],
        tex_env_labNight_mgBottomMobile: ["MobilePortrait", "MobileLandscape"],
        tex_env_labNight_sky: ["Desktop"],
    },
    r4 = {
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
    r8 = { columns: 1, rows: 1 },
    r9 = { columns: 5, rows: 5 },
    r7 = { columns: 6, rows: 8 },
    se = {
        tex_aura_01_blossom: r9,
        tex_aura_02_prism: r9,
        tex_aura_03_shock: r9,
        tex_aura_04_blaze: r9,
        tex_aura_05_fated: r9,
        tex_aura_06_luster: r9,
        tex_aura_07_bubbly: r9,
        tex_aura_08_spooky: r9,
        tex_aura_09_cursed: r9,
        tex_aura_10_magnetic: r9,
        tex_aura_11_radioactive: r9,
        tex_aura_12_elemental: r9,
        tex_aura_13_shimmer: r9,
        tex_aura_14_witchy: r9,
        tex_wireframe_spritesheet: { columns: 12, rows: 6 },
        tex_wearable_10_sword_spritesheet: { columns: 5, rows: 4 },
        tex_wearable_11_deviantTail_smoke_active_spritesheet: r7,
        tex_wearable_11_deviantTail_smoke_idle_spritesheet: r7,
    };
function st(e, t) {
    let { url: a, width: r, height: s, widthAt1x: i } = rY[e];
    if (null == i) return a;
    let c = (t * i) / r;
    if (c >= 1) return a;
    let { columns: n, rows: d } = se[e] ?? r8,
        l = n * Math.round((r / n) * c),
        o = d * Math.round((s / d) * c);
    return `${a}?width=${l}&height=${o}`;
}
let sa = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14"],
    sr = {
        [A.s9.IDLE]: 0,
        [A.s9.INTRODUCTION]: 1,
        [A.s9.FACE]: 2,
        [A.s9.OUTFIT]: 3,
        [A.s9.HEADWEAR]: 4,
        [A.s9.SHOES]: 5,
        [A.s9.WEARABLE]: 6,
        [A.s9.AURA]: 7,
        [A.s9.ASSEMBLED]: 8,
        [A.s9.FINALIZE]: 8,
        [A.s9.SUMMARY]: 8,
    },
    ss = {
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
    si = { ...ss.MobilePortrait, gradientTopPosition: 55, gradientBottomPosition: 90 };
var sc = a(574381);
let sn = new Set([1]),
    sd = Object.keys(rY).map((e) => ({
        name: e,
        role: (function (e) {
            if (r5.test(e)) return { type: "slot" };
            let t = r3[e];
            if (null != t) return { type: "layout", layouts: t };
            let a = r6.exec(e);
            if (null != a) return { type: "trait", path: `${a[1]}ID`, riveId: Number(a[2]) };
            let r = r2.exec(e),
                s = null != r ? r4[r[1].toLowerCase()] : void 0;
            return null != s ? { type: "trait", path: "faceID", riveId: s } : { type: "always" };
        })(e),
        swapKey: (0, sc.un)() ? `${e}-${rY[e].riveId}` : e,
    }));
function sl(e) {
    let { faceID: t, headwearID: a, shoesID: r, wearableID: s, chapterID: i, device: c } = e;
    return u.useMemo(() => {
        var e;
        let n;
        return (
            (e = { faceID: t, headwearID: a, shoesID: r, wearableID: s }),
            (n = new Set()),
            sd.forEach((t) => {
                let { name: a, role: r } = t;
                switch (r.type) {
                    case r1.SLOT:
                        break;
                    case r1.TRAIT:
                        e[r.path] === r.riveId && n.add(a);
                        break;
                    case r1.LAYOUT:
                        r.layouts.includes(c) && n.add(a);
                        break;
                    case r1.ALWAYS:
                        ("tex_wireframe_spritesheet" !== a || sn.has(i)) && n.add(a);
                }
            }),
            n
        );
    }, [t, a, r, s, i, c]);
}
async function so(e) {
    let { textureManager: t, shownUrls: a, referencedAssets: r, isStale: s } = e,
        i = new Map();
    if (
        (Object.entries(r).forEach((e) => {
            let [t, { source: r }] = e;
            a.get(t) !== r.uri && i.set(t, r.uri);
        }),
        0 === i.size)
    )
        return;
    let c = new Map();
    if (
        (await Promise.all(
            Array.from(new Set(i.values()), async (e) => {
                let a = await t.load(e);
                null != a && c.set(e, a);
            }),
        ),
        !s())
    ) {
        let e = new Map();
        (i.forEach((t, r) => {
            let s = c.get(t);
            null != s && (e.set(r, s), a.set(r, t));
        }),
            t.swap(e));
    }
    t.release(Array.from(c.values()));
}
var su = a(971940);
async function sh(e) {
    try {
        let t = await fetch(e);
        if (!t.ok) return null;
        return await (0, su.decodeImage)(new Uint8Array(await t.arrayBuffer()));
    } catch {
        return null;
    }
}
var sf = a(168862);
function sb(e) {
    let { stage: t } = e,
        { width: a, height: r } = (0, eP.A)(rF.Y),
        i = (0, eP.A)(() => {
            let e;
            return ((e = 0.25 * Math.ceil((Math.max(a / 945, r / 532) * (0, em.A)()) / 0.25)), (0, e7.clamp)(e, 1, 2));
        }),
        c = (0, _.bG)([o.A], () => o.A.selectedCharacterTraits),
        n = (0, _.bG)([D.Ay], () => D.Ay.useReducedMotion),
        d = u.useMemo(
            () =>
                (function (e) {
                    let {
                            stage: t,
                            traits: a,
                            layout: r,
                            characterBottomInset: s,
                            stageHeight: i,
                            textureScale: c,
                        } = e,
                        { base: n, shoes: d, outfit: l, face: o, hat: u, wearable: h, aura: f } = (0, C.XI)(a),
                        b = r0[l],
                        _ = {};
                    return (
                        sa.forEach((e) => {
                            let t = Number(e) === b?.riveId ? b.texture : rq;
                            _[`outfit${e}Image`] = st(t.name, c);
                        }),
                        {
                            device: r,
                            mobileLift:
                                "MobilePortrait" !== r
                                    ? 0
                                    : null == s
                                      ? 30
                                      : Math.round(((0.75 * i - (i - s)) / i) * 1080),
                            chapterID: sr[t],
                            faceID: o,
                            shoesID: d,
                            headwearID: rJ[u],
                            wearableID: rX[h],
                            outfitID: b?.riveId ?? 0,
                            auraImage: st(rQ[f].name, c),
                            baseColorImage: st(r$[n].name, c),
                            ...("MobilePortrait" === r && t === A.s9.INTRODUCTION ? si : ss[r]),
                            ..._,
                        }
                    );
                })({
                    stage: t,
                    traits: c,
                    layout: "Desktop",
                    characterBottomInset: null,
                    stageHeight: r,
                    textureScale: i,
                }),
            [t, c, r, i],
        ),
        [l, h] = u.useState(null),
        b = l ?? d,
        x = (function (e) {
            let { visibleDataBinding: t, requestedDataBinding: a, textureScale: r } = e,
                s = (function (e) {
                    let { visibleTextureNames: t, requestedTextureNames: a } = e,
                        [r, s] = u.useState(t),
                        [i, c] = u.useState(t);
                    if (t !== i) {
                        c(t);
                        let e = new Set(r);
                        (t.forEach((t) => e.add(t)), s(e));
                    }
                    return (
                        u.useEffect(() => {
                            let e = setTimeout(() => s(t), 600);
                            return () => clearTimeout(e);
                        }, [t]),
                        u.useMemo(() => new Set([...r, ...a]), [r, a])
                    );
                })({ visibleTextureNames: sl(t), requestedTextureNames: sl(a) });
            return u.useMemo(() => {
                let e;
                return (
                    (e = {}),
                    sd.forEach((t) => {
                        let { name: a, swapKey: i } = t,
                            c = s.has(a) ? st(a, r) : rq.url;
                        e[i] = { source: { uri: c } };
                    }),
                    e
                );
            }, [s, r]);
        })({ visibleDataBinding: b, requestedDataBinding: d, textureScale: i }),
        {
            assetLoader: p,
            onLoad: m,
            textureManager: g,
        } = (function () {
            let e = u.useRef(new Map()),
                [t, a] = u.useState(null),
                r = u.useCallback((t) => !!t.isImage && t.name in rY && (e.current.set(t.name, t), !0), []);
            return {
                assetLoader: r,
                onLoad: u.useCallback(() => {
                    (a(e.current), (e.current = new Map()));
                }, []),
                textureManager: u.useMemo(
                    () =>
                        null == t
                            ? null
                            : {
                                  load: sh,
                                  swap: (e) => e.forEach((e, a) => t.get(a)?.setRenderImage(e)),
                                  release: (e) => e.forEach((e) => e.unref()),
                              },
                    [t],
                ),
            };
        })();
    (function (e) {
        let { textureManager: t, referencedAssets: a, initialReferencedAssets: r } = e,
            s = u.useRef(new Map()),
            [i, c] = u.useState(r);
        return (
            u.useEffect(() => {
                s.current = new Map(
                    Object.entries(r ?? {}).map((e) => {
                        let [t, { source: a }] = e;
                        return [t, a.uri];
                    }),
                );
            }, [t, r]),
            u.useEffect(() => {
                if (null == t) return;
                let e = !1;
                return (
                    (async () => {
                        (await so({ textureManager: t, shownUrls: s.current, referencedAssets: a, isStale: () => e }),
                            e || c(a));
                    })(),
                    () => {
                        e = !0;
                    }
                );
            }, [t, a]),
            i === a
        );
    })({ textureManager: g, referencedAssets: x }) &&
        l !== d &&
        h(d);
    let v = u.useMemo(() => ({ ...b, reducedMotion: n }), [b, n]);
    return (0, s.jsx)("div", {
        role: "img",
        "aria-label": (0, rK.O)(c),
        className: f()(sf.dw, { [sf.RK]: null != l }),
        children: (0, s.jsx)(rH.W, {
            artboard: "AB_Master",
            stateMachine: "SM_Master",
            fit: "layout",
            alignment: "center",
            assetLoader: p,
            onLoad: m,
            listenOnDocumentBody: !n,
            withReducedMotion: "play",
            dataBinding: v,
            className: sf.lW,
        }),
    });
}
var s_ = a(517782);
function sx(e) {
    let t,
        a,
        { didPlayerShareDataWithDiscord: r, onClose: i } = e;
    ((0, _.bG)([o.A], () => o.A.fetchState),
        (t = (0, _.bG)([o.A], () => o.A.stats?.games?.games)),
        (a = (0, u.useMemo)(
            () =>
                t?.map((e) => {
                    let { game: t } = e;
                    return t.id;
                }) ?? [],
            [t],
        )),
        (0, u.useEffect)(() => {
            let { fetchState: e } = o.A;
            (e === o.T.INIT || e === o.T.ERROR) && (0, l.nX)();
        }, []),
        (0, u.useEffect)(() => {
            (0, M.E)(a);
        }, [a]));
    let c = r ? A.Np.SHARED_DATA : A.Np.NO_SHARED_DATA,
        [n, d] = (function (e) {
            let [t, a] = u.useState(() =>
                (function (e) {
                    let { character: t, progress: a, stats: r } = o.A,
                        s = null != t ? A.s9.SUMMARY : a?.stage;
                    return N({ flow: e, stats: r }).find((e) => (0, A.UG)(e).characterStage === s) ?? A.gr.HOME;
                })(e),
            );
            return (
                u.useEffect(() => {
                    let { characterStage: e } = (0, A.UG)(t);
                    (0, l.l4)(e);
                }, [t]),
                [t, a]
            );
        })(c),
        { characterStage: h, statsScreen: v } = (0, A.UG)(n),
        w = n === A.gr.HOME || null != v,
        I = w || n === A.gr.INTRODUCTION,
        E = (0, _.bG)([o.A], () => (o.A.fetchState === o.T.SUCCESS ? o.A.stats : void 0)),
        j = (0, _.bG)([o.A], () => o.A.character),
        S = u.useMemo(
            () =>
                (function (e, t) {
                    switch (e) {
                        case A.gr.SUMMARY:
                        case A.gr.SHARE:
                            let a = (0, m.o)(t),
                                { primaryBackgroundColor: r, shadowColor: s } = (0, m.j)(a);
                            return {
                                ...eG,
                                "--custom-checkpoint-primary": r,
                                "--custom-checkpoint-button-border": r,
                                "--custom-checkpoint-button-shadow": s,
                                "--custom-checkpoint-background-gradient-start": r,
                            };
                        default:
                            return eG;
                    }
                })(n, j),
            [n, j],
        ),
        T = y(b),
        { blockedTraits: R } = O(),
        C = (0, g._K)(n, R),
        L = u.useCallback(
            (e) => {
                let t = (function (e) {
                    let { flow: t, stats: a, currentRoute: r, direction: s } = e,
                        i = N({ flow: t, stats: a }),
                        c = i.indexOf(r);
                    return -1 === c ? A.gr.INTRODUCTION : (i[c + s] ?? null);
                })({ flow: c, stats: E, currentRoute: n, direction: e });
                if (null == t) {
                    1 === e && i();
                    return;
                }
                (A.cy.has(n) || T(), d(t));
            },
            [n, c, i, T, d, E],
        ),
        D = u.useCallback(() => L(-1), [L]),
        P = u.useCallback(() => L(1), [L]),
        U = u.useCallback(
            (e) => {
                o.A.isSaving || C || (T(), d(e));
            },
            [C, T, d],
        );
    return (0, s.jsx)(x.N, {
        theme: k.NJ.DARK,
        children: (e) =>
            (0, s.jsxs)("div", {
                className: f()(e, s_.kL),
                style: S,
                "aria-label": et.intl.string(e$.default["CdU/PF"]),
                children: [
                    (0, s.jsx)(G, { isVisible: w }),
                    (0, s.jsx)("div", { className: f()(s_.qd, { [s_.R]: w }), children: (0, s.jsx)(sb, { stage: h }) }),
                    (0, A.Rq)(n) && (0, s.jsx)("div", { className: s_.qd, children: (0, s.jsx)(e3, { route: n }) }),
                    I &&
                        (0, s.jsx)("div", {
                            className: s_.qd,
                            children: (0, s.jsx)(ry, { route: n, onNextStep: P, onPreviousStep: D }),
                        }),
                    (0, s.jsx)(Y, { activeRoute: n }),
                    (0, s.jsxs)("div", {
                        className: s_.$s,
                        children: [
                            (0, s.jsx)(e9, {}),
                            (0, s.jsx)(H, {
                                size: "sm",
                                "aria-label": et.intl.string(et.t.cpT0Cq),
                                onClick: i,
                                children: (0, s.jsx)(p.P, { size: "xs", color: "currentColor" }),
                            }),
                        ],
                    }),
                    (0, s.jsx)(rU, { flow: c, stats: E, activeRoute: n, isRouteBlocked: C, onRouteClick: U }),
                    (0, s.jsx)(tp, { activeRoute: n, isRouteBlocked: C, onBack: D, onNext: P }),
                ],
            }),
    });
}
function sp() {
    return !!d._.hasSubscribers(tY.jej.MODAL_CLOSE) && (d._.dispatch(tY.jej.MODAL_CLOSE), !0);
}
async function sm(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        a = arguments.length > 2 ? arguments[2] : void 0,
        r = await (0, l.nX)(a);
    r === o.T.ERROR
        ? (0, i.P0)({ text: et.intl.string(et.t.fEptJP), variant: "critical" })
        : r !== o.T.FETCHING &&
          (n.default.track(tY.HAw.CHECKPOINT_STARTED, { source: e }),
          (0, c.B8)(
              (e) => {
                  let { closeLayer: a } = e;
                  return (0, s.jsx)(sx, { didPlayerShareDataWithDiscord: t, onClose: a });
              },
              { onEscape: sp },
          ));
}
