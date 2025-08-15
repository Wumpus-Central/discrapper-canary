t.d(e, {
    G: () => a,
    Z: () => s,
});
var n,
    r = t(536895);
function l(A) {
    for (var e = 1; e < arguments.length; e++) {
        var t = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(t).filter(function (A) {
                    return Object.getOwnPropertyDescriptor(t, A).enumerable;
                }),
            )),
            n.forEach(function (e) {
                var n;
                (n = t[e]),
                    e in A
                        ? Object.defineProperty(A, e, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (A[e] = n);
            });
    }
    return A;
}
function i(A, e) {
    return (
        (e = null != e ? e : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(e))
            : (function (A, e) {
                  var t = Object.keys(A);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(A);
                      t.push.apply(t, n);
                  }
                  return t;
              })(Object(e)).forEach(function (t) {
                  Object.defineProperty(A, t, Object.getOwnPropertyDescriptor(e, t));
              }),
        A
    );
}
var a = (((n = {}).UPDATE_ITEM_COUNT = "UPDATE_ITEM_COUNT"), (n.SET_FOCUSED_INDEX = "SET_FOCUSED_INDEX"), n);
function s(A, e) {
    switch (e.type) {
        case r.Us.NAVIGATE_UP:
            return i(l({}, A), { focusedIndex: Math.max(0, A.focusedIndex - 1) });
        case r.Us.NAVIGATE_DOWN:
            return i(l({}, A), { focusedIndex: Math.min(A.focusedIndex + 1, A.itemCount - 1) });
        case r.Us.NAVIGATE_START:
            return i(l({}, A), { focusedIndex: 0 });
        case r.Us.NAVIGATE_END:
            return i(l({}, A), { focusedIndex: A.itemCount - 1 });
        case "UPDATE_ITEM_COUNT":
            let { itemCount: t } = e;
            return i(l({}, A), {
                itemCount: t,
                focusedIndex: Math.min(t - 1, A.focusedIndex),
            });
        case "SET_FOCUSED_INDEX":
            let { index: n } = e;
            return i(l({}, A), { focusedIndex: Math.max(0, Math.min(n, A.itemCount - 1)) });
        case r.Us.SELECT_FOCUSED_ITEM:
            break;
        default:
            console.warn("Listbox navigator was given an unhandled action ".concat(e.type));
    }
    return A;
}
