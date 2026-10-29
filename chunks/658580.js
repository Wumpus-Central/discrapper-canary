n.d(t, { D: () => rP });
var r = n(477900),
    a = n(361158),
    s = n(174459),
    l = n(625494),
    i = n(582128),
    c = n(503698),
    o = n.n(c);
let u =
    "https://cdn.discordapp.com/assets/content/ca0ec81d050b27537618a0563ff926476bc53f331bae7af46595969995dea5fb.mp3";
var d = n(17928),
    m = n(43990),
    h = n(789645),
    x = n(849874),
    g = n(627369),
    f = n(503235),
    j = n(201779),
    v = n(407905);
let A = [
        j.gr.HOME,
        j.gr.INTRODUCTION,
        j.gr.VOICE_GENERAL,
        j.gr.VOICE_FACE,
        j.gr.MESSAGES_GENERAL,
        j.gr.MESSAGES_OUTFIT,
        j.gr.SERVERS_GENERAL,
        j.gr.SERVERS_HEADWEAR,
        j.gr.EMOJI_GENERAL,
        j.gr.EMOJI_SHOES,
        j.gr.GAMES_GENERAL,
        j.gr.GAMES_WEARABLE,
        j.gr.GAME_TIME_GENERAL,
        j.gr.GAME_TIME_AURA,
        j.gr.FINALIZE_CHARACTER,
        j.gr.SUMMARY,
        j.gr.SHARE,
    ],
    p = [
        j.gr.HOME,
        j.gr.INTRODUCTION,
        j.gr.VOICE_INTRO,
        j.gr.VOICE_STATS,
        j.gr.VOICE_FACE,
        j.gr.MESSAGES_INTRO,
        j.gr.MESSAGES_STATS,
        j.gr.MESSAGES_OUTFIT,
        j.gr.SERVERS_INTRO,
        j.gr.SERVERS_STATS,
        j.gr.TOP_SERVER_STATS,
        j.gr.SERVERS_HEADWEAR,
        j.gr.EMOJI_INTRO,
        j.gr.EMOJI_STATS,
        j.gr.EMOJI_SHOES,
        j.gr.GAMES_INTRO,
        j.gr.GAMES_STATS,
        j.gr.GAMES_WEARABLE,
        j.gr.GAME_TIME_STATS,
        j.gr.GAME_TIME_AURA,
        j.gr.SQUAD_TRANSITION,
        j.gr.SQUAD,
        j.gr.SIDEKICK,
        j.gr.SIDEKICK_LEAVE,
        j.gr.FINALIZE_CHARACTER,
        j.gr.SUMMARY,
        j.gr.SHARE,
    ],
    E = {
        [j.gr.VOICE_INTRO]: (e) => !(0, v.Kr)(e),
        [j.gr.MESSAGES_INTRO]: (e) => !(0, v.nb)(e),
        [j.gr.SERVERS_INTRO]: (e) => !(0, v.jr)(e),
        [j.gr.EMOJI_INTRO]: (e) => !(0, v.y7)(e),
        [j.gr.GAMES_INTRO]: (e) => !(0, v.IH)(e),
    },
    N = {
        [j.gr.TOP_SERVER_STATS]: v.jr,
        [j.gr.SQUAD_TRANSITION]: v.$p,
        [j.gr.SQUAD]: v.$p,
        [j.gr.SIDEKICK]: v.oL,
        [j.gr.SIDEKICK_LEAVE]: v.oL,
    };
function S(e) {
    let { flow: t, stats: n } = e;
    return (t === j.Np.SHARED_DATA ? p : A).filter((e) => {
        let t = E[e];
        if (null != t) return null != n && t(n);
        let r = N[e];
        return null == r || void 0 === n || r(n);
    });
}
var C = n(719718),
    b = n(127639),
    _ = n(218546),
    R = n(287809),
    I = n(474090),
    T = n(817379);
function y() {
    let {
            selectedCharacterTraits: e,
            savedSelection: t,
            stats: n,
        } = (0, d.cf)([C.A], () => ({
            selectedCharacterTraits: C.A.selectedCharacterTraits,
            savedSelection: C.A.character,
            stats: C.A.stats,
        })),
        r = (0, d.bG)([R.default], () => (0, I.ki)(R.default.getCurrentUser())),
        a = i.useMemo(
            () =>
                Object.values(b.V).filter((a) => {
                    let s = e[a];
                    if (null == s || t?.[a] === s) return !1;
                    let l = (0, T.$C)(a, s);
                    return null != l && (l === _.K.NITRO ? !r : !(0, T.mf)(a, n).has(l));
                }),
            [r, t, e, n],
        );
    return { selectedCharacterTraits: e, blockedTraits: a };
}
var M = n(920495);
function O(e) {
    let t = (0, d.bG)([C.A], () => C.A.isMuted),
        n = i.useRef(null);
    return (
        i.useEffect(() => {
            let t = new Audio(e);
            return ((n.current = t), () => t.pause());
        }, [e]),
        i.useCallback(() => {
            let e = n.current;
            t || null == e || ((e.currentTime = 0), e.play());
        }, [t])
    );
}
var w = n(299619),
    P = n(775602),
    k = n(818348),
    L = n(11435);
function D(e) {
    let { isVisible: t } = e,
        n = i.useRef(null),
        a = (0, d.bG)([P.Ay], () => P.Ay.useReducedMotion),
        s = t && !a;
    return (
        i.useEffect(() => {
            let e = n.current;
            null != e && (s ? e.play().catch(k.tE) : e.pause());
        }, [s]),
        i.useEffect(() => {
            a && null != n.current && (n.current.currentTime = 1);
        }, [a]),
        (0, r.jsxs)("div", {
            className: o()(L.Tp, { [L.R]: !t }),
            "aria-hidden": !0,
            children: [
                (0, r.jsx)(w.A, {
                    ref: n,
                    className: L.Ki,
                    src: "https://cdn.discordapp.com/assets/content/a7a4300630ed2733eca4a8bb584c3086a66063d78e2f829faf465d96ff388a93.webm",
                    loop: !0,
                    muted: !0,
                    playsInline: !0,
                }),
                (0, r.jsx)("div", { className: L.D7 }),
            ],
        })
    );
}
var G = n(885619);
function U(e) {
    let { "aria-label": t, "aria-pressed": n, children: a, onClick: s, size: l, className: i, disabled: c = !1 } = e;
    return (0, r.jsx)("button", {
        type: "button",
        className: o()(G.button, "custom" !== l && G[l], i),
        onClick: s,
        "aria-label": t,
        "aria-pressed": n,
        disabled: c,
        children: a,
    });
}
function F(e) {
    let { className: t, ...n } = e;
    return (0, r.jsx)(U, { ...n, className: o()(G.shadow, t) });
}
function H(e) {
    let { animatedSrc: t, staticSrc: n, className: a } = e,
        s = (0, d.bG)([P.Ay], () => P.Ay.useReducedMotion);
    return (0, r.jsx)("img", { src: s ? n : t, alt: "", className: a });
}
var K = n(740281),
    V = n(766089),
    z = n(767988);
let B = { animatedSrc: V.A, staticSrc: z.A };
function Y(e) {
    let { activeRoute: t } = e,
        { animatedSrc: n, staticSrc: a } = (0, d.cf)(
            [C.A],
            () => {
                switch (t) {
                    case j.gr.SUMMARY:
                    case j.gr.SHARE:
                        let e = (0, g.o)(C.A.character),
                            { clydeLogoImage: n, clydeLogoStaticImage: r } = (0, g.j)(e);
                        return { animatedSrc: n, staticSrc: r };
                    default:
                        return B;
                }
            },
            [t],
        );
    return (0, r.jsx)(H, { animatedSrc: n, staticSrc: a, className: K.w });
}
var Q = n(756408),
    J = n(834730),
    q = n(504736);
function W(e) {
    let { children: t, className: n, ...a } = e;
    return (0, r.jsx)(J.E, { ...a, className: o()(q.Q, n), color: "none", children: t });
}
var Z = n(271427);
function X(e) {
    let { children: t, className: n, style: a } = e;
    return (0, r.jsx)(W, {
        tag: "span",
        variant: "experimental/mono-md/bold",
        className: o()(Z.T, n),
        style: a,
        children: t,
    });
}
var $ = n(763166),
    ee = n(105292),
    et = n(383931);
