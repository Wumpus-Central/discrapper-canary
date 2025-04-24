n.d(t, {
    IN: () => s,
    oZ: () => u
}),
    n(200651),
    n(192379);
var l = n(570140),
    r = n(610394);
n(238246), n(788983), n(592125), n(19780);
var i = n(237997);
n(998502), n(487029);
var a = n(710111);
n(981631), n(388032);
let o = {
    width: a.FW.width,
    height: a.FW.height,
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
    let n = r.default.isOverlayV3EnabledForPID(t),
        a = i.default.disableClickableRegions;
    n ||
        a ||
        l.Z.dispatch({
            type: 'OVERLAY_SET_INPUT_LOCKED',
            locked: !1,
            pid: t
        }),
        l.Z.dispatch({
            type: 'SOUNDBOARD_SET_OVERLAY_ENABLED',
            pid: t,
            enabled: !0,
            keepOpen: e
        });
}
function u(e) {
    l.Z.dispatch({
        type: 'SOUNDBOARD_SET_OVERLAY_ENABLED',
        pid: e,
        enabled: !1
    });
    let t = r.default.isOverlayV3EnabledForPID(e),
        n = i.default.disableClickableRegions;
    i.default.isLocked(e) ||
        t ||
        n ||
        l.Z.dispatch({
            type: 'OVERLAY_SET_INPUT_LOCKED',
            locked: !0,
            pid: e
        });
}
a.FW.padding, o.width, o.height;
