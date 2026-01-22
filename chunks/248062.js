n.d(t, {
    MV: () => u,
    RG: () => d,
    lG: () => f,
});
var r = n(650682),
    i = n(825913),
    a = n(257537),
    s = n(841680),
    o = n(290424),
    l = n(803082),
    c = n(64700);
let u = (0, c.createContext)(null),
    d = (0, c.createContext)(null),
    f = (0, c.forwardRef)(function (e, t) {
        let n = e["aria-labelledby"];
        [e, t] = (0, i.JT)(e, t, u);
        let { dialogProps: f, titleProps: p } = (0, s.s)(
                {
                    ...e,
                    "aria-labelledby": n,
                },
                t,
            ),
            _ = (0, c.useContext)(d);
        f["aria-label"] ||
            f["aria-labelledby"] ||
            (e["aria-labelledby"] && (f["aria-labelledby"] = e["aria-labelledby"]));
        let h = (0, i.Sl)({
                defaultClassName: "react-aria-Dialog",
                className: e.className,
                style: e.style,
                children: e.children,
                values: {
                    close: (null == _ ? void 0 : _.close) || (() => {}),
                },
            }),
            m = (0, o.$)(e, {
                global: !0,
            });
        return c.createElement(
            "section",
            {
                ...(0, l.v)(m, h, f),
                ref: t,
                slot: e.slot || void 0,
            },
            c.createElement(
                i.Kq,
                {
                    values: [
                        [
                            a.A3,
                            {
                                slots: {
                                    [i.P_]: {},
                                    title: {
                                        ...p,
                                        level: 2,
                                    },
                                },
                            },
                        ],
                        [
                            r.k,
                            {
                                slots: {
                                    [i.P_]: {},
                                    close: {
                                        onPress: () => (null == _ ? void 0 : _.close()),
                                    },
                                },
                            },
                        ],
                    ],
                },
                h.children,
            ),
        );
    });
