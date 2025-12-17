n.d(t, { Z: () => c });
var a = n(570140),
    o = n(610394);
function c(e, t) {
    o.Z.getPopoutInitializationStages()[e] !== t &&
        a.Z.dispatch({
            type: "OVERLAY_OOP_POPOUT_INITIALIZATION_STAGE_CHANGED",
            update: { [e]: t },
        });
}
n(575140);
