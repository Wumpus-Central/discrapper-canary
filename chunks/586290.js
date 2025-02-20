t.d(n, { Z: () => j }), t(47120);
var l = t(200651),
    i = t(192379),
    r = t(512722),
    s = t.n(r),
    a = t(392711),
    o = t.n(a),
    c = t(856901),
    u = t(481060),
    d = t(687058),
    m = t(537135),
    g = t(176940),
    h = t(388032),
    x = t(414803),
    v = t(382840),
    f = t(455812);
function j(e) {
    let { selectedSource: n, onChangeVideoDeviceSource: t, onChangeAudioDevice: r } = e;
    s()(null != n, 'Camera capture device cannot be null');
    let a = (0, g.Z)(),
        j = (0, d.Z)(),
        [Z, N] = i.useState(
            (function (e, n, t) {
                if (null != n && null != t) {
                    let l = n.find((n) => n.id === e);
                    if (null == l) return;
                    let i = o().reduce(t, (e, n) => ((0, c.stringSimilarity)(l.name, n.name) > (0, c.stringSimilarity)(l.name, e.name) ? n : e));
                    if (null != i) return i.id;
                }
            })(n.id, a, j)
        );
    return (
        null != Z && r(Z),
        (0, l.jsx)(i.Fragment, {
            children: (0, l.jsxs)(u.xJW, {
                title: 'Capture Device',
                className: v.modalContent,
                children: [
                    (0, l.jsx)(u.xJW, {
                        className: f.marginTop8,
                        children: (0, l.jsxs)(m.Z, {
                            children: [
                                (0, l.jsx)('span', {
                                    className: x.ellipsisText,
                                    children: n.name
                                }),
                                (0, l.jsx)(u.zxk, {
                                    className: x.changeButton,
                                    color: u.zxk.Colors.PRIMARY,
                                    size: u.zxk.Sizes.SMALL,
                                    onClick: t,
                                    children: h.NW.string(h.t.GEgsAw)
                                })
                            ]
                        })
                    }),
                    (0, l.jsx)(u.xJW, {
                        className: f.marginTop8,
                        title: h.NW.string(h.t.y4ooen),
                        children: (0, l.jsx)(u.q4e, {
                            value: Z,
                            className: f.__invalid_marginaTop8,
                            onChange: (e) => {
                                N(e), r(e);
                            },
                            options: o().map(j, (e) => {
                                let { id: n, name: t } = e;
                                return {
                                    value: n,
                                    label: t
                                };
                            })
                        })
                    })
                ]
            })
        })
    );
}
