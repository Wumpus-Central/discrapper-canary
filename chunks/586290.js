(n.d(t, {
    K: () => v,
    Z: () => j
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
    f = n(72897),
    m = n(537135),
    h = n(176940),
    p = n(388032),
    x = n(729497),
    g = n(347226),
    _ = n(20493);
function v(e, t, n) {
    var r;
    let i = t.find((t) => t.id === e);
    if (null == i) return null;
    let l = a().reduce(n, (e, t) => ((0, c.stringSimilarity)(i.name, t.name) > (0, c.stringSimilarity)(i.name, e.name) ? t : e));
    return null != (r = null == l ? void 0 : l.id) ? r : null;
}
function j(e) {
    let { selectedSource: t, onChangeVideoDeviceSource: n, onChangeAudioDevice: l } = e;
    s()(null != t, 'Camera capture device cannot be null');
    let o = (0, h.Z)(),
        a = (0, f.zX)({ location: 'CaptureDeviceConfig' }),
        [c, j] = i.useState(v(t.id, o, a));
    return (
        null != c && l(c),
        (0, r.jsxs)(u.xJW, {
            title: 'Capture Device',
            className: g.modalContent,
            children: [
                (0, r.jsx)(u.xJW, {
                    className: _.marginTop8,
                    children: (0, r.jsxs)(m.Z, {
                        children: [
                            (0, r.jsx)('span', {
                                className: x.ellipsisText,
                                children: t.name
                            }),
                            (0, r.jsx)(d.zx, {
                                className: x.changeButton,
                                color: d.zx.Colors.PRIMARY,
                                size: d.zx.Sizes.SMALL,
                                onClick: n,
                                children: p.intl.string(p.t.GEgsAw)
                            })
                        ]
                    })
                }),
                (0, r.jsx)(u.xJW, {
                    className: _.marginTop8,
                    title: p.intl.string(p.t.y4ooen),
                    children: (0, r.jsx)(u.q4e, {
                        value: c,
                        className: _.__invalid_marginaTop8,
                        onChange: (e) => {
                            (j(e), l(e));
                        },
                        options: a.map((e) => {
                            let { id: t, name: n } = e;
                            return {
                                value: t,
                                label: n
                            };
                        })
                    })
                })
            ]
        })
    );
}
