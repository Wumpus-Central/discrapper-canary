"use strict";
n.d(t, { A: () => c });
var i = n(442433),
    r = n(439372),
    s = n(267102),
    a = n(712687),
    o = n(625494),
    l = n(652215);
class u extends r.A {
    actions = {
        OVERLAY_SET_INPUT_LOCKED: () => {
            null != a.A.getContextMenu() && (0, i.Z_)();
            let e = (0, s.rH)();
            null != e && e.windowDispatch.dispatch(l.jej.POPOUT_CLOSE), o._.dispatch(l.jej.MODAL_CLOSE);
        },
    };
}
let c = new u();
