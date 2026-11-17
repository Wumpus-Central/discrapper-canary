a.d(t, { D: () => nY });
var r,
    i = a(477900),
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
        "https://cdn.discordapp.com/assets/content/aada5b40828140b41a56df82e81783cd43fd60e30ac1eb3c9f93a087b95dcf03.mp3",
    R =
        "https://cdn.discordapp.com/assets/content/04536b9e5b26d0b6e85116ce546b7d5ba97da31e7de7a1e02da262bcd5249bb0.mp3",
    O =
        "https://cdn.discordapp.com/assets/content/82d771ff521a99ea8e26239d2f2e48ae847e39575bc5bce396739b430b8a6fda.mp3",
    M = [C, N, T, R, O];
function y(e) {
    return e !== S.gr.HOME && null == (0, S.UG)(e).statsScreen;
}
function L(e) {
    return null != (0, S.UG)(e).statsScreen;
}
var k = a(127639),
    D = a(287809),
    P = a(474090),
    U = a(817379);
function G() {
    return (0, x.yK)([u.A, D.default], () => {
        let { selectedCharacterTraits: e, stats: t, character: a } = u.A,
            r = (0, P.ki)(D.default.getCurrentUser());
        return Object.values(k.V).filter((i) => {
            let n = e[i];
            return null != n && (0, U.tS)(i, n, { stats: t, hasNitro: r, savedCharacter: a });
        });
    });
}
var H = a(517846),
    F = a(73153),
    K = a(669700),
    B = a(964486),
    z = a(920495),
    V = a(407905),
    W = a(532294),
    q = a(739187);
function Y(e) {
    let t = (0, E.Cz)(e);
    null != t && ((0, q.V)(), (0, n.P0)({ text: t, variant: "critical" }));
}
var X = a(299619),
    Z = a(775602),
    Q = a(818348),
    J = a(11435);
