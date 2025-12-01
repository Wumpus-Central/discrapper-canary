n.d(t, { Z: () => h }), n(388685);
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
    p = n(594174),
    _ = n(726985),
    m = n(981631);
function h(e) {
    let { isRedesign: t = !1 } = e,
        n = (0, o.O)(),
        h = i.useRef(!1),
        g = (0, a.e7)([f.Z], () => f.Z.getVideoDeviceId()),
        [E, b] = i.useState((0, l.P)(p.default.getCurrentUser())),
        y = i.useRef(E);
    i.useEffect(
        () => () => {
            h.current && (0, c.Up)(y.current);
        },
        [],
    );
    let O = (e) => {
        (h.current = !0), (y.current = e), b(e), (0, u.wG)(e, { location: n.location }).catch(m.dG4);
    };
    return (0, r.jsx)(s.F, {
        setting: _.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND,
        children: (0, r.jsx)(d.Z, {
            selectedBackgroundOption: E,
            onSelectBackgroundOption: O,
            currentDeviceId: g,
            responsiveBackgroundOptions: t,
        }),
    });
}
