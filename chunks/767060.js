e.r(t);
var s = e(477900),
    u = e(582128),
    d = e(806163),
    l = e(718446),
    r = e(899847),
    c = e(33666),
    i = e(890623),
    o = e(107766),
    p = e(652215),
    a = e(355097);
e.d(
    t,
    {},
    {
        default: function () {
            let n = (0, c.A)(),
                { teenId: t, linkCode: e } = (0, d.g)(),
                E = "teen" !== n && null != t && null != e;
            return (u.useEffect(() => {
                E && null != t && null != e && (r.Ay.setPendingConnection(t, e), (0, o.Ew)(t, e));
            }, [E, t, e]),
            E)
                ? (0, s.jsx)(d.rd, { to: p.BVt.FAMILY_CENTER })
                : "teen" === n
                  ? (0, s.jsx)(d.rd, { to: (0, l.T)(a.od.FAMILY_CENTER) })
                  : (0, s.jsx)(i.A, {});
        },
    },
);
