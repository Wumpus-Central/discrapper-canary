n.r(t), n.d(t, { default: () => E });
var u = n(627968),
    l = n(64700),
    d = n(873263),
    s = n(17928),
    o = n(710195),
    a = n(718446),
    i = n(495544),
    r = n(899847),
    c = n(653166),
    f = n(33666),
    h = n(812791),
    p = n(107766),
    A = n(652215),
    C = n(355097);
function E() {
    let e = (0, f.A)(),
        { teenId: t, linkCode: n } = (0, d.g)(),
        E = c.q.useConfig({ location: "FamilyCenterRouter" }).enabled,
        b = (0, s.bG)([i.default], () => i.default.getId()),
        g = (0, s.bG)([o.A], () => o.A.hasLoaded(b)),
        k = "teen" !== e && null != t && null != n;
    return (l.useEffect(() => {
        k && E && null != t && null != n && (r.Ay.setPendingConnection(t, n), (0, p.Ew)(t, n));
    }, [k, E, t, n]),
    k)
        ? g
            ? (0, u.jsx)(d.rd, { to: A.BVt.FAMILY_CENTER })
            : null
        : "teen" === e
          ? (0, u.jsx)(d.rd, { to: (0, a.settingsPathToRoute)(C.od.FAMILY_CENTER) })
          : (0, u.jsx)(h.A, {});
}
