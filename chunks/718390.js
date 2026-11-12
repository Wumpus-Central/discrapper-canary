a.d(t, { D: () => sI });
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
        I.gr.CHARACTER_UNAVAILABLE,
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
        I.gr.CHARACTER_UNAVAILABLE,
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
    let { flow: t, stats: a, isCharacterCreatorEnabled: r = !0 } = e;
    return (t === I.Np.SHARED_DATA ? S : j).filter((e) => {
        if (e === I.gr.CHARACTER_UNAVAILABLE) return !r;
        if ((!r && (e === I.gr.INTRODUCTION || (0, I.Rq)(e))) || (!r && e === I.gr.SUMMARY && null === a)) return !1;
        let t = N[e];
        if (null != t) return null != a && t(a);
        let i = C[e];
        return null == i || void 0 === a || i(a);
    });
}
function R(e) {
    let { flow: t, stats: a, isCharacterCreatorEnabled: r, currentRoute: i, direction: s } = e,
        n = T({ flow: t, stats: a, isCharacterCreatorEnabled: r }),
        c = n.indexOf(i);
    return -1 === c ? I.gr.INTRODUCTION : (n[c + s] ?? null);
}
a(321073);
let y =
        "https://cdn.discordapp.com/assets/content/05e7df987cb6150a2d6cbfe4aca2cdacfb4188166f8ff9bbde7421afcd85b382.mp3",
    O =
        "https://cdn.discordapp.com/assets/content/7b28adce16a979de5d4f6b8331dfedca2806d1b0b15f694b7a196db7f624918c.mp3",
    M =
        "https://cdn.discordapp.com/assets/content/aada5b40828140b41a56df82e81783cd43fd60e30ac1eb3c9f93a087b95dcf03.mp3",
    k =
        "https://cdn.discordapp.com/assets/content/04536b9e5b26d0b6e85116ce546b7d5ba97da31e7de7a1e02da262bcd5249bb0.mp3",
    L =
        "https://cdn.discordapp.com/assets/content/82d771ff521a99ea8e26239d2f2e48ae847e39575bc5bce396739b430b8a6fda.mp3",
    D = [y, O, M, k, L];
function P(e) {
    return e !== I.gr.HOME && null == (0, I.UG)(e).statsScreen;
}
function U(e) {
    return null != (0, I.UG)(e).statsScreen;
}
var H = a(127639),
    G = a(287809),
    F = a(474090),
    K = a(817379);
function B() {
    return (0, p.yK)([o.A, G.default], () => {
        let { selectedCharacterTraits: e, stats: t, character: a } = o.A,
            r = (0, F.ki)(G.default.getCurrentUser());
        return Object.values(H.V).filter((i) => {
            let s = e[i];
            return null != s && (0, K.tS)(i, s, { stats: t, hasNitro: r, savedCharacter: a });
        });
    });
}
var V = a(964486),
    z = a(920495),
    W = a(532294),
    q = a(739187);
