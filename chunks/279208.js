"use strict";
function i() {
    let e,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        i = window.GLOBAL_ENV.INVITE_HOST;
    return (e = `/${t}`), `${n ? `${location.protocol}//` : ""}${i}${e}`;
}
n.d(t, { A: () => i });
