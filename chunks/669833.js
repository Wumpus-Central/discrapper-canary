"use strict";
function r(e, t, n) {
    if (!t.has(e)) throw TypeError("attempted to " + n + " private field on non-instance");
    return t.get(e);
}
n.d(t, { _: () => r });
