i.d(t, { q: () => I });
var n = i(627968),
    l = i(64700),
    s = i(311907),
    r = i(212245),
    a = i(419954),
    u = i(329551),
    o = i(987384),
    d = i(413339),
    _ = i(952572),
    T = i(520999),
    A = i(430452),
    S = i(287809),
    E = i(780964),
    c = i(652215),
    g = i(985018);
let I = (0, a.E2)(E.X.CAMERA_BACKGROUND_SETTING, {
    useSearchTerms: () => [g.intl.string(g.t.lZTUPs)],
    usePredicate: _.A,
    Component: function () {
        let e = (0, r.p)(),
            t = l.useRef(!1),
            i = (0, s.bG)([A.Ay], () => A.Ay.getVideoDeviceId()),
            [a, _] = l.useState((0, u.i)(S.default.getCurrentUser())),
            E = l.useRef(a);
        return (
            l.useEffect(
                () => () => {
                    t.current && (0, o._C)(E.current);
                },
                [],
            ),
            (0, n.jsx)(T.A, {
                selectedBackgroundOption: a,
                onSelectBackgroundOption: (i) => {
                    (t.current = !0), (E.current = i), _(i), (0, d.gB)(i, { location: e.location }).catch(c.tEg);
                },
                currentDeviceId: i,
            })
        );
    },
});
