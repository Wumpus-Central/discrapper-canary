n.d(e, { default: () => c }), n(757143);
var l = n(200651);
n(192379);
var a = n(481060),
    i = n(313201),
    r = n(988158),
    o = n(388032),
    s = n(767307);
function c(t) {
    let { url: e, trustUrl: n, isProtocol: c, onConfirm: x, onCancel: d, onClose: h, transitionState: m } = t,
        u = (0, i.Dt)(),
        {
            protocol: k,
            hostname: C,
            theRestOfTheUrl: p,
            shouldTrustUrl: g,
            setShouldTrustUrl: b,
            handleConfirm: j,
            handleCancel: z
        } = (0, r.X)({
            url: e,
            trustUrl: n,
            onConfirm: x,
            onCancel: d,
            onClose: h
        });
    return (0, l.jsxs)(a.Y0X, {
        size: a.CgR.DYNAMIC,
        transitionState: m,
        'aria-labelledby': u,
        children: [
            (0, l.jsxs)(a.hzk, {
                children: [
                    (0, l.jsx)(a.X6q, {
                        id: u,
                        variant: 'heading-xl/bold',
                        className: s.title,
                        children: o.intl.string(o.t['3w1QGh'])
                    }),
                    (0, l.jsx)(a.Text, {
                        className: s.warningText,
                        variant: 'text-md/normal',
                        children: c ? o.intl.format(o.t.aCYv19, {}) : o.intl.string(o.t.soRxRU)
                    }),
                    (0, l.jsxs)(a.Ttm, {
                        className: s.linkCalloutContainer,
                        children: [
                            (0, l.jsxs)(a.Text, {
                                tag: 'span',
                                variant: c ? 'text-md/semibold' : 'text-md/normal',
                                color: c ? 'text-normal' : 'text-muted',
                                children: [k, '//']
                            }),
                            (0, l.jsx)(a.Text, {
                                tag: 'span',
                                variant: c ? 'text-md/normal' : 'text-md/semibold',
                                color: c ? 'text-muted' : 'text-normal',
                                children: C
                            }),
                            (0, l.jsx)(a.Text, {
                                tag: 'span',
                                variant: 'text-md/normal',
                                color: 'text-muted',
                                children: p
                            })
                        ]
                    }),
                    (0, l.jsx)(a.XZJ, {
                        className: s.checkbox,
                        type: a.XZJ.Types.INVERTED,
                        value: g,
                        onChange: (t, e) => b(e),
                        children: (0, l.jsx)(a.Text, {
                            variant: 'text-sm/normal',
                            children: c ? o.intl.format(o.t['haA+X1'], { protocol: k.replace(':', '') }) : o.intl.format(o.t.ZgXDsL, { domain: C })
                        })
                    })
                ]
            }),
            (0, l.jsxs)(a.mzw, {
                children: [
                    (0, l.jsx)(a.zxk, {
                        type: 'button',
                        size: a.zxk.Sizes.MEDIUM,
                        color: a.zxk.Colors.BRAND,
                        onClick: j,
                        children: c ? o.intl.string(o.t.COq6kp) : o.intl.string(o.t.NcJfJC)
                    }),
                    (0, l.jsx)(a.zxk, {
                        type: 'button',
                        size: a.zxk.Sizes.MEDIUM,
                        color: a.zxk.Colors.PRIMARY,
                        onClick: z,
                        look: a.iLD.LINK,
                        children: o.intl.string(o.t['/g10LC'])
                    })
                ]
            })
        ]
    });
}
