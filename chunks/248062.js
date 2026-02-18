t.d(a, { MV: () => d, RG: () => c, lG: () => m });
var r = t(650682),
    n = t(825913),
    i = t(257537),
    o = t(841680),
    u = t(290424),
    l = t(803082),
    s = t(64700);
let d = (0, s.createContext)(null),
    c = (0, s.createContext)(null),
    m = (0, s.forwardRef)(function (e, a) {
        let t = e["aria-labelledby"];
        [e, a] = (0, n.JT)(e, a, d);
        let { dialogProps: m, titleProps: h } = (0, o.s)({ ...e, "aria-labelledby": t }, a),
            D = (0, s.useContext)(c);
        m["aria-label"] ||
            m["aria-labelledby"] ||
            (e["aria-labelledby"] && (m["aria-labelledby"] = e["aria-labelledby"]));
        let y = (0, n.Sl)({
                defaultClassName: "react-aria-Dialog",
                className: e.className,
                style: e.style,
                children: e.children,
                values: { close: (null == D ? void 0 : D.close) || (() => {}) },
            }),
            p = (0, u.$)(e, { global: !0 });
        return s.createElement(
            "section",
            { ...(0, l.v)(p, y, m), ref: a, slot: e.slot || void 0 },
            s.createElement(
                n.Kq,
                {
                    values: [
                        [i.A3, { slots: { [n.P_]: {}, title: { ...h, level: 2 } } }],
                        [r.k, { slots: { [n.P_]: {}, close: { onPress: () => (null == D ? void 0 : D.close()) } } }],
                    ],
                },
                y.children,
            ),
        );
    });
