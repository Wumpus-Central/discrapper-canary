"use strict";
n.d(t, { A: () => c });
var r = n(442433),
    i = n(439372),
    a = n(267102),
    s = n(712687),
    o = n(203982),
    l = n(652215);
class u extends i.A {
    actions = {
        OVERLAY_SET_INPUT_LOCKED: () => {
            null != s.A.getContextMenu() && (0, r.Z_)();
            let e = (0, a.rH)();
            null != e && e.windowDispatch.dispatch(l.jej.POPOUT_CLOSE), o._.dispatch(l.jej.MODAL_CLOSE);
        },
    };
}
let c = new u();
