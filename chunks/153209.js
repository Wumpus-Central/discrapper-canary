n.d(t, {
    Gp: () => y,
    ZP: () => O,
}),
    n(388685),
    n(642613);
var r = n(255367),
    i = n(73800),
    l = n(442837),
    o = n(481060),
    a = n(140155),
    s = n(497089),
    c = n(178480),
    u = n(11799),
    d = n(616032),
    p = n(695346),
    f = n(626135),
    h = n(709054),
    g = n(981631),
    m = n(388032),
    b = n(407067);
function O() {
    let { initialized: e, items: t, loading: n, loadMore: i } = (0, u.y6)(),
        o = _(
            t,
            (0, l.e7)([a.Z], () => a.Z.localItems),
        );
    return (0, r.jsx)(d.Z, {
        initialized: e,
        items: o,
        loading: n,
        loadMore: i,
    });
}
function _(e, t) {
    return i.useMemo(() => [...[...e, ...t].sort((e, t) => -1 * h.default.compare(e.id, t.id))], [e, t]);
}
function y() {
    let { items: e } = (0, u.y6)(),
        t = e.length > 0 ? e[0] : null,
        n = _(
            e,
            (0, l.e7)([a.Z], () => a.Z.localItems),
        ),
        d = p.d$.useSetting();
    return i.useMemo(() => {
        if (null != t && 0 >= h.default.compare(t.id, d)) return !1;
        for (let e of n) {
            if (0 >= h.default.compare(e.id, d)) break;
            if (!(0, c.r)(e, d)) return !0;
        }
        return !1;
    }, [t, d, n])
        ? (0, r.jsx)(o.M0o, {
              tooltip: m.intl.string(m.t["8k+6QU"]),
              color: o.YX$.TERTIARY,
              icon: (0, r.jsx)(o.W6s, {
                  size: "xs",
                  color: "currentColor",
              }),
              className: b.controlButton,
              onClick: () => {
                  null != t &&
                      (p.d$.updateSetting(t.id),
                      f.default.track(g.rMx.NOTIFICATION_CENTER_ACTION, { action_type: s.ud.MARK_ALL_READ }));
              },
          })
        : null;
}
