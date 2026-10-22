(n.d(t, { C5: () => g, Gh: () => f, cq: () => h, hC: () => S, nb: () => m, p8: () => I, v2: () => N, v7: () => E }),
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
};
function I(e) {
    let t = new Map(e.map((e, t) => [e, t]));
    function n(n) {
        let { rarity: i } = n;
        return (null != i ? t.get(i) : void 0) ?? e.length;
    }
    return (e, t) => n(e) - n(t);
}
(d.s9.FACE, d.s9.OUTFIT, d.s9.HEADWEAR, d.s9.SHOES, d.s9.WEARABLE, d.s9.AURA);
let p = {
        [r.V.OUTFIT]: u.default.kcAWvo,
        [r.V.HAT]: u.default.RYvRmE,
        [r.V.WEARABLE]: u.default.lbzScK,
        [r.V.AURA]: u.default.mRPtBV,
        [r.V.SHOES]: u.default.KHsJlD,
    },
    T = {
        [r.V.FACE]: { commonMessage: u.default.mmlFSp, topMessage: u.default.PNMVaH },
        [r.V.OUTFIT]: { commonMessage: u.default["7ycqkx"], topMessage: u.default["stpl+C"] },
        [r.V.HAT]: { commonMessage: u.default.TTkbUY, topMessage: u.default["2UDofx"] },
        [r.V.SHOES]: { commonMessage: u.default.vX6Vdt, topMessage: u.default.cbssIC },
        [r.V.WEARABLE]: { commonMessage: u.default.ZHs2bR, topMessage: u.default.yoZxcn },
        [r.V.AURA]: { commonMessage: u.default.m9gYwn, topMessage: u.default.mCmdPk },
    };
function m(e, t) {
    return o.kb[e] === t;
}
function g(e) {
    return m(e.trait, e.optionId);
}
function S(e) {
    let { trait: t, rarity: n } = e;
    if (null == n) return g(e) ? _.intl.string(p[t]) : void 0;
    if (n === s.K.DEFAULT) return _.intl.string(u.default["4aaADG"]);
    if (n === s.K.NITRO)
        return e.status === l.eP.NITRO_LOCKED
            ? _.intl.formatToPlainString(u.default["3Wq/bk"], { subscribeHook: (e) => e })
            : _.intl.string(u.default.sQ1bDT);
    if (t === r.V.BASE) return;
    let { commonMessage: i, topMessage: o } = T[t];
    return n === s.K.COMMON ? _.intl.string(i) : _.intl.formatToPlainString(o, { percent: 100 - a.og[n] });
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
