n.d(t, {
    Z: function () {
        return x;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(481060),
    o = n(186523),
    c = n(553826),
    d = n(2150),
    u = n(992249),
    m = n(717251),
    h = n(388032),
    g = n(975247);
function x(e) {
    var t, n, l;
    let { changeTitle: x, value: p, options: f, className: C, onChange: v } = e,
        [I, N] = r.useState(p),
        [_, T] = r.useState(!1),
        [j, b] = r.useState(!1),
        E = r.useRef(null);
    r.useEffect(() => {
        N(p);
    }, [p]),
        r.useEffect(
            () => () => {
                clearTimeout(E.current);
            },
            []
        );
    let S = f.find((e) => e.value === I),
        R = (e) => {
            if (!e.disabled && e.value !== I)
                b(!0),
                    null == v || v(e),
                    N(e.value),
                    (E.current = setTimeout(() => {
                        b(!1), T(!1);
                    }, 1000));
        };
    return (0, i.jsx)(u.Z, {
        title: _ ? x : null !== (t = null == S ? void 0 : S.title) && void 0 !== t ? t : x,
        description: _ ? '('.concat(null !== (n = null == S ? void 0 : S.title) && void 0 !== n ? n : h.intl.string(h.t.PoWNfX), ')') : null !== (l = null == S ? void 0 : S.description) && void 0 !== l ? l : '',
        highlightColor: _ ? d.q.NONE : null == S ? void 0 : S.highlightColor,
        action: (0, i.jsx)(a.Button, {
            look: a.Button.Looks.LINK,
            size: a.Button.Sizes.MIN,
            color: a.Button.Colors.LINK,
            children: h.intl.string(h.t.GEgsAw)
        }),
        loading: j,
        className: C,
        children: f.map((e, t) =>
            (0, i.jsx)(
                m.Z,
                {
                    title: e.title,
                    description: e.description,
                    highlightColor: e.highlightColor,
                    className: s()(g.groupCollapsedRow, I === e.value && g.selected),
                    selected: I === e.value,
                    action: I === e.value ? (0, i.jsx)(c.Z, { className: g.radioItem }) : (0, i.jsx)(o.Z, { className: g.radioItem }),
                    onClick: () => R(e),
                    disabled: e.disabled
                },
                ''.concat(e.title, '-').concat(t)
            )
        )
    });
}
