n.d(t, { Z: () => o });
var r = n(230487),
    i = n(998502),
    l = n(914946),
    a = n(452426);
let o = {
    [n(981631).Etm.ENCOURAGE_HW_ACCELERATION]: {
        validation: (e) => (0, a.Z)(e),
        handler(e) {
            let { socket: t } = e;
            (0, l.bu)(t.transport);
            let n = t.application.id;
            if (null != n) return (0, r.Z)(n), { enabled: i.ZP.getEnableHardwareAcceleration() };
        }
    }
};
