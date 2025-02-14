n.d(t, {
    MY: () => c,
    RC: () => o,
    UF: () => a,
    ZP: () => d
});
var i = n(857595),
    s = n(607070),
    r = n(981631);
function l(e) {
    return r.yqN.ZOOM_SCALES[Math.max(0, Math.min(r.yqN.ZOOM_SCALES.indexOf(s.Z.zoom) + e, r.yqN.ZOOM_SCALES.length - 1))];
}
let a = {
        binds: ['mod+plus'],
        comboKeysBindGlobal: !0,
        action: () => ((0, i.cq)(l(1)), !1)
    },
    o = {
        binds: ['mod+minus'],
        comboKeysBindGlobal: !0,
        action: () => ((0, i.cq)(l(-1)), !1)
    },
    c = {
        binds: ['mod+0'],
        comboKeysBindGlobal: !0,
        action: () => ((0, i.cq)(r.yqN.ZOOM_DEFAULT), !1)
    },
    d =
        12633 == n.j
            ? {
                  ZOOM_IN: a,
                  ZOOM_OUT: o,
                  ZOOM_RESET: c
              }
            : null;
