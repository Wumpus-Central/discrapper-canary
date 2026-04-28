a.d(n, { A: () => h });
var e = a(627968),
    i = a(64700),
    l = a(192308),
    o = a(477782),
    r = a(308528),
    s = a(994500),
    d = a(287809),
    c = a(47167),
    u = a(985018);
function h(t, n) {
    let h = i.useCallback(() => {
        let i = (0, c.m1)(t, d.default, s.A),
            o = u.intl.formatToPlainString(u.t.hJ5Ap4, { name: i }),
            h = u.intl.format(u.t.SSIVOu, { name: i });
        t.isManaged() &&
            ((o = u.intl.formatToPlainString(u.t.hVGjEW, { name: i })), (h = u.intl.format(u.t.IK1Qvs, { name: i })));
        let p = function (a) {
            let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            r.A.closePrivateChannel(t.id, n, e);
        };
        (0, l.openModalLazy)(async () => {
            let { default: t } = await Promise.all([a.e("70588"), a.e("37803")]).then(a.bind(a, 148166));
            return (n) => (0, e.jsx)(t, { title: o, body: h, onSubmit: p, ...n });
        });
    }, [t, n]);
    return (0, e.jsx)(o.Dr, { id: "leave-channel", label: u.intl.string(u.t["26C4oi"]), action: h, color: "danger" });
}
