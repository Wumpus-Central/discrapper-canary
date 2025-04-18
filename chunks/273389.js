n.d(t, { Z: () => c });
var r = n(200651),
    l = n(192379),
    i = n(481060),
    a = n(600164),
    o = n(388032),
    s = n(720847);
let c = (e) => {
    let t,
        { button: n, submitting: c, disableNext: d, onClick: u, canNavigateBack: m, onBackClicked: x } = e,
        p = l.useRef(null),
        b = null != n && 'cancel' !== n.type,
        h = m && (null == n ? void 0 : n.type) !== 'done',
        _ = b || h;
    if (
        (l.useEffect(() => {
            if ((null == n ? void 0 : n.type) === 'submit' || (null == n ? void 0 : n.type) === 'done') {
                var e;
                null == (e = p.current) || e.focus();
            }
        }, [null == n ? void 0 : n.type]),
        !_)
    )
        return null;
    let f = o.NW.string(o.t.i4jeWV);
    return (
        (null == n ? void 0 : n.type) === 'submit' ? ((f = o.NW.string(o.t['G+vU8/'])), (t = i.zxk.Colors.RED)) : (null == n ? void 0 : n.type) === 'next' ? (f = o.NW.string(o.t.PDTjLC)) : (null == n ? void 0 : n.type) === 'cancel' && ((f = o.NW.string(o.t['ETE/oK'])), (t = i.zxk.Colors.TRANSPARENT)),
        (0, r.jsxs)(i.mzw, {
            direction: a.Z.Direction.HORIZONTAL,
            children: [
                h &&
                    (0, r.jsx)(i.zxk, {
                        onClick: x,
                        color: i.zxk.Colors.TRANSPARENT,
                        disabled: c,
                        children: o.NW.string(o.t['13/7kZ'])
                    }),
                b &&
                    (0, r.jsx)(i.zxk, {
                        onClick: () => {
                            null != n && u(n);
                        },
                        color: t,
                        className: s.actionButton,
                        disabled: c || d,
                        buttonRef: p,
                        children: f
                    })
            ]
        })
    );
};
