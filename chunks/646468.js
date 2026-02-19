"use strict";
n.d(t, { Ay: () => f, xc: () => C });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(435371),
    a = n(397927),
    o = n(252431),
    c = n(322387),
    d = n(995273),
    u = n(325326),
    h = n(208667),
    A = n(253932),
    p = n(954571),
    g = n(661191),
    m = n(652215),
    _ = n(985018);
function f() {
    let { initialized: e, items: t, loading: n, loadMore: s } = (0, u.LF)(),
        r = x(
            t,
            (0, l.bG)([o.A], () => o.A.localItems),
        );
    return (0, i.jsx)(h.A, { initialized: e, items: r, loading: n, loadMore: s });
}
function x(e, t) {
    return s.useMemo(() => [...[...e, ...t].sort((e, t) => -1 * g.default.compare(e.id, t.id))], [e, t]);
}
function C() {
    let { items: e } = (0, u.LF)(),
        t = e.length > 0 ? e[0] : null,
        n = x(
            e,
            (0, l.bG)([o.A], () => o.A.localItems),
        ),
        h = A.ns.useSetting();
    return s.useMemo(() => {
        if (null != t && 0 >= g.default.compare(t.id, h)) return !1;
        for (let e of n) {
            if (0 >= g.default.compare(e.id, h)) break;
            if (!(0, d.NW)(e, h)) return !0;
        }
        return !1;
    }, [t, h, n])
        ? (0, i.jsx)(r.m_, {
              text: _.intl.string(_.t["8k+6QY"]),
              children: (0, i.jsx)(a.K0, {
                  "aria-label": _.intl.string(_.t["8k+6QY"]),
                  icon: a.iA$,
                  variant: "secondary",
                  size: "sm",
                  onClick: () => {
                      null != t &&
                          (A.ns.updateSetting(t.id),
                          p.default.track(m.HAw.NOTIFICATION_CENTER_ACTION, { action_type: c.e1.MARK_ALL_READ }));
                  },
              }),
          })
        : null;
}
