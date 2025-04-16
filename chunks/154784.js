n.d(t, { Z: () => f }), n(388685);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(2052),
    l = n(921801),
    o = n(932724),
    c = n(716161),
    d = n(672339),
    u = n(938117),
    m = n(131951),
    g = n(594174),
    p = n(726985),
    h = n(981631);
function f() {
    let e = (0, a.O)(),
        t = i.useRef(!1),
        n = (0, s.e7)([m.Z], () => m.Z.getVideoDeviceId()),
        [f, _] = i.useState((0, o.P)(g.default.getCurrentUser())),
        b = i.useRef(f);
    return (
        i.useEffect(
            () => () => {
                t.current && (0, c.Up)(b.current);
            },
            []
        ),
        (0, r.jsx)(l.F, {
            setting: p.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND,
            children: (0, r.jsx)(u.Z, {
                selectedBackgroundOption: f,
                onSelectBackgroundOption: (n) => {
                    (t.current = !0), (b.current = n), _(n), (0, d.wG)(n, { location: e.location }).catch(h.dG4);
                },
                currentDeviceId: n,
                smallerBackgroundOptions: !1
            })
        })
    );
}
