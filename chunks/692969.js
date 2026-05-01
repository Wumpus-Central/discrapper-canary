l.d(n, { A: () => t });
var a = l(60465),
    o = l(713900);
function t(e) {
    let { onOpened: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        l = (0, o.Ay)(e),
        { gameId: t } = l;
    return l.shouldOpenGameProfile && null != t
        ? (o) => {
              o?.stopPropagation(),
                  o?.preventDefault(),
                  a.A.openGameProfileModal({ ...e, gameId: t, gameProfileModalChecks: l }),
                  n?.();
          }
        : void 0;
}