function en(e) {
    let { percent: t } = e;
    return (0, r.jsx)(X, { className: et.t, children: ee.intl.formatToPlainString($.default.fOGKA4, { percent: t }) });
}
var er = n(646692);
function ea(e) {
    let { icon: t, value: n, topPercent: a, children: s } = e;
    return (0, r.jsxs)("div", {
        className: er.dJ,
        children: [
            null != a && (0, r.jsx)(en, { percent: a }),
            (0, r.jsxs)("div", {
                className: er.p,
                children: [
                    (0, r.jsx)(W, {
                        variant: "heading-xxl/normal",
                        className: er.Uq,
                        children: n.toLocaleString(ee.intl.currentLocale),
                    }),
                    (0, r.jsxs)("div", {
                        className: er.Pf,
                        children: [
                            (0, r.jsx)(t, { size: "xs", color: "currentColor" }),
                            (0, r.jsx)(W, { variant: "heading-sm/extrabold", className: er.QK, children: s }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var es = n(303453);
function el(e) {
    let { earnedCount: t, totalCount: n } = e;
    return (0, r.jsx)(J.E, {
        variant: "text-md/medium",
        color: "text-subtle",
        children: ee.intl.format($.default.Vfq58K, {
            earnedCount: t,
            totalCount: n,
            countHook: (e, t) =>
                (0, r.jsx)(W, { tag: "span", variant: "experimental/mono-md/bold", className: es.U, children: e }, t),
        }),
    });
}
var ei = n(309913),
    ec = n(647093);
let eo = `linear-gradient(to right, ${ei.uz.join(", ")})`;
function eu(e) {
    let { rarity: t } = e,
        n = i.useMemo(() => ({ "--custom-checkpoint-rarity-background": t === _.K.NITRO ? eo : ei.Zy[t] }), [t]);
    return (0, r.jsx)(X, { className: ec.q, style: n, children: ee.intl.string(ei.iG[t]) });
}
var ed = n(829870);
function em(e) {
    let { asset: t, hideRarity: n } = e,
        a = (0, f.hC)(t);
    return (0, r.jsxs)("div", {
        className: ed.z,
        children: [
            (0, r.jsxs)("div", {
                className: ed.D,
                children: [
                    (0, r.jsx)(J.E, {
                        tag: "div",
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: t.getName(),
                    }),
                    !n && null != t.rarity && (0, r.jsx)(eu, { rarity: t.rarity }),
                ],
            }),
            null != a && (0, r.jsx)(J.E, { variant: "text-md/medium", color: "text-subtle", children: a }),
        ],
    });
}
var eh = n(661531),
    ex = n(403581),
    eg = n(140735),
    ef = n(835517),
    ej = n(32623),
    ev = n(559265);
function eA(e) {
    let { rarity: t } = e,
        n = i.useMemo(() => ({ "--custom-checkpoint-rarity-color": ei.Zy[t] }), [t]);
    return t === _.K.NITRO
        ? (0, r.jsx)(ex.t, { size: "custom", color: eh.A.colors.ICON_SUBTLE, className: ev.d7 })
        : (0, r.jsx)("span", { className: ev.oG, style: n });
}
function ep(e) {
    let { traitOption: t, groupName: n, isSelected: a, hideRarity: s, onSelectOption: l, disabled: c = !1 } = e,
        { trait: u, optionId: d, rarity: m, asset: h, status: x } = t,
        g = x === ej.eP.LOCKED,
        j = i.useMemo(() => {
            if (null == h) return null;
            let e = Math.round(ei.VG * (0, ef.A)());
            return `${h}?width=${e}&height=${e}`;
        }, [h]);
    return (0, r.jsxs)("label", {
        className: o()(ev.uK, { [ev.wH]: a, [ev.dv]: (0, f.C5)(t), [ev.xt]: g, [ev.Ns]: x === ej.eP.NITRO_LOCKED }),
        children: [
            (0, r.jsx)(eg.A, {
                children: (0, r.jsx)("input", {
                    type: "radio",
                    name: n,
                    checked: a,
                    disabled: c,
                    onChange: () => l(u, d),
                    "aria-label": (0, f.v2)(t, s),
                }),
            }),
            null != j && (0, r.jsx)("img", { src: j, alt: "", draggable: !1, className: ev.Sl }),
            !s && null != m && (0, r.jsx)(eA, { rarity: m }),
        ],
    });
}
var eE = n(509063);
function eN(e) {
    let {
            customizationOption: t,
            traitOptions: n,
            selectedOption: a,
            onSelectOption: s,
            disabled: l = !1,
            children: c,
        } = e,
        o = i.useId(),
        u = !(0, f.Ux)(t);
    return (0, r.jsxs)("div", {
        className: eE.Nz,
        children: [
            (0, r.jsxs)("div", {
                className: eE.fF,
                children: [
                    c,
                    (0, r.jsx)("div", {
                        role: "radiogroup",
                        "aria-label": (0, f.cq)(t),
                        className: eE.Vg,
                        children: n.map((e) =>
                            (0, r.jsx)(
                                ep,
                                {
                                    traitOption: e,
                                    groupName: o,
                                    isSelected: e.optionId === a?.optionId,
                                    hideRarity: u,
                                    onSelectOption: s,
                                    disabled: l,
                                },
                                e.optionId,
                            ),
                        ),
                    }),
                ],
            }),
            null != a && (0, r.jsx)(em, { asset: a, hideRarity: u }),
        ],
    });
}
n(321073);
var eS = n(51104),
    eC = n(67915);
function eb(e, t) {
    return e === f.v7.OUTFIT ? (null != t ? (0, T.FA)(t) : void 0) : t;
}
function e_(e) {
    let { customizationOption: t } = e,
        {
            optionIds: n,
            selectedOptionId: r,
            savedOptionId: a,
            onSelectOption: s,
        } = (function (e) {
            let { customizationOption: t, onSelectOption: n } = e,
                r = f.hw[t],
                { selectedOptionId: a, savedOptionId: s } = (0, d.cf)([C.A], () => ({
                    selectedOptionId: eb(t, C.A.selectedCharacterTraits[r]),
                    savedOptionId: eb(t, C.A.character?.[r]),
                })),
                l = i.useCallback(
                    (e, t) => {
                        t !== a && n(e, t);
                    },
                    [n, a],
                );
            return {
                optionIds: (function (e, t) {
                    switch (e) {
                        case f.v7.OUTFIT:
                            return T.ps;
                        case f.v7.OUTFIT_COLOR:
                            return (0, T.wD)(t ?? eC.r.NONE);
                        default:
                            return;
                    }
                })(t, a),
                selectedOptionId: a,
                savedOptionId: s,
                onSelectOption: l,
            };
        })({ customizationOption: t, onSelectOption: x.IB }),
        {
            traitOptions: l,
            availableTraitOptions: c,
            totalCount: o,
            earnedCount: u,
        } = (function (e) {
            let { customizationOption: t, savedOptionId: n, rarityOrder: r, optionIds: a } = e,
                s = (0, d.bG)([C.A], () => C.A.stats),
                l = (0, d.bG)([R.default], () => (0, I.ki)(R.default.getCurrentUser())),
                c = i.useMemo(() => (0, f.p8)(r), [r]);
            return i.useMemo(() => {
                let e = f.hw[t],
                    r = t === f.v7.OUTFIT_COLOR ? eS.x : eS.$[e],
                    i = (0, T.mf)(e, s),
                    o = [],
                    u = 0,
                    d = 0;
                for (let t of a ?? T.Rk[e]) {
                    let a = (0, T.$C)(e, t),
                        s = ej.eP.UNLOCKED;
                    (null == a || i.has(a) || n === t
                        ? a !== _.K.NITRO || l || (s = ej.eP.NITRO_LOCKED)
                        : (s = ej.eP.LOCKED),
                        null != a && u++,
                        null != a && s === ej.eP.UNLOCKED && d++,
                        o.push({
                            trait: e,
                            optionId: t,
                            asset: T.qM[e][t]?.thumbnail,
                            rarity: a,
                            status: s,
                            getName: () => {
                                let e = r[t];
                                return null != e ? ee.intl.string(e) : "";
                            },
                        }));
                }
                o.sort(c);
                let m = o.filter((e) => {
                    let { status: t } = e;
                    return t !== ej.eP.LOCKED;
                });
                return { traitOptions: o, availableTraitOptions: m, totalCount: u, earnedCount: d };
            }, [t, l, a, c, n, s]);
        })({ customizationOption: t, savedOptionId: a, rarityOrder: ei.FG, optionIds: n }),
        m = i.useMemo(
            () =>
                l.find((e) => {
                    let { optionId: t } = e;
                    return t === r;
                }) ?? c[0],
            [r, l, c],
        );
    return (
        !(function (e) {
            let { availableTraitOptions: t, selectedOptionId: n, onSelectOption: r, paused: a } = e,
                s = t[0],
                l = t.some((e) => e.optionId === n);
            i.useEffect(() => {
                a || null == s || l || r(s.trait, s.optionId);
            }, [s, l, r, a]);
        })({ availableTraitOptions: c, selectedOptionId: r, onSelectOption: s, paused: m?.status === ej.eP.LOCKED }),
        { traitOptions: l, selectedOption: m, totalCount: o, earnedCount: u, onSelectOption: s }
    );
}
function eR(e) {
    let { customizationOption: t } = e,
        {
            traitOptions: n,
            selectedOption: a,
            totalCount: s,
            earnedCount: l,
            onSelectOption: i,
        } = e_({ customizationOption: t });
    return (0, r.jsx)(eN, {
        customizationOption: t,
        traitOptions: n,
        selectedOption: a,
        onSelectOption: i,
        children: (0, r.jsx)(el, { earnedCount: l, totalCount: s }),
    });
}
var eI = n(71678);
function eT(e) {
    let { children: t, className: n } = e;
    return (0, r.jsx)("div", { className: o()(eI.n, n), children: t });
}
var ey = n(922704);
function eM() {
    let e = (0, d.bG)([C.A], () => C.A.stats?.emojis);
    return (0, r.jsxs)(eT, {
        children: [
            (0, r.jsx)(ea, {
                icon: Q.o,
                value: Math.round(e?.numEmojisSent ?? 0),
                topPercent: (0, v.bD)(e?.numEmojisSentPercentile),
                children: ee.intl.string(ey.default.JwFMdL),
            }),
            (0, r.jsx)(eR, { customizationOption: f.v7.SHOES }),
        ],
    });
}
var eO = n(297264),
    ew = n(265872),
    eP = n(320448),
    ek = n(315710),
    eL = n(444927);
let eD = {
    "--custom-checkpoint-primary": ei.Kr,
    "--custom-checkpoint-dark-cyan": ei.ow,
    "--custom-checkpoint-button-border": ei.ow,
    "--custom-checkpoint-button-shadow": ei.zj,
    "--custom-checkpoint-white": ei.Ve,
    "--custom-checkpoint-guild-card-background": ei.LM,
    "--custom-checkpoint-background-gradient-start": ei.bI,
};
var eG = n(580814);
function eU(e) {
    let { options: t, activeCustomizationOption: n, returnRef: a, onSelectOption: s, onClose: l } = e,
        c = i.useRef(null),
        o = i.useRef([]),
        u = (0, eL.A)(() => Math.max(t.indexOf(n), 0));
    function d(e) {
        o.current[(e + t.length) % t.length]?.focus();
    }
    return (
        (0, ek.tj)(c, { returnRef: a }),
        i.useEffect(() => {
            o.current[u]?.focus();
        }, [u]),
        (0, r.jsx)("div", {
            ref: c,
            role: "menu",
            tabIndex: -1,
            "aria-label": ee.intl.string($.default.Zl5vPW),
            className: eG.M,
            style: eD,
            onKeyDown: function (e) {
                e.stopPropagation();
                let n = o.current.indexOf(e.target);
                switch (e.key) {
                    case "ArrowDown":
                        (e.preventDefault(), d(n + 1));
                        break;
                    case "ArrowUp":
                        (e.preventDefault(), d(n - 1));
                        break;
                    case "Home":
                        (e.preventDefault(), d(0));
                        break;
                    case "End":
                        (e.preventDefault(), d(t.length - 1));
                        break;
                    case "Escape":
                    case "Tab":
                        (e.preventDefault(), l());
                }
            },
            children: t.map((e, t) =>
                (0, r.jsx)(
                    "button",
                    {
                        ref: (e) => {
                            o.current[t] = e;
                        },
                        type: "button",
                        role: "menuitemradio",
                        "aria-checked": e === n,
                        tabIndex: -1,
                        className: eG.A,
                        onClick: () => s(e),
                        onMouseEnter: (e) => e.currentTarget.focus(),
                        children: (0, r.jsx)(J.E, {
                            tag: "span",
                            variant: "heading-md/extrabold",
                            color: "none",
                            children: (0, f.cq)(e),
                        }),
                    },
                    e,
                ),
            ),
        })
    );
}
var eF = n(769909);
let eH = [f.v7.BASE, f.v7.OUTFIT_COLOR],
    eK = [f.v7.AURA, f.v7.WEARABLE, f.v7.SHOES, f.v7.HAT, f.v7.OUTFIT, f.v7.FACE];
function eV(e) {
    let { activeCustomizationOption: t, onSelectOption: n, disabled: a = !1 } = e,
        s = i.useRef(null),
        l = eK.includes(t);
    return (0, r.jsx)(ew.Y, {
        targetElementRef: s,
        position: "right",
        align: "top",
        spacing: 8,
        renderPopout: (e) => {
            let { closePopout: a } = e;
            return (0, r.jsx)(eU, {
                options: eK,
                activeCustomizationOption: t,
                returnRef: s,
                onSelectOption: (e) => {
                    (n(e), a());
                },
                onClose: a,
            });
        },
        children: (e, n) => {
            let { isShown: i } = n;
            return (0, r.jsxs)("button", {
                ...e,
                ref: s,
                type: "button",
                disabled: a,
                "aria-haspopup": "menu",
                onKeyDown: (t) => {
                    (e.onKeyDown(t), ("ArrowLeft" === t.key || "ArrowRight" === t.key) && t.stopPropagation());
                },
                className: o()(eF.Mf, eF.OS, { [eF.vu]: l || i }),
                children: [
                    (0, r.jsx)(J.E, {
                        tag: "span",
                        variant: "heading-md/extrabold",
                        color: "none",
                        children: l ? (0, f.cq)(t) : ee.intl.string($.default["iXpQc+"]),
                    }),
                    (0, r.jsx)(eP._, { size: "refresh_sm", color: "currentColor" }),
                ],
            });
        },
    });
}
function ez(e) {
    let { activeCustomizationOption: t, onSelectOption: n, disabled: a = !1 } = e,
        s = i.useId();
    return (0, r.jsxs)("div", {
        className: eF.vR,
        children: [
            (0, r.jsx)("div", {
                role: "radiogroup",
                "aria-label": ee.intl.string($.default.Zl5vPW),
                className: eF.vR,
                children: eH.map((e) => {
                    let l = e === t;
                    return (0, r.jsxs)(
                        "label",
                        {
                            className: o()(eF.Mf, { [eF.vu]: l }),
                            children: [
                                (0, r.jsx)(eg.A, {
                                    children: (0, r.jsx)("input", {
                                        type: "radio",
                                        name: s,
                                        checked: l,
                                        disabled: a,
                                        onChange: () => n(e),
                                    }),
                                }),
                                (0, r.jsx)(J.E, {
                                    tag: "span",
                                    variant: "heading-md/extrabold",
                                    color: "none",
                                    children: (0, f.cq)(e),
                                }),
                            ],
                        },
                        e,
                    );
                }),
            }),
            (0, r.jsx)(eV, { activeCustomizationOption: t, onSelectOption: n, disabled: a }),
        ],
    });
}
var eB = n(195464);
function eY() {
    let [e, t] = i.useState(f.v7.BASE),
        { traitOptions: n, selectedOption: a, onSelectOption: s } = e_({ customizationOption: e }),
        { blockedTraits: l } = y(),
        c = l.includes(f.hw[e]),
        o = (0, d.bG)([C.A], () => C.A.isSaving);
    return (0, r.jsxs)(eT, {
        className: eB.n,
        children: [
            (0, r.jsx)(eO.D, {
                variant: "heading-xl/medium",
                color: "none",
                className: eB.D,
                children: ee.intl.string($.default["q2nj/Z"]),
            }),
            (0, r.jsx)(ez, { activeCustomizationOption: e, onSelectOption: t, disabled: o || c }),
            (0, r.jsx)(eN, {
                customizationOption: e,
                traitOptions: n,
                selectedOption: a,
                onSelectOption: s,
                disabled: o,
            }),
        ],
    });
}
var eQ = n(81466);
function eJ() {
    let e = (0, d.bG)([C.A], () => C.A.stats?.games);
    return (0, r.jsxs)(eT, {
        children: [
            (0, r.jsx)(ea, {
                icon: eQ.CalendarIcon,
                value: Math.round(e?.totalDaysPlayed ?? 0),
                topPercent: (0, v.bD)(e?.totalDaysPlayedPercentile),
                children: ee.intl.string($.default.oAoYbN),
            }),
            (0, r.jsx)(eR, { customizationOption: f.v7.AURA }),
        ],
    });
}
var eq = n(687966);
function eW() {
    let e = (0, d.bG)([C.A], () => C.A.stats?.games);
    return (0, r.jsxs)(eT, {
        children: [
            (0, r.jsx)(ea, {
                icon: eq.GameControllerIcon,
                value: Math.round(e?.totalGamesPlayed ?? 0),
                topPercent: (0, v.bD)(e?.totalGamesPlayedPercentile),
                children: ee.intl.string($.default.HM2fjf),
            }),
            (0, r.jsx)(eR, { customizationOption: f.v7.WEARABLE }),
        ],
    });
}
var eZ = n(534890);
function eX() {
    let e = (0, d.bG)([C.A], () => C.A.stats?.messages);
    return (0, r.jsxs)(eT, {
        children: [
            (0, r.jsx)(ea, {
                icon: eZ.ChatIcon,
                value: Math.round(e?.numMessagesSent ?? 0),
                topPercent: (0, v.bD)(e?.numMessagesSentPercentile),
                children: ee.intl.string(ey.default.wWKySP),
            }),
            (0, r.jsx)(eR, { customizationOption: f.v7.OUTFIT }),
        ],
    });
}
var e$ = n(664121);
function e0() {
    let e = (0, d.bG)([C.A], () => C.A.stats?.guilds?.guilds[0]);
    return (0, r.jsxs)(eT, {
        children: [
            (0, r.jsx)(ea, {
                icon: e$.R,
                value: Math.round(e?.numDaysInteracted ?? 0),
                topPercent: (0, v.bD)(e?.numDaysInteractedPercentile),
                children: ee.intl.string($.default["M+a+t1"]),
            }),
            (0, r.jsx)(eR, { customizationOption: f.v7.HAT }),
        ],
    });
}
var e1 = n(831544);
function e5() {
    let e = (0, d.bG)([C.A], () => C.A.stats?.voice),
        t = Math.round(e?.totalVoiceMinutes ?? 0);
    return (0, r.jsxs)(eT, {
        children: [
            (0, r.jsx)(ea, {
                icon: e1.MicrophoneIcon,
                value: t,
                topPercent: (0, v.bD)(e?.totalVoiceMinutesPercentile),
                children: ee.intl.formatToPlainString(ey.default.UZbUtl, { numMinutes: t }),
            }),
            (0, r.jsx)(eR, { customizationOption: f.v7.FACE }),
        ],
    });
}
function e2(e) {
    let { route: t } = e;
    switch (t) {
        case j.gr.VOICE_FACE:
            return (0, r.jsx)(e5, {});
        case j.gr.MESSAGES_OUTFIT:
            return (0, r.jsx)(eX, {});
        case j.gr.SERVERS_HEADWEAR:
            return (0, r.jsx)(e0, {});
        case j.gr.EMOJI_SHOES:
            return (0, r.jsx)(eM, {});
        case j.gr.GAMES_WEARABLE:
            return (0, r.jsx)(eW, {});
        case j.gr.GAME_TIME_AURA:
            return (0, r.jsx)(eJ, {});
        case j.gr.FINALIZE_CHARACTER:
            return (0, r.jsx)(eY, {});
        default:
            return null;
    }
}
var e3 = n(358618),
    e4 = n(983851);
function e6() {
    let e = (0, d.bG)([C.A], () => C.A.isMuted),
        t = e ? e3._ : e4.H;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(U, {
                size: "sm",
                "aria-label": ee.intl.string(e ? ee.t.YqAjXy : ee.t.w4m945),
                onClick: x.K8,
                children: (0, r.jsx)(t, { size: "xs", color: "currentColor" }),
            }),
            (0, r.jsx)("audio", {
                autoPlay: !0,
                loop: !0,
                muted: e,
                children: (0, r.jsx)("source", {
                    src: "https://cdn.discordapp.com/assets/content/c341757eb38a259a9413a30e414959cad8ce8ad272ece41f4d9e45a953c02c21.mp3",
                }),
            }),
        ],
    });
}
var e8 = n(435558),
    e7 = n(477155),
    e9 = n(935286),
    te = n(858899),
    tt = n(289873),
    tn = n(621466);
function tr(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    i.useEffect(() => {
        if (!n) return (window.addEventListener("keydown", r), () => window.removeEventListener("keydown", r));
        function r(n) {
            (0, tn.vq)(n.target, HTMLTextAreaElement) || (0, tn.vq)(n.target, HTMLInputElement) || (n.key === e && t());
        }
    }, [e, t, n]);
}
var ta = n(753875);
function ts(e) {
    let { onClick: t, disabled: n = !1 } = e;
    return (
        tr("ArrowLeft", t, n),
        (0, r.jsx)(U, {
            size: "md",
            className: o()(ta.A4, ta.aX),
            onClick: t,
            disabled: n,
            "aria-label": ee.intl.string(ee.t["13/7kX"]),
            children: (0, r.jsx)(e7.r, { color: "currentColor" }),
        })
    );
}
function tl(e) {
    let { onClick: t, disabled: n = !1 } = e;
    return (
        tr("ArrowRight", t, n),
        (0, r.jsx)(F, {
            size: "md",
            className: o()(ta.A4, ta.K2),
            onClick: t,
            disabled: n,
            "aria-label": ee.intl.string(ee.t.PDTjLN),
            children: (0, r.jsx)(e9.E, { color: "currentColor" }),
        })
    );
}
function ti(e) {
    let { onBack: t, isRouteBlocked: n } = e,
        a = (0, d.bG)([C.A], () => C.A.isSaving);
    return (0, r.jsx)(ts, {
        onClick: function () {
            a || t();
        },
        disabled: a || n,
    });
}
function tc(e) {
    let { onNext: t, throttledNavigate: n, isRouteBlocked: a } = e,
        s = (0, d.bG)([C.A], () => C.A.isSaving),
        l = s || a;
    function i() {
        n(c);
    }
    async function c() {
        if (s) return;
        let e = (0, T.XI)(C.A.selectedCharacterTraits);
        (await (0, x.yE)(e)) ? t() : (0, te.P0)({ text: ee.intl.string(ee.t.fEptJP), variant: "critical" });
    }
    return (
        tr("ArrowRight", i, l),
        (0, r.jsxs)(F, {
            size: "custom",
            className: o()(ta.A4, ta.K2, ta.UN),
            onClick: i,
            disabled: l,
            "aria-label": ee.intl.string(ee.t["R3BPH+"]),
            children: [
                (0, r.jsx)(W, {
                    variant: "experimental/mono-md/normal",
                    className: ta.L8,
                    children: ee.intl.string(ee.t["R3BPH+"]),
                }),
                s
                    ? (0, r.jsx)(tt.y, { type: tt.t.SPINNING_CIRCLE_SIMPLE, className: ta.u1, itemClassName: ta.$N })
                    : (0, r.jsx)(e9.E, { size: "refresh_sm", color: "currentColor" }),
            ],
        })
    );
}
function to(e) {
    let { activeRoute: t, isRouteBlocked: n, onBack: a, onNext: s } = e,
        l = i.useMemo(() => (0, e8.throttle)((e) => e(), 500, { trailing: !1 }), []);
    switch (t) {
        case j.gr.HOME:
            return null;
        case j.gr.FINALIZE_CHARACTER:
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(ti, { onBack: () => l(a), isRouteBlocked: n }),
                    (0, r.jsx)(tc, { onNext: s, throttledNavigate: l, isRouteBlocked: n }),
                ],
            });
        default:
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(ts, { onClick: () => l(a), disabled: n }),
                    (0, r.jsx)(tl, { onClick: () => l(s), disabled: n }),
                ],
            });
    }
}
function tu(e) {
    let { className: t } = e;
    return (0, r.jsx)(H, {
        animatedSrc:
            "https://cdn.discordapp.com/assets/content/02e9ae4cdbec0b2adef22c9a5659f5c7340e399cc8932e8af6d41e62a37644ae.png",
        staticSrc:
            "https://cdn.discordapp.com/assets/content/f08be0abd0d224b5f7e1e5d6c1ef8e4d24cddcb712e2c624dcc6ea3d136818d5.png",
        className: t,
    });
}
var td = n(771639);
let tm = { "--custom-checkpoint-screen-vertical-inset": "88px" };
function th(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: td.n, style: tm, children: t });
}
var tx = n(639331);
function tg() {
    let e = (0, d.bG)([C.A], () => C.A.fetchState !== C.T.SUCCESS || null != C.A.stats);
    return (0, r.jsx)(th, {
        children: (0, r.jsxs)("div", {
            className: tx.Qs,
            children: [
                (0, r.jsxs)("div", {
                    className: tx.Ok,
                    children: ["2026", !e && (0, r.jsx)(tu, { className: tx.gi })],
                }),
                (0, r.jsxs)("div", {
                    className: tx.eH,
                    children: [
                        (0, r.jsx)(W, {
                            tag: "p",
                            variant: "heading-lg/medium",
                            children: ee.intl.string(e ? $.default["7YmUVu"] : $.default["Fyr+NW"]),
                        }),
                        !e &&
                            (0, r.jsx)(W, {
                                tag: "p",
                                variant: "heading-lg/medium",
                                children: ee.intl.string($.default["2GRr6H"]),
                            }),
                    ],
                }),
            ],
        }),
    });
}
(n(134528), n(947204));
var tf = n(675970),
    tj = n(559106),
    tv = n(366056),
    tA = n(292801),
    tp = n(155718),
    tE = n(294454),
    tN = n(489414),
    tS = n(878358),
    tC = n(383233),
    tb = n(819648),
    t_ = n(677059);
