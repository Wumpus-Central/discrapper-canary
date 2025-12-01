n.d(e, { R: () => d });
var i = n(54381),
    r = n(473749),
    l = n(159691),
    u = n(323183),
    s = n(5900),
    a = n(773275),
    o = n(388032),
    c = n(163646);
let d = () => {
    let { isWeb: t, installationStatus: e, connectionStatus: n } = (0, a.xf)(),
        d = (0, r.useMemo)(() => {
            switch (n) {
                case s.Ij.CONNECTED:
                    return o.intl.format(c.default.EVQZqy, { helpdeskArticle: u.w });
                case s.Ij.DISCONNECTED:
                    return o.intl.format(c.default.zOCRv9, { helpdeskArticle: u.w });
                case s.Ij.ERROR:
                    return o.intl.format(c.default.e9MkUw, { helpdeskArticle: u.w });
                default:
                    return o.intl.format(c.default["Rr+ah3"], { helpdeskArticle: u.w });
            }
        }, [n]),
        E = (0, r.useMemo)(() => {
            if (t) return o.intl.format(c.default.z6v0w5, { helpdeskArticle: u.w });
            switch (e) {
                case s._n.ERROR:
                    return o.intl.format(c.default.vjIpaK, { helpdeskArticle: u.w });
                case s._n.INSTALLING:
                case s._n.READY_FOR_LICENSE:
                    return o.intl.format(c.default.ZLrDvb, { helpdeskArticle: u.w });
                case s._n.EXISTING_INSTALLATION:
                    return o.intl.format(c.default.gOBU3K, { helpdeskArticle: u.w });
                case s._n.ZERO_TRUST:
                    return o.intl.string(c.default.KVSUDs);
                case s._n.INSTALLED:
                    return d;
                case s._n.NOT_INSTALLED:
                case s._n.UNKNOWN:
                default:
                    return o.intl.format(c.default["Rr+ah3"], { helpdeskArticle: u.w });
            }
        }, [t, e, d]);
    return (0, i.jsx)(l.xvT, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: E,
    });
};
