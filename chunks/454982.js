(n.d(t, { Z: () => p }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(755721),
    a = n(481060),
    l = n(484614),
    o = n(313201),
    c = n(518638),
    d = n(388032),
    u = n(302291);
function m(e) {
    let { onClose: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(a.xBx, {
                separator: !1,
                className: u.errorHeader,
                children: [
                    (0, i.jsx)('div', { className: u.errorArt }),
                    (0, i.jsx)(a.X6q, {
                        variant: 'heading-xl/semibold',
                        children: d.intl.string(d.t.iufib2)
                    })
                ]
            }),
            (0, i.jsx)(a.hzk, {
                className: u.errorBody,
                children: (0, i.jsx)(a.Text, {
                    variant: 'text-md/normal',
                    className: u.bodyText,
                    children: d.intl.string(d.t.eAn6z8)
                })
            }),
            (0, i.jsx)(a.mzw, {
                children: (0, i.jsx)(a.zxk, {
                    variant: 'primary',
                    text: d.intl.string(d.t.cpT0Cg),
                    onClick: t
                })
            })
        ]
    });
}
let p = function (e) {
    let { onClose: t, onClaim: n, code: p, outboundPromotion: g, transitionState: h } = e,
        [f, b] = r.useState(null),
        x = (0, o.Dt)();
    return (
        r.useEffect(() => {
            null == p &&
                (0, c.A2)(g.id)
                    .then((e) => n(e))
                    .catch((e) => {
                        var t;
                        return b(null == e || null == (t = e.body) ? void 0 : t.code);
                    });
        }, [p, g.id, n]),
        (0, i.jsx)(a.Y0X, {
            transitionState: h,
            'aria-labelledby': x,
            parentComponent: 'OutboundPromotionRedemptionModal',
            children:
                null != f
                    ? (0, i.jsx)(m, { onClose: t })
                    : null == p
                      ? (0, i.jsx)(a.hzk, { children: (0, i.jsx)(a.$jN, { className: u.loading }) })
                      : (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsxs)(a.xBx, {
                                    separator: !1,
                                    className: u.headerContainer,
                                    children: [
                                        (0, i.jsx)('div', { className: u.art }),
                                        (0, i.jsx)(a.X6q, {
                                            variant: 'heading-xl/semibold',
                                            children: d.intl.string(d.t['23BfZm'])
                                        })
                                    ]
                                }),
                                (0, i.jsxs)(a.hzk, {
                                    children: [
                                        (0, i.jsx)(a.Text, {
                                            variant: 'text-md/normal',
                                            className: u.bodyText,
                                            children: g.outboundRedemptionModalBody
                                        }),
                                        (0, i.jsx)(a.$i$, { className: u.formDivider }),
                                        (0, i.jsxs)(a.hjN, {
                                            title: d.intl.string(d.t.s9LFQk),
                                            className: u.formSection,
                                            children: [
                                                (0, i.jsx)(l.Z, {
                                                    value: p,
                                                    buttonColor: s.zx.Colors.BRAND,
                                                    buttonLook: s.zx.Looks.FILLED,
                                                    delay: 1000
                                                }),
                                                (0, i.jsx)(a.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'header-secondary',
                                                    className: u.confirmationText,
                                                    children: d.intl.string(d.t['F+nFTU'])
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, i.jsxs)(a.mzw, {
                                    children: [
                                        (0, i.jsx)(a.zxk, {
                                            variant: 'primary',
                                            text: d.intl.string(d.t['+zx47e']),
                                            onClick: () => {
                                                let e = (0, c.BU)(p, g);
                                                window.open(e, '_blank');
                                            }
                                        }),
                                        (0, i.jsx)(s.zx, {
                                            onClick: t,
                                            look: s.zx.Looks.LINK,
                                            color: u.maybeLaterButton,
                                            children: d.intl.string(d.t.TulDPj)
                                        })
                                    ]
                                })
                            ]
                        })
        })
    );
};
