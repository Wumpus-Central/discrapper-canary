(n.r(e), n.d(e, { default: () => h }));
var s = n(477900),
    u = n(582128),
    d = n(806163),
    l = n(718446),
    o = n(899847),
    i = n(33666),
    r = n(465558),
    c = n(107766),
    a = n(652215),
    p = n(355097);
function h() {
    let t = (0, i.A)(),
        { teenId: e, linkCode: n } = (0, d.g)(),
        h = "teen" !== t && null != e && null != n;
    return (u.useEffect(() => {
        h && null != e && null != n && (o.Ay.setPendingConnection(e, n), (0, c.Ew)(e, n));
    }, [h, e, n]),
    h)
        ? (0, s.jsx)(d.rd, { to: a.BVt.FAMILY_CENTER })
        : "teen" === t
          ? (0, s.jsx)(d.rd, { to: (0, l.settingsPathToRoute)(p.od.FAMILY_CENTER) })
          : (0, s.jsx)(r.A, {});
}
