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
        [_, N] = r.useState(p),
        [I, T] = r.useState(!1),
        [j, b] = r.useState(!1),
        S = r.useRef(null);
    r.useEffect(() => {
        N(p);
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
                    N(e.value),
                    (S.current = setTimeout(() => {
                        b(!1), T(!1);
                    }, 1000));
        };
    return (0, i.jsx)(u.Z, {
        title: I ? x : null !== (t = null == E ? void 0 : E.title) && void 0 !== t ? t : x,
        description: I ? '('.concat(null !== (n = null == E ? void 0 : E.title) && void 0 !== n ? n : h.intl.string(h.t.PoWNfX), ')') : null !== (l = null == E ? void 0 : E.description) && void 0 !== l ? l : '',
        highlightColor: I ? d.q.NONE : null == E ? void 0 : E.highlightColor,
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
