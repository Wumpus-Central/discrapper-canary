"use strict";
function r(e, t) {
    return (
        null != t &&
        (Array.isArray(t) ? t.includes(e) : "object" == typeof e ? JSON.stringify(e) === JSON.stringify(t) : e === t)
    );
}
function i(e, t, n) {
    let r = [...t];
    return t.includes(n) ? (r = t.filter((e) => e.id !== n.id)) : "multiple" === e ? r.push(n) : (r = [n]), r;
}
function s() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "listbox",
        t = arguments.length > 1 ? arguments[1] : void 0;
    return `${e}-option-${t}`;
}
n.d(t, { ZN: () => s, fI: () => r, qH: () => i }), n(321073);
