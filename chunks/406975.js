n.d(t, {
    Ay: () => u,
    O$: () => c,
    Ur: () => o,
    hU: () => l,
});
var r = n(955572),
    i = n(775602),
    a = n(652215);

function s(e) {
    return a.hH7.ZOOM_SCALES[
        Math.max(0, Math.min(a.hH7.ZOOM_SCALES.indexOf(i.A.zoom) + e, a.hH7.ZOOM_SCALES.length - 1))
    ];
}
let o = {
        binds: ["mod+plus"],
        comboKeysBindGlobal: !0,
        action: () => ((0, r.Qp)(s(1)), !1),
    },
    l = {
        binds: ["mod+minus"],
        comboKeysBindGlobal: !0,
        action: () => ((0, r.Qp)(s(-1)), !1),
    },
    c = {
        binds: ["mod+0"],
        comboKeysBindGlobal: !0,
        action: () => ((0, r.Qp)(a.hH7.ZOOM_DEFAULT), !1),
    },
    u = {
        ZOOM_IN: o,
        ZOOM_OUT: l,
        ZOOM_RESET: c,
    };
