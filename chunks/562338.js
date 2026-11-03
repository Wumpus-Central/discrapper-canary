a.d(t, { D: () => iS });
var s,
    i = a(477900),
    r = a(858899),
    n = a(361158),
    c = a(625494),
    d = a(796104),
    l = a(719718),
    o = a(527926),
    u = a(617390),
    h = a(582128),
    f = a(503698),
    _ = a.n(f);
let b =
    "https://cdn.discordapp.com/assets/content/ca0ec81d050b27537618a0563ff926476bc53f331bae7af46595969995dea5fb.mp3";
var p = a(17928),
    x = a(43990),
    m = a(789645),
    g = a(627369),
    A = a(503235),
    v = a(201779),
    w = a(407905);
let I = [
        v.gr.HOME,
        v.gr.INTRODUCTION,
        v.gr.VOICE_GENERAL,
        v.gr.VOICE_FACE,
        v.gr.MESSAGES_GENERAL,
        v.gr.MESSAGES_OUTFIT,
        v.gr.SERVERS_GENERAL,
        v.gr.SERVERS_HEADWEAR,
        v.gr.EMOJI_GENERAL,
        v.gr.EMOJI_SHOES,
        v.gr.GAMES_GENERAL,
        v.gr.GAMES_WEARABLE,
        v.gr.GAME_TIME_GENERAL,
        v.gr.GAME_TIME_AURA,
        v.gr.FINALIZE_CHARACTER,
        v.gr.SUMMARY,
        v.gr.SHARE,
    ],
    E = [
        v.gr.HOME,
        v.gr.INTRODUCTION,
        v.gr.VOICE_INTRO,
        v.gr.VOICE_STATS,
        v.gr.VOICE_FACE,
        v.gr.MESSAGES_INTRO,
        v.gr.MESSAGES_STATS,
        v.gr.MESSAGES_OUTFIT,
        v.gr.SERVERS_INTRO,
        v.gr.SERVERS_STATS,
        v.gr.TOP_SERVER_STATS,
        v.gr.SERVERS_HEADWEAR,
        v.gr.EMOJI_INTRO,
        v.gr.EMOJI_STATS,
        v.gr.EMOJI_SHOES,
        v.gr.GAMES_INTRO,
        v.gr.GAMES_STATS,
        v.gr.GAMES_WEARABLE,
        v.gr.GAME_TIME_STATS,
        v.gr.GAME_TIME_AURA,
        v.gr.SQUAD_TRANSITION,
        v.gr.SQUAD,
        v.gr.SIDEKICK,
        v.gr.SIDEKICK_LEAVE,
        v.gr.FINALIZE_CHARACTER,
        v.gr.SUMMARY,
        v.gr.SHARE,
    ],
    j = {
        [v.gr.VOICE_INTRO]: (e) => !(0, w.Kr)(e),
        [v.gr.MESSAGES_INTRO]: (e) => !(0, w.nb)(e),
        [v.gr.SERVERS_INTRO]: (e) => !(0, w.jr)(e),
        [v.gr.EMOJI_INTRO]: (e) => !(0, w.y7)(e),
        [v.gr.GAMES_INTRO]: (e) => !(0, w.IH)(e),
    },
    N = {
        [v.gr.TOP_SERVER_STATS]: w.jr,
        [v.gr.SQUAD_TRANSITION]: w.$p,
        [v.gr.SQUAD]: w.$p,
        [v.gr.SIDEKICK]: w.oL,
        [v.gr.SIDEKICK_LEAVE]: w.oL,
    };
function S(e) {
    let { flow: t, stats: a } = e;
    return (t === v.Np.SHARED_DATA ? E : I).filter((e) => {
        let t = j[e];
        if (null != t) return null != a && t(a);
        let s = N[e];
        return null == s || void 0 === a || s(a);
    });
}
var C = a(127639),
    T = a(287809),
    R = a(474090),
    O = a(817379);
function M() {
    let {
            selectedCharacterTraits: e,
            savedSelection: t,
            stats: a,
        } = (0, p.cf)([l.A], () => ({
            selectedCharacterTraits: l.A.selectedCharacterTraits,
            savedSelection: l.A.character,
            stats: l.A.stats,
        })),
        s = (0, p.bG)([T.default], () => (0, R.ki)(T.default.getCurrentUser())),
        i = h.useMemo(
            () =>
                Object.values(C.V).filter((i) => {
                    let r = e[i];
                    return null != r && (0, O.tS)(i, r, { stats: a, hasNitro: s, savedCharacter: t });
                }),
            [s, t, e, a],
        );
    return { selectedCharacterTraits: e, blockedTraits: i };
}
var y = a(964486),
    L = a(920495);
function D(e) {
    let t = (0, p.bG)([l.A], () => l.A.isMuted),
        a = h.useRef(null);
    return (
        h.useEffect(() => {
            let t = new Audio(e);
            return ((a.current = t), () => t.pause());
        }, [e]),
        h.useCallback(() => {
            let e = a.current;
            t || null == e || ((e.currentTime = 0), e.play());
        }, [t])
    );
}
var k = a(299619),
    P = a(775602),
    G = a(818348),
    H = a(11435);
function U(e) {
    let { isVisible: t } = e,
        a = h.useRef(null),
        s = (0, p.bG)([P.Ay], () => P.Ay.useReducedMotion),
        r = t && !s;
    return (
        h.useEffect(() => {
            let e = a.current;
            null != e && (r ? e.play().catch(G.tE) : e.pause());
        }, [r]),
        h.useEffect(() => {
            s && null != a.current && (a.current.currentTime = 1);
        }, [s]),
        (0, i.jsxs)("div", {
            className: _()(H.Tp, { [H.R]: !t }),
            "aria-hidden": !0,
            children: [
                (0, i.jsx)(k.A, {
                    ref: a,
                    className: H.Ki,
                    src: "https://cdn.discordapp.com/assets/content/a7a4300630ed2733eca4a8bb584c3086a66063d78e2f829faf465d96ff388a93.webm",
                    loop: !0,
                    muted: !0,
                    playsInline: !0,
                }),
                (0, i.jsx)("div", { className: H.D7 }),
            ],
        })
    );
}
var F = a(885619);
function K(e) {
    let { "aria-label": t, "aria-pressed": a, children: s, onClick: r, size: n, className: c, disabled: d = !1 } = e;
    return (0, i.jsx)("button", {
        type: "button",
        className: _()(F.button, "custom" !== n && F[n], c),
        onClick: r,
        "aria-label": t,
        "aria-pressed": a,
        disabled: d,
        children: s,
    });
}
function B(e) {
    let { className: t, ...a } = e;
    return (0, i.jsx)(K, { ...a, className: _()(F.shadow, t) });
}
function z(e) {
    let { animatedSrc: t, staticSrc: a, className: s } = e,
        r = (0, p.bG)([P.Ay], () => P.Ay.useReducedMotion);
    return (0, i.jsx)("img", { src: r ? a : t, alt: "", className: s });
}
var V = a(740281),
    W = a(766089),
    Y = a(767988);
let Z = { animatedSrc: W.A, staticSrc: Y.A };
function q(e) {
    let { activeRoute: t } = e,
        { animatedSrc: a, staticSrc: s } = (0, p.cf)(
            [l.A],
            () => {
                switch (t) {
                    case v.gr.SUMMARY:
                    case v.gr.SHARE:
                        let e = (0, g.o)(l.A.character),
                            { clydeLogoImage: a, clydeLogoStaticImage: s } = (0, g.j)(e);
                        return { animatedSrc: a, staticSrc: s };
                    default:
                        return Z;
                }
            },
            [t],
        );
    return (0, i.jsx)(z, { animatedSrc: a, staticSrc: s, className: V.w });
}
var X = a(756408),
    J = a(834730),
    Q = a(504736);
function $(e) {
    let { children: t, className: a, ...s } = e;
    return (0, i.jsx)(J.E, { ...s, className: _()(Q.Q, a), color: "none", children: t });
}
var ee = a(271427);
function et(e) {
    let { children: t, className: a, style: s } = e;
    return (0, i.jsx)($, { tag: "span", variant: "mono-md/bold", className: _()(ee.T, a), style: s, children: t });
}
var ea = a(842089),
    es = a(105292),
    ei = a(383931);
