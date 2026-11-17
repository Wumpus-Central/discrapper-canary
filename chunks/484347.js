a.d(t, { D: () => nq });
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
    C =
        "https://cdn.discordapp.com/assets/content/7b28adce16a979de5d4f6b8331dfedca2806d1b0b15f694b7a196db7f624918c.mp3",
    N =
        "https://cdn.discordapp.com/assets/content/aada5b40828140b41a56df82e81783cd43fd60e30ac1eb3c9f93a087b95dcf03.mp3",
    T =
        "https://cdn.discordapp.com/assets/content/04536b9e5b26d0b6e85116ce546b7d5ba97da31e7de7a1e02da262bcd5249bb0.mp3",
    R =
        "https://cdn.discordapp.com/assets/content/82d771ff521a99ea8e26239d2f2e48ae847e39575bc5bce396739b430b8a6fda.mp3",
    O = [S, C, N, T, R];
function M(e) {
    return e !== j.gr.HOME && null == (0, j.UG)(e).statsScreen;
}
function y(e) {
    return null != (0, j.UG)(e).statsScreen;
}
var L = a(127639),
    k = a(287809),
    D = a(474090),
    P = a(817379);
function U() {
    return (0, m.yK)([u.A, k.default], () => {
        let { selectedCharacterTraits: e, stats: t, character: a } = u.A,
            r = (0, D.ki)(k.default.getCurrentUser());
        return Object.values(L.V).filter((i) => {
            let n = e[i];
            return null != n && (0, P.tS)(i, n, { stats: t, hasNitro: r, savedCharacter: a });
        });
    });
}
var G = a(517846),
    H = a(73153),
    F = a(669700),
    K = a(964486),
    B = a(920495),
    z = a(407905),
    V = a(532294),
    W = a(739187);
function q(e) {
    let t = (0, I.Cz)(e);
    null != t && ((0, W.V)(), (0, n.P0)({ text: t, variant: "critical" }));
}
var Y = a(299619),
    X = a(775602),
    Z = a(818348),
    Q = a(11435);
