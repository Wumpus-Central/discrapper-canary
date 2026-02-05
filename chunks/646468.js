n.d(t, { Ay: () => x, xc: () => E });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(435371),
    r = n(397927),
    o = n(252431),
    d = n(322387),
    c = n(995273),
    u = n(325326),
    h = n(208667),
    A = n(253932),
    g = n(954571),
    m = n(661191),
    p = n(652215),
    _ = n(985018);
function x() {
    let { initialized: e, items: t, loading: n, loadMore: l } = (0, u.LF)(),
        a = f(
            t,
            (0, s.bG)([o.A], () => o.A.localItems),
        );
    return (0, i.jsx)(h.A, { initialized: e, items: a, loading: n, loadMore: l });
}
function f(e, t) {
    return l.useMemo(() => [...[...e, ...t].sort((e, t) => -1 * m.default.compare(e.id, t.id))], [e, t]);
}
function E() {
    let { items: e } = (0, u.LF)(),
        t = e.length > 0 ? e[0] : null,
        n = f(
            e,
            (0, s.bG)([o.A], () => o.A.localItems),
        ),
        h = A.ns.useSetting();
    return l.useMemo(() => {
        if (null != t && 0 >= m.default.compare(t.id, h)) return !1;
        for (let e of n) {
            if (0 >= m.default.compare(e.id, h)) break;
            if (!(0, c.NW)(e, h)) return !0;
        }
        return !1;
    }, [t, h, n])
        ? (0, i.jsx)(a.m_, {
              text: _.intl.string(_.t["8k+6QY"]),
              children: (0, i.jsx)(r.K0, {
                  "aria-label": _.intl.string(_.t["8k+6QY"]),
                  icon: r.iA$,
                  variant: "secondary",
                  size: "sm",
                  onClick: () => {
                      null != t &&
                          (A.ns.updateSetting(t.id),
                          g.default.track(p.HAw.NOTIFICATION_CENTER_ACTION, { action_type: d.e1.MARK_ALL_READ }));
                  },
              }),
          })
        : null;
}
