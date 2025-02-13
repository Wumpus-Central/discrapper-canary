n.d(t, { Z: () => x }), n(47120);
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
    g = n(785499);
function x(e) {
    var t, n, l;
    let { changeTitle: x, value: p, options: _, className: C, onChange: f } = e,
        [v, N] = r.useState(p),
        [j, I] = r.useState(!1),
        [E, b] = r.useState(!1),
        T = r.useRef(null);
    r.useEffect(() => {
        N(p);
    }, [p]),
        r.useEffect(
            () => () => {
                clearTimeout(T.current);
            },
            []
        );
    let S = _.find((e) => e.value === v),
        R = (e) => {
            !e.disabled &&
                e.value !== v &&
                (b(!0),
                null == f || f(e),
                N(e.value),
                (T.current = setTimeout(() => {
                    b(!1), I(!1);
                }, 1000)));
        };
    return (0, i.jsx)(u.Z, {
        title: j ? x : null !== (t = null == S ? void 0 : S.title) && void 0 !== t ? t : x,
        description: j ? '('.concat(null !== (n = null == S ? void 0 : S.title) && void 0 !== n ? n : h.intl.string(h.t.PoWNfX), ')') : null !== (l = null == S ? void 0 : S.description) && void 0 !== l ? l : '',
        highlightColor: j ? d.q.NONE : null == S ? void 0 : S.highlightColor,
        action: (0, i.jsx)(a.zxk, {
            look: a.zxk.Looks.LINK,
            size: a.zxk.Sizes.MIN,
            color: a.zxk.Colors.LINK,
            children: h.intl.string(h.t.GEgsAw)
        }),
        loading: E,
        className: C,
        children: _.map((e, t) =>
            (0, i.jsx)(
                m.Z,
                {
                    title: e.title,
                    description: e.description,
                    highlightColor: e.highlightColor,
                    className: s()(g.groupCollapsedRow, v === e.value && g.selected),
                    selected: v === e.value,
                    action: v === e.value ? (0, i.jsx)(c.Z, { className: g.radioItem }) : (0, i.jsx)(o.Z, { className: g.radioItem }),
                    onClick: () => R(e),
                    disabled: e.disabled
                },
                ''.concat(e.title, '-').concat(t)
            )
        )
    });
}
