"use strict";
n.d(t, { A: () => a });
var i = n(64700),
    r = n(933725),
    s = n(849841);
function a(e, t) {
    let [n, a] = i.useState(!1),
        o = i.useCallback(async () => {
            null != e && (a(!0), await (0, r.m)(e, !0), a(!1)), t?.();
        }, [e, t]),
        l = (0, s.A)(e);
    return {
        isAdopting: n,
        onAdoptTag: o,
        onEditProfile: i.useCallback(() => {
            t?.(), l();
        }, [l, t]),
    };
}
