"use strict";
n.d(t, { YQ: () => f, lV: () => g, xq: () => h, y0: () => p });
var r = n(627968),
    i = n(64700),
    a = n(870844),
    s = n(353640),
    o = n(574381),
    l = n(689194),
    u = n(858013),
    c = n(602450),
    d = n(411683);
let _ = {
        perkAvailableToUser: !1,
        installationStatus: c.Lk.UNKNOWN,
        connectionStatus: c.l7.INITIALIZING,
        isWeb: (0, o.HZ)(),
        isSupportedPrivateBrowsingPerkPlatform: (0, o.uF)() || (0, o.cX)(),
        installTimeout: 6e5,
    },
    f = (e) =>
        (0, a.y)()((t) => ({
            ..._,
            setRegistration: (e) => t((t) => ({ ...t, registration: e })),
            setInstallationStatus: (e) => t((t) => ({ ...t, installationStatus: e })),
            setConnectionStatus: (e) => t((t) => ({ ...t, connectionStatus: e })),
            setPerkAvailableToUser: (e) => t(() => ({ perkAvailableToUser: e })),
            setIsWeb: (e) => t(() => ({ isWeb: e })),
            setIsSupportedPrivateBrowsingPerkPlatform: (e) => t(() => ({ isSupportedPrivateBrowsingPerkPlatform: e })),
            getWarpInstallationStatus: u.t,
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
            ...e,
        })),
    p = i.createContext(null),
    h = (e) => {
        let { children: t } = e,
            n = m();
        return (0, r.jsx)(p.Provider, { value: n, children: t });
    },
    m = () => {
        let e = (0, d.L)(),
            [t] = (0, i.useState)(() =>
                f({
                    install: u.u,
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
function g(e) {
    let t = (0, i.useContext)(p),
        n = m(),
        r = t ?? n;
    return null != e ? (0, s.P)(r, e) : (0, s.P)(r);
}
