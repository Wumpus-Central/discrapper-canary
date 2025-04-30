t.d(n, { default: () => c });
var a = t(200651);
t(192379);
var r = t(481060),
    i = t(701488),
    o = t(388032),
    s = t(661682),
    l = t(221886);
function c(e) {
    var { application: n, onCancel: t, onClose: c, onConfirm: d } = e,
        b = (function (e, n) {
            if (null == e) return {};
            var t,
                a,
                r = (function (e, n) {
                    if (null == e) return {};
                    var t,
                        a,
                        r = {},
                        i = Object.keys(e);
                    for (a = 0; a < i.length; a++) (t = i[a]), n.indexOf(t) >= 0 || (r[t] = e[t]);
                    return r;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (a = 0; a < i.length; a++) (t = i[a]), !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]);
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
                    src: l,
                    className: s.announcementBirb,
                    alt: o.intl.string(o.t.ElsOBA)
                })
            }),
            (0, a.jsxs)(r.hzk, {
                className: s.modalContent,
                children: [
                    (0, a.jsx)(r.Text, {
                        variant: 'eyebrow',
                        className: s.eyebrow,
                        children: o.intl.string(o.t['06YebG'])
                    }),
                    (0, a.jsx)(r.X6q, {
                        variant: 'heading-lg/bold',
                        className: s.header,
                        children: o.intl.format(o.t['Z/eMDQ'], { activityName: n.name })
                    }),
                    (0, a.jsx)(r.Text, {
                        variant: 'text-sm/normal',
                        className: s.subHeader,
                        children: o.intl.string(o.t.z81WwM)
                    }),
                    (0, a.jsxs)('div', {
                        className: s.buttonContainer,
                        children: [
                            (0, a.jsx)(r.zxk, {
                                size: r.zxk.Sizes.LARGE,
                                onClick: () => {
                                    d(), c();
                                },
                                children: o.intl.string(o.t['3PatS0'])
                            }),
                            (0, a.jsx)(r.zxk, {
                                size: r.zxk.Sizes.LARGE,
                                onClick: () => {
                                    t(), c();
                                },
                                color: r.zxk.Colors.PRIMARY,
                                children: o.intl.string(o.t['ETE/oK'])
                            }),
                            (0, a.jsx)(r.Text, {
                                variant: 'text-xs/normal',
                                children: (0, a.jsx)(r.eee, {
                                    href: i.OF,
                                    children: o.intl.string(o.t.E0gf5u)
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
