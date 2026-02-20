"use strict";
n.d(t, { W4: () => l, my: () => o });
var r = n(693037),
    i = n(780755),
    s = n(875565),
    a = n(272469);
function o(e, t, n) {
    try {
        Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 });
    } catch (n) {
        i.T && a.vF.log(`Failed to add non-enumerable property "${t}" to object`, e);
    }
}
function l(e) {
    if ((0, s.bJ)(e)) return { message: e.message, name: e.name, stack: e.stack, ...c(e) };
    if (!(0, s.xH)(e)) return e;
    {
        let t = { type: e.type, target: u(e.target), currentTarget: u(e.currentTarget), ...c(e) };
        return "u" > typeof CustomEvent && (0, s.tH)(e, CustomEvent) && (t.detail = e.detail), t;
    }
}
function u(e) {
    try {
        return (0, s.vq)(e) ? (0, r.Hd)(e) : Object.prototype.toString.call(e);
    } catch (e) {
        return "<unknown>";
    }
}
function c(e) {
    if ("object" != typeof e || null === e) return {};
    {
        let t = {};
        for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t;
    }
}
function d(e) {
    if (!isPlainObject(e)) return !1;
    try {
        let t = Object.getPrototypeOf(e).constructor.name;
        return !t || "Object" === t;
    } catch (e) {
        return !0;
    }
}
