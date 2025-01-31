n.d(t, { Z: () => x }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(2052),
    a = n(921801),
    o = n(932724),
    c = n(716161),
    d = n(672339),
    u = n(938117),
    m = n(131951),
    h = n(594174),
    g = n(726985),
    _ = n(981631);
function x() {
    let e = (0, l.O)(),
        t = s.useRef(!1),
        n = (0, r.e7)([m.Z], () => m.Z.getVideoDeviceId()),
        [x, p] = s.useState((0, o.P)(h.default.getCurrentUser())),
        E = s.useRef(x);
    return (
        s.useEffect(
            () => () => {
                t.current && (0, c.Up)(E.current);
            },
            []
        ),
        (0, i.jsx)(a.F, {
            setting: g.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND,
            children: (0, i.jsx)(u.Z, {
                selectedBackgroundOption: x,
                onSelectBackgroundOption: (n) => {
                    (t.current = !0), (E.current = n), p(n), (0, d.wG)(n, { location: e.location }).catch(_.dG4);
                },
                currentDeviceId: n,
                smallerBackgroundOptions: !1
            })
        })
    );
}
