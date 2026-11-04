t.d(a, { lG: () => f, MV: () => g, RG: () => p });
var r = t(51340),
    n = t(980807),
    i = t(325558),
    o = t(301153),
    l = t(892730),
    s = t(494112),
    d = t(518206),
    u = t(811390),
    c = t(582128);
t(333007);
let m = c.createContext(null);
var h = t(802649),
    y = t(652664);
let g = (0, c.createContext)(null),
    p = (0, c.createContext)(null),
    f = (0, c.forwardRef)(function (e, a) {
        let t = e["aria-labelledby"];
        [e, a] = (0, n.JT)(e, a, g);
        let {
                dialogProps: f,
                titleProps: D,
                contentProps: v,
            } = (function (e, a) {
                let t,
                    r,
                    { role: n = "dialog" } = e,
                    i = (0, h.X1)();
                i = e["aria-label"] ? void 0 : i;
                let o = (0, h.X1)();
                o = "alertdialog" !== n || e["aria-describedby"] ? void 0 : o;
                let y = (0, c.useRef)(!1);
                ((0, c.useEffect)(() => {
                    if (a.current && !(0, d.ae)(a.current)) {
                        (0, s.l)(a.current);
                        let e = setTimeout(() => {
                            ((0, d.bq)() === a.current || (0, d.bq)() === document.body) &&
                                ((y.current = !0),
                                a.current && (a.current.blur(), (0, s.l)(a.current)),
                                (y.current = !1));
                        }, 500);
                        return () => {
                            clearTimeout(e);
                        };
                    }
                }, [a]),
                    (t = (0, c.useContext)(m)),
                    (r = t?.setContain),
                    (0, u.N)(() => {
                        r?.(!0);
                    }, [r]),
                    (0, c.useRef)(!1),
                    (0, c.useEffect)(() => {}));
                let g = e["aria-describedby"] ?? o;
                return {
                    dialogProps: {
                        ...(0, l.$)(e, { labelable: !0 }),
                        role: n,
                        tabIndex: -1,
                        "aria-labelledby": e["aria-labelledby"] ?? i,
                        "aria-describedby": g,
                        onBlur: (e) => {
                            y.current && e.stopPropagation();
                        },
                    },
                    titleProps: { id: i },
                    contentProps: { id: o },
                };
            })({ ...e, "aria-labelledby": t }, a),
            b = (0, c.useContext)(p);
        f["aria-label"] ||
            f["aria-labelledby"] ||
            (e["aria-labelledby"] && (f["aria-labelledby"] = e["aria-labelledby"]));
        let $ = (0, n.Sl)({
                defaultClassName: "react-aria-Dialog",
                className: e.className,
                style: e.style,
                children: e.children,
                values: { close: b?.close || (() => {}) },
            }),
            R = (0, l.$)(e, { global: !0 });
        return c.createElement(
            n.tT.section,
            { ...(0, y.v)(R, $, f), render: e.render, ref: a, slot: e.slot || void 0 },
            c.createElement(
                n.Kq,
                {
                    values: [
                        [i.A, { slots: { [n.P_]: {}, title: { ...D, level: 2 } } }],
                        [o.h, { slots: { [n.P_]: {}, description: v } }],
                        [r.k, { slots: { [n.P_]: {}, close: { onPress: () => b?.close() } } }],
                    ],
                },
                $.children,
            ),
        );
    });
