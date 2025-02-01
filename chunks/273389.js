n.d(t, { Z: () => u });
var i = n(200651),
    r = n(192379),
    a = n(481060),
    s = n(600164),
    o = n(388032),
    l = n(798828);
let u = (e) => {
    let t,
        { button: n, submitting: u, disableNext: c, onClick: d, canNavigateBack: f, onBackClicked: _ } = e,
        p = r.useRef(null),
        h = null != n && 'cancel' !== n.type,
        m = f && (null == n ? void 0 : n.type) !== 'done',
        g = h || m;
    if (
        (r.useEffect(() => {
            if ((null == n ? void 0 : n.type) === 'submit' || (null == n ? void 0 : n.type) === 'done') {
                var e;
                null === (e = p.current) || void 0 === e || e.focus();
            }
        }, [null == n ? void 0 : n.type]),
        !g)
    )
        return null;
    let E = () => {
            null != n && d(n);
        },
        v = o.intl.string(o.t.i4jeWV);
    return (
        (null == n ? void 0 : n.type) === 'submit' ? ((v = o.intl.string(o.t['G+vU8/'])), (t = a.zxk.Colors.RED)) : (null == n ? void 0 : n.type) === 'next' ? (v = o.intl.string(o.t.PDTjLC)) : (null == n ? void 0 : n.type) === 'cancel' && ((v = o.intl.string(o.t['ETE/oK'])), (t = a.zxk.Colors.TRANSPARENT)),
        (0, i.jsxs)(a.mzw, {
            direction: s.Z.Direction.HORIZONTAL,
            children: [
                m &&
                    (0, i.jsx)(a.zxk, {
                        onClick: _,
                        color: a.zxk.Colors.TRANSPARENT,
                        disabled: u,
                        children: o.intl.string(o.t['13/7kZ'])
                    }),
                h &&
                    (0, i.jsx)(a.zxk, {
                        onClick: E,
                        color: t,
                        className: l.actionButton,
                        disabled: u || c,
                        buttonRef: p,
                        children: v
                    })
            ]
        })
    );
};
