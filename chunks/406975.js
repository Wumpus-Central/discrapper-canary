"use strict";
n.d(t, { Ay: () => c, O$: () => d, Ur: () => l, hU: () => o });
var i = n(955572),
    r = n(775602),
    a = n(652215);
function s(e) {
    return a.hH7.ZOOM_SCALES[
        Math.max(0, Math.min(a.hH7.ZOOM_SCALES.indexOf(r.Ay.zoom) + e, a.hH7.ZOOM_SCALES.length - 1))
    ];
}
let l = { binds: ["mod+plus"], comboKeysBindGlobal: !0, action: () => ((0, i.Qp)(s(1)), !1) },
    o = { binds: ["mod+minus"], comboKeysBindGlobal: !0, action: () => ((0, i.Qp)(s(-1)), !1) },
    d = { binds: ["mod+0"], comboKeysBindGlobal: !0, action: () => ((0, i.Qp)(a.hH7.ZOOM_DEFAULT), !1) },
    c = { ZOOM_IN: l, ZOOM_OUT: o, ZOOM_RESET: d };
