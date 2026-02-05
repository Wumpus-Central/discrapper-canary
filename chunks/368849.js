"use strict";
n.d(t, { q: () => i });
var r = n(264572).Buffer;
function i(e) {
    try {
        return r.from(JSON.stringify(e)).toString("base64");
    } catch (e) {
        return null;
    }
}
