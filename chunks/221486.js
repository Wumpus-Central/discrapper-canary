n.d(t, { X: () => d, i: () => c });
var i = n(477900);
n(582128);
var a = n(17928),
    s = n(192308),
    l = n(952818),
    r = n(560595),
    o = n(760751),
    u = n(723702);
function c(e) {
    let t = (0, a.bG)([o.A], () => (null != e ? o.A.getGameByApplication(e)?.id : void 0), [e]);
    return (0, a.bG)(
        [l.Ay, o.A],
        () => {
            let n = l.Ay.getVisibleRunningGames();
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
}
function d(e, t) {
    (0, u.isWindows)()
        ? (0, r.A)(e.pid)
        : (0, s.openModalLazy)(async () => {
              let { default: e } = await Promise.all([
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
                  n.e("707068"),
                  n.e("521221"),
                  n.e("82001"),
                  n.e("352435"),
                  n.e("191782"),
                  n.e("190088"),
              ]).then(n.bind(n, 266536));
              return (n) => (0, i.jsx)(e, { ...n, analyticsLocations: t });
          });
}
