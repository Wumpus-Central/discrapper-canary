t.d(e, { A: () => u });
var l = t(60465),
    a = t(921138);
function u(n) {
    let { onOpened: e } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        t = (0, a.Ay)(n),
        { gameId: u } = t;
    return t.shouldOpenGameProfile && null != u
        ? (a) => {
              (a?.stopPropagation(),
                  a?.preventDefault(),
                  l.default.openGameProfileModal({ ...n, gameId: u, gameProfileModalChecks: t }),
                  e?.());
          }
        : void 0;
}
