t.d(n, {
    Z: function () {
        return Z;
    }
}),
    t(724458),
    t(47120);
var l = t(200651),
    i = t(192379),
    s = t(512722),
    r = t.n(s),
    a = t(392711),
    o = t.n(a),
    u = t(856901),
    c = t(481060),
    d = t(687058),
    m = t(537135),
    g = t(176940),
    h = t(388032),
    x = t(936670),
    S = t(795331),
    v = t(275477);
function Z(e) {
    let { selectedSource: n, onChangeVideoDeviceSource: t, onChangeAudioDevice: s } = e;
    r()(null != n, 'Camera capture device cannot be null');
    let a = (0, g.Z)(),
        Z = (0, d.Z)(),
        [C, f] = i.useState(
            (function (e, n, t) {
                if (null != n && null != t) {
                    let l = n.find((n) => n.id === e);
                    if (null == l) return;
                    let i = o().reduce(t, (e, n) => ((0, u.stringSimilarity)(l.name, n.name) > (0, u.stringSimilarity)(l.name, e.name) ? n : e));
                    if (null != i) return i.id;
                }
            })(n.id, a, Z)
        );
    return (
        null != C && s(C),
        (0, l.jsx)(i.Fragment, {
            children: (0, l.jsxs)(c.FormItem, {
                title: 'Capture Device',
                className: S.modalContent,
                children: [
                    (0, l.jsx)(c.FormItem, {
                        className: v.marginTop8,
                        children: (0, l.jsxs)(m.Z, {
                            children: [
                                (0, l.jsx)('span', {
                                    className: x.ellipsisText,
                                    children: n.name
                                }),
                                (0, l.jsx)(c.Button, {
                                    className: x.changeButton,
                                    color: c.Button.Colors.PRIMARY,
                                    size: c.Button.Sizes.SMALL,
                                    onClick: t,
                                    children: h.intl.string(h.t.GEgsAw)
                                })
                            ]
                        })
                    }),
                    (0, l.jsx)(c.FormItem, {
                        className: v.marginTop8,
                        title: h.intl.string(h.t.y4ooen),
                        children: (0, l.jsx)(c.SingleSelect, {
                            value: C,
                            className: v.__invalid_marginaTop8,
                            onChange: (e) => {
                                f(e), s(e);
                            },
                            options: o().map(Z, (e) => {
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
