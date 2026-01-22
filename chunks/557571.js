n.d(t, {
    YQ: () => g,
    lV: () => O,
    xq: () => b,
    y0: () => E,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(870844),
    s = n(353640),
    o = n(574381),
    l = n(689194),
    c = n(858013),
    u = n(602450),
    d = n(411683);
function f(e, t, n) {
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
function p(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
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
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let m = {
        perkAvailableToUser: !1,
        installationStatus: u.Lk.UNKNOWN,
        connectionStatus: u.l7.INITIALIZING,
        isWeb: (0, o.HZ)(),
        isSupportedPrivateBrowsingPerkPlatform: (0, o.uF)() || (0, o.cX)(),
        installTimeout: 600000,
    },
    g = (e) =>
        (0, a.y)()((t) =>
            p(
                h(p({}, m), {
                    setRegistration: (e) => t((t) => h(p({}, t), { registration: e })),
                    setInstallationStatus: (e) => t((t) => h(p({}, t), { installationStatus: e })),
                    setConnectionStatus: (e) => t((t) => h(p({}, t), { connectionStatus: e })),
                    setPerkAvailableToUser: (e) => t(() => ({ perkAvailableToUser: e })),
                    setIsWeb: (e) => t(() => ({ isWeb: e })),
                    setIsSupportedPrivateBrowsingPerkPlatform: (e) =>
                        t(() => ({ isSupportedPrivateBrowsingPerkPlatform: e })),
                    getWarpInstallationStatus: c.t,
                    finishSetup: async () => await l.A.finishSetup(),
                    connect: async () => !1,
                    disconnect: async () => !1,
                    install: async () => {},
                    uninstall: async () => {},
                    setConnect: (e) => t(() => ({ connect: e })),
                    setDisconnect: (e) => t(() => ({ disconnect: e })),
                    setInstall: (e) => t(() => ({ install: e })),
                    setUninstall: (e) => t(() => ({ uninstall: e })),
                    doInstall: !1,
                    setDoInstall: (e) => t(() => ({ doInstall: e })),
                    setGetWarpInstallationStatus: (e) => t(() => ({ getWarpInstallationStatus: e })),
                }),
                e,
            ),
        ),
    E = i.createContext(null),
    b = (e) => {
        let { children: t } = e,
            n = y();
        return (0, r.jsx)(E.Provider, {
            value: n,
            children: t,
        });
    },
    y = () => {
        let e = (0, d.L)(),
            [t] = (0, i.useState)(() =>
                g({
                    install: c.u,
                    connect: async () => await l.A.connect(),
                    disconnect: async () => await l.A.disconnect(),
                    perkAvailableToUser: e,
                }),
            ),
            n = (0, s.P)(t, (e) => e.setPerkAvailableToUser);
        return (
            (0, i.useEffect)(() => {
                n(e);
            }, [e, n]),
            t
        );
    };
function O(e) {
    let t = (0, i.useContext)(E),
        n = y(),
        r = null != t ? t : n;
    return null != e ? (0, s.P)(r, e) : (0, s.P)(r);
}
