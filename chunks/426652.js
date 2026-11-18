a.d(t, { D: () => nQ });
var r,
    i,
    n = a(477900),
    s = a(858899),
    c = a(361158),
    d = a(267102),
    l = a(531685),
    o = a(188567),
    u = a(796104),
    h = a(719718),
    f = a(527926),
    b = a(617390),
    p = a(582128),
    _ = a(503698),
    m = a.n(_),
    x = a(337836),
    g = a(855986),
    A = a(765178),
    v = a(140735),
    w = a(43990),
    I = a(789645),
    E = a(373955),
    j = a(503235),
    S = a(847011),
    C = a(201779);
a(321073);
let N =
        "https://cdn.discordapp.com/assets/content/05e7df987cb6150a2d6cbfe4aca2cdacfb4188166f8ff9bbde7421afcd85b382.mp3",
    T =
        "https://cdn.discordapp.com/assets/content/7b28adce16a979de5d4f6b8331dfedca2806d1b0b15f694b7a196db7f624918c.mp3",
    R =
        "https://cdn.discordapp.com/assets/content/aada5b40828140b41a56df82e81783cd43fd60e30ac1eb3c9f93a087b95dcf03.mp3",
    O =
        "https://cdn.discordapp.com/assets/content/04536b9e5b26d0b6e85116ce546b7d5ba97da31e7de7a1e02da262bcd5249bb0.mp3",
    M =
        "https://cdn.discordapp.com/assets/content/82d771ff521a99ea8e26239d2f2e48ae847e39575bc5bce396739b430b8a6fda.mp3",
    y = [N, T, R, O, M];
function L(e) {
    return e !== C.gr.HOME && null == (0, C.UG)(e).statsScreen;
}
function k(e) {
    return null != (0, C.UG)(e).statsScreen;
}
var D = a(127639),
    P = a(287809),
    U = a(474090),
    G = a(817379);
function H() {
    return (0, g.yK)([h.A, P.default], () => {
        let { selectedCharacterTraits: e, stats: t, character: a } = h.A,
            r = (0, U.ki)(P.default.getCurrentUser());
        return Object.values(D.V).filter((i) => {
            let n = e[i];
            return null != n && (0, G.tS)(i, n, { stats: t, hasNitro: r, savedCharacter: a });
        });
    });
}
var F = a(517846),
    K = a(73153),
    B = a(669700),
    z = a(964486),
    V = a(775602),
    W = (((r = {}).STATS = "stats"), (r.CUSTOMIZATION_ROUTE_CHANGE = "customization_route_change"), r);
let q = { delay: 0, duration: 350 },
    Y = { delay: 35, duration: 125 },
    Z = { delay: 200, duration: 125 },
    X = { delay: 700, duration: 175 },
    Q = { delay: 175, duration: 175 },
    J = { delay: 0, duration: 125 },
    $ = { delay: 175, duration: 175 },
    ee = { delay: 0, duration: 175 },
    et = { delay: 0, duration: 0 },
    ea = { delay: 0, duration: 175 },
    er = { delay: q.delay + q.duration, duration: 0 },
    ei = Z.delay + 500;
var en = a(920495),
    es = a(407905),
    ec = a(532294),
    ed = a(739187);
function el(e) {
    let t = (0, j.Cz)(e);
    null != t && ((0, ed.V)(), (0, s.P0)({ text: t, variant: "critical" }));
}
var eo = a(299619),
    eu = a(818348),
    eh = a(11435);
