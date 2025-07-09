t.d(n, { default: () => d });
var a = t(255367);
t(73800);
var r = t(755721),
    i = t(481060),
    o = t(701488),
    s = t(388032),
    l = t(661682),
    c = t(221886);
function d(e) {
    var { application: n, onCancel: t, onClose: d, onConfirm: b } = e,
        u = (function (e, n) {
            if (null == e) return {};
            var t,
                a,
                r = (function (e, n) {
                    if (null == e) return {};
                    var t,
                        a,
                        r = {},
                        i = Object.keys(e);
                    for (a = 0; a < i.length; a++) ((t = i[a]), n.indexOf(t) >= 0 || (r[t] = e[t]));
                    return r;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (a = 0; a < i.length; a++) ((t = i[a]), !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]));
            }
            return r;
        })(e, ['application', 'onCancel', 'onClose', 'onConfirm']);
    return (0, a.jsxs)(i.Y0X, {
        role: 'alertdialog',
        transitionState: u.transitionState,
        className: l.modalRoot,
        parentComponent: 'ExternalAppLaunchAlert',
        children: [
            (0, a.jsx)('div', {
                className: l.birbContainer,
                children: (0, a.jsx)('img', {
                    src: c,
                    className: l.announcementBirb,
                    alt: s.intl.string(s.t.ElsOBA)
                })
            }),
            (0, a.jsxs)(i.hzk, {
                className: l.modalContent,
                children: [
                    (0, a.jsx)(i.Text, {
                        variant: 'eyebrow',
                        className: l.eyebrow,
                        children: s.intl.string(s.t['06YebG'])
                    }),
                    (0, a.jsx)(i.X6q, {
                        variant: 'heading-lg/bold',
                        className: l.header,
                        children: s.intl.format(s.t['Z/eMDQ'], { activityName: n.name })
                    }),
                    (0, a.jsx)(i.Text, {
                        variant: 'text-sm/normal',
                        className: l.subHeader,
                        children: s.intl.string(s.t.z81WwM)
                    }),
                    (0, a.jsxs)('div', {
                        className: l.buttonContainer,
                        children: [
                            (0, a.jsx)(r.zx, {
                                size: r.zx.Sizes.LARGE,
                                onClick: () => {
                                    (b(), d());
                                },
                                children: s.intl.string(s.t['3PatS0'])
                            }),
                            (0, a.jsx)(r.zx, {
                                size: r.zx.Sizes.LARGE,
                                onClick: () => {
                                    (t(), d());
                                },
                                color: r.zx.Colors.PRIMARY,
                                children: s.intl.string(s.t['ETE/oK'])
                            }),
                            (0, a.jsx)(i.Text, {
                                variant: 'text-xs/normal',
                                children: (0, a.jsx)(i.eee, {
                                    href: o.OF,
                                    children: s.intl.string(s.t.E0gf5u)
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