function er(e) {
    let { percent: t } = e;
    return (0, i.jsx)(et, {
        className: ei.t,
        children: es.intl.formatToPlainString(ea.default.fOGKA4, { percent: t }),
    });
}
var en = a(646692);
function ec(e) {
    let { icon: t, value: a, topPercent: s, children: r } = e;
    return (0, i.jsxs)("div", {
        className: en.dJ,
        children: [
            null != s && (0, i.jsx)(er, { percent: s }),
            (0, i.jsxs)("div", {
                className: en.p,
                children: [
                    (0, i.jsx)($, {
                        variant: "heading-xxl/medium",
                        className: en.Uq,
                        children: a.toLocaleString(es.intl.currentLocale),
                    }),
                    (0, i.jsxs)("div", {
                        className: en.Pf,
                        children: [
                            (0, i.jsx)(t, { size: "xs", color: "currentColor" }),
                            (0, i.jsx)($, { variant: "heading-xs/semibold", className: en.QK, children: r }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var ed = a(303453);
let el = {
    [A.v7.FACE]: ea.default.q8GA6h,
    [A.v7.OUTFIT]: ea.default["xGh/fq"],
    [A.v7.OUTFIT_COLOR]: ea.default.IgiEDV,
    [A.v7.HAT]: ea.default.QqeBEO,
    [A.v7.WEARABLE]: ea.default.l57q3i,
    [A.v7.AURA]: ea.default["fYp+yq"],
    [A.v7.SHOES]: ea.default.BaI4wD,
    [A.v7.BASE]: ea.default.SMXZXX,
};
function eo(e) {
    let { customizationOption: t, earnedCount: a, totalCount: s } = e;
    return (0, i.jsx)(J.E, {
        variant: "body-md/medium",
        color: "text-subtle",
        className: ed.k,
        children: es.intl.format(el[t], {
            earnedCount: a,
            totalCount: s,
            countHook: (e, t) =>
                (0, i.jsx)($, { tag: "span", variant: "mono-md/bold", className: ed.U, children: e }, t),
        }),
    });
}
var eu = a(28863),
    eh = a(793574),
    ef = a(75678),
    e_ = a(32623),
    eb = a(218546),
    ep = a(309913),
    ex = a(647093);
let em = `linear-gradient(to right, ${ep.uz.join(", ")})`;
function eg(e) {
    let { rarity: t } = e,
        a = h.useMemo(() => ({ "--custom-checkpoint-rarity-background": t === eb.K.NITRO ? em : ep.Zy[t] }), [t]);
    return (0, i.jsx)(et, { className: ex.q, style: a, children: es.intl.string(ep.iG[t]) });
}
var eA = a(829870);
function ev(e) {
    let { asset: t, hideRarity: a } = e,
        s =
            t.status === e_.eP.NITRO_LOCKED
                ? es.intl.format(ea.default["3Wq/bk"], {
                      subscribeHook: (e, t) =>
                          (0, i.jsx)(
                              eu.Anchor,
                              {
                                  onClick: () =>
                                      (0, ef.A)({ analyticsLocations: [eh.A.CHECKPOINT, eh.A.CHECKPOINT_TRAIT] }),
                                  children: e,
                              },
                              t,
                          ),
                  })
                : (0, A.Oq)(t);
    return (0, i.jsxs)("div", {
        className: eA.z,
        children: [
            (0, i.jsxs)("div", {
                className: eA.D,
                children: [
                    (0, i.jsx)(J.E, {
                        tag: "div",
                        variant: "heading-sm/semibold",
                        color: "text-strong",
                        children: t.getName(),
                    }),
                    !a && null != t.rarity && (0, i.jsx)(eg, { rarity: t.rarity }),
                ],
            }),
            null != s && (0, i.jsx)(J.E, { variant: "body-md/medium", color: "text-subtle", children: s }),
        ],
    });
}
var ew = a(661531),
    eI = a(403581),
    eE = a(140735),
    ej = a(835517),
    eN = a(559265);
function eS(e) {
    let { rarity: t } = e,
        a = h.useMemo(() => ({ "--custom-checkpoint-rarity-color": ep.Zy[t] }), [t]);
    return t === eb.K.NITRO
        ? (0, i.jsx)(eI.t, { size: "custom", color: ew.A.colors.ICON_SUBTLE, className: eN.d7 })
        : (0, i.jsx)("span", { className: eN.oG, style: a });
}
function eC(e) {
    let { traitOption: t, groupName: a, isSelected: s, hideRarity: r, onSelectOption: n, disabled: c = !1 } = e,
        { trait: d, optionId: l, rarity: o, asset: u, status: f } = t,
        b = f === e_.eP.LOCKED,
        p = h.useMemo(() => {
            if (null == u) return null;
            let e = Math.round(ep.VG * (0, ej.A)());
            return `${u}?width=${e}&height=${e}`;
        }, [u]);
    return (0, i.jsxs)("label", {
        className: _()(eN.uK, { [eN.wH]: s, [eN.dv]: (0, A.C5)(t), [eN.xt]: b, [eN.Ns]: f === e_.eP.NITRO_LOCKED }),
        children: [
            (0, i.jsx)(eE.A, {
                children: (0, i.jsx)("input", {
                    type: "radio",
                    name: a,
                    checked: s,
                    disabled: c,
                    onChange: () => n(d, l),
                    "aria-label": (0, A.v2)(t, r),
                }),
            }),
            null != p && (0, i.jsx)("img", { src: p, alt: "", draggable: !1, className: eN.Sl }),
            !r && null != o && (0, i.jsx)(eS, { rarity: o }),
        ],
    });
}
var eT = a(509063);
function eR(e) {
    let {
            customizationOption: t,
            traitOptions: a,
            selectedOption: s,
            onSelectOption: r,
            disabled: n = !1,
            children: c,
        } = e,
        d = h.useId(),
        l = !(0, A.Ux)(t);
    return (0, i.jsxs)("div", {
        className: eT.Nz,
        children: [
            (0, i.jsxs)("div", {
                className: eT.fF,
                children: [
                    c,
                    (0, i.jsx)("div", {
                        role: "radiogroup",
                        "aria-label": (0, A.cq)(t),
                        className: eT.Vg,
                        children: a.map((e) =>
                            (0, i.jsx)(
                                eC,
                                {
                                    traitOption: e,
                                    groupName: d,
                                    isSelected: e.optionId === s?.optionId,
                                    hideRarity: l,
                                    onSelectOption: r,
                                    disabled: n,
                                },
                                e.optionId,
                            ),
                        ),
                    }),
                ],
            }),
            null != s && (0, i.jsx)(ev, { asset: s, hideRarity: l }),
        ],
    });
}
a(321073);
var eO = a(51104),
    eM = a(67915);
function ey(e, t) {
    return e === A.v7.OUTFIT ? (null != t ? (0, O.FA)(t) : void 0) : t;
}
function eL(e) {
    let { customizationOption: t } = e,
        {
            optionIds: a,
            selectedOptionId: s,
            savedOptionId: i,
            onSelectOption: r,
        } = (function (e) {
            let { customizationOption: t, onSelectOption: a } = e,
                s = A.hw[t],
                { selectedOptionId: i, savedOptionId: r } = (0, p.cf)([l.A], () => ({
                    selectedOptionId: ey(t, l.A.selectedCharacterTraits[s]),
                    savedOptionId: ey(t, l.A.character?.[s]),
                })),
                n = h.useCallback(
                    (e, t) => {
                        t !== i && ((0, u.dw)(e, t), a(e, t));
                    },
                    [a, i],
                );
            return {
                optionIds: (function (e, t) {
                    switch (e) {
                        case A.v7.OUTFIT:
                            return O.ps;
                        case A.v7.OUTFIT_COLOR:
                            return (0, O.wD)(t ?? eM.r.NONE);
                        default:
                            return;
                    }
                })(t, i),
                selectedOptionId: i,
                savedOptionId: r,
                onSelectOption: n,
            };
        })({ customizationOption: t, onSelectOption: d.IB }),
        {
            traitOptions: n,
            availableTraitOptions: c,
            totalCount: o,
            earnedCount: f,
        } = (function (e) {
            let { customizationOption: t, savedOptionId: a, rarityOrder: s, optionIds: i } = e,
                r = (0, p.bG)([l.A], () => l.A.stats),
                n = (0, p.bG)([T.default], () => (0, R.ki)(T.default.getCurrentUser())),
                c = h.useMemo(() => (0, A.p8)(s), [s]);
            return h.useMemo(() => {
                let e = A.hw[t],
                    s = t === A.v7.OUTFIT_COLOR ? eO.x : eO.$[e],
                    d = (0, O.mf)(e, r),
                    l = [],
                    o = 0,
                    u = 0;
                for (let t of i ?? O.Rk[e]) {
                    let i = (0, O.$C)(e, t),
                        r = e_.eP.UNLOCKED;
                    (null == i || d.has(i) || a === t
                        ? i !== eb.K.NITRO || n || (r = e_.eP.NITRO_LOCKED)
                        : (r = e_.eP.LOCKED),
                        null != i && o++,
                        null != i && r === e_.eP.UNLOCKED && u++,
                        l.push({
                            trait: e,
                            optionId: t,
                            asset: O.qM[e][t]?.thumbnail,
                            rarity: i,
                            status: r,
                            getName: () => {
                                let e = s[t];
                                return null != e ? es.intl.string(e) : "";
                            },
                        }));
                }
                l.sort(c);
                let h = l.filter((e) => {
                    let { status: t } = e;
                    return t !== e_.eP.LOCKED;
                });
                return { traitOptions: l, availableTraitOptions: h, totalCount: o, earnedCount: u };
            }, [t, n, i, c, a, r]);
        })({ customizationOption: t, savedOptionId: i, rarityOrder: ep.FG, optionIds: a }),
        _ = h.useMemo(
            () =>
                n.find((e) => {
                    let { optionId: t } = e;
                    return t === s;
                }) ?? c[0],
            [s, n, c],
        );
    return (
        !(function (e) {
            let { availableTraitOptions: t, selectedOptionId: a, onSelectOption: s, paused: i } = e,
                r = t[0],
                n = t.some((e) => e.optionId === a);
            h.useEffect(() => {
                i || null == r || n || s(r.trait, r.optionId);
            }, [r, n, s, i]);
        })({ availableTraitOptions: c, selectedOptionId: s, onSelectOption: d.IB, paused: _?.status === e_.eP.LOCKED }),
        { traitOptions: n, selectedOption: _, totalCount: o, earnedCount: f, onSelectOption: r }
    );
}
function eD(e) {
    let { customizationOption: t } = e,
        {
            traitOptions: a,
            selectedOption: s,
            totalCount: r,
            earnedCount: n,
            onSelectOption: c,
        } = eL({ customizationOption: t });
    return (0, i.jsx)(eR, {
        customizationOption: t,
        traitOptions: a,
        selectedOption: s,
        onSelectOption: c,
        children: (0, i.jsx)(eo, { customizationOption: t, earnedCount: n, totalCount: r }),
    });
}
var ek = a(71678);
function eP(e) {
    let { children: t, className: a } = e;
    return (0, i.jsx)("div", { className: _()(ek.n, a), children: t });
}
function eG() {
    let e = (0, p.bG)([l.A], () => l.A.stats?.emojis);
    return (0, i.jsxs)(eP, {
        children: [
            (0, i.jsx)(ec, {
                icon: X.o,
                value: Math.round(e?.numEmojisSent ?? 0),
                topPercent: (0, w.bD)(e?.numEmojisSentPercentile),
                children: es.intl.string(ea.default.ZTDCIv),
            }),
            (0, i.jsx)(eD, { customizationOption: A.v7.SHOES }),
        ],
    });
}
var eH = a(534514),
    eU = a(265872),
    eF = a(320448),
    eK = a(315710),
    eB = a(444927);
let ez = {
    "--custom-checkpoint-primary": ep.Kr,
    "--custom-checkpoint-dark-cyan": ep.ow,
    "--custom-checkpoint-button-border": ep.ow,
    "--custom-checkpoint-button-shadow": ep.zj,
    "--custom-checkpoint-white": ep.Ve,
    "--custom-checkpoint-guild-card-background": ep.LM,
    "--custom-checkpoint-background-gradient-start": ep.bI,
};
var eV = a(580814);
function eW(e) {
    let { options: t, activeCustomizationOption: a, returnRef: s, onSelectOption: r, onClose: n } = e,
        c = h.useRef(null),
        d = h.useRef([]),
        l = (0, eB.A)(() => Math.max(t.indexOf(a), 0));
    function o(e) {
        d.current[(e + t.length) % t.length]?.focus();
    }
    return (
        (0, eK.tj)(c, { returnRef: s }),
        h.useEffect(() => {
            d.current[l]?.focus();
        }, [l]),
        (0, i.jsx)("div", {
            ref: c,
            role: "menu",
            tabIndex: -1,
            "aria-label": es.intl.string(ea.default.Zl5vPW),
            className: eV.M,
            style: ez,
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
                        (e.preventDefault(), n());
                }
            },
            children: t.map((e, t) =>
                (0, i.jsx)(
                    "button",
                    {
                        ref: (e) => {
                            d.current[t] = e;
                        },
                        type: "button",
                        role: "menuitemradio",
                        "aria-checked": e === a,
                        tabIndex: -1,
                        className: eV.A,
                        onClick: () => r(e),
                        onMouseEnter: (e) => e.currentTarget.focus(),
                        children: (0, i.jsx)(J.E, {
                            tag: "span",
                            variant: "heading-sm/semibold",
                            color: "none",
                            children: (0, A.cq)(e),
                        }),
                    },
                    e,
                ),
            ),
        })
    );
}
var eY = a(769909);
let eZ = [A.v7.BASE, A.v7.OUTFIT_COLOR],
    eq = [A.v7.AURA, A.v7.WEARABLE, A.v7.SHOES, A.v7.HAT, A.v7.OUTFIT, A.v7.FACE];
function eX(e) {
    let { activeCustomizationOption: t, onSelectOption: a, disabled: s = !1 } = e,
        r = h.useRef(null),
        n = eq.includes(t);
    return (0, i.jsx)(eU.Y, {
        targetElementRef: r,
        position: "right",
        align: "top",
        spacing: 8,
        renderPopout: (e) => {
            let { closePopout: s } = e;
            return (0, i.jsx)(eW, {
                options: eq,
                activeCustomizationOption: t,
                returnRef: r,
                onSelectOption: (e) => {
                    (a(e), s());
                },
                onClose: s,
            });
        },
        children: (e, a) => {
            let { isShown: c } = a;
            return (0, i.jsxs)("button", {
                ...e,
                ref: r,
                type: "button",
                disabled: s,
                "aria-haspopup": "menu",
                onKeyDown: (t) => {
                    (e.onKeyDown(t), ("ArrowLeft" === t.key || "ArrowRight" === t.key) && t.stopPropagation());
                },
                className: _()(eY.Mf, eY.OS, { [eY.vu]: n || c }),
                children: [
                    (0, i.jsx)(J.E, {
                        tag: "span",
                        variant: "heading-sm/semibold",
                        color: "none",
                        children: n ? (0, A.cq)(t) : es.intl.string(ea.default["iXpQc+"]),
                    }),
                    (0, i.jsx)(eF._, { size: "refresh_sm", color: "currentColor" }),
                ],
            });
        },
    });
}
function eJ(e) {
    let { activeCustomizationOption: t, onSelectOption: a, disabled: s = !1 } = e,
        r = h.useId();
    return (0, i.jsxs)("div", {
        className: eY.vR,
        children: [
            (0, i.jsx)("div", {
                role: "radiogroup",
                "aria-label": es.intl.string(ea.default.Zl5vPW),
                className: eY.vR,
                children: eZ.map((e) => {
                    let n = e === t;
                    return (0, i.jsxs)(
                        "label",
                        {
                            className: _()(eY.Mf, { [eY.vu]: n }),
                            children: [
                                (0, i.jsx)(eE.A, {
                                    children: (0, i.jsx)("input", {
                                        type: "radio",
                                        name: r,
                                        checked: n,
                                        disabled: s,
                                        onChange: () => a(e),
                                    }),
                                }),
                                (0, i.jsx)(J.E, {
                                    tag: "span",
                                    variant: "heading-sm/semibold",
                                    color: "none",
                                    children: (0, A.cq)(e),
                                }),
                            ],
                        },
                        e,
                    );
                }),
            }),
            (0, i.jsx)(eX, { activeCustomizationOption: t, onSelectOption: a, disabled: s }),
        ],
    });
}
var eQ = a(195464);
function e$() {
    let [e, t] = h.useState(A.v7.BASE),
        { traitOptions: a, selectedOption: s, onSelectOption: r } = eL({ customizationOption: e }),
        { blockedTraits: n } = M(),
        c = n.includes(A.hw[e]),
        d = (0, p.bG)([l.A], () => l.A.isSaving);
    return (0, i.jsxs)(eP, {
        className: eQ.n,
        children: [
            (0, i.jsx)(eH.D, {
                variant: "heading-xl/medium",
                color: "none",
                className: eQ.D,
                children: es.intl.string(ea.default["q2nj/Z"]),
            }),
            (0, i.jsx)(eJ, { activeCustomizationOption: e, onSelectOption: t, disabled: d || c }),
            (0, i.jsx)(eR, {
                customizationOption: e,
                traitOptions: a,
                selectedOption: s,
                onSelectOption: r,
                disabled: d,
            }),
        ],
    });
}
var e0 = a(81466);
function e1() {
    let e = (0, p.bG)([l.A], () => l.A.stats?.games);
    return (0, i.jsxs)(eP, {
        children: [
            (0, i.jsx)(ec, {
                icon: e0.CalendarIcon,
                value: Math.round(e?.totalDaysPlayed ?? 0),
                topPercent: (0, w.bD)(e?.totalDaysPlayedPercentile),
                children: es.intl.string(ea.default["4N5p4D"]),
            }),
            (0, i.jsx)(eD, { customizationOption: A.v7.AURA }),
        ],
    });
}
var e5 = a(687966);
function e6() {
    let e = (0, p.bG)([l.A], () => l.A.stats?.games);
    return (0, i.jsxs)(eP, {
        children: [
            (0, i.jsx)(ec, {
                icon: e5.GameControllerIcon,
                value: Math.round(e?.totalGamesPlayed ?? 0),
                topPercent: (0, w.bD)(e?.totalGamesPlayedPercentile),
                children: es.intl.string(ea.default.HM2fjf),
            }),
            (0, i.jsx)(eD, { customizationOption: A.v7.WEARABLE }),
        ],
    });
}
var e2 = a(534890),
    e3 = a(465199);
function e4() {
    let e = (0, p.bG)([l.A], () => l.A.stats?.messages);
    return (0, i.jsxs)(eP, {
        children: [
            (0, i.jsx)(ec, {
                icon: e2.ChatIcon,
                value: Math.round(e?.numMessagesSent ?? 0),
                topPercent: (0, w.bD)(e?.numMessagesSentPercentile),
                children: es.intl.string(e3.default.wWKySP),
            }),
            (0, i.jsx)(eD, { customizationOption: A.v7.OUTFIT }),
        ],
    });
}
var e8 = a(664121);
function e9() {
    let e = (0, p.bG)([l.A], () => l.A.stats?.guilds?.guilds[0]);
    return (0, i.jsxs)(eP, {
        children: [
            (0, i.jsx)(ec, {
                icon: e8.R,
                value: Math.round(e?.numDaysInteracted ?? 0),
                topPercent: (0, w.bD)(e?.numDaysInteractedPercentile),
                children: es.intl.string(ea.default["M+a+t1"]),
            }),
            (0, i.jsx)(eD, { customizationOption: A.v7.HAT }),
        ],
    });
}
var e7 = a(831544);
function te() {
    let e = (0, p.bG)([l.A], () => l.A.stats?.voice),
        t = Math.round(e?.totalVoiceMinutes ?? 0);
    return (0, i.jsxs)(eP, {
        children: [
            (0, i.jsx)(ec, {
                icon: e7.MicrophoneIcon,
                value: t,
                topPercent: (0, w.bD)(e?.totalVoiceMinutesPercentile),
                children: es.intl.string(ea.default["3/T12E"]),
            }),
            (0, i.jsx)(eD, { customizationOption: A.v7.FACE }),
        ],
    });
}
function tt(e) {
    let { route: t } = e;
    switch (t) {
        case v.gr.VOICE_FACE:
            return (0, i.jsx)(te, {});
        case v.gr.MESSAGES_OUTFIT:
            return (0, i.jsx)(e4, {});
        case v.gr.SERVERS_HEADWEAR:
            return (0, i.jsx)(e9, {});
        case v.gr.EMOJI_SHOES:
            return (0, i.jsx)(eG, {});
        case v.gr.GAMES_WEARABLE:
            return (0, i.jsx)(e6, {});
        case v.gr.GAME_TIME_AURA:
            return (0, i.jsx)(e1, {});
        case v.gr.FINALIZE_CHARACTER:
            return (0, i.jsx)(e$, {});
        default:
            return null;
    }
}
var ta = a(358618),
    ts = a(983851);
function ti() {
    let e = (0, p.bG)([l.A], () => l.A.isMuted),
        t = e ? ta._ : ts.H;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(K, {
                size: "sm",
                "aria-label": es.intl.string(e ? es.t.YqAjXy : es.t.w4m945),
                onClick: d.K8,
                children: (0, i.jsx)(t, { size: "xs", color: "currentColor" }),
            }),
            (0, i.jsx)("audio", {
                autoPlay: !0,
                loop: !0,
                muted: e,
                children: (0, i.jsx)("source", {
                    src: "https://cdn.discordapp.com/assets/content/d271231f4934992caed169c11586a1da060d37b5fd8804b56666b547f03836bd.mp3",
                }),
            }),
        ],
    });
}
var tr = a(435558),
    tn = a(477155),
    tc = a(22231),
    td = a(935286),
    tl = a(405433),
    to = a(289873),
    tu = a(621466);
function th(e, t) {
    let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    h.useEffect(() => {
        if (!a) return (window.addEventListener("keydown", s), () => window.removeEventListener("keydown", s));
        function s(a) {
            (0, tu.vq)(a.target, HTMLTextAreaElement) || (0, tu.vq)(a.target, HTMLInputElement) || (a.key === e && t());
        }
    }, [e, t, a]);
}
var tf = a(753875);
function t_(e) {
    let { "aria-label": t, icon: a, onClick: s, disabled: r = !1 } = e;
    return (
        th("ArrowLeft", s, r),
        (0, i.jsx)(K, {
            size: "md",
            className: _()(tf.A4, tf.aX),
            onClick: s,
            disabled: r,
            "aria-label": t,
            children: (0, i.jsx)(a, { color: "currentColor" }),
        })
    );
}
function tb(e) {
    let { "aria-label": t, children: a, onClick: s, size: r, className: n, disabled: c = !1 } = e;
    return (
        th("ArrowRight", s, c),
        (0, i.jsx)(B, {
            size: r,
            className: _()(tf.A4, tf.K2, n),
            onClick: s,
            disabled: c,
            "aria-label": t,
            children: a,
        })
    );
}
function tp(e) {
    let { onClick: t, disabled: a } = e;
    return (0, i.jsx)(t_, { "aria-label": es.intl.string(es.t["13/7kX"]), icon: tn.r, onClick: t, disabled: a });
}
function tx(e) {
    let { onClick: t, disabled: a } = e;
    return (0, i.jsx)(t_, {
        "aria-label": es.intl.string(ea.default.Iyyy9s),
        icon: tc.PencilIcon,
        onClick: t,
        disabled: a,
    });
}
function tm(e) {
    let { onClick: t, disabled: a } = e;
    return (0, i.jsx)(tb, {
        size: "md",
        "aria-label": es.intl.string(es.t.PDTjLN),
        onClick: t,
        disabled: a,
        children: (0, i.jsx)(td.E, { color: "currentColor" }),
    });
}
function tg(e) {
    let { onClick: t, disabled: a } = e;
    return (0, i.jsxs)(tb, {
        size: "custom",
        className: tf.GA,
        "aria-label": es.intl.string(es.t.PDTjLN),
        onClick: t,
        disabled: a,
        children: [
            (0, i.jsx)($, { variant: "mono-md/normal", className: tf.Pf, children: es.intl.string(es.t.PDTjLN) }),
            (0, i.jsx)(td.E, { size: "refresh_sm", color: "currentColor" }),
        ],
    });
}
function tA(e) {
    let { onClick: t, disabled: a } = e;
    return (0, i.jsxs)(tb, {
        size: "custom",
        className: tf.GA,
        "aria-label": es.intl.string(es.t.i4jeWR),
        onClick: t,
        disabled: a,
        children: [
            (0, i.jsx)($, { variant: "mono-md/normal", className: tf.Pf, children: es.intl.string(es.t.i4jeWR) }),
            (0, i.jsx)(td.E, { size: "refresh_sm", color: "currentColor" }),
        ],
    });
}
function tv(e) {
    let { onClick: t, disabled: a } = e;
    return (0, i.jsxs)(tb, {
        size: "custom",
        className: _()(tf.GA, tf.Bq),
        "aria-label": es.intl.string(es.t.RDE0Sc),
        onClick: t,
        disabled: a,
        children: [
            (0, i.jsx)(J.E, {
                variant: "mono-md/bold",
                color: "none",
                className: tf.Pf,
                children: es.intl.string(es.t.RDE0Sc),
            }),
            (0, i.jsx)(tl.ShareIcon, { size: "refresh_sm", color: "currentColor" }),
        ],
    });
}
function tw(e) {
    let { onBack: t, isRouteBlocked: a } = e,
        s = (0, p.bG)([l.A], () => l.A.isSaving);
    return (0, i.jsx)(tp, {
        onClick: function () {
            s || t();
        },
        disabled: s || a,
    });
}
function tI(e) {
    let { onNext: t, throttledNavigate: a, isRouteBlocked: s } = e,
        n = (0, p.bG)([l.A], () => l.A.isSaving);
    async function c() {
        if (n) return;
        let e = (0, O.XI)(l.A.selectedCharacterTraits);
        (await (0, d.yE)(e)) ? t() : (0, r.P0)({ text: es.intl.string(es.t.fEptJP), variant: "critical" });
    }
    return (0, i.jsxs)(tb, {
        size: "custom",
        className: tf.GA,
        "aria-label": es.intl.string(es.t["R3BPH+"]),
        onClick: function () {
            a(c);
        },
        disabled: n || s,
        children: [
            (0, i.jsx)($, { variant: "mono-md/normal", className: tf.Pf, children: es.intl.string(es.t["R3BPH+"]) }),
            n
                ? (0, i.jsx)(to.y, { type: to.t.SPINNING_CIRCLE_SIMPLE, className: tf.u1, itemClassName: tf.$N })
                : (0, i.jsx)(td.E, { size: "refresh_sm", color: "currentColor" }),
        ],
    });
}
function tE(e) {
    let { activeRoute: t, isRouteBlocked: a, onBack: s, onNext: r } = e,
        n = h.useMemo(() => (0, tr.throttle)((e) => e(), 500, { trailing: !1 }), []);
    switch (t) {
        case v.gr.HOME:
            return null;
        case v.gr.FINALIZE_CHARACTER:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(tw, { onBack: () => n(s), isRouteBlocked: a }),
                    (0, i.jsx)(tI, { onNext: r, throttledNavigate: n, isRouteBlocked: a }),
                ],
            });
        case v.gr.SUMMARY:
            return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(tx, { onClick: () => n(s) }), (0, i.jsx)(tv, { onClick: () => n(r) })],
            });
        case v.gr.SHARE:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(tp, { onClick: () => n(s), disabled: a }),
                    (0, i.jsx)(tA, { onClick: () => n(r), disabled: a }),
                ],
            });
        default:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(tp, { onClick: () => n(s), disabled: a }),
                    (0, v.Rq)(t)
                        ? (0, i.jsx)(tg, { onClick: () => n(r), disabled: a })
                        : (0, i.jsx)(tm, { onClick: () => n(r), disabled: a }),
                ],
            });
    }
}
function tj(e) {
    let { className: t } = e;
    return (0, i.jsx)(z, {
        animatedSrc:
            "https://cdn.discordapp.com/assets/content/02e9ae4cdbec0b2adef22c9a5659f5c7340e399cc8932e8af6d41e62a37644ae.png",
        staticSrc:
            "https://cdn.discordapp.com/assets/content/f08be0abd0d224b5f7e1e5d6c1ef8e4d24cddcb712e2c624dcc6ea3d136818d5.png",
        className: t,
    });
}
var tN = a(771639);
let tS = { "--custom-checkpoint-screen-vertical-inset": "88px" };
function tC(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", { className: tN.n, style: tS, children: t });
}
var tT = a(639331);
function tR() {
    let e = (0, p.bG)([l.A], () => l.A.fetchState !== l.T.SUCCESS || null != l.A.stats);
    return (0, i.jsx)(tC, {
        children: (0, i.jsxs)("div", {
            className: tT.Qs,
            children: [
                (0, i.jsxs)("div", {
                    className: tT.Ok,
                    children: ["2026", !e && (0, i.jsx)(tj, { className: tT.gi })],
                }),
                (0, i.jsxs)("div", {
                    className: tT.eH,
                    children: [
                        (0, i.jsx)($, {
                            tag: "p",
                            variant: "heading-lg/medium",
                            children: es.intl.string(e ? ea.default["7YmUVu"] : ea.default["Fyr+NW"]),
                        }),
                        !e &&
                            (0, i.jsx)($, {
                                tag: "p",
                                variant: "heading-lg/medium",
                                children: es.intl.string(ea.default["2GRr6H"]),
                            }),
                    ],
                }),
            ],
        }),
    });
}
(a(134528), a(947204));
var tO = a(675970),
    tM = a(559106),
    ty = a(366056),
    tL = a(292801),
    tD = a(155718),
    tk = a(294454),
    tP = a(489414),
    tG = a(878358),
    tH = a(383233),
    tU = a(819648),
    tF = a(677059);
