a.d(t, { D: () => nV });
var i,
    r = a(477900),
    n = a(858899),
    s = a(361158),
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
    m = a(337836),
    x = a(855986),
    g = a(765178),
    A = a(140735),
    v = a(43990),
    w = a(789645),
    I = a(373955),
    E = a(503235),
    j = a(847011),
    S = a(201779);
a(321073);
let C =
        "https://cdn.discordapp.com/assets/content/05e7df987cb6150a2d6cbfe4aca2cdacfb4188166f8ff9bbde7421afcd85b382.mp3",
    N =
        "https://cdn.discordapp.com/assets/content/7b28adce16a979de5d4f6b8331dfedca2806d1b0b15f694b7a196db7f624918c.mp3",
    T =
        "https://cdn.discordapp.com/assets/content/7ff087600e0a6a745646ef51b33c7e4b77ae940e4d6335769c630c356cb8c378.mp3",
    R =
        "https://cdn.discordapp.com/assets/content/aada5b40828140b41a56df82e81783cd43fd60e30ac1eb3c9f93a087b95dcf03.mp3",
    O =
        "https://cdn.discordapp.com/assets/content/04536b9e5b26d0b6e85116ce546b7d5ba97da31e7de7a1e02da262bcd5249bb0.mp3",
    M =
        "https://cdn.discordapp.com/assets/content/82d771ff521a99ea8e26239d2f2e48ae847e39575bc5bce396739b430b8a6fda.mp3",
    y = [C, N, T, R, O, M];
function L(e) {
    return e !== S.gr.HOME && null == (0, S.UG)(e).statsScreen;
}
function k(e) {
    return null != (0, S.UG)(e).statsScreen;
}
var D = a(127639),
    P = a(287809),
    U = a(474090),
    G = a(817379);
function H() {
    return (0, x.yK)([u.A, P.default], () => {
        let { selectedCharacterTraits: e, stats: t, character: a } = u.A,
            i = (0, U.ki)(P.default.getCurrentUser());
        return Object.values(D.V).filter((r) => {
            let n = e[r];
            return null != n && (0, G.tS)(r, n, { stats: t, hasNitro: i, savedCharacter: a });
        });
    });
}
var F = a(765548),
    K = a(775602),
    B = a(1437),
    z = a(517846),
    V = a(73153),
    W = a(669700),
    q = a(964486),
    Y = a(920495),
    Z = a(407905),
    X = a(532294),
    Q = a(739187);
function J(e) {
    let t = (0, E.Cz)(e);
    null != t && ((0, Q.V)(), (0, n.P0)({ text: t, variant: "critical" }));
}
function $(e) {
    let { isMuted: t, volume: a } = (0, x.cf)([u.A], () => ({ isMuted: u.A.isMuted, volume: u.A.volume })),
        i = b.useRef(null);
    return (
        b.useEffect(() => {
            i.current = new Audio(e);
        }, [e]),
        b.useEffect(() => {
            null != i.current && ((i.current.muted = t), (i.current.volume = a));
        }, [t, a]),
        b.useCallback(() => {
            let e = i.current;
            t || 0 === a || null == e || ((e.volume = a), (e.currentTime = 0), e.play());
        }, [t, a])
    );
}
var ee = a(299619),
    et = a(818348),
    ea = a(11435);
