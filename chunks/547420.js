n.d(t, {
    MY: () => c,
    RC: () => o,
    UF: () => a,
    ZP: () => d
});
var i = n(857595),
    r = n(607070),
    s = n(981631);
function l(e) {
    return s.yqN.ZOOM_SCALES[Math.max(0, Math.min(s.yqN.ZOOM_SCALES.indexOf(r.Z.zoom) + e, s.yqN.ZOOM_SCALES.length - 1))];
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
        action: () => ((0, i.cq)(s.yqN.ZOOM_DEFAULT), !1)
    },
    d =
        12633 == n.j
            ? {
                  ZOOM_IN: a,
                  ZOOM_OUT: o,
                  ZOOM_RESET: c
              }
            : null;
