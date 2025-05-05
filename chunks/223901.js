a.d(t, { default: () => d });
var n = a(255367),
    r = a(73800),
    c = a(481060),
    o = a(91159),
    s = a(593130),
    _ = a(388032),
    i = a(137642);
function d(e) {
    let { channel: t, onClose: a, transitionState: d } = e;
    return (
        r.useEffect(() => {
            (0, o.U4)();
        }, []),
        (0, n.jsx)(c.Y0X, {
            className: i.modal,
            transitionState: d,
            'aria-label': _.intl.string(_.t.B2panJ),
            size: c.CgR.DYNAMIC,
            children: (0, n.jsx)(s.Z, {
                className: i.browser,
                channel: t,
                onClose: a
            })
        })
    );
}
