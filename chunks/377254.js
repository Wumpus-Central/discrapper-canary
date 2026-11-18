a.d(t, { D: () => n2 });
var i,
    r,
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
        "https://cdn.discordapp.com/assets/content/7ff087600e0a6a745646ef51b33c7e4b77ae940e4d6335769c630c356cb8c378.mp3",
    O =
        "https://cdn.discordapp.com/assets/content/aada5b40828140b41a56df82e81783cd43fd60e30ac1eb3c9f93a087b95dcf03.mp3",
    M =
        "https://cdn.discordapp.com/assets/content/04536b9e5b26d0b6e85116ce546b7d5ba97da31e7de7a1e02da262bcd5249bb0.mp3",
    y =
        "https://cdn.discordapp.com/assets/content/82d771ff521a99ea8e26239d2f2e48ae847e39575bc5bce396739b430b8a6fda.mp3",
    L = [N, T, R, O, M, y];
function k(e) {
    return e !== C.gr.HOME && null == (0, C.UG)(e).statsScreen;
}
function D(e) {
    return null != (0, C.UG)(e).statsScreen;
}
var P = a(127639),
    U = a(287809),
    G = a(474090),
    H = a(817379);
function F() {
    return (0, g.yK)([h.A, U.default], () => {
        let { selectedCharacterTraits: e, stats: t, character: a } = h.A,
            i = (0, G.ki)(U.default.getCurrentUser());
        return Object.values(P.V).filter((r) => {
            let n = e[r];
            return null != n && (0, H.tS)(r, n, { stats: t, hasNitro: i, savedCharacter: a });
        });
    });
}
var K = a(765548),
    B = a(775602),
    z = (((i = {}).STATS = "stats"), (i.CUSTOMIZATION_ROUTE_CHANGE = "customization_route_change"), i);
let V = { delay: 0, duration: 350 },
    W = { delay: 35, duration: 125 },
    q = { delay: 200, duration: 125 },
    Y = { delay: 700, duration: 175 },
    Z = { delay: 175, duration: 175 },
    X = { delay: 0, duration: 125 },
    Q = { delay: 175, duration: 175 },
    J = { delay: 0, duration: 175 },
    $ = { delay: 0, duration: 0 },
    ee = { delay: 0, duration: 175 },
    et = { delay: V.delay + V.duration, duration: 0 },
    ea = q.delay + 500;
var ei = a(517846),
    er = a(73153),
    en = a(669700),
    es = a(964486),
    ec = a(920495),
    ed = a(407905),
    el = a(532294),
    eo = a(739187);
function eu(e) {
    let t = (0, j.Cz)(e);
    null != t && ((0, eo.V)(), (0, s.P0)({ text: t, variant: "critical" }));
}
function eh(e) {
    let { isMuted: t, volume: a } = (0, g.cf)([h.A], () => ({ isMuted: h.A.isMuted, volume: h.A.volume })),
        i = p.useRef(null);
    return (
        p.useEffect(() => {
            i.current = new Audio(e);
        }, [e]),
        p.useEffect(() => {
            null != i.current && ((i.current.muted = t), (i.current.volume = a));
        }, [t, a]),
        p.useCallback(() => {
            let e = i.current;
            t || 0 === a || null == e || ((e.volume = a), (e.currentTime = 0), e.play());
        }, [t, a])
    );
}
var ef = a(299619),
    eb = a(818348),
    ep = a(11435);
function e_(e) {
    let { isVisible: t } = e,
        a = p.useRef(null),
        i = (0, g.bG)([B.Ay], () => B.Ay.useReducedMotion),
        r = t && !i;
    return (
        p.useEffect(() => {
            let e = a.current;
            null != e && (r ? e.play().catch(eb.tE) : e.pause());
        }, [r]),
        p.useEffect(() => {
            i && null != a.current && (a.current.currentTime = 1);
        }, [i]),
        (0, n.jsxs)("div", {
            className: ep.Tp,
            "aria-hidden": !0,
            children: [
                (0, n.jsx)(ef.A, {
                    ref: a,
                    className: ep.Ki,
                    src: "https://cdn.discordapp.com/assets/content/a7a4300630ed2733eca4a8bb584c3086a66063d78e2f829faf465d96ff388a93.webm",
                    loop: !0,
                    muted: !0,
                    playsInline: !0,
                }),
                (0, n.jsx)("div", { className: ep.D7 }),
            ],
        })
    );
}
var em = a(885619);
function ex(e) {
    let {
        ref: t,
        onMouseEnter: a,
        onMouseLeave: i,
        onFocus: r,
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
        onMouseLeave: i,
        onFocus: r,
        onBlur: s,
        onContextMenu: c,
        type: "button",
        className: m()(em.button, "custom" !== _ && em[_], x),
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
function eg(e) {
    let { className: t, ...a } = e;
    return (0, n.jsx)(ex, { ...a, className: m()(em.shadow, t) });
}
var eA = a(475743),
    ev = a(190240);
function ew(e) {
    let {
            visible: t,
            enter: a,
            exit: i,
            keepMounted: r = !1,
            mountAfterDelay: s = !1,
            hiddenScale: c = 1,
            onExitComplete: d,
            className: l,
            style: o,
            children: u,
        } = e,
        h = (0, g.bG)([B.Ay], () => B.Ay.useReducedMotion),
        f = p.useRef(null),
        [b, _] = p.useState(t),
        [x, A] = p.useState(t),
        v = p.useRef(null),
        w = (0, eA.p0)({ value: u, shouldUpdate: t }),
        I = (0, eA.p0)({ value: o, shouldUpdate: t }),
        E = (0, K.A)(() => {
            ((v.current = null), _(!1), d?.());
        }),
        j = t ? a : i,
        S = h ? 0 : j.delay,
        C = h ? 0 : j.duration,
        N = t && !b && !r,
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
                r && _(!0);
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
        !b && !r)
    )
        return null;
    let O = t && !r && T ? 0 : S,
        M = {
            ...(t ? o : I),
            opacity: +!!x,
            transform: x || 1 === c ? void 0 : `scale(${c})`,
            transitionDuration: `${C}ms`,
            transitionDelay: `${O}ms`,
        };
    return (0, n.jsx)("div", {
        ref: f,
        className: m()(l, ev.q, { [ev.R]: !b }),
        style: M,
        inert: !t,
        "aria-hidden": !t,
        children: t || r ? u : w,
    });
}
var eI = a(516749),
    eE = a(399667),
    ej = a(468311),
    eS = a(706121),
    eC = a(985747),
    eN = a(67915),
    eT = a(118531);
