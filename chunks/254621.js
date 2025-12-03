n.d(t, { Z: () => h }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(734610),
    o = n(818710),
    s = n(442837),
    l = n(646834),
    c = n(960048),
    u = n(998054),
    d = n(5900),
    f = n(60995),
    p = n(607726),
    _ = n(773275);
let m = () => {
        let {
                installationStatus: e,
                setInstallationStatus: t,
                setConnectionStatus: n,
                finishSetup: r,
                getWarpInstallationStatus: a,
                connect: o,
                installTimeout: m,
            } = (0, _.xf)(),
            { status: h } = (0, s.e7)([l.Z], () => l.Z.state, []),
            [g, E] = (0, i.useState)(0),
            { installedDiscordPrivateBrowsingPerk: b } = (0, s.e7)([p.Z], () => p.Z.getState(), []),
            [y, O] = (0, i.useState)(!1),
            [v, S] = (0, i.useState)(null);
        return (
            (0, i.useEffect)(() => {
                y ||
                    (O(!0),
                    e !== d._n.INSTALLING &&
                        (0, u.Y)().then((e) =>
                            e === d._n.NOT_INSTALLED
                                ? void t(d._n.NOT_INSTALLED)
                                : e === d._n.EXISTING_INSTALLATION && b
                                  ? void t(d._n.INSTALLING)
                                  : void t(e),
                        ));
            }, [t, b, y, e]),
            (0, i.useEffect)(() => {
                b && e === d._n.NOT_INSTALLED && (0, f._)(!1),
                    b && e === d._n.EXISTING_INSTALLATION && t(d._n.INSTALLED);
            }, [b, e, t]),
            (0, i.useEffect)(() => {
                if (![d._n.INSTALLED, d._n.WAITING_FOR_TERMS].includes(e)) return;
                let n = setInterval(async () => {
                    (await a()) === d._n.NOT_INSTALLED && t(d._n.NOT_INSTALLED);
                }, 1000);
                return () => clearInterval(n);
            }, [e, t, a]),
            (0, i.useEffect)(() => {
                if (![d._n.INSTALLED, d._n.EXISTING_INSTALLATION].includes(e)) return void n(d.Ij.DISCONNECTED);
                switch (h) {
                    case d.zb.CONNECTED:
                        n(d.Ij.CONNECTED);
                        break;
                    case d.zb.CONNECTING:
                        n(d.Ij.INITIALIZING);
                        break;
                    case d.zb.DISCONNECTED:
                        n(d.Ij.DISCONNECTED);
                        break;
                    case d.zb.UNABLE:
                        O(!1);
                }
            }, [h, e, n]),
            (0, i.useEffect)(() => {
                g > 10 && (t(d._n.ERROR), E(0));
            }, [g, t]),
            (0, i.useEffect)(() => {
                e === d._n.READY_FOR_LICENSE &&
                    r()
                        .then((e) => {
                            e && t(d._n.INSTALLED), o();
                        })
                        .catch((e) => {
                            c.Z.captureException(e, { tags: { source: "PRIVATE_BROWSING_PERK_LICENSE_FINISH_SETUP" } }),
                                t(d._n.ERROR);
                        });
            }, [e, t, r, o]),
            (0, i.useEffect)(() => {
                if (![d._n.INSTALLING, d._n.WAITING_FOR_TERMS].includes(e)) return void S(null);
                if ((null == v && S(Date.now()), null != v)) {
                    let e = v + m - Date.now();
                    if (e <= 0) return void t(d._n.INSTALLING_TIMEOUT);
                    let n = setTimeout(() => {
                        t(d._n.INSTALLING_TIMEOUT);
                    }, e);
                    return () => clearTimeout(n);
                }
            }, [e, v, S, t, m]),
            (0, i.useEffect)(() => {
                if (![d._n.INSTALLING, d._n.WAITING_FOR_TERMS, d._n.INSTALLING_TIMEOUT].includes(e)) return;
                let n = setInterval(async () => {
                    let n = await a();
                    switch (n) {
                        case d._n.ERROR:
                            E((e) => e + 1);
                            return;
                        case d._n.NOT_INSTALLED:
                            [d._n.NOT_INSTALLED, d._n.INSTALLING].includes(e) || t(d._n.NOT_INSTALLED);
                            return;
                        case d._n.EXISTING_INSTALLATION:
                            t(d._n.READY_FOR_LICENSE);
                            return;
                        case d._n.WAITING_FOR_TERMS:
                        case d._n.INSTALLING:
                            if (e === d._n.INSTALLING_TIMEOUT) return;
                            t(n);
                            break;
                        default:
                            t(n);
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
        (0, o.nI)()
            ? (0, r.jsx)(a.SV, {
                  fallback: null,
                  children: (0, r.jsx)(m, {}),
              })
            : null;
