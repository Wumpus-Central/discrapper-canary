n.d(t, {
    aY: () => c,
    bN: () => l,
    hX: () => s
});
var r = n(688619),
    i = n.n(r),
    o = n(522942),
    a = n(660662);
function s(e) {
    let t = i()(e),
        n = t.get('hsl.l');
    return {
        main: e,
        light1: t.set('hsl.l', Math.min(1, 1.2 * n)).hex(),
        light2: t.set('hsl.l', Math.min(1, 1.6 * n)).hex(),
        dark1: t.set('hsl.l', Math.max(0, 0.6 * n)).hex(),
        dark2: t.set('hsl.l', Math.max(0, 0.2 * n)).hex()
    };
}
function l(e) {
    return null == e
        ? null
        : {
              fontId: e.font_id,
              effectId: e.effect_id,
              colors: e.colors
          };
}
function c() {
    let e,
        t = a.mH[Math.floor(Math.random() * a.mH.length)],
        n = a.P$[Math.floor(Math.random() * a.P$.length)];
    if (t === o.m.GRADIENT) {
        let t = a.vK[Math.floor(Math.random() * a.vK.length)];
        e = [t.start, t.end];
    } else e = [a.gD[Math.floor(Math.random() * a.gD.length)]];
    return {
        fontId: n,
        effectId: t,
        colors: e
    };
}
