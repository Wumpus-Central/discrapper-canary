n.d(e, { default: () => c }), n(757143), n(301563);
var a = n(200651);
n(192379);
var l = n(481060),
    r = n(313201),
    o = n(988158),
    i = n(388032),
    s = n(22717);
function c(t) {
    let { url: e, trustUrl: n, isProtocol: c, onConfirm: x, onCancel: d, onClose: h, transitionState: m } = t,
        u = (0, r.Dt)(),
        {
            protocol: k,
            hostname: C,
            theRestOfTheUrl: p,
            shouldTrustUrl: N,
            setShouldTrustUrl: g,
            handleConfirm: b,
            handleCancel: j
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
                        className: s.title,
                        children: i.NW.string(i.t['3w1QGh'])
                    }),
                    (0, a.jsx)(l.Text, {
                        className: s.warningText,
                        variant: 'text-md/normal',
                        children: c ? i.NW.format(i.t.aCYv19, {}) : i.NW.string(i.t.soRxRU)
                    }),
                    (0, a.jsxs)(l.Ttm, {
                        className: s.linkCalloutContainer,
                        children: [
                            (0, a.jsxs)(l.Text, {
                                tag: 'span',
                                variant: c ? 'text-md/semibold' : 'text-md/normal',
                                color: c ? 'text-normal' : 'text-muted',
                                children: [k, '//']
                            }),
                            (0, a.jsx)(l.Text, {
                                tag: 'span',
                                variant: c ? 'text-md/normal' : 'text-md/semibold',
                                color: c ? 'text-muted' : 'text-normal',
                                children: C
                            }),
                            (0, a.jsx)(l.Text, {
                                tag: 'span',
                                variant: 'text-md/normal',
                                color: 'text-muted',
                                children: p
                            })
                        ]
                    }),
                    (0, a.jsx)(l.XZJ, {
                        className: s.checkbox,
                        type: l.XZJ.Types.INVERTED,
                        value: N,
                        onChange: (t, e) => g(e),
                        children: (0, a.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            children: c ? i.NW.format(i.t['haA+X1'], { protocol: k.replace(':', '') }) : i.NW.format(i.t.ZgXDsL, { domain: C })
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
                        onClick: b,
                        children: c ? i.NW.string(i.t.COq6kp) : i.NW.string(i.t.NcJfJC)
                    }),
                    (0, a.jsx)(l.zxk, {
                        type: 'button',
                        size: l.zxk.Sizes.MEDIUM,
                        color: l.zxk.Colors.PRIMARY,
                        onClick: j,
                        look: l.iLD.LINK,
                        children: i.NW.string(i.t['/g10LC'])
                    })
                ]
            })
        ]
    });
}
