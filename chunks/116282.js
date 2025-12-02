n.d(e, { R: () => d });
var i = n(54381),
    r = n(473749),
    l = n(159691),
    s = n(323183),
    u = n(5900),
    a = n(773275),
    o = n(388032),
    c = n(163646);
let d = () => {
    let { isWeb: t, installationStatus: e, connectionStatus: n } = (0, a.xf)(),
        d = (0, r.useMemo)(() => {
            switch (n) {
                case u.Ij.CONNECTED:
                    return o.intl.format(c.default.EVQZqy, { helpdeskArticle: s.w });
                case u.Ij.DISCONNECTED:
                    return o.intl.format(c.default.zOCRv9, { helpdeskArticle: s.w });
                case u.Ij.ERROR:
                    return o.intl.format(c.default.e9MkUw, { helpdeskArticle: s.w });
                default:
                    return o.intl.format(c.default["Rr+ah3"], { helpdeskArticle: s.w });
            }
        }, [n]),
        E = (0, r.useMemo)(() => {
            if (t) return o.intl.format(c.default.z6v0w5, { helpdeskArticle: s.w });
            switch (e) {
                case u._n.ERROR:
                    return o.intl.format(c.default.vjIpaK, { helpdeskArticle: s.w });
                case u._n.INSTALLING:
                case u._n.READY_FOR_LICENSE:
                    return o.intl.format(c.default.ZLrDvb, { helpdeskArticle: s.w });
                case u._n.EXISTING_INSTALLATION:
                    return o.intl.format(c.default.gOBU3K, { helpdeskArticle: s.w });
                case u._n.ZERO_TRUST:
                    return o.intl.string(c.default.KVSUDs);
                case u._n.INSTALLED:
                    return d;
                case u._n.NOT_INSTALLED:
                case u._n.UNKNOWN:
                default:
                    return o.intl.format(c.default["Rr+ah3"], { helpdeskArticle: s.w });
            }
        }, [t, e, d]);
    return (0, i.jsx)(l.xvT, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: E,
    });
};
