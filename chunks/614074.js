n.d(t, { C: () => d });
var r = n(54381),
    i = n(473749),
    a = n(793030),
    o = n(5900),
    s = n(953865),
    l = n(388032),
    c = n(845259),
    u = n(291771);
let d = () => {
        let { isWeb: e, installationStatus: t } = (0, s.xf)(),
            n = (0, i.useMemo)(() => {
                if (e) return l.intl.string(c.default.KN6HOb);
                switch (t) {
                    case o._n.ERROR:
                        return l.intl.string(c.default.cjqyz7);
                    case o._n.NOT_INSTALLED:
                    case o._n.UNKNOWN:
                        return l.intl.string(c.default.KN6HOb);
                    case o._n.INSTALLING:
                    case o._n.READY_FOR_LICENSE:
                        return l.intl.string(c.default.lYWqUK);
                    case o._n.EXISTING_INSTALLATION:
                        return l.intl.string(c.default.FgL0HB);
                    case o._n.ZERO_TRUST:
                        return l.intl.string(c.default["7zgDRR"]);
                    case o._n.INSTALLED:
                        return (0, r.jsx)(f, {});
                }
            }, [e, t]);
        return (0, r.jsx)(a.X6q, {
            variant: "heading-md/semibold",
            children: n,
        });
    },
    f = () => {
        switch ((0, s.xf)((e) => e.connectionStatus)) {
            case o.Ij.INITIALIZING:
                return (0, r.jsxs)("span", {
                    className: u.connectedStatus,
                    children: [
                        l.intl.string(c.default["00vkCU"]),
                        " ",
                        (0, r.jsx)("span", {
                            children: (0, r.jsx)(a.$jN, {
                                type: a.RAz.SPINNING_CIRCLE,
                                className: u.spinner,
                            }),
                        }),
                    ],
                });
            case o.Ij.CONNECTED:
                return l.intl.string(c.default.FBu3XJ);
            case o.Ij.DISCONNECTED:
                return l.intl.string(c.default["9V78nW"]);
            case o.Ij.ERROR:
                return l.intl.string(c.default.i4ZzK6);
        }
    };
