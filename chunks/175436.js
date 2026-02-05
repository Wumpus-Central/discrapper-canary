n.d(t, { A: () => s });
var i = n(334595),
    r = n(837921),
    a = n(90924),
    l = n(629471);
let s = {
    [n(652215).e$_.ENCOURAGE_HW_ACCELERATION]: {
        validation: (e) => (0, l.A)(e),
        handler(e) {
            let { socket: t } = e;
            (0, a.lG)(t.transport);
            let n = t.application.id;
            if (null != n) return (0, i.A)(n), { enabled: r.Ay.getEnableHardwareAcceleration() };
        },
    },
};
