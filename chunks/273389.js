var i = r(200651),
    a = r(192379),
    s = r(481060),
    o = r(600164),
    l = r(388032),
    u = r(798828);
let c = (e) => {
    let n,
        { button: r, submitting: c, disableNext: d, onClick: f, canNavigateBack: _, onBackClicked: h } = e,
        p = a.useRef(null),
        m = null != r && 'cancel' !== r.type,
        g = _ && (null == r ? void 0 : r.type) !== 'done',
        E = m || g;
    if (
        (a.useEffect(() => {
            if ((null == r ? void 0 : r.type) === 'submit' || (null == r ? void 0 : r.type) === 'done') {
                var e;
                null === (e = p.current) || void 0 === e || e.focus();
            }
        }, [null == r ? void 0 : r.type]),
        !E)
    )
        return null;
    let v = () => {
            if (null != r) f(r);
        },
        I = l.intl.string(l.t.i4jeWV);
    return (
        (null == r ? void 0 : r.type) === 'submit' ? ((I = l.intl.string(l.t['G+vU8/'])), (n = s.Button.Colors.RED)) : (null == r ? void 0 : r.type) === 'next' ? (I = l.intl.string(l.t.PDTjLC)) : (null == r ? void 0 : r.type) === 'cancel' && ((I = l.intl.string(l.t['ETE/oK'])), (n = s.Button.Colors.TRANSPARENT)),
        (0, i.jsxs)(s.ModalFooter, {
            direction: o.Z.Direction.HORIZONTAL,
            children: [
                g &&
                    (0, i.jsx)(s.Button, {
                        onClick: h,
                        color: s.Button.Colors.TRANSPARENT,
                        disabled: c,
                        children: l.intl.string(l.t['13/7kZ'])
                    }),
                m &&
                    (0, i.jsx)(s.Button, {
                        onClick: v,
                        color: n,
                        className: u.actionButton,
                        disabled: c || d,
                        buttonRef: p,
                        children: I
                    })
            ]
        })
    );
};
n.Z = c;
