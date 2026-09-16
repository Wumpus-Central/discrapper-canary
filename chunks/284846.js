n.d(t, { U: () => a });
var i = n(359800),
    r = n(206828),
    l = n(429913),
    s = n(792620),
    u = n(942370);
function a(e) {
    let t = (0, s.I6)(e),
        n = (0, s.xc)(e),
        a = (0, l.h)(n),
        {
            fetched: o,
            hasAlreadyLinked: c,
            canStartAuthorization: d,
            startAuthorization: f,
        } = (0, r.RD)(t ? a : null, { allowedFlows: [u._.WEB] }),
        m = (0, i.z)(f, c, { showInGameModal: !1, showToastOnSuccess: !0 });
    return {
        isInGameQuest: t,
        fetched: o,
        hasAlreadyLinked: o ? c : void 0,
        canStartAuthorization: d,
        startAuthorization: m,
    };
}
