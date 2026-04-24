n.d(i, { A: () => l });
var t = n(60465),
    a = n(713900);
function l(e) {
    let { onOpened: i } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = (0, a.Ay)(e),
        { gameId: l } = n;
    return n.shouldOpenGameProfile && null != l
        ? (a) => {
              a?.stopPropagation(),
                  a?.preventDefault(),
                  t.A.openGameProfileModal({ ...e, gameId: l, gameProfileModalChecks: n }),
                  i?.();
          }
        : void 0;
}