function tK(e) {
    let { children: t } = e;
    return (0, i.jsx)($, { variant: "heading-xxl/medium", className: tF.h, children: t });
}
var tB = a(100391);
function tz(e) {
    let { icon: t, children: a } = e;
    return (0, i.jsxs)("div", {
        className: tB.D,
        children: [
            (0, i.jsx)(t, { size: "md", color: "currentColor" }),
            (0, i.jsx)($, { variant: "heading-lg/semibold", className: tB.Q, children: a }),
        ],
    });
}
var tV = a(456410);
function tW(e) {
    let { name: t, label: a, checked: s, onSelect: r, children: n } = e;
    return (0, i.jsx)(tM.vN, {
        within: !0,
        children: (0, i.jsxs)("label", {
            className: _()(tV.uK, { [tV.KD]: s }),
            children: [
                (0, i.jsx)(eE.A, {
                    children: (0, i.jsx)("input", { type: "radio", name: t, checked: s, onChange: r, "aria-label": a }),
                }),
                s ? (0, i.jsx)("div", { className: tV.Gt, "aria-hidden": !0 }) : null,
                (0, i.jsx)("div", { className: tV.Nr, "aria-hidden": !0, children: n }),
            ],
        }),
    });
}
function tY() {
    let e = (0, p.bG)([l.A], () => l.A.character),
        t = (0, p.bG)([l.A], () => l.A.stats),
        a = h.useId(),
        s = h.useMemo(() => {
            var a, s;
            return ((a = e),
            (s = t),
            null != a && null != s
                ? [tO.Q.CHARACTER_ONLY, tO.Q.DEFAULT, tO.Q.STATS_ONLY]
                : null != a
                  ? [tO.Q.CHARACTER_ONLY]
                  : null != s
                    ? [tO.Q.STATS_ONLY]
                    : []).map((a) => ({ cardType: a, checkpointData: (0, tU.Go)(a, e, t) }));
        }, [e, t]),
        [n, c] = h.useState(s.at(0)?.cardType),
        o = s.find((e) => {
            let { cardType: t } = e;
            return t === n;
        });
    return null == o
        ? null
        : (0, i.jsx)(tC, {
              children: (0, i.jsxs)("div", {
                  className: tV.uM,
                  children: [
                      (0, i.jsxs)("div", {
                          className: tV.wx,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: tV.R_,
                                  children: [
                                      (0, i.jsx)(tz, { icon: ty.M, children: es.intl.string(e3.default.ir6nEQ) }),
                                      (0, i.jsx)($, {
                                          variant: "display-lg",
                                          className: tV.Vy,
                                          children: es.intl.string(e3.default["T7cl+Y"]),
                                      }),
                                  ],
                              }),
                              (0, i.jsx)("div", {
                                  className: tV.h_,
                                  children: (0, i.jsx)(tK, { children: es.intl.string(ea.default.KXDPot) }),
                              }),
                          ],
                      }),
                      (0, i.jsx)("div", {
                          role: "radiogroup",
                          "aria-label": es.intl.string(ea.default.KXDPot),
                          className: tV.kR,
                          children: s.map((e) => {
                              let { cardType: t, checkpointData: s } = e;
                              return (0, i.jsx)(
                                  tW,
                                  {
                                      name: a,
                                      label: (function (e) {
                                          switch (e) {
                                              case tO.Q.CHARACTER_ONLY:
                                                  return es.intl.string(ea.default.tUU3fe);
                                              case tO.Q.DEFAULT:
                                                  return es.intl.string(ea.default.DZQzJn);
                                              case tO.Q.STATS_ONLY:
                                                  return es.intl.string(ea.default.e2UHGT);
                                          }
                                      })(t),
                                      checked: t === o.cardType,
                                      onSelect: () => c(t),
                                      children: (0, i.jsx)(tG.A, { checkpointData: s }),
                                  },
                                  t,
                              );
                          }),
                      }),
                      (0, i.jsxs)(B, {
                          size: "custom",
                          className: tV.sY,
                          "aria-label": es.intl.string(es.t.I3ltXO),
                          onClick: function () {
                              if (null == o) return;
                              let { cardType: e, checkpointData: t } = o;
                              (0, tk.fO)({
                                  message: new tH.Ay({
                                      content: "",
                                      components: [
                                          { type: tD.I5.CHECKPOINT_CARD, id: (0, tP.X1)("0"), checkpointData: t },
                                      ],
                                  }),
                                  source: "checkpoint",
                                  customSendHandler: async (t, a, s) => {
                                      let { withMessage: i } = a;
                                      s(!0);
                                      try {
                                          (await (0, d.jA)(t, i ?? "", e),
                                              (0, u.Pe)(e),
                                              (0, tk.Be)(),
                                              (0, r.P0)({ text: es.intl.string(es.t.kwmYkt), variant: "success" }));
                                      } catch {
                                          (0, r.P0)({ text: es.intl.string(es.t.iufib1), variant: "critical" });
                                      } finally {
                                          s(!1);
                                      }
                                  },
                              });
                          },
                          children: [
                              (0, i.jsx)(J.E, {
                                  variant: "mono-md/bold",
                                  color: "none",
                                  className: tV.RC,
                                  children: es.intl.string(es.t.I3ltXO),
                              }),
                              (0, i.jsx)(tL.t, { size: "refresh_sm", color: "currentColor" }),
                          ],
                      }),
                  ],
              }),
          });
}
var tZ = a(536426),
    tq = a(782134),
    tX = a(998304),
    tJ = a(975571),
    tQ = a(427262),
    t$ = a(652215),
    t0 = a(438389);
