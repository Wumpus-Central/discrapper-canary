n.d(t, { Z: () => _ }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(442837),
    r = n(2052),
    a = n(921801),
    o = n(932724),
    c = n(716161),
    d = n(672339),
    u = n(938117),
    h = n(131951),
    m = n(594174),
    g = n(726985),
    x = n(981631);
function _() {
    let e = (0, r.O)(),
        t = s.useRef(!1),
        n = (0, l.e7)([h.Z], () => h.Z.getVideoDeviceId()),
        [_, p] = s.useState((0, o.P)(m.default.getCurrentUser())),
        E = s.useRef(_);
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
                selectedBackgroundOption: _,
                onSelectBackgroundOption: (n) => {
                    (t.current = !0), (E.current = n), p(n), (0, d.wG)(n, { location: e.location }).catch(x.dG4);
                },
                currentDeviceId: n,
                smallerBackgroundOptions: !1
            })
        })
    );
}
