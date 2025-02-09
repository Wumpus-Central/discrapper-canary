t.d(n, { default: () => p });
var o = t(200651),
    a = t(192379),
    r = t(442837),
    i = t(481060),
    c = t(541099),
    l = t(827498),
    d = t(421591),
    s = t(314734),
    _ = t(388032),
    u = t(392243);
let p = a.memo(function (e) {
    let { context: n, ...t } = e,
        p = (0, r.e7)([c.Z], () => c.Z.shouldShowModal());
    return (
        a.useEffect(() => {
            p || (0, i.Fvk)(s.e9);
        }),
        (0, o.jsx)('span', {
            style: s.u$,
            children: (0, o.jsx)(i.Y0X, {
                className: u.root,
                'aria-label': _.intl.string(_.t.shUONj),
                size: i.CgR.DYNAMIC,
                ...t,
                children: (0, o.jsx)(d.Z, {
                    context: n,
                    entrypoint: l._b.VOICE
                })
            })
        })
    );
});
