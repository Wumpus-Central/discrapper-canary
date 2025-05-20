n.d(t, { v: () => i }), n(388685), n(35282);
let r = (0, n(381814).U)((e) => ({
        logs: [],
        addLog: (t) =>
            e((e) => ({
                logs: [...e.logs, '['.concat(new Date().toISOString().split('T')[0], '] ').concat(t)]
            })),
        clearLogs: () => e({ logs: [] })
    })),
    i = (e) => {
        let t = new Date().toLocaleTimeString('en-US', { hour12: !1 }),
            n = '['.concat(t, '] ').concat(e);
        r.getState().addLog(n);
    };
