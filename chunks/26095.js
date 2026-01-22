n.d(t, {
    A: () => r,
});
var i = n(627968);
n(64700);
var a = n(397927),
    l = n(73153);
let r = {
    open(e) {
        l.h.dispatch({
            type: "SAFETY_HUB_APPEAL_OPEN",
            classificationId: e,
        }),
            (0, a.mMO)(async () => {
                let { default: t } = await Promise.all([n.e("74327"), n.e("5482")]).then(n.bind(n, 355690));
                return (n) =>
                    (0, i.jsx)(
                        t,
                        (function (e) {
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
                        })(
                            {
                                classificationId: e,
                            },
                            n,
                        ),
                    );
            });
    },
    close() {
        l.h.dispatch({
            type: "SAFETY_HUB_APPEAL_CLOSE",
        });
    },
};
