n.d(t, { Z: () => h }), n(388685), n(953529);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(481060),
    o = n(186523),
    c = n(553826),
    u = n(2150),
    d = n(992249),
    m = n(717251),
    g = n(388032),
    p = n(184520);
function h(e) {
    var t, n, l;
    let { changeTitle: h, value: f, options: x, className: b, onChange: j } = e,
        [_, v] = i.useState(f),
        [O, C] = i.useState(!1),
        [y, N] = i.useState(!1),
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
    let E = x.find((e) => e.value === _),
        S = (e) => {
            e.disabled ||
                e.value === _ ||
                (N(!0),
                null == j || j(e),
                v(e.value),
                (I.current = setTimeout(() => {
                    N(!1), C(!1);
                }, 1000)));
        };
    return (0, r.jsx)(d.Z, {
        title: O ? h : null != (t = null == E ? void 0 : E.title) ? t : h,
        description: O ? '('.concat(null != (n = null == E ? void 0 : E.title) ? n : g.intl.string(g.t.PoWNfX), ')') : null != (l = null == E ? void 0 : E.description) ? l : '',
        highlightColor: O ? u.q.NONE : null == E ? void 0 : E.highlightColor,
        action: (0, r.jsx)(a.zxk, {
            look: a.zxk.Looks.LINK,
            size: a.zxk.Sizes.MIN,
            color: a.zxk.Colors.LINK,
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
                    className: s()(p.groupCollapsedRow, _ === e.value && p.selected),
                    selected: _ === e.value,
                    action: _ === e.value ? (0, r.jsx)(c.Z, { className: p.radioItem }) : (0, r.jsx)(o.Z, { className: p.radioItem }),
                    onClick: () => S(e),
                    disabled: e.disabled
                },
                ''.concat(e.title, '-').concat(t)
            )
        )
    });
}
