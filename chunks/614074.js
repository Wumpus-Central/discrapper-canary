n.d(e, { C: () => d });
var i = n(54381),
    r = n(473749),
    l = n(793030),
    s = n(5900),
    u = n(773275),
    a = n(388032),
    o = n(163646),
    c = n(291771);
let d = () => {
        let { isWeb: t, installationStatus: e } = (0, u.xf)(),
            n = (0, r.useMemo)(() => {
                if (t) return a.intl.string(o.default.KN6HOb);
                switch (e) {
                    case s._n.ERROR:
                        return a.intl.string(o.default.cjqyz7);
                    case s._n.NOT_INSTALLED:
                    case s._n.UNKNOWN:
                        return a.intl.string(o.default.KN6HOb);
                    case s._n.INSTALLING:
                    case s._n.READY_FOR_LICENSE:
                        return a.intl.string(o.default.lYWqUK);
                    case s._n.EXISTING_INSTALLATION:
                        return a.intl.string(o.default.FgL0HB);
                    case s._n.ZERO_TRUST:
                        return a.intl.string(o.default["7zgDRR"]);
                    case s._n.INSTALLED:
                        return (0, i.jsx)(E, {});
                }
            }, [t, e]);
        return (0, i.jsx)(l.X6q, {
            variant: "heading-md/semibold",
            children: n,
        });
    },
    E = () => {
        switch ((0, u.xf)((t) => t.connectionStatus)) {
            case s.Ij.INITIALIZING:
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
            case s.Ij.CONNECTED:
                return a.intl.string(o.default.FBu3XJ);
            case s.Ij.DISCONNECTED:
                return a.intl.string(o.default["9V78nW"]);
            case s.Ij.ERROR:
                return a.intl.string(o.default.i4ZzK6);
        }
    };
