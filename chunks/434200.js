"use strict";
n.d(t, { A: () => r });
var l = n(64700),
    i = n(17928),
    s = n(773952),
    a = n(30370);
function r(e) {
    let t = (0, i.bG)([a.A], () => a.A.getAccounts().some((t) => t.type === e)),
        n = l.useCallback(() => {
            if (null == e) return null;
            (0, s.A)({ platformType: e, location: "Member List Content Popout" });
        }, [e]);
    if (null != e) return t ? void 0 : n;
}
