n.d(t, {
    A2: () => u,
    Ay: () => c,
    WS: () => s,
});
var i = n(839214),
    r = n(914853);

function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}

function a(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let s = 1e3,
    o = (0, i.D)((e, t) => ({
        activeTab: r.x.FRIENDS,
        recentlyAddedFavoriteTimestampMsByKey: {},
        setActiveTab: (n) => {
            t().activeTab !== n &&
                e({
                    activeTab: n,
                });
        },
        markFavoriteAdded: (t, n) => {
            let i = null != n ? n : Date.now();
            e((e) => ({
                recentlyAddedFavoriteTimestampMsByKey: a(l({}, e.recentlyAddedFavoriteTimestampMsByKey), {
                    [t]: i,
                }),
            }));
        },
        clearFavoriteAdded: (t) => {
            e((e) =>
                null == e.recentlyAddedFavoriteTimestampMsByKey[t]
                    ? {}
                    : {
                          recentlyAddedFavoriteTimestampMsByKey: a(l({}, e.recentlyAddedFavoriteTimestampMsByKey), {
                              [t]: void 0,
                          }),
                      },
            );
        },
    }));

function u(e) {
    return o.useState((t) => {
        var n;
        return null != (n = t.recentlyAddedFavoriteTimestampMsByKey[e]) ? n : null;
    });
}
let c = o;