function tR(e) {
    let { children: t } = e;
    return (0, r.jsx)(W, { variant: "heading-xxl/medium", className: t_.h, children: t });
}
var tI = n(100391);
function tT(e) {
    let { icon: t, children: n } = e;
    return (0, r.jsxs)("div", {
        className: tI.D,
        children: [
            (0, r.jsx)(t, { size: "md", color: "currentColor" }),
            (0, r.jsx)(W, { variant: "heading-lg/extrabold", className: tI.Q, children: n }),
        ],
    });
}
var ty = n(456410);
function tM(e) {
    let { name: t, label: n, checked: a, onSelect: s, children: l } = e;
    return (0, r.jsx)(tj.vN, {
        within: !0,
        children: (0, r.jsxs)("label", {
            className: o()(ty.uK, { [ty.KD]: a }),
            children: [
                (0, r.jsx)(eg.A, {
                    children: (0, r.jsx)("input", { type: "radio", name: t, checked: a, onChange: s, "aria-label": n }),
                }),
                a ? (0, r.jsx)("div", { className: ty.Gt, "aria-hidden": !0 }) : null,
                (0, r.jsx)("div", { className: ty.Nr, "aria-hidden": !0, children: l }),
            ],
        }),
    });
}
function tO() {
    let e = (0, d.bG)([C.A], () => C.A.character),
        t = (0, d.bG)([C.A], () => C.A.stats),
        n = i.useId(),
        a = i.useMemo(() => {
            var n, r;
            return ((n = e),
            (r = t),
            null != n && null != r
                ? [tf.Q.CHARACTER_ONLY, tf.Q.DEFAULT, tf.Q.STATS_ONLY]
                : null != n
                  ? [tf.Q.CHARACTER_ONLY]
                  : null != r
                    ? [tf.Q.STATS_ONLY]
                    : []).map((n) => ({ cardType: n, checkpointData: (0, tb.Go)(n, e, t) }));
        }, [e, t]),
        [s, l] = i.useState(a.at(0)?.cardType),
        c = a.find((e) => {
            let { cardType: t } = e;
            return t === s;
        });
    return null == c
        ? null
        : (0, r.jsx)(th, {
              children: (0, r.jsxs)("div", {
                  className: ty.uM,
                  children: [
                      (0, r.jsxs)("div", {
                          className: ty.wx,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: ty.R_,
                                  children: [
                                      (0, r.jsx)(tT, { icon: tv.M, children: ee.intl.string(ey.default.ir6nEQ) }),
                                      (0, r.jsx)(W, {
                                          variant: "display-lg",
                                          className: ty.Vy,
                                          children: ee.intl.string(ey.default["T7cl+Y"]),
                                      }),
                                  ],
                              }),
                              (0, r.jsx)("div", {
                                  className: ty.h_,
                                  children: (0, r.jsx)(tR, { children: ee.intl.string($.default.KXDPot) }),
                              }),
                          ],
                      }),
                      (0, r.jsx)("div", {
                          role: "radiogroup",
                          "aria-label": ee.intl.string($.default.KXDPot),
                          className: ty.kR,
                          children: a.map((e) => {
                              let { cardType: t, checkpointData: a } = e;
                              return (0, r.jsx)(
                                  tM,
                                  {
                                      name: n,
                                      label: (function (e) {
                                          switch (e) {
                                              case tf.Q.CHARACTER_ONLY:
                                                  return ee.intl.string($.default.tUU3fe);
                                              case tf.Q.DEFAULT:
                                                  return ee.intl.string($.default.DZQzJn);
                                              case tf.Q.STATS_ONLY:
                                                  return ee.intl.string($.default.e2UHGT);
                                          }
                                      })(t),
                                      checked: t === c.cardType,
                                      onSelect: () => l(t),
                                      children: (0, r.jsx)(tS.A, { checkpointData: a }),
                                  },
                                  t,
                              );
                          }),
                      }),
                      (0, r.jsxs)(F, {
                          size: "custom",
                          className: ty.sY,
                          "aria-label": ee.intl.string(ee.t.I3ltXO),
                          onClick: function () {
                              if (null == c) return;
                              let { cardType: e, checkpointData: t } = c;
                              (0, tE.fO)({
                                  message: new tC.Ay({
                                      content: "",
                                      components: [
                                          { type: tp.I5.CHECKPOINT_CARD, id: (0, tN.X1)("0"), checkpointData: t },
                                      ],
                                  }),
                                  source: "checkpoint",
                                  customSendHandler: async (t, n, r) => {
                                      let { withMessage: a } = n;
                                      r(!0);
                                      try {
                                          (await (0, x.jA)(t, a ?? "", e),
                                              (0, tE.Be)(),
                                              (0, te.P0)({ text: ee.intl.string(ee.t.kwmYkt), variant: "success" }));
                                      } catch {
                                          (0, te.P0)({ text: ee.intl.string(ee.t.iufib1), variant: "critical" });
                                      } finally {
                                          r(!1);
                                      }
                                  },
                              });
                          },
                          children: [
                              (0, r.jsx)(J.E, {
                                  variant: "experimental/mono-md/bold",
                                  color: "none",
                                  className: ty.RC,
                                  children: ee.intl.string(ee.t.I3ltXO),
                              }),
                              (0, r.jsx)(tA.t, { size: "refresh_sm", color: "currentColor" }),
                          ],
                      }),
                  ],
              }),
          });
}
var tw = n(536426),
    tP = n(782134),
    tk = n(998304),
    tL = n(427262),
    tD = n(438389);