function ef(e) {
    let { isVisible: t } = e,
        a = p.useRef(null),
        r = (0, g.bG)([V.Ay], () => V.Ay.useReducedMotion),
        i = t && !r;
    return (
        p.useEffect(() => {
            let e = a.current;
            null != e && (i ? e.play().catch(eu.tE) : e.pause());
        }, [i]),
        p.useEffect(() => {
            r && null != a.current && (a.current.currentTime = 1);
        }, [r]),
        (0, n.jsxs)("div", {
            className: eh.Tp,
            "aria-hidden": !0,
            children: [
                (0, n.jsx)(eo.A, {
                    ref: a,
                    className: eh.Ki,
                    src: "https://cdn.discordapp.com/assets/content/a7a4300630ed2733eca4a8bb584c3086a66063d78e2f829faf465d96ff388a93.webm",
                    loop: !0,
                    muted: !0,
                    playsInline: !0,
                }),
                (0, n.jsx)("div", { className: eh.D7 }),
            ],
        })
    );
}
var eb = a(885619);
function ep(e) {
    let {
        ref: t,
        onMouseEnter: a,
        onMouseLeave: r,
        onFocus: i,
        onBlur: s,
        onContextMenu: c,
        "aria-label": d,
        "aria-pressed": l,
        "aria-disabled": o,
        "aria-describedby": u,
        children: h,
        onClick: f,
        onPointerDown: b,
        onKeyDown: p,
        size: _,
        className: x,
    } = e;
    return (0, n.jsx)("button", {
        ref: t,
        onMouseEnter: a,
        onMouseLeave: r,
        onFocus: i,
        onBlur: s,
        onContextMenu: c,
        type: "button",
        className: m()(eb.button, "custom" !== _ && eb[_], x),
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
function e_(e) {
    let { className: t, ...a } = e;
    return (0, n.jsx)(ep, { ...a, className: m()(eb.shadow, t) });
}
var em = a(475743),
    ex = a(765548),
    eg = a(190240);
function eA(e) {
    let {
            visible: t,
            enter: a,
            exit: r,
            keepMounted: i = !1,
            mountAfterDelay: s = !1,
            hiddenScale: c = 1,
            onExitComplete: d,
            className: l,
            style: o,
            children: u,
        } = e,
        h = (0, g.bG)([V.Ay], () => V.Ay.useReducedMotion),
        f = p.useRef(null),
        [b, _] = p.useState(t),
        [x, A] = p.useState(t),
        v = p.useRef(null),
        w = (0, em.p0)({ value: u, shouldUpdate: t }),
        I = (0, em.p0)({ value: o, shouldUpdate: t }),
        E = (0, ex.A)(() => {
            ((v.current = null), _(!1), d?.());
        }),
        j = t ? a : r,
        S = h ? 0 : j.delay,
        C = h ? 0 : j.duration,
        N = t && !b && !i,
        T = s && !h;
    p.useEffect(() => {
        if (!N) return;
        if (!T) return void _(!0);
        let e = setTimeout(() => _(!0), a.delay);
        return () => clearTimeout(e);
    }, [N, T, a.delay]);
    let R = p.useRef(!0);
    if (
        (p.useEffect(() => {
            if (R.current) {
                R.current = !1;
                return;
            }
            if ((null != v.current && (clearTimeout(v.current), (v.current = null)), t)) {
                i && _(!0);
                return;
            }
            (A(!1), (v.current = setTimeout(E, S + C)));
        }, [t]),
        p.useLayoutEffect(() => {
            t && b && !x && (f.current?.getBoundingClientRect(), A(!0));
        }, [t, b, x]),
        p.useEffect(
            () => () => {
                null != v.current && clearTimeout(v.current);
            },
            [],
        ),
        !b && !i)
    )
        return null;
    let O = t && !i && T ? 0 : S,
        M = {
            ...(t ? o : I),
            opacity: +!!x,
            transform: x || 1 === c ? void 0 : `scale(${c})`,
            transitionDuration: `${C}ms`,
            transitionDelay: `${O}ms`,
        };
    return (0, n.jsx)("div", {
        ref: f,
        className: m()(l, eg.q, { [eg.R]: !b }),
        style: M,
        inert: !t,
        "aria-hidden": !t,
        children: t || i ? u : w,
    });
}
var ev = a(516749),
    ew = a(399667),
    eI = a(468311),
    eE = a(706121),
    ej = a(985747),
    eS = a(67915),
    eC = a(118531);
let eN = {
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
        url: "https://cdn.discordapp.com/assets/content/214c4c8cd843cc9b7db38584271af549e503c30d2affabad5e6d84c323e45179.webp",
        riveId: 6945448,
        width: 1309,
        height: 2068,
        widthAt1x: 273,
    },
    tex_base_02_crimson: {
        url: "https://cdn.discordapp.com/assets/content/7a6fa404d1ae0d9e719adb9a9041ec6109bf8f1789ab1357d9ca027212929c8a.webp",
        riveId: 6945450,
        width: 1309,
        height: 2068,
        widthAt1x: 273,
    },
    tex_base_03_chrome: {
        url: "https://cdn.discordapp.com/assets/content/4271d26712fde40e2578d6492c5c253dc1b147da9e574974d047a5bc8861852c.webp",
        riveId: 6945451,
        width: 1309,
        height: 2068,
        widthAt1x: 273,
    },
    tex_base_04_galactic: {
        url: "https://cdn.discordapp.com/assets/content/0cb313653524f0ab1f32ae15dd5ff500820a295f54b9877b519a9a8360720c74.webp",
        riveId: 6945452,
        width: 1309,
        height: 2068,
        widthAt1x: 273,
    },
    tex_base_05_forrest: {
        url: "https://cdn.discordapp.com/assets/content/453d50df90b3dfd068fc0f0c35a81a4b04b183207005fb7a8a0b0c84ec91a5f8.webp",
        riveId: 6945454,
        width: 1309,
        height: 2068,
        widthAt1x: 273,
    },
    tex_base_06_mighnight: {
        url: "https://cdn.discordapp.com/assets/content/47310f91aeacf2740fcaa93ec5909d4712a57fc8f74d25b2d386fedaf5165421.webp",
        riveId: 6945456,
        width: 1309,
        height: 2068,
        widthAt1x: 273,
    },
    tex_base_07_glacier: {
        url: "https://cdn.discordapp.com/assets/content/6feb0011773e7103a7db28dd22764155386f5135dc7f80592823deb6d515401b.webp",
        riveId: 7026923,
        width: 1309,
        height: 2068,
        widthAt1x: 273,
    },
    tex_base_08_orange: {
        url: "https://cdn.discordapp.com/assets/content/e2bc9c46c3154b45b23488c9caa201eb5715b0d35a25847ae90aa0611649801a.webp",
        riveId: 6945457,
        width: 1309,
        height: 2068,
        widthAt1x: 273,
    },
    tex_base_09_pink: {
        url: "https://cdn.discordapp.com/assets/content/0c217d3822a9a28b0f1c482d028b5764af541e03a044c9c755d689066944f59e.webp",
        riveId: 6945459,
        width: 1309,
        height: 2068,
        widthAt1x: 273,
    },
    tex_base_10_red: {
        url: "https://cdn.discordapp.com/assets/content/c7eb150801b9cfdea20e22cec192e39f308d3ce26c076043545eed04ff9dd632.webp",
        riveId: 6945460,
        width: 1309,
        height: 2068,
        widthAt1x: 273,
    },
    tex_base_11_cobalt: {
        url: "https://cdn.discordapp.com/assets/content/be1e1c86c9ae36cb1e5d255f38ed2438a332666f35407c3fb9259b0912d23ace.webp",
        riveId: 6945462,
        width: 1309,
        height: 2068,
        widthAt1x: 273,
    },
    "tex_base_12_x-ray": {
        url: "https://cdn.discordapp.com/assets/content/c5041017ae775909a614ca864fe8b0f4932ec57c3acbb9e1c57360ff3222fee6.webp",
        riveId: 6945463,
        width: 1309,
        height: 2068,
        widthAt1x: 273,
    },
    tex_base_13_liquid: {
        url: "https://cdn.discordapp.com/assets/content/de6b6adb1348e91b928d53193179d797838ac425c1bea23e592208c60bec2584.webp",
        riveId: 6945465,
        width: 1309,
        height: 2068,
        widthAt1x: 273,
    },
    tex_base_14_butter: {
        url: "https://cdn.discordapp.com/assets/content/b9b76c830a1966450017238c2a506857bff49ee9e6684995f7461bd873e4d8f4.webp",
        riveId: 6945464,
        width: 1309,
        height: 2068,
        widthAt1x: 273,
    },
    tex_base_15_iridescent: {
        url: "https://cdn.discordapp.com/assets/content/2eeb344ad5589f09df27ed729e5212ec9da26fc0517c424066038db963734ef9.webp",
        riveId: 6945468,
        width: 1309,
        height: 2068,
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
        url: "https://cdn.discordapp.com/assets/content/28b536f7927d3342a56e98def8d772fad9caf50a3e84c4b395b69311996fa1bc.webp",
        riveId: 6878398,
        width: 884,
        height: 374,
        widthAt1x: 182,
    },
    tex_headwear_02_headphones: {
        url: "https://cdn.discordapp.com/assets/content/eaddbf168d9c3299571d82b97821798842d31c12f9cd41f40ea41d3c16137428.webp",
        riveId: 7012013,
        width: 1472,
        height: 828,
        widthAt1x: 288,
    },
    tex_headwear_03_bananaPeel: {
        url: "https://cdn.discordapp.com/assets/content/f7927f8ad1872abbfb8f446df5d70c2374465a17ee7ddb8f696f048fceb00ea9.webp",
        riveId: 6944187,
        width: 1496,
        height: 891,
        widthAt1x: 312,
    },
    tex_headwear_04_piercings: {
        url: "https://cdn.discordapp.com/assets/content/798f9fa0977bad98ba128edf786dac742e3e524ee42db1e2ccdc2badefb01be1.webp",
        riveId: 6945559,
        width: 529,
        height: 460,
        widthAt1x: 106,
    },
    tex_headwear_05_headband: {
        url: "https://cdn.discordapp.com/assets/content/f17a9b3a038ff91e1227e415d533aa842b76be37ce631cd29bd435030543bc2c.webp",
        riveId: 6943812,
        width: 1679,
        height: 1219,
        widthAt1x: 335,
    },
    tex_headwear_06_sunGlasses: {
        url: "https://cdn.discordapp.com/assets/content/68df4258904c28d5690db05450566aa72ee50b8014200022ece682608e34edb1.webp",
        riveId: 6878347,
        width: 1287,
        height: 550,
        widthAt1x: 269,
    },
    tex_headwear_07_backwardHat: {
        url: "https://cdn.discordapp.com/assets/content/b14d1db9b5c859095e0ad401e0446c41c33302ecb43781ce0b370c7bf4d74b3f.webp",
        riveId: 6878399,
        width: 1394,
        height: 680,
        widthAt1x: 287,
    },
    tex_headwear_08_leaf: {
        url: "https://cdn.discordapp.com/assets/content/0126e4fc4942fd87a5d7324105a6a1aa21a343a78388539d088ec73ad7364e45.webp",
        riveId: 6943794,
        width: 1137,
        height: 379,
        widthAt1x: 228,
    },
    tex_headwear_09_fire: {
        url: "https://cdn.discordapp.com/assets/content/d377f8a7de8828800cd314e34dc0941508d4cf3f549532a90d0996ce58963937.webp",
        riveId: 6878288,
        width: 1495,
        height: 943,
        widthAt1x: 298,
    },
    tex_headwear_10_halo: {
        url: "https://cdn.discordapp.com/assets/content/b6f7eb1bc7855139e3f66c67529fd90d0a1a4fe995f24cb14b1b2e2623e4436d.webp",
        riveId: 6878456,
        width: 1173,
        height: 529,
        widthAt1x: 234,
    },
    tex_headwear_11_brain: {
        url: "https://cdn.discordapp.com/assets/content/9e0e9f921f755f35bef890502dc0cf9038d39db1f0d3d620b16ece52b930dd87.webp",
        riveId: 6878244,
        width: 690,
        height: 460,
        widthAt1x: 138,
    },
    tex_headwear_12_trafficCone: {
        url: "https://cdn.discordapp.com/assets/content/903cce4ef4e1c6ad24851478bf625a36a906bb82882707616879e958edb531f2.webp",
        riveId: 6878330,
        width: 680,
        height: 646,
        widthAt1x: 140,
    },
    tex_headwear_13_teddyBeanie: {
        url: "https://cdn.discordapp.com/assets/content/43d66a791794137f8c58f316695969c80475667f166c8a5400a72bb9a42594bc.webp",
        riveId: 6878395,
        width: 1495,
        height: 874,
        widthAt1x: 298,
    },
    tex_headwear_14_crown: {
        url: "https://cdn.discordapp.com/assets/content/dd5b74e9f06b4b6ed8297ddb20b171f72266ed3984ea3a183345320a568cc80e.webp",
        riveId: 6878327,
        width: 946,
        height: 715,
        widthAt1x: 197,
    },
    tex_none: {
        url: "https://cdn.discordapp.com/assets/content/a0cbeae4f229972a95fe4b0855e085d1cbeb4ce09600f340f9629824fe163fd0.webp",
        riveId: 6585260,
        width: 1,
        height: 1,
    },
    tex_outfit_01_baddie: {
        url: "https://cdn.discordapp.com/assets/content/20f8d8a630fb70c6fb0cb8daea1e3a2ecb1a2d8633610fa6ea472924638dcbda.webp",
        riveId: 7373394,
        width: 1111,
        height: 836,
        widthAt1x: 232,
    },
    tex_outfit_01_baddie_monochrome: {
        url: "https://cdn.discordapp.com/assets/content/6d472ee3a9dfa1df1ad56ff76d2c01809de28ddc1a57f7e70e3e5ecdefdd34c5.webp",
        riveId: 7373045,
        width: 1111,
        height: 836,
        widthAt1x: 232,
    },
    tex_outfit_01_baddie_pastel: {
        url: "https://cdn.discordapp.com/assets/content/20928b435b0ce3f20fa899e27eec24efa6126112de3536ffd5a7bfba3cb513e0.webp",
        riveId: 7373052,
        width: 1111,
        height: 836,
        widthAt1x: 232,
    },
    tex_outfit_01_baddie_sunset: {
        url: "https://cdn.discordapp.com/assets/content/4991a68749638a165645df2325636ef0cf900c84f384b711dc9169a202dbf458.webp",
        riveId: 7373057,
        width: 1111,
        height: 836,
        widthAt1x: 232,
    },
    tex_outfit_01_baddie_violet: {
        url: "https://cdn.discordapp.com/assets/content/0d7c10a84fe50348366c82a3dd2abdbcc278f821580ed07bf62430ebb4a7f164.webp",
        riveId: 7373035,
        width: 1111,
        height: 836,
        widthAt1x: 232,
    },
    tex_outfit_02_trash: {
        url: "https://cdn.discordapp.com/assets/content/dd2dd4c0bd3ac506189e11e973b0a7a6b6c08bdcafaf6d0dbc439620e2863bad.webp",
        riveId: 7373757,
        width: 1541,
        height: 1058,
        widthAt1x: 308,
    },
    tex_outfit_02_trash_blackout: {
        url: "https://cdn.discordapp.com/assets/content/212f4651cd2d18fa928ea3bf93210331b35609c397e62b80623920ad6d756f58.webp",
        riveId: 7373082,
        width: 1541,
        height: 1058,
        widthAt1x: 308,
    },
    tex_outfit_02_trash_bubblegum: {
        url: "https://cdn.discordapp.com/assets/content/457b66bdf129645e59f57604f8393ea0074134eba40847805e3fdcdb47da1761.webp",
        riveId: 7373086,
        width: 1541,
        height: 1058,
        widthAt1x: 308,
    },
    tex_outfit_02_trash_caution: {
        url: "https://cdn.discordapp.com/assets/content/0fa277da73c958cfc728a114552844dce98ed9a6caa564940fc6119c8228e5cf.webp",
        riveId: 7373096,
        width: 1541,
        height: 1058,
        widthAt1x: 308,
    },
    tex_outfit_02_trash_toxic: {
        url: "https://cdn.discordapp.com/assets/content/1229e33632a8d762467c7f84937ccf706fd2c1e3534f348da2837623e714d609.webp",
        riveId: 7373119,
        width: 1541,
        height: 1058,
        widthAt1x: 308,
    },
    tex_outfit_03_streamer: {
        url: "https://cdn.discordapp.com/assets/content/cc2068e79715b583b34b773978af15d7d010d01882fc7c126145643c47a0f903.webp",
        riveId: 7373758,
        width: 986,
        height: 952,
        widthAt1x: 203,
    },
    tex_outfit_03_streamer_flames: {
        url: "https://cdn.discordapp.com/assets/content/fb878dec02847447bc56cab636f0dc7c884b63ba8d38d400aaebe20a5155a4c1.webp",
        riveId: 7373207,
        width: 986,
        height: 952,
        widthAt1x: 203,
    },
    tex_outfit_03_streamer_smiley: {
        url: "https://cdn.discordapp.com/assets/content/6fcd7ec5df2282eab668a72dca12267101c0df4eabc997c75f4c9c82f00e8e60.webp",
        riveId: 7373229,
        width: 986,
        height: 952,
        widthAt1x: 203,
    },
    tex_outfit_03_streamer_stripes: {
        url: "https://cdn.discordapp.com/assets/content/9c037133af3a11e12c363d4c2cab916ac40830cea2a8f32e8a8f068b5e541fa1.webp",
        riveId: 7373237,
        width: 986,
        height: 952,
        widthAt1x: 203,
    },
    tex_outfit_03_streamer_vintage: {
        url: "https://cdn.discordapp.com/assets/content/5066ee834b18f4abe6b06c3737342a44618c29c65646c8363c404db8bb7b274e.webp",
        riveId: 7373246,
        width: 986,
        height: 952,
        widthAt1x: 203,
    },
    tex_outfit_04_camper: {
        url: "https://cdn.discordapp.com/assets/content/1fff16ebfeab6fafd6db836f5188a9dcefa1aa43f295e6b3ab9c093bb7b62fb0.webp",
        riveId: 7373760,
        width: 924,
        height: 803,
        widthAt1x: 193,
    },
    tex_outfit_04_camper_amber: {
        url: "https://cdn.discordapp.com/assets/content/96c1393dd14d030e54e97b5411994a5d407868bf441d64c6ec386d230379e7e0.webp",
        riveId: 7373265,
        width: 924,
        height: 803,
        widthAt1x: 193,
    },
    tex_outfit_04_camper_glamp: {
        url: "https://cdn.discordapp.com/assets/content/df1d8b139641b52ace6730d6b7be75d328ee698c48e3103e5e07e49c26889f49.webp",
        riveId: 7373268,
        width: 924,
        height: 803,
        widthAt1x: 193,
    },
    tex_outfit_04_camper_plaid: {
        url: "https://cdn.discordapp.com/assets/content/6f168b41a13bba2a003a0ad30a9a8ed91b9cde963e65f1673775860d01a6804c.webp",
        riveId: 7373269,
        width: 924,
        height: 803,
        widthAt1x: 193,
    },
    tex_outfit_04_camper_swamp: {
        url: "https://cdn.discordapp.com/assets/content/e6c7749c841cc7a25843dad45e4e3d80e99e4b09e0b5c5864edfd4584ae93583.webp",
        riveId: 7373270,
        width: 924,
        height: 803,
        widthAt1x: 193,
    },
    tex_outfit_05_athlete: {
        url: "https://cdn.discordapp.com/assets/content/21da90497aa6b2c4ab790c0008db1f1465a5c9db4eb17055e3198b55ccd1e7f4.webp",
        riveId: 7373767,
        width: 1288,
        height: 874,
        widthAt1x: 252,
    },
    tex_outfit_05_athlete_blocked: {
        url: "https://cdn.discordapp.com/assets/content/cce0b4494599aa8920d011937b56131b85364b9b9be41712c3223ef55128a550.webp",
        riveId: 7373272,
        width: 1288,
        height: 874,
        widthAt1x: 252,
    },
    tex_outfit_05_athlete_checkered: {
        url: "https://cdn.discordapp.com/assets/content/f02e0c0748217a994ac0b399eaae937961c78e45a8b3a0b813d0dd4decac8a12.webp",
        riveId: 7373273,
        width: 1288,
        height: 874,
        widthAt1x: 252,
    },
    tex_outfit_05_athlete_faded: {
        url: "https://cdn.discordapp.com/assets/content/d8c403eaca575fd81fbe357d76f288fc73c498899cac70b5d16f4aeaf5b36759.webp",
        riveId: 7373278,
        width: 1288,
        height: 874,
        widthAt1x: 252,
    },
    tex_outfit_05_athlete_lined: {
        url: "https://cdn.discordapp.com/assets/content/f969005f0e21cc09b3c29f9867c7cdca1a406623f2669e1fdf742551068ccaf0.webp",
        riveId: 7373295,
        width: 1288,
        height: 874,
        widthAt1x: 252,
    },
    tex_outfit_06_cowpoke: {
        url: "https://cdn.discordapp.com/assets/content/961bad1b5c59dd58316636ce47d5e740ce68245bc16cafcc5f2233791adaad75.webp",
        riveId: 7373768,
        width: 1357,
        height: 874,
        widthAt1x: 271,
    },
    tex_outfit_06_cowpoke_blush: {
        url: "https://cdn.discordapp.com/assets/content/b98eb8bdaa4e4d27e13b5bcea6a6d0ab181066058770ae4d6217c2d3329ae87a.webp",
        riveId: 7373303,
        width: 1357,
        height: 874,
        widthAt1x: 271,
    },
    tex_outfit_06_cowpoke_denim: {
        url: "https://cdn.discordapp.com/assets/content/4391125bba3639f903db823d4a7c077d5bec530f6baa20b4905d519495805097.webp",
        riveId: 7373324,
        width: 1357,
        height: 874,
        widthAt1x: 271,
    },
    tex_outfit_06_cowpoke_onyx: {
        url: "https://cdn.discordapp.com/assets/content/dfcdf8fcab5f44c6c6333cb897894ed190d87176213b36a529a8acd2abac2517.webp",
        riveId: 7373360,
        width: 1357,
        height: 874,
        widthAt1x: 271,
    },
    tex_outfit_06_cowpoke_steel: {
        url: "https://cdn.discordapp.com/assets/content/75d84bcc6314cc16dd3d5fee7c45680b6e4820db09083f84b206eea67274c957.webp",
        riveId: 7373396,
        width: 1357,
        height: 874,
        widthAt1x: 271,
    },
    tex_outfit_07_goth: {
        url: "https://cdn.discordapp.com/assets/content/818260b14a9faa46494a1b2c72b382c62d8efef0da394f14979ddb2023145a87.webp",
        riveId: 7373769,
        width: 1375,
        height: 814,
        widthAt1x: 287,
    },
    tex_outfit_07_goth_raven: {
        url: "https://cdn.discordapp.com/assets/content/c2327847cdbe1c4687c23a9941c6fa325eafb64b4efd904e92936d0391334d39.webp",
        riveId: 7373444,
        width: 1375,
        height: 814,
        widthAt1x: 287,
    },
    tex_outfit_07_goth_serpent: {
        url: "https://cdn.discordapp.com/assets/content/d162b30e51d8fa96779badf221acc9e7c318b062422e02746812368e584f6b1a.webp",
        riveId: 7373483,
        width: 1375,
        height: 814,
        widthAt1x: 287,
    },
    tex_outfit_07_goth_siren: {
        url: "https://cdn.discordapp.com/assets/content/5dbb885fcfdcc6f75086540e721f8b5f78687b2293c99797a19196d58c7ab929.webp",
        riveId: 7373523,
        width: 1375,
        height: 814,
        widthAt1x: 287,
    },
    tex_outfit_07_goth_vamp: {
        url: "https://cdn.discordapp.com/assets/content/5b9ba9474a4d2f338080a20450344eed740c5442e6c7d86e5bb29bb3f8be3932.webp",
        riveId: 7373540,
        width: 1375,
        height: 814,
        widthAt1x: 287,
    },
    tex_outfit_08_astronaut: {
        url: "https://cdn.discordapp.com/assets/content/ed6b03979ec380fab042dc166ff04edffa5fc9380368a9ba43e4d11933654d03.webp",
        riveId: 7373770,
        width: 986,
        height: 884,
        widthAt1x: 203,
    },
    tex_outfit_08_astronaut_cosmic: {
        url: "https://cdn.discordapp.com/assets/content/51f350adf9002746616dc3c44343e42d5e0799be48ca370e7c41d4bb515dc24b.webp",
        riveId: 7373571,
        width: 986,
        height: 884,
        widthAt1x: 203,
    },
    tex_outfit_08_astronaut_martian: {
        url: "https://cdn.discordapp.com/assets/content/019a03969ed63c46a42808883e0622999cf74b88c41f8d507bc92c0288501f6a.webp",
        riveId: 7373578,
        width: 986,
        height: 884,
        widthAt1x: 203,
    },
    tex_outfit_08_astronaut_solar: {
        url: "https://cdn.discordapp.com/assets/content/c6f109186d9f124448b4c111d67d3938fa9c13cdde4e794695d8cd6f3259c301.webp",
        riveId: 7373580,
        width: 986,
        height: 884,
        widthAt1x: 203,
    },
    tex_outfit_08_astronaut_stardust: {
        url: "https://cdn.discordapp.com/assets/content/252f5346b07056f111e37a4386407783b5891ffc622d7c387196a1825714bad7.webp",
        riveId: 7373583,
        width: 986,
        height: 884,
        widthAt1x: 203,
    },
    tex_outfit_09_jester: {
        url: "https://cdn.discordapp.com/assets/content/17c57891f2a18f8d67656de287e73446a7884b9cb18391ebf0ee941ba23313a7.webp",
        riveId: 6998778,
        width: 1081,
        height: 897,
        widthAt1x: 216,
    },
    tex_outfit_09_jester_carnival: {
        url: "https://cdn.discordapp.com/assets/content/03ca1d6fb7dd56e4dede50b26d3d9bb1b5675c64a66df2b782c325db574f6089.webp",
        riveId: 6998764,
        width: 1081,
        height: 897,
        widthAt1x: 216,
    },
    tex_outfit_09_jester_confetti: {
        url: "https://cdn.discordapp.com/assets/content/0f1ea523a6ffbbaff905cf55c1fd8cf53ec7bb0292edd8e25a23d2fad2a4a758.webp",
        riveId: 7373862,
        width: 1081,
        height: 897,
        widthAt1x: 216,
    },
    tex_outfit_09_jester_nightfall: {
        url: "https://cdn.discordapp.com/assets/content/ad1a5bbca04ec8809e67230269b592f3619066068e675e570569f1c94eb10d7a.webp",
        riveId: 7373867,
        width: 1081,
        height: 897,
        widthAt1x: 216,
    },
    tex_outfit_09_jester_sunrise: {
        url: "https://cdn.discordapp.com/assets/content/b307e09c753d5efaa19f2734b7afbb91578bcd014fc243b1f41b513759f7c8bb.webp",
        riveId: 6998772,
        width: 1081,
        height: 897,
        widthAt1x: 216,
    },
    tex_outfit_10_traveler: {
        url: "https://cdn.discordapp.com/assets/content/7b27c78fd92c6f5ee45744f0f2d7c6641ad60ecd58331ddbc0be926c4c1e308c.webp",
        riveId: 7373772,
        width: 946,
        height: 825,
        widthAt1x: 197,
    },
    tex_outfit_10_traveler_chrono: {
        url: "https://cdn.discordapp.com/assets/content/43bd34a6e48ace56d62f288f9d4beac9dee012edbc804407c1dfeb358c35e67d.webp",
        riveId: 7373869,
        width: 946,
        height: 825,
        widthAt1x: 197,
    },
    tex_outfit_10_traveler_haze: {
        url: "https://cdn.discordapp.com/assets/content/7b1f38974858e752182baf26ee2a1f89bcd28bb3566d80ba0b99f61e466f6e93.webp",
        riveId: 7373871,
        width: 946,
        height: 825,
        widthAt1x: 197,
    },
    tex_outfit_10_traveler_moss: {
        url: "https://cdn.discordapp.com/assets/content/1ce8ee2ec7b93ee35b3af711c33eede3ce50f07172facf6717c88f1091f5e504.webp",
        riveId: 6945600,
        width: 946,
        height: 825,
        widthAt1x: 197,
    },
    tex_outfit_10_traveler_umber: {
        url: "https://cdn.discordapp.com/assets/content/c77f5b341cc51464d2078950802b3b458317ec72cb61070a7f28f447eb5147fb.webp",
        riveId: 7373876,
        width: 946,
        height: 825,
        widthAt1x: 197,
    },
    tex_outfit_11_mage: {
        url: "https://cdn.discordapp.com/assets/content/ada85d8e4f4add7e398c5b204c2a8255946766289428c2a2dd36c773831f484f.webp",
        riveId: 7373774,
        width: 1122,
        height: 913,
        widthAt1x: 234,
    },
    tex_outfit_11_mage_dusk: {
        url: "https://cdn.discordapp.com/assets/content/a87f26ba1f84a141e6f2991f47a1ef781389033ab54928ff511e5355e84ed6ad.webp",
        riveId: 7373888,
        width: 1122,
        height: 913,
        widthAt1x: 234,
    },
    tex_outfit_11_mage_shadow: {
        url: "https://cdn.discordapp.com/assets/content/396531678d1213980197c3d4ae3da6fa4a24ce300e2c23dfda509522d768f3b7.webp",
        riveId: 7373892,
        width: 1122,
        height: 913,
        widthAt1x: 234,
    },
    tex_outfit_11_mage_wildwood: {
        url: "https://cdn.discordapp.com/assets/content/8720408e9648dc12a30225c43f7331bf40bd97f2bef32efd34ad73757a8a404a.webp",
        riveId: 7373907,
        width: 1122,
        height: 913,
        widthAt1x: 234,
    },
    tex_outfit_11_mage_winter: {
        url: "https://cdn.discordapp.com/assets/content/3ec4b4f145367c3559af97c23f2d2cbcbdfb3d45e2533e2f9357b103871e66fe.webp",
        riveId: 7373914,
        width: 1122,
        height: 913,
        widthAt1x: 234,
    },
    tex_outfit_12_mech: {
        url: "https://cdn.discordapp.com/assets/content/374dcefa8abedf0253ab2cb7cb2c0fa0970e4404a61529875669980364acc30a.webp",
        riveId: 6879169,
        width: 1023,
        height: 836,
        widthAt1x: 214,
    },
    tex_outfit_12_mech_aero: {
        url: "https://cdn.discordapp.com/assets/content/0187e673dfe835f39b3e0fc5c8895bc49a41df33e532d6184549031f9df173fe.webp",
        riveId: 7373915,
        width: 1023,
        height: 836,
        widthAt1x: 214,
    },
    tex_outfit_12_mech_sandstorm: {
        url: "https://cdn.discordapp.com/assets/content/dba2cf636a3929d4f6d189e877dae3ac4177d1f482b5442ed91e9561d95a7fde.webp",
        riveId: 6945609,
        width: 1023,
        height: 836,
        widthAt1x: 214,
    },
    tex_outfit_12_mech_ultraviolet: {
        url: "https://cdn.discordapp.com/assets/content/7a671dbf6449baba2ef4770e47af5c476d3dd9746da1057b98bc9cfee55dc913.webp",
        riveId: 6945612,
        width: 1023,
        height: 836,
        widthAt1x: 214,
    },
    tex_outfit_12_mech_viper: {
        url: "https://cdn.discordapp.com/assets/content/01f331284cf426f6b54910a8b4b4af41ad130ad309ce050676fa1bc7e742ae77.webp",
        riveId: 6945613,
        width: 1023,
        height: 836,
        widthAt1x: 214,
    },
    tex_outfit_13_knight: {
        url: "https://cdn.discordapp.com/assets/content/fa5a6748f74956125d199ca10b6a60ea97a80cb6eac331f2aaf234c9aaa1779f.webp",
        riveId: 7373786,
        width: 1035,
        height: 874,
        widthAt1x: 207,
    },
    tex_outfit_13_knight_glacier: {
        url: "https://cdn.discordapp.com/assets/content/4b896a993bcc24782124d8661c74174149cffc035e5abaad20d6d7b736875c1e.webp",
        riveId: 7373968,
        width: 1035,
        height: 874,
        widthAt1x: 207,
    },
    tex_outfit_13_knight_iron: {
        url: "https://cdn.discordapp.com/assets/content/304e3eb4edfee15b0742caff2c69a9b175203e524429c7df8e142f341d5f343e.webp",
        riveId: 7373976,
        width: 1035,
        height: 874,
        widthAt1x: 207,
    },
    tex_outfit_13_knight_petal: {
        url: "https://cdn.discordapp.com/assets/content/d3e61696b9e561a8ff5f98951cf790306d9a7e8eb81e05ad47a7221db2c8d9fb.webp",
        riveId: 7374038,
        width: 1035,
        height: 874,
        widthAt1x: 207,
    },
    tex_outfit_13_knight_rust: {
        url: "https://cdn.discordapp.com/assets/content/3b887f6dde14ae5d5203c387aa71b4841dce256c76a02897dc22fa81eb5718d6.webp",
        riveId: 7374084,
        width: 1035,
        height: 874,
        widthAt1x: 207,
    },
    tex_outfit_14_magical: {
        url: "https://cdn.discordapp.com/assets/content/11db8197785d9434c2651516d5284c1df6d21966c0c37943afe4a66eb40fa3fb.webp",
        riveId: 7373809,
        width: 880,
        height: 781,
        widthAt1x: 184,
    },
    tex_outfit_14_magical_amethyst: {
        url: "https://cdn.discordapp.com/assets/content/ac4b59aa4fd6cef322507ea79bba6b786758b063b65516aa0619930815726053.webp",
        riveId: 7374096,
        width: 880,
        height: 781,
        widthAt1x: 184,
    },
    tex_outfit_14_magical_citrine: {
        url: "https://cdn.discordapp.com/assets/content/f9b6543f6f441ab9219231b26e4678734211b3cd4281b2def579a1b693645bf7.webp",
        riveId: 7374100,
        width: 880,
        height: 781,
        widthAt1x: 184,
    },
    tex_outfit_14_magical_frost: {
        url: "https://cdn.discordapp.com/assets/content/d2d9225ef9bd6672ce59b64d7432af1327456310e26602f919dafbc57323dbae.webp",
        riveId: 7374112,
        width: 880,
        height: 781,
        widthAt1x: 184,
    },
    tex_outfit_14_magical_sapphire: {
        url: "https://cdn.discordapp.com/assets/content/76cb60e4c7cee20be9fd070e89afe76e1001d8a50cd5c71f6ab1fdb23cf197ae.webp",
        riveId: 7374113,
        width: 880,
        height: 781,
        widthAt1x: 184,
    },
    tex_shoes_01_sneakers: {
        url: "https://cdn.discordapp.com/assets/content/722d815b75dd143e886bc2680f2acba82611c04914496e46ff0515c5d5ecc4a1.webp",
        riveId: 6880490,
        width: 920,
        height: 322,
        widthAt1x: 180,
    },
    tex_shoes_02_socks: {
        url: "https://cdn.discordapp.com/assets/content/7415d631135b2153b9e588e6817db57d08061b66a7d9beaab20df69bcd4632de.webp",
        riveId: 6880573,
        width: 920,
        height: 276,
        widthAt1x: 180,
    },
    tex_shoes_03_wumpusSlippers: {
        url: "https://cdn.discordapp.com/assets/content/63a62bd85b876037b8699ca488e2f19cd6364b1202509dc40accd8494235d512.webp",
        riveId: 6880448,
        width: 759,
        height: 253,
        widthAt1x: 153,
    },
    tex_shoes_04_bionic: {
        url: "https://cdn.discordapp.com/assets/content/0cf3432ffb8561302933202d0fecfd3b3ee624833864220a4fe5f8f43c535562.webp",
        riveId: 6880556,
        width: 828,
        height: 230,
        widthAt1x: 162,
    },
    tex_shoes_05_platforms: {
        url: "https://cdn.discordapp.com/assets/content/616a706d00110b2c5630b38f8b74e27e0815fd5c5948125e800e5e6e32147f98.webp",
        riveId: 7026898,
        width: 828,
        height: 322,
        widthAt1x: 162,
    },
    tex_shoes_06_westernboots: {
        url: "https://cdn.discordapp.com/assets/content/6176ba60d88bb2a1beceb69c86be3f58c3c00545f2ee0d42bd7de7fc91956a20.webp",
        riveId: 7026900,
        width: 792,
        height: 209,
        widthAt1x: 165,
    },
    tex_shoes_07_kittyPaws: {
        url: "https://cdn.discordapp.com/assets/content/2f149796ffdd9233a8565cc27b27aa17ce132bbafbd7f1ba262226cab145b5bf.webp",
        riveId: 7026901,
        width: 920,
        height: 276,
        widthAt1x: 180,
    },
    tex_shoes_08_rollerSkates: {
        url: "https://cdn.discordapp.com/assets/content/d5ee92eaad271cbf070120bf89554494a2db3cbc8efe2fee9ec55ba1adbe9ce2.webp",
        riveId: 7026902,
        width: 759,
        height: 275,
        widthAt1x: 158,
    },
    tex_shoes_09_snowShoes: {
        url: "https://cdn.discordapp.com/assets/content/1518d959e43eb3f627d3cad01f6f84283b968be784c6e6f84aacc51060af6ffe.webp",
        riveId: 6880513,
        width: 828,
        height: 230,
        widthAt1x: 162,
    },
    tex_shoes_10_icarusSandals: {
        url: "https://cdn.discordapp.com/assets/content/31b6c24725e5aa7d17efcb421c512175d97e2668bdac43358ff80295f3061b34.webp",
        riveId: 7074384,
        width: 897,
        height: 322,
        widthAt1x: 179,
    },
    tex_shoes_11_clownShoes: {
        url: "https://cdn.discordapp.com/assets/content/fafcdac3bb0fa0f68bcfaf2a396f128f7d2657f41b13cdc8ccb773ef1afbb07b.webp",
        riveId: 7026915,
        width: 989,
        height: 276,
        widthAt1x: 197,
    },
    tex_shoes_12_fancyHeel: {
        url: "https://cdn.discordapp.com/assets/content/33e861aaf6ed22be6b3904101304476441adade0a18eb7160e592d27acd9a5ec.webp",
        riveId: 6880487,
        width: 920,
        height: 276,
        widthAt1x: 180,
    },
    tex_shoes_13_ballet: {
        url: "https://cdn.discordapp.com/assets/content/26aa887cfdf872b6856dc23fc70d1525533c5693556cdfb6f0bee64a04099633.webp",
        riveId: 7026916,
        width: 828,
        height: 207,
        widthAt1x: 164,
    },
    tex_shoes_14_cyberStompers: {
        url: "https://cdn.discordapp.com/assets/content/c07e3ec373dafcc98bc878949759085344ba8ccfda3ee93d80d73e51b259a773.webp",
        riveId: 7026917,
        width: 874,
        height: 230,
        widthAt1x: 171,
    },
    tex_wearable_01_stickers: {
        url: "https://cdn.discordapp.com/assets/content/c99bf6e7650d4fb9433fc4c3bc79fa70dc278ec19e16d4be64a1859797679c38.webp",
        riveId: 6880478,
        width: 1265,
        height: 1144,
        widthAt1x: 264,
    },
    tex_wearable_02_tote: {
        url: "https://cdn.discordapp.com/assets/content/8418825bb54bffaa5780520eba8320918a64bc0fe7162569c096208d8677c529.webp",
        riveId: 6880476,
        width: 391,
        height: 506,
        widthAt1x: 78,
    },
    tex_wearable_03_angelWings: {
        url: "https://cdn.discordapp.com/assets/content/2ec0ee09a2c3094a0c09e5b075b109a5e2a2230e634756b458fa9a86cc64aac4.webp",
        riveId: 6880634,
        width: 2024,
        height: 644,
        widthAt1x: 396,
    },
    tex_wearable_04_skateboard: {
        url: "https://cdn.discordapp.com/assets/content/bf87be666f5c1d04a8821e5ae2e1f5b5d3fc5d60280303df8e06a9f366ff67da.webp",
        riveId: 6880472,
        width: 407,
        height: 605,
        widthAt1x: 85,
    },
    tex_wearable_05_dragonWings: {
        url: "https://cdn.discordapp.com/assets/content/1bd761593c4e49c33c0368f6d546679a9df805a79828fafc1ae57e395fab713e.webp",
        riveId: 6945412,
        width: 2392,
        height: 1748,
        widthAt1x: 468,
    },
    tex_wearable_06_takeOutBag: {
        url: "https://cdn.discordapp.com/assets/content/c74b3a10976f8734a0d8ec664f4112c1b26c7f12aada1216b8317d724c1f791f.webp",
        riveId: 6880614,
        width: 345,
        height: 391,
        widthAt1x: 69,
    },
    tex_wearable_07_pixelWrench: {
        url: "https://cdn.discordapp.com/assets/content/85d71b12477b3710167aa7f228e6bdcfd0c80d165b6314f373e839f2b2053a69.webp",
        riveId: 7058139,
        width: 638,
        height: 473,
        widthAt1x: 133,
    },
    tex_wearable_08_wizardStaff: {
        url: "https://cdn.discordapp.com/assets/content/b3a8ae715f973e23817f17955b3b1c69e206ea0cbf9fe92f6c423aa0de4fd66c.webp",
        riveId: 6978663,
        width: 770,
        height: 1111,
        widthAt1x: 161,
    },
    tex_wearable_09_mechWings: {
        url: "https://cdn.discordapp.com/assets/content/8ecaf8d5340231cd9a94e6e48d20fcaad58e934f67735afb9957a1ef0294dc75.webp",
        riveId: 6880609,
        width: 2116,
        height: 644,
        widthAt1x: 414,
    },
    tex_wearable_10_sword_spritesheet: {
        url: "https://cdn.discordapp.com/assets/content/755e855227622ad212cdd19a32d5c810effb4de8570cb9595ff6551db1c15d40.webp",
        riveId: 7026804,
        width: 4095,
        height: 3652,
        widthAt1x: 905,
    },
    tex_wearable_11_deviantTail: {
        url: "https://cdn.discordapp.com/assets/content/580ff15bbade3c93e130b0213b7cf3e6ca96de6ccd387eded2462eed93c83acf.webp",
        riveId: 7000661,
        width: 850,
        height: 748,
        widthAt1x: 175,
    },
    tex_wearable_11_deviantTail_smoke_active_spritesheet: {
        url: "https://cdn.discordapp.com/assets/content/93a944169c9b66e43d767c6c62dc1ff5ed6779f77de78ce47b34ac5dbb6ea5b2.webp",
        riveId: 7190581,
        width: 3072,
        height: 4096,
        widthAt1x: 900,
    },
    tex_wearable_11_deviantTail_smoke_idle_spritesheet: {
        url: "https://cdn.discordapp.com/assets/content/aaabbf067145508adf0da0e898ec4434446de43808ecdd98f75f8fed2a57cfa0.webp",
        riveId: 7190582,
        width: 3072,
        height: 4096,
        widthAt1x: 900,
    },
    tex_wearable_12_magicalStaff: {
        url: "https://cdn.discordapp.com/assets/content/d8d4dbae472982c2ab1537504dba4aa659314eb7ccc5feffdc08e971bdee8ca2.webp",
        riveId: 6944077,
        width: 782,
        height: 943,
        widthAt1x: 156,
    },
    tex_wearable_13_butterflyWings: {
        url: "https://cdn.discordapp.com/assets/content/0932a8b5ab920c0a086d3c3112912d0b5620bd712a924ceb90e661bcb9e56db4.webp",
        riveId: 6797765,
        width: 2583,
        height: 2583,
        widthAt1x: 517,
    },
    tex_wearable_14_catBackpack: {
        url: "https://cdn.discordapp.com/assets/content/07f05b77f8a5eff35b91154095fdaa503c379ff5b514802d88a353e86adb3096.webp",
        riveId: 6944650,
        width: 506,
        height: 529,
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
function eT(e) {
    return { name: e, url: eN[e].url };
}
let eR = eT("tex_none"),
    eO = {
        [ej.N.NONE]: 0,
        [ej.N.CAP]: 7,
        [ej.N.ELVEN_HEADPIECE]: 1,
        [ej.N.HEADPHONES]: 2,
        [ej.N.TEDDY_BEANIE]: 13,
        [ej.N.PIERCINGS]: 4,
        [ej.N.HEADBAND]: 5,
        [ej.N.SUNGLASSES]: 6,
        [ej.N.BANANA_PEEL]: 3,
        [ej.N.LEAF]: 8,
        [ej.N.FIRE]: 9,
        [ej.N.HALO]: 10,
        [ej.N.BRAIN]: 11,
        [ej.N.TRAFFIC_CONE]: 12,
        [ej.N.CROWN]: 14,
    },
    eM = {
        [eC.Z.NONE]: 0,
        [eC.Z.ANGEL_WINGS]: 3,
        [eC.Z.STICKERS]: 1,
        [eC.Z.TOTE]: 2,
        [eC.Z.WIZARD_STAFF]: 8,
        [eC.Z.SKATEBOARD]: 4,
        [eC.Z.DRAGON_WINGS]: 5,
        [eC.Z.TAKE_OUT_BAG]: 6,
        [eC.Z.PIXEL_WRENCH]: 7,
        [eC.Z.MECH_WINGS]: 9,
        [eC.Z.SWORD]: 10,
        [eC.Z.DEVIANT_TAIL]: 11,
        [eC.Z.MAGICAL_STAFF]: 12,
        [eC.Z.BUTTERFLY_WINGS]: 13,
        [eC.Z.CAT_BACKPACK]: 14,
    },
    ey = {
        [eI.X.NONE]: eR,
        [eI.X.BLAZE]: eT("tex_aura_04_blaze"),
        [eI.X.BLOSSOM]: eT("tex_aura_01_blossom"),
        [eI.X.PRISM]: eT("tex_aura_02_prism"),
        [eI.X.SHOCK]: eT("tex_aura_03_shock"),
        [eI.X.FATED]: eT("tex_aura_05_fated"),
        [eI.X.LUSTER]: eT("tex_aura_06_luster"),
        [eI.X.BUBBLES]: eT("tex_aura_07_bubbly"),
        [eI.X.SPOOKY]: eT("tex_aura_08_spooky"),
        [eI.X.CURSED]: eT("tex_aura_09_cursed"),
        [eI.X.MAGNETIC]: eT("tex_aura_10_magnetic"),
        [eI.X.RADIOACTIVE]: eT("tex_aura_11_radioactive"),
        [eI.X.ELEMENTAL]: eT("tex_aura_12_elemental"),
        [eI.X.SHIMMER]: eT("tex_aura_13_shimmer"),
        [eI.X.WITCHY]: eT("tex_aura_14_witchy"),
    },
    eL = {
        [eE.R.ICY]: eT("tex_base_01_icy"),
        [eE.R.CRIMSON]: eT("tex_base_02_crimson"),
        [eE.R.CHROME]: eT("tex_base_03_chrome"),
        [eE.R.GALACTIC]: eT("tex_base_04_galactic"),
        [eE.R.FOREST]: eT("tex_base_05_forrest"),
        [eE.R.MIDNIGHT]: eT("tex_base_06_mighnight"),
        [eE.R.GLACIER]: eT("tex_base_07_glacier"),
        [eE.R.ORANGE]: eT("tex_base_08_orange"),
        [eE.R.PURPLE]: eT("tex_base_09_pink"),
        [eE.R.RED]: eT("tex_base_10_red"),
        [eE.R.COBALT]: eT("tex_base_11_cobalt"),
        [eE.R.X_RAY]: eT("tex_base_12_x-ray"),
        [eE.R.LIQUID]: eT("tex_base_13_liquid"),
        [eE.R.BUTTER]: eT("tex_base_14_butter"),
        [eE.R.IRIDESCENT]: eT("tex_base_15_iridescent"),
    },
    ek = {
        [eS.r.NONE]: null,
        [eS.r.BADDIE_DEFAULT]: { riveId: 1, texture: eT("tex_outfit_01_baddie") },
        [eS.r.TRAVELER_DEFAULT]: { riveId: 10, texture: eT("tex_outfit_10_traveler") },
        [eS.r.STREAMER_DEFAULT]: { riveId: 3, texture: eT("tex_outfit_03_streamer") },
        [eS.r.CAMPER_DEFAULT]: { riveId: 4, texture: eT("tex_outfit_04_camper") },
        [eS.r.ATHLETE_DEFAULT]: { riveId: 5, texture: eT("tex_outfit_05_athlete") },
        [eS.r.COWPOKE_DEFAULT]: { riveId: 6, texture: eT("tex_outfit_06_cowpoke") },
        [eS.r.GOTH_DEFAULT]: { riveId: 7, texture: eT("tex_outfit_07_goth") },
        [eS.r.ASTRONAUT_DEFAULT]: { riveId: 8, texture: eT("tex_outfit_08_astronaut") },
        [eS.r.JESTER_DEFAULT]: { riveId: 9, texture: eT("tex_outfit_09_jester") },
        [eS.r.TRASH_CAN_DEFAULT]: { riveId: 2, texture: eT("tex_outfit_02_trash") },
        [eS.r.MAGE_DEFAULT]: { riveId: 11, texture: eT("tex_outfit_11_mage") },
        [eS.r.MECH_DEFAULT]: { riveId: 12, texture: eT("tex_outfit_12_mech") },
        [eS.r.KNIGHT_DEFAULT]: { riveId: 13, texture: eT("tex_outfit_13_knight") },
        [eS.r.MAGICAL_DEFAULT]: { riveId: 14, texture: eT("tex_outfit_14_magical") },
        [eS.r.BADDIE_MONOCHROME]: { riveId: 1, texture: eT("tex_outfit_01_baddie_monochrome") },
        [eS.r.BADDIE_VIOLET]: { riveId: 1, texture: eT("tex_outfit_01_baddie_violet") },
        [eS.r.BADDIE_PASTEL]: { riveId: 1, texture: eT("tex_outfit_01_baddie_pastel") },
        [eS.r.BADDIE_SUNSET]: { riveId: 1, texture: eT("tex_outfit_01_baddie_sunset") },
        [eS.r.TRAVELER_HAZE]: { riveId: 10, texture: eT("tex_outfit_10_traveler_haze") },
        [eS.r.TRAVELER_MOSS]: { riveId: 10, texture: eT("tex_outfit_10_traveler_moss") },
        [eS.r.TRAVELER_CHRONO]: { riveId: 10, texture: eT("tex_outfit_10_traveler_chrono") },
        [eS.r.TRAVELER_UMBER]: { riveId: 10, texture: eT("tex_outfit_10_traveler_umber") },
        [eS.r.STREAMER_FLAMES]: { riveId: 3, texture: eT("tex_outfit_03_streamer_flames") },
        [eS.r.STREAMER_STRIPES]: { riveId: 3, texture: eT("tex_outfit_03_streamer_stripes") },
        [eS.r.STREAMER_SMILEY]: { riveId: 3, texture: eT("tex_outfit_03_streamer_smiley") },
        [eS.r.STREAMER_VINTAGE]: { riveId: 3, texture: eT("tex_outfit_03_streamer_vintage") },
        [eS.r.CAMPER_PLAID]: { riveId: 4, texture: eT("tex_outfit_04_camper_plaid") },
        [eS.r.CAMPER_SWAMP]: { riveId: 4, texture: eT("tex_outfit_04_camper_swamp") },
        [eS.r.CAMPER_GLAMP]: { riveId: 4, texture: eT("tex_outfit_04_camper_glamp") },
        [eS.r.CAMPER_AMBER]: { riveId: 4, texture: eT("tex_outfit_04_camper_amber") },
        [eS.r.ATHLETE_BLOCKED]: { riveId: 5, texture: eT("tex_outfit_05_athlete_blocked") },
        [eS.r.ATHLETE_FADED]: { riveId: 5, texture: eT("tex_outfit_05_athlete_faded") },
        [eS.r.ATHLETE_CHECKERED]: { riveId: 5, texture: eT("tex_outfit_05_athlete_checkered") },
        [eS.r.ATHLETE_LINED]: { riveId: 5, texture: eT("tex_outfit_05_athlete_lined") },
        [eS.r.COWPOKE_ONYX]: { riveId: 6, texture: eT("tex_outfit_06_cowpoke_onyx") },
        [eS.r.COWPOKE_STEEL]: { riveId: 6, texture: eT("tex_outfit_06_cowpoke_steel") },
        [eS.r.COWPOKE_DENIM]: { riveId: 6, texture: eT("tex_outfit_06_cowpoke_denim") },
        [eS.r.COWPOKE_BLUSH]: { riveId: 6, texture: eT("tex_outfit_06_cowpoke_blush") },
        [eS.r.GOTH_SIREN]: { riveId: 7, texture: eT("tex_outfit_07_goth_siren") },
        [eS.r.GOTH_SERPENT]: { riveId: 7, texture: eT("tex_outfit_07_goth_serpent") },
        [eS.r.GOTH_RAVEN]: { riveId: 7, texture: eT("tex_outfit_07_goth_raven") },
        [eS.r.GOTH_VAMP]: { riveId: 7, texture: eT("tex_outfit_07_goth_vamp") },
        [eS.r.ASTRONAUT_STARDUST]: { riveId: 8, texture: eT("tex_outfit_08_astronaut_stardust") },
        [eS.r.ASTRONAUT_MARTIAN]: { riveId: 8, texture: eT("tex_outfit_08_astronaut_martian") },
        [eS.r.ASTRONAUT_SOLAR]: { riveId: 8, texture: eT("tex_outfit_08_astronaut_solar") },
        [eS.r.ASTRONAUT_COSMIC]: { riveId: 8, texture: eT("tex_outfit_08_astronaut_cosmic") },
        [eS.r.JESTER_CONFETTI]: { riveId: 9, texture: eT("tex_outfit_09_jester_confetti") },
        [eS.r.JESTER_CARNIVAL]: { riveId: 9, texture: eT("tex_outfit_09_jester_carnival") },
        [eS.r.JESTER_SUNRISE]: { riveId: 9, texture: eT("tex_outfit_09_jester_sunrise") },
        [eS.r.JESTER_NIGHTFALL]: { riveId: 9, texture: eT("tex_outfit_09_jester_nightfall") },
        [eS.r.TRASH_CAN_BLACKOUT]: { riveId: 2, texture: eT("tex_outfit_02_trash_blackout") },
        [eS.r.TRASH_CAN_CAUTION]: { riveId: 2, texture: eT("tex_outfit_02_trash_caution") },
        [eS.r.TRASH_CAN_BUBBLEGUM]: { riveId: 2, texture: eT("tex_outfit_02_trash_bubblegum") },
        [eS.r.TRASH_CAN_TOXIC]: { riveId: 2, texture: eT("tex_outfit_02_trash_toxic") },
        [eS.r.MAGE_SHADOW]: { riveId: 11, texture: eT("tex_outfit_11_mage_shadow") },
        [eS.r.MAGE_DUSK]: { riveId: 11, texture: eT("tex_outfit_11_mage_dusk") },
        [eS.r.MAGE_WILDWOOD]: { riveId: 11, texture: eT("tex_outfit_11_mage_wildwood") },
        [eS.r.MAGE_WINTER]: { riveId: 11, texture: eT("tex_outfit_11_mage_winter") },
        [eS.r.MECH_AERO]: { riveId: 12, texture: eT("tex_outfit_12_mech_aero") },
        [eS.r.MECH_VIPER]: { riveId: 12, texture: eT("tex_outfit_12_mech_viper") },
        [eS.r.MECH_ULTRAVIOLET]: { riveId: 12, texture: eT("tex_outfit_12_mech_ultraviolet") },
        [eS.r.MECH_SANDSTORM]: { riveId: 12, texture: eT("tex_outfit_12_mech_sandstorm") },
        [eS.r.KNIGHT_IRON]: { riveId: 13, texture: eT("tex_outfit_13_knight_iron") },
        [eS.r.KNIGHT_RUST]: { riveId: 13, texture: eT("tex_outfit_13_knight_rust") },
        [eS.r.KNIGHT_PETAL]: { riveId: 13, texture: eT("tex_outfit_13_knight_petal") },
        [eS.r.KNIGHT_GLACIER]: { riveId: 13, texture: eT("tex_outfit_13_knight_glacier") },
        [eS.r.MAGICAL_SAPPHIRE]: { riveId: 14, texture: eT("tex_outfit_14_magical_sapphire") },
        [eS.r.MAGICAL_AMETHYST]: { riveId: 14, texture: eT("tex_outfit_14_magical_amethyst") },
        [eS.r.MAGICAL_FROST]: { riveId: 14, texture: eT("tex_outfit_14_magical_frost") },
        [eS.r.MAGICAL_CITRINE]: { riveId: 14, texture: eT("tex_outfit_14_magical_citrine") },
    };
var eD = a(835517),
    eP = (((i = {}).SLOT = "slot"), (i.TRAIT = "trait"), (i.LAYOUT = "layout"), (i.ALWAYS = "always"), i);
let eU = /^tex_(aura|base_\d+|outfit)_/,
    eG = /^tex_(headwear|shoes|wearable|face)_(\d+)_/,
    eH = /^tex_face_([a-z]+)_/i,
    eF = {
        tex_env_labNight_bg: ["Desktop"],
        tex_env_labNight_bg_mobileLandscape: ["MobileLandscape"],
        tex_env_labNight_bg_mobilePortrait: ["MobilePortrait"],
        tex_env_labNight_fgLeft: ["Desktop"],
        tex_env_labNight_fgRight: ["Desktop"],
        tex_env_labNight_mgBottom: ["Desktop"],
        tex_env_labNight_mgBottomMobile: ["MobilePortrait", "MobileLandscape"],
        tex_env_labNight_sky: ["Desktop"],
    },
    eK = {
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
    eB = { columns: 1, rows: 1 },
    ez = { columns: 5, rows: 5 },
    eV = { columns: 6, rows: 8 },
    eW = {
        tex_aura_01_blossom: ez,
        tex_aura_02_prism: ez,
        tex_aura_03_shock: ez,
        tex_aura_04_blaze: ez,
        tex_aura_05_fated: ez,
        tex_aura_06_luster: ez,
        tex_aura_07_bubbly: ez,
        tex_aura_08_spooky: ez,
        tex_aura_09_cursed: ez,
        tex_aura_10_magnetic: ez,
        tex_aura_11_radioactive: ez,
        tex_aura_12_elemental: ez,
        tex_aura_13_shimmer: ez,
        tex_aura_14_witchy: ez,
        tex_wireframe_spritesheet: { columns: 12, rows: 6 },
        tex_wearable_10_sword_spritesheet: { columns: 5, rows: 4 },
        tex_wearable_11_deviantTail_smoke_active_spritesheet: eV,
        tex_wearable_11_deviantTail_smoke_idle_spritesheet: eV,
    },
    eq = [1, 1.25, 1.5, 1.75, 2, 3, 4, 5],
    eY = Math.min(...eq),
    eZ = Math.max(...eq);
function eX(e, t) {
    let { url: a, width: r, height: i, widthAt1x: n } = eN[e];
    if (null == n) return a;
    let s = 4096 / Math.max(r, i),
        c = Math.min((t * n) / r, s),
        d = s >= 1 && t >= Math.round(r / n);
    if (c >= 1 || d) return a;
    let { columns: l, rows: o } = eW[e] ?? eB,
        u = l * Math.round((r / l) * c),
        h = o * Math.round((i / o) * c);
    return `${a}?width=${u}&height=${h}`;
}
let eQ = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14"],
    eJ = eQ.map((e) => `outfit${e}Image`),
    e$ = {
        [C.s9.IDLE]: 0,
        [C.s9.INTRODUCTION]: 1,
        [C.s9.FACE]: 2,
        [C.s9.OUTFIT]: 3,
        [C.s9.HEADWEAR]: 4,
        [C.s9.SHOES]: 5,
        [C.s9.WEARABLE]: 6,
        [C.s9.AURA]: 7,
        [C.s9.ASSEMBLED]: 8,
        [C.s9.FINALIZE]: 8,
        [C.s9.SUMMARY]: 8,
    },
    e0 = {
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
    e1 = { ...e0.MobilePortrait, gradientTopPosition: 25, gradientBottomPosition: 90 };
var e2 = a(722872),
    e3 = a(574381);
let e8 = new Set([1]),
    e7 = Object.keys(eN).map((e) => ({
        name: e,
        role: (function (e) {
            if (eU.test(e)) return { type: "slot" };
            let t = eF[e];
            if (null != t) return { type: "layout", layouts: t };
            let a = eG.exec(e);
            if (null != a) return { type: "trait", path: `${a[1]}ID`, riveId: Number(a[2]) };
            let r = eH.exec(e),
                i = null != r ? eK[r[1].toLowerCase()] : void 0;
            return null != i ? { type: "trait", path: "faceID", riveId: i } : { type: "always" };
        })(e),
        swapKey: (0, e3.un)() ? `${e}-${eN[e].riveId}` : e,
    }));
function e5(e) {
    let { faceID: t, headwearID: a, shoesID: r, wearableID: i, chapterID: n, device: s } = e;
    return p.useMemo(() => {
        var e;
        let c;
        return (
            (e = { faceID: t, headwearID: a, shoesID: r, wearableID: i }),
            (c = new Set()),
            e7.forEach((t) => {
                let { name: a, role: r } = t;
                switch (r.type) {
                    case eP.SLOT:
                        break;
                    case eP.TRAIT:
                        e[r.path] === r.riveId && c.add(a);
                        break;
                    case eP.LAYOUT:
                        r.layouts.includes(s) && c.add(a);
                        break;
                    case eP.ALWAYS:
                        ("tex_wireframe_spritesheet" !== a || e8.has(n)) && c.add(a);
                }
            }),
            c
        );
    }, [t, a, r, i, n, s]);
}
var e6 = a(435558);
let e9 = (0, a(196765).v)(() => ({ hoveredOption: void 0 })),
    e4 = (0, e6.debounce)((e) => e9.setState({ hoveredOption: e }), 250);
function te(e) {
    let { hoveredOption: t, isDelayed: a = !1 } = e;
    a ? e4(t) : (e4.cancel(), e9.setState({ hoveredOption: t }));
}
(a(393431), a(532706), a(42231), a(232424), a(949626), a(767709), a(65162));
var tt = a(971940);
async function ta(e) {
    try {
        let t = await fetch(e);
        if (!t.ok) return null;
        return await (0, tt.decodeImage)(new Uint8Array(await t.arrayBuffer()));
    } catch {
        return null;
    }
}
var tr = a(168862);
function ti(e) {
    let t,
        a,
        { stage: r, isHidden: i } = e,
        s = (0, g.bG)([l.A], () => {
            let e = l.A.windowSize();
            return (function (e, t) {
                let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (a) return eY;
                let r = Math.max(e / 960, t / 540) * (0, eD.A)();
                return eq.find((e) => e >= r) ?? eZ;
            })(e.width, e.height);
        }),
        [c, d] = p.useState(s);
    s > c && d(s);
    let o =
            ((t = (0, g.bG)([h.A], () => h.A.selectedCharacterTraits)),
            (a = e9((e) => e.hoveredOption)),
            p.useMemo(() => (null != a ? { ...t, [a.trait]: a.optionId } : t), [t, a])),
        u = (0, g.bG)([V.Ay], () => V.Ay.useReducedMotion),
        f = p.useMemo(
            () =>
                (function (e) {
                    let { stage: t, isHidden: a, traits: r, layout: i, textureScale: n } = e,
                        { base: s, shoes: c, outfit: d, face: l, hat: o, wearable: u, aura: h } = (0, G.XI)(r),
                        f = ek[d],
                        b = {};
                    return (
                        eQ.forEach((e) => {
                            let t = Number(e) === f?.riveId ? f.texture : eR;
                            b[`outfit${e}Image`] = eX(t.name, n);
                        }),
                        {
                            device: i,
                            chapterID: a && t === C.s9.FACE ? e$[C.s9.IDLE] : e$[t],
                            faceID: l,
                            shoesID: c,
                            headwearID: eO[o],
                            wearableID: eM[u],
                            outfitID: f?.riveId ?? 0,
                            auraImage: eX(ey[h].name, n),
                            baseColorImage: eX(eL[s].name, n),
                            ...("MobilePortrait" === i && t === C.s9.INTRODUCTION ? e1 : e0[i]),
                            ...b,
                        }
                    );
                })({ stage: r, isHidden: i, traits: o, layout: "Desktop", textureScale: c }),
            [r, i, o, c],
        ),
        [b, _] = p.useState(null),
        x = (function (e) {
            let { visibleDataBinding: t, requestedDataBinding: a, textureScale: r } = e,
                i = (function (e) {
                    let { visibleTextureNames: t, requestedTextureNames: a } = e,
                        [r, i] = p.useState(t),
                        [n, s] = p.useState(t);
                    if (t !== n) {
                        s(t);
                        let e = new Set(r);
                        (t.forEach((t) => e.add(t)), i(e));
                    }
                    return (
                        p.useEffect(() => {
                            let e = setTimeout(() => i(t), 600);
                            return () => clearTimeout(e);
                        }, [t]),
                        p.useMemo(() => new Set([...r, ...a]), [r, a])
                    );
                })({ visibleTextureNames: e5(t), requestedTextureNames: e5(a) });
            return p.useMemo(() => {
                let e;
                return (
                    (e = {}),
                    e7.forEach((t) => {
                        let { name: a, swapKey: n } = t,
                            s = i.has(a) ? eX(a, r) : eR.url;
                        e[n] = { source: { uri: s } };
                    }),
                    e
                );
            }, [i, r]);
        })({ visibleDataBinding: b ?? f, requestedDataBinding: f, textureScale: c }),
        {
            assetLoader: A,
            onLoad: v,
            textureManager: w,
        } = (function () {
            let e = p.useRef(new Map()),
                [t, a] = p.useState(null),
                r = p.useCallback((t) => !!t.isImage && t.name in eN && (e.current.set(t.name, t), !0), []);
            return {
                assetLoader: r,
                onLoad: p.useCallback(() => {
                    (a(e.current), (e.current = new Map()));
                }, []),
                textureManager: p.useMemo(
                    () =>
                        null == t
                            ? null
                            : {
                                  load: ta,
                                  swap: (e) => e.forEach((e, a) => t.get(a)?.setRenderImage(e)),
                                  release: (e) => e.forEach((e) => e.unref()),
                              },
                    [t],
                ),
            };
        })(),
        I = p.useRef(null),
        E = p.useRef(i);
    p.useEffect(() => {
        ((E.current = i), i ? I.current?.pause() : I.current?.play());
    }, [i]);
    let j = p.useCallback(() => {
            (v(), E.current && I.current?.pause());
        }, [v]),
        S = (function (e) {
            let { textureManager: t, referencedAssets: a, initialReferencedAssets: r } = e,
                i = p.useRef(new Map()),
                [n, s] = p.useState(r);
            return (
                p.useEffect(() => {
                    i.current = new Map(
                        Object.entries(r ?? {}).map((e) => {
                            let [t, { source: a }] = e;
                            return [t, a.uri];
                        }),
                    );
                }, [t, r]),
                p.useEffect(() => {
                    if (null == t) return;
                    let e = !1;
                    return (
                        (async () => {
                            (await (async function (e) {
                                let { textureManager: t, shownUrls: a, referencedAssets: r, isStale: i } = e,
                                    n = new Map();
                                if (
                                    (Object.entries(r).forEach((e) => {
                                        let [t, { source: r }] = e;
                                        a.get(t) !== r.uri && n.set(t, r.uri);
                                    }),
                                    0 === n.size)
                                )
                                    return;
                                let s = new Map();
                                if (
                                    (await Promise.all(
                                        Array.from(new Set(n.values()), async (e) => {
                                            let a = await t.load(e);
                                            null != a && s.set(e, a);
                                        }),
                                    ),
                                    !i())
                                ) {
                                    let e = new Map();
                                    (n.forEach((t, r) => {
                                        let i = s.get(t);
                                        null != i && (e.set(r, i), a.set(r, t));
                                    }),
                                        t.swap(e));
                                }
                                t.release(Array.from(s.values()));
                            })({ textureManager: t, shownUrls: i.current, referencedAssets: a, isStale: () => e }),
                                e || s(a));
                        })(),
                        () => {
                            e = !0;
                        }
                    );
                }, [t, a]),
                n === a
            );
        })({ textureManager: w, referencedAssets: x }),
        {
            dataBinding: N,
            isOutfitPreloaded: T,
            onDataBindingChange: R,
        } = (function (e) {
            var t;
            let { visibleDataBinding: a, requestedDataBinding: r } = e,
                [i, n] = p.useState({}),
                s = (t = r.outfitID) > 0 ? eJ[t - 1] : null,
                c = null != s ? r[s] : void 0,
                d = null == s || a?.[s] === c || i[s] === c,
                l = a ?? r;
            return {
                dataBinding: p.useMemo(() => (null == s || l[s] === c ? l : { ...l, [s]: c }), [l, s, c]),
                isOutfitPreloaded: d,
                onDataBindingChange: p.useMemo(() => {
                    let e = {};
                    return (
                        eJ.forEach((t) => {
                            e[t] = (e) => {
                                n((a) => (a[t] === e ? a : { ...a, [t]: e }));
                            };
                        }),
                        e
                    );
                }, []),
            };
        })({ visibleDataBinding: b, requestedDataBinding: f });
    S && T && b !== f && _(f);
    let O = (function (e) {
            let { stage: t, dataBinding: a } = e,
                r = (0, g.bG)([V.Ay], () => V.Ay.useReducedMotion),
                i = t === C.s9.INTRODUCTION && !r,
                [n, s] = p.useState(+!i),
                [c, d] = p.useState(i);
            return (
                i !== c && (d(i), s(+!i)),
                p.useEffect(() => {
                    if (!i) return;
                    let e = Date.now() + 1800,
                        t = requestAnimationFrame(function a() {
                            let r = Math.max(Math.min(Date.now() - e, 1e3), 0);
                            (s((0, e2.easeOutCubic)(r, 0, 1, 1e3)), r >= 1e3 || (t = requestAnimationFrame(a)));
                        });
                    return () => cancelAnimationFrame(t);
                }, [i]),
                p.useMemo(
                    () =>
                        1 === n
                            ? a
                            : {
                                  ...a,
                                  gradientTopOpacity: a.gradientTopOpacity * n,
                                  gradientBottomOpacity: a.gradientBottomOpacity * n,
                                  gradientLeftOpacity: a.gradientLeftOpacity * n,
                                  gradientRightOpacity: a.gradientRightOpacity * n,
                              },
                    [a, n],
                )
            );
        })({ stage: r, dataBinding: N }),
        M = p.useMemo(() => ({ ...O, mobileLift: 0, reducedMotion: u }), [O, u]);
    return (0, n.jsx)("div", {
        role: "img",
        "aria-label": (0, ew.O)(o),
        className: m()(tr.dw, { [tr.RK]: null != b }),
        children: (0, n.jsx)(ev.W, {
            artboard: "AB_Master",
            stateMachine: "SM_Master",
            fit: "layout",
            alignment: "center",
            ref: I,
            assetLoader: A,
            onLoad: j,
            listenOnDocumentBody: !u,
            withReducedMotion: "play",
            dataBinding: M,
            onDataBindingChange: R,
            className: tr.lW,
        }),
    });
}
var tn = a(840527);
function ts(e) {
    let { stage: t, hiddenBy: a, className: r, children: i } = e,
        s = a === W.STATS,
        c = a === W.CUSTOMIZATION_ROUTE_CHANGE,
        [d, l] = p.useState(s);
    !s && d && l(!1);
    let o = (s && !d) || c,
        { isMountDelayed: u } = (function (e) {
            let [t, a] = p.useState(e);
            return (
                !e && t && a(!1),
                p.useEffect(() => {
                    if (!t) return;
                    let e = setTimeout(() => a(!1), ei);
                    return () => clearTimeout(e);
                }, [t]),
                { isMountDelayed: t }
            );
        })(s),
        h = (0, em.p0)({ value: t, shouldUpdate: !o }) ?? t,
        f = (0, em.p0)({ value: i, shouldUpdate: !o }),
        b = (0, em.p0)({ value: a, shouldUpdate: null != a }) === W.CUSTOMIZATION_ROUTE_CHANGE;
    return (0, n.jsxs)(eA, {
        visible: null == a,
        enter: b ? ea : et,
        exit: c ? ea : er,
        keepMounted: !0,
        onExitComplete: () => {
            s && l(!0);
        },
        className: r,
        children: [
            (0, n.jsx)("div", { className: tn.q, children: !u && (0, n.jsx)(ti, { stage: h, isHidden: d }) }),
            null != f && (0, n.jsx)("div", { className: tn.q, children: f }),
        ],
    });
}
function tc(e) {
    let { animatedSrc: t, staticSrc: a, className: r } = e,
        i = (0, g.bG)([V.Ay], () => V.Ay.useReducedMotion);
    return (0, n.jsx)("img", { src: i ? a : t, alt: "", className: r });
}
var td = a(740281),
    tl = a(766089),
    to = a(767988);
let tu = { animatedSrc: tl.A, staticSrc: to.A };
function th(e) {
    let { activeRoute: t } = e,
        { animatedSrc: a, staticSrc: r } = (0, g.cf)(
            [h.A],
            () => {
                switch (t) {
                    case C.gr.SUMMARY:
                    case C.gr.SHARE:
                        let e = (0, E.o)(h.A.character),
                            { clydeLogoImage: a, clydeLogoStaticImage: r } = (0, E.j)(e);
                        return { animatedSrc: a, staticSrc: r };
                    default:
                        return tu;
                }
            },
            [t],
        );
    return (0, n.jsx)(tc, { animatedSrc: a, staticSrc: r, className: td.w });
}
var tf = a(756408);
function tb() {
    let e = p.useRef(null);
    return (
        p.useLayoutEffect(() => {
            let t = e.current;
            null != t && ((t.tabIndex = -1), t.focus({ preventScroll: !0 }));
        }, []),
        e
    );
}
var tp = a(834730),
    t_ = a(534514),
    tm = a(504736);
function tx(e) {
    let { children: t, className: a, ...r } = e;
    return (0, n.jsx)(tp.E, { ...r, className: m()(tm.Q, a), color: "none", children: t });
}
function tg(e) {
    let { children: t, className: a, ...r } = e,
        i = tb();
    return (0, n.jsx)(t_.D, { ...r, ref: i, className: m()(tm.Q, a), color: "none", children: t });
}
var tA = a(271427);
function tv(e) {
    let { children: t, className: a, style: r } = e;
    return (0, n.jsx)(tx, { tag: "span", variant: "mono-md/bold", className: m()(tA.T, a), style: r, children: t });
}
var tw = a(852717),
    tI = a(792996),
    tE = a(383931);
function tj(e) {
    let { percent: t } = e;
    return (0, n.jsx)(tv, {
        className: tE.t,
        children: tI.intl.formatToPlainString(tw.default.fOGKA4, { percent: t }),
    });
}
var tS = a(646692);
function tC(e) {
    let { icon: t, value: a, topPercent: r, children: i } = e,
        s = tb(),
        c =
            null != r
                ? tI.intl.formatToPlainString(tw.default.USo6cU, { value: a, label: i, percent: r })
                : tI.intl.formatToPlainString(tw.default["+CCx/D"], { value: a, label: i });
    return (0, n.jsxs)("div", {
        ref: s,
        role: "heading",
        "aria-level": 2,
        children: [
            (0, n.jsxs)("div", {
                className: tS.dJ,
                "aria-hidden": !0,
                children: [
                    null != r && (0, n.jsx)(tj, { percent: r }),
                    (0, n.jsxs)("div", {
                        className: tS.p,
                        children: [
                            (0, n.jsx)(tx, {
                                variant: "heading-xxl/medium",
                                className: tS.Uq,
                                children: a.toLocaleString(tI.intl.currentLocale),
                            }),
                            (0, n.jsxs)("div", {
                                className: tS.Pf,
                                children: [
                                    (0, n.jsx)(t, { size: "xs", color: "currentColor" }),
                                    (0, n.jsx)(tx, { variant: "heading-xs/semibold", className: tS.QK, children: i }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(v.A, { children: c }),
        ],
    });
}
var tN = a(303453);
let tT = {
    [j.v7.FACE]: tw.default.q8GA6h,
    [j.v7.OUTFIT]: tw.default["xGh/fq"],
    [j.v7.OUTFIT_COLOR]: tw.default.IgiEDV,
    [j.v7.HAT]: tw.default.QqeBEO,
    [j.v7.WEARABLE]: tw.default.l57q3i,
    [j.v7.AURA]: tw.default["fYp+yq"],
    [j.v7.SHOES]: tw.default.BaI4wD,
    [j.v7.BASE]: tw.default.SMXZXX,
};
function tR(e) {
    let { customizationOption: t, earnedCount: a, totalCount: r } = e;
    return (0, n.jsx)(tp.E, {
        variant: "body-md/medium",
        color: "text-subtle",
        className: tN.k,
        children: tI.intl.format(tT[t], {
            earnedCount: a,
            totalCount: r,
            countHook: (e, t) =>
                (0, n.jsx)(tx, { tag: "span", variant: "mono-md/bold", className: tN.U, children: e }, t),
        }),
    });
}
let tO =
    "https://cdn.discordapp.com/assets/content/48cbcb920dfd15e45e7fe3f297ede63a7891cb0eee9fc44f27053d05d2c6b5ca.mp3";
var tM = a(11044);
function ty(e) {
    let { isMuted: t, volume: a } = (0, g.cf)([h.A], () => ({ isMuted: h.A.isMuted, volume: h.A.volume })),
        r = p.useRef(null);
    return (
        p.useEffect(() => {
            r.current = new Audio(e);
        }, [e]),
        p.useEffect(() => {
            null != r.current && ((r.current.muted = t), (r.current.volume = a));
        }, [t, a]),
        p.useCallback(() => {
            let e = r.current;
            t || 0 === a || null == e || ((e.volume = a), (e.currentTime = 0), e.play());
        }, [t, a])
    );
}
var tL = a(218546),
    tk = a(646514),
    tD = a(403581),
    tP = a(461872),
    tU = a(559265);
function tG(e) {
    let { rarity: t } = e,
        a = p.useMemo(() => ({ "--custom-checkpoint-rarity-color": ec.Zy[t] }), [t]);
    return t === tL.K.NITRO
        ? (0, n.jsx)(tD.NitroWheelIcon, { size: "custom", color: tk.A.colors.ICON_SUBTLE, className: tU.d7 })
        : (0, n.jsx)("span", { className: tU.oG, style: a });
}
function tH(e) {
    let {
            traitOption: t,
            groupName: a,
            isSelected: r,
            hideRarity: i,
            onSelectOption: s,
            onHoverOption: c,
            disabled: d = !1,
        } = e,
        { trait: l, optionId: o, rarity: u, asset: h, status: f } = t,
        b = f === tP.eP.LOCKED,
        _ = p.useMemo(() => {
            if (null == h) return null;
            let e = Math.round(80 * (0, eD.A)());
            return `${h}?width=${e}&height=${e}`;
        }, [h]);
    return (0, n.jsxs)("label", {
        className: m()(tU.uK, { [tU.wH]: r, [tU.dv]: (0, j.C5)(t), [tU.xt]: b, [tU.Ns]: f === tP.eP.NITRO_LOCKED }),
        onMouseEnter: () => c(t),
        onFocus: function () {
            c(t);
        },
        children: [
            (0, n.jsx)(v.A, {
                children: (0, n.jsx)("input", {
                    type: "radio",
                    name: a,
                    checked: r,
                    disabled: d,
                    "aria-disabled": d ? void 0 : b,
                    onChange: function () {
                        d || b || s(l, o);
                    },
                    "aria-label": (0, j.v2)(t, { skipRarity: i, skipDescription: !1 }),
                }),
            }),
            null != _ && (0, n.jsx)("img", { src: _, alt: "", draggable: !1, className: tU.Sl }),
            !i && null != u && (0, n.jsx)(tG, { rarity: u }),
        ],
    });
}
var tF = a(541170),
    tK = a(974862),
    tB = a(142389),
    tz = a(211235),
    tV = a(230532),
    tW = a(110601),
    tq = a(917970);
function tY(e) {
    let { customizationOption: t, traitOptions: a, selectedOption: r, onSelectOption: i, disabled: s = !1 } = e,
        c = p.useId(),
        d = !(0, j.Ux)(t),
        l = ty(
            "https://cdn.discordapp.com/assets/content/fc5527a1a369d8982c6e6fa588f732c7c5364ff00ddd0cf51646f05ad423af36.mp3",
        ),
        o = ty(tO);
    ((0, z.Ay)(() => {
        [tK, tq, tB, tz, tW, tV].forEach((e) => (0, tM.N)(e));
    }),
        p.useEffect(() => () => te({ hoveredOption: void 0 }), [t]));
    let u = p.useCallback(
            (e, t) => {
                (te({ hoveredOption: void 0 }), o(), i(e, t));
            },
            [i, o],
        ),
        h = p.useCallback(
            (e) => {
                (l(), te({ hoveredOption: e.optionId !== r?.optionId ? e : void 0, isDelayed: !0 }));
            },
            [l, r],
        );
    return (0, n.jsx)("div", {
        onMouseLeave: () => te({ hoveredOption: void 0 }),
        children: (0, n.jsx)("div", {
            role: "radiogroup",
            "aria-label": (0, j.cq)(t),
            className: tF.V,
            onBlur: (e) => {
                e.currentTarget.contains(e.relatedTarget) ||
                    e.currentTarget.matches(":hover") ||
                    te({ hoveredOption: void 0 });
            },
            children: a.map((e) =>
                (0, n.jsx)(
                    tH,
                    {
                        traitOption: e,
                        groupName: c,
                        isSelected: e.optionId === r?.optionId,
                        hideRarity: d,
                        onSelectOption: u,
                        onHoverOption: h,
                        disabled: s,
                    },
                    e.optionId,
                ),
            ),
        }),
    });
}
var tZ = a(28863),
    tX = a(793574),
    tQ = a(778705),
    tJ = a(647093);
function t$(e) {
    let { rarity: t } = e,
        a = p.useMemo(() => ({ "--custom-checkpoint-rarity-background": ec.Zy[t] }), [t]);
    return (0, n.jsx)(tv, { className: tJ.q, style: a, children: tI.intl.string(ec.iG[t]) });
}
var t0 = a(829870);
function t1(e) {
    let { title: t, rarity: a, description: r } = e;
    return (0, n.jsxs)("div", {
        className: t0.z,
        children: [
            (0, n.jsxs)("div", {
                className: t0.D,
                children: [
                    (0, n.jsx)(tp.E, { tag: "div", variant: "heading-sm/semibold", color: "text-strong", children: t }),
                    null != a && (0, n.jsx)(t$, { rarity: a }),
                ],
            }),
            null != r && (0, n.jsx)(tp.E, { variant: "body-md/medium", color: "text-subtle", children: r }),
        ],
    });
}
function t2(e) {
    return e.status !== tP.eP.NITRO_LOCKED
        ? (0, j.Oq)(e)
        : tI.intl.format(tw.default.E6AfCb, {
              subscribeHook: (e, t) =>
                  (0, n.jsx)(
                      tZ.Anchor,
                      {
                          onClick: () => (0, tQ.A)({ analyticsLocations: [tX.A.CHECKPOINT, tX.A.CHECKPOINT_TRAIT] }),
                          children: e,
                      },
                      t,
                  ),
          });
}
function t3(e) {
    let { customizationOption: t, selectedOption: a } = e,
        r = e9((e) => e.hoveredOption) ?? a;
    return null == r
        ? null
        : (0, n.jsx)(t1, { title: r.getName(), rarity: (0, j.Ux)(t) ? r.rarity : void 0, description: t2(r) });
}
var t8 = a(509063);
function t7(e) {
    let { children: t, details: a } = e;
    return (0, n.jsxs)("div", {
        className: t8.Nz,
        children: [
            (0, n.jsx)("div", { className: t8.fF, children: t }),
            null != a && (0, n.jsx)("div", { className: t8.zH, children: a }),
        ],
    });
}
var t5 = a(51104);
function t6(e) {
    let { rarity: t, isSavedOption: a, visibleRarities: r, hasNitroSubscription: i } = e;
    return a
        ? tP.eP.UNLOCKED
        : null == t || r.has(t)
          ? t !== tL.K.NITRO || i
              ? tP.eP.UNLOCKED
              : tP.eP.NITRO_LOCKED
          : tP.eP.LOCKED;
}
function t9(e, t) {
    return e === j.v7.OUTFIT ? (null != t ? (0, G.FA)(t) : void 0) : t;
}
function t4(e) {
    let { customizationOption: t } = e,
        {
            optionIds: a,
            selectedOptionId: r,
            savedOptionId: i,
            onSelectOption: n,
        } = (function (e) {
            let { customizationOption: t, onSelectOption: a } = e,
                r = j.hw[t],
                { selectedOptionId: i, savedOptionId: n } = (0, g.cf)([h.A], () => ({
                    selectedOptionId: t9(t, h.A.selectedCharacterTraits[r]),
                    savedOptionId: t9(t, h.A.character?.[r]),
                })),
                s = p.useCallback(
                    (e, t) => {
                        if (t === i) return;
                        let r = (0, G.$C)(e, t),
                            s = t6({
                                rarity: r,
                                isSavedOption: n === t,
                                visibleRarities: (0, G.mf)(e, h.A.stats),
                                hasNitroSubscription: (0, U.ki)(P.default.getCurrentUser()),
                            });
                        ((0, b.dw)(e, t, s, r), a(e, t));
                    },
                    [a, n, i],
                );
            return {
                optionIds: (function (e, t) {
                    switch (e) {
                        case j.v7.OUTFIT:
                            return G.ps;
                        case j.v7.OUTFIT_COLOR:
                            return (0, G.wD)(t ?? eS.r.NONE);
                        default:
                            return;
                    }
                })(t, i),
                selectedOptionId: i,
                savedOptionId: n,
                onSelectOption: s,
            };
        })({ customizationOption: t, onSelectOption: u.IB }),
        {
            traitOptions: s,
            availableTraitOptions: c,
            totalCount: d,
            earnedCount: l,
        } = (function (e) {
            let { customizationOption: t, savedOptionId: a, rarityOrder: r, optionIds: i } = e,
                n = (0, g.bG)([h.A], () => h.A.stats),
                s = (0, g.bG)([P.default], () => (0, U.ki)(P.default.getCurrentUser())),
                c = p.useMemo(() => (0, j.p8)(r), [r]);
            return p.useMemo(() => {
                let e = j.hw[t],
                    r = t === j.v7.OUTFIT_COLOR ? t5.x : t5.$[e],
                    d = (0, G.mf)(e, n),
                    l = [],
                    o = 0,
                    u = 0;
                for (let t of i ?? G.Rk[e]) {
                    let i = (0, G.$C)(e, t),
                        n = t6({ rarity: i, isSavedOption: a === t, visibleRarities: d, hasNitroSubscription: s }),
                        c = n === tP.eP.UNLOCKED && (i !== tL.K.NITRO || s);
                    (null != i && o++,
                        null != i && c && u++,
                        l.push({
                            trait: e,
                            optionId: t,
                            asset: G.qM[e][t]?.thumbnail,
                            rarity: i,
                            status: n,
                            getName: () => {
                                let e = r[t];
                                return null != e ? tI.intl.string(e) : "";
                            },
                        }));
                }
                l.sort(c);
                let h = l.filter((e) => {
                    let { status: t } = e;
                    return t !== tP.eP.LOCKED;
                });
                return { traitOptions: l, availableTraitOptions: h, totalCount: o, earnedCount: u };
            }, [t, s, i, c, a, n]);
        })({ customizationOption: t, savedOptionId: i, rarityOrder: ec.FG, optionIds: a }),
        o = p.useMemo(
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
                n = t[0],
                s = t.some((e) => e.optionId === a);
            p.useEffect(() => {
                i || null == n || s || r(n.trait, n.optionId);
            }, [n, s, r, i]);
        })({ availableTraitOptions: c, selectedOptionId: r, onSelectOption: u.IB }),
        { traitOptions: s, selectedOption: o, totalCount: d, earnedCount: l, onSelectOption: n }
    );
}
function ae(e) {
    let { customizationOption: t } = e,
        {
            traitOptions: a,
            selectedOption: r,
            totalCount: i,
            earnedCount: s,
            onSelectOption: c,
        } = t4({ customizationOption: t });
    return (0, n.jsxs)(t7, {
        details: (0, n.jsx)(t3, { customizationOption: t, selectedOption: r }),
        children: [
            (0, n.jsx)(tR, { customizationOption: t, earnedCount: s, totalCount: i }),
            (0, n.jsx)(tY, { customizationOption: t, traitOptions: a, selectedOption: r, onSelectOption: c }),
        ],
    });
}
var at = a(71678);
function aa(e) {
    let { children: t, className: a } = e;
    return (0, n.jsx)("div", { className: m()(at.n, a), children: t });
}
function ar() {
    let e = (0, g.bG)([h.A], () => h.A.stats?.emojis);
    return (0, n.jsxs)(aa, {
        children: [
            (0, n.jsx)(tC, {
                icon: tf.EmojiSlightlySmilingFaceIcon,
                value: Math.round(e?.numEmojisSent ?? 0),
                topPercent: (0, es.bD)(e?.numEmojisSentPercentile),
                children: tI.intl.string(tw.default.ZTDCIv),
            }),
            (0, n.jsx)(ae, { customizationOption: j.v7.SHOES }),
        ],
    });
}
var ai = a(937383);
function an(e) {
    let { selectedOption: t } = e,
        a = e9((e) => e.hoveredOption) ?? t;
    return null == a
        ? null
        : (0, n.jsx)(t1, {
              title: (0, n.jsxs)(n.Fragment, {
                  children: [
                      a.getName(),
                      " ",
                      (0, n.jsxs)(tp.E, {
                          tag: "span",
                          variant: "heading-sm/semibold",
                          color: "text-subtle",
                          children: [
                              (0, n.jsx)("span", { "aria-hidden": !0, children: "/ " }),
                              (0, n.jsx)(v.A, { children: ", " }),
                              (0, j.hV)(a.optionId),
                          ],
                      }),
                  ],
              }),
              description: t2(a),
          });
}
function as(e) {
    let { disabled: t } = e,
        { traitOptions: a, selectedOption: r, onSelectOption: i } = t4({ customizationOption: j.v7.OUTFIT_COLOR });
    return (0, n.jsx)(t7, {
        details: (0, n.jsx)(an, { selectedOption: r }),
        children: (0, n.jsx)(tY, {
            customizationOption: j.v7.OUTFIT_COLOR,
            traitOptions: a,
            selectedOption: r,
            onSelectOption: i,
            disabled: t,
        }),
    });
}
function ac() {
    return (0, n.jsx)(t7, {
        children: (0, n.jsx)(t1, {
            title: tI.intl.string(tw.default.zsYYN1),
            description: tI.intl.string(tw.default.BkuqWx),
        }),
    });
}
function ad(e) {
    let { lastColorwayIdByOutfitId: t, disabled: a } = e,
        { traitOptions: r, selectedOption: i, onSelectOption: s } = t4({ customizationOption: j.v7.OUTFIT }),
        c = p.useMemo(() => (0, j.G5)(r, t), [t, r]);
    return (0, n.jsx)(t7, {
        details: (0, n.jsx)(t3, { customizationOption: j.v7.OUTFIT, selectedOption: i }),
        children: (0, n.jsx)(tY, {
            customizationOption: j.v7.OUTFIT,
            traitOptions: c,
            selectedOption: i,
            onSelectOption: function (e, a) {
                s(e, t.get(a) ?? a);
            },
            disabled: a,
        }),
    });
}
function al(e) {
    let { customizationOption: t, disabled: a } = e,
        { traitOptions: r, selectedOption: i, onSelectOption: s } = t4({ customizationOption: t });
    return (0, n.jsx)(t7, {
        details: (0, n.jsx)(t3, { customizationOption: t, selectedOption: i }),
        children: (0, n.jsx)(tY, {
            customizationOption: t,
            traitOptions: r,
            selectedOption: i,
            onSelectOption: s,
            disabled: a,
        }),
    });
}
function ao(e) {
    let { customizationOption: t, lastColorwayIdByOutfitId: a, disabled: r } = e;
    switch (t) {
        case j.v7.OUTFIT:
            return (0, n.jsx)(ad, { lastColorwayIdByOutfitId: a, disabled: r });
        case j.v7.OUTFIT_COLOR:
            return (0, n.jsx)(as, { disabled: r });
        default:
            return (0, n.jsx)(al, { customizationOption: t, disabled: r });
    }
}
function au(e) {
    let { id: t, customizationOption: a, disabled: r } = e,
        i = (function () {
            let e = (0, g.bG)([h.A], () => h.A.selectedCharacterTraits[D.V.OUTFIT]),
                [t, a] = p.useState(new Map()),
                r = null != e ? (0, G.FA)(e) : void 0;
            return (null != e && null != r && t.get(r) !== e && a(new Map(t).set(r, e)), t);
        })(),
        s = (0, g.bG)(
            [h.A],
            () => {
                if (a !== j.v7.OUTFIT_COLOR) return !1;
                let e = h.A.selectedCharacterTraits[D.V.OUTFIT];
                return null == e || (0, G.nb)(D.V.OUTFIT, e);
            },
            [a],
        );
    return (0, n.jsx)("div", {
        role: "tabpanel",
        id: t,
        "aria-label": (0, j.cq)(a),
        tabIndex: s ? 0 : void 0,
        className: ai.n,
        children: s
            ? (0, n.jsx)(ac, {})
            : (0, n.jsx)(ao, { customizationOption: a, lastColorwayIdByOutfitId: i, disabled: r }),
    });
}
var ah = a(265872),
    af = a(320448),
    ab = a(315710),
    ap = a(444927);
let a_ = { width: 180, height: 240 },
    am = { width: 220, height: 293 };
function ax(e, t) {
    let { width: a, height: r } = e;
    return {
        "--custom-checkpoint-game-art-width": t,
        "--custom-checkpoint-game-art-height": `calc(var(--custom-checkpoint-game-art-width) * ${r} / ${a})`,
    };
}
let ag = ax(a_, "clamp(135px, 17.5vh, 180px)"),
    aA = ax(am, "clamp(165px, 21.5vh, 220px)"),
    av = {
        "--custom-checkpoint-primary": ec.Kr,
        "--custom-checkpoint-dark-cyan": ec.ow,
        "--custom-checkpoint-button-border": ec.ow,
        "--custom-checkpoint-button-shadow": ec.zj,
        "--custom-checkpoint-white": ec.Ve,
        "--custom-checkpoint-guild-card-background": ec.LM,
        "--custom-checkpoint-background-gradient-start": ec.bI,
    };
var aw = a(580814);
function aI(e) {
    let {
            menuRef: t,
            options: a,
            activeCustomizationOption: r,
            returnRef: i,
            onSelectOption: s,
            onClose: c,
            focusMenu: d,
            onMouseEnter: l,
            onMouseLeave: o,
        } = e,
        u = p.useRef([]),
        h = (0, ap.A)(() => Math.max(a.indexOf(r), 0)),
        [f, b] = p.useState(null);
    function _(e) {
        let t = (e + a.length) % a.length;
        (b(t), u.current[t]?.focus());
    }
    return (
        (0, ab.tj)(t, { disable: !d, disableReturn: !0 }),
        p.useEffect(() => {
            d && u.current[h]?.focus();
        }, [h, d]),
        (0, n.jsx)("div", {
            ref: t,
            role: "menu",
            tabIndex: -1,
            "aria-label": tI.intl.string(tw.default.Zl5vPW),
            className: aw.MK,
            style: av,
            onKeyDown: function (e) {
                if ("Escape" === e.key) return;
                e.stopPropagation();
                let t = u.current.indexOf(e.target);
                switch (e.key) {
                    case "ArrowDown":
                        (e.preventDefault(), _(t + 1));
                        break;
                    case "ArrowUp":
                        (e.preventDefault(), _(t - 1));
                        break;
                    case "Home":
                        (e.preventDefault(), _(0));
                        break;
                    case "End":
                        (e.preventDefault(), _(a.length - 1));
                        break;
                    case "Tab":
                        (c(), i.current?.focus());
                }
            },
            onMouseEnter: l,
            onMouseLeave: () => {
                (d || b(null), o?.());
            },
            children: a.map((e, t) =>
                (0, n.jsx)(
                    "button",
                    {
                        ref: (e) => {
                            u.current[t] = e;
                        },
                        type: "button",
                        role: "menuitemradio",
                        "aria-checked": e === r,
                        tabIndex: -1,
                        className: m()(aw.AS, { [aw.dT]: f === t }),
                        onFocus: () => b(t),
                        onMouseEnter: (e) => {
                            (b(t), d && e.currentTarget.focus());
                        },
                        onClick: () => s(e),
                        children: (0, n.jsx)(tp.E, {
                            tag: "span",
                            variant: "heading-sm/semibold",
                            color: "none",
                            children: (0, j.cq)(e),
                        }),
                    },
                    e,
                ),
            ),
        })
    );
}
var aE = a(421773),
    aj = a(769909);
function aS(e) {
    var t;
    let a,
        {
            activeCustomizationOption: r,
            onSelectOption: i,
            tabIdPrefix: s,
            panelId: c,
            blockedTrait: d,
            disabled: l = !1,
        } = e,
        {
            moreTabRef: o,
            menuRef: u,
            isMoreOptionActive: h,
            moreTabOption: f,
            isMenuOpen: b,
            focusMenu: _,
            openMenu: x,
            closeMenu: g,
            handleRequestClose: A,
            selectMenuOption: w,
            onMouseEnter: I,
            onMouseLeave: E,
        } = (function (e) {
            let { activeCustomizationOption: t, onSelectOption: a, blockedTrait: r, disabled: i } = e,
                n = p.useRef(null),
                s = p.useRef(null),
                c = j.kB.includes(t),
                d = (function (e) {
                    let t = j.kB.includes(e),
                        [a, r] = p.useState(t ? e : null);
                    return (t && a !== e && r(e), a);
                })(t),
                l = i || null != r,
                [o, u] = p.useState(!1),
                {
                    isHovered: h,
                    setIsHovered: f,
                    onMouseEnter: b,
                    onMouseLeave: _,
                    cancelTimers: m,
                } = (0, aE.A)(100, 300);
            function x() {
                (m(), f(!1), u(!1));
            }
            return {
                moreTabRef: n,
                menuRef: s,
                isMoreOptionActive: c,
                moreTabOption: d,
                isMenuOpen: !l && h,
                focusMenu: o,
                openMenu: function () {
                    null != r ? el(r) : i || (m(), u(!0), f(!0));
                },
                closeMenu: x,
                handleRequestClose: function (e, t) {
                    if ("user:escape" !== t) return void x();
                    let a = o || s.current?.contains(s.current.ownerDocument.activeElement);
                    (x(), a && n.current?.focus());
                },
                selectMenuOption: function (e) {
                    (a(e), x(), n.current?.focus());
                },
                onMouseEnter: l ? void 0 : b,
                onMouseLeave: o ? void 0 : _,
            };
        })({ activeCustomizationOption: r, onSelectOption: i, blockedTrait: d, disabled: l }),
        S = h ? "more" : r,
        { tabListRef: C, focusAdjacentTab: N } =
            ((t = [...j.IS, "more"]),
            {
                tabListRef: (a = p.useRef(null)),
                focusAdjacentTab: function (e, r) {
                    let i = (function (e, t, a) {
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
                    })(t.indexOf(e), t.length, r);
                    return (a.current?.querySelectorAll('[role="tab"]')[i]?.focus(), t[i]);
                },
            }),
        T = p.useId(),
        R = null != d ? T : void 0,
        O = null != f ? (0, j.cq)(f) : null;
    function M(e) {
        null != d ? el(d) : l || (i(e), g());
    }
    function y(e) {
        "more" !== e ? M(e) : null != f && M(f);
    }
    function L(e) {
        "more" === e && (h || null == f) ? x() : y(e);
    }
    function k(e) {
        let t = e === S;
        return {
            id: `${s}-${e}`,
            type: "button",
            role: "tab",
            "aria-selected": t,
            "aria-controls": t ? c : void 0,
            "aria-disabled": null != d,
            "aria-describedby": R,
            disabled: l,
            tabIndex: t ? 0 : -1,
            onClick: () => L(e),
            onKeyDown: (t) =>
                (function (e, t) {
                    switch (e.key) {
                        case "Enter":
                            (e.preventDefault(), e.stopPropagation(), L(t));
                            break;
                        case " ":
                            (e.preventDefault(), e.stopPropagation());
                            break;
                        case "ArrowDown":
                            if ("more" !== t) break;
                            (e.preventDefault(), e.stopPropagation(), x());
                            break;
                        case "Tab":
                            g();
                            break;
                        case "ArrowLeft":
                        case "ArrowRight":
                        case "Home":
                        case "End":
                            (e.preventDefault(), e.stopPropagation(), g(), y(N(t, e.key)));
                    }
                })(t, e),
            onKeyUp: (t) => {
                " " === t.key && (t.preventDefault(), t.stopPropagation(), L(e));
            },
            className: m()(aj.Mf, { [aj.OS]: "more" === e, [aj.vu]: t }),
        };
    }
    return (0, n.jsxs)("div", {
        ref: C,
        role: "tablist",
        "aria-label": tI.intl.string(tw.default.Zl5vPW),
        className: aj.vR,
        children: [
            j.IS.map((e) => {
                let t = (0, j.cq)(e);
                return (0, n.jsx)(
                    "button",
                    {
                        ...k(e),
                        "aria-label": t,
                        children: (0, n.jsx)(tp.E, {
                            tag: "span",
                            variant: "heading-sm/semibold",
                            color: "none",
                            children: t,
                        }),
                    },
                    e,
                );
            }),
            (0, n.jsx)(ah.Y, {
                targetElementRef: o,
                shouldShow: b,
                onRequestOpen: x,
                onRequestClose: A,
                position: "right",
                align: "top",
                spacing: 8,
                renderPopout: () =>
                    (0, n.jsx)(aI, {
                        menuRef: u,
                        options: j.kB,
                        activeCustomizationOption: r,
                        returnRef: o,
                        focusMenu: _,
                        onMouseEnter: I,
                        onMouseLeave: E,
                        onSelectOption: w,
                        onClose: g,
                    }),
                children: (e) =>
                    (0, n.jsxs)("button", {
                        ...e,
                        ...k("more"),
                        ref: o,
                        "aria-label":
                            null != O
                                ? tI.intl.formatToPlainString(tw.default.QX1VPx, { category: O })
                                : tI.intl.string(tw.default.jepsQ6),
                        "aria-haspopup": "menu",
                        "aria-expanded": b,
                        onMouseEnter: I,
                        onMouseLeave: E,
                        children: [
                            (0, n.jsx)(tp.E, {
                                tag: "span",
                                variant: "heading-sm/semibold",
                                color: "none",
                                children: O ?? tI.intl.string(tw.default["iXpQc+"]),
                            }),
                            (0, n.jsx)(af.ChevronSmallRightIcon, { size: "refresh_sm", color: "currentColor" }),
                        ],
                    }),
            }),
            null != d && (0, n.jsx)(v.A, { id: T, children: (0, j.Cz)(d) }),
        ],
    });
}
var aC = a(195464);
function aN() {
    let e = p.useId(),
        t = p.useId(),
        [a, r] = p.useState(j.v7.BASE),
        i = H().find((e) => e === j.hw[a]),
        s = (0, g.bG)([h.A], () => h.A.isSaving),
        c = tb();
    return (0, n.jsxs)(aa, {
        className: aC.nj,
        children: [
            (0, n.jsx)(t_.D, {
                ref: c,
                variant: "heading-xl/medium",
                color: "none",
                className: aC.DD,
                children: tI.intl.string(tw.default["q2nj/Z"]),
            }),
            (0, n.jsxs)("div", {
                className: aC.ho,
                children: [
                    (0, n.jsx)(aS, {
                        tabIdPrefix: e,
                        panelId: t,
                        activeCustomizationOption: a,
                        onSelectOption: r,
                        blockedTrait: i,
                        disabled: s,
                    }),
                    (0, n.jsx)(au, { id: t, customizationOption: a, disabled: s }),
                ],
            }),
        ],
    });
}
var aT = a(81466);
function aR() {
    let e = (0, g.bG)([h.A], () => h.A.stats?.games);
    return (0, n.jsxs)(aa, {
        children: [
            (0, n.jsx)(tC, {
                icon: aT.CalendarIcon,
                value: Math.round(e?.totalDaysPlayed ?? 0),
                topPercent: (0, es.bD)(e?.totalDaysPlayedPercentile),
                children: tI.intl.string(tw.default["4N5p4D"]),
            }),
            (0, n.jsx)(ae, { customizationOption: j.v7.AURA }),
        ],
    });
}
var aO = a(687966);
function aM() {
    let e = (0, g.bG)([h.A], () => h.A.stats?.games);
    return (0, n.jsxs)(aa, {
        children: [
            (0, n.jsx)(tC, {
                icon: aO.GameControllerIcon,
                value: Math.round(e?.totalGamesPlayed ?? 0),
                topPercent: (0, es.bD)(e?.totalGamesPlayedPercentile),
                children: tI.intl.string(tw.default.HM2fjf),
            }),
            (0, n.jsx)(ae, { customizationOption: j.v7.WEARABLE }),
        ],
    });
}
var ay = a(534890),
    aL = a(350363);
function ak() {
    let e = (0, g.bG)([h.A], () => h.A.stats?.messages);
    return (0, n.jsxs)(aa, {
        children: [
            (0, n.jsx)(tC, {
                icon: ay.ChatIcon,
                value: Math.round(e?.numMessagesSent ?? 0),
                topPercent: (0, es.bD)(e?.numMessagesSentPercentile),
                children: tI.intl.string(aL.default.wWKySP),
            }),
            (0, n.jsx)(ae, { customizationOption: j.v7.OUTFIT }),
        ],
    });
}
var aD = a(664121);
function aP() {
    let e = (0, g.bG)([h.A], () => h.A.stats?.guilds?.guilds[0]);
    return (0, n.jsxs)(aa, {
        children: [
            (0, n.jsx)(tC, {
                icon: aD.ServerIcon,
                value: Math.round(e?.numDaysInteracted ?? 0),
                topPercent: (0, es.bD)(e?.numDaysInteractedPercentile),
                children: tI.intl.string(tw.default["M+a+t1"]),
            }),
            (0, n.jsx)(ae, { customizationOption: j.v7.HAT }),
        ],
    });
}
var aU = a(831544);
function aG() {
    let e = (0, g.bG)([h.A], () => h.A.stats?.voice),
        t = Math.round(e?.totalVoiceMinutes ?? 0);
    return (0, n.jsxs)(aa, {
        children: [
            (0, n.jsx)(tC, {
                icon: aU.MicrophoneIcon,
                value: t,
                topPercent: (0, es.bD)(e?.totalVoiceMinutesPercentile),
                children: tI.intl.string(tw.default["3/T12E"]),
            }),
            (0, n.jsx)(ae, { customizationOption: j.v7.FACE }),
        ],
    });
}
function aH(e) {
    let { route: t } = e;
    switch (t) {
        case C.gr.VOICE_FACE:
            return (0, n.jsx)(aG, {});
        case C.gr.MESSAGES_OUTFIT:
            return (0, n.jsx)(ak, {});
        case C.gr.SERVERS_HEADWEAR:
            return (0, n.jsx)(aP, {});
        case C.gr.EMOJI_SHOES:
            return (0, n.jsx)(ar, {});
        case C.gr.GAMES_WEARABLE:
            return (0, n.jsx)(aM, {});
        case C.gr.GAME_TIME_AURA:
            return (0, n.jsx)(aR, {});
        case C.gr.FINALIZE_CHARACTER:
            return (0, n.jsx)(aN, {});
        default:
            return null;
    }
}
var aF = a(358618),
    aK = a(983851),
    aB = a(793920),
    az = a(893007),
    aV = a(738964);
function aW(e) {
    return `${Math.round(e)}%`;
}
function aq() {
    let { volume: e, isMuted: t } = (0, g.cf)([h.A], () => ({ volume: h.A.volume, isMuted: h.A.isMuted })),
        a = p.useRef(null),
        r = p.useRef(null),
        [i, s] = p.useState(!1),
        [c, d] = p.useState(!1),
        [l, o] = p.useState(!1),
        [f, b] = p.useState(!1),
        _ = p.useRef(null),
        m = p.useRef(!1),
        x = t ? 0 : Math.round(100 * e),
        A = !f && (i || c || l),
        v = 0 === x ? aF.VoiceXIcon : x > 50 ? aK.VoiceNormalIcon : aB.VoiceLowIcon;
    (p.useLayoutEffect(() => {
        null != r.current && (r.current.volume = e);
    }, [e]),
        (0, z.l0)(() => {
            null != _.current && clearTimeout(_.current);
        }));
    let w = p.useCallback((e) => {
            ((0, u.ls)(e / 100),
                o(!0),
                null != _.current && clearTimeout(_.current),
                (_.current = setTimeout(() => o(!1), 1e3)));
        }, []),
        I = p.useCallback(() => {
            (s(!0), b(!1));
        }, []),
        E = p.useCallback(() => s(!1), []),
        j = p.useCallback((e) => {
            d(!m.current && e.target.matches(":focus-visible"));
        }, []),
        S = p.useCallback(() => {
            ((m.current = !0), d(!1));
        }, []),
        C = p.useCallback(() => {
            ((m.current = !1), d(!0));
        }, []),
        N = p.useCallback(() => {
            s(a.current?.matches(":hover") ?? !1);
        }, []),
        T = p.useCallback((e) => {
            e.currentTarget.contains(e.relatedTarget) || ((m.current = !1), d(!1), b(!1));
        }, []),
        R = p.useCallback(
            (e) => {
                "Escape" === e.key &&
                    A &&
                    (e.preventDefault(),
                    e.stopPropagation(),
                    null != _.current && clearTimeout(_.current),
                    o(!1),
                    b(!0),
                    a.current?.querySelector("button")?.focus());
            },
            [A],
        );
    return (0, n.jsxs)("div", {
        ref: a,
        className: aV.kL,
        onMouseEnter: I,
        onMouseLeave: E,
        onFocus: j,
        onPointerDownCapture: S,
        onBlur: T,
        onKeyDownCapture: C,
        onKeyDown: R,
        children: [
            (0, n.jsx)(ep, {
                size: "sm",
                className: A ? aV.Gg : void 0,
                "aria-label": tI.intl.string(t ? aL.default.GN0uv6 : aL.default.pjF33X),
                onClick: u.K8,
                children: (0, n.jsx)(v, { size: "xs", color: "currentColor" }),
            }),
            A
                ? (0, n.jsx)("div", {
                      className: aV.xJ,
                      children: (0, n.jsx)(az.A, {
                          value: x,
                          minValue: 0,
                          maxValue: 100,
                          onChange: w,
                          onChangeEnd: N,
                          formatValue: aW,
                          "aria-label": tI.intl.string(tI.t.xPHVBs),
                      }),
                  })
                : null,
            (0, n.jsx)("audio", {
                ref: r,
                autoPlay: !0,
                loop: !0,
                muted: t,
                children: (0, n.jsx)("source", {
                    src: "https://cdn.discordapp.com/assets/content/d271231f4934992caed169c11586a1da060d37b5fd8804b56666b547f03836bd.mp3",
                }),
            }),
        ],
    });
}
let aY =
        "https://cdn.discordapp.com/assets/content/914f6f5e36c680d00944ba2e6278b45f8b1da722692e101b5986cf7be56c4979.mp3",
    aZ =
        "https://cdn.discordapp.com/assets/content/d1dfc8280cfbd578f18728598db893d807d9ece6b511389848b7308c399f07a0.mp3";
var aX = a(477155),
    aQ = a(866665),
    aJ = a(417270),
    a$ = a(935286),
    a0 = a(405433),
    a1 = a(289873),
    a2 = a(621466);
function a3(e, t) {
    let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    p.useEffect(() => {
        if (!a) return (window.addEventListener("keydown", r), () => window.removeEventListener("keydown", r));
        function r(a) {
            (0, a2.vq)(a.target, HTMLTextAreaElement) ||
                (0, a2.vq)(a.target, HTMLInputElement) ||
                (a.key === e && t(a));
        }
    }, [e, t, a]);
}
var a8 = a(652215),
    a7 = a(650583);
function a5(e) {
    let { source: t, onClick: a, disabled: r = !1 } = e,
        i = ty(t),
        n = p.useRef(!1);
    function s() {
        r || i();
    }
    return {
        playSound: s,
        onPointerDown: function (e) {
            e.button === a8.hE4.PRIMARY && ((n.current = !0), s());
        },
        onKeyDown: function (e) {
            (e.key === a7.dh.ENTER || e.key === a7.dh.SPACE) && ((n.current = !0), e.repeat || s());
        },
        onClickWithSound: function () {
            (n.current || s(), (n.current = !1), a());
        },
    };
}
var a6 = a(753875);
function a9(e) {
    let { "aria-label": t, "aria-describedby": a, icon: r, onClick: i, disabled: s = !1 } = e,
        {
            playSound: c,
            onPointerDown: d,
            onKeyDown: l,
            onClickWithSound: o,
        } = a5({ source: aY, onClick: i, disabled: s });
    return (
        a3(
            "ArrowLeft",
            function (e) {
                (e.repeat || c(), i());
            },
            s,
        ),
        (0, n.jsx)(ep, {
            onPointerDown: d,
            onKeyDown: l,
            onClick: o,
            size: "md",
            className: m()(a6.A4, a6.aX),
            "aria-disabled": s,
            "aria-describedby": a,
            "aria-label": t,
            children: (0, n.jsx)(r, { color: "currentColor" }),
        })
    );
}
function a4(e) {
    let {
            "aria-label": t,
            "aria-describedby": a,
            children: r,
            onClick: i,
            size: s,
            className: c,
            disabled: d = !1,
        } = e,
        {
            playSound: l,
            onPointerDown: o,
            onKeyDown: u,
            onClickWithSound: h,
        } = a5({ source: aZ, onClick: i, disabled: d });
    return (
        a3(
            "ArrowRight",
            function (e) {
                (e.repeat || l(), i());
            },
            d,
        ),
        (0, n.jsx)(e_, {
            onPointerDown: o,
            onKeyDown: u,
            onClick: h,
            size: s,
            className: m()(a6.A4, a6.K2, c),
            "aria-disabled": d,
            "aria-describedby": a,
            "aria-label": t,
            children: r,
        })
    );
}
function re(e) {
    let { "aria-describedby": t, onClick: a, disabled: r } = e;
    return (0, n.jsx)(a9, {
        "aria-label": tI.intl.string(tI.t["13/7kX"]),
        "aria-describedby": t,
        icon: aX.ArrowSmallLeftIcon,
        onClick: a,
        disabled: r,
    });
}
function rt(e) {
    let { onClick: t } = e,
        { onPointerDown: a, onKeyDown: r, onClickWithSound: i } = a5({ source: aZ, onClick: t });
    return (0, n.jsx)(aQ.m, {
        text: tI.intl.string(tw.default.cWdGf9),
        ariaHidden: !0,
        children: (0, n.jsx)(ep, {
            onPointerDown: a,
            onKeyDown: r,
            onClick: i,
            size: "md",
            className: m()(a6.A4, a6.eZ),
            "aria-label": tI.intl.string(tw.default.cWdGf9),
            children: (0, n.jsx)(aJ.RetryIcon, { color: "currentColor" }),
        }),
    });
}
function ra(e) {
    let { "aria-describedby": t, onClick: a, disabled: r } = e;
    return (0, n.jsx)(a4, {
        size: "md",
        "aria-label": tI.intl.string(tI.t.PDTjLN),
        "aria-describedby": t,
        onClick: a,
        disabled: r,
        children: (0, n.jsx)(a$.ArrowSmallRightIcon, { color: "currentColor" }),
    });
}
function rr(e) {
    let { onClick: t, disabled: a } = e;
    return (0, n.jsxs)(a4, {
        size: "custom",
        className: a6.GA,
        "aria-label": tI.intl.string(tI.t.i4jeWR),
        onClick: t,
        disabled: a,
        children: [
            (0, n.jsx)(tx, { variant: "mono-md/normal", className: a6.Pf, children: tI.intl.string(tI.t.i4jeWR) }),
            (0, n.jsx)(a$.ArrowSmallRightIcon, { size: "refresh_sm", color: "currentColor" }),
        ],
    });
}
function ri(e) {
    let { onClick: t, disabled: a } = e;
    return (0, n.jsxs)(a4, {
        size: "custom",
        className: m()(a6.GA, a6.Bq),
        "aria-label": tI.intl.string(tI.t.RDE0Sc),
        onClick: t,
        disabled: a,
        children: [
            (0, n.jsx)(tp.E, {
                variant: "mono-md/bold",
                color: "none",
                className: a6.Pf,
                children: tI.intl.string(tI.t.RDE0Sc),
            }),
            (0, n.jsx)(a0.ShareIcon, { size: "refresh_sm", color: "currentColor" }),
        ],
    });
}
function rn(e) {
    let { onBack: t, isRouteBlocked: a, blockedTraitDescriptionId: r } = e,
        i = (0, g.bG)([h.A], () => h.A.isSaving);
    return (0, n.jsx)(re, {
        "aria-describedby": r,
        onClick: function () {
            i || t();
        },
        disabled: i || a,
    });
}
function rs(e) {
    let { onNext: t, navigate: a, isRouteBlocked: r, blockedTraitDescriptionId: i } = e,
        c = (0, g.bG)([h.A], () => h.A.isSaving),
        d = c || r;
    async function l() {
        if (c) return;
        let e = (0, G.XI)(h.A.selectedCharacterTraits);
        (await (0, u.yE)(e)) ? t() : (0, s.P0)({ text: tI.intl.string(tI.t.fEptJP), variant: "critical" });
    }
    function o() {
        a(l);
    }
    let {
        playSound: f,
        onPointerDown: b,
        onKeyDown: p,
        onClickWithSound: _,
    } = a5({
        source: "https://cdn.discordapp.com/assets/content/1514d999969512ff06ade75018213676ebaf3698af26c0b1b7d3243ec480f920.mp3",
        onClick: o,
        disabled: d,
    });
    return (
        a3(
            "ArrowRight",
            function (e) {
                (e.repeat || f(), o());
            },
            d,
        ),
        (0, n.jsxs)(e_, {
            onPointerDown: b,
            onKeyDown: p,
            onClick: _,
            size: "custom",
            className: m()(a6.A4, a6.K2, a6.GA),
            "aria-disabled": d,
            "aria-describedby": i,
            "aria-label": tI.intl.string(tI.t["R3BPH+"]),
            children: [
                (0, n.jsx)(tp.E, {
                    variant: "mono-md/normal",
                    color: "none",
                    className: a6.Pf,
                    children: tI.intl.string(tI.t["R3BPH+"]),
                }),
                c
                    ? (0, n.jsx)(a1.y, { type: a1.t.SPINNING_CIRCLE_SIMPLE, className: a6.u1, itemClassName: a6.$N })
                    : (0, n.jsx)(a$.ArrowSmallRightIcon, { size: "refresh_sm", color: "currentColor" }),
            ],
        })
    );
}
function rc(e) {
    let { activeRoute: t, blockedTrait: a, blockedTraitDescriptionId: r, onBack: i, onNext: s, onReplay: c } = e,
        d = null != a,
        l = p.useMemo(() => (0, e6.throttle)((e) => e(), 500, { trailing: !1 }), []);
    function o(e) {
        null != a ? el(a) : l(e);
    }
    switch (t) {
        case C.gr.HOME:
            return null;
        case C.gr.FINALIZE_CHARACTER:
            return (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(rn, { onBack: () => o(i), isRouteBlocked: d, blockedTraitDescriptionId: r }),
                    (0, n.jsx)(rs, { onNext: s, navigate: o, isRouteBlocked: d, blockedTraitDescriptionId: r }),
                ],
            });
        case C.gr.SUMMARY:
            return (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(re, { onClick: () => l(i) }),
                    (0, n.jsx)(rt, { onClick: () => l(c) }),
                    (0, n.jsx)(ri, { onClick: () => l(s) }),
                ],
            });
        case C.gr.SHARE:
            return (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(re, { onClick: () => l(i) }), (0, n.jsx)(rr, { onClick: () => l(s) })],
            });
        default:
            return (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(re, { "aria-describedby": r, onClick: () => o(i), disabled: d }),
                    (0, n.jsx)(ra, { "aria-describedby": r, onClick: () => o(s), disabled: d }),
                ],
            });
    }
}
function rd(e) {
    let { className: t } = e;
    return (0, n.jsx)(tc, {
        animatedSrc:
            "https://cdn.discordapp.com/assets/content/02e9ae4cdbec0b2adef22c9a5659f5c7340e399cc8932e8af6d41e62a37644ae.png",
        staticSrc:
            "https://cdn.discordapp.com/assets/content/f08be0abd0d224b5f7e1e5d6c1ef8e4d24cddcb712e2c624dcc6ea3d136818d5.png",
        className: t,
    });
}
var rl = a(771639);
let ro = { "--custom-checkpoint-screen-vertical-inset": "88px" };
function ru(e) {
    let { children: t } = e;
    return (0, n.jsx)("div", { className: rl.n, style: ro, children: t });
}
var rh = a(639331);
let rf = {
    "--custom-checkpoint-intro-fade-in-delay": "1800ms",
    "--custom-checkpoint-intro-fade-in-duration": "1000ms",
};
function rb() {
    let e = (0, g.bG)([h.A], () => h.A.fetchState !== h.T.SUCCESS || null != h.A.stats),
        t = tb();
    return (0, n.jsx)(ru, {
        children: (0, n.jsxs)("div", {
            className: rh.Qs,
            style: rf,
            children: [
                (0, n.jsxs)("div", {
                    ref: t,
                    className: rh.Ok,
                    role: "heading",
                    "aria-level": 2,
                    children: ["2026", !e && (0, n.jsx)(rd, { className: rh.gi })],
                }),
                (0, n.jsxs)("div", {
                    className: rh.eH,
                    children: [
                        (0, n.jsx)(tx, {
                            tag: "p",
                            variant: "heading-xl/medium",
                            children: tI.intl.string(e ? tw.default["7YmUVu"] : tw.default["Fyr+NW"]),
                        }),
                        !e &&
                            (0, n.jsx)(tx, {
                                tag: "p",
                                variant: "heading-xl/medium",
                                children: tI.intl.string(tw.default["2GRr6H"]),
                            }),
                    ],
                }),
            ],
        }),
    });
}
(a(134528), a(947204));
var rp = a(675970),
    r_ = a(559106),
    rm = a(366056),
    rx = a(292801),
    rg = a(155718),
    rA = a(294454),
    rv = a(489414),
    rw = a(878358),
    rI = a(383233),
    rE = a(819648),
    rj = a(677059);
function rS(e) {
    let { children: t } = e;
    return (0, n.jsx)(tx, { variant: "heading-xxl/medium", className: rj.h, children: t });
}
function rC(e) {
    let { accessibilityLabel: t, className: a, children: r, ref: i } = e;
    return (0, n.jsxs)("div", {
        ref: i,
        role: "heading",
        "aria-level": 2,
        children: [
            (0, n.jsx)("div", { className: a, "aria-hidden": !0, children: r }),
            (0, n.jsx)(v.A, { children: t }),
        ],
    });
}
var rN = a(100391);
function rT(e) {
    let { icon: t, children: a } = e;
    return (0, n.jsxs)("div", {
        className: rN.D,
        children: [
            (0, n.jsx)(t, { size: "md", color: "currentColor" }),
            (0, n.jsx)(tx, { variant: "heading-lg/semibold", className: rN.Q, children: a }),
        ],
    });
}
function rR(e) {
    let { icon: t, children: a } = e;
    return (0, n.jsxs)("div", {
        className: rN.D,
        children: [
            (0, n.jsx)(t, { size: "md", color: "currentColor" }),
            (0, n.jsx)(tg, { variant: "heading-lg/semibold", className: rN.Q, children: a }),
        ],
    });
}
var rO = a(456410);
function rM(e) {
    let { name: t, label: a, checked: r, onSelect: i, children: s } = e;
    return (0, n.jsx)(r_.vN, {
        within: !0,
        children: (0, n.jsxs)("label", {
            className: m()(rO.uK, { [rO.KD]: r }),
            children: [
                (0, n.jsx)(v.A, {
                    children: (0, n.jsx)("input", { type: "radio", name: t, checked: r, onChange: i, "aria-label": a }),
                }),
                r ? (0, n.jsx)("div", { className: rO.Gt, "aria-hidden": !0 }) : null,
                (0, n.jsx)("div", { className: rO.Nr, "aria-hidden": !0, children: s }),
            ],
        }),
    });
}
function ry() {
    let e = (0, g.bG)([h.A], () => h.A.character),
        t = (0, g.bG)([h.A], () => h.A.stats),
        a = p.useId(),
        r = tb(),
        i = p.useMemo(() => {
            var a, r;
            return ((a = e),
            (r = t),
            null != a && null != r
                ? [rp.Q.CHARACTER_ONLY, rp.Q.DEFAULT, rp.Q.STATS_ONLY]
                : null != a
                  ? [rp.Q.CHARACTER_ONLY]
                  : null != r
                    ? [rp.Q.STATS_ONLY]
                    : []).map((a) => ({ cardType: a, checkpointData: (0, rE.Go)(a, e, t) }));
        }, [e, t]),
        [c, d] = p.useState(
            () =>
                (
                    i.find((e) => {
                        let { cardType: t } = e;
                        return t === rp.Q.DEFAULT;
                    }) ?? i.at(0)
                )?.cardType,
        ),
        l = i.find((e) => {
            let { cardType: t } = e;
            return t === c;
        }),
        o = ty(tO),
        {
            onPointerDown: f,
            onKeyDown: _,
            onClickWithSound: m,
        } = a5({
            source: aZ,
            onClick: function () {
                if (null == l) return;
                let { cardType: e, checkpointData: t } = l;
                (0, rA.fO)({
                    message: new rI.Ay({
                        content: "",
                        components: [{ type: rg.I5.CHECKPOINT_CARD, id: (0, rv.X1)("0"), checkpointData: t }],
                    }),
                    source: "checkpoint",
                    customSendHandler: async (t, a, r) => {
                        let { withMessage: i } = a;
                        r(!0);
                        try {
                            (await (0, u.jA)(t, i ?? "", e),
                                (0, b.Pe)(e),
                                (0, rA.Be)(),
                                (0, s.P0)({ text: tI.intl.string(tI.t.kwmYkt), variant: "success" }));
                        } catch {
                            (0, s.P0)({ text: tI.intl.string(tI.t.iufib1), variant: "critical" });
                        } finally {
                            r(!1);
                        }
                    },
                });
            },
        });
    return null == l
        ? null
        : (0, n.jsx)(ru, {
              children: (0, n.jsxs)("div", {
                  className: rO.uM,
                  children: [
                      (0, n.jsxs)("div", {
                          className: rO.wx,
                          children: [
                              (0, n.jsxs)(rC, {
                                  ref: r,
                                  className: rO.R_,
                                  accessibilityLabel: tI.intl.string(tw.default.P5zyko),
                                  children: [
                                      (0, n.jsx)(rT, {
                                          icon: rm.ExperimentalCheckpointIcon,
                                          children: tI.intl.string(aL.default.ir6nEQ),
                                      }),
                                      (0, n.jsx)(tx, {
                                          variant: "display-lg",
                                          className: rO.Vy,
                                          children: tI.intl.string(tI.t.RDE0Sc),
                                      }),
                                  ],
                              }),
                              (0, n.jsx)("div", {
                                  className: rO.h_,
                                  children: (0, n.jsx)(rS, { children: tI.intl.string(tw.default.KXDPot) }),
                              }),
                          ],
                      }),
                      (0, n.jsx)("div", {
                          role: "radiogroup",
                          "aria-label": tI.intl.string(tw.default.KXDPot),
                          className: rO.kR,
                          children: i.map((e) => {
                              let { cardType: t, checkpointData: r } = e;
                              return (0, n.jsx)(
                                  rM,
                                  {
                                      name: a,
                                      label: (function (e) {
                                          switch (e) {
                                              case rp.Q.CHARACTER_ONLY:
                                                  return tI.intl.string(tw.default.tUU3fe);
                                              case rp.Q.DEFAULT:
                                                  return tI.intl.string(tw.default.DZQzJn);
                                              case rp.Q.STATS_ONLY:
                                                  return tI.intl.string(tw.default.e2UHGT);
                                          }
                                      })(t),
                                      checked: t === l.cardType,
                                      onSelect: () => {
                                          (o(), d(t));
                                      },
                                      children: (0, n.jsx)(rw.A, { checkpointData: r }),
                                  },
                                  t,
                              );
                          }),
                      }),
                      (0, n.jsxs)(e_, {
                          onPointerDown: f,
                          onKeyDown: _,
                          onClick: m,
                          size: "custom",
                          className: rO.sY,
                          "aria-label": tI.intl.string(tI.t.I3ltXO),
                          children: [
                              (0, n.jsx)(tp.E, {
                                  variant: "mono-md/bold",
                                  color: "none",
                                  className: rO.RC,
                                  children: tI.intl.string(tI.t.I3ltXO),
                              }),
                              (0, n.jsx)(rx.ArrowAngleRightUpIcon, { size: "refresh_sm", color: "currentColor" }),
                          ],
                      }),
                  ],
              }),
          });
}
var rL = a(206701),
    rk = a(782134),
    rD = a(998304),
    rP = a(975571),
    rU = a(427262),
    rG = a(438389);
let rH = (0, rD.j5)(ec.Kr);
function rF(e) {
    let { onStart: t } = e,
        a = (0, g.bG)([P.default], () => P.default.getCurrentUser()),
        r = (0, rU.tx)(a),
        i = (0, g.bG)([V.Ay], () => V.Ay.useReducedMotion),
        { playSound: s, onPointerDown: c, onKeyDown: d, onClickWithSound: l } = a5({ source: aZ, onClick: t });
    return (
        a3("ArrowRight", function (e) {
            (e.repeat || s(), t());
        }),
        (0, n.jsxs)(ru, {
            children: [
                (0, n.jsxs)("div", {
                    className: rG.Qs,
                    children: [
                        (0, n.jsxs)("div", {
                            className: rG.wx,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: rG.Qq,
                                    children: [
                                        (0, n.jsx)(tg, {
                                            variant: "display-lg",
                                            className: rG.DD,
                                            children: tI.intl.string(aL.default["CdU/PF"]),
                                        }),
                                        (0, n.jsx)(tx, {
                                            variant: "heading-xxl/medium",
                                            children: tI.intl.formatToPlainString(tw.default.xhZ23b, { username: r }),
                                        }),
                                    ],
                                }),
                                (0, n.jsx)("div", {
                                    className: rG.CB,
                                    children: (0, n.jsx)(rL.U, {
                                        artboard: "Entry",
                                        className: rG.lW,
                                        fit: "contain",
                                        withReducedMotion: "short-loop",
                                        dataBinding: { iconColor: rH, reducedMotion: i },
                                    }),
                                }),
                            ],
                        }),
                        (0, n.jsxs)(e_, {
                            onPointerDown: c,
                            onKeyDown: d,
                            onClick: l,
                            size: "custom",
                            className: rG.ni,
                            "aria-label": tI.intl.string(tI.t.I0v0Qv),
                            children: [
                                (0, n.jsx)(rk.PlayIcon, { size: "refresh_sm", color: "currentColor" }),
                                (0, n.jsx)(tx, {
                                    variant: "mono-md/normal",
                                    className: rG.qK,
                                    children: tI.intl.string(tI.t.I0v0Qv),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: rG.qr,
                    children: [
                        (0, n.jsx)(tx, {
                            variant: "body-sm/medium",
                            className: rG.ed,
                            children: tI.intl.format(tw.default.hcNhyq, {
                                learnMoreHook: (e, t) =>
                                    (0, n.jsx)(
                                        tZ.Anchor,
                                        {
                                            className: rG.nf,
                                            href: rP.A.getArticleURL(a8.MVz.CHECKPOINT),
                                            useDefaultUnderlineStyles: !1,
                                            children: e,
                                        },
                                        t,
                                    ),
                            }),
                        }),
                        (0, n.jsx)(tx, {
                            variant: "body-md/medium",
                            className: rG.al,
                            children: tI.intl.format(aL.default.g476ZL, { name: "Exyl" }),
                        }),
                    ],
                }),
            ],
        })
    );
}
var rK = a(565645),
    rB = a(141881);
function rz(e) {
    let { children: t } = e;
    return (0, n.jsx)(tv, { className: rB.l, children: t });
}
var rV = a(765671),
    rW = a(663385),
    rq = a(469228),
    rY = a(406956);
let rZ = (0, rD.j5)(ec.Kr);
function rX(e) {
    let { value: t, alignment: a = "left", className: r } = e,
        i = (0, g.bG)([V.Ay], () => V.Ay.useReducedMotion),
        [s, c] = p.useState(0),
        { isLoaded: d, onLoad: l } = (function () {
            let [e, t] = p.useState(!1);
            return { isLoaded: e, onLoad: p.useCallback(() => t(!0), []) };
        })(),
        o = i ? t : s;
    p.useEffect(() => {
        if (i || !d) return;
        let e = performance.now(),
            a = requestAnimationFrame(function r(i) {
                let n = Math.min((i - e) / 500, 1);
                (c(Math.round(t * n)), n < 1 && (a = requestAnimationFrame(r)));
            });
        return () => cancelAnimationFrame(a);
    }, [t, i, d]);
    let u = "center" === a ? rW.m : rq.w;
    return (0, n.jsxs)("div", {
        className: m()(rY.lY, r),
        children: [
            (0, n.jsx)("div", { className: rY.VL, children: t }),
            (0, n.jsx)(u, {
                className: rY.lW,
                fit: "layout",
                withReducedMotion: "short-loop",
                dataBinding: { DisplayValue: o, TextColor: rZ },
                onLoad: l,
            }),
            (0, n.jsx)(v.A, { children: t.toLocaleString(tI.intl.currentLocale) }),
        ],
    });
}
var rQ = a(434911);
function rJ(e) {
    let { value: t } = e,
        { ref: a, width: r } = (0, rV.Ay)(),
        { ref: i, width: s } = (0, rV.Ay)(),
        c = null != r && null != s ? Math.min(1, r / s) : 1;
    return (0, n.jsxs)("div", {
        ref: a,
        className: rQ.ai,
        style: { height: 200 * c },
        children: [
            (0, n.jsx)("span", { ref: i, className: m()(rQ.Qq, rQ.xP), children: t }),
            (0, n.jsx)(rX, { value: t }),
        ],
    });
}
function r$(e) {
    let { value: t } = e;
    return (0, n.jsxs)("div", {
        className: rQ.dJ,
        children: [
            "number" == typeof t
                ? (0, n.jsx)(rJ, { value: t })
                : (0, n.jsx)(tx, { variant: "heading-xxl/medium", className: rQ.Qq, children: t }),
            (0, n.jsx)(rd, { className: rQ.gi }),
        ],
    });
}
var r0 = a(445199),
    r1 = a(205524),
    r2 = a(690521),
    r3 = a(152321);
let r8 = [0, 0, 2],
    r7 = [0, 1, 0],
    r5 = [0, 0, 0],
    r6 = `
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
    r9 = `
precision mediump float;

varying vec2 v_texcoord;
varying highp vec3 v_lighting;

uniform sampler2D u_texture;

void main() {
  highp vec4 texelColor = texture2D(u_texture, v_texcoord);
  gl_FragColor = vec4(texelColor.rgb * v_lighting, texelColor.a);
}
`,
    r4 = [
        -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5,
        -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5,
        0.5, 0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, -0.5,
        -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5,
        -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5,
        -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5,
    ],
    ie = [
        0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0,
        1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0,
    ],
    it = [
        0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
        1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
        -1, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
        1, 0, 0,
    ];
function ia(e) {
    let t,
        { emoji: a } = e,
        [r, i] = p.useState(null),
        [s, c] = p.useState(null),
        d = p.useRef(new Image()),
        [l, o] = p.useState(null),
        [u, h] = p.useState(!1),
        f = p.useRef(0),
        b = p.useRef(0),
        _ = p.useRef(45),
        x = p.useRef(45),
        A = (0, g.bG)([V.Ay], () => V.Ay.useReducedMotion),
        v = 70 * !A,
        w = 40 * !A,
        I = p.useRef(v),
        E = p.useRef(w),
        j = p.useRef(!1),
        S = p.useRef(0),
        C = p.useRef(0);
    ((t = p.useRef(null)),
        p.useEffect(() => {
            if (null == t.current || null == s) return;
            let e = t.current,
                a = e.createTexture();
            return (
                e.bindTexture(e.TEXTURE_2D, a),
                e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, s),
                e.generateMipmap(e.TEXTURE_2D),
                () => e.deleteTexture(a)
            );
        }, [s, l]),
        p.useEffect(() => {
            let e,
                a = 0,
                i = r?.getContext("webgl");
            if (null == i || null == r || null == s) return;
            t.current = i;
            let n = i.createShader(i.VERTEX_SHADER),
                c = i.createShader(i.FRAGMENT_SHADER);
            if (null == n || null == c) return;
            if (
                (i.shaderSource(n, r6),
                i.shaderSource(c, r9),
                i.compileShader(n),
                !i.getShaderParameter(n, i.COMPILE_STATUS))
            )
                return void console.error("ERROR compiling vertex shader!", i.getShaderInfoLog(n));
            if ((i.compileShader(c), !i.getShaderParameter(c, i.COMPILE_STATUS)))
                return void console.error("ERROR compiling fragment shader!", i.getShaderInfoLog(c));
            let d = i.createProgram();
            if (
                (i.attachShader(d, n), i.attachShader(d, c), i.linkProgram(d), !i.getProgramParameter(d, i.LINK_STATUS))
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
                i.bufferData(i.ARRAY_BUFFER, new Float32Array(it), i.STATIC_DRAW),
                i.vertexAttribPointer(f, 3, i.FLOAT, !1, 0, 0),
                i.enableVertexAttribArray(f));
            let m = i.createBuffer();
            (i.bindBuffer(i.ARRAY_BUFFER, m),
                (e = new Float32Array(r4)),
                i.bufferData(i.ARRAY_BUFFER, e, i.STATIC_DRAW));
            let g = i.createBuffer();
            (i.bindBuffer(i.ARRAY_BUFFER, g), i.bufferData(i.ARRAY_BUFFER, new Float32Array(ie), i.STATIC_DRAW));
            let A = r0.DF(60);
            return (
                (a = requestAnimationFrame(function e() {
                    let t, n;
                    if (null == i || null == r) return;
                    ((t = Math.round(r.clientWidth * window.devicePixelRatio)),
                        (n = Math.round(r.clientHeight * window.devicePixelRatio)),
                        t > 0 && n > 0 && (r.width !== t || r.height !== n) && ((r.width = t), (r.height = n)),
                        i.viewport(0, 0, i.canvas.width, i.canvas.height),
                        i.enable(i.CULL_FACE),
                        i.enable(i.DEPTH_TEST));
                    let s = r0.DF(_.current),
                        c = r0.DF(x.current);
                    (i.clear(i.COLOR_BUFFER_BIT | i.DEPTH_BUFFER_BIT),
                        i.useProgram(d),
                        i.enableVertexAttribArray(l),
                        i.bindBuffer(i.ARRAY_BUFFER, m),
                        i.vertexAttribPointer(l, 3, i.FLOAT, !1, 0, 0),
                        i.enableVertexAttribArray(o),
                        i.bindBuffer(i.ARRAY_BUFFER, g),
                        i.vertexAttribPointer(o, 2, i.FLOAT, !1, 0, 0));
                    let f = r.clientWidth / r.clientHeight,
                        p = r1.fN(r1.vt(), A, f, 1, 2e3),
                        v = r1.t5(r1.vt(), r8, r5, r7),
                        w = r1.lw(r1.vt(), p, v),
                        I = r1.vt();
                    (r1.eL(I, I, s), r1.Z8(I, I, c));
                    let E = r1.lw(r1.vt(), w, I),
                        j = r1.vt();
                    (r1.B8(j, I),
                        r1.mg(j, j),
                        i.uniformMatrix4fv(b, !1, j),
                        i.uniformMatrix4fv(u, !1, E),
                        i.uniform1i(h, 0),
                        i.drawArrays(i.TRIANGLES, 0, 36),
                        (a = requestAnimationFrame(e)));
                })),
                () => cancelAnimationFrame(a)
            );
        }, [_, x, r, s]));
    let N = p.useCallback(() => {
        let e = s?.getContext("2d");
        null != s &&
            null != e &&
            ((e.fillStyle = "black"),
            e.fillRect(0, 0, s.width, s.height),
            e.drawImage(d.current, 0, 0, s.width, s.height),
            (e.fillStyle = ec.Kr),
            e.fillRect(0, 0, s.width, 2),
            e.fillRect(0, 0, 2, s.height),
            e.fillRect(0, s.height - 2, s.width, 2),
            e.fillRect(s.width - 2, 0, 2, s.height),
            o(a),
            h(!0));
    }, [a, d, s]);
    (p.useEffect(() => {
        null != s &&
            ((d.current.crossOrigin = "anonymous"), (d.current.src = (0, r2.Ez)(a, 512)), (d.current.onload = N));
    }, [a, N, d, s]),
        p.useEffect(
            () => (
                !(function e(t) {
                    let a = 0.001 * t,
                        r = Math.min(a - b.current, 0.1);
                    if (((x.current += -E.current * r), (_.current += -I.current * r), !j.current)) {
                        if (Math.abs(I.current) > v) {
                            let e = I.current > 0 ? 1 : -1;
                            I.current -= 2 * e * window.devicePixelRatio;
                        }
                        if (Math.abs(E.current) > w) {
                            let e = E.current > 0 ? 1 : -1;
                            E.current -= 2 * e * window.devicePixelRatio;
                        }
                    }
                    ((b.current = a), (f.current = requestAnimationFrame(e)));
                })(0),
                () => cancelAnimationFrame(f.current)
            ),
            [v, w],
        ));
    let T = p.useCallback((e) => {
            ((j.current = !0), (I.current = 0), (E.current = 0), (S.current = e.clientX), (C.current = e.clientY));
        }, []),
        R = p.useCallback((e) => {
            if (j.current) {
                let t = (e.clientX - S.current) / window.devicePixelRatio;
                ((I.current = -((e.clientY - C.current) / window.devicePixelRatio) * (100 / window.devicePixelRatio)),
                    (E.current = -t * (100 / window.devicePixelRatio)),
                    (S.current = e.clientX),
                    (C.current = e.clientY));
            }
        }, []),
        O = p.useCallback(() => {
            j.current = !1;
        }, []);
    return (
        p.useEffect(
            () => (
                window.addEventListener("mouseup", O),
                window.addEventListener("mousemove", R),
                () => {
                    (window.removeEventListener("mouseup", O), window.removeEventListener("mousemove", R));
                }
            ),
            [R, O],
        ),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("canvas", {
                    className: m()(r3.Ji, { [r3.q4]: !u }),
                    ref: i,
                    height: 512,
                    width: 512,
                    onMouseDown: T,
                }),
                (0, n.jsx)("canvas", { className: r3.R, ref: c, height: 512, width: 512 }),
            ],
        })
    );
}
var ir = a(826820);
let ii = [];
function is(e) {
    let { emojiStats: t } = e,
        a = Math.round(t?.numEmojisSent ?? 0),
        r = (0, es.bD)(t?.numEmojisSentPercentile);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: ir.dJ,
                children: [
                    (0, n.jsx)(rR, {
                        icon: tf.EmojiSlightlySmilingFaceIcon,
                        children: tI.intl.string(tw.default.ZTDCIv),
                    }),
                    (0, n.jsx)(rX, { value: a }),
                ],
            }),
            (0, n.jsx)(rS, {
                children:
                    null != r
                        ? tI.intl.format(tw.default.o7vDrk, {
                              percent: r,
                              percentHook: (e, t) => (0, n.jsx)(rz, { children: e }, t),
                          })
                        : tI.intl.format(tw.default.NFptic, { numEmojis: a }),
            }),
        ],
    });
}
function ic(e) {
    let { numEmojisSent: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: ir.dJ,
                children: [
                    (0, n.jsx)(rR, {
                        icon: tf.EmojiSlightlySmilingFaceIcon,
                        children: tI.intl.string(tw.default.ZTDCIv),
                    }),
                    (0, n.jsx)(r$, { value: t }),
                ],
            }),
            (0, n.jsx)(rS, { children: tI.intl.format(tw.default["660/Rr"], { numEmojis: (0, es.wj)(t) }) }),
        ],
    });
}
function id() {
    let e = (0, g.bG)([h.A], () => h.A.stats?.emojis),
        t = (0, g.bG)([h.A], () => (0, es.y7)(h.A.stats)),
        a = (0, g.bG)([h.A], () => h.A.globalStats?.emojis),
        r = !t && null != a,
        i = (r ? a.emojis : e?.emojis) ?? ii,
        [s, c] = p.useState(0),
        d = i[s],
        l = ty(tO);
    return (0, n.jsx)(ru, {
        children: (0, n.jsxs)("div", {
            className: ir.kL,
            children: [
                (0, n.jsx)("div", { className: ir.KY, children: null != d && (0, n.jsx)(ia, { emoji: d }) }),
                (0, n.jsxs)("div", {
                    className: ir.C,
                    children: [
                        r ? (0, n.jsx)(ic, { numEmojisSent: a.numEmojisSent }) : (0, n.jsx)(is, { emojiStats: e }),
                        (0, n.jsx)("div", {
                            className: ir.gm,
                            children: i.map((e, t) =>
                                (0, n.jsx)(
                                    il,
                                    {
                                        emoji: e,
                                        rank: t + 1,
                                        isActive: t === s,
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
function il(e) {
    let { emoji: t, rank: a, isActive: r, onClick: i } = e,
        s = !(0, g.bG)([V.Ay], () => V.Ay.useReducedMotion) && !0 === t.animated;
    return (0, n.jsxs)(ep, {
        size: "custom",
        className: ir._X,
        onClick: i,
        "aria-label": tI.intl.formatToPlainString(tw.default["S5+pRg"], { emojiName: t.name, rank: a }),
        "aria-pressed": r,
        children: [
            (0, n.jsx)(rK.A, { className: ir.Zg, emojiId: t.id, emojiName: t.name, animated: s }),
            (0, n.jsx)(tx, { variant: "mono-md/bold", className: ir.Tm, children: a }),
        ],
    });
}
var io = a(360450),
    iu = a(214947),
    ih = a(939249),
    ib = a(597770),
    ip = a(559647),
    i_ = a(95369),
    im = a(570287),
    ix = a(486020);
let ig = { 0: 1100, 1: 1e3 };
var iA = a(801305);
let iv = [],
    iw = (0, rD.j5)(ec.Kr),
    iI = { r: 0, g: 0, b: 0, a: 1 },
    iE = {
        "Avatar01/Stroke": iI,
        "Avatar01/Fill": iw,
        "Avatar02/Stroke": iI,
        "Avatar02/Fill": iw,
        "Avatar03/Stroke": iI,
        "Avatar03/Fill": iw,
        "Avatar04/Stroke": iI,
        "Avatar04/Fill": iw,
        "Avatar05/Stroke": iI,
        "Avatar05/Fill": iw,
        ConnectorColor: iw,
    };
function ij(e) {
    return null != e ? ix.Ay.getUserAvatarURL(e, !1, 160, "png") : void 0;
}
function iS(e) {
    let t,
        { route: a, onNextStep: r, onPreviousStep: i } = e,
        s = (0, g.bG)([h.A], () => h.A.stats?.users ?? iv),
        c = (0, g.bG)([h.A], () => h.A.stats?.sidekick),
        d = (0, g.bG)([P.default], () => P.default.getCurrentUser()),
        l = (0, g.bG)([V.Ay], () => V.Ay.useReducedMotion),
        o = p.useRef(null),
        u = p.useRef(void 0),
        { animationState: f, isTransitioning: b } = (function (e, t) {
            var a;
            let [r, i] = p.useState({ route: e, hasShownSquad: e === C.gr.SQUAD, transition: null });
            r.route !== e &&
                i({
                    route: e,
                    hasShownSquad: r.hasShownSquad || e === C.gr.SQUAD,
                    transition:
                        ((a = r.route),
                        t
                            ? null
                            : a === C.gr.SQUAD && e === C.gr.SIDEKICK
                              ? 0
                              : a === C.gr.SIDEKICK && e === C.gr.SQUAD
                                ? 1
                                : null),
                });
            let { transition: n } = r;
            p.useEffect(() => {
                if (null == n) return;
                let e = setTimeout(() => i((e) => ({ ...e, transition: null })), ig[n]);
                return () => clearTimeout(e);
            }, [n]);
            let s = e === C.gr.SIDEKICK || e === C.gr.SIDEKICK_LEAVE;
            return {
                animationState: (function (e) {
                    let { route: t, hasShownSquad: a, transition: r, isReducedMotion: i } = e;
                    switch (t) {
                        case C.gr.SQUAD_TRANSITION:
                            return 5 * !!a;
                        case C.gr.SQUAD:
                            return 1;
                        case C.gr.SIDEKICK:
                            return 0 === r ? 2 : 3;
                        case C.gr.SIDEKICK_LEAVE:
                            return i ? 3 : 4;
                        default:
                            return 0;
                    }
                })({ route: e, hasShownSquad: r.hasShownSquad, transition: n, isReducedMotion: t }),
                isTransitioning: null != n,
                showsSidekickPair: s ? 0 !== n : 1 === n,
            };
        })(a, l);
    ((t = p.useRef(!0)),
        p.useEffect(() => {
            if (a !== C.gr.SIDEKICK_LEAVE) {
                t.current = !1;
                return;
            }
            if (t.current) return void i();
            if (l) return void r();
            let e = setTimeout(r, 1e3);
            return () => clearTimeout(e);
        }, [r, i, l, a]));
    let [_, x] = s,
        A = (0, rU.tx)(_) ?? "",
        w = (0, rU.tx)(x) ?? "",
        I = A.toLocaleUpperCase(),
        E = w.toLocaleUpperCase(),
        j = (0, rU.tx)(c?.user) ?? "",
        S = [
            { user: c?.user, name: j },
            { user: _, name: A },
            { user: x, name: w },
        ].filter((e) => null != e.user),
        N = s.length < 2,
        T = a === C.gr.SIDEKICK || a === C.gr.SIDEKICK_LEAVE;
    p.useEffect(() => () => clearInterval(u.current), []);
    let R = p.useCallback(() => {
        (clearInterval(u.current),
            (u.current = setInterval(() => {
                let e = o.current?.getProperties();
                e?.twoFriends?.value === N &&
                    e?.reducedMotion?.value === l &&
                    e?.["Avatar01/Username"]?.value === j.toLocaleUpperCase() &&
                    (o.current?.play(), clearInterval(u.current));
            }, 50)));
    }, [l, j, N]);
    return (0, n.jsxs)(ru, {
        children: [
            (0, n.jsx)(io.m, {
                ref: o,
                className: iA.lW,
                fit: "contain",
                autoplay: !1,
                onLoad: R,
                withReducedMotion: "play",
                dataBinding: {
                    ...iE,
                    AnimationState: f,
                    "Avatar01/img": ij(c?.user),
                    "Avatar02/img": ij(x),
                    "Avatar03/img": ij(_),
                    "Avatar04/img": ij(c?.user),
                    "Avatar05/img": ij(d),
                    "Avatar01/Username": j.toLocaleUpperCase(),
                    "Avatar02/Username": E,
                    "Avatar03/Username": I,
                    "Avatar04/Username": j.toLocaleUpperCase(),
                    twoFriends: N,
                    reducedMotion: l,
                },
            }),
            (0, n.jsx)(eA, {
                visible: a === C.gr.SQUAD_TRANSITION,
                enter: Q,
                exit: J,
                mountAfterDelay: !0,
                className: m()(iA.Qs, iA.kY),
                children: (0, n.jsx)(iC, {}),
            }),
            (0, n.jsxs)(eA, {
                visible: a === C.gr.SQUAD && !b,
                enter: Q,
                exit: J,
                mountAfterDelay: !0,
                className: iA.Qs,
                children: [
                    (0, n.jsx)(iN, {
                        title: tI.intl.string(aL.default.OzY5Ns),
                        accessibilityLabel: tI.intl.string(tw.default.OSo1fB),
                        description: tI.intl.string(tw.default.EqdLDd),
                    }),
                    (0, n.jsx)(v.A, {
                        tag: "ul",
                        children: S.map((e, t) => (0, n.jsx)("li", { children: e.name }, t)),
                    }),
                ],
            }),
            null != c &&
                (0, n.jsxs)(eA, {
                    visible: T && !b,
                    enter: X,
                    exit: J,
                    mountAfterDelay: !0,
                    className: m()(iA.Qs, iA.yG),
                    children: [
                        (0, n.jsxs)("div", {
                            className: iA.Cv,
                            children: [
                                (0, n.jsx)(iN, {
                                    title: tI.intl.string(aL.default["+uwOHt"]),
                                    accessibilityLabel: tI.intl.string(tw.default.X4EiRH),
                                    description: tI.intl.string(tw.default["/ctmGw"]),
                                }),
                                (0, n.jsx)(v.A, { children: j }),
                                (0, n.jsx)(iT, { sidekick: c }),
                            ],
                        }),
                        (0, n.jsx)(iR, { user: c.user, username: j }),
                    ],
                }),
        ],
    });
}
function iC() {
    let e = tb();
    return (0, n.jsx)("div", {
        ref: e,
        className: m()(iA.Qs, iA.kY),
        children: (0, n.jsx)(rS, { children: tI.intl.string(tw.default["6RSp5q"]) }),
    });
}
function iN(e) {
    let { title: t, accessibilityLabel: a, description: r } = e,
        i = tb();
    return (0, n.jsxs)("div", {
        className: iA.wx,
        children: [
            (0, n.jsxs)(rC, {
                ref: i,
                className: iA.R_,
                accessibilityLabel: a,
                children: [
                    (0, n.jsx)(rT, { icon: iu.FriendsIcon, children: tI.intl.string(aL.default.ZQakPR) }),
                    (0, n.jsx)(tx, { variant: "display-lg", className: iA.Vy, children: t }),
                ],
            }),
            (0, n.jsx)(rS, { children: r }),
        ],
    });
}
function iT(e) {
    let { sidekick: t } = e,
        a = Math.round(t.numMessagesSent),
        r = Math.round(t.numVoiceMinutes);
    return (0, n.jsxs)("div", {
        className: iA.M1,
        children: [
            (0, n.jsxs)("div", {
                className: iA.dJ,
                "aria-hidden": !0,
                children: [
                    (0, n.jsx)(ay.ChatIcon, { size: "md", color: "currentColor" }),
                    (0, n.jsx)(tx, { variant: "heading-xxl/medium", className: iA.wk, children: a }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: iA.dJ,
                "aria-hidden": !0,
                children: [
                    (0, n.jsx)(aU.MicrophoneIcon, { size: "md", color: "currentColor" }),
                    (0, n.jsx)(tx, { variant: "heading-xxl/medium", className: iA.wk, children: r }),
                ],
            }),
            (0, n.jsx)(v.A, {
                children: tI.intl.formatToPlainString(tw.default.NafXAs, { numMessages: a, numMinutes: r }),
            }),
        ],
    });
}
function iR(e) {
    let { user: t, username: a } = e,
        [r, i] = p.useState(""),
        [c, d] = p.useState(!1),
        [l, o] = p.useState(!1),
        h = (0, im.A)(t.id),
        f = r.trim(),
        _ = f.length > 0 && f.length <= 250 && !c && !l,
        x = c ? tI.intl.string(tI.t.fjcCk5) : tI.intl.formatToPlainString(tI.t["0ZQw/X"], { name: a });
    return h
        ? (0, n.jsxs)("div", {
              className: iA.OG,
              children: [
                  (0, n.jsx)("textarea", {
                      className: iA.yB,
                      value: r,
                      onChange: (e) => i(e.target.value),
                      maxLength: 250,
                      disabled: c || l,
                      placeholder: x,
                      "aria-label": x,
                  }),
                  (0, n.jsxs)("div", {
                      className: iA.n,
                      children: [
                          (0, n.jsx)(ih.D, {
                              className: iA.KD,
                              onClick: function () {
                                  ((0, b.nr)(t.id),
                                      (0, i_.A)({
                                          giftRecipient: t,
                                          analyticsLocations: [tX.A.CHECKPOINT, tX.A.CHECKPOINT_SIDEKICK],
                                      }));
                              },
                              "aria-label": tI.intl.string(tI.t.Ve9Ge6),
                              children: (0, n.jsx)(ib.GiftIcon, { size: "refresh_sm", color: "currentColor" }),
                          }),
                          (0, n.jsx)(ih.D, {
                              className: m()(iA.KD, { [iA.r9]: !_ }),
                              onClick: async function () {
                                  if (_) {
                                      o(!0);
                                      try {
                                          (await (0, u.fr)(f, t.id),
                                              i(""),
                                              d(!0),
                                              A.O.announce(tI.intl.string(tI.t.fjcCk5), "polite"));
                                      } catch {
                                          (0, s.P0)({ text: tI.intl.string(tI.t.fEptJP), variant: "critical" });
                                      } finally {
                                          o(!1);
                                      }
                                  }
                              },
                              "aria-disabled": !_,
                              "aria-label": tI.intl.string(tI.t.oeb1vg),
                              children: (0, n.jsx)(ip.SendMessageIcon, { size: "refresh_sm", color: "currentColor" }),
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
var iO = a(9767);
function iM(e) {
    let { games: t } = e,
        a = Math.round(t?.totalDaysPlayed ?? 0),
        r = (0, es.bD)(t?.totalDaysPlayedPercentile);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: iO.dJ,
                children: [
                    (0, n.jsx)(rR, { icon: aT.CalendarIcon, children: tI.intl.string(tw.default["4N5p4D"]) }),
                    (0, n.jsx)(rX, { value: a }),
                ],
            }),
            (0, n.jsx)(rS, {
                children:
                    null != r
                        ? tI.intl.format(tw.default["4FXB/m"], {
                              percent: r,
                              percentHook: (e, t) => (0, n.jsx)(rz, { children: e }, t),
                          })
                        : tI.intl.format(tw.default.iCKjh6, { numDays: a }),
            }),
        ],
    });
}
function iy(e) {
    let { numUsersPlayedEveryDay: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: iO.dJ,
                children: [
                    (0, n.jsx)(rR, { icon: aT.CalendarIcon, children: tI.intl.string(tw.default["dx4+NI"]) }),
                    (0, n.jsx)(r$, { value: t }),
                ],
            }),
            (0, n.jsx)(rS, { children: tI.intl.string(tw.default["7nfXWu"]) }),
        ],
    });
}
function iL() {
    let e = (0, g.bG)([h.A], () => h.A.stats?.games),
        t = (0, g.bG)([h.A], () => (0, es.uO)(h.A.stats)),
        a = (0, g.bG)([h.A], () => h.A.globalStats?.games?.numUsersPlayedEveryDay),
        r = !t && null != a;
    return (0, n.jsx)(ru, {
        children: (0, n.jsxs)("div", {
            className: iO.kL,
            children: [
                (0, n.jsx)(tc, {
                    animatedSrc:
                        "https://cdn.discordapp.com/assets/content/e3289e9a0a7faf4db23c3fefa390126fc64a09120fdb701f9dea833dddf671ef.png",
                    staticSrc:
                        "https://cdn.discordapp.com/assets/content/312abde9b19fcf85150d507de3f33096992506459b895ab3ea8d92c8f1e04a28.png",
                    className: iO.HW,
                }),
                (0, n.jsx)("div", {
                    className: iO.C,
                    children: r ? (0, n.jsx)(iy, { numUsersPlayedEveryDay: a }) : (0, n.jsx)(iM, { games: e }),
                }),
            ],
        }),
    });
}
var ik = a(95362),
    iD = a(828062);
function iP(e) {
    let { children: t } = e;
    return (0, n.jsx)(tx, { variant: "display-lg", className: iD.V, children: t });
}
function iU(e) {
    let { children: t } = e;
    return (0, n.jsx)(tg, { variant: "display-lg", className: iD.V, children: t });
}
var iG = a(109112),
    iH = a(311043),
    iF = a(883053);
function iK(e) {
    let { rank: t, className: a } = e;
    return (0, n.jsxs)(tv, { className: m()(iF.T, a), children: ["#", t] });
}
var iB = a(770178),
    iz = a(102189);
let iV = { fireOnMount: !0, fireOnDepsChange: !0 };
function iW(e) {
    let { text: t, textRef: a, children: r } = e,
        i = (function (e, t) {
            let [a, r] = p.useState(!1),
                i = p.useCallback((e) => {
                    let { target: t } = e;
                    r(t.scrollWidth > t.clientWidth);
                }, []);
            return ((0, iB.g)(e, i, [t], iV), a);
        })(a, t);
    return (0, n.jsx)(aQ.m, {
        text: t,
        position: "bottom",
        anchorRef: a,
        shouldShow: i,
        ariaHidden: !0,
        children: r({ tabIndex: i ? 0 : void 0, className: iz.Y }),
    });
}
var iq = a(331144);
let iY = {
        viewBox: `0 0 ${a_.width} ${a_.height}`,
        outline:
            "M-2 -2L183.811 -2L194 9.029L194 253L8.24 253L-2 242.84ZM0 242.007L9.064 251L192 251L192 9.811L182.936 0L0 0ZM-2 -2L182 -2L182 242L-2 242ZM0 240L180 240L180 0L0 0Z",
        corner: "M179.582 239.13L192.002 251.508",
    },
    iZ = {
        viewBox: `0 0 ${am.width} ${am.height}`,
        outline:
            "M-2 -2L221.452 -2L233.503 11.103L233.503 306.01L10.103 306.01L-2 293.947ZM0 293.117L10.929 304.01L231.503 304.01L231.503 11.883L220.574 0L0 0ZM-2 -2L222 -2L222 295L-2 295ZM0 293L220 293L220 0L0 0Z",
        corner: "M219.582 291.133L232.002 303.511",
        stripes:
            "M10.93 291.133l13.91 13.863M20.863 291.133l13.91 13.863M30.801 291.133l13.91 13.863M40.738 291.133l13.91 13.863M50.672 291.133l13.91 13.863M60.609 291.133l13.91 13.863M70.543 291.133l13.91 13.863M80.481 291.133l13.91 13.863M90.414 291.133l13.91 13.863M100.352 291.133l13.91 13.863M110.285 291.133l13.91 13.863M120.223 291.133l13.91 13.863M130.16 291.133l13.91 13.863M140.094 291.133l13.91 13.863M150.031 291.133l13.91 13.863M159.965 291.133l13.91 13.863M169.902 291.133l13.91 13.863M179.836 291.133l13.91 13.863M189.773 291.133l13.91 13.863M199.707 291.133l13.91 13.863M209.645 291.133l13.91 13.863M219.582 13.867l12.42 12.378M219.582 23.766l12.42 12.378M219.582 33.672l12.42 12.378M219.582 43.57l12.42 12.378M219.582 53.477l12.42 12.378M219.582 63.375l12.42 12.378M219.582 73.281l12.42 12.378M219.582 83.18l12.42 12.378M219.582 93.086l12.42 12.378M219.582 102.984l12.42 12.378M219.582 112.891l12.42 12.378M219.582 122.789l12.42 12.378M219.582 132.695l12.42 12.378M219.582 142.594l12.42 12.378M219.582 152.5l12.42 12.378M219.582 162.406l12.42 12.378M219.582 172.305l12.42 12.378M219.582 182.211l12.42 12.378M219.582 192.109l12.42 12.378M219.582 202.016l12.42 12.378M219.582 211.914l12.42 12.378M219.582 221.82l12.42 12.378M219.582 231.719l12.42 12.378M219.582 241.625l12.42 12.378M219.582 251.523l12.42 12.378M219.582 261.43l12.42 12.378M219.582 271.328l12.42 12.378M219.582 281.234l12.42 12.378",
    };
function iX(e) {
    let { paths: t, className: a, children: r } = e;
    return (0, n.jsxs)("div", {
        className: m()(iq.aP, a),
        children: [
            (0, n.jsxs)("svg", {
                className: iq.qd,
                viewBox: t.viewBox,
                preserveAspectRatio: "none",
                "aria-hidden": !0,
                children: [
                    null != t.stripes && (0, n.jsx)("path", { d: t.stripes, className: iq.RY }),
                    (0, n.jsx)("path", { d: t.corner, className: iq.WO }),
                ],
            }),
            r,
            (0, n.jsx)("svg", {
                className: iq.qd,
                viewBox: t.viewBox,
                preserveAspectRatio: "none",
                "aria-hidden": !0,
                children: (0, n.jsx)("path", { d: t.outline, className: iq.rj }),
            }),
        ],
    });
}
function iQ(e) {
    return (0, n.jsx)(iX, { ...e, paths: iY });
}
function iJ(e) {
    return (0, n.jsx)(iX, { ...e, paths: iZ });
}
var i$ = a(497357);
function i0(e) {
    let {
            game: { id: t, name: a, coverImageHash: r },
            rank: i,
            label: s,
            frame: c,
            style: d,
            accessibilityLabel: l,
            className: o,
            textRef: u,
            lineClamp: h,
            ...f
        } = e,
        b = (0, g.bG)(
            [iH.A],
            () =>
                iH.A.getGame(t)?.getCoverURL(300) ??
                ix.Ay.getApplicationIconURL({ id: t, icon: r, size: 300, keepAspectRatio: !0, fallbackAvatar: !1 }),
        );
    return (0, n.jsxs)("div", {
        ...f,
        role: "listitem",
        className: m()(i$.LO, o),
        style: d,
        children: [
            (0, n.jsx)("div", {
                className: i$.Tn,
                "aria-hidden": null != l,
                children: (0, n.jsxs)(c, {
                    className: i$.LG,
                    children: [
                        null != b
                            ? (0, n.jsx)("img", { src: b, alt: "", className: i$.Qw })
                            : (0, n.jsx)("div", {
                                  className: m()(i$.Qw, i$.uj),
                                  children: (0, n.jsx)(iG.UnknownGameIcon, { size: "lg" }),
                              }),
                        null != i && (0, n.jsx)(iK, { rank: i, className: i$.Tm }),
                    ],
                }),
            }),
            (0, n.jsxs)("div", {
                className: i$.zH,
                "aria-hidden": null != l,
                children: [
                    (0, n.jsx)(tx, {
                        ref: u,
                        variant: "heading-xl/medium",
                        className: i$.UU,
                        lineClamp: h,
                        children: a,
                    }),
                    (0, n.jsx)(tx, { variant: "mono-md/bold", className: i$.Pf, children: s }),
                ],
            }),
            null != l && (0, n.jsx)(v.A, { children: l }),
        ],
    });
}
function i1(e) {
    let t = p.useRef(null);
    return (0, n.jsx)(iW, {
        text: e.game.name,
        textRef: t,
        children: (a) => {
            let { tabIndex: r, className: i } = a;
            return (0, n.jsx)(i0, { ...e, className: m()(e.className, i), tabIndex: r, textRef: t, lineClamp: 1 });
        },
    });
}
function i2(e, t, a) {
    return tI.intl.formatToPlainString(tw.default.mqdLhl, { gameName: e.name, rank: t, numSessions: a });
}
function i3(e) {
    let { numSessions: t, ...a } = e,
        r = Math.round(t);
    return (0, n.jsx)(i1, { ...a, label: r, frame: iQ, style: ag, accessibilityLabel: i2(a.game, a.rank, r) });
}
function i8(e) {
    let { numSessions: t, ...a } = e,
        r = Math.round(t);
    return (0, n.jsx)(i1, { ...a, rank: 1, label: r, frame: iJ, style: aA, accessibilityLabel: i2(a.game, 1, r) });
}
function i7(e) {
    return (0, n.jsx)(i0, { ...e, frame: iQ, style: ag, className: i$.Ku });
}
var i5 = a(842807);
let i6 = [];
function i9(e) {
    let { gameStats: t } = e,
        a = Math.round(t?.totalGamesPlayed ?? 0),
        r = (0, es.bD)(t?.totalGamesPlayedPercentile),
        i = t?.games ?? i6;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: i5.wx,
                children: [
                    (0, n.jsxs)("div", {
                        className: i5.dJ,
                        children: [
                            (0, n.jsx)(rR, {
                                icon: aO.GameControllerIcon,
                                children: tI.intl.string(tw.default.HM2fjf),
                            }),
                            (0, n.jsx)(rX, { value: a, className: i5.ai }),
                        ],
                    }),
                    (0, n.jsx)("div", {
                        className: i5.h_,
                        children: (0, n.jsx)(rS, {
                            children:
                                null != r
                                    ? tI.intl.format(tw.default["hc0/yJ"], {
                                          percent: r,
                                          percentHook: (e, t) => (0, n.jsx)(rz, { children: e }, t),
                                      })
                                    : tI.intl.format(tw.default.aJMJ6b, { numGames: a }),
                        }),
                    }),
                ],
            }),
            (0, n.jsx)(ik.Ip, {
                orientation: "horizontal",
                scrollbarGutter: !1,
                fade: !0,
                className: i5.ag,
                role: "list",
                children: i.map((e, t) => {
                    let { game: a, numSessions: r } = e;
                    return 0 === t
                        ? (0, n.jsx)(i8, { game: a, numSessions: r }, a.id)
                        : (0, n.jsx)(i3, { game: a, rank: t + 1, numSessions: r }, a.id);
                }),
            }),
        ],
    });
}
function i4(e) {
    let { gameStats: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: m()(i5.wx, i5.l7),
                children: [
                    (0, n.jsxs)("div", {
                        className: i5.dJ,
                        children: [
                            (0, n.jsx)(rd, { className: i5.gi }),
                            (0, n.jsx)(iU, { children: tI.intl.string(tw.default.qbCgI7) }),
                        ],
                    }),
                    (0, n.jsx)("div", {
                        className: i5.h_,
                        children: (0, n.jsx)(rS, { children: tI.intl.string(tw.default["0oDeiM"]) }),
                    }),
                ],
            }),
            (0, n.jsx)("div", {
                className: m()(i5.ag, i5.Zs),
                role: "list",
                children: ec.Jb.map((e) => {
                    let { list: a, label: r } = e,
                        i = t[a][0];
                    return null != i ? (0, n.jsx)(i7, { game: i, label: tI.intl.string(r) }, a) : null;
                }),
            }),
        ],
    });
}
function ne() {
    let e = (0, g.bG)([h.A], () => h.A.stats?.games),
        t = (0, g.bG)([h.A], () => (0, es.IH)(h.A.stats)),
        a = (0, g.bG)([h.A], () => h.A.globalStats?.games),
        r = !t && null != a;
    return (0, n.jsx)(ru, {
        children: (0, n.jsx)("div", {
            className: m()(i5.kL, { [i5.TF]: r }),
            children: r ? (0, n.jsx)(i4, { gameStats: a }) : (0, n.jsx)(i9, { gameStats: e }),
        }),
    });
}
var nt = a(167662);
function na(e) {
    let { messages: t } = e,
        a = Math.round(t?.numMessagesSent ?? 0),
        r = (0, es.bD)(t?.numMessagesSentPercentile);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: nt.dJ,
                children: [
                    (0, n.jsx)(rR, { icon: ay.ChatIcon, children: tI.intl.string(aL.default.wWKySP) }),
                    (0, n.jsx)(rX, { value: a }),
                ],
            }),
            (0, n.jsx)(rS, {
                children:
                    null != r
                        ? tI.intl.format(tw.default.TOMBAW, {
                              percent: r,
                              percentHook: (e, t) => (0, n.jsx)(rz, { children: e }, t),
                          })
                        : tI.intl.format(tw.default.cYCqz8, { numMessages: a }),
            }),
        ],
    });
}
function nr(e) {
    let { numWordsSent: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: nt.dJ,
                children: [
                    (0, n.jsx)(rR, { icon: ay.ChatIcon, children: tI.intl.string(tw.default["2BuyVC"]) }),
                    (0, n.jsx)(r$, { value: t }),
                ],
            }),
            (0, n.jsx)(rS, {
                children: tI.intl.format(tw.default.bAxEs2, {
                    numWords: (0, es.wj)(t),
                    numCopies: (0, es.wj)((0, es.yQ)(t)),
                }),
            }),
        ],
    });
}
function ni() {
    let e = (0, g.bG)([h.A], () => h.A.stats?.messages),
        t = (0, g.bG)([h.A], () => (0, es.nb)(h.A.stats)),
        a = (0, g.bG)([h.A], () => h.A.globalStats?.messages?.numWordsSent),
        r = !t && null != a;
    return (0, n.jsx)(ru, {
        children: (0, n.jsxs)("div", {
            className: nt.kL,
            children: [
                (0, n.jsx)(tc, {
                    animatedSrc:
                        "https://cdn.discordapp.com/assets/content/d2d8036bb6a32967893421f9956b9e8ed30abde474f68c1a34e824205549c5a1.png",
                    staticSrc:
                        "https://cdn.discordapp.com/assets/content/1dfd8684180df4216b23f0a61617250be8fcc12bc1970ac259892f34fbdb836d.png",
                    className: nt.HW,
                }),
                (0, n.jsx)("div", {
                    className: nt.C,
                    children: r ? (0, n.jsx)(nr, { numWordsSent: a }) : (0, n.jsx)(na, { messages: e }),
                }),
            ],
        }),
    });
}
var nn = a(682163),
    ns = a(224865);
let nc = nn.iu[nn.Ay.Sizes.XLARGE];
function nd(e) {
    let { guild: t, size: a } = e;
    return null == t.icon && a < 48
        ? (0, n.jsx)("div", {
              className: m()(ns.K, ns.J),
              style: { width: a, height: a },
              "aria-hidden": !0,
              children: (0, n.jsx)(tp.E, { variant: "body-md/medium", children: (0, es.oW)(t.name) }),
          })
        : (0, n.jsx)(nn.Ay, {
              guild: t,
              size: nn.Ay.Sizes.XLARGE,
              iconSize: a,
              textScale: a / nc,
              className: ns.K,
              style: { width: a, height: a, borderRadius: 0 },
              "aria-hidden": !0,
          });
}
var nl = a(140645);
function no(e) {
    let { numVoiceMinutes: t, numMessagesSent: a } = e,
        r = Math.round(t),
        i = Math.round(a);
    return (0, n.jsxs)("div", {
        className: nl.M1,
        children: [
            (0, n.jsxs)("div", {
                className: nl.dJ,
                "aria-hidden": !0,
                children: [
                    (0, n.jsx)(aU.MicrophoneIcon, { size: "md", color: "currentColor" }),
                    (0, n.jsx)(tx, { variant: "mono-md/bold", className: nl.Qq, children: r }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: nl.dJ,
                "aria-hidden": !0,
                children: [
                    (0, n.jsx)(ay.ChatIcon, { size: "md", color: "currentColor" }),
                    (0, n.jsx)(tx, { variant: "mono-md/bold", className: nl.Qq, children: i }),
                ],
            }),
            (0, n.jsx)(v.A, {
                children: tI.intl.formatToPlainString(tw.default["OQjeY/"], { numMinutes: r, numMessages: i }),
            }),
        ],
    });
}
var nu = a(972106);
let nh = [];
function nf(e) {
    let { guild: t, rank: a, iconSize: r = 100, children: i } = e,
        s = p.useRef(null);
    return (0, n.jsx)(iW, {
        text: t.name,
        textRef: s,
        children: (e) => {
            let { tabIndex: c, className: d } = e;
            return (0, n.jsxs)("li", {
                className: m()(nu.w_, d),
                tabIndex: c,
                children: [
                    (0, n.jsxs)("div", {
                        className: nu.jj,
                        children: [
                            (0, n.jsx)(iK, { rank: a }),
                            (0, n.jsxs)("div", {
                                className: nu.gI,
                                children: [
                                    (0, n.jsx)(tx, {
                                        ref: s,
                                        variant: "heading-xxl/medium",
                                        className: nu.J5,
                                        lineClamp: 1,
                                        children: t.name,
                                    }),
                                    i,
                                ],
                            }),
                        ],
                    }),
                    (0, n.jsx)(nd, { guild: t, size: r }),
                ],
            });
        },
    });
}
function nb(e) {
    let { guild: t, numVoiceMinutes: a, numMessagesSent: r } = e;
    return (0, n.jsx)(nf, {
        guild: t,
        rank: 1,
        iconSize: 140,
        children: (0, n.jsx)(no, { numVoiceMinutes: a, numMessagesSent: r }),
    });
}
function np(e) {
    let { guilds: t } = e,
        a = tb();
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: nu.wx,
                children: [
                    (0, n.jsxs)(rC, {
                        ref: a,
                        className: nu.R_,
                        accessibilityLabel: tI.intl.string(tw.default.FroqRf),
                        children: [
                            (0, n.jsx)(rT, { icon: aD.ServerIcon, children: tI.intl.string(tw.default.Mb5E6r) }),
                            (0, n.jsx)(iP, { children: tI.intl.string(aL.default.F0fkrh) }),
                        ],
                    }),
                    (0, n.jsx)(rS, { children: tI.intl.string(tw.default.IN1DaS) }),
                ],
            }),
            (0, n.jsx)("ul", {
                className: nu.Pl,
                children: t.map((e, t) => {
                    let { guild: a, numMessagesSent: r, numVoiceMinutes: i } = e;
                    return 0 === t
                        ? (0, n.jsx)(nb, { guild: a, numMessagesSent: r ?? 0, numVoiceMinutes: i ?? 0 }, a.id)
                        : (0, n.jsx)(nf, { guild: a, rank: t + 1 }, a.id);
                }),
            }),
        ],
    });
}
function n_(e) {
    let { guilds: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: nu.wx,
                children: [
                    (0, n.jsxs)("div", {
                        className: nu.R_,
                        children: [
                            (0, n.jsx)(rd, { className: nu.gi }),
                            (0, n.jsx)(iU, { children: tI.intl.string(aL.default.F0fkrh) }),
                        ],
                    }),
                    (0, n.jsx)(rS, { children: tI.intl.string(tw.default.bhnqop) }),
                ],
            }),
            (0, n.jsx)("ul", {
                className: nu.Pl,
                children: t.map((e, t) => (0, n.jsx)(nf, { guild: e, rank: t + 1 }, e.id)),
            }),
        ],
    });
}
function nm() {
    let e = (0, g.bG)([h.A], () => h.A.stats?.guilds?.guilds ?? nh),
        t = (0, g.bG)([h.A], () => h.A.globalStats?.guilds?.guildsByMembers),
        a = 0 === e.length && null != t;
    return (0, n.jsx)(ru, {
        children: (0, n.jsx)("div", {
            className: nu.kL,
            children: a ? (0, n.jsx)(n_, { guilds: t }) : (0, n.jsx)(np, { guilds: e }),
        }),
    });
}
var nx = a(155094);
function ng(e) {
    let { icon: t, title: a, description: r } = e;
    return (0, n.jsx)(ru, {
        children: (0, n.jsxs)("div", {
            className: nx.Q,
            children: [(0, n.jsx)(rR, { icon: t, children: a }), (0, n.jsx)(rS, { children: r })],
        }),
    });
}
var nA = a(7584),
    nv = a(33293),
    nw = a(498137),
    nI = a(192339),
    nE = a(834109),
    nj = a(48763);
function nS(e) {
    let { character: t } = e,
        a = (0, E.o)(t);
    return (0, n.jsxs)(nw.A, {
        cardColorPalette: a,
        size: nj.W.LG,
        children: [(0, n.jsx)(nI.A, {}), (0, n.jsx)(nE.A, { variant: "full" }), (0, n.jsx)(nv.A, { character: t })],
    });
}
var nC = a(58410);
function nN() {
    let e = (0, g.bG)([h.A], () => h.A.stats),
        t = (0, g.bG)([h.A], () => h.A.character),
        a = tb();
    return (0, n.jsx)(ru, {
        children: (0, n.jsxs)("div", {
            className: nC.z,
            children: [
                null != t ? (0, n.jsx)(nS, { character: t }) : null,
                (0, n.jsxs)("div", {
                    className: m()(nC.zH, null === e && nC.gz),
                    children: [
                        (0, n.jsxs)(rC, {
                            ref: a,
                            className: nC.R_,
                            accessibilityLabel: tI.intl.string(tw.default.ASrTAc),
                            children: [
                                (0, n.jsx)(rT, {
                                    icon: rm.ExperimentalCheckpointIcon,
                                    children: tI.intl.string(aL.default.ir6nEQ),
                                }),
                                (0, n.jsx)(tx, {
                                    variant: "display-lg",
                                    className: nC.Vy,
                                    children: tI.intl.string(aL.default.y4M1na),
                                }),
                            ],
                        }),
                        null === e ? (0, n.jsx)(nT, { character: t }) : (0, n.jsx)(nR, { stats: e }),
                    ],
                }),
            ],
        }),
    });
}
function nT(e) {
    let { character: t } = e,
        { primaryBackgroundColor: a } = (0, E.j)((0, E.o)(t));
    return (0, n.jsx)(tx, {
        tag: "p",
        variant: "heading-xl/medium",
        style: { color: a },
        children: tI.intl.string(tw.default["GL+yOs"]),
    });
}
function nR(e) {
    let { stats: t } = e,
        a = t.guilds?.guilds[0],
        r = t.emojis?.emojis[0],
        i = t.games?.games[0]?.game,
        s =
            null != i
                ? ix.Ay.getApplicationIconURL({ id: i.id, icon: i.iconHash, size: 40, fallbackAvatar: !1 })
                : void 0;
    return (0, n.jsxs)("div", {
        className: nC.M1,
        children: [
            (0, n.jsx)(nO, { label: tI.intl.string(tw.default.MSrV9z), value: t.voice?.totalVoiceMinutes }),
            (0, n.jsx)(nO, { label: tI.intl.string(tw.default.hhh11L), value: t.messages?.numMessagesSent }),
            (0, n.jsx)(nO, { label: tI.intl.string(tw.default["f5S+pt"]), value: a?.numDaysInteracted }),
            (0, n.jsx)(nM, {
                label: tI.intl.string(aL.default["8XPMJj"]),
                icon: null != a ? (0, n.jsx)(nd, { guild: a.guild, size: 40 }) : (0, n.jsx)(ny, {}),
                name: null != a ? a.guild.name : tI.intl.string(tI.t.PoWNfe),
            }),
            (0, n.jsx)(nO, { label: tI.intl.string(tw.default.xVSlv3), value: t.emojis?.numEmojisSent }),
            (0, n.jsx)(nM, {
                label: tI.intl.string(aL.default["3sARW7"]),
                icon:
                    null != r
                        ? (0, n.jsx)(rK.A, {
                              emojiId: r.id,
                              emojiName: null == r.id ? r.name : void 0,
                              animated: r.animated,
                              alt: "",
                              className: nC.Kk,
                          })
                        : (0, n.jsx)(ny, {}),
                name:
                    null == r
                        ? tI.intl.string(tI.t.PoWNfe)
                        : null == r.id
                          ? nA.Ay.convertSurrogateToName(r.name)
                          : `:${r.name}:`,
            }),
            (0, n.jsx)(nO, { label: tI.intl.string(tw.default.y2Y1DD), value: t.games?.totalDaysPlayed }),
            (0, n.jsx)(nM, {
                label: tI.intl.string(aL.default.RbT4Zq),
                icon:
                    null != s
                        ? (0, n.jsx)("img", { src: s, alt: "", className: m()(nC.Kk, nC.Gt) })
                        : null == i
                          ? (0, n.jsx)(ny, {})
                          : (0, n.jsx)("div", {
                                className: m()(nC.Kk, nC.Gc),
                                children: (0, n.jsx)(iG.UnknownGameIcon, { size: "md", color: "currentColor" }),
                            }),
                name: null != i ? i.name : tI.intl.string(tI.t.PoWNfe),
            }),
        ],
    });
}
function nO(e) {
    let { label: t, value: a } = e;
    return (0, n.jsxs)("div", {
        className: nC.dJ,
        children: [
            (0, n.jsx)(tx, { variant: "heading-md/semibold", children: t }),
            (0, n.jsx)(tx, {
                variant: "heading-xxl/medium",
                className: nC.wk,
                children: Math.round(a ?? 0).toLocaleString(tI.intl.currentLocale),
            }),
        ],
    });
}
function nM(e) {
    let { label: t, icon: a, name: r } = e,
        i = p.useRef(null);
    return (0, n.jsx)(iW, {
        text: r,
        textRef: i,
        children: (e) => {
            let { tabIndex: s, className: c } = e;
            return (0, n.jsxs)("div", {
                className: m()(nC.dJ, nC.u4, c),
                tabIndex: s,
                children: [
                    (0, n.jsx)(tx, { variant: "heading-md/semibold", children: t }),
                    (0, n.jsxs)("div", {
                        className: nC.AS,
                        children: [
                            a,
                            (0, n.jsx)(tx, {
                                ref: i,
                                variant: "heading-xl/medium",
                                lineClamp: 1,
                                className: nC.TJ,
                                children: r,
                            }),
                        ],
                    }),
                ],
            });
        },
    });
}
function ny() {
    return (0, n.jsx)("div", {
        className: m()(nC.Kk, nC.Gc, nC.Wn),
        children: (0, n.jsx)(iG.UnknownGameIcon, { size: "lg", color: "currentColor" }),
    });
}
var nL = a(651946);
function nk() {
    let e = (0, g.bG)([h.A], () => h.A.stats?.guilds?.guilds[0]),
        t = Math.round(e?.numDaysInteracted ?? 0),
        a = (0, es.bD)(e?.numDaysInteractedPercentile),
        r = p.useRef(null);
    return (0, n.jsx)(ru, {
        children: (0, n.jsxs)("div", {
            className: nL.kL,
            children: [
                (0, n.jsxs)("div", {
                    className: nL.wx,
                    children: [
                        (0, n.jsxs)("div", {
                            className: nL.R_,
                            children: [
                                (0, n.jsx)(rR, { icon: aD.ServerIcon, children: tI.intl.string(tw.default["M+a+t1"]) }),
                                (0, n.jsx)(rX, { value: t }),
                            ],
                        }),
                        (0, n.jsx)(rS, {
                            children:
                                null != a
                                    ? tI.intl.format(tw.default.sIDTV1, {
                                          numDays: t,
                                          percent: a,
                                          percentHook: (e, t) => (0, n.jsx)(rz, { children: e }, t),
                                      })
                                    : tI.intl.format(tw.default.nLCUQ4, { numDays: t }),
                        }),
                    ],
                }),
                null != e &&
                    (0, n.jsx)("div", {
                        className: nL.bU,
                        children: (0, n.jsx)(iW, {
                            text: e.guild.name,
                            textRef: r,
                            children: (t) => {
                                let { tabIndex: a, className: i } = t;
                                return (0, n.jsxs)("div", {
                                    className: m()(nL.Nr, i),
                                    style: { width: 360 },
                                    tabIndex: a,
                                    children: [
                                        (0, n.jsx)(nd, { guild: e.guild, size: 360 }),
                                        (0, n.jsxs)("div", {
                                            className: nL.zH,
                                            children: [
                                                (0, n.jsx)(tx, {
                                                    ref: r,
                                                    variant: "heading-xxl/medium",
                                                    className: nL.J5,
                                                    lineClamp: 1,
                                                    children: e.guild.name,
                                                }),
                                                (0, n.jsx)(no, {
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
var nD = a(270704);
function nP(e) {
    let { voice: t } = e,
        a = Math.round(t?.totalVoiceMinutes ?? 0),
        r = (0, es.bD)(t?.totalVoiceMinutesPercentile);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: nD.dJ,
                children: [
                    (0, n.jsx)(rR, { icon: aU.MicrophoneIcon, children: tI.intl.string(tw.default["3/T12E"]) }),
                    (0, n.jsx)(rX, { value: a, alignment: "center" }),
                ],
            }),
            (0, n.jsx)(rS, {
                children:
                    null != r
                        ? tI.intl.format(tw.default.RqXsIs, {
                              percent: r,
                              percentHook: (e, t) => (0, n.jsx)(rz, { children: e }, t),
                          })
                        : tI.intl.format(tw.default.Y3poDW, { numMinutes: a }),
            }),
        ],
    });
}
function nU(e) {
    let { peakHour: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: nD.dJ,
                children: [
                    (0, n.jsx)(rR, { icon: aU.MicrophoneIcon, children: tI.intl.string(tw.default.ZCwB8J) }),
                    (0, n.jsx)(r$, { value: t }),
                ],
            }),
            (0, n.jsx)(rS, { children: tI.intl.string(tw.default.huiTne) }),
        ],
    });
}
function nG() {
    let e = (0, g.bG)([h.A], () => h.A.stats?.voice),
        t = (0, g.bG)([h.A], () => (0, es.Kr)(h.A.stats)),
        a = (0, g.bG)([h.A], () => h.A.globalStats?.voice?.peakHourUtc),
        r = (0, es.XF)(a)?.value,
        i = !t && null != r;
    return (0, n.jsxs)(ru, {
        children: [
            (0, n.jsx)(tc, {
                animatedSrc:
                    "https://cdn.discordapp.com/assets/content/04746dc04eab575d0168935af2b1b3f97e2e00439f84bd0f0474276e0c5a81dc.png",
                staticSrc:
                    "https://cdn.discordapp.com/assets/content/c4c2d6b631bff3da4e4bb9afffc8f89bc9fb6f76a2fcd824f8a7af83eb7f1e6b.png",
                className: nD.Tp,
            }),
            (0, n.jsx)("div", {
                className: nD.Qs,
                children: i ? (0, n.jsx)(nU, { peakHour: r }) : (0, n.jsx)(nP, { voice: e }),
            }),
        ],
    });
}
function nH(e) {
    let { route: t, onNextStep: a, onPreviousStep: r } = e;
    if (t === C.gr.HOME) return (0, n.jsx)(rF, { onStart: a });
    if (t === C.gr.INTRODUCTION) return (0, n.jsx)(rb, {});
    let { statsScreen: i } = (0, C.UG)(t);
    switch (i) {
        case C.oI.VOICE_INTRO:
            return (0, n.jsx)(ng, {
                icon: aU.MicrophoneIcon,
                title: tI.intl.string(tw.default["/7XYsa"]),
                description: tI.intl.string(tw.default["X8/G/o"]),
            });
        case C.oI.VOICE:
            return (0, n.jsx)(nG, {});
        case C.oI.MESSAGES_INTRO:
            return (0, n.jsx)(ng, {
                icon: ay.ChatIcon,
                title: tI.intl.string(tw.default["2BuyVC"]),
                description: tI.intl.string(tw.default["kF+Y3a"]),
            });
        case C.oI.MESSAGES:
            return (0, n.jsx)(ni, {});
        case C.oI.SERVERS_INTRO:
            return (0, n.jsx)(ng, {
                icon: aD.ServerIcon,
                title: tI.intl.string(aL.default.F0fkrh),
                description: tI.intl.string(tw.default.Xg82Gy),
            });
        case C.oI.SERVERS:
            return (0, n.jsx)(nm, {});
        case C.oI.TOP_SERVER:
            return (0, n.jsx)(nk, {});
        case C.oI.EMOJI_INTRO:
            return (0, n.jsx)(ng, {
                icon: tf.EmojiSlightlySmilingFaceIcon,
                title: tI.intl.string(tw.default.ZTDCIv),
                description: tI.intl.string(tw.default.y8Sr8J),
            });
        case C.oI.EMOJI:
            return (0, n.jsx)(id, {});
        case C.oI.GAMES_INTRO:
            return (0, n.jsx)(ng, {
                icon: aO.GameControllerIcon,
                title: tI.intl.string(tw.default.HM2fjf),
                description: tI.intl.string(tw.default.LQiFqJ),
            });
        case C.oI.GAMES:
            return (0, n.jsx)(ne, {});
        case C.oI.GAME_TIME:
            return (0, n.jsx)(iL, {});
        case C.oI.SQUAD:
        case C.oI.SIDEKICK:
            return (0, n.jsx)(iS, { route: t, onNextStep: a, onPreviousStep: r });
        case C.oI.SUMMARY:
            return (0, n.jsx)(nN, {});
        case C.oI.SHARE:
            return (0, n.jsx)(ry, {});
        default:
            return null;
    }
}
var nF = a(650809),
    nK = a(428692);
let nB = {
    [C.s9.FACE]: { icon: aU.MicrophoneIcon, label: tI.t.K3lovD },
    [C.s9.OUTFIT]: { icon: ay.ChatIcon, label: tI.t.OIgYlQ },
    [C.s9.HEADWEAR]: { icon: aD.ServerIcon, label: tI.t["7hB4kg"] },
    [C.s9.SHOES]: { icon: tf.EmojiSlightlySmilingFaceIcon, label: tI.t.sMOuuS },
    [C.s9.WEARABLE]: { icon: aO.GameControllerIcon, label: tI.t.URyqtP },
    [C.s9.AURA]: { icon: aT.CalendarIcon, label: tw.default.y2Y1DD },
    [C.s9.ASSEMBLED]: { icon: iu.FriendsIcon, label: tI.t.TdEu5X },
    [C.s9.FINALIZE]: { icon: nF.PaintPaletteIcon, label: tw.default.gmMD2I },
    [C.s9.SUMMARY]: { icon: rm.ExperimentalCheckpointIcon, label: aL.default.y4M1na },
};
function nz(e) {
    let {
            step: { icon: t, label: a, route: r },
            state: i,
            disabled: s,
            blockedTraitDescriptionId: c,
            sound: d,
            onRouteClick: l,
        } = e,
        o = tI.intl.string(a),
        u = "unlocked" === i,
        {
            onPointerDown: h,
            onKeyDown: f,
            onClickWithSound: b,
        } = a5({ source: d, onClick: () => l(r), disabled: s || !u });
    return (0, n.jsx)(aQ.m, {
        text: "locked" === i ? null : o,
        ariaHidden: !0,
        children: (0, n.jsxs)(ih.D, {
            onPointerDown: u ? h : void 0,
            onKeyDown: u ? f : void 0,
            onClick: u ? b : void 0,
            tabIndex: u ? 0 : -1,
            role: "tab",
            "aria-selected": "active" === i,
            className: m()(nK.PM, { [nK.Xj]: "active" === i, [nK.CD]: u, [nK.vk]: u && !s }),
            "aria-label": o,
            "aria-disabled": "locked" === i || (u && s),
            "aria-describedby": u ? c : void 0,
            children: [
                (0, n.jsx)("div", { className: m()(nK.Om, { [nK.hZ]: "locked" !== i }) }),
                (0, n.jsx)(t, { size: "xs", color: "currentColor", className: nK.Kk }),
            ],
        }),
    });
}
function nV(e) {
    let { flow: t, stats: a, activeRoute: r, isRouteBlocked: i, blockedTraitDescriptionId: s, onRouteClick: c } = e,
        d = (function (e, t) {
            let a = [];
            for (let r of (0, S.p5)({ flow: e, stats: t })) {
                let { characterStage: e } = (0, C.UG)(r),
                    t = nB[e];
                null != t && a.at(-1)?.stage !== e && a.push({ ...t, stage: e, route: r });
            }
            return a;
        })(t, a),
        { characterStage: l } = (0, C.UG)(r),
        o = d.findIndex((e) => {
            let { stage: t } = e;
            return t === l;
        }),
        [u, f] = p.useState(o);
    o > u && f(o);
    let b = (0, g.bG)([h.A], () => h.A.isSaving);
    return -1 === o
        ? null
        : (0, n.jsx)("div", {
              className: nK.qB,
              role: "tablist",
              "aria-label": tI.intl.string(tw.default.DyMw85),
              children: d.map((e, t) =>
                  (0, n.jsx)(
                      nz,
                      {
                          step: e,
                          state: t === o ? "active" : t <= u ? "unlocked" : "locked",
                          disabled: b || i,
                          blockedTraitDescriptionId: s,
                          sound: t < o ? aY : aZ,
                          onRouteClick: c,
                      },
                      e.stage,
                  ),
              ),
          });
}
var nW = a(517782);
function nq() {
    let e = p.useId(),
        t = p.useRef(null);
    return (p.useEffect(() => (A.O.moveTo?.(e, t.current), () => A.O.remove?.(e)), [e]), (0, n.jsx)(v.A, { ref: t }));
}
function nY(e) {
    let t,
        a,
        { onClose: r } = e;
    ((0, g.bG)([h.A], () => h.A.fetchState),
        (t = (0, g.yK)([h.A], () => {
            let { stats: e, globalStats: t } = h.A,
                a = t?.games;
            if ((0, es.IH)(e) || null == a)
                return (
                    e?.games?.games.map((e) => {
                        let { game: t } = e;
                        return t.id;
                    }) ?? []
                );
            let r = [];
            return (
                ec.Jb.forEach((e) => {
                    let { list: t } = e,
                        i = a[t][0];
                    null != i && r.push(i.id);
                }),
                r
            );
        })),
        p.useEffect(() => {
            let { fetchState: e } = h.A;
            (e === h.T.INIT || e === h.T.ERROR) && (0, u.nX)();
        }, []),
        p.useEffect(() => {
            (0, en.E)(t);
        }, [t]));
    let i = (0, g.bG)([h.A], () => (0, S.bL)(h.A.stats)),
        [s, c] = (function (e) {
            let [t, a] = p.useState(() =>
                (function (e) {
                    let { character: t, progress: a, stats: r, isCharacterCreatorEnabled: i } = h.A,
                        n = null != t ? C.s9.SUMMARY : a?.stage;
                    return (
                        (0, S.p5)({ flow: e, stats: r, character: t, isCharacterCreatorEnabled: i }).find(
                            (e) => (0, C.UG)(e).characterStage === n,
                        ) ?? C.gr.HOME
                    );
                })(e),
            );
            return (
                p.useEffect(() => {
                    let { characterStage: e } = (0, C.UG)(t);
                    (0, u.l4)(e);
                }, [t]),
                [t, a]
            );
        })(i),
        d = (function (e) {
            let t = (0, g.bG)([V.Ay], () => V.Ay.useReducedMotion),
                [a, r] = p.useState(e),
                [i, n] = p.useState(!1);
            if (e !== a) {
                let i = (0, C.Rq)(a),
                    s = (0, C.Rq)(e);
                (r(e), n(!t && i && s));
            }
            return (
                p.useEffect(() => {
                    if (!i) return;
                    let e = setTimeout(() => n(!1), ea.duration);
                    return () => clearTimeout(e);
                }, [i, e]),
                i
            );
        })(s);
    (p.useEffect(() => {
        (f.A.setStepName(s), (0, b.if)(s));
    }, [s]),
        (0, z.l0)(() => {
            (f.A.stop(), (0, b.i)(f.A.getStepName()));
        }),
        p.useEffect(() => {
            let e = !1;
            function t() {
                e = !0;
            }
            return (
                K.h.subscribe("CHECKPOINT_COMPLETE_SUCCESS", t),
                () => {
                    (K.h.unsubscribe("CHECKPOINT_COMPLETE_SUCCESS", t), e && (0, B.hs)(F.w.CHECKPOINT_COMPLETED));
                }
            );
        }, []),
        (a = (0, g.bG)([l.A], () => l.A.isFocused() && l.A.isVisible())),
        p.useEffect(() => {
            f.A.setForeground(a);
        }, [a]));
    let { characterStage: o, statsScreen: _ } = (0, C.UG)(s),
        A = s === C.gr.HOME || null != _,
        D = A ? W.STATS : d ? W.CUSTOMIZATION_ROUTE_CHANGE : null,
        P = s === C.gr.INTRODUCTION,
        U = (0, C.Rq)(s),
        G = (0, g.bG)([h.A], () => (h.A.fetchState === h.T.SUCCESS ? h.A.stats : void 0)),
        X = (0, g.bG)([h.A], () => h.A.character),
        Q = p.useMemo(
            () =>
                (function (e, t) {
                    switch (e) {
                        case C.gr.SUMMARY:
                        case C.gr.SHARE:
                            let a = (0, E.o)(t),
                                { primaryBackgroundColor: r, shadowColor: i } = (0, E.j)(a);
                            return {
                                ...av,
                                "--custom-checkpoint-primary": r,
                                "--custom-checkpoint-button-border": r,
                                "--custom-checkpoint-button-shadow": i,
                                "--custom-checkpoint-background-gradient-start": r,
                            };
                        default:
                            return av;
                    }
                })(s, X),
            [s, X],
        ),
        J = (function () {
            let { isMuted: e, volume: t } = (0, g.cf)([h.A], () => ({ isMuted: h.A.isMuted, volume: h.A.volume })),
                a = p.useRef(new Map()),
                r = p.useRef(null),
                i = p.useCallback(() => {
                    (r.current?.(), a.current.forEach((e) => e.pause()));
                }, []);
            return (
                p.useEffect(() => ((a.current = new Map(y.map((e) => [e, new Audio(e)]))), i), [i]),
                p.useEffect(() => {
                    a.current.forEach((a) => {
                        ((a.muted = e), (a.volume = t));
                    });
                }, [e, t]),
                p.useCallback(
                    (e) => {
                        var t;
                        let n;
                        (i(),
                            (t = (e) => {
                                let t = a.current.get(e);
                                null == t || h.A.isMuted || 0 === h.A.volume || ((t.currentTime = 0), t.play());
                            }),
                            (n = []),
                            e.forEach((e) => {
                                let { source: a, delayMs: r } = e;
                                r > 0 ? n.push(setTimeout(() => t(a), r)) : t(a);
                            }),
                            (r.current = () => n.forEach((e) => clearTimeout(e))));
                    },
                    [i],
                )
            );
        })(),
        et = H(),
        er = (0, j.k0)(s, et),
        ei = p.useId(),
        ed = null != er ? ei : void 0,
        eo = p.useCallback(
            (e) => {
                let t = (function (e) {
                    let { previousRoute: t, route: a } = e;
                    if (t === C.gr.SIDEKICK_LEAVE && a === C.gr.SIDEKICK) return null;
                    if (t === C.gr.FINALIZE_CHARACTER && a === C.gr.SUMMARY) return [];
                    let r = [];
                    return (
                        a === C.gr.INTRODUCTION
                            ? (r.push({ source: N, delayMs: 0 }),
                              r.push({ source: M, delayMs: 2500 }),
                              r.push({ source: T, delayMs: 2800 }))
                            : L(t) && k(a)
                              ? r.push({ source: R, delayMs: 0 })
                              : k(t) && L(a) && (r.push({ source: O, delayMs: 0 }), r.push({ source: M, delayMs: 0 })),
                        r
                    );
                })({ previousRoute: s, route: e });
                (null != t && J(t), c(e));
            },
            [s, J, c],
        ),
        eh = p.useCallback(
            (e) => {
                let t = (0, S.SK)({ flow: i, stats: G, currentRoute: s, direction: e });
                if (null == t) {
                    1 === e && r();
                    return;
                }
                eo(t);
            },
            [s, i, eo, r, G],
        ),
        eb = p.useCallback(() => eh(-1), [eh]),
        e_ = p.useCallback(() => eh(1), [eh]),
        em = p.useCallback(() => eo((0, S.$_)({ flow: i, stats: G })), [i, eo, G]),
        ex = p.useCallback(
            (e) => {
                if (!h.A.isSaving) {
                    if (null != er) return void el(er);
                    eo(e);
                }
            },
            [er, eo],
        );
    return (0, n.jsx)(w.N, {
        theme: eu.NJ.DARK,
        children: (e) =>
            (0, n.jsx)(x.Jh, {
                children: (0, n.jsxs)("div", {
                    className: m()(e, nW.kL),
                    style: Q,
                    role: "dialog",
                    "aria-modal": !0,
                    "aria-label": tI.intl.string(aL.default["CdU/PF"]),
                    children: [
                        (0, n.jsx)(nq, {}),
                        (0, n.jsxs)("div", {
                            className: nW.$s,
                            children: [
                                (0, n.jsx)(aq, {}),
                                (0, n.jsx)(ep, {
                                    size: "sm",
                                    "aria-label": tI.intl.string(tI.t.cpT0Cq),
                                    onClick: r,
                                    children: (0, n.jsx)(I.XSmallIcon, { size: "xs", color: "currentColor" }),
                                }),
                            ],
                        }),
                        (0, n.jsx)(ts, {
                            stage: o,
                            hiddenBy: D,
                            className: nW.qd,
                            children:
                                P && (0, n.jsx)(nH, { route: C.gr.INTRODUCTION, onNextStep: e_, onPreviousStep: eb }),
                        }),
                        (0, n.jsx)(eA, {
                            visible: A,
                            enter: q,
                            exit: q,
                            hiddenScale: 1.02,
                            keepMounted: !0,
                            className: nW.qd,
                            style: Q,
                            children: (0, n.jsx)(ef, { isVisible: A }),
                        }),
                        (0, n.jsx)(eA, {
                            visible: U && !d,
                            enter: $,
                            exit: ee,
                            className: nW.qd,
                            children: (0, n.jsx)(aH, { route: s }),
                        }),
                        (0, n.jsx)(eA, {
                            visible: A,
                            enter: Z,
                            exit: Y,
                            hiddenScale: 1.02,
                            mountAfterDelay: !0,
                            className: nW.qd,
                            style: Q,
                            children: (0, n.jsx)(nH, { route: s, onNextStep: e_, onPreviousStep: eb }),
                        }),
                        (0, n.jsx)(rc, {
                            activeRoute: s,
                            blockedTrait: er,
                            blockedTraitDescriptionId: ed,
                            onBack: eb,
                            onNext: e_,
                            onReplay: em,
                        }),
                        (0, n.jsx)(th, { activeRoute: s }),
                        (0, n.jsx)(nV, {
                            flow: i,
                            stats: G,
                            activeRoute: s,
                            isRouteBlocked: null != er,
                            blockedTraitDescriptionId: ed,
                            onRouteClick: ex,
                        }),
                        null != er && (0, n.jsx)(v.A, { id: ei, children: (0, j.Cz)(er) }),
                        (0, n.jsx)(x.P, {}),
                    ],
                }),
            }),
    });
}
var nZ = a(359527);
function nX() {
    if (o._.hasSubscribers(a8.jej.MODAL_CLOSE)) return (o._.dispatch(a8.jej.MODAL_CLOSE), !0);
    let e = (0, d.mU)(document.activeElement ?? document.body);
    return !!e?.hasSubscribers(a8.jej.POPOUT_CLOSE) && (e.dispatch(a8.jej.POPOUT_CLOSE), !0);
}
async function nQ(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = await (0, u.nX)(t);
    return a === h.T.ERROR
        ? ((0, s.P0)({ text: tI.intl.string(tI.t.fEptJP), variant: "critical" }), !1)
        : a !== h.T.FETCHING &&
              (f.A.initialize({ isForeground: l.A.isFocused() && l.A.isVisible() }),
              (0, b.lw)(e),
              (0, c.B8)(
                  (e) => {
                      let { closeLayer: t } = e;
                      return (0, n.jsx)(nY, { onClose: t });
                  },
                  { layerKey: nZ.p, onEscape: nX },
              ),
              !0);
}
