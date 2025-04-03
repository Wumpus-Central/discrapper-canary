a.d(e, {
    $Q: () => E,
    HK: () => l,
    Jr: () => f,
    Sh: () => I,
    _j: () => u,
    hl: () => c,
    xp: () => s,
    zf: () => A
});
var r = a(467510),
    n = a(176984),
    _ = a(573736),
    o = a(622916),
    i = a(886115);
function c(t, e, a) {
    if (!(e in t)) return;
    let r = t[e],
        n = a(r);
    'function' == typeof n && E(n, r), (t[e] = n);
}
function s(t, e, a) {
    try {
        Object.defineProperty(t, e, {
            value: a,
            writable: !0,
            configurable: !0
        });
    } catch (a) {
        n.X && o.kg.log(`Failed to add non-enumerable property "${e}" to object`, t);
    }
}
function E(t, e) {
    try {
        let a = e.prototype || {};
        (t.prototype = e.prototype = a), s(t, '__sentry_original__', e);
    } catch (t) {}
}
function l(t) {
    return t.__sentry_original__;
}
function u(t) {
    return Object.keys(t)
        .map((e) => `${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`)
        .join('&');
}
function I(t) {
    if ((0, _.VZ)(t))
        return {
            message: t.message,
            name: t.name,
            stack: t.stack,
            ...d(t)
        };
    if (!(0, _.cO)(t)) return t;
    {
        let e = {
            type: t.type,
            target: R(t.target),
            currentTarget: R(t.currentTarget),
            ...d(t)
        };
        return 'undefined' != typeof CustomEvent && (0, _.V9)(t, CustomEvent) && (e.detail = t.detail), e;
    }
}
function R(t) {
    try {
        return (0, _.kK)(t) ? (0, r.Rt)(t) : Object.prototype.toString.call(t);
    } catch (t) {
        return '<unknown>';
    }
}
function d(t) {
    if ('object' != typeof t || null === t) return {};
    {
        let e = {};
        for (let a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
        return e;
    }
}
function A(t, e = 40) {
    let a = Object.keys(I(t));
    a.sort();
    let r = a[0];
    if (!r) return '[object has no keys]';
    if (r.length >= e) return (0, i.$G)(r, e);
    for (let t = a.length; t > 0; t--) {
        let r = a.slice(0, t).join(', ');
        if (!(r.length > e)) {
            if (t === a.length) return r;
            return (0, i.$G)(r, e);
        }
    }
    return '';
}
function f(t) {
    return (function t(e, a) {
        if (
            (function (t) {
                if (!(0, _.PO)(t)) return !1;
                try {
                    let e = Object.getPrototypeOf(t).constructor.name;
                    return !e || 'Object' === e;
                } catch (t) {
                    return !0;
                }
            })(e)
        ) {
            let r = a.get(e);
            if (void 0 !== r) return r;
            let n = {};
            for (let r of (a.set(e, n), Object.keys(e))) void 0 !== e[r] && (n[r] = t(e[r], a));
            return n;
        }
        if (Array.isArray(e)) {
            let r = a.get(e);
            if (void 0 !== r) return r;
            let n = [];
            return (
                a.set(e, n),
                e.forEach((e) => {
                    n.push(t(e, a));
                }),
                n
            );
        }
        return e;
    })(t, new Map());
}
