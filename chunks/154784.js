(n.d(t, { Z: () => f }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(442837),
    a = n(2052),
    l = n(921801),
    o = n(932724),
    c = n(716161),
    d = n(672339),
    u = n(938117),
    m = n(131951),
    p = n(594174),
    g = n(726985),
    h = n(981631);
function f() {
    let e = (0, a.O)(),
        t = r.useRef(!1),
        n = (0, s.e7)([m.Z], () => m.Z.getVideoDeviceId()),
        [f, b] = r.useState((0, o.P)(p.default.getCurrentUser())),
        x = r.useRef(f);
    return (
        r.useEffect(
            () => () => {
                t.current && (0, c.Up)(x.current);
            },
            []
        ),
        (0, i.jsx)(l.F, {
            setting: g.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND,
            children: (0, i.jsx)(u.Z, {
                selectedBackgroundOption: f,
                onSelectBackgroundOption: (n) => {
                    ((t.current = !0), (x.current = n), b(n), (0, d.wG)(n, { location: e.location }).catch(h.dG4));
                },
                currentDeviceId: n,
                smallerBackgroundOptions: !1
            })
        })
    );
}
