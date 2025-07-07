n.d(t, { a: () => a });
var r = n(97519);
function l(e) {
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
function i(e, t) {
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
let o = {
        skus: [],
        currentPage: 0,
        totalCount: 0,
        hasMorePages: !1,
        searchError: null,
        isFetchingResults: !1
    },
    a = (0, r.U)((e) =>
        i(l({}, o), {
            onSetResponse: (t) => {
                let n = Math.floor(t.pageOffset / t.pageLimit) + 1;
                e(i(l({}, t), { currentPage: n }));
            },
            setSearchError: (t) => {
                e(i(l({}, o), { searchError: t }));
            },
            setIsFetchingResults: (t) => {
                e({ isFetchingResults: t });
            },
            clear: () => {
                e(l({}, o));
            }
        })
    );
