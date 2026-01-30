n.d(t, {
    Be: () => u,
    aU: () => o,
    fO: () => c,
    vK: () => d,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(530912);

function a(e) {
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
}

function s(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let o = "forward-modal";

function c(e) {
    let {
        message: t,
        source: c,
        initialSelectedDestinations: u = [],
        forwardOptions: d,
        onRequestSent: p,
        customSendHandler: m,
    } = e;
    (0, l.pp)(t.channel_id, t.id, c),
        (0, i.mMO)(
            async () => {
                let { ForwardModal: e } = await Promise.all([n.e("96758"), n.e("43622"), n.e("12539")]).then(
                    n.bind(n, 911269),
                );
                return (n) =>
                    (0, r.jsx)(
                        e,
                        s(a({}, n), {
                            message: t,
                            initialSelectedDestinations: u,
                            forwardOptions: d,
                            onRequestSent: p,
                            customSendHandler: m,
                            source: c,
                        }),
                    );
            },
            {
                modalKey: o,
            },
        );
}

function u() {
    (0, i.OoC)(o);
}

function d(e) {
    let { message: t, failedDestinations: l, forwardOptions: o } = e;
    (0, i.mMO)(async () => {
        let { ForwardFailedAlertModal: e } = await n.e("66139").then(n.bind(n, 181622));
        return (n) =>
            (0, r.jsx)(
                e,
                s(a({}, n), {
                    message: t,
                    failedDestinations: l,
                    forwardOptions: o,
                }),
            );
    });
}
