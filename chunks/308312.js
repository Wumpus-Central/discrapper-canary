n.d(t, { q: () => p });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(212245),
    r = n(419954),
    o = n(329551),
    d = n(987384),
    c = n(413339),
    u = n(952572),
    m = n(520999),
    g = n(430452),
    _ = n(287809),
    x = n(780964),
    A = n(652215),
    h = n(985018);
let p = (0, r.E2)(x.X.CAMERA_BACKGROUND_SETTING, {
    useSearchTerms: () => [h.intl.string(h.t.lZTUPs)],
    usePredicate: u.A,
    Component: function () {
        let e = (0, a.p)(),
            t = s.useRef(!1),
            n = (0, l.bG)([g.Ay], () => g.Ay.getVideoDeviceId()),
            [r, u] = s.useState((0, o.i)(_.default.getCurrentUser())),
            x = s.useRef(r);
        return (
            s.useEffect(
                () => () => {
                    t.current && (0, d._C)(x.current);
                },
                [],
            ),
            (0, i.jsx)(m.A, {
                selectedBackgroundOption: r,
                onSelectBackgroundOption: (n) => {
                    (t.current = !0), (x.current = n), u(n), (0, c.gB)(n, { location: e.location }).catch(A.tEg);
                },
                currentDeviceId: n,
            })
        );
    },
});
