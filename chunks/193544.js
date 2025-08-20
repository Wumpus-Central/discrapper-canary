n.d(t, { Z: () => h }), n(388685), n(953529);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(755721),
    o = n(186523),
    c = n(553826),
    d = n(2150),
    u = n(992249),
    m = n(717251),
    g = n(388032),
    p = n(201720);
function h(e) {
    var t, n, l;
    let { changeTitle: h, value: f, options: b, className: x, onChange: j } = e,
        [v, _] = i.useState(f),
        [O, y] = i.useState(!1),
        [C, N] = i.useState(!1),
        E = i.useRef(null);
    i.useEffect(() => {
        _(f);
    }, [f]),
        i.useEffect(
            () => () => {
                clearTimeout(E.current);
            },
            [],
        );
    let I = b.find((e) => e.value === v);
    return (0, r.jsx)(u.Z, {
        title: O ? h : null != (t = null == I ? void 0 : I.title) ? t : h,
        description: O
            ? "(".concat(null != (n = null == I ? void 0 : I.title) ? n : g.intl.string(g.t.PoWNfX), ")")
            : null != (l = null == I ? void 0 : I.description)
              ? l
              : "",
        highlightColor: O ? d.q.NONE : null == I ? void 0 : I.highlightColor,
        action: (0, r.jsx)(s.zx, {
            look: s.zx.Looks.LINK,
            size: s.zx.Sizes.MIN,
            color: s.zx.Colors.LINK,
            children: g.intl.string(g.t.GEgsAw),
        }),
        loading: C,
        className: x,
        children: b.map((e, t) =>
            (0, r.jsx)(
                m.Z,
                {
                    title: e.title,
                    description: e.description,
                    highlightColor: e.highlightColor,
                    className: a()(p.groupCollapsedRow, v === e.value && p.selected),
                    selected: v === e.value,
                    action:
                        v === e.value
                            ? (0, r.jsx)(c.Z, { className: p.radioItem })
                            : (0, r.jsx)(o.Z, { className: p.radioItem }),
                    onClick: () => {
                        e.disabled ||
                            e.value === v ||
                            (N(!0),
                            null == j || j(e),
                            _(e.value),
                            (E.current = setTimeout(() => {
                                N(!1), y(!1);
                            }, 1000)));
                    },
                    disabled: e.disabled,
                },
                "".concat(e.title, "-").concat(t),
            ),
        ),
    });
}
