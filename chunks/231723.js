"use strict";
n.d(t, { CP: () => l, KX: () => o, SY: () => s, ip: () => i, xt: () => a });
var r = n(64700),
    i = (function (e) {
        return (
            (e[(e.ENTERING = 0)] = "ENTERING"),
            (e[(e.ENTERED = 1)] = "ENTERED"),
            (e[(e.EXITING = 2)] = "EXITING"),
            (e[(e.EXITED = 3)] = "EXITED"),
            (e[(e.HIDDEN = 4)] = "HIDDEN"),
            e
        );
    })({});
let a = 300,
    s = "default",
    o = "popout",
    l = r.createContext({ headerId: void 0, headerIdIsManaged: !1 });
