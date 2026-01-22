n.d(t, {
    H6: () => c,
    Ov: () => d,
    WK: () => f,
    nI: () => u,
    wT: () => o,
}),
    n(747238),
    n(927092),
    n(212978),
    n(597227),
    n(393431),
    n(752391),
    n(532706),
    n(42231),
    n(232424),
    n(757074),
    n(949626),
    n(767709),
    n(65162);
var r = n(115943),
    i = n.n(r),
    a = n(270704);
n(818348);
var s = n(985018);
function o(e) {
    return e.name !== a.KO && (e.name !== a.AK || (l(e.darkBackground) && l(e.lightBackground)));
}
function l(e) {
    return /^#([0-9a-fA-F]{6})$/.test(e);
}
let c = (e) => {
    var t;
    return null != (t = a.fc[e]) ? t : a.Wj;
};
function u(e) {
    let t = i().decode(e),
        n = i().toRGBA8(t)[0],
        r = document.createElement("canvas");
    (r.width = t.width), (r.height = t.height);
    let a = r.getContext("2d"),
        s = new ImageData(new Uint8ClampedArray(n), t.width, t.height);
    return a.putImageData(s, 0, 0), r.toDataURL("image/png");
}
function d() {
    return {
        mallow: {
            name: s.intl.string(s.t.SbKDHi),
            avatarSrc:
                "https://cdn.discordapp.com/assets/content/6dcafe1231097505560fd098f0e6698990f0082369d34c35d8c3ee9615709f84.png",
        },
        phibi: {
            name: s.intl.string(s.t["LMSo+F"]),
            avatarSrc:
                "https://cdn.discordapp.com/assets/content/17ae2ee3b8476755370ca9fa4d776d0bb811e50962409a7ae2dedd1b96c95eab.png",
        },
        locke: {
            name: s.intl.string(s.t.g5Dumi),
            avatarSrc:
                "https://cdn.discordapp.com/assets/content/a82a9daadc5c7842f183c0f61966b07d3aeeea478b7c8a4b8af48334eb1ce15f.png",
        },
        cherry: {
            name: s.intl.string(s.t.p5Z3Ol),
            avatarSrc:
                "https://cdn.discordapp.com/assets/content/afc2e8306ce540dccac7da1ca0871684d0bf67e77967ff0f679be84a0a6e51b7.png",
        },
        boom: {
            name: s.intl.string(s.t.ncslie),
            avatarSrc:
                "https://cdn.discordapp.com/assets/content/e264a2b0b8d963edd255c223abf1c0554f00a2f3a38640e509a38bc03d73b606.png",
        },
    };
}
let f = (e) =>
    null == e
        ? null
        : {
              src: e.asset,
              palette: c(e.palette),
              imgAlt: e.label,
          };
