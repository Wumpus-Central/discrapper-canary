n.d(t, { Ay: () => c, O$: () => d, Ur: () => o, hU: () => a });
var i = n(955572),
    l = n(775602),
    s = n(652215);
function r(e) {
    return s.hH7.ZOOM_SCALES[
        Math.max(0, Math.min(s.hH7.ZOOM_SCALES.indexOf(l.Ay.zoom) + e, s.hH7.ZOOM_SCALES.length - 1))
    ];
}
let o = { binds: ["mod+plus"], comboKeysBindGlobal: !0, action: () => ((0, i.Qp)(r(1)), !1) },
    a = { binds: ["mod+minus"], comboKeysBindGlobal: !0, action: () => ((0, i.Qp)(r(-1)), !1) },
    d = { binds: ["mod+0"], comboKeysBindGlobal: !0, action: () => ((0, i.Qp)(s.hH7.ZOOM_DEFAULT), !1) },
    c = 21552 == n.j ? { ZOOM_IN: o, ZOOM_OUT: a, ZOOM_RESET: d } : null;
