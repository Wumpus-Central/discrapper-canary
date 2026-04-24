"use strict";
n.d(t, { A: () => s });
var r = n(64700),
    i = n(933725),
    a = n(849841);
function s(e, t) {
    let [n, s] = r.useState(!1),
        l = r.useCallback(async () => {
            null != e && (s(!0), await (0, i.m)(e, !0), s(!1)), t?.();
        }, [e, t]),
        o = (0, a.A)(e);
    return {
        isAdopting: n,
        onAdoptTag: l,
        onEditProfile: r.useCallback(() => {
            t?.(), o();
        }, [o, t]),
    };
}
