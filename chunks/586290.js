n.d(t, {
    K: () => _,
    Z: () => v
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    l = n(512722),
    s = n.n(l),
    o = n(392711),
    a = n.n(o),
    c = n(856901),
    d = n(481060),
    u = n(72897),
    f = n(537135),
    m = n(176940),
    h = n(388032),
    p = n(729497),
    x = n(347226),
    g = n(20493);
function _(e, t, n) {
    var r;
    let i = t.find((t) => t.id === e);
    if (null == i) return null;
    let l = a().reduce(n, (e, t) => ((0, c.stringSimilarity)(i.name, t.name) > (0, c.stringSimilarity)(i.name, e.name) ? t : e));
    return null != (r = null == l ? void 0 : l.id) ? r : null;
}
function v(e) {
    let { selectedSource: t, onChangeVideoDeviceSource: n, onChangeAudioDevice: l } = e;
    s()(null != t, 'Camera capture device cannot be null');
    let o = (0, m.Z)(),
        a = (0, u.zX)({ location: 'CaptureDeviceConfig' }),
        [c, v] = i.useState(_(t.id, o, a));
    return (
        null != c && l(c),
        (0, r.jsxs)(d.xJW, {
            title: 'Capture Device',
            className: x.modalContent,
            children: [
                (0, r.jsx)(d.xJW, {
                    className: g.marginTop8,
                    children: (0, r.jsxs)(f.Z, {
                        children: [
                            (0, r.jsx)('span', {
                                className: p.ellipsisText,
                                children: t.name
                            }),
                            (0, r.jsx)(d.zxk, {
                                className: p.changeButton,
                                color: d.zxk.Colors.PRIMARY,
                                size: d.zxk.Sizes.SMALL,
                                onClick: n,
                                children: h.intl.string(h.t.GEgsAw)
                            })
                        ]
                    })
                }),
                (0, r.jsx)(d.xJW, {
                    className: g.marginTop8,
                    title: h.intl.string(h.t.y4ooen),
                    children: (0, r.jsx)(d.q4e, {
                        value: c,
                        className: g.__invalid_marginaTop8,
                        onChange: (e) => {
                            v(e), l(e);
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
