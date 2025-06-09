n.d(t, { Z: () => d });
var r = n(255367),
    a = n(73800),
    i = n(481060),
    l = n(600164),
    o = n(388032),
    s = n(130883),
    c = n(18537);
let d = (e) => {
    let t,
        { button: n, submitting: d, disableNext: u, onClick: m, canNavigateBack: p, onBackClicked: _, isModeratorReport: g } = e,
        b = a.useRef(null),
        x = null != n && 'cancel' !== n.type,
        h = p && (null == n ? void 0 : n.type) !== 'done',
        f = x || h;
    if (
        (a.useEffect(() => {
            if ((null == n ? void 0 : n.type) === 'submit' || (null == n ? void 0 : n.type) === 'done') {
                var e;
                null == (e = b.current) || e.focus();
            }
        }, [null == n ? void 0 : n.type]),
        !f)
    )
        return null;
    let v = o.intl.string(o.t.i4jeWV);
    return (
        (null == n ? void 0 : n.type) === 'submit' ? ((t = i.zxk.Colors.RED), (v = g ? o.intl.string(s.default.ZUyreX) : o.intl.string(o.t['G+vU8/']))) : (null == n ? void 0 : n.type) === 'next' ? (v = o.intl.string(o.t.PDTjLC)) : (null == n ? void 0 : n.type) === 'cancel' && ((v = o.intl.string(o.t['ETE/oK'])), (t = i.zxk.Colors.TRANSPARENT)),
        (0, r.jsxs)(i.mzw, {
            direction: l.Z.Direction.HORIZONTAL,
            children: [
                h &&
                    (0, r.jsx)(i.zxk, {
                        onClick: _,
                        color: i.zxk.Colors.TRANSPARENT,
                        disabled: d,
                        children: o.intl.string(o.t['13/7kZ'])
                    }),
                x &&
                    (0, r.jsx)(i.zxk, {
                        onClick: () => {
                            null != n && m(n);
                        },
                        color: t,
                        className: c.actionButton,
                        disabled: d || u,
                        buttonRef: b,
                        children: v
                    })
            ]
        })
    );
};
