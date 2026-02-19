"use strict";
n.d(t, { A: () => l });
var i = n(265690);
let s = { isSorting: !1 },
    l = (0, i.h)()((e, t) => ({
        ...s,
        startSorting: () => e({ isSorting: !0 }),
        stopSorting: () => e({ isSorting: !1 }),
    }));
