n.d(t, { Ay: () => N, xc: () => I });
var s = n(627968),
    a = n(64700),
    l = n(311907),
    i = n(990078),
    r = n(408278),
    o = n(921457),
    d = n(252431),
    c = n(322387),
    u = n(995273),
    h = n(325326),
    _ = n(208667),
    A = n(253932),
    m = n(954571),
    g = n(661191),
    f = n(652215),
    E = n(985018);
function N() {
    let { initialized: e, items: t, loading: n, loadMore: a } = (0, h.LF)(),
        i = p(
            t,
            (0, l.bG)([d.A], () => d.A.localItems),
        );
    return (0, s.jsx)(_.A, { initialized: e, items: i, loading: n, loadMore: a });
}
function p(e, t) {
    return a.useMemo(() => [...[...e, ...t].sort((e, t) => -1 * g.default.compare(e.id, t.id))], [e, t]);
}
function I() {
    let { items: e } = (0, h.LF)(),
        t = e.length > 0 ? e[0] : null,
        n = p(
            e,
            (0, l.bG)([d.A], () => d.A.localItems),
        ),
        _ = A.ns.useSetting();
    return a.useMemo(() => {
        if (null != t && 0 >= g.default.compare(t.id, _)) return !1;
        for (let e of n) {
            if (0 >= g.default.compare(e.id, _)) break;
            if (!(0, u.NW)(e, _)) return !0;
        }
        return !1;
    }, [t, _, n])
        ? (0, s.jsx)(i.m, {
              text: E.intl.string(E.t["8k+6QY"]),
              children: (0, s.jsx)(r.K, {
                  "aria-label": E.intl.string(E.t["8k+6QY"]),
                  icon: o.i,
                  variant: "secondary",
                  size: "sm",
                  onClick: () => {
                      null != t &&
                          (A.ns.updateSetting(t.id),
                          m.default.track(f.HAw.NOTIFICATION_CENTER_ACTION, { action_type: c.e1.MARK_ALL_READ }));
                  },
              }),
          })
        : null;
}
