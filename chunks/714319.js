n.d(t, {
    G: () => a,
    Z: () => s
});
var r,
    i = n(536895);
function l(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function o(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var a = (((r = {}).UPDATE_ITEM_COUNT = 'UPDATE_ITEM_COUNT'), (r.SET_FOCUSED_INDEX = 'SET_FOCUSED_INDEX'), r);
function s(e, t) {
    switch (t.type) {
        case i.Us.NAVIGATE_UP:
            return o(l({}, e), { focusedIndex: Math.max(0, e.focusedIndex - 1) });
        case i.Us.NAVIGATE_DOWN:
            return o(l({}, e), { focusedIndex: Math.min(e.focusedIndex + 1, e.itemCount - 1) });
        case i.Us.NAVIGATE_START:
            return o(l({}, e), { focusedIndex: 0 });
        case i.Us.NAVIGATE_END:
            return o(l({}, e), { focusedIndex: e.itemCount - 1 });
        case 'UPDATE_ITEM_COUNT':
            let { itemCount: n } = t;
            return o(l({}, e), {
                itemCount: n,
                focusedIndex: Math.min(n - 1, e.focusedIndex)
            });
        case 'SET_FOCUSED_INDEX':
            let { index: r } = t;
            return o(l({}, e), { focusedIndex: Math.max(0, Math.min(r, e.itemCount - 1)) });
        case i.Us.SELECT_FOCUSED_ITEM:
            break;
        default:
            console.warn('Listbox navigator was given an unhandled action '.concat(t.type));
    }
    return e;
}
