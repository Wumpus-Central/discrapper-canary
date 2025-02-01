n.d(t, { Z: () => s });
var i = n(230487),
    l = n(998502),
    r = n(914946),
    a = n(452426);
let s = {
    [n(981631).Etm.ENCOURAGE_HW_ACCELERATION]: {
        validation: (e) => (0, a.Z)(e),
        handler(e) {
            let { socket: t } = e;
            (0, r.bu)(t.transport);
            let n = t.application.id;
            if (null != n) return (0, i.Z)(n), { enabled: l.ZP.getEnableHardwareAcceleration() };
        }
    }
};
