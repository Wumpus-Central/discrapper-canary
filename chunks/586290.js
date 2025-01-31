t.d(n, { Z: () => S }), t(724458), t(47120);
var l = t(200651),
    i = t(192379),
    s = t(512722),
    a = t.n(s),
    r = t(392711),
    o = t.n(r),
    u = t(856901),
    c = t(481060),
    d = t(687058),
    m = t(537135),
    x = t(176940),
    g = t(388032),
    h = t(378967),
    v = t(456963),
    Z = t(232186);
function S(e) {
    let { selectedSource: n, onChangeVideoDeviceSource: t, onChangeAudioDevice: s } = e;
    a()(null != n, 'Camera capture device cannot be null');
    let r = (0, x.Z)(),
        S = (0, d.Z)(),
        [j, C] = i.useState(
            (function (e, n, t) {
                if (null != n && null != t) {
                    let l = n.find((n) => n.id === e);
                    if (null == l) return;
                    let i = o().reduce(t, (e, n) => ((0, u.stringSimilarity)(l.name, n.name) > (0, u.stringSimilarity)(l.name, e.name) ? n : e));
                    if (null != i) return i.id;
                }
            })(n.id, r, S)
        );
    return (
        null != j && s(j),
        (0, l.jsx)(i.Fragment, {
            children: (0, l.jsxs)(c.xJW, {
                title: 'Capture Device',
                className: v.modalContent,
                children: [
                    (0, l.jsx)(c.xJW, {
                        className: Z.marginTop8,
                        children: (0, l.jsxs)(m.Z, {
                            children: [
                                (0, l.jsx)('span', {
                                    className: h.ellipsisText,
                                    children: n.name
                                }),
                                (0, l.jsx)(c.zxk, {
                                    className: h.changeButton,
                                    color: c.zxk.Colors.PRIMARY,
                                    size: c.zxk.Sizes.SMALL,
                                    onClick: t,
                                    children: g.intl.string(g.t.GEgsAw)
                                })
                            ]
                        })
                    }),
                    (0, l.jsx)(c.xJW, {
                        className: Z.marginTop8,
                        title: g.intl.string(g.t.y4ooen),
                        children: (0, l.jsx)(c.q4e, {
                            value: j,
                            className: Z.__invalid_marginaTop8,
                            onChange: (e) => {
                                C(e), s(e);
                            },
                            options: o().map(S, (e) => {
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
