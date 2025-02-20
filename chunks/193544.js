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
    p = n(388032),
    g = n(120350);
function h(e) {
    var t, n, s;
    let { changeTitle: h, value: f, options: b, className: x, onChange: j } = e,
        [N, v] = i.useState(f),
        [_, O] = i.useState(!1),
        [y, C] = i.useState(!1),
        I = i.useRef(null);
    i.useEffect(() => {
        v(f);
    }, [f]),
        i.useEffect(
            () => () => {
                clearTimeout(I.current);
            },
            []
        );
    let E = b.find((e) => e.value === N),
        S = (e) => {
            !e.disabled &&
                e.value !== N &&
                (C(!0),
                null == j || j(e),
                v(e.value),
                (I.current = setTimeout(() => {
                    C(!1), O(!1);
                }, 1000)));
        };
    return (0, r.jsx)(u.Z, {
        title: _ ? h : null !== (t = null == E ? void 0 : E.title) && void 0 !== t ? t : h,
        description: _ ? '('.concat(null !== (n = null == E ? void 0 : E.title) && void 0 !== n ? n : p.NW.string(p.t.PoWNfX), ')') : null !== (s = null == E ? void 0 : E.description) && void 0 !== s ? s : '',
        highlightColor: _ ? d.q.NONE : null == E ? void 0 : E.highlightColor,
        action: (0, r.jsx)(l.zxk, {
            look: l.zxk.Looks.LINK,
            size: l.zxk.Sizes.MIN,
            color: l.zxk.Colors.LINK,
            children: p.NW.string(p.t.GEgsAw)
        }),
        loading: y,
        className: x,
        children: b.map((e, t) =>
            (0, r.jsx)(
                m.Z,
                {
                    title: e.title,
                    description: e.description,
                    highlightColor: e.highlightColor,
                    className: a()(g.groupCollapsedRow, N === e.value && g.selected),
                    selected: N === e.value,
                    action: N === e.value ? (0, r.jsx)(c.Z, { className: g.radioItem }) : (0, r.jsx)(o.Z, { className: g.radioItem }),
                    onClick: () => S(e),
                    disabled: e.disabled
                },
                ''.concat(e.title, '-').concat(t)
            )
        )
    });
}
