"use strict";
n.d(t, { A: () => s });
var i = n(265690);
let r = { isSorting: !1 },
    s = (0, i.h)()((e, t) => ({
        ...r,
        startSorting: () => e({ isSorting: !0 }),
        stopSorting: () => e({ isSorting: !1 }),
    }));
