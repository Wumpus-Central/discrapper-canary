"use strict";
n.d(t, { v: () => i });
let r = null;
function i() {
    if (null == r)
        try {
            r = new AudioContext();
        } catch (e) {}
    return r;
}
