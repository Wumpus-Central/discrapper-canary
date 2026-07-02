"use strict";
function i(e, t) {
    return (
        null != t &&
        (Array.isArray(t) ? t.includes(e) : "object" == typeof e ? JSON.stringify(e) === JSON.stringify(t) : e === t)
    );
}
function r(e, t, n) {
    let i = [...t];
    return t.includes(n) ? (i = t.filter((e) => e.id !== n.id)) : "multiple" === e ? i.push(n) : (i = [n]), i;
}
function s() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "listbox",
        t = arguments.length > 1 ? arguments[1] : void 0;
    return `${e}-option-${t}`;
}
function a(e) {
    if (
        !(function (e) {
            if (0 === e.length) return !1;
            let t = e[0];
            return !("value" in t) && Array.isArray(t.options);
        })(e)
    )
        return { flatOptions: e, groups: [] };
    let t = [],
        n = [];
    for (let i of e)
        0 !== i.options.length && (t.push(...i.options), n.push({ label: i.label, count: i.options.length }));
    return { flatOptions: t, groups: n };
}
n.d(t, { ZN: () => s, fI: () => i, qH: () => r, yG: () => a }), n(321073);
