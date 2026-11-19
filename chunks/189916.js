var i = n(508425),
    r = n(559949),
    a = n(334951),
    s = n(76573),
    l = n(350972),
    o = n(948325),
    d = n(927813),
    c = n(474090),
    u = n(211824);
let _ = 3 * d.A.Millis.DAY;
function E(e, t) {
    return null != t && (0, c.CC)(t, u.PC[e]) ? u.zv : u.Fg;
}
function A() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
    return e >= u.zv;
}
function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
    return n >= E(e, t);
}
n.d(
    t,
    {},
    {
        Aq: function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
            return e >= u.DD;
        },
        Jy: function (e) {
            return e?.fontId === u.vl;
        },
        Qv: function (e) {
            let { currentDisplayNameStyles: t, previousDisplayNameStyles: n, canUsePremiumProfileCustomization: a } = e;
            if (!a || null == t) return null;
            let s = { ...t, fontId: n?.fontId ?? r.x.DEFAULT };
            return s.fontId === r.x.DEFAULT && s.effectId === i.z.SOLID && 0 === s.colors.length ? null : s;
        },
        Rd: function (e, t) {
            let n = (0, o.kQ)(e?.perks, u.Sp[t]);
            return null != n && n.includes(s.g$.SOURCE_HEXAGON_CAMPAIGN);
        },
        Tn: function (e) {
            return null != e && e.id === u.U1 && e.features.includes(a.v.CUSTOM_INTRO_CARD);
        },
        U5: function (e) {
            let { perk: t, premiumType: n, isCampaignEnabled: i, now: r = Date.now() } = e;
            return !i || A(r) ? u.S9.HIDDEN : f(t, n, r) ? u.S9.LOCKED : u.S9.SELECTABLE;
        },
        VX: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
            return t >= e - _ && t < e;
        },
        YY: f,
        cC: E,
        iB: A,
        n2: function (e) {
            let { fontId: t, effectId: n, colors: r } = e;
            return t === u.vl && n === i.z.SOLID && 0 === r.length;
        },
        oB: function (e) {
            return null != e && u.xG.has(e);
        },
        sD: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
            return f(e, null, t);
        },
        z9: function (e) {
            return e === l.aS.HEXAGON;
        },
    },
);
