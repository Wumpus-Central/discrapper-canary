"use strict";
n.d(t, { A: () => d });
var i = n(64700),
    r = n(858177),
    s = n(227309),
    a = n(871633),
    o = n(60465),
    l = n(80552);
function d(e) {
    let { onOpened: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { applicationId: n } = e,
        d = (0, r.O)(n),
        _ = i.useMemo(() => (null == d ? n : (0, a.bB)(d) ? s.a7 : n), [d, n]),
        u = (0, l.Ay)({ ...e, applicationId: _ });
    return u.shouldOpenGameProfile && null != _
        ? (n) => {
              n?.stopPropagation(),
                  n?.preventDefault(),
                  o.A.openGameProfileModal({ ...e, applicationId: u.applicationId ?? _, gameProfileModalChecks: u }),
                  t?.();
          }
        : void 0;
}
