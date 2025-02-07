l.d(n, { Z: () => S }), l(724458), l(47120);
var t = l(200651),
    i = l(192379),
    s = l(512722),
    a = l.n(s),
    r = l(392711),
    o = l.n(r),
    u = l(856901),
    c = l(481060),
    d = l(687058),
    m = l(537135),
    x = l(176940),
    g = l(388032),
    h = l(378967),
    Z = l(456963),
    v = l(232186);
function S(e) {
    let { selectedSource: n, onChangeVideoDeviceSource: l, onChangeAudioDevice: s } = e;
    a()(null != n, 'Camera capture device cannot be null');
    let r = (0, x.Z)(),
        S = (0, d.Z)(),
        [C, j] = i.useState(
            (function (e, n, l) {
                if (null != n && null != l) {
                    let t = n.find((n) => n.id === e);
                    if (null == t) return;
                    let i = o().reduce(l, (e, n) => ((0, u.stringSimilarity)(t.name, n.name) > (0, u.stringSimilarity)(t.name, e.name) ? n : e));
                    if (null != i) return i.id;
                }
            })(n.id, r, S)
        );
    return (
        null != C && s(C),
        (0, t.jsx)(i.Fragment, {
            children: (0, t.jsxs)(c.xJW, {
                title: 'Capture Device',
                className: Z.modalContent,
                children: [
                    (0, t.jsx)(c.xJW, {
                        className: v.marginTop8,
                        children: (0, t.jsxs)(m.Z, {
                            children: [
                                (0, t.jsx)('span', {
                                    className: h.ellipsisText,
                                    children: n.name
                                }),
                                (0, t.jsx)(c.zxk, {
                                    className: h.changeButton,
                                    color: c.zxk.Colors.PRIMARY,
                                    size: c.zxk.Sizes.SMALL,
                                    onClick: l,
                                    children: g.intl.string(g.t.GEgsAw)
                                })
                            ]
                        })
                    }),
                    (0, t.jsx)(c.xJW, {
                        className: v.marginTop8,
                        title: g.intl.string(g.t.y4ooen),
                        children: (0, t.jsx)(c.q4e, {
                            value: C,
                            className: v.__invalid_marginaTop8,
                            onChange: (e) => {
                                j(e), s(e);
                            },
                            options: o().map(S, (e) => {
                                let { id: n, name: l } = e;
                                return {
                                    value: n,
                                    label: l
                                };
                            })
                        })
                    })
                ]
            })
        })
    );
}
