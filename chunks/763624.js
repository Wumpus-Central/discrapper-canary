n.d(t, { A: () => o });
var r = n(818083);
function l(e) {
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
function i(e, t) {
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
let a = {
        enableRequestToStream: !1,
        enableVCStatusIcons: !1,
        enableOpenTIVForPing: !1,
        enableRequestToStreamOverlayNotification: !1,
    },
    o = (0, r.B)({
        kind: "guild",
        id: "2025-08_request_to_stream",
        label: "Request to Stream",
        defaultConfig: a,
        treatments: [
            {
                id: 1,
                label: "VC Status Icons",
                config: i(l({}, a), { enableVCStatusIcons: !0 }),
            },
            {
                id: 2,
                label: "Request to Stream without Overlay Notification",
                config: i(l({}, a), {
                    enableVCStatusIcons: !0,
                    enableRequestToStream: !0,
                    enableOpenTIVForPing: !0,
                }),
            },
            {
                id: 3,
                label: "Request to Stream with Overlay Notification",
                config: i(l({}, a), {
                    enableVCStatusIcons: !0,
                    enableRequestToStream: !0,
                    enableOpenTIVForPing: !0,
                    enableRequestToStreamOverlayNotification: !0,
                }),
            },
        ],
    });
