n(321073);
var i,
    r = n(127639),
    a = n(377529),
    s = n(218546),
    l = n(461872),
    o = n(817379),
    d = n(201779),
    c = n(532294),
    u = n(852717),
    _ = n(792996),
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
    },
    f = {
        face: r.V.FACE,
        outfit: r.V.OUTFIT,
        outfit_color: r.V.OUTFIT,
        hat: r.V.HAT,
        wearable: r.V.WEARABLE,
        aura: r.V.AURA,
        shoes: r.V.SHOES,
        base: r.V.BASE,
    },
    h = {
        [d.s9.FACE]: "face",
        [d.s9.OUTFIT]: "outfit",
        [d.s9.HEADWEAR]: "hat",
        [d.s9.SHOES]: "shoes",
        [d.s9.WEARABLE]: "wearable",
        [d.s9.AURA]: "aura",
    },
    I = {
        [r.V.OUTFIT]: u.default.kcAWvo,
        [r.V.HAT]: u.default.RYvRmE,
        [r.V.WEARABLE]: u.default.lbzScK,
        [r.V.AURA]: u.default.mRPtBV,
        [r.V.SHOES]: u.default.KHsJlD,
    },
    p = {
        [r.V.FACE]: { commonMessage: u.default.mmlFSp, topMessage: u.default.PNMVaH },
        [r.V.OUTFIT]: { commonMessage: u.default["7ycqkx"], topMessage: u.default["stpl+C"] },
        [r.V.HAT]: { commonMessage: u.default.TTkbUY, topMessage: u.default["2UDofx"] },
        [r.V.SHOES]: { commonMessage: u.default.vX6Vdt, topMessage: u.default.cbssIC },
        [r.V.WEARABLE]: { commonMessage: u.default.ZHs2bR, topMessage: u.default.yoZxcn },
        [r.V.AURA]: { commonMessage: u.default.m9gYwn, topMessage: u.default.mCmdPk },
    };
function m(e) {
    return (0, o.nb)(e.trait, e.optionId);
}
function T(e) {
    let { trait: t, rarity: n } = e;
    if (null == n) {
        let n = I[t];
        return m(e) && null != n ? _.intl.string(n) : void 0;
    }
    if (n === s.K.DEFAULT) return _.intl.string(u.default["4aaADG"]);
    if (n === s.K.NITRO)
        return e.status === l.eP.NITRO_LOCKED
            ? _.intl.formatToPlainString(u.default["3Wq/bk"], { subscribeHook: (e) => e })
            : _.intl.string(u.default.sQ1bDT);
    if (t === r.V.BASE) return;
    let { commonMessage: i, topMessage: o } = p[t];
    return n === s.K.COMMON ? _.intl.string(i) : _.intl.formatToPlainString(o, { percent: 100 - a.ei[n] });
}
let g = {
    [r.V.FACE]: u.default["4IdR/H"],
    [r.V.OUTFIT]: u.default.NuujPd,
    [r.V.HAT]: u.default.o1Zign,
    [r.V.WEARABLE]: u.default.C0CzoH,
    [r.V.AURA]: u.default["+9TbTS"],
    [r.V.SHOES]: u.default.sTG4TS,
};
n.d(
    t,
    {},
    {
        C5: m,
        Cz: function (e) {
            let t = g[e];
            return null != t ? _.intl.string(t) : void 0;
        },
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
            return _.intl.string(A[e]);
        },
        hw: f,
        k0: function (e, t) {
            if (e === d.gr.FINALIZE_CHARACTER) return t[0];
            if (!(0, d.Rq)(e)) return;
            let { characterStage: n } = (0, d.UG)(e),
                i = h[n];
            if (null != i) return t.find((e) => e === f[i]);
        },
        p8: function (e) {
            let t = new Map(e.map((e, t) => [e, t]));
            function n(n) {
                let { rarity: i } = n;
                return (null != i ? t.get(i) : void 0) ?? e.length;
            }
            return (e, t) => n(e) - n(t);
        },
        v2: function (e, t) {
            let n = [e.getName()];
            if (
                (e.status === l.eP.LOCKED
                    ? n.push(_.intl.string(u.default.AEDeza))
                    : e.status === l.eP.NITRO_LOCKED && n.push(_.intl.string(u.default.F52sSw)),
                !t)
            ) {
                null != e.rarity && n.push(_.intl.string(c.iG[e.rarity]));
                let t = T(e);
                null != t && n.push(t);
            }
            return n.join(", ");
        },
        v7: E,
    },
);
