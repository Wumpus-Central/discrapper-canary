var i = n(359800),
    r = n(724302),
    l = n(429913),
    u = n(792620),
    a = n(942370);
n.d(
    e,
    {},
    {
        U: function (t) {
            let e = (0, u.I6)(t),
                n = (0, u.xc)(t),
                s = (0, l.h)(n),
                {
                    fetched: o,
                    hasAlreadyLinked: c,
                    canStartAuthorization: f,
                    startAuthorization: g,
                } = (0, r.RD)(e ? s : null, { allowedFlows: [a._M.WEB] }),
                m = (0, i.z)(g, c, { showInGameModal: !1, showToastOnSuccess: !0 });
            return {
                isInGameQuest: e,
                fetched: o,
                hasAlreadyLinked: o ? c : void 0,
                canStartAuthorization: f,
                startAuthorization: m,
            };
        },
    },
);
