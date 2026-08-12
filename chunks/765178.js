"use strict";
n.d(t, { O: () => a });
var i = n(230906);
let r = new Map(),
    a = {
        announce: i.iP,
        clearAnnouncements: i.pA,
        moveTo: function (e, t) {
            null == t || r.has(e) || ((0, i.vS)(t), r.set(e, t));
        },
        remove: function (e) {
            if (!r.delete(e)) return;
            let t = Array.from(r.values()).pop();
            (0, i.vS)(null != t ? t : null);
        },
    };
