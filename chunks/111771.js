n.d(t, { A: () => x });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(123292),
    o = n(44234),
    d = n(282054),
    c = n(620216),
    u = n(694433),
    m = n(441442),
    g = n(985018),
    h = n(269924);
function x(e) {
    let { changeTitle: t, value: n, options: s, className: x, onChange: _ } = e,
        [p, A] = l.useState(n),
        [E, f] = l.useState(!1),
        [j, N] = l.useState(!1),
        I = l.useRef(null);
    l.useEffect(() => {
        A(n);
    }, [n]),
        l.useEffect(
            () => () => {
                clearTimeout(I.current);
            },
            [],
        );
    let C = s.find((e) => e.value === p);
    return (0, i.jsx)(u.A, {
        title: E ? t : (C?.title ?? t),
        description: E ? `(${C?.title ?? g.intl.string(g.t.PoWNfe)})` : (C?.description ?? ""),
        highlightColor: E ? c.t.NONE : C?.highlightColor,
        action: (0, i.jsx)(a.Q, { text: g.intl.string(g.t.GEgsA4), textVariant: "text-sm/medium" }),
        loading: j,
        className: x,
        children: s.map((e, t) =>
            (0, i.jsx)(
                m.A,
                {
                    title: e.title,
                    description: e.description,
                    highlightColor: e.highlightColor,
                    className: r()(h.bi, p === e.value && h.wH),
                    selected: p === e.value,
                    action: p === e.value ? (0, i.jsx)(d.A, { className: h.VB }) : (0, i.jsx)(o.A, { className: h.VB }),
                    onClick: () => {
                        e.disabled ||
                            e.value === p ||
                            (N(!0),
                            _?.(e),
                            A(e.value),
                            (I.current = setTimeout(() => {
                                N(!1), f(!1);
                            }, 1e3)));
                    },
                    disabled: e.disabled,
                },
                `${e.title}-${t}`,
            ),
        ),
    });
}
