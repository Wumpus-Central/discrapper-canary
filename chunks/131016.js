n.d(t, {
    bN: () => o,
    hX: () => a
});
var r = n(688619),
    i = n.n(r);
function a(e) {
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
function o(e) {
    return null == e
        ? null
        : {
              fontId: e.font_id,
              effectId: e.effect_id,
              colors: e.colors
          };
}
(n(522942), n(660662));
