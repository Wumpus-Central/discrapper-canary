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
function m(e) {
    let { isRedesign: t = !1 } = e,
        n = (0, o.O)(),
        m = i.useRef(!1),
        g = (0, a.e7)([f.Z], () => f.Z.getVideoDeviceId()),
        [E, b] = i.useState((0, l.P)(_.default.getCurrentUser())),
        y = i.useRef(E);
    i.useEffect(
        () => () => {
            m.current && (0, c.Up)(y.current);
        },
        [],
    );
    let O = (e) => {
        (m.current = !0), (y.current = e), b(e), (0, u.wG)(e, { location: n.location }).catch(h.dG4);
    };
    return (0, r.jsx)(s.F, {
        setting: p.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND,
        children: (0, r.jsx)(d.Z, {
            selectedBackgroundOption: E,
            onSelectBackgroundOption: O,
            currentDeviceId: g,
            responsiveBackgroundOptions: t,
        }),
    });
}
