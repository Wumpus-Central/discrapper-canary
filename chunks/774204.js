i.d(t, {
    q: () => I,
}),
    i(896048);
var n = i(627968),
    l = i(64700),
    s = i(311907),
    r = i(212245),
    a = i(419954),
    u = i(329551),
    o = i(987384),
    d = i(413339),
    T = i(952572),
    c = i(520999),
    A = i(430452),
    S = i(287809),
    _ = i(780964),
    E = i(652215),
    g = i(985018);
let I = (0, a.E2)(_.X.CAMERA_BACKGROUND_SETTING, {
    useSearchTerms: () => [g.intl.string(g.t.lZTUPs)],
    usePredicate: T.A,
    Component: function () {
        let e = (0, r.p)(),
            t = l.useRef(!1),
            i = (0, s.bG)([A.A], () => A.A.getVideoDeviceId()),
            [a, T] = l.useState((0, u.i)(S.default.getCurrentUser())),
            _ = l.useRef(a);
        return (
            l.useEffect(
                () => () => {
                    t.current && (0, o._C)(_.current);
                },
                [],
            ),
            (0, n.jsx)(c.A, {
                selectedBackgroundOption: a,
                onSelectBackgroundOption: (i) => {
                    (t.current = !0),
                        (_.current = i),
                        T(i),
                        (0, d.gB)(i, {
                            location: e.location,
                        }).catch(E.tEg);
                },
                currentDeviceId: i,
            })
        );
    },
});
