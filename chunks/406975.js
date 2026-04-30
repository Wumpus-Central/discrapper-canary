"use strict";
n.d(t, { Ay: () => c, O$: () => u, Ur: () => o, hU: () => l });
var i = n(955572),
    r = n(775602),
    s = n(652215);
function a(e) {
    return s.hH7.ZOOM_SCALES[
        Math.max(0, Math.min(s.hH7.ZOOM_SCALES.indexOf(r.A.zoom) + e, s.hH7.ZOOM_SCALES.length - 1))
    ];
}
let o = { binds: ["mod+plus"], comboKeysBindGlobal: !0, action: () => ((0, i.Qp)(a(1)), !1) },
    l = { binds: ["mod+minus"], comboKeysBindGlobal: !0, action: () => ((0, i.Qp)(a(-1)), !1) },
    u = { binds: ["mod+0"], comboKeysBindGlobal: !0, action: () => ((0, i.Qp)(s.hH7.ZOOM_DEFAULT), !1) },
    c = { ZOOM_IN: o, ZOOM_OUT: l, ZOOM_RESET: u };
