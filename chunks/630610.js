n.d(t, { my: () => a });
var r = n(919015),
    i = n(478681);
function a(e, t, n) {
    try {
        Object.defineProperty(e, t, {
            value: n,
            writable: !0,
            configurable: !0,
        });
    } catch (n) {
        r.T && i.vF.log(`Failed to add non-enumerable property "${t}" to object`, e);
    }
}
function s(e) {
    try {
        return isElement(e) ? htmlTreeAsString(e) : Object.prototype.toString.call(e);
    } catch (e) {
        return "<unknown>";
    }
}
function o(e) {
    if ("object" != typeof e || null === e) return {};
    {
        let t = {};
        for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t;
    }
}
function l(e) {
    if (!isPlainObject(e)) return !1;
    try {
        let t = Object.getPrototypeOf(e).constructor.name;
        return !t || "Object" === t;
    } catch (e) {
        return !0;
    }
}
