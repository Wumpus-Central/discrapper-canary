n.d(e, { U: () => o });
var i = n(359800),
    r = n(206828),
    l = n(429913),
    u = n(792620),
    a = n(942370);
function o(t) {
    let e = (0, u.I6)(t),
        n = (0, u.xc)(t),
        o = (0, l.h)(n),
        {
            fetched: s,
            hasAlreadyLinked: c,
            canStartAuthorization: f,
            startAuthorization: g,
        } = (0, r.RD)(e ? o : null, { allowedFlows: [a._.WEB] }),
        m = (0, i.z)(g, c, { showInGameModal: !1, showToastOnSuccess: !0 });
    return {
        isInGameQuest: e,
        fetched: s,
        hasAlreadyLinked: s ? c : void 0,
        canStartAuthorization: f,
        startAuthorization: m,
    };
}
