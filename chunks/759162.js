a.d(t, { D: () => sw });
var r,
    i = a(477900),
    s = a(858899),
    n = a(361158),
    c = a(267102),
    d = a(531685),
    l = a(188567),
    o = a(796104),
    u = a(719718),
    h = a(527926),
    f = a(617390),
    b = a(582128),
    p = a(503698),
    _ = a.n(p),
    m = a(855986),
    x = a(765178),
    g = a(140735),
    A = a(43990),
    v = a(789645),
    w = a(373955),
    I = a(503235),
    E = a(847011),
    j = a(201779);
a(321073);
let S =
        "https://cdn.discordapp.com/assets/content/05e7df987cb6150a2d6cbfe4aca2cdacfb4188166f8ff9bbde7421afcd85b382.mp3",
    N =
        "https://cdn.discordapp.com/assets/content/7b28adce16a979de5d4f6b8331dfedca2806d1b0b15f694b7a196db7f624918c.mp3",
    C =
        "https://cdn.discordapp.com/assets/content/aada5b40828140b41a56df82e81783cd43fd60e30ac1eb3c9f93a087b95dcf03.mp3",
    T =
        "https://cdn.discordapp.com/assets/content/04536b9e5b26d0b6e85116ce546b7d5ba97da31e7de7a1e02da262bcd5249bb0.mp3",
    R =
        "https://cdn.discordapp.com/assets/content/82d771ff521a99ea8e26239d2f2e48ae847e39575bc5bce396739b430b8a6fda.mp3",
    y = [S, N, C, T, R];
function O(e) {
    return e !== j.gr.HOME && null == (0, j.UG)(e).statsScreen;
}
function M(e) {
    return null != (0, j.UG)(e).statsScreen;
}
var k = a(127639),
    L = a(287809),
    D = a(474090),
    P = a(817379);
function U() {
    return (0, m.yK)([u.A, L.default], () => {
        let { selectedCharacterTraits: e, stats: t, character: a } = u.A,
            r = (0, D.ki)(L.default.getCurrentUser());
        return Object.values(k.V).filter((i) => {
            let s = e[i];
            return null != s && (0, P.tS)(i, s, { stats: t, hasNitro: r, savedCharacter: a });
        });
    });
}
var G = a(964486),
    H = a(920495),
    F = a(407905),
    K = a(532294),
    B = a(739187);
function V(e) {
    let t = (0, I.Cz)(e);
    null != t && ((0, B.V)(), (0, s.P0)({ text: t, variant: "critical" }));
}
var z = a(299619),
    W = a(775602),
    q = a(818348),
    Y = a(11435);
