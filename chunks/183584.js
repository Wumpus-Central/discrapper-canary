n.d(t, {
    IN: () => o,
    oZ: () => c,
}),
    n(951288),
    n(647438);
var r = n(570140),
    l = n(610394);
n(238246), n(788983), n(592125), n(19780);
var s = n(237997);
n(998502), n(487029);
var i = n(710111);
n(981631), n(388032);
let a = {
    width: i.FW.width,
    height: i.FW.height,
    resizable: !1,
    movable: !1,
    alwaysOnTop: !0,
    frame: !1,
    transparent: !0,
    hasShadow: !1,
    skipTaskbar: !0,
    menubar: !0,
    backgroundColor: "#00000000",
    titleBarStyle: null,
};
function o(e, t) {
    let n = l.ZP.isOverlayV3EnabledForPID(t),
        i = s.default.disableClickableRegions;
    n ||
        i ||
        r.Z.dispatch({
            type: "OVERLAY_SET_INPUT_LOCKED",
            locked: !1,
            pid: t,
        }),
        r.Z.dispatch({
            type: "SOUNDBOARD_SET_OVERLAY_ENABLED",
            pid: t,
            enabled: !0,
            keepOpen: e,
        });
}
function c(e) {
    r.Z.dispatch({
        type: "SOUNDBOARD_SET_OVERLAY_ENABLED",
        pid: e,
        enabled: !1,
    });
    let t = l.ZP.isOverlayV3EnabledForPID(e),
        n = s.default.disableClickableRegions;
    s.default.isLocked(e) ||
        t ||
        n ||
        r.Z.dispatch({
            type: "OVERLAY_SET_INPUT_LOCKED",
            locked: !0,
            pid: e,
        });
}
i.FW.padding, a.width, a.height;
