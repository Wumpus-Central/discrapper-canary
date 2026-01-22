n.d(t, {
    A: () => m,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(212245),
    o = n(195043),
    l = n(329551),
    c = n(987384),
    u = n(413339),
    d = n(520999),
    f = n(430452),
    p = n(287809),
    _ = n(531525),
    h = n(652215);

function m(e) {
    let { isRedesign: t = !1 } = e,
        n = (0, s.p)(),
        m = i.useRef(!1),
        g = (0, a.bG)([f.A], () => f.A.getVideoDeviceId()),
        [E, b] = i.useState((0, l.i)(p.default.getCurrentUser())),
        y = i.useRef(E);
    i.useEffect(
        () => () => {
            m.current && (0, c._C)(y.current);
        },
        [],
    );
    let O = (e) => {
        (m.current = !0),
            (y.current = e),
            b(e),
            (0, u.gB)(e, {
                location: n.location,
            }).catch(h.tEg);
    };
    return (0, r.jsx)(o.x, {
        setting: _.H.VOICE_AND_VIDEO_VIDEO_BACKGROUND,
        children: (0, r.jsx)(d.A, {
            selectedBackgroundOption: E,
            onSelectBackgroundOption: O,
            currentDeviceId: g,
            responsiveBackgroundOptions: t,
        }),
    });
}
