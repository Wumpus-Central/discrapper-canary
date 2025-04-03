n.d(t, { Z: () => m }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(481060),
    a = n(484614),
    l = n(313201),
    o = n(518638),
    c = n(388032),
    d = n(302291);
function u(e) {
    let { onClose: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(s.xBx, {
                separator: !1,
                className: d.errorHeader,
                children: [
                    (0, r.jsx)('div', { className: d.errorArt }),
                    (0, r.jsx)(s.X6q, {
                        variant: 'heading-xl/semibold',
                        children: c.NW.string(c.t.iufib2)
                    })
                ]
            }),
            (0, r.jsx)(s.hzk, {
                className: d.errorBody,
                children: (0, r.jsx)(s.Text, {
                    variant: 'text-md/normal',
                    className: d.bodyText,
                    children: c.NW.string(c.t.eAn6z8)
                })
            }),
            (0, r.jsx)(s.mzw, {
                children: (0, r.jsx)(s.zxk, {
                    color: s.zxk.Colors.BRAND,
                    onClick: t,
                    children: c.NW.string(c.t.cpT0Cg)
                })
            })
        ]
    });
}
let m = function (e) {
    let { onClose: t, onClaim: n, code: m, outboundPromotion: g, transitionState: p } = e,
        [h, f] = i.useState(null),
        b = (0, l.Dt)();
    return (
        i.useEffect(() => {
            null == m &&
                (0, o.A2)(g.id)
                    .then((e) => n(e))
                    .catch((e) => {
                        var t;
                        return f(null == e || null == (t = e.body) ? void 0 : t.code);
                    });
        }, [m, g.id, n]),
        (0, r.jsx)(s.Y0X, {
            transitionState: p,
            'aria-labelledby': b,
            children:
                null != h
                    ? (0, r.jsx)(u, { onClose: t })
                    : null == m
                      ? (0, r.jsx)(s.hzk, { children: (0, r.jsx)(s.$jN, { className: d.loading }) })
                      : (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsxs)(s.xBx, {
                                    separator: !1,
                                    className: d.headerContainer,
                                    children: [
                                        (0, r.jsx)('div', { className: d.art }),
                                        (0, r.jsx)(s.X6q, {
                                            variant: 'heading-xl/semibold',
                                            children: c.NW.string(c.t['23BfZm'])
                                        })
                                    ]
                                }),
                                (0, r.jsxs)(s.hzk, {
                                    children: [
                                        (0, r.jsx)(s.Text, {
                                            variant: 'text-md/normal',
                                            className: d.bodyText,
                                            children: g.outboundRedemptionModalBody
                                        }),
                                        (0, r.jsx)(s.$i$, { className: d.formDivider }),
                                        (0, r.jsxs)(s.hjN, {
                                            title: c.NW.string(c.t.s9LFQk),
                                            className: d.formSection,
                                            children: [
                                                (0, r.jsx)(a.Z, {
                                                    value: m,
                                                    buttonColor: s.zxk.Colors.BRAND,
                                                    buttonLook: s.zxk.Looks.FILLED,
                                                    delay: 1000
                                                }),
                                                (0, r.jsx)(s.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'header-secondary',
                                                    className: d.confirmationText,
                                                    children: c.NW.string(c.t['F+nFTU'])
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, r.jsxs)(s.mzw, {
                                    children: [
                                        (0, r.jsx)(s.zxk, {
                                            color: s.zxk.Colors.BRAND,
                                            onClick: () => {
                                                let e = (0, o.BU)(m, g);
                                                window.open(e, '_blank');
                                            },
                                            children: c.NW.string(c.t['+zx47e'])
                                        }),
                                        (0, r.jsx)(s.zxk, {
                                            onClick: t,
                                            look: s.zxk.Looks.LINK,
                                            color: d.maybeLaterButton,
                                            children: c.NW.string(c.t.TulDPj)
                                        })
                                    ]
                                })
                            ]
                        })
        })
    );
};
