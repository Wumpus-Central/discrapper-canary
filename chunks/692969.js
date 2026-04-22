t.d(i, { A: () => d });
var n = t(64700),
    l = t(858177),
    a = t(227309),
    o = t(847521),
    r = t(60465),
    s = t(611656);
function d(e) {
    let { onOpened: i } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { applicationId: t } = e,
        d = (0, l.O)(t),
        u = n.useMemo(() => (null == d ? t : (0, o.bB)(d) ? a.a7 : t), [d, t]),
        c = (0, s.Ay)({ ...e, applicationId: u });
    return c.shouldOpenGameProfile && null != u
        ? (t) => {
              t?.stopPropagation(),
                  t?.preventDefault(),
                  r.A.openGameProfileModal({ ...e, applicationId: c.applicationId ?? u, gameProfileModalChecks: c }),
                  i?.();
          }
        : void 0;
}