let tG = (0, tk.j5)(ei.Kr);
function tU(e) {
    let { onStart: t } = e,
        n = (0, d.bG)([R.default], () => R.default.getCurrentUser()),
        a = (0, tL.tx)(n),
        s = (0, d.bG)([P.Ay], () => P.Ay.useReducedMotion);
    return (
        tr("ArrowRight", t),
        (0, r.jsxs)(th, {
            children: [
                (0, r.jsxs)("div", {
                    className: tD.Qs,
                    children: [
                        (0, r.jsxs)("div", {
                            className: tD.wx,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: tD.Qq,
                                    children: [
                                        (0, r.jsx)(W, {
                                            variant: "display-lg",
                                            className: tD.DD,
                                            children: ee.intl.string(ey.default["CdU/PF"]),
                                        }),
                                        (0, r.jsx)(W, {
                                            variant: "heading-xxl/medium",
                                            children: ee.intl.formatToPlainString($.default.xhZ23b, { username: a }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", {
                                    className: tD.CB,
                                    children: (0, r.jsx)(tw.U, {
                                        artboard: "Entry",
                                        className: tD.lW,
                                        fit: "contain",
                                        withReducedMotion: "short-loop",
                                        dataBinding: { iconColor: tG, reducedMotion: s },
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsxs)(F, {
                            size: "custom",
                            className: tD.ni,
                            "aria-label": ee.intl.string(ee.t.I0v0Qv),
                            onClick: t,
                            children: [
                                (0, r.jsx)(tP.PlayIcon, { size: "refresh_sm", color: "currentColor" }),
                                (0, r.jsx)(W, {
                                    variant: "experimental/mono-md/normal",
                                    className: tD.qK,
                                    children: ee.intl.string(ee.t.I0v0Qv),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(W, {
                    variant: "text-md/medium",
                    className: tD.al,
                    children: ee.intl.format(ey.default.g476ZL, { name: "Exyl" }),
                }),
            ],
        })
    );
}
var tF = n(788026),
    tH = n(141881);
function tK(e) {
    let { children: t } = e;
    return (0, r.jsx)(X, { className: tH.l, children: t });
}
var tV = n(765671),
    tz = n(590642),
    tB = n(362263),
    tY = n(406956);
let tQ = (0, tk.j5)(ei.Kr);
function tJ(e) {
    let { value: t, alignment: n = "left" } = e,
        a = (0, d.bG)([P.Ay], () => P.Ay.useReducedMotion),
        [s, l] = i.useState(0),
        c = a ? t : s;
    i.useEffect(() => {
        if (a) return;
        let e = performance.now(),
            n = requestAnimationFrame(function r(a) {
                let s = Math.min((a - e) / 500, 1);
                (l(Math.round(t * s)), s < 1 && (n = requestAnimationFrame(r)));
            });
        return () => cancelAnimationFrame(n);
    }, [t, a]);
    let o = "center" === n ? tz.m : tB.w;
    return (0, r.jsxs)("div", {
        className: tY.lY,
        children: [
            (0, r.jsx)("div", { className: tY.VL, children: t }),
            (0, r.jsx)(o, {
                className: tY.lW,
                fit: "layout",
                withReducedMotion: "short-loop",
                dataBinding: { DisplayValue: c, TextColor: tQ },
            }),
            (0, r.jsx)(eg.A, { children: t.toLocaleString(ee.intl.currentLocale) }),
        ],
    });
}
var tq = n(434911);
function tW(e) {
    let { value: t } = e,
        { ref: n, width: a } = (0, tV.Ay)(),
        { ref: s, width: l } = (0, tV.Ay)(),
        i = null != a && null != l ? Math.min(1, a / l) : 1;
    return (0, r.jsxs)("div", {
        ref: n,
        className: tq.ai,
        style: { height: 200 * i },
        children: [
            (0, r.jsx)("span", { ref: s, className: o()(tq.Qq, tq.xP), children: t }),
            (0, r.jsx)(tJ, { value: t }),
        ],
    });
}
function tZ(e) {
    let { value: t } = e;
    return (0, r.jsxs)("div", {
        className: tq.dJ,
        children: [
            "number" == typeof t
                ? (0, r.jsx)(tW, { value: t })
                : (0, r.jsx)(W, { variant: "heading-xxl/normal", className: tq.Qq, children: t }),
            (0, r.jsx)(tu, { className: tq.gi }),
        ],
    });
}
(n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162));
var tX = n(445199),
    t$ = n(205524),
    t0 = n(690521),
    t1 = n(152321);
let t5 = [0, 0, 2],
    t2 = [0, 1, 0],
    t3 = [0, 0, 0],
    t4 = `
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
    t6 = `
precision mediump float;

varying vec2 v_texcoord;
varying highp vec3 v_lighting;

uniform sampler2D u_texture;

void main() {
  highp vec4 texelColor = texture2D(u_texture, v_texcoord);
  gl_FragColor = vec4(texelColor.rgb * v_lighting, texelColor.a);
}
`,
    t8 = [
        -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5,
        -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5,
        0.5, 0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, -0.5,
        -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5,
        -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5,
        -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5,
    ],
    t7 = [
        0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0,
        1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0,
    ],
    t9 = [
        0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
        1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
        -1, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
        1, 0, 0,
    ];
function ne(e) {
    let t,
        { emoji: n } = e,
        [a, s] = i.useState(null),
        [l, c] = i.useState(null),
        u = i.useRef(new Image()),
        [m, h] = i.useState(null),
        [x, g] = i.useState(!1),
        f = i.useRef(0),
        j = i.useRef(0),
        v = i.useRef(45),
        A = i.useRef(45),
        p = (0, d.bG)([P.Ay], () => P.Ay.useReducedMotion),
        E = 70 * !p,
        N = 40 * !p,
        S = i.useRef(E),
        C = i.useRef(N),
        b = i.useRef(!1),
        _ = i.useRef(0),
        R = i.useRef(0);
    ((t = i.useRef(null)),
        i.useEffect(() => {
            if (null == t.current || null == l) return;
            let e = t.current,
                n = e.createTexture();
            return (
                e.bindTexture(e.TEXTURE_2D, n),
                e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, l),
                e.generateMipmap(e.TEXTURE_2D),
                () => e.deleteTexture(n)
            );
        }, [l, m]),
        i.useEffect(() => {
            let e,
                n = 0,
                r = a?.getContext("webgl");
            if (null == r || null == a || null == l) return;
            t.current = r;
            let s = r.createShader(r.VERTEX_SHADER),
                i = r.createShader(r.FRAGMENT_SHADER);
            if (null == s || null == i) return;
            if (
                (r.shaderSource(s, t4),
                r.shaderSource(i, t6),
                r.compileShader(s),
                !r.getShaderParameter(s, r.COMPILE_STATUS))
            )
                return void console.error("ERROR compiling vertex shader!", r.getShaderInfoLog(s));
            if ((r.compileShader(i), !r.getShaderParameter(i, r.COMPILE_STATUS)))
                return void console.error("ERROR compiling fragment shader!", r.getShaderInfoLog(i));
            let c = r.createProgram();
            if (
                (r.attachShader(c, s), r.attachShader(c, i), r.linkProgram(c), !r.getProgramParameter(c, r.LINK_STATUS))
            )
                return void console.error("ERROR linking program!", r.getProgramInfoLog(c));
            if ((r.validateProgram(c), !r.getProgramParameter(c, r.VALIDATE_STATUS)))
                return void console.error("ERROR validating program!", r.getProgramInfoLog(c));
            let o = r.getAttribLocation(c, "a_position"),
                u = r.getAttribLocation(c, "a_texcoord"),
                d = r.getUniformLocation(c, "u_matrix"),
                m = r.getUniformLocation(c, "u_texture"),
                h = r.getAttribLocation(c, "a_vertexNormal"),
                x = r.getUniformLocation(c, "u_normalMatrix"),
                g = r.createBuffer();
            (r.bindBuffer(r.ARRAY_BUFFER, g),
                r.bufferData(r.ARRAY_BUFFER, new Float32Array(t9), r.STATIC_DRAW),
                r.vertexAttribPointer(h, 3, r.FLOAT, !1, 0, 0),
                r.enableVertexAttribArray(h));
            let f = r.createBuffer();
            (r.bindBuffer(r.ARRAY_BUFFER, f),
                (e = new Float32Array(t8)),
                r.bufferData(r.ARRAY_BUFFER, e, r.STATIC_DRAW));
            let j = r.createBuffer();
            (r.bindBuffer(r.ARRAY_BUFFER, j), r.bufferData(r.ARRAY_BUFFER, new Float32Array(t7), r.STATIC_DRAW));
            let p = tX.DF(60);
            return (
                (n = requestAnimationFrame(function e() {
                    if (null == r || null == a) return;
                    (r.viewport(0, 0, r.canvas.width, r.canvas.height), r.enable(r.CULL_FACE), r.enable(r.DEPTH_TEST));
                    let t = tX.DF(v.current),
                        s = tX.DF(A.current);
                    (r.clear(r.COLOR_BUFFER_BIT | r.DEPTH_BUFFER_BIT),
                        r.useProgram(c),
                        r.enableVertexAttribArray(o),
                        r.bindBuffer(r.ARRAY_BUFFER, f),
                        r.vertexAttribPointer(o, 3, r.FLOAT, !1, 0, 0),
                        r.enableVertexAttribArray(u),
                        r.bindBuffer(r.ARRAY_BUFFER, j),
                        r.vertexAttribPointer(u, 2, r.FLOAT, !1, 0, 0));
                    let l = a.clientWidth / a.clientHeight,
                        i = t$.fN(t$.vt(), p, l, 1, 2e3),
                        h = t$.t5(t$.vt(), t5, t3, t2),
                        g = t$.lw(t$.vt(), i, h),
                        E = t$.vt();
                    (t$.eL(E, E, t), t$.Z8(E, E, s));
                    let N = t$.lw(t$.vt(), g, E),
                        S = t$.vt();
                    (t$.B8(S, E),
                        t$.mg(S, S),
                        r.uniformMatrix4fv(x, !1, S),
                        r.uniformMatrix4fv(d, !1, N),
                        r.uniform1i(m, 0),
                        r.drawArrays(r.TRIANGLES, 0, 36),
                        (n = requestAnimationFrame(e)));
                })),
                () => cancelAnimationFrame(n)
            );
        }, [v, A, a, l]));
    let I = i.useCallback(() => {
        let e = l?.getContext("2d");
        null != l &&
            null != e &&
            ((e.fillStyle = "black"),
            e.fillRect(0, 0, l.width, l.height),
            e.drawImage(u.current, 0, 0, l.width, l.height),
            (e.fillStyle = ei.qn),
            e.fillRect(0, 0, l.width, 1),
            e.fillRect(0, 0, 1, l.height),
            e.fillRect(0, l.height - 1, l.width, 1),
            e.fillRect(l.width - 1, 0, 1, l.height),
            h(n),
            g(!0));
    }, [n, u, l]);
    (i.useEffect(() => {
        null != l &&
            ((u.current.crossOrigin = "anonymous"), (u.current.src = (0, t0.Ez)(n, 256)), (u.current.onload = I));
    }, [n, I, u, l]),
        i.useEffect(
            () => (
                !(function e(t) {
                    let n = 0.001 * t,
                        r = Math.min(n - j.current, 0.1);
                    if (((A.current += -C.current * r), (v.current += -S.current * r), !b.current)) {
                        if (Math.abs(S.current) > E) {
                            let e = S.current > 0 ? 1 : -1;
                            S.current -= 2 * e * window.devicePixelRatio;
                        }
                        if (Math.abs(C.current) > N) {
                            let e = C.current > 0 ? 1 : -1;
                            C.current -= 2 * e * window.devicePixelRatio;
                        }
                    }
                    ((j.current = n), (f.current = requestAnimationFrame(e)));
                })(0),
                () => cancelAnimationFrame(f.current)
            ),
            [E, N],
        ));
    let T = i.useCallback((e) => {
            ((b.current = !0), (S.current = 0), (C.current = 0), (_.current = e.clientX), (R.current = e.clientY));
        }, []),
        y = i.useCallback((e) => {
            if (b.current) {
                let t = (e.clientX - _.current) / window.devicePixelRatio;
                ((S.current = -((e.clientY - R.current) / window.devicePixelRatio) * (100 / window.devicePixelRatio)),
                    (C.current = -t * (100 / window.devicePixelRatio)),
                    (_.current = e.clientX),
                    (R.current = e.clientY));
            }
        }, []),
        M = i.useCallback(() => {
            b.current = !1;
        }, []);
    return (
        i.useEffect(
            () => (
                window.addEventListener("mouseup", M),
                window.addEventListener("mousemove", y),
                () => {
                    (window.removeEventListener("mouseup", M), window.removeEventListener("mousemove", y));
                }
            ),
            [y, M],
        ),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("canvas", {
                    className: o()(t1.Ji, { [t1.q4]: !x }),
                    ref: s,
                    height: 512,
                    width: 512,
                    onMouseDown: T,
                }),
                (0, r.jsx)("canvas", { className: t1.R, ref: c, height: 256, width: 256 }),
            ],
        })
    );
}
var nt = n(826820);
let nn = [];
function nr(e) {
    let { emojiStats: t } = e,
        n = Math.round(t?.numEmojisSent ?? 0),
        a = (0, v.bD)(t?.numEmojisSentPercentile);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: nt.dJ,
                children: [
                    (0, r.jsx)(tT, { icon: Q.o, children: ee.intl.string(ey.default.JwFMdL) }),
                    (0, r.jsx)(tJ, { value: n }),
                ],
            }),
            (0, r.jsx)(tR, {
                children:
                    null != a
                        ? ee.intl.format($.default.heQSO4, {
                              numEmojis: n,
                              percent: a,
                              percentHook: (e, t) => (0, r.jsx)(tK, { children: e }, t),
                          })
                        : ee.intl.format($.default.Klji1b, { numEmojis: n }),
            }),
        ],
    });
}
function na(e) {
    let { numEmojisSent: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: nt.dJ,
                children: [
                    (0, r.jsx)(tT, { icon: Q.o, children: ee.intl.string(ey.default.JwFMdL) }),
                    (0, r.jsx)(tZ, { value: t }),
                ],
            }),
            (0, r.jsx)(tR, { children: ee.intl.format($.default["660/Rr"], { numEmojis: (0, v.wj)(t) }) }),
        ],
    });
}
function ns() {
    let e = (0, d.bG)([C.A], () => C.A.stats?.emojis),
        t = (0, d.bG)([C.A], () => (0, v.y7)(C.A.stats)),
        n = (0, d.bG)([C.A], () => C.A.globalStats?.emojis),
        a = !t && null != n,
        s = (a ? n.emojis : e?.emojis) ?? nn,
        [l, c] = i.useState(0),
        o = s[l],
        m = O(u);
    return (0, r.jsx)(th, {
        children: (0, r.jsxs)("div", {
            className: nt.kL,
            children: [
                (0, r.jsx)("div", { className: nt.KY, children: null != o && (0, r.jsx)(ne, { emoji: o }) }),
                (0, r.jsxs)("div", {
                    className: nt.C,
                    children: [
                        a ? (0, r.jsx)(na, { numEmojisSent: n.numEmojisSent }) : (0, r.jsx)(nr, { emojiStats: e }),
                        (0, r.jsx)("div", {
                            className: nt.gm,
                            children: s.map((e, t) =>
                                (0, r.jsx)(
                                    nl,
                                    {
                                        emoji: e,
                                        rank: t + 1,
                                        isActive: t === l,
                                        onClick: () => {
                                            (m(), c(t));
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
function nl(e) {
    let { emoji: t, rank: n, isActive: a, onClick: s } = e,
        l = !(0, d.bG)([P.Ay], () => P.Ay.useReducedMotion) && !0 === t.animated;
    return (0, r.jsxs)(U, {
        size: "custom",
        className: nt._X,
        onClick: s,
        "aria-label": ee.intl.formatToPlainString($.default["S5+pRg"], { emojiName: t.name, rank: n }),
        "aria-pressed": a,
        children: [
            (0, r.jsx)(tF.A, { className: nt.Zg, emojiId: t.id, emojiName: t.name, animated: l }),
            (0, r.jsx)(W, { variant: "experimental/mono-md/bold", className: nt.Tm, children: n }),
        ],
    });
}
var ni = n(236177),
    nc = n(214947),
    no = n(939249),
    nu = n(597770),
    nd = n(559647),
    nm = n(793574),
    nh = n(95369),
    nx = n(570287),
    ng = n(486020),
    nf = n(801305);
let nj = [],
    nv = (0, tk.j5)(ei.Kr),
    nA = { r: 0, g: 0, b: 0, a: 1 },
    np = {
        "Avatar01/Stroke": nA,
        "Avatar01/Fill": nv,
        "Avatar02/Stroke": nA,
        "Avatar02/Fill": nv,
        "Avatar03/Stroke": nA,
        "Avatar03/Fill": nv,
        "Avatar04/Stroke": nA,
        "Avatar04/Fill": nv,
        "Avatar05/Stroke": nA,
        "Avatar05/Fill": nv,
        ConnectorColor: nv,
    };
function nE(e) {
    return null != e ? ng.Ay.getUserAvatarURL(e, !1, 160, "png") : void 0;
}
function nN(e) {
    let t,
        { route: n, onNextStep: a, onPreviousStep: s } = e,
        l = (0, d.bG)([C.A], () => C.A.stats?.users ?? nj),
        c = (0, d.bG)([C.A], () => C.A.stats?.sidekick),
        u = (0, d.bG)([R.default], () => R.default.getCurrentUser()),
        m = (0, d.bG)([P.Ay], () => P.Ay.useReducedMotion),
        h = i.useRef(null),
        x = i.useRef(void 0),
        g = (function (e, t) {
            let [n, r] = i.useState({ route: e, hasShownSquad: e === j.gr.SQUAD, isTransitioning: !1 });
            switch (
                (n.route !== e &&
                    r({
                        route: e,
                        hasShownSquad: n.hasShownSquad || e === j.gr.SQUAD,
                        isTransitioning: !t && n.route === j.gr.SQUAD && e === j.gr.SIDEKICK,
                    }),
                i.useEffect(() => {
                    if (!n.isTransitioning) return;
                    let e = setTimeout(() => r((e) => ({ ...e, isTransitioning: !1 })), 1500);
                    return () => clearTimeout(e);
                }, [n.isTransitioning]),
                e)
            ) {
                case j.gr.SQUAD_TRANSITION:
                    return 5 * !!n.hasShownSquad;
                case j.gr.SQUAD:
                    return 1;
                case j.gr.SIDEKICK:
                    return n.isTransitioning ? 2 : 3;
                case j.gr.SIDEKICK_LEAVE:
                    return t ? 3 : 4;
                default:
                    return 0;
            }
        })(n, m);
    ((t = i.useRef(!0)),
        i.useEffect(() => {
            if (n !== j.gr.SIDEKICK_LEAVE) {
                t.current = !1;
                return;
            }
            if (t.current) return void s();
            if (m) return void a();
            let e = setTimeout(a, 1e3);
            return () => clearTimeout(e);
        }, [a, s, m, n]));
    let [f, v] = l,
        A = ((0, tL.tx)(f) ?? "").toLocaleUpperCase(),
        p = ((0, tL.tx)(v) ?? "").toLocaleUpperCase(),
        E = (0, tL.tx)(c?.user) ?? "",
        N = l.length < 2,
        S = n === j.gr.SIDEKICK || n === j.gr.SIDEKICK_LEAVE;
    i.useEffect(() => () => clearInterval(x.current), []);
    let b = i.useCallback(() => {
        (clearInterval(x.current),
            (x.current = setInterval(() => {
                let e = h.current?.getProperties();
                e?.twoFriends?.value === N &&
                    e?.reducedMotion?.value === m &&
                    e?.["Avatar01/Username"]?.value === E.toLocaleUpperCase() &&
                    (h.current?.play(), clearInterval(x.current));
            }, 50)));
    }, [m, E, N]);
    return (0, r.jsxs)(th, {
        children: [
            (0, r.jsx)(ni.m, {
                ref: h,
                className: nf.lW,
                fit: "contain",
                autoplay: !1,
                onLoad: b,
                withReducedMotion: "play",
                dataBinding: {
                    ...np,
                    AnimationState: g,
                    "Avatar01/img": nE(c?.user),
                    "Avatar02/img": nE(v),
                    "Avatar03/img": nE(f),
                    "Avatar04/img": nE(c?.user),
                    "Avatar05/img": nE(u),
                    "Avatar01/Username": E.toLocaleUpperCase(),
                    "Avatar02/Username": p,
                    "Avatar03/Username": A,
                    "Avatar04/Username": E.toLocaleUpperCase(),
                    twoFriends: N,
                    reducedMotion: m,
                },
            }),
            n === j.gr.SQUAD_TRANSITION &&
                (0, r.jsx)("div", {
                    className: o()(nf.Qs, nf.kY),
                    children: (0, r.jsx)(tR, { children: ee.intl.string($.default["6RSp5q"]) }),
                }),
            n === j.gr.SQUAD &&
                (0, r.jsx)("div", {
                    className: nf.Qs,
                    children: (0, r.jsx)(nS, {
                        title: ee.intl.string(ey.default.OzY5Ns),
                        description: ee.intl.string($.default.EqdLDd),
                    }),
                }),
            S &&
                null != c &&
                (0, r.jsxs)("div", {
                    className: o()(nf.Qs, nf.yG),
                    children: [
                        (0, r.jsxs)("div", {
                            className: nf.Cv,
                            children: [
                                (0, r.jsx)(nS, {
                                    title: ee.intl.string(ey.default["+uwOHt"]),
                                    description: ee.intl.string($.default["/ctmGw"]),
                                }),
                                (0, r.jsx)(nC, { sidekick: c }),
                            ],
                        }),
                        (0, r.jsx)(nb, { user: c.user, username: E }),
                    ],
                }),
        ],
    });
}
function nS(e) {
    let { title: t, description: n } = e;
    return (0, r.jsxs)("div", {
        className: nf.wx,
        children: [
            (0, r.jsxs)("div", {
                className: nf.R_,
                children: [
                    (0, r.jsx)(tT, { icon: nc.$, children: ee.intl.string(ey.default.ZQakPR) }),
                    (0, r.jsx)(W, { variant: "display-lg", className: nf.Vy, children: t }),
                ],
            }),
            (0, r.jsx)(tR, { children: n }),
        ],
    });
}
function nC(e) {
    let { sidekick: t } = e;
    return (0, r.jsxs)("div", {
        className: nf.M1,
        children: [
            (0, r.jsxs)("div", {
                className: nf.dJ,
                children: [
                    (0, r.jsx)(eZ.ChatIcon, { size: "md", color: "currentColor" }),
                    (0, r.jsx)(W, {
                        variant: "heading-xxl/normal",
                        className: nf.wk,
                        children: Math.round(t.numMessagesSent),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: nf.dJ,
                children: [
                    (0, r.jsx)(e1.MicrophoneIcon, { size: "md", color: "currentColor" }),
                    (0, r.jsx)(W, {
                        variant: "heading-xxl/normal",
                        className: nf.wk,
                        children: Math.round(t.numVoiceMinutes),
                    }),
                ],
            }),
        ],
    });
}
function nb(e) {
    let { user: t, username: n } = e,
        [a, s] = i.useState(""),
        [l, c] = i.useState(!1),
        [u, d] = i.useState(!1),
        m = (0, nx.A)(t.id),
        h = a.length > 0 && a.length <= 250 && !l && !u,
        g = l ? ee.intl.string(ee.t.fjcCk5) : ee.intl.formatToPlainString(ee.t["0ZQw/X"], { name: n });
    async function f() {
        if (h) {
            d(!0);
            try {
                (await (0, x.fr)(a, t.id), s(""), c(!0));
            } catch {
                (0, te.P0)({ text: ee.intl.string(ee.t.fEptJP), variant: "critical" });
            } finally {
                d(!1);
            }
        }
    }
    return m
        ? (0, r.jsxs)("div", {
              className: nf.OG,
              children: [
                  (0, r.jsx)("textarea", {
                      className: nf.yB,
                      value: a,
                      onChange: (e) => s(e.target.value),
                      disabled: l || u,
                      placeholder: g,
                      "aria-label": g,
                  }),
                  (0, r.jsxs)("div", {
                      className: nf.n,
                      children: [
                          (0, r.jsx)(no.D, {
                              className: nf.KD,
                              onClick: function () {
                                  (0, nh.A)({ giftRecipient: t, analyticsLocations: [nm.A.CHECKPOINT] });
                              },
                              "aria-label": ee.intl.string(ee.t.Ve9Ge6),
                              children: (0, r.jsx)(nu.GiftIcon, { size: "refresh_sm", color: "currentColor" }),
                          }),
                          (0, r.jsx)(no.D, {
                              className: o()(nf.KD, { [nf.r9]: !h }),
                              onClick: f,
                              "aria-disabled": !h,
                              "aria-label": ee.intl.string(ee.t.oeb1vg),
                              children: (0, r.jsx)(nd.SendMessageIcon, { size: "refresh_sm", color: "currentColor" }),
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
var n_ = n(9767);
function nR(e) {
    let { games: t } = e,
        n = Math.round(t?.totalDaysPlayed ?? 0),
        a = (0, v.bD)(t?.totalDaysPlayedPercentile);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: n_.dJ,
                children: [
                    (0, r.jsx)(tT, { icon: eQ.CalendarIcon, children: ee.intl.string($.default.oAoYbN) }),
                    (0, r.jsx)(tJ, { value: n }),
                ],
            }),
            (0, r.jsx)(tR, {
                children:
                    null != a
                        ? ee.intl.format($.default["4FXB/m"], {
                              numDays: n,
                              percent: a,
                              percentHook: (e, t) => (0, r.jsx)(tK, { children: e }, t),
                          })
                        : ee.intl.format($.default.iCKjh6, { numDays: n }),
            }),
        ],
    });
}
function nI(e) {
    let { numUsersPlayedEveryDay: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: n_.dJ,
                children: [
                    (0, r.jsx)(tT, { icon: eQ.CalendarIcon, children: ee.intl.string($.default["dx4+NI"]) }),
                    (0, r.jsx)(tZ, { value: t }),
                ],
            }),
            (0, r.jsx)(tR, { children: ee.intl.format($.default["N32w+2"], { numUsers: (0, v.wj)(t) }) }),
        ],
    });
}
function nT() {
    let e = (0, d.bG)([C.A], () => C.A.stats?.games),
        t = (0, d.bG)([C.A], () => (0, v.uO)(C.A.stats)),
        n = (0, d.bG)([C.A], () => C.A.globalStats?.games?.numUsersPlayedEveryDay),
        a = !t && null != n;
    return (0, r.jsx)(th, {
        children: (0, r.jsxs)("div", {
            className: n_.kL,
            children: [
                (0, r.jsx)(H, {
                    animatedSrc:
                        "https://cdn.discordapp.com/assets/content/e3289e9a0a7faf4db23c3fefa390126fc64a09120fdb701f9dea833dddf671ef.png",
                    staticSrc:
                        "https://cdn.discordapp.com/assets/content/312abde9b19fcf85150d507de3f33096992506459b895ab3ea8d92c8f1e04a28.png",
                    className: n_.HW,
                }),
                (0, r.jsx)("div", {
                    className: n_.C,
                    children: a ? (0, r.jsx)(nI, { numUsersPlayedEveryDay: n }) : (0, r.jsx)(nR, { games: e }),
                }),
            ],
        }),
    });
}
var ny = n(364522),
    nM = n(828062);
function nO(e) {
    let { children: t } = e;
    return (0, r.jsx)(W, { variant: "display-lg", className: nM.V, children: t });
}
var nw = n(109112),
    nP = n(311043),
    nk = n(883053);
function nL(e) {
    let { rank: t, className: n } = e;
    return (0, r.jsxs)(X, { className: o()(nk.T, n), children: ["#", t] });
}
var nD = n(497357);
let nG = "/assets/e74703a44e087adc.svg";
function nU(e) {
    let {
            game: { id: t, name: n, coverImageHash: a },
            rank: s,
            label: l,
            shellImage: i,
            className: c,
        } = e,
        u = (0, d.bG)(
            [nP.A],
            () =>
                nP.A.getGame(t)?.getCoverURL(300) ??
                ng.Ay.getApplicationIconURL({ id: t, icon: a, size: 300, fallbackAvatar: !1 }),
        );
    return (0, r.jsxs)("div", {
        className: o()(nD.LO, c),
        children: [
            (0, r.jsxs)("div", {
                className: nD.Tn,
                children: [
                    (0, r.jsx)("img", { src: i, alt: "", className: nD.vf }),
                    null != u
                        ? (0, r.jsx)("img", { src: u, alt: "", className: nD.Qw })
                        : (0, r.jsx)("div", {
                              className: o()(nD.Qw, nD.uj),
                              children: (0, r.jsx)(nw._, { size: "lg" }),
                          }),
                    null != s && (0, r.jsx)(nL, { rank: s, className: nD.Tm }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: nD.zH,
                children: [
                    (0, r.jsx)(W, { variant: "heading-xl/medium", className: nD.UU, lineClamp: 1, children: n }),
                    (0, r.jsx)(W, { variant: "experimental/mono-md/bold", className: nD.Pf, children: l }),
                ],
            }),
        ],
    });
}
function nF(e) {
    let { numSessions: t, ...n } = e;
    return (0, r.jsx)(nU, { ...n, label: Math.round(t), shellImage: nG });
}
function nH(e) {
    let { numSessions: t, ...n } = e;
    return (0, r.jsx)(nU, {
        ...n,
        rank: 1,
        label: Math.round(t),
        shellImage: "/assets/fbe1ab9677ed007a.svg",
        className: nD.Ms,
    });
}
function nK(e) {
    return (0, r.jsx)(nU, { ...e, shellImage: nG });
}
var nV = n(842807);
let nz = [];
function nB(e) {
    let { gameStats: t } = e,
        n = Math.round(t?.totalGamesPlayed ?? 0),
        a = t?.games ?? nz;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: nV.wx,
                children: [
                    (0, r.jsxs)("div", {
                        className: nV.dJ,
                        children: [
                            (0, r.jsx)(tT, { icon: eq.GameControllerIcon, children: ee.intl.string($.default.HM2fjf) }),
                            (0, r.jsx)(tJ, { value: n }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: nV.h_,
                        children: (0, r.jsx)(tR, { children: ee.intl.format($.default.aJMJ6b, { numGames: n }) }),
                    }),
                ],
            }),
            (0, r.jsx)(ny.Ip, {
                orientation: "horizontal",
                scrollbarGutter: !1,
                fade: !0,
                className: nV.ag,
                children: a.map((e, t) => {
                    let { game: n, numSessions: a } = e;
                    return 0 === t
                        ? (0, r.jsx)(nH, { game: n, numSessions: a }, n.id)
                        : (0, r.jsx)(nF, { game: n, rank: t + 1, numSessions: a }, n.id);
                }),
            }),
        ],
    });
}
function nY(e) {
    let { gameStats: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: o()(nV.wx, nV.l7),
                children: [
                    (0, r.jsxs)("div", {
                        className: nV.dJ,
                        children: [
                            (0, r.jsx)(tu, { className: nV.gi }),
                            (0, r.jsx)(nO, { children: ee.intl.string($.default.qbCgI7) }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: nV.h_,
                        children: (0, r.jsx)(tR, { children: ee.intl.string($.default["0oDeiM"]) }),
                    }),
                ],
            }),
            (0, r.jsx)(ny.Ip, {
                orientation: "horizontal",
                scrollbarGutter: !1,
                fade: !0,
                className: o()(nV.ag, nV.Zs),
                children: ei.Jb.map((e) => {
                    let { list: n, label: a } = e,
                        s = t[n][0];
                    return null != s ? (0, r.jsx)(nK, { game: s, label: ee.intl.string(a) }, n) : null;
                }),
            }),
        ],
    });
}
function nQ() {
    let e = (0, d.bG)([C.A], () => C.A.stats?.games),
        t = (0, d.bG)([C.A], () => (0, v.IH)(C.A.stats)),
        n = (0, d.bG)([C.A], () => C.A.globalStats?.games),
        a = !t && null != n;
    return (0, r.jsx)(th, {
        children: (0, r.jsx)("div", {
            className: nV.kL,
            children: a ? (0, r.jsx)(nY, { gameStats: n }) : (0, r.jsx)(nB, { gameStats: e }),
        }),
    });
}
var nJ = n(167662);
function nq(e) {
    let { messages: t } = e,
        n = Math.round(t?.numMessagesSent ?? 0),
        a = (0, v.bD)(t?.numMessagesSentPercentile);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: nJ.dJ,
                children: [
                    (0, r.jsx)(tT, { icon: eZ.ChatIcon, children: ee.intl.string(ey.default.wWKySP) }),
                    (0, r.jsx)(tJ, { value: n }),
                ],
            }),
            (0, r.jsx)(tR, {
                children:
                    null != a
                        ? ee.intl.format($.default.w2CanS, {
                              numMessages: n,
                              percent: a,
                              percentHook: (e, t) => (0, r.jsx)(tK, { children: e }, t),
                          })
                        : ee.intl.format($.default.cYCqz8, { numMessages: n }),
            }),
        ],
    });
}
function nW(e) {
    let { numWordsSent: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: nJ.dJ,
                children: [
                    (0, r.jsx)(tT, { icon: eZ.ChatIcon, children: ee.intl.string($.default["2BuyVC"]) }),
                    (0, r.jsx)(tZ, { value: t }),
                ],
            }),
            (0, r.jsx)(tR, { children: ee.intl.format($.default.bAxEs2, { numWords: (0, v.wj)(t) }) }),
        ],
    });
}
function nZ() {
    let e = (0, d.bG)([C.A], () => C.A.stats?.messages),
        t = (0, d.bG)([C.A], () => (0, v.nb)(C.A.stats)),
        n = (0, d.bG)([C.A], () => C.A.globalStats?.messages?.numWordsSent),
        a = !t && null != n;
    return (0, r.jsx)(th, {
        children: (0, r.jsxs)("div", {
            className: nJ.kL,
            children: [
                (0, r.jsx)(H, {
                    animatedSrc:
                        "https://cdn.discordapp.com/assets/content/d2d8036bb6a32967893421f9956b9e8ed30abde474f68c1a34e824205549c5a1.png",
                    staticSrc:
                        "https://cdn.discordapp.com/assets/content/1dfd8684180df4216b23f0a61617250be8fcc12bc1970ac259892f34fbdb836d.png",
                    className: nJ.HW,
                }),
                (0, r.jsx)("div", {
                    className: nJ.C,
                    children: a ? (0, r.jsx)(nW, { numWordsSent: n }) : (0, r.jsx)(nq, { messages: e }),
                }),
            ],
        }),
    });
}
var nX = n(548118),
    n$ = n(224865);
let n0 = nX.iu[nX.Ay.Sizes.XLARGE];
function n1(e) {
    let { guild: t, size: n } = e;
    return (0, r.jsx)(nX.Ay, {
        guild: t,
        size: nX.Ay.Sizes.XLARGE,
        iconSize: n,
        textScale: n / n0,
        className: n$.K,
        style: { width: n, height: n, borderRadius: 0 },
    });
}
var n5 = n(140645);
function n2(e) {
    let { numVoiceMinutes: t, numMessagesSent: n } = e;
    return (0, r.jsxs)("div", {
        className: n5.M1,
        children: [
            (0, r.jsxs)("div", {
                className: n5.dJ,
                children: [
                    (0, r.jsx)(e1.MicrophoneIcon, { size: "md", color: "currentColor" }),
                    (0, r.jsx)(W, { variant: "experimental/mono-md/bold", className: n5.Qq, children: Math.round(t) }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: n5.dJ,
                children: [
                    (0, r.jsx)(eZ.ChatIcon, { size: "md", color: "currentColor" }),
                    (0, r.jsx)(W, { variant: "experimental/mono-md/bold", className: n5.Qq, children: Math.round(n) }),
                ],
            }),
        ],
    });
}
var n3 = n(972106);
let n4 = [];
function n6(e) {
    let { guild: t, rank: n, iconSize: a = 100, children: s } = e;
    return (0, r.jsxs)("div", {
        className: n3.w_,
        children: [
            (0, r.jsxs)("div", {
                className: n3.jj,
                children: [
                    (0, r.jsx)(nL, { rank: n }),
                    (0, r.jsxs)("div", {
                        className: n3.gI,
                        children: [
                            (0, r.jsx)(W, {
                                variant: "heading-xxl/medium",
                                className: n3.J5,
                                lineClamp: 1,
                                children: t.name,
                            }),
                            s,
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(n1, { guild: t, size: a }),
        ],
    });
}
function n8(e) {
    let { guild: t, numVoiceMinutes: n, numMessagesSent: a } = e;
    return (0, r.jsx)(n6, {
        guild: t,
        rank: 1,
        iconSize: 140,
        children: (0, r.jsx)(n2, { numVoiceMinutes: n, numMessagesSent: a }),
    });
}
function n7(e) {
    let { guilds: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: n3.wx,
                children: [
                    (0, r.jsxs)("div", {
                        className: n3.R_,
                        children: [
                            (0, r.jsx)(tT, { icon: e$.R, children: ee.intl.string($.default.Mb5E6r) }),
                            (0, r.jsx)(nO, { children: ee.intl.string(ey.default.F0fkrh) }),
                        ],
                    }),
                    (0, r.jsx)(tR, { children: ee.intl.string($.default.RL2mWA) }),
                ],
            }),
            (0, r.jsx)("div", {
                className: n3.Pl,
                children: t.map((e, t) => {
                    let { guild: n, numMessagesSent: a, numVoiceMinutes: s } = e;
                    return 0 === t
                        ? (0, r.jsx)(n8, { guild: n, numMessagesSent: a ?? 0, numVoiceMinutes: s ?? 0 }, n.id)
                        : (0, r.jsx)(n6, { guild: n, rank: t + 1 }, n.id);
                }),
            }),
        ],
    });
}
function n9(e) {
    let { guilds: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: n3.wx,
                children: [
                    (0, r.jsxs)("div", {
                        className: n3.R_,
                        children: [
                            (0, r.jsx)(tu, { className: n3.gi }),
                            (0, r.jsx)(nO, { children: ee.intl.string(ey.default.F0fkrh) }),
                        ],
                    }),
                    (0, r.jsx)(tR, { children: ee.intl.string($.default.bhnqop) }),
                ],
            }),
            (0, r.jsx)("div", {
                className: n3.Pl,
                children: t.map((e, t) => (0, r.jsx)(n6, { guild: e, rank: t + 1 }, e.id)),
            }),
        ],
    });
}
function re() {
    let e = (0, d.bG)([C.A], () => C.A.stats?.guilds?.guilds ?? n4),
        t = (0, d.bG)([C.A], () => C.A.globalStats?.guilds?.guildsByMembers),
        n = 0 === e.length && null != t;
    return (0, r.jsx)(th, {
        children: (0, r.jsx)("div", {
            className: n3.kL,
            children: n ? (0, r.jsx)(n9, { guilds: t }) : (0, r.jsx)(n7, { guilds: e }),
        }),
    });
}
var rt = n(155094);
function rn(e) {
    let { icon: t, title: n, description: a } = e;
    return (0, r.jsx)(th, {
        children: (0, r.jsxs)("div", {
            className: rt.Q,
            children: [(0, r.jsx)(tT, { icon: t, children: n }), (0, r.jsx)(tR, { children: a })],
        }),
    });
}
var rr = n(7584),
    ra = n(33293),
    rs = n(498137),
    rl = n(192339),
    ri = n(144103),
    rc = n(834109),
    ro = n(48763);
function ru(e) {
    let { character: t, power: n } = e,
        a = (0, g.o)(t);
    return (0, r.jsxs)(rs.A, {
        cardColorPalette: a,
        size: ro.W.LG,
        children: [
            (0, r.jsx)(rl.A, {}),
            (0, r.jsx)(rc.A, { variant: "full" }),
            null != n
                ? (0, r.jsx)(ri.A, {
                      powerLevel: (0, tb.Le)(n.powerLevel),
                      powerLevelUnits: (0, tb.sX)(n.powerLevelPercentile),
                  })
                : null,
            (0, r.jsx)(ra.A, { character: t }),
        ],
    });
}
var rd = n(58410);
function rm() {
    let e = (0, d.bG)([C.A], () => C.A.stats),
        t = (0, d.bG)([C.A], () => C.A.character),
        n = e?.guilds?.guilds[0],
        a = e?.emojis?.emojis[0],
        s = e?.games?.games[0]?.game,
        l =
            null != s
                ? ng.Ay.getApplicationIconURL({ id: s.id, icon: s.iconHash, size: 40, fallbackAvatar: !1 })
                : void 0;
    return (0, r.jsx)(th, {
        children: (0, r.jsxs)("div", {
            className: rd.z,
            children: [
                null != t ? (0, r.jsx)(ru, { character: t, power: e?.power }) : null,
                (0, r.jsxs)("div", {
                    className: rd.zH,
                    children: [
                        (0, r.jsxs)("div", {
                            className: rd.R_,
                            children: [
                                (0, r.jsx)(tT, { icon: tv.M, children: ee.intl.string(ey.default.ir6nEQ) }),
                                (0, r.jsx)(W, {
                                    variant: "display-lg",
                                    className: rd.Vy,
                                    children: ee.intl.string(ey.default.y4M1na),
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: rd.M1,
                            children: [
                                (0, r.jsx)(rh, {
                                    label: ee.intl.string($.default.MSrV9z),
                                    value: e?.voice?.totalVoiceMinutes,
                                }),
                                (0, r.jsx)(rh, {
                                    label: ee.intl.string(ey.default.wWKySP),
                                    value: e?.messages?.numMessagesSent,
                                }),
                                (0, r.jsx)(rh, {
                                    label: ee.intl.string($.default["f5S+pt"]),
                                    value: n?.numDaysInteracted,
                                }),
                                (0, r.jsx)(rx, {
                                    label: ee.intl.string(ey.default["8XPMJj"]),
                                    icon: null != n ? (0, r.jsx)(n1, { guild: n.guild, size: 40 }) : (0, r.jsx)(rg, {}),
                                    name: null != n ? n.guild.name : ee.intl.string($.default.GultYJ),
                                }),
                                (0, r.jsx)(rh, {
                                    label: ee.intl.string($.default.xVSlv3),
                                    value: e?.emojis?.numEmojisSent,
                                }),
                                (0, r.jsx)(rx, {
                                    label: ee.intl.string(ey.default["3sARW7"]),
                                    icon:
                                        null != a
                                            ? (0, r.jsx)(tF.A, {
                                                  emojiId: a.id,
                                                  emojiName: null == a.id ? a.name : void 0,
                                                  animated: a.animated,
                                                  alt: "",
                                                  className: rd.Kk,
                                              })
                                            : (0, r.jsx)(rg, {}),
                                    name:
                                        null == a
                                            ? ee.intl.string(ee.t.PoWNfe)
                                            : null == a.id
                                              ? rr.Ay.convertSurrogateToName(a.name)
                                              : `:${a.name}:`,
                                }),
                                (0, r.jsx)(rh, {
                                    label: ee.intl.string($.default.y2Y1DD),
                                    value: e?.games?.totalDaysPlayed,
                                }),
                                (0, r.jsx)(rx, {
                                    label: ee.intl.string(ey.default.RbT4Zq),
                                    icon:
                                        null != l
                                            ? (0, r.jsx)("img", { src: l, alt: "", className: o()(rd.Kk, rd.Gt) })
                                            : (0, r.jsx)(rg, {}),
                                    name: null != s ? s.name : ee.intl.string(ee.t.PoWNfe),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function rh(e) {
    let { label: t, value: n } = e;
    return (0, r.jsxs)("div", {
        className: rd.dJ,
        children: [
            (0, r.jsx)(W, { variant: "experimental/heading-md/semibold", children: t }),
            (0, r.jsx)(W, {
                variant: "heading-xxl/normal",
                className: rd.wk,
                children: Math.round(n ?? 0).toLocaleString(ee.intl.currentLocale),
            }),
        ],
    });
}
function rx(e) {
    let { label: t, icon: n, name: a } = e;
    return (0, r.jsxs)("div", {
        className: o()(rd.dJ, rd.u4),
        children: [
            (0, r.jsx)(W, { variant: "experimental/heading-md/semibold", children: t }),
            (0, r.jsxs)("div", {
                className: rd.AS,
                children: [
                    n,
                    (0, r.jsx)(W, { variant: "heading-xl/medium", lineClamp: 1, className: rd.TJ, children: a }),
                ],
            }),
        ],
    });
}
function rg() {
    return (0, r.jsx)("div", {
        className: o()(rd.Kk, rd.Gc),
        children: (0, r.jsx)(nw._, { size: "md", color: "currentColor" }),
    });
}
var rf = n(651946);
function rj() {
    let e = (0, d.bG)([C.A], () => C.A.stats?.guilds?.guilds[0]),
        t = Math.round(e?.numDaysInteracted ?? 0),
        n = (0, v.bD)(e?.numDaysInteractedPercentile);
    return (0, r.jsx)(th, {
        children: (0, r.jsxs)("div", {
            className: rf.kL,
            children: [
                (0, r.jsxs)("div", {
                    className: rf.wx,
                    children: [
                        (0, r.jsxs)("div", {
                            className: rf.R_,
                            children: [
                                (0, r.jsx)(tT, { icon: e$.R, children: ee.intl.string($.default["M+a+t1"]) }),
                                (0, r.jsx)(tJ, { value: t }),
                            ],
                        }),
                        (0, r.jsx)(tR, {
                            children:
                                null != n
                                    ? ee.intl.format($.default.sIDTV1, {
                                          numDays: t,
                                          percent: n,
                                          percentHook: (e, t) => (0, r.jsx)(tK, { children: e }, t),
                                      })
                                    : ee.intl.format($.default.nLCUQ4, { numDays: t }),
                        }),
                    ],
                }),
                null != e &&
                    (0, r.jsx)("div", {
                        className: rf.bU,
                        children: (0, r.jsxs)("div", {
                            className: rf.Nr,
                            style: { width: 360 },
                            children: [
                                (0, r.jsx)(n1, { guild: e.guild, size: 360 }),
                                (0, r.jsxs)("div", {
                                    className: rf.zH,
                                    children: [
                                        (0, r.jsx)(W, {
                                            variant: "heading-xxl/medium",
                                            className: rf.J5,
                                            lineClamp: 1,
                                            children: e.guild.name,
                                        }),
                                        (0, r.jsx)(n2, {
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
var rv = n(270704);
function rA(e) {
    let { voice: t } = e,
        n = Math.round(t?.totalVoiceMinutes ?? 0),
        a = (0, v.bD)(t?.totalVoiceMinutesPercentile);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: rv.dJ,
                children: [
                    (0, r.jsx)(tT, {
                        icon: e1.MicrophoneIcon,
                        children: ee.intl.formatToPlainString(ey.default.UZbUtl, { numMinutes: n }),
                    }),
                    (0, r.jsx)(tJ, { value: n, alignment: "center" }),
                ],
            }),
            (0, r.jsx)(tR, {
                children:
                    null != a
                        ? ee.intl.format($.default["7gtpnV"], {
                              numMinutes: n,
                              percent: a,
                              percentHook: (e, t) => (0, r.jsx)(tK, { children: e }, t),
                          })
                        : ee.intl.format($.default.Y3poDW, { numMinutes: n }),
            }),
        ],
    });
}
function rp(e) {
    let { peakHour: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: rv.dJ,
                children: [
                    (0, r.jsx)(tT, { icon: e1.MicrophoneIcon, children: ee.intl.string($.default.ZCwB8J) }),
                    (0, r.jsx)(tZ, { value: t }),
                ],
            }),
            (0, r.jsx)(tR, { children: ee.intl.string($.default.huiTne) }),
        ],
    });
}
function rE() {
    let e = (0, d.bG)([C.A], () => C.A.stats?.voice),
        t = (0, d.bG)([C.A], () => (0, v.Kr)(C.A.stats)),
        n = (0, d.bG)([C.A], () => C.A.globalStats?.voice?.peakHourUtc),
        a = (0, v.XF)(n)?.value,
        s = !t && null != a;
    return (0, r.jsxs)(th, {
        children: [
            (0, r.jsx)(H, {
                animatedSrc:
                    "https://cdn.discordapp.com/assets/content/04746dc04eab575d0168935af2b1b3f97e2e00439f84bd0f0474276e0c5a81dc.png",
                staticSrc:
                    "https://cdn.discordapp.com/assets/content/c4c2d6b631bff3da4e4bb9afffc8f89bc9fb6f76a2fcd824f8a7af83eb7f1e6b.png",
                className: rv.Tp,
            }),
            (0, r.jsx)("div", {
                className: rv.Qs,
                children: s ? (0, r.jsx)(rp, { peakHour: a }) : (0, r.jsx)(rA, { voice: e }),
            }),
        ],
    });
}
function rN(e) {
    let { route: t, onNextStep: n, onPreviousStep: a } = e;
    if (t === j.gr.HOME) return (0, r.jsx)(tU, { onStart: n });
    if (t === j.gr.INTRODUCTION) return (0, r.jsx)(tg, {});
    let { statsScreen: s } = (0, j.UG)(t);
    switch (s) {
        case j.oI.VOICE_INTRO:
            return (0, r.jsx)(rn, {
                icon: e1.MicrophoneIcon,
                title: ee.intl.string($.default["/7XYsa"]),
                description: ee.intl.string($.default["X8/G/o"]),
            });
        case j.oI.VOICE:
            return (0, r.jsx)(rE, {});
        case j.oI.MESSAGES_INTRO:
            return (0, r.jsx)(rn, {
                icon: eZ.ChatIcon,
                title: ee.intl.string($.default["2BuyVC"]),
                description: ee.intl.string($.default["kF+Y3a"]),
            });
        case j.oI.MESSAGES:
            return (0, r.jsx)(nZ, {});
        case j.oI.SERVERS_INTRO:
            return (0, r.jsx)(rn, {
                icon: e$.R,
                title: ee.intl.string(ey.default.F0fkrh),
                description: ee.intl.string($.default.Xg82Gy),
            });
        case j.oI.SERVERS:
            return (0, r.jsx)(re, {});
        case j.oI.TOP_SERVER:
            return (0, r.jsx)(rj, {});
        case j.oI.EMOJI_INTRO:
            return (0, r.jsx)(rn, {
                icon: Q.o,
                title: ee.intl.string($.default.ZTDCIv),
                description: ee.intl.string($.default.y8Sr8J),
            });
        case j.oI.EMOJI:
            return (0, r.jsx)(ns, {});
        case j.oI.GAMES_INTRO:
            return (0, r.jsx)(rn, {
                icon: eq.GameControllerIcon,
                title: ee.intl.string($.default.HM2fjf),
                description: ee.intl.string($.default.LQiFqJ),
            });
        case j.oI.GAMES:
            return (0, r.jsx)(nQ, {});
        case j.oI.GAME_TIME:
            return (0, r.jsx)(nT, {});
        case j.oI.SQUAD:
        case j.oI.SIDEKICK:
            return (0, r.jsx)(nN, { route: t, onNextStep: n, onPreviousStep: a });
        case j.oI.SUMMARY:
            return (0, r.jsx)(rm, {});
        case j.oI.SHARE:
            return (0, r.jsx)(tO, {});
        default:
            return null;
    }
}
var rS = n(650809),
    rC = n(866665),
    rb = n(428692);
let r_ = {
    [j.s9.FACE]: { icon: e1.MicrophoneIcon, label: ee.t.K3lovD },
    [j.s9.OUTFIT]: { icon: eZ.ChatIcon, label: ee.t.OIgYlQ },
    [j.s9.HEADWEAR]: { icon: e$.R, label: ee.t["7hB4kg"] },
    [j.s9.SHOES]: { icon: Q.o, label: ee.t.sMOuuS },
    [j.s9.WEARABLE]: { icon: eq.GameControllerIcon, label: ee.t.URyqtP },
    [j.s9.AURA]: { icon: eQ.CalendarIcon, label: $.default.oAoYbN },
    [j.s9.ASSEMBLED]: { icon: nc.$, label: ee.t.TdEu5X },
    [j.s9.FINALIZE]: { icon: rS.PaintPaletteIcon, label: $.default.gmMD2I },
    [j.s9.SUMMARY]: { icon: tv.M, label: ey.default.y4M1na },
};
function rR(e) {
    let {
            step: { icon: t, label: n, route: a },
            disabled: s,
            onRouteClick: l,
        } = e,
        i = ee.intl.string(n);
    return (0, r.jsx)(rC.m, {
        text: i,
        ariaHidden: !0,
        children: (0, r.jsxs)(no.D, {
            className: o()(rb.PM, rb.CD, { [rb.vk]: !s }),
            onClick: () => l(a),
            "aria-label": i,
            "aria-disabled": s,
            children: [
                (0, r.jsx)("div", { className: o()(rb.Om, rb.hZ) }),
                (0, r.jsx)(t, { size: "xs", color: "currentColor", className: rb.RQ }),
            ],
        }),
    });
}
function rI(e) {
    let { flow: t, stats: n, activeRoute: a, isRouteBlocked: s, onRouteClick: l } = e,
        c = (function (e, t) {
            let n = [];
            for (let r of S({ flow: e, stats: t })) {
                let { characterStage: e } = (0, j.UG)(r),
                    t = r_[e];
                null != t && n.at(-1)?.stage !== e && n.push({ ...t, stage: e, route: r });
            }
            return n;
        })(t, n),
        { characterStage: o } = (0, j.UG)(a),
        u = c.findIndex((e) => {
            let { stage: t } = e;
            return t === o;
        }),
        [m, h] = i.useState(u);
    u > m && h(u);
    let x = (0, d.bG)([C.A], () => C.A.isSaving);
    return -1 === u
        ? null
        : (0, r.jsx)("div", {
              className: rb.qB,
              role: "group",
              "aria-label": ee.intl.formatToPlainString($.default.iyTfFt, { stepNumber: u + 1, stepCount: c.length }),
              children: c.map((e, t) => {
                  let { icon: n } = e;
                  return t === u
                      ? (0, r.jsx)(
                            rC.m,
                            {
                                text: ee.intl.string(e.label),
                                children: (0, r.jsx)("div", {
                                    className: rb.PM,
                                    children: (0, r.jsx)(n, { size: "xs", color: "currentColor" }),
                                }),
                            },
                            e.stage,
                        )
                      : t <= m
                        ? (0, r.jsx)(rR, { step: e, disabled: x || s, onRouteClick: l }, e.stage)
                        : (0, r.jsx)(
                              "div",
                              { className: rb.PM, children: (0, r.jsx)("div", { className: rb.Om }) },
                              e.stage,
                          );
              }),
          });
}
function rT(e) {
    let { stage: t } = e;
    return (0, r.jsxs)(th, {
        children: [
            (0, r.jsx)(J.E, { color: "text-muted", variant: "text-md/medium", children: "Character Stage" }),
            (0, r.jsx)(J.E, { color: "text-muted", variant: "text-md/medium", children: t }),
        ],
    });
}
var ry = n(517782);
function rM(e) {
    let t,
        n,
        { didPlayerShareDataWithDiscord: a, onClose: s } = e;
    ((0, d.bG)([C.A], () => C.A.fetchState),
        (t = (0, d.bG)([C.A], () => C.A.stats?.games?.games)),
        (n = (0, i.useMemo)(
            () =>
                t?.map((e) => {
                    let { game: t } = e;
                    return t.id;
                }) ?? [],
            [t],
        )),
        (0, i.useEffect)(() => {
            let { fetchState: e } = C.A;
            (e === C.T.INIT || e === C.T.ERROR) && (0, x.nX)();
        }, []),
        (0, i.useEffect)(() => {
            (0, M.E)(n);
        }, [n]),
        i.useEffect(() => {
            (0, x.kP)();
        }, []));
    let l = a ? j.Np.SHARED_DATA : j.Np.NO_SHARED_DATA,
        [c, v] = i.useState(j.gr.HOME),
        { characterStage: A, statsScreen: p } = (0, j.UG)(c),
        E = c === j.gr.HOME || null != p,
        N = E || c === j.gr.INTRODUCTION,
        b = (0, d.bG)([C.A], () => (C.A.fetchState === C.T.SUCCESS ? C.A.stats : void 0)),
        _ = (0, d.bG)([C.A], () => C.A.character),
        R = i.useMemo(
            () =>
                (function (e, t) {
                    switch (e) {
                        case j.gr.SUMMARY:
                        case j.gr.SHARE:
                            let n = (0, g.o)(t),
                                { primaryBackgroundColor: r, shadowColor: a } = (0, g.j)(n);
                            return {
                                ...eD,
                                "--custom-checkpoint-primary": r,
                                "--custom-checkpoint-button-border": r,
                                "--custom-checkpoint-button-shadow": a,
                                "--custom-checkpoint-background-gradient-start": r,
                            };
                        default:
                            return eD;
                    }
                })(c, _),
            [c, _],
        ),
        I = O(u),
        { blockedTraits: T } = y(),
        w = (0, f._K)(c, T),
        P = i.useCallback(
            (e) => {
                let t = (function (e) {
                    let { flow: t, stats: n, currentRoute: r, direction: a } = e,
                        s = S({ flow: t, stats: n }),
                        l = s.indexOf(r);
                    return -1 === l ? j.gr.INTRODUCTION : (s[l + a] ?? null);
                })({ flow: l, stats: b, currentRoute: c, direction: e });
                if (null == t) {
                    1 === e && s();
                    return;
                }
                (j.cy.has(c) || I(), v(t));
            },
            [c, l, s, I, b],
        ),
        L = i.useCallback(() => P(-1), [P]),
        G = i.useCallback(() => P(1), [P]),
        F = i.useCallback(
            (e) => {
                C.A.isSaving || w || (I(), v(e));
            },
            [w, I],
        );
    return (0, r.jsx)(m.N, {
        theme: k.NJ.DARK,
        children: (e) =>
            (0, r.jsxs)("div", {
                className: o()(e, ry.kL),
                style: R,
                "aria-label": ee.intl.string(ey.default["CdU/PF"]),
                children: [
                    (0, r.jsx)(D, { isVisible: E }),
                    (0, r.jsx)("div", { className: o()(ry.qd, { [ry.R]: E }), children: (0, r.jsx)(rT, { stage: A }) }),
                    (0, j.Rq)(c) && (0, r.jsx)("div", { className: ry.qd, children: (0, r.jsx)(e2, { route: c }) }),
                    N &&
                        (0, r.jsx)("div", {
                            className: ry.qd,
                            children: (0, r.jsx)(rN, { route: c, onNextStep: G, onPreviousStep: L }),
                        }),
                    (0, r.jsx)(Y, { activeRoute: c }),
                    (0, r.jsxs)("div", {
                        className: ry.$s,
                        children: [
                            (0, r.jsx)(e6, {}),
                            (0, r.jsx)(U, {
                                size: "sm",
                                "aria-label": ee.intl.string(ee.t.cpT0Cq),
                                onClick: s,
                                children: (0, r.jsx)(h.P, { size: "xs", color: "currentColor" }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(rI, { flow: l, stats: b, activeRoute: c, isRouteBlocked: w, onRouteClick: F }),
                    (0, r.jsx)(to, { activeRoute: c, isRouteBlocked: w, onBack: L, onNext: G }),
                ],
            }),
    });
}
var rO = n(652215);
function rw() {
    return !!l._.hasSubscribers(rO.jej.MODAL_CLOSE) && (l._.dispatch(rO.jej.MODAL_CLOSE), !0);
}
function rP(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    (s.default.track(rO.HAw.CHECKPOINT_STARTED, { source: e }),
        (0, a.B8)(
            (e) => {
                let { closeLayer: n } = e;
                return (0, r.jsx)(rM, { didPlayerShareDataWithDiscord: t, onClose: n });
            },
            { onEscape: rw },
        ));
}
