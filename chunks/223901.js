t.d(a, { default: () => d });
var n = t(255367),
    r = t(73800),
    o = t(481060),
    c = t(91159),
    s = t(593130),
    _ = t(388032),
    i = t(137642);
function d(e) {
    let { channel: a, onClose: t, transitionState: d } = e;
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
                channel: a,
                onClose: t
            })
        })
    );
}
