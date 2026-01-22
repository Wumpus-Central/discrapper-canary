n.d(t, {
    Ay: () => A,
    xc: () => O,
}),
    n(896048),
    n(638769);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(435371),
    s = n(397927),
    o = n(252431),
    c = n(322387),
    u = n(995273),
    d = n(325326),
    f = n(208667),
    p = n(253932),
    h = n(954571),
    b = n(661191),
    g = n(652215),
    m = n(985018);

function A() {
    let { initialized: e, items: t, loading: n, loadMore: l } = (0, d.LF)(),
        a = y(
            t,
            (0, i.bG)([o.A], () => o.A.localItems),
        );
    return (0, r.jsx)(f.A, {
        initialized: e,
        items: a,
        loading: n,
        loadMore: l,
    });
}

function y(e, t) {
    return l.useMemo(() => [...[...e, ...t].sort((e, t) => -1 * b.default.compare(e.id, t.id))], [e, t]);
}

function O() {
    let { items: e } = (0, d.LF)(),
        t = e.length > 0 ? e[0] : null,
        n = y(
            e,
            (0, i.bG)([o.A], () => o.A.localItems),
        ),
        f = p.ns.useSetting();
    return l.useMemo(() => {
        if (null != t && 0 >= b.default.compare(t.id, f)) return !1;
        for (let e of n) {
            if (0 >= b.default.compare(e.id, f)) break;
            if (!(0, u.NW)(e, f)) return !0;
        }
        return !1;
    }, [t, f, n])
        ? (0, r.jsx)(a.m_, {
              text: m.intl.string(m.t["8k+6QY"]),
              children: (0, r.jsx)(s.K0, {
                  "aria-label": m.intl.string(m.t["8k+6QY"]),
                  icon: s.iA$,
                  variant: "secondary",
                  size: "sm",
                  onClick: () => {
                      null != t &&
                          (p.ns.updateSetting(t.id),
                          h.default.track(g.HAw.NOTIFICATION_CENTER_ACTION, {
                              action_type: c.e1.MARK_ALL_READ,
                          }));
                  },
              }),
          })
        : null;
}
