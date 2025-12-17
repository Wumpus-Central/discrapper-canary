n.d(t, {
    Gp: () => v,
    ZP: () => y,
}),
    n(388685),
    n(642613);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(681715),
    o = n(481060),
    s = n(140155),
    c = n(497089),
    u = n(178480),
    d = n(11799),
    f = n(616032),
    h = n(695346),
    p = n(626135),
    g = n(709054),
    b = n(981631),
    m = n(388032);
function y() {
    let { initialized: e, items: t, loading: n, loadMore: i } = (0, d.y6)(),
        a = O(
            t,
            (0, l.e7)([s.Z], () => s.Z.localItems),
        );
    return (0, r.jsx)(f.Z, {
        initialized: e,
        items: a,
        loading: n,
        loadMore: i,
    });
}
function O(e, t) {
    return i.useMemo(() => [...[...e, ...t].sort((e, t) => -1 * g.default.compare(e.id, t.id))], [e, t]);
}
function v() {
    let { items: e } = (0, d.y6)(),
        t = e.length > 0 ? e[0] : null,
        n = O(
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
        ? (0, r.jsx)(a.u, {
              text: m.intl.string(m.t["8k+6QY"]),
              children: (0, r.jsx)(o.hU, {
                  "aria-label": m.intl.string(m.t["8k+6QY"]),
                  icon: o.W6s,
                  variant: "secondary",
                  size: "sm",
                  onClick: () => {
                      null != t &&
                          (h.d$.updateSetting(t.id),
                          p.default.track(b.rMx.NOTIFICATION_CENTER_ACTION, { action_type: c.ud.MARK_ALL_READ }));
                  },
              }),
          })
        : null;
}
