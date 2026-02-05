i.d(e, { q: () => I });
var n = i(627968),
    l = i(64700),
    s = i(311907),
    r = i(212245),
    a = i(419954),
    u = i(329551),
    o = i(987384),
    d = i(413339),
    T = i(952572),
    A = i(520999),
    S = i(430452),
    E = i(287809),
    g = i(780964),
    _ = i(652215),
    c = i(985018);
let I = (0, a.E2)(g.X.CAMERA_BACKGROUND_SETTING, {
    useSearchTerms: () => [c.intl.string(c.t.lZTUPs)],
    usePredicate: T.A,
    Component: function () {
        let t = (0, r.p)(),
            e = l.useRef(!1),
            i = (0, s.bG)([S.A], () => S.A.getVideoDeviceId()),
            [a, T] = l.useState((0, u.i)(E.default.getCurrentUser())),
            g = l.useRef(a);
        return (
            l.useEffect(
                () => () => {
                    e.current && (0, o._C)(g.current);
                },
                [],
            ),
            (0, n.jsx)(A.A, {
                selectedBackgroundOption: a,
                onSelectBackgroundOption: (i) => {
                    (e.current = !0), (g.current = i), T(i), (0, d.gB)(i, { location: t.location }).catch(_.tEg);
                },
                currentDeviceId: i,
            })
        );
    },
});
