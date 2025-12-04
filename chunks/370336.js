n.d(t, { Sh: () => o });
var r = n(467510),
    i = n(573736);
function a(e, t, n) {
    try {
        Object.defineProperty(e, t, {
            value: n,
            writable: !0,
            configurable: !0,
        });
    } catch (n) {
        DEBUG_BUILD && logger.log(`Failed to add non-enumerable property "${t}" to object`, e);
    }
}
function o(e) {
    if ((0, i.VZ)(e))
        return {
            message: e.message,
            name: e.name,
            stack: e.stack,
            ...l(e),
        };
    if (!(0, i.cO)(e)) return e;
    {
        let t = {
            type: e.type,
            target: s(e.target),
            currentTarget: s(e.currentTarget),
            ...l(e),
        };
        return "undefined" != typeof CustomEvent && (0, i.V9)(e, CustomEvent) && (t.detail = e.detail), t;
    }
}
function s(e) {
    try {
        return (0, i.kK)(e) ? (0, r.Rt)(e) : Object.prototype.toString.call(e);
    } catch (e) {
        return "<unknown>";
    }
}
function l(e) {
    if ("object" != typeof e || null === e) return {};
    {
        let t = {};
        for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t;
    }
}
function c(e) {
    if (!isPlainObject(e)) return !1;
    try {
        let t = Object.getPrototypeOf(e).constructor.name;
        return !t || "Object" === t;
    } catch (e) {
        return !0;
    }
}
