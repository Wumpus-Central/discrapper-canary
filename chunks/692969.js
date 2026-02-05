"use strict";
n.d(t, { A: () => u });
var r = n(64700),
    i = n(858177),
    a = n(227309),
    s = n(847521),
    o = n(60465),
    l = n(611656);
function u(e) {
    let { onOpened: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { applicationId: n } = e,
        u = (0, i.O)(n),
        c = r.useMemo(() => (null == u ? n : (0, s.bB)(u) ? a.a7 : n), [u, n]),
        d = (0, l.Ay)({ ...e, applicationId: c });
    return d.shouldOpenGameProfile && null != c
        ? (n) => {
              n.stopPropagation(),
                  n.preventDefault(),
                  o.A.openGameProfileModal({ ...e, applicationId: c, gameProfileModalChecks: d }),
                  t?.();
          }
        : void 0;
}
