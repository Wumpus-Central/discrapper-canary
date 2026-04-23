t.d(a, { default: () => b });
var i = t(627968);
t(64700);
var d = t(550079),
    e = t(442433),
    c = t(17928),
    r = t(477782),
    l = t(110782),
    h = t(189081),
    s = t(340829),
    u = t(985018);
function b(n) {
    let a,
        t,
        { libraryApplication: b, onPlay: o, onSelect: p } = n,
        g =
            ((a = (0, c.bG)([s.A], () => s.A.getLaunchOptions(b.id, b.branchId))),
            (t = (0, c.bG)([h.A], () => h.A.getActiveLaunchOptionId(b.id, b.branchId))),
            a.length < 2
                ? null
                : a.map((n) =>
                      (0, i.jsx)(
                          r.Dr,
                          {
                              id: n.id,
                              label: n.name,
                              action: (a) => {
                                  n.id !== t && l.Wp(b.id, b.branchId, n.id), o?.(a);
                              },
                          },
                          n.id,
                      ),
                  ));
    return (0, i.jsx)(d.W, {
        "data-menu-migrated": !0,
        navId: "launch-context",
        onClose: e.Z_,
        "aria-label": u.intl.string(u.t.tKobzb),
        onSelect: p,
        children: g,
    });
}
