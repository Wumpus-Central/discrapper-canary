r.d(t, { a: () => a });
var n = r(97519);
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                ((n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n));
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
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
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
    a = (0, n.U)((e) =>
        i(l({}, o), {
            onSetResponse: (t) => {
                let r = Math.floor(t.pageOffset / t.pageLimit) + 1;
                e(i(l({}, t), { currentPage: r }));
            },
            setSearchError: (t) => {
                e(i(l({}, o), { searchError: t }));
            },
            setIsFetchingResults: (t) => {
                e({ isFetchingResults: t });
            },
            clearError: () => {
                e({ searchError: null });
            },
            clear: () => {
                e(l({}, o));
            }
        })
    );
