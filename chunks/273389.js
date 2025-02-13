n.d(t, { Z: () => d });
var l = n(200651),
    i = n(192379),
    r = n(481060),
    a = n(600164),
    s = n(388032),
    o = n(435450);
let d = (e) => {
    let t,
        { button: n, submitting: d, disableNext: c, onClick: u, canNavigateBack: m, onBackClicked: x } = e,
        _ = i.useRef(null),
        h = null != n && 'cancel' !== n.type,
        v = m && (null == n ? void 0 : n.type) !== 'done',
        g = h || v;
    if (
        (i.useEffect(() => {
            if ((null == n ? void 0 : n.type) === 'submit' || (null == n ? void 0 : n.type) === 'done') {
                var e;
                null === (e = _.current) || void 0 === e || e.focus();
            }
        }, [null == n ? void 0 : n.type]),
        !g)
    )
        return null;
    let p = s.intl.string(s.t.i4jeWV);
    return (
        (null == n ? void 0 : n.type) === 'submit' ? ((p = s.intl.string(s.t['G+vU8/'])), (t = r.zxk.Colors.RED)) : (null == n ? void 0 : n.type) === 'next' ? (p = s.intl.string(s.t.PDTjLC)) : (null == n ? void 0 : n.type) === 'cancel' && ((p = s.intl.string(s.t['ETE/oK'])), (t = r.zxk.Colors.TRANSPARENT)),
        (0, l.jsxs)(r.mzw, {
            direction: a.Z.Direction.HORIZONTAL,
            children: [
                v &&
                    (0, l.jsx)(r.zxk, {
                        onClick: x,
                        color: r.zxk.Colors.TRANSPARENT,
                        disabled: d,
                        children: s.intl.string(s.t['13/7kZ'])
                    }),
                h &&
                    (0, l.jsx)(r.zxk, {
                        onClick: () => {
                            null != n && u(n);
                        },
                        color: t,
                        className: o.actionButton,
                        disabled: d || c,
                        buttonRef: _,
                        children: p
                    })
            ]
        })
    );
};
