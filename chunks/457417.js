n.d(t, {
    E3: () => f,
    KH: () => p,
    Vw: () => _,
    dJ: () => u,
});
var r = n(64700),
    i = n(870844),
    a = n(353640);
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
let u = "custom-themes-share-modal",
    d = {
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
    f = () =>
        (0, i.y)()((e, t) =>
            c(o({}, d), {
                canSend: () => !t().sending && t().selectedDestinations.length > 0,
                updateSearchText: (t) => e({ searchText: t }),
                updateSelectShareDestinations: (t) => e({ selectedDestinations: t }),
                updateMessage: (t) => e({ message: t }),
                updateChannel: (t) => e({ channel: t }),
                updateSending: (t) => e({ sending: t }),
                updateMessageText: (t) => e({ messageText: t }),
                setSend: (t) => e({ send: t }),
            }),
        ),
    p = (0, r.createContext)(null),
    _ = () => (0, a.P)((0, r.useContext)(p));
