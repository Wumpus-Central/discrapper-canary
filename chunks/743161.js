e.r(t);
var o = e(200651),
    l = e(192379),
    s = e(442837),
    c = e(481060),
    i = e(541099),
    a = e(827498),
    u = e(421591),
    r = e(314734),
    d = e(388032),
    h = e(380165);
t.default = l.memo(function (n) {
    let { context: t, ...e } = n,
        f = (0, s.e7)([i.Z], () => i.Z.shouldShowModal());
    return (
        l.useEffect(() => {
            !f && (0, c.closeModalInAllContexts)(r.e9);
        }),
        (0, o.jsx)('span', {
            style: r.u$,
            children: (0, o.jsx)(c.ModalRoot, {
                className: h.root,
                'aria-label': d.intl.string(d.t.shUONj),
                size: c.ModalSize.DYNAMIC,
                ...e,
                children: (0, o.jsx)(u.Z, {
                    context: t,
                    entrypoint: a._b.VOICE
                })
            })
        })
    );
});
