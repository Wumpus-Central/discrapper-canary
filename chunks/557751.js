t.d(n, { default: () => l });
var a = t(200651);
t(192379);
var r = t(481060),
    o = t(701488),
    i = t(388032),
    s = t(661682),
    c = t(221886);
function l(e) {
    var { application: n, onCancel: t, onClose: l, onConfirm: d } = e,
        b = (function (e, n) {
            if (null == e) return {};
            var t,
                a,
                r = (function (e, n) {
                    if (null == e) return {};
                    var t,
                        a,
                        r = {},
                        o = Object.keys(e);
                    for (a = 0; a < o.length; a++) (t = o[a]), n.indexOf(t) >= 0 || (r[t] = e[t]);
                    return r;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (a = 0; a < o.length; a++) (t = o[a]), !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]);
            }
            return r;
        })(e, ['application', 'onCancel', 'onClose', 'onConfirm']);
    return (0, a.jsxs)(r.Y0X, {
        role: 'alertdialog',
        transitionState: b.transitionState,
        className: s.modalRoot,
        children: [
            (0, a.jsx)('div', {
                className: s.birbContainer,
                children: (0, a.jsx)('img', {
                    src: c,
                    className: s.announcementBirb,
                    alt: i.NW.string(i.t.ElsOBA)
                })
            }),
            (0, a.jsxs)(r.hzk, {
                className: s.modalContent,
                children: [
                    (0, a.jsx)(r.Text, {
                        variant: 'eyebrow',
                        className: s.eyebrow,
                        children: i.NW.string(i.t['06YebG'])
                    }),
                    (0, a.jsx)(r.X6q, {
                        variant: 'heading-lg/bold',
                        className: s.header,
                        children: i.NW.format(i.t['Z/eMDQ'], { activityName: n.name })
                    }),
                    (0, a.jsx)(r.Text, {
                        variant: 'text-sm/normal',
                        className: s.subHeader,
                        children: i.NW.string(i.t.z81WwM)
                    }),
                    (0, a.jsxs)('div', {
                        className: s.buttonContainer,
                        children: [
                            (0, a.jsx)(r.zxk, {
                                size: r.zxk.Sizes.LARGE,
                                onClick: () => {
                                    d(), l();
                                },
                                children: i.NW.string(i.t['3PatS0'])
                            }),
                            (0, a.jsx)(r.zxk, {
                                size: r.zxk.Sizes.LARGE,
                                onClick: () => {
                                    t(), l();
                                },
                                color: r.zxk.Colors.PRIMARY,
                                children: i.NW.string(i.t['ETE/oK'])
                            }),
                            (0, a.jsx)(r.Text, {
                                variant: 'text-xs/normal',
                                children: (0, a.jsx)(r.eee, {
                                    href: o.OF,
                                    children: i.NW.string(i.t.E0gf5u)
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
