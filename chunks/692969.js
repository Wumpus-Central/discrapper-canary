l.d(e, { A: () => o });
var t = l(60465),
    a = l(921138);
function o(n) {
    let { onOpened: e } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        l = (0, a.Ay)(n),
        { gameId: o } = l;
    return l.shouldOpenGameProfile && null != o
        ? (a) => {
              a?.stopPropagation(),
                  a?.preventDefault(),
                  t.default.openGameProfileModal({ ...n, gameId: o, gameProfileModalChecks: l }),
                  e?.();
          }
        : void 0;
}
