n.d(e, { C: () => d });
var i = n(54381),
    r = n(473749),
    l = n(793030),
    u = n(5900),
    s = n(773275),
    a = n(388032),
    o = n(163646),
    c = n(291771);
let d = () => {
        let { isWeb: t, installationStatus: e } = (0, s.xf)(),
            n = (0, r.useMemo)(() => {
                if (t) return a.intl.string(o.default.KN6HOb);
                switch (e) {
                    case u._n.ERROR:
                        return a.intl.string(o.default.cjqyz7);
                    case u._n.NOT_INSTALLED:
                    case u._n.UNKNOWN:
                        return a.intl.string(o.default.KN6HOb);
                    case u._n.INSTALLING:
                    case u._n.READY_FOR_LICENSE:
                        return a.intl.string(o.default.lYWqUK);
                    case u._n.EXISTING_INSTALLATION:
                        return a.intl.string(o.default.FgL0HB);
                    case u._n.ZERO_TRUST:
                        return a.intl.string(o.default["7zgDRR"]);
                    case u._n.INSTALLED:
                        return (0, i.jsx)(E, {});
                }
            }, [t, e]);
        return (0, i.jsx)(l.X6q, {
            variant: "heading-md/semibold",
            children: n,
        });
    },
    E = () => {
        switch ((0, s.xf)((t) => t.connectionStatus)) {
            case u.Ij.INITIALIZING:
                return (0, i.jsxs)("span", {
                    className: c.connectedStatus,
                    children: [
                        a.intl.string(o.default["00vkCU"]),
                        " ",
                        (0, i.jsx)("span", {
                            children: (0, i.jsx)(l.$jN, {
                                type: l.RAz.SPINNING_CIRCLE,
                                className: c.spinner,
                            }),
                        }),
                    ],
                });
            case u.Ij.CONNECTED:
                return a.intl.string(o.default.FBu3XJ);
            case u.Ij.DISCONNECTED:
                return a.intl.string(o.default["9V78nW"]);
            case u.Ij.ERROR:
                return a.intl.string(o.default.i4ZzK6);
        }
    };
