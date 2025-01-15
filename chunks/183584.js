n.d(t, {
    IN: function () {
        return o;
    },
    oZ: function () {
        return a;
    }
}),
    n(200651),
    n(192379);
var l = n(570140);
n(238246), n(788983), n(592125), n(19780);
var r = n(237997);
n(998502), n(487029);
var s = n(710111);
n(981631), n(388032);
let i = {
    width: s.FW.width,
    height: s.FW.height,
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
function o(e, t) {
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
function a(e) {
    l.Z.dispatch({
        type: 'SOUNDBOARD_SET_OVERLAY_ENABLED',
        pid: e,
        enabled: !1
    }),
        !r.Z.isLocked(e) &&
            l.Z.dispatch({
                type: 'OVERLAY_SET_INPUT_LOCKED',
                locked: !0,
                pid: e
            });
}
s.FW.padding, i.width, i.height;
