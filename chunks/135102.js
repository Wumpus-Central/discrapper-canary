n.d(t, {
    C$: () => u,
    tj: () => l,
});
var r = n(879690);
function i(e, t, n) {
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
                i(e, t, n[t]);
            });
    }
    return e;
}
function a(e, t) {
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
function s(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : a(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let l = "custom-themes-share-modal",
    c = {
        searchText: "",
        selectedDestinations: [],
        message: {},
        messageText: "",
        channel: {},
        maxDestinations: 5,
        send: async () => {},
        sending: !1,
        canSend: () => !1,
    },
    u = (0, r.U)((e, t) =>
        s(o({}, c), {
            canSend: () => !t().sending && t().selectedDestinations.length > 0,
            updateSearchText: (t) => e({ searchText: t }),
            updateSelectShareDestinations: (t) => e({ selectedDestinations: t }),
            updateMessage: (t) => e({ message: t }),
            updateChannel: (t) => e({ channel: t }),
            updateSending: (t) => e({ sending: t }),
            updateMessageText: (t) => e({ messageText: t }),
            setSend: (t) => e({ send: t }),
        }),
    );
