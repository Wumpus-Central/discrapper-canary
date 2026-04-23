"use strict";
n.d(t, { A: () => o });
var r = n(64700),
    i = n(311907),
    s = n(882997),
    a = n(962173);
function o(e) {
    let t = (0, i.bG)([a.A], () => a.A.getAccounts().some((t) => t.type === e)),
        n = r.useCallback(() => {
            if (null == e) return null;
            (0, s.A)({ platformType: e, location: "Member List Content Popout" });
        }, [e]);
    if (null != e) return t ? void 0 : n;
}
