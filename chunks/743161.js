t.d(e, { default: () => u });
var o = t(200651),
    a = t(192379),
    r = t(442837),
    i = t(481060),
    c = t(541099),
    _ = t(827498),
    d = t(421591),
    l = t(314734),
    s = t(388032),
    p = t(380165);
let u = a.memo(function (n) {
    let { context: e, ...t } = n,
        u = (0, r.e7)([c.Z], () => c.Z.shouldShowModal());
    return (
        a.useEffect(() => {
            u || (0, i.Fvk)(l.e9);
        }),
        (0, o.jsx)('span', {
            style: l.u$,
            children: (0, o.jsx)(i.Y0X, {
                className: p.root,
                'aria-label': s.intl.string(s.t.shUONj),
                size: i.CgR.DYNAMIC,
                ...t,
                children: (0, o.jsx)(d.Z, {
                    context: e,
                    entrypoint: _._b.VOICE
                })
            })
        })
    );
});