let eR = {
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
function eO(e) {
    return { name: e, url: eR[e].url };
}
let eM = eO("tex_none"),
    ey = {
        [eC.N.NONE]: 0,
        [eC.N.CAP]: 7,
        [eC.N.ELVEN_HEADPIECE]: 1,
        [eC.N.HEADPHONES]: 2,
        [eC.N.TEDDY_BEANIE]: 13,
        [eC.N.PIERCINGS]: 4,
        [eC.N.HEADBAND]: 5,
        [eC.N.SUNGLASSES]: 6,
        [eC.N.BANANA_PEEL]: 3,
        [eC.N.LEAF]: 8,
        [eC.N.FIRE]: 9,
        [eC.N.HALO]: 10,
        [eC.N.BRAIN]: 11,
        [eC.N.TRAFFIC_CONE]: 12,
        [eC.N.CROWN]: 14,
    },
    eL = {
        [eT.Z.NONE]: 0,
        [eT.Z.ANGEL_WINGS]: 3,
        [eT.Z.STICKERS]: 1,
        [eT.Z.TOTE]: 2,
        [eT.Z.WIZARD_STAFF]: 8,
        [eT.Z.SKATEBOARD]: 4,
        [eT.Z.DRAGON_WINGS]: 5,
        [eT.Z.TAKE_OUT_BAG]: 6,
        [eT.Z.PIXEL_WRENCH]: 7,
        [eT.Z.MECH_WINGS]: 9,
        [eT.Z.SWORD]: 10,
        [eT.Z.DEVIANT_TAIL]: 11,
        [eT.Z.MAGICAL_STAFF]: 12,
        [eT.Z.BUTTERFLY_WINGS]: 13,
        [eT.Z.CAT_BACKPACK]: 14,
    },
    ek = {
        [ej.X.NONE]: eM,
        [ej.X.BLAZE]: eO("tex_aura_04_blaze"),
        [ej.X.BLOSSOM]: eO("tex_aura_01_blossom"),
        [ej.X.PRISM]: eO("tex_aura_02_prism"),
        [ej.X.SHOCK]: eO("tex_aura_03_shock"),
        [ej.X.FATED]: eO("tex_aura_05_fated"),
        [ej.X.LUSTER]: eO("tex_aura_06_luster"),
        [ej.X.BUBBLES]: eO("tex_aura_07_bubbly"),
        [ej.X.SPOOKY]: eO("tex_aura_08_spooky"),
        [ej.X.CURSED]: eO("tex_aura_09_cursed"),
        [ej.X.MAGNETIC]: eO("tex_aura_10_magnetic"),
        [ej.X.RADIOACTIVE]: eO("tex_aura_11_radioactive"),
        [ej.X.ELEMENTAL]: eO("tex_aura_12_elemental"),
        [ej.X.SHIMMER]: eO("tex_aura_13_shimmer"),
        [ej.X.WITCHY]: eO("tex_aura_14_witchy"),
    },
    eD = {
        [eS.R.ICY]: eO("tex_base_01_icy"),
        [eS.R.CRIMSON]: eO("tex_base_02_crimson"),
        [eS.R.CHROME]: eO("tex_base_03_chrome"),
        [eS.R.GALACTIC]: eO("tex_base_04_galactic"),
        [eS.R.FOREST]: eO("tex_base_05_forrest"),
        [eS.R.MIDNIGHT]: eO("tex_base_06_mighnight"),
        [eS.R.GLACIER]: eO("tex_base_07_glacier"),
        [eS.R.ORANGE]: eO("tex_base_08_orange"),
        [eS.R.PURPLE]: eO("tex_base_09_pink"),
        [eS.R.RED]: eO("tex_base_10_red"),
        [eS.R.COBALT]: eO("tex_base_11_cobalt"),
        [eS.R.X_RAY]: eO("tex_base_12_x-ray"),
        [eS.R.LIQUID]: eO("tex_base_13_liquid"),
        [eS.R.BUTTER]: eO("tex_base_14_butter"),
        [eS.R.IRIDESCENT]: eO("tex_base_15_iridescent"),
    },
    eP = {
        [eN.r.NONE]: null,
        [eN.r.BADDIE_DEFAULT]: { riveId: 1, texture: eO("tex_outfit_01_baddie") },
        [eN.r.TRAVELER_DEFAULT]: { riveId: 10, texture: eO("tex_outfit_10_traveler") },
        [eN.r.STREAMER_DEFAULT]: { riveId: 3, texture: eO("tex_outfit_03_streamer") },
        [eN.r.CAMPER_DEFAULT]: { riveId: 4, texture: eO("tex_outfit_04_camper") },
        [eN.r.ATHLETE_DEFAULT]: { riveId: 5, texture: eO("tex_outfit_05_athlete") },
        [eN.r.COWPOKE_DEFAULT]: { riveId: 6, texture: eO("tex_outfit_06_cowpoke") },
        [eN.r.GOTH_DEFAULT]: { riveId: 7, texture: eO("tex_outfit_07_goth") },
        [eN.r.ASTRONAUT_DEFAULT]: { riveId: 8, texture: eO("tex_outfit_08_astronaut") },
        [eN.r.JESTER_DEFAULT]: { riveId: 9, texture: eO("tex_outfit_09_jester") },
        [eN.r.TRASH_CAN_DEFAULT]: { riveId: 2, texture: eO("tex_outfit_02_trash") },
        [eN.r.MAGE_DEFAULT]: { riveId: 11, texture: eO("tex_outfit_11_mage") },
        [eN.r.MECH_DEFAULT]: { riveId: 12, texture: eO("tex_outfit_12_mech") },
        [eN.r.KNIGHT_DEFAULT]: { riveId: 13, texture: eO("tex_outfit_13_knight") },
        [eN.r.MAGICAL_DEFAULT]: { riveId: 14, texture: eO("tex_outfit_14_magical") },
        [eN.r.BADDIE_MONOCHROME]: { riveId: 1, texture: eO("tex_outfit_01_baddie_monochrome") },
        [eN.r.BADDIE_VIOLET]: { riveId: 1, texture: eO("tex_outfit_01_baddie_violet") },
        [eN.r.BADDIE_PASTEL]: { riveId: 1, texture: eO("tex_outfit_01_baddie_pastel") },
        [eN.r.BADDIE_SUNSET]: { riveId: 1, texture: eO("tex_outfit_01_baddie_sunset") },
        [eN.r.TRAVELER_HAZE]: { riveId: 10, texture: eO("tex_outfit_10_traveler_haze") },
        [eN.r.TRAVELER_MOSS]: { riveId: 10, texture: eO("tex_outfit_10_traveler_moss") },
        [eN.r.TRAVELER_CHRONO]: { riveId: 10, texture: eO("tex_outfit_10_traveler_chrono") },
        [eN.r.TRAVELER_UMBER]: { riveId: 10, texture: eO("tex_outfit_10_traveler_umber") },
        [eN.r.STREAMER_FLAMES]: { riveId: 3, texture: eO("tex_outfit_03_streamer_flames") },
        [eN.r.STREAMER_STRIPES]: { riveId: 3, texture: eO("tex_outfit_03_streamer_stripes") },
        [eN.r.STREAMER_SMILEY]: { riveId: 3, texture: eO("tex_outfit_03_streamer_smiley") },
        [eN.r.STREAMER_VINTAGE]: { riveId: 3, texture: eO("tex_outfit_03_streamer_vintage") },
        [eN.r.CAMPER_PLAID]: { riveId: 4, texture: eO("tex_outfit_04_camper_plaid") },
        [eN.r.CAMPER_SWAMP]: { riveId: 4, texture: eO("tex_outfit_04_camper_swamp") },
        [eN.r.CAMPER_GLAMP]: { riveId: 4, texture: eO("tex_outfit_04_camper_glamp") },
        [eN.r.CAMPER_AMBER]: { riveId: 4, texture: eO("tex_outfit_04_camper_amber") },
        [eN.r.ATHLETE_BLOCKED]: { riveId: 5, texture: eO("tex_outfit_05_athlete_blocked") },
        [eN.r.ATHLETE_FADED]: { riveId: 5, texture: eO("tex_outfit_05_athlete_faded") },
        [eN.r.ATHLETE_CHECKERED]: { riveId: 5, texture: eO("tex_outfit_05_athlete_checkered") },
        [eN.r.ATHLETE_LINED]: { riveId: 5, texture: eO("tex_outfit_05_athlete_lined") },
        [eN.r.COWPOKE_ONYX]: { riveId: 6, texture: eO("tex_outfit_06_cowpoke_onyx") },
        [eN.r.COWPOKE_STEEL]: { riveId: 6, texture: eO("tex_outfit_06_cowpoke_steel") },
        [eN.r.COWPOKE_DENIM]: { riveId: 6, texture: eO("tex_outfit_06_cowpoke_denim") },
        [eN.r.COWPOKE_BLUSH]: { riveId: 6, texture: eO("tex_outfit_06_cowpoke_blush") },
        [eN.r.GOTH_SIREN]: { riveId: 7, texture: eO("tex_outfit_07_goth_siren") },
        [eN.r.GOTH_SERPENT]: { riveId: 7, texture: eO("tex_outfit_07_goth_serpent") },
        [eN.r.GOTH_RAVEN]: { riveId: 7, texture: eO("tex_outfit_07_goth_raven") },
        [eN.r.GOTH_VAMP]: { riveId: 7, texture: eO("tex_outfit_07_goth_vamp") },
        [eN.r.ASTRONAUT_STARDUST]: { riveId: 8, texture: eO("tex_outfit_08_astronaut_stardust") },
        [eN.r.ASTRONAUT_MARTIAN]: { riveId: 8, texture: eO("tex_outfit_08_astronaut_martian") },
        [eN.r.ASTRONAUT_SOLAR]: { riveId: 8, texture: eO("tex_outfit_08_astronaut_solar") },
        [eN.r.ASTRONAUT_COSMIC]: { riveId: 8, texture: eO("tex_outfit_08_astronaut_cosmic") },
        [eN.r.JESTER_CONFETTI]: { riveId: 9, texture: eO("tex_outfit_09_jester_confetti") },
        [eN.r.JESTER_CARNIVAL]: { riveId: 9, texture: eO("tex_outfit_09_jester_carnival") },
        [eN.r.JESTER_SUNRISE]: { riveId: 9, texture: eO("tex_outfit_09_jester_sunrise") },
        [eN.r.JESTER_NIGHTFALL]: { riveId: 9, texture: eO("tex_outfit_09_jester_nightfall") },
        [eN.r.TRASH_CAN_BLACKOUT]: { riveId: 2, texture: eO("tex_outfit_02_trash_blackout") },
        [eN.r.TRASH_CAN_CAUTION]: { riveId: 2, texture: eO("tex_outfit_02_trash_caution") },
        [eN.r.TRASH_CAN_BUBBLEGUM]: { riveId: 2, texture: eO("tex_outfit_02_trash_bubblegum") },
        [eN.r.TRASH_CAN_TOXIC]: { riveId: 2, texture: eO("tex_outfit_02_trash_toxic") },
        [eN.r.MAGE_SHADOW]: { riveId: 11, texture: eO("tex_outfit_11_mage_shadow") },
        [eN.r.MAGE_DUSK]: { riveId: 11, texture: eO("tex_outfit_11_mage_dusk") },
        [eN.r.MAGE_WILDWOOD]: { riveId: 11, texture: eO("tex_outfit_11_mage_wildwood") },
        [eN.r.MAGE_WINTER]: { riveId: 11, texture: eO("tex_outfit_11_mage_winter") },
        [eN.r.MECH_AERO]: { riveId: 12, texture: eO("tex_outfit_12_mech_aero") },
        [eN.r.MECH_VIPER]: { riveId: 12, texture: eO("tex_outfit_12_mech_viper") },
        [eN.r.MECH_ULTRAVIOLET]: { riveId: 12, texture: eO("tex_outfit_12_mech_ultraviolet") },
        [eN.r.MECH_SANDSTORM]: { riveId: 12, texture: eO("tex_outfit_12_mech_sandstorm") },
        [eN.r.KNIGHT_IRON]: { riveId: 13, texture: eO("tex_outfit_13_knight_iron") },
        [eN.r.KNIGHT_RUST]: { riveId: 13, texture: eO("tex_outfit_13_knight_rust") },
        [eN.r.KNIGHT_PETAL]: { riveId: 13, texture: eO("tex_outfit_13_knight_petal") },
        [eN.r.KNIGHT_GLACIER]: { riveId: 13, texture: eO("tex_outfit_13_knight_glacier") },
        [eN.r.MAGICAL_SAPPHIRE]: { riveId: 14, texture: eO("tex_outfit_14_magical_sapphire") },
        [eN.r.MAGICAL_AMETHYST]: { riveId: 14, texture: eO("tex_outfit_14_magical_amethyst") },
        [eN.r.MAGICAL_FROST]: { riveId: 14, texture: eO("tex_outfit_14_magical_frost") },
        [eN.r.MAGICAL_CITRINE]: { riveId: 14, texture: eO("tex_outfit_14_magical_citrine") },
    };
var eU = a(835517),
    eG = (((r = {}).SLOT = "slot"), (r.TRAIT = "trait"), (r.LAYOUT = "layout"), (r.ALWAYS = "always"), r);
let eH = /^tex_(aura|base_\d+|outfit)_/,
    eF = /^tex_(headwear|shoes|wearable|face)_(\d+)_/,
    eK = /^tex_face_([a-z]+)_/i,
    eB = {
        tex_env_labNight_bg: ["Desktop"],
        tex_env_labNight_bg_mobileLandscape: ["MobileLandscape"],
        tex_env_labNight_bg_mobilePortrait: ["MobilePortrait"],
        tex_env_labNight_fgLeft: ["Desktop"],
        tex_env_labNight_fgRight: ["Desktop"],
        tex_env_labNight_mgBottom: ["Desktop"],
        tex_env_labNight_mgBottomMobile: ["MobilePortrait", "MobileLandscape"],
        tex_env_labNight_sky: ["Desktop"],
    },
    ez = {
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
    eV = { columns: 1, rows: 1 },
    eW = { columns: 5, rows: 5 },
    eq = { columns: 6, rows: 8 },
    eY = {
        tex_aura_01_blossom: eW,
        tex_aura_02_prism: eW,
        tex_aura_03_shock: eW,
        tex_aura_04_blaze: eW,
        tex_aura_05_fated: eW,
        tex_aura_06_luster: eW,
        tex_aura_07_bubbly: eW,
        tex_aura_08_spooky: eW,
        tex_aura_09_cursed: eW,
        tex_aura_10_magnetic: eW,
        tex_aura_11_radioactive: eW,
        tex_aura_12_elemental: eW,
        tex_aura_13_shimmer: eW,
        tex_aura_14_witchy: eW,
        tex_wireframe_spritesheet: { columns: 12, rows: 6 },
        tex_wearable_10_sword_spritesheet: { columns: 5, rows: 4 },
        tex_wearable_11_deviantTail_smoke_active_spritesheet: eq,
        tex_wearable_11_deviantTail_smoke_idle_spritesheet: eq,
    },
    eZ = [1, 1.25, 1.5, 1.75, 2, 3, 4, 5],
    eX = Math.min(...eZ),
    eQ = Math.max(...eZ);
function eJ(e, t) {
    let { url: a, width: i, height: r, widthAt1x: n } = eR[e];
    if (null == n) return a;
    let s = 4096 / Math.max(i, r),
        c = Math.min((t * n) / i, s),
        d = s >= 1 && t >= Math.round(i / n);
    if (c >= 1 || d) return a;
    let { columns: l, rows: o } = eY[e] ?? eV,
        u = l * Math.round((i / l) * c),
        h = o * Math.round((r / o) * c);
    return `${a}?width=${u}&height=${h}`;
}
let e$ = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14"],
    e0 = e$.map((e) => `outfit${e}Image`),
    e1 = {
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
        [C.s9.EXIT]: 9,
        [C.s9.SUMMARY]: 8,
    },
    e2 = {
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
    e3 = { ...e2.MobilePortrait, gradientTopPosition: 25, gradientBottomPosition: 90 };
var e8 = a(722872),
    e7 = a(574381);
let e5 = "tex_wireframe_spritesheet",
    e6 = new Set([1, 9]),
    e9 = Object.keys(eR).map((e) => ({
        name: e,
        role: (function (e) {
            if (eH.test(e)) return { type: "slot" };
            let t = eB[e];
            if (null != t) return { type: "layout", layouts: t };
            let a = eF.exec(e);
            if (null != a) return { type: "trait", path: `${a[1]}ID`, riveId: Number(a[2]) };
            let i = eK.exec(e),
                r = null != i ? ez[i[1].toLowerCase()] : void 0;
            return null != r ? { type: "trait", path: "faceID", riveId: r } : { type: "always" };
        })(e),
        swapKey: (0, e7.un)() ? `${e}-${eR[e].riveId}` : e,
    }));
function e4(e) {
    let { faceID: t, headwearID: a, shoesID: i, wearableID: r, chapterID: n, device: s } = e;
    return p.useMemo(() => {
        var e;
        let c;
        return (
            (e = { faceID: t, headwearID: a, shoesID: i, wearableID: r }),
            (c = new Set()),
            e9.forEach((t) => {
                let { name: a, role: i } = t;
                switch (i.type) {
                    case eG.SLOT:
                        break;
                    case eG.TRAIT:
                        e[i.path] === i.riveId && c.add(a);
                        break;
                    case eG.LAYOUT:
                        i.layouts.includes(s) && c.add(a);
                        break;
                    case eG.ALWAYS:
                        (a !== e5 || e6.has(n)) && c.add(a);
                }
            }),
            c
        );
    }, [t, a, i, r, n, s]);
}
let te = new Set(),
    tt = { [C.s9.FINALIZE]: new Set([e5]) };
var ta = a(435558);
let ti = (0, a(196765).v)(() => ({ hoveredOption: void 0 })),
    tr = (0, ta.debounce)((e) => ti.setState({ hoveredOption: e }), 250);
function tn(e) {
    let { hoveredOption: t, isDelayed: a = !1 } = e;
    a ? tr(t) : (tr.cancel(), ti.setState({ hoveredOption: t }));
}
(a(393431), a(532706), a(42231), a(232424), a(949626), a(767709), a(65162));
var ts = a(971940);
async function tc(e) {
    try {
        let t = await fetch(e);
        if (!t.ok) return null;
        return await (0, ts.decodeImage)(new Uint8Array(await t.arrayBuffer()));
    } catch {
        return null;
    }
}
var td = a(168862);
function tl(e) {
    let t,
        a,
        { stage: i, isHidden: r, onExitPlaying: s } = e,
        c = (0, g.bG)([l.A], () => {
            let e = l.A.windowSize();
            return (function (e, t) {
                let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (a) return eX;
                let i = Math.max(e / 960, t / 540) * (0, eU.A)();
                return eZ.find((e) => e >= i) ?? eQ;
            })(e.width, e.height);
        }),
        [d, o] = p.useState(c);
    c > d && o(c);
    let u =
            ((t = (0, g.bG)([h.A], () => h.A.selectedCharacterTraits)),
            (a = ti((e) => e.hoveredOption)),
            p.useMemo(() => (null != a ? { ...t, [a.trait]: a.optionId } : t), [t, a])),
        f = (0, g.bG)([B.Ay], () => B.Ay.useReducedMotion),
        b = p.useMemo(
            () =>
                (function (e) {
                    let { stage: t, isHidden: a, traits: i, layout: r, textureScale: n } = e,
                        { base: s, shoes: c, outfit: d, face: l, hat: o, wearable: u, aura: h } = (0, H.XI)(i),
                        f = eP[d],
                        b = {};
                    return (
                        e$.forEach((e) => {
                            let t = Number(e) === f?.riveId ? f.texture : eM;
                            b[`outfit${e}Image`] = eJ(t.name, n);
                        }),
                        {
                            device: r,
                            chapterID: a && t === C.s9.FACE ? e1[C.s9.IDLE] : e1[t],
                            faceID: l,
                            shoesID: c,
                            headwearID: ey[o],
                            wearableID: eL[u],
                            outfitID: f?.riveId ?? 0,
                            auraImage: eJ(ek[h].name, n),
                            baseColorImage: eJ(eD[s].name, n),
                            ...("MobilePortrait" === r && t === C.s9.INTRODUCTION ? e3 : e2[r]),
                            ...b,
                        }
                    );
                })({ stage: i, isHidden: r, traits: u, layout: "Desktop", textureScale: d }),
            [i, r, u, d],
        ),
        [_, x] = p.useState(null),
        A = _ ?? b,
        v = _ === b,
        w = (function (e) {
            let { visibleDataBinding: t, requestedDataBinding: a, textureScale: i, preloadedTextureNames: r } = e,
                n = (function (e) {
                    let { visibleTextureNames: t, requestedTextureNames: a } = e,
                        [i, r] = p.useState(t),
                        [n, s] = p.useState(t);
                    if (t !== n) {
                        s(t);
                        let e = new Set(i);
                        (t.forEach((t) => e.add(t)), r(e));
                    }
                    return (
                        p.useEffect(() => {
                            let e = setTimeout(() => r(t), 600);
                            return () => clearTimeout(e);
                        }, [t]),
                        p.useMemo(() => new Set([...i, ...a]), [i, a])
                    );
                })({ visibleTextureNames: e4(t), requestedTextureNames: e4(a) });
            return p.useMemo(() => {
                var e;
                let t;
                return (
                    (e = new Set([...n, ...r])),
                    (t = {}),
                    e9.forEach((a) => {
                        let { name: r, swapKey: n } = a,
                            s = e.has(r) ? eJ(r, i) : eM.url;
                        t[n] = { source: { uri: s } };
                    }),
                    t
                );
            }, [n, r, i]);
        })({
            visibleDataBinding: A,
            requestedDataBinding: b,
            textureScale: d,
            preloadedTextureNames: (function (e, t) {
                let [a, i] = p.useState(null),
                    r = tt[e],
                    n = null != r && (e === a || t),
                    s = n ? e : null;
                return (s !== a && i(s), n ? r : te);
            })(i, v),
        }),
        {
            assetLoader: I,
            onLoad: E,
            textureManager: j,
        } = (function () {
            let e = p.useRef(new Map()),
                [t, a] = p.useState(null),
                i = p.useCallback((t) => !!t.isImage && t.name in eR && (e.current.set(t.name, t), !0), []);
            return {
                assetLoader: i,
                onLoad: p.useCallback(() => {
                    (a(e.current), (e.current = new Map()));
                }, []),
                textureManager: p.useMemo(
                    () =>
                        null == t
                            ? null
                            : {
                                  load: tc,
                                  swap: (e) => e.forEach((e, a) => t.get(a)?.setRenderImage(e)),
                                  release: (e) => e.forEach((e) => e.unref()),
                              },
                    [t],
                ),
            };
        })(),
        S = p.useRef(null),
        N = p.useRef(r);
    p.useEffect(() => {
        ((N.current = r), r ? S.current?.pause() : S.current?.play());
    }, [r]);
    let T = p.useCallback(() => {
            (E(), N.current && S.current?.pause());
        }, [E]),
        R = (function (e) {
            let { textureManager: t, referencedAssets: a, initialReferencedAssets: i } = e,
                r = p.useRef(new Map()),
                [n, s] = p.useState(i);
            return (
                p.useEffect(() => {
                    r.current = new Map(
                        Object.entries(i ?? {}).map((e) => {
                            let [t, { source: a }] = e;
                            return [t, a.uri];
                        }),
                    );
                }, [t, i]),
                p.useEffect(() => {
                    if (null == t) return;
                    let e = !1;
                    return (
                        (async () => {
                            (await (async function (e) {
                                let { textureManager: t, shownUrls: a, referencedAssets: i, isStale: r } = e,
                                    n = new Map();
                                if (
                                    (Object.entries(i).forEach((e) => {
                                        let [t, { source: i }] = e;
                                        a.get(t) !== i.uri && n.set(t, i.uri);
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
                                    !r())
                                ) {
                                    let e = new Map();
                                    (n.forEach((t, i) => {
                                        let r = s.get(t);
                                        null != r && (e.set(i, r), a.set(i, t));
                                    }),
                                        t.swap(e));
                                }
                                t.release(Array.from(s.values()));
                            })({ textureManager: t, shownUrls: r.current, referencedAssets: a, isStale: () => e }),
                                e || s(a));
                        })(),
                        () => {
                            e = !0;
                        }
                    );
                }, [t, a]),
                n === a
            );
        })({ textureManager: j, referencedAssets: w }),
        {
            dataBinding: O,
            isOutfitPreloaded: M,
            onDataBindingChange: y,
        } = (function (e) {
            var t;
            let { visibleDataBinding: a, requestedDataBinding: i } = e,
                [r, n] = p.useState({}),
                s = (t = i.outfitID) > 0 ? e0[t - 1] : null,
                c = null != s ? i[s] : void 0,
                d = null == s || a?.[s] === c || r[s] === c,
                l = a ?? i;
            return {
                dataBinding: p.useMemo(() => (null == s || l[s] === c ? l : { ...l, [s]: c }), [l, s, c]),
                isOutfitPreloaded: d,
                onDataBindingChange: p.useMemo(() => {
                    let e = {};
                    return (
                        e0.forEach((t) => {
                            e[t] = (e) => {
                                n((a) => (a[t] === e ? a : { ...a, [t]: e }));
                            };
                        }),
                        e
                    );
                }, []),
            };
        })({ visibleDataBinding: _, requestedDataBinding: b });
    R && M && _ !== b && x(b);
    let L = i === C.s9.EXIT && v;
    p.useEffect(() => {
        L && s();
    }, [L, s]);
    let k = (function (e) {
            let { stage: t, dataBinding: a } = e,
                i = (0, g.bG)([B.Ay], () => B.Ay.useReducedMotion),
                r = t === C.s9.INTRODUCTION && !i,
                [n, s] = p.useState(+!r),
                [c, d] = p.useState(r);
            return (
                r !== c && (d(r), s(+!r)),
                p.useEffect(() => {
                    if (!r) return;
                    let e = Date.now() + 1800,
                        t = requestAnimationFrame(function a() {
                            let i = Math.max(Math.min(Date.now() - e, 1e3), 0);
                            (s((0, e8.easeOutCubic)(i, 0, 1, 1e3)), i >= 1e3 || (t = requestAnimationFrame(a)));
                        });
                    return () => cancelAnimationFrame(t);
                }, [r]),
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
        })({ stage: i, dataBinding: O }),
        D = p.useMemo(() => ({ ...k, mobileLift: 0, reducedMotion: f }), [k, f]);
    return (0, n.jsx)("div", {
        role: "img",
        "aria-label": (0, eE.O)(u),
        className: m()(td.dw, { [td.RK]: null != _ }),
        children: (0, n.jsx)(eI.W, {
            artboard: "AB_Master",
            stateMachine: "SM_Master",
            fit: "layout",
            alignment: "center",
            ref: S,
            assetLoader: I,
            onLoad: T,
            listenOnDocumentBody: !f,
            withReducedMotion: "play",
            dataBinding: D,
            onDataBindingChange: y,
            className: td.lW,
        }),
    });
}
var to = a(840527);
function tu(e) {
    let { stage: t, hiddenBy: a, onExitPlaying: i, className: r, children: s } = e,
        c = a === z.STATS,
        d = a === z.CUSTOMIZATION_ROUTE_CHANGE,
        [l, o] = p.useState(c);
    !c && l && o(!1);
    let u = (c && !l) || d,
        { isMountDelayed: h } = (function (e) {
            let [t, a] = p.useState(e);
            return (
                !e && t && a(!1),
                p.useEffect(() => {
                    if (!t) return;
                    let e = setTimeout(() => a(!1), ea);
                    return () => clearTimeout(e);
                }, [t]),
                { isMountDelayed: t }
            );
        })(c),
        f = (0, eA.p0)({ value: t, shouldUpdate: !u }) ?? t,
        b = (0, eA.p0)({ value: s, shouldUpdate: !u }),
        _ = (0, eA.p0)({ value: a, shouldUpdate: null != a }) === z.CUSTOMIZATION_ROUTE_CHANGE;
    return (0, n.jsxs)(ew, {
        visible: null == a,
        enter: _ ? ee : $,
        exit: d ? ee : et,
        keepMounted: !0,
        onExitComplete: () => {
            c && o(!0);
        },
        className: r,
        children: [
            (0, n.jsx)("div", {
                className: to.q,
                children: !h && (0, n.jsx)(tl, { stage: f, isHidden: l, onExitPlaying: i }),
            }),
            null != b && (0, n.jsx)("div", { className: to.q, children: b }),
        ],
    });
}
function th(e) {
    let { animatedSrc: t, staticSrc: a, className: i } = e,
        r = (0, g.bG)([B.Ay], () => B.Ay.useReducedMotion);
    return (0, n.jsx)("img", { src: r ? a : t, alt: "", className: i });
}
var tf = a(740281),
    tb = a(766089),
    tp = a(767988);
let t_ = { animatedSrc: tb.A, staticSrc: tp.A };
function tm(e) {
    let { activeRoute: t } = e,
        { animatedSrc: a, staticSrc: i } = (0, g.cf)(
            [h.A],
            () => {
                switch (t) {
                    case C.gr.SUMMARY:
                    case C.gr.SHARE:
                        let e = (0, E.o)(h.A.character),
                            { clydeLogoImage: a, clydeLogoStaticImage: i } = (0, E.j)(e);
                        return { animatedSrc: a, staticSrc: i };
                    default:
                        return t_;
                }
            },
            [t],
        );
    return (0, n.jsx)(th, { animatedSrc: a, staticSrc: i, className: tf.w });
}
var tx = a(756408);
function tg() {
    let e = p.useRef(null);
    return (
        p.useLayoutEffect(() => {
            let t = e.current;
            null != t && ((t.tabIndex = -1), t.focus({ preventScroll: !0 }));
        }, []),
        e
    );
}
var tA = a(834730),
    tv = a(534514),
    tw = a(504736);
function tI(e) {
    let { children: t, className: a, ...i } = e;
    return (0, n.jsx)(tA.E, { ...i, className: m()(tw.Q, a), color: "none", children: t });
}
function tE(e) {
    let { children: t, className: a, ...i } = e,
        r = tg();
    return (0, n.jsx)(tv.D, { ...i, ref: r, className: m()(tw.Q, a), color: "none", children: t });
}
var tj = a(271427);
function tS(e) {
    let { children: t, className: a, style: i } = e;
    return (0, n.jsx)(tI, { tag: "span", variant: "mono-md/bold", className: m()(tj.T, a), style: i, children: t });
}
var tC = a(852717),
    tN = a(792996),
    tT = a(383931);
function tR(e) {
    let { percent: t } = e;
    return (0, n.jsx)(tS, {
        className: tT.t,
        children: tN.intl.formatToPlainString(tC.default.fOGKA4, { percent: t }),
    });
}
var tO = a(646692);
function tM(e) {
    let { icon: t, value: a, topPercent: i, children: r } = e,
        s = tg(),
        c =
            null != i
                ? tN.intl.formatToPlainString(tC.default.USo6cU, { value: a, label: r, percent: i })
                : tN.intl.formatToPlainString(tC.default["+CCx/D"], { value: a, label: r });
    return (0, n.jsxs)("div", {
        ref: s,
        role: "heading",
        "aria-level": 2,
        children: [
            (0, n.jsxs)("div", {
                className: tO.dJ,
                "aria-hidden": !0,
                children: [
                    null != i && (0, n.jsx)(tR, { percent: i }),
                    (0, n.jsxs)("div", {
                        className: tO.p,
                        children: [
                            (0, n.jsx)(tI, {
                                variant: "heading-xxl/medium",
                                className: tO.Uq,
                                children: a.toLocaleString(tN.intl.currentLocale),
                            }),
                            (0, n.jsxs)("div", {
                                className: tO.Pf,
                                children: [
                                    (0, n.jsx)(t, { size: "xs", color: "currentColor" }),
                                    (0, n.jsx)(tI, { variant: "heading-xs/semibold", className: tO.QK, children: r }),
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
var ty = a(303453);
let tL = {
    [j.v7.FACE]: tC.default.q8GA6h,
    [j.v7.OUTFIT]: tC.default["xGh/fq"],
    [j.v7.OUTFIT_COLOR]: tC.default.IgiEDV,
    [j.v7.HAT]: tC.default.QqeBEO,
    [j.v7.WEARABLE]: tC.default.l57q3i,
    [j.v7.AURA]: tC.default["fYp+yq"],
    [j.v7.SHOES]: tC.default.BaI4wD,
    [j.v7.BASE]: tC.default.SMXZXX,
};
function tk(e) {
    let { customizationOption: t, earnedCount: a, totalCount: i } = e;
    return (0, n.jsx)(tA.E, {
        variant: "body-md/medium",
        color: "text-subtle",
        className: ty.k,
        children: tN.intl.format(tL[t], {
            earnedCount: a,
            totalCount: i,
            countHook: (e, t) =>
                (0, n.jsx)(tI, { tag: "span", variant: "mono-md/bold", className: ty.U, children: e }, t),
        }),
    });
}
let tD =
    "https://cdn.discordapp.com/assets/content/48cbcb920dfd15e45e7fe3f297ede63a7891cb0eee9fc44f27053d05d2c6b5ca.mp3";
var tP = a(11044),
    tU = a(218546),
    tG = a(646514),
    tH = a(403581),
    tF = a(461872),
    tK = a(559265);
function tB(e) {
    let { rarity: t } = e,
        a = p.useMemo(() => ({ "--custom-checkpoint-rarity-color": el.Zy[t] }), [t]);
    return t === tU.K.NITRO
        ? (0, n.jsx)(tH.NitroWheelIcon, { size: "custom", color: tG.A.colors.ICON_SUBTLE, className: tK.d7 })
        : (0, n.jsx)("span", { className: tK.oG, style: a });
}
function tz(e) {
    let {
            traitOption: t,
            groupName: a,
            isSelected: i,
            hideRarity: r,
            onSelectOption: s,
            onHoverOption: c,
            disabled: d = !1,
        } = e,
        { trait: l, optionId: o, rarity: u, asset: h, status: f } = t,
        b = f === tF.eP.LOCKED,
        _ = p.useMemo(() => {
            if (null == h) return null;
            let e = Math.round(80 * (0, eU.A)());
            return `${h}?width=${e}&height=${e}`;
        }, [h]);
    return (0, n.jsxs)("label", {
        className: m()(tK.uK, { [tK.wH]: i, [tK.dv]: (0, j.C5)(t), [tK.xt]: b, [tK.Ns]: f === tF.eP.NITRO_LOCKED }),
        onMouseEnter: () => c(t),
        onFocus: function () {
            c(t);
        },
        children: [
            (0, n.jsx)(v.A, {
                children: (0, n.jsx)("input", {
                    type: "radio",
                    name: a,
                    checked: i,
                    disabled: d,
                    "aria-disabled": d ? void 0 : b,
                    onChange: function () {
                        d || b || s(l, o);
                    },
                    "aria-label": (0, j.v2)(t, { skipRarity: r, skipDescription: !1 }),
                }),
            }),
            null != _ && (0, n.jsx)("img", { src: _, alt: "", draggable: !1, className: tK.Sl }),
            !r && null != u && (0, n.jsx)(tB, { rarity: u }),
        ],
    });
}
var tV = a(541170),
    tW = a(974862),
    tq = a(142389),
    tY = a(211235),
    tZ = a(230532),
    tX = a(110601),
    tQ = a(917970);
function tJ(e) {
    let { customizationOption: t, traitOptions: a, selectedOption: i, onSelectOption: r, disabled: s = !1 } = e,
        c = p.useId(),
        d = !(0, j.Ux)(t),
        l = eh(
            "https://cdn.discordapp.com/assets/content/fc5527a1a369d8982c6e6fa588f732c7c5364ff00ddd0cf51646f05ad423af36.mp3",
        ),
        o = eh(tD);
    ((0, es.Ay)(() => {
        [tW, tQ, tq, tY, tX, tZ].forEach((e) => (0, tP.N)(e));
    }),
        p.useEffect(() => () => tn({ hoveredOption: void 0 }), [t]));
    let u = p.useCallback(
            (e, t) => {
                (tn({ hoveredOption: void 0 }), o(), r(e, t));
            },
            [r, o],
        ),
        h = p.useCallback(
            (e) => {
                (l(), tn({ hoveredOption: e.optionId !== i?.optionId ? e : void 0, isDelayed: !0 }));
            },
            [l, i],
        );
    return (0, n.jsx)("div", {
        onMouseLeave: () => tn({ hoveredOption: void 0 }),
        children: (0, n.jsx)("div", {
            role: "radiogroup",
            "aria-label": (0, j.cq)(t),
            className: tV.V,
            onBlur: (e) => {
                e.currentTarget.contains(e.relatedTarget) ||
                    e.currentTarget.matches(":hover") ||
                    tn({ hoveredOption: void 0 });
            },
            children: a.map((e) =>
                (0, n.jsx)(
                    tz,
                    {
                        traitOption: e,
                        groupName: c,
                        isSelected: e.optionId === i?.optionId,
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
var t$ = a(28863),
    t0 = a(793574),
    t1 = a(778705),
    t2 = a(647093);
function t3(e) {
    let { rarity: t } = e,
        a = p.useMemo(() => ({ "--custom-checkpoint-rarity-background": el.Zy[t] }), [t]);
    return (0, n.jsx)(tS, { className: t2.q, style: a, children: tN.intl.string(el.iG[t]) });
}
var t8 = a(829870);
function t7(e) {
    let { title: t, rarity: a, description: i } = e;
    return (0, n.jsxs)("div", {
        className: t8.z,
        children: [
            (0, n.jsxs)("div", {
                className: t8.D,
                children: [
                    (0, n.jsx)(tA.E, { tag: "div", variant: "heading-sm/semibold", color: "text-strong", children: t }),
                    null != a && (0, n.jsx)(t3, { rarity: a }),
                ],
            }),
            null != i && (0, n.jsx)(tA.E, { variant: "body-md/medium", color: "text-subtle", children: i }),
        ],
    });
}
function t5(e) {
    return e.status !== tF.eP.NITRO_LOCKED
        ? (0, j.Oq)(e)
        : tN.intl.format(tC.default.E6AfCb, {
              subscribeHook: (e, t) =>
                  (0, n.jsx)(
                      t$.Anchor,
                      {
                          onClick: () => (0, t1.A)({ analyticsLocations: [t0.A.CHECKPOINT, t0.A.CHECKPOINT_TRAIT] }),
                          children: e,
                      },
                      t,
                  ),
          });
}
function t6(e) {
    let { customizationOption: t, selectedOption: a } = e,
        i = ti((e) => e.hoveredOption) ?? a;
    return null == i
        ? null
        : (0, n.jsx)(t7, { title: i.getName(), rarity: (0, j.Ux)(t) ? i.rarity : void 0, description: t5(i) });
}
var t9 = a(509063);
function t4(e) {
    let { children: t, details: a } = e;
    return (0, n.jsxs)("div", {
        className: t9.Nz,
        children: [
            (0, n.jsx)("div", { className: t9.fF, children: t }),
            null != a && (0, n.jsx)("div", { className: t9.zH, children: a }),
        ],
    });
}
var ae = a(51104);
function at(e) {
    let { rarity: t, isSavedOption: a, visibleRarities: i, hasNitroSubscription: r } = e;
    return a
        ? tF.eP.UNLOCKED
        : null == t || i.has(t)
          ? t !== tU.K.NITRO || r
              ? tF.eP.UNLOCKED
              : tF.eP.NITRO_LOCKED
          : tF.eP.LOCKED;
}
function aa(e, t) {
    return e === j.v7.OUTFIT ? (null != t ? (0, H.FA)(t) : void 0) : t;
}
function ai(e) {
    let { customizationOption: t } = e,
        {
            optionIds: a,
            selectedOptionId: i,
            savedOptionId: r,
            onSelectOption: n,
        } = (function (e) {
            let { customizationOption: t, onSelectOption: a } = e,
                i = j.hw[t],
                { selectedOptionId: r, savedOptionId: n } = (0, g.cf)([h.A], () => ({
                    selectedOptionId: aa(t, h.A.selectedCharacterTraits[i]),
                    savedOptionId: aa(t, h.A.character?.[i]),
                })),
                s = p.useCallback(
                    (e, t) => {
                        if (t === r) return;
                        let i = (0, H.$C)(e, t),
                            s = at({
                                rarity: i,
                                isSavedOption: n === t,
                                visibleRarities: (0, H.mf)(e, h.A.stats),
                                hasNitroSubscription: (0, G.ki)(U.default.getCurrentUser()),
                            });
                        ((0, b.dw)(e, t, s, i), a(e, t));
                    },
                    [a, n, r],
                );
            return {
                optionIds: (function (e, t) {
                    switch (e) {
                        case j.v7.OUTFIT:
                            return H.ps;
                        case j.v7.OUTFIT_COLOR:
                            return (0, H.wD)(t ?? eN.r.NONE);
                        default:
                            return;
                    }
                })(t, r),
                selectedOptionId: r,
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
            let { customizationOption: t, savedOptionId: a, rarityOrder: i, optionIds: r } = e,
                n = (0, g.bG)([h.A], () => h.A.stats),
                s = (0, g.bG)([U.default], () => (0, G.ki)(U.default.getCurrentUser())),
                c = p.useMemo(() => (0, j.p8)(i), [i]);
            return p.useMemo(() => {
                let e = j.hw[t],
                    i = t === j.v7.OUTFIT_COLOR ? ae.x : ae.$[e],
                    d = (0, H.mf)(e, n),
                    l = [],
                    o = 0,
                    u = 0;
                for (let t of r ?? H.Rk[e]) {
                    let r = (0, H.$C)(e, t),
                        n = at({ rarity: r, isSavedOption: a === t, visibleRarities: d, hasNitroSubscription: s }),
                        c = n === tF.eP.UNLOCKED && (r !== tU.K.NITRO || s);
                    (null != r && o++,
                        null != r && c && u++,
                        l.push({
                            trait: e,
                            optionId: t,
                            asset: H.qM[e][t]?.thumbnail,
                            rarity: r,
                            status: n,
                            getName: () => {
                                let e = i[t];
                                return null != e ? tN.intl.string(e) : "";
                            },
                        }));
                }
                l.sort(c);
                let h = l.filter((e) => {
                    let { status: t } = e;
                    return t !== tF.eP.LOCKED;
                });
                return { traitOptions: l, availableTraitOptions: h, totalCount: o, earnedCount: u };
            }, [t, s, r, c, a, n]);
        })({ customizationOption: t, savedOptionId: r, rarityOrder: el.FG, optionIds: a }),
        o = p.useMemo(
            () =>
                c.find((e) => {
                    let { optionId: t } = e;
                    return t === i;
                }) ?? c[0],
            [i, c],
        );
    return (
        !(function (e) {
            let { availableTraitOptions: t, selectedOptionId: a, onSelectOption: i, isPaused: r = !1 } = e,
                n = t[0],
                s = t.some((e) => e.optionId === a);
            p.useEffect(() => {
                r || null == n || s || i(n.trait, n.optionId);
            }, [n, s, i, r]);
        })({ availableTraitOptions: c, selectedOptionId: i, onSelectOption: u.IB }),
        { traitOptions: s, selectedOption: o, totalCount: d, earnedCount: l, onSelectOption: n }
    );
}
function ar(e) {
    let { customizationOption: t } = e,
        {
            traitOptions: a,
            selectedOption: i,
            totalCount: r,
            earnedCount: s,
            onSelectOption: c,
        } = ai({ customizationOption: t });
    return (0, n.jsxs)(t4, {
        details: (0, n.jsx)(t6, { customizationOption: t, selectedOption: i }),
        children: [
            (0, n.jsx)(tk, { customizationOption: t, earnedCount: s, totalCount: r }),
            (0, n.jsx)(tJ, { customizationOption: t, traitOptions: a, selectedOption: i, onSelectOption: c }),
        ],
    });
}
var an = a(71678);
function as(e) {
    let { children: t, className: a } = e;
    return (0, n.jsx)("div", { className: m()(an.n, a), children: t });
}
function ac() {
    let e = (0, g.bG)([h.A], () => h.A.stats?.emojis);
    return (0, n.jsxs)(as, {
        children: [
            (0, n.jsx)(tM, {
                icon: tx.EmojiSlightlySmilingFaceIcon,
                value: Math.round(e?.numEmojisSent ?? 0),
                topPercent: (0, ed.bD)(e?.numEmojisSentPercentile),
                children: tN.intl.string(tC.default.ZTDCIv),
            }),
            (0, n.jsx)(ar, { customizationOption: j.v7.SHOES }),
        ],
    });
}
var ad = a(937383);
function al(e) {
    let { selectedOption: t } = e,
        a = ti((e) => e.hoveredOption) ?? t;
    return null == a
        ? null
        : (0, n.jsx)(t7, {
              title: (0, n.jsxs)(n.Fragment, {
                  children: [
                      a.getName(),
                      " ",
                      (0, n.jsxs)(tA.E, {
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
              description: t5(a),
          });
}
function ao(e) {
    let { disabled: t } = e,
        { traitOptions: a, selectedOption: i, onSelectOption: r } = ai({ customizationOption: j.v7.OUTFIT_COLOR });
    return (0, n.jsx)(t4, {
        details: (0, n.jsx)(al, { selectedOption: i }),
        children: (0, n.jsx)(tJ, {
            customizationOption: j.v7.OUTFIT_COLOR,
            traitOptions: a,
            selectedOption: i,
            onSelectOption: r,
            disabled: t,
        }),
    });
}
function au() {
    return (0, n.jsx)(t4, {
        children: (0, n.jsx)(t7, {
            title: tN.intl.string(tC.default.zsYYN1),
            description: tN.intl.string(tC.default.BkuqWx),
        }),
    });
}
function ah(e) {
    let { lastColorwayIdByOutfitId: t, disabled: a } = e,
        { traitOptions: i, selectedOption: r, onSelectOption: s } = ai({ customizationOption: j.v7.OUTFIT }),
        c = p.useMemo(() => (0, j.G5)(i, t), [t, i]);
    return (0, n.jsx)(t4, {
        details: (0, n.jsx)(t6, { customizationOption: j.v7.OUTFIT, selectedOption: r }),
        children: (0, n.jsx)(tJ, {
            customizationOption: j.v7.OUTFIT,
            traitOptions: c,
            selectedOption: r,
            onSelectOption: function (e, a) {
                s(e, t.get(a) ?? a);
            },
            disabled: a,
        }),
    });
}
function af(e) {
    let { customizationOption: t, disabled: a } = e,
        { traitOptions: i, selectedOption: r, onSelectOption: s } = ai({ customizationOption: t });
    return (0, n.jsx)(t4, {
        details: (0, n.jsx)(t6, { customizationOption: t, selectedOption: r }),
        children: (0, n.jsx)(tJ, {
            customizationOption: t,
            traitOptions: i,
            selectedOption: r,
            onSelectOption: s,
            disabled: a,
        }),
    });
}
function ab(e) {
    let { customizationOption: t, lastColorwayIdByOutfitId: a, disabled: i } = e;
    switch (t) {
        case j.v7.OUTFIT:
            return (0, n.jsx)(ah, { lastColorwayIdByOutfitId: a, disabled: i });
        case j.v7.OUTFIT_COLOR:
            return (0, n.jsx)(ao, { disabled: i });
        default:
            return (0, n.jsx)(af, { customizationOption: t, disabled: i });
    }
}
function ap(e) {
    let { id: t, customizationOption: a, disabled: i } = e,
        r = (function () {
            let e = (0, g.bG)([h.A], () => h.A.selectedCharacterTraits[P.V.OUTFIT]),
                [t, a] = p.useState(new Map()),
                i = null != e ? (0, H.FA)(e) : void 0;
            return (null != e && null != i && t.get(i) !== e && a(new Map(t).set(i, e)), t);
        })(),
        s = (0, g.bG)(
            [h.A],
            () => {
                if (a !== j.v7.OUTFIT_COLOR) return !1;
                let e = h.A.selectedCharacterTraits[P.V.OUTFIT];
                return null == e || (0, H.nb)(P.V.OUTFIT, e);
            },
            [a],
        );
    return (0, n.jsx)("div", {
        role: "tabpanel",
        id: t,
        "aria-label": (0, j.cq)(a),
        tabIndex: s ? 0 : void 0,
        className: ad.n,
        children: s
            ? (0, n.jsx)(au, {})
            : (0, n.jsx)(ab, { customizationOption: a, lastColorwayIdByOutfitId: r, disabled: i }),
    });
}
var a_ = a(265872),
    am = a(320448),
    ax = a(315710),
    ag = a(444927);
let aA = { width: 180, height: 240 },
    av = { width: 220, height: 293 };
function aw(e, t) {
    let { width: a, height: i } = e;
    return {
        "--custom-checkpoint-game-art-width": t,
        "--custom-checkpoint-game-art-height": `calc(var(--custom-checkpoint-game-art-width) * ${i} / ${a})`,
    };
}
let aI = aw(aA, "clamp(135px, 17.5vh, 180px)"),
    aE = aw(av, "clamp(165px, 21.5vh, 220px)"),
    aj = {
        "--custom-checkpoint-primary": el.Kr,
        "--custom-checkpoint-dark-cyan": el.ow,
        "--custom-checkpoint-button-border": el.ow,
        "--custom-checkpoint-button-shadow": el.zj,
        "--custom-checkpoint-white": el.Ve,
        "--custom-checkpoint-guild-card-background": el.LM,
        "--custom-checkpoint-background-gradient-start": el.bI,
    };
var aS = a(580814);
function aC(e) {
    let {
            menuRef: t,
            options: a,
            activeCustomizationOption: i,
            returnRef: r,
            onSelectOption: s,
            onClose: c,
            focusMenu: d,
            onMouseEnter: l,
            onMouseLeave: o,
        } = e,
        u = p.useRef([]),
        h = (0, ag.A)(() => Math.max(a.indexOf(i), 0)),
        [f, b] = p.useState(null);
    function _(e) {
        let t = (e + a.length) % a.length;
        (b(t), u.current[t]?.focus());
    }
    return (
        (0, ax.tj)(t, { disable: !d, disableReturn: !0 }),
        p.useEffect(() => {
            d && u.current[h]?.focus();
        }, [h, d]),
        (0, n.jsx)("div", {
            ref: t,
            role: "menu",
            tabIndex: -1,
            "aria-label": tN.intl.string(tC.default.Zl5vPW),
            className: aS.MK,
            style: aj,
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
                        (c(), r.current?.focus());
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
                        "aria-checked": e === i,
                        tabIndex: -1,
                        className: m()(aS.AS, { [aS.dT]: f === t }),
                        onFocus: () => b(t),
                        onMouseEnter: (e) => {
                            (b(t), d && e.currentTarget.focus());
                        },
                        onClick: () => s(e),
                        children: (0, n.jsx)(tA.E, {
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
var aN = a(421773),
    aT = a(769909);
function aR(e) {
    var t;
    let a,
        {
            activeCustomizationOption: i,
            onSelectOption: r,
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
            let { activeCustomizationOption: t, onSelectOption: a, blockedTrait: i, disabled: r } = e,
                n = p.useRef(null),
                s = p.useRef(null),
                c = j.kB.includes(t),
                d = (function (e) {
                    let t = j.kB.includes(e),
                        [a, i] = p.useState(t ? e : null);
                    return (t && a !== e && i(e), a);
                })(t),
                l = r || null != i,
                [o, u] = p.useState(!1),
                {
                    isHovered: h,
                    setIsHovered: f,
                    onMouseEnter: b,
                    onMouseLeave: _,
                    cancelTimers: m,
                } = (0, aN.A)(100, 300);
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
                    null != i ? eu(i) : r || (m(), u(!0), f(!0));
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
        })({ activeCustomizationOption: i, onSelectOption: r, blockedTrait: d, disabled: l }),
        S = h ? "more" : i,
        { tabListRef: C, focusAdjacentTab: N } =
            ((t = [...j.IS, "more"]),
            {
                tabListRef: (a = p.useRef(null)),
                focusAdjacentTab: function (e, i) {
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
                    })(t.indexOf(e), t.length, i);
                    return (a.current?.querySelectorAll('[role="tab"]')[r]?.focus(), t[r]);
                },
            }),
        T = p.useId(),
        R = null != d ? T : void 0,
        O = null != f ? (0, j.cq)(f) : null;
    function M(e) {
        null != d ? eu(d) : l || (r(e), g());
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
            className: m()(aT.Mf, { [aT.OS]: "more" === e, [aT.vu]: t }),
        };
    }
    return (0, n.jsxs)("div", {
        ref: C,
        role: "tablist",
        "aria-label": tN.intl.string(tC.default.Zl5vPW),
        className: aT.vR,
        children: [
            j.IS.map((e) => {
                let t = (0, j.cq)(e);
                return (0, n.jsx)(
                    "button",
                    {
                        ...k(e),
                        "aria-label": t,
                        children: (0, n.jsx)(tA.E, {
                            tag: "span",
                            variant: "heading-sm/semibold",
                            color: "none",
                            children: t,
                        }),
                    },
                    e,
                );
            }),
            (0, n.jsx)(a_.Y, {
                targetElementRef: o,
                shouldShow: b,
                onRequestOpen: x,
                onRequestClose: A,
                position: "right",
                align: "top",
                spacing: 8,
                renderPopout: () =>
                    (0, n.jsx)(aC, {
                        menuRef: u,
                        options: j.kB,
                        activeCustomizationOption: i,
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
                                ? tN.intl.formatToPlainString(tC.default.QX1VPx, { category: O })
                                : tN.intl.string(tC.default.jepsQ6),
                        "aria-haspopup": "menu",
                        "aria-expanded": b,
                        onMouseEnter: I,
                        onMouseLeave: E,
                        children: [
                            (0, n.jsx)(tA.E, {
                                tag: "span",
                                variant: "heading-sm/semibold",
                                color: "none",
                                children: O ?? tN.intl.string(tC.default["iXpQc+"]),
                            }),
                            (0, n.jsx)(am.ChevronSmallRightIcon, { size: "refresh_sm", color: "currentColor" }),
                        ],
                    }),
            }),
            null != d && (0, n.jsx)(v.A, { id: T, children: (0, j.Cz)(d) }),
        ],
    });
}
var aO = a(195464);
function aM() {
    let e = p.useId(),
        t = p.useId(),
        [a, i] = p.useState(j.v7.BASE),
        r = F().find((e) => e === j.hw[a]),
        s = (0, g.bG)([h.A], () => h.A.isSaving),
        c = tg();
    return (0, n.jsxs)(as, {
        className: aO.nj,
        children: [
            (0, n.jsx)(tv.D, {
                ref: c,
                variant: "heading-xl/medium",
                color: "none",
                className: aO.DD,
                children: tN.intl.string(tC.default["q2nj/Z"]),
            }),
            (0, n.jsxs)("div", {
                className: aO.ho,
                children: [
                    (0, n.jsx)(aR, {
                        tabIdPrefix: e,
                        panelId: t,
                        activeCustomizationOption: a,
                        onSelectOption: i,
                        blockedTrait: r,
                        disabled: s,
                    }),
                    (0, n.jsx)(ap, { id: t, customizationOption: a, disabled: s }),
                ],
            }),
        ],
    });
}
var ay = a(81466);
function aL() {
    let e = (0, g.bG)([h.A], () => h.A.stats?.games);
    return (0, n.jsxs)(as, {
        children: [
            (0, n.jsx)(tM, {
                icon: ay.CalendarIcon,
                value: Math.round(e?.totalDaysPlayed ?? 0),
                topPercent: (0, ed.bD)(e?.totalDaysPlayedPercentile),
                children: tN.intl.string(tC.default["4N5p4D"]),
            }),
            (0, n.jsx)(ar, { customizationOption: j.v7.AURA }),
        ],
    });
}
var ak = a(687966);
function aD() {
    let e = (0, g.bG)([h.A], () => h.A.stats?.games);
    return (0, n.jsxs)(as, {
        children: [
            (0, n.jsx)(tM, {
                icon: ak.GameControllerIcon,
                value: Math.round(e?.totalGamesPlayed ?? 0),
                topPercent: (0, ed.bD)(e?.totalGamesPlayedPercentile),
                children: tN.intl.string(tC.default.HM2fjf),
            }),
            (0, n.jsx)(ar, { customizationOption: j.v7.WEARABLE }),
        ],
    });
}
var aP = a(534890),
    aU = a(350363);
function aG() {
    let e = (0, g.bG)([h.A], () => h.A.stats?.messages);
    return (0, n.jsxs)(as, {
        children: [
            (0, n.jsx)(tM, {
                icon: aP.ChatIcon,
                value: Math.round(e?.numMessagesSent ?? 0),
                topPercent: (0, ed.bD)(e?.numMessagesSentPercentile),
                children: tN.intl.string(aU.default.wWKySP),
            }),
            (0, n.jsx)(ar, { customizationOption: j.v7.OUTFIT }),
        ],
    });
}
var aH = a(664121);
function aF() {
    let e = (0, g.bG)([h.A], () => h.A.stats?.guilds?.guilds[0]);
    return (0, n.jsxs)(as, {
        children: [
            (0, n.jsx)(tM, {
                icon: aH.ServerIcon,
                value: Math.round(e?.numDaysInteracted ?? 0),
                topPercent: (0, ed.bD)(e?.numDaysInteractedPercentile),
                children: tN.intl.string(tC.default["M+a+t1"]),
            }),
            (0, n.jsx)(ar, { customizationOption: j.v7.HAT }),
        ],
    });
}
var aK = a(831544);
function aB() {
    let e = (0, g.bG)([h.A], () => h.A.stats?.voice),
        t = Math.round(e?.totalVoiceMinutes ?? 0);
    return (0, n.jsxs)(as, {
        children: [
            (0, n.jsx)(tM, {
                icon: aK.MicrophoneIcon,
                value: t,
                topPercent: (0, ed.bD)(e?.totalVoiceMinutesPercentile),
                children: tN.intl.string(tC.default["3/T12E"]),
            }),
            (0, n.jsx)(ar, { customizationOption: j.v7.FACE }),
        ],
    });
}
function az(e) {
    let { route: t } = e;
    switch (t) {
        case C.gr.VOICE_FACE:
            return (0, n.jsx)(aB, {});
        case C.gr.MESSAGES_OUTFIT:
            return (0, n.jsx)(aG, {});
        case C.gr.SERVERS_HEADWEAR:
            return (0, n.jsx)(aF, {});
        case C.gr.EMOJI_SHOES:
            return (0, n.jsx)(ac, {});
        case C.gr.GAMES_WEARABLE:
            return (0, n.jsx)(aD, {});
        case C.gr.GAME_TIME_AURA:
            return (0, n.jsx)(aL, {});
        case C.gr.FINALIZE_CHARACTER:
            return (0, n.jsx)(aM, {});
        default:
            return null;
    }
}
var aV = a(358618),
    aW = a(983851),
    aq = a(793920),
    aY = a(893007),
    aZ = a(738964);
function aX(e) {
    return `${Math.round(e)}%`;
}
function aQ() {
    let { volume: e, isMuted: t } = (0, g.cf)([h.A], () => ({ volume: h.A.volume, isMuted: h.A.isMuted })),
        a = p.useRef(null),
        i = p.useRef(null),
        [r, s] = p.useState(!1),
        [c, d] = p.useState(!1),
        [l, o] = p.useState(!1),
        [f, b] = p.useState(!1),
        _ = p.useRef(null),
        m = p.useRef(!1),
        x = t ? 0 : Math.round(100 * e),
        A = !f && (r || c || l),
        v = 0 === x ? aV.VoiceXIcon : x > 50 ? aW.VoiceNormalIcon : aq.VoiceLowIcon;
    (p.useLayoutEffect(() => {
        null != i.current && (i.current.volume = e);
    }, [e]),
        (0, es.l0)(() => {
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
        className: aZ.kL,
        onMouseEnter: I,
        onMouseLeave: E,
        onFocus: j,
        onPointerDownCapture: S,
        onBlur: T,
        onKeyDownCapture: C,
        onKeyDown: R,
        children: [
            (0, n.jsx)(ex, {
                size: "sm",
                className: A ? aZ.Gg : void 0,
                "aria-label": tN.intl.string(t ? aU.default.GN0uv6 : aU.default.pjF33X),
                onClick: u.K8,
                children: (0, n.jsx)(v, { size: "xs", color: "currentColor" }),
            }),
            A
                ? (0, n.jsx)("div", {
                      className: aZ.xJ,
                      children: (0, n.jsx)(aY.A, {
                          value: x,
                          minValue: 0,
                          maxValue: 100,
                          onChange: w,
                          onChangeEnd: N,
                          formatValue: aX,
                          "aria-label": tN.intl.string(tN.t.xPHVBs),
                      }),
                  })
                : null,
            (0, n.jsx)("audio", {
                ref: i,
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
let aJ =
        "https://cdn.discordapp.com/assets/content/914f6f5e36c680d00944ba2e6278b45f8b1da722692e101b5986cf7be56c4979.mp3",
    a$ =
        "https://cdn.discordapp.com/assets/content/d1dfc8280cfbd578f18728598db893d807d9ece6b511389848b7308c399f07a0.mp3";
var a0 = a(477155),
    a1 = a(866665),
    a2 = a(417270),
    a3 = a(935286),
    a8 = a(405433),
    a7 = a(289873),
    a5 = a(621466);
function a6(e, t) {
    let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    p.useEffect(() => {
        if (!a) return (window.addEventListener("keydown", i), () => window.removeEventListener("keydown", i));
        function i(a) {
            (0, a5.vq)(a.target, HTMLTextAreaElement) ||
                (0, a5.vq)(a.target, HTMLInputElement) ||
                (a.key === e && t(a));
        }
    }, [e, t, a]);
}
var a9 = a(652215),
    a4 = a(650583);
function ie(e) {
    let { source: t, onClick: a, disabled: i = !1 } = e,
        r = eh(t),
        n = p.useRef(!1);
    function s() {
        i || r();
    }
    return {
        playSound: s,
        onPointerDown: function (e) {
            e.button === a9.hE4.PRIMARY && ((n.current = !0), s());
        },
        onKeyDown: function (e) {
            (e.key === a4.dh.ENTER || e.key === a4.dh.SPACE) && ((n.current = !0), e.repeat || s());
        },
        onClickWithSound: function () {
            (n.current || s(), (n.current = !1), a());
        },
    };
}
var it = a(753875);
function ia(e) {
    let { "aria-label": t, "aria-describedby": a, icon: i, onClick: r, disabled: s = !1 } = e,
        {
            playSound: c,
            onPointerDown: d,
            onKeyDown: l,
            onClickWithSound: o,
        } = ie({ source: aJ, onClick: r, disabled: s });
    return (
        a6(
            "ArrowLeft",
            function (e) {
                (e.repeat || c(), r());
            },
            s,
        ),
        (0, n.jsx)(ex, {
            onPointerDown: d,
            onKeyDown: l,
            onClick: o,
            size: "md",
            className: m()(it.A4, it.aX),
            "aria-disabled": s,
            "aria-describedby": a,
            "aria-label": t,
            children: (0, n.jsx)(i, { color: "currentColor" }),
        })
    );
}
function ii(e) {
    let {
            "aria-label": t,
            "aria-describedby": a,
            children: i,
            onClick: r,
            size: s,
            className: c,
            disabled: d = !1,
        } = e,
        {
            playSound: l,
            onPointerDown: o,
            onKeyDown: u,
            onClickWithSound: h,
        } = ie({ source: a$, onClick: r, disabled: d });
    return (
        a6(
            "ArrowRight",
            function (e) {
                (e.repeat || l(), r());
            },
            d,
        ),
        (0, n.jsx)(eg, {
            onPointerDown: o,
            onKeyDown: u,
            onClick: h,
            size: s,
            className: m()(it.A4, it.K2, c),
            "aria-disabled": d,
            "aria-describedby": a,
            "aria-label": t,
            children: i,
        })
    );
}
function ir(e) {
    let { "aria-describedby": t, onClick: a, disabled: i } = e;
    return (0, n.jsx)(ia, {
        "aria-label": tN.intl.string(tN.t["13/7kX"]),
        "aria-describedby": t,
        icon: a0.ArrowSmallLeftIcon,
        onClick: a,
        disabled: i,
    });
}
function is(e) {
    let { onClick: t } = e,
        { onPointerDown: a, onKeyDown: i, onClickWithSound: r } = ie({ source: a$, onClick: t });
    return (0, n.jsx)(a1.m, {
        text: tN.intl.string(tC.default.cWdGf9),
        ariaHidden: !0,
        children: (0, n.jsx)(ex, {
            onPointerDown: a,
            onKeyDown: i,
            onClick: r,
            size: "md",
            className: m()(it.A4, it.eZ),
            "aria-label": tN.intl.string(tC.default.cWdGf9),
            children: (0, n.jsx)(a2.RetryIcon, { color: "currentColor" }),
        }),
    });
}
function ic(e) {
    let { "aria-describedby": t, onClick: a, disabled: i } = e;
    return (0, n.jsx)(ii, {
        size: "md",
        "aria-label": tN.intl.string(tN.t.PDTjLN),
        "aria-describedby": t,
        onClick: a,
        disabled: i,
        children: (0, n.jsx)(a3.ArrowSmallRightIcon, { color: "currentColor" }),
    });
}
function id(e) {
    let { onClick: t, disabled: a } = e;
    return (0, n.jsxs)(ii, {
        size: "custom",
        className: it.GA,
        "aria-label": tN.intl.string(tN.t.i4jeWR),
        onClick: t,
        disabled: a,
        children: [
            (0, n.jsx)(tI, { variant: "mono-md/normal", className: it.Pf, children: tN.intl.string(tN.t.i4jeWR) }),
            (0, n.jsx)(a3.ArrowSmallRightIcon, { size: "refresh_sm", color: "currentColor" }),
        ],
    });
}
function il(e) {
    let { onClick: t, disabled: a } = e;
    return (0, n.jsxs)(ii, {
        size: "custom",
        className: m()(it.GA, it.Bq),
        "aria-label": tN.intl.string(tN.t.RDE0Sc),
        onClick: t,
        disabled: a,
        children: [
            (0, n.jsx)(tA.E, {
                variant: "mono-md/bold",
                color: "none",
                className: it.Pf,
                children: tN.intl.string(tN.t.RDE0Sc),
            }),
            (0, n.jsx)(a8.ShareIcon, { size: "refresh_sm", color: "currentColor" }),
        ],
    });
}
function io(e) {
    let { onBack: t, isRouteBlocked: a, isCharacterExiting: i, blockedTraitDescriptionId: r } = e,
        s = (0, g.bG)([h.A], () => h.A.isSaving);
    return (0, n.jsx)(ir, {
        "aria-describedby": r,
        onClick: function () {
            s || t();
        },
        disabled: s || a || i,
    });
}
function iu(e) {
    let { onSaved: t, navigate: a, isRouteBlocked: i, isCharacterExiting: r, blockedTraitDescriptionId: c } = e,
        d = (0, g.bG)([h.A], () => h.A.isSaving),
        l = d || i || r;
    async function o() {
        if (d) return;
        let e = (0, H.XI)(h.A.selectedCharacterTraits);
        (await (0, u.yE)(e)) ? t() : (0, s.P0)({ text: tN.intl.string(tN.t.fEptJP), variant: "critical" });
    }
    function f() {
        a(o);
    }
    let {
        playSound: b,
        onPointerDown: p,
        onKeyDown: _,
        onClickWithSound: x,
    } = ie({
        source: "https://cdn.discordapp.com/assets/content/1514d999969512ff06ade75018213676ebaf3698af26c0b1b7d3243ec480f920.mp3",
        onClick: f,
        disabled: l,
    });
    return (
        a6(
            "ArrowRight",
            function (e) {
                (e.repeat || b(), f());
            },
            l,
        ),
        (0, n.jsxs)(eg, {
            onPointerDown: p,
            onKeyDown: _,
            onClick: x,
            size: "custom",
            className: m()(it.A4, it.K2, it.GA),
            "aria-disabled": l,
            "aria-describedby": c,
            "aria-label": tN.intl.string(tN.t["R3BPH+"]),
            children: [
                (0, n.jsx)(tA.E, {
                    variant: "mono-md/normal",
                    color: "none",
                    className: it.Pf,
                    children: tN.intl.string(tN.t["R3BPH+"]),
                }),
                d
                    ? (0, n.jsx)(a7.y, { type: a7.t.SPINNING_CIRCLE_SIMPLE, className: it.u1, itemClassName: it.$N })
                    : (0, n.jsx)(a3.ArrowSmallRightIcon, { size: "refresh_sm", color: "currentColor" }),
            ],
        })
    );
}
function ih(e) {
    let {
            activeRoute: t,
            blockedTrait: a,
            blockedTraitDescriptionId: i,
            isCharacterExiting: r,
            onBack: s,
            onNext: c,
            onCharacterSaved: d,
            onReplay: l,
        } = e,
        o = null != a,
        u = p.useMemo(() => (0, ta.throttle)((e) => e(), 500, { trailing: !1 }), []);
    function h(e) {
        null != a ? eu(a) : u(e);
    }
    switch (t) {
        case C.gr.HOME:
            return null;
        case C.gr.FINALIZE_CHARACTER:
            return (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(io, {
                        onBack: () => h(s),
                        isRouteBlocked: o,
                        isCharacterExiting: r,
                        blockedTraitDescriptionId: i,
                    }),
                    (0, n.jsx)(iu, {
                        onSaved: d,
                        navigate: h,
                        isRouteBlocked: o,
                        isCharacterExiting: r,
                        blockedTraitDescriptionId: i,
                    }),
                ],
            });
        case C.gr.SUMMARY:
            return (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(ir, { onClick: () => u(s) }),
                    (0, n.jsx)(is, { onClick: () => u(l) }),
                    (0, n.jsx)(il, { onClick: () => u(c) }),
                ],
            });
        case C.gr.SHARE:
            return (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(ir, { onClick: () => u(s) }), (0, n.jsx)(id, { onClick: () => u(c) })],
            });
        default:
            return (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(ir, { "aria-describedby": i, onClick: () => h(s), disabled: o }),
                    (0, n.jsx)(ic, { "aria-describedby": i, onClick: () => h(c), disabled: o }),
                ],
            });
    }
}
function ib(e) {
    return (0, n.jsx)(ew, {
        visible: !e.isCharacterExiting,
        enter: q,
        exit: J,
        keepMounted: !0,
        children: (0, n.jsx)(ih, { ...e }),
    });
}
function ip(e) {
    let { className: t } = e;
    return (0, n.jsx)(th, {
        animatedSrc:
            "https://cdn.discordapp.com/assets/content/02e9ae4cdbec0b2adef22c9a5659f5c7340e399cc8932e8af6d41e62a37644ae.png",
        staticSrc:
            "https://cdn.discordapp.com/assets/content/f08be0abd0d224b5f7e1e5d6c1ef8e4d24cddcb712e2c624dcc6ea3d136818d5.png",
        className: t,
    });
}
var i_ = a(771639);
let im = { "--custom-checkpoint-screen-vertical-inset": "88px" };
function ix(e) {
    let { children: t } = e;
    return (0, n.jsx)("div", { className: i_.n, style: im, children: t });
}
var ig = a(639331);
let iA = {
    "--custom-checkpoint-intro-fade-in-delay": "1800ms",
    "--custom-checkpoint-intro-fade-in-duration": "1000ms",
};
function iv() {
    let e = (0, g.bG)([h.A], () => h.A.fetchState !== h.T.SUCCESS || null != h.A.stats),
        t = tg();
    return (0, n.jsx)(ix, {
        children: (0, n.jsxs)("div", {
            className: ig.Qs,
            style: iA,
            children: [
                (0, n.jsxs)("div", {
                    ref: t,
                    className: ig.Ok,
                    role: "heading",
                    "aria-level": 2,
                    children: ["2026", !e && (0, n.jsx)(ip, { className: ig.gi })],
                }),
                (0, n.jsxs)("div", {
                    className: ig.eH,
                    children: [
                        (0, n.jsx)(tI, {
                            tag: "p",
                            variant: "heading-xl/medium",
                            children: tN.intl.string(e ? tC.default["7YmUVu"] : tC.default["Fyr+NW"]),
                        }),
                        !e &&
                            (0, n.jsx)(tI, {
                                tag: "p",
                                variant: "heading-xl/medium",
                                children: tN.intl.string(tC.default["2GRr6H"]),
                            }),
                    ],
                }),
            ],
        }),
    });
}
(a(134528), a(947204));
var iw = a(675970),
    iI = a(559106),
    iE = a(366056),
    ij = a(292801),
    iS = a(155718),
    iC = a(294454),
    iN = a(489414),
    iT = a(878358),
    iR = a(383233),
    iO = a(819648),
    iM = a(677059);
function iy(e) {
    let { children: t } = e;
    return (0, n.jsx)(tI, { variant: "heading-xxl/medium", className: iM.h, children: t });
}
function iL(e) {
    let { accessibilityLabel: t, className: a, children: i, ref: r } = e;
    return (0, n.jsxs)("div", {
        ref: r,
        role: "heading",
        "aria-level": 2,
        children: [
            (0, n.jsx)("div", { className: a, "aria-hidden": !0, children: i }),
            (0, n.jsx)(v.A, { children: t }),
        ],
    });
}
var ik = a(100391);
function iD(e) {
    let { icon: t, children: a } = e;
    return (0, n.jsxs)("div", {
        className: ik.D,
        children: [
            (0, n.jsx)(t, { size: "md", color: "currentColor" }),
            (0, n.jsx)(tI, { variant: "heading-lg/semibold", className: ik.Q, children: a }),
        ],
    });
}
function iP(e) {
    let { icon: t, children: a } = e;
    return (0, n.jsxs)("div", {
        className: ik.D,
        children: [
            (0, n.jsx)(t, { size: "md", color: "currentColor" }),
            (0, n.jsx)(tE, { variant: "heading-lg/semibold", className: ik.Q, children: a }),
        ],
    });
}
var iU = a(456410);
function iG(e) {
    let { name: t, label: a, checked: i, onSelect: r, children: s } = e;
    return (0, n.jsx)(iI.vN, {
        within: !0,
        children: (0, n.jsxs)("label", {
            className: m()(iU.uK, { [iU.KD]: i }),
            children: [
                (0, n.jsx)(v.A, {
                    children: (0, n.jsx)("input", { type: "radio", name: t, checked: i, onChange: r, "aria-label": a }),
                }),
                i ? (0, n.jsx)("div", { className: iU.Gt, "aria-hidden": !0 }) : null,
                (0, n.jsx)("div", { className: iU.Nr, "aria-hidden": !0, children: s }),
            ],
        }),
    });
}
function iH() {
    let e = (0, g.bG)([h.A], () => h.A.character),
        t = (0, g.bG)([h.A], () => h.A.stats),
        a = p.useId(),
        i = tg(),
        r = p.useMemo(() => {
            var a, i;
            return ((a = e),
            (i = t),
            null != a && null != i
                ? [iw.Q.CHARACTER_ONLY, iw.Q.DEFAULT, iw.Q.STATS_ONLY]
                : null != a
                  ? [iw.Q.CHARACTER_ONLY]
                  : null != i
                    ? [iw.Q.STATS_ONLY]
                    : []).map((a) => ({ cardType: a, checkpointData: (0, iO.Go)(a, e, t) }));
        }, [e, t]),
        [c, d] = p.useState(
            () =>
                (
                    r.find((e) => {
                        let { cardType: t } = e;
                        return t === iw.Q.DEFAULT;
                    }) ?? r.at(0)
                )?.cardType,
        ),
        l = r.find((e) => {
            let { cardType: t } = e;
            return t === c;
        }),
        o = eh(tD),
        {
            onPointerDown: f,
            onKeyDown: _,
            onClickWithSound: m,
        } = ie({
            source: a$,
            onClick: function () {
                if (null == l) return;
                let { cardType: e, checkpointData: t } = l;
                (0, iC.fO)({
                    message: new iR.Ay({
                        content: "",
                        components: [{ type: iS.I5.CHECKPOINT_CARD, id: (0, iN.X1)("0"), checkpointData: t }],
                    }),
                    source: "checkpoint",
                    customSendHandler: async (t, a, i) => {
                        let { withMessage: r } = a;
                        i(!0);
                        try {
                            (await (0, u.jA)(t, r ?? "", e),
                                (0, b.Pe)(e),
                                (0, iC.Be)(),
                                (0, s.P0)({ text: tN.intl.string(tN.t.kwmYkt), variant: "success" }));
                        } catch {
                            (0, s.P0)({ text: tN.intl.string(tN.t.iufib1), variant: "critical" });
                        } finally {
                            i(!1);
                        }
                    },
                });
            },
        });
    return null == l
        ? null
        : (0, n.jsx)(ix, {
              children: (0, n.jsxs)("div", {
                  className: iU.uM,
                  children: [
                      (0, n.jsxs)("div", {
                          className: iU.wx,
                          children: [
                              (0, n.jsxs)(iL, {
                                  ref: i,
                                  className: iU.R_,
                                  accessibilityLabel: tN.intl.string(tC.default.P5zyko),
                                  children: [
                                      (0, n.jsx)(iD, {
                                          icon: iE.ExperimentalCheckpointIcon,
                                          children: tN.intl.string(aU.default.ir6nEQ),
                                      }),
                                      (0, n.jsx)(tI, {
                                          variant: "display-lg",
                                          className: iU.Vy,
                                          children: tN.intl.string(tN.t.RDE0Sc),
                                      }),
                                  ],
                              }),
                              (0, n.jsx)("div", {
                                  className: iU.h_,
                                  children: (0, n.jsx)(iy, { children: tN.intl.string(tC.default.KXDPot) }),
                              }),
                          ],
                      }),
                      (0, n.jsx)("div", {
                          role: "radiogroup",
                          "aria-label": tN.intl.string(tC.default.KXDPot),
                          className: iU.kR,
                          children: r.map((e) => {
                              let { cardType: t, checkpointData: i } = e;
                              return (0, n.jsx)(
                                  iG,
                                  {
                                      name: a,
                                      label: (function (e) {
                                          switch (e) {
                                              case iw.Q.CHARACTER_ONLY:
                                                  return tN.intl.string(tC.default.tUU3fe);
                                              case iw.Q.DEFAULT:
                                                  return tN.intl.string(tC.default.DZQzJn);
                                              case iw.Q.STATS_ONLY:
                                                  return tN.intl.string(tC.default.e2UHGT);
                                          }
                                      })(t),
                                      checked: t === l.cardType,
                                      onSelect: () => {
                                          (o(), d(t));
                                      },
                                      children: (0, n.jsx)(iT.A, { checkpointData: i }),
                                  },
                                  t,
                              );
                          }),
                      }),
                      (0, n.jsxs)(eg, {
                          onPointerDown: f,
                          onKeyDown: _,
                          onClick: m,
                          size: "custom",
                          className: iU.sY,
                          "aria-label": tN.intl.string(tN.t.I3ltXO),
                          children: [
                              (0, n.jsx)(tA.E, {
                                  variant: "mono-md/bold",
                                  color: "none",
                                  className: iU.RC,
                                  children: tN.intl.string(tN.t.I3ltXO),
                              }),
                              (0, n.jsx)(ij.ArrowAngleRightUpIcon, { size: "refresh_sm", color: "currentColor" }),
                          ],
                      }),
                  ],
              }),
          });
}
var iF = a(206701),
    iK = a(782134),
    iB = a(998304),
    iz = a(975571),
    iV = a(427262),
    iW = a(438389);
let iq = (0, iB.j5)(el.Kr);
function iY(e) {
    let { onStart: t } = e,
        a = (0, g.bG)([U.default], () => U.default.getCurrentUser()),
        i = (0, iV.tx)(a),
        r = (0, g.bG)([B.Ay], () => B.Ay.useReducedMotion),
        { playSound: s, onPointerDown: c, onKeyDown: d, onClickWithSound: l } = ie({ source: a$, onClick: t });
    return (
        a6("ArrowRight", function (e) {
            (e.repeat || s(), t());
        }),
        (0, n.jsxs)(ix, {
            children: [
                (0, n.jsxs)("div", {
                    className: iW.Qs,
                    children: [
                        (0, n.jsxs)("div", {
                            className: iW.wx,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: iW.Qq,
                                    children: [
                                        (0, n.jsx)(tE, {
                                            variant: "display-lg",
                                            className: iW.DD,
                                            children: tN.intl.string(aU.default["CdU/PF"]),
                                        }),
                                        (0, n.jsx)(tI, {
                                            variant: "heading-xxl/medium",
                                            children: tN.intl.formatToPlainString(tC.default.xhZ23b, { username: i }),
                                        }),
                                    ],
                                }),
                                (0, n.jsx)("div", {
                                    className: iW.CB,
                                    children: (0, n.jsx)(iF.U, {
                                        artboard: "Entry",
                                        className: iW.lW,
                                        fit: "contain",
                                        withReducedMotion: "short-loop",
                                        dataBinding: { iconColor: iq, reducedMotion: r },
                                    }),
                                }),
                            ],
                        }),
                        (0, n.jsxs)(eg, {
                            onPointerDown: c,
                            onKeyDown: d,
                            onClick: l,
                            size: "custom",
                            className: iW.ni,
                            "aria-label": tN.intl.string(tN.t.I0v0Qv),
                            children: [
                                (0, n.jsx)(iK.PlayIcon, { size: "refresh_sm", color: "currentColor" }),
                                (0, n.jsx)(tI, {
                                    variant: "mono-md/normal",
                                    className: iW.qK,
                                    children: tN.intl.string(tN.t.I0v0Qv),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: iW.qr,
                    children: [
                        (0, n.jsx)(tI, {
                            variant: "body-sm/medium",
                            className: iW.ed,
                            children: tN.intl.format(tC.default.hcNhyq, {
                                learnMoreHook: (e, t) =>
                                    (0, n.jsx)(
                                        t$.Anchor,
                                        {
                                            className: iW.nf,
                                            href: iz.A.getArticleURL(a9.MVz.CHECKPOINT),
                                            useDefaultUnderlineStyles: !1,
                                            children: e,
                                        },
                                        t,
                                    ),
                            }),
                        }),
                        (0, n.jsx)(tI, {
                            variant: "body-md/medium",
                            className: iW.al,
                            children: tN.intl.format(aU.default.g476ZL, { name: "Exyl" }),
                        }),
                    ],
                }),
            ],
        })
    );
}
var iZ = a(565645),
    iX = a(141881);
function iQ(e) {
    let { children: t } = e;
    return (0, n.jsx)(tS, { className: iX.l, children: t });
}
var iJ = a(765671),
    i$ = a(663385),
    i0 = a(469228),
    i1 = a(406956);
let i2 = (0, iB.j5)(el.Kr);
function i3(e) {
    let { value: t, alignment: a = "left", className: i } = e,
        r = (0, g.bG)([B.Ay], () => B.Ay.useReducedMotion),
        [s, c] = p.useState(0),
        { isLoaded: d, onLoad: l } = (function () {
            let [e, t] = p.useState(!1);
            return { isLoaded: e, onLoad: p.useCallback(() => t(!0), []) };
        })(),
        o = r ? t : s;
    p.useEffect(() => {
        if (r || !d) return;
        let e = performance.now(),
            a = requestAnimationFrame(function i(r) {
                let n = Math.min((r - e) / 500, 1);
                (c(Math.round(t * n)), n < 1 && (a = requestAnimationFrame(i)));
            });
        return () => cancelAnimationFrame(a);
    }, [t, r, d]);
    let u = "center" === a ? i$.m : i0.w;
    return (0, n.jsxs)("div", {
        className: m()(i1.lY, i),
        children: [
            (0, n.jsx)("div", { className: i1.VL, children: t }),
            (0, n.jsx)(u, {
                className: i1.lW,
                fit: "layout",
                withReducedMotion: "short-loop",
                dataBinding: { DisplayValue: o, TextColor: i2 },
                onLoad: l,
            }),
            (0, n.jsx)(v.A, { children: t.toLocaleString(tN.intl.currentLocale) }),
        ],
    });
}
var i8 = a(434911);
function i7(e) {
    let { value: t } = e,
        { ref: a, width: i } = (0, iJ.Ay)(),
        { ref: r, width: s } = (0, iJ.Ay)(),
        c = null != i && null != s ? Math.min(1, i / s) : 1;
    return (0, n.jsxs)("div", {
        ref: a,
        className: i8.ai,
        style: { height: 200 * c },
        children: [
            (0, n.jsx)("span", { ref: r, className: m()(i8.Qq, i8.xP), children: t }),
            (0, n.jsx)(i3, { value: t }),
        ],
    });
}
function i5(e) {
    let { value: t } = e;
    return (0, n.jsxs)("div", {
        className: i8.dJ,
        children: [
            "number" == typeof t
                ? (0, n.jsx)(i7, { value: t })
                : (0, n.jsx)(tI, { variant: "heading-xxl/medium", className: i8.Qq, children: t }),
            (0, n.jsx)(ip, { className: i8.gi }),
        ],
    });
}
var i6 = a(445199),
    i9 = a(205524),
    i4 = a(690521),
    re = a(152321);
let rt = [0, 0, 2],
    ra = [0, 1, 0],
    ri = [0, 0, 0],
    rr = `
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
    rn = `
precision mediump float;

varying vec2 v_texcoord;
varying highp vec3 v_lighting;

uniform sampler2D u_texture;

void main() {
  highp vec4 texelColor = texture2D(u_texture, v_texcoord);
  gl_FragColor = vec4(texelColor.rgb * v_lighting, texelColor.a);
}
`,
    rs = [
        -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5,
        -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5,
        0.5, 0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, -0.5,
        -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5,
        -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5,
        -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5,
    ],
    rc = [
        0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0,
        1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0,
    ],
    rd = [
        0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
        1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
        -1, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
        1, 0, 0,
    ];
function rl(e) {
    let t,
        { emoji: a } = e,
        [i, r] = p.useState(null),
        [s, c] = p.useState(null),
        d = p.useRef(new Image()),
        [l, o] = p.useState(null),
        [u, h] = p.useState(!1),
        f = p.useRef(0),
        b = p.useRef(0),
        _ = p.useRef(45),
        x = p.useRef(45),
        A = (0, g.bG)([B.Ay], () => B.Ay.useReducedMotion),
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
                r = i?.getContext("webgl");
            if (null == r || null == i || null == s) return;
            t.current = r;
            let n = r.createShader(r.VERTEX_SHADER),
                c = r.createShader(r.FRAGMENT_SHADER);
            if (null == n || null == c) return;
            if (
                (r.shaderSource(n, rr),
                r.shaderSource(c, rn),
                r.compileShader(n),
                !r.getShaderParameter(n, r.COMPILE_STATUS))
            )
                return void console.error("ERROR compiling vertex shader!", r.getShaderInfoLog(n));
            if ((r.compileShader(c), !r.getShaderParameter(c, r.COMPILE_STATUS)))
                return void console.error("ERROR compiling fragment shader!", r.getShaderInfoLog(c));
            let d = r.createProgram();
            if (
                (r.attachShader(d, n), r.attachShader(d, c), r.linkProgram(d), !r.getProgramParameter(d, r.LINK_STATUS))
            )
                return void console.error("ERROR linking program!", r.getProgramInfoLog(d));
            if ((r.validateProgram(d), !r.getProgramParameter(d, r.VALIDATE_STATUS)))
                return void console.error("ERROR validating program!", r.getProgramInfoLog(d));
            let l = r.getAttribLocation(d, "a_position"),
                o = r.getAttribLocation(d, "a_texcoord"),
                u = r.getUniformLocation(d, "u_matrix"),
                h = r.getUniformLocation(d, "u_texture"),
                f = r.getAttribLocation(d, "a_vertexNormal"),
                b = r.getUniformLocation(d, "u_normalMatrix"),
                p = r.createBuffer();
            (r.bindBuffer(r.ARRAY_BUFFER, p),
                r.bufferData(r.ARRAY_BUFFER, new Float32Array(rd), r.STATIC_DRAW),
                r.vertexAttribPointer(f, 3, r.FLOAT, !1, 0, 0),
                r.enableVertexAttribArray(f));
            let m = r.createBuffer();
            (r.bindBuffer(r.ARRAY_BUFFER, m),
                (e = new Float32Array(rs)),
                r.bufferData(r.ARRAY_BUFFER, e, r.STATIC_DRAW));
            let g = r.createBuffer();
            (r.bindBuffer(r.ARRAY_BUFFER, g), r.bufferData(r.ARRAY_BUFFER, new Float32Array(rc), r.STATIC_DRAW));
            let A = i6.DF(60);
            return (
                (a = requestAnimationFrame(function e() {
                    let t, n;
                    if (null == r || null == i) return;
                    ((t = Math.round(i.clientWidth * window.devicePixelRatio)),
                        (n = Math.round(i.clientHeight * window.devicePixelRatio)),
                        t > 0 && n > 0 && (i.width !== t || i.height !== n) && ((i.width = t), (i.height = n)),
                        r.viewport(0, 0, r.canvas.width, r.canvas.height),
                        r.enable(r.CULL_FACE),
                        r.enable(r.DEPTH_TEST));
                    let s = i6.DF(_.current),
                        c = i6.DF(x.current);
                    (r.clear(r.COLOR_BUFFER_BIT | r.DEPTH_BUFFER_BIT),
                        r.useProgram(d),
                        r.enableVertexAttribArray(l),
                        r.bindBuffer(r.ARRAY_BUFFER, m),
                        r.vertexAttribPointer(l, 3, r.FLOAT, !1, 0, 0),
                        r.enableVertexAttribArray(o),
                        r.bindBuffer(r.ARRAY_BUFFER, g),
                        r.vertexAttribPointer(o, 2, r.FLOAT, !1, 0, 0));
                    let f = i.clientWidth / i.clientHeight,
                        p = i9.fN(i9.vt(), A, f, 1, 2e3),
                        v = i9.t5(i9.vt(), rt, ri, ra),
                        w = i9.lw(i9.vt(), p, v),
                        I = i9.vt();
                    (i9.eL(I, I, s), i9.Z8(I, I, c));
                    let E = i9.lw(i9.vt(), w, I),
                        j = i9.vt();
                    (i9.B8(j, I),
                        i9.mg(j, j),
                        r.uniformMatrix4fv(b, !1, j),
                        r.uniformMatrix4fv(u, !1, E),
                        r.uniform1i(h, 0),
                        r.drawArrays(r.TRIANGLES, 0, 36),
                        (a = requestAnimationFrame(e)));
                })),
                () => cancelAnimationFrame(a)
            );
        }, [_, x, i, s]));
    let N = p.useCallback(() => {
        let e = s?.getContext("2d");
        null != s &&
            null != e &&
            ((e.fillStyle = "black"),
            e.fillRect(0, 0, s.width, s.height),
            e.drawImage(d.current, 0, 0, s.width, s.height),
            (e.fillStyle = el.Kr),
            e.fillRect(0, 0, s.width, 2),
            e.fillRect(0, 0, 2, s.height),
            e.fillRect(0, s.height - 2, s.width, 2),
            e.fillRect(s.width - 2, 0, 2, s.height),
            o(a),
            h(!0));
    }, [a, d, s]);
    (p.useEffect(() => {
        null != s &&
            ((d.current.crossOrigin = "anonymous"), (d.current.src = (0, i4.Ez)(a, 512)), (d.current.onload = N));
    }, [a, N, d, s]),
        p.useEffect(
            () => (
                !(function e(t) {
                    let a = 0.001 * t,
                        i = Math.min(a - b.current, 0.1);
                    if (((x.current += -E.current * i), (_.current += -I.current * i), !j.current)) {
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
                    className: m()(re.Ji, { [re.q4]: !u }),
                    ref: r,
                    height: 512,
                    width: 512,
                    onMouseDown: T,
                }),
                (0, n.jsx)("canvas", { className: re.R, ref: c, height: 512, width: 512 }),
            ],
        })
    );
}
var ro = a(826820);
let ru = [];
function rh(e) {
    let { emojiStats: t } = e,
        a = Math.round(t?.numEmojisSent ?? 0),
        i = (0, ed.bD)(t?.numEmojisSentPercentile);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: ro.dJ,
                children: [
                    (0, n.jsx)(iP, {
                        icon: tx.EmojiSlightlySmilingFaceIcon,
                        children: tN.intl.string(tC.default.ZTDCIv),
                    }),
                    (0, n.jsx)(i3, { value: a }),
                ],
            }),
            (0, n.jsx)(iy, {
                children:
                    null != i
                        ? tN.intl.format(tC.default.o7vDrk, {
                              percent: i,
                              percentHook: (e, t) => (0, n.jsx)(iQ, { children: e }, t),
                          })
                        : tN.intl.format(tC.default.NFptic, { numEmojis: a }),
            }),
        ],
    });
}
function rf(e) {
    let { numEmojisSent: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: ro.dJ,
                children: [
                    (0, n.jsx)(iP, {
                        icon: tx.EmojiSlightlySmilingFaceIcon,
                        children: tN.intl.string(tC.default.ZTDCIv),
                    }),
                    (0, n.jsx)(i5, { value: t }),
                ],
            }),
            (0, n.jsx)(iy, { children: tN.intl.format(tC.default["660/Rr"], { numEmojis: (0, ed.wj)(t) }) }),
        ],
    });
}
function rb() {
    let e = (0, g.bG)([h.A], () => h.A.stats?.emojis),
        t = (0, g.bG)([h.A], () => (0, ed.y7)(h.A.stats)),
        a = (0, g.bG)([h.A], () => h.A.globalStats?.emojis),
        i = !t && null != a,
        r = (i ? a.emojis : e?.emojis) ?? ru,
        [s, c] = p.useState(0),
        d = r[s],
        l = eh(tD);
    return (0, n.jsx)(ix, {
        children: (0, n.jsxs)("div", {
            className: ro.kL,
            children: [
                (0, n.jsx)("div", { className: ro.KY, children: null != d && (0, n.jsx)(rl, { emoji: d }) }),
                (0, n.jsxs)("div", {
                    className: ro.C,
                    children: [
                        i ? (0, n.jsx)(rf, { numEmojisSent: a.numEmojisSent }) : (0, n.jsx)(rh, { emojiStats: e }),
                        (0, n.jsx)("div", {
                            className: ro.gm,
                            children: r.map((e, t) =>
                                (0, n.jsx)(
                                    rp,
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
function rp(e) {
    let { emoji: t, rank: a, isActive: i, onClick: r } = e,
        s = !(0, g.bG)([B.Ay], () => B.Ay.useReducedMotion) && !0 === t.animated;
    return (0, n.jsxs)(ex, {
        size: "custom",
        className: ro._X,
        onClick: r,
        "aria-label": tN.intl.formatToPlainString(tC.default["S5+pRg"], { emojiName: t.name, rank: a }),
        "aria-pressed": i,
        children: [
            (0, n.jsx)(iZ.A, { className: ro.Zg, emojiId: t.id, emojiName: t.name, animated: s }),
            (0, n.jsx)(tI, { variant: "mono-md/bold", className: ro.Tm, children: a }),
        ],
    });
}
var r_ = a(360450),
    rm = a(214947),
    rx = a(939249),
    rg = a(597770),
    rA = a(559647),
    rv = a(95369),
    rw = a(570287),
    rI = a(486020);
let rE = { 0: 1100, 1: 1e3 };
var rj = a(801305);
let rS = [],
    rC = (0, iB.j5)(el.Kr),
    rN = { r: 0, g: 0, b: 0, a: 1 },
    rT = {
        "Avatar01/Stroke": rN,
        "Avatar01/Fill": rC,
        "Avatar02/Stroke": rN,
        "Avatar02/Fill": rC,
        "Avatar03/Stroke": rN,
        "Avatar03/Fill": rC,
        "Avatar04/Stroke": rN,
        "Avatar04/Fill": rC,
        "Avatar05/Stroke": rN,
        "Avatar05/Fill": rC,
        ConnectorColor: rC,
    };
function rR(e) {
    return null != e ? rI.Ay.getUserAvatarURL(e, !1, 160, "png") : void 0;
}
function rO(e) {
    let t,
        { route: a, onNextStep: i, onPreviousStep: r } = e,
        s = (0, g.bG)([h.A], () => h.A.stats?.users ?? rS),
        c = (0, g.bG)([h.A], () => h.A.stats?.sidekick),
        d = (0, g.bG)([U.default], () => U.default.getCurrentUser()),
        l = (0, g.bG)([B.Ay], () => B.Ay.useReducedMotion),
        o = p.useRef(null),
        u = p.useRef(void 0),
        { animationState: f, isTransitioning: b } = (function (e, t) {
            var a;
            let [i, r] = p.useState({ route: e, hasShownSquad: e === C.gr.SQUAD, transition: null });
            i.route !== e &&
                r({
                    route: e,
                    hasShownSquad: i.hasShownSquad || e === C.gr.SQUAD,
                    transition:
                        ((a = i.route),
                        t
                            ? null
                            : a === C.gr.SQUAD && e === C.gr.SIDEKICK
                              ? 0
                              : a === C.gr.SIDEKICK && e === C.gr.SQUAD
                                ? 1
                                : null),
                });
            let { transition: n } = i;
            p.useEffect(() => {
                if (null == n) return;
                let e = setTimeout(() => r((e) => ({ ...e, transition: null })), rE[n]);
                return () => clearTimeout(e);
            }, [n]);
            let s = e === C.gr.SIDEKICK || e === C.gr.SIDEKICK_LEAVE;
            return {
                animationState: (function (e) {
                    let { route: t, hasShownSquad: a, transition: i, isReducedMotion: r } = e;
                    switch (t) {
                        case C.gr.SQUAD_TRANSITION:
                            return 5 * !!a;
                        case C.gr.SQUAD:
                            return 1;
                        case C.gr.SIDEKICK:
                            return 0 === i ? 2 : 3;
                        case C.gr.SIDEKICK_LEAVE:
                            return r ? 3 : 4;
                        default:
                            return 0;
                    }
                })({ route: e, hasShownSquad: i.hasShownSquad, transition: n, isReducedMotion: t }),
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
            if (t.current) return void r();
            if (l) return void i();
            let e = setTimeout(i, 1e3);
            return () => clearTimeout(e);
        }, [i, r, l, a]));
    let [_, x] = s,
        A = (0, iV.tx)(_) ?? "",
        w = (0, iV.tx)(x) ?? "",
        I = A.toLocaleUpperCase(),
        E = w.toLocaleUpperCase(),
        j = (0, iV.tx)(c?.user) ?? "",
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
    return (0, n.jsxs)(ix, {
        children: [
            (0, n.jsx)(r_.m, {
                ref: o,
                className: rj.lW,
                fit: "contain",
                autoplay: !1,
                onLoad: R,
                withReducedMotion: "play",
                dataBinding: {
                    ...rT,
                    AnimationState: f,
                    "Avatar01/img": rR(c?.user),
                    "Avatar02/img": rR(x),
                    "Avatar03/img": rR(_),
                    "Avatar04/img": rR(c?.user),
                    "Avatar05/img": rR(d),
                    "Avatar01/Username": j.toLocaleUpperCase(),
                    "Avatar02/Username": E,
                    "Avatar03/Username": I,
                    "Avatar04/Username": j.toLocaleUpperCase(),
                    twoFriends: N,
                    reducedMotion: l,
                },
            }),
            (0, n.jsx)(ew, {
                visible: a === C.gr.SQUAD_TRANSITION,
                enter: Z,
                exit: X,
                mountAfterDelay: !0,
                className: m()(rj.Qs, rj.kY),
                children: (0, n.jsx)(rM, {}),
            }),
            (0, n.jsxs)(ew, {
                visible: a === C.gr.SQUAD && !b,
                enter: Z,
                exit: X,
                mountAfterDelay: !0,
                className: rj.Qs,
                children: [
                    (0, n.jsx)(ry, {
                        title: tN.intl.string(aU.default.OzY5Ns),
                        accessibilityLabel: tN.intl.string(tC.default.OSo1fB),
                        description: tN.intl.string(tC.default.EqdLDd),
                    }),
                    (0, n.jsx)(v.A, {
                        tag: "ul",
                        children: S.map((e, t) => (0, n.jsx)("li", { children: e.name }, t)),
                    }),
                ],
            }),
            null != c &&
                (0, n.jsxs)(ew, {
                    visible: T && !b,
                    enter: Y,
                    exit: X,
                    mountAfterDelay: !0,
                    className: m()(rj.Qs, rj.yG),
                    children: [
                        (0, n.jsxs)("div", {
                            className: rj.Cv,
                            children: [
                                (0, n.jsx)(ry, {
                                    title: tN.intl.string(aU.default["+uwOHt"]),
                                    accessibilityLabel: tN.intl.string(tC.default.X4EiRH),
                                    description: tN.intl.string(tC.default["/ctmGw"]),
                                }),
                                (0, n.jsx)(v.A, { children: j }),
                                (0, n.jsx)(rL, { sidekick: c }),
                            ],
                        }),
                        (0, n.jsx)(rk, { user: c.user, username: j }),
                    ],
                }),
        ],
    });
}
function rM() {
    let e = tg();
    return (0, n.jsx)("div", {
        ref: e,
        className: m()(rj.Qs, rj.kY),
        children: (0, n.jsx)(iy, { children: tN.intl.string(tC.default["6RSp5q"]) }),
    });
}
function ry(e) {
    let { title: t, accessibilityLabel: a, description: i } = e,
        r = tg();
    return (0, n.jsxs)("div", {
        className: rj.wx,
        children: [
            (0, n.jsxs)(iL, {
                ref: r,
                className: rj.R_,
                accessibilityLabel: a,
                children: [
                    (0, n.jsx)(iD, { icon: rm.FriendsIcon, children: tN.intl.string(aU.default.ZQakPR) }),
                    (0, n.jsx)(tI, { variant: "display-lg", className: rj.Vy, children: t }),
                ],
            }),
            (0, n.jsx)(iy, { children: i }),
        ],
    });
}
function rL(e) {
    let { sidekick: t } = e,
        a = Math.round(t.numMessagesSent),
        i = Math.round(t.numVoiceMinutes);
    return (0, n.jsxs)("div", {
        className: rj.M1,
        children: [
            (0, n.jsxs)("div", {
                className: rj.dJ,
                "aria-hidden": !0,
                children: [
                    (0, n.jsx)(aP.ChatIcon, { size: "md", color: "currentColor" }),
                    (0, n.jsx)(tI, { variant: "heading-xxl/medium", className: rj.wk, children: a }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: rj.dJ,
                "aria-hidden": !0,
                children: [
                    (0, n.jsx)(aK.MicrophoneIcon, { size: "md", color: "currentColor" }),
                    (0, n.jsx)(tI, { variant: "heading-xxl/medium", className: rj.wk, children: i }),
                ],
            }),
            (0, n.jsx)(v.A, {
                children: tN.intl.formatToPlainString(tC.default.NafXAs, { numMessages: a, numMinutes: i }),
            }),
        ],
    });
}
function rk(e) {
    let { user: t, username: a } = e,
        [i, r] = p.useState(""),
        [c, d] = p.useState(!1),
        [l, o] = p.useState(!1),
        h = (0, rw.A)(t.id),
        f = i.trim(),
        _ = f.length > 0 && f.length <= 250 && !c && !l,
        x = c ? tN.intl.string(tN.t.fjcCk5) : tN.intl.formatToPlainString(tN.t["0ZQw/X"], { name: a });
    return h
        ? (0, n.jsxs)("div", {
              className: rj.OG,
              children: [
                  (0, n.jsx)("textarea", {
                      className: rj.yB,
                      value: i,
                      onChange: (e) => r(e.target.value),
                      maxLength: 250,
                      disabled: c || l,
                      placeholder: x,
                      "aria-label": x,
                  }),
                  (0, n.jsxs)("div", {
                      className: rj.n,
                      children: [
                          (0, n.jsx)(rx.D, {
                              className: rj.KD,
                              onClick: function () {
                                  ((0, b.nr)(t.id),
                                      (0, rv.A)({
                                          giftRecipient: t,
                                          analyticsLocations: [t0.A.CHECKPOINT, t0.A.CHECKPOINT_SIDEKICK],
                                      }));
                              },
                              "aria-label": tN.intl.string(tN.t.Ve9Ge6),
                              children: (0, n.jsx)(rg.GiftIcon, { size: "refresh_sm", color: "currentColor" }),
                          }),
                          (0, n.jsx)(rx.D, {
                              className: m()(rj.KD, { [rj.r9]: !_ }),
                              onClick: async function () {
                                  if (_) {
                                      o(!0);
                                      try {
                                          (await (0, u.fr)(f, t.id),
                                              r(""),
                                              d(!0),
                                              A.O.announce(tN.intl.string(tN.t.fjcCk5), "polite"));
                                      } catch {
                                          (0, s.P0)({ text: tN.intl.string(tN.t.fEptJP), variant: "critical" });
                                      } finally {
                                          o(!1);
                                      }
                                  }
                              },
                              "aria-disabled": !_,
                              "aria-label": tN.intl.string(tN.t.oeb1vg),
                              children: (0, n.jsx)(rA.SendMessageIcon, { size: "refresh_sm", color: "currentColor" }),
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
var rD = a(9767);
function rP(e) {
    let { games: t } = e,
        a = Math.round(t?.totalDaysPlayed ?? 0),
        i = (0, ed.bD)(t?.totalDaysPlayedPercentile);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: rD.dJ,
                children: [
                    (0, n.jsx)(iP, { icon: ay.CalendarIcon, children: tN.intl.string(tC.default["4N5p4D"]) }),
                    (0, n.jsx)(i3, { value: a }),
                ],
            }),
            (0, n.jsx)(iy, {
                children:
                    null != i
                        ? tN.intl.format(tC.default["4FXB/m"], {
                              percent: i,
                              percentHook: (e, t) => (0, n.jsx)(iQ, { children: e }, t),
                          })
                        : tN.intl.format(tC.default.iCKjh6, { numDays: a }),
            }),
        ],
    });
}
function rU(e) {
    let { numUsersPlayedEveryDay: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: rD.dJ,
                children: [
                    (0, n.jsx)(iP, { icon: ay.CalendarIcon, children: tN.intl.string(tC.default["dx4+NI"]) }),
                    (0, n.jsx)(i5, { value: t }),
                ],
            }),
            (0, n.jsx)(iy, { children: tN.intl.string(tC.default["7nfXWu"]) }),
        ],
    });
}
function rG() {
    let e = (0, g.bG)([h.A], () => h.A.stats?.games),
        t = (0, g.bG)([h.A], () => (0, ed.uO)(h.A.stats)),
        a = (0, g.bG)([h.A], () => h.A.globalStats?.games?.numUsersPlayedEveryDay),
        i = !t && null != a;
    return (0, n.jsx)(ix, {
        children: (0, n.jsxs)("div", {
            className: rD.kL,
            children: [
                (0, n.jsx)(th, {
                    animatedSrc:
                        "https://cdn.discordapp.com/assets/content/e3289e9a0a7faf4db23c3fefa390126fc64a09120fdb701f9dea833dddf671ef.png",
                    staticSrc:
                        "https://cdn.discordapp.com/assets/content/312abde9b19fcf85150d507de3f33096992506459b895ab3ea8d92c8f1e04a28.png",
                    className: rD.HW,
                }),
                (0, n.jsx)("div", {
                    className: rD.C,
                    children: i ? (0, n.jsx)(rU, { numUsersPlayedEveryDay: a }) : (0, n.jsx)(rP, { games: e }),
                }),
            ],
        }),
    });
}
var rH = a(95362),
    rF = a(828062);
function rK(e) {
    let { children: t } = e;
    return (0, n.jsx)(tI, { variant: "display-lg", className: rF.V, children: t });
}
function rB(e) {
    let { children: t } = e;
    return (0, n.jsx)(tE, { variant: "display-lg", className: rF.V, children: t });
}
var rz = a(109112),
    rV = a(311043),
    rW = a(883053);
function rq(e) {
    let { rank: t, className: a } = e;
    return (0, n.jsxs)(tS, { className: m()(rW.T, a), children: ["#", t] });
}
var rY = a(770178),
    rZ = a(102189);
let rX = { fireOnMount: !0, fireOnDepsChange: !0 };
function rQ(e) {
    let { text: t, textRef: a, children: i } = e,
        r = (function (e, t) {
            let [a, i] = p.useState(!1),
                r = p.useCallback((e) => {
                    let { target: t } = e;
                    i(t.scrollWidth > t.clientWidth);
                }, []);
            return ((0, rY.g)(e, r, [t], rX), a);
        })(a, t);
    return (0, n.jsx)(a1.m, {
        text: t,
        position: "bottom",
        anchorRef: a,
        shouldShow: r,
        ariaHidden: !0,
        children: i({ tabIndex: r ? 0 : void 0, className: rZ.Y }),
    });
}
var rJ = a(331144);
let r$ = {
        viewBox: `0 0 ${aA.width} ${aA.height}`,
        outline:
            "M-2 -2L183.811 -2L194 9.029L194 253L8.24 253L-2 242.84ZM0 242.007L9.064 251L192 251L192 9.811L182.936 0L0 0ZM-2 -2L182 -2L182 242L-2 242ZM0 240L180 240L180 0L0 0Z",
        corner: "M179.582 239.13L192.002 251.508",
    },
    r0 = {
        viewBox: `0 0 ${av.width} ${av.height}`,
        outline:
            "M-2 -2L221.452 -2L233.503 11.103L233.503 306.01L10.103 306.01L-2 293.947ZM0 293.117L10.929 304.01L231.503 304.01L231.503 11.883L220.574 0L0 0ZM-2 -2L222 -2L222 295L-2 295ZM0 293L220 293L220 0L0 0Z",
        corner: "M219.582 291.133L232.002 303.511",
        stripes:
            "M10.93 291.133l13.91 13.863M20.863 291.133l13.91 13.863M30.801 291.133l13.91 13.863M40.738 291.133l13.91 13.863M50.672 291.133l13.91 13.863M60.609 291.133l13.91 13.863M70.543 291.133l13.91 13.863M80.481 291.133l13.91 13.863M90.414 291.133l13.91 13.863M100.352 291.133l13.91 13.863M110.285 291.133l13.91 13.863M120.223 291.133l13.91 13.863M130.16 291.133l13.91 13.863M140.094 291.133l13.91 13.863M150.031 291.133l13.91 13.863M159.965 291.133l13.91 13.863M169.902 291.133l13.91 13.863M179.836 291.133l13.91 13.863M189.773 291.133l13.91 13.863M199.707 291.133l13.91 13.863M209.645 291.133l13.91 13.863M219.582 13.867l12.42 12.378M219.582 23.766l12.42 12.378M219.582 33.672l12.42 12.378M219.582 43.57l12.42 12.378M219.582 53.477l12.42 12.378M219.582 63.375l12.42 12.378M219.582 73.281l12.42 12.378M219.582 83.18l12.42 12.378M219.582 93.086l12.42 12.378M219.582 102.984l12.42 12.378M219.582 112.891l12.42 12.378M219.582 122.789l12.42 12.378M219.582 132.695l12.42 12.378M219.582 142.594l12.42 12.378M219.582 152.5l12.42 12.378M219.582 162.406l12.42 12.378M219.582 172.305l12.42 12.378M219.582 182.211l12.42 12.378M219.582 192.109l12.42 12.378M219.582 202.016l12.42 12.378M219.582 211.914l12.42 12.378M219.582 221.82l12.42 12.378M219.582 231.719l12.42 12.378M219.582 241.625l12.42 12.378M219.582 251.523l12.42 12.378M219.582 261.43l12.42 12.378M219.582 271.328l12.42 12.378M219.582 281.234l12.42 12.378",
    };
function r1(e) {
    let { paths: t, className: a, children: i } = e;
    return (0, n.jsxs)("div", {
        className: m()(rJ.aP, a),
        children: [
            (0, n.jsxs)("svg", {
                className: rJ.qd,
                viewBox: t.viewBox,
                preserveAspectRatio: "none",
                "aria-hidden": !0,
                children: [
                    null != t.stripes && (0, n.jsx)("path", { d: t.stripes, className: rJ.RY }),
                    (0, n.jsx)("path", { d: t.corner, className: rJ.WO }),
                ],
            }),
            i,
            (0, n.jsx)("svg", {
                className: rJ.qd,
                viewBox: t.viewBox,
                preserveAspectRatio: "none",
                "aria-hidden": !0,
                children: (0, n.jsx)("path", { d: t.outline, className: rJ.rj }),
            }),
        ],
    });
}
function r2(e) {
    return (0, n.jsx)(r1, { ...e, paths: r$ });
}
function r3(e) {
    return (0, n.jsx)(r1, { ...e, paths: r0 });
}
var r8 = a(497357);
function r7(e) {
    let {
            game: { id: t, name: a, coverImageHash: i },
            rank: r,
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
            [rV.A],
            () =>
                rV.A.getGame(t)?.getCoverURL(300) ??
                rI.Ay.getApplicationIconURL({ id: t, icon: i, size: 300, keepAspectRatio: !0, fallbackAvatar: !1 }),
        );
    return (0, n.jsxs)("div", {
        ...f,
        role: "listitem",
        className: m()(r8.LO, o),
        style: d,
        children: [
            (0, n.jsx)("div", {
                className: r8.Tn,
                "aria-hidden": null != l,
                children: (0, n.jsxs)(c, {
                    className: r8.LG,
                    children: [
                        null != b
                            ? (0, n.jsx)("img", { src: b, alt: "", className: r8.Qw })
                            : (0, n.jsx)("div", {
                                  className: m()(r8.Qw, r8.uj),
                                  children: (0, n.jsx)(rz.UnknownGameIcon, { size: "lg" }),
                              }),
                        null != r && (0, n.jsx)(rq, { rank: r, className: r8.Tm }),
                    ],
                }),
            }),
            (0, n.jsxs)("div", {
                className: r8.zH,
                "aria-hidden": null != l,
                children: [
                    (0, n.jsx)(tI, {
                        ref: u,
                        variant: "heading-xl/medium",
                        className: r8.UU,
                        lineClamp: h,
                        children: a,
                    }),
                    (0, n.jsx)(tI, { variant: "mono-md/bold", className: r8.Pf, children: s }),
                ],
            }),
            null != l && (0, n.jsx)(v.A, { children: l }),
        ],
    });
}
function r5(e) {
    let t = p.useRef(null);
    return (0, n.jsx)(rQ, {
        text: e.game.name,
        textRef: t,
        children: (a) => {
            let { tabIndex: i, className: r } = a;
            return (0, n.jsx)(r7, { ...e, className: m()(e.className, r), tabIndex: i, textRef: t, lineClamp: 1 });
        },
    });
}
function r6(e, t, a) {
    return tN.intl.formatToPlainString(tC.default.mqdLhl, { gameName: e.name, rank: t, numSessions: a });
}
function r9(e) {
    let { numSessions: t, ...a } = e,
        i = Math.round(t);
    return (0, n.jsx)(r5, { ...a, label: i, frame: r2, style: aI, accessibilityLabel: r6(a.game, a.rank, i) });
}
function r4(e) {
    let { numSessions: t, ...a } = e,
        i = Math.round(t);
    return (0, n.jsx)(r5, { ...a, rank: 1, label: i, frame: r3, style: aE, accessibilityLabel: r6(a.game, 1, i) });
}
function ne(e) {
    return (0, n.jsx)(r7, { ...e, frame: r2, style: aI, className: r8.Ku });
}
var nt = a(842807);
let na = [];
function ni(e) {
    let { gameStats: t } = e,
        a = Math.round(t?.totalGamesPlayed ?? 0),
        i = (0, ed.bD)(t?.totalGamesPlayedPercentile),
        r = t?.games ?? na;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: nt.wx,
                children: [
                    (0, n.jsxs)("div", {
                        className: nt.dJ,
                        children: [
                            (0, n.jsx)(iP, {
                                icon: ak.GameControllerIcon,
                                children: tN.intl.string(tC.default.HM2fjf),
                            }),
                            (0, n.jsx)(i3, { value: a, className: nt.ai }),
                        ],
                    }),
                    (0, n.jsx)("div", {
                        className: nt.h_,
                        children: (0, n.jsx)(iy, {
                            children:
                                null != i
                                    ? tN.intl.format(tC.default["hc0/yJ"], {
                                          percent: i,
                                          percentHook: (e, t) => (0, n.jsx)(iQ, { children: e }, t),
                                      })
                                    : tN.intl.format(tC.default.aJMJ6b, { numGames: a }),
                        }),
                    }),
                ],
            }),
            (0, n.jsx)(rH.Ip, {
                orientation: "horizontal",
                scrollbarGutter: !1,
                fade: !0,
                className: nt.ag,
                role: "list",
                children: r.map((e, t) => {
                    let { game: a, numSessions: i } = e;
                    return 0 === t
                        ? (0, n.jsx)(r4, { game: a, numSessions: i }, a.id)
                        : (0, n.jsx)(r9, { game: a, rank: t + 1, numSessions: i }, a.id);
                }),
            }),
        ],
    });
}
function nr(e) {
    let { gameStats: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: m()(nt.wx, nt.l7),
                children: [
                    (0, n.jsxs)("div", {
                        className: nt.dJ,
                        children: [
                            (0, n.jsx)(ip, { className: nt.gi }),
                            (0, n.jsx)(rB, { children: tN.intl.string(tC.default.qbCgI7) }),
                        ],
                    }),
                    (0, n.jsx)("div", {
                        className: nt.h_,
                        children: (0, n.jsx)(iy, { children: tN.intl.string(tC.default["0oDeiM"]) }),
                    }),
                ],
            }),
            (0, n.jsx)("div", {
                className: m()(nt.ag, nt.Zs),
                role: "list",
                children: el.Jb.map((e) => {
                    let { list: a, label: i } = e,
                        r = t[a][0];
                    return null != r ? (0, n.jsx)(ne, { game: r, label: tN.intl.string(i) }, a) : null;
                }),
            }),
        ],
    });
}
function nn() {
    let e = (0, g.bG)([h.A], () => h.A.stats?.games),
        t = (0, g.bG)([h.A], () => (0, ed.IH)(h.A.stats)),
        a = (0, g.bG)([h.A], () => h.A.globalStats?.games),
        i = !t && null != a;
    return (0, n.jsx)(ix, {
        children: (0, n.jsx)("div", {
            className: m()(nt.kL, { [nt.TF]: i }),
            children: i ? (0, n.jsx)(nr, { gameStats: a }) : (0, n.jsx)(ni, { gameStats: e }),
        }),
    });
}
var ns = a(167662);
function nc(e) {
    let { messages: t } = e,
        a = Math.round(t?.numMessagesSent ?? 0),
        i = (0, ed.bD)(t?.numMessagesSentPercentile);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: ns.dJ,
                children: [
                    (0, n.jsx)(iP, { icon: aP.ChatIcon, children: tN.intl.string(aU.default.wWKySP) }),
                    (0, n.jsx)(i3, { value: a }),
                ],
            }),
            (0, n.jsx)(iy, {
                children:
                    null != i
                        ? tN.intl.format(tC.default.TOMBAW, {
                              percent: i,
                              percentHook: (e, t) => (0, n.jsx)(iQ, { children: e }, t),
                          })
                        : tN.intl.format(tC.default.cYCqz8, { numMessages: a }),
            }),
        ],
    });
}
function nd(e) {
    let { numWordsSent: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: ns.dJ,
                children: [
                    (0, n.jsx)(iP, { icon: aP.ChatIcon, children: tN.intl.string(tC.default["2BuyVC"]) }),
                    (0, n.jsx)(i5, { value: t }),
                ],
            }),
            (0, n.jsx)(iy, {
                children: tN.intl.format(tC.default.bAxEs2, {
                    numWords: (0, ed.wj)(t),
                    numCopies: (0, ed.wj)((0, ed.yQ)(t)),
                }),
            }),
        ],
    });
}
function nl() {
    let e = (0, g.bG)([h.A], () => h.A.stats?.messages),
        t = (0, g.bG)([h.A], () => (0, ed.nb)(h.A.stats)),
        a = (0, g.bG)([h.A], () => h.A.globalStats?.messages?.numWordsSent),
        i = !t && null != a;
    return (0, n.jsx)(ix, {
        children: (0, n.jsxs)("div", {
            className: ns.kL,
            children: [
                (0, n.jsx)(th, {
                    animatedSrc:
                        "https://cdn.discordapp.com/assets/content/d2d8036bb6a32967893421f9956b9e8ed30abde474f68c1a34e824205549c5a1.png",
                    staticSrc:
                        "https://cdn.discordapp.com/assets/content/1dfd8684180df4216b23f0a61617250be8fcc12bc1970ac259892f34fbdb836d.png",
                    className: ns.HW,
                }),
                (0, n.jsx)("div", {
                    className: ns.C,
                    children: i ? (0, n.jsx)(nd, { numWordsSent: a }) : (0, n.jsx)(nc, { messages: e }),
                }),
            ],
        }),
    });
}
var no = a(682163),
    nu = a(224865);
let nh = no.iu[no.Ay.Sizes.XLARGE];
function nf(e) {
    let { guild: t, size: a } = e;
    return null == t.icon && a < 48
        ? (0, n.jsx)("div", {
              className: m()(nu.K, nu.J),
              style: { width: a, height: a },
              "aria-hidden": !0,
              children: (0, n.jsx)(tA.E, { variant: "body-md/medium", children: (0, ed.oW)(t.name) }),
          })
        : (0, n.jsx)(no.Ay, {
              guild: t,
              size: no.Ay.Sizes.XLARGE,
              iconSize: a,
              textScale: a / nh,
              className: nu.K,
              style: { width: a, height: a, borderRadius: 0 },
              "aria-hidden": !0,
          });
}
var nb = a(140645);
function np(e) {
    let { numVoiceMinutes: t, numMessagesSent: a } = e,
        i = Math.round(t),
        r = Math.round(a);
    return (0, n.jsxs)("div", {
        className: nb.M1,
        children: [
            (0, n.jsxs)("div", {
                className: nb.dJ,
                "aria-hidden": !0,
                children: [
                    (0, n.jsx)(aK.MicrophoneIcon, { size: "md", color: "currentColor" }),
                    (0, n.jsx)(tI, { variant: "mono-md/bold", className: nb.Qq, children: i }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: nb.dJ,
                "aria-hidden": !0,
                children: [
                    (0, n.jsx)(aP.ChatIcon, { size: "md", color: "currentColor" }),
                    (0, n.jsx)(tI, { variant: "mono-md/bold", className: nb.Qq, children: r }),
                ],
            }),
            (0, n.jsx)(v.A, {
                children: tN.intl.formatToPlainString(tC.default["OQjeY/"], { numMinutes: i, numMessages: r }),
            }),
        ],
    });
}
var n_ = a(972106);
let nm = [];
function nx(e) {
    let { guild: t, rank: a, iconSize: i = 100, children: r } = e,
        s = p.useRef(null);
    return (0, n.jsx)(rQ, {
        text: t.name,
        textRef: s,
        children: (e) => {
            let { tabIndex: c, className: d } = e;
            return (0, n.jsxs)("li", {
                className: m()(n_.w_, d),
                tabIndex: c,
                children: [
                    (0, n.jsxs)("div", {
                        className: n_.jj,
                        children: [
                            (0, n.jsx)(rq, { rank: a }),
                            (0, n.jsxs)("div", {
                                className: n_.gI,
                                children: [
                                    (0, n.jsx)(tI, {
                                        ref: s,
                                        variant: "heading-xxl/medium",
                                        className: n_.J5,
                                        lineClamp: 1,
                                        children: t.name,
                                    }),
                                    r,
                                ],
                            }),
                        ],
                    }),
                    (0, n.jsx)(nf, { guild: t, size: i }),
                ],
            });
        },
    });
}
function ng(e) {
    let { guild: t, numVoiceMinutes: a, numMessagesSent: i } = e;
    return (0, n.jsx)(nx, {
        guild: t,
        rank: 1,
        iconSize: 140,
        children: (0, n.jsx)(np, { numVoiceMinutes: a, numMessagesSent: i }),
    });
}
function nA(e) {
    let { guilds: t } = e,
        a = tg();
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: n_.wx,
                children: [
                    (0, n.jsxs)(iL, {
                        ref: a,
                        className: n_.R_,
                        accessibilityLabel: tN.intl.string(tC.default.FroqRf),
                        children: [
                            (0, n.jsx)(iD, { icon: aH.ServerIcon, children: tN.intl.string(tC.default.Mb5E6r) }),
                            (0, n.jsx)(rK, { children: tN.intl.string(aU.default.F0fkrh) }),
                        ],
                    }),
                    (0, n.jsx)(iy, { children: tN.intl.string(tC.default.IN1DaS) }),
                ],
            }),
            (0, n.jsx)("ul", {
                className: n_.Pl,
                children: t.map((e, t) => {
                    let { guild: a, numMessagesSent: i, numVoiceMinutes: r } = e;
                    return 0 === t
                        ? (0, n.jsx)(ng, { guild: a, numMessagesSent: i ?? 0, numVoiceMinutes: r ?? 0 }, a.id)
                        : (0, n.jsx)(nx, { guild: a, rank: t + 1 }, a.id);
                }),
            }),
        ],
    });
}
function nv(e) {
    let { guilds: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: n_.wx,
                children: [
                    (0, n.jsxs)("div", {
                        className: n_.R_,
                        children: [
                            (0, n.jsx)(ip, { className: n_.gi }),
                            (0, n.jsx)(rB, { children: tN.intl.string(aU.default.F0fkrh) }),
                        ],
                    }),
                    (0, n.jsx)(iy, { children: tN.intl.string(tC.default.bhnqop) }),
                ],
            }),
            (0, n.jsx)("ul", {
                className: n_.Pl,
                children: t.map((e, t) => (0, n.jsx)(nx, { guild: e, rank: t + 1 }, e.id)),
            }),
        ],
    });
}
function nw() {
    let e = (0, g.bG)([h.A], () => h.A.stats?.guilds?.guilds ?? nm),
        t = (0, g.bG)([h.A], () => h.A.globalStats?.guilds?.guildsByMembers),
        a = 0 === e.length && null != t;
    return (0, n.jsx)(ix, {
        children: (0, n.jsx)("div", {
            className: n_.kL,
            children: a ? (0, n.jsx)(nv, { guilds: t }) : (0, n.jsx)(nA, { guilds: e }),
        }),
    });
}
var nI = a(155094);
function nE(e) {
    let { icon: t, title: a, description: i } = e;
    return (0, n.jsx)(ix, {
        children: (0, n.jsxs)("div", {
            className: nI.Q,
            children: [(0, n.jsx)(iP, { icon: t, children: a }), (0, n.jsx)(iy, { children: i })],
        }),
    });
}
var nj = a(7584),
    nS = a(33293),
    nC = a(498137),
    nN = a(192339),
    nT = a(834109),
    nR = a(48763);
function nO(e) {
    let { character: t } = e,
        a = (0, E.o)(t);
    return (0, n.jsxs)(nC.A, {
        cardColorPalette: a,
        size: nR.W.LG,
        children: [(0, n.jsx)(nN.A, {}), (0, n.jsx)(nT.A, { variant: "full" }), (0, n.jsx)(nS.A, { character: t })],
    });
}
var nM = a(58410);
function ny() {
    let e = (0, g.bG)([h.A], () => h.A.stats),
        t = (0, g.bG)([h.A], () => h.A.character),
        a = tg();
    return (0, n.jsx)(ix, {
        children: (0, n.jsxs)("div", {
            className: nM.z,
            children: [
                null != t ? (0, n.jsx)(nO, { character: t }) : null,
                (0, n.jsxs)("div", {
                    className: m()(nM.zH, null === e && nM.gz),
                    children: [
                        (0, n.jsxs)(iL, {
                            ref: a,
                            className: nM.R_,
                            accessibilityLabel: tN.intl.string(tC.default.ASrTAc),
                            children: [
                                (0, n.jsx)(iD, {
                                    icon: iE.ExperimentalCheckpointIcon,
                                    children: tN.intl.string(aU.default.ir6nEQ),
                                }),
                                (0, n.jsx)(tI, {
                                    variant: "display-lg",
                                    className: nM.Vy,
                                    children: tN.intl.string(aU.default.y4M1na),
                                }),
                            ],
                        }),
                        null === e ? (0, n.jsx)(nL, { character: t }) : (0, n.jsx)(nk, { stats: e }),
                    ],
                }),
            ],
        }),
    });
}
function nL(e) {
    let { character: t } = e,
        { primaryBackgroundColor: a } = (0, E.j)((0, E.o)(t));
    return (0, n.jsx)(tI, {
        tag: "p",
        variant: "heading-xl/medium",
        style: { color: a },
        children: tN.intl.string(tC.default["GL+yOs"]),
    });
}
function nk(e) {
    let { stats: t } = e,
        a = t.guilds?.guilds[0],
        i = t.emojis?.emojis[0],
        r = t.games?.games[0]?.game,
        s =
            null != r
                ? rI.Ay.getApplicationIconURL({ id: r.id, icon: r.iconHash, size: 40, fallbackAvatar: !1 })
                : void 0;
    return (0, n.jsxs)("div", {
        className: nM.M1,
        children: [
            (0, n.jsx)(nD, { label: tN.intl.string(tC.default.MSrV9z), value: t.voice?.totalVoiceMinutes }),
            (0, n.jsx)(nD, { label: tN.intl.string(tC.default.hhh11L), value: t.messages?.numMessagesSent }),
            (0, n.jsx)(nD, { label: tN.intl.string(tC.default["f5S+pt"]), value: a?.numDaysInteracted }),
            (0, n.jsx)(nP, {
                label: tN.intl.string(aU.default["8XPMJj"]),
                icon: null != a ? (0, n.jsx)(nf, { guild: a.guild, size: 40 }) : (0, n.jsx)(nU, {}),
                name: null != a ? a.guild.name : tN.intl.string(tN.t.PoWNfe),
            }),
            (0, n.jsx)(nD, { label: tN.intl.string(tC.default.xVSlv3), value: t.emojis?.numEmojisSent }),
            (0, n.jsx)(nP, {
                label: tN.intl.string(aU.default["3sARW7"]),
                icon:
                    null != i
                        ? (0, n.jsx)(iZ.A, {
                              emojiId: i.id,
                              emojiName: null == i.id ? i.name : void 0,
                              animated: i.animated,
                              alt: "",
                              className: nM.Kk,
                          })
                        : (0, n.jsx)(nU, {}),
                name:
                    null == i
                        ? tN.intl.string(tN.t.PoWNfe)
                        : null == i.id
                          ? nj.Ay.convertSurrogateToName(i.name)
                          : `:${i.name}:`,
            }),
            (0, n.jsx)(nD, { label: tN.intl.string(tC.default.y2Y1DD), value: t.games?.totalDaysPlayed }),
            (0, n.jsx)(nP, {
                label: tN.intl.string(aU.default.RbT4Zq),
                icon:
                    null != s
                        ? (0, n.jsx)("img", { src: s, alt: "", className: m()(nM.Kk, nM.Gt) })
                        : null == r
                          ? (0, n.jsx)(nU, {})
                          : (0, n.jsx)("div", {
                                className: m()(nM.Kk, nM.Gc),
                                children: (0, n.jsx)(rz.UnknownGameIcon, { size: "md", color: "currentColor" }),
                            }),
                name: null != r ? r.name : tN.intl.string(tN.t.PoWNfe),
            }),
        ],
    });
}
function nD(e) {
    let { label: t, value: a } = e;
    return (0, n.jsxs)("div", {
        className: nM.dJ,
        children: [
            (0, n.jsx)(tI, { variant: "heading-md/semibold", children: t }),
            (0, n.jsx)(tI, {
                variant: "heading-xxl/medium",
                className: nM.wk,
                children: Math.round(a ?? 0).toLocaleString(tN.intl.currentLocale),
            }),
        ],
    });
}
function nP(e) {
    let { label: t, icon: a, name: i } = e,
        r = p.useRef(null);
    return (0, n.jsx)(rQ, {
        text: i,
        textRef: r,
        children: (e) => {
            let { tabIndex: s, className: c } = e;
            return (0, n.jsxs)("div", {
                className: m()(nM.dJ, nM.u4, c),
                tabIndex: s,
                children: [
                    (0, n.jsx)(tI, { variant: "heading-md/semibold", children: t }),
                    (0, n.jsxs)("div", {
                        className: nM.AS,
                        children: [
                            a,
                            (0, n.jsx)(tI, {
                                ref: r,
                                variant: "heading-xl/medium",
                                lineClamp: 1,
                                className: nM.TJ,
                                children: i,
                            }),
                        ],
                    }),
                ],
            });
        },
    });
}
function nU() {
    return (0, n.jsx)("div", {
        className: m()(nM.Kk, nM.Gc, nM.Wn),
        children: (0, n.jsx)(rz.UnknownGameIcon, { size: "lg", color: "currentColor" }),
    });
}
var nG = a(651946);
function nH() {
    let e = (0, g.bG)([h.A], () => h.A.stats?.guilds?.guilds[0]),
        t = Math.round(e?.numDaysInteracted ?? 0),
        a = (0, ed.bD)(e?.numDaysInteractedPercentile),
        i = p.useRef(null);
    return (0, n.jsx)(ix, {
        children: (0, n.jsxs)("div", {
            className: nG.kL,
            children: [
                (0, n.jsxs)("div", {
                    className: nG.wx,
                    children: [
                        (0, n.jsxs)("div", {
                            className: nG.R_,
                            children: [
                                (0, n.jsx)(iP, { icon: aH.ServerIcon, children: tN.intl.string(tC.default["M+a+t1"]) }),
                                (0, n.jsx)(i3, { value: t }),
                            ],
                        }),
                        (0, n.jsx)(iy, {
                            children:
                                null != a
                                    ? tN.intl.format(tC.default.sIDTV1, {
                                          numDays: t,
                                          percent: a,
                                          percentHook: (e, t) => (0, n.jsx)(iQ, { children: e }, t),
                                      })
                                    : tN.intl.format(tC.default.nLCUQ4, { numDays: t }),
                        }),
                    ],
                }),
                null != e &&
                    (0, n.jsx)("div", {
                        className: nG.bU,
                        children: (0, n.jsx)(rQ, {
                            text: e.guild.name,
                            textRef: i,
                            children: (t) => {
                                let { tabIndex: a, className: r } = t;
                                return (0, n.jsxs)("div", {
                                    className: m()(nG.Nr, r),
                                    style: { width: 360 },
                                    tabIndex: a,
                                    children: [
                                        (0, n.jsx)(nf, { guild: e.guild, size: 360 }),
                                        (0, n.jsxs)("div", {
                                            className: nG.zH,
                                            children: [
                                                (0, n.jsx)(tI, {
                                                    ref: i,
                                                    variant: "heading-xxl/medium",
                                                    className: nG.J5,
                                                    lineClamp: 1,
                                                    children: e.guild.name,
                                                }),
                                                (0, n.jsx)(np, {
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
var nF = a(270704);
function nK(e) {
    let { voice: t } = e,
        a = Math.round(t?.totalVoiceMinutes ?? 0),
        i = (0, ed.bD)(t?.totalVoiceMinutesPercentile);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: nF.dJ,
                children: [
                    (0, n.jsx)(iP, { icon: aK.MicrophoneIcon, children: tN.intl.string(tC.default["3/T12E"]) }),
                    (0, n.jsx)(i3, { value: a, alignment: "center" }),
                ],
            }),
            (0, n.jsx)(iy, {
                children:
                    null != i
                        ? tN.intl.format(tC.default.RqXsIs, {
                              percent: i,
                              percentHook: (e, t) => (0, n.jsx)(iQ, { children: e }, t),
                          })
                        : tN.intl.format(tC.default.Y3poDW, { numMinutes: a }),
            }),
        ],
    });
}
function nB(e) {
    let { peakHour: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: nF.dJ,
                children: [
                    (0, n.jsx)(iP, { icon: aK.MicrophoneIcon, children: tN.intl.string(tC.default.ZCwB8J) }),
                    (0, n.jsx)(i5, { value: t }),
                ],
            }),
            (0, n.jsx)(iy, { children: tN.intl.string(tC.default.huiTne) }),
        ],
    });
}
function nz() {
    let e = (0, g.bG)([h.A], () => h.A.stats?.voice),
        t = (0, g.bG)([h.A], () => (0, ed.Kr)(h.A.stats)),
        a = (0, g.bG)([h.A], () => h.A.globalStats?.voice?.peakHourUtc),
        i = (0, ed.XF)(a)?.value,
        r = !t && null != i;
    return (0, n.jsxs)(ix, {
        children: [
            (0, n.jsx)(th, {
                animatedSrc:
                    "https://cdn.discordapp.com/assets/content/04746dc04eab575d0168935af2b1b3f97e2e00439f84bd0f0474276e0c5a81dc.png",
                staticSrc:
                    "https://cdn.discordapp.com/assets/content/c4c2d6b631bff3da4e4bb9afffc8f89bc9fb6f76a2fcd824f8a7af83eb7f1e6b.png",
                className: nF.Tp,
            }),
            (0, n.jsx)("div", {
                className: nF.Qs,
                children: r ? (0, n.jsx)(nB, { peakHour: i }) : (0, n.jsx)(nK, { voice: e }),
            }),
        ],
    });
}
function nV(e) {
    let { route: t, onNextStep: a, onPreviousStep: i } = e;
    if (t === C.gr.HOME) return (0, n.jsx)(iY, { onStart: a });
    if (t === C.gr.INTRODUCTION) return (0, n.jsx)(iv, {});
    let { statsScreen: r } = (0, C.UG)(t);
    switch (r) {
        case C.oI.VOICE_INTRO:
            return (0, n.jsx)(nE, {
                icon: aK.MicrophoneIcon,
                title: tN.intl.string(tC.default["/7XYsa"]),
                description: tN.intl.string(tC.default["X8/G/o"]),
            });
        case C.oI.VOICE:
            return (0, n.jsx)(nz, {});
        case C.oI.MESSAGES_INTRO:
            return (0, n.jsx)(nE, {
                icon: aP.ChatIcon,
                title: tN.intl.string(tC.default["2BuyVC"]),
                description: tN.intl.string(tC.default["kF+Y3a"]),
            });
        case C.oI.MESSAGES:
            return (0, n.jsx)(nl, {});
        case C.oI.SERVERS_INTRO:
            return (0, n.jsx)(nE, {
                icon: aH.ServerIcon,
                title: tN.intl.string(aU.default.F0fkrh),
                description: tN.intl.string(tC.default.Xg82Gy),
            });
        case C.oI.SERVERS:
            return (0, n.jsx)(nw, {});
        case C.oI.TOP_SERVER:
            return (0, n.jsx)(nH, {});
        case C.oI.EMOJI_INTRO:
            return (0, n.jsx)(nE, {
                icon: tx.EmojiSlightlySmilingFaceIcon,
                title: tN.intl.string(tC.default.ZTDCIv),
                description: tN.intl.string(tC.default.y8Sr8J),
            });
        case C.oI.EMOJI:
            return (0, n.jsx)(rb, {});
        case C.oI.GAMES_INTRO:
            return (0, n.jsx)(nE, {
                icon: ak.GameControllerIcon,
                title: tN.intl.string(tC.default.HM2fjf),
                description: tN.intl.string(tC.default.LQiFqJ),
            });
        case C.oI.GAMES:
            return (0, n.jsx)(nn, {});
        case C.oI.GAME_TIME:
            return (0, n.jsx)(rG, {});
        case C.oI.SQUAD:
        case C.oI.SIDEKICK:
            return (0, n.jsx)(rO, { route: t, onNextStep: a, onPreviousStep: i });
        case C.oI.SUMMARY:
            return (0, n.jsx)(ny, {});
        case C.oI.SHARE:
            return (0, n.jsx)(iH, {});
        default:
            return null;
    }
}
var nW = a(650809),
    nq = a(428692);
let nY = {
    [C.s9.FACE]: { icon: aK.MicrophoneIcon, label: tN.t.K3lovD },
    [C.s9.OUTFIT]: { icon: aP.ChatIcon, label: tN.t.OIgYlQ },
    [C.s9.HEADWEAR]: { icon: aH.ServerIcon, label: tN.t["7hB4kg"] },
    [C.s9.SHOES]: { icon: tx.EmojiSlightlySmilingFaceIcon, label: tN.t.sMOuuS },
    [C.s9.WEARABLE]: { icon: ak.GameControllerIcon, label: tN.t.URyqtP },
    [C.s9.AURA]: { icon: ay.CalendarIcon, label: tC.default.y2Y1DD },
    [C.s9.ASSEMBLED]: { icon: rm.FriendsIcon, label: tN.t.TdEu5X },
    [C.s9.FINALIZE]: { icon: nW.PaintPaletteIcon, label: tC.default.gmMD2I },
    [C.s9.SUMMARY]: { icon: iE.ExperimentalCheckpointIcon, label: aU.default.y4M1na },
};
function nZ(e) {
    let {
            step: { icon: t, label: a, route: i },
            state: r,
            disabled: s,
            blockedTraitDescriptionId: c,
            sound: d,
            onRouteClick: l,
        } = e,
        o = tN.intl.string(a),
        u = "unlocked" === r,
        {
            onPointerDown: h,
            onKeyDown: f,
            onClickWithSound: b,
        } = ie({ source: d, onClick: () => l(i), disabled: s || !u });
    return (0, n.jsx)(a1.m, {
        text: "locked" === r ? null : o,
        ariaHidden: !0,
        children: (0, n.jsxs)(rx.D, {
            onPointerDown: u ? h : void 0,
            onKeyDown: u ? f : void 0,
            onClick: u ? b : void 0,
            tabIndex: u ? 0 : -1,
            role: "tab",
            "aria-selected": "active" === r,
            className: m()(nq.PM, { [nq.Xj]: "active" === r, [nq.CD]: u, [nq.vk]: u && !s }),
            "aria-label": o,
            "aria-disabled": "locked" === r || (u && s),
            "aria-describedby": u ? c : void 0,
            children: [
                (0, n.jsx)("div", { className: m()(nq.Om, { [nq.hZ]: "locked" !== r }) }),
                (0, n.jsx)(t, { size: "xs", color: "currentColor", className: nq.Kk }),
            ],
        }),
    });
}
function nX(e) {
    let {
            flow: t,
            stats: a,
            activeRoute: i,
            isRouteBlocked: r,
            isCharacterExiting: s,
            blockedTraitDescriptionId: c,
            onRouteClick: d,
        } = e,
        l = (function (e, t) {
            let a = [];
            for (let i of (0, S.p5)({ flow: e, stats: t })) {
                let { characterStage: e } = (0, C.UG)(i),
                    t = nY[e];
                null != t && a.at(-1)?.stage !== e && a.push({ ...t, stage: e, route: i });
            }
            return a;
        })(t, a),
        { characterStage: o } = (0, C.UG)(i),
        u = l.findIndex((e) => {
            let { stage: t } = e;
            return t === o;
        }),
        [f, b] = p.useState(u);
    u > f && b(u);
    let _ = (0, g.bG)([h.A], () => h.A.isSaving);
    return -1 === u
        ? null
        : (0, n.jsx)("div", {
              className: nq.qB,
              role: "tablist",
              "aria-label": tN.intl.string(tC.default.DyMw85),
              children: l.map((e, t) =>
                  (0, n.jsx)(
                      nZ,
                      {
                          step: e,
                          state: t === u ? "active" : t <= f ? "unlocked" : "locked",
                          disabled: _ || r || s,
                          blockedTraitDescriptionId: c,
                          sound: t < u ? aJ : a$,
                          onRouteClick: d,
                      },
                      e.stage,
                  ),
              ),
          });
}
var nQ = a(517782);
function nJ() {
    let e = p.useId(),
        t = p.useRef(null);
    return (p.useEffect(() => (A.O.moveTo?.(e, t.current), () => A.O.remove?.(e)), [e]), (0, n.jsx)(v.A, { ref: t }));
}
function n$(e) {
    let t,
        a,
        { onClose: i } = e;
    ((0, g.bG)([h.A], () => h.A.fetchState),
        (t = (0, g.yK)([h.A], () => {
            let { stats: e, globalStats: t } = h.A,
                a = t?.games;
            if ((0, ed.IH)(e) || null == a)
                return (
                    e?.games?.games.map((e) => {
                        let { game: t } = e;
                        return t.id;
                    }) ?? []
                );
            let i = [];
            return (
                el.Jb.forEach((e) => {
                    let { list: t } = e,
                        r = a[t][0];
                    null != r && i.push(r.id);
                }),
                i
            );
        })),
        p.useEffect(() => {
            let { fetchState: e } = h.A;
            (e === h.T.INIT || e === h.T.ERROR) && (0, u.nX)();
        }, []),
        p.useEffect(() => {
            (0, ec.E)(t);
        }, [t]));
    let r = (0, g.bG)([h.A], () => (0, S.bL)(h.A.stats)),
        [s, c] = (function (e) {
            let [t, a] = p.useState(() =>
                (function (e) {
                    let { character: t, progress: a, stats: i, isCharacterCreatorEnabled: r } = h.A,
                        n = null != t ? C.s9.SUMMARY : a?.stage;
                    return (
                        (0, S.p5)({ flow: e, stats: i, character: t, isCharacterCreatorEnabled: r }).find(
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
        })(r),
        d = (function (e) {
            let t = (0, g.bG)([B.Ay], () => B.Ay.useReducedMotion),
                [a, i] = p.useState(e),
                [r, n] = p.useState(!1);
            if (e !== a) {
                let r = (0, C.Rq)(a),
                    s = (0, C.Rq)(e);
                (i(e), n(!t && r && s));
            }
            return (
                p.useEffect(() => {
                    if (!r) return;
                    let e = setTimeout(() => n(!1), ee.duration);
                    return () => clearTimeout(e);
                }, [r, e]),
                r
            );
        })(s);
    (p.useEffect(() => {
        (f.A.setStepName(s), (0, b.if)(s));
    }, [s]),
        (0, es.l0)(() => {
            (f.A.stop(), (0, b.i)(f.A.getStepName()));
        }),
        p.useEffect(() => {
            let e = !1;
            function t() {
                e = !0;
            }
            return (
                er.h.subscribe("CHECKPOINT_COMPLETE_SUCCESS", t),
                () => {
                    (er.h.unsubscribe("CHECKPOINT_COMPLETE_SUCCESS", t), e && (0, en.hs)(ei.w.CHECKPOINT_COMPLETED));
                }
            );
        }, []),
        (a = (0, g.bG)([l.A], () => l.A.isFocused() && l.A.isVisible())),
        p.useEffect(() => {
            f.A.setForeground(a);
        }, [a]));
    let { characterStage: o, statsScreen: _ } = (0, C.UG)(s),
        A = s === C.gr.HOME || null != _,
        P = A ? z.STATS : d ? z.CUSTOMIZATION_ROUTE_CHANGE : null,
        U = s === C.gr.INTRODUCTION,
        G = (0, C.Rq)(s),
        H = (0, g.bG)([h.A], () => (h.A.fetchState === h.T.SUCCESS ? h.A.stats : void 0)),
        Y = (0, g.bG)([h.A], () => h.A.character),
        Z = p.useMemo(
            () =>
                (function (e, t) {
                    switch (e) {
                        case C.gr.SUMMARY:
                        case C.gr.SHARE:
                            let a = (0, E.o)(t),
                                { primaryBackgroundColor: i, shadowColor: r } = (0, E.j)(a);
                            return {
                                ...aj,
                                "--custom-checkpoint-primary": i,
                                "--custom-checkpoint-button-border": i,
                                "--custom-checkpoint-button-shadow": r,
                                "--custom-checkpoint-background-gradient-start": i,
                            };
                        default:
                            return aj;
                    }
                })(s, Y),
            [s, Y],
        ),
        X = (function () {
            let { isMuted: e, volume: t } = (0, g.cf)([h.A], () => ({ isMuted: h.A.isMuted, volume: h.A.volume })),
                a = p.useRef(new Map()),
                i = p.useRef(null),
                r = p.useCallback(() => {
                    (i.current?.(), a.current.forEach((e) => e.pause()));
                }, []);
            return (
                p.useEffect(() => ((a.current = new Map(L.map((e) => [e, new Audio(e)]))), r), [r]),
                p.useEffect(() => {
                    a.current.forEach((a) => {
                        ((a.muted = e), (a.volume = t));
                    });
                }, [e, t]),
                p.useCallback(
                    (e) => {
                        var t;
                        let n;
                        (r(),
                            (t = (e) => {
                                let t = a.current.get(e);
                                null == t || h.A.isMuted || 0 === h.A.volume || ((t.currentTime = 0), t.play());
                            }),
                            (n = []),
                            e.forEach((e) => {
                                let { source: a, delayMs: i } = e;
                                i > 0 ? n.push(setTimeout(() => t(a), i)) : t(a);
                            }),
                            (i.current = () => n.forEach((e) => clearTimeout(e))));
                    },
                    [r],
                )
            );
        })(),
        $ = F(),
        et = (0, j.k0)(s, $),
        ea = p.useId(),
        eo = null != et ? ea : void 0,
        ef = p.useCallback(
            (e) => {
                let t = (function (e) {
                    let { previousRoute: t, route: a } = e;
                    if (t === C.gr.SIDEKICK_LEAVE && a === C.gr.SIDEKICK) return null;
                    if (t === C.gr.FINALIZE_CHARACTER && a === C.gr.SUMMARY) return [{ source: R, delayMs: 0 }];
                    let i = [];
                    return (
                        a === C.gr.INTRODUCTION
                            ? (i.push({ source: N, delayMs: 0 }),
                              i.push({ source: y, delayMs: 2500 }),
                              i.push({ source: T, delayMs: 2800 }))
                            : k(t) && D(a)
                              ? i.push({ source: O, delayMs: 0 })
                              : D(t) && k(a) && (i.push({ source: M, delayMs: 0 }), i.push({ source: y, delayMs: 0 })),
                        i
                    );
                })({ previousRoute: s, route: e });
                (null != t && X(t), c(e));
            },
            [s, X, c],
        ),
        ep = p.useCallback(
            (e) => {
                let t = (0, S.SK)({ flow: r, stats: H, currentRoute: s, direction: e });
                if (null == t) {
                    1 === e && i();
                    return;
                }
                ef(t);
            },
            [s, r, ef, i, H],
        ),
        em = p.useCallback(() => ep(-1), [ep]),
        eg = p.useCallback(() => ep(1), [ep]),
        {
            isCharacterExiting: eA,
            startExit: ev,
            handleExitPlaying: eI,
        } = (function (e) {
            let { onExitPlaying: t, onExitFinished: a } = e,
                i = (0, g.bG)([B.Ay], () => B.Ay.useReducedMotion),
                [r, n] = p.useState("none"),
                s = (0, K.A)(() => {
                    (n("none"), a());
                });
            p.useEffect(() => {
                if ("none" === r) return;
                let e = setTimeout(s, "beaming" === r ? 750 : 2e3);
                return () => clearTimeout(e);
            }, [r, s]);
            let c = (0, K.A)(() => {
                    i ? a() : n("loading_textures");
                }),
                d = (0, K.A)(() => {
                    n((e) => ("loading_textures" === e ? "beaming" : e));
                }),
                l = (0, K.A)(t);
            return (
                p.useEffect(() => {
                    "beaming" === r && l();
                }, [r, l]),
                { isCharacterExiting: "none" !== r, startExit: c, handleExitPlaying: d }
            );
        })({
            onExitPlaying: eh(
                "https://cdn.discordapp.com/assets/content/b1606a891842fe5460194fb2b7eccef78e635523e7109b9adefad72395f32eae.mp3",
            ),
            onExitFinished: eg,
        }),
        eE = p.useCallback(() => ef((0, S.$_)({ flow: r, stats: H })), [r, ef, H]),
        ej = p.useCallback(
            (e) => {
                if (!h.A.isSaving && !eA) {
                    if (null != et) return void eu(et);
                    ef(e);
                }
            },
            [et, eA, ef],
        );
    return (0, n.jsx)(w.N, {
        theme: eb.NJ.DARK,
        children: (e) =>
            (0, n.jsx)(x.Jh, {
                children: (0, n.jsxs)("div", {
                    className: m()(e, nQ.kL),
                    style: Z,
                    role: "dialog",
                    "aria-modal": !0,
                    "aria-label": tN.intl.string(aU.default["CdU/PF"]),
                    children: [
                        (0, n.jsx)(nJ, {}),
                        (0, n.jsxs)("div", {
                            className: nQ.$s,
                            children: [
                                (0, n.jsx)(aQ, {}),
                                (0, n.jsx)(ex, {
                                    size: "sm",
                                    "aria-label": tN.intl.string(tN.t.cpT0Cq),
                                    onClick: i,
                                    children: (0, n.jsx)(I.XSmallIcon, { size: "xs", color: "currentColor" }),
                                }),
                            ],
                        }),
                        (0, n.jsx)(tu, {
                            stage: eA ? C.s9.EXIT : o,
                            hiddenBy: P,
                            onExitPlaying: eI,
                            className: nQ.qd,
                            children:
                                U && (0, n.jsx)(nV, { route: C.gr.INTRODUCTION, onNextStep: eg, onPreviousStep: em }),
                        }),
                        (0, n.jsx)(ew, {
                            visible: A,
                            enter: V,
                            exit: V,
                            hiddenScale: 1.02,
                            keepMounted: !0,
                            className: nQ.qd,
                            style: Z,
                            children: (0, n.jsx)(e_, { isVisible: A }),
                        }),
                        (0, n.jsx)(ew, {
                            visible: G && !d && !eA,
                            enter: Q,
                            exit: J,
                            className: nQ.qd,
                            children: (0, n.jsx)(az, { route: s }),
                        }),
                        (0, n.jsx)(ew, {
                            visible: A,
                            enter: q,
                            exit: W,
                            hiddenScale: 1.02,
                            mountAfterDelay: !0,
                            className: nQ.qd,
                            style: Z,
                            children: (0, n.jsx)(nV, { route: s, onNextStep: eg, onPreviousStep: em }),
                        }),
                        (0, n.jsx)(ib, {
                            activeRoute: s,
                            blockedTrait: et,
                            blockedTraitDescriptionId: eo,
                            isCharacterExiting: eA,
                            onBack: em,
                            onNext: eg,
                            onCharacterSaved: ev,
                            onReplay: eE,
                        }),
                        (0, n.jsx)(tm, { activeRoute: s }),
                        (0, n.jsx)(nX, {
                            flow: r,
                            stats: H,
                            activeRoute: s,
                            isRouteBlocked: null != et,
                            isCharacterExiting: eA,
                            blockedTraitDescriptionId: eo,
                            onRouteClick: ej,
                        }),
                        null != et && (0, n.jsx)(v.A, { id: ea, children: (0, j.Cz)(et) }),
                        (0, n.jsx)(x.P, {}),
                    ],
                }),
            }),
    });
}
var n0 = a(359527);
function n1() {
    if (o._.hasSubscribers(a9.jej.MODAL_CLOSE)) return (o._.dispatch(a9.jej.MODAL_CLOSE), !0);
    let e = (0, d.mU)(document.activeElement ?? document.body);
    return !!e?.hasSubscribers(a9.jej.POPOUT_CLOSE) && (e.dispatch(a9.jej.POPOUT_CLOSE), !0);
}
async function n2(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = await (0, u.nX)(t);
    return a === h.T.ERROR
        ? ((0, s.P0)({ text: tN.intl.string(tN.t.fEptJP), variant: "critical" }), !1)
        : a !== h.T.FETCHING &&
              (f.A.initialize({ isForeground: l.A.isFocused() && l.A.isVisible() }),
              (0, b.lw)(e),
              (0, c.B8)(
                  (e) => {
                      let { closeLayer: t } = e;
                      return (0, n.jsx)(n$, { onClose: t });
                  },
                  { layerKey: n0.p, onEscape: n1 },
              ),
              !0);
}
