n.d(t, {
    G: () => a,
    Z: () => o
});
var r,
    l = n(536895);
function i(e) {
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
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function s(e, t) {
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
function o(e, t) {
    switch (t.type) {
        case l.Us.NAVIGATE_UP:
            return s(i({}, e), { focusedIndex: Math.max(0, e.focusedIndex - 1) });
        case l.Us.NAVIGATE_DOWN:
            return s(i({}, e), { focusedIndex: Math.min(e.focusedIndex + 1, e.itemCount - 1) });
        case l.Us.NAVIGATE_START:
            return s(i({}, e), { focusedIndex: 0 });
        case l.Us.NAVIGATE_END:
            return s(i({}, e), { focusedIndex: e.itemCount - 1 });
        case 'UPDATE_ITEM_COUNT':
            let { itemCount: n } = t;
            return s(i({}, e), {
                itemCount: n,
                focusedIndex: Math.min(n - 1, e.focusedIndex)
            });
        case 'SET_FOCUSED_INDEX':
            let { index: r } = t;
            return s(i({}, e), { focusedIndex: Math.max(0, Math.min(r, e.itemCount - 1)) });
        case l.Us.SELECT_FOCUSED_ITEM:
            break;
        default:
            console.warn('Listbox navigator was given an unhandled action '.concat(t.type));
    }
    return e;
}
