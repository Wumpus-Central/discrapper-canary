a.d(t, { default: () => d });
var n = a(255367),
    r = a(73800),
    o = a(481060),
    c = a(91159),
    s = a(593130),
    _ = a(388032),
    i = a(137642);
function d(e) {
    let { channel: t, onClose: a, transitionState: d } = e;
    return (
        r.useEffect(() => {
            (0, c.U4)();
        }, []),
        (0, n.jsx)(o.Y0X, {
            className: i.modal,
            transitionState: d,
            'aria-label': _.intl.string(_.t.B2panJ),
            size: o.CgR.DYNAMIC,
            parentComponent: 'ThreadBrowserModal',
            children: (0, n.jsx)(s.Z, {
                className: i.browser,
                channel: t,
                onClose: a
            })
        })
    );
}
