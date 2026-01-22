n.d(t, {
    n: () => u,
});
var r = n(627968),
    i = n(397927),
    a = n(985018);

function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function o(e) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}

function l(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function u(e) {
    if (null == e) return null;
    let t = () =>
        (0, i.mMO)(async () => {
            let { default: t } = await Promise.all([n.e("27495"), n.e("79692")]).then(n.bind(n, 651930));
            return (n) =>
                (0, r.jsx)(
                    t,
                    c(o({}, n), {
                        detectedActivity: {
                            application_id: e,
                            name: "",
                        },
                    }),
                );
        });
    return (0, r.jsx)(i.Drp, {
        id: "game-profile-something-wrong",
        label: a.intl.string(a.t.qP2cXd),
        action: t,
    });
}