let t1 = (0, tX.j5)(ep.Kr);
function t5(e) {
    let { onStart: t } = e,
        a = (0, p.bG)([T.default], () => T.default.getCurrentUser()),
        s = (0, tQ.tx)(a),
        r = (0, p.bG)([P.Ay], () => P.Ay.useReducedMotion);
    return (
        th("ArrowRight", t),
        (0, i.jsxs)(tC, {
            children: [
                (0, i.jsxs)("div", {
                    className: t0.Qs,
                    children: [
                        (0, i.jsxs)("div", {
                            className: t0.wx,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: t0.Qq,
                                    children: [
                                        (0, i.jsx)($, {
                                            variant: "display-lg",
                                            className: t0.DD,
                                            children: es.intl.string(e3.default["CdU/PF"]),
                                        }),
                                        (0, i.jsx)($, {
                                            variant: "heading-xxl/medium",
                                            children: es.intl.formatToPlainString(ea.default.xhZ23b, { username: s }),
                                        }),
                                    ],
                                }),
                                (0, i.jsx)("div", {
                                    className: t0.CB,
                                    children: (0, i.jsx)(tZ.U, {
                                        artboard: "Entry",
                                        className: t0.lW,
                                        fit: "contain",
                                        withReducedMotion: "short-loop",
                                        dataBinding: { iconColor: t1, reducedMotion: r },
                                    }),
                                }),
                            ],
                        }),
                        (0, i.jsxs)(B, {
                            size: "custom",
                            className: t0.ni,
                            "aria-label": es.intl.string(es.t.I0v0Qv),
                            onClick: t,
                            children: [
                                (0, i.jsx)(tq.PlayIcon, { size: "refresh_sm", color: "currentColor" }),
                                (0, i.jsx)($, {
                                    variant: "mono-md/normal",
                                    className: t0.qK,
                                    children: es.intl.string(es.t.I0v0Qv),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: t0.qr,
                    children: [
                        (0, i.jsx)($, {
                            variant: "body-sm/medium",
                            className: t0.ed,
                            children: es.intl.format(ea.default.hcNhyq, {
                                learnMoreHook: (e, t) =>
                                    (0, i.jsx)(
                                        eu.Anchor,
                                        {
                                            className: t0.nf,
                                            href: tJ.A.getArticleURL(t$.MVz.CHECKPOINT_2026),
                                            useDefaultUnderlineStyles: !1,
                                            children: e,
                                        },
                                        t,
                                    ),
                            }),
                        }),
                        (0, i.jsx)($, {
                            variant: "body-md/medium",
                            className: t0.al,
                            children: es.intl.format(e3.default.g476ZL, { name: "Exyl" }),
                        }),
                    ],
                }),
            ],
        })
    );
}
var t6 = a(788026),
    t2 = a(141881);
function t3(e) {
    let { children: t } = e;
    return (0, i.jsx)(et, { className: t2.l, children: t });
}
var t4 = a(765671),
    t8 = a(590642),
    t9 = a(362263),
    t7 = a(406956);
let ae = (0, tX.j5)(ep.Kr);
function at(e) {
    let { value: t, alignment: a = "left" } = e,
        s = (0, p.bG)([P.Ay], () => P.Ay.useReducedMotion),
        [r, n] = h.useState(0),
        c = s ? t : r;
    h.useEffect(() => {
        if (s) return;
        let e = performance.now(),
            a = requestAnimationFrame(function s(i) {
                let r = Math.min((i - e) / 500, 1);
                (n(Math.round(t * r)), r < 1 && (a = requestAnimationFrame(s)));
            });
        return () => cancelAnimationFrame(a);
    }, [t, s]);
    let d = "center" === a ? t8.m : t9.w;
    return (0, i.jsxs)("div", {
        className: t7.lY,
        children: [
            (0, i.jsx)("div", { className: t7.VL, children: t }),
            (0, i.jsx)(d, {
                className: t7.lW,
                fit: "layout",
                withReducedMotion: "short-loop",
                dataBinding: { DisplayValue: c, TextColor: ae },
            }),
            (0, i.jsx)(eE.A, { children: t.toLocaleString(es.intl.currentLocale) }),
        ],
    });
}
var aa = a(434911);
function as(e) {
    let { value: t } = e,
        { ref: a, width: s } = (0, t4.Ay)(),
        { ref: r, width: n } = (0, t4.Ay)(),
        c = null != s && null != n ? Math.min(1, s / n) : 1;
    return (0, i.jsxs)("div", {
        ref: a,
        className: aa.ai,
        style: { height: 200 * c },
        children: [
            (0, i.jsx)("span", { ref: r, className: _()(aa.Qq, aa.xP), children: t }),
            (0, i.jsx)(at, { value: t }),
        ],
    });
}
function ai(e) {
    let { value: t } = e;
    return (0, i.jsxs)("div", {
        className: aa.dJ,
        children: [
            "number" == typeof t
                ? (0, i.jsx)(as, { value: t })
                : (0, i.jsx)($, { variant: "heading-xxl/medium", className: aa.Qq, children: t }),
            (0, i.jsx)(tj, { className: aa.gi }),
        ],
    });
}
(a(393431), a(532706), a(42231), a(232424), a(949626), a(767709), a(65162));
var ar = a(445199),
    an = a(205524),
    ac = a(690521),
    ad = a(152321);
let al = [0, 0, 2],
    ao = [0, 1, 0],
    au = [0, 0, 0],
    ah = `
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
    af = `
precision mediump float;

varying vec2 v_texcoord;
varying highp vec3 v_lighting;

uniform sampler2D u_texture;

void main() {
  highp vec4 texelColor = texture2D(u_texture, v_texcoord);
  gl_FragColor = vec4(texelColor.rgb * v_lighting, texelColor.a);
}
`,
    a_ = [
        -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5,
        -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5,
        0.5, 0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, -0.5,
        -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5,
        -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5,
        -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5,
    ],
    ab = [
        0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0,
        1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0,
    ],
    ap = [
        0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
        1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
        -1, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
        1, 0, 0,
    ];
function ax(e) {
    let t,
        { emoji: a } = e,
        [s, r] = h.useState(null),
        [n, c] = h.useState(null),
        d = h.useRef(new Image()),
        [l, o] = h.useState(null),
        [u, f] = h.useState(!1),
        b = h.useRef(0),
        x = h.useRef(0),
        m = h.useRef(45),
        g = h.useRef(45),
        A = (0, p.bG)([P.Ay], () => P.Ay.useReducedMotion),
        v = 70 * !A,
        w = 40 * !A,
        I = h.useRef(v),
        E = h.useRef(w),
        j = h.useRef(!1),
        N = h.useRef(0),
        S = h.useRef(0);
    ((t = h.useRef(null)),
        h.useEffect(() => {
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
        h.useEffect(() => {
            let e,
                a = 0,
                i = s?.getContext("webgl");
            if (null == i || null == s || null == n) return;
            t.current = i;
            let r = i.createShader(i.VERTEX_SHADER),
                c = i.createShader(i.FRAGMENT_SHADER);
            if (null == r || null == c) return;
            if (
                (i.shaderSource(r, ah),
                i.shaderSource(c, af),
                i.compileShader(r),
                !i.getShaderParameter(r, i.COMPILE_STATUS))
            )
                return void console.error("ERROR compiling vertex shader!", i.getShaderInfoLog(r));
            if ((i.compileShader(c), !i.getShaderParameter(c, i.COMPILE_STATUS)))
                return void console.error("ERROR compiling fragment shader!", i.getShaderInfoLog(c));
            let d = i.createProgram();
            if (
                (i.attachShader(d, r), i.attachShader(d, c), i.linkProgram(d), !i.getProgramParameter(d, i.LINK_STATUS))
            )
                return void console.error("ERROR linking program!", i.getProgramInfoLog(d));
            if ((i.validateProgram(d), !i.getProgramParameter(d, i.VALIDATE_STATUS)))
                return void console.error("ERROR validating program!", i.getProgramInfoLog(d));
            let l = i.getAttribLocation(d, "a_position"),
                o = i.getAttribLocation(d, "a_texcoord"),
                u = i.getUniformLocation(d, "u_matrix"),
                h = i.getUniformLocation(d, "u_texture"),
                f = i.getAttribLocation(d, "a_vertexNormal"),
                _ = i.getUniformLocation(d, "u_normalMatrix"),
                b = i.createBuffer();
            (i.bindBuffer(i.ARRAY_BUFFER, b),
                i.bufferData(i.ARRAY_BUFFER, new Float32Array(ap), i.STATIC_DRAW),
                i.vertexAttribPointer(f, 3, i.FLOAT, !1, 0, 0),
                i.enableVertexAttribArray(f));
            let p = i.createBuffer();
            (i.bindBuffer(i.ARRAY_BUFFER, p),
                (e = new Float32Array(a_)),
                i.bufferData(i.ARRAY_BUFFER, e, i.STATIC_DRAW));
            let x = i.createBuffer();
            (i.bindBuffer(i.ARRAY_BUFFER, x), i.bufferData(i.ARRAY_BUFFER, new Float32Array(ab), i.STATIC_DRAW));
            let A = ar.DF(60);
            return (
                (a = requestAnimationFrame(function e() {
                    if (null == i || null == s) return;
                    (i.viewport(0, 0, i.canvas.width, i.canvas.height), i.enable(i.CULL_FACE), i.enable(i.DEPTH_TEST));
                    let t = ar.DF(m.current),
                        r = ar.DF(g.current);
                    (i.clear(i.COLOR_BUFFER_BIT | i.DEPTH_BUFFER_BIT),
                        i.useProgram(d),
                        i.enableVertexAttribArray(l),
                        i.bindBuffer(i.ARRAY_BUFFER, p),
                        i.vertexAttribPointer(l, 3, i.FLOAT, !1, 0, 0),
                        i.enableVertexAttribArray(o),
                        i.bindBuffer(i.ARRAY_BUFFER, x),
                        i.vertexAttribPointer(o, 2, i.FLOAT, !1, 0, 0));
                    let n = s.clientWidth / s.clientHeight,
                        c = an.fN(an.vt(), A, n, 1, 2e3),
                        f = an.t5(an.vt(), al, au, ao),
                        b = an.lw(an.vt(), c, f),
                        v = an.vt();
                    (an.eL(v, v, t), an.Z8(v, v, r));
                    let w = an.lw(an.vt(), b, v),
                        I = an.vt();
                    (an.B8(I, v),
                        an.mg(I, I),
                        i.uniformMatrix4fv(_, !1, I),
                        i.uniformMatrix4fv(u, !1, w),
                        i.uniform1i(h, 0),
                        i.drawArrays(i.TRIANGLES, 0, 36),
                        (a = requestAnimationFrame(e)));
                })),
                () => cancelAnimationFrame(a)
            );
        }, [m, g, s, n]));
    let C = h.useCallback(() => {
        let e = n?.getContext("2d");
        null != n &&
            null != e &&
            ((e.fillStyle = "black"),
            e.fillRect(0, 0, n.width, n.height),
            e.drawImage(d.current, 0, 0, n.width, n.height),
            (e.fillStyle = ep.Kr),
            e.fillRect(0, 0, n.width, 1),
            e.fillRect(0, 0, 1, n.height),
            e.fillRect(0, n.height - 1, n.width, 1),
            e.fillRect(n.width - 1, 0, 1, n.height),
            o(a),
            f(!0));
    }, [a, d, n]);
    (h.useEffect(() => {
        null != n &&
            ((d.current.crossOrigin = "anonymous"), (d.current.src = (0, ac.Ez)(a, 256)), (d.current.onload = C));
    }, [a, C, d, n]),
        h.useEffect(
            () => (
                !(function e(t) {
                    let a = 0.001 * t,
                        s = Math.min(a - x.current, 0.1);
                    if (((g.current += -E.current * s), (m.current += -I.current * s), !j.current)) {
                        if (Math.abs(I.current) > v) {
                            let e = I.current > 0 ? 1 : -1;
                            I.current -= 2 * e * window.devicePixelRatio;
                        }
                        if (Math.abs(E.current) > w) {
                            let e = E.current > 0 ? 1 : -1;
                            E.current -= 2 * e * window.devicePixelRatio;
                        }
                    }
                    ((x.current = a), (b.current = requestAnimationFrame(e)));
                })(0),
                () => cancelAnimationFrame(b.current)
            ),
            [v, w],
        ));
    let T = h.useCallback((e) => {
            ((j.current = !0), (I.current = 0), (E.current = 0), (N.current = e.clientX), (S.current = e.clientY));
        }, []),
        R = h.useCallback((e) => {
            if (j.current) {
                let t = (e.clientX - N.current) / window.devicePixelRatio;
                ((I.current = -((e.clientY - S.current) / window.devicePixelRatio) * (100 / window.devicePixelRatio)),
                    (E.current = -t * (100 / window.devicePixelRatio)),
                    (N.current = e.clientX),
                    (S.current = e.clientY));
            }
        }, []),
        O = h.useCallback(() => {
            j.current = !1;
        }, []);
    return (
        h.useEffect(
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
                    className: _()(ad.Ji, { [ad.q4]: !u }),
                    ref: r,
                    height: 512,
                    width: 512,
                    onMouseDown: T,
                }),
                (0, i.jsx)("canvas", { className: ad.R, ref: c, height: 256, width: 256 }),
            ],
        })
    );
}
var am = a(826820);
let ag = [];
function aA(e) {
    let { emojiStats: t } = e,
        a = Math.round(t?.numEmojisSent ?? 0),
        s = (0, w.bD)(t?.numEmojisSentPercentile);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: am.dJ,
                children: [
                    (0, i.jsx)(tz, { icon: X.o, children: es.intl.string(ea.default.ZTDCIv) }),
                    (0, i.jsx)(at, { value: a }),
                ],
            }),
            (0, i.jsx)(tK, {
                children:
                    null != s
                        ? es.intl.format(ea.default.o7vDrk, {
                              percent: s,
                              percentHook: (e, t) => (0, i.jsx)(t3, { children: e }, t),
                          })
                        : es.intl.format(ea.default.NFptic, { numEmojis: a }),
            }),
        ],
    });
}
function av(e) {
    let { numEmojisSent: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: am.dJ,
                children: [
                    (0, i.jsx)(tz, { icon: X.o, children: es.intl.string(ea.default.ZTDCIv) }),
                    (0, i.jsx)(ai, { value: t }),
                ],
            }),
            (0, i.jsx)(tK, { children: es.intl.format(ea.default["660/Rr"], { numEmojis: (0, w.wj)(t) }) }),
        ],
    });
}
function aw() {
    let e = (0, p.bG)([l.A], () => l.A.stats?.emojis),
        t = (0, p.bG)([l.A], () => (0, w.y7)(l.A.stats)),
        a = (0, p.bG)([l.A], () => l.A.globalStats?.emojis),
        s = !t && null != a,
        r = (s ? a.emojis : e?.emojis) ?? ag,
        [n, c] = h.useState(0),
        d = r[n],
        o = D(b);
    return (0, i.jsx)(tC, {
        children: (0, i.jsxs)("div", {
            className: am.kL,
            children: [
                (0, i.jsx)("div", { className: am.KY, children: null != d && (0, i.jsx)(ax, { emoji: d }) }),
                (0, i.jsxs)("div", {
                    className: am.C,
                    children: [
                        s ? (0, i.jsx)(av, { numEmojisSent: a.numEmojisSent }) : (0, i.jsx)(aA, { emojiStats: e }),
                        (0, i.jsx)("div", {
                            className: am.gm,
                            children: r.map((e, t) =>
                                (0, i.jsx)(
                                    aI,
                                    {
                                        emoji: e,
                                        rank: t + 1,
                                        isActive: t === n,
                                        onClick: () => {
                                            (o(), c(t));
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
function aI(e) {
    let { emoji: t, rank: a, isActive: s, onClick: r } = e,
        n = !(0, p.bG)([P.Ay], () => P.Ay.useReducedMotion) && !0 === t.animated;
    return (0, i.jsxs)(K, {
        size: "custom",
        className: am._X,
        onClick: r,
        "aria-label": es.intl.formatToPlainString(ea.default["S5+pRg"], { emojiName: t.name, rank: a }),
        "aria-pressed": s,
        children: [
            (0, i.jsx)(t6.A, { className: am.Zg, emojiId: t.id, emojiName: t.name, animated: n }),
            (0, i.jsx)($, { variant: "mono-md/bold", className: am.Tm, children: a }),
        ],
    });
}
var aE = a(236177),
    aj = a(214947),
    aN = a(939249),
    aS = a(597770),
    aC = a(559647),
    aT = a(95369),
    aR = a(570287),
    aO = a(486020),
    aM = a(801305);
let ay = [],
    aL = (0, tX.j5)(ep.Kr),
    aD = { r: 0, g: 0, b: 0, a: 1 },
    ak = {
        "Avatar01/Stroke": aD,
        "Avatar01/Fill": aL,
        "Avatar02/Stroke": aD,
        "Avatar02/Fill": aL,
        "Avatar03/Stroke": aD,
        "Avatar03/Fill": aL,
        "Avatar04/Stroke": aD,
        "Avatar04/Fill": aL,
        "Avatar05/Stroke": aD,
        "Avatar05/Fill": aL,
        ConnectorColor: aL,
    };
function aP(e) {
    return null != e ? aO.Ay.getUserAvatarURL(e, !1, 160, "png") : void 0;
}
function aG(e) {
    let t,
        { route: a, onNextStep: s, onPreviousStep: r } = e,
        n = (0, p.bG)([l.A], () => l.A.stats?.users ?? ay),
        c = (0, p.bG)([l.A], () => l.A.stats?.sidekick),
        d = (0, p.bG)([T.default], () => T.default.getCurrentUser()),
        o = (0, p.bG)([P.Ay], () => P.Ay.useReducedMotion),
        u = h.useRef(null),
        f = h.useRef(void 0),
        b = (function (e, t) {
            let [a, s] = h.useState({ route: e, hasShownSquad: e === v.gr.SQUAD, isTransitioning: !1 });
            switch (
                (a.route !== e &&
                    s({
                        route: e,
                        hasShownSquad: a.hasShownSquad || e === v.gr.SQUAD,
                        isTransitioning: !t && a.route === v.gr.SQUAD && e === v.gr.SIDEKICK,
                    }),
                h.useEffect(() => {
                    if (!a.isTransitioning) return;
                    let e = setTimeout(() => s((e) => ({ ...e, isTransitioning: !1 })), 1500);
                    return () => clearTimeout(e);
                }, [a.isTransitioning]),
                e)
            ) {
                case v.gr.SQUAD_TRANSITION:
                    return 5 * !!a.hasShownSquad;
                case v.gr.SQUAD:
                    return 1;
                case v.gr.SIDEKICK:
                    return a.isTransitioning ? 2 : 3;
                case v.gr.SIDEKICK_LEAVE:
                    return t ? 3 : 4;
                default:
                    return 0;
            }
        })(a, o);
    ((t = h.useRef(!0)),
        h.useEffect(() => {
            if (a !== v.gr.SIDEKICK_LEAVE) {
                t.current = !1;
                return;
            }
            if (t.current) return void r();
            if (o) return void s();
            let e = setTimeout(s, 1e3);
            return () => clearTimeout(e);
        }, [s, r, o, a]));
    let [x, m] = n,
        g = ((0, tQ.tx)(x) ?? "").toLocaleUpperCase(),
        A = ((0, tQ.tx)(m) ?? "").toLocaleUpperCase(),
        w = (0, tQ.tx)(c?.user) ?? "",
        I = n.length < 2,
        E = a === v.gr.SIDEKICK || a === v.gr.SIDEKICK_LEAVE;
    h.useEffect(() => () => clearInterval(f.current), []);
    let j = h.useCallback(() => {
        (clearInterval(f.current),
            (f.current = setInterval(() => {
                let e = u.current?.getProperties();
                e?.twoFriends?.value === I &&
                    e?.reducedMotion?.value === o &&
                    e?.["Avatar01/Username"]?.value === w.toLocaleUpperCase() &&
                    (u.current?.play(), clearInterval(f.current));
            }, 50)));
    }, [o, w, I]);
    return (0, i.jsxs)(tC, {
        children: [
            (0, i.jsx)(aE.m, {
                ref: u,
                className: aM.lW,
                fit: "contain",
                autoplay: !1,
                onLoad: j,
                withReducedMotion: "play",
                dataBinding: {
                    ...ak,
                    AnimationState: b,
                    "Avatar01/img": aP(c?.user),
                    "Avatar02/img": aP(m),
                    "Avatar03/img": aP(x),
                    "Avatar04/img": aP(c?.user),
                    "Avatar05/img": aP(d),
                    "Avatar01/Username": w.toLocaleUpperCase(),
                    "Avatar02/Username": A,
                    "Avatar03/Username": g,
                    "Avatar04/Username": w.toLocaleUpperCase(),
                    twoFriends: I,
                    reducedMotion: o,
                },
            }),
            a === v.gr.SQUAD_TRANSITION &&
                (0, i.jsx)("div", {
                    className: _()(aM.Qs, aM.kY),
                    children: (0, i.jsx)(tK, { children: es.intl.string(ea.default["6RSp5q"]) }),
                }),
            a === v.gr.SQUAD &&
                (0, i.jsx)("div", {
                    className: aM.Qs,
                    children: (0, i.jsx)(aH, {
                        title: es.intl.string(e3.default.OzY5Ns),
                        description: es.intl.string(ea.default.EqdLDd),
                    }),
                }),
            E &&
                null != c &&
                (0, i.jsxs)("div", {
                    className: _()(aM.Qs, aM.yG),
                    children: [
                        (0, i.jsxs)("div", {
                            className: aM.Cv,
                            children: [
                                (0, i.jsx)(aH, {
                                    title: es.intl.string(e3.default["+uwOHt"]),
                                    description: es.intl.string(ea.default["/ctmGw"]),
                                }),
                                (0, i.jsx)(aU, { sidekick: c }),
                            ],
                        }),
                        (0, i.jsx)(aF, { user: c.user, username: w }),
                    ],
                }),
        ],
    });
}
function aH(e) {
    let { title: t, description: a } = e;
    return (0, i.jsxs)("div", {
        className: aM.wx,
        children: [
            (0, i.jsxs)("div", {
                className: aM.R_,
                children: [
                    (0, i.jsx)(tz, { icon: aj.$, children: es.intl.string(e3.default.ZQakPR) }),
                    (0, i.jsx)($, { variant: "display-lg", className: aM.Vy, children: t }),
                ],
            }),
            (0, i.jsx)(tK, { children: a }),
        ],
    });
}
function aU(e) {
    let { sidekick: t } = e;
    return (0, i.jsxs)("div", {
        className: aM.M1,
        children: [
            (0, i.jsxs)("div", {
                className: aM.dJ,
                children: [
                    (0, i.jsx)(e2.ChatIcon, { size: "md", color: "currentColor" }),
                    (0, i.jsx)($, {
                        variant: "heading-xxl/medium",
                        className: aM.wk,
                        children: Math.round(t.numMessagesSent),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: aM.dJ,
                children: [
                    (0, i.jsx)(e7.MicrophoneIcon, { size: "md", color: "currentColor" }),
                    (0, i.jsx)($, {
                        variant: "heading-xxl/medium",
                        className: aM.wk,
                        children: Math.round(t.numVoiceMinutes),
                    }),
                ],
            }),
        ],
    });
}
function aF(e) {
    let { user: t, username: a } = e,
        [s, n] = h.useState(""),
        [c, l] = h.useState(!1),
        [o, f] = h.useState(!1),
        b = (0, aR.A)(t.id),
        p = s.length > 0 && s.length <= 250 && !c && !o,
        x = c ? es.intl.string(es.t.fjcCk5) : es.intl.formatToPlainString(es.t["0ZQw/X"], { name: a });
    async function m() {
        if (p) {
            f(!0);
            try {
                (await (0, d.fr)(s, t.id), n(""), l(!0));
            } catch {
                (0, r.P0)({ text: es.intl.string(es.t.fEptJP), variant: "critical" });
            } finally {
                f(!1);
            }
        }
    }
    return b
        ? (0, i.jsxs)("div", {
              className: aM.OG,
              children: [
                  (0, i.jsx)("textarea", {
                      className: aM.yB,
                      value: s,
                      onChange: (e) => n(e.target.value),
                      disabled: c || o,
                      placeholder: x,
                      "aria-label": x,
                  }),
                  (0, i.jsxs)("div", {
                      className: aM.n,
                      children: [
                          (0, i.jsx)(aN.D, {
                              className: aM.KD,
                              onClick: function () {
                                  ((0, u.nr)(t.id),
                                      (0, aT.A)({
                                          giftRecipient: t,
                                          analyticsLocations: [eh.A.CHECKPOINT, eh.A.CHECKPOINT_SIDEKICK],
                                      }));
                              },
                              "aria-label": es.intl.string(es.t.Ve9Ge6),
                              children: (0, i.jsx)(aS.GiftIcon, { size: "refresh_sm", color: "currentColor" }),
                          }),
                          (0, i.jsx)(aN.D, {
                              className: _()(aM.KD, { [aM.r9]: !p }),
                              onClick: m,
                              "aria-disabled": !p,
                              "aria-label": es.intl.string(es.t.oeb1vg),
                              children: (0, i.jsx)(aC.SendMessageIcon, { size: "refresh_sm", color: "currentColor" }),
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
var aK = a(9767);
function aB(e) {
    let { games: t } = e,
        a = Math.round(t?.totalDaysPlayed ?? 0),
        s = (0, w.bD)(t?.totalDaysPlayedPercentile);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: aK.dJ,
                children: [
                    (0, i.jsx)(tz, { icon: e0.CalendarIcon, children: es.intl.string(ea.default["4N5p4D"]) }),
                    (0, i.jsx)(at, { value: a }),
                ],
            }),
            (0, i.jsx)(tK, {
                children:
                    null != s
                        ? es.intl.format(ea.default["4FXB/m"], {
                              numDays: a,
                              percent: s,
                              percentHook: (e, t) => (0, i.jsx)(t3, { children: e }, t),
                          })
                        : es.intl.format(ea.default.iCKjh6, { numDays: a }),
            }),
        ],
    });
}
function az(e) {
    let { numUsersPlayedEveryDay: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: aK.dJ,
                children: [
                    (0, i.jsx)(tz, { icon: e0.CalendarIcon, children: es.intl.string(ea.default["dx4+NI"]) }),
                    (0, i.jsx)(ai, { value: t }),
                ],
            }),
            (0, i.jsx)(tK, { children: es.intl.format(ea.default["N32w+2"], { numUsers: (0, w.wj)(t) }) }),
        ],
    });
}
function aV() {
    let e = (0, p.bG)([l.A], () => l.A.stats?.games),
        t = (0, p.bG)([l.A], () => (0, w.uO)(l.A.stats)),
        a = (0, p.bG)([l.A], () => l.A.globalStats?.games?.numUsersPlayedEveryDay),
        s = !t && null != a;
    return (0, i.jsx)(tC, {
        children: (0, i.jsxs)("div", {
            className: aK.kL,
            children: [
                (0, i.jsx)(z, {
                    animatedSrc:
                        "https://cdn.discordapp.com/assets/content/e3289e9a0a7faf4db23c3fefa390126fc64a09120fdb701f9dea833dddf671ef.png",
                    staticSrc:
                        "https://cdn.discordapp.com/assets/content/312abde9b19fcf85150d507de3f33096992506459b895ab3ea8d92c8f1e04a28.png",
                    className: aK.HW,
                }),
                (0, i.jsx)("div", {
                    className: aK.C,
                    children: s ? (0, i.jsx)(az, { numUsersPlayedEveryDay: a }) : (0, i.jsx)(aB, { games: e }),
                }),
            ],
        }),
    });
}
var aW = a(364522),
    aY = a(828062);
function aZ(e) {
    let { children: t } = e;
    return (0, i.jsx)($, { variant: "display-lg", className: aY.V, children: t });
}
var aq = a(109112),
    aX = a(311043),
    aJ = a(883053);
function aQ(e) {
    let { rank: t, className: a } = e;
    return (0, i.jsxs)(et, { className: _()(aJ.T, a), children: ["#", t] });
}
var a$ = a(497357);
let a0 = "/assets/e74703a44e087adc.svg";
function a1(e) {
    let {
            game: { id: t, name: a, coverImageHash: s },
            rank: r,
            label: n,
            shellImage: c,
            className: d,
        } = e,
        l = (0, p.bG)(
            [aX.A],
            () =>
                aX.A.getGame(t)?.getCoverURL(300) ??
                aO.Ay.getApplicationIconURL({ id: t, icon: s, size: 300, fallbackAvatar: !1 }),
        );
    return (0, i.jsxs)("div", {
        className: _()(a$.LO, d),
        children: [
            (0, i.jsxs)("div", {
                className: a$.Tn,
                children: [
                    (0, i.jsx)("img", { src: c, alt: "", className: a$.vf }),
                    null != l
                        ? (0, i.jsx)("img", { src: l, alt: "", className: a$.Qw })
                        : (0, i.jsx)("div", {
                              className: _()(a$.Qw, a$.uj),
                              children: (0, i.jsx)(aq._, { size: "lg" }),
                          }),
                    null != r && (0, i.jsx)(aQ, { rank: r, className: a$.Tm }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: a$.zH,
                children: [
                    (0, i.jsx)($, { variant: "heading-xl/medium", className: a$.UU, lineClamp: 1, children: a }),
                    (0, i.jsx)($, { variant: "mono-md/bold", className: a$.Pf, children: n }),
                ],
            }),
        ],
    });
}
function a5(e) {
    let { numSessions: t, ...a } = e;
    return (0, i.jsx)(a1, { ...a, label: Math.round(t), shellImage: a0 });
}
function a6(e) {
    let { numSessions: t, ...a } = e;
    return (0, i.jsx)(a1, {
        ...a,
        rank: 1,
        label: Math.round(t),
        shellImage: "/assets/fbe1ab9677ed007a.svg",
        className: a$.Ms,
    });
}
function a2(e) {
    return (0, i.jsx)(a1, { ...e, shellImage: a0 });
}
var a3 = a(842807);
let a4 = [];
function a8(e) {
    let { gameStats: t } = e,
        a = Math.round(t?.totalGamesPlayed ?? 0),
        s = (0, w.bD)(t?.totalGamesPlayedPercentile),
        r = t?.games ?? a4;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: a3.wx,
                children: [
                    (0, i.jsxs)("div", {
                        className: a3.dJ,
                        children: [
                            (0, i.jsx)(tz, {
                                icon: e5.GameControllerIcon,
                                children: es.intl.string(ea.default.HM2fjf),
                            }),
                            (0, i.jsx)(at, { value: a }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: a3.h_,
                        children: (0, i.jsx)(tK, {
                            children:
                                null != s
                                    ? es.intl.format(ea.default["hc0/yJ"], {
                                          percent: s,
                                          percentHook: (e, t) => (0, i.jsx)(t3, { children: e }, t),
                                      })
                                    : es.intl.format(ea.default.aJMJ6b, { numGames: a }),
                        }),
                    }),
                ],
            }),
            (0, i.jsx)(aW.Ip, {
                orientation: "horizontal",
                scrollbarGutter: !1,
                fade: !0,
                className: a3.ag,
                children: r.map((e, t) => {
                    let { game: a, numSessions: s } = e;
                    return 0 === t
                        ? (0, i.jsx)(a6, { game: a, numSessions: s }, a.id)
                        : (0, i.jsx)(a5, { game: a, rank: t + 1, numSessions: s }, a.id);
                }),
            }),
        ],
    });
}
function a9(e) {
    let { gameStats: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: _()(a3.wx, a3.l7),
                children: [
                    (0, i.jsxs)("div", {
                        className: a3.dJ,
                        children: [
                            (0, i.jsx)(tj, { className: a3.gi }),
                            (0, i.jsx)(aZ, { children: es.intl.string(ea.default.qbCgI7) }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: a3.h_,
                        children: (0, i.jsx)(tK, { children: es.intl.string(ea.default["0oDeiM"]) }),
                    }),
                ],
            }),
            (0, i.jsx)(aW.Ip, {
                orientation: "horizontal",
                scrollbarGutter: !1,
                fade: !0,
                className: _()(a3.ag, a3.Zs),
                children: ep.Jb.map((e) => {
                    let { list: a, label: s } = e,
                        r = t[a][0];
                    return null != r ? (0, i.jsx)(a2, { game: r, label: es.intl.string(s) }, a) : null;
                }),
            }),
        ],
    });
}
function a7() {
    let e = (0, p.bG)([l.A], () => l.A.stats?.games),
        t = (0, p.bG)([l.A], () => (0, w.IH)(l.A.stats)),
        a = (0, p.bG)([l.A], () => l.A.globalStats?.games),
        s = !t && null != a;
    return (0, i.jsx)(tC, {
        children: (0, i.jsx)("div", {
            className: a3.kL,
            children: s ? (0, i.jsx)(a9, { gameStats: a }) : (0, i.jsx)(a8, { gameStats: e }),
        }),
    });
}
var se = a(167662);
function st(e) {
    let { messages: t } = e,
        a = Math.round(t?.numMessagesSent ?? 0),
        s = (0, w.bD)(t?.numMessagesSentPercentile);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: se.dJ,
                children: [
                    (0, i.jsx)(tz, { icon: e2.ChatIcon, children: es.intl.string(e3.default.wWKySP) }),
                    (0, i.jsx)(at, { value: a }),
                ],
            }),
            (0, i.jsx)(tK, {
                children:
                    null != s
                        ? es.intl.format(ea.default.TOMBAW, {
                              numMessages: a,
                              percent: s,
                              percentHook: (e, t) => (0, i.jsx)(t3, { children: e }, t),
                          })
                        : es.intl.format(ea.default.cYCqz8, { numMessages: a }),
            }),
        ],
    });
}
function sa(e) {
    let { numWordsSent: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: se.dJ,
                children: [
                    (0, i.jsx)(tz, { icon: e2.ChatIcon, children: es.intl.string(ea.default["2BuyVC"]) }),
                    (0, i.jsx)(ai, { value: t }),
                ],
            }),
            (0, i.jsx)(tK, {
                children: es.intl.format(ea.default.bAxEs2, {
                    numWords: (0, w.wj)(t),
                    numCopies: (0, w.wj)((0, w.yQ)(t)),
                }),
            }),
        ],
    });
}
function ss() {
    let e = (0, p.bG)([l.A], () => l.A.stats?.messages),
        t = (0, p.bG)([l.A], () => (0, w.nb)(l.A.stats)),
        a = (0, p.bG)([l.A], () => l.A.globalStats?.messages?.numWordsSent),
        s = !t && null != a;
    return (0, i.jsx)(tC, {
        children: (0, i.jsxs)("div", {
            className: se.kL,
            children: [
                (0, i.jsx)(z, {
                    animatedSrc:
                        "https://cdn.discordapp.com/assets/content/d2d8036bb6a32967893421f9956b9e8ed30abde474f68c1a34e824205549c5a1.png",
                    staticSrc:
                        "https://cdn.discordapp.com/assets/content/1dfd8684180df4216b23f0a61617250be8fcc12bc1970ac259892f34fbdb836d.png",
                    className: se.HW,
                }),
                (0, i.jsx)("div", {
                    className: se.C,
                    children: s ? (0, i.jsx)(sa, { numWordsSent: a }) : (0, i.jsx)(st, { messages: e }),
                }),
            ],
        }),
    });
}
var si = a(548118),
    sr = a(224865);
let sn = si.iu[si.Ay.Sizes.XLARGE];
function sc(e) {
    let { guild: t, size: a } = e;
    return null == t.icon && a < 48
        ? (0, i.jsx)("div", {
              className: _()(sr.K, sr.J),
              style: { width: a, height: a },
              "aria-hidden": !0,
              children: (0, i.jsx)(J.E, { variant: "body-md/medium", children: (0, w.oW)(t.name) }),
          })
        : (0, i.jsx)(si.Ay, {
              guild: t,
              size: si.Ay.Sizes.XLARGE,
              iconSize: a,
              textScale: a / sn,
              className: sr.K,
              style: { width: a, height: a, borderRadius: 0 },
          });
}
var sd = a(140645);
function sl(e) {
    let { numVoiceMinutes: t, numMessagesSent: a } = e;
    return (0, i.jsxs)("div", {
        className: sd.M1,
        children: [
            (0, i.jsxs)("div", {
                className: sd.dJ,
                children: [
                    (0, i.jsx)(e7.MicrophoneIcon, { size: "md", color: "currentColor" }),
                    (0, i.jsx)($, { variant: "mono-md/bold", className: sd.Qq, children: Math.round(t) }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: sd.dJ,
                children: [
                    (0, i.jsx)(e2.ChatIcon, { size: "md", color: "currentColor" }),
                    (0, i.jsx)($, { variant: "mono-md/bold", className: sd.Qq, children: Math.round(a) }),
                ],
            }),
        ],
    });
}
var so = a(972106);
let su = [];
function sh(e) {
    let { guild: t, rank: a, iconSize: s = 100, children: r } = e;
    return (0, i.jsxs)("div", {
        className: so.w_,
        children: [
            (0, i.jsxs)("div", {
                className: so.jj,
                children: [
                    (0, i.jsx)(aQ, { rank: a }),
                    (0, i.jsxs)("div", {
                        className: so.gI,
                        children: [
                            (0, i.jsx)($, {
                                variant: "heading-xxl/medium",
                                className: so.J5,
                                lineClamp: 1,
                                children: t.name,
                            }),
                            r,
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(sc, { guild: t, size: s }),
        ],
    });
}
function sf(e) {
    let { guild: t, numVoiceMinutes: a, numMessagesSent: s } = e;
    return (0, i.jsx)(sh, {
        guild: t,
        rank: 1,
        iconSize: 140,
        children: (0, i.jsx)(sl, { numVoiceMinutes: a, numMessagesSent: s }),
    });
}
function s_(e) {
    let { guilds: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: so.wx,
                children: [
                    (0, i.jsxs)("div", {
                        className: so.R_,
                        children: [
                            (0, i.jsx)(tz, { icon: e8.R, children: es.intl.string(ea.default.Mb5E6r) }),
                            (0, i.jsx)(aZ, { children: es.intl.string(e3.default.F0fkrh) }),
                        ],
                    }),
                    (0, i.jsx)(tK, { children: es.intl.string(ea.default.IN1DaS) }),
                ],
            }),
            (0, i.jsx)("div", {
                className: so.Pl,
                children: t.map((e, t) => {
                    let { guild: a, numMessagesSent: s, numVoiceMinutes: r } = e;
                    return 0 === t
                        ? (0, i.jsx)(sf, { guild: a, numMessagesSent: s ?? 0, numVoiceMinutes: r ?? 0 }, a.id)
                        : (0, i.jsx)(sh, { guild: a, rank: t + 1 }, a.id);
                }),
            }),
        ],
    });
}
function sb(e) {
    let { guilds: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: so.wx,
                children: [
                    (0, i.jsxs)("div", {
                        className: so.R_,
                        children: [
                            (0, i.jsx)(tj, { className: so.gi }),
                            (0, i.jsx)(aZ, { children: es.intl.string(e3.default.F0fkrh) }),
                        ],
                    }),
                    (0, i.jsx)(tK, { children: es.intl.string(ea.default.bhnqop) }),
                ],
            }),
            (0, i.jsx)("div", {
                className: so.Pl,
                children: t.map((e, t) => (0, i.jsx)(sh, { guild: e, rank: t + 1 }, e.id)),
            }),
        ],
    });
}
function sp() {
    let e = (0, p.bG)([l.A], () => l.A.stats?.guilds?.guilds ?? su),
        t = (0, p.bG)([l.A], () => l.A.globalStats?.guilds?.guildsByMembers),
        a = 0 === e.length && null != t;
    return (0, i.jsx)(tC, {
        children: (0, i.jsx)("div", {
            className: so.kL,
            children: a ? (0, i.jsx)(sb, { guilds: t }) : (0, i.jsx)(s_, { guilds: e }),
        }),
    });
}
var sx = a(155094);
function sm(e) {
    let { icon: t, title: a, description: s } = e;
    return (0, i.jsx)(tC, {
        children: (0, i.jsxs)("div", {
            className: sx.Q,
            children: [(0, i.jsx)(tz, { icon: t, children: a }), (0, i.jsx)(tK, { children: s })],
        }),
    });
}
var sg = a(7584),
    sA = a(33293),
    sv = a(498137),
    sw = a(192339),
    sI = a(144103),
    sE = a(834109),
    sj = a(48763);
function sN(e) {
    let { character: t, power: a } = e,
        s = (0, g.o)(t);
    return (0, i.jsxs)(sv.A, {
        cardColorPalette: s,
        size: sj.W.LG,
        children: [
            (0, i.jsx)(sw.A, {}),
            (0, i.jsx)(sE.A, { variant: "full" }),
            null != a
                ? (0, i.jsx)(sI.A, {
                      powerLevel: (0, tU.Le)(a.powerLevel),
                      powerLevelUnits: (0, tU.sX)(a.powerLevelPercentile),
                  })
                : null,
            (0, i.jsx)(sA.A, { character: t }),
        ],
    });
}
var sS = a(58410);
function sC() {
    let e = (0, p.bG)([l.A], () => l.A.stats),
        t = (0, p.bG)([l.A], () => l.A.character),
        a = e?.guilds?.guilds[0],
        s = e?.emojis?.emojis[0],
        r = e?.games?.games[0]?.game,
        n =
            null != r
                ? aO.Ay.getApplicationIconURL({ id: r.id, icon: r.iconHash, size: 40, fallbackAvatar: !1 })
                : void 0;
    return (0, i.jsx)(tC, {
        children: (0, i.jsxs)("div", {
            className: sS.z,
            children: [
                null != t ? (0, i.jsx)(sN, { character: t, power: e?.power }) : null,
                (0, i.jsxs)("div", {
                    className: sS.zH,
                    children: [
                        (0, i.jsxs)("div", {
                            className: sS.R_,
                            children: [
                                (0, i.jsx)(tz, { icon: ty.M, children: es.intl.string(e3.default.ir6nEQ) }),
                                (0, i.jsx)($, {
                                    variant: "display-lg",
                                    className: sS.Vy,
                                    children: es.intl.string(e3.default.y4M1na),
                                }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: sS.M1,
                            children: [
                                (0, i.jsx)(sT, {
                                    label: es.intl.string(ea.default.MSrV9z),
                                    value: e?.voice?.totalVoiceMinutes,
                                }),
                                (0, i.jsx)(sT, {
                                    label: es.intl.string(ea.default.hhh11L),
                                    value: e?.messages?.numMessagesSent,
                                }),
                                (0, i.jsx)(sT, {
                                    label: es.intl.string(ea.default["f5S+pt"]),
                                    value: a?.numDaysInteracted,
                                }),
                                (0, i.jsx)(sR, {
                                    label: es.intl.string(e3.default["8XPMJj"]),
                                    icon: null != a ? (0, i.jsx)(sc, { guild: a.guild, size: 40 }) : (0, i.jsx)(sO, {}),
                                    name: null != a ? a.guild.name : es.intl.string(ea.default.GultYJ),
                                }),
                                (0, i.jsx)(sT, {
                                    label: es.intl.string(ea.default.xVSlv3),
                                    value: e?.emojis?.numEmojisSent,
                                }),
                                (0, i.jsx)(sR, {
                                    label: es.intl.string(e3.default["3sARW7"]),
                                    icon:
                                        null != s
                                            ? (0, i.jsx)(t6.A, {
                                                  emojiId: s.id,
                                                  emojiName: null == s.id ? s.name : void 0,
                                                  animated: s.animated,
                                                  alt: "",
                                                  className: sS.Kk,
                                              })
                                            : (0, i.jsx)(sO, {}),
                                    name:
                                        null == s
                                            ? es.intl.string(es.t.PoWNfe)
                                            : null == s.id
                                              ? sg.Ay.convertSurrogateToName(s.name)
                                              : `:${s.name}:`,
                                }),
                                (0, i.jsx)(sT, {
                                    label: es.intl.string(ea.default.y2Y1DD),
                                    value: e?.games?.totalDaysPlayed,
                                }),
                                (0, i.jsx)(sR, {
                                    label: es.intl.string(e3.default.RbT4Zq),
                                    icon:
                                        null != n
                                            ? (0, i.jsx)("img", { src: n, alt: "", className: _()(sS.Kk, sS.Gt) })
                                            : (0, i.jsx)(sO, {}),
                                    name: null != r ? r.name : es.intl.string(es.t.PoWNfe),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function sT(e) {
    let { label: t, value: a } = e;
    return (0, i.jsxs)("div", {
        className: sS.dJ,
        children: [
            (0, i.jsx)($, { variant: "heading-md/semibold", children: t }),
            (0, i.jsx)($, {
                variant: "heading-xxl/medium",
                className: sS.wk,
                children: Math.round(a ?? 0).toLocaleString(es.intl.currentLocale),
            }),
        ],
    });
}
function sR(e) {
    let { label: t, icon: a, name: s } = e;
    return (0, i.jsxs)("div", {
        className: _()(sS.dJ, sS.u4),
        children: [
            (0, i.jsx)($, { variant: "heading-md/semibold", children: t }),
            (0, i.jsxs)("div", {
                className: sS.AS,
                children: [
                    a,
                    (0, i.jsx)($, { variant: "heading-xl/medium", lineClamp: 1, className: sS.TJ, children: s }),
                ],
            }),
        ],
    });
}
function sO() {
    return (0, i.jsx)("div", {
        className: _()(sS.Kk, sS.Gc),
        children: (0, i.jsx)(aq._, { size: "md", color: "currentColor" }),
    });
}
var sM = a(651946);
function sy() {
    let e = (0, p.bG)([l.A], () => l.A.stats?.guilds?.guilds[0]),
        t = Math.round(e?.numDaysInteracted ?? 0),
        a = (0, w.bD)(e?.numDaysInteractedPercentile);
    return (0, i.jsx)(tC, {
        children: (0, i.jsxs)("div", {
            className: sM.kL,
            children: [
                (0, i.jsxs)("div", {
                    className: sM.wx,
                    children: [
                        (0, i.jsxs)("div", {
                            className: sM.R_,
                            children: [
                                (0, i.jsx)(tz, { icon: e8.R, children: es.intl.string(ea.default["M+a+t1"]) }),
                                (0, i.jsx)(at, { value: t }),
                            ],
                        }),
                        (0, i.jsx)(tK, {
                            children:
                                null != a
                                    ? es.intl.format(ea.default.sIDTV1, {
                                          numDays: t,
                                          percent: a,
                                          percentHook: (e, t) => (0, i.jsx)(t3, { children: e }, t),
                                      })
                                    : es.intl.format(ea.default.nLCUQ4, { numDays: t }),
                        }),
                    ],
                }),
                null != e &&
                    (0, i.jsx)("div", {
                        className: sM.bU,
                        children: (0, i.jsxs)("div", {
                            className: sM.Nr,
                            style: { width: 360 },
                            children: [
                                (0, i.jsx)(sc, { guild: e.guild, size: 360 }),
                                (0, i.jsxs)("div", {
                                    className: sM.zH,
                                    children: [
                                        (0, i.jsx)($, {
                                            variant: "heading-xxl/medium",
                                            className: sM.J5,
                                            lineClamp: 1,
                                            children: e.guild.name,
                                        }),
                                        (0, i.jsx)(sl, {
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
var sL = a(270704);
function sD(e) {
    let { voice: t } = e,
        a = Math.round(t?.totalVoiceMinutes ?? 0),
        s = (0, w.bD)(t?.totalVoiceMinutesPercentile);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: sL.dJ,
                children: [
                    (0, i.jsx)(tz, { icon: e7.MicrophoneIcon, children: es.intl.string(ea.default["3/T12E"]) }),
                    (0, i.jsx)(at, { value: a, alignment: "center" }),
                ],
            }),
            (0, i.jsx)(tK, {
                children:
                    null != s
                        ? es.intl.format(ea.default.RqXsIs, {
                              numMinutes: a,
                              percent: s,
                              percentHook: (e, t) => (0, i.jsx)(t3, { children: e }, t),
                          })
                        : es.intl.format(ea.default.Y3poDW, { numMinutes: a }),
            }),
        ],
    });
}
function sk(e) {
    let { peakHour: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: sL.dJ,
                children: [
                    (0, i.jsx)(tz, { icon: e7.MicrophoneIcon, children: es.intl.string(ea.default.ZCwB8J) }),
                    (0, i.jsx)(ai, { value: t }),
                ],
            }),
            (0, i.jsx)(tK, { children: es.intl.string(ea.default.huiTne) }),
        ],
    });
}
function sP() {
    let e = (0, p.bG)([l.A], () => l.A.stats?.voice),
        t = (0, p.bG)([l.A], () => (0, w.Kr)(l.A.stats)),
        a = (0, p.bG)([l.A], () => l.A.globalStats?.voice?.peakHourUtc),
        s = (0, w.XF)(a)?.value,
        r = !t && null != s;
    return (0, i.jsxs)(tC, {
        children: [
            (0, i.jsx)(z, {
                animatedSrc:
                    "https://cdn.discordapp.com/assets/content/04746dc04eab575d0168935af2b1b3f97e2e00439f84bd0f0474276e0c5a81dc.png",
                staticSrc:
                    "https://cdn.discordapp.com/assets/content/c4c2d6b631bff3da4e4bb9afffc8f89bc9fb6f76a2fcd824f8a7af83eb7f1e6b.png",
                className: sL.Tp,
            }),
            (0, i.jsx)("div", {
                className: sL.Qs,
                children: r ? (0, i.jsx)(sk, { peakHour: s }) : (0, i.jsx)(sD, { voice: e }),
            }),
        ],
    });
}
function sG(e) {
    let { route: t, onNextStep: a, onPreviousStep: s } = e;
    if (t === v.gr.HOME) return (0, i.jsx)(t5, { onStart: a });
    if (t === v.gr.INTRODUCTION) return (0, i.jsx)(tR, {});
    let { statsScreen: r } = (0, v.UG)(t);
    switch (r) {
        case v.oI.VOICE_INTRO:
            return (0, i.jsx)(sm, {
                icon: e7.MicrophoneIcon,
                title: es.intl.string(ea.default["/7XYsa"]),
                description: es.intl.string(ea.default["X8/G/o"]),
            });
        case v.oI.VOICE:
            return (0, i.jsx)(sP, {});
        case v.oI.MESSAGES_INTRO:
            return (0, i.jsx)(sm, {
                icon: e2.ChatIcon,
                title: es.intl.string(ea.default["2BuyVC"]),
                description: es.intl.string(ea.default["kF+Y3a"]),
            });
        case v.oI.MESSAGES:
            return (0, i.jsx)(ss, {});
        case v.oI.SERVERS_INTRO:
            return (0, i.jsx)(sm, {
                icon: e8.R,
                title: es.intl.string(e3.default.F0fkrh),
                description: es.intl.string(ea.default.Xg82Gy),
            });
        case v.oI.SERVERS:
            return (0, i.jsx)(sp, {});
        case v.oI.TOP_SERVER:
            return (0, i.jsx)(sy, {});
        case v.oI.EMOJI_INTRO:
            return (0, i.jsx)(sm, {
                icon: X.o,
                title: es.intl.string(ea.default.ZTDCIv),
                description: es.intl.string(ea.default.y8Sr8J),
            });
        case v.oI.EMOJI:
            return (0, i.jsx)(aw, {});
        case v.oI.GAMES_INTRO:
            return (0, i.jsx)(sm, {
                icon: e5.GameControllerIcon,
                title: es.intl.string(ea.default.HM2fjf),
                description: es.intl.string(ea.default.LQiFqJ),
            });
        case v.oI.GAMES:
            return (0, i.jsx)(a7, {});
        case v.oI.GAME_TIME:
            return (0, i.jsx)(aV, {});
        case v.oI.SQUAD:
        case v.oI.SIDEKICK:
            return (0, i.jsx)(aG, { route: t, onNextStep: a, onPreviousStep: s });
        case v.oI.SUMMARY:
            return (0, i.jsx)(sC, {});
        case v.oI.SHARE:
            return (0, i.jsx)(tY, {});
        default:
            return null;
    }
}
var sH = a(650809),
    sU = a(866665),
    sF = a(428692);
let sK = {
    [v.s9.FACE]: { icon: e7.MicrophoneIcon, label: es.t.K3lovD },
    [v.s9.OUTFIT]: { icon: e2.ChatIcon, label: es.t.OIgYlQ },
    [v.s9.HEADWEAR]: { icon: e8.R, label: es.t["7hB4kg"] },
    [v.s9.SHOES]: { icon: X.o, label: es.t.sMOuuS },
    [v.s9.WEARABLE]: { icon: e5.GameControllerIcon, label: es.t.URyqtP },
    [v.s9.AURA]: { icon: e0.CalendarIcon, label: ea.default.y2Y1DD },
    [v.s9.ASSEMBLED]: { icon: aj.$, label: es.t.TdEu5X },
    [v.s9.FINALIZE]: { icon: sH.PaintPaletteIcon, label: ea.default.gmMD2I },
    [v.s9.SUMMARY]: { icon: ty.M, label: e3.default.y4M1na },
};
function sB(e) {
    let {
            step: { icon: t, label: a, route: s },
            disabled: r,
            onRouteClick: n,
        } = e,
        c = es.intl.string(a);
    return (0, i.jsx)(sU.m, {
        text: c,
        ariaHidden: !0,
        children: (0, i.jsxs)(aN.D, {
            className: _()(sF.PM, sF.CD, { [sF.vk]: !r }),
            onClick: () => n(s),
            "aria-label": c,
            "aria-disabled": r,
            children: [
                (0, i.jsx)("div", { className: _()(sF.Om, sF.hZ) }),
                (0, i.jsx)(t, { size: "xs", color: "currentColor", className: sF.RQ }),
            ],
        }),
    });
}
function sz(e) {
    let { flow: t, stats: a, activeRoute: s, isRouteBlocked: r, onRouteClick: n } = e,
        c = (function (e, t) {
            let a = [];
            for (let s of S({ flow: e, stats: t })) {
                let { characterStage: e } = (0, v.UG)(s),
                    t = sK[e];
                null != t && a.at(-1)?.stage !== e && a.push({ ...t, stage: e, route: s });
            }
            return a;
        })(t, a),
        { characterStage: d } = (0, v.UG)(s),
        o = c.findIndex((e) => {
            let { stage: t } = e;
            return t === d;
        }),
        [u, f] = h.useState(o);
    o > u && f(o);
    let _ = (0, p.bG)([l.A], () => l.A.isSaving);
    return -1 === o
        ? null
        : (0, i.jsx)("div", {
              className: sF.qB,
              role: "group",
              "aria-label": es.intl.formatToPlainString(ea.default.iyTfFt, { stepNumber: o + 1, stepCount: c.length }),
              children: c.map((e, t) => {
                  let { icon: a } = e;
                  return t === o
                      ? (0, i.jsx)(
                            sU.m,
                            {
                                text: es.intl.string(e.label),
                                children: (0, i.jsx)("div", {
                                    className: sF.PM,
                                    children: (0, i.jsx)(a, { size: "xs", color: "currentColor" }),
                                }),
                            },
                            e.stage,
                        )
                      : t <= u
                        ? (0, i.jsx)(sB, { step: e, disabled: _ || r, onRouteClick: n }, e.stage)
                        : (0, i.jsx)(
                              "div",
                              { className: sF.PM, children: (0, i.jsx)("div", { className: sF.Om }) },
                              e.stage,
                          );
              }),
          });
}
var sV = a(125688),
    sW = a(531685),
    sY = a(399667),
    sZ = a(468311),
    sq = a(706121),
    sX = a(985747),
    sJ = a(118531);
let sQ = {
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
function s$(e) {
    return { name: e, url: sQ[e].url };
}
let s0 = s$("tex_none"),
    s1 = {
        [sX.N.NONE]: 0,
        [sX.N.CAP]: 7,
        [sX.N.ELVEN_HEADPIECE]: 1,
        [sX.N.HEADPHONES]: 2,
        [sX.N.TEDDY_BEANIE]: 13,
        [sX.N.PIERCINGS]: 4,
        [sX.N.HEADBAND]: 5,
        [sX.N.SUNGLASSES]: 6,
        [sX.N.BANANA_PEEL]: 3,
        [sX.N.LEAF]: 8,
        [sX.N.FIRE]: 9,
        [sX.N.HALO]: 10,
        [sX.N.BRAIN]: 11,
        [sX.N.TRAFFIC_CONE]: 12,
        [sX.N.CROWN]: 14,
    },
    s5 = {
        [sJ.Z.NONE]: 0,
        [sJ.Z.ANGEL_WINGS]: 3,
        [sJ.Z.STICKERS]: 1,
        [sJ.Z.TOTE]: 2,
        [sJ.Z.WIZARD_STAFF]: 8,
        [sJ.Z.SKATEBOARD]: 4,
        [sJ.Z.DRAGON_WINGS]: 5,
        [sJ.Z.TAKE_OUT_BAG]: 6,
        [sJ.Z.PIXEL_WRENCH]: 7,
        [sJ.Z.MECH_WINGS]: 9,
        [sJ.Z.SWORD]: 10,
        [sJ.Z.DEVIANT_TAIL]: 11,
        [sJ.Z.MAGICAL_STAFF]: 12,
        [sJ.Z.BUTTERFLY_WINGS]: 13,
        [sJ.Z.CAT_BACKPACK]: 14,
    },
    s6 = {
        [sZ.X.NONE]: s0,
        [sZ.X.BLAZE]: s$("tex_aura_04_blaze"),
        [sZ.X.BLOSSOM]: s$("tex_aura_01_blossom"),
        [sZ.X.PRISM]: s$("tex_aura_02_prism"),
        [sZ.X.SHOCK]: s$("tex_aura_03_shock"),
        [sZ.X.FATED]: s$("tex_aura_05_fated"),
        [sZ.X.LUSTER]: s$("tex_aura_06_luster"),
        [sZ.X.BUBBLES]: s$("tex_aura_07_bubbly"),
        [sZ.X.SPOOKY]: s$("tex_aura_08_spooky"),
        [sZ.X.CURSED]: s$("tex_aura_09_cursed"),
        [sZ.X.MAGNETIC]: s$("tex_aura_10_magnetic"),
        [sZ.X.RADIOACTIVE]: s$("tex_aura_11_radioactive"),
        [sZ.X.ELEMENTAL]: s$("tex_aura_12_elemental"),
        [sZ.X.SHIMMER]: s$("tex_aura_13_shimmer"),
        [sZ.X.WITCHY]: s$("tex_aura_14_witchy"),
    },
    s2 = {
        [sq.R.ICY]: s$("tex_base_01_icy"),
        [sq.R.CRIMSON]: s$("tex_base_02_crimson"),
        [sq.R.CHROME]: s$("tex_base_03_chrome"),
        [sq.R.GALACTIC]: s$("tex_base_04_galactic"),
        [sq.R.FOREST]: s$("tex_base_05_forrest"),
        [sq.R.MIDNIGHT]: s$("tex_base_06_mighnight"),
        [sq.R.GLACIER]: s$("tex_base_07_glacier"),
        [sq.R.ORANGE]: s$("tex_base_08_orange"),
        [sq.R.PURPLE]: s$("tex_base_09_pink"),
        [sq.R.RED]: s$("tex_base_10_red"),
        [sq.R.COBALT]: s$("tex_base_11_cobalt"),
        [sq.R.X_RAY]: s$("tex_base_12_x-ray"),
        [sq.R.LIQUID]: s$("tex_base_13_liquid"),
        [sq.R.BUTTER]: s$("tex_base_14_butter"),
        [sq.R.IRIDESCENT]: s$("tex_base_15_iridescent"),
    },
    s3 = {
        [eM.r.NONE]: null,
        [eM.r.BADDIE_DEFAULT]: { riveId: 1, texture: s$("tex_outfit_01_baddie") },
        [eM.r.TRAVELER_DEFAULT]: { riveId: 10, texture: s$("tex_outfit_10_traveler") },
        [eM.r.STREAMER_DEFAULT]: { riveId: 3, texture: s$("tex_outfit_03_streamer") },
        [eM.r.CAMPER_DEFAULT]: { riveId: 4, texture: s$("tex_outfit_04_camper") },
        [eM.r.ATHLETE_DEFAULT]: { riveId: 5, texture: s$("tex_outfit_05_athlete") },
        [eM.r.COWPOKE_DEFAULT]: { riveId: 6, texture: s$("tex_outfit_06_cowpoke") },
        [eM.r.GOTH_DEFAULT]: { riveId: 7, texture: s$("tex_outfit_07_goth") },
        [eM.r.ASTRONAUT_DEFAULT]: { riveId: 8, texture: s$("tex_outfit_08_astronaut") },
        [eM.r.JESTER_DEFAULT]: { riveId: 9, texture: s$("tex_outfit_09_jester") },
        [eM.r.TRASH_CAN_DEFAULT]: { riveId: 2, texture: s$("tex_outfit_02_trash") },
        [eM.r.MAGE_DEFAULT]: { riveId: 11, texture: s$("tex_outfit_11_mage") },
        [eM.r.MECH_DEFAULT]: { riveId: 12, texture: s$("tex_outfit_12_mech") },
        [eM.r.KNIGHT_DEFAULT]: { riveId: 13, texture: s$("tex_outfit_13_knight") },
        [eM.r.MAGICAL_DEFAULT]: { riveId: 14, texture: s$("tex_outfit_14_magical") },
        [eM.r.BADDIE_MONOCHROME]: { riveId: 1, texture: s$("tex_outfit_01_baddie_monochrome") },
        [eM.r.BADDIE_VIOLET]: { riveId: 1, texture: s$("tex_outfit_01_baddie_violet") },
        [eM.r.BADDIE_PASTEL]: { riveId: 1, texture: s$("tex_outfit_01_baddie_pastel") },
        [eM.r.BADDIE_SUNSET]: { riveId: 1, texture: s$("tex_outfit_01_baddie_sunset") },
        [eM.r.TRAVELER_HAZE]: { riveId: 10, texture: s$("tex_outfit_10_traveler_haze") },
        [eM.r.TRAVELER_MOSS]: { riveId: 10, texture: s$("tex_outfit_10_traveler_moss") },
        [eM.r.TRAVELER_CHRONO]: { riveId: 10, texture: s$("tex_outfit_10_traveler_chrono") },
        [eM.r.TRAVELER_UMBER]: { riveId: 10, texture: s$("tex_outfit_10_traveler_umber") },
        [eM.r.STREAMER_FLAMES]: { riveId: 3, texture: s$("tex_outfit_03_streamer_flames") },
        [eM.r.STREAMER_STRIPES]: { riveId: 3, texture: s$("tex_outfit_03_streamer_stripes") },
        [eM.r.STREAMER_SMILEY]: { riveId: 3, texture: s$("tex_outfit_03_streamer_smiley") },
        [eM.r.STREAMER_VINTAGE]: { riveId: 3, texture: s$("tex_outfit_03_streamer_vintage") },
        [eM.r.CAMPER_PLAID]: { riveId: 4, texture: s$("tex_outfit_04_camper_plaid") },
        [eM.r.CAMPER_SWAMP]: { riveId: 4, texture: s$("tex_outfit_04_camper_swamp") },
        [eM.r.CAMPER_GLAMP]: { riveId: 4, texture: s$("tex_outfit_04_camper_glamp") },
        [eM.r.CAMPER_AMBER]: { riveId: 4, texture: s$("tex_outfit_04_camper_amber") },
        [eM.r.ATHLETE_BLOCKED]: { riveId: 5, texture: s$("tex_outfit_05_athlete_blocked") },
        [eM.r.ATHLETE_FADED]: { riveId: 5, texture: s$("tex_outfit_05_athlete_faded") },
        [eM.r.ATHLETE_CHECKERED]: { riveId: 5, texture: s$("tex_outfit_05_athlete_checkered") },
        [eM.r.ATHLETE_LINED]: { riveId: 5, texture: s$("tex_outfit_05_athlete_lined") },
        [eM.r.COWPOKE_ONYX]: { riveId: 6, texture: s$("tex_outfit_06_cowpoke_onyx") },
        [eM.r.COWPOKE_STEEL]: { riveId: 6, texture: s$("tex_outfit_06_cowpoke_steel") },
        [eM.r.COWPOKE_DENIM]: { riveId: 6, texture: s$("tex_outfit_06_cowpoke_denim") },
        [eM.r.COWPOKE_BLUSH]: { riveId: 6, texture: s$("tex_outfit_06_cowpoke_blush") },
        [eM.r.GOTH_SIREN]: { riveId: 7, texture: s$("tex_outfit_07_goth_siren") },
        [eM.r.GOTH_SERPENT]: { riveId: 7, texture: s$("tex_outfit_07_goth_serpent") },
        [eM.r.GOTH_RAVEN]: { riveId: 7, texture: s$("tex_outfit_07_goth_raven") },
        [eM.r.GOTH_VAMP]: { riveId: 7, texture: s$("tex_outfit_07_goth_vamp") },
        [eM.r.ASTRONAUT_STARDUST]: { riveId: 8, texture: s$("tex_outfit_08_astronaut_stardust") },
        [eM.r.ASTRONAUT_MARTIAN]: { riveId: 8, texture: s$("tex_outfit_08_astronaut_martian") },
        [eM.r.ASTRONAUT_SOLAR]: { riveId: 8, texture: s$("tex_outfit_08_astronaut_solar") },
        [eM.r.ASTRONAUT_COSMIC]: { riveId: 8, texture: s$("tex_outfit_08_astronaut_cosmic") },
        [eM.r.JESTER_CONFETTI]: { riveId: 9, texture: s$("tex_outfit_09_jester_confetti") },
        [eM.r.JESTER_CARNIVAL]: { riveId: 9, texture: s$("tex_outfit_09_jester_carnival") },
        [eM.r.JESTER_SUNRISE]: { riveId: 9, texture: s$("tex_outfit_09_jester_sunrise") },
        [eM.r.JESTER_NIGHTFALL]: { riveId: 9, texture: s$("tex_outfit_09_jester_nightfall") },
        [eM.r.TRASH_CAN_BLACKOUT]: { riveId: 2, texture: s$("tex_outfit_02_trash_blackout") },
        [eM.r.TRASH_CAN_CAUTION]: { riveId: 2, texture: s$("tex_outfit_02_trash_caution") },
        [eM.r.TRASH_CAN_BUBBLEGUM]: { riveId: 2, texture: s$("tex_outfit_02_trash_bubblegum") },
        [eM.r.TRASH_CAN_TOXIC]: { riveId: 2, texture: s$("tex_outfit_02_trash_toxic") },
        [eM.r.MAGE_SHADOW]: { riveId: 11, texture: s$("tex_outfit_11_mage_shadow") },
        [eM.r.MAGE_DUSK]: { riveId: 11, texture: s$("tex_outfit_11_mage_dusk") },
        [eM.r.MAGE_WILDWOOD]: { riveId: 11, texture: s$("tex_outfit_11_mage_wildwood") },
        [eM.r.MAGE_WINTER]: { riveId: 11, texture: s$("tex_outfit_11_mage_winter") },
        [eM.r.MECH_AERO]: { riveId: 12, texture: s$("tex_outfit_12_mech_aero") },
        [eM.r.MECH_VIPER]: { riveId: 12, texture: s$("tex_outfit_12_mech_viper") },
        [eM.r.MECH_ULTRAVIOLET]: { riveId: 12, texture: s$("tex_outfit_12_mech_ultraviolet") },
        [eM.r.MECH_SANDSTORM]: { riveId: 12, texture: s$("tex_outfit_12_mech_sandstorm") },
        [eM.r.KNIGHT_IRON]: { riveId: 13, texture: s$("tex_outfit_13_knight_iron") },
        [eM.r.KNIGHT_RUST]: { riveId: 13, texture: s$("tex_outfit_13_knight_rust") },
        [eM.r.KNIGHT_PETAL]: { riveId: 13, texture: s$("tex_outfit_13_knight_petal") },
        [eM.r.KNIGHT_GLACIER]: { riveId: 13, texture: s$("tex_outfit_13_knight_glacier") },
        [eM.r.MAGICAL_SAPPHIRE]: { riveId: 14, texture: s$("tex_outfit_14_magical_sapphire") },
        [eM.r.MAGICAL_AMETHYST]: { riveId: 14, texture: s$("tex_outfit_14_magical_amethyst") },
        [eM.r.MAGICAL_FROST]: { riveId: 14, texture: s$("tex_outfit_14_magical_frost") },
        [eM.r.MAGICAL_CITRINE]: { riveId: 14, texture: s$("tex_outfit_14_magical_citrine") },
    };
var s4 = (((s = {}).SLOT = "slot"), (s.TRAIT = "trait"), (s.LAYOUT = "layout"), (s.ALWAYS = "always"), s);
let s8 = /^tex_(aura|base_\d+|outfit)_/,
    s9 = /^tex_(headwear|shoes|wearable|face)_(\d+)_/,
    s7 = /^tex_face_([a-z]+)_/i,
    ie = {
        tex_env_labNight_bg: ["Desktop"],
        tex_env_labNight_bg_mobileLandscape: ["MobileLandscape"],
        tex_env_labNight_bg_mobilePortrait: ["MobilePortrait"],
        tex_env_labNight_fgLeft: ["Desktop"],
        tex_env_labNight_fgRight: ["Desktop"],
        tex_env_labNight_mgBottom: ["Desktop"],
        tex_env_labNight_mgBottomMobile: ["MobilePortrait", "MobileLandscape"],
        tex_env_labNight_sky: ["Desktop"],
    },
    it = {
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
    ia = { columns: 1, rows: 1 },
    is = { columns: 5, rows: 5 },
    ii = { columns: 6, rows: 8 },
    ir = {
        tex_aura_01_blossom: is,
        tex_aura_02_prism: is,
        tex_aura_03_shock: is,
        tex_aura_04_blaze: is,
        tex_aura_05_fated: is,
        tex_aura_06_luster: is,
        tex_aura_07_bubbly: is,
        tex_aura_08_spooky: is,
        tex_aura_09_cursed: is,
        tex_aura_10_magnetic: is,
        tex_aura_11_radioactive: is,
        tex_aura_12_elemental: is,
        tex_aura_13_shimmer: is,
        tex_aura_14_witchy: is,
        tex_wireframe_spritesheet: { columns: 12, rows: 6 },
        tex_wearable_10_sword_spritesheet: { columns: 5, rows: 4 },
        tex_wearable_11_deviantTail_smoke_active_spritesheet: ii,
        tex_wearable_11_deviantTail_smoke_idle_spritesheet: ii,
    },
    ic = [1, 1.25, 1.5, 1.75, 2, 3],
    id = Math.max(...ic);
function il(e, t) {
    let { url: a, width: s, height: i, widthAt1x: r } = sQ[e];
    if (null == r) return a;
    let n = (t * r) / s;
    if (n >= 1) return a;
    let { columns: c, rows: d } = ir[e] ?? ia,
        l = c * Math.round((s / c) * n),
        o = d * Math.round((i / d) * n);
    return `${a}?width=${l}&height=${o}`;
}
let io = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14"],
    iu = {
        [v.s9.IDLE]: 0,
        [v.s9.INTRODUCTION]: 1,
        [v.s9.FACE]: 2,
        [v.s9.OUTFIT]: 3,
        [v.s9.HEADWEAR]: 4,
        [v.s9.SHOES]: 5,
        [v.s9.WEARABLE]: 6,
        [v.s9.AURA]: 7,
        [v.s9.ASSEMBLED]: 8,
        [v.s9.FINALIZE]: 8,
        [v.s9.SUMMARY]: 8,
    },
    ih = {
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
    i_ = { ...ih.MobilePortrait, gradientTopPosition: 55, gradientBottomPosition: 90 };
var ib = a(574381);
let ip = new Set([1]),
    ix = Object.keys(sQ).map((e) => ({
        name: e,
        role: (function (e) {
            if (s8.test(e)) return { type: "slot" };
            let t = ie[e];
            if (null != t) return { type: "layout", layouts: t };
            let a = s9.exec(e);
            if (null != a) return { type: "trait", path: `${a[1]}ID`, riveId: Number(a[2]) };
            let s = s7.exec(e),
                i = null != s ? it[s[1].toLowerCase()] : void 0;
            return null != i ? { type: "trait", path: "faceID", riveId: i } : { type: "always" };
        })(e),
        swapKey: (0, ib.un)() ? `${e}-${sQ[e].riveId}` : e,
    }));
function im(e) {
    let { faceID: t, headwearID: a, shoesID: s, wearableID: i, chapterID: r, device: n } = e;
    return h.useMemo(() => {
        var e;
        let c;
        return (
            (e = { faceID: t, headwearID: a, shoesID: s, wearableID: i }),
            (c = new Set()),
            ix.forEach((t) => {
                let { name: a, role: s } = t;
                switch (s.type) {
                    case s4.SLOT:
                        break;
                    case s4.TRAIT:
                        e[s.path] === s.riveId && c.add(a);
                        break;
                    case s4.LAYOUT:
                        s.layouts.includes(n) && c.add(a);
                        break;
                    case s4.ALWAYS:
                        ("tex_wireframe_spritesheet" !== a || ip.has(r)) && c.add(a);
                }
            }),
            c
        );
    }, [t, a, s, i, r, n]);
}
async function ig(e) {
    let { textureManager: t, shownUrls: a, referencedAssets: s, isStale: i } = e,
        r = new Map();
    if (
        (Object.entries(s).forEach((e) => {
            let [t, { source: s }] = e;
            a.get(t) !== s.uri && r.set(t, s.uri);
        }),
        0 === r.size)
    )
        return;
    let n = new Map();
    if (
        (await Promise.all(
            Array.from(new Set(r.values()), async (e) => {
                let a = await t.load(e);
                null != a && n.set(e, a);
            }),
        ),
        !i())
    ) {
        let e = new Map();
        (r.forEach((t, s) => {
            let i = n.get(t);
            null != i && (e.set(s, i), a.set(s, t));
        }),
            t.swap(e));
    }
    t.release(Array.from(n.values()));
}
var iA = a(971940);
async function iv(e) {
    try {
        let t = await fetch(e);
        if (!t.ok) return null;
        return await (0, iA.decodeImage)(new Uint8Array(await t.arrayBuffer()));
    } catch {
        return null;
    }
}
var iw = a(168862);
function iI(e) {
    let { stage: t, isHidden: a } = e,
        s = (0, p.bG)([sW.A], () => {
            var e, t;
            let a,
                s = sW.A.windowSize();
            return (
                (e = s.width),
                (t = s.height),
                (a = Math.max(e / 960, t / 540) * (0, ej.A)()),
                ic.find((e) => e >= a) ?? id
            );
        }),
        [r, n] = h.useState(s);
    s > r && n(s);
    let c = (0, p.bG)([l.A], () => l.A.selectedCharacterTraits),
        d = (0, p.bG)([P.Ay], () => P.Ay.useReducedMotion),
        o = h.useMemo(
            () =>
                (function (e) {
                    let { stage: t, traits: a, layout: s, mobileLift: i = 0, textureScale: r } = e,
                        { base: n, shoes: c, outfit: d, face: l, hat: o, wearable: u, aura: h } = (0, O.XI)(a),
                        f = s3[d],
                        _ = {};
                    return (
                        io.forEach((e) => {
                            let t = Number(e) === f?.riveId ? f.texture : s0;
                            _[`outfit${e}Image`] = il(t.name, r);
                        }),
                        {
                            device: s,
                            mobileLift: i,
                            chapterID: iu[t],
                            faceID: l,
                            shoesID: c,
                            headwearID: s1[o],
                            wearableID: s5[u],
                            outfitID: f?.riveId ?? 0,
                            auraImage: il(s6[h].name, r),
                            baseColorImage: il(s2[n].name, r),
                            ...("MobilePortrait" === s && t === v.s9.INTRODUCTION ? i_ : ih[s]),
                            ..._,
                        }
                    );
                })({ stage: t, traits: c, layout: "Desktop", textureScale: r }),
            [t, c, r],
        ),
        [u, f] = h.useState(null),
        b = u ?? o,
        x = (function (e) {
            let { visibleDataBinding: t, requestedDataBinding: a, textureScale: s } = e,
                i = (function (e) {
                    let { visibleTextureNames: t, requestedTextureNames: a } = e,
                        [s, i] = h.useState(t),
                        [r, n] = h.useState(t);
                    if (t !== r) {
                        n(t);
                        let e = new Set(s);
                        (t.forEach((t) => e.add(t)), i(e));
                    }
                    return (
                        h.useEffect(() => {
                            let e = setTimeout(() => i(t), 600);
                            return () => clearTimeout(e);
                        }, [t]),
                        h.useMemo(() => new Set([...s, ...a]), [s, a])
                    );
                })({ visibleTextureNames: im(t), requestedTextureNames: im(a) });
            return h.useMemo(() => {
                let e;
                return (
                    (e = {}),
                    ix.forEach((t) => {
                        let { name: a, swapKey: r } = t,
                            n = i.has(a) ? il(a, s) : s0.url;
                        e[r] = { source: { uri: n } };
                    }),
                    e
                );
            }, [i, s]);
        })({ visibleDataBinding: b, requestedDataBinding: o, textureScale: r }),
        {
            assetLoader: m,
            onLoad: g,
            textureManager: A,
        } = (function () {
            let e = h.useRef(new Map()),
                [t, a] = h.useState(null),
                s = h.useCallback((t) => !!t.isImage && t.name in sQ && (e.current.set(t.name, t), !0), []);
            return {
                assetLoader: s,
                onLoad: h.useCallback(() => {
                    (a(e.current), (e.current = new Map()));
                }, []),
                textureManager: h.useMemo(
                    () =>
                        null == t
                            ? null
                            : {
                                  load: iv,
                                  swap: (e) => e.forEach((e, a) => t.get(a)?.setRenderImage(e)),
                                  release: (e) => e.forEach((e) => e.unref()),
                              },
                    [t],
                ),
            };
        })(),
        w = h.useRef(null),
        I = h.useRef(a);
    h.useEffect(() => {
        ((I.current = a), a ? w.current?.pause() : w.current?.play());
    }, [a]);
    let E = h.useCallback(() => {
        (g(), I.current && w.current?.pause());
    }, [g]);
    (function (e) {
        let { textureManager: t, referencedAssets: a, initialReferencedAssets: s } = e,
            i = h.useRef(new Map()),
            [r, n] = h.useState(s);
        return (
            h.useEffect(() => {
                i.current = new Map(
                    Object.entries(s ?? {}).map((e) => {
                        let [t, { source: a }] = e;
                        return [t, a.uri];
                    }),
                );
            }, [t, s]),
            h.useEffect(() => {
                if (null == t) return;
                let e = !1;
                return (
                    (async () => {
                        (await ig({ textureManager: t, shownUrls: i.current, referencedAssets: a, isStale: () => e }),
                            e || n(a));
                    })(),
                    () => {
                        e = !0;
                    }
                );
            }, [t, a]),
            r === a
        );
    })({ textureManager: A, referencedAssets: x }) &&
        u !== o &&
        f(o);
    let j = h.useMemo(() => ({ ...b, reducedMotion: d }), [b, d]);
    return (0, i.jsx)("div", {
        role: "img",
        "aria-label": (0, sY.O)(c),
        className: _()(iw.dw, { [iw.RK]: null != u }),
        children: (0, i.jsx)(sV.W, {
            artboard: "AB_Master",
            stateMachine: "SM_Master",
            fit: "layout",
            alignment: "center",
            ref: w,
            assetLoader: m,
            onLoad: E,
            listenOnDocumentBody: !d,
            withReducedMotion: "play",
            dataBinding: j,
            className: iw.lW,
        }),
    });
}
var iE = a(517782);
function ij(e) {
    let t,
        a,
        { didPlayerShareDataWithDiscord: s, onClose: r } = e;
    ((0, p.bG)([l.A], () => l.A.fetchState),
        (t = (0, p.bG)([l.A], () => l.A.stats?.games?.games)),
        (a = (0, h.useMemo)(
            () =>
                t?.map((e) => {
                    let { game: t } = e;
                    return t.id;
                }) ?? [],
            [t],
        )),
        (0, h.useEffect)(() => {
            let { fetchState: e } = l.A;
            (e === l.T.INIT || e === l.T.ERROR) && (0, d.nX)();
        }, []),
        (0, h.useEffect)(() => {
            (0, L.E)(a);
        }, [a]));
    let n = s ? v.Np.SHARED_DATA : v.Np.NO_SHARED_DATA,
        [c, f] = (function (e) {
            let [t, a] = h.useState(() =>
                (function (e) {
                    let { character: t, progress: a, stats: s } = l.A,
                        i = null != t ? v.s9.SUMMARY : a?.stage;
                    return S({ flow: e, stats: s }).find((e) => (0, v.UG)(e).characterStage === i) ?? v.gr.HOME;
                })(e),
            );
            return (
                h.useEffect(() => {
                    let { characterStage: e } = (0, v.UG)(t);
                    (0, d.l4)(e);
                }, [t]),
                [t, a]
            );
        })(n);
    (h.useEffect(() => {
        (o.A.setStepName(c), (0, u.if)(c));
    }, [c]),
        (0, y.l0)(() => {
            (0, u.i)(o.A.getStepName());
        }));
    let { characterStage: w, statsScreen: I } = (0, v.UG)(c),
        E = c === v.gr.HOME || null != I,
        j = E || c === v.gr.INTRODUCTION,
        N = (0, p.bG)([l.A], () => (l.A.fetchState === l.T.SUCCESS ? l.A.stats : void 0)),
        C = (0, p.bG)([l.A], () => l.A.character),
        T = h.useMemo(
            () =>
                (function (e, t) {
                    switch (e) {
                        case v.gr.SUMMARY:
                        case v.gr.SHARE:
                            let a = (0, g.o)(t),
                                { primaryBackgroundColor: s, shadowColor: i } = (0, g.j)(a);
                            return {
                                ...ez,
                                "--custom-checkpoint-primary": s,
                                "--custom-checkpoint-button-border": s,
                                "--custom-checkpoint-button-shadow": i,
                                "--custom-checkpoint-background-gradient-start": s,
                            };
                        default:
                            return ez;
                    }
                })(c, C),
            [c, C],
        ),
        R = D(b),
        { blockedTraits: O } = M(),
        k = (0, A._K)(c, O),
        P = h.useCallback(
            (e) => {
                let t = (function (e) {
                    let { flow: t, stats: a, currentRoute: s, direction: i } = e,
                        r = S({ flow: t, stats: a }),
                        n = r.indexOf(s);
                    return -1 === n ? v.gr.INTRODUCTION : (r[n + i] ?? null);
                })({ flow: n, stats: N, currentRoute: c, direction: e });
                if (null == t) {
                    1 === e && r();
                    return;
                }
                (v.cy.has(c) || R(), f(t));
            },
            [c, n, r, R, f, N],
        ),
        H = h.useCallback(() => P(-1), [P]),
        F = h.useCallback(() => P(1), [P]),
        B = h.useCallback(
            (e) => {
                l.A.isSaving || k || (R(), f(e));
            },
            [k, R, f],
        );
    return (0, i.jsx)(x.N, {
        theme: G.NJ.DARK,
        children: (e) =>
            (0, i.jsxs)("div", {
                className: _()(e, iE.kL),
                style: T,
                "aria-label": es.intl.string(e3.default["CdU/PF"]),
                children: [
                    (0, i.jsx)(U, { isVisible: E }),
                    (0, i.jsx)("div", {
                        className: _()(iE.qd, { [iE.R]: E }),
                        children: (0, i.jsx)(iI, { stage: w, isHidden: E }),
                    }),
                    (0, v.Rq)(c) && (0, i.jsx)("div", { className: iE.qd, children: (0, i.jsx)(tt, { route: c }) }),
                    j &&
                        (0, i.jsx)("div", {
                            className: iE.qd,
                            children: (0, i.jsx)(sG, { route: c, onNextStep: F, onPreviousStep: H }),
                        }),
                    (0, i.jsx)(q, { activeRoute: c }),
                    (0, i.jsxs)("div", {
                        className: iE.$s,
                        children: [
                            (0, i.jsx)(ti, {}),
                            (0, i.jsx)(K, {
                                size: "sm",
                                "aria-label": es.intl.string(es.t.cpT0Cq),
                                onClick: r,
                                children: (0, i.jsx)(m.P, { size: "xs", color: "currentColor" }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(sz, { flow: n, stats: N, activeRoute: c, isRouteBlocked: k, onRouteClick: B }),
                    (0, i.jsx)(tE, { activeRoute: c, isRouteBlocked: k, onBack: H, onNext: F }),
                ],
            }),
    });
}
function iN() {
    return !!c._.hasSubscribers(t$.jej.MODAL_CLOSE) && (c._.dispatch(t$.jej.MODAL_CLOSE), !0);
}
async function iS(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        a = arguments.length > 2 ? arguments[2] : void 0,
        s = await (0, d.nX)(a);
    s === l.T.ERROR
        ? (0, r.P0)({ text: es.intl.string(es.t.fEptJP), variant: "critical" })
        : s !== l.T.FETCHING &&
          (o.A.initialize(t),
          (0, u.lw)(e),
          (0, n.B8)(
              (e) => {
                  let { closeLayer: a } = e;
                  return (0, i.jsx)(ij, { didPlayerShareDataWithDiscord: t, onClose: a });
              },
              { onEscape: iN },
          ));
}
