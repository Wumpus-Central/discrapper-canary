n.d(t, { Z: () => _ }), n(47120);
var r = n(200651),
    l = n(192379),
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
    x = n(729497),
    p = n(347226),
    g = n(20493);
function _(e) {
    let { selectedSource: t, onChangeVideoDeviceSource: n, onChangeAudioDevice: i } = e;
    s()(null != t, 'Camera capture device cannot be null');
    let o = (0, m.Z)(),
        _ = (0, u.Z)(),
        [j, v] = l.useState(
            (function (e, t, n) {
                if (null != t && null != n) {
                    let r = t.find((t) => t.id === e);
                    if (null == r) return;
                    let l = a().reduce(n, (e, t) => ((0, c.stringSimilarity)(r.name, t.name) > (0, c.stringSimilarity)(r.name, e.name) ? t : e));
                    if (null != l) return l.id;
                }
            })(t.id, o, _)
        );
    return (
        null != j && i(j),
        (0, r.jsxs)(d.xJW, {
            title: 'Capture Device',
            className: p.modalContent,
            children: [
                (0, r.jsx)(d.xJW, {
                    className: g.marginTop8,
                    children: (0, r.jsxs)(f.Z, {
                        children: [
                            (0, r.jsx)('span', {
                                className: x.ellipsisText,
                                children: t.name
                            }),
                            (0, r.jsx)(d.zxk, {
                                className: x.changeButton,
                                color: d.zxk.Colors.PRIMARY,
                                size: d.zxk.Sizes.SMALL,
                                onClick: n,
                                children: h.NW.string(h.t.GEgsAw)
                            })
                        ]
                    })
                }),
                (0, r.jsx)(d.xJW, {
                    className: g.marginTop8,
                    title: h.NW.string(h.t.y4ooen),
                    children: (0, r.jsx)(d.q4e, {
                        value: j,
                        className: g.__invalid_marginaTop8,
                        onChange: (e) => {
                            v(e), i(e);
                        },
                        options: a().map(_, (e) => {
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
