(n.d(t, { Gh: () => f, cq: () => h, fZ: () => I, hC: () => S, nb: () => g, p8: () => p, v2: () => N, v7: () => E }),
    n(321073));
var i,
    r = n(127639),
    a = n(377529),
    s = n(218546),
    l = n(817379),
    o = n(201779),
    d = n(51104),
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
};
function I(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.Nc[f[e]],
        n = f[e],
        i = "outfit_color" === e ? d.m : d.x[n],
        r = l.If[n];
    return t.map((e) => ({
        trait: n,
        optionId: e,
        getName: () => {
            let t = i[e];
            return null != t ? _.intl.string(t) : "";
        },
        rarity: l.Q8[n][e],
        asset: r[e]?.thumbnail,
    }));
}
function p(e) {
    let t = new Map(e.map((e, t) => [e, t]));
    function n(n) {
        let { rarity: i } = n;
        return (null != i ? t.get(i) : void 0) ?? e.length;
    }
    return (e, t) => n(e) - n(t);
}
(o.s9.FACE, o.s9.OUTFIT, o.s9.HEADWEAR, o.s9.SHOES, o.s9.WEARABLE, o.s9.AURA);
let T = {
        [r.V.OUTFIT]: u.default.kcAWvo,
        [r.V.HAT]: u.default.RYvRmE,
        [r.V.WEARABLE]: u.default.lbzScK,
        [r.V.AURA]: u.default.mRPtBV,
        [r.V.SHOES]: u.default.KHsJlD,
    },
    m = {
        [r.V.FACE]: { commonMessage: u.default.mmlFSp, topMessage: u.default.PNMVaH },
        [r.V.OUTFIT]: { commonMessage: u.default["7ycqkx"], topMessage: u.default["stpl+C"] },
        [r.V.HAT]: { commonMessage: u.default.TTkbUY, topMessage: u.default["2UDofx"] },
        [r.V.SHOES]: { commonMessage: u.default.vX6Vdt, topMessage: u.default.cbssIC },
        [r.V.WEARABLE]: { commonMessage: u.default.ZHs2bR, topMessage: u.default.yoZxcn },
        [r.V.AURA]: { commonMessage: u.default.m9gYwn, topMessage: u.default.mCmdPk },
    };
function g(e, t) {
    return l.kb[e] === t;
}
function S(e) {
    let { trait: t, rarity: n } = e;
    if (null == n) return g(e.trait, e.optionId) ? _.intl.string(T[t]) : void 0;
    if (n === s.K.DEFAULT) return _.intl.string(u.default["4aaADG"]);
    if (n === s.K.NITRO)
        return e.locked
            ? _.intl.formatToPlainString(u.default["3Wq/bk"], { subscribeHook: (e) => e })
            : _.intl.string(u.default.sQ1bDT);
    if (t === r.V.BASE) return;
    let { commonMessage: i, topMessage: l } = m[t];
    return n === s.K.COMMON ? _.intl.string(i) : _.intl.formatToPlainString(l, { percent: 100 - a.og[n] });
}
function N(e, t) {
    let n = [e.getName()];
    if (!t) {
        null != e.rarity && n.push(_.intl.string(c.bo[e.rarity]));
        let t = S(e);
        null != t && n.push(t);
    }
    return n.join(", ");
}
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
})(c.Ei, c.VG, 16, 1);
