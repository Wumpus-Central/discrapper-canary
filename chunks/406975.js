n.d(t, {
    Ay: () => d,
    O$: () => c,
    Ur: () => a,
    hU: () => o,
});
var r = n(955572),
    i = n(775602),
    l = n(652215);

function s(e) {
    return l.hH7.ZOOM_SCALES[
        Math.max(0, Math.min(l.hH7.ZOOM_SCALES.indexOf(i.A.zoom) + e, l.hH7.ZOOM_SCALES.length - 1))
    ];
}
let a = {
        binds: ["mod+plus"],
        comboKeysBindGlobal: !0,
        action: () => ((0, r.Qp)(s(1)), !1),
    },
    o = {
        binds: ["mod+minus"],
        comboKeysBindGlobal: !0,
        action: () => ((0, r.Qp)(s(-1)), !1),
    },
    c = {
        binds: ["mod+0"],
        comboKeysBindGlobal: !0,
        action: () => ((0, r.Qp)(l.hH7.ZOOM_DEFAULT), !1),
    },
    d =
        21552 == n.j
            ? {
                  ZOOM_IN: a,
                  ZOOM_OUT: o,
                  ZOOM_RESET: c,
              }
            : null;
