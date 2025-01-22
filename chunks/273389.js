var i = r(200651),
    a = r(192379),
    o = r(481060),
    s = r(600164),
    l = r(388032),
    u = r(798828);
let c = (e) => {
    let n,
        { button: r, submitting: c, disableNext: d, onClick: f, canNavigateBack: p, onBackClicked: h } = e,
        _ = a.useRef(null),
        m = null != r && 'cancel' !== r.type,
        g = p && (null == r ? void 0 : r.type) !== 'done',
        E = m || g;
    if (
        (a.useEffect(() => {
            if ((null == r ? void 0 : r.type) === 'submit' || (null == r ? void 0 : r.type) === 'done') {
                var e;
                null === (e = _.current) || void 0 === e || e.focus();
            }
        }, [null == r ? void 0 : r.type]),
        !E)
    )
        return null;
    let v = () => {
            if (null != r) f(r);
        },
        y = l.intl.string(l.t.i4jeWV);
    return (
        (null == r ? void 0 : r.type) === 'submit' ? ((y = l.intl.string(l.t['G+vU8/'])), (n = o.Button.Colors.RED)) : (null == r ? void 0 : r.type) === 'next' ? (y = l.intl.string(l.t.PDTjLC)) : (null == r ? void 0 : r.type) === 'cancel' && ((y = l.intl.string(l.t['ETE/oK'])), (n = o.Button.Colors.TRANSPARENT)),
        (0, i.jsxs)(o.ModalFooter, {
            direction: s.Z.Direction.HORIZONTAL,
            children: [
                g &&
                    (0, i.jsx)(o.Button, {
                        onClick: h,
                        color: o.Button.Colors.TRANSPARENT,
                        disabled: c,
                        children: l.intl.string(l.t['13/7kZ'])
                    }),
                m &&
                    (0, i.jsx)(o.Button, {
                        onClick: v,
                        color: n,
                        className: u.actionButton,
                        disabled: c || d,
                        buttonRef: _,
                        children: y
                    })
            ]
        })
    );
};
n.Z = c;
