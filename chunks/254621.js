n.d(t, { Z: () => b }), n(388685), n(415506), n(49124);
var r = n(54381),
    i = n(473749),
    a = n(734610),
    o = n(818710),
    s = n(442837),
    l = n(646834),
    c = n(626135),
    u = n(960048),
    d = n(998054),
    f = n(323183),
    p = n(5900),
    _ = n(60995),
    m = n(607726),
    h = n(773275),
    g = n(981631);
let E = () => {
        let {
                installationStatus: e,
                setInstallationStatus: t,
                setConnectionStatus: n,
                finishSetup: r,
                getWarpInstallationStatus: a,
                connect: o,
                installTimeout: E,
            } = (0, h.xf)(),
            { status: b } = (0, s.e7)([l.Z], () => l.Z.state, []),
            [y, O] = (0, i.useState)(0),
            { installedDiscordPrivateBrowsingPerk: v } = (0, s.e7)([m.Z], () => m.Z.getState(), []),
            [S, I] = (0, i.useState)(!1),
            [T, C] = (0, i.useState)(null);
        return (
            (0, i.useEffect)(() => {
                S ||
                    (I(!0),
                    e !== p._n.INSTALLING &&
                        (0, d.Y)().then((e) =>
                            e === p._n.NOT_INSTALLED
                                ? void t(p._n.NOT_INSTALLED)
                                : e === p._n.EXISTING_INSTALLATION && v
                                  ? void t(p._n.INSTALLING)
                                  : void t(e),
                        ));
            }, [t, v, S, e]),
            (0, i.useEffect)(() => {
                v && e === p._n.NOT_INSTALLED && (0, _._)(!1),
                    v && e === p._n.EXISTING_INSTALLATION && t(p._n.INSTALLED);
            }, [v, e, t]),
            (0, i.useEffect)(() => {
                if (![p._n.INSTALLED, p._n.WAITING_FOR_TERMS].includes(e)) return;
                let n = setInterval(async () => {
                    (await a()) === p._n.NOT_INSTALLED && t(p._n.NOT_INSTALLED);
                }, 1000);
                return () => clearInterval(n);
            }, [e, t, a]),
            (0, i.useEffect)(() => {
                if (![p._n.INSTALLED, p._n.EXISTING_INSTALLATION].includes(e)) return void n(p.Ij.DISCONNECTED);
                switch (b) {
                    case p.zb.CONNECTED:
                        n(p.Ij.CONNECTED);
                        break;
                    case p.zb.CONNECTING:
                        n(p.Ij.INITIALIZING);
                        break;
                    case p.zb.DISCONNECTED:
                        n(p.Ij.DISCONNECTED);
                        break;
                    case p.zb.UNABLE:
                        I(!1);
                }
            }, [b, e, n]),
            (0, i.useEffect)(() => {
                y > 10 && (t(p._n.ERROR), O(0));
            }, [y, t]),
            (0, i.useEffect)(() => {
                e === p._n.READY_FOR_LICENSE &&
                    r()
                        .then((e) => {
                            e && t(p._n.INSTALLED), o();
                        })
                        .catch((e) => {
                            u.Z.captureException(e, {
                                tags: { source: f.D.PRIVATE_BROWSING_PERK_LICENSE_FINISH_SETUP },
                            }),
                                c.default.track(g.rMx.PREMIUM_FEATURE_ERROR, {
                                    error_message: e instanceof Error ? e.message : JSON.stringify(e),
                                    error_source: f.D.PRIVATE_BROWSING_PERK_LICENSE_FINISH_SETUP,
                                }),
                                t(p._n.ERROR);
                        });
            }, [e, t, r, o]),
            (0, i.useEffect)(() => {
                if (![p._n.INSTALLING, p._n.WAITING_FOR_TERMS].includes(e)) return void C(null);
                if ((null == T && C(Date.now()), null != T)) {
                    let e = T + E - Date.now();
                    if (e <= 0) return void t(p._n.INSTALLING_TIMEOUT);
                    let n = setTimeout(() => {
                        t(p._n.INSTALLING_TIMEOUT);
                    }, e);
                    return () => clearTimeout(n);
                }
            }, [e, T, C, t, E]),
            (0, i.useEffect)(() => {
                if (![p._n.INSTALLING, p._n.WAITING_FOR_TERMS, p._n.INSTALLING_TIMEOUT].includes(e)) return;
                let n = setInterval(async () => {
                    let n = await a();
                    switch (n) {
                        case p._n.ERROR:
                            O((e) => e + 1);
                            return;
                        case p._n.NOT_INSTALLED:
                            [p._n.NOT_INSTALLED, p._n.INSTALLING].includes(e) || t(p._n.NOT_INSTALLED);
                            return;
                        case p._n.EXISTING_INSTALLATION:
                            t(p._n.READY_FOR_LICENSE);
                            return;
                        case p._n.WAITING_FOR_TERMS:
                        case p._n.INSTALLING:
                            if (e === p._n.INSTALLING_TIMEOUT) return;
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
    b = () =>
        (0, o.nI)()
            ? (0, r.jsx)(a.SV, {
                  fallback: null,
                  children: (0, r.jsx)(E, {}),
              })
            : null;
