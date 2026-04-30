"use strict";
let i;
n.d(t, { A: () => s });
let r = new Uint8Array(16);
function s() {
    if (!i && !(i = "u" > typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)))
        throw Error(
            "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported",
        );
    return i(r);
}
