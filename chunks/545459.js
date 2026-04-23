"use strict";
n.d(t, { Py: () => s, Yw: () => a, _r: () => i });
var r = n(73153);
function i() {
    r.h.wait(() => r.h.dispatch({ type: "DOMAIN_MIGRATION_START" }));
}
function s() {
    r.h.dispatch({ type: "DOMAIN_MIGRATION_FAILURE" });
}
function a() {
    window.location.reload();
}
