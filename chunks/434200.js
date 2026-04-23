"use strict";
n.d(t, { A: () => o });
var i = n(64700),
    r = n(17928),
    s = n(773952),
    a = n(30370);
function o(e) {
    let t = (0, r.bG)([a.A], () => a.A.getAccounts().some((t) => t.type === e)),
        n = i.useCallback(() => {
            if (null == e) return null;
            (0, s.A)({ platformType: e, location: "Member List Content Popout" });
        }, [e]);
    if (null != e) return t ? void 0 : n;
}
