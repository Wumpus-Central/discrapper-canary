n.d(t, { Z: () => l });
var r = n(381814),
    i = n(982183);
let l = (0, r.U)((e, t) => ({
    messageGroupOpenStates: {
        [i.dm.UNREAD]: !0,
        [i.dm.TODAY]: !0,
        [i.dm.YESTERDAY]: !0,
        [i.dm.OLDER]: !0
    },
    getOpenState: (e) => t().messageGroupOpenStates[e],
    toggleOpenState: (t) => {
        e((e) => {
            var n, r;
            return {
                messageGroupOpenStates:
                    ((n = (function (e) {
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
                    })({}, e.messageGroupOpenStates)),
                    (r = r = { [t]: !e.messageGroupOpenStates[t] }),
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
                    n)
            };
        });
    }
}));
