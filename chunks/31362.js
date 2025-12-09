r.d(t, { AgeVerificationRequiredSpeedbumpModal: () => s });
var n = r(54381);
r(473749);
var o = r(793030),
    i = r(168107),
    c = r(480916),
    l = r(388032),
    a = r(892744);
let s = (e) => {
    var t,
        r,
        { onStart: s, onClose: p } = e,
        b = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    (r = i[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            }
            return o;
        })(e, ["onStart", "onClose"]);
    return (0, n.jsx)(
        o.ExpressiveModal,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        }),
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })({}, b)),
        (r = r =
            {
                graphic: {
                    type: "image",
                    src: a.Z,
                },
                gradientColor: "blue",
                onClose: p,
                title: l.intl.string(l.t["/NNb28"]),
                subtitle: l.intl.string(l.t.ZRQFAu),
                actions: [
                    {
                        text: l.intl.string(l.t["5eO+L9"]),
                        onClick: s,
                        variant: "secondary",
                    },
                    {
                        text: l.intl.string(l.t["ElP6r+"]),
                        onClick: () => {
                            i.Z.showAgeVerificationGetStartedModal({ entryPoint: c.cU.START_STAGE });
                        },
                    },
                ],
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        t),
    );
};
