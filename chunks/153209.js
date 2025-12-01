n.d(t, {
    Gp: () => O,
    ZP: () => _,
}),
    n(388685),
    n(642613);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    o = n(681715),
    a = n(481060),
    s = n(140155),
    c = n(497089),
    u = n(178480),
    d = n(11799),
    f = n(616032),
    h = n(695346),
    p = n(626135),
    g = n(709054),
    m = n(981631),
    b = n(388032);
function _() {
    let { initialized: e, items: t, loading: n, loadMore: i } = (0, d.y6)(),
        o = y(
            t,
            (0, l.e7)([s.Z], () => s.Z.localItems),
        );
    return (0, r.jsx)(f.Z, {
        initialized: e,
        items: o,
        loading: n,
        loadMore: i,
    });
}
function y(e, t) {
    return i.useMemo(() => [...[...e, ...t].sort((e, t) => -1 * g.default.compare(e.id, t.id))], [e, t]);
}
function O() {
    let { items: e } = (0, d.y6)(),
        t = e.length > 0 ? e[0] : null,
        n = y(
            e,
            (0, l.e7)([s.Z], () => s.Z.localItems),
        ),
        f = h.d$.useSetting();
    return i.useMemo(() => {
        if (null != t && 0 >= g.default.compare(t.id, f)) return !1;
        for (let e of n) {
            if (0 >= g.default.compare(e.id, f)) break;
            if (!(0, u.r)(e, f)) return !0;
        }
        return !1;
    }, [t, f, n])
        ? (0, r.jsx)(o.u, {
              text: b.intl.string(b.t["8k+6QY"]),
              children: (0, r.jsx)(a.hU, {
                  "aria-label": b.intl.string(b.t["8k+6QY"]),
                  icon: a.W6s,
                  variant: "secondary",
                  size: "sm",
                  onClick: () => {
                      null != t &&
                          (h.d$.updateSetting(t.id),
                          p.default.track(m.rMx.NOTIFICATION_CENTER_ACTION, { action_type: c.ud.MARK_ALL_READ }));
                  },
              }),
          })
        : null;
}
