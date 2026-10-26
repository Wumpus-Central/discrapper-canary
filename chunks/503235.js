(n.d(t, {
    C5: () => N,
    Ux: () => p,
    _K: () => R,
    cq: () => h,
    hC: () => C,
    hw: () => f,
    nb: () => S,
    p8: () => T,
    v2: () => O,
    v7: () => E,
}),
    n(321073));
var i,
    r = n(127639),
    a = n(377529),
    s = n(218546),
    l = n(32623),
    o = n(817379),
    d = n(201779),
    c = n(309913),
    u = n(763166),
    _ = n(105292),
    E =
        (((i = {}).FACE = "face"),
        (i.OUTFIT = "outfit"),
        (i.OUTFIT_COLOR = "outfit_color"),
        (i.HAT = "hat"),
        (i.WEARABLE = "wearable"),
        (i.AURA = "aura"),
        (i.SHOES = "shoes"),
        (i.BASE = "base"),
        i);
let A = {
    face: u.default.QQsnUi,
    outfit: u.default.R4kQz6,
    outfit_color: u.default.Yzaoit,
    hat: u.default.ZUGgI7,
    wearable: u.default["KrhX/b"],
    aura: u.default["35nXwl"],
    shoes: u.default["Yt3O/L"],
    base: u.default.bbQzr1,
};
function h(e) {
    return _.intl.string(A[e]);
}
let f = {
        face: r.V.FACE,
        outfit: r.V.OUTFIT,
        outfit_color: r.V.OUTFIT,
        hat: r.V.HAT,
        wearable: r.V.WEARABLE,
        aura: r.V.AURA,
        shoes: r.V.SHOES,
        base: r.V.BASE,
    },
    I = {
        [d.s9.FACE]: "face",
        [d.s9.OUTFIT]: "outfit",
        [d.s9.HEADWEAR]: "hat",
        [d.s9.SHOES]: "shoes",
        [d.s9.WEARABLE]: "wearable",
        [d.s9.AURA]: "aura",
    };
function p(e) {
    switch (e) {
        case "base":
        case "outfit_color":
            return !1;
        default:
            return !0;
    }
}
function T(e) {
    let t = new Map(e.map((e, t) => [e, t]));
    function n(n) {
        let { rarity: i } = n;
        return (null != i ? t.get(i) : void 0) ?? e.length;
    }
    return (e, t) => n(e) - n(t);
}
let m = {
        [r.V.OUTFIT]: u.default.kcAWvo,
        [r.V.HAT]: u.default.RYvRmE,
        [r.V.WEARABLE]: u.default.lbzScK,
        [r.V.AURA]: u.default.mRPtBV,
        [r.V.SHOES]: u.default.KHsJlD,
    },
    g = {
        [r.V.FACE]: { commonMessage: u.default.mmlFSp, topMessage: u.default.PNMVaH },
        [r.V.OUTFIT]: { commonMessage: u.default["7ycqkx"], topMessage: u.default["stpl+C"] },
        [r.V.HAT]: { commonMessage: u.default.TTkbUY, topMessage: u.default["2UDofx"] },
        [r.V.SHOES]: { commonMessage: u.default.vX6Vdt, topMessage: u.default.cbssIC },
        [r.V.WEARABLE]: { commonMessage: u.default.ZHs2bR, topMessage: u.default.yoZxcn },
        [r.V.AURA]: { commonMessage: u.default.m9gYwn, topMessage: u.default.mCmdPk },
    };
function S(e, t) {
    return o._g[e] === t;
}
function N(e) {
    return S(e.trait, e.optionId);
}
function C(e) {
    let { trait: t, rarity: n } = e;
    if (null == n) {
        let n = m[t];
        return N(e) && null != n ? _.intl.string(n) : void 0;
    }
    if (n === s.K.DEFAULT) return _.intl.string(u.default["4aaADG"]);
    if (n === s.K.NITRO)
        return e.status === l.eP.NITRO_LOCKED
            ? _.intl.formatToPlainString(u.default["3Wq/bk"], { subscribeHook: (e) => e })
            : _.intl.string(u.default.sQ1bDT);
    if (t === r.V.BASE) return;
    let { commonMessage: i, topMessage: o } = g[t];
    return n === s.K.COMMON ? _.intl.string(i) : _.intl.formatToPlainString(o, { percent: 100 - a.ei[n] });
}
function O(e, t) {
    let n = [e.getName()];
    if (
        (e.status === l.eP.LOCKED
            ? n.push(_.intl.string(u.default.AEDeza))
            : e.status === l.eP.NITRO_LOCKED && n.push(_.intl.string(u.default.F52sSw)),
        !t)
    ) {
        null != e.rarity && n.push(_.intl.string(c.iG[e.rarity]));
        let t = C(e);
        null != t && n.push(t);
    }
    return n.join(", ");
}
function R(e, t) {
    if (e === d.gr.FINALIZE_CHARACTER) return t.length > 0;
    if (!(0, d.Rq)(e)) return !1;
    let n = I[(0, d.UG)(e).characterStage];
    return null != n && t.includes(f[n]);
}
(r.V.FACE,
    u.default["4IdR/H"],
    r.V.OUTFIT,
    u.default.NuujPd,
    r.V.HAT,
    u.default.o1Zign,
    r.V.WEARABLE,
    u.default.C0CzoH,
    r.V.AURA,
    u.default["+9TbTS"],
    r.V.SHOES,
    u.default.sTG4TS,
    !(function (e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        [
            [i, i],
            [e - i - n, i],
            [e - i, i + n],
            [e - i, t - i],
            [i, t - i],
        ]
            .map((e) => {
                let [t, n] = e;
                return `${t},${n}`;
            })
            .join(" ");
    })(c.Ei, c.VG, 16, 1));