function J(e) {
    let { isVisible: t } = e,
        a = b.useRef(null),
        r = (0, m.bG)([X.Ay], () => X.Ay.useReducedMotion),
        n = t && !r;
    return (
        b.useEffect(() => {
            let e = a.current;
            null != e && (n ? e.play().catch(Z.tE) : e.pause());
        }, [n]),
        b.useEffect(() => {
            r && null != a.current && (a.current.currentTime = 1);
        }, [r]),
        (0, i.jsxs)("div", {
            className: Q.Tp,
            "aria-hidden": !0,
            children: [
                (0, i.jsx)(Y.A, {
                    ref: a,
                    className: Q.Ki,
                    src: "https://cdn.discordapp.com/assets/content/a7a4300630ed2733eca4a8bb584c3086a66063d78e2f829faf465d96ff388a93.webm",
                    loop: !0,
                    muted: !0,
                    playsInline: !0,
                }),
                (0, i.jsx)("div", { className: Q.D7 }),
            ],
        })
    );
}
var $ = a(885619);
function ee(e) {
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
        className: _()($.button, "custom" !== m && $[m], x),
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
function et(e) {
    let { className: t, ...a } = e;
    return (0, i.jsx)(ee, { ...a, className: _()($.shadow, t) });
}
var ea = a(475743),
    er = a(765548),
    ei = a(190240);
function en(e) {
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
        h = (0, m.bG)([X.Ay], () => X.Ay.useReducedMotion),
        f = b.useRef(null),
        [p, x] = b.useState(t),
        [g, A] = b.useState(t),
        v = b.useRef(null),
        w = (0, ea.p0)({ value: u, shouldUpdate: t }),
        I = (0, ea.p0)({ value: o, shouldUpdate: t }),
        E = (0, er.A)(() => {
            ((v.current = null), x(!1), d?.());
        }),
        j = t ? a : r,
        S = h ? 0 : j.delay,
        C = h ? 0 : j.duration,
        N = t && !p && !n,
        T = s && !h;
    b.useEffect(() => {
        if (!N) return;
        if (!T) return void x(!0);
        let e = setTimeout(() => x(!0), a.delay);
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
                n && x(!0);
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
        className: _()(l, ei.q, { [ei.R]: !p }),
        style: M,
        inert: !t,
        "aria-hidden": !t,
        children: t || n ? u : w,
    });
}
var es = a(516749),
    ec = a(399667),
    ed = a(468311),
    el = a(706121),
    eo = a(985747),
    eu = a(67915),
    eh = a(118531);
let ef = {
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
function eb(e) {
    return { name: e, url: ef[e].url };
}
let ep = eb("tex_none"),
    e_ = {
        [eo.N.NONE]: 0,
        [eo.N.CAP]: 7,
        [eo.N.ELVEN_HEADPIECE]: 1,
        [eo.N.HEADPHONES]: 2,
        [eo.N.TEDDY_BEANIE]: 13,
        [eo.N.PIERCINGS]: 4,
        [eo.N.HEADBAND]: 5,
        [eo.N.SUNGLASSES]: 6,
        [eo.N.BANANA_PEEL]: 3,
        [eo.N.LEAF]: 8,
        [eo.N.FIRE]: 9,
        [eo.N.HALO]: 10,
        [eo.N.BRAIN]: 11,
        [eo.N.TRAFFIC_CONE]: 12,
        [eo.N.CROWN]: 14,
    },
    em = {
        [eh.Z.NONE]: 0,
        [eh.Z.ANGEL_WINGS]: 3,
        [eh.Z.STICKERS]: 1,
        [eh.Z.TOTE]: 2,
        [eh.Z.WIZARD_STAFF]: 8,
        [eh.Z.SKATEBOARD]: 4,
        [eh.Z.DRAGON_WINGS]: 5,
        [eh.Z.TAKE_OUT_BAG]: 6,
        [eh.Z.PIXEL_WRENCH]: 7,
        [eh.Z.MECH_WINGS]: 9,
        [eh.Z.SWORD]: 10,
        [eh.Z.DEVIANT_TAIL]: 11,
        [eh.Z.MAGICAL_STAFF]: 12,
        [eh.Z.BUTTERFLY_WINGS]: 13,
        [eh.Z.CAT_BACKPACK]: 14,
    },
    ex = {
        [ed.X.NONE]: ep,
        [ed.X.BLAZE]: eb("tex_aura_04_blaze"),
        [ed.X.BLOSSOM]: eb("tex_aura_01_blossom"),
        [ed.X.PRISM]: eb("tex_aura_02_prism"),
        [ed.X.SHOCK]: eb("tex_aura_03_shock"),
        [ed.X.FATED]: eb("tex_aura_05_fated"),
        [ed.X.LUSTER]: eb("tex_aura_06_luster"),
        [ed.X.BUBBLES]: eb("tex_aura_07_bubbly"),
        [ed.X.SPOOKY]: eb("tex_aura_08_spooky"),
        [ed.X.CURSED]: eb("tex_aura_09_cursed"),
        [ed.X.MAGNETIC]: eb("tex_aura_10_magnetic"),
        [ed.X.RADIOACTIVE]: eb("tex_aura_11_radioactive"),
        [ed.X.ELEMENTAL]: eb("tex_aura_12_elemental"),
        [ed.X.SHIMMER]: eb("tex_aura_13_shimmer"),
        [ed.X.WITCHY]: eb("tex_aura_14_witchy"),
    },
    eg = {
        [el.R.ICY]: eb("tex_base_01_icy"),
        [el.R.CRIMSON]: eb("tex_base_02_crimson"),
        [el.R.CHROME]: eb("tex_base_03_chrome"),
        [el.R.GALACTIC]: eb("tex_base_04_galactic"),
        [el.R.FOREST]: eb("tex_base_05_forrest"),
        [el.R.MIDNIGHT]: eb("tex_base_06_mighnight"),
        [el.R.GLACIER]: eb("tex_base_07_glacier"),
        [el.R.ORANGE]: eb("tex_base_08_orange"),
        [el.R.PURPLE]: eb("tex_base_09_pink"),
        [el.R.RED]: eb("tex_base_10_red"),
        [el.R.COBALT]: eb("tex_base_11_cobalt"),
        [el.R.X_RAY]: eb("tex_base_12_x-ray"),
        [el.R.LIQUID]: eb("tex_base_13_liquid"),
        [el.R.BUTTER]: eb("tex_base_14_butter"),
        [el.R.IRIDESCENT]: eb("tex_base_15_iridescent"),
    },
    eA = {
        [eu.r.NONE]: null,
        [eu.r.BADDIE_DEFAULT]: { riveId: 1, texture: eb("tex_outfit_01_baddie") },
        [eu.r.TRAVELER_DEFAULT]: { riveId: 10, texture: eb("tex_outfit_10_traveler") },
        [eu.r.STREAMER_DEFAULT]: { riveId: 3, texture: eb("tex_outfit_03_streamer") },
        [eu.r.CAMPER_DEFAULT]: { riveId: 4, texture: eb("tex_outfit_04_camper") },
        [eu.r.ATHLETE_DEFAULT]: { riveId: 5, texture: eb("tex_outfit_05_athlete") },
        [eu.r.COWPOKE_DEFAULT]: { riveId: 6, texture: eb("tex_outfit_06_cowpoke") },
        [eu.r.GOTH_DEFAULT]: { riveId: 7, texture: eb("tex_outfit_07_goth") },
        [eu.r.ASTRONAUT_DEFAULT]: { riveId: 8, texture: eb("tex_outfit_08_astronaut") },
        [eu.r.JESTER_DEFAULT]: { riveId: 9, texture: eb("tex_outfit_09_jester") },
        [eu.r.TRASH_CAN_DEFAULT]: { riveId: 2, texture: eb("tex_outfit_02_trash") },
        [eu.r.MAGE_DEFAULT]: { riveId: 11, texture: eb("tex_outfit_11_mage") },
        [eu.r.MECH_DEFAULT]: { riveId: 12, texture: eb("tex_outfit_12_mech") },
        [eu.r.KNIGHT_DEFAULT]: { riveId: 13, texture: eb("tex_outfit_13_knight") },
        [eu.r.MAGICAL_DEFAULT]: { riveId: 14, texture: eb("tex_outfit_14_magical") },
        [eu.r.BADDIE_MONOCHROME]: { riveId: 1, texture: eb("tex_outfit_01_baddie_monochrome") },
        [eu.r.BADDIE_VIOLET]: { riveId: 1, texture: eb("tex_outfit_01_baddie_violet") },
        [eu.r.BADDIE_PASTEL]: { riveId: 1, texture: eb("tex_outfit_01_baddie_pastel") },
        [eu.r.BADDIE_SUNSET]: { riveId: 1, texture: eb("tex_outfit_01_baddie_sunset") },
        [eu.r.TRAVELER_HAZE]: { riveId: 10, texture: eb("tex_outfit_10_traveler_haze") },
        [eu.r.TRAVELER_MOSS]: { riveId: 10, texture: eb("tex_outfit_10_traveler_moss") },
        [eu.r.TRAVELER_CHRONO]: { riveId: 10, texture: eb("tex_outfit_10_traveler_chrono") },
        [eu.r.TRAVELER_UMBER]: { riveId: 10, texture: eb("tex_outfit_10_traveler_umber") },
        [eu.r.STREAMER_FLAMES]: { riveId: 3, texture: eb("tex_outfit_03_streamer_flames") },
        [eu.r.STREAMER_STRIPES]: { riveId: 3, texture: eb("tex_outfit_03_streamer_stripes") },
        [eu.r.STREAMER_SMILEY]: { riveId: 3, texture: eb("tex_outfit_03_streamer_smiley") },
        [eu.r.STREAMER_VINTAGE]: { riveId: 3, texture: eb("tex_outfit_03_streamer_vintage") },
        [eu.r.CAMPER_PLAID]: { riveId: 4, texture: eb("tex_outfit_04_camper_plaid") },
        [eu.r.CAMPER_SWAMP]: { riveId: 4, texture: eb("tex_outfit_04_camper_swamp") },
        [eu.r.CAMPER_GLAMP]: { riveId: 4, texture: eb("tex_outfit_04_camper_glamp") },
        [eu.r.CAMPER_AMBER]: { riveId: 4, texture: eb("tex_outfit_04_camper_amber") },
        [eu.r.ATHLETE_BLOCKED]: { riveId: 5, texture: eb("tex_outfit_05_athlete_blocked") },
        [eu.r.ATHLETE_FADED]: { riveId: 5, texture: eb("tex_outfit_05_athlete_faded") },
        [eu.r.ATHLETE_CHECKERED]: { riveId: 5, texture: eb("tex_outfit_05_athlete_checkered") },
        [eu.r.ATHLETE_LINED]: { riveId: 5, texture: eb("tex_outfit_05_athlete_lined") },
        [eu.r.COWPOKE_ONYX]: { riveId: 6, texture: eb("tex_outfit_06_cowpoke_onyx") },
        [eu.r.COWPOKE_STEEL]: { riveId: 6, texture: eb("tex_outfit_06_cowpoke_steel") },
        [eu.r.COWPOKE_DENIM]: { riveId: 6, texture: eb("tex_outfit_06_cowpoke_denim") },
        [eu.r.COWPOKE_BLUSH]: { riveId: 6, texture: eb("tex_outfit_06_cowpoke_blush") },
        [eu.r.GOTH_SIREN]: { riveId: 7, texture: eb("tex_outfit_07_goth_siren") },
        [eu.r.GOTH_SERPENT]: { riveId: 7, texture: eb("tex_outfit_07_goth_serpent") },
        [eu.r.GOTH_RAVEN]: { riveId: 7, texture: eb("tex_outfit_07_goth_raven") },
        [eu.r.GOTH_VAMP]: { riveId: 7, texture: eb("tex_outfit_07_goth_vamp") },
        [eu.r.ASTRONAUT_STARDUST]: { riveId: 8, texture: eb("tex_outfit_08_astronaut_stardust") },
        [eu.r.ASTRONAUT_MARTIAN]: { riveId: 8, texture: eb("tex_outfit_08_astronaut_martian") },
        [eu.r.ASTRONAUT_SOLAR]: { riveId: 8, texture: eb("tex_outfit_08_astronaut_solar") },
        [eu.r.ASTRONAUT_COSMIC]: { riveId: 8, texture: eb("tex_outfit_08_astronaut_cosmic") },
        [eu.r.JESTER_CONFETTI]: { riveId: 9, texture: eb("tex_outfit_09_jester_confetti") },
        [eu.r.JESTER_CARNIVAL]: { riveId: 9, texture: eb("tex_outfit_09_jester_carnival") },
        [eu.r.JESTER_SUNRISE]: { riveId: 9, texture: eb("tex_outfit_09_jester_sunrise") },
        [eu.r.JESTER_NIGHTFALL]: { riveId: 9, texture: eb("tex_outfit_09_jester_nightfall") },
        [eu.r.TRASH_CAN_BLACKOUT]: { riveId: 2, texture: eb("tex_outfit_02_trash_blackout") },
        [eu.r.TRASH_CAN_CAUTION]: { riveId: 2, texture: eb("tex_outfit_02_trash_caution") },
        [eu.r.TRASH_CAN_BUBBLEGUM]: { riveId: 2, texture: eb("tex_outfit_02_trash_bubblegum") },
        [eu.r.TRASH_CAN_TOXIC]: { riveId: 2, texture: eb("tex_outfit_02_trash_toxic") },
        [eu.r.MAGE_SHADOW]: { riveId: 11, texture: eb("tex_outfit_11_mage_shadow") },
        [eu.r.MAGE_DUSK]: { riveId: 11, texture: eb("tex_outfit_11_mage_dusk") },
        [eu.r.MAGE_WILDWOOD]: { riveId: 11, texture: eb("tex_outfit_11_mage_wildwood") },
        [eu.r.MAGE_WINTER]: { riveId: 11, texture: eb("tex_outfit_11_mage_winter") },
        [eu.r.MECH_AERO]: { riveId: 12, texture: eb("tex_outfit_12_mech_aero") },
        [eu.r.MECH_VIPER]: { riveId: 12, texture: eb("tex_outfit_12_mech_viper") },
        [eu.r.MECH_ULTRAVIOLET]: { riveId: 12, texture: eb("tex_outfit_12_mech_ultraviolet") },
        [eu.r.MECH_SANDSTORM]: { riveId: 12, texture: eb("tex_outfit_12_mech_sandstorm") },
        [eu.r.KNIGHT_IRON]: { riveId: 13, texture: eb("tex_outfit_13_knight_iron") },
        [eu.r.KNIGHT_RUST]: { riveId: 13, texture: eb("tex_outfit_13_knight_rust") },
        [eu.r.KNIGHT_PETAL]: { riveId: 13, texture: eb("tex_outfit_13_knight_petal") },
        [eu.r.KNIGHT_GLACIER]: { riveId: 13, texture: eb("tex_outfit_13_knight_glacier") },
        [eu.r.MAGICAL_SAPPHIRE]: { riveId: 14, texture: eb("tex_outfit_14_magical_sapphire") },
        [eu.r.MAGICAL_AMETHYST]: { riveId: 14, texture: eb("tex_outfit_14_magical_amethyst") },
        [eu.r.MAGICAL_FROST]: { riveId: 14, texture: eb("tex_outfit_14_magical_frost") },
        [eu.r.MAGICAL_CITRINE]: { riveId: 14, texture: eb("tex_outfit_14_magical_citrine") },
    };
var ev = a(835517),
    ew = (((r = {}).SLOT = "slot"), (r.TRAIT = "trait"), (r.LAYOUT = "layout"), (r.ALWAYS = "always"), r);
let eI = /^tex_(aura|base_\d+|outfit)_/,
    eE = /^tex_(headwear|shoes|wearable|face)_(\d+)_/,
    ej = /^tex_face_([a-z]+)_/i,
    eS = {
        tex_env_labNight_bg: ["Desktop"],
        tex_env_labNight_bg_mobileLandscape: ["MobileLandscape"],
        tex_env_labNight_bg_mobilePortrait: ["MobilePortrait"],
        tex_env_labNight_fgLeft: ["Desktop"],
        tex_env_labNight_fgRight: ["Desktop"],
        tex_env_labNight_mgBottom: ["Desktop"],
        tex_env_labNight_mgBottomMobile: ["MobilePortrait", "MobileLandscape"],
        tex_env_labNight_sky: ["Desktop"],
    },
    eC = {
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
    eN = { columns: 1, rows: 1 },
    eT = { columns: 5, rows: 5 },
    eR = { columns: 6, rows: 8 },
    eO = {
        tex_aura_01_blossom: eT,
        tex_aura_02_prism: eT,
        tex_aura_03_shock: eT,
        tex_aura_04_blaze: eT,
        tex_aura_05_fated: eT,
        tex_aura_06_luster: eT,
        tex_aura_07_bubbly: eT,
        tex_aura_08_spooky: eT,
        tex_aura_09_cursed: eT,
        tex_aura_10_magnetic: eT,
        tex_aura_11_radioactive: eT,
        tex_aura_12_elemental: eT,
        tex_aura_13_shimmer: eT,
        tex_aura_14_witchy: eT,
        tex_wireframe_spritesheet: { columns: 12, rows: 6 },
        tex_wearable_10_sword_spritesheet: { columns: 5, rows: 4 },
        tex_wearable_11_deviantTail_smoke_active_spritesheet: eR,
        tex_wearable_11_deviantTail_smoke_idle_spritesheet: eR,
    },
    eM = [1, 1.25, 1.5, 1.75, 2, 3, 4, 5],
    ey = Math.min(...eM),
    eL = Math.max(...eM);
function ek(e, t) {
    let { url: a, width: r, height: i, widthAt1x: n } = ef[e];
    if (null == n) return a;
    let s = 4096 / Math.max(r, i),
        c = Math.min((t * n) / r, s),
        d = s >= 1 && t >= Math.round(r / n);
    if (c >= 1 || d) return a;
    let { columns: l, rows: o } = eO[e] ?? eN,
        u = l * Math.round((r / l) * c),
        h = o * Math.round((i / o) * c);
    return `${a}?width=${u}&height=${h}`;
}
let eD = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14"],
    eP = eD.map((e) => `outfit${e}Image`),
    eU = {
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
    eG = {
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
    eH = { ...eG.MobilePortrait, gradientTopPosition: 25, gradientBottomPosition: 90 };
var eF = a(722872),
    eK = a(574381);
let eB = new Set([1]),
    ez = Object.keys(ef).map((e) => ({
        name: e,
        role: (function (e) {
            if (eI.test(e)) return { type: "slot" };
            let t = eS[e];
            if (null != t) return { type: "layout", layouts: t };
            let a = eE.exec(e);
            if (null != a) return { type: "trait", path: `${a[1]}ID`, riveId: Number(a[2]) };
            let r = ej.exec(e),
                i = null != r ? eC[r[1].toLowerCase()] : void 0;
            return null != i ? { type: "trait", path: "faceID", riveId: i } : { type: "always" };
        })(e),
        swapKey: (0, eK.un)() ? `${e}-${ef[e].riveId}` : e,
    }));
function eV(e) {
    let { faceID: t, headwearID: a, shoesID: r, wearableID: i, chapterID: n, device: s } = e;
    return b.useMemo(() => {
        var e;
        let c;
        return (
            (e = { faceID: t, headwearID: a, shoesID: r, wearableID: i }),
            (c = new Set()),
            ez.forEach((t) => {
                let { name: a, role: r } = t;
                switch (r.type) {
                    case ew.SLOT:
                        break;
                    case ew.TRAIT:
                        e[r.path] === r.riveId && c.add(a);
                        break;
                    case ew.LAYOUT:
                        r.layouts.includes(s) && c.add(a);
                        break;
                    case ew.ALWAYS:
                        ("tex_wireframe_spritesheet" !== a || eB.has(n)) && c.add(a);
                }
            }),
            c
        );
    }, [t, a, r, i, n, s]);
}
var eW = a(435558);
let eq = (0, a(196765).v)(() => ({ hoveredOption: void 0 })),
    eY = (0, eW.debounce)((e) => eq.setState({ hoveredOption: e }), 250);
function eX(e) {
    let { hoveredOption: t, isDelayed: a = !1 } = e;
    a ? eY(t) : (eY.cancel(), eq.setState({ hoveredOption: t }));
}
(a(393431), a(532706), a(42231), a(232424), a(949626), a(767709), a(65162));
var eZ = a(971940);
async function eQ(e) {
    try {
        let t = await fetch(e);
        if (!t.ok) return null;
        return await (0, eZ.decodeImage)(new Uint8Array(await t.arrayBuffer()));
    } catch {
        return null;
    }
}
var eJ = a(168862);
function e$(e) {
    let t,
        a,
        { stage: r, isHidden: n } = e,
        s = (0, m.bG)([d.A], () => {
            let e = d.A.windowSize();
            return (function (e, t) {
                let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (a) return ey;
                let r = Math.max(e / 960, t / 540) * (0, ev.A)();
                return eM.find((e) => e >= r) ?? eL;
            })(e.width, e.height);
        }),
        [c, l] = b.useState(s);
    s > c && l(s);
    let o =
            ((t = (0, m.bG)([u.A], () => u.A.selectedCharacterTraits)),
            (a = eq((e) => e.hoveredOption)),
            b.useMemo(() => (null != a ? { ...t, [a.trait]: a.optionId } : t), [t, a])),
        h = (0, m.bG)([X.Ay], () => X.Ay.useReducedMotion),
        f = b.useMemo(
            () =>
                (function (e) {
                    let { stage: t, isHidden: a, traits: r, layout: i, textureScale: n } = e,
                        { base: s, shoes: c, outfit: d, face: l, hat: o, wearable: u, aura: h } = (0, P.XI)(r),
                        f = eA[d],
                        b = {};
                    return (
                        eD.forEach((e) => {
                            let t = Number(e) === f?.riveId ? f.texture : ep;
                            b[`outfit${e}Image`] = ek(t.name, n);
                        }),
                        {
                            device: i,
                            chapterID: a && t === j.s9.FACE ? eU[j.s9.IDLE] : eU[t],
                            faceID: l,
                            shoesID: c,
                            headwearID: e_[o],
                            wearableID: em[u],
                            outfitID: f?.riveId ?? 0,
                            auraImage: ek(ex[h].name, n),
                            baseColorImage: ek(eg[s].name, n),
                            ...("MobilePortrait" === i && t === j.s9.INTRODUCTION ? eH : eG[i]),
                            ...b,
                        }
                    );
                })({ stage: r, isHidden: n, traits: o, layout: "Desktop", textureScale: c }),
            [r, n, o, c],
        ),
        [p, x] = b.useState(null),
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
                })({ visibleTextureNames: eV(t), requestedTextureNames: eV(a) });
            return b.useMemo(() => {
                let e;
                return (
                    (e = {}),
                    ez.forEach((t) => {
                        let { name: a, swapKey: n } = t,
                            s = i.has(a) ? ek(a, r) : ep.url;
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
                r = b.useCallback((t) => !!t.isImage && t.name in ef && (e.current.set(t.name, t), !0), []);
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
                                  load: eQ,
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
    let S = b.useCallback(() => {
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
                s = (t = r.outfitID) > 0 ? eP[t - 1] : null,
                c = null != s ? r[s] : void 0,
                d = null == s || a?.[s] === c || i[s] === c,
                l = a ?? r;
            return {
                dataBinding: b.useMemo(() => (null == s || l[s] === c ? l : { ...l, [s]: c }), [l, s, c]),
                isOutfitPreloaded: d,
                onDataBindingChange: b.useMemo(() => {
                    let e = {};
                    return (
                        eP.forEach((t) => {
                            e[t] = (e) => {
                                n((a) => (a[t] === e ? a : { ...a, [t]: e }));
                            };
                        }),
                        e
                    );
                }, []),
            };
        })({ visibleDataBinding: p, requestedDataBinding: f });
    C && T && p !== f && x(f);
    let O = (function (e) {
            let { stage: t, dataBinding: a } = e,
                r = (0, m.bG)([X.Ay], () => X.Ay.useReducedMotion),
                i = t === j.s9.INTRODUCTION && !r,
                [n, s] = b.useState(+!i),
                [c, d] = b.useState(i);
            return (
                i !== c && (d(i), s(+!i)),
                b.useEffect(() => {
                    if (!i) return;
                    let e = Date.now() + 1800,
                        t = requestAnimationFrame(function a() {
                            let r = Math.max(Math.min(Date.now() - e, 1e3), 0);
                            (s((0, eF.easeOutCubic)(r, 0, 1, 1e3)), r >= 1e3 || (t = requestAnimationFrame(a)));
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
        "aria-label": (0, ec.O)(o),
        className: _()(eJ.dw, { [eJ.RK]: null != p }),
        children: (0, i.jsx)(es.W, {
            artboard: "AB_Master",
            stateMachine: "SM_Master",
            fit: "layout",
            alignment: "center",
            ref: I,
            assetLoader: A,
            onLoad: S,
            listenOnDocumentBody: !h,
            withReducedMotion: "play",
            dataBinding: M,
            onDataBindingChange: R,
            className: eJ.lW,
        }),
    });
}
let e0 = { delay: 0, duration: 350 },
    e1 = { delay: 35, duration: 125 },
    e2 = { delay: 200, duration: 125 },
    e3 = { delay: 700, duration: 175 },
    e8 = { delay: 175, duration: 175 },
    e7 = { delay: 0, duration: 125 },
    e5 = { delay: 175, duration: 175 },
    e6 = { delay: 0, duration: 175 },
    e9 = { delay: 0, duration: 0 },
    e4 = { delay: e0.delay + e0.duration, duration: 0 },
    te = e2.delay + 500;
var tt = a(840527);
function ta(e) {
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
                    let e = setTimeout(() => a(!1), te);
                    return () => clearTimeout(e);
                }, [t]),
                { isMountDelayed: t }
            );
        })(a),
        o = (0, ea.p0)({ value: t, shouldUpdate: !d }) ?? t,
        u = (0, ea.p0)({ value: n, shouldUpdate: !d });
    return (0, i.jsxs)(en, {
        visible: !a,
        enter: e9,
        exit: e4,
        keepMounted: !0,
        onExitComplete: () => c(!0),
        className: r,
        children: [
            (0, i.jsx)("div", { className: tt.q, children: !l && (0, i.jsx)(e$, { stage: o, isHidden: s }) }),
            null != u && (0, i.jsx)("div", { className: tt.q, children: u }),
        ],
    });
}
function tr(e) {
    let { animatedSrc: t, staticSrc: a, className: r } = e,
        n = (0, m.bG)([X.Ay], () => X.Ay.useReducedMotion);
    return (0, i.jsx)("img", { src: n ? a : t, alt: "", className: r });
}
var ti = a(740281),
    tn = a(766089),
    ts = a(767988);
let tc = { animatedSrc: tn.A, staticSrc: ts.A };
function td(e) {
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
                        return tc;
                }
            },
            [t],
        );
    return (0, i.jsx)(tr, { animatedSrc: a, staticSrc: r, className: ti.w });
}
var tl = a(756408);
function to() {
    let e = b.useRef(null);
    return (
        b.useLayoutEffect(() => {
            let t = e.current;
            null != t && ((t.tabIndex = -1), t.focus({ preventScroll: !0 }));
        }, []),
        e
    );
}
var tu = a(834730),
    th = a(534514),
    tf = a(504736);
function tb(e) {
    let { children: t, className: a, ...r } = e;
    return (0, i.jsx)(tu.E, { ...r, className: _()(tf.Q, a), color: "none", children: t });
}
function tp(e) {
    let { children: t, className: a, ...r } = e,
        n = to();
    return (0, i.jsx)(th.D, { ...r, ref: n, className: _()(tf.Q, a), color: "none", children: t });
}
var t_ = a(271427);
function tm(e) {
    let { children: t, className: a, style: r } = e;
    return (0, i.jsx)(tb, { tag: "span", variant: "mono-md/bold", className: _()(t_.T, a), style: r, children: t });
}
var tx = a(852717),
    tg = a(792996),
    tA = a(383931);
function tv(e) {
    let { percent: t } = e;
    return (0, i.jsx)(tm, {
        className: tA.t,
        children: tg.intl.formatToPlainString(tx.default.fOGKA4, { percent: t }),
    });
}
var tw = a(646692);
function tI(e) {
    let { icon: t, value: a, topPercent: r, children: n } = e,
        s = to(),
        c =
            null != r
                ? tg.intl.formatToPlainString(tx.default.USo6cU, { value: a, label: n, percent: r })
                : tg.intl.formatToPlainString(tx.default["+CCx/D"], { value: a, label: n });
    return (0, i.jsxs)("div", {
        ref: s,
        role: "heading",
        "aria-level": 2,
        children: [
            (0, i.jsxs)("div", {
                className: tw.dJ,
                "aria-hidden": !0,
                children: [
                    null != r && (0, i.jsx)(tv, { percent: r }),
                    (0, i.jsxs)("div", {
                        className: tw.p,
                        children: [
                            (0, i.jsx)(tb, {
                                variant: "heading-xxl/medium",
                                className: tw.Uq,
                                children: a.toLocaleString(tg.intl.currentLocale),
                            }),
                            (0, i.jsxs)("div", {
                                className: tw.Pf,
                                children: [
                                    (0, i.jsx)(t, { size: "xs", color: "currentColor" }),
                                    (0, i.jsx)(tb, { variant: "heading-xs/semibold", className: tw.QK, children: n }),
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
var tE = a(303453);
let tj = {
    [I.v7.FACE]: tx.default.q8GA6h,
    [I.v7.OUTFIT]: tx.default["xGh/fq"],
    [I.v7.OUTFIT_COLOR]: tx.default.IgiEDV,
    [I.v7.HAT]: tx.default.QqeBEO,
    [I.v7.WEARABLE]: tx.default.l57q3i,
    [I.v7.AURA]: tx.default["fYp+yq"],
    [I.v7.SHOES]: tx.default.BaI4wD,
    [I.v7.BASE]: tx.default.SMXZXX,
};
function tS(e) {
    let { customizationOption: t, earnedCount: a, totalCount: r } = e;
    return (0, i.jsx)(tu.E, {
        variant: "body-md/medium",
        color: "text-subtle",
        className: tE.k,
        children: tg.intl.format(tj[t], {
            earnedCount: a,
            totalCount: r,
            countHook: (e, t) =>
                (0, i.jsx)(tb, { tag: "span", variant: "mono-md/bold", className: tE.U, children: e }, t),
        }),
    });
}
let tC =
    "https://cdn.discordapp.com/assets/content/48cbcb920dfd15e45e7fe3f297ede63a7891cb0eee9fc44f27053d05d2c6b5ca.mp3";
var tN = a(11044);
function tT(e) {
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
var tR = a(218546),
    tO = a(646514),
    tM = a(403581),
    ty = a(461872),
    tL = a(559265);
function tk(e) {
    let { rarity: t } = e,
        a = b.useMemo(() => ({ "--custom-checkpoint-rarity-color": V.Zy[t] }), [t]);
    return t === tR.K.NITRO
        ? (0, i.jsx)(tM.NitroWheelIcon, { size: "custom", color: tO.A.colors.ICON_SUBTLE, className: tL.d7 })
        : (0, i.jsx)("span", { className: tL.oG, style: a });
}
function tD(e) {
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
        p = f === ty.eP.LOCKED,
        m = b.useMemo(() => {
            if (null == h) return null;
            let e = Math.round(80 * (0, ev.A)());
            return `${h}?width=${e}&height=${e}`;
        }, [h]);
    return (0, i.jsxs)("label", {
        className: _()(tL.uK, { [tL.wH]: r, [tL.dv]: (0, I.C5)(t), [tL.xt]: p, [tL.Ns]: f === ty.eP.NITRO_LOCKED }),
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
                        d || p || s(l, o);
                    },
                    "aria-label": (0, I.v2)(t, { skipRarity: n, skipDescription: !1 }),
                }),
            }),
            null != m && (0, i.jsx)("img", { src: m, alt: "", draggable: !1, className: tL.Sl }),
            !n && null != u && (0, i.jsx)(tk, { rarity: u }),
        ],
    });
}
var tP = a(541170),
    tU = a(974862),
    tG = a(142389),
    tH = a(211235),
    tF = a(230532),
    tK = a(110601),
    tB = a(917970);
function tz(e) {
    let { customizationOption: t, traitOptions: a, selectedOption: r, onSelectOption: n, disabled: s = !1 } = e,
        c = b.useId(),
        d = !(0, I.Ux)(t),
        l = tT(
            "https://cdn.discordapp.com/assets/content/fc5527a1a369d8982c6e6fa588f732c7c5364ff00ddd0cf51646f05ad423af36.mp3",
        ),
        o = tT(tC);
    ((0, K.Ay)(() => {
        [tU, tB, tG, tH, tK, tF].forEach((e) => (0, tN.N)(e));
    }),
        b.useEffect(() => () => eX({ hoveredOption: void 0 }), [t]));
    let u = b.useCallback(
            (e, t) => {
                (eX({ hoveredOption: void 0 }), o(), n(e, t));
            },
            [n, o],
        ),
        h = b.useCallback(
            (e) => {
                (l(), eX({ hoveredOption: e.optionId !== r?.optionId ? e : void 0, isDelayed: !0 }));
            },
            [l, r],
        );
    return (0, i.jsx)("div", {
        onMouseLeave: () => eX({ hoveredOption: void 0 }),
        children: (0, i.jsx)("div", {
            role: "radiogroup",
            "aria-label": (0, I.cq)(t),
            className: tP.V,
            onBlur: (e) => {
                e.currentTarget.contains(e.relatedTarget) ||
                    e.currentTarget.matches(":hover") ||
                    eX({ hoveredOption: void 0 });
            },
            children: a.map((e) =>
                (0, i.jsx)(
                    tD,
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
var tV = a(28863),
    tW = a(793574),
    tq = a(778705),
    tY = a(647093);
function tX(e) {
    let { rarity: t } = e,
        a = b.useMemo(() => ({ "--custom-checkpoint-rarity-background": V.Zy[t] }), [t]);
    return (0, i.jsx)(tm, { className: tY.q, style: a, children: tg.intl.string(V.iG[t]) });
}
var tZ = a(829870);
function tQ(e) {
    let { title: t, rarity: a, description: r } = e;
    return (0, i.jsxs)("div", {
        className: tZ.z,
        children: [
            (0, i.jsxs)("div", {
                className: tZ.D,
                children: [
                    (0, i.jsx)(tu.E, { tag: "div", variant: "heading-sm/semibold", color: "text-strong", children: t }),
                    null != a && (0, i.jsx)(tX, { rarity: a }),
                ],
            }),
            null != r && (0, i.jsx)(tu.E, { variant: "body-md/medium", color: "text-subtle", children: r }),
        ],
    });
}
function tJ(e) {
    return e.status !== ty.eP.NITRO_LOCKED
        ? (0, I.Oq)(e)
        : tg.intl.format(tx.default.E6AfCb, {
              subscribeHook: (e, t) =>
                  (0, i.jsx)(
                      tV.Anchor,
                      {
                          onClick: () => (0, tq.A)({ analyticsLocations: [tW.A.CHECKPOINT, tW.A.CHECKPOINT_TRAIT] }),
                          children: e,
                      },
                      t,
                  ),
          });
}
function t$(e) {
    let { customizationOption: t, selectedOption: a } = e,
        r = eq((e) => e.hoveredOption) ?? a;
    return null == r
        ? null
        : (0, i.jsx)(tQ, { title: r.getName(), rarity: (0, I.Ux)(t) ? r.rarity : void 0, description: tJ(r) });
}
var t0 = a(509063);
function t1(e) {
    let { children: t, details: a } = e;
    return (0, i.jsxs)("div", {
        className: t0.Nz,
        children: [
            (0, i.jsx)("div", { className: t0.fF, children: t }),
            null != a && (0, i.jsx)("div", { className: t0.zH, children: a }),
        ],
    });
}
var t2 = a(51104);
function t3(e) {
    let { rarity: t, isSavedOption: a, visibleRarities: r, hasNitroSubscription: i } = e;
    return a
        ? ty.eP.UNLOCKED
        : null == t || r.has(t)
          ? t !== tR.K.NITRO || i
              ? ty.eP.UNLOCKED
              : ty.eP.NITRO_LOCKED
          : ty.eP.LOCKED;
}
function t8(e, t) {
    return e === I.v7.OUTFIT ? (null != t ? (0, P.FA)(t) : void 0) : t;
}
function t7(e) {
    let { customizationOption: t } = e,
        {
            optionIds: a,
            selectedOptionId: r,
            savedOptionId: i,
            onSelectOption: n,
        } = (function (e) {
            let { customizationOption: t, onSelectOption: a } = e,
                r = I.hw[t],
                { selectedOptionId: i, savedOptionId: n } = (0, m.cf)([u.A], () => ({
                    selectedOptionId: t8(t, u.A.selectedCharacterTraits[r]),
                    savedOptionId: t8(t, u.A.character?.[r]),
                })),
                s = b.useCallback(
                    (e, t) => {
                        if (t === i) return;
                        let r = (0, P.$C)(e, t),
                            s = t3({
                                rarity: r,
                                isSavedOption: n === t,
                                visibleRarities: (0, P.mf)(e, u.A.stats),
                                hasNitroSubscription: (0, D.ki)(k.default.getCurrentUser()),
                            });
                        ((0, f.dw)(e, t, s, r), a(e, t));
                    },
                    [a, n, i],
                );
            return {
                optionIds: (function (e, t) {
                    switch (e) {
                        case I.v7.OUTFIT:
                            return P.ps;
                        case I.v7.OUTFIT_COLOR:
                            return (0, P.wD)(t ?? eu.r.NONE);
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
                n = (0, m.bG)([u.A], () => u.A.stats),
                s = (0, m.bG)([k.default], () => (0, D.ki)(k.default.getCurrentUser())),
                c = b.useMemo(() => (0, I.p8)(r), [r]);
            return b.useMemo(() => {
                let e = I.hw[t],
                    r = t === I.v7.OUTFIT_COLOR ? t2.x : t2.$[e],
                    d = (0, P.mf)(e, n),
                    l = [],
                    o = 0,
                    u = 0;
                for (let t of i ?? P.Rk[e]) {
                    let i = (0, P.$C)(e, t),
                        n = t3({ rarity: i, isSavedOption: a === t, visibleRarities: d, hasNitroSubscription: s }),
                        c = n === ty.eP.UNLOCKED && (i !== tR.K.NITRO || s);
                    (null != i && o++,
                        null != i && c && u++,
                        l.push({
                            trait: e,
                            optionId: t,
                            asset: P.qM[e][t]?.thumbnail,
                            rarity: i,
                            status: n,
                            getName: () => {
                                let e = r[t];
                                return null != e ? tg.intl.string(e) : "";
                            },
                        }));
                }
                l.sort(c);
                let h = l.filter((e) => {
                    let { status: t } = e;
                    return t !== ty.eP.LOCKED;
                });
                return { traitOptions: l, availableTraitOptions: h, totalCount: o, earnedCount: u };
            }, [t, s, i, c, a, n]);
        })({ customizationOption: t, savedOptionId: i, rarityOrder: V.FG, optionIds: a }),
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
function t5(e) {
    let { customizationOption: t } = e,
        {
            traitOptions: a,
            selectedOption: r,
            totalCount: n,
            earnedCount: s,
            onSelectOption: c,
        } = t7({ customizationOption: t });
    return (0, i.jsxs)(t1, {
        details: (0, i.jsx)(t$, { customizationOption: t, selectedOption: r }),
        children: [
            (0, i.jsx)(tS, { customizationOption: t, earnedCount: s, totalCount: n }),
            (0, i.jsx)(tz, { customizationOption: t, traitOptions: a, selectedOption: r, onSelectOption: c }),
        ],
    });
}
var t6 = a(71678);
function t9(e) {
    let { children: t, className: a } = e;
    return (0, i.jsx)("div", { className: _()(t6.n, a), children: t });
}
function t4() {
    let e = (0, m.bG)([u.A], () => u.A.stats?.emojis);
    return (0, i.jsxs)(t9, {
        children: [
            (0, i.jsx)(tI, {
                icon: tl.EmojiSlightlySmilingFaceIcon,
                value: Math.round(e?.numEmojisSent ?? 0),
                topPercent: (0, z.bD)(e?.numEmojisSentPercentile),
                children: tg.intl.string(tx.default.ZTDCIv),
            }),
            (0, i.jsx)(t5, { customizationOption: I.v7.SHOES }),
        ],
    });
}
var ae = a(937383);
function at(e) {
    let { selectedOption: t } = e,
        a = eq((e) => e.hoveredOption) ?? t;
    return null == a
        ? null
        : (0, i.jsx)(tQ, {
              title: (0, i.jsxs)(i.Fragment, {
                  children: [
                      a.getName(),
                      " ",
                      (0, i.jsxs)(tu.E, {
                          tag: "span",
                          variant: "heading-sm/semibold",
                          color: "text-subtle",
                          children: [
                              (0, i.jsx)("span", { "aria-hidden": !0, children: "/ " }),
                              (0, i.jsx)(g.A, { children: ", " }),
                              (0, I.hV)(a.optionId),
                          ],
                      }),
                  ],
              }),
              description: tJ(a),
          });
}
function aa(e) {
    let { disabled: t } = e,
        { traitOptions: a, selectedOption: r, onSelectOption: n } = t7({ customizationOption: I.v7.OUTFIT_COLOR });
    return (0, i.jsx)(t1, {
        details: (0, i.jsx)(at, { selectedOption: r }),
        children: (0, i.jsx)(tz, {
            customizationOption: I.v7.OUTFIT_COLOR,
            traitOptions: a,
            selectedOption: r,
            onSelectOption: n,
            disabled: t,
        }),
    });
}
function ar() {
    return (0, i.jsx)(t1, {
        children: (0, i.jsx)(tQ, {
            title: tg.intl.string(tx.default.zsYYN1),
            description: tg.intl.string(tx.default.BkuqWx),
        }),
    });
}
function ai(e) {
    let { lastColorwayIdByOutfitId: t, disabled: a } = e,
        { traitOptions: r, selectedOption: n, onSelectOption: s } = t7({ customizationOption: I.v7.OUTFIT }),
        c = b.useMemo(() => (0, I.G5)(r, t), [t, r]);
    return (0, i.jsx)(t1, {
        details: (0, i.jsx)(t$, { customizationOption: I.v7.OUTFIT, selectedOption: n }),
        children: (0, i.jsx)(tz, {
            customizationOption: I.v7.OUTFIT,
            traitOptions: c,
            selectedOption: n,
            onSelectOption: function (e, a) {
                s(e, t.get(a) ?? a);
            },
            disabled: a,
        }),
    });
}
function an(e) {
    let { customizationOption: t, disabled: a } = e,
        { traitOptions: r, selectedOption: n, onSelectOption: s } = t7({ customizationOption: t });
    return (0, i.jsx)(t1, {
        details: (0, i.jsx)(t$, { customizationOption: t, selectedOption: n }),
        children: (0, i.jsx)(tz, {
            customizationOption: t,
            traitOptions: r,
            selectedOption: n,
            onSelectOption: s,
            disabled: a,
        }),
    });
}
function as(e) {
    let { customizationOption: t, lastColorwayIdByOutfitId: a, disabled: r } = e;
    switch (t) {
        case I.v7.OUTFIT:
            return (0, i.jsx)(ai, { lastColorwayIdByOutfitId: a, disabled: r });
        case I.v7.OUTFIT_COLOR:
            return (0, i.jsx)(aa, { disabled: r });
        default:
            return (0, i.jsx)(an, { customizationOption: t, disabled: r });
    }
}
function ac(e) {
    let { id: t, customizationOption: a, disabled: r } = e,
        n = (function () {
            let e = (0, m.bG)([u.A], () => u.A.selectedCharacterTraits[L.V.OUTFIT]),
                [t, a] = b.useState(new Map()),
                r = null != e ? (0, P.FA)(e) : void 0;
            return (null != e && null != r && t.get(r) !== e && a(new Map(t).set(r, e)), t);
        })(),
        s = (0, m.bG)(
            [u.A],
            () => {
                if (a !== I.v7.OUTFIT_COLOR) return !1;
                let e = u.A.selectedCharacterTraits[L.V.OUTFIT];
                return null == e || (0, P.nb)(L.V.OUTFIT, e);
            },
            [a],
        );
    return (0, i.jsx)("div", {
        role: "tabpanel",
        id: t,
        "aria-label": (0, I.cq)(a),
        tabIndex: s ? 0 : void 0,
        className: ae.n,
        children: s
            ? (0, i.jsx)(ar, {})
            : (0, i.jsx)(as, { customizationOption: a, lastColorwayIdByOutfitId: n, disabled: r }),
    });
}
var ad = a(265872),
    al = a(320448),
    ao = a(315710),
    au = a(444927);
let ah = { width: 180, height: 240 },
    af = { width: 220, height: 293 };
function ab(e, t) {
    let { width: a, height: r } = e;
    return {
        "--custom-checkpoint-game-art-width": t,
        "--custom-checkpoint-game-art-height": `calc(var(--custom-checkpoint-game-art-width) * ${r} / ${a})`,
    };
}
let ap = ab(ah, "clamp(135px, 17.5vh, 180px)"),
    a_ = ab(af, "clamp(165px, 21.5vh, 220px)"),
    am = {
        "--custom-checkpoint-primary": V.Kr,
        "--custom-checkpoint-dark-cyan": V.ow,
        "--custom-checkpoint-button-border": V.ow,
        "--custom-checkpoint-button-shadow": V.zj,
        "--custom-checkpoint-white": V.Ve,
        "--custom-checkpoint-guild-card-background": V.LM,
        "--custom-checkpoint-background-gradient-start": V.bI,
    };
var ax = a(580814);
function ag(e) {
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
        h = (0, au.A)(() => Math.max(a.indexOf(r), 0)),
        [f, p] = b.useState(null);
    function m(e) {
        let t = (e + a.length) % a.length;
        (p(t), u.current[t]?.focus());
    }
    return (
        (0, ao.tj)(t, { disable: !d, disableReturn: !0 }),
        b.useEffect(() => {
            d && u.current[h]?.focus();
        }, [h, d]),
        (0, i.jsx)("div", {
            ref: t,
            role: "menu",
            tabIndex: -1,
            "aria-label": tg.intl.string(tx.default.Zl5vPW),
            className: ax.MK,
            style: am,
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
                        className: _()(ax.AS, { [ax.dT]: f === t }),
                        onFocus: () => p(t),
                        onMouseEnter: (e) => {
                            (p(t), d && e.currentTarget.focus());
                        },
                        onClick: () => s(e),
                        children: (0, i.jsx)(tu.E, {
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
var aA = a(421773),
    av = a(769909);
function aw(e) {
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
            closeMenu: A,
            handleRequestClose: v,
            selectMenuOption: w,
            onMouseEnter: E,
            onMouseLeave: j,
        } = (function (e) {
            let { activeCustomizationOption: t, onSelectOption: a, blockedTrait: r, disabled: i } = e,
                n = b.useRef(null),
                s = b.useRef(null),
                c = I.kB.includes(t),
                d = (function (e) {
                    let t = I.kB.includes(e),
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
                } = (0, aA.A)(100, 300);
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
                    null != r ? q(r) : i || (m(), u(!0), f(!0));
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
            ((t = [...I.IS, "more"]),
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
        O = null != f ? (0, I.cq)(f) : null;
    function M(e) {
        null != d ? q(d) : l || (n(e), A());
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
                            A();
                            break;
                        case "ArrowLeft":
                        case "ArrowRight":
                        case "Home":
                        case "End":
                            (e.preventDefault(), e.stopPropagation(), A(), y(N(t, e.key)));
                    }
                })(t, e),
            onKeyUp: (t) => {
                " " === t.key && (t.preventDefault(), t.stopPropagation(), L(e));
            },
            className: _()(av.Mf, { [av.OS]: "more" === e, [av.vu]: t }),
        };
    }
    return (0, i.jsxs)("div", {
        ref: C,
        role: "tablist",
        "aria-label": tg.intl.string(tx.default.Zl5vPW),
        className: av.vR,
        children: [
            I.IS.map((e) => {
                let t = (0, I.cq)(e);
                return (0, i.jsx)(
                    "button",
                    {
                        ...k(e),
                        "aria-label": t,
                        children: (0, i.jsx)(tu.E, {
                            tag: "span",
                            variant: "heading-sm/semibold",
                            color: "none",
                            children: t,
                        }),
                    },
                    e,
                );
            }),
            (0, i.jsx)(ad.Y, {
                targetElementRef: o,
                shouldShow: p,
                onRequestOpen: x,
                onRequestClose: v,
                position: "right",
                align: "top",
                spacing: 8,
                renderPopout: () =>
                    (0, i.jsx)(ag, {
                        menuRef: u,
                        options: I.kB,
                        activeCustomizationOption: r,
                        returnRef: o,
                        focusMenu: m,
                        onMouseEnter: E,
                        onMouseLeave: j,
                        onSelectOption: w,
                        onClose: A,
                    }),
                children: (e) =>
                    (0, i.jsxs)("button", {
                        ...e,
                        ...k("more"),
                        ref: o,
                        "aria-label":
                            null != O
                                ? tg.intl.formatToPlainString(tx.default.QX1VPx, { category: O })
                                : tg.intl.string(tx.default.jepsQ6),
                        "aria-haspopup": "menu",
                        "aria-expanded": p,
                        onMouseEnter: E,
                        onMouseLeave: j,
                        children: [
                            (0, i.jsx)(tu.E, {
                                tag: "span",
                                variant: "heading-sm/semibold",
                                color: "none",
                                children: O ?? tg.intl.string(tx.default["iXpQc+"]),
                            }),
                            (0, i.jsx)(al.ChevronSmallRightIcon, { size: "refresh_sm", color: "currentColor" }),
                        ],
                    }),
            }),
            null != d && (0, i.jsx)(g.A, { id: T, children: (0, I.Cz)(d) }),
        ],
    });
}
var aI = a(195464);
function aE() {
    let e = b.useId(),
        t = b.useId(),
        [a, r] = b.useState(I.v7.BASE),
        n = U().find((e) => e === I.hw[a]),
        s = (0, m.bG)([u.A], () => u.A.isSaving),
        c = to();
    return (0, i.jsxs)(t9, {
        className: aI.nj,
        children: [
            (0, i.jsx)(th.D, {
                ref: c,
                variant: "heading-xl/medium",
                color: "none",
                className: aI.DD,
                children: tg.intl.string(tx.default["q2nj/Z"]),
            }),
            (0, i.jsxs)("div", {
                className: aI.ho,
                children: [
                    (0, i.jsx)(aw, {
                        tabIdPrefix: e,
                        panelId: t,
                        activeCustomizationOption: a,
                        onSelectOption: r,
                        blockedTrait: n,
                        disabled: s,
                    }),
                    (0, i.jsx)(ac, { id: t, customizationOption: a, disabled: s }),
                ],
            }),
        ],
    });
}
var aj = a(81466);
function aS() {
    let e = (0, m.bG)([u.A], () => u.A.stats?.games);
    return (0, i.jsxs)(t9, {
        children: [
            (0, i.jsx)(tI, {
                icon: aj.CalendarIcon,
                value: Math.round(e?.totalDaysPlayed ?? 0),
                topPercent: (0, z.bD)(e?.totalDaysPlayedPercentile),
                children: tg.intl.string(tx.default["4N5p4D"]),
            }),
            (0, i.jsx)(t5, { customizationOption: I.v7.AURA }),
        ],
    });
}
var aC = a(687966);
function aN() {
    let e = (0, m.bG)([u.A], () => u.A.stats?.games);
    return (0, i.jsxs)(t9, {
        children: [
            (0, i.jsx)(tI, {
                icon: aC.GameControllerIcon,
                value: Math.round(e?.totalGamesPlayed ?? 0),
                topPercent: (0, z.bD)(e?.totalGamesPlayedPercentile),
                children: tg.intl.string(tx.default.HM2fjf),
            }),
            (0, i.jsx)(t5, { customizationOption: I.v7.WEARABLE }),
        ],
    });
}
var aT = a(534890),
    aR = a(350363);
function aO() {
    let e = (0, m.bG)([u.A], () => u.A.stats?.messages);
    return (0, i.jsxs)(t9, {
        children: [
            (0, i.jsx)(tI, {
                icon: aT.ChatIcon,
                value: Math.round(e?.numMessagesSent ?? 0),
                topPercent: (0, z.bD)(e?.numMessagesSentPercentile),
                children: tg.intl.string(aR.default.wWKySP),
            }),
            (0, i.jsx)(t5, { customizationOption: I.v7.OUTFIT }),
        ],
    });
}
var aM = a(664121);
function ay() {
    let e = (0, m.bG)([u.A], () => u.A.stats?.guilds?.guilds[0]);
    return (0, i.jsxs)(t9, {
        children: [
            (0, i.jsx)(tI, {
                icon: aM.ServerIcon,
                value: Math.round(e?.numDaysInteracted ?? 0),
                topPercent: (0, z.bD)(e?.numDaysInteractedPercentile),
                children: tg.intl.string(tx.default["M+a+t1"]),
            }),
            (0, i.jsx)(t5, { customizationOption: I.v7.HAT }),
        ],
    });
}
var aL = a(831544);
function ak() {
    let e = (0, m.bG)([u.A], () => u.A.stats?.voice),
        t = Math.round(e?.totalVoiceMinutes ?? 0);
    return (0, i.jsxs)(t9, {
        children: [
            (0, i.jsx)(tI, {
                icon: aL.MicrophoneIcon,
                value: t,
                topPercent: (0, z.bD)(e?.totalVoiceMinutesPercentile),
                children: tg.intl.string(tx.default["3/T12E"]),
            }),
            (0, i.jsx)(t5, { customizationOption: I.v7.FACE }),
        ],
    });
}
function aD(e) {
    let { route: t } = e;
    switch (t) {
        case j.gr.VOICE_FACE:
            return (0, i.jsx)(ak, {});
        case j.gr.MESSAGES_OUTFIT:
            return (0, i.jsx)(aO, {});
        case j.gr.SERVERS_HEADWEAR:
            return (0, i.jsx)(ay, {});
        case j.gr.EMOJI_SHOES:
            return (0, i.jsx)(t4, {});
        case j.gr.GAMES_WEARABLE:
            return (0, i.jsx)(aN, {});
        case j.gr.GAME_TIME_AURA:
            return (0, i.jsx)(aS, {});
        case j.gr.FINALIZE_CHARACTER:
            return (0, i.jsx)(aE, {});
        default:
            return null;
    }
}
var aP = a(358618),
    aU = a(983851),
    aG = a(793920),
    aH = a(893007),
    aF = a(738964);
function aK(e) {
    return `${Math.round(e)}%`;
}
function aB() {
    let { volume: e, isMuted: t } = (0, m.cf)([u.A], () => ({ volume: u.A.volume, isMuted: u.A.isMuted })),
        a = b.useRef(null),
        r = b.useRef(null),
        [n, s] = b.useState(!1),
        [c, d] = b.useState(!1),
        [l, h] = b.useState(!1),
        [f, p] = b.useState(!1),
        _ = b.useRef(null),
        x = b.useRef(!1),
        g = t ? 0 : Math.round(100 * e),
        A = !f && (n || c || l),
        v = 0 === g ? aP.VoiceXIcon : g > 50 ? aU.VoiceNormalIcon : aG.VoiceLowIcon;
    (b.useLayoutEffect(() => {
        null != r.current && (r.current.volume = e);
    }, [e]),
        (0, K.l0)(() => {
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
            d(!x.current && e.target.matches(":focus-visible"));
        }, []),
        S = b.useCallback(() => {
            ((x.current = !0), d(!1));
        }, []),
        C = b.useCallback(() => {
            ((x.current = !1), d(!0));
        }, []),
        N = b.useCallback(() => {
            s(a.current?.matches(":hover") ?? !1);
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
        className: aF.kL,
        onMouseEnter: I,
        onMouseLeave: E,
        onFocus: j,
        onPointerDownCapture: S,
        onBlur: T,
        onKeyDownCapture: C,
        onKeyDown: R,
        children: [
            (0, i.jsx)(ee, {
                size: "sm",
                className: A ? aF.Gg : void 0,
                "aria-label": tg.intl.string(t ? aR.default.GN0uv6 : aR.default.pjF33X),
                onClick: o.K8,
                children: (0, i.jsx)(v, { size: "xs", color: "currentColor" }),
            }),
            A
                ? (0, i.jsx)("div", {
                      className: aF.xJ,
                      children: (0, i.jsx)(aH.A, {
                          value: g,
                          minValue: 0,
                          maxValue: 100,
                          onChange: w,
                          onChangeEnd: N,
                          formatValue: aK,
                          "aria-label": tg.intl.string(tg.t.xPHVBs),
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
let az =
        "https://cdn.discordapp.com/assets/content/914f6f5e36c680d00944ba2e6278b45f8b1da722692e101b5986cf7be56c4979.mp3",
    aV =
        "https://cdn.discordapp.com/assets/content/d1dfc8280cfbd578f18728598db893d807d9ece6b511389848b7308c399f07a0.mp3";
var aW = a(477155),
    aq = a(866665),
    aY = a(417270),
    aX = a(935286),
    aZ = a(405433),
    aQ = a(289873),
    aJ = a(621466);
function a$(e, t) {
    let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    b.useEffect(() => {
        if (!a) return (window.addEventListener("keydown", r), () => window.removeEventListener("keydown", r));
        function r(a) {
            (0, aJ.vq)(a.target, HTMLTextAreaElement) ||
                (0, aJ.vq)(a.target, HTMLInputElement) ||
                (a.key === e && t(a));
        }
    }, [e, t, a]);
}
var a0 = a(652215),
    a1 = a(650583);
function a2(e) {
    let { source: t, onClick: a, disabled: r = !1 } = e,
        i = tT(t),
        n = b.useRef(!1);
    function s() {
        r || i();
    }
    return {
        playSound: s,
        onPointerDown: function (e) {
            e.button === a0.hE4.PRIMARY && ((n.current = !0), s());
        },
        onKeyDown: function (e) {
            (e.key === a1.dh.ENTER || e.key === a1.dh.SPACE) && ((n.current = !0), e.repeat || s());
        },
        onClickWithSound: function () {
            (n.current || s(), (n.current = !1), a());
        },
    };
}
var a3 = a(753875);
function a8(e) {
    let { "aria-label": t, "aria-describedby": a, icon: r, onClick: n, disabled: s = !1 } = e,
        {
            playSound: c,
            onPointerDown: d,
            onKeyDown: l,
            onClickWithSound: o,
        } = a2({ source: az, onClick: n, disabled: s });
    return (
        a$(
            "ArrowLeft",
            function (e) {
                (e.repeat || c(), n());
            },
            s,
        ),
        (0, i.jsx)(ee, {
            onPointerDown: d,
            onKeyDown: l,
            onClick: o,
            size: "md",
            className: _()(a3.A4, a3.aX),
            "aria-disabled": s,
            "aria-describedby": a,
            "aria-label": t,
            children: (0, i.jsx)(r, { color: "currentColor" }),
        })
    );
}
function a7(e) {
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
        } = a2({ source: aV, onClick: n, disabled: d });
    return (
        a$(
            "ArrowRight",
            function (e) {
                (e.repeat || l(), n());
            },
            d,
        ),
        (0, i.jsx)(et, {
            onPointerDown: o,
            onKeyDown: u,
            onClick: h,
            size: s,
            className: _()(a3.A4, a3.K2, c),
            "aria-disabled": d,
            "aria-describedby": a,
            "aria-label": t,
            children: r,
        })
    );
}
function a5(e) {
    let { "aria-describedby": t, onClick: a, disabled: r } = e;
    return (0, i.jsx)(a8, {
        "aria-label": tg.intl.string(tg.t["13/7kX"]),
        "aria-describedby": t,
        icon: aW.ArrowSmallLeftIcon,
        onClick: a,
        disabled: r,
    });
}
function a6(e) {
    let { onClick: t } = e,
        { onPointerDown: a, onKeyDown: r, onClickWithSound: n } = a2({ source: aV, onClick: t });
    return (0, i.jsx)(aq.m, {
        text: tg.intl.string(tx.default.cWdGf9),
        ariaHidden: !0,
        children: (0, i.jsx)(ee, {
            onPointerDown: a,
            onKeyDown: r,
            onClick: n,
            size: "md",
            className: _()(a3.A4, a3.eZ),
            "aria-label": tg.intl.string(tx.default.cWdGf9),
            children: (0, i.jsx)(aY.RetryIcon, { color: "currentColor" }),
        }),
    });
}
function a9(e) {
    let { "aria-describedby": t, onClick: a, disabled: r } = e;
    return (0, i.jsx)(a7, {
        size: "md",
        "aria-label": tg.intl.string(tg.t.PDTjLN),
        "aria-describedby": t,
        onClick: a,
        disabled: r,
        children: (0, i.jsx)(aX.ArrowSmallRightIcon, { color: "currentColor" }),
    });
}
function a4(e) {
    let { onClick: t, disabled: a } = e;
    return (0, i.jsxs)(a7, {
        size: "custom",
        className: a3.GA,
        "aria-label": tg.intl.string(tg.t.i4jeWR),
        onClick: t,
        disabled: a,
        children: [
            (0, i.jsx)(tb, { variant: "mono-md/normal", className: a3.Pf, children: tg.intl.string(tg.t.i4jeWR) }),
            (0, i.jsx)(aX.ArrowSmallRightIcon, { size: "refresh_sm", color: "currentColor" }),
        ],
    });
}
function re(e) {
    let { onClick: t, disabled: a } = e;
    return (0, i.jsxs)(a7, {
        size: "custom",
        className: _()(a3.GA, a3.Bq),
        "aria-label": tg.intl.string(tg.t.RDE0Sc),
        onClick: t,
        disabled: a,
        children: [
            (0, i.jsx)(tu.E, {
                variant: "mono-md/bold",
                color: "none",
                className: a3.Pf,
                children: tg.intl.string(tg.t.RDE0Sc),
            }),
            (0, i.jsx)(aZ.ShareIcon, { size: "refresh_sm", color: "currentColor" }),
        ],
    });
}
function rt(e) {
    let { onBack: t, isRouteBlocked: a, blockedTraitDescriptionId: r } = e,
        n = (0, m.bG)([u.A], () => u.A.isSaving);
    return (0, i.jsx)(a5, {
        "aria-describedby": r,
        onClick: function () {
            n || t();
        },
        disabled: n || a,
    });
}
function ra(e) {
    let { onNext: t, navigate: a, isRouteBlocked: r, blockedTraitDescriptionId: s } = e,
        c = (0, m.bG)([u.A], () => u.A.isSaving),
        d = c || r;
    async function l() {
        if (c) return;
        let e = (0, P.XI)(u.A.selectedCharacterTraits);
        (await (0, o.yE)(e)) ? t() : (0, n.P0)({ text: tg.intl.string(tg.t.fEptJP), variant: "critical" });
    }
    function h() {
        a(l);
    }
    let {
        playSound: f,
        onPointerDown: b,
        onKeyDown: p,
        onClickWithSound: x,
    } = a2({
        source: "https://cdn.discordapp.com/assets/content/1514d999969512ff06ade75018213676ebaf3698af26c0b1b7d3243ec480f920.mp3",
        onClick: h,
        disabled: d,
    });
    return (
        a$(
            "ArrowRight",
            function (e) {
                (e.repeat || f(), h());
            },
            d,
        ),
        (0, i.jsxs)(et, {
            onPointerDown: b,
            onKeyDown: p,
            onClick: x,
            size: "custom",
            className: _()(a3.A4, a3.K2, a3.GA),
            "aria-disabled": d,
            "aria-describedby": s,
            "aria-label": tg.intl.string(tg.t["R3BPH+"]),
            children: [
                (0, i.jsx)(tu.E, {
                    variant: "mono-md/normal",
                    color: "none",
                    className: a3.Pf,
                    children: tg.intl.string(tg.t["R3BPH+"]),
                }),
                c
                    ? (0, i.jsx)(aQ.y, { type: aQ.t.SPINNING_CIRCLE_SIMPLE, className: a3.u1, itemClassName: a3.$N })
                    : (0, i.jsx)(aX.ArrowSmallRightIcon, { size: "refresh_sm", color: "currentColor" }),
            ],
        })
    );
}
function rr(e) {
    let { activeRoute: t, blockedTrait: a, blockedTraitDescriptionId: r, onBack: n, onNext: s, onReplay: c } = e,
        d = null != a,
        l = b.useMemo(() => (0, eW.throttle)((e) => e(), 500, { trailing: !1 }), []);
    function o(e) {
        null != a ? q(a) : l(e);
    }
    switch (t) {
        case j.gr.HOME:
            return null;
        case j.gr.FINALIZE_CHARACTER:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(rt, { onBack: () => o(n), isRouteBlocked: d, blockedTraitDescriptionId: r }),
                    (0, i.jsx)(ra, { onNext: s, navigate: o, isRouteBlocked: d, blockedTraitDescriptionId: r }),
                ],
            });
        case j.gr.SUMMARY:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(a5, { onClick: () => l(n) }),
                    (0, i.jsx)(a6, { onClick: () => l(c) }),
                    (0, i.jsx)(re, { onClick: () => l(s) }),
                ],
            });
        case j.gr.SHARE:
            return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(a5, { onClick: () => l(n) }), (0, i.jsx)(a4, { onClick: () => l(s) })],
            });
        default:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(a5, { "aria-describedby": r, onClick: () => o(n), disabled: d }),
                    (0, i.jsx)(a9, { "aria-describedby": r, onClick: () => o(s), disabled: d }),
                ],
            });
    }
}
function ri(e) {
    let { className: t } = e;
    return (0, i.jsx)(tr, {
        animatedSrc:
            "https://cdn.discordapp.com/assets/content/02e9ae4cdbec0b2adef22c9a5659f5c7340e399cc8932e8af6d41e62a37644ae.png",
        staticSrc:
            "https://cdn.discordapp.com/assets/content/f08be0abd0d224b5f7e1e5d6c1ef8e4d24cddcb712e2c624dcc6ea3d136818d5.png",
        className: t,
    });
}
var rn = a(771639);
let rs = { "--custom-checkpoint-screen-vertical-inset": "88px" };
function rc(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", { className: rn.n, style: rs, children: t });
}
var rd = a(639331);
let rl = {
    "--custom-checkpoint-intro-fade-in-delay": "1800ms",
    "--custom-checkpoint-intro-fade-in-duration": "1000ms",
};
function ro() {
    let e = (0, m.bG)([u.A], () => u.A.fetchState !== u.T.SUCCESS || null != u.A.stats),
        t = to();
    return (0, i.jsx)(rc, {
        children: (0, i.jsxs)("div", {
            className: rd.Qs,
            style: rl,
            children: [
                (0, i.jsxs)("div", {
                    ref: t,
                    className: rd.Ok,
                    role: "heading",
                    "aria-level": 2,
                    children: ["2026", !e && (0, i.jsx)(ri, { className: rd.gi })],
                }),
                (0, i.jsxs)("div", {
                    className: rd.eH,
                    children: [
                        (0, i.jsx)(tb, {
                            tag: "p",
                            variant: "heading-xl/medium",
                            children: tg.intl.string(e ? tx.default["7YmUVu"] : tx.default["Fyr+NW"]),
                        }),
                        !e &&
                            (0, i.jsx)(tb, {
                                tag: "p",
                                variant: "heading-xl/medium",
                                children: tg.intl.string(tx.default["2GRr6H"]),
                            }),
                    ],
                }),
            ],
        }),
    });
}
(a(134528), a(947204));
var ru = a(675970),
    rh = a(559106),
    rf = a(366056),
    rb = a(292801),
    rp = a(155718),
    r_ = a(294454),
    rm = a(489414),
    rx = a(878358),
    rg = a(383233),
    rA = a(819648),
    rv = a(677059);
function rw(e) {
    let { children: t } = e;
    return (0, i.jsx)(tb, { variant: "heading-xxl/medium", className: rv.h, children: t });
}
function rI(e) {
    let { accessibilityLabel: t, className: a, children: r, ref: n } = e;
    return (0, i.jsxs)("div", {
        ref: n,
        role: "heading",
        "aria-level": 2,
        children: [
            (0, i.jsx)("div", { className: a, "aria-hidden": !0, children: r }),
            (0, i.jsx)(g.A, { children: t }),
        ],
    });
}
var rE = a(100391);
function rj(e) {
    let { icon: t, children: a } = e;
    return (0, i.jsxs)("div", {
        className: rE.D,
        children: [
            (0, i.jsx)(t, { size: "md", color: "currentColor" }),
            (0, i.jsx)(tb, { variant: "heading-lg/semibold", className: rE.Q, children: a }),
        ],
    });
}
function rS(e) {
    let { icon: t, children: a } = e;
    return (0, i.jsxs)("div", {
        className: rE.D,
        children: [
            (0, i.jsx)(t, { size: "md", color: "currentColor" }),
            (0, i.jsx)(tp, { variant: "heading-lg/semibold", className: rE.Q, children: a }),
        ],
    });
}
var rC = a(456410);
function rN(e) {
    let { name: t, label: a, checked: r, onSelect: n, children: s } = e;
    return (0, i.jsx)(rh.vN, {
        within: !0,
        children: (0, i.jsxs)("label", {
            className: _()(rC.uK, { [rC.KD]: r }),
            children: [
                (0, i.jsx)(g.A, {
                    children: (0, i.jsx)("input", { type: "radio", name: t, checked: r, onChange: n, "aria-label": a }),
                }),
                r ? (0, i.jsx)("div", { className: rC.Gt, "aria-hidden": !0 }) : null,
                (0, i.jsx)("div", { className: rC.Nr, "aria-hidden": !0, children: s }),
            ],
        }),
    });
}
function rT() {
    let e = (0, m.bG)([u.A], () => u.A.character),
        t = (0, m.bG)([u.A], () => u.A.stats),
        a = b.useId(),
        r = to(),
        s = b.useMemo(() => {
            var a, r;
            return ((a = e),
            (r = t),
            null != a && null != r
                ? [ru.Q.CHARACTER_ONLY, ru.Q.DEFAULT, ru.Q.STATS_ONLY]
                : null != a
                  ? [ru.Q.CHARACTER_ONLY]
                  : null != r
                    ? [ru.Q.STATS_ONLY]
                    : []).map((a) => ({ cardType: a, checkpointData: (0, rA.Go)(a, e, t) }));
        }, [e, t]),
        [c, d] = b.useState(
            () =>
                (
                    s.find((e) => {
                        let { cardType: t } = e;
                        return t === ru.Q.DEFAULT;
                    }) ?? s.at(0)
                )?.cardType,
        ),
        l = s.find((e) => {
            let { cardType: t } = e;
            return t === c;
        }),
        h = tT(tC),
        {
            onPointerDown: p,
            onKeyDown: _,
            onClickWithSound: x,
        } = a2({
            source: aV,
            onClick: function () {
                if (null == l) return;
                let { cardType: e, checkpointData: t } = l;
                (0, r_.fO)({
                    message: new rg.Ay({
                        content: "",
                        components: [{ type: rp.I5.CHECKPOINT_CARD, id: (0, rm.X1)("0"), checkpointData: t }],
                    }),
                    source: "checkpoint",
                    customSendHandler: async (t, a, r) => {
                        let { withMessage: i } = a;
                        r(!0);
                        try {
                            (await (0, o.jA)(t, i ?? "", e),
                                (0, f.Pe)(e),
                                (0, r_.Be)(),
                                (0, n.P0)({ text: tg.intl.string(tg.t.kwmYkt), variant: "success" }));
                        } catch {
                            (0, n.P0)({ text: tg.intl.string(tg.t.iufib1), variant: "critical" });
                        } finally {
                            r(!1);
                        }
                    },
                });
            },
        });
    return null == l
        ? null
        : (0, i.jsx)(rc, {
              children: (0, i.jsxs)("div", {
                  className: rC.uM,
                  children: [
                      (0, i.jsxs)("div", {
                          className: rC.wx,
                          children: [
                              (0, i.jsxs)(rI, {
                                  ref: r,
                                  className: rC.R_,
                                  accessibilityLabel: tg.intl.string(tx.default.P5zyko),
                                  children: [
                                      (0, i.jsx)(rj, {
                                          icon: rf.ExperimentalCheckpointIcon,
                                          children: tg.intl.string(aR.default.ir6nEQ),
                                      }),
                                      (0, i.jsx)(tb, {
                                          variant: "display-lg",
                                          className: rC.Vy,
                                          children: tg.intl.string(tg.t.RDE0Sc),
                                      }),
                                  ],
                              }),
                              (0, i.jsx)("div", {
                                  className: rC.h_,
                                  children: (0, i.jsx)(rw, { children: tg.intl.string(tx.default.KXDPot) }),
                              }),
                          ],
                      }),
                      (0, i.jsx)("div", {
                          role: "radiogroup",
                          "aria-label": tg.intl.string(tx.default.KXDPot),
                          className: rC.kR,
                          children: s.map((e) => {
                              let { cardType: t, checkpointData: r } = e;
                              return (0, i.jsx)(
                                  rN,
                                  {
                                      name: a,
                                      label: (function (e) {
                                          switch (e) {
                                              case ru.Q.CHARACTER_ONLY:
                                                  return tg.intl.string(tx.default.tUU3fe);
                                              case ru.Q.DEFAULT:
                                                  return tg.intl.string(tx.default.DZQzJn);
                                              case ru.Q.STATS_ONLY:
                                                  return tg.intl.string(tx.default.e2UHGT);
                                          }
                                      })(t),
                                      checked: t === l.cardType,
                                      onSelect: () => {
                                          (h(), d(t));
                                      },
                                      children: (0, i.jsx)(rx.A, { checkpointData: r }),
                                  },
                                  t,
                              );
                          }),
                      }),
                      (0, i.jsxs)(et, {
                          onPointerDown: p,
                          onKeyDown: _,
                          onClick: x,
                          size: "custom",
                          className: rC.sY,
                          "aria-label": tg.intl.string(tg.t.I3ltXO),
                          children: [
                              (0, i.jsx)(tu.E, {
                                  variant: "mono-md/bold",
                                  color: "none",
                                  className: rC.RC,
                                  children: tg.intl.string(tg.t.I3ltXO),
                              }),
                              (0, i.jsx)(rb.ArrowAngleRightUpIcon, { size: "refresh_sm", color: "currentColor" }),
                          ],
                      }),
                  ],
              }),
          });
}
var rR = a(206701),
    rO = a(782134),
    rM = a(998304),
    ry = a(975571),
    rL = a(427262),
    rk = a(438389);
let rD = (0, rM.j5)(V.Kr);
function rP(e) {
    let { onStart: t } = e,
        a = (0, m.bG)([k.default], () => k.default.getCurrentUser()),
        r = (0, rL.tx)(a),
        n = (0, m.bG)([X.Ay], () => X.Ay.useReducedMotion),
        { playSound: s, onPointerDown: c, onKeyDown: d, onClickWithSound: l } = a2({ source: aV, onClick: t });
    return (
        a$("ArrowRight", function (e) {
            (e.repeat || s(), t());
        }),
        (0, i.jsxs)(rc, {
            children: [
                (0, i.jsxs)("div", {
                    className: rk.Qs,
                    children: [
                        (0, i.jsxs)("div", {
                            className: rk.wx,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: rk.Qq,
                                    children: [
                                        (0, i.jsx)(tp, {
                                            variant: "display-lg",
                                            className: rk.DD,
                                            children: tg.intl.string(aR.default["CdU/PF"]),
                                        }),
                                        (0, i.jsx)(tb, {
                                            variant: "heading-xxl/medium",
                                            children: tg.intl.formatToPlainString(tx.default.xhZ23b, { username: r }),
                                        }),
                                    ],
                                }),
                                (0, i.jsx)("div", {
                                    className: rk.CB,
                                    children: (0, i.jsx)(rR.U, {
                                        artboard: "Entry",
                                        className: rk.lW,
                                        fit: "contain",
                                        withReducedMotion: "short-loop",
                                        dataBinding: { iconColor: rD, reducedMotion: n },
                                    }),
                                }),
                            ],
                        }),
                        (0, i.jsxs)(et, {
                            onPointerDown: c,
                            onKeyDown: d,
                            onClick: l,
                            size: "custom",
                            className: rk.ni,
                            "aria-label": tg.intl.string(tg.t.I0v0Qv),
                            children: [
                                (0, i.jsx)(rO.PlayIcon, { size: "refresh_sm", color: "currentColor" }),
                                (0, i.jsx)(tb, {
                                    variant: "mono-md/normal",
                                    className: rk.qK,
                                    children: tg.intl.string(tg.t.I0v0Qv),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: rk.qr,
                    children: [
                        (0, i.jsx)(tb, {
                            variant: "body-sm/medium",
                            className: rk.ed,
                            children: tg.intl.format(tx.default.hcNhyq, {
                                learnMoreHook: (e, t) =>
                                    (0, i.jsx)(
                                        tV.Anchor,
                                        {
                                            className: rk.nf,
                                            href: ry.A.getArticleURL(a0.MVz.CHECKPOINT),
                                            useDefaultUnderlineStyles: !1,
                                            children: e,
                                        },
                                        t,
                                    ),
                            }),
                        }),
                        (0, i.jsx)(tb, {
                            variant: "body-md/medium",
                            className: rk.al,
                            children: tg.intl.format(aR.default.g476ZL, { name: "Exyl" }),
                        }),
                    ],
                }),
            ],
        })
    );
}
var rU = a(565645),
    rG = a(141881);
function rH(e) {
    let { children: t } = e;
    return (0, i.jsx)(tm, { className: rG.l, children: t });
}
var rF = a(765671),
    rK = a(663385),
    rB = a(469228),
    rz = a(406956);
let rV = (0, rM.j5)(V.Kr);
function rW(e) {
    let { value: t, alignment: a = "left", className: r } = e,
        n = (0, m.bG)([X.Ay], () => X.Ay.useReducedMotion),
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
    let u = "center" === a ? rK.m : rB.w;
    return (0, i.jsxs)("div", {
        className: _()(rz.lY, r),
        children: [
            (0, i.jsx)("div", { className: rz.VL, children: t }),
            (0, i.jsx)(u, {
                className: rz.lW,
                fit: "layout",
                withReducedMotion: "short-loop",
                dataBinding: { DisplayValue: o, TextColor: rV },
                onLoad: l,
            }),
            (0, i.jsx)(g.A, { children: t.toLocaleString(tg.intl.currentLocale) }),
        ],
    });
}
var rq = a(434911);
function rY(e) {
    let { value: t } = e,
        { ref: a, width: r } = (0, rF.Ay)(),
        { ref: n, width: s } = (0, rF.Ay)(),
        c = null != r && null != s ? Math.min(1, r / s) : 1;
    return (0, i.jsxs)("div", {
        ref: a,
        className: rq.ai,
        style: { height: 200 * c },
        children: [
            (0, i.jsx)("span", { ref: n, className: _()(rq.Qq, rq.xP), children: t }),
            (0, i.jsx)(rW, { value: t }),
        ],
    });
}
function rX(e) {
    let { value: t } = e;
    return (0, i.jsxs)("div", {
        className: rq.dJ,
        children: [
            "number" == typeof t
                ? (0, i.jsx)(rY, { value: t })
                : (0, i.jsx)(tb, { variant: "heading-xxl/medium", className: rq.Qq, children: t }),
            (0, i.jsx)(ri, { className: rq.gi }),
        ],
    });
}
var rZ = a(445199),
    rQ = a(205524),
    rJ = a(690521),
    r$ = a(152321);
let r0 = [0, 0, 2],
    r1 = [0, 1, 0],
    r2 = [0, 0, 0],
    r3 = `
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
    r8 = `
precision mediump float;

varying vec2 v_texcoord;
varying highp vec3 v_lighting;

uniform sampler2D u_texture;

void main() {
  highp vec4 texelColor = texture2D(u_texture, v_texcoord);
  gl_FragColor = vec4(texelColor.rgb * v_lighting, texelColor.a);
}
`,
    r7 = [
        -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5,
        -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5,
        0.5, 0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, -0.5,
        -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5,
        -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5,
        -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5,
    ],
    r5 = [
        0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0,
        1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0,
    ],
    r6 = [
        0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
        1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
        -1, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
        1, 0, 0,
    ];
function r9(e) {
    let t,
        { emoji: a } = e,
        [r, n] = b.useState(null),
        [s, c] = b.useState(null),
        d = b.useRef(new Image()),
        [l, o] = b.useState(null),
        [u, h] = b.useState(!1),
        f = b.useRef(0),
        p = b.useRef(0),
        x = b.useRef(45),
        g = b.useRef(45),
        A = (0, m.bG)([X.Ay], () => X.Ay.useReducedMotion),
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
                (i.shaderSource(n, r3),
                i.shaderSource(c, r8),
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
                i.bufferData(i.ARRAY_BUFFER, new Float32Array(r6), i.STATIC_DRAW),
                i.vertexAttribPointer(f, 3, i.FLOAT, !1, 0, 0),
                i.enableVertexAttribArray(f));
            let _ = i.createBuffer();
            (i.bindBuffer(i.ARRAY_BUFFER, _),
                (e = new Float32Array(r7)),
                i.bufferData(i.ARRAY_BUFFER, e, i.STATIC_DRAW));
            let m = i.createBuffer();
            (i.bindBuffer(i.ARRAY_BUFFER, m), i.bufferData(i.ARRAY_BUFFER, new Float32Array(r5), i.STATIC_DRAW));
            let A = rZ.DF(60);
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
                    let s = rZ.DF(x.current),
                        c = rZ.DF(g.current);
                    (i.clear(i.COLOR_BUFFER_BIT | i.DEPTH_BUFFER_BIT),
                        i.useProgram(d),
                        i.enableVertexAttribArray(l),
                        i.bindBuffer(i.ARRAY_BUFFER, _),
                        i.vertexAttribPointer(l, 3, i.FLOAT, !1, 0, 0),
                        i.enableVertexAttribArray(o),
                        i.bindBuffer(i.ARRAY_BUFFER, m),
                        i.vertexAttribPointer(o, 2, i.FLOAT, !1, 0, 0));
                    let f = r.clientWidth / r.clientHeight,
                        p = rQ.fN(rQ.vt(), A, f, 1, 2e3),
                        v = rQ.t5(rQ.vt(), r0, r2, r1),
                        w = rQ.lw(rQ.vt(), p, v),
                        I = rQ.vt();
                    (rQ.eL(I, I, s), rQ.Z8(I, I, c));
                    let E = rQ.lw(rQ.vt(), w, I),
                        j = rQ.vt();
                    (rQ.B8(j, I),
                        rQ.mg(j, j),
                        i.uniformMatrix4fv(b, !1, j),
                        i.uniformMatrix4fv(u, !1, E),
                        i.uniform1i(h, 0),
                        i.drawArrays(i.TRIANGLES, 0, 36),
                        (a = requestAnimationFrame(e)));
                })),
                () => cancelAnimationFrame(a)
            );
        }, [x, g, r, s]));
    let N = b.useCallback(() => {
        let e = s?.getContext("2d");
        null != s &&
            null != e &&
            ((e.fillStyle = "black"),
            e.fillRect(0, 0, s.width, s.height),
            e.drawImage(d.current, 0, 0, s.width, s.height),
            (e.fillStyle = V.Kr),
            e.fillRect(0, 0, s.width, 2),
            e.fillRect(0, 0, 2, s.height),
            e.fillRect(0, s.height - 2, s.width, 2),
            e.fillRect(s.width - 2, 0, 2, s.height),
            o(a),
            h(!0));
    }, [a, d, s]);
    (b.useEffect(() => {
        null != s &&
            ((d.current.crossOrigin = "anonymous"), (d.current.src = (0, rJ.Ez)(a, 512)), (d.current.onload = N));
    }, [a, N, d, s]),
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
                    className: _()(r$.Ji, { [r$.q4]: !u }),
                    ref: n,
                    height: 512,
                    width: 512,
                    onMouseDown: T,
                }),
                (0, i.jsx)("canvas", { className: r$.R, ref: c, height: 512, width: 512 }),
            ],
        })
    );
}
var r4 = a(826820);
let ie = [];
function it(e) {
    let { emojiStats: t } = e,
        a = Math.round(t?.numEmojisSent ?? 0),
        r = (0, z.bD)(t?.numEmojisSentPercentile);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: r4.dJ,
                children: [
                    (0, i.jsx)(rS, {
                        icon: tl.EmojiSlightlySmilingFaceIcon,
                        children: tg.intl.string(tx.default.ZTDCIv),
                    }),
                    (0, i.jsx)(rW, { value: a }),
                ],
            }),
            (0, i.jsx)(rw, {
                children:
                    null != r
                        ? tg.intl.format(tx.default.o7vDrk, {
                              percent: r,
                              percentHook: (e, t) => (0, i.jsx)(rH, { children: e }, t),
                          })
                        : tg.intl.format(tx.default.NFptic, { numEmojis: a }),
            }),
        ],
    });
}
function ia(e) {
    let { numEmojisSent: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: r4.dJ,
                children: [
                    (0, i.jsx)(rS, {
                        icon: tl.EmojiSlightlySmilingFaceIcon,
                        children: tg.intl.string(tx.default.ZTDCIv),
                    }),
                    (0, i.jsx)(rX, { value: t }),
                ],
            }),
            (0, i.jsx)(rw, { children: tg.intl.format(tx.default["660/Rr"], { numEmojis: (0, z.wj)(t) }) }),
        ],
    });
}
function ir() {
    let e = (0, m.bG)([u.A], () => u.A.stats?.emojis),
        t = (0, m.bG)([u.A], () => (0, z.y7)(u.A.stats)),
        a = (0, m.bG)([u.A], () => u.A.globalStats?.emojis),
        r = !t && null != a,
        n = (r ? a.emojis : e?.emojis) ?? ie,
        [s, c] = b.useState(0),
        d = n[s],
        l = tT(tC);
    return (0, i.jsx)(rc, {
        children: (0, i.jsxs)("div", {
            className: r4.kL,
            children: [
                (0, i.jsx)("div", { className: r4.KY, children: null != d && (0, i.jsx)(r9, { emoji: d }) }),
                (0, i.jsxs)("div", {
                    className: r4.C,
                    children: [
                        r ? (0, i.jsx)(ia, { numEmojisSent: a.numEmojisSent }) : (0, i.jsx)(it, { emojiStats: e }),
                        (0, i.jsx)("div", {
                            className: r4.gm,
                            children: n.map((e, t) =>
                                (0, i.jsx)(
                                    ii,
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
function ii(e) {
    let { emoji: t, rank: a, isActive: r, onClick: n } = e,
        s = !(0, m.bG)([X.Ay], () => X.Ay.useReducedMotion) && !0 === t.animated;
    return (0, i.jsxs)(ee, {
        size: "custom",
        className: r4._X,
        onClick: n,
        "aria-label": tg.intl.formatToPlainString(tx.default["S5+pRg"], { emojiName: t.name, rank: a }),
        "aria-pressed": r,
        children: [
            (0, i.jsx)(rU.A, { className: r4.Zg, emojiId: t.id, emojiName: t.name, animated: s }),
            (0, i.jsx)(tb, { variant: "mono-md/bold", className: r4.Tm, children: a }),
        ],
    });
}
var is = a(360450),
    ic = a(214947),
    id = a(939249),
    il = a(597770),
    io = a(559647),
    iu = a(95369),
    ih = a(570287),
    ib = a(486020);
let ip = { 0: 1100, 1: 1e3 };
var i_ = a(801305);
let im = [],
    ix = (0, rM.j5)(V.Kr),
    ig = { r: 0, g: 0, b: 0, a: 1 },
    iA = {
        "Avatar01/Stroke": ig,
        "Avatar01/Fill": ix,
        "Avatar02/Stroke": ig,
        "Avatar02/Fill": ix,
        "Avatar03/Stroke": ig,
        "Avatar03/Fill": ix,
        "Avatar04/Stroke": ig,
        "Avatar04/Fill": ix,
        "Avatar05/Stroke": ig,
        "Avatar05/Fill": ix,
        ConnectorColor: ix,
    };
function iv(e) {
    return null != e ? ib.Ay.getUserAvatarURL(e, !1, 160, "png") : void 0;
}
function iw(e) {
    let t,
        { route: a, onNextStep: r, onPreviousStep: n } = e,
        s = (0, m.bG)([u.A], () => u.A.stats?.users ?? im),
        c = (0, m.bG)([u.A], () => u.A.stats?.sidekick),
        d = (0, m.bG)([k.default], () => k.default.getCurrentUser()),
        l = (0, m.bG)([X.Ay], () => X.Ay.useReducedMotion),
        o = b.useRef(null),
        h = b.useRef(void 0),
        { animationState: f, isTransitioning: p } = (function (e, t) {
            var a;
            let [r, i] = b.useState({ route: e, hasShownSquad: e === j.gr.SQUAD, transition: null });
            r.route !== e &&
                i({
                    route: e,
                    hasShownSquad: r.hasShownSquad || e === j.gr.SQUAD,
                    transition:
                        ((a = r.route),
                        t
                            ? null
                            : a === j.gr.SQUAD && e === j.gr.SIDEKICK
                              ? 0
                              : a === j.gr.SIDEKICK && e === j.gr.SQUAD
                                ? 1
                                : null),
                });
            let { transition: n } = r;
            b.useEffect(() => {
                if (null == n) return;
                let e = setTimeout(() => i((e) => ({ ...e, transition: null })), ip[n]);
                return () => clearTimeout(e);
            }, [n]);
            let s = e === j.gr.SIDEKICK || e === j.gr.SIDEKICK_LEAVE;
            return {
                animationState: (function (e) {
                    let { route: t, hasShownSquad: a, transition: r, isReducedMotion: i } = e;
                    switch (t) {
                        case j.gr.SQUAD_TRANSITION:
                            return 5 * !!a;
                        case j.gr.SQUAD:
                            return 1;
                        case j.gr.SIDEKICK:
                            return 0 === r ? 2 : 3;
                        case j.gr.SIDEKICK_LEAVE:
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
            if (a !== j.gr.SIDEKICK_LEAVE) {
                t.current = !1;
                return;
            }
            if (t.current) return void n();
            if (l) return void r();
            let e = setTimeout(r, 1e3);
            return () => clearTimeout(e);
        }, [r, n, l, a]));
    let [x, A] = s,
        v = (0, rL.tx)(x) ?? "",
        w = (0, rL.tx)(A) ?? "",
        I = v.toLocaleUpperCase(),
        E = w.toLocaleUpperCase(),
        S = (0, rL.tx)(c?.user) ?? "",
        C = [
            { user: c?.user, name: S },
            { user: x, name: v },
            { user: A, name: w },
        ].filter((e) => null != e.user),
        N = s.length < 2,
        T = a === j.gr.SIDEKICK || a === j.gr.SIDEKICK_LEAVE;
    b.useEffect(() => () => clearInterval(h.current), []);
    let R = b.useCallback(() => {
        (clearInterval(h.current),
            (h.current = setInterval(() => {
                let e = o.current?.getProperties();
                e?.twoFriends?.value === N &&
                    e?.reducedMotion?.value === l &&
                    e?.["Avatar01/Username"]?.value === S.toLocaleUpperCase() &&
                    (o.current?.play(), clearInterval(h.current));
            }, 50)));
    }, [l, S, N]);
    return (0, i.jsxs)(rc, {
        children: [
            (0, i.jsx)(is.m, {
                ref: o,
                className: i_.lW,
                fit: "contain",
                autoplay: !1,
                onLoad: R,
                withReducedMotion: "play",
                dataBinding: {
                    ...iA,
                    AnimationState: f,
                    "Avatar01/img": iv(c?.user),
                    "Avatar02/img": iv(A),
                    "Avatar03/img": iv(x),
                    "Avatar04/img": iv(c?.user),
                    "Avatar05/img": iv(d),
                    "Avatar01/Username": S.toLocaleUpperCase(),
                    "Avatar02/Username": E,
                    "Avatar03/Username": I,
                    "Avatar04/Username": S.toLocaleUpperCase(),
                    twoFriends: N,
                    reducedMotion: l,
                },
            }),
            (0, i.jsx)(en, {
                visible: a === j.gr.SQUAD_TRANSITION,
                enter: e8,
                exit: e7,
                mountAfterDelay: !0,
                className: _()(i_.Qs, i_.kY),
                children: (0, i.jsx)(iI, {}),
            }),
            (0, i.jsxs)(en, {
                visible: a === j.gr.SQUAD && !p,
                enter: e8,
                exit: e7,
                mountAfterDelay: !0,
                className: i_.Qs,
                children: [
                    (0, i.jsx)(iE, {
                        title: tg.intl.string(aR.default.OzY5Ns),
                        accessibilityLabel: tg.intl.string(tx.default.OSo1fB),
                        description: tg.intl.string(tx.default.EqdLDd),
                    }),
                    (0, i.jsx)(g.A, {
                        tag: "ul",
                        children: C.map((e, t) => (0, i.jsx)("li", { children: e.name }, t)),
                    }),
                ],
            }),
            null != c &&
                (0, i.jsxs)(en, {
                    visible: T && !p,
                    enter: e3,
                    exit: e7,
                    mountAfterDelay: !0,
                    className: _()(i_.Qs, i_.yG),
                    children: [
                        (0, i.jsxs)("div", {
                            className: i_.Cv,
                            children: [
                                (0, i.jsx)(iE, {
                                    title: tg.intl.string(aR.default["+uwOHt"]),
                                    accessibilityLabel: tg.intl.string(tx.default.X4EiRH),
                                    description: tg.intl.string(tx.default["/ctmGw"]),
                                }),
                                (0, i.jsx)(g.A, { children: S }),
                                (0, i.jsx)(ij, { sidekick: c }),
                            ],
                        }),
                        (0, i.jsx)(iS, { user: c.user, username: S }),
                    ],
                }),
        ],
    });
}
function iI() {
    let e = to();
    return (0, i.jsx)("div", {
        ref: e,
        className: _()(i_.Qs, i_.kY),
        children: (0, i.jsx)(rw, { children: tg.intl.string(tx.default["6RSp5q"]) }),
    });
}
function iE(e) {
    let { title: t, accessibilityLabel: a, description: r } = e,
        n = to();
    return (0, i.jsxs)("div", {
        className: i_.wx,
        children: [
            (0, i.jsxs)(rI, {
                ref: n,
                className: i_.R_,
                accessibilityLabel: a,
                children: [
                    (0, i.jsx)(rj, { icon: ic.FriendsIcon, children: tg.intl.string(aR.default.ZQakPR) }),
                    (0, i.jsx)(tb, { variant: "display-lg", className: i_.Vy, children: t }),
                ],
            }),
            (0, i.jsx)(rw, { children: r }),
        ],
    });
}
function ij(e) {
    let { sidekick: t } = e,
        a = Math.round(t.numMessagesSent),
        r = Math.round(t.numVoiceMinutes);
    return (0, i.jsxs)("div", {
        className: i_.M1,
        children: [
            (0, i.jsxs)("div", {
                className: i_.dJ,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(aT.ChatIcon, { size: "md", color: "currentColor" }),
                    (0, i.jsx)(tb, { variant: "heading-xxl/medium", className: i_.wk, children: a }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: i_.dJ,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(aL.MicrophoneIcon, { size: "md", color: "currentColor" }),
                    (0, i.jsx)(tb, { variant: "heading-xxl/medium", className: i_.wk, children: r }),
                ],
            }),
            (0, i.jsx)(g.A, {
                children: tg.intl.formatToPlainString(tx.default.NafXAs, { numMessages: a, numMinutes: r }),
            }),
        ],
    });
}
function iS(e) {
    let { user: t, username: a } = e,
        [r, s] = b.useState(""),
        [c, d] = b.useState(!1),
        [l, u] = b.useState(!1),
        h = (0, ih.A)(t.id),
        p = r.length > 0 && r.length <= 250 && !c && !l,
        m = c ? tg.intl.string(tg.t.fjcCk5) : tg.intl.formatToPlainString(tg.t["0ZQw/X"], { name: a });
    return h
        ? (0, i.jsxs)("div", {
              className: i_.OG,
              children: [
                  (0, i.jsx)("textarea", {
                      className: i_.yB,
                      value: r,
                      onChange: (e) => s(e.target.value),
                      maxLength: 250,
                      disabled: c || l,
                      placeholder: m,
                      "aria-label": m,
                  }),
                  (0, i.jsxs)("div", {
                      className: i_.n,
                      children: [
                          (0, i.jsx)(id.D, {
                              className: i_.KD,
                              onClick: function () {
                                  ((0, f.nr)(t.id),
                                      (0, iu.A)({
                                          giftRecipient: t,
                                          analyticsLocations: [tW.A.CHECKPOINT, tW.A.CHECKPOINT_SIDEKICK],
                                      }));
                              },
                              "aria-label": tg.intl.string(tg.t.Ve9Ge6),
                              children: (0, i.jsx)(il.GiftIcon, { size: "refresh_sm", color: "currentColor" }),
                          }),
                          (0, i.jsx)(id.D, {
                              className: _()(i_.KD, { [i_.r9]: !p }),
                              onClick: async function () {
                                  if (p) {
                                      u(!0);
                                      try {
                                          (await (0, o.fr)(r, t.id),
                                              s(""),
                                              d(!0),
                                              x.O.announce(tg.intl.string(tg.t.fjcCk5), "polite"));
                                      } catch {
                                          (0, n.P0)({ text: tg.intl.string(tg.t.fEptJP), variant: "critical" });
                                      } finally {
                                          u(!1);
                                      }
                                  }
                              },
                              "aria-disabled": !p,
                              "aria-label": tg.intl.string(tg.t.oeb1vg),
                              children: (0, i.jsx)(io.SendMessageIcon, { size: "refresh_sm", color: "currentColor" }),
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
var iC = a(9767);
function iN(e) {
    let { games: t } = e,
        a = Math.round(t?.totalDaysPlayed ?? 0),
        r = (0, z.bD)(t?.totalDaysPlayedPercentile);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: iC.dJ,
                children: [
                    (0, i.jsx)(rS, { icon: aj.CalendarIcon, children: tg.intl.string(tx.default["4N5p4D"]) }),
                    (0, i.jsx)(rW, { value: a }),
                ],
            }),
            (0, i.jsx)(rw, {
                children:
                    null != r
                        ? tg.intl.format(tx.default["4FXB/m"], {
                              percent: r,
                              percentHook: (e, t) => (0, i.jsx)(rH, { children: e }, t),
                          })
                        : tg.intl.format(tx.default.iCKjh6, { numDays: a }),
            }),
        ],
    });
}
function iT(e) {
    let { numUsersPlayedEveryDay: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: iC.dJ,
                children: [
                    (0, i.jsx)(rS, { icon: aj.CalendarIcon, children: tg.intl.string(tx.default["dx4+NI"]) }),
                    (0, i.jsx)(rX, { value: t }),
                ],
            }),
            (0, i.jsx)(rw, { children: tg.intl.string(tx.default["7nfXWu"]) }),
        ],
    });
}
function iR() {
    let e = (0, m.bG)([u.A], () => u.A.stats?.games),
        t = (0, m.bG)([u.A], () => (0, z.uO)(u.A.stats)),
        a = (0, m.bG)([u.A], () => u.A.globalStats?.games?.numUsersPlayedEveryDay),
        r = !t && null != a;
    return (0, i.jsx)(rc, {
        children: (0, i.jsxs)("div", {
            className: iC.kL,
            children: [
                (0, i.jsx)(tr, {
                    animatedSrc:
                        "https://cdn.discordapp.com/assets/content/e3289e9a0a7faf4db23c3fefa390126fc64a09120fdb701f9dea833dddf671ef.png",
                    staticSrc:
                        "https://cdn.discordapp.com/assets/content/312abde9b19fcf85150d507de3f33096992506459b895ab3ea8d92c8f1e04a28.png",
                    className: iC.HW,
                }),
                (0, i.jsx)("div", {
                    className: iC.C,
                    children: r ? (0, i.jsx)(iT, { numUsersPlayedEveryDay: a }) : (0, i.jsx)(iN, { games: e }),
                }),
            ],
        }),
    });
}
var iO = a(95362),
    iM = a(828062);
function iy(e) {
    let { children: t } = e;
    return (0, i.jsx)(tb, { variant: "display-lg", className: iM.V, children: t });
}
function iL(e) {
    let { children: t } = e;
    return (0, i.jsx)(tp, { variant: "display-lg", className: iM.V, children: t });
}
var ik = a(109112),
    iD = a(311043),
    iP = a(883053);
function iU(e) {
    let { rank: t, className: a } = e;
    return (0, i.jsxs)(tm, { className: _()(iP.T, a), children: ["#", t] });
}
var iG = a(770178),
    iH = a(102189);
let iF = { fireOnMount: !0, fireOnDepsChange: !0 };
function iK(e) {
    let { text: t, textRef: a, children: r } = e,
        n = (function (e, t) {
            let [a, r] = b.useState(!1),
                i = b.useCallback((e) => {
                    let { target: t } = e;
                    r(t.scrollWidth > t.clientWidth);
                }, []);
            return ((0, iG.g)(e, i, [t], iF), a);
        })(a, t);
    return (0, i.jsx)(aq.m, {
        text: t,
        position: "bottom",
        anchorRef: a,
        shouldShow: n,
        ariaHidden: !0,
        children: r({ tabIndex: n ? 0 : void 0, className: iH.Y }),
    });
}
var iB = a(331144);
let iz = {
        viewBox: `0 0 ${ah.width} ${ah.height}`,
        outline:
            "M-2 -2L183.811 -2L194 9.029L194 253L8.24 253L-2 242.84ZM0 242.007L9.064 251L192 251L192 9.811L182.936 0L0 0ZM-2 -2L182 -2L182 242L-2 242ZM0 240L180 240L180 0L0 0Z",
        corner: "M179.582 239.13L192.002 251.508",
    },
    iV = {
        viewBox: `0 0 ${af.width} ${af.height}`,
        outline:
            "M-2 -2L221.452 -2L233.503 11.103L233.503 306.01L10.103 306.01L-2 293.947ZM0 293.117L10.929 304.01L231.503 304.01L231.503 11.883L220.574 0L0 0ZM-2 -2L222 -2L222 295L-2 295ZM0 293L220 293L220 0L0 0Z",
        corner: "M219.582 291.133L232.002 303.511",
        stripes:
            "M10.93 291.133l13.91 13.863M20.863 291.133l13.91 13.863M30.801 291.133l13.91 13.863M40.738 291.133l13.91 13.863M50.672 291.133l13.91 13.863M60.609 291.133l13.91 13.863M70.543 291.133l13.91 13.863M80.481 291.133l13.91 13.863M90.414 291.133l13.91 13.863M100.352 291.133l13.91 13.863M110.285 291.133l13.91 13.863M120.223 291.133l13.91 13.863M130.16 291.133l13.91 13.863M140.094 291.133l13.91 13.863M150.031 291.133l13.91 13.863M159.965 291.133l13.91 13.863M169.902 291.133l13.91 13.863M179.836 291.133l13.91 13.863M189.773 291.133l13.91 13.863M199.707 291.133l13.91 13.863M209.645 291.133l13.91 13.863M219.582 13.867l12.42 12.378M219.582 23.766l12.42 12.378M219.582 33.672l12.42 12.378M219.582 43.57l12.42 12.378M219.582 53.477l12.42 12.378M219.582 63.375l12.42 12.378M219.582 73.281l12.42 12.378M219.582 83.18l12.42 12.378M219.582 93.086l12.42 12.378M219.582 102.984l12.42 12.378M219.582 112.891l12.42 12.378M219.582 122.789l12.42 12.378M219.582 132.695l12.42 12.378M219.582 142.594l12.42 12.378M219.582 152.5l12.42 12.378M219.582 162.406l12.42 12.378M219.582 172.305l12.42 12.378M219.582 182.211l12.42 12.378M219.582 192.109l12.42 12.378M219.582 202.016l12.42 12.378M219.582 211.914l12.42 12.378M219.582 221.82l12.42 12.378M219.582 231.719l12.42 12.378M219.582 241.625l12.42 12.378M219.582 251.523l12.42 12.378M219.582 261.43l12.42 12.378M219.582 271.328l12.42 12.378M219.582 281.234l12.42 12.378",
    };
function iW(e) {
    let { paths: t, className: a, children: r } = e;
    return (0, i.jsxs)("div", {
        className: _()(iB.aP, a),
        children: [
            (0, i.jsxs)("svg", {
                className: iB.qd,
                viewBox: t.viewBox,
                preserveAspectRatio: "none",
                "aria-hidden": !0,
                children: [
                    null != t.stripes && (0, i.jsx)("path", { d: t.stripes, className: iB.RY }),
                    (0, i.jsx)("path", { d: t.corner, className: iB.WO }),
                ],
            }),
            r,
            (0, i.jsx)("svg", {
                className: iB.qd,
                viewBox: t.viewBox,
                preserveAspectRatio: "none",
                "aria-hidden": !0,
                children: (0, i.jsx)("path", { d: t.outline, className: iB.rj }),
            }),
        ],
    });
}
function iq(e) {
    return (0, i.jsx)(iW, { ...e, paths: iz });
}
function iY(e) {
    return (0, i.jsx)(iW, { ...e, paths: iV });
}
var iX = a(497357);
function iZ(e) {
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
        b = (0, m.bG)(
            [iD.A],
            () =>
                iD.A.getGame(t)?.getCoverURL(300) ??
                ib.Ay.getApplicationIconURL({ id: t, icon: r, size: 300, keepAspectRatio: !0, fallbackAvatar: !1 }),
        );
    return (0, i.jsxs)("div", {
        ...f,
        role: "listitem",
        className: _()(iX.LO, o),
        style: d,
        children: [
            (0, i.jsx)("div", {
                className: iX.Tn,
                "aria-hidden": null != l,
                children: (0, i.jsxs)(c, {
                    className: iX.LG,
                    children: [
                        null != b
                            ? (0, i.jsx)("img", { src: b, alt: "", className: iX.Qw })
                            : (0, i.jsx)("div", {
                                  className: _()(iX.Qw, iX.uj),
                                  children: (0, i.jsx)(ik.UnknownGameIcon, { size: "lg" }),
                              }),
                        null != n && (0, i.jsx)(iU, { rank: n, className: iX.Tm }),
                    ],
                }),
            }),
            (0, i.jsxs)("div", {
                className: iX.zH,
                "aria-hidden": null != l,
                children: [
                    (0, i.jsx)(tb, {
                        ref: u,
                        variant: "heading-xl/medium",
                        className: iX.UU,
                        lineClamp: h,
                        children: a,
                    }),
                    (0, i.jsx)(tb, { variant: "mono-md/bold", className: iX.Pf, children: s }),
                ],
            }),
            null != l && (0, i.jsx)(g.A, { children: l }),
        ],
    });
}
function iQ(e) {
    let t = b.useRef(null);
    return (0, i.jsx)(iK, {
        text: e.game.name,
        textRef: t,
        children: (a) => {
            let { tabIndex: r, className: n } = a;
            return (0, i.jsx)(iZ, { ...e, className: _()(e.className, n), tabIndex: r, textRef: t, lineClamp: 1 });
        },
    });
}
function iJ(e, t, a) {
    return tg.intl.formatToPlainString(tx.default.mqdLhl, { gameName: e.name, rank: t, numSessions: a });
}
function i$(e) {
    let { numSessions: t, ...a } = e,
        r = Math.round(t);
    return (0, i.jsx)(iQ, { ...a, label: r, frame: iq, style: ap, accessibilityLabel: iJ(a.game, a.rank, r) });
}
function i0(e) {
    let { numSessions: t, ...a } = e,
        r = Math.round(t);
    return (0, i.jsx)(iQ, { ...a, rank: 1, label: r, frame: iY, style: a_, accessibilityLabel: iJ(a.game, 1, r) });
}
function i1(e) {
    return (0, i.jsx)(iZ, { ...e, frame: iq, style: ap, className: iX.Ku });
}
var i2 = a(842807);
let i3 = [];
function i8(e) {
    let { gameStats: t } = e,
        a = Math.round(t?.totalGamesPlayed ?? 0),
        r = (0, z.bD)(t?.totalGamesPlayedPercentile),
        n = t?.games ?? i3;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: i2.wx,
                children: [
                    (0, i.jsxs)("div", {
                        className: i2.dJ,
                        children: [
                            (0, i.jsx)(rS, {
                                icon: aC.GameControllerIcon,
                                children: tg.intl.string(tx.default.HM2fjf),
                            }),
                            (0, i.jsx)(rW, { value: a, className: i2.ai }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: i2.h_,
                        children: (0, i.jsx)(rw, {
                            children:
                                null != r
                                    ? tg.intl.format(tx.default["hc0/yJ"], {
                                          percent: r,
                                          percentHook: (e, t) => (0, i.jsx)(rH, { children: e }, t),
                                      })
                                    : tg.intl.format(tx.default.aJMJ6b, { numGames: a }),
                        }),
                    }),
                ],
            }),
            (0, i.jsx)(iO.Ip, {
                orientation: "horizontal",
                scrollbarGutter: !1,
                fade: !0,
                className: i2.ag,
                role: "list",
                children: n.map((e, t) => {
                    let { game: a, numSessions: r } = e;
                    return 0 === t
                        ? (0, i.jsx)(i0, { game: a, numSessions: r }, a.id)
                        : (0, i.jsx)(i$, { game: a, rank: t + 1, numSessions: r }, a.id);
                }),
            }),
        ],
    });
}
function i7(e) {
    let { gameStats: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: _()(i2.wx, i2.l7),
                children: [
                    (0, i.jsxs)("div", {
                        className: i2.dJ,
                        children: [
                            (0, i.jsx)(ri, { className: i2.gi }),
                            (0, i.jsx)(iL, { children: tg.intl.string(tx.default.qbCgI7) }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: i2.h_,
                        children: (0, i.jsx)(rw, { children: tg.intl.string(tx.default["0oDeiM"]) }),
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: _()(i2.ag, i2.Zs),
                role: "list",
                children: V.Jb.map((e) => {
                    let { list: a, label: r } = e,
                        n = t[a][0];
                    return null != n ? (0, i.jsx)(i1, { game: n, label: tg.intl.string(r) }, a) : null;
                }),
            }),
        ],
    });
}
function i5() {
    let e = (0, m.bG)([u.A], () => u.A.stats?.games),
        t = (0, m.bG)([u.A], () => (0, z.IH)(u.A.stats)),
        a = (0, m.bG)([u.A], () => u.A.globalStats?.games),
        r = !t && null != a;
    return (0, i.jsx)(rc, {
        children: (0, i.jsx)("div", {
            className: _()(i2.kL, { [i2.TF]: r }),
            children: r ? (0, i.jsx)(i7, { gameStats: a }) : (0, i.jsx)(i8, { gameStats: e }),
        }),
    });
}
var i6 = a(167662);
function i9(e) {
    let { messages: t } = e,
        a = Math.round(t?.numMessagesSent ?? 0),
        r = (0, z.bD)(t?.numMessagesSentPercentile);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: i6.dJ,
                children: [
                    (0, i.jsx)(rS, { icon: aT.ChatIcon, children: tg.intl.string(aR.default.wWKySP) }),
                    (0, i.jsx)(rW, { value: a }),
                ],
            }),
            (0, i.jsx)(rw, {
                children:
                    null != r
                        ? tg.intl.format(tx.default.TOMBAW, {
                              percent: r,
                              percentHook: (e, t) => (0, i.jsx)(rH, { children: e }, t),
                          })
                        : tg.intl.format(tx.default.cYCqz8, { numMessages: a }),
            }),
        ],
    });
}
function i4(e) {
    let { numWordsSent: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: i6.dJ,
                children: [
                    (0, i.jsx)(rS, { icon: aT.ChatIcon, children: tg.intl.string(tx.default["2BuyVC"]) }),
                    (0, i.jsx)(rX, { value: t }),
                ],
            }),
            (0, i.jsx)(rw, {
                children: tg.intl.format(tx.default.bAxEs2, {
                    numWords: (0, z.wj)(t),
                    numCopies: (0, z.wj)((0, z.yQ)(t)),
                }),
            }),
        ],
    });
}
function ne() {
    let e = (0, m.bG)([u.A], () => u.A.stats?.messages),
        t = (0, m.bG)([u.A], () => (0, z.nb)(u.A.stats)),
        a = (0, m.bG)([u.A], () => u.A.globalStats?.messages?.numWordsSent),
        r = !t && null != a;
    return (0, i.jsx)(rc, {
        children: (0, i.jsxs)("div", {
            className: i6.kL,
            children: [
                (0, i.jsx)(tr, {
                    animatedSrc:
                        "https://cdn.discordapp.com/assets/content/d2d8036bb6a32967893421f9956b9e8ed30abde474f68c1a34e824205549c5a1.png",
                    staticSrc:
                        "https://cdn.discordapp.com/assets/content/1dfd8684180df4216b23f0a61617250be8fcc12bc1970ac259892f34fbdb836d.png",
                    className: i6.HW,
                }),
                (0, i.jsx)("div", {
                    className: i6.C,
                    children: r ? (0, i.jsx)(i4, { numWordsSent: a }) : (0, i.jsx)(i9, { messages: e }),
                }),
            ],
        }),
    });
}
var nt = a(682163),
    na = a(224865);
let nr = nt.iu[nt.Ay.Sizes.XLARGE];
function ni(e) {
    let { guild: t, size: a } = e;
    return null == t.icon && a < 48
        ? (0, i.jsx)("div", {
              className: _()(na.K, na.J),
              style: { width: a, height: a },
              "aria-hidden": !0,
              children: (0, i.jsx)(tu.E, { variant: "body-md/medium", children: (0, z.oW)(t.name) }),
          })
        : (0, i.jsx)(nt.Ay, {
              guild: t,
              size: nt.Ay.Sizes.XLARGE,
              iconSize: a,
              textScale: a / nr,
              className: na.K,
              style: { width: a, height: a, borderRadius: 0 },
              "aria-hidden": !0,
          });
}
var nn = a(140645);
function ns(e) {
    let { numVoiceMinutes: t, numMessagesSent: a } = e,
        r = Math.round(t),
        n = Math.round(a);
    return (0, i.jsxs)("div", {
        className: nn.M1,
        children: [
            (0, i.jsxs)("div", {
                className: nn.dJ,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(aL.MicrophoneIcon, { size: "md", color: "currentColor" }),
                    (0, i.jsx)(tb, { variant: "mono-md/bold", className: nn.Qq, children: r }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: nn.dJ,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(aT.ChatIcon, { size: "md", color: "currentColor" }),
                    (0, i.jsx)(tb, { variant: "mono-md/bold", className: nn.Qq, children: n }),
                ],
            }),
            (0, i.jsx)(g.A, {
                children: tg.intl.formatToPlainString(tx.default["OQjeY/"], { numMinutes: r, numMessages: n }),
            }),
        ],
    });
}
var nc = a(972106);
let nd = [];
function nl(e) {
    let { guild: t, rank: a, iconSize: r = 100, children: n } = e,
        s = b.useRef(null);
    return (0, i.jsx)(iK, {
        text: t.name,
        textRef: s,
        children: (e) => {
            let { tabIndex: c, className: d } = e;
            return (0, i.jsxs)("li", {
                className: _()(nc.w_, d),
                tabIndex: c,
                children: [
                    (0, i.jsxs)("div", {
                        className: nc.jj,
                        children: [
                            (0, i.jsx)(iU, { rank: a }),
                            (0, i.jsxs)("div", {
                                className: nc.gI,
                                children: [
                                    (0, i.jsx)(tb, {
                                        ref: s,
                                        variant: "heading-xxl/medium",
                                        className: nc.J5,
                                        lineClamp: 1,
                                        children: t.name,
                                    }),
                                    n,
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsx)(ni, { guild: t, size: r }),
                ],
            });
        },
    });
}
function no(e) {
    let { guild: t, numVoiceMinutes: a, numMessagesSent: r } = e;
    return (0, i.jsx)(nl, {
        guild: t,
        rank: 1,
        iconSize: 140,
        children: (0, i.jsx)(ns, { numVoiceMinutes: a, numMessagesSent: r }),
    });
}
function nu(e) {
    let { guilds: t } = e,
        a = to();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: nc.wx,
                children: [
                    (0, i.jsxs)(rI, {
                        ref: a,
                        className: nc.R_,
                        accessibilityLabel: tg.intl.string(tx.default.FroqRf),
                        children: [
                            (0, i.jsx)(rj, { icon: aM.ServerIcon, children: tg.intl.string(tx.default.Mb5E6r) }),
                            (0, i.jsx)(iy, { children: tg.intl.string(aR.default.F0fkrh) }),
                        ],
                    }),
                    (0, i.jsx)(rw, { children: tg.intl.string(tx.default.IN1DaS) }),
                ],
            }),
            (0, i.jsx)("ul", {
                className: nc.Pl,
                children: t.map((e, t) => {
                    let { guild: a, numMessagesSent: r, numVoiceMinutes: n } = e;
                    return 0 === t
                        ? (0, i.jsx)(no, { guild: a, numMessagesSent: r ?? 0, numVoiceMinutes: n ?? 0 }, a.id)
                        : (0, i.jsx)(nl, { guild: a, rank: t + 1 }, a.id);
                }),
            }),
        ],
    });
}
function nh(e) {
    let { guilds: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: nc.wx,
                children: [
                    (0, i.jsxs)("div", {
                        className: nc.R_,
                        children: [
                            (0, i.jsx)(ri, { className: nc.gi }),
                            (0, i.jsx)(iL, { children: tg.intl.string(aR.default.F0fkrh) }),
                        ],
                    }),
                    (0, i.jsx)(rw, { children: tg.intl.string(tx.default.bhnqop) }),
                ],
            }),
            (0, i.jsx)("ul", {
                className: nc.Pl,
                children: t.map((e, t) => (0, i.jsx)(nl, { guild: e, rank: t + 1 }, e.id)),
            }),
        ],
    });
}
function nf() {
    let e = (0, m.bG)([u.A], () => u.A.stats?.guilds?.guilds ?? nd),
        t = (0, m.bG)([u.A], () => u.A.globalStats?.guilds?.guildsByMembers),
        a = 0 === e.length && null != t;
    return (0, i.jsx)(rc, {
        children: (0, i.jsx)("div", {
            className: nc.kL,
            children: a ? (0, i.jsx)(nh, { guilds: t }) : (0, i.jsx)(nu, { guilds: e }),
        }),
    });
}
var nb = a(155094);
function np(e) {
    let { icon: t, title: a, description: r } = e;
    return (0, i.jsx)(rc, {
        children: (0, i.jsxs)("div", {
            className: nb.Q,
            children: [(0, i.jsx)(rS, { icon: t, children: a }), (0, i.jsx)(rw, { children: r })],
        }),
    });
}
var n_ = a(7584),
    nm = a(33293),
    nx = a(498137),
    ng = a(192339),
    nA = a(834109),
    nv = a(48763);
function nw(e) {
    let { character: t } = e,
        a = (0, w.o)(t);
    return (0, i.jsxs)(nx.A, {
        cardColorPalette: a,
        size: nv.W.LG,
        children: [(0, i.jsx)(ng.A, {}), (0, i.jsx)(nA.A, { variant: "full" }), (0, i.jsx)(nm.A, { character: t })],
    });
}
var nI = a(58410);
function nE() {
    let e = (0, m.bG)([u.A], () => u.A.stats),
        t = (0, m.bG)([u.A], () => u.A.character),
        a = to();
    return (0, i.jsx)(rc, {
        children: (0, i.jsxs)("div", {
            className: nI.z,
            children: [
                null != t ? (0, i.jsx)(nw, { character: t }) : null,
                (0, i.jsxs)("div", {
                    className: _()(nI.zH, null === e && nI.gz),
                    children: [
                        (0, i.jsxs)(rI, {
                            ref: a,
                            className: nI.R_,
                            accessibilityLabel: tg.intl.string(tx.default.ASrTAc),
                            children: [
                                (0, i.jsx)(rj, {
                                    icon: rf.ExperimentalCheckpointIcon,
                                    children: tg.intl.string(aR.default.ir6nEQ),
                                }),
                                (0, i.jsx)(tb, {
                                    variant: "display-lg",
                                    className: nI.Vy,
                                    children: tg.intl.string(aR.default.y4M1na),
                                }),
                            ],
                        }),
                        null === e ? (0, i.jsx)(nj, { character: t }) : (0, i.jsx)(nS, { stats: e }),
                    ],
                }),
            ],
        }),
    });
}
function nj(e) {
    let { character: t } = e,
        { primaryBackgroundColor: a } = (0, w.j)((0, w.o)(t));
    return (0, i.jsx)(tb, {
        tag: "p",
        variant: "heading-xl/medium",
        style: { color: a },
        children: tg.intl.string(tx.default["GL+yOs"]),
    });
}
function nS(e) {
    let { stats: t } = e,
        a = t.guilds?.guilds[0],
        r = t.emojis?.emojis[0],
        n = t.games?.games[0]?.game,
        s =
            null != n
                ? ib.Ay.getApplicationIconURL({ id: n.id, icon: n.iconHash, size: 40, fallbackAvatar: !1 })
                : void 0;
    return (0, i.jsxs)("div", {
        className: nI.M1,
        children: [
            (0, i.jsx)(nC, { label: tg.intl.string(tx.default.MSrV9z), value: t.voice?.totalVoiceMinutes }),
            (0, i.jsx)(nC, { label: tg.intl.string(tx.default.hhh11L), value: t.messages?.numMessagesSent }),
            (0, i.jsx)(nC, { label: tg.intl.string(tx.default["f5S+pt"]), value: a?.numDaysInteracted }),
            (0, i.jsx)(nN, {
                label: tg.intl.string(aR.default["8XPMJj"]),
                icon: null != a ? (0, i.jsx)(ni, { guild: a.guild, size: 40 }) : (0, i.jsx)(nT, {}),
                name: null != a ? a.guild.name : tg.intl.string(tg.t.PoWNfe),
            }),
            (0, i.jsx)(nC, { label: tg.intl.string(tx.default.xVSlv3), value: t.emojis?.numEmojisSent }),
            (0, i.jsx)(nN, {
                label: tg.intl.string(aR.default["3sARW7"]),
                icon:
                    null != r
                        ? (0, i.jsx)(rU.A, {
                              emojiId: r.id,
                              emojiName: null == r.id ? r.name : void 0,
                              animated: r.animated,
                              alt: "",
                              className: nI.Kk,
                          })
                        : (0, i.jsx)(nT, {}),
                name:
                    null == r
                        ? tg.intl.string(tg.t.PoWNfe)
                        : null == r.id
                          ? n_.Ay.convertSurrogateToName(r.name)
                          : `:${r.name}:`,
            }),
            (0, i.jsx)(nC, { label: tg.intl.string(tx.default.y2Y1DD), value: t.games?.totalDaysPlayed }),
            (0, i.jsx)(nN, {
                label: tg.intl.string(aR.default.RbT4Zq),
                icon:
                    null != s
                        ? (0, i.jsx)("img", { src: s, alt: "", className: _()(nI.Kk, nI.Gt) })
                        : null == n
                          ? (0, i.jsx)(nT, {})
                          : (0, i.jsx)("div", {
                                className: _()(nI.Kk, nI.Gc),
                                children: (0, i.jsx)(ik.UnknownGameIcon, { size: "md", color: "currentColor" }),
                            }),
                name: null != n ? n.name : tg.intl.string(tg.t.PoWNfe),
            }),
        ],
    });
}
function nC(e) {
    let { label: t, value: a } = e;
    return (0, i.jsxs)("div", {
        className: nI.dJ,
        children: [
            (0, i.jsx)(tb, { variant: "heading-md/semibold", children: t }),
            (0, i.jsx)(tb, {
                variant: "heading-xxl/medium",
                className: nI.wk,
                children: Math.round(a ?? 0).toLocaleString(tg.intl.currentLocale),
            }),
        ],
    });
}
function nN(e) {
    let { label: t, icon: a, name: r } = e,
        n = b.useRef(null);
    return (0, i.jsx)(iK, {
        text: r,
        textRef: n,
        children: (e) => {
            let { tabIndex: s, className: c } = e;
            return (0, i.jsxs)("div", {
                className: _()(nI.dJ, nI.u4, c),
                tabIndex: s,
                children: [
                    (0, i.jsx)(tb, { variant: "heading-md/semibold", children: t }),
                    (0, i.jsxs)("div", {
                        className: nI.AS,
                        children: [
                            a,
                            (0, i.jsx)(tb, {
                                ref: n,
                                variant: "heading-xl/medium",
                                lineClamp: 1,
                                className: nI.TJ,
                                children: r,
                            }),
                        ],
                    }),
                ],
            });
        },
    });
}
function nT() {
    return (0, i.jsx)("div", {
        className: _()(nI.Kk, nI.Gc, nI.Wn),
        children: (0, i.jsx)(ik.UnknownGameIcon, { size: "lg", color: "currentColor" }),
    });
}
var nR = a(651946);
function nO() {
    let e = (0, m.bG)([u.A], () => u.A.stats?.guilds?.guilds[0]),
        t = Math.round(e?.numDaysInteracted ?? 0),
        a = (0, z.bD)(e?.numDaysInteractedPercentile),
        r = b.useRef(null);
    return (0, i.jsx)(rc, {
        children: (0, i.jsxs)("div", {
            className: nR.kL,
            children: [
                (0, i.jsxs)("div", {
                    className: nR.wx,
                    children: [
                        (0, i.jsxs)("div", {
                            className: nR.R_,
                            children: [
                                (0, i.jsx)(rS, { icon: aM.ServerIcon, children: tg.intl.string(tx.default["M+a+t1"]) }),
                                (0, i.jsx)(rW, { value: t }),
                            ],
                        }),
                        (0, i.jsx)(rw, {
                            children:
                                null != a
                                    ? tg.intl.format(tx.default.sIDTV1, {
                                          numDays: t,
                                          percent: a,
                                          percentHook: (e, t) => (0, i.jsx)(rH, { children: e }, t),
                                      })
                                    : tg.intl.format(tx.default.nLCUQ4, { numDays: t }),
                        }),
                    ],
                }),
                null != e &&
                    (0, i.jsx)("div", {
                        className: nR.bU,
                        children: (0, i.jsx)(iK, {
                            text: e.guild.name,
                            textRef: r,
                            children: (t) => {
                                let { tabIndex: a, className: n } = t;
                                return (0, i.jsxs)("div", {
                                    className: _()(nR.Nr, n),
                                    style: { width: 360 },
                                    tabIndex: a,
                                    children: [
                                        (0, i.jsx)(ni, { guild: e.guild, size: 360 }),
                                        (0, i.jsxs)("div", {
                                            className: nR.zH,
                                            children: [
                                                (0, i.jsx)(tb, {
                                                    ref: r,
                                                    variant: "heading-xxl/medium",
                                                    className: nR.J5,
                                                    lineClamp: 1,
                                                    children: e.guild.name,
                                                }),
                                                (0, i.jsx)(ns, {
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
var nM = a(270704);
function ny(e) {
    let { voice: t } = e,
        a = Math.round(t?.totalVoiceMinutes ?? 0),
        r = (0, z.bD)(t?.totalVoiceMinutesPercentile);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: nM.dJ,
                children: [
                    (0, i.jsx)(rS, { icon: aL.MicrophoneIcon, children: tg.intl.string(tx.default["3/T12E"]) }),
                    (0, i.jsx)(rW, { value: a, alignment: "center" }),
                ],
            }),
            (0, i.jsx)(rw, {
                children:
                    null != r
                        ? tg.intl.format(tx.default.RqXsIs, {
                              percent: r,
                              percentHook: (e, t) => (0, i.jsx)(rH, { children: e }, t),
                          })
                        : tg.intl.format(tx.default.Y3poDW, { numMinutes: a }),
            }),
        ],
    });
}
function nL(e) {
    let { peakHour: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: nM.dJ,
                children: [
                    (0, i.jsx)(rS, { icon: aL.MicrophoneIcon, children: tg.intl.string(tx.default.ZCwB8J) }),
                    (0, i.jsx)(rX, { value: t }),
                ],
            }),
            (0, i.jsx)(rw, { children: tg.intl.string(tx.default.huiTne) }),
        ],
    });
}
function nk() {
    let e = (0, m.bG)([u.A], () => u.A.stats?.voice),
        t = (0, m.bG)([u.A], () => (0, z.Kr)(u.A.stats)),
        a = (0, m.bG)([u.A], () => u.A.globalStats?.voice?.peakHourUtc),
        r = (0, z.XF)(a)?.value,
        n = !t && null != r;
    return (0, i.jsxs)(rc, {
        children: [
            (0, i.jsx)(tr, {
                animatedSrc:
                    "https://cdn.discordapp.com/assets/content/04746dc04eab575d0168935af2b1b3f97e2e00439f84bd0f0474276e0c5a81dc.png",
                staticSrc:
                    "https://cdn.discordapp.com/assets/content/c4c2d6b631bff3da4e4bb9afffc8f89bc9fb6f76a2fcd824f8a7af83eb7f1e6b.png",
                className: nM.Tp,
            }),
            (0, i.jsx)("div", {
                className: nM.Qs,
                children: n ? (0, i.jsx)(nL, { peakHour: r }) : (0, i.jsx)(ny, { voice: e }),
            }),
        ],
    });
}
function nD(e) {
    let { route: t, onNextStep: a, onPreviousStep: r } = e;
    if (t === j.gr.HOME) return (0, i.jsx)(rP, { onStart: a });
    if (t === j.gr.INTRODUCTION) return (0, i.jsx)(ro, {});
    let { statsScreen: n } = (0, j.UG)(t);
    switch (n) {
        case j.oI.VOICE_INTRO:
            return (0, i.jsx)(np, {
                icon: aL.MicrophoneIcon,
                title: tg.intl.string(tx.default["/7XYsa"]),
                description: tg.intl.string(tx.default["X8/G/o"]),
            });
        case j.oI.VOICE:
            return (0, i.jsx)(nk, {});
        case j.oI.MESSAGES_INTRO:
            return (0, i.jsx)(np, {
                icon: aT.ChatIcon,
                title: tg.intl.string(tx.default["2BuyVC"]),
                description: tg.intl.string(tx.default["kF+Y3a"]),
            });
        case j.oI.MESSAGES:
            return (0, i.jsx)(ne, {});
        case j.oI.SERVERS_INTRO:
            return (0, i.jsx)(np, {
                icon: aM.ServerIcon,
                title: tg.intl.string(aR.default.F0fkrh),
                description: tg.intl.string(tx.default.Xg82Gy),
            });
        case j.oI.SERVERS:
            return (0, i.jsx)(nf, {});
        case j.oI.TOP_SERVER:
            return (0, i.jsx)(nO, {});
        case j.oI.EMOJI_INTRO:
            return (0, i.jsx)(np, {
                icon: tl.EmojiSlightlySmilingFaceIcon,
                title: tg.intl.string(tx.default.ZTDCIv),
                description: tg.intl.string(tx.default.y8Sr8J),
            });
        case j.oI.EMOJI:
            return (0, i.jsx)(ir, {});
        case j.oI.GAMES_INTRO:
            return (0, i.jsx)(np, {
                icon: aC.GameControllerIcon,
                title: tg.intl.string(tx.default.HM2fjf),
                description: tg.intl.string(tx.default.LQiFqJ),
            });
        case j.oI.GAMES:
            return (0, i.jsx)(i5, {});
        case j.oI.GAME_TIME:
            return (0, i.jsx)(iR, {});
        case j.oI.SQUAD:
        case j.oI.SIDEKICK:
            return (0, i.jsx)(iw, { route: t, onNextStep: a, onPreviousStep: r });
        case j.oI.SUMMARY:
            return (0, i.jsx)(nE, {});
        case j.oI.SHARE:
            return (0, i.jsx)(rT, {});
        default:
            return null;
    }
}
var nP = a(650809),
    nU = a(428692);
let nG = {
    [j.s9.FACE]: { icon: aL.MicrophoneIcon, label: tg.t.K3lovD },
    [j.s9.OUTFIT]: { icon: aT.ChatIcon, label: tg.t.OIgYlQ },
    [j.s9.HEADWEAR]: { icon: aM.ServerIcon, label: tg.t["7hB4kg"] },
    [j.s9.SHOES]: { icon: tl.EmojiSlightlySmilingFaceIcon, label: tg.t.sMOuuS },
    [j.s9.WEARABLE]: { icon: aC.GameControllerIcon, label: tg.t.URyqtP },
    [j.s9.AURA]: { icon: aj.CalendarIcon, label: tx.default.y2Y1DD },
    [j.s9.ASSEMBLED]: { icon: ic.FriendsIcon, label: tg.t.TdEu5X },
    [j.s9.FINALIZE]: { icon: nP.PaintPaletteIcon, label: tx.default.gmMD2I },
    [j.s9.SUMMARY]: { icon: rf.ExperimentalCheckpointIcon, label: aR.default.y4M1na },
};
function nH(e) {
    let {
            step: { icon: t, label: a, route: r },
            state: n,
            disabled: s,
            blockedTraitDescriptionId: c,
            sound: d,
            onRouteClick: l,
        } = e,
        o = tg.intl.string(a),
        u = "unlocked" === n,
        {
            onPointerDown: h,
            onKeyDown: f,
            onClickWithSound: b,
        } = a2({ source: d, onClick: () => l(r), disabled: s || !u });
    return (0, i.jsx)(aq.m, {
        text: "locked" === n ? null : o,
        ariaHidden: !0,
        children: (0, i.jsxs)(id.D, {
            onPointerDown: u ? h : void 0,
            onKeyDown: u ? f : void 0,
            onClick: u ? b : void 0,
            tabIndex: u ? 0 : -1,
            role: "tab",
            "aria-selected": "active" === n,
            className: _()(nU.PM, { [nU.Xj]: "active" === n, [nU.CD]: u, [nU.vk]: u && !s }),
            "aria-label": o,
            "aria-disabled": "locked" === n || (u && s),
            "aria-describedby": u ? c : void 0,
            children: [
                (0, i.jsx)("div", { className: _()(nU.Om, { [nU.hZ]: "locked" !== n }) }),
                (0, i.jsx)(t, { size: "xs", color: "currentColor", className: nU.Kk }),
            ],
        }),
    });
}
function nF(e) {
    let { flow: t, stats: a, activeRoute: r, isRouteBlocked: n, blockedTraitDescriptionId: s, onRouteClick: c } = e,
        d = (function (e, t) {
            let a = [];
            for (let r of (0, E.p5)({ flow: e, stats: t })) {
                let { characterStage: e } = (0, j.UG)(r),
                    t = nG[e];
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
              className: nU.qB,
              role: "tablist",
              "aria-label": tg.intl.string(tx.default.DyMw85),
              children: d.map((e, t) =>
                  (0, i.jsx)(
                      nH,
                      {
                          step: e,
                          state: t === o ? "active" : t <= h ? "unlocked" : "locked",
                          disabled: p || n,
                          blockedTraitDescriptionId: s,
                          sound: t < o ? az : aV,
                          onRouteClick: c,
                      },
                      e.stage,
                  ),
              ),
          });
}
var nK = a(517782);
function nB() {
    let e = b.useId(),
        t = b.useRef(null);
    return (b.useEffect(() => (x.O.moveTo?.(e, t.current), () => x.O.remove?.(e)), [e]), (0, i.jsx)(g.A, { ref: t }));
}
function nz(e) {
    let t,
        a,
        { didPlayerShareDataWithDiscord: r, onClose: n } = e;
    ((0, m.bG)([u.A], () => u.A.fetchState),
        (t = (0, m.yK)([u.A], () => {
            let { stats: e, globalStats: t } = u.A,
                a = t?.games;
            if ((0, z.IH)(e) || null == a)
                return (
                    e?.games?.games.map((e) => {
                        let { game: t } = e;
                        return t.id;
                    }) ?? []
                );
            let r = [];
            return (
                V.Jb.forEach((e) => {
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
            (0, B.E)(t);
        }, [t]));
    let s = (0, E.bL)(r),
        [c, l] = (function (e) {
            let [t, a] = b.useState(() =>
                (function (e) {
                    let { character: t, progress: a, stats: r, isCharacterCreatorEnabled: i } = u.A,
                        n = null != t ? j.s9.SUMMARY : a?.stage;
                    return (
                        (0, E.p5)({ flow: e, stats: r, character: t, isCharacterCreatorEnabled: i }).find(
                            (e) => (0, j.UG)(e).characterStage === n,
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
        })(s);
    (b.useEffect(() => {
        (h.A.setStepName(c), (0, f.if)(c));
    }, [c]),
        (0, K.l0)(() => {
            (h.A.stop(), (0, f.i)(h.A.getStepName()));
        }),
        b.useEffect(() => {
            let e = !1;
            function t() {
                e = !0;
            }
            return (
                H.h.subscribe("CHECKPOINT_COMPLETE_SUCCESS", t),
                () => {
                    (H.h.unsubscribe("CHECKPOINT_COMPLETE_SUCCESS", t), e && (0, F.hs)(G.w.CHECKPOINT_COMPLETED));
                }
            );
        }, []),
        (a = (0, m.bG)([d.A], () => d.A.isFocused() && d.A.isVisible())),
        b.useEffect(() => {
            h.A.setForeground(a);
        }, [a]));
    let { characterStage: p, statsScreen: x } = (0, j.UG)(c),
        L = c === j.gr.HOME || null != x,
        k = c === j.gr.INTRODUCTION,
        D = (0, j.Rq)(c),
        P = (0, m.bG)([u.A], () => (u.A.fetchState === u.T.SUCCESS ? u.A.stats : void 0)),
        W = (0, m.bG)([u.A], () => u.A.character),
        Y = b.useMemo(
            () =>
                (function (e, t) {
                    switch (e) {
                        case j.gr.SUMMARY:
                        case j.gr.SHARE:
                            let a = (0, w.o)(t),
                                { primaryBackgroundColor: r, shadowColor: i } = (0, w.j)(a);
                            return {
                                ...am,
                                "--custom-checkpoint-primary": r,
                                "--custom-checkpoint-button-border": r,
                                "--custom-checkpoint-button-shadow": i,
                                "--custom-checkpoint-background-gradient-start": r,
                            };
                        default:
                            return am;
                    }
                })(c, W),
            [c, W],
        ),
        X = (function () {
            let { isMuted: e, volume: t } = (0, m.cf)([u.A], () => ({ isMuted: u.A.isMuted, volume: u.A.volume })),
                a = b.useRef(new Map()),
                r = b.useRef(null),
                i = b.useCallback(() => {
                    (r.current?.(), a.current.forEach((e) => e.pause()));
                }, []);
            return (
                b.useEffect(() => ((a.current = new Map(O.map((e) => [e, new Audio(e)]))), i), [i]),
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
        Q = U(),
        $ = (0, I.k0)(c, Q),
        et = b.useId(),
        ea = null != $ ? et : void 0,
        er = b.useCallback(
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
                              r.push({ source: C, delayMs: 2800 }))
                            : M(t) && y(a)
                              ? r.push({ source: N, delayMs: 0 })
                              : y(t) && M(a) && (r.push({ source: T, delayMs: 0 }), r.push({ source: R, delayMs: 0 })),
                        r
                    );
                })({ previousRoute: c, route: e });
                (null != t && X(t), l(e));
            },
            [c, X, l],
        ),
        ei = b.useCallback(
            (e) => {
                let t = (0, E.SK)({ flow: s, stats: P, currentRoute: c, direction: e });
                if (null == t) {
                    1 === e && n();
                    return;
                }
                er(t);
            },
            [c, s, er, n, P],
        ),
        es = b.useCallback(() => ei(-1), [ei]),
        ec = b.useCallback(() => ei(1), [ei]),
        ed = b.useCallback(() => er((0, E.$_)({ flow: s, stats: P })), [s, er, P]),
        el = b.useCallback(
            (e) => {
                if (!u.A.isSaving) {
                    if (null != $) return void q($);
                    er(e);
                }
            },
            [$, er],
        );
    return (0, i.jsx)(A.N, {
        theme: Z.NJ.DARK,
        children: (e) =>
            (0, i.jsxs)("div", {
                className: _()(e, nK.kL),
                style: Y,
                role: "dialog",
                "aria-modal": !0,
                "aria-label": tg.intl.string(aR.default["CdU/PF"]),
                children: [
                    (0, i.jsx)(nB, {}),
                    (0, i.jsxs)("div", {
                        className: nK.$s,
                        children: [
                            (0, i.jsx)(aB, {}),
                            (0, i.jsx)(ee, {
                                size: "sm",
                                "aria-label": tg.intl.string(tg.t.cpT0Cq),
                                onClick: n,
                                children: (0, i.jsx)(v.XSmallIcon, { size: "xs", color: "currentColor" }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(ta, {
                        stage: p,
                        isCovered: L,
                        className: nK.qd,
                        children: k && (0, i.jsx)(nD, { route: j.gr.INTRODUCTION, onNextStep: ec, onPreviousStep: es }),
                    }),
                    (0, i.jsx)(en, {
                        visible: L,
                        enter: e0,
                        exit: e0,
                        hiddenScale: 1.02,
                        keepMounted: !0,
                        className: nK.qd,
                        style: Y,
                        children: (0, i.jsx)(J, { isVisible: L }),
                    }),
                    (0, i.jsx)(en, {
                        visible: D,
                        enter: e5,
                        exit: e6,
                        className: nK.qd,
                        children: (0, i.jsx)(aD, { route: c }),
                    }),
                    (0, i.jsx)(en, {
                        visible: L,
                        enter: e2,
                        exit: e1,
                        hiddenScale: 1.02,
                        mountAfterDelay: !0,
                        className: nK.qd,
                        style: Y,
                        children: (0, i.jsx)(nD, { route: c, onNextStep: ec, onPreviousStep: es }),
                    }),
                    (0, i.jsx)(rr, {
                        activeRoute: c,
                        blockedTrait: $,
                        blockedTraitDescriptionId: ea,
                        onBack: es,
                        onNext: ec,
                        onReplay: ed,
                    }),
                    (0, i.jsx)(td, { activeRoute: c }),
                    (0, i.jsx)(nF, {
                        flow: s,
                        stats: P,
                        activeRoute: c,
                        isRouteBlocked: null != $,
                        blockedTraitDescriptionId: ea,
                        onRouteClick: el,
                    }),
                    null != $ && (0, i.jsx)(g.A, { id: et, children: (0, I.Cz)($) }),
                ],
            }),
    });
}
var nV = a(359527);
function nW() {
    if (l._.hasSubscribers(a0.jej.MODAL_CLOSE)) return (l._.dispatch(a0.jej.MODAL_CLOSE), !0);
    let e = (0, c.mU)(document.activeElement ?? document.body);
    return !!e?.hasSubscribers(a0.jej.POPOUT_CLOSE) && (e.dispatch(a0.jej.POPOUT_CLOSE), !0);
}
async function nq(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { didPlayerShareDataWithDiscord: a = !0, ...r } = t,
        c = await (0, o.nX)(r);
    return c === u.T.ERROR
        ? ((0, n.P0)({ text: tg.intl.string(tg.t.fEptJP), variant: "critical" }), !1)
        : c !== u.T.FETCHING &&
              (h.A.initialize({ didPlayerShareDataWithDiscord: a, isForeground: d.A.isFocused() && d.A.isVisible() }),
              (0, f.lw)(e),
              (0, s.B8)(
                  (e) => {
                      let { closeLayer: t } = e;
                      return (0, i.jsx)(nz, { didPlayerShareDataWithDiscord: a, onClose: t });
                  },
                  { layerKey: nV.p, onEscape: nW },
              ),
              !0);
}
