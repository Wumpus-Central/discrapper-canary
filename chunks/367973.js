"use strict";
function r(e, t) {
    let n = Array.isArray(t) ? [...e, ...t] : [...e, t];
    if (n.length >= 1 && n.length <= 5) return n;
    throw Error(`combination results in an invalid key that has ${n.length} elements: ${JSON.stringify(n)}`);
}
function i(e, t) {
    let n = Array.isArray(t) ? [...e, ...t] : [...e, t];
    if (n.length <= 5) return n;
    throw Error(`combination results in an invalid prefix key that has ${n.length} elements: ${JSON.stringify(n)}`);
}
n.d(t, { $: () => i, h: () => r }), n(860407);
