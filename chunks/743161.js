e.r(t);
var o = e(200651),
    s = e(192379),
    l = e(442837),
    u = e(481060),
    a = e(541099),
    c = e(827498),
    i = e(421591),
    r = e(314734),
    d = e(388032),
    h = e(380165);
t.default = s.memo(function (n) {
    let { channel: t, ...e } = n,
        f = (0, l.e7)([a.Z], () => a.Z.shouldShowModal());
    return (
        s.useEffect(() => {
            !f && (0, u.closeModalInAllContexts)(r.e9);
        }),
        (0, o.jsx)('span', {
            style: r.u$,
            children: (0, o.jsx)(u.ModalRoot, {
                className: h.root,
                'aria-label': d.intl.string(d.t.shUONj),
                size: u.ModalSize.DYNAMIC,
                ...e,
                children: (0, o.jsx)(i.Z, {
                    channel: t,
                    entrypoint: c._b.VOICE
                })
            })
        })
    );
});
