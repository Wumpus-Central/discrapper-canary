n.d(t, {
    A: () => s,
});
var r = n(334595),
    i = n(837921),
    l = n(90924),
    a = n(629471);
let s = {
    [n(652215).e$_.ENCOURAGE_HW_ACCELERATION]: {
        validation: (e) => (0, a.A)(e),
        handler(e) {
            let { socket: t } = e;
            (0, l.lG)(t.transport);
            let n = t.application.id;
            if (null != n)
                return (
                    (0, r.A)(n),
                    {
                        enabled: i.Ay.getEnableHardwareAcceleration(),
                    }
                );
        },
    },
};
