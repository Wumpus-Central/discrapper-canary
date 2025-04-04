n.d(t, {
    B: () => m,
    QuestsRewardModalUnverified: () => h
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(481060),
    s = n(893776),
    l = n(594174),
    c = n(918701),
    u = n(388032),
    d = n(719969),
    f = n(800010);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e) {
    let { transitionState: t, onClose: n } = e,
        _ = (0, o.e7)([l.default], () => {
            var e;
            return null == (e = l.default.getCurrentUser()) ? void 0 : e.email;
        }),
        [p, h] = i.useState({ status: 'unknown' });
    i.useEffect(() => {
        h({ status: 'loading' }),
            s.Z.verifyResend().then(
                () => h({ status: 'success' }),
                (e) => {
                    h({ status: 'error' }), (0, c.ys)(e, { tags: { location: 'QuestsRewardModalUnverified' } });
                }
            );
    }, []);
    let m = () =>
        (0, r.jsx)(a.mzw, {
            className: d.modalFooter,
            children: (0, r.jsx)(a.zxk, {
                color: a.zxk.Colors.BRAND,
                size: a.zxk.Sizes.MEDIUM,
                onClick: n,
                children: u.NW.string(u.t.cpT0Cg)
            })
        });
    return (0, r.jsxs)(a.Y0X, {
        transitionState: t,
        disableTrack: !0,
        children: [
            (0, r.jsx)('img', {
                alt: '',
                className: d.headerImage,
                src: f
            }),
            (0, r.jsxs)(a.xBx, {
                separator: !1,
                className: d.header,
                children: [
                    (0, r.jsx)(a.X6q, {
                        className: d.title,
                        variant: 'heading-xl/bold',
                        children: u.NW.string(u.t.c8eASE)
                    }),
                    (0, r.jsx)(a.olH, {
                        onClick: n,
                        className: d.modalCloseButton
                    })
                ]
            }),
            'loading' === p.status &&
                (0, r.jsx)(a.hzk, {
                    className: d.content,
                    children: (0, r.jsx)(a.$jN, {})
                }),
            'error' === p.status &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(a.hzk, {
                            className: d.content,
                            children: (0, r.jsx)(a.Text, {
                                variant: 'text-md/normal',
                                children: u.NW.string(u.t.vjyinp)
                            })
                        }),
                        m()
                    ]
                }),
            'success' === p.status &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(a.hzk, {
                            className: d.content,
                            children: (0, r.jsx)(a.Text, {
                                variant: 'text-md/normal',
                                children: u.NW.format(u.t.qP5xYW, {
                                    emailAddress: _,
                                    emailAddressLink: 'mailto:'.concat(_)
                                })
                            })
                        }),
                        (0, r.jsx)(a.hzk, {
                            className: d.content,
                            children: (0, r.jsxs)('div', {
                                className: d.tooltip,
                                children: [
                                    (0, r.jsx)(a.d3s, {
                                        size: 'xs',
                                        color: 'currentColor',
                                        className: d.infoFilledIcon
                                    }),
                                    (0, r.jsx)(a.Text, {
                                        className: d.tooltipText,
                                        variant: 'text-sm/normal',
                                        children: u.NW.string(u.t.yb7itb)
                                    })
                                ]
                            })
                        }),
                        m()
                    ]
                })
        ]
    });
}
function m() {
    (0, a.ZDy)(async () => {
        let { QuestsRewardModalUnverified: e } = await Promise.resolve().then(n.bind(n, 669041));
        return (t) => (0, r.jsx)(e, p({}, t));
    });
}
