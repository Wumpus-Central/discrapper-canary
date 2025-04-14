t.d(a, { default: () => d });
var n = t(200651),
    r = t(192379),
    c = t(481060),
    o = t(91159),
    s = t(593130),
    _ = t(388032),
    i = t(137642);
function d(e) {
    let { channel: a, onClose: t, transitionState: d } = e;
    return (
        r.useEffect(() => {
            (0, o.U4)();
        }, []),
        (0, n.jsx)(c.Y0X, {
            className: i.modal,
            transitionState: d,
            'aria-label': _.NW.string(_.t.B2panJ),
            size: c.CgR.DYNAMIC,
            children: (0, n.jsx)(s.Z, {
                className: i.browser,
                channel: a,
                onClose: t
            })
        })
    );
}
