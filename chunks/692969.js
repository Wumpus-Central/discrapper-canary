a.d(n, { A: () => t });
var l = a(60465),
    o = a(80552);
function t(e) {
    let { onOpened: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = (0, o.Ay)(e),
        { gameId: t } = a;
    return a.shouldOpenGameProfile && null != t
        ? (o) => {
              o?.stopPropagation(),
                  o?.preventDefault(),
                  l.A.openGameProfileModal({ ...e, gameId: t, gameProfileModalChecks: a }),
                  n?.();
          }
        : void 0;
}
