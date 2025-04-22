e.d(s, { default: () => d });
var t = e(200651),
    n = e(192379),
    r = e(481060),
    i = e(91159),
    o = e(593130),
    c = e(388032),
    l = e(137642);
function d(a) {
    let { channel: s, onClose: e, transitionState: d } = a;
    return (
        n.useEffect(() => {
            (0, i.U4)();
        }, []),
        (0, t.jsx)(r.Y0X, {
            className: l.modal,
            transitionState: d,
            'aria-label': c.intl.string(c.t.B2panJ),
            size: r.CgR.DYNAMIC,
            children: (0, t.jsx)(o.Z, {
                className: l.browser,
                channel: s,
                onClose: e
            })
        })
    );
}
