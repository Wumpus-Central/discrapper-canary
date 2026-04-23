t.d(a, { MV: () => d, RG: () => c, lG: () => m });
var r = t(650682),
    n = t(825913),
    i = t(257537),
    l = t(841680),
    o = t(290424),
    u = t(803082),
    s = t(64700);
let d = (0, s.createContext)(null),
    c = (0, s.createContext)(null),
    m = (0, s.forwardRef)(function (e, a) {
        let t = e["aria-labelledby"];
        [e, a] = (0, n.JT)(e, a, d);
        let { dialogProps: m, titleProps: h } = (0, l.s)({ ...e, "aria-labelledby": t }, a),
            y = (0, s.useContext)(c);
        m["aria-label"] ||
            m["aria-labelledby"] ||
            (e["aria-labelledby"] && (m["aria-labelledby"] = e["aria-labelledby"]));
        let D = (0, n.Sl)({
                defaultClassName: "react-aria-Dialog",
                className: e.className,
                style: e.style,
                children: e.children,
                values: { close: (null == y ? void 0 : y.close) || (() => {}) },
            }),
            p = (0, o.$)(e, { global: !0 });
        return s.createElement(
            "section",
            { ...(0, u.v)(p, D, m), ref: a, slot: e.slot || void 0 },
            s.createElement(
                n.Kq,
                {
                    values: [
                        [i.A3, { slots: { [n.P_]: {}, title: { ...h, level: 2 } } }],
                        [r.k, { slots: { [n.P_]: {}, close: { onPress: () => (null == y ? void 0 : y.close()) } } }],
                    ],
                },
                D.children,
            ),
        );
    });
