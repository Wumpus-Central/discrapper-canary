n.d(t, { Z: () => c });
var r = n(255367),
    a = n(73800),
    i = n(481060),
    l = n(600164),
    o = n(388032),
    s = n(720847);
let c = (e) => {
    let t,
        { button: n, submitting: c, disableNext: d, onClick: u, canNavigateBack: m, onBackClicked: p } = e,
        _ = a.useRef(null),
        g = null != n && 'cancel' !== n.type,
        b = m && (null == n ? void 0 : n.type) !== 'done',
        x = g || b;
    if (
        (a.useEffect(() => {
            if ((null == n ? void 0 : n.type) === 'submit' || (null == n ? void 0 : n.type) === 'done') {
                var e;
                null == (e = _.current) || e.focus();
            }
        }, [null == n ? void 0 : n.type]),
        !x)
    )
        return null;
    let h = o.intl.string(o.t.i4jeWV);
    return (
        (null == n ? void 0 : n.type) === 'submit' ? ((h = o.intl.string(o.t['G+vU8/'])), (t = i.zxk.Colors.RED)) : (null == n ? void 0 : n.type) === 'next' ? (h = o.intl.string(o.t.PDTjLC)) : (null == n ? void 0 : n.type) === 'cancel' && ((h = o.intl.string(o.t['ETE/oK'])), (t = i.zxk.Colors.TRANSPARENT)),
        (0, r.jsxs)(i.mzw, {
            direction: l.Z.Direction.HORIZONTAL,
            children: [
                b &&
                    (0, r.jsx)(i.zxk, {
                        onClick: p,
                        color: i.zxk.Colors.TRANSPARENT,
                        disabled: c,
                        children: o.intl.string(o.t['13/7kZ'])
                    }),
                g &&
                    (0, r.jsx)(i.zxk, {
                        onClick: () => {
                            null != n && u(n);
                        },
                        color: t,
                        className: s.actionButton,
                        disabled: c || d,
                        buttonRef: _,
                        children: h
                    })
            ]
        })
    );
};
