s.d(e, { A: () => A });
var n = s(627968),
    i = s(64700),
    r = s(735438),
    a = s(311907),
    l = s(359778),
    c = s(778712),
    o = s(534514),
    d = s(834730),
    u = s(287809),
    N = s(739010),
    m = s(558272),
    h = s(271995),
    E = s(645376),
    g = s(985018),
    x = s(250429);
function A() {
    let t = (0, m.K)(),
        e = (0, a.bG)([u.default], () => u.default.getCurrentUser()),
        [s, A] = i.useState(36),
        I = i.useRef({
            [N.PN.ALL_GOOD]: null,
            [N.PN.LIMITED]: null,
            [N.PN.VERY_LIMITED]: null,
            [N.PN.AT_RISK]: null,
            [N.PN.SUSPENDED]: null,
        }),
        _ = i.useCallback(() => {
            A(Math.max(Math.max(...Object.values(I.current).map((t) => t?.getBoundingClientRect().height ?? 36)), 36));
        }, []);
    i.useEffect(() => {
        _();
        let t = (0, r.debounce)(_, 100);
        return window.addEventListener("resize", t), () => window.removeEventListener("resize", t);
    }, [_]);
    let j = (0, h.QB)(),
        { title: D, description: v, color: f, Icon: T } = j[t.state],
        C = Object.keys(j).length;
    return (0, n.jsxs)(l.Z, {
        className: x.kL,
        outline: !1,
        children: [
            (0, n.jsx)("div", { className: x.ME, children: (0, n.jsx)(E.A, { user: e, size: c._3.SIZE_80 }) }),
            (0, n.jsxs)("div", {
                className: x.h5,
                children: [
                    (0, n.jsxs)("div", {
                        className: x.DD,
                        children: [
                            (0, n.jsx)(o.D, {
                                color: "text-strong",
                                variant: "heading-lg/normal",
                                children: g.intl.format(D, {
                                    hook: (t) =>
                                        (0, n.jsx)(d.E, {
                                            style: { color: f.css },
                                            variant: "heading-lg/bold",
                                            tag: "span",
                                            children: t,
                                        }),
                                }),
                            }),
                            (0, n.jsx)(d.E, { color: "text-default", variant: "text-sm/normal", children: v }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: x.vK,
                        style: { height: s },
                        children: [
                            (0, n.jsx)("div", { className: x.n8 }),
                            Object.entries(j).map((e, s) => {
                                let [i, r] = e,
                                    a = parseInt(i) === t.state;
                                return (0, n.jsxs)(
                                    "div",
                                    {
                                        className: x.Kx,
                                        ref: (t) => {
                                            I.current[parseInt(i)] = t;
                                        },
                                        children: [
                                            a
                                                ? (0, n.jsx)(T, { className: x.xL, color: r.color })
                                                : (0, n.jsx)("div", {
                                                      className: x.xL,
                                                      style: {
                                                          marginLeft: 0 === s ? -6 : 0,
                                                          marginRight: s === C - 1 ? -6 : 0,
                                                      },
                                                      children: (0, n.jsx)("div", { className: x.Ie }),
                                                  }),
                                            g.intl.format(r.status, {
                                                hook: (t) =>
                                                    (0, n.jsx)(d.E, {
                                                        color: "text-default",
                                                        variant: "text-sm/normal",
                                                        className: x.Rh,
                                                        children: t,
                                                    }),
                                            }),
                                        ],
                                    },
                                    s,
                                );
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
