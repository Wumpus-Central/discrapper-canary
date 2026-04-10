"use strict";
function i(e) {
    let t = null != e.call ? e.call.duration : null;
    return null != t ? t.humanize() : null;
}
n.d(t, { A: () => i });
