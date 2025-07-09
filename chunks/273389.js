n.d(t, { Z: () => u });
var r = n(255367),
    a = n(73800),
    i = n(755721),
    l = n(481060),
    o = n(600164),
    s = n(388032),
    c = n(130883),
    d = n(18537);
let u = (e) => {
    let t,
        { button: n, submitting: u, disableNext: m, onClick: p, canNavigateBack: _, onBackClicked: g, isModeratorReport: b } = e,
        x = a.useRef(null),
        h = null != n && 'cancel' !== n.type,
        f = _ && (null == n ? void 0 : n.type) !== 'done',
        v = h || f;
    if (
        (a.useEffect(() => {
            if ((null == n ? void 0 : n.type) === 'submit' || (null == n ? void 0 : n.type) === 'done') {
                var e;
                null == (e = x.current) || e.focus();
            }
        }, [null == n ? void 0 : n.type]),
        !v)
    )
        return null;
    let j = s.intl.string(s.t.i4jeWV);
    return (
        (null == n ? void 0 : n.type) === 'submit' ? ((t = i.zx.Colors.RED), (j = b ? s.intl.string(c.default.ZUyreX) : s.intl.string(s.t['G+vU8/']))) : (null == n ? void 0 : n.type) === 'next' ? (j = s.intl.string(s.t.PDTjLC)) : (null == n ? void 0 : n.type) === 'cancel' && ((j = s.intl.string(s.t['ETE/oK'])), (t = i.zx.Colors.TRANSPARENT)),
        (0, r.jsxs)(l.mzw, {
            direction: o.Z.Direction.HORIZONTAL,
            children: [
                f &&
                    (0, r.jsx)(i.zx, {
                        onClick: g,
                        color: i.zx.Colors.TRANSPARENT,
                        disabled: u,
                        children: s.intl.string(s.t['13/7kZ'])
                    }),
                h &&
                    (0, r.jsx)(i.zx, {
                        onClick: () => {
                            null != n && p(n);
                        },
                        color: t,
                        className: d.actionButton,
                        disabled: u || m,
                        buttonRef: x,
                        children: j
                    })
            ]
        })
    );
};
