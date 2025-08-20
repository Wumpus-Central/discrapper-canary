n.d(t, { z: () => o });
var r = n(607070),
    i = n(585483),
    a = n(981631);
let o = {
    binds: ["return"],
    action() {
        if (!r.Z.keyboardModeEnabled && i.S.hasSubscribers(a.CkL.MODAL_SUBMIT))
            return i.S.dispatch(a.CkL.MODAL_SUBMIT), !1;
    },
};
