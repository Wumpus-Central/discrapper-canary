n.d(t, { Z: () => m }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(2052),
    s = n(921801),
    l = n(932724),
    c = n(716161),
    u = n(672339),
    d = n(938117),
    f = n(131951),
    _ = n(594174),
    p = n(726985),
    h = n(981631);
function m() {
    let e = (0, o.O)(),
        t = i.useRef(!1),
        n = (0, a.e7)([f.Z], () => f.Z.getVideoDeviceId()),
        [m, g] = i.useState((0, l.P)(_.default.getCurrentUser())),
        E = i.useRef(m);
    i.useEffect(
        () => () => {
            t.current && (0, c.Up)(E.current);
        },
        [],
    );
    let b = (n) => {
        (t.current = !0), (E.current = n), g(n), (0, u.wG)(n, { location: e.location }).catch(h.dG4);
    };
    return (0, r.jsx)(s.F, {
        setting: p.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND,
        children: (0, r.jsx)(d.Z, {
            selectedBackgroundOption: m,
            onSelectBackgroundOption: b,
            currentDeviceId: n,
            smallerBackgroundOptions: !1,
        }),
    });
}
