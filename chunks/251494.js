"use strict";
n.d(t, { X: () => s });
var i = n(775602),
    r = n(625494),
    a = n(652215);
let s = {
    binds: ["return"],
    action() {
        if (!i.Ay.keyboardModeEnabled && r._.hasSubscribers(a.jej.MODAL_SUBMIT))
            return r._.dispatch(a.jej.MODAL_SUBMIT), !1;
    },
};
