n.d(t, {
    aY: () => c,
    bN: () => l,
    hX: () => s,
    mR: () => u,
}),
    n(704826),
    n(35282),
    n(413496),
    n(433524);
var r = n(688619),
    i = n.n(r),
    a = n(522942),
    o = n(660662);
function s(e) {
    let t = i()(e).alpha(1),
        n = t.get("hsl.l");
    return {
        main: e,
        light1: t.set("hsl.l", Math.min(1, 1.2 * n)).hex(),
        light2: t.set("hsl.l", Math.min(1, 1.6 * n)).hex(),
        dark1: t.set("hsl.l", Math.max(0, 0.6 * n)).hex(),
        dark2: t.set("hsl.l", Math.max(0, 0.2 * n)).hex(),
        toonStroke: t.set("hsl.l", Math.max(0.12, 0.4 * n)).hex(),
    };
}
function l(e) {
    return null == e
        ? null
        : {
              fontId: e.font_id,
              effectId: e.effect_id,
              colors: e.colors,
          };
}
function c() {
    let e,
        t = o.mH[Math.floor(Math.random() * o.mH.length)],
        n = o.P$[Math.floor(Math.random() * o.P$.length)];
    if (t === a.m.GRADIENT) {
        let t = o.vK[Math.floor(Math.random() * o.vK.length)];
        e = [t.start, t.end];
    } else e = [o.gD[Math.floor(Math.random() * o.gD.length)]];
    return {
        fontId: n,
        effectId: t,
        colors: e,
    };
}
function u(e) {
    if (null == e) return !1;
    let t = e.replace(RegExp("[^\\p{L}]", "gu"), "");
    return RegExp("\\P{Script=Latin}", "u").test(t);
}
