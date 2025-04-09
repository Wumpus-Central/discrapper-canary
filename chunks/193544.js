n.d(t, { Z: () => f }), n(388685), n(953529);
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
function f(e) {
    var t, n, s;
    let { changeTitle: f, value: h, options: b, className: x, onChange: j } = e,
        [N, v] = i.useState(h),
        [_, y] = i.useState(!1),
        [O, C] = i.useState(!1),
        I = i.useRef(null);
    i.useEffect(() => {
        v(h);
    }, [h]),
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
                (C(!0),
                null == j || j(e),
                v(e.value),
                (I.current = setTimeout(() => {
                    C(!1), y(!1);
                }, 1000)));
        };
    return (0, r.jsx)(u.Z, {
        title: _ ? f : null != (t = null == E ? void 0 : E.title) ? t : f,
        description: _ ? '('.concat(null != (n = null == E ? void 0 : E.title) ? n : g.NW.string(g.t.PoWNfX), ')') : null != (s = null == E ? void 0 : E.description) ? s : '',
        highlightColor: _ ? d.q.NONE : null == E ? void 0 : E.highlightColor,
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
