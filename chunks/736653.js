"use strict";
n.d(t, { Ay: () => l, DP: () => a, xv: () => s });
var r = n(582754),
    i = n(652215);
function a() {
    let { theme: e } = (0, r.wR)();
    return e;
}
function s() {
    return o(a());
}
function o(e) {
    switch (e) {
        case i.NJ8.DARK:
            return 0;
        case i.NJ8.LIGHT:
            return 1;
    }
}
let l = a;
