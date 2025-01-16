t.r(a),
    t.d(a, {
        default: function () {
            return d;
        }
    });
var n = t(200651),
    c = t(192379),
    r = t(481060),
    o = t(91159),
    s = t(593130),
    i = t(388032),
    b = t(826731);
function d(e) {
    let { channel: a, onClose: t, transitionState: d } = e;
    return (
        c.useEffect(() => {
            (0, o.U4)();
        }, []),
        (0, n.jsx)(r.ModalRoot, {
            className: b.modal,
            transitionState: d,
            'aria-label': i.intl.string(i.t.B2panJ),
            size: r.ModalSize.DYNAMIC,
            children: (0, n.jsx)(s.Z, {
                className: b.browser,
                channel: a,
                onClose: t
            })
        })
    );
}
