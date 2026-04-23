"use strict";
n.d(t, { H: () => s });
var r = n(73153),
    i = n(15285);
function s(e, t) {
    i.Ay.getSystemServiceStatus(e).state !== t.state &&
        r.h.dispatch({ type: "SYSTEM_SERVICE_INITIALIZE", status: t, modules: [e] });
}
