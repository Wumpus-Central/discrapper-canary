"use strict";
n.d(t, { A: () => c });
var i = n(442433),
    r = n(439372),
    a = n(267102),
    s = n(712687),
    l = n(625494),
    o = n(652215);
class d extends r.A {
    actions = {
        OVERLAY_SET_INPUT_LOCKED: () => {
            null != s.A.getContextMenu() && (0, i.Z_)();
            let e = (0, a.rH)();
            null != e && e.windowDispatch.dispatch(o.jej.POPOUT_CLOSE), l._.dispatch(o.jej.MODAL_CLOSE);
        },
    };
}
let c = new d();
