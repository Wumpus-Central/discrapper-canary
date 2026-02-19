"use strict";
n.d(t, { S: () => l });
var i = n(353640),
    s = n(121894);
let l = (0, i.v)((e, t) => ({
    hasNoUnreads: !1,
    shouldHide: () => !t().hasNoUnreads,
    setInboxReadState: (n) => {
        n !== t().hasNoUnreads &&
            (0, s.r)(() => {
                e({ hasNoUnreads: n });
            });
    },
}));
