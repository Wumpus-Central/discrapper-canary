n.d(t, { A: () => m }), n(896048), n(228524);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(158954),
    c = n(44234),
    o = n(282054),
    d = n(620216),
    u = n(694433),
    f = n(441442),
    g = n(985018),
    b = n(604175);
function m(e) {
    var t, n, l;
    let { changeTitle: m, value: p, options: x, className: h, onChange: j } = e,
        [O, y] = i.useState(p),
        [v, A] = i.useState(!1),
        [E, N] = i.useState(!1),
        _ = i.useRef(null);
    i.useEffect(() => {
        y(p);
    }, [p]),
        i.useEffect(
            () => () => {
                clearTimeout(_.current);
            },
            [],
        );
    let S = x.find((e) => e.value === O);
    return (0, r.jsx)(u.A, {
        title: v ? m : null != (t = null == S ? void 0 : S.title) ? t : m,
        description: v
            ? "(".concat(null != (n = null == S ? void 0 : S.title) ? n : g.intl.string(g.t.PoWNfe), ")")
            : null != (l = null == S ? void 0 : S.description)
              ? l
              : "",
        highlightColor: v ? d.t.NONE : null == S ? void 0 : S.highlightColor,
        action: (0, r.jsx)(a.QWc, {
            text: g.intl.string(g.t.GEgsA4),
            textVariant: "text-sm/medium",
        }),
        loading: E,
        className: h,
        children: x.map((e, t) =>
            (0, r.jsx)(
                f.A,
                {
                    title: e.title,
                    description: e.description,
                    highlightColor: e.highlightColor,
                    className: s()(b.bi, O === e.value && b.wH),
                    selected: O === e.value,
                    action: O === e.value ? (0, r.jsx)(o.A, { className: b.VB }) : (0, r.jsx)(c.A, { className: b.VB }),
                    onClick: () => {
                        e.disabled ||
                            e.value === O ||
                            (N(!0),
                            null == j || j(e),
                            y(e.value),
                            (_.current = setTimeout(() => {
                                N(!1), A(!1);
                            }, 1000)));
                    },
                    disabled: e.disabled,
                },
                "".concat(e.title, "-").concat(t),
            ),
        ),
    });
}
