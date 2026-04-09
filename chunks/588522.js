s.d(e, { A: () => x });
var i = s(627968),
    n = s(64700),
    a = s(735438),
    r = s(311907),
    l = s(397927),
    c = s(287809),
    o = s(739010),
    d = s(335891),
    u = s(271995),
    m = s(645376),
    N = s(985018),
    h = s(18861);
function x() {
    let t = (0, d.K)(),
        e = (0, r.bG)([c.default], () => c.default.getCurrentUser()),
        [s, x] = n.useState(36),
        g = n.useRef({
            [o.PN.ALL_GOOD]: null,
            [o.PN.LIMITED]: null,
            [o.PN.VERY_LIMITED]: null,
            [o.PN.AT_RISK]: null,
            [o.PN.SUSPENDED]: null,
        }),
        E = n.useCallback(() => {
            x(Math.max(Math.max(...Object.values(g.current).map((t) => t?.getBoundingClientRect().height ?? 36)), 36));
        }, []);
    n.useEffect(() => {
        E();
        let t = (0, a.debounce)(E, 100);
        return window.addEventListener("resize", t), () => window.removeEventListener("resize", t);
    }, [E]);
    let A = (0, u.QB)(),
        { title: I, description: _, color: j, Icon: T } = A[t.state],
        v = Object.keys(A).length;
    return (0, i.jsxs)(l.ZpM, {
        className: h.kL,
        outline: !1,
        children: [
            (0, i.jsx)("div", { className: h.ME, children: (0, i.jsx)(m.A, { user: e, size: l._3J.SIZE_80 }) }),
            (0, i.jsxs)("div", {
                className: h.h5,
                children: [
                    (0, i.jsxs)("div", {
                        className: h.DD,
                        children: [
                            (0, i.jsx)(l.Heading, {
                                color: "text-strong",
                                variant: "heading-lg/normal",
                                children: N.intl.format(I, {
                                    hook: (t) =>
                                        (0, i.jsx)(l.Text, {
                                            style: { color: j.css },
                                            variant: "heading-lg/bold",
                                            tag: "span",
                                            children: t,
                                        }),
                                }),
                            }),
                            (0, i.jsx)(l.Text, { color: "text-default", variant: "text-sm/normal", children: _ }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: h.vK,
                        style: { height: s },
                        children: [
                            (0, i.jsx)("div", { className: h.n8 }),
                            Object.entries(A).map((e, s) => {
                                let [n, a] = e,
                                    r = parseInt(n) === t.state;
                                return (0, i.jsxs)(
                                    "div",
                                    {
                                        className: h.Kx,
                                        ref: (t) => {
                                            g.current[parseInt(n)] = t;
                                        },
                                        children: [
                                            r
                                                ? (0, i.jsx)(T, { className: h.xL, color: a.color })
                                                : (0, i.jsx)("div", {
                                                      className: h.xL,
                                                      style: {
                                                          marginLeft: 0 === s ? -6 : 0,
                                                          marginRight: s === v - 1 ? -6 : 0,
                                                      },
                                                      children: (0, i.jsx)("div", { className: h.Ie }),
                                                  }),
                                            N.intl.format(a.status, {
                                                hook: (t) =>
                                                    (0, i.jsx)(l.Text, {
                                                        color: "text-default",
                                                        variant: "text-sm/normal",
                                                        className: h.Rh,
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
