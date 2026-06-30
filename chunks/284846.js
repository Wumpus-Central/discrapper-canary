"use strict";
n.d(t, { U: () => l });
var i = n(359800),
    r = n(206828),
    s = n(429913),
    a = n(792620),
    o = n(942370);
function l(e) {
    let t = (0, a.I6)(e),
        n = (0, a.xc)(e),
        l = (0, s.h)(n),
        {
            fetched: u,
            hasAlreadyLinked: c,
            canStartAuthorization: d,
            startAuthorization: _,
        } = (0, r.RD)(t ? l : null, { allowedFlows: [o._M.WEB] }),
        h = (0, i.z)(_, c, { showInGameModal: !1, showToastOnSuccess: !0 });
    return {
        isInGameQuest: t,
        fetched: u,
        hasAlreadyLinked: u ? c : void 0,
        canStartAuthorization: d,
        startAuthorization: h,
    };
}
