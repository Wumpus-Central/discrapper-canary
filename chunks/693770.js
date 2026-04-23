"use strict";
function n(e, t, r) {
    if (t.has(e)) throw TypeError("Cannot initialize the same private elements twice on an object");
    t.set(e, r);
}
r.d(t, { _: () => n });
