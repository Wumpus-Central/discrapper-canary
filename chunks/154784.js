n.d(t, {
    Z: function () {
        return x;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    a = n(2052),
    l = n(921801),
    o = n(932724),
    c = n(716161),
    d = n(672339),
    u = n(938117),
    m = n(131951),
    g = n(594174),
    h = n(726985),
    p = n(981631);
function x() {
    let e = (0, a.O)(),
        t = r.useRef(!1),
        n = (0, s.e7)([m.Z], () => m.Z.getVideoDeviceId()),
        [x, f] = r.useState((0, o.P)(g.default.getCurrentUser())),
        _ = r.useRef(x);
    return (
        r.useEffect(
            () => () => {
                t.current && (0, c.Up)(_.current);
            },
            []
        ),
        (0, i.jsx)(l.F, {
            setting: h.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND,
            children: (0, i.jsx)(u.Z, {
                selectedBackgroundOption: x,
                onSelectBackgroundOption: (n) => {
                    (t.current = !0), (_.current = n), f(n), (0, d.wG)(n, { location: e.location }).catch(p.dG4);
                },
                currentDeviceId: n,
                smallerBackgroundOptions: !1
            })
        })
    );
}
