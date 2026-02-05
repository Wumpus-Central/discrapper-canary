n.d(t, { Ay: () => d, O$: () => c, Ur: () => l, hU: () => o });
var i = n(955572),
    s = n(775602),
    r = n(652215);
function a(e) {
    return r.hH7.ZOOM_SCALES[
        Math.max(0, Math.min(r.hH7.ZOOM_SCALES.indexOf(s.A.zoom) + e, r.hH7.ZOOM_SCALES.length - 1))
    ];
}
let l = { binds: ["mod+plus"], comboKeysBindGlobal: !0, action: () => ((0, i.Qp)(a(1)), !1) },
    o = { binds: ["mod+minus"], comboKeysBindGlobal: !0, action: () => ((0, i.Qp)(a(-1)), !1) },
    c = { binds: ["mod+0"], comboKeysBindGlobal: !0, action: () => ((0, i.Qp)(r.hH7.ZOOM_DEFAULT), !1) },
    d = 21552 == n.j ? { ZOOM_IN: l, ZOOM_OUT: o, ZOOM_RESET: c } : null;
