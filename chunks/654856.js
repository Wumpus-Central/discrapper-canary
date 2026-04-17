n.d(t, { V: () => g });
var i = n(627968),
    s = n(64700),
    l = n(574381),
    r = n(158954),
    a = n(314116),
    o = n(419954),
    d = n(837921),
    c = n(780964),
    u = n(208039),
    m = n(985018);
let g = (0, o.E2)(c.X.HARDWARE_ACCELERATION, {
    usePredicate: () => l.Av && !(0, l.cX)(),
    useSearchTerms: () => [m.intl.string(m.t["/HIxyY"]), m.intl.string(m.t.B0hqpb)],
    Component: function () {
        let [e] = s.useState(() => d.Ay.getEnableHardwareAcceleration()),
            t = m.intl.string(m.t["/HIxyY"]),
            n = m.intl.string(m.t.B0hqpb);
        return (0, i.jsxs)(r.BJc, {
            children: [
                (0, i.jsx)(r.dOG, { label: t, description: n, checked: e, onChange: _ }),
                !e && (0, i.jsx)(u.A, { look: u.k.WARNING, children: m.intl.string(m.t.j7S6IX) }),
            ],
        });
    },
});
function _(e) {
    let t = e ? m.intl.format(m.t.LYXRxL, {}) : m.intl.format(m.t.uDP3Kz, {});
    (0, a.A)({
        title: m.intl.string(m.t.aqpAvn),
        subtitle: t,
        confirmText: m.intl.string(m.t.vT7ckk),
        onConfirm: () => {
            d.Ay.setEnableHardwareAcceleration(e);
        },
    });
}
