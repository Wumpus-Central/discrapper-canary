n.d(t, { Z: () => b }), n(388685), n(953529);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(793030),
    o = n(186523),
    c = n(553826),
    d = n(137510),
    u = n(220980),
    g = n(28997),
    f = n(388032),
    m = n(166702);
function b(e) {
    var t, n, l;
    let { changeTitle: b, value: p, options: h, className: x, onChange: j } = e,
        [v, O] = i.useState(p),
        [C, y] = i.useState(!1),
        [N, E] = i.useState(!1),
        I = i.useRef(null);
    i.useEffect(() => {
        O(p);
    }, [p]),
        i.useEffect(
            () => () => {
                clearTimeout(I.current);
            },
            [],
        );
    let S = h.find((e) => e.value === v);
    return (0, r.jsx)(u.Z, {
        title: C ? b : null != (t = null == S ? void 0 : S.title) ? t : b,
        description: C
            ? "(".concat(null != (n = null == S ? void 0 : S.title) ? n : f.intl.string(f.t.PoWNfe), ")")
            : null != (l = null == S ? void 0 : S.description)
              ? l
              : "",
        highlightColor: C ? d.q.NONE : null == S ? void 0 : S.highlightColor,
        action: (0, r.jsx)(s.Avr, {
            text: f.intl.string(f.t.GEgsA4),
            textVariant: "text-sm/medium",
        }),
        loading: N,
        className: x,
        children: h.map((e, t) =>
            (0, r.jsx)(
                g.Z,
                {
                    title: e.title,
                    description: e.description,
                    highlightColor: e.highlightColor,
                    className: a()(m.groupCollapsedRow, v === e.value && m.selected),
                    selected: v === e.value,
                    action:
                        v === e.value
                            ? (0, r.jsx)(c.Z, { className: m.radioItem })
                            : (0, r.jsx)(o.Z, { className: m.radioItem }),
                    onClick: () => {
                        e.disabled ||
                            e.value === v ||
                            (E(!0),
                            null == j || j(e),
                            O(e.value),
                            (I.current = setTimeout(() => {
                                E(!1), y(!1);
                            }, 1000)));
                    },
                    disabled: e.disabled,
                },
                "".concat(e.title, "-").concat(t),
            ),
        ),
    });
}