function $(e) {
    let { isVisible: t } = e,
        a = b.useRef(null),
        r = (0, x.bG)([Z.Ay], () => Z.Ay.useReducedMotion),
        n = t && !r;
    return (
        b.useEffect(() => {
            let e = a.current;
            null != e && (n ? e.play().catch(Q.tE) : e.pause());
        }, [n]),
        b.useEffect(() => {
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
    return (0, i.jsx)("button", {
        ref: t,
        onMouseEnter: a,
        onMouseLeave: r,
        onFocus: n,
        onBlur: s,
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
    en = a(190240);
function es(e) {
    let {
            visible: t,
            enter: a,
            exit: r,
            keepMounted: n = !1,
            mountAfterDelay: s = !1,
            hiddenScale: c = 1,
            onExitComplete: d,
            className: l,
            style: o,
            children: u,
        } = e,
        h = (0, x.bG)([Z.Ay], () => Z.Ay.useReducedMotion),
        f = b.useRef(null),
        [p, m] = b.useState(t),
        [g, A] = b.useState(t),
        v = b.useRef(null),
        w = (0, er.p0)({ value: u, shouldUpdate: t }),
        I = (0, er.p0)({ value: o, shouldUpdate: t }),
        E = (0, ei.A)(() => {
            ((v.current = null), m(!1), d?.());
        }),
        j = t ? a : r,
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
    return (0, i.jsx)("div", {
        ref: f,
        className: _()(l, en.q, { [en.R]: !p }),
        style: M,
        inert: !t,
        "aria-hidden": !t,
        children: t || n ? u : w,
    });
}
var ec = a(516749),
    ed = a(399667),
    el = a(468311),
    eo = a(706121),
    eu = a(985747),
    eh = a(67915),
    ef = a(118531);
let eb = {
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
function ep(e) {
    return { name: e, url: eb[e].url };
}
let e_ = ep("tex_none"),
    em = {
        [eu.N.NONE]: 0,
        [eu.N.CAP]: 7,
        [eu.N.ELVEN_HEADPIECE]: 1,
        [eu.N.HEADPHONES]: 2,
        [eu.N.TEDDY_BEANIE]: 13,
        [eu.N.PIERCINGS]: 4,
        [eu.N.HEADBAND]: 5,
        [eu.N.SUNGLASSES]: 6,
        [eu.N.BANANA_PEEL]: 3,
        [eu.N.LEAF]: 8,
        [eu.N.FIRE]: 9,
        [eu.N.HALO]: 10,
        [eu.N.BRAIN]: 11,
        [eu.N.TRAFFIC_CONE]: 12,
        [eu.N.CROWN]: 14,
    },
    ex = {
        [ef.Z.NONE]: 0,
        [ef.Z.ANGEL_WINGS]: 3,
        [ef.Z.STICKERS]: 1,
        [ef.Z.TOTE]: 2,
        [ef.Z.WIZARD_STAFF]: 8,
        [ef.Z.SKATEBOARD]: 4,
        [ef.Z.DRAGON_WINGS]: 5,
        [ef.Z.TAKE_OUT_BAG]: 6,
        [ef.Z.PIXEL_WRENCH]: 7,
        [ef.Z.MECH_WINGS]: 9,
        [ef.Z.SWORD]: 10,
        [ef.Z.DEVIANT_TAIL]: 11,
        [ef.Z.MAGICAL_STAFF]: 12,
        [ef.Z.BUTTERFLY_WINGS]: 13,
        [ef.Z.CAT_BACKPACK]: 14,
    },
    eg = {
        [el.X.NONE]: e_,
        [el.X.BLAZE]: ep("tex_aura_04_blaze"),
        [el.X.BLOSSOM]: ep("tex_aura_01_blossom"),
        [el.X.PRISM]: ep("tex_aura_02_prism"),
        [el.X.SHOCK]: ep("tex_aura_03_shock"),
        [el.X.FATED]: ep("tex_aura_05_fated"),
        [el.X.LUSTER]: ep("tex_aura_06_luster"),
        [el.X.BUBBLES]: ep("tex_aura_07_bubbly"),
        [el.X.SPOOKY]: ep("tex_aura_08_spooky"),
        [el.X.CURSED]: ep("tex_aura_09_cursed"),
        [el.X.MAGNETIC]: ep("tex_aura_10_magnetic"),
        [el.X.RADIOACTIVE]: ep("tex_aura_11_radioactive"),
        [el.X.ELEMENTAL]: ep("tex_aura_12_elemental"),
        [el.X.SHIMMER]: ep("tex_aura_13_shimmer"),
        [el.X.WITCHY]: ep("tex_aura_14_witchy"),
    },
    eA = {
        [eo.R.ICY]: ep("tex_base_01_icy"),
        [eo.R.CRIMSON]: ep("tex_base_02_crimson"),
        [eo.R.CHROME]: ep("tex_base_03_chrome"),
        [eo.R.GALACTIC]: ep("tex_base_04_galactic"),
        [eo.R.FOREST]: ep("tex_base_05_forrest"),
        [eo.R.MIDNIGHT]: ep("tex_base_06_mighnight"),
        [eo.R.GLACIER]: ep("tex_base_07_glacier"),
        [eo.R.ORANGE]: ep("tex_base_08_orange"),
        [eo.R.PURPLE]: ep("tex_base_09_pink"),
        [eo.R.RED]: ep("tex_base_10_red"),
        [eo.R.COBALT]: ep("tex_base_11_cobalt"),
        [eo.R.X_RAY]: ep("tex_base_12_x-ray"),
        [eo.R.LIQUID]: ep("tex_base_13_liquid"),
        [eo.R.BUTTER]: ep("tex_base_14_butter"),
        [eo.R.IRIDESCENT]: ep("tex_base_15_iridescent"),
    },
    ev = {
        [eh.r.NONE]: null,
        [eh.r.BADDIE_DEFAULT]: { riveId: 1, texture: ep("tex_outfit_01_baddie") },
        [eh.r.TRAVELER_DEFAULT]: { riveId: 10, texture: ep("tex_outfit_10_traveler") },
        [eh.r.STREAMER_DEFAULT]: { riveId: 3, texture: ep("tex_outfit_03_streamer") },
        [eh.r.CAMPER_DEFAULT]: { riveId: 4, texture: ep("tex_outfit_04_camper") },
        [eh.r.ATHLETE_DEFAULT]: { riveId: 5, texture: ep("tex_outfit_05_athlete") },
        [eh.r.COWPOKE_DEFAULT]: { riveId: 6, texture: ep("tex_outfit_06_cowpoke") },
        [eh.r.GOTH_DEFAULT]: { riveId: 7, texture: ep("tex_outfit_07_goth") },
        [eh.r.ASTRONAUT_DEFAULT]: { riveId: 8, texture: ep("tex_outfit_08_astronaut") },
        [eh.r.JESTER_DEFAULT]: { riveId: 9, texture: ep("tex_outfit_09_jester") },
        [eh.r.TRASH_CAN_DEFAULT]: { riveId: 2, texture: ep("tex_outfit_02_trash") },
        [eh.r.MAGE_DEFAULT]: { riveId: 11, texture: ep("tex_outfit_11_mage") },
        [eh.r.MECH_DEFAULT]: { riveId: 12, texture: ep("tex_outfit_12_mech") },
        [eh.r.KNIGHT_DEFAULT]: { riveId: 13, texture: ep("tex_outfit_13_knight") },
        [eh.r.MAGICAL_DEFAULT]: { riveId: 14, texture: ep("tex_outfit_14_magical") },
        [eh.r.BADDIE_MONOCHROME]: { riveId: 1, texture: ep("tex_outfit_01_baddie_monochrome") },
        [eh.r.BADDIE_VIOLET]: { riveId: 1, texture: ep("tex_outfit_01_baddie_violet") },
        [eh.r.BADDIE_PASTEL]: { riveId: 1, texture: ep("tex_outfit_01_baddie_pastel") },
        [eh.r.BADDIE_SUNSET]: { riveId: 1, texture: ep("tex_outfit_01_baddie_sunset") },
        [eh.r.TRAVELER_HAZE]: { riveId: 10, texture: ep("tex_outfit_10_traveler_haze") },
        [eh.r.TRAVELER_MOSS]: { riveId: 10, texture: ep("tex_outfit_10_traveler_moss") },
        [eh.r.TRAVELER_CHRONO]: { riveId: 10, texture: ep("tex_outfit_10_traveler_chrono") },
        [eh.r.TRAVELER_UMBER]: { riveId: 10, texture: ep("tex_outfit_10_traveler_umber") },
        [eh.r.STREAMER_FLAMES]: { riveId: 3, texture: ep("tex_outfit_03_streamer_flames") },
        [eh.r.STREAMER_STRIPES]: { riveId: 3, texture: ep("tex_outfit_03_streamer_stripes") },
        [eh.r.STREAMER_SMILEY]: { riveId: 3, texture: ep("tex_outfit_03_streamer_smiley") },
        [eh.r.STREAMER_VINTAGE]: { riveId: 3, texture: ep("tex_outfit_03_streamer_vintage") },
        [eh.r.CAMPER_PLAID]: { riveId: 4, texture: ep("tex_outfit_04_camper_plaid") },
        [eh.r.CAMPER_SWAMP]: { riveId: 4, texture: ep("tex_outfit_04_camper_swamp") },
        [eh.r.CAMPER_GLAMP]: { riveId: 4, texture: ep("tex_outfit_04_camper_glamp") },
        [eh.r.CAMPER_AMBER]: { riveId: 4, texture: ep("tex_outfit_04_camper_amber") },
        [eh.r.ATHLETE_BLOCKED]: { riveId: 5, texture: ep("tex_outfit_05_athlete_blocked") },
        [eh.r.ATHLETE_FADED]: { riveId: 5, texture: ep("tex_outfit_05_athlete_faded") },
        [eh.r.ATHLETE_CHECKERED]: { riveId: 5, texture: ep("tex_outfit_05_athlete_checkered") },
        [eh.r.ATHLETE_LINED]: { riveId: 5, texture: ep("tex_outfit_05_athlete_lined") },
        [eh.r.COWPOKE_ONYX]: { riveId: 6, texture: ep("tex_outfit_06_cowpoke_onyx") },
        [eh.r.COWPOKE_STEEL]: { riveId: 6, texture: ep("tex_outfit_06_cowpoke_steel") },
        [eh.r.COWPOKE_DENIM]: { riveId: 6, texture: ep("tex_outfit_06_cowpoke_denim") },
        [eh.r.COWPOKE_BLUSH]: { riveId: 6, texture: ep("tex_outfit_06_cowpoke_blush") },
        [eh.r.GOTH_SIREN]: { riveId: 7, texture: ep("tex_outfit_07_goth_siren") },
        [eh.r.GOTH_SERPENT]: { riveId: 7, texture: ep("tex_outfit_07_goth_serpent") },
        [eh.r.GOTH_RAVEN]: { riveId: 7, texture: ep("tex_outfit_07_goth_raven") },
        [eh.r.GOTH_VAMP]: { riveId: 7, texture: ep("tex_outfit_07_goth_vamp") },
        [eh.r.ASTRONAUT_STARDUST]: { riveId: 8, texture: ep("tex_outfit_08_astronaut_stardust") },
        [eh.r.ASTRONAUT_MARTIAN]: { riveId: 8, texture: ep("tex_outfit_08_astronaut_martian") },
        [eh.r.ASTRONAUT_SOLAR]: { riveId: 8, texture: ep("tex_outfit_08_astronaut_solar") },
        [eh.r.ASTRONAUT_COSMIC]: { riveId: 8, texture: ep("tex_outfit_08_astronaut_cosmic") },
        [eh.r.JESTER_CONFETTI]: { riveId: 9, texture: ep("tex_outfit_09_jester_confetti") },
        [eh.r.JESTER_CARNIVAL]: { riveId: 9, texture: ep("tex_outfit_09_jester_carnival") },
        [eh.r.JESTER_SUNRISE]: { riveId: 9, texture: ep("tex_outfit_09_jester_sunrise") },
        [eh.r.JESTER_NIGHTFALL]: { riveId: 9, texture: ep("tex_outfit_09_jester_nightfall") },
        [eh.r.TRASH_CAN_BLACKOUT]: { riveId: 2, texture: ep("tex_outfit_02_trash_blackout") },
        [eh.r.TRASH_CAN_CAUTION]: { riveId: 2, texture: ep("tex_outfit_02_trash_caution") },
        [eh.r.TRASH_CAN_BUBBLEGUM]: { riveId: 2, texture: ep("tex_outfit_02_trash_bubblegum") },
        [eh.r.TRASH_CAN_TOXIC]: { riveId: 2, texture: ep("tex_outfit_02_trash_toxic") },
        [eh.r.MAGE_SHADOW]: { riveId: 11, texture: ep("tex_outfit_11_mage_shadow") },
        [eh.r.MAGE_DUSK]: { riveId: 11, texture: ep("tex_outfit_11_mage_dusk") },
        [eh.r.MAGE_WILDWOOD]: { riveId: 11, texture: ep("tex_outfit_11_mage_wildwood") },
        [eh.r.MAGE_WINTER]: { riveId: 11, texture: ep("tex_outfit_11_mage_winter") },
        [eh.r.MECH_AERO]: { riveId: 12, texture: ep("tex_outfit_12_mech_aero") },
        [eh.r.MECH_VIPER]: { riveId: 12, texture: ep("tex_outfit_12_mech_viper") },
        [eh.r.MECH_ULTRAVIOLET]: { riveId: 12, texture: ep("tex_outfit_12_mech_ultraviolet") },
        [eh.r.MECH_SANDSTORM]: { riveId: 12, texture: ep("tex_outfit_12_mech_sandstorm") },
        [eh.r.KNIGHT_IRON]: { riveId: 13, texture: ep("tex_outfit_13_knight_iron") },
        [eh.r.KNIGHT_RUST]: { riveId: 13, texture: ep("tex_outfit_13_knight_rust") },
        [eh.r.KNIGHT_PETAL]: { riveId: 13, texture: ep("tex_outfit_13_knight_petal") },
        [eh.r.KNIGHT_GLACIER]: { riveId: 13, texture: ep("tex_outfit_13_knight_glacier") },
        [eh.r.MAGICAL_SAPPHIRE]: { riveId: 14, texture: ep("tex_outfit_14_magical_sapphire") },
        [eh.r.MAGICAL_AMETHYST]: { riveId: 14, texture: ep("tex_outfit_14_magical_amethyst") },
        [eh.r.MAGICAL_FROST]: { riveId: 14, texture: ep("tex_outfit_14_magical_frost") },
        [eh.r.MAGICAL_CITRINE]: { riveId: 14, texture: ep("tex_outfit_14_magical_citrine") },
    };
var ew = a(835517),
    eI = (((r = {}).SLOT = "slot"), (r.TRAIT = "trait"), (r.LAYOUT = "layout"), (r.ALWAYS = "always"), r);
let eE = /^tex_(aura|base_\d+|outfit)_/,
    ej = /^tex_(headwear|shoes|wearable|face)_(\d+)_/,
    eS = /^tex_face_([a-z]+)_/i,
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
    eN = {
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
    eT = { columns: 1, rows: 1 },
    eR = { columns: 5, rows: 5 },
    eO = { columns: 6, rows: 8 },
    eM = {
        tex_aura_01_blossom: eR,
        tex_aura_02_prism: eR,
        tex_aura_03_shock: eR,
        tex_aura_04_blaze: eR,
        tex_aura_05_fated: eR,
        tex_aura_06_luster: eR,
        tex_aura_07_bubbly: eR,
        tex_aura_08_spooky: eR,
        tex_aura_09_cursed: eR,
        tex_aura_10_magnetic: eR,
        tex_aura_11_radioactive: eR,
        tex_aura_12_elemental: eR,
        tex_aura_13_shimmer: eR,
        tex_aura_14_witchy: eR,
        tex_wireframe_spritesheet: { columns: 12, rows: 6 },
        tex_wearable_10_sword_spritesheet: { columns: 5, rows: 4 },
        tex_wearable_11_deviantTail_smoke_active_spritesheet: eO,
        tex_wearable_11_deviantTail_smoke_idle_spritesheet: eO,
    },
    ey = [1, 1.25, 1.5, 1.75, 2, 3, 4, 5],
    eL = Math.min(...ey),
    ek = Math.max(...ey);
function eD(e, t) {
    let { url: a, width: r, height: i, widthAt1x: n } = eb[e];
    if (null == n) return a;
    let s = 4096 / Math.max(r, i),
        c = Math.min((t * n) / r, s),
        d = s >= 1 && t >= Math.round(r / n);
    if (c >= 1 || d) return a;
    let { columns: l, rows: o } = eM[e] ?? eT,
        u = l * Math.round((r / l) * c),
        h = o * Math.round((i / o) * c);
    return `${a}?width=${u}&height=${h}`;
}
let eP = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14"],
    eU = eP.map((e) => `outfit${e}Image`),
    eG = {
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
        [S.s9.SUMMARY]: 8,
    },
    eH = {
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
    eF = { ...eH.MobilePortrait, gradientTopPosition: 25, gradientBottomPosition: 90 };
var eK = a(722872),
    eB = a(574381);
let ez = new Set([1]),
    eV = Object.keys(eb).map((e) => ({
        name: e,
        role: (function (e) {
            if (eE.test(e)) return { type: "slot" };
            let t = eC[e];
            if (null != t) return { type: "layout", layouts: t };
            let a = ej.exec(e);
            if (null != a) return { type: "trait", path: `${a[1]}ID`, riveId: Number(a[2]) };
            let r = eS.exec(e),
                i = null != r ? eN[r[1].toLowerCase()] : void 0;
            return null != i ? { type: "trait", path: "faceID", riveId: i } : { type: "always" };
        })(e),
        swapKey: (0, eB.un)() ? `${e}-${eb[e].riveId}` : e,
    }));
function eW(e) {
    let { faceID: t, headwearID: a, shoesID: r, wearableID: i, chapterID: n, device: s } = e;
    return b.useMemo(() => {
        var e;
        let c;
        return (
            (e = { faceID: t, headwearID: a, shoesID: r, wearableID: i }),
            (c = new Set()),
            eV.forEach((t) => {
                let { name: a, role: r } = t;
                switch (r.type) {
                    case eI.SLOT:
                        break;
                    case eI.TRAIT:
                        e[r.path] === r.riveId && c.add(a);
                        break;
                    case eI.LAYOUT:
                        r.layouts.includes(s) && c.add(a);
                        break;
                    case eI.ALWAYS:
                        ("tex_wireframe_spritesheet" !== a || ez.has(n)) && c.add(a);
                }
            }),
            c
        );
    }, [t, a, r, i, n, s]);
}
var eq = a(435558);
let eY = (0, a(196765).v)(() => ({ hoveredOption: void 0 })),
    eX = (0, eq.debounce)((e) => eY.setState({ hoveredOption: e }), 250);
function eZ(e) {
    let { hoveredOption: t, isDelayed: a = !1 } = e;
    a ? eX(t) : (eX.cancel(), eY.setState({ hoveredOption: t }));
}
(a(393431), a(532706), a(42231), a(232424), a(949626), a(767709), a(65162));
var eQ = a(971940);
async function eJ(e) {
    try {
        let t = await fetch(e);
        if (!t.ok) return null;
        return await (0, eQ.decodeImage)(new Uint8Array(await t.arrayBuffer()));
    } catch {
        return null;
    }
}
var e$ = a(168862);
function e0(e) {
    let t,
        a,
        { stage: r, isHidden: n } = e,
        s = (0, x.bG)([d.A], () => {
            let e = d.A.windowSize();
            return (function (e, t) {
                let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (a) return eL;
                let r = Math.max(e / 960, t / 540) * (0, ew.A)();
                return ey.find((e) => e >= r) ?? ek;
            })(e.width, e.height);
        }),
        [c, l] = b.useState(s);
    s > c && l(s);
    let o =
            ((t = (0, x.bG)([u.A], () => u.A.selectedCharacterTraits)),
            (a = eY((e) => e.hoveredOption)),
            b.useMemo(() => (null != a ? { ...t, [a.trait]: a.optionId } : t), [t, a])),
        h = (0, x.bG)([Z.Ay], () => Z.Ay.useReducedMotion),
        f = b.useMemo(
            () =>
                (function (e) {
                    let { stage: t, isHidden: a, traits: r, layout: i, textureScale: n } = e,
                        { base: s, shoes: c, outfit: d, face: l, hat: o, wearable: u, aura: h } = (0, U.XI)(r),
                        f = ev[d],
                        b = {};
                    return (
                        eP.forEach((e) => {
                            let t = Number(e) === f?.riveId ? f.texture : e_;
                            b[`outfit${e}Image`] = eD(t.name, n);
                        }),
                        {
                            device: i,
                            chapterID: a && t === S.s9.FACE ? eG[S.s9.IDLE] : eG[t],
                            faceID: l,
                            shoesID: c,
                            headwearID: em[o],
                            wearableID: ex[u],
                            outfitID: f?.riveId ?? 0,
                            auraImage: eD(eg[h].name, n),
                            baseColorImage: eD(eA[s].name, n),
                            ...("MobilePortrait" === i && t === S.s9.INTRODUCTION ? eF : eH[i]),
                            ...b,
                        }
                    );
                })({ stage: r, isHidden: n, traits: o, layout: "Desktop", textureScale: c }),
            [r, n, o, c],
        ),
        [p, m] = b.useState(null),
        g = (function (e) {
            let { visibleDataBinding: t, requestedDataBinding: a, textureScale: r } = e,
                i = (function (e) {
                    let { visibleTextureNames: t, requestedTextureNames: a } = e,
                        [r, i] = b.useState(t),
                        [n, s] = b.useState(t);
                    if (t !== n) {
                        s(t);
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
                })({ visibleTextureNames: eW(t), requestedTextureNames: eW(a) });
            return b.useMemo(() => {
                let e;
                return (
                    (e = {}),
                    eV.forEach((t) => {
                        let { name: a, swapKey: n } = t,
                            s = i.has(a) ? eD(a, r) : e_.url;
                        e[n] = { source: { uri: s } };
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
                r = b.useCallback((t) => !!t.isImage && t.name in eb && (e.current.set(t.name, t), !0), []);
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
                                  load: eJ,
                                  swap: (e) => e.forEach((e, a) => t.get(a)?.setRenderImage(e)),
                                  release: (e) => e.forEach((e) => e.unref()),
                              },
                    [t],
                ),
            };
        })(),
        I = b.useRef(null),
        E = b.useRef(n);
    b.useEffect(() => {
        ((E.current = n), n ? I.current?.pause() : I.current?.play());
    }, [n]);
    let j = b.useCallback(() => {
            (v(), E.current && I.current?.pause());
        }, [v]),
        C = (function (e) {
            let { textureManager: t, referencedAssets: a, initialReferencedAssets: r } = e,
                i = b.useRef(new Map()),
                [n, s] = b.useState(r);
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
        })({ textureManager: w, referencedAssets: g }),
        {
            dataBinding: N,
            isOutfitPreloaded: T,
            onDataBindingChange: R,
        } = (function (e) {
            var t;
            let { visibleDataBinding: a, requestedDataBinding: r } = e,
                [i, n] = b.useState({}),
                s = (t = r.outfitID) > 0 ? eU[t - 1] : null,
                c = null != s ? r[s] : void 0,
                d = null == s || a?.[s] === c || i[s] === c,
                l = a ?? r;
            return {
                dataBinding: b.useMemo(() => (null == s || l[s] === c ? l : { ...l, [s]: c }), [l, s, c]),
                isOutfitPreloaded: d,
                onDataBindingChange: b.useMemo(() => {
                    let e = {};
                    return (
                        eU.forEach((t) => {
                            e[t] = (e) => {
                                n((a) => (a[t] === e ? a : { ...a, [t]: e }));
                            };
                        }),
                        e
                    );
                }, []),
            };
        })({ visibleDataBinding: p, requestedDataBinding: f });
    C && T && p !== f && m(f);
    let O = (function (e) {
            let { stage: t, dataBinding: a } = e,
                r = (0, x.bG)([Z.Ay], () => Z.Ay.useReducedMotion),
                i = t === S.s9.INTRODUCTION && !r,
                [n, s] = b.useState(+!i),
                [c, d] = b.useState(i);
            return (
                i !== c && (d(i), s(+!i)),
                b.useEffect(() => {
                    if (!i) return;
                    let e = Date.now() + 1800,
                        t = requestAnimationFrame(function a() {
                            let r = Math.max(Math.min(Date.now() - e, 1e3), 0);
                            (s((0, eK.easeOutCubic)(r, 0, 1, 1e3)), r >= 1e3 || (t = requestAnimationFrame(a)));
                        });
                    return () => cancelAnimationFrame(t);
                }, [i]),
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
        })({ stage: r, dataBinding: N }),
        M = b.useMemo(() => ({ ...O, mobileLift: 0, reducedMotion: h }), [O, h]);
    return (0, i.jsx)("div", {
        role: "img",
        "aria-label": (0, ed.O)(o),
        className: _()(e$.dw, { [e$.RK]: null != p }),
        children: (0, i.jsx)(ec.W, {
            artboard: "AB_Master",
            stateMachine: "SM_Master",
            fit: "layout",
            alignment: "center",
            ref: I,
            assetLoader: A,
            onLoad: j,
            listenOnDocumentBody: !h,
            withReducedMotion: "play",
            dataBinding: M,
            onDataBindingChange: R,
            className: e$.lW,
        }),
    });
}
let e1 = { delay: 0, duration: 350 },
    e2 = { delay: 35, duration: 125 },
    e3 = { delay: 200, duration: 125 },
    e8 = { delay: 700, duration: 175 },
    e7 = { delay: 175, duration: 175 },
    e5 = { delay: 0, duration: 125 },
    e6 = { delay: 175, duration: 175 },
    e9 = { delay: 0, duration: 175 },
    e4 = { delay: 0, duration: 0 },
    te = { delay: e1.delay + e1.duration, duration: 0 },
    tt = e3.delay + 500;
var ta = a(840527);
function tr(e) {
    let { stage: t, isCovered: a, className: r, children: n } = e,
        [s, c] = b.useState(a);
    !a && s && c(!1);
    let d = a && !s,
        { isMountDelayed: l } = (function (e) {
            let [t, a] = b.useState(e);
            return (
                !e && t && a(!1),
                b.useEffect(() => {
                    if (!t) return;
                    let e = setTimeout(() => a(!1), tt);
                    return () => clearTimeout(e);
                }, [t]),
                { isMountDelayed: t }
            );
        })(a),
        o = (0, er.p0)({ value: t, shouldUpdate: !d }) ?? t,
        u = (0, er.p0)({ value: n, shouldUpdate: !d });
    return (0, i.jsxs)(es, {
        visible: !a,
        enter: e4,
        exit: te,
        keepMounted: !0,
        onExitComplete: () => c(!0),
        className: r,
        children: [
            (0, i.jsx)("div", { className: ta.q, children: !l && (0, i.jsx)(e0, { stage: o, isHidden: s }) }),
            null != u && (0, i.jsx)("div", { className: ta.q, children: u }),
        ],
    });
}
function ti(e) {
    let { animatedSrc: t, staticSrc: a, className: r } = e,
        n = (0, x.bG)([Z.Ay], () => Z.Ay.useReducedMotion);
    return (0, i.jsx)("img", { src: n ? a : t, alt: "", className: r });
}
var tn = a(740281),
    ts = a(766089),
    tc = a(767988);
let td = { animatedSrc: ts.A, staticSrc: tc.A };
function tl(e) {
    let { activeRoute: t } = e,
        { animatedSrc: a, staticSrc: r } = (0, x.cf)(
            [u.A],
            () => {
                switch (t) {
                    case S.gr.SUMMARY:
                    case S.gr.SHARE:
                        let e = (0, I.o)(u.A.character),
                            { clydeLogoImage: a, clydeLogoStaticImage: r } = (0, I.j)(e);
                        return { animatedSrc: a, staticSrc: r };
                    default:
                        return td;
                }
            },
            [t],
        );
    return (0, i.jsx)(ti, { animatedSrc: a, staticSrc: r, className: tn.w });
}
var to = a(756408);
function tu() {
    let e = b.useRef(null);
    return (
        b.useLayoutEffect(() => {
            let t = e.current;
            null != t && ((t.tabIndex = -1), t.focus({ preventScroll: !0 }));
        }, []),
        e
    );
}
var th = a(834730),
    tf = a(534514),
    tb = a(504736);
function tp(e) {
    let { children: t, className: a, ...r } = e;
    return (0, i.jsx)(th.E, { ...r, className: _()(tb.Q, a), color: "none", children: t });
}
function t_(e) {
    let { children: t, className: a, ...r } = e,
        n = tu();
    return (0, i.jsx)(tf.D, { ...r, ref: n, className: _()(tb.Q, a), color: "none", children: t });
}
var tm = a(271427);
function tx(e) {
    let { children: t, className: a, style: r } = e;
    return (0, i.jsx)(tp, { tag: "span", variant: "mono-md/bold", className: _()(tm.T, a), style: r, children: t });
}
var tg = a(852717),
    tA = a(792996),
    tv = a(383931);
function tw(e) {
    let { percent: t } = e;
    return (0, i.jsx)(tx, {
        className: tv.t,
        children: tA.intl.formatToPlainString(tg.default.fOGKA4, { percent: t }),
    });
}
var tI = a(646692);
function tE(e) {
    let { icon: t, value: a, topPercent: r, children: n } = e,
        s = tu(),
        c =
            null != r
                ? tA.intl.formatToPlainString(tg.default.USo6cU, { value: a, label: n, percent: r })
                : tA.intl.formatToPlainString(tg.default["+CCx/D"], { value: a, label: n });
    return (0, i.jsxs)("div", {
        ref: s,
        role: "heading",
        "aria-level": 2,
        children: [
            (0, i.jsxs)("div", {
                className: tI.dJ,
                "aria-hidden": !0,
                children: [
                    null != r && (0, i.jsx)(tw, { percent: r }),
                    (0, i.jsxs)("div", {
                        className: tI.p,
                        children: [
                            (0, i.jsx)(tp, {
                                variant: "heading-xxl/medium",
                                className: tI.Uq,
                                children: a.toLocaleString(tA.intl.currentLocale),
                            }),
                            (0, i.jsxs)("div", {
                                className: tI.Pf,
                                children: [
                                    (0, i.jsx)(t, { size: "xs", color: "currentColor" }),
                                    (0, i.jsx)(tp, { variant: "heading-xs/semibold", className: tI.QK, children: n }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(A.A, { children: c }),
        ],
    });
}
var tj = a(303453);
let tS = {
    [E.v7.FACE]: tg.default.q8GA6h,
    [E.v7.OUTFIT]: tg.default["xGh/fq"],
    [E.v7.OUTFIT_COLOR]: tg.default.IgiEDV,
    [E.v7.HAT]: tg.default.QqeBEO,
    [E.v7.WEARABLE]: tg.default.l57q3i,
    [E.v7.AURA]: tg.default["fYp+yq"],
    [E.v7.SHOES]: tg.default.BaI4wD,
    [E.v7.BASE]: tg.default.SMXZXX,
};
function tC(e) {
    let { customizationOption: t, earnedCount: a, totalCount: r } = e;
    return (0, i.jsx)(th.E, {
        variant: "body-md/medium",
        color: "text-subtle",
        className: tj.k,
        children: tA.intl.format(tS[t], {
            earnedCount: a,
            totalCount: r,
            countHook: (e, t) =>
                (0, i.jsx)(tp, { tag: "span", variant: "mono-md/bold", className: tj.U, children: e }, t),
        }),
    });
}
let tN =
    "https://cdn.discordapp.com/assets/content/48cbcb920dfd15e45e7fe3f297ede63a7891cb0eee9fc44f27053d05d2c6b5ca.mp3";
var tT = a(11044);
function tR(e) {
    let { isMuted: t, volume: a } = (0, x.cf)([u.A], () => ({ isMuted: u.A.isMuted, volume: u.A.volume })),
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
var tO = a(218546),
    tM = a(646514),
    ty = a(403581),
    tL = a(461872),
    tk = a(559265);
function tD(e) {
    let { rarity: t } = e,
        a = b.useMemo(() => ({ "--custom-checkpoint-rarity-color": W.Zy[t] }), [t]);
    return t === tO.K.NITRO
        ? (0, i.jsx)(ty.NitroWheelIcon, { size: "custom", color: tM.A.colors.ICON_SUBTLE, className: tk.d7 })
        : (0, i.jsx)("span", { className: tk.oG, style: a });
}
function tP(e) {
    let {
            traitOption: t,
            groupName: a,
            isSelected: r,
            hideRarity: n,
            onSelectOption: s,
            onHoverOption: c,
            disabled: d = !1,
        } = e,
        { trait: l, optionId: o, rarity: u, asset: h, status: f } = t,
        p = f === tL.eP.LOCKED,
        m = b.useMemo(() => {
            if (null == h) return null;
            let e = Math.round(80 * (0, ew.A)());
            return `${h}?width=${e}&height=${e}`;
        }, [h]);
    return (0, i.jsxs)("label", {
        className: _()(tk.uK, { [tk.wH]: r, [tk.dv]: (0, E.C5)(t), [tk.xt]: p, [tk.Ns]: f === tL.eP.NITRO_LOCKED }),
        onMouseEnter: () => c(t),
        onFocus: function () {
            c(t);
        },
        children: [
            (0, i.jsx)(A.A, {
                children: (0, i.jsx)("input", {
                    type: "radio",
                    name: a,
                    checked: r,
                    disabled: d,
                    "aria-disabled": d ? void 0 : p,
                    onChange: function () {
                        d || p || s(l, o);
                    },
                    "aria-label": (0, E.v2)(t, { skipRarity: n, skipDescription: !1 }),
                }),
            }),
            null != m && (0, i.jsx)("img", { src: m, alt: "", draggable: !1, className: tk.Sl }),
            !n && null != u && (0, i.jsx)(tD, { rarity: u }),
        ],
    });
}
var tU = a(541170),
    tG = a(974862),
    tH = a(142389),
    tF = a(211235),
    tK = a(230532),
    tB = a(110601),
    tz = a(917970);
function tV(e) {
    let { customizationOption: t, traitOptions: a, selectedOption: r, onSelectOption: n, disabled: s = !1 } = e,
        c = b.useId(),
        d = !(0, E.Ux)(t),
        l = tR(
            "https://cdn.discordapp.com/assets/content/fc5527a1a369d8982c6e6fa588f732c7c5364ff00ddd0cf51646f05ad423af36.mp3",
        ),
        o = tR(tN);
    ((0, B.Ay)(() => {
        [tG, tz, tH, tF, tB, tK].forEach((e) => (0, tT.N)(e));
    }),
        b.useEffect(() => () => eZ({ hoveredOption: void 0 }), [t]));
    let u = b.useCallback(
            (e, t) => {
                (eZ({ hoveredOption: void 0 }), o(), n(e, t));
            },
            [n, o],
        ),
        h = b.useCallback(
            (e) => {
                (l(), eZ({ hoveredOption: e.optionId !== r?.optionId ? e : void 0, isDelayed: !0 }));
            },
            [l, r],
        );
    return (0, i.jsx)("div", {
        onMouseLeave: () => eZ({ hoveredOption: void 0 }),
        children: (0, i.jsx)("div", {
            role: "radiogroup",
            "aria-label": (0, E.cq)(t),
            className: tU.V,
            onBlur: (e) => {
                e.currentTarget.contains(e.relatedTarget) ||
                    e.currentTarget.matches(":hover") ||
                    eZ({ hoveredOption: void 0 });
            },
            children: a.map((e) =>
                (0, i.jsx)(
                    tP,
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
var tW = a(28863),
    tq = a(793574),
    tY = a(778705),
    tX = a(647093);
function tZ(e) {
    let { rarity: t } = e,
        a = b.useMemo(() => ({ "--custom-checkpoint-rarity-background": W.Zy[t] }), [t]);
    return (0, i.jsx)(tx, { className: tX.q, style: a, children: tA.intl.string(W.iG[t]) });
}
var tQ = a(829870);
function tJ(e) {
    let { title: t, rarity: a, description: r } = e;
    return (0, i.jsxs)("div", {
        className: tQ.z,
        children: [
            (0, i.jsxs)("div", {
                className: tQ.D,
                children: [
                    (0, i.jsx)(th.E, { tag: "div", variant: "heading-sm/semibold", color: "text-strong", children: t }),
                    null != a && (0, i.jsx)(tZ, { rarity: a }),
                ],
            }),
            null != r && (0, i.jsx)(th.E, { variant: "body-md/medium", color: "text-subtle", children: r }),
        ],
    });
}
function t$(e) {
    return e.status !== tL.eP.NITRO_LOCKED
        ? (0, E.Oq)(e)
        : tA.intl.format(tg.default.E6AfCb, {
              subscribeHook: (e, t) =>
                  (0, i.jsx)(
                      tW.Anchor,
                      {
                          onClick: () => (0, tY.A)({ analyticsLocations: [tq.A.CHECKPOINT, tq.A.CHECKPOINT_TRAIT] }),
                          children: e,
                      },
                      t,
                  ),
          });
}
function t0(e) {
    let { customizationOption: t, selectedOption: a } = e,
        r = eY((e) => e.hoveredOption) ?? a;
    return null == r
        ? null
        : (0, i.jsx)(tJ, { title: r.getName(), rarity: (0, E.Ux)(t) ? r.rarity : void 0, description: t$(r) });
}
var t1 = a(509063);
function t2(e) {
    let { children: t, details: a } = e;
    return (0, i.jsxs)("div", {
        className: t1.Nz,
        children: [
            (0, i.jsx)("div", { className: t1.fF, children: t }),
            null != a && (0, i.jsx)("div", { className: t1.zH, children: a }),
        ],
    });
}
var t3 = a(51104);
function t8(e) {
    let { rarity: t, isSavedOption: a, visibleRarities: r, hasNitroSubscription: i } = e;
    return a
        ? tL.eP.UNLOCKED
        : null == t || r.has(t)
          ? t !== tO.K.NITRO || i
              ? tL.eP.UNLOCKED
              : tL.eP.NITRO_LOCKED
          : tL.eP.LOCKED;
}
function t7(e, t) {
    return e === E.v7.OUTFIT ? (null != t ? (0, U.FA)(t) : void 0) : t;
}
function t5(e) {
    let { customizationOption: t } = e,
        {
            optionIds: a,
            selectedOptionId: r,
            savedOptionId: i,
            onSelectOption: n,
        } = (function (e) {
            let { customizationOption: t, onSelectOption: a } = e,
                r = E.hw[t],
                { selectedOptionId: i, savedOptionId: n } = (0, x.cf)([u.A], () => ({
                    selectedOptionId: t7(t, u.A.selectedCharacterTraits[r]),
                    savedOptionId: t7(t, u.A.character?.[r]),
                })),
                s = b.useCallback(
                    (e, t) => {
                        if (t === i) return;
                        let r = (0, U.$C)(e, t),
                            s = t8({
                                rarity: r,
                                isSavedOption: n === t,
                                visibleRarities: (0, U.mf)(e, u.A.stats),
                                hasNitroSubscription: (0, P.ki)(D.default.getCurrentUser()),
                            });
                        ((0, f.dw)(e, t, s, r), a(e, t));
                    },
                    [a, n, i],
                );
            return {
                optionIds: (function (e, t) {
                    switch (e) {
                        case E.v7.OUTFIT:
                            return U.ps;
                        case E.v7.OUTFIT_COLOR:
                            return (0, U.wD)(t ?? eh.r.NONE);
                        default:
                            return;
                    }
                })(t, i),
                selectedOptionId: i,
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
            let { customizationOption: t, savedOptionId: a, rarityOrder: r, optionIds: i } = e,
                n = (0, x.bG)([u.A], () => u.A.stats),
                s = (0, x.bG)([D.default], () => (0, P.ki)(D.default.getCurrentUser())),
                c = b.useMemo(() => (0, E.p8)(r), [r]);
            return b.useMemo(() => {
                let e = E.hw[t],
                    r = t === E.v7.OUTFIT_COLOR ? t3.x : t3.$[e],
                    d = (0, U.mf)(e, n),
                    l = [],
                    o = 0,
                    u = 0;
                for (let t of i ?? U.Rk[e]) {
                    let i = (0, U.$C)(e, t),
                        n = t8({ rarity: i, isSavedOption: a === t, visibleRarities: d, hasNitroSubscription: s }),
                        c = n === tL.eP.UNLOCKED && (i !== tO.K.NITRO || s);
                    (null != i && o++,
                        null != i && c && u++,
                        l.push({
                            trait: e,
                            optionId: t,
                            asset: U.qM[e][t]?.thumbnail,
                            rarity: i,
                            status: n,
                            getName: () => {
                                let e = r[t];
                                return null != e ? tA.intl.string(e) : "";
                            },
                        }));
                }
                l.sort(c);
                let h = l.filter((e) => {
                    let { status: t } = e;
                    return t !== tL.eP.LOCKED;
                });
                return { traitOptions: l, availableTraitOptions: h, totalCount: o, earnedCount: u };
            }, [t, s, i, c, a, n]);
        })({ customizationOption: t, savedOptionId: i, rarityOrder: W.FG, optionIds: a }),
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
                n = t[0],
                s = t.some((e) => e.optionId === a);
            b.useEffect(() => {
                i || null == n || s || r(n.trait, n.optionId);
            }, [n, s, r, i]);
        })({ availableTraitOptions: c, selectedOptionId: r, onSelectOption: o.IB }),
        { traitOptions: s, selectedOption: h, totalCount: d, earnedCount: l, onSelectOption: n }
    );
}
function t6(e) {
    let { customizationOption: t } = e,
        {
            traitOptions: a,
            selectedOption: r,
            totalCount: n,
            earnedCount: s,
            onSelectOption: c,
        } = t5({ customizationOption: t });
    return (0, i.jsxs)(t2, {
        details: (0, i.jsx)(t0, { customizationOption: t, selectedOption: r }),
        children: [
            (0, i.jsx)(tC, { customizationOption: t, earnedCount: s, totalCount: n }),
            (0, i.jsx)(tV, { customizationOption: t, traitOptions: a, selectedOption: r, onSelectOption: c }),
        ],
    });
}
var t9 = a(71678);
function t4(e) {
    let { children: t, className: a } = e;
    return (0, i.jsx)("div", { className: _()(t9.n, a), children: t });
}
function ae() {
    let e = (0, x.bG)([u.A], () => u.A.stats?.emojis);
    return (0, i.jsxs)(t4, {
        children: [
            (0, i.jsx)(tE, {
                icon: to.EmojiSlightlySmilingFaceIcon,
                value: Math.round(e?.numEmojisSent ?? 0),
                topPercent: (0, V.bD)(e?.numEmojisSentPercentile),
                children: tA.intl.string(tg.default.ZTDCIv),
            }),
            (0, i.jsx)(t6, { customizationOption: E.v7.SHOES }),
        ],
    });
}
var at = a(937383);
function aa(e) {
    let { selectedOption: t } = e,
        a = eY((e) => e.hoveredOption) ?? t;
    return null == a
        ? null
        : (0, i.jsx)(tJ, {
              title: (0, i.jsxs)(i.Fragment, {
                  children: [
                      a.getName(),
                      " ",
                      (0, i.jsxs)(th.E, {
                          tag: "span",
                          variant: "heading-sm/semibold",
                          color: "text-subtle",
                          children: [
                              (0, i.jsx)("span", { "aria-hidden": !0, children: "/ " }),
                              (0, i.jsx)(A.A, { children: ", " }),
                              (0, E.hV)(a.optionId),
                          ],
                      }),
                  ],
              }),
              description: t$(a),
          });
}
function ar(e) {
    let { disabled: t } = e,
        { traitOptions: a, selectedOption: r, onSelectOption: n } = t5({ customizationOption: E.v7.OUTFIT_COLOR });
    return (0, i.jsx)(t2, {
        details: (0, i.jsx)(aa, { selectedOption: r }),
        children: (0, i.jsx)(tV, {
            customizationOption: E.v7.OUTFIT_COLOR,
            traitOptions: a,
            selectedOption: r,
            onSelectOption: n,
            disabled: t,
        }),
    });
}
function ai() {
    return (0, i.jsx)(t2, {
        children: (0, i.jsx)(tJ, {
            title: tA.intl.string(tg.default.zsYYN1),
            description: tA.intl.string(tg.default.BkuqWx),
        }),
    });
}
function an(e) {
    let { lastColorwayIdByOutfitId: t, disabled: a } = e,
        { traitOptions: r, selectedOption: n, onSelectOption: s } = t5({ customizationOption: E.v7.OUTFIT }),
        c = b.useMemo(() => (0, E.G5)(r, t), [t, r]);
    return (0, i.jsx)(t2, {
        details: (0, i.jsx)(t0, { customizationOption: E.v7.OUTFIT, selectedOption: n }),
        children: (0, i.jsx)(tV, {
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
function as(e) {
    let { customizationOption: t, disabled: a } = e,
        { traitOptions: r, selectedOption: n, onSelectOption: s } = t5({ customizationOption: t });
    return (0, i.jsx)(t2, {
        details: (0, i.jsx)(t0, { customizationOption: t, selectedOption: n }),
        children: (0, i.jsx)(tV, {
            customizationOption: t,
            traitOptions: r,
            selectedOption: n,
            onSelectOption: s,
            disabled: a,
        }),
    });
}
function ac(e) {
    let { customizationOption: t, lastColorwayIdByOutfitId: a, disabled: r } = e;
    switch (t) {
        case E.v7.OUTFIT:
            return (0, i.jsx)(an, { lastColorwayIdByOutfitId: a, disabled: r });
        case E.v7.OUTFIT_COLOR:
            return (0, i.jsx)(ar, { disabled: r });
        default:
            return (0, i.jsx)(as, { customizationOption: t, disabled: r });
    }
}
function ad(e) {
    let { id: t, customizationOption: a, disabled: r } = e,
        n = (function () {
            let e = (0, x.bG)([u.A], () => u.A.selectedCharacterTraits[k.V.OUTFIT]),
                [t, a] = b.useState(new Map()),
                r = null != e ? (0, U.FA)(e) : void 0;
            return (null != e && null != r && t.get(r) !== e && a(new Map(t).set(r, e)), t);
        })(),
        s = (0, x.bG)(
            [u.A],
            () => {
                if (a !== E.v7.OUTFIT_COLOR) return !1;
                let e = u.A.selectedCharacterTraits[k.V.OUTFIT];
                return null == e || (0, U.nb)(k.V.OUTFIT, e);
            },
            [a],
        );
    return (0, i.jsx)("div", {
        role: "tabpanel",
        id: t,
        "aria-label": (0, E.cq)(a),
        tabIndex: s ? 0 : void 0,
        className: at.n,
        children: s
            ? (0, i.jsx)(ai, {})
            : (0, i.jsx)(ac, { customizationOption: a, lastColorwayIdByOutfitId: n, disabled: r }),
    });
}
var al = a(265872),
    ao = a(320448),
    au = a(315710),
    ah = a(444927);
let af = { width: 180, height: 240 },
    ab = { width: 220, height: 293 };
function ap(e, t) {
    let { width: a, height: r } = e;
    return {
        "--custom-checkpoint-game-art-width": t,
        "--custom-checkpoint-game-art-height": `calc(var(--custom-checkpoint-game-art-width) * ${r} / ${a})`,
    };
}
let a_ = ap(af, "clamp(135px, 17.5vh, 180px)"),
    am = ap(ab, "clamp(165px, 21.5vh, 220px)"),
    ax = {
        "--custom-checkpoint-primary": W.Kr,
        "--custom-checkpoint-dark-cyan": W.ow,
        "--custom-checkpoint-button-border": W.ow,
        "--custom-checkpoint-button-shadow": W.zj,
        "--custom-checkpoint-white": W.Ve,
        "--custom-checkpoint-guild-card-background": W.LM,
        "--custom-checkpoint-background-gradient-start": W.bI,
    };
var ag = a(580814);
function aA(e) {
    let {
            menuRef: t,
            options: a,
            activeCustomizationOption: r,
            returnRef: n,
            onSelectOption: s,
            onClose: c,
            focusMenu: d,
            onMouseEnter: l,
            onMouseLeave: o,
        } = e,
        u = b.useRef([]),
        h = (0, ah.A)(() => Math.max(a.indexOf(r), 0)),
        [f, p] = b.useState(null);
    function m(e) {
        let t = (e + a.length) % a.length;
        (p(t), u.current[t]?.focus());
    }
    return (
        (0, au.tj)(t, { disable: !d, disableReturn: !0 }),
        b.useEffect(() => {
            d && u.current[h]?.focus();
        }, [h, d]),
        (0, i.jsx)("div", {
            ref: t,
            role: "menu",
            tabIndex: -1,
            "aria-label": tA.intl.string(tg.default.Zl5vPW),
            className: ag.MK,
            style: ax,
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
                        className: _()(ag.AS, { [ag.dT]: f === t }),
                        onFocus: () => p(t),
                        onMouseEnter: (e) => {
                            (p(t), d && e.currentTarget.focus());
                        },
                        onClick: () => s(e),
                        children: (0, i.jsx)(th.E, {
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
var av = a(421773),
    aw = a(769909);
function aI(e) {
    var t;
    let a,
        {
            activeCustomizationOption: r,
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
            let { activeCustomizationOption: t, onSelectOption: a, blockedTrait: r, disabled: i } = e,
                n = b.useRef(null),
                s = b.useRef(null),
                c = E.kB.includes(t),
                d = (function (e) {
                    let t = E.kB.includes(e),
                        [a, r] = b.useState(t ? e : null);
                    return (t && a !== e && r(e), a);
                })(t),
                l = i || null != r,
                [o, u] = b.useState(!1),
                {
                    isHovered: h,
                    setIsHovered: f,
                    onMouseEnter: p,
                    onMouseLeave: _,
                    cancelTimers: m,
                } = (0, av.A)(100, 300);
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
                    null != r ? Y(r) : i || (m(), u(!0), f(!0));
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
        })({ activeCustomizationOption: r, onSelectOption: n, blockedTrait: d, disabled: l }),
        S = h ? "more" : r,
        { tabListRef: C, focusAdjacentTab: N } =
            ((t = [...E.IS, "more"]),
            {
                tabListRef: (a = b.useRef(null)),
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
        T = b.useId(),
        R = null != d ? T : void 0,
        O = null != f ? (0, E.cq)(f) : null;
    function M(e) {
        null != d ? Y(d) : l || (n(e), g());
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
            className: _()(aw.Mf, { [aw.OS]: "more" === e, [aw.vu]: t }),
        };
    }
    return (0, i.jsxs)("div", {
        ref: C,
        role: "tablist",
        "aria-label": tA.intl.string(tg.default.Zl5vPW),
        className: aw.vR,
        children: [
            E.IS.map((e) => {
                let t = (0, E.cq)(e);
                return (0, i.jsx)(
                    "button",
                    {
                        ...k(e),
                        "aria-label": t,
                        children: (0, i.jsx)(th.E, {
                            tag: "span",
                            variant: "heading-sm/semibold",
                            color: "none",
                            children: t,
                        }),
                    },
                    e,
                );
            }),
            (0, i.jsx)(al.Y, {
                targetElementRef: o,
                shouldShow: p,
                onRequestOpen: x,
                onRequestClose: v,
                position: "right",
                align: "top",
                spacing: 8,
                renderPopout: () =>
                    (0, i.jsx)(aA, {
                        menuRef: u,
                        options: E.kB,
                        activeCustomizationOption: r,
                        returnRef: o,
                        focusMenu: m,
                        onMouseEnter: I,
                        onMouseLeave: j,
                        onSelectOption: w,
                        onClose: g,
                    }),
                children: (e) =>
                    (0, i.jsxs)("button", {
                        ...e,
                        ...k("more"),
                        ref: o,
                        "aria-label":
                            null != O
                                ? tA.intl.formatToPlainString(tg.default.QX1VPx, { category: O })
                                : tA.intl.string(tg.default.jepsQ6),
                        "aria-haspopup": "menu",
                        "aria-expanded": p,
                        onMouseEnter: I,
                        onMouseLeave: j,
                        children: [
                            (0, i.jsx)(th.E, {
                                tag: "span",
                                variant: "heading-sm/semibold",
                                color: "none",
                                children: O ?? tA.intl.string(tg.default["iXpQc+"]),
                            }),
                            (0, i.jsx)(ao.ChevronSmallRightIcon, { size: "refresh_sm", color: "currentColor" }),
                        ],
                    }),
            }),
            null != d && (0, i.jsx)(A.A, { id: T, children: (0, E.Cz)(d) }),
        ],
    });
}
var aE = a(195464);
function aj() {
    let e = b.useId(),
        t = b.useId(),
        [a, r] = b.useState(E.v7.BASE),
        n = G().find((e) => e === E.hw[a]),
        s = (0, x.bG)([u.A], () => u.A.isSaving),
        c = tu();
    return (0, i.jsxs)(t4, {
        className: aE.nj,
        children: [
            (0, i.jsx)(tf.D, {
                ref: c,
                variant: "heading-xl/medium",
                color: "none",
                className: aE.DD,
                children: tA.intl.string(tg.default["q2nj/Z"]),
            }),
            (0, i.jsxs)("div", {
                className: aE.ho,
                children: [
                    (0, i.jsx)(aI, {
                        tabIdPrefix: e,
                        panelId: t,
                        activeCustomizationOption: a,
                        onSelectOption: r,
                        blockedTrait: n,
                        disabled: s,
                    }),
                    (0, i.jsx)(ad, { id: t, customizationOption: a, disabled: s }),
                ],
            }),
        ],
    });
}
var aS = a(81466);
function aC() {
    let e = (0, x.bG)([u.A], () => u.A.stats?.games);
    return (0, i.jsxs)(t4, {
        children: [
            (0, i.jsx)(tE, {
                icon: aS.CalendarIcon,
                value: Math.round(e?.totalDaysPlayed ?? 0),
                topPercent: (0, V.bD)(e?.totalDaysPlayedPercentile),
                children: tA.intl.string(tg.default["4N5p4D"]),
            }),
            (0, i.jsx)(t6, { customizationOption: E.v7.AURA }),
        ],
    });
}
var aN = a(687966);
function aT() {
    let e = (0, x.bG)([u.A], () => u.A.stats?.games);
    return (0, i.jsxs)(t4, {
        children: [
            (0, i.jsx)(tE, {
                icon: aN.GameControllerIcon,
                value: Math.round(e?.totalGamesPlayed ?? 0),
                topPercent: (0, V.bD)(e?.totalGamesPlayedPercentile),
                children: tA.intl.string(tg.default.HM2fjf),
            }),
            (0, i.jsx)(t6, { customizationOption: E.v7.WEARABLE }),
        ],
    });
}
var aR = a(534890),
    aO = a(350363);
function aM() {
    let e = (0, x.bG)([u.A], () => u.A.stats?.messages);
    return (0, i.jsxs)(t4, {
        children: [
            (0, i.jsx)(tE, {
                icon: aR.ChatIcon,
                value: Math.round(e?.numMessagesSent ?? 0),
                topPercent: (0, V.bD)(e?.numMessagesSentPercentile),
                children: tA.intl.string(aO.default.wWKySP),
            }),
            (0, i.jsx)(t6, { customizationOption: E.v7.OUTFIT }),
        ],
    });
}
var ay = a(664121);
function aL() {
    let e = (0, x.bG)([u.A], () => u.A.stats?.guilds?.guilds[0]);
    return (0, i.jsxs)(t4, {
        children: [
            (0, i.jsx)(tE, {
                icon: ay.ServerIcon,
                value: Math.round(e?.numDaysInteracted ?? 0),
                topPercent: (0, V.bD)(e?.numDaysInteractedPercentile),
                children: tA.intl.string(tg.default["M+a+t1"]),
            }),
            (0, i.jsx)(t6, { customizationOption: E.v7.HAT }),
        ],
    });
}
var ak = a(831544);
function aD() {
    let e = (0, x.bG)([u.A], () => u.A.stats?.voice),
        t = Math.round(e?.totalVoiceMinutes ?? 0);
    return (0, i.jsxs)(t4, {
        children: [
            (0, i.jsx)(tE, {
                icon: ak.MicrophoneIcon,
                value: t,
                topPercent: (0, V.bD)(e?.totalVoiceMinutesPercentile),
                children: tA.intl.string(tg.default["3/T12E"]),
            }),
            (0, i.jsx)(t6, { customizationOption: E.v7.FACE }),
        ],
    });
}
function aP(e) {
    let { route: t } = e;
    switch (t) {
        case S.gr.VOICE_FACE:
            return (0, i.jsx)(aD, {});
        case S.gr.MESSAGES_OUTFIT:
            return (0, i.jsx)(aM, {});
        case S.gr.SERVERS_HEADWEAR:
            return (0, i.jsx)(aL, {});
        case S.gr.EMOJI_SHOES:
            return (0, i.jsx)(ae, {});
        case S.gr.GAMES_WEARABLE:
            return (0, i.jsx)(aT, {});
        case S.gr.GAME_TIME_AURA:
            return (0, i.jsx)(aC, {});
        case S.gr.FINALIZE_CHARACTER:
            return (0, i.jsx)(aj, {});
        default:
            return null;
    }
}
var aU = a(358618),
    aG = a(983851),
    aH = a(793920),
    aF = a(893007),
    aK = a(738964);
function aB(e) {
    return `${Math.round(e)}%`;
}
function az() {
    let { volume: e, isMuted: t } = (0, x.cf)([u.A], () => ({ volume: u.A.volume, isMuted: u.A.isMuted })),
        a = b.useRef(null),
        r = b.useRef(null),
        [n, s] = b.useState(!1),
        [c, d] = b.useState(!1),
        [l, h] = b.useState(!1),
        [f, p] = b.useState(!1),
        _ = b.useRef(null),
        m = b.useRef(!1),
        g = t ? 0 : Math.round(100 * e),
        A = !f && (n || c || l),
        v = 0 === g ? aU.VoiceXIcon : g > 50 ? aG.VoiceNormalIcon : aH.VoiceLowIcon;
    (b.useLayoutEffect(() => {
        null != r.current && (r.current.volume = e);
    }, [e]),
        (0, B.l0)(() => {
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
    return (0, i.jsxs)("div", {
        ref: a,
        className: aK.kL,
        onMouseEnter: I,
        onMouseLeave: E,
        onFocus: j,
        onPointerDownCapture: S,
        onBlur: T,
        onKeyDownCapture: C,
        onKeyDown: R,
        children: [
            (0, i.jsx)(et, {
                size: "sm",
                className: A ? aK.Gg : void 0,
                "aria-label": tA.intl.string(t ? aO.default.GN0uv6 : aO.default.pjF33X),
                onClick: o.K8,
                children: (0, i.jsx)(v, { size: "xs", color: "currentColor" }),
            }),
            A
                ? (0, i.jsx)("div", {
                      className: aK.xJ,
                      children: (0, i.jsx)(aF.A, {
                          value: g,
                          minValue: 0,
                          maxValue: 100,
                          onChange: w,
                          onChangeEnd: N,
                          formatValue: aB,
                          "aria-label": tA.intl.string(tA.t.xPHVBs),
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
let aV =
        "https://cdn.discordapp.com/assets/content/914f6f5e36c680d00944ba2e6278b45f8b1da722692e101b5986cf7be56c4979.mp3",
    aW =
        "https://cdn.discordapp.com/assets/content/d1dfc8280cfbd578f18728598db893d807d9ece6b511389848b7308c399f07a0.mp3";
var aq = a(477155),
    aY = a(866665),
    aX = a(417270),
    aZ = a(935286),
    aQ = a(405433),
    aJ = a(289873),
    a$ = a(621466);
function a0(e, t) {
    let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    b.useEffect(() => {
        if (!a) return (window.addEventListener("keydown", r), () => window.removeEventListener("keydown", r));
        function r(a) {
            (0, a$.vq)(a.target, HTMLTextAreaElement) ||
                (0, a$.vq)(a.target, HTMLInputElement) ||
                (a.key === e && t(a));
        }
    }, [e, t, a]);
}
var a1 = a(652215),
    a2 = a(650583);
function a3(e) {
    let { source: t, onClick: a, disabled: r = !1 } = e,
        i = tR(t),
        n = b.useRef(!1);
    function s() {
        r || i();
    }
    return {
        playSound: s,
        onPointerDown: function (e) {
            e.button === a1.hE4.PRIMARY && ((n.current = !0), s());
        },
        onKeyDown: function (e) {
            (e.key === a2.dh.ENTER || e.key === a2.dh.SPACE) && ((n.current = !0), e.repeat || s());
        },
        onClickWithSound: function () {
            (n.current || s(), (n.current = !1), a());
        },
    };
}
var a8 = a(753875);
function a7(e) {
    let { "aria-label": t, "aria-describedby": a, icon: r, onClick: n, disabled: s = !1 } = e,
        {
            playSound: c,
            onPointerDown: d,
            onKeyDown: l,
            onClickWithSound: o,
        } = a3({ source: aV, onClick: n, disabled: s });
    return (
        a0(
            "ArrowLeft",
            function (e) {
                (e.repeat || c(), n());
            },
            s,
        ),
        (0, i.jsx)(et, {
            onPointerDown: d,
            onKeyDown: l,
            onClick: o,
            size: "md",
            className: _()(a8.A4, a8.aX),
            "aria-disabled": s,
            "aria-describedby": a,
            "aria-label": t,
            children: (0, i.jsx)(r, { color: "currentColor" }),
        })
    );
}
function a5(e) {
    let {
            "aria-label": t,
            "aria-describedby": a,
            children: r,
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
        } = a3({ source: aW, onClick: n, disabled: d });
    return (
        a0(
            "ArrowRight",
            function (e) {
                (e.repeat || l(), n());
            },
            d,
        ),
        (0, i.jsx)(ea, {
            onPointerDown: o,
            onKeyDown: u,
            onClick: h,
            size: s,
            className: _()(a8.A4, a8.K2, c),
            "aria-disabled": d,
            "aria-describedby": a,
            "aria-label": t,
            children: r,
        })
    );
}
function a6(e) {
    let { "aria-describedby": t, onClick: a, disabled: r } = e;
    return (0, i.jsx)(a7, {
        "aria-label": tA.intl.string(tA.t["13/7kX"]),
        "aria-describedby": t,
        icon: aq.ArrowSmallLeftIcon,
        onClick: a,
        disabled: r,
    });
}
function a9(e) {
    let { onClick: t } = e,
        { onPointerDown: a, onKeyDown: r, onClickWithSound: n } = a3({ source: aW, onClick: t });
    return (0, i.jsx)(aY.m, {
        text: tA.intl.string(tg.default.cWdGf9),
        ariaHidden: !0,
        children: (0, i.jsx)(et, {
            onPointerDown: a,
            onKeyDown: r,
            onClick: n,
            size: "md",
            className: _()(a8.A4, a8.eZ),
            "aria-label": tA.intl.string(tg.default.cWdGf9),
            children: (0, i.jsx)(aX.RetryIcon, { color: "currentColor" }),
        }),
    });
}
function a4(e) {
    let { "aria-describedby": t, onClick: a, disabled: r } = e;
    return (0, i.jsx)(a5, {
        size: "md",
        "aria-label": tA.intl.string(tA.t.PDTjLN),
        "aria-describedby": t,
        onClick: a,
        disabled: r,
        children: (0, i.jsx)(aZ.ArrowSmallRightIcon, { color: "currentColor" }),
    });
}
function re(e) {
    let { onClick: t, disabled: a } = e;
    return (0, i.jsxs)(a5, {
        size: "custom",
        className: a8.GA,
        "aria-label": tA.intl.string(tA.t.i4jeWR),
        onClick: t,
        disabled: a,
        children: [
            (0, i.jsx)(tp, { variant: "mono-md/normal", className: a8.Pf, children: tA.intl.string(tA.t.i4jeWR) }),
            (0, i.jsx)(aZ.ArrowSmallRightIcon, { size: "refresh_sm", color: "currentColor" }),
        ],
    });
}
function rt(e) {
    let { onClick: t, disabled: a } = e;
    return (0, i.jsxs)(a5, {
        size: "custom",
        className: _()(a8.GA, a8.Bq),
        "aria-label": tA.intl.string(tA.t.RDE0Sc),
        onClick: t,
        disabled: a,
        children: [
            (0, i.jsx)(th.E, {
                variant: "mono-md/bold",
                color: "none",
                className: a8.Pf,
                children: tA.intl.string(tA.t.RDE0Sc),
            }),
            (0, i.jsx)(aQ.ShareIcon, { size: "refresh_sm", color: "currentColor" }),
        ],
    });
}
function ra(e) {
    let { onBack: t, isRouteBlocked: a, blockedTraitDescriptionId: r } = e,
        n = (0, x.bG)([u.A], () => u.A.isSaving);
    return (0, i.jsx)(a6, {
        "aria-describedby": r,
        onClick: function () {
            n || t();
        },
        disabled: n || a,
    });
}
function rr(e) {
    let { onNext: t, navigate: a, isRouteBlocked: r, blockedTraitDescriptionId: s } = e,
        c = (0, x.bG)([u.A], () => u.A.isSaving),
        d = c || r;
    async function l() {
        if (c) return;
        let e = (0, U.XI)(u.A.selectedCharacterTraits);
        (await (0, o.yE)(e)) ? t() : (0, n.P0)({ text: tA.intl.string(tA.t.fEptJP), variant: "critical" });
    }
    function h() {
        a(l);
    }
    let {
        playSound: f,
        onPointerDown: b,
        onKeyDown: p,
        onClickWithSound: m,
    } = a3({
        source: "https://cdn.discordapp.com/assets/content/1514d999969512ff06ade75018213676ebaf3698af26c0b1b7d3243ec480f920.mp3",
        onClick: h,
        disabled: d,
    });
    return (
        a0(
            "ArrowRight",
            function (e) {
                (e.repeat || f(), h());
            },
            d,
        ),
        (0, i.jsxs)(ea, {
            onPointerDown: b,
            onKeyDown: p,
            onClick: m,
            size: "custom",
            className: _()(a8.A4, a8.K2, a8.GA),
            "aria-disabled": d,
            "aria-describedby": s,
            "aria-label": tA.intl.string(tA.t["R3BPH+"]),
            children: [
                (0, i.jsx)(th.E, {
                    variant: "mono-md/normal",
                    color: "none",
                    className: a8.Pf,
                    children: tA.intl.string(tA.t["R3BPH+"]),
                }),
                c
                    ? (0, i.jsx)(aJ.y, { type: aJ.t.SPINNING_CIRCLE_SIMPLE, className: a8.u1, itemClassName: a8.$N })
                    : (0, i.jsx)(aZ.ArrowSmallRightIcon, { size: "refresh_sm", color: "currentColor" }),
            ],
        })
    );
}
function ri(e) {
    let { activeRoute: t, blockedTrait: a, blockedTraitDescriptionId: r, onBack: n, onNext: s, onReplay: c } = e,
        d = null != a,
        l = b.useMemo(() => (0, eq.throttle)((e) => e(), 500, { trailing: !1 }), []);
    function o(e) {
        null != a ? Y(a) : l(e);
    }
    switch (t) {
        case S.gr.HOME:
            return null;
        case S.gr.FINALIZE_CHARACTER:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(ra, { onBack: () => o(n), isRouteBlocked: d, blockedTraitDescriptionId: r }),
                    (0, i.jsx)(rr, { onNext: s, navigate: o, isRouteBlocked: d, blockedTraitDescriptionId: r }),
                ],
            });
        case S.gr.SUMMARY:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(a6, { onClick: () => l(n) }),
                    (0, i.jsx)(a9, { onClick: () => l(c) }),
                    (0, i.jsx)(rt, { onClick: () => l(s) }),
                ],
            });
        case S.gr.SHARE:
            return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(a6, { onClick: () => l(n) }), (0, i.jsx)(re, { onClick: () => l(s) })],
            });
        default:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(a6, { "aria-describedby": r, onClick: () => o(n), disabled: d }),
                    (0, i.jsx)(a4, { "aria-describedby": r, onClick: () => o(s), disabled: d }),
                ],
            });
    }
}
function rn(e) {
    let { className: t } = e;
    return (0, i.jsx)(ti, {
        animatedSrc:
            "https://cdn.discordapp.com/assets/content/02e9ae4cdbec0b2adef22c9a5659f5c7340e399cc8932e8af6d41e62a37644ae.png",
        staticSrc:
            "https://cdn.discordapp.com/assets/content/f08be0abd0d224b5f7e1e5d6c1ef8e4d24cddcb712e2c624dcc6ea3d136818d5.png",
        className: t,
    });
}
var rs = a(771639);
let rc = { "--custom-checkpoint-screen-vertical-inset": "88px" };
function rd(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", { className: rs.n, style: rc, children: t });
}
var rl = a(639331);
let ro = {
    "--custom-checkpoint-intro-fade-in-delay": "1800ms",
    "--custom-checkpoint-intro-fade-in-duration": "1000ms",
};
function ru() {
    let e = (0, x.bG)([u.A], () => u.A.fetchState !== u.T.SUCCESS || null != u.A.stats),
        t = tu();
    return (0, i.jsx)(rd, {
        children: (0, i.jsxs)("div", {
            className: rl.Qs,
            style: ro,
            children: [
                (0, i.jsxs)("div", {
                    ref: t,
                    className: rl.Ok,
                    role: "heading",
                    "aria-level": 2,
                    children: ["2026", !e && (0, i.jsx)(rn, { className: rl.gi })],
                }),
                (0, i.jsxs)("div", {
                    className: rl.eH,
                    children: [
                        (0, i.jsx)(tp, {
                            tag: "p",
                            variant: "heading-xl/medium",
                            children: tA.intl.string(e ? tg.default["7YmUVu"] : tg.default["Fyr+NW"]),
                        }),
                        !e &&
                            (0, i.jsx)(tp, {
                                tag: "p",
                                variant: "heading-xl/medium",
                                children: tA.intl.string(tg.default["2GRr6H"]),
                            }),
                    ],
                }),
            ],
        }),
    });
}
(a(134528), a(947204));
var rh = a(675970),
    rf = a(559106),
    rb = a(366056),
    rp = a(292801),
    r_ = a(155718),
    rm = a(294454),
    rx = a(489414),
    rg = a(878358),
    rA = a(383233),
    rv = a(819648),
    rw = a(677059);
function rI(e) {
    let { children: t } = e;
    return (0, i.jsx)(tp, { variant: "heading-xxl/medium", className: rw.h, children: t });
}
function rE(e) {
    let { accessibilityLabel: t, className: a, children: r, ref: n } = e;
    return (0, i.jsxs)("div", {
        ref: n,
        role: "heading",
        "aria-level": 2,
        children: [
            (0, i.jsx)("div", { className: a, "aria-hidden": !0, children: r }),
            (0, i.jsx)(A.A, { children: t }),
        ],
    });
}
var rj = a(100391);
function rS(e) {
    let { icon: t, children: a } = e;
    return (0, i.jsxs)("div", {
        className: rj.D,
        children: [
            (0, i.jsx)(t, { size: "md", color: "currentColor" }),
            (0, i.jsx)(tp, { variant: "heading-lg/semibold", className: rj.Q, children: a }),
        ],
    });
}
function rC(e) {
    let { icon: t, children: a } = e;
    return (0, i.jsxs)("div", {
        className: rj.D,
        children: [
            (0, i.jsx)(t, { size: "md", color: "currentColor" }),
            (0, i.jsx)(t_, { variant: "heading-lg/semibold", className: rj.Q, children: a }),
        ],
    });
}
var rN = a(456410);
function rT(e) {
    let { name: t, label: a, checked: r, onSelect: n, children: s } = e;
    return (0, i.jsx)(rf.vN, {
        within: !0,
        children: (0, i.jsxs)("label", {
            className: _()(rN.uK, { [rN.KD]: r }),
            children: [
                (0, i.jsx)(A.A, {
                    children: (0, i.jsx)("input", { type: "radio", name: t, checked: r, onChange: n, "aria-label": a }),
                }),
                r ? (0, i.jsx)("div", { className: rN.Gt, "aria-hidden": !0 }) : null,
                (0, i.jsx)("div", { className: rN.Nr, "aria-hidden": !0, children: s }),
            ],
        }),
    });
}
function rR() {
    let e = (0, x.bG)([u.A], () => u.A.character),
        t = (0, x.bG)([u.A], () => u.A.stats),
        a = b.useId(),
        r = tu(),
        s = b.useMemo(() => {
            var a, r;
            return ((a = e),
            (r = t),
            null != a && null != r
                ? [rh.Q.CHARACTER_ONLY, rh.Q.DEFAULT, rh.Q.STATS_ONLY]
                : null != a
                  ? [rh.Q.CHARACTER_ONLY]
                  : null != r
                    ? [rh.Q.STATS_ONLY]
                    : []).map((a) => ({ cardType: a, checkpointData: (0, rv.Go)(a, e, t) }));
        }, [e, t]),
        [c, d] = b.useState(
            () =>
                (
                    s.find((e) => {
                        let { cardType: t } = e;
                        return t === rh.Q.DEFAULT;
                    }) ?? s.at(0)
                )?.cardType,
        ),
        l = s.find((e) => {
            let { cardType: t } = e;
            return t === c;
        }),
        h = tR(tN),
        {
            onPointerDown: p,
            onKeyDown: _,
            onClickWithSound: m,
        } = a3({
            source: aW,
            onClick: function () {
                if (null == l) return;
                let { cardType: e, checkpointData: t } = l;
                (0, rm.fO)({
                    message: new rA.Ay({
                        content: "",
                        components: [{ type: r_.I5.CHECKPOINT_CARD, id: (0, rx.X1)("0"), checkpointData: t }],
                    }),
                    source: "checkpoint",
                    customSendHandler: async (t, a, r) => {
                        let { withMessage: i } = a;
                        r(!0);
                        try {
                            (await (0, o.jA)(t, i ?? "", e),
                                (0, f.Pe)(e),
                                (0, rm.Be)(),
                                (0, n.P0)({ text: tA.intl.string(tA.t.kwmYkt), variant: "success" }));
                        } catch {
                            (0, n.P0)({ text: tA.intl.string(tA.t.iufib1), variant: "critical" });
                        } finally {
                            r(!1);
                        }
                    },
                });
            },
        });
    return null == l
        ? null
        : (0, i.jsx)(rd, {
              children: (0, i.jsxs)("div", {
                  className: rN.uM,
                  children: [
                      (0, i.jsxs)("div", {
                          className: rN.wx,
                          children: [
                              (0, i.jsxs)(rE, {
                                  ref: r,
                                  className: rN.R_,
                                  accessibilityLabel: tA.intl.string(tg.default.P5zyko),
                                  children: [
                                      (0, i.jsx)(rS, {
                                          icon: rb.ExperimentalCheckpointIcon,
                                          children: tA.intl.string(aO.default.ir6nEQ),
                                      }),
                                      (0, i.jsx)(tp, {
                                          variant: "display-lg",
                                          className: rN.Vy,
                                          children: tA.intl.string(tA.t.RDE0Sc),
                                      }),
                                  ],
                              }),
                              (0, i.jsx)("div", {
                                  className: rN.h_,
                                  children: (0, i.jsx)(rI, { children: tA.intl.string(tg.default.KXDPot) }),
                              }),
                          ],
                      }),
                      (0, i.jsx)("div", {
                          role: "radiogroup",
                          "aria-label": tA.intl.string(tg.default.KXDPot),
                          className: rN.kR,
                          children: s.map((e) => {
                              let { cardType: t, checkpointData: r } = e;
                              return (0, i.jsx)(
                                  rT,
                                  {
                                      name: a,
                                      label: (function (e) {
                                          switch (e) {
                                              case rh.Q.CHARACTER_ONLY:
                                                  return tA.intl.string(tg.default.tUU3fe);
                                              case rh.Q.DEFAULT:
                                                  return tA.intl.string(tg.default.DZQzJn);
                                              case rh.Q.STATS_ONLY:
                                                  return tA.intl.string(tg.default.e2UHGT);
                                          }
                                      })(t),
                                      checked: t === l.cardType,
                                      onSelect: () => {
                                          (h(), d(t));
                                      },
                                      children: (0, i.jsx)(rg.A, { checkpointData: r }),
                                  },
                                  t,
                              );
                          }),
                      }),
                      (0, i.jsxs)(ea, {
                          onPointerDown: p,
                          onKeyDown: _,
                          onClick: m,
                          size: "custom",
                          className: rN.sY,
                          "aria-label": tA.intl.string(tA.t.I3ltXO),
                          children: [
                              (0, i.jsx)(th.E, {
                                  variant: "mono-md/bold",
                                  color: "none",
                                  className: rN.RC,
                                  children: tA.intl.string(tA.t.I3ltXO),
                              }),
                              (0, i.jsx)(rp.ArrowAngleRightUpIcon, { size: "refresh_sm", color: "currentColor" }),
                          ],
                      }),
                  ],
              }),
          });
}
var rO = a(206701),
    rM = a(782134),
    ry = a(998304),
    rL = a(975571),
    rk = a(427262),
    rD = a(438389);
let rP = (0, ry.j5)(W.Kr);
function rU(e) {
    let { onStart: t } = e,
        a = (0, x.bG)([D.default], () => D.default.getCurrentUser()),
        r = (0, rk.tx)(a),
        n = (0, x.bG)([Z.Ay], () => Z.Ay.useReducedMotion),
        { playSound: s, onPointerDown: c, onKeyDown: d, onClickWithSound: l } = a3({ source: aW, onClick: t });
    return (
        a0("ArrowRight", function (e) {
            (e.repeat || s(), t());
        }),
        (0, i.jsxs)(rd, {
            children: [
                (0, i.jsxs)("div", {
                    className: rD.Qs,
                    children: [
                        (0, i.jsxs)("div", {
                            className: rD.wx,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: rD.Qq,
                                    children: [
                                        (0, i.jsx)(t_, {
                                            variant: "display-lg",
                                            className: rD.DD,
                                            children: tA.intl.string(aO.default["CdU/PF"]),
                                        }),
                                        (0, i.jsx)(tp, {
                                            variant: "heading-xxl/medium",
                                            children: tA.intl.formatToPlainString(tg.default.xhZ23b, { username: r }),
                                        }),
                                    ],
                                }),
                                (0, i.jsx)("div", {
                                    className: rD.CB,
                                    children: (0, i.jsx)(rO.U, {
                                        artboard: "Entry",
                                        className: rD.lW,
                                        fit: "contain",
                                        withReducedMotion: "short-loop",
                                        dataBinding: { iconColor: rP, reducedMotion: n },
                                    }),
                                }),
                            ],
                        }),
                        (0, i.jsxs)(ea, {
                            onPointerDown: c,
                            onKeyDown: d,
                            onClick: l,
                            size: "custom",
                            className: rD.ni,
                            "aria-label": tA.intl.string(tA.t.I0v0Qv),
                            children: [
                                (0, i.jsx)(rM.PlayIcon, { size: "refresh_sm", color: "currentColor" }),
                                (0, i.jsx)(tp, {
                                    variant: "mono-md/normal",
                                    className: rD.qK,
                                    children: tA.intl.string(tA.t.I0v0Qv),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: rD.qr,
                    children: [
                        (0, i.jsx)(tp, {
                            variant: "body-sm/medium",
                            className: rD.ed,
                            children: tA.intl.format(tg.default.hcNhyq, {
                                learnMoreHook: (e, t) =>
                                    (0, i.jsx)(
                                        tW.Anchor,
                                        {
                                            className: rD.nf,
                                            href: rL.A.getArticleURL(a1.MVz.CHECKPOINT),
                                            useDefaultUnderlineStyles: !1,
                                            children: e,
                                        },
                                        t,
                                    ),
                            }),
                        }),
                        (0, i.jsx)(tp, {
                            variant: "body-md/medium",
                            className: rD.al,
                            children: tA.intl.format(aO.default.g476ZL, { name: "Exyl" }),
                        }),
                    ],
                }),
            ],
        })
    );
}
var rG = a(565645),
    rH = a(141881);
function rF(e) {
    let { children: t } = e;
    return (0, i.jsx)(tx, { className: rH.l, children: t });
}
var rK = a(765671),
    rB = a(663385),
    rz = a(469228),
    rV = a(406956);
let rW = (0, ry.j5)(W.Kr);
function rq(e) {
    let { value: t, alignment: a = "left", className: r } = e,
        n = (0, x.bG)([Z.Ay], () => Z.Ay.useReducedMotion),
        [s, c] = b.useState(0),
        { isLoaded: d, onLoad: l } = (function () {
            let [e, t] = b.useState(!1);
            return { isLoaded: e, onLoad: b.useCallback(() => t(!0), []) };
        })(),
        o = n ? t : s;
    b.useEffect(() => {
        if (n || !d) return;
        let e = performance.now(),
            a = requestAnimationFrame(function r(i) {
                let n = Math.min((i - e) / 500, 1);
                (c(Math.round(t * n)), n < 1 && (a = requestAnimationFrame(r)));
            });
        return () => cancelAnimationFrame(a);
    }, [t, n, d]);
    let u = "center" === a ? rB.m : rz.w;
    return (0, i.jsxs)("div", {
        className: _()(rV.lY, r),
        children: [
            (0, i.jsx)("div", { className: rV.VL, children: t }),
            (0, i.jsx)(u, {
                className: rV.lW,
                fit: "layout",
                withReducedMotion: "short-loop",
                dataBinding: { DisplayValue: o, TextColor: rW },
                onLoad: l,
            }),
            (0, i.jsx)(A.A, { children: t.toLocaleString(tA.intl.currentLocale) }),
        ],
    });
}
var rY = a(434911);
function rX(e) {
    let { value: t } = e,
        { ref: a, width: r } = (0, rK.Ay)(),
        { ref: n, width: s } = (0, rK.Ay)(),
        c = null != r && null != s ? Math.min(1, r / s) : 1;
    return (0, i.jsxs)("div", {
        ref: a,
        className: rY.ai,
        style: { height: 200 * c },
        children: [
            (0, i.jsx)("span", { ref: n, className: _()(rY.Qq, rY.xP), children: t }),
            (0, i.jsx)(rq, { value: t }),
        ],
    });
}
function rZ(e) {
    let { value: t } = e;
    return (0, i.jsxs)("div", {
        className: rY.dJ,
        children: [
            "number" == typeof t
                ? (0, i.jsx)(rX, { value: t })
                : (0, i.jsx)(tp, { variant: "heading-xxl/medium", className: rY.Qq, children: t }),
            (0, i.jsx)(rn, { className: rY.gi }),
        ],
    });
}
var rQ = a(445199),
    rJ = a(205524),
    r$ = a(690521),
    r0 = a(152321);
let r1 = [0, 0, 2],
    r2 = [0, 1, 0],
    r3 = [0, 0, 0],
    r8 = `
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
    r7 = `
precision mediump float;

varying vec2 v_texcoord;
varying highp vec3 v_lighting;

uniform sampler2D u_texture;

void main() {
  highp vec4 texelColor = texture2D(u_texture, v_texcoord);
  gl_FragColor = vec4(texelColor.rgb * v_lighting, texelColor.a);
}
`,
    r5 = [
        -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5,
        -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5,
        0.5, 0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, -0.5,
        -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5,
        -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5,
        -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5,
    ],
    r6 = [
        0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0,
        1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0,
    ],
    r9 = [
        0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
        1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
        -1, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
        1, 0, 0,
    ];
function r4(e) {
    let t,
        { emoji: a } = e,
        [r, n] = b.useState(null),
        [s, c] = b.useState(null),
        d = b.useRef(new Image()),
        [l, o] = b.useState(null),
        [u, h] = b.useState(!1),
        f = b.useRef(0),
        p = b.useRef(0),
        m = b.useRef(45),
        g = b.useRef(45),
        A = (0, x.bG)([Z.Ay], () => Z.Ay.useReducedMotion),
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
                i = r?.getContext("webgl");
            if (null == i || null == r || null == s) return;
            t.current = i;
            let n = i.createShader(i.VERTEX_SHADER),
                c = i.createShader(i.FRAGMENT_SHADER);
            if (null == n || null == c) return;
            if (
                (i.shaderSource(n, r8),
                i.shaderSource(c, r7),
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
                i.bufferData(i.ARRAY_BUFFER, new Float32Array(r9), i.STATIC_DRAW),
                i.vertexAttribPointer(f, 3, i.FLOAT, !1, 0, 0),
                i.enableVertexAttribArray(f));
            let _ = i.createBuffer();
            (i.bindBuffer(i.ARRAY_BUFFER, _),
                (e = new Float32Array(r5)),
                i.bufferData(i.ARRAY_BUFFER, e, i.STATIC_DRAW));
            let x = i.createBuffer();
            (i.bindBuffer(i.ARRAY_BUFFER, x), i.bufferData(i.ARRAY_BUFFER, new Float32Array(r6), i.STATIC_DRAW));
            let A = rQ.DF(60);
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
                    let s = rQ.DF(m.current),
                        c = rQ.DF(g.current);
                    (i.clear(i.COLOR_BUFFER_BIT | i.DEPTH_BUFFER_BIT),
                        i.useProgram(d),
                        i.enableVertexAttribArray(l),
                        i.bindBuffer(i.ARRAY_BUFFER, _),
                        i.vertexAttribPointer(l, 3, i.FLOAT, !1, 0, 0),
                        i.enableVertexAttribArray(o),
                        i.bindBuffer(i.ARRAY_BUFFER, x),
                        i.vertexAttribPointer(o, 2, i.FLOAT, !1, 0, 0));
                    let f = r.clientWidth / r.clientHeight,
                        p = rJ.fN(rJ.vt(), A, f, 1, 2e3),
                        v = rJ.t5(rJ.vt(), r1, r3, r2),
                        w = rJ.lw(rJ.vt(), p, v),
                        I = rJ.vt();
                    (rJ.eL(I, I, s), rJ.Z8(I, I, c));
                    let E = rJ.lw(rJ.vt(), w, I),
                        j = rJ.vt();
                    (rJ.B8(j, I),
                        rJ.mg(j, j),
                        i.uniformMatrix4fv(b, !1, j),
                        i.uniformMatrix4fv(u, !1, E),
                        i.uniform1i(h, 0),
                        i.drawArrays(i.TRIANGLES, 0, 36),
                        (a = requestAnimationFrame(e)));
                })),
                () => cancelAnimationFrame(a)
            );
        }, [m, g, r, s]));
    let N = b.useCallback(() => {
        let e = s?.getContext("2d");
        null != s &&
            null != e &&
            ((e.fillStyle = "black"),
            e.fillRect(0, 0, s.width, s.height),
            e.drawImage(d.current, 0, 0, s.width, s.height),
            (e.fillStyle = W.Kr),
            e.fillRect(0, 0, s.width, 2),
            e.fillRect(0, 0, 2, s.height),
            e.fillRect(0, s.height - 2, s.width, 2),
            e.fillRect(s.width - 2, 0, 2, s.height),
            o(a),
            h(!0));
    }, [a, d, s]);
    (b.useEffect(() => {
        null != s &&
            ((d.current.crossOrigin = "anonymous"), (d.current.src = (0, r$.Ez)(a, 512)), (d.current.onload = N));
    }, [a, N, d, s]),
        b.useEffect(
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
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("canvas", {
                    className: _()(r0.Ji, { [r0.q4]: !u }),
                    ref: n,
                    height: 512,
                    width: 512,
                    onMouseDown: T,
                }),
                (0, i.jsx)("canvas", { className: r0.R, ref: c, height: 512, width: 512 }),
            ],
        })
    );
}
var ie = a(826820);
let it = [];
function ia(e) {
    let { emojiStats: t } = e,
        a = Math.round(t?.numEmojisSent ?? 0),
        r = (0, V.bD)(t?.numEmojisSentPercentile);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: ie.dJ,
                children: [
                    (0, i.jsx)(rC, {
                        icon: to.EmojiSlightlySmilingFaceIcon,
                        children: tA.intl.string(tg.default.ZTDCIv),
                    }),
                    (0, i.jsx)(rq, { value: a }),
                ],
            }),
            (0, i.jsx)(rI, {
                children:
                    null != r
                        ? tA.intl.format(tg.default.o7vDrk, {
                              percent: r,
                              percentHook: (e, t) => (0, i.jsx)(rF, { children: e }, t),
                          })
                        : tA.intl.format(tg.default.NFptic, { numEmojis: a }),
            }),
        ],
    });
}
function ir(e) {
    let { numEmojisSent: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: ie.dJ,
                children: [
                    (0, i.jsx)(rC, {
                        icon: to.EmojiSlightlySmilingFaceIcon,
                        children: tA.intl.string(tg.default.ZTDCIv),
                    }),
                    (0, i.jsx)(rZ, { value: t }),
                ],
            }),
            (0, i.jsx)(rI, { children: tA.intl.format(tg.default["660/Rr"], { numEmojis: (0, V.wj)(t) }) }),
        ],
    });
}
function ii() {
    let e = (0, x.bG)([u.A], () => u.A.stats?.emojis),
        t = (0, x.bG)([u.A], () => (0, V.y7)(u.A.stats)),
        a = (0, x.bG)([u.A], () => u.A.globalStats?.emojis),
        r = !t && null != a,
        n = (r ? a.emojis : e?.emojis) ?? it,
        [s, c] = b.useState(0),
        d = n[s],
        l = tR(tN);
    return (0, i.jsx)(rd, {
        children: (0, i.jsxs)("div", {
            className: ie.kL,
            children: [
                (0, i.jsx)("div", { className: ie.KY, children: null != d && (0, i.jsx)(r4, { emoji: d }) }),
                (0, i.jsxs)("div", {
                    className: ie.C,
                    children: [
                        r ? (0, i.jsx)(ir, { numEmojisSent: a.numEmojisSent }) : (0, i.jsx)(ia, { emojiStats: e }),
                        (0, i.jsx)("div", {
                            className: ie.gm,
                            children: n.map((e, t) =>
                                (0, i.jsx)(
                                    is,
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
function is(e) {
    let { emoji: t, rank: a, isActive: r, onClick: n } = e,
        s = !(0, x.bG)([Z.Ay], () => Z.Ay.useReducedMotion) && !0 === t.animated;
    return (0, i.jsxs)(et, {
        size: "custom",
        className: ie._X,
        onClick: n,
        "aria-label": tA.intl.formatToPlainString(tg.default["S5+pRg"], { emojiName: t.name, rank: a }),
        "aria-pressed": r,
        children: [
            (0, i.jsx)(rG.A, { className: ie.Zg, emojiId: t.id, emojiName: t.name, animated: s }),
            (0, i.jsx)(tp, { variant: "mono-md/bold", className: ie.Tm, children: a }),
        ],
    });
}
var ic = a(360450),
    id = a(214947),
    il = a(939249),
    io = a(597770),
    iu = a(559647),
    ih = a(95369),
    ib = a(570287),
    ip = a(486020);
let i_ = { 0: 1100, 1: 1e3 };
var im = a(801305);
let ix = [],
    ig = (0, ry.j5)(W.Kr),
    iA = { r: 0, g: 0, b: 0, a: 1 },
    iv = {
        "Avatar01/Stroke": iA,
        "Avatar01/Fill": ig,
        "Avatar02/Stroke": iA,
        "Avatar02/Fill": ig,
        "Avatar03/Stroke": iA,
        "Avatar03/Fill": ig,
        "Avatar04/Stroke": iA,
        "Avatar04/Fill": ig,
        "Avatar05/Stroke": iA,
        "Avatar05/Fill": ig,
        ConnectorColor: ig,
    };
function iw(e) {
    return null != e ? ip.Ay.getUserAvatarURL(e, !1, 160, "png") : void 0;
}
function iI(e) {
    let t,
        { route: a, onNextStep: r, onPreviousStep: n } = e,
        s = (0, x.bG)([u.A], () => u.A.stats?.users ?? ix),
        c = (0, x.bG)([u.A], () => u.A.stats?.sidekick),
        d = (0, x.bG)([D.default], () => D.default.getCurrentUser()),
        l = (0, x.bG)([Z.Ay], () => Z.Ay.useReducedMotion),
        o = b.useRef(null),
        h = b.useRef(void 0),
        { animationState: f, isTransitioning: p } = (function (e, t) {
            var a;
            let [r, i] = b.useState({ route: e, hasShownSquad: e === S.gr.SQUAD, transition: null });
            r.route !== e &&
                i({
                    route: e,
                    hasShownSquad: r.hasShownSquad || e === S.gr.SQUAD,
                    transition:
                        ((a = r.route),
                        t
                            ? null
                            : a === S.gr.SQUAD && e === S.gr.SIDEKICK
                              ? 0
                              : a === S.gr.SIDEKICK && e === S.gr.SQUAD
                                ? 1
                                : null),
                });
            let { transition: n } = r;
            b.useEffect(() => {
                if (null == n) return;
                let e = setTimeout(() => i((e) => ({ ...e, transition: null })), i_[n]);
                return () => clearTimeout(e);
            }, [n]);
            let s = e === S.gr.SIDEKICK || e === S.gr.SIDEKICK_LEAVE;
            return {
                animationState: (function (e) {
                    let { route: t, hasShownSquad: a, transition: r, isReducedMotion: i } = e;
                    switch (t) {
                        case S.gr.SQUAD_TRANSITION:
                            return 5 * !!a;
                        case S.gr.SQUAD:
                            return 1;
                        case S.gr.SIDEKICK:
                            return 0 === r ? 2 : 3;
                        case S.gr.SIDEKICK_LEAVE:
                            return i ? 3 : 4;
                        default:
                            return 0;
                    }
                })({ route: e, hasShownSquad: r.hasShownSquad, transition: n, isReducedMotion: t }),
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
            if (l) return void r();
            let e = setTimeout(r, 1e3);
            return () => clearTimeout(e);
        }, [r, n, l, a]));
    let [m, g] = s,
        v = (0, rk.tx)(m) ?? "",
        w = (0, rk.tx)(g) ?? "",
        I = v.toLocaleUpperCase(),
        E = w.toLocaleUpperCase(),
        j = (0, rk.tx)(c?.user) ?? "",
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
    return (0, i.jsxs)(rd, {
        children: [
            (0, i.jsx)(ic.m, {
                ref: o,
                className: im.lW,
                fit: "contain",
                autoplay: !1,
                onLoad: R,
                withReducedMotion: "play",
                dataBinding: {
                    ...iv,
                    AnimationState: f,
                    "Avatar01/img": iw(c?.user),
                    "Avatar02/img": iw(g),
                    "Avatar03/img": iw(m),
                    "Avatar04/img": iw(c?.user),
                    "Avatar05/img": iw(d),
                    "Avatar01/Username": j.toLocaleUpperCase(),
                    "Avatar02/Username": E,
                    "Avatar03/Username": I,
                    "Avatar04/Username": j.toLocaleUpperCase(),
                    twoFriends: N,
                    reducedMotion: l,
                },
            }),
            (0, i.jsx)(es, {
                visible: a === S.gr.SQUAD_TRANSITION,
                enter: e7,
                exit: e5,
                mountAfterDelay: !0,
                className: _()(im.Qs, im.kY),
                children: (0, i.jsx)(iE, {}),
            }),
            (0, i.jsxs)(es, {
                visible: a === S.gr.SQUAD && !p,
                enter: e7,
                exit: e5,
                mountAfterDelay: !0,
                className: im.Qs,
                children: [
                    (0, i.jsx)(ij, {
                        title: tA.intl.string(aO.default.OzY5Ns),
                        accessibilityLabel: tA.intl.string(tg.default.OSo1fB),
                        description: tA.intl.string(tg.default.EqdLDd),
                    }),
                    (0, i.jsx)(A.A, {
                        tag: "ul",
                        children: C.map((e, t) => (0, i.jsx)("li", { children: e.name }, t)),
                    }),
                ],
            }),
            null != c &&
                (0, i.jsxs)(es, {
                    visible: T && !p,
                    enter: e8,
                    exit: e5,
                    mountAfterDelay: !0,
                    className: _()(im.Qs, im.yG),
                    children: [
                        (0, i.jsxs)("div", {
                            className: im.Cv,
                            children: [
                                (0, i.jsx)(ij, {
                                    title: tA.intl.string(aO.default["+uwOHt"]),
                                    accessibilityLabel: tA.intl.string(tg.default.X4EiRH),
                                    description: tA.intl.string(tg.default["/ctmGw"]),
                                }),
                                (0, i.jsx)(A.A, { children: j }),
                                (0, i.jsx)(iS, { sidekick: c }),
                            ],
                        }),
                        (0, i.jsx)(iC, { user: c.user, username: j }),
                    ],
                }),
        ],
    });
}
function iE() {
    let e = tu();
    return (0, i.jsx)("div", {
        ref: e,
        className: _()(im.Qs, im.kY),
        children: (0, i.jsx)(rI, { children: tA.intl.string(tg.default["6RSp5q"]) }),
    });
}
function ij(e) {
    let { title: t, accessibilityLabel: a, description: r } = e,
        n = tu();
    return (0, i.jsxs)("div", {
        className: im.wx,
        children: [
            (0, i.jsxs)(rE, {
                ref: n,
                className: im.R_,
                accessibilityLabel: a,
                children: [
                    (0, i.jsx)(rS, { icon: id.FriendsIcon, children: tA.intl.string(aO.default.ZQakPR) }),
                    (0, i.jsx)(tp, { variant: "display-lg", className: im.Vy, children: t }),
                ],
            }),
            (0, i.jsx)(rI, { children: r }),
        ],
    });
}
function iS(e) {
    let { sidekick: t } = e,
        a = Math.round(t.numMessagesSent),
        r = Math.round(t.numVoiceMinutes);
    return (0, i.jsxs)("div", {
        className: im.M1,
        children: [
            (0, i.jsxs)("div", {
                className: im.dJ,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(aR.ChatIcon, { size: "md", color: "currentColor" }),
                    (0, i.jsx)(tp, { variant: "heading-xxl/medium", className: im.wk, children: a }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: im.dJ,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(ak.MicrophoneIcon, { size: "md", color: "currentColor" }),
                    (0, i.jsx)(tp, { variant: "heading-xxl/medium", className: im.wk, children: r }),
                ],
            }),
            (0, i.jsx)(A.A, {
                children: tA.intl.formatToPlainString(tg.default.NafXAs, { numMessages: a, numMinutes: r }),
            }),
        ],
    });
}
function iC(e) {
    let { user: t, username: a } = e,
        [r, s] = b.useState(""),
        [c, d] = b.useState(!1),
        [l, u] = b.useState(!1),
        h = (0, ib.A)(t.id),
        p = r.length > 0 && r.length <= 250 && !c && !l,
        m = c ? tA.intl.string(tA.t.fjcCk5) : tA.intl.formatToPlainString(tA.t["0ZQw/X"], { name: a });
    return h
        ? (0, i.jsxs)("div", {
              className: im.OG,
              children: [
                  (0, i.jsx)("textarea", {
                      className: im.yB,
                      value: r,
                      onChange: (e) => s(e.target.value),
                      maxLength: 250,
                      disabled: c || l,
                      placeholder: m,
                      "aria-label": m,
                  }),
                  (0, i.jsxs)("div", {
                      className: im.n,
                      children: [
                          (0, i.jsx)(il.D, {
                              className: im.KD,
                              onClick: function () {
                                  ((0, f.nr)(t.id),
                                      (0, ih.A)({
                                          giftRecipient: t,
                                          analyticsLocations: [tq.A.CHECKPOINT, tq.A.CHECKPOINT_SIDEKICK],
                                      }));
                              },
                              "aria-label": tA.intl.string(tA.t.Ve9Ge6),
                              children: (0, i.jsx)(io.GiftIcon, { size: "refresh_sm", color: "currentColor" }),
                          }),
                          (0, i.jsx)(il.D, {
                              className: _()(im.KD, { [im.r9]: !p }),
                              onClick: async function () {
                                  if (p) {
                                      u(!0);
                                      try {
                                          (await (0, o.fr)(r, t.id),
                                              s(""),
                                              d(!0),
                                              g.O.announce(tA.intl.string(tA.t.fjcCk5), "polite"));
                                      } catch {
                                          (0, n.P0)({ text: tA.intl.string(tA.t.fEptJP), variant: "critical" });
                                      } finally {
                                          u(!1);
                                      }
                                  }
                              },
                              "aria-disabled": !p,
                              "aria-label": tA.intl.string(tA.t.oeb1vg),
                              children: (0, i.jsx)(iu.SendMessageIcon, { size: "refresh_sm", color: "currentColor" }),
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
var iN = a(9767);
function iT(e) {
    let { games: t } = e,
        a = Math.round(t?.totalDaysPlayed ?? 0),
        r = (0, V.bD)(t?.totalDaysPlayedPercentile);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: iN.dJ,
                children: [
                    (0, i.jsx)(rC, { icon: aS.CalendarIcon, children: tA.intl.string(tg.default["4N5p4D"]) }),
                    (0, i.jsx)(rq, { value: a }),
                ],
            }),
            (0, i.jsx)(rI, {
                children:
                    null != r
                        ? tA.intl.format(tg.default["4FXB/m"], {
                              percent: r,
                              percentHook: (e, t) => (0, i.jsx)(rF, { children: e }, t),
                          })
                        : tA.intl.format(tg.default.iCKjh6, { numDays: a }),
            }),
        ],
    });
}
function iR(e) {
    let { numUsersPlayedEveryDay: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: iN.dJ,
                children: [
                    (0, i.jsx)(rC, { icon: aS.CalendarIcon, children: tA.intl.string(tg.default["dx4+NI"]) }),
                    (0, i.jsx)(rZ, { value: t }),
                ],
            }),
            (0, i.jsx)(rI, { children: tA.intl.string(tg.default["7nfXWu"]) }),
        ],
    });
}
function iO() {
    let e = (0, x.bG)([u.A], () => u.A.stats?.games),
        t = (0, x.bG)([u.A], () => (0, V.uO)(u.A.stats)),
        a = (0, x.bG)([u.A], () => u.A.globalStats?.games?.numUsersPlayedEveryDay),
        r = !t && null != a;
    return (0, i.jsx)(rd, {
        children: (0, i.jsxs)("div", {
            className: iN.kL,
            children: [
                (0, i.jsx)(ti, {
                    animatedSrc:
                        "https://cdn.discordapp.com/assets/content/e3289e9a0a7faf4db23c3fefa390126fc64a09120fdb701f9dea833dddf671ef.png",
                    staticSrc:
                        "https://cdn.discordapp.com/assets/content/312abde9b19fcf85150d507de3f33096992506459b895ab3ea8d92c8f1e04a28.png",
                    className: iN.HW,
                }),
                (0, i.jsx)("div", {
                    className: iN.C,
                    children: r ? (0, i.jsx)(iR, { numUsersPlayedEveryDay: a }) : (0, i.jsx)(iT, { games: e }),
                }),
            ],
        }),
    });
}
var iM = a(95362),
    iy = a(828062);
function iL(e) {
    let { children: t } = e;
    return (0, i.jsx)(tp, { variant: "display-lg", className: iy.V, children: t });
}
function ik(e) {
    let { children: t } = e;
    return (0, i.jsx)(t_, { variant: "display-lg", className: iy.V, children: t });
}
var iD = a(109112),
    iP = a(311043),
    iU = a(883053);
function iG(e) {
    let { rank: t, className: a } = e;
    return (0, i.jsxs)(tx, { className: _()(iU.T, a), children: ["#", t] });
}
var iH = a(770178),
    iF = a(102189);
let iK = { fireOnMount: !0, fireOnDepsChange: !0 };
function iB(e) {
    let { text: t, textRef: a, children: r } = e,
        n = (function (e, t) {
            let [a, r] = b.useState(!1),
                i = b.useCallback((e) => {
                    let { target: t } = e;
                    r(t.scrollWidth > t.clientWidth);
                }, []);
            return ((0, iH.g)(e, i, [t], iK), a);
        })(a, t);
    return (0, i.jsx)(aY.m, {
        text: t,
        position: "bottom",
        anchorRef: a,
        shouldShow: n,
        ariaHidden: !0,
        children: r({ tabIndex: n ? 0 : void 0, className: iF.Y }),
    });
}
var iz = a(331144);
let iV = {
        viewBox: `0 0 ${af.width} ${af.height}`,
        outline:
            "M-2 -2L183.811 -2L194 9.029L194 253L8.24 253L-2 242.84ZM0 242.007L9.064 251L192 251L192 9.811L182.936 0L0 0ZM-2 -2L182 -2L182 242L-2 242ZM0 240L180 240L180 0L0 0Z",
        corner: "M179.582 239.13L192.002 251.508",
    },
    iW = {
        viewBox: `0 0 ${ab.width} ${ab.height}`,
        outline:
            "M-2 -2L221.452 -2L233.503 11.103L233.503 306.01L10.103 306.01L-2 293.947ZM0 293.117L10.929 304.01L231.503 304.01L231.503 11.883L220.574 0L0 0ZM-2 -2L222 -2L222 295L-2 295ZM0 293L220 293L220 0L0 0Z",
        corner: "M219.582 291.133L232.002 303.511",
        stripes:
            "M10.93 291.133l13.91 13.863M20.863 291.133l13.91 13.863M30.801 291.133l13.91 13.863M40.738 291.133l13.91 13.863M50.672 291.133l13.91 13.863M60.609 291.133l13.91 13.863M70.543 291.133l13.91 13.863M80.481 291.133l13.91 13.863M90.414 291.133l13.91 13.863M100.352 291.133l13.91 13.863M110.285 291.133l13.91 13.863M120.223 291.133l13.91 13.863M130.16 291.133l13.91 13.863M140.094 291.133l13.91 13.863M150.031 291.133l13.91 13.863M159.965 291.133l13.91 13.863M169.902 291.133l13.91 13.863M179.836 291.133l13.91 13.863M189.773 291.133l13.91 13.863M199.707 291.133l13.91 13.863M209.645 291.133l13.91 13.863M219.582 13.867l12.42 12.378M219.582 23.766l12.42 12.378M219.582 33.672l12.42 12.378M219.582 43.57l12.42 12.378M219.582 53.477l12.42 12.378M219.582 63.375l12.42 12.378M219.582 73.281l12.42 12.378M219.582 83.18l12.42 12.378M219.582 93.086l12.42 12.378M219.582 102.984l12.42 12.378M219.582 112.891l12.42 12.378M219.582 122.789l12.42 12.378M219.582 132.695l12.42 12.378M219.582 142.594l12.42 12.378M219.582 152.5l12.42 12.378M219.582 162.406l12.42 12.378M219.582 172.305l12.42 12.378M219.582 182.211l12.42 12.378M219.582 192.109l12.42 12.378M219.582 202.016l12.42 12.378M219.582 211.914l12.42 12.378M219.582 221.82l12.42 12.378M219.582 231.719l12.42 12.378M219.582 241.625l12.42 12.378M219.582 251.523l12.42 12.378M219.582 261.43l12.42 12.378M219.582 271.328l12.42 12.378M219.582 281.234l12.42 12.378",
    };
function iq(e) {
    let { paths: t, className: a, children: r } = e;
    return (0, i.jsxs)("div", {
        className: _()(iz.aP, a),
        children: [
            (0, i.jsxs)("svg", {
                className: iz.qd,
                viewBox: t.viewBox,
                preserveAspectRatio: "none",
                "aria-hidden": !0,
                children: [
                    null != t.stripes && (0, i.jsx)("path", { d: t.stripes, className: iz.RY }),
                    (0, i.jsx)("path", { d: t.corner, className: iz.WO }),
                ],
            }),
            r,
            (0, i.jsx)("svg", {
                className: iz.qd,
                viewBox: t.viewBox,
                preserveAspectRatio: "none",
                "aria-hidden": !0,
                children: (0, i.jsx)("path", { d: t.outline, className: iz.rj }),
            }),
        ],
    });
}
function iY(e) {
    return (0, i.jsx)(iq, { ...e, paths: iV });
}
function iX(e) {
    return (0, i.jsx)(iq, { ...e, paths: iW });
}
var iZ = a(497357);
function iQ(e) {
    let {
            game: { id: t, name: a, coverImageHash: r },
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
            [iP.A],
            () =>
                iP.A.getGame(t)?.getCoverURL(300) ??
                ip.Ay.getApplicationIconURL({ id: t, icon: r, size: 300, keepAspectRatio: !0, fallbackAvatar: !1 }),
        );
    return (0, i.jsxs)("div", {
        ...f,
        role: "listitem",
        className: _()(iZ.LO, o),
        style: d,
        children: [
            (0, i.jsx)("div", {
                className: iZ.Tn,
                "aria-hidden": null != l,
                children: (0, i.jsxs)(c, {
                    className: iZ.LG,
                    children: [
                        null != b
                            ? (0, i.jsx)("img", { src: b, alt: "", className: iZ.Qw })
                            : (0, i.jsx)("div", {
                                  className: _()(iZ.Qw, iZ.uj),
                                  children: (0, i.jsx)(iD.UnknownGameIcon, { size: "lg" }),
                              }),
                        null != n && (0, i.jsx)(iG, { rank: n, className: iZ.Tm }),
                    ],
                }),
            }),
            (0, i.jsxs)("div", {
                className: iZ.zH,
                "aria-hidden": null != l,
                children: [
                    (0, i.jsx)(tp, {
                        ref: u,
                        variant: "heading-xl/medium",
                        className: iZ.UU,
                        lineClamp: h,
                        children: a,
                    }),
                    (0, i.jsx)(tp, { variant: "mono-md/bold", className: iZ.Pf, children: s }),
                ],
            }),
            null != l && (0, i.jsx)(A.A, { children: l }),
        ],
    });
}
function iJ(e) {
    let t = b.useRef(null);
    return (0, i.jsx)(iB, {
        text: e.game.name,
        textRef: t,
        children: (a) => {
            let { tabIndex: r, className: n } = a;
            return (0, i.jsx)(iQ, { ...e, className: _()(e.className, n), tabIndex: r, textRef: t, lineClamp: 1 });
        },
    });
}
function i$(e, t, a) {
    return tA.intl.formatToPlainString(tg.default.mqdLhl, { gameName: e.name, rank: t, numSessions: a });
}
function i0(e) {
    let { numSessions: t, ...a } = e,
        r = Math.round(t);
    return (0, i.jsx)(iJ, { ...a, label: r, frame: iY, style: a_, accessibilityLabel: i$(a.game, a.rank, r) });
}
function i1(e) {
    let { numSessions: t, ...a } = e,
        r = Math.round(t);
    return (0, i.jsx)(iJ, { ...a, rank: 1, label: r, frame: iX, style: am, accessibilityLabel: i$(a.game, 1, r) });
}
function i2(e) {
    return (0, i.jsx)(iQ, { ...e, frame: iY, style: a_, className: iZ.Ku });
}
var i3 = a(842807);
let i8 = [];
function i7(e) {
    let { gameStats: t } = e,
        a = Math.round(t?.totalGamesPlayed ?? 0),
        r = (0, V.bD)(t?.totalGamesPlayedPercentile),
        n = t?.games ?? i8;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: i3.wx,
                children: [
                    (0, i.jsxs)("div", {
                        className: i3.dJ,
                        children: [
                            (0, i.jsx)(rC, {
                                icon: aN.GameControllerIcon,
                                children: tA.intl.string(tg.default.HM2fjf),
                            }),
                            (0, i.jsx)(rq, { value: a, className: i3.ai }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: i3.h_,
                        children: (0, i.jsx)(rI, {
                            children:
                                null != r
                                    ? tA.intl.format(tg.default["hc0/yJ"], {
                                          percent: r,
                                          percentHook: (e, t) => (0, i.jsx)(rF, { children: e }, t),
                                      })
                                    : tA.intl.format(tg.default.aJMJ6b, { numGames: a }),
                        }),
                    }),
                ],
            }),
            (0, i.jsx)(iM.Ip, {
                orientation: "horizontal",
                scrollbarGutter: !1,
                fade: !0,
                className: i3.ag,
                role: "list",
                children: n.map((e, t) => {
                    let { game: a, numSessions: r } = e;
                    return 0 === t
                        ? (0, i.jsx)(i1, { game: a, numSessions: r }, a.id)
                        : (0, i.jsx)(i0, { game: a, rank: t + 1, numSessions: r }, a.id);
                }),
            }),
        ],
    });
}
function i5(e) {
    let { gameStats: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: _()(i3.wx, i3.l7),
                children: [
                    (0, i.jsxs)("div", {
                        className: i3.dJ,
                        children: [
                            (0, i.jsx)(rn, { className: i3.gi }),
                            (0, i.jsx)(ik, { children: tA.intl.string(tg.default.qbCgI7) }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: i3.h_,
                        children: (0, i.jsx)(rI, { children: tA.intl.string(tg.default["0oDeiM"]) }),
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: _()(i3.ag, i3.Zs),
                role: "list",
                children: W.Jb.map((e) => {
                    let { list: a, label: r } = e,
                        n = t[a][0];
                    return null != n ? (0, i.jsx)(i2, { game: n, label: tA.intl.string(r) }, a) : null;
                }),
            }),
        ],
    });
}
function i6() {
    let e = (0, x.bG)([u.A], () => u.A.stats?.games),
        t = (0, x.bG)([u.A], () => (0, V.IH)(u.A.stats)),
        a = (0, x.bG)([u.A], () => u.A.globalStats?.games),
        r = !t && null != a;
    return (0, i.jsx)(rd, {
        children: (0, i.jsx)("div", {
            className: _()(i3.kL, { [i3.TF]: r }),
            children: r ? (0, i.jsx)(i5, { gameStats: a }) : (0, i.jsx)(i7, { gameStats: e }),
        }),
    });
}
var i9 = a(167662);
function i4(e) {
    let { messages: t } = e,
        a = Math.round(t?.numMessagesSent ?? 0),
        r = (0, V.bD)(t?.numMessagesSentPercentile);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: i9.dJ,
                children: [
                    (0, i.jsx)(rC, { icon: aR.ChatIcon, children: tA.intl.string(aO.default.wWKySP) }),
                    (0, i.jsx)(rq, { value: a }),
                ],
            }),
            (0, i.jsx)(rI, {
                children:
                    null != r
                        ? tA.intl.format(tg.default.TOMBAW, {
                              percent: r,
                              percentHook: (e, t) => (0, i.jsx)(rF, { children: e }, t),
                          })
                        : tA.intl.format(tg.default.cYCqz8, { numMessages: a }),
            }),
        ],
    });
}
function ne(e) {
    let { numWordsSent: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: i9.dJ,
                children: [
                    (0, i.jsx)(rC, { icon: aR.ChatIcon, children: tA.intl.string(tg.default["2BuyVC"]) }),
                    (0, i.jsx)(rZ, { value: t }),
                ],
            }),
            (0, i.jsx)(rI, {
                children: tA.intl.format(tg.default.bAxEs2, {
                    numWords: (0, V.wj)(t),
                    numCopies: (0, V.wj)((0, V.yQ)(t)),
                }),
            }),
        ],
    });
}
function nt() {
    let e = (0, x.bG)([u.A], () => u.A.stats?.messages),
        t = (0, x.bG)([u.A], () => (0, V.nb)(u.A.stats)),
        a = (0, x.bG)([u.A], () => u.A.globalStats?.messages?.numWordsSent),
        r = !t && null != a;
    return (0, i.jsx)(rd, {
        children: (0, i.jsxs)("div", {
            className: i9.kL,
            children: [
                (0, i.jsx)(ti, {
                    animatedSrc:
                        "https://cdn.discordapp.com/assets/content/d2d8036bb6a32967893421f9956b9e8ed30abde474f68c1a34e824205549c5a1.png",
                    staticSrc:
                        "https://cdn.discordapp.com/assets/content/1dfd8684180df4216b23f0a61617250be8fcc12bc1970ac259892f34fbdb836d.png",
                    className: i9.HW,
                }),
                (0, i.jsx)("div", {
                    className: i9.C,
                    children: r ? (0, i.jsx)(ne, { numWordsSent: a }) : (0, i.jsx)(i4, { messages: e }),
                }),
            ],
        }),
    });
}
var na = a(682163),
    nr = a(224865);
let ni = na.iu[na.Ay.Sizes.XLARGE];
function nn(e) {
    let { guild: t, size: a } = e;
    return null == t.icon && a < 48
        ? (0, i.jsx)("div", {
              className: _()(nr.K, nr.J),
              style: { width: a, height: a },
              "aria-hidden": !0,
              children: (0, i.jsx)(th.E, { variant: "body-md/medium", children: (0, V.oW)(t.name) }),
          })
        : (0, i.jsx)(na.Ay, {
              guild: t,
              size: na.Ay.Sizes.XLARGE,
              iconSize: a,
              textScale: a / ni,
              className: nr.K,
              style: { width: a, height: a, borderRadius: 0 },
              "aria-hidden": !0,
          });
}
var ns = a(140645);
function nc(e) {
    let { numVoiceMinutes: t, numMessagesSent: a } = e,
        r = Math.round(t),
        n = Math.round(a);
    return (0, i.jsxs)("div", {
        className: ns.M1,
        children: [
            (0, i.jsxs)("div", {
                className: ns.dJ,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(ak.MicrophoneIcon, { size: "md", color: "currentColor" }),
                    (0, i.jsx)(tp, { variant: "mono-md/bold", className: ns.Qq, children: r }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: ns.dJ,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(aR.ChatIcon, { size: "md", color: "currentColor" }),
                    (0, i.jsx)(tp, { variant: "mono-md/bold", className: ns.Qq, children: n }),
                ],
            }),
            (0, i.jsx)(A.A, {
                children: tA.intl.formatToPlainString(tg.default["OQjeY/"], { numMinutes: r, numMessages: n }),
            }),
        ],
    });
}
var nd = a(972106);
let nl = [];
function no(e) {
    let { guild: t, rank: a, iconSize: r = 100, children: n } = e,
        s = b.useRef(null);
    return (0, i.jsx)(iB, {
        text: t.name,
        textRef: s,
        children: (e) => {
            let { tabIndex: c, className: d } = e;
            return (0, i.jsxs)("li", {
                className: _()(nd.w_, d),
                tabIndex: c,
                children: [
                    (0, i.jsxs)("div", {
                        className: nd.jj,
                        children: [
                            (0, i.jsx)(iG, { rank: a }),
                            (0, i.jsxs)("div", {
                                className: nd.gI,
                                children: [
                                    (0, i.jsx)(tp, {
                                        ref: s,
                                        variant: "heading-xxl/medium",
                                        className: nd.J5,
                                        lineClamp: 1,
                                        children: t.name,
                                    }),
                                    n,
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsx)(nn, { guild: t, size: r }),
                ],
            });
        },
    });
}
function nu(e) {
    let { guild: t, numVoiceMinutes: a, numMessagesSent: r } = e;
    return (0, i.jsx)(no, {
        guild: t,
        rank: 1,
        iconSize: 140,
        children: (0, i.jsx)(nc, { numVoiceMinutes: a, numMessagesSent: r }),
    });
}
function nh(e) {
    let { guilds: t } = e,
        a = tu();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: nd.wx,
                children: [
                    (0, i.jsxs)(rE, {
                        ref: a,
                        className: nd.R_,
                        accessibilityLabel: tA.intl.string(tg.default.FroqRf),
                        children: [
                            (0, i.jsx)(rS, { icon: ay.ServerIcon, children: tA.intl.string(tg.default.Mb5E6r) }),
                            (0, i.jsx)(iL, { children: tA.intl.string(aO.default.F0fkrh) }),
                        ],
                    }),
                    (0, i.jsx)(rI, { children: tA.intl.string(tg.default.IN1DaS) }),
                ],
            }),
            (0, i.jsx)("ul", {
                className: nd.Pl,
                children: t.map((e, t) => {
                    let { guild: a, numMessagesSent: r, numVoiceMinutes: n } = e;
                    return 0 === t
                        ? (0, i.jsx)(nu, { guild: a, numMessagesSent: r ?? 0, numVoiceMinutes: n ?? 0 }, a.id)
                        : (0, i.jsx)(no, { guild: a, rank: t + 1 }, a.id);
                }),
            }),
        ],
    });
}
function nf(e) {
    let { guilds: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: nd.wx,
                children: [
                    (0, i.jsxs)("div", {
                        className: nd.R_,
                        children: [
                            (0, i.jsx)(rn, { className: nd.gi }),
                            (0, i.jsx)(ik, { children: tA.intl.string(aO.default.F0fkrh) }),
                        ],
                    }),
                    (0, i.jsx)(rI, { children: tA.intl.string(tg.default.bhnqop) }),
                ],
            }),
            (0, i.jsx)("ul", {
                className: nd.Pl,
                children: t.map((e, t) => (0, i.jsx)(no, { guild: e, rank: t + 1 }, e.id)),
            }),
        ],
    });
}
function nb() {
    let e = (0, x.bG)([u.A], () => u.A.stats?.guilds?.guilds ?? nl),
        t = (0, x.bG)([u.A], () => u.A.globalStats?.guilds?.guildsByMembers),
        a = 0 === e.length && null != t;
    return (0, i.jsx)(rd, {
        children: (0, i.jsx)("div", {
            className: nd.kL,
            children: a ? (0, i.jsx)(nf, { guilds: t }) : (0, i.jsx)(nh, { guilds: e }),
        }),
    });
}
var np = a(155094);
function n_(e) {
    let { icon: t, title: a, description: r } = e;
    return (0, i.jsx)(rd, {
        children: (0, i.jsxs)("div", {
            className: np.Q,
            children: [(0, i.jsx)(rC, { icon: t, children: a }), (0, i.jsx)(rI, { children: r })],
        }),
    });
}
var nm = a(7584),
    nx = a(33293),
    ng = a(498137),
    nA = a(192339),
    nv = a(834109),
    nw = a(48763);
function nI(e) {
    let { character: t } = e,
        a = (0, I.o)(t);
    return (0, i.jsxs)(ng.A, {
        cardColorPalette: a,
        size: nw.W.LG,
        children: [(0, i.jsx)(nA.A, {}), (0, i.jsx)(nv.A, { variant: "full" }), (0, i.jsx)(nx.A, { character: t })],
    });
}
var nE = a(58410);
function nj() {
    let e = (0, x.bG)([u.A], () => u.A.stats),
        t = (0, x.bG)([u.A], () => u.A.character),
        a = tu();
    return (0, i.jsx)(rd, {
        children: (0, i.jsxs)("div", {
            className: nE.z,
            children: [
                null != t ? (0, i.jsx)(nI, { character: t }) : null,
                (0, i.jsxs)("div", {
                    className: _()(nE.zH, null === e && nE.gz),
                    children: [
                        (0, i.jsxs)(rE, {
                            ref: a,
                            className: nE.R_,
                            accessibilityLabel: tA.intl.string(tg.default.ASrTAc),
                            children: [
                                (0, i.jsx)(rS, {
                                    icon: rb.ExperimentalCheckpointIcon,
                                    children: tA.intl.string(aO.default.ir6nEQ),
                                }),
                                (0, i.jsx)(tp, {
                                    variant: "display-lg",
                                    className: nE.Vy,
                                    children: tA.intl.string(aO.default.y4M1na),
                                }),
                            ],
                        }),
                        null === e ? (0, i.jsx)(nS, { character: t }) : (0, i.jsx)(nC, { stats: e }),
                    ],
                }),
            ],
        }),
    });
}
function nS(e) {
    let { character: t } = e,
        { primaryBackgroundColor: a } = (0, I.j)((0, I.o)(t));
    return (0, i.jsx)(tp, {
        tag: "p",
        variant: "heading-xl/medium",
        style: { color: a },
        children: tA.intl.string(tg.default["GL+yOs"]),
    });
}
function nC(e) {
    let { stats: t } = e,
        a = t.guilds?.guilds[0],
        r = t.emojis?.emojis[0],
        n = t.games?.games[0]?.game,
        s =
            null != n
                ? ip.Ay.getApplicationIconURL({ id: n.id, icon: n.iconHash, size: 40, fallbackAvatar: !1 })
                : void 0;
    return (0, i.jsxs)("div", {
        className: nE.M1,
        children: [
            (0, i.jsx)(nN, { label: tA.intl.string(tg.default.MSrV9z), value: t.voice?.totalVoiceMinutes }),
            (0, i.jsx)(nN, { label: tA.intl.string(tg.default.hhh11L), value: t.messages?.numMessagesSent }),
            (0, i.jsx)(nN, { label: tA.intl.string(tg.default["f5S+pt"]), value: a?.numDaysInteracted }),
            (0, i.jsx)(nT, {
                label: tA.intl.string(aO.default["8XPMJj"]),
                icon: null != a ? (0, i.jsx)(nn, { guild: a.guild, size: 40 }) : (0, i.jsx)(nR, {}),
                name: null != a ? a.guild.name : tA.intl.string(tA.t.PoWNfe),
            }),
            (0, i.jsx)(nN, { label: tA.intl.string(tg.default.xVSlv3), value: t.emojis?.numEmojisSent }),
            (0, i.jsx)(nT, {
                label: tA.intl.string(aO.default["3sARW7"]),
                icon:
                    null != r
                        ? (0, i.jsx)(rG.A, {
                              emojiId: r.id,
                              emojiName: null == r.id ? r.name : void 0,
                              animated: r.animated,
                              alt: "",
                              className: nE.Kk,
                          })
                        : (0, i.jsx)(nR, {}),
                name:
                    null == r
                        ? tA.intl.string(tA.t.PoWNfe)
                        : null == r.id
                          ? nm.Ay.convertSurrogateToName(r.name)
                          : `:${r.name}:`,
            }),
            (0, i.jsx)(nN, { label: tA.intl.string(tg.default.y2Y1DD), value: t.games?.totalDaysPlayed }),
            (0, i.jsx)(nT, {
                label: tA.intl.string(aO.default.RbT4Zq),
                icon:
                    null != s
                        ? (0, i.jsx)("img", { src: s, alt: "", className: _()(nE.Kk, nE.Gt) })
                        : null == n
                          ? (0, i.jsx)(nR, {})
                          : (0, i.jsx)("div", {
                                className: _()(nE.Kk, nE.Gc),
                                children: (0, i.jsx)(iD.UnknownGameIcon, { size: "md", color: "currentColor" }),
                            }),
                name: null != n ? n.name : tA.intl.string(tA.t.PoWNfe),
            }),
        ],
    });
}
function nN(e) {
    let { label: t, value: a } = e;
    return (0, i.jsxs)("div", {
        className: nE.dJ,
        children: [
            (0, i.jsx)(tp, { variant: "heading-md/semibold", children: t }),
            (0, i.jsx)(tp, {
                variant: "heading-xxl/medium",
                className: nE.wk,
                children: Math.round(a ?? 0).toLocaleString(tA.intl.currentLocale),
            }),
        ],
    });
}
function nT(e) {
    let { label: t, icon: a, name: r } = e,
        n = b.useRef(null);
    return (0, i.jsx)(iB, {
        text: r,
        textRef: n,
        children: (e) => {
            let { tabIndex: s, className: c } = e;
            return (0, i.jsxs)("div", {
                className: _()(nE.dJ, nE.u4, c),
                tabIndex: s,
                children: [
                    (0, i.jsx)(tp, { variant: "heading-md/semibold", children: t }),
                    (0, i.jsxs)("div", {
                        className: nE.AS,
                        children: [
                            a,
                            (0, i.jsx)(tp, {
                                ref: n,
                                variant: "heading-xl/medium",
                                lineClamp: 1,
                                className: nE.TJ,
                                children: r,
                            }),
                        ],
                    }),
                ],
            });
        },
    });
}
function nR() {
    return (0, i.jsx)("div", {
        className: _()(nE.Kk, nE.Gc, nE.Wn),
        children: (0, i.jsx)(iD.UnknownGameIcon, { size: "lg", color: "currentColor" }),
    });
}
var nO = a(651946);
function nM() {
    let e = (0, x.bG)([u.A], () => u.A.stats?.guilds?.guilds[0]),
        t = Math.round(e?.numDaysInteracted ?? 0),
        a = (0, V.bD)(e?.numDaysInteractedPercentile),
        r = b.useRef(null);
    return (0, i.jsx)(rd, {
        children: (0, i.jsxs)("div", {
            className: nO.kL,
            children: [
                (0, i.jsxs)("div", {
                    className: nO.wx,
                    children: [
                        (0, i.jsxs)("div", {
                            className: nO.R_,
                            children: [
                                (0, i.jsx)(rC, { icon: ay.ServerIcon, children: tA.intl.string(tg.default["M+a+t1"]) }),
                                (0, i.jsx)(rq, { value: t }),
                            ],
                        }),
                        (0, i.jsx)(rI, {
                            children:
                                null != a
                                    ? tA.intl.format(tg.default.sIDTV1, {
                                          numDays: t,
                                          percent: a,
                                          percentHook: (e, t) => (0, i.jsx)(rF, { children: e }, t),
                                      })
                                    : tA.intl.format(tg.default.nLCUQ4, { numDays: t }),
                        }),
                    ],
                }),
                null != e &&
                    (0, i.jsx)("div", {
                        className: nO.bU,
                        children: (0, i.jsx)(iB, {
                            text: e.guild.name,
                            textRef: r,
                            children: (t) => {
                                let { tabIndex: a, className: n } = t;
                                return (0, i.jsxs)("div", {
                                    className: _()(nO.Nr, n),
                                    style: { width: 360 },
                                    tabIndex: a,
                                    children: [
                                        (0, i.jsx)(nn, { guild: e.guild, size: 360 }),
                                        (0, i.jsxs)("div", {
                                            className: nO.zH,
                                            children: [
                                                (0, i.jsx)(tp, {
                                                    ref: r,
                                                    variant: "heading-xxl/medium",
                                                    className: nO.J5,
                                                    lineClamp: 1,
                                                    children: e.guild.name,
                                                }),
                                                (0, i.jsx)(nc, {
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
var ny = a(270704);
function nL(e) {
    let { voice: t } = e,
        a = Math.round(t?.totalVoiceMinutes ?? 0),
        r = (0, V.bD)(t?.totalVoiceMinutesPercentile);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: ny.dJ,
                children: [
                    (0, i.jsx)(rC, { icon: ak.MicrophoneIcon, children: tA.intl.string(tg.default["3/T12E"]) }),
                    (0, i.jsx)(rq, { value: a, alignment: "center" }),
                ],
            }),
            (0, i.jsx)(rI, {
                children:
                    null != r
                        ? tA.intl.format(tg.default.RqXsIs, {
                              percent: r,
                              percentHook: (e, t) => (0, i.jsx)(rF, { children: e }, t),
                          })
                        : tA.intl.format(tg.default.Y3poDW, { numMinutes: a }),
            }),
        ],
    });
}
function nk(e) {
    let { peakHour: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: ny.dJ,
                children: [
                    (0, i.jsx)(rC, { icon: ak.MicrophoneIcon, children: tA.intl.string(tg.default.ZCwB8J) }),
                    (0, i.jsx)(rZ, { value: t }),
                ],
            }),
            (0, i.jsx)(rI, { children: tA.intl.string(tg.default.huiTne) }),
        ],
    });
}
function nD() {
    let e = (0, x.bG)([u.A], () => u.A.stats?.voice),
        t = (0, x.bG)([u.A], () => (0, V.Kr)(u.A.stats)),
        a = (0, x.bG)([u.A], () => u.A.globalStats?.voice?.peakHourUtc),
        r = (0, V.XF)(a)?.value,
        n = !t && null != r;
    return (0, i.jsxs)(rd, {
        children: [
            (0, i.jsx)(ti, {
                animatedSrc:
                    "https://cdn.discordapp.com/assets/content/04746dc04eab575d0168935af2b1b3f97e2e00439f84bd0f0474276e0c5a81dc.png",
                staticSrc:
                    "https://cdn.discordapp.com/assets/content/c4c2d6b631bff3da4e4bb9afffc8f89bc9fb6f76a2fcd824f8a7af83eb7f1e6b.png",
                className: ny.Tp,
            }),
            (0, i.jsx)("div", {
                className: ny.Qs,
                children: n ? (0, i.jsx)(nk, { peakHour: r }) : (0, i.jsx)(nL, { voice: e }),
            }),
        ],
    });
}
function nP(e) {
    let { route: t, onNextStep: a, onPreviousStep: r } = e;
    if (t === S.gr.HOME) return (0, i.jsx)(rU, { onStart: a });
    if (t === S.gr.INTRODUCTION) return (0, i.jsx)(ru, {});
    let { statsScreen: n } = (0, S.UG)(t);
    switch (n) {
        case S.oI.VOICE_INTRO:
            return (0, i.jsx)(n_, {
                icon: ak.MicrophoneIcon,
                title: tA.intl.string(tg.default["/7XYsa"]),
                description: tA.intl.string(tg.default["X8/G/o"]),
            });
        case S.oI.VOICE:
            return (0, i.jsx)(nD, {});
        case S.oI.MESSAGES_INTRO:
            return (0, i.jsx)(n_, {
                icon: aR.ChatIcon,
                title: tA.intl.string(tg.default["2BuyVC"]),
                description: tA.intl.string(tg.default["kF+Y3a"]),
            });
        case S.oI.MESSAGES:
            return (0, i.jsx)(nt, {});
        case S.oI.SERVERS_INTRO:
            return (0, i.jsx)(n_, {
                icon: ay.ServerIcon,
                title: tA.intl.string(aO.default.F0fkrh),
                description: tA.intl.string(tg.default.Xg82Gy),
            });
        case S.oI.SERVERS:
            return (0, i.jsx)(nb, {});
        case S.oI.TOP_SERVER:
            return (0, i.jsx)(nM, {});
        case S.oI.EMOJI_INTRO:
            return (0, i.jsx)(n_, {
                icon: to.EmojiSlightlySmilingFaceIcon,
                title: tA.intl.string(tg.default.ZTDCIv),
                description: tA.intl.string(tg.default.y8Sr8J),
            });
        case S.oI.EMOJI:
            return (0, i.jsx)(ii, {});
        case S.oI.GAMES_INTRO:
            return (0, i.jsx)(n_, {
                icon: aN.GameControllerIcon,
                title: tA.intl.string(tg.default.HM2fjf),
                description: tA.intl.string(tg.default.LQiFqJ),
            });
        case S.oI.GAMES:
            return (0, i.jsx)(i6, {});
        case S.oI.GAME_TIME:
            return (0, i.jsx)(iO, {});
        case S.oI.SQUAD:
        case S.oI.SIDEKICK:
            return (0, i.jsx)(iI, { route: t, onNextStep: a, onPreviousStep: r });
        case S.oI.SUMMARY:
            return (0, i.jsx)(nj, {});
        case S.oI.SHARE:
            return (0, i.jsx)(rR, {});
        default:
            return null;
    }
}
var nU = a(650809),
    nG = a(428692);
let nH = {
    [S.s9.FACE]: { icon: ak.MicrophoneIcon, label: tA.t.K3lovD },
    [S.s9.OUTFIT]: { icon: aR.ChatIcon, label: tA.t.OIgYlQ },
    [S.s9.HEADWEAR]: { icon: ay.ServerIcon, label: tA.t["7hB4kg"] },
    [S.s9.SHOES]: { icon: to.EmojiSlightlySmilingFaceIcon, label: tA.t.sMOuuS },
    [S.s9.WEARABLE]: { icon: aN.GameControllerIcon, label: tA.t.URyqtP },
    [S.s9.AURA]: { icon: aS.CalendarIcon, label: tg.default.y2Y1DD },
    [S.s9.ASSEMBLED]: { icon: id.FriendsIcon, label: tA.t.TdEu5X },
    [S.s9.FINALIZE]: { icon: nU.PaintPaletteIcon, label: tg.default.gmMD2I },
    [S.s9.SUMMARY]: { icon: rb.ExperimentalCheckpointIcon, label: aO.default.y4M1na },
};
function nF(e) {
    let {
            step: { icon: t, label: a, route: r },
            state: n,
            disabled: s,
            blockedTraitDescriptionId: c,
            sound: d,
            onRouteClick: l,
        } = e,
        o = tA.intl.string(a),
        u = "unlocked" === n,
        {
            onPointerDown: h,
            onKeyDown: f,
            onClickWithSound: b,
        } = a3({ source: d, onClick: () => l(r), disabled: s || !u });
    return (0, i.jsx)(aY.m, {
        text: "locked" === n ? null : o,
        ariaHidden: !0,
        children: (0, i.jsxs)(il.D, {
            onPointerDown: u ? h : void 0,
            onKeyDown: u ? f : void 0,
            onClick: u ? b : void 0,
            tabIndex: u ? 0 : -1,
            role: "tab",
            "aria-selected": "active" === n,
            className: _()(nG.PM, { [nG.Xj]: "active" === n, [nG.CD]: u, [nG.vk]: u && !s }),
            "aria-label": o,
            "aria-disabled": "locked" === n || (u && s),
            "aria-describedby": u ? c : void 0,
            children: [
                (0, i.jsx)("div", { className: _()(nG.Om, { [nG.hZ]: "locked" !== n }) }),
                (0, i.jsx)(t, { size: "xs", color: "currentColor", className: nG.Kk }),
            ],
        }),
    });
}
function nK(e) {
    let { flow: t, stats: a, activeRoute: r, isRouteBlocked: n, blockedTraitDescriptionId: s, onRouteClick: c } = e,
        d = (function (e, t) {
            let a = [];
            for (let r of (0, j.p5)({ flow: e, stats: t })) {
                let { characterStage: e } = (0, S.UG)(r),
                    t = nH[e];
                null != t && a.at(-1)?.stage !== e && a.push({ ...t, stage: e, route: r });
            }
            return a;
        })(t, a),
        { characterStage: l } = (0, S.UG)(r),
        o = d.findIndex((e) => {
            let { stage: t } = e;
            return t === l;
        }),
        [h, f] = b.useState(o);
    o > h && f(o);
    let p = (0, x.bG)([u.A], () => u.A.isSaving);
    return -1 === o
        ? null
        : (0, i.jsx)("div", {
              className: nG.qB,
              role: "tablist",
              "aria-label": tA.intl.string(tg.default.DyMw85),
              children: d.map((e, t) =>
                  (0, i.jsx)(
                      nF,
                      {
                          step: e,
                          state: t === o ? "active" : t <= h ? "unlocked" : "locked",
                          disabled: p || n,
                          blockedTraitDescriptionId: s,
                          sound: t < o ? aV : aW,
                          onRouteClick: c,
                      },
                      e.stage,
                  ),
              ),
          });
}
var nB = a(517782);
function nz() {
    let e = b.useId(),
        t = b.useRef(null);
    return (b.useEffect(() => (g.O.moveTo?.(e, t.current), () => g.O.remove?.(e)), [e]), (0, i.jsx)(A.A, { ref: t }));
}
function nV(e) {
    let t,
        a,
        { didPlayerShareDataWithDiscord: r, onClose: n } = e;
    ((0, x.bG)([u.A], () => u.A.fetchState),
        (t = (0, x.yK)([u.A], () => {
            let { stats: e, globalStats: t } = u.A,
                a = t?.games;
            if ((0, V.IH)(e) || null == a)
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
        b.useEffect(() => {
            let { fetchState: e } = u.A;
            (e === u.T.INIT || e === u.T.ERROR) && (0, o.nX)();
        }, []),
        b.useEffect(() => {
            (0, z.E)(t);
        }, [t]));
    let s = (0, j.bL)(r),
        [c, l] = (function (e) {
            let [t, a] = b.useState(() =>
                (function (e) {
                    let { character: t, progress: a, stats: r, isCharacterCreatorEnabled: i } = u.A,
                        n = null != t ? S.s9.SUMMARY : a?.stage;
                    return (
                        (0, j.p5)({ flow: e, stats: r, character: t, isCharacterCreatorEnabled: i }).find(
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
        })(s);
    (b.useEffect(() => {
        (h.A.setStepName(c), (0, f.if)(c));
    }, [c]),
        (0, B.l0)(() => {
            (h.A.stop(), (0, f.i)(h.A.getStepName()));
        }),
        b.useEffect(() => {
            let e = !1;
            function t() {
                e = !0;
            }
            return (
                F.h.subscribe("CHECKPOINT_COMPLETE_SUCCESS", t),
                () => {
                    (F.h.unsubscribe("CHECKPOINT_COMPLETE_SUCCESS", t), e && (0, K.hs)(H.w.CHECKPOINT_COMPLETED));
                }
            );
        }, []),
        (a = (0, x.bG)([d.A], () => d.A.isFocused() && d.A.isVisible())),
        b.useEffect(() => {
            h.A.setForeground(a);
        }, [a]));
    let { characterStage: p, statsScreen: g } = (0, S.UG)(c),
        k = c === S.gr.HOME || null != g,
        D = c === S.gr.INTRODUCTION,
        P = (0, S.Rq)(c),
        U = (0, x.bG)([u.A], () => (u.A.fetchState === u.T.SUCCESS ? u.A.stats : void 0)),
        q = (0, x.bG)([u.A], () => u.A.character),
        X = b.useMemo(
            () =>
                (function (e, t) {
                    switch (e) {
                        case S.gr.SUMMARY:
                        case S.gr.SHARE:
                            let a = (0, I.o)(t),
                                { primaryBackgroundColor: r, shadowColor: i } = (0, I.j)(a);
                            return {
                                ...ax,
                                "--custom-checkpoint-primary": r,
                                "--custom-checkpoint-button-border": r,
                                "--custom-checkpoint-button-shadow": i,
                                "--custom-checkpoint-background-gradient-start": r,
                            };
                        default:
                            return ax;
                    }
                })(c, q),
            [c, q],
        ),
        Z = (function () {
            let { isMuted: e, volume: t } = (0, x.cf)([u.A], () => ({ isMuted: u.A.isMuted, volume: u.A.volume })),
                a = b.useRef(new Map()),
                r = b.useRef(null),
                i = b.useCallback(() => {
                    (r.current?.(), a.current.forEach((e) => e.pause()));
                }, []);
            return (
                b.useEffect(() => ((a.current = new Map(M.map((e) => [e, new Audio(e)]))), i), [i]),
                b.useEffect(() => {
                    a.current.forEach((a) => {
                        ((a.muted = e), (a.volume = t));
                    });
                }, [e, t]),
                b.useCallback(
                    (e) => {
                        var t;
                        let n;
                        (i(),
                            (t = (e) => {
                                let t = a.current.get(e);
                                null == t || u.A.isMuted || 0 === u.A.volume || ((t.currentTime = 0), t.play());
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
        J = G(),
        ee = (0, E.k0)(c, J),
        ea = b.useId(),
        er = null != ee ? ea : void 0,
        ei = b.useCallback(
            (e) => {
                let t = (function (e) {
                    let { previousRoute: t, route: a } = e;
                    if (t === S.gr.SIDEKICK_LEAVE && a === S.gr.SIDEKICK) return null;
                    if (t === S.gr.FINALIZE_CHARACTER && a === S.gr.SUMMARY) return [];
                    let r = [];
                    return (
                        a === S.gr.INTRODUCTION
                            ? (r.push({ source: C, delayMs: 0 }),
                              r.push({ source: O, delayMs: 2500 }),
                              r.push({ source: N, delayMs: 2800 }))
                            : y(t) && L(a)
                              ? r.push({ source: T, delayMs: 0 })
                              : L(t) && y(a) && (r.push({ source: R, delayMs: 0 }), r.push({ source: O, delayMs: 0 })),
                        r
                    );
                })({ previousRoute: c, route: e });
                (null != t && Z(t), l(e));
            },
            [c, Z, l],
        ),
        en = b.useCallback(
            (e) => {
                let t = (0, j.SK)({ flow: s, stats: U, currentRoute: c, direction: e });
                if (null == t) {
                    1 === e && n();
                    return;
                }
                ei(t);
            },
            [c, s, ei, n, U],
        ),
        ec = b.useCallback(() => en(-1), [en]),
        ed = b.useCallback(() => en(1), [en]),
        el = b.useCallback(() => ei((0, j.$_)({ flow: s, stats: U })), [s, ei, U]),
        eo = b.useCallback(
            (e) => {
                if (!u.A.isSaving) {
                    if (null != ee) return void Y(ee);
                    ei(e);
                }
            },
            [ee, ei],
        );
    return (0, i.jsx)(v.N, {
        theme: Q.NJ.DARK,
        children: (e) =>
            (0, i.jsx)(m.Jh, {
                children: (0, i.jsxs)("div", {
                    className: _()(e, nB.kL),
                    style: X,
                    role: "dialog",
                    "aria-modal": !0,
                    "aria-label": tA.intl.string(aO.default["CdU/PF"]),
                    children: [
                        (0, i.jsx)(nz, {}),
                        (0, i.jsxs)("div", {
                            className: nB.$s,
                            children: [
                                (0, i.jsx)(az, {}),
                                (0, i.jsx)(et, {
                                    size: "sm",
                                    "aria-label": tA.intl.string(tA.t.cpT0Cq),
                                    onClick: n,
                                    children: (0, i.jsx)(w.XSmallIcon, { size: "xs", color: "currentColor" }),
                                }),
                            ],
                        }),
                        (0, i.jsx)(tr, {
                            stage: p,
                            isCovered: k,
                            className: nB.qd,
                            children:
                                D && (0, i.jsx)(nP, { route: S.gr.INTRODUCTION, onNextStep: ed, onPreviousStep: ec }),
                        }),
                        (0, i.jsx)(es, {
                            visible: k,
                            enter: e1,
                            exit: e1,
                            hiddenScale: 1.02,
                            keepMounted: !0,
                            className: nB.qd,
                            style: X,
                            children: (0, i.jsx)($, { isVisible: k }),
                        }),
                        (0, i.jsx)(es, {
                            visible: P,
                            enter: e6,
                            exit: e9,
                            className: nB.qd,
                            children: (0, i.jsx)(aP, { route: c }),
                        }),
                        (0, i.jsx)(es, {
                            visible: k,
                            enter: e3,
                            exit: e2,
                            hiddenScale: 1.02,
                            mountAfterDelay: !0,
                            className: nB.qd,
                            style: X,
                            children: (0, i.jsx)(nP, { route: c, onNextStep: ed, onPreviousStep: ec }),
                        }),
                        (0, i.jsx)(ri, {
                            activeRoute: c,
                            blockedTrait: ee,
                            blockedTraitDescriptionId: er,
                            onBack: ec,
                            onNext: ed,
                            onReplay: el,
                        }),
                        (0, i.jsx)(tl, { activeRoute: c }),
                        (0, i.jsx)(nK, {
                            flow: s,
                            stats: U,
                            activeRoute: c,
                            isRouteBlocked: null != ee,
                            blockedTraitDescriptionId: er,
                            onRouteClick: eo,
                        }),
                        null != ee && (0, i.jsx)(A.A, { id: ea, children: (0, E.Cz)(ee) }),
                        (0, i.jsx)(m.P, {}),
                    ],
                }),
            }),
    });
}
var nW = a(359527);
function nq() {
    if (l._.hasSubscribers(a1.jej.MODAL_CLOSE)) return (l._.dispatch(a1.jej.MODAL_CLOSE), !0);
    let e = (0, c.mU)(document.activeElement ?? document.body);
    return !!e?.hasSubscribers(a1.jej.POPOUT_CLOSE) && (e.dispatch(a1.jej.POPOUT_CLOSE), !0);
}
async function nY(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { didPlayerShareDataWithDiscord: a = !0, ...r } = t,
        c = await (0, o.nX)(r);
    return c === u.T.ERROR
        ? ((0, n.P0)({ text: tA.intl.string(tA.t.fEptJP), variant: "critical" }), !1)
        : c !== u.T.FETCHING &&
              (h.A.initialize({ didPlayerShareDataWithDiscord: a, isForeground: d.A.isFocused() && d.A.isVisible() }),
              (0, f.lw)(e),
              (0, s.B8)(
                  (e) => {
                      let { closeLayer: t } = e;
                      return (0, i.jsx)(nV, { didPlayerShareDataWithDiscord: a, onClose: t });
                  },
                  { layerKey: nW.p, onEscape: nq },
              ),
              !0);
}
