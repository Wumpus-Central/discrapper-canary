n.d(t, { U: () => o });
var i = n(359800),
    r = n(206828),
    l = n(429913),
    s = n(792620),
    u = n(942370);
function o(e) {
    let t = (0, s.I6)(e),
        n = (0, s.xc)(e),
        o = (0, l.h)(n),
        {
            fetched: a,
            hasAlreadyLinked: c,
            canStartAuthorization: d,
            startAuthorization: f,
        } = (0, r.RD)(t ? o : null, { allowedFlows: [u._.WEB] }),
        m = (0, i.z)(f, c, { showInGameModal: !1, showToastOnSuccess: !0 });
    return {
        isInGameQuest: t,
        fetched: a,
        hasAlreadyLinked: a ? c : void 0,
        canStartAuthorization: d,
        startAuthorization: m,
    };
}
