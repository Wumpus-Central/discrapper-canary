t.d(a, { A: () => l });
var d = t(73153),
    c = t(395011);
function l(e, a) {
    c.A.getPopoutInitializationStages()[e] !== a &&
        d.h.dispatch({
            type: "OVERLAY_OOP_POPOUT_INITIALIZATION_STAGE_CHANGED",
            update: { [e]: a },
        });
}
t(96175);
