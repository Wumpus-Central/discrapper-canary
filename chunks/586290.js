(n.d(t, {
    K: () => S,
    Z: () => b
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    l = n(512722),
    s = n.n(l),
    o = n(392711),
    a = n.n(o),
    c = n(856901),
    d = n(755721),
    u = n(481060),
    f = n(670863),
    m = n(72897),
    h = n(537135),
    p = n(176940),
    x = n(65154),
    g = n(388032),
    _ = n(729497),
    v = n(347226),
    j = n(20493);
function S(e, t, n) {
    var r;
    let i = t.find((t) => t.id === e);
    if (null == i) return null;
    let l = a().reduce(n, (e, t) => ((0, c.stringSimilarity)(i.name, t.name) > (0, c.stringSimilarity)(i.name, e.name) ? t : e));
    return null != (r = null == l ? void 0 : l.id) ? r : null;
}
function b(e) {
    let { selectedSource: t, onChangeVideoDeviceSource: n, onChangeAudioDevice: l } = e;
    s()(null != t, 'Camera capture device cannot be null');
    let o = (0, p.Z)(),
        [a, c] = (0, m.L)(x.h7.AUDIO_INPUT, { location: 'CaptureDeviceConfig' }),
        b = a.concat(c),
        [C, y] = i.useState(S(t.id, o, b));
    return (
        null != C && l(C),
        (0, r.jsxs)(u.xJW, {
            title: 'Capture Device',
            className: v.modalContent,
            children: [
                (0, r.jsx)(u.xJW, {
                    className: j.marginTop8,
                    children: (0, r.jsxs)(h.Z, {
                        children: [
                            (0, r.jsx)('span', {
                                className: _.ellipsisText,
                                children: t.name
                            }),
                            (0, r.jsx)(d.zx, {
                                className: _.changeButton,
                                color: d.zx.Colors.PRIMARY,
                                size: d.zx.Sizes.SMALL,
                                onClick: n,
                                children: g.intl.string(g.t.GEgsAw)
                            })
                        ]
                    })
                }),
                (0, r.jsx)(u.xJW, {
                    className: j.marginTop8,
                    title: g.intl.string(g.t.y4ooen),
                    children: (0, r.jsx)(f.j, {
                        deviceType: x.h7.AUDIO_INPUT,
                        location: 'CaptureDeviceConfig',
                        className: j.__invalid_marginaTop8,
                        selectedDeviceId: C,
                        onSelectDevice: (e) => (y(e), l(e), !1)
                    })
                })
            ]
        })
    );
}
