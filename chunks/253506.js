t.d(n, { Z: () => r });
var a = t(570140),
    o = t(610394);
function r(e, n) {
    o.ZP.getInitializationStages()[e] !== n &&
        a.Z.dispatch({
            type: "OVERLAY_OOP_POPOUT_INITIALIZATION_STAGE_CHANGED",
            update: { [e]: n },
        });
}
