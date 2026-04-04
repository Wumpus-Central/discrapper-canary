n.d(t, { V: () => _ });
var i = n(627968),
    s = n(64700),
    l = n(574381),
    a = n(158954),
    r = n(314116),
    o = n(419954),
    d = n(837921),
    c = n(780964),
    u = n(358776),
    m = n(208039),
    g = n(985018);
let _ = (0, o.E2)(c.X.ADVANCED_HARDWARE_ACCELERATION, {
    usePredicate: () => l.Av && !(0, l.cX)(),
    useSearchTerms: () => [g.intl.string(g.t["/HIxyY"]), g.intl.string(g.t.B0hqpb)],
    Component: function () {
        let [e] = s.useState(() => d.Ay.getEnableHardwareAcceleration()),
            t = (0, u.bp)("HardwareAccelerationSetting"),
            n = t ? g.intl.string(g.t["/HIxyY"]) : g.intl.string(g.t["eOC/F2"]),
            l = t ? g.intl.string(g.t.B0hqpb) : g.intl.string(g.t.Afc7l6);
        return (0, i.jsxs)(a.BJc, {
            children: [
                (0, i.jsx)(a.dOG, { label: n, description: l, checked: e, onChange: x }),
                !e && (0, i.jsx)(m.A, { look: m.k.WARNING, children: g.intl.string(g.t.j7S6IX) }),
            ],
        });
    },
});
function x(e) {
    let t = e ? g.intl.format(g.t.LYXRxL, {}) : g.intl.format(g.t.uDP3Kz, {});
    (0, r.A)({
        title: g.intl.string(g.t.aqpAvn),
        subtitle: t,
        confirmText: g.intl.string(g.t.vT7ckk),
        onConfirm: () => {
            d.Ay.setEnableHardwareAcceleration(e);
        },
    });
}
