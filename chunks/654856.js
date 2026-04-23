n.d(t, { V: () => _ });
var i = n(627968),
    s = n(64700),
    l = n(574381),
    a = n(331322),
    r = n(243721),
    o = n(314116),
    d = n(419954),
    u = n(837921),
    c = n(780964),
    g = n(208039),
    m = n(985018);
let _ = (0, d.E2)(c.X.HARDWARE_ACCELERATION, {
    usePredicate: () => l.Av && !(0, l.cX)(),
    useSearchTerms: () => [m.intl.string(m.t["/HIxyY"]), m.intl.string(m.t.B0hqpb)],
    Component: function () {
        let [e] = s.useState(() => u.Ay.getEnableHardwareAcceleration()),
            t = m.intl.string(m.t["/HIxyY"]),
            n = m.intl.string(m.t.B0hqpb);
        return (0, i.jsxs)(a.B, {
            children: [
                (0, i.jsx)(r.d, { label: t, description: n, checked: e, onChange: A }),
                !e && (0, i.jsx)(g.A, { look: g.k.WARNING, children: m.intl.string(m.t.j7S6IX) }),
            ],
        });
    },
});
function A(e) {
    let t = e ? m.intl.format(m.t.LYXRxL, {}) : m.intl.format(m.t.uDP3Kz, {});
    (0, o.A)({
        title: m.intl.string(m.t.aqpAvn),
        subtitle: t,
        confirmText: m.intl.string(m.t.vT7ckk),
        onConfirm: () => {
            u.Ay.setEnableHardwareAcceleration(e);
        },
    });
}
