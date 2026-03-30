"use strict";
n.d(t, { Z: () => a, m: () => s });
var r = n(885973),
    i = n(746318);
let s = (e) => ((0, r.C)(e) ? { enabled: !1 } : { enabled: i.A.getConfig(e).enabled }),
    a = (e) => {
        let t = i.A.useConfig(e);
        return (0, r.C)(e) ? { enabled: !1 } : { enabled: t.enabled };
    };
