"use strict";
n.d(t, { A: () => i });
var r = n(652215);
function i(e, t) {
    return !r.MRS.SELF_MENTIONABLE_SYSTEM.has(e.type) && e.author?.id === t;
}
