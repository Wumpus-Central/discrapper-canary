"use strict";
n.d(t, { C: () => r, v: () => a });
let i = null;
function r(e) {
    i = e;
}
function a(e) {
    if (null == i) return null;
    try {
        return i(e);
    } catch (e) {
        return console.error("[rpc] command interceptor threw; running the real handler", e), null;
    }
}
