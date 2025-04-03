n.d(e, { default: () => c }), n(757143), n(301563);
var a = n(200651);
n(192379);
var l = n(481060),
    r = n(313201),
    o = n(988158),
    s = n(388032),
    i = n(946555);
function c(t) {
    let { url: e, trustUrl: n, isProtocol: c, onConfirm: x, onCancel: d, onClose: h, transitionState: m } = t,
        u = (0, r.Dt)(),
        {
            protocol: k,
            authorityPrefix: C,
            hostname: p,
            theRestOfTheUrl: g,
            shouldTrustUrl: N,
            setShouldTrustUrl: b,
            handleConfirm: j,
            handleCancel: z
        } = (0, o.X)({
            url: e,
            trustUrl: n,
            onConfirm: x,
            onCancel: d,
            onClose: h
        });
    return (0, a.jsxs)(l.Y0X, {
        size: l.CgR.DYNAMIC,
        transitionState: m,
        'aria-labelledby': u,
        children: [
            (0, a.jsxs)(l.hzk, {
                children: [
                    (0, a.jsx)(l.X6q, {
                        id: u,
                        variant: 'heading-xl/bold',
                        className: i.title,
                        children: s.NW.string(s.t['3w1QGh'])
                    }),
                    (0, a.jsx)(l.Text, {
                        className: i.warningText,
                        variant: 'text-md/normal',
                        children: c ? s.NW.format(s.t.aCYv19, {}) : s.NW.string(s.t.soRxRU)
                    }),
                    (0, a.jsxs)(l.Ttm, {
                        className: i.linkCalloutContainer,
                        children: [
                            (0, a.jsxs)(l.Text, {
                                tag: 'span',
                                variant: c ? 'text-md/semibold' : 'text-md/normal',
                                color: c ? 'text-normal' : 'text-muted',
                                children: [k, C]
                            }),
                            (0, a.jsx)(l.Text, {
                                tag: 'span',
                                variant: c ? 'text-md/normal' : 'text-md/semibold',
                                color: c ? 'text-muted' : 'text-normal',
                                children: p
                            }),
                            (0, a.jsx)(l.Text, {
                                tag: 'span',
                                variant: 'text-md/normal',
                                color: 'text-muted',
                                children: g
                            })
                        ]
                    }),
                    (0, a.jsx)(l.XZJ, {
                        className: i.checkbox,
                        type: l.XZJ.Types.INVERTED,
                        value: N,
                        onChange: (t, e) => b(e),
                        children: (0, a.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            children: c ? s.NW.format(s.t['haA+X1'], { protocol: k.replace(':', '') }) : s.NW.format(s.t.ZgXDsL, { domain: p })
                        })
                    })
                ]
            }),
            (0, a.jsxs)(l.mzw, {
                children: [
                    (0, a.jsx)(l.zxk, {
                        type: 'button',
                        size: l.zxk.Sizes.MEDIUM,
                        color: l.zxk.Colors.BRAND,
                        onClick: j,
                        children: c ? s.NW.string(s.t.COq6kp) : s.NW.string(s.t.NcJfJC)
                    }),
                    (0, a.jsx)(l.zxk, {
                        type: 'button',
                        size: l.zxk.Sizes.MEDIUM,
                        color: l.zxk.Colors.PRIMARY,
                        onClick: z,
                        look: l.iLD.LINK,
                        children: s.NW.string(s.t['/g10LC'])
                    })
                ]
            })
        ]
    });
}
