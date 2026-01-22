n.d(t, {
    A: () => s,
});
var r = n(353640),
    l = n(849077);
let i = {
        [l.Ur.UNREAD]: !0,
        [l.Ur.TODAY]: !0,
        [l.Ur.YESTERDAY]: !0,
        [l.Ur.OLDER]: !0,
    },
    a = {
        [l.Ur.UNREAD]: !0,
        [l.Ur.TODAY]: !1,
        [l.Ur.YESTERDAY]: !1,
        [l.Ur.OLDER]: !1,
    },
    s = (0, r.v)((e, t) => ({
        messageCategoryOpenStates: i,
        getOpenState: (e) => t().messageCategoryOpenStates[e],
        toggleOpenState: (t) => {
            e((e) => {
                var n, r;
                return {
                    messageCategoryOpenStates:
                        ((n = (function (e) {
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
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })({}, e.messageCategoryOpenStates)),
                        (r = r =
                            {
                                [t]: !e.messageCategoryOpenStates[t],
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(r)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                              }),
                        n),
                };
            });
        },
        setOpenStateFromUnreads: (t) => {
            e({
                messageCategoryOpenStates: t ? a : i,
            });
        },
    }));
