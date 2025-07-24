(n.d(t, { Z: () => f }), n(388685), n(953529));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(755721),
    o = n(186523),
    c = n(553826),
    d = n(2150),
    u = n(992249),
    m = n(717251),
    g = n(388032),
    p = n(184520);
function f(e) {
    var t, n, l;
    let { changeTitle: f, value: h, options: x, className: b, onChange: j } = e,
        [v, _] = i.useState(h),
        [O, C] = i.useState(!1),
        [y, N] = i.useState(!1),
        I = i.useRef(null);
    (i.useEffect(() => {
        _(h);
    }, [h]),
        i.useEffect(
            () => () => {
                clearTimeout(I.current);
            },
            []
        ));
    let E = x.find((e) => e.value === v),
        S = (e) => {
            e.disabled ||
                e.value === v ||
                (N(!0),
                null == j || j(e),
                _(e.value),
                (I.current = setTimeout(() => {
                    (N(!1), C(!1));
                }, 1000)));
        };
    return (0, r.jsx)(u.Z, {
        title: O ? f : null != (t = null == E ? void 0 : E.title) ? t : f,
        description: O ? '('.concat(null != (n = null == E ? void 0 : E.title) ? n : g.intl.string(g.t.PoWNfX), ')') : null != (l = null == E ? void 0 : E.description) ? l : '',
        highlightColor: O ? d.q.NONE : null == E ? void 0 : E.highlightColor,
        action: (0, r.jsx)(a.zx, {
            look: a.zx.Looks.LINK,
            size: a.zx.Sizes.MIN,
            color: a.zx.Colors.LINK,
            children: g.intl.string(g.t.GEgsAw)
        }),
        loading: y,
        className: b,
        children: x.map((e, t) =>
            (0, r.jsx)(
                m.Z,
                {
                    title: e.title,
                    description: e.description,
                    highlightColor: e.highlightColor,
                    className: s()(p.groupCollapsedRow, v === e.value && p.selected),
                    selected: v === e.value,
                    action: v === e.value ? (0, r.jsx)(c.Z, { className: p.radioItem }) : (0, r.jsx)(o.Z, { className: p.radioItem }),
                    onClick: () => S(e),
                    disabled: e.disabled
                },
                ''.concat(e.title, '-').concat(t)
            )
        )
    });
}
