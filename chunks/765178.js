"use strict";
n.d(t, { O: () => s });
var i = n(230906);
let r = new Map(),
    s = {
        announce: i.iP,
        clearAnnouncements: i.pA,
        moveTo: function (e, t) {
            null == t || r.has(e) || ((0, i.vS)(t), r.set(e, t));
        },
        remove: function (e) {
            r.delete(e);
            let t = Array.from(r.values()).pop();
            (0, i.vS)(null != t ? t : null);
        },
    };
