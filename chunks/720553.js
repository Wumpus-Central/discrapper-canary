n.d(e, { default: () => u }), n(704826), n(35282);
var a = n(255367);
n(73800);
var l = n(990547),
    r = n(481060),
    i = n(213609),
    s = n(313201),
    o = n(626135),
    c = n(988158),
    x = n(981631),
    d = n(388032),
    m = n(946555);
function u(t) {
    let { url: e, trustUrl: n, isProtocol: u, onConfirm: h, onCancel: p, onClose: C, transitionState: k } = t,
        _ = (0, s.Dt)(),
        {
            protocol: g,
            authorityPrefix: D,
            hostname: M,
            theRestOfTheUrl: b,
            shouldTrustUrl: f,
            setShouldTrustUrl: j,
            handleConfirm: z,
            handleCancel: I
        } = (0, c.X)({
            url: e,
            trustUrl: n,
            onConfirm: h,
            onCancel: p,
            onClose: C
        });
    return (
        (0, i.Z)({
            type: l.ImpressionTypes.MODAL,
            name: l.ImpressionNames.MASKED_LINK_MODAL
        }),
        (0, a.jsxs)(r.Y0X, {
            size: r.CgR.DYNAMIC,
            transitionState: k,
            'aria-labelledby': _,
            children: [
                (0, a.jsxs)(r.hzk, {
                    children: [
                        (0, a.jsx)(r.X6q, {
                            id: _,
                            variant: 'heading-xl/bold',
                            className: m.title,
                            children: d.intl.string(d.t['3w1QGh'])
                        }),
                        (0, a.jsx)(r.Text, {
                            className: m.warningText,
                            variant: 'text-md/normal',
                            children: u ? d.intl.format(d.t.aCYv19, {}) : d.intl.string(d.t.soRxRU)
                        }),
                        (0, a.jsxs)(r.Ttm, {
                            className: m.linkCalloutContainer,
                            children: [
                                (0, a.jsxs)(r.Text, {
                                    tag: 'span',
                                    variant: u ? 'text-md/semibold' : 'text-md/normal',
                                    color: u ? 'text-normal' : 'text-muted',
                                    children: [g, D]
                                }),
                                (0, a.jsx)(r.Text, {
                                    tag: 'span',
                                    variant: u ? 'text-md/normal' : 'text-md/semibold',
                                    color: u ? 'text-muted' : 'text-normal',
                                    children: M
                                }),
                                (0, a.jsx)(r.Text, {
                                    tag: 'span',
                                    variant: 'text-md/normal',
                                    color: 'text-muted',
                                    children: b
                                })
                            ]
                        }),
                        (0, a.jsx)(r.XZJ, {
                            className: m.checkbox,
                            type: r.XZJ.Types.INVERTED,
                            value: f,
                            onChange: (t, e) => j(e),
                            children: (0, a.jsx)(r.Text, {
                                variant: 'text-sm/normal',
                                children: u ? d.intl.format(d.t['haA+X1'], { protocol: g.replace(':', '') }) : d.intl.format(d.t.ZgXDsL, { domain: M })
                            })
                        })
                    ]
                }),
                (0, a.jsxs)(r.mzw, {
                    children: [
                        (0, a.jsx)(r.zxk, {
                            type: 'button',
                            size: r.zxk.Sizes.MEDIUM,
                            color: r.zxk.Colors.BRAND,
                            onClick: () => {
                                z(),
                                    o.default.track(x.rMx.MASKED_LINK_MODAL_CLICKED, {
                                        is_trust_url_selected: f,
                                        action_type: 'confirm'
                                    });
                            },
                            children: u ? d.intl.string(d.t.COq6kp) : d.intl.string(d.t.NcJfJC)
                        }),
                        (0, a.jsx)(r.zxk, {
                            type: 'button',
                            size: r.zxk.Sizes.MEDIUM,
                            color: r.zxk.Colors.PRIMARY,
                            onClick: () => {
                                I(),
                                    o.default.track(x.rMx.MASKED_LINK_MODAL_CLICKED, {
                                        is_trust_url_selected: f,
                                        action_type: 'cancel'
                                    });
                            },
                            look: r.iLD.LINK,
                            children: d.intl.string(d.t['/g10LC'])
                        })
                    ]
                })
            ]
        })
    );
}
