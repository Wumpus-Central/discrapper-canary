n.d(t, { U: () => u });
var i = n(359800),
    r = n(206828),
    l = n(429913),
    s = n(792620),
    a = n(942370);
function u(e) {
    let t = (0, s.I6)(e),
        n = (0, s.xc)(e),
        u = (0, l.h)(n),
        {
            fetched: o,
            hasAlreadyLinked: c,
            canStartAuthorization: d,
            startAuthorization: f,
        } = (0, r.RD)(t ? u : null, { allowedFlows: [a._.WEB] }),
        m = (0, i.z)(f, c, { showInGameModal: !1, showToastOnSuccess: !0 });
    return {
        isInGameQuest: t,
        fetched: o,
        hasAlreadyLinked: o ? c : void 0,
        canStartAuthorization: d,
        startAuthorization: m,
    };
}
