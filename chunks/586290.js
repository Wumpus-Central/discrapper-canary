n.d(t, {
    K: () => _,
    Z: () => v
}),
    n(388685);
var r = n(255367),
    l = n(73800),
    i = n(512722),
    s = n.n(i),
    o = n(392711),
    a = n.n(o),
    c = n(856901),
    d = n(481060),
    u = n(687058),
    f = n(537135),
    m = n(176940),
    h = n(388032),
    p = n(30868),
    x = n(319255),
    g = n(971005);
function _(e, t, n) {
    if (null != t && null != n) {
        let r = t.find((t) => t.id === e);
        if (null == r) return null;
        let l = a().reduce(n, (e, t) => ((0, c.stringSimilarity)(r.name, t.name) > (0, c.stringSimilarity)(r.name, e.name) ? t : e));
        return null == l ? null : l.id;
    }
    return null;
}
function v(e) {
    let { selectedSource: t, onChangeVideoDeviceSource: n, onChangeAudioDevice: i } = e;
    s()(null != t, 'Camera capture device cannot be null');
    let o = (0, m.Z)(),
        c = (0, u.Z)(),
        [v, j] = l.useState(_(t.id, o, c));
    return (
        null != v && i(v),
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
                        value: v,
                        className: g.__invalid_marginaTop8,
                        onChange: (e) => {
                            j(e), i(e);
                        },
                        options: a().map(c, (e) => {
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
