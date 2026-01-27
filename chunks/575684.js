n.d(t, {
    A: () => A,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(212245),
    a = n(195043),
    o = n(329551),
    c = n(987384),
    d = n(413339),
    u = n(520999),
    _ = n(430452),
    p = n(287809),
    m = n(531525),
    g = n(652215);

function A(e) {
    let { isRedesign: t = !1 } = e,
        n = (0, s.p)(),
        A = i.useRef(!1),
        f = (0, l.bG)([_.A], () => _.A.getVideoDeviceId()),
        [h, b] = i.useState((0, o.i)(p.default.getCurrentUser())),
        E = i.useRef(h);
    return (
        i.useEffect(
            () => () => {
                A.current && (0, c._C)(E.current);
            },
            [],
        ),
        (0, r.jsx)(a.x, {
            setting: m.H.VOICE_AND_VIDEO_VIDEO_BACKGROUND,
            children: (0, r.jsx)(u.A, {
                selectedBackgroundOption: h,
                onSelectBackgroundOption: (e) => {
                    (A.current = !0),
                        (E.current = e),
                        b(e),
                        (0, d.gB)(e, {
                            location: n.location,
                        }).catch(g.tEg);
                },
                currentDeviceId: f,
                responsiveBackgroundOptions: t,
            }),
        })
    );
}