function Y(e) {
    let t = (0, w.Cz)(e);
    null != t && ((0, q.V)(), (0, s.P0)({ text: t, variant: "critical" }));
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
            className: J.Tp,
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
var er = a(475743),
    ei = a(765548),
    es = a(190240);
function en(e) {
    let {
            visible: t,
            enter: a,
            exit: r,
            keepMounted: s = !1,
            mountAfterDelay: n = !1,
            hiddenScale: c = 1,
            onExitComplete: d,
            className: l,
            style: o,
            children: u,
        } = e,
        h = (0, p.bG)([Q.Ay], () => Q.Ay.useReducedMotion),
        b = f.useRef(null),
        [m, x] = f.useState(t),
        [g, A] = f.useState(t),
        v = f.useRef(null),
        w = (0, er.p0)({ value: u, shouldUpdate: t }),
        I = (0, er.p0)({ value: o, shouldUpdate: t }),
        E = (0, ei.A)(() => {
            ((v.current = null), x(!1), d?.());
        }),
        j = t ? a : r,
        S = h ? 0 : j.delay,
        N = h ? 0 : j.duration,
        C = t && !m && !s,
        T = n && !h;
    f.useEffect(() => {
        if (!C) return;
        if (!T) return void x(!0);
        let e = setTimeout(() => x(!0), a.delay);
        return () => clearTimeout(e);
    }, [C, T, a.delay]);
    let R = f.useRef(!0);
    if (
        (f.useEffect(() => {
            if (R.current) {
                R.current = !1;
                return;
            }
            if ((null != v.current && (clearTimeout(v.current), (v.current = null)), t)) {
                s && x(!0);
                return;
            }
            (A(!1), (v.current = setTimeout(E, S + N)));
        }, [t]),
        f.useLayoutEffect(() => {
            t && m && !g && (b.current?.getBoundingClientRect(), A(!0));
        }, [t, m, g]),
        f.useEffect(
            () => () => {
                null != v.current && clearTimeout(v.current);
            },
            [],
        ),
        !m && !s)
    )
        return null;
    let y = t && !s && T ? 0 : S,
        O = {
            ...(t ? o : I),
            opacity: +!!g,
            transform: g || 1 === c ? void 0 : `scale(${c})`,
            transitionDuration: `${N}ms`,
            transitionDelay: `${y}ms`,
        };
    return (0, i.jsx)("div", {
        ref: b,
        className: _()(l, es.q, { [es.R]: !m }),
        style: O,
        inert: !t,
        "aria-hidden": !t,
        children: t || s ? u : w,
    });
}
var ec = a(516749),
    ed = a(531685),
    el = a(399667),
    eo = a(468311),
    eu = a(706121),
    eh = a(985747),
    ef = a(67915),
    eb = a(118531);
let e_ = {
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
function ep(e) {
    return { name: e, url: e_[e].url };
}
let em = ep("tex_none"),
    ex = {
        [eh.N.NONE]: 0,
        [eh.N.CAP]: 7,
        [eh.N.ELVEN_HEADPIECE]: 1,
        [eh.N.HEADPHONES]: 2,
        [eh.N.TEDDY_BEANIE]: 13,
        [eh.N.PIERCINGS]: 4,
        [eh.N.HEADBAND]: 5,
        [eh.N.SUNGLASSES]: 6,
        [eh.N.BANANA_PEEL]: 3,
        [eh.N.LEAF]: 8,
        [eh.N.FIRE]: 9,
        [eh.N.HALO]: 10,
        [eh.N.BRAIN]: 11,
        [eh.N.TRAFFIC_CONE]: 12,
        [eh.N.CROWN]: 14,
    },
    eg = {
        [eb.Z.NONE]: 0,
        [eb.Z.ANGEL_WINGS]: 3,
        [eb.Z.STICKERS]: 1,
        [eb.Z.TOTE]: 2,
        [eb.Z.WIZARD_STAFF]: 8,
        [eb.Z.SKATEBOARD]: 4,
        [eb.Z.DRAGON_WINGS]: 5,
        [eb.Z.TAKE_OUT_BAG]: 6,
        [eb.Z.PIXEL_WRENCH]: 7,
        [eb.Z.MECH_WINGS]: 9,
        [eb.Z.SWORD]: 10,
        [eb.Z.DEVIANT_TAIL]: 11,
        [eb.Z.MAGICAL_STAFF]: 12,
        [eb.Z.BUTTERFLY_WINGS]: 13,
        [eb.Z.CAT_BACKPACK]: 14,
    },
    eA = {
        [eo.X.NONE]: em,
        [eo.X.BLAZE]: ep("tex_aura_04_blaze"),
        [eo.X.BLOSSOM]: ep("tex_aura_01_blossom"),
        [eo.X.PRISM]: ep("tex_aura_02_prism"),
        [eo.X.SHOCK]: ep("tex_aura_03_shock"),
        [eo.X.FATED]: ep("tex_aura_05_fated"),
        [eo.X.LUSTER]: ep("tex_aura_06_luster"),
        [eo.X.BUBBLES]: ep("tex_aura_07_bubbly"),
        [eo.X.SPOOKY]: ep("tex_aura_08_spooky"),
        [eo.X.CURSED]: ep("tex_aura_09_cursed"),
        [eo.X.MAGNETIC]: ep("tex_aura_10_magnetic"),
        [eo.X.RADIOACTIVE]: ep("tex_aura_11_radioactive"),
        [eo.X.ELEMENTAL]: ep("tex_aura_12_elemental"),
        [eo.X.SHIMMER]: ep("tex_aura_13_shimmer"),
        [eo.X.WITCHY]: ep("tex_aura_14_witchy"),
    },
    ev = {
        [eu.R.ICY]: ep("tex_base_01_icy"),
        [eu.R.CRIMSON]: ep("tex_base_02_crimson"),
        [eu.R.CHROME]: ep("tex_base_03_chrome"),
        [eu.R.GALACTIC]: ep("tex_base_04_galactic"),
        [eu.R.FOREST]: ep("tex_base_05_forrest"),
        [eu.R.MIDNIGHT]: ep("tex_base_06_mighnight"),
        [eu.R.GLACIER]: ep("tex_base_07_glacier"),
        [eu.R.ORANGE]: ep("tex_base_08_orange"),
        [eu.R.PURPLE]: ep("tex_base_09_pink"),
        [eu.R.RED]: ep("tex_base_10_red"),
        [eu.R.COBALT]: ep("tex_base_11_cobalt"),
        [eu.R.X_RAY]: ep("tex_base_12_x-ray"),
        [eu.R.LIQUID]: ep("tex_base_13_liquid"),
        [eu.R.BUTTER]: ep("tex_base_14_butter"),
        [eu.R.IRIDESCENT]: ep("tex_base_15_iridescent"),
    },
    ew = {
        [ef.r.NONE]: null,
        [ef.r.BADDIE_DEFAULT]: { riveId: 1, texture: ep("tex_outfit_01_baddie") },
        [ef.r.TRAVELER_DEFAULT]: { riveId: 10, texture: ep("tex_outfit_10_traveler") },
        [ef.r.STREAMER_DEFAULT]: { riveId: 3, texture: ep("tex_outfit_03_streamer") },
        [ef.r.CAMPER_DEFAULT]: { riveId: 4, texture: ep("tex_outfit_04_camper") },
        [ef.r.ATHLETE_DEFAULT]: { riveId: 5, texture: ep("tex_outfit_05_athlete") },
        [ef.r.COWPOKE_DEFAULT]: { riveId: 6, texture: ep("tex_outfit_06_cowpoke") },
        [ef.r.GOTH_DEFAULT]: { riveId: 7, texture: ep("tex_outfit_07_goth") },
        [ef.r.ASTRONAUT_DEFAULT]: { riveId: 8, texture: ep("tex_outfit_08_astronaut") },
        [ef.r.JESTER_DEFAULT]: { riveId: 9, texture: ep("tex_outfit_09_jester") },
        [ef.r.TRASH_CAN_DEFAULT]: { riveId: 2, texture: ep("tex_outfit_02_trash") },
        [ef.r.MAGE_DEFAULT]: { riveId: 11, texture: ep("tex_outfit_11_mage") },
        [ef.r.MECH_DEFAULT]: { riveId: 12, texture: ep("tex_outfit_12_mech") },
        [ef.r.KNIGHT_DEFAULT]: { riveId: 13, texture: ep("tex_outfit_13_knight") },
        [ef.r.MAGICAL_DEFAULT]: { riveId: 14, texture: ep("tex_outfit_14_magical") },
        [ef.r.BADDIE_MONOCHROME]: { riveId: 1, texture: ep("tex_outfit_01_baddie_monochrome") },
        [ef.r.BADDIE_VIOLET]: { riveId: 1, texture: ep("tex_outfit_01_baddie_violet") },
        [ef.r.BADDIE_PASTEL]: { riveId: 1, texture: ep("tex_outfit_01_baddie_pastel") },
        [ef.r.BADDIE_SUNSET]: { riveId: 1, texture: ep("tex_outfit_01_baddie_sunset") },
        [ef.r.TRAVELER_HAZE]: { riveId: 10, texture: ep("tex_outfit_10_traveler_haze") },
        [ef.r.TRAVELER_MOSS]: { riveId: 10, texture: ep("tex_outfit_10_traveler_moss") },
        [ef.r.TRAVELER_CHRONO]: { riveId: 10, texture: ep("tex_outfit_10_traveler_chrono") },
        [ef.r.TRAVELER_UMBER]: { riveId: 10, texture: ep("tex_outfit_10_traveler_umber") },
        [ef.r.STREAMER_FLAMES]: { riveId: 3, texture: ep("tex_outfit_03_streamer_flames") },
        [ef.r.STREAMER_STRIPES]: { riveId: 3, texture: ep("tex_outfit_03_streamer_stripes") },
        [ef.r.STREAMER_SMILEY]: { riveId: 3, texture: ep("tex_outfit_03_streamer_smiley") },
        [ef.r.STREAMER_VINTAGE]: { riveId: 3, texture: ep("tex_outfit_03_streamer_vintage") },
        [ef.r.CAMPER_PLAID]: { riveId: 4, texture: ep("tex_outfit_04_camper_plaid") },
        [ef.r.CAMPER_SWAMP]: { riveId: 4, texture: ep("tex_outfit_04_camper_swamp") },
        [ef.r.CAMPER_GLAMP]: { riveId: 4, texture: ep("tex_outfit_04_camper_glamp") },
        [ef.r.CAMPER_AMBER]: { riveId: 4, texture: ep("tex_outfit_04_camper_amber") },
        [ef.r.ATHLETE_BLOCKED]: { riveId: 5, texture: ep("tex_outfit_05_athlete_blocked") },
        [ef.r.ATHLETE_FADED]: { riveId: 5, texture: ep("tex_outfit_05_athlete_faded") },
        [ef.r.ATHLETE_CHECKERED]: { riveId: 5, texture: ep("tex_outfit_05_athlete_checkered") },
        [ef.r.ATHLETE_LINED]: { riveId: 5, texture: ep("tex_outfit_05_athlete_lined") },
        [ef.r.COWPOKE_ONYX]: { riveId: 6, texture: ep("tex_outfit_06_cowpoke_onyx") },
        [ef.r.COWPOKE_STEEL]: { riveId: 6, texture: ep("tex_outfit_06_cowpoke_steel") },
        [ef.r.COWPOKE_DENIM]: { riveId: 6, texture: ep("tex_outfit_06_cowpoke_denim") },
        [ef.r.COWPOKE_BLUSH]: { riveId: 6, texture: ep("tex_outfit_06_cowpoke_blush") },
        [ef.r.GOTH_SIREN]: { riveId: 7, texture: ep("tex_outfit_07_goth_siren") },
        [ef.r.GOTH_SERPENT]: { riveId: 7, texture: ep("tex_outfit_07_goth_serpent") },
        [ef.r.GOTH_RAVEN]: { riveId: 7, texture: ep("tex_outfit_07_goth_raven") },
        [ef.r.GOTH_VAMP]: { riveId: 7, texture: ep("tex_outfit_07_goth_vamp") },
        [ef.r.ASTRONAUT_STARDUST]: { riveId: 8, texture: ep("tex_outfit_08_astronaut_stardust") },
        [ef.r.ASTRONAUT_MARTIAN]: { riveId: 8, texture: ep("tex_outfit_08_astronaut_martian") },
        [ef.r.ASTRONAUT_SOLAR]: { riveId: 8, texture: ep("tex_outfit_08_astronaut_solar") },
        [ef.r.ASTRONAUT_COSMIC]: { riveId: 8, texture: ep("tex_outfit_08_astronaut_cosmic") },
        [ef.r.JESTER_CONFETTI]: { riveId: 9, texture: ep("tex_outfit_09_jester_confetti") },
        [ef.r.JESTER_CARNIVAL]: { riveId: 9, texture: ep("tex_outfit_09_jester_carnival") },
        [ef.r.JESTER_SUNRISE]: { riveId: 9, texture: ep("tex_outfit_09_jester_sunrise") },
        [ef.r.JESTER_NIGHTFALL]: { riveId: 9, texture: ep("tex_outfit_09_jester_nightfall") },
        [ef.r.TRASH_CAN_BLACKOUT]: { riveId: 2, texture: ep("tex_outfit_02_trash_blackout") },
        [ef.r.TRASH_CAN_CAUTION]: { riveId: 2, texture: ep("tex_outfit_02_trash_caution") },
        [ef.r.TRASH_CAN_BUBBLEGUM]: { riveId: 2, texture: ep("tex_outfit_02_trash_bubblegum") },
        [ef.r.TRASH_CAN_TOXIC]: { riveId: 2, texture: ep("tex_outfit_02_trash_toxic") },
        [ef.r.MAGE_SHADOW]: { riveId: 11, texture: ep("tex_outfit_11_mage_shadow") },
        [ef.r.MAGE_DUSK]: { riveId: 11, texture: ep("tex_outfit_11_mage_dusk") },
        [ef.r.MAGE_WILDWOOD]: { riveId: 11, texture: ep("tex_outfit_11_mage_wildwood") },
        [ef.r.MAGE_WINTER]: { riveId: 11, texture: ep("tex_outfit_11_mage_winter") },
        [ef.r.MECH_AERO]: { riveId: 12, texture: ep("tex_outfit_12_mech_aero") },
        [ef.r.MECH_VIPER]: { riveId: 12, texture: ep("tex_outfit_12_mech_viper") },
        [ef.r.MECH_ULTRAVIOLET]: { riveId: 12, texture: ep("tex_outfit_12_mech_ultraviolet") },
        [ef.r.MECH_SANDSTORM]: { riveId: 12, texture: ep("tex_outfit_12_mech_sandstorm") },
        [ef.r.KNIGHT_IRON]: { riveId: 13, texture: ep("tex_outfit_13_knight_iron") },
        [ef.r.KNIGHT_RUST]: { riveId: 13, texture: ep("tex_outfit_13_knight_rust") },
        [ef.r.KNIGHT_PETAL]: { riveId: 13, texture: ep("tex_outfit_13_knight_petal") },
        [ef.r.KNIGHT_GLACIER]: { riveId: 13, texture: ep("tex_outfit_13_knight_glacier") },
        [ef.r.MAGICAL_SAPPHIRE]: { riveId: 14, texture: ep("tex_outfit_14_magical_sapphire") },
        [ef.r.MAGICAL_AMETHYST]: { riveId: 14, texture: ep("tex_outfit_14_magical_amethyst") },
        [ef.r.MAGICAL_FROST]: { riveId: 14, texture: ep("tex_outfit_14_magical_frost") },
        [ef.r.MAGICAL_CITRINE]: { riveId: 14, texture: ep("tex_outfit_14_magical_citrine") },
    };
var eI = a(835517),
    eE = (((r = {}).SLOT = "slot"), (r.TRAIT = "trait"), (r.LAYOUT = "layout"), (r.ALWAYS = "always"), r);
let ej = /^tex_(aura|base_\d+|outfit)_/,
    eS = /^tex_(headwear|shoes|wearable|face)_(\d+)_/,
    eN = /^tex_face_([a-z]+)_/i,
    eC = {
        tex_env_labNight_bg: ["Desktop"],
        tex_env_labNight_bg_mobileLandscape: ["MobileLandscape"],
        tex_env_labNight_bg_mobilePortrait: ["MobilePortrait"],
        tex_env_labNight_fgLeft: ["Desktop"],
        tex_env_labNight_fgRight: ["Desktop"],
        tex_env_labNight_mgBottom: ["Desktop"],
        tex_env_labNight_mgBottomMobile: ["MobilePortrait", "MobileLandscape"],
        tex_env_labNight_sky: ["Desktop"],
    },
    eT = {
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
    eR = { columns: 1, rows: 1 },
    ey = { columns: 5, rows: 5 },
    eO = { columns: 6, rows: 8 },
    eM = {
        tex_aura_01_blossom: ey,
        tex_aura_02_prism: ey,
        tex_aura_03_shock: ey,
        tex_aura_04_blaze: ey,
        tex_aura_05_fated: ey,
        tex_aura_06_luster: ey,
        tex_aura_07_bubbly: ey,
        tex_aura_08_spooky: ey,
        tex_aura_09_cursed: ey,
        tex_aura_10_magnetic: ey,
        tex_aura_11_radioactive: ey,
        tex_aura_12_elemental: ey,
        tex_aura_13_shimmer: ey,
        tex_aura_14_witchy: ey,
        tex_wireframe_spritesheet: { columns: 12, rows: 6 },
        tex_wearable_10_sword_spritesheet: { columns: 5, rows: 4 },
        tex_wearable_11_deviantTail_smoke_active_spritesheet: eO,
        tex_wearable_11_deviantTail_smoke_idle_spritesheet: eO,
    },
    ek = [1, 1.25, 1.5, 1.75, 2, 3],
    eL = Math.min(...ek),
    eD = Math.max(...ek);
function eP(e, t) {
    let { url: a, width: r, height: i, widthAt1x: s } = e_[e];
    if (null == s) return a;
    let n = (t * s) / r,
        c = t >= Math.round(r / s);
    if (n >= 1 || c) return a;
    let { columns: d, rows: l } = eM[e] ?? eR,
        o = d * Math.round((r / d) * n),
        u = l * Math.round((i / l) * n);
    return `${a}?width=${o}&height=${u}`;
}
let eU = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14"],
    eH = eU.map((e) => `outfit${e}Image`),
    eG = {
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
    eF = {
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
    eK = { ...eF.MobilePortrait, gradientTopPosition: 55, gradientBottomPosition: 90 };
var eB = a(574381);
let eV = new Set([1]),
    ez = Object.keys(e_).map((e) => ({
        name: e,
        role: (function (e) {
            if (ej.test(e)) return { type: "slot" };
            let t = eC[e];
            if (null != t) return { type: "layout", layouts: t };
            let a = eS.exec(e);
            if (null != a) return { type: "trait", path: `${a[1]}ID`, riveId: Number(a[2]) };
            let r = eN.exec(e),
                i = null != r ? eT[r[1].toLowerCase()] : void 0;
            return null != i ? { type: "trait", path: "faceID", riveId: i } : { type: "always" };
        })(e),
        swapKey: (0, eB.un)() ? `${e}-${e_[e].riveId}` : e,
    }));
function eW(e) {
    let { faceID: t, headwearID: a, shoesID: r, wearableID: i, chapterID: s, device: n } = e;
    return f.useMemo(() => {
        var e;
        let c;
        return (
            (e = { faceID: t, headwearID: a, shoesID: r, wearableID: i }),
            (c = new Set()),
            ez.forEach((t) => {
                let { name: a, role: r } = t;
                switch (r.type) {
                    case eE.SLOT:
                        break;
                    case eE.TRAIT:
                        e[r.path] === r.riveId && c.add(a);
                        break;
                    case eE.LAYOUT:
                        r.layouts.includes(n) && c.add(a);
                        break;
                    case eE.ALWAYS:
                        ("tex_wireframe_spritesheet" !== a || eV.has(s)) && c.add(a);
                }
            }),
            c
        );
    }, [t, a, r, i, s, n]);
}
var eq = a(435558);
let eY = (0, a(196765).v)(() => ({ hoveredOption: void 0 })),
    eX = (0, eq.debounce)((e) => eY.setState({ hoveredOption: e }), 250);
function eQ(e) {
    let { hoveredOption: t, isDelayed: a = !1 } = e;
    a ? eX(t) : (eX.cancel(), eY.setState({ hoveredOption: t }));
}
(a(393431), a(532706), a(42231), a(232424), a(949626), a(767709), a(65162));
var eZ = a(971940);
async function eJ(e) {
    try {
        let t = await fetch(e);
        if (!t.ok) return null;
        return await (0, eZ.decodeImage)(new Uint8Array(await t.arrayBuffer()));
    } catch {
        return null;
    }
}
var e$ = a(168862);
function e0(e) {
    let t,
        a,
        { stage: r, isHidden: s } = e,
        n = (0, p.bG)([ed.A], () => {
            let e = ed.A.windowSize();
            return (function (e, t) {
                let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (a) return eL;
                let r = Math.max(e / 945, t / 532) * (0, eI.A)();
                return ek.find((e) => e >= r) ?? eD;
            })(e.width, e.height);
        }),
        [c, d] = f.useState(n);
    n > c && d(n);
    let l =
            ((t = (0, p.bG)([o.A], () => o.A.selectedCharacterTraits)),
            (a = eY((e) => e.hoveredOption)),
            f.useMemo(() => (null != a ? { ...t, [a.trait]: a.optionId } : t), [t, a])),
        u = (0, p.bG)([Q.Ay], () => Q.Ay.useReducedMotion),
        h = f.useMemo(
            () =>
                (function (e) {
                    let { stage: t, isHidden: a, traits: r, layout: i, mobileLift: s = 0, textureScale: n } = e,
                        { base: c, shoes: d, outfit: l, face: o, hat: u, wearable: h, aura: f } = (0, K.XI)(r),
                        b = ew[l],
                        _ = {};
                    return (
                        eU.forEach((e) => {
                            let t = Number(e) === b?.riveId ? b.texture : em;
                            _[`outfit${e}Image`] = eP(t.name, n);
                        }),
                        {
                            device: i,
                            mobileLift: s,
                            chapterID: a && t === I.s9.FACE ? eG[I.s9.IDLE] : eG[t],
                            faceID: o,
                            shoesID: d,
                            headwearID: ex[u],
                            wearableID: eg[h],
                            outfitID: b?.riveId ?? 0,
                            auraImage: eP(eA[f].name, n),
                            baseColorImage: eP(ev[c].name, n),
                            ...("MobilePortrait" === i && t === I.s9.INTRODUCTION ? eK : eF[i]),
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
                })({ visibleTextureNames: eW(t), requestedTextureNames: eW(a) });
            return f.useMemo(() => {
                let e;
                return (
                    (e = {}),
                    ez.forEach((t) => {
                        let { name: a, swapKey: s } = t,
                            n = i.has(a) ? eP(a, r) : em.url;
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
                r = f.useCallback((t) => !!t.isImage && t.name in e_ && (e.current.set(t.name, t), !0), []);
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
                                  load: eJ,
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
                n = (t = r.outfitID) > 0 ? eH[t - 1] : null,
                c = null != n ? r[n] : void 0,
                d = null == n || a?.[n] === c || i[n] === c,
                l = a ?? r;
            return {
                dataBinding: f.useMemo(() => (null == n || l[n] === c ? l : { ...l, [n]: c }), [l, n, c]),
                isOutfitPreloaded: d,
                onDataBindingChange: f.useMemo(() => {
                    let e = {};
                    return (
                        eH.forEach((t) => {
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
        "aria-label": (0, el.O)(l),
        className: _()(e$.dw, { [e$.RK]: null != b }),
        children: (0, i.jsx)(ec.W, {
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
            className: e$.lW,
        }),
    });
}
let e1 = { delay: 0, duration: 350 },
    e5 = { delay: 35, duration: 125 },
    e6 = { delay: 200, duration: 125 },
    e2 = { delay: 175, duration: 175 },
    e3 = { delay: 0, duration: 175 },
    e4 = { delay: 0, duration: 0 },
    e8 = { delay: e1.delay + e1.duration, duration: 0 };
var e9 = a(840527);
function e7(e) {
    let { stage: t, isCovered: a, className: r, children: s } = e,
        [n, c] = f.useState(a);
    !a && n && c(!1);
    let d = a && !n,
        l = (0, er.p0)({ value: t, shouldUpdate: !d }) ?? t,
        o = (0, er.p0)({ value: s, shouldUpdate: !d });
    return (0, i.jsxs)(en, {
        visible: !a,
        enter: e4,
        exit: e8,
        keepMounted: !0,
        onExitComplete: () => c(!0),
        className: r,
        children: [
            (0, i.jsx)("div", { className: e9.q, children: (0, i.jsx)(e0, { stage: l, isHidden: n }) }),
            null != o && (0, i.jsx)("div", { className: e9.q, children: o }),
        ],
    });
}
function te(e) {
    let { animatedSrc: t, staticSrc: a, className: r } = e,
        s = (0, p.bG)([Q.Ay], () => Q.Ay.useReducedMotion);
    return (0, i.jsx)("img", { src: s ? a : t, alt: "", className: r });
}
var tt = a(740281),
    ta = a(766089),
    tr = a(767988);
let ti = { animatedSrc: ta.A, staticSrc: tr.A };
function ts(e) {
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
                        return ti;
                }
            },
            [t],
        );
    return (0, i.jsx)(te, { animatedSrc: a, staticSrc: r, className: tt.w });
}
var tn = a(756408);
function tc() {
    let e = f.useRef(null);
    return (
        f.useLayoutEffect(() => {
            let t = e.current;
            null != t && ((t.tabIndex = -1), t.focus({ preventScroll: !0 }));
        }, []),
        e
    );
}
var td = a(834730),
    tl = a(534514),
    to = a(504736);
function tu(e) {
    let { children: t, className: a, ...r } = e;
    return (0, i.jsx)(td.E, { ...r, className: _()(to.Q, a), color: "none", children: t });
}
function th(e) {
    let { children: t, className: a, ...r } = e,
        s = tc();
    return (0, i.jsx)(tl.D, { ...r, ref: s, className: _()(to.Q, a), color: "none", children: t });
}
var tf = a(271427);
function tb(e) {
    let { children: t, className: a, style: r } = e;
    return (0, i.jsx)(tu, { tag: "span", variant: "mono-md/bold", className: _()(tf.T, a), style: r, children: t });
}
var t_ = a(852717),
    tp = a(792996),
    tm = a(383931);
function tx(e) {
    let { percent: t } = e;
    return (0, i.jsx)(tb, {
        className: tm.t,
        children: tp.intl.formatToPlainString(t_.default.fOGKA4, { percent: t }),
    });
}
var tg = a(646692);
function tA(e) {
    let { icon: t, value: a, topPercent: r, children: s } = e,
        n = tc(),
        c =
            null != r
                ? tp.intl.formatToPlainString(t_.default.USo6cU, { value: a, label: s, percent: r })
                : tp.intl.formatToPlainString(t_.default["+CCx/D"], { value: a, label: s });
    return (0, i.jsxs)("div", {
        ref: n,
        role: "heading",
        "aria-level": 2,
        children: [
            (0, i.jsxs)("div", {
                className: tg.dJ,
                "aria-hidden": !0,
                children: [
                    null != r && (0, i.jsx)(tx, { percent: r }),
                    (0, i.jsxs)("div", {
                        className: tg.p,
                        children: [
                            (0, i.jsx)(tu, {
                                variant: "heading-xxl/medium",
                                className: tg.Uq,
                                children: a.toLocaleString(tp.intl.currentLocale),
                            }),
                            (0, i.jsxs)("div", {
                                className: tg.Pf,
                                children: [
                                    (0, i.jsx)(t, { size: "xs", color: "currentColor" }),
                                    (0, i.jsx)(tu, { variant: "heading-xs/semibold", className: tg.QK, children: s }),
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
var tv = a(303453);
let tw = {
    [w.v7.FACE]: t_.default.q8GA6h,
    [w.v7.OUTFIT]: t_.default["xGh/fq"],
    [w.v7.OUTFIT_COLOR]: t_.default.IgiEDV,
    [w.v7.HAT]: t_.default.QqeBEO,
    [w.v7.WEARABLE]: t_.default.l57q3i,
    [w.v7.AURA]: t_.default["fYp+yq"],
    [w.v7.SHOES]: t_.default.BaI4wD,
    [w.v7.BASE]: t_.default.SMXZXX,
};
function tI(e) {
    let { customizationOption: t, earnedCount: a, totalCount: r } = e;
    return (0, i.jsx)(td.E, {
        variant: "body-md/medium",
        color: "text-subtle",
        className: tv.k,
        children: tp.intl.format(tw[t], {
            earnedCount: a,
            totalCount: r,
            countHook: (e, t) =>
                (0, i.jsx)(tu, { tag: "span", variant: "mono-md/bold", className: tv.U, children: e }, t),
        }),
    });
}
let tE =
    "https://cdn.discordapp.com/assets/content/48cbcb920dfd15e45e7fe3f297ede63a7891cb0eee9fc44f27053d05d2c6b5ca.mp3";
var tj = a(11044);
function tS(e) {
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
var tN = a(28863),
    tC = a(793574),
    tT = a(778705),
    tR = a(461872),
    ty = a(647093);
function tO(e) {
    let { rarity: t } = e,
        a = f.useMemo(() => ({ "--custom-checkpoint-rarity-background": W.Zy[t] }), [t]);
    return (0, i.jsx)(tb, { className: ty.q, style: a, children: tp.intl.string(W.iG[t]) });
}
var tM = a(829870);
function tk(e) {
    let { asset: t, hideRarity: a } = e,
        r =
            t.status === tR.eP.NITRO_LOCKED
                ? tp.intl.format(t_.default.E6AfCb, {
                      subscribeHook: (e, t) =>
                          (0, i.jsx)(
                              tN.Anchor,
                              {
                                  onClick: () =>
                                      (0, tT.A)({ analyticsLocations: [tC.A.CHECKPOINT, tC.A.CHECKPOINT_TRAIT] }),
                                  children: e,
                              },
                              t,
                          ),
                  })
                : (0, w.Oq)(t);
    return (0, i.jsxs)("div", {
        className: tM.z,
        children: [
            (0, i.jsxs)("div", {
                className: tM.D,
                children: [
                    (0, i.jsx)(td.E, {
                        tag: "div",
                        variant: "heading-sm/semibold",
                        color: "text-strong",
                        children: t.getName(),
                    }),
                    !a && null != t.rarity && (0, i.jsx)(tO, { rarity: t.rarity }),
                ],
            }),
            null != r && (0, i.jsx)(td.E, { variant: "body-md/medium", color: "text-subtle", children: r }),
        ],
    });
}
var tL = a(218546),
    tD = a(646514),
    tP = a(403581),
    tU = a(559265);
function tH(e) {
    let { rarity: t } = e,
        a = f.useMemo(() => ({ "--custom-checkpoint-rarity-color": W.Zy[t] }), [t]);
    return t === tL.K.NITRO
        ? (0, i.jsx)(tP.NitroWheelIcon, { size: "custom", color: tD.A.colors.ICON_SUBTLE, className: tU.d7 })
        : (0, i.jsx)("span", { className: tU.oG, style: a });
}
function tG(e) {
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
        p = b === tR.eP.LOCKED,
        m = f.useMemo(() => {
            if (null == h) return null;
            let e = Math.round(80 * (0, eI.A)());
            return `${h}?width=${e}&height=${e}`;
        }, [h]);
    return (0, i.jsxs)("label", {
        className: _()(tU.uK, { [tU.wH]: r, [tU.dv]: (0, w.C5)(t), [tU.xt]: p, [tU.Ns]: b === tR.eP.NITRO_LOCKED }),
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
            null != m && (0, i.jsx)("img", { src: m, alt: "", draggable: !1, className: tU.Sl }),
            !s && null != u && (0, i.jsx)(tH, { rarity: u }),
        ],
    });
}
var tF = a(509063),
    tK = a(974862),
    tB = a(142389),
    tV = a(211235),
    tz = a(230532),
    tW = a(110601),
    tq = a(917970);
function tY(e) {
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
        o = eY((e) => e.hoveredOption ?? r),
        u = tS(
            "https://cdn.discordapp.com/assets/content/fc5527a1a369d8982c6e6fa588f732c7c5364ff00ddd0cf51646f05ad423af36.mp3",
        ),
        h = tS(tE);
    ((0, V.Ay)(() => {
        [tK, tq, tB, tV, tW, tz].forEach((e) => (0, tj.N)(e));
    }),
        f.useEffect(() => () => eQ({ hoveredOption: void 0 }), [t]));
    let b = f.useCallback(
            (e, t) => {
                (eQ({ hoveredOption: void 0 }), h(), s(e, t));
            },
            [s, h],
        ),
        _ = f.useCallback(
            (e) => {
                (u(), eQ({ hoveredOption: e.optionId !== r?.optionId ? e : void 0, isDelayed: !0 }));
            },
            [u, r],
        );
    return (0, i.jsxs)("div", {
        className: tF.Nz,
        children: [
            (0, i.jsxs)("div", {
                className: tF.fF,
                children: [
                    c,
                    (0, i.jsx)("div", {
                        onMouseLeave: () => eQ({ hoveredOption: void 0 }),
                        children: (0, i.jsx)("div", {
                            role: "radiogroup",
                            "aria-label": (0, w.cq)(t),
                            className: tF.Vg,
                            onBlur: (e) => {
                                e.currentTarget.contains(e.relatedTarget) || eQ({ hoveredOption: void 0 });
                            },
                            children: a.map((e) =>
                                (0, i.jsx)(
                                    tG,
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
            null != o && (0, i.jsx)(tk, { asset: o, hideRarity: l }),
        ],
    });
}
var tX = a(51104);
function tQ(e, t) {
    return e === w.v7.OUTFIT ? (null != t ? (0, K.FA)(t) : void 0) : t;
}
function tZ(e) {
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
                    selectedOptionId: tQ(t, o.A.selectedCharacterTraits[r]),
                    savedOptionId: tQ(t, o.A.character?.[r]),
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
                            return (0, K.wD)(t ?? ef.r.NONE);
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
                n = (0, p.bG)([G.default], () => (0, F.ki)(G.default.getCurrentUser())),
                c = f.useMemo(() => (0, w.p8)(r), [r]);
            return f.useMemo(() => {
                let e = w.hw[t],
                    r = t === w.v7.OUTFIT_COLOR ? tX.x : tX.$[e],
                    d = (0, K.mf)(e, s),
                    l = [],
                    o = 0,
                    u = 0;
                for (let t of i ?? K.Rk[e]) {
                    let i = (0, K.$C)(e, t),
                        s = a === t,
                        c = tR.eP.UNLOCKED;
                    null == i || d.has(i) || s
                        ? i !== tL.K.NITRO || n || s || (c = tR.eP.NITRO_LOCKED)
                        : (c = tR.eP.LOCKED);
                    let h = c === tR.eP.UNLOCKED && (i !== tL.K.NITRO || n);
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
                                return null != e ? tp.intl.string(e) : "";
                            },
                        }));
                }
                l.sort(c);
                let h = l.filter((e) => {
                    let { status: t } = e;
                    return t !== tR.eP.LOCKED;
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
function tJ(e) {
    let { customizationOption: t } = e,
        {
            traitOptions: a,
            selectedOption: r,
            totalCount: s,
            earnedCount: n,
            onSelectOption: c,
        } = tZ({ customizationOption: t });
    return (0, i.jsx)(tY, {
        customizationOption: t,
        traitOptions: a,
        selectedOption: r,
        onSelectOption: c,
        children: (0, i.jsx)(tI, { customizationOption: t, earnedCount: n, totalCount: s }),
    });
}
var t$ = a(71678);
function t0(e) {
    let { children: t, className: a } = e;
    return (0, i.jsx)("div", { className: _()(t$.n, a), children: t });
}
function t1() {
    let e = (0, p.bG)([o.A], () => o.A.stats?.emojis);
    return (0, i.jsxs)(t0, {
        children: [
            (0, i.jsx)(tA, {
                icon: tn.EmojiSlightlySmilingFaceIcon,
                value: Math.round(e?.numEmojisSent ?? 0),
                topPercent: (0, E.bD)(e?.numEmojisSentPercentile),
                children: tp.intl.string(t_.default.ZTDCIv),
            }),
            (0, i.jsx)(tJ, { customizationOption: w.v7.SHOES }),
        ],
    });
}
var t5 = a(265872),
    t6 = a(320448);
let t2 = [w.v7.BASE, w.v7.OUTFIT_COLOR];
var t3 = a(315710),
    t4 = a(444927);
let t8 = {
        "--custom-checkpoint-game-art-width": "clamp(135px, 17.5vh, 180px)",
        "--custom-checkpoint-game-full-art-width": 180,
        "--custom-checkpoint-game-full-shell-width": 196,
        "--custom-checkpoint-game-full-shell-offset": 2,
    },
    t9 = {
        "--custom-checkpoint-game-art-width": "clamp(165px, 21.5vh, 220px)",
        "--custom-checkpoint-game-full-art-width": 220,
        "--custom-checkpoint-game-full-shell-width": 235.5,
        "--custom-checkpoint-game-full-shell-offset": 2,
    },
    t7 = {
        "--custom-checkpoint-primary": W.Kr,
        "--custom-checkpoint-dark-cyan": W.ow,
        "--custom-checkpoint-button-border": W.ow,
        "--custom-checkpoint-button-shadow": W.zj,
        "--custom-checkpoint-white": W.Ve,
        "--custom-checkpoint-guild-card-background": W.LM,
        "--custom-checkpoint-background-gradient-start": W.bI,
    };
var ae = a(580814);
function at(e) {
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
        h = (0, t4.A)(() => Math.max(a.indexOf(r), 0)),
        [b, p] = f.useState(null);
    function m(e) {
        let t = (e + a.length) % a.length;
        (p(t), u.current[t]?.focus());
    }
    return (
        (0, t3.tj)(t, { disable: !d, disableReturn: !0 }),
        f.useEffect(() => {
            d && u.current[h]?.focus();
        }, [h, d]),
        (0, i.jsx)("div", {
            ref: t,
            role: "menu",
            tabIndex: -1,
            "aria-label": tp.intl.string(t_.default.Zl5vPW),
            className: ae.MK,
            style: t7,
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
                        className: _()(ae.AS, { [ae.dT]: b === t }),
                        onFocus: () => p(t),
                        onMouseEnter: (e) => {
                            (p(t), d && e.currentTarget.focus());
                        },
                        onClick: () => n(e),
                        children: (0, i.jsx)(td.E, {
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
var aa = a(421773);
let ar = [w.v7.AURA, w.v7.WEARABLE, w.v7.SHOES, w.v7.HAT, w.v7.OUTFIT, w.v7.FACE];
var ai = a(769909);
function as(e) {
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
                let e = o.A.selectedCharacterTraits[H.V.OUTFIT];
                return null == e || (0, K.nb)(H.V.OUTFIT, e) ? t2.filter((e) => e !== w.v7.OUTFIT_COLOR) : t2;
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
                c = ar.includes(t),
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
                } = (0, aa.A)(100, 300);
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
                    null != r ? Y(r) : i || (x(), h(!0), _(!0));
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
        y = A ? "more" : n,
        { tabListRef: O, focusAdjacentTab: M } =
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
        L = null != u ? k : void 0,
        D = null != v ? (0, w.cq)(v) : null;
    function P(e) {
        null != u ? Y(u) : h || (c(e), S());
    }
    function U(e) {
        "more" !== e ? P(e) : null != v && P(v);
    }
    function G(e) {
        "more" === e && (A || null == v) ? j() : U(e);
    }
    function F(e) {
        let t = e === y;
        return {
            id: `${d}-${e}`,
            type: "button",
            role: "tab",
            "aria-selected": t,
            "aria-controls": t ? l : void 0,
            "aria-disabled": null != u,
            "aria-describedby": L,
            disabled: h,
            tabIndex: t ? 0 : -1,
            onClick: () => G(e),
            onKeyDown: (t) =>
                (function (e, t) {
                    switch (e.key) {
                        case "Enter":
                            (e.preventDefault(), e.stopPropagation(), G(t));
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
                " " === t.key && (t.preventDefault(), t.stopPropagation(), G(e));
            },
            className: _()(ai.Mf, { [ai.OS]: "more" === e, [ai.vu]: t }),
        };
    }
    return (0, i.jsxs)("div", {
        ref: O,
        role: "tablist",
        "aria-label": tp.intl.string(t_.default.Zl5vPW),
        className: ai.vR,
        children: [
            b.map((e) => {
                let t = (0, w.cq)(e);
                return (0, i.jsx)(
                    "button",
                    {
                        ...F(e),
                        "aria-label": t,
                        children: (0, i.jsx)(td.E, {
                            tag: "span",
                            variant: "heading-sm/semibold",
                            color: "none",
                            children: t,
                        }),
                    },
                    e,
                );
            }),
            (0, i.jsx)(t5.Y, {
                targetElementRef: m,
                shouldShow: I,
                onRequestOpen: j,
                onRequestClose: N,
                position: "right",
                align: "top",
                spacing: 8,
                renderPopout: () =>
                    (0, i.jsx)(at, {
                        menuRef: g,
                        options: ar,
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
                            null != D
                                ? tp.intl.formatToPlainString(t_.default.QX1VPx, { category: D })
                                : tp.intl.string(t_.default.jepsQ6),
                        "aria-haspopup": "menu",
                        "aria-expanded": I,
                        onMouseEnter: T,
                        onMouseLeave: R,
                        children: [
                            (0, i.jsx)(td.E, {
                                tag: "span",
                                variant: "heading-sm/semibold",
                                color: "none",
                                children: D ?? tp.intl.string(t_.default["iXpQc+"]),
                            }),
                            (0, i.jsx)(t6.ChevronSmallRightIcon, { size: "refresh_sm", color: "currentColor" }),
                        ],
                    }),
            }),
            null != u && (0, i.jsx)(x.A, { id: k, children: (0, w.Cz)(u) }),
        ],
    });
}
var an = a(195464);
function ac() {
    let e = f.useId(),
        t = f.useId(),
        [a, r] = f.useState(w.v7.BASE),
        { traitOptions: s, selectedOption: n, onSelectOption: c } = tZ({ customizationOption: a }),
        d = B().find((e) => e === w.hw[a]),
        l = (0, p.bG)([o.A], () => o.A.isSaving),
        u = tc();
    return (0, i.jsxs)(t0, {
        className: an.n,
        children: [
            (0, i.jsx)(tl.D, {
                ref: u,
                variant: "heading-xl/medium",
                color: "none",
                className: an.D,
                children: tp.intl.string(t_.default["q2nj/Z"]),
            }),
            (0, i.jsx)(as, {
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
                children: (0, i.jsx)(tY, {
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
var ad = a(81466);
function al() {
    let e = (0, p.bG)([o.A], () => o.A.stats?.games);
    return (0, i.jsxs)(t0, {
        children: [
            (0, i.jsx)(tA, {
                icon: ad.CalendarIcon,
                value: Math.round(e?.totalDaysPlayed ?? 0),
                topPercent: (0, E.bD)(e?.totalDaysPlayedPercentile),
                children: tp.intl.string(t_.default["4N5p4D"]),
            }),
            (0, i.jsx)(tJ, { customizationOption: w.v7.AURA }),
        ],
    });
}
var ao = a(687966);
function au() {
    let e = (0, p.bG)([o.A], () => o.A.stats?.games);
    return (0, i.jsxs)(t0, {
        children: [
            (0, i.jsx)(tA, {
                icon: ao.GameControllerIcon,
                value: Math.round(e?.totalGamesPlayed ?? 0),
                topPercent: (0, E.bD)(e?.totalGamesPlayedPercentile),
                children: tp.intl.string(t_.default.HM2fjf),
            }),
            (0, i.jsx)(tJ, { customizationOption: w.v7.WEARABLE }),
        ],
    });
}
var ah = a(534890),
    af = a(350363);
function ab() {
    let e = (0, p.bG)([o.A], () => o.A.stats?.messages);
    return (0, i.jsxs)(t0, {
        children: [
            (0, i.jsx)(tA, {
                icon: ah.ChatIcon,
                value: Math.round(e?.numMessagesSent ?? 0),
                topPercent: (0, E.bD)(e?.numMessagesSentPercentile),
                children: tp.intl.string(af.default.wWKySP),
            }),
            (0, i.jsx)(tJ, { customizationOption: w.v7.OUTFIT }),
        ],
    });
}
var a_ = a(664121);
function ap() {
    let e = (0, p.bG)([o.A], () => o.A.stats?.guilds?.guilds[0]);
    return (0, i.jsxs)(t0, {
        children: [
            (0, i.jsx)(tA, {
                icon: a_.ServerIcon,
                value: Math.round(e?.numDaysInteracted ?? 0),
                topPercent: (0, E.bD)(e?.numDaysInteractedPercentile),
                children: tp.intl.string(t_.default["M+a+t1"]),
            }),
            (0, i.jsx)(tJ, { customizationOption: w.v7.HAT }),
        ],
    });
}
var am = a(831544);
function ax() {
    let e = (0, p.bG)([o.A], () => o.A.stats?.voice),
        t = Math.round(e?.totalVoiceMinutes ?? 0);
    return (0, i.jsxs)(t0, {
        children: [
            (0, i.jsx)(tA, {
                icon: am.MicrophoneIcon,
                value: t,
                topPercent: (0, E.bD)(e?.totalVoiceMinutesPercentile),
                children: tp.intl.string(t_.default["3/T12E"]),
            }),
            (0, i.jsx)(tJ, { customizationOption: w.v7.FACE }),
        ],
    });
}
function ag(e) {
    let { route: t } = e;
    switch (t) {
        case I.gr.VOICE_FACE:
            return (0, i.jsx)(ax, {});
        case I.gr.MESSAGES_OUTFIT:
            return (0, i.jsx)(ab, {});
        case I.gr.SERVERS_HEADWEAR:
            return (0, i.jsx)(ap, {});
        case I.gr.EMOJI_SHOES:
            return (0, i.jsx)(t1, {});
        case I.gr.GAMES_WEARABLE:
            return (0, i.jsx)(au, {});
        case I.gr.GAME_TIME_AURA:
            return (0, i.jsx)(al, {});
        case I.gr.FINALIZE_CHARACTER:
            return (0, i.jsx)(ac, {});
        default:
            return null;
    }
}
var aA = a(358618),
    av = a(983851),
    aw = a(793920),
    aI = a(893007),
    aE = a(738964);
function aj(e) {
    return `${Math.round(e)}%`;
}
function aS() {
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
        v = 0 === g ? aA.VoiceXIcon : g > 50 ? av.VoiceNormalIcon : aw.VoiceLowIcon;
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
        className: aE.kL,
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
                className: A ? aE.Gg : void 0,
                "aria-label": tp.intl.string(t ? af.default.GN0uv6 : af.default.pjF33X),
                onClick: l.K8,
                children: (0, i.jsx)(v, { size: "xs", color: "currentColor" }),
            }),
            A
                ? (0, i.jsx)("div", {
                      className: aE.xJ,
                      children: (0, i.jsx)(aI.A, {
                          value: g,
                          minValue: 0,
                          maxValue: 100,
                          onChange: w,
                          onChangeEnd: C,
                          formatValue: aj,
                          "aria-label": tp.intl.string(tp.t.xPHVBs),
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
let aN =
        "https://cdn.discordapp.com/assets/content/914f6f5e36c680d00944ba2e6278b45f8b1da722692e101b5986cf7be56c4979.mp3",
    aC =
        "https://cdn.discordapp.com/assets/content/d1dfc8280cfbd578f18728598db893d807d9ece6b511389848b7308c399f07a0.mp3";
var aT = a(477155),
    aR = a(866665),
    ay = a(417270),
    aO = a(935286),
    aM = a(405433),
    ak = a(289873),
    aL = a(621466);
function aD(e, t) {
    let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    f.useEffect(() => {
        if (!a) return (window.addEventListener("keydown", r), () => window.removeEventListener("keydown", r));
        function r(a) {
            (0, aL.vq)(a.target, HTMLTextAreaElement) ||
                (0, aL.vq)(a.target, HTMLInputElement) ||
                (a.key === e && t(a));
        }
    }, [e, t, a]);
}
var aP = a(652215),
    aU = a(650583);
function aH(e) {
    let { source: t, onClick: a, disabled: r = !1 } = e,
        i = tS(t),
        s = f.useRef(!1);
    function n() {
        r || i();
    }
    return {
        playSound: n,
        onPointerDown: function (e) {
            e.button === aP.hE4.PRIMARY && ((s.current = !0), n());
        },
        onKeyDown: function (e) {
            (e.key === aU.dh.ENTER || e.key === aU.dh.SPACE) && ((s.current = !0), e.repeat || n());
        },
        onClickWithSound: function () {
            (s.current || n(), (s.current = !1), a());
        },
    };
}
var aG = a(753875);
function aF(e) {
    let { "aria-label": t, "aria-describedby": a, icon: r, onClick: s, disabled: n = !1 } = e,
        {
            playSound: c,
            onPointerDown: d,
            onKeyDown: l,
            onClickWithSound: o,
        } = aH({ source: aN, onClick: s, disabled: n });
    return (
        aD(
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
            className: _()(aG.A4, aG.aX),
            "aria-disabled": n,
            "aria-describedby": a,
            "aria-label": t,
            children: (0, i.jsx)(r, { color: "currentColor" }),
        })
    );
}
function aK(e) {
    let {
            "aria-label": t,
            "aria-describedby": a,
            children: r,
            onClick: s,
            size: n,
            className: c,
            disabled: d = !1,
        } = e,
        {
            playSound: l,
            onPointerDown: o,
            onKeyDown: u,
            onClickWithSound: h,
        } = aH({ source: aC, onClick: s, disabled: d });
    return (
        aD(
            "ArrowRight",
            function (e) {
                (e.repeat || l(), s());
            },
            d,
        ),
        (0, i.jsx)(ea, {
            onPointerDown: o,
            onKeyDown: u,
            onClick: h,
            size: n,
            className: _()(aG.A4, aG.K2, c),
            "aria-disabled": d,
            "aria-describedby": a,
            "aria-label": t,
            children: r,
        })
    );
}
function aB(e) {
    let { "aria-describedby": t, onClick: a, disabled: r } = e;
    return (0, i.jsx)(aF, {
        "aria-label": tp.intl.string(tp.t["13/7kX"]),
        "aria-describedby": t,
        icon: aT.ArrowSmallLeftIcon,
        onClick: a,
        disabled: r,
    });
}
function aV(e) {
    let { onClick: t } = e,
        { onPointerDown: a, onKeyDown: r, onClickWithSound: s } = aH({ source: aC, onClick: t });
    return (0, i.jsx)(aR.m, {
        text: tp.intl.string(t_.default.cWdGf9),
        ariaHidden: !0,
        children: (0, i.jsx)(et, {
            onPointerDown: a,
            onKeyDown: r,
            onClick: s,
            size: "md",
            className: _()(aG.A4, aG.eZ),
            "aria-label": tp.intl.string(t_.default.cWdGf9),
            children: (0, i.jsx)(ay.RetryIcon, { color: "currentColor" }),
        }),
    });
}
function az(e) {
    let { "aria-describedby": t, onClick: a, disabled: r } = e;
    return (0, i.jsx)(aK, {
        size: "md",
        "aria-label": tp.intl.string(tp.t.PDTjLN),
        "aria-describedby": t,
        onClick: a,
        disabled: r,
        children: (0, i.jsx)(aO.ArrowSmallRightIcon, { color: "currentColor" }),
    });
}
function aW(e) {
    let { onClick: t, disabled: a } = e;
    return (0, i.jsxs)(aK, {
        size: "custom",
        className: aG.GA,
        "aria-label": tp.intl.string(tp.t.i4jeWR),
        onClick: t,
        disabled: a,
        children: [
            (0, i.jsx)(tu, { variant: "mono-md/normal", className: aG.Pf, children: tp.intl.string(tp.t.i4jeWR) }),
            (0, i.jsx)(aO.ArrowSmallRightIcon, { size: "refresh_sm", color: "currentColor" }),
        ],
    });
}
function aq(e) {
    let { onClick: t, disabled: a } = e;
    return (0, i.jsxs)(aK, {
        size: "custom",
        className: _()(aG.GA, aG.Bq),
        "aria-label": tp.intl.string(tp.t.RDE0Sc),
        onClick: t,
        disabled: a,
        children: [
            (0, i.jsx)(td.E, {
                variant: "mono-md/bold",
                color: "none",
                className: aG.Pf,
                children: tp.intl.string(tp.t.RDE0Sc),
            }),
            (0, i.jsx)(aM.ShareIcon, { size: "refresh_sm", color: "currentColor" }),
        ],
    });
}
function aY(e) {
    let { onBack: t, isRouteBlocked: a, blockedTraitDescriptionId: r } = e,
        s = (0, p.bG)([o.A], () => o.A.isSaving);
    return (0, i.jsx)(aB, {
        "aria-describedby": r,
        onClick: function () {
            s || t();
        },
        disabled: s || a,
    });
}
function aX(e) {
    let { onNext: t, navigate: a, isRouteBlocked: r, blockedTraitDescriptionId: n } = e,
        c = (0, p.bG)([o.A], () => o.A.isSaving),
        d = c || r;
    async function u() {
        if (c) return;
        let e = (0, K.XI)(o.A.selectedCharacterTraits);
        (await (0, l.yE)(e)) ? t() : (0, s.P0)({ text: tp.intl.string(tp.t.fEptJP), variant: "critical" });
    }
    function h() {
        a(u);
    }
    let {
        playSound: f,
        onPointerDown: b,
        onKeyDown: m,
        onClickWithSound: x,
    } = aH({
        source: "https://cdn.discordapp.com/assets/content/1514d999969512ff06ade75018213676ebaf3698af26c0b1b7d3243ec480f920.mp3",
        onClick: h,
        disabled: d,
    });
    return (
        aD(
            "ArrowRight",
            function (e) {
                (e.repeat || f(), h());
            },
            d,
        ),
        (0, i.jsxs)(ea, {
            onPointerDown: b,
            onKeyDown: m,
            onClick: x,
            size: "custom",
            className: _()(aG.A4, aG.K2, aG.GA),
            "aria-disabled": d,
            "aria-describedby": n,
            "aria-label": tp.intl.string(tp.t["R3BPH+"]),
            children: [
                (0, i.jsx)(tu, {
                    variant: "mono-md/normal",
                    className: aG.Pf,
                    children: tp.intl.string(tp.t["R3BPH+"]),
                }),
                c
                    ? (0, i.jsx)(ak.y, { type: ak.t.SPINNING_CIRCLE_SIMPLE, className: aG.u1, itemClassName: aG.$N })
                    : (0, i.jsx)(aO.ArrowSmallRightIcon, { size: "refresh_sm", color: "currentColor" }),
            ],
        })
    );
}
function aQ(e) {
    let { activeRoute: t, blockedTrait: a, blockedTraitDescriptionId: r, onBack: s, onNext: n, onReplay: c } = e,
        d = null != a,
        l = f.useMemo(() => (0, eq.throttle)((e) => e(), 500, { trailing: !1 }), []);
    function o(e) {
        null != a ? Y(a) : l(e);
    }
    switch (t) {
        case I.gr.HOME:
            return null;
        case I.gr.FINALIZE_CHARACTER:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(aY, { onBack: () => o(s), isRouteBlocked: d, blockedTraitDescriptionId: r }),
                    (0, i.jsx)(aX, { onNext: n, navigate: o, isRouteBlocked: d, blockedTraitDescriptionId: r }),
                ],
            });
        case I.gr.SUMMARY:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(aB, { onClick: () => l(s) }),
                    (0, i.jsx)(aV, { onClick: () => l(c) }),
                    (0, i.jsx)(aq, { onClick: () => l(n) }),
                ],
            });
        case I.gr.SHARE:
            return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(aB, { onClick: () => l(s) }), (0, i.jsx)(aW, { onClick: () => l(n) })],
            });
        default:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(aB, { "aria-describedby": r, onClick: () => o(s), disabled: d }),
                    (0, i.jsx)(az, { "aria-describedby": r, onClick: () => o(n), disabled: d }),
                ],
            });
    }
}
function aZ(e) {
    let { className: t } = e;
    return (0, i.jsx)(te, {
        animatedSrc:
            "https://cdn.discordapp.com/assets/content/02e9ae4cdbec0b2adef22c9a5659f5c7340e399cc8932e8af6d41e62a37644ae.png",
        staticSrc:
            "https://cdn.discordapp.com/assets/content/f08be0abd0d224b5f7e1e5d6c1ef8e4d24cddcb712e2c624dcc6ea3d136818d5.png",
        className: t,
    });
}
var aJ = a(771639);
let a$ = { "--custom-checkpoint-screen-vertical-inset": "88px" };
function a0(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", { className: aJ.n, style: a$, children: t });
}
var a1 = a(639331);
function a5() {
    let e = (0, p.bG)([o.A], () => o.A.fetchState !== o.T.SUCCESS || null != o.A.stats),
        t = tc();
    return (0, i.jsx)(a0, {
        children: (0, i.jsxs)("div", {
            className: a1.Qs,
            children: [
                (0, i.jsxs)("div", {
                    ref: t,
                    className: a1.Ok,
                    role: "heading",
                    "aria-level": 2,
                    children: ["2026", !e && (0, i.jsx)(aZ, { className: a1.gi })],
                }),
                (0, i.jsxs)("div", {
                    className: a1.eH,
                    children: [
                        (0, i.jsx)(tu, {
                            tag: "p",
                            variant: "heading-xl/medium",
                            children: tp.intl.string(e ? t_.default["7YmUVu"] : t_.default["Fyr+NW"]),
                        }),
                        !e &&
                            (0, i.jsx)(tu, {
                                tag: "p",
                                variant: "heading-xl/medium",
                                children: tp.intl.string(t_.default["2GRr6H"]),
                            }),
                    ],
                }),
            ],
        }),
    });
}
(a(134528), a(947204));
var a6 = a(675970),
    a2 = a(559106),
    a3 = a(366056),
    a4 = a(292801),
    a8 = a(155718),
    a9 = a(294454),
    a7 = a(489414),
    re = a(878358),
    rt = a(383233),
    ra = a(819648),
    rr = a(677059);
function ri(e) {
    let { children: t } = e;
    return (0, i.jsx)(tu, { variant: "heading-xxl/medium", className: rr.h, children: t });
}
function rs(e) {
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
var rn = a(100391);
function rc(e) {
    let { icon: t, children: a } = e;
    return (0, i.jsxs)("div", {
        className: rn.D,
        children: [
            (0, i.jsx)(t, { size: "md", color: "currentColor" }),
            (0, i.jsx)(tu, { variant: "heading-lg/semibold", className: rn.Q, children: a }),
        ],
    });
}
function rd(e) {
    let { icon: t, children: a } = e;
    return (0, i.jsxs)("div", {
        className: rn.D,
        children: [
            (0, i.jsx)(t, { size: "md", color: "currentColor" }),
            (0, i.jsx)(th, { variant: "heading-lg/semibold", className: rn.Q, children: a }),
        ],
    });
}
var rl = a(456410);
function ro(e) {
    let { name: t, label: a, checked: r, onSelect: s, children: n } = e;
    return (0, i.jsx)(a2.vN, {
        within: !0,
        children: (0, i.jsxs)("label", {
            className: _()(rl.uK, { [rl.KD]: r }),
            children: [
                (0, i.jsx)(x.A, {
                    children: (0, i.jsx)("input", { type: "radio", name: t, checked: r, onChange: s, "aria-label": a }),
                }),
                r ? (0, i.jsx)("div", { className: rl.Gt, "aria-hidden": !0 }) : null,
                (0, i.jsx)("div", { className: rl.Nr, "aria-hidden": !0, children: n }),
            ],
        }),
    });
}
function ru() {
    let e = (0, p.bG)([o.A], () => o.A.character),
        t = (0, p.bG)([o.A], () => o.A.stats),
        a = f.useId(),
        r = tc(),
        n = f.useMemo(() => {
            var a, r;
            return ((a = e),
            (r = t),
            null != a && null != r
                ? [a6.Q.CHARACTER_ONLY, a6.Q.DEFAULT, a6.Q.STATS_ONLY]
                : null != a
                  ? [a6.Q.CHARACTER_ONLY]
                  : null != r
                    ? [a6.Q.STATS_ONLY]
                    : []).map((a) => ({ cardType: a, checkpointData: (0, ra.Go)(a, e, t) }));
        }, [e, t]),
        [c, d] = f.useState(
            () =>
                (
                    n.find((e) => {
                        let { cardType: t } = e;
                        return t === a6.Q.DEFAULT;
                    }) ?? n.at(0)
                )?.cardType,
        ),
        u = n.find((e) => {
            let { cardType: t } = e;
            return t === c;
        }),
        b = tS(tE),
        {
            onPointerDown: _,
            onKeyDown: m,
            onClickWithSound: x,
        } = aH({
            source: aC,
            onClick: function () {
                if (null == u) return;
                let { cardType: e, checkpointData: t } = u;
                (0, a9.fO)({
                    message: new rt.Ay({
                        content: "",
                        components: [{ type: a8.I5.CHECKPOINT_CARD, id: (0, a7.X1)("0"), checkpointData: t }],
                    }),
                    source: "checkpoint",
                    customSendHandler: async (t, a, r) => {
                        let { withMessage: i } = a;
                        r(!0);
                        try {
                            (await (0, l.jA)(t, i ?? "", e),
                                (0, h.Pe)(e),
                                (0, a9.Be)(),
                                (0, s.P0)({ text: tp.intl.string(tp.t.kwmYkt), variant: "success" }));
                        } catch {
                            (0, s.P0)({ text: tp.intl.string(tp.t.iufib1), variant: "critical" });
                        } finally {
                            r(!1);
                        }
                    },
                });
            },
        });
    return null == u
        ? null
        : (0, i.jsx)(a0, {
              children: (0, i.jsxs)("div", {
                  className: rl.uM,
                  children: [
                      (0, i.jsxs)("div", {
                          className: rl.wx,
                          children: [
                              (0, i.jsxs)(rs, {
                                  ref: r,
                                  className: rl.R_,
                                  accessibilityLabel: tp.intl.string(t_.default.P5zyko),
                                  children: [
                                      (0, i.jsx)(rc, {
                                          icon: a3.ExperimentalCheckpointIcon,
                                          children: tp.intl.string(af.default.ir6nEQ),
                                      }),
                                      (0, i.jsx)(tu, {
                                          variant: "display-lg",
                                          className: rl.Vy,
                                          children: tp.intl.string(tp.t.RDE0Sc),
                                      }),
                                  ],
                              }),
                              (0, i.jsx)("div", {
                                  className: rl.h_,
                                  children: (0, i.jsx)(ri, { children: tp.intl.string(t_.default.KXDPot) }),
                              }),
                          ],
                      }),
                      (0, i.jsx)("div", {
                          role: "radiogroup",
                          "aria-label": tp.intl.string(t_.default.KXDPot),
                          className: rl.kR,
                          children: n.map((e) => {
                              let { cardType: t, checkpointData: r } = e;
                              return (0, i.jsx)(
                                  ro,
                                  {
                                      name: a,
                                      label: (function (e) {
                                          switch (e) {
                                              case a6.Q.CHARACTER_ONLY:
                                                  return tp.intl.string(t_.default.tUU3fe);
                                              case a6.Q.DEFAULT:
                                                  return tp.intl.string(t_.default.DZQzJn);
                                              case a6.Q.STATS_ONLY:
                                                  return tp.intl.string(t_.default.e2UHGT);
                                          }
                                      })(t),
                                      checked: t === u.cardType,
                                      onSelect: () => {
                                          (b(), d(t));
                                      },
                                      children: (0, i.jsx)(re.A, { checkpointData: r }),
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
                          className: rl.sY,
                          "aria-label": tp.intl.string(tp.t.I3ltXO),
                          children: [
                              (0, i.jsx)(td.E, {
                                  variant: "mono-md/bold",
                                  color: "none",
                                  className: rl.RC,
                                  children: tp.intl.string(tp.t.I3ltXO),
                              }),
                              (0, i.jsx)(a4.ArrowAngleRightUpIcon, { size: "refresh_sm", color: "currentColor" }),
                          ],
                      }),
                  ],
              }),
          });
}
var rh = a(206701),
    rf = a(782134),
    rb = a(998304),
    r_ = a(975571),
    rp = a(427262),
    rm = a(438389);
let rx = (0, rb.j5)(W.Kr);
function rg(e) {
    let { onStart: t } = e,
        a = (0, p.bG)([G.default], () => G.default.getCurrentUser()),
        r = (0, rp.tx)(a),
        s = (0, p.bG)([Q.Ay], () => Q.Ay.useReducedMotion),
        { playSound: n, onPointerDown: c, onKeyDown: d, onClickWithSound: l } = aH({ source: aC, onClick: t });
    return (
        aD("ArrowRight", function (e) {
            (e.repeat || n(), t());
        }),
        (0, i.jsxs)(a0, {
            children: [
                (0, i.jsxs)("div", {
                    className: rm.Qs,
                    children: [
                        (0, i.jsxs)("div", {
                            className: rm.wx,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: rm.Qq,
                                    children: [
                                        (0, i.jsx)(th, {
                                            variant: "display-lg",
                                            className: rm.DD,
                                            children: tp.intl.string(af.default["CdU/PF"]),
                                        }),
                                        (0, i.jsx)(tu, {
                                            variant: "heading-xxl/medium",
                                            children: tp.intl.formatToPlainString(t_.default.xhZ23b, { username: r }),
                                        }),
                                    ],
                                }),
                                (0, i.jsx)("div", {
                                    className: rm.CB,
                                    children: (0, i.jsx)(rh.U, {
                                        artboard: "Entry",
                                        className: rm.lW,
                                        fit: "contain",
                                        withReducedMotion: "short-loop",
                                        dataBinding: { iconColor: rx, reducedMotion: s },
                                    }),
                                }),
                            ],
                        }),
                        (0, i.jsxs)(ea, {
                            onPointerDown: c,
                            onKeyDown: d,
                            onClick: l,
                            size: "custom",
                            className: rm.ni,
                            "aria-label": tp.intl.string(tp.t.I0v0Qv),
                            children: [
                                (0, i.jsx)(rf.PlayIcon, { size: "refresh_sm", color: "currentColor" }),
                                (0, i.jsx)(tu, {
                                    variant: "mono-md/normal",
                                    className: rm.qK,
                                    children: tp.intl.string(tp.t.I0v0Qv),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: rm.qr,
                    children: [
                        (0, i.jsx)(tu, {
                            variant: "body-sm/medium",
                            className: rm.ed,
                            children: tp.intl.format(t_.default.hcNhyq, {
                                learnMoreHook: (e, t) =>
                                    (0, i.jsx)(
                                        tN.Anchor,
                                        {
                                            className: rm.nf,
                                            href: r_.A.getArticleURL(aP.MVz.CHECKPOINT),
                                            useDefaultUnderlineStyles: !1,
                                            children: e,
                                        },
                                        t,
                                    ),
                            }),
                        }),
                        (0, i.jsx)(tu, {
                            variant: "body-md/medium",
                            className: rm.al,
                            children: tp.intl.format(af.default.g476ZL, { name: "Exyl" }),
                        }),
                    ],
                }),
            ],
        })
    );
}
var rA = a(565645),
    rv = a(141881);
function rw(e) {
    let { children: t } = e;
    return (0, i.jsx)(tb, { className: rv.l, children: t });
}
var rI = a(765671),
    rE = a(663385),
    rj = a(469228),
    rS = a(406956);
let rN = (0, rb.j5)(W.Kr);
function rC(e) {
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
    let l = "center" === a ? rE.m : rj.w;
    return (0, i.jsxs)("div", {
        className: _()(rS.lY, r),
        children: [
            (0, i.jsx)("div", { className: rS.VL, children: t }),
            (0, i.jsx)(l, {
                className: rS.lW,
                fit: "layout",
                withReducedMotion: "short-loop",
                dataBinding: { DisplayValue: d, TextColor: rN },
            }),
            (0, i.jsx)(x.A, { children: t.toLocaleString(tp.intl.currentLocale) }),
        ],
    });
}
var rT = a(434911);
function rR(e) {
    let { value: t } = e,
        { ref: a, width: r } = (0, rI.Ay)(),
        { ref: s, width: n } = (0, rI.Ay)(),
        c = null != r && null != n ? Math.min(1, r / n) : 1;
    return (0, i.jsxs)("div", {
        ref: a,
        className: rT.ai,
        style: { height: 200 * c },
        children: [
            (0, i.jsx)("span", { ref: s, className: _()(rT.Qq, rT.xP), children: t }),
            (0, i.jsx)(rC, { value: t }),
        ],
    });
}
function ry(e) {
    let { value: t } = e;
    return (0, i.jsxs)("div", {
        className: rT.dJ,
        children: [
            "number" == typeof t
                ? (0, i.jsx)(rR, { value: t })
                : (0, i.jsx)(tu, { variant: "heading-xxl/medium", className: rT.Qq, children: t }),
            (0, i.jsx)(aZ, { className: rT.gi }),
        ],
    });
}
var rO = a(445199),
    rM = a(205524),
    rk = a(690521),
    rL = a(152321);
let rD = [0, 0, 2],
    rP = [0, 1, 0],
    rU = [0, 0, 0],
    rH = `
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
    rG = `
precision mediump float;

varying vec2 v_texcoord;
varying highp vec3 v_lighting;

uniform sampler2D u_texture;

void main() {
  highp vec4 texelColor = texture2D(u_texture, v_texcoord);
  gl_FragColor = vec4(texelColor.rgb * v_lighting, texelColor.a);
}
`,
    rF = [
        -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5,
        -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5,
        0.5, 0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, -0.5,
        -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5,
        -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5,
        -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5,
    ],
    rK = [
        0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0,
        1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0,
    ],
    rB = [
        0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
        1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
        -1, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
        1, 0, 0,
    ];
function rV(e) {
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
                (i.shaderSource(s, rH),
                i.shaderSource(c, rG),
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
                i.bufferData(i.ARRAY_BUFFER, new Float32Array(rB), i.STATIC_DRAW),
                i.vertexAttribPointer(f, 3, i.FLOAT, !1, 0, 0),
                i.enableVertexAttribArray(f));
            let p = i.createBuffer();
            (i.bindBuffer(i.ARRAY_BUFFER, p),
                (e = new Float32Array(rF)),
                i.bufferData(i.ARRAY_BUFFER, e, i.STATIC_DRAW));
            let m = i.createBuffer();
            (i.bindBuffer(i.ARRAY_BUFFER, m), i.bufferData(i.ARRAY_BUFFER, new Float32Array(rK), i.STATIC_DRAW));
            let A = rO.DF(60);
            return (
                (a = requestAnimationFrame(function e() {
                    if (null == i || null == r) return;
                    (i.viewport(0, 0, i.canvas.width, i.canvas.height), i.enable(i.CULL_FACE), i.enable(i.DEPTH_TEST));
                    let t = rO.DF(x.current),
                        s = rO.DF(g.current);
                    (i.clear(i.COLOR_BUFFER_BIT | i.DEPTH_BUFFER_BIT),
                        i.useProgram(d),
                        i.enableVertexAttribArray(l),
                        i.bindBuffer(i.ARRAY_BUFFER, p),
                        i.vertexAttribPointer(l, 3, i.FLOAT, !1, 0, 0),
                        i.enableVertexAttribArray(o),
                        i.bindBuffer(i.ARRAY_BUFFER, m),
                        i.vertexAttribPointer(o, 2, i.FLOAT, !1, 0, 0));
                    let n = r.clientWidth / r.clientHeight,
                        c = rM.fN(rM.vt(), A, n, 1, 2e3),
                        f = rM.t5(rM.vt(), rD, rU, rP),
                        _ = rM.lw(rM.vt(), c, f),
                        v = rM.vt();
                    (rM.eL(v, v, t), rM.Z8(v, v, s));
                    let w = rM.lw(rM.vt(), _, v),
                        I = rM.vt();
                    (rM.B8(I, v),
                        rM.mg(I, I),
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
            ((d.current.crossOrigin = "anonymous"), (d.current.src = (0, rk.Ez)(a, 256)), (d.current.onload = C));
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
        y = f.useCallback(() => {
            j.current = !1;
        }, []);
    return (
        f.useEffect(
            () => (
                window.addEventListener("mouseup", y),
                window.addEventListener("mousemove", R),
                () => {
                    (window.removeEventListener("mouseup", y), window.removeEventListener("mousemove", R));
                }
            ),
            [R, y],
        ),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("canvas", {
                    className: _()(rL.Ji, { [rL.q4]: !u }),
                    ref: s,
                    height: 512,
                    width: 512,
                    onMouseDown: T,
                }),
                (0, i.jsx)("canvas", { className: rL.R, ref: c, height: 256, width: 256 }),
            ],
        })
    );
}
var rz = a(826820);
let rW = [];
function rq(e) {
    let { emojiStats: t } = e,
        a = Math.round(t?.numEmojisSent ?? 0),
        r = (0, E.bD)(t?.numEmojisSentPercentile);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: rz.dJ,
                children: [
                    (0, i.jsx)(rd, {
                        icon: tn.EmojiSlightlySmilingFaceIcon,
                        children: tp.intl.string(t_.default.ZTDCIv),
                    }),
                    (0, i.jsx)(rC, { value: a }),
                ],
            }),
            (0, i.jsx)(ri, {
                children:
                    null != r
                        ? tp.intl.format(t_.default.o7vDrk, {
                              percent: r,
                              percentHook: (e, t) => (0, i.jsx)(rw, { children: e }, t),
                          })
                        : tp.intl.format(t_.default.NFptic, { numEmojis: a }),
            }),
        ],
    });
}
function rY(e) {
    let { numEmojisSent: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: rz.dJ,
                children: [
                    (0, i.jsx)(rd, {
                        icon: tn.EmojiSlightlySmilingFaceIcon,
                        children: tp.intl.string(t_.default.ZTDCIv),
                    }),
                    (0, i.jsx)(ry, { value: t }),
                ],
            }),
            (0, i.jsx)(ri, { children: tp.intl.format(t_.default["660/Rr"], { numEmojis: (0, E.wj)(t) }) }),
        ],
    });
}
function rX() {
    let e = (0, p.bG)([o.A], () => o.A.stats?.emojis),
        t = (0, p.bG)([o.A], () => (0, E.y7)(o.A.stats)),
        a = (0, p.bG)([o.A], () => o.A.globalStats?.emojis),
        r = !t && null != a,
        s = (r ? a.emojis : e?.emojis) ?? rW,
        [n, c] = f.useState(0),
        d = s[n],
        l = tS(tE);
    return (0, i.jsx)(a0, {
        children: (0, i.jsxs)("div", {
            className: rz.kL,
            children: [
                (0, i.jsx)("div", { className: rz.KY, children: null != d && (0, i.jsx)(rV, { emoji: d }) }),
                (0, i.jsxs)("div", {
                    className: rz.C,
                    children: [
                        r ? (0, i.jsx)(rY, { numEmojisSent: a.numEmojisSent }) : (0, i.jsx)(rq, { emojiStats: e }),
                        (0, i.jsx)("div", {
                            className: rz.gm,
                            children: s.map((e, t) =>
                                (0, i.jsx)(
                                    rQ,
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
function rQ(e) {
    let { emoji: t, rank: a, isActive: r, onClick: s } = e,
        n = !(0, p.bG)([Q.Ay], () => Q.Ay.useReducedMotion) && !0 === t.animated;
    return (0, i.jsxs)(et, {
        size: "custom",
        className: rz._X,
        onClick: s,
        "aria-label": tp.intl.formatToPlainString(t_.default["S5+pRg"], { emojiName: t.name, rank: a }),
        "aria-pressed": r,
        children: [
            (0, i.jsx)(rA.A, { className: rz.Zg, emojiId: t.id, emojiName: t.name, animated: n }),
            (0, i.jsx)(tu, { variant: "mono-md/bold", className: rz.Tm, children: a }),
        ],
    });
}
var rZ = a(360450),
    rJ = a(214947),
    r$ = a(939249),
    r0 = a(597770),
    r1 = a(559647),
    r5 = a(95369),
    r6 = a(570287),
    r2 = a(486020),
    r3 = a(801305);
let r4 = [],
    r8 = (0, rb.j5)(W.Kr),
    r9 = { r: 0, g: 0, b: 0, a: 1 },
    r7 = {
        "Avatar01/Stroke": r9,
        "Avatar01/Fill": r8,
        "Avatar02/Stroke": r9,
        "Avatar02/Fill": r8,
        "Avatar03/Stroke": r9,
        "Avatar03/Fill": r8,
        "Avatar04/Stroke": r9,
        "Avatar04/Fill": r8,
        "Avatar05/Stroke": r9,
        "Avatar05/Fill": r8,
        ConnectorColor: r8,
    };
function ie(e) {
    return null != e ? r2.Ay.getUserAvatarURL(e, !1, 160, "png") : void 0;
}
function it(e) {
    let t,
        { route: a, onNextStep: r, onPreviousStep: s } = e,
        n = (0, p.bG)([o.A], () => o.A.stats?.users ?? r4),
        c = (0, p.bG)([o.A], () => o.A.stats?.sidekick),
        d = (0, p.bG)([G.default], () => G.default.getCurrentUser()),
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
        A = (0, rp.tx)(m) ?? "",
        v = (0, rp.tx)(g) ?? "",
        w = A.toLocaleUpperCase(),
        E = v.toLocaleUpperCase(),
        j = (0, rp.tx)(c?.user) ?? "",
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
    return (0, i.jsxs)(a0, {
        children: [
            (0, i.jsx)(rZ.m, {
                ref: u,
                className: r3.lW,
                fit: "contain",
                autoplay: !1,
                onLoad: T,
                withReducedMotion: "play",
                dataBinding: {
                    ...r7,
                    AnimationState: b,
                    "Avatar01/img": ie(c?.user),
                    "Avatar02/img": ie(g),
                    "Avatar03/img": ie(m),
                    "Avatar04/img": ie(c?.user),
                    "Avatar05/img": ie(d),
                    "Avatar01/Username": j.toLocaleUpperCase(),
                    "Avatar02/Username": E,
                    "Avatar03/Username": w,
                    "Avatar04/Username": j.toLocaleUpperCase(),
                    twoFriends: N,
                    reducedMotion: l,
                },
            }),
            a === I.gr.SQUAD_TRANSITION && (0, i.jsx)(ia, {}),
            a === I.gr.SQUAD &&
                (0, i.jsxs)("div", {
                    className: r3.Qs,
                    children: [
                        (0, i.jsx)(ir, {
                            title: tp.intl.string(af.default.OzY5Ns),
                            accessibilityLabel: tp.intl.string(t_.default.OSo1fB),
                            description: tp.intl.string(t_.default.EqdLDd),
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
                    className: _()(r3.Qs, r3.yG),
                    children: [
                        (0, i.jsxs)("div", {
                            className: r3.Cv,
                            children: [
                                (0, i.jsx)(ir, {
                                    title: tp.intl.string(af.default["+uwOHt"]),
                                    accessibilityLabel: tp.intl.string(t_.default.X4EiRH),
                                    description: tp.intl.string(t_.default["/ctmGw"]),
                                }),
                                (0, i.jsx)(x.A, { children: j }),
                                (0, i.jsx)(ii, { sidekick: c }),
                            ],
                        }),
                        (0, i.jsx)(is, { user: c.user, username: j }),
                    ],
                }),
        ],
    });
}
function ia() {
    let e = tc();
    return (0, i.jsx)("div", {
        ref: e,
        className: _()(r3.Qs, r3.kY),
        children: (0, i.jsx)(ri, { children: tp.intl.string(t_.default["6RSp5q"]) }),
    });
}
function ir(e) {
    let { title: t, accessibilityLabel: a, description: r } = e,
        s = tc();
    return (0, i.jsxs)("div", {
        className: r3.wx,
        children: [
            (0, i.jsxs)(rs, {
                ref: s,
                className: r3.R_,
                accessibilityLabel: a,
                children: [
                    (0, i.jsx)(rc, { icon: rJ.FriendsIcon, children: tp.intl.string(af.default.ZQakPR) }),
                    (0, i.jsx)(tu, { variant: "display-lg", className: r3.Vy, children: t }),
                ],
            }),
            (0, i.jsx)(ri, { children: r }),
        ],
    });
}
function ii(e) {
    let { sidekick: t } = e,
        a = Math.round(t.numMessagesSent),
        r = Math.round(t.numVoiceMinutes);
    return (0, i.jsxs)("div", {
        className: r3.M1,
        children: [
            (0, i.jsxs)("div", {
                className: r3.dJ,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(ah.ChatIcon, { size: "md", color: "currentColor" }),
                    (0, i.jsx)(tu, { variant: "heading-xxl/medium", className: r3.wk, children: a }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: r3.dJ,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(am.MicrophoneIcon, { size: "md", color: "currentColor" }),
                    (0, i.jsx)(tu, { variant: "heading-xxl/medium", className: r3.wk, children: r }),
                ],
            }),
            (0, i.jsx)(x.A, {
                children: tp.intl.formatToPlainString(t_.default.NafXAs, { numMessages: a, numMinutes: r }),
            }),
        ],
    });
}
function is(e) {
    let { user: t, username: a } = e,
        [r, n] = f.useState(""),
        [c, d] = f.useState(!1),
        [o, u] = f.useState(!1),
        b = (0, r6.A)(t.id),
        p = r.length > 0 && r.length <= 250 && !c && !o,
        x = c ? tp.intl.string(tp.t.fjcCk5) : tp.intl.formatToPlainString(tp.t["0ZQw/X"], { name: a });
    return b
        ? (0, i.jsxs)("div", {
              className: r3.OG,
              children: [
                  (0, i.jsx)("textarea", {
                      className: r3.yB,
                      value: r,
                      onChange: (e) => n(e.target.value),
                      maxLength: 250,
                      disabled: c || o,
                      placeholder: x,
                      "aria-label": x,
                  }),
                  (0, i.jsxs)("div", {
                      className: r3.n,
                      children: [
                          (0, i.jsx)(r$.D, {
                              className: r3.KD,
                              onClick: function () {
                                  ((0, h.nr)(t.id),
                                      (0, r5.A)({
                                          giftRecipient: t,
                                          analyticsLocations: [tC.A.CHECKPOINT, tC.A.CHECKPOINT_SIDEKICK],
                                      }));
                              },
                              "aria-label": tp.intl.string(tp.t.Ve9Ge6),
                              children: (0, i.jsx)(r0.GiftIcon, { size: "refresh_sm", color: "currentColor" }),
                          }),
                          (0, i.jsx)(r$.D, {
                              className: _()(r3.KD, { [r3.r9]: !p }),
                              onClick: async function () {
                                  if (p) {
                                      u(!0);
                                      try {
                                          (await (0, l.fr)(r, t.id),
                                              n(""),
                                              d(!0),
                                              m.O.announce(tp.intl.string(tp.t.fjcCk5), "polite"));
                                      } catch {
                                          (0, s.P0)({ text: tp.intl.string(tp.t.fEptJP), variant: "critical" });
                                      } finally {
                                          u(!1);
                                      }
                                  }
                              },
                              "aria-disabled": !p,
                              "aria-label": tp.intl.string(tp.t.oeb1vg),
                              children: (0, i.jsx)(r1.SendMessageIcon, { size: "refresh_sm", color: "currentColor" }),
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
var ic = a(9767);
function id(e) {
    let { games: t } = e,
        a = Math.round(t?.totalDaysPlayed ?? 0),
        r = (0, E.bD)(t?.totalDaysPlayedPercentile);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: ic.dJ,
                children: [
                    (0, i.jsx)(rd, { icon: ad.CalendarIcon, children: tp.intl.string(t_.default["4N5p4D"]) }),
                    (0, i.jsx)(rC, { value: a }),
                ],
            }),
            (0, i.jsx)(ri, {
                children:
                    null != r
                        ? tp.intl.format(t_.default["4FXB/m"], {
                              percent: r,
                              percentHook: (e, t) => (0, i.jsx)(rw, { children: e }, t),
                          })
                        : tp.intl.format(t_.default.iCKjh6, { numDays: a }),
            }),
        ],
    });
}
function il(e) {
    let { numUsersPlayedEveryDay: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: ic.dJ,
                children: [
                    (0, i.jsx)(rd, { icon: ad.CalendarIcon, children: tp.intl.string(t_.default["dx4+NI"]) }),
                    (0, i.jsx)(ry, { value: t }),
                ],
            }),
            (0, i.jsx)(ri, { children: tp.intl.format(t_.default["N32w+2"], { numUsers: (0, E.wj)(t) }) }),
        ],
    });
}
function io() {
    let e = (0, p.bG)([o.A], () => o.A.stats?.games),
        t = (0, p.bG)([o.A], () => (0, E.uO)(o.A.stats)),
        a = (0, p.bG)([o.A], () => o.A.globalStats?.games?.numUsersPlayedEveryDay),
        r = !t && null != a;
    return (0, i.jsx)(a0, {
        children: (0, i.jsxs)("div", {
            className: ic.kL,
            children: [
                (0, i.jsx)(te, {
                    animatedSrc:
                        "https://cdn.discordapp.com/assets/content/e3289e9a0a7faf4db23c3fefa390126fc64a09120fdb701f9dea833dddf671ef.png",
                    staticSrc:
                        "https://cdn.discordapp.com/assets/content/312abde9b19fcf85150d507de3f33096992506459b895ab3ea8d92c8f1e04a28.png",
                    className: ic.HW,
                }),
                (0, i.jsx)("div", {
                    className: ic.C,
                    children: r ? (0, i.jsx)(il, { numUsersPlayedEveryDay: a }) : (0, i.jsx)(id, { games: e }),
                }),
            ],
        }),
    });
}
var iu = a(95362),
    ih = a(828062);
function ib(e) {
    let { children: t } = e;
    return (0, i.jsx)(tu, { variant: "display-lg", className: ih.V, children: t });
}
function i_(e) {
    let { children: t } = e;
    return (0, i.jsx)(th, { variant: "display-lg", className: ih.V, children: t });
}
var ip = a(109112),
    im = a(311043),
    ix = a(883053);
function ig(e) {
    let { rank: t, className: a } = e;
    return (0, i.jsxs)(tb, { className: _()(ix.T, a), children: ["#", t] });
}
var iA = a(770178),
    iv = a(102189);
let iw = { fireOnMount: !0, fireOnDepsChange: !0 };
function iI(e) {
    let { text: t, textRef: a, children: r } = e,
        s = (function (e, t) {
            let [a, r] = f.useState(!1),
                i = f.useCallback((e) => {
                    let { target: t } = e;
                    r(t.scrollWidth > t.clientWidth);
                }, []);
            return ((0, iA.g)(e, i, [t], iw), a);
        })(a, t);
    return (0, i.jsx)(aR.m, {
        text: t,
        position: "bottom",
        anchorRef: a,
        shouldShow: s,
        ariaHidden: !0,
        children: r({ tabIndex: s ? 0 : void 0, className: iv.Y }),
    });
}
var iE = a(497357);
let ij = "/assets/e74703a44e087adc.svg";
function iS(e) {
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
            [im.A],
            () =>
                im.A.getGame(t)?.getCoverURL(300) ??
                r2.Ay.getApplicationIconURL({ id: t, icon: r, size: 300, keepAspectRatio: !0, fallbackAvatar: !1 }),
        );
    return (0, i.jsxs)("div", {
        ...f,
        role: "listitem",
        className: _()(iE.LO, o),
        style: d,
        children: [
            (0, i.jsxs)("div", {
                className: iE.Tn,
                "aria-hidden": null != l,
                children: [
                    (0, i.jsx)("img", { src: c, alt: "", className: iE.vf }),
                    null != b
                        ? (0, i.jsx)("img", { src: b, alt: "", className: iE.Qw })
                        : (0, i.jsx)("div", {
                              className: _()(iE.Qw, iE.uj),
                              children: (0, i.jsx)(ip.UnknownGameIcon, { size: "lg" }),
                          }),
                    null != s && (0, i.jsx)(ig, { rank: s, className: iE.Tm }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: iE.zH,
                "aria-hidden": null != l,
                children: [
                    (0, i.jsx)(tu, {
                        ref: u,
                        variant: "heading-xl/medium",
                        className: iE.UU,
                        lineClamp: h,
                        children: a,
                    }),
                    (0, i.jsx)(tu, { variant: "mono-md/bold", className: iE.Pf, children: n }),
                ],
            }),
            null != l && (0, i.jsx)(x.A, { children: l }),
        ],
    });
}
function iN(e) {
    let t = f.useRef(null);
    return (0, i.jsx)(iI, {
        text: e.game.name,
        textRef: t,
        children: (a) => {
            let { tabIndex: r, className: s } = a;
            return (0, i.jsx)(iS, { ...e, className: _()(e.className, s), tabIndex: r, textRef: t, lineClamp: 1 });
        },
    });
}
function iC(e, t, a) {
    return tp.intl.formatToPlainString(t_.default.mqdLhl, { gameName: e.name, rank: t, numSessions: a });
}
function iT(e) {
    let { numSessions: t, ...a } = e,
        r = Math.round(t);
    return (0, i.jsx)(iN, { ...a, label: r, shellImage: ij, style: t8, accessibilityLabel: iC(a.game, a.rank, r) });
}
function iR(e) {
    let { numSessions: t, ...a } = e,
        r = Math.round(t);
    return (0, i.jsx)(iN, {
        ...a,
        rank: 1,
        label: r,
        shellImage: "/assets/fbe1ab9677ed007a.svg",
        style: t9,
        accessibilityLabel: iC(a.game, 1, r),
    });
}
function iy(e) {
    return (0, i.jsx)(iS, { ...e, shellImage: ij, style: t8, className: iE.Ku });
}
var iO = a(842807);
let iM = [];
function ik(e) {
    let { gameStats: t } = e,
        a = Math.round(t?.totalGamesPlayed ?? 0),
        r = (0, E.bD)(t?.totalGamesPlayedPercentile),
        s = t?.games ?? iM;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: iO.wx,
                children: [
                    (0, i.jsxs)("div", {
                        className: iO.dJ,
                        children: [
                            (0, i.jsx)(rd, {
                                icon: ao.GameControllerIcon,
                                children: tp.intl.string(t_.default.HM2fjf),
                            }),
                            (0, i.jsx)(rC, { value: a, className: iO.ai }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: iO.h_,
                        children: (0, i.jsx)(ri, {
                            children:
                                null != r
                                    ? tp.intl.format(t_.default["hc0/yJ"], {
                                          percent: r,
                                          percentHook: (e, t) => (0, i.jsx)(rw, { children: e }, t),
                                      })
                                    : tp.intl.format(t_.default.aJMJ6b, { numGames: a }),
                        }),
                    }),
                ],
            }),
            (0, i.jsx)(iu.Ip, {
                orientation: "horizontal",
                scrollbarGutter: !1,
                fade: !0,
                className: iO.ag,
                role: "list",
                children: s.map((e, t) => {
                    let { game: a, numSessions: r } = e;
                    return 0 === t
                        ? (0, i.jsx)(iR, { game: a, numSessions: r }, a.id)
                        : (0, i.jsx)(iT, { game: a, rank: t + 1, numSessions: r }, a.id);
                }),
            }),
        ],
    });
}
function iL(e) {
    let { gameStats: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: _()(iO.wx, iO.l7),
                children: [
                    (0, i.jsxs)("div", {
                        className: iO.dJ,
                        children: [
                            (0, i.jsx)(aZ, { className: iO.gi }),
                            (0, i.jsx)(i_, { children: tp.intl.string(t_.default.qbCgI7) }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: iO.h_,
                        children: (0, i.jsx)(ri, { children: tp.intl.string(t_.default["0oDeiM"]) }),
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: _()(iO.ag, iO.Zs),
                role: "list",
                children: W.Jb.map((e) => {
                    let { list: a, label: r } = e,
                        s = t[a][0];
                    return null != s ? (0, i.jsx)(iy, { game: s, label: tp.intl.string(r) }, a) : null;
                }),
            }),
        ],
    });
}
function iD() {
    let e = (0, p.bG)([o.A], () => o.A.stats?.games),
        t = (0, p.bG)([o.A], () => (0, E.IH)(o.A.stats)),
        a = (0, p.bG)([o.A], () => o.A.globalStats?.games),
        r = !t && null != a;
    return (0, i.jsx)(a0, {
        children: (0, i.jsx)("div", {
            className: _()(iO.kL, { [iO.TF]: r }),
            children: r ? (0, i.jsx)(iL, { gameStats: a }) : (0, i.jsx)(ik, { gameStats: e }),
        }),
    });
}
var iP = a(167662);
function iU(e) {
    let { messages: t } = e,
        a = Math.round(t?.numMessagesSent ?? 0),
        r = (0, E.bD)(t?.numMessagesSentPercentile);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: iP.dJ,
                children: [
                    (0, i.jsx)(rd, { icon: ah.ChatIcon, children: tp.intl.string(af.default.wWKySP) }),
                    (0, i.jsx)(rC, { value: a }),
                ],
            }),
            (0, i.jsx)(ri, {
                children:
                    null != r
                        ? tp.intl.format(t_.default.TOMBAW, {
                              percent: r,
                              percentHook: (e, t) => (0, i.jsx)(rw, { children: e }, t),
                          })
                        : tp.intl.format(t_.default.cYCqz8, { numMessages: a }),
            }),
        ],
    });
}
function iH(e) {
    let { numWordsSent: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: iP.dJ,
                children: [
                    (0, i.jsx)(rd, { icon: ah.ChatIcon, children: tp.intl.string(t_.default["2BuyVC"]) }),
                    (0, i.jsx)(ry, { value: t }),
                ],
            }),
            (0, i.jsx)(ri, {
                children: tp.intl.format(t_.default.bAxEs2, {
                    numWords: (0, E.wj)(t),
                    numCopies: (0, E.wj)((0, E.yQ)(t)),
                }),
            }),
        ],
    });
}
function iG() {
    let e = (0, p.bG)([o.A], () => o.A.stats?.messages),
        t = (0, p.bG)([o.A], () => (0, E.nb)(o.A.stats)),
        a = (0, p.bG)([o.A], () => o.A.globalStats?.messages?.numWordsSent),
        r = !t && null != a;
    return (0, i.jsx)(a0, {
        children: (0, i.jsxs)("div", {
            className: iP.kL,
            children: [
                (0, i.jsx)(te, {
                    animatedSrc:
                        "https://cdn.discordapp.com/assets/content/d2d8036bb6a32967893421f9956b9e8ed30abde474f68c1a34e824205549c5a1.png",
                    staticSrc:
                        "https://cdn.discordapp.com/assets/content/1dfd8684180df4216b23f0a61617250be8fcc12bc1970ac259892f34fbdb836d.png",
                    className: iP.HW,
                }),
                (0, i.jsx)("div", {
                    className: iP.C,
                    children: r ? (0, i.jsx)(iH, { numWordsSent: a }) : (0, i.jsx)(iU, { messages: e }),
                }),
            ],
        }),
    });
}
var iF = a(682163),
    iK = a(224865);
let iB = iF.iu[iF.Ay.Sizes.XLARGE];
function iV(e) {
    let { guild: t, size: a } = e;
    return null == t.icon && a < 48
        ? (0, i.jsx)("div", {
              className: _()(iK.K, iK.J),
              style: { width: a, height: a },
              "aria-hidden": !0,
              children: (0, i.jsx)(td.E, { variant: "body-md/medium", children: (0, E.oW)(t.name) }),
          })
        : (0, i.jsx)(iF.Ay, {
              guild: t,
              size: iF.Ay.Sizes.XLARGE,
              iconSize: a,
              textScale: a / iB,
              className: iK.K,
              style: { width: a, height: a, borderRadius: 0 },
              "aria-hidden": !0,
          });
}
var iz = a(140645);
function iW(e) {
    let { numVoiceMinutes: t, numMessagesSent: a } = e,
        r = Math.round(t),
        s = Math.round(a);
    return (0, i.jsxs)("div", {
        className: iz.M1,
        children: [
            (0, i.jsxs)("div", {
                className: iz.dJ,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(am.MicrophoneIcon, { size: "md", color: "currentColor" }),
                    (0, i.jsx)(tu, { variant: "mono-md/bold", className: iz.Qq, children: r }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: iz.dJ,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(ah.ChatIcon, { size: "md", color: "currentColor" }),
                    (0, i.jsx)(tu, { variant: "mono-md/bold", className: iz.Qq, children: s }),
                ],
            }),
            (0, i.jsx)(x.A, {
                children: tp.intl.formatToPlainString(t_.default["OQjeY/"], { numMinutes: r, numMessages: s }),
            }),
        ],
    });
}
var iq = a(972106);
let iY = [];
function iX(e) {
    let { guild: t, rank: a, iconSize: r = 100, children: s } = e,
        n = f.useRef(null);
    return (0, i.jsx)(iI, {
        text: t.name,
        textRef: n,
        children: (e) => {
            let { tabIndex: c, className: d } = e;
            return (0, i.jsxs)("li", {
                className: _()(iq.w_, d),
                tabIndex: c,
                children: [
                    (0, i.jsxs)("div", {
                        className: iq.jj,
                        children: [
                            (0, i.jsx)(ig, { rank: a }),
                            (0, i.jsxs)("div", {
                                className: iq.gI,
                                children: [
                                    (0, i.jsx)(tu, {
                                        ref: n,
                                        variant: "heading-xxl/medium",
                                        className: iq.J5,
                                        lineClamp: 1,
                                        children: t.name,
                                    }),
                                    s,
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsx)(iV, { guild: t, size: r }),
                ],
            });
        },
    });
}
function iQ(e) {
    let { guild: t, numVoiceMinutes: a, numMessagesSent: r } = e;
    return (0, i.jsx)(iX, {
        guild: t,
        rank: 1,
        iconSize: 140,
        children: (0, i.jsx)(iW, { numVoiceMinutes: a, numMessagesSent: r }),
    });
}
function iZ(e) {
    let { guilds: t } = e,
        a = tc();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: iq.wx,
                children: [
                    (0, i.jsxs)(rs, {
                        ref: a,
                        className: iq.R_,
                        accessibilityLabel: tp.intl.string(t_.default.FroqRf),
                        children: [
                            (0, i.jsx)(rc, { icon: a_.ServerIcon, children: tp.intl.string(t_.default.Mb5E6r) }),
                            (0, i.jsx)(ib, { children: tp.intl.string(af.default.F0fkrh) }),
                        ],
                    }),
                    (0, i.jsx)(ri, { children: tp.intl.string(t_.default.IN1DaS) }),
                ],
            }),
            (0, i.jsx)("ul", {
                className: iq.Pl,
                children: t.map((e, t) => {
                    let { guild: a, numMessagesSent: r, numVoiceMinutes: s } = e;
                    return 0 === t
                        ? (0, i.jsx)(iQ, { guild: a, numMessagesSent: r ?? 0, numVoiceMinutes: s ?? 0 }, a.id)
                        : (0, i.jsx)(iX, { guild: a, rank: t + 1 }, a.id);
                }),
            }),
        ],
    });
}
function iJ(e) {
    let { guilds: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: iq.wx,
                children: [
                    (0, i.jsxs)("div", {
                        className: iq.R_,
                        children: [
                            (0, i.jsx)(aZ, { className: iq.gi }),
                            (0, i.jsx)(i_, { children: tp.intl.string(af.default.F0fkrh) }),
                        ],
                    }),
                    (0, i.jsx)(ri, { children: tp.intl.string(t_.default.bhnqop) }),
                ],
            }),
            (0, i.jsx)("ul", {
                className: iq.Pl,
                children: t.map((e, t) => (0, i.jsx)(iX, { guild: e, rank: t + 1 }, e.id)),
            }),
        ],
    });
}
function i$() {
    let e = (0, p.bG)([o.A], () => o.A.stats?.guilds?.guilds ?? iY),
        t = (0, p.bG)([o.A], () => o.A.globalStats?.guilds?.guildsByMembers),
        a = 0 === e.length && null != t;
    return (0, i.jsx)(a0, {
        children: (0, i.jsx)("div", {
            className: iq.kL,
            children: a ? (0, i.jsx)(iJ, { guilds: t }) : (0, i.jsx)(iZ, { guilds: e }),
        }),
    });
}
var i0 = a(155094);
function i1(e) {
    let { icon: t, title: a, description: r } = e;
    return (0, i.jsx)(a0, {
        children: (0, i.jsxs)("div", {
            className: i0.Q,
            children: [(0, i.jsx)(rd, { icon: t, children: a }), (0, i.jsx)(ri, { children: r })],
        }),
    });
}
var i5 = a(7584),
    i6 = a(33293),
    i2 = a(498137),
    i3 = a(192339),
    i4 = a(574414),
    i8 = a(834109),
    i9 = a(48763);
function i7(e) {
    let { character: t, power: a } = e,
        r = (0, v.o)(t);
    return (0, i.jsxs)(i2.A, {
        cardColorPalette: r,
        size: i9.W.LG,
        children: [
            (0, i.jsx)(i3.A, {}),
            (0, i.jsx)(i8.A, { variant: "full" }),
            null != a
                ? (0, i.jsx)(i4.A, {
                      powerLevel: (0, ra.Le)(a.powerLevel),
                      powerLevelUnits: (0, ra.sX)(a.powerLevelPercentile),
                  })
                : null,
            (0, i.jsx)(i6.A, { character: t }),
        ],
    });
}
var se = a(58410);
function st() {
    let e = (0, p.bG)([o.A], () => o.A.stats),
        t = (0, p.bG)([o.A], () => o.A.character),
        a = tc();
    return (0, i.jsx)(a0, {
        children: (0, i.jsxs)("div", {
            className: se.z,
            children: [
                null != t ? (0, i.jsx)(i7, { character: t, power: e?.power }) : null,
                (0, i.jsxs)("div", {
                    className: _()(se.zH, null === e && se.gz),
                    children: [
                        (0, i.jsxs)(rs, {
                            ref: a,
                            className: se.R_,
                            accessibilityLabel: tp.intl.string(t_.default.ASrTAc),
                            children: [
                                (0, i.jsx)(rc, {
                                    icon: a3.ExperimentalCheckpointIcon,
                                    children: tp.intl.string(af.default.ir6nEQ),
                                }),
                                (0, i.jsx)(tu, {
                                    variant: "display-lg",
                                    className: se.Vy,
                                    children: tp.intl.string(af.default.y4M1na),
                                }),
                            ],
                        }),
                        null === e ? (0, i.jsx)(sa, { character: t }) : (0, i.jsx)(sr, { stats: e }),
                    ],
                }),
            ],
        }),
    });
}
function sa(e) {
    let { character: t } = e,
        { primaryBackgroundColor: a } = (0, v.j)((0, v.o)(t));
    return (0, i.jsx)(tu, {
        tag: "p",
        variant: "heading-xl/medium",
        style: { color: a },
        children: tp.intl.string(t_.default["GL+yOs"]),
    });
}
function sr(e) {
    let { stats: t } = e,
        a = t.guilds?.guilds[0],
        r = t.emojis?.emojis[0],
        s = t.games?.games[0]?.game,
        n =
            null != s
                ? r2.Ay.getApplicationIconURL({ id: s.id, icon: s.iconHash, size: 40, fallbackAvatar: !1 })
                : void 0;
    return (0, i.jsxs)("div", {
        className: se.M1,
        children: [
            (0, i.jsx)(si, { label: tp.intl.string(t_.default.MSrV9z), value: t.voice?.totalVoiceMinutes }),
            (0, i.jsx)(si, { label: tp.intl.string(t_.default.hhh11L), value: t.messages?.numMessagesSent }),
            (0, i.jsx)(si, { label: tp.intl.string(t_.default["f5S+pt"]), value: a?.numDaysInteracted }),
            (0, i.jsx)(ss, {
                label: tp.intl.string(af.default["8XPMJj"]),
                icon: null != a ? (0, i.jsx)(iV, { guild: a.guild, size: 40 }) : (0, i.jsx)(sn, {}),
                name: null != a ? a.guild.name : tp.intl.string(tp.t.PoWNfe),
            }),
            (0, i.jsx)(si, { label: tp.intl.string(t_.default.xVSlv3), value: t.emojis?.numEmojisSent }),
            (0, i.jsx)(ss, {
                label: tp.intl.string(af.default["3sARW7"]),
                icon:
                    null != r
                        ? (0, i.jsx)(rA.A, {
                              emojiId: r.id,
                              emojiName: null == r.id ? r.name : void 0,
                              animated: r.animated,
                              alt: "",
                              className: se.Kk,
                          })
                        : (0, i.jsx)(sn, {}),
                name:
                    null == r
                        ? tp.intl.string(tp.t.PoWNfe)
                        : null == r.id
                          ? i5.Ay.convertSurrogateToName(r.name)
                          : `:${r.name}:`,
            }),
            (0, i.jsx)(si, { label: tp.intl.string(t_.default.y2Y1DD), value: t.games?.totalDaysPlayed }),
            (0, i.jsx)(ss, {
                label: tp.intl.string(af.default.RbT4Zq),
                icon:
                    null != n
                        ? (0, i.jsx)("img", { src: n, alt: "", className: _()(se.Kk, se.Gt) })
                        : null == s
                          ? (0, i.jsx)(sn, {})
                          : (0, i.jsx)("div", {
                                className: _()(se.Kk, se.Gc),
                                children: (0, i.jsx)(ip.UnknownGameIcon, { size: "md", color: "currentColor" }),
                            }),
                name: null != s ? s.name : tp.intl.string(tp.t.PoWNfe),
            }),
        ],
    });
}
function si(e) {
    let { label: t, value: a } = e;
    return (0, i.jsxs)("div", {
        className: se.dJ,
        children: [
            (0, i.jsx)(tu, { variant: "heading-md/semibold", children: t }),
            (0, i.jsx)(tu, {
                variant: "heading-xxl/medium",
                className: se.wk,
                children: Math.round(a ?? 0).toLocaleString(tp.intl.currentLocale),
            }),
        ],
    });
}
function ss(e) {
    let { label: t, icon: a, name: r } = e,
        s = f.useRef(null);
    return (0, i.jsx)(iI, {
        text: r,
        textRef: s,
        children: (e) => {
            let { tabIndex: n, className: c } = e;
            return (0, i.jsxs)("div", {
                className: _()(se.dJ, se.u4, c),
                tabIndex: n,
                children: [
                    (0, i.jsx)(tu, { variant: "heading-md/semibold", children: t }),
                    (0, i.jsxs)("div", {
                        className: se.AS,
                        children: [
                            a,
                            (0, i.jsx)(tu, {
                                ref: s,
                                variant: "heading-xl/medium",
                                lineClamp: 1,
                                className: se.TJ,
                                children: r,
                            }),
                        ],
                    }),
                ],
            });
        },
    });
}
function sn() {
    return (0, i.jsx)("div", {
        className: _()(se.Kk, se.Gc, se.Wn),
        children: (0, i.jsx)(ip.UnknownGameIcon, { size: "lg", color: "currentColor" }),
    });
}
var sc = a(651946);
function sd() {
    let e = (0, p.bG)([o.A], () => o.A.stats?.guilds?.guilds[0]),
        t = Math.round(e?.numDaysInteracted ?? 0),
        a = (0, E.bD)(e?.numDaysInteractedPercentile),
        r = f.useRef(null);
    return (0, i.jsx)(a0, {
        children: (0, i.jsxs)("div", {
            className: sc.kL,
            children: [
                (0, i.jsxs)("div", {
                    className: sc.wx,
                    children: [
                        (0, i.jsxs)("div", {
                            className: sc.R_,
                            children: [
                                (0, i.jsx)(rd, { icon: a_.ServerIcon, children: tp.intl.string(t_.default["M+a+t1"]) }),
                                (0, i.jsx)(rC, { value: t }),
                            ],
                        }),
                        (0, i.jsx)(ri, {
                            children:
                                null != a
                                    ? tp.intl.format(t_.default.sIDTV1, {
                                          numDays: t,
                                          percent: a,
                                          percentHook: (e, t) => (0, i.jsx)(rw, { children: e }, t),
                                      })
                                    : tp.intl.format(t_.default.nLCUQ4, { numDays: t }),
                        }),
                    ],
                }),
                null != e &&
                    (0, i.jsx)("div", {
                        className: sc.bU,
                        children: (0, i.jsx)(iI, {
                            text: e.guild.name,
                            textRef: r,
                            children: (t) => {
                                let { tabIndex: a, className: s } = t;
                                return (0, i.jsxs)("div", {
                                    className: _()(sc.Nr, s),
                                    style: { width: 360 },
                                    tabIndex: a,
                                    children: [
                                        (0, i.jsx)(iV, { guild: e.guild, size: 360 }),
                                        (0, i.jsxs)("div", {
                                            className: sc.zH,
                                            children: [
                                                (0, i.jsx)(tu, {
                                                    ref: r,
                                                    variant: "heading-xxl/medium",
                                                    className: sc.J5,
                                                    lineClamp: 1,
                                                    children: e.guild.name,
                                                }),
                                                (0, i.jsx)(iW, {
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
var sl = a(270704);
function so(e) {
    let { voice: t } = e,
        a = Math.round(t?.totalVoiceMinutes ?? 0),
        r = (0, E.bD)(t?.totalVoiceMinutesPercentile);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: sl.dJ,
                children: [
                    (0, i.jsx)(rd, { icon: am.MicrophoneIcon, children: tp.intl.string(t_.default["3/T12E"]) }),
                    (0, i.jsx)(rC, { value: a, alignment: "center" }),
                ],
            }),
            (0, i.jsx)(ri, {
                children:
                    null != r
                        ? tp.intl.format(t_.default.RqXsIs, {
                              percent: r,
                              percentHook: (e, t) => (0, i.jsx)(rw, { children: e }, t),
                          })
                        : tp.intl.format(t_.default.Y3poDW, { numMinutes: a }),
            }),
        ],
    });
}
function su(e) {
    let { peakHour: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: sl.dJ,
                children: [
                    (0, i.jsx)(rd, { icon: am.MicrophoneIcon, children: tp.intl.string(t_.default.ZCwB8J) }),
                    (0, i.jsx)(ry, { value: t }),
                ],
            }),
            (0, i.jsx)(ri, { children: tp.intl.string(t_.default.huiTne) }),
        ],
    });
}
function sh() {
    let e = (0, p.bG)([o.A], () => o.A.stats?.voice),
        t = (0, p.bG)([o.A], () => (0, E.Kr)(o.A.stats)),
        a = (0, p.bG)([o.A], () => o.A.globalStats?.voice?.peakHourUtc),
        r = (0, E.XF)(a)?.value,
        s = !t && null != r;
    return (0, i.jsxs)(a0, {
        children: [
            (0, i.jsx)(te, {
                animatedSrc:
                    "https://cdn.discordapp.com/assets/content/04746dc04eab575d0168935af2b1b3f97e2e00439f84bd0f0474276e0c5a81dc.png",
                staticSrc:
                    "https://cdn.discordapp.com/assets/content/c4c2d6b631bff3da4e4bb9afffc8f89bc9fb6f76a2fcd824f8a7af83eb7f1e6b.png",
                className: sl.Tp,
            }),
            (0, i.jsx)("div", {
                className: sl.Qs,
                children: s ? (0, i.jsx)(su, { peakHour: r }) : (0, i.jsx)(so, { voice: e }),
            }),
        ],
    });
}
function sf(e) {
    let { route: t, onNextStep: a, onPreviousStep: r } = e;
    if (t === I.gr.HOME) return (0, i.jsx)(rg, { onStart: a });
    if (t === I.gr.INTRODUCTION) return (0, i.jsx)(a5, {});
    let { statsScreen: s } = (0, I.UG)(t);
    switch (s) {
        case I.oI.VOICE_INTRO:
            return (0, i.jsx)(i1, {
                icon: am.MicrophoneIcon,
                title: tp.intl.string(t_.default["/7XYsa"]),
                description: tp.intl.string(t_.default["X8/G/o"]),
            });
        case I.oI.VOICE:
            return (0, i.jsx)(sh, {});
        case I.oI.MESSAGES_INTRO:
            return (0, i.jsx)(i1, {
                icon: ah.ChatIcon,
                title: tp.intl.string(t_.default["2BuyVC"]),
                description: tp.intl.string(t_.default["kF+Y3a"]),
            });
        case I.oI.MESSAGES:
            return (0, i.jsx)(iG, {});
        case I.oI.SERVERS_INTRO:
            return (0, i.jsx)(i1, {
                icon: a_.ServerIcon,
                title: tp.intl.string(af.default.F0fkrh),
                description: tp.intl.string(t_.default.Xg82Gy),
            });
        case I.oI.SERVERS:
            return (0, i.jsx)(i$, {});
        case I.oI.TOP_SERVER:
            return (0, i.jsx)(sd, {});
        case I.oI.EMOJI_INTRO:
            return (0, i.jsx)(i1, {
                icon: tn.EmojiSlightlySmilingFaceIcon,
                title: tp.intl.string(t_.default.ZTDCIv),
                description: tp.intl.string(t_.default.y8Sr8J),
            });
        case I.oI.EMOJI:
            return (0, i.jsx)(rX, {});
        case I.oI.GAMES_INTRO:
            return (0, i.jsx)(i1, {
                icon: ao.GameControllerIcon,
                title: tp.intl.string(t_.default.HM2fjf),
                description: tp.intl.string(t_.default.LQiFqJ),
            });
        case I.oI.GAMES:
            return (0, i.jsx)(iD, {});
        case I.oI.GAME_TIME:
            return (0, i.jsx)(io, {});
        case I.oI.SQUAD:
        case I.oI.SIDEKICK:
            return (0, i.jsx)(it, { route: t, onNextStep: a, onPreviousStep: r });
        case I.oI.SUMMARY:
            return (0, i.jsx)(st, {});
        case I.oI.SHARE:
            return (0, i.jsx)(ru, {});
        default:
            return null;
    }
}
var sb = a(650809),
    s_ = a(428692);
let sp = {
    [I.s9.FACE]: { icon: am.MicrophoneIcon, label: tp.t.K3lovD },
    [I.s9.OUTFIT]: { icon: ah.ChatIcon, label: tp.t.OIgYlQ },
    [I.s9.HEADWEAR]: { icon: a_.ServerIcon, label: tp.t["7hB4kg"] },
    [I.s9.SHOES]: { icon: tn.EmojiSlightlySmilingFaceIcon, label: tp.t.sMOuuS },
    [I.s9.WEARABLE]: { icon: ao.GameControllerIcon, label: tp.t.URyqtP },
    [I.s9.AURA]: { icon: ad.CalendarIcon, label: t_.default.y2Y1DD },
    [I.s9.ASSEMBLED]: { icon: rJ.FriendsIcon, label: tp.t.TdEu5X },
    [I.s9.FINALIZE]: { icon: sb.PaintPaletteIcon, label: t_.default.gmMD2I },
    [I.s9.SUMMARY]: { icon: a3.ExperimentalCheckpointIcon, label: af.default.y4M1na },
};
function sm(e) {
    let {
            step: { icon: t, label: a, route: r },
            disabled: s,
            blockedTraitDescriptionId: n,
            sound: c,
            onRouteClick: d,
        } = e,
        l = tp.intl.string(a),
        { onPointerDown: o, onKeyDown: u, onClickWithSound: h } = aH({ source: c, onClick: () => d(r), disabled: s });
    return (0, i.jsx)(aR.m, {
        text: l,
        ariaHidden: !0,
        children: (0, i.jsxs)(r$.D, {
            onPointerDown: o,
            onKeyDown: u,
            onClick: h,
            role: "tab",
            "aria-selected": !1,
            className: _()(s_.PM, s_.CD, { [s_.vk]: !s }),
            "aria-label": l,
            "aria-disabled": s,
            "aria-describedby": n,
            children: [
                (0, i.jsx)("div", { className: _()(s_.Om, s_.hZ) }),
                (0, i.jsx)(t, { size: "xs", color: "currentColor", className: s_.RQ }),
            ],
        }),
    });
}
function sx(e) {
    let { flow: t, stats: a, activeRoute: r, isRouteBlocked: s, blockedTraitDescriptionId: n, onRouteClick: c } = e,
        d = (function (e, t) {
            let a = [];
            for (let r of T({ flow: e, stats: t })) {
                let { characterStage: e } = (0, I.UG)(r),
                    t = sp[e];
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
              className: s_.qB,
              role: "tablist",
              "aria-label": tp.intl.string(t_.default.DyMw85),
              children: d.map((e, t) => {
                  let { icon: a } = e;
                  return t === u
                      ? (0, i.jsx)(
                            aR.m,
                            {
                                text: tp.intl.string(e.label),
                                ariaHidden: !0,
                                children: (0, i.jsx)("div", {
                                    className: s_.PM,
                                    role: "tab",
                                    "aria-selected": !0,
                                    "aria-label": tp.intl.string(e.label),
                                    children: (0, i.jsx)(a, { size: "xs", color: "currentColor" }),
                                }),
                            },
                            e.stage,
                        )
                      : t <= h
                        ? (0, i.jsx)(
                              sm,
                              {
                                  step: e,
                                  disabled: _ || s,
                                  blockedTraitDescriptionId: n,
                                  sound: t < u ? aN : aC,
                                  onRouteClick: c,
                              },
                              e.stage,
                          )
                        : (0, i.jsx)(
                              "div",
                              {
                                  className: s_.PM,
                                  role: "tab",
                                  "aria-selected": !1,
                                  "aria-disabled": !0,
                                  "aria-label": tp.intl.string(e.label),
                                  children: (0, i.jsx)("div", { className: s_.Om }),
                              },
                              e.stage,
                          );
              }),
          });
}
var sg = a(517782);
function sA() {
    let e = f.useId(),
        t = f.useRef(null);
    return (f.useEffect(() => (m.O.moveTo?.(e, t.current), () => m.O.remove?.(e)), [e]), (0, i.jsx)(x.A, { ref: t }));
}
function sv(e) {
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
                    let { character: t, progress: a, stats: r, isCharacterCreatorEnabled: i } = o.A;
                    if (!i) return I.gr.HOME;
                    let s = null != t ? I.s9.SUMMARY : a?.stage;
                    return T({ flow: e, stats: r }).find((e) => (0, I.UG)(e).characterStage === s) ?? I.gr.HOME;
                })(e),
            );
            return (
                f.useEffect(() => {
                    if (!o.A.isCharacterCreatorEnabled) return;
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
        j = n === I.gr.INTRODUCTION,
        S = (0, I.Rq)(n),
        N = (0, p.bG)([o.A], () => (o.A.fetchState === o.T.SUCCESS ? o.A.stats : void 0)),
        C = (0, p.bG)([o.A], () => o.A.character),
        H = f.useMemo(
            () =>
                (function (e, t) {
                    switch (e) {
                        case I.gr.SUMMARY:
                        case I.gr.SHARE:
                            let a = (0, v.o)(t),
                                { primaryBackgroundColor: r, shadowColor: i } = (0, v.j)(a);
                            return {
                                ...t7,
                                "--custom-checkpoint-primary": r,
                                "--custom-checkpoint-button-border": r,
                                "--custom-checkpoint-button-shadow": i,
                                "--custom-checkpoint-background-gradient-start": r,
                            };
                        default:
                            return t7;
                    }
                })(n, C),
            [n, C],
        ),
        G = (function () {
            let { isMuted: e, volume: t } = (0, p.cf)([o.A], () => ({ isMuted: o.A.isMuted, volume: o.A.volume })),
                a = f.useRef(new Map()),
                r = f.useRef(null),
                i = f.useCallback(() => {
                    (r.current?.(), a.current.forEach((e) => e.pause()));
                }, []);
            return (
                f.useEffect(() => ((a.current = new Map(D.map((e) => [e, new Audio(e)]))), i), [i]),
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
        F = B(),
        K = (0, w.k0)(n, F),
        q = f.useId(),
        X = null != K ? q : void 0,
        Q = f.useCallback(
            (e) => {
                let t = (function (e) {
                    let { previousRoute: t, route: a } = e;
                    if (t === I.gr.SIDEKICK_LEAVE && a === I.gr.SIDEKICK) return null;
                    if (t === I.gr.FINALIZE_CHARACTER && a === I.gr.SUMMARY) return [];
                    let r = [];
                    return (
                        a === I.gr.INTRODUCTION
                            ? (r.push({ source: y, delayMs: 0 }),
                              r.push({ source: L, delayMs: 2500 }),
                              r.push({ source: O, delayMs: 2800 }))
                            : P(t) && U(a)
                              ? r.push({ source: M, delayMs: 0 })
                              : U(t) && P(a) && (r.push({ source: k, delayMs: 0 }), r.push({ source: L, delayMs: 0 })),
                        r
                    );
                })({ previousRoute: n, route: e });
                (null != t && G(t), c(e));
            },
            [n, G, c],
        ),
        J = f.useCallback(
            (e) => {
                let t = R({ flow: s, stats: N, currentRoute: n, direction: e });
                if (null == t) {
                    1 === e && r();
                    return;
                }
                Q(t);
            },
            [n, s, Q, r, N],
        ),
        ee = f.useCallback(() => J(-1), [J]),
        ea = f.useCallback(() => J(1), [J]),
        er = f.useCallback(
            () =>
                Q(R({ ...{ flow: s, stats: N }, currentRoute: I.gr.INTRODUCTION, direction: 1 }) ?? I.gr.INTRODUCTION),
            [s, Q, N],
        ),
        ei = f.useCallback(
            (e) => {
                if (!o.A.isSaving) {
                    if (null != K) return void Y(K);
                    Q(e);
                }
            },
            [K, Q],
        );
    return (0, i.jsx)(g.N, {
        theme: Z.NJ.DARK,
        children: (e) =>
            (0, i.jsxs)("div", {
                className: _()(e, sg.kL),
                style: H,
                role: "dialog",
                "aria-modal": !0,
                "aria-label": tp.intl.string(af.default["CdU/PF"]),
                children: [
                    (0, i.jsx)(sA, {}),
                    (0, i.jsxs)("div", {
                        className: sg.$s,
                        children: [
                            (0, i.jsx)(aS, {}),
                            (0, i.jsx)(et, {
                                size: "sm",
                                "aria-label": tp.intl.string(tp.t.cpT0Cq),
                                onClick: r,
                                children: (0, i.jsx)(A.XSmallIcon, { size: "xs", color: "currentColor" }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(e7, {
                        stage: d,
                        isCovered: m,
                        className: sg.qd,
                        children: j && (0, i.jsx)(sf, { route: I.gr.INTRODUCTION, onNextStep: ea, onPreviousStep: ee }),
                    }),
                    (0, i.jsx)(en, {
                        visible: m,
                        enter: e1,
                        exit: e1,
                        hiddenScale: 1.02,
                        keepMounted: !0,
                        className: sg.qd,
                        style: H,
                        children: (0, i.jsx)($, { isVisible: m }),
                    }),
                    (0, i.jsx)(en, {
                        visible: S,
                        enter: e2,
                        exit: e3,
                        className: sg.qd,
                        children: (0, i.jsx)(ag, { route: n }),
                    }),
                    (0, i.jsx)(en, {
                        visible: m,
                        enter: e6,
                        exit: e5,
                        hiddenScale: 1.02,
                        mountAfterDelay: !0,
                        className: sg.qd,
                        style: H,
                        children: (0, i.jsx)(sf, { route: n, onNextStep: ea, onPreviousStep: ee }),
                    }),
                    (0, i.jsx)(aQ, {
                        activeRoute: n,
                        blockedTrait: K,
                        blockedTraitDescriptionId: X,
                        onBack: ee,
                        onNext: ea,
                        onReplay: er,
                    }),
                    (0, i.jsx)(ts, { activeRoute: n }),
                    (0, i.jsx)(sx, {
                        flow: s,
                        stats: N,
                        activeRoute: n,
                        isRouteBlocked: null != K,
                        blockedTraitDescriptionId: X,
                        onRouteClick: ei,
                    }),
                    null != K && (0, i.jsx)(x.A, { id: q, children: (0, w.Cz)(K) }),
                ],
            }),
    });
}
function sw() {
    if (d._.hasSubscribers(aP.jej.MODAL_CLOSE)) return (d._.dispatch(aP.jej.MODAL_CLOSE), !0);
    let e = (0, c.mU)(document.activeElement ?? document.body);
    return !!e?.hasSubscribers(aP.jej.POPOUT_CLOSE) && (e.dispatch(aP.jej.POPOUT_CLOSE), !0);
}
async function sI(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { didPlayerShareDataWithDiscord: a = !0, ...r } = t,
        c = await (0, l.nX)(r);
    c === o.T.ERROR
        ? (0, s.P0)({ text: tp.intl.string(tp.t.fEptJP), variant: "critical" })
        : c !== o.T.FETCHING &&
          (u.A.initialize(a),
          (0, h.lw)(e),
          (0, n.B8)(
              (e) => {
                  let { closeLayer: t } = e;
                  return (0, i.jsx)(sv, { didPlayerShareDataWithDiscord: a, onClose: t });
              },
              { onEscape: sw },
          ));
}
