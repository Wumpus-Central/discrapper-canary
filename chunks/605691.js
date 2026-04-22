n.d(t, { A: () => A });
var r = n(627968),
    i = n(64700),
    l = n(192308),
    a = n(477782),
    d = n(308528),
    u = n(994500),
    s = n(287809),
    o = n(47167),
    c = n(985018);
function A(e, t) {
    let A = i.useCallback(() => {
        let i = (0, o.m1)(e, s.default, u.A),
            a = c.intl.formatToPlainString(c.t.hJ5Ap4, { name: i }),
            A = c.intl.format(c.t.SSIVOu, { name: i });
        e.isManaged() &&
            ((a = c.intl.formatToPlainString(c.t.hVGjEW, { name: i })), (A = c.intl.format(c.t.IK1Qvs, { name: i })));
        let E = function (n) {
            let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            d.A.closePrivateChannel(e.id, t, r);
        };
        (0, l.openModalLazy)(async () => {
            let { default: e } = await n.e("37803").then(n.bind(n, 148166));
            return (t) => (0, r.jsx)(e, { title: a, body: A, onSubmit: E, ...t });
        });
    }, [e, t]);
    return (0, r.jsx)(a.Dr, { id: "leave-channel", label: c.intl.string(c.t["26C4oi"]), action: A, color: "danger" });
}
