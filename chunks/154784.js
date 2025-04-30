n.d(t, { Z: () => f }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    l = n(2052),
    a = n(921801),
    o = n(932724),
    c = n(716161),
    d = n(672339),
    u = n(938117),
    m = n(131951),
    p = n(594174),
    g = n(726985),
    h = n(981631);
function f() {
    let e = (0, l.O)(),
        t = r.useRef(!1),
        n = (0, s.e7)([m.Z], () => m.Z.getVideoDeviceId()),
        [f, b] = r.useState((0, o.P)(p.default.getCurrentUser())),
        _ = r.useRef(f);
    return (
        r.useEffect(
            () => () => {
                t.current && (0, c.Up)(_.current);
            },
            []
        ),
        (0, i.jsx)(a.F, {
            setting: g.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND,
            children: (0, i.jsx)(u.Z, {
                selectedBackgroundOption: f,
                onSelectBackgroundOption: (n) => {
                    (t.current = !0), (_.current = n), b(n), (0, d.wG)(n, { location: e.location }).catch(h.dG4);
                },
                currentDeviceId: n,
                smallerBackgroundOptions: !1
            })
        })
    );
}