function X(e) {
    let { isVisible: t } = e,
        a = b.useRef(null),
        r = (0, m.bG)([W.Ay], () => W.Ay.useReducedMotion),
        s = t && !r;
    return (
        b.useEffect(() => {
            let e = a.current;
            null != e && (s ? e.play().catch(q.tE) : e.pause());
        }, [s]),
        b.useEffect(() => {
            r && null != a.current && (a.current.currentTime = 1);
        }, [r]),
        (0, i.jsxs)("div", {
            className: Y.Tp,
            "aria-hidden": !0,
            children: [
                (0, i.jsx)(z.A, {
                    ref: a,
                    className: Y.Ki,
                    src: "https://cdn.discordapp.com/assets/content/a7a4300630ed2733eca4a8bb584c3086a66063d78e2f829faf465d96ff388a93.webm",
                    loop: !0,
                    muted: !0,
                    playsInline: !0,
                }),
                (0, i.jsx)("div", { className: Y.D7 }),
            ],
        })
    );
}
var Q = a(885619);
function Z(e) {
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
        className: _()(Q.button, "custom" !== m && Q[m], x),
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
function J(e) {
    let { className: t, ...a } = e;
    return (0, i.jsx)(Z, { ...a, className: _()(Q.shadow, t) });
}
var $ = a(475743),
    ee = a(765548),
    et = a(190240);
function ea(e) {
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
        h = (0, m.bG)([W.Ay], () => W.Ay.useReducedMotion),
        f = b.useRef(null),
        [p, x] = b.useState(t),
        [g, A] = b.useState(t),
        v = b.useRef(null),
        w = (0, $.p0)({ value: u, shouldUpdate: t }),
        I = (0, $.p0)({ value: o, shouldUpdate: t }),
        E = (0, ee.A)(() => {
            ((v.current = null), x(!1), d?.());
        }),
        j = t ? a : r,
        S = h ? 0 : j.delay,
        N = h ? 0 : j.duration,
        C = t && !p && !s,
        T = n && !h;
    b.useEffect(() => {
        if (!C) return;
        if (!T) return void x(!0);
        let e = setTimeout(() => x(!0), a.delay);
        return () => clearTimeout(e);
    }, [C, T, a.delay]);
    let R = b.useRef(!0);
    if (
        (b.useEffect(() => {
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
        b.useLayoutEffect(() => {
            t && p && !g && (f.current?.getBoundingClientRect(), A(!0));
        }, [t, p, g]),
        b.useEffect(
            () => () => {
                null != v.current && clearTimeout(v.current);
            },
            [],
        ),
        !p && !s)
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
        ref: f,
        className: _()(l, et.q, { [et.R]: !p }),
        style: O,
        inert: !t,
        "aria-hidden": !t,
        children: t || s ? u : w,
    });
}
var er = a(516749),
    ei = a(399667),
    es = a(468311),
    en = a(706121),
    ec = a(985747),
    ed = a(67915),
    el = a(118531);
let eo = {
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
function eu(e) {
    return { name: e, url: eo[e].url };
}
let eh = eu("tex_none"),
    ef = {
        [ec.N.NONE]: 0,
        [ec.N.CAP]: 7,
        [ec.N.ELVEN_HEADPIECE]: 1,
        [ec.N.HEADPHONES]: 2,
        [ec.N.TEDDY_BEANIE]: 13,
        [ec.N.PIERCINGS]: 4,
        [ec.N.HEADBAND]: 5,
        [ec.N.SUNGLASSES]: 6,
        [ec.N.BANANA_PEEL]: 3,
        [ec.N.LEAF]: 8,
        [ec.N.FIRE]: 9,
        [ec.N.HALO]: 10,
        [ec.N.BRAIN]: 11,
        [ec.N.TRAFFIC_CONE]: 12,
        [ec.N.CROWN]: 14,
    },
    eb = {
        [el.Z.NONE]: 0,
        [el.Z.ANGEL_WINGS]: 3,
        [el.Z.STICKERS]: 1,
        [el.Z.TOTE]: 2,
        [el.Z.WIZARD_STAFF]: 8,
        [el.Z.SKATEBOARD]: 4,
        [el.Z.DRAGON_WINGS]: 5,
        [el.Z.TAKE_OUT_BAG]: 6,
        [el.Z.PIXEL_WRENCH]: 7,
        [el.Z.MECH_WINGS]: 9,
        [el.Z.SWORD]: 10,
        [el.Z.DEVIANT_TAIL]: 11,
        [el.Z.MAGICAL_STAFF]: 12,
        [el.Z.BUTTERFLY_WINGS]: 13,
        [el.Z.CAT_BACKPACK]: 14,
    },
    ep = {
        [es.X.NONE]: eh,
        [es.X.BLAZE]: eu("tex_aura_04_blaze"),
        [es.X.BLOSSOM]: eu("tex_aura_01_blossom"),
        [es.X.PRISM]: eu("tex_aura_02_prism"),
        [es.X.SHOCK]: eu("tex_aura_03_shock"),
        [es.X.FATED]: eu("tex_aura_05_fated"),
        [es.X.LUSTER]: eu("tex_aura_06_luster"),
        [es.X.BUBBLES]: eu("tex_aura_07_bubbly"),
        [es.X.SPOOKY]: eu("tex_aura_08_spooky"),
        [es.X.CURSED]: eu("tex_aura_09_cursed"),
        [es.X.MAGNETIC]: eu("tex_aura_10_magnetic"),
        [es.X.RADIOACTIVE]: eu("tex_aura_11_radioactive"),
        [es.X.ELEMENTAL]: eu("tex_aura_12_elemental"),
        [es.X.SHIMMER]: eu("tex_aura_13_shimmer"),
        [es.X.WITCHY]: eu("tex_aura_14_witchy"),
    },
    e_ = {
        [en.R.ICY]: eu("tex_base_01_icy"),
        [en.R.CRIMSON]: eu("tex_base_02_crimson"),
        [en.R.CHROME]: eu("tex_base_03_chrome"),
        [en.R.GALACTIC]: eu("tex_base_04_galactic"),
        [en.R.FOREST]: eu("tex_base_05_forrest"),
        [en.R.MIDNIGHT]: eu("tex_base_06_mighnight"),
        [en.R.GLACIER]: eu("tex_base_07_glacier"),
        [en.R.ORANGE]: eu("tex_base_08_orange"),
        [en.R.PURPLE]: eu("tex_base_09_pink"),
        [en.R.RED]: eu("tex_base_10_red"),
        [en.R.COBALT]: eu("tex_base_11_cobalt"),
        [en.R.X_RAY]: eu("tex_base_12_x-ray"),
        [en.R.LIQUID]: eu("tex_base_13_liquid"),
        [en.R.BUTTER]: eu("tex_base_14_butter"),
        [en.R.IRIDESCENT]: eu("tex_base_15_iridescent"),
    },
    em = {
        [ed.r.NONE]: null,
        [ed.r.BADDIE_DEFAULT]: { riveId: 1, texture: eu("tex_outfit_01_baddie") },
        [ed.r.TRAVELER_DEFAULT]: { riveId: 10, texture: eu("tex_outfit_10_traveler") },
        [ed.r.STREAMER_DEFAULT]: { riveId: 3, texture: eu("tex_outfit_03_streamer") },
        [ed.r.CAMPER_DEFAULT]: { riveId: 4, texture: eu("tex_outfit_04_camper") },
        [ed.r.ATHLETE_DEFAULT]: { riveId: 5, texture: eu("tex_outfit_05_athlete") },
        [ed.r.COWPOKE_DEFAULT]: { riveId: 6, texture: eu("tex_outfit_06_cowpoke") },
        [ed.r.GOTH_DEFAULT]: { riveId: 7, texture: eu("tex_outfit_07_goth") },
        [ed.r.ASTRONAUT_DEFAULT]: { riveId: 8, texture: eu("tex_outfit_08_astronaut") },
        [ed.r.JESTER_DEFAULT]: { riveId: 9, texture: eu("tex_outfit_09_jester") },
        [ed.r.TRASH_CAN_DEFAULT]: { riveId: 2, texture: eu("tex_outfit_02_trash") },
        [ed.r.MAGE_DEFAULT]: { riveId: 11, texture: eu("tex_outfit_11_mage") },
        [ed.r.MECH_DEFAULT]: { riveId: 12, texture: eu("tex_outfit_12_mech") },
        [ed.r.KNIGHT_DEFAULT]: { riveId: 13, texture: eu("tex_outfit_13_knight") },
        [ed.r.MAGICAL_DEFAULT]: { riveId: 14, texture: eu("tex_outfit_14_magical") },
        [ed.r.BADDIE_MONOCHROME]: { riveId: 1, texture: eu("tex_outfit_01_baddie_monochrome") },
        [ed.r.BADDIE_VIOLET]: { riveId: 1, texture: eu("tex_outfit_01_baddie_violet") },
        [ed.r.BADDIE_PASTEL]: { riveId: 1, texture: eu("tex_outfit_01_baddie_pastel") },
        [ed.r.BADDIE_SUNSET]: { riveId: 1, texture: eu("tex_outfit_01_baddie_sunset") },
        [ed.r.TRAVELER_HAZE]: { riveId: 10, texture: eu("tex_outfit_10_traveler_haze") },
        [ed.r.TRAVELER_MOSS]: { riveId: 10, texture: eu("tex_outfit_10_traveler_moss") },
        [ed.r.TRAVELER_CHRONO]: { riveId: 10, texture: eu("tex_outfit_10_traveler_chrono") },
        [ed.r.TRAVELER_UMBER]: { riveId: 10, texture: eu("tex_outfit_10_traveler_umber") },
        [ed.r.STREAMER_FLAMES]: { riveId: 3, texture: eu("tex_outfit_03_streamer_flames") },
        [ed.r.STREAMER_STRIPES]: { riveId: 3, texture: eu("tex_outfit_03_streamer_stripes") },
        [ed.r.STREAMER_SMILEY]: { riveId: 3, texture: eu("tex_outfit_03_streamer_smiley") },
        [ed.r.STREAMER_VINTAGE]: { riveId: 3, texture: eu("tex_outfit_03_streamer_vintage") },
        [ed.r.CAMPER_PLAID]: { riveId: 4, texture: eu("tex_outfit_04_camper_plaid") },
        [ed.r.CAMPER_SWAMP]: { riveId: 4, texture: eu("tex_outfit_04_camper_swamp") },
        [ed.r.CAMPER_GLAMP]: { riveId: 4, texture: eu("tex_outfit_04_camper_glamp") },
        [ed.r.CAMPER_AMBER]: { riveId: 4, texture: eu("tex_outfit_04_camper_amber") },
        [ed.r.ATHLETE_BLOCKED]: { riveId: 5, texture: eu("tex_outfit_05_athlete_blocked") },
        [ed.r.ATHLETE_FADED]: { riveId: 5, texture: eu("tex_outfit_05_athlete_faded") },
        [ed.r.ATHLETE_CHECKERED]: { riveId: 5, texture: eu("tex_outfit_05_athlete_checkered") },
        [ed.r.ATHLETE_LINED]: { riveId: 5, texture: eu("tex_outfit_05_athlete_lined") },
        [ed.r.COWPOKE_ONYX]: { riveId: 6, texture: eu("tex_outfit_06_cowpoke_onyx") },
        [ed.r.COWPOKE_STEEL]: { riveId: 6, texture: eu("tex_outfit_06_cowpoke_steel") },
        [ed.r.COWPOKE_DENIM]: { riveId: 6, texture: eu("tex_outfit_06_cowpoke_denim") },
        [ed.r.COWPOKE_BLUSH]: { riveId: 6, texture: eu("tex_outfit_06_cowpoke_blush") },
        [ed.r.GOTH_SIREN]: { riveId: 7, texture: eu("tex_outfit_07_goth_siren") },
        [ed.r.GOTH_SERPENT]: { riveId: 7, texture: eu("tex_outfit_07_goth_serpent") },
        [ed.r.GOTH_RAVEN]: { riveId: 7, texture: eu("tex_outfit_07_goth_raven") },
        [ed.r.GOTH_VAMP]: { riveId: 7, texture: eu("tex_outfit_07_goth_vamp") },
        [ed.r.ASTRONAUT_STARDUST]: { riveId: 8, texture: eu("tex_outfit_08_astronaut_stardust") },
        [ed.r.ASTRONAUT_MARTIAN]: { riveId: 8, texture: eu("tex_outfit_08_astronaut_martian") },
        [ed.r.ASTRONAUT_SOLAR]: { riveId: 8, texture: eu("tex_outfit_08_astronaut_solar") },
        [ed.r.ASTRONAUT_COSMIC]: { riveId: 8, texture: eu("tex_outfit_08_astronaut_cosmic") },
        [ed.r.JESTER_CONFETTI]: { riveId: 9, texture: eu("tex_outfit_09_jester_confetti") },
        [ed.r.JESTER_CARNIVAL]: { riveId: 9, texture: eu("tex_outfit_09_jester_carnival") },
        [ed.r.JESTER_SUNRISE]: { riveId: 9, texture: eu("tex_outfit_09_jester_sunrise") },
        [ed.r.JESTER_NIGHTFALL]: { riveId: 9, texture: eu("tex_outfit_09_jester_nightfall") },
        [ed.r.TRASH_CAN_BLACKOUT]: { riveId: 2, texture: eu("tex_outfit_02_trash_blackout") },
        [ed.r.TRASH_CAN_CAUTION]: { riveId: 2, texture: eu("tex_outfit_02_trash_caution") },
        [ed.r.TRASH_CAN_BUBBLEGUM]: { riveId: 2, texture: eu("tex_outfit_02_trash_bubblegum") },
        [ed.r.TRASH_CAN_TOXIC]: { riveId: 2, texture: eu("tex_outfit_02_trash_toxic") },
        [ed.r.MAGE_SHADOW]: { riveId: 11, texture: eu("tex_outfit_11_mage_shadow") },
        [ed.r.MAGE_DUSK]: { riveId: 11, texture: eu("tex_outfit_11_mage_dusk") },
        [ed.r.MAGE_WILDWOOD]: { riveId: 11, texture: eu("tex_outfit_11_mage_wildwood") },
        [ed.r.MAGE_WINTER]: { riveId: 11, texture: eu("tex_outfit_11_mage_winter") },
        [ed.r.MECH_AERO]: { riveId: 12, texture: eu("tex_outfit_12_mech_aero") },
        [ed.r.MECH_VIPER]: { riveId: 12, texture: eu("tex_outfit_12_mech_viper") },
        [ed.r.MECH_ULTRAVIOLET]: { riveId: 12, texture: eu("tex_outfit_12_mech_ultraviolet") },
        [ed.r.MECH_SANDSTORM]: { riveId: 12, texture: eu("tex_outfit_12_mech_sandstorm") },
        [ed.r.KNIGHT_IRON]: { riveId: 13, texture: eu("tex_outfit_13_knight_iron") },
        [ed.r.KNIGHT_RUST]: { riveId: 13, texture: eu("tex_outfit_13_knight_rust") },
        [ed.r.KNIGHT_PETAL]: { riveId: 13, texture: eu("tex_outfit_13_knight_petal") },
        [ed.r.KNIGHT_GLACIER]: { riveId: 13, texture: eu("tex_outfit_13_knight_glacier") },
        [ed.r.MAGICAL_SAPPHIRE]: { riveId: 14, texture: eu("tex_outfit_14_magical_sapphire") },
        [ed.r.MAGICAL_AMETHYST]: { riveId: 14, texture: eu("tex_outfit_14_magical_amethyst") },
        [ed.r.MAGICAL_FROST]: { riveId: 14, texture: eu("tex_outfit_14_magical_frost") },
        [ed.r.MAGICAL_CITRINE]: { riveId: 14, texture: eu("tex_outfit_14_magical_citrine") },
    };
var ex = a(835517),
    eg = (((r = {}).SLOT = "slot"), (r.TRAIT = "trait"), (r.LAYOUT = "layout"), (r.ALWAYS = "always"), r);
let eA = /^tex_(aura|base_\d+|outfit)_/,
    ev = /^tex_(headwear|shoes|wearable|face)_(\d+)_/,
    ew = /^tex_face_([a-z]+)_/i,
    eI = {
        tex_env_labNight_bg: ["Desktop"],
        tex_env_labNight_bg_mobileLandscape: ["MobileLandscape"],
        tex_env_labNight_bg_mobilePortrait: ["MobilePortrait"],
        tex_env_labNight_fgLeft: ["Desktop"],
        tex_env_labNight_fgRight: ["Desktop"],
        tex_env_labNight_mgBottom: ["Desktop"],
        tex_env_labNight_mgBottomMobile: ["MobilePortrait", "MobileLandscape"],
        tex_env_labNight_sky: ["Desktop"],
    },
    eE = {
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
    ej = { columns: 1, rows: 1 },
    eS = { columns: 5, rows: 5 },
    eN = { columns: 6, rows: 8 },
    eC = {
        tex_aura_01_blossom: eS,
        tex_aura_02_prism: eS,
        tex_aura_03_shock: eS,
        tex_aura_04_blaze: eS,
        tex_aura_05_fated: eS,
        tex_aura_06_luster: eS,
        tex_aura_07_bubbly: eS,
        tex_aura_08_spooky: eS,
        tex_aura_09_cursed: eS,
        tex_aura_10_magnetic: eS,
        tex_aura_11_radioactive: eS,
        tex_aura_12_elemental: eS,
        tex_aura_13_shimmer: eS,
        tex_aura_14_witchy: eS,
        tex_wireframe_spritesheet: { columns: 12, rows: 6 },
        tex_wearable_10_sword_spritesheet: { columns: 5, rows: 4 },
        tex_wearable_11_deviantTail_smoke_active_spritesheet: eN,
        tex_wearable_11_deviantTail_smoke_idle_spritesheet: eN,
    },
    eT = [1, 1.25, 1.5, 1.75, 2, 3],
    eR = Math.min(...eT),
    ey = Math.max(...eT);
function eO(e, t) {
    let { url: a, width: r, height: i, widthAt1x: s } = eo[e];
    if (null == s) return a;
    let n = (t * s) / r,
        c = t >= Math.round(r / s);
    if (n >= 1 || c) return a;
    let { columns: d, rows: l } = eC[e] ?? ej,
        o = d * Math.round((r / d) * n),
        u = l * Math.round((i / l) * n);
    return `${a}?width=${o}&height=${u}`;
}
let eM = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14"],
    ek = eM.map((e) => `outfit${e}Image`),
    eL = {
        [j.s9.IDLE]: 0,
        [j.s9.INTRODUCTION]: 1,
        [j.s9.FACE]: 2,
        [j.s9.OUTFIT]: 3,
        [j.s9.HEADWEAR]: 4,
        [j.s9.SHOES]: 5,
        [j.s9.WEARABLE]: 6,
        [j.s9.AURA]: 7,
        [j.s9.ASSEMBLED]: 8,
        [j.s9.FINALIZE]: 8,
        [j.s9.SUMMARY]: 8,
    },
    eD = {
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
    eP = { ...eD.MobilePortrait, gradientTopPosition: 25, gradientBottomPosition: 90 };
var eU = a(722872),
    eG = a(574381);
let eH = new Set([1]),
    eF = Object.keys(eo).map((e) => ({
        name: e,
        role: (function (e) {
            if (eA.test(e)) return { type: "slot" };
            let t = eI[e];
            if (null != t) return { type: "layout", layouts: t };
            let a = ev.exec(e);
            if (null != a) return { type: "trait", path: `${a[1]}ID`, riveId: Number(a[2]) };
            let r = ew.exec(e),
                i = null != r ? eE[r[1].toLowerCase()] : void 0;
            return null != i ? { type: "trait", path: "faceID", riveId: i } : { type: "always" };
        })(e),
        swapKey: (0, eG.un)() ? `${e}-${eo[e].riveId}` : e,
    }));
function eK(e) {
    let { faceID: t, headwearID: a, shoesID: r, wearableID: i, chapterID: s, device: n } = e;
    return b.useMemo(() => {
        var e;
        let c;
        return (
            (e = { faceID: t, headwearID: a, shoesID: r, wearableID: i }),
            (c = new Set()),
            eF.forEach((t) => {
                let { name: a, role: r } = t;
                switch (r.type) {
                    case eg.SLOT:
                        break;
                    case eg.TRAIT:
                        e[r.path] === r.riveId && c.add(a);
                        break;
                    case eg.LAYOUT:
                        r.layouts.includes(n) && c.add(a);
                        break;
                    case eg.ALWAYS:
                        ("tex_wireframe_spritesheet" !== a || eH.has(s)) && c.add(a);
                }
            }),
            c
        );
    }, [t, a, r, i, s, n]);
}
var eB = a(435558);
let eV = (0, a(196765).v)(() => ({ hoveredOption: void 0 })),
    ez = (0, eB.debounce)((e) => eV.setState({ hoveredOption: e }), 250);
function eW(e) {
    let { hoveredOption: t, isDelayed: a = !1 } = e;
    a ? ez(t) : (ez.cancel(), eV.setState({ hoveredOption: t }));
}
(a(393431), a(532706), a(42231), a(232424), a(949626), a(767709), a(65162));
var eq = a(971940);
async function eY(e) {
    try {
        let t = await fetch(e);
        if (!t.ok) return null;
        return await (0, eq.decodeImage)(new Uint8Array(await t.arrayBuffer()));
    } catch {
        return null;
    }
}
var eX = a(168862);
function eQ(e) {
    let t,
        a,
        { stage: r, isHidden: s } = e,
        n = (0, m.bG)([d.A], () => {
            let e = d.A.windowSize();
            return (function (e, t) {
                let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (a) return eR;
                let r = Math.max(e / 945, t / 532) * (0, ex.A)();
                return eT.find((e) => e >= r) ?? ey;
            })(e.width, e.height);
        }),
        [c, l] = b.useState(n);
    n > c && l(n);
    let o =
            ((t = (0, m.bG)([u.A], () => u.A.selectedCharacterTraits)),
            (a = eV((e) => e.hoveredOption)),
            b.useMemo(() => (null != a ? { ...t, [a.trait]: a.optionId } : t), [t, a])),
        h = (0, m.bG)([W.Ay], () => W.Ay.useReducedMotion),
        f = b.useMemo(
            () =>
                (function (e) {
                    let { stage: t, isHidden: a, traits: r, layout: i, textureScale: s } = e,
                        { base: n, shoes: c, outfit: d, face: l, hat: o, wearable: u, aura: h } = (0, P.XI)(r),
                        f = em[d],
                        b = {};
                    return (
                        eM.forEach((e) => {
                            let t = Number(e) === f?.riveId ? f.texture : eh;
                            b[`outfit${e}Image`] = eO(t.name, s);
                        }),
                        {
                            device: i,
                            chapterID: a && t === j.s9.FACE ? eL[j.s9.IDLE] : eL[t],
                            faceID: l,
                            shoesID: c,
                            headwearID: ef[o],
                            wearableID: eb[u],
                            outfitID: f?.riveId ?? 0,
                            auraImage: eO(ep[h].name, s),
                            baseColorImage: eO(e_[n].name, s),
                            ...("MobilePortrait" === i && t === j.s9.INTRODUCTION ? eP : eD[i]),
                            ...b,
                        }
                    );
                })({ stage: r, isHidden: s, traits: o, layout: "Desktop", textureScale: c }),
            [r, s, o, c],
        ),
        [p, x] = b.useState(null),
        g = (function (e) {
            let { visibleDataBinding: t, requestedDataBinding: a, textureScale: r } = e,
                i = (function (e) {
                    let { visibleTextureNames: t, requestedTextureNames: a } = e,
                        [r, i] = b.useState(t),
                        [s, n] = b.useState(t);
                    if (t !== s) {
                        n(t);
                        let e = new Set(r);
                        (t.forEach((t) => e.add(t)), i(e));
                    }
                    return (
                        b.useEffect(() => {
                            let e = setTimeout(() => i(t), 600);
                            return () => clearTimeout(e);
                        }, [t]),
                        b.useMemo(() => new Set([...r, ...a]), [r, a])
                    );
                })({ visibleTextureNames: eK(t), requestedTextureNames: eK(a) });
            return b.useMemo(() => {
                let e;
                return (
                    (e = {}),
                    eF.forEach((t) => {
                        let { name: a, swapKey: s } = t,
                            n = i.has(a) ? eO(a, r) : eh.url;
                        e[s] = { source: { uri: n } };
                    }),
                    e
                );
            }, [i, r]);
        })({ visibleDataBinding: p ?? f, requestedDataBinding: f, textureScale: c }),
        {
            assetLoader: A,
            onLoad: v,
            textureManager: w,
        } = (function () {
            let e = b.useRef(new Map()),
                [t, a] = b.useState(null),
                r = b.useCallback((t) => !!t.isImage && t.name in eo && (e.current.set(t.name, t), !0), []);
            return {
                assetLoader: r,
                onLoad: b.useCallback(() => {
                    (a(e.current), (e.current = new Map()));
                }, []),
                textureManager: b.useMemo(
                    () =>
                        null == t
                            ? null
                            : {
                                  load: eY,
                                  swap: (e) => e.forEach((e, a) => t.get(a)?.setRenderImage(e)),
                                  release: (e) => e.forEach((e) => e.unref()),
                              },
                    [t],
                ),
            };
        })(),
        I = b.useRef(null),
        E = b.useRef(s);
    b.useEffect(() => {
        ((E.current = s), s ? I.current?.pause() : I.current?.play());
    }, [s]);
    let S = b.useCallback(() => {
            (v(), E.current && I.current?.pause());
        }, [v]),
        N = (function (e) {
            let { textureManager: t, referencedAssets: a, initialReferencedAssets: r } = e,
                i = b.useRef(new Map()),
                [s, n] = b.useState(r);
            return (
                b.useEffect(() => {
                    i.current = new Map(
                        Object.entries(r ?? {}).map((e) => {
                            let [t, { source: a }] = e;
                            return [t, a.uri];
                        }),
                    );
                }, [t, r]),
                b.useEffect(() => {
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
        })({ textureManager: w, referencedAssets: g }),
        {
            dataBinding: C,
            isOutfitPreloaded: T,
            onDataBindingChange: R,
        } = (function (e) {
            var t;
            let { visibleDataBinding: a, requestedDataBinding: r } = e,
                [i, s] = b.useState({}),
                n = (t = r.outfitID) > 0 ? ek[t - 1] : null,
                c = null != n ? r[n] : void 0,
                d = null == n || a?.[n] === c || i[n] === c,
                l = a ?? r;
            return {
                dataBinding: b.useMemo(() => (null == n || l[n] === c ? l : { ...l, [n]: c }), [l, n, c]),
                isOutfitPreloaded: d,
                onDataBindingChange: b.useMemo(() => {
                    let e = {};
                    return (
                        ek.forEach((t) => {
                            e[t] = (e) => {
                                s((a) => (a[t] === e ? a : { ...a, [t]: e }));
                            };
                        }),
                        e
                    );
                }, []),
            };
        })({ visibleDataBinding: p, requestedDataBinding: f });
    N && T && p !== f && x(f);
    let y = (function (e) {
            let { stage: t, dataBinding: a } = e,
                r = (0, m.bG)([W.Ay], () => W.Ay.useReducedMotion),
                i = t === j.s9.INTRODUCTION && !r,
                [s, n] = b.useState(+!i),
                [c, d] = b.useState(i);
            return (
                i !== c && (d(i), n(+!i)),
                b.useEffect(() => {
                    if (!i) return;
                    let e = Date.now() + 1800,
                        t = requestAnimationFrame(function a() {
                            let r = Math.max(Math.min(Date.now() - e, 1e3), 0);
                            (n((0, eU.easeOutCubic)(r, 0, 1, 1e3)), r >= 1e3 || (t = requestAnimationFrame(a)));
                        });
                    return () => cancelAnimationFrame(t);
                }, [i]),
                b.useMemo(
                    () =>
                        1 === s
                            ? a
                            : {
                                  ...a,
                                  gradientTopOpacity: a.gradientTopOpacity * s,
                                  gradientBottomOpacity: a.gradientBottomOpacity * s,
                                  gradientLeftOpacity: a.gradientLeftOpacity * s,
                                  gradientRightOpacity: a.gradientRightOpacity * s,
                              },
                    [a, s],
                )
            );
        })({ stage: r, dataBinding: C }),
        O = b.useMemo(() => ({ ...y, mobileLift: 0, reducedMotion: h }), [y, h]);
    return (0, i.jsx)("div", {
        role: "img",
        "aria-label": (0, ei.O)(o),
        className: _()(eX.dw, { [eX.RK]: null != p }),
        children: (0, i.jsx)(er.W, {
            artboard: "AB_Master",
            stateMachine: "SM_Master",
            fit: "layout",
            alignment: "center",
            ref: I,
            assetLoader: A,
            onLoad: S,
            listenOnDocumentBody: !h,
            withReducedMotion: "play",
            dataBinding: O,
            onDataBindingChange: R,
            className: eX.lW,
        }),
    });
}
let eZ = { delay: 0, duration: 350 },
    eJ = { delay: 35, duration: 125 },
    e$ = { delay: 200, duration: 125 },
    e0 = { delay: 175, duration: 175 },
    e1 = { delay: 0, duration: 175 },
    e5 = { delay: 0, duration: 0 },
    e6 = { delay: eZ.delay + eZ.duration, duration: 0 },
    e2 = e$.delay + 500;
var e3 = a(840527);
function e4(e) {
    let { stage: t, isCovered: a, className: r, children: s } = e,
        [n, c] = b.useState(a);
    !a && n && c(!1);
    let d = a && !n,
        { isMountDelayed: l } = (function (e) {
            let [t, a] = b.useState(e);
            return (
                !e && t && a(!1),
                b.useEffect(() => {
                    if (!t) return;
                    let e = setTimeout(() => a(!1), e2);
                    return () => clearTimeout(e);
                }, [t]),
                { isMountDelayed: t }
            );
        })(a),
        o = (0, $.p0)({ value: t, shouldUpdate: !d }) ?? t,
        u = (0, $.p0)({ value: s, shouldUpdate: !d });
    return (0, i.jsxs)(ea, {
        visible: !a,
        enter: e5,
        exit: e6,
        keepMounted: !0,
        onExitComplete: () => c(!0),
        className: r,
        children: [
            (0, i.jsx)("div", { className: e3.q, children: !l && (0, i.jsx)(eQ, { stage: o, isHidden: n }) }),
            null != u && (0, i.jsx)("div", { className: e3.q, children: u }),
        ],
    });
}
function e8(e) {
    let { animatedSrc: t, staticSrc: a, className: r } = e,
        s = (0, m.bG)([W.Ay], () => W.Ay.useReducedMotion);
    return (0, i.jsx)("img", { src: s ? a : t, alt: "", className: r });
}
var e7 = a(740281),
    e9 = a(766089),
    te = a(767988);
let tt = { animatedSrc: e9.A, staticSrc: te.A };
function ta(e) {
    let { activeRoute: t } = e,
        { animatedSrc: a, staticSrc: r } = (0, m.cf)(
            [u.A],
            () => {
                switch (t) {
                    case j.gr.SUMMARY:
                    case j.gr.SHARE:
                        let e = (0, w.o)(u.A.character),
                            { clydeLogoImage: a, clydeLogoStaticImage: r } = (0, w.j)(e);
                        return { animatedSrc: a, staticSrc: r };
                    default:
                        return tt;
                }
            },
            [t],
        );
    return (0, i.jsx)(e8, { animatedSrc: a, staticSrc: r, className: e7.w });
}
var tr = a(756408);
function ti() {
    let e = b.useRef(null);
    return (
        b.useLayoutEffect(() => {
            let t = e.current;
            null != t && ((t.tabIndex = -1), t.focus({ preventScroll: !0 }));
        }, []),
        e
    );
}
var ts = a(834730),
    tn = a(534514),
    tc = a(504736);
function td(e) {
    let { children: t, className: a, ...r } = e;
    return (0, i.jsx)(ts.E, { ...r, className: _()(tc.Q, a), color: "none", children: t });
}
function tl(e) {
    let { children: t, className: a, ...r } = e,
        s = ti();
    return (0, i.jsx)(tn.D, { ...r, ref: s, className: _()(tc.Q, a), color: "none", children: t });
}
var to = a(271427);
function tu(e) {
    let { children: t, className: a, style: r } = e;
    return (0, i.jsx)(td, { tag: "span", variant: "mono-md/bold", className: _()(to.T, a), style: r, children: t });
}
var th = a(852717),
    tf = a(792996),
    tb = a(383931);
function tp(e) {
    let { percent: t } = e;
    return (0, i.jsx)(tu, {
        className: tb.t,
        children: tf.intl.formatToPlainString(th.default.fOGKA4, { percent: t }),
    });
}
var t_ = a(646692);
function tm(e) {
    let { icon: t, value: a, topPercent: r, children: s } = e,
        n = ti(),
        c =
            null != r
                ? tf.intl.formatToPlainString(th.default.USo6cU, { value: a, label: s, percent: r })
                : tf.intl.formatToPlainString(th.default["+CCx/D"], { value: a, label: s });
    return (0, i.jsxs)("div", {
        ref: n,
        role: "heading",
        "aria-level": 2,
        children: [
            (0, i.jsxs)("div", {
                className: t_.dJ,
                "aria-hidden": !0,
                children: [
                    null != r && (0, i.jsx)(tp, { percent: r }),
                    (0, i.jsxs)("div", {
                        className: t_.p,
                        children: [
                            (0, i.jsx)(td, {
                                variant: "heading-xxl/medium",
                                className: t_.Uq,
                                children: a.toLocaleString(tf.intl.currentLocale),
                            }),
                            (0, i.jsxs)("div", {
                                className: t_.Pf,
                                children: [
                                    (0, i.jsx)(t, { size: "xs", color: "currentColor" }),
                                    (0, i.jsx)(td, { variant: "heading-xs/semibold", className: t_.QK, children: s }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(g.A, { children: c }),
        ],
    });
}
var tx = a(303453);
let tg = {
    [I.v7.FACE]: th.default.q8GA6h,
    [I.v7.OUTFIT]: th.default["xGh/fq"],
    [I.v7.OUTFIT_COLOR]: th.default.IgiEDV,
    [I.v7.HAT]: th.default.QqeBEO,
    [I.v7.WEARABLE]: th.default.l57q3i,
    [I.v7.AURA]: th.default["fYp+yq"],
    [I.v7.SHOES]: th.default.BaI4wD,
    [I.v7.BASE]: th.default.SMXZXX,
};
function tA(e) {
    let { customizationOption: t, earnedCount: a, totalCount: r } = e;
    return (0, i.jsx)(ts.E, {
        variant: "body-md/medium",
        color: "text-subtle",
        className: tx.k,
        children: tf.intl.format(tg[t], {
            earnedCount: a,
            totalCount: r,
            countHook: (e, t) =>
                (0, i.jsx)(td, { tag: "span", variant: "mono-md/bold", className: tx.U, children: e }, t),
        }),
    });
}
let tv =
    "https://cdn.discordapp.com/assets/content/48cbcb920dfd15e45e7fe3f297ede63a7891cb0eee9fc44f27053d05d2c6b5ca.mp3";
var tw = a(11044);
function tI(e) {
    let { isMuted: t, volume: a } = (0, m.cf)([u.A], () => ({ isMuted: u.A.isMuted, volume: u.A.volume })),
        r = b.useRef(null);
    return (
        b.useEffect(() => {
            r.current = new Audio(e);
        }, [e]),
        b.useEffect(() => {
            null != r.current && ((r.current.muted = t), (r.current.volume = a));
        }, [t, a]),
        b.useCallback(() => {
            let e = r.current;
            t || 0 === a || null == e || ((e.volume = a), (e.currentTime = 0), e.play());
        }, [t, a])
    );
}
var tE = a(28863),
    tj = a(793574),
    tS = a(778705),
    tN = a(461872),
    tC = a(647093);
function tT(e) {
    let { rarity: t } = e,
        a = b.useMemo(() => ({ "--custom-checkpoint-rarity-background": K.Zy[t] }), [t]);
    return (0, i.jsx)(tu, { className: tC.q, style: a, children: tf.intl.string(K.iG[t]) });
}
var tR = a(829870);
function ty(e) {
    let { asset: t, hideRarity: a } = e,
        r =
            t.status === tN.eP.NITRO_LOCKED
                ? tf.intl.format(th.default.E6AfCb, {
                      subscribeHook: (e, t) =>
                          (0, i.jsx)(
                              tE.Anchor,
                              {
                                  onClick: () =>
                                      (0, tS.A)({ analyticsLocations: [tj.A.CHECKPOINT, tj.A.CHECKPOINT_TRAIT] }),
                                  children: e,
                              },
                              t,
                          ),
                  })
                : (0, I.Oq)(t);
    return (0, i.jsxs)("div", {
        className: tR.z,
        children: [
            (0, i.jsxs)("div", {
                className: tR.D,
                children: [
                    (0, i.jsx)(ts.E, {
                        tag: "div",
                        variant: "heading-sm/semibold",
                        color: "text-strong",
                        children: t.getName(),
                    }),
                    !a && null != t.rarity && (0, i.jsx)(tT, { rarity: t.rarity }),
                ],
            }),
            null != r && (0, i.jsx)(ts.E, { variant: "body-md/medium", color: "text-subtle", children: r }),
        ],
    });
}
var tO = a(218546),
    tM = a(646514),
    tk = a(403581),
    tL = a(559265);
function tD(e) {
    let { rarity: t } = e,
        a = b.useMemo(() => ({ "--custom-checkpoint-rarity-color": K.Zy[t] }), [t]);
    return t === tO.K.NITRO
        ? (0, i.jsx)(tk.NitroWheelIcon, { size: "custom", color: tM.A.colors.ICON_SUBTLE, className: tL.d7 })
        : (0, i.jsx)("span", { className: tL.oG, style: a });
}
function tP(e) {
    let {
            traitOption: t,
            groupName: a,
            isSelected: r,
            hideRarity: s,
            onSelectOption: n,
            onHoverOption: c,
            disabled: d = !1,
        } = e,
        { trait: l, optionId: o, rarity: u, asset: h, status: f } = t,
        p = f === tN.eP.LOCKED,
        m = b.useMemo(() => {
            if (null == h) return null;
            let e = Math.round(80 * (0, ex.A)());
            return `${h}?width=${e}&height=${e}`;
        }, [h]);
    return (0, i.jsxs)("label", {
        className: _()(tL.uK, { [tL.wH]: r, [tL.dv]: (0, I.C5)(t), [tL.xt]: p, [tL.Ns]: f === tN.eP.NITRO_LOCKED }),
        onMouseEnter: () => c(t),
        onFocus: function () {
            c(t);
        },
        children: [
            (0, i.jsx)(g.A, {
                children: (0, i.jsx)("input", {
                    type: "radio",
                    name: a,
                    checked: r,
                    disabled: d,
                    "aria-disabled": d ? void 0 : p,
                    onChange: function () {
                        d || p || n(l, o);
                    },
                    "aria-label": (0, I.v2)(t, { skipRarity: s, skipDescription: !1 }),
                }),
            }),
            null != m && (0, i.jsx)("img", { src: m, alt: "", draggable: !1, className: tL.Sl }),
            !s && null != u && (0, i.jsx)(tD, { rarity: u }),
        ],
    });
}
var tU = a(509063),
    tG = a(974862),
    tH = a(142389),
    tF = a(211235),
    tK = a(230532),
    tB = a(110601),
    tV = a(917970);
function tz(e) {
    let {
            customizationOption: t,
            traitOptions: a,
            selectedOption: r,
            onSelectOption: s,
            disabled: n = !1,
            children: c,
        } = e,
        d = b.useId(),
        l = !(0, I.Ux)(t),
        o = eV((e) => e.hoveredOption ?? r),
        u = tI(
            "https://cdn.discordapp.com/assets/content/fc5527a1a369d8982c6e6fa588f732c7c5364ff00ddd0cf51646f05ad423af36.mp3",
        ),
        h = tI(tv);
    ((0, G.Ay)(() => {
        [tG, tV, tH, tF, tB, tK].forEach((e) => (0, tw.N)(e));
    }),
        b.useEffect(() => () => eW({ hoveredOption: void 0 }), [t]));
    let f = b.useCallback(
            (e, t) => {
                (eW({ hoveredOption: void 0 }), h(), s(e, t));
            },
            [s, h],
        ),
        p = b.useCallback(
            (e) => {
                (u(), eW({ hoveredOption: e.optionId !== r?.optionId ? e : void 0, isDelayed: !0 }));
            },
            [u, r],
        );
    return (0, i.jsxs)("div", {
        className: tU.Nz,
        children: [
            (0, i.jsxs)("div", {
                className: tU.fF,
                children: [
                    c,
                    (0, i.jsx)("div", {
                        onMouseLeave: () => eW({ hoveredOption: void 0 }),
                        children: (0, i.jsx)("div", {
                            role: "radiogroup",
                            "aria-label": (0, I.cq)(t),
                            className: tU.Vg,
                            onBlur: (e) => {
                                e.currentTarget.contains(e.relatedTarget) || eW({ hoveredOption: void 0 });
                            },
                            children: a.map((e) =>
                                (0, i.jsx)(
                                    tP,
                                    {
                                        traitOption: e,
                                        groupName: d,
                                        isSelected: e.optionId === r?.optionId,
                                        hideRarity: l,
                                        onSelectOption: f,
                                        onHoverOption: p,
                                        disabled: n,
                                    },
                                    e.optionId,
                                ),
                            ),
                        }),
                    }),
                ],
            }),
            null != o && (0, i.jsx)(ty, { asset: o, hideRarity: l }),
        ],
    });
}
var tW = a(51104);
function tq(e) {
    let { rarity: t, isSavedOption: a, visibleRarities: r, hasNitroSubscription: i } = e;
    return a
        ? tN.eP.UNLOCKED
        : null == t || r.has(t)
          ? t !== tO.K.NITRO || i
              ? tN.eP.UNLOCKED
              : tN.eP.NITRO_LOCKED
          : tN.eP.LOCKED;
}
function tY(e, t) {
    return e === I.v7.OUTFIT ? (null != t ? (0, P.FA)(t) : void 0) : t;
}
function tX(e) {
    let { customizationOption: t } = e,
        {
            optionIds: a,
            selectedOptionId: r,
            savedOptionId: i,
            onSelectOption: s,
        } = (function (e) {
            let { customizationOption: t, onSelectOption: a } = e,
                r = I.hw[t],
                { selectedOptionId: i, savedOptionId: s } = (0, m.cf)([u.A], () => ({
                    selectedOptionId: tY(t, u.A.selectedCharacterTraits[r]),
                    savedOptionId: tY(t, u.A.character?.[r]),
                })),
                n = b.useCallback(
                    (e, t) => {
                        if (t === i) return;
                        let r = (0, P.$C)(e, t),
                            n = tq({
                                rarity: r,
                                isSavedOption: s === t,
                                visibleRarities: (0, P.mf)(e, u.A.stats),
                                hasNitroSubscription: (0, D.ki)(L.default.getCurrentUser()),
                            });
                        ((0, f.dw)(e, t, n, r), a(e, t));
                    },
                    [a, s, i],
                );
            return {
                optionIds: (function (e, t) {
                    switch (e) {
                        case I.v7.OUTFIT:
                            return P.ps;
                        case I.v7.OUTFIT_COLOR:
                            return (0, P.wD)(t ?? ed.r.NONE);
                        default:
                            return;
                    }
                })(t, i),
                selectedOptionId: i,
                savedOptionId: s,
                onSelectOption: n,
            };
        })({ customizationOption: t, onSelectOption: o.IB }),
        {
            traitOptions: n,
            availableTraitOptions: c,
            totalCount: d,
            earnedCount: l,
        } = (function (e) {
            let { customizationOption: t, savedOptionId: a, rarityOrder: r, optionIds: i } = e,
                s = (0, m.bG)([u.A], () => u.A.stats),
                n = (0, m.bG)([L.default], () => (0, D.ki)(L.default.getCurrentUser())),
                c = b.useMemo(() => (0, I.p8)(r), [r]);
            return b.useMemo(() => {
                let e = I.hw[t],
                    r = t === I.v7.OUTFIT_COLOR ? tW.x : tW.$[e],
                    d = (0, P.mf)(e, s),
                    l = [],
                    o = 0,
                    u = 0;
                for (let t of i ?? P.Rk[e]) {
                    let i = (0, P.$C)(e, t),
                        s = tq({ rarity: i, isSavedOption: a === t, visibleRarities: d, hasNitroSubscription: n }),
                        c = s === tN.eP.UNLOCKED && (i !== tO.K.NITRO || n);
                    (null != i && o++,
                        null != i && c && u++,
                        l.push({
                            trait: e,
                            optionId: t,
                            asset: P.qM[e][t]?.thumbnail,
                            rarity: i,
                            status: s,
                            getName: () => {
                                let e = r[t];
                                return null != e ? tf.intl.string(e) : "";
                            },
                        }));
                }
                l.sort(c);
                let h = l.filter((e) => {
                    let { status: t } = e;
                    return t !== tN.eP.LOCKED;
                });
                return { traitOptions: l, availableTraitOptions: h, totalCount: o, earnedCount: u };
            }, [t, n, i, c, a, s]);
        })({ customizationOption: t, savedOptionId: i, rarityOrder: K.FG, optionIds: a }),
        h = b.useMemo(
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
            b.useEffect(() => {
                i || null == s || n || r(s.trait, s.optionId);
            }, [s, n, r, i]);
        })({ availableTraitOptions: c, selectedOptionId: r, onSelectOption: o.IB }),
        { traitOptions: n, selectedOption: h, totalCount: d, earnedCount: l, onSelectOption: s }
    );
}
function tQ(e) {
    let { customizationOption: t } = e,
        {
            traitOptions: a,
            selectedOption: r,
            totalCount: s,
            earnedCount: n,
            onSelectOption: c,
        } = tX({ customizationOption: t });
    return (0, i.jsx)(tz, {
        customizationOption: t,
        traitOptions: a,
        selectedOption: r,
        onSelectOption: c,
        children: (0, i.jsx)(tA, { customizationOption: t, earnedCount: n, totalCount: s }),
    });
}
var tZ = a(71678);
function tJ(e) {
    let { children: t, className: a } = e;
    return (0, i.jsx)("div", { className: _()(tZ.n, a), children: t });
}
function t$() {
    let e = (0, m.bG)([u.A], () => u.A.stats?.emojis);
    return (0, i.jsxs)(tJ, {
        children: [
            (0, i.jsx)(tm, {
                icon: tr.EmojiSlightlySmilingFaceIcon,
                value: Math.round(e?.numEmojisSent ?? 0),
                topPercent: (0, F.bD)(e?.numEmojisSentPercentile),
                children: tf.intl.string(th.default.ZTDCIv),
            }),
            (0, i.jsx)(tQ, { customizationOption: I.v7.SHOES }),
        ],
    });
}
var t0 = a(265872),
    t1 = a(320448);
let t5 = [I.v7.BASE, I.v7.OUTFIT_COLOR];
var t6 = a(315710),
    t2 = a(444927);
let t3 = {
        "--custom-checkpoint-game-art-width": "clamp(135px, 17.5vh, 180px)",
        "--custom-checkpoint-game-full-art-width": 180,
        "--custom-checkpoint-game-full-shell-width": 196,
        "--custom-checkpoint-game-full-shell-offset": 2,
    },
    t4 = {
        "--custom-checkpoint-game-art-width": "clamp(165px, 21.5vh, 220px)",
        "--custom-checkpoint-game-full-art-width": 220,
        "--custom-checkpoint-game-full-shell-width": 235.5,
        "--custom-checkpoint-game-full-shell-offset": 2,
    },
    t8 = {
        "--custom-checkpoint-primary": K.Kr,
        "--custom-checkpoint-dark-cyan": K.ow,
        "--custom-checkpoint-button-border": K.ow,
        "--custom-checkpoint-button-shadow": K.zj,
        "--custom-checkpoint-white": K.Ve,
        "--custom-checkpoint-guild-card-background": K.LM,
        "--custom-checkpoint-background-gradient-start": K.bI,
    };
var t7 = a(580814);
function t9(e) {
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
        u = b.useRef([]),
        h = (0, t2.A)(() => Math.max(a.indexOf(r), 0)),
        [f, p] = b.useState(null);
    function m(e) {
        let t = (e + a.length) % a.length;
        (p(t), u.current[t]?.focus());
    }
    return (
        (0, t6.tj)(t, { disable: !d, disableReturn: !0 }),
        b.useEffect(() => {
            d && u.current[h]?.focus();
        }, [h, d]),
        (0, i.jsx)("div", {
            ref: t,
            role: "menu",
            tabIndex: -1,
            "aria-label": tf.intl.string(th.default.Zl5vPW),
            className: t7.MK,
            style: t8,
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
                        className: _()(t7.AS, { [t7.dT]: f === t }),
                        onFocus: () => p(t),
                        onMouseEnter: (e) => {
                            (p(t), d && e.currentTarget.focus());
                        },
                        onClick: () => n(e),
                        children: (0, i.jsx)(ts.E, {
                            tag: "span",
                            variant: "heading-sm/semibold",
                            color: "none",
                            children: (0, I.cq)(e),
                        }),
                    },
                    e,
                ),
            ),
        })
    );
}
var ae = a(421773);
let at = [I.v7.AURA, I.v7.WEARABLE, I.v7.SHOES, I.v7.HAT, I.v7.OUTFIT, I.v7.FACE];
var aa = a(769909);
function ar(e) {
    var t;
    let a,
        r,
        s,
        {
            activeCustomizationOption: n,
            onSelectOption: c,
            tabIdPrefix: d,
            panelId: l,
            blockedTrait: o,
            disabled: h = !1,
        } = e,
        f =
            ((a = (0, m.yK)([u.A], () => {
                let e = u.A.selectedCharacterTraits[k.V.OUTFIT];
                return null == e || (0, P.nb)(k.V.OUTFIT, e) ? t5.filter((e) => e !== I.v7.OUTFIT_COLOR) : t5;
            })),
            (r = n === I.v7.OUTFIT_COLOR && !a.includes(I.v7.OUTFIT_COLOR)),
            b.useEffect(() => {
                r && c(I.v7.BASE);
            }, [r, c]),
            a),
        {
            moreTabRef: p,
            menuRef: x,
            isMoreOptionActive: A,
            moreTabOption: v,
            isMenuOpen: w,
            focusMenu: E,
            openMenu: j,
            closeMenu: S,
            handleRequestClose: N,
            selectMenuOption: C,
            onMouseEnter: T,
            onMouseLeave: R,
        } = (function (e) {
            let { activeCustomizationOption: t, onSelectOption: a, blockedTrait: r, disabled: i } = e,
                s = b.useRef(null),
                n = b.useRef(null),
                c = at.includes(t),
                [d, l] = b.useState(c ? t : null);
            c && d !== t && l(t);
            let o = i || null != r,
                [u, h] = b.useState(!1),
                {
                    isHovered: f,
                    setIsHovered: p,
                    onMouseEnter: _,
                    onMouseLeave: m,
                    cancelTimers: x,
                } = (0, ae.A)(100, 300);
            function g() {
                (x(), p(!1), h(!1));
            }
            return {
                moreTabRef: s,
                menuRef: n,
                isMoreOptionActive: c,
                moreTabOption: d,
                isMenuOpen: !o && f,
                focusMenu: u,
                openMenu: function () {
                    null != r ? V(r) : i || (x(), h(!0), p(!0));
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
                onMouseEnter: o ? void 0 : _,
                onMouseLeave: u ? void 0 : m,
            };
        })({ activeCustomizationOption: n, onSelectOption: c, blockedTrait: o, disabled: h }),
        y = A ? "more" : n,
        { tabListRef: O, focusAdjacentTab: M } =
            ((t = [...f, "more"]),
            {
                tabListRef: (s = b.useRef(null)),
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
        L = b.useId(),
        D = null != o ? L : void 0,
        U = null != v ? (0, I.cq)(v) : null;
    function G(e) {
        null != o ? V(o) : h || (c(e), S());
    }
    function H(e) {
        "more" !== e ? G(e) : null != v && G(v);
    }
    function F(e) {
        "more" === e && (A || null == v) ? j() : H(e);
    }
    function K(e) {
        let t = e === y;
        return {
            id: `${d}-${e}`,
            type: "button",
            role: "tab",
            "aria-selected": t,
            "aria-controls": t ? l : void 0,
            "aria-disabled": null != o,
            "aria-describedby": D,
            disabled: h,
            tabIndex: t ? 0 : -1,
            onClick: () => F(e),
            onKeyDown: (t) =>
                (function (e, t) {
                    switch (e.key) {
                        case "Enter":
                            (e.preventDefault(), e.stopPropagation(), F(t));
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
                            (e.preventDefault(), e.stopPropagation(), S(), H(M(t, e.key)));
                    }
                })(t, e),
            onKeyUp: (t) => {
                " " === t.key && (t.preventDefault(), t.stopPropagation(), F(e));
            },
            className: _()(aa.Mf, { [aa.OS]: "more" === e, [aa.vu]: t }),
        };
    }
    return (0, i.jsxs)("div", {
        ref: O,
        role: "tablist",
        "aria-label": tf.intl.string(th.default.Zl5vPW),
        className: aa.vR,
        children: [
            f.map((e) => {
                let t = (0, I.cq)(e);
                return (0, i.jsx)(
                    "button",
                    {
                        ...K(e),
                        "aria-label": t,
                        children: (0, i.jsx)(ts.E, {
                            tag: "span",
                            variant: "heading-sm/semibold",
                            color: "none",
                            children: t,
                        }),
                    },
                    e,
                );
            }),
            (0, i.jsx)(t0.Y, {
                targetElementRef: p,
                shouldShow: w,
                onRequestOpen: j,
                onRequestClose: N,
                position: "right",
                align: "top",
                spacing: 8,
                renderPopout: () =>
                    (0, i.jsx)(t9, {
                        menuRef: x,
                        options: at,
                        activeCustomizationOption: n,
                        returnRef: p,
                        focusMenu: E,
                        onMouseEnter: T,
                        onMouseLeave: R,
                        onSelectOption: C,
                        onClose: S,
                    }),
                children: (e) =>
                    (0, i.jsxs)("button", {
                        ...e,
                        ...K("more"),
                        ref: p,
                        "aria-label":
                            null != U
                                ? tf.intl.formatToPlainString(th.default.QX1VPx, { category: U })
                                : tf.intl.string(th.default.jepsQ6),
                        "aria-haspopup": "menu",
                        "aria-expanded": w,
                        onMouseEnter: T,
                        onMouseLeave: R,
                        children: [
                            (0, i.jsx)(ts.E, {
                                tag: "span",
                                variant: "heading-sm/semibold",
                                color: "none",
                                children: U ?? tf.intl.string(th.default["iXpQc+"]),
                            }),
                            (0, i.jsx)(t1.ChevronSmallRightIcon, { size: "refresh_sm", color: "currentColor" }),
                        ],
                    }),
            }),
            null != o && (0, i.jsx)(g.A, { id: L, children: (0, I.Cz)(o) }),
        ],
    });
}
var ai = a(195464);
function as() {
    let e = b.useId(),
        t = b.useId(),
        [a, r] = b.useState(I.v7.BASE),
        { traitOptions: s, selectedOption: n, onSelectOption: c } = tX({ customizationOption: a }),
        d = U().find((e) => e === I.hw[a]),
        l = (0, m.bG)([u.A], () => u.A.isSaving),
        o = ti();
    return (0, i.jsxs)(tJ, {
        className: ai.n,
        children: [
            (0, i.jsx)(tn.D, {
                ref: o,
                variant: "heading-xl/medium",
                color: "none",
                className: ai.D,
                children: tf.intl.string(th.default["q2nj/Z"]),
            }),
            (0, i.jsx)(ar, {
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
                "aria-label": (0, I.cq)(a),
                children: (0, i.jsx)(tz, {
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
var an = a(81466);
function ac() {
    let e = (0, m.bG)([u.A], () => u.A.stats?.games);
    return (0, i.jsxs)(tJ, {
        children: [
            (0, i.jsx)(tm, {
                icon: an.CalendarIcon,
                value: Math.round(e?.totalDaysPlayed ?? 0),
                topPercent: (0, F.bD)(e?.totalDaysPlayedPercentile),
                children: tf.intl.string(th.default["4N5p4D"]),
            }),
            (0, i.jsx)(tQ, { customizationOption: I.v7.AURA }),
        ],
    });
}
var ad = a(687966);
function al() {
    let e = (0, m.bG)([u.A], () => u.A.stats?.games);
    return (0, i.jsxs)(tJ, {
        children: [
            (0, i.jsx)(tm, {
                icon: ad.GameControllerIcon,
                value: Math.round(e?.totalGamesPlayed ?? 0),
                topPercent: (0, F.bD)(e?.totalGamesPlayedPercentile),
                children: tf.intl.string(th.default.HM2fjf),
            }),
            (0, i.jsx)(tQ, { customizationOption: I.v7.WEARABLE }),
        ],
    });
}
var ao = a(534890),
    au = a(350363);
function ah() {
    let e = (0, m.bG)([u.A], () => u.A.stats?.messages);
    return (0, i.jsxs)(tJ, {
        children: [
            (0, i.jsx)(tm, {
                icon: ao.ChatIcon,
                value: Math.round(e?.numMessagesSent ?? 0),
                topPercent: (0, F.bD)(e?.numMessagesSentPercentile),
                children: tf.intl.string(au.default.wWKySP),
            }),
            (0, i.jsx)(tQ, { customizationOption: I.v7.OUTFIT }),
        ],
    });
}
var af = a(664121);
function ab() {
    let e = (0, m.bG)([u.A], () => u.A.stats?.guilds?.guilds[0]);
    return (0, i.jsxs)(tJ, {
        children: [
            (0, i.jsx)(tm, {
                icon: af.ServerIcon,
                value: Math.round(e?.numDaysInteracted ?? 0),
                topPercent: (0, F.bD)(e?.numDaysInteractedPercentile),
                children: tf.intl.string(th.default["M+a+t1"]),
            }),
            (0, i.jsx)(tQ, { customizationOption: I.v7.HAT }),
        ],
    });
}
var ap = a(831544);
function a_() {
    let e = (0, m.bG)([u.A], () => u.A.stats?.voice),
        t = Math.round(e?.totalVoiceMinutes ?? 0);
    return (0, i.jsxs)(tJ, {
        children: [
            (0, i.jsx)(tm, {
                icon: ap.MicrophoneIcon,
                value: t,
                topPercent: (0, F.bD)(e?.totalVoiceMinutesPercentile),
                children: tf.intl.string(th.default["3/T12E"]),
            }),
            (0, i.jsx)(tQ, { customizationOption: I.v7.FACE }),
        ],
    });
}
function am(e) {
    let { route: t } = e;
    switch (t) {
        case j.gr.VOICE_FACE:
            return (0, i.jsx)(a_, {});
        case j.gr.MESSAGES_OUTFIT:
            return (0, i.jsx)(ah, {});
        case j.gr.SERVERS_HEADWEAR:
            return (0, i.jsx)(ab, {});
        case j.gr.EMOJI_SHOES:
            return (0, i.jsx)(t$, {});
        case j.gr.GAMES_WEARABLE:
            return (0, i.jsx)(al, {});
        case j.gr.GAME_TIME_AURA:
            return (0, i.jsx)(ac, {});
        case j.gr.FINALIZE_CHARACTER:
            return (0, i.jsx)(as, {});
        default:
            return null;
    }
}
var ax = a(358618),
    ag = a(983851),
    aA = a(793920),
    av = a(893007),
    aw = a(738964);
function aI(e) {
    return `${Math.round(e)}%`;
}
function aE() {
    let { volume: e, isMuted: t } = (0, m.cf)([u.A], () => ({ volume: u.A.volume, isMuted: u.A.isMuted })),
        a = b.useRef(null),
        r = b.useRef(null),
        [s, n] = b.useState(!1),
        [c, d] = b.useState(!1),
        [l, h] = b.useState(!1),
        [f, p] = b.useState(!1),
        _ = b.useRef(null),
        x = b.useRef(!1),
        g = t ? 0 : Math.round(100 * e),
        A = !f && (s || c || l),
        v = 0 === g ? ax.VoiceXIcon : g > 50 ? ag.VoiceNormalIcon : aA.VoiceLowIcon;
    (b.useLayoutEffect(() => {
        null != r.current && (r.current.volume = e);
    }, [e]),
        (0, G.l0)(() => {
            null != _.current && clearTimeout(_.current);
        }));
    let w = b.useCallback((e) => {
            ((0, o.ls)(e / 100),
                h(!0),
                null != _.current && clearTimeout(_.current),
                (_.current = setTimeout(() => h(!1), 1e3)));
        }, []),
        I = b.useCallback(() => {
            (n(!0), p(!1));
        }, []),
        E = b.useCallback(() => n(!1), []),
        j = b.useCallback((e) => {
            d(!x.current && e.target.matches(":focus-visible"));
        }, []),
        S = b.useCallback(() => {
            ((x.current = !0), d(!1));
        }, []),
        N = b.useCallback(() => {
            ((x.current = !1), d(!0));
        }, []),
        C = b.useCallback(() => {
            n(a.current?.matches(":hover") ?? !1);
        }, []),
        T = b.useCallback((e) => {
            e.currentTarget.contains(e.relatedTarget) || ((x.current = !1), d(!1), p(!1));
        }, []),
        R = b.useCallback(
            (e) => {
                "Escape" === e.key &&
                    A &&
                    (e.preventDefault(),
                    e.stopPropagation(),
                    null != _.current && clearTimeout(_.current),
                    h(!1),
                    p(!0),
                    a.current?.querySelector("button")?.focus());
            },
            [A],
        );
    return (0, i.jsxs)("div", {
        ref: a,
        className: aw.kL,
        onMouseEnter: I,
        onMouseLeave: E,
        onFocus: j,
        onPointerDownCapture: S,
        onBlur: T,
        onKeyDownCapture: N,
        onKeyDown: R,
        children: [
            (0, i.jsx)(Z, {
                size: "sm",
                className: A ? aw.Gg : void 0,
                "aria-label": tf.intl.string(t ? au.default.GN0uv6 : au.default.pjF33X),
                onClick: o.K8,
                children: (0, i.jsx)(v, { size: "xs", color: "currentColor" }),
            }),
            A
                ? (0, i.jsx)("div", {
                      className: aw.xJ,
                      children: (0, i.jsx)(av.A, {
                          value: g,
                          minValue: 0,
                          maxValue: 100,
                          onChange: w,
                          onChangeEnd: C,
                          formatValue: aI,
                          "aria-label": tf.intl.string(tf.t.xPHVBs),
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
let aj =
        "https://cdn.discordapp.com/assets/content/914f6f5e36c680d00944ba2e6278b45f8b1da722692e101b5986cf7be56c4979.mp3",
    aS =
        "https://cdn.discordapp.com/assets/content/d1dfc8280cfbd578f18728598db893d807d9ece6b511389848b7308c399f07a0.mp3";
var aN = a(477155),
    aC = a(866665),
    aT = a(417270),
    aR = a(935286),
    ay = a(405433),
    aO = a(289873),
    aM = a(621466);
function ak(e, t) {
    let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    b.useEffect(() => {
        if (!a) return (window.addEventListener("keydown", r), () => window.removeEventListener("keydown", r));
        function r(a) {
            (0, aM.vq)(a.target, HTMLTextAreaElement) ||
                (0, aM.vq)(a.target, HTMLInputElement) ||
                (a.key === e && t(a));
        }
    }, [e, t, a]);
}
var aL = a(652215),
    aD = a(650583);
function aP(e) {
    let { source: t, onClick: a, disabled: r = !1 } = e,
        i = tI(t),
        s = b.useRef(!1);
    function n() {
        r || i();
    }
    return {
        playSound: n,
        onPointerDown: function (e) {
            e.button === aL.hE4.PRIMARY && ((s.current = !0), n());
        },
        onKeyDown: function (e) {
            (e.key === aD.dh.ENTER || e.key === aD.dh.SPACE) && ((s.current = !0), e.repeat || n());
        },
        onClickWithSound: function () {
            (s.current || n(), (s.current = !1), a());
        },
    };
}
var aU = a(753875);
function aG(e) {
    let { "aria-label": t, "aria-describedby": a, icon: r, onClick: s, disabled: n = !1 } = e,
        {
            playSound: c,
            onPointerDown: d,
            onKeyDown: l,
            onClickWithSound: o,
        } = aP({ source: aj, onClick: s, disabled: n });
    return (
        ak(
            "ArrowLeft",
            function (e) {
                (e.repeat || c(), s());
            },
            n,
        ),
        (0, i.jsx)(Z, {
            onPointerDown: d,
            onKeyDown: l,
            onClick: o,
            size: "md",
            className: _()(aU.A4, aU.aX),
            "aria-disabled": n,
            "aria-describedby": a,
            "aria-label": t,
            children: (0, i.jsx)(r, { color: "currentColor" }),
        })
    );
}
function aH(e) {
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
        } = aP({ source: aS, onClick: s, disabled: d });
    return (
        ak(
            "ArrowRight",
            function (e) {
                (e.repeat || l(), s());
            },
            d,
        ),
        (0, i.jsx)(J, {
            onPointerDown: o,
            onKeyDown: u,
            onClick: h,
            size: n,
            className: _()(aU.A4, aU.K2, c),
            "aria-disabled": d,
            "aria-describedby": a,
            "aria-label": t,
            children: r,
        })
    );
}
function aF(e) {
    let { "aria-describedby": t, onClick: a, disabled: r } = e;
    return (0, i.jsx)(aG, {
        "aria-label": tf.intl.string(tf.t["13/7kX"]),
        "aria-describedby": t,
        icon: aN.ArrowSmallLeftIcon,
        onClick: a,
        disabled: r,
    });
}
function aK(e) {
    let { onClick: t } = e,
        { onPointerDown: a, onKeyDown: r, onClickWithSound: s } = aP({ source: aS, onClick: t });
    return (0, i.jsx)(aC.m, {
        text: tf.intl.string(th.default.cWdGf9),
        ariaHidden: !0,
        children: (0, i.jsx)(Z, {
            onPointerDown: a,
            onKeyDown: r,
            onClick: s,
            size: "md",
            className: _()(aU.A4, aU.eZ),
            "aria-label": tf.intl.string(th.default.cWdGf9),
            children: (0, i.jsx)(aT.RetryIcon, { color: "currentColor" }),
        }),
    });
}
function aB(e) {
    let { "aria-describedby": t, onClick: a, disabled: r } = e;
    return (0, i.jsx)(aH, {
        size: "md",
        "aria-label": tf.intl.string(tf.t.PDTjLN),
        "aria-describedby": t,
        onClick: a,
        disabled: r,
        children: (0, i.jsx)(aR.ArrowSmallRightIcon, { color: "currentColor" }),
    });
}
function aV(e) {
    let { onClick: t, disabled: a } = e;
    return (0, i.jsxs)(aH, {
        size: "custom",
        className: aU.GA,
        "aria-label": tf.intl.string(tf.t.i4jeWR),
        onClick: t,
        disabled: a,
        children: [
            (0, i.jsx)(td, { variant: "mono-md/normal", className: aU.Pf, children: tf.intl.string(tf.t.i4jeWR) }),
            (0, i.jsx)(aR.ArrowSmallRightIcon, { size: "refresh_sm", color: "currentColor" }),
        ],
    });
}
function az(e) {
    let { onClick: t, disabled: a } = e;
    return (0, i.jsxs)(aH, {
        size: "custom",
        className: _()(aU.GA, aU.Bq),
        "aria-label": tf.intl.string(tf.t.RDE0Sc),
        onClick: t,
        disabled: a,
        children: [
            (0, i.jsx)(ts.E, {
                variant: "mono-md/bold",
                color: "none",
                className: aU.Pf,
                children: tf.intl.string(tf.t.RDE0Sc),
            }),
            (0, i.jsx)(ay.ShareIcon, { size: "refresh_sm", color: "currentColor" }),
        ],
    });
}
function aW(e) {
    let { onBack: t, isRouteBlocked: a, blockedTraitDescriptionId: r } = e,
        s = (0, m.bG)([u.A], () => u.A.isSaving);
    return (0, i.jsx)(aF, {
        "aria-describedby": r,
        onClick: function () {
            s || t();
        },
        disabled: s || a,
    });
}
function aq(e) {
    let { onNext: t, navigate: a, isRouteBlocked: r, blockedTraitDescriptionId: n } = e,
        c = (0, m.bG)([u.A], () => u.A.isSaving),
        d = c || r;
    async function l() {
        if (c) return;
        let e = (0, P.XI)(u.A.selectedCharacterTraits);
        (await (0, o.yE)(e)) ? t() : (0, s.P0)({ text: tf.intl.string(tf.t.fEptJP), variant: "critical" });
    }
    function h() {
        a(l);
    }
    let {
        playSound: f,
        onPointerDown: b,
        onKeyDown: p,
        onClickWithSound: x,
    } = aP({
        source: "https://cdn.discordapp.com/assets/content/1514d999969512ff06ade75018213676ebaf3698af26c0b1b7d3243ec480f920.mp3",
        onClick: h,
        disabled: d,
    });
    return (
        ak(
            "ArrowRight",
            function (e) {
                (e.repeat || f(), h());
            },
            d,
        ),
        (0, i.jsxs)(J, {
            onPointerDown: b,
            onKeyDown: p,
            onClick: x,
            size: "custom",
            className: _()(aU.A4, aU.K2, aU.GA),
            "aria-disabled": d,
            "aria-describedby": n,
            "aria-label": tf.intl.string(tf.t["R3BPH+"]),
            children: [
                (0, i.jsx)(ts.E, {
                    variant: "mono-md/normal",
                    color: "none",
                    className: aU.Pf,
                    children: tf.intl.string(tf.t["R3BPH+"]),
                }),
                c
                    ? (0, i.jsx)(aO.y, { type: aO.t.SPINNING_CIRCLE_SIMPLE, className: aU.u1, itemClassName: aU.$N })
                    : (0, i.jsx)(aR.ArrowSmallRightIcon, { size: "refresh_sm", color: "currentColor" }),
            ],
        })
    );
}
function aY(e) {
    let { activeRoute: t, blockedTrait: a, blockedTraitDescriptionId: r, onBack: s, onNext: n, onReplay: c } = e,
        d = null != a,
        l = b.useMemo(() => (0, eB.throttle)((e) => e(), 500, { trailing: !1 }), []);
    function o(e) {
        null != a ? V(a) : l(e);
    }
    switch (t) {
        case j.gr.HOME:
            return null;
        case j.gr.FINALIZE_CHARACTER:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(aW, { onBack: () => o(s), isRouteBlocked: d, blockedTraitDescriptionId: r }),
                    (0, i.jsx)(aq, { onNext: n, navigate: o, isRouteBlocked: d, blockedTraitDescriptionId: r }),
                ],
            });
        case j.gr.SUMMARY:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(aF, { onClick: () => l(s) }),
                    (0, i.jsx)(aK, { onClick: () => l(c) }),
                    (0, i.jsx)(az, { onClick: () => l(n) }),
                ],
            });
        case j.gr.SHARE:
            return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(aF, { onClick: () => l(s) }), (0, i.jsx)(aV, { onClick: () => l(n) })],
            });
        default:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(aF, { "aria-describedby": r, onClick: () => o(s), disabled: d }),
                    (0, i.jsx)(aB, { "aria-describedby": r, onClick: () => o(n), disabled: d }),
                ],
            });
    }
}
function aX(e) {
    let { className: t } = e;
    return (0, i.jsx)(e8, {
        animatedSrc:
            "https://cdn.discordapp.com/assets/content/02e9ae4cdbec0b2adef22c9a5659f5c7340e399cc8932e8af6d41e62a37644ae.png",
        staticSrc:
            "https://cdn.discordapp.com/assets/content/f08be0abd0d224b5f7e1e5d6c1ef8e4d24cddcb712e2c624dcc6ea3d136818d5.png",
        className: t,
    });
}
var aQ = a(771639);
let aZ = { "--custom-checkpoint-screen-vertical-inset": "88px" };
function aJ(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", { className: aQ.n, style: aZ, children: t });
}
var a$ = a(639331);
let a0 = {
    "--custom-checkpoint-intro-fade-in-delay": "1800ms",
    "--custom-checkpoint-intro-fade-in-duration": "1000ms",
};
function a1() {
    let e = (0, m.bG)([u.A], () => u.A.fetchState !== u.T.SUCCESS || null != u.A.stats),
        t = ti();
    return (0, i.jsx)(aJ, {
        children: (0, i.jsxs)("div", {
            className: a$.Qs,
            style: a0,
            children: [
                (0, i.jsxs)("div", {
                    ref: t,
                    className: a$.Ok,
                    role: "heading",
                    "aria-level": 2,
                    children: ["2026", !e && (0, i.jsx)(aX, { className: a$.gi })],
                }),
                (0, i.jsxs)("div", {
                    className: a$.eH,
                    children: [
                        (0, i.jsx)(td, {
                            tag: "p",
                            variant: "heading-xl/medium",
                            children: tf.intl.string(e ? th.default["7YmUVu"] : th.default["Fyr+NW"]),
                        }),
                        !e &&
                            (0, i.jsx)(td, {
                                tag: "p",
                                variant: "heading-xl/medium",
                                children: tf.intl.string(th.default["2GRr6H"]),
                            }),
                    ],
                }),
            ],
        }),
    });
}
(a(134528), a(947204));
var a5 = a(675970),
    a6 = a(559106),
    a2 = a(366056),
    a3 = a(292801),
    a4 = a(155718),
    a8 = a(294454),
    a7 = a(489414),
    a9 = a(878358),
    re = a(383233),
    rt = a(819648),
    ra = a(677059);
function rr(e) {
    let { children: t } = e;
    return (0, i.jsx)(td, { variant: "heading-xxl/medium", className: ra.h, children: t });
}
function ri(e) {
    let { accessibilityLabel: t, className: a, children: r, ref: s } = e;
    return (0, i.jsxs)("div", {
        ref: s,
        role: "heading",
        "aria-level": 2,
        children: [
            (0, i.jsx)("div", { className: a, "aria-hidden": !0, children: r }),
            (0, i.jsx)(g.A, { children: t }),
        ],
    });
}
var rs = a(100391);
function rn(e) {
    let { icon: t, children: a } = e;
    return (0, i.jsxs)("div", {
        className: rs.D,
        children: [
            (0, i.jsx)(t, { size: "md", color: "currentColor" }),
            (0, i.jsx)(td, { variant: "heading-lg/semibold", className: rs.Q, children: a }),
        ],
    });
}
function rc(e) {
    let { icon: t, children: a } = e;
    return (0, i.jsxs)("div", {
        className: rs.D,
        children: [
            (0, i.jsx)(t, { size: "md", color: "currentColor" }),
            (0, i.jsx)(tl, { variant: "heading-lg/semibold", className: rs.Q, children: a }),
        ],
    });
}
var rd = a(456410);
function rl(e) {
    let { name: t, label: a, checked: r, onSelect: s, children: n } = e;
    return (0, i.jsx)(a6.vN, {
        within: !0,
        children: (0, i.jsxs)("label", {
            className: _()(rd.uK, { [rd.KD]: r }),
            children: [
                (0, i.jsx)(g.A, {
                    children: (0, i.jsx)("input", { type: "radio", name: t, checked: r, onChange: s, "aria-label": a }),
                }),
                r ? (0, i.jsx)("div", { className: rd.Gt, "aria-hidden": !0 }) : null,
                (0, i.jsx)("div", { className: rd.Nr, "aria-hidden": !0, children: n }),
            ],
        }),
    });
}
function ro() {
    let e = (0, m.bG)([u.A], () => u.A.character),
        t = (0, m.bG)([u.A], () => u.A.stats),
        a = b.useId(),
        r = ti(),
        n = b.useMemo(() => {
            var a, r;
            return ((a = e),
            (r = t),
            null != a && null != r
                ? [a5.Q.CHARACTER_ONLY, a5.Q.DEFAULT, a5.Q.STATS_ONLY]
                : null != a
                  ? [a5.Q.CHARACTER_ONLY]
                  : null != r
                    ? [a5.Q.STATS_ONLY]
                    : []).map((a) => ({ cardType: a, checkpointData: (0, rt.Go)(a, e, t) }));
        }, [e, t]),
        [c, d] = b.useState(
            () =>
                (
                    n.find((e) => {
                        let { cardType: t } = e;
                        return t === a5.Q.DEFAULT;
                    }) ?? n.at(0)
                )?.cardType,
        ),
        l = n.find((e) => {
            let { cardType: t } = e;
            return t === c;
        }),
        h = tI(tv),
        {
            onPointerDown: p,
            onKeyDown: _,
            onClickWithSound: x,
        } = aP({
            source: aS,
            onClick: function () {
                if (null == l) return;
                let { cardType: e, checkpointData: t } = l;
                (0, a8.fO)({
                    message: new re.Ay({
                        content: "",
                        components: [{ type: a4.I5.CHECKPOINT_CARD, id: (0, a7.X1)("0"), checkpointData: t }],
                    }),
                    source: "checkpoint",
                    customSendHandler: async (t, a, r) => {
                        let { withMessage: i } = a;
                        r(!0);
                        try {
                            (await (0, o.jA)(t, i ?? "", e),
                                (0, f.Pe)(e),
                                (0, a8.Be)(),
                                (0, s.P0)({ text: tf.intl.string(tf.t.kwmYkt), variant: "success" }));
                        } catch {
                            (0, s.P0)({ text: tf.intl.string(tf.t.iufib1), variant: "critical" });
                        } finally {
                            r(!1);
                        }
                    },
                });
            },
        });
    return null == l
        ? null
        : (0, i.jsx)(aJ, {
              children: (0, i.jsxs)("div", {
                  className: rd.uM,
                  children: [
                      (0, i.jsxs)("div", {
                          className: rd.wx,
                          children: [
                              (0, i.jsxs)(ri, {
                                  ref: r,
                                  className: rd.R_,
                                  accessibilityLabel: tf.intl.string(th.default.P5zyko),
                                  children: [
                                      (0, i.jsx)(rn, {
                                          icon: a2.ExperimentalCheckpointIcon,
                                          children: tf.intl.string(au.default.ir6nEQ),
                                      }),
                                      (0, i.jsx)(td, {
                                          variant: "display-lg",
                                          className: rd.Vy,
                                          children: tf.intl.string(tf.t.RDE0Sc),
                                      }),
                                  ],
                              }),
                              (0, i.jsx)("div", {
                                  className: rd.h_,
                                  children: (0, i.jsx)(rr, { children: tf.intl.string(th.default.KXDPot) }),
                              }),
                          ],
                      }),
                      (0, i.jsx)("div", {
                          role: "radiogroup",
                          "aria-label": tf.intl.string(th.default.KXDPot),
                          className: rd.kR,
                          children: n.map((e) => {
                              let { cardType: t, checkpointData: r } = e;
                              return (0, i.jsx)(
                                  rl,
                                  {
                                      name: a,
                                      label: (function (e) {
                                          switch (e) {
                                              case a5.Q.CHARACTER_ONLY:
                                                  return tf.intl.string(th.default.tUU3fe);
                                              case a5.Q.DEFAULT:
                                                  return tf.intl.string(th.default.DZQzJn);
                                              case a5.Q.STATS_ONLY:
                                                  return tf.intl.string(th.default.e2UHGT);
                                          }
                                      })(t),
                                      checked: t === l.cardType,
                                      onSelect: () => {
                                          (h(), d(t));
                                      },
                                      children: (0, i.jsx)(a9.A, { checkpointData: r }),
                                  },
                                  t,
                              );
                          }),
                      }),
                      (0, i.jsxs)(J, {
                          onPointerDown: p,
                          onKeyDown: _,
                          onClick: x,
                          size: "custom",
                          className: rd.sY,
                          "aria-label": tf.intl.string(tf.t.I3ltXO),
                          children: [
                              (0, i.jsx)(ts.E, {
                                  variant: "mono-md/bold",
                                  color: "none",
                                  className: rd.RC,
                                  children: tf.intl.string(tf.t.I3ltXO),
                              }),
                              (0, i.jsx)(a3.ArrowAngleRightUpIcon, { size: "refresh_sm", color: "currentColor" }),
                          ],
                      }),
                  ],
              }),
          });
}
var ru = a(206701),
    rh = a(782134),
    rf = a(998304),
    rb = a(975571),
    rp = a(427262),
    r_ = a(438389);
let rm = (0, rf.j5)(K.Kr);
function rx(e) {
    let { onStart: t } = e,
        a = (0, m.bG)([L.default], () => L.default.getCurrentUser()),
        r = (0, rp.tx)(a),
        s = (0, m.bG)([W.Ay], () => W.Ay.useReducedMotion),
        { playSound: n, onPointerDown: c, onKeyDown: d, onClickWithSound: l } = aP({ source: aS, onClick: t });
    return (
        ak("ArrowRight", function (e) {
            (e.repeat || n(), t());
        }),
        (0, i.jsxs)(aJ, {
            children: [
                (0, i.jsxs)("div", {
                    className: r_.Qs,
                    children: [
                        (0, i.jsxs)("div", {
                            className: r_.wx,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: r_.Qq,
                                    children: [
                                        (0, i.jsx)(tl, {
                                            variant: "display-lg",
                                            className: r_.DD,
                                            children: tf.intl.string(au.default["CdU/PF"]),
                                        }),
                                        (0, i.jsx)(td, {
                                            variant: "heading-xxl/medium",
                                            children: tf.intl.formatToPlainString(th.default.xhZ23b, { username: r }),
                                        }),
                                    ],
                                }),
                                (0, i.jsx)("div", {
                                    className: r_.CB,
                                    children: (0, i.jsx)(ru.U, {
                                        artboard: "Entry",
                                        className: r_.lW,
                                        fit: "contain",
                                        withReducedMotion: "short-loop",
                                        dataBinding: { iconColor: rm, reducedMotion: s },
                                    }),
                                }),
                            ],
                        }),
                        (0, i.jsxs)(J, {
                            onPointerDown: c,
                            onKeyDown: d,
                            onClick: l,
                            size: "custom",
                            className: r_.ni,
                            "aria-label": tf.intl.string(tf.t.I0v0Qv),
                            children: [
                                (0, i.jsx)(rh.PlayIcon, { size: "refresh_sm", color: "currentColor" }),
                                (0, i.jsx)(td, {
                                    variant: "mono-md/normal",
                                    className: r_.qK,
                                    children: tf.intl.string(tf.t.I0v0Qv),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: r_.qr,
                    children: [
                        (0, i.jsx)(td, {
                            variant: "body-sm/medium",
                            className: r_.ed,
                            children: tf.intl.format(th.default.hcNhyq, {
                                learnMoreHook: (e, t) =>
                                    (0, i.jsx)(
                                        tE.Anchor,
                                        {
                                            className: r_.nf,
                                            href: rb.A.getArticleURL(aL.MVz.CHECKPOINT),
                                            useDefaultUnderlineStyles: !1,
                                            children: e,
                                        },
                                        t,
                                    ),
                            }),
                        }),
                        (0, i.jsx)(td, {
                            variant: "body-md/medium",
                            className: r_.al,
                            children: tf.intl.format(au.default.g476ZL, { name: "Exyl" }),
                        }),
                    ],
                }),
            ],
        })
    );
}
var rg = a(565645),
    rA = a(141881);
function rv(e) {
    let { children: t } = e;
    return (0, i.jsx)(tu, { className: rA.l, children: t });
}
var rw = a(765671),
    rI = a(663385),
    rE = a(469228),
    rj = a(406956);
let rS = (0, rf.j5)(K.Kr);
function rN(e) {
    let { value: t, alignment: a = "left", className: r } = e,
        s = (0, m.bG)([W.Ay], () => W.Ay.useReducedMotion),
        [n, c] = b.useState(0),
        { isLoaded: d, onLoad: l } = (function () {
            let [e, t] = b.useState(!1);
            return { isLoaded: e, onLoad: b.useCallback(() => t(!0), []) };
        })(),
        o = s ? t : n;
    b.useEffect(() => {
        if (s || !d) return;
        let e = performance.now(),
            a = requestAnimationFrame(function r(i) {
                let s = Math.min((i - e) / 500, 1);
                (c(Math.round(t * s)), s < 1 && (a = requestAnimationFrame(r)));
            });
        return () => cancelAnimationFrame(a);
    }, [t, s, d]);
    let u = "center" === a ? rI.m : rE.w;
    return (0, i.jsxs)("div", {
        className: _()(rj.lY, r),
        children: [
            (0, i.jsx)("div", { className: rj.VL, children: t }),
            (0, i.jsx)(u, {
                className: rj.lW,
                fit: "layout",
                withReducedMotion: "short-loop",
                dataBinding: { DisplayValue: o, TextColor: rS },
                onLoad: l,
            }),
            (0, i.jsx)(g.A, { children: t.toLocaleString(tf.intl.currentLocale) }),
        ],
    });
}
var rC = a(434911);
function rT(e) {
    let { value: t } = e,
        { ref: a, width: r } = (0, rw.Ay)(),
        { ref: s, width: n } = (0, rw.Ay)(),
        c = null != r && null != n ? Math.min(1, r / n) : 1;
    return (0, i.jsxs)("div", {
        ref: a,
        className: rC.ai,
        style: { height: 200 * c },
        children: [
            (0, i.jsx)("span", { ref: s, className: _()(rC.Qq, rC.xP), children: t }),
            (0, i.jsx)(rN, { value: t }),
        ],
    });
}
function rR(e) {
    let { value: t } = e;
    return (0, i.jsxs)("div", {
        className: rC.dJ,
        children: [
            "number" == typeof t
                ? (0, i.jsx)(rT, { value: t })
                : (0, i.jsx)(td, { variant: "heading-xxl/medium", className: rC.Qq, children: t }),
            (0, i.jsx)(aX, { className: rC.gi }),
        ],
    });
}
var ry = a(445199),
    rO = a(205524),
    rM = a(690521),
    rk = a(152321);
let rL = [0, 0, 2],
    rD = [0, 1, 0],
    rP = [0, 0, 0],
    rU = `
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
    rH = [
        -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5,
        -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5,
        0.5, 0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, -0.5,
        -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5,
        -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5,
        -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5,
    ],
    rF = [
        0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0,
        1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0,
    ],
    rK = [
        0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
        1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
        -1, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
        1, 0, 0,
    ];
function rB(e) {
    let t,
        { emoji: a } = e,
        [r, s] = b.useState(null),
        [n, c] = b.useState(null),
        d = b.useRef(new Image()),
        [l, o] = b.useState(null),
        [u, h] = b.useState(!1),
        f = b.useRef(0),
        p = b.useRef(0),
        x = b.useRef(45),
        g = b.useRef(45),
        A = (0, m.bG)([W.Ay], () => W.Ay.useReducedMotion),
        v = 70 * !A,
        w = 40 * !A,
        I = b.useRef(v),
        E = b.useRef(w),
        j = b.useRef(!1),
        S = b.useRef(0),
        N = b.useRef(0);
    ((t = b.useRef(null)),
        b.useEffect(() => {
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
        b.useEffect(() => {
            let e,
                a = 0,
                i = r?.getContext("webgl");
            if (null == i || null == r || null == n) return;
            t.current = i;
            let s = i.createShader(i.VERTEX_SHADER),
                c = i.createShader(i.FRAGMENT_SHADER);
            if (null == s || null == c) return;
            if (
                (i.shaderSource(s, rU),
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
                p = i.createBuffer();
            (i.bindBuffer(i.ARRAY_BUFFER, p),
                i.bufferData(i.ARRAY_BUFFER, new Float32Array(rK), i.STATIC_DRAW),
                i.vertexAttribPointer(f, 3, i.FLOAT, !1, 0, 0),
                i.enableVertexAttribArray(f));
            let _ = i.createBuffer();
            (i.bindBuffer(i.ARRAY_BUFFER, _),
                (e = new Float32Array(rH)),
                i.bufferData(i.ARRAY_BUFFER, e, i.STATIC_DRAW));
            let m = i.createBuffer();
            (i.bindBuffer(i.ARRAY_BUFFER, m), i.bufferData(i.ARRAY_BUFFER, new Float32Array(rF), i.STATIC_DRAW));
            let A = ry.DF(60);
            return (
                (a = requestAnimationFrame(function e() {
                    if (null == i || null == r) return;
                    (i.viewport(0, 0, i.canvas.width, i.canvas.height), i.enable(i.CULL_FACE), i.enable(i.DEPTH_TEST));
                    let t = ry.DF(x.current),
                        s = ry.DF(g.current);
                    (i.clear(i.COLOR_BUFFER_BIT | i.DEPTH_BUFFER_BIT),
                        i.useProgram(d),
                        i.enableVertexAttribArray(l),
                        i.bindBuffer(i.ARRAY_BUFFER, _),
                        i.vertexAttribPointer(l, 3, i.FLOAT, !1, 0, 0),
                        i.enableVertexAttribArray(o),
                        i.bindBuffer(i.ARRAY_BUFFER, m),
                        i.vertexAttribPointer(o, 2, i.FLOAT, !1, 0, 0));
                    let n = r.clientWidth / r.clientHeight,
                        c = rO.fN(rO.vt(), A, n, 1, 2e3),
                        f = rO.t5(rO.vt(), rL, rP, rD),
                        p = rO.lw(rO.vt(), c, f),
                        v = rO.vt();
                    (rO.eL(v, v, t), rO.Z8(v, v, s));
                    let w = rO.lw(rO.vt(), p, v),
                        I = rO.vt();
                    (rO.B8(I, v),
                        rO.mg(I, I),
                        i.uniformMatrix4fv(b, !1, I),
                        i.uniformMatrix4fv(u, !1, w),
                        i.uniform1i(h, 0),
                        i.drawArrays(i.TRIANGLES, 0, 36),
                        (a = requestAnimationFrame(e)));
                })),
                () => cancelAnimationFrame(a)
            );
        }, [x, g, r, n]));
    let C = b.useCallback(() => {
        let e = n?.getContext("2d");
        null != n &&
            null != e &&
            ((e.fillStyle = "black"),
            e.fillRect(0, 0, n.width, n.height),
            e.drawImage(d.current, 0, 0, n.width, n.height),
            (e.fillStyle = K.Kr),
            e.fillRect(0, 0, n.width, 1),
            e.fillRect(0, 0, 1, n.height),
            e.fillRect(0, n.height - 1, n.width, 1),
            e.fillRect(n.width - 1, 0, 1, n.height),
            o(a),
            h(!0));
    }, [a, d, n]);
    (b.useEffect(() => {
        null != n &&
            ((d.current.crossOrigin = "anonymous"), (d.current.src = (0, rM.Ez)(a, 256)), (d.current.onload = C));
    }, [a, C, d, n]),
        b.useEffect(
            () => (
                !(function e(t) {
                    let a = 0.001 * t,
                        r = Math.min(a - p.current, 0.1);
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
                    ((p.current = a), (f.current = requestAnimationFrame(e)));
                })(0),
                () => cancelAnimationFrame(f.current)
            ),
            [v, w],
        ));
    let T = b.useCallback((e) => {
            ((j.current = !0), (I.current = 0), (E.current = 0), (S.current = e.clientX), (N.current = e.clientY));
        }, []),
        R = b.useCallback((e) => {
            if (j.current) {
                let t = (e.clientX - S.current) / window.devicePixelRatio;
                ((I.current = -((e.clientY - N.current) / window.devicePixelRatio) * (100 / window.devicePixelRatio)),
                    (E.current = -t * (100 / window.devicePixelRatio)),
                    (S.current = e.clientX),
                    (N.current = e.clientY));
            }
        }, []),
        y = b.useCallback(() => {
            j.current = !1;
        }, []);
    return (
        b.useEffect(
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
                    className: _()(rk.Ji, { [rk.q4]: !u }),
                    ref: s,
                    height: 512,
                    width: 512,
                    onMouseDown: T,
                }),
                (0, i.jsx)("canvas", { className: rk.R, ref: c, height: 256, width: 256 }),
            ],
        })
    );
}
var rV = a(826820);
let rz = [];
function rW(e) {
    let { emojiStats: t } = e,
        a = Math.round(t?.numEmojisSent ?? 0),
        r = (0, F.bD)(t?.numEmojisSentPercentile);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: rV.dJ,
                children: [
                    (0, i.jsx)(rc, {
                        icon: tr.EmojiSlightlySmilingFaceIcon,
                        children: tf.intl.string(th.default.ZTDCIv),
                    }),
                    (0, i.jsx)(rN, { value: a }),
                ],
            }),
            (0, i.jsx)(rr, {
                children:
                    null != r
                        ? tf.intl.format(th.default.o7vDrk, {
                              percent: r,
                              percentHook: (e, t) => (0, i.jsx)(rv, { children: e }, t),
                          })
                        : tf.intl.format(th.default.NFptic, { numEmojis: a }),
            }),
        ],
    });
}
function rq(e) {
    let { numEmojisSent: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: rV.dJ,
                children: [
                    (0, i.jsx)(rc, {
                        icon: tr.EmojiSlightlySmilingFaceIcon,
                        children: tf.intl.string(th.default.ZTDCIv),
                    }),
                    (0, i.jsx)(rR, { value: t }),
                ],
            }),
            (0, i.jsx)(rr, { children: tf.intl.format(th.default["660/Rr"], { numEmojis: (0, F.wj)(t) }) }),
        ],
    });
}
function rY() {
    let e = (0, m.bG)([u.A], () => u.A.stats?.emojis),
        t = (0, m.bG)([u.A], () => (0, F.y7)(u.A.stats)),
        a = (0, m.bG)([u.A], () => u.A.globalStats?.emojis),
        r = !t && null != a,
        s = (r ? a.emojis : e?.emojis) ?? rz,
        [n, c] = b.useState(0),
        d = s[n],
        l = tI(tv);
    return (0, i.jsx)(aJ, {
        children: (0, i.jsxs)("div", {
            className: rV.kL,
            children: [
                (0, i.jsx)("div", { className: rV.KY, children: null != d && (0, i.jsx)(rB, { emoji: d }) }),
                (0, i.jsxs)("div", {
                    className: rV.C,
                    children: [
                        r ? (0, i.jsx)(rq, { numEmojisSent: a.numEmojisSent }) : (0, i.jsx)(rW, { emojiStats: e }),
                        (0, i.jsx)("div", {
                            className: rV.gm,
                            children: s.map((e, t) =>
                                (0, i.jsx)(
                                    rX,
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
function rX(e) {
    let { emoji: t, rank: a, isActive: r, onClick: s } = e,
        n = !(0, m.bG)([W.Ay], () => W.Ay.useReducedMotion) && !0 === t.animated;
    return (0, i.jsxs)(Z, {
        size: "custom",
        className: rV._X,
        onClick: s,
        "aria-label": tf.intl.formatToPlainString(th.default["S5+pRg"], { emojiName: t.name, rank: a }),
        "aria-pressed": r,
        children: [
            (0, i.jsx)(rg.A, { className: rV.Zg, emojiId: t.id, emojiName: t.name, animated: n }),
            (0, i.jsx)(td, { variant: "mono-md/bold", className: rV.Tm, children: a }),
        ],
    });
}
var rQ = a(360450),
    rZ = a(214947),
    rJ = a(939249),
    r$ = a(597770),
    r0 = a(559647),
    r1 = a(95369),
    r5 = a(570287),
    r6 = a(486020),
    r2 = a(801305);
let r3 = [],
    r4 = (0, rf.j5)(K.Kr),
    r8 = { r: 0, g: 0, b: 0, a: 1 },
    r7 = {
        "Avatar01/Stroke": r8,
        "Avatar01/Fill": r4,
        "Avatar02/Stroke": r8,
        "Avatar02/Fill": r4,
        "Avatar03/Stroke": r8,
        "Avatar03/Fill": r4,
        "Avatar04/Stroke": r8,
        "Avatar04/Fill": r4,
        "Avatar05/Stroke": r8,
        "Avatar05/Fill": r4,
        ConnectorColor: r4,
    };
function r9(e) {
    return null != e ? r6.Ay.getUserAvatarURL(e, !1, 160, "png") : void 0;
}
function ie(e) {
    let t,
        { route: a, onNextStep: r, onPreviousStep: s } = e,
        n = (0, m.bG)([u.A], () => u.A.stats?.users ?? r3),
        c = (0, m.bG)([u.A], () => u.A.stats?.sidekick),
        d = (0, m.bG)([L.default], () => L.default.getCurrentUser()),
        l = (0, m.bG)([W.Ay], () => W.Ay.useReducedMotion),
        o = b.useRef(null),
        h = b.useRef(void 0),
        f = (function (e, t) {
            let [a, r] = b.useState({ route: e, hasShownSquad: e === j.gr.SQUAD, isTransitioning: !1 });
            switch (
                (a.route !== e &&
                    r({
                        route: e,
                        hasShownSquad: a.hasShownSquad || e === j.gr.SQUAD,
                        isTransitioning: !t && a.route === j.gr.SQUAD && e === j.gr.SIDEKICK,
                    }),
                b.useEffect(() => {
                    if (!a.isTransitioning) return;
                    let e = setTimeout(() => r((e) => ({ ...e, isTransitioning: !1 })), 1500);
                    return () => clearTimeout(e);
                }, [a.isTransitioning]),
                e)
            ) {
                case j.gr.SQUAD_TRANSITION:
                    return 5 * !!a.hasShownSquad;
                case j.gr.SQUAD:
                    return 1;
                case j.gr.SIDEKICK:
                    return a.isTransitioning ? 2 : 3;
                case j.gr.SIDEKICK_LEAVE:
                    return t ? 3 : 4;
                default:
                    return 0;
            }
        })(a, l);
    ((t = b.useRef(!0)),
        b.useEffect(() => {
            if (a !== j.gr.SIDEKICK_LEAVE) {
                t.current = !1;
                return;
            }
            if (t.current) return void s();
            if (l) return void r();
            let e = setTimeout(r, 1e3);
            return () => clearTimeout(e);
        }, [r, s, l, a]));
    let [p, x] = n,
        A = (0, rp.tx)(p) ?? "",
        v = (0, rp.tx)(x) ?? "",
        w = A.toLocaleUpperCase(),
        I = v.toLocaleUpperCase(),
        E = (0, rp.tx)(c?.user) ?? "",
        S = [
            { user: c?.user, name: E },
            { user: p, name: A },
            { user: x, name: v },
        ].filter((e) => null != e.user),
        N = n.length < 2,
        C = a === j.gr.SIDEKICK || a === j.gr.SIDEKICK_LEAVE;
    b.useEffect(() => () => clearInterval(h.current), []);
    let T = b.useCallback(() => {
        (clearInterval(h.current),
            (h.current = setInterval(() => {
                let e = o.current?.getProperties();
                e?.twoFriends?.value === N &&
                    e?.reducedMotion?.value === l &&
                    e?.["Avatar01/Username"]?.value === E.toLocaleUpperCase() &&
                    (o.current?.play(), clearInterval(h.current));
            }, 50)));
    }, [l, E, N]);
    return (0, i.jsxs)(aJ, {
        children: [
            (0, i.jsx)(rQ.m, {
                ref: o,
                className: r2.lW,
                fit: "contain",
                autoplay: !1,
                onLoad: T,
                withReducedMotion: "play",
                dataBinding: {
                    ...r7,
                    AnimationState: f,
                    "Avatar01/img": r9(c?.user),
                    "Avatar02/img": r9(x),
                    "Avatar03/img": r9(p),
                    "Avatar04/img": r9(c?.user),
                    "Avatar05/img": r9(d),
                    "Avatar01/Username": E.toLocaleUpperCase(),
                    "Avatar02/Username": I,
                    "Avatar03/Username": w,
                    "Avatar04/Username": E.toLocaleUpperCase(),
                    twoFriends: N,
                    reducedMotion: l,
                },
            }),
            a === j.gr.SQUAD_TRANSITION && (0, i.jsx)(it, {}),
            a === j.gr.SQUAD &&
                (0, i.jsxs)("div", {
                    className: r2.Qs,
                    children: [
                        (0, i.jsx)(ia, {
                            title: tf.intl.string(au.default.OzY5Ns),
                            accessibilityLabel: tf.intl.string(th.default.OSo1fB),
                            description: tf.intl.string(th.default.EqdLDd),
                        }),
                        (0, i.jsx)(g.A, {
                            tag: "ul",
                            children: S.map((e, t) => (0, i.jsx)("li", { children: e.name }, t)),
                        }),
                    ],
                }),
            C &&
                null != c &&
                (0, i.jsxs)("div", {
                    className: _()(r2.Qs, r2.yG),
                    children: [
                        (0, i.jsxs)("div", {
                            className: r2.Cv,
                            children: [
                                (0, i.jsx)(ia, {
                                    title: tf.intl.string(au.default["+uwOHt"]),
                                    accessibilityLabel: tf.intl.string(th.default.X4EiRH),
                                    description: tf.intl.string(th.default["/ctmGw"]),
                                }),
                                (0, i.jsx)(g.A, { children: E }),
                                (0, i.jsx)(ir, { sidekick: c }),
                            ],
                        }),
                        (0, i.jsx)(ii, { user: c.user, username: E }),
                    ],
                }),
        ],
    });
}
function it() {
    let e = ti();
    return (0, i.jsx)("div", {
        ref: e,
        className: _()(r2.Qs, r2.kY),
        children: (0, i.jsx)(rr, { children: tf.intl.string(th.default["6RSp5q"]) }),
    });
}
function ia(e) {
    let { title: t, accessibilityLabel: a, description: r } = e,
        s = ti();
    return (0, i.jsxs)("div", {
        className: r2.wx,
        children: [
            (0, i.jsxs)(ri, {
                ref: s,
                className: r2.R_,
                accessibilityLabel: a,
                children: [
                    (0, i.jsx)(rn, { icon: rZ.FriendsIcon, children: tf.intl.string(au.default.ZQakPR) }),
                    (0, i.jsx)(td, { variant: "display-lg", className: r2.Vy, children: t }),
                ],
            }),
            (0, i.jsx)(rr, { children: r }),
        ],
    });
}
function ir(e) {
    let { sidekick: t } = e,
        a = Math.round(t.numMessagesSent),
        r = Math.round(t.numVoiceMinutes);
    return (0, i.jsxs)("div", {
        className: r2.M1,
        children: [
            (0, i.jsxs)("div", {
                className: r2.dJ,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(ao.ChatIcon, { size: "md", color: "currentColor" }),
                    (0, i.jsx)(td, { variant: "heading-xxl/medium", className: r2.wk, children: a }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: r2.dJ,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(ap.MicrophoneIcon, { size: "md", color: "currentColor" }),
                    (0, i.jsx)(td, { variant: "heading-xxl/medium", className: r2.wk, children: r }),
                ],
            }),
            (0, i.jsx)(g.A, {
                children: tf.intl.formatToPlainString(th.default.NafXAs, { numMessages: a, numMinutes: r }),
            }),
        ],
    });
}
function ii(e) {
    let { user: t, username: a } = e,
        [r, n] = b.useState(""),
        [c, d] = b.useState(!1),
        [l, u] = b.useState(!1),
        h = (0, r5.A)(t.id),
        p = r.length > 0 && r.length <= 250 && !c && !l,
        m = c ? tf.intl.string(tf.t.fjcCk5) : tf.intl.formatToPlainString(tf.t["0ZQw/X"], { name: a });
    return h
        ? (0, i.jsxs)("div", {
              className: r2.OG,
              children: [
                  (0, i.jsx)("textarea", {
                      className: r2.yB,
                      value: r,
                      onChange: (e) => n(e.target.value),
                      maxLength: 250,
                      disabled: c || l,
                      placeholder: m,
                      "aria-label": m,
                  }),
                  (0, i.jsxs)("div", {
                      className: r2.n,
                      children: [
                          (0, i.jsx)(rJ.D, {
                              className: r2.KD,
                              onClick: function () {
                                  ((0, f.nr)(t.id),
                                      (0, r1.A)({
                                          giftRecipient: t,
                                          analyticsLocations: [tj.A.CHECKPOINT, tj.A.CHECKPOINT_SIDEKICK],
                                      }));
                              },
                              "aria-label": tf.intl.string(tf.t.Ve9Ge6),
                              children: (0, i.jsx)(r$.GiftIcon, { size: "refresh_sm", color: "currentColor" }),
                          }),
                          (0, i.jsx)(rJ.D, {
                              className: _()(r2.KD, { [r2.r9]: !p }),
                              onClick: async function () {
                                  if (p) {
                                      u(!0);
                                      try {
                                          (await (0, o.fr)(r, t.id),
                                              n(""),
                                              d(!0),
                                              x.O.announce(tf.intl.string(tf.t.fjcCk5), "polite"));
                                      } catch {
                                          (0, s.P0)({ text: tf.intl.string(tf.t.fEptJP), variant: "critical" });
                                      } finally {
                                          u(!1);
                                      }
                                  }
                              },
                              "aria-disabled": !p,
                              "aria-label": tf.intl.string(tf.t.oeb1vg),
                              children: (0, i.jsx)(r0.SendMessageIcon, { size: "refresh_sm", color: "currentColor" }),
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
var is = a(9767);
function ic(e) {
    let { games: t } = e,
        a = Math.round(t?.totalDaysPlayed ?? 0),
        r = (0, F.bD)(t?.totalDaysPlayedPercentile);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: is.dJ,
                children: [
                    (0, i.jsx)(rc, { icon: an.CalendarIcon, children: tf.intl.string(th.default["4N5p4D"]) }),
                    (0, i.jsx)(rN, { value: a }),
                ],
            }),
            (0, i.jsx)(rr, {
                children:
                    null != r
                        ? tf.intl.format(th.default["4FXB/m"], {
                              percent: r,
                              percentHook: (e, t) => (0, i.jsx)(rv, { children: e }, t),
                          })
                        : tf.intl.format(th.default.iCKjh6, { numDays: a }),
            }),
        ],
    });
}
function id(e) {
    let { numUsersPlayedEveryDay: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: is.dJ,
                children: [
                    (0, i.jsx)(rc, { icon: an.CalendarIcon, children: tf.intl.string(th.default["dx4+NI"]) }),
                    (0, i.jsx)(rR, { value: t }),
                ],
            }),
            (0, i.jsx)(rr, { children: tf.intl.string(th.default["7nfXWu"]) }),
        ],
    });
}
function il() {
    let e = (0, m.bG)([u.A], () => u.A.stats?.games),
        t = (0, m.bG)([u.A], () => (0, F.uO)(u.A.stats)),
        a = (0, m.bG)([u.A], () => u.A.globalStats?.games?.numUsersPlayedEveryDay),
        r = !t && null != a;
    return (0, i.jsx)(aJ, {
        children: (0, i.jsxs)("div", {
            className: is.kL,
            children: [
                (0, i.jsx)(e8, {
                    animatedSrc:
                        "https://cdn.discordapp.com/assets/content/e3289e9a0a7faf4db23c3fefa390126fc64a09120fdb701f9dea833dddf671ef.png",
                    staticSrc:
                        "https://cdn.discordapp.com/assets/content/312abde9b19fcf85150d507de3f33096992506459b895ab3ea8d92c8f1e04a28.png",
                    className: is.HW,
                }),
                (0, i.jsx)("div", {
                    className: is.C,
                    children: r ? (0, i.jsx)(id, { numUsersPlayedEveryDay: a }) : (0, i.jsx)(ic, { games: e }),
                }),
            ],
        }),
    });
}
var io = a(95362),
    iu = a(828062);
function ih(e) {
    let { children: t } = e;
    return (0, i.jsx)(td, { variant: "display-lg", className: iu.V, children: t });
}
function ib(e) {
    let { children: t } = e;
    return (0, i.jsx)(tl, { variant: "display-lg", className: iu.V, children: t });
}
var ip = a(109112),
    i_ = a(311043),
    im = a(883053);
function ix(e) {
    let { rank: t, className: a } = e;
    return (0, i.jsxs)(tu, { className: _()(im.T, a), children: ["#", t] });
}
var ig = a(770178),
    iA = a(102189);
let iv = { fireOnMount: !0, fireOnDepsChange: !0 };
function iw(e) {
    let { text: t, textRef: a, children: r } = e,
        s = (function (e, t) {
            let [a, r] = b.useState(!1),
                i = b.useCallback((e) => {
                    let { target: t } = e;
                    r(t.scrollWidth > t.clientWidth);
                }, []);
            return ((0, ig.g)(e, i, [t], iv), a);
        })(a, t);
    return (0, i.jsx)(aC.m, {
        text: t,
        position: "bottom",
        anchorRef: a,
        shouldShow: s,
        ariaHidden: !0,
        children: r({ tabIndex: s ? 0 : void 0, className: iA.Y }),
    });
}
var iI = a(497357);
let iE = "/assets/e74703a44e087adc.svg";
function ij(e) {
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
        b = (0, m.bG)(
            [i_.A],
            () =>
                i_.A.getGame(t)?.getCoverURL(300) ??
                r6.Ay.getApplicationIconURL({ id: t, icon: r, size: 300, keepAspectRatio: !0, fallbackAvatar: !1 }),
        );
    return (0, i.jsxs)("div", {
        ...f,
        role: "listitem",
        className: _()(iI.LO, o),
        style: d,
        children: [
            (0, i.jsxs)("div", {
                className: iI.Tn,
                "aria-hidden": null != l,
                children: [
                    (0, i.jsx)("img", { src: c, alt: "", className: iI.vf }),
                    null != b
                        ? (0, i.jsx)("img", { src: b, alt: "", className: iI.Qw })
                        : (0, i.jsx)("div", {
                              className: _()(iI.Qw, iI.uj),
                              children: (0, i.jsx)(ip.UnknownGameIcon, { size: "lg" }),
                          }),
                    null != s && (0, i.jsx)(ix, { rank: s, className: iI.Tm }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: iI.zH,
                "aria-hidden": null != l,
                children: [
                    (0, i.jsx)(td, {
                        ref: u,
                        variant: "heading-xl/medium",
                        className: iI.UU,
                        lineClamp: h,
                        children: a,
                    }),
                    (0, i.jsx)(td, { variant: "mono-md/bold", className: iI.Pf, children: n }),
                ],
            }),
            null != l && (0, i.jsx)(g.A, { children: l }),
        ],
    });
}
function iS(e) {
    let t = b.useRef(null);
    return (0, i.jsx)(iw, {
        text: e.game.name,
        textRef: t,
        children: (a) => {
            let { tabIndex: r, className: s } = a;
            return (0, i.jsx)(ij, { ...e, className: _()(e.className, s), tabIndex: r, textRef: t, lineClamp: 1 });
        },
    });
}
function iN(e, t, a) {
    return tf.intl.formatToPlainString(th.default.mqdLhl, { gameName: e.name, rank: t, numSessions: a });
}
function iC(e) {
    let { numSessions: t, ...a } = e,
        r = Math.round(t);
    return (0, i.jsx)(iS, { ...a, label: r, shellImage: iE, style: t3, accessibilityLabel: iN(a.game, a.rank, r) });
}
function iT(e) {
    let { numSessions: t, ...a } = e,
        r = Math.round(t);
    return (0, i.jsx)(iS, {
        ...a,
        rank: 1,
        label: r,
        shellImage: "/assets/fbe1ab9677ed007a.svg",
        style: t4,
        accessibilityLabel: iN(a.game, 1, r),
    });
}
function iR(e) {
    return (0, i.jsx)(ij, { ...e, shellImage: iE, style: t3, className: iI.Ku });
}
var iy = a(842807);
let iO = [];
function iM(e) {
    let { gameStats: t } = e,
        a = Math.round(t?.totalGamesPlayed ?? 0),
        r = (0, F.bD)(t?.totalGamesPlayedPercentile),
        s = t?.games ?? iO;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: iy.wx,
                children: [
                    (0, i.jsxs)("div", {
                        className: iy.dJ,
                        children: [
                            (0, i.jsx)(rc, {
                                icon: ad.GameControllerIcon,
                                children: tf.intl.string(th.default.HM2fjf),
                            }),
                            (0, i.jsx)(rN, { value: a, className: iy.ai }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: iy.h_,
                        children: (0, i.jsx)(rr, {
                            children:
                                null != r
                                    ? tf.intl.format(th.default["hc0/yJ"], {
                                          percent: r,
                                          percentHook: (e, t) => (0, i.jsx)(rv, { children: e }, t),
                                      })
                                    : tf.intl.format(th.default.aJMJ6b, { numGames: a }),
                        }),
                    }),
                ],
            }),
            (0, i.jsx)(io.Ip, {
                orientation: "horizontal",
                scrollbarGutter: !1,
                fade: !0,
                className: iy.ag,
                role: "list",
                children: s.map((e, t) => {
                    let { game: a, numSessions: r } = e;
                    return 0 === t
                        ? (0, i.jsx)(iT, { game: a, numSessions: r }, a.id)
                        : (0, i.jsx)(iC, { game: a, rank: t + 1, numSessions: r }, a.id);
                }),
            }),
        ],
    });
}
function ik(e) {
    let { gameStats: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: _()(iy.wx, iy.l7),
                children: [
                    (0, i.jsxs)("div", {
                        className: iy.dJ,
                        children: [
                            (0, i.jsx)(aX, { className: iy.gi }),
                            (0, i.jsx)(ib, { children: tf.intl.string(th.default.qbCgI7) }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: iy.h_,
                        children: (0, i.jsx)(rr, { children: tf.intl.string(th.default["0oDeiM"]) }),
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: _()(iy.ag, iy.Zs),
                role: "list",
                children: K.Jb.map((e) => {
                    let { list: a, label: r } = e,
                        s = t[a][0];
                    return null != s ? (0, i.jsx)(iR, { game: s, label: tf.intl.string(r) }, a) : null;
                }),
            }),
        ],
    });
}
function iL() {
    let e = (0, m.bG)([u.A], () => u.A.stats?.games),
        t = (0, m.bG)([u.A], () => (0, F.IH)(u.A.stats)),
        a = (0, m.bG)([u.A], () => u.A.globalStats?.games),
        r = !t && null != a;
    return (0, i.jsx)(aJ, {
        children: (0, i.jsx)("div", {
            className: _()(iy.kL, { [iy.TF]: r }),
            children: r ? (0, i.jsx)(ik, { gameStats: a }) : (0, i.jsx)(iM, { gameStats: e }),
        }),
    });
}
var iD = a(167662);
function iP(e) {
    let { messages: t } = e,
        a = Math.round(t?.numMessagesSent ?? 0),
        r = (0, F.bD)(t?.numMessagesSentPercentile);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: iD.dJ,
                children: [
                    (0, i.jsx)(rc, { icon: ao.ChatIcon, children: tf.intl.string(au.default.wWKySP) }),
                    (0, i.jsx)(rN, { value: a }),
                ],
            }),
            (0, i.jsx)(rr, {
                children:
                    null != r
                        ? tf.intl.format(th.default.TOMBAW, {
                              percent: r,
                              percentHook: (e, t) => (0, i.jsx)(rv, { children: e }, t),
                          })
                        : tf.intl.format(th.default.cYCqz8, { numMessages: a }),
            }),
        ],
    });
}
function iU(e) {
    let { numWordsSent: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: iD.dJ,
                children: [
                    (0, i.jsx)(rc, { icon: ao.ChatIcon, children: tf.intl.string(th.default["2BuyVC"]) }),
                    (0, i.jsx)(rR, { value: t }),
                ],
            }),
            (0, i.jsx)(rr, {
                children: tf.intl.format(th.default.bAxEs2, {
                    numWords: (0, F.wj)(t),
                    numCopies: (0, F.wj)((0, F.yQ)(t)),
                }),
            }),
        ],
    });
}
function iG() {
    let e = (0, m.bG)([u.A], () => u.A.stats?.messages),
        t = (0, m.bG)([u.A], () => (0, F.nb)(u.A.stats)),
        a = (0, m.bG)([u.A], () => u.A.globalStats?.messages?.numWordsSent),
        r = !t && null != a;
    return (0, i.jsx)(aJ, {
        children: (0, i.jsxs)("div", {
            className: iD.kL,
            children: [
                (0, i.jsx)(e8, {
                    animatedSrc:
                        "https://cdn.discordapp.com/assets/content/d2d8036bb6a32967893421f9956b9e8ed30abde474f68c1a34e824205549c5a1.png",
                    staticSrc:
                        "https://cdn.discordapp.com/assets/content/1dfd8684180df4216b23f0a61617250be8fcc12bc1970ac259892f34fbdb836d.png",
                    className: iD.HW,
                }),
                (0, i.jsx)("div", {
                    className: iD.C,
                    children: r ? (0, i.jsx)(iU, { numWordsSent: a }) : (0, i.jsx)(iP, { messages: e }),
                }),
            ],
        }),
    });
}
var iH = a(682163),
    iF = a(224865);
let iK = iH.iu[iH.Ay.Sizes.XLARGE];
function iB(e) {
    let { guild: t, size: a } = e;
    return null == t.icon && a < 48
        ? (0, i.jsx)("div", {
              className: _()(iF.K, iF.J),
              style: { width: a, height: a },
              "aria-hidden": !0,
              children: (0, i.jsx)(ts.E, { variant: "body-md/medium", children: (0, F.oW)(t.name) }),
          })
        : (0, i.jsx)(iH.Ay, {
              guild: t,
              size: iH.Ay.Sizes.XLARGE,
              iconSize: a,
              textScale: a / iK,
              className: iF.K,
              style: { width: a, height: a, borderRadius: 0 },
              "aria-hidden": !0,
          });
}
var iV = a(140645);
function iz(e) {
    let { numVoiceMinutes: t, numMessagesSent: a } = e,
        r = Math.round(t),
        s = Math.round(a);
    return (0, i.jsxs)("div", {
        className: iV.M1,
        children: [
            (0, i.jsxs)("div", {
                className: iV.dJ,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(ap.MicrophoneIcon, { size: "md", color: "currentColor" }),
                    (0, i.jsx)(td, { variant: "mono-md/bold", className: iV.Qq, children: r }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: iV.dJ,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(ao.ChatIcon, { size: "md", color: "currentColor" }),
                    (0, i.jsx)(td, { variant: "mono-md/bold", className: iV.Qq, children: s }),
                ],
            }),
            (0, i.jsx)(g.A, {
                children: tf.intl.formatToPlainString(th.default["OQjeY/"], { numMinutes: r, numMessages: s }),
            }),
        ],
    });
}
var iW = a(972106);
let iq = [];
function iY(e) {
    let { guild: t, rank: a, iconSize: r = 100, children: s } = e,
        n = b.useRef(null);
    return (0, i.jsx)(iw, {
        text: t.name,
        textRef: n,
        children: (e) => {
            let { tabIndex: c, className: d } = e;
            return (0, i.jsxs)("li", {
                className: _()(iW.w_, d),
                tabIndex: c,
                children: [
                    (0, i.jsxs)("div", {
                        className: iW.jj,
                        children: [
                            (0, i.jsx)(ix, { rank: a }),
                            (0, i.jsxs)("div", {
                                className: iW.gI,
                                children: [
                                    (0, i.jsx)(td, {
                                        ref: n,
                                        variant: "heading-xxl/medium",
                                        className: iW.J5,
                                        lineClamp: 1,
                                        children: t.name,
                                    }),
                                    s,
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsx)(iB, { guild: t, size: r }),
                ],
            });
        },
    });
}
function iX(e) {
    let { guild: t, numVoiceMinutes: a, numMessagesSent: r } = e;
    return (0, i.jsx)(iY, {
        guild: t,
        rank: 1,
        iconSize: 140,
        children: (0, i.jsx)(iz, { numVoiceMinutes: a, numMessagesSent: r }),
    });
}
function iQ(e) {
    let { guilds: t } = e,
        a = ti();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: iW.wx,
                children: [
                    (0, i.jsxs)(ri, {
                        ref: a,
                        className: iW.R_,
                        accessibilityLabel: tf.intl.string(th.default.FroqRf),
                        children: [
                            (0, i.jsx)(rn, { icon: af.ServerIcon, children: tf.intl.string(th.default.Mb5E6r) }),
                            (0, i.jsx)(ih, { children: tf.intl.string(au.default.F0fkrh) }),
                        ],
                    }),
                    (0, i.jsx)(rr, { children: tf.intl.string(th.default.IN1DaS) }),
                ],
            }),
            (0, i.jsx)("ul", {
                className: iW.Pl,
                children: t.map((e, t) => {
                    let { guild: a, numMessagesSent: r, numVoiceMinutes: s } = e;
                    return 0 === t
                        ? (0, i.jsx)(iX, { guild: a, numMessagesSent: r ?? 0, numVoiceMinutes: s ?? 0 }, a.id)
                        : (0, i.jsx)(iY, { guild: a, rank: t + 1 }, a.id);
                }),
            }),
        ],
    });
}
function iZ(e) {
    let { guilds: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: iW.wx,
                children: [
                    (0, i.jsxs)("div", {
                        className: iW.R_,
                        children: [
                            (0, i.jsx)(aX, { className: iW.gi }),
                            (0, i.jsx)(ib, { children: tf.intl.string(au.default.F0fkrh) }),
                        ],
                    }),
                    (0, i.jsx)(rr, { children: tf.intl.string(th.default.bhnqop) }),
                ],
            }),
            (0, i.jsx)("ul", {
                className: iW.Pl,
                children: t.map((e, t) => (0, i.jsx)(iY, { guild: e, rank: t + 1 }, e.id)),
            }),
        ],
    });
}
function iJ() {
    let e = (0, m.bG)([u.A], () => u.A.stats?.guilds?.guilds ?? iq),
        t = (0, m.bG)([u.A], () => u.A.globalStats?.guilds?.guildsByMembers),
        a = 0 === e.length && null != t;
    return (0, i.jsx)(aJ, {
        children: (0, i.jsx)("div", {
            className: iW.kL,
            children: a ? (0, i.jsx)(iZ, { guilds: t }) : (0, i.jsx)(iQ, { guilds: e }),
        }),
    });
}
var i$ = a(155094);
function i0(e) {
    let { icon: t, title: a, description: r } = e;
    return (0, i.jsx)(aJ, {
        children: (0, i.jsxs)("div", {
            className: i$.Q,
            children: [(0, i.jsx)(rc, { icon: t, children: a }), (0, i.jsx)(rr, { children: r })],
        }),
    });
}
var i1 = a(7584),
    i5 = a(33293),
    i6 = a(498137),
    i2 = a(192339),
    i3 = a(574414),
    i4 = a(834109),
    i8 = a(48763);
function i7(e) {
    let { character: t, power: a } = e,
        r = (0, w.o)(t);
    return (0, i.jsxs)(i6.A, {
        cardColorPalette: r,
        size: i8.W.LG,
        children: [
            (0, i.jsx)(i2.A, {}),
            (0, i.jsx)(i4.A, { variant: "full" }),
            null != a
                ? (0, i.jsx)(i3.A, {
                      powerLevel: (0, rt.Le)(a.powerLevel),
                      powerLevelUnits: (0, rt.sX)(a.powerLevelPercentile),
                  })
                : null,
            (0, i.jsx)(i5.A, { character: t }),
        ],
    });
}
var i9 = a(58410);
function se() {
    let e = (0, m.bG)([u.A], () => u.A.stats),
        t = (0, m.bG)([u.A], () => u.A.character),
        a = ti();
    return (0, i.jsx)(aJ, {
        children: (0, i.jsxs)("div", {
            className: i9.z,
            children: [
                null != t ? (0, i.jsx)(i7, { character: t, power: e?.power }) : null,
                (0, i.jsxs)("div", {
                    className: _()(i9.zH, null === e && i9.gz),
                    children: [
                        (0, i.jsxs)(ri, {
                            ref: a,
                            className: i9.R_,
                            accessibilityLabel: tf.intl.string(th.default.ASrTAc),
                            children: [
                                (0, i.jsx)(rn, {
                                    icon: a2.ExperimentalCheckpointIcon,
                                    children: tf.intl.string(au.default.ir6nEQ),
                                }),
                                (0, i.jsx)(td, {
                                    variant: "display-lg",
                                    className: i9.Vy,
                                    children: tf.intl.string(au.default.y4M1na),
                                }),
                            ],
                        }),
                        null === e ? (0, i.jsx)(st, { character: t }) : (0, i.jsx)(sa, { stats: e }),
                    ],
                }),
            ],
        }),
    });
}
function st(e) {
    let { character: t } = e,
        { primaryBackgroundColor: a } = (0, w.j)((0, w.o)(t));
    return (0, i.jsx)(td, {
        tag: "p",
        variant: "heading-xl/medium",
        style: { color: a },
        children: tf.intl.string(th.default["GL+yOs"]),
    });
}
function sa(e) {
    let { stats: t } = e,
        a = t.guilds?.guilds[0],
        r = t.emojis?.emojis[0],
        s = t.games?.games[0]?.game,
        n =
            null != s
                ? r6.Ay.getApplicationIconURL({ id: s.id, icon: s.iconHash, size: 40, fallbackAvatar: !1 })
                : void 0;
    return (0, i.jsxs)("div", {
        className: i9.M1,
        children: [
            (0, i.jsx)(sr, { label: tf.intl.string(th.default.MSrV9z), value: t.voice?.totalVoiceMinutes }),
            (0, i.jsx)(sr, { label: tf.intl.string(th.default.hhh11L), value: t.messages?.numMessagesSent }),
            (0, i.jsx)(sr, { label: tf.intl.string(th.default["f5S+pt"]), value: a?.numDaysInteracted }),
            (0, i.jsx)(si, {
                label: tf.intl.string(au.default["8XPMJj"]),
                icon: null != a ? (0, i.jsx)(iB, { guild: a.guild, size: 40 }) : (0, i.jsx)(ss, {}),
                name: null != a ? a.guild.name : tf.intl.string(tf.t.PoWNfe),
            }),
            (0, i.jsx)(sr, { label: tf.intl.string(th.default.xVSlv3), value: t.emojis?.numEmojisSent }),
            (0, i.jsx)(si, {
                label: tf.intl.string(au.default["3sARW7"]),
                icon:
                    null != r
                        ? (0, i.jsx)(rg.A, {
                              emojiId: r.id,
                              emojiName: null == r.id ? r.name : void 0,
                              animated: r.animated,
                              alt: "",
                              className: i9.Kk,
                          })
                        : (0, i.jsx)(ss, {}),
                name:
                    null == r
                        ? tf.intl.string(tf.t.PoWNfe)
                        : null == r.id
                          ? i1.Ay.convertSurrogateToName(r.name)
                          : `:${r.name}:`,
            }),
            (0, i.jsx)(sr, { label: tf.intl.string(th.default.y2Y1DD), value: t.games?.totalDaysPlayed }),
            (0, i.jsx)(si, {
                label: tf.intl.string(au.default.RbT4Zq),
                icon:
                    null != n
                        ? (0, i.jsx)("img", { src: n, alt: "", className: _()(i9.Kk, i9.Gt) })
                        : null == s
                          ? (0, i.jsx)(ss, {})
                          : (0, i.jsx)("div", {
                                className: _()(i9.Kk, i9.Gc),
                                children: (0, i.jsx)(ip.UnknownGameIcon, { size: "md", color: "currentColor" }),
                            }),
                name: null != s ? s.name : tf.intl.string(tf.t.PoWNfe),
            }),
        ],
    });
}
function sr(e) {
    let { label: t, value: a } = e;
    return (0, i.jsxs)("div", {
        className: i9.dJ,
        children: [
            (0, i.jsx)(td, { variant: "heading-md/semibold", children: t }),
            (0, i.jsx)(td, {
                variant: "heading-xxl/medium",
                className: i9.wk,
                children: Math.round(a ?? 0).toLocaleString(tf.intl.currentLocale),
            }),
        ],
    });
}
function si(e) {
    let { label: t, icon: a, name: r } = e,
        s = b.useRef(null);
    return (0, i.jsx)(iw, {
        text: r,
        textRef: s,
        children: (e) => {
            let { tabIndex: n, className: c } = e;
            return (0, i.jsxs)("div", {
                className: _()(i9.dJ, i9.u4, c),
                tabIndex: n,
                children: [
                    (0, i.jsx)(td, { variant: "heading-md/semibold", children: t }),
                    (0, i.jsxs)("div", {
                        className: i9.AS,
                        children: [
                            a,
                            (0, i.jsx)(td, {
                                ref: s,
                                variant: "heading-xl/medium",
                                lineClamp: 1,
                                className: i9.TJ,
                                children: r,
                            }),
                        ],
                    }),
                ],
            });
        },
    });
}
function ss() {
    return (0, i.jsx)("div", {
        className: _()(i9.Kk, i9.Gc, i9.Wn),
        children: (0, i.jsx)(ip.UnknownGameIcon, { size: "lg", color: "currentColor" }),
    });
}
var sn = a(651946);
function sc() {
    let e = (0, m.bG)([u.A], () => u.A.stats?.guilds?.guilds[0]),
        t = Math.round(e?.numDaysInteracted ?? 0),
        a = (0, F.bD)(e?.numDaysInteractedPercentile),
        r = b.useRef(null);
    return (0, i.jsx)(aJ, {
        children: (0, i.jsxs)("div", {
            className: sn.kL,
            children: [
                (0, i.jsxs)("div", {
                    className: sn.wx,
                    children: [
                        (0, i.jsxs)("div", {
                            className: sn.R_,
                            children: [
                                (0, i.jsx)(rc, { icon: af.ServerIcon, children: tf.intl.string(th.default["M+a+t1"]) }),
                                (0, i.jsx)(rN, { value: t }),
                            ],
                        }),
                        (0, i.jsx)(rr, {
                            children:
                                null != a
                                    ? tf.intl.format(th.default.sIDTV1, {
                                          numDays: t,
                                          percent: a,
                                          percentHook: (e, t) => (0, i.jsx)(rv, { children: e }, t),
                                      })
                                    : tf.intl.format(th.default.nLCUQ4, { numDays: t }),
                        }),
                    ],
                }),
                null != e &&
                    (0, i.jsx)("div", {
                        className: sn.bU,
                        children: (0, i.jsx)(iw, {
                            text: e.guild.name,
                            textRef: r,
                            children: (t) => {
                                let { tabIndex: a, className: s } = t;
                                return (0, i.jsxs)("div", {
                                    className: _()(sn.Nr, s),
                                    style: { width: 360 },
                                    tabIndex: a,
                                    children: [
                                        (0, i.jsx)(iB, { guild: e.guild, size: 360 }),
                                        (0, i.jsxs)("div", {
                                            className: sn.zH,
                                            children: [
                                                (0, i.jsx)(td, {
                                                    ref: r,
                                                    variant: "heading-xxl/medium",
                                                    className: sn.J5,
                                                    lineClamp: 1,
                                                    children: e.guild.name,
                                                }),
                                                (0, i.jsx)(iz, {
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
var sd = a(270704);
function sl(e) {
    let { voice: t } = e,
        a = Math.round(t?.totalVoiceMinutes ?? 0),
        r = (0, F.bD)(t?.totalVoiceMinutesPercentile);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: sd.dJ,
                children: [
                    (0, i.jsx)(rc, { icon: ap.MicrophoneIcon, children: tf.intl.string(th.default["3/T12E"]) }),
                    (0, i.jsx)(rN, { value: a, alignment: "center" }),
                ],
            }),
            (0, i.jsx)(rr, {
                children:
                    null != r
                        ? tf.intl.format(th.default.RqXsIs, {
                              percent: r,
                              percentHook: (e, t) => (0, i.jsx)(rv, { children: e }, t),
                          })
                        : tf.intl.format(th.default.Y3poDW, { numMinutes: a }),
            }),
        ],
    });
}
function so(e) {
    let { peakHour: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: sd.dJ,
                children: [
                    (0, i.jsx)(rc, { icon: ap.MicrophoneIcon, children: tf.intl.string(th.default.ZCwB8J) }),
                    (0, i.jsx)(rR, { value: t }),
                ],
            }),
            (0, i.jsx)(rr, { children: tf.intl.string(th.default.huiTne) }),
        ],
    });
}
function su() {
    let e = (0, m.bG)([u.A], () => u.A.stats?.voice),
        t = (0, m.bG)([u.A], () => (0, F.Kr)(u.A.stats)),
        a = (0, m.bG)([u.A], () => u.A.globalStats?.voice?.peakHourUtc),
        r = (0, F.XF)(a)?.value,
        s = !t && null != r;
    return (0, i.jsxs)(aJ, {
        children: [
            (0, i.jsx)(e8, {
                animatedSrc:
                    "https://cdn.discordapp.com/assets/content/04746dc04eab575d0168935af2b1b3f97e2e00439f84bd0f0474276e0c5a81dc.png",
                staticSrc:
                    "https://cdn.discordapp.com/assets/content/c4c2d6b631bff3da4e4bb9afffc8f89bc9fb6f76a2fcd824f8a7af83eb7f1e6b.png",
                className: sd.Tp,
            }),
            (0, i.jsx)("div", {
                className: sd.Qs,
                children: s ? (0, i.jsx)(so, { peakHour: r }) : (0, i.jsx)(sl, { voice: e }),
            }),
        ],
    });
}
function sh(e) {
    let { route: t, onNextStep: a, onPreviousStep: r } = e;
    if (t === j.gr.HOME) return (0, i.jsx)(rx, { onStart: a });
    if (t === j.gr.INTRODUCTION) return (0, i.jsx)(a1, {});
    let { statsScreen: s } = (0, j.UG)(t);
    switch (s) {
        case j.oI.VOICE_INTRO:
            return (0, i.jsx)(i0, {
                icon: ap.MicrophoneIcon,
                title: tf.intl.string(th.default["/7XYsa"]),
                description: tf.intl.string(th.default["X8/G/o"]),
            });
        case j.oI.VOICE:
            return (0, i.jsx)(su, {});
        case j.oI.MESSAGES_INTRO:
            return (0, i.jsx)(i0, {
                icon: ao.ChatIcon,
                title: tf.intl.string(th.default["2BuyVC"]),
                description: tf.intl.string(th.default["kF+Y3a"]),
            });
        case j.oI.MESSAGES:
            return (0, i.jsx)(iG, {});
        case j.oI.SERVERS_INTRO:
            return (0, i.jsx)(i0, {
                icon: af.ServerIcon,
                title: tf.intl.string(au.default.F0fkrh),
                description: tf.intl.string(th.default.Xg82Gy),
            });
        case j.oI.SERVERS:
            return (0, i.jsx)(iJ, {});
        case j.oI.TOP_SERVER:
            return (0, i.jsx)(sc, {});
        case j.oI.EMOJI_INTRO:
            return (0, i.jsx)(i0, {
                icon: tr.EmojiSlightlySmilingFaceIcon,
                title: tf.intl.string(th.default.ZTDCIv),
                description: tf.intl.string(th.default.y8Sr8J),
            });
        case j.oI.EMOJI:
            return (0, i.jsx)(rY, {});
        case j.oI.GAMES_INTRO:
            return (0, i.jsx)(i0, {
                icon: ad.GameControllerIcon,
                title: tf.intl.string(th.default.HM2fjf),
                description: tf.intl.string(th.default.LQiFqJ),
            });
        case j.oI.GAMES:
            return (0, i.jsx)(iL, {});
        case j.oI.GAME_TIME:
            return (0, i.jsx)(il, {});
        case j.oI.SQUAD:
        case j.oI.SIDEKICK:
            return (0, i.jsx)(ie, { route: t, onNextStep: a, onPreviousStep: r });
        case j.oI.SUMMARY:
            return (0, i.jsx)(se, {});
        case j.oI.SHARE:
            return (0, i.jsx)(ro, {});
        default:
            return null;
    }
}
var sf = a(650809),
    sb = a(428692);
let sp = {
    [j.s9.FACE]: { icon: ap.MicrophoneIcon, label: tf.t.K3lovD },
    [j.s9.OUTFIT]: { icon: ao.ChatIcon, label: tf.t.OIgYlQ },
    [j.s9.HEADWEAR]: { icon: af.ServerIcon, label: tf.t["7hB4kg"] },
    [j.s9.SHOES]: { icon: tr.EmojiSlightlySmilingFaceIcon, label: tf.t.sMOuuS },
    [j.s9.WEARABLE]: { icon: ad.GameControllerIcon, label: tf.t.URyqtP },
    [j.s9.AURA]: { icon: an.CalendarIcon, label: th.default.y2Y1DD },
    [j.s9.ASSEMBLED]: { icon: rZ.FriendsIcon, label: tf.t.TdEu5X },
    [j.s9.FINALIZE]: { icon: sf.PaintPaletteIcon, label: th.default.gmMD2I },
    [j.s9.SUMMARY]: { icon: a2.ExperimentalCheckpointIcon, label: au.default.y4M1na },
};
function s_(e) {
    let {
            step: { icon: t, label: a, route: r },
            state: s,
            disabled: n,
            blockedTraitDescriptionId: c,
            sound: d,
            onRouteClick: l,
        } = e,
        o = tf.intl.string(a),
        u = "unlocked" === s,
        {
            onPointerDown: h,
            onKeyDown: f,
            onClickWithSound: b,
        } = aP({ source: d, onClick: () => l(r), disabled: n || !u });
    return (0, i.jsx)(aC.m, {
        text: "locked" === s ? null : o,
        ariaHidden: !0,
        children: (0, i.jsxs)(rJ.D, {
            onPointerDown: u ? h : void 0,
            onKeyDown: u ? f : void 0,
            onClick: u ? b : void 0,
            tabIndex: u ? 0 : -1,
            role: "tab",
            "aria-selected": "active" === s,
            className: _()(sb.PM, { [sb.Xj]: "active" === s, [sb.CD]: u, [sb.vk]: u && !n }),
            "aria-label": o,
            "aria-disabled": "locked" === s || (u && n),
            "aria-describedby": u ? c : void 0,
            children: [
                (0, i.jsx)("div", { className: _()(sb.Om, { [sb.hZ]: "locked" !== s }) }),
                (0, i.jsx)(t, { size: "xs", color: "currentColor", className: sb.Kk }),
            ],
        }),
    });
}
function sm(e) {
    let { flow: t, stats: a, activeRoute: r, isRouteBlocked: s, blockedTraitDescriptionId: n, onRouteClick: c } = e,
        d = (function (e, t) {
            let a = [];
            for (let r of (0, E.p5)({ flow: e, stats: t })) {
                let { characterStage: e } = (0, j.UG)(r),
                    t = sp[e];
                null != t && a.at(-1)?.stage !== e && a.push({ ...t, stage: e, route: r });
            }
            return a;
        })(t, a),
        { characterStage: l } = (0, j.UG)(r),
        o = d.findIndex((e) => {
            let { stage: t } = e;
            return t === l;
        }),
        [h, f] = b.useState(o);
    o > h && f(o);
    let p = (0, m.bG)([u.A], () => u.A.isSaving);
    return -1 === o
        ? null
        : (0, i.jsx)("div", {
              className: sb.qB,
              role: "tablist",
              "aria-label": tf.intl.string(th.default.DyMw85),
              children: d.map((e, t) =>
                  (0, i.jsx)(
                      s_,
                      {
                          step: e,
                          state: t === o ? "active" : t <= h ? "unlocked" : "locked",
                          disabled: p || s,
                          blockedTraitDescriptionId: n,
                          sound: t < o ? aj : aS,
                          onRouteClick: c,
                      },
                      e.stage,
                  ),
              ),
          });
}
var sx = a(517782);
function sg() {
    let e = b.useId(),
        t = b.useRef(null);
    return (b.useEffect(() => (x.O.moveTo?.(e, t.current), () => x.O.remove?.(e)), [e]), (0, i.jsx)(g.A, { ref: t }));
}
function sA(e) {
    let t,
        a,
        { didPlayerShareDataWithDiscord: r, onClose: s } = e;
    ((0, m.bG)([u.A], () => u.A.fetchState),
        (t = (0, m.yK)([u.A], () => {
            let { stats: e, globalStats: t } = u.A,
                a = t?.games;
            if ((0, F.IH)(e) || null == a)
                return (
                    e?.games?.games.map((e) => {
                        let { game: t } = e;
                        return t.id;
                    }) ?? []
                );
            let r = [];
            return (
                K.Jb.forEach((e) => {
                    let { list: t } = e,
                        i = a[t][0];
                    null != i && r.push(i.id);
                }),
                r
            );
        })),
        b.useEffect(() => {
            let { fetchState: e } = u.A;
            (e === u.T.INIT || e === u.T.ERROR) && (0, o.nX)();
        }, []),
        b.useEffect(() => {
            (0, H.E)(t);
        }, [t]));
    let n = (0, E.bL)(r),
        [c, l] = (function (e) {
            let [t, a] = b.useState(() =>
                (function (e) {
                    let { character: t, progress: a, stats: r, isCharacterCreatorEnabled: i } = u.A,
                        s = null != t ? j.s9.SUMMARY : a?.stage;
                    return (
                        (0, E.p5)({ flow: e, stats: r, character: t, isCharacterCreatorEnabled: i }).find(
                            (e) => (0, j.UG)(e).characterStage === s,
                        ) ?? j.gr.HOME
                    );
                })(e),
            );
            return (
                b.useEffect(() => {
                    let { characterStage: e } = (0, j.UG)(t);
                    (0, o.l4)(e);
                }, [t]),
                [t, a]
            );
        })(n);
    (b.useEffect(() => {
        (h.A.setStepName(c), (0, f.if)(c));
    }, [c]),
        (0, G.l0)(() => {
            (h.A.stop(), (0, f.i)(h.A.getStepName()));
        }),
        (a = (0, m.bG)([d.A], () => d.A.isFocused() && d.A.isVisible())),
        b.useEffect(() => {
            h.A.setForeground(a);
        }, [a]));
    let { characterStage: p, statsScreen: x } = (0, j.UG)(c),
        k = c === j.gr.HOME || null != x,
        L = c === j.gr.INTRODUCTION,
        D = (0, j.Rq)(c),
        P = (0, m.bG)([u.A], () => (u.A.fetchState === u.T.SUCCESS ? u.A.stats : void 0)),
        B = (0, m.bG)([u.A], () => u.A.character),
        z = b.useMemo(
            () =>
                (function (e, t) {
                    switch (e) {
                        case j.gr.SUMMARY:
                        case j.gr.SHARE:
                            let a = (0, w.o)(t),
                                { primaryBackgroundColor: r, shadowColor: i } = (0, w.j)(a);
                            return {
                                ...t8,
                                "--custom-checkpoint-primary": r,
                                "--custom-checkpoint-button-border": r,
                                "--custom-checkpoint-button-shadow": i,
                                "--custom-checkpoint-background-gradient-start": r,
                            };
                        default:
                            return t8;
                    }
                })(c, B),
            [c, B],
        ),
        W = (function () {
            let { isMuted: e, volume: t } = (0, m.cf)([u.A], () => ({ isMuted: u.A.isMuted, volume: u.A.volume })),
                a = b.useRef(new Map()),
                r = b.useRef(null),
                i = b.useCallback(() => {
                    (r.current?.(), a.current.forEach((e) => e.pause()));
                }, []);
            return (
                b.useEffect(() => ((a.current = new Map(y.map((e) => [e, new Audio(e)]))), i), [i]),
                b.useEffect(() => {
                    a.current.forEach((a) => {
                        ((a.muted = e), (a.volume = t));
                    });
                }, [e, t]),
                b.useCallback(
                    (e) => {
                        var t;
                        let s;
                        (i(),
                            (t = (e) => {
                                let t = a.current.get(e);
                                null == t || u.A.isMuted || 0 === u.A.volume || ((t.currentTime = 0), t.play());
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
        Y = U(),
        Q = (0, I.k0)(c, Y),
        J = b.useId(),
        $ = null != Q ? J : void 0,
        ee = b.useCallback(
            (e) => {
                let t = (function (e) {
                    let { previousRoute: t, route: a } = e;
                    if (t === j.gr.SIDEKICK_LEAVE && a === j.gr.SIDEKICK) return null;
                    if (t === j.gr.FINALIZE_CHARACTER && a === j.gr.SUMMARY) return [];
                    let r = [];
                    return (
                        a === j.gr.INTRODUCTION
                            ? (r.push({ source: S, delayMs: 0 }),
                              r.push({ source: R, delayMs: 2500 }),
                              r.push({ source: N, delayMs: 2800 }))
                            : O(t) && M(a)
                              ? r.push({ source: C, delayMs: 0 })
                              : M(t) && O(a) && (r.push({ source: T, delayMs: 0 }), r.push({ source: R, delayMs: 0 })),
                        r
                    );
                })({ previousRoute: c, route: e });
                (null != t && W(t), l(e));
            },
            [c, W, l],
        ),
        et = b.useCallback(
            (e) => {
                let t = (0, E.SK)({ flow: n, stats: P, currentRoute: c, direction: e });
                if (null == t) {
                    1 === e && s();
                    return;
                }
                ee(t);
            },
            [c, n, ee, s, P],
        ),
        er = b.useCallback(() => et(-1), [et]),
        ei = b.useCallback(() => et(1), [et]),
        es = b.useCallback(() => ee((0, E.$_)({ flow: n, stats: P })), [n, ee, P]),
        en = b.useCallback(
            (e) => {
                if (!u.A.isSaving) {
                    if (null != Q) return void V(Q);
                    ee(e);
                }
            },
            [Q, ee],
        );
    return (0, i.jsx)(A.N, {
        theme: q.NJ.DARK,
        children: (e) =>
            (0, i.jsxs)("div", {
                className: _()(e, sx.kL),
                style: z,
                role: "dialog",
                "aria-modal": !0,
                "aria-label": tf.intl.string(au.default["CdU/PF"]),
                children: [
                    (0, i.jsx)(sg, {}),
                    (0, i.jsxs)("div", {
                        className: sx.$s,
                        children: [
                            (0, i.jsx)(aE, {}),
                            (0, i.jsx)(Z, {
                                size: "sm",
                                "aria-label": tf.intl.string(tf.t.cpT0Cq),
                                onClick: s,
                                children: (0, i.jsx)(v.XSmallIcon, { size: "xs", color: "currentColor" }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(e4, {
                        stage: p,
                        isCovered: k,
                        className: sx.qd,
                        children: L && (0, i.jsx)(sh, { route: j.gr.INTRODUCTION, onNextStep: ei, onPreviousStep: er }),
                    }),
                    (0, i.jsx)(ea, {
                        visible: k,
                        enter: eZ,
                        exit: eZ,
                        hiddenScale: 1.02,
                        keepMounted: !0,
                        className: sx.qd,
                        style: z,
                        children: (0, i.jsx)(X, { isVisible: k }),
                    }),
                    (0, i.jsx)(ea, {
                        visible: D,
                        enter: e0,
                        exit: e1,
                        className: sx.qd,
                        children: (0, i.jsx)(am, { route: c }),
                    }),
                    (0, i.jsx)(ea, {
                        visible: k,
                        enter: e$,
                        exit: eJ,
                        hiddenScale: 1.02,
                        mountAfterDelay: !0,
                        className: sx.qd,
                        style: z,
                        children: (0, i.jsx)(sh, { route: c, onNextStep: ei, onPreviousStep: er }),
                    }),
                    (0, i.jsx)(aY, {
                        activeRoute: c,
                        blockedTrait: Q,
                        blockedTraitDescriptionId: $,
                        onBack: er,
                        onNext: ei,
                        onReplay: es,
                    }),
                    (0, i.jsx)(ta, { activeRoute: c }),
                    (0, i.jsx)(sm, {
                        flow: n,
                        stats: P,
                        activeRoute: c,
                        isRouteBlocked: null != Q,
                        blockedTraitDescriptionId: $,
                        onRouteClick: en,
                    }),
                    null != Q && (0, i.jsx)(g.A, { id: J, children: (0, I.Cz)(Q) }),
                ],
            }),
    });
}
function sv() {
    if (l._.hasSubscribers(aL.jej.MODAL_CLOSE)) return (l._.dispatch(aL.jej.MODAL_CLOSE), !0);
    let e = (0, c.mU)(document.activeElement ?? document.body);
    return !!e?.hasSubscribers(aL.jej.POPOUT_CLOSE) && (e.dispatch(aL.jej.POPOUT_CLOSE), !0);
}
async function sw(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { didPlayerShareDataWithDiscord: a = !0, ...r } = t,
        c = await (0, o.nX)(r);
    c === u.T.ERROR
        ? (0, s.P0)({ text: tf.intl.string(tf.t.fEptJP), variant: "critical" })
        : c !== u.T.FETCHING &&
          (h.A.initialize({ didPlayerShareDataWithDiscord: a, isForeground: d.A.isFocused() && d.A.isVisible() }),
          (0, f.lw)(e),
          (0, n.B8)(
              (e) => {
                  let { closeLayer: t } = e;
                  return (0, i.jsx)(sA, { didPlayerShareDataWithDiscord: a, onClose: t });
              },
              { onEscape: sv },
          ));
}
