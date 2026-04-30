"use strict";
n.d(t, { X: () => a });
var i = n(775602),
    r = n(625494),
    s = n(652215);
let a = {
    binds: ["return"],
    action() {
        if (!i.A.keyboardModeEnabled && r._.hasSubscribers(s.jej.MODAL_SUBMIT))
            return r._.dispatch(s.jej.MODAL_SUBMIT), !1;
    },
};