function ei(e) {
    let { isVisible: t } = e,
        a = b.useRef(null),
        i = (0, x.bG)([K.Ay], () => K.Ay.useReducedMotion),
        n = t && !i;
    return (
        b.useEffect(() => {
            let e = a.current;
            null != e && (n ? e.play().catch(et.tE) : e.pause());
        }, [n]),
        b.useEffect(() => {
            i && null != a.current && (a.current.currentTime = 1);
        }, [i]),
        (0, r.jsxs)("div", {
            className: ea.Tp,
            "aria-hidden": !0,
            children: [
                (0, r.jsx)(ee.A, {
                    ref: a,
                    className: ea.Ki,
                    src: "https://cdn.discordapp.com/assets/content/a7a4300630ed2733eca4a8bb584c3086a66063d78e2f829faf465d96ff388a93.webm",
                    loop: !0,
                    muted: !0,
                    playsInline: !0,
                }),
                (0, r.jsx)("div", { className: ea.D7 }),
            ],
        })
    );
}
var er = a(885619);
function en(e) {
    let {
        ref: t,
        onMouseEnter: a,
        onMouseLeave: i,
        onFocus: n,
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
        size: m,
        className: x,
    } = e;
    return (0, r.jsx)("button", {
        ref: t,
        onMouseEnter: a,
        onMouseLeave: i,
        onFocus: n,
        onBlur: s,
        onContextMenu: c,
        type: "button",
        className: _()(er.button, "custom" !== m && er[m], x),
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
function es(e) {
    let { className: t, ...a } = e;
    return (0, r.jsx)(en, { ...a, className: _()(er.shadow, t) });
}
var ec = a(475743),
    ed = a(190240);
function el(e) {
    let {
            visible: t,
            enter: a,
            exit: i,
            keepMounted: n = !1,
            mountAfterDelay: s = !1,
            hiddenScale: c = 1,
            onExitComplete: d,
            className: l,
            style: o,
            children: u,
        } = e,
        h = (0, x.bG)([K.Ay], () => K.Ay.useReducedMotion),
        f = b.useRef(null),
        [p, m] = b.useState(t),
        [g, A] = b.useState(t),
        v = b.useRef(null),
        w = (0, ec.p0)({ value: u, shouldUpdate: t }),
        I = (0, ec.p0)({ value: o, shouldUpdate: t }),
        E = (0, F.A)(() => {
            ((v.current = null), m(!1), d?.());
        }),
        j = t ? a : i,
        S = h ? 0 : j.delay,
        C = h ? 0 : j.duration,
        N = t && !p && !n,
        T = s && !h;
    b.useEffect(() => {
        if (!N) return;
        if (!T) return void m(!0);
        let e = setTimeout(() => m(!0), a.delay);
        return () => clearTimeout(e);
    }, [N, T, a.delay]);
    let R = b.useRef(!0);
    if (
        (b.useEffect(() => {
            if (R.current) {
                R.current = !1;
                return;
            }
            if ((null != v.current && (clearTimeout(v.current), (v.current = null)), t)) {
                n && m(!0);
                return;
            }
            (A(!1), (v.current = setTimeout(E, S + C)));
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
        !p && !n)
    )
        return null;
    let O = t && !n && T ? 0 : S,
        M = {
            ...(t ? o : I),
            opacity: +!!g,
            transform: g || 1 === c ? void 0 : `scale(${c})`,
            transitionDuration: `${C}ms`,
            transitionDelay: `${O}ms`,
        };
    return (0, r.jsx)("div", {
        ref: f,
        className: _()(l, ed.q, { [ed.R]: !p }),
        style: M,
        inert: !t,
        "aria-hidden": !t,
        children: t || n ? u : w,
    });
}
var eo = a(516749),
    eu = a(399667),
    eh = a(468311),
    ef = a(706121),
    eb = a(985747),
    ep = a(67915),
    e_ = a(118531);
let em = {
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
        url: "https://cdn.discordapp.com/assets/content/55947b2deb21a91c8f89dc38e7fcf7c399ca7ff0cf0c69237a83e3cb2b28a0ee.webp",
        riveId: 7476587,
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
function ex(e) {
    return { name: e, url: em[e].url };
}
let eg = ex("tex_none"),
    eA = {
        [eb.N.NONE]: 0,
        [eb.N.CAP]: 7,
        [eb.N.ELVEN_HEADPIECE]: 1,
        [eb.N.HEADPHONES]: 2,
        [eb.N.TEDDY_BEANIE]: 13,
        [eb.N.PIERCINGS]: 4,
        [eb.N.HEADBAND]: 5,
        [eb.N.SUNGLASSES]: 6,
        [eb.N.BANANA_PEEL]: 3,
        [eb.N.LEAF]: 8,
        [eb.N.FIRE]: 9,
        [eb.N.HALO]: 10,
        [eb.N.BRAIN]: 11,
        [eb.N.TRAFFIC_CONE]: 12,
        [eb.N.CROWN]: 14,
    },
    ev = {
        [e_.Z.NONE]: 0,
        [e_.Z.ANGEL_WINGS]: 3,
        [e_.Z.STICKERS]: 1,
        [e_.Z.TOTE]: 2,
        [e_.Z.WIZARD_STAFF]: 8,
        [e_.Z.SKATEBOARD]: 4,
        [e_.Z.DRAGON_WINGS]: 5,
        [e_.Z.TAKE_OUT_BAG]: 6,
        [e_.Z.PIXEL_WRENCH]: 7,
        [e_.Z.MECH_WINGS]: 9,
        [e_.Z.SWORD]: 10,
        [e_.Z.DEVIANT_TAIL]: 11,
        [e_.Z.MAGICAL_STAFF]: 12,
        [e_.Z.BUTTERFLY_WINGS]: 13,
        [e_.Z.CAT_BACKPACK]: 14,
    },
    ew = {
        [eh.X.NONE]: eg,
        [eh.X.BLAZE]: ex("tex_aura_04_blaze"),
        [eh.X.BLOSSOM]: ex("tex_aura_01_blossom"),
        [eh.X.PRISM]: ex("tex_aura_02_prism"),
        [eh.X.SHOCK]: ex("tex_aura_03_shock"),
        [eh.X.FATED]: ex("tex_aura_05_fated"),
        [eh.X.LUSTER]: ex("tex_aura_06_luster"),
        [eh.X.BUBBLES]: ex("tex_aura_07_bubbly"),
        [eh.X.SPOOKY]: ex("tex_aura_08_spooky"),
        [eh.X.CURSED]: ex("tex_aura_09_cursed"),
        [eh.X.MAGNETIC]: ex("tex_aura_10_magnetic"),
        [eh.X.RADIOACTIVE]: ex("tex_aura_11_radioactive"),
        [eh.X.ELEMENTAL]: ex("tex_aura_12_elemental"),
        [eh.X.SHIMMER]: ex("tex_aura_13_shimmer"),
        [eh.X.WITCHY]: ex("tex_aura_14_witchy"),
    },
    eI = {
        [ef.R.ICY]: ex("tex_base_01_icy"),
        [ef.R.CRIMSON]: ex("tex_base_02_crimson"),
        [ef.R.CHROME]: ex("tex_base_03_chrome"),
        [ef.R.GALACTIC]: ex("tex_base_04_galactic"),
        [ef.R.FOREST]: ex("tex_base_05_forrest"),
        [ef.R.MIDNIGHT]: ex("tex_base_06_mighnight"),
        [ef.R.GLACIER]: ex("tex_base_07_glacier"),
        [ef.R.ORANGE]: ex("tex_base_08_orange"),
        [ef.R.PURPLE]: ex("tex_base_09_pink"),
        [ef.R.RED]: ex("tex_base_10_red"),
        [ef.R.COBALT]: ex("tex_base_11_cobalt"),
        [ef.R.X_RAY]: ex("tex_base_12_x-ray"),
        [ef.R.LIQUID]: ex("tex_base_13_liquid"),
        [ef.R.BUTTER]: ex("tex_base_14_butter"),
        [ef.R.IRIDESCENT]: ex("tex_base_15_iridescent"),
    },
    eE = {
        [ep.r.NONE]: null,
        [ep.r.BADDIE_DEFAULT]: { riveId: 1, texture: ex("tex_outfit_01_baddie") },
        [ep.r.TRAVELER_DEFAULT]: { riveId: 10, texture: ex("tex_outfit_10_traveler") },
        [ep.r.STREAMER_DEFAULT]: { riveId: 3, texture: ex("tex_outfit_03_streamer") },
        [ep.r.CAMPER_DEFAULT]: { riveId: 4, texture: ex("tex_outfit_04_camper") },
        [ep.r.ATHLETE_DEFAULT]: { riveId: 5, texture: ex("tex_outfit_05_athlete") },
        [ep.r.COWPOKE_DEFAULT]: { riveId: 6, texture: ex("tex_outfit_06_cowpoke") },
        [ep.r.GOTH_DEFAULT]: { riveId: 7, texture: ex("tex_outfit_07_goth") },
        [ep.r.ASTRONAUT_DEFAULT]: { riveId: 8, texture: ex("tex_outfit_08_astronaut") },
        [ep.r.JESTER_DEFAULT]: { riveId: 9, texture: ex("tex_outfit_09_jester") },
        [ep.r.TRASH_CAN_DEFAULT]: { riveId: 2, texture: ex("tex_outfit_02_trash") },
        [ep.r.MAGE_DEFAULT]: { riveId: 11, texture: ex("tex_outfit_11_mage") },
        [ep.r.MECH_DEFAULT]: { riveId: 12, texture: ex("tex_outfit_12_mech") },
        [ep.r.KNIGHT_DEFAULT]: { riveId: 13, texture: ex("tex_outfit_13_knight") },
        [ep.r.MAGICAL_DEFAULT]: { riveId: 14, texture: ex("tex_outfit_14_magical") },
        [ep.r.BADDIE_MONOCHROME]: { riveId: 1, texture: ex("tex_outfit_01_baddie_monochrome") },
        [ep.r.BADDIE_VIOLET]: { riveId: 1, texture: ex("tex_outfit_01_baddie_violet") },
        [ep.r.BADDIE_PASTEL]: { riveId: 1, texture: ex("tex_outfit_01_baddie_pastel") },
        [ep.r.BADDIE_SUNSET]: { riveId: 1, texture: ex("tex_outfit_01_baddie_sunset") },
        [ep.r.TRAVELER_HAZE]: { riveId: 10, texture: ex("tex_outfit_10_traveler_haze") },
        [ep.r.TRAVELER_MOSS]: { riveId: 10, texture: ex("tex_outfit_10_traveler_moss") },
        [ep.r.TRAVELER_CHRONO]: { riveId: 10, texture: ex("tex_outfit_10_traveler_chrono") },
        [ep.r.TRAVELER_UMBER]: { riveId: 10, texture: ex("tex_outfit_10_traveler_umber") },
        [ep.r.STREAMER_FLAMES]: { riveId: 3, texture: ex("tex_outfit_03_streamer_flames") },
        [ep.r.STREAMER_STRIPES]: { riveId: 3, texture: ex("tex_outfit_03_streamer_stripes") },
        [ep.r.STREAMER_SMILEY]: { riveId: 3, texture: ex("tex_outfit_03_streamer_smiley") },
        [ep.r.STREAMER_VINTAGE]: { riveId: 3, texture: ex("tex_outfit_03_streamer_vintage") },
        [ep.r.CAMPER_PLAID]: { riveId: 4, texture: ex("tex_outfit_04_camper_plaid") },
        [ep.r.CAMPER_SWAMP]: { riveId: 4, texture: ex("tex_outfit_04_camper_swamp") },
        [ep.r.CAMPER_GLAMP]: { riveId: 4, texture: ex("tex_outfit_04_camper_glamp") },
        [ep.r.CAMPER_AMBER]: { riveId: 4, texture: ex("tex_outfit_04_camper_amber") },
        [ep.r.ATHLETE_BLOCKED]: { riveId: 5, texture: ex("tex_outfit_05_athlete_blocked") },
        [ep.r.ATHLETE_FADED]: { riveId: 5, texture: ex("tex_outfit_05_athlete_faded") },
        [ep.r.ATHLETE_CHECKERED]: { riveId: 5, texture: ex("tex_outfit_05_athlete_checkered") },
        [ep.r.ATHLETE_LINED]: { riveId: 5, texture: ex("tex_outfit_05_athlete_lined") },
        [ep.r.COWPOKE_ONYX]: { riveId: 6, texture: ex("tex_outfit_06_cowpoke_onyx") },
        [ep.r.COWPOKE_STEEL]: { riveId: 6, texture: ex("tex_outfit_06_cowpoke_steel") },
        [ep.r.COWPOKE_DENIM]: { riveId: 6, texture: ex("tex_outfit_06_cowpoke_denim") },
        [ep.r.COWPOKE_BLUSH]: { riveId: 6, texture: ex("tex_outfit_06_cowpoke_blush") },
        [ep.r.GOTH_SIREN]: { riveId: 7, texture: ex("tex_outfit_07_goth_siren") },
        [ep.r.GOTH_SERPENT]: { riveId: 7, texture: ex("tex_outfit_07_goth_serpent") },
        [ep.r.GOTH_RAVEN]: { riveId: 7, texture: ex("tex_outfit_07_goth_raven") },
        [ep.r.GOTH_VAMP]: { riveId: 7, texture: ex("tex_outfit_07_goth_vamp") },
        [ep.r.ASTRONAUT_STARDUST]: { riveId: 8, texture: ex("tex_outfit_08_astronaut_stardust") },
        [ep.r.ASTRONAUT_MARTIAN]: { riveId: 8, texture: ex("tex_outfit_08_astronaut_martian") },
        [ep.r.ASTRONAUT_SOLAR]: { riveId: 8, texture: ex("tex_outfit_08_astronaut_solar") },
        [ep.r.ASTRONAUT_COSMIC]: { riveId: 8, texture: ex("tex_outfit_08_astronaut_cosmic") },
        [ep.r.JESTER_CONFETTI]: { riveId: 9, texture: ex("tex_outfit_09_jester_confetti") },
        [ep.r.JESTER_CARNIVAL]: { riveId: 9, texture: ex("tex_outfit_09_jester_carnival") },
        [ep.r.JESTER_SUNRISE]: { riveId: 9, texture: ex("tex_outfit_09_jester_sunrise") },
        [ep.r.JESTER_NIGHTFALL]: { riveId: 9, texture: ex("tex_outfit_09_jester_nightfall") },
        [ep.r.TRASH_CAN_BLACKOUT]: { riveId: 2, texture: ex("tex_outfit_02_trash_blackout") },
        [ep.r.TRASH_CAN_CAUTION]: { riveId: 2, texture: ex("tex_outfit_02_trash_caution") },
        [ep.r.TRASH_CAN_BUBBLEGUM]: { riveId: 2, texture: ex("tex_outfit_02_trash_bubblegum") },
        [ep.r.TRASH_CAN_TOXIC]: { riveId: 2, texture: ex("tex_outfit_02_trash_toxic") },
        [ep.r.MAGE_SHADOW]: { riveId: 11, texture: ex("tex_outfit_11_mage_shadow") },
        [ep.r.MAGE_DUSK]: { riveId: 11, texture: ex("tex_outfit_11_mage_dusk") },
        [ep.r.MAGE_WILDWOOD]: { riveId: 11, texture: ex("tex_outfit_11_mage_wildwood") },
        [ep.r.MAGE_WINTER]: { riveId: 11, texture: ex("tex_outfit_11_mage_winter") },
        [ep.r.MECH_AERO]: { riveId: 12, texture: ex("tex_outfit_12_mech_aero") },
        [ep.r.MECH_VIPER]: { riveId: 12, texture: ex("tex_outfit_12_mech_viper") },
        [ep.r.MECH_ULTRAVIOLET]: { riveId: 12, texture: ex("tex_outfit_12_mech_ultraviolet") },
        [ep.r.MECH_SANDSTORM]: { riveId: 12, texture: ex("tex_outfit_12_mech_sandstorm") },
        [ep.r.KNIGHT_IRON]: { riveId: 13, texture: ex("tex_outfit_13_knight_iron") },
        [ep.r.KNIGHT_RUST]: { riveId: 13, texture: ex("tex_outfit_13_knight_rust") },
        [ep.r.KNIGHT_PETAL]: { riveId: 13, texture: ex("tex_outfit_13_knight_petal") },
        [ep.r.KNIGHT_GLACIER]: { riveId: 13, texture: ex("tex_outfit_13_knight_glacier") },
        [ep.r.MAGICAL_SAPPHIRE]: { riveId: 14, texture: ex("tex_outfit_14_magical_sapphire") },
        [ep.r.MAGICAL_AMETHYST]: { riveId: 14, texture: ex("tex_outfit_14_magical_amethyst") },
        [ep.r.MAGICAL_FROST]: { riveId: 14, texture: ex("tex_outfit_14_magical_frost") },
        [ep.r.MAGICAL_CITRINE]: { riveId: 14, texture: ex("tex_outfit_14_magical_citrine") },
    };
var ej = a(835517),
    eS = (((i = {}).SLOT = "slot"), (i.TRAIT = "trait"), (i.LAYOUT = "layout"), (i.ALWAYS = "always"), i);
let eC = /^tex_(aura|base_\d+|outfit)_/,
    eN = /^tex_(headwear|shoes|wearable|face)_(\d+)_/,
    eT = /^tex_face_([a-z]+)_/i,
    eR = {
        tex_env_labNight_bg: ["Desktop"],
        tex_env_labNight_bg_mobileLandscape: ["MobileLandscape"],
        tex_env_labNight_bg_mobilePortrait: ["MobilePortrait"],
        tex_env_labNight_fgLeft: ["Desktop"],
        tex_env_labNight_fgRight: ["Desktop"],
        tex_env_labNight_mgBottom: ["Desktop"],
        tex_env_labNight_mgBottomMobile: ["MobilePortrait", "MobileLandscape"],
        tex_env_labNight_sky: ["Desktop"],
    },
    eO = {
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
    eM = { columns: 1, rows: 1 },
    ey = { columns: 5, rows: 5 },
    eL = { columns: 6, rows: 8 },
    ek = {
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
        tex_wearable_11_deviantTail_smoke_active_spritesheet: eL,
        tex_wearable_11_deviantTail_smoke_idle_spritesheet: eL,
    },
    eD = [1, 1.25, 1.5, 1.75, 2, 3, 4, 5],
    eP = Math.min(...eD),
    eU = Math.max(...eD);
function eG(e, t) {
    let { url: a, width: i, height: r, widthAt1x: n } = em[e];
    if (null == n) return a;
    let s = 4096 / Math.max(i, r),
        c = Math.min((t * n) / i, s),
        d = s >= 1 && t >= Math.round(i / n);
    if (c >= 1 || d) return a;
    let { columns: l, rows: o } = ek[e] ?? eM,
        u = l * Math.round((i / l) * c),
        h = o * Math.round((r / o) * c);
    return `${a}?width=${u}&height=${h}`;
}
let eH = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14"],
    eF = eH.map((e) => `outfit${e}Image`),
    eK = {
        [S.s9.IDLE]: 0,
        [S.s9.INTRODUCTION]: 1,
        [S.s9.FACE]: 2,
        [S.s9.OUTFIT]: 3,
        [S.s9.HEADWEAR]: 4,
        [S.s9.SHOES]: 5,
        [S.s9.WEARABLE]: 6,
        [S.s9.AURA]: 7,
        [S.s9.ASSEMBLED]: 8,
        [S.s9.FINALIZE]: 8,
        [S.s9.EXIT]: 9,
        [S.s9.SUMMARY]: 8,
    },
    eB = {
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
    ez = { ...eB.MobilePortrait, gradientTopPosition: 25, gradientBottomPosition: 90 };
var eV = a(722872),
    eW = a(574381);
let eq = "tex_wireframe_spritesheet",
    eY = new Set([1, 9]),
    eZ = Object.keys(em).map((e) => ({
        name: e,
        role: (function (e) {
            if (eC.test(e)) return { type: "slot" };
            let t = eR[e];
            if (null != t) return { type: "layout", layouts: t };
            let a = eN.exec(e);
            if (null != a) return { type: "trait", path: `${a[1]}ID`, riveId: Number(a[2]) };
            let i = eT.exec(e),
                r = null != i ? eO[i[1].toLowerCase()] : void 0;
            return null != r ? { type: "trait", path: "faceID", riveId: r } : { type: "always" };
        })(e),
        swapKey: (0, eW.un)() ? `${e}-${em[e].riveId}` : e,
    }));
function eX(e) {
    let { faceID: t, headwearID: a, shoesID: i, wearableID: r, chapterID: n, device: s } = e;
    return b.useMemo(() => {
        var e;
        let c;
        return (
            (e = { faceID: t, headwearID: a, shoesID: i, wearableID: r }),
            (c = new Set()),
            eZ.forEach((t) => {
                let { name: a, role: i } = t;
                switch (i.type) {
                    case eS.SLOT:
                        break;
                    case eS.TRAIT:
                        e[i.path] === i.riveId && c.add(a);
                        break;
                    case eS.LAYOUT:
                        i.layouts.includes(s) && c.add(a);
                        break;
                    case eS.ALWAYS:
                        (a !== eq || eY.has(n)) && c.add(a);
                }
            }),
            c
        );
    }, [t, a, i, r, n, s]);
}
let eQ = new Set(),
    eJ = { [S.s9.FINALIZE]: new Set([eq]) };
var e$ = a(435558);
let e0 = (0, a(196765).v)(() => ({ hoveredOption: void 0 })),
    e1 = (0, e$.debounce)((e) => e0.setState({ hoveredOption: e }), 250);
function e2(e) {
    let { hoveredOption: t, isDelayed: a = !1 } = e;
    a ? e1(t) : (e1.cancel(), e0.setState({ hoveredOption: t }));
}
(a(393431), a(532706), a(42231), a(232424), a(949626), a(767709), a(65162));
var e3 = a(971940);
async function e8(e) {
    try {
        let t = await fetch(e);
        if (!t.ok) return null;
        return await (0, e3.decodeImage)(new Uint8Array(await t.arrayBuffer()));
    } catch {
        return null;
    }
}
var e7 = a(168862);
function e6(e) {
    let t,
        a,
        { stage: i, isHidden: n, onExitPlaying: s } = e,
        c = (0, x.bG)([d.A], () => {
            let e = d.A.windowSize();
            return (function (e, t) {
                let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (a) return eP;
                let i = Math.max(e / 960, t / 540) * (0, ej.A)();
                return eD.find((e) => e >= i) ?? eU;
            })(e.width, e.height);
        }),
        [l, o] = b.useState(c);
    c > l && o(c);
    let h =
            ((t = (0, x.bG)([u.A], () => u.A.selectedCharacterTraits)),
            (a = e0((e) => e.hoveredOption)),
            b.useMemo(() => (null != a ? { ...t, [a.trait]: a.optionId } : t), [t, a])),
        f = (0, x.bG)([K.Ay], () => K.Ay.useReducedMotion),
        p = b.useMemo(
            () =>
                (function (e) {
                    var t;
                    let { stage: a, isHidden: i, traits: r, layout: n, textureScale: s, compactAssets: c = !1 } = e,
                        { base: d, shoes: l, outfit: o, face: u, hat: h, wearable: f, aura: b } = (0, G.XI)(r),
                        p = eE[o],
                        _ = {};
                    return (
                        eH.forEach((e) => {
                            let t = Number(e) === p?.riveId ? p.texture : eg;
                            _[`outfit${e}Image`] = eG(t.name, s);
                        }),
                        {
                            device: n,
                            chapterID: i && a === S.s9.FACE ? eK[S.s9.IDLE] : eK[a],
                            faceID: u,
                            shoesID: l,
                            headwearID: eA[h],
                            wearableID: ev[f],
                            outfitID: p?.riveId ?? 0,
                            auraImage: ((t = ew[b].name), eG(t, c ? 1 : s)),
                            baseColorImage: eG(eI[d].name, s),
                            ...("MobilePortrait" === n && a === S.s9.INTRODUCTION ? ez : eB[n]),
                            ..._,
                        }
                    );
                })({ stage: i, isHidden: n, traits: h, layout: "Desktop", textureScale: l }),
            [i, n, h, l],
        ),
        [m, g] = b.useState(null),
        A = m ?? p,
        v = m === p,
        w = (function (e) {
            let { visibleDataBinding: t, requestedDataBinding: a, textureScale: i, preloadedTextureNames: r } = e,
                n = (function (e) {
                    let { visibleTextureNames: t, requestedTextureNames: a } = e,
                        [i, r] = b.useState(t),
                        [n, s] = b.useState(t);
                    if (t !== n) {
                        s(t);
                        let e = new Set(i);
                        (t.forEach((t) => e.add(t)), r(e));
                    }
                    return (
                        b.useEffect(() => {
                            let e = setTimeout(() => r(t), 600);
                            return () => clearTimeout(e);
                        }, [t]),
                        b.useMemo(() => new Set([...i, ...a]), [i, a])
                    );
                })({ visibleTextureNames: eX(t), requestedTextureNames: eX(a) });
            return b.useMemo(() => {
                var e;
                let t;
                return (
                    (e = new Set([...n, ...r])),
                    (t = {}),
                    eZ.forEach((a) => {
                        let { name: r, swapKey: n } = a,
                            s = e.has(r) ? eG(r, i) : eg.url;
                        t[n] = { source: { uri: s } };
                    }),
                    t
                );
            }, [n, r, i]);
        })({
            visibleDataBinding: A,
            requestedDataBinding: p,
            textureScale: l,
            preloadedTextureNames: (function (e, t) {
                let [a, i] = b.useState(null),
                    r = eJ[e],
                    n = null != r && (e === a || t),
                    s = n ? e : null;
                return (s !== a && i(s), n ? r : eQ);
            })(i, v),
        }),
        {
            assetLoader: I,
            onLoad: E,
            textureManager: j,
        } = (function () {
            let e = b.useRef(new Map()),
                [t, a] = b.useState(null),
                i = b.useCallback((t) => !!t.isImage && t.name in em && (e.current.set(t.name, t), !0), []);
            return {
                assetLoader: i,
                onLoad: b.useCallback(() => {
                    (a(e.current), (e.current = new Map()));
                }, []),
                textureManager: b.useMemo(
                    () =>
                        null == t
                            ? null
                            : {
                                  load: e8,
                                  swap: (e) => e.forEach((e, a) => t.get(a)?.setRenderImage(e)),
                                  release: (e) => e.forEach((e) => e.unref()),
                              },
                    [t],
                ),
            };
        })(),
        C = b.useRef(null),
        N = b.useRef(n);
    b.useEffect(() => {
        ((N.current = n), n ? C.current?.pause() : C.current?.play());
    }, [n]);
    let T = b.useCallback(() => {
            (E(), N.current && C.current?.pause());
        }, [E]),
        R = (function (e) {
            let { textureManager: t, referencedAssets: a, initialReferencedAssets: i } = e,
                r = b.useRef(new Map()),
                [n, s] = b.useState(i);
            return (
                b.useEffect(() => {
                    r.current = new Map(
                        Object.entries(i ?? {}).map((e) => {
                            let [t, { source: a }] = e;
                            return [t, a.uri];
                        }),
                    );
                }, [t, i]),
                b.useEffect(() => {
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
                [r, n] = b.useState({}),
                s = (t = i.outfitID) > 0 ? eF[t - 1] : null,
                c = null != s ? i[s] : void 0,
                d = null == s || a?.[s] === c || r[s] === c,
                l = a ?? i;
            return {
                dataBinding: b.useMemo(() => (null == s || l[s] === c ? l : { ...l, [s]: c }), [l, s, c]),
                isOutfitPreloaded: d,
                onDataBindingChange: b.useMemo(() => {
                    let e = {};
                    return (
                        eF.forEach((t) => {
                            e[t] = (e) => {
                                n((a) => (a[t] === e ? a : { ...a, [t]: e }));
                            };
                        }),
                        e
                    );
                }, []),
            };
        })({ visibleDataBinding: m, requestedDataBinding: p });
    R && M && m !== p && g(p);
    let L = i === S.s9.EXIT && v;
    b.useEffect(() => {
        L && s();
    }, [L, s]);
    let k = (function (e) {
            let { stage: t, dataBinding: a } = e,
                i = (0, x.bG)([K.Ay], () => K.Ay.useReducedMotion),
                r = t === S.s9.INTRODUCTION && !i,
                [n, s] = b.useState(+!r),
                [c, d] = b.useState(r);
            return (
                r !== c && (d(r), s(+!r)),
                b.useEffect(() => {
                    if (!r) return;
                    let e = Date.now() + 1800,
                        t = requestAnimationFrame(function a() {
                            let i = Math.max(Math.min(Date.now() - e, 1e3), 0);
                            (s((0, eV.easeOutCubic)(i, 0, 1, 1e3)), i >= 1e3 || (t = requestAnimationFrame(a)));
                        });
                    return () => cancelAnimationFrame(t);
                }, [r]),
                b.useMemo(
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
        D = b.useMemo(() => ({ ...k, mobileLift: 0, reducedMotion: f }), [k, f]);
    return (0, r.jsx)("div", {
        role: "img",
        "aria-label": (0, eu.O)(h),
        className: _()(e7.dw, { [e7.RK]: null != m }),
        children: (0, r.jsx)(eo.W, {
            artboard: "AB_Master",
            stateMachine: "SM_Master",
            fit: "layout",
            alignment: "center",
            ref: C,
            assetLoader: I,
            onLoad: T,
            listenOnDocumentBody: !f,
            withReducedMotion: "play",
            dataBinding: D,
            onDataBindingChange: y,
            className: e7.lW,
        }),
    });
}
var e9 = a(840527);
function e5(e) {
    let { stage: t, hiddenBy: a, onExitPlaying: i, className: n, children: s } = e,
        c = a === B.xk.STATS,
        d = a === B.xk.CUSTOMIZATION_ROUTE_CHANGE,
        [l, o] = b.useState(c);
    !c && l && o(!1);
    let u = (c && !l) || d,
        { isMountDelayed: h } = (function (e) {
            let [t, a] = b.useState(e);
            return (
                !e && t && a(!1),
                b.useEffect(() => {
                    if (!t) return;
                    let e = setTimeout(() => a(!1), B.Hp);
                    return () => clearTimeout(e);
                }, [t]),
                { isMountDelayed: t }
            );
        })(c),
        f = (0, ec.p0)({ value: t, shouldUpdate: !u }) ?? t,
        p = (0, ec.p0)({ value: s, shouldUpdate: !u }),
        _ = (0, ec.p0)({ value: a, shouldUpdate: null != a }) === B.xk.CUSTOMIZATION_ROUTE_CHANGE;
    return (0, r.jsxs)(el, {
        visible: null == a,
        enter: _ ? B.pS : B.T9,
        exit: d ? B.pS : B.R9,
        keepMounted: !0,
        onExitComplete: () => {
            c && o(!0);
        },
        className: n,
        children: [
            (0, r.jsx)("div", {
                className: e9.q,
                children: !h && (0, r.jsx)(e6, { stage: f, isHidden: l, onExitPlaying: i }),
            }),
            null != p && (0, r.jsx)("div", { className: e9.q, children: p }),
        ],
    });
}
function e4(e) {
    let { animatedSrc: t, staticSrc: a, className: i } = e,
        n = (0, x.bG)([K.Ay], () => K.Ay.useReducedMotion);
    return (0, r.jsx)("img", { src: n ? a : t, alt: "", className: i });
}
var te = a(740281),
    tt = a(766089),
    ta = a(767988);
let ti = { animatedSrc: tt.A, staticSrc: ta.A };
function tr(e) {
    let { activeRoute: t } = e,
        { animatedSrc: a, staticSrc: i } = (0, x.cf)(
            [u.A],
            () => {
                switch (t) {
                    case S.gr.SUMMARY:
                    case S.gr.SHARE:
                        let e = (0, I.o)(u.A.character),
                            { clydeLogoImage: a, clydeLogoStaticImage: i } = (0, I.j)(e);
                        return { animatedSrc: a, staticSrc: i };
                    default:
                        return ti;
                }
            },
            [t],
        );
    return (0, r.jsx)(e4, { animatedSrc: a, staticSrc: i, className: te.w });
}
var tn = a(756408);
function ts() {
    let e = b.useRef(null);
    return (
        b.useLayoutEffect(() => {
            let t = e.current;
            null != t && ((t.tabIndex = -1), t.focus({ preventScroll: !0 }));
        }, []),
        e
    );
}
var tc = a(834730),
    td = a(534514),
    tl = a(504736);
function to(e) {
    let { children: t, className: a, ...i } = e;
    return (0, r.jsx)(tc.E, { ...i, className: _()(tl.Q, a), color: "none", children: t });
}
function tu(e) {
    let { children: t, className: a, ...i } = e,
        n = ts();
    return (0, r.jsx)(td.D, { ...i, ref: n, className: _()(tl.Q, a), color: "none", children: t });
}
var th = a(271427);
function tf(e) {
    let { children: t, className: a, style: i } = e;
    return (0, r.jsx)(to, { tag: "span", variant: "mono-md/bold", className: _()(th.T, a), style: i, children: t });
}
var tb = a(852717),
    tp = a(792996),
    t_ = a(383931);
function tm(e) {
    let { percent: t } = e;
    return (0, r.jsx)(tf, {
        className: t_.t,
        children: tp.intl.formatToPlainString(tb.default.fOGKA4, { percent: t }),
    });
}
var tx = a(646692);
function tg(e) {
    let { icon: t, value: a, topPercent: i, children: n } = e,
        s = ts(),
        c =
            null != i
                ? tp.intl.formatToPlainString(tb.default.USo6cU, { value: a, label: n, percent: i })
                : tp.intl.formatToPlainString(tb.default["+CCx/D"], { value: a, label: n });
    return (0, r.jsxs)("div", {
        ref: s,
        role: "heading",
        "aria-level": 2,
        children: [
            (0, r.jsxs)("div", {
                className: tx.dJ,
                "aria-hidden": !0,
                children: [
                    null != i && (0, r.jsx)(tm, { percent: i }),
                    (0, r.jsxs)("div", {
                        className: tx.p,
                        children: [
                            (0, r.jsx)(to, {
                                variant: "heading-xxl/medium",
                                className: tx.Uq,
                                children: a.toLocaleString(tp.intl.currentLocale),
                            }),
                            (0, r.jsxs)("div", {
                                className: tx.Pf,
                                children: [
                                    (0, r.jsx)(t, { size: "xs", color: "currentColor" }),
                                    (0, r.jsx)(to, { variant: "heading-xs/semibold", className: tx.QK, children: n }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(A.A, { children: c }),
        ],
    });
}
var tA = a(303453);
let tv = {
    [E.v7.FACE]: tb.default.q8GA6h,
    [E.v7.OUTFIT]: tb.default["xGh/fq"],
    [E.v7.OUTFIT_COLOR]: tb.default.IgiEDV,
    [E.v7.HAT]: tb.default.QqeBEO,
    [E.v7.WEARABLE]: tb.default.l57q3i,
    [E.v7.AURA]: tb.default["fYp+yq"],
    [E.v7.SHOES]: tb.default.BaI4wD,
    [E.v7.BASE]: tb.default.SMXZXX,
};
function tw(e) {
    let { customizationOption: t, earnedCount: a, totalCount: i } = e;
    return (0, r.jsx)(tc.E, {
        variant: "body-md/medium",
        color: "text-subtle",
        className: tA.k,
        children: tp.intl.format(tv[t], {
            earnedCount: a,
            totalCount: i,
            countHook: (e, t) =>
                (0, r.jsx)(to, { tag: "span", variant: "mono-md/bold", className: tA.U, children: e }, t),
        }),
    });
}
let tI =
    "https://cdn.discordapp.com/assets/content/48cbcb920dfd15e45e7fe3f297ede63a7891cb0eee9fc44f27053d05d2c6b5ca.mp3";
var tE = a(11044),
    tj = a(218546),
    tS = a(646514),
    tC = a(403581),
    tN = a(461872),
    tT = a(559265);
function tR(e) {
    let { rarity: t } = e,
        a = b.useMemo(() => ({ "--custom-checkpoint-rarity-color": X.Zy[t] }), [t]);
    return t === tj.K.NITRO
        ? (0, r.jsx)(tC.NitroWheelIcon, { size: "custom", color: tS.A.colors.ICON_SUBTLE, className: tT.d7 })
        : (0, r.jsx)("span", { className: tT.oG, style: a });
}
function tO(e) {
    let {
            traitOption: t,
            groupName: a,
            isSelected: i,
            hideRarity: n,
            onSelectOption: s,
            onHoverOption: c,
            disabled: d = !1,
        } = e,
        { trait: l, optionId: o, rarity: u, asset: h, status: f } = t,
        p = f === tN.eP.LOCKED,
        m = b.useMemo(() => {
            if (null == h) return null;
            let e = Math.round(80 * (0, ej.A)());
            return `${h}?width=${e}&height=${e}`;
        }, [h]);
    return (0, r.jsxs)("label", {
        className: _()(tT.uK, { [tT.wH]: i, [tT.dv]: (0, E.C5)(t), [tT.xt]: p, [tT.Ns]: f === tN.eP.NITRO_LOCKED }),
        onMouseEnter: () => c(t),
        onFocus: function () {
            c(t);
        },
        children: [
            (0, r.jsx)(A.A, {
                children: (0, r.jsx)("input", {
                    type: "radio",
                    name: a,
                    checked: i,
                    disabled: d,
                    "aria-disabled": d ? void 0 : p,
                    onChange: function () {
                        d || p || s(l, o);
                    },
                    "aria-label": (0, E.v2)(t, { skipRarity: n, skipDescription: !1 }),
                }),
            }),
            null != m && (0, r.jsx)("img", { src: m, alt: "", draggable: !1, className: tT.Sl }),
            !n && null != u && (0, r.jsx)(tR, { rarity: u }),
        ],
    });
}
var tM = a(541170),
    ty = a(974862),
    tL = a(142389),
    tk = a(211235),
    tD = a(230532),
    tP = a(110601),
    tU = a(917970);
function tG(e) {
    let { customizationOption: t, traitOptions: a, selectedOption: i, onSelectOption: n, disabled: s = !1 } = e,
        c = b.useId(),
        d = !(0, E.Ux)(t),
        l = $(
            "https://cdn.discordapp.com/assets/content/fc5527a1a369d8982c6e6fa588f732c7c5364ff00ddd0cf51646f05ad423af36.mp3",
        ),
        o = $(tI);
    ((0, q.Ay)(() => {
        [ty, tU, tL, tk, tP, tD].forEach((e) => (0, tE.N)(e));
    }),
        b.useEffect(() => () => e2({ hoveredOption: void 0 }), [t]));
    let u = b.useCallback(
            (e, t) => {
                (e2({ hoveredOption: void 0 }), o(), n(e, t));
            },
            [n, o],
        ),
        h = b.useCallback(
            (e) => {
                (l(), e2({ hoveredOption: e.optionId !== i?.optionId ? e : void 0, isDelayed: !0 }));
            },
            [l, i],
        );
    return (0, r.jsx)("div", {
        onMouseLeave: () => e2({ hoveredOption: void 0 }),
        children: (0, r.jsx)("div", {
            role: "radiogroup",
            "aria-label": (0, E.cq)(t),
            className: tM.V,
            onBlur: (e) => {
                e.currentTarget.contains(e.relatedTarget) ||
                    e.currentTarget.matches(":hover") ||
                    e2({ hoveredOption: void 0 });
            },
            children: a.map((e) =>
                (0, r.jsx)(
                    tO,
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
var tH = a(28863),
    tF = a(793574),
    tK = a(778705),
    tB = a(647093);
function tz(e) {
    let { rarity: t } = e,
        a = b.useMemo(() => ({ "--custom-checkpoint-rarity-background": X.Zy[t] }), [t]);
    return (0, r.jsx)(tf, { className: tB.q, style: a, children: tp.intl.string(X.iG[t]) });
}
var tV = a(829870);
function tW(e) {
    let { title: t, rarity: a, description: i } = e;
    return (0, r.jsxs)("div", {
        className: tV.z,
        children: [
            (0, r.jsxs)("div", {
                className: tV.D,
                children: [
                    (0, r.jsx)(tc.E, { tag: "div", variant: "heading-sm/semibold", color: "text-strong", children: t }),
                    null != a && (0, r.jsx)(tz, { rarity: a }),
                ],
            }),
            null != i && (0, r.jsx)(tc.E, { variant: "body-md/medium", color: "text-subtle", children: i }),
        ],
    });
}
function tq(e) {
    return e.status !== tN.eP.NITRO_LOCKED
        ? (0, E.Oq)(e)
        : tp.intl.format(tb.default.E6AfCb, {
              subscribeHook: (e, t) =>
                  (0, r.jsx)(
                      tH.Anchor,
                      {
                          onClick: () => (0, tK.A)({ analyticsLocations: [tF.A.CHECKPOINT, tF.A.CHECKPOINT_TRAIT] }),
                          children: e,
                      },
                      t,
                  ),
          });
}
function tY(e) {
    let { customizationOption: t, selectedOption: a } = e,
        i = e0((e) => e.hoveredOption) ?? a;
    return null == i
        ? null
        : (0, r.jsx)(tW, { title: i.getName(), rarity: (0, E.Ux)(t) ? i.rarity : void 0, description: tq(i) });
}
var tZ = a(509063);
function tX(e) {
    let { children: t, details: a } = e;
    return (0, r.jsxs)("div", {
        className: tZ.Nz,
        children: [
            (0, r.jsx)("div", { className: tZ.fF, children: t }),
            null != a && (0, r.jsx)("div", { className: tZ.zH, children: a }),
        ],
    });
}
let tQ = [tj.K.ULTRA, tj.K.EPIC, tj.K.RARE, tj.K.COMMON, tj.K.DEFAULT];
var tJ = a(51104);
function t$(e) {
    let { rarity: t, isSavedOption: a, visibleRarities: i, hasNitroSubscription: r } = e;
    return a
        ? tN.eP.UNLOCKED
        : null == t || i.has(t)
          ? t !== tj.K.NITRO || r
              ? tN.eP.UNLOCKED
              : tN.eP.NITRO_LOCKED
          : tN.eP.LOCKED;
}
function t0(e, t) {
    return e === E.v7.OUTFIT ? (null != t ? (0, G.FA)(t) : void 0) : t;
}
function t1(e) {
    let { customizationOption: t } = e,
        {
            optionIds: a,
            selectedOptionId: i,
            savedOptionId: r,
            onSelectOption: n,
        } = (function (e) {
            let { customizationOption: t, onSelectOption: a } = e,
                i = E.hw[t],
                { selectedOptionId: r, savedOptionId: n } = (0, x.cf)([u.A], () => ({
                    selectedOptionId: t0(t, u.A.selectedCharacterTraits[i]),
                    savedOptionId: t0(t, u.A.character?.[i]),
                })),
                s = b.useCallback(
                    (e, t) => {
                        if (t === r) return;
                        let i = (0, G.$C)(e, t),
                            s = t$({
                                rarity: i,
                                isSavedOption: n === t,
                                visibleRarities: (0, G.mf)(e, u.A.stats),
                                hasNitroSubscription: (0, U.ki)(P.default.getCurrentUser()),
                            });
                        ((0, f.dw)(e, t, s, i), a(e, t));
                    },
                    [a, n, r],
                );
            return {
                optionIds: (function (e, t) {
                    switch (e) {
                        case E.v7.OUTFIT:
                            return G.ps;
                        case E.v7.OUTFIT_COLOR:
                            return (0, G.wD)(t ?? ep.r.NONE);
                        default:
                            return;
                    }
                })(t, r),
                selectedOptionId: r,
                savedOptionId: n,
                onSelectOption: s,
            };
        })({ customizationOption: t, onSelectOption: o.IB }),
        {
            traitOptions: s,
            availableTraitOptions: c,
            totalCount: d,
            earnedCount: l,
        } = (function (e) {
            let { customizationOption: t, savedOptionId: a, rarityOrder: i, optionIds: r } = e,
                n = (0, x.bG)([u.A], () => u.A.stats),
                s = (0, x.bG)([P.default], () => (0, U.ki)(P.default.getCurrentUser())),
                c = b.useMemo(() => (0, E.p8)(i), [i]);
            return b.useMemo(() => {
                let e = E.hw[t],
                    i = t === E.v7.OUTFIT_COLOR ? tJ.x : tJ.$[e],
                    d = (0, G.mf)(e, n),
                    l = [],
                    o = 0,
                    u = 0;
                for (let t of r ?? G.Rk[e]) {
                    let r = (0, G.$C)(e, t),
                        n = t$({ rarity: r, isSavedOption: a === t, visibleRarities: d, hasNitroSubscription: s }),
                        c = n === tN.eP.UNLOCKED && (r !== tj.K.NITRO || s);
                    (null != r && o++,
                        null != r && c && u++,
                        l.push({
                            trait: e,
                            optionId: t,
                            asset: G.qM[e][t]?.thumbnail,
                            rarity: r,
                            status: n,
                            getName: () => {
                                let e = i[t];
                                return null != e ? tp.intl.string(e) : "";
                            },
                        }));
                }
                l.sort(c);
                let h = l.filter((e) => {
                    let { status: t } = e;
                    return t !== tN.eP.LOCKED;
                });
                return { traitOptions: l, availableTraitOptions: h, totalCount: o, earnedCount: u };
            }, [t, s, r, c, a, n]);
        })({ customizationOption: t, savedOptionId: r, rarityOrder: X.FG, optionIds: a }),
        h = b.useMemo(
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
                n = b.useMemo(
                    () =>
                        (function (e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random,
                                a = e.filter((e) => {
                                    let { status: t, rarity: a } = e;
                                    return t === tN.eP.UNLOCKED && a !== tj.K.NITRO;
                                });
                            for (let e of tQ) {
                                let i = a.filter((t) => t.rarity === e);
                                if (1 === i.length) return i[0];
                                if (i.length > 1) return i[Math.floor(t() * i.length)];
                            }
                            return a[0];
                        })(t),
                    [t],
                ),
                s = t.some((e) => e.optionId === a);
            b.useEffect(() => {
                r || s || (null != n && i(n.trait, n.optionId));
            }, [n, s, i, r]);
        })({ availableTraitOptions: c, selectedOptionId: i, onSelectOption: o.IB }),
        { traitOptions: s, selectedOption: h, totalCount: d, earnedCount: l, onSelectOption: n }
    );
}
function t2(e) {
    let { customizationOption: t } = e,
        {
            traitOptions: a,
            selectedOption: i,
            totalCount: n,
            earnedCount: s,
            onSelectOption: c,
        } = t1({ customizationOption: t });
    return (0, r.jsxs)(tX, {
        details: (0, r.jsx)(tY, { customizationOption: t, selectedOption: i }),
        children: [
            (0, r.jsx)(tw, { customizationOption: t, earnedCount: s, totalCount: n }),
            (0, r.jsx)(tG, { customizationOption: t, traitOptions: a, selectedOption: i, onSelectOption: c }),
        ],
    });
}
var t3 = a(71678);
function t8(e) {
    let { children: t, className: a } = e;
    return (0, r.jsx)("div", { className: _()(t3.n, a), children: t });
}
function t7() {
    let e = (0, x.bG)([u.A], () => u.A.stats?.emojis);
    return (0, r.jsxs)(t8, {
        children: [
            (0, r.jsx)(tg, {
                icon: tn.EmojiSlightlySmilingFaceIcon,
                value: Math.round(e?.numEmojisSent ?? 0),
                topPercent: (0, Z.bD)(e?.numEmojisSentPercentile),
                children: tp.intl.string(tb.default.ZTDCIv),
            }),
            (0, r.jsx)(t2, { customizationOption: E.v7.SHOES }),
        ],
    });
}
var t6 = a(937383);
function t9(e) {
    let { selectedOption: t } = e,
        a = e0((e) => e.hoveredOption) ?? t;
    return null == a
        ? null
        : (0, r.jsx)(tW, {
              title: (0, r.jsxs)(r.Fragment, {
                  children: [
                      a.getName(),
                      " ",
                      (0, r.jsxs)(tc.E, {
                          tag: "span",
                          variant: "heading-sm/semibold",
                          color: "text-subtle",
                          children: [
                              (0, r.jsx)("span", { "aria-hidden": !0, children: "/ " }),
                              (0, r.jsx)(A.A, { children: ", " }),
                              (0, E.hV)(a.optionId),
                          ],
                      }),
                  ],
              }),
              description: tq(a),
          });
}
function t5(e) {
    let { disabled: t } = e,
        { traitOptions: a, selectedOption: i, onSelectOption: n } = t1({ customizationOption: E.v7.OUTFIT_COLOR });
    return (0, r.jsx)(tX, {
        details: (0, r.jsx)(t9, { selectedOption: i }),
        children: (0, r.jsx)(tG, {
            customizationOption: E.v7.OUTFIT_COLOR,
            traitOptions: a,
            selectedOption: i,
            onSelectOption: n,
            disabled: t,
        }),
    });
}
function t4() {
    return (0, r.jsx)(tX, {
        children: (0, r.jsx)(tW, {
            title: tp.intl.string(tb.default.zsYYN1),
            description: tp.intl.string(tb.default.BkuqWx),
        }),
    });
}
function ae(e) {
    let { lastColorwayIdByOutfitId: t, disabled: a } = e,
        { traitOptions: i, selectedOption: n, onSelectOption: s } = t1({ customizationOption: E.v7.OUTFIT }),
        c = b.useMemo(() => (0, E.G5)(i, t), [t, i]);
    return (0, r.jsx)(tX, {
        details: (0, r.jsx)(tY, { customizationOption: E.v7.OUTFIT, selectedOption: n }),
        children: (0, r.jsx)(tG, {
            customizationOption: E.v7.OUTFIT,
            traitOptions: c,
            selectedOption: n,
            onSelectOption: function (e, a) {
                s(e, t.get(a) ?? a);
            },
            disabled: a,
        }),
    });
}
function at(e) {
    let { customizationOption: t, disabled: a } = e,
        { traitOptions: i, selectedOption: n, onSelectOption: s } = t1({ customizationOption: t });
    return (0, r.jsx)(tX, {
        details: (0, r.jsx)(tY, { customizationOption: t, selectedOption: n }),
        children: (0, r.jsx)(tG, {
            customizationOption: t,
            traitOptions: i,
            selectedOption: n,
            onSelectOption: s,
            disabled: a,
        }),
    });
}
function aa(e) {
    let { customizationOption: t, lastColorwayIdByOutfitId: a, disabled: i } = e;
    switch (t) {
        case E.v7.OUTFIT:
            return (0, r.jsx)(ae, { lastColorwayIdByOutfitId: a, disabled: i });
        case E.v7.OUTFIT_COLOR:
            return (0, r.jsx)(t5, { disabled: i });
        default:
            return (0, r.jsx)(at, { customizationOption: t, disabled: i });
    }
}
function ai(e) {
    let { id: t, customizationOption: a, disabled: i } = e,
        n = (function () {
            let e = (0, x.bG)([u.A], () => u.A.selectedCharacterTraits[D.V.OUTFIT]),
                [t, a] = b.useState(new Map()),
                i = null != e ? (0, G.FA)(e) : void 0;
            return (null != e && null != i && t.get(i) !== e && a(new Map(t).set(i, e)), t);
        })(),
        s = (0, x.bG)(
            [u.A],
            () => {
                if (a !== E.v7.OUTFIT_COLOR) return !1;
                let e = u.A.selectedCharacterTraits[D.V.OUTFIT];
                return null == e || (0, G.nb)(D.V.OUTFIT, e);
            },
            [a],
        );
    return (0, r.jsx)("div", {
        role: "tabpanel",
        id: t,
        "aria-label": (0, E.cq)(a),
        tabIndex: s ? 0 : void 0,
        className: t6.n,
        children: s
            ? (0, r.jsx)(t4, {})
            : (0, r.jsx)(aa, { customizationOption: a, lastColorwayIdByOutfitId: n, disabled: i }),
    });
}
var ar = a(265872),
    an = a(320448),
    as = a(315710),
    ac = a(444927);
let ad = { width: 180, height: 240 },
    al = { width: 220, height: 293 };
function ao(e, t) {
    let { width: a, height: i } = e;
    return {
        "--custom-checkpoint-game-art-width": t,
        "--custom-checkpoint-game-art-height": `calc(var(--custom-checkpoint-game-art-width) * ${i} / ${a})`,
    };
}
let au = ao(ad, "clamp(135px, 17.5vh, 180px)"),
    ah = ao(al, "clamp(165px, 21.5vh, 220px)"),
    af = {
        "--custom-checkpoint-primary": X.Kr,
        "--custom-checkpoint-dark-cyan": X.ow,
        "--custom-checkpoint-button-border": X.ow,
        "--custom-checkpoint-button-shadow": X.zj,
        "--custom-checkpoint-white": X.Ve,
        "--custom-checkpoint-guild-card-background": X.LM,
        "--custom-checkpoint-background-gradient-start": X.bI,
    };
var ab = a(580814);
function ap(e) {
    let {
            menuRef: t,
            options: a,
            activeCustomizationOption: i,
            returnRef: n,
            onSelectOption: s,
            onClose: c,
            focusMenu: d,
            onMouseEnter: l,
            onMouseLeave: o,
        } = e,
        u = b.useRef([]),
        h = (0, ac.A)(() => Math.max(a.indexOf(i), 0)),
        [f, p] = b.useState(null);
    function m(e) {
        let t = (e + a.length) % a.length;
        (p(t), u.current[t]?.focus());
    }
    return (
        (0, as.tj)(t, { disable: !d, disableReturn: !0 }),
        b.useEffect(() => {
            d && u.current[h]?.focus();
        }, [h, d]),
        (0, r.jsx)("div", {
            ref: t,
            role: "menu",
            tabIndex: -1,
            "aria-label": tp.intl.string(tb.default.Zl5vPW),
            className: ab.MK,
            style: af,
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
                        (c(), n.current?.focus());
                }
            },
            onMouseEnter: l,
            onMouseLeave: () => {
                (d || p(null), o?.());
            },
            children: a.map((e, t) =>
                (0, r.jsx)(
                    "button",
                    {
                        ref: (e) => {
                            u.current[t] = e;
                        },
                        type: "button",
                        role: "menuitemradio",
                        "aria-checked": e === i,
                        tabIndex: -1,
                        className: _()(ab.AS, { [ab.dT]: f === t }),
                        onFocus: () => p(t),
                        onMouseEnter: (e) => {
                            (p(t), d && e.currentTarget.focus());
                        },
                        onClick: () => s(e),
                        children: (0, r.jsx)(tc.E, {
                            tag: "span",
                            variant: "heading-sm/semibold",
                            color: "none",
                            children: (0, E.cq)(e),
                        }),
                    },
                    e,
                ),
            ),
        })
    );
}
var a_ = a(421773),
    am = a(769909);
function ax(e) {
    var t;
    let a,
        {
            activeCustomizationOption: i,
            onSelectOption: n,
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
            isMenuOpen: p,
            focusMenu: m,
            openMenu: x,
            closeMenu: g,
            handleRequestClose: v,
            selectMenuOption: w,
            onMouseEnter: I,
            onMouseLeave: j,
        } = (function (e) {
            let { activeCustomizationOption: t, onSelectOption: a, blockedTrait: i, disabled: r } = e,
                n = b.useRef(null),
                s = b.useRef(null),
                c = E.kB.includes(t),
                d = (function (e) {
                    let t = E.kB.includes(e),
                        [a, i] = b.useState(t ? e : null);
                    return (t && a !== e && i(e), a);
                })(t),
                l = r || null != i,
                [o, u] = b.useState(!1),
                {
                    isHovered: h,
                    setIsHovered: f,
                    onMouseEnter: p,
                    onMouseLeave: _,
                    cancelTimers: m,
                } = (0, a_.A)(100, 300);
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
                    null != i ? J(i) : r || (m(), u(!0), f(!0));
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
                onMouseEnter: l ? void 0 : p,
                onMouseLeave: o ? void 0 : _,
            };
        })({ activeCustomizationOption: i, onSelectOption: n, blockedTrait: d, disabled: l }),
        S = h ? "more" : i,
        { tabListRef: C, focusAdjacentTab: N } =
            ((t = [...E.IS, "more"]),
            {
                tabListRef: (a = b.useRef(null)),
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
        T = b.useId(),
        R = null != d ? T : void 0,
        O = null != f ? (0, E.cq)(f) : null;
    function M(e) {
        null != d ? J(d) : l || (n(e), g());
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
            className: _()(am.Mf, { [am.OS]: "more" === e, [am.vu]: t }),
        };
    }
    return (0, r.jsxs)("div", {
        ref: C,
        role: "tablist",
        "aria-label": tp.intl.string(tb.default.Zl5vPW),
        className: am.vR,
        children: [
            E.IS.map((e) => {
                let t = (0, E.cq)(e);
                return (0, r.jsx)(
                    "button",
                    {
                        ...k(e),
                        "aria-label": t,
                        children: (0, r.jsx)(tc.E, {
                            tag: "span",
                            variant: "heading-sm/semibold",
                            color: "none",
                            children: t,
                        }),
                    },
                    e,
                );
            }),
            (0, r.jsx)(ar.Y, {
                targetElementRef: o,
                shouldShow: p,
                onRequestOpen: x,
                onRequestClose: v,
                position: "right",
                align: "top",
                spacing: 8,
                renderPopout: () =>
                    (0, r.jsx)(ap, {
                        menuRef: u,
                        options: E.kB,
                        activeCustomizationOption: i,
                        returnRef: o,
                        focusMenu: m,
                        onMouseEnter: I,
                        onMouseLeave: j,
                        onSelectOption: w,
                        onClose: g,
                    }),
                children: (e) =>
                    (0, r.jsxs)("button", {
                        ...e,
                        ...k("more"),
                        ref: o,
                        "aria-label":
                            null != O
                                ? tp.intl.formatToPlainString(tb.default.QX1VPx, { category: O })
                                : tp.intl.string(tb.default.jepsQ6),
                        "aria-haspopup": "menu",
                        "aria-expanded": p,
                        onMouseEnter: I,
                        onMouseLeave: j,
                        children: [
                            (0, r.jsx)(tc.E, {
                                tag: "span",
                                variant: "heading-sm/semibold",
                                color: "none",
                                children: O ?? tp.intl.string(tb.default["iXpQc+"]),
                            }),
                            (0, r.jsx)(an.ChevronSmallRightIcon, { size: "refresh_sm", color: "currentColor" }),
                        ],
                    }),
            }),
            null != d && (0, r.jsx)(A.A, { id: T, children: (0, E.Cz)(d) }),
        ],
    });
}
var ag = a(195464);
function aA() {
    let e = b.useId(),
        t = b.useId(),
        [a, i] = b.useState(E.v7.BASE),
        n = H().find((e) => e === E.hw[a]),
        s = (0, x.bG)([u.A], () => u.A.isSaving),
        c = ts();
    return (0, r.jsxs)(t8, {
        className: ag.nj,
        children: [
            (0, r.jsx)(td.D, {
                ref: c,
                variant: "heading-xl/medium",
                color: "none",
                className: ag.DD,
                children: tp.intl.string(tb.default["q2nj/Z"]),
            }),
            (0, r.jsxs)("div", {
                className: ag.ho,
                children: [
                    (0, r.jsx)(ax, {
                        tabIdPrefix: e,
                        panelId: t,
                        activeCustomizationOption: a,
                        onSelectOption: i,
                        blockedTrait: n,
                        disabled: s,
                    }),
                    (0, r.jsx)(ai, { id: t, customizationOption: a, disabled: s }),
                ],
            }),
        ],
    });
}
var av = a(81466);
function aw() {
    let e = (0, x.bG)([u.A], () => u.A.stats?.games);
    return (0, r.jsxs)(t8, {
        children: [
            (0, r.jsx)(tg, {
                icon: av.CalendarIcon,
                value: Math.round(e?.totalDaysPlayed ?? 0),
                topPercent: (0, Z.bD)(e?.totalDaysPlayedPercentile),
                children: tp.intl.string(tb.default["4N5p4D"]),
            }),
            (0, r.jsx)(t2, { customizationOption: E.v7.AURA }),
        ],
    });
}
var aI = a(687966);
function aE() {
    let e = (0, x.bG)([u.A], () => u.A.stats?.games);
    return (0, r.jsxs)(t8, {
        children: [
            (0, r.jsx)(tg, {
                icon: aI.GameControllerIcon,
                value: Math.round(e?.totalGamesPlayed ?? 0),
                topPercent: (0, Z.bD)(e?.totalGamesPlayedPercentile),
                children: tp.intl.string(tb.default.HM2fjf),
            }),
            (0, r.jsx)(t2, { customizationOption: E.v7.WEARABLE }),
        ],
    });
}
var aj = a(534890),
    aS = a(350363);
function aC() {
    let e = (0, x.bG)([u.A], () => u.A.stats?.messages);
    return (0, r.jsxs)(t8, {
        children: [
            (0, r.jsx)(tg, {
                icon: aj.ChatIcon,
                value: Math.round(e?.numMessagesSent ?? 0),
                topPercent: (0, Z.bD)(e?.numMessagesSentPercentile),
                children: tp.intl.string(aS.default.wWKySP),
            }),
            (0, r.jsx)(t2, { customizationOption: E.v7.OUTFIT }),
        ],
    });
}
var aN = a(664121);
function aT() {
    let e = (0, x.bG)([u.A], () => u.A.stats?.guilds?.guilds[0]);
    return (0, r.jsxs)(t8, {
        children: [
            (0, r.jsx)(tg, {
                icon: aN.ServerIcon,
                value: Math.round(e?.numDaysInteracted ?? 0),
                topPercent: (0, Z.bD)(e?.numDaysInteractedPercentile),
                children: tp.intl.string(tb.default["M+a+t1"]),
            }),
            (0, r.jsx)(t2, { customizationOption: E.v7.HAT }),
        ],
    });
}
var aR = a(831544);
function aO() {
    let e = (0, x.bG)([u.A], () => u.A.stats?.voice),
        t = Math.round(e?.totalVoiceMinutes ?? 0);
    return (0, r.jsxs)(t8, {
        children: [
            (0, r.jsx)(tg, {
                icon: aR.MicrophoneIcon,
                value: t,
                topPercent: (0, Z.bD)(e?.totalVoiceMinutesPercentile),
                children: tp.intl.string(tb.default["3/T12E"]),
            }),
            (0, r.jsx)(t2, { customizationOption: E.v7.FACE }),
        ],
    });
}
function aM(e) {
    let { route: t } = e;
    switch (t) {
        case S.gr.VOICE_FACE:
            return (0, r.jsx)(aO, {});
        case S.gr.MESSAGES_OUTFIT:
            return (0, r.jsx)(aC, {});
        case S.gr.SERVERS_HEADWEAR:
            return (0, r.jsx)(aT, {});
        case S.gr.EMOJI_SHOES:
            return (0, r.jsx)(t7, {});
        case S.gr.GAMES_WEARABLE:
            return (0, r.jsx)(aE, {});
        case S.gr.GAME_TIME_AURA:
            return (0, r.jsx)(aw, {});
        case S.gr.FINALIZE_CHARACTER:
            return (0, r.jsx)(aA, {});
        default:
            return null;
    }
}
var ay = a(358618),
    aL = a(983851),
    ak = a(793920),
    aD = a(893007),
    aP = a(738964);
function aU(e) {
    return `${Math.round(e)}%`;
}
function aG() {
    let { volume: e, isMuted: t } = (0, x.cf)([u.A], () => ({ volume: u.A.volume, isMuted: u.A.isMuted })),
        a = b.useRef(null),
        i = b.useRef(null),
        [n, s] = b.useState(!1),
        [c, d] = b.useState(!1),
        [l, h] = b.useState(!1),
        [f, p] = b.useState(!1),
        _ = b.useRef(null),
        m = b.useRef(!1),
        g = t ? 0 : Math.round(100 * e),
        A = !f && (n || c || l),
        v = 0 === g ? ay.VoiceXIcon : g > 50 ? aL.VoiceNormalIcon : ak.VoiceLowIcon;
    (b.useLayoutEffect(() => {
        null != i.current && (i.current.volume = e);
    }, [e]),
        (0, q.l0)(() => {
            null != _.current && clearTimeout(_.current);
        }));
    let w = b.useCallback((e) => {
            ((0, o.ls)(e / 100),
                h(!0),
                null != _.current && clearTimeout(_.current),
                (_.current = setTimeout(() => h(!1), 1e3)));
        }, []),
        I = b.useCallback(() => {
            (s(!0), p(!1));
        }, []),
        E = b.useCallback(() => s(!1), []),
        j = b.useCallback((e) => {
            d(!m.current && e.target.matches(":focus-visible"));
        }, []),
        S = b.useCallback(() => {
            ((m.current = !0), d(!1));
        }, []),
        C = b.useCallback(() => {
            ((m.current = !1), d(!0));
        }, []),
        N = b.useCallback(() => {
            s(a.current?.matches(":hover") ?? !1);
        }, []),
        T = b.useCallback((e) => {
            e.currentTarget.contains(e.relatedTarget) || ((m.current = !1), d(!1), p(!1));
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
    return (0, r.jsxs)("div", {
        ref: a,
        className: aP.kL,
        onMouseEnter: I,
        onMouseLeave: E,
        onFocus: j,
        onPointerDownCapture: S,
        onBlur: T,
        onKeyDownCapture: C,
        onKeyDown: R,
        children: [
            (0, r.jsx)(en, {
                size: "sm",
                className: A ? aP.Gg : void 0,
                "aria-label": tp.intl.string(t ? aS.default.GN0uv6 : aS.default.pjF33X),
                onClick: o.K8,
                children: (0, r.jsx)(v, { size: "xs", color: "currentColor" }),
            }),
            A
                ? (0, r.jsx)("div", {
                      className: aP.xJ,
                      children: (0, r.jsx)(aD.A, {
                          value: g,
                          minValue: 0,
                          maxValue: 100,
                          onChange: w,
                          onChangeEnd: N,
                          formatValue: aU,
                          "aria-label": tp.intl.string(tp.t.xPHVBs),
                      }),
                  })
                : null,
            (0, r.jsx)("audio", {
                ref: i,
                autoPlay: !0,
                loop: !0,
                muted: t,
                children: (0, r.jsx)("source", {
                    src: "https://cdn.discordapp.com/assets/content/d271231f4934992caed169c11586a1da060d37b5fd8804b56666b547f03836bd.mp3",
                }),
            }),
        ],
    });
}
let aH =
        "https://cdn.discordapp.com/assets/content/914f6f5e36c680d00944ba2e6278b45f8b1da722692e101b5986cf7be56c4979.mp3",
    aF =
        "https://cdn.discordapp.com/assets/content/d1dfc8280cfbd578f18728598db893d807d9ece6b511389848b7308c399f07a0.mp3";
var aK = a(477155),
    aB = a(866665),
    az = a(417270),
    aV = a(935286),
    aW = a(405433),
    aq = a(289873),
    aY = a(621466);
function aZ(e, t) {
    let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    b.useEffect(() => {
        if (!a) return (window.addEventListener("keydown", i), () => window.removeEventListener("keydown", i));
        function i(a) {
            (0, aY.vq)(a.target, HTMLTextAreaElement) ||
                (0, aY.vq)(a.target, HTMLInputElement) ||
                (a.key === e && t(a));
        }
    }, [e, t, a]);
}
var aX = a(652215),
    aQ = a(650583);
function aJ(e) {
    let { source: t, onClick: a, disabled: i = !1 } = e,
        r = $(t),
        n = b.useRef(!1);
    function s() {
        i || r();
    }
    return {
        playSound: s,
        onPointerDown: function (e) {
            e.button === aX.hE4.PRIMARY && ((n.current = !0), s());
        },
        onKeyDown: function (e) {
            (e.key === aQ.dh.ENTER || e.key === aQ.dh.SPACE) && ((n.current = !0), e.repeat || s());
        },
        onClickWithSound: function () {
            (n.current || s(), (n.current = !1), a());
        },
    };
}
var a$ = a(753875);
function a0(e) {
    let { "aria-label": t, "aria-describedby": a, icon: i, onClick: n, disabled: s = !1 } = e,
        {
            playSound: c,
            onPointerDown: d,
            onKeyDown: l,
            onClickWithSound: o,
        } = aJ({ source: aH, onClick: n, disabled: s });
    return (
        aZ(
            "ArrowLeft",
            function (e) {
                (e.repeat || c(), n());
            },
            s,
        ),
        (0, r.jsx)(en, {
            onPointerDown: d,
            onKeyDown: l,
            onClick: o,
            size: "md",
            className: _()(a$.A4, a$.aX),
            "aria-disabled": s,
            "aria-describedby": a,
            "aria-label": t,
            children: (0, r.jsx)(i, { color: "currentColor" }),
        })
    );
}
function a1(e) {
    let {
            "aria-label": t,
            "aria-describedby": a,
            children: i,
            onClick: n,
            size: s,
            className: c,
            disabled: d = !1,
        } = e,
        {
            playSound: l,
            onPointerDown: o,
            onKeyDown: u,
            onClickWithSound: h,
        } = aJ({ source: aF, onClick: n, disabled: d });
    return (
        aZ(
            "ArrowRight",
            function (e) {
                (e.repeat || l(), n());
            },
            d,
        ),
        (0, r.jsx)(es, {
            onPointerDown: o,
            onKeyDown: u,
            onClick: h,
            size: s,
            className: _()(a$.A4, a$.K2, c),
            "aria-disabled": d,
            "aria-describedby": a,
            "aria-label": t,
            children: i,
        })
    );
}
function a2(e) {
    let { "aria-describedby": t, onClick: a, disabled: i } = e;
    return (0, r.jsx)(a0, {
        "aria-label": tp.intl.string(tp.t["13/7kX"]),
        "aria-describedby": t,
        icon: aK.ArrowSmallLeftIcon,
        onClick: a,
        disabled: i,
    });
}
function a3(e) {
    let { onClick: t } = e,
        { onPointerDown: a, onKeyDown: i, onClickWithSound: n } = aJ({ source: aF, onClick: t });
    return (0, r.jsx)(aB.m, {
        text: tp.intl.string(tb.default.cWdGf9),
        ariaHidden: !0,
        children: (0, r.jsx)(en, {
            onPointerDown: a,
            onKeyDown: i,
            onClick: n,
            size: "md",
            className: _()(a$.A4, a$.eZ),
            "aria-label": tp.intl.string(tb.default.cWdGf9),
            children: (0, r.jsx)(az.RetryIcon, { color: "currentColor" }),
        }),
    });
}
function a8(e) {
    let { "aria-describedby": t, onClick: a, disabled: i } = e;
    return (0, r.jsx)(a1, {
        size: "md",
        "aria-label": tp.intl.string(tp.t.PDTjLN),
        "aria-describedby": t,
        onClick: a,
        disabled: i,
        children: (0, r.jsx)(aV.ArrowSmallRightIcon, { color: "currentColor" }),
    });
}
function a7(e) {
    let { onClick: t, disabled: a } = e;
    return (0, r.jsxs)(a1, {
        size: "custom",
        className: a$.GA,
        "aria-label": tp.intl.string(tp.t.i4jeWR),
        onClick: t,
        disabled: a,
        children: [
            (0, r.jsx)(to, { variant: "mono-md/normal", className: a$.Pf, children: tp.intl.string(tp.t.i4jeWR) }),
            (0, r.jsx)(aV.ArrowSmallRightIcon, { size: "refresh_sm", color: "currentColor" }),
        ],
    });
}
function a6(e) {
    let { onClick: t, disabled: a } = e;
    return (0, r.jsxs)(a1, {
        size: "custom",
        className: _()(a$.GA, a$.Bq),
        "aria-label": tp.intl.string(tp.t.RDE0Sc),
        onClick: t,
        disabled: a,
        children: [
            (0, r.jsx)(tc.E, {
                variant: "mono-md/bold",
                color: "none",
                className: a$.Pf,
                children: tp.intl.string(tp.t.RDE0Sc),
            }),
            (0, r.jsx)(aW.ShareIcon, { size: "refresh_sm", color: "currentColor" }),
        ],
    });
}
function a9(e) {
    let { onBack: t, isRouteBlocked: a, isCharacterExiting: i, blockedTraitDescriptionId: n } = e,
        s = (0, x.bG)([u.A], () => u.A.isSaving);
    return (0, r.jsx)(a2, {
        "aria-describedby": n,
        onClick: function () {
            s || t();
        },
        disabled: s || a || i,
    });
}
function a5(e) {
    let { onSaved: t, navigate: a, isRouteBlocked: i, isCharacterExiting: s, blockedTraitDescriptionId: c } = e,
        d = (0, x.bG)([u.A], () => u.A.isSaving),
        l = d || i || s;
    async function h() {
        if (d) return;
        let e = (0, G.XI)(u.A.selectedCharacterTraits);
        (await (0, o.yE)(e)) ? t() : (0, n.P0)({ text: tp.intl.string(tp.t.fEptJP), variant: "critical" });
    }
    function f() {
        a(h);
    }
    let {
        playSound: b,
        onPointerDown: p,
        onKeyDown: m,
        onClickWithSound: g,
    } = aJ({
        source: "https://cdn.discordapp.com/assets/content/1514d999969512ff06ade75018213676ebaf3698af26c0b1b7d3243ec480f920.mp3",
        onClick: f,
        disabled: l,
    });
    return (
        aZ(
            "ArrowRight",
            function (e) {
                (e.repeat || b(), f());
            },
            l,
        ),
        (0, r.jsxs)(es, {
            onPointerDown: p,
            onKeyDown: m,
            onClick: g,
            size: "custom",
            className: _()(a$.A4, a$.K2, a$.GA),
            "aria-disabled": l,
            "aria-describedby": c,
            "aria-label": tp.intl.string(tp.t["R3BPH+"]),
            children: [
                (0, r.jsx)(tc.E, {
                    variant: "mono-md/normal",
                    color: "none",
                    className: a$.Pf,
                    children: tp.intl.string(tp.t["R3BPH+"]),
                }),
                d
                    ? (0, r.jsx)(aq.y, { type: aq.t.SPINNING_CIRCLE_SIMPLE, className: a$.u1, itemClassName: a$.$N })
                    : (0, r.jsx)(aV.ArrowSmallRightIcon, { size: "refresh_sm", color: "currentColor" }),
            ],
        })
    );
}
function a4(e) {
    let {
            activeRoute: t,
            blockedTrait: a,
            blockedTraitDescriptionId: i,
            isCharacterExiting: n,
            onBack: s,
            onNext: c,
            onCharacterSaved: d,
            onReplay: l,
        } = e,
        o = null != a,
        u = b.useMemo(() => (0, e$.throttle)((e) => e(), 500, { trailing: !1 }), []);
    function h(e) {
        null != a ? J(a) : u(e);
    }
    switch (t) {
        case S.gr.HOME:
            return null;
        case S.gr.FINALIZE_CHARACTER:
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(a9, {
                        onBack: () => h(s),
                        isRouteBlocked: o,
                        isCharacterExiting: n,
                        blockedTraitDescriptionId: i,
                    }),
                    (0, r.jsx)(a5, {
                        onSaved: d,
                        navigate: h,
                        isRouteBlocked: o,
                        isCharacterExiting: n,
                        blockedTraitDescriptionId: i,
                    }),
                ],
            });
        case S.gr.SUMMARY:
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(a2, { onClick: () => u(s) }),
                    (0, r.jsx)(a3, { onClick: () => u(l) }),
                    (0, r.jsx)(a6, { onClick: () => u(c) }),
                ],
            });
        case S.gr.SHARE:
            return (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(a2, { onClick: () => u(s) }), (0, r.jsx)(a7, { onClick: () => u(c) })],
            });
        default:
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(a2, { "aria-describedby": i, onClick: () => h(s), disabled: o }),
                    (0, r.jsx)(a8, { "aria-describedby": i, onClick: () => h(c), disabled: o }),
                ],
            });
    }
}
function ie(e) {
    return (0, r.jsx)(el, {
        visible: !e.isCharacterExiting,
        enter: B.I7,
        exit: B.T5,
        keepMounted: !0,
        children: (0, r.jsx)(a4, { ...e }),
    });
}
function it(e) {
    let { className: t } = e;
    return (0, r.jsx)(e4, {
        animatedSrc:
            "https://cdn.discordapp.com/assets/content/02e9ae4cdbec0b2adef22c9a5659f5c7340e399cc8932e8af6d41e62a37644ae.png",
        staticSrc:
            "https://cdn.discordapp.com/assets/content/f08be0abd0d224b5f7e1e5d6c1ef8e4d24cddcb712e2c624dcc6ea3d136818d5.png",
        className: t,
    });
}
var ia = a(771639);
let ii = { "--custom-checkpoint-screen-vertical-inset": "88px" };
function ir(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: ia.n, style: ii, children: t });
}
var is = a(639331);
let ic = {
    "--custom-checkpoint-intro-fade-in-delay": "1800ms",
    "--custom-checkpoint-intro-fade-in-duration": "1000ms",
};
function id() {
    let e = (0, x.bG)([u.A], () => u.A.fetchState !== u.T.SUCCESS || null != u.A.stats),
        t = ts();
    return (0, r.jsx)(ir, {
        children: (0, r.jsxs)("div", {
            className: is.Qs,
            style: ic,
            children: [
                (0, r.jsxs)("div", {
                    ref: t,
                    className: is.Ok,
                    role: "heading",
                    "aria-level": 2,
                    children: ["2026", !e && (0, r.jsx)(it, { className: is.gi })],
                }),
                (0, r.jsxs)("div", {
                    className: is.eH,
                    children: [
                        (0, r.jsx)(to, {
                            tag: "p",
                            variant: "heading-xl/medium",
                            children: tp.intl.string(e ? tb.default["7YmUVu"] : tb.default["Fyr+NW"]),
                        }),
                        !e &&
                            (0, r.jsx)(to, {
                                tag: "p",
                                variant: "heading-xl/medium",
                                children: tp.intl.string(tb.default["2GRr6H"]),
                            }),
                    ],
                }),
            ],
        }),
    });
}
(a(134528), a(947204));
var il = a(675970),
    io = a(559106),
    iu = a(366056),
    ih = a(292801),
    ib = a(155718),
    ip = a(294454),
    i_ = a(489414),
    im = a(878358),
    ix = a(383233),
    ig = a(819648),
    iA = a(677059);
function iv(e) {
    let { children: t } = e;
    return (0, r.jsx)(to, { variant: "heading-xxl/medium", className: iA.h, children: t });
}
function iw(e) {
    let { accessibilityLabel: t, className: a, children: i, ref: n } = e;
    return (0, r.jsxs)("div", {
        ref: n,
        role: "heading",
        "aria-level": 2,
        children: [
            (0, r.jsx)("div", { className: a, "aria-hidden": !0, children: i }),
            (0, r.jsx)(A.A, { children: t }),
        ],
    });
}
var iI = a(100391);
function iE(e) {
    let { icon: t, children: a } = e;
    return (0, r.jsxs)("div", {
        className: iI.D,
        children: [
            (0, r.jsx)(t, { size: "md", color: "currentColor" }),
            (0, r.jsx)(to, { variant: "heading-lg/semibold", className: iI.Q, children: a }),
        ],
    });
}
function ij(e) {
    let { icon: t, children: a } = e;
    return (0, r.jsxs)("div", {
        className: iI.D,
        children: [
            (0, r.jsx)(t, { size: "md", color: "currentColor" }),
            (0, r.jsx)(tu, { variant: "heading-lg/semibold", className: iI.Q, children: a }),
        ],
    });
}
var iS = a(456410);
function iC(e) {
    let { name: t, label: a, checked: i, onSelect: n, children: s } = e;
    return (0, r.jsx)(io.vN, {
        within: !0,
        children: (0, r.jsxs)("label", {
            className: _()(iS.uK, { [iS.KD]: i }),
            children: [
                (0, r.jsx)(A.A, {
                    children: (0, r.jsx)("input", { type: "radio", name: t, checked: i, onChange: n, "aria-label": a }),
                }),
                i ? (0, r.jsx)("div", { className: iS.Gt, "aria-hidden": !0 }) : null,
                (0, r.jsx)("div", { className: iS.Nr, "aria-hidden": !0, children: s }),
            ],
        }),
    });
}
function iN() {
    let e = (0, x.bG)([u.A], () => u.A.character),
        t = (0, x.bG)([u.A], () => u.A.stats),
        a = b.useId(),
        i = ts(),
        s = b.useMemo(() => {
            var a, i;
            return ((a = e),
            (i = t),
            null != a && null != i
                ? [il.Q.CHARACTER_ONLY, il.Q.DEFAULT, il.Q.STATS_ONLY]
                : null != a
                  ? [il.Q.CHARACTER_ONLY]
                  : null != i
                    ? [il.Q.STATS_ONLY]
                    : []).map((a) => ({ cardType: a, checkpointData: (0, ig.Go)(a, e, t) }));
        }, [e, t]),
        [c, d] = b.useState(
            () =>
                (
                    s.find((e) => {
                        let { cardType: t } = e;
                        return t === il.Q.DEFAULT;
                    }) ?? s.at(0)
                )?.cardType,
        ),
        l = s.find((e) => {
            let { cardType: t } = e;
            return t === c;
        }),
        h = $(tI),
        {
            onPointerDown: p,
            onKeyDown: _,
            onClickWithSound: m,
        } = aJ({
            source: aF,
            onClick: function () {
                if (null == l) return;
                let { cardType: e, checkpointData: t } = l;
                (0, ip.fO)({
                    message: new ix.Ay({
                        content: "",
                        components: [{ type: ib.I5.CHECKPOINT_CARD, id: (0, i_.X1)("0"), checkpointData: t }],
                    }),
                    source: "checkpoint",
                    customSendHandler: async (t, a, i) => {
                        let { withMessage: r } = a;
                        i(!0);
                        try {
                            (await (0, o.jA)(t, r ?? "", e),
                                (0, f.Pe)(e),
                                (0, ip.Be)(),
                                (0, n.P0)({ text: tp.intl.string(tp.t.kwmYkt), variant: "success" }));
                        } catch {
                            (0, n.P0)({ text: tp.intl.string(tp.t.iufib1), variant: "critical" });
                        } finally {
                            i(!1);
                        }
                    },
                });
            },
        });
    return null == l
        ? null
        : (0, r.jsx)(ir, {
              children: (0, r.jsxs)("div", {
                  className: iS.uM,
                  children: [
                      (0, r.jsxs)("div", {
                          className: iS.wx,
                          children: [
                              (0, r.jsxs)(iw, {
                                  ref: i,
                                  className: iS.R_,
                                  accessibilityLabel: tp.intl.string(tb.default.P5zyko),
                                  children: [
                                      (0, r.jsx)(iE, {
                                          icon: iu.ExperimentalCheckpointIcon,
                                          children: tp.intl.string(aS.default.ir6nEQ),
                                      }),
                                      (0, r.jsx)(to, {
                                          variant: "display-lg",
                                          className: iS.Vy,
                                          children: tp.intl.string(tp.t.RDE0Sc),
                                      }),
                                  ],
                              }),
                              (0, r.jsx)("div", {
                                  className: iS.h_,
                                  children: (0, r.jsx)(iv, { children: tp.intl.string(tb.default.KXDPot) }),
                              }),
                          ],
                      }),
                      (0, r.jsx)("div", {
                          role: "radiogroup",
                          "aria-label": tp.intl.string(tb.default.KXDPot),
                          className: iS.kR,
                          children: s.map((e) => {
                              let { cardType: t, checkpointData: i } = e;
                              return (0, r.jsx)(
                                  iC,
                                  {
                                      name: a,
                                      label: (function (e) {
                                          switch (e) {
                                              case il.Q.CHARACTER_ONLY:
                                                  return tp.intl.string(tb.default.tUU3fe);
                                              case il.Q.DEFAULT:
                                                  return tp.intl.string(tb.default.DZQzJn);
                                              case il.Q.STATS_ONLY:
                                                  return tp.intl.string(tb.default.e2UHGT);
                                          }
                                      })(t),
                                      checked: t === l.cardType,
                                      onSelect: () => {
                                          (h(), d(t));
                                      },
                                      children: (0, r.jsx)(im.A, { checkpointData: i }),
                                  },
                                  t,
                              );
                          }),
                      }),
                      (0, r.jsxs)(es, {
                          onPointerDown: p,
                          onKeyDown: _,
                          onClick: m,
                          size: "custom",
                          className: iS.sY,
                          "aria-label": tp.intl.string(tp.t.I3ltXO),
                          children: [
                              (0, r.jsx)(tc.E, {
                                  variant: "mono-md/bold",
                                  color: "none",
                                  className: iS.RC,
                                  children: tp.intl.string(tp.t.I3ltXO),
                              }),
                              (0, r.jsx)(ih.ArrowAngleRightUpIcon, { size: "refresh_sm", color: "currentColor" }),
                          ],
                      }),
                  ],
              }),
          });
}
var iT = a(206701),
    iR = a(782134),
    iO = a(998304),
    iM = a(975571),
    iy = a(427262),
    iL = a(438389);
let ik = (0, iO.j5)(X.Kr);
function iD(e) {
    let { onStart: t } = e,
        a = (0, x.bG)([P.default], () => P.default.getCurrentUser()),
        i = (0, iy.tx)(a),
        n = (0, x.bG)([K.Ay], () => K.Ay.useReducedMotion),
        { playSound: s, onPointerDown: c, onKeyDown: d, onClickWithSound: l } = aJ({ source: aF, onClick: t });
    return (
        aZ("ArrowRight", function (e) {
            (e.repeat || s(), t());
        }),
        (0, r.jsxs)(ir, {
            children: [
                (0, r.jsxs)("div", {
                    className: iL.Qs,
                    children: [
                        (0, r.jsxs)("div", {
                            className: iL.wx,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: iL.Qq,
                                    children: [
                                        (0, r.jsx)(tu, {
                                            variant: "display-lg",
                                            className: iL.DD,
                                            children: tp.intl.string(aS.default["CdU/PF"]),
                                        }),
                                        (0, r.jsx)(to, {
                                            variant: "heading-xxl/medium",
                                            children: tp.intl.formatToPlainString(tb.default.xhZ23b, { username: i }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", {
                                    className: iL.CB,
                                    children: (0, r.jsx)(iT.U, {
                                        artboard: "Entry",
                                        className: iL.lW,
                                        fit: "contain",
                                        withReducedMotion: "short-loop",
                                        dataBinding: { iconColor: ik, reducedMotion: n },
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsxs)(es, {
                            onPointerDown: c,
                            onKeyDown: d,
                            onClick: l,
                            size: "custom",
                            className: iL.ni,
                            "aria-label": tp.intl.string(tp.t.I0v0Qv),
                            children: [
                                (0, r.jsx)(iR.PlayIcon, { size: "refresh_sm", color: "currentColor" }),
                                (0, r.jsx)(to, {
                                    variant: "mono-md/normal",
                                    className: iL.qK,
                                    children: tp.intl.string(tp.t.I0v0Qv),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: iL.qr,
                    children: [
                        (0, r.jsx)(to, {
                            variant: "body-sm/medium",
                            className: iL.ed,
                            children: tp.intl.format(tb.default.hcNhyq, {
                                learnMoreHook: (e, t) =>
                                    (0, r.jsx)(
                                        tH.Anchor,
                                        {
                                            className: iL.nf,
                                            href: iM.A.getArticleURL(aX.MVz.CHECKPOINT),
                                            useDefaultUnderlineStyles: !1,
                                            children: e,
                                        },
                                        t,
                                    ),
                            }),
                        }),
                        (0, r.jsx)(to, {
                            variant: "body-md/medium",
                            className: iL.al,
                            children: tp.intl.format(aS.default.g476ZL, { name: "Exyl" }),
                        }),
                    ],
                }),
            ],
        })
    );
}
var iP = a(565645),
    iU = a(141881);
function iG(e) {
    let { children: t } = e;
    return (0, r.jsx)(tf, { className: iU.l, children: t });
}
var iH = a(765671),
    iF = a(663385),
    iK = a(469228),
    iB = a(406956);
let iz = (0, iO.j5)(X.Kr);
function iV(e) {
    let { value: t, alignment: a = "left", className: i } = e,
        n = (0, x.bG)([K.Ay], () => K.Ay.useReducedMotion),
        [s, c] = b.useState(0),
        { isLoaded: d, onLoad: l } = (function () {
            let [e, t] = b.useState(!1);
            return { isLoaded: e, onLoad: b.useCallback(() => t(!0), []) };
        })(),
        o = n ? t : s;
    b.useEffect(() => {
        if (n || !d) return;
        let e = performance.now(),
            a = requestAnimationFrame(function i(r) {
                let n = Math.min((r - e) / 500, 1);
                (c(Math.round(t * n)), n < 1 && (a = requestAnimationFrame(i)));
            });
        return () => cancelAnimationFrame(a);
    }, [t, n, d]);
    let u = "center" === a ? iF.m : iK.w;
    return (0, r.jsxs)("div", {
        className: _()(iB.lY, i),
        children: [
            (0, r.jsx)("div", { className: iB.VL, children: t }),
            (0, r.jsx)(u, {
                className: iB.lW,
                fit: "layout",
                withReducedMotion: "short-loop",
                dataBinding: { DisplayValue: o, TextColor: iz },
                onLoad: l,
            }),
            (0, r.jsx)(A.A, { children: t.toLocaleString(tp.intl.currentLocale) }),
        ],
    });
}
var iW = a(434911);
function iq(e) {
    let { value: t } = e,
        { ref: a, width: i } = (0, iH.Ay)(),
        { ref: n, width: s } = (0, iH.Ay)(),
        c = null != i && null != s ? Math.min(1, i / s) : 1;
    return (0, r.jsxs)("div", {
        ref: a,
        className: iW.ai,
        style: { height: 200 * c },
        children: [
            (0, r.jsx)("span", { ref: n, className: _()(iW.Qq, iW.xP), children: t }),
            (0, r.jsx)(iV, { value: t }),
        ],
    });
}
function iY(e) {
    let { value: t } = e;
    return (0, r.jsxs)("div", {
        className: iW.dJ,
        children: [
            "number" == typeof t
                ? (0, r.jsx)(iq, { value: t })
                : (0, r.jsx)(to, { variant: "heading-xxl/medium", className: iW.Qq, children: t }),
            (0, r.jsx)(it, { className: iW.gi }),
        ],
    });
}
var iZ = a(445199),
    iX = a(205524),
    iQ = a(690521),
    iJ = a(152321);
let i$ = [0, 0, 2],
    i0 = [0, 1, 0],
    i1 = [0, 0, 0],
    i2 = `
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
    i3 = `
precision mediump float;

varying vec2 v_texcoord;
varying highp vec3 v_lighting;

uniform sampler2D u_texture;

void main() {
  highp vec4 texelColor = texture2D(u_texture, v_texcoord);
  gl_FragColor = vec4(texelColor.rgb * v_lighting, texelColor.a);
}
`,
    i8 = [
        -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5,
        -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5,
        0.5, 0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, -0.5,
        -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5,
        -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5,
        -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5,
    ],
    i7 = [
        0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0,
        1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0,
    ],
    i6 = [
        0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
        1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
        -1, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
        1, 0, 0,
    ];
function i9(e) {
    let t,
        { emoji: a } = e,
        [i, n] = b.useState(null),
        [s, c] = b.useState(null),
        d = b.useRef(new Image()),
        [l, o] = b.useState(null),
        [u, h] = b.useState(!1),
        f = b.useRef(0),
        p = b.useRef(0),
        m = b.useRef(45),
        g = b.useRef(45),
        A = (0, x.bG)([K.Ay], () => K.Ay.useReducedMotion),
        v = 70 * !A,
        w = 40 * !A,
        I = b.useRef(v),
        E = b.useRef(w),
        j = b.useRef(!1),
        S = b.useRef(0),
        C = b.useRef(0);
    ((t = b.useRef(null)),
        b.useEffect(() => {
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
        b.useEffect(() => {
            let e,
                a = 0,
                r = i?.getContext("webgl");
            if (null == r || null == i || null == s) return;
            t.current = r;
            let n = r.createShader(r.VERTEX_SHADER),
                c = r.createShader(r.FRAGMENT_SHADER);
            if (null == n || null == c) return;
            if (
                (r.shaderSource(n, i2),
                r.shaderSource(c, i3),
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
                r.bufferData(r.ARRAY_BUFFER, new Float32Array(i6), r.STATIC_DRAW),
                r.vertexAttribPointer(f, 3, r.FLOAT, !1, 0, 0),
                r.enableVertexAttribArray(f));
            let _ = r.createBuffer();
            (r.bindBuffer(r.ARRAY_BUFFER, _),
                (e = new Float32Array(i8)),
                r.bufferData(r.ARRAY_BUFFER, e, r.STATIC_DRAW));
            let x = r.createBuffer();
            (r.bindBuffer(r.ARRAY_BUFFER, x), r.bufferData(r.ARRAY_BUFFER, new Float32Array(i7), r.STATIC_DRAW));
            let A = iZ.DF(60);
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
                    let s = iZ.DF(m.current),
                        c = iZ.DF(g.current);
                    (r.clear(r.COLOR_BUFFER_BIT | r.DEPTH_BUFFER_BIT),
                        r.useProgram(d),
                        r.enableVertexAttribArray(l),
                        r.bindBuffer(r.ARRAY_BUFFER, _),
                        r.vertexAttribPointer(l, 3, r.FLOAT, !1, 0, 0),
                        r.enableVertexAttribArray(o),
                        r.bindBuffer(r.ARRAY_BUFFER, x),
                        r.vertexAttribPointer(o, 2, r.FLOAT, !1, 0, 0));
                    let f = i.clientWidth / i.clientHeight,
                        p = iX.fN(iX.vt(), A, f, 1, 2e3),
                        v = iX.t5(iX.vt(), i$, i1, i0),
                        w = iX.lw(iX.vt(), p, v),
                        I = iX.vt();
                    (iX.eL(I, I, s), iX.Z8(I, I, c));
                    let E = iX.lw(iX.vt(), w, I),
                        j = iX.vt();
                    (iX.B8(j, I),
                        iX.mg(j, j),
                        r.uniformMatrix4fv(b, !1, j),
                        r.uniformMatrix4fv(u, !1, E),
                        r.uniform1i(h, 0),
                        r.drawArrays(r.TRIANGLES, 0, 36),
                        (a = requestAnimationFrame(e)));
                })),
                () => cancelAnimationFrame(a)
            );
        }, [m, g, i, s]));
    let N = b.useCallback(() => {
        let e = s?.getContext("2d");
        null != s &&
            null != e &&
            ((e.fillStyle = "black"),
            e.fillRect(0, 0, s.width, s.height),
            e.drawImage(d.current, 0, 0, s.width, s.height),
            (e.fillStyle = X.Kr),
            e.fillRect(0, 0, s.width, 2),
            e.fillRect(0, 0, 2, s.height),
            e.fillRect(0, s.height - 2, s.width, 2),
            e.fillRect(s.width - 2, 0, 2, s.height),
            o(a),
            h(!0));
    }, [a, d, s]);
    (b.useEffect(() => {
        null != s &&
            ((d.current.crossOrigin = "anonymous"), (d.current.src = (0, iQ.Ez)(a, 512)), (d.current.onload = N));
    }, [a, N, d, s]),
        b.useEffect(
            () => (
                !(function e(t) {
                    let a = 0.001 * t,
                        i = Math.min(a - p.current, 0.1);
                    if (((g.current += -E.current * i), (m.current += -I.current * i), !j.current)) {
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
            ((j.current = !0), (I.current = 0), (E.current = 0), (S.current = e.clientX), (C.current = e.clientY));
        }, []),
        R = b.useCallback((e) => {
            if (j.current) {
                let t = (e.clientX - S.current) / window.devicePixelRatio;
                ((I.current = -((e.clientY - C.current) / window.devicePixelRatio) * (100 / window.devicePixelRatio)),
                    (E.current = -t * (100 / window.devicePixelRatio)),
                    (S.current = e.clientX),
                    (C.current = e.clientY));
            }
        }, []),
        O = b.useCallback(() => {
            j.current = !1;
        }, []);
    return (
        b.useEffect(
            () => (
                window.addEventListener("mouseup", O),
                window.addEventListener("mousemove", R),
                () => {
                    (window.removeEventListener("mouseup", O), window.removeEventListener("mousemove", R));
                }
            ),
            [R, O],
        ),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("canvas", {
                    className: _()(iJ.Ji, { [iJ.q4]: !u }),
                    ref: n,
                    height: 512,
                    width: 512,
                    onMouseDown: T,
                }),
                (0, r.jsx)("canvas", { className: iJ.R, ref: c, height: 512, width: 512 }),
            ],
        })
    );
}
var i5 = a(826820);
let i4 = [];
function re(e) {
    let { emojiStats: t } = e,
        a = Math.round(t?.numEmojisSent ?? 0),
        i = (0, Z.bD)(t?.numEmojisSentPercentile);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: i5.dJ,
                children: [
                    (0, r.jsx)(ij, {
                        icon: tn.EmojiSlightlySmilingFaceIcon,
                        children: tp.intl.string(tb.default.ZTDCIv),
                    }),
                    (0, r.jsx)(iV, { value: a }),
                ],
            }),
            (0, r.jsx)(iv, {
                children:
                    null != i
                        ? tp.intl.format(tb.default.o7vDrk, {
                              percent: i,
                              percentHook: (e, t) => (0, r.jsx)(iG, { children: e }, t),
                          })
                        : tp.intl.format(tb.default.NFptic, { numEmojis: a }),
            }),
        ],
    });
}
function rt(e) {
    let { numEmojisSent: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: i5.dJ,
                children: [
                    (0, r.jsx)(ij, {
                        icon: tn.EmojiSlightlySmilingFaceIcon,
                        children: tp.intl.string(tb.default.ZTDCIv),
                    }),
                    (0, r.jsx)(iY, { value: t }),
                ],
            }),
            (0, r.jsx)(iv, { children: tp.intl.format(tb.default["660/Rr"], { numEmojis: (0, Z.wj)(t) }) }),
        ],
    });
}
function ra() {
    let e = (0, x.bG)([u.A], () => u.A.stats?.emojis),
        t = (0, x.bG)([u.A], () => (0, Z.y7)(u.A.stats)),
        a = (0, x.bG)([u.A], () => u.A.globalStats?.emojis),
        i = !t && null != a,
        n = (i ? a.emojis : e?.emojis) ?? i4,
        [s, c] = b.useState(0),
        d = n[s],
        l = $(tI);
    return (0, r.jsx)(ir, {
        children: (0, r.jsxs)("div", {
            className: i5.kL,
            children: [
                (0, r.jsx)("div", { className: i5.KY, children: null != d && (0, r.jsx)(i9, { emoji: d }) }),
                (0, r.jsxs)("div", {
                    className: i5.C,
                    children: [
                        i ? (0, r.jsx)(rt, { numEmojisSent: a.numEmojisSent }) : (0, r.jsx)(re, { emojiStats: e }),
                        (0, r.jsx)("div", {
                            className: i5.gm,
                            children: n.map((e, t) =>
                                (0, r.jsx)(
                                    ri,
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
function ri(e) {
    let { emoji: t, rank: a, isActive: i, onClick: n } = e,
        s = !(0, x.bG)([K.Ay], () => K.Ay.useReducedMotion) && !0 === t.animated;
    return (0, r.jsxs)(en, {
        size: "custom",
        className: i5._X,
        onClick: n,
        "aria-label": tp.intl.formatToPlainString(tb.default["S5+pRg"], { emojiName: t.name, rank: a }),
        "aria-pressed": i,
        children: [
            (0, r.jsx)(iP.A, { className: i5.Zg, emojiId: t.id, emojiName: t.name, animated: s }),
            (0, r.jsx)(to, { variant: "mono-md/bold", className: i5.Tm, children: a }),
        ],
    });
}
var rr = a(360450),
    rn = a(214947),
    rs = a(939249),
    rc = a(597770),
    rd = a(559647),
    rl = a(95369),
    ro = a(570287),
    ru = a(486020);
let rh = { 0: 1100, 1: 1e3 };
var rf = a(801305);
let rb = [],
    rp = (0, iO.j5)(X.Kr),
    r_ = { r: 0, g: 0, b: 0, a: 1 },
    rm = {
        "Avatar01/Stroke": r_,
        "Avatar01/Fill": rp,
        "Avatar02/Stroke": r_,
        "Avatar02/Fill": rp,
        "Avatar03/Stroke": r_,
        "Avatar03/Fill": rp,
        "Avatar04/Stroke": r_,
        "Avatar04/Fill": rp,
        "Avatar05/Stroke": r_,
        "Avatar05/Fill": rp,
        ConnectorColor: rp,
    };
function rx(e) {
    return null != e ? ru.Ay.getUserAvatarURL(e, !1, 160, "png") : void 0;
}
function rg(e) {
    let t,
        { route: a, onNextStep: i, onPreviousStep: n } = e,
        s = (0, x.bG)([u.A], () => u.A.stats?.users ?? rb),
        c = (0, x.bG)([u.A], () => u.A.stats?.sidekick),
        d = (0, x.bG)([P.default], () => P.default.getCurrentUser()),
        l = (0, x.bG)([K.Ay], () => K.Ay.useReducedMotion),
        o = b.useRef(null),
        h = b.useRef(void 0),
        { animationState: f, isTransitioning: p } = (function (e, t) {
            var a;
            let [i, r] = b.useState({ route: e, hasShownSquad: e === S.gr.SQUAD, transition: null });
            i.route !== e &&
                r({
                    route: e,
                    hasShownSquad: i.hasShownSquad || e === S.gr.SQUAD,
                    transition:
                        ((a = i.route),
                        t
                            ? null
                            : a === S.gr.SQUAD && e === S.gr.SIDEKICK
                              ? 0
                              : a === S.gr.SIDEKICK && e === S.gr.SQUAD
                                ? 1
                                : null),
                });
            let { transition: n } = i;
            b.useEffect(() => {
                if (null == n) return;
                let e = setTimeout(() => r((e) => ({ ...e, transition: null })), rh[n]);
                return () => clearTimeout(e);
            }, [n]);
            let s = e === S.gr.SIDEKICK || e === S.gr.SIDEKICK_LEAVE;
            return {
                animationState: (function (e) {
                    let { route: t, hasShownSquad: a, transition: i, isReducedMotion: r } = e;
                    switch (t) {
                        case S.gr.SQUAD_TRANSITION:
                            return 5 * !!a;
                        case S.gr.SQUAD:
                            return 1;
                        case S.gr.SIDEKICK:
                            return 0 === i ? 2 : 3;
                        case S.gr.SIDEKICK_LEAVE:
                            return r ? 3 : 4;
                        default:
                            return 0;
                    }
                })({ route: e, hasShownSquad: i.hasShownSquad, transition: n, isReducedMotion: t }),
                isTransitioning: null != n,
                showsSidekickPair: s ? 0 !== n : 1 === n,
            };
        })(a, l);
    ((t = b.useRef(!0)),
        b.useEffect(() => {
            if (a !== S.gr.SIDEKICK_LEAVE) {
                t.current = !1;
                return;
            }
            if (t.current) return void n();
            if (l) return void i();
            let e = setTimeout(i, 1e3);
            return () => clearTimeout(e);
        }, [i, n, l, a]));
    let [m, g] = s,
        v = (0, iy.tx)(m) ?? "",
        w = (0, iy.tx)(g) ?? "",
        I = v.toLocaleUpperCase(),
        E = w.toLocaleUpperCase(),
        j = (0, iy.tx)(c?.user) ?? "",
        C = [
            { user: c?.user, name: j },
            { user: m, name: v },
            { user: g, name: w },
        ].filter((e) => null != e.user),
        N = s.length < 2,
        T = a === S.gr.SIDEKICK || a === S.gr.SIDEKICK_LEAVE;
    b.useEffect(() => () => clearInterval(h.current), []);
    let R = b.useCallback(() => {
        (clearInterval(h.current),
            (h.current = setInterval(() => {
                let e = o.current?.getProperties();
                e?.twoFriends?.value === N &&
                    e?.reducedMotion?.value === l &&
                    e?.["Avatar01/Username"]?.value === j.toLocaleUpperCase() &&
                    (o.current?.play(), clearInterval(h.current));
            }, 50)));
    }, [l, j, N]);
    return (0, r.jsxs)(ir, {
        children: [
            (0, r.jsx)(rr.m, {
                ref: o,
                className: rf.lW,
                fit: "contain",
                autoplay: !1,
                onLoad: R,
                withReducedMotion: "play",
                dataBinding: {
                    ...rm,
                    AnimationState: f,
                    "Avatar01/img": rx(c?.user),
                    "Avatar02/img": rx(g),
                    "Avatar03/img": rx(m),
                    "Avatar04/img": rx(c?.user),
                    "Avatar05/img": rx(d),
                    "Avatar01/Username": j.toLocaleUpperCase(),
                    "Avatar02/Username": E,
                    "Avatar03/Username": I,
                    "Avatar04/Username": j.toLocaleUpperCase(),
                    twoFriends: N,
                    reducedMotion: l,
                },
            }),
            (0, r.jsx)(el, {
                visible: a === S.gr.SQUAD_TRANSITION,
                enter: B.aw,
                exit: B.VI,
                mountAfterDelay: !0,
                className: _()(rf.Qs, rf.kY),
                children: (0, r.jsx)(rA, {}),
            }),
            (0, r.jsxs)(el, {
                visible: a === S.gr.SQUAD && !p,
                enter: B.aw,
                exit: B.VI,
                mountAfterDelay: !0,
                className: rf.Qs,
                children: [
                    (0, r.jsx)(rv, {
                        title: tp.intl.string(aS.default.OzY5Ns),
                        accessibilityLabel: tp.intl.string(tb.default.OSo1fB),
                        description: tp.intl.string(tb.default.EqdLDd),
                    }),
                    (0, r.jsx)(A.A, {
                        tag: "ul",
                        children: C.map((e, t) => (0, r.jsx)("li", { children: e.name }, t)),
                    }),
                ],
            }),
            null != c &&
                (0, r.jsxs)(el, {
                    visible: T && !p,
                    enter: B.Mj,
                    exit: B.VI,
                    mountAfterDelay: !0,
                    className: _()(rf.Qs, rf.yG),
                    children: [
                        (0, r.jsxs)("div", {
                            className: rf.Cv,
                            children: [
                                (0, r.jsx)(rv, {
                                    title: tp.intl.string(aS.default["+uwOHt"]),
                                    accessibilityLabel: tp.intl.string(tb.default.X4EiRH),
                                    description: tp.intl.string(tb.default["/ctmGw"]),
                                }),
                                (0, r.jsx)(A.A, { children: j }),
                                (0, r.jsx)(rw, { sidekick: c }),
                            ],
                        }),
                        (0, r.jsx)(rI, { user: c.user, username: j }),
                    ],
                }),
        ],
    });
}
function rA() {
    let e = ts();
    return (0, r.jsx)("div", {
        ref: e,
        className: _()(rf.Qs, rf.kY),
        children: (0, r.jsx)(iv, { children: tp.intl.string(tb.default["6RSp5q"]) }),
    });
}
function rv(e) {
    let { title: t, accessibilityLabel: a, description: i } = e,
        n = ts();
    return (0, r.jsxs)("div", {
        className: rf.wx,
        children: [
            (0, r.jsxs)(iw, {
                ref: n,
                className: rf.R_,
                accessibilityLabel: a,
                children: [
                    (0, r.jsx)(iE, { icon: rn.FriendsIcon, children: tp.intl.string(aS.default.ZQakPR) }),
                    (0, r.jsx)(to, { variant: "display-lg", className: rf.Vy, children: t }),
                ],
            }),
            (0, r.jsx)(iv, { children: i }),
        ],
    });
}
function rw(e) {
    let { sidekick: t } = e,
        a = Math.round(t.numMessagesSent),
        i = Math.round(t.numVoiceMinutes);
    return (0, r.jsxs)("div", {
        className: rf.M1,
        children: [
            (0, r.jsxs)("div", {
                className: rf.dJ,
                "aria-hidden": !0,
                children: [
                    (0, r.jsx)(aj.ChatIcon, { size: "md", color: "currentColor" }),
                    (0, r.jsx)(to, { variant: "heading-xxl/medium", className: rf.wk, children: a }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: rf.dJ,
                "aria-hidden": !0,
                children: [
                    (0, r.jsx)(aR.MicrophoneIcon, { size: "md", color: "currentColor" }),
                    (0, r.jsx)(to, { variant: "heading-xxl/medium", className: rf.wk, children: i }),
                ],
            }),
            (0, r.jsx)(A.A, {
                children: tp.intl.formatToPlainString(tb.default.NafXAs, { numMessages: a, numMinutes: i }),
            }),
        ],
    });
}
function rI(e) {
    let { user: t, username: a } = e,
        [i, s] = b.useState(""),
        [c, d] = b.useState(!1),
        [l, u] = b.useState(!1),
        h = (0, ro.A)(t.id),
        p = i.trim(),
        m = p.length > 0 && p.length <= 250 && !c && !l,
        x = c ? tp.intl.string(tp.t.fjcCk5) : tp.intl.formatToPlainString(tp.t["0ZQw/X"], { name: a });
    return h
        ? (0, r.jsxs)("div", {
              className: rf.OG,
              children: [
                  (0, r.jsx)("textarea", {
                      className: rf.yB,
                      value: i,
                      onChange: (e) => s(e.target.value),
                      maxLength: 250,
                      disabled: c || l,
                      placeholder: x,
                      "aria-label": x,
                  }),
                  (0, r.jsxs)("div", {
                      className: rf.n,
                      children: [
                          (0, r.jsx)(rs.D, {
                              className: rf.KD,
                              onClick: function () {
                                  ((0, f.nr)(t.id),
                                      (0, rl.A)({
                                          giftRecipient: t,
                                          analyticsLocations: [tF.A.CHECKPOINT, tF.A.CHECKPOINT_SIDEKICK],
                                      }));
                              },
                              "aria-label": tp.intl.string(tp.t.Ve9Ge6),
                              children: (0, r.jsx)(rc.GiftIcon, { size: "refresh_sm", color: "currentColor" }),
                          }),
                          (0, r.jsx)(rs.D, {
                              className: _()(rf.KD, { [rf.r9]: !m }),
                              onClick: async function () {
                                  if (m) {
                                      u(!0);
                                      try {
                                          (await (0, o.fr)(p, t.id),
                                              s(""),
                                              d(!0),
                                              g.O.announce(tp.intl.string(tp.t.fjcCk5), "polite"));
                                      } catch {
                                          (0, n.P0)({ text: tp.intl.string(tp.t.fEptJP), variant: "critical" });
                                      } finally {
                                          u(!1);
                                      }
                                  }
                              },
                              "aria-disabled": !m,
                              "aria-label": tp.intl.string(tp.t.oeb1vg),
                              children: (0, r.jsx)(rd.SendMessageIcon, { size: "refresh_sm", color: "currentColor" }),
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
var rE = a(9767);
function rj(e) {
    let { games: t } = e,
        a = Math.round(t?.totalDaysPlayed ?? 0),
        i = (0, Z.bD)(t?.totalDaysPlayedPercentile);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: rE.dJ,
                children: [
                    (0, r.jsx)(ij, { icon: av.CalendarIcon, children: tp.intl.string(tb.default["4N5p4D"]) }),
                    (0, r.jsx)(iV, { value: a }),
                ],
            }),
            (0, r.jsx)(iv, {
                children:
                    null != i
                        ? tp.intl.format(tb.default["4FXB/m"], {
                              percent: i,
                              percentHook: (e, t) => (0, r.jsx)(iG, { children: e }, t),
                          })
                        : tp.intl.format(tb.default.iCKjh6, { numDays: a }),
            }),
        ],
    });
}
function rS(e) {
    let { numUsersPlayedEveryDay: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: rE.dJ,
                children: [
                    (0, r.jsx)(ij, { icon: av.CalendarIcon, children: tp.intl.string(tb.default["dx4+NI"]) }),
                    (0, r.jsx)(iY, { value: t }),
                ],
            }),
            (0, r.jsx)(iv, { children: tp.intl.string(tb.default["7nfXWu"]) }),
        ],
    });
}
function rC() {
    let e = (0, x.bG)([u.A], () => u.A.stats?.games),
        t = (0, x.bG)([u.A], () => (0, Z.uO)(u.A.stats)),
        a = (0, x.bG)([u.A], () => u.A.globalStats?.games?.numUsersPlayedEveryDay),
        i = !t && null != a;
    return (0, r.jsx)(ir, {
        children: (0, r.jsxs)("div", {
            className: rE.kL,
            children: [
                (0, r.jsx)(e4, {
                    animatedSrc:
                        "https://cdn.discordapp.com/assets/content/e3289e9a0a7faf4db23c3fefa390126fc64a09120fdb701f9dea833dddf671ef.png",
                    staticSrc:
                        "https://cdn.discordapp.com/assets/content/312abde9b19fcf85150d507de3f33096992506459b895ab3ea8d92c8f1e04a28.png",
                    className: rE.HW,
                }),
                (0, r.jsx)("div", {
                    className: rE.C,
                    children: i ? (0, r.jsx)(rS, { numUsersPlayedEveryDay: a }) : (0, r.jsx)(rj, { games: e }),
                }),
            ],
        }),
    });
}
var rN = a(95362),
    rT = a(828062);
function rR(e) {
    let { children: t } = e;
    return (0, r.jsx)(to, { variant: "display-lg", className: rT.V, children: t });
}
function rO(e) {
    let { children: t } = e;
    return (0, r.jsx)(tu, { variant: "display-lg", className: rT.V, children: t });
}
var rM = a(109112),
    ry = a(311043),
    rL = a(883053);
function rk(e) {
    let { rank: t, className: a } = e;
    return (0, r.jsxs)(tf, { className: _()(rL.T, a), children: ["#", t] });
}
var rD = a(770178),
    rP = a(102189);
let rU = { fireOnMount: !0, fireOnDepsChange: !0 };
function rG(e) {
    let { text: t, textRef: a, children: i } = e,
        n = (function (e, t) {
            let [a, i] = b.useState(!1),
                r = b.useCallback((e) => {
                    let { target: t } = e;
                    i(t.scrollWidth > t.clientWidth);
                }, []);
            return ((0, rD.g)(e, r, [t], rU), a);
        })(a, t);
    return (0, r.jsx)(aB.m, {
        text: t,
        position: "bottom",
        anchorRef: a,
        shouldShow: n,
        ariaHidden: !0,
        children: i({ tabIndex: n ? 0 : void 0, className: rP.Y }),
    });
}
var rH = a(331144);
let rF = {
        viewBox: `0 0 ${ad.width} ${ad.height}`,
        outline:
            "M-2 -2L183.811 -2L194 9.029L194 253L8.24 253L-2 242.84ZM0 242.007L9.064 251L192 251L192 9.811L182.936 0L0 0ZM-2 -2L182 -2L182 242L-2 242ZM0 240L180 240L180 0L0 0Z",
        corner: "M179.582 239.13L192.002 251.508",
    },
    rK = {
        viewBox: `0 0 ${al.width} ${al.height}`,
        outline:
            "M-2 -2L221.452 -2L233.503 11.103L233.503 306.01L10.103 306.01L-2 293.947ZM0 293.117L10.929 304.01L231.503 304.01L231.503 11.883L220.574 0L0 0ZM-2 -2L222 -2L222 295L-2 295ZM0 293L220 293L220 0L0 0Z",
        corner: "M219.582 291.133L232.002 303.511",
        stripes:
            "M10.93 291.133l13.91 13.863M20.863 291.133l13.91 13.863M30.801 291.133l13.91 13.863M40.738 291.133l13.91 13.863M50.672 291.133l13.91 13.863M60.609 291.133l13.91 13.863M70.543 291.133l13.91 13.863M80.481 291.133l13.91 13.863M90.414 291.133l13.91 13.863M100.352 291.133l13.91 13.863M110.285 291.133l13.91 13.863M120.223 291.133l13.91 13.863M130.16 291.133l13.91 13.863M140.094 291.133l13.91 13.863M150.031 291.133l13.91 13.863M159.965 291.133l13.91 13.863M169.902 291.133l13.91 13.863M179.836 291.133l13.91 13.863M189.773 291.133l13.91 13.863M199.707 291.133l13.91 13.863M209.645 291.133l13.91 13.863M219.582 13.867l12.42 12.378M219.582 23.766l12.42 12.378M219.582 33.672l12.42 12.378M219.582 43.57l12.42 12.378M219.582 53.477l12.42 12.378M219.582 63.375l12.42 12.378M219.582 73.281l12.42 12.378M219.582 83.18l12.42 12.378M219.582 93.086l12.42 12.378M219.582 102.984l12.42 12.378M219.582 112.891l12.42 12.378M219.582 122.789l12.42 12.378M219.582 132.695l12.42 12.378M219.582 142.594l12.42 12.378M219.582 152.5l12.42 12.378M219.582 162.406l12.42 12.378M219.582 172.305l12.42 12.378M219.582 182.211l12.42 12.378M219.582 192.109l12.42 12.378M219.582 202.016l12.42 12.378M219.582 211.914l12.42 12.378M219.582 221.82l12.42 12.378M219.582 231.719l12.42 12.378M219.582 241.625l12.42 12.378M219.582 251.523l12.42 12.378M219.582 261.43l12.42 12.378M219.582 271.328l12.42 12.378M219.582 281.234l12.42 12.378",
    };
function rB(e) {
    let { paths: t, className: a, children: i } = e;
    return (0, r.jsxs)("div", {
        className: _()(rH.aP, a),
        children: [
            (0, r.jsxs)("svg", {
                className: rH.qd,
                viewBox: t.viewBox,
                preserveAspectRatio: "none",
                "aria-hidden": !0,
                children: [
                    null != t.stripes && (0, r.jsx)("path", { d: t.stripes, className: rH.RY }),
                    (0, r.jsx)("path", { d: t.corner, className: rH.WO }),
                ],
            }),
            i,
            (0, r.jsx)("svg", {
                className: rH.qd,
                viewBox: t.viewBox,
                preserveAspectRatio: "none",
                "aria-hidden": !0,
                children: (0, r.jsx)("path", { d: t.outline, className: rH.rj }),
            }),
        ],
    });
}
function rz(e) {
    return (0, r.jsx)(rB, { ...e, paths: rF });
}
function rV(e) {
    return (0, r.jsx)(rB, { ...e, paths: rK });
}
var rW = a(497357);
function rq(e) {
    let {
            game: { id: t, name: a, coverImageHash: i },
            rank: n,
            label: s,
            frame: c,
            style: d,
            accessibilityLabel: l,
            className: o,
            textRef: u,
            lineClamp: h,
            ...f
        } = e,
        b = (0, x.bG)(
            [ry.A],
            () =>
                ry.A.getGame(t)?.getCoverURL(300) ??
                ru.Ay.getApplicationIconURL({ id: t, icon: i, size: 300, keepAspectRatio: !0, fallbackAvatar: !1 }),
        );
    return (0, r.jsxs)("div", {
        ...f,
        role: "listitem",
        className: _()(rW.LO, o),
        style: d,
        children: [
            (0, r.jsx)("div", {
                className: rW.Tn,
                "aria-hidden": null != l,
                children: (0, r.jsxs)(c, {
                    className: rW.LG,
                    children: [
                        null != b
                            ? (0, r.jsx)("img", { src: b, alt: "", className: rW.Qw })
                            : (0, r.jsx)("div", {
                                  className: _()(rW.Qw, rW.uj),
                                  children: (0, r.jsx)(rM.UnknownGameIcon, { size: "lg" }),
                              }),
                        null != n && (0, r.jsx)(rk, { rank: n, className: rW.Tm }),
                    ],
                }),
            }),
            (0, r.jsxs)("div", {
                className: rW.zH,
                "aria-hidden": null != l,
                children: [
                    (0, r.jsx)(to, {
                        ref: u,
                        variant: "heading-xl/medium",
                        className: rW.UU,
                        lineClamp: h,
                        children: a,
                    }),
                    (0, r.jsx)(to, { variant: "mono-md/bold", className: rW.Pf, children: s }),
                ],
            }),
            null != l && (0, r.jsx)(A.A, { children: l }),
        ],
    });
}
function rY(e) {
    let t = b.useRef(null);
    return (0, r.jsx)(rG, {
        text: e.game.name,
        textRef: t,
        children: (a) => {
            let { tabIndex: i, className: n } = a;
            return (0, r.jsx)(rq, { ...e, className: _()(e.className, n), tabIndex: i, textRef: t, lineClamp: 1 });
        },
    });
}
function rZ(e, t, a) {
    return tp.intl.formatToPlainString(tb.default.mqdLhl, { gameName: e.name, rank: t, numSessions: a });
}
function rX(e) {
    let { numSessions: t, ...a } = e,
        i = Math.round(t);
    return (0, r.jsx)(rY, { ...a, label: i, frame: rz, style: au, accessibilityLabel: rZ(a.game, a.rank, i) });
}
function rQ(e) {
    let { numSessions: t, ...a } = e,
        i = Math.round(t);
    return (0, r.jsx)(rY, { ...a, rank: 1, label: i, frame: rV, style: ah, accessibilityLabel: rZ(a.game, 1, i) });
}
function rJ(e) {
    return (0, r.jsx)(rq, { ...e, frame: rz, style: au, className: rW.Ku });
}
var r$ = a(842807);
let r0 = [];
function r1(e) {
    let { gameStats: t } = e,
        a = Math.round(t?.totalGamesPlayed ?? 0),
        i = (0, Z.bD)(t?.totalGamesPlayedPercentile),
        n = t?.games ?? r0;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: r$.wx,
                children: [
                    (0, r.jsxs)("div", {
                        className: r$.dJ,
                        children: [
                            (0, r.jsx)(ij, {
                                icon: aI.GameControllerIcon,
                                children: tp.intl.string(tb.default.HM2fjf),
                            }),
                            (0, r.jsx)(iV, { value: a, className: r$.ai }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: r$.h_,
                        children: (0, r.jsx)(iv, {
                            children:
                                null != i
                                    ? tp.intl.format(tb.default["hc0/yJ"], {
                                          percent: i,
                                          percentHook: (e, t) => (0, r.jsx)(iG, { children: e }, t),
                                      })
                                    : tp.intl.format(tb.default.aJMJ6b, { numGames: a }),
                        }),
                    }),
                ],
            }),
            (0, r.jsx)(rN.Ip, {
                orientation: "horizontal",
                scrollbarGutter: !1,
                fade: !0,
                className: r$.ag,
                role: "list",
                children: n.map((e, t) => {
                    let { game: a, numSessions: i } = e;
                    return 0 === t
                        ? (0, r.jsx)(rQ, { game: a, numSessions: i }, a.id)
                        : (0, r.jsx)(rX, { game: a, rank: t + 1, numSessions: i }, a.id);
                }),
            }),
        ],
    });
}
function r2(e) {
    let { gameStats: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: _()(r$.wx, r$.l7),
                children: [
                    (0, r.jsxs)("div", {
                        className: r$.dJ,
                        children: [
                            (0, r.jsx)(it, { className: r$.gi }),
                            (0, r.jsx)(rO, { children: tp.intl.string(tb.default.qbCgI7) }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: r$.h_,
                        children: (0, r.jsx)(iv, { children: tp.intl.string(tb.default["0oDeiM"]) }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: _()(r$.ag, r$.Zs),
                role: "list",
                children: X.Jb.map((e) => {
                    let { list: a, label: i } = e,
                        n = t[a][0];
                    return null != n ? (0, r.jsx)(rJ, { game: n, label: tp.intl.string(i) }, a) : null;
                }),
            }),
        ],
    });
}
function r3() {
    let e = (0, x.bG)([u.A], () => u.A.stats?.games),
        t = (0, x.bG)([u.A], () => (0, Z.IH)(u.A.stats)),
        a = (0, x.bG)([u.A], () => u.A.globalStats?.games),
        i = !t && null != a;
    return (0, r.jsx)(ir, {
        children: (0, r.jsx)("div", {
            className: _()(r$.kL, { [r$.TF]: i }),
            children: i ? (0, r.jsx)(r2, { gameStats: a }) : (0, r.jsx)(r1, { gameStats: e }),
        }),
    });
}
var r8 = a(167662);
function r7(e) {
    let { messages: t } = e,
        a = Math.round(t?.numMessagesSent ?? 0),
        i = (0, Z.bD)(t?.numMessagesSentPercentile);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: r8.dJ,
                children: [
                    (0, r.jsx)(ij, { icon: aj.ChatIcon, children: tp.intl.string(aS.default.wWKySP) }),
                    (0, r.jsx)(iV, { value: a }),
                ],
            }),
            (0, r.jsx)(iv, {
                children:
                    null != i
                        ? tp.intl.format(tb.default.TOMBAW, {
                              percent: i,
                              percentHook: (e, t) => (0, r.jsx)(iG, { children: e }, t),
                          })
                        : tp.intl.format(tb.default.cYCqz8, { numMessages: a }),
            }),
        ],
    });
}
function r6(e) {
    let { numWordsSent: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: r8.dJ,
                children: [
                    (0, r.jsx)(ij, { icon: aj.ChatIcon, children: tp.intl.string(tb.default["2BuyVC"]) }),
                    (0, r.jsx)(iY, { value: t }),
                ],
            }),
            (0, r.jsx)(iv, {
                children: tp.intl.format(tb.default.bAxEs2, {
                    numWords: (0, Z.wj)(t),
                    numCopies: (0, Z.wj)((0, Z.yQ)(t)),
                }),
            }),
        ],
    });
}
function r9() {
    let e = (0, x.bG)([u.A], () => u.A.stats?.messages),
        t = (0, x.bG)([u.A], () => (0, Z.nb)(u.A.stats)),
        a = (0, x.bG)([u.A], () => u.A.globalStats?.messages?.numWordsSent),
        i = !t && null != a;
    return (0, r.jsx)(ir, {
        children: (0, r.jsxs)("div", {
            className: r8.kL,
            children: [
                (0, r.jsx)(e4, {
                    animatedSrc:
                        "https://cdn.discordapp.com/assets/content/d2d8036bb6a32967893421f9956b9e8ed30abde474f68c1a34e824205549c5a1.png",
                    staticSrc:
                        "https://cdn.discordapp.com/assets/content/1dfd8684180df4216b23f0a61617250be8fcc12bc1970ac259892f34fbdb836d.png",
                    className: r8.HW,
                }),
                (0, r.jsx)("div", {
                    className: r8.C,
                    children: i ? (0, r.jsx)(r6, { numWordsSent: a }) : (0, r.jsx)(r7, { messages: e }),
                }),
            ],
        }),
    });
}
var r5 = a(682163),
    r4 = a(224865);
let ne = r5.iu[r5.Ay.Sizes.XLARGE];
function nt(e) {
    let { guild: t, size: a } = e;
    return null == t.icon && a < 48
        ? (0, r.jsx)("div", {
              className: _()(r4.K, r4.J),
              style: { width: a, height: a },
              "aria-hidden": !0,
              children: (0, r.jsx)(tc.E, { variant: "body-md/medium", children: (0, Z.oW)(t.name) }),
          })
        : (0, r.jsx)(r5.Ay, {
              guild: t,
              size: r5.Ay.Sizes.XLARGE,
              iconSize: a,
              textScale: a / ne,
              className: r4.K,
              style: { width: a, height: a, borderRadius: 0 },
              "aria-hidden": !0,
          });
}
var na = a(140645);
function ni(e) {
    let { numVoiceMinutes: t, numMessagesSent: a } = e,
        i = Math.round(t),
        n = Math.round(a);
    return (0, r.jsxs)("div", {
        className: na.M1,
        children: [
            (0, r.jsxs)("div", {
                className: na.dJ,
                "aria-hidden": !0,
                children: [
                    (0, r.jsx)(aR.MicrophoneIcon, { size: "md", color: "currentColor" }),
                    (0, r.jsx)(to, { variant: "mono-md/bold", className: na.Qq, children: i }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: na.dJ,
                "aria-hidden": !0,
                children: [
                    (0, r.jsx)(aj.ChatIcon, { size: "md", color: "currentColor" }),
                    (0, r.jsx)(to, { variant: "mono-md/bold", className: na.Qq, children: n }),
                ],
            }),
            (0, r.jsx)(A.A, {
                children: tp.intl.formatToPlainString(tb.default["OQjeY/"], { numMinutes: i, numMessages: n }),
            }),
        ],
    });
}
var nr = a(972106);
let nn = [];
function ns(e) {
    let { guild: t, rank: a, iconSize: i = 100, children: n } = e,
        s = b.useRef(null);
    return (0, r.jsx)(rG, {
        text: t.name,
        textRef: s,
        children: (e) => {
            let { tabIndex: c, className: d } = e;
            return (0, r.jsxs)("li", {
                className: _()(nr.w_, d),
                tabIndex: c,
                children: [
                    (0, r.jsxs)("div", {
                        className: nr.jj,
                        children: [
                            (0, r.jsx)(rk, { rank: a }),
                            (0, r.jsxs)("div", {
                                className: nr.gI,
                                children: [
                                    (0, r.jsx)(to, {
                                        ref: s,
                                        variant: "heading-xxl/medium",
                                        className: nr.J5,
                                        lineClamp: 1,
                                        children: t.name,
                                    }),
                                    n,
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)(nt, { guild: t, size: i }),
                ],
            });
        },
    });
}
function nc(e) {
    let { guild: t, numVoiceMinutes: a, numMessagesSent: i } = e;
    return (0, r.jsx)(ns, {
        guild: t,
        rank: 1,
        iconSize: 140,
        children: (0, r.jsx)(ni, { numVoiceMinutes: a, numMessagesSent: i }),
    });
}
function nd(e) {
    let { guilds: t } = e,
        a = ts();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: nr.wx,
                children: [
                    (0, r.jsxs)(iw, {
                        ref: a,
                        className: nr.R_,
                        accessibilityLabel: tp.intl.string(tb.default.FroqRf),
                        children: [
                            (0, r.jsx)(iE, { icon: aN.ServerIcon, children: tp.intl.string(tb.default.Mb5E6r) }),
                            (0, r.jsx)(rR, { children: tp.intl.string(aS.default.F0fkrh) }),
                        ],
                    }),
                    (0, r.jsx)(iv, { children: tp.intl.string(tb.default.IN1DaS) }),
                ],
            }),
            (0, r.jsx)("ul", {
                className: nr.Pl,
                children: t.map((e, t) => {
                    let { guild: a, numMessagesSent: i, numVoiceMinutes: n } = e;
                    return 0 === t
                        ? (0, r.jsx)(nc, { guild: a, numMessagesSent: i ?? 0, numVoiceMinutes: n ?? 0 }, a.id)
                        : (0, r.jsx)(ns, { guild: a, rank: t + 1 }, a.id);
                }),
            }),
        ],
    });
}
function nl(e) {
    let { guilds: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: nr.wx,
                children: [
                    (0, r.jsxs)("div", {
                        className: nr.R_,
                        children: [
                            (0, r.jsx)(it, { className: nr.gi }),
                            (0, r.jsx)(rO, { children: tp.intl.string(aS.default.F0fkrh) }),
                        ],
                    }),
                    (0, r.jsx)(iv, { children: tp.intl.string(tb.default.bhnqop) }),
                ],
            }),
            (0, r.jsx)("ul", {
                className: nr.Pl,
                children: t.map((e, t) => (0, r.jsx)(ns, { guild: e, rank: t + 1 }, e.id)),
            }),
        ],
    });
}
function no() {
    let e = (0, x.bG)([u.A], () => u.A.stats?.guilds?.guilds ?? nn),
        t = (0, x.bG)([u.A], () => u.A.globalStats?.guilds?.guildsByMembers),
        a = 0 === e.length && null != t;
    return (0, r.jsx)(ir, {
        children: (0, r.jsx)("div", {
            className: nr.kL,
            children: a ? (0, r.jsx)(nl, { guilds: t }) : (0, r.jsx)(nd, { guilds: e }),
        }),
    });
}
var nu = a(155094);
function nh(e) {
    let { icon: t, title: a, description: i } = e;
    return (0, r.jsx)(ir, {
        children: (0, r.jsxs)("div", {
            className: nu.Q,
            children: [(0, r.jsx)(ij, { icon: t, children: a }), (0, r.jsx)(iv, { children: i })],
        }),
    });
}
var nf = a(7584),
    nb = a(772210),
    np = a(33293),
    n_ = a(498137),
    nm = a(192339),
    nx = a(834109),
    ng = a(48763);
function nA(e) {
    let { character: t } = e,
        a = (0, nb.A)(t, 448),
        i = (0, I.o)(t);
    return (0, r.jsxs)(n_.A, {
        cardColorPalette: i,
        size: ng.W.LG,
        isLoading: "loading" === a.status,
        children: [
            (0, r.jsx)(nm.A, {}),
            (0, r.jsx)(nx.A, { variant: "full" }),
            (0, r.jsx)(np.A, { character: t, images: a }),
        ],
    });
}
var nv = a(58410);
function nw() {
    let e = (0, x.bG)([u.A], () => u.A.stats),
        t = (0, x.bG)([u.A], () => u.A.character),
        a = ts();
    return (0, r.jsx)(ir, {
        children: (0, r.jsxs)("div", {
            className: nv.z,
            children: [
                null != t ? (0, r.jsx)(nA, { character: t }) : null,
                (0, r.jsxs)("div", {
                    className: _()(nv.zH, null === e && nv.gz),
                    children: [
                        (0, r.jsxs)(iw, {
                            ref: a,
                            className: nv.R_,
                            accessibilityLabel: tp.intl.string(tb.default.ASrTAc),
                            children: [
                                (0, r.jsx)(iE, {
                                    icon: iu.ExperimentalCheckpointIcon,
                                    children: tp.intl.string(aS.default.ir6nEQ),
                                }),
                                (0, r.jsx)(to, {
                                    variant: "display-lg",
                                    className: nv.Vy,
                                    children: tp.intl.string(aS.default.y4M1na),
                                }),
                            ],
                        }),
                        null === e ? (0, r.jsx)(nI, { character: t }) : (0, r.jsx)(nE, { stats: e }),
                    ],
                }),
            ],
        }),
    });
}
function nI(e) {
    let { character: t } = e,
        { primaryBackgroundColor: a } = (0, I.j)((0, I.o)(t));
    return (0, r.jsx)(to, {
        tag: "p",
        variant: "heading-xl/medium",
        style: { color: a },
        children: tp.intl.string(tb.default["GL+yOs"]),
    });
}
function nE(e) {
    let { stats: t } = e,
        a = t.guilds?.guilds[0],
        i = t.emojis?.emojis[0],
        n = t.games?.games[0]?.game,
        s =
            null != n
                ? ru.Ay.getApplicationIconURL({ id: n.id, icon: n.iconHash, size: 40, fallbackAvatar: !1 })
                : void 0;
    return (0, r.jsxs)("div", {
        className: nv.M1,
        children: [
            (0, r.jsx)(nj, { label: tp.intl.string(tb.default.MSrV9z), value: t.voice?.totalVoiceMinutes }),
            (0, r.jsx)(nj, { label: tp.intl.string(tb.default.hhh11L), value: t.messages?.numMessagesSent }),
            (0, r.jsx)(nj, { label: tp.intl.string(tb.default["f5S+pt"]), value: a?.numDaysInteracted }),
            (0, r.jsx)(nS, {
                label: tp.intl.string(aS.default["8XPMJj"]),
                icon: null != a ? (0, r.jsx)(nt, { guild: a.guild, size: 40 }) : (0, r.jsx)(nC, {}),
                name: null != a ? a.guild.name : tp.intl.string(tp.t.PoWNfe),
            }),
            (0, r.jsx)(nj, { label: tp.intl.string(tb.default.xVSlv3), value: t.emojis?.numEmojisSent }),
            (0, r.jsx)(nS, {
                label: tp.intl.string(aS.default["3sARW7"]),
                icon:
                    null != i
                        ? (0, r.jsx)(iP.A, {
                              emojiId: i.id,
                              emojiName: null == i.id ? i.name : void 0,
                              animated: i.animated,
                              alt: "",
                              className: nv.Kk,
                          })
                        : (0, r.jsx)(nC, {}),
                name:
                    null == i
                        ? tp.intl.string(tp.t.PoWNfe)
                        : null == i.id
                          ? nf.Ay.convertSurrogateToName(i.name)
                          : `:${i.name}:`,
            }),
            (0, r.jsx)(nj, { label: tp.intl.string(tb.default.y2Y1DD), value: t.games?.totalDaysPlayed }),
            (0, r.jsx)(nS, {
                label: tp.intl.string(aS.default.RbT4Zq),
                icon:
                    null != s
                        ? (0, r.jsx)("img", { src: s, alt: "", className: _()(nv.Kk, nv.Gt) })
                        : null == n
                          ? (0, r.jsx)(nC, {})
                          : (0, r.jsx)("div", {
                                className: _()(nv.Kk, nv.Gc),
                                children: (0, r.jsx)(rM.UnknownGameIcon, { size: "md", color: "currentColor" }),
                            }),
                name: null != n ? n.name : tp.intl.string(tp.t.PoWNfe),
            }),
        ],
    });
}
function nj(e) {
    let { label: t, value: a } = e;
    return (0, r.jsxs)("div", {
        className: nv.dJ,
        children: [
            (0, r.jsx)(to, { variant: "heading-md/semibold", children: t }),
            (0, r.jsx)(to, {
                variant: "heading-xxl/medium",
                className: nv.wk,
                children: Math.round(a ?? 0).toLocaleString(tp.intl.currentLocale),
            }),
        ],
    });
}
function nS(e) {
    let { label: t, icon: a, name: i } = e,
        n = b.useRef(null);
    return (0, r.jsx)(rG, {
        text: i,
        textRef: n,
        children: (e) => {
            let { tabIndex: s, className: c } = e;
            return (0, r.jsxs)("div", {
                className: _()(nv.dJ, nv.u4, c),
                tabIndex: s,
                children: [
                    (0, r.jsx)(to, { variant: "heading-md/semibold", children: t }),
                    (0, r.jsxs)("div", {
                        className: nv.AS,
                        children: [
                            a,
                            (0, r.jsx)(to, {
                                ref: n,
                                variant: "heading-xl/medium",
                                lineClamp: 1,
                                className: nv.TJ,
                                children: i,
                            }),
                        ],
                    }),
                ],
            });
        },
    });
}
function nC() {
    return (0, r.jsx)("div", {
        className: _()(nv.Kk, nv.Gc, nv.Wn),
        children: (0, r.jsx)(rM.UnknownGameIcon, { size: "lg", color: "currentColor" }),
    });
}
var nN = a(651946);
function nT() {
    let e = (0, x.bG)([u.A], () => u.A.stats?.guilds?.guilds[0]),
        t = Math.round(e?.numDaysInteracted ?? 0),
        a = (0, Z.bD)(e?.numDaysInteractedPercentile),
        i = b.useRef(null);
    return (0, r.jsx)(ir, {
        children: (0, r.jsxs)("div", {
            className: nN.kL,
            children: [
                (0, r.jsxs)("div", {
                    className: nN.wx,
                    children: [
                        (0, r.jsxs)("div", {
                            className: nN.R_,
                            children: [
                                (0, r.jsx)(ij, { icon: aN.ServerIcon, children: tp.intl.string(tb.default["M+a+t1"]) }),
                                (0, r.jsx)(iV, { value: t }),
                            ],
                        }),
                        (0, r.jsx)(iv, {
                            children:
                                null != a
                                    ? tp.intl.format(tb.default.sIDTV1, {
                                          numDays: t,
                                          percent: a,
                                          percentHook: (e, t) => (0, r.jsx)(iG, { children: e }, t),
                                      })
                                    : tp.intl.format(tb.default.nLCUQ4, { numDays: t }),
                        }),
                    ],
                }),
                null != e &&
                    (0, r.jsx)("div", {
                        className: nN.bU,
                        children: (0, r.jsx)(rG, {
                            text: e.guild.name,
                            textRef: i,
                            children: (t) => {
                                let { tabIndex: a, className: n } = t;
                                return (0, r.jsxs)("div", {
                                    className: _()(nN.Nr, n),
                                    style: { width: 360 },
                                    tabIndex: a,
                                    children: [
                                        (0, r.jsx)(nt, { guild: e.guild, size: 360 }),
                                        (0, r.jsxs)("div", {
                                            className: nN.zH,
                                            children: [
                                                (0, r.jsx)(to, {
                                                    ref: i,
                                                    variant: "heading-xxl/medium",
                                                    className: nN.J5,
                                                    lineClamp: 1,
                                                    children: e.guild.name,
                                                }),
                                                (0, r.jsx)(ni, {
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
var nR = a(270704);
function nO(e) {
    let { voice: t } = e,
        a = Math.round(t?.totalVoiceMinutes ?? 0),
        i = (0, Z.bD)(t?.totalVoiceMinutesPercentile);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: nR.dJ,
                children: [
                    (0, r.jsx)(ij, { icon: aR.MicrophoneIcon, children: tp.intl.string(tb.default["3/T12E"]) }),
                    (0, r.jsx)(iV, { value: a, alignment: "center" }),
                ],
            }),
            (0, r.jsx)(iv, {
                children:
                    null != i
                        ? tp.intl.format(tb.default.RqXsIs, {
                              percent: i,
                              percentHook: (e, t) => (0, r.jsx)(iG, { children: e }, t),
                          })
                        : tp.intl.format(tb.default.Y3poDW, { numMinutes: a }),
            }),
        ],
    });
}
function nM(e) {
    let { peakHour: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: nR.dJ,
                children: [
                    (0, r.jsx)(ij, { icon: aR.MicrophoneIcon, children: tp.intl.string(tb.default.ZCwB8J) }),
                    (0, r.jsx)(iY, { value: t }),
                ],
            }),
            (0, r.jsx)(iv, { children: tp.intl.string(tb.default.huiTne) }),
        ],
    });
}
function ny() {
    let e = (0, x.bG)([u.A], () => u.A.stats?.voice),
        t = (0, x.bG)([u.A], () => (0, Z.Kr)(u.A.stats)),
        a = (0, x.bG)([u.A], () => u.A.globalStats?.voice?.peakHourUtc),
        i = (0, Z.XF)(a)?.value,
        n = !t && null != i;
    return (0, r.jsxs)(ir, {
        children: [
            (0, r.jsx)(e4, {
                animatedSrc:
                    "https://cdn.discordapp.com/assets/content/04746dc04eab575d0168935af2b1b3f97e2e00439f84bd0f0474276e0c5a81dc.png",
                staticSrc:
                    "https://cdn.discordapp.com/assets/content/c4c2d6b631bff3da4e4bb9afffc8f89bc9fb6f76a2fcd824f8a7af83eb7f1e6b.png",
                className: nR.Tp,
            }),
            (0, r.jsx)("div", {
                className: nR.Qs,
                children: n ? (0, r.jsx)(nM, { peakHour: i }) : (0, r.jsx)(nO, { voice: e }),
            }),
        ],
    });
}
function nL(e) {
    let { route: t, onNextStep: a, onPreviousStep: i } = e;
    if (t === S.gr.HOME) return (0, r.jsx)(iD, { onStart: a });
    if (t === S.gr.INTRODUCTION) return (0, r.jsx)(id, {});
    let { statsScreen: n } = (0, S.UG)(t);
    switch (n) {
        case S.oI.VOICE_INTRO:
            return (0, r.jsx)(nh, {
                icon: aR.MicrophoneIcon,
                title: tp.intl.string(tb.default["/7XYsa"]),
                description: tp.intl.string(tb.default["X8/G/o"]),
            });
        case S.oI.VOICE:
            return (0, r.jsx)(ny, {});
        case S.oI.MESSAGES_INTRO:
            return (0, r.jsx)(nh, {
                icon: aj.ChatIcon,
                title: tp.intl.string(tb.default["2BuyVC"]),
                description: tp.intl.string(tb.default["kF+Y3a"]),
            });
        case S.oI.MESSAGES:
            return (0, r.jsx)(r9, {});
        case S.oI.SERVERS_INTRO:
            return (0, r.jsx)(nh, {
                icon: aN.ServerIcon,
                title: tp.intl.string(aS.default.F0fkrh),
                description: tp.intl.string(tb.default.Xg82Gy),
            });
        case S.oI.SERVERS:
            return (0, r.jsx)(no, {});
        case S.oI.TOP_SERVER:
            return (0, r.jsx)(nT, {});
        case S.oI.EMOJI_INTRO:
            return (0, r.jsx)(nh, {
                icon: tn.EmojiSlightlySmilingFaceIcon,
                title: tp.intl.string(tb.default.ZTDCIv),
                description: tp.intl.string(tb.default.y8Sr8J),
            });
        case S.oI.EMOJI:
            return (0, r.jsx)(ra, {});
        case S.oI.GAMES_INTRO:
            return (0, r.jsx)(nh, {
                icon: aI.GameControllerIcon,
                title: tp.intl.string(tb.default.HM2fjf),
                description: tp.intl.string(tb.default.LQiFqJ),
            });
        case S.oI.GAMES:
            return (0, r.jsx)(r3, {});
        case S.oI.GAME_TIME:
            return (0, r.jsx)(rC, {});
        case S.oI.SQUAD:
        case S.oI.SIDEKICK:
            return (0, r.jsx)(rg, { route: t, onNextStep: a, onPreviousStep: i });
        case S.oI.SUMMARY:
            return (0, r.jsx)(nw, {});
        case S.oI.SHARE:
            return (0, r.jsx)(iN, {});
        default:
            return null;
    }
}
var nk = a(650809),
    nD = a(428692);
let nP = {
    [S.s9.FACE]: { icon: aR.MicrophoneIcon, label: tp.t.K3lovD },
    [S.s9.OUTFIT]: { icon: aj.ChatIcon, label: tp.t.OIgYlQ },
    [S.s9.HEADWEAR]: { icon: aN.ServerIcon, label: tp.t["7hB4kg"] },
    [S.s9.SHOES]: { icon: tn.EmojiSlightlySmilingFaceIcon, label: tp.t.sMOuuS },
    [S.s9.WEARABLE]: { icon: aI.GameControllerIcon, label: tp.t.URyqtP },
    [S.s9.AURA]: { icon: av.CalendarIcon, label: tb.default.y2Y1DD },
    [S.s9.ASSEMBLED]: { icon: rn.FriendsIcon, label: tp.t.TdEu5X },
    [S.s9.FINALIZE]: { icon: nk.PaintPaletteIcon, label: tb.default.gmMD2I },
    [S.s9.SUMMARY]: { icon: iu.ExperimentalCheckpointIcon, label: aS.default.y4M1na },
};
function nU(e) {
    let {
            step: { icon: t, label: a, route: i },
            state: n,
            disabled: s,
            blockedTraitDescriptionId: c,
            sound: d,
            onRouteClick: l,
        } = e,
        o = tp.intl.string(a),
        u = "unlocked" === n,
        {
            onPointerDown: h,
            onKeyDown: f,
            onClickWithSound: b,
        } = aJ({ source: d, onClick: () => l(i), disabled: s || !u });
    return (0, r.jsx)(aB.m, {
        text: "locked" === n ? null : o,
        ariaHidden: !0,
        children: (0, r.jsxs)(rs.D, {
            onPointerDown: u ? h : void 0,
            onKeyDown: u ? f : void 0,
            onClick: u ? b : void 0,
            tabIndex: u ? 0 : -1,
            role: "tab",
            "aria-selected": "active" === n,
            className: _()(nD.PM, { [nD.Xj]: "active" === n, [nD.CD]: u, [nD.vk]: u && !s }),
            "aria-label": o,
            "aria-disabled": "locked" === n || (u && s),
            "aria-describedby": u ? c : void 0,
            children: [
                (0, r.jsx)("div", { className: _()(nD.Om, { [nD.hZ]: "locked" !== n }) }),
                (0, r.jsx)(t, { size: "xs", color: "currentColor", className: nD.Kk }),
            ],
        }),
    });
}
function nG(e) {
    let {
            flow: t,
            stats: a,
            activeRoute: i,
            isRouteBlocked: n,
            isCharacterExiting: s,
            blockedTraitDescriptionId: c,
            onRouteClick: d,
        } = e,
        l = (function (e, t) {
            let a = [];
            for (let i of (0, j.p5)({ flow: e, stats: t })) {
                let { characterStage: e } = (0, S.UG)(i),
                    t = nP[e];
                null != t && a.at(-1)?.stage !== e && a.push({ ...t, stage: e, route: i });
            }
            return a;
        })(t, a),
        { characterStage: o } = (0, S.UG)(i),
        h = l.findIndex((e) => {
            let { stage: t } = e;
            return t === o;
        }),
        [f, p] = b.useState(h);
    h > f && p(h);
    let _ = (0, x.bG)([u.A], () => u.A.isSaving);
    return -1 === h
        ? null
        : (0, r.jsx)("div", {
              className: nD.qB,
              role: "tablist",
              "aria-label": tp.intl.string(tb.default.DyMw85),
              children: l.map((e, t) =>
                  (0, r.jsx)(
                      nU,
                      {
                          step: e,
                          state: t === h ? "active" : t <= f ? "unlocked" : "locked",
                          disabled: _ || n || s,
                          blockedTraitDescriptionId: c,
                          sound: t < h ? aH : aF,
                          onRouteClick: d,
                      },
                      e.stage,
                  ),
              ),
          });
}
var nH = a(517782);
function nF() {
    let e = b.useId(),
        t = b.useRef(null);
    return (b.useEffect(() => (g.O.moveTo?.(e, t.current), () => g.O.remove?.(e)), [e]), (0, r.jsx)(A.A, { ref: t }));
}
function nK(e) {
    let t,
        a,
        { onClose: i } = e;
    ((t = (0, x.yK)([u.A], () => {
        let { stats: e, globalStats: t } = u.A,
            a = t?.games;
        if ((0, Z.IH)(e) || null == a)
            return (
                e?.games?.games.map((e) => {
                    let { game: t } = e;
                    return t.id;
                }) ?? []
            );
        let i = [];
        return (
            X.Jb.forEach((e) => {
                let { list: t } = e,
                    r = a[t][0];
                null != r && i.push(r.id);
            }),
            i
        );
    })),
        b.useEffect(() => {
            (0, Y.E)(t);
        }, [t]));
    let n = (0, x.bG)([u.A], () => (0, j.bL)(u.A.stats)),
        [s, c] = (function (e) {
            let [t, a] = b.useState(() =>
                (function (e) {
                    let { character: t, progress: a, stats: i, isCharacterCreatorEnabled: r } = u.A,
                        n = null != t ? S.s9.SUMMARY : a?.stage;
                    return (
                        (0, j.p5)({ flow: e, stats: i, character: t, isCharacterCreatorEnabled: r }).find(
                            (e) => (0, S.UG)(e).characterStage === n,
                        ) ?? S.gr.HOME
                    );
                })(e),
            );
            return (
                b.useEffect(() => {
                    let { characterStage: e } = (0, S.UG)(t);
                    (0, o.l4)(e);
                }, [t]),
                [t, a]
            );
        })(n),
        l = (function (e) {
            let t = (0, x.bG)([K.Ay], () => K.Ay.useReducedMotion),
                [a, i] = b.useState(e),
                [r, n] = b.useState(!1);
            if (e !== a) {
                let r = (0, S.Rq)(a),
                    s = (0, S.Rq)(e);
                (i(e), n(!t && r && s));
            }
            return (
                b.useEffect(() => {
                    if (!r) return;
                    let e = setTimeout(() => n(!1), B.pS.duration);
                    return () => clearTimeout(e);
                }, [r, e]),
                r
            );
        })(s);
    (b.useEffect(() => {
        (h.A.setStepName(s), (0, f.if)(s));
    }, [s]),
        (0, q.l0)(() => {
            (h.A.stop(), (0, f.i)(h.A.getStepName()));
        }),
        b.useEffect(() => {
            let e = !1;
            function t() {
                e = !0;
            }
            return (
                V.h.subscribe("CHECKPOINT_COMPLETE_SUCCESS", t),
                () => {
                    (V.h.unsubscribe("CHECKPOINT_COMPLETE_SUCCESS", t), e && (0, W.hs)(z.w.CHECKPOINT_COMPLETED));
                }
            );
        }, []),
        (a = (0, x.bG)([d.A], () => d.A.isFocused() && d.A.isVisible())),
        b.useEffect(() => {
            h.A.setForeground(a);
        }, [a]));
    let { characterStage: p, statsScreen: g } = (0, S.UG)(s),
        D = s === S.gr.HOME || null != g,
        P = D ? B.xk.STATS : l ? B.xk.CUSTOMIZATION_ROUTE_CHANGE : null,
        U = s === S.gr.INTRODUCTION,
        G = (0, S.Rq)(s),
        Q = (0, x.bG)([u.A], () => (u.A.fetchState === u.T.SUCCESS ? u.A.stats : void 0)),
        ee = (0, x.bG)([u.A], () => u.A.character),
        ea = b.useMemo(
            () =>
                (function (e, t) {
                    switch (e) {
                        case S.gr.SUMMARY:
                        case S.gr.SHARE:
                            let a = (0, I.o)(t),
                                { primaryBackgroundColor: i, shadowColor: r } = (0, I.j)(a);
                            return {
                                ...af,
                                "--custom-checkpoint-primary": i,
                                "--custom-checkpoint-button-border": i,
                                "--custom-checkpoint-button-shadow": r,
                                "--custom-checkpoint-background-gradient-start": i,
                            };
                        default:
                            return af;
                    }
                })(s, ee),
            [s, ee],
        ),
        er = (function () {
            let { isMuted: e, volume: t } = (0, x.cf)([u.A], () => ({ isMuted: u.A.isMuted, volume: u.A.volume })),
                a = b.useRef(new Map()),
                i = b.useRef(null),
                r = b.useCallback(() => {
                    (i.current?.(), a.current.forEach((e) => e.pause()));
                }, []);
            return (
                b.useEffect(() => ((a.current = new Map(y.map((e) => [e, new Audio(e)]))), r), [r]),
                b.useEffect(() => {
                    a.current.forEach((a) => {
                        ((a.muted = e), (a.volume = t));
                    });
                }, [e, t]),
                b.useCallback(
                    (e) => {
                        var t;
                        let n;
                        (r(),
                            (t = (e) => {
                                let t = a.current.get(e);
                                null == t || u.A.isMuted || 0 === u.A.volume || ((t.currentTime = 0), t.play());
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
        es = H(),
        ec = (0, E.k0)(s, es),
        ed = b.useId(),
        eo = null != ec ? ed : void 0,
        eu = b.useCallback(
            (e) => {
                let t = (function (e) {
                    let { previousRoute: t, route: a } = e;
                    if (t === S.gr.SIDEKICK_LEAVE && a === S.gr.SIDEKICK) return null;
                    if (t === S.gr.FINALIZE_CHARACTER && a === S.gr.SUMMARY) return [{ source: T, delayMs: 0 }];
                    let i = [];
                    return (
                        a === S.gr.INTRODUCTION
                            ? (i.push({ source: C, delayMs: 0 }),
                              i.push({ source: M, delayMs: 2500 }),
                              i.push({ source: N, delayMs: 2800 }))
                            : L(t) && k(a)
                              ? i.push({ source: R, delayMs: 0 })
                              : k(t) && L(a) && (i.push({ source: O, delayMs: 0 }), i.push({ source: M, delayMs: 0 })),
                        i
                    );
                })({ previousRoute: s, route: e });
                (null != t && er(t), c(e));
            },
            [s, er, c],
        ),
        eh = b.useCallback(
            (e) => {
                let t = (0, j.SK)({ flow: n, stats: Q, currentRoute: s, direction: e });
                if (null == t) {
                    1 === e && i();
                    return;
                }
                eu(t);
            },
            [s, n, eu, i, Q],
        ),
        ef = b.useCallback(() => eh(-1), [eh]),
        eb = b.useCallback(() => eh(1), [eh]),
        {
            isCharacterExiting: ep,
            startExit: e_,
            handleExitPlaying: em,
        } = (function (e) {
            let { onExitPlaying: t, onExitFinished: a } = e,
                i = (0, x.bG)([K.Ay], () => K.Ay.useReducedMotion),
                [r, n] = b.useState("none"),
                s = (0, F.A)(() => {
                    (n("none"), a());
                });
            b.useEffect(() => {
                if ("none" === r) return;
                let e = setTimeout(s, "beaming" === r ? 750 : 2e3);
                return () => clearTimeout(e);
            }, [r, s]);
            let c = (0, F.A)(() => {
                    i ? a() : n("loading_textures");
                }),
                d = (0, F.A)(() => {
                    n((e) => ("loading_textures" === e ? "beaming" : e));
                }),
                l = (0, F.A)(t);
            return (
                b.useEffect(() => {
                    "beaming" === r && l();
                }, [r, l]),
                { isCharacterExiting: "none" !== r, startExit: c, handleExitPlaying: d }
            );
        })({
            onExitPlaying: $(
                "https://cdn.discordapp.com/assets/content/b1606a891842fe5460194fb2b7eccef78e635523e7109b9adefad72395f32eae.mp3",
            ),
            onExitFinished: eb,
        }),
        ex = b.useCallback(() => eu((0, j.$_)({ flow: n, stats: Q })), [n, eu, Q]),
        eg = b.useCallback(
            (e) => {
                if (!u.A.isSaving && !ep) {
                    if (null != ec) return void J(ec);
                    eu(e);
                }
            },
            [ec, ep, eu],
        );
    return (0, r.jsx)(v.N, {
        theme: et.NJ.DARK,
        children: (e) =>
            (0, r.jsx)(m.Jh, {
                children: (0, r.jsxs)("div", {
                    className: _()(e, nH.kL),
                    style: ea,
                    role: "dialog",
                    "aria-modal": !0,
                    "aria-label": tp.intl.string(aS.default["CdU/PF"]),
                    children: [
                        (0, r.jsx)(nF, {}),
                        (0, r.jsxs)("div", {
                            className: nH.$s,
                            children: [
                                (0, r.jsx)(aG, {}),
                                (0, r.jsx)(en, {
                                    size: "sm",
                                    "aria-label": tp.intl.string(tp.t.cpT0Cq),
                                    onClick: i,
                                    children: (0, r.jsx)(w.XSmallIcon, { size: "xs", color: "currentColor" }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(e5, {
                            stage: ep ? S.s9.EXIT : p,
                            hiddenBy: P,
                            onExitPlaying: em,
                            className: nH.qd,
                            children:
                                U && (0, r.jsx)(nL, { route: S.gr.INTRODUCTION, onNextStep: eb, onPreviousStep: ef }),
                        }),
                        (0, r.jsx)(el, {
                            visible: D,
                            enter: B.Jl,
                            exit: B.Jl,
                            hiddenScale: 1.02,
                            keepMounted: !0,
                            className: nH.qd,
                            style: ea,
                            children: (0, r.jsx)(ei, { isVisible: D }),
                        }),
                        (0, r.jsx)(el, {
                            visible: G && !l && !ep,
                            enter: B.eu,
                            exit: B.T5,
                            className: nH.qd,
                            children: (0, r.jsx)(aM, { route: s }),
                        }),
                        (0, r.jsx)(el, {
                            visible: D,
                            enter: B.I7,
                            exit: B.jd,
                            hiddenScale: 1.02,
                            mountAfterDelay: !0,
                            className: nH.qd,
                            style: ea,
                            children: (0, r.jsx)(nL, { route: s, onNextStep: eb, onPreviousStep: ef }),
                        }),
                        (0, r.jsx)(ie, {
                            activeRoute: s,
                            blockedTrait: ec,
                            blockedTraitDescriptionId: eo,
                            isCharacterExiting: ep,
                            onBack: ef,
                            onNext: eb,
                            onCharacterSaved: e_,
                            onReplay: ex,
                        }),
                        (0, r.jsx)(tr, { activeRoute: s }),
                        (0, r.jsx)(nG, {
                            flow: n,
                            stats: Q,
                            activeRoute: s,
                            isRouteBlocked: null != ec,
                            isCharacterExiting: ep,
                            blockedTraitDescriptionId: eo,
                            onRouteClick: eg,
                        }),
                        null != ec && (0, r.jsx)(A.A, { id: ed, children: (0, E.Cz)(ec) }),
                        (0, r.jsx)(m.P, {}),
                    ],
                }),
            }),
    });
}
var nB = a(359527);
function nz() {
    if (l._.hasSubscribers(aX.jej.MODAL_CLOSE)) return (l._.dispatch(aX.jej.MODAL_CLOSE), !0);
    let e = (0, c.mU)(document.activeElement ?? document.body);
    return !!e?.hasSubscribers(aX.jej.POPOUT_CLOSE) && (e.dispatch(aX.jej.POPOUT_CLOSE), !0);
}
async function nV(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = await (0, o.nX)(t);
    return a === u.T.ERROR
        ? ((0, n.P0)({ text: tp.intl.string(tp.t.fEptJP), variant: "critical" }), !1)
        : a !== u.T.FETCHING &&
              (h.A.initialize({ isForeground: d.A.isFocused() && d.A.isVisible() }),
              (0, f.lw)(e),
              (0, s.B8)(
                  (e) => {
                      let { closeLayer: t } = e;
                      return (0, r.jsx)(nK, { onClose: t });
                  },
                  { layerKey: nB.p, onEscape: nz },
              ),
              !0);
}
