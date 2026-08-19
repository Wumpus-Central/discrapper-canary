"use strict";
n.d(t, { f: () => l, w: () => o });
var i = n(228366),
    r = n(567249),
    a = n(574172),
    s = n(652215);
function l() {
    return !1;
}
async function o(e, t) {
    let n,
        l = r.A.getWindowOpen(s.MLl.ACTIVITY_POPOUT);
    e &&
        !l &&
        i.h.wait(() => {
            i.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
        });
    try {
        n = await t();
    } catch {
        n = !1;
    }
    return !n && e && a.close(s.MLl.ACTIVITY_POPOUT), n;
}
