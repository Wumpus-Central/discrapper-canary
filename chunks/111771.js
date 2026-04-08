"use strict";
n.d(t, { A: () => h });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(158954),
    o = n(44234),
    d = n(282054),
    c = n(620216),
    u = n(694433),
    m = n(441442),
    g = n(985018),
    x = n(608245);
function h(e) {
    let { changeTitle: t, value: n, options: l, className: h, onChange: _ } = e,
        [p, A] = s.useState(n),
        [f, j] = s.useState(!1),
        [N, E] = s.useState(!1),
        C = s.useRef(null);
    s.useEffect(() => {
        A(n);
    }, [n]),
        s.useEffect(
            () => () => {
                clearTimeout(C.current);
            },
            [],
        );
    let T = l.find((e) => e.value === p);
    return (0, i.jsx)(u.A, {
        title: f ? t : (T?.title ?? t),
        description: f ? `(${T?.title ?? g.intl.string(g.t.PoWNfe)})` : (T?.description ?? ""),
        highlightColor: f ? c.t.NONE : T?.highlightColor,
        action: (0, i.jsx)(a.QWc, { text: g.intl.string(g.t.GEgsA4), textVariant: "text-sm/medium" }),
        loading: N,
        className: h,
        children: l.map((e, t) =>
            (0, i.jsx)(
                m.A,
                {
                    title: e.title,
                    description: e.description,
                    highlightColor: e.highlightColor,
                    className: r()(x.bi, p === e.value && x.wH),
                    selected: p === e.value,
                    action: p === e.value ? (0, i.jsx)(d.A, { className: x.VB }) : (0, i.jsx)(o.A, { className: x.VB }),
                    onClick: () => {
                        e.disabled ||
                            e.value === p ||
                            (E(!0),
                            _?.(e),
                            A(e.value),
                            (C.current = setTimeout(() => {
                                E(!1), j(!1);
                            }, 1e3)));
                    },
                    disabled: e.disabled,
                },
                `${e.title}-${t}`,
            ),
        ),
    });
}
