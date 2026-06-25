n.r(t), n.d(t, { default: () => h });
var s = n(627968),
    u = n(64700),
    o = n(873263),
    l = n(718446),
    i = n(899847),
    d = n(653166),
    r = n(33666),
    a = n(718697),
    c = n(107766),
    p = n(652215),
    C = n(355097);
function h() {
    let e = (0, r.A)(),
        { teenId: t, linkCode: n } = (0, o.g)(),
        h = d.q.useConfig({ location: "FamilyCenterRouter" }).enabled,
        E = "teen" !== e && null != t && null != n;
    return (u.useEffect(() => {
        E && h && null != t && null != n && (i.Ay.setPendingConnection(t, n), (0, c.Ew)(t, n));
    }, [E, h, t, n]),
    E)
        ? (0, s.jsx)(o.rd, { to: p.BVt.FAMILY_CENTER })
        : "teen" === e
          ? (0, s.jsx)(o.rd, { to: (0, l.settingsPathToRoute)(C.od.FAMILY_CENTER) })
          : (0, s.jsx)(a.A, {});
}
