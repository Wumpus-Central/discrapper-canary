n.d(t, {
    Be: () => u,
    aU: () => o,
    fO: () => c,
    vK: () => d,
});
var r = n(627968);
n(64700);
var l = n(397927),
    a = n(530912);

function i(e) {
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
        onRequestSent: m,
        customSendHandler: f,
    } = e;
    (0, a.pp)(t.channel_id, t.id, c),
        (0, l.mMO)(
            async () => {
                let { ForwardModal: e } = await Promise.all([
                    n.e("40215"),
                    n.e("96758"),
                    n.e("43622"),
                    n.e("60664"),
                ]).then(n.bind(n, 911269));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        s(i({}, n), {
                            message: t,
                            initialSelectedDestinations: u,
                            forwardOptions: d,
                            onRequestSent: m,
                            customSendHandler: f,
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
    (0, l.OoC)(o);
}

function d(e) {
    let { message: t, failedDestinations: a, forwardOptions: o } = e;
    (0, l.mMO)(async () => {
        let { ForwardFailedAlertModal: e } = await n.e("66139").then(n.bind(n, 181622));
        return (n) =>
            (0, r.jsx)(
                e,
                s(i({}, n), {
                    message: t,
                    failedDestinations: a,
                    forwardOptions: o,
                }),
            );
    });
}
