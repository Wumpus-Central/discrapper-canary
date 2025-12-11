n.d(e, { C: () => d });
var i = n(54381),
    l = n(473749),
    s = n(793030),
    r = n(5900),
    u = n(773275),
    a = n(388032),
    o = n(36385),
    c = n(291771);
let d = () => {
        let { isWeb: t, installationStatus: e } = (0, u.xf)(),
            n = (0, l.useMemo)(() => {
                if (t) return a.intl.string(o.default.KN6HOb);
                switch (e) {
                    case r._n.ERROR:
                        return a.intl.string(o.default.cjqyz7);
                    case r._n.INSTALLING_TIMEOUT:
                        return a.intl.string(o.default.an5PuY);
                    case r._n.NOT_INSTALLED:
                    case r._n.UNKNOWN:
                        return a.intl.string(o.default.KN6HOb);
                    case r._n.INSTALLING:
                        return a.intl.string(o.default.lYWqUK);
                    case r._n.WAITING_FOR_TERMS:
                    case r._n.READY_FOR_LICENSE:
                        return a.intl.string(o.default.NSVz3Y);
                    case r._n.EXISTING_INSTALLATION:
                        return a.intl.string(o.default.FgL0HB);
                    case r._n.ZERO_TRUST:
                        return a.intl.string(o.default["7zgDRR"]);
                    case r._n.INSTALLED:
                        return (0, i.jsx)(S, {});
                }
            }, [t, e]);
        return (0, i.jsx)(s.X6q, {
            variant: "heading-md/semibold",
            children: n,
        });
    },
    S = () => {
        switch ((0, u.xf)((t) => t.connectionStatus)) {
            case r.Ij.INITIALIZING:
                return (0, i.jsxs)("span", {
                    className: c.connectedStatus,
                    children: [
                        a.intl.string(o.default["00vkCU"]),
                        " ",
                        (0, i.jsx)("span", {
                            children: (0, i.jsx)(s.$jN, {
                                type: s.RAz.SPINNING_CIRCLE,
                                className: c.spinner,
                            }),
                        }),
                    ],
                });
            case r.Ij.CONNECTED:
                return a.intl.string(o.default.FBu3XJ);
            case r.Ij.DISCONNECTED:
                return a.intl.string(o.default["9V78nW"]);
            case r.Ij.ERROR:
                return a.intl.string(o.default.i4ZzK6);
        }
    };
