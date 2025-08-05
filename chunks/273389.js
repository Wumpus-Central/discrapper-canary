n.d(t, { Z: () => c });
var r = n(255367),
    l = n(73800),
    i = n(481060),
    a = n(600164),
    s = n(388032),
    o = n(130883);
let c = (e) => {
    let t,
        { button: n, submitting: c, disableNext: d, onClick: u, canNavigateBack: m, onBackClicked: p, isModeratorReport: g } = e,
        x = l.useRef(null),
        _ = null != n && 'cancel' !== n.type,
        b = m && (null == n ? void 0 : n.type) !== 'done',
        h = _ || b;
    if (
        (l.useEffect(() => {
            if ((null == n ? void 0 : n.type) === 'submit' || (null == n ? void 0 : n.type) === 'done') {
                var e;
                null == (e = x.current) || e.focus();
            }
        }, [null == n ? void 0 : n.type]),
        !h)
    )
        return null;
    let f = s.intl.string(s.t.i4jeWV);
    return (
        (null == n ? void 0 : n.type) === 'submit' ? ((t = 'critical-primary'), (f = g ? s.intl.string(o.default.ZUyreX) : s.intl.string(s.t['G+vU8/']))) : (null == n ? void 0 : n.type) === 'next' ? (f = s.intl.string(s.t.PDTjLC)) : (null == n ? void 0 : n.type) === 'cancel' && ((f = s.intl.string(s.t['ETE/oK'])), (t = 'secondary')),
        (0, r.jsx)(i.mzw, {
            'data-migration-pending': !0,
            direction: a.Z.Direction.HORIZONTAL,
            children: (0, r.jsxs)(i.hE2, {
                fullWidth: b && _,
                children: [
                    b &&
                        (0, r.jsx)(i.zxk, {
                            onClick: p,
                            variant: 'secondary',
                            disabled: c,
                            text: s.intl.string(s.t['13/7kZ'])
                        }),
                    _ &&
                        (0, r.jsx)(i.zxk, {
                            onClick: () => {
                                null != n && u(n);
                            },
                            variant: t,
                            disabled: c || d,
                            buttonRef: x,
                            text: f
                        })
                ]
            })
        })
    );
};
