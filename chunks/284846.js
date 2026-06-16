n.d(t, { U: () => o });
var i = n(359800),
    l = n(46225),
    r = n(429913),
    a = n(792620),
    s = n(942370);
function o(e) {
    let t = (0, a.I6)(e),
        n = (0, a.xc)(e),
        o = (0, r.h)(n),
        {
            fetched: u,
            hasAlreadyLinked: c,
            canStartAuthorization: d,
            startAuthorization: m,
        } = (0, l.RD)(t ? o : null, { allowedFlows: [s._M.WEB] }),
        f = (0, i.z)(m, c, { showInGameModal: !1, showToastOnSuccess: !0 });
    return {
        isInGameQuest: t,
        fetched: u,
        hasAlreadyLinked: u ? c : void 0,
        canStartAuthorization: d,
        startAuthorization: f,
    };
}
