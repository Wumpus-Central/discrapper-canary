n.d(t, { Ay: () => c, O$: () => d, Ur: () => a, hU: () => o });
var i = n(955572),
    l = n(775602),
    r = n(652215);
function s(e) {
    return r.hH7.ZOOM_SCALES[
        Math.max(0, Math.min(r.hH7.ZOOM_SCALES.indexOf(l.Ay.zoom) + e, r.hH7.ZOOM_SCALES.length - 1))
    ];
}
let a = { binds: ["mod+plus"], comboKeysBindGlobal: !0, action: () => ((0, i.Qp)(s(1)), !1) },
    o = { binds: ["mod+minus"], comboKeysBindGlobal: !0, action: () => ((0, i.Qp)(s(-1)), !1) },
    d = { binds: ["mod+0"], comboKeysBindGlobal: !0, action: () => ((0, i.Qp)(r.hH7.ZOOM_DEFAULT), !1) },
    c = 21552 == n.j ? { ZOOM_IN: a, ZOOM_OUT: o, ZOOM_RESET: d } : null;
