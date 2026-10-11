n.d(e, { X: () => d, i: () => c });
var i = n(477900);
n(582128);
var s = n(17928),
    a = n(192308),
    l = n(952818),
    o = n(560595),
    r = n(760751),
    u = n(723702);
function c(t) {
    let e = (0, s.bG)([r.A], () => (null != t ? r.A.getGameByApplication(t)?.id : void 0), [t]);
    return (0, s.bG)(
        [l.Ay, r.A],
        () => {
            let n = l.Ay.getVisibleRunningGames();
            function i(n) {
                return null != t && null != n && (n === t.id || (null != e && n === e));
            }
            return (
                n.find((t) => {
                    let { id: e } = t;
                    return i(e);
                }) ?? n.find((t) => null == t.id && i(r.A.findGame(t)?.id))
            );
        },
        [t, e],
    );
}
function d(t, e) {
    (0, u.isWindows)()
        ? (0, o.A)(t.pid)
        : (0, a.openModalLazy)(async () => {
              let { default: t } = await Promise.all([
                  n.e("249169"),
                  n.e("473782"),
                  n.e("553464"),
                  n.e("130662"),
                  n.e("498552"),
                  n.e("236946"),
                  n.e("338601"),
                  n.e("944801"),
                  n.e("944727"),
                  n.e("943371"),
                  n.e("725241"),
                  n.e("118577"),
                  n.e("39404"),
                  n.e("82001"),
                  n.e("191782"),
                  n.e("352435"),
                  n.e("190088"),
              ]).then(n.bind(n, 266536));
              return (n) => (0, i.jsx)(t, { ...n, analyticsLocations: e });
          });
}
