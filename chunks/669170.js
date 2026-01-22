n.d(t, {
    A: () => y,
    g: () => l,
}),
    n(321073),
    n(896048),
    n(65821);
var r = n(741918);
function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function a(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                i(e, t, n[t]);
            });
    }
    return e;
}
function s(e, t) {
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
function o(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : s(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var l = (function (e) {
    return (e.UPDATE_ITEMS = "UPDATE_ITEMS"), (e.SET_FOCUS_PATH = "SET_FOCUS_PATH"), e;
})({});
function c(e, t) {
    return e.findIndex((e) => t === e.key);
}
function u(e) {
    return e.focusPath[e.focusPath.length - 1];
}
function d(e) {
    let t = e.items;
    for (let n = 0; n < e.focusPath.length - 1; n++) {
        if (null == t) return;
        let r = c(t, e.focusPath[n]);
        t = t[r].children;
    }
    return t;
}
function f(e, t) {
    let n = e,
        r = [];
    for (let e = 0; e < t.length && null != n; e++) {
        let i = t[e],
            a = c(n, i);
        if (a < 0 || a >= n.length) {
            let e = n[0];
            null != e && r.push(e.key);
            break;
        }
        r.push(i), (n = n[a].children);
    }
    return r;
}
function p(e, t) {
    let { items: n } = t,
        r = o(a({}, e), {
            items: n,
            focusPath: f(n, e.focusPath),
        });
    return o(a({}, r), { focusIndex: b(r) });
}
function _(e, t) {
    let { path: n } = t,
        r = o(a({}, e), { focusPath: f(e.items, n) });
    return o(a({}, r), { focusIndex: b(r) });
}
function h(e, t) {
    let n = u(e),
        r = d(e);
    if (null == r) return e;
    let i = (c(r, n) - 1) % r.length;
    if ((i < 0 && (i = r.length - 1), null == r[i])) return e;
    let s = o(a({}, e), {
        focusPath: [...e.focusPath.slice(0, -1), r[i].key],
    });
    return o(a({}, s), { focusIndex: b(s) });
}
function m(e, t) {
    let n = u(e),
        r = d(e);
    if (null == r) return e;
    let i = (c(r, n) + 1) % r.length;
    if (null == r[i]) return e;
    let s = o(a({}, e), {
        focusPath: [...e.focusPath.slice(0, -1), r[i].key],
    });
    return o(a({}, s), { focusIndex: b(s) });
}
function g(e, t) {
    var n;
    let r = u(e),
        i = d(e);
    if (null == i) return e;
    let s = i[c(i, r)],
        l = null == s || null == (n = s.children) ? void 0 : n[0];
    if (null == l) return e;
    let f = o(a({}, e), {
        focusPath: [...e.focusPath, l.key],
    });
    return o(a({}, f), { focusIndex: b(f) });
}
function E(e, t) {
    if (e.focusPath.length <= 1) return e;
    let n = o(a({}, e), { focusPath: e.focusPath.slice(0, -1) });
    return o(a({}, n), { focusIndex: b(n) });
}
function b(e) {
    let t = u(e),
        n = d(e);
    return null == n ? -1 : c(n, t);
}
function y(e, t) {
    switch (t.type) {
        case r.X2.NAVIGATE_UP:
            return h(e, t);
        case r.X2.NAVIGATE_DOWN:
            return m(e, t);
        case r.X2.NAVIGATE_IN:
            return g(e, t);
        case r.X2.NAVIGATE_OUT:
            return E(e, t);
        case "UPDATE_ITEMS":
            return p(e, t);
        case "SET_FOCUS_PATH":
            return _(e, t);
        case r.X2.SELECT_FOCUSED_ITEM:
            return e;
        default:
            throw Error("Menu navigator was given an unhandled action ".concat(t.type));
    }
}
