n.d(t, {
    Sh: () => l,
    xp: () => s
});
var r = n(467510),
    i = n(176984),
    o = n(573736),
    a = n(622916);
function s(e, t, n) {
    try {
        Object.defineProperty(e, t, {
            value: n,
            writable: !0,
            configurable: !0
        });
    } catch (n) {
        i.X && a.kg.log(`Failed to add non-enumerable property "${t}" to object`, e);
    }
}
function l(e) {
    if ((0, o.VZ)(e))
        return {
            message: e.message,
            name: e.name,
            stack: e.stack,
            ...u(e)
        };
    if (!(0, o.cO)(e)) return e;
    {
        let t = {
            type: e.type,
            target: c(e.target),
            currentTarget: c(e.currentTarget),
            ...u(e)
        };
        return 'undefined' != typeof CustomEvent && (0, o.V9)(e, CustomEvent) && (t.detail = e.detail), t;
    }
}
function c(e) {
    try {
        return (0, o.kK)(e) ? (0, r.Rt)(e) : Object.prototype.toString.call(e);
    } catch (e) {
        return '<unknown>';
    }
}
function u(e) {
    if ('object' != typeof e || null === e) return {};
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
        return !t || 'Object' === t;
    } catch (e) {
        return !0;
    }
}
