n.d(t, { A: () => i });
var l = n(60465),
    a = n(344005);
function i(e) {
    let { onOpened: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = (0, a.Ay)(e),
        { gameId: i } = n;
    return n.shouldOpenGameProfile && null != i
        ? (a) => {
              a?.stopPropagation(),
                  a?.preventDefault(),
                  l.A.openGameProfileModal({ ...e, gameId: i, gameProfileModalChecks: n }),
                  t?.();
          }
        : void 0;
}
