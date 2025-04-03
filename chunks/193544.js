n.d(t, { Z: () => h }), n(47120), n(266796);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(481060),
    o = n(186523),
    c = n(553826),
    d = n(2150),
    u = n(992249),
    m = n(717251),
    g = n(388032),
    p = n(184520);
function h(e) {
    var t, n, s;
    let { changeTitle: h, value: f, options: b, className: x, onChange: j } = e,
        [N, _] = i.useState(f),
        [v, C] = i.useState(!1),
        [O, y] = i.useState(!1),
        I = i.useRef(null);
    i.useEffect(() => {
        _(f);
    }, [f]),
        i.useEffect(
            () => () => {
                clearTimeout(I.current);
            },
            []
        );
    let E = b.find((e) => e.value === N),
        S = (e) => {
            e.disabled ||
                e.value === N ||
                (y(!0),
                null == j || j(e),
                _(e.value),
                (I.current = setTimeout(() => {
                    y(!1), C(!1);
                }, 1000)));
        };
    return (0, r.jsx)(u.Z, {
        title: v ? h : null != (t = null == E ? void 0 : E.title) ? t : h,
        description: v ? '('.concat(null != (n = null == E ? void 0 : E.title) ? n : g.NW.string(g.t.PoWNfX), ')') : null != (s = null == E ? void 0 : E.description) ? s : '',
        highlightColor: v ? d.q.NONE : null == E ? void 0 : E.highlightColor,
        action: (0, r.jsx)(l.zxk, {
            look: l.zxk.Looks.LINK,
            size: l.zxk.Sizes.MIN,
            color: l.zxk.Colors.LINK,
            children: g.NW.string(g.t.GEgsAw)
        }),
        loading: O,
        className: x,
        children: b.map((e, t) =>
            (0, r.jsx)(
                m.Z,
                {
                    title: e.title,
                    description: e.description,
                    highlightColor: e.highlightColor,
                    className: a()(p.groupCollapsedRow, N === e.value && p.selected),
                    selected: N === e.value,
                    action: N === e.value ? (0, r.jsx)(c.Z, { className: p.radioItem }) : (0, r.jsx)(o.Z, { className: p.radioItem }),
                    onClick: () => S(e),
                    disabled: e.disabled
                },
                ''.concat(e.title, '-').concat(t)
            )
        )
    });
}
