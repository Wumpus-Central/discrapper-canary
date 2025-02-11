t.d(n, { default: () => u });
var o = t(200651),
    a = t(192379),
    r = t(442837),
    i = t(481060),
    c = t(541099),
    l = t(827498),
    d = t(421591),
    _ = t(314734),
    s = t(388032),
    p = t(392243);
let u = a.memo(function (e) {
    let { context: n, ...t } = e,
        u = (0, r.e7)([c.Z], () => c.Z.shouldShowModal());
    return (
        a.useEffect(() => {
            u || (0, i.Fvk)(_.e9);
        }),
        (0, o.jsx)('span', {
            style: _.u$,
            children: (0, o.jsx)(i.Y0X, {
                className: p.root,
                'aria-label': s.intl.string(s.t.shUONj),
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
