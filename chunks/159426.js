n.d(t, { m: () => s });
var l = n(600975);
function r(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
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
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
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
    s = (0, l.C)({
        kind: "guild",
        id: "2025-08_request_to_stream",
        label: "Request to Stream",
        defaultConfig: a,
        treatments: [
            {
                id: 1,
                label: "VC Status Icons",
                config: i(r({}, a), { enableVCStatusIcons: !0 }),
            },
            {
                id: 2,
                label: "Request to Stream without Overlay Notification",
                config: i(r({}, a), {
                    enableVCStatusIcons: !0,
                    enableRequestToStream: !0,
                    enableOpenTIVForPing: !0,
                }),
            },
            {
                id: 3,
                label: "Request to Stream with Overlay Notification",
                config: i(r({}, a), {
                    enableVCStatusIcons: !0,
                    enableRequestToStream: !0,
                    enableOpenTIVForPing: !0,
                    enableRequestToStreamOverlayNotification: !0,
                }),
            },
        ],
    });
