n(321073);
var i,
    r = n(127639),
    a = n(377529),
    s = n(218546),
    l = n(461872),
    o = n(817379),
    d = n(201779),
    c = n(51104),
    u = n(532294),
    _ = n(852717),
    E = n(792996),
    A =
        (((i = {}).FACE = "face"),
        (i.OUTFIT = "outfit"),
        (i.OUTFIT_COLOR = "outfit_color"),
        (i.HAT = "hat"),
        (i.WEARABLE = "wearable"),
        (i.AURA = "aura"),
        (i.SHOES = "shoes"),
        (i.BASE = "base"),
        i);
let f = {
        face: _.default.QQsnUi,
        outfit: _.default.R4kQz6,
        outfit_color: _.default.Yzaoit,
        hat: _.default.ZUGgI7,
        wearable: _.default["KrhX/b"],
        aura: _.default["35nXwl"],
        shoes: _.default["Yt3O/L"],
        base: _.default.bbQzr1,
    },
    h = {
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
    },
    p = {
        [r.V.OUTFIT]: _.default.kcAWvo,
        [r.V.HAT]: _.default.RYvRmE,
        [r.V.WEARABLE]: _.default.lbzScK,
        [r.V.AURA]: _.default.mRPtBV,
        [r.V.SHOES]: _.default.KHsJlD,
    },
    m = {
        [r.V.FACE]: {
            commonMessage: _.default.mmlFSp,
            topMessage: _.default.PNMVaH,
            lockedCommonMessage: _.default.Yi9yiQ,
            lockedTopMessage: _.default.ZHmprE,
        },
        [r.V.OUTFIT]: {
            commonMessage: _.default["7ycqkx"],
            topMessage: _.default["stpl+C"],
            lockedCommonMessage: _.default.Wpd6ol,
            lockedTopMessage: _.default.tU2fxW,
        },
        [r.V.HAT]: {
            commonMessage: _.default.TTkbUY,
            topMessage: _.default["2UDofx"],
            lockedCommonMessage: _.default["5+8d3J"],
            lockedTopMessage: _.default.X9NBcv,
        },
        [r.V.SHOES]: {
            commonMessage: _.default.vX6Vdt,
            topMessage: _.default.cbssIC,
            lockedCommonMessage: _.default.cyJktg,
            lockedTopMessage: _.default["Yjz+5u"],
        },
        [r.V.WEARABLE]: {
            commonMessage: _.default.ZHs2bR,
            topMessage: _.default.yoZxcn,
            lockedCommonMessage: _.default["2tBPVn"],
            lockedTopMessage: _.default.HPCBcH,
        },
        [r.V.AURA]: {
            commonMessage: _.default.m9gYwn,
            topMessage: _.default.mCmdPk,
            lockedCommonMessage: _.default.uT5tyB,
            lockedTopMessage: _.default["5Mc39J"],
        },
    };
function g(e) {
    return (0, o.nb)(e.trait, e.optionId);
}
function T(e) {
    let { trait: t, rarity: n } = e;
    if (null == n) {
        let n = p[t];
        return g(e) && null != n ? E.intl.string(n) : void 0;
    }
    if (n === s.K.DEFAULT) return E.intl.string(_.default["4aaADG"]);
    if (n === s.K.NITRO)
        return e.status === l.eP.NITRO_LOCKED ? E.intl.string(_.default.vic5bB) : E.intl.string(_.default.sQ1bDT);
    if (t === r.V.BASE) return;
    let { commonMessage: i, topMessage: o, lockedCommonMessage: d, lockedTopMessage: c } = m[t],
        u = e.status === l.eP.LOCKED;
    return n === s.K.COMMON
        ? E.intl.string(u ? d : i)
        : E.intl.formatToPlainString(u ? c : o, { percent: 100 - a.ei[n] });
}
let S = {
    [r.V.FACE]: _.default["4IdR/H"],
    [r.V.OUTFIT]: _.default.NuujPd,
    [r.V.HAT]: _.default.o1Zign,
    [r.V.WEARABLE]: _.default.C0CzoH,
    [r.V.AURA]: _.default["+9TbTS"],
    [r.V.SHOES]: _.default.sTG4TS,
};
n.d(
    t,
    {},
    {
        C5: g,
        Cz: function (e) {
            let t = S[e];
            return null != t ? E.intl.string(t) : void 0;
        },
        G5: function (e, t) {
            return e.map((e) => {
                let n = t.get(e.optionId);
                return null == n ? e : { ...e, asset: o.qM[r.V.OUTFIT][n]?.thumbnail };
            });
        },
        IS: ["base", "outfit_color", "outfit"],
        Oq: T,
        Ux: function (e) {
            switch (e) {
                case "base":
                case "outfit_color":
                    return !1;
                default:
                    return !0;
            }
        },
        cq: function (e) {
            return E.intl.string(f[e]);
        },
        hV: function (e) {
            let t = (0, o.FA)(e),
                n = null != t ? c.$[r.V.OUTFIT][t] : void 0;
            return null != n ? E.intl.string(n) : void 0;
        },
        hw: h,
        k0: function (e, t) {
            if (e === d.gr.FINALIZE_CHARACTER) return t[0];
            if (!(0, d.Rq)(e)) return;
            let { characterStage: n } = (0, d.UG)(e),
                i = I[n];
            if (null != i) return t.find((e) => e === h[i]);
        },
        kB: ["aura", "wearable", "shoes", "hat", "face"],
        p8: function (e) {
            let t = new Map(e.map((e, t) => [e, t]));
            function n(n) {
                let { rarity: i } = n;
                return (null != i ? t.get(i) : void 0) ?? e.length;
            }
            return (e, t) => n(e) - n(t);
        },
        v2: function (e) {
            let { skipRarity: t = !1, skipDescription: n = !1 } =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                i = [e.getName()];
            if (
                (e.status === l.eP.LOCKED
                    ? i.push(E.intl.string(_.default.AEDeza))
                    : e.status === l.eP.NITRO_LOCKED && i.push(E.intl.string(_.default.F52sSw)),
                t || null == e.rarity || i.push(E.intl.string(u.iG[e.rarity])),
                !n)
            ) {
                let t = T(e);
                null != t && i.push(t);
            }
            return i.join(", ");
        },
        v7: A,
    },
);
