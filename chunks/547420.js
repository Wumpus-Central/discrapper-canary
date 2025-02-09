t.d(n, {
    MY: () => d,
    RC: () => a,
    UF: () => o,
    ZP: () => c
});
var i = t(857595),
    r = t(607070),
    s = t(981631);
function l(e) {
    return s.yqN.ZOOM_SCALES[Math.max(0, Math.min(s.yqN.ZOOM_SCALES.indexOf(r.Z.zoom) + e, s.yqN.ZOOM_SCALES.length - 1))];
}
let o = {
        binds: ['mod+plus'],
        comboKeysBindGlobal: !0,
        action: () => ((0, i.cq)(l(1)), !1)
    },
    a = {
        binds: ['mod+minus'],
        comboKeysBindGlobal: !0,
        action: () => ((0, i.cq)(l(-1)), !1)
    },
    d = {
        binds: ['mod+0'],
        comboKeysBindGlobal: !0,
        action: () => ((0, i.cq)(s.yqN.ZOOM_DEFAULT), !1)
    },
    c =
        12633 == t.j
            ? {
                  ZOOM_IN: o,
                  ZOOM_OUT: a,
                  ZOOM_RESET: d
              }
            : null;
