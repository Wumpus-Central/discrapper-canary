n.d(t, { Z: () => c });
var r = n(255367),
    a = n(73800),
    i = n(481060),
    o = n(600164),
    l = n(388032),
    s = n(130883);
let c = (e) => {
    let t,
        { button: n, submitting: c, disableNext: d, onClick: u, canNavigateBack: m, onBackClicked: p, isModeratorReport: _ } = e,
        g = a.useRef(null),
        b = null != n && 'cancel' !== n.type,
        x = m && (null == n ? void 0 : n.type) !== 'done',
        h = b || x;
    if (
        (a.useEffect(() => {
            if ((null == n ? void 0 : n.type) === 'submit' || (null == n ? void 0 : n.type) === 'done') {
                var e;
                null == (e = g.current) || e.focus();
            }
        }, [null == n ? void 0 : n.type]),
        !h)
    )
        return null;
    let f = l.intl.string(l.t.i4jeWV);
    return (
        (null == n ? void 0 : n.type) === 'submit' ? ((t = 'critical-primary'), (f = _ ? l.intl.string(s.default.ZUyreX) : l.intl.string(l.t['G+vU8/']))) : (null == n ? void 0 : n.type) === 'next' ? (f = l.intl.string(l.t.PDTjLC)) : (null == n ? void 0 : n.type) === 'cancel' && ((f = l.intl.string(l.t['ETE/oK'])), (t = 'secondary')),
        (0, r.jsx)(i.mzw, {
            'data-migration-pending': !0,
            direction: o.Z.Direction.HORIZONTAL,
            children: (0, r.jsxs)(i.hE2, {
                fullWidth: x && b,
                children: [
                    x &&
                        (0, r.jsx)(i.zxk, {
                            onClick: p,
                            variant: 'secondary',
                            disabled: c,
                            text: l.intl.string(l.t['13/7kZ'])
                        }),
                    b &&
                        (0, r.jsx)(i.zxk, {
                            onClick: () => {
                                null != n && u(n);
                            },
                            variant: t,
                            disabled: c || d,
                            buttonRef: g,
                            text: f
                        })
                ]
            })
        })
    );
};
