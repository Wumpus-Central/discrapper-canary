"use strict";
n.d(t, { f: () => o, w: () => l });
var r = n(73153),
    i = n(87001),
    s = n(574172),
    a = n(652215);
function o() {
    return !1;
}
async function l(e, t) {
    let n,
        o = i.A.getWindowOpen(a.MLl.ACTIVITY_POPOUT);
    e &&
        !o &&
        r.h.wait(() => {
            r.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
        });
    try {
        n = await t();
    } catch {
        n = !1;
    }
    return !n && e && s.close(a.MLl.ACTIVITY_POPOUT), n;
}
