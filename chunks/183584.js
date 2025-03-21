n.d(t, {
    IN: () => s,
    oZ: () => c
}),
    n(200651),
    n(192379);
var r = n(570140),
    l = n(610394);
n(238246), n(788983), n(592125), n(19780);
var i = n(237997);
n(998502), n(487029);
var o = n(710111);
n(981631), n(388032);
let a = {
    width: o.FW.width,
    height: o.FW.height,
    resizable: !1,
    movable: !1,
    alwaysOnTop: !0,
    frame: !1,
    transparent: !0,
    hasShadow: !1,
    skipTaskbar: !0,
    menubar: !0,
    backgroundColor: '#00000000',
    titleBarStyle: null
};
function s(e, t) {
    let n = l.ZP.isOverlayV3EnabledForPID(t),
        o = i.default.disableClickableRegions;
    n ||
        o ||
        r.Z.dispatch({
            type: 'OVERLAY_SET_INPUT_LOCKED',
            locked: !1,
            pid: t
        }),
        r.Z.dispatch({
            type: 'SOUNDBOARD_SET_OVERLAY_ENABLED',
            pid: t,
            enabled: !0,
            keepOpen: e
        });
}
function c(e) {
    r.Z.dispatch({
        type: 'SOUNDBOARD_SET_OVERLAY_ENABLED',
        pid: e,
        enabled: !1
    });
    let t = l.ZP.isOverlayV3EnabledForPID(e),
        n = i.default.disableClickableRegions;
    i.default.isLocked(e) ||
        t ||
        n ||
        r.Z.dispatch({
            type: 'OVERLAY_SET_INPUT_LOCKED',
            locked: !0,
            pid: e
        });
}
o.FW.padding, a.width, a.height;
