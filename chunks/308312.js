n.d(t, { q: () => x });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(212245),
    r = n(419954),
    o = n(329551),
    d = n(987384),
    u = n(413339),
    c = n(952572),
    g = n(520999),
    m = n(430452),
    _ = n(287809),
    A = n(780964),
    h = n(652215),
    p = n(985018);
let x = (0, r.E2)(A.X.CAMERA_BACKGROUND_SETTING, {
    useSearchTerms: () => [p.intl.string(p.t.lZTUPs)],
    usePredicate: c.A,
    Component: function () {
        let e = (0, a.p)(),
            t = s.useRef(!1),
            n = (0, l.bG)([m.Ay], () => m.Ay.getVideoDeviceId()),
            [r, c] = s.useState((0, o.i)(_.default.getCurrentUser())),
            A = s.useRef(r);
        return (
            s.useEffect(
                () => () => {
                    t.current && (0, d._C)(A.current);
                },
                [],
            ),
            (0, i.jsx)(g.A, {
                selectedBackgroundOption: r,
                onSelectBackgroundOption: (n) => {
                    (t.current = !0), (A.current = n), c(n), (0, u.gB)(n, { location: e.location }).catch(h.tEg);
                },
                currentDeviceId: n,
            })
        );
    },
});
