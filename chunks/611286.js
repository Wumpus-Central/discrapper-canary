n.d(t, { D: () => rP });
var r = n(477900),
    a = n(858899),
    s = n(361158),
    l = n(174459),
    i = n(625494),
    c = n(796104),
    o = n(719718),
    d = n(582128),
    u = n(503698),
    m = n.n(u);
let h =
    "https://cdn.discordapp.com/assets/content/ca0ec81d050b27537618a0563ff926476bc53f331bae7af46595969995dea5fb.mp3";
var x = n(17928),
    g = n(43990),
    f = n(789645),
    j = n(627369),
    v = n(503235),
    A = n(201779),
    E = n(407905);
let p = [
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
    N = [
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
    S = {
        [A.gr.VOICE_INTRO]: (e) => !(0, E.Kr)(e),
        [A.gr.MESSAGES_INTRO]: (e) => !(0, E.nb)(e),
        [A.gr.SERVERS_INTRO]: (e) => !(0, E.jr)(e),
        [A.gr.EMOJI_INTRO]: (e) => !(0, E.y7)(e),
        [A.gr.GAMES_INTRO]: (e) => !(0, E.IH)(e),
    },
    C = {
        [A.gr.TOP_SERVER_STATS]: E.jr,
        [A.gr.SQUAD_TRANSITION]: E.$p,
        [A.gr.SQUAD]: E.$p,
        [A.gr.SIDEKICK]: E.oL,
        [A.gr.SIDEKICK_LEAVE]: E.oL,
    };
function R(e) {
    let { flow: t, stats: n } = e;
    return (t === A.Np.SHARED_DATA ? N : p).filter((e) => {
        let t = S[e];
        if (null != t) return null != n && t(n);
        let r = C[e];
        return null == r || void 0 === n || r(n);
    });
}
var b = n(127639),
    I = n(287809),
    T = n(474090),
    _ = n(817379);
function O() {
    let {
            selectedCharacterTraits: e,
            savedSelection: t,
            stats: n,
        } = (0, x.cf)([o.A], () => ({
            selectedCharacterTraits: o.A.selectedCharacterTraits,
            savedSelection: o.A.character,
            stats: o.A.stats,
        })),
        r = (0, x.bG)([I.default], () => (0, T.ki)(I.default.getCurrentUser())),
        a = d.useMemo(
            () =>
                Object.values(b.V).filter((a) => {
                    let s = e[a];
                    return null != s && (0, _.tS)(a, s, { stats: n, hasNitro: r, savedCharacter: t });
                }),
            [r, t, e, n],
        );
    return { selectedCharacterTraits: e, blockedTraits: a };
}
var M = n(920495);
function y(e) {
    let t = (0, x.bG)([o.A], () => o.A.isMuted),
        n = d.useRef(null);
    return (
        d.useEffect(() => {
            let t = new Audio(e);
            return ((n.current = t), () => t.pause());
        }, [e]),
        d.useCallback(() => {
            let e = n.current;
            t || null == e || ((e.currentTime = 0), e.play());
        }, [t])
    );
}
var w = n(299619),
    P = n(775602),
    D = n(818348),
    k = n(11435);
function L(e) {
    let { isVisible: t } = e,
        n = d.useRef(null),
        a = (0, x.bG)([P.Ay], () => P.Ay.useReducedMotion),
        s = t && !a;
    return (
        d.useEffect(() => {
            let e = n.current;
            null != e && (s ? e.play().catch(D.tE) : e.pause());
        }, [s]),
        d.useEffect(() => {
            a && null != n.current && (n.current.currentTime = 1);
        }, [a]),
        (0, r.jsxs)("div", {
            className: m()(k.Tp, { [k.R]: !t }),
            "aria-hidden": !0,
            children: [
                (0, r.jsx)(w.A, {
                    ref: n,
                    className: k.Ki,
                    src: "https://cdn.discordapp.com/assets/content/a7a4300630ed2733eca4a8bb584c3086a66063d78e2f829faf465d96ff388a93.webm",
                    loop: !0,
                    muted: !0,
                    playsInline: !0,
                }),
                (0, r.jsx)("div", { className: k.D7 }),
            ],
        })
    );
}
var G = n(885619);
function U(e) {
    let { "aria-label": t, "aria-pressed": n, children: a, onClick: s, size: l, className: i, disabled: c = !1 } = e;
    return (0, r.jsx)("button", {
        type: "button",
        className: m()(G.button, "custom" !== l && G[l], i),
        onClick: s,
        "aria-label": t,
        "aria-pressed": n,
        disabled: c,
        children: a,
    });
}
function F(e) {
    let { className: t, ...n } = e;
    return (0, r.jsx)(U, { ...n, className: m()(G.shadow, t) });
}
function H(e) {
    let { animatedSrc: t, staticSrc: n, className: a } = e,
        s = (0, x.bG)([P.Ay], () => P.Ay.useReducedMotion);
    return (0, r.jsx)("img", { src: s ? n : t, alt: "", className: a });
}
var K = n(740281),
    V = n(766089),
    z = n(767988);
let B = { animatedSrc: V.A, staticSrc: z.A };
function Q(e) {
    let { activeRoute: t } = e,
        { animatedSrc: n, staticSrc: a } = (0, x.cf)(
            [o.A],
            () => {
                switch (t) {
                    case A.gr.SUMMARY:
                    case A.gr.SHARE:
                        let e = (0, j.o)(o.A.character),
                            { clydeLogoImage: n, clydeLogoStaticImage: r } = (0, j.j)(e);
                        return { animatedSrc: n, staticSrc: r };
                    default:
                        return B;
                }
            },
            [t],
        );
    return (0, r.jsx)(H, { animatedSrc: n, staticSrc: a, className: K.w });
}
var Y = n(756408),
    J = n(834730),
    q = n(504736);
function W(e) {
    let { children: t, className: n, ...a } = e;
    return (0, r.jsx)(J.E, { ...a, className: m()(q.Q, n), color: "none", children: t });
}
var Z = n(271427);
function X(e) {
    let { children: t, className: n, style: a } = e;
    return (0, r.jsx)(W, {
        tag: "span",
        variant: "experimental/mono-md/bold",
        className: m()(Z.T, n),
        style: a,
        children: t,
    });
}
var $ = n(842089),
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
var ei = n(218546),
    ec = n(309913),
    eo = n(647093);
let ed = `linear-gradient(to right, ${ec.uz.join(", ")})`;
function eu(e) {
    let { rarity: t } = e,
        n = d.useMemo(() => ({ "--custom-checkpoint-rarity-background": t === ei.K.NITRO ? ed : ec.Zy[t] }), [t]);
    return (0, r.jsx)(X, { className: eo.q, style: n, children: ee.intl.string(ec.iG[t]) });
}
var em = n(829870);
function eh(e) {
    let { asset: t, hideRarity: n } = e,
        a = (0, v.hC)(t);
    return (0, r.jsxs)("div", {
        className: em.z,
        children: [
            (0, r.jsxs)("div", {
                className: em.D,
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
var ex = n(661531),
    eg = n(403581),
    ef = n(140735),
    ej = n(835517),
    ev = n(32623),
    eA = n(559265);
function eE(e) {
    let { rarity: t } = e,
        n = d.useMemo(() => ({ "--custom-checkpoint-rarity-color": ec.Zy[t] }), [t]);
    return t === ei.K.NITRO
        ? (0, r.jsx)(eg.t, { size: "custom", color: ex.A.colors.ICON_SUBTLE, className: eA.d7 })
        : (0, r.jsx)("span", { className: eA.oG, style: n });
}
function ep(e) {
    let { traitOption: t, groupName: n, isSelected: a, hideRarity: s, onSelectOption: l, disabled: i = !1 } = e,
        { trait: c, optionId: o, rarity: u, asset: h, status: x } = t,
        g = x === ev.eP.LOCKED,
        f = d.useMemo(() => {
            if (null == h) return null;
            let e = Math.round(ec.VG * (0, ej.A)());
            return `${h}?width=${e}&height=${e}`;
        }, [h]);
    return (0, r.jsxs)("label", {
        className: m()(eA.uK, { [eA.wH]: a, [eA.dv]: (0, v.C5)(t), [eA.xt]: g, [eA.Ns]: x === ev.eP.NITRO_LOCKED }),
        children: [
            (0, r.jsx)(ef.A, {
                children: (0, r.jsx)("input", {
                    type: "radio",
                    name: n,
                    checked: a,
                    disabled: i,
                    onChange: () => l(c, o),
                    "aria-label": (0, v.v2)(t, s),
                }),
            }),
            null != f && (0, r.jsx)("img", { src: f, alt: "", draggable: !1, className: eA.Sl }),
            !s && null != u && (0, r.jsx)(eE, { rarity: u }),
        ],
    });
}
var eN = n(509063);
function eS(e) {
    let {
            customizationOption: t,
            traitOptions: n,
            selectedOption: a,
            onSelectOption: s,
            disabled: l = !1,
            children: i,
        } = e,
        c = d.useId(),
        o = !(0, v.Ux)(t);
    return (0, r.jsxs)("div", {
        className: eN.Nz,
        children: [
            (0, r.jsxs)("div", {
                className: eN.fF,
                children: [
                    i,
                    (0, r.jsx)("div", {
                        role: "radiogroup",
                        "aria-label": (0, v.cq)(t),
                        className: eN.Vg,
                        children: n.map((e) =>
                            (0, r.jsx)(
                                ep,
                                {
                                    traitOption: e,
                                    groupName: c,
                                    isSelected: e.optionId === a?.optionId,
                                    hideRarity: o,
                                    onSelectOption: s,
                                    disabled: l,
                                },
                                e.optionId,
                            ),
                        ),
                    }),
                ],
            }),
            null != a && (0, r.jsx)(eh, { asset: a, hideRarity: o }),
        ],
    });
}
n(321073);
var eC = n(51104),
    eR = n(67915);
function eb(e, t) {
    return e === v.v7.OUTFIT ? (null != t ? (0, _.FA)(t) : void 0) : t;
}
function eI(e) {
    let { customizationOption: t } = e,
        {
            optionIds: n,
            selectedOptionId: r,
            savedOptionId: a,
            onSelectOption: s,
        } = (function (e) {
            let { customizationOption: t, onSelectOption: n } = e,
                r = v.hw[t],
                { selectedOptionId: a, savedOptionId: s } = (0, x.cf)([o.A], () => ({
                    selectedOptionId: eb(t, o.A.selectedCharacterTraits[r]),
                    savedOptionId: eb(t, o.A.character?.[r]),
                })),
                l = d.useCallback(
                    (e, t) => {
                        t !== a && n(e, t);
                    },
                    [n, a],
                );
            return {
                optionIds: (function (e, t) {
                    switch (e) {
                        case v.v7.OUTFIT:
                            return _.ps;
                        case v.v7.OUTFIT_COLOR:
                            return (0, _.wD)(t ?? eR.r.NONE);
                        default:
                            return;
                    }
                })(t, a),
                selectedOptionId: a,
                savedOptionId: s,
                onSelectOption: l,
            };
        })({ customizationOption: t, onSelectOption: c.IB }),
        {
            traitOptions: l,
            availableTraitOptions: i,
            totalCount: u,
            earnedCount: m,
        } = (function (e) {
            let { customizationOption: t, savedOptionId: n, rarityOrder: r, optionIds: a } = e,
                s = (0, x.bG)([o.A], () => o.A.stats),
                l = (0, x.bG)([I.default], () => (0, T.ki)(I.default.getCurrentUser())),
                i = d.useMemo(() => (0, v.p8)(r), [r]);
            return d.useMemo(() => {
                let e = v.hw[t],
                    r = t === v.v7.OUTFIT_COLOR ? eC.x : eC.$[e],
                    c = (0, _.mf)(e, s),
                    o = [],
                    d = 0,
                    u = 0;
                for (let t of a ?? _.Rk[e]) {
                    let a = (0, _.$C)(e, t),
                        s = ev.eP.UNLOCKED;
                    (null == a || c.has(a) || n === t
                        ? a !== ei.K.NITRO || l || (s = ev.eP.NITRO_LOCKED)
                        : (s = ev.eP.LOCKED),
                        null != a && d++,
                        null != a && s === ev.eP.UNLOCKED && u++,
                        o.push({
                            trait: e,
                            optionId: t,
                            asset: _.qM[e][t]?.thumbnail,
                            rarity: a,
                            status: s,
                            getName: () => {
                                let e = r[t];
                                return null != e ? ee.intl.string(e) : "";
                            },
                        }));
                }
                o.sort(i);
                let m = o.filter((e) => {
                    let { status: t } = e;
                    return t !== ev.eP.LOCKED;
                });
                return { traitOptions: o, availableTraitOptions: m, totalCount: d, earnedCount: u };
            }, [t, l, a, i, n, s]);
        })({ customizationOption: t, savedOptionId: a, rarityOrder: ec.FG, optionIds: n }),
        h = d.useMemo(
            () =>
                l.find((e) => {
                    let { optionId: t } = e;
                    return t === r;
                }) ?? i[0],
            [r, l, i],
        );
    return (
        !(function (e) {
            let { availableTraitOptions: t, selectedOptionId: n, onSelectOption: r, paused: a } = e,
                s = t[0],
                l = t.some((e) => e.optionId === n);
            d.useEffect(() => {
                a || null == s || l || r(s.trait, s.optionId);
            }, [s, l, r, a]);
        })({ availableTraitOptions: i, selectedOptionId: r, onSelectOption: s, paused: h?.status === ev.eP.LOCKED }),
        { traitOptions: l, selectedOption: h, totalCount: u, earnedCount: m, onSelectOption: s }
    );
}
function eT(e) {
    let { customizationOption: t } = e,
        {
            traitOptions: n,
            selectedOption: a,
            totalCount: s,
            earnedCount: l,
            onSelectOption: i,
        } = eI({ customizationOption: t });
    return (0, r.jsx)(eS, {
        customizationOption: t,
        traitOptions: n,
        selectedOption: a,
        onSelectOption: i,
        children: (0, r.jsx)(el, { earnedCount: l, totalCount: s }),
    });
}
var e_ = n(71678);
function eO(e) {
    let { children: t, className: n } = e;
    return (0, r.jsx)("div", { className: m()(e_.n, n), children: t });
}
function eM() {
    let e = (0, x.bG)([o.A], () => o.A.stats?.emojis);
    return (0, r.jsxs)(eO, {
        children: [
            (0, r.jsx)(ea, {
                icon: Y.o,
                value: Math.round(e?.numEmojisSent ?? 0),
                topPercent: (0, E.bD)(e?.numEmojisSentPercentile),
                children: ee.intl.string($.default.ZTDCIv),
            }),
            (0, r.jsx)(eT, { customizationOption: v.v7.SHOES }),
        ],
    });
}
var ey = n(297264),
    ew = n(265872),
    eP = n(320448),
    eD = n(315710),
    ek = n(444927);
let eL = {
    "--custom-checkpoint-primary": ec.Kr,
    "--custom-checkpoint-dark-cyan": ec.ow,
    "--custom-checkpoint-button-border": ec.ow,
    "--custom-checkpoint-button-shadow": ec.zj,
    "--custom-checkpoint-white": ec.Ve,
    "--custom-checkpoint-guild-card-background": ec.LM,
    "--custom-checkpoint-background-gradient-start": ec.bI,
};
var eG = n(580814);
function eU(e) {
    let { options: t, activeCustomizationOption: n, returnRef: a, onSelectOption: s, onClose: l } = e,
        i = d.useRef(null),
        c = d.useRef([]),
        o = (0, ek.A)(() => Math.max(t.indexOf(n), 0));
    function u(e) {
        c.current[(e + t.length) % t.length]?.focus();
    }
    return (
        (0, eD.tj)(i, { returnRef: a }),
        d.useEffect(() => {
            c.current[o]?.focus();
        }, [o]),
        (0, r.jsx)("div", {
            ref: i,
            role: "menu",
            tabIndex: -1,
            "aria-label": ee.intl.string($.default.Zl5vPW),
            className: eG.M,
            style: eL,
            onKeyDown: function (e) {
                e.stopPropagation();
                let n = c.current.indexOf(e.target);
                switch (e.key) {
                    case "ArrowDown":
                        (e.preventDefault(), u(n + 1));
                        break;
                    case "ArrowUp":
                        (e.preventDefault(), u(n - 1));
                        break;
                    case "Home":
                        (e.preventDefault(), u(0));
                        break;
                    case "End":
                        (e.preventDefault(), u(t.length - 1));
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
                            c.current[t] = e;
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
                            children: (0, v.cq)(e),
                        }),
                    },
                    e,
                ),
            ),
        })
    );
}
var eF = n(769909);
let eH = [v.v7.BASE, v.v7.OUTFIT_COLOR],
    eK = [v.v7.AURA, v.v7.WEARABLE, v.v7.SHOES, v.v7.HAT, v.v7.OUTFIT, v.v7.FACE];
function eV(e) {
    let { activeCustomizationOption: t, onSelectOption: n, disabled: a = !1 } = e,
        s = d.useRef(null),
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
                className: m()(eF.Mf, eF.OS, { [eF.vu]: l || i }),
                children: [
                    (0, r.jsx)(J.E, {
                        tag: "span",
                        variant: "heading-md/extrabold",
                        color: "none",
                        children: l ? (0, v.cq)(t) : ee.intl.string($.default["iXpQc+"]),
                    }),
                    (0, r.jsx)(eP._, { size: "refresh_sm", color: "currentColor" }),
                ],
            });
        },
    });
}
function ez(e) {
    let { activeCustomizationOption: t, onSelectOption: n, disabled: a = !1 } = e,
        s = d.useId();
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
                            className: m()(eF.Mf, { [eF.vu]: l }),
                            children: [
                                (0, r.jsx)(ef.A, {
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
                                    children: (0, v.cq)(e),
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
function eQ() {
    let [e, t] = d.useState(v.v7.BASE),
        { traitOptions: n, selectedOption: a, onSelectOption: s } = eI({ customizationOption: e }),
        { blockedTraits: l } = O(),
        i = l.includes(v.hw[e]),
        c = (0, x.bG)([o.A], () => o.A.isSaving);
    return (0, r.jsxs)(eO, {
        className: eB.n,
        children: [
            (0, r.jsx)(ey.D, {
                variant: "heading-xl/medium",
                color: "none",
                className: eB.D,
                children: ee.intl.string($.default["q2nj/Z"]),
            }),
            (0, r.jsx)(ez, { activeCustomizationOption: e, onSelectOption: t, disabled: c || i }),
            (0, r.jsx)(eS, {
                customizationOption: e,
                traitOptions: n,
                selectedOption: a,
                onSelectOption: s,
                disabled: c,
            }),
        ],
    });
}
var eY = n(81466);
function eJ() {
    let e = (0, x.bG)([o.A], () => o.A.stats?.games);
    return (0, r.jsxs)(eO, {
        children: [
            (0, r.jsx)(ea, {
                icon: eY.CalendarIcon,
                value: Math.round(e?.totalDaysPlayed ?? 0),
                topPercent: (0, E.bD)(e?.totalDaysPlayedPercentile),
                children: ee.intl.string($.default["4N5p4D"]),
            }),
            (0, r.jsx)(eT, { customizationOption: v.v7.AURA }),
        ],
    });
}
var eq = n(687966);
function eW() {
    let e = (0, x.bG)([o.A], () => o.A.stats?.games);
    return (0, r.jsxs)(eO, {
        children: [
            (0, r.jsx)(ea, {
                icon: eq.GameControllerIcon,
                value: Math.round(e?.totalGamesPlayed ?? 0),
                topPercent: (0, E.bD)(e?.totalGamesPlayedPercentile),
                children: ee.intl.string($.default.HM2fjf),
            }),
            (0, r.jsx)(eT, { customizationOption: v.v7.WEARABLE }),
        ],
    });
}
var eZ = n(534890),
    eX = n(465199);
function e$() {
    let e = (0, x.bG)([o.A], () => o.A.stats?.messages);
    return (0, r.jsxs)(eO, {
        children: [
            (0, r.jsx)(ea, {
                icon: eZ.ChatIcon,
                value: Math.round(e?.numMessagesSent ?? 0),
                topPercent: (0, E.bD)(e?.numMessagesSentPercentile),
                children: ee.intl.string(eX.default.wWKySP),
            }),
            (0, r.jsx)(eT, { customizationOption: v.v7.OUTFIT }),
        ],
    });
}
var e0 = n(664121);
function e1() {
    let e = (0, x.bG)([o.A], () => o.A.stats?.guilds?.guilds[0]);
    return (0, r.jsxs)(eO, {
        children: [
            (0, r.jsx)(ea, {
                icon: e0.R,
                value: Math.round(e?.numDaysInteracted ?? 0),
                topPercent: (0, E.bD)(e?.numDaysInteractedPercentile),
                children: ee.intl.string($.default["M+a+t1"]),
            }),
            (0, r.jsx)(eT, { customizationOption: v.v7.HAT }),
        ],
    });
}
var e5 = n(831544);
function e2() {
    let e = (0, x.bG)([o.A], () => o.A.stats?.voice),
        t = Math.round(e?.totalVoiceMinutes ?? 0);
    return (0, r.jsxs)(eO, {
        children: [
            (0, r.jsx)(ea, {
                icon: e5.MicrophoneIcon,
                value: t,
                topPercent: (0, E.bD)(e?.totalVoiceMinutesPercentile),
                children: ee.intl.string($.default["3/T12E"]),
            }),
            (0, r.jsx)(eT, { customizationOption: v.v7.FACE }),
        ],
    });
}
function e4(e) {
    let { route: t } = e;
    switch (t) {
        case A.gr.VOICE_FACE:
            return (0, r.jsx)(e2, {});
        case A.gr.MESSAGES_OUTFIT:
            return (0, r.jsx)(e$, {});
        case A.gr.SERVERS_HEADWEAR:
            return (0, r.jsx)(e1, {});
        case A.gr.EMOJI_SHOES:
            return (0, r.jsx)(eM, {});
        case A.gr.GAMES_WEARABLE:
            return (0, r.jsx)(eW, {});
        case A.gr.GAME_TIME_AURA:
            return (0, r.jsx)(eJ, {});
        case A.gr.FINALIZE_CHARACTER:
            return (0, r.jsx)(eQ, {});
        default:
            return null;
    }
}
var e3 = n(358618),
    e8 = n(983851);
function e9() {
    let e = (0, x.bG)([o.A], () => o.A.isMuted),
        t = e ? e3._ : e8.H;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(U, {
                size: "sm",
                "aria-label": ee.intl.string(e ? ee.t.YqAjXy : ee.t.w4m945),
                onClick: c.K8,
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
var e6 = n(435558),
    e7 = n(477155),
    te = n(935286),
    tt = n(289873),
    tn = n(621466);
function tr(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    d.useEffect(() => {
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
            className: m()(ta.A4, ta.aX),
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
            className: m()(ta.A4, ta.K2),
            onClick: t,
            disabled: n,
            "aria-label": ee.intl.string(ee.t.PDTjLN),
            children: (0, r.jsx)(te.E, { color: "currentColor" }),
        })
    );
}
function ti(e) {
    let { onBack: t, isRouteBlocked: n } = e,
        a = (0, x.bG)([o.A], () => o.A.isSaving);
    return (0, r.jsx)(ts, {
        onClick: function () {
            a || t();
        },
        disabled: a || n,
    });
}
function tc(e) {
    let { onNext: t, throttledNavigate: n, isRouteBlocked: s } = e,
        l = (0, x.bG)([o.A], () => o.A.isSaving),
        i = l || s;
    function d() {
        n(u);
    }
    async function u() {
        if (l) return;
        let e = (0, _.XI)(o.A.selectedCharacterTraits);
        (await (0, c.yE)(e)) ? t() : (0, a.P0)({ text: ee.intl.string(ee.t.fEptJP), variant: "critical" });
    }
    return (
        tr("ArrowRight", d, i),
        (0, r.jsxs)(F, {
            size: "custom",
            className: m()(ta.A4, ta.K2, ta.UN),
            onClick: d,
            disabled: i,
            "aria-label": ee.intl.string(ee.t["R3BPH+"]),
            children: [
                (0, r.jsx)(W, {
                    variant: "experimental/mono-md/normal",
                    className: ta.L8,
                    children: ee.intl.string(ee.t["R3BPH+"]),
                }),
                l
                    ? (0, r.jsx)(tt.y, { type: tt.t.SPINNING_CIRCLE_SIMPLE, className: ta.u1, itemClassName: ta.$N })
                    : (0, r.jsx)(te.E, { size: "refresh_sm", color: "currentColor" }),
            ],
        })
    );
}
function to(e) {
    let { activeRoute: t, isRouteBlocked: n, onBack: a, onNext: s } = e,
        l = d.useMemo(() => (0, e6.throttle)((e) => e(), 500, { trailing: !1 }), []);
    switch (t) {
        case A.gr.HOME:
            return null;
        case A.gr.FINALIZE_CHARACTER:
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
function td(e) {
    let { className: t } = e;
    return (0, r.jsx)(H, {
        animatedSrc:
            "https://cdn.discordapp.com/assets/content/02e9ae4cdbec0b2adef22c9a5659f5c7340e399cc8932e8af6d41e62a37644ae.png",
        staticSrc:
            "https://cdn.discordapp.com/assets/content/f08be0abd0d224b5f7e1e5d6c1ef8e4d24cddcb712e2c624dcc6ea3d136818d5.png",
        className: t,
    });
}
var tu = n(771639);
let tm = { "--custom-checkpoint-screen-vertical-inset": "88px" };
function th(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: tu.n, style: tm, children: t });
}
var tx = n(639331);
function tg() {
    let e = (0, x.bG)([o.A], () => o.A.fetchState !== o.T.SUCCESS || null != o.A.stats);
    return (0, r.jsx)(th, {
        children: (0, r.jsxs)("div", {
            className: tx.Qs,
            children: [
                (0, r.jsxs)("div", {
                    className: tx.Ok,
                    children: ["2026", !e && (0, r.jsx)(td, { className: tx.gi })],
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
    tE = n(155718),
    tp = n(294454),
    tN = n(489414),
    tS = n(878358),
    tC = n(383233),
    tR = n(819648),
    tb = n(677059);
function tI(e) {
    let { children: t } = e;
    return (0, r.jsx)(W, { variant: "heading-xxl/medium", className: tb.h, children: t });
}
var tT = n(100391);
function t_(e) {
    let { icon: t, children: n } = e;
    return (0, r.jsxs)("div", {
        className: tT.D,
        children: [
            (0, r.jsx)(t, { size: "md", color: "currentColor" }),
            (0, r.jsx)(W, { variant: "heading-lg/extrabold", className: tT.Q, children: n }),
        ],
    });
}
var tO = n(456410);
function tM(e) {
    let { name: t, label: n, checked: a, onSelect: s, children: l } = e;
    return (0, r.jsx)(tj.vN, {
        within: !0,
        children: (0, r.jsxs)("label", {
            className: m()(tO.uK, { [tO.KD]: a }),
            children: [
                (0, r.jsx)(ef.A, {
                    children: (0, r.jsx)("input", { type: "radio", name: t, checked: a, onChange: s, "aria-label": n }),
                }),
                a ? (0, r.jsx)("div", { className: tO.Gt, "aria-hidden": !0 }) : null,
                (0, r.jsx)("div", { className: tO.Nr, "aria-hidden": !0, children: l }),
            ],
        }),
    });
}
function ty() {
    let e = (0, x.bG)([o.A], () => o.A.character),
        t = (0, x.bG)([o.A], () => o.A.stats),
        n = d.useId(),
        s = d.useMemo(() => {
            var n, r;
            return ((n = e),
            (r = t),
            null != n && null != r
                ? [tf.Q.CHARACTER_ONLY, tf.Q.DEFAULT, tf.Q.STATS_ONLY]
                : null != n
                  ? [tf.Q.CHARACTER_ONLY]
                  : null != r
                    ? [tf.Q.STATS_ONLY]
                    : []).map((n) => ({ cardType: n, checkpointData: (0, tR.Go)(n, e, t) }));
        }, [e, t]),
        [l, i] = d.useState(s.at(0)?.cardType),
        u = s.find((e) => {
            let { cardType: t } = e;
            return t === l;
        });
    return null == u
        ? null
        : (0, r.jsx)(th, {
              children: (0, r.jsxs)("div", {
                  className: tO.uM,
                  children: [
                      (0, r.jsxs)("div", {
                          className: tO.wx,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: tO.R_,
                                  children: [
                                      (0, r.jsx)(t_, { icon: tv.M, children: ee.intl.string(eX.default.ir6nEQ) }),
                                      (0, r.jsx)(W, {
                                          variant: "display-lg",
                                          className: tO.Vy,
                                          children: ee.intl.string(eX.default["T7cl+Y"]),
                                      }),
                                  ],
                              }),
                              (0, r.jsx)("div", {
                                  className: tO.h_,
                                  children: (0, r.jsx)(tI, { children: ee.intl.string($.default.KXDPot) }),
                              }),
                          ],
                      }),
                      (0, r.jsx)("div", {
                          role: "radiogroup",
                          "aria-label": ee.intl.string($.default.KXDPot),
                          className: tO.kR,
                          children: s.map((e) => {
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
                                      checked: t === u.cardType,
                                      onSelect: () => i(t),
                                      children: (0, r.jsx)(tS.A, { checkpointData: a }),
                                  },
                                  t,
                              );
                          }),
                      }),
                      (0, r.jsxs)(F, {
                          size: "custom",
                          className: tO.sY,
                          "aria-label": ee.intl.string(ee.t.I3ltXO),
                          onClick: function () {
                              if (null == u) return;
                              let { cardType: e, checkpointData: t } = u;
                              (0, tp.fO)({
                                  message: new tC.Ay({
                                      content: "",
                                      components: [
                                          { type: tE.I5.CHECKPOINT_CARD, id: (0, tN.X1)("0"), checkpointData: t },
                                      ],
                                  }),
                                  source: "checkpoint",
                                  customSendHandler: async (t, n, r) => {
                                      let { withMessage: s } = n;
                                      r(!0);
                                      try {
                                          (await (0, c.jA)(t, s ?? "", e),
                                              (0, tp.Be)(),
                                              (0, a.P0)({ text: ee.intl.string(ee.t.kwmYkt), variant: "success" }));
                                      } catch {
                                          (0, a.P0)({ text: ee.intl.string(ee.t.iufib1), variant: "critical" });
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
                                  className: tO.RC,
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
    tD = n(998304),
    tk = n(427262),
    tL = n(438389);
let tG = (0, tD.j5)(ec.Kr);
function tU(e) {
    let { onStart: t } = e,
        n = (0, x.bG)([I.default], () => I.default.getCurrentUser()),
        a = (0, tk.tx)(n),
        s = (0, x.bG)([P.Ay], () => P.Ay.useReducedMotion);
    return (
        tr("ArrowRight", t),
        (0, r.jsxs)(th, {
            children: [
                (0, r.jsxs)("div", {
                    className: tL.Qs,
                    children: [
                        (0, r.jsxs)("div", {
                            className: tL.wx,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: tL.Qq,
                                    children: [
                                        (0, r.jsx)(W, {
                                            variant: "display-lg",
                                            className: tL.DD,
                                            children: ee.intl.string(eX.default["CdU/PF"]),
                                        }),
                                        (0, r.jsx)(W, {
                                            variant: "heading-xxl/medium",
                                            children: ee.intl.formatToPlainString($.default.xhZ23b, { username: a }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", {
                                    className: tL.CB,
                                    children: (0, r.jsx)(tw.U, {
                                        artboard: "Entry",
                                        className: tL.lW,
                                        fit: "contain",
                                        withReducedMotion: "short-loop",
                                        dataBinding: { iconColor: tG, reducedMotion: s },
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsxs)(F, {
                            size: "custom",
                            className: tL.ni,
                            "aria-label": ee.intl.string(ee.t.I0v0Qv),
                            onClick: t,
                            children: [
                                (0, r.jsx)(tP.PlayIcon, { size: "refresh_sm", color: "currentColor" }),
                                (0, r.jsx)(W, {
                                    variant: "experimental/mono-md/normal",
                                    className: tL.qK,
                                    children: ee.intl.string(ee.t.I0v0Qv),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(W, {
                    variant: "text-md/medium",
                    className: tL.al,
                    children: ee.intl.format(eX.default.g476ZL, { name: "Exyl" }),
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
    tQ = n(406956);
let tY = (0, tD.j5)(ec.Kr);
function tJ(e) {
    let { value: t, alignment: n = "left" } = e,
        a = (0, x.bG)([P.Ay], () => P.Ay.useReducedMotion),
        [s, l] = d.useState(0),
        i = a ? t : s;
    d.useEffect(() => {
        if (a) return;
        let e = performance.now(),
            n = requestAnimationFrame(function r(a) {
                let s = Math.min((a - e) / 500, 1);
                (l(Math.round(t * s)), s < 1 && (n = requestAnimationFrame(r)));
            });
        return () => cancelAnimationFrame(n);
    }, [t, a]);
    let c = "center" === n ? tz.m : tB.w;
    return (0, r.jsxs)("div", {
        className: tQ.lY,
        children: [
            (0, r.jsx)("div", { className: tQ.VL, children: t }),
            (0, r.jsx)(c, {
                className: tQ.lW,
                fit: "layout",
                withReducedMotion: "short-loop",
                dataBinding: { DisplayValue: i, TextColor: tY },
            }),
            (0, r.jsx)(ef.A, { children: t.toLocaleString(ee.intl.currentLocale) }),
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
            (0, r.jsx)("span", { ref: s, className: m()(tq.Qq, tq.xP), children: t }),
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
            (0, r.jsx)(td, { className: tq.gi }),
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
    t4 = [0, 0, 0],
    t3 = `
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
    t8 = `
precision mediump float;

varying vec2 v_texcoord;
varying highp vec3 v_lighting;

uniform sampler2D u_texture;

void main() {
  highp vec4 texelColor = texture2D(u_texture, v_texcoord);
  gl_FragColor = vec4(texelColor.rgb * v_lighting, texelColor.a);
}
`,
    t9 = [
        -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5,
        -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5,
        0.5, 0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, -0.5,
        -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5,
        -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5,
        -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5,
    ],
    t6 = [
        0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0,
        1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0,
    ],
    t7 = [
        0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
        1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
        -1, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
        1, 0, 0,
    ];
function ne(e) {
    let t,
        { emoji: n } = e,
        [a, s] = d.useState(null),
        [l, i] = d.useState(null),
        c = d.useRef(new Image()),
        [o, u] = d.useState(null),
        [h, g] = d.useState(!1),
        f = d.useRef(0),
        j = d.useRef(0),
        v = d.useRef(45),
        A = d.useRef(45),
        E = (0, x.bG)([P.Ay], () => P.Ay.useReducedMotion),
        p = 70 * !E,
        N = 40 * !E,
        S = d.useRef(p),
        C = d.useRef(N),
        R = d.useRef(!1),
        b = d.useRef(0),
        I = d.useRef(0);
    ((t = d.useRef(null)),
        d.useEffect(() => {
            if (null == t.current || null == l) return;
            let e = t.current,
                n = e.createTexture();
            return (
                e.bindTexture(e.TEXTURE_2D, n),
                e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, l),
                e.generateMipmap(e.TEXTURE_2D),
                () => e.deleteTexture(n)
            );
        }, [l, o]),
        d.useEffect(() => {
            let e,
                n = 0,
                r = a?.getContext("webgl");
            if (null == r || null == a || null == l) return;
            t.current = r;
            let s = r.createShader(r.VERTEX_SHADER),
                i = r.createShader(r.FRAGMENT_SHADER);
            if (null == s || null == i) return;
            if (
                (r.shaderSource(s, t3),
                r.shaderSource(i, t8),
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
                d = r.getAttribLocation(c, "a_texcoord"),
                u = r.getUniformLocation(c, "u_matrix"),
                m = r.getUniformLocation(c, "u_texture"),
                h = r.getAttribLocation(c, "a_vertexNormal"),
                x = r.getUniformLocation(c, "u_normalMatrix"),
                g = r.createBuffer();
            (r.bindBuffer(r.ARRAY_BUFFER, g),
                r.bufferData(r.ARRAY_BUFFER, new Float32Array(t7), r.STATIC_DRAW),
                r.vertexAttribPointer(h, 3, r.FLOAT, !1, 0, 0),
                r.enableVertexAttribArray(h));
            let f = r.createBuffer();
            (r.bindBuffer(r.ARRAY_BUFFER, f),
                (e = new Float32Array(t9)),
                r.bufferData(r.ARRAY_BUFFER, e, r.STATIC_DRAW));
            let j = r.createBuffer();
            (r.bindBuffer(r.ARRAY_BUFFER, j), r.bufferData(r.ARRAY_BUFFER, new Float32Array(t6), r.STATIC_DRAW));
            let E = tX.DF(60);
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
                        r.enableVertexAttribArray(d),
                        r.bindBuffer(r.ARRAY_BUFFER, j),
                        r.vertexAttribPointer(d, 2, r.FLOAT, !1, 0, 0));
                    let l = a.clientWidth / a.clientHeight,
                        i = t$.fN(t$.vt(), E, l, 1, 2e3),
                        h = t$.t5(t$.vt(), t5, t4, t2),
                        g = t$.lw(t$.vt(), i, h),
                        p = t$.vt();
                    (t$.eL(p, p, t), t$.Z8(p, p, s));
                    let N = t$.lw(t$.vt(), g, p),
                        S = t$.vt();
                    (t$.B8(S, p),
                        t$.mg(S, S),
                        r.uniformMatrix4fv(x, !1, S),
                        r.uniformMatrix4fv(u, !1, N),
                        r.uniform1i(m, 0),
                        r.drawArrays(r.TRIANGLES, 0, 36),
                        (n = requestAnimationFrame(e)));
                })),
                () => cancelAnimationFrame(n)
            );
        }, [v, A, a, l]));
    let T = d.useCallback(() => {
        let e = l?.getContext("2d");
        null != l &&
            null != e &&
            ((e.fillStyle = "black"),
            e.fillRect(0, 0, l.width, l.height),
            e.drawImage(c.current, 0, 0, l.width, l.height),
            (e.fillStyle = ec.qn),
            e.fillRect(0, 0, l.width, 1),
            e.fillRect(0, 0, 1, l.height),
            e.fillRect(0, l.height - 1, l.width, 1),
            e.fillRect(l.width - 1, 0, 1, l.height),
            u(n),
            g(!0));
    }, [n, c, l]);
    (d.useEffect(() => {
        null != l &&
            ((c.current.crossOrigin = "anonymous"), (c.current.src = (0, t0.Ez)(n, 256)), (c.current.onload = T));
    }, [n, T, c, l]),
        d.useEffect(
            () => (
                !(function e(t) {
                    let n = 0.001 * t,
                        r = Math.min(n - j.current, 0.1);
                    if (((A.current += -C.current * r), (v.current += -S.current * r), !R.current)) {
                        if (Math.abs(S.current) > p) {
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
            [p, N],
        ));
    let _ = d.useCallback((e) => {
            ((R.current = !0), (S.current = 0), (C.current = 0), (b.current = e.clientX), (I.current = e.clientY));
        }, []),
        O = d.useCallback((e) => {
            if (R.current) {
                let t = (e.clientX - b.current) / window.devicePixelRatio;
                ((S.current = -((e.clientY - I.current) / window.devicePixelRatio) * (100 / window.devicePixelRatio)),
                    (C.current = -t * (100 / window.devicePixelRatio)),
                    (b.current = e.clientX),
                    (I.current = e.clientY));
            }
        }, []),
        M = d.useCallback(() => {
            R.current = !1;
        }, []);
    return (
        d.useEffect(
            () => (
                window.addEventListener("mouseup", M),
                window.addEventListener("mousemove", O),
                () => {
                    (window.removeEventListener("mouseup", M), window.removeEventListener("mousemove", O));
                }
            ),
            [O, M],
        ),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("canvas", {
                    className: m()(t1.Ji, { [t1.q4]: !h }),
                    ref: s,
                    height: 512,
                    width: 512,
                    onMouseDown: _,
                }),
                (0, r.jsx)("canvas", { className: t1.R, ref: i, height: 256, width: 256 }),
            ],
        })
    );
}
var nt = n(826820);
let nn = [];
function nr(e) {
    let { emojiStats: t } = e,
        n = Math.round(t?.numEmojisSent ?? 0),
        a = (0, E.bD)(t?.numEmojisSentPercentile);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: nt.dJ,
                children: [
                    (0, r.jsx)(t_, { icon: Y.o, children: ee.intl.string($.default.ZTDCIv) }),
                    (0, r.jsx)(tJ, { value: n }),
                ],
            }),
            (0, r.jsx)(tI, {
                children:
                    null != a
                        ? ee.intl.format($.default.o7vDrk, {
                              percent: a,
                              percentHook: (e, t) => (0, r.jsx)(tK, { children: e }, t),
                          })
                        : ee.intl.format($.default.NFptic, { numEmojis: n }),
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
                    (0, r.jsx)(t_, { icon: Y.o, children: ee.intl.string($.default.ZTDCIv) }),
                    (0, r.jsx)(tZ, { value: t }),
                ],
            }),
            (0, r.jsx)(tI, { children: ee.intl.format($.default["660/Rr"], { numEmojis: (0, E.wj)(t) }) }),
        ],
    });
}
function ns() {
    let e = (0, x.bG)([o.A], () => o.A.stats?.emojis),
        t = (0, x.bG)([o.A], () => (0, E.y7)(o.A.stats)),
        n = (0, x.bG)([o.A], () => o.A.globalStats?.emojis),
        a = !t && null != n,
        s = (a ? n.emojis : e?.emojis) ?? nn,
        [l, i] = d.useState(0),
        c = s[l],
        u = y(h);
    return (0, r.jsx)(th, {
        children: (0, r.jsxs)("div", {
            className: nt.kL,
            children: [
                (0, r.jsx)("div", { className: nt.KY, children: null != c && (0, r.jsx)(ne, { emoji: c }) }),
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
                                            (u(), i(t));
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
        l = !(0, x.bG)([P.Ay], () => P.Ay.useReducedMotion) && !0 === t.animated;
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
    nd = n(597770),
    nu = n(559647),
    nm = n(793574),
    nh = n(95369),
    nx = n(570287),
    ng = n(486020),
    nf = n(801305);
let nj = [],
    nv = (0, tD.j5)(ec.Kr),
    nA = { r: 0, g: 0, b: 0, a: 1 },
    nE = {
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
function np(e) {
    return null != e ? ng.Ay.getUserAvatarURL(e, !1, 160, "png") : void 0;
}
function nN(e) {
    let t,
        { route: n, onNextStep: a, onPreviousStep: s } = e,
        l = (0, x.bG)([o.A], () => o.A.stats?.users ?? nj),
        i = (0, x.bG)([o.A], () => o.A.stats?.sidekick),
        c = (0, x.bG)([I.default], () => I.default.getCurrentUser()),
        u = (0, x.bG)([P.Ay], () => P.Ay.useReducedMotion),
        h = d.useRef(null),
        g = d.useRef(void 0),
        f = (function (e, t) {
            let [n, r] = d.useState({ route: e, hasShownSquad: e === A.gr.SQUAD, isTransitioning: !1 });
            switch (
                (n.route !== e &&
                    r({
                        route: e,
                        hasShownSquad: n.hasShownSquad || e === A.gr.SQUAD,
                        isTransitioning: !t && n.route === A.gr.SQUAD && e === A.gr.SIDEKICK,
                    }),
                d.useEffect(() => {
                    if (!n.isTransitioning) return;
                    let e = setTimeout(() => r((e) => ({ ...e, isTransitioning: !1 })), 1500);
                    return () => clearTimeout(e);
                }, [n.isTransitioning]),
                e)
            ) {
                case A.gr.SQUAD_TRANSITION:
                    return 5 * !!n.hasShownSquad;
                case A.gr.SQUAD:
                    return 1;
                case A.gr.SIDEKICK:
                    return n.isTransitioning ? 2 : 3;
                case A.gr.SIDEKICK_LEAVE:
                    return t ? 3 : 4;
                default:
                    return 0;
            }
        })(n, u);
    ((t = d.useRef(!0)),
        d.useEffect(() => {
            if (n !== A.gr.SIDEKICK_LEAVE) {
                t.current = !1;
                return;
            }
            if (t.current) return void s();
            if (u) return void a();
            let e = setTimeout(a, 1e3);
            return () => clearTimeout(e);
        }, [a, s, u, n]));
    let [j, v] = l,
        E = ((0, tk.tx)(j) ?? "").toLocaleUpperCase(),
        p = ((0, tk.tx)(v) ?? "").toLocaleUpperCase(),
        N = (0, tk.tx)(i?.user) ?? "",
        S = l.length < 2,
        C = n === A.gr.SIDEKICK || n === A.gr.SIDEKICK_LEAVE;
    d.useEffect(() => () => clearInterval(g.current), []);
    let R = d.useCallback(() => {
        (clearInterval(g.current),
            (g.current = setInterval(() => {
                let e = h.current?.getProperties();
                e?.twoFriends?.value === S &&
                    e?.reducedMotion?.value === u &&
                    e?.["Avatar01/Username"]?.value === N.toLocaleUpperCase() &&
                    (h.current?.play(), clearInterval(g.current));
            }, 50)));
    }, [u, N, S]);
    return (0, r.jsxs)(th, {
        children: [
            (0, r.jsx)(ni.m, {
                ref: h,
                className: nf.lW,
                fit: "contain",
                autoplay: !1,
                onLoad: R,
                withReducedMotion: "play",
                dataBinding: {
                    ...nE,
                    AnimationState: f,
                    "Avatar01/img": np(i?.user),
                    "Avatar02/img": np(v),
                    "Avatar03/img": np(j),
                    "Avatar04/img": np(i?.user),
                    "Avatar05/img": np(c),
                    "Avatar01/Username": N.toLocaleUpperCase(),
                    "Avatar02/Username": p,
                    "Avatar03/Username": E,
                    "Avatar04/Username": N.toLocaleUpperCase(),
                    twoFriends: S,
                    reducedMotion: u,
                },
            }),
            n === A.gr.SQUAD_TRANSITION &&
                (0, r.jsx)("div", {
                    className: m()(nf.Qs, nf.kY),
                    children: (0, r.jsx)(tI, { children: ee.intl.string($.default["6RSp5q"]) }),
                }),
            n === A.gr.SQUAD &&
                (0, r.jsx)("div", {
                    className: nf.Qs,
                    children: (0, r.jsx)(nS, {
                        title: ee.intl.string(eX.default.OzY5Ns),
                        description: ee.intl.string($.default.EqdLDd),
                    }),
                }),
            C &&
                null != i &&
                (0, r.jsxs)("div", {
                    className: m()(nf.Qs, nf.yG),
                    children: [
                        (0, r.jsxs)("div", {
                            className: nf.Cv,
                            children: [
                                (0, r.jsx)(nS, {
                                    title: ee.intl.string(eX.default["+uwOHt"]),
                                    description: ee.intl.string($.default["/ctmGw"]),
                                }),
                                (0, r.jsx)(nC, { sidekick: i }),
                            ],
                        }),
                        (0, r.jsx)(nR, { user: i.user, username: N }),
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
                    (0, r.jsx)(t_, { icon: nc.$, children: ee.intl.string(eX.default.ZQakPR) }),
                    (0, r.jsx)(W, { variant: "display-lg", className: nf.Vy, children: t }),
                ],
            }),
            (0, r.jsx)(tI, { children: n }),
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
                    (0, r.jsx)(e5.MicrophoneIcon, { size: "md", color: "currentColor" }),
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
function nR(e) {
    let { user: t, username: n } = e,
        [s, l] = d.useState(""),
        [i, o] = d.useState(!1),
        [u, h] = d.useState(!1),
        x = (0, nx.A)(t.id),
        g = s.length > 0 && s.length <= 250 && !i && !u,
        f = i ? ee.intl.string(ee.t.fjcCk5) : ee.intl.formatToPlainString(ee.t["0ZQw/X"], { name: n });
    async function j() {
        if (g) {
            h(!0);
            try {
                (await (0, c.fr)(s, t.id), l(""), o(!0));
            } catch {
                (0, a.P0)({ text: ee.intl.string(ee.t.fEptJP), variant: "critical" });
            } finally {
                h(!1);
            }
        }
    }
    return x
        ? (0, r.jsxs)("div", {
              className: nf.OG,
              children: [
                  (0, r.jsx)("textarea", {
                      className: nf.yB,
                      value: s,
                      onChange: (e) => l(e.target.value),
                      disabled: i || u,
                      placeholder: f,
                      "aria-label": f,
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
                              children: (0, r.jsx)(nd.GiftIcon, { size: "refresh_sm", color: "currentColor" }),
                          }),
                          (0, r.jsx)(no.D, {
                              className: m()(nf.KD, { [nf.r9]: !g }),
                              onClick: j,
                              "aria-disabled": !g,
                              "aria-label": ee.intl.string(ee.t.oeb1vg),
                              children: (0, r.jsx)(nu.SendMessageIcon, { size: "refresh_sm", color: "currentColor" }),
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
var nb = n(9767);
function nI(e) {
    let { games: t } = e,
        n = Math.round(t?.totalDaysPlayed ?? 0),
        a = (0, E.bD)(t?.totalDaysPlayedPercentile);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: nb.dJ,
                children: [
                    (0, r.jsx)(t_, { icon: eY.CalendarIcon, children: ee.intl.string($.default["4N5p4D"]) }),
                    (0, r.jsx)(tJ, { value: n }),
                ],
            }),
            (0, r.jsx)(tI, {
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
function nT(e) {
    let { numUsersPlayedEveryDay: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: nb.dJ,
                children: [
                    (0, r.jsx)(t_, { icon: eY.CalendarIcon, children: ee.intl.string($.default["dx4+NI"]) }),
                    (0, r.jsx)(tZ, { value: t }),
                ],
            }),
            (0, r.jsx)(tI, { children: ee.intl.format($.default["N32w+2"], { numUsers: (0, E.wj)(t) }) }),
        ],
    });
}
function n_() {
    let e = (0, x.bG)([o.A], () => o.A.stats?.games),
        t = (0, x.bG)([o.A], () => (0, E.uO)(o.A.stats)),
        n = (0, x.bG)([o.A], () => o.A.globalStats?.games?.numUsersPlayedEveryDay),
        a = !t && null != n;
    return (0, r.jsx)(th, {
        children: (0, r.jsxs)("div", {
            className: nb.kL,
            children: [
                (0, r.jsx)(H, {
                    animatedSrc:
                        "https://cdn.discordapp.com/assets/content/e3289e9a0a7faf4db23c3fefa390126fc64a09120fdb701f9dea833dddf671ef.png",
                    staticSrc:
                        "https://cdn.discordapp.com/assets/content/312abde9b19fcf85150d507de3f33096992506459b895ab3ea8d92c8f1e04a28.png",
                    className: nb.HW,
                }),
                (0, r.jsx)("div", {
                    className: nb.C,
                    children: a ? (0, r.jsx)(nT, { numUsersPlayedEveryDay: n }) : (0, r.jsx)(nI, { games: e }),
                }),
            ],
        }),
    });
}
var nO = n(364522),
    nM = n(828062);
function ny(e) {
    let { children: t } = e;
    return (0, r.jsx)(W, { variant: "display-lg", className: nM.V, children: t });
}
var nw = n(109112),
    nP = n(311043),
    nD = n(883053);
function nk(e) {
    let { rank: t, className: n } = e;
    return (0, r.jsxs)(X, { className: m()(nD.T, n), children: ["#", t] });
}
var nL = n(497357);
let nG = "/assets/e74703a44e087adc.svg";
function nU(e) {
    let {
            game: { id: t, name: n, coverImageHash: a },
            rank: s,
            label: l,
            shellImage: i,
            className: c,
        } = e,
        o = (0, x.bG)(
            [nP.A],
            () =>
                nP.A.getGame(t)?.getCoverURL(300) ??
                ng.Ay.getApplicationIconURL({ id: t, icon: a, size: 300, fallbackAvatar: !1 }),
        );
    return (0, r.jsxs)("div", {
        className: m()(nL.LO, c),
        children: [
            (0, r.jsxs)("div", {
                className: nL.Tn,
                children: [
                    (0, r.jsx)("img", { src: i, alt: "", className: nL.vf }),
                    null != o
                        ? (0, r.jsx)("img", { src: o, alt: "", className: nL.Qw })
                        : (0, r.jsx)("div", {
                              className: m()(nL.Qw, nL.uj),
                              children: (0, r.jsx)(nw._, { size: "lg" }),
                          }),
                    null != s && (0, r.jsx)(nk, { rank: s, className: nL.Tm }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: nL.zH,
                children: [
                    (0, r.jsx)(W, { variant: "heading-xl/medium", className: nL.UU, lineClamp: 1, children: n }),
                    (0, r.jsx)(W, { variant: "experimental/mono-md/bold", className: nL.Pf, children: l }),
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
        className: nL.Ms,
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
        a = (0, E.bD)(t?.totalGamesPlayedPercentile),
        s = t?.games ?? nz;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: nV.wx,
                children: [
                    (0, r.jsxs)("div", {
                        className: nV.dJ,
                        children: [
                            (0, r.jsx)(t_, { icon: eq.GameControllerIcon, children: ee.intl.string($.default.HM2fjf) }),
                            (0, r.jsx)(tJ, { value: n }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: nV.h_,
                        children: (0, r.jsx)(tI, {
                            children:
                                null != a
                                    ? ee.intl.format($.default["hc0/yJ"], {
                                          percent: a,
                                          percentHook: (e, t) => (0, r.jsx)(tK, { children: e }, t),
                                      })
                                    : ee.intl.format($.default.aJMJ6b, { numGames: n }),
                        }),
                    }),
                ],
            }),
            (0, r.jsx)(nO.Ip, {
                orientation: "horizontal",
                scrollbarGutter: !1,
                fade: !0,
                className: nV.ag,
                children: s.map((e, t) => {
                    let { game: n, numSessions: a } = e;
                    return 0 === t
                        ? (0, r.jsx)(nH, { game: n, numSessions: a }, n.id)
                        : (0, r.jsx)(nF, { game: n, rank: t + 1, numSessions: a }, n.id);
                }),
            }),
        ],
    });
}
function nQ(e) {
    let { gameStats: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: m()(nV.wx, nV.l7),
                children: [
                    (0, r.jsxs)("div", {
                        className: nV.dJ,
                        children: [
                            (0, r.jsx)(td, { className: nV.gi }),
                            (0, r.jsx)(ny, { children: ee.intl.string($.default.qbCgI7) }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: nV.h_,
                        children: (0, r.jsx)(tI, { children: ee.intl.string($.default["0oDeiM"]) }),
                    }),
                ],
            }),
            (0, r.jsx)(nO.Ip, {
                orientation: "horizontal",
                scrollbarGutter: !1,
                fade: !0,
                className: m()(nV.ag, nV.Zs),
                children: ec.Jb.map((e) => {
                    let { list: n, label: a } = e,
                        s = t[n][0];
                    return null != s ? (0, r.jsx)(nK, { game: s, label: ee.intl.string(a) }, n) : null;
                }),
            }),
        ],
    });
}
function nY() {
    let e = (0, x.bG)([o.A], () => o.A.stats?.games),
        t = (0, x.bG)([o.A], () => (0, E.IH)(o.A.stats)),
        n = (0, x.bG)([o.A], () => o.A.globalStats?.games),
        a = !t && null != n;
    return (0, r.jsx)(th, {
        children: (0, r.jsx)("div", {
            className: nV.kL,
            children: a ? (0, r.jsx)(nQ, { gameStats: n }) : (0, r.jsx)(nB, { gameStats: e }),
        }),
    });
}
var nJ = n(167662);
function nq(e) {
    let { messages: t } = e,
        n = Math.round(t?.numMessagesSent ?? 0),
        a = (0, E.bD)(t?.numMessagesSentPercentile);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: nJ.dJ,
                children: [
                    (0, r.jsx)(t_, { icon: eZ.ChatIcon, children: ee.intl.string(eX.default.wWKySP) }),
                    (0, r.jsx)(tJ, { value: n }),
                ],
            }),
            (0, r.jsx)(tI, {
                children:
                    null != a
                        ? ee.intl.format($.default.TOMBAW, {
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
                    (0, r.jsx)(t_, { icon: eZ.ChatIcon, children: ee.intl.string($.default["2BuyVC"]) }),
                    (0, r.jsx)(tZ, { value: t }),
                ],
            }),
            (0, r.jsx)(tI, {
                children: ee.intl.format($.default.bAxEs2, {
                    numWords: (0, E.wj)(t),
                    numCopies: (0, E.wj)((0, E.yQ)(t)),
                }),
            }),
        ],
    });
}
function nZ() {
    let e = (0, x.bG)([o.A], () => o.A.stats?.messages),
        t = (0, x.bG)([o.A], () => (0, E.nb)(o.A.stats)),
        n = (0, x.bG)([o.A], () => o.A.globalStats?.messages?.numWordsSent),
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
    return null == t.icon && n < 48
        ? (0, r.jsx)("div", {
              className: m()(n$.K, n$.J),
              style: { width: n, height: n },
              "aria-hidden": !0,
              children: (0, r.jsx)(J.E, { variant: "text-md/medium", children: (0, E.oW)(t.name) }),
          })
        : (0, r.jsx)(nX.Ay, {
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
                    (0, r.jsx)(e5.MicrophoneIcon, { size: "md", color: "currentColor" }),
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
var n4 = n(972106);
let n3 = [];
function n8(e) {
    let { guild: t, rank: n, iconSize: a = 100, children: s } = e;
    return (0, r.jsxs)("div", {
        className: n4.w_,
        children: [
            (0, r.jsxs)("div", {
                className: n4.jj,
                children: [
                    (0, r.jsx)(nk, { rank: n }),
                    (0, r.jsxs)("div", {
                        className: n4.gI,
                        children: [
                            (0, r.jsx)(W, {
                                variant: "heading-xxl/medium",
                                className: n4.J5,
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
function n9(e) {
    let { guild: t, numVoiceMinutes: n, numMessagesSent: a } = e;
    return (0, r.jsx)(n8, {
        guild: t,
        rank: 1,
        iconSize: 140,
        children: (0, r.jsx)(n2, { numVoiceMinutes: n, numMessagesSent: a }),
    });
}
function n6(e) {
    let { guilds: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: n4.wx,
                children: [
                    (0, r.jsxs)("div", {
                        className: n4.R_,
                        children: [
                            (0, r.jsx)(t_, { icon: e0.R, children: ee.intl.string($.default.Mb5E6r) }),
                            (0, r.jsx)(ny, { children: ee.intl.string(eX.default.F0fkrh) }),
                        ],
                    }),
                    (0, r.jsx)(tI, { children: ee.intl.string($.default.IN1DaS) }),
                ],
            }),
            (0, r.jsx)("div", {
                className: n4.Pl,
                children: t.map((e, t) => {
                    let { guild: n, numMessagesSent: a, numVoiceMinutes: s } = e;
                    return 0 === t
                        ? (0, r.jsx)(n9, { guild: n, numMessagesSent: a ?? 0, numVoiceMinutes: s ?? 0 }, n.id)
                        : (0, r.jsx)(n8, { guild: n, rank: t + 1 }, n.id);
                }),
            }),
        ],
    });
}
function n7(e) {
    let { guilds: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: n4.wx,
                children: [
                    (0, r.jsxs)("div", {
                        className: n4.R_,
                        children: [
                            (0, r.jsx)(td, { className: n4.gi }),
                            (0, r.jsx)(ny, { children: ee.intl.string(eX.default.F0fkrh) }),
                        ],
                    }),
                    (0, r.jsx)(tI, { children: ee.intl.string($.default.bhnqop) }),
                ],
            }),
            (0, r.jsx)("div", {
                className: n4.Pl,
                children: t.map((e, t) => (0, r.jsx)(n8, { guild: e, rank: t + 1 }, e.id)),
            }),
        ],
    });
}
function re() {
    let e = (0, x.bG)([o.A], () => o.A.stats?.guilds?.guilds ?? n3),
        t = (0, x.bG)([o.A], () => o.A.globalStats?.guilds?.guildsByMembers),
        n = 0 === e.length && null != t;
    return (0, r.jsx)(th, {
        children: (0, r.jsx)("div", {
            className: n4.kL,
            children: n ? (0, r.jsx)(n7, { guilds: t }) : (0, r.jsx)(n6, { guilds: e }),
        }),
    });
}
var rt = n(155094);
function rn(e) {
    let { icon: t, title: n, description: a } = e;
    return (0, r.jsx)(th, {
        children: (0, r.jsxs)("div", {
            className: rt.Q,
            children: [(0, r.jsx)(t_, { icon: t, children: n }), (0, r.jsx)(tI, { children: a })],
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
function rd(e) {
    let { character: t, power: n } = e,
        a = (0, j.o)(t);
    return (0, r.jsxs)(rs.A, {
        cardColorPalette: a,
        size: ro.W.LG,
        children: [
            (0, r.jsx)(rl.A, {}),
            (0, r.jsx)(rc.A, { variant: "full" }),
            null != n
                ? (0, r.jsx)(ri.A, {
                      powerLevel: (0, tR.Le)(n.powerLevel),
                      powerLevelUnits: (0, tR.sX)(n.powerLevelPercentile),
                  })
                : null,
            (0, r.jsx)(ra.A, { character: t }),
        ],
    });
}
var ru = n(58410);
function rm() {
    let e = (0, x.bG)([o.A], () => o.A.stats),
        t = (0, x.bG)([o.A], () => o.A.character),
        n = e?.guilds?.guilds[0],
        a = e?.emojis?.emojis[0],
        s = e?.games?.games[0]?.game,
        l =
            null != s
                ? ng.Ay.getApplicationIconURL({ id: s.id, icon: s.iconHash, size: 40, fallbackAvatar: !1 })
                : void 0;
    return (0, r.jsx)(th, {
        children: (0, r.jsxs)("div", {
            className: ru.z,
            children: [
                null != t ? (0, r.jsx)(rd, { character: t, power: e?.power }) : null,
                (0, r.jsxs)("div", {
                    className: ru.zH,
                    children: [
                        (0, r.jsxs)("div", {
                            className: ru.R_,
                            children: [
                                (0, r.jsx)(t_, { icon: tv.M, children: ee.intl.string(eX.default.ir6nEQ) }),
                                (0, r.jsx)(W, {
                                    variant: "display-lg",
                                    className: ru.Vy,
                                    children: ee.intl.string(eX.default.y4M1na),
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: ru.M1,
                            children: [
                                (0, r.jsx)(rh, {
                                    label: ee.intl.string($.default.MSrV9z),
                                    value: e?.voice?.totalVoiceMinutes,
                                }),
                                (0, r.jsx)(rh, {
                                    label: ee.intl.string($.default.hhh11L),
                                    value: e?.messages?.numMessagesSent,
                                }),
                                (0, r.jsx)(rh, {
                                    label: ee.intl.string($.default["f5S+pt"]),
                                    value: n?.numDaysInteracted,
                                }),
                                (0, r.jsx)(rx, {
                                    label: ee.intl.string(eX.default["8XPMJj"]),
                                    icon: null != n ? (0, r.jsx)(n1, { guild: n.guild, size: 40 }) : (0, r.jsx)(rg, {}),
                                    name: null != n ? n.guild.name : ee.intl.string($.default.GultYJ),
                                }),
                                (0, r.jsx)(rh, {
                                    label: ee.intl.string($.default.xVSlv3),
                                    value: e?.emojis?.numEmojisSent,
                                }),
                                (0, r.jsx)(rx, {
                                    label: ee.intl.string(eX.default["3sARW7"]),
                                    icon:
                                        null != a
                                            ? (0, r.jsx)(tF.A, {
                                                  emojiId: a.id,
                                                  emojiName: null == a.id ? a.name : void 0,
                                                  animated: a.animated,
                                                  alt: "",
                                                  className: ru.Kk,
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
                                    label: ee.intl.string(eX.default.RbT4Zq),
                                    icon:
                                        null != l
                                            ? (0, r.jsx)("img", { src: l, alt: "", className: m()(ru.Kk, ru.Gt) })
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
        className: ru.dJ,
        children: [
            (0, r.jsx)(W, { variant: "experimental/heading-md/semibold", children: t }),
            (0, r.jsx)(W, {
                variant: "heading-xxl/normal",
                className: ru.wk,
                children: Math.round(n ?? 0).toLocaleString(ee.intl.currentLocale),
            }),
        ],
    });
}
function rx(e) {
    let { label: t, icon: n, name: a } = e;
    return (0, r.jsxs)("div", {
        className: m()(ru.dJ, ru.u4),
        children: [
            (0, r.jsx)(W, { variant: "experimental/heading-md/semibold", children: t }),
            (0, r.jsxs)("div", {
                className: ru.AS,
                children: [
                    n,
                    (0, r.jsx)(W, { variant: "heading-xl/medium", lineClamp: 1, className: ru.TJ, children: a }),
                ],
            }),
        ],
    });
}
function rg() {
    return (0, r.jsx)("div", {
        className: m()(ru.Kk, ru.Gc),
        children: (0, r.jsx)(nw._, { size: "md", color: "currentColor" }),
    });
}
var rf = n(651946);
function rj() {
    let e = (0, x.bG)([o.A], () => o.A.stats?.guilds?.guilds[0]),
        t = Math.round(e?.numDaysInteracted ?? 0),
        n = (0, E.bD)(e?.numDaysInteractedPercentile);
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
                                (0, r.jsx)(t_, { icon: e0.R, children: ee.intl.string($.default["M+a+t1"]) }),
                                (0, r.jsx)(tJ, { value: t }),
                            ],
                        }),
                        (0, r.jsx)(tI, {
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
        a = (0, E.bD)(t?.totalVoiceMinutesPercentile);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: rv.dJ,
                children: [
                    (0, r.jsx)(t_, { icon: e5.MicrophoneIcon, children: ee.intl.string($.default["3/T12E"]) }),
                    (0, r.jsx)(tJ, { value: n, alignment: "center" }),
                ],
            }),
            (0, r.jsx)(tI, {
                children:
                    null != a
                        ? ee.intl.format($.default.RqXsIs, {
                              numMinutes: n,
                              percent: a,
                              percentHook: (e, t) => (0, r.jsx)(tK, { children: e }, t),
                          })
                        : ee.intl.format($.default.Y3poDW, { numMinutes: n }),
            }),
        ],
    });
}
function rE(e) {
    let { peakHour: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: rv.dJ,
                children: [
                    (0, r.jsx)(t_, { icon: e5.MicrophoneIcon, children: ee.intl.string($.default.ZCwB8J) }),
                    (0, r.jsx)(tZ, { value: t }),
                ],
            }),
            (0, r.jsx)(tI, { children: ee.intl.string($.default.huiTne) }),
        ],
    });
}
function rp() {
    let e = (0, x.bG)([o.A], () => o.A.stats?.voice),
        t = (0, x.bG)([o.A], () => (0, E.Kr)(o.A.stats)),
        n = (0, x.bG)([o.A], () => o.A.globalStats?.voice?.peakHourUtc),
        a = (0, E.XF)(n)?.value,
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
                children: s ? (0, r.jsx)(rE, { peakHour: a }) : (0, r.jsx)(rA, { voice: e }),
            }),
        ],
    });
}
function rN(e) {
    let { route: t, onNextStep: n, onPreviousStep: a } = e;
    if (t === A.gr.HOME) return (0, r.jsx)(tU, { onStart: n });
    if (t === A.gr.INTRODUCTION) return (0, r.jsx)(tg, {});
    let { statsScreen: s } = (0, A.UG)(t);
    switch (s) {
        case A.oI.VOICE_INTRO:
            return (0, r.jsx)(rn, {
                icon: e5.MicrophoneIcon,
                title: ee.intl.string($.default["/7XYsa"]),
                description: ee.intl.string($.default["X8/G/o"]),
            });
        case A.oI.VOICE:
            return (0, r.jsx)(rp, {});
        case A.oI.MESSAGES_INTRO:
            return (0, r.jsx)(rn, {
                icon: eZ.ChatIcon,
                title: ee.intl.string($.default["2BuyVC"]),
                description: ee.intl.string($.default["kF+Y3a"]),
            });
        case A.oI.MESSAGES:
            return (0, r.jsx)(nZ, {});
        case A.oI.SERVERS_INTRO:
            return (0, r.jsx)(rn, {
                icon: e0.R,
                title: ee.intl.string(eX.default.F0fkrh),
                description: ee.intl.string($.default.Xg82Gy),
            });
        case A.oI.SERVERS:
            return (0, r.jsx)(re, {});
        case A.oI.TOP_SERVER:
            return (0, r.jsx)(rj, {});
        case A.oI.EMOJI_INTRO:
            return (0, r.jsx)(rn, {
                icon: Y.o,
                title: ee.intl.string($.default.ZTDCIv),
                description: ee.intl.string($.default.y8Sr8J),
            });
        case A.oI.EMOJI:
            return (0, r.jsx)(ns, {});
        case A.oI.GAMES_INTRO:
            return (0, r.jsx)(rn, {
                icon: eq.GameControllerIcon,
                title: ee.intl.string($.default.HM2fjf),
                description: ee.intl.string($.default.LQiFqJ),
            });
        case A.oI.GAMES:
            return (0, r.jsx)(nY, {});
        case A.oI.GAME_TIME:
            return (0, r.jsx)(n_, {});
        case A.oI.SQUAD:
        case A.oI.SIDEKICK:
            return (0, r.jsx)(nN, { route: t, onNextStep: n, onPreviousStep: a });
        case A.oI.SUMMARY:
            return (0, r.jsx)(rm, {});
        case A.oI.SHARE:
            return (0, r.jsx)(ty, {});
        default:
            return null;
    }
}
var rS = n(650809),
    rC = n(866665),
    rR = n(428692);
let rb = {
    [A.s9.FACE]: { icon: e5.MicrophoneIcon, label: ee.t.K3lovD },
    [A.s9.OUTFIT]: { icon: eZ.ChatIcon, label: ee.t.OIgYlQ },
    [A.s9.HEADWEAR]: { icon: e0.R, label: ee.t["7hB4kg"] },
    [A.s9.SHOES]: { icon: Y.o, label: ee.t.sMOuuS },
    [A.s9.WEARABLE]: { icon: eq.GameControllerIcon, label: ee.t.URyqtP },
    [A.s9.AURA]: { icon: eY.CalendarIcon, label: $.default["4N5p4D"] },
    [A.s9.ASSEMBLED]: { icon: nc.$, label: ee.t.TdEu5X },
    [A.s9.FINALIZE]: { icon: rS.PaintPaletteIcon, label: $.default.gmMD2I },
    [A.s9.SUMMARY]: { icon: tv.M, label: eX.default.y4M1na },
};
function rI(e) {
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
            className: m()(rR.PM, rR.CD, { [rR.vk]: !s }),
            onClick: () => l(a),
            "aria-label": i,
            "aria-disabled": s,
            children: [
                (0, r.jsx)("div", { className: m()(rR.Om, rR.hZ) }),
                (0, r.jsx)(t, { size: "xs", color: "currentColor", className: rR.RQ }),
            ],
        }),
    });
}
function rT(e) {
    let { flow: t, stats: n, activeRoute: a, isRouteBlocked: s, onRouteClick: l } = e,
        i = (function (e, t) {
            let n = [];
            for (let r of R({ flow: e, stats: t })) {
                let { characterStage: e } = (0, A.UG)(r),
                    t = rb[e];
                null != t && n.at(-1)?.stage !== e && n.push({ ...t, stage: e, route: r });
            }
            return n;
        })(t, n),
        { characterStage: c } = (0, A.UG)(a),
        u = i.findIndex((e) => {
            let { stage: t } = e;
            return t === c;
        }),
        [m, h] = d.useState(u);
    u > m && h(u);
    let g = (0, x.bG)([o.A], () => o.A.isSaving);
    return -1 === u
        ? null
        : (0, r.jsx)("div", {
              className: rR.qB,
              role: "group",
              "aria-label": ee.intl.formatToPlainString($.default.iyTfFt, { stepNumber: u + 1, stepCount: i.length }),
              children: i.map((e, t) => {
                  let { icon: n } = e;
                  return t === u
                      ? (0, r.jsx)(
                            rC.m,
                            {
                                text: ee.intl.string(e.label),
                                children: (0, r.jsx)("div", {
                                    className: rR.PM,
                                    children: (0, r.jsx)(n, { size: "xs", color: "currentColor" }),
                                }),
                            },
                            e.stage,
                        )
                      : t <= m
                        ? (0, r.jsx)(rI, { step: e, disabled: g || s, onRouteClick: l }, e.stage)
                        : (0, r.jsx)(
                              "div",
                              { className: rR.PM, children: (0, r.jsx)("div", { className: rR.Om }) },
                              e.stage,
                          );
              }),
          });
}
function r_(e) {
    let { stage: t } = e;
    return (0, r.jsxs)(th, {
        children: [
            (0, r.jsx)(J.E, { color: "text-muted", variant: "text-md/medium", children: "Character Stage" }),
            (0, r.jsx)(J.E, { color: "text-muted", variant: "text-md/medium", children: t }),
        ],
    });
}
var rO = n(517782);
function rM(e) {
    let t,
        n,
        { didPlayerShareDataWithDiscord: a, onClose: s } = e;
    ((0, x.bG)([o.A], () => o.A.fetchState),
        (t = (0, x.bG)([o.A], () => o.A.stats?.games?.games)),
        (n = (0, d.useMemo)(
            () =>
                t?.map((e) => {
                    let { game: t } = e;
                    return t.id;
                }) ?? [],
            [t],
        )),
        (0, d.useEffect)(() => {
            let { fetchState: e } = o.A;
            (e === o.T.INIT || e === o.T.ERROR) && (0, c.nX)();
        }, []),
        (0, d.useEffect)(() => {
            (0, M.E)(n);
        }, [n]));
    let l = a ? A.Np.SHARED_DATA : A.Np.NO_SHARED_DATA,
        [i, u] = (function (e) {
            let [t, n] = d.useState(() =>
                (function (e) {
                    let { character: t, progress: n, stats: r } = o.A,
                        a = null != t ? A.s9.SUMMARY : n?.stage;
                    return R({ flow: e, stats: r }).find((e) => (0, A.UG)(e).characterStage === a) ?? A.gr.HOME;
                })(e),
            );
            return (
                d.useEffect(() => {
                    let { characterStage: e } = (0, A.UG)(t);
                    (0, c.l4)(e);
                }, [t]),
                [t, n]
            );
        })(l),
        { characterStage: E, statsScreen: p } = (0, A.UG)(i),
        N = i === A.gr.HOME || null != p,
        S = N || i === A.gr.INTRODUCTION,
        C = (0, x.bG)([o.A], () => (o.A.fetchState === o.T.SUCCESS ? o.A.stats : void 0)),
        b = (0, x.bG)([o.A], () => o.A.character),
        I = d.useMemo(
            () =>
                (function (e, t) {
                    switch (e) {
                        case A.gr.SUMMARY:
                        case A.gr.SHARE:
                            let n = (0, j.o)(t),
                                { primaryBackgroundColor: r, shadowColor: a } = (0, j.j)(n);
                            return {
                                ...eL,
                                "--custom-checkpoint-primary": r,
                                "--custom-checkpoint-button-border": r,
                                "--custom-checkpoint-button-shadow": a,
                                "--custom-checkpoint-background-gradient-start": r,
                            };
                        default:
                            return eL;
                    }
                })(i, b),
            [i, b],
        ),
        T = y(h),
        { blockedTraits: _ } = O(),
        w = (0, v._K)(i, _),
        P = d.useCallback(
            (e) => {
                let t = (function (e) {
                    let { flow: t, stats: n, currentRoute: r, direction: a } = e,
                        s = R({ flow: t, stats: n }),
                        l = s.indexOf(r);
                    return -1 === l ? A.gr.INTRODUCTION : (s[l + a] ?? null);
                })({ flow: l, stats: C, currentRoute: i, direction: e });
                if (null == t) {
                    1 === e && s();
                    return;
                }
                (A.cy.has(i) || T(), u(t));
            },
            [i, l, s, T, u, C],
        ),
        k = d.useCallback(() => P(-1), [P]),
        G = d.useCallback(() => P(1), [P]),
        F = d.useCallback(
            (e) => {
                o.A.isSaving || w || (T(), u(e));
            },
            [w, T, u],
        );
    return (0, r.jsx)(g.N, {
        theme: D.NJ.DARK,
        children: (e) =>
            (0, r.jsxs)("div", {
                className: m()(e, rO.kL),
                style: I,
                "aria-label": ee.intl.string(eX.default["CdU/PF"]),
                children: [
                    (0, r.jsx)(L, { isVisible: N }),
                    (0, r.jsx)("div", { className: m()(rO.qd, { [rO.R]: N }), children: (0, r.jsx)(r_, { stage: E }) }),
                    (0, A.Rq)(i) && (0, r.jsx)("div", { className: rO.qd, children: (0, r.jsx)(e4, { route: i }) }),
                    S &&
                        (0, r.jsx)("div", {
                            className: rO.qd,
                            children: (0, r.jsx)(rN, { route: i, onNextStep: G, onPreviousStep: k }),
                        }),
                    (0, r.jsx)(Q, { activeRoute: i }),
                    (0, r.jsxs)("div", {
                        className: rO.$s,
                        children: [
                            (0, r.jsx)(e9, {}),
                            (0, r.jsx)(U, {
                                size: "sm",
                                "aria-label": ee.intl.string(ee.t.cpT0Cq),
                                onClick: s,
                                children: (0, r.jsx)(f.P, { size: "xs", color: "currentColor" }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(rT, { flow: l, stats: C, activeRoute: i, isRouteBlocked: w, onRouteClick: F }),
                    (0, r.jsx)(to, { activeRoute: i, isRouteBlocked: w, onBack: k, onNext: G }),
                ],
            }),
    });
}
var ry = n(652215);
function rw() {
    return !!i._.hasSubscribers(ry.jej.MODAL_CLOSE) && (i._.dispatch(ry.jej.MODAL_CLOSE), !0);
}
async function rP(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0,
        i = await (0, c.nX)(n);
    i === o.T.ERROR
        ? (0, a.P0)({ text: ee.intl.string(ee.t.fEptJP), variant: "critical" })
        : i !== o.T.FETCHING &&
          (l.default.track(ry.HAw.CHECKPOINT_STARTED, { source: e }),
          (0, s.B8)(
              (e) => {
                  let { closeLayer: n } = e;
                  return (0, r.jsx)(rM, { didPlayerShareDataWithDiscord: t, onClose: n });
              },
              { onEscape: rw },
          ));
}
