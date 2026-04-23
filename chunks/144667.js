"use strict";
n.d(t, { H: () => i, b: () => r }), n(321073), n(752238);
let r = /^[a-z0-9_+\-.#]+$/i;
function i(e) {
    let t,
        n = [],
        r = /\\|```/g;
    for (; null != (t = r.exec(e)); ) {
        if ("\\" === t[0]) {
            r.lastIndex += 1;
            continue;
        }
        n.push(t.index);
    }
    return n;
}
