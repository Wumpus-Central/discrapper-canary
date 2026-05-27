"use strict";
n.d(t, { A: () => s });
var i = n(60465),
    r = n(80552);
function s(e) {
    let { onOpened: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = (0, r.Ay)(e),
        { gameId: s } = n;
    return n.shouldOpenGameProfile && null != s
        ? (r) => {
              r?.stopPropagation(),
                  r?.preventDefault(),
                  i.A.openGameProfileModal({ ...e, gameId: s, gameProfileModalChecks: n }),
                  t?.();
          }
        : void 0;
}
