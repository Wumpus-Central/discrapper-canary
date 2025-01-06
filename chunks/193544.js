n.d(t, {
    Z: function () {
        return x;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(481060),
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
        [_, I] = r.useState(p),
        [N, T] = r.useState(!1),
        [j, b] = r.useState(!1),
        S = r.useRef(null);
    r.useEffect(() => {
        I(p);
    }, [p]),
        r.useEffect(
            () => () => {
                clearTimeout(S.current);
            },
            []
        );
    let E = f.find((e) => e.value === _),
        R = (e) => {
            if (!e.disabled && e.value !== _)
                b(!0),
                    null == v || v(e),
                    I(e.value),
                    (S.current = setTimeout(() => {
                        b(!1), T(!1);
                    }, 1000));
        };
    return (0, i.jsx)(u.Z, {
        title: N ? x : null !== (t = null == E ? void 0 : E.title) && void 0 !== t ? t : x,
        description: N ? '('.concat(null !== (n = null == E ? void 0 : E.title) && void 0 !== n ? n : h.intl.string(h.t.PoWNfX), ')') : null !== (l = null == E ? void 0 : E.description) && void 0 !== l ? l : '',
        highlightColor: N ? d.q.NONE : null == E ? void 0 : E.highlightColor,
        action: (0, i.jsx)(s.Button, {
            look: s.Button.Looks.LINK,
            size: s.Button.Sizes.MIN,
            color: s.Button.Colors.LINK,
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
                    className: a()(g.groupCollapsedRow, _ === e.value && g.selected),
                    selected: _ === e.value,
                    action: _ === e.value ? (0, i.jsx)(c.Z, { className: g.radioItem }) : (0, i.jsx)(o.Z, { className: g.radioItem }),
                    onClick: () => R(e),
                    disabled: e.disabled
                },
                ''.concat(e.title, '-').concat(t)
            )
        )
    });
}
