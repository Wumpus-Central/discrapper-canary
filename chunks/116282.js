n.d(e, { R: () => S });
var i = n(54381),
    l = n(473749),
    s = n(159691),
    u = n(323183),
    r = n(5900),
    a = n(773275),
    o = n(388032),
    c = n(36385);
let S = () => {
    let { isWeb: t, installationStatus: e, connectionStatus: n } = (0, a.xf)(),
        S = (0, l.useMemo)(() => {
            switch (n) {
                case r.Ij.CONNECTED:
                    return o.intl.format(c.default.EVQZqy, { helpdeskArticle: u.w });
                case r.Ij.DISCONNECTED:
                    return o.intl.format(c.default.zOCRv9, { helpdeskArticle: u.w });
                case r.Ij.ERROR:
                    return o.intl.format(c.default.e9MkUw, { helpdeskArticle: u.w });
                default:
                    return o.intl.format(c.default["Rr+ah3"], { helpdeskArticle: u.w });
            }
        }, [n]),
        d = (0, l.useMemo)(() => {
            if (t) return o.intl.format(c.default.z6v0w5, { helpdeskArticle: u.w });
            switch (e) {
                case r._n.ERROR:
                    return o.intl.format(c.default.vjIpaK, { helpdeskArticle: u.w });
                case r._n.INSTALLING_TIMEOUT:
                    return o.intl.format(c.default.QWyvkt, { helpdeskArticle: u.w });
                case r._n.INSTALLING:
                    return o.intl.format(c.default.ZLrDvb, { helpdeskArticle: u.w });
                case r._n.WAITING_FOR_TERMS:
                case r._n.READY_FOR_LICENSE:
                    return o.intl.format(c.default.rX9Z5g, { helpdeskArticle: u.w });
                case r._n.EXISTING_INSTALLATION:
                    return o.intl.format(c.default.gOBU3K, { helpdeskArticle: u.w });
                case r._n.ZERO_TRUST:
                    return o.intl.string(c.default.KVSUDs);
                case r._n.INSTALLED:
                    return S;
                case r._n.NOT_INSTALLED:
                case r._n.UNKNOWN:
                default:
                    return o.intl.format(c.default["Rr+ah3"], { helpdeskArticle: u.w });
            }
        }, [t, e, S]);
    return (0, i.jsx)(s.xvT, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: d,
    });
};
