"use strict";
n.d(t, { A: () => u });
var r = n(64700),
    i = n(858177),
    s = n(227309),
    a = n(847521),
    o = n(60465),
    l = n(611656);
function u(e) {
    let { onOpened: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { applicationId: n } = e,
        u = (0, i.O)(n),
        c = r.useMemo(() => (null == u ? n : (0, a.bB)(u) ? s.a7 : n), [u, n]),
        d = (0, l.Ay)({ ...e, applicationId: c });
    return d.shouldOpenGameProfile && null != c
        ? (n) => {
              n?.stopPropagation(),
                  n?.preventDefault(),
                  o.A.openGameProfileModal({ ...e, applicationId: d.applicationId ?? c, gameProfileModalChecks: d }),
                  t?.();
          }
        : void 0;
}
