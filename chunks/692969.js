l.d(n, { A: () => o });
var a = l(60465),
    t = l(80552);
function o(e) {
    let { onOpened: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        l = (0, t.Ay)(e),
        { gameId: o } = l;
    return l.shouldOpenGameProfile && null != o
        ? (t) => {
              t?.stopPropagation(),
                  t?.preventDefault(),
                  a.A.openGameProfileModal({ ...e, gameId: o, gameProfileModalChecks: l }),
                  n?.();
          }
        : void 0;
}
