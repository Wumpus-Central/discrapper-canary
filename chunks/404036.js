n.d(t, {
    A: () => u,
});
var r = n(627968),
    i = n(397927);

function a(e, t, n) {
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

function s(e) {
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
                a(e, t, n[t]);
            });
    }
    return e;
}

function o(e, t) {
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

function l(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : o(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let c = (e) => "gift-option-select-modal-".concat(e.id);

function u(e) {
    let {
        giftRecipient: t,
        onClose: a,
        analyticsLocations: o,
        analyticsLocation: u,
        analyticsObject: d,
        giftMessage: f,
    } = e;
    return (0, i.mMO)(
        async () => {
            let { default: e } = await Promise.all([n.e("29716"), n.e("13696"), n.e("55926")]).then(n.bind(n, 653813));
            return (n) =>
                (0, r.jsx)(
                    e,
                    l(s({}, n), {
                        giftRecipient: t,
                        analyticsLocations: o,
                        analyticsLocation: u,
                        analyticsObject: d,
                        giftMessage: f,
                    }),
                );
        },
        {
            modalKey: c(t),
            onCloseCallback: a,
        },
    );
}
