n.d(t, { Z: () => h }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(734610),
    o = n(442837),
    s = n(956097),
    l = n(960048),
    c = n(998054),
    u = n(5900),
    d = n(953865),
    f = n(60995),
    _ = n(607726);
let p = () => {
        let {
                installationStatus: e,
                setInstallationStatus: t,
                setConnectionStatus: n,
                finishSetup: r,
                getWarpInstallationStatus: a,
            } = (0, d.xf)(),
            { status: p } = (0, o.e7)([s.Z], () => s.Z.state, []),
            [h, m] = (0, i.useState)(0),
            { installedDiscordPrivateBrowsingPerk: g } = (0, o.e7)([_.Z], () => _.Z.getState(), []),
            [E, b] = (0, i.useState)(!1);
        return (
            (0, i.useEffect)(() => {
                E ||
                    (b(!0),
                    e !== u._n.INSTALLING &&
                        (0, c.Y)().then((e) =>
                            e === u._n.NOT_INSTALLED
                                ? void t(u._n.NOT_INSTALLED)
                                : e === u._n.EXISTING_INSTALLATION && g
                                  ? void t(u._n.INSTALLING)
                                  : void t(e),
                        ));
            }, [t, g, E, e]),
            (0, i.useEffect)(() => {
                g && e === u._n.NOT_INSTALLED && (0, f._)(!1),
                    g && e === u._n.EXISTING_INSTALLATION && t(u._n.INSTALLED);
            }, [g, e, t]),
            (0, i.useEffect)(() => {
                if (e !== u._n.INSTALLED) return;
                let n = setInterval(async () => {
                    (await a()) === u._n.NOT_INSTALLED && t(u._n.NOT_INSTALLED);
                }, 1000);
                return () => clearInterval(n);
            }, [e, t, a]),
            (0, i.useEffect)(() => {
                if (![u._n.INSTALLED, u._n.EXISTING_INSTALLATION].includes(e)) return void n(u.Ij.DISCONNECTED);
                switch (p) {
                    case u.zb.CONNECTED:
                        n(u.Ij.CONNECTED);
                        break;
                    case u.zb.CONNECTING:
                        n(u.Ij.INITIALIZING);
                        break;
                    case u.zb.DISCONNECTED:
                        n(u.Ij.DISCONNECTED);
                }
            }, [p, e, n]),
            (0, i.useEffect)(() => {
                h > 10 && (t(u._n.ERROR), m(0));
            }, [h, t]),
            (0, i.useEffect)(() => {
                e === u._n.READY_FOR_LICENSE &&
                    r()
                        .then((e) => {
                            e && t(u._n.INSTALLED);
                        })
                        .catch((e) => {
                            l.Z.captureException(e, { tags: { source: "PRIVATE_BROWSING_PERK_LICENSE_FINISH_SETUP" } }),
                                t(u._n.ERROR);
                        });
            }, [e, t, r]),
            (0, i.useEffect)(() => {
                if (e !== u._n.INSTALLING) return;
                let n = setInterval(async () => {
                    let e = await a();
                    switch (e) {
                        case u._n.ERROR:
                            m((e) => e + 1);
                            return;
                        case u._n.NOT_INSTALLED:
                            return;
                        case u._n.EXISTING_INSTALLATION:
                            t(u._n.READY_FOR_LICENSE);
                            return;
                        default:
                            t(e);
                    }
                }, 1000);
                return () => {
                    clearInterval(n);
                };
            }, [e, t, a]),
            null
        );
    },
    h = () =>
        (0, r.jsx)(a.SV, {
            fallback: null,
            children: (0, r.jsx)(p, {}),
        });
