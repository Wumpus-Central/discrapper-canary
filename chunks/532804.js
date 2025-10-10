n.d(t, { Z: () => f }), n(388685), n(953529);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
    a = n(755721),
    o = n(186523),
    c = n(553826),
    d = n(137510),
    u = n(220980),
    g = n(28997),
    m = n(388032),
    p = n(134275);
function f(e) {
    var t, n, l;
    let { changeTitle: f, value: h, options: x, className: b, onChange: j } = e,
        [_, v] = i.useState(h),
        [C, O] = i.useState(!1),
        [y, N] = i.useState(!1),
        E = i.useRef(null);
    i.useEffect(() => {
        v(h);
    }, [h]),
        i.useEffect(
            () => () => {
                clearTimeout(E.current);
            },
            [],
        );
    let I = x.find((e) => e.value === _);
    return (0, r.jsx)(u.Z, {
        title: C ? f : null != (t = null == I ? void 0 : I.title) ? t : f,
        description: C
            ? "(".concat(null != (n = null == I ? void 0 : I.title) ? n : m.intl.string(m.t.PoWNfX), ")")
            : null != (l = null == I ? void 0 : I.description)
              ? l
              : "",
        highlightColor: C ? d.q.NONE : null == I ? void 0 : I.highlightColor,
        action: (0, r.jsx)(a.zx, {
            look: a.zx.Looks.LINK,
            size: a.zx.Sizes.MIN,
            color: a.zx.Colors.LINK,
            children: m.intl.string(m.t.GEgsAw),
        }),
        loading: y,
        className: b,
        children: x.map((e, t) =>
            (0, r.jsx)(
                g.Z,
                {
                    title: e.title,
                    description: e.description,
                    highlightColor: e.highlightColor,
                    className: s()(p.groupCollapsedRow, _ === e.value && p.selected),
                    selected: _ === e.value,
                    action:
                        _ === e.value
                            ? (0, r.jsx)(c.Z, { className: p.radioItem })
                            : (0, r.jsx)(o.Z, { className: p.radioItem }),
                    onClick: () => {
                        e.disabled ||
                            e.value === _ ||
                            (N(!0),
                            null == j || j(e),
                            v(e.value),
                            (E.current = setTimeout(() => {
                                N(!1), O(!1);
                            }, 1000)));
                    },
                    disabled: e.disabled,
                },
                "".concat(e.title, "-").concat(t),
            ),
        ),
    });
}
