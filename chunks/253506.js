n.d(t, { Z: () => r });
var a = n(570140),
    o = n(610394);
function r(e, t) {
    o.Z.getPopoutInitializationStages()[e] !== t &&
        a.Z.dispatch({
            type: "OVERLAY_OOP_POPOUT_INITIALIZATION_STAGE_CHANGED",
            update: { [e]: t },
        });
}
n(575140);
