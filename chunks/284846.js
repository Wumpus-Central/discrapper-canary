n.d(t, { U: () => o });
var i = n(359800),
    r = n(206828),
    l = n(429913),
    a = n(792620),
    s = n(942370);
function o(e) {
    let t = (0, a.I6)(e),
        n = (0, a.xc)(e),
        o = (0, l.h)(n),
        {
            fetched: u,
            hasAlreadyLinked: c,
            canStartAuthorization: d,
            startAuthorization: f,
        } = (0, r.RD)(t ? o : null, { allowedFlows: [s._M.WEB] }),
        m = (0, i.z)(f, c, { showInGameModal: !1, showToastOnSuccess: !0 });
    return {
        isInGameQuest: t,
        fetched: u,
        hasAlreadyLinked: u ? c : void 0,
        canStartAuthorization: d,
        startAuthorization: m,
    };
}
