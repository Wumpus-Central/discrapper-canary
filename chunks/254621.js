n.d(t, { Z: () => m }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(734610),
    o = n(818710),
    s = n(442837),
    l = n(956097),
    c = n(960048),
    u = n(998054),
    d = n(5900),
    f = n(953865),
    _ = n(60995),
    p = n(607726);
let h = () => {
        let {
                installationStatus: e,
                setInstallationStatus: t,
                setConnectionStatus: n,
                finishSetup: r,
                getWarpInstallationStatus: a,
            } = (0, f.xf)(),
            { status: o } = (0, s.e7)([l.Z], () => l.Z.state, []),
            [h, m] = (0, i.useState)(0),
            { installedDiscordPrivateBrowsingPerk: g } = (0, s.e7)([p.Z], () => p.Z.getState(), []),
            [E, b] = (0, i.useState)(!1);
        return (
            (0, i.useEffect)(() => {
                E ||
                    (b(!0),
                    e !== d._n.INSTALLING &&
                        (0, u.Y)().then((e) =>
                            e === d._n.NOT_INSTALLED
                                ? void t(d._n.NOT_INSTALLED)
                                : e === d._n.EXISTING_INSTALLATION && g
                                  ? void t(d._n.INSTALLING)
                                  : void t(e),
                        ));
            }, [t, g, E, e]),
            (0, i.useEffect)(() => {
                g && e === d._n.NOT_INSTALLED && (0, _._)(!1),
                    g && e === d._n.EXISTING_INSTALLATION && t(d._n.INSTALLED);
            }, [g, e, t]),
            (0, i.useEffect)(() => {
                if (e !== d._n.INSTALLED) return;
                let n = setInterval(async () => {
                    (await a()) === d._n.NOT_INSTALLED && t(d._n.NOT_INSTALLED);
                }, 1000);
                return () => clearInterval(n);
            }, [e, t, a]),
            (0, i.useEffect)(() => {
                if (![d._n.INSTALLED, d._n.EXISTING_INSTALLATION].includes(e)) return void n(d.Ij.DISCONNECTED);
                switch (o) {
                    case d.zb.CONNECTED:
                        n(d.Ij.CONNECTED);
                        break;
                    case d.zb.CONNECTING:
                        n(d.Ij.INITIALIZING);
                        break;
                    case d.zb.DISCONNECTED:
                        n(d.Ij.DISCONNECTED);
                }
            }, [o, e, n]),
            (0, i.useEffect)(() => {
                h > 10 && (t(d._n.ERROR), m(0));
            }, [h, t]),
            (0, i.useEffect)(() => {
                e === d._n.READY_FOR_LICENSE &&
                    r()
                        .then((e) => {
                            e && t(d._n.INSTALLED);
                        })
                        .catch((e) => {
                            c.Z.captureException(e, { tags: { source: "PRIVATE_BROWSING_PERK_LICENSE_FINISH_SETUP" } }),
                                t(d._n.ERROR);
                        });
            }, [e, t, r]),
            (0, i.useEffect)(() => {
                if (e !== d._n.INSTALLING) return;
                let n = setInterval(async () => {
                    let e = await a();
                    switch (e) {
                        case d._n.ERROR:
                            m((e) => e + 1);
                            return;
                        case d._n.NOT_INSTALLED:
                            return;
                        case d._n.EXISTING_INSTALLATION:
                            t(d._n.READY_FOR_LICENSE);
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
    m = () =>
        (0, o.nI)()
            ? (0, r.jsx)(a.SV, {
                  fallback: null,
                  children: (0, r.jsx)(h, {}),
              })
            : null;
