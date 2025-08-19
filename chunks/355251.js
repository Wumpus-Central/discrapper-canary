n.d(t, { Z: () => c });
var r = n(951288),
    i = n(647438),
    l = n(907862),
    a = n(481060),
    o = n(921944),
    s = n(388032);
function c(e) {
    let { guildId: t, markAsDismissed: c, targetElementRef: u } = e,
        d = i.useCallback(() => {
            c(o.L.TAKE_ACTION),
                (0, a.ZDy)(async () => {
                    let { default: e } = await Promise.all([n.e("15076"), n.e("39672")]).then(n.bind(n, 907941));
                    return (n) => {
                        var i, l;
                        return (0, r.jsx)(
                            e,
                            ((i = (function (e) {
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
                            })({}, n)),
                            (l = l = { guildId: t }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(l)).forEach(function (e) {
                                      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                                  }),
                            i),
                        );
                    };
                });
        }, [t, c]),
        p = i.useCallback(() => {
            c(o.L.USER_DISMISS);
        }, [c]);
    return (0, r.jsx)(l.J2, {
        targetElementRef: u,
        shouldShow: !0,
        title: s.intl.string(s.t["2l9beX"]),
        body: s.intl.string(s.t.gdqdND),
        graphic: {
            type: "image",
            src: n(297806),
            aspectRatio: "6/4",
        },
        size: "lg",
        caretConfig: {
            position: "top",
            align: "center",
        },
        actions: [
            {
                text: s.intl.string(s.t.RzWDqa),
                variant: "primary",
                onClick: d,
            },
            {
                text: s.intl.string(s.t.TulDPj),
                variant: "secondary",
                onClick: p,
            },
        ],
        onRequestClose: p,
    });
}
