s.d(e, { default: () => d });
var n = s(255367),
    r = s(73800),
    t = s(481060),
    o = s(91159),
    i = s(593130),
    l = s(388032),
    c = s(137642);
function d(a) {
    let { channel: e, onClose: s, transitionState: d } = a;
    return (
        r.useEffect(() => {
            (0, o.U4)();
        }, []),
        (0, n.jsx)(t.Y0X, {
            className: c.modal,
            transitionState: d,
            'aria-label': l.intl.string(l.t.B2panJ),
            size: t.CgR.DYNAMIC,
            parentComponent: 'ThreadBrowserModal',
            children: (0, n.jsx)(i.Z, {
                className: c.browser,
                channel: e,
                onClose: s
            })
        })
    );
}
