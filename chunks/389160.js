n.d(t, { Z: () => o });
var r = n(663042),
    i = n(982183);
let l = {
        [i.KZ.UNREAD]: !0,
        [i.KZ.TODAY]: !0,
        [i.KZ.YESTERDAY]: !0,
        [i.KZ.OLDER]: !0,
    },
    a = {
        [i.KZ.UNREAD]: !0,
        [i.KZ.TODAY]: !1,
        [i.KZ.YESTERDAY]: !1,
        [i.KZ.OLDER]: !1,
    },
    o = (0, r.U)((e, t) => ({
        messageCategoryOpenStates: l,
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
                        (r = r = { [t]: !e.messageCategoryOpenStates[t] }),
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
            e({ messageCategoryOpenStates: t ? a : l });
        },
    }));
