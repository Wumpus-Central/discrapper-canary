"use strict";
function i(e) {
    if (null != e.title && null != e.filename) {
        let t = e.filename.lastIndexOf("."),
            n = t > 0 ? e.filename.substr(t) : "";
        return e.title + n;
    }
    return e.filename;
}
n.d(t, { A: () => i });
