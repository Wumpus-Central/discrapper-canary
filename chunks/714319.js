n.d(t, {
    G: () => l,
    Z: () => h
});
var r = n(536895);
function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function a(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                i(e, t, n[t]);
            }));
    }
    return e;
}
function o(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function s(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : o(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var l = (function (e) {
    return ((e.UPDATE_ITEM_COUNT = 'UPDATE_ITEM_COUNT'), (e.SET_FOCUSED_INDEX = 'SET_FOCUSED_INDEX'), e);
})({});
function c(e, t) {
    let { itemCount: n } = t;
    return s(a({}, e), {
        itemCount: n,
        focusedIndex: Math.min(n - 1, e.focusedIndex)
    });
}
function u(e, t) {
    let { index: n } = t;
    return s(a({}, e), { focusedIndex: Math.max(0, Math.min(n, e.itemCount - 1)) });
}
function d(e, t) {
    return s(a({}, e), { focusedIndex: Math.max(0, e.focusedIndex - 1) });
}
function f(e, t) {
    return s(a({}, e), { focusedIndex: Math.min(e.focusedIndex + 1, e.itemCount - 1) });
}
function _(e, t) {
    return s(a({}, e), { focusedIndex: 0 });
}
function p(e, t) {
    return s(a({}, e), { focusedIndex: e.itemCount - 1 });
}
function h(e, t) {
    switch (t.type) {
        case r.Us.NAVIGATE_UP:
            return d(e, t);
        case r.Us.NAVIGATE_DOWN:
            return f(e, t);
        case r.Us.NAVIGATE_START:
            return _(e, t);
        case r.Us.NAVIGATE_END:
            return p(e, t);
        case 'UPDATE_ITEM_COUNT':
            return c(e, t);
        case 'SET_FOCUSED_INDEX':
            return u(e, t);
        case r.Us.SELECT_FOCUSED_ITEM:
            break;
        default:
            console.warn('Listbox navigator was given an unhandled action '.concat(t.type));
    }
    return e;
}
