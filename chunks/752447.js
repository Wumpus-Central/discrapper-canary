"use strict";
n.d(t, { l: () => r });
let i = (0, n(353640).v)((e) => ({
        logs: [],
        addLog: (t) => e((e) => ({ logs: [...e.logs, `[${new Date().toISOString().split("T")[0]}] ${t}`] })),
        clearLogs: () => e({ logs: [] }),
    })),
    r = (e) => {
        let t = new Date().toLocaleTimeString("en-US", { hour12: !1 }),
            n = `[${t}] ${e}`;
        i.getState().addLog(n);
    };
