"use strict";
n.d(t, { MV: () => c, RG: () => d, lG: () => _ });
var r = n(650682),
    i = n(825913),
    a = n(257537),
    s = n(841680),
    o = n(290424),
    l = n(803082),
    u = n(64700);
let c = (0, u.createContext)(null),
    d = (0, u.createContext)(null),
    _ = (0, u.forwardRef)(function (e, t) {
        let n = e["aria-labelledby"];
        [e, t] = (0, i.JT)(e, t, c);
        let { dialogProps: _, titleProps: f } = (0, s.s)({ ...e, "aria-labelledby": n }, t),
            p = (0, u.useContext)(d);
        _["aria-label"] ||
            _["aria-labelledby"] ||
            (e["aria-labelledby"] && (_["aria-labelledby"] = e["aria-labelledby"]));
        let h = (0, i.Sl)({
                defaultClassName: "react-aria-Dialog",
                className: e.className,
                style: e.style,
                children: e.children,
                values: { close: (null == p ? void 0 : p.close) || (() => {}) },
            }),
            m = (0, o.$)(e, { global: !0 });
        return u.createElement(
            "section",
            { ...(0, l.v)(m, h, _), ref: t, slot: e.slot || void 0 },
            u.createElement(
                i.Kq,
                {
                    values: [
                        [a.A3, { slots: { [i.P_]: {}, title: { ...f, level: 2 } } }],
                        [r.k, { slots: { [i.P_]: {}, close: { onPress: () => (null == p ? void 0 : p.close()) } } }],
                    ],
                },
                h.children,
            ),
        );
    });
