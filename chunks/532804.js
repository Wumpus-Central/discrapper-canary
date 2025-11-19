n.d(t, { Z: () => f }), n(388685), n(953529);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(755721),
    o = n(186523),
    c = n(553826),
    d = n(137510),
    u = n(220980),
    g = n(28997),
    m = n(388032),
    p = n(205534);
function f(e) {
    var t, n, l;
    let { changeTitle: f, value: h, options: b, className: x, onChange: j } = e,
        [_, v] = i.useState(h),
        [O, C] = i.useState(!1),
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
    let I = b.find((e) => e.value === _);
    return (0, r.jsx)(u.Z, {
        title: O ? f : null != (t = null == I ? void 0 : I.title) ? t : f,
        description: O
            ? "(".concat(null != (n = null == I ? void 0 : I.title) ? n : m.intl.string(m.t.PoWNfe), ")")
            : null != (l = null == I ? void 0 : I.description)
              ? l
              : "",
        highlightColor: O ? d.q.NONE : null == I ? void 0 : I.highlightColor,
        action: (0, r.jsx)(s.zx, {
            look: s.zx.Looks.LINK,
            size: s.zx.Sizes.MIN,
            color: s.zx.Colors.LINK,
            children: m.intl.string(m.t.GEgsA4),
        }),
        loading: y,
        className: x,
        children: b.map((e, t) =>
            (0, r.jsx)(
                g.Z,
                {
                    title: e.title,
                    description: e.description,
                    highlightColor: e.highlightColor,
                    className: a()(p.groupCollapsedRow, _ === e.value && p.selected),
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
                                N(!1), C(!1);
                            }, 1000)));
                    },
                    disabled: e.disabled,
                },
                "".concat(e.title, "-").concat(t),
            ),
        ),
    });
}
