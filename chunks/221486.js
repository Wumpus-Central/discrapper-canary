var i = n(477900);
n(582128);
var s = n(855986),
    a = n(192308),
    r = n(986322),
    l = n(474834),
    o = n(760751),
    u = n(723702);
n.d(
    t,
    {},
    {
        X: function (e, t) {
            (0, u.uF)()
                ? (0, l.A)(e.pid)
                : (0, a.mM)(async () => {
                      let { default: e } = await Promise.all([
                          n.e(249169),
                          n.e(473782),
                          n.e(553464),
                          n.e(130662),
                          n.e(498552),
                          n.e(944801),
                          n.e(236946),
                          n.e(338601),
                          n.e(944727),
                          n.e(943371),
                          n.e(725241),
                          n.e(114792),
                          n.e(758913),
                          n.e(489876),
                          n.e(352435),
                          n.e(191782),
                          n.e(190088),
                      ]).then(n.bind(n, 742527));
                      return (n) => (0, i.jsx)(e, { ...n, analyticsLocations: t });
                  });
        },
        i: function (e) {
            let t = (0, s.bG)([o.A], () => (null != e ? o.A.getGameByApplication(e)?.id : void 0), [e]);
            return (0, s.bG)(
                [r.Ay, o.A],
                () => {
                    let n = r.Ay.getVisibleRunningGames();
                    function i(n) {
                        return null != e && null != n && (n === e.id || (null != t && n === t));
                    }
                    return (
                        n.find((e) => {
                            let { id: t } = e;
                            return i(t);
                        }) ?? n.find((e) => null == e.id && i(o.A.findGame(e)?.id))
                    );
                },
                [e, t],
            );
        },
    },
);
