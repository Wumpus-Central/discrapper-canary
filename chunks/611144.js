n.d(t, {
    Z: () => v,
    s: () => l
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
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                i(e, t, n[t]);
            });
    }
    return e;
}
function a(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function s(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : a(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var l = (function (e) {
    return (e.UPDATE_COLUMN_COUNTS = 'UPDATE_COLUMN_COUNTS'), (e.SET_FOCUSED_POSITION = 'SET_FOCUSED_POSITION'), e;
})({});
function c(e, t) {
    return Number.isNaN(e) ? t : Number.isNaN(t) ? e : Math.max(e, t);
}
function u(e, t) {
    return Number.isNaN(e) ? t : Number.isNaN(t) ? e : Math.min(e, t);
}
function d(e, t) {
    let { columnCounts: n } = t,
        r = u(c(0, n.length - 1), e.focusedY);
    return s(o({}, e), {
        columnCounts: n,
        focusedX: u(null == n[r] ? 0 : n[r] - 1, e.focusedX),
        focusedY: r
    });
}
function f(e, t) {
    let { x: n, y: r } = t,
        i = c(0, u(r, e.columnCounts.length - 1));
    return s(o({}, e), {
        focusedX: c(0, u(n, e.columnCounts[i] - 1)),
        focusedY: i
    });
}
function _(e, t) {
    let n = c(0, e.focusedY - 1);
    return s(o({}, e), {
        focusedX: u(e.columnCounts[n] - 1, e.focusedX),
        focusedY: n
    });
}
function p(e, t) {
    let n = u(e.focusedY + 1, e.columnCounts.length - 1);
    return s(o({}, e), {
        focusedX: u(e.columnCounts[n] - 1, e.focusedX),
        focusedY: n
    });
}
function h(e, t) {
    let n = e.focusedY !== e.columnCounts.length - 1 && e.focusedX + 1 === e.columnCounts[e.focusedY],
        r = n ? 0 : u(e.focusedX + 1, e.columnCounts[e.focusedY] - 1),
        i = n ? e.focusedY + 1 : e.focusedY;
    return s(o({}, e), {
        focusedX: r,
        focusedY: i
    });
}
function m(e, t) {
    let n = 0 !== e.focusedY && 0 === e.focusedX,
        r = n ? e.focusedY - 1 : e.focusedY,
        i = n ? e.columnCounts[r] - 1 : c(0, e.focusedX - 1);
    return s(o({}, e), {
        focusedX: i,
        focusedY: r
    });
}
function g(e, t) {
    return s(o({}, e), { focusedX: 0 });
}
function E(e, t) {
    return s(o({}, e), { focusedX: e.columnCounts[e.focusedY] - 1 });
}
function b(e, t) {
    return s(o({}, e), {
        focusedX: 0,
        focusedY: 0
    });
}
function y(e, t) {
    let n = e.columnCounts.length - 1;
    return s(o({}, e), {
        focusedX: e.columnCounts[n] - 1,
        focusedY: n
    });
}
function v(e, t) {
    switch (t.type) {
        case r.Us.NAVIGATE_UP:
            return _(e, t);
        case r.Us.NAVIGATE_DOWN:
            return p(e, t);
        case r.Us.NAVIGATE_RIGHT:
            return h(e, t);
        case r.Us.NAVIGATE_LEFT:
            return m(e, t);
        case r.Us.NAVIGATE_INLINE_START:
            return g(e, t);
        case r.Us.NAVIGATE_INLINE_END:
            return E(e, t);
        case r.Us.NAVIGATE_START:
            return b(e, t);
        case r.Us.NAVIGATE_END:
            return y(e, t);
        case 'UPDATE_COLUMN_COUNTS':
            return d(e, t);
        case 'SET_FOCUSED_POSITION':
            return f(e, t);
        case r.Us.SELECT_FOCUSED_ITEM:
            break;
        default:
            console.warn('Grid navigator was given an unhandled action '.concat(t.type));
    }
    return e;
}
