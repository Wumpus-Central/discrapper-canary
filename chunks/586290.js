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
    h = l(388032),
    g = l(604196),
    Z = l(323499),
    v = l(483938);
function S(e) {
    let { selectedSource: n, onChangeVideoDeviceSource: l, onChangeAudioDevice: s } = e;
    a()(null != n, 'Camera capture device cannot be null');
    let r = (0, x.Z)(),
        S = (0, d.Z)(),
        [j, C] = i.useState(
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
        null != j && s(j),
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
                                    className: g.ellipsisText,
                                    children: n.name
                                }),
                                (0, t.jsx)(c.zxk, {
                                    className: g.changeButton,
                                    color: c.zxk.Colors.PRIMARY,
                                    size: c.zxk.Sizes.SMALL,
                                    onClick: l,
                                    children: h.intl.string(h.t.GEgsAw)
                                })
                            ]
                        })
                    }),
                    (0, t.jsx)(c.xJW, {
                        className: v.marginTop8,
                        title: h.intl.string(h.t.y4ooen),
                        children: (0, t.jsx)(c.q4e, {
                            value: j,
                            className: v.__invalid_marginaTop8,
                            onChange: (e) => {
                                C(e), s(e);
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
